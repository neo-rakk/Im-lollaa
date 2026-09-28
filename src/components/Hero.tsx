import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { editorialAssets } from '../data/assets';
import { useEditorialScroll } from '../hooks/useEditorialScroll';

export const Hero: React.FC = () => {
  const { t, setCurrentView } = useApp();
  const { scrollToSection } = useEditorialScroll();

  const handleScrollToContent = () => {
    scrollToSection('person-behind-lola', { duration: 1.2, ease: 'power3.inOut' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#0B0B0B] text-[#F7F3EE]">
      {/* Background Graphic Asset with High-Fidelity Silhouette and Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={editorialAssets.hero}
          alt="LOLA Editorial Portrait"
          className="w-full h-full object-cover object-center opacity-85 select-none"
          loading="eager"
        />
        {/* Measured Dark Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-[#0B0B0B]/40 to-transparent" />
      </div>

      {/* Top spacing */}
      <div className="relative z-10 pt-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#B79A7E]">
          <span className="w-8 h-[1px] bg-[#B79A7E]" />
          <span>{t.hero.tagline}</span>
        </div>
      </div>

      {/* Main Center Typography */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Civil name subtitle */}
          <p className="text-sm md:text-base tracking-[0.35em] text-[#C7B8A8] uppercase font-medium mb-3">
            {t.hero.subtitle}
          </p>

          {/* Big Editorial Title: LOLA */}
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] tracking-tight text-[#F7F3EE] font-light">
            LOLA
          </h1>

          {/* Disciplines Kicker */}
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm md:text-base tracking-[0.2em] font-medium text-[#E8DDD4]/90 uppercase">
            <span>CREATOR</span>
            <span className="text-[#B79A7E]" aria-hidden="true">·</span>
            <span>PRESENTER</span>
            <span className="text-[#B79A7E]" aria-hidden="true">·</span>
            <span>BEAUTY</span>
            <span className="text-[#B79A7E]" aria-hidden="true">·</span>
            <span>MEDIA</span>
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={handleScrollToContent}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B79A7E] hover:text-white transition-all duration-300"
            >
              <span>{t.hero.discover}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setCurrentView('collaborate')}
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#C7B8A8]/40 text-[#F7F3EE] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F3EE]/10 hover:border-[#F7F3EE] transition-all duration-300"
            >
              <span>{t.hero.workCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B79A7E]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Scroll indicator & Domain Anchor */}
      <div className="relative z-10 px-6 py-8 max-w-7xl mx-auto w-full border-t border-[#27272A]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#C7B8A8]/70">
        <div className="flex items-center gap-4">
          <span className="text-[#B79A7E]">im-lolla.com</span>
          <span aria-hidden="true">·</span>
          <span>OFFICIAL DIGITAL PRESENCE</span>
        </div>

        <button
          onClick={handleScrollToContent}
          className="flex items-center gap-2 tracking-[0.15em] hover:text-[#F7F3EE] transition-colors focus:outline-none"
        >
          <span>{t.hero.scroll}</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#B79A7E] animate-bounce" />
        </button>
      </div>
    </section>
  );
};
