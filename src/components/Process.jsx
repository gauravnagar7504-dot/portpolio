import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep dive into your brand, goals, target audience, and competitive landscape.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'Craft a clear design roadmap aligned with your business objectives and timeline.',
  },
  {
    num: '03',
    title: 'Wireframe',
    desc: 'Layout architecture and information hierarchy designed for optimal user flow.',
  },
  {
    num: '04',
    title: 'Design',
    desc: 'Pixel-perfect visual design with premium aesthetics and brand consistency.',
  },
  {
    num: '05',
    title: 'Develop',
    desc: 'Clean, performant code bringing the design to life with smooth interactions.',
  },
  {
    num: '06',
    title: 'Launch',
    desc: 'Thorough testing, final polish, and a seamless handoff or live deployment.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-16 md:py-32 overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/5 -bottom-[200px] right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label block mb-4"
          >
            How I Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl text-white"
          >
            Our Web Design & <span className="text-gradient">Development Process</span>
          </motion.h2>
        </div>

        {/* Steps grid */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0 m-0">
          {steps.map((step, i) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 }}
              className="glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden group list-none"
            >
              {/* Step number (large background) */}
              <div aria-hidden="true" className="absolute -top-2 right-2 font-display text-7xl font-800 text-white/3 select-none group-hover:text-white/5 transition-colors duration-500">
                {step.num}
              </div>

              {/* Number badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/20 mb-5">
                <span className="font-display text-sm font-700 text-gradient">{step.num}</span>
              </div>

              <h3 className="font-display text-xl font-700 text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
