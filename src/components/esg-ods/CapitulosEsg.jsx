import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';
import { routeHref } from '../../hooks/useHashRoute';
import { PILLARS_DATA } from '../../data/constants';
import {
  CAPITULOS_ESG,
  CONTEXTO_REGULATORIO,
  LINHA_TEMPO_ESG,
  ODS_LIST,
  PILARES_ESG,
  TEXTOS_ESG,
} from '../../data/esgOds';
import { Capitulo, Citacao, LinhaDoTempo, Prosa } from './Dossie';
import { COR_PILAR } from './pilares';
import { iconeOds } from './navegacao';

const BASE = import.meta.env.BASE_URL;
const capitulo = (indice) => ({ capitulo: CAPITULOS_ESG[indice], indice });

// Letra ESG de cada área dos Dez Princípios.
const LETRA_DA_AREA = Object.fromEntries(
  PILARES_ESG.flatMap((pilar) => pilar.areas.map((area) => [area, pilar.letra])),
);

const SeloLetra = ({ letra, className }) => (
  <span className={cn('inline-flex h-7 w-7 items-center justify-center rounded-md font-display text-sm font-black text-white', COR_PILAR[letra].preenchimento, className)}>
    {letra}
  </span>
);

/** Visual da abertura: as três letras, cada uma com seu nome. */
export const LetrasEsg = () => (
  <ul aria-hidden="true" className="grid gap-3">
    {PILARES_ESG.map((pilar) => (
      <li key={pilar.letra} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-4">
        <span className={cn('flex h-20 w-20 shrink-0 items-center justify-center rounded-xl font-display text-5xl font-black text-white', COR_PILAR[pilar.letra].preenchimento)}>
          {pilar.letra}
        </span>
        <span>
          <span className="block font-display text-xl font-black uppercase tracking-tight text-white">{pilar.nome}</span>
          <span className="mt-1 block text-sm leading-snug text-slate-300">{pilar.pergunta}</span>
        </span>
      </li>
    ))}
  </ul>
);

/* 01 · O que é ESG */
export const EsgOQueE = () => {
  const { oQueE } = TEXTOS_ESG;
  return (
    <Capitulo {...capitulo(0)} titulo={oQueE.titulo}>
      <Prosa paragrafos={oQueE.paragrafos} />
      <Citacao {...oQueE.citacao} className="my-14" />
      <dl className="grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
        {oQueE.naoE.map((item) => (
          <div key={item.titulo}>
            <dt className="font-display text-lg font-black uppercase tracking-tight text-un-blue">{item.titulo}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-slate-600">{item.texto}</dd>
          </div>
        ))}
      </dl>
    </Capitulo>
  );
};

/* 02 · De onde veio */
export const EsgOrigem = () => {
  const { origem } = TEXTOS_ESG;
  return (
    <Capitulo {...capitulo(1)} titulo={origem.titulo}>
      <div className="grid gap-10 md:grid-cols-12">
        <Prosa paragrafos={origem.paragrafos} className="md:col-span-8" />
        <figure className="max-w-xs md:col-span-4">
          <img
            src={`${BASE}${origem.foto.arquivo}`}
            alt="Kofi Annan"
            width={320}
            height={400}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover object-top"
          />
          <figcaption className="mt-3 text-xs leading-relaxed text-slate-500">{origem.foto.legenda}</figcaption>
        </figure>
      </div>
      <div className="mt-14">
        <LinhaDoTempo itens={LINHA_TEMPO_ESG} rotulo="Linha do tempo do ESG" legenda={origem.legendaLinha} />
      </div>
    </Capitulo>
  );
};

/* 03 · Duas perguntas */
const Pergunta = ({ pergunta, children }) => (
  <div className="grid gap-4 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-8">
    <span className="font-display text-6xl font-black leading-none text-un-blue-3 md:text-7xl" aria-hidden="true">{pergunta.numero}</span>
    <div>
      <p className="font-serif text-2xl leading-snug text-slate-900 md:text-3xl">{pergunta.texto}</p>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{pergunta.apoio}</p>
      <div className="mt-8">{children}</div>
    </div>
  </div>
);

