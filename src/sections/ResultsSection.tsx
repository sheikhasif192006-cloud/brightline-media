'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

interface ResultData {
  id: number;
  before: number;
  after: number;
  label: string;
  beforeImg: string;
  afterImg: string;
}

const results: ResultData[] = [
  {
    id: 1,
    before: 15,
    after: 2641,
    label: 'Followers Gained',
    beforeImg: '/images/results/result-1-before.png',
    afterImg: '/images/results/result-1-after.png',
  },
  {
    id: 2,
    before: 2100,
    after: 57900,
    label: 'Followers Gained',
    beforeImg: '/images/results/result-2-before.png',
    afterImg: '/images/results/result-2-after.png',
  },
  {
    id: 3,
    before: 18500,
    after: 215000,
    label: 'Followers Gained',
    beforeImg: '/images/results/result-3-before.png',
    afterImg: '/images/results/result-3-after.png',
  },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const formatNumber = (n: number): string => {
  if (n >= 100000) return (n / 1000).toFixed(0) + 'K';
  if (n >= 10000) return (n / 1000).toFixed(1) + 'K';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return n.toLocaleString();
};

const CountUp = ({ target, isActive }: { target: number; isActive: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) { setCount(0); return; }
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [isActive, target]);

  return <span>{formatNumber(count)}</span>;
};

const ResultCard = ({ data, index, onClick }: { data: ResultData; index: number; onClick: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const [countActive, setCountActive] = useState(false);

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setCountActive(true), 400);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease, delay: index * 0.15 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-cyber-orange/20 transition-all duration-500">
        <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyber-orange/10 via-transparent to-cyber-amber/5 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-stretch">
            <div className="relative w-1/2 overflow-hidden bg-black/60">
              <div className="aspect-[16/9]">
                <img
                  src={data.beforeImg}
                  alt="Before"
                  className="w-full h-full object-cover grayscale brightness-[0.35]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-[9px] font-mono tracking-widest text-white/40">BEFORE</span>
              </div>
            </div>

            <div className="relative w-1/2 overflow-hidden bg-black/40">
              <div className="aspect-[16/9]">
                <img
                  src={data.afterImg}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-orange/10 via-transparent to-cyber-amber/5 pointer-events-none" />
              </div>
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-cyber-orange/20 backdrop-blur-sm border border-cyber-orange/30">
                <span className="text-[9px] font-mono tracking-widest text-cyber-orange">AFTER</span>
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-5 pb-5 pt-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-xs font-mono text-white/30 line-through decoration-white/20">
                {formatNumber(data.before)}
              </span>
              <svg className="w-4 h-4 text-cyber-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span className="text-3xl sm:text-5xl font-black text-cyber-orange tabular-nums">
                <CountUp target={data.after} isActive={countActive} />
              </span>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-mono tracking-[0.15em] text-white/40 uppercase">{data.label}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ResultsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => {
    setSelectedIndex(i);
    window.__lenis?.stop();
  }, []);

  const close = useCallback(() => {
    setSelectedIndex(null);
    window.__lenis?.start();
  }, []);

  const goPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : results.length - 1));
  }, []);

  const goNext = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev < results.length - 1 ? prev + 1 : 0));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIndex, close, goPrev, goNext]);

  return (
    <section id="results" className="relative section-padding z-10">
      <div className="absolute inset-y-0 left-0 w-full pointer-events-none">
        <div className="section-container h-full relative">
          <div className="absolute inset-y-0 left-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-y-0 right-[clamp(1rem,3vw,3rem)] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      <div className="section-container">
        <SectionHeader
          number="04"
          category="results"
          title="Our Track Record Speaks Volumes"
          description="Real numbers from real creators."
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          {results.map((data, index) => (
            <ResultCard key={data.id} data={data} index={index} onClick={() => open(index)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#050507] border border-white/10">
                <div className="flex items-stretch">
                  <div className="relative w-1/2 overflow-hidden bg-black/60">
                    <img
                      src={results[selectedIndex].beforeImg}
                      alt="Before"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                      <span className="text-[10px] font-mono tracking-widest text-white/50">BEFORE</span>
                    </div>
                    <div className="absolute bottom-3 left-3 font-mono text-xs text-white/30">
                      {formatNumber(results[selectedIndex].before)}
                    </div>
                  </div>
                  <div className="relative w-1/2 overflow-hidden bg-black/40">
                    <img
                      src={results[selectedIndex].afterImg}
                      alt="After"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-orange/10 via-transparent to-cyber-amber/5 pointer-events-none" />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded bg-cyber-orange/20 backdrop-blur-sm border border-cyber-orange/30">
                      <span className="text-[10px] font-mono tracking-widest text-cyber-orange">AFTER</span>
                    </div>
                    <div className="absolute bottom-3 right-3 font-mono text-xs text-cyber-orange">
                      {formatNumber(results[selectedIndex].after)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-5 py-3 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-br from-cyber-orange to-cyber-amber flex items-center justify-center text-[8px] font-bold text-white font-mono">BM</span>
                    <span className="text-xs font-bold text-white">Brightline Result</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/30 tracking-widest">
                    {selectedIndex + 1} / {results.length}
                  </span>
                </div>
              </div>

              <button
                onClick={goPrev}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyber-orange/30 transition-all duration-300 text-white/60 hover:text-cyber-orange"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goNext}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyber-orange/30 transition-all duration-300 text-white/60 hover:text-cyber-orange"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyber-orange/30 transition-all duration-300 text-white/60 hover:text-cyber-orange"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResultsSection;
