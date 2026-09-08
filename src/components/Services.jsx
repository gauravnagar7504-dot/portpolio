import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Sparkles, LayoutTemplate, Smartphone,
  Palette, Code2,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Bespoke websites that command attention and convert visitors into loyal customers.',
    accent: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Comprehensive brand systems — logos, color palettes, typography, and visual language.',
    accent: 'from-purple-500 to-pink-400',
  },
  {
    icon: LayoutTemplate,
    title: 'Landing Pages',
    description: 'High-converting, beautifully designed landing pages optimized for your goals.',
    accent: 'from-orange-400 to-yellow-400',
  },
  {
    icon: Smartphone,
    title: 'UI / UX Design',
    description: 'Intuitive interfaces and seamless experiences designed for delight and usability.',
    accent: 'from-green-400 to-emerald-400',
  },
  {
    icon: Sparkles,
    title: 'Motion Design',
    description: 'Cinematic animations and micro-interactions that make your brand feel alive.',
    accent: 'from-neon-blue to-neon-purple',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Clean, scalable code using React, Tailwind CSS, and modern WordPress builds.',
    accent: 'from-red-400 to-orange-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-32 overflow-hidden">
      {/* Glow orb */}
      <div className="glow-orb w-[700px] h-[400px] bg-neon-blue/6 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label block mb-4"
          >
            What I Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl text-white"
          >
            Web Design & <span className="text-gradient">Development Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm mt-4 max-w-md mx-auto"
          >
            Every service is delivered with obsessive attention to detail and a luxury-first mindset.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group glass-card rounded-2xl p-7 relative overflow-hidden border border-white/8 hover:border-neon-blue/30 transition-all duration-300"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-6 group-hover:scale-110 group-hover:bg-neon-blue/15 transition-all duration-300">
                  <Icon size={22} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-display font-700 text-xl text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bottom line */}
                <div
                  className={`h-px bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
