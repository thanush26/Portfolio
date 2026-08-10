import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const interests = [
    'Cybersecurity',
    'Ethical Hacking',
    'Web Application Security',
    'API Security',
    'GraphQL Security',
    'Backend Development',
    'Security Automation',
    'Problem Solving',
    'Emerging Tech',
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase mb-4">
          <span>01 / ABOUT</span>
          <span className="w-12 h-[1px] bg-[#8a9a5b]/30" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f4f3ef] tracking-tight leading-none">
              {PERSONAL_INFO.aboutTitle}
            </h2>
            <p className="font-editorial italic text-xl text-[#8a9a5b]">
              Engineering security from the foundation up.
            </p>
            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#9a9996]">
              <div className="p-3 border border-white/10 rounded bg-[#121216]">
                <Terminal className="w-5 h-5 text-[#8a9a5b] mb-1" />
                <span className="block text-[#f4f3ef]">SEC_RESEARCH</span>
              </div>
              <div className="p-3 border border-white/10 rounded bg-[#121216]">
                <Code2 className="w-5 h-5 text-[#8a9a5b] mb-1" />
                <span className="block text-[#f4f3ef]">DEV_FOCUSED</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Paragraphs & Interests (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-[#9a9996] font-light leading-relaxed">
            {PERSONAL_INFO.aboutBio.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg">
                {paragraph}
              </p>
            ))}

            {/* Core Interest Tag Cloud */}
            <div className="pt-6 border-t border-white/10">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#f4f3ef] mb-4">
                CORE TECHNICAL INTERESTS & FOCUS
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-sm border border-white/10 bg-white/[0.02] text-[#f4f3ef] hover:border-[#8a9a5b]/50 hover:text-[#8a9a5b] transition-all"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
