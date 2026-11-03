import React from 'react';
import { useReveal } from '../../hooks/useReveal';

/**
 * Revela o conteúdo ao entrar na viewport, com atraso escalonado.
 * Respeita prefers-reduced-motion (tratado dentro de useReveal + .reveal).
 */
export const Reveal = ({ children, delay = 0, className = '', as: Tag = 'div' }) => {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};
