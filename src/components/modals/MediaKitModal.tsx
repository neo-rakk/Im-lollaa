import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Printer, CheckCircle, Award, Tv, Sparkles, Instagram } from 'lucide-react';
import { editorialAssets } from '../../data/assets';

export const MediaKitModal: React.FC = () => {
  const { setCurrentView, profile, stats } = useApp();

  const handlePrint = () => {
    window.print();
  };

  const instagramStat = stats.find(s => s.platform.toLowerCase() === 'instagram') || stats[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12100E] border border-[#27272A] p-5 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-4 sm:my-8 min-h-0 print:border-none print:bg-white print:text-black">
        
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#27272A] mb-8 gap-4 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B79A7E] tracking-widest uppercase">
            <span>OFFICIAL MEDIA KIT · 2026 EDITION</span>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#27272A] hover:border-[#B79A7E] text-xs font-medium tracking-wider uppercase transition-colors min-h-[44px]"
            >
              <Printer className="w-3.5 h-3.5 text-[#B79A7E]" />
              <span className="hidden sm:inline">IMPRIMER / EXPORTER (PDF)</span>
              <span className="sm:hidden">PDF</span>
            </button>

            <button
              onClick={() => setCurrentView('home')}
              className="p-2.5 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Kit Layout */}
        <div className="space-y-10">
          
          {/* Top Lockup: Portrait + Brand Identifiers */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4">
              <div className="border border-[#27272A] aspect-[4/5] bg-[#141210] overflow-hidden">
                <img
                  src={editorialAssets.officialPortrait}
                  alt="Lola Khaoula Kebbache"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-mono tracking-[0.3em] text-[#B79A7E] uppercase">
                PORTFOLIO & MEDIA KIT OFFICIEL
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl text-[#F7F3EE] tracking-tight font-light print:text-black">
                LOLA
              </h1>
              <p className="text-sm font-mono tracking-widest text-[#C7B8A8] uppercase print:text-neutral-700">
                KHAOULA KEBBACHE
              </p>
              <p className="text-xs tracking-[0.2em] text-[#B79A7E] uppercase font-semibold">
                CREATOR · PRESENTER · BEAUTY · MEDIA
              </p>

              <p className="text-xs sm:text-sm text-[#C7B8A8] leading-relaxed font-light pt-2 print:text-neutral-800">
                {profile.short_bio.fr}
              </p>
            </div>
          </div>

          {/* Verified Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#27272A]">
            <div className="p-6 border border-[#27272A] bg-[#141210] print:border-neutral-300 print:bg-neutral-50 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#B79A7E] font-mono uppercase mb-1">
                <Instagram className="w-3.5 h-3.5" />
                <span>INSTAGRAM OFFICIEL</span>
              </div>
              <div className="font-serif text-3xl font-bold text-[#F7F3EE] print:text-black">
                {instagramStat.display_value}
              </div>
              <p className="text-[10px] text-[#C7B8A8] font-mono mt-1">@im_lollaa · Certifié</p>
            </div>

            <div className="p-6 border border-[#27272A] bg-[#141210] print:border-neutral-300 print:bg-neutral-50 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#B79A7E] font-mono uppercase mb-1">
                <Tv className="w-3.5 h-3.5" />
                <span>AUDIOVISUEL</span>
              </div>
              <div className="font-serif text-3xl font-bold text-[#F7F3EE] print:text-black">
                Prime Time
              </div>
              <p className="text-[10px] text-[#C7B8A8] font-mono mt-1">Présentatrice TV Officielle</p>
            </div>

            <div className="p-6 border border-[#27272A] bg-[#141210] print:border-neutral-300 print:bg-neutral-50 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#B79A7E] font-mono uppercase mb-1">
                <Award className="w-3.5 h-3.5" />
                <span>EXPERTISE</span>
              </div>
              <div className="font-serif text-3xl font-bold text-[#F7F3EE] print:text-black">
                Diplômée
              </div>
              <p className="text-[10px] text-[#C7B8A8] font-mono mt-1">Cosmétologie & Parfumerie</p>
            </div>
          </div>

          {/* Formations & Qualifications */}
          <div className="space-y-4 pt-6 border-t border-[#27272A]">
            <h3 className="font-serif text-2xl text-[#F7F3EE] font-medium print:text-black">
              Qualifications & Expertises Techniques
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#C7B8A8]">
              {profile.education.map((ed, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-[#141210] border border-[#27272A] print:border-neutral-300 print:bg-neutral-50">
                  <CheckCircle className="w-4 h-4 text-[#B79A7E] shrink-0" />
                  <span className="print:text-black">{ed.fr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration packages */}
          <div className="space-y-4 pt-6 border-t border-[#27272A]">
            <h3 className="font-serif text-2xl text-[#F7F3EE] font-medium print:text-black">
              Formats de Collaboration Disponibles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 border border-[#27272A] bg-[#141210] print:border-neutral-300 print:bg-neutral-50 space-y-2">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">FORMAT 01</span>
                <h4 className="font-semibold text-[#F7F3EE] print:text-black">Égérie & Ambassadrice</h4>
                <p className="text-[#C7B8A8] print:text-neutral-700">Contrat annuel, campagnes 360°, shootings officiels et présence salon de prestige.</p>
              </div>

              <div className="p-5 border border-[#27272A] bg-[#141210] print:border-neutral-300 print:bg-neutral-50 space-y-2">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">FORMAT 02</span>
                <h4 className="font-semibold text-[#F7F3EE] print:text-black">Télévision & Événements</h4>
                <p className="text-[#C7B8A8] print:text-neutral-700">Animation de galas, présentations de défilés de mode, couverture tapis rouge et festivals.</p>
              </div>

              <div className="p-5 border border-[#27272A] bg-[#141210] print:border-neutral-300 print:bg-neutral-50 space-y-2">
                <span className="text-[10px] font-mono text-[#B79A7E] uppercase">FORMAT 03</span>
                <h4 className="font-semibold text-[#F7F3EE] print:text-black">Campagnes Beauté & Soins</h4>
                <p className="text-[#C7B8A8] print:text-neutral-700">Mise en valeur d'actifs cosmétologiques, tutoriels experts et lancements exclusifs.</p>
              </div>
            </div>
          </div>

          {/* Contact footer */}
          <div className="pt-6 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#C7B8A8]">
            <p>Management officiel : <span className="text-[#F7F3EE] font-mono font-medium">collab@im-lolla.com</span></p>
            <p className="font-mono">im-lolla.com · Confidentiel</p>
          </div>

        </div>

      </div>
    </div>
  );
};
