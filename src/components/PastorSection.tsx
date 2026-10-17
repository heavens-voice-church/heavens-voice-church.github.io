import React from 'react';
import { churchInfo, churchOfficers } from '../data/churchData';
import { Quote, GraduationCap, Users } from './icons';

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
                  width={900}
                  height={1205}
                  loading="lazy"
                  className="w-full max-w-[240px] lg:max-w-[260px] rounded-2xl shadow-lg"
                />
              ) : (
                <div className="w-full max-w-sm aspect-4/3 rounded-2xl border-2 border-dashed border-sky-700/60 bg-white/5 flex items-center justify-center text-sm text-sky-200/80">
                  사진 첨부 예정
                </div>
              )}

              <div className="mt-5">
                <h3 className="text-[18px] sm:text-[24px] font-bold text-white">
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
                  "우리 교회를 찾아주신 성도님들과 방문자 여러분을 환영합니다."
                </h3>

                <div className="space-y-3 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  <p>하늘소리교회는 교회의 본래적 의미를 잃어가는 교권주의와 제도화를 경계하고, 말씀을 중심으로 
                    <br/>그리스도의 십자가와 부활, 다시 오실 주님을 힘써 전하며 주님의 사랑을 삶 속에서 실천하고자 애쓰는 
                    <br/>거룩한 공동체입니다.</p>
                </div>

                {/* Invitation (in the box that used to hold 목회 성구) */}
                <div className="p-4 rounded-xl bg-sky-950/60 border border-sky-700/50 mt-4">
                  <p className="text-sky-50 text-sm sm:text-base font-bold leading-relaxed">
                    말씀이 살아있고, 아름다운 성만찬을 나누는 교회,
                    <br/>청년을 사랑하는 교회, 자연 친화적인 교회,
                    <br/>함께 기뻐하고 함께 슬퍼하는 믿음 공동체, 
                    <br/>하늘소리교회로 여러분을 초대합니다.
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
