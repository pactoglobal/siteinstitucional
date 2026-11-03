import React from 'react';
import { cn } from '../../utils/cn';

export const Button = ({ children, variant = 'primary', icon: Icon, className = '', onClick, size = 'md', ctaPersona }) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-un-gold focus:ring-offset-2 focus:ring-offset-paper shrink-0";

  const sizes = {
    sm: "text-micro px-3 py-2",
    md: "text-caption px-4 py-3",
    lg: "text-body-sm px-6 py-4",
  };

  const variants = {
    primary: "bg-un-green text-white hover:bg-un-green/90 hover:shadow-xl hover:shadow-un-green/30 active:scale-95 shadow-lg shadow-un-green/20",
    secondary: "bg-un-blue text-white hover:bg-un-blue-1 active:scale-95",
    outline: "border-2 border-white/30 text-white hover:bg-white hover:text-un-blue active:scale-95 backdrop-blur-sm",
    ghost: "text-un-blue hover:bg-white/10 px-3 py-2 rounded-lg",
    login: "text-white hover:text-un-gold font-bold px-3 py-2 flex items-center gap-2",
    /* Hybrid Strategy CTA variants — WCAG AA validated */
    'cta-empresa': "bg-leaf text-paper border-2 border-transparent hover:bg-transparent hover:border-leaf hover:text-leaf hover:shadow-glow-verde active:scale-98",
    'cta-prefeitura': "bg-atlantic text-ink border-2 border-transparent hover:bg-transparent hover:border-atlantic hover:text-atlantic hover:shadow-glow-azul active:scale-98",
    'cta-ods': "bg-sun text-paper border-2 border-transparent hover:bg-transparent hover:border-sun hover:text-sun hover:shadow-glow-amarelo active:scale-98",
  };

  const effectiveVariant = ctaPersona ? `cta-${ctaPersona}` : variant;

  return (
    <button onClick={onClick} className={cn(base, variants[effectiveVariant] || variants.primary, sizes[size], className)}>
      {Icon && <Icon className="mr-1.5 md:mr-2 w-3.5 h-3.5 md:w-4 md:h-4" />}
      {children}
    </button>
  );
};