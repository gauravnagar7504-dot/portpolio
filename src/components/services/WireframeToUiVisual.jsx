import React, { useState } from 'react';
import { Layout, Sparkles } from 'lucide-react';
import frame3Img from '../../assets/images/Frame 3.webp';

export default function WireframeToUiVisual() {
  const [viewMode, setViewMode] = useState('both'); // 'wireframe', 'final', 'both'

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-neon-blue font-semibold block mb-1">
            Design Progression
          </span>
          <h3 className="section-title text-2xl sm:text-3xl text-white">
            From Low-Fidelity Architecture to High-Fidelity Masterpiece
          </h3>
        </div>

        <div className="flex items-center gap-1.5 p-1 rounded-xl glass-card border border-white/10">
          <button
            type="button"
            onClick={() => setViewMode('wireframe')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'wireframe' ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Wireframe Only
          </button>
          <button
            type="button"
            onClick={() => setViewMode('both')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'both' ? 'bg-neon-blue text-white shadow-neon-blue' : 'text-white/60 hover:text-white'
            }`}
          >
            Side-by-Side Evolution
          </button>
          <button
            type="button"
            onClick={() => setViewMode('final')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'final' ? 'bg-white/15 text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            Finished UI Only
          </button>
        </div>
      </div>

      {/* Evolution Display Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Wireframe Mockup */}
        {(viewMode === 'wireframe' || viewMode === 'both') && (
          <div className={`${viewMode === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'} glass-card rounded-2xl p-6 border border-white/10 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Layout size={16} className="text-white/60" />
                  <span className="font-mono text-xs font-semibold text-white/80">01. Low-Fidelity Wireframe</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">
                  Information Hierarchy
                </span>
              </div>

              {/* Wireframe Canvas Simulation */}
              <div className="rounded-xl border border-dashed border-white/20 p-5 bg-[#090a12]/80 space-y-4 font-mono text-[11px] text-white/50">
                {/* Header Skeleton */}
                <div className="flex items-center justify-between pb-3 border-b border-dashed border-white/15">
                  <div className="w-24 h-4 bg-white/10 rounded" />
                  <div className="flex gap-2">
                    <div className="w-12 h-3 bg-white/10 rounded" />
                    <div className="w-12 h-3 bg-white/10 rounded" />
                    <div className="w-12 h-3 bg-white/10 rounded" />
                  </div>
                </div>

                {/* Hero Skeleton Layout */}
                <div className="space-y-2 pt-2">
                  <div className="w-1/3 h-3 bg-neon-blue/20 rounded" />
                  <div className="w-3/4 h-6 bg-white/15 rounded" />
                  <div className="w-full h-3 bg-white/10 rounded" />
                  <div className="w-5/6 h-3 bg-white/10 rounded" />
                  <div className="pt-2 flex gap-3">
                    <div className="w-28 h-8 bg-white/20 rounded-md border border-white/20" />
                    <div className="w-24 h-8 bg-transparent border border-dashed border-white/20 rounded-md" />
                  </div>
                </div>

                {/* Grid Blueprint */}
                <div className="grid grid-cols-3 gap-2 pt-3">
                  <div className="h-16 rounded border border-dashed border-white/15 p-2 bg-white/[0.02]">
                    [Feature Module A]
                  </div>
                  <div className="h-16 rounded border border-dashed border-white/15 p-2 bg-white/[0.02]">
                    [Feature Module B]
                  </div>
                  <div className="h-16 rounded border border-dashed border-white/15 p-2 bg-white/[0.02]">
                    [Feature Module C]
                  </div>
                </div>
              </div>
            </div>

            {/* Rationale callout */}
            <div className="mt-5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/60 space-y-1">
              <span className="font-semibold text-white/80 block">Wireframe Decision Rationale:</span>
              <p>We test cognitive load, eye-tracking scan lines, and action priorities before styling. Eliminates premature visual attachment.</p>
            </div>
          </div>
        )}

        {/* Right: Finished Polished UI */}
        {(viewMode === 'final' || viewMode === 'both') && (
          <div className={`${viewMode === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'} glass-card rounded-2xl p-6 border border-neon-blue/30 relative overflow-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(79,142,247,0.15)]`}>
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-neon-blue" />
                  <span className="font-mono text-xs font-semibold text-neon-blue">02. Finished Polished Design</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Figma Tokens & Design System
                </span>
              </div>

              {/* Polished Visual Preview */}
              <div className="relative rounded-xl overflow-hidden border border-white/15 aspect-[16/10] bg-[#07090f] group">
                <img
                  src={frame3Img}
                  alt="Finished UI Design Showcase"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-display font-bold text-white">
                    The Aravali Palace — Luxury Heritage UI
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 glass-card px-2 py-0.5 rounded border border-emerald-500/30">
                    Live Production Design
                  </span>
                </div>
              </div>
            </div>

            {/* Rationale callout */}
            <div className="mt-5 p-3.5 rounded-xl bg-neon-blue/[0.04] border border-neon-blue/20 text-xs text-white/70 space-y-1">
              <span className="font-semibold text-neon-blue block">Polished UI Decision Rationale:</span>
              <p>Dark luxury color palette, fluid micro-interactions, WCAG AAA contrast ratios, and tactile responsive touch targets for maximum prestige.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
