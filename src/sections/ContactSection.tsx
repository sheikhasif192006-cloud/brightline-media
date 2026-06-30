'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';

type ContactType = 'email' | 'whatsapp' | 'location' | 'founders' | 'instagram' | null;

type Action = { label: string; href: string } | { label: string; action: 'copy' };

const ContactModal = ({ type, onClose }: { type: ContactType; onClose: () => void }) => {
  React.useEffect(() => {
    if (!type) return;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [type, onClose]);

  const content = {
    email: {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
      ),
      title: 'Email',
      value: 'editor.brightlinemedia@gmail.com',
      actions: [
        { label: 'Send Email', href: 'mailto:editor.brightlinemedia@gmail.com' },
        { label: 'Copy', action: 'copy' as const },
      ],
    },
    whatsapp: {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
      ),
      title: 'WhatsApp / Call',
      value: '',
      contacts: [
        { name: 'Mohammad Asif Sheikh', number: '+91 7415 411 469' },
        { name: 'Suvo', number: '+91 89420 48465' },
      ],
    },
    location: {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
      ),
      title: 'Location',
      value: 'Madhya Pradesh, Indore',
      actions: [
        { label: 'Open in Google Maps', href: 'https://maps.google.com/?q=Madhya+Pradesh+Indore' },
      ],
    },
    founders: {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
      ),
      title: 'Founders',
      value: '',
      contacts: [
        { name: 'Mohammad Asif Sheikh', role: 'Founder', number: '+91 7415 411 469' },
        { name: 'Suvo', role: 'Co-Founder', number: '+91 89420 48465' },
      ],
    },
    instagram: {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
      ),
      title: 'Instagram',
      value: '@brightline.studio',
      actions: [
        { label: 'Open Instagram', href: 'https://instagram.com/brightline.studio' },
      ],
    },
  }[type!];

  if (!type || !content) return null;

  const [copied, setCopied] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-zoom-out" onClick={onClose} aria-label="Close" />
      <motion.div
        className="relative w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-xl p-6 shadow-2xl"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-slate-500 hover:text-white transition-colors" aria-label="Close">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-cyber-orange">{content.icon}</span>
          <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-widest">{content.title}</span>
        </div>

        {'value' in content && content.value && (
          <p className="text-white text-sm font-light mb-4">{content.value}</p>
        )}

        {'contacts' in content && content.contacts && (
          <div className="space-y-3 mb-4">
            {content.contacts.map((c) => (
              <div key={c.number} className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <p className="text-white text-sm font-medium">{c.name}</p>
                {'role' in c && c.role && (
                  <p className="text-[10px] font-mono text-cyber-orange tracking-wider uppercase">{c.role}</p>
                )}
                <p className="text-slate-400 text-xs mt-0.5">{c.number}</p>
                <div className="flex gap-2 mt-2">
                  <a
                    href={`https://wa.me/${c.number.replace(/[^0-9]/g, '')}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg bg-cyber-orange/10 border border-cyber-orange/20 text-[10px] font-mono text-cyber-orange hover:bg-cyber-orange/20 transition-colors text-center"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${c.number.replace(/[^0-9]/g, '')}`}
                    className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 hover:text-white transition-colors text-center"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {'actions' in content && content.actions && (
          <div className="flex flex-wrap gap-2">
            {content.actions.map((a) => (
              'action' in a ? (
                <button
                  key={a.label}
                  onClick={() => {
                    navigator.clipboard.writeText(content.value);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-cyber-orange/10 border border-cyber-orange/20 text-[10px] font-mono text-cyber-orange hover:bg-cyber-orange/20 transition-colors text-center"
                >
                  {copied ? 'Copied!' : a.label}
                </button>
              ) : (
                <a
                  key={a.label}
                  href={a.href}
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 px-4 py-2.5 rounded-lg bg-cyber-orange/10 border border-cyber-orange/20 text-[10px] font-mono text-cyber-orange hover:bg-cyber-orange/20 transition-colors text-center"
                >
                  {a.label}
                </a>
              )
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export const ContactSection = () => {
  const [activeModal, setActiveModal] = useState<ContactType>(null);
  const closeModal = useCallback(() => setActiveModal(null), []);

  const spotlightX = useMotionValue(-300);
  const spotlightY = useMotionValue(-300);
  const spotlightMask = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, black 0%, transparent 35%)`;

  const handleSpotlight = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }, []);

  const handleSpotlightLeave = useCallback(() => {
    spotlightX.set(-300);
    spotlightY.set(-300);
  }, []);

  const contacts = [
    {
      type: 'email' as const,
      label: 'Email',
      value: 'editor.brightlinemedia@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
      ),
    },
    {
      type: 'whatsapp' as const,
      label: 'WhatsApp / Call',
      value: 'Asif +91 7415 411 469 • Suvo +91 89420 48465',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
      ),
    },
    {
      type: 'location' as const,
      label: 'Location',
      value: 'Madhya Pradesh, Indore',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
      ),
    },
    {
      type: 'founders' as const,
      label: 'Founders',
      value: 'Asif (Founder) • Suvo (Co-Founder)',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
      ),
    },
    {
      type: 'instagram' as const,
      label: 'Instagram',
      value: '@brightline.studio',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" /></svg>
      ),
    },
  ];

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
        <div className="max-w-3xl mx-auto">
          <Reveal direction="up" distance={30} duration={0.6}>
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-cyber-orange mb-4 justify-center">
              <span className="opacity-50" aria-hidden="true">{'//'} 04</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange animate-pulse" aria-hidden="true" />
              <span className="font-semibold">Get In Touch</span>
            </div>
          </Reveal>

          <Reveal direction="up" distance={50} delay={0.15} duration={0.8}>
            <h2
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-6 text-center relative select-none"
              onMouseMove={handleSpotlight}
              onMouseLeave={handleSpotlightLeave}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500/60 block">
                Your Next Million
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500/60 block">
                Views Start Here
              </span>
              <motion.span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange to-cyber-amber flex flex-col"
                style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
                aria-hidden="true"
              >
                <span>Your Next Million</span>
                <span>Views Start Here</span>
              </motion.span>
            </h2>
          </Reveal>

          <Reveal direction="up" distance={30} delay={0.25} duration={0.7}>
            <p className="text-slate-400 text-sm md:text-base text-center max-w-md mx-auto mb-8">
              Whether you are building a personal brand or scaling a business, we will help you turn content into consistent growth.
            </p>
          </Reveal>

          <Reveal direction="up" distance={20} delay={0.25} duration={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-14">
              <Button variant="orange" size="lg" href="https://wa.me/917415411469" ariaLabel="Book a discovery call" className="w-full sm:w-auto">
                Book a Discovery Call
              </Button>
              <Button variant="cyber" size="lg" href="#services" ariaLabel="View our services" className="w-full sm:w-auto">
                Our Services
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" distance={20} delay={0.35} duration={0.6}>
            <div className="max-w-xs mx-auto space-y-4">
              {contacts.map((c) => (
                <button
                  key={c.type}
                  onClick={() => setActiveModal(c.type)}
                  className="w-full p-4 rounded-lg bg-white/[0.02] border border-white/5 text-left hover:border-cyber-orange/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-cyber-orange/60 group-hover:text-cyber-orange transition-colors duration-300 shrink-0">
                      {c.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="font-mono text-[9px] uppercase text-cyber-orange tracking-[0.2em] block mb-0.5">
                        {c.label}
                      </span>
                      <span className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 block truncate">
                        {c.value}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-slate-600 group-hover:text-cyber-orange transition-colors duration-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {activeModal && <ContactModal type={activeModal} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
