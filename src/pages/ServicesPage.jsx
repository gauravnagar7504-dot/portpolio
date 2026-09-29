import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Code2, Layers, ShoppingBag, ShoppingCart, RefreshCw, Palette,
  ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ExternalLink,
  Building2, Factory, Briefcase, Store, Rocket, Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import MainServicesHeroVisual from '../components/services/MainServicesHeroVisual';
import ServiceEnquiryForm from '../components/ServiceEnquiryForm';
import { servicesData } from '../data/servicesData';
import frame3Img from '../assets/images/Frame 3.webp';
import novaCareImg from '../assets/images/nova_care.webp';
import movehouseImg from '../assets/images/movehouse_fitness.webp';
import aureliaImg from '../assets/images/aurelia_beauty.webp';

const serviceIcons = {
  'website-development': Globe,
  'custom-website-development': Code2,
  'wordpress-development': Layers,
  'shopify-development': ShoppingBag,
  'ecommerce-development': ShoppingCart,
  'website-redesign': RefreshCw,
  'ui-ux-design': Palette,
};

export default function ServicesPage() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Design and Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      url: 'https://www.dynamicdesigninng.com/',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design & Development Services',
      itemListElement: servicesData.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDescription,
          url: `https://www.dynamicdesigninng.com${s.url}`,
        },
      })),
    },
  };

  const industries = [
    { title: 'Startups', desc: 'Fast, high-impact launches built to establish authority and attract early adopters.', icon: Rocket },
    { title: 'B2B Companies', desc: 'Clear capability positioning, case studies, and structured lead capture funnels.', icon: Building2 },
    { title: 'Manufacturers', desc: 'Comprehensive product catalogs, technical specs, and distributor inquiry routing.', icon: Factory },
    { title: 'E-commerce Brands', desc: 'Conversion-engineered online stores built for high AOV and frictionless checkouts.', icon: Store },
    { title: 'Professional Services', desc: 'Trust-centric websites for clinics, legal firms, consultancies, and financial practices.', icon: Briefcase },
    { title: 'Growing Businesses', desc: 'Scalable platforms designed to expand smoothly as new service lines are introduced.', icon: Trophy },
    { title: 'Enterprise Projects', desc: 'High-traffic custom portals, multi-tier roles, and bespoke API integrations.', icon: ShieldCheck },
  ];

  const approachSteps = [
    {
      number: '01',
      title: 'Discover',
      desc: 'Business, audience, competitors and project requirements.',
    },
    {
      number: '02',
      title: 'Strategy',
      desc: 'Website structure, features, content hierarchy and technology planning.',
    },
    {
      number: '03',
      title: 'Design',
      desc: 'Wireframes, UI/UX and responsive visual design.',
    },
    {
      number: '04',
      title: 'Development',
      desc: 'Clean, scalable and performance-focused development.',
    },
    {
      number: '05',
      title: 'Launch & Optimize',
      desc: 'Testing, deployment, performance checks and post-launch support.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Business-First Approach',
      desc: 'We focus on business objectives, user clarity, and revenue generation rather than arbitrary visual decoration.',
    },
    {
      title: 'Custom Solutions, Not Templates',
      desc: 'Purpose-built layouts tailored to your unique market positioning instead of rigid one-size-fits-all templates.',
    },
    {
      title: 'Responsive Across Devices',
      desc: 'Meticulously crafted fluid interfaces optimized for smartphones, tablets, laptops, and ultra-wide screens.',
    },
    {
      title: 'SEO-Conscious Development',
      desc: 'Clean semantic HTML5, schema microdata, optimized metadata, and canonical structures search engines favor.',
    },
    {
      title: 'Performance Optimization',
      desc: 'Sub-second load speeds, modern image encoding, minimal CSS/JS bundles, and 95+ Core Web Vitals targets.',
    },
    {
      title: 'Scalable Architecture',
      desc: 'Modular, well-documented codebases ready for team expansions, new product launches, and traffic surges.',
    },
    {
      title: 'Transparent Project Communication',
      desc: 'Direct communication with the lead developer, weekly milestones, and clear timeline transparency.',
    },
    {
      title: 'Post-Launch Support',
      desc: 'Reliable post-launch warranty, CMS training, and ongoing technical guidance for long-term peace of mind.',
    },
  ];

  const featuredWork = [
    {
      name: 'The Aravali Palace',
      industry: 'Hospitality & Luxury Resorts',
      services: 'Website Development · UI/UX Design',
      tech: 'React · Tailwind CSS · Interactive Booking Engine',
      image: frame3Img,
      liveUrl: '/the-aravali-palace/',
      desc: 'Bespoke royal heritage resort digital experience featuring room showcases, an interactive floating booking engine, and culinary menus.',
    },
    {
      name: 'NOVA Care Clinic',
      industry: 'Healthcare & Specialized Clinics',
      services: 'Custom Website Development · UI/UX',
      tech: 'React · Interactive Symptom Triage · Chair Booking',
      image: novaCareImg,
      liveUrl: '/nova-care/',
      desc: 'Patient-first healthcare cockpit featuring interactive symptom search triage, specialist doctor roster, and 3D diagnostic previews.',
    },
    {
      name: 'MOVEHOUSE Sanctuary',
      industry: 'Boutique Fitness & Performance',
      services: 'Website Development · Custom Schedule',
      tech: 'React · Modality Filtering · Membership System',
      image: movehouseImg,
      liveUrl: '/movehouse/',
      desc: 'High-energy movement sanctuary website featuring interactive Allegro reformer timetable, coach profiles, and transparent membership funnels.',
    },
    {
      name: 'Aurelia Beauty Studio',
      industry: 'Aesthetic Ateliers & Salons',
      services: 'WordPress / E-Commerce Development',
      tech: 'Custom UI · Appointment Scheduling · Treatment Tasting',
      image: aureliaImg,
      liveUrl: '/aurelia-beauty-studio/',
      desc: 'Editorial luxury beauty atelier platform with stylized service menus, master colorist showcases, and real-time appointment booking.',
    },
  ];

  return (
    <div className="pt-24 pb-20 overflow-hidden">
      <SEOHead
        title="Website Design & Development Services | Dynamic Designing"
        description="Explore professional website development, WordPress, Shopify, e-commerce, custom development, website redesign and UI/UX design services from Dynamic Designing."
        canonicalUrl="https://www.dynamicdesigninng.com/services"
        schemaData={servicesSchema}
      />

      {/* HERO SECTION */}
      <section className="relative pt-6 pb-16 md:pb-24">
        <div className="glow-orb w-[700px] h-[700px] bg-neon-blue/10 top-0 left-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 border border-neon-blue/20">
                <Sparkles size={14} className="text-neon-blue" />
                <span className="text-xs font-display font-semibold text-white/70 tracking-wider uppercase">
                  OUR SERVICES
                </span>
              </div>

              <h1 className="section-title text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                Digital Experiences Built for{' '}
                <span className="text-gradient">Business Growth</span>
              </h1>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                We design and develop fast, scalable and conversion-focused websites for businesses that want more than just an online presence.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a href="#enquiry" className="btn-primary">
                  Discuss Your Project
                </a>
                <a href="#services-grid" className="btn-outline">
                  Explore Our Services
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 max-w-lg">
                <div>
                  <p className="text-xs text-white/50">Core Focus</p>
                  <p className="font-display font-bold text-sm sm:text-base text-white">Design & Code</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Performance</p>
                  <p className="font-display font-bold text-sm sm:text-base text-emerald-400">95+ PageSpeed</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Service Model</p>
                  <p className="font-display font-bold text-sm sm:text-base text-white">Full-Journey</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual on Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5"
            >
              <MainServicesHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16 md:py-20 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block">
            End-To-End Execution
          </span>
          <h2 className="section-title text-3xl sm:text-4xl text-white">
            Everything You Need to Build a Better Digital Presence
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Dynamic Designing handles the complete website journey—from initial digital strategy and intuitive UI/UX design through clean frontend and backend development, e-commerce integrations, performance optimization, and strategic website redesigns.
          </p>
        </div>
      </section>

      {/* SERVICES GRID (7 Premium Service Cards) */}
      <section id="services-grid" className="py-16 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Core Capabilities
            </span>
            <h2 className="section-title text-3xl sm:text-5xl text-white mb-4">
              Seven Specialized <span className="text-gradient">Services</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              Explore our dedicated website design and engineering services, each crafted for specific business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service, idx) => {
              const Icon = serviceIcons[service.id] || Globe;
              const isLarge = idx === 6; // 7th card spans full width
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  className={isLarge ? 'md:col-span-2 lg:col-span-3' : ''}
                >
                  <Link
                    to={service.url}
                    className="group block h-full glass-card rounded-2xl p-7 sm:p-8 border border-white/8 hover:border-neon-blue/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                  >
                    {/* Hover Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl group-hover:bg-neon-blue/15 transition-all duration-500 pointer-events-none" />

                    <div>
                      {/* Top row: Number on left, Icon on far right */}
                      <div className="flex items-center justify-between mb-5 w-full">
                        <span className="font-mono text-sm font-bold text-neon-blue/80">
                          {service.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all duration-300">
                          <Icon size={18} />
                        </div>
                      </div>

                      {/* Content */}
                      {isLarge ? (
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-2">
                          <div className="max-w-2xl">
                            <h3 className="font-display font-700 text-xl sm:text-2xl text-white mb-2.5 group-hover:text-neon-blue transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4">
                              {service.shortDescription}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70 font-medium"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/8">
                            <span className="inline-flex items-center gap-2 text-xs font-display font-semibold text-neon-blue group-hover:text-white transition-colors">
                              <span>Explore Service</span>
                              <div className="w-8 h-8 rounded-full glass-card border border-white/10 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                                <ArrowRight size={13} />
                              </div>
                            </span>
                          </div>
                        </div>
                      ) : (
                        <>
                          <h3 className="font-display font-700 text-xl sm:text-2xl text-white mb-3 group-hover:text-neon-blue transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                            {service.shortDescription}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {!isLarge && (
                      <div className="pt-4 border-t border-white/8 flex items-center justify-between text-xs font-display font-semibold text-neon-blue group-hover:text-white transition-colors">
                        <span>Explore Service</span>
                        <div className="w-7 h-7 rounded-full glass-card border border-white/10 flex items-center justify-center group-hover:translate-x-1.5 transition-transform">
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE BUILD FOR */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Client Focus
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Built for Businesses at Every Stage
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              Whether you are an ambitious venture taking your first step or an established organization demanding a digital overhaul, our web engineering adapts to your commercial context.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-neon-blue/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-4">
                      <Icon size={17} />
                    </div>
                    <h3 className="font-display font-700 text-lg text-white mb-2">{ind.title}</h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH: 5-STEP PROCESS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Our Approach
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              From Idea to Launch
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              A transparent, disciplined 5-step methodology that keeps your project on schedule, on budget, and free of surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 relative">
                <span className="font-mono text-sm font-bold text-neon-blue block mb-3">
                  {step.number}
                </span>
                <h3 className="font-display font-700 text-lg text-white mb-2">{step.title}</h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DYNAMIC DESIGNING */}
      <section className="py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Engineering Values
            </span>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-3">
              Why Dynamic Designing
            </h2>
            <p className="text-white/60 text-sm sm:text-base">
              We position ourselves as your technical partner, bringing rigorous engineering and business honesty to every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-white/20 transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 size={16} />
                </div>
                <h3 className="font-display font-700 text-base sm:text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-1">
                Portfolio Showcase
              </span>
              <h2 className="section-title text-3xl sm:text-4xl text-white">
                Featured Work & Case Studies
              </h2>
            </div>
            <Link to="/portfolio" className="text-xs font-semibold text-neon-blue hover:text-white flex items-center gap-1">
              View All Interactive Demos <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.map((project, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-white/10 group flex flex-col justify-between">
                <div className="aspect-[16/10] overflow-hidden bg-[#07090e] relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="glass-card px-2.5 py-1 rounded-full text-[11px] text-white/80 border border-white/10">
                      {project.industry}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-xs mb-3">
                    <span className="text-white/60 font-medium">{project.industry}</span>
                    <span className="text-neon-blue font-mono text-[11px] self-start sm:self-auto px-2 py-0.5 rounded bg-neon-blue/10 border border-neon-blue/20">
                      {project.tech}
                    </span>
                  </div>
                  <h3 className="font-display font-700 text-xl text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                    >
                      <span>View Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                    <Link to="/portfolio" className="text-xs text-white/60 hover:text-white inline-flex items-center gap-1 whitespace-nowrap py-1">
                      <span>Explore Case Study</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA + PROJECT ENQUIRY FORM */}
      <section id="enquiry" className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
            Get In Touch
          </span>
          <h2 className="section-title text-3xl sm:text-5xl text-white mb-4">
            Have a Website Project in Mind?
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-6">
            Whether you're launching something new, rebuilding an existing website or creating an e-commerce experience, let's discuss what your business needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="#enquiry-form-container" className="btn-primary">
              Start Your Project
            </a>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>

        <div id="enquiry-form-container" className="px-6">
          <ServiceEnquiryForm defaultService="Website Development" />
        </div>
      </section>
    </div>
  );
}
