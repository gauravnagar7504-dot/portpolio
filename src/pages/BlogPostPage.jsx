import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Check,
  Sparkles,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blog-posts';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-4xl font-display font-800 mb-4">Article Not Found</h1>
        <p className="text-white/60 mb-8 max-w-md">The article you are looking for may have been moved or updated.</p>
        <Link to="/blog" className="btn-primary py-2.5 px-6">
          Back to All Articles
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const currentUrl = `https://www.dynamicdesigninng.com/blog/${post.slug}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: {
          '@type': 'Person',
          name: post.author,
          jobTitle: post.authorRole,
          url: 'https://www.dynamicdesigninng.com/about',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dynamic Designing',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.dynamicdesigninng.com/favicon.png',
          },
        },
        datePublished: post.isoDate,
        dateModified: post.isoDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': currentUrl,
        },
        keywords: post.keywords,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.dynamicdesigninng.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://www.dynamicdesigninng.com/blog',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: currentUrl,
          },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen pt-20 sm:pt-24 pb-20 relative overflow-hidden text-white">
      <SEOHead
        title={`${post.title} | Dynamic Designing`}
        description={post.description}
        canonicalUrl={currentUrl}
        ogType="article"
        schemaData={articleSchema}
      />

      {/* Ambient background glows */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/8 top-0 left-1/2 -translate-x-1/2" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-purple/6 top-1/3 right-[-150px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Navigation & Breadcrumbs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors glass-card px-3.5 py-1.5 rounded-full border border-white/10 hover:border-neon-blue/40"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-neon-blue" />
            <span>All Articles</span>
          </Link>

          <nav aria-label="Breadcrumb" className="text-xs text-white/70">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-neon-blue transition-colors">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="hover:text-neon-blue transition-colors">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90 truncate max-w-[180px] sm:max-w-xs" aria-current="page">
                {post.category}
              </li>
            </ol>
          </nav>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-3.5 py-1 mb-6 border border-neon-blue/30 text-neon-blue text-xs font-semibold">
            <span>{post.category}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl glass-card border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple flex items-center justify-center font-display font-700 text-sm">
                GN
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{post.author}</p>
                <p className="text-xs text-white/70">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-white/70">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-neon-blue" />
                <span>{post.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-neon-blue" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-10 text-white/80 leading-relaxed font-sans text-base sm:text-lg mb-16">
          {post.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-display font-700 text-2xl sm:text-3xl text-white pt-4 border-t border-white/10">
                {section.heading}
              </h2>
              <div className="whitespace-pre-line text-white/70 leading-relaxed text-sm sm:text-base">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        {/* Share & Consultation Bar */}
        <div className="p-5 sm:p-6 rounded-2xl glass-card border border-white/10 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-white/70 block mb-1">Found this helpful?</span>
            <p className="text-sm sm:text-base font-semibold text-white">Share this guide with founders & creators</p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - Read here: ${currentUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-2 sm:px-4 rounded-lg glass-card border border-white/10 hover:border-emerald-500/40 text-emerald-400 text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <MessageCircle size={15} className="shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-2 sm:px-4 rounded-lg glass-card border border-white/10 hover:border-sky-400/40 text-sky-400 text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Share</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="h-10 px-2 sm:px-4 rounded-lg glass-card border border-white/10 hover:border-neon-blue/40 text-white/80 text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
            >
              {copied ? <Check size={15} className="text-emerald-400 shrink-0" /> : <Share2 size={15} className="shrink-0" />}
              <span>{copied ? 'Copied!' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* In-article Consultation Box */}
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-neon-blue/10 via-[#080b18] to-neon-purple/10 border border-neon-blue/30 mb-20 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="glass-card text-[11px] font-semibold text-neon-blue px-3 py-1 rounded-full border border-neon-blue/20 mb-3 inline-block">
                Direct Collaboration
              </span>
              <h3 className="text-2xl font-display font-800 text-white mb-2">
                Ready to Upgrade Your Website?
              </h3>
              <p className="text-white/60 text-sm">
                We craft bespoke, ultra-fast websites designed to rank on Google and convert visitors into high-paying clients.
              </p>
            </div>

            <a
              href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20discuss%20a%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 py-3 px-6 text-sm flex items-center gap-2"
            >
              <Sparkles size={16} />
              <span>Discuss Your Project</span>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="font-display font-700 text-2xl text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group p-6 rounded-xl glass-card border border-white/10 hover:border-neon-blue/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] text-neon-blue font-semibold block mb-2">{related.category}</span>
                    <h4 className="font-display font-700 text-lg text-white mb-2 group-hover:text-gradient transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-xs text-white/75 line-clamp-2">{related.excerpt}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-white/70">
                    <span>{related.date} • {related.readTime}</span>
                    <span className="text-neon-blue flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
