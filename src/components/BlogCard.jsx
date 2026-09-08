import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-neon-blue/40 transition-all duration-300 flex flex-col justify-between"
    >
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Category Badge & Meta */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="glass-card text-[11px] font-semibold text-neon-blue px-3 py-1 rounded-full border border-neon-blue/20">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-white/70">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-display font-700 text-xl sm:text-2xl text-white mb-3 group-hover:text-gradient transition-colors leading-snug">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-white/75 text-sm leading-relaxed mb-6 flex-1">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-white/70 bg-white/5 px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer / Read More */}
      <div className="px-6 sm:px-7 py-4 border-t border-white/10 flex items-center justify-between bg-white/[0.01]">
        <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-neon-blue" />
            <span>{post.date}</span>
          </span>
          {post.time && (
            <>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-white/60">
                <Clock size={12} className="text-neon-purple" />
                <span>{post.time}</span>
              </span>
            </>
          )}
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="text-xs font-semibold text-neon-blue group-hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Read Article</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
