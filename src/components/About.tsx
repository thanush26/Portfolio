import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ShieldCheck, Code2, Cpu } from 'lucide-react';

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
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
      id="about"
      className="relative py-24 sm:py-32 px-6 md:px-12 border-b border-white/5 bg-[#08090A] bg-grain overflow-hidden"
    >
      {/* Background Ambient Radial Glow Node */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D52B32]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 font-mono text-xs text-[#D52B32] tracking-widest uppercase mb-12"
        >
          <span className="glass-pill px-3 py-1 rounded-sm">02 / ABOUT</span>
          <span className="w-12 h-[1px] bg-[#D52B32]/30" />
        </motion.div>

        {/* Main 12-Column Editorial Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Left Column: Title & Telemetry Cards (5 cols) - Sticky anchored on desktop for balanced vertical composition */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4F3EF] tracking-tight leading-none">
                {PERSONAL_INFO.aboutTitle}
              </h2>
              <p className="font-editorial italic text-xl sm:text-2xl text-[#D52B32]">
                Engineering security from the foundation up.
              </p>
            </motion.div>

            {/* Technical Telemetry Glass Badges */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="glass-card p-4.5 sm:p-5 rounded-sm border border-white/10 flex items-start gap-3.5 group hover:border-[#D52B32]/40 transition-colors">
                <div className="p-2.5 rounded bg-[#D52B32]/10 text-[#D52B32] group-hover:bg-[#D52B32] group-hover:text-[#F4F3EF] transition-colors shrink-0">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[#F4F3EF] font-semibold text-xs sm:text-sm">SEC_RESEARCH</span>
                  <span className="text-[11px] text-[#9FA8A3] tracking-wide">VULN_AUDITING</span>
                </div>
              </div>

              <div className="glass-card p-4.5 sm:p-5 rounded-sm border border-white/10 flex items-start gap-3.5 group hover:border-[#D52B32]/40 transition-colors">
                <div className="p-2.5 rounded bg-[#D52B32]/10 text-[#D52B32] group-hover:bg-[#D52B32] group-hover:text-[#F4F3EF] transition-colors shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[#F4F3EF] font-semibold text-xs sm:text-sm">DEV_FOCUSED</span>
                  <span className="text-[11px] text-[#9FA8A3] tracking-wide">SECURE_BACKEND</span>
                </div>
              </div>

              <div className="glass-card p-4.5 sm:p-5 rounded-sm border border-white/10 flex items-start gap-3.5 group hover:border-[#D52B32]/40 transition-colors">
                <div className="p-2.5 rounded bg-[#D52B32]/10 text-[#D52B32] group-hover:bg-[#D52B32] group-hover:text-[#F4F3EF] transition-colors shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[#F4F3EF] font-semibold text-xs sm:text-sm">DEFENSIVE_ARCH</span>
                  <span className="text-[11px] text-[#9FA8A3] tracking-wide">ZERO_TRUST</span>
                </div>
              </div>

              <div className="glass-card p-4.5 sm:p-5 rounded-sm border border-white/10 flex items-start gap-3.5 group hover:border-[#D52B32]/40 transition-colors">
                <div className="p-2.5 rounded bg-[#D52B32]/10 text-[#D52B32] group-hover:bg-[#D52B32] group-hover:text-[#F4F3EF] transition-colors shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[#F4F3EF] font-semibold text-xs sm:text-sm">AUTOMATION</span>
                  <span className="text-[11px] text-[#9FA8A3] tracking-wide">DEVSECOPS_PIPELINES</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Bio & Core Interest Cloud (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-6 text-[#929292] font-normal leading-relaxed text-base sm:text-lg">
              {PERSONAL_INFO.aboutBio.map((paragraph, index) => (
                <p key={index} className="hover:text-[#F4F3EF]/90 transition-colors">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Core Interest Tag Cloud */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#F4F3EF] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D52B32]" />
                CORE TECHNICAL INTERESTS & FOCUS
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="glass-pill font-mono text-xs px-3.5 py-1.5 rounded-sm border border-white/10 text-[#F4F3EF] hover:border-[#D52B32]/50 hover:text-[#D52B32] transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
