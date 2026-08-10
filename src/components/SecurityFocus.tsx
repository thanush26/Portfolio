import React from 'react';
import { SECURITY_FOCUS_AREAS } from '../data/portfolioData';
import { ShieldAlert, Lock, Code2, Cpu, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-[#8a9a5b]" />,
  Lock: <Lock className="w-6 h-6 text-[#8a9a5b]" />,
  Code2: <Code2 className="w-6 h-6 text-[#8a9a5b]" />,
  Cpu: <Cpu className="w-6 h-6 text-[#8a9a5b]" />,
};

export const SecurityFocus: React.FC = () => {
  return (
    <section id="security-focus" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase mb-3">
              <span>02 / FOCUS</span>
              <span className="w-12 h-[1px] bg-[#8a9a5b]/30" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[#f4f3ef] tracking-tight">
              WHAT I DO
            </h2>
          </div>
          <p className="font-editorial italic text-lg text-[#9a9996] max-w-md">
            Four pillars of security engineering & defensive software architecture.
          </p>
        </div>

        {/* 4 Large Editorial Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECURITY_FOCUS_AREAS.map((block) => (
            <div
              key={block.id}
              className="group relative p-8 sm:p-10 border border-white/10 bg-[#121216] rounded-sm transition-all duration-300 hover:border-[#8a9a5b]/50 hover:bg-[#16161c] flex flex-col justify-between"
            >
              {/* Top Row: Number & Icon & Hover Arrow */}
              <div>
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                  <span className="font-mono text-3xl font-extrabold text-[#8a9a5b]/60 group-hover:text-[#8a9a5b] transition-colors">
                    {block.number}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-[#8a9a5b]/10 border border-[#8a9a5b]/20 group-hover:border-[#8a9a5b]/50 transition-colors">
                      {iconMap[block.iconName]}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#9a9996] group-hover:text-[#8a9a5b] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-[#f4f3ef] mb-2 group-hover:text-[#8a9a5b] transition-colors">
                  {block.title}
                </h3>
                <p className="font-editorial italic text-sm text-[#8a9a5b] mb-4">
                  {block.subtitle}
                </p>
                <p className="text-[#9a9996] font-light text-sm leading-relaxed mb-6">
                  {block.description}
                </p>
              </div>

              {/* Highlights Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {block.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/[0.03] text-[#9a9996] group-hover:text-[#f4f3ef] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Accent Left Bar on Hover */}
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#8a9a5b] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
