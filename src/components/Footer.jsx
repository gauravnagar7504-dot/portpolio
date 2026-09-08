import React from 'react';
import { Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const socials = [
  { icon: MessageCircle, label: 'Chat on WhatsApp', href: 'https://wa.me/917597557904?text=Hi%20Dynamic%20Designing!' },
  { icon: Mail, label: 'Send Email', href: 'mailto:gauravnagar7504@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <Link to="/" className="font-display text-2xl font-800 text-white tracking-tight">
              DYNAMIC DESIGNING
            </Link>
            <p className="text-xs text-white/70 mt-2 text-center md:text-left leading-normal">
              Premium website development and design studio serving brands in Mumbai, Bangalore, Delhi NCR, Hyderabad, Pune, Chennai, and globally.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center">
            <ul className="flex flex-wrap justify-center gap-6 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 glass-card rounded-lg border border-white/10 flex items-center justify-center text-white/70 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300"
                >
                  <Icon size={15} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-white/60 font-medium text-center lg:text-left">
            © {new Date().getFullYear()} Gaurav Nagar. All rights reserved. Crafted with passion and precision.
          </p>

          {/* Legal Policies */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-white/60">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">
              Refund & Cancellation
            </Link>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-white/70 hover:text-neon-blue transition-colors duration-300 group cursor-pointer"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
