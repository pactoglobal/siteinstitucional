import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { OdsFaixa } from '../ui/OdsFaixa';
import { routeHref } from '../../hooks/useHashRoute';
import { ODS_LIST } from '../../data/esgOds';
import { iconeOds, rolarPara } from './navegacao';

/**
 * Hero com o mosaico dos 18 ícones oficiais no lugar de foto. O mosaico é
 * decorativo (aria-hidden): os mesmos ícones, com nome, estão no explorador
 * logo abaixo.
 */
export const HeroOds = () => (
  <section className="relative overflow-hidden bg-un-blue text-white">
    <div className="container relative mx-auto max-w-7xl px-4 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40 lg:px-12">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="mb-6 inline-block rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-un-blue-3 sm:text-xs">
            Agenda 2030
          </span>
          <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Os 18 ODS
            <span className="mt-3 block text-xl font-bold normal-case tracking-normal text-un-blue-3 sm:text-2xl md:text-3xl">
              17 objetivos globais e um brasileiro
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-slate-200 md:text-lg">
            Os Objetivos de Desenvolvimento Sustentável reúnem os grandes desafios da sociedade e do
            planeta. Escolha um ODS e veja como o Pacto Global da ONU – Rede Brasil atua nele.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => rolarPara('explorador')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-un-gold px-6 text-xs font-bold uppercase tracking-wider text-un-blue transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-un-blue md:text-sm"
            >
              Explorar os ODS <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href={routeHref('esg')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold md:text-sm"
            >
              Entender o ESG <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <ul aria-hidden="true" className="grid grid-cols-6 gap-1.5 sm:gap-2 lg:col-span-6">
          {ODS_LIST.map((ods) => (
            <li key={ods.id} className="aspect-square overflow-hidden rounded-md shadow-lg shadow-black/20 sm:rounded-lg">
              <img src={iconeOds(ods.id)} alt="" width={120} height={120} className="h-full w-full object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </div>
    <OdsFaixa />
  </section>
);
