import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Share2,
  Check,
  Sparkles,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Layers,
  Cpu,
  Zap,
  Globe,
  Code2,
  CheckCircle2,
  TrendingUp,
  ShoppingCart,
  Palette,
  CheckSquare,
  Square
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import heroMockupImg from '../../assets/images/website-development-cost-india-2026.webp';
import novaCareImg from '../../assets/images/nova_care.webp';
import movehouseImg from '../../assets/images/movehouse_fitness.webp';
import aureliaImg from '../../assets/images/aurelia_beauty.webp';

const CURRENT_URL = 'https://www.dynamicdesigninng.com/blog/website-development-cost-india/';

const TOC_ITEMS = [
  { id: 'how-much-does-website-development-cost', label: '1. How Much Does It Cost in India?' },
  { id: 'cost-by-website-type', label: '2. Cost by Website Type' },
  { id: 'what-determines-cost', label: '3. What Determines Website Cost?' },
  { id: 'design-vs-development-cost', label: '4. Design vs. Development Cost' },
  { id: 'wordpress-website-cost', label: '5. WordPress Website Cost' },
  { id: 'shopify-website-cost', label: '6. Shopify Website Cost' },
  { id: 'ecommerce-website-cost', label: '7. E-commerce Website Cost' },
  { id: 'custom-website-development-cost', label: '8. Custom Development Cost' },
  { id: 'additional-website-costs', label: '9. Additional & Ongoing Costs' },
  { id: 'how-long-does-it-take', label: '10. Development Timelines' },
  { id: 'choose-right-package', label: '11. Choosing the Right Package' },
  { id: 'reduce-costs-without-sacrificing-quality', label: '12. Reducing Costs Smartly' },
  { id: 'questions-to-ask-before-hiring', label: '13. Questions to Ask Developers' },
  { id: 'when-to-invest', label: '14. When to Invest in Custom Web' },
  { id: 'faq', label: '15. Frequently Asked Questions' },
];

const WEBSITE_TYPES_TABLE = [
  {
    type: 'Business Website',
    complexity: 'Low to Medium',
    use: 'Company profile, services, about, contact, trust building',
    factors: 'Number of pages, design fidelity, CMS setup, lead capture forms',
    range: '₹25,000 – ₹65,000',
  },
  {
    type: 'Corporate Website',
    complexity: 'Medium to High',
    use: 'Established brands, multi-division companies, investor relations',
    factors: 'Content architecture, bespoke UI/UX, compliance, integrations, scalability',
    range: '₹60,000 – ₹1,50,000',
  },
  {
    type: 'B2B Website',
    complexity: 'Medium to High',
    use: 'Manufacturers, industrial suppliers, exporters, B2B services',
    factors: 'Product catalogues, RFQ inquiry systems, CRM sync, downloadable specs',
    range: '₹50,000 – ₹1,40,000',
  },
  {
    type: 'E-commerce Website',
    complexity: 'High',
    use: 'Direct-to-consumer (D2C) brands, online storefronts, retail catalogs',
    factors: 'SKU count, payments, shipping APIs, user accounts, cart drawer, coupons',
    range: '₹45,000 – ₹2,20,000',
  },
  {
    type: 'Custom Web Platform',
    complexity: 'Advanced / Bespoke',
    use: 'Portals, SaaS platforms, booking engines, custom calculators, dashboards',
    factors: 'Custom database models, authenticated roles, third-party APIs, high-load architecture',
    range: '₹1,00,000 – ₹4,50,000+',
  },
];

const COST_DRIVERS = [
  {
    num: '01',
    title: 'Number of Pages',
    desc: 'A focused 5-page brand presence requires significantly less wireframing, copywriting, and layout assembly than a multi-level portal with dozens of service subpages.',
    impact: 'Base Scope',
  },
  {
    num: '02',
    title: 'Design Complexity',
    desc: 'Off-the-shelf pre-made templates are cheaper to install, but custom typography pairings, tailored color spaces, fluid animations, and bespoke design systems require deliberate UI/UX craft.',
    impact: 'Visual Authority',
  },
  {
    num: '03',
    title: 'Functionality & Features',
    desc: 'Static information is straightforward. Interactive features like instant search, multi-condition filtering, booking calendars, patient triage, and membership portals add technical complexity.',
    impact: 'Engineering Depth',
  },
  {
    num: '04',
    title: 'Platform & Architecture',
    desc: 'The tech foundation dictates maintenance and agility. WordPress, Shopify, or Headless CMS carry distinct engineering requirements.',
    impact: 'Tech Foundation',
  },
  {
    num: '05',
    title: 'Third-Party Integrations',
    desc: 'Connecting CRM systems (HubSpot/Zoho), payment gateways (Razorpay/Cashfree), automated WhatsApp notifications, ERP systems, and analytics requires API integration and security auditing.',
    impact: 'System Connectivity',
  },
  {
    num: '06',
    title: 'Content & Media Assets',
    desc: 'Professional copywriting, high-resolution lifestyle photography, 3D renderings, and product asset preparation can be bundled or provided by the client, directly affecting project hours.',
    impact: 'Storytelling Quality',
  },
  {
    num: '07',
    title: 'Technical SEO Structure',
    desc: 'True SEO-conscious engineering involves schema microdata, crawl budget hygiene, canonical structures, semantic HTML5, and automated XML sitemaps rather than just installing an SEO plugin.',
    impact: 'Organic Visibility',
  },
  {
    num: '08',
    title: 'Performance & Speed Optimization',
    desc: 'Achieving sub-second load times and 95+ Core Web Vitals scores requires modern WebP/AVIF asset pipelines, code splitting, critical CSS extraction, and low TTFB hosting setups.',
    impact: 'Conversion Rate',
  },
];

