import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase mb-3">
              <span>04 / METHODOLOGY</span>
              <span className="w-12 h-[1px] bg-[#8a9a5b]/30" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[#f4f3ef] tracking-tight">
              MY PROCESS
            </h2>
          </div>
          <p className="font-editorial italic text-lg text-[#9a9996] max-w-md">
            A disciplined 6-phase engineering lifecycle for security auditing & development.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative py-8">
          
          {/* Horizontal Line */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-[1px] bg-white/10 -z-0" />
          <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-[#8a9a5b] via-[#8a9a5b]/50 to-transparent -z-0" />

          {/* 6 Step Cards Grid */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="group flex flex-col space-y-6">
                
                {/* Step Number Circle */}
                <div className="w-12 h-12 rounded-full border border-white/15 bg-[#121216] flex items-center justify-center font-mono text-sm font-bold text-[#8a9a5b] group-hover:border-[#8a9a5b] group-hover:bg-[#8a9a5b] group-hover:text-[#0a0a0c] transition-all shadow-lg">
                  {step.number}
                </div>

                {/* Content Card */}
                <div className="p-5 border border-white/5 bg-[#121216] rounded-sm space-y-2 group-hover:border-[#8a9a5b]/30 transition-all flex-1">
                  <h3 className="font-display text-lg font-bold text-[#f4f3ef] group-hover:text-[#8a9a5b] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#9a9996] font-light leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-[11px] text-[#686765] font-light leading-relaxed pt-2 border-t border-white/5">
                    {step.details}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative pl-6 border-l border-white/10 space-y-10">
          {PROCESS_STEPS.map((step) => (
            <div key={step.number} className="relative group space-y-2">
              
              {/* Vertical Dot */}
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full border border-[#8a9a5b] bg-[#0a0a0c] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8a9a5b]" />
              </div>

              {/* Header */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#8a9a5b] font-bold">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-bold text-[#f4f3ef]">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-[#f4f3ef] font-medium">
                {step.description}
              </p>
              <p className="text-xs text-[#9a9996] font-light leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
