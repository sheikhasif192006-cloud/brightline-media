'use client';

import React, { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';

const faqs = [
  { q: 'How long does it take to edit a video?', a: 'Most short-form videos are delivered within 24–48 hours, while long-form projects typically take 3–4 days depending on complexity.' },
  { q: 'Can I request revisions after delivery?', a: 'Yes. We offer 2 rounds of revisions for Starter plans and unlimited revisions for Growth and Agency tiers. We refine until it\'s perfect.' },
  { q: 'Which platforms do you support?', a: 'We optimize content for all major platforms, including YouTube, TikTok, Instagram Reels, LinkedIn, and Facebook.' },
  { q: 'Do you provide music and sound effects?', a: 'Absolutely. We use a library of fully licensed, royalty-free music and SFX to ensure your videos are copyright-safe.' },
  { q: 'How secure is my content with Brightline?', a: 'Your footage is stored on encrypted servers, and we never share your assets with third parties without permission.' },
  { q: 'Can I cancel my plan at any time?', a: 'Yes. You can cancel or pause your subscription directly through your dashboard at any time with no fees.' },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          number="05"
          category="faq's"
          title="Your Questions Our Answers"
          description="Find detailed answers regarding our creative workflow, transparent pricing, and delivery process."
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Reveal key={index} direction="up" distance={20} delay={index * 0.08} duration={0.5}>
              <div className="border-b border-white/5 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange focus-visible:ring-inset"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-sm md:text-base font-medium text-white group-hover:text-cyber-orange transition-colors duration-300 pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 text-cyber-orange transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIndex === index ? 'max-h-96 pb-5' : 'max-h-0'}`}
                >
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;