const ADDITIONAL_COSTS = [
  { item: 'Domain Name Registration', type: 'Annual', est: '₹800 – ₹1,500/yr', desc: 'Standard .com or .in domain from registrar like Cloudflare or Namecheap.' },
  { item: 'High-Speed Web Hosting', type: 'Recurring', est: '₹0 (Static) / ₹3,000 – ₹15,000/yr (VPS/Cloud)', desc: 'Fast hosting or serverless CDN with SSD storage and low latency.' },
  { item: 'SSL Security Certificate', type: 'Security', est: '₹0 (Free via Let\'s Encrypt)', desc: 'Never pay extra for standard SSL certificates — reputable partners configure this free.' },
  { item: 'Payment Gateway Fees', type: 'Per Transaction', est: '1.8% – 2.5% per sale', desc: 'Charged by payment gateways like Razorpay, Cashfree, or Stripe on successful transactions.' },
  { item: 'Business Email Hosting', type: 'Annual / Monthly', est: '₹125 – ₹250/user/mo', desc: 'Google Workspace or Zoho Mail for professional contact@yourdomain.com addresses.' },
  { item: 'Premium Plugins & Software Licenses', type: 'Optional Annual', est: '₹3,000 – ₹20,000/yr', desc: 'Specialized enterprise plugins, Shopify apps, or proprietary booking widgets if needed.' },
  { item: 'Professional Copywriting', type: 'One-Time', est: '₹10,000 – ₹35,000', desc: 'Strategic conversion-driven copy for key landing pages if not provided by client.' },
  { item: 'Post-Launch Maintenance & Backups', type: 'Ongoing Care', est: '₹3,000 – ₹12,000/mo', desc: 'Regular security patches, database backups, uptime monitoring, and minor content adjustments.' },
];

const QUESTIONS_LIST = [
  'What specific deliverables and source files are included in the scope?',
  'Is bespoke UI/UX design included, or are you customizing a ready-made template?',
  'Is the website engineered to be 100% responsive across mobile, tablet, and ultra-wide screens?',
  'Which technology or CMS will you use, and why is it right for my business?',
  'Who owns the website code, domain, design assets, and database after completion?',
  'Will our team receive full administrator access and training to update text and media?',
  'Are payment gateways, WhatsApp chat, and lead capture integrations included in the quoted fee?',
  'Is baseline technical SEO (schema markup, meta tags, sitemaps) included in the setup?',
  'What Google PageSpeed / Core Web Vitals benchmarks do you commit to delivering?',
  'What warranty or post-launch technical support is included after the website goes live?',
  'How are revision rounds, feedback cycles, and scope adjustments handled?',
  'What recurring platform or third-party costs will our business need to pay separately?',
];

const FAQS = [
  {
    q: 'How much does a website cost in India in 2026?',
    a: 'In 2026, professional website development in India generally ranges from ₹25,000 to ₹65,000 for standard business websites, ₹60,000 to ₹1,50,000 for corporate or B2B websites, ₹45,000 to ₹2,20,000 for e-commerce stores, and ₹1,00,000 to ₹4,50,000+ for custom web applications. The final cost depends directly on page count, bespoke UI/UX design depth, integrations, and performance benchmarks.',
  },
  {
    q: 'What is typically included in a professional website development package?',
    a: 'A complete professional build includes project discovery, information architecture, custom UI/UX prototyping, responsive frontend engineering, CMS configuration, lead capture forms, WhatsApp/CRM integrations, performance optimization for 95+ Core Web Vitals, technical schema markup, cross-browser testing, deployment, and post-launch warranty.',
  },
  {
    q: 'How long does it take to develop a professional website?',
    a: 'A streamlined business website typically takes 2 to 3 weeks from discovery to launch. Comprehensive corporate portals and e-commerce stores require 4 to 7 weeks, while advanced custom web applications with complex databases require 8 to 14 weeks. Timelines are heavily influenced by how quickly content and feedback are provided.',
  },
  {
    q: 'Is WordPress cheaper than custom website development?',
    a: 'WordPress can offer faster initial setup times for standard content-heavy websites, making the entry cost lower. However, heavily customized WordPress builds with dozens of commercial plugins, security hardening, and WooCommerce setups can equal or exceed the cost of clean, modern custom codebases—which often offer superior security, higher speed, and zero plugin subscription bloat.',
  },
  {
    q: 'How much does a Shopify website cost to build in India?',
    a: 'Shopify development typically ranges from ₹35,000 to ₹1,20,000+ for setup, custom liquid sections, product collection configurations, payment and shipping gateway integrations, and conversion-focused cart drawer experiences. Businesses should also factor in Shopify’s monthly platform subscription and any optional third-party app charges.',
  },
  {
    q: 'How much does an e-commerce website cost?',
    a: 'E-commerce website development costs range between ₹45,000 and ₹2,20,000 depending on catalog size, product variant complexity, multi-currency needs, payment gateway configurations (Razorpay, Stripe), automated shipping calculations (Shiprocket), customer accounts, and discount engine integration.',
  },
  {
    q: 'Should I redesign my existing website or rebuild it from scratch?',
    a: 'If your existing website is on modern infrastructure but suffers from outdated typography or visual hierarchy, a visual redesign may suffice. However, if your website suffers from severe page load lag, legacy theme builder bloat, poor mobile responsiveness, or broken code, rebuilding on a clean modern stack is faster, more cost-effective, and safeguards long-term growth with proper 301 redirect mapping.',
  },
  {
    q: 'How do I get an accurate website development quote for my business?',
    a: 'The most reliable way is to prepare a brief outlining your primary business objective, target audience, list of mandatory pages, desired interactive features (e.g., booking, search, payment), and brand references. A transparent developer will provide a line-item quotation based on your exact deliverables rather than a vague ballpark estimate.',
  },
];

