/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChurchIntroSection } from './components/ChurchIntroSection';
import { PastorSection } from './components/PastorSection';
import { WorshipScheduleSection } from './components/WorshipScheduleSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { OnlineOfferingSection } from './components/OnlineOfferingSection';
import { LocationSection } from './components/LocationSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { defaultCuratedPhotos } from './data/churchData';
import { ChurchPhoto } from './types';
import { trackPageView } from './utils/analytics';

// Tab ids addressable via URL hash (e.g. '#worship'). 'home' has no hash.
const HASH_TABS = ['intro', 'pastor', 'worship', 'gallery', 'offering', 'location', 'channel'];

const getTabFromHash = (): string => {
  const hash = window.location.hash.replace(/^#/, '');
  return HASH_TABS.includes(hash) ? hash : 'home';
};

export default function App() {
  // Tab state: 'home' | 'intro' | 'pastor' | 'worship' | 'gallery' | 'offering' | 'location' | 'channel'
  const [activeTab, setActiveTab] = useState<string>(getTabFromHash);
  const [selectedPhoto, setSelectedPhoto] = useState<ChurchPhoto | null>(null);
  const selectedPhotoIndex = selectedPhoto
    ? defaultCuratedPhotos.findIndex((photo) => photo.id === selectedPhoto.id)
    : -1;

  useEffect(() => {
    const initialTab = getTabFromHash();
    trackPageView(initialTab, initialTab === 'home' ? '하늘소리교회 - 홈' : undefined);

    // Browser back/forward support: re-sync state whenever the hash changes externally.
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
      window.scrollTo({ top: 0, behavior: 'instant' });
      trackPageView(getTabFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabSelect = (tabId: string) => {
    const normalizedTab = HASH_TABS.includes(tabId) ? tabId : 'home';
    const targetHash = normalizedTab === 'home' ? '' : normalizedTab;
    const currentHash = window.location.hash.replace(/^#/, '');

    if (currentHash === targetHash) {
      // Hash isn't changing (e.g. re-clicking the current tab), so 'hashchange' won't fire.
      setActiveTab(normalizedTab);
      window.scrollTo({ top: 0, behavior: 'instant' });
      trackPageView(normalizedTab, normalizedTab === 'home' ? '하늘소리교회 - 홈' : undefined);
      return;
    }

    if (normalizedTab === 'home') {
      // Drop the hash instead of setting it to '', which would leave a trailing '#' in the URL.
      window.history.pushState(null, '', window.location.pathname + window.location.search);
      setActiveTab('home');
      window.scrollTo({ top: 0, behavior: 'instant' });
      trackPageView('home', '하늘소리교회 - 홈');
    } else {
      // Triggers 'hashchange', which updates state, scroll, and analytics.
      window.location.hash = normalizedTab;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* Sticky Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleTabSelect}
      />

      {/* Main Content */}
      {/*
        All sections stay mounted at all times and are only toggled with the `hidden`
        attribute (Tailwind's divide-y already skips [hidden] siblings). This lets search
        engine crawlers, which don't click tabs, see the full page text on first load —
        previously each tab's content didn't exist in the DOM until a user clicked it.
      */}
      <main className={`flex-1 ${activeTab !== 'home' ? 'pt-28 md:pt-36' : ''}`}>
        {/* Hero Section - visually shown only on the 'home' view (reached via the brand logo) */}
        <div hidden={activeTab !== 'home'}>
          <HeroSection
            onNavigate={handleTabSelect}
          />
        </div>

        {/* Tab Content Display Area */}
        <div id="main-tab-content" className="divide-y divide-slate-100">

          {/* Tab 1: 교회 소개 */}
          <section hidden={activeTab !== 'intro'}>
            <ChurchIntroSection />
          </section>

          {/* Tab 2: 담임 목사 소개 */}
          <section hidden={activeTab !== 'pastor'}>
            <PastorSection />
          </section>

          {/* Tab 3: 예배 시간표 */}
          <section hidden={activeTab !== 'worship'}>
            <WorshipScheduleSection onNavigate={handleTabSelect} />
          </section>

          {/* Tab 4: 사진 갤러리 */}
          <section hidden={activeTab !== 'gallery'}>
            <PhotoGallerySection onSelectPhoto={setSelectedPhoto} />
          </section>

          {/* Tab 5: 온라인 헌금 */}
          <section hidden={activeTab !== 'offering'}>
            <OnlineOfferingSection />
          </section>

          {/* Tab 6: 교회 위치 */}
          <section hidden={activeTab !== 'location'}>
            <LocationSection isActive={activeTab === 'location'} />
          </section>

          {/* Tab 7: 교회 채널 */}
          <section hidden={activeTab !== 'channel'}>
            <SocialMediaSection />
          </section>

        </div>
      </main>

      {/* Photo Lightbox */}
      <PhotoLightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={() => setSelectedPhoto(defaultCuratedPhotos[selectedPhotoIndex - 1])}
        onNext={() => setSelectedPhoto(defaultCuratedPhotos[selectedPhotoIndex + 1])}
        hasPrev={selectedPhotoIndex > 0}
        hasNext={selectedPhotoIndex >= 0 && selectedPhotoIndex < defaultCuratedPhotos.length - 1}
      />

      {/* Footer */}
      <Footer
        onSelectTab={handleTabSelect}
      />
    </div>
  );
}
