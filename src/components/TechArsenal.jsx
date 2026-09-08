import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';

const tools = [
  { name: 'React', short: 'Re', cat: 'Frontend Library', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1 md:row-span-2', color: 'from-cyan-400 to-blue-600', textColors: 'text-cyan-400', shadow: 'shadow-cyan-500/20' },
  { name: 'Tailwind CSS', short: 'Tw', cat: 'Styling Framework', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-teal-400 to-cyan-500', textColors: 'text-teal-400', shadow: 'shadow-teal-500/20' },
  { name: 'Figma', short: 'Fg', cat: 'UI/UX Design', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-pink-500 to-purple-600', textColors: 'text-pink-400', shadow: 'shadow-pink-500/20' },
  { name: 'Framer Motion', short: 'Fm', cat: 'Animation Library', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-violet-500 to-fuchsia-600', textColors: 'text-violet-400', shadow: 'shadow-violet-500/20' },
  { name: 'GSAP', short: 'Gs', cat: 'Motion Design', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-green-400 to-emerald-600', textColors: 'text-green-400', shadow: 'shadow-green-500/20' },
  { name: 'WordPress', short: 'Wp', cat: 'CMS Platform', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-blue-400 to-indigo-600', textColors: 'text-blue-400', shadow: 'shadow-blue-500/20' },
  { name: 'Elementor', short: 'El', cat: 'Page Builder', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-rose-400 to-pink-600', textColors: 'text-rose-400', shadow: 'shadow-rose-500/20' },
  { name: 'WooCommerce', short: 'Wo', cat: 'E-commerce', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-purple-400 to-indigo-600', textColors: 'text-purple-400', shadow: 'shadow-purple-500/20' },
  { name: 'JavaScript', short: 'Js', cat: 'Core Language', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-yellow-400 to-amber-600', textColors: 'text-yellow-400', shadow: 'shadow-yellow-500/20' },
  { name: 'HTML', short: 'Ht', cat: 'Markup', col: 'col-span-1 md:col-span-1 lg:col-span-1', row: 'row-span-1', color: 'from-orange-400 to-red-500', textColors: 'text-orange-400', shadow: 'shadow-orange-500/20' },
  { name: 'CSS', short: 'Cs', cat: 'Styling', col: 'col-span-1 md:col-span-1 lg:col-span-1', row: 'row-span-1', color: 'from-blue-400 to-cyan-500', textColors: 'text-blue-400', shadow: 'shadow-blue-500/20' },
  { name: 'Photoshop', short: 'Ps', cat: 'Image Editing', col: 'col-span-2 md:col-span-2 lg:col-span-2', row: 'row-span-1', color: 'from-blue-500 to-cyan-600', textColors: 'text-blue-400', shadow: 'shadow-blue-500/20' },
];

const marqueeText = [
  "Responsive", "Interactive", "Modern UI", "Motion Design", 
  "Performance", "UX Focused", "SEO Friendly", "Creative Development"
];

function TiltCard({ tool, index }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse percentage (-0.5 to 0.5) to rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Map mouse percentage to percentage for background radial gradient
  const mouseXPct = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const mouseYPct = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  
  const bgGradient = useMotionTemplate`radial-gradient(circle at ${mouseXPct} ${mouseYPct}, rgba(255,255,255,0.06) 0%, transparent 60%)`;

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-full h-full min-h-[160px] p-6 md:p-8 rounded-3xl bg-[#0a0a0f] border border-white/5 cursor-crosshair group ${tool.col} ${tool.row}`}
    >
      {/* Dynamic Radial Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: bgGradient }}
      />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[rgba(255,255,255,0.1)] transition-colors duration-500" />

      {/* Content Container (Lifted in 3D space) */}
      <div 
        className="relative z-10 w-full h-full flex flex-col justify-between"
        style={{ transform: "translateZ(40px)" }}
      >
        <div className="flex justify-between items-start">
          {/* Typographical Glassmorphism Logo */}
          <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg ${tool.shadow} group-hover:scale-110 transition-transform duration-500 border border-white/20 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/20 blur-sm mix-blend-overlay" />
            <span className="relative font-display font-bold text-xl md:text-2xl text-white tracking-tighter drop-shadow-md">{tool.short}</span>
          </div>
          
          {/* Tooltip Tag */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
            className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs text-white/70 backdrop-blur-md whitespace-nowrap"
          >
            {tool.cat}
          </motion.div>
        </div>

        <div className="mt-8">
          <span className={`font-display font-bold text-lg md:text-xl lg:text-2xl text-white transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${tool.color} block`}>
            {tool.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function TechArsenal() {
  return (
    <section id="tech" className="relative py-16 md:py-32 overflow-hidden bg-[#030305]">
      {/* Cinematic Background Mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-purple/20 via-[#030305] to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-neon-blue/20 via-[#030305] to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwdjYwaDYwVjBIMHptMCAwdjYwaDYwVjBIMHoiLz48L2c+PC9zdmc+')] opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 relative">
          {/* Subtle floating glow behind header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-neon-blue/20 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label inline-block mb-4"
          >
            SKILLS & TECHNOLOGIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-6"
          >
            Modern Web Development <span className="text-gradient drop-shadow-2xl">Tech Stack</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Modern technologies and creative tools used to craft immersive digital experiences.
          </motion.p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 perspective-[2000px]">
          {tools.map((tool, i) => (
            <TiltCard key={tool.name} tool={tool} index={i} />
          ))}
        </div>
      </div>

      {/* Infinite Scrolling Marquee Strip */}
      <div className="relative mt-32 w-full overflow-hidden py-6 bg-white/[0.02] border-y border-white/5 backdrop-blur-sm z-10">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030305] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030305] to-transparent z-20 pointer-events-none" />

        <motion.div 
          animate={{ x: [0, "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap w-max items-center"
        >
          {[...marqueeText, ...marqueeText].map((text, i) => (
            <div key={i} className="flex items-center">
              <span className="px-10 text-white/40 font-display font-semibold uppercase tracking-[0.2em] text-sm md:text-base hover:text-white hover:text-shadow-glow transition-all duration-300 cursor-default">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple shadow-[0_0_10px_rgba(79,142,247,0.5)]" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-12 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/30 text-sm font-light max-w-lg mx-auto"
        >
          Focused on modern UI/UX, smooth animations, responsive development, and premium digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