export const EsgDuasPerguntas = () => {
  const { duasPerguntas: textos } = TEXTOS_ESG;
  return (
    <Capitulo {...capitulo(2)} titulo={textos.titulo} texto={textos.texto}>
      <div className="space-y-16">
        <Pergunta pergunta={textos.pergunta1}>
          <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2">
            {PILLARS_DATA.map((area) => (
              <li key={area.id} className="border-t border-slate-200 pt-5">
                <div className="flex items-center gap-3">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg" style={{ backgroundColor: area.color }}>
                    {/* Mesmo tratamento da home: ícone em branco, recortado para esconder o rótulo do PNG. */}
                    <img src={`${BASE}icons/${area.id}.png`} alt="" width={40} height={56} className="absolute inset-0 h-[140%] w-full scale-75 object-cover object-top brightness-0 invert" />
                  </span>
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-slate-900">{area.title}</h3>
                  <SeloLetra letra={LETRA_DA_AREA[area.id]} className="ml-auto" />
                  <span className="sr-only">{textos.rotuloLetra} {LETRA_DA_AREA[area.id]}</span>
                </div>
                <ol className="mt-4 space-y-2.5">
                  {area.principles.map((principio) => (
                    <li key={principio.num} className="flex gap-3 text-sm leading-relaxed text-slate-700">
                      <span className="w-6 shrink-0 font-display font-bold tabular-nums text-un-blue-1">{principio.num}</span>
                      {principio.text}
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ul>
          <Citacao texto={textos.regra.texto} autor={textos.regra.fonte} className="mt-12" />
        </Pergunta>

        <Pergunta pergunta={textos.pergunta2}>
          <ul aria-hidden="true" className="grid max-w-2xl grid-cols-9 gap-1.5">
            {ODS_LIST.map((ods) => (
              <li key={ods.id} className="aspect-square overflow-hidden rounded-md">
                <img src={iconeOds(ods.id)} alt="" width={64} height={64} loading="lazy" className="h-full w-full object-cover" />
              </li>
            ))}
          </ul>
          <a href={routeHref('ods')} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-un-blue underline decoration-un-gold underline-offset-4 hover:text-un-blue-1">
            {textos.pergunta2.acao} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Pergunta>
      </div>
    </Capitulo>
  );
};

/* 04 · As três letras */
export const EsgTresLetras = () => {
  const { tresLetras: textos } = TEXTOS_ESG;
  return (
    <Capitulo {...capitulo(3)} titulo={textos.titulo} texto={textos.texto}>
      <ol className="divide-y divide-slate-200 border-y border-slate-200">
        {PILARES_ESG.map((pilar) => (
          <li key={pilar.letra} className="grid gap-6 py-10 xl:grid-cols-12 xl:gap-10">
            <div className="flex items-start gap-5 xl:col-span-5">
              <span className={cn('flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl font-display text-5xl font-black text-white', COR_PILAR[pilar.letra].preenchimento)} aria-hidden="true">
                {pilar.letra}
              </span>
              <div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight text-slate-900">{pilar.nome}</h3>
                <p className="mt-2 font-serif text-lg italic leading-snug text-slate-700">{pilar.pergunta}</p>
              </div>
            </div>
            <div className="xl:col-span-7">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{textos.rotuloTemas}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {pilar.temas.map((tema) => (
                  <li key={tema} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700">{tema}</li>
                ))}
              </ul>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">{textos.rotuloMedida}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{pilar.medida}</p>
            </div>
          </li>
        ))}
      </ol>
    </Capitulo>
  );
};

/* 05 · Por que importa */
// "Vigente" em verde (confirmação); os que dependem do perfil da empresa em azul (informação).
const corStatus = (status) => (status === 'Vigente' ? 'bg-un-green' : 'bg-un-blue-1');

export const EsgPorQueImporta = () => {
  const { porQueImporta: textos } = TEXTOS_ESG;
  return (
    <Capitulo {...capitulo(4)} titulo={textos.titulo} texto={textos.texto}>
      <div className="grid gap-12 xl:grid-cols-12">
        <div className="xl:col-span-4">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{textos.mercadoTitulo}</h3>
          <ul className="mt-4 space-y-6">
            {textos.mercado.map((item) => (
              <li key={item.titulo} className="border-t border-slate-200 pt-4">
                <p className="font-display text-3xl font-black text-un-blue">{item.ano}</p>
                <p className="mt-1 font-bold text-slate-900">{item.titulo}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.texto}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:col-span-8">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{textos.regulacaoTitulo}</h3>
          <ul className="mt-4 divide-y divide-slate-200 border-y border-slate-200">
            {CONTEXTO_REGULATORIO.resolucoes.map((reg) => (
              <li key={reg.nome} className="grid gap-2 py-5 md:grid-cols-[1fr_auto] md:gap-x-6">
                <p className="font-bold leading-snug text-slate-900">{reg.nome}</p>
                <span className={cn('h-fit w-fit rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white md:row-span-2 md:justify-self-end', corStatus(reg.status))}>
                  {reg.status}
                </span>
                <p className="text-sm leading-relaxed text-slate-600">{reg.descricao}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Capitulo>
  );
};

/* 06 · Como a Rede Brasil apoia */
export const EsgRedeBrasil = () => {
  const { redeBrasil: textos } = TEXTOS_ESG;
  return (
    <Capitulo {...capitulo(5)} titulo={textos.titulo} texto={textos.texto}>
      <ul className="grid border-t border-slate-200 md:grid-cols-2">
        {textos.frentes.map((frente, indice) => (
          <li key={frente.id} className={cn('border-b border-slate-200', indice % 2 === 0 && 'md:border-r')}>
            <a href={routeHref(frente.rota)} className="group flex h-full flex-col p-6 transition-colors hover:bg-un-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-un-gold md:p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-un-blue-1">{frente.verbo}</span>
              <span className="mt-2 font-display text-xl font-black uppercase tracking-tight text-slate-900">{frente.titulo}</span>
              <span className="mt-2 text-sm leading-relaxed text-slate-600">{frente.texto}</span>
              <ArrowRight className="mt-5 h-5 w-5 text-un-blue transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Capitulo>
  );
};

/* 07 · Dúvidas */
export const EsgDuvidas = () => {
  const { duvidas: textos } = TEXTOS_ESG;
  return (
    <Capitulo {...capitulo(6)} titulo={textos.titulo}>
      <div className="max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
        {textos.itens.map((item) => (
          <details key={item.id} className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-5 text-left font-display text-lg font-bold text-slate-900 transition-colors hover:text-un-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold md:text-xl">
              {item.pergunta}
              <ChevronDown className="h-5 w-5 shrink-0 text-un-blue transition-transform duration-300 group-open:rotate-180 motion-reduce:transition-none" aria-hidden="true" />
            </summary>
            {item.html ? (
              <p className="pb-6 pr-10 text-base leading-relaxed text-slate-600" dangerouslySetInnerHTML={{ __html: item.resposta }} />
            ) : (
              <p className="pb-6 pr-10 text-base leading-relaxed text-slate-600">{item.resposta}</p>
            )}
          </details>
        ))}
      </div>
    </Capitulo>
  );
};
