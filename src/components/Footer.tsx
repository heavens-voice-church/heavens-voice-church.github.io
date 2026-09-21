import React from 'react';
import { churchInfo } from '../data/churchData';
import { ChurchMark } from './Header';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tabId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-left">

          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-xs">
                <ChurchMark className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white font-serif-kr tracking-tight">
                  {churchInfo.name}
                </span>
                <p className="text-xs text-sky-400 font-cinzel tracking-wider uppercase font-semibold">
                  {churchInfo.englishName}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              "{churchInfo.slogan}"
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-medium text-sky-300">
                {churchInfo.denomination}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 font-mono text-slate-300">
                {churchInfo.domainName}
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              주요 탭 바로가기
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('intro')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • 하늘소리교회 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('pastor')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • 담임목사 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('worship')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • 주일 예배 시간표
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('gallery')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • 사진 갤러리
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('location')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • 찾아오시는 길 & 연락처
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('offering')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • 온라인 헌금 안내
                </button>
              </li>
              {/* <li>
                <button
                  onClick={() => onSelectTab('channel')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  • SNS 채널
                </button>
              </li> */}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
              교회 연락처 & 사무실
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {churchInfo.address} {churchInfo.addressDetail}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>대표전화: {churchInfo.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>이메일: {churchInfo.email}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {churchInfo.name} ({churchInfo.denomination}). All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400">담임목사: {churchInfo.pastor.name}</span>
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer border border-slate-700"
            >
              <span>맨 위로</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
