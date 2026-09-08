import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blog-posts';

export default function BlogListPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Pricing & Business', 'Design & UX', 'Hospitality', 'Web Trends'];

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Dynamic Designing Web Development & Design Insights',
    description: 'Expert insights, web design pricing guides, UX strategies, and digital trends for modern businesses.',
    url: 'https://www.dynamicdesigninng.com/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Dynamic Designing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.dynamicdesigninng.com/favicon.png',
      },
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.isoDate,
      url: `https://www.dynamicdesigninng.com/blog/${post.slug}`,
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden text-white">
      <SEOHead
        title="Web Design & Digital Growth Blog | Dynamic Designing"
        description="Read expert guides on web development pricing in India, luxury UX design best practices, hotel reservation websites, and modern digital trends."
        canonicalUrl="https://www.dynamicdesigninng.com/blog"
        schemaData={blogSchema}
      />

      {/* Background glow orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/8 top-0 left-1/2 -translate-x-1/2" />
      <div className="glow-orb w-[450px] h-[450px] bg-neon-purple/6 bottom-1/4 right-[-150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-5 border border-neon-blue/20"
          >
            <BookOpen size={14} className="text-neon-blue" />
            <span className="text-xs font-display font-semibold text-white/70 tracking-wide uppercase">
              Insights & Strategic Guides
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Web Design & <span className="text-gradient">Digital Growth Insights</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg leading-relaxed"
          >
            Unfiltered articles, pricing breakdowns, UX case studies, and conversion strategies engineered to help businesses scale with bespoke web architecture.
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-nowrap items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none py-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-neon-blue text-white shadow-[0_0_16px_rgba(79,142,247,0.45)] border border-neon-blue'
                  : 'glass-card text-white/60 hover:text-white border border-white/10 hover:border-white/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 sm:p-12 border border-neon-blue/20 text-center relative overflow-hidden"
        >
          <div className="glow-orb w-64 h-64 bg-neon-blue/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-display font-800 text-white mb-3 relative z-10">
            Have a Specific Website Question or Project in Mind?
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-6 relative z-10">
            Skip the guesswork. Let’s talk about your business requirements, timeline, and how a custom web experience can deliver measurable growth.
          </p>
          <a
            href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I%20read%20your%20blog%20and%20wanted%20to%20consult%20on%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-8 relative z-10"
          >
            <Sparkles size={16} />
            <span>Get Free Strategic Consultation</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
