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
  CheckCircle2,
  TrendingUp,
  CheckSquare,
  Square,
  AlertTriangle,
  ShieldCheck
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import heroMockupImg from '../../assets/images/how-to-choose-website-development-company.webp';
import novaCareImg from '../../assets/images/nova_care.webp';
import movehouseImg from '../../assets/images/movehouse_fitness.webp';
import aureliaImg from '../../assets/images/aurelia_beauty.webp';
import aravaliImg from '../../assets/images/Frame 3.webp';

const CURRENT_URL = 'https://www.dynamicdesigninng.com/blog/how-to-choose-website-development-company/';

const TOC_ITEMS = [
  { id: 'start-with-business-goals', label: '1. Start With Your Business Goals' },
  { id: 'look-at-portfolio', label: '2. Look at Their Portfolio' },
  { id: 'check-industry-experience', label: '3. Check Industry Experience' },
  { id: 'development-approach', label: '4. Development Approach' },
  { id: 'technology-recommendation', label: '5. Technology Recommendations' },
  { id: 'ui-ux-responsive-design', label: '6. UI/UX & Responsive Design' },
  { id: 'ask-about-seo', label: '7. Ask About SEO' },
  { id: 'website-performance', label: '8. Website Performance' },
  { id: 'development-process', label: '9. The Development Process' },
  { id: 'compare-pricing-scope', label: '10. Compare Pricing & Scope' },
  { id: 'check-website-ownership', label: '11. Ownership & Access Rights' },
  { id: 'support-maintenance', label: '12. Support & Maintenance' },
  { id: 'understand-timeline', label: '13. Understand Timelines' },
  { id: 'questions-to-ask', label: '14. 16 Questions to Ask Before Hiring' },
  { id: 'common-mistakes', label: '15. 8 Common Mistakes to Avoid' },
  { id: 'final-checklist', label: '16. Simple Evaluation Checklist' },
  { id: 'when-to-work-with-pro', label: '17. When to Hire a Pro Studio' },
  { id: 'why-dynamic-designing', label: '18. Why Businesses Choose Us' },
  { id: 'faq', label: '19. Frequently Asked Questions' },
];

const SHORT_CHECKLIST = [
  'Relevant, high-caliber live portfolio',
  'Deep understanding of your business goals',
  'Itemized and transparent project scope',
  'Appropriate technology recommendation',
  'True fluid responsive mobile design',
  'Clean semantic, SEO-friendly architecture',
  'Sub-second speed and Core Web Vitals focus',
  'Transparent, direct communication process',
  '100% intellectual property ownership and admin access',
  'Structured post-launch warranty and support',
  'Realistic milestone-based project timeline',
  'Transparent pricing without hidden extras',
];

const PRICING_SCOPE_COMPARISON = [
  {
    factor: 'Design Process',
    lowScope: 'Pre-made ₹2,000 theme or template install with stock photos',
    comprehensive: 'Bespoke UI/UX wireframing, custom typography, brand design system',
  },
  {
    factor: 'Frontend Development',
    lowScope: 'Bloated page builder (Elementor/Divi) with 30+ plugins',
    comprehensive: 'Clean semantic HTML5, modern frontend or lightweight custom theme',
  },
  {
    factor: 'Mobile Responsiveness',
    lowScope: 'Auto-scaled template with awkward wraps and tiny buttons',
    comprehensive: 'Meticulously crafted fluid layouts tailored for phone, tablet, and desktop',
  },
  {
    factor: 'Technical SEO',
    lowScope: 'Single free SEO plugin installed with generic default metadata',
    comprehensive: 'Structured schema markup, XML sitemap, canonical links, fast indexing audit',
  },
  {
    factor: 'Speed & Core Web Vitals',
    lowScope: 'Uncompressed JPEGs, render-blocking scripts, PageSpeed 30–50',
    comprehensive: 'WebP/AVIF asset pipeline, code-splitting, low TTFB, PageSpeed 95+',
  },
  {
    factor: 'Testing & QA',
    lowScope: 'Brief check on the developer\'s own laptop screen',
    comprehensive: 'Cross-browser testing (Chrome, Safari, Edge), iOS & Android physical checks',
  },
  {
    factor: 'Post-Launch Support',
    lowScope: 'Ghosting or extra hourly billing immediately upon final payment',
    comprehensive: '30-day post-launch warranty, CMS training video, ongoing maintenance option',
  },
];

const COMMON_MISTAKES = [
  {
    num: '01',
    title: 'Choosing Only Based on Price',
    desc: 'The cheapest quote almost always results in bloated templates, fragile code, zero commercial strategy, and expensive rebuilds within six months.',
  },
  {
    num: '02',
    title: 'Not Testing Live Previous Work',
    desc: 'Never judge a company solely by static screenshots. Open their past client websites on your own phone and test load speeds, menus, and buttons.',
  },
  {
    num: '03',
    title: 'Not Defining Project Scope Upfront',
    desc: 'Vague agreements lead to scope disputes, delayed launches, and surprise invoices for basic features like forms or mobile adjustments.',
  },
  {
    num: '04',
    title: 'Ignoring the Mobile Experience',
    desc: 'Over 70% of business web traffic happens on mobile devices. A website that looks impressive only on a laptop will fail to convert real customers.',
  },
  {
    num: '05',
    title: 'Choosing Technology Before Strategy',
    desc: 'Don\'t insist on complex custom software when WordPress fits, and don\'t force WooCommerce onto a high-volume D2C brand that needs Shopify.',
  },
  {
    num: '06',
    title: 'Neglecting Ownership & Admin Rights',
    desc: 'Some agencies register client domains or hosting under their own agency accounts, holding the business hostage when they want to change partners.',
  },
  {
    num: '07',
    title: 'Treating SEO as an "Afterthought"',
    desc: 'Retrofitting technical SEO into a poorly structured website is twice as expensive as engineering clean semantic HTML and schema from day one.',
  },
  {
    num: '08',
    title: 'No Post-Launch Warranty Plan',
    desc: 'Websites operate in live environments with browser updates and security threats. A development partner must offer post-launch technical backup.',
  },
];

