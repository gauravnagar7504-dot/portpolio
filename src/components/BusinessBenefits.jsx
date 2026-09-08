import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Globe, Search, Smartphone, Crown, XCircle, CheckCircle2 } from 'lucide-react';

const benefits = [
  {
    title: 'Build Customer Trust',
    description: 'A clean professional website instantly makes your business look more trusted, reliable, and established to potential customers.',
    icon: ShieldCheck,
  },
  {
    title: 'Get More Leads',
    description: 'Modern websites help businesses attract more customer inquiries, phone calls, and service requests online.',
    icon: TrendingUp,
  },
  {
    title: '24/7 Online Presence',
    description: 'Your website keeps promoting your business day and night, even when your office or store is closed.',
    icon: Globe,
  },
  {
    title: 'Better Google Visibility',
    description: 'SEO-friendly websites help customers discover your business more easily through Google search results.',
    icon: Search,
  },
  {
    title: 'Mobile-Friendly Experience',
    description: 'Responsive websites provide a smooth and professional experience across phones, tablets, and desktops.',
    icon: Smartphone,
  },
  {
    title: 'Stronger Brand Identity',
    description: 'A premium website helps businesses stand out from competitors and create a memorable first impression.',
    icon: Crown,
  },
];

const withoutWebsite = [
  'Limited online visibility',
  'Harder for customers to trust',
  'Missed business opportunities',
  'Weak digital presence',
];

const withWebsite = [
  'Professional business image',
  'More customer inquiries',
  'Better online visibility',
  'Stronger brand authority',
];

export default function BusinessBenefits() {
  return (
    <section id="benefits" className="relative py-16 md:py-32 overflow-hidden bg-[#050508]">
      {/* Background Orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-purple/5 top-[-100px] left-[-200px]" />
      <div className="glow-orb w-[500px] h-[500px] bg-neon-blue/5 bottom-[100px] right-[-150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label inline-block mb-4"
          >
            BUSINESS BENEFITS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            How a Modern Website Helps Your <span className="text-gradient">Business Grow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed font-light"
          >
            A professional website is more than just an online presence — it helps businesses build trust, attract customers, and create a stronger brand image.
          </motion.p>
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-32">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300 relative group overflow-hidden cursor-default"
            >
              {/* Hover Glow Effect inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/5 group-hover:to-neon-purple/5 transition-all duration-500 rounded-2xl" />
              
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center mb-6 border border-white/5 group-hover:border-neon-blue/20 transition-all duration-300 shadow-[0_0_20px_rgba(79,142,247,0.05)] group-hover:shadow-[0_0_30px_rgba(79,142,247,0.15)] relative z-10">
                <benefit.icon className="w-6 h-6 text-neon-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-3 relative z-10 group-hover:text-gradient transition-all duration-300">{benefit.title}</h3>
              <p className="text-white/60 leading-relaxed font-light relative z-10 group-hover:text-white/80 transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra Premium Section: Comparison */}
        <div className="w-full mx-auto mb-16 md:mb-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 items-stretch relative"
          >
            {/* Center Neon Divider Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[1px] bg-gradient-to-b from-transparent via-neon-purple/50 to-transparent -translate-x-1/2 z-0" />
            
            {/* Left Side: Without Website */}
            <div className="flex-1 glass-card p-10 rounded-3xl border border-red-500/10 relative z-10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-red-500/10 transition-all duration-500" />
              <div className="flex items-center gap-3 mb-8">
                <XCircle className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-display font-bold text-white tracking-wide">WITHOUT A WEBSITE</h3>
              </div>
              <ul className="space-y-5">
                {withoutWebsite.map((point, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-3 text-white/50 font-light"
                  >
                    <span className="text-red-400/50 mt-1">•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Side: With Modern Website */}
            <div className="flex-1 glass-card p-10 rounded-3xl border border-neon-blue/20 shadow-[0_0_40px_rgba(79,142,247,0.08)] relative z-10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-neon-blue/20 transition-all duration-500" />
              <div className="flex items-center gap-3 mb-8">
                <CheckCircle2 className="w-6 h-6 text-neon-blue" />
                <h3 className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple tracking-wide">WITH A MODERN WEBSITE</h3>
              </div>
              <ul className="space-y-5">
                {withWebsite.map((point, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-start gap-3 text-white/80 font-light"
                  >
                    <span className="text-neon-blue mt-1">•</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full mx-auto rounded-3xl overflow-hidden"
        >
          {/* CTA Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/10 to-transparent blur-xl" />
          
          <div className="relative glass-card border border-white/10 p-12 md:p-16 text-center rounded-3xl overflow-hidden z-10">
            <div className="absolute -inset-[100%] animate-[spin_10s_linear_infinite] opacity-20 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-conic from-transparent via-neon-blue/50 to-transparent" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">
              Your Website Is Your <span className="text-gradient">Digital First Impression</span>
            </h3>
            <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">
              A modern website helps businesses build credibility, attract customers, and grow their online presence with confidence.
            </p>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors z-10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Explore My Work
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
