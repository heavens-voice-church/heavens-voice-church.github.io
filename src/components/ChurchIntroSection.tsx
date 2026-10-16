import React from 'react';
import { churchInfo, churchIntro, churchHistory } from '../data/churchData';
import { ShieldCheck, BookOpen, Calendar } from './icons';

export const ChurchIntroSection: React.FC = () => {
  const gospelCoreValues = [
    {
      number: '01',
      title: '신앙은 복음적이고 생명적이어라',
    },
    {
      number: '02',
      title: '신학은 충분히 학문적이어라',
    },
    {
      number: '03',
      title: '교회는 한국인 자신의 교회이어라',
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
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            교회 소개
          </h2>
        </div>

        {/* Introduction / History / Denomination tenets, stacked vertically */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {/* 하늘소리교회 소개 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-600">
              <BookOpen className="w-5 h-5" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">하늘소리교회를 소개합니다</h3>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed break-keep">
              {churchIntro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="border-l-4 border-sky-400 bg-sky-50/60 rounded-r-2xl px-5 py-4 text-sm sm:text-base text-sky-800 font-medium leading-relaxed break-keep">
              {churchIntro.invitation.map((line, i) => (
                <span key={i} className="block">{i === 0 && '"'}{line}{i === churchIntro.invitation.length - 1 && '"'}</span>
              ))}
            </blockquote>
          </div>

          {/* 교회 연혁 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-600">
              <Calendar className="w-5 h-5" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">교회 연혁</h3>
            </div>
            {churchHistory.length > 0 ? (
              <ol className="relative border-l-2 border-sky-200 ml-1.5 space-y-4">
                {churchHistory.map((h, i) => (
                  <li key={i} className="pl-5 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-sky-500" />
                    <p className="text-xs font-bold text-sky-700">{h.date}</p>
                    <p className="text-sm text-slate-700">{h.title}</p>
                    {h.note && <p className="text-xs text-slate-500">{h.note}</p>}
                  </li>
                ))}
              </ol>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                교회 연혁을 준비하고 있습니다.
              </div>
            )}
          </div>

          {/* 기독교대한복음교회 3대 신앙 지침 */}
          {/* <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-600">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">기독교대한복음교회 3대 신앙 지침</h3>
            </div>
            <ol className="divide-y divide-slate-100">
              {gospelCoreValues.map((pillar) => (
                <li key={pillar.number} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-sm border border-sky-100">
                    {pillar.number}
                  </span>
                  <span className="text-base font-bold text-slate-900">{pillar.title}</span>
                </li>
              ))}
            </ol>
          </div> */}
        </div>
      </div>
    </div>
  );
};
