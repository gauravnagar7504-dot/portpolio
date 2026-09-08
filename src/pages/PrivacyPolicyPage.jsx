import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowLeft, Mail, Clock, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicyPage() {
  const privacySchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | Dynamic Designing',
    description: 'Privacy Policy of Dynamic Designing detailing how client information is collected, safeguarded, and processed in accordance with global data protection standards.',
    url: 'https://www.dynamicdesigninng.com/privacy-policy',
  };

  const sections = [
    {
      title: '1. Overview & Data Controller',
      content: (
        <>
          <p className="mb-4">
            Dynamic Designing ("we," "our," or "studio"), founded and led by Gaurav Nagar in Kota, Rajasthan, India, operates the website{' '}
            <a href="https://www.dynamicdesigninng.com" className="text-neon-blue hover:underline">
              dynamicdesigninng.com
            </a>{' '}
            and provides bespoke website design, UI/UX development, frontend engineering, and technical SEO services to clients worldwide.
          </p>
          <p>
            We take data privacy and intellectual property confidentiality seriously. This Privacy Policy details how we collect, handle, protect, and process your personal and business data when you interact with our website, request project quotes, or engage our engineering services.
          </p>
        </>
      ),
    },
    {
      title: '2. Information We Collect',
      content: (
        <>
          <p className="mb-3">We only collect information directly provided by you or necessary to execute custom digital projects:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li><strong className="text-white">Contact Details:</strong> Your full name, email address, WhatsApp/telephone number, and business or brand name.</li>
            <li><strong className="text-white">Project Specifications:</strong> Brand briefs, target audience profiles, preferred design styles, timeline requirements, and budget ranges submitted via our contact forms or direct communications.</li>
            <li><strong className="text-white">Client Assets & Credentials:</strong> Logos, typography guidelines, photographic assets, domain registrar logins, or hosting/DNS credentials shared voluntarily for deployment purposes.</li>
            <li><strong className="text-white">Automated Technical Diagnostics:</strong> Standard anonymized browser logs, device viewport types, and network latency metrics to maintain our sub-1.5s loading performance.</li>
          </ul>
        </>
      ),
    },
    {
      title: '3. How We Use Your Information',
      content: (
        <>
          <p className="mb-3">Your information is used exclusively to facilitate legitimate business and engineering services:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li>To formulate customized project proposals, timeline estimates, and transparent price quotes.</li>
            <li>To communicate project milestones, design reviews, prototype demonstrations, and launch deliverables.</li>
            <li>To configure DNS records, SSL certificates, and deploy custom web builds to your chosen production hosts.</li>
            <li>To issue professional invoices, milestone receipts, and contract documentation.</li>
            <li>We <strong className="text-white">never</strong> sell, rent, monetize, or trade your personal or business data to data brokers or third-party marketing networks.</li>
          </ul>
        </>
      ),
    },
    {
      title: '4. Confidentiality & Non-Disclosure',
      content: (
        <p>
          All unreleased business concepts, proprietary workflows, unpublished branding assets, and commercial details shared with Dynamic Designing are treated with the highest degree of confidentiality. If your enterprise requires a mutual Non-Disclosure Agreement (NDA) prior to project scoping, we gladly execute standard bilateral NDAs before review.
        </p>
      ),
    },
    {
      title: '5. Cookies & Local Storage',
      content: (
        <>
          <p className="mb-3">
            Dynamic Designing believes in clean, lightweight web engineering. We do not use invasive third-party cross-site advertising cookies or tracking pixels.
          </p>
          <p>
            We only utilize essential local storage and session variables necessary for functional user experience—such as remembering UI filter tabs, active navigation states, and performance monitoring.
          </p>
        </>
      ),
    },
    {
      title: '6. Third-Party Infrastructure Providers',
      content: (
        <>
          <p className="mb-3">To maintain high availability and security, we partner with industry-leading infrastructure services:</p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li><strong className="text-white">Hosting & Edge CDN:</strong> Vercel and Netlify for ultra-fast global static content distribution and automated DDoS protection.</li>
            <li><strong className="text-white">Direct Messaging:</strong> WhatsApp (Meta Platforms) for direct, encrypted client communication upon voluntary user initiation.</li>
            <li><strong className="text-white">Typography & Assets:</strong> Self-hosted local font files ensuring 0 external tracking lookups to remote font servers during page load.</li>
          </ul>
        </>
      ),
    },
    {
      title: '7. Data Security & Storage',
      content: (
        <p>
          All communications with dynamicdesigninng.com are strictly encrypted via 256-bit TLS/SSL certificates (HTTPS). Client credentials and deployment keys provided during active contract periods are stored inside encrypted password managers with two-factor authentication (2FA) and permanently purged upon formal project handover unless ongoing maintenance is contracted.
        </p>
      ),
    },
    {
      title: '8. Compliance & Your Legal Rights (DPDP & GDPR)',
      content: (
        <>
          <p className="mb-3">
            In compliance with India's <em>Digital Personal Data Protection (DPDP) Act 2023</em> and the European Union's <em>General Data Protection Regulation (GDPR)</em>, you hold the following rights:
          </p>
          <ul className="list-disc list-inside space-y-2 text-white/80">
            <li><strong className="text-white">Right of Access:</strong> Request a copy of any personal data we hold relating to you or your business.</li>
            <li><strong className="text-white">Right to Rectification:</strong> Request corrections to outdated or incomplete information.</li>
            <li><strong className="text-white">Right to Erasure:</strong> Request the deletion of your personal contact data from our active inquiries database.</li>
            <li><strong className="text-white">Right to Withdraw Consent:</strong> Revoke consent for ongoing promotional or follow-up communications at any time.</li>
          </ul>
        </>
      ),
    },
    {
      title: '9. Inquiries & Data Protection Contact',
      content: (
        <>
          <p className="mb-4">
            If you have questions regarding this Privacy Policy, wish to exercise your statutory privacy rights, or request an NDA, please contact our data controller directly:
          </p>
          <div className="p-4 rounded-xl glass-card border border-white/10 inline-flex flex-col gap-1 text-sm">
            <span className="font-semibold text-white">Dynamic Designing — Gaurav Nagar</span>
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
        title="Privacy Policy | Dynamic Designing"
        description="Read the official Privacy Policy of Dynamic Designing. Learn how your data, project specifications, and privacy rights are protected under DPDP Act 2023 and GDPR."
        canonicalUrl="https://www.dynamicdesigninng.com/privacy-policy"
        schemaData={privacySchema}
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
            <ShieldCheck size={14} />
            <span>Official Legal Document</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-800 text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-neon-blue" />
              <span>Effective Date: September 9, 2026</span>
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Lock size={13} className="text-neon-purple" />
              <span>DPDP Act 2023 & GDPR Compliant</span>
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

        {/* Bottom Consultation Link */}
        <div className="mt-14 p-6 rounded-2xl glass-card border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-display text-base font-700 text-white mb-1">Have questions about your project confidentiality?</h3>
            <p className="text-xs text-white/70">We are happy to sign an NDA before you share sensitive project materials.</p>
          </div>
          <a
            href="mailto:gauravnagar7504@gmail.com?subject=Privacy%20or%20NDA%20Inquiry"
            className="btn-primary text-xs py-2.5 px-5 shrink-0 inline-flex items-center gap-1.5"
          >
            <Mail size={14} />
            <span>Email Data Controller</span>
          </a>
        </div>
      </div>
    </div>
  );
}
