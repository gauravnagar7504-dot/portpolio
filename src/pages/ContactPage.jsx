import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';
import CTA from '../components/CTA';

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Dynamic Designing',
    description: 'Get in touch with Dynamic Designing to discuss custom website development, UI/UX design, and digital consulting.',
    url: 'https://www.dynamicdesigninng.com/contact',
    mainEntity: {
      '@type': 'ProfessionalService',
      name: 'Dynamic Designing',
      telephone: '+917597557904',
      email: 'gauravnagar7504@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <div className="pt-16 pb-16">
      <SEOHead
        title="Contact Dynamic Designing | Hire A Luxury Web Designer"
        description="Ready to elevate your digital presence? Contact Dynamic Designing for bespoke web design inquiries, luxury UI/UX consulting, and fast project quotes."
        canonicalUrl="https://www.dynamicdesigninng.com/contact"
        schemaData={contactSchema}
      />

      {/* Hero Header */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 text-center relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-neon-blue/10 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-6 border border-neon-blue/20"
          >
            <Sparkles size={14} className="text-neon-blue" />
            <span className="text-xs font-display font-semibold text-white/70 tracking-wide uppercase">
              Start Your Project
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Let's Craft Something <span className="text-gradient">Truly Extraordinary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Whether you need a bespoke flagship website, a high-converting reservation engine, or a complete brand overhaul, we are ready to bring your vision to life.
          </motion.p>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left mb-16">
            <a
              href="https://wa.me/917597557904?text=Hi%20Dynamic%20Designing,%20I'd%20like%20to%20hire%20you%20for%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-emerald-500/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle size={20} />
              </div>
              <span className="text-xs text-white/70 uppercase tracking-wider block mb-1">Instant Chat</span>
              <h3 className="text-lg font-display font-700 text-white mb-1">WhatsApp Direct</h3>
              <p className="text-xs text-white/80 mb-4">+91 75975 57904</p>
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                Chat Now <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="mailto:gauravnagar7504@gmail.com"
              className="p-6 rounded-2xl glass-card border border-white/10 hover:border-neon-blue/40 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} />
              </div>
              <span className="text-xs text-white/70 uppercase tracking-wider block mb-1">Email Inquiries</span>
              <h3 className="text-lg font-display font-700 text-white mb-1">Direct Mail</h3>
              <p className="text-xs text-white/80 mb-4 truncate">gauravnagar7504@gmail.com</p>
              <span className="text-xs text-neon-blue font-semibold flex items-center gap-1">
                Send Email <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <div className="p-6 rounded-2xl glass-card border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple mb-4">
                <MapPin size={20} />
              </div>
              <span className="text-xs text-white/70 uppercase tracking-wider block mb-1">Studio Location</span>
              <h3 className="text-lg font-display font-700 text-white mb-1">Jaipur, Rajasthan</h3>
              <p className="text-xs text-white/80 mb-4">Serving India & Global Clients</p>
              <span className="text-xs text-white/70 flex items-center gap-1">
                <Clock size={12} /> Response in &lt; 2 Hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Consultation Form Section */}
      <section className="px-6 mb-24 relative z-10">
        <ContactForm />
      </section>

      {/* Consultation Banner */}
      <CTA />
    </div>
  );
}
