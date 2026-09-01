import React from 'react';
import { ArrowUpRight, MapPin, Mic } from 'lucide-react';
import { routeHref } from '../../hooks/useHashRoute';
import { corDoTipo } from '../../data/releases';
import { formatDateLong } from '../../utils/date';
import { cn } from '../../utils/cn';

const TypeTag = ({ tipo, tone = 'light' }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em]"
    style={
      tone === 'dark'
        ? { backgroundColor: 'rgba(255,255,255,.16)', color: '#fff' }
        : { backgroundColor: `${corDoTipo(tipo)}14`, color: corDoTipo(tipo) }
    }
  >
    {tipo}
  </span>
);

/** Destaque: peça larga com foto, para abrir a sala de imprensa. */
const FeaturedRelease = ({ release, className }) => (
  <a
    href={routeHref('release', release.slug)}
    className={cn(
      'group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2',
      className,
    )}
  >
    <img
      src={release.image}
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
    <div
      className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
      style={{ backgroundColor: corDoTipo(release.type) }}
    />

    <div className="relative z-10 p-7 md:p-9">
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <TypeTag tipo={release.type} tone="dark" />
        <time
          dateTime={release.date}
          className="text-[10px] font-bold uppercase tracking-widest text-white/55"
        >
          {formatDateLong(release.date)}
        </time>
      </div>

      <h3 className="mb-4 max-w-2xl font-display text-xl font-black leading-[1.15] tracking-tight text-white md:text-3xl">
        {release.title}
      </h3>

      <div className="flex items-end justify-between gap-6">
        <p className="line-clamp-2 max-w-xl text-sm font-light leading-relaxed text-white/70 md:text-base">
          {release.excerpt}
        </p>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-un-blue">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  </a>
);

/**
 * Linha do acervo: sem foto, densidade documental.
 * Para jornalista o que decide a leitura é tipo + data + porta-voz,
 * não a imagem — por isso a listagem é textual.
 */
const ReleaseRow = ({ release, className }) => (
  <a
    href={routeHref('release', release.slug)}
    className={cn(
      'group flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_20px_50px_-24px_rgba(30,50,80,0.3)] focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 md:flex-row md:items-center md:gap-8',
      className,
    )}
  >
    <div className="flex shrink-0 flex-row items-center gap-3 md:w-44 md:flex-col md:items-start">
      <TypeTag tipo={release.type} />
      <time
        dateTime={release.date}
        className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
      >
        {formatDateLong(release.date)}
      </time>
    </div>

    <div className="min-w-0 flex-1">
      <h3 className="mb-2 font-display text-base font-black leading-snug tracking-tight text-gray-900 transition-colors group-hover:text-un-blue md:text-lg">
        {release.title}
      </h3>
      <p className="mb-3 line-clamp-2 text-sm font-light leading-relaxed text-gray-500">
        {release.excerpt}
      </p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11px] text-gray-400">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3 w-3 shrink-0" />
          {release.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Mic className="h-3 w-3 shrink-0" />
          {release.spokesperson}
        </span>
      </div>
    </div>

    <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-un-blue/5 text-un-blue transition-all duration-300 group-hover:rotate-45 group-hover:bg-un-blue group-hover:text-white md:flex">
      <ArrowUpRight className="h-4 w-4" />
    </span>
  </a>
);

/**
 * @param {{ release: object, variant?: 'featured'|'row', className?: string }} props
 */
export const ReleaseCard = ({ release, variant = 'row', className = '' }) =>
  variant === 'featured' ? (
    <FeaturedRelease release={release} className={className} />
  ) : (
    <ReleaseRow release={release} className={className} />
  );
