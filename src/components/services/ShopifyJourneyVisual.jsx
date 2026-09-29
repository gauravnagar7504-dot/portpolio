import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Eye, ShoppingCart, CheckCircle, ShieldCheck, Zap } from 'lucide-react';

export default function ShopifyJourneyVisual() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: '01. Storefront & Discovery',
      icon: Search,
      badge: 'Visual Hook',
      desc: 'Immediate brand credibility with sub-second page loads, dynamic hero merchandising, and intuitive category navigation.',
      frictionKiller: 'Eliminates bounce rates with instant above-the-fold value propositions and predictive search autocomplete.',
      metric: '0.4s First Contentful Paint',
    },
    {
      title: '02. Collection & Filter',
      icon: ShoppingBag,
      badge: 'Effortless Browsing',
      desc: 'Faceted filtering by size, color, collection, price, and instant inventory tags without clunky page reloads.',
      frictionKiller: 'Quick-add overlays and interactive product color swatches let shoppers evaluate options 3x faster.',
      metric: 'Instant Ajax Filtering',
    },
    {
      title: '03. High-Converting PDP',
      icon: Eye,
      badge: 'Desire & Proof',
      desc: 'Editorial product imagery, zoom galleries, clear variant selectors, trust badges, delivery estimators, and rich FAQ accordions.',
      frictionKiller: 'Sticky Buy Now CTA bars on mobile ensure visitors never have to scroll back up to complete a purchase.',
      metric: 'Sticky Mobile Add-to-Cart',
    },
    {
      title: '04. Slide-Out Cart Drawer',
      icon: ShoppingCart,
      badge: 'Average Order Value',
      desc: 'Interactive slide-out drawer cart with free shipping progress bars, complementary upsell recommendations, and instant quantity changes.',
      frictionKiller: 'Customers remain on the page without intrusive full-page redirects, maintaining shopping momentum.',
      metric: '+24% Average Order Value Boost',
    },
    {
      title: '05. Frictionless Checkout',
      icon: CheckCircle,
      badge: 'Final Conversion',
      desc: 'Shopify One-Page Checkout optimized with Shop Pay, Apple Pay, Google Pay, Razorpay, and Cash on Delivery (COD) verification.',
      frictionKiller: 'Autofill shipping addresses and single-tap checkout options reduce cart abandonment significantly.',
      metric: 'One-Page Accelerated Flow',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      {/* Step navigation tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none pb-2 mb-6">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-display font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-neon-blue/15 text-white border-neon-blue shadow-[0_0_20px_rgba(79,142,247,0.3)]'
                  : 'glass-card text-white/60 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-neon-blue' : 'text-white/40'} />
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="glass-card rounded-2xl p-6 sm:p-8 md:p-10 border border-white/12 relative overflow-hidden"
        >
          <div className="glow-orb w-60 h-60 bg-neon-blue/10 -top-20 -right-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-neon-blue">
                <Zap size={12} />
                <span>{steps[activeStep].badge}</span>
              </div>

              <h4 className="font-display font-700 text-2xl text-white">
                {steps[activeStep].title}
              </h4>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/8 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                  How This Kills Buyer Friction
                </span>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {steps[activeStep].frictionKiller}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="glass-card p-5 rounded-xl border border-white/10 text-center">
                <span className="text-xs text-white/50 block mb-1">Architecture Benchmark</span>
                <span className="font-display font-700 text-lg sm:text-xl text-white">
                  {steps[activeStep].metric}
                </span>
              </div>

              <div className="glass-card p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.02] flex items-center gap-3">
                <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
                <span className="text-xs text-white/75">
                  Native Shopify Liquid & Headless-ready code standard
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
