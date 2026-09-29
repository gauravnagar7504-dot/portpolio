import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getRelatedServices } from '../data/servicesData';

export default function RelatedServices({ currentServiceId }) {
  const related = getRelatedServices(currentServiceId);

  if (!related || related.length === 0) return null;

  return (
    <section className="py-16 md:py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-3.5 py-1 mb-3 border border-neon-blue/20">
              <Sparkles size={13} className="text-neon-blue" />
              <span className="text-[11px] font-display font-semibold text-white/70 tracking-wider uppercase">
                Service Ecosystem
              </span>
            </div>
            <h2 className="section-title text-3xl sm:text-4xl text-white">
              Related Web <span className="text-gradient">Capabilities</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="text-xs font-display font-semibold text-neon-blue hover:text-white flex items-center gap-1.5 transition-colors self-start sm:self-auto"
          >
            <span>Explore All 7 Services</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link
                to={service.url}
                className="group block h-full glass-card rounded-2xl p-6 sm:p-7 border border-white/8 hover:border-neon-blue/35 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl group-hover:bg-neon-blue/10 transition-colors pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-neon-blue/70">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full glass-card border border-white/10 flex items-center justify-center text-white/60 group-hover:text-neon-blue group-hover:translate-x-1 transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>

                <h3 className="font-display font-700 text-xl text-white mb-2 group-hover:text-neon-blue transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/8 text-white/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
