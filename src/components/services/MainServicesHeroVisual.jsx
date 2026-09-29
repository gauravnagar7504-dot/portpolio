import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Smartphone, Code2 } from 'lucide-react';
import frame1Img from '../../assets/images/frame 1.webp';
import frame3Img from '../../assets/images/Frame 3.webp';

export default function MainServicesHeroVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-neon-blue/20 via-neon-purple/10 to-transparent rounded-3xl blur-3xl opacity-70 pointer-events-none" />

      {/* Main Desktop Browser Window Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative glass-card rounded-2xl border border-white/15 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
      >
        {/* Browser Top Bar */}
        <div className="h-10 px-4 bg-[#0a0d18] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] border border-white/8 text-[11px] text-white/50 font-mono">
            <ShieldCheck size={11} className="text-emerald-400" />
            <span>dynamicdesigninng.com/client-production</span>
          </div>
          <div className="w-8 flex justify-end">
            <Zap size={12} className="text-neon-blue" />
          </div>
        </div>

        {/* Browser Body / Website Interface */}
        <div className="relative bg-[#07090e] p-4 sm:p-5">
          <div className="relative rounded-xl overflow-hidden border border-white/10 group aspect-[16/10]">
            <img
              src={frame3Img}
              alt="Dynamic Designing Website Preview Mockup"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-[#050508]/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neon-blue font-semibold">
                  Client Production Build
                </span>
                <p className="text-sm font-display font-700 text-white">
                  High-Performance Web Architecture
                </p>
              </div>
              <div className="flex items-center gap-1.5 glass-card px-2.5 py-1 rounded-full text-[11px] text-emerald-400 border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>99 PageSpeed</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Mobile Mockup Overlap */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 w-40 sm:w-56 glass-card rounded-2xl border border-white/20 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.9)] hidden sm:block"
      >
        <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-[9/16] bg-[#090b14]">
          <img
            src={frame1Img}
            alt="Mobile Responsive Interface"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-3 left-3 right-3 text-left">
            <div className="flex items-center gap-1 text-[10px] text-neon-blue font-semibold">
              <Smartphone size={11} />
              <span>Mobile-First UI</span>
            </div>
            <p className="text-[11px] text-white font-medium leading-tight mt-0.5">
              100% Fluid Touch Responsive
            </p>
          </div>
        </div>
      </motion.div>

      {/* Floating UI Telemetry Badge Left */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute -top-4 left-2 sm:-top-6 sm:-left-8 glass-card rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 border border-white/15 shadow-xl flex items-center gap-2.5 sm:gap-3 backdrop-blur-xl"
      >
        <div className="w-8 h-8 rounded-lg bg-neon-blue/15 border border-neon-blue/30 flex items-center justify-center text-neon-blue">
          <Code2 size={16} />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-white/50 font-mono uppercase tracking-wider">Engineering</p>
          <p className="text-xs font-display font-semibold text-white">Clean Semantic Code</p>
        </div>
      </motion.div>

      {/* Floating UI Badge Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute bottom-2 -left-6 glass-card rounded-xl px-3.5 py-2 border border-white/15 shadow-xl flex items-center gap-2.5 backdrop-blur-xl hidden md:flex"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-xs font-medium text-white/80">Conversion Architecture Active</span>
      </motion.div>
    </div>
  );
}
