import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InteractiveName } from './InteractiveName';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-grain border-b border-white/5"
    >
      {/* Background Subtle Olive Radial Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#8a9a5b]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Top Labels */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono tracking-widest text-[#9a9996] mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#8a9a5b] animate-ping" />
          <span className="text-[#f4f3ef] font-semibold">{PERSONAL_INFO.year}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 border border-white/10 px-3 py-1 rounded-full bg-white/[0.02]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#8a9a5b]" />
          <span>{PERSONAL_INFO.role}</span>
        </div>
      </div>

      {/* Main Hero Grid Composition */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative my-auto">
        
        {/* HUGE Background Typography: "PORTFOLIO" */}
        <div className="absolute inset-0 flex items-center justify-start pointer-events-none select-none -z-10 overflow-hidden">
          <h1 className="font-display font-extrabold text-hero-giant text-white/[0.04] leading-none uppercase tracking-tighter whitespace-nowrap">
            PORTFOLIO
          </h1>
        </div>

        {/* Left Editorial Content (7 cols) */}
        <div className="lg:col-span-7 z-10 space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#8a9a5b] bg-[#8a9a5b]/10 border border-[#8a9a5b]/20 px-3 py-1.5 rounded-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WELCOME TO MY SPACE</span>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm tracking-widest text-[#9a9996] uppercase">
              HELLO, I'M
            </p>

            {/* Interactive Proximity Typography Treatment for THANUSH */}
            <div className="py-2 w-full max-w-full lg:max-w-3xl overflow-visible">
              <InteractiveName
                name="THANUSH"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
              />
            </div>

            <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-[#8a9a5b]">
              {PERSONAL_INFO.role}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#9a9996] max-w-xl font-light leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9a9996]">
            <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1.5 rounded bg-white/[0.02]">
              <MapPin className="w-3.5 h-3.5 text-[#8a9a5b]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2 border border-[#8a9a5b]/30 px-3 py-1.5 rounded bg-[#8a9a5b]/10 text-[#f4f3ef]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a9a5b]" />
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-3 bg-[#8a9a5b] text-[#0a0a0c] font-semibold text-xs font-mono tracking-widest px-7 py-4 rounded hover:bg-[#b2c28a] transition-all shadow-lg shadow-[#8a9a5b]/10"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border border-white/15 text-[#f4f3ef] font-mono text-xs tracking-widest px-7 py-4 rounded hover:border-[#8a9a5b] hover:text-[#8a9a5b] transition-all bg-white/[0.02]"
            >
              <span>LET'S CONNECT</span>
            </a>
          </div>
        </div>

        {/* Right Portrait Image Composition (5 cols) */}
        <div className="lg:col-span-5 relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* Subtle Olive Geometric / Circular Element Behind Portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-[#8a9a5b]/25 -z-10 animate-subtle-pulse flex items-center justify-center">
            <div className="w-[82%] h-[82%] rounded-full border border-dashed border-[#8a9a5b]/20" />
          </div>

          {/* Portrait Container */}
          <div className="relative group max-w-[340px] sm:max-w-[380px] rounded-sm overflow-hidden border border-white/15 bg-[#121216] shadow-2xl transition-all duration-500 hover:border-[#8a9a5b]/50">
            <img
              src="/thanush-portrait.jpg?v=2"
              alt="Thanush — Cybersecurity Engineer"
              className="w-full h-[420px] sm:h-[480px] object-cover object-center grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              loading="eager"
            />
            
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-[#9a9996] border-t border-white/10 pt-3 backdrop-blur-sm">
              <span className="text-[#f4f3ef] font-semibold">THANUSH</span>
              <span className="text-[#8a9a5b]">SEC_ENG // 2026</span>
            </div>
          </div>

        </div>

      </div>

      {/* Hero Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex justify-between items-end border-t border-white/5 font-mono text-[11px] text-[#686765]">
        <div>
          <span>SCROLL TO DISCOVER</span>
        </div>
        <div className="flex items-center gap-2">
          <span>01 / 06</span>
          <div className="w-12 h-[1px] bg-white/20">
            <div className="w-1/3 h-full bg-[#8a9a5b]" />
          </div>
        </div>
      </div>
    </section>
  );
};
