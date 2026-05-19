import React from 'react';
import { cn } from '../../utils/cn';

export const SectionHeader = ({
  badge, 
  title, 
  titleAccent, 
  description, 
  barColor = "bg-un-blue", 
  button,
  className = "",
  inverted = false
}) => (
  <div className={cn("flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-14 lg:mb-16 gap-8", className)}>
    <div className="max-w-4xl">
      <div className="flex items-center gap-5 mb-5">
        <div className={cn("w-2 h-10 md:h-14 rounded-full", barColor)}></div>
        {badge && (
          <span className={cn(
            "text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-sm backdrop-blur-sm border",
            inverted 
              ? "bg-white/10 border-white/20 text-white" 
              : "bg-un-blue/5 border-un-blue/10 text-un-blue"
          )}>
            {badge}
          </span>
        )}
      </div>
      <h2 className={cn(
        "text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter leading-[1.0] mb-0",
        inverted ? "text-white" : "text-gray-900"
      )}>
        {title} {titleAccent && <br className="hidden md:block"/>}
        {titleAccent && (
          <span className={cn(
            "text-transparent bg-clip-text bg-gradient-to-r",
            inverted ? "from-un-gold to-white/90" : "from-un-blue to-un-blue-1"
          )}>
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className={cn(
          "mt-8 text-sm md:text-base lg:text-xl max-w-2xl leading-relaxed font-light",
          inverted ? "text-un-blue-3" : "text-gray-600"
        )}>
          {description}
        </p>
      )}
    </div>
    {button && (
      <div className="shrink-0 flex items-center lg:pb-2">
        {button}
      </div>
    )}
  </div>
);