'use client';

import React from 'react';

export const Footer = () => {
  const buildId = 'BLD-4A2C9F81';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050507] border-t border-white/5 text-white z-10 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-[0.06] pointer-events-none" />

      <div className="section-container py-14 md:py-18 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* Brand + Description + Status */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <a href="#home" className="inline-block text-xl font-black tracking-tighter text-white hover:text-cyber-orange transition-colors duration-300">
                BRIGHTLINE<span className="text-cyber-orange font-bold">.</span>
                <span className="text-xs font-light font-mono text-slate-500 tracking-widest ml-1">MEDIA</span>
              </a>
              <p className="text-slate-500 text-sm leading-relaxed max-w-lg mt-3 font-light">
                We are a video editing and content growth agency helping creators turn attention into authority. From YouTube to TikTok, we engineer content that scales.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-orange/10 border border-cyber-orange/20 font-mono text-[9px] text-cyber-orange uppercase whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange" />
                SYSTEM ACTIVE // ONLINE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[9px] text-slate-500 uppercase whitespace-nowrap">
                LOC // GLOBAL
              </span>
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Links (horizontal rows, compact) */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center">
              <span className="font-mono text-[9px] uppercase text-cyber-orange tracking-wider min-w-[80px] shrink-0">Quick Links</span>
              {[
                { label: 'Home', href: '#home', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg> },
                { label: 'Services', href: '#services', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.645 3.255 1.074-6.27-4.559-4.45 6.307-.916L11.42 1.5l2.823 5.289 6.307.916-4.559 4.45 1.074 6.27z" /></svg> },
                { label: 'Work', href: '#work', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
                { label: 'Contact', href: '#contact', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg> },
              ].map((link) => (
                <a key={link.label} href={link.href} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyber-orange transition-colors duration-300">
                  <span className="opacity-60">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center">
              <span className="font-mono text-[9px] uppercase text-cyber-orange tracking-wider min-w-[80px] shrink-0">Social</span>
              {[
                { label: 'Twitter // X', href: 'https://x.com/brightlinemedia', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                { label: 'Instagram', href: 'https://instagram.com/brightlinemedia', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg> },
                { label: 'LinkedIn', href: 'https://linkedin.com/company/brightlinemedia', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
                { label: 'Vimeo', href: 'https://vimeo.com/brightlinemedia', icon: <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z" /></svg> },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyber-orange transition-colors duration-300">
                  <span className="opacity-60">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center">
              <span className="font-mono text-[9px] uppercase text-cyber-orange tracking-wider min-w-[80px] shrink-0">Services</span>
              {[
                { label: 'YouTube Videos', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" /></svg> },
                { label: 'Instagram Reels', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M10.875 12h2.25m-2.25 0a1.125 1.125 0 01-1.125 1.125M12 12a1.125 1.125 0 011.125 1.125m-2.25 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m0 0h2.25" /></svg> },
                { label: 'TikTok Clips', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" /></svg> },
                { label: 'Podcast Editing', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg> },
              ].map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                  <span className="opacity-40">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 items-center">
              <span className="font-mono text-[9px] uppercase text-cyber-orange tracking-wider min-w-[80px] shrink-0">Legal</span>
              {[
                { label: 'Privacy Policy', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg> },
                { label: 'Terms of Service', icon: <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg> },
              ].map((l) => (
                <a key={l.label} href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyber-orange transition-colors duration-300">
                  <span className="opacity-60">{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="font-mono text-[10px] text-slate-500">
              &copy; {currentYear} BRIGHTLINE MEDIA. ALL VECTORS PROTECTED.
              <span className="block mt-1 text-[8px] text-slate-600 tracking-wider">
                HAND-CRAFTED WITH PRECISION &mdash; {buildId}
              </span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[8px] text-slate-600 shrink-0">
              <span>SYS_VERSION // v4.2.1-PROD</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>SHIELD_ACTIVE // OK</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
