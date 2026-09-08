import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { categories } from '../data/categories';

function CategoryCard({ category, index, onSelect }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1], delay: index * 0.06 }}
      onClick={() => onSelect && onSelect(category)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#0c0c14] border border-white/8 transition-all duration-500"
      style={{
        boxShadow: hovered
          ? '0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(79,142,247,0.18)'
          : '0 8px 30px rgba(0,0,0,0.5)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Mockup Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-[#08080f] flex items-center justify-center">
        <img
          src={category.image}
          alt={category.title}
          className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 ${
            category.aspectRatio ? 'object-contain p-2' : 'object-cover'
          }`}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />

        {/* Explore Button Floating Badge */}
        <div className="absolute top-3.5 right-3.5">
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xl border transition-all duration-300 ${
              hovered
                ? 'bg-neon-blue text-white border-neon-blue shadow-neon-blue'
                : 'glass-card text-white/80 border-white/10'
            }`}
          >
            <span>Explore</span>
            <ArrowUpRight size={13} className={`transition-transform duration-300 ${hovered ? 'translate-x-0.5 -translate-y-0.5' : ''}`} />
          </div>
        </div>

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl border transition-all duration-500 pointer-events-none"
          style={{
            borderColor: hovered ? 'rgba(79,142,247,0.5)' : 'rgba(255,255,255,0.06)',
            boxShadow: hovered ? 'inset 0 0 30px rgba(79,142,247,0.08)' : 'none',
          }}
        />
      </div>

      {/* Card Info Content */}
      <div className="p-5 relative">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neon-blue font-semibold">
            {category.label}
          </span>
          <span className="text-[10px] text-white/40 glass-card px-2 py-0.5 rounded border border-white/5">
            Category
          </span>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-700 text-white group-hover:text-gradient transition-all duration-300 mb-1.5">
          {category.title}
        </h3>

        <p className="text-xs text-white/50 line-clamp-2 leading-relaxed mb-3">
          {category.description}
        </p>

        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-white/40">
          <span>Featured: <strong className="text-white/70 font-medium">{category.featuredDesign.name}</strong></span>
          <span className="text-neon-blue font-medium group-hover:underline flex items-center gap-0.5">
            View Details &rarr;
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio({ onSelectCategory }) {

  return (
    <section id="portfolio" className="relative py-16 md:py-32 overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/8 top-0 right-[-200px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-blue/6 bottom-0 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-label block mb-3"
              >
                My Portfolio
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-4"
              >
                Selected <span className="text-gradient">Creations</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-white/50 text-sm sm:text-base max-w-2xl leading-relaxed"
              >
                Explore industry-tailored website designs engineered to elevate brand prestige and drive online conversions. Click any category to explore dedicated design showcases.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-xs text-white/50 glass-card px-4 py-2 rounded-full border border-white/10 self-start lg:self-auto"
            >
              <Sparkles size={14} className="text-neon-blue" />
              <span>6 High-Impact Business Niches</span>
            </motion.div>
          </div>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.id}
              category={category}
              index={i}
              onSelect={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
