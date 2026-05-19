import React, { useState, useEffect } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { HERO_SLIDES } from '../../data/constants';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

// --- COMPONENTE: HERO CARROSSEL (RED BULL STYLE) ---

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-screen min-h-[600px] overflow-hidden bg-un-blue group touch-pan-y">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] w-full",
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          )}
        >
          <img src={slide.image} alt={slide.badge} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-un-blue via-black/40 to-transparent opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

          <div className="absolute inset-x-0 bottom-16 md:bottom-24 z-20">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
              <div className={cn("max-w-4xl transition-all duration-1000 delay-300 transform", index === current ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0")}>
                <Badge color="bg-un-red text-white shadow-lg mb-4 md:mb-6">{slide.badge}</Badge>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase leading-[0.9] drop-shadow-2xl mb-4 md:mb-6">
                  {slide.title}<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-gold to-white">{slide.subtitle}</span>
                </h1>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-8">
                  <Button variant="primary" icon={ArrowRight} className="bg-un-red hover:bg-white hover:text-un-red shadow-un-red/20 text-xs md:text-sm px-6 py-3 md:px-8 md:py-4">
                    {slide.ctaPrimary}
                  </Button>
                  <div className="flex items-center text-un-blue-3 text-xs md:text-sm font-medium hover:text-white transition-colors cursor-pointer">
                    <Play className="w-4 h-4 mr-2" />
                    {slide.ctaSecondary} <span className="mx-2 opacity-50">•</span> 3 min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Progress Indicator (Red Bull Horizontal Dots) */}
      <div className="absolute bottom-6 inset-x-0 z-30">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={cn(
                "h-1 md:h-1.5 rounded-full transition-all duration-500 ease-out",
                current === idx ? "w-12 md:w-16 bg-un-gold" : "w-2 md:w-3 bg-white/40 hover:bg-white"
              )}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};