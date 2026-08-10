import React from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Terminal, CheckCircle2, Layers } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { ProjectCardVisual } from './ProjectCardVisual';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#0a0a0c] border border-white/15 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#0a0a0c]/90 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8a9a5b] font-bold px-2.5 py-1 bg-[#8a9a5b]/10 border border-[#8a9a5b]/20 rounded">
              {project.number}
            </span>
            <span className="font-mono text-xs text-[#9a9996] uppercase hidden sm:inline">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8a9a5b] hover:text-[#b2c28a] px-3 py-1.5 rounded border border-[#8a9a5b]/30 bg-[#8a9a5b]/10 transition-colors"
              >
                <span>GITHUB REPO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 text-[#9a9996] hover:text-[#f4f3ef] hover:bg-white/5 rounded transition-colors focus:outline-none"
              aria-label="Close Case Study Modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-12 font-light">
          
          {/* Main Title & Short Intro */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#f4f3ef] tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="font-editorial italic text-xl text-[#8a9a5b]">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Schematic Box */}
          <div className="w-full rounded border border-white/10 overflow-hidden">
            <ProjectCardVisual type={project.visualType} />
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 border border-white/10 bg-[#121216] rounded">
              <span className="text-[#9a9996] block mb-1">TIMELINE / YEAR</span>
              <span className="text-[#f4f3ef] font-semibold text-sm">{project.year}</span>
            </div>
            <div className="p-4 border border-white/10 bg-[#121216] rounded">
              <span className="text-[#9a9996] block mb-1">CATEGORY</span>
              <span className="text-[#8a9a5b] font-semibold text-sm">{project.category}</span>
            </div>
            <div className="p-4 border border-white/10 bg-[#121216] rounded">
              <span className="text-[#9a9996] block mb-1">AUDIT STATUS</span>
              <span className="text-emerald-400 font-semibold text-sm">GITHUB AUDITED</span>
            </div>
          </div>

          {/* 01 PROJECT OVERVIEW */}
          <div className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8a9a5b] uppercase tracking-widest">
              <Terminal className="w-4 h-4" />
              <span>01 / PROJECT OVERVIEW</span>
            </div>
            <p className="text-base sm:text-lg text-[#f4f3ef] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* 02 PROBLEM & 03 OBJECTIVE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="font-mono text-xs text-rose-400 uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>02 / THE PROBLEM</span>
              </div>
              <p className="text-sm sm:text-base text-[#9a9996] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs text-[#8a9a5b] uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#8a9a5b]" />
                <span>03 / OBJECTIVE</span>
              </div>
              <p className="text-sm sm:text-base text-[#9a9996] leading-relaxed">
                {caseStudy.objective}
              </p>
            </div>
          </div>

          {/* 04 TECHNOLOGY STACK */}
          <div className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8a9a5b] uppercase tracking-widest">
              <Layers className="w-4 h-4" />
              <span>04 / TECHNOLOGY STACK</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technology.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3 py-1.5 rounded border border-white/10 bg-[#121216] text-[#f4f3ef]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 05 SECURITY CONSIDERATIONS */}
          <div className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#8a9a5b] uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>05 / SECURITY CONSIDERATIONS</span>
            </div>
            <div className="space-y-2">
              {caseStudy.securityConsiderations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-[#121216] border border-white/5 rounded text-sm text-[#f4f3ef]">
                  <CheckCircle2 className="w-4 h-4 text-[#8a9a5b] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 06 IMPLEMENTATION & 07 RESULT */}
          <div className="space-y-8 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#8a9a5b] uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>06 / IMPLEMENTATION</span>
              </div>
              <p className="text-sm sm:text-base text-[#9a9996] leading-relaxed">
                {caseStudy.implementation}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4" />
                <span>07 / RESULT</span>
              </div>
              <p className="text-sm sm:text-base text-[#f4f3ef] leading-relaxed font-normal">
                {caseStudy.result}
              </p>
            </div>
          </div>

          {/* 08 LESSONS LEARNED */}
          <div className="space-y-3 p-6 bg-[#8a9a5b]/10 border border-[#8a9a5b]/20 rounded">
            <div className="font-mono text-xs text-[#8a9a5b] uppercase tracking-widest font-semibold">
              08 / LESSONS LEARNED
            </div>
            <p className="text-sm sm:text-base text-[#f4f3ef] font-editorial italic">
              "{caseStudy.lessonsLearned}"
            </p>
          </div>

          {/* Direct GitHub Repository Link Box */}
          {project.githubUrl && (
            <div className="p-6 border border-white/15 rounded bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-[#f4f3ef] font-bold">SOURCE CODE ARCHIVE</p>
                <p className="text-[#9a9996]">Inspect raw source code and commits directly on GitHub.</p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8a9a5b] text-[#0a0a0c] font-bold rounded hover:bg-[#b2c28a] transition-all shrink-0"
              >
                <span>OPEN REPOSITORY</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#0a0a0c]/90 backdrop-blur-md px-6 sm:px-8 py-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <span className="text-[#9a9996]">PRESS ESC OR CLOSE TO EXIT</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white/10 text-[#f4f3ef] font-bold rounded hover:bg-white/20 transition-colors"
          >
            CLOSE CASE STUDY
          </button>
        </div>

      </div>
    </div>
  );
};
