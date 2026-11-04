import React from 'react';
import { ArrowRight, FileCheck2, Layers, Target } from 'lucide-react';
import { cn } from '../../utils/cn';
import { SectionHeader } from '../ui/SectionHeader';
import { routeHref } from '../../hooks/useHashRoute';
import { PLATAFORMAS } from '../../data/plataformas';
import { MOVIMENTOS } from '../../data/ambicao2030';

const ETAPAS = [
  {
    numero: '01',
    icone: Layers,
    cor: 'bg-un-green',
    titulo: 'Plataformas de Ação',
    texto: `${PLATAFORMAS.length} plataformas temáticas reúnem empresas para trabalhar, em conjunto, as agendas ambiental, social e de governança.`,
    rota: 'plataformas',
    acao: 'Ver as plataformas',
    detalhe: 'plataformas',
  },
  {
    numero: '02',
    icone: Target,
    cor: 'bg-un-purple',
    titulo: 'Ambição 2030',
    texto: `${MOVIMENTOS.length} movimentos com metas públicas e mensuráveis até 2030, cada um ligado a ODS prioritários.`,
    rota: 'ambicao',
    acao: 'Conhecer a Ambição 2030',
    detalhe: null,
  },
  {
    numero: '03',
    icone: FileCheck2,
    cor: 'bg-un-blue-1',
    titulo: 'Comunicação de Progresso',
    texto: 'Relato anual em que a empresa demonstra seu progresso na implementação dos Dez Princípios e na contribuição para os ODS.',
    rota: 'cop',
    acao: 'Entender a CoP',
    detalhe: null,
  },
];

const Detalhe = ({ tipo }) => {
  if (tipo === 'plataformas') {
    return (
      <ul className="flex flex-wrap gap-1.5" aria-label="Plataformas de Ação">
        {PLATAFORMAS.map((p) => (
          <li key={p.slug} className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: p.color }} aria-hidden="true" />
            {p.shortName}
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

export const EsgEmAcao = () => (
  <section className="border-y border-slate-200/80 bg-un-surface py-16 md:py-24">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Do compromisso à prática"
        title="Onde o ESG vira ação"
        description="Ao aderir ao Pacto Global, a empresa ganha três frentes para levar os pilares ESG para a operação."
        className="mb-10 md:mb-12"
      />

      <div className="relative">
      <div aria-hidden="true" className="absolute left-0 right-0 top-[3.5rem] hidden h-px bg-slate-300 lg:block" />
      <ol className="relative grid gap-6 lg:grid-cols-3">
        {ETAPAS.map(({ numero, icone: Icone, cor, titulo, texto, rota, acao, detalhe }) => (
          <li key={numero} className="relative flex flex-col rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8">
            <div className="mb-6 flex items-center gap-4">
              <span className={cn('relative flex h-12 w-12 items-center justify-center rounded-2xl text-white', cor)}>
                <Icone className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="font-display text-4xl font-black text-slate-200" aria-hidden="true">{numero}</span>
            </div>
            <h3 className="font-display text-xl font-black uppercase tracking-tight text-slate-900">{titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{texto}</p>
            <div className="mt-5">
              <Detalhe tipo={detalhe} />
            </div>
            <a
              href={routeHref(rota)}
              className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-bold uppercase tracking-wider text-un-blue transition-colors hover:text-un-green"
            >
              {acao} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
      </div>
    </div>
  </section>
);
