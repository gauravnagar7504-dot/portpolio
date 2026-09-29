import React from 'react';
import { motion } from 'framer-motion';
import { Palette, CheckCircle2, MousePointer } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import RelatedServices from '../../components/RelatedServices';
import ServiceEnquiryForm from '../../components/ServiceEnquiryForm';
import WireframeToUiVisual from '../../components/services/WireframeToUiVisual';
import frame3Img from '../../assets/images/Frame 3.webp';

export default function UiUxDesignPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'UI/UX Design Services',
    serviceType: 'User Interface & User Experience Design',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    description: 'We turn business requirements into clear, intuitive and visually polished interfaces for websites, e-commerce stores and digital products.',
  };

  const capabilities = [
    { title: 'UX Research & Discovery', desc: 'Understanding customer mental models, intent, decision obstacles, and behavioral psychology.' },
    { title: 'Competitor UI Benchmarking', desc: 'Analyzing category benchmarks to identify clear opportunities for visual and functional differentiation.' },
    { title: 'Information Architecture (IA)', desc: 'Structuring sitemaps, data relationships, and navigational hierarchies for intuitive discovery.' },
    { title: 'User Flows & Storyboards', desc: 'Mapping step-by-step pathways visitors take to accomplish primary business conversions.' },
    { title: 'Low-Fidelity Wireframing', desc: 'Rapid prototyping of page structures and content ergonomics without premature styling distractions.' },
    { title: 'High-Fidelity UI Design', desc: 'Pixel-perfect, editorial-grade visual design crafted in Figma with strict typography systems.' },
    { title: 'Mobile & Tablet UI', desc: 'Dedicated mobile-first interface design featuring ergonomic thumb zones and fluid reflow.' },
    { title: 'E-commerce UX Design', desc: 'High-converting product detail pages, sticky action bars, cart drawers, and frictionless checkouts.' },
    { title: 'Clickable Figma Prototypes', desc: 'Interactive prototypes simulating page transitions, micro-interactions, and modal behaviors.' },
    { title: 'Tokenized Design Systems', desc: 'Reusable component libraries, color variables, spacing scales, and typographic tokens in Figma.' },
    { title: 'Responsive Breakpoint Guides', desc: 'Explicit interface states across mobile (375px), tablet (768px), laptop (1280px), and desktop (1920px).' },
    { title: 'Clean Developer Handoff', desc: 'Organized Figma files with auto-layout, named layers, exported SVG assets, and CSS specs.' },
  ];

  const processSteps = [
    { step: '01', title: 'Discover', desc: 'Uncovering brand positioning, core goals, user personas, and target outcomes.' },
    { step: '02', title: 'Research', desc: 'Analyzing competitors, user friction points, and industry design paradigms.' },
    { step: '03', title: 'Structure', desc: 'Defining the sitemap, content priority, and key conversion funnel pathways.' },
    { step: '04', title: 'Wireframe', desc: 'Drafting low-fidelity layouts focused strictly on content hierarchy and usability.' },
    { step: '05', title: 'Design', desc: 'Applying luxury typography, dark aesthetics, imagery, and component styling.' },
    { step: '06', title: 'Prototype', desc: 'Connecting screens into interactive Figma prototypes for click-through validation.' },
    { step: '07', title: 'Test & Refine', desc: 'Gathering feedback, testing contrast/accessibility, and polishing micro-interactions.' },
    { step: '08', title: 'Handoff', desc: 'Preparing developer-ready design files, tokens, and asset exports.' },
  ];

  const designPillars = [
    { title: 'Clarity Over Decoration', desc: 'Visual beauty is hollow if visitors cannot immediately grasp what you do. We prioritize clear typographic hierarchy and obvious next actions.' },
    { title: 'Kinetic Micro-Interactions', desc: 'Subtle physics-based button hovers, card lifts, and entrance animations that make the interface feel responsive and premium.' },
    { title: 'Design Tokens & Scalability', desc: 'Built around standardized design systems so new landing pages or product cards can be designed in minutes with 100% brand consistency.' },
    { title: 'Accessible Contrast & Touch', desc: 'WCAG compliant text-to-background contrast and minimum 48px touch targets for effortless thumb navigation.' },
  ];

  const faqs = [
    {
      q: 'What deliverables do I receive at the end of the UI/UX design phase?',
      a: 'You receive an organized, production-grade Figma file containing your complete responsive interface layouts (desktop, tablet, and mobile), an interactive clickable prototype, a tokenized design system (typography, colors, components), and all exported SVGs and optimized WebP visual assets ready for engineering.',
    },
    {
      q: 'Can our in-house development team build from your Figma files?',
      a: 'Yes, 100%. We design using Figma Auto-Layout, standardized CSS grid/flexbox logic, named layers, and tokenized variables. Any frontend engineer can inspect styles, grab SVG code, and build cleanly without guesswork.',
    },
    {
      q: 'What is the practical difference between UI and UX design?',
      a: 'UX (User Experience) is the functional foundation: how the site is structured, how easy it is to find information, user flows, and reducing cognitive friction. UI (User Interface) is the visual craft: typography, colors, aesthetics, button styles, imagery, and micro-interactions. We deliver both in seamless harmony.',
    },
    {
      q: 'How many design revisions are included?',
      a: 'We work iteratively in milestones (Wireframe approval → Style Direction approval → Full UI prototype). You have continuous opportunities to provide input at each stage before we finalize the design system.',
    },
    {
      q: 'Can you also develop the website after designing the UI/UX?',
      a: 'Yes. In fact, that is our core strength! Because we handle both UI/UX design and full-stack web engineering under one roof, there is zero translation loss between Figma and the final live website code.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="UI/UX Design Services | Dynamic Designing"
        description="Strategic user interface and experience design. Wireframing, interactive prototyping, design systems, and responsive Figma architectures."
        canonicalUrl="https://www.dynamicdesigninng.com/services/ui-ux-design"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[600px] h-[600px] bg-neon-purple/10 top-0 left-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBreadcrumbs serviceName="UI/UX Design" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
                <Palette size={14} className="text-neon-blue" />
                <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                  Service 07 · Interface Architecture
                </span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                Digital Experiences Designed Around{' '}
                <span className="text-gradient">Real Users</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                We turn business requirements into clear, intuitive and visually polished interfaces for websites, e-commerce stores and digital products.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#enquiry" className="btn-primary">
                  Discuss UI/UX Project
                </a>
                <a href="#wireframe-ui" className="btn-outline">
                  Explore Design Progression
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-white/60">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Figma Auto-Layout Clean</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Interactive Clickable Prototypes</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Tokenized Design Systems</span>
              </div>
            </motion.div>

            {/* Figma-Style Visual Canvas Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="glass-card rounded-2xl p-4 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative font-mono text-xs">
                {/* Figma Canvas Toolbar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50 text-[11px]">
                  <div className="flex items-center gap-2">
                    <MousePointer size={13} className="text-neon-blue" />
                    <span>Figma · Design System v3.0</span>
                  </div>
                  <span className="text-neon-blue">100% Zoom</span>
                </div>

                <div className="pt-3 space-y-3">
                  {/* Canvas Artboard Representation */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10 group">
                    <img
                      src={frame3Img}
                      alt="Figma UI/UX Artboard Mockup"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/85 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="glass-card px-2 py-0.5 rounded text-[10px] text-white/80 border border-white/10">
                        #Desktop-Artboard-1440
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-display font-bold text-white">
                        Design Tokens & Component Instances
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">Dev-Ready</span>
                    </div>
                  </div>

                  {/* Component layers row */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-white/60">
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                      Typography Scale
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                      Color Tokens
                    </div>
                    <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                      Auto-Layout 24px
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wireframe to UI Interactive Visual Section */}
      <section id="wireframe-ui" className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <WireframeToUiVisual />
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Capabilities
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Full-Spectrum UI/UX Capabilities
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              From user research and structural wireframes to tokenized design systems and developer-ready Figma architectures.
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

      {/* Strategic Design Pillars */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Philosophy
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Our Core Design Principles
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Interfaces engineered to balance visual prestige with intuitive clarity and conversion results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designPillars.map((pillar, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-neon-blue/30 transition-all">
                <span className="font-mono text-xs text-neon-blue block mb-2">Pillar 0{idx + 1}</span>
                <h3 className="font-display font-700 text-lg text-white mb-2">{pillar.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step UX Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Methodology
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              The 8-Step UI/UX Process
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A structured progression from strategic discovery to polished developer-ready design files.
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

      {/* FAQ */}
      <ServiceFAQ faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentServiceId="ui-ux-design" />

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            Design Collaboration
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            Have a Product or Website That Needs UI/UX Design?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Discuss your design requirements, brand vision, and deadline with our lead designer.
          </p>
        </div>

        <div className="px-6">
          <ServiceEnquiryForm defaultService="UI/UX Design" />
        </div>
      </section>
    </div>
  );
}
