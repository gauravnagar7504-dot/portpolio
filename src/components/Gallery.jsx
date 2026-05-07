import React from 'react';
import { motion } from 'framer-motion';
import g1 from '../assets/images/gallery1.png';
import g2 from '../assets/images/gallery2.png';
import g3 from '../assets/images/gallery3.png';
import epicureanImg from '../assets/images/epicurean_haven.png';
import stadiumImg from '../assets/images/stadium_vibes.png';
import vogueImg from '../assets/images/vogue_edit.png';

const galleryItems = [
  { img: g1, title: 'Neon Abstracts', label: 'Digital Art', col: 'lg:col-span-1', row: 'row-span-2' },
  { img: g2, title: 'Chrome Pulse', label: '3D Design', col: 'lg:col-span-1', row: '' },
  { img: epicureanImg, title: 'Epicurean Haven', label: 'Web Design', col: 'lg:col-span-1', row: '' },
  { img: g3, title: 'Cipher Head', label: 'Concept Art', col: 'lg:col-span-1', row: 'row-span-2' },
  { img: stadiumImg, title: 'Stadium Vibes', label: 'Poster Design', col: 'lg:col-span-1', row: '' },
  { img: vogueImg, title: 'Vogue Edit', label: 'Fashion', col: 'lg:col-span-1', row: '' },
];

export default function Gallery() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label block mb-4"
          >
            Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl text-white"
          >
            Creative <span className="text-gradient">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-sm mt-4"
          >
            A curated glimpse into the visual universe I create.
          </motion.p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${item.row}`}
              style={{
                gridRow: item.row === 'row-span-2' ? 'span 2' : 'span 1',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Info */}
              <div className="absolute bottom-0 inset-x-0 p-5 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="section-label mb-1">{item.label}</div>
                <div className="font-display font-700 text-white text-lg">{item.title}</div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-blue/30 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
