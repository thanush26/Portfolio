import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SKILLS', href: '#security-focus' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="py-12 px-6 md:px-12 bg-[#070709] border-t border-white/10 font-mono text-xs text-[#9a9996]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Branding */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#f4f3ef] font-display font-bold text-base tracking-widest">
            <Shield className="w-4 h-4 text-[#8a9a5b]" />
            <span>{PERSONAL_INFO.name}</span>
          </div>
          <p className="text-[#8a9a5b] text-[11px] uppercase tracking-widest">
            {PERSONAL_INFO.role}
          </p>
          <p className="text-[10px] text-[#686765] pt-1">
            © {PERSONAL_INFO.year} {PERSONAL_INFO.name}. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Center Nav Links */}
        <nav className="flex flex-wrap items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-[#8a9a5b] transition-colors tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 border border-white/15 px-4 py-2.5 rounded bg-white/[0.02] hover:border-[#8a9a5b] hover:text-[#8a9a5b] transition-all"
            aria-label="Scroll Back To Top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
