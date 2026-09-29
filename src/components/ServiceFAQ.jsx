import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function ServiceFAQ({ title = 'Frequently Asked Questions', subtitle = 'Clear answers to common questions about our process, delivery, and technology.', faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-3.5 py-1 mb-4 border border-neon-blue/20">
            <HelpCircle size={13} className="text-neon-blue" />
            <span className="text-[11px] font-display font-semibold text-white/70 tracking-wider uppercase">
              Clarity & Answers
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl text-white mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/8 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-600 text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full glass-card border border-white/10 flex items-center justify-center shrink-0 text-white/60 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-neon-blue border-neon-blue/40' : ''
                    }`}
                  >
                    <ChevronDown size={15} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-[15px] text-white/70 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
