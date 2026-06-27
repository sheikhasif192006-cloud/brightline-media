'use client';

import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { StaggerContainer, StaggerItem } from '../components/Stagger';

const testimonials = [
  {
    quote: 'I no longer have to worry about content. The team understands my audience, delivers on time, and has helped me scale from 3K to 53K+ followers.',
    author: 'Lee Horwood',
    role: 'Real Estate Investor | CEO of Portal Ai',
    stat: '50,000+',
    statLabel: 'Followers Added',
    image: '/images/lee.jpeg',
  },
  {
    quote: 'Working with Brightline completely transformed our content game. We achieved 10x+ growth in followers within weeks of working together.',
    author: 'Arnav Panchal',
    role: 'Trader & Mentor',
    stat: '19K - 217K+',
    statLabel: 'Followers Gained',
    image: '/images/arnav.jpeg',
  },
  {
    quote: 'We collaborated with Asif and his team at Brightline Media, and the results were insane. While my top performing videos were at 2K+ views, we achieved 5K+ views in just 24 hours working with Brightline on the very first video.',
    author: 'Dan Mahar',
    role: 'Owner of Mahar Real Estate',
    stat: '400K+',
    statLabel: 'Views (First Video)',
    image: '/images/mahar.jpeg',
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
          number="06"
          category="testimonials"
          title="Real Creators. Real Growth."
          description="We don't just edit videos — we build content systems that drive views, followers, and business growth."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <StaggerItem key={t.author} direction="up" distance={50}>
              <div className="glass-panel rounded-lg border border-white/5 h-full flex flex-col group hover:border-cyber-orange/25 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-transform relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="mb-5">
                    <span className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange to-cyber-amber">
                      {t.stat}
                    </span>
                    <span className="block font-mono text-[9px] uppercase tracking-widest text-cyber-orange/70 mt-1">
                      {t.statLabel}
                    </span>

                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-cyber-orange/60" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-slate-300 font-light leading-relaxed text-sm flex-grow relative pl-4 border-l-2 border-cyber-orange/30">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-black flex-shrink-0 border border-white/10">
                      <img src={t.image} alt={t.author} className="w-full h-full object-cover scale-110" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-white text-sm">{t.author}</p>
                      <p className="font-mono text-[9px] text-slate-500 truncate">{t.role}</p>
                    </div>
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
