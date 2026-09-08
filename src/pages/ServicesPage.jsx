import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Services from '../components/Services';
import BusinessBenefits from '../components/BusinessBenefits';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function ServicesPage() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design and Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design & Engineering Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Web Design & UI/UX',
            description: 'Custom, high-conversion interfaces tailored to elite hospitality, aesthetics, and enterprise brands.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ultra-Fast Frontend Engineering',
            description: 'Lightning-speed websites built on modern frameworks with 95+ PageSpeed scores.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical SEO & Performance Optimization',
            description: 'Comprehensive schema markup, Core Web Vitals optimization, and crawlability engineering.',
          },
        },
      ],
    },
  };

  return (
    <div className="pt-24 pb-16">
      <SEOHead
        title="Web Design & Development Services | Dynamic Designing"
        description="Explore luxury web design, bespoke UI/UX development, high-speed frontend engineering, and technical SEO services tailored for ambitious brands."
        canonicalUrl="https://www.dynamicdesigninng.com/services"
        schemaData={servicesSchema}
      />

      {/* Services Hero Banner */}
      <section className="py-16 sm:py-24 text-center relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-neon-blue/10 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6 border border-neon-blue/20"
          >
            <Sparkles size={14} className="text-neon-blue" />
            <span className="text-xs font-display font-semibold text-white/70 tracking-wide uppercase">
              Full-Spectrum Engineering
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Bespoke Web Design & <span className="text-gradient">Digital Engineering</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We don't just build websites — we construct high-speed digital sales assets that build immense authority, captivate high-income clients, and convert attention into revenue.
          </motion.p>
        </div>
      </section>

      {/* Core Services Component */}
      <Services />

      {/* Business Benefits Component */}
      <BusinessBenefits />

      {/* 4-Step Process Component */}
      <Process />

      {/* Consultation CTA */}
      <CTA />
    </div>
  );
}
