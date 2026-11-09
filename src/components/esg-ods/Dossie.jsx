import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { OdsFaixa } from '../ui/OdsFaixa';
import { rolarPara } from './navegacao';

/**
 * Peças das páginas ESG e ODS, que são dossiês de leitura: abertura clara,
 * índice de capítulos fixo ao lado do texto e capítulos numerados.
 */

const numeroCapitulo = (indice) => String(indice + 1).padStart(2, '0');

/**
 * Abertura do dossiê, em azul-marinho: o header do site é transparente no topo,
 * com logo branco. `visual` ocupa a coluna da direita no desktop.
 */
export const DossieAbertura = ({ textos, capitulos, visual }) => (
  <header className="relative overflow-hidden bg-un-blue text-white">
    <div className="container mx-auto grid max-w-7xl items-end gap-12 px-4 pb-14 pt-32 md:px-8 md:pb-20 md:pt-40 lg:grid-cols-12 lg:px-12">
      <div className="lg:col-span-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-un-blue-3 md:text-xs">{textos.selo}</p>
        <h1 className="mt-5 font-display text-6xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-7xl md:text-8xl">
          {textos.titulo}
          <span className="mt-4 block text-lg font-bold normal-case tracking-normal text-un-blue-3 sm:text-2xl">{textos.subtitulo}</span>
        </h1>
        <p className="mt-8 max-w-2xl border-l-4 border-un-blue-2 pl-5 font-serif text-2xl italic leading-snug text-white md:text-3xl">
          {textos.tese}
        </p>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-slate-200 md:text-lg">{textos.texto}</p>
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-un-blue-3">
          {capitulos.length} capítulos
        </p>
      </div>
      <div className="lg:col-span-5">{visual}</div>
    </div>
    <OdsFaixa />
  </header>
);

// Fração da altura da tela que conta como "linha de leitura".
const LINHA_DE_LEITURA = 0.3;

/**
 * Marca o último capítulo cujo topo já passou da linha de leitura, pela
 * posição de rolagem. São sete leituras de posição por evento, sem escrita no
 * DOM, e o React ignora o setState quando o capítulo não muda.
 */
const useCapituloAtivo = (ids) => {
  const [ativo, setAtivo] = useState(ids[0]);
  useEffect(() => {
    const medir = () => {
      const linha = window.innerHeight * LINHA_DE_LEITURA;
      const passados = ids.filter((id) => {
        const alvo = document.getElementById(id);
        return alvo && alvo.getBoundingClientRect().top <= linha;
      });
      setAtivo(passados.at(-1) ?? ids[0]);
    };
    medir();
    window.addEventListener('scroll', medir, { passive: true });
    window.addEventListener('resize', medir);
    return () => {
      window.removeEventListener('scroll', medir);
      window.removeEventListener('resize', medir);
    };
  }, [ids]);
  return ativo;
};

