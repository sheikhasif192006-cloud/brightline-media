'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-black">
      {count}{suffix}
    </span>
  );
};

export const StatDivider = () => {
  return (
    <section className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 cyber-grid opacity-[0.05]" />
      <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-cyber-orange/20 to-transparent" />
      <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-cyber-orange/20 to-transparent" />

      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: 500, suffix: '+', label: 'Projects Delivered' },
            { target: 25, suffix: '+', label: 'Clients' },
            { target: 98, suffix: '%', label: 'Client Satisfaction' },
            { target: 9, suffix: '', label: 'Avg. Rating' },
          ].map((stat, i) => (
            <div key={stat.label} className="space-y-2">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyber-orange to-cyber-amber">
                <Counter target={stat.target} suffix={stat.suffix} />
              </span>
              <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-[0.15em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
