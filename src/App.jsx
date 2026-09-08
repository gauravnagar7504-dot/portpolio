import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';

// Lazy-loaded secondary pages for optimal bundle splitting
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function PageLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-neon-blue border-t-transparent animate-spin" />
    </div>
  );
}

const demoPaths = [
  'the-aravali-palace',
  'solara-jaipur',
  'aurelia-beauty-studio',
  'elara-beauty-house',
  'nova-care',
  'dr-aarav-mehta',
  'movehouse',
  'forge-fitness',
];

function DemoRedirect({ slug }) {
  React.useEffect(() => {
    window.location.replace(`/${slug}/index.html`);
  }, [slug]);
  return <PageLoader />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#050508] text-white overflow-x-hidden flex flex-col justify-between">
        {/* Ambient noise overlay */}
        <div className="noise-overlay" />

        {/* Global ambient background gradient */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(79,142,247,0.08) 0%, transparent 60%)',
          }}
        />

        {/* Header Navigation */}
        <Navbar />

        {/* Main Routed Content */}
        <main className="relative flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsPage />} />
              <Route path="/refund-policy" element={<RefundPolicyPage />} />
              {demoPaths.map((slug) => (
                <Route key={slug} path={`/${slug}/*`} element={<DemoRedirect slug={slug} />} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer Navigation */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
