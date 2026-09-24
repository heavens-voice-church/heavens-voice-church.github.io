import React, { useState } from 'react';
import { ChurchPhoto } from '../types';
import { defaultCuratedPhotos } from '../data/churchData';
import {
  Image as ImageIcon,
  Search,
  Maximize2,
  Calendar,
  Camera,
  Filter
} from './icons';

interface PhotoGallerySectionProps {
  onSelectPhoto: (photo: ChurchPhoto) => void;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  onSelectPhoto,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: '전체 사진' },
    { id: 'worship', label: '주일 예배' },
    { id: 'fellowship', label: '성도의 교제 & 전경' },
    { id: 'season', label: '교단 및 특별행사' }
  ];

  const filteredPhotos = defaultCuratedPhotos.filter((photo) => {
    const matchesCategory = selectedCategory === 'all' || photo.category === selectedCategory;
    const matchesSearch =
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (photo.description && photo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      photo.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="gallery" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-sky-500" />
              <span>하늘소리 사진 갤러리</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 font-serif-kr">
              하늘소리교회 <span className="text-sky-600">교회사진</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed break-keep md:whitespace-nowrap">
              주일 예배의 거룩한 감격과 성도들의 따뜻한 사랑, 복음 안에서 하나 되는 은혜의 순간들을 담았습니다.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 shadow-xs font-medium whitespace-nowrap">
              총 <strong className="text-sky-600">{defaultCuratedPhotos.length}</strong>장의 갤러리 사진
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sky-500 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="사진 제목, 행사 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
            />
          </div>

        </div>

        {/* Photos Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg hover:border-sky-400 transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Photo Thumbnail */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `${import.meta.env.BASE_URL}church-main.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white text-xs font-semibold flex items-center gap-1.5 bg-sky-600/90 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>크게 보기</span>
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-xs text-white font-medium border border-white/10">
                      {photo.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Photo Details */}
                <div className="p-4 flex-1 flex flex-col justify-between text-left space-y-2">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-sky-600 transition-colors font-serif-kr">
                      {photo.title}
                    </h4>
                    {photo.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                        {photo.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-sky-500" />
                      <span>{photo.date || '최근 등록'}</span>
                    </div>
                    <span className="text-sky-600 font-semibold text-[11px]">확대보기</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl p-12 border border-slate-200 text-center space-y-3">
            <ImageIcon className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">일치하는 사진이 없습니다</h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              다른 검색어를 입력하시거나 카테고리 필터를 '전체 사진'으로 변경해 보세요.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
