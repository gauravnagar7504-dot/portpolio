import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, Sparkles } from 'lucide-react';

const pricingData = {
  USD: { symbol: '$', rate: 1, suffix: '' },
  INR: { symbol: '₹', rate: 80.53, suffix: '' }, // Just a reference, using fixed prices
  EUR: { symbol: '€', rate: 0.93, suffix: '' },
  GBP: { symbol: '£', rate: 0.79, suffix: '' }
};

const plans = [
  {
    id: 'starter',
    name: 'Starter Website',
    description: 'Perfect for small businesses looking for a clean professional online presence.',
    features: [
      '1–3 Pages',
      'Mobile Responsive',
      'Modern UI Design',
      'WhatsApp Integration',
      'Basic SEO Setup',
      'Fast Loading',
    ],
    prices: { USD: '179', INR: '15,000', EUR: '169', GBP: '139' },
    isFeatured: false,
    buttonText: 'Get Started',
  },
  {
    id: 'business',
    name: 'Business Website',
    description: 'Best for growing businesses wanting a premium modern website experience.',
    features: [
      '5–8 Pages',
      'Premium UI/UX Design',
      'Mobile Responsive',
      'Contact & Inquiry Features',
      'SEO Optimization',
      'Speed Optimization',
      'Social Media Integration',
      'Modern Animations',
    ],
    prices: { USD: '349', INR: '30,000', EUR: '319', GBP: '269' },
    isFeatured: true,
    buttonText: 'Choose Plan',
  },
  {
    id: 'custom',
    name: 'Custom Premium Website',
    description: 'Advanced custom website solution for brands wanting a unique premium experience.',
    features: [
      'Fully Custom Design',
      'Advanced Animations',
      'Premium UI/UX',
      'Ecommerce / Custom Features',
      'Performance Optimization',
      'Modern Interactive Effects',
      'Priority Support',
    ],
    prices: { USD: '699', INR: '60,000', EUR: '649', GBP: '549' },
    isFeatured: false,
    buttonText: 'Let’s Connect',
    plus: true, // for $699+
  },
];

const detectDefaultCurrency = () => {
  try {
    const tz = typeof Intl !== 'undefined' ? (Intl.DateTimeFormat().resolvedOptions().timeZone || '') : '';
    const lang = typeof navigator !== 'undefined' ? (navigator.language || '') : '';
    if (tz.includes('Calcutta') || tz.includes('Kolkata') || tz.includes('Asia/Colombo') || lang === 'en-IN') {
      return 'INR';
    }
    if (tz.includes('London') || lang === 'en-GB') {
      return 'GBP';
    }
    if (tz.startsWith('Europe/')) {
      return 'EUR';
    }
    return 'USD';
  } catch {
    return 'USD';
  }
};

export default function Pricing() {
  const [currency, setCurrency] = useState(detectDefaultCurrency);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCurrencySelect = (code) => {
    setCurrency(code);
    setIsDropdownOpen(false);
  };

  return (
    <section id="pricing" className="relative py-16 md:py-32 overflow-hidden bg-[#050508]">
      {/* Floating particles/glow */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-purple/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header & Currency Switcher */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label inline-block mb-4"
            >
              PRICING PLANS
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title text-4xl md:text-5xl text-white mb-6"
            >
              Simple Pricing For <span className="text-gradient">Modern Websites</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg font-light"
            >
              Flexible website packages designed for businesses looking to build a premium online presence.
            </motion.p>
          </div>

          {/* Currency Switcher */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative self-start md:self-end z-30"
          >
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-label="Select pricing currency"
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen}
              className="flex items-center gap-2 glass-card px-5 py-3 rounded-full border border-white/10 hover:border-neon-blue/30 transition-all text-white font-medium shadow-[0_0_15px_rgba(79,142,247,0.05)]"
            >
              <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-neon-blue">
                {pricingData[currency].symbol}
              </span>
              <span>{currency}</span>
              <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  role="listbox"
                  aria-label="Available currencies"
                  className="absolute left-0 md:left-auto md:right-0 top-full mt-2 w-48 bg-[#121218] border border-white/10 rounded-2xl p-2 z-50 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                  {Object.keys(pricingData).map((code) => (
                    <button
                      key={code}
                      role="option"
                      aria-selected={currency === code}
                      onClick={() => handleCurrencySelect(code)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                        currency === code ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        currency === code ? 'bg-neon-blue text-black' : 'bg-white/5 text-white/50'
                      }`}>
                        {pricingData[code].symbol}
                      </span>
                      {code}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative rounded-3xl transition-all duration-500 group ${
                plan.isFeatured 
                  ? 'p-[1px] bg-gradient-to-b from-neon-blue to-neon-purple shadow-[0_0_40px_rgba(79,142,247,0.15)] hover:shadow-[0_0_60px_rgba(79,142,247,0.25)] lg:-translate-y-4' 
                  : 'glass-card border border-white/5 hover:border-white/10 mt-0 lg:mt-4'
              }`}
            >
              {/* Featured Glow Background */}
              {plan.isFeatured && (
                <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/20 to-neon-purple/20 blur-xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              )}

              <div className={`relative h-full flex flex-col p-8 md:p-10 rounded-3xl ${plan.isFeatured ? 'bg-[#0a0a0f]' : 'bg-transparent'}`}>
                {plan.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-neon-blue/20">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-white/70 text-sm mb-8 leading-relaxed min-h-[60px]">{plan.description}</p>
                
                <div className="mb-8 flex items-baseline gap-1">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currency}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="text-4xl md:text-5xl font-display font-bold text-white"
                    >
                      {pricingData[currency].symbol}{plan.prices[currency]}{plan.plus && '+'}
                    </motion.span>
                  </AnimatePresence>
                </div>

                <div className="h-[1px] w-full bg-white/5 mb-8" />

                <ul className="flex-1 flex flex-col gap-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                      <Check className="w-5 h-5 text-neon-blue shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-4 rounded-full font-semibold transition-all duration-300 text-sm uppercase tracking-wider ${
                  plan.isFeatured
                    ? 'bg-white text-black hover:bg-neon-blue hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(79,142,247,0.4)]'
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}>
                  {plan.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-white/70 text-sm max-w-2xl mx-auto font-light"
        >
          Every project is designed with modern UI/UX principles, responsive performance, and business-focused design strategy.
        </motion.p>
      </div>
    </section>
  );
}
