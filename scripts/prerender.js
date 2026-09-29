import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found. Run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: 'services',
    title: 'Website Design & Development Services | Dynamic Designing',
    description: 'Explore professional website development, WordPress, Shopify, e-commerce, custom development, website redesign and UI/UX design services from Dynamic Designing.',
    canonical: 'https://www.dynamicdesigninng.com/services',
  },
  {
    path: 'services/website-development',
    title: 'Website Development Services | Dynamic Designing',
    description: 'We create fast, responsive and scalable websites that combine thoughtful design, reliable development and a clear business purpose.',
    canonical: 'https://www.dynamicdesigninng.com/services/website-development',
  },
  {
    path: 'services/custom-website-development',
    title: 'Custom Website Development Services | Dynamic Designing',
    description: 'Purpose-built custom website development without template limitations. Custom portals, custom workflows, API integrations, and scalable architectures.',
    canonical: 'https://www.dynamicdesigninng.com/services/custom-website-development',
  },
  {
    path: 'services/wordpress-development',
    title: 'WordPress Development Services | Dynamic Designing',
    description: 'Professional WordPress websites combining custom design, flexible content management and scalable functionality without plugin bloat.',
    canonical: 'https://www.dynamicdesigninng.com/services/wordpress-development',
  },
  {
    path: 'services/shopify-development',
    title: 'Shopify Development Services | Dynamic Designing',
    description: 'We design and develop Shopify experiences that make products easier to discover, understand and purchase. Custom OS 2.0 stores built for growth.',
    canonical: 'https://www.dynamicdesigninng.com/services/shopify-development',
  },
  {
    path: 'services/ecommerce-development',
    title: 'E-commerce Website Development Services | Dynamic Designing',
    description: 'We engineer complete online shopping experiences built around smooth customer journeys, robust order infrastructure, and scalable commerce architecture.',
    canonical: 'https://www.dynamicdesigninng.com/services/ecommerce-development',
  },
  {
    path: 'services/website-redesign',
    title: 'Website Redesign Services | Dynamic Designing',
    description: 'Transform outdated, slow websites into high-converting modern assets. Complete redesign with zero SEO disruption, 301 mapping, and speed optimization.',
    canonical: 'https://www.dynamicdesigninng.com/services/website-redesign',
  },
  {
    path: 'services/ui-ux-design',
    title: 'UI/UX Design Services | Dynamic Designing',
    description: 'Strategic user interface and experience design. Wireframing, interactive prototyping, design systems, and responsive Figma architectures.',
    canonical: 'https://www.dynamicdesigninng.com/services/ui-ux-design',
  },
  {
    path: 'portfolio',
    title: 'Web Design Portfolio & Live Interactive Demos | Dynamic Designing',
    description: 'Explore our curated portfolio of bespoke, high-performance website designs. Live interactive demos built for luxury hospitality, aesthetics, clinics, and modern fitness.',
    canonical: 'https://www.dynamicdesigninng.com/portfolio',
  },
  {
    path: 'about',
    title: 'About Dynamic Designing | Luxury Web Design Studio',
    description: 'Learn about Dynamic Designing, a luxury web design and development studio founded by Gaurav Nagar in Kota, Rajasthan, crafting elite digital experiences for brands worldwide.',
    canonical: 'https://www.dynamicdesigninng.com/about',
  },
  {
    path: 'pricing',
    title: 'Website Design Pricing & Packages | Dynamic Designing',
    description: 'Clear, transparent pricing packages for bespoke website design, high-speed engineering, and luxury UI/UX development. View starter, signature, and enterprise options.',
    canonical: 'https://www.dynamicdesigninng.com/pricing',
  },
  {
    path: 'contact',
    title: 'Contact Dynamic Designing | Hire A Luxury Web Designer',
    description: 'Ready to elevate your digital presence? Contact Dynamic Designing for bespoke web design inquiries, luxury UI/UX consulting, and fast project quotes.',
    canonical: 'https://www.dynamicdesigninng.com/contact',
  },
  {
    path: 'blog',
    title: 'Web Design & Digital Growth Blog | Dynamic Designing',
    description: 'Read expert guides on web development pricing in India, luxury UX design best practices, hotel reservation websites, and modern digital trends.',
    canonical: 'https://www.dynamicdesigninng.com/blog',
  },
  // Category pages
  {
    path: 'category/hotels-resorts',
    title: 'Hotels & Luxury Resorts Website Design & Demos | Dynamic Designing',
    description: 'Cinematic booking experiences, virtual suite tours, and high-converting reservation engines designed for boutique hotels, luxury resorts, and holiday villas.',
    canonical: 'https://www.dynamicdesigninng.com/category/hotels-resorts',
  },
  {
    path: 'category/salons-beauty',
    title: 'Beauty Salons & Aesthetics Website Design & Demos | Dynamic Designing',
    description: 'High-end aesthetic clinics, luxury salons, and beauty ateliers digital experiences engineered to maximize treatment bookings.',
    canonical: 'https://www.dynamicdesigninng.com/category/salons-beauty',
  },
  {
    path: 'category/dentists-clinics',
    title: 'Dental & Medical Clinics Website Design & Demos | Dynamic Designing',
    description: 'Trust-centric medical clinic websites with patient appointment flows, doctor credentials, and clean aesthetic UI.',
    canonical: 'https://www.dynamicdesigninng.com/category/dentists-clinics',
  },
  {
    path: 'category/gyms-fitness',
    title: 'Gyms & Performance Fitness Website Design & Demos | Dynamic Designing',
    description: 'High-energy fitness studio and gym websites with interactive membership plans, trainer spotlights, and class schedule integrations.',
    canonical: 'https://www.dynamicdesigninng.com/category/gyms-fitness',
  },
  {
    path: 'category/coaching-institutes',
    title: 'Coaching & Education Institutes Website Design & Demos | Dynamic Designing',
    description: 'Modern educational portal designs, student enrollment funnels, and course showcase websites built for authority.',
    canonical: 'https://www.dynamicdesigninng.com/category/coaching-institutes',
  },
  {
    path: 'category/wedding-photographers',
    title: 'Wedding Photography & Visual Storytelling Websites | Dynamic Designing',
    description: 'Full-bleed cinematic visual portfolio websites for elite wedding photographers and creative cinematographers.',
    canonical: 'https://www.dynamicdesigninng.com/category/wedding-photographers',
  },
  // Blog posts
  {
    path: 'blog/how-much-does-a-website-cost-in-india-2026',
    title: 'How Much Does a Professional Website Cost in India? (2026 Pricing Guide) | Dynamic Designing',
    description: 'Discover the real cost of building a professional website in India in 2026. Detailed breakdown of freelancer rates, agency packages, and hidden fees.',
    canonical: 'https://www.dynamicdesigninng.com/blog/how-much-does-a-website-cost-in-india-2026',
    ogType: 'article',
  },
  {
    path: 'blog/5-website-design-mistakes-killing-business-conversions',
    title: '5 Website Design Mistakes That Kill Conversions (And How to Fix Them) | Dynamic Designing',
    description: 'Learn the top 5 web design mistakes that silently drive high-value clients away and practical UX solutions to double your conversion rate.',
    canonical: 'https://www.dynamicdesigninng.com/blog/5-website-design-mistakes-killing-business-conversions',
    ogType: 'article',
  },
  {
    path: 'blog/why-every-hotel-and-resort-needs-a-bespoke-website',
    title: 'Why Luxury Hotels & Resorts Need Bespoke Websites Instead of Template Themes | Dynamic Designing',
    description: 'Why boutique resorts and luxury hotels lose direct bookings to OTAs like MakeMyTrip and Booking.com, and how custom digital experiences reclaim direct revenue.',
    canonical: 'https://www.dynamicdesigninng.com/blog/why-every-hotel-and-resort-needs-a-bespoke-website',
    ogType: 'article',
  },
  {
    path: 'blog/top-web-design-trends-2026-dark-luxury-kinetic-ui',
    title: 'Top Web Design Trends in 2026: Dark Luxury, Kinetic UI & Micro-Interactions | Dynamic Designing',
    description: 'Explore the aesthetic and technical movements defining high-end websites in 2026 — from glassmorphic dark canvases to kinetic typography and physics-based interactions.',
    canonical: 'https://www.dynamicdesigninng.com/blog/top-web-design-trends-2026-dark-luxury-kinetic-ui',
    ogType: 'article',
  },
  // Legal Policies
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | Dynamic Designing',
    description: 'Read the official Privacy Policy of Dynamic Designing. Learn how your data, project specifications, and privacy rights are protected under DPDP Act 2023 and GDPR.',
    canonical: 'https://www.dynamicdesigninng.com/privacy-policy',
  },
  {
    path: 'terms-of-service',
    title: 'Terms of Service | Dynamic Designing',
    description: 'Official Terms of Service for Dynamic Designing. Learn about project deliverables, milestone payments, intellectual property ownership, and 30-day warranty terms.',
    canonical: 'https://www.dynamicdesigninng.com/terms-of-service',
  },
  {
    path: 'refund-policy',
    title: 'Refund & Cancellation Policy | Dynamic Designing',
    description: 'Official Refund and Cancellation Policy of Dynamic Designing. Learn about our deposit terms, milestone cancellations, and 30-day quality guarantee for digital services.',
    canonical: 'https://www.dynamicdesigninng.com/refund-policy',
  },
];

console.log(`Prerendering ${routes.length} SEO routes...`);

for (const route of routes) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace Description
  html = html.replace(
    /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Canonical
  html = html.replace(
    /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${route.canonical}" />`
  );

  // Replace OG tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );
  if (route.ogType) {
    html = html.replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:type" content="${route.ogType}" />`
    );
  }

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  const targetDir = path.join(distDir, route.path);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  console.log(`✓ Prerendered /${route.path}/index.html`);
}

console.log('All static SEO routes successfully generated in dist/ !');
