import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Tv, ExternalLink, Calendar, UserCheck, Play } from 'lucide-react';
import { editorialAssets } from '../../data/assets';

export const TVProjectModal: React.FC = () => {
  const { setCurrentView, selectedTvProject, tvProjects } = useApp();

  const project = selectedTvProject || tvProjects[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12100E] border border-[#27272A] p-6 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-6 right-6 p-2 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Kicker */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B79A7E] tracking-widest uppercase">
            <Tv className="w-3.5 h-3.5" />
            <span>FICHE DE PRODUCTION TÉLÉVISUELLE OFFICIELLE</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#F7F3EE] font-light mt-1">
            {project.title.fr}
          </h1>
        </div>

        {/* Visual Stage Hero */}
        <div className="relative overflow-hidden aspect-video border border-[#27272A] bg-[#141210] mb-8">
          <img
            src={editorialAssets.tvStudio}
            alt={project.title.fr}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#E8DDD4]">
            <span className="font-mono text-[11px] uppercase tracking-wider bg-[#0B0B0B]/80 px-2.5 py-1">
              PLATEAU PRIME TIME
            </span>
            <span className="text-[#B79A7E] font-medium">BOULEVARD DE LA MODE & STYLE</span>
          </div>
        </div>

        {/* Technical Data Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 border border-[#27272A] bg-[#141210] mb-8 text-xs">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5" />
              RÔLE EXÉCUTIF
            </span>
            <p className="font-serif text-lg font-medium text-[#F7F3EE]">
              {project.role.fr}
            </p>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#27272A] pt-4 sm:pt-0 sm:pl-6">
            <span className="text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              PÉRIODE & STATUT
            </span>
            <p className="font-serif text-lg font-medium text-[#F7F3EE]">
              {project.year}
            </p>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-[#27272A] pt-4 sm:pt-0 sm:pl-6">
            <span className="text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase">
              DIFFUSION & FORMAT
            </span>
            <p className="font-serif text-lg font-medium text-[#F7F3EE]">
              Prime Time Hebdomadaire
            </p>
          </div>
        </div>

        {/* Narrative & Details */}
        <div className="space-y-6 text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed mb-8">
          <h3 className="font-serif text-2xl text-[#F7F3EE] font-medium">
            Présentation du Programme
          </h3>
          <p>
            {project.description.fr}
          </p>
          <p>
            {project.details.fr}
          </p>
        </div>

        {/* Stage & Backstage Visuals */}
        <div className="space-y-4 pt-6 border-t border-[#27272A]">
          <h4 className="font-serif text-xl text-[#F7F3EE] font-medium">
            Galerie & Captures de Plateau
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="border border-[#27272A] aspect-[16/10] overflow-hidden bg-[#141210]">
                <img src={img} alt="Backstage photo" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-8 mt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#C7B8A8]">
            Informations validées et archivées au portfolio audiovisuel de Lola.
          </p>

          <div className="flex items-center gap-4">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#27272A] text-xs font-semibold tracking-wider text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E] uppercase transition-colors"
              >
                <span>PAGE OFFICIELLE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => setCurrentView('collaborate')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-wider uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
            >
              PROPOSER UN PROJET TV
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
