import React from 'react';
import { cn } from '../../utils/cn';

export const PageHero = ({ title, category, description, image, color = "bg-un-blue" }) => (
  <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden", color)}>
    <div className="absolute inset-0 z-0">
      <img src={image} className="w-full h-full object-cover opacity-20 transition-scale duration-[10s] hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-b from-un-blue/80 via-un-blue/50 to-un-blue" />
    </div>
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10 text-center md:text-left">
      <div className="max-w-3xl">
        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
          {category}
        </span>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white uppercase leading-[0.9] mb-6 animate-fade-in-up delay-75">
          {title}
        </h1>
        <p className="text-white/70 text-base md:text-lg font-light leading-relaxed mb-8 animate-fade-in-up delay-150">
          {description}
        </p>
      </div>
    </div>
  </section>
);