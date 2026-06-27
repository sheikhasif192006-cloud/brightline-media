'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [visible]);

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <div className="w-10 h-10 rounded-full bg-cyber-orange/15 border border-cyber-orange/50 shadow-[0_0_40px_rgba(255,106,1,0.7),0_0_120px_rgba(255,106,1,0.35),0_0_200px_rgba(255,106,1,0.15)] animate-ping-slow" />
    </div>
  );
};
