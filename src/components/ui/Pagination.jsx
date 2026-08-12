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

  const arrow =
    'inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-900 transition-all duration-300 hover:border-gray-900 disabled:opacity-30 disabled:pointer-events-none';

  return (
    <nav aria-label="Paginação" className={cn('flex items-center justify-center gap-2', className)}>
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
        className={arrow}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <ol className="flex items-center gap-1.5">
        {pages.map((p, i) =>
          p === '…' ? (
            <li
              key={`gap-${i}`}
              aria-hidden="true"
              className="w-7 text-center text-gray-300 font-bold select-none"
            >
              …
            </li>
          ) : (
            <li key={p}>
              <button
                type="button"
                onClick={() => go(p)}
                aria-current={p === page ? 'page' : undefined}
                aria-label={`Página ${p}`}
                className={cn(
                  'inline-flex items-center justify-center w-11 h-11 rounded-full text-sm font-bold tabular-nums transition-all duration-300',
                  p === page
                    ? 'bg-un-blue text-white shadow-lg'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-900 hover:text-gray-900',
                )}
              >
                {p}
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
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
