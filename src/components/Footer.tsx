import React from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, ArrowUp } from 'lucide-react';
import { Language } from '../types';

export const Footer: React.FC = () => {
  const { t, lang, setLang, setCurrentView, socialAccounts } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'العربية' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <footer className="bg-[#070707] text-[#F7F3EE] border-t border-[#27272A]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#27272A]/60">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-widest text-[#F7F3EE] font-semibold">
              LOLA
            </span>
            <p className="text-xs tracking-[0.25em] text-[#C7B8A8] uppercase font-mono">
              KHAOULA KEBBACHE
            </p>
            <p className="text-xs tracking-[0.18em] text-[#B79A7E] uppercase">
              CREATOR · PRESENTER · BEAUTY · MEDIA
            </p>
            <p className="text-xs text-[#C7B8A8]/70 max-w-sm font-light pt-2 leading-relaxed">
              Plateforme numérique officielle et portfolio d’excellence de Lola (Khaoula Kebbache).
            </p>

            {/* Anti-phishing trust badge */}
            <div className="pt-4 flex items-center gap-2 text-[11px] text-[#B79A7E] font-mono">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{t.footer.domainNotice}</span>
            </div>
          </div>

          {/* Quick Nav Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono tracking-widest text-[#B79A7E] uppercase mb-4">
              NAVIGATION
            </p>
            <ul className="space-y-2.5 text-xs text-[#C7B8A8]">
              <li>
                <button
                  onClick={() => { setCurrentView('about'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('on-air'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors"
                >
                  {t.nav.onAir}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('beauty'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors"
                >
                  {t.nav.beauty}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('gallery'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors"
                >
                  {t.nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('collaborate'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors font-medium text-[#F7F3EE]"
                >
                  {t.nav.collaborate}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('press'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors"
                >
                  {t.nav.press}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('media-kit'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors"
                >
                  {t.nav.mediaKit}
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setCurrentView('contact'); scrollToTop(); }}
                  className="hover:text-[#F7F3EE] transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Social Presence Col (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono tracking-widest text-[#B79A7E] uppercase mb-4">
              RÉSEAUX OFFICIELS
            </p>
            <ul className="space-y-2.5 text-xs text-[#C7B8A8]">
              {socialAccounts.filter(s => s.is_public).map(acc => (
                <li key={acc.id}>
                  <a
                    href={acc.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#F7F3EE] transition-colors"
                  >
                    {acc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Language & Actions Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            <div>
              <p className="text-xs font-mono tracking-widest text-[#B79A7E] uppercase mb-4">
                LANGUES
              </p>
              <div className="flex items-center gap-3 text-xs">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`transition-colors ${
                      lang === l.code
                        ? 'text-[#F7F3EE] font-bold border-b border-[#B79A7E]'
                        : 'text-[#C7B8A8]/60 hover:text-[#F7F3EE]'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs text-[#C7B8A8] hover:text-[#F7F3EE] tracking-widest uppercase transition-colors"
            >
              <span>HAUT DE PAGE</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B79A7E]" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C7B8A8]/60">
          <p>© 2026 Lola / Khaoula Kebbache · {t.footer.rights}</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setCurrentView('privacy')}
              className="hover:text-[#F7F3EE] transition-colors"
            >
              {t.footer.privacy}
            </button>
            <button
              onClick={() => setCurrentView('terms')}
              className="hover:text-[#F7F3EE] transition-colors"
            >
              {t.footer.terms}
            </button>
            <button
              onClick={() => setCurrentView('cookies')}
              className="hover:text-[#F7F3EE] transition-colors"
            >
              {t.footer.cookies}
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
