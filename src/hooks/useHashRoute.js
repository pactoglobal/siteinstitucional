import { useState, useEffect } from 'react';
import { ROUTES, DYNAMIC_ROUTES } from '../data/constants';

/**
 * Resolve o hash atual para { route, param }.
 * Prefixos dinâmicos (`#/noticia/<slug>`) têm precedência sobre rotas fixas.
 *
 * @param {string} hash
 * @param {string} defaultRoute
 */
const parseHash = (hash, defaultRoute) => {
  // Identificador limpo, vindo do hash (#/ambicao -> ambicao) ou do pathname
  // (/siteinstitucional/ambicao -> ambicao, via fallback do 404.html)
  const rawHash = (hash || '').replace(/^#\/?/, '');
  const path = (window.location.pathname || '')
    .replace(/^\/siteinstitucional\/?/, '')
    .replace(/^\//, '');

  const target = rawHash || path;

  // Rotas de detalhe: prefixo + slug. DYNAMIC_ROUTES guarda o prefixo de hash
  // completo ('#/noticia/'); aqui comparamos contra o alvo já normalizado,
  // para que funcione igual por hash e por pathname.
  for (const [route, prefix] of Object.entries(DYNAMIC_ROUTES)) {
    const bare = prefix.replace(/^#\//, '');
    if (target.startsWith(bare)) {
      const rawParam = target.slice(bare.length);
      const param = decodeURIComponent(rawParam).replace(/\/+$/, '');
      // Prefixo sem slug cai na rota padrão, não numa página vazia.
      if (param) return { route, param };
    }
  }

  const cleanTarget = target.replace(/\/+$/, '');
  const routeKey = Object.keys(ROUTES).find(
    (key) => key === cleanTarget || ROUTES[key] === `#/${cleanTarget}` || ROUTES[key] === `#${cleanTarget}`,
  );

  return { route: routeKey || defaultRoute, param: null };
};

export const useHashRoute = (defaultRoute = 'home') => {
  const [state, setState] = useState(() => parseHash(window.location.hash, defaultRoute));

  useEffect(() => {
    const onHashChange = () => setState(parseHash(window.location.hash, defaultRoute));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [defaultRoute]);

  /**
   * @param {string} routeKey chave de ROUTES ou de DYNAMIC_ROUTES
   * @param {string} [param] slug, obrigatório para rotas dinâmicas
   */
  const navigate = (routeKey, param) => {
    const prefix = DYNAMIC_ROUTES[routeKey];
    if (prefix && param) {
      window.location.hash = `${prefix}${encodeURIComponent(param)}`;
      return;
    }
    window.location.hash = ROUTES[routeKey] || '#/';
  };

  return { currentRoute: state.route, routeParam: state.param, navigate };
};

/** Href real para <a>, permitindo abrir em nova aba e copiar o link. */
export const routeHref = (routeKey, param) => {
  const prefix = DYNAMIC_ROUTES[routeKey];
  if (prefix && param) return `${prefix}${encodeURIComponent(param)}`;
  return ROUTES[routeKey] || '#/';
};
