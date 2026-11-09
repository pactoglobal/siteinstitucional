import React from 'react';
import { Dossie, DossieAbertura } from '../components/esg-ods/Dossie';
import {
  MosaicoOds,
  Ods18,
  OdsAgenda,
  OdsEmpresas,
  OdsFerramentas,
  OdsHistoria,
  OdsMetas,
  OdsObjetivos,
} from '../components/esg-ods/CapitulosOds';
import { CtaFinal } from '../components/esg-ods/CtaFinal';
import { routeHref } from '../hooks/useHashRoute';
import { CAPITULOS_ODS, TEXTOS_ODS } from '../data/esgOds';

export const ODSPage = () => (
  <div className="animate-fade-in min-h-screen bg-white">
    <DossieAbertura textos={TEXTOS_ODS.hero} capitulos={CAPITULOS_ODS} visual={<MosaicoOds />} />
    <Dossie capitulos={CAPITULOS_ODS}>
      <OdsAgenda />
      <OdsHistoria />
      <OdsEmpresas />
      <OdsObjetivos />
      <Ods18 />
      <OdsMetas />
      <OdsFerramentas />
    </Dossie>
    <CtaFinal conteudo={TEXTOS_ODS.cta} outraPagina={routeHref('esg')} />
  </div>
);
