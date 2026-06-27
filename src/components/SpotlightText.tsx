'use client';

import React, { useCallback } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

interface SpotlightTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'div';
}

export const SpotlightText: React.FC<SpotlightTextProps> = ({
  children,
  className = '',
  as = 'span',
}) => {
  const spotlightX = useMotionValue(-300);
  const spotlightY = useMotionValue(-300);
  const spotlightMask = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, black 0%, transparent 35%)`;

  const handleSpotlight = useCallback((e: React.MouseEvent<HTMLSpanElement | HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }, []);

  const handleSpotlightLeave = useCallback(() => {
    spotlightX.set(-300);
    spotlightY.set(-300);
  }, []);

  const Tag = as;

  return (
    <Tag
      className={`relative inline-block select-none ${className}`}
      onMouseMove={handleSpotlight}
      onMouseLeave={handleSpotlightLeave}
    >
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500/60">
        {children}
      </span>
      <motion.span
        className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange via-cyber-warm to-cyber-amber"
        style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
        aria-hidden="true"
      >
        {children}
      </motion.span>
    </Tag>
  );
};
