import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin, Terminal, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveName } from './InteractiveName';
import { LiquidGlassReveal } from './LiquidGlassReveal';

export const Hero: React.FC = () => {
  // Framer Motion staggered entrance animation variants
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

  const itemVariants: Variants = {
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

  const portraitVariants: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-[#08090A] bg-grain bg-tech-grid border-b border-white/5"
    >
      {/* Subtle Background Radial Glow Nodes */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[650px] h-[650px] bg-[#D52B32]/8 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Technical Metadata Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono tracking-widest text-[#929292] mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D52B32] animate-ping" />
          <span className="text-[#F4F3EF] font-semibold">{PERSONAL_INFO.year}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 glass-pill px-3 py-1 rounded-full text-[#9FA8A3]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D52B32]" />
          <span>{PERSONAL_INFO.role}</span>
        </div>
      </div>

      {/* Main Editorial Hero Grid */}
      <motion.div
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative my-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Editorial Content (7 cols) */}
        <div className="lg:col-span-7 z-10 space-y-6 md:space-y-7">
          
          {/* Eyebrow Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#D52B32] glass-pill px-3.5 py-1.5 rounded-sm">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 / SECURITY ENGINEERING</span>
          </motion.div>

          {/* Main Display Heading & Name */}
          <div className="space-y-2">
            <motion.p variants={itemVariants} className="font-mono text-xs sm:text-sm tracking-widest text-[#929292] uppercase">
              HELLO, I'M
            </motion.p>

            {/* Interactive Proximity Letter Wave Treatment for THANUSH */}
            <motion.div variants={itemVariants} className="py-1 w-full max-w-full lg:max-w-3xl overflow-visible">
              <h1 className="sr-only">THANUSH K B</h1>
              <InteractiveName
                name="THANUSH"
                className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-8xl"
              />
            </motion.div>

            <motion.p variants={itemVariants} className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-[#D52B32]">
              {PERSONAL_INFO.role}
            </motion.p>
          </div>

          {/* Bio Intro Description */}
          <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#929292] max-w-xl font-light leading-relaxed">
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Technical Domain Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 font-mono text-[11px] text-[#9FA8A3]">
            {['SYSTEM', 'NETWORK', 'LINUX', 'SECURITY'].map((domain) => (
              <span key={domain} className="glass-pill px-3 py-1 rounded-sm border border-white/5">
                {domain}
              </span>
            ))}
            <div className="hidden sm:flex items-center gap-1.5 glass-pill px-3 py-1 rounded-sm text-[#929292]">
              <MapPin className="w-3 h-3 text-[#D52B32]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-[#F4F3EF] text-[#08090A] font-semibold text-xs font-mono tracking-widest px-8 py-4 rounded-sm hover:bg-[#D52B32] hover:text-[#F4F3EF] transition-all shadow-xl shadow-[#D52B32]/10"
            >
              <span>EXPLORE WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/thanush26"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn inline-flex items-center gap-2.5 text-[#F4F3EF] font-mono text-xs tracking-widest px-7 py-4 rounded-sm"
            >
              <span>GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#9FA8A3]" />
            </a>
          </motion.div>

        </div>

        {/* Right Liquid Glass Portrait Visual (5 cols) */}
        <motion.div
          className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0"
          variants={portraitVariants}
        >
          {/* Subtle Crimson Ambient Geometric Accent Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-[#D52B32]/20 -z-10 flex items-center justify-center pointer-events-none">
            <div className="w-[82%] h-[82%] rounded-full border border-dashed border-white/10" />
          </div>

          {/* Liquid Glass Reveal Component Container */}
          <div className="w-full max-w-[340px] sm:max-w-[380px] h-[420px] sm:h-[480px]">
            <LiquidGlassReveal
              baseImageSrc="/images/hero/thanush-base.webp"
              glassImageSrc="/images/hero/thanush-glass.webp"
              alt="Thanush — Cybersecurity Engineer"
              className="w-full h-full"
            />
          </div>
        </motion.div>

      </motion.div>

      {/* Hero Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex justify-between items-end border-t border-white/5 font-mono text-[11px] text-[#5C5C5C]">
        <div>
          <span>SCROLL TO DISCOVER</span>
        </div>
        <div className="flex items-center gap-2">
          <span>01 / 06</span>
          <div className="w-12 h-[1px] bg-white/15">
            <div className="w-1/3 h-full bg-[#D52B32]" />
          </div>
        </div>
      </div>
    </section>
  );
};
