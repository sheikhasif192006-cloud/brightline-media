'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const SmoothScroll = () => {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(2, -10 * t),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};
