import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';
import { categories } from '../data/categories';

export default function PortfolioPage() {
  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Dynamic Designing Portfolio & Live Interactive Creations',
    description: 'Explore bespoke, interactive website demos built for luxury hotels, beauty ateliers, medical clinics, and fitness studios.',
    url: 'https://www.dynamicdesigninng.com/portfolio',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categories.map((cat, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://www.dynamicdesigninng.com/category/${cat.id}`,
        name: cat.title,
      })),
    },
  };

  return (
    <div className="pt-24 pb-16">
      <SEOHead
        title="Web Design Portfolio & Live Interactive Demos | Dynamic Designing"
        description="Explore our curated portfolio of bespoke, high-performance website designs. Live interactive demos built for luxury hospitality, aesthetics, clinics, and modern fitness."
        canonicalUrl="https://www.dynamicdesigninng.com/portfolio"
        schemaData={portfolioSchema}
      />

      {/* Hero Intro */}
      <section className="py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/10 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6 border border-neon-blue/20"
          >
            <Layers size={14} className="text-neon-blue" />
            <span className="text-xs font-display font-semibold text-white/70 tracking-wide uppercase">
              Curated Masterpieces
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Selected Creations & <span className="text-gradient">Live Interactive Demos</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Every demo design is fully functional and interactive. Click below to experience custom animations, luxury booking engines, and mobile-optimized layouts in real time.
          </motion.p>
        </div>
      </section>

      {/* Main Portfolio Grid Component */}
      <Portfolio />

      {/* Industry Category Cards Section */}
      <section className="py-20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label mb-2 block">Industry Verticals</span>
            <h2 className="text-3xl sm:text-4xl font-display font-700 text-white mb-4">
              Explore By <span className="text-gradient">Specialized Industry</span>
            </h2>
            <p className="text-white/50 text-sm max-w-xl mx-auto">
              Deep dive into dedicated showcase galleries tailored to your business sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/category/${cat.id}`}
                className="group p-6 rounded-2xl glass-card border border-white/10 hover:border-neon-blue/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-neon-blue uppercase tracking-wider block mb-2">
                    {cat.label}
                  </span>
                  <h3 className="text-xl font-display font-700 text-white mb-2 group-hover:text-gradient transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-white/50 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/40 group-hover:text-neon-blue transition-colors">
                  <span>{cat.designs?.length || 0} Demos</span>
                  <span className="flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                    Explore Category <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <CTA />
    </div>
  );
}
