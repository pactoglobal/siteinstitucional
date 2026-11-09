import React from 'react';
import { Dossie, DossieAbertura } from '../components/esg-ods/Dossie';
import {
  EsgDuasPerguntas,
  EsgDuvidas,
  EsgOQueE,
  EsgOrigem,
  EsgPorQueImporta,
  EsgRedeBrasil,
  EsgTresLetras,
  LetrasEsg,
} from '../components/esg-ods/CapitulosEsg';
import { CtaFinal } from '../components/esg-ods/CtaFinal';
import { routeHref } from '../hooks/useHashRoute';
import { CAPITULOS_ESG, TEXTOS_ESG } from '../data/esgOds';

export const ESGPage = () => (
  <div className="animate-fade-in min-h-screen bg-white">
    <DossieAbertura textos={TEXTOS_ESG.hero} capitulos={CAPITULOS_ESG} visual={<LetrasEsg />} />
    <Dossie capitulos={CAPITULOS_ESG}>
      <EsgOQueE />
      <EsgOrigem />
      <EsgDuasPerguntas />
      <EsgTresLetras />
      <EsgPorQueImporta />
      <EsgRedeBrasil />
      <EsgDuvidas />
    </Dossie>
    <CtaFinal conteudo={TEXTOS_ESG.cta} outraPagina={routeHref('ods')} />
  </div>
);
