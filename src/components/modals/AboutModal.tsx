import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Award, CheckCircle, ArrowUpRight } from 'lucide-react';
import { editorialAssets } from '../../data/assets';

export const AboutModal: React.FC = () => {
  const { setCurrentView, profile, t, lang } = useApp();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#12100E] border border-[#27272A] p-5 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-4 sm:my-8 min-h-0">
        
        {/* Close button with accessible touch target */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10 bg-[#12100E]/90 sm:bg-transparent"
          aria-label={t.nav.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <span className="text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
            {t.modals.about.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#F7F3EE] font-light mt-1">
            {t.modals.about.title}
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-widest text-[#C7B8A8] uppercase mt-1">
            {t.modals.about.subtitle}
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          <div className="lg:col-span-5">
            <div className="border border-[#27272A] aspect-[4/5] bg-[#141210] overflow-hidden">
              <img
                src={editorialAssets.officialPortrait}
                alt="Khaoula Kebbache"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#C7B8A8] leading-relaxed font-light">
            <p className="text-base font-serif text-[#F7F3EE] font-normal italic">
              {t.modals.about.quote}
            </p>
            <p>
              {profile.long_bio[lang] || profile.long_bio.fr}
            </p>
            <p>
              {t.modals.about.commitmentText}
            </p>
          </div>
        </div>

        {/* Certified Formations */}
        <div className="space-y-4 pt-8 border-t border-[#27272A]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B79A7E] tracking-widest uppercase">
            <Award className="w-4 h-4" />
            <span>{t.modals.about.credentialsHeader}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profile.education.map((item, idx) => (
              <div key={idx} className="p-4 border border-[#27272A] bg-[#141210] flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[#B79A7E] shrink-0 mt-0.5" />
                <span className="text-xs text-[#F7F3EE]">{item[lang] || item.fr}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-8 mt-8 border-t border-[#27272A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <p className="text-xs text-[#C7B8A8] text-center sm:text-left">
            {t.modals.about.verifiedNotice}
          </p>

          <button
            onClick={() => setCurrentView('collaborate')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F7F3EE] text-[#0B0B0B] text-xs font-semibold tracking-wider uppercase hover:bg-[#B79A7E] hover:text-white transition-colors min-h-[44px]"
          >
            <span>{t.modals.about.workWithLola}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
