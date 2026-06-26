'use client';

import { useEffect, useRef } from 'react';

export const AmbientGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    const animate = () => {
      posRef.current.x += (mouseRef.current.x - posRef.current.x) * 0.04;
      posRef.current.y += (mouseRef.current.y - posRef.current.y) * 0.04;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${posRef.current.x - 250}px, ${posRef.current.y - 250}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-[1] opacity-30"
      style={{
        background: 'radial-gradient(circle, rgba(255,106,1,0.12) 0%, transparent 70%)',
      }}
      aria-hidden="true"
    />
  );
};
