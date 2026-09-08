import React, { Suspense, lazy } from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';

// Lazy-load below-the-fold components to slash initial JS bundle and main-thread work
const Services = lazy(() => import('../components/Services'));
const BusinessBenefits = lazy(() => import('../components/BusinessBenefits'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const TechArsenal = lazy(() => import('../components/TechArsenal'));
const Process = lazy(() => import('../components/Process'));
const Pricing = lazy(() => import('../components/Pricing'));
const CTA = lazy(() => import('../components/CTA'));

export default function HomePage() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Dynamic Designing',
    image: 'https://www.dynamicdesigninng.com/images/frame%201.png',
    '@id': 'https://www.dynamicdesigninng.com/#organization',
    url: 'https://www.dynamicdesigninng.com/',
    telephone: '+917597557904',
    email: 'gauravnagar7504@gmail.com',
    priceRange: '$$',
    founder: {
      '@type': 'Person',
      name: 'Gaurav Nagar',
      jobTitle: 'Lead Designer & Full-Stack Developer',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kota',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'City', name: 'Bangalore' },
      { '@type': 'City', name: 'Delhi NCR' },
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'City', name: 'Pune' },
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'City', name: 'Kota' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'AdministrativeArea', name: 'Worldwide' },
    ],
    knowsAbout: [
      'Website Design & UI/UX',
      'React & Tailwind Development',
      'High-Speed Web Architecture',
      'Conversion Rate Optimization',
      'Luxury Brand Storytelling',
      'Bespoke Booking Engines',
    ],
  };

  return (
    <>
      <SEOHead
        title="Dynamic Designing | Premium Website Development & Design Studio"
        description="Dynamic Designing is a luxury website development & UI/UX studio. We build ultra-fast, bespoke websites for ambitious brands across India and worldwide."
        canonicalUrl="https://www.dynamicdesigninng.com/"
        schemaData={homeSchema}
      />
      {/* Above-the-fold critical sections: rendered immediately with 0 JS delay */}
      <Hero />
      <About />

      {/* Below-the-fold sections: code-split to eliminate unused JS and long main-thread tasks */}
      <Suspense fallback={null}>
        <Services />
        <BusinessBenefits />
        <Portfolio />
        <TechArsenal />
        <Process />
        <Pricing />
        <CTA />
      </Suspense>
    </>
  );
}
