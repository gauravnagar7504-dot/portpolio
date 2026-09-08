import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft, Mail, Clock, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function TermsPage() {
  const termsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Terms of Service | Dynamic Designing',
    description: 'Terms of Service and client engagement agreements for web design, frontend engineering, and digital development services by Dynamic Designing.',
    url: 'https://www.dynamicdesigninng.com/terms-of-service',
  };

  const sections = [
    {
      title: '1. Agreement & Acceptance',
      content: (
        <>
          <p className="mb-4">
            These Terms of Service ("Terms") govern the professional relationship, project deliverables, and commercial engagements between Dynamic Designing ("studio," "we," "us," or "our," led by Gaurav Nagar in Kota, Rajasthan, India) and the client ("you," "your," or "client") engaging our services.
          </p>
          <p>
            By commissioning a project, accepting a formal quotation or proposal, making an initial deposit, or utilizing our website, you agree to be bound by these Terms in full.
          </p>
        </>
      ),
    },
    {
      title: '2. Scope of Services & Statement of Work',
      content: (
        <>
          <p className="mb-3">
            Dynamic Designing specializes in bespoke digital craft. The exact scope, timeline, deliverables, and financial considerations for any engagement are defined in an individualized Statement of Work (SOW), project invoice, or written proposal.
          </p>
          <p className="mb-3">Our core service capabilities include:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>Custom website design, luxury UI/UX architecture, and interactive mockups.</li>
            <li>High-performance frontend engineering (React, Next.js, Vite, Tailwind CSS).</li>
            <li>Technical SEO architecture, Core Web Vitals optimization, and schema.org integration.</li>
            <li>Speed audits, performance tuning, and domain DNS/deployment setup.</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. Client Responsibilities & Materials',
      content: (
        <>
          <p className="mb-3">To ensure timely delivery, the client agrees to:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>Provide necessary text copy, high-resolution logos, brand assets, and photography in a timely manner.</li>
            <li>Provide written feedback and milestone approvals within five (5) business days of presentation.</li>
            <li>Ensure that all media, trademarks, and content supplied to us are owned by the client or legally licensed. The client indemnifies Dynamic Designing against any third-party copyright claims arising from client-provided materials.</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Intellectual Property & Code Ownership',
      content: (
        <>
          <p className="mb-4">
            <strong className="text-white">100% Client Code Ownership:</strong> Upon full settlement of all project invoices and milestone fees, complete intellectual property and copyright ownership of the customized frontend code, graphic assets, layouts, and bespoke branding created specifically for your project transfer entirely to you.
          </p>
          <p className="mb-4">
            <strong className="text-white">Open-Source Technologies:</strong> Underpinning open-source software, packages, and frameworks (e.g., React, Tailwind CSS, Lucide icons) remain governed by their respective open-source licenses (MIT, Apache, etc.).
          </p>
          <p>
            <strong className="text-white">Studio Portfolio Rights:</strong> Dynamic Designing retains the professional right to display completed project screenshots, animations, case studies, and live demo links within our portfolio and marketing channels, unless an explicit NDA prohibiting public attribution was executed prior to kickoff.
          </p>
        </>
      ),
    },
    {
      title: '5. Payment Structure & Milestones',
      content: (
        <>
          <p className="mb-3">All project pricing is communicated with transparent, fixed milestone schedules:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li><strong className="text-white">Kickoff Deposit:</strong> A standard 50% deposit is required before engineering sprints and dedicated design hours are allocated.</li>
            <li><strong className="text-white">Final Completion:</strong> The remaining 50% balance is due upon final design approval, prior to final source code repository transfer or production domain DNS cutover.</li>
            <li><strong className="text-white">Invoicing & Late Fees:</strong> Invoices are payable via bank wire, UPI, or international digital payment processors. Invoices unpaid after 14 calendar days may pause active development.</li>
          </ul>
        </>
      ),
    },
    {
      title: '6. Revisions & Scope Changes',
      content: (
        <>
          <p className="mb-4">
            Every project includes up to two (2) rounds of comprehensive revisions during the design and prototype phases to ensure the final output aligns perfectly with your vision.
          </p>
          <p>
            Any structural changes, new feature requests, extra page additions, or third-party integrations requested outside the agreed Statement of Work will be quoted separately as an add-on or change order at our standard hourly or fixed package rate.
          </p>
        </>
      ),
    },
    {
      title: '7. 30-Day Post-Launch Bug-Fix Warranty',
      content: (
        <p>
          We stand by the quality of our craftsmanship. Dynamic Designing provides a complimentary <strong className="text-white">30-day post-handover warranty</strong> covering any functional defects, layout glitches, or code bugs that deviate from the agreed specifications. Any post-launch issues reported within this window are resolved promptly at zero additional cost.
        </p>
      ),
    },
    {
      title: '8. Limitation of Liability & Third-Party Platforms',
      content: (
        <>
          <p className="mb-4">
            Dynamic Designing builds websites according to modern engineering standards. However, we cannot be held liable for indirect, incidental, or consequential damages resulting from downtime, security breaches, or API changes originating from third-party services—including but not limited to hosting providers (Vercel, Netlify, AWS), domain registrars, payment gateways, or client-side server misconfigurations.
          </p>
          <p>
            In all circumstances, our maximum aggregate legal liability is strictly capped at the total fees actually paid to Dynamic Designing for the specific project under dispute.
          </p>
        </>
      ),
    },
    {
      title: '9. Governing Law & Dispute Resolution',
      content: (
        <p>
          These Terms of Service are governed by and construed in accordance with the laws of India. Any legal dispute, controversy, or claim arising from or relating to our services shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-white">Kota, Rajasthan, India</strong>.
        </p>
      ),
    },
    {
      title: '10. Contact for Legal Notices',
      content: (
        <>
          <p className="mb-4">For questions regarding these Terms or formal legal inquiries, please contact our studio leadership:</p>
          <div className="p-4 rounded-xl glass-card border border-white/10 inline-flex flex-col gap-1 text-sm">
            <span className="font-semibold text-white">Dynamic Designing — Gaurav Nagar</span>
            <span className="text-white/70">Lead Designer & Full-Stack Developer</span>
            <span className="text-white/70">Kota, Rajasthan, India</span>
            <span className="text-neon-blue font-medium mt-1">
              <a href="mailto:gauravnagar7504@gmail.com" className="hover:underline">
                gauravnagar7504@gmail.com
              </a>
            </span>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-20 relative overflow-hidden text-white">
      <SEOHead
        title="Terms of Service | Dynamic Designing"
        description="Official Terms of Service for Dynamic Designing. Learn about project deliverables, milestone payments, intellectual property ownership, and 30-day warranty terms."
        canonicalUrl="https://www.dynamicdesigninng.com/terms-of-service"
        schemaData={termsSchema}
      />

      {/* Ambient background glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-purple/8 top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

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
            <Scale size={14} />
            <span>Client Engagement Terms</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-4 tracking-tight">
            Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-neon-blue" />
              <span>Effective Date: September 9, 2026</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <FileText size={13} className="text-neon-purple" />
              <span>100% Code & Deliverables Ownership to Client</span>
            </span>
          </div>
        </header>

        {/* Terms Sections */}
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

        {/* Bottom Consultation Link */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-display text-base font-700 text-white mb-1">Ready to build your bespoke digital flagship?</h3>
            <p className="text-xs text-white/70">Let’s discuss your project requirements, timeline, and custom quotation.</p>
          </div>
          <Link
            to="/contact"
            className="btn-primary text-xs py-2.5 px-5 shrink-0 inline-flex items-center gap-1.5"
          >
            <Mail size={14} />
            <span>Contact Founder Directly</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
