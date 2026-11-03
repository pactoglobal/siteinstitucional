import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Constrói a sequência de páginas com elipses.
 * Ex.: 1 … 4 5 6 … 112
 */
const buildRange = (current, total, siblings = 1) => {
  const totalSlots = siblings * 2 + 5;
  if (total <= totalSlots) return Array.from({ length: total }, (_, i) => i + 1);

  const left = Math.max(current - siblings, 1);
  const right = Math.min(current + siblings, total);
  const showLeftGap = left > 2;
  const showRightGap = right < total - 1;

  const pages = [1];
  if (showLeftGap) pages.push('…');
  for (let p = Math.max(left, 2); p <= Math.min(right, total - 1); p += 1) pages.push(p);
  if (showRightGap) pages.push('…');
  pages.push(total);

  return pages;
};

export const Pagination = ({ page, totalPages, onChange, className = '' }) => {
  if (totalPages <= 1) return null;

  const pages = buildRange(page, totalPages);
  const go = (target) => onChange(Math.min(Math.max(target, 1), totalPages));

  // Setas sem círculo e numerais tabulares com filete de página ativa:
  // o mesmo vocabulário da régua de filtros, em vez de botões redondos
  // de biblioteca. A área de toque continua 44px.
  const arrow =
    'group inline-flex items-center gap-2 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 transition-colors duration-300 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-25';

  return (
    // Sem filete próprio: o ResultCount, que sempre vem antes, já traz o dele.
    <nav
      aria-label="Paginação"
      className={cn('flex items-center justify-between gap-6', className)}
    >
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
        className={arrow}
      >
        <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        <span className="hidden sm:inline">Anterior</span>
      </button>

      <ol className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === '…' ? (
            <li
              key={`gap-${i}`}
              aria-hidden="true"
              className="select-none px-2 text-xs font-bold text-gray-300"
            >
              ·&nbsp;·&nbsp;·
            </li>
          ) : (
            <li key={p}>
              <button
                type="button"
                onClick={() => go(p)}
                aria-current={p === page ? 'page' : undefined}
                aria-label={`Página ${p}`}
                className={cn(
                  'relative inline-flex h-11 min-w-[2.75rem] items-center justify-center font-display text-sm font-black tabular-nums transition-colors duration-300',
                  p === page ? 'text-gray-900' : 'text-gray-300 hover:text-gray-900',
                )}
              >
                {String(p).padStart(2, '0')}
                <span
                  className={cn(
                    'absolute inset-x-2 bottom-2 h-[3px] origin-center bg-un-blue transition-transform duration-300',
                    p === page ? 'scale-x-100' : 'scale-x-0',
                  )}
                />
              </button>
            </li>
          ),
        )}
      </ol>

      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        aria-label="Próxima página"
        className={arrow}
      >
        <span className="hidden sm:inline">Próxima</span>
        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </nav>
  );
};
