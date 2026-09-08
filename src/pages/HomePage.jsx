import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BusinessBenefits from '../components/BusinessBenefits';
import Portfolio from '../components/Portfolio';
import TechArsenal from '../components/TechArsenal';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

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
      addressLocality: 'Jaipur',
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
      { '@type': 'City', name: 'Jaipur' },
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
      <Hero />
      <About />
      <Services />
      <BusinessBenefits />
      <Portfolio />
      <TechArsenal />
      <Process />
      <Pricing />
      <CTA />
    </>
  );
}
