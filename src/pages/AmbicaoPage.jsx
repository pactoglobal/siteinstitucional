import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';
import {
  AMBICAO_DEFINICAO,
  AMBICAO_INTRO,
  MODALIDADES,
  ESTRUTURA_MOVIMENTOS,
  MOVIMENTOS,
} from '../data/ambicao2030';
import { ODS_COLORS } from '../data/constants';

// Anel de ODS (conic-gradient) — evoca a roda dos Objetivos
const odsRing = `conic-gradient(${ODS_COLORS.map((c, i) => {
  const start = (i / ODS_COLORS.length) * 360;
  const end = ((i + 1) / ODS_COLORS.length) * 360;
  return `${c} ${start}deg ${end}deg`;
}).join(', ')})`;

// Camada de textura: malha de pontos sutil
const DotGrid = ({ className = '' }) => (
  <svg className={className} aria-hidden="true">
    <defs>
      <pattern id="ambicao-dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#ambicao-dots)" />
  </svg>
);

// Wrapper de staged reveal no scroll
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const STATS = [
  { value: '10', label: 'Movimentos' },
  { value: '17', label: 'ODS conectados' },
  { value: '2030', label: 'Horizonte' },
];

export const AmbicaoPage = ({ navigate }) => (
  <div className="animate-fade-in">
    {/* ============ HERO EDITORIAL ============ */}
    <section className="relative bg-un-blue overflow-hidden pt-36 pb-24 md:pt-44 md:pb-36">
      {/* Glow difuso atrás da roda — profundidade atmosférica */}
      <div
        className="absolute -right-20 md:-right-4 top-1/2 -translate-y-1/2 w-[460px] h-[460px] md:w-[720px] md:h-[720px] rounded-full blur-3xl animate-glow pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(204,177,70,0.35), transparent 65%)' }}
      />

      {/* Roda ODS sangrando pela borda direita */}
      <div className="absolute -right-24 md:-right-12 top-1/2 -translate-y-1/2 w-[440px] h-[440px] md:w-[680px] md:h-[680px] pointer-events-none animate-ring-in">
        {/* Anel externo fino */}
        <div
          className="absolute inset-0 rounded-full border border-white/10"
          style={{ transform: 'scale(1.08)' }}
        />
        <div
          className="w-full h-full rounded-full animate-spin-slow opacity-90"
          style={{
            background: odsRing,
            WebkitMaskImage:
              'radial-gradient(circle, transparent 30%, black 31%, black 68%, transparent 69%)',
            maskImage:
              'radial-gradient(circle, transparent 30%, black 31%, black 68%, transparent 69%)',
          }}
        />
        {/* Núcleo com selo "2030" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display font-black text-white/10 text-6xl md:text-8xl tracking-tighter select-none">
            2030
          </span>
        </div>
      </div>

      {/* Vinheta para legibilidade do texto à esquerda */}
      <div className="absolute inset-0 bg-gradient-to-r from-un-blue via-un-blue/95 to-transparent" />
      <div className="absolute inset-0 text-white/[0.05]">
        <DotGrid className="w-full h-full" />
      </div>
      {/* Grão sutil + fade inferior para a próxima seção */}
      <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-un-blue to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-2 text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="w-8 h-px bg-un-gold" /> Pacto Global da ONU · Rede Brasil
          </span>

          <h1
            className="font-display font-black uppercase leading-[0.9] mb-8 animate-fade-in-up"
            style={{ animationDelay: '90ms' }}
          >
            <span className="block text-5xl md:text-7xl lg:text-[8.5rem] text-white tracking-tight">
              Ambição
            </span>
            <span
              className="block text-6xl md:text-8xl lg:text-[10rem] tracking-tight"
              style={{ color: 'transparent', WebkitTextStroke: '2px #CCB146' }}
            >
              2030
            </span>
          </h1>

          <p
            className="text-white/80 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up"
            style={{ animationDelay: '180ms' }}
          >
            {AMBICAO_DEFINICAO}
          </p>

          {/* Stat row editorial */}
          <div
            className="flex flex-wrap items-center gap-8 md:gap-12 mb-10 animate-fade-in-up"
            style={{ animationDelay: '260ms' }}
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="flex flex-col relative">
                {i > 0 && (
                  <span className="hidden md:block absolute -left-6 top-1 bottom-1 w-px bg-white/15" />
                )}
                <span className="font-display font-black text-3xl md:text-5xl text-white leading-none">
                  {s.value}
                </span>
                <span className="text-un-blue-3 text-[10px] md:text-xs uppercase tracking-widest mt-2 font-bold">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '340ms' }}
          >
            <Button variant="primary" icon={ArrowRight} onClick={() => navigate('participar')}>
              Quero Aderir
            </Button>
            <a
              href="#movimentos"
              className="group inline-flex items-center gap-2 min-h-[44px] text-white/70 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors px-2 py-3"
            >
              Conhecer os Movimentos
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* ============ MANIFESTO / O QUE É ============ */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-10 rounded-full bg-un-gold" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-un-blue">
                O que é
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight leading-[1.1] text-gray-900">
              Compromissos<br />que <span className="text-un-blue-1">movem<br />o Brasil</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-8 lg:pt-4">
            <p className="text-gray-800 text-xl md:text-2xl lg:text-3xl leading-[1.4] font-light max-w-3xl">
              {AMBICAO_INTRO}
            </p>
            <div className="mt-10 pt-10 border-t border-gray-100 grid sm:grid-cols-2 gap-x-12 gap-y-4">
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                São <strong className="font-semibold text-gray-800">10 Movimentos</strong> temáticos, cada um
                com uma ambição coletiva e compromissos concretos rumo a 2030.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
                Conectados aos <strong className="font-semibold text-gray-800">Objetivos de Desenvolvimento
                Sustentável</strong>, traduzem a Agenda 2030 em ação empresarial.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* ============ MOVIMENTOS — ÍNDICE EDITORIAL ============ */}
    <section id="movimentos" className="py-20 md:py-28 bg-un-blue relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 text-white/[0.04]"><DotGrid className="w-full h-full" /></div>
      <div className="absolute inset-0 grain-overlay opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <SectionHeader
          inverted
          barColor="bg-un-gold"
          badge="Ambição 2030"
          title="Os 10"
          titleAccent="Movimentos"
          description="Cada Movimento mobiliza empresas em torno de uma causa urgente, com compromissos concretos a serem alcançados até 2030."
        />

        <div className="grid md:grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {MOVIMENTOS.map((mov, i) => (
            <Reveal key={mov.id} delay={(i % 2) * 80}>
              <button
                onClick={() => navigate('movimento', mov.id)}
                className="group relative flex items-stretch gap-5 w-full h-full bg-un-blue p-6 md:p-7 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-un-gold overflow-hidden"
              >
                {/* Color-wash do movimento no hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: mov.color }}
                />
                {/* Spine de cor do movimento */}
                <span
                  className="relative w-1 rounded-full shrink-0 transition-all duration-300 group-hover:w-1.5"
                  style={{ backgroundColor: mov.color }}
                />
                {/* Número editorial */}
                <span
                  className="relative font-display font-black text-2xl md:text-3xl leading-none shrink-0 w-10 transition-transform duration-300 group-hover:-translate-y-0.5"
                  style={{ color: mov.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Conteúdo */}
                <div className="relative flex-1 min-w-0">
                  <div className="h-9 md:h-10 flex items-center mb-3">
                    <img
                      src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                      alt={mov.name}
                      className="max-h-9 md:max-h-10 w-auto object-contain object-left brightness-0 invert opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <p className="text-un-blue-3 text-xs md:text-sm leading-relaxed font-light line-clamp-2">
                    {mov.ambicao}
                  </p>
                </div>
                {/* Seta */}
                <span className="relative self-center shrink-0 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/40 group-hover:translate-x-0.5 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ============ MODALIDADES DE ENGAJAMENTO ============ */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          barColor="bg-un-green"
          badge="Como participar"
          title="Modalidades de"
          titleAccent="Engajamento"
          description="Empresas participantes assinam a Carta de Compromisso aos Movimentos e escolhem o nível de engajamento."
        />
        <div className="grid md:grid-cols-5 gap-5 md:gap-6">
          {MODALIDADES.map((mod, i) => (
            <Reveal
              key={mod.id}
              delay={i * 120}
              className={i === 0 ? 'md:col-span-2' : 'md:col-span-3'}
            >
              <div
                className={`group relative h-full rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  i === 0
                    ? 'bg-un-surface border border-gray-100 hover:shadow-xl'
                    : 'bg-un-blue text-white hover:shadow-2xl'
                }`}
              >
                {i !== 0 && (
                  <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />
                )}
                <div
                  className={`relative w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    i === 0 ? 'bg-un-blue/5' : 'bg-white/10'
                  }`}
                >
                  {i === 0 ? (
                    <Sparkles className="w-5 h-5 text-un-blue" />
                  ) : (
                    <Compass className="w-5 h-5 text-un-gold" />
                  )}
                </div>
                <h3
                  className={`relative font-display font-black text-2xl md:text-3xl tracking-tight mb-3 ${
                    i === 0 ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {mod.title}
                </h3>
                <p
                  className={`relative text-sm md:text-base leading-relaxed font-light ${
                    i === 0 ? 'text-gray-600' : 'text-un-blue-3'
                  }`}
                >
                  {mod.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ============ ESTRUTURA DOS MOVIMENTOS — FLUXO NUMERADO ============ */}
    <section className="py-20 md:py-28 bg-un-surface">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          barColor="bg-un-blue"
          badge="Como funciona"
          title="Estrutura dos"
          titleAccent="Movimentos"
          description="Cinco elementos organizam a forma como as empresas atuam e entregam seus compromissos."
        />
        <div className="space-y-px bg-gray-200/60 rounded-3xl overflow-hidden border border-gray-100">
          {ESTRUTURA_MOVIMENTOS.map((item, i) => (
            <Reveal key={item.id} delay={i * 70}>
              <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 bg-white hover:bg-un-surface p-7 md:p-9 transition-colors duration-300">
                <span className="font-display font-black text-4xl md:text-5xl text-un-blue/15 group-hover:text-un-gold transition-colors duration-300 leading-none shrink-0 md:w-24">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-black text-lg md:text-2xl text-gray-900 tracking-tight shrink-0 md:w-72 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light flex-1">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* ============ CTA ============ */}
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <Reveal>
          <div className="relative bg-un-blue rounded-[2.5rem] p-10 md:p-20 overflow-hidden shadow-2xl">
            {/* Glow de acento */}
            <div
              className="absolute -top-16 -right-10 w-72 h-72 rounded-full blur-3xl opacity-40 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(204,177,70,0.5), transparent 70%)' }}
            />
            {/* Espectro ODS na base */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
              {ODS_COLORS.map((c, i) => (
                <span key={i} className="flex-1" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="absolute inset-0 text-white/[0.05]"><DotGrid className="w-full h-full" /></div>
            <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-[1.1] mb-5">
                Sua empresa na <span className="text-un-gold">Ambição 2030</span>
              </h2>
              <p className="text-un-blue-3 text-base md:text-xl font-light mb-9 leading-relaxed">
                Assine a Carta de Compromisso e some sua empresa ao movimento coletivo rumo aos Objetivos
                de Desenvolvimento Sustentável.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" icon={ArrowRight} onClick={() => navigate('participar')}>
                  Quero Aderir
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white hover:text-un-blue"
                  onClick={() => navigate('home')}
                >
                  Voltar ao início
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);
