import { useEffect, useState } from 'react';

// Endpoint público de leitura que expõe os números do Salesforce
// (empresas comprometidas/embaixadoras por Movimento). Configurar via
// .env: VITE_STATS_API_BASE=https://.../api — deixar em branco desliga
// a busca por completo (nenhum número é inventado no lugar).
const STATS_API_BASE = import.meta.env.VITE_STATS_API_BASE;

const INITIAL_STATUS = STATS_API_BASE ? 'loading' : 'unconfigured';

/**
 * Números ao vivo de um Movimento (sincronizados do Salesforce).
 * Sem VITE_STATS_API_BASE configurada, retorna status 'unconfigured' e
 * data null — a UI deve tratar isso como "sem stat ao vivo" e não
 * renderizar nada no lugar, nunca um valor de exemplo.
 *
 * @param {string} slug - id do Movimento (ex.: 'elas-lideram')
 * @returns {{ status: 'unconfigured'|'loading'|'ready'|'error', data: object|null }}
 */
export function useMovimentoStats(slug) {
  const [state, setState] = useState({ status: INITIAL_STATUS, data: null, slug: null });

  useEffect(() => {
    if (!STATS_API_BASE || !slug) return undefined;

    let cancelled = false;

    fetch(`${STATS_API_BASE}/movimentos/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Stats API respondeu ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!cancelled) setState({ status: 'ready', data, slug });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', data: null, slug });
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // O componente pode trocar de slug sem desmontar (navegação entre
  // Movimentos); enquanto o efeito do novo slug não resolve, reporta
  // 'loading' em vez do dado do Movimento anterior.
  if (STATS_API_BASE && slug && state.slug !== slug) {
    return { status: 'loading', data: null };
  }

  return state;
}
