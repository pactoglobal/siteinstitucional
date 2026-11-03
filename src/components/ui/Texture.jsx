import React, { useId } from 'react';

/**
 * Malha de pontos sutil — camada de textura dos heros e cards escuros.
 * O id do <pattern> é gerado por useId para permitir várias instâncias
 * na mesma página sem colisão de id no documento.
 */
export const DotGrid = ({ className = '', gap = 22 }) => {
  const id = useId().replace(/:/g, '');

  return (
    <svg className={className} aria-hidden="true">
      <defs>
        <pattern id={id} width={gap} height={gap} patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

/** Grão fotográfico sobreposto — dá matéria às superfícies chapadas. */
export const Grain = ({ opacity = 0.04 }) => (
  <div
    className="absolute inset-0 grain-overlay mix-blend-overlay pointer-events-none"
    style={{ opacity }}
    aria-hidden="true"
  />
);
