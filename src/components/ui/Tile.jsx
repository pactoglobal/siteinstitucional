import React from 'react';
import { cn } from '../../utils/cn';

export const Tile = ({ size = "small", image, category, title, subtitle, color = "bg-un-gold" }) => {
  const gridClass = {
    large: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[500px]",
    wide: "md:col-span-2 md:row-span-1 min-h-[250px]",
    small: "md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-[300px]"
  };

  return (
    <div className={cn("group relative overflow-hidden bg-un-blue rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2", gridClass[size])}>
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-un-blue via-un-blue/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>

      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className={cn("font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-2 md:mb-3 flex items-center gap-2 text-white")}>
            <span className={cn("w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm", color)}></span>
            {category}
          </span>
          <h3 className={cn("font-display font-black text-white uppercase leading-[0.9] mb-2 md:mb-3", size === 'large' ? 'text-2xl md:text-3xl lg:text-5xl' : 'text-lg md:text-xl lg:text-2xl')}>
            {title}
          </h3>
          {subtitle && <p className="text-un-blue-3 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};