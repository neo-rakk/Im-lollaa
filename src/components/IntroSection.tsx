import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, CheckCircle2 } from 'lucide-react';
import { editorialAssets } from '../data/assets';

export const IntroSection: React.FC = () => {
  const { t, profile, stats, setCurrentView } = useApp();

  const mainStat = stats.find((s) => s.platform === 'Instagram') || stats[0];

  return (
    <section id="person-behind-lola" className="py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-3">
            {t.intro.kicker}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
            {t.intro.title}
          </h2>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Portrait Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden border border-[#27272A] aspect-[4/5] bg-[#141210]">
              <img
                src={editorialAssets.officialPortrait}
                alt="Khaoula Kebbache Portrait"
                className="w-full h-full object-cover object-center filter grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs tracking-widest text-[#E8DDD4]">
                <span>KHAOULA KEBBACHE</span>
                <span className="text-[#B79A7E]">PORTRAIT 01</span>
              </div>
            </div>

            {/* Verified Community Callout directly adjacent */}
            <div className="mt-6 p-6 border border-[#27272A] bg-[#141210]/60 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#C7B8A8] tracking-wider uppercase mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B79A7E]" />
                  <span>{t.intro.statsLabel}</span>
                </div>
                <div className="text-2xl md:text-3xl font-serif text-[#F7F3EE] font-semibold">
                  {mainStat?.display_value || '+600K'}
                </div>
                <p className="text-[11px] text-[#C7B8A8]/60 mt-0.5">
                  Instagram @im_lollaa · Source vérifiée
                </p>
              </div>

              <button
                onClick={() => setCurrentView('media-kit')}
                className="text-xs font-semibold tracking-wider text-[#B79A7E] hover:text-[#F7F3EE] underline decoration-[#B79A7E] underline-offset-4"
              >
                MEDIA KIT →
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Certified Formations */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6 text-base md:text-lg text-[#C7B8A8] leading-relaxed font-light">
              <p className="text-[#F7F3EE] font-normal text-xl md:text-2xl font-serif">
                « {t.intro.p1} »
              </p>
              <p>
                {t.intro.p2}
              </p>
              <p>
                {t.intro.p3}
              </p>
            </div>

            {/* Verified Credentials Block */}
            <div className="pt-6 border-t border-[#27272A]/70">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#B79A7E] mb-6">
                <Award className="w-4 h-4" />
                <span>FORMATIONS & DOMAINES D’EXCELLENCE CERTIFIÉS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.education.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#27272A] bg-[#12100E] flex flex-col justify-between"
                  >
                    <span className="text-[11px] tracking-widest text-[#B79A7E] uppercase font-mono">
                      0{index + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-[#F7F3EE] font-medium mt-2">
                      {item.fr}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Read full about CTA */}
            <div className="pt-4">
              <button
                onClick={() => setCurrentView('about')}
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#F7F3EE] hover:text-[#B79A7E] font-semibold border-b border-[#B79A7E] pb-1 transition-colors"
              >
                <span>LIRE LA BIOGRAPHIE COMPLÈTE & PARCOURS</span>
                <span>→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
