import React from 'react';
import { churchInfo, churchOfficers } from '../data/churchData';
import { BookOpen, Quote, GraduationCap, Users } from './icons';

export const PastorSection: React.FC = () => {
  return (
    <div id="pastor" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-sky-500" />
            <span>함께 섬기는 공동체</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            하늘소리교회를 <span className="text-sky-600">섬기는 사람들</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed break-keep">
            말씀과 기도로 하늘소리교회 공동체를 세우고 섬기는 사람들을 소개합니다.
          </p>
        </div>

        {/* Pastor Main Profile Card */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-sky-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Left: Pastor Photo (compact) */}
            <div className="lg:col-span-4 p-8 sm:p-10 lg:p-12 lg:pr-4 flex flex-col items-center justify-center text-center">
              {/* Placeholder until the pastor's photo arrives: add it to public/ and set pastor.photoUrl */}
              {churchInfo.pastor.photoUrl ? (
                <img
                  src={churchInfo.pastor.photoUrl}
                  alt={`하늘소리교회 ${churchInfo.pastor.title} ${churchInfo.pastor.name}`}
                  loading="lazy"
                  className="w-full max-w-sm rounded-2xl"
                />
              ) : (
                <div className="w-full max-w-sm aspect-4/3 rounded-2xl border-2 border-dashed border-sky-700/60 bg-white/5 flex items-center justify-center text-sm text-sky-200/80">
                  사진 첨부 예정
                </div>
              )}

              <div className="mt-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {churchInfo.pastor.name} <span className="text-lg text-sky-300 font-normal">{churchInfo.pastor.title}</span>
                </h3>
                <p className="text-xs text-sky-200/80 tracking-wider mt-1">
                  Senior Pastor of Heaven's Voice Church
                </p>
              </div>
            </div>

            {/* Right: Greeting & Scripture */}
            <div className="lg:col-span-8 p-8 sm:p-10 lg:p-12 lg:pl-4 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 text-sky-400">
                  <Quote className="w-5 h-5 rotate-180 opacity-90 text-sky-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                    담임목사 인사말
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  "복음의 진리 안에서 자유와 생명을 누리는 신앙 공동체에 오신 것을 환영합니다."
                </h3>

                <div className="space-y-3 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  <p>하늘소리교회 웹페이지를 찾아주신 모든 성도님과 방문자 여러분을 주님의 이름으로 진심으로 환영하고 축복합니다.</p>
                  <p>기독교대한복음교회는 "신앙은 복음적이고 생명적이어라, 신학은 충분히 학문적이어라, 교회는 한국인 자신의 교회이어라"라는 자랑스러운 3대 표어 위에 서 있습니다.</p>
                  <p>우리 하늘소리교회는 형식적인 종교 생활을 넘어, 예수 그리스도의 십자가 복음과 참된 생명의 말씀을 삶 속에서 실천하는 거룩한 공동체입니다.</p>
                  <p>주일 오전과 오후, 온 성도가 한마음으로 드리는 정결한 예배를 통해 하늘의 평강과 영적 치유를 경험하시기를 간절히 기도합니다.</p>
                </div>

                {/* Pastor Favorite Scripture */}
                <div className="p-4 rounded-xl bg-sky-950/60 border border-sky-700/50 space-y-1 mt-4">
                  <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    <span>목회 성구</span>
                  </div>
                  <p className="text-white text-sm italic">
                    "{churchInfo.pastor.bibleVerse.verse}"
                  </p>
                  <p className="text-xs text-sky-300 font-medium text-right">
                    - {churchInfo.pastor.bibleVerse.reference}
                  </p>
                </div>
              </div>

              {/* Pastor Education / Ordination */}
              <div className="pt-6 border-t border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-sky-300 font-semibold">
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                    <span>담임목사 소개</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-0.5">
                    {churchInfo.pastor.education.map((edu, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-sky-400" />
                        <span>{edu}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Church Officers (elders, deacons, ...): shown once churchOfficers has entries */}
        {churchOfficers.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">함께 섬기는 사람들</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {churchOfficers.map((o) => (
                <div key={o.title + o.name} className="bg-white rounded-2xl border border-slate-200 p-5 text-center shadow-xs space-y-3">
                  {o.photoUrl && (
                    <img src={o.photoUrl} alt={`${o.name} ${o.title}`} loading="lazy" className="w-24 h-24 mx-auto rounded-full object-cover" />
                  )}
                  <div>
                    <p className="text-base font-bold text-slate-900">{o.name} <span className="text-sm font-medium text-sky-600">{o.title}</span></p>
                    {o.description && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{o.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
