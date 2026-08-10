import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SecurityFocus } from './components/SecurityFocus';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TechStack } from './components/TechStack';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'security-focus', 'projects', 'process', 'tech-stack', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f3ef] relative selection:bg-[#8a9a5b]/30 selection:text-[#f4f3ef]">
      {/* Custom Desktop Mouse Cursor */}
      <CustomCursor />

      {/* Floating Header Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <SecurityFocus />
        <FeaturedProjects />
        <ProcessTimeline />
        <TechStack />
        <CurrentlyExploring />
        <ResumeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
