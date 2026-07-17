import { useEffect, useState } from 'react';

/**
 * Rastreia qual seção (por id) está mais visível na viewport.
 * Usado pela sub-navegação sticky das páginas de Movimento.
 *
 * @param {string[]} ids - ids estáveis (definidos fora do componente ou memoizados)
 * @returns {string | null}
 */
export function useScrollSpy(ids, { rootMargin = '-45% 0px -50% 0px' } = {}) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
