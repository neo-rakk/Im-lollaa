import React from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

export const CollaborateSection: React.FC = () => {
  const { t, setCurrentView } = useApp();

  return (
    <section id="collaborate-section" className="py-16 sm:py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="border border-[#27272A] bg-gradient-to-b from-[#141210] to-[#0E0C0B] p-6 sm:p-12 lg:p-20 relative">
          
          {/* Ambient rim light */}
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#B79A7E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-3 sm:mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.collaborate.kicker}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight leading-tight">
              {t.collaborate.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#C7B8A8] font-light leading-relaxed mt-4 sm:mt-6">
              {t.collaborate.desc}
            </p>

            {/* Collaboration formats list */}
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#27272A]/80">
              <p className="text-[10px] sm:text-xs font-mono tracking-widest text-[#B79A7E] uppercase mb-3 sm:mb-4">
                {t.collaborate.formatsTitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs text-[#E8DDD4]">
                {t.collaborate.formatsList.map((type, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B79A7E] shrink-0" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => setCurrentView('collaborate')}
                className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#B79A7E] hover:text-white transition-all min-h-[48px]"
              >
                <span>{t.collaborate.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentView('media-kit')}
                className="inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3.5 sm:py-4 border border-[#27272A] text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E] text-xs font-medium tracking-[0.16em] uppercase transition-colors min-h-[48px]"
              >
                <span>{t.collaborate.consultMediaKit}</span>
              </button>
            </div>

            {/* Official domain notice */}
            <div className="mt-6 sm:mt-8 flex items-center gap-2 text-[10px] sm:text-[11px] text-[#C7B8A8]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B79A7E] shrink-0" />
              <span>{t.collaborate.confidentialNotice}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
