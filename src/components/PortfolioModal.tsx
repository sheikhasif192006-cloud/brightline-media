'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

interface ProjectData {
  category: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  strategy: string;
  approach: string[];
  results: { label: string; value: string }[];
  testimonial: { quote: string; author: string; role: string };
  service: string;
}

export const PortfolioModal = ({
  project,
  onClose,
}: {
  project: ProjectData | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    const main = document.getElementById('home');
    if (main) main.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prev;
      document.documentElement.style.overflow = '';
      if (main) main.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[90] flex items-center justify-center"
          onClick={onClose}
          data-lenis-prevent
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl mx-4 md:mx-8"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-black/80 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-cyber-orange transition-all shadow-xl"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="max-h-[85vh] overflow-y-auto bg-[#0A0A0B] border border-white/10 rounded-xl shadow-2xl">
              <div className="p-6 md:p-10 space-y-10">
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.2em]">
                      {project.category}
                    </span>
                    <span className="w-px h-4 bg-white/10" />
                    <div className="flex gap-4 font-mono text-[9px] text-slate-500">
                      {project.stats.map((s) => (
                        <span key={s.label}>{s.label}: <span className="text-white/60">{s.value}</span></span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-black tracking-tight text-white uppercase">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                </div>

                {/* Hero frame placeholder */}
                <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-cyber-orange/10 to-cyber-amber/5 border border-white/5 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 cyber-grid opacity-20" />
                  <div className="flex items-center gap-3 text-slate-500 font-mono text-xs">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    SHOWREEL PREVIEW
                  </div>
                </div>

                {/* Strategy */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.2em]">// Strategy</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.strategy}</p>
                </div>

                {/* Approach */}
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.2em]">// Approach</span>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.approach.map((step, i) => (
                      <div key={i} className="flex gap-3 items-start p-3 rounded-lg bg-white/5 border border-white/5">
                        <span className="font-mono text-[9px] text-cyber-orange mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-slate-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.2em]">// Results</span>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.results.map((r) => (
                      <div key={r.label} className="text-center p-4 rounded-lg bg-white/[0.02] border border-white/5">
                        <span className="block text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyber-orange to-cyber-amber">
                          {r.value}
                        </span>
                        <span className="block font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="relative p-6 rounded-lg bg-white/[0.02] border border-white/5">
                  <svg className="w-8 h-8 text-cyber-orange/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>
                  <p className="text-slate-300 text-sm italic leading-relaxed mb-4">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyber-orange/20 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-cyber-orange font-bold">{project.testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-white/80 font-medium">{project.testimonial.author}</span>
                      <span className="block font-mono text-[8px] text-slate-500">{project.testimonial.role}</span>
                    </div>
                  </div>
                </div>

                {/* Footer info */}
                <div className="flex flex-wrap gap-6 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-slate-500">
                    <span>Status</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-emerald-400/80">Completed</span>
                  </div>
                  <div className="font-mono text-[9px] text-slate-500">
                    Service: <span className="text-white/60">{project.service}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
