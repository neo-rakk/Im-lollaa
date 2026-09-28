import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const { t, lang, gallery, activeLightboxIndex, setActiveLightboxIndex } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { key: 'all', label: t.gallery.all },
    { key: 'editorial', label: t.gallery.editorial },
    { key: 'beauty', label: t.gallery.beauty },
    { key: 'fashion', label: t.gallery.fashion },
    { key: 'television', label: t.gallery.television },
    { key: 'portraits', label: t.gallery.portraits }
  ];

  const filteredItems = selectedCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <section id="gallery-section" className="py-16 sm:py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-2 sm:mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>{t.gallery.kicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.gallery.title}
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs tracking-widest text-[#C7B8A8]/70 uppercase">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Category Filters: Touch-friendly */}
        <div className="flex flex-wrap items-center gap-2 pb-6 sm:pb-8 border-b border-[#27272A]/40 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs tracking-[0.14em] uppercase font-medium transition-all min-h-[40px] flex items-center justify-center ${
                selectedCategory === cat.key
                  ? 'bg-[#F7F3EE] text-[#0B0B0B] font-semibold'
                  : 'bg-[#141210] text-[#C7B8A8] border border-[#27272A] hover:text-[#F7F3EE] hover:border-[#B79A7E]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group cursor-pointer relative overflow-hidden border border-[#27272A] bg-[#141210] aspect-[3/4]"
            >
              <img
                src={item.imageUrl}
                alt={item.altText[lang] || item.altText.fr}
                className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover & Mobile Visible overlay with title & zoom icon */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-[#0B0B0B]/80 text-[#F7F3EE] border border-[#B79A7E]/40 min-h-[36px] min-w-[36px] flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#B79A7E] uppercase">
                    {t.gallery[item.category as keyof typeof t.gallery] || item.category}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg text-[#F7F3EE] font-medium leading-snug mt-1">
                    {item.title[lang] || item.title.fr}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#C7B8A8]/80 mt-1">
                    {item.credit} · {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal: Responsive across all devices */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-[#0B0B0B]/98 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#27272A] pb-3 sm:pb-4">
            <div className="pr-4">
              <p className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#B79A7E] uppercase">
                {t.gallery[filteredItems[activeLightboxIndex].category as keyof typeof t.gallery] || filteredItems[activeLightboxIndex].category} · {activeLightboxIndex + 1} / {filteredItems.length}
              </p>
              <h4 className="font-serif text-base sm:text-lg text-[#F7F3EE] truncate max-w-xs sm:max-w-md">
                {filteredItems[activeLightboxIndex].title[lang] || filteredItems[activeLightboxIndex].title.fr}
              </h4>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2.5 sm:p-3 text-[#C7B8A8] hover:text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={t.gallery.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image with Left/Right Buttons */}
          <div className="relative flex-1 flex items-center justify-center py-4 sm:py-6 px-2 sm:px-4 min-h-0">
            <button
              onClick={prevImage}
              className="absolute left-2 sm:left-4 p-2.5 sm:p-3 bg-[#141210]/90 text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={t.gallery.prev}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <img
              src={filteredItems[activeLightboxIndex].imageUrl}
              alt={filteredItems[activeLightboxIndex].altText[lang] || filteredItems[activeLightboxIndex].altText.fr}
              className="max-h-[68vh] sm:max-h-[78vh] max-w-full object-contain select-none"
            />

            <button
              onClick={nextImage}
              className="absolute right-2 sm:right-4 p-2.5 sm:p-3 bg-[#141210]/90 text-[#F7F3EE] border border-[#27272A] hover:border-[#B79A7E] transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={t.gallery.next}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Bottom metadata */}
          <div className="border-t border-[#27272A] pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#C7B8A8] gap-1 sm:gap-4 text-center sm:text-left">
            <p>{filteredItems[activeLightboxIndex].credit} — {filteredItems[activeLightboxIndex].copyright}</p>
            <p className="text-[10px] sm:text-[11px] font-mono">{filteredItems[activeLightboxIndex].altText[lang] || filteredItems[activeLightboxIndex].altText.fr}</p>
          </div>
        </div>
      )}
    </section>
  );
};
