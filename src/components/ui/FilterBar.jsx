import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Pills de filtro. `accentFor` permite colorir a pill ativa com a cor
 * semântica da própria categoria em vez de um azul único.
 */
export const FilterPills = ({
  label,
  options,
  value,
  onChange,
  accentFor,
  countFor,
  className = '',
}) => (
  <div className={cn('flex flex-col gap-3', className)}>
    {label && (
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
        {label}
      </span>
    )}
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap gap-2 -mx-1 px-1 max-md:flex-nowrap max-md:overflow-x-auto max-md:hide-scrollbar"
    >
      {options.map((option) => {
        const isActive = option === value;
        const accent = accentFor?.(option);
        const count = countFor?.(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={cn(
              'group inline-flex items-center gap-2 shrink-0 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border',
              isActive
                ? 'text-white border-transparent shadow-lg'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-900 hover:text-gray-900',
            )}
            style={isActive ? { backgroundColor: accent || '#1E3250' } : undefined}
          >
            {option}
            {typeof count === 'number' && (
              <span
                className={cn(
                  'tabular-nums text-[10px] font-black transition-colors',
                  isActive ? 'text-white/60' : 'text-gray-300 group-hover:text-gray-400',
                )}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  </div>
);

/** Select compacto, para filtros de baixa cardinalidade (ano, formato). */
export const FilterSelect = ({ label, options, value, onChange, id }) => (
  <div className="flex flex-col gap-3">
    <label
      htmlFor={id}
      className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400"
    >
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none rounded-full border border-gray-200 bg-white px-5 py-2.5 pr-10 text-[11px] font-bold uppercase tracking-widest text-gray-900 transition-colors hover:border-gray-900 focus:border-un-blue"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 1rem center',
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

/** Faixa de resultados: contagem + limpar filtros. */
export const ResultCount = ({ total, singular, plural, onReset, hasFilters }) => (
  <div className="mt-12 flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
    <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">
      <span className="text-gray-900 tabular-nums">{total}</span>{' '}
      {total === 1 ? singular : plural}
    </p>
    {hasFilters && (
      <button
        type="button"
        onClick={onReset}
        className="text-[10px] font-bold uppercase tracking-widest text-gray-400 underline underline-offset-4 transition-colors hover:text-gray-900"
      >
        Limpar filtros
      </button>
    )}
  </div>
);
