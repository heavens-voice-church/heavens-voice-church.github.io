import React from 'react';
import { churchInfo } from '../data/churchData';
import { ShieldCheck, CheckCircle2 } from './icons';

export const ChurchIntroSection: React.FC = () => {
  const gospelCoreValues = [
    {
      number: '01',
      title: '신앙은 복음적이고 생명적이어라',
      engTitle: 'Evangelical & Vital Faith',
      description:
        '인간의 전통이나 권위보다 하나님의 말씀인 성경과 예수 그리스도의 복음을 중심에 두고, 살아서 역사하는 생명력 있는 신앙을 지향합니다.',
      points: ['오직 성경과 복음 중심', '생명력 있는 구원의 체험', '성령의 역사하심 고백']
    },
    {
      number: '02',
      title: '신학은 충분히 학문적이어라',
      engTitle: 'Academic Theology',
      description:
        '맹목적인 신앙을 배격하며, 성경과 신앙의 고백을 학문적이고 건전한 비판력을 가지고 충분히 연구하고 성찰합니다.',
      points: ['지성과 영성의 균형', '깊이 있는 성경 연구', '시대와 소통하는 신학']
    },
    {
      number: '03',
      title: '교회는 한국인 자신의 교회이어라',
      engTitle: 'Indigenous Korean Church',
      description:
        '외국 선교회의 지배나 주관에서 벗어나 한국인의 정신과 자립적인 책임 아래 한국인의 심성에 어울리는 참된 한국인 자신의 교회를 세워갑니다.',
      points: ['민족의 역사적 책임 감당', '자립과 자치의 교회', '한국인의 심성을 품은 복음화']
    }
  ];

  return (
    <div id="intro" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span>{churchInfo.denomination} {churchInfo.name}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif-kr">
            교회 소개 및 <span className="text-sky-600">3대 신앙 지침</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {churchInfo.subSlogan}
          </p>
        </div>

        {/* Core Values Card or Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-sky-700 font-serif-kr">
            "{churchInfo.slogan}"
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            하늘소리교회는 예수 그리스도의 은혜와 진리 안에서 영적인 예배를 드리고, 성도의 성숙한 교제를 도모하며,<br/> 세상 속에서 그리스도의 빛을 비추는 복음의 공동체입니다.
          </p>
        </div>

        {/* Evangelical Church of Korea 3 Core Pillars */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-serif-kr">
              기독교대한복음교회 3대 신앙 지침
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              하늘소리교회가 굳건히 지켜나가는 교단의 자랑스러운 3대 복음 표어입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gospelCoreValues.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-xs text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm border border-sky-100">
                      {pillar.number}
                    </span>
                    <span className="text-[11px] font-semibold text-sky-600 uppercase tracking-wider">
                      {pillar.engTitle}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-serif-kr">
                    {pillar.title}
                  </h4>

                  {/* <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p> */}
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 space-y-1.5">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
