import { useState, useEffect } from 'react';
import { ROUTES, HASH_TO_ROUTE } from '../data/constants';

export const useHashRoute = (defaultRoute = 'home') => {
  const getRouteFromHash = () => {
    const hash = window.location.hash || '#/';
    return HASH_TO_ROUTE[hash] || defaultRoute;
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentRoute(getRouteFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (routeKey) => {
    const hash = ROUTES[routeKey];
    if (hash) {
      window.location.hash = hash;
    } else {
      window.location.hash = '#/';
    }
  };

  return { currentRoute, navigate };
};