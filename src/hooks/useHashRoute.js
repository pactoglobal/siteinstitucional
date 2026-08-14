import { useState, useEffect } from 'react';
import { ROUTES, HASH_TO_ROUTE, MOVIMENTO_HASH_PREFIX } from '../data/constants';

const parseHash = (hash, defaultRoute) => {
  // Extrai o identificador limpo tanto do hash (ex: #/ambicao -> ambicao) quanto do pathname
  const rawHash = (hash || '').replace(/^#\/?/, '');
  const path = (window.location.pathname || '')
    .replace(/^\/siteinstitucional\/?/, '')
    .replace(/^\//, '');

  const target = rawHash || path;

  if (target.startsWith('movimento/')) {
    return { route: 'movimento', param: target.slice('movimento/'.length) };
  }

  // Corresponde a rotas conhecidas (ex: 'ambicao', 'sobre', 'cop', etc.)
  const routeKey = Object.keys(ROUTES).find(
    (key) => key === target || ROUTES[key] === `#/${target}` || ROUTES[key] === `#${target}`
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

  const navigate = (routeKey, param) => {
    if (routeKey === 'movimento' && param) {
      window.location.hash = `${MOVIMENTO_HASH_PREFIX}${param}`;
      return;
    }
    window.location.hash = ROUTES[routeKey] || '#/';
  };

  return { currentRoute: state.route, routeParam: state.param, navigate };
};
