import React from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

export const CollaborateSection: React.FC = () => {
  const { t, setCurrentView } = useApp();

  const collaborationTypes = [
    'Brand Ambassador',
    'Beauty & Cosmetics Campaign',
    'Product Launch',
    'TV & Media Production',
    'Event Hosting & Ceremonies',
    'Editorial & Haute Couture'
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="border border-[#27272A] bg-gradient-to-b from-[#141210] to-[#0E0C0B] p-8 md:p-16 lg:p-20 relative">
          
          {/* Ambient rim light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B79A7E]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.collaborate.kicker}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight leading-tight">
              {t.collaborate.title}
            </h2>

            <p className="text-sm md:text-base text-[#C7B8A8] font-light leading-relaxed mt-6">
              {t.collaborate.desc}
            </p>

            {/* Collaboration formats list */}
            <div className="mt-8 pt-8 border-t border-[#27272A]/80">
              <p className="text-xs font-mono tracking-widest text-[#B79A7E] uppercase mb-4">
                FORMATS D’INTERVENTION PROPOSÉS
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E8DDD4]">
                {collaborationTypes.map((type, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B79A7E]" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setCurrentView('collaborate')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B79A7E] hover:text-white transition-all"
              >
                <span>{t.collaborate.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentView('media-kit')}
                className="inline-flex items-center gap-3 px-6 py-4 border border-[#27272A] text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E] text-xs font-medium tracking-[0.18em] uppercase transition-colors"
              >
                <span>CONSULTER LE MEDIA KIT</span>
              </button>
            </div>

            {/* Official domain notice */}
            <div className="mt-8 flex items-center gap-2 text-[11px] text-[#C7B8A8]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B79A7E]" />
              <span>Demandes traitées exclusivement sous protocole confidentiel par le management de Lola.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
