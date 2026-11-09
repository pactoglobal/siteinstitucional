import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import { FERRAMENTAS_ODS } from '../../data/esgOds';

export const LinkExterno = ({ link }) => (
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

/** SDG Compass e Ambição pelos ODS, lado a lado. Fica dentro de um capítulo. */
export const FerramentasOds = () => (
  <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 xl:grid-cols-2">
    <article className="flex flex-col bg-white p-6 sm:p-8">
      <p className="text-[10px] font-bold uppercase tracking-widest text-un-green">{SDG_COMPASS.tipo}</p>
      <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-slate-900">{SDG_COMPASS.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{SDG_COMPASS.descricao}</p>
      <ol className="mt-6 space-y-2">
        {SDG_COMPASS.passos.map((passo, idx) => (
          <li key={passo} className="flex items-center gap-4 border-t border-slate-100 pt-2">
            <span className="w-6 font-display text-xl font-black leading-none text-un-green" aria-hidden="true">{idx + 1}</span>
            <span className="text-sm font-bold text-slate-800">{passo}</span>
          </li>
        ))}
      </ol>
      <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-8">
        {SDG_COMPASS.links.map((link) => <LinkExterno key={link.url} link={link} />)}
      </div>
    </article>

    <article className="flex flex-col bg-white p-6 sm:p-8">
      <p className="text-[10px] font-bold uppercase tracking-widest text-un-purple">{AMBICAO_PELOS_ODS.tipo}</p>
      <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-slate-900">{AMBICAO_PELOS_ODS.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{AMBICAO_PELOS_ODS.descricao}</p>
      <ul className="mt-6 space-y-2">
        {AMBICAO_PELOS_ODS.beneficios.map((beneficio) => (
          <li key={beneficio} className="flex items-start gap-2 text-sm text-slate-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-un-green" aria-hidden="true" />
            {beneficio}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <LinkExterno link={AMBICAO_PELOS_ODS.link} />
      </div>
    </article>
  </div>
);
