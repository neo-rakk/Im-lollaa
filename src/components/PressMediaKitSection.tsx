import React from 'react';
import { useApp } from '../context/AppContext';
import { FileText, Download, CheckCircle, ArrowUpRight } from 'lucide-react';

export const PressMediaKitSection: React.FC = () => {
  const { t, stats, setCurrentView } = useApp();

  return (
    <section id="press-media-kit" className="py-16 sm:py-24 md:py-32 bg-[#0E0C0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-2 sm:mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>{t.press.kicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.press.title}
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs tracking-widest text-[#C7B8A8]/70 uppercase">
            {t.press.subtitle}
          </p>
        </div>

        {/* 2-Column Suite Cards: Responsive for mobile, tablet, and PC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Media Kit Dynamique */}
          <div className="border border-[#27272A] bg-[#141210] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
                  {t.press.card1Badge}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#C7B8A8] font-mono">{t.press.card1Format}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EE] font-medium">
                {t.press.card1Title}
              </h3>

              <p className="text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
                {t.press.card1Desc}
              </p>

              {/* Verified Audience highlights */}
              <div className="py-3 sm:py-4 border-y border-[#27272A]/80 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                {stats.slice(0, 3).map((st) => (
                  <div key={st.id} className="p-1">
                    <p className="text-base sm:text-xl font-serif text-[#F7F3EE] font-bold">
                      {st.display_value}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-[#C7B8A8]/70 tracking-wider uppercase mt-1 truncate">
                      {st.platform}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <button
                onClick={() => setCurrentView('media-kit')}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#B79A7E] hover:text-white transition-colors min-h-[48px]"
              >
                <Download className="w-4 h-4" />
                <span>{t.press.downloadMediaKit}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Press Suite & Inquiries */}
          <div className="border border-[#27272A] bg-[#141210] p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
                  {t.press.card2Badge}
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#C7B8A8] font-mono">{t.press.card2Format}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F3EE] font-medium">
                {t.press.card2Title}
              </h3>

              <p className="text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
                {t.press.card2Desc}
              </p>

              <div className="space-y-2 py-3 sm:py-4 border-y border-[#27272A]/80 text-xs text-[#E8DDD4]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B79A7E] shrink-0" />
                  <span>{t.press.feature1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B79A7E] shrink-0" />
                  <span>{t.press.feature2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B79A7E] shrink-0" />
                  <span>{t.press.feature3}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <button
                onClick={() => setCurrentView('press')}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 border border-[#C7B8A8]/40 text-[#F7F3EE] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#F7F3EE]/10 hover:border-[#F7F3EE] transition-colors min-h-[48px]"
              >
                <span>{t.press.accessPressBtn}</span>
                <ArrowUpRight className="w-4 h-4 text-[#B79A7E]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
