'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'Lee Horwood', img: '/images/lee.jpeg' },
  { name: 'Dan Mahar', img: '/images/mahar.jpeg' },
  { name: 'Yash Verma', img: '/images/yash-verma.jpeg' },
  { name: 'Arnav Panchal', img: '/images/arnav.jpeg' },
  { name: 'Yash Thakur', img: '/images/yash-thakur.jpeg' },
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
                <div className="w-8 h-8 rounded-full overflow-hidden bg-black flex-shrink-0 border border-white/10">
                  <img src={brand.img} alt={brand.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-mono text-sm md:text-base text-white/20 font-bold tracking-[0.05em] whitespace-nowrap">
                  {brand.name}
                </span>
                <span className="w-[1px] h-5 bg-white/5 mx-2" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
