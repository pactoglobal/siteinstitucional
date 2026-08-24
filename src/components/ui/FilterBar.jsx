import React from 'react';
import { Search, X } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Doca sticky dos filtros.
 *
 * O CapsuleHeader é `fixed`, então `top-0` esconderia a barra atrás dele.
 * O deslocamento vive em --header-h (index.css) para não haver duas
 * fontes de verdade sobre a altura do header.
 */
export const FilterDock = ({ children, className = '' }) => (
  <div
    className={cn(
      'sticky z-30 border-y border-gray-200/80 bg-white/80 backdrop-blur-xl',
      className,
    )}
    style={{ top: 'var(--header-h)' }}
  >
    <div className="container mx-auto px-4 md:px-8 lg:px-12">{children}</div>
  </div>
);

/**
 * Régua de filtros: tipografia, não chips.
 *
 * Chips arredondados sobre branco são o visual padrão de qualquer
 * biblioteca. Aqui o filtro é micro-tipografia versalete e o ativo é
 * marcado por um traço na cor semântica da categoria — o mesmo
 * raciocínio da barra de índice do resto do site.
 */
export const FilterRail = ({
  label,
  options,
  value,
  onChange,
  accentFor,
  countFor,
  className = '',
}) => (
  <div className={cn('flex min-w-0 items-baseline gap-6', className)}>
    {label && (
      <span className="hidden shrink-0 text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300 xl:block">
        {label}
      </span>
    )}

    {/* A máscara avisa que a régua rola: sem ela o último item é cortado
        no meio da palavra e parece defeito, não continuação. */}
    <div
      role="group"
      aria-label={label}
      className="hide-scrollbar -mx-1 flex min-w-0 flex-1 items-baseline gap-7 overflow-x-auto px-1 py-4 [mask-image:linear-gradient(to_right,transparent,black_12px,black_calc(100%-32px),transparent)]"
    >
      {options.map((option) => {
        const isActive = option === value;
        const accent = accentFor?.(option) || '#1E3250';
        const count = countFor?.(option);

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className="group relative shrink-0 whitespace-nowrap pb-2 transition-colors duration-300"
          >
            <span
              className={cn(
                'text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300',
                isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-900',
              )}
            >
              {option}
            </span>

            {typeof count === 'number' && (
              <sup
                className={cn(
                  'ml-1.5 align-super text-[9px] font-black tabular-nums transition-colors duration-300',
                  isActive ? '' : 'text-gray-300 group-hover:text-gray-400',
                )}
                style={isActive ? { color: accent } : undefined}
              >
                {count}
              </sup>
            )}

            {/* Traço da categoria: cresce do centro no hover, fixo quando ativo */}
            <span
              className={cn(
                'absolute inset-x-0 bottom-0 h-[3px] origin-center transition-transform duration-300',
                isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
              )}
              style={{ backgroundColor: isActive ? accent : '#D1D5DB' }}
            />
          </button>
        );
      })}
    </div>
  </div>
);

/** Busca discreta: filete inferior, sem caixa. */
export const SearchField = ({ value, onChange, placeholder, label, className = '' }) => (
  <div className={cn('group relative flex shrink-0 items-center', className)}>
    <Search className="pointer-events-none h-3.5 w-3.5 shrink-0 text-gray-300 transition-colors group-focus-within:text-gray-900" />
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      aria-label={label || placeholder}
      className="peer w-full appearance-none border-0 bg-transparent py-3 pl-3 pr-6 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-900 placeholder:font-bold placeholder:tracking-[0.18em] placeholder:text-gray-300 focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
    />
    {value && (
      <button
        type="button"
        onClick={() => onChange('')}
        aria-label="Limpar busca"
        className="absolute right-0 text-gray-300 transition-colors hover:text-gray-900"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    )}
    <span className="absolute inset-x-0 bottom-0 h-px bg-gray-200" />
    <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gray-900 transition-transform duration-300 peer-focus:scale-x-100" />
  </div>
);

/** Select sem caixa, alinhado ao vocabulário da régua. */
export const FilterSelect = ({ label, options, value, onChange, id }) => (
  <div className="flex shrink-0 items-baseline gap-3">
    <label
      htmlFor={id}
      className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-300"
    >
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="cursor-pointer appearance-none border-0 border-b border-gray-200 bg-transparent py-2 pr-5 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-900 transition-colors hover:border-gray-900 focus:border-gray-900 focus:outline-none"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%239CA3AF' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right center',
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

/** Faixa de resultados: contagem em numeral display + limpar filtros. */
export const ResultCount = ({ total, singular, plural, onReset, hasFilters }) => (
  <div className="mt-14 flex items-baseline justify-between gap-4 border-t border-gray-200 pt-6">
    <p className="flex items-baseline gap-2.5">
      <span className="font-display text-2xl font-black tabular-nums leading-none text-gray-900">
        {String(total).padStart(2, '0')}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
        {total === 1 ? singular : plural}
      </span>
    </p>
    {hasFilters && (
      <button
        type="button"
        onClick={onReset}
        className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 underline underline-offset-4 transition-colors hover:text-gray-900"
      >
        Limpar filtros
      </button>
    )}
  </div>
);
