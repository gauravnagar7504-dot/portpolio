import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, ArrowLeft, Mail, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function RefundPolicyPage() {
  const refundSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Refund & Cancellation Policy | Dynamic Designing',
    description: 'Refund and cancellation policy of Dynamic Designing detailing milestone terms, deposit allocations, and quality commitment for digital web design services.',
    url: 'https://www.dynamicdesigninng.com/refund-policy',
  };

  const sections = [
    {
      title: '1. Nature of Custom Creative Services',
      content: (
        <>
          <p className="mb-4">
            Dynamic Designing delivers customized digital engineering, luxury UI/UX design, and bespoke frontend web development. Unlike mass-manufactured physical goods or off-the-shelf software subscriptions, our services represent specialized intellectual labor, creative problem solving, and dedicated development hours allocated exclusively to your brand.
          </p>
          <p>
            Because time and creative engineering cannot be retrieved once rendered, our refund policy reflects the milestone-based nature of professional design and development engagements.
          </p>
        </>
      ),
    },
    {
      title: '2. Project Kickoff & Deposit Policy',
      content: (
        <>
          <p className="mb-3">
            Before commencing work on any project, Dynamic Designing requires an upfront deposit (standardly 50% of the total agreed project fee).
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li><strong className="text-white">Before Kickoff:</strong> If a client requests cancellation in writing before discovery meetings, design exploration, or project setup have commenced, a full refund of the deposit minus any third-party transaction or banking fees will be issued.</li>
            <li><strong className="text-white">After Kickoff:</strong> Once active design sprints, wireframing, architecture planning, or code engineering have begun, the upfront deposit is <strong className="text-white">non-refundable</strong>, as it compensates for dedicated studio hours and reserved scheduling.</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. Mid-Project Milestone Cancellations',
      content: (
        <>
          <p className="mb-3">
            We understand that unforeseen business circumstances can arise. If you choose to terminate a project before full completion:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>You will only be responsible for payments covering milestones completed up to the official date of written cancellation notice.</li>
            <li>Any subsequent milestones that have not yet commenced will be formally cancelled, and no further balance will be due.</li>
            <li>All completed source code files, graphic assets, and design components developed for settled milestones will be delivered to you in their current state.</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Quality Commitment & Defect Rectification',
      content: (
        <>
          <p className="mb-3">
            We are committed to delivering websites that achieve 95+ PageSpeed scores, pixel-perfect responsiveness, and luxury visual presentation. To ensure complete alignment:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>Each engagement includes two (2) structured revision cycles during the initial design phase to adjust layouts, typography, and interactive components to your satisfaction.</li>
            <li>We provide a complimentary <strong className="text-white">30-day post-delivery bug-fix warranty</strong>. If any errors, broken interactions, or cross-browser display issues within the agreed scope arise within 30 days after launch, we rectify them at zero cost.</li>
          </ul>
        </>
      ),
    },
    {
      title: '5. Inactive & Abandoned Projects',
      content: (
        <>
          <p className="mb-3">
            A project requires active client collaboration. If a client fails to provide necessary assets, feedback, or milestone sign-offs for more than <strong className="text-white">thirty (30) consecutive calendar days</strong> without prior written notice:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>The project will be designated as dormant, and our studio team may be reassigned to other client queues.</li>
            <li>Deposits and milestone payments made toward dormant projects are forfeit and non-refundable.</li>
            <li>Reactivating a dormant project after 30 days is subject to studio availability and may incur a project restart fee.</li>
          </ul>
        </>
      ),
    },
    {
      title: '6. How to Request Support or Dispute Resolution',
      content: (
        <>
          <p className="mb-4">
            We believe in honest, transparent relationships with every founder and client we work with. If you are dissatisfied with any aspect of our service or have billing questions:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-white/80 mb-4">
            <li>Contact our founder directly at <a href="mailto:gauravnagar7504@gmail.com" className="text-neon-blue hover:underline">gauravnagar7504@gmail.com</a> with the subject line <em>"Project Review / Account Inquiry"</em>.</li>
            <li>Include your project name, invoice number, and specific details regarding your concern.</li>
            <li>We will review your inquiry within two (2) business days and schedule a direct consultation to reach a fair, mutually agreeable resolution.</li>
          </ol>
          <p className="text-xs text-white/70">
            Approved refunds (if applicable under Section 2 or mutual agreement) will be processed to the original payment method within 5–7 business days.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-20 relative overflow-hidden text-white">
      <SEOHead
        title="Refund & Cancellation Policy | Dynamic Designing"
        description="Official Refund and Cancellation Policy of Dynamic Designing. Learn about our deposit terms, milestone cancellations, and 30-day quality guarantee for digital services."
        canonicalUrl="https://www.dynamicdesigninng.com/refund-policy"
        schemaData={refundSchema}
      />

      {/* Ambient background glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-blue/8 top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Navigation / Back link */}
        <div className="mb-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors glass-card px-3.5 py-1.5 rounded-full border border-white/10 hover:border-neon-blue/40"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform text-neon-blue" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12 border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-3.5 py-1 mb-4 border border-neon-blue/30 text-neon-blue text-xs font-semibold">
            <RefreshCw size={14} />
            <span>Fair Business Guidelines</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-4 tracking-tight">
            Refund & Cancellation Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-neon-blue" />
              <span>Effective Date: September 9, 2026</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>Transparent Milestone Allocations</span>
            </span>
          </div>
        </header>

        {/* Policy Content Sections */}
        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <motion.section
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-colors"
            >
              <h2 className="font-display text-xl sm:text-2xl font-700 text-white mb-4">
                {sec.title}
              </h2>
              <div className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                {sec.content}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left flex items-start gap-3">
            <AlertCircle size={20} className="text-neon-blue shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-base font-700 text-white mb-1">Our 100% Quality & Performance Guarantee</h3>
              <p className="text-xs text-white/70">Every client project includes 30 days of post-launch bug fixing and performance audits.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="btn-primary text-xs py-2.5 px-5 shrink-0 inline-flex items-center gap-1.5"
          >
            <Mail size={14} />
            <span>Consult With Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
