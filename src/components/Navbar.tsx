import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Menu, X, Globe, Lock } from 'lucide-react';
import { Language } from '../types';

export const Navbar: React.FC = () => {
  const { lang, setLang, t, setCurrentView, currentView, isAdminAuthenticated } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: any) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <>
      {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-6 links) - Zone 3 (Language + CTA) */}
      <header className="sticky top-0 z-40 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-[#27272A]/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex flex-col text-left focus:outline-none"
            aria-label="LOLA Homepage"
          >
            <span className="font-serif text-2xl lg:text-3xl tracking-widest text-[#F7F3EE] group-hover:text-[#B79A7E] transition-colors font-semibold">
              LOLA
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#C7B8A8]/70 -mt-1 uppercase">
              KHAOULA KEBBACHE
            </span>
          </button>

          {/* Zone 2: 5 clean text navigation links (No pills) */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-[0.18em] text-[#C7B8A8]">
            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#F7F3EE] transition-colors py-1 ${
                currentView === 'about' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('on-air')}
              className={`hover:text-[#F7F3EE] transition-colors py-1 ${
                currentView === 'on-air' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.onAir}
            </button>
            <button
              onClick={() => handleNavClick('beauty')}
              className={`hover:text-[#F7F3EE] transition-colors py-1 ${
                currentView === 'beauty' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.beauty}
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className={`hover:text-[#F7F3EE] transition-colors py-1 ${
                currentView === 'gallery' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => handleNavClick('press')}
              className={`hover:text-[#F7F3EE] transition-colors py-1 ${
                currentView === 'press' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.press}
            </button>
            <button
              onClick={() => handleNavClick('media-kit')}
              className={`hover:text-[#F7F3EE] transition-colors py-1 ${
                currentView === 'media-kit' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.mediaKit}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#F7F3EE] transition-colors py-1 ${
                currentView === 'contact' ? 'text-[#F7F3EE] border-b border-[#B79A7E]' : ''
              }`}
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions (Language Switcher + Work with Lola CTA) */}
          <div className="flex items-center gap-4">
            
            {/* Minimalist Segmented Language Switcher */}
            <div className="flex items-center gap-1 border border-[#27272A] px-2 py-1 rounded bg-[#141210]">
              <Globe className="w-3.5 h-3.5 text-[#C7B8A8]/60" />
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`px-1.5 py-0.5 text-[11px] font-medium tracking-wider transition-colors ${
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
              className={`p-2 rounded border border-[#27272A] text-xs transition-colors ${
                isAdminAuthenticated
                  ? 'bg-[#B79A7E]/20 text-[#B79A7E] border-[#B79A7E]/50'
                  : 'text-[#C7B8A8]/70 hover:text-[#F7F3EE] hover:bg-[#1A1816]'
              }`}
              title={t.nav.admin}
              aria-label={t.nav.admin}
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            {/* Primary Action Button: WORK WITH LOLA */}
            <button
              onClick={() => handleNavClick('collaborate')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#0B0B0B] bg-[#F7F3EE] hover:bg-[#B79A7E] hover:text-white transition-all duration-200"
            >
              {t.nav.workWithLola}
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F7F3EE] hover:text-[#B79A7E] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-[#0B0B0B]/98 backdrop-blur-xl flex flex-col justify-between p-8 lg:hidden animate-fadeIn">
          <nav className="flex flex-col gap-6 text-lg font-serif tracking-widest text-[#F7F3EE] divide-y divide-[#27272A]">
            <button
              onClick={() => handleNavClick('home')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              ACCUEIL / HOME
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => handleNavClick('on-air')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              {t.nav.onAir}
            </button>
            <button
              onClick={() => handleNavClick('beauty')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              {t.nav.beauty}
            </button>
            <button
              onClick={() => handleNavClick('gallery')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => handleNavClick('press')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              {t.nav.press}
            </button>
            <button
              onClick={() => handleNavClick('media-kit')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              {t.nav.mediaKit}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={() => handleNavClick('admin')}
              className="pt-4 text-left hover:text-[#B79A7E] transition-colors flex items-center gap-2"
            >
              <Lock className="w-4 h-4 text-[#B79A7E]" />
              {t.nav.admin}
            </button>
          </nav>

          <div className="pt-8 border-t border-[#27272A] flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('collaborate')}
              className="w-full py-4 text-center text-xs font-semibold tracking-[0.2em] uppercase text-[#0B0B0B] bg-[#F7F3EE] hover:bg-[#B79A7E] hover:text-white transition-colors"
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
