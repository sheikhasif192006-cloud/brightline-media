'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export const SectionTransition = ({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay, ease }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionWipe = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <motion.div
    initial={{ clipPath: 'inset(0 0 100% 0)' }}
    whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);
