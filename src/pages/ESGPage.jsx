import React from 'react';
import { 
  Target, Compass, TrendingUp, BookOpen, BarChart3, Globe, ArrowRight, CheckCircle2, ExternalLink, Lightbulb, 
  Users, ShieldCheck, Building2, LineChart, Scale, Gavel, FileText, Clock, Flag, Award, AlertTriangle, Zap, 
  Recycle, Droplets, TreePine, Factory, Wind, SolarPanel, Landmark, Handshake, Stethoscope, PiggyBank, Eye, 
  Network, MapPin, Calculator, PieChart, Shield, Lock, Unlock, Key, Diamond, Star, Medal, Trophy, Crown, Gem, 
  Sparkles, Sun, Moon, Cloud, Snowflake, Flame, Mountain, TreeDeciduous, Building, Ship, Plane, Train, Car, Bike, 
  Accessibility, Languages, Smartphone, Tablet, Laptop, Monitor, Keyboard, Mouse, Printer, Camera, Mic, Speaker, 
  Headphones, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, FastForward, Rewind, Shuffle, Repeat, Bookmark, 
  Tag, Navigation, Anchor, Aperture, Crop, RotateCcw, RotateCw, FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, 
  Minimize2, Maximize2, Fullscreen, Minimize, Expand, Move, Lasso, PenTool, Brush, Eraser, PaintBucket, Type, Text, 
  Bold, Italic, Underline, Strikethrough, Code, Code2, Terminal, Hash, GitBranch, GitCommit, GitMerge, GitPullRequest, 
  GitCompare, Github, Gitlab 
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Timeline } from '../components/shared/Timeline';
import { ESGPillarCard } from '../components/shared/ESGPillarCard';
import { ConceptualSection } from '../components/shared/ConceptualSection';
import { ESGODSMatrix } from '../components/shared/ESGODSMatrix';
import { MovementCard } from '../components/shared/MovementCard';
import { Reveal } from '../components/shared/Reveal';
import { StaggeredReveal } from '../components/shared/Reveal';
import {
  FUNDAMENTACAO_CONCEITUAL,
  ESG_TIMELINE,
  ESG_DEFINICAO_DETALHADA,
  CONTEXTO_REGULATORIO,
  CASOS_INSPIRADORES,
  FERRAMENTAS_ESG,
  MERCADO_ESG,
  POR_QUE_ADERIR_MOVIMENTOS,
  ESG_CTA,
} from '../data/esgOds';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';
import DOMPurify from 'dompurify';

const TIMELINE_ICONS = {
  Globe, Users, Target, FileText, TrendingUp, Scale, Gavel, Clock, Flag, Award, AlertTriangle,
  BarChart3, Zap, Recycle, Droplets, TreePine, Factory, Wind, SolarPanel, Landmark, Handshake,
  Stethoscope, PiggyBank, Eye, Network, MapPin, Calculator, PieChart, Shield, Lock, Unlock, Key,
  Diamond, Star, Medal, Trophy, Crown, Gem, Sparkles, Sun, Moon, Cloud, Snowflake, Flame, Mountain,
  TreeDeciduous, Building, Ship, Plane, Train, Car, Bike, Accessibility, Languages, Smartphone,
  Tablet, Laptop, Monitor, Keyboard, Mouse, Printer, Camera, Mic, Speaker, Headphones, Volume2, VolumeX,
  Play, Pause, SkipForward, SkipBack, FastForward, Rewind, Shuffle, Repeat, Bookmark, Tag, Navigation,
  Anchor, Aperture, Crop, RotateCcw, RotateCw, FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, Minimize2,
  Maximize2, Fullscreen, Minimize, Expand, Move, Lasso, PenTool, Brush, Eraser, PaintBucket, Type, Text,
  Bold, Italic, Underline, Strikethrough, Code, Code2, Terminal, Hash, GitBranch, GitCommit, GitMerge,
  GitPullRequest, GitCompare, Github, Gitlab,
};

