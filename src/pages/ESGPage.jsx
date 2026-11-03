import React from 'react';
import { ArrowRight, CheckCircle2, FileText, LineChart, TrendingUp } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Timeline } from '../components/esg-ods/Timeline';
import { ESGPillarCard } from '../components/esg-ods/ESGPillarCard';
import { FundamentacaoConceitual } from '../components/esg-ods/FundamentacaoConceitual';
import { CtaFinal } from '../components/esg-ods/CtaFinal';
import { routeHref } from '../hooks/useHashRoute';
import {
  ESG_TIMELINE,
  ESG_DEFINICAO_DETALHADA,
  CONTEXTO_REGULATORIO,
  CASOS_INSPIRADORES,
  MERCADO_ESG,
  POR_QUE_ADERIR_MOVIMENTOS,
} from '../data/esgOds';

export const ESGPage = () => (
  <div className="animate-fade-in bg-un-surface min-h-screen">
    {/* 1. HERO EDITORIAL */}
    <PageHero
      category="Estratégia Empresarial ESG"
      title="ESG"
      description="Entenda o significado da sigla ESG (Ambiental, Social e Governança), sua origem, a linha do tempo histórica, o contexto regulatório brasileiro e como o Pacto Global auxilia sua empresa a transformar compromissos em impacto real e auditável."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      color="bg-un-blue"
    />

    {/* 2. FUNDAMENTAÇÃO CONCEITUAL: ODS vs ESG */}
    <FundamentacaoConceitual />

    {/* 3. O QUE É ESG — DEFINIÇÃO DETALHADA */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Definição Completa"
          title={ESG_DEFINICAO_DETALHADA.titulo}
          description={ESG_DEFINICAO_DETALHADA.intro}
          className="mb-12"
        />

        {/* Origem */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-blue/5 border border-un-blue/10 mb-12">
          <h3 className="text-lg font-display font-bold text-un-blue uppercase tracking-tight mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5" aria-hidden="true" /> Origem do termo ESG
          </h3>
          <div dangerouslySetInnerHTML={{ __html: ESG_DEFINICAO_DETALHADA.origem }} className="text-slate-700 leading-relaxed" />
        </div>

        {/* Evolução */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-green/5 border border-un-green/10 mb-12">
          <h3 className="text-lg font-display font-bold text-un-green uppercase tracking-tight mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" aria-hidden="true" /> Evolução: de screening a criação de valor
          </h3>
          <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: ESG_DEFINICAO_DETALHADA.evolucao }} />
        </div>

        {/* 3 Pilares detalhados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ESG_DEFINICAO_DETALHADA.pilares.map((pilar) => (
            <ESGPillarCard key={pilar.letra} pilar={pilar} />
          ))}
        </div>
      </div>
    </section>

    {/* 4. TIMELINE ESG */}
    <Timeline items={ESG_TIMELINE} title="Linha do Tempo: A Construção do ESG" cor="#1E3250" />

    {/* 5. CONTEXTO REGULATÓRIO */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Regulação"
          title={CONTEXTO_REGULATORIO.titulo}
          description={CONTEXTO_REGULATORIO.intro}
          className="mb-10"
        />

        <div className="space-y-4">
          {CONTEXTO_REGULATORIO.resolucoes.map((reg) => (
            <article
              key={reg.nome}
              className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-un-blue/10 text-un-blue flex items-center justify-center shrink-0 group-hover:bg-un-blue group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-lg font-display font-bold text-slate-900">{reg.nome}</h3>
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-un-gold/10 text-un-blue border border-un-gold/30">{reg.status}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{reg.descricao}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 6. CASOS INSPIRADORES */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Casos de Sucesso"
          title="Empresas que Inspiram"
          titleAccent="Engajamento transversal real nos pilares E, S e G"
          description="Grandes empresas brasileiras usam a Ambição 2030 em suas estratégias, atuando em colaboração pré-competitiva para resolver desafios sistêmicos."
          className="mb-10"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {CASOS_INSPIRADORES.map((caso) => (
            <article
              key={caso.empresa}
              className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-blue/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img src={caso.logo} alt={caso.empresa} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 mb-2">{caso.empresa}</h3>
              <p className="text-sm text-un-blue font-medium mb-3">{caso.destaque}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{caso.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 7. MERCADO ESG */}
    <section className="py-12 md:py-20 bg-un-blue text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-un-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <SectionHeader
          badge="Evidência de Mercado"
          title={MERCADO_ESG.titulo}
          titleAccent="Dados que comprovam o retorno do investimento em ESG"
          description={MERCADO_ESG.intro}
          inverted
          className="mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {MERCADO_ESG.estatisticas.map((stat) => (
            <div key={stat.rotulo} className="text-center p-4 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-colors">
              <div className="text-3xl sm:text-4xl font-display font-black text-un-gold mb-2 group-hover:scale-110 transition-transform">{stat.valor}</div>
              <div className="text-xs sm:text-sm font-medium text-white mb-1">{stat.rotulo}</div>
              <div className="text-[10px] text-slate-300">Fonte: {stat.fonte}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {MERCADO_ESG.casos.map((caso) => (
            <article key={caso.nome} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-un-gold/20 text-un-gold flex items-center justify-center shrink-0">
                  <LineChart className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-display font-bold text-white">{caso.nome}</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{caso.descricao}</p>
              <a
                href={caso.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-un-gold hover:text-white border-b border-un-gold/30 hover:border-white py-1 transition-colors"
              >
                {caso.link.label}<span className="sr-only"> — {caso.nome} (abre em nova aba)</span> <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 8. POR QUE ADERIR */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Valor da Adesão"
          title={POR_QUE_ADERIR_MOVIMENTOS.titulo}
          description={POR_QUE_ADERIR_MOVIMENTOS.descricao}
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POR_QUE_ADERIR_MOVIMENTOS.beneficios.map((beneficio) => (
            <article key={beneficio} className="rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-un-blue/50 hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-un-blue/5 text-un-blue flex items-center justify-center mb-4 group-hover:bg-un-blue group-hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{beneficio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 9. CTA FINAL */}
    <CtaFinal outraPagina={{ href: routeHref('ods'), rotulo: 'Conheça os 18 ODS e os Movimentos da Ambição 2030' }} />
  </div>
);
