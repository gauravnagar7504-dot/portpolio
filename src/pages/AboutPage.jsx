import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import About from '../components/About';
import TechArsenal from '../components/TechArsenal';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Dynamic Designing & Founder Gaurav Nagar',
    description: 'Learn about Dynamic Designing, a luxury web design and development studio founded by Gaurav Nagar in Kota, Rajasthan, serving elite brands worldwide.',
    url: 'https://www.dynamicdesigninng.com/about',
    mainEntity: {
      '@type': 'Person',
      name: 'Gaurav Nagar',
      jobTitle: 'Lead Designer & Full-Stack Developer',
      knowsAbout: ['Luxury UI/UX', 'React', 'Tailwind CSS', 'High-Speed Web Engineering', 'SEO Optimization'],
    },
  };

  return (
    <div className="pt-16 pb-16">
      <SEOHead
        title="About Dynamic Designing | Luxury Web Design Studio"
        description="Learn about Dynamic Designing, a luxury web design and development studio founded by Gaurav Nagar in Kota, Rajasthan, crafting elite digital experiences for brands worldwide."
        canonicalUrl="https://www.dynamicdesigninng.com/about"
        schemaData={aboutSchema}
      />

      {/* Hero Banner */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 text-center relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-neon-blue/10 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6 border border-neon-blue/20"
          >
            <Compass size={14} className="text-neon-blue" />
            <span className="text-xs font-display font-semibold text-white/70 tracking-wide uppercase">
              Our Ethos & Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Obsessed with <span className="text-gradient">Design Perfection</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We bridge the chasm between evocative artistic luxury and ruthless technical performance. Every website we build is crafted to out-design and out-rank your competition.
          </motion.p>
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Tech Arsenal */}
      <TechArsenal />

      {/* Workflow Process */}
      <Process />

      {/* Consultation CTA */}
      <CTA />
    </div>
  );
}
