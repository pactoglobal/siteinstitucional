import { useState, useEffect } from 'react';
import { ROUTES, HASH_TO_ROUTE, MOVIMENTO_HASH_PREFIX } from '../data/constants';

const parseHash = (hash, defaultRoute) => {
  const current = hash || '#/';
  if (current.startsWith(MOVIMENTO_HASH_PREFIX)) {
    return { route: 'movimento', param: current.slice(MOVIMENTO_HASH_PREFIX.length) };
  }
  return { route: HASH_TO_ROUTE[current] || defaultRoute, param: null };
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
