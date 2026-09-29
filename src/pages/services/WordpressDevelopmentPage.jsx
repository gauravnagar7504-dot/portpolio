import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers, CheckCircle2, ShieldCheck, ArrowRight,
  Edit3, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import RelatedServices from '../../components/RelatedServices';
import ServiceEnquiryForm from '../../components/ServiceEnquiryForm';
import aureliaImg from '../../assets/images/aurelia_beauty.webp';
import elaraImg from '../../assets/images/elara_beauty.webp';

export default function WordpressDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WordPress Development Services',
    serviceType: 'WordPress Web Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    description: 'Professional WordPress websites combining custom design, flexible content management and scalable functionality.',
  };

  const servicesList = [
    { title: 'Custom WordPress Websites', desc: 'Handcrafted theme development tailored specifically to your visual brand and content needs.' },
    { title: 'Business & Corporate Websites', desc: 'Robust CMS setups for enterprises requiring role-based permissions and multi-author editorial flows.' },
    { title: 'Custom Theme Development', desc: 'Zero dependency on bloated pre-packaged marketplace themes. Clean PHP, modern CSS, and Gutenberg blocks.' },
    { title: 'WooCommerce Online Stores', desc: 'Customizable shopping carts, product archives, and checkout extensions built for high conversion.' },
    { title: 'Elementor & Block Development', desc: 'Flexible visual editing setups using lightweight Elementor builds or native WordPress Full Site Editing.' },
    { title: 'Website Migration to WordPress', desc: 'Seamless content migration from Wix, Squarespace, Webflow, or legacy Joomla with zero link breakage.' },
    { title: 'Speed & Core Web Vitals Optimization', desc: 'Dramatically lowering TTFB, configuring Redis caching, script deferral, and WebP compression.' },
    { title: 'WordPress Security Hardening', desc: 'Two-factor authentication, XML-RPC disabling, database prefix hardening, and automated malware firewalls.' },
    { title: 'Maintenance & Version Care', desc: 'Staging environment testing for core and plugin updates so your live site never encounters downtime.' },
    { title: 'Third-Party API Integrations', desc: 'Connecting external CRMs, marketing automation, payment gateways, and analytics pipelines.' },
  ];

  const manageableContent = [
    { title: 'Pages & Landing Experiences', desc: 'Easily add, duplicate, or reorder landing pages with pre-styled modular layout blocks.' },
    { title: 'Blog Posts & Articles', desc: 'Rich editorial publishing with visual headings, pull quotes, categories, tags, and SEO previews.' },
    { title: 'Media & Visual Galleries', desc: 'Drag-and-drop image uploads with automatic responsive resizing and WebP compression.' },
    { title: 'Services & Practice Areas', desc: 'Update service descriptions, deliverables, icons, and pricing tables in just a few clicks.' },
    { title: 'Products & Inventories', desc: 'Manage prices, stock status, discount coupons, and product variants without any technical knowledge.' },
    { title: 'Global Business Info', desc: 'Update phone numbers, addresses, social handles, and business hours from one centralized settings tab.' },
  ];

  const performancePrinciples = [
    { title: 'Clean Implementation', desc: 'No tangled code or multi-layered page builders fighting each other. Clean semantic markup.' },
    { title: 'Aggressive Image Optimization', desc: 'Next-gen AVIF/WebP image delivery, lazy-loading below-the-fold assets, and explicit aspect ratios.' },
    { title: 'Smart Caching & CDN', desc: 'Server-level page caching, Redis object caching, and Cloudflare edge delivery for 200ms responses.' },
    { title: 'Core Web Vitals Focus', desc: 'Eliminating Cumulative Layout Shift (CLS) and optimizing Largest Contentful Paint (LCP) for green scores.' },
    { title: 'Plugin Discipline', desc: 'Strict limit on active plugins (only essential, audited, enterprise-grade tools) to prevent vulnerability.' },
    { title: 'Enterprise Security Protocols', desc: 'Custom login paths, brute-force protection, automated database backups, and SSL enforcement.' },
  ];

  const processSteps = [
    { step: '01', title: 'Planning', desc: 'Auditing content structure, taxonomies, custom post types, and client editorial requirements.' },
    { step: '02', title: 'Design', desc: 'Designing custom UI mockups, typographic hierarchy, and responsive layout components.' },
    { step: '03', title: 'Development', desc: 'Coding custom WordPress themes or Gutenberg block systems with clean PHP and CSS.' },
    { step: '04', title: 'CMS Setup', desc: 'Configuring custom fields (ACF/Pods), options pages, and intuitive client dashboard panels.' },
    { step: '05', title: 'Content Integration', desc: 'Populating formatted text, optimized imagery, metadata, and cross-linking pages.' },
    { step: '06', title: 'Testing & QA', desc: 'Cross-browser testing, mobile validation, form submission checks, and speed audits.' },
    { step: '07', title: 'Training & Handover', desc: 'Personalized video walkthrough guiding your team on day-to-day content publishing.' },
    { step: '08', title: 'Launch', desc: 'Production deployment, search engine pinging, XML sitemap verification, and live monitoring.' },
  ];

  const faqs = [
    {
      q: 'Is WordPress fast enough for a modern business website?',
      a: 'Yes, when built properly. The common myth that WordPress is slow stems from amateur implementations that install 40+ unoptimized plugins and bloated marketplace themes. Dynamic Designing builds lightweight, custom WordPress solutions that consistently achieve 90+ Google PageSpeed scores and sub-second load times.',
    },
    {
      q: 'Will I be able to edit text and photos without breaking the layout?',
      a: 'Absolutely. We configure custom fields and modular block systems so your team enters content into clean, clearly labeled fields (e.g. "Heading", "Description", "Button Link"). The design styling remains perfectly protected and responsive no matter what you edit.',
    },
    {
      q: 'How do you keep WordPress secure from hackers and malware?',
      a: 'We implement multi-layered hardening: disabling file editing within the dashboard, renaming default database prefixes, blocking xmlrpc.php, setting up brute-force login throttles, implementing SSL, and installing enterprise firewall protection. We also configure automated daily backups.',
    },
    {
      q: 'Do you work with Elementor or native Gutenberg?',
      a: 'We work with both! For clients who prefer a visual drag-and-drop editor, we build clean, performance-tuned Elementor setups without excess add-on bloat. For clients prioritizing ultimate speed and future-proof simplicity, we build native Gutenberg Full Site Editing (FSE) block systems.',
    },
    {
      q: 'Do you offer ongoing maintenance for WordPress core and plugin updates?',
      a: 'Yes. We offer reliable monthly maintenance packages where updates are first tested on a safe staging clone before being pushed to your live website, ensuring zero unexpected plugin conflicts or downtime.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="WordPress Development Services | Dynamic Designing"
        description="Professional WordPress websites combining custom design, flexible content management and scalable functionality without plugin bloat."
        canonicalUrl="https://www.dynamicdesigninng.com/services/wordpress-development"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-0 left-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBreadcrumbs serviceName="WordPress Development" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
                <Layers size={14} className="text-neon-blue" />
                <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                  Service 03 · CMS Engineering
                </span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                WordPress Websites Designed for Performance and{' '}
                <span className="text-gradient">Easy Management</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                Professional WordPress websites combining custom design, flexible content management and scalable functionality.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#enquiry" className="btn-primary">
                  Discuss WordPress Website
                </a>
                <Link to="/portfolio" className="btn-outline">
                  View WordPress Work
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-white/60">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Non-Technical CMS Friendly</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> 90+ PageSpeed Scores</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Hardened Enterprise Security</span>
              </div>
            </motion.div>

            {/* Hero Visual: WordPress Dashboard Editor alongside Finished Web Frontend */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="glass-card rounded-2xl p-4 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative">
                {/* Simulated Admin Cockpit Bar */}
                <div className="h-8 px-3 bg-[#0a0d18] rounded-t-xl border-b border-white/10 flex items-center justify-between text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-mono text-[10px] text-white/70">CMS Dashboard: Clean & Intuitive</span>
                  </div>
                  <span className="text-[10px] text-neon-blue font-mono">Editor Ready</span>
                </div>

                <div className="p-3 bg-[#070912] rounded-b-xl space-y-3">
                  {/* Visual CMS Block representation */}
                  <div className="p-3 rounded-lg bg-white/[0.03] border border-white/8 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded bg-neon-blue/20 flex items-center justify-center text-neon-blue text-xs font-bold">
                        H1
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white">Hero Section Headline</p>
                        <p className="text-[10px] text-white/40">Editable by your marketing team</p>
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Live Synced
                    </span>
                  </div>

                  {/* Finished Frontend Preview */}
                  <div className="relative rounded-lg overflow-hidden border border-white/10 aspect-[16/10] group">
                    <img
                      src={aureliaImg}
                      alt="Finished WordPress Luxury Atelier Website"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs">
                      <span className="font-display font-semibold text-white">Aurelia Beauty Atelier</span>
                      <span className="text-emerald-400 font-mono text-[10px]">96 PageSpeed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Powerful for Your Visitors. Simple for Your Team. */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Content Independence
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Powerful for Your Visitors. Simple for Your Team.
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              You should never have to pay a web developer every single time you want to update a headline, post an article, change a service price, or upload a client case study. We engineer WordPress setups with clear, intuitive backends so your team enjoys complete publishing autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manageableContent.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-neon-blue/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-4">
                  <Edit3 size={18} />
                </div>
                <h3 className="font-display font-700 text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Capabilities
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Full-Spectrum WordPress Engineering
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              From bespoke themes and custom plugin integration to speed tuning and secure hosting migrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {servicesList.map((srv, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-neon-blue/70 block mb-2">0{idx + 1}</span>
                  <h3 className="font-display font-700 text-sm text-white mb-1.5">{srv.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance & Security Architecture Section */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Engineering Quality
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              How We Solve the "Slow WordPress" Problem
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              WordPress only gets slow when bloated with conflicting plugins. Here is our rigorous performance and security methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performancePrinciples.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-display font-700 text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WordPress Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Delivery Steps
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              WordPress Project Lifecycle
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A structured roadmap ensuring seamless CMS setup, zero bugs, and thorough handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8">
                <span className="font-mono text-xs font-bold text-neon-blue block mb-2">{step.step}</span>
                <h3 className="font-display font-700 text-base text-white mb-1.5">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-1">
                Portfolio Evidence
              </span>
              <h2 className="section-title text-3xl sm:text-4xl text-white">
                Live Interactive Examples
              </h2>
            </div>
            <Link to="/portfolio" className="text-xs font-semibold text-neon-blue hover:text-white flex items-center gap-1">
              View Portfolio <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[16/10] overflow-hidden bg-[#07090e]">
                <img
                  src={aureliaImg}
                  alt="Aurelia Beauty Studio Website"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-3">
                  <span className="text-white/60 font-medium">Beauty & Bridal Atelier</span>
                  <span className="text-neon-blue font-mono text-[11px] self-start sm:self-auto px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20">
                    Service Menus · Booking
                  </span>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-2">Aurelia Beauty Studio</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                  Editorial-grade luxury website with dynamic treatment tasting menus, master stylist profiles, and real-time appointment booking.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a href="/aurelia-beauty-studio/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span>Open Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                  <Link to="/portfolio" className="text-xs text-white/60 hover:text-white inline-flex items-center gap-1 whitespace-nowrap py-1">
                    <span>Explore Case Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[16/10] overflow-hidden bg-[#07090e]">
                <img
                  src={elaraImg}
                  alt="Elara Beauty House"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-3">
                  <span className="text-white/60 font-medium">Quiet Luxury Atelier</span>
                  <span className="text-neon-blue font-mono text-[11px] self-start sm:self-auto px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20">
                    Ritual Previews · Atelier
                  </span>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-2">Elara Beauty House</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                  Quiet luxury sanctuary featuring floating treatment previews, bridal trousseau booking, and bespoke service configuration.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a href="/elara-beauty-house/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 whitespace-nowrap">
                    <span>Open Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                  <Link to="/portfolio" className="text-xs text-white/60 hover:text-white inline-flex items-center gap-1 whitespace-nowrap py-1">
                    <span>Explore Case Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentServiceId="wordpress-development" />

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            CMS Simplicity
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            Want a WordPress Website Your Team Will Love Managing?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Tell us about your publishing goals, current bottlenecks, and desired features. We provide a transparent scope and fixed quote.
          </p>
        </div>

        <div className="px-6">
          <ServiceEnquiryForm defaultService="WordPress Development" />
        </div>
      </section>
    </div>
  );
}
