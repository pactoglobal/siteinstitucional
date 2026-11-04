import React from 'react';
import { cn } from '../../utils/cn';
import { SectionHeader } from '../ui/SectionHeader';
import { FotoFundo } from '../adesao/FotoFundo';
import { ESG_DEFINICAO_DETALHADA } from '../../data/esgOds';
import { PILARES_VISUAL, tituloSubtema } from './pilares';

const ICONES_BASE = `${import.meta.env.BASE_URL}icons/`;

// O pilar E abre o bento em destaque (duas linhas); S e G ficam empilhados.
const GRADE = {
  E: 'lg:col-span-7 lg:row-span-2 lg:min-h-[36rem]',
  S: 'lg:col-span-5',
  G: 'lg:col-span-5',
};

const CardPilar = ({ pilar }) => {
  const visual = PILARES_VISUAL[pilar.letra];
  return (
    <article
      id={visual.id}
      aria-labelledby={`${visual.id}-titulo`}
      className={cn(
        'group relative isolate flex min-h-[26rem] scroll-mt-24 flex-col justify-end overflow-hidden rounded-3xl p-6 text-white sm:p-8',
        GRADE[pilar.letra],
      )}
    >
      <FotoFundo imagem={visual.foto} variante="denso" />

      <div className="flex items-center gap-4">
        <span className={cn('flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl font-display text-3xl font-black', visual.preenchimento)} aria-hidden="true">
          {pilar.letra}
        </span>
        <h3 id={`${visual.id}-titulo`} className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
          {visual.nome}
        </h3>
      </div>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Temas do pilar ${visual.nome}`}>
        {pilar.subtemas.map((subtema) => (
          <li key={subtema} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            {tituloSubtema(subtema)}
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm leading-relaxed text-slate-200">
        <span className="font-bold text-white">Como se mede: </span>
        {pilar.metricas_chave}
      </p>

      <div className="mt-6 border-t border-white/15 pt-5">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-un-blue-3">Dez Princípios relacionados</p>
        <ul className="flex flex-wrap gap-4">
          {visual.principios.map((principio) => (
            <li key={principio.nome} className="flex items-center gap-3">
              {/* Mesmo tratamento da home (PillaresSection): ícone em branco
                  sobre a cor do pilar, recortado para esconder o rótulo do PNG. */}
              <span className={cn('relative h-10 w-10 shrink-0 overflow-hidden rounded-xl', visual.preenchimento)}>
                <img src={`${ICONES_BASE}${principio.icone}.png`} alt="" width={40} height={56} className="absolute inset-0 h-[140%] w-full scale-75 object-cover object-top brightness-0 invert" />
              </span>
              <span className="text-sm leading-tight">
                <span className="block font-bold">{principio.nome}</span>
                <span className="text-xs text-slate-300">{principio.faixa}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const PilaresBento = () => (
  <section id="pilares" className="scroll-mt-24 bg-white py-16 md:py-24">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Os três pilares"
        title="O que cada letra cobre"
        description="Os temas e as métricas que investidores, reguladores e a sociedade acompanham em cada pilar, e as áreas dos Dez Princípios ligadas a eles."
        className="mb-10 md:mb-12"
      />
      <div className="grid gap-5 lg:grid-cols-12">
        {ESG_DEFINICAO_DETALHADA.pilares.map((pilar) => (
          <CardPilar key={pilar.letra} pilar={pilar} />
        ))}
      </div>
    </div>
  </section>
);
