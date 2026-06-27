'use client';

import React from 'react';
import { Reveal } from './Reveal';
import { StaggerContainer, StaggerItem } from './Stagger';

export const Footer = () => {
  const buildId = 'BLD-4A2C9F81';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050507] border-t border-white/5 text-white z-10 pt-16 pb-16 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>
      <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />

      <div className="section-container relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 border-b border-white/5">
          <Reveal className="lg:col-span-12 space-y-6" direction="up" distance={30} duration={0.7}>
              <a
                href="#home"
                className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange rounded-sm"
                aria-label="Brightline Media — Go to top"
              >
                <span className="text-2xl font-black tracking-tighter text-white group-hover:text-cyber-orange transition-colors duration-300">
                  BRIGHTLINE
                  <span className="text-cyber-orange font-bold">.</span>
                  <span className="text-xs font-light font-mono text-slate-400 tracking-widest ml-1 group-hover:text-white transition-colors">
                    MEDIA
                  </span>
                </span>
              </a>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
                We are a video editing and content growth agency helping creators turn attention into authority. From YouTube to TikTok, we engineer content that scales.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-orange/10 border border-cyber-orange/20 font-mono text-[9px] text-cyber-orange uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange" />
                  SYSTEM ACTIVE // ONLINE
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[9px] text-slate-400 uppercase">
                  LOC // GLOBAL
                </span>
              </div>
          </Reveal>
        </div>

        <Reveal direction="up" distance={30} duration={0.7} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5">
          <StaggerContainer className="contents" staggerDelay={0.06}>
            <StaggerItem direction="up" distance={20} className="space-y-4">
                <h5 className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.15em]">
                  Quick Links
                </h5>
                <ul className="space-y-2 text-sm text-slate-400 font-light">
                  <li><a href="#home" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Home</a></li>
                  <li><a href="#services" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Services</a></li>
                  <li><a href="#work" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Work</a></li>
                  <li><a href="#contact" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Contact</a></li>
                </ul>
            </StaggerItem>

            <StaggerItem direction="up" distance={20} className="space-y-4">
                <h5 className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.15em]">
                  Social
                </h5>
                <ul className="space-y-2 text-sm text-slate-400 font-light">
                  <li><a href="https://x.com/brightlinemedia" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Twitter // X</a></li>
                  <li><a href="https://instagram.com/brightlinemedia" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Instagram</a></li>
                  <li><a href="https://linkedin.com/company/brightlinemedia" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">LinkedIn</a></li>
                  <li><a href="https://vimeo.com/brightlinemedia" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Vimeo</a></li>
                </ul>
            </StaggerItem>

            <StaggerItem direction="up" distance={20} className="space-y-4">
                <h5 className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.15em]">
                  Services
                </h5>
                <ul className="space-y-2 text-sm text-slate-400 font-light">
                  <li><span className="text-slate-500">YouTube Videos</span></li>
                  <li><span className="text-slate-500">Instagram Reels</span></li>
                  <li><span className="text-slate-500">TikTok Clips</span></li>
                  <li><span className="text-slate-500">Podcast Editing</span></li>
                </ul>
            </StaggerItem>

            <StaggerItem direction="up" distance={20} className="space-y-4">
                <h5 className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.15em]">
                  Legal
                </h5>
                <ul className="space-y-2 text-sm text-slate-400 font-light">
                  <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Privacy Policy</a></li>
                  <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-cyber-orange transition-colors focus-visible:text-cyber-orange">Terms of Service</a></li>
                </ul>
            </StaggerItem>
          </StaggerContainer>
        </Reveal>

        <Reveal direction="up" distance={20} duration={0.6} delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-12">
            <div className="font-mono text-[10px] text-slate-500 text-center md:text-left">
              &copy; {currentYear} BRIGHTLINE MEDIA. ALL VECTORS PROTECTED.
              <span className="block mt-1.5 text-[8px] text-slate-600 tracking-wider">
                HAND-CRAFTED WITH PRECISION &mdash; {buildId}
              </span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[8px] text-slate-600">
              <span>SYS_VERSION // v4.2.1-PROD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>SHIELD_ACTIVE // OK</span>
            </div>
          </div>
        </Reveal>

      </div>
    </footer>
  );
};

export default Footer;
