import React from 'react';
import { cn } from '../../utils/cn';

const IMAGES_BASE = `${import.meta.env.BASE_URL}images/adesao/`;

// Véu azul da ONU sobre a foto. "base" escurece só onde o texto fica (rodapé
// do card) e deixa a foto aparecer em cima; "denso" cobre o card inteiro, para
// cards com muito texto, em que a leitura vem antes da foto.
const VEUS = {
  base: 'bg-gradient-to-t from-un-blue from-30% via-un-blue/85 via-60% to-un-blue/10',
  denso: 'bg-gradient-to-t from-un-blue via-un-blue/90 to-un-blue/60',
};

/**
 * Foto decorativa de fundo para os cards da página Como Aderir. O card que a
 * usa precisa ser `relative isolate overflow-hidden` e ter a classe `group`
 * para o zoom no hover.
 *
 * @param {{ imagem: string, variante?: 'base' | 'denso' }} props
 */
export const FotoFundo = ({ imagem, variante = 'base' }) => (
  <>
    <img
      src={`${IMAGES_BASE}${imagem}.jpg`}
      alt=""
      loading="lazy"
      width={900}
      height={600}
      className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none"
    />
    <div
      aria-hidden="true"
      className={cn('absolute inset-0 -z-10', VEUS[variante])}
    />
  </>
);
