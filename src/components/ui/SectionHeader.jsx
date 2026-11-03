import React from 'react';
import { cn } from '../../utils/cn';

export const SectionHeader = ({
  badge,
  title,
  titleAccent,
  description,
  button,
  className = '',
  inverted = false,
  gradientTitle,
  gradientAccent
}) => (
  <div className={cn("flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-14 lg:mb-16 gap-8", className)}>
    <div className="max-w-4xl">
      {badge && (
        <span className={cn(
          "inline-block mb-5 text-micro font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm backdrop-blur-sm border reveal",
          inverted
            ? "bg-white/10 border-white/20 text-white"
            : "bg-un-blue/5 border-un-blue/10 text-un-blue"
        )} style={{ "--reveal-delay": "0ms" }}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        "text-display-xs sm:text-display-sm md:text-display-md lg:text-display-lg font-impact font-black uppercase tracking-tight leading-tight mb-0 pb-0 reveal",
        inverted ? "text-white" : "text-ink",
        gradientTitle && "gradient-text-ods"
      )} style={{ "--reveal-delay": "100ms" }}>
        <span className="block">{title}</span>
        {titleAccent && (
          <span className={cn(
            "block mt-1 sm:mt-2 reveal",
            inverted ? "text-un-gold" : "text-un-blue",
            gradientAccent && "gradient-text-ods"
          )} style={{ "--reveal-delay": "150ms" }}>
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <div className={cn(
          "mt-8 text-body-sm md:text-body-md lg:text-heading-sm max-w-2xl leading-relaxed font-light reveal",
          inverted ? "text-ink-3" : "text-ink-4"
        )} dangerouslySetInnerHTML={{ __html: description }} style={{ "--reveal-delay": "200ms" }} />
      )}
    </div>
    {button && (
      <div className="shrink-0 flex items-center lg:pb-2 reveal" style={{ "--reveal-delay": "250ms" }}>
        {button}
      </div>
    )}
  </div>
);