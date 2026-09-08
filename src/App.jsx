import React, { useState, useEffect, Suspense, lazy } from 'react';
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
import { categories } from './data/categories';

const CategoryDetail = lazy(() => import('./components/CategoryDetail'));

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#category/')) {
        const catId = hash.replace('#category/', '');
        const found = categories.find((c) => c.id === catId);
        if (found) {
          setSelectedCategory(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (hash && !hash.startsWith('#category/')) {
        setSelectedCategory(null);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    window.location.hash = `category/${category.id}`;
  };

  const handleBackToPortfolio = () => {
    setSelectedCategory(null);
    window.location.hash = 'portfolio';
    setTimeout(() => {
      const el = document.getElementById('portfolio');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleNavReset = () => {
    setSelectedCategory(null);
  };

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

      <Navbar onNavClick={handleNavReset} />

      <main className="relative z-10">
        {selectedCategory ? (
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 rounded-full border-2 border-neon-blue border-t-transparent animate-spin" /></div>}>
            <CategoryDetail
              category={selectedCategory}
              onBack={handleBackToPortfolio}
              onSelectCategory={handleSelectCategory}
            />
          </Suspense>
        ) : (
          <>
            <Hero />
            <About />
            <Services />
            <BusinessBenefits />
            <Portfolio onSelectCategory={handleSelectCategory} />
            <TechArsenal />
            <Process />
            <Pricing />
            <CTA />
          </>
        )}
      </main>

      <Footer onNavClick={handleNavReset} />
    </div>
  );
}
