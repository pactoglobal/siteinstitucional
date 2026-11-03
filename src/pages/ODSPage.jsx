import React from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Timeline } from '../components/esg-ods/Timeline';
import { MovementCard } from '../components/esg-ods/MovementCard';
import { CtaFinal } from '../components/esg-ods/CtaFinal';
import { routeHref } from '../hooks/useHashRoute';
import {
  ODS_TIMELINE,
  MOVIMENTOS_AMBICAO_2030,
  FERRAMENTAS_ESG,
  METAS_AMBICAO_ODS,
  ODS_LIST,
} from '../data/esgOds';
import { ODS_COLORS } from '../data/constants';

// Nota oficial sobre a adoção do ODS 18 (src/data/releases.js)
const RELEASE_ODS_18 = 'nota-oficial-ods-18-igualdade-etnico-racial';

const LinkExterno = ({ link }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-un-blue hover:text-un-gold border-b border-un-blue/30 hover:border-un-gold py-1 transition-colors"
  >
    {link.label}<span className="sr-only"> (abre em nova aba)</span> <ExternalLink className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
  </a>
);

export const ODSPage = () => (
  <div className="animate-fade-in bg-un-surface min-h-screen">
    {/* 1. HERO EDITORIAL */}
    <PageHero
      category="Agenda 2030"
      title="ODS"
      description="Conheça os 18 Objetivos de Desenvolvimento Sustentável, a linha do tempo da Agenda 2030, os 10 Movimentos da Ambição 2030 e as ferramentas do Pacto Global para integrar os ODS à estratégia da sua empresa."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      color="bg-un-blue"
    />

    {/* 2. OS 18 ODS - GRADE COM IMAGENS OFICIAIS */}
    <section id="ods" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Agenda 2030"
          title="Os 18 Objetivos de Desenvolvimento Sustentável"
          titleAccent="Ícones oficiais da ONU + ODS 18 brasileiro"
          description="Os ODS reúnem os grandes desafios e vulnerabilidades da sociedade. Apontam os principais itens a serem acompanhados de perto por empresas que querem estar em conformidade com práticas ESG. O Brasil propôs e o Pacto Global implementou o ODS 18 em 2025."
          className="mb-10"
        />

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12 list-none p-0 m-0">
          {ODS_LIST.map((ods) => (
            <li
              key={ods.id}
              className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <img
                src={ods.image}
                alt={`ODS ${ods.id} — ${ods.name}`}
                loading="lazy"
                width="160"
                height="160"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true">
                <span className="text-2xl font-display font-black" style={{ color: ods.color }}>{ods.id}</span>
                <p className="text-[10px] font-medium leading-snug mt-1">{ods.name}</p>
              </div>
              {ods.id === 18 && (
                <span className="absolute inset-0 rounded-xl pointer-events-none ring-2" style={{ '--tw-ring-color': ODS_COLORS[17] }} aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>

        {/* Destaque ODS 18 */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-purple/5 border border-un-purple/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-un-purple/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-un-purple/10 flex items-center justify-center shrink-0">
                <img src="/siteinstitucional/ods/ods-18.jpg" alt="" className="w-12 h-12 object-cover rounded-xl" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-un-purple uppercase tracking-tight">
                  ODS 18 — Igualdade Étnico-Racial
                </h3>
                <p className="text-sm text-slate-600">Proposição brasileira, implementada pelo Pacto Global em 2025</p>
              </div>
            </div>
            <a
              href={routeHref('release', RELEASE_ODS_18)}
              className="shrink-0 inline-flex items-center justify-center rounded-full border-2 border-un-purple text-un-purple hover:bg-un-purple hover:text-white px-6 py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2"
            >
              Saiba mais<span className="sr-only"> sobre o ODS 18</span> <ArrowRight className="w-3.5 h-3.5 ml-2" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* 3. TIMELINE ODS */}
    <Timeline items={ODS_TIMELINE} title="Linha do Tempo: A Agenda 2030 e os ODS" cor="#297D6D" />

    {/* 4. 10 MOVIMENTOS DA AMBIÇÃO 2030 COM LOGOS */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Ambição 2030"
          title="Os 10 Movimentos de Aceleração"
          titleAccent="Logos oficiais • Metas públicas auditáveis • Conectando ESG aos ODS"
          description="A Estratégia Ambição 2030 transforma intenções genéricas em compromissos públicos auditáveis e mensuráveis. Cada movimento conecta um pilar ESG a ODS prioritários com metas claras, prazos definidos e logos oficiais."
          className="mb-10"
        />

        <div className="space-y-4">
          {MOVIMENTOS_AMBICAO_2030.map((mov) => (
            <MovementCard key={mov.id} mov={mov} />
          ))}
        </div>
      </div>
    </section>

    {/* 5. FERRAMENTAS PRÁTICAS */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Ferramentas do Pacto Global"
          title="Como Implementar ESG e ODS na Prática"
          description="Duas ferramentas principais do Pacto Global para que sua organização integre os ODS no dia a dia das operações e estabeleça metas compatíveis com padrões globais."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {FERRAMENTAS_ESG.map((ferramenta, idx) => (
            <article
              key={ferramenta.id}
              className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={ferramenta.imagem}
                  className="w-full h-48 object-cover opacity-15"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-un-blue bg-white/90 px-3 py-1 rounded-full border border-un-gold/40 inline-block mb-4">
                  {idx === 0 ? 'Guia Metodológico' : 'Programa de Aceleração'}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-2">
                  {ferramenta.titulo}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{ferramenta.subtitulo}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{ferramenta.descricao}</p>

                {ferramenta.passos && (
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Passos do {ferramenta.titulo}:</h4>
                    <ol className="space-y-2">
                      {ferramenta.passos.map((passo, pIdx) => (
                        <li key={passo} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-5 h-5 rounded-full bg-un-blue/10 text-un-blue text-[10px] font-bold flex items-center justify-center shrink-0" aria-hidden="true">{pIdx + 1}</span>
                          {passo}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {ferramenta.beneficios && (
                  <div className="space-y-3 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Benefícios:</h4>
                    <ul className="space-y-2">
                      {ferramenta.beneficios.map((beneficio) => (
                        <li key={beneficio} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-un-green shrink-0" aria-hidden="true" />
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  {ferramenta.links?.map((link) => (
                    <LinkExterno key={link.url} link={link} />
                  ))}
                  {ferramenta.link && <LinkExterno link={ferramenta.link} />}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 6. METAS DA AMBIÇÃO PELOS ODS */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Metas Transformadoras"
          title="Exemplos de Metas do Programa Ambição pelos ODS"
          description="As metas visam traduzir os ODS para os negócios, com foco em ampliar o impacto das empresas em desafios globais. O programa permite ir além do progresso incremental e intensificar a mudança transformadora."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {METAS_AMBICAO_ODS.map((meta) => (
            <article
              key={meta.ods}
              className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-gold/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-display font-black text-lg" style={{ backgroundColor: ODS_COLORS[meta.ods - 1] }} aria-hidden="true">
                  {meta.ods}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">ODS {meta.ods}</span>
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900 uppercase tracking-tight mb-3">{meta.titulo}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{meta.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 7. CTA FINAL */}
    <CtaFinal outraPagina={{ href: routeHref('esg'), rotulo: 'Entenda o que é ESG e como ele se conecta aos ODS' }} />
  </div>
);
