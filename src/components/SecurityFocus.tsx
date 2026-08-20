import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SECURITY_FOCUS_AREAS } from '../data/portfolioData';
import { ShieldAlert, Lock, Code2, Cpu, ArrowUpRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#D52B32]" />,
  Lock: <Lock className="w-5 h-5 text-[#D52B32]" />,
  Code2: <Code2 className="w-5 h-5 text-[#D52B32]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#D52B32]" />,
};

export const SecurityFocus: React.FC = () => {
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
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="security-focus"
      className="relative py-24 sm:py-32 px-6 md:px-12 border-b border-white/5 bg-[#08090A] bg-grain overflow-hidden"
    >
      {/* Background Radial Glow Accent Node */}
      <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-[#D52B32]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

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
              <span className="glass-pill px-3 py-1 rounded-sm">03 / SECURITY FOCUS</span>
              <span className="w-12 h-[1px] bg-[#D52B32]/30" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-[#F4F3EF] tracking-tight">
              WHAT I DO
            </h2>
          </div>
          <p className="font-editorial italic text-lg sm:text-xl text-[#929292] max-w-md">
            Four pillars of security engineering & defensive software architecture.
          </p>
        </motion.div>

        {/* 4 Refined Liquid Glass Panels Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SECURITY_FOCUS_AREAS.map((block) => (
            <motion.div
              key={block.id}
              variants={cardVariants}
              className="group relative glass-card p-8 sm:p-10 rounded-sm border border-white/10 bg-[#0F1012] transition-all duration-300 hover:border-[#D52B32]/40 hover:bg-[#121418] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle Radial Glow Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D52B32]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Card Top Bar: Number & Icon & Hover Arrow */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 relative z-10">
                  <span className="font-mono text-3xl font-extrabold text-[#D52B32]/40 group-hover:text-[#D52B32] transition-colors">
                    {block.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded bg-[#D52B32]/10 border border-[#D52B32]/20 group-hover:border-[#D52B32]/50 group-hover:bg-[#D52B32]/20 transition-all">
                      {iconMap[block.iconName]}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#929292] group-hover:text-[#F4F3EF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>

                {/* Card Heading & Subtitle */}
                <div className="relative z-10 space-y-2 mb-4">
                  <h3 className="font-display text-2xl font-bold text-[#F4F3EF] group-hover:text-[#F4F3EF] transition-colors">
                    {block.title}
                  </h3>
                  <p className="font-editorial italic text-sm text-[#D52B32]">
                    {block.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[#929292] font-light text-sm sm:text-base leading-relaxed mb-8 relative z-10">
                  {block.description}
                </p>
              </div>

              {/* Highlights Pill Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 relative z-10">
                {block.highlights.map((tag) => (
                  <span
                    key={tag}
                    className="glass-pill font-mono text-[11px] px-3 py-1 rounded-sm text-[#9FA8A3] group-hover:text-[#F4F3EF] group-hover:border-white/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Crimson Hover Left Accent Sidebar */}
              <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#D52B32] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
