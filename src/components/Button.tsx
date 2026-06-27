'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cyber' | 'orange' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ariaLabel?: string;
}

const ArrowIcon = () => (
  <svg
    className="w-[18px] h-[18px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  disabled = false,
  icon,
  iconPosition = 'right',
  ariaLabel,
}) => {
  const showArrow = (variant === 'orange' || variant === 'cyber') && size !== 'sm' && !icon;

  const baseStyles =
    'inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest relative overflow-hidden select-none min-h-[44px] will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black group';

  const sizeStyles = {
    sm: 'px-5 py-2 text-[10px] gap-2',
    md: 'px-6 sm:px-8 py-3 text-xs gap-2.5',
    lg: 'px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-xs sm:text-sm gap-2 sm:gap-3',
  };

  const variantStyles = {
    orange:
      'bg-white text-black font-semibold border border-white/30 rounded-lg transition-all duration-[0.5s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-[1.04] active:scale-[0.97]',

    cyber:
      'text-cyber-orange border border-white/20 rounded-lg transition-all duration-[0.5s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-white hover:border-cyber-orange/60 hover:shadow-[0_0_25px_rgba(255,106,1,0.15)] hover:scale-[1.04] active:scale-[0.97]',

    primary:
      'bg-cyber-orange text-black font-semibold hover:bg-white hover:shadow-[0_0_20px_rgba(255,106,1,0.6)] border border-transparent rounded-lg',

    secondary:
      'bg-white text-black font-semibold hover:bg-cyber-orange hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-transparent rounded-lg',

    outline:
      'border border-white/20 text-white hover:border-cyber-orange hover:bg-cyber-orange/10 hover:text-cyber-orange rounded-lg',

    text: 'text-slate-400 hover:text-white border-0 bg-transparent py-2! px-0!',
  };

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';

  const combinedClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const content = (
    <>
      {variant === 'orange' && (
        <>
          <span className="absolute inset-0 rounded-lg bg-gradient-to-t from-cyber-orange to-cyber-amber origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
        </>
      )}
      {variant === 'cyber' && (
        <>
          <span className="absolute inset-0 rounded-lg bg-gradient-to-t from-cyber-orange/90 to-cyber-amber/80 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />
          <span className="absolute inset-0 rounded-lg border border-cyber-orange/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </>
      )}
      {variant === 'orange' && (
        <span className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}

      {icon && iconPosition === 'left' && <span className="flex-shrink-0 relative z-10">{icon}</span>}
      {showArrow ? (
        <span className="relative z-10 flex items-center gap-3">
          <span className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-0.5">
            {children}
          </span>
          <span className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">
            <ArrowIcon />
          </span>
        </span>
      ) : (
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      )}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0 relative z-10">{icon}</span>}
    </>
  );

  if (href) {
    if (href.startsWith('#')) {
      return (
        <a
          href={href}
          className={combinedClasses}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={combinedClasses}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
};
