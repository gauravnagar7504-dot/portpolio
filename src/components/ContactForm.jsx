import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageCircle, Mail, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Hotels & Luxury Resorts',
    budget: '₹50,000 - ₹1,00,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const projectTypes = [
    'Hotels & Luxury Resorts',
    'Salons & Beauty Ateliers',
    'Dentists & Medical Clinics',
    'Gyms & Fitness Studios',
    'Coaching & Education',
    'Wedding & Visual Storytelling',
    'Bespoke Brand & UI/UX',
    'Other / Custom Project',
  ];

  const budgetRanges = [
    '₹35,000 - ₹50,000 (Starter Package)',
    '₹50,000 - ₹1,00,000 (Signature Bespoke)',
    '₹1,00,000 - ₹2,50,000 (Elite Flagship)',
    '₹2,50,000+ (Enterprise Custom)',
    '$1,000 - $3,000 USD (International)',
    '$3,000+ USD (International Enterprise)',
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleWhatsAppSend = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name.');
      return;
    }
    const text = `Hi Gaurav (Dynamic Designing),%0A%0AI'd like to discuss a website project:%0A%0A• *Name:* ${encodeURIComponent(formData.name)}%0A• *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A• *Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A• *Project Type:* ${encodeURIComponent(formData.projectType)}%0A• *Budget Range:* ${encodeURIComponent(formData.budget)}%0A• *Project Details:* ${encodeURIComponent(formData.message || 'Looking to discuss requirements')}`;
    window.open(`https://wa.me/917597557904?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setError('Please provide at least an email address or phone number.');
      return;
    }

    // Compose mailto as fallback and show success card
    const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:gauravnagar7504@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-card rounded-3xl p-8 sm:p-12 border border-neon-blue/40 text-center relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 size={32} />
            </div>

            <h3 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">
              Inquiry Dispatched Successfully!
            </h3>

            <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. We typically review requirements and respond within 2 hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleWhatsAppSend}
                className="btn-primary py-3 px-6 text-sm inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Chat Immediately on WhatsApp</span>
              </button>

              <button
                onClick={() => setSubmitted(false)}
                className="btn-outline py-3 px-6 text-sm"
              >
                Send Another Message
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="glow-orb w-64 h-64 bg-neon-blue/10 -top-20 -right-20 pointer-events-none" />

            <div className="flex items-center gap-2 mb-6">
              <Sparkles size={16} className="text-neon-blue" />
              <span className="text-xs font-display font-semibold uppercase tracking-wider text-neon-blue">
                Project Consultation Form
              </span>
            </div>

            <h3 className="font-display font-700 text-2xl sm:text-3xl text-white mb-2">
              Tell Us About Your Project
            </h3>
            <p className="text-white/50 text-xs sm:text-sm mb-8">
              Fill in your details below and we will get back with a tailored scope, timeline, and quote.
            </p>

            {error && (
              <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {error}
              </div>
            )}

            <div className="space-y-6 text-left">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Your Name <span className="text-neon-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Gaurav Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/30 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Email Address <span className="text-neon-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/30 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/30 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Project Type / Industry
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white outline-none transition-all cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0a0a14] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Estimated Budget */}
              <div>
                <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  Estimated Investment Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white outline-none transition-all cursor-pointer"
                >
                  {budgetRanges.map((range) => (
                    <option key={range} value={range} className="bg-[#0a0a14] text-white">
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Project Details / Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                  Project Vision & Scope
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your brand, preferred deadline, inspirations, or specific features you need (e.g. online booking, multi-page layout, animations)..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/30 outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 btn-primary py-3.5 px-8 text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail size={16} />
                  <span>Submit Inquiry via Email</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full glass-card border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white hover:bg-emerald-500/10 text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle size={17} />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-white/30 text-center pt-2">
                🔒 We respect your privacy. No spam. Direct consultation with lead developer.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
