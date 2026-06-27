'use client';

import React, { useRef, useCallback } from 'react';
import { motion, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  category?: string;
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  alignment?: 'left' | 'center';
  className?: string;
}

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease },
  },
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  category,
  subtitle,
  title,
  description,
  align,
  alignment = 'left',
  className = '',
}) => {
  const ref = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const spotlightX = useMotionValue(-300);
  const spotlightY = useMotionValue(-300);
  const spotlightMask = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, black 0%, transparent 35%)`;

  const handleSpotlight = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = titleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }, []);

  const handleSpotlightLeave = useCallback(() => {
    spotlightX.set(-300);
    spotlightY.set(-300);
  }, []);

  const activeAlign = align || (alignment as 'left' | 'center');

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const lineGradient = {
    left: 'bg-gradient-to-r from-cyber-orange via-cyber-warm to-transparent',
    center: 'bg-gradient-to-r from-transparent via-cyber-orange to-transparent',
    right: 'bg-gradient-to-l from-cyber-orange via-cyber-warm to-transparent',
  };

  const displaySubtitle = category || subtitle;

  return (
    <motion.header
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignmentClasses[activeAlign]} ${className} relative select-none`}
      onMouseMove={handleSpotlight}
      onMouseLeave={handleSpotlightLeave}
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-cyber-orange mb-3"
      >
        <span className="opacity-50" aria-hidden="true">
          {'//'} {number}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-orange animate-pulse" aria-hidden="true" />
        {displaySubtitle && <span className="font-semibold">{displaySubtitle}</span>}
      </motion.div>

      <motion.h2
        ref={titleRef}
        variants={fadeUp}
        className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter text-white mb-3 sm:mb-4 uppercase relative"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500/60">
          {title}
        </span>
        <motion.span
          className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange via-cyber-warm to-cyber-amber"
          style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
          aria-hidden="true"
        >
          {title}
        </motion.span>
      </motion.h2>

      <motion.div
        variants={lineReveal}
        className={`h-[2px] w-20 sm:w-32 mb-4 sm:mb-6 ${lineGradient[activeAlign]}`}
        style={{ transformOrigin: '0 0' }}
        aria-hidden="true"
      />

      {description && (
        <motion.p
          variants={fadeUp}
          className={`text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl font-light ${activeAlign === 'center' ? 'mx-auto' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </motion.header>
  );
};

export default SectionHeader;
