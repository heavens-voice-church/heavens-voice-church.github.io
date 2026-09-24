import React, { useState } from 'react';
import { churchOfferingAccounts, churchInfo } from '../data/churchData';
import { OfferingAccount } from '../types';
import {
  Heart,
  Copy,
  Check,
  CreditCard,
  Building,
  FileText,
  Smartphone,
  ShieldCheck,
  Info
} from './icons';

export const OnlineOfferingSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'accounts' | 'guide' | 'receipt'>('accounts');

  const handleCopyFormatted = async (acc: OfferingAccount) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(acc.accountNumber);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = acc.accountNumber;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedId(acc.id);
      setTimeout(() => {
        setCopiedId(null);
      }, 2500);
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
    }
  };

  return (
    <div id="offering" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-sky-500" />
            <span>정성과 감사의 봉헌</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif-kr">
            하늘소리교회 <span className="text-sky-600">온라인 헌금 안내</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            "각각 그 마음에 정한 대로 할 것이요 인색함으로나 억지로 하지 말지니 하나님은 즐겨 내는 자를 사랑하시느니라"<br/> (고린도후서 9장 7절)
          </p>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 gap-1">
            <button
              onClick={() => setActiveTab('accounts')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'accounts'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>헌금 계좌번호</span>
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'guide'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>간편 송금 가이드</span>
            </button>
            <button
              onClick={() => setActiveTab('receipt')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'receipt'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>기부금 영수증 안내</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Offering Accounts Grid */}
        {activeTab === 'accounts' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {churchOfferingAccounts.map((acc) => {
                const isCopied = copiedId === acc.id;
                return (
                  <div
                    key={acc.id}
                    className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md hover:border-sky-400 transition-all duration-300 flex flex-col justify-between space-y-6"
                  >
                    <div className="space-y-4">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-700">
                            {acc.category}
                          </span>
                          <span className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                            <Building className="w-3.5 h-3.5 text-slate-500" />
                            {acc.bank}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-500">
                          예금주: <strong className="text-slate-900">{acc.holder}</strong>
                        </span>
                      </div>

                      {/* Subtitle & Description */}
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-slate-900 font-serif-kr">
                          {acc.subtitle}
                        </h3>
                        {acc.description && (
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {acc.description}
                          </p>
                        )}
                      </div>

                      {/* Account Number Display Box */}
                      <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-mono">
                            {acc.bank} 전용 계좌번호
                          </span>
                          <span className="text-lg sm:text-xl font-mono font-bold text-slate-900 tracking-wider">
                            {acc.accountNumber}
                          </span>
                        </div>

                        <button
                          onClick={() => handleCopyFormatted(acc)}
                          className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                            isCopied
                              ? 'bg-sky-500 text-white'
                              : 'bg-white border border-slate-200 hover:bg-slate-100 text-slate-700'
                          }`}
                          title="계좌번호 복사"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-white" />
                              <span>복사완료!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>복사</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Recommended Tags */}
                      {acc.recommendedFor && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[11px] text-slate-400">해당 헌금:</span>
                          {acc.recommendedFor.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom Guidance Note */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                        <span>투명하고 정직한 교회 재정 관리</span>
                      </span>
                      <span className="text-sky-600 font-semibold">연말정산 소득공제 가능</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Important Reminders Banner */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 text-left">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 font-serif-kr">
                <Info className="w-4 h-4 text-sky-500" />
                <span>온라인 헌금 송금 시 유의사항</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block font-bold">1. 입금자명 표기 원칙</strong>
                  <p>
                    정확한 전산 집계를 위해 반드시 <strong>[이름 + 헌금구분]</strong>으로 입력해 <br/>주세요. (예: <em>홍길동십</em>, <em>이영희감</em>)
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block font-bold">2. 동명이인 확인</strong>
                  <p>
                    동명이인 구분을 위해 필요 시 생년월일 앞자리를 <br/>병기하실 수 있습니다. (예: <em>홍길동85십</em>)
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <strong className="text-slate-900 block font-bold">3. 기부금 영수증 발급</strong>
                  <p>
                    교적에 등록된 성도명으로 송금 시 연말정산 기부금영수증이 자동으로 국세청 홈택스에 연동됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Mobile Easy Transfer Guide */}
        {activeTab === 'guide' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-8 animate-fade-in max-w-4xl mx-auto text-left">
            <div className="space-y-2 text-center max-w-xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 font-serif-kr">
                스마트폰 간편 송금 3단계 가이드
              </h3>
              <p className="text-xs text-slate-600">
                토스, 카카오페이, 시중 은행 앱을 통해 터치 몇 번으로 안전하게 헌금하실 수 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="text-sm font-bold text-slate-900">계좌번호 복사</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  위 헌금 계좌 목록에서 송금하실 목적의 <br/>계좌 [복사] 버튼을 누릅니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="text-sm font-bold text-slate-900">은행/간편송금 앱 실행</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  자주 사용하시는 은행 또는 <br/>토스/카카오페이 앱을 열어 계좌번호를 <br/>붙여넣기합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="text-sm font-bold text-slate-900">받는분 표기 확인 및 송금</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  받는통장 표시에 <strong>[이름 + 헌금구분]</strong><br/>(예: 홍길동감)을 입력하고 송금을 <br/>완료합니다.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Tax Receipt Request */}
        {activeTab === 'receipt' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6 animate-fade-in max-w-3xl mx-auto text-left">
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold text-slate-900 font-serif-kr">
                연말정산 기부금 영수증 발급 안내
              </h3>
              <p className="text-xs text-slate-600">
                하늘소리교회는 소득세법에 따라 종교단체 기부금 영수증을 신속하고 정확하게 발급해 드립니다.
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">국세청 홈택스 간소화 서비스 자동 연동</h4>
                <p className="text-slate-600">
                  교적부에 등록된 등록 교우의 경우, 매년 1월 중순 국세청 연말정산 간소화 서비스(홈택스)에서 자동으로 기부금 납입 내역 조회가 가능합니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">종이 영수증 및 직인 원본 발급 신청</h4>
                <p className="text-slate-600">
                  회사 제출용 종이 기부금 영수증 및 소속교단({churchInfo.denomination}) 증명서가 필요하신 분은 전화({churchInfo.phone})로 신청하시면 발급 진행을 도움드립니다.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-sky-700 block font-semibold">기부금 영수증 문의 직통</span>
                  <strong className="text-sm text-slate-900">{churchInfo.phone} (월~토요일 09:00~17:00)</strong>
                </div>
                <a
                  href={`tel:${churchInfo.phone}`}
                  className="px-4 py-2 rounded-xl bg-sky-500 text-white text-xs font-bold hover:bg-sky-600 transition-colors shadow-xs"
                >
                  전화 연결
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
