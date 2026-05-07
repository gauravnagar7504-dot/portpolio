import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BusinessBenefits from './components/BusinessBenefits';
import Portfolio from './components/Portfolio';
import TechArsenal from './components/TechArsenal';
import Process from './components/Process';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll with Lenis (optional polyfill for older browsers)
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050508] text-white overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Global background gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,142,247,0.08) 0%, transparent 60%)',
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <BusinessBenefits />
        <Portfolio />
        <TechArsenal />
        <Process />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
