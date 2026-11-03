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
import { ConceptualSection } from '../components/shared/ConceptualSection';
import { ESGODSMatrix } from '../components/shared/ESGODSMatrix';
import { MovementCard } from '../components/shared/MovementCard';
import { Reveal } from '../components/shared/Reveal';
import { StaggeredReveal } from '../components/shared/Reveal';
import {
  FUNDAMENTACAO_CONCEITUAL,
  ODS_TIMELINE,
  ESG_ODS_CONEXAO,
  MOVIMENTOS_AMBICAO_2030,
  METAS_AMBICAO_ODS,
  POR_QUE_ADERIR_MOVIMENTOS,
  ESG_CTA,
} from '../data/esgOds';
import { ODS_LIST } from '../data/esgOds';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

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

export const ODSPage = () => (
  <div className="animate-fade-in bg-paper min-h-screen">
    <PageHero
      category="Agenda 2030 • Objetivos de Desenvolvimento Sustentável"
      title="Os ODS e a Agenda 2030"
      description="Conheça os 18 Objetivos de Desenvolvimento Sustentável (17 globais + ODS 18 brasileiro), a linha do tempo histórica da Agenda 2030, a conexão indissociável com os pilares ESG, os Movimentos da Ambição 2030 e como sua empresa pode atuar nos ODS prioritários."
      image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      color="bg-leaf/90"
      gradientTitle={true}
    />

    <ConceptualSection gradientTitle={true} />

    <Timeline items={ODS_TIMELINE} title="Linha do Tempo: A Agenda 2030 e os ODS" color="leaf" />

    <section id="ods" className="py-12 md:py-20 bg-paper-2">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Agenda 2030"
          title="Os 18 Objetivos de Desenvolvimento Sustentável"
          titleAccent="Ícones oficiais da ONU + ODS 18 brasileiro"
          description="Os ODS reúnem os grandes desafios e vulnerabilidades da sociedade. Apontam os principais itens a serem acompanhados de perto por empresas que querem estar em conformidade com práticas ESG. O Brasil propôs e o Pacto Global implementou o ODS 18 em 2025."
          className="mb-10"
          gradientTitle={true}
        />

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12 list-none p-0 m-0">
          {ODS_LIST.map((ods) => (
            <li
              key={ods.id}
              className="relative aspect-square rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group reveal"
              style={{ "--reveal-delay": `${(ods.id % 6) * 50}ms` }}
            >
              <img
                src={`/ods/ods-${ods.id}.jpg`}
                alt={`ODS ${ods.id} — ${ods.name}`}
                loading="lazy"
                width="160"
                height="160"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/90 via-paper/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-display-xs font-impact font-black" style={{ color: ods.color }}>{ods.id}</span>
                <p className="text-micro font-medium leading-snug mt-1">{ods.name}</p>
              </div>
              {ods.id === 18 && (
                <span className="absolute inset-0 rounded-xl pointer-events-none ring-2" style={{ ringColor: ODS_COLORS[17] }} aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>

        <Reveal>
          <div className="rounded-2xl p-6 sm:p-8 bg-purple/5 border border-purple/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple/10 rounded-full blur-2xl pointer-events-none" />
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                  <img src="/ods/ods-18.jpg" alt="ODS 18" className="w-12 h-12 object-cover rounded-lg" loading="lazy" />
                </div>
                <div>
                  <h4 className="text-heading-md font-impact font-bold text-purple uppercase tracking-tight">
                    ODS 18 — Igualdade Étnico-Racial
                  </h4>
                  <p className="text-body-sm text-ink-3">Proposição brasileira, implementada pelo Pacto Global em 2025</p>
                </div>
              </div>
              <Button variant="outline" className="shrink-0 border-purple text-purple hover:bg-purple hover:text-white">
                <span role="img" aria-label="link externo" className="w-3.5 h-3.5 mr-2">🔗</span> Saiba mais
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-paper border-y border-border-strong">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Ambição 2030"
          title="Os 10 Movimentos de Aceleração"
          titleAccent="Logos oficiais • Metas públicas auditáveis • Conectando ESG aos ODS"
          description="A Estratégia Ambição 2030 transforma intenções genéricas em compromissos públicos auditáveis e mensuráveis. Cada movimento conecta um pilar ESG a ODS prioritários com metas claras, prazos definidos e logos oficiais."
          className="mb-10"
          gradientTitle={true}
        />

        <StaggeredReveal staggerDelay={100}>
          {MOVIMENTOS_AMBICAO_2030.map((mov, idx) => (
            <MovementCard key={mov.id} mov={mov} index={idx} />
          ))}
        </StaggeredReveal>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-paper border-y border-border-strong">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Metas Transformadoras"
          title="Exemplos de Metas do Programa Ambição pelos ODS"
          description="As metas visam traduzir os ODS para os negócios, com foco em ampliar o impacto das empresas em desafios globais. O programa permite ir além do progresso incremental e intensificar a mudança transformadora."
          className="mb-10"
          gradientTitle={true}
        />

        <StaggeredReveal staggerDelay={100}>
          {METAS_AMBICAO_ODS.map((meta, idx) => (
            <article
              key={meta.ods}
              className="group relative rounded-2xl p-6 bg-paper-2 border border-border hover:border-sun/40 hover:shadow-card-hover transition-all duration-300 reveal"
              style={{ "--reveal-delay": `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-impact font-black text-lg" style={{ backgroundColor: `var(--ods-${meta.ods})` }}>
                  {meta.ods}
                </div>
                <span className="text-micro font-bold uppercase tracking-widest text-ink-4">ODS {meta.ods}</span>
              </div>
              <h4 className="text-heading-md font-impact font-bold text-ink uppercase tracking-tight mb-3">{meta.titulo}</h4>
              <p className="text-body-sm text-ink-3 leading-relaxed">{meta.meta}</p>
            </article>
          ))}
        </StaggeredReveal>
      </div>
    </section>

    <ESGODSMatrix />

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
          <div className="rounded-2xl p-8 sm:p-12 bg-leaf text-paper text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-sun/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-atlantic/10 rounded-full blur-3xl pointer-events-none" />

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
                    variant={btn.variant === 'primary' ? 'cta-ods' : 'outline'}
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