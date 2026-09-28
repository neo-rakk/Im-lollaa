/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { OnAirSection } from './components/OnAirSection';
import { BeautyEditSection } from './components/BeautyEditSection';
import { CollaborateSection } from './components/CollaborateSection';
import { GallerySection } from './components/GallerySection';
import { PressMediaKitSection } from './components/PressMediaKitSection';
import { SocialPresenceSection } from './components/SocialPresenceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';

// Modals and Dedicated Views
import { CollaborateModal } from './components/modals/CollaborateModal';
import { MediaKitModal } from './components/modals/MediaKitModal';
import { PressModal } from './components/modals/PressModal';
import { TVProjectModal } from './components/modals/TVProjectModal';
import { BeautyArticleModal } from './components/modals/BeautyArticleModal';
import { AboutModal } from './components/modals/AboutModal';
import { LegalModal } from './components/modals/LegalModal';
import { AdminDashboardModal } from './components/admin/AdminDashboardModal';

const AppContent: React.FC = () => {
  const { currentView, selectedArticle } = useApp();

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F7F3EE] flex flex-col font-sans selection:bg-[#B79A7E]/30 selection:text-white">
      {/* 3-Zone Top Bar Contract Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <DisciplinesSection />
        <OnAirSection />
        <BeautyEditSection />
        <CollaborateSection />
        <GallerySection />
        <PressMediaKitSection />
        <SocialPresenceSection />
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Discreet Cookie Consent Banner */}
      <CookieConsent />

      {/* Active Modal / Detail Page Routing */}
      {currentView === 'collaborate' && <CollaborateModal />}
      {currentView === 'media-kit' && <MediaKitModal />}
      {currentView === 'press' && <PressModal />}
      {currentView === 'on-air' && <TVProjectModal />}
      {currentView === 'beauty' && selectedArticle && <BeautyArticleModal />}
      {currentView === 'about' && <AboutModal />}
      {currentView === 'admin' && <AdminDashboardModal />}
      {(currentView === 'privacy' || currentView === 'terms' || currentView === 'cookies') && (
        <LegalModal type={currentView} />
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
