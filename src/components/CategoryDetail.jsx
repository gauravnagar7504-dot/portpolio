import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles, ExternalLink, Eye, X, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

export default function CategoryDetail({ category, onBack, onSelectCategory }) {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageModal, setImageModal] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [category]);

  const otherCategories = categories.filter((c) => c.id !== category.id);

  return (
    <section id="category-detail" className="min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden text-white">
      {/* Background glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Navigation bar: Back button + Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-10 pb-6 border-b border-white/10"
        >
          <Link
            to="/portfolio"
            onClick={(e) => {
              if (onBack) {
                e.preventDefault();
                onBack();
              }
            }}
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 px-4 py-2 rounded-full glass-card border border-white/10 hover:border-neon-blue/40 cursor-pointer"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1 text-neon-blue" />
            <span>Back to Selected Creations</span>
          </Link>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/40">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  to="/portfolio"
                  onClick={(e) => {
                    if (onBack) {
                      e.preventDefault();
                      onBack();
                    }
                  }}
                  className="hover:text-neon-blue transition-colors cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80 font-medium" aria-current="page">{category.title}</li>
            </ol>
          </nav>
        </motion.div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-5 border border-neon-blue/20"
          >
            <Sparkles size={14} className="text-neon-blue" />
            <span className="text-xs font-display font-semibold text-white/70 tracking-wide uppercase">
              {category.label}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            {category.title.split(' & ')[0]} &{' '}
            <span className="text-gradient">{category.title.split(' & ')[1] || 'Designs'}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg leading-relaxed mb-8"
          >
            {category.description}
          </motion.p>
        </div>

        {/* Custom Designs Catalog */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
            <div>
              <span className="section-label mb-1 block">Catalog</span>
              <h2 className="text-2xl sm:text-3xl font-display font-700 text-white">
                Demo Designs & Concepts
              </h2>
            </div>
            <span className="text-xs text-white/50">
              {category.designs?.length || 0} demo design{category.designs?.length === 1 ? '' : 's'} available
            </span>
          </div>

          {category.designs && category.designs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.designs.map((design) => (
                <div
                  key={design.id}
                  className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-neon-blue/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
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
                      style={{ aspectRatio: design.aspectRatio || '4/3' }}
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
                      <div className="absolute top-3 left-3">
                        <span className="glass-card text-[11px] px-2.5 py-1 rounded-full text-white/90 border border-white/10 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
                          Demo Design
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-display font-700 text-xl text-white mb-1.5 group-hover:text-gradient transition-colors">
                        {design.title}
                      </h3>
                      <p className="text-xs text-neon-blue/90 font-medium">{design.subtitle}</p>
                    </div>
                  </div>

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
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-8 sm:p-12 text-left border border-dashed border-white/15 max-w-2xl">
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center mb-4 text-neon-blue">
                <Sparkles size={20} />
              </div>
              <h3 className="font-display text-xl font-700 text-white mb-2">
                New Designs Coming Soon
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                We are actively adding new custom website designs to our {category.title} portfolio. Have a project in mind or want to see exclusive live previews?
              </p>
              <a
                href={`https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20see%20more%20designs%20for%20${encodeURIComponent(category.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 text-xs py-2.5 px-5"
              >
                Request Private Portfolio Demos
                <ArrowRight size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Explore Other Categories */}
        <div>
          <h2 className="text-xl font-display font-700 text-white mb-6">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.id}
                to={`/category/${c.id}`}
                onClick={() => {
                  if (onSelectCategory) {
                    onSelectCategory(c);
                  }
                }}
                className="glass-card rounded-xl p-3 text-left border border-white/5 hover:border-neon-blue/30 transition-all duration-300 group cursor-pointer block"
              >
                <div className="text-[11px] text-white/40 truncate group-hover:text-neon-blue transition-colors">
                  {c.label}
                </div>
                <div className="font-display text-xs sm:text-sm font-600 text-white truncate mt-0.5">
                  {c.shortTitle}
                </div>
              </Link>
            ))}
          </div>
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
                    {category.featuredDesign?.name || category.title} — Interactive Demo Preview
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
                  <span className="text-sm text-white font-medium">
                    {imageModal.title}
                  </span>
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
