import React from 'react';
import { cn } from '../../utils/cn';

export const SectionHeader = ({
  badge,
  title,
  titleAccent,
  description,
  button,
  className = "",
  inverted = false
}) => (
  <div className={cn("flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-14 lg:mb-16 gap-8", className)}>
    <div className="max-w-4xl">
      {/* Sem a pílula colorida à esquerda: o chip do badge já ancora o bloco,
          e a barra repetida em 13 seções virava maneirismo, não hierarquia. */}
      {badge && (
        <span className={cn(
          "inline-block mb-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] px-4 py-1.5 rounded-sm backdrop-blur-sm border",
          inverted
            ? "bg-white/10 border-white/20 text-white"
            : "bg-un-blue/5 border-un-blue/10 text-un-blue"
        )}>
          {badge}
        </span>
      )}
      <h2 className={cn(
        "text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[1.2] mb-0 pb-0",
        inverted ? "text-white" : "text-gray-900"
      )}>
        {title} {titleAccent && <br className="hidden md:block"/>}
        {titleAccent && (
          <span className={cn(
            inverted ? "text-un-gold" : "text-un-blue-1"
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