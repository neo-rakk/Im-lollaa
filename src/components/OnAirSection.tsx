import React from 'react';
import { useApp } from '../context/AppContext';
import { Tv, Play, ArrowUpRight } from 'lucide-react';
import { editorialAssets } from '../data/assets';

export const OnAirSection: React.FC = () => {
  const { t, tvProjects, setSelectedTvProject, setCurrentView } = useApp();

  const primaryShow = tvProjects[0];

  const handleOpenShow = () => {
    setSelectedTvProject(primaryShow);
    setCurrentView('on-air');
  };

  return (
    <section className="py-24 md:py-32 bg-[#0E0C0B] text-[#F7F3EE] border-b border-[#27272A]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-3">
              <Tv className="w-3.5 h-3.5" />
              <span>{t.onAir.kicker}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.onAir.title}
            </h2>
          </div>
          <p className="text-xs tracking-widest text-[#C7B8A8]/70 uppercase">
            {t.onAir.subtitle}
          </p>
        </div>

        {/* Big Television Showcase Card */}
        <div className="border border-[#27272A] bg-[#141210] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Studio Frame (7 cols) */}
            <div className="lg:col-span-7 relative group cursor-pointer aspect-video lg:aspect-auto" onClick={handleOpenShow}>
              <img
                src={editorialAssets.tvStudio}
                alt="Miss Fashion DZ Studio Stage"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Play / Showreel Affordance */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-[#B79A7E] bg-[#0B0B0B]/70 backdrop-blur-sm flex items-center justify-center text-[#F7F3EE] group-hover:scale-110 group-hover:bg-[#B79A7E] group-hover:text-black transition-all">
                  <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-xs tracking-wider text-[#E8DDD4]">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="font-mono text-[11px] uppercase">BROADCAST ARCHIVE</span>
              </div>
            </div>

            {/* Editorial Information (5 cols) */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#27272A] bg-[#12100E]">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
                    PROJET AUDIOVISUEL MAJEUR
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F3EE] font-medium tracking-tight mt-1">
                    {primaryShow.title.fr}
                  </h3>
                </div>

                {/* Role and Year unboxed metadata */}
                <div className="space-y-3 py-4 border-y border-[#27272A]/70 text-xs">
                  <div className="flex justify-between items-center text-[#C7B8A8]">
                    <span className="tracking-wider uppercase">{t.onAir.roleLabel}</span>
                    <span className="text-[#F7F3EE] font-medium">{primaryShow.role.fr}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#C7B8A8]">
                    <span className="tracking-wider uppercase">{t.onAir.yearLabel}</span>
                    <span className="text-[#F7F3EE] font-medium">{primaryShow.year}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
                  {primaryShow.description.fr}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={handleOpenShow}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.18em] uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
                >
                  <span>{t.onAir.viewProject}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {primaryShow.externalUrl && (
                  <a
                    href={primaryShow.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#27272A] text-xs text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E] tracking-wider uppercase transition-colors"
                  >
                    <span>PAGE OFFICIELLE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
