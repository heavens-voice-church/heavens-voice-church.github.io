import React from 'react';
import { churchInfo, getWorshipTimeLabel } from '../data/churchData';
import { BookOpen } from './icons';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Main Hero Text (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-0 text-left flex flex-col lg:justify-between lg:pb-2.5">
            {/* Eyebrow / Catchphrase / Feature grid spaced by justify-between; badge text, headline and subcopy share one left line (pill shifted by its padding+border) */}
            <div className="inline-flex items-center gap-2">
              <span className="-ml-[13px] px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-bold text-[15px] tracking-wider">
                {churchInfo.denomination} · 김포 하늘소리교회
              </span>
            </div>

            {/* Main Catchphrase (lg:pb-8 nudges it up toward the badge within justify-between) */}
            <div className="space-y-4 lg:pb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] font-bold tracking-tighter text-slate-900 leading-[1.25]">
                <span className="font-serif-kr">
                  <span className="text-[length:calc(1em-2px)]">은혜의 50년</span><br />
                  {/* opening quote hangs into the left gutter so "하" sits on the shared left line */}
                  <span className="text-sky-600"><span className="absolute -translate-x-full">"</span>하늘소리, 세상의 빛이어라"</span>
                </span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                고막리에서 들려오는 아름다운 복음의 소리, 하늘소리교회로 오세요.
              </p>
            </div>

            {/* Quick Feature Grid */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 text-left">
              <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('worship')}>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">주일 예배</p>
                <p className="text-sm font-bold text-slate-900 mt-1">{getWorshipTimeLabel('morning')}</p>
                <p className="text-[11px] text-sky-600 font-medium">하늘소리교회 예배당</p>
              </div>
              <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('worship')}>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">성경읽기와 중보기도</p>
                <p className="text-sm font-bold text-slate-900 mt-1">{getWorshipTimeLabel('afternoon')}</p>
                <p className="text-[11px] text-sky-600 font-medium">하늘소리교회 예배당</p>
              </div>
              <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('location')}>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">찾아오시는 길</p>
                <p className="text-sm font-bold text-slate-900 mt-1">교회 위치 안내</p>
                <p className="text-[11px] text-sky-600 font-medium">버스·자가용</p>
              </div>
            </div>
          </div>

          {/* Right Card / Visual Banner (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-slate-100 rounded-3xl overflow-hidden shadow-lg p-2.5 border border-slate-200">
              {/* Image Preview */}
              <div className="relative h-72 sm:h-80 lg:h-72 rounded-2xl overflow-hidden bg-cover bg-center">
                <picture>
                  <source srcSet={`${import.meta.env.BASE_URL}church.webp`} type="image/webp" />
                  <img
                    src={`${import.meta.env.BASE_URL}church.jpg`}
                    alt="김포 하늘소리교회 예배당 전경"
                    width={1600}
                    height={1200}
                    fetchPriority="high"
                    className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                  />
                </picture>
              </div>

              {/* Pastor Bible Verse Bottom Box */}
              <div className="px-4 py-3 text-left space-y-2 bg-white rounded-2xl mt-2.5 border border-slate-200">
                <div className="flex items-center text-xs">
                  <span className="font-bold text-sky-600 flex items-center gap-1.5 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    교회 묵상 말씀
                  </span>
                </div>
                <p className="text-slate-800 text-xs sm:text-sm leading-relaxed italic">
                  "{churchInfo.pastor.bibleVerse.verse}"
                </p>
                <div className="pt-1.5 border-t border-slate-100 text-xs flex items-center justify-between">
                  <span className="text-slate-600 font-medium">담임목사 : {churchInfo.pastor.name}</span>
                  <span className="text-slate-500 text-[9px]">{churchInfo.pastor.bibleVerse.reference}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
