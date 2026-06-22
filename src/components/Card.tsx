import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'orange' | 'none';
  hoverEffect?: boolean;
  footer?: React.ReactNode;
  headerAccent?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  className = '',
  glowColor = 'none',
  hoverEffect = true,
  footer,
  headerAccent,
}) => {
  const glowStyles = {
    orange: 'hover:border-cyber-orange/30 hover:shadow-[0_0_20px_rgba(255,106,1,0.1),0_0_60px_rgba(255,106,1,0.06)]',
    cyan: 'hover:border-cyber-orange/30 hover:shadow-[0_0_20px_rgba(255,106,1,0.1),0_0_60px_rgba(255,106,1,0.06)]',
    purple: 'hover:border-cyber-amber/30 hover:shadow-[0_0_20px_rgba(255,140,56,0.1),0_0_60px_rgba(255,140,56,0.06)]',
    blue: 'hover:border-cyber-amber/30 hover:shadow-[0_0_20px_rgba(255,140,56,0.1),0_0_60px_rgba(255,140,56,0.06)]',
    none: 'hover:border-white/10',
  };

  return (
    <div 
      className={`
        glass-panel rounded-lg overflow-hidden border border-white/5 flex flex-col relative group will-change-transform
        ${hoverEffect ? 'hover:-translate-y-1' : ''}
        ${glowColor !== 'none' ? glowStyles[glowColor] : ''}
        ${className}
      `.trim()}
    >
      {/* Upper edge futuristic light bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-cyber-orange/50 transition-all duration-500" />
      
      {/* Corner cybernetic ticks */}
      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-white/20 group-hover:border-cyber-orange/60 transition-all duration-300" />
      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-white/20 group-hover:border-cyber-orange/60 transition-all duration-300" />
      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-white/20 group-hover:border-cyber-orange/60 transition-all duration-300" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-white/20 group-hover:border-cyber-orange/60 transition-all duration-300" />

      {/* Card Header */}
      {(title || subtitle || headerAccent) && (
        <div className="p-5 border-b border-white/5 flex justify-between items-start">
          <div>
            {subtitle && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyber-orange mb-1 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-cyber-orange transition-colors duration-300">
                {title}
              </h3>
            )}
          </div>
          {headerAccent && <div className="flex-shrink-0">{headerAccent}</div>}
        </div>
      )}

      {/* Card Body */}
      <div className="p-6 flex-grow flex flex-col text-slate-300 text-sm leading-relaxed">
        {children}
      </div>

      {/* Card Footer */}
      {footer && (
        <div className="px-6 py-4 bg-white/[0.02] border-t border-white/5 text-xs text-slate-400">
          {footer}
        </div>
      )}
    </div>
  );
};
