import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, ShieldCheck, Cpu, Terminal, CheckCircle2, Layers } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { ProjectCardVisual } from './ProjectCardVisual';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Focus trap, Escape key handling, & body scroll locking
  useEffect(() => {
    if (!project) return;

    // Save triggering element to restore focus on close
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Lock background scroll
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }

      // Keyboard tab trap inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
      
      // Restore focus to original trigger element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
    >
      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl bg-[#08090A] border border-white/15 rounded-sm shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col font-sans"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-[#08090A]/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#D52B32] font-bold px-3 py-1 bg-[#D52B32]/10 border border-[#D52B32]/30 rounded-sm">
              {project.number}
            </span>
            <span className="font-mono text-xs text-[#9FA8A3] uppercase hidden sm:inline tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-btn inline-flex items-center gap-1.5 font-mono text-xs text-[#F4F3EF] px-3.5 py-1.5 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#D52B32]"
              >
                <span>GITHUB REPO</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#9FA8A3]" />
              </a>
            )}
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="p-2 text-[#929292] hover:text-[#F4F3EF] hover:bg-white/10 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-[#D52B32]"
              aria-label="Close Case Study Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-[#929292] font-normal leading-relaxed">
          {/* Main Title & Short Intro */}
          <div className="space-y-3">
            <h2 id="case-study-modal-title" className="font-display text-3xl sm:text-5xl font-extrabold text-[#F4F3EF] tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="font-editorial italic text-xl sm:text-2xl text-[#D52B32]">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Schematic Box */}
          <div className="w-full rounded-sm border border-white/10 overflow-hidden">
            <ProjectCardVisual type={project.visualType} />
          </div>

          {/* Key Metric Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 border border-white/10 bg-[#0F1012] rounded-sm">
              <span className="text-[#9FA8A3] block mb-1">TIMELINE / YEAR</span>
              <span className="text-[#F4F3EF] font-semibold text-sm">{project.year}</span>
            </div>
            <div className="p-4 border border-white/10 bg-[#0F1012] rounded-sm">
              <span className="text-[#9FA8A3] block mb-1">CATEGORY</span>
              <span className="text-[#D52B32] font-semibold text-sm">{project.category}</span>
            </div>
            <div className="p-4 border border-white/10 bg-[#0F1012] rounded-sm">
              <span className="text-[#9FA8A3] block mb-1">AUDIT STATUS</span>
              <span className="text-emerald-400 font-semibold text-sm">GITHUB AUDITED</span>
            </div>
          </div>

          {/* 01 PROJECT OVERVIEW */}
          <div className="space-y-3 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D52B32] uppercase tracking-widest font-semibold">
              <Terminal className="w-4 h-4" />
              <span>01 / PROJECT OVERVIEW</span>
            </div>
            <p className="text-base sm:text-lg text-[#F4F3EF] leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* 02 PROBLEM & 03 OBJECTIVE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="font-mono text-xs text-rose-400 uppercase tracking-widest flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>02 / THE PROBLEM</span>
              </div>
              <p className="text-base text-[#929292] leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs text-[#D52B32] uppercase tracking-widest flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D52B32]" />
                <span>03 / OBJECTIVE</span>
              </div>
              <p className="text-base text-[#929292] leading-relaxed">
                {caseStudy.objective}
              </p>
            </div>
          </div>

          {/* 04 TECHNOLOGY STACK */}
          <div className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D52B32] uppercase tracking-widest font-semibold">
              <Layers className="w-4 h-4" />
              <span>04 / TECHNOLOGY STACK</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technology.map((tech) => (
                <span
                  key={tech}
                  className="glass-pill font-mono text-xs px-3.5 py-1.5 rounded-sm border border-white/10 text-[#F4F3EF]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 05 SECURITY CONSIDERATIONS */}
          <div className="space-y-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D52B32] uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>05 / SECURITY CONSIDERATIONS</span>
            </div>
            <div className="space-y-2.5">
              {caseStudy.securityConsiderations.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#0F1012] border border-white/10 rounded-sm text-base text-[#F4F3EF]">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#D52B32] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 06 IMPLEMENTATION & 07 RESULT */}
          <div className="space-y-8 pb-8 border-b border-white/10">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-[#D52B32] uppercase tracking-widest font-semibold">
                <Cpu className="w-4 h-4" />
                <span>06 / IMPLEMENTATION</span>
              </div>
              <p className="text-base text-[#929292] leading-relaxed">
                {caseStudy.implementation}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>07 / RESULT</span>
              </div>
              <p className="text-base sm:text-lg text-[#F4F3EF] leading-relaxed font-normal">
                {caseStudy.result}
              </p>
            </div>
          </div>

          {/* 08 LESSONS LEARNED */}
          <div className="space-y-3 p-6 bg-[#D52B32]/10 border border-[#D52B32]/30 rounded-sm">
            <div className="font-mono text-xs text-[#D52B32] uppercase tracking-widest font-semibold">
              08 / LESSONS LEARNED
            </div>
            <p className="text-base sm:text-lg text-[#F4F3EF] font-editorial italic">
              "{caseStudy.lessonsLearned}"
            </p>
          </div>

          {/* Direct GitHub Repository Link Box */}
          {project.githubUrl && (
            <div className="p-6 border border-white/15 rounded-sm bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-[#F4F3EF] font-bold">SOURCE CODE ARCHIVE</p>
                <p className="text-[#9FA8A3]">Inspect raw source code and commits directly on GitHub.</p>
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F4F3EF] text-[#08090A] font-bold rounded-sm hover:bg-[#D52B32] hover:text-[#F4F3EF] transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-[#D52B32]"
              >
                <span>OPEN REPOSITORY</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-[#08090A]/95 backdrop-blur-md px-6 sm:px-8 py-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
          <span className="text-[#9FA8A3]">PRESS ESC OR CLOSE TO EXIT</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-white/10 text-[#F4F3EF] font-bold rounded-sm hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-[#D52B32]"
          >
            CLOSE CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
};
