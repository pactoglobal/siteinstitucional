import React from 'react';
import { HeroOds } from '../components/esg-ods/HeroOds';
import { ExploradorOds } from '../components/esg-ods/ExploradorOds';
import { Ods18Faixa } from '../components/esg-ods/Ods18Faixa';
import { MovimentosGrade } from '../components/esg-ods/MovimentosGrade';
import { FerramentasOds } from '../components/esg-ods/FerramentasOds';
import { CtaFinal } from '../components/esg-ods/CtaFinal';
import { routeHref } from '../hooks/useHashRoute';
import { TEXTOS_ODS } from '../data/esgOds';

export const ODSPage = () => (
  <div className="animate-fade-in min-h-screen bg-un-surface">
    <HeroOds />
    <ExploradorOds />
    <Ods18Faixa />
    <MovimentosGrade />
    <FerramentasOds />
    <CtaFinal conteudo={TEXTOS_ODS.cta} outraPagina={routeHref('esg')} />
  </div>
);
