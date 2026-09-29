import React from 'react';
import { Check } from 'lucide-react';

export default function CustomVsTemplateComparison() {
  const comparisonItems = [
    {
      factor: 'Design & Visual Freedom',
      template: 'Constrained by grid templates, fixed block options, and theme-author assumptions.',
      custom: '100% bespoke architecture shaped around your exact visual brand and UX customer journey.',
    },
    {
      factor: 'Flexibility & Workflows',
      template: 'Requires forcing your business operations into pre-made theme configurations or rigid plugins.',
      custom: 'Built around your exact internal workflows, role permissions, custom calculators, and logic.',
    },
    {
      factor: 'Scalability & Load Capacity',
      template: 'Can degrade under high traffic or complex data loads due to unneeded bundled assets.',
      custom: 'Lightweight modular code, minimal bundle footprints, and cloud-ready database architectures.',
    },
    {
      factor: 'Functionality & Features',
      template: 'Relies heavily on 15–30 third-party plugins that can clash, break during updates, or slow down.',
      custom: 'Purpose-engineered native features with clean APIs, zero excess baggage, and zero plugin bloat.',
    },
    {
      factor: 'Third-Party Integrations',
      template: 'Limited to pre-built widgets; difficult to connect bespoke CRMs, ERPs, or proprietary APIs.',
      custom: 'Seamless bidirectional integration with custom APIs, ERPs, CRMs, WhatsApp gateways, and payment engines.',
    },
    {
      factor: 'Long-Term Adaptability',
      template: 'Hitting a wall often forces complete theme abandonment and costly rebuilds every 2 years.',
      custom: 'Cleanly decoupled codebase that evolves smoothly with your enterprise as new requirements arise.',
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto my-12">
      <div className="text-center mb-8">
        <h3 className="section-title text-2xl sm:text-3xl text-white mb-2">
          Custom Development vs. Off-The-Shelf Templates
        </h3>
        <p className="text-white/60 text-xs sm:text-sm max-w-xl mx-auto">
          Templates are adequate for simple blogs or basic brochure sites. When your business needs proprietary workflows, custom logic, or high scalability, custom development provides superior ROI.
        </p>
      </div>

      <div className="overflow-x-auto no-scrollbar rounded-2xl border border-white/10 glass-card">
        <table className="w-full min-w-[580px] text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.02]">
              <th className="py-4 px-5 sm:px-6 text-xs font-mono uppercase tracking-wider text-white/50 w-1/4">
                Comparison Metric
              </th>
              <th className="py-4 px-5 sm:px-6 text-xs font-mono uppercase tracking-wider text-white/60 w-[37.5%]">
                Pre-Made Templates / Theme Builders
              </th>
              <th className="py-4 px-5 sm:px-6 text-xs font-mono uppercase tracking-wider text-neon-blue bg-neon-blue/[0.05] border-l border-white/10 w-[37.5%]">
                Custom Web Engineering (Dynamic Designing)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
            {comparisonItems.map((item, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-5 sm:px-6 font-display font-semibold text-white">
                  {item.factor}
                </td>
                <td className="py-4 px-5 sm:px-6 text-white/60 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-white/40 mt-1 shrink-0">•</span>
                    <span>{item.template}</span>
                  </div>
                </td>
                <td className="py-4 px-5 sm:px-6 text-white/90 bg-neon-blue/[0.03] border-l border-white/10 leading-relaxed font-medium">
                  <div className="flex items-start gap-2">
                    <Check size={15} className="text-neon-blue mt-0.5 shrink-0" />
                    <span>{item.custom}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
