'use client';

import React from 'react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';

export const ContactSection = () => {
  return (
    <section id="contact" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[60vw] h-[60vw] bg-cyber-orange/3 blur-[150px] rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="up" distance={40} duration={0.7}>
            <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.25em] mb-4 block">
              {'//'} READY TO SCALE?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-4 sm:mb-6">
              Your Next Million
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange to-cyber-amber">
                Views Start Here
              </span>
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10">
              Whether you are building a personal brand or scaling a business, we will help you turn content into consistent growth.
            </p>
          </Reveal>

          <Reveal direction="up" distance={20} delay={0.3} duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="orange" size="lg" href="https://wa.me/917415411469" className="w-full sm:w-auto" ariaLabel="Book a discovery call">
                Book A Discovery Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Button>
              <Button variant="cyber" size="lg" href="#services" className="w-full sm:w-auto" ariaLabel="View our services">
                Our Services
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