const QUESTIONS_TO_ASK = [
  'Have you built websites with similar functional requirements or business models?',
  'What specific technology stack do you recommend for our project, and why?',
  'Is bespoke UI/UX design included, or are you adapting an existing commercial template?',
  'How do you guarantee fluid mobile responsiveness across iPhones and Androids?',
  'What exact deliverables, integrations, and source files are included in the quote?',
  'How many pages and layout templates will you design and develop?',
  'How many revision rounds and feedback milestones are included in the agreement?',
  'Who is responsible for content copywriting, photography curation, and asset production?',
  'Are baseline technical SEO items (schema, metadata, XML sitemaps) built in?',
  'What Google PageSpeed and Core Web Vitals score benchmarks do you guarantee?',
  'Who will own the domain, hosting accounts, source code, and design assets?',
  'Will our team receive full super-administrator access and a CMS handover tutorial?',
  'What warranty period and technical support do you provide after the website goes live?',
  'Which hosting, plugin, or third-party API costs will our business need to pay separately?',
  'How do you manage future feature expansions, design iterations, or ongoing maintenance?',
  'What is the realistic project delivery timeline, and what milestones track progress?',
];

const FAQS = [
  {
    q: 'How do I choose the right website development company for my business?',
    a: 'Start by clarifying your specific business objective (lead generation, brand authority, or e-commerce). Then evaluate potential partners on their live mobile portfolios, technical transparency, UI/UX craft, Core Web Vitals speed benchmarks, clear line-item scope, code ownership policies, and post-launch support commitments.',
  },
  {
    q: 'What should I look for in a website development agency?',
    a: 'Look for demonstrable technical capability rather than marketing buzzwords. Inspect their live client sites on your mobile phone, confirm that they write clean semantic code, ensure they provide complete ownership of your domain and codebase, and verify that they take the time to understand your commercial sales funnel.',
  },
  {
    q: 'How much does it cost to hire a website development company in India?',
    a: 'In 2026, professional website development in India generally ranges from ₹25,000 to ₹65,000 for standard business websites, ₹60,000 to ₹1,50,000 for corporate or B2B platforms, ₹45,000 to ₹2,20,000 for e-commerce stores, and ₹1,00,000 to ₹4,50,000+ for bespoke web applications. Scope, custom UI/UX design, and integration depth dictate the final price.',
  },
  {
    q: 'Should I hire a freelancer or a dedicated web development company?',
    a: 'Freelancers can be cost-effective for smaller personal projects or minor fixes. However, growing businesses and established companies benefit from dedicated development studios that combine strategic discovery, bespoke UI/UX design, rigorous engineering, speed optimization, and long-term accountability under one roof.',
  },
  {
    q: 'Should I choose WordPress, Shopify, or custom website development?',
    a: 'Choose WordPress if your business needs a flexible, content-rich marketing website with easy in-house editing. Choose Shopify if you are a product-based retail or D2C brand that requires managed payment and logistics checkout infrastructure. Choose custom development if you require bespoke customer portals, booking engines, or unique software logic.',
  },
  {
    q: 'How important is bespoke UI/UX design compared to ready-made templates?',
    a: 'Bespoke UI/UX design directly impacts conversion rates and brand perception. Overused ₹2,000 templates make high-end businesses look like commodity competitors, confuse visitors with generic navigation, and bloat page load speeds with unused scripts. Custom UI/UX aligns every button and layout with your customer journey.',
  },
  {
    q: 'Should technical SEO be discussed before development starts?',
    a: 'Yes, absolutely. Clean semantic HTML5, fast server response times (TTFB), logical URL hierarchies, schema microdata, and mobile optimization must be engineered into the website\'s foundation. Treating SEO as an afterthought on a poorly structured site often requires expensive architectural rebuilds.',
  },
  {
    q: 'What should I ask about website ownership and administrator access?',
    a: 'Ensure your contract explicitly states that upon final settlement, your business owns 100% of the website source code, design assets, database, and content. Clarify that the domain and hosting accounts are registered under your business name, and that you will receive full administrator credentials without vendor lock-in.',
  },
];

const RELATED_SERVICES = [
  { title: 'Website Development', desc: 'Fast, responsive corporate websites engineered for business authority.', url: '/services/website-development/' },
  { title: 'Custom Website Development', desc: 'Purpose-built web applications and platforms without template limits.', url: '/services/custom-website-development/' },
  { title: 'WordPress Development', desc: 'Clean, secure, high-performance WordPress builds free of plugin bloat.', url: '/services/wordpress-development/' },
  { title: 'Shopify Development', desc: 'High-converting Shopify stores with bespoke Liquid sections and checkout flows.', url: '/services/shopify-development/' },
  { title: 'E-commerce Development', desc: 'End-to-end digital commerce architecture with scalable catalog management.', url: '/services/ecommerce-development/' },
  { title: 'Website Redesign', desc: 'Modernize outdated, slow websites into fast assets with zero SEO loss.', url: '/services/website-redesign/' },
  { title: 'UI/UX Design', desc: 'Strategic wireframing, design systems, and conversion-focused prototypes.', url: '/services/ui-ux-design/' },
];

const RELATED_ARTICLES = [
  {
    title: 'Website Development Cost in India in 2026: Complete Pricing Guide',
    tag: 'Live Guide',
    desc: 'The complete breakdown of website pricing tiers, cost drivers, agency packages, and hidden fees in India.',
    url: '/blog/website-development-cost-india/',
    isLive: true,
  },
  {
    title: '10 Signs Your Business Website Needs a Redesign',
    tag: 'Coming Soon',
    desc: 'Key technical and commercial indicators showing when an underperforming website is silently costing you clients.',
    isLive: false,
  },
  {
    title: 'WordPress vs Custom Website: Which Is Right for Your Business?',
    tag: 'Coming Soon',
    desc: 'An objective architectural comparison of speed, maintenance, security, and long-term total cost of ownership.',
    isLive: false,
  },
  {
    title: 'Shopify vs WooCommerce: Which E-commerce Platform Should You Choose?',
    tag: 'Coming Soon',
    desc: 'Detailed breakdown of transaction fees, developer flexibility, hosting demands, and scale limits in 2026.',
    isLive: false,
  },
  {
    title: 'How to Build a B2B Website That Generates More Enquiries',
    tag: 'Coming Soon',
    desc: 'High-converting information architectures and RFQ workflows tailored for manufacturers and exporters.',
    isLive: false,
  },
];