export const ESGPage = () => (
  <div className="animate-fade-in bg-paper min-h-screen">
    <PageHero
      category="Estratégia Empresarial ESG"
      title="O que é ESG"
      description="Entenda o significado da sigla ESG (Ambiental, Social e Governança), sua origem, evolução histórica, os três pilares em detalhes, o contexto regulatório brasileiro, ferramentas práticas e como o Pacto Global auxilia sua empresa a transformar compromissos em impacto real e auditável."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      color="bg-atlantic/90"
      gradientTitle={true}
    />

    <ConceptualSection gradientTitle={true} />

    <section className="py-12 md:py-20 bg-paper border-y border-border-strong">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Definição Completa"
          title={ESG_DEFINICAO_DETALHADA.titulo}
          description={ESG_DEFINICAO_DETALHADA.intro}
          className="mb-12"
          gradientTitle={true}
        />

        <div className="rounded-2xl p-6 sm:p-8 bg-atlantic/5 border border-atlantic/10 mb-12 reveal" style={{ "--reveal-delay": "0ms" }}>
          <h4 className="text-heading-md font-impact font-bold text-atlantic uppercase tracking-tight mb-3 flex items-center gap-2">
            <span role="img" aria-label="documento">📄</span> Origem do termo ESG
          </h4>
          <div 
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ESG_DEFINICAO_DETALHADA.origem) }} 
            className="text-body-md text-ink-3 leading-relaxed" 
          />
        </div>

        <div className="rounded-2xl p-6 sm:p-8 bg-leaf/5 border border-leaf/10 mb-12 reveal" style={{ "--reveal-delay": "100ms" }}>
          <h4 className="text-heading-md font-impact font-bold text-leaf uppercase tracking-tight mb-3 flex items-center gap-2">
            <span role="img" aria-label="crescimento">📈</span> Evolução: de screening a criação de valor
          </h4>
          <div 
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ESG_DEFINICAO_DETALHADA.evolucao) }} 
            className="text-body-md text-ink-3 leading-relaxed" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ESG_DEFINICAO_DETALHADA.pilares.map((pilar, index) => (
            <ESGPillarCard key={pilar.letra} pilar={pilar} index={index} />
          ))}
        </div>
      </div>
    </section>

    <Timeline items={ESG_TIMELINE} title="Linha do Tempo: A Construção do ESG" color="atlantic" />

    <section className="py-12 md:py-20 bg-paper-2">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Regulação"
          title={CONTEXTO_REGULATORIO.titulo}
          description={CONTEXTO_REGULATORIO.intro}
          className="mb-10"
          gradientTitle={true}
        />

        <StaggeredReveal staggerDelay={100}>
          {CONTEXTO_REGULATORIO.resolucoes.map((reg) => (
            <article
              key={reg.nome}
              className="group relative rounded-2xl p-6 bg-paper-2 border border-border hover:border-sun/40 hover:shadow-card-hover transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 reveal"
            >
              <div className="w-14 h-14 rounded-xl bg-atlantic/10 text-atlantic flex items-center justify-center shrink-0 group-hover:bg-atlantic group-hover:text-white transition-colors">
                <span role="img" aria-label="documento">📄</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h5 className="text-heading-md font-impact font-bold text-ink">{reg.nome}</h5>
                  <span className="px-3 py-1 text-micro font-bold uppercase tracking-widest rounded-full bg-sun/10 text-sun border border-sun/20">{reg.status}</span>
                </div>
                <p className="text-body-sm text-ink-3 leading-relaxed">{reg.descricao}</p>
              </div>
              <span role="img" aria-label="link externo" className="w-5 h-5 text-ink-4 group-hover:text-sun transition-colors shrink-0">🔗</span>
            </article>
          ))}
        </StaggeredReveal>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-paper border-y border-border-strong">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Casos de Sucesso"
          title="Empresas que Inspiram"
          titleAccent="Engajamento transversal real nos pilares E, S e G"
          description="Grandes empresas brasileiras usam a Ambição 2030 em suas estratégias, atuando em colaboração pré-competitiva para resolver desafios sistêmicos."
          className="mb-10"
          gradientTitle={true}
        />

        <StaggeredReveal staggerDelay={150}>
          {CASOS_INSPIRADORES.map((caso) => (
            <article
              key={caso.empresa}
              className="group relative rounded-2xl p-6 bg-paper-2 border border-border hover:border-atlantic/50 hover:shadow-card-hover transition-all duration-300 overflow-hidden reveal"
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 shadow-lg">
                <img src={caso.logo} alt={caso.empresa} className="w-full h-full object-cover group-hover:scale-105 transition-transform" loading="lazy" />
              </div>
              <h4 className="text-heading-md font-impact font-bold text-ink mb-2">{caso.empresa}</h4>
              <p className="text-body-sm text-atlantic font-medium mb-3">{caso.destaque}</p>
              <p className="text-body-sm text-ink-3 leading-relaxed">{caso.descricao}</p>
            </article>
          ))}
        </StaggeredReveal>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-paper-2">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Ferramentas do Pacto Global"
          title="Como Implementar ESG na Prática"
          description="Duas ferramentas principais do Pacto Global para que sua organização integre os ODS no dia a dia das operações e estabeleça metas compatíveis com padrões globais."
          className="mb-12"
          gradientTitle={true}
        />

        <StaggeredReveal staggerDelay={150}>
          {FERRAMENTAS_ESG.map((ferramenta) => (
            <article
              key={ferramenta.id}
              className="relative rounded-2xl overflow-hidden bg-paper-2 border border-border hover:shadow-card-hover transition-all duration-300 reveal"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={ferramenta.imagem}
                  className="w-full h-48 object-cover opacity-10"
                  alt={ferramenta.titulo}
                  loading="lazy"
                />
              </div>
              <div className="relative z-10 p-6 sm:p-8">
                <span className="text-micro font-bold uppercase tracking-widest text-sun bg-paper/90 px-3 py-1 rounded-full border border-sun/30 inline-block mb-4">
                  Guia Metodológico
                </span>
                <h3 className="text-heading-md font-impact font-black text-ink uppercase tracking-tight mb-2">
                  {ferramenta.titulo}
                </h3>
                <p className="text-body-sm text-ink-4 mb-3">{ferramenta.subtitulo}</p>
                <p className="text-body-md text-ink-3 leading-relaxed mb-6">{ferramenta.descricao}</p>

                {ferramenta.passos && (
                  <div className="space-y-3 mb-6">
                    <h5 className="text-micro font-bold uppercase tracking-wider text-ink-4">Passos do {ferramenta.titulo}:</h5>
                    <ol className="space-y-2">
                      {ferramenta.passos.map((passo, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-body-sm text-ink-3">
                          <span className="w-5 h-5 rounded-full bg-atlantic/10 text-atlantic text-micro font-bold flex items-center justify-center shrink-0">{pIdx + 1}</span>
                          {passo}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {ferramenta.beneficios && (
                  <div className="space-y-3 mb-6">
                    <h5 className="text-micro font-bold uppercase tracking-wider text-ink-4">Benefícios:</h5>
                    <ul className="space-y-2">
                      {ferramenta.beneficios.map((beneficio, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-body-sm text-ink-3">
                          <span role="img" aria-label="check" className="w-4 h-4 text-leaf shrink-0">✓</span>
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {ferramenta.links?.map((link, lIdx) => (
                    <Button key={lIdx} variant="ghost" size="sm" className="text-atlantic hover:text-sun border-b border-atlantic/30 hover:border-sun px-0">
                      {link.label} <span role="img" aria-label="link externo" className="w-3.5 h-3.5 ml-1">🔗</span>
                    </Button>
                  ))}
                  {ferramenta.link && (
                    <Button variant="ghost" size="sm" className="text-atlantic hover:text-sun border-b border-atlantic/30 hover:border-sun px-0">
                      {ferramenta.link.label} <span role="img" aria-label="link externo" className="w-3.5 h-3.5 ml-1">🔗</span>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </StaggeredReveal>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-atlantic text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sun/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <SectionHeader
          badge="Evidência de Mercado"
          title={MERCADO_ESG.titulo}
          titleAccent="Dados que comprovam o retorno do investimento em ESG"
          description={MERCADO_ESG.intro}
          inverted
          className="mb-12"
          gradientTitle={true}
        />

        <StaggeredReveal staggerDelay={100}>
          {MERCADO_ESG.estatisticas.map((stat) => (
            <div key={stat.rotulo} className="text-center p-4 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-colors reveal">
              <div className="text-display-sm sm:text-display-md font-impact font-black text-sun mb-2 group-hover:scale-110 transition-transform">{stat.valor}</div>
              <div className="text-caption sm:text-body-sm font-medium text-white mb-1">{stat.rotulo}</div>
              <div className="text-micro text-ink-4">Fonte: {stat.fonte}</div>
            </div>
          ))}
        </StaggeredReveal>

        <StaggeredReveal staggerDelay={150}>
          {MERCADO_ESG.casos.map((caso) => (
            <article key={caso.nome} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 reveal">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-sun/20 text-sun flex items-center justify-center shrink-0">
                  <span role="img" aria-label="gráfico">📊</span>
                </div>
                <h5 className="text-heading-md font-impact font-bold text-white">{caso.nome}</h5>
              </div>
              <p className="text-body-sm text-ink-3 leading-relaxed mb-4">{caso.descricao}</p>
              <Button variant="ghost" size="sm" className="text-sun hover:text-white border-b border-sun/30 hover:border-white px-0">
                {caso.link.label} <span role="img" aria-label="seta" className="w-3.5 h-3.5 ml-1">→</span>
              </Button>
            </article>
          ))}
        </StaggeredReveal>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-paper-2">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Valor da Adesão"
          title={POR_QUE_ADERIR_MOVIMENTOS.titulo}
          description={POR_QUE_ADERIR_MOVIMENTOS.descricao}
          className="mb-10"
          gradientTitle={true}
        />

        <StaggeredReveal staggerDelay={100}>
          {POR_QUE_ADERIR_MOVIMENTOS.beneficios.map((beneficio) => (
            <article key={beneficio} className="rounded-xl p-6 bg-paper-2 border border-border hover:border-atlantic/50 hover:shadow-card-hover transition-all duration-300 group reveal">
              <div className="w-10 h-10 rounded-xl bg-atlantic/10 text-atlantic flex items-center justify-center mb-4 group-hover:bg-atlantic group-hover:text-white transition-colors">
                <span role="img" aria-label="check" className="w-5 h-5">✓</span>
              </div>
              <p className="text-body-md text-ink-3 leading-relaxed">{beneficio}</p>
            </article>
          ))}
        </StaggeredReveal>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-paper">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <Reveal>
          <div className="rounded-2xl p-8 sm:p-12 bg-atlantic text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-sun/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-sun/20 border border-sun/30 text-sun text-micro font-bold uppercase tracking-widest rounded-full mb-6">
                Próximos Passos
              </span>
              <h2 className="text-display-xs sm:text-display-sm md:text-display-md lg:text-display-lg font-impact font-black uppercase tracking-tight mb-4 gradient-text-ods">
                {ESG_CTA.titulo}
              </h2>
              <p className="text-body-lg sm:text-heading-sm leading-relaxed mb-8 max-w-2xl mx-auto text-ink-2">
                {ESG_CTA.descricao}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {ESG_CTA.botoes.map((btn) => (
                  <Button
                    key={btn.label}
                    variant={btn.variant === 'primary' ? 'cta-empresa' : 'outline'}
                    size="lg"
                    className="min-h-[52px] px-8"
                    onClick={() => (window.location.hash = btn.href.replace('#', ''))}
                  >
                    {btn.label}
                    {btn.variant === 'primary' && <span role="img" aria-label="seta" className="w-4 h-4 ml-2">→</span>}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);