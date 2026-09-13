import React, { useState, useEffect } from 'react';
import { churchInfo } from '../data/churchData';
import {
  Menu,
  X,
  Church,
  Clock,
  MapPin,
  Image as ImageIcon,
  Heart,
  User,
  Bell,
  Navigation,
  ExternalLink,
  ChevronRight,
  Phone,
  Youtube
} from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

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
    { id: 'pastor', label: '담임 목사 소개' },
    { id: 'worship', label: '예배 시간 안내' },
    { id: 'location', label: '교회 위치' },
    { id: 'offering', label: '헌금 안내' },
    { id: 'channel', label: '교회 SNS 채널' },
  ];

  const handleTabClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  const kakaoMapToUrl = `https://map.kakao.com/link/to/하늘소리교회,37.72806145852167,126.55907722599235`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="px-2 py-0.5 rounded-md bg-sky-950/80 border border-sky-700/60 text-sky-300 text-[11px] font-bold">
              {churchInfo.denomination}
            </span>
            <span className="text-white font-medium flex items-center">
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block mr-1.5 animate-pulse" />
              주일 오전 11:00 / 오후 02:00
            </span>
            <span className="hidden md:inline-block text-slate-600">|</span>
            <a
              href={`tel:${churchInfo.phone}`}
              className="hidden md:inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>{churchInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

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
            className="flex items-center space-x-3 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center shadow-xs text-white group-hover:bg-sky-600 transition-colors">
              <Church className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 font-serif-kr">
                  {churchInfo.name}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-cinzel tracking-wider uppercase font-semibold">
                {churchInfo.englishName}
              </p>
            </div>
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
            </div>

            {/* Mobile Actions */}
            <div className="mt-4 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2">
              <a
                href={churchInfo.youtubeChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>유튜브 채널</span>
              </a>
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
