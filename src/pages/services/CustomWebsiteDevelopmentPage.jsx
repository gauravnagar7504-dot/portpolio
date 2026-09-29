import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2, Terminal, CheckCircle2, ArrowRight, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import ServiceBreadcrumbs from '../../components/ServiceBreadcrumbs';
import ServiceFAQ from '../../components/ServiceFAQ';
import RelatedServices from '../../components/RelatedServices';
import ServiceEnquiryForm from '../../components/ServiceEnquiryForm';
import CustomVsTemplateComparison from '../../components/services/CustomVsTemplateComparison';
import movehouseImg from '../../assets/images/movehouse_fitness.webp';
import novaCareImg from '../../assets/images/nova_care.webp';

export default function CustomWebsiteDevelopmentPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Website Development Services',
    serviceType: 'Custom Software & Web Engineering',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    description: 'When your business needs more than an off-the-shelf solution, we design and develop a website around your exact workflows, features and growth plans.',
  };

  const capabilities = [
    { title: 'Custom Frontend Development', desc: 'React, modern component architectures, and responsive micro-interactions engineered for extreme speed.' },
    { title: 'Custom Backend Functionality', desc: 'Secure APIs, serverless functions, and robust business logic tailored to your specific operational flows.' },
    { title: 'Third-Party API Integrations', desc: 'Seamless synchronization with ERPs, CRMs, logistics engines, SMS/WhatsApp gateways, and payment providers.' },
    { title: 'CRM & Lead Automations', desc: 'Direct pipeline routing to HubSpot, Salesforce, Zoho, or proprietary databases with zero manual data entry.' },
    { title: 'Customer & Partner Portals', desc: 'Authenticated member cockpits, document libraries, client dashboards, and secure account environments.' },
    { title: 'Interactive Calculators & Tools', desc: 'Dynamic price estimation tools, interactive diagnostic selectors, and custom configurators.' },
    { title: 'Custom Dashboards', desc: 'Real-time telemetry, lead management overviews, and data-visualization consoles for your operations team.' },
    { title: 'Database-Driven Features', desc: 'Normalized relational schemas and high-throughput query caching designed for zero bottlenecks.' },
    { title: 'Custom CMS Solutions', desc: 'Decoupled, headless content publishing tailored precisely to your editorial workflow with no bloat.' },
    { title: 'Enterprise Web Platforms', desc: 'High-availability architecture built to handle millions of queries with zero downtime.' },
  ];

  const processSteps = [
    { step: '01', title: 'Requirements', desc: 'Deep dive into business logic, edge cases, user roles, data schemas, and integrations.' },
    { step: '02', title: 'Technical Planning', desc: 'Architecture blueprinting, API contract definitions, framework selection, and database modeling.' },
    { step: '03', title: 'UX Architecture', desc: 'System user flows, state diagrams, data entry ergonomics, and interaction wireframes.' },
    { step: '04', title: 'Interface Design', desc: 'Design system creation, tokenized style guides, and responsive component UI mockups.' },
    { step: '05', title: 'Development', desc: 'Modular frontend engineering, clean backend controllers, and unit-tested business logic.' },
    { step: '06', title: 'Integration', desc: 'Connecting webhooks, payment processors, CRM pipelines, and external authentication.' },
    { step: '07', title: 'Testing & QA', desc: 'End-to-end regression testing, penetration security reviews, and load testing under pressure.' },
    { step: '08', title: 'Deployment', desc: 'Automated CI/CD pipelines, CDN edge distribution, and rollback monitoring.' },
    { step: '09', title: 'Iteration', desc: 'Performance monitoring, telemetry analytics, and milestone feature expansions.' },
  ];

  const situations = [
    { title: 'Unique Business Workflows', desc: 'When your sales or operational process cannot be accommodated by typical off-the-shelf plugins.' },
    { title: 'Custom Functionality', desc: 'When you need proprietary calculation engines, multi-tiered booking rules, or dynamic pricing.' },
    { title: 'Third-Party Integrations', desc: 'When your site must talk bidirectionally with internal ERPs, warehouse tools, or custom databases.' },
    { title: 'Customer Portals', desc: 'When authenticated users require personalized workspaces, transaction histories, or file vaults.' },
    { title: 'Complex Forms & Data Intake', desc: 'Multi-stage approval flows, conditional logic, file upload pipelines, and automated signature verifications.' },
    { title: 'Data-Driven Interfaces', desc: 'Live dashboards, real-time inventory displays, dynamic charts, and low-latency API interactions.' },
    { title: 'Custom Product Experiences', desc: 'Configurators allowing buyers to customize products with instant 3D or visual feedback.' },
    { title: 'Scalable Web Platforms', desc: 'Architectures engineered to handle sudden viral traffic spikes without crashing or slowing down.' },
  ];

  const faqs = [
    {
      q: 'When should I choose custom development over a standard CMS template?',
      a: 'Choose custom website development when your business requires unique workflows, proprietary calculators, custom customer dashboards, deep third-party API integrations, or when website speed and brand differentiation are mission-critical. If your requirements exceed what template themes and pre-built plugins cleanly offer, custom development prevents technical debt and frequent rebuilds.',
    },
    {
      q: 'What technology stack do you use for custom development?',
      a: 'We build modern web architectures primarily utilizing React, Next.js / Vite, Tailwind CSS, Node.js, TypeScript, PostgreSQL / Supabase, and cloud-edge deployments (AWS, Vercel, Cloudflare). We select the optimal tools based on your specific performance, scalability, and internal team capabilities.',
    },
    {
      q: 'Do I own the full intellectual property (IP) and code?',
      a: 'Yes, 100%. Upon final project milestone completion, complete source code, repository access, database ownership, and intellectual property rights belong entirely to your company without proprietary lock-in.',
    },
    {
      q: 'How do you ensure custom web applications remain secure?',
      a: 'We follow OWASP security standards: rigorous input sanitation, CSRF and XSS protection, parameterized database queries, strict Content Security Policies (CSP), rate limiting, and encrypted HTTPS/TLS protocols.',
    },
    {
      q: 'Can my in-house developers maintain and extend the code?',
      a: 'Yes. We deliver cleanly structured, well-documented modular code accompanied by comprehensive developer documentation, environment configs, and architectural diagrams so your internal engineers can easily extend the platform.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="Custom Website Development Services | Dynamic Designing"
        description="Purpose-built custom website development without template limitations. Custom portals, custom workflows, API integrations, and scalable architectures."
        canonicalUrl="https://www.dynamicdesigninng.com/services/custom-website-development"
        schemaData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-0 right-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <ServiceBreadcrumbs serviceName="Custom Website Development" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
                <Code2 size={14} className="text-neon-blue" />
                <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                  Service 02 · Bespoke Engineering
                </span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                Custom Websites Built Without{' '}
                <span className="text-gradient">Template Limitations</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                When your business needs more than an off-the-shelf solution, we design and develop a website around your exact workflows, features and growth plans.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#enquiry" className="btn-primary">
                  Discuss Custom Project
                </a>
                <a href="#comparison" className="btn-outline">
                  Custom vs Template
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-white/60">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Full IP Ownership</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Zero Plugin Clutter</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-emerald-400" /> Custom API Gateways</span>
              </div>
            </motion.div>

            {/* Technical Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="glass-card rounded-2xl p-5 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] font-mono text-xs text-white/70 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 text-neon-blue">
                    <Terminal size={14} />
                    <span>architecture_spec.json</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Compiled v2.4
                  </span>
                </div>

                <div className="bg-[#070913] p-4 rounded-xl border border-white/8 space-y-2 text-[11px] leading-relaxed text-white/60">
                  <p><span className="text-neon-blue">"framework"</span>: <span className="text-emerald-400">"React 19 / Modern Headless"</span>,</p>
                  <p><span className="text-neon-blue">"database"</span>: <span className="text-emerald-400">"PostgreSQL + Redis Cache"</span>,</p>
                  <p><span className="text-neon-blue">"api_layer"</span>: <span className="text-emerald-400">"GraphQL & RESTful Endpoints"</span>,</p>
                  <p><span className="text-neon-blue">"auth_security"</span>: <span className="text-emerald-400">"OAuth2 / JWT + RBAC"</span>,</p>
                  <p><span className="text-neon-blue">"crm_sync"</span>: <span className="text-emerald-400">"Bi-directional Webhooks"</span></p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] text-white/40">Latency</p>
                    <p className="text-sm font-bold text-white">42ms Edge TTFB</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    <p className="text-[10px] text-white/40">Bundle Footprint</p>
                    <p className="text-sm font-bold text-white">68kB Minimal Gzip</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section: When Standard Solutions Aren't Enough */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Strategic Fit
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              When Standard Solutions Aren't Enough
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Standard CMS templates and drag-and-drop website builders are built to serve millions of generic use-cases. When your company develops proprietary products, complex booking engines, or unique client interactions, forcing your operations into off-the-shelf constraints creates expensive friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {situations.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-neon-blue/30 transition-all">
                <span className="font-mono text-xs text-neon-blue/70 block mb-2">Scenario 0{idx + 1}</span>
                <h3 className="font-display font-700 text-lg text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
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
              Engineering Scope
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              Full-Stack Custom Web Capabilities
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Everything built cleanly from first principles to scale seamlessly with your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-white/8 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-3">
                    <Code2 size={16} />
                  </div>
                  <h3 className="font-display font-700 text-sm text-white mb-1.5">{cap.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom vs Template Comparison Section */}
      <section id="comparison" className="py-16 md:py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <CustomVsTemplateComparison />
        </div>
      </section>

      {/* 9-Step Process */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Methodology
            </span>
            <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
              9-Step Technical Lifecycle
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              From requirement matrices to production deployment and milestone iterations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8">
                <span className="font-mono text-xs font-bold text-neon-blue block mb-2">{step.step}</span>
                <h3 className="font-display font-700 text-base text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Real-World Work */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-1">
                Custom Platforms
              </span>
              <h2 className="section-title text-3xl sm:text-4xl text-white">
                Engineered Interactive Solutions
              </h2>
            </div>
            <Link to="/portfolio" className="text-xs font-semibold text-neon-blue hover:text-white flex items-center gap-1">
              Explore All Demos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl overflow-hidden border border-white/10 group">
              <div className="aspect-[16/10] overflow-hidden bg-[#07090e]">
                <img
                  src={movehouseImg}
                  alt="MOVEHOUSE Functional Training Sanctuary"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-3">
                  <span className="text-white/60 font-medium">Fitness & Wellness Platform</span>
                  <span className="text-neon-blue font-mono text-[11px] self-start sm:self-auto px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20">
                    Timetable · Modality Filter
                  </span>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-2">MOVEHOUSE Sanctuary</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                  Boutique movement sanctuary with custom Allegro reformer timetable, live instructor scheduling, interactive modality filters, and membership tiers.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a href="/movehouse/" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 whitespace-nowrap">
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
                  alt="NOVA Care Diagnostic Triage"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-3">
                  <span className="text-white/60 font-medium">Clinical Health Portal</span>
                  <span className="text-neon-blue font-mono text-[11px] self-start sm:self-auto px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20">
                    3D Diagnostics · Triage Logic
                  </span>
                </div>
                <h3 className="font-display font-700 text-xl text-white mb-2">NOVA Care Clinic</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                  Multi-specialty patient cockpit with custom symptom search triage, specialist matching engine, and real-time operatory chair booking.
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

      {/* FAQs */}
      <ServiceFAQ faqs={faqs} />

      {/* Related Services */}
      <RelatedServices currentServiceId="custom-website-development" />

      {/* Enquiry Form */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            Bespoke Architecture
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            Have a Unique Digital Requirement?
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Share your technical goals, workflows, and specifications. We will review feasibility and architect an optimal custom engineering roadmap.
          </p>
        </div>

        <div className="px-6">
          <ServiceEnquiryForm defaultService="Custom Website Development" />
        </div>
      </section>
    </div>
  );
}
