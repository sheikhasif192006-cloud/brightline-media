'use client';

import React from 'react';
import { Card } from '../components/Card';
import { SectionHeader } from '../components/SectionHeader';
import { StaggerContainer, StaggerItem } from '../components/Stagger';

const features = [
  { icon: '⚡', title: 'Fast Delivery', highlight: '24hr', desc: 'Fast turnaround times to keep your content calendar moving. Average 24hr delivery from footage received to draft delivered.' },
  { icon: '📱', title: 'Optimized For Every Platform', highlight: 'v1 → v2 → v3', desc: 'One edit, multiple formats optimized for every platform. Vertical, horizontal, square — we handle all aspect ratios.' },
  { icon: '🔄', title: 'Flexible Revisions', highlight: 'Unlimited', desc: 'We refine until it\'s exactly right. No extra charges, ever. Your feedback shapes the final cut.' },
  { icon: '♻️', title: 'Content Repurposing', highlight: 'Multiply Reach', desc: 'We help identify winning content formats, hooks, and distribution strategies to maximize reach across platforms.' },
  { icon: '🌐', title: 'Captions & Subtitles', highlight: 'EN · ES · FR · AR', desc: 'Styled captions in any language — retention-optimized and on-brand. EN, ES, FR, AR and more.' },
  { icon: '🎨', title: 'Brand Consistency', highlight: 'BEFORE → AFTER', desc: 'Every edit matches your brand — fonts, colors, motion and tone stay consistent across every video you publish.' },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          number="02"
          category="features"
          title="Streamlined Features"
          description="Premium video editing and content systems designed to grow your brand faster."
        />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.12}>
          {features.map((feature) => (
            <StaggerItem key={feature.title} direction="up" distance={50}>
              <Card title={feature.title} glowColor="orange" className="h-full">
                <div className="flex flex-col h-full gap-4">
                  <span className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-orange/10 border border-cyber-orange/20 font-mono text-[9px] uppercase tracking-widest text-cyber-orange">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange animate-pulse" />
                    {feature.highlight}
                  </span>
                  <p className="text-slate-400 font-light leading-relaxed text-sm flex-grow">
                    {feature.desc}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;