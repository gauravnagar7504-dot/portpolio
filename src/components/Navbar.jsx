import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight, Globe, Code2, Layers,
  ShoppingBag, ShoppingCart, RefreshCw, Palette
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const navIcons = {
  'website-development': Globe,
  'custom-website-development': Code2,
  'wordpress-development': Layers,
  'shopify-development': ShoppingBag,
  'ecommerce-development': ShoppingCart,
  'website-redesign': RefreshCw,
  'ui-ux-design': Palette,
};

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

              {/* Desktop Mega Menu Dropdown */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[650px] pt-3 z-50 transition-all duration-200 ${
                  servicesDropdownOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                    : 'opacity-0 translate-y-2 pointer-events-none invisible'
                }`}
              >
                <div className="rounded-2xl border border-white/15 bg-[#0b0e1b] shadow-[0_30px_90px_rgba(0,0,0,0.98)] overflow-hidden">
                  {/* Dropdown Header */}
                  <div className="bg-[#070913] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-white/50 uppercase tracking-wider">Web Design & Engineering</span>
                    <span className="text-neon-blue font-semibold">7 Specialized Services</span>
                  </div>

                  {/* 2-Column Services Grid */}
                  <div className="p-3 grid grid-cols-2 gap-2 bg-[#0b0e1b]">
                    {servicesData.map((service) => {
                      const Icon = navIcons[service.id] || Globe;
                      const isActive = location.pathname === service.url;
                      return (
                        <Link
                          key={service.id}
                          to={service.url}
                          onClick={() => setServicesDropdownOpen(false)}
                          className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                            isActive
                              ? 'bg-neon-blue/15 border-neon-blue/40 text-white shadow-[0_0_15px_rgba(79,142,247,0.25)]'
                              : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.05] text-white/80 hover:text-white'
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-neon-blue/10 border border-neon-blue/25 flex items-center justify-center text-neon-blue shrink-0 mt-0.5">
                            <Icon size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] font-mono text-neon-blue/70">{service.number}</span>
                              <p className="text-xs font-display font-bold leading-tight text-white">
                                {service.title}
                              </p>
                            </div>
                            <p className="text-[11px] text-white/50 line-clamp-1 mt-1 leading-snug">
                              {service.shortDescription}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    {/* 8th Slot: Quick Consultation Box */}
                    <div className="flex flex-col justify-between p-3 rounded-xl bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-transparent border border-neon-blue/20">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-neon-blue font-semibold block mb-0.5">
                          Direct Consultation
                        </span>
                        <p className="text-xs text-white/80 font-medium leading-tight">
                          Need a custom quote or technical advice?
                        </p>
                      </div>
                      <Link
                        to="/contact"
                        onClick={() => setServicesDropdownOpen(false)}
                        className="inline-flex items-center gap-1 text-[11px] font-display font-semibold text-neon-blue hover:text-white transition-colors mt-2"
                      >
                        <span>Talk to Lead Developer</span>
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>

                  {/* Mega Menu Footer */}
                  <div className="bg-[#070913] px-4 py-2.5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] text-white/40">
                      Custom code · Sub-second speeds · Zero template bloat
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-neon-blue hover:text-white transition-colors"
                    >
                      <span>View All Services</span>
                      <ArrowRight size={13} />
                    </Link>
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
