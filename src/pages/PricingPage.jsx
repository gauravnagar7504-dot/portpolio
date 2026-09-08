import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Pricing from '../components/Pricing';
import BusinessBenefits from '../components/BusinessBenefits';
import CTA from '../components/CTA';

export default function PricingPage() {
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Website Design & Development Pricing | Dynamic Designing',
    description: 'Transparent investment packages for custom website design, UI/UX engineering, and high-performance digital solutions in India and worldwide.',
    url: 'https://www.dynamicdesigninng.com/pricing',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter Experience',
        priceCurrency: 'INR',
        description: 'Single high-conversion landing page with luxury visual styling, mobile responsiveness, and foundational SEO.',
      },
      {
        '@type': 'Offer',
        name: 'Signature Bespoke',
        priceCurrency: 'INR',
        description: 'Multi-page digital flagship with custom micro-interactions, speed optimization, and CMS ready.',
      },
      {
        '@type': 'Offer',
        name: 'Enterprise Atelier',
        priceCurrency: 'INR',
        description: 'Full-scale custom digital experience with bespoke reservation/inquiry workflows, priority support, and complete SEO mastery.',
      },
    ],
  };

  return (
    <div className="pt-16 pb-16">
      <SEOHead
        title="Website Design Pricing & Packages | Dynamic Designing"
        description="Clear, transparent pricing packages for bespoke website design, high-speed engineering, and luxury UI/UX development. View starter, signature, and enterprise options."
        canonicalUrl="https://www.dynamicdesigninng.com/pricing"
        schemaData={pricingSchema}
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
            <Sparkles size={14} className="text-neon-blue" />
            <span className="text-xs font-display font-semibold text-white/70 tracking-wide uppercase">
              Transparent Investments
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Predictable Pricing, <span className="text-gradient">Uncompromising Quality</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            No hidden charges, no surprise fees. Straightforward, value-driven investment packages tailored to the scale and vision of your business.
          </motion.p>
        </div>
      </section>

      {/* Pricing Component */}
      <Pricing />

      {/* ROI & Business Benefits */}
      <BusinessBenefits />

      {/* Consultation CTA */}
      <CTA />
    </div>
  );
}
