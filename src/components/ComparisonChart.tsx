'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const metrics = [
  { label: 'Engagement', before: 32, after: 89, unit: '%' },
  { label: 'Avg. Watch Time', before: 45, after: 92, unit: '%' },
  { label: 'Conversion Rate', before: 1.2, after: 4.8, unit: 'x' },
  { label: 'Follower Growth', before: 8, after: 47, unit: 'x' },
];

export const ComparisonChart = () => {
  return (
    <section className="section-container section-padding relative">
      <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-[clamp(1rem,3vw,3rem)] right-[clamp(1rem,3vw,3rem)] h-[1px] bg-gradient-to-r from-transparent via-cyber-orange/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <span className="font-mono text-[10px] uppercase text-cyber-orange tracking-[0.2em] mb-2 block text-center">
          // PERFORMANCE METRICS
        </span>
        <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white text-center mb-12 uppercase">
          Before <span className="text-cyber-orange">&</span> After
        </h3>

        <div className="space-y-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease }}
              className="space-y-2"
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-slate-400">{m.label}</span>
                <div className="flex gap-4 text-[10px] font-mono">
                  <span className="text-slate-500">Before: {m.before}{m.unit}</span>
                  <span className="text-cyber-orange">After: {m.after}{m.unit}</span>
                </div>
              </div>
              <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(m.before / m.after) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.15, ease }}
                  className="absolute inset-y-0 left-0 bg-white/20 rounded-full"
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + i * 0.15, ease }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyber-orange to-cyber-amber rounded-full"
                  style={{ width: 0 }}
                />
              </div>
              <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 + i * 0.15, ease }}
                className="border-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-orange/30 to-transparent origin-left"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
