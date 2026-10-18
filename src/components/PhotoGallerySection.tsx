import React, { useState } from 'react';
import { ChurchPhoto } from '../types';
import { defaultCuratedPhotos, churchEvents2026, memoryVerses, bulletinDriveUrl, yearMotto, SHOW_CHURCH_PHOTOS } from '../data/churchData';
import {
  Image as ImageIcon,
  Search,
  Maximize2,
  Calendar,
  FolderOpen,
  ExternalLink
} from './icons';

const archiveTabs = [
  { id: 'verses', label: '암송 구절' },
  { id: 'bulletins', label: '주보' },
  { id: 'photos', label: '사진' },
  { id: 'events', label: '교회 행사' }
] as const;

const EmptyState: React.FC<{ text: string }> = ({ text }) => (
  <div className="max-w-3xl mx-auto rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-sm text-slate-500">
    {text}
  </div>
);

interface PhotoGallerySectionProps {
  onSelectPhoto: (photo: ChurchPhoto) => void;
}

export const PhotoGallerySection: React.FC<PhotoGallerySectionProps> = ({
  onSelectPhoto,
}) => {
  const [archiveTab, setArchiveTab] = useState<(typeof archiveTabs)[number]['id']>('verses');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: '전체 사진' },
    { id: 'space', label: '교회 공간' },
    { id: 'view', label: '주변 풍경' }
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
    <div id="archive" className="py-12 sm:py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold uppercase tracking-wider">
            <FolderOpen className="w-3.5 h-3.5 text-sky-500" />
            <span>하늘소리 자료실</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900">
            하늘소리교회 <span className="text-sky-600">자료실</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed break-keep">
            암송 구절과 주보, 사진, 교회 행사 일정을 한곳에서 확인하실 수 있습니다.
          </p>
        </div>

        {/* Archive Sub-Tabs */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap justify-center p-1 bg-slate-100 rounded-2xl border border-slate-200 gap-1">
            {archiveTabs.filter((t) => t.id !== 'photos' || SHOW_CHURCH_PHOTOS).map((t) => (
              <button
                key={t.id}
                onClick={() => setArchiveTab(t.id)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  archiveTab === t.id ? 'bg-sky-500 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab: 교회 행사 (2026년 일정) */}
        {archiveTab === 'events' && (
          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold text-slate-900">{yearMotto.year}년 교회 일정</h3>
              <p className="text-sm text-slate-600">
                {yearMotto.year}년 교회 표어 · {yearMotto.title} "{yearMotto.motto}" ({yearMotto.reference})
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-xs text-slate-500">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold w-28">날짜</th>
                    <th className="px-4 py-3 text-left font-semibold">행사</th>
                    <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">비고</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {churchEvents2026.map((e) => (
                    <tr key={e.date + e.title}>
                      <td className="px-4 py-3 font-semibold text-sky-700 whitespace-nowrap align-top">{e.date}</td>
                      <td className="px-4 py-3 text-slate-800 break-keep">
                        {e.title}
                        {e.note && <span className="block sm:hidden text-xs text-slate-500 mt-0.5">{e.note}</span>}
                      </td>
                      <td className="px-4 py-3 text-slate-500 text-xs hidden sm:table-cell break-keep">{e.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab: 사진 */}
        {archiveTab === 'photos' && SHOW_CHURCH_PHOTOS && (
          <>
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
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-1 group-hover:text-sky-600 transition-colors">
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
          </>
        )}

        {/* Tab: 암송 구절 */}
        {archiveTab === 'verses' && (
          memoryVerses.length > 0 ? (
            <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 text-center">{yearMotto.year}년 하늘소리교회 암송 말씀</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto text-left">
              {/* data is kept in month order; show the latest month first */}
              {[...memoryVerses].reverse().map((v) => (
                <div key={v.month} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-sky-400 hover:shadow-md transition-all space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-bold">{v.month}</span>
                    <span className="text-xs font-semibold text-sky-700">{v.reference}</span>
                  </div>
                  <p className="font-serif-kr text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line break-keep">{v.verse}</p>
                </div>
              ))}
            </div>
            </div>
          ) : (
            <EmptyState text="암송 구절을 준비하고 있습니다." />
          )
        )}

        {/* Tab: 주보 (Google Drive) */}
        {archiveTab === 'bulletins' && (
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center space-y-4">
            <p className="text-sm text-slate-600">매주 주보는 Google Drive에서 보실 수 있습니다.</p>
            {bulletinDriveUrl ? (
              <a
                href={bulletinDriveUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-bold transition-colors shadow-xs"
              >
                주보 보기
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <>
                <span aria-disabled="true" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-300 text-white text-sm font-bold cursor-not-allowed">
                  주보 보기
                  <ExternalLink className="w-4 h-4" />
                </span>
                <p className="text-xs text-slate-400">주보 링크를 준비하고 있습니다.</p>
              </>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
