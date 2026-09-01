import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Compass, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';
import { useGsap } from '../hooks/useGsap';
import {
  AMBICAO_DEFINICAO,
  AMBICAO_ORIGEM,
  AMBICAO_PROPOSITO,
  AMBICAO_RESULTADOS,
  AMBICAO_CITACAO,
  MODALIDADES,
  ESTRUTURA_MOVIMENTOS,
  MOVIMENTOS,
} from '../data/ambicao2030';
import {
  ChamadoSection,
  ParaQuemSection,
  OQueNaoMudouSection,
  ComoFazerParteSection,
  ContadorAnimado,
} from '../components/sections/AmbicaoSections';
import { ODS_COLORS } from '../data/constants';

// Imagens institucionais para o slider automático de fundo do Hero (transição suave sem marcadores)
const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2400&auto=format&fit=crop', // Liderança e Governança
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2400&auto=format&fit=crop', // Conservação dos Biomas
  'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=2400&auto=format&fit=crop', // Gestão de Água e Saneamento
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2400&auto=format&fit=crop', // Energia Limpa e Clima
];

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

// Atmosfera por trás das peças de vidro: sem isto o blur não tem o que
// refratar e o "vidro" vira apenas um retângulo translúcido.
const GradientMesh = () => (
 <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
 <div
 className="absolute -top-32 -left-24 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-[0.28]"
 style={{ background: 'radial-gradient(circle, #4C6B8B, transparent 68%)' }}
 />
 <div
 className="absolute top-1/3 -right-40 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-[0.22]"
 style={{ background: 'radial-gradient(circle, #CCB146, transparent 66%)' }}
 />
 <div
 className="absolute -bottom-40 left-1/3 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-[0.2]"
 style={{ background: 'radial-gradient(circle, #297D6D, transparent 68%)' }}
 />
 </div>
);

// 18 ODS: os 17 da ONU (2015) + o ODS 18 (Igualdade Étnico-Racial),
// de proposição brasileira, implementado pelo Pacto Global em 2025.
// A contagem espelha ODS_COLORS/ODS_NAMES.
const STATS = [
 { value: '10', label: 'Movimentos' },
 { value: String(ODS_COLORS.length), label: 'ODS conectados' },
 { value: '2030', label: 'Horizonte' },
];

// Componentes para Bento Grid
const BentoCard = ({ children, className = '', delay = 0 }) => (
 <Reveal delay={delay} className={className}>
 {children}
 </Reveal>
);

