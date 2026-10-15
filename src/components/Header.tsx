import React, { useState, useEffect } from 'react';
import { churchInfo } from '../data/churchData';
import {
  Menu,
  X,
  Navigation,
  ChevronRight
} from './icons';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const ChurchMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 2.5V10.5M8 5.5H14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M2.5 18L11 10.5L17.8 16.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 18.5L23 13L30 18.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 18V26.5H29.5V18.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 18.5V26.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M7.5 26.5V21C7.5 20.2 8.2 19.5 9 19.5H10.5C11.3 19.5 12 20.2 12 21V26.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="20" y="19" width="6" height="4.5" rx="0.8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

// Brand lockup: [mark] [기독교 / 대한복음교회 stacked] [하늘소리교회 + English name]
export const BrandLogo: React.FC<{ dark?: boolean }> = ({ dark }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shadow-xs text-white shrink-0">
      <ChurchMark className="w-8 h-8 text-white" />
    </div>
    {/* inline-grid sizes to the wider line; justify-between spreads "기독교" across the width of "대한복음교회" */}
    <div className={`inline-grid text-[11px] leading-[1.35] font-semibold ${dark ? 'text-sky-300' : 'text-slate-500'}`}>
      <span className="flex justify-between">
        {'기독교'.split('').map((c) => <span key={c}>{c}</span>)}
      </span>
      <span>대한복음교회</span>
    </div>
    <span>
      <span className={`block text-xl font-bold tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        {churchInfo.name}
      </span>
      <span className={`block text-[10px] tracking-wider uppercase font-semibold ${dark ? 'text-sky-400' : 'text-slate-400'}`}>
        {churchInfo.englishName}
      </span>
    </span>
  </div>
);

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTabs = [
    { id: 'intro', label: '교회 소개' },
    { id: 'pastor', label: '섬기는 사람들' },
    { id: 'worship', label: '예배 시간 안내' },
    { id: 'location', label: '오시는 길' },
    { id: 'prayer', label: '중보기도' },
    { id: 'archive', label: '자료실' },
    { id: 'offering', label: '헌금 안내' },
  ];

  const handleTabClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  const kakaoMapToUrl = `https://map.kakao.com/link/to/하늘소리교회,37.72806145852167,126.55907722599235`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 text-slate-800 py-3'
            : 'bg-white/95 backdrop-blur-sm border-b border-slate-200 text-slate-800 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleTabClick('home')}
            className="text-left cursor-pointer hover:opacity-90 transition-opacity"
            aria-label={`${churchInfo.denomination} ${churchInfo.name} 홈`}
          >
            <BrandLogo />
          </button>

          {/* Desktop Navigation Tabs */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'text-slate-600 hover:text-sky-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
            <a
              href="/bible-ai/"
              className="px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all whitespace-nowrap text-sky-600 hover:bg-sky-50"
            >
              AI 말씀 추천
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 focus:outline-none border border-slate-200 cursor-pointer"
              aria-label="메뉴 열기"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 bg-white border-t border-slate-200 shadow-xl animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
              {navTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-sky-500 text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </button>
                );
              })}
              <a
                href="/bible-ai/"
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all text-left bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200"
              >
                <span>AI 말씀 추천</span>
                <ChevronRight className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-1 gap-2">
              <a
                href={kakaoMapToUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-[#FEE500] text-[#191919] text-xs font-bold flex items-center justify-center gap-1.5 border border-[#E0CA00]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#191919]" />
                <span>길찾기</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
