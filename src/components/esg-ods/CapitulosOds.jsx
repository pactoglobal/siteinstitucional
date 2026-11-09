import React from 'react';
import { ArrowRight } from 'lucide-react';
import { routeHref } from '../../hooks/useHashRoute';
import { PILLARS_DATA } from '../../data/constants';
import { MOVIMENTOS } from '../../data/ambicao2030';
import { CAPITULOS_ODS, LINHA_TEMPO_ODS, ODS_LIST, TEXTOS_ODS } from '../../data/esgOds';
import { Capitulo, Citacao, LinhaDoTempo, Prosa } from './Dossie';
import { ExploradorOds } from './ExploradorOds';
import { FerramentasOds, LinkExterno } from './FerramentasOds';
import { iconeOds, logoMovimento } from './navegacao';

const BASE = import.meta.env.BASE_URL;
const capitulo = (indice) => ({ capitulo: CAPITULOS_ODS[indice], indice });

// Nota oficial sobre o ODS 18 (src/data/releases.js) e o movimento que trabalha o tema.
const RELEASE_ODS_18 = 'nota-oficial-ods-18-igualdade-etnico-racial';
const MOVIMENTO_ODS_18 = 'raca-prioridade';

const LinkInterno = ({ href, children }) => (
  <a href={href} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-un-blue underline decoration-un-gold underline-offset-4 hover:text-un-blue-1">
    {children} <ArrowRight className="h-4 w-4" aria-hidden="true" />
  </a>
);

/** Visual da abertura: o mosaico dos 18 ícones (decorativo; o explorador repete com nomes). */
export const MosaicoOds = () => (
  <ul aria-hidden="true" className="grid grid-cols-6 gap-1.5 sm:gap-2">
    {ODS_LIST.map((ods) => (
      <li key={ods.id} className="aspect-square overflow-hidden rounded-md shadow-lg shadow-black/20 sm:rounded-lg">
        <img src={iconeOds(ods.id)} alt="" width={120} height={120} className="h-full w-full object-cover" />
      </li>
    ))}
  </ul>
);

/* 01 · A Agenda 2030 */
export const OdsAgenda = () => {
  const { agenda } = TEXTOS_ODS;
  return (
    <Capitulo {...capitulo(0)} titulo={agenda.titulo}>
      <Prosa paragrafos={agenda.paragrafos} />
      <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
        {agenda.numeros.map((numero) => (
          <div key={numero.rotulo} className="bg-white p-5 md:p-6">
            <dt className="sr-only">{numero.rotulo}</dt>
            <dd>
              <span className="block font-display text-4xl font-black tabular-nums text-un-blue md:text-5xl">{numero.valor}</span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-slate-500">{numero.rotulo}</span>
            </dd>
          </div>
        ))}
      </dl>
    </Capitulo>
  );
};

/* 02 · Como nasceu */
export const OdsHistoria = () => {
  const { historia } = TEXTOS_ODS;
  return (
    <Capitulo {...capitulo(1)} titulo={historia.titulo} texto={historia.texto}>
      <LinhaDoTempo itens={LINHA_TEMPO_ODS} rotulo="Linha do tempo da Agenda 2030" legenda={historia.legendaLinha} />
    </Capitulo>
  );
};

/* 03 · O papel das empresas */
const Coluna = ({ bloco, children }) => (
  <div className="bg-white p-6 sm:p-8">
    <p className="text-[10px] font-bold uppercase tracking-widest text-un-blue-1">{bloco.rotulo}</p>
    <p className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-slate-900">{bloco.titulo}</p>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{bloco.texto}</p>
    <div className="mt-6">{children}</div>
  </div>
);

