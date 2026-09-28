import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';
import { BeautyArticle } from '../types';

export const BeautyEditSection: React.FC = () => {
  const { t, beautyArticles, setSelectedArticle, setCurrentView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.beauty.categories.all },
    { key: 'skin', label: t.beauty.categories.skin },
    { key: 'makeup', label: t.beauty.categories.makeup },
    { key: 'hair', label: t.beauty.categories.hair },
    { key: 'fragrance', label: t.beauty.categories.fragrance }
  ];

  const filteredArticles = selectedCategory === 'all'
    ? beautyArticles.filter((a) => a.status === 'published')
    : beautyArticles.filter((a) => a.status === 'published' && a.category === selectedCategory);

  const handleArticleClick = (article: BeautyArticle) => {
    setSelectedArticle(article);
    setCurrentView('beauty');
  };

  return (
    <section id="beauty-edit" className="py-16 sm:py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-2 sm:mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.beauty.kicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.beauty.title}
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs tracking-widest text-[#C7B8A8]/70 uppercase">
            {t.beauty.subtitle}
          </p>
        </div>

        {/* Interactive Filter Controls: Touch-friendly segmented buttons with wrap on mobile */}
        <div className="flex flex-wrap items-center gap-2 pb-6 sm:pb-8 border-b border-[#27272A]/40 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs tracking-[0.14em] uppercase font-medium transition-all min-h-[40px] flex items-center justify-center ${
                selectedCategory === cat.key
                  ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                  : 'bg-[#141210] text-[#C7B8A8] border border-[#27272A] hover:text-[#F7F3EE] hover:border-[#B79A7E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Articles Grid: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="group cursor-pointer flex flex-col justify-between border border-[#27272A] bg-[#12100E] hover:border-[#B79A7E]/50 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#1a1715]">
                <img
                  src={article.coverImage}
                  alt={article.title.fr}
                  className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#0B0B0B]/20 group-hover:bg-transparent transition-colors" />
                
                {/* Clean unboxed category kicker overlay */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 text-[9px] sm:text-[10px] tracking-widest font-mono text-[#F7F3EE] uppercase bg-[#0B0B0B]/80 px-2 py-1">
                  {article.category}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with bullet separator */}
                  <div className="flex items-center gap-2 text-xs text-[#C7B8A8]/70 mb-2.5 sm:mb-3">
                    <span className="flex items-center gap-1 font-mono text-[10px] sm:text-[11px]">
                      <Clock className="w-3 h-3 text-[#B79A7E]" />
                      {article.readTime.fr}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[10px] sm:text-[11px]">{article.publishedAt}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3EE] group-hover:text-[#B79A7E] transition-colors font-medium leading-snug">
                    {article.title.fr}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C7B8A8] mt-2.5 sm:mt-3 font-light leading-relaxed line-clamp-3">
                    {article.excerpt.fr}
                  </p>
                </div>

                {/* Read article button */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#27272A]/60 flex items-center justify-between text-xs tracking-wider text-[#B79A7E] font-medium min-h-[36px]">
                  <span className="group-hover:text-[#F7F3EE] transition-colors">{t.beauty.readArticle}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
