import React from 'react';

export const BackgroundEffect: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#020202]">
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 cyber-grid opacity-[0.3]" />
      
      {/* Ambient Pulsating Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyber-orange/5 blur-[120px] animate-radial-pulse" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyber-amber/5 blur-[120px] animate-radial-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] rounded-full bg-cyber-warm/3 blur-[140px] animate-radial-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Floating ambient orb */}
      <div className="absolute top-[20%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-cyber-orange/4 blur-[100px] animate-ambient-drift" style={{ animationDuration: '20s' }} />

      {/* Grid Dots */}
      <div className="absolute inset-0 cyber-grid-dots opacity-40" />

      {/* Dark vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030303]/70" />
    </div>
  );
};
