import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Eye, ExternalLink, X, Maximize2 } from 'lucide-react';
import { categories, allDesigns } from '../data/categories';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageModal, setImageModal] = useState(null);

  const filterCategories = [
    { id: 'all', label: 'All Designs', count: allDesigns.length },
    ...categories
      .filter((cat) => cat.designs && cat.designs.length > 0)
      .map((cat) => ({
        id: cat.id,
        label: cat.shortTitle || cat.title,
        count: cat.designs.length,
      })),
  ];

  const displayedDesigns =
    activeFilter === 'all'
      ? allDesigns
      : allDesigns.filter((d) => d.categoryId === activeFilter);

  return (
    <section id="portfolio" className="relative py-16 md:py-32 overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/8 top-0 right-[-200px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-blue/6 bottom-0 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12">
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
                Selected <span className="text-gradient">Creations & Web Designs</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="text-white/50 text-sm sm:text-base max-w-2xl leading-relaxed"
              >
                Explore bespoke, conversion-engineered website designs built for luxury hospitality, aesthetic ateliers, medical clinics, and modern fitness clubs.
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
              <span>{allDesigns.length} Live Interactive Demos</span>
            </motion.div>
          </div>
        </div>

        {/* Category Filter Pills (Horizontal Slider) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-nowrap items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar scrollbar-none py-3.5 px-3 -mx-3 mb-10"
        >
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-neon-blue text-white shadow-[0_0_16px_rgba(79,142,247,0.45)] border border-neon-blue'
                  : 'glass-card text-white/60 hover:text-white border border-white/10 hover:border-white/25'
              }`}
            >
              {filter.label} <span className="opacity-70 ml-1">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Grid of Designs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-neon-blue/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Mockup Preview Container */}
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`View enlarged preview of ${design.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setImageModal({ src: design.image, title: design.title });
                    }
                  }}
                  className="relative overflow-hidden bg-[#08080f] cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
                  style={{ aspectRatio: design.aspectRatio || '819/1024' }}
                  onClick={() => setImageModal({ src: design.image, title: design.title })}
                >
                  <img
                    src={design.image}
                    alt={`Website design mockup for ${design.title}`}
                    loading="lazy"
                    decoding="async"
                    width="819"
                    height="1024"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="glass-card text-[11px] px-2.5 py-1 rounded-full text-white/90 border border-white/10 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                      Demo Design
                    </span>
                    {design.categoryTitle && (
                      <span className="glass-card text-[10px] px-2 py-0.5 rounded-full text-white/60 border border-white/5 font-medium">
                        {design.categoryTitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-700 text-xl text-white mb-1.5 group-hover:text-gradient transition-colors">
                    {design.title}
                  </h3>
                  <p className="text-xs text-neon-blue/90 font-medium">{design.subtitle}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-5 py-4 flex items-center justify-between gap-3 border-t border-white/10">
                <button
                  onClick={() => setPreviewUrl(design.liveUrl)}
                  aria-label={`Preview live demo for ${design.title}`}
                  className="text-xs text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                >
                  <Eye size={14} className="text-neon-blue" />
                  <span>Preview Demo</span>
                </button>
                <a
                  href={design.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open full live interactive demo for ${design.title}`}
                  className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open Demo</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Interactive Preview Modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 sm:p-8 flex flex-col justify-center items-center"
          >
            <div className="w-full max-w-6xl h-full flex flex-col bg-[#050508] rounded-2xl border border-white/15 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
              {/* Modal Header */}
              <div className="h-14 px-5 bg-[#0a0a10] border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-white/70 font-mono hidden sm:inline ml-2">
                    Interactive Demo Preview
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neon-blue hover:text-white flex items-center gap-1 px-3 py-1.5 rounded-lg glass-card border border-white/10 transition-colors"
                  >
                    Open in Full Tab <Maximize2 size={13} />
                  </a>
                  <button
                    onClick={() => setPreviewUrl(null)}
                    aria-label="Close demo preview"
                    className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="flex-1 w-full bg-[#fbf9f5] relative">
                <iframe
                  src={previewUrl}
                  title="Demo Design Preview"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Exact Image Lightbox Modal */}
        {imageModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={imageModal.title}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-3 sm:p-6 flex flex-col justify-center items-center"
            onClick={() => setImageModal(null)}
          >
            <div
              className="relative max-w-4xl max-h-[95vh] w-full flex flex-col bg-[#0a0a12] rounded-2xl border border-white/15 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="h-14 px-5 bg-[#0e0e18] border-b border-white/10 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white font-medium">{imageModal.title}</span>
                  <span className="text-xs text-white/40 hidden sm:inline font-mono">
                    (Exact uploaded size: 819 × 1024)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={imageModal.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neon-blue hover:text-white flex items-center gap-1 px-3 py-1.5 rounded-lg glass-card border border-white/10 transition-colors"
                  >
                    Open Original <ExternalLink size={13} />
                  </a>
                  <button
                    onClick={() => setImageModal(null)}
                    aria-label="Close image modal"
                    className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Exact Image Viewport */}
              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-[#07070d]">
                <img
                  src={imageModal.src}
                  alt={imageModal.title}
                  className="max-h-[82vh] w-auto object-contain rounded-lg shadow-2xl border border-white/5"
                  style={{ aspectRatio: '819/1024' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
