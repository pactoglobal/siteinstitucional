import React from 'react';
import { cn } from '../../utils/cn';
import { ODS_COLORS } from '../../data/constants';

/**
 * Faixa com as cores dos ODS, na ordem do 1 ao 18 — a mesma assinatura da
 * capa do Kit de Mídia da Rede Brasil. Inclui o ODS 18 (Igualdade
 * Étnico-Racial), como o resto do site.
 *
 * Decorativa: usar em poucos pontos (base do hero, topo de um bloco-chave,
 * fecho da página), nunca em cards, botões ou texto.
 */
export const OdsFaixa = ({ className }) => (
  <div aria-hidden="true" className={cn('flex h-1.5 w-full', className)}>
    {ODS_COLORS.map((cor) => (
      <span key={cor} className="h-full flex-1" style={{ backgroundColor: cor }} />
    ))}
  </div>
);
