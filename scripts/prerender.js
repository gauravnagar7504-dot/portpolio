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
    title: 'Web Design & Development Services | Dynamic Designing',
    description: 'Explore luxury web design, bespoke UI/UX development, high-speed frontend engineering, and technical SEO services tailored for ambitious brands.',
    canonical: 'https://www.dynamicdesigninng.com/services',
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
    description: 'Learn about Dynamic Designing, a luxury web design and development studio founded by Gaurav Nagar in Jaipur, Rajasthan, crafting elite digital experiences for brands worldwide.',
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
