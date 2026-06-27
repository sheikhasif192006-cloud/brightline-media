'use client';

import React, { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const spotlightX = useMotionValue(-300);
  const spotlightY = useMotionValue(-300);
  const spotlightMask = useMotionTemplate`radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, black 0%, transparent 35%)`;

  const handleSpotlight = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  }, []);

  const handleSpotlightLeave = useCallback(() => {
    spotlightX.set(-300);
    spotlightY.set(-300);
  }, []);

  const handleVideoEnter = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = false;
    vid.currentTime = 0;
    vid.play().then(() => setPlaying(true)).catch(() => {});
  };

  const handleVideoLeave = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();
    setPlaying(false);
  };
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 z-10"
    >
      {/* Deep ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-30 md:opacity-50 animate-breathe will-change-transform">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyber-orange/5 blur-[60px] md:blur-[120px] rounded-full animate-ambient-drift" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyber-amber/5 blur-[60px] md:blur-[120px] rounded-full animate-ambient-drift" style={{ animationDirection: 'reverse', animationDelay: '-7s' }} />
      </div>

      {/* Background vertical accent lines */}
      <div className="absolute inset-0 flex justify-center pointer-events-none select-none z-[1]">
        <div className="w-full hero-container relative h-full">
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 bottom-0 left-[25%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden sm:block" />
          <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />
          <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 hero-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center justify-center w-full">

          {/* Left Column: Badge, Heading, Description, CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col text-center lg:text-left w-full min-w-0">
            <Reveal direction="up" distance={30} duration={0.6} className="w-full">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8 hover:border-cyber-orange/30 hover:bg-white/10 transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-cyber-orange shadow-[0_0_8px_#FF6A01] animate-pulse" />
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-slate-300">
                  Trusted By 20+ Creators
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" distance={50} delay={0.15} duration={0.8} className="w-full">
              <h1
                className="text-3xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-4 sm:mb-6 relative select-none"
                onMouseMove={handleSpotlight}
                onMouseLeave={handleSpotlightLeave}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500/60 block mb-1">
                  We Turn Creators
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500/60">
                  Into Brands that SCALE
                </span>
                <motion.span
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-cyber-orange via-cyber-warm to-cyber-amber flex flex-col"
                  style={{ WebkitMaskImage: spotlightMask, maskImage: spotlightMask }}
                  aria-hidden="true"
                >
                  <span className="mb-1">We Turn Creators</span>
                  <span>Into Brands that SCALE</span>
                </motion.span>
              </h1>
            </Reveal>

            <Reveal direction="up" distance={30} delay={0.3} duration={0.7} className="w-full">
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed mb-6 sm:mb-10 mx-auto lg:mx-0">
                Content strategy, video editing, and growth systems that help creators generate millions of views and build authority.
              </p>
            </Reveal>

            <Reveal direction="up" distance={20} delay={0.45} duration={0.6} className="w-full">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
                <Button variant="orange" size="lg" href="#contact" ariaLabel="Get started" className="w-full sm:w-auto">
                  Get Started
                </Button>
                <Button variant="cyber" size="lg" href="https://youtube.com" ariaLabel="Watch showreel" className="w-full sm:w-auto">
                  Watch Showreel
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Showreel Console */}
          <Reveal className="lg:col-span-5 xl:col-span-5 w-full flex justify-center lg:justify-start items-center min-w-0" direction="up" distance={40} delay={0.6} duration={0.9}>
            <div className="w-full max-w-lg lg:max-w-none relative group cursor-pointer"
              onMouseEnter={handleVideoEnter}
              onMouseLeave={handleVideoLeave}
            >
              <div className="absolute inset-x-0 -top-8 -bottom-8 bg-gradient-to-tr from-cyber-orange/10 to-cyber-amber/10 blur-3xl rounded-full opacity-40 md:opacity-60 group-hover:opacity-100 group-hover:scale-105 duration-700 pointer-events-none" />

              <div className="glass-panel border border-white/10 rounded-xl overflow-hidden p-2 relative shadow-2xl animate-hud-float will-change-transform">
                <div className="absolute top-3.5 left-4 flex gap-1.5" aria-hidden="true">
                  <span className="w-2 h-2 rounded-full bg-red-500/40" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/40" />
                  <span className="w-2 h-2 rounded-full bg-green-500/40" />
                </div>

                <div className="absolute top-3 right-4 font-mono text-[8px] tracking-widest text-slate-500 flex gap-4" aria-hidden="true">
                  <span>SYS.ACTIVE // 100%</span>
                  <span className="text-cyber-orange animate-pulse">FPS: 60.00</span>
                </div>

                <div className="aspect-[3/5] sm:aspect-[9/16] w-full rounded-lg bg-black/50 border border-white/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 cyber-grid opacity-25" aria-hidden="true" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 pointer-events-none" />

                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover absolute inset-0"
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/result.mp4" type="video/mp4" />
                  </video>

                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {!playing && (
                      <div className="w-16 h-16 rounded-full border border-white/20 bg-black/70 backdrop-blur-md flex items-center justify-center group-hover:border-cyber-orange group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,106,1,0.5)] transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none">
                        <svg className="w-5 h-5 text-white ml-0.5 group-hover:text-cyber-orange transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div aria-hidden="true" className="pointer-events-none select-none">
                    <span className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/25" />
                    <span className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/25" />
                    <span className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/25" />
                    <span className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/25" />
                  </div>

                  <span className="absolute bottom-4 left-6 font-mono text-[8px] text-white/30 uppercase tracking-widest" aria-hidden="true">
                    PROD.CODE // AETHER
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
export default Hero;
