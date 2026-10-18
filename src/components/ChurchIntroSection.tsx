import React from 'react';
import { churchInfo, churchIntro, churchHistory, churchPrehistory } from '../data/churchData';
import { ShieldCheck, BookOpen, Calendar } from './icons';

export const ChurchIntroSection: React.FC = () => {
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

        {/* Introduction / History / Denomination overview, stacked vertically */}
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
          </div>

          {/* 교회 연혁 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-600">
              <Calendar className="w-5 h-5" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">교회 연혁</h3>
            </div>
            {/* 교회의 전신: smaller, muted timeline above the church's own history */}
            {churchPrehistory.length > 0 && (
              <div className="rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3 space-y-2">
                <p className="text-[11px] font-semibold text-slate-500">교회의 전신</p>
                <ol className="relative border-l border-dashed border-slate-300 ml-1 space-y-2">
                  {churchPrehistory.map((h, i) => (
                    <li key={i} className="pl-4 relative">
                      <span className="absolute -left-[3.5px] top-1.5 w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <p className="text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-600">{h.date}</span> · {h.title}
                      </p>
                      {h.note && <p className="text-[11px] text-slate-400 leading-relaxed">{h.note}</p>}
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {churchHistory.length > 0 ? (
              <ol className="relative border-l-2 border-sky-200 ml-1.5 space-y-4">
                {churchHistory.map((h, i) => (
                  <li key={i} className="pl-5 relative">
                    <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-sky-500" />
                    <p className="text-xs font-bold text-sky-700">{h.date}</p>
                    <p className="text-sm font-semibold text-slate-800">{h.title}</p>
                    {h.note && <p className="text-xs text-slate-500 leading-relaxed whitespace-pre-line mt-0.5">{h.note}</p>}
                  </li>
                ))}
              </ol>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
                교회 연혁을 준비하고 있습니다.
              </div>
            )}
          </div>

          {/* 기독교대한복음교회 교단 개요 */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-sky-600">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">기독교대한복음교회 교단 소개</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              우리 교회가 속한 기독교대한복음교회 교단 개요 및 특징입니다.
            </p>
            <dl className="divide-y divide-slate-100 text-sm sm:text-base">
              <div className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4 py-4 first:pt-0">
                <dt className="font-bold text-sky-700">설립</dt>
                <dd className="text-slate-600 leading-relaxed">
                  1935년 12월 22일 '한국인 자신의 교회'를 선언하며 서양으로부터 도입된 근본주의 신앙과 신학에 대한 반성과 쇄신의 개혁 운동을 시작으로 '소하고 순한 교회'에 정의, 평화, 창조질서보전의 생명신앙을 담고, 최태용 목사가 창립한 자생적 토착 개신교단입니다.
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4 py-4">
                <dt className="font-bold text-sky-700">3대 표어</dt>
                <dd>
                  <ul className="space-y-1.5 text-slate-800 font-semibold">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />신앙은 복음적이고 생명적이어라</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />신학은 충분히 학문적이어라</li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />교회는 한국인 자신의 교회이어라</li>
                  </ul>
                </dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4 py-4 last:pb-0">
                <dt className="font-bold text-sky-700">소속 협의체</dt>
                <dd className="text-slate-600 leading-relaxed">
                  한국기독교교회협의회(NCCK) 및 아시아기독교협의회(CCA)의 정식 회원 교단입니다.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};