/** Corpo do dossiê: índice de capítulos + os capítulos (children). */
export const Dossie = ({ capitulos, children }) => {
  const [ids] = useState(() => capitulos.map((c) => c.id));
  const ativo = useCapituloAtivo(ids);

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-14 lg:px-12">
        <nav aria-label="Capítulos" className="hidden lg:block">
          <div className="sticky top-28 py-16">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Neste dossiê</p>
            <ol className="space-y-1 border-l border-slate-200">
              {capitulos.map((capitulo, indice) => {
                const atual = capitulo.id === ativo;
                return (
                  <li key={capitulo.id}>
                    <button
                      type="button"
                      onClick={() => rolarPara(capitulo.id)}
                      aria-current={atual ? 'true' : undefined}
                      className={cn(
                        '-ml-px flex w-full gap-3 border-l-2 py-1.5 pl-4 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold',
                        atual ? 'border-un-blue font-bold text-un-blue' : 'border-transparent text-slate-500 hover:text-un-blue',
                      )}
                    >
                      <span className="font-display tabular-nums">{numeroCapitulo(indice)}</span>
                      <span>{capitulo.titulo}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </nav>

        <nav aria-label="Capítulos" className="-mx-4 overflow-x-auto border-b border-slate-200 px-4 py-4 lg:hidden">
          <ol className="flex gap-2">
            {capitulos.map((capitulo, indice) => (
              <li key={capitulo.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => rolarPara(capitulo.id)}
                  className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold"
                >
                  <span className="mr-1.5 font-display text-un-blue-1">{numeroCapitulo(indice)}</span>
                  {capitulo.titulo}
                </button>
              </li>
            ))}
          </ol>
        </nav>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
};

/** Um capítulo. `indice` vem da posição em CAPITULOS_*; `titulo` é o título longo. */
export const Capitulo = ({ capitulo, indice, titulo, texto, children }) => (
  <section id={capitulo.id} aria-labelledby={`${capitulo.id}-titulo`} className="scroll-mt-28 border-t border-slate-200 py-16 first:border-t-0 md:py-24">
    <header className="max-w-3xl">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-un-blue-1 md:text-sm">
        {numeroCapitulo(indice)} · {capitulo.titulo}
      </p>
      <h2 id={`${capitulo.id}-titulo`} className="mt-3 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-un-blue md:text-5xl">
        {titulo}
      </h2>
      {texto && <p className="mt-6 text-lg leading-relaxed text-slate-700">{texto}</p>}
    </header>
    {children && <div className="mt-10 md:mt-12">{children}</div>}
  </section>
);

/** Parágrafos com <strong>/<em>/<a> vindos de esgOds.js (conteúdo do repositório). */
export const Prosa = ({ paragrafos, className }) => (
  <div className={cn('max-w-3xl space-y-5 text-lg leading-relaxed text-slate-700 [&_strong]:font-bold [&_strong]:text-slate-900', className)}>
    {paragrafos.map((html) => (
      <p key={html.slice(0, 40)} dangerouslySetInnerHTML={{ __html: html }} />
    ))}
  </div>
);

/** Citação em destaque. */
export const Citacao = ({ texto, autor, fonte, className }) => (
  <figure className={cn('max-w-3xl border-l-4 border-un-blue py-1 pl-6 md:pl-10', className)}>
    <blockquote className="font-serif text-2xl italic leading-snug text-un-blue md:text-[2rem]">
      “{texto}”
    </blockquote>
    <figcaption className="mt-5 text-sm text-slate-600">
      <span className="font-bold text-slate-900">{autor}</span>
      {fonte && <span> · {fonte}</span>}
    </figcaption>
  </figure>
);

const BotaoLinha = ({ rotulo, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={rotulo}
    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-un-blue transition-colors hover:border-un-blue hover:bg-un-blue hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold"
  >
    {children}
  </button>
);

/**
 * Linha do tempo horizontal, rolável (toque, trackpad, teclado ou as setas).
 * Os marcos com `pacto: true` ganham o ponto cheio e a etiqueta, para o
 * Pacto Global aparecer na história.
 */
export const LinhaDoTempo = ({ itens, rotulo, legenda }) => {
  const trilhoRef = useRef(null);
  const rolar = (sentido) => {
    const trilho = trilhoRef.current;
    if (!trilho) return;
    const reduzir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    trilho.scrollBy({ left: sentido * trilho.clientWidth * 0.8, behavior: reduzir ? 'auto' : 'smooth' });
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <span className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-un-blue ring-4 ring-un-blue/15" aria-hidden="true" />
          {legenda}
        </span>
        <span className="flex gap-2">
          <BotaoLinha rotulo="Marcos anteriores" onClick={() => rolar(-1)}><ChevronLeft className="h-4 w-4" aria-hidden="true" /></BotaoLinha>
          <BotaoLinha rotulo="Próximos marcos" onClick={() => rolar(1)}><ChevronRight className="h-4 w-4" aria-hidden="true" /></BotaoLinha>
        </span>
      </div>
      <div className="relative">
        <ol
          ref={trilhoRef}
          tabIndex={0}
          aria-label={rotulo}
          className="flex snap-x overflow-x-auto pb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold [scrollbar-width:thin]"
        >
          {itens.map((item) => (
            <li key={item.ano} className="relative w-60 shrink-0 snap-start pr-8 md:w-64">
              <div className="flex items-center" aria-hidden="true">
                <span
                  className={cn(
                    'shrink-0 rounded-full',
                    item.pacto ? 'h-4 w-4 bg-un-blue ring-4 ring-un-blue/15' : 'h-3 w-3 border-2 border-un-blue-1 bg-white',
                  )}
                />
                <span className="h-px flex-1 bg-slate-300" />
              </div>
              <p className="mt-5 font-display text-4xl font-black tabular-nums text-un-blue">{item.ano}</p>
              <p className="mt-2 font-bold leading-snug text-slate-900">{item.titulo}</p>
              {item.pacto && (
                <span className="mt-2 inline-block rounded-full bg-un-blue/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-un-blue">
                  Pacto Global
                </span>
              )}
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.texto}</p>
            </li>
          ))}
        </ol>
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
      </div>
    </div>
  );
};

