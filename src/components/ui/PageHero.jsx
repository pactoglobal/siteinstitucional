import React from 'react';
import { cn } from '../../utils/cn';

export const PageHero = ({ title, category, description, image, color = "bg-un-blue" }) => (
  <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden", color)}>
    <div className="absolute inset-0 z-0">
      <img src={image} className="w-full h-full object-cover opacity-20 transition-scale duration-[10s] hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-b from-un-blue/80 via-un-blue/50 to-un-blue" />
    </div>
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10 text-left">
      <div className="max-w-3xl">
        {category && (
          <span className="inline-block px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 border border-white/15 animate-fade-in-up">
            {category}
          </span>
        )}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase leading-[1.08] tracking-tight mb-4 sm:mb-6 animate-fade-in-up delay-75">
          {title}
        </h1>
        {description && (
          <p className="text-slate-100 text-sm sm:text-base md:text-lg font-light leading-relaxed mb-6 sm:mb-8 max-w-2xl animate-fade-in-up delay-150">
            {description}
          </p>
        )}
      </div>
    </div>
  </section>
);