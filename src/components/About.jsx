import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import heroImg from '../assets/images/gaurav_about.jpg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay },
});

const highlights = [
  'Premium Brand Identity Design',
  'Cinematic Web Experiences',
  'Mobile-First Responsive UI',
  'Conversion-Optimized Layouts',
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Glow orb */}
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/8 top-1/2 -translate-y-1/2 left-[-200px]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Background glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-neon-blue/15 to-neon-purple/15 blur-2xl" />

            {/* Image frame */}
            <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
              <img
                src={heroImg}
                alt="Dynamic Designing — The Architect of Digital Luxury"
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

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-0 md:-right-8 top-12 md:top-16 glass-card rounded-2xl p-4 border border-neon-blue/25 shadow-neon-blue z-10 scale-90 md:scale-100 origin-right"
            >
              <div className="text-2xl font-display font-800 text-gradient">3+</div>
              <div className="text-xs text-white/50 mt-0.5">Years of</div>
              <div className="text-xs text-white/50">Experience</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="section-label block mb-4">About Me</span>
              <h2 className="section-title text-4xl md:text-5xl text-white mb-6 leading-[1.1]">
                The Architect of{' '}
                <span className="text-gradient">Digital Luxury</span>
              </h2>
            </motion.div>

            <motion.p {...fadeUp(0.2)} className="text-white/50 text-base leading-relaxed mb-6">
            I'm <span className="text-gradient font-semibold">Dynamic Designing</span> — a premium website development and design studio
              crafting cinematic digital experiences. Based in India, we deliver high-performance website development services to premium brands in <strong className="text-white font-semibold">Mumbai</strong>, <strong className="text-white font-semibold">Bangalore</strong>, <strong className="text-white font-semibold">Delhi NCR</strong>, <strong className="text-white font-semibold">Hyderabad</strong>, <strong className="text-white font-semibold">Pune</strong>, and globally.
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="text-white/40 text-sm leading-relaxed mb-10">
              My approach blends cinematic aesthetics with strategic design thinking.
              Every pixel is intentional, every interaction purposeful. I believe
              that great design isn't just beautiful — it's a business asset that
              drives real results.
            </motion.p>

            {/* Highlight list */}
            <motion.ul {...fadeUp(0.4)} className="space-y-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <CheckCircle2 size={16} className="text-neon-blue shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Stats */}
            <motion.div {...fadeUp(0.5)} className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: '50+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
                { value: '3+', label: 'Years' },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-center border border-white/6">
                  <div className="font-display text-2xl font-800 text-gradient">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.a
              {...fadeUp(0.6)}
              href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20work%20with%20you!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 relative z-10"
            >
              Work With Me
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
