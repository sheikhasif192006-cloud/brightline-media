'use client';

import React, { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      className="scroll-indicator"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
};
