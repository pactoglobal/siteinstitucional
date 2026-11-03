import React from 'react';
import { Lightbulb, LineChart, Target } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FUNDAMENTACAO_CONCEITUAL } from '../../data/esgOds';
import { ESGODSMatrix } from './ESGODSMatrix';

// ODS x ESG x sinergia, seguido da matriz de conexão
export const FundamentacaoConceitual = () => (
  <section className="py-12 md:py-20 bg-white">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
      <SectionHeader
        badge="Fundamentação Conceitual"
        title={FUNDAMENTACAO_CONCEITUAL.titulo}
        description={FUNDAMENTACAO_CONCEITUAL.intro}
        className="mb-12"
      />

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* ODS */}
        <article className="rounded-3xl p-6 sm:p-8 bg-un-blue/5 border border-un-blue/10 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-un-blue text-white flex items-center justify-center mb-4">
            <Target className="w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-display font-bold text-un-blue uppercase tracking-tight mb-3">
            {FUNDAMENTACAO_CONCEITUAL.ods.titulo}
          </h3>
          <p className="text-slate-700 leading-relaxed">{FUNDAMENTACAO_CONCEITUAL.ods.descricao}</p>
          <div className="mt-4 pt-4 border-t border-un-blue/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-un-blue">Agenda normativa global • 193 países • 17 ODS + 169 metas</span>
          </div>
        </article>

        {/* ESG */}
        <article className="rounded-3xl p-6 sm:p-8 bg-un-green/5 border border-un-green/10 hover:shadow-lg transition-all duration-300">
          <div className="w-12 h-12 rounded-2xl bg-un-green text-white flex items-center justify-center mb-4">
            <LineChart className="w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-display font-bold text-un-green uppercase tracking-tight mb-3">
            {FUNDAMENTACAO_CONCEITUAL.esg.titulo}
          </h3>
          <p className="text-slate-700 leading-relaxed">{FUNDAMENTACAO_CONCEITUAL.esg.descricao}</p>
          <div className="mt-4 pt-4 border-t border-un-green/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-un-green">Abordagem operacional • Gestão de riscos • Criação de valor</span>
          </div>
        </article>

        {/* Sinergia */}
        <article className="rounded-3xl p-6 sm:p-8 bg-un-gold/5 border border-un-gold/10 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-un-gold/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-12 h-12 rounded-2xl bg-un-gold text-un-blue flex items-center justify-center mb-4">
            <Lightbulb className="w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-display font-bold text-un-gold uppercase tracking-tight mb-3">
            {FUNDAMENTACAO_CONCEITUAL.sinergia.titulo}
          </h3>
          <p className="text-slate-700 leading-relaxed">{FUNDAMENTACAO_CONCEITUAL.sinergia.descricao}</p>
          <div className="mt-4 pt-4 border-t border-un-gold/20">
            <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold">Dupla materialidade • Motor microeconômico • Impacto auditável</span>
          </div>
        </article>
      </div>

      <ESGODSMatrix />
    </div>
  </section>
);
