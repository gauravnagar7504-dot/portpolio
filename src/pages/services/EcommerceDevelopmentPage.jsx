import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import RelatedServices from '../../components/RelatedServices';
import ServiceEnquiryForm from '../../components/ServiceEnquiryForm';
import aureliaImg from '../../assets/images/aurelia_beauty.webp';

export default function EcommerceDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-commerce Website Development Services',
    serviceType: 'E-commerce Web Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    description: 'We engineer complete online shopping experiences built around smooth customer journeys, robust order infrastructure, and scalable commerce architecture.',
  };

  const capabilities = [
    { title: 'Product Catalogue Architecture', desc: 'Normalized taxonomies, category filters, faceted search, and SKU organization for thousands of items.' },
    { title: 'Product Variations & Bundling', desc: 'Complex size/color matrices, bundled kits, tiered bulk pricing, and conditional add-on options.' },
    { title: 'Inventory Management', desc: 'Real-time stock tracking, low-inventory notifications, and multi-location warehouse synchronization.' },
    { title: 'Payment Gateway Integration', desc: 'Razorpay, Stripe, Cashfree, PayPal, Apple Pay, Google Pay, Netbanking, and UPI auto-routing.' },
    { title: 'Automated Shipping & Tracking', desc: 'Live carrier rate calculation, Shiprocket/Delhivery integration, and automated tracking SMS.' },
    { title: 'Dynamic Coupon & Promo Engines', desc: 'BOGO discounts, threshold vouchers, first-order promotions, and gift card redemption.' },
    { title: 'Customer Portals & Reorders', desc: 'Saved payment cards, 1-click reordering, order history downloads, and returns management.' },
    { title: 'Order & Warehouse Management', desc: 'Centralized admin order fulfillment pipeline, automated invoices, and packing slip generators.' },
    { title: 'COD Support & Anti-Fraud OTP', desc: 'Cash on delivery enablement with automated phone verification to minimize return-to-origin (RTO).' },
    { title: 'E-commerce Analytics & Tracking', desc: 'Enhanced e-commerce telemetry, drop-off step funnel analytics, and ROAS event tracking.' },
    { title: 'WhatsApp & Email Automation', desc: 'Automated order confirmations, abandoned cart recovery nudges, and delivery notifications.' },
    { title: 'Multi-Platform Mastery', desc: 'Deep engineering experience across Shopify, WooCommerce, and custom headless commerce stacks.' },
  ];

  const journeySteps = [
    { step: '01', title: 'Discovery', desc: 'Fast, search-indexed storefront, dynamic hero promos, and predictive catalog search.' },
    { step: '02', title: 'Product View', desc: 'High-res imagery, transparent pricing, variant pills, sizing charts, and trust badges.' },
    { step: '03', title: 'Cart Interaction', desc: 'Slide-out cart drawer, free-shipping threshold bar, and complementary product add-ons.' },
    { step: '04', title: 'Checkout', desc: 'Frictionless single-page checkout with address autocomplete and guest checkout support.' },
    { step: '05', title: 'Secure Payment', desc: 'Bank-grade encrypted gateway processing via UPI, credit/debit cards, netbanking, or COD.' },
    { step: '06', title: 'Order Confirmation', desc: 'Instant order summary screen, automated email receipt, and real-time WhatsApp update.' },
    { step: '07', title: 'Post-Purchase', desc: 'Live tracking links, automated delivery updates, and automated review collection requests.' },
  ];

  const platforms = [
    {
      name: 'Shopify / Shopify Plus',
      tag: 'Best for Rapid D2C Growth',
      desc: 'Hosted, zero-server-maintenance e-commerce powerhouse with industry-leading checkout speeds (Shop Pay) and bank-grade security.',
      bestFor: 'Direct-to-consumer fashion, cosmetics, electronics, lifestyle brands, and fast-scaling online retailers.',
      highlights: ['PCI DSS Level 1 certified', 'Shop Pay checkout', 'Global CDN included', 'Minimal technical maintenance'],
    },
    {
      name: 'WooCommerce (WordPress)',
      tag: 'Best for Maximum Custom Control',
      desc: 'Open-source, self-hosted commerce platform providing 100% control over database ownership, custom plugins, and zero platform transaction fees.',
      bestFor: 'Content-heavy brands, businesses needing proprietary checkout logic, and operations wanting full server sovereignty.',
      highlights: ['Zero transaction commission', 'Full database control', 'Deep content/blog synergy', 'Infinite customizability'],
    },
    {
      name: 'Custom Headless Commerce',
      tag: 'Best for Enterprise Scale & Apps',
      desc: 'Decoupled frontend built on React/Next.js paired with an API-first commerce engine (Shopify Storefront API, Medusa, or custom Node backend).',
      bestFor: 'Enterprise brands demanding sub-300ms page transitions, custom mobile apps, and complex multi-region architectures.',
      highlights: ['Ultra-fast sub-second speeds', 'Total frontend UI freedom', 'Omnichannel API delivery', 'Future-proof scalability'],
    },
  ];

  const faqs = [
    {
      q: 'Which e-commerce platform should I choose: Shopify or WooCommerce?',
      a: 'The choice depends on your business priorities. Choose Shopify if you want zero server management, bank-grade hosting, high checkout conversion, and automated updates. Choose WooCommerce if you need complete ownership over your database, zero monthly platform commission fees, or custom operational logic that Shopify restrictions prohibit. We provide objective guidance based on your catalog and budget.',
    },
    {
      q: 'How do you handle Cash on Delivery (COD) and reduce fake orders (RTO)?',
      a: 'We implement automated phone verification (via WhatsApp or SMS OTP) before a COD order is confirmed. We also configure algorithms that flag risky addresses or restrict COD for high-ticket SKUs, drastically lowering Return-to-Origin (RTO) shipping losses.',
    },
    {
      q: 'Can my online store support international currencies and shipping?',
      a: 'Yes. We configure multi-currency price switching with live exchange rate updates, geolocation-based currency detection, international payment gateways (Stripe, PayPal), and automated customs/duties calculation for cross-border shipping.',
    },
    {
      q: 'How secure is the checkout process for customer credit cards?',
      a: 'Every e-commerce build we deliver is 100% PCI DSS compliant. Sensitive customer payment credentials never touch your server; transactions are handled securely through tokenized, 256-bit encrypted gateway APIs (Razorpay, Stripe, Shop Pay).',
    },
    {
      q: 'Can our store handle flash sales with thousands of concurrent visitors?',
      a: 'Yes. By utilizing edge caching, optimized database queries, automated CDN asset delivery, and scalable infrastructure, we ensure your store maintains sub-second responsiveness even during high-traffic promotional spikes.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="E-commerce Website Development Services | Dynamic Designing"
        description="We engineer complete online shopping experiences built around smooth customer journeys, robust order infrastructure, and scalable commerce architecture."
        canonicalUrl="https://www.dynamicdesigninng.com/services/ecommerce-development"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-0 left-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBreadcrumbs serviceName="E-commerce Development" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
                <ShoppingBag size={14} className="text-neon-blue" />
                <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                  Service 05 · Complete Commerce
                </span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                E-commerce Experiences Built to{' '}
                <span className="text-gradient">Sell and Scale</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                We develop complete online shopping experiences based on your business requirements, product variations, inventory logistics, and growth plans.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#enquiry" className="btn-primary">
                  Discuss E-commerce Project
                </a>
                <a href="#platforms" className="btn-outline">
                  Compare Platforms
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-white/60">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Multi-Currency & UPI Ready</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Automated Shipping Sync</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> COD Anti-Fraud Verification</span>
              </div>
            </motion.div>

            {/* Hero Visual: Large E-Commerce Ecosystem Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="glass-card rounded-2xl p-4 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative space-y-3">
                {/* Ecosystem Top Controls */}
                <div className="flex items-center justify-between text-xs text-white/60 pb-2 border-b border-white/10">
                  <span className="font-mono text-neon-blue">E-Commerce Ecosystem</span>
                  <span className="text-emerald-400 text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Live Payment Telemetry
                  </span>
                </div>

                {/* Main Product/Storefront Visual */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#07090f] group">
                  <img
                    src={aureliaImg}
                    alt="E-Commerce Storefront Architecture"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-display font-bold text-white">Full Store Ecosystem</p>
                      <p className="text-[10px] text-white/60">Cart · Inventory · Gateways</p>
                    </div>
                    <span className="text-xs text-emerald-400 font-mono font-semibold">100% PCI Safe</span>
                  </div>
                </div>

                {/* Live Stats bar */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/8">
                    <p className="text-[10px] text-white/40">Gateway</p>
                    <p className="font-bold text-white">Razorpay / Stripe</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/8">
                    <p className="text-[10px] text-white/40">Shipping</p>
                    <p className="font-bold text-white">Shiprocket Live</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/8">
                    <p className="text-[10px] text-white/40">Checkout</p>
                    <p className="font-bold text-emerald-400">1-Step Fast</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7-Step E-Commerce Customer Journey Visual */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Conversion Pipeline
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              The Complete E-Commerce Journey
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              From first product impression to frictionless checkout and automated tracking notifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {journeySteps.map((step, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-bold text-neon-blue block mb-2">{step.step}</span>
                  <h3 className="font-display font-700 text-sm text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Full Architecture
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              E-Commerce Store Capabilities
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Built to manage transactions, inventories, logistics, and multi-channel customer communications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-neon-blue/70 block mb-2">0{idx + 1}</span>
                  <h3 className="font-display font-700 text-sm text-white mb-1.5">{cap.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison: Neutral, Balanced Guidance */}
      <section id="platforms" className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Objective Guidance
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Choosing the Right Commerce Platform
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              We do not push one universal platform. We evaluate your business requirements and build on the foundation that makes the most technical and commercial sense.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {platforms.map((plat, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-7 border border-white/10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <span className="text-[11px] font-mono text-neon-blue uppercase tracking-wider font-semibold block mb-2">
                    {plat.tag}
                  </span>
                  <h3 className="font-display font-700 text-xl text-white mb-3">
                    {plat.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-4">
                    {plat.desc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 mb-6">
                    <span className="text-[11px] font-mono uppercase text-white/50 block mb-1">Ideal For:</span>
                    <p className="text-xs text-white/80">{plat.bestFor}</p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {plat.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#enquiry" className="btn-outline text-xs py-2 text-center w-full block">
                  Select {plat.name.split(' ')[0]} Architecture
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentServiceId="ecommerce-development" />

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            Online Store Growth
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            Ready to Build a High-Converting Online Store?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Tell us about your products, target market, and shipping needs. We will architect a frictionless shopping experience.
          </p>
        </div>

        <div className="px-6">
          <ServiceEnquiryForm defaultService="E-commerce Development" />
        </div>
      </section>
    </div>
  );
}
