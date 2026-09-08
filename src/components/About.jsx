import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const heroImg = '/images/gaurav_about.webp';

const highlights = [
  'Premium Brand Identity Design',
  'Cinematic Web Experiences',
  'High-Converting Landing Pages',
  'Tailored Digital Solutions',
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-neon-purple/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left: Visual portrait */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            {/* Background glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 blur-2xl" />

            {/* Image frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
              <img
                src={heroImg}
                alt="Dynamic Designing — The Architect of Digital Luxury"
                fetchpriority="high"
                loading="eager"
                decoding="async"
                width="460"
                height="575"
                className="w-full object-cover object-top"
                style={{ aspectRatio: '4/5', maxHeight: '580px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/60 via-transparent to-transparent" />

              {/* Name badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-xl p-4 border border-white/8">
                <div className="section-label mb-1">Designer & Developer</div>
                <div className="font-display text-xl font-700 text-white">Dynamic Designing</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div>
              <span className="section-label block mb-4">About Me</span>
              <h2 className="section-title text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
                The Architect of{' '}
                <span className="text-gradient">Digital Luxury</span>
              </h2>
            </div>

            <p className="text-white/75 text-base leading-relaxed mb-6">
              I'm <span className="text-gradient font-semibold">Dynamic Designing</span> — a premium website development and design studio
              crafting cinematic digital experiences. Based in India, we deliver high-performance website development services to premium brands in <strong className="text-white font-semibold">Mumbai</strong>, <strong className="text-white font-semibold">Bangalore</strong>, <strong className="text-white font-semibold">Delhi NCR</strong>, <strong className="text-white font-semibold">Hyderabad</strong>, <strong className="text-white font-semibold">Pune</strong>, and globally.
            </p>

            <p className="text-white/70 text-sm leading-relaxed mb-10">
              My approach blends cinematic aesthetics with strategic design thinking.
              Every pixel is intentional, every interaction purposeful. I believe
              that great design isn't just beautiful — it's a business asset that
              drives real results.
            </p>

            {/* Highlight list */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 size={16} className="text-neon-blue shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
                { value: '3+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-center border border-white/10">
                  <div className="font-display text-2xl font-800 text-gradient">{stat.value}</div>
                  <div className="text-xs text-white/70 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20work%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 relative z-10"
            >
              Work With Me
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
