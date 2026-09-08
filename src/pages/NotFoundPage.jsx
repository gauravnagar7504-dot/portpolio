import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Compass, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen pt-36 pb-24 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden text-white">
      <SEOHead
        title="404 - Page Not Found | Dynamic Designing"
        description="The requested page could not be found."
      />

      {/* Background glow */}
      <div className="glow-orb w-[500px] h-[500px] bg-neon-purple/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-lg">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-display font-900 text-8xl sm:text-9xl text-gradient block mb-4 tracking-tighter"
        >
          404
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl font-display font-700 mb-4"
        >
          Lost in Digital Space
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-sm sm:text-base leading-relaxed mb-8"
        >
          The page or asset you are looking for has been moved, renamed, or never existed in the first place. Let's get you back on track.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link to="/" className="btn-primary py-2.5 px-6 text-sm flex items-center gap-2">
            <Home size={15} />
            <span>Return Home</span>
          </Link>

          <Link to="/portfolio" className="btn-outline py-2.5 px-6 text-sm flex items-center gap-2">
            <Compass size={15} />
            <span>Explore Portfolio</span>
          </Link>

          <Link to="/blog" className="glass-card py-2.5 px-5 text-sm rounded-full border border-white/10 hover:border-neon-blue/40 text-white/70 hover:text-white flex items-center gap-2 transition-colors">
            <BookOpen size={15} />
            <span>Read Blog</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