const RELATED_SERVICES = [
  { title: 'Website Development', desc: 'Fast, responsive corporate websites engineered for authority and business growth.', url: '/services/website-development/' },
  { title: 'Custom Website Development', desc: 'Bespoke web applications and portals built without theme or template limitations.', url: '/services/custom-website-development/' },
  { title: 'WordPress Development', desc: 'High-performance, easy-to-manage WordPress sites built with clean code and no bloat.', url: '/services/wordpress-development/' },
  { title: 'Shopify Development', desc: 'Conversion-optimized Shopify storefronts with tailored liquid sections and checkout flows.', url: '/services/shopify-development/' },
  { title: 'E-commerce Development', desc: 'End-to-end digital commerce stores with scalable catalogs and automated gateways.', url: '/services/ecommerce-development/' },
  { title: 'Website Redesign', desc: 'Transform outdated, slow sites into fast, modern assets with zero SEO disruption.', url: '/services/website-redesign/' },
  { title: 'UI/UX Design', desc: 'Strategic wireframing, component design systems, and high-fidelity Figma prototypes.', url: '/services/ui-ux-design/' },
];

const RELATED_ARTICLES = [
  {
    title: 'How to Choose the Right Website Development Company for Your Business',
    tag: 'Coming Soon',
    desc: 'The founder\'s evaluation checklist for vetting developers, understanding agency proposals, and avoiding costly delivery traps.',
  },
  {
    title: '10 Signs Your Business Website Needs a Redesign',
    tag: 'Coming Soon',
    desc: 'Key technical and commercial indicators showing when an underperforming website is silently costing you clients.',
  },
  {
    title: 'WordPress vs Custom Website: Which Is Right for Your Business?',
    tag: 'Coming Soon',
    desc: 'An objective architectural comparison of speed, maintenance, security, and long-term total cost of ownership.',
  },
  {
    title: 'Shopify vs WooCommerce: Which E-commerce Platform Should You Choose?',
    tag: 'Coming Soon',
    desc: 'Detailed breakdown of transaction fees, developer flexibility, hosting demands, and scale limits in 2026.',
  },
  {
    title: 'How to Build a B2B Website That Generates More Enquiries',
    tag: 'Coming Soon',
    desc: 'High-converting information architectures and RFQ workflows tailored for manufacturers, exporters, and industrial firms.',
  },
];

