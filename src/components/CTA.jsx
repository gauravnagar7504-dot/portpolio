import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle } from 'lucide-react';

const socials = [
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I\'d%20like%20to%20work%20with%20you!' },
  { icon: Mail, label: 'Email', href: 'mailto:gauravnagar7504@gmail.com' },
];

export default function CTA() {

  return (
    <section id="contact" className="relative py-16 md:py-32 overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-[#080B12]/80" />

      {/* Glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-purple/10 top-0 right-0" />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            {['React', 'Figma', 'WordPress', 'Spline', 'Framer'].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card px-3 py-1 rounded-full text-xs text-white/50 border border-white/8 font-display font-semibold"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label block mb-4"
          >
            Let's Collaborate
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-6xl text-white mb-4"
          >
            Ready to Build{' '}
            <span className="text-gradient">Something Iconic?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-base max-w-lg mx-auto"
          >
            Let's craft a digital experience that sets your brand apart.
            Drop me a message and let's get started.
          </motion.p>
        </div>

        {/* Social Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12"
        >
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                title={s.label}
                aria-label={`Contact Dynamic Designing via ${s.label}`}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 px-8 py-5 glass-card rounded-2xl border border-white/8 text-white/60 hover:text-white hover:border-neon-blue/40 hover:shadow-neon-blue transition-all duration-300 group"
              >
                <Icon size={24} aria-hidden="true" className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-display font-600 text-lg">{s.label}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
