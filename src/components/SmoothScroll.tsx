'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export const SmoothScroll = () => {
  const ref = useRef(false);

  useEffect(() => {
    if (ref.current) return;
    ref.current = true;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.2,
      syncTouch: true,
    });

    window.__lenis = lenis;

    const raf = (t: number) => {
      lenis.raf(t);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      window.__lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return null;
};
