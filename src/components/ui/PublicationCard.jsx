import React from 'react';
import { ArrowDownToLine, FileText, Layers } from 'lucide-react';
import { corDoTema } from '../../data/publicacoes';
import { formatMonthYear } from '../../utils/date';
import { cn } from '../../utils/cn';

const Meta = ({ publicacao, tone = 'light' }) => (
  <div
    className={cn(
      'flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-widest',
      tone === 'dark' ? 'text-white/60' : 'text-gray-400',
    )}
  >
    <span className="inline-flex items-center gap-1.5">
      <FileText className="w-3 h-3" />
      {publicacao.type}
    </span>
    <span className="inline-flex items-center gap-1.5">
      <Layers className="w-3 h-3" />
      {publicacao.pages} páginas
    </span>
    <span>{publicacao.language}</span>
    <time dateTime={publicacao.date.slice(0, 7)}>{formatMonthYear(publicacao.date)}</time>
  </div>
);

/** Destaque horizontal: capa à esquerda, resumo à direita. */
const FeaturedPublication = ({ publicacao, className }) => {
  const cor = corDoTema(publicacao.themes[0]);

  return (
    <a
      href={publicacao.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group relative flex gap-6 md:gap-8 overflow-hidden rounded-3xl bg-un-blue p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2',
        className,
      )}
    >
      <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: cor }} />

      <div className="relative z-10 shrink-0 w-28 md:w-36 overflow-hidden rounded-xl shadow-2xl">
        <img
          src={publicacao.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 flex min-w-0 flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {publicacao.themes.map((tema) => (
            <span
              key={tema}
              className="rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: corDoTema(tema) }}
            >
              {tema}
            </span>
          ))}
        </div>

        <h3 className="font-display font-black text-white text-lg md:text-2xl leading-snug tracking-tight mb-3">
          {publicacao.title}
        </h3>

        <p className="text-white/70 text-sm font-light leading-relaxed line-clamp-3 mb-5">
          {publicacao.summary}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
          <Meta publicacao={publicacao} tone="dark" />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white transition-all duration-300 group-hover:bg-white group-hover:text-un-blue">
            <ArrowDownToLine className="w-3.5 h-3.5" />
            Documento completo
          </span>
        </div>
      </div>
    </a>
  );
};

/** Padrão: capa 3/4 em cima, dados embaixo — leitura de estante. */
const StandardPublication = ({ publicacao, className }) => {
  const cor = corDoTema(publicacao.themes[0]);

  return (
    <a
      href={publicacao.fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_60px_-20px_rgba(30,50,80,0.25)] focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2',
        className,
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={publicacao.cover}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {publicacao.themes.slice(0, 2).map((tema) => (
            <span
              key={tema}
              className="rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-sm"
              style={{ backgroundColor: corDoTema(tema) }}
            >
              {tema}
            </span>
          ))}
        </div>

        <span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-widest text-white/80">
          {publicacao.type} · {publicacao.pages} p.
        </span>

        {/* Painel de resumo que sobe no hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-un-blue/95 backdrop-blur-sm p-5 transition-transform duration-400 group-hover:translate-y-0">
          <p className="text-white/85 text-xs font-light leading-relaxed line-clamp-5">
            {publicacao.summary}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display font-black text-gray-900 text-sm leading-snug tracking-tight mb-4 flex-1">
          {publicacao.title}
        </h3>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
          <time
            dateTime={publicacao.date.slice(0, 7)}
            className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
          >
            {formatMonthYear(publicacao.date)}
          </time>
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ color: cor }}
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            Baixar
          </span>
        </div>
      </div>
    </a>
  );
};

/**
 * @param {{ publicacao: object, variant?: 'featured'|'default', className?: string }} props
 */
export const PublicationCard = ({ publicacao, variant = 'default', className = '' }) =>
  variant === 'featured' ? (
    <FeaturedPublication publicacao={publicacao} className={className} />
  ) : (
    <StandardPublication publicacao={publicacao} className={className} />
  );
