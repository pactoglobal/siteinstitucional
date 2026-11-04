import React from 'react';
import { ChevronDown } from 'lucide-react';
import { TEXTOS_ESG } from '../../data/esgOds';

// Respostas com `html: true` trazem <strong>/<em>/<a> — conteúdo estático do
// próprio repositório (esgOds.js), por isso o innerHTML.
const { perguntas } = TEXTOS_ESG;

export const PerguntasEsgOds = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-4">
        <span className="mb-5 inline-block rounded-sm border border-un-blue/10 bg-un-blue/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-un-blue md:text-xs">
          {perguntas.selo}
        </span>
        <h2 className="font-display text-3xl font-black uppercase leading-[1.1] tracking-tight text-slate-900 md:text-4xl">
          {perguntas.titulo}
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
          {perguntas.texto}
        </p>
      </div>

      <div className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-8">
        {perguntas.itens.map((item) => (
          <details key={item.id} className="group py-1 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-left font-display text-lg font-bold text-slate-900 transition-colors hover:text-un-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold md:text-xl">
              {item.pergunta}
              <ChevronDown className="h-5 w-5 shrink-0 text-un-blue transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            {item.html ? (
              <div className="pb-6 pr-10 text-sm leading-relaxed text-slate-600 md:text-base" dangerouslySetInnerHTML={{ __html: item.resposta }} />
            ) : (
              <p className="pb-6 pr-10 text-sm leading-relaxed text-slate-600 md:text-base">{item.resposta}</p>
            )}
          </details>
        ))}
      </div>
    </div>
  </section>
);
