import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCardVisual } from './ProjectCardVisual';
import { ProjectDetailModal } from './ProjectDetailModal';
import type { Project } from '../types/portfolio';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-6 md:px-12 border-b border-white/5 bg-[#08090A] bg-grain overflow-hidden"
    >
      {/* Subtle Background Radial Glow Node */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#D52B32]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10"
        >
          <div>
            <div className="flex items-center gap-3 font-mono text-xs text-[#D52B32] tracking-widest uppercase mb-3">
              <span className="glass-pill px-3 py-1 rounded-sm">04 / SELECTED WORK</span>
              <span className="w-12 h-[1px] bg-[#D52B32]/30" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#F4F3EF] tracking-tight leading-none">
              SELECTED<br />WORK
            </h2>
          </div>
          <p className="font-editorial italic text-lg sm:text-xl text-[#929292] max-w-md">
            DevSecOps observability platforms, full-stack applications, and cybersecurity research tools.
          </p>
        </motion.div>

        {/* Projects Editorial Cards List */}
        <motion.div
          className="space-y-10 lg:space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative glass-card border border-white/10 bg-[#0F1012] rounded-sm p-6 sm:p-10 transition-all duration-500 hover:border-[#D52B32]/40 hover:bg-[#121418] overflow-hidden"
            >
              {/* Subtle Radial Glow Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D52B32]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                {/* Left Text Column (7 cols) */}
                <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
                  {/* Category & Number Header */}
                  <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-4">
                    <span className="text-[#D52B32] font-extrabold text-sm tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D52B32]" />
                      {project.number}
                    </span>
                    <span className="text-[#9FA8A3] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F4F3EF] group-hover:text-[#F4F3EF] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#929292] font-normal text-base leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass-pill font-mono text-xs px-3 py-1.5 rounded-sm border border-white/10 text-[#9FA8A3] group-hover:text-[#F4F3EF] group-hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      id={`project-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="group/btn inline-flex items-center gap-3 bg-[#F4F3EF] text-[#08090A] px-7 py-3.5 rounded-sm font-mono text-xs font-bold tracking-widest hover:bg-[#D52B32] hover:text-[#F4F3EF] transition-all shadow-xl shadow-[#D52B32]/5 focus-visible:ring-2 focus-visible:ring-[#D52B32]"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-btn inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm font-mono text-xs tracking-widest text-[#F4F3EF] hover:border-[#D52B32]/50 hover:text-[#F4F3EF] transition-all focus-visible:ring-2 focus-visible:ring-[#D52B32]"
                      >
                        <span>GITHUB REPO</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#9FA8A3]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Visual Schematic Column (5 cols) */}
                <div className="lg:col-span-5 order-1 lg:order-2">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer rounded-sm overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 group-hover:border-[#D52B32]/40"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    aria-label={`Open case study for ${project.title}`}
                  >
                    <ProjectCardVisual type={project.visualType} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
