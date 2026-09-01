import React from 'react';
import { ArrowUpRight, MapPin, Clock, Monitor, Users, Globe2 } from 'lucide-react';
import { routeHref } from '../../hooks/useHashRoute';
import { corDaCategoria, ACESSO_ABERTO } from '../../data/eventos';
import { formatDateRange, dateParts } from '../../utils/date';
import { cn } from '../../utils/cn';

const FORMAT_ICONS = {
  Online: Monitor,
  Presencial: MapPin,
  Híbrido: Globe2,
};

/** Selo de formato e de acesso — a informação que decide se vale ir. */
export const EventMeta = ({ evento, tone = 'light' }) => {
  const FormatIcon = FORMAT_ICONS[evento.format] || MapPin;
  const aberto = evento.access === ACESSO_ABERTO;

  const base =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest';

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={cn(
          base,
          tone === 'dark' ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-600',
        )}
      >
        <FormatIcon className="w-3 h-3" />
        {evento.format}
      </span>
      <span
        className={cn(
          base,
          aberto
            ? 'bg-un-green/10 text-un-green'
            : tone === 'dark'
              ? 'bg-white/10 text-white/70'
              : 'bg-gray-100 text-gray-500',
        )}
      >
        <Users className="w-3 h-3" />
        {aberto ? 'Aberto ao público' : 'Exclusivo participantes'}
      </span>
    </div>
  );
};

/** Bloco de data — âncora visual da agenda. */
const DateBlock = ({ evento, size = 'lg' }) => {
  const start = dateParts(evento.startDate);
  const end = evento.endDate ? dateParts(evento.endDate) : null;
  const color = corDaCategoria(evento.category);
  const multiDay = end && end.day !== start.day;

  return (
    <div
      className={cn(
        'shrink-0 rounded-2xl text-center text-white flex flex-col items-center justify-center',
        size === 'lg' ? 'w-24 h-24 md:w-28 md:h-28' : 'w-16 h-16',
      )}
      style={{ backgroundColor: color }}
    >
      <span
        className={cn(
          'font-display font-black leading-none tracking-tight',
          size === 'lg' ? 'text-3xl md:text-4xl' : 'text-xl',
        )}
      >
        {start.day}
        {multiDay && <span className="opacity-60">–{end.day}</span>}
      </span>
      <span
        className={cn(
          'font-bold uppercase tracking-widest opacity-80 mt-1',
          size === 'lg' ? 'text-[10px]' : 'text-[9px]',
        )}
      >
        {start.month} {start.year}
      </span>
    </div>
  );
};

/** Linha da agenda: data à esquerda, conteúdo, seta. Densidade de calendário. */
const AgendaRow = ({ evento, className }) => (
  <a
    href={routeHref('evento', evento.slug)}
    className={cn(
      'group relative flex items-start gap-5 md:gap-8 rounded-3xl bg-white border border-gray-100 p-5 md:p-7 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_60px_-24px_rgba(30,50,80,0.28)] focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2',
      className,
    )}
  >
    <DateBlock evento={evento} />

    <div className="min-w-0 flex-1">
      <span
        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
        style={{ color: corDaCategoria(evento.category) }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: corDaCategoria(evento.category) }}
        />
        {evento.category}
      </span>

      <h3 className="font-display font-black text-gray-900 text-lg md:text-2xl leading-snug tracking-tight mb-2 transition-colors group-hover:text-un-blue">
        {evento.title}
      </h3>

      <p className="text-sm text-gray-500 font-light leading-relaxed line-clamp-2 mb-4 max-w-2xl">
        {evento.excerpt}
      </p>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <time dateTime={evento.startDate}>
            {formatDateRange(evento.startDate, evento.endDate)}
          </time>
          {evento.time && <span className="text-gray-400">· {evento.time}</span>}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          {evento.location}
        </span>
      </div>

      <EventMeta evento={evento} />
    </div>

    <span className="hidden md:flex shrink-0 self-center w-11 h-11 rounded-full bg-un-blue/5 items-center justify-center text-un-blue transition-all duration-300 group-hover:bg-un-blue group-hover:text-white group-hover:rotate-45">
      <ArrowUpRight className="w-4 h-4" />
    </span>
  </a>
);

/** Card vertical com imagem — usado na home, onde a agenda é uma vitrine. */
const EventTile = ({ evento, className }) => (
  <a
    href={routeHref('evento', evento.slug)}
    className={cn(
      'group relative flex flex-col justify-end overflow-hidden rounded-3xl aspect-[4/5] focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2',
      className,
    )}
  >
    <img
      src={evento.image}
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/5" />
    <div
      className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
      style={{ backgroundColor: corDaCategoria(evento.category) }}
    />

    <div className="absolute top-5 left-5">
      <DateBlock evento={evento} size="sm" />
    </div>

    <div className="relative z-10 p-6">
      <span className="block text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
        {evento.category}
      </span>
      <h3 className="font-display font-black text-white text-lg md:text-xl leading-snug tracking-tight mb-3">
        {evento.title}
      </h3>
      <div className="flex items-center gap-1.5 text-white/70 text-xs mb-4">
        <MapPin className="w-3.5 h-3.5 shrink-0" />
        {evento.location}
      </div>
      <EventMeta evento={evento} tone="dark" />
    </div>
  </a>
);

/**
 * @param {{ evento: object, variant?: 'row'|'tile', className?: string }} props
 */
export const EventCard = ({ evento, variant = 'row', className = '' }) =>
  variant === 'tile' ? (
    <EventTile evento={evento} className={className} />
  ) : (
    <AgendaRow evento={evento} className={className} />
  );
