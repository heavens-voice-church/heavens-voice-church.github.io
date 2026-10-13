import React from 'react';
import { churchInfo } from '../data/churchData';
import { Award, BookOpen, Quote, ShieldCheck, GraduationCap } from './icons';

export const PastorSection: React.FC = () => {
  return (
    <div id="pastor" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Pastor Main Profile Card */}
        <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl overflow-hidden shadow-xl border border-sky-900/40">
          <div className="flex flex-col">

            {/* Top: Pastor & Congregation Photo */}
            <div className="px-8 pt-10 sm:px-10 lg:px-12 flex flex-col items-center text-center">
              {/* Temporary illustration; to restore the photo set photoUrl back to congregation.jpg and re-add a <picture> with the .webp source */}
              <img
                src={churchInfo.pastor.photoUrl}
                alt={`하늘소리교회 ${churchInfo.pastor.name}와 교인들 일러스트`}
                width={1200}
                height={800}
                loading="lazy"
                className="w-full max-w-4xl rounded-2xl"
              />

              <div className="mt-5">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {churchInfo.pastor.name} <span className="text-lg text-sky-300 font-normal">{churchInfo.pastor.title}</span>
                </h3>
                <p className="text-xs text-sky-200/80 tracking-wider mt-1">
                  Senior Pastor of Heaven's Voice Church
                </p>
              </div>
            </div>

            {/* Bottom: Greeting & Scripture */}
            <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 text-sky-400">
                  <Quote className="w-5 h-5 rotate-180 opacity-90 text-sky-400" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                    담임목사 인사말
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
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

      </div>
    </div>
  );
};
