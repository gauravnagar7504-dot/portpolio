import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Check, X, Sparkles, Zap } from 'lucide-react';

export default function BeforeAfterRedesignSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header / Mode Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
            Interactive Comparison
          </span>
          <span className="text-white/20">•</span>
          <span className="text-xs text-neon-blue font-medium">Drag Slider to Compare</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSliderPos(85)}
            className={`text-xs px-3 py-1 rounded-full border transition-all ${
              sliderPos > 70
                ? 'bg-red-500/20 text-red-300 border-red-500/40'
                : 'glass-card text-white/60 border-white/10 hover:text-white'
            }`}
          >
            Show Before (Outdated)
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(50)}
            className="text-xs px-3 py-1 rounded-full glass-card text-white/70 border-white/10 hover:text-white"
          >
            Split 50/50
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(15)}
            className={`text-xs px-3 py-1 rounded-full border transition-all ${
              sliderPos < 30
                ? 'bg-neon-blue/20 text-neon-blue border-neon-blue/40'
                : 'glass-card text-white/60 border-white/10 hover:text-white'
            }`}
          >
            Show After (Redesigned)
          </button>
        </div>
      </div>

      {/* Comparison Viewport */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full min-h-[350px] sm:min-h-[420px] aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.8)] cursor-ew-resize bg-[#07090e]"
      >
        {/* AFTER (Modern Redesign) - Full width layer in background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0a0d18] via-[#050508] to-[#0d1224] p-5 sm:p-8 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neon-blue flex items-center justify-center font-display font-800 text-white text-sm shadow-neon-blue">
                DD
              </div>
              <span className="font-display font-700 text-white text-sm sm:text-base tracking-tight">
                MODERN ENTERPRISE PLATFORM
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs text-white/60">Solutions</span>
              <span className="hidden sm:inline text-xs text-white/60">Case Studies</span>
              <span className="hidden sm:inline text-xs text-white/60">Pricing</span>
              <span className="btn-primary text-xs py-1.5 px-4 shadow-sm">Get Started</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-auto">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neon-blue/15 border border-neon-blue/30 text-[11px] text-neon-blue mb-3">
                <Sparkles size={11} />
                <span>Next-Gen Core Web Vitals Ready</span>
              </div>
              <h3 className="font-display font-800 text-xl sm:text-3xl text-white leading-tight mb-2">
                Engineered for High Conversion & Speed
              </h3>
              <p className="text-white/60 text-xs sm:text-sm line-clamp-2 sm:line-clamp-none mb-4">
                Minimalist typography, clear CTA visual hierarchy, 0.4s load times, and frictionless lead inquiries.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs text-emerald-400">
                  <Check size={13} /> 99 Mobile Score
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-400">
                  <Check size={13} /> 301 SEO Safe
                </div>
              </div>
            </div>

            <div className="hidden sm:grid grid-cols-2 gap-3">
              <div className="glass-card p-3 rounded-xl border border-white/10">
                <p className="text-xs text-white/50">Load Speed</p>
                <p className="text-lg font-bold text-white">0.52s</p>
                <p className="text-[10px] text-emerald-400">⚡ 4.2x Faster</p>
              </div>
              <div className="glass-card p-3 rounded-xl border border-white/10">
                <p className="text-xs text-white/50">Mobile UI</p>
                <p className="text-lg font-bold text-white">100%</p>
                <p className="text-[10px] text-emerald-400">✓ Touch Fluid</p>
              </div>
              <div className="glass-card p-3 rounded-xl border border-white/10 col-span-2">
                <p className="text-xs text-white/50">Conversion Inquiries</p>
                <p className="text-sm font-semibold text-white">Optimized Lead Engine</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-white/50">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Zap size={12} /> REDESIGNED: Dynamic Designing Standard
            </span>
            <span>Zero Fluff · Clean Semantic HTML5</span>
          </div>
        </div>

        {/* BEFORE (Outdated Website) - Clipped by slider percentage */}
        <div
          className="absolute inset-0 w-full h-full bg-[#f4f2ea] text-[#333] p-5 sm:p-8 flex flex-col justify-between overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
        >
          <div className="flex items-center justify-between border-b-2 border-red-300 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 text-white font-bold flex items-center justify-center text-xs">
                OLD
              </div>
              <span className="font-serif font-bold text-sm sm:text-base text-blue-900">
                MY COMPANY HOMEPAGE (2018)
              </span>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 space-x-2">
              <span className="underline">Home</span>
              <span className="underline">About Us</span>
              <span className="underline">Services (PDF)</span>
              <span className="underline">Contact</span>
            </div>
          </div>

          <div className="my-auto">
            <div className="bg-yellow-100 border border-yellow-300 p-2 text-[11px] text-yellow-800 mb-2">
              ⚠️ Warning: Not Optimized for Mobile. Slow 4.8s initial load time.
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-2xl text-gray-900 leading-snug mb-2">
              Welcome to our corporate website portal.
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mb-3">
              We provide various multi-purpose solutions. Please download our brochure or fill out the 14-field form.
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] text-red-600">
              <span className="flex items-center gap-0.5"><X size={12} /> Broken on Mobile</span>
              <span className="flex items-center gap-0.5"><X size={12} /> Outdated Flash/Stock Art</span>
              <span className="flex items-center gap-0.5"><X size={12} /> Low Enquiry Conversion</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-300 text-[10px] text-gray-500 font-mono">
            <span className="text-red-600 font-bold">BEFORE REDESIGN</span>
            <span>PageSpeed: 28/100 · Uncompressed 8MB</span>
          </div>
        </div>

        {/* Draggable Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-30"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-2xl border-2 border-neon-blue">
            <ArrowLeftRight size={15} />
          </div>
        </div>

        {/* Static Badges */}
        <div className="absolute top-3 left-3 pointer-events-none z-20">
          <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-red-400 border border-red-500/30">
            BEFORE (OUTDATED)
          </span>
        </div>
        <div className="absolute top-3 right-3 pointer-events-none z-20">
          <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono font-bold text-neon-blue border border-neon-blue/30">
            AFTER (REDESIGNED)
          </span>
        </div>
      </div>
    </div>
  );
}
