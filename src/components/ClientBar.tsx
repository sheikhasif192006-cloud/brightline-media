'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'NOVA', color: '#FF6A01' },
  { name: 'AXIS', color: '#FF8C38' },
  { name: 'PULSE', color: '#FF5500' },
  { name: 'DRIFT', color: '#FF6A01' },
  { name: 'CORE', color: '#FF8C38' },
  { name: 'EDGE', color: '#FF5500' },
  { name: 'WAVE', color: '#FF6A01' },
  { name: 'FLUX', color: '#FF8C38' },
];

export const ClientBar = () => {
  return (
    <section className="relative overflow-hidden border-t border-b border-white/5">
      <div className="absolute inset-0 bg-black/20" />
      <div className="py-6 md:py-8">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-16 md:gap-24 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center gap-3 shrink-0">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: brand.color }}
                />
                <span className="font-mono text-sm md:text-base text-white/20 font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="font-mono text-[8px] text-white/10">//</span>
                <span className="font-mono text-[8px] text-white/10 tracking-widest">
                  SYSTEMS
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
