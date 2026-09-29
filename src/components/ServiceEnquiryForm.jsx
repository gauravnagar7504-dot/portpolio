import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, MessageCircle, Sparkles, Send } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

export default function ServiceEnquiryForm({ defaultService = 'Website Development' }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: defaultService,
    budget: '₹50,000 - ₹1,00,000',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    'Website Development',
    'Custom Website Development',
    'WordPress Development',
    'Shopify Development',
    'E-commerce Development',
    'Website Redesign',
    'UI/UX Design',
  ];

  const budgetRanges = [
    '₹35,000 - ₹50,000 (Starter Package)',
    '₹50,000 - ₹1,00,000 (Signature Business)',
    '₹1,00,000 - ₹2,50,000 (Elite Custom)',
    '₹2,50,000+ (Enterprise Architecture)',
    '$1,000 - $3,000 USD (International)',
    '$3,000+ USD (Global Enterprise)',
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleWhatsAppSend = () => {
    if (!formData.name.trim()) {
      setError('Please provide your name.');
      return;
    }
    const text = `Hi Dynamic Designing,%0A%0AI'd like to discuss a project:%0A%0A• *Name:* ${encodeURIComponent(formData.name)}%0A• *Business Name:* ${encodeURIComponent(formData.businessName || 'N/A')}%0A• *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A• *Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A• *Service Required:* ${encodeURIComponent(formData.serviceRequired)}%0A• *Estimated Budget:* ${encodeURIComponent(formData.budget)}%0A• *Project Details:* ${encodeURIComponent(formData.projectDetails || 'Interested in discussing scope and timeline.')}`;
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
      setError('Please provide at least an email address or WhatsApp phone number.');
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${formData.serviceRequired} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nBusiness Name: ${formData.businessName || 'N/A'}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService Required: ${formData.serviceRequired}\nEstimated Budget: ${formData.budget}\n\nProject Details:\n${formData.projectDetails}`
    );
    window.location.href = `mailto:gauravnagar7504@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="glass-card rounded-3xl p-8 sm:p-12 border border-neon-blue/40 text-center relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center mb-6">
              <CheckCircle2 size={32} />
            </div>

            <h3 className="font-display font-800 text-2xl sm:text-3xl text-white mb-3">
              Project Details Received
            </h3>

            <p className="text-white/70 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
              Thank you, <span className="text-white font-semibold">{formData.name}</span>. We review every requirement thoroughly and will get back to you with a tailored technical scope and estimate within 2 to 4 business hours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="btn-primary py-3 px-6 text-sm inline-flex items-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Instant WhatsApp Direct Chat</span>
              </button>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-outline py-3 px-6 text-sm"
              >
                Submit Another Project Scope
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div className="glow-orb w-72 h-72 bg-neon-blue/10 -top-24 -right-24 pointer-events-none" />

            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-neon-blue" />
              <span className="text-xs font-display font-semibold uppercase tracking-wider text-neon-blue">
                Project Consultation
              </span>
            </div>

            <h3 className="font-display font-700 text-2xl sm:text-3xl text-white mb-2">
              Start Your Project Conversation
            </h3>
            <p className="text-white/60 text-xs sm:text-sm mb-8 leading-relaxed max-w-xl">
              Fill in your specifications below. We provide honest technical guidance, clear milestone planning, and transparent fixed estimates.
            </p>

            {error && (
              <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                {error}
              </div>
            )}

            <div className="space-y-6 text-left">
              {/* Row 1: Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Your Name <span className="text-neon-blue">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Gaurav Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/40 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-business" className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    id="form-business"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Studio or Brand Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/40 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Email Address <span className="text-neon-blue">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/40 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="form-phone" className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/40 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Service Required & Estimated Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-30">
                <CustomDropdown
                  id="serviceRequired"
                  label="Service Required"
                  options={servicesList}
                  value={formData.serviceRequired}
                  onChange={(val) => {
                    setFormData((prev) => ({ ...prev, serviceRequired: val }));
                  }}
                />

                <CustomDropdown
                  id="serviceBudget"
                  label="Estimated Investment Budget"
                  options={budgetRanges}
                  value={formData.budget}
                  onChange={(val) => {
                    setFormData((prev) => ({ ...prev, budget: val }));
                  }}
                />
              </div>

              {/* Row 4: Project Details */}
              <div className="relative z-10">
                <label htmlFor="form-details" className="block text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">
                  Project Details & Goals
                </label>
                <textarea
                  id="form-details"
                  name="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Share details about your existing site (if any), key goals, target audience, inspirations, or specific features you need..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-sm text-white placeholder-white/40 outline-none transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 btn-primary py-3.5 px-8 text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>Discuss My Project</span>
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

              <div className="flex items-center justify-center gap-4 text-xs text-white/50 pt-2">
                <span>✓ Direct founder communication</span>
                <span>•</span>
                <span>✓ Confidential & NDA friendly</span>
                <span>•</span>
                <span>✓ No obligation</span>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
