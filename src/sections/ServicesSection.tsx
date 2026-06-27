'use client';

import React from 'react';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { StaggerContainer, StaggerItem } from '../components/Stagger';

export const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-cyber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'YouTube Videos',
      description: 'Long form edits that keep viewers watching till the last second. Cinematic pacing, retention-focused cuts, and custom motion graphics.',
      glowColor: 'orange' as const,
      features: ['Retention Editing', 'Motion Graphics', 'Color Grading', 'Cinematic Pacing'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Instagram Reels',
      description: 'Scroll-stopping reels built to grow your audience and attract clients. Trend-aware editing with hook optimisation.',
      glowColor: 'orange' as const,
      features: ['Hook Optimization', 'Trend Adaptation', 'Caption Styling', 'Sound Design'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyber-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'TikTok Clips',
      description: 'Viral-ready short clips that entertain, stop the scroll and grow your following fast. Platform-native formatting.',
      glowColor: 'orange' as const,
      features: ['Viral Formatting', 'Fast Pacing', 'Text Overlays', 'Engagement Hooks'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyber-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'Facebook & YouTube Ads',
      description: 'High-converting ad edits built to maximise click-through rates and return on ad spend. Data-driven storytelling.',
      glowColor: 'orange' as const,
      features: ['Hook Strategy', 'CTR Optimization', 'Split Testing', 'Pixel Tracking'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'YouTube Shorts',
      description: 'Engaging shorts that attract new viewers and grow your subscriber count consistently. Optimised for the shorts algorithm.',
      glowColor: 'orange' as const,
      features: ['Subscriber Growth', 'Algorithm Optimization', 'Series Formatting', 'Analytics Review'],
    },
    {
      icon: (
        <svg className="w-8 h-8 text-cyber-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: 'Podcast Editing',
      description: 'Turn your long podcast into viral short clips. Clean audio edits, intros, outros and chapter markers for professional episodes.',
      glowColor: 'orange' as const,
      features: ['Audio Cleanup', 'Clip Repurposing', 'Chapter Markers', 'Show Notes'],
    },
  ];

  return (
    <section id="services" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          number="01"
          category="capabilities"
          title="We don't just edit. We grow."
          description="From YouTube to TikTok, we engineer content systems that turn views into brand authority and loyal audiences."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
        {services.map((service, index) => (
          <StaggerItem key={service.title} direction="up" distance={50}>
            <Card
              title={service.title}
              glowColor={service.glowColor}
              headerAccent={service.icon}
              className="h-full"
            >
              <div className="flex flex-col h-full justify-between gap-6">
                <p className="text-slate-400 font-light leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5 font-mono text-[11px] text-slate-400">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-cyber-orange" />
                      <span className="group-hover:text-white transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </StaggerItem>
        ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ServicesSection;
