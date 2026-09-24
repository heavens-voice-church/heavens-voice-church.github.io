import React, { useEffect } from 'react';
import { ChurchPhoto } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ExternalLink
} from './icons';

interface PhotoLightboxModalProps {
  photo: ChurchPhoto | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photo,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-sm p-4 sm:p-6 animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 cursor-pointer"
        aria-label="닫기"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/90 hover:bg-sky-500 text-white shadow-xl transition-all z-50 cursor-pointer"
          aria-label="이전 사진"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next Navigation */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/90 hover:bg-sky-500 text-white shadow-xl transition-all z-50 cursor-pointer"
          aria-label="다음 사진"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Content Box */}
      <div className="max-w-4xl w-full max-h-[92vh] flex flex-col bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
        {/* Large Image Frame */}
        <div className="relative flex-1 bg-slate-950 flex items-center justify-center min-h-[300px] sm:min-h-[480px] max-h-[68vh] overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain max-h-[68vh]"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="p-5 sm:p-6 bg-slate-900 border-t border-slate-800 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-950 border border-sky-800/80 text-sky-300 font-bold">
                {photo.categoryLabel}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white font-serif-kr">
              {photo.title}
            </h3>

            {photo.description && (
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                {photo.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>{photo.date || '최근 등록'}</span>
            </div>

            <a
              href={photo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white transition-colors flex items-center gap-1 shadow-xs"
              title="원본 이미지 새 탭에서 열기"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
