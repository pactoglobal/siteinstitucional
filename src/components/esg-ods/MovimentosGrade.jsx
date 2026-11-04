import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { routeHref } from '../../hooks/useHashRoute';
import { MOVIMENTOS } from '../../data/ambicao2030';
import { ODS_COLORS } from '../../data/constants';
import { logoMovimento } from './navegacao';

export const MovimentosGrade = () => (
  <section className="border-y border-slate-200/80 bg-un-surface py-16 md:py-24">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Ambição 2030"
        title="10 movimentos, metas públicas"
        description="Cada movimento conecta empresas a ODS prioritários, com metas mensuráveis até 2030."
        button={
          <a
            href={routeHref('ambicao')}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-un-blue px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-un-blue-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 md:text-sm"
          >
            Conhecer a Ambição 2030 <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        }
        className="mb-10 md:mb-12"
      />

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {MOVIMENTOS.map((m) => (
          <li key={m.id}>
            <a
              href={routeHref('movimento', m.id)}
              className="group flex h-full flex-col items-center gap-3 rounded-3xl border border-slate-200/90 bg-white p-5 text-center transition-all hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold motion-reduce:transition-none"
            >
              <span className="flex h-16 w-full items-center justify-center">
                <img src={logoMovimento(m.id)} alt="" width={180} height={37} loading="lazy" className="max-h-12 w-auto max-w-full object-contain transition-transform group-hover:scale-105 motion-reduce:transition-none" />
              </span>
              <span className="text-sm font-bold leading-tight text-slate-900">{m.name}</span>
              <span className="mt-auto flex gap-1" aria-label={`ODS ${m.ods.join(' e ')}`}>
                {m.ods.map((n) => (
                  <span key={n} className="flex h-6 min-w-6 items-center justify-center rounded-md px-1 text-[10px] font-black text-white" style={{ backgroundColor: ODS_COLORS[n - 1] }} aria-hidden="true">
                    {n}
                  </span>
                ))}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
