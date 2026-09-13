import React from 'react';
import { worshipSchedules, churchInfo } from '../data/churchData';
import {
  Clock,
  Tv,
  MapPin,
  Users,
  Heart,
  ChevronRight,
  Radio,
  ExternalLink,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface WorshipScheduleSectionProps {
  onNavigate: (tabId: string) => void;
}

export const WorshipScheduleSection: React.FC<WorshipScheduleSectionProps> = ({ onNavigate }) => {
  return (
    <div id="worship" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-sky-500" />
            <span>주일 예배 안내 (오전 & 오후)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif-kr">
            하늘소리교회 <span className="text-sky-600">예배 시간표</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            하늘소리교회는 매주 <strong className="text-sky-700">주일 오전 예배</strong>와 <strong className="text-sky-700">주일 오후 예배</strong>로 하나님께 온전한 찬양과 영광을 올려드립니다.
          </p>
        </div>

        {/* 2 Main Sunday Worship Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {worshipSchedules.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border-2 border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
            >
              {/* Top Sky Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-sky-400 to-sky-600" />

              <div className="space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200">
                    {idx === 0 ? '주일 대예배' : '주일 찬양예배'}
                  </span>

                  {item.isOnlineLive && (
                    <span className="flex items-center gap-1.5 text-xs text-red-600 font-bold bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      {/* <span>YouTube LIVE</span> */}
                    </span>
                  )}
                </div>

                {/* Name & Time */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif-kr group-hover:text-sky-600 transition-colors">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2.5 text-sky-700 font-bold text-base mt-2 bg-sky-50/80 p-3 rounded-xl border border-sky-100">
                    <Clock className="w-5 h-5 text-sky-500 shrink-0" />
                    <span>{item.dayTime}</span>
                  </div>
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                )}

                {/* Liturgy / Order of Service */}
                {item.orderSummary && item.orderSummary.length > 0 && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <BookOpen className="w-4 h-4 text-sky-500" />
                      <span>예배 순서 안내</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-slate-600">
                      {item.orderSummary.map((order, oIdx) => (
                        <div key={oIdx} className="flex items-center gap-1.5 truncate">
                          <span className="text-sky-500 font-semibold">{oIdx + 1}.</span>
                          <span className="truncate">{order}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Worship Etiquette & Live Callout Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">

          {/* Card 1: Worship Preparation Guide */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              <CalendarCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-slate-900">예배 10분 전 기도로 준비</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              예배 시작 10분 전에 도착하시어 기도로 마음을 정돈하고, 예배당 안내위원의 안내에 따라 앞자리부터 착석해 주시기 바랍니다.
            </p>
          </div>

          {/* Card 2: Location Shortcut */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-slate-900">찾아오시는 길</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                하늘소리교회 예배당으로 찾아오시는 길, 대중교통 및 지도 정보를 자세히 확인하실 수 있습니다.
              </p>
            </div>

            <button
              onClick={() => onNavigate('location')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold transition-colors w-full cursor-pointer shadow-xs"
            >
              <span>위치 정보 확인</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
