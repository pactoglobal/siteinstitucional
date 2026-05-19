import React from 'react';
import { cn } from '../../utils/cn';

export const Button = ({ children, variant = 'primary', icon: Icon, className = '', onClick }) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wider text-[10px] md:text-xs lg:text-sm transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-un-gold focus:ring-offset-2 shrink-0";

  const variants = {
    primary: "bg-un-green text-white hover:bg-un-green/80 hover:scale-105 active:scale-95 shadow-lg shadow-un-green/20 px-4 py-3 md:px-6 md:py-3.5",
    secondary: "bg-un-blue text-white hover:bg-un-blue-1 active:scale-95 px-4 py-3 md:px-6 md:py-3.5",
    outline: "border-2 border-white/30 text-white hover:bg-white hover:text-un-blue active:scale-95 backdrop-blur-sm px-4 py-3 md:px-6 md:py-3.5",
    ghost: "text-un-blue hover:bg-gray-100 px-3 py-2 md:px-4 md:py-2 rounded-lg",
    login: "text-white hover:text-un-gold font-bold px-3 py-2 flex items-center gap-2"
  };

  return (
    <button onClick={onClick} className={cn(base, variants[variant], className)}>
      {Icon && <Icon className="mr-1.5 md:mr-2 w-3.5 h-3.5 md:w-4 md:h-4" />}
      {children}
    </button>
  );
};
