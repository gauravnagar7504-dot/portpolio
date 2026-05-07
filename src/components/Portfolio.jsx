import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ironFitnessImg from '../assets/images/iron_fitness.png';
import medicareImg from '../assets/images/medicare_clinic.png';
import techfixImg from '../assets/images/techfix_solutions.png';
import prestigeImg from '../assets/images/prestige_real_estate.png';
import wanderluxImg from '../assets/images/wanderlux_travel.png';
import lumiereImg from '../assets/images/lumiere_dining.png';

const projects = [
  {
    id: 1,
    title: 'Iron Fitness',
    label: 'Gym / Fitness Website',
    image: ironFitnessImg,
  },
  {
    id: 2,
    title: 'Medicare Clinic',
    label: 'Healthcare',
    image: medicareImg,
  },
  {
    id: 3,
    title: 'TechFix Solutions',
    label: 'Electronics Repair',
    image: techfixImg,
  },
  {
    id: 4,
    title: 'Prestige Real Estate',
    label: 'Real Estate',
    image: prestigeImg,
  },
  {
    id: 5,
    title: 'Wanderlux',
    label: 'Travel Booking Platform',
    image: wanderluxImg,
  },
  {
    id: 6,
    title: 'Lumière Fine Dining',
    label: 'Fine Dining Restaurant',
    image: lumiereImg,
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 30, scale: 0.94 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: index * 0.07 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{
        boxShadow: hovered
          ? '0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(79,142,247,0.12)'
          : '0 8px 30px rgba(0,0,0,0.5)',
        transition: 'box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.23,1,0.32,1)',
        transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/30 to-transparent" />

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl border transition-all duration-500"
          style={{
            borderColor: hovered ? 'rgba(79,142,247,0.4)' : 'rgba(255,255,255,0.06)',
            boxShadow: hovered ? 'inset 0 0 40px rgba(79,142,247,0.05)' : 'none',
          }}
        />


      </div>

      {/* Card Info */}
      <div className="absolute bottom-0 inset-x-0 p-5">
        <div className="section-label mb-1.5">{project.label}</div>
        <h3 className="font-display text-xl font-700 text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/8 top-0 right-[-200px]" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-blue/6 bottom-0 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-label block mb-4"
              >
                My Work
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="section-title text-4xl md:text-5xl text-white"
              >
                Selected{' '}
                <span className="text-gradient">Creations</span>
              </motion.h2>
            </div>

          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
