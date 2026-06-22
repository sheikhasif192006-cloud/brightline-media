'use client';

import React from 'react';

const stats = [
  { value: '50M+', label: 'Views Generated' },
  { value: '95%', label: 'Avg. Retention' },
  { value: '24 hr', label: 'Avg. Turnaround' },
  { value: '500+', label: 'Projects Done' },
];

export const StatsRow = () => {
  return (
    <div className="w-full border-y border-white/5 bg-black/40 backdrop-blur-sm overflow-hidden">
      <div className="flex animate-marquee py-4 sm:py-6 md:py-8" style={{ width: `${stats.length * 2 * 280}px` }}>
        {[...stats, ...stats].map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="flex flex-col items-center text-center min-w-[180px] sm:min-w-[240px] md:min-w-[280px] px-3 sm:px-4 animate-stat-float"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange to-cyber-amber">
              {stat.value}
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-widest text-slate-500 mt-0.5 sm:mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};