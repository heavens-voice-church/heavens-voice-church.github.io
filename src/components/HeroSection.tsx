import React from 'react';
import { churchInfo } from '../data/churchData';
import { BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Main Hero Text (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Slogan */}
            <div className="inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-bold text-xs tracking-wider">
                {churchInfo.denomination} 하늘소리교회
              </span>
            </div>

            {/* Main Catchphrase */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-slate-900 font-serif-kr leading-[1.25]">
                하늘의 소리로<br />
                <span className="text-sky-600">세상을 치유하는 복음공동체</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                {churchInfo.subSlogan}.
                {/* 예수 그리스도의 참된 복음과 생명의 말씀 안에서 하나님을 경외하고 서로를 품는 따뜻한 신앙의 보금자리입니다. */}
              </p>
            </div>



            {/* Quick Feature Grid */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6 text-left">
              <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('worship')}>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">주일 오전 예배</p>
                <p className="text-sm font-bold text-slate-900 mt-1">오전 11:00</p>
                <p className="text-[11px] text-sky-600 font-medium">하늘소리교회 예배당</p>
              </div>
              <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => onNavigate('worship')}>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">주일 오후 예배</p>
                <p className="text-sm font-bold text-slate-900 mt-1">오후 01:30</p>
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
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-cover bg-center">
                <img
                  src={`${import.meta.env.BASE_URL}church.jpg`}
                  alt="하늘소리교회 예배당 전경"
                  className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Pastor Bible Verse Bottom Box */}
              <div className="p-5 text-left space-y-3 bg-white rounded-2xl mt-2.5 border border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-sky-600 flex items-center gap-1.5 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    교회 묵상 말씀
                  </span>
                  <span className="text-slate-500 font-mono">{churchInfo.pastor.bibleVerse.reference}</span>
                </div>
                <p className="text-slate-800 text-xs sm:text-sm font-serif-kr leading-relaxed italic">
                  "{churchInfo.pastor.bibleVerse.verse}"
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-600 font-medium">담임목사 : {churchInfo.pastor.name}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
