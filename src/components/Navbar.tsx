import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, Globe, Lock } from 'lucide-react';
import { Language } from '../types';
import { useEditorialScroll } from '../hooks/useEditorialScroll';

export const Navbar: React.FC = () => {
  const { lang, setLang, t, setCurrentView, currentView, isAdminAuthenticated } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Section IDs for scroll tracking and smooth gliding
  const sectionIds = [
    'hero',
    'person-behind-lola',
    'disciplines',
    'on-air',
    'beauty-edit',
    'collaborate-section',
    'gallery-section',
    'press-media-kit',
    'social-presence',
    'contact-section'
  ];

  const { scrollToSection, activeSection, scrollProgress } = useEditorialScroll(sectionIds);

  const handleNavClick = (view: any, targetSectionId?: string) => {
    setMobileMenuOpen(false);

    if (view === 'admin') {
      setCurrentView('admin');
      return;
    }

    // If targetSectionId is provided, navigate or glide
    if (targetSectionId) {
      if (currentView !== 'home') {
        setCurrentView('home');
        // Give small tick for DOM layout before scrolling
        setTimeout(() => {
          scrollToSection(targetSectionId, { duration: 1.1, ease: 'power3.inOut' });
        }, 60);
      } else {
        scrollToSection(targetSectionId, { duration: 1.1, ease: 'power3.inOut' });
      }
      return;
    }

    // Otherwise standard view setter
    setCurrentView(view);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'EN' }
  ];

  // Helper to determine active state
  const isNavActive = (view: string, sectionId?: string) => {
    if (currentView !== 'home') {
      return currentView === view;
    }
    return sectionId ? activeSection === sectionId : false;
  };

  return (
    <>
      {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-6 links) - Zone 3 (Language + CTA) */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#27272A]/80 transition-colors">
        
        {/* Editorial Scroll Progress Hairline Indicator */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#27272A]/40 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#B79A7E]/60 via-[#B79A7E] to-[#E8DDD4] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home', 'hero')}
            className="group flex flex-col text-left focus:outline-none min-h-[44px] justify-center"
            aria-label="LOLA Homepage"
          >
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-widest text-[#F7F3EE] group-hover:text-[#B79A7E] transition-colors font-semibold leading-tight">
              LOLA
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C7B8A8]/70 uppercase">
              KHAOULA KEBBACHE
            </span>
          </button>

          {/* Zone 2: 5 clean text navigation links (No pills) with GSAP smooth scroll */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-medium tracking-[0.16em] text-[#C7B8A8]">
            <button
              onClick={() => handleNavClick('home', 'person-behind-lola')}
              className={`hover:text-[#F7F3EE] transition-colors py-2 whitespace-nowrap ${
                isNavActive('about', 'person-behind-lola') ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('home', 'on-air')}
              className={`hover:text-[#F7F3EE] transition-colors py-2 whitespace-nowrap ${
                isNavActive('on-air', 'on-air') ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.onAir}
            </button>
            <button
              onClick={() => handleNavClick('home', 'beauty-edit')}
              className={`hover:text-[#F7F3EE] transition-colors py-2 whitespace-nowrap ${
                isNavActive('beauty', 'beauty-edit') ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.beauty}
            </button>
            <button
              onClick={() => handleNavClick('home', 'gallery-section')}
              className={`hover:text-[#F7F3EE] transition-colors py-2 whitespace-nowrap ${
                isNavActive('gallery', 'gallery-section') ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => handleNavClick('home', 'press-media-kit')}
              className={`hover:text-[#F7F3EE] transition-colors py-2 whitespace-nowrap ${
                isNavActive('press', 'press-media-kit') ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.press}
            </button>
            <button
              onClick={() => handleNavClick('media-kit')}
              className={`hover:text-[#F7F3EE] transition-colors py-2 whitespace-nowrap ${
                currentView === 'media-kit' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.mediaKit}
            </button>
            <button
              onClick={() => handleNavClick('home', 'contact-section')}
              className={`hover:text-[#F7F3EE] transition-colors py-2 whitespace-nowrap ${
                isNavActive('contact', 'contact-section') ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions (Language Switcher + Work with Lola CTA) */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Minimalist Segmented Language Switcher */}
            <div className="flex items-center gap-0.5 sm:gap-1 border border-[#27272A] px-1.5 sm:px-2 py-1 rounded bg-[#141210]">
              <Globe className="w-3.5 h-3.5 text-[#C7B8A8]/60 shrink-0" />
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-1 sm:px-1.5 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-wider transition-colors min-h-[32px] flex items-center justify-center ${
                    lang === item.code
                      ? 'text-[#F7F3EE] font-semibold underline decoration-[#B79A7E] underline-offset-4'
                      : 'text-[#C7B8A8]/60 hover:text-[#F7F3EE]'
                  }`}
                  aria-label={`Switch to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Admin trigger button */}
            <button
              onClick={() => handleNavClick('admin')}
              className={`p-2 rounded border border-[#27272A] text-xs transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center ${
                isAdminAuthenticated
                  ? 'bg-[#B79A7E]/20 text-[#B79A7E] border-[#B79A7E]/50'
                  : 'text-[#C7B8A8]/70 hover:text-[#F7F3EE] hover:bg-[#1A1816]'
              }`}
              title={t.nav.admin}
              aria-label={t.nav.admin}
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            {/* Primary Action Button: WORK WITH LOLA (Hidden on mobile < 640px, visible on tablet & PC) */}
            <button
              onClick={() => handleNavClick('collaborate')}
              className="hidden sm:inline-flex items-center justify-center px-4 md:px-5 py-2.5 text-[11px] md:text-xs font-semibold tracking-[0.14em] uppercase text-[#0B0B0B] bg-[#F7F3EE] hover:bg-[#B79A7E] hover:text-white transition-all duration-200 whitespace-nowrap min-h-[40px]"
            >
              {t.nav.workWithLola}
            </button>

            {/* Mobile/Tablet menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-[#F7F3EE] hover:text-[#B79A7E] focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-[#0B0B0B]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 lg:hidden animate-fadeIn overflow-y-auto max-h-[calc(100dvh-5rem)] overscroll-contain">
          {/* Mobile Language Switcher Bar */}
          <div className="pb-4 mb-2 border-b border-[#27272A]/70 flex items-center justify-between">
            <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.languageLabel}</span>
            </span>
            <div className="flex items-center gap-1 border border-[#27272A] p-1 bg-[#141210]">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-2.5 py-1 text-xs font-mono uppercase transition-colors min-h-[36px] flex items-center justify-center ${
                    lang === item.code
                      ? 'bg-[#F7F3EE] text-[#0B0B0B] font-bold'
                      : 'text-[#C7B8A8] hover:text-[#F7F3EE]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col text-base sm:text-lg font-serif tracking-widest text-[#F7F3EE] divide-y divide-[#27272A]/70">
            <button
              onClick={() => handleNavClick('home', 'hero')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              LOLA
            </button>
            <button
              onClick={() => handleNavClick('home', 'person-behind-lola')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('home', 'on-air')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              {t.nav.onAir}
            </button>
            <button
              onClick={() => handleNavClick('home', 'beauty-edit')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              {t.nav.beauty}
            </button>
            <button
              onClick={() => handleNavClick('home', 'gallery-section')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => handleNavClick('home', 'press-media-kit')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              {t.nav.press}
            </button>
            <button
              onClick={() => handleNavClick('media-kit')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              {t.nav.mediaKit}
            </button>
            <button
              onClick={() => handleNavClick('home', 'contact-section')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors min-h-[44px] flex items-center"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="py-3.5 text-left hover:text-[#B79A7E] transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <Lock className="w-4 h-4 text-[#B79A7E]" />
              {t.nav.admin}
            </button>
          </nav>

          <div className="pt-6 mt-4 border-t border-[#27272A] flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('collaborate')}
              className="w-full py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#F7F3EE] hover:bg-[#B79A7E] hover:text-white transition-colors min-h-[48px] flex items-center justify-center"
            >
              {t.nav.workWithLola}
            </button>
            <p className="text-center text-[10px] text-[#C7B8A8]/60 tracking-wider">
              im-lolla.com — {t.footer.officialSite}
            </p>
          </div>
        </div>
      )}

    </>
  );
};
