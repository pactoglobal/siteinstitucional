import React from 'react';
import { ArrowRight } from 'lucide-react';
import { routeHref } from '../../hooks/useHashRoute';
import { iconeOds } from './navegacao';

// Nota oficial sobre a adoção do ODS 18 (src/data/releases.js). Ator e data
// do texto seguem a nota: proposição brasileira, implementada pelo Pacto
// Global em 2025.
const RELEASE_ODS_18 = 'nota-oficial-ods-18-igualdade-etnico-racial';
const MOVIMENTO_ODS_18 = 'raca-prioridade';

export const Ods18Faixa = () => (
  <section className="bg-un-purple text-white">
    <div className="container mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-[auto_1fr_auto] md:gap-10 md:px-8 md:py-16 lg:px-12">
      <img src={iconeOds(18)} alt="" width={128} height={128} className="h-24 w-24 rounded-2xl shadow-2xl shadow-black/30 md:h-32 md:w-32" />
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">O ODS brasileiro</p>
        <h2 className="mt-2 font-display text-2xl font-black uppercase leading-tight tracking-tight md:text-4xl">
          ODS 18 — Igualdade Étnico-Racial
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
          Proposição brasileira, implementada pelo Pacto Global em 2025. Na Rede Brasil, o tema é
          trabalhado pelo movimento Raça é Prioridade.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
        <a
          href={routeHref('release', RELEASE_ODS_18)}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 text-xs font-bold uppercase tracking-wider text-un-purple transition-colors hover:bg-un-gold hover:text-un-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 focus-visible:ring-offset-un-purple"
        >
          Ler a nota oficial <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          href={routeHref('movimento', MOVIMENTO_ODS_18)}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-white/40 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold"
        >
          Raça é Prioridade <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  </section>
);