// 2 por fileira: 10 Movimentos fecham em 5 fileiras exatas, sem card órfão.
// Também é o que dá o logo maior — o canvas único (691×142) é ditado pelo
// lockup mais largo ("Transparência 100%"), então a altura do tipo depende
// Card individual dos Movimentos com ícones dos ODS integrados
const MovementCard = ({ movement, index, navigate }) => (
  <button
    onClick={() => navigate('movimento', movement.id)}
    className="group relative flex flex-col justify-between w-full lg:w-[calc(50%-0.75rem)] min-h-[240px] bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-un-gold hover:-translate-y-1.5 overflow-hidden text-left cursor-pointer"
  >
    {/* Top Brand Color Bar */}
    <div
      className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
      style={{ backgroundColor: movement.color }}
    />

    {/* Subtle Hover Background Tint */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
      style={{ backgroundColor: movement.color }}
    />

    {/* Card Header: Number & ODS Badges */}
    <div className="relative z-10 flex items-center justify-between w-full mb-3 flex-wrap gap-2">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
        Movimento {String(index + 1).padStart(2, '0')}
      </span>

      {/* Badges dos ODS com miniaturas oficiais */}
      <div className="flex items-center gap-1.5">
        {movement.ods?.map((odsNum) => (
          <span
            key={odsNum}
            className="inline-flex items-center gap-1 text-[9px] font-black uppercase px-2 py-0.5 rounded-full text-white tracking-wider shadow-sm"
            style={{ backgroundColor: movement.color }}
          >
            <img
              src={`${import.meta.env.BASE_URL}ods/ods-${odsNum}.jpg`}
              alt={`ODS ${odsNum}`}
              className="w-3.5 h-3.5 rounded-full object-cover shrink-0"
            />
            ODS {odsNum}
          </span>
        ))}
      </div>
    </div>

    {/* Logo Centralizado do Movimento */}
    <div className="relative z-10 flex-1 flex items-center justify-center w-full my-3 px-2">
      <img
        src={`${import.meta.env.BASE_URL}movimentos/${movement.id}.png`}
        alt={movement.name}
        loading="lazy"
        className="w-full h-auto max-h-16 md:max-h-20 object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Compromisso / Teaser */}
    <p className="relative z-10 text-xs md:text-sm text-gray-600 font-light line-clamp-2 my-2 leading-relaxed">
      {movement.ambicao}
    </p>

    {/* Footer do Card */}
    <div className="relative z-10 flex items-center justify-between w-full pt-4 border-t border-gray-100">
      <span className="text-gray-700 text-xs font-bold group-hover:text-un-blue transition-colors uppercase tracking-wider">
        Ver compromissos 2030
      </span>
      <span
        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 shadow-sm"
        style={{ backgroundColor: movement.color }}
      >
        <ArrowUpRight className="w-4 h-4" />
      </span>
    </div>
  </button>
);

// Componente FAQ / Acordeão da Estrutura dos Movimentos incorporado dentro de "Escolha os Movimentos"
const EstruturaFaqAccordeon = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <div className="mt-14 bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-md">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <span className="inline-flex items-center gap-2 text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-1">
            <HelpCircle className="w-4 h-4 text-un-gold" /> FAQ & Método
          </span>
          <h3 className="font-display font-black text-2xl md:text-3xl text-gray-900 uppercase tracking-tight">
            Estrutura dos Movimentos
          </h3>
        </div>
        <p className="text-gray-500 text-xs md:text-sm font-light max-w-md">
          Entenda as etapas metodológicas que regem a evolução e os compromissos de cada Movimento.
        </p>
      </div>

      <div className="divide-y divide-gray-100">
        {ESTRUTURA_MOVIMENTOS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.id || i} className="py-4">
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between text-left font-display font-bold text-base md:text-lg text-gray-900 hover:text-un-blue transition-colors focus:outline-none cursor-pointer py-1"
              >
                <span className="flex items-center gap-3">
                  <span className="font-display font-black text-un-gold text-sm md:text-base">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  <span>{item.title}</span>
                </span>
                <span className="shrink-0 w-8 h-8 rounded-full bg-un-surface flex items-center justify-center text-un-blue font-bold ml-4">
                  {isOpen ? <ChevronUp className="w-4 h-4 text-un-gold" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </span>
              </button>
              {isOpen && (
                <div className="mt-3 pl-8 text-gray-600 text-sm md:text-base leading-relaxed font-light animate-fade-in border-l-2 border-un-gold/40">
                  {item.description}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const AmbicaoPage = ({ navigate }) => {
  // Slider automático de fundo do Hero (transição suave de imagens sem marcadores)
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Parallax do hero
  const heroRef = useGsap(({ gsap, raiz }) => {
    const foto = raiz.querySelector('[data-anim="hero-foto"]');
    const conteudo = raiz.querySelector('[data-anim="hero-conteudo"]');
    if (foto) {
      gsap.to(foto, {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: raiz, start: 'top top', end: 'bottom top', scrub: true },
      });
    }
    if (conteudo) {
      gsap.to(conteudo, {
        yPercent: -6,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: { trigger: raiz, start: 'top top', end: 'bottom top', scrub: true },
      });
    }
  }, []);

  return (
    <div className="animate-fade-in">
      {/* ============ HERO EDITORIAL ============ */}
      <section
        ref={heroRef}
        className="relative bg-un-blue overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28"
      >
        {/* Slider de imagens de fundo do Hero (imagens dos movimentos) */}
        {MOVIMENTOS.map((movement, idx) => (
          <img
            key={movement.id}
            data-anim={idx === 0 ? "hero-foto" : undefined}
            src={movement.image}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover object-center scale-110 will-change-transform transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-35' : 'opacity-0 pointer-events-none'
            }`}
          />
        ))}

        {/* Vinheta */}
        <div className="absolute inset-0 bg-gradient-to-r from-un-blue via-un-blue/90 to-un-blue/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-un-blue via-transparent to-un-blue/60" />

        {/* Glow de acento */}
        <div
          className="absolute -right-20 md:-right-4 top-1/2 -translate-y-1/2 w-[460px] h-[460px] md:w-[720px] md:h-[720px] rounded-full blur-3xl animate-glow pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(204,177,70,0.28), transparent 65%)' }}
        />

        <div className="absolute inset-0 text-white/[0.05]">
          <DotGrid className="w-full h-full" />
        </div>
        <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-un-footer to-transparent pointer-events-none" />

        {/* Espectro ODS */}
        <div className="absolute bottom-0 inset-x-0 h-1.5 flex z-10">
          {ODS_COLORS.map((c, i) => (
            <span key={i} className="flex-1" style={{ backgroundColor: c }} />
          ))}
        </div>

        <div data-anim="hero-conteudo" className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 will-change-transform">
          <div className="max-w-3xl">
            <span
              className="inline-flex items-center gap-2 text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 animate-fade-in-up"
              style={{ animationDelay: '0ms' }}
            >
              <span className="w-8 h-px bg-un-gold" /> Pacto Global da ONU · Rede Brasil
            </span>

            {/* Lockup com Logo do Pacto + Marca Ambição 2030.
                O logo carrega o nome da iniciativa, entao o titulo tipografico
                "AMBIÇÃO 2030" saiu do hero para nao duplicar a marca. O <h1>
                permanece no DOM em sr-only: a pagina continua com um unico
                cabecalho de primeiro nivel para leitores de tela e para SEO. */}
            <div className="flex flex-col gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: '90ms' }}>
              <h1 className="sr-only">Ambição 2030 — Pacto Global da ONU · Rede Brasil</h1>
              <div className="flex items-center gap-4 md:gap-6">
                <img
                  src={`${import.meta.env.BASE_URL}logo-pacto-white.png`}
                  alt="Pacto Global da ONU · Rede Brasil"
                  className="h-14 md:h-20 lg:h-24 object-contain shrink-0"
                />
                <span className="h-12 md:h-16 w-px bg-white/25" />
                <img
                  src={`${import.meta.env.BASE_URL}logo-ambicao-2030.png`}
                  alt="Ambição 2030"
                  className="h-14 md:h-20 lg:h-24 object-contain shrink-0"
                />
              </div>
            </div>

            <p
              className="text-white/80 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mb-10 animate-fade-in-up"
              style={{ animationDelay: '180ms' }}
            >
              {AMBICAO_DEFINICAO}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up items-stretch sm:items-center"
              style={{ animationDelay: '340ms' }}
            >
              {/* Botão Quero Engajar em Ouro Sólido */}
              <button
                onClick={() => navigate('participar')}
                className="group inline-flex items-center justify-center gap-3 bg-un-gold text-un-blue font-bold uppercase tracking-wider text-xs md:text-sm px-8 py-4 rounded-full shadow-xl shadow-un-gold/20 hover:bg-white hover:text-un-blue hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-un-gold focus:ring-offset-2 focus:ring-offset-un-blue"
              >
                <span>Quero Engajar</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#linha-tempo"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#linha-tempo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group inline-flex items-center justify-center gap-2 min-h-[44px] text-white/80 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors px-4 py-3 cursor-pointer"
              >
                Descobrir a Ambição
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

  {/* ============ O CHAMADO ============ */}
  <ChamadoSection />
  {/* ============ PARA QUEM (Secao 04: Perfil das 3 personas) ============ */}
  <ParaQuemSection />
  {/* ============ O QUE NAO MUDOU (Secao 08) ============ */}
  <OQueNaoMudouSection />
  {/* ============ LINHA DO TEMPO (Acima dos Big Numbers) ============ */}
  <section id="linha-tempo" className="py-16 md:py-24 bg-un-footer text-white overflow-hidden scroll-mt-24">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
      <BentoCard delay={100}>
        <div className="glass-far rounded-3xl !border-t-2 !border-t-un-gold p-8 md:p-12">
          <div className="relative grid lg:grid-cols-12 gap-4 lg:gap-12 pb-8 border-b border-white/10 mb-10">
            <span className="lg:col-span-4 block text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              Nossa Trajetória
            </span>
            <div className="lg:col-span-8">
              <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-tight text-white mb-2">
                Linha do Tempo
              </h2>
              <p className="text-white/75 text-sm md:text-base leading-relaxed font-light">
                {AMBICAO_ORIGEM.description}
              </p>
            </div>
          </div>

          <div className="relative pt-4">
            <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 list-none m-0 p-0">
              <span
                aria-hidden="true"
                className="hidden lg:block absolute left-0 right-0 top-[7px] h-px bg-white/15"
              />
              {AMBICAO_ORIGEM.timeline.map((item, i) => {
                const isLast = i === AMBICAO_ORIGEM.timeline.length - 1;
                return (
                  <li key={item.year} className="relative bg-white/5 p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <span
                        className="relative block w-3.5 h-3.5 rounded-full ring-4 ring-un-footer mb-3"
                        style={{
                          backgroundColor: isLast ? '#CCB146' : '#AECFE6',
                          boxShadow: isLast ? '0 0 18px rgba(204,177,70,0.6)' : 'none',
                        }}
                      />
                      <span className="block font-display font-black text-un-gold text-2xl md:text-3xl leading-none tabular-nums mb-2">
                        {item.year}
                      </span>
                      <span className="block font-bold text-white text-xs md:text-sm leading-snug mb-1">
                        {item.title}
                      </span>
                    </div>
                    <span className="block text-un-blue-3/80 text-[11px] leading-relaxed font-light mt-3 border-t border-white/10 pt-3">
                      {item.description}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </BentoCard>
    </div>
  </section>

  {/* ============ BIG NUMBERS (EM NÚMEROS, HOJE) ============ */}
  <section id="big-numbers" className="py-20 md:py-28 bg-un-footer overflow-hidden border-t border-white/10">
    <GradientMesh />
    <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
      <Reveal>
        <div className="max-w-3xl mb-12">
          <span className="flex items-center gap-3 text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4">
            <span className="w-10 h-px bg-un-gold/60" /> Impacto Real
          </span>
          <h2 className="font-display font-black uppercase tracking-tight text-white text-4xl md:text-6xl leading-[0.95]">
            Em números, <span className="text-un-gold">hoje</span>
          </h2>
          <p className="text-un-blue-3 text-base md:text-lg font-light mt-4">
            {AMBICAO_RESULTADOS.alcance}
          </p>
        </div>
      </Reveal>

      {/* Grade de Big Numbers com variação de cores institucionais */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AMBICAO_RESULTADOS.stats.map((stat, i) => (
          <BentoCard key={stat.label} delay={i * 80}>
            <div
              className="glass rounded-3xl p-8 flex flex-col justify-between h-full border-l-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderLeftColor: stat.color || '#CCB146' }}
            >
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-white/50 block mb-2">
                  Indicador {String(i + 1).padStart(2, '0')}
                </span>
                <ContadorAnimado
                  valor={stat.value}
                  className="block font-display font-black text-4xl md:text-5xl lg:text-6xl leading-none tabular-nums"
                  style={{ color: stat.color || '#CCB146' }}
                />
              </div>
              <p className="text-white text-sm md:text-base font-light leading-relaxed border-t border-white/10 pt-4 mt-2">
                {stat.label}
              </p>
            </div>
          </BentoCard>
        ))}
      </div>

      <p className="text-white/50 text-xs font-light mt-8 text-center">
        {AMBICAO_RESULTADOS.nota}
      </p>
    </div>
  </section>

  {/* ============ ESCOLHA OS MOVIMENTOS (com ODS nos Cards + FAQ da Estrutura) ============ */}
  <section id="movimentos" className="py-20 md:py-28 bg-un-surface scroll-mt-24">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        inverted={false}
        badge="Ambição 2030"
        title="Escolha os"
        titleAccent="Movimentos"
        description="Cada Movimento mobiliza empresas em torno de uma causa urgente, com compromissos concretos e métricas dos ODS a serem alcançados até 2030."
      />

      {/* Bento grid dos 10 Movimentos */}
      <div className="flex flex-wrap justify-center gap-6">
        {MOVIMENTOS.map((movement, index) => (
          <MovementCard
            key={movement.id}
            movement={movement}
            index={index}
            navigate={navigate}
          />
        ))}
      </div>

      {/* FAQ da Estrutura dos Movimentos incorporado dentro de "Escolha os Movimentos" */}
      <EstruturaFaqAccordeon />
    </div>
  </section>

  {/* ============ MODALIDADES DE ENGAJAMENTO ============ */}
  <section id="modalidades" className="py-20 md:py-28 bg-white scroll-mt-24">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Como participar"
        title="Modalidades de"
        titleAccent="Engajamento"
        description="As empresas escolhem seu nível de participação na jornada dos Movimentos da Ambição 2030."
      />
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {MODALIDADES.map((mod, i) => (
          <BentoCard key={mod.id} delay={i * 120}>
            <div
              className={`group relative h-full rounded-3xl p-8 md:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                i === 0
                  ? 'bg-un-surface border border-gray-100 hover:shadow-xl'
                  : 'bg-un-blue text-white hover:shadow-2xl'
              }`}
            >
              <div>
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
                  className={`relative font-display font-black text-2xl md:text-3xl tracking-tight mb-4 ${
                    i === 0 ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {mod.title}
                </h3>
                <p
                  className={`relative text-base md:text-lg leading-relaxed font-light ${
                    i === 0 ? 'text-gray-600' : 'text-un-blue-3'
                  }`}
                >
                  {mod.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200/40">
                <button
                  onClick={() => navigate('participar')}
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                    i === 0 ? 'text-un-blue hover:text-un-gold' : 'text-un-gold hover:text-white'
                  }`}
                >
                  Saiba como engajar
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  </section>

  {/* ============ CITAÇÃO INSTITUCIONAL DO RELATÓRIO (Relocada para o final) ============ */}
  <section className="py-16 md:py-24 bg-un-footer text-white overflow-hidden border-t border-white/10">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
      <Reveal>
        <figure className="relative max-w-4xl mx-auto text-center">
          <span
            aria-hidden="true"
            className="block font-serif text-un-gold/25 text-6xl md:text-8xl leading-none select-none mb-2"
          >
            “
          </span>
          <blockquote className="font-serif italic text-white text-xl md:text-3xl lg:text-4xl leading-relaxed">
            {AMBICAO_CITACAO.quote}
          </blockquote>
          <figcaption className="mt-6 flex flex-col items-center gap-1">
            <span className="text-un-gold text-xs font-bold uppercase tracking-[0.25em]">
              {AMBICAO_CITACAO.author} · {AMBICAO_CITACAO.role}
            </span>
            <span className="text-white/60 text-xs font-light">
              {AMBICAO_CITACAO.source}
            </span>
          </figcaption>
        </figure>
      </Reveal>
    </div>
  </section>

  {/* ============ COMO FAZER PARTE — FECHO & CTA ============ */}
  <ComoFazerParteSection />
</div>
);
};
