import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { OdsFaixa } from '../ui/OdsFaixa';
import { routeHref } from '../../hooks/useHashRoute';
import { TEXTOS_ESG } from '../../data/esgOds';
import { PILARES_VISUAL } from './pilares';
import { rolarPara } from './navegacao';

const { hero } = TEXTOS_ESG;

/**
 * Hero tipográfico: as três letras são o próprio conteúdo da página, então
 * dispensam foto de banco. Cada letra leva ao card do pilar.
 */
export const HeroEsg = () => (
  <section className="relative overflow-hidden bg-un-blue text-white">
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-un-green/20 blur-3xl" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-un-purple/20 blur-3xl" />

    <div className="container relative mx-auto max-w-7xl px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40 lg:px-12">
      <div className="grid items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-un-blue-3 sm:text-xs">
            {hero.selo}
          </span>
          <h1 className="font-display text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
            {hero.titulo}
            <span className="mt-3 block text-xl font-bold normal-case tracking-normal text-un-blue-3 sm:text-2xl md:text-3xl">
              {hero.subtitulo}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-slate-200 md:text-lg">
            {hero.texto}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => rolarPara('pilares')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-un-gold px-6 text-xs font-bold uppercase tracking-wider text-un-blue transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-un-blue md:text-sm"
            >
              {hero.acao} <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={routeHref('ods')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold md:text-sm"
            >
              {hero.link} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav aria-label="Pilares ESG" className="lg:col-span-5">
          <ul className="grid grid-cols-3 gap-3 lg:grid-cols-1">
            {Object.entries(PILARES_VISUAL).map(([letra, pilar]) => (
              <li key={letra}>
                <button
                  type="button"
                  onClick={() => rolarPara(pilar.id)}
                  className="group flex w-full flex-col items-start gap-1 rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold lg:flex-row lg:items-center lg:gap-5 lg:p-5"
                >
                  <span className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-2xl font-black text-white transition-transform group-hover:scale-105 lg:h-14 lg:w-14 lg:text-3xl', pilar.preenchimento)}>
                    {letra}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-white sm:text-sm sm:tracking-wider lg:text-base">{pilar.nome}</span>
                  <ArrowDown className="ml-auto hidden h-4 w-4 text-un-blue-3 transition-transform group-hover:translate-y-0.5 lg:block" aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
    <OdsFaixa />
  </section>
);
