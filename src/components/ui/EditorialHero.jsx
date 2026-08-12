import React from 'react';
import { DotGrid, Grain } from './Texture';

/**
 * Hero editorial v4 — mesmo vocabulário do hero da Ambição 2030:
 * fundo sólido escuro, glow difuso, malha de pontos, grão e fade
 * inferior para a próxima seção.
 *
 * Diferente do PageHero antigo, não usa foto de banco de imagens como
 * plano de fundo: a hierarquia vem da tipografia, não da imagem.
 */
export const EditorialHero = ({
  eyebrow,
  title,
  titleAccent,
  lead,
  meta,
  actions,
  accent = '#CCB146',
  background = '#1E3250',
  children,
}) => (
  <section
    className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24"
    style={{ backgroundColor: background }}
  >
    {/* Glow difuso — profundidade atmosférica */}
    <div
      className="absolute -right-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[680px] md:h-[680px] rounded-full blur-3xl animate-glow pointer-events-none"
      style={{ background: `radial-gradient(circle, ${accent}59, transparent 65%)` }}
      aria-hidden="true"
    />

    <div className="absolute inset-0 text-white/[0.05]" aria-hidden="true">
      <DotGrid className="w-full h-full" />
    </div>
    <Grain />

    {/* Fade para a seção seguinte */}
    <div
      className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
      style={{ background: `linear-gradient(to top, ${background}, transparent)` }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-4xl">
        {eyebrow && (
          <span
            className="inline-flex items-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-7 animate-fade-in-up"
            style={{ color: accent, animationDelay: '0ms' }}
          >
            <span className="w-8 h-px" style={{ backgroundColor: accent }} />
            {eyebrow}
          </span>
        )}

        <h1
          className="font-display font-black uppercase leading-[0.92] tracking-tight mb-7 animate-fade-in-up text-white text-4xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '90ms' }}
        >
          {title}
          {titleAccent && (
            <>
              {' '}
              <span style={{ color: accent }}>{titleAccent}</span>
            </>
          )}
        </h1>

        {lead && (
          <p
            className="text-white/75 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-9 animate-fade-in-up"
            style={{ animationDelay: '180ms' }}
          >
            {lead}
          </p>
        )}

        {meta?.length > 0 && (
          <div
            className="flex flex-wrap items-start gap-8 md:gap-12 mb-9 animate-fade-in-up"
            style={{ animationDelay: '260ms' }}
          >
            {meta.map((item, i) => (
              <div key={item.label} className="flex flex-col relative">
                {i > 0 && (
                  <span className="hidden md:block absolute -left-6 top-1 bottom-1 w-px bg-white/15" />
                )}
                <span className="font-display font-black text-2xl md:text-4xl text-white leading-none">
                  {item.value}
                </span>
                <span className="text-un-blue-3 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-bold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {actions && (
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '340ms' }}
          >
            {actions}
          </div>
        )}

        {children}
      </div>
    </div>
  </section>
);
