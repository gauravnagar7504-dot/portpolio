import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight, Globe, Code2, Layers,
  ShoppingBag, ShoppingCart, RefreshCw, Palette
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const serviceDropdownItems = [
  {
    id: 'website-development',
    title: 'Website Development',
    desc: 'Fast, responsive business websites',
    url: '/services/website-development',
    icon: Globe,
    color: 'text-sky-400',
  },
  {
    id: 'shopify-development',
    title: 'Shopify Development',
    desc: 'High-converting online stores',
    url: '/services/shopify-development',
    icon: ShoppingBag,
    color: 'text-amber-400',
  },
  {
    id: 'custom-website-development',
    title: 'Custom Development',
    desc: 'Purpose-built scalable platforms',
    url: '/services/custom-website-development',
    icon: Code2,
    color: 'text-emerald-400',
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Solutions',
    desc: 'Complete shopping architectures',
    url: '/services/ecommerce-development',
    icon: ShoppingCart,
    color: 'text-rose-400',
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    desc: 'Scalable CMS with custom themes',
    url: '/services/wordpress-development',
    icon: Layers,
    color: 'text-purple-400',
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    desc: 'Modernize speed & conversions',
    url: '/services/website-redesign',
    icon: RefreshCw,
    color: 'text-cyan-400',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    desc: 'Strategic wireframes & systems',
    url: '/services/ui-ux-design',
    icon: Palette,
    color: 'text-pink-400',
  },
  {
    id: 'all-services',
    title: 'All Services',
    desc: 'Explore full capabilities & scope',
    url: '/services',
    icon: ArrowRight,
    color: 'text-neon-blue',
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }

  // Click outside to close dropdown on desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          !isHome || scrolled
            ? 'py-3 bg-[#050508]/92 backdrop-blur-2xl border-b border-white/8 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
            : 'py-3.5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-display font-800 text-lg sm:text-xl text-white tracking-tight">
              DYNAMIC DESIGNING
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              to="/"
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown Item */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${
                  isServicesActive ? 'text-neon-blue font-semibold' : 'text-white/70 hover:text-white'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    servicesDropdownOpen ? 'rotate-180 text-neon-blue' : ''
                  }`}
                />
              </button>

              {/* Desktop Services Dropdown Popover */}
              <div
                className={`absolute top-full -left-6 w-[560px] pt-3.5 z-50 transition-all duration-200 ${
                  servicesDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="relative rounded-2xl border border-white/10 bg-[#0e1017]/95 backdrop-blur-2xl p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_1px_1px_rgba(255,255,255,0.06)]">
                  {/* Upward Pointer Arrow / Beak */}
                  <div className="absolute -top-[7px] left-11 w-3.5 h-3.5 bg-[#0e1017] border-t border-l border-white/10 rotate-45 rounded-tl-[2px]" />

                  {/* 2-Column Services Grid */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-5 relative z-10">
                    {serviceDropdownItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.url;
                      return (
                        <Link
                          key={item.id}
                          to={item.url}
                          onClick={() => setServicesDropdownOpen(false)}
                          className="group flex items-start gap-3.5 p-2 -m-2 rounded-xl hover:bg-white/[0.04] transition-all duration-150 cursor-pointer"
                        >
                          <div className={`mt-0.5 shrink-0 ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                            <Icon size={20} strokeWidth={1.8} />
                          </div>
                          <div className="min-w-0">
                            <p className={`text-[14px] font-semibold leading-tight transition-colors ${
                              isActive ? 'text-neon-blue' : 'text-white group-hover:text-neon-blue'
                            }`}>
                              {item.title}
                            </p>
                            <p className="text-[12px] text-white/50 group-hover:text-white/70 transition-colors mt-1 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/portfolio"
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === '/portfolio' ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/blog"
              className={`relative text-sm font-medium transition-colors ${
                location.pathname.startsWith('/blog') ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/pricing"
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === '/pricing' ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === '/about' ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`relative text-sm font-medium transition-colors ${
                location.pathname === '/contact' ? 'text-white font-semibold' : 'text-white/70 hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20hire%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block btn-primary text-xs sm:text-sm py-2 px-5 relative z-10"
            >
              Discuss Project
            </a>
            <button
              className="lg:hidden text-white/70 hover:text-white transition-colors p-2 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Expandable Services Accordion */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-0 z-40 bg-[#050508]/98 backdrop-blur-2xl flex flex-col justify-start px-6 pt-24 pb-8 overflow-y-auto transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col gap-4 text-left w-full max-w-md mx-auto">
          <Link
            to="/"
            className={`text-xl font-display font-700 py-2 border-b border-white/5 ${
              location.pathname === '/' ? 'text-neon-blue' : 'text-white/80'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border-b border-white/5 pb-2">
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-xl font-display font-700 py-2 text-white/80"
              aria-expanded={mobileServicesOpen}
            >
              <span className={isServicesActive ? 'text-neon-blue' : ''}>Services</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  mobileServicesOpen ? 'rotate-180 text-neon-blue' : ''
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-3 pt-2 pb-2 space-y-2.5">
                <Link
                  to="/services"
                  className="block text-xs font-semibold text-neon-blue uppercase tracking-wider py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  → View All Services Overview
                </Link>
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={service.url}
                    className="block text-sm text-white/70 hover:text-white py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/portfolio"
            className={`text-xl font-display font-700 py-2 border-b border-white/5 ${
              location.pathname === '/portfolio' ? 'text-neon-blue' : 'text-white/80'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Portfolio
          </Link>

          <Link
            to="/blog"
            className={`text-xl font-display font-700 py-2 border-b border-white/5 ${
              location.pathname.startsWith('/blog') ? 'text-neon-blue' : 'text-white/80'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>

          <Link
            to="/pricing"
            className={`text-xl font-display font-700 py-2 border-b border-white/5 ${
              location.pathname === '/pricing' ? 'text-neon-blue' : 'text-white/80'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Pricing
          </Link>

          <Link
            to="/about"
            className={`text-xl font-display font-700 py-2 border-b border-white/5 ${
              location.pathname === '/about' ? 'text-neon-blue' : 'text-white/80'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`text-xl font-display font-700 py-2 border-b border-white/5 ${
              location.pathname === '/contact' ? 'text-neon-blue' : 'text-white/80'
            }`}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="pt-6 w-full max-w-md mx-auto">
          <a
            href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20hire%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center block py-3 text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </>
  );
}
