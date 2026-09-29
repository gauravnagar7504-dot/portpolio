import React from 'react';
import { RefreshCw, CheckCircle2, ShieldCheck, AlertTriangle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import RelatedServices from '../../components/RelatedServices';
import ServiceEnquiryForm from '../../components/ServiceEnquiryForm';
import BeforeAfterRedesignSlider from '../../components/services/BeforeAfterRedesignSlider';

export default function WebsiteRedesignPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Redesign Services',
    serviceType: 'Website Redesign & Modernization',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    description: 'We redesign websites that look outdated, feel difficult to use or no longer represent the quality of the business behind them with strict SEO preservation.',
  };

  const warningSigns = [
    { title: 'Outdated Appearance', desc: 'Your website looks like it was built 8 years ago and fails to convey the current caliber of your business.' },
    { title: 'Poor Mobile Experience', desc: 'Visitors have to pinch, zoom, or struggle with broken buttons on smartphones and tablets.' },
    { title: 'Painfully Slow Loading', desc: 'Pages take over 3 seconds to render, causing eager prospects to bounce before seeing your offer.' },
    { title: 'Confusing Navigation', desc: 'Menu structures are cluttered, making it difficult for prospects to locate services or pricing.' },
    { title: 'Low Enquiry Generation', desc: 'You receive decent website traffic, but virtually nobody fills out forms or calls your sales team.' },
    { title: 'Inconsistent Branding', desc: 'Typography, colors, and messaging clash across different pages, damaging corporate authority.' },
    { title: 'Difficult Content Management', desc: 'Your current system is so convoluted that you dread making simple text or photo updates.' },
    { title: 'Obsolete Technology & Security', desc: 'Built on deprecated PHP versions, insecure plugins, or unmaintained proprietary builders.' },
    { title: 'Poor Content Hierarchy', desc: 'Walls of generic text that overwhelm visitors rather than guiding them toward taking action.' },
  ];

  const improvements = [
    { title: 'Visual Prestige & Modern UI', desc: 'Crafting sophisticated dark luxury or clean corporate aesthetics that elevate brand perception.' },
    { title: 'User Experience (UX)', desc: 'Restructuring user journeys to minimize clicks, eliminate confusion, and guide prospective buyers.' },
    { title: 'Intuitive Navigation', desc: 'Streamlined mega-menus and mobile drawers organized around customer search intent.' },
    { title: 'Flawless Mobile Experience', desc: '100% fluid touch optimization, thumb-friendly navigation, and zero horizontal scroll.' },
    { title: 'Sub-Second Page Performance', desc: 'Optimizing Core Web Vitals to achieve 90+ PageSpeed scores and lightning-quick rendering.' },
    { title: 'High-Converting Action Paths', desc: 'Strategically placed CTAs, quick WhatsApp bridges, and low-friction contact funnels.' },
    { title: 'Modern Technical Foundation', desc: 'Replacing antiquated code with clean semantic HTML5, modern React/WordPress, and edge CDNs.' },
    { title: 'Rigorous SEO Migration', desc: 'Protecting your accumulated Google authority with complete 301 redirect architecture.' },
  ];

  const seoProtocols = [
    {
      title: 'Full URL Inventory & Crawl Audit',
      desc: 'We map every existing indexed URL, title tag, and meta description across your domain before touching code.',
    },
    {
      title: 'Precise 301 Redirect Mapping',
      desc: 'Every old URL is permanently redirected (301) to its exact counterpart on the new website so search bots and bookmarks never hit 404 errors.',
    },
    {
      title: 'Metadata Preservation & Review',
      desc: 'Preserving existing high-ranking title tags, headings, and schema while optimizing underperforming pages for higher CTR.',
    },
    {
      title: 'Internal Link & Canonical Integrity',
      desc: 'Ensuring internal navigation links point to live canonical destinations without slow redirect chains.',
    },
    {
      title: 'Google Search Console & Analytics Sync',
      desc: 'Submitting updated XML sitemaps to Search Console immediately upon launch and monitoring indexation velocity.',
    },
    {
      title: 'Post-Launch Crawl Verification',
      desc: 'Running exhaustive 24-hour and 7-day technical audits to catch any crawl anomalies or temporary status drops.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Audit & Benchmarking', desc: 'Evaluating current site analytics, top-ranking URLs, conversion drop-offs, and technical debt.' },
    { step: '02', title: 'SEO Preservation Strategy', desc: 'Drafting the complete 301 redirect map and cataloging existing keyword positions.' },
    { step: '03', title: 'UX Wireframing', desc: 'Designing modernized page hierarchies, information flows, and key decision touchpoints.' },
    { step: '04', title: 'Modern UI Design', desc: 'Creating premium visual interfaces that reflect the real quality of your company.' },
    { step: '05', title: 'Staging Development', desc: 'Building the new site on a password-protected staging server without touching your live site.' },
    { step: '06', title: 'Redirect & QA Verification', desc: 'Testing every form, mobile breakpoint, redirect rule, and tracking pixel.' },
    { step: '07', title: 'Seamless Cutover', desc: 'Performing DNS cutover with zero downtime and submitting updated sitemaps to Google.' },
  ];

  const faqs = [
    {
      q: 'Will our Google rankings drop when our website is redesigned?',
      a: 'Search engine rankings can temporarily fluctuate during any major site overhaul while Google recrawls the pages. However, by strictly implementing complete 301 redirect mapping, preserving core content, maintaining canonical tags, and significantly improving Core Web Vitals, we minimize disruptions and establish a foundation for higher long-term organic growth. We never make reckless promises that rankings cannot change, but our protocol safeguards your earned SEO equity.',
    },
    {
      q: 'How long does a full website redesign take?',
      a: 'A typical business website redesign takes between 3 to 6 weeks, depending on the number of pages, content migration volume, and custom functionality required. We do all development on a staging server, so your current website stays 100% online until the minute we launch.',
    },
    {
      q: 'Can we keep our existing domain, company emails, and blog posts?',
      a: 'Yes, absolutely. Your domain name, Google Workspace / Microsoft 365 business emails, and historical blog articles remain completely intact and unaffected throughout the redesign process.',
    },
    {
      q: 'What assets do we need to provide before starting the redesign?',
      a: 'We will need access to your current website admin/hosting, existing brand logo files, and any updated copy or photography you want included. If your text or photography is outdated, we can also refine the copy and provide high-end visual direction.',
    },
    {
      q: 'Why not just buy a ready-made theme rather than redesigning professionally?',
      a: 'Buying a pre-made template rarely fixes underlying issues like poor conversion paths, slow page bloat, or broken SEO architecture. A bespoke redesign solves the specific business problems that are currently preventing your visitors from converting into clients.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="Website Redesign Services | Dynamic Designing"
        description="Transform outdated, slow websites into high-converting modern assets. Complete redesign with zero SEO disruption, 301 mapping, and speed optimization."
        canonicalUrl="https://www.dynamicdesigninng.com/services/website-redesign"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-0 left-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBreadcrumbs serviceName="Website Redesign" />

          <div className="text-center max-w-3xl mx-auto space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
              <RefreshCw size={14} className="text-neon-blue" />
              <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                Service 06 · Digital Modernization
              </span>
            </div>

            <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Turn Your Outdated Website Into a{' '}
              <span className="text-gradient">Modern Business Asset</span>
            </h1>

            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We redesign websites that look outdated, feel difficult to use or no longer represent the quality of the business behind them.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a href="#enquiry" className="btn-primary">
                Request Redesign Audit
              </a>
              <a href="#comparison-slider" className="btn-outline">
                Interact with Before & After
              </a>
            </div>
          </div>

          {/* Interactive Before → After Transformation Slider */}
          <div id="comparison-slider" className="pt-4">
            <BeforeAfterRedesignSlider />
          </div>
        </div>
      </section>

      {/* Section: Signs You Need a Redesign */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Diagnostic Audit
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Signs Your Website Is Costing You Business
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              If your current website exhibits any of the following symptoms, it is actively pushing prospective high-value clients directly to your competitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-red-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4">
                  <AlertTriangle size={17} />
                </div>
                <h3 className="font-display font-700 text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Improve */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Transformational Scope
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              What We Modernize & Re-engineer
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A comprehensive overhaul addressing aesthetic prestige, technical speed, and commercial conversion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {improvements.map((imp, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="font-display font-700 text-sm text-white mb-1.5">{imp.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{imp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT SEO SECTION */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-2">
              Search Equity Protection
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Redesign Without Throwing Away Existing SEO Value
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              The biggest fear business owners face when considering a redesign is losing their established Google rankings. Our disciplined SEO migration protocol ensures every indexed URL, backlink, and meta parameter is systematically accounted for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoProtocols.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-emerald-500/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-display font-700 text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-white/[0.02] border border-white/8 text-xs text-white/60 text-center max-w-2xl mx-auto">
            ℹ️ <span className="text-white font-medium">Honest Agency Standard:</span> Search engines naturally re-index altered layouts over a few days. We use strict 301 mappings to protect long-term rankings without making dishonest claims that traffic can never fluctuate.
          </div>
        </div>
      </section>

      {/* Redesign Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Staging Methodology
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Zero-Downtime Redesign Process
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Your live website continues generating sales while we build and test the new experience in private.
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
      <RelatedServices currentServiceId="website-redesign" />

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            Website Audit
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            Ready to Upgrade Your Outdated Website?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Provide your current website link and pain points. We will perform a preliminary review and share concrete ideas on how to elevate your presence.
          </p>
        </div>

        <div className="px-6">
          <ServiceEnquiryForm defaultService="Website Redesign" />
        </div>
      </section>
    </div>
  );
}
