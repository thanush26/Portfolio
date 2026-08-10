import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#security-focus' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left Branding */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#f4f3ef] hover:text-[#8a9a5b] transition-colors"
        >
          <div className="w-6 h-6 rounded border border-[#8a9a5b]/40 flex items-center justify-center bg-[#8a9a5b]/10 group-hover:border-[#8a9a5b] transition-colors">
            <Shield className="w-3 h-3 text-[#8a9a5b]" />
          </div>
          <span className="font-bold tracking-widest text-xs">{PERSONAL_INFO.name}</span>
        </a>

        {/* Right Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-[#8a9a5b] font-semibold' : 'text-[#9a9996] hover:text-[#f4f3ef]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#8a9a5b] animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#f4f3ef] hover:text-[#8a9a5b] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-[#0a0a0c]/95 backdrop-blur-xl border-b border-white/10 z-30 flex flex-col justify-between p-8 animate-fadeIn">
          <div className="flex flex-col gap-6 font-display text-2xl tracking-widest">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-3 border-b border-white/5 text-[#f4f3ef] hover:text-[#8a9a5b] transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-mono text-xs text-[#8a9a5b]">0{idx + 1}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-2 font-mono text-xs text-[#9a9996]">
            <p className="text-[#8a9a5b] font-semibold">{PERSONAL_INFO.role}</p>
            <p>{PERSONAL_INFO.location} • {PERSONAL_INFO.status}</p>
          </div>
        </div>
      )}
    </header>
  );
};
