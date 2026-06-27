'use client';

import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Reveal } from '../components/Reveal';
import { StaggerContainer, StaggerItem } from '../components/Stagger';

const steps = [
  {
    num: '01',
    title: 'Content Strategy',
    desc: 'We build a content roadmap designed around your audience and business goals. We analyze what works and plan your pipeline.',
    timing: 'Day 01',
  },
  {
    num: '02',
    title: 'Create & Repurpose',
    desc: 'We transform your raw footage into high-performing short-form content optimized for reach and retention across every platform.',
    timing: '24–48hr',
  },
  {
    num: '03',
    title: 'Growth System',
    desc: 'We analyze performance, double down on what works, and build a repeatable content system for sustainable growth.',
    timing: 'On time',
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          number="05"
          category="process"
          title="Our Three-Step Process"
          description="From raw footage to a polished final cut, we have streamlined every step to ensure a seamless experience for your brand."
        />

        {/* Flow visualization */}
        <Reveal direction="up" distance={20} delay={0.2} duration={0.6}>
          <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 p-3 sm:p-4 glass-panel rounded-lg border border-white/5 font-mono text-[9px] sm:text-[10px] tracking-wider overflow-x-auto whitespace-nowrap scrollbar-none">
            <span className="text-slate-400">raw-footage.mp4</span>
            <svg className="w-4 h-4 text-cyber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            <span className="text-slate-400">brief.pdf</span>
            <svg className="w-4 h-4 text-cyber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            <span className="text-cyber-orange font-semibold">01 — STRATEGY</span>
            <svg className="w-4 h-4 text-cyber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            <span className="text-cyber-orange font-semibold">02 — EDIT</span>
            <svg className="w-4 h-4 text-cyber-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            <span className="text-cyber-orange font-semibold">03 — DELIVER</span>
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="text-green-400">LIVE</span>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.15}>
          {steps.map((step) => (
            <StaggerItem key={step.num} direction="up" distance={50}>
              <div className="glass-panel rounded-lg p-6 lg:p-8 border border-white/5 h-full flex flex-col group hover:border-cyber-orange/30 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-transform">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange to-cyber-amber">
                    {step.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-cyber-orange bg-cyber-orange/10 px-3 py-1 rounded-full border border-cyber-orange/20">
                    {step.timing}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyber-orange transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm flex-grow">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProcessSection;