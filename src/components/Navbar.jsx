import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          !isHome || scrolled
            ? 'py-3 bg-[#050508]/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
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
            <span className="font-display font-800 text-xl text-white tracking-tight">
              DYNAMIC DESIGNING
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`relative text-sm transition-colors duration-300 font-medium group ${
                    isActive ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20hire%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block btn-primary text-sm py-2 px-5 relative z-10"
            >
              Hire Me
            </a>
            <button
              className="lg:hidden text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Pure CSS animated for instant responsiveness) */}
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-0 z-40 bg-[#050508]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <div key={link.label}>
                <Link
                  to={link.to}
                  className={`text-2xl sm:text-3xl font-display font-700 transition-colors ${
                    isActive ? 'text-neon-blue' : 'text-white/80 hover:text-white'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>
        <a
          href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20hire%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4"
          onClick={() => setMobileOpen(false)}
        >
          Hire Me
        </a>
      </div>
    </>
  );
}
