import React, { useState } from 'react';
import { TECH_STACK_ITEMS } from '../data/portfolioData';
import { Filter } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', ...Array.from(new Set(TECH_STACK_ITEMS.map((item) => item.category)))];

  const filteredItems =
    activeCategory === 'ALL'
      ? TECH_STACK_ITEMS
      : TECH_STACK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase mb-3">
              <span>05 / STACK</span>
              <span className="w-12 h-[1px] bg-[#8a9a5b]/30" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[#f4f3ef] tracking-tight">
              TOOLS I WORK WITH
            </h2>
          </div>
          <p className="font-editorial italic text-lg text-[#9a9996] max-w-md">
            Minimalist tech stack focused on high performance, security testing, and reliable software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
          <Filter className="w-4 h-4 text-[#8a9a5b] shrink-0 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#8a9a5b] border-[#8a9a5b] text-[#0a0a0c] font-bold'
                  : 'bg-white/[0.02] border-white/10 text-[#9a9996] hover:text-[#f4f3ef] hover:border-white/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Minimal Typographic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="group p-6 border border-white/10 bg-[#121216] rounded-sm transition-all duration-300 hover:border-[#8a9a5b]/40 hover:bg-[#16161c] flex flex-col justify-between"
            >
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-[#8a9a5b] uppercase tracking-wider block">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-bold text-[#f4f3ef] group-hover:text-[#8a9a5b] transition-colors">
                  {item.name}
                </h3>
              </div>
              
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#686765]">
                <span>CONF // ACTIVE</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#8a9a5b]/40 group-hover:bg-[#8a9a5b] transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
