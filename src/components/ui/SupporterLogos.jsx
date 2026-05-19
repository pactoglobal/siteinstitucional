import React from 'react';
import { cn } from '../../utils/cn';

export const SupporterLogos = ({ className, vertical = false, labelClass = "text-white/50" }) => (
  <div className={cn("flex flex-col items-center", className)}>
    <span className={cn("text-[8px] uppercase tracking-widest mb-2", labelClass)}>Apoiadores Institucionais</span>
    <div className={cn("flex items-center gap-4 md:gap-6", vertical ? "flex-col gap-4" : "")}>
      <div className="h-3 md:h-4 flex items-center text-white font-serif font-bold italic tracking-wide text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity">aegea</div>
      {!vertical && <div className="h-3 w-px bg-white/30"></div>}
      <div className="h-3 md:h-4 flex items-center text-white font-display font-black tracking-tighter text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity"><span className="text-un-green">M</span>RV</div>
      {!vertical && <div className="h-3 w-px bg-white/30"></div>}
      <div className="h-3 md:h-4 flex items-center text-white font-sans font-bold text-[8px] md:text-[10px] tracking-tight uppercase opacity-90 hover:opacity-100 transition-opacity"><span className="text-un-green mr-1">Schneider</span> Electric</div>
    </div>
  </div>
);