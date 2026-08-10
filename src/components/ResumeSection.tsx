import React from 'react';
import { FileText, ArrowRight, Download } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Resume Card Banner */}
        <div className="relative p-10 sm:p-16 border border-white/10 bg-[#121216] rounded-sm overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8a9a5b]/10 rounded-full blur-[100px] pointer-events-none -z-0" />

          {/* Left Text */}
          <div className="space-y-4 relative z-10 max-w-xl">
            <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase">
              <FileText className="w-4 h-4" />
              <span>07 / RESUME</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#f4f3ef] tracking-tight leading-tight">
              THE SHORT VERSION
            </h2>

            <p className="text-base sm:text-lg text-[#9a9996] font-light">
              Want the complete picture? Download the official technical resume, project architecture specs, and core cybersecurity competencies.
            </p>
          </div>

          {/* Right Action Button: Download PDF Only */}
          <div className="relative z-10">
            <a
              href="/thanush-resume.pdf"
              download="Thanush_Cybersecurity_Resume.pdf"
              className="group inline-flex items-center gap-3 bg-[#8a9a5b] text-[#0a0a0c] font-mono text-xs font-bold tracking-widest px-8 py-5 rounded hover:bg-[#b2c28a] transition-all shadow-xl shadow-[#8a9a5b]/10"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME PDF</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
