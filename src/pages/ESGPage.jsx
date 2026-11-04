import React from 'react';
import { HeroEsg } from '../components/esg-ods/HeroEsg';
import { PilaresBento } from '../components/esg-ods/PilaresBento';
import { EsgEmAcao } from '../components/esg-ods/EsgEmAcao';
import { RegulacaoFaixa } from '../components/esg-ods/RegulacaoFaixa';
import { PerguntasEsgOds } from '../components/esg-ods/PerguntasEsgOds';
import { CtaFinal } from '../components/esg-ods/CtaFinal';
import { routeHref } from '../hooks/useHashRoute';
import { TEXTOS_ESG } from '../data/esgOds';

export const ESGPage = () => (
  <div className="animate-fade-in min-h-screen bg-un-surface">
    <HeroEsg />
    <PilaresBento />
    <RegulacaoFaixa />
    <EsgEmAcao />
    <PerguntasEsgOds />
    <CtaFinal conteudo={TEXTOS_ESG.cta} outraPagina={routeHref('ods')} />
  </div>
);
