import React from 'react';
import { churchInfo } from '../data/churchData';
import { Youtube, Instagram, Play, ExternalLink, Radio, Tv, Camera, Sparkles, Heart } from 'lucide-react';

export const SocialMediaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F8FAFC] to-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
            <span>Official Online Channels</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif-kr tracking-tight">
            하늘소리 미디어 & 소통 채널
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            언제 어디서나 은혜의 말씀을 나누고 교회의 따뜻한 일상을 전하는 하늘소리 공식 유튜브 및 인스타그램입니다.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* 1. YouTube Channel Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-600" />

            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600 group-hover:scale-105 transition-transform">
                    <Youtube className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-red-600 tracking-wider uppercase">Official YouTube</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">하늘소리교회 공식 유튜브</h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                매주 <strong className="text-slate-800">주일 오전 예배(11:00) 및 주일 오후 예배(14:00)</strong>를 유튜브 실시간 라이브 스트리밍으로 함께 송출합니다. 지난 주일 설교와 성경 강해 영상도 시청하실 수 있습니다.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Tv className="w-4 h-4 text-red-600 shrink-0" />
                  <span>주일 오전 11:00 / 오후 02:00 실시간 온라인 예배 생중계</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Play className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{churchInfo.pastor.name} 주일 설교 다시보기 및 말씀 묵상 쇼츠</span>
                </div>
              </div>
            </div>

            <a
              href={churchInfo.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Youtube className="w-4 h-4" />
              <span>유튜브 채널 바로가기 & 구독</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>
          </div>

          {/* 2. Instagram Channel Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between group">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737]" />

            <div>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 group-hover:scale-105 transition-transform">
                    <Instagram className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-pink-600 tracking-wider uppercase">Official Instagram</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">@haneulsori_church</h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                하늘소리교회의 따뜻한 주일 표정, 은혜로운 말씀 카드뉴스, 성도의 교제 및 주간 소식을 가장 빠르게 만나보실 수 있습니다.
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Sparkles className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>주일 은혜의 말씀 묵상 카드뉴스 및 성경 구절 피드</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <Heart className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>교회 행사 현장 스케치 및 따뜻한 성도의 교제 소식</span>
                </div>
              </div>
            </div>

            <a
              href={churchInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-95 text-white rounded-xl font-semibold text-sm transition-opacity flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>인스타그램 공식 계정 팔로우하기</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5 opacity-80" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
