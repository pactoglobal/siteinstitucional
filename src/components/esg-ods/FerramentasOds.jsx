import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FERRAMENTAS_ODS, TEXTOS_ODS } from '../../data/esgOds';

const LinkExterno = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 border-b border-un-blue/30 py-1 text-xs font-bold uppercase tracking-wider text-un-blue transition-colors hover:border-un-green hover:text-un-green"
  >
    {link.label}<span className="sr-only"> (abre em nova aba)</span> <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
  </a>
);

const { sdgCompass: SDG_COMPASS, ambicaoPelosOds: AMBICAO_PELOS_ODS } = FERRAMENTAS_ODS;
const { ferramentas } = TEXTOS_ODS;

export const FerramentasOds = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge={ferramentas.selo}
        title={ferramentas.titulo}
        description={ferramentas.descricao}
        className="mb-10 md:mb-12"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-slate-200/90 p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-un-green">{SDG_COMPASS.tipo}</p>
          <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-slate-900">{SDG_COMPASS.titulo}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{SDG_COMPASS.descricao}</p>
          <ol className="mt-6 grid gap-2 sm:grid-cols-5">
            {SDG_COMPASS.passos.map((passo, idx) => (
              <li key={passo} className="flex items-center gap-3 rounded-2xl bg-un-surface p-3 sm:flex-col sm:items-start sm:gap-2">
                <span className="font-display text-2xl font-black leading-none text-un-green" aria-hidden="true">{idx + 1}</span>
                <span className="text-xs font-bold leading-snug text-slate-800">{passo}</span>
              </li>
            ))}
          </ol>
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6">
            {SDG_COMPASS.links.map((link) => <LinkExterno key={link.url} link={link} />)}
          </div>
        </article>

        <article className="flex flex-col rounded-3xl border border-slate-200/90 p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-un-purple">{AMBICAO_PELOS_ODS.tipo}</p>
          <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-slate-900">{AMBICAO_PELOS_ODS.titulo}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{AMBICAO_PELOS_ODS.descricao}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {AMBICAO_PELOS_ODS.beneficios.map((beneficio) => (
              <li key={beneficio} className="flex items-start gap-2 text-sm text-slate-700">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-un-green" aria-hidden="true" />
                {beneficio}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6">
            <LinkExterno link={AMBICAO_PELOS_ODS.link} />
          </div>
        </article>
      </div>
    </div>
  </section>
);
