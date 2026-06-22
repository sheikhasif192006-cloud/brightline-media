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
  const baseStyles =
    'inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-[0.4s] ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden select-none min-h-[44px] will-change-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-orange focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const sizeStyles = {
    sm: 'px-4 py-2 text-[10px] gap-2',
    md: 'px-6 py-3 text-xs gap-2.5',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm gap-2 sm:gap-3',
  };

  const variantStyles = {
    primary:
      'bg-cyber-orange text-black font-semibold hover:bg-white hover:shadow-[0_0_20px_rgba(255,106,1,0.6)] border border-transparent',

    secondary:
      'bg-white text-black font-semibold hover:bg-cyber-orange hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] border border-transparent',

    outline:
      'border border-white/20 text-white hover:border-cyber-orange hover:bg-cyber-orange/10 hover:text-cyber-orange',

    cyber:
      'border-l-2 border-r-2 border-y border-cyber-orange/50 text-cyber-orange bg-cyber-orange/5 hover:bg-cyber-orange/20 hover:border-cyber-orange hover:text-white hover:shadow-[0_0_15px_rgba(255,106,1,0.3)] before:absolute before:content-[""] before:w-1 before:h-1 before:bg-cyber-orange before:top-0 before:left-0 after:absolute after:content-[""] after:w-1 after:h-1 after:bg-cyber-orange after:bottom-0 after:right-0',

    orange:
      'bg-cyber-orange text-white font-semibold hover:bg-cyber-amber hover:shadow-[0_0_25px_rgba(255,106,1,0.5)] border border-cyber-orange',

    text: 'text-slate-400 hover:text-white hover:translate-x-1 border-0 bg-transparent py-2! px-0!',
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
      {(variant === 'cyber' || variant === 'orange') && (
        <span className="absolute inset-0 pointer-events-none opacity-30">
          <span className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-cyber-orange to-transparent" />
          <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-cyber-orange to-transparent" />
        </span>
      )}

      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
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
