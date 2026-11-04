import React, { useRef, useState } from 'react';
import { ArrowRight, Check, Target } from 'lucide-react';
import { cn } from '../../utils/cn';
import { SectionHeader } from '../ui/SectionHeader';
import { routeHref } from '../../hooks/useHashRoute';
import { ODS_LIST, METAS_AMBICAO_ODS } from '../../data/esgOds';
import { MOVIMENTOS } from '../../data/ambicao2030';
import { PLATAFORMAS } from '../../data/plataformas';
import { iconeOds, logoMovimento } from './navegacao';

// Abre no ODS 18: é o diferencial brasileiro e dá um ponto de partida entre
// 18 opções.
const ODS_INICIAL = 18;
const PAINEL_ID = 'painel-ods';
const BREAKPOINT_LG = 1024;

// Tudo derivado dos campos `ods` de movimentos e plataformas. A plataforma
// que cobre os 17 ODS (comunicar e engajar) vai para o fim da lista, depois
// das temáticas.
const atuacaoNoOds = (numero) => ({
  movimentos: MOVIMENTOS.filter((m) => m.ods.includes(numero)),
  plataformas: PLATAFORMAS.filter((p) => p.ods.includes(numero)).sort((a, b) => a.ods.length - b.ods.length),
  meta: METAS_AMBICAO_ODS.find((m) => m.ods === numero),
});

const Painel = ({ ods }) => {
  const { movimentos, plataformas, meta } = atuacaoNoOds(ods.id);
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl">
      <div className="h-2" style={{ backgroundColor: ods.color }} aria-hidden="true" />
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <img src={iconeOds(ods.id)} alt="" width={72} height={72} className="h-16 w-16 shrink-0 rounded-xl sm:h-[72px] sm:w-[72px]" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">ODS {ods.id}</p>
            <h3 className="font-display text-xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-2xl">{ods.name}</h3>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Movimentos da Ambição 2030</h4>
          {movimentos.length > 0 ? (
            <ul className="grid gap-2">
              {movimentos.map((m) => (
                <li key={m.id}>
                  <a
                    href={routeHref('movimento', m.id)}
                    className="group flex h-full items-center gap-3 rounded-2xl border border-slate-200 p-3 transition-colors hover:border-un-purple/40 hover:bg-un-purple/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold"
                  >
                    <span className="min-w-0 flex-1">
                      <img src={logoMovimento(m.id)} alt="" width={140} height={29} loading="lazy" className="mb-1.5 max-h-6 w-auto max-w-full object-contain" />
                      <span className="block text-xs font-bold leading-tight text-slate-700">{m.name}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-un-purple" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-slate-600">
              Nenhum movimento tem este ODS como foco principal. Ele é trabalhado nas Plataformas de Ação abaixo.
            </p>
          )}
        </div>

        <div className="mt-8">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">Plataformas de Ação</h4>
          <ul className="flex flex-wrap gap-2">
            {plataformas.map((p) => (
              <li key={p.slug}>
                <a
                  href={routeHref('plataforma', p.slug)}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-un-blue/40 hover:bg-un-blue/5 hover:text-un-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold"
                >
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: p.color }} aria-hidden="true" />
                  {p.shortName}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {meta && (
          <div className="mt-8 rounded-2xl bg-un-surface p-5">
            <h4 className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-un-green">
              <Target className="h-4 w-4" aria-hidden="true" /> Exemplo de meta · Ambição pelos ODS
            </h4>
            <p className="text-sm leading-relaxed text-slate-700">{meta.meta}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const ExploradorOds = () => {
  const [selecionado, setSelecionado] = useState(ODS_INICIAL);
  const abasRef = useRef([]);
  const painelRef = useRef(null);
  const ods = ODS_LIST.find((o) => o.id === selecionado);

  const selecionar = (numero, { focar = false } = {}) => {
    setSelecionado(numero);
    if (focar) abasRef.current[numero - 1]?.focus();
  };

  // No celular o painel fica abaixo da grade: depois do toque, traz o painel
  // para a tela se ele estiver fora dela.
  const aoClicar = (numero) => {
    selecionar(numero);
    if (window.innerWidth >= BREAKPOINT_LG) return;
    requestAnimationFrame(() => {
      const painel = painelRef.current;
      if (painel && painel.getBoundingClientRect().top > window.innerHeight * 0.6) {
        const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        painel.scrollIntoView({ behavior: reduzir ? 'auto' : 'smooth', block: 'start' });
      }
    });
  };

  // Padrão de abas (WAI-ARIA): setas percorrem, Home/End vão às pontas.
  const aoTeclar = (event, numero) => {
    const total = ODS_LIST.length;
    const destinos = {
      ArrowRight: (numero % total) + 1,
      ArrowDown: (numero % total) + 1,
      ArrowLeft: ((numero - 2 + total) % total) + 1,
      ArrowUp: ((numero - 2 + total) % total) + 1,
      Home: 1,
      End: total,
    };
    const destino = destinos[event.key];
    if (!destino) return;
    event.preventDefault();
    selecionar(destino, { focar: true });
  };

  return (
    <section id="explorador" className="scroll-mt-24 bg-white py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Explorador de ODS"
          title="Escolha um objetivo"
          description="Para cada ODS, os movimentos da Ambição 2030 e as Plataformas de Ação em que a Rede Brasil trabalha o tema com as empresas participantes."
          className="mb-10 md:mb-12"
        />

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div role="tablist" aria-label="Objetivos de Desenvolvimento Sustentável" className="grid grid-cols-6 gap-1.5 sm:gap-2.5 lg:col-span-7">
            {ODS_LIST.map((item) => {
              const ativo = item.id === selecionado;
              return (
                <button
                  key={item.id}
                  ref={(el) => { abasRef.current[item.id - 1] = el; }}
                  type="button"
                  role="tab"
                  id={`aba-ods-${item.id}`}
                  aria-selected={ativo}
                  aria-controls={PAINEL_ID}
                  aria-label={`ODS ${item.id} — ${item.name}`}
                  tabIndex={ativo ? 0 : -1}
                  onClick={() => aoClicar(item.id)}
                  onKeyDown={(event) => aoTeclar(event, item.id)}
                  className={cn(
                    'relative aspect-square overflow-hidden rounded-lg transition-all sm:rounded-xl duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-un-blue focus-visible:ring-offset-2 motion-reduce:transition-none',
                    ativo
                      ? 'scale-[1.04] shadow-xl ring-[3px] ring-un-gold ring-offset-2 sm:ring-4'
                      : 'opacity-80 shadow-sm hover:-translate-y-0.5 hover:opacity-100 hover:shadow-lg',
                  )}
                >
                  <img src={iconeOds(item.id)} alt="" width={160} height={160} loading="lazy" className="h-full w-full object-cover" />
                  {ativo && (
                    <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-un-gold text-un-blue shadow sm:right-1.5 sm:top-1.5 sm:h-6 sm:w-6" aria-hidden="true">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={3} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            ref={painelRef}
            id={PAINEL_ID}
            role="tabpanel"
            aria-labelledby={`aba-ods-${selecionado}`}
            className="scroll-mt-24 lg:sticky lg:top-28 lg:col-span-5"
          >
            <Painel ods={ods} />
          </div>
        </div>
      </div>
    </section>
  );
};
