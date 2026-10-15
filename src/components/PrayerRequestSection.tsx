import React, { useState } from 'react';
import { Heart, ShieldCheck, Check } from './icons';

// Google Apps Script web app URL (see apps-script/prayer-request.gs). Empty → form shows "준비 중".
const ENDPOINT = import.meta.env.VITE_PRAYER_ENDPOINT;

const CATEGORIES = ['개인', '가정', '교회', '나라', '열방'] as const;
const VISIBILITIES = ['담임목사만', '중보기도팀'] as const;

type Status = 'idle' | 'sending' | 'done' | 'error';

const emptyForm = {
  name: '',
  contact: '',
  category: CATEGORIES[0] as string,
  visibility: VISIBILITIES[0] as string,
  content: '',
  consent: false,
  website: '', // honeypot
};

export const PrayerRequestSection: React.FC = () => {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ENDPOINT) return;
    setStatus('sending');
    setError('');
    try {
      // text/plain body keeps this a "simple" CORS request (no preflight), which Apps Script requires.
      const res = await fetch(ENDPOINT, { method: 'POST', body: JSON.stringify(form) });
      const result = await res.json();
      if (!result.ok) throw new Error(result.error);
      setStatus('done');
      setForm(emptyForm);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error && err.message ? err.message : '전송에 실패했습니다.');
    }
  };

  const inputClass =
    'w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500';

  return (
    <div id="prayer" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold">
            <Heart className="w-3.5 h-3.5 text-sky-500" />
            <span>함께 기도합니다</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            <span className="text-sky-600">중보기도</span> 요청
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed break-keep">
            기도가 필요한 제목을 남겨 주세요. 하늘소리교회가 마음을 모아 함께 기도하겠습니다.
          </p>
        </div>

        {status === 'done' ? (
          <div className="rounded-3xl border border-sky-200 bg-sky-50/60 p-10 text-center space-y-3">
            <Check className="w-10 h-10 text-sky-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">기도 제목이 전달되었습니다</h3>
            <p className="text-sm text-slate-600">함께 기도하겠습니다.</p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              다른 기도 제목 남기기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 space-y-5 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-700">이름 (선택, 비우면 익명)</span>
                <input className={inputClass} maxLength={30} value={form.name} onChange={(e) => set('name', e.target.value)} />
              </label>
              <label className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-700">연락처 (선택)</span>
                <input className={inputClass} maxLength={50} value={form.contact} onChange={(e) => set('contact', e.target.value)} placeholder="회신이 필요하신 경우" />
              </label>
            </div>

            <fieldset className="space-y-2">
              <legend className="text-xs font-semibold text-slate-700">기도 분류</legend>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => (
                  <label key={c} className={`px-4 py-2 rounded-xl text-xs font-semibold border cursor-pointer transition-colors ${form.category === c ? 'bg-sky-500 text-white border-sky-500' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'}`}>
                    <input type="radio" name="category" value={c} checked={form.category === c} onChange={() => set('category', c)} className="sr-only" />
                    {c}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-slate-700">기도 제목 *</span>
              <textarea className={`${inputClass} min-h-40 resize-y`} required maxLength={2000} value={form.content} onChange={(e) => set('content', e.target.value)} />
              <span className="block text-right text-[11px] text-slate-400">{form.content.length} / 2000</span>
            </label>

            <fieldset className="space-y-2">
              <legend className="text-xs font-semibold text-slate-700">공개 범위</legend>
              <div className="flex flex-wrap gap-4 text-sm text-slate-700">
                {VISIBILITIES.map((v) => (
                  <label key={v} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="visibility" value={v} checked={form.visibility === v} onChange={() => set('visibility', v)} className="accent-sky-500" />
                    {v}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Honeypot: hidden from people, bots fill it and get silently dropped server-side */}
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.website} onChange={(e) => set('website', e.target.value)} />

            <label className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed cursor-pointer">
              <input type="checkbox" required checked={form.consent} onChange={(e) => set('consent', e.target.checked)} className="mt-0.5 accent-sky-500" />
              <span>
                [필수] 개인정보 수집·이용에 동의합니다. 
                <br/> 수집 항목: 이름·연락처(선택 입력), 기도 제목
                <br/>목적: 중보기도 및 회신
                <br/> 보관: 기도 요청 처리 후 1년 이내 파기. 
              </span>
            </label>

            {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
            {!ENDPOINT && <p className="text-sm text-slate-500">중보기도 요청 접수를 준비하고 있습니다.</p>}

            <button
              type="submit"
              disabled={!ENDPOINT || status === 'sending'}
              className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 disabled:bg-slate-300 text-white font-bold text-sm transition-colors cursor-pointer disabled:cursor-not-allowed"
            >
              {status === 'sending' ? '전송 중...' : '기도 제목 보내기'}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
              보내주신 기도 제목은 공개 범위에 따라 담임목사 또는 중보기도팀만 확인합니다.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
