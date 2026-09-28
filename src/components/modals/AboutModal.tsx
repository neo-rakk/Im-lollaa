import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Award, CheckCircle, ArrowUpRight } from 'lucide-react';
import { editorialAssets } from '../../data/assets';

export const AboutModal: React.FC = () => {
  const { setCurrentView, profile } = useApp();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12100E] border border-[#27272A] p-6 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-8">
        
        {/* Close button */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-6 right-6 p-2 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
            BIOGRAPHIE OFFICIELLE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#F7F3EE] font-light mt-1">
            À Propos de Lola
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#C7B8A8] uppercase mt-1">
            KHAOULA KEBBACHE · CREATOR · PRESENTER · BEAUTY · MEDIA
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-5">
            <div className="border border-[#27272A] aspect-[4/5] bg-[#141210] overflow-hidden">
              <img
                src={editorialAssets.officialPortrait}
                alt="Portrait officiel"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#C7B8A8] leading-relaxed font-light">
            <p className="text-base font-serif text-[#F7F3EE] font-normal italic">
              « Créatrice, présentatrice télévisuelle et passionnée de haute beauté. Une voix contemporaine qui érige des passerelles authentiques entre les médias, le lifestyle et les marques. »
            </p>
            <p>
              {profile.long_bio.fr}
            </p>
            <p>
              Son engagement repose sur une exigence absolue de qualité : chaque prise de parole, chaque projet télévisé et chaque partenariat s’inscrit dans un dialogue respectueux de son public et valorisant pour les institutions partenaires.
            </p>
          </div>
        </div>

        {/* Certified Formations */}
        <div className="space-y-4 pt-8 border-t border-[#27272A]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B79A7E] tracking-widest uppercase">
            <Award className="w-4 h-4" />
            <span>CURSUS SCIENTIFIQUE & SPÉCIALISATIONS BEAUTÉ</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.education.map((item, idx) => (
              <div key={idx} className="p-4 border border-[#27272A] bg-[#141210] flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#B79A7E] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F7F3EE]">{item.fr}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-8 mt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#C7B8A8]">
            Informations vérifiées et tenues à jour sous le contrôle du management officiel.
          </p>

          <button
            onClick={() => setCurrentView('collaborate')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-wider uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
          >
            <span>COLLABORER AVEC LOLA</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
