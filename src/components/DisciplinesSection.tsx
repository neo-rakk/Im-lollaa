import React from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUpRight } from 'lucide-react';

export const DisciplinesSection: React.FC = () => {
  const { t, profile, setCurrentView, setSelectedTvProject, tvProjects } = useApp();

  const handleDisciplineClick = (index: number) => {
    if (index === 0) {
      setCurrentView('gallery');
    } else if (index === 1) {
      setSelectedTvProject(tvProjects[0]);
      setCurrentView('on-air');
    } else if (index === 2) {
      setCurrentView('beauty');
    } else if (index === 3) {
      setCurrentView('collaborate');
    }
  };

  return (
    <section id="disciplines" className="py-24 md:py-32 bg-[#0B0B0B] text-[#F7F3EE] border-b border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs tracking-[0.25em] text-[#B79A7E] uppercase font-medium mb-3">
              {t.disciplines.kicker}
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F7F3EE] font-light tracking-tight">
              {t.disciplines.title}
            </h2>
          </div>
          <p className="text-xs tracking-widest text-[#C7B8A8]/60 uppercase">
            EXPERTISE MULTIDISCIPLINAIRE · HAUTE EXIGENCE
          </p>
        </div>

        {/* 4 Cards Grid - Natural Editorial Numbering without pill sandwiches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.disciplines.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleDisciplineClick(index)}
              className="group cursor-pointer border border-[#27272A] bg-[#12100E] p-6 flex flex-col justify-between hover:border-[#B79A7E]/60 transition-all duration-300 min-h-[380px]"
            >
              {/* Header: Number & External Link Indicator */}
              <div className="flex items-center justify-between pb-6 border-b border-[#27272A]/60">
                <span className="font-serif text-2xl text-[#B79A7E] font-light">
                  {item.number}
                </span>
                <span className="p-2 rounded-full border border-[#27272A] text-[#C7B8A8] group-hover:text-[#F7F3EE] group-hover:border-[#B79A7E] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              {/* Center Image preview frame */}
              <div className="my-6 relative overflow-hidden aspect-[16/10] bg-[#1a1715] border border-[#27272A]">
                <img
                  src={item.image}
                  alt={item.title.fr}
                  className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#0B0B0B]/30 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-serif text-xl text-[#F7F3EE] group-hover:text-[#B79A7E] transition-colors font-medium">
                  {item.title.fr}
                </h3>
                <p className="text-xs text-[#C7B8A8] leading-relaxed mt-2 font-light line-clamp-3">
                  {item.description.fr}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
