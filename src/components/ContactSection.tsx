import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const contactLinks = [
    { label: 'EMAIL', value: PERSONAL_INFO.socials.email, href: `mailto:${PERSONAL_INFO.socials.email}`, icon: Mail },
    { label: 'LINKEDIN', value: PERSONAL_INFO.socials.linkedin.replace('https://', ''), href: PERSONAL_INFO.socials.linkedin, icon: LinkedinIcon },
    { label: 'GITHUB', value: PERSONAL_INFO.socials.github.replace('https://', ''), href: PERSONAL_INFO.socials.github, icon: GithubIcon },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 border-b border-white/5 bg-grain relative overflow-hidden">
      
      {/* Background Subtle Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8a9a5b]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs text-[#8a9a5b] tracking-widest uppercase">
          <span>08 / CONTACT</span>
          <span className="w-12 h-[1px] bg-[#8a9a5b]/30" />
        </div>

        {/* Dramatic Huge Typography */}
        <div className="space-y-2">
          <h2 className="font-display text-5xl sm:text-7xl lg:text-9xl font-extrabold text-[#f4f3ef] tracking-tight leading-[0.9] uppercase">
            LET'S BUILD<br />
            <span className="text-[#8a9a5b] font-editorial italic font-normal lowercase">secure</span><br />
            THINGS.
          </h2>
        </div>

        {/* Supporting Text & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          
          <div className="lg:col-span-6 space-y-6">
            <p className="text-lg sm:text-xl text-[#9a9996] font-light leading-relaxed">
              Open to meaningful projects, cybersecurity opportunities, collaborations and conversations about technology.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="group inline-flex items-center gap-3 bg-[#8a9a5b] text-[#0a0a0c] font-mono text-xs font-bold tracking-widest px-8 py-4 rounded hover:bg-[#b2c28a] transition-all shadow-xl shadow-[#8a9a5b]/10"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 border border-white/15 text-[#f4f3ef] font-mono text-xs tracking-widest px-8 py-4 rounded hover:border-[#8a9a5b] hover:text-[#8a9a5b] transition-all bg-white/[0.02]"
              >
                <span>VIEW MY WORK →</span>
              </a>
            </div>
          </div>

          {/* Contact Fields Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-xs text-[#9a9996] tracking-widest uppercase mb-2">
              DIRECT REACH & PROFILES
            </div>

            {contactLinks.map((item) => {
              const IconComp = item.icon;
              const isCopied = copiedField === item.label;
              return (
                <div
                  key={item.label}
                  className="group p-5 border border-white/10 bg-[#121216] rounded-sm flex items-center justify-between transition-all hover:border-[#8a9a5b]/40 hover:bg-[#16161c]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded bg-white/[0.03] text-[#8a9a5b] border border-white/5">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#8a9a5b] uppercase tracking-wider block">
                        {item.label}
                      </span>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-[#f4f3ef] hover:text-[#8a9a5b] transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(item.value, item.label)}
                    className="p-2 text-[#9a9996] hover:text-[#f4f3ef] hover:bg-white/5 rounded transition-colors"
                    title={`Copy ${item.label}`}
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