export const OdsEmpresas = () => {
  const { empresas } = TEXTOS_ODS;
  return (
    <Capitulo {...capitulo(2)} titulo={empresas.titulo}>
      <Citacao {...empresas.citacao} />
      <Prosa paragrafos={empresas.paragrafos} className="mt-12" />
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">
        <Coluna bloco={empresas.base}>
          <ul aria-hidden="true" className="flex gap-2">
            {PILLARS_DATA.map((area) => (
              <li key={area.id} className="relative h-12 w-12 overflow-hidden rounded-lg" style={{ backgroundColor: area.color }}>
                <img src={`${BASE}icons/${area.id}.png`} alt="" width={48} height={68} className="absolute inset-0 h-[140%] w-full scale-75 object-cover object-top brightness-0 invert" />
              </li>
            ))}
          </ul>
        </Coluna>
        <Coluna bloco={empresas.direcao}>
          <ul aria-hidden="true" className="grid max-w-xs grid-cols-9 gap-1">
            {ODS_LIST.map((ods) => (
              <li key={ods.id} className="aspect-square rounded-sm" style={{ backgroundColor: ods.color }} />
            ))}
          </ul>
        </Coluna>
      </div>
      <div className="mt-8">
        <LinkInterno href={routeHref('esg')}>{empresas.acaoEsg}</LinkInterno>
      </div>
    </Capitulo>
  );
};

/* 04 · Os 18 objetivos */
export const OdsObjetivos = () => {
  const { objetivos } = TEXTOS_ODS;
  return (
    <Capitulo {...capitulo(3)} titulo={objetivos.titulo} texto={objetivos.texto}>
      <ExploradorOds />
    </Capitulo>
  );
};

/* 05 · O ODS 18 */
export const Ods18 = () => {
  const { ods18 } = TEXTOS_ODS;
  return (
    <Capitulo {...capitulo(4)} titulo={ods18.titulo}>
      <div className="grid items-start gap-8 md:grid-cols-[auto_minmax(0,1fr)]">
        <img src={iconeOds(18)} alt="Ícone do ODS 18 — Igualdade Étnico-Racial" width={160} height={160} className="h-32 w-32 rounded-2xl md:h-40 md:w-40" />
        <div className="max-w-2xl">
          <p className="font-serif text-2xl leading-snug text-slate-900">{ods18.texto}</p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <LinkInterno href={routeHref('release', RELEASE_ODS_18)}>{ods18.acaoNota}</LinkInterno>
            <LinkInterno href={routeHref('movimento', MOVIMENTO_ODS_18)}>{ods18.acaoMovimento}</LinkInterno>
          </div>
        </div>
      </div>
    </Capitulo>
  );
};

/* 06 · Da agenda à meta */
export const OdsMetas = () => {
  const { metas } = TEXTOS_ODS;
  const { ambicao, forwardFaster } = metas;
  return (
    <Capitulo {...capitulo(5)} titulo={metas.titulo} texto={metas.texto}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 xl:grid-cols-2">
        <div className="flex flex-col bg-white p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-un-blue-1">{ambicao.rotulo}</p>
          <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-slate-900">{ambicao.titulo}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{ambicao.texto(MOVIMENTOS.length)}</p>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {MOVIMENTOS.map((movimento) => (
              <li key={movimento.id}>
                <a
                  href={routeHref('movimento', movimento.id)}
                  className="flex h-14 items-center justify-center rounded-xl border border-slate-200 px-3 transition-colors hover:border-un-blue/40 hover:bg-un-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold"
                >
                  <img src={logoMovimento(movimento.id)} alt={movimento.name} width={140} height={29} loading="lazy" className="max-h-7 w-auto max-w-full object-contain" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <LinkInterno href={routeHref('ambicao')}>{ambicao.acao}</LinkInterno>
          </div>
        </div>
        <div className="flex flex-col bg-white p-6 sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-widest text-un-blue-1">{forwardFaster.rotulo}</p>
          <h3 className="mt-2 font-display text-2xl font-black uppercase tracking-tight text-slate-900">{forwardFaster.titulo}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{forwardFaster.texto}</p>
          <ol className="mt-6 space-y-2">
            {forwardFaster.areas.map((area, indice) => (
              <li key={area} className="flex items-center gap-4 border-t border-slate-100 pt-2">
                <span className="w-6 font-display text-xl font-black text-un-blue-1" aria-hidden="true">{indice + 1}</span>
                <span className="text-sm font-bold text-slate-800">{area}</span>
              </li>
            ))}
          </ol>
          <div className="mt-auto pt-8">
            <LinkExterno link={forwardFaster.link} />
          </div>
        </div>
      </div>
    </Capitulo>
  );
};

/* 07 · Por onde começar */
export const OdsFerramentas = () => {
  const { ferramentas } = TEXTOS_ODS;
  return (
    <Capitulo {...capitulo(6)} titulo={ferramentas.titulo} texto={ferramentas.texto}>
      <FerramentasOds />
    </Capitulo>
  );
};
