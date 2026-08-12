import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { routeHref } from '../../hooks/useHashRoute';
import { corDaCategoria } from '../../data/noticias';
import { formatDateLong, dateParts } from '../../utils/date';

// Âncora real (`#/noticia/<slug>`) em vez de <div onClick>: navegável por
// teclado, anunciada por leitor de tela e abrível em nova aba.

const CategoryTag = ({ category, tone = 'light' }) => (
  <span
    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em]"
    style={{ color: tone === 'dark' ? '#fff' : corDaCategoria(category) }}
  >
    <span
      className="w-1.5 h-1.5 rounded-full"
      style={{ backgroundColor: tone === 'dark' ? '#fff' : corDaCategoria(category) }}
    />
    {category}
  </span>
);

const ArrowBadge = ({ tone = 'light' }) => (
  <span
    className={
      tone === 'dark'
        ? 'shrink-0 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-un-blue group-hover:rotate-45'
        : 'shrink-0 w-10 h-10 rounded-full bg-un-blue/5 flex items-center justify-center text-un-blue transition-all duration-300 group-hover:bg-un-blue group-hover:text-white group-hover:rotate-45'
    }
  >
    <ArrowUpRight className="w-4 h-4" />
  </span>
);

/** Destaque: imagem sangrada, texto sobreposto. Ocupa o topo do bento. */
const FeaturedCard = ({ noticia, className }) => (
  <a
    href={routeHref('noticia', noticia.slug)}
    className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl min-h-[380px] md:min-h-[460px] focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 ${className}`}
  >
    <img
      src={noticia.image}
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
    <div
      className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
      style={{ backgroundColor: corDaCategoria(noticia.category) }}
    />

    <div className="relative z-10 p-7 md:p-10">
      <div className="flex items-center gap-4 mb-5">
        <CategoryTag category={noticia.category} tone="dark" />
        <time
          dateTime={noticia.date}
          className="text-white/50 text-[10px] font-bold uppercase tracking-widest"
        >
          {formatDateLong(noticia.date)}
        </time>
      </div>

      <h3 className="font-display font-black text-white text-2xl md:text-4xl leading-[1.1] tracking-tight mb-4 max-w-2xl">
        {noticia.title}
      </h3>

      <div className="flex items-end justify-between gap-6">
        <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-xl line-clamp-2">
          {noticia.excerpt}
        </p>
        <ArrowBadge tone="dark" />
      </div>
    </div>
  </a>
);

/** Padrão: imagem 16:9 + corpo em superfície clara. */
const StandardCard = ({ noticia, className }) => (
  <a
    href={routeHref('noticia', noticia.slug)}
    className={`group flex flex-col overflow-hidden rounded-3xl bg-white border border-gray-100 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(30,50,80,0.25)] focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 ${className}`}
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
      <img
        src={noticia.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
        style={{ backgroundColor: corDaCategoria(noticia.category) }}
      />
    </div>

    <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="flex items-center justify-between gap-3 mb-4">
        <CategoryTag category={noticia.category} />
        <time
          dateTime={noticia.date}
          className="text-[10px] font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap"
        >
          {formatDateLong(noticia.date)}
        </time>
      </div>

      <h3 className="font-display font-black text-gray-900 text-lg md:text-xl leading-snug tracking-tight mb-3 transition-colors group-hover:text-un-blue">
        {noticia.title}
      </h3>

      <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-3 mb-6">
        {noticia.excerpt}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {noticia.readingTime} min de leitura
        </span>
        <ArrowBadge />
      </div>
    </div>
  </a>
);

/** Compacto: bloco de data + título. Para colunas laterais e relacionadas. */
const ListCard = ({ noticia, className }) => {
  const { day, month, year } = dateParts(noticia.date);

  return (
    <a
      href={routeHref('noticia', noticia.slug)}
      className={`group flex items-start gap-5 rounded-2xl bg-white border border-gray-100 p-5 transition-all duration-300 hover:border-transparent hover:shadow-lg focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 ${className}`}
    >
      <time
        dateTime={noticia.date}
        className="shrink-0 w-14 rounded-xl px-2 py-3 text-center text-white"
        style={{ backgroundColor: corDaCategoria(noticia.category) }}
      >
        <span className="block font-display font-black text-xl leading-none">{day}</span>
        <span className="block text-[9px] font-bold uppercase tracking-widest mt-1 opacity-80">
          {month} {year}
        </span>
      </time>

      <div className="min-w-0">
        <CategoryTag category={noticia.category} />
        <h3 className="mt-2 font-display font-black text-gray-900 text-base leading-snug tracking-tight transition-colors group-hover:text-un-blue">
          {noticia.title}
        </h3>
      </div>
    </a>
  );
};

/**
 * @param {{ noticia: object, variant?: 'featured'|'default'|'list', className?: string }} props
 */
export const ArticleCard = ({ noticia, variant = 'default', className = '' }) => {
  if (variant === 'featured') return <FeaturedCard noticia={noticia} className={className} />;
  if (variant === 'list') return <ListCard noticia={noticia} className={className} />;
  return <StandardCard noticia={noticia} className={className} />;
};
