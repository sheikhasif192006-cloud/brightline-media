'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';

export const ResultsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const play = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.currentTime = 0;
    v.play().then(() => setIsPlaying(true)).catch(() => {});
  }, []);

  const pause = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    setIsPlaying(false);
  }, []);

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
          number="03"
          category="results"
          title="Real Results. Real Impact."
          description="See the difference Brightline Media delivers — real footage, real outcomes."
        />

        <motion.div
          className="max-w-xs mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className="relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 group cursor-pointer"
            onMouseEnter={play}
            onMouseLeave={pause}
          >
            <div className="relative overflow-hidden bg-black aspect-[3/5] sm:aspect-[9/16] mx-auto max-h-[55vh]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            <div className="px-5 py-3 flex items-center justify-between border-t border-white/5">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-gradient-to-br from-cyber-orange to-cyber-amber flex items-center justify-center text-[8px] font-bold text-white font-mono">BM</span>
                <span className="text-xs font-bold text-white">Brightline Result</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="font-mono text-[9px] text-cyber-orange tracking-widest">
                  {isPlaying ? 'PLAYING' : 'HOVER TO PLAY'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
