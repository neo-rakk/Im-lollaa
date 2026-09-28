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
    <section id="beauty-edit" className="py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.beauty.kicker}</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.beauty.title}
            </h2>
          </div>
          <p className="text-xs tracking-widest text-[#C7B8A8]/70 uppercase">
            {t.beauty.subtitle}
          </p>
        </div>

        {/* Interactive Filter Controls: Allowed segmented buttons with click handlers */}
        <div className="flex flex-wrap items-center gap-2 pb-10 border-b border-[#27272A]/40 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase font-medium transition-all ${
                selectedCategory === cat.key
                  ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                  : 'bg-[#141210] text-[#C7B8A8] border border-[#27272A] hover:text-[#F7F3EE] hover:border-[#B79A7E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="absolute top-4 left-4 text-[10px] tracking-widest font-mono text-[#F7F3EE] uppercase bg-[#0B0B0B]/80 px-2 py-1">
                  {article.category}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with bullet separator */}
                  <div className="flex items-center gap-2 text-xs text-[#C7B8A8]/70 mb-3">
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-[#B79A7E]" />
                      {article.readTime.fr}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px]">{article.publishedAt}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F3EE] group-hover:text-[#B79A7E] transition-colors font-medium leading-snug">
                    {article.title.fr}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#C7B8A8] mt-3 font-light leading-relaxed line-clamp-3">
                    {article.excerpt.fr}
                  </p>
                </div>

                {/* Read article button */}
                <div className="pt-6 mt-6 border-t border-[#27272A]/60 flex items-center justify-between text-xs tracking-wider text-[#B79A7E] font-medium">
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
