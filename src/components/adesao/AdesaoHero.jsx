import React, { useEffect, useState } from 'react';
import { ArrowRight, Calculator, Pause, Play } from 'lucide-react';
import { cn } from '../../utils/cn';

const SLIDE_INTERVAL_MS = 6500;

const IMAGES_BASE = `${import.meta.env.BASE_URL}images/adesao/`;

// Fotos decorativas (alt vazio): a mensagem do hero está no texto.
const SLIDES = [
  { id: 'solar', file: 'hero-solar.jpg' },
  { id: 'equipe', file: 'hero-equipe.jpg' },
  { id: 'montanhas', file: 'hero-montanhas.jpg' },
  { id: 'savana', file: 'hero-savana.jpg' },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Hero da página Como Aderir: fotos em rotação ao fundo, texto à esquerda e
 * dois CTAs. O primeiro CTA leva ao formulário de contato (e não direto ao
 * portal da ONU) porque a jornada começa conversando com a equipe de
 * Engajamento — ver etapa 01.
 *
 * A rotação respeita prefers-reduced-motion (fica parada na primeira foto) e
 * tem botão de pausa, já que movimento automático acima de 5s precisa poder
 * ser interrompido (WCAG 2.2.2).
 */
export const AdesaoHero = ({ onQueroAderir, onSimular, onVerEtapas }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(prefersReducedMotion);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(
      () => setActive((current) => (current + 1) % SLIDES.length),
      SLIDE_INTERVAL_MS
    );
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      aria-labelledby="adesao-hero-title"
      className="relative isolate overflow-hidden bg-un-blue text-white"
    >
      {/* Fundo: fotos em crossfade com zoom lento */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        {SLIDES.map((slide, idx) => (
          <img
            key={slide.id}
            src={`${IMAGES_BASE}${slide.file}`}
            alt=""
            width={1600}
            height={900}
            loading={idx === 0 ? 'eager' : 'lazy'}
            fetchPriority={idx === 0 ? 'high' : 'auto'}
            className={cn(
              'absolute inset-0 h-full w-full object-cover',
              'transition-[opacity,transform] ease-out motion-reduce:transition-none',
              idx === active
                ? 'opacity-100 scale-100 duration-[1400ms,9000ms]'
                : 'opacity-0 scale-110 duration-[1400ms,9000ms]'
            )}
          />
        ))}
      </div>

      {/* Camadas de leitura: azul da ONU forte à esquerda, foto aparece à direita */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-un-blue via-un-blue/80 to-un-blue/15" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-un-blue/80 via-transparent to-un-blue/40" aria-hidden="true" />

      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 pt-32 pb-24 md:pt-44 md:pb-32 lg:pb-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-un-gold" aria-hidden="true" />
            Adesão &amp; Engajamento
          </span>

          <h1
            id="adesao-hero-title"
            className="mt-5 sm:mt-6 font-display font-black uppercase leading-[1.04] tracking-tight text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up delay-75"
          >
            Como aderir ao
            <span className="block text-un-gold">Pacto Global</span>
          </h1>

          <p className="mt-5 sm:mt-7 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-slate-100 animate-fade-in-up delay-150">
            Vincule sua empresa à maior iniciativa de sustentabilidade corporativa do
            Sistema ONU. A Rede Brasil acompanha cada passo da jornada de adesão.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 animate-fade-in-up delay-200">
            <button
              type="button"
              onClick={onQueroAderir}
              className="group inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-un-gold px-8 text-sm font-black uppercase tracking-wider text-un-blue shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer"
            >
              Quero aderir
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={onSimular}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-7 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-un-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white cursor-pointer"
            >
              <Calculator className="h-4 w-4" />
              Simular anuidade
            </button>

            <button
              type="button"
              onClick={onVerEtapas}
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 px-2 text-xs font-bold uppercase tracking-wider text-slate-200 underline decoration-un-gold/60 decoration-2 underline-offset-8 transition-colors hover:text-un-gold cursor-pointer"
            >
              Ver as 6 etapas
            </button>
          </div>
        </div>
      </div>

      {/* Controles da rotação */}
      <div className="absolute bottom-6 left-0 right-0">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-pressed={paused}
            aria-label={paused ? 'Retomar a troca automática de fotos' : 'Pausar a troca automática de fotos'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-un-blue cursor-pointer"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>

          <div className="flex items-center gap-2" role="group" aria-label="Escolher foto de fundo">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActive(idx)}
                aria-label={`Foto ${idx + 1} de ${SLIDES.length}`}
                aria-current={idx === active}
                className="group flex h-11 items-center cursor-pointer"
              >
                <span
                  className={cn(
                    'block h-1 rounded-full transition-all duration-500',
                    idx === active ? 'w-12 bg-un-gold' : 'w-6 bg-white/35 group-hover:bg-white/70'
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
