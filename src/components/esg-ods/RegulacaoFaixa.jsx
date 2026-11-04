import React from 'react';
import { cn } from '../../utils/cn';
import { CONTEXTO_REGULATORIO, TEXTOS_ESG } from '../../data/esgOds';

const { regulacao } = TEXTOS_ESG;

// "Vigente" em verde (confirmação); os que dependem do perfil da empresa
// ("Aplicável a ...") em azul (informação). Preenchimento com texto branco,
// porque verde e azul como texto não têm contraste sobre o azul-marinho.
const corStatus = (status) => (status === 'Vigente' ? 'bg-un-green' : 'bg-un-blue-1');

export const RegulacaoFaixa = () => (
  <section className="bg-un-blue py-16 text-white md:py-24">
    <div className="container mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <span className="mb-5 inline-block rounded-sm border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] md:text-xs">
            {regulacao.selo}
          </span>
          <h2 className="font-display text-3xl font-black uppercase leading-[1.1] tracking-tight md:text-4xl">
            {regulacao.titulo}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-slate-300 md:text-base">{regulacao.texto}</p>
        </div>
      </div>

      <ul className="divide-y divide-white/10 border-y border-white/10 lg:col-span-8">
        {CONTEXTO_REGULATORIO.resolucoes.map((reg) => (
          <li key={reg.nome} className="grid gap-3 py-6 md:grid-cols-[1fr_auto] md:gap-x-8">
            <h3 className="font-display text-lg font-bold leading-snug">{reg.nome}</h3>
            <span className={cn('h-fit w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white md:row-span-2 md:justify-self-end', corStatus(reg.status))}>
              {reg.status}
            </span>
            <p className="text-sm leading-relaxed text-slate-300">{reg.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
