import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  imagePlaceholder?: string;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  className = '',
}) => {
  return (
    <div className={`group relative aspect-video bg-cyber-gray border border-white/5 overflow-hidden cursor-pointer ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
      <div className="absolute inset-0 cyber-grid opacity-10 group-hover:opacity-25 transition-opacity duration-700 z-0"></div>
      
      {/* Visual Glitch/Scanner Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-orange/30 animate-scanline"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-8 z-30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <span className="inline-block text-cyber-orange text-[10px] uppercase tracking-[0.4em] font-mono mb-3 py-1 px-2 border border-cyber-orange/20 bg-cyber-orange/5">
          {category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight uppercase group-hover:text-glow-orange transition-all duration-300">
          {title}
        </h3>
      </div>

      {/* Corner Button Accent */}
      <div className="absolute top-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      {/* Scale Overlay */}
      <div className="absolute inset-0 bg-cyber-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
    </div>
  );
};