export default function WebsiteDevelopmentCostArticle() {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('how-much-does-website-development-cost');
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [checkedQuestions, setCheckedQuestions] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      const scrollPosition = window.scrollY + 200;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(TOC_ITEMS[i].id);
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(TOC_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheck = (idx) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Website Development Cost in India in 2026: Complete Pricing Guide',
        description:
          'How much does website development cost in India in 2026? Explore website pricing, development types, features, timelines and factors that affect the final cost.',
        author: {
          '@type': 'Organization',
          name: 'Dynamic Designing',
          url: 'https://www.dynamicdesigninng.com/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dynamic Designing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.dynamicdesigninng.com/favicon.png',
          },
        },
        datePublished: '2026-09-01T00:00:00+05:30',
        dateModified: '2026-09-29T15:30:00+05:30',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': CURRENT_URL,
        },
        image: 'https://www.dynamicdesigninng.com/images/website-development-cost-india-2026.webp',
        keywords: [
          'website development cost in India',
          'website development cost India 2026',
          'website development price in India',
          'website design cost in India',
          'business website cost in India',
          'website development charges',
          'cost of building a website in India',
          'professional website development cost',
          'custom website development cost',
          'WordPress website cost in India',
          'Shopify website cost in India',
          'e-commerce website development cost',
        ].join(', '),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.dynamicdesigninng.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://www.dynamicdesigninng.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Website Development Cost in India in 2026: Complete Pricing Guide',
            item: CURRENT_URL,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  };

  return (
    <article className="min-h-screen pt-24 pb-20 relative text-white selection:bg-neon-blue/30 selection:text-white">
      <SEOHead
        title="Website Development Cost in India 2026: Complete Pricing Guide | Dynamic Designing"
        description="How much does website development cost in India in 2026? Explore website pricing, development types, features, timelines and factors that affect the final cost."
        canonicalUrl={CURRENT_URL}
        ogType="article"
        schemaData={articleSchema}
      />

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-neon-blue via-indigo-500 to-neon-purple z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Ambient background glows */}
      <div className="glow-orb w-[700px] h-[700px] bg-neon-blue/10 top-0 left-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/8 top-1/3 right-[-150px] pointer-events-none" />

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-white/8 text-xs text-white/70">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-neon-blue transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="hover:text-neon-blue transition-colors">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90 truncate max-w-[200px] sm:max-w-xs" aria-current="page">
                Website Development Cost in India 2026
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-card border border-white/10 hover:border-neon-blue/30 text-white/80 hover:text-white transition-all text-xs"
              title="Copy Guide Link"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Share2 size={13} />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* EDITORIAL HERO SECTION */}
        <header className="mb-12 md:mb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-neon-blue/30 text-neon-blue text-xs font-mono font-semibold uppercase tracking-wider mb-5">
              <span>WEBSITE DEVELOPMENT GUIDE • 2026</span>
            </div>

            <h1 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white leading-[1.18] tracking-tight mb-6">
              Website Development Cost in India in 2026:{' '}
              <span className="text-gradient">Complete Pricing Guide</span>
            </h1>

            <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed font-sans mb-8">
              How much does it really cost to build a website in India in 2026? The answer depends on the type of website, design requirements, features, technology, integrations and level of customization. This guide breaks down the major factors that influence website development pricing so you can plan your project with confidence.
            </p>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-white/60 pt-4 border-t border-white/8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center font-display font-bold text-[10px] text-white">
                  DD
                </div>
                <span className="font-medium text-white/90">Dynamic Designing</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar size={13} className="text-neon-blue/80" />
                <span>Published: September 2026</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="text-neon-blue/80" />
                <span>10–12 min read</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-neon-blue font-medium">
                <Globe size={13} />
                <span>Category: Website Development</span>
              </div>
            </div>
          </div>

          {/* HERO IMAGE: Realistic multi-device business website showcase */}
          <div className="mt-10 rounded-2xl overflow-hidden glass-card border border-white/10 relative group">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden relative bg-[#080b18]">
              <img
                src={heroMockupImg}
                alt="Website development cost in India 2026 guide showing responsive business website design"
                className="w-full h-full object-cover object-top opacity-95 group-hover:scale-[1.01] transition-transform duration-700"
                loading="eager"
                width={1200}
                height={550}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent pointer-events-none" />

              {/* Live Telemetry Floating Badges */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto flex flex-wrap gap-2 pointer-events-none">
                <div className="glass-card px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono flex items-center gap-2 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/80">PageSpeed Target: 95+</span>
                </div>
                <div className="glass-card px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono flex items-center gap-2 backdrop-blur-md">
                  <Cpu size={13} className="text-neon-blue" />
                  <span className="text-white/80">Clean Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ARTICLE SUMMARY CARD: AT A GLANCE */}
        <aside className="mb-14 rounded-2xl glass-card p-6 sm:p-8 border border-neon-blue/20 bg-gradient-to-br from-neon-blue/[0.04] via-transparent to-neon-purple/[0.03]">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center text-neon-blue">
              <Zap size={16} />
            </div>
            <h2 className="font-display font-700 text-lg sm:text-xl text-white">At a Glance</h2>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Typical website cost depends on a combination of technical depth and creative fidelity:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-white/80 mb-6">
            {[
              'Website Type',
              'Design Complexity',
              'Number of Pages',
              'Custom Features',
              'CMS / Platform',
              'Integrations',
              'Content Assets',
              'SEO Requirements',
              'Ongoing Maintenance',
            ].map((factor) => (
              <div key={factor} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.02] border border-white/5">
                <CheckCircle2 size={13} className="text-neon-blue shrink-0" />
                <span className="truncate">{factor}</span>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/8 text-xs text-white/70 leading-relaxed">
            <strong className="text-neon-blue font-semibold">Important Note: </strong>
            There is no single fixed price for website development. A simple informational business website and a custom e-commerce or customer portal have completely different engineering scopes, security standards, and production hours.
          </div>
        </aside>

        {/* MOBILE TABLE OF CONTENTS ACCORDION (< 1024px) */}
        <div className="lg:hidden mb-12">
          <div className="rounded-xl glass-card border border-white/10 overflow-hidden">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="w-full p-4 flex items-center justify-between text-left text-sm font-display font-semibold text-white hover:text-neon-blue transition-colors"
            >
              <span className="flex items-center gap-2">
                <Layers size={16} className="text-neon-blue" />
                <span>In This Guide ({TOC_ITEMS.length} Sections)</span>
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${isMobileTocOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isMobileTocOpen && (
              <div className="p-4 pt-0 border-t border-white/5 space-y-1 text-xs">
                {TOC_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileTocOpen(false)}
                    className="block py-1.5 px-2 rounded hover:bg-white/5 text-white/70 hover:text-neon-blue transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT: Content (Left) + Sticky Navigation / Sidebar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* MAIN EDITORIAL CONTENT (Left Column: 760–850px reading measure) */}
          <main className="lg:col-span-8 w-full max-w-[820px] space-y-16">
            {/* INTRODUCTION */}
            <section className="space-y-4 text-white/80 leading-relaxed text-base sm:text-lg">
              <p>
                Website development pricing in India can vary significantly depending on what you are building.
              </p>
              <p>
                A small business website with a few informational pages requires a very different level of work compared with a custom B2B platform, Shopify store or large e-commerce website.
              </p>
              <p>
                The final cost is influenced by factors such as design complexity, number of pages, functionality, platform, integrations, content, SEO requirements, performance expectations and ongoing maintenance.
              </p>
              <p>
                This guide explains the major website development cost factors in India in 2026 so you can understand what you are paying for and choose an approach that fits your business.
              </p>
            </section>

            {/* SECTION 1 */}
            <section id="how-much-does-website-development-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                How Much Does Website Development Cost in India?
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                There is no single price for a website because every project has different requirements. The cost can range from a relatively small investment for a simple informational website to a much larger budget for a custom website or e-commerce platform.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Instead of looking only at the final price, it is more useful to understand what is included in the project. A professional website project typically includes:
              </p>

              {/* What's Included Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Website strategy & competitor audit',
                  'Information architecture & wireframing',
                  'Bespoke UI/UX responsive design',
                  'Clean frontend development (Modern CSS)',
                  'Content Management System (CMS) implementation',
                  'Contact, lead capture & inquiry forms',
                  'Payment gateway & transaction configurations',
                  'Shipping provider & tracking integrations',
                  'Third-party CRM & analytics tracking',
                  'SEO-conscious semantic HTML & schema',
                  'Core Web Vitals & performance optimization',
                  'Cross-browser and mobile device testing',
                  'Production deployment & SSL setup',
                  'Post-launch warranty & documentation support',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/8 text-xs text-white/80">
                    <Check size={14} className="text-neon-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/70 text-sm italic pt-2">
                The more functionality and customization your business requires, the more development time and expertise may be involved.
              </p>
            </section>

            {/* SECTION 2 */}
            <section id="cost-by-website-type" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                Website Development Cost by Website Type
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Different website categories serve fundamentally different business models. Below is a structured comparison of typical website types, common use cases, and their primary cost drivers.
              </p>

              {/* Responsive Table */}
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs min-w-[620px]">
                  <thead className="bg-white/[0.04] text-white/90 font-display font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-3.5">Website Type</th>
                      <th className="p-3.5">Complexity</th>
                      <th className="p-3.5">Common Use</th>
                      <th className="p-3.5">Main Cost Factors</th>
                      <th className="p-3.5 whitespace-nowrap">Indicative Ranges*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/70">
                    {WEBSITE_TYPES_TABLE.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 font-medium text-white">{row.type}</td>
                        <td className="p-3.5">
                          <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-neon-blue">
                            {row.complexity}
                          </span>
                        </td>
                        <td className="p-3.5 max-w-[200px]">{row.use}</td>
                        <td className="p-3.5 max-w-[220px]">{row.factors}</td>
                        <td className="p-3.5 font-mono text-neon-blue font-semibold whitespace-nowrap">{row.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Real Project Visual Callout: NOVA Care Clinic */}
              <div className="rounded-2xl overflow-hidden glass-card border border-white/8 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-5 sm:p-6">
                  <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[16/10] bg-[#080b18]">
                    <img
                      src={novaCareImg}
                      alt="Custom healthcare and corporate website design by Dynamic Designing"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neon-blue font-semibold">
                      Real Case Study • NOVA Care Clinic
                    </span>
                    <h3 className="font-display font-700 text-base text-white">
                      Corporate & Healthcare Web Experience
                    </h3>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Custom interactive doctor triage search, chair availability booking engine, and clean responsive layout designed for high conversion and credibility.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/nova-care/"
                        className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Live Interactive Demo</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/8 text-xs text-white/60">
                <strong className="text-white/80">Indicative Project Ranges Note: </strong>
                Prices shown above represent indicative market ranges for professional Indian studios in 2026. Actual quotations depend entirely on unique project scope, API complexity, creative depth, and turnaround requirements.
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="what-determines-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                What Determines Website Development Cost?
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Understanding these eight core drivers helps you evaluate agency proposals and prioritize where to invest your digital budget.
              </p>

              {/* Numbered Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COST_DRIVERS.map((driver) => (
                  <div
                    key={driver.num}
                    className="p-5 rounded-2xl glass-card border border-white/8 hover:border-neon-blue/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm font-bold text-neon-blue/80">{driver.num}</span>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-white/60">
                          {driver.impact}
                        </span>
                      </div>
                      <h3 className="font-display font-700 text-base text-white mb-2">{driver.title}</h3>
                      <p className="text-white/65 text-xs sm:text-sm leading-relaxed">{driver.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="design-vs-development-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                Website Design vs. Website Development Cost
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Many clients use &quot;web design&quot; and &quot;web development&quot; interchangeably, but they represent two distinct disciplines that make up a complete website project.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
                  <div className="flex items-center gap-2.5 text-neon-blue">
                    <Palette size={18} />
                    <h3 className="font-display font-700 text-base text-white">Website Design (UI/UX)</h3>
                  </div>
                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
                    Focuses on the visual and cognitive experience: user journey mapping, information architecture, wireframing, high-fidelity prototypes, brand color schemes, typography pairings, and responsive component libraries.
                  </p>
                </div>

                <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
                  <div className="flex items-center gap-2.5 text-neon-purple">
                    <Code2 size={18} />
                    <h3 className="font-display font-700 text-base text-white">Website Development (Engineering)</h3>
                  </div>
                  <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
                    Focuses on turning design into interactive software: clean frontend code, CMS wiring, database schemas, third-party API hooks, lead capture forms, payment security, cross-browser compatibility, and speed optimization.
                  </p>
                </div>
              </div>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                For a professional website, both should be considered as parts of the same project rather than isolated activities.
              </p>

              {/* Contextual Link */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs sm:text-sm text-white/80">
                  Looking for interface wireframing, visual identity, and design systems?
                </span>
                <Link
                  to="/services/ui-ux-design/"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-display font-semibold text-neon-blue hover:text-white transition-colors"
                >
                  <span>Explore UI/UX Design</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="wordpress-website-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                WordPress Website Cost in India
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                WordPress is commonly used for business websites because it provides a flexible content management system and a large ecosystem.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                The total cost varies substantially depending on whether an agency installs a generic pre-made template or authors a bespoke, lightweight WordPress theme tailored to your brand:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-white/75 list-disc pl-5">
                <li><strong className="text-white">Custom vs Template Design:</strong> Custom blocks eliminate bloated visual builder code and boost Core Web Vitals scores.</li>
                <li><strong className="text-white">Plugin Architecture:</strong> Over-reliance on 30+ plugins creates security liabilities and recurring licensing fees.</li>
                <li><strong className="text-white">WooCommerce Add-ons:</strong> Product catalogs, payment gateways, and shipping rules introduce e-commerce configuration scope.</li>
                <li><strong className="text-white">Security & Caching:</strong> Enterprise hardening, automated backups, and Redis/Cloudflare caching configurations.</li>
              </ul>

              {/* WordPress CTA Card */}
              <div className="p-6 rounded-2xl glass-card border border-neon-blue/30 bg-neon-blue/[0.03] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <h3 className="font-display font-700 text-base text-white mb-1">
                    Need a professional WordPress website?
                  </h3>
                  <p className="text-white/65 text-xs sm:text-sm">
                    Flexible, easy-to-manage WordPress platforms engineered with zero bloat.
                  </p>
                </div>
                <Link
                  to="/services/wordpress-development/"
                  className="btn-primary py-2.5 px-5 text-xs shrink-0 inline-flex items-center gap-1.5"
                >
                  <span>WordPress Services</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="shopify-website-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                Shopify Website Cost in India
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Shopify operates on a hosted software-as-a-service (SaaS) subscription model. While Shopify handles core server hosting and checkout security, development services generally involve:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-white/80">
                {[
                  'Store setup & brand theming',
                  'Bespoke Liquid OS 2.0 sections',
                  'High-converting product detail pages',
                  'Collection filtering & search',
                  'Slide-out Ajax cart drawers',
                  'Razorpay / Cashfree integration',
                  'Shiprocket & logistics tracking',
                  'Product catalog migration',
                  'Email & WhatsApp recovery flows',
                ].map((task, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/8 flex items-center gap-2">
                    <ShoppingCart size={13} className="text-neon-blue shrink-0" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>

              <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                Remember that monthly Shopify plan subscriptions ($39/mo to $399/mo) and paid third-party app subscriptions are separate from agency development fees.
              </p>

              <div className="pt-2">
                <Link
                  to="/services/shopify-development/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-neon-blue hover:text-white transition-colors"
                >
                  <span>Explore Shopify Development Services</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </section>

            {/* SECTION 7 */}
            <section id="ecommerce-website-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                E-commerce Website Development Cost in India
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                E-commerce websites typically require significantly more functionality and rigorous testing than informational business websites. Every step of the transactional funnel must be safeguarded.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Key building blocks that directly impact total development investment include:
              </p>

              <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
                <h3 className="font-display font-700 text-sm uppercase tracking-wider text-neon-blue">
                  Core E-commerce Technical Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/75">
                  <div className="space-y-2">
                    <p>• Multi-level product categories & taxonomies</p>
                    <p>• Variant matrices (Size, Color, Material, SKU)</p>
                    <p>• Dynamic multi-attribute filtering & live search</p>
                    <p>• Slide-out quick view & cart drawer previews</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Automated shipping & pincode serviceability checks</p>
                    <p>• Discount engine, coupon validations & bundles</p>
                    <p>• Secure payment gateway webhooks & refunds</p>
                    <p>• Customer account dashboards & order history</p>
                  </div>
                </div>
              </div>

              {/* Aurelia Luxury Atelier Showcase */}
              <div className="rounded-2xl overflow-hidden glass-card border border-white/8 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-5 sm:p-6">
                  <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[16/10] bg-[#080b18]">
                    <img
                      src={aureliaImg}
                      alt="Luxury boutique e-commerce and booking website by Dynamic Designing"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neon-blue font-semibold">
                      Live Case Study • Aurelia Beauty Studio
                    </span>
                    <h3 className="font-display font-700 text-base text-white">
                      Editorial Luxury Atelier & Direct Bookings
                    </h3>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Custom treatment menus, master artist portfolios, and real-time appointment scheduling that converts first-time visitors into loyal clients.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/aurelia-beauty-studio/"
                        className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Live Demo</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/ecommerce-development/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-neon-blue hover:text-white transition-colors"
                >
                  <span>Explore E-commerce Development Services</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="custom-website-development-cost" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                Custom Website Development Cost
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                When an off-the-shelf platform or ready-made template imposes artificial limits on your business workflows, custom development provides purpose-built digital infrastructure.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Custom development is appropriate for:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80">
                {[
                  'Unique multi-step customer booking engines',
                  'Internal portals & role-based dashboards',
                  'Interactive price calculators & quotation tools',
                  'Complex database models with custom logic',
                  'Headless architectures',
                  'Custom REST & GraphQL API integrations',
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/8 flex items-center gap-2.5">
                    <Cpu size={14} className="text-neon-blue shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* MOVEHOUSE Sanctuary Showcase */}
              <div className="rounded-2xl overflow-hidden glass-card border border-white/8 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-5 sm:p-6">
                  <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[16/10] bg-[#080b18]">
                    <img
                      src={movehouseImg}
                      alt="High-performance custom web platform by Dynamic Designing"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neon-blue font-semibold">
                      Live Case Study • MOVEHOUSE
                    </span>
                    <h3 className="font-display font-700 text-base text-white">
                      Custom Modality Filtering & Class Timetable
                    </h3>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Custom Allegro reformer timetable engine, coach rosters, and membership funnel built with sub-second page transitions.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/movehouse/"
                        className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>View Live Demo</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/services/custom-website-development/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-neon-blue hover:text-white transition-colors"
                >
                  <span>Explore Custom Website Development</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="additional-website-costs" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                Additional Website Costs You Should Know About
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                To budget effectively, business owners must distinguish between <strong className="text-white">one-time development investments</strong> and <strong className="text-white">ongoing business operational costs</strong>. Not every project needs all of these, but knowing them prevents surprises:
              </p>

              {/* Additional Costs Table / Cards */}
              <div className="space-y-3 pt-2">
                {ADDITIONAL_COSTS.map((cost, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass-card border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-white text-sm">{cost.item}</span>
                        <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] text-white/60 font-mono">
                          {cost.type}
                        </span>
                      </div>
                      <p className="text-white/60">{cost.desc}</p>
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <span className="font-mono text-neon-blue font-semibold">{cost.est}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="how-long-does-it-take" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                How Long Does Website Development Take?
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Realistic timelines depend directly on project scope, content readiness, design feedback cycles, and integration requirements.
              </p>

              {/* Visual Project Timeline */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-6">
                <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block">
                  The 6-Phase Delivery Framework
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { step: '01', name: 'Discovery', time: 'Days 1–4', desc: 'Objectives, audience, tech stack, site architecture' },
                    { step: '02', name: 'Structure', time: 'Days 5–8', desc: 'Wireframing, UX flows, copy hierarchy, content prep' },
                    { step: '03', name: 'Design', time: 'Days 9–15', desc: 'High-fidelity UI, typography, component library' },
                    { step: '04', name: 'Development', time: 'Days 16–25', desc: 'Clean coding, CMS setup, interactive features' },
                    { step: '05', name: 'Testing', time: 'Days 26–28', desc: 'Mobile QA, browser checks, PageSpeed optimization' },
                    { step: '06', name: 'Launch', time: 'Days 29–30', desc: 'DNS pointing, SSL validation, analytics, handover' },
                  ].map((phase) => (
                    <div key={phase.step} className="p-4 rounded-xl bg-white/[0.02] border border-white/8">
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-mono font-bold text-neon-blue">{phase.step}</span>
                        <span className="text-[11px] font-mono text-white/50">{phase.time}</span>
                      </div>
                      <h4 className="font-display font-700 text-sm text-white mb-1">{phase.name}</h4>
                      <p className="text-white/60 text-xs">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 11 */}
            <section id="choose-right-package" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                How to Choose the Right Website Development Package
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Before evaluating quotes, write down your operational priorities across these ten dimensions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/75">
                {[
                  '1. Core business objective (Authority vs. Direct Leads vs. E-commerce)',
                  '2. Target demographic & primary browsing devices',
                  '3. Exact page roster (Homepage, About, Services, Case Studies)',
                  '4. Required interactive features (Booking, Chat, Search, Forms)',
                  '5. Desired CMS platform for in-house editing',
                  '6. Content readiness (Do you have copy and photography?)',
                  '7. Third-party integrations (CRM, WhatsApp, Payment Gateways)',
                  '8. Technical SEO & Core Web Vitals expectations',
                  '9. Delivery deadline & launch milestone',
                  '10. Anticipated growth & feature expansion over the next 2 years',
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                    {item}
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                <strong>Founder&apos;s Rule: </strong> Don&apos;t choose a website package solely because it has the lowest upfront price. Compare scope, design uniqueness, mobile responsiveness, Core Web Vitals guarantees, code ownership, and post-launch support.
              </div>
            </section>

            {/* SECTION 12 */}
            <section id="reduce-costs-without-sacrificing-quality" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                How to Reduce Website Development Costs Without Sacrificing Quality
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Smart cost reduction is about efficiency and clarity, not cutting corners on code quality or mobile responsiveness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Start With a Concrete Scope',
                    desc: 'Scope creep and changing requirements mid-development multiply project hours. Finalize your page roster and feature list upfront.',
                  },
                  {
                    title: 'Prepare Content Early',
                    desc: 'Organize high-resolution logos, brand imagery, service descriptions, and pricing tiers in Google Drive before coding commences.',
                  },
                  {
                    title: 'Prioritize Core Features (MVP)',
                    desc: 'Launch essential high-impact features first. You can add complex calculators or secondary integrations in Phase 2.',
                  },
                  {
                    title: 'Choose the Right Platform',
                    desc: 'Don\'t commission expensive custom database software when a clean WordPress setup or Shopify store solves your exact need.',
                  },
                  {
                    title: 'Design Before Development',
                    desc: 'Approving wireframes and high-fidelity Figma screens first prevents costly rewrites in frontend code later.',
                  },
                  {
                    title: 'Think Long-Term TCO',
                    desc: 'A cheap ₹10,000 template site that breaks every month and repels high-ticket clients is far more expensive over 3 years than a reliable custom build.',
                  },
                ].map((tip, idx) => (
                  <div key={idx} className="p-5 rounded-xl glass-card border border-white/8 space-y-2">
                    <h3 className="font-display font-700 text-sm text-white">{tip.title}</h3>
                    <p className="text-white/65 text-xs leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 13 */}
            <section id="questions-to-ask-before-hiring" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                Questions to Ask Before Hiring a Website Developer
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Use this interactive due diligence checklist when vetting potential developers or agencies. Click each item to check it off during your consultation:
              </p>

              {/* Interactive Checklist */}
              <div className="space-y-2 pt-2">
                {QUESTIONS_LIST.map((question, idx) => {
                  const isChecked = !!checkedQuestions[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleCheck(idx)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3 text-xs sm:text-sm select-none ${
                        isChecked
                          ? 'bg-neon-blue/10 border-neon-blue/40 text-white'
                          : 'bg-white/[0.02] border-white/8 text-white/75 hover:border-white/20'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare size={16} className="text-neon-blue shrink-0" />
                      ) : (
                        <Square size={16} className="text-white/40 shrink-0" />
                      )}
                      <span className={isChecked ? 'line-through text-white/50' : ''}>
                        {idx + 1}. {question}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 14 */}
            <section id="when-to-invest" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                When Should You Invest in a Professional Website?
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                For established businesses, a professional website is an active digital salesperson rather than an expense. You should consider investing in a dedicated build when:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80">
                {[
                  'Your website represents your primary customer acquisition channel',
                  'Your current website looks outdated and undermines your pricing power',
                  'Visitors struggle to navigate your service offerings on mobile phones',
                  'You are launching a new high-ticket product, branch, or premium brand',
                  'Your business is expanding into online orders or digital commerce',
                  'Legacy plugins, slow speeds, or security breaches threaten business operations',
                  'Competitors with modern websites are winning deals in your regional market',
                  'Your digital presence fails to reflect the true quality and craft of your company',
                ].map((trigger, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 flex items-start gap-2.5">
                    <TrendingUp size={15} className="text-neon-blue shrink-0 mt-0.5" />
                    <span>{trigger}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 15 — FAQ */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
                  Pricing Clarity
                </span>
                <h2 className="font-display font-800 text-2xl sm:text-3xl text-white mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-xl glass-card border border-white/8 overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-sm sm:text-base text-white hover:text-neon-blue transition-colors"
                        >
                          <span>{faq.q}</span>
                          <ChevronDown
                            size={16}
                            className={`shrink-0 text-neon-blue transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5 pt-3"
                            >
                              {faq.a}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* FINAL CONVERSION SECTION */}
            <section className="pt-10">
              <div className="rounded-3xl p-8 sm:p-12 glass-card border border-neon-blue/30 bg-gradient-to-br from-neon-blue/[0.07] via-[#080b18] to-neon-purple/[0.05] relative overflow-hidden">
                <div className="glow-orb w-64 h-64 bg-neon-blue/15 -top-10 -right-10 pointer-events-none" />

                <div className="max-w-2xl relative z-10 space-y-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-mono font-semibold uppercase">
                    Take the Next Step
                  </span>
                  <h2 className="font-display font-800 text-2xl sm:text-3xl md:text-4xl text-white">
                    Planning a New Website for Your Business?
                  </h2>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Every business has different requirements, which is why website development should start with understanding the project rather than choosing a generic package.
                  </p>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Tell us what you&apos;re building, what you need your website to achieve and what functionality you require. We&apos;ll help you determine the right approach for your project.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link to="/contact/" className="btn-primary py-3 px-7 text-xs sm:text-sm inline-flex items-center gap-2">
                      <Sparkles size={15} />
                      <span>Discuss Your Project</span>
                    </Link>
                    <Link
                      to="/services/website-development/"
                      className="btn-secondary py-3 px-6 text-xs sm:text-sm inline-flex items-center gap-2"
                    >
                      <span>Explore Website Development</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* STICKY SIDEBAR (Desktop: >= 1024px) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            {/* Table of Contents Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/8">
                <span className="font-display font-700 text-xs uppercase tracking-wider text-neon-blue flex items-center gap-2">
                  <Layers size={14} />
                  <span>In This Guide</span>
                </span>
                <span className="font-mono text-[11px] text-white/50">{Math.round(scrollProgress)}% read</span>
              </div>

              <nav className="space-y-1 max-h-[380px] overflow-y-auto pr-1 text-xs">
                {TOC_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block py-1.5 px-2.5 rounded-lg transition-all duration-200 truncate ${
                        isActive
                          ? 'bg-neon-blue/15 text-neon-blue font-semibold border-l-2 border-neon-blue'
                          : 'text-white/60 hover:text-white hover:bg-white/[0.03]'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Quick Consultation Widget */}
            <div className="p-6 rounded-2xl glass-card border border-neon-blue/20 bg-gradient-to-b from-neon-blue/[0.04] to-transparent space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neon-blue font-semibold block">
                Direct Consultation
              </span>
              <h3 className="font-display font-700 text-base text-white">
                Need an Accurate Quote for Your Website?
              </h3>
              <p className="text-white/65 text-xs leading-relaxed">
                Connect directly with lead designer Gaurav Nagar to discuss your project scope, features, and timeline.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20discuss%20a%20website%20development%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 transition-all text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle size={14} />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  to="/contact/"
                  className="w-full py-2.5 px-4 rounded-xl glass-card border border-white/10 hover:border-neon-blue/30 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <span>Request Written Proposal</span>
                </Link>
              </div>
            </div>

            {/* Core Services Quick Links */}
            <div className="p-5 rounded-2xl glass-card border border-white/8 space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 font-semibold block">
                Related Services
              </span>
              <div className="space-y-1 text-xs">
                {[
                  { name: 'Website Development', url: '/services/website-development/' },
                  { name: 'Custom Website Dev', url: '/services/custom-website-development/' },
                  { name: 'WordPress Development', url: '/services/wordpress-development/' },
                  { name: 'Shopify Development', url: '/services/shopify-development/' },
                  { name: 'E-commerce Development', url: '/services/ecommerce-development/' },
                  { name: 'Website Redesign', url: '/services/website-redesign/' },
                  { name: 'UI/UX Design', url: '/services/ui-ux-design/' },
                ].map((s) => (
                  <Link
                    key={s.name}
                    to={s.url}
                    className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/[0.03] text-white/70 hover:text-neon-blue transition-colors"
                  >
                    <span>{s.name}</span>
                    <ArrowRight size={11} className="text-white/30" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* RELATED SERVICES SECTION */}
        <section className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Capabilities
            </span>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-white">
              You May Also Need
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-2">
              Explore our core website design and development services built for long-term business performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {RELATED_SERVICES.map((service) => (
              <Link
                key={service.title}
                to={service.url}
                className="group p-5 rounded-2xl glass-card border border-white/8 hover:border-neon-blue/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-700 text-sm sm:text-base text-white mb-1.5 group-hover:text-neon-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-neon-blue group-hover:text-white font-semibold">
                  <span>Explore Service</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* RELATED ARTICLES: CONTINUE READING */}
        <section className="mt-20 pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
              Strategic Insights
            </span>
            <h2 className="font-display font-800 text-2xl sm:text-3xl text-white">
              Continue Reading
            </h2>
            <p className="text-white/60 text-xs sm:text-sm mt-2">
              Deep-dive publications on website design strategy, e-commerce, and high-conversion UX engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RELATED_ARTICLES.map((art, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-neon-blue border border-neon-blue/20">
                      {art.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-700 text-base text-white mb-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed">
                    {art.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-white/40 flex items-center justify-between">
                  <span>Editorial Series</span>
                  <span>In Production</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
