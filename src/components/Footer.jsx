import React from 'react';
import { Mail, MessageCircle, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: MessageCircle, href: 'https://wa.me/917597557904?text=Hi%20Dynamic%20Designing!' },
  { icon: Mail, href: 'mailto:gauravnagar7504@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <span className="font-display text-2xl font-800 text-white tracking-tight">DYNAMIC DESIGNING</span>
            <p className="text-[10px] text-white/30 mt-2 text-center md:text-left leading-normal">
              Premium website development and design studio serving brands in Mumbai, Bangalore, Delhi NCR, Hyderabad, Pune, Chennai, and globally.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/40 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 glass-card rounded-lg border border-white/8 flex items-center justify-center text-white/40 hover:text-neon-blue hover:border-neon-blue/30 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-medium">
            © {new Date().getFullYear()} Gaurav Nagar. All rights reserved. Crafted with passion and precision.
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-white/30 hover:text-neon-blue transition-colors duration-300 group"
          >
            Back to top
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
