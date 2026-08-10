import React from 'react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase mb-3">
              <span>06 / LEARNING RADAR</span>
              <span className="w-12 h-[1px] bg-[#8a9a5b]/30" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[#f4f3ef] tracking-tight">
              CURRENTLY EXPLORING
            </h2>
          </div>
          <p className="font-editorial italic text-lg text-[#9a9996] max-w-md">
            An evolving technical journey into complex cybersecurity domains and backend systems.
          </p>
        </div>

        {/* Technical Radar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <div
              key={item.title}
              className="group p-6 border border-white/10 bg-[#121216] rounded-sm transition-all duration-300 hover:border-[#8a9a5b]/40 hover:bg-[#16161c] space-y-4"
            >
              <div className="flex items-center justify-between font-mono text-xs border-b border-white/5 pb-3">
                <span className="text-[#8a9a5b] font-bold">RADAR_0{idx + 1}</span>
                <span className="px-2 py-0.5 rounded bg-white/[0.03] text-[#9a9996]">
                  {item.category}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-[#f4f3ef] group-hover:text-[#8a9a5b] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-[#9a9996] font-light leading-relaxed">
                {item.description}
              </p>

              {/* Progress Indicator */}
              <div className="pt-2 space-y-1 font-mono text-[10px]">
                <div className="flex justify-between text-[#686765]">
                  <span>PROFICIENCY INDEX</span>
                  <span className="text-[#8a9a5b]">{item.progress}%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#8a9a5b] rounded-full transition-all duration-700"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
