import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import heroImg from '../assets/images/hero_workspace.webp';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay },
});

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        alpha: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '79,142,247' : '139,92,246',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[auto] md:min-h-screen flex items-center overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Background glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/10 top-[-100px] left-[-200px] z-0" />
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/10 bottom-0 right-[-150px] z-0" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(79,142,247,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79,142,247,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text content */}
        <div>
          {/* Badge */}
          <motion.div
            {...fadeUp(0.1)}
            className="hidden md:inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 border border-neon-blue/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse-glow" />
            <span className="text-xs font-display font-semibold text-white/60 tracking-widest uppercase">
              Turning Business Ideas into Visual Mastery
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="section-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white mb-5 leading-[1.12]"
          >
            I Build{' '}
            <span className="text-gradient">Modern</span>
            <br />
            Websites That
            <br />
            Make Brands
            <br />
            <span className="text-gradient">Look Premium</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-white/50 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            I craft cinematic digital experiences that elevate brands through
            custom website development, bold UI/UX design, and pixel-perfect execution.
            Let's build something iconic together.
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary flex items-center gap-2 relative z-10">
              View My Work
              <ArrowRight size={16} />
            </a>
            <a href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20talk%20about%20a%20project." target="_blank" rel="noopener noreferrer" className="btn-outline flex items-center gap-2">
              Let's Talk
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-10 sm:mt-16 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-10"
          >
            {[
              { value: '3+', label: 'Years of Craft' },
              { value: '50+', label: 'Projects Done' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl sm:text-2xl font-800 text-gradient">{stat.value}</div>
                <div className="text-[11px] sm:text-xs text-white/40 font-medium tracking-wide mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 blur-2xl animate-pulse-glow" />

          {/* Portrait container */}
          <div className="relative rounded-3xl overflow-hidden border border-white/8 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
            style={{ background: 'linear-gradient(145deg, rgba(79,142,247,0.1), rgba(139,92,246,0.05))' }}
          >
            <img
              src={heroImg}
              alt="Dynamic Designing — Premium Web Design Studio"
              fetchpriority="high"
              decoding="async"
              width="460"
              height="613"
              className="w-full max-w-[460px] object-cover object-center"
              style={{ aspectRatio: '3/4' }}
            />
            {/* Bottom gradient */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-[#050508] to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/30"
      >
        <MousePointer2 size={14} />
        <div
          className="w-px h-12 bg-gradient-to-b from-neon-blue/50 to-transparent animate-pulse"
          style={{ background: 'linear-gradient(to bottom, rgba(79,142,247,0.5), transparent)' }}
        />
      </motion.div>
    </section>
  );
}
