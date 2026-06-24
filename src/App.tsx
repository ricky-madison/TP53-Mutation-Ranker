import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './sections/HeroSection';
import PlatformSection from './sections/PlatformSection';
import MutationSearchSection from './sections/MutationSearchSection';
import AnalysisSection from './sections/AnalysisSection';
import PipelineSection from './sections/PipelineSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050B14] text-[#F8FAFC] overflow-x-hidden">
      {/* Global background grid */}
      <div className="fixed inset-0 grid-scan opacity-20 pointer-events-none" style={{ zIndex: 0 }} />
      
      {/* Main content */}
      <main className="relative" style={{ zIndex: 1 }}>
        <HeroSection />
        <PlatformSection />
        <MutationSearchSection />
        <AnalysisSection />
        <PipelineSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
