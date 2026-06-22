'use client';

import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 40,
  once = true,
}) => {
  const shouldReduce = useReducedMotion();
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={{ willChange: 'transform, opacity' }}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};
