import React from 'react';
import { HeroEsg } from '../components/esg-ods/HeroEsg';
import { PilaresBento } from '../components/esg-ods/PilaresBento';
import { EsgEmAcao } from '../components/esg-ods/EsgEmAcao';
import { RegulacaoFaixa } from '../components/esg-ods/RegulacaoFaixa';
import { PerguntasEsgOds } from '../components/esg-ods/PerguntasEsgOds';
import { CtaFinal } from '../components/esg-ods/CtaFinal';
import { routeHref } from '../hooks/useHashRoute';

export const ESGPage = () => (
  <div className="animate-fade-in min-h-screen bg-un-surface">
    <HeroEsg />
    <PilaresBento />
    <EsgEmAcao />
    <RegulacaoFaixa />
    <PerguntasEsgOds />
    <CtaFinal outraPagina={{ href: routeHref('ods'), rotulo: 'Explore os 18 ODS e onde a Rede Brasil atua em cada um' }} />
  </div>
);
