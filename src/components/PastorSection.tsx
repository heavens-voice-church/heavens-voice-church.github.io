import React from 'react';
import { churchInfo } from '../data/churchData';
import { Award, BookOpen, Quote, ShieldCheck, GraduationCap } from 'lucide-react';

export const PastorSection: React.FC = () => {
  return (
    <div id="pastor" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-sky-500" />
            <span>{churchInfo.denomination} {churchInfo.name}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif-kr">
            담임목사 소개 및 <span className="text-sky-600">목회 비전</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            기독교대한복음교회의 역사와 신앙 전통 위에서, 순전한 복음의 능력으로 영혼을 살리고 <br/>가정을 세우는 목양을 펼쳐갑니다.
          </p>
        </div>

        {/* Pastor Main Profile Card */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-sky-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* Left: Pastor Image */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full">
              <img
                src={churchInfo.pastor.photoUrl}
                alt={`하늘소리교회 ${churchInfo.pastor.name}`}
                className="w-full h-full object-cover object-center brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-semibold mb-2">
                  <Award className="w-3.5 h-3.5" />
                  <span>{churchInfo.pastor.denomination}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif-kr">
                  {churchInfo.pastor.name} <span className="text-lg text-sky-300 font-normal">{churchInfo.pastor.title}</span>
                </h3>
                <p className="text-xs text-sky-200/80 font-cinzel tracking-wider mt-1">
                  Senior Pastor of Heaven's Voice Church
                </p>
              </div>
            </div>

            {/* Right: Greeting & Scripture */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 text-sky-400">
                  <Quote className="w-5 h-5 rotate-180 opacity-90 text-sky-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                    담임목사 목회 서신 & 인사말
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif-kr leading-snug">
                  "{churchInfo.pastor.greetingTitle}"
                </h3>

                <div className="space-y-3 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {churchInfo.pastor.greetingMessage.map((msg, mIdx) => (
                    <p key={mIdx}>{msg}</p>
                  ))}
                </div>

                {/* Pastor Favorite Scripture */}
                <div className="p-4 rounded-xl bg-sky-950/60 border border-sky-700/50 space-y-1 mt-4">
                  <div className="flex items-center gap-2 text-sky-300 text-xs font-semibold">
                    <BookOpen className="w-4 h-4 text-sky-400" />
                    <span>목회 성구</span>
                  </div>
                  <p className="text-white text-sm font-serif-kr italic">
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

      </div>
    </div>
  );
};
