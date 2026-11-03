import React from 'react';
import { cn } from '../../utils/cn';

export const PageHero = ({ title, category, description, image, color = "bg-un-blue", gradientTitle }) => (
  <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden", color)}>
    <div className="absolute inset-0 z-0">
      <img src={image} className="w-full h-full object-cover opacity-15 transition-transform duration-[10s] hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-b from-un-blue/80 via-un-blue/30 to-un-blue/10" />
    </div>
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10 text-left">
      <div className="max-w-3xl">
        {category && (
          <span className="inline-block px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-micro font-bold uppercase tracking-widest mb-4 sm:mb-6 border border-white/15 animate-fade-in-up reveal" style={{ "--reveal-delay": "0ms" }}>
            {category}
          </span>
        )}
        <h1 className={cn(
          "text-display-sm sm:text-display-md md:text-display-lg lg:text-display-xl font-impact font-black text-white uppercase leading-tight mb-4 sm:mb-6 break-words animate-fade-in-up reveal",
          "transition-opacity duration-1000",
          gradientTitle && "gradient-text-ods"
        )} style={{ "--reveal-delay": gradientTitle ? "100ms" : "150ms" }}>
          {title}
        </h1>
        {description && (
          <p className={cn(
            "text-body-lg sm:text-body-lg md:text-heading-sm font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl animate-fade-in-up reveal",
            "text-ink-2"
          )} style={{ "--reveal-delay": gradientTitle ? "200ms" : "250ms" }}>
            {description}
          </p>
        )}
      </div>
    </div>
  </section>
);