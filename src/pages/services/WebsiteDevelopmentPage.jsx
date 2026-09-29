import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, CheckCircle2, ShieldCheck, Zap, ArrowRight,
  Smartphone, Search, Layers, Server, Users, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import RelatedServices from '../../components/RelatedServices';
import ServiceEnquiryForm from '../../components/ServiceEnquiryForm';
import frame3Img from '../../assets/images/Frame 3.webp';
import frame1Img from '../../assets/images/frame 1.webp';
import novaCareImg from '../../assets/images/nova_care.webp';

export default function WebsiteDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Development Services',
    serviceType: 'Web Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    description: 'We create fast, responsive and scalable websites that combine thoughtful design, reliable development and a clear business purpose.',
  };

  const capabilities = [
    { title: 'Corporate Websites', desc: 'Authoritative online flagships built for established corporations and growing enterprises.' },
    { title: 'Business Websites', desc: 'Clear, modern web presences designed to showcase company services, values, and credentials.' },
    { title: 'B2B Websites', desc: 'Frictionless sales enablement engines engineered to capture high-value commercial inquiries.' },
    { title: 'Product Catalogue Websites', desc: 'Structured digital catalogs with deep filtering, spec sheets, and distributor discovery.' },
    { title: 'High-Converting Landing Pages', desc: 'Focused campaign pages built for maximum lead generation, paid search, and ad funnels.' },
    { title: 'Portfolio & Atelier Websites', desc: 'Immersive visual galleries crafted for architects, studios, luxury brands, and creatives.' },
    { title: 'CMS Websites', desc: 'Intuitive content management setups that allow non-technical teams to edit content easily.' },
    { title: 'Custom Web Experiences', desc: 'Bespoke web applications with interactive booking, calculators, or portal logic.' },
  ];

  const whatsIncluded = [
    { title: 'Responsive Development', desc: 'Pixel-perfect rendering across mobile, tablet, laptop, and ultra-wide screens.' },
    { title: 'UI Implementation', desc: 'Precision translation of design mockups into semantic, accessible frontend code.' },
    { title: 'Contact & Lead Forms', desc: 'Spam-protected inquiry funnels with email dispatch and direct WhatsApp routing.' },
    { title: 'CMS Integration', desc: 'Intuitive management workflows so your marketing team can update pages in seconds.' },
    { title: 'SEO-Friendly Structure', desc: 'Logical H1-H3 tagging, clean URLs, OpenGraph social cards, and schema microdata.' },
    { title: 'Performance Optimization', desc: 'Sub-second load times, WebP image compression, and 95+ Core Web Vitals targets.' },
    { title: 'Analytics Integration', desc: 'Google Analytics 4, Tag Manager, and custom conversion event tracking set up.' },
    { title: 'Security Best Practices', desc: 'SSL certificate configuration, CSP headers, sanitation, and secure API endpoints.' },
    { title: 'Cross-Browser Testing', desc: 'Thorough QA testing across Chrome, Safari, Firefox, Edge, and iOS/Android engines.' },
    { title: 'Zero-Downtime Deployment', desc: 'Production deployment to high-speed CDNs with automated builds and backups.' },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Analyzing your business goals, target audience, competitive landscape, and functional requirements.' },
    { step: '02', title: 'Architecture', desc: 'Sitemap structuring, URL routing, content hierarchy, and technical framework selection.' },
    { step: '03', title: 'UI/UX Design', desc: 'Crafting responsive wireframes and high-fidelity interface layouts focused on clarity.' },
    { step: '04', title: 'Development', desc: 'Writing clean, modular, scalable code with modern frontend practices and fast APIs.' },
    { step: '05', title: 'Testing & QA', desc: 'Cross-browser validation, mobile touch audits, forms testing, and speed benchmarking.' },
    { step: '06', title: 'Launch', desc: 'DNS configuration, SSL provisioning, Search Console submission, and live verification.' },
    { step: '07', title: 'Ongoing Support', desc: 'Post-launch warranty, CMS training, technical maintenance, and ongoing optimizations.' },
  ];

  const faqs = [
    {
      q: 'How much does website development cost?',
      a: 'Website development costs depend on the scope, number of pages, custom interactive features, and CMS requirements. Our starter packages begin with clear milestone pricing, while complex corporate or bespoke custom platforms are quoted based on verified functional requirements. We provide transparent, fixed-price proposals with no hidden surprises.',
    },
    {
      q: 'How long does website development take?',
      a: 'A standard professional business website typically takes 2 to 4 weeks from discovery to launch. Larger corporate portals or websites requiring extensive custom features or custom integrations generally take 4 to 8 weeks. We outline a realistic week-by-week delivery schedule before starting.',
    },
    {
      q: 'Will my website be mobile responsive?',
      a: 'Yes, 100%. Every website we develop is mobile-first and tested thoroughly across modern smartphones, tablets, and desktop resolutions. Touch targets, typography, navigation drawers, and images are fluidly optimized.',
    },
    {
      q: 'Will I be able to update content on the website myself?',
      a: 'Yes. Depending on your business preference, we integrate an intuitive CMS (such as WordPress or a headless CMS) where your team can effortlessly edit text, add blog articles, update team members, or change images without touching code. We also provide handover walkthrough documentation.',
    },
    {
      q: 'Do you provide SEO-ready development?',
      a: 'Yes. We build with clean semantic HTML5, valid heading structures (H1, H2, H3), schema.org structured data, XML sitemaps, open-graph metadata, and Core Web Vitals optimization so search engines can easily index and rank your pages.',
    },
    {
      q: 'Can you redesign or upgrade my existing website?',
      a: 'Yes. We specialize in transforming outdated websites into modern business assets while carefully preserving existing search rankings and SEO equity through structured 301 redirect mapping.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="Website Development Services | Dynamic Designing"
        description="We create fast, responsive and scalable websites that combine thoughtful design, reliable development and a clear business purpose."
        canonicalUrl="https://www.dynamicdesigninng.com/services/website-development"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-0 left-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBreadcrumbs serviceName="Website Development" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
                <Globe size={14} className="text-neon-blue" />
                <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                  Service 01 · Core Engineering
                </span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                Website Development Built Around{' '}
                <span className="text-gradient">Your Business</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                We create fast, responsive and scalable websites that combine thoughtful design, reliable development and a clear business purpose.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#enquiry" className="btn-primary">
                  Discuss Your Website
                </a>
                <Link to="/portfolio" className="btn-outline">
                  View Our Work
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-md">
                <div>
                  <p className="text-xs text-white/50">Load Speed</p>
                  <p className="font-display font-bold text-lg text-white">Under 1s</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Core Web Vitals</p>
                  <p className="font-display font-bold text-lg text-emerald-400">95+ Score</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Responsiveness</p>
                  <p className="font-display font-bold text-lg text-white">Fluid 100%</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual: Multi-Device Responsive Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative glass-card rounded-2xl p-3 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
                <div className="h-8 px-3 bg-[#0c0f1c] rounded-t-xl border-b border-white/10 flex items-center justify-between text-xs text-white/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/70" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                    <span className="w-2 h-2 rounded-full bg-green-500/70" />
                  </div>
                  <span className="font-mono text-[10px] text-white/50">production-business-web.app</span>
                  <Zap size={11} className="text-neon-blue" />
                </div>
                <div className="relative rounded-b-xl overflow-hidden aspect-[16/11]">
                  <img
                    src={frame3Img}
                    alt="Desktop & Mobile Web Development Showcase"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-display font-bold text-white">
                      The Aravali Palace · Heritage Website
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      Fast 0.5s FCP
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Preview */}
              <div className="absolute -bottom-6 -left-6 w-36 sm:w-44 glass-card rounded-xl p-2 border border-white/20 shadow-2xl hidden sm:block">
                <div className="rounded-lg overflow-hidden aspect-[9/16] bg-[#090b14]">
                  <img
                    src={frame1Img}
                    alt="Mobile Viewport Preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: Your Website Should Work as Hard as Your Business Does */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Business Impact
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Your Website Should Work as Hard as Your Business Does
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              In today's competitive landscape, your website is the very first impression prospects experience. It shouldn't just be an electronic brochure; it must actively build credibility, communicate your services clearly, and convert qualified traffic into commercial inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'Build Immediate Credibility', desc: 'Instill deep confidence in high-value clients with polished typography, clean layout, and authoritative branding.' },
              { icon: Users, title: 'Communicate Services Clearly', desc: 'Articulate your core value proposition in seconds, making it obvious who you serve and what outcomes you deliver.' },
              { icon: Zap, title: 'Generate Qualified Enquiries', desc: 'Position conversion funnels, clear CTAs, and quick WhatsApp or form touchpoints exactly where visitors decide.' },
              { icon: Smartphone, title: 'Work Perfectly on Mobile', desc: 'Over 65% of website visits occur on mobile. We deliver tactile navigation, fast loading, and finger-friendly targets.' },
              { icon: Zap, title: 'Load in the Blink of an Eye', desc: 'Slow websites bleed revenue. Our sites load in under 1 second to maximize search rankings and retain eager buyers.' },
              { icon: Search, title: 'Support SEO Visibility', desc: 'Engineered with clean HTML5 markup, structured data schema, semantic headings, and metadata search engines favor.' },
              { icon: Layers, title: 'Effortless Navigation', desc: 'Intuitive user flow so prospective clients find pricing, case studies, and services without frustration.' },
              { icon: Server, title: 'Scale with Your Growth', desc: 'Modular architecture ready for new service additions, team expansions, and international traffic surges.' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-neon-blue/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display font-700 text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities: What We Develop */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Capabilities
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Websites Tailored to Your Business Model
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Every organization has unique sales cycles. We design and engineer websites structured specifically for your operational goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all">
                <span className="font-mono text-xs text-neon-blue/70 block mb-3">0{idx + 1}</span>
                <h3 className="font-display font-700 text-lg text-white mb-2">{cap.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Browser Mockup + Architecture Explainer */}
      <section className="py-16 md:py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-3 sm:p-4 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
                <div className="h-8 px-4 bg-[#0a0d18] rounded-t-xl border-b border-white/10 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-4 font-mono text-[11px] text-white/40">novacare-clinic.com/patient-portal</span>
                </div>
                <div className="relative rounded-b-xl overflow-hidden aspect-[16/10] bg-[#07090f]">
                  <img
                    src={novaCareImg}
                    alt="Healthcare Website Architecture Preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block">
                Technical Rigor
              </span>
              <h2 className="section-title text-3xl sm:text-4xl text-white">
                Modern Architecture for Real-World Demands
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-xl glass-card border border-white/8">
                  <h4 className="font-display font-700 text-sm text-white mb-1">Responsive Architecture</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Built using fluid typography, flexbox, and CSS grid to ensure smooth reflow across any screen width.
                  </p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8">
                  <h4 className="font-display font-700 text-sm text-white mb-1">Fast Page Experience</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Zero unnecessary JavaScript, optimized font delivery, and automated asset compression for instant rendering.
                  </p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8">
                  <h4 className="font-display font-700 text-sm text-white mb-1">Clear Navigation Hierarchy</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Thoughtful user pathways that guide buyers from initial intrigue to inquiry with zero cognitive friction.
                  </p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8">
                  <h4 className="font-display font-700 text-sm text-white mb-1">Conversion-Focused Structure</h4>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Strategic placement of social proof, trust markers, service guarantees, and frictionless contact forms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Deliverables
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              What Is Included in Every Build
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              We deliver complete, production-ready website systems. No missing pieces, no unexpected bolt-on costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {whatsIncluded.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                    <CheckCircle2 size={16} />
                  </div>
                  <h3 className="font-display font-700 text-sm text-white mb-1.5">{item.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visually Connected Timeline Process */}
      <section className="py-16 md:py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Workflow
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Our 7-Step Development Journey
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A structured, transparent engineering process from kickoff to post-launch peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative glass-card rounded-2xl p-5 border border-white/8">
                <span className="font-mono text-xs font-bold text-neon-blue block mb-2">
                  {step.step}
                </span>
                <h3 className="font-display font-700 text-sm text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-1">
                Verified Outcomes
              </span>
              <h2 className="section-title text-3xl sm:text-4xl text-white">
                Selected Work & Live Demos
              </h2>
            </div>
            <Link to="/portfolio" className="text-xs font-semibold text-neon-blue hover:text-white flex items-center gap-1">
              View Complete Portfolio <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[16/10] overflow-hidden bg-[#07090e]">
                <img
                  src={frame3Img}
                  alt="The Aravali Palace Website"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-3">
                  <span className="text-white/60 font-medium">Hospitality & Luxury Stays</span>
                  <span className="text-neon-blue font-mono text-[11px] self-start sm:self-auto px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20">
                    React · Tailwind · Booking
                  </span>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-2">The Aravali Palace</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                  Full-bleed heritage resort website with an interactive floating booking engine, nightly rate showcases, and fine dining reservation menus.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a href="/the-aravali-palace/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 whitespace-nowrap">
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
                  src={novaCareImg}
                  alt="NOVA Care Healthcare Clinic"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-3">
                  <span className="text-white/60 font-medium">Healthcare & Multi-Specialty</span>
                  <span className="text-neon-blue font-mono text-[11px] self-start sm:self-auto px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20">
                    High-Speed UI · Clinic
                  </span>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-2">NOVA Care Clinic</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                  Patient-first clinical hub featuring interactive symptom triage, verified doctor profiles, 3D CBCT diagnostic tech previews, and chair booking.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a href="/nova-care/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 whitespace-nowrap">
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
      <RelatedServices currentServiceId="website-development" />

      {/* Final CTA + Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            Let's Collaborate
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            Ready to Build a Website That Drives Real Growth?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Discuss your requirements with our lead developer. Receive honest technical advice, scope breakdown, and fixed milestone pricing.
          </p>
        </div>

        <div className="px-6">
          <ServiceEnquiryForm defaultService="Website Development" />
        </div>
      </section>
    </div>
  );
}
