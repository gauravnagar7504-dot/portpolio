import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import RelatedServices from '../../components/RelatedServices';
import ServiceEnquiryForm from '../../components/ServiceEnquiryForm';
import ShopifyJourneyVisual from '../../components/services/ShopifyJourneyVisual';
import aureliaImg from '../../assets/images/aurelia_beauty.webp';

export default function ShopifyDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Shopify Development Services',
    serviceType: 'Shopify E-commerce Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    description: 'We design and develop Shopify experiences that make products easier to discover, understand and purchase.',
  };

  const capabilities = [
    { title: 'Shopify Store Development', desc: 'Bespoke Liquid and Shopify 2.0 architecture engineered for rapid shopping experiences.' },
    { title: 'Custom Shopify UI Design', desc: 'Editorial product layouts and brand identity tailored to stand far apart from generic templates.' },
    { title: 'Theme Customization & OS 2.0', desc: 'Modular sections everywhere so your marketing team can re-arrange banners and promos easily.' },
    { title: 'Custom Sections & Blocks', desc: 'Tailored announcement bars, interactive ingredients lists, before/after sliders, and FAQ tabs.' },
    { title: 'High-Converting PDP Design', desc: 'Product detail pages with sticky add-to-cart bars, variant pills, sizing guides, and trust seals.' },
    { title: 'Faceted Collection Pages', desc: 'Instant filtering by color, size, price, and collection tags without clunky page reloads.' },
    { title: 'Cart Drawer Optimization', desc: 'Slide-out cart drawers with tiered free-shipping progress meters and one-click add-on items.' },
    { title: 'Curated App Integration', desc: 'Installing only high-performance apps for reviews, subscriptions, and search to prevent speed drops.' },
    { title: 'Payment & Gateway Setup', desc: 'Flawless integration of Razorpay, Cashfree, Stripe, PayPal, Apple Pay, and Cash on Delivery (COD).' },
    { title: 'Shipping & Tax Rules', desc: 'Zone-based domestic shipping, Shiprocket/Delhivery sync, weight calculators, and GST compliance.' },
    { title: 'Store Migration to Shopify', desc: 'Safe migration of products, customers, order histories, and 301 URL redirects from WooCommerce or Magento.' },
    { title: 'Speed & Liquid Optimization', desc: 'Stripping out legacy unused app scripts, asset minification, and optimizing Core Web Vitals.' },
  ];

  const conversionFactors = [
    { title: 'Frictionless Product Discovery', desc: 'Predictive search autocomplete, prominent collections, and structured category filters help customers find items instantly.' },
    { title: 'Clear Product Information', desc: 'Tabbed specifications, high-res galleries, dimensions, materials, and transparent shipping timelines answer buyer questions immediately.' },
    { title: 'Trust & Credibility Signals', desc: 'Verified customer reviews, secure payment badges, easy return policies, and transparent contact information eliminate purchase anxiety.' },
    { title: 'Dominant CTA Hierarchy', desc: 'High-contrast Buy Now and Add to Cart buttons positioned directly within the thumb zone on mobile screens.' },
    { title: 'Mobile-First Shopping', desc: 'Over 75% of e-commerce orders happen on phones. We design swipeable galleries and finger-friendly variant selectors.' },
    { title: 'Slide-Out Cart Experience', desc: 'Keep shoppers inside their flow with real-time cart subtotal calculations and free-shipping threshold incentives.' },
    { title: 'Strategic Upselling & Cross-Selling', desc: 'Contextual recommendations for complementary accessories directly inside the cart drawer without being intrusive.' },
    { title: 'Accelerated Navigation & Speed', desc: 'Sub-second page transitions keep momentum high, drastically decreasing drop-offs before checkout.' },
  ];

  const processSteps = [
    { step: '01', title: 'Store Strategy', desc: 'Analyzing product catalog, customer demographics, checkout bottlenecks, and competitor positioning.' },
    { step: '02', title: 'UI/UX Wireframing', desc: 'Designing responsive desktop and mobile store journeys focused on high conversion and brand prestige.' },
    { step: '03', title: 'Theme Engineering', desc: 'Coding modular Shopify OS 2.0 sections with clean Liquid, modern CSS, and lightweight JavaScript.' },
    { step: '04', title: 'Catalog & Inventory Setup', desc: 'Organizing product variations, SKUs, inventory rules, collections, and metadata tags.' },
    { step: '05', title: 'Apps & Gateway Sync', desc: 'Connecting payment gateways, logistics partners, customer reviews, and email marketing tools.' },
    { step: '06', title: 'Speed & Conversion QA', desc: 'Stress testing cart drawers, testing multiple payment flows, and auditing Core Web Vitals.' },
    { step: '07', title: 'Launch & Staff Training', desc: 'Going live, switching DNS, configuring domain SSL, and training your team on order fulfillment.' },
  ];

  const faqs = [
    {
      q: 'Why should I choose Shopify over WooCommerce or custom platforms?',
      a: 'Shopify is the gold standard for dedicated e-commerce because it provides bank-grade PCI DSS compliant hosting, an ultra-fast global checkout infrastructure (Shop Pay), automated software updates, and minimal server maintenance. It allows you to focus 100% on marketing and sales rather than server patching.',
    },
    {
      q: 'Which payment gateways can be integrated in India and internationally?',
      a: 'In India, we integrate Razorpay, Cashfree, PhonePe, Paytm, and verified Cash on Delivery (COD) with OTP fraud prevention. For international transactions, we set up Stripe, PayPal, Apple Pay, Google Pay, and multi-currency automatic conversion.',
    },
    {
      q: 'Will too many Shopify apps slow down my store?',
      a: 'Yes, downloading dozens of bloated apps is the number one reason Shopify stores become sluggish. At Dynamic Designing, we custom-code features natively directly into the theme (such as mega menus, size charts, countdown bars, and cart drawers) so you only need 2–3 essential apps.',
    },
    {
      q: 'Can you migrate my existing store from WooCommerce or Wix without losing SEO?',
      a: 'Yes. We migrate your product database, customer records, and order history while meticulously configuring 301 URL redirects so your existing Google search rankings and backlinks remain protected.',
    },
    {
      q: 'Will I be able to easily add new products and run discount sales myself?',
      a: 'Yes. Shopify has the most user-friendly admin portal in the industry. We customize your theme so you can launch promotional banners, create discount codes, add products, and manage inventory in minutes from your phone or desktop.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="Shopify Development Services | Dynamic Designing"
        description="We design and develop Shopify experiences that make products easier to discover, understand and purchase. Custom OS 2.0 stores built for growth."
        canonicalUrl="https://www.dynamicdesigninng.com/services/shopify-development"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-0 right-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBreadcrumbs serviceName="Shopify Development" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
                <ShoppingBag size={14} className="text-neon-blue" />
                <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                  Service 04 · E-Commerce Engine
                </span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                Shopify Stores Designed to Turn{' '}
                <span className="text-gradient">Browsers Into Buyers</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                We design and develop Shopify experiences that make products easier to discover, understand and purchase.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#enquiry" className="btn-primary">
                  Discuss Shopify Store
                </a>
                <a href="#journey" className="btn-outline">
                  Explore Buying Journey
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-white/60">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Shopify OS 2.0 Native</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Frictionless Cart Drawers</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Global Payment Gateways</span>
              </div>
            </motion.div>

            {/* Hero Visual: Premium Storefront + Mobile PDP */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="glass-card rounded-2xl p-4 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative">
                <div className="h-8 px-3 bg-[#0a0d18] rounded-t-xl border-b border-white/10 flex items-center justify-between text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[10px] text-white/70">Shopify OS 2.0 Storefront</span>
                  </div>
                  <span className="text-neon-blue font-mono text-[10px]">Shop Pay 1-Click</span>
                </div>

                <div className="relative rounded-b-xl overflow-hidden aspect-[16/11] bg-[#07090f] group">
                  <img
                    src={aureliaImg}
                    alt="Shopify Luxury Storefront Preview"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/85 via-[#050508]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-display font-bold text-white block">
                        Editorial Product Collection
                      </span>
                      <span className="text-[10px] text-white/60">Instant Variant Swatches</span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                      Fast PDP
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Cart Drawer Mockup */}
              <div className="absolute -bottom-6 -left-6 w-44 glass-card rounded-xl p-2.5 border border-white/20 shadow-2xl hidden sm:block">
                <div className="bg-[#090b14] rounded-lg p-2.5 space-y-2 border border-white/10 text-left">
                  <div className="flex items-center justify-between text-[10px] text-white/60 pb-1 border-b border-white/10">
                    <span>Cart (1 Item)</span>
                    <span className="text-emerald-400 font-semibold">Free Shipping!</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-white/10 shrink-0" />
                    <div className="text-[10px]">
                      <p className="text-white font-medium truncate">Signature Ritual</p>
                      <p className="text-neon-blue font-mono">₹2,450</p>
                    </div>
                  </div>
                  <div className="w-full py-1 rounded bg-neon-blue text-center text-[10px] font-bold text-white">
                    Checkout Now
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shopping Experience Section (Interactive 5-Step Journey) */}
      <section id="journey" className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Customer Experience
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              The 5-Step Frictionless Shopping Journey
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Every extra click, slow page transition, or confusing form costs you sales. Here is how our engineered Shopify architecture systematically eliminates buyer hesitation from arrival to order confirmation.
            </p>
          </div>

          <ShopifyJourneyVisual />
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Full Scope
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Shopify Capabilities & Customizations
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Comprehensive design, theme coding, checkout engineering, and backend app integrations.
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

      {/* Conversion Section: Designed Around the Buying Journey */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Conversion Architecture
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Designed Around the Buying Journey
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              E-commerce success is not accidental. We systematically embed psychological cues and technical speed to encourage purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionFactors.map((factor, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-neon-blue/30 transition-all">
                <span className="font-mono text-xs text-emerald-400 block mb-2">Pillar 0{idx + 1}</span>
                <h3 className="font-display font-700 text-base text-white mb-2">{factor.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Methodology
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Shopify Launch Roadmap
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A 7-stage technical timeline ensuring zero checkout bugs and a flawless launch day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8">
                <span className="font-mono text-xs font-bold text-neon-blue block mb-2">{step.step}</span>
                <h3 className="font-display font-700 text-sm text-white mb-1.5">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentServiceId="shopify-development" />

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            E-Commerce Growth
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            Ready to Launch or Scale Your Shopify Store?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Discuss your catalog, target audience, and preferred integrations with our technical lead. Receive fixed milestone pricing and an actionable rollout plan.
          </p>
        </div>

        <div className="px-6">
          <ServiceEnquiryForm defaultService="Shopify Development" />
        </div>
      </section>
    </div>
  );
}
