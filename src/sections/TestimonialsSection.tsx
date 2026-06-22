'use client';

import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { StaggerContainer, StaggerItem } from '../components/Stagger';

const testimonials = [
  {
    quote: 'I no longer have to worry about content. The team understands my audience, delivers on time, and has helped me scale from 3K to 53K+ followers.',
    author: 'Lee Horwood',
    role: 'Real Estate Investor | CEO of Portal Ai',
    stat: '50,000+ Followers Added',
    statSub: '0M+ Views Generated',
  },
  {
    quote: 'Working with Brightline completely transformed our content strategy. Our engagement rates tripled within the first month.',
    author: 'Sarah Chen',
    role: 'Fitness Creator',
    stat: '300% Engagement Boost',
    statSub: '2M+ Monthly Views',
  },
  {
    quote: 'The repurposing system they built for us is insane. One recording session now generates a month worth of content that actually performs.',
    author: 'Marcus Williams',
    role: 'Business Coach',
    stat: '15K+ New Subscribers',
    statSub: '500K+ Weekly Reach',
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          number="04"
          category="testimonials"
          title="Real Creators. Real Growth."
          description="We don't just edit videos — we build content systems that drive views, followers, and business growth."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.author} direction="up" distance={50}>
              <div className="glass-panel rounded-lg p-6 lg:p-8 border border-white/5 h-full flex flex-col group hover:border-cyber-orange/30 transition-all duration-500">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-cyber-orange" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-slate-300 font-light leading-relaxed text-sm mb-6 flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-6 border-t border-white/5">
                  <p className="font-bold text-white text-sm">{t.author}</p>
                  <p className="font-mono text-[10px] text-slate-500 mt-1">{t.role}</p>
                  <div className="flex gap-4 mt-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-cyber-orange">{t.stat}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;