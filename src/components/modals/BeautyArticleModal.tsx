import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Clock, Sparkles, ShieldAlert } from 'lucide-react';
import { BeautyArticle } from '../../types';

export const BeautyArticleModal: React.FC = () => {
  const { setCurrentView, selectedArticle, beautyArticles, t, lang } = useApp();

  const article: BeautyArticle = selectedArticle || beautyArticles[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0B0B0B]/95 backdrop-blur-xl flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#12100E] border border-[#27272A] p-5 sm:p-10 lg:p-12 text-[#F7F3EE] shadow-2xl my-4 sm:my-8 min-h-0">
        
        {/* Close button with accessible touch target */}
        <button
          onClick={() => setCurrentView('home')}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center z-10 bg-[#12100E]/90 sm:bg-transparent"
          aria-label={t.nav.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Read Time */}
        <div className="flex items-center gap-3 text-xs text-[#B79A7E] font-mono tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.beauty.categories[article.category as keyof typeof t.beauty.categories] || article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime[lang] || article.readTime.fr}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedAt}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F3EE] font-light leading-tight tracking-tight mb-6">
          {article.title[lang] || article.title.fr}
        </h1>

        {/* Sponsor Banner (if sponsored) */}
        {article.isSponsored && (
          <div className="mb-6 p-3 bg-[#1A1816] border border-[#B79A7E]/40 text-xs text-[#E8DDD4] flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-[#B79A7E]" />
            <span>{t.beauty.sponsored} {article.sponsorName || ''}</span>
          </div>
        )}

        {/* Excerpt */}
        <p className="text-base sm:text-lg text-[#C7B8A8] font-serif italic mb-8 border-l-2 border-[#B79A7E] pl-4">
          « {article.excerpt[lang] || article.excerpt.fr} »
        </p>

        {/* Cover Photo */}
        <div className="relative overflow-hidden aspect-[16/10] border border-[#27272A] bg-[#141210] mb-8">
          <img
            src={article.coverImage}
            alt={article.title[lang] || article.title.fr}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Editorial Body Content */}
        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-[#C7B8A8] font-light leading-relaxed space-y-4 whitespace-pre-line">
          {article.content[lang] || article.content.fr}
        </div>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-[#27272A] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#B79A7E] uppercase mr-2">{t.beauty.tagsLabel}</span>
          {article.tags.map((tag, idx) => (
            <span key={idx} className="text-xs text-[#C7B8A8]">
              #{tag} {idx < article.tags.length - 1 ? '·' : ''}
            </span>
          ))}
        </div>

        {/* Author sign-off */}
        <div className="mt-8 p-5 sm:p-6 border border-[#27272A] bg-[#141210] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-[#F7F3EE] font-serif">
              Lola (Khaoula Kebbache)
            </p>
            <p className="text-[11px] text-[#C7B8A8]/70">
              {t.beauty.authorTitle}
            </p>
          </div>

          <button
            onClick={() => setCurrentView('beauty')}
            className="self-start sm:self-auto px-4 py-2 border border-[#27272A] text-xs text-[#C7B8A8] hover:text-[#F7F3EE] hover:border-[#B79A7E] transition-colors min-h-[40px] flex items-center justify-center"
          >
            {t.beauty.allArticles}
          </button>
        </div>

      </div>
    </div>
  );
};
