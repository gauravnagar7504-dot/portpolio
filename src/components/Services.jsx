import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe, Code2, Layers, ShoppingBag, ShoppingCart, RefreshCw, Palette,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const icons = {
  'website-development': Globe,
  'custom-website-development': Code2,
  'wordpress-development': Layers,
  'shopify-development': ShoppingBag,
  'ecommerce-development': ShoppingCart,
  'website-redesign': RefreshCw,
  'ui-ux-design': Palette,
};

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
            What We Build
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl text-white"
          >
            Website Design & <span className="text-gradient">Development Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-sm mt-4 max-w-lg mx-auto"
          >
            Fast, scalable, and conversion-focused websites engineered for businesses that want more than just an online presence.
          </motion.p>
        </div>

        {/* Grid of 7 services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, i) => {
            const Icon = icons[service.id] || Globe;
            const isLarge = i === 6;
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group glass-card rounded-2xl p-7 relative overflow-hidden border border-white/8 hover:border-neon-blue/30 transition-all duration-300 flex flex-col justify-between ${
                  isLarge ? 'md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top row: Number on left, Icon on far right */}
                <div className="flex items-center justify-between mb-5 w-full">
                  <span className="font-mono text-xs font-bold text-neon-blue/70">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue group-hover:scale-110 group-hover:bg-neon-blue/15 transition-all duration-300">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                </div>

                {isLarge ? (
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                      <h3 className="font-display font-700 text-xl text-white mb-2.5 group-hover:text-neon-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/8 text-white/60 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="shrink-0 pt-3 lg:pt-0">
                      <Link
                        to={service.url}
                        className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-neon-blue group-hover:text-white transition-colors"
                      >
                        <span>Explore Service</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    <div>
                      <h3 className="font-display font-700 text-xl text-white mb-2.5 group-hover:text-neon-blue transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-5">
                        {service.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/8 text-white/60 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Explore Link */}
                    <div className="pt-3 border-t border-white/5">
                      <Link
                        to={service.url}
                        className="inline-flex items-center gap-1.5 text-xs font-display font-semibold text-neon-blue group-hover:text-white transition-colors"
                      >
                        <span>Explore Service</span>
                        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
