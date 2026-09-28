import React from 'react';
import { useApp } from '../context/AppContext';
import { FileText, Download, CheckCircle, ArrowUpRight } from 'lucide-react';

export const PressMediaKitSection: React.FC = () => {
  const { t, stats, setCurrentView } = useApp();

  return (
    <section className="py-24 md:py-32 bg-[#0E0C0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>{t.press.kicker}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.press.title}
            </h2>
          </div>
          <p className="text-xs tracking-widest text-[#C7B8A8]/70 uppercase">
            RESSOURCES JOURNALISTES & PROFESSIONNELS
          </p>
        </div>

        {/* 2-Column Suite Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Media Kit Dynamique */}
          <div className="border border-[#27272A] bg-[#141210] p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
                  DOCUMENT OFFICIEL · ÉDITION 2026
                </span>
                <span className="text-[11px] text-[#C7B8A8] font-mono">PDF EXPORTABLE</span>
              </div>

              <h3 className="font-serif text-3xl text-[#F7F3EE] font-medium">
                Official Media Kit
              </h3>

              <p className="text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
                Synthèse complète pour marques et agences : données démographiques, engagements vérifiés, formats de collaboration, réalisations audiovisuelles et conditions techniques.
              </p>

              {/* Verified Audience highlights */}
              <div className="py-4 border-y border-[#27272A]/80 grid grid-cols-3 gap-4 text-center">
                {stats.slice(0, 3).map((st) => (
                  <div key={st.id}>
                    <p className="text-lg sm:text-xl font-serif text-[#F7F3EE] font-bold">
                      {st.display_value}
                    </p>
                    <p className="text-[10px] text-[#C7B8A8]/70 tracking-wider uppercase mt-1">
                      {st.platform}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setCurrentView('media-kit')}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#B79A7E] hover:text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{t.press.downloadMediaKit}</span>
              </button>
            </div>
          </div>

          {/* Card 2: Press Suite & Inquiries */}
          <div className="border border-[#27272A] bg-[#141210] p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
                  SALLE DE PRESSE & MÉDIAS
                </span>
                <span className="text-[11px] text-[#C7B8A8] font-mono">KIT OFFICIEL</span>
              </div>

              <h3 className="font-serif text-3xl text-[#F7F3EE] font-medium">
                Press Pack & Interviews
              </h3>

              <p className="text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed">
                Portraits officiels haute définition libres de droit presse, éléments biographiques validés par le management, et formulaire direct de demande d’interview.
              </p>

              <div className="space-y-2 py-4 border-y border-[#27272A]/80 text-xs text-[#E8DDD4]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B79A7E]" />
                  <span>Portraits studio HD & visuels de tournage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B79A7E]" />
                  <span>Biographie officielle trilingue (FR / AR / EN)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B79A7E]" />
                  <span>Fiche technique et historique TV</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => setCurrentView('press')}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 border border-[#C7B8A8]/40 text-[#F7F3EE] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#F7F3EE]/10 hover:border-[#F7F3EE] transition-colors"
              >
                <span>ACCÉDER À L’ESPACE PRESSE</span>
                <ArrowUpRight className="w-4 h-4 text-[#B79A7E]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
