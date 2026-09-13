/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChurchIntroSection } from './components/ChurchIntroSection';
import { PastorSection } from './components/PastorSection';
import { WorshipScheduleSection } from './components/WorshipScheduleSection';
import { OnlineOfferingSection } from './components/OnlineOfferingSection';
import { LocationSection } from './components/LocationSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { trackPageView } from './utils/analytics';

export default function App() {
  // Tab state: 'home' | 'intro' | 'pastor' | 'worship' | 'offering' | 'location' | 'channel'
  const [activeTab, setActiveTab] = useState<string>('home');

  useEffect(() => {
    trackPageView('home', '하늘소리교회 - 홈');
  }, []);

  const handleTabSelect = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'instant' });
    trackPageView(tabId);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* Sticky Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleTabSelect}
      />

      {/* Main Content */}
      <main className={`flex-1 ${activeTab !== 'home' ? 'pt-28 md:pt-36' : ''}`}>
        {/* Hero Section - Show only on the 'home' view (reached via the brand logo) */}
        {activeTab === 'home' && (
          <HeroSection
            onNavigate={handleTabSelect}
          />
        )}

        {/* Tab Content Display Area */}
        <div id="main-tab-content" className="divide-y divide-slate-100">
          
          {/* Tab 1: 교회 소개 */}
          {activeTab === 'intro' && (
            <section id="intro">
              <ChurchIntroSection />
            </section>
          )}

          {/* Tab 2: 담임 목사 소개 */}
          {activeTab === 'pastor' && (
            <section id="pastor">
              <PastorSection />
            </section>
          )}

          {/* Tab 3: 예배 시간표 */}
          {activeTab === 'worship' && (
            <section id="worship">
              <WorshipScheduleSection onNavigate={handleTabSelect} />
            </section>
          )}

          {/* Tab 4: 온라인 헌금 */}
          {activeTab === 'offering' && (
            <section id="offering">
              <OnlineOfferingSection />
            </section>
          )}

          {/* Tab 6: 교회 위치 */}
          {activeTab === 'location' && (
            <section id="location">
              <LocationSection />
            </section>
          )}

          {/* Tab 7: 교회 채널 */}
          {activeTab === 'channel' && (
            <section id="channel">
              <SocialMediaSection />
            </section>
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={handleTabSelect}
      />
    </div>
  );
}
