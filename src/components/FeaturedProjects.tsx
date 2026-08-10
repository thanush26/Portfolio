import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ProjectDetailModal } from './ProjectDetailModal';
import type { Project } from '../types/portfolio';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-b border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase mb-3">
              <span>03 / PORTFOLIO</span>
              <span className="w-12 h-[1px] bg-[#8a9a5b]/30" />
            </div>
            <h2 className="font-display text-5xl sm:text-7xl font-extrabold text-[#f4f3ef] tracking-tight leading-none">
              SELECTED<br />WORK
            </h2>
          </div>
          <p className="font-editorial italic text-lg text-[#9a9996] max-w-md">
            DevSecOps observability platforms, full-stack applications, and cybersecurity research tools.
          </p>
        </div>

        {/* Projects Editorial Cards List */}
        <div className="space-y-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative border border-white/10 bg-[#121216] rounded-sm p-6 sm:p-10 transition-all duration-500 hover:border-[#8a9a5b]/40 hover:bg-[#16161c]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Text Column (7 cols) */}
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                  
                  {/* Category & Number Header */}
                  <div className="flex items-center justify-between font-mono text-xs border-b border-white/5 pb-4">
                    <span className="text-[#8a9a5b] font-bold tracking-widest">
                      {project.number}
                    </span>
                    <span className="text-[#9a9996] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl sm:text-4xl font-bold text-[#f4f3ef] group-hover:text-[#8a9a5b] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#9a9996] font-light text-sm sm:text-base leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1 rounded-sm border border-white/10 bg-white/[0.02] text-[#f4f3ef]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-3 bg-[#8a9a5b] text-[#0a0a0c] px-6 py-3.5 rounded-sm font-mono text-xs font-bold tracking-widest hover:bg-[#b2c28a] transition-all"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-white/15 px-6 py-3.5 rounded-sm font-mono text-xs tracking-widest text-[#f4f3ef] hover:border-[#8a9a5b] hover:text-[#8a9a5b] transition-all bg-white/[0.02]"
                      >
                        <span>GITHUB REPO</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

                {/* Right Visual Schematic Column (5 cols) */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer rounded overflow-hidden shadow-xl"
                  >
                    <ProjectCardVisual type={project.visualType} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
