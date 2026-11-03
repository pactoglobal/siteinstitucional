import React from 'react';
import { cn } from '../../utils/cn';

export const Badge = ({ children, color = "bg-un-gold" }) => (
  <span className={cn("inline-block px-2.5 py-1 md:px-3 text-[9px] md:text-[10px] font-display font-black uppercase tracking-widest text-un-blue mb-3 rounded-sm", color)}>
    {children}
  </span>
);