export default function HowToChooseWebsiteDevelopmentCompanyArticle() {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('start-with-business-goals');
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const [checkedAudit, setCheckedAudit] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }

      const scrollPosition = window.scrollY + 220;
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

  const toggleQuestionCheck = (idx) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const toggleAuditCheck = (idx) => {
    setCheckedAudit((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'How to Choose the Right Website Development Company for Your Business',
        description:
          'Learn how to choose the right website development company for your business. Compare experience, portfolio, technology, pricing, process, SEO, support and ownership.',
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
        datePublished: '2026-09-12T00:00:00+05:30',
        dateModified: '2026-09-29T16:00:00+05:30',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': CURRENT_URL,
        },
        image: 'https://www.dynamicdesigninng.com/images/how-to-choose-website-development-company.webp',
        keywords: [
          'how to choose a website development company',
          'website development company',
          'web development company',
          'best website development company',
          'how to hire a web developer',
          'how to choose a web development agency',
          'website development agency',
          'website developer for business',
          'professional website development company',
          'website development services',
          'questions to ask a web development company',
          'website development checklist',
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
            name: 'How to Choose the Right Website Development Company',
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
        title="How to Choose the Right Website Development Company for Your Business | Dynamic Designing"
        description="Learn how to choose the right website development company for your business. Compare experience, portfolio, technology, pricing, process, SEO, support and ownership."
        canonicalUrl={CURRENT_URL}
        ogType="article"
        schemaData={articleSchema}
      />

      {/* Reading Progress Indicator */}
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
                How to Choose a Website Development Company
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
              <span>BUSINESS WEBSITE GUIDE • 2026</span>
            </div>

            <h1 className="font-display font-800 text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white leading-[1.18] tracking-tight mb-6">
              How to Choose the Right Website Development Company{' '}
              <span className="text-gradient">for Your Business</span>
            </h1>

            <p className="text-white/75 text-base sm:text-lg md:text-xl leading-relaxed font-sans mb-8">
              Choosing a website development company is not simply about finding someone who can build a website. The right development partner should understand your business goals, users, technology requirements and long-term plans. This guide explains what to evaluate before hiring a website development company so you can compare providers more confidently and avoid expensive mistakes.
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

          {/* HERO IMAGE */}
          <div className="mt-10 rounded-2xl overflow-hidden glass-card border border-white/10 relative group">
            <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden relative bg-[#080b18]">
              <img
                src={heroMockupImg}
                alt="How to choose the right website development company for a business"
                className="w-full h-full object-cover object-top opacity-95 group-hover:scale-[1.01] transition-transform duration-700"
                loading="eager"
                width={1200}
                height={550}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent pointer-events-none" />

              {/* Live Telemetry Floating Badges */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto flex flex-wrap gap-2 pointer-events-none">
                <div className="glass-card px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono flex items-center gap-2 backdrop-blur-md">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span className="text-white/80">Due Diligence Checklist</span>
                </div>
                <div className="glass-card px-3 py-1.5 rounded-lg border border-white/10 text-[11px] font-mono flex items-center gap-2 backdrop-blur-md">
                  <Cpu size={13} className="text-neon-blue" />
                  <span className="text-white/80">Engineering Standards</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ARTICLE INTRO HIGHLIGHT */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-white/[0.01] space-y-4">
          <p className="text-white/85 text-base sm:text-lg leading-relaxed">
            Choosing the right website development company can have a major impact on your business&apos;s online presence, customer experience and ability to generate enquiries or sales.
          </p>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            But comparing development companies is not always straightforward. One agency may focus on design. Another may specialize in WordPress. Another may build Shopify stores. Some developers may offer low-cost packages while others focus on custom development.
          </p>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            The right choice depends on what your business actually needs. This guide walks through the most important factors to consider before hiring a website development company.
          </p>
        </div>

        {/* AT-A-GLANCE CARD */}
        <aside className="mb-14 rounded-2xl glass-card p-6 sm:p-8 border border-neon-blue/20 bg-gradient-to-br from-neon-blue/[0.04] via-transparent to-neon-purple/[0.03]">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center text-neon-blue">
              <Zap size={16} />
            </div>
            <h2 className="font-display font-700 text-lg sm:text-xl text-white">The Short Checklist</h2>
          </div>

          <p className="text-white/70 text-sm leading-relaxed mb-5">
            Before choosing a website development company, evaluate these twelve criteria:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs text-white/85">
            {SHORT_CHECKLIST.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <CheckCircle2 size={13} className="text-neon-blue shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
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
          {/* MAIN EDITORIAL CONTENT (Left Column: 760–850px reading width) */}
          <main className="lg:col-span-8 w-full max-w-[820px] space-y-16">
            {/* SECTION 1 */}
            <section id="start-with-business-goals" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                1. Start With Your Business Goals
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Before you start comparing agencies, writing emails, or requesting quotes, you need to clearly understand what you want the website to accomplish for your business.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                A website is never just a digital brochure. Depending on your business model, your website might need to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-white/80">
                {[
                  'Generate high-ticket B2B leads & inquiries',
                  'Sell physical or digital products via e-commerce',
                  'Build commercial authority and investor trust',
                  'Showcase technical services and case studies',
                  'Publish interactive product catalogues & RFQs',
                  'Accept direct customer appointments & bookings',
                  'Distribute educational insights & industry content',
                  'Integrate with internal CRMs and ERP databases',
                ].map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/8">
                    <Check size={14} className="text-neon-blue shrink-0" />
                    <span>{goal}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 text-xs sm:text-sm text-white/75 leading-relaxed">
                <strong className="text-white">Practical Example: </strong>
                A manufacturing company needs an extensive product catalog with Request-for-Quote (RFQ) workflows and PDF spec sheets. An e-commerce brand needs Shopify with fast checkout. A clinic or luxury resort needs real-time booking engines. The right development partner must understand your specific commercial problem before prescribing a platform.
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="look-at-portfolio" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                2. Look at Their Portfolio
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                One of the easiest ways to evaluate a website development company is to examine their previous work. But don&apos;t just look at whether the screenshots &quot;look nice.&quot; Anyone can render an attractive visual in Figma or purchase an expensive mockup graphic.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Instead, open their live websites on your smartphone and laptop, and evaluate:
              </p>

              {/* What to look for checklist */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {[
                  { title: 'Mobile UX', desc: 'Do menus, tap targets, and cards work naturally on a phone?' },
                  { title: 'Page Speed', desc: 'Does the website open in under 2 seconds without lag?' },
                  { title: 'Typography', desc: 'Is text crisp, properly kerned, and easy to read?' },
                  { title: 'Navigation', desc: 'Can a visitor find key services in under 2 clicks?' },
                  { title: 'Forms', desc: 'Are inquiry forms functional, frictionless, and secure?' },
                  { title: 'Visuals', desc: 'Are images high resolution yet fast-loading WebP files?' },
                  { title: 'CTA Placement', desc: 'Are primary action buttons clear and intuitive?' },
                  { title: 'Real Demos', desc: 'Can you interact with actual working websites?' },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl glass-card border border-white/8 space-y-1">
                    <span className="font-display font-700 text-white block">{item.title}</span>
                    <span className="text-white/60 text-[11px] leading-tight block">{item.desc}</span>
                  </div>
                ))}
              </div>

              {/* Real Project Showcase */}
              <div className="rounded-2xl overflow-hidden glass-card border border-white/8 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-5 sm:p-6">
                  <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[16/10] bg-[#080b18]">
                    <img
                      src={aravaliImg}
                      alt="Real resort website project showcase by Dynamic Designing"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neon-blue font-semibold">
                      Proof of Craft • The Aravali Palace
                    </span>
                    <h3 className="font-display font-700 text-base text-white">
                      Inspect Live Interactive Work, Not Static Mockups
                    </h3>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Always test live, interactive implementations to verify that smooth transitions, booking bars, and responsive menus function reliably on actual devices.
                    </p>
                    <div className="pt-2">
                      <Link
                        to="/portfolio/"
                        className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1.5 transition-colors"
                      >
                        <span>Explore Our Live Portfolio</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="check-industry-experience" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                3. Check Relevant Industry Experience
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Industry experience can be useful, but it should not be the sole deciding factor. A talented web development company doesn&apos;t necessarily need to have built twenty websites in your exact sub-niche.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                What matters far more is whether the agency can grasp your business fundamentals:
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { sector: 'Manufacturers & Industrial B2B', requirement: 'Requires comprehensive product cataloging, technical spec sheets, and Request-For-Quote (RFQ) inquiry capture.' },
                  { sector: 'B2B & Corporate Services', requirement: 'Demands credibility architecture, specialist rosters, lead qualification funnels, and downloadable resources.' },
                  { sector: 'E-commerce & D2C Brands', requirement: 'Focuses on rapid product discovery, frictionless cart drawers, automated shipping APIs, and multi-payment gateways.' },
                  { sector: 'Luxury Hospitality & Clinics', requirement: 'Needs emotional visual storytelling, real-time appointment triage, and seamless mobile booking experiences.' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass-card border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <span className="font-display font-700 text-white sm:w-1/3">{item.sector}</span>
                    <span className="text-white/65 sm:w-2/3">{item.requirement}</span>
                  </div>
                ))}
              </div>

              {/* Real Project Dual Showcase: B2B Healthcare vs Luxury Commerce */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-3">
                  <div className="rounded-lg overflow-hidden aspect-[16/10] bg-[#080b18]">
                    <img
                      src={novaCareImg}
                      alt="NOVA Care Clinic - B2B & healthcare website development showcase"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neon-blue font-semibold block">B2B & Healthcare Architecture</span>
                    <h4 className="font-display font-700 text-sm text-white">NOVA Care Diagnostic Portal</h4>
                    <p className="text-white/60 text-xs mt-1">Specialist triage search, interactive symptom inquiry, and mobile chair booking.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-3">
                  <div className="rounded-lg overflow-hidden aspect-[16/10] bg-[#080b18]">
                    <img
                      src={aureliaImg}
                      alt="Aurelia Beauty Studio - luxury commerce and booking showcase"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neon-purple font-semibold block">Luxury Brand & Booking Architecture</span>
                    <h4 className="font-display font-700 text-sm text-white">Aurelia Atelier Platform</h4>
                    <p className="text-white/60 text-xs mt-1">High-converting editorial menu, artist portfolio showcase, and direct scheduling.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="development-approach" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                4. Understand Their Development Approach
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Ask potential partners how they approach projects. If a developer immediately jumps into installing a template on day one without asking about your customers, competitors, or content structure, that is an immediate warning sign.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Skipping planning and wireframing is the number one cause of costly revisions, delayed launches, and disjointed user experiences. A disciplined agency will guide you through strategic discovery before writing a single line of code.
              </p>
            </section>

            {/* SECTION 5 */}
            <section id="technology-recommendation" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                5. Ask Which Technology They Recommend
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Do not choose a web development company simply because they promote a specific technology. No single platform is universally superior for every business. The right technology stack depends entirely on your project requirements:
              </p>

              {/* Technology Comparison Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl glass-card border border-white/8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-700 text-base text-white">WordPress</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neon-blue">CMS Platform</span>
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Ideal for business websites, corporate platforms, and content-rich publications requiring flexible, in-house content editing.
                  </p>
                  <Link to="/services/wordpress-development/" className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1">
                    <span>WordPress Development</span> <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="p-5 rounded-2xl glass-card border border-white/8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-700 text-base text-white">Shopify</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neon-blue">Hosted Commerce</span>
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed">
                    The gold standard for retail brands and D2C stores wanting reliable cloud checkout, inventory tools, and payment security.
                  </p>
                  <Link to="/services/shopify-development/" className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1">
                    <span>Shopify Development</span> <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="p-5 rounded-2xl glass-card border border-white/8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-700 text-base text-white">WooCommerce</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neon-blue">Open Commerce</span>
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Great for businesses already invested in WordPress who need self-hosted store functionality and complete code control.
                  </p>
                  <Link to="/services/ecommerce-development/" className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1">
                    <span>E-commerce Development</span> <ArrowRight size={12} />
                  </Link>
                </div>

                <div className="p-5 rounded-2xl glass-card border border-white/8 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-700 text-base text-white">Custom Development</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neon-blue">Modern Custom Code</span>
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed">
                    Essential for custom booking portals, high-speed SaaS interfaces, interactive calculators, and unique business workflows.
                  </p>
                  <Link to="/services/custom-website-development/" className="text-xs font-semibold text-neon-blue hover:text-white inline-flex items-center gap-1">
                    <span>Custom Development</span> <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 6 */}
            <section id="ui-ux-responsive-design" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                6. Evaluate UI/UX and Responsive Design
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                A website isn&apos;t just about functionality—it is the digital face of your business. Good user interface (UI) and user experience (UX) design directly influence whether a visitor trusts your brand enough to submit an inquiry.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                True responsive design means the interface adapts intelligently to the device rather than just squishing content. Buttons must be easily tappable on touchscreens, text must remain comfortable to read without zooming, and navigation menus must be effortless to use on mobile devices.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs sm:text-sm text-white/80">
                  Looking for bespoke interface architecture and design systems?
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

            {/* SECTION 7 */}
            <section id="ask-about-seo" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                7. Ask About SEO
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Search Engine Optimization should never be treated as something added after the website is built. A website must provide a rock-solid technical foundation from the very first line of code.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Ask potential partners whether their development process includes:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-white/80">
                {[
                  'Clean semantic HTML5 tags',
                  'Logical heading hierarchies (H1-H3)',
                  'Schema.org structured microdata',
                  'Clean, canonical URL structures',
                  'Automated XML sitemaps & robots.txt',
                  'Indexability & crawl hygiene',
                  'Internal linking clusters',
                  'Optimized metadata & Open Graph',
                  'Proper 301 redirects for redesigns',
                ].map((seoItem, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/8 flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-neon-blue shrink-0" />
                    <span>{seoItem}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/8 text-xs text-white/60">
                <strong className="text-white/80">Important Distinction: </strong>
                Technical web development provides the foundation for search engine crawlability and speed. However, development alone does not guarantee #1 Google rankings—organic authority also requires ongoing content publishing, backlink acquisition, and keyword optimization.
              </div>
            </section>

            {/* SECTION 8 */}
            <section id="website-performance" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                8. Understand Website Performance
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Website speed is not an optional luxury—it directly dictates your bounce rate and search engine rankings. According to Google, over 53% of mobile visitors abandon a website if it takes longer than 3 seconds to load.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                A skilled development agency engineers for speed across multiple layers:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/75">
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-1.5">
                  <h4 className="font-display font-700 text-white">Asset Optimization</h4>
                  <p className="text-white/65 text-xs">Modern WebP/AVIF compression, responsive image sizing (`srcset`), and font preloading.</p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-1.5">
                  <h4 className="font-display font-700 text-white">Code Splitting & Bundling</h4>
                  <p className="text-white/65 text-xs">Eliminating unused JavaScript, minifying CSS, and deferring non-critical render scripts.</p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-1.5">
                  <h4 className="font-display font-700 text-white">Low TTFB Hosting</h4>
                  <p className="text-white/65 text-xs">Deploying on edge CDNs (Cloudflare/Vercel) or SSD VPS servers for instant response times.</p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-1.5">
                  <h4 className="font-display font-700 text-white">Core Web Vitals</h4>
                  <p className="text-white/65 text-xs">Strict targeting of LCP (&lt; 2.5s), INP (&lt; 200ms), and zero layout shift (CLS &lt; 0.1).</p>
                </div>
              </div>

              {/* Performance Case Study Showcase: MOVEHOUSE */}
              <div className="rounded-2xl overflow-hidden glass-card border border-white/8 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-5 sm:p-6">
                  <div className="md:col-span-5 rounded-xl overflow-hidden aspect-[16/10] bg-[#080b18]">
                    <img
                      src={movehouseImg}
                      alt="High-performance custom web platform - MOVEHOUSE by Dynamic Designing"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                      Performance Benchmark • Sub-Second Transitions
                    </span>
                    <h3 className="font-display font-700 text-base text-white">
                      Speed Directly Influences Lead Conversions
                    </h3>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Custom timetable filters and class schedules engineered with lightweight, optimized components, achieving a 99 Google PageSpeed score and instant mobile interaction.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9 */}
            <section id="development-process" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                9. Understand the Development Process
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                A professional development project should follow a structured 7-phase delivery framework with defined client sign-off points:
              </p>

              {/* 7 Phase Process */}
              <div className="space-y-3 pt-2">
                {[
                  { phase: 'Phase 1 — Discovery', desc: 'Understanding your business model, customer persona, competitor landscape, and technical specifications.' },
                  { phase: 'Phase 2 — Structure', desc: 'Defining the sitemap, page hierarchies, navigation menus, and content wireframe wireframes.' },
                  { phase: 'Phase 3 — UI/UX Design', desc: 'Crafting responsive visual layouts, bespoke typography pairings, and design system components.' },
                  { phase: 'Phase 4 — Development', desc: 'Engineering clean frontend code, CMS setup, interactive features, and API database integrations.' },
                  { phase: 'Phase 5 — Testing & QA', desc: 'Rigorous cross-browser testing, mobile usability checks, form verifications, and speed audits.' },
                  { phase: 'Phase 6 — Launch', desc: 'DNS configuration, SSL certificate validation, Google Search Console setup, and live deployment.' },
                  { phase: 'Phase 7 — Support', desc: 'Post-launch warranty, CMS administrative training, uptime monitoring, and iterative enhancements.' },
                ].map((p, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass-card border border-white/8 flex flex-col sm:flex-row sm:items-center gap-3 text-xs">
                    <span className="font-mono font-bold text-neon-blue sm:w-1/4 shrink-0">{p.phase}</span>
                    <span className="text-white/70 sm:w-3/4">{p.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 10 */}
            <section id="compare-pricing-scope" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                10. Compare Pricing and Scope — Not Just the Final Number
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Two agencies may quote wildly different numbers for what sounds like the same website. One might quote ₹20,000 while another quotes ₹1,00,000. Why? Because you are not comparing apples to apples.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Here is what is actually happening behind those two proposals:
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-left text-xs min-w-[620px]">
                  <thead className="bg-white/[0.04] text-white/90 font-display font-semibold border-b border-white/10">
                    <tr>
                      <th className="p-3.5 w-1/4">Factor</th>
                      <th className="p-3.5 w-3/8 text-white/60">Low-Scope Project (Template Install)</th>
                      <th className="p-3.5 w-3/8 text-neon-blue">Comprehensive Studio Build</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/70">
                    {PRICING_SCOPE_COMPARISON.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-3.5 font-medium text-white">{row.factor}</td>
                        <td className="p-3.5 text-white/60">{row.lowScope}</td>
                        <td className="p-3.5 text-white/85">{row.comprehensive}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs sm:text-sm text-white/80">
                  Want an in-depth breakdown of market rates and pricing tiers?
                </span>
                <Link
                  to="/blog/website-development-cost-india/"
                  className="shrink-0 inline-flex items-center gap-1.5 text-xs font-display font-semibold text-neon-blue hover:text-white transition-colors"
                >
                  <span>Read Complete Pricing Guide</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </section>

            {/* SECTION 11 */}
            <section id="check-website-ownership" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                11. Check Website Ownership and Access
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                This is one of the most critical legal and operational considerations in any web project. Before signing any contract or paying a deposit, get written confirmation on:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-white/80">
                {[
                  'Domain Ownership: Must be registered under your business account.',
                  'Hosting Account: You must retain root access or billing ownership.',
                  'Source Code Ownership: 100% intellectual property transfer upon final invoice.',
                  'Super-Admin Credentials: Full unrestricted CMS and database logins.',
                  'Plugin & App Licenses: Paid licenses must belong to your business.',
                  'Developer Portability: Any external developer must be able to maintain the site.',
                ].map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/8 flex items-start gap-2.5">
                    <ShieldCheck size={14} className="text-neon-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 12 */}
            <section id="support-maintenance" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                12. Ask About Support and Maintenance
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                A website does not end when it goes live. Modern websites operate in dynamic environments with recurring CMS core updates, plugin patches, security scans, and browser updates.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Clarify whether the development company includes a 30-day post-launch warranty period to resolve any bugs, and what ongoing maintenance options are available if your team lacks in-house technical personnel.
              </p>

              <div className="pt-2">
                <Link
                  to="/services/website-redesign/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold text-neon-blue hover:text-white transition-colors"
                >
                  <span>Learn About Website Redesign & Upgrades</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </section>

            {/* SECTION 13 */}
            <section id="understand-timeline" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                13. Understand the Timeline
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Beware of agencies that promise a complete custom website in three days. Quality strategy, bespoke UI design, responsive coding, and cross-device QA require deliberate focus.
              </p>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Typical realistic timeframes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-1">
                  <span className="font-mono text-neon-blue font-bold">2–3 Weeks</span>
                  <h4 className="font-display font-700 text-white">Business Website</h4>
                  <p className="text-white/60">5–8 pages, custom responsive design, lead capture, CMS setup.</p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-1">
                  <span className="font-mono text-neon-blue font-bold">4–6 Weeks</span>
                  <h4 className="font-display font-700 text-white">Corporate or E-commerce</h4>
                  <p className="text-white/60">Multi-page catalogs, payment gateways, shipping, custom sections.</p>
                </div>
                <div className="p-4 rounded-xl glass-card border border-white/8 space-y-1">
                  <span className="font-mono text-neon-blue font-bold">8–12+ Weeks</span>
                  <h4 className="font-display font-700 text-white">Custom Web Platform</h4>
                  <p className="text-white/60">Bespoke databases, customer dashboards, third-party APIs, role portals.</p>
                </div>
              </div>
            </section>

            {/* SECTION 14 */}
            <section id="questions-to-ask" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                14. 16 Questions to Ask Before Hiring a Website Development Company
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Use this interactive due diligence checklist during your consultation meetings. Click each question to check it off as the agency answers:
              </p>

              {/* Interactive Checklist */}
              <div className="space-y-2 pt-2">
                {QUESTIONS_TO_ASK.map((question, idx) => {
                  const isChecked = !!checkedQuestions[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleQuestionCheck(idx)}
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

            {/* SECTION 15 */}
            <section id="common-mistakes" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                15. 8 Common Mistakes Businesses Make When Hiring a Web Developer
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Over the past decade, we have seen dozens of companies waste months of time and budget by falling into these preventable traps:
              </p>

              {/* 8 Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {COMMON_MISTAKES.map((m) => (
                  <div
                    key={m.num}
                    className="p-5 rounded-2xl glass-card border border-white/8 hover:border-amber-400/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm font-bold text-amber-400/80">Mistake {m.num}</span>
                        <AlertTriangle size={14} className="text-amber-400/60" />
                      </div>
                      <h3 className="font-display font-700 text-base text-white mb-2">{m.title}</h3>
                      <p className="text-white/65 text-xs sm:text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 16 */}
            <section id="final-checklist" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                16. A Simple Website Development Company Checklist
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                Before signing a contract or paying a deposit, make sure you have clarity on all twelve points:
              </p>

              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-neon-blue/20 bg-gradient-to-b from-neon-blue/[0.03] to-transparent space-y-3">
                {[
                  'What is my website\'s primary commercial objective?',
                  'Who is my target audience and what devices do they browse on?',
                  'What exact pages and interactive features are required?',
                  'Which platform best fits my operational requirements?',
                  'Is the quotation fully itemized with no hidden fees?',
                  'Do I own 100% of the code, domain, and database?',
                  'What is the realistic delivery timeline and milestone schedule?',
                  'Is bespoke responsive UI/UX design included?',
                  'How will baseline technical SEO and schema be handled?',
                  'What Core Web Vitals speed benchmarks are guaranteed?',
                  'What warranty period is provided after public launch?',
                  'Can an external developer maintain this site in the future?',
                ].map((item, idx) => {
                  const isChecked = !!checkedAudit[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleAuditCheck(idx)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center gap-3 text-xs select-none ${
                        isChecked
                          ? 'bg-neon-blue/15 border-neon-blue/40 text-white'
                          : 'bg-white/[0.02] border-white/5 text-white/70 hover:border-white/20'
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare size={14} className="text-neon-blue shrink-0" />
                      ) : (
                        <Square size={14} className="text-white/40 shrink-0" />
                      )}
                      <span className={isChecked ? 'line-through text-white/50' : ''}>{item}</span>
                    </div>
                  );
                })}

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs text-white/60">Ready to discuss your project requirements?</span>
                  <Link to="/contact/" className="btn-primary py-2 px-4 text-xs inline-flex items-center gap-1.5">
                    <span>Discuss Your Project</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 17 */}
            <section id="when-to-work-with-pro" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                17. When Should You Work With a Professional Website Development Company?
              </h2>

              <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                DIY website builders and basic freelancers have their place for hobby projects. But for established companies, partnering with a dedicated web development company makes sense when:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80">
                {[
                  'Your website is a primary sales and lead-generation channel',
                  'Your current site looks dated and undermines your pricing power',
                  'You require custom workflows, booking engines, or customer portals',
                  'You are launching a high-ticket brand, new division, or retail store',
                  'Your existing website loads slowly and loses mobile visitors',
                  'You need seamless integration with your CRM, ERP, or payment gateways',
                  'Your internal team lacks the design and technical bandwidth',
                  'You want long-term accountability, security, and measurable ROI',
                ].map((trigger, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8 flex items-start gap-2.5">
                    <TrendingUp size={15} className="text-neon-blue shrink-0 mt-0.5" />
                    <span>{trigger}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 18 */}
            <section id="why-dynamic-designing" className="scroll-mt-28 space-y-6">
              <h2 className="font-display font-800 text-2xl sm:text-3xl text-white pt-6 border-t border-white/10">
                18. Why Businesses Work With Dynamic Designing
              </h2>

              <div className="space-y-4 text-white/80 leading-relaxed text-sm sm:text-base">
                <p className="font-display font-semibold text-lg text-white">
                  A Website Development Partner Should Understand the Business Behind the Website
                </p>
                <p>
                  At Dynamic Designing, our website projects start with understanding what the business needs the website to accomplish. We do not use cookie-cutter templates or exaggerated marketing gimmicks.
                </p>
                <p>
                  Depending on your project, our work combines strategic discovery, bespoke UI/UX prototyping, clean frontend engineering, CMS implementation, e-commerce infrastructure, third-party integrations, 95+ Core Web Vitals optimization, and reliable post-launch support.
                </p>
              </div>

              {/* 7 Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  { name: 'Website Development', url: '/services/website-development/', desc: 'High-speed business and corporate websites built for credibility.' },
                  { name: 'Custom Website Development', url: '/services/custom-website-development/', desc: 'Purpose-built web apps and portals engineered without template limits.' },
                  { name: 'WordPress Development', url: '/services/wordpress-development/', desc: 'Easy-to-manage, clean-coded WordPress sites free of plugin bloat.' },
                  { name: 'Shopify Development', url: '/services/shopify-development/', desc: 'Conversion-engineered Shopify storefronts with custom liquid sections.' },
                  { name: 'E-commerce Development', url: '/services/ecommerce-development/', desc: 'Complete online stores with automated payments and shipping workflows.' },
                  { name: 'Website Redesign', url: '/services/website-redesign/', desc: 'Modernize underperforming sites with zero SEO loss and fast speed.' },
                  { name: 'UI/UX Design', url: '/services/ui-ux-design/', desc: 'Strategic wireframing and conversion-focused design systems.' },
                ].map((s) => (
                  <Link
                    key={s.name}
                    to={s.url}
                    className="p-4 rounded-xl glass-card border border-white/8 hover:border-neon-blue/30 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <h4 className="font-display font-700 text-sm text-white mb-1 group-hover:text-neon-blue transition-colors">
                        {s.name}
                      </h4>
                      <p className="text-white/60 text-xs">{s.desc}</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-neon-blue font-semibold">
                      <span>Explore Service</span>
                      <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* SECTION 19 — FAQ */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-2">
                  Guidance & Clarity
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
                    Start the Conversation
                  </span>
                  <h2 className="font-display font-800 text-2xl sm:text-3xl md:text-4xl text-white">
                    Looking for the Right Website Development Partner?
                  </h2>
                  <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                    Tell us about your business, your goals and what you need your website to accomplish. We&apos;ll help you understand the right technical and design approach for your project.
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

            {/* Direct Consultation Widget */}
            <div className="p-6 rounded-2xl glass-card border border-neon-blue/20 bg-gradient-to-b from-neon-blue/[0.04] to-transparent space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neon-blue font-semibold block">
                Direct Consultation
              </span>
              <h3 className="font-display font-700 text-base text-white">
                Evaluating Agencies for Your Next Website?
              </h3>
              <p className="text-white/65 text-xs leading-relaxed">
                Connect directly with lead designer Gaurav Nagar to evaluate technical requirements, scope, and realistic milestones.
              </p>
              <div className="space-y-2 pt-1">
                <a
                  href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20discuss%20hiring%20a%20website%20development%20company."
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
                  {art.isLive ? (
                    <Link
                      to={art.url}
                      className="text-neon-blue font-semibold inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={12} />
                    </Link>
                  ) : (
                    <>
                      <span>Editorial Series</span>
                      <span>In Production</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
