'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Reveal } from './Reveal';
import { StaggerContainer, StaggerItem } from './Stagger';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const buildId = useMemo(() => {
    const chars = '0123456789ABCDEF';
    let id = 'BLD-';
    for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
    return id;
  }, []);

  useEffect(() => {
    if (!subscribed) return;
    const timer = setTimeout(() => {
      setSubscribed(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [subscribed]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError('');

    const trimmed = email.trim();
    if (!trimmed) {
      setEmailError('TRANSMIT_TARGET REQUIRED');
      inputRef.current?.focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError('INVALID_COMPILER PROTOCOL');
      inputRef.current?.focus();
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      setEmail('');
      setEmailError('');
    }, 800);
  };

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
          <Reveal className="lg:col-span-5 space-y-6" direction="up" distance={30} duration={0.7}>
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

          <Reveal className="lg:col-span-7 space-y-6" direction="up" distance={30} duration={0.7}>
              <div>
                <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.2em] mb-2 block">
                  // LOG TRANSMISSIONS
                </span>
                <h4 className="text-xl font-bold tracking-tight text-white uppercase">
                  Subscribe to Operations Logs
                </h4>
                <p className="text-slate-400 text-sm font-light mt-1">
                  Receive quarterly deep-dives into our technical stacks, cinematic workflows, and
                  product drops.
                </p>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-lg"
                noValidate
              >
                <div className="relative flex-grow">
                  <label htmlFor="footer-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    ref={inputRef}
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError('');
                    }}
                    placeholder="TRANSMIT_TARGET_EMAIL@HOST.COM"
                    disabled={subscribed || isSubmitting}
                    required
                    aria-invalid={!!emailError}
                    aria-describedby={emailError ? 'footer-email-error' : undefined}
                    className="w-full px-5 py-3.5 bg-black/50 border border-white/10 rounded-md font-mono text-xs tracking-wider text-white placeholder-slate-600 focus:outline-none focus:border-cyber-orange/60 focus:bg-black/80 focus:shadow-[0_0_15px_rgba(255,106,1,0.15)] transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  {emailError && (
                    <span
                      id="footer-email-error"
                      role="alert"
                      className="absolute -bottom-5 left-0 font-mono text-[9px] text-red-400"
                    >
                      {emailError}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={subscribed || isSubmitting}
                  className="px-6 py-3.5 bg-white text-black hover:bg-cyber-orange hover:text-white hover:shadow-[0_0_20px_rgba(255,106,1,0.5)] font-mono text-[11px] font-bold uppercase tracking-widest transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-sm disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange"
                  aria-label={subscribed ? 'Already subscribed' : 'Subscribe to newsletter'}
                >
                  {isSubmitting ? 'PROCESSING...' : subscribed ? 'STABILIZED' : 'SUBSCRIBE'}
                </button>
              </form>
              {subscribed && (
                <p role="status" className="font-mono text-[10px] text-emerald-400">
                  LOG SUBMITTED — You are now locked into the transmission queue.
                </p>
              )}
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
