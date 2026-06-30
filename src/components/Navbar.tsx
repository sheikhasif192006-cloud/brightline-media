'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    toggleRef.current?.focus();
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, closeDrawer]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      window.__lenis?.stop();
    } else {
      document.documentElement.style.overflow = '';
      window.__lenis?.start();
    }
    return () => {
      document.documentElement.style.overflow = '';
      window.__lenis?.start();
    };
  }, [isOpen]);

  // Focus first link when drawer opens
  useEffect(() => {
    if (isOpen && drawerRef.current) {
      const firstLink = drawerRef.current.querySelector<HTMLAnchorElement>('a');
      firstLink?.focus();
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={`
        fixed w-full z-50 left-0 transition-all duration-300 backdrop-blur-md
        ${scrolled
          ? 'py-4 bg-black/80 border-b border-white/5 shadow-2xl'
          : 'py-6 bg-black/0 border-b border-transparent'}
      `.trim()}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-12 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center gap-1 sm:gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange rounded-sm shrink-0 min-w-0"
          aria-label="Brightline Media — Go to top"
        >
          <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-cyber-orange transition-colors duration-300 whitespace-nowrap">
            BRIGHTLINE
            <span className="text-cyber-orange font-bold">.</span>
            <span className="hidden sm:inline-block text-xs md:text-sm font-light font-mono text-slate-400 tracking-widest ml-1 group-hover:text-white transition-colors">
              MEDIA
            </span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 ml-3 bg-cyber-orange/10 border border-cyber-orange/20 rounded-full shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-cyber-orange">Trusted By 20+ Creators</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest font-mono text-slate-300 hover:text-cyber-orange transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] relative group py-2 focus-visible:outline-none focus-visible:text-cyber-orange"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-cyber-orange transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
            </a>
          ))}
          <Button variant="cyber" size="sm" href="#contact" ariaLabel="Go to contact section">
            Launch Project
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          ref={toggleRef}
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-cyber-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange rounded-sm p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <div className="w-6 h-5 flex flex-col justify-between relative" aria-hidden="true">
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
            />
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Full-Screen Menu (includes background + content) */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        onClick={closeDrawer}
        onTouchMove={(e) => e.preventDefault()}
        className={`
          md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `.trim()}
      >
        <div className="absolute inset-0 cyber-grid opacity-[0.12] pointer-events-none" />

        <div className="relative flex flex-col items-center gap-4 sm:gap-5" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={closeDrawer}
            className="absolute -top-16 right-0 sm:-top-20 text-white/60 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeDrawer}
              className={`
                text-xl sm:text-2xl uppercase tracking-[0.15em] font-mono text-slate-300 hover:text-cyber-orange transition-all duration-300 hover:translate-x-2 focus-visible:outline-none focus-visible:text-cyber-orange py-1
                ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div
            className={`
              w-full min-w-[200px] mt-2 transition-all duration-500
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}
            `}
            style={{ transitionDelay: `${navLinks.length * 80 + 40}ms` }}
          >
            <Button
              variant="orange"
              size="md"
              href="#contact"
              onClick={closeDrawer}
              className="w-full"
              ariaLabel="Go to contact section"
            >
              Launch Project
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
