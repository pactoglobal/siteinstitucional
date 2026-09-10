import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Compass } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';
import { useGsap } from '../hooks/useGsap';
import {
 AMBICAO_DEFINICAO,
 AMBICAO_INTRO,
 AMBICAO_ORIGEM,
 AMBICAO_PROPOSITO,
 AMBICAO_RESULTADOS,
 AMBICAO_CITACAO,
 MODALIDADES,
 ESTRUTURA_MOVIMENTOS,
 ESTRUTURA_MOVIMENTOS_INTRO,
 MOVIMENTOS,
} from '../data/ambicao2030';
import {
 ChamadoSection,
 ComoFazerParteSection,
 ContadorAnimado,
} from '../components/sections/AmbicaoSections';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

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
const MovementCard = ({ movement, index, navigate }) => (
  <button
    onClick={() => navigate('movimento', movement.id)}
    className="group relative flex flex-col justify-between w-full lg:w-[calc(50%-0.75rem)] min-h-[220px] bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-un-gold hover:-translate-y-1.5 overflow-hidden text-left cursor-pointer"
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

    {/* Card Header: Number & ODS Pill */}
    <div className="relative z-10 flex items-center justify-between w-full mb-3">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
        Movimento {String(index + 1).padStart(2, '0')}
      </span>
      <span
        className="text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full text-white tracking-wider shadow-sm"
        style={{ backgroundColor: movement.color }}
      >
        ODS {movement.ods?.join(', ')}
      </span>
    </div>

    {/* Logo Centralizado */}
    <div className="relative z-10 flex-1 flex items-center justify-center w-full my-2 px-2">
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
        {/* Slider de imagens de fundo do Hero (sem marcadores, transição suave cross-fade) */}
        {HERO_SLIDES.map((slideUrl, idx) => (
          <img
            key={slideUrl}
            data-anim={idx === 0 ? "hero-foto" : undefined}
            src={slideUrl}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover object-center scale-110 will-change-transform transition-opacity duration-1000 ease-in-out ${
              idx === currentSlideIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
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

            <h1
              className="font-display font-black uppercase leading-[0.9] mb-8 animate-fade-in-up"
              style={{ animationDelay: '90ms' }}
            >
              <span className="block text-5xl md:text-7xl lg:text-[8.5rem] text-white tracking-tight">
                Ambição
              </span>
              <span className="block text-5xl md:text-7xl lg:text-[8.5rem] text-un-gold tracking-tight">
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
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up items-stretch sm:items-center"
              style={{ animationDelay: '340ms' }}
            >
              {/* Botão Quero Aderir em Ouro Sólido */}
              <button
                onClick={() => navigate('participar')}
                className="group inline-flex items-center justify-center gap-3 bg-un-gold text-un-blue font-bold uppercase tracking-wider text-xs md:text-sm px-8 py-4 rounded-full shadow-xl shadow-un-gold/20 hover:bg-white hover:text-un-blue hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-un-gold focus:ring-offset-2 focus:ring-offset-un-blue"
              >
                <span>Quero Aderir</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#oque-e"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#oque-e')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

 {/* ============ O CHAMADO ============
 Abertura narrativa (texto oficial da RBPG). Entra entre o hero e
 o bloco escuro: dá um respiro claro antes do vidro e é onde a
 página conta a origem em prosa, antes de virar dado. */}
 <ChamadoSection />

 {/* ============ O QUE É A AMBIÇÃO 2030 ============
 Continuação da zona escura do hero: é aqui que o vidro faz
 sentido — há atmosfera atrás para refratar e o contraste do
 texto sobre escuro fica seguro. */}
 <section
 id="oque-e"
 className="relative py-20 md:py-32 bg-un-footer overflow-hidden scroll-mt-24"
 >
 <GradientMesh />
 <div className="absolute inset-0 text-white/[0.04]">
 <DotGrid className="w-full h-full" />
 </div>
 <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />
 <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">

 {/* Header: só o título. A citação saiu daqui — as duas peças
 competiam pela mesma atenção na mesma linha de base. */}
 <Reveal>
 <div className="max-w-4xl mb-12 md:mb-16">
 <span className="flex items-center gap-3 text-un-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
 <span className="w-10 h-px bg-un-gold/60" /> Definição e escala
 </span>
 <h2 className="font-display font-black uppercase tracking-tight text-white text-4xl md:text-6xl lg:text-[4.75rem] leading-[0.94]">
 O que é a{' '}
 <span className="text-un-blue-3">Ambição 2030</span>
 </h2>
 </div>
 </Reveal>

 {/* Citação do Conselho como tese da seção: peça larga, com a
 aspa em escala tratada como elemento gráfico e a atribuição
 empilhada (antes era uma linha corrida longa demais). */}
 <Reveal delay={80}>
 <figure className="relative mb-14 md:mb-20 pl-14 md:pl-24">
 {/* Aspa decorativa — âncora visual, não pontuação */}
 <span
 aria-hidden="true"
 className="absolute left-0 top-[-1.5rem] md:top-[-2.75rem] font-serif text-un-gold/25 text-[7rem] md:text-[11rem] leading-none select-none pointer-events-none"
 >
 “
 </span>
 <blockquote className="relative font-serif italic text-white text-[1.7rem] md:text-4xl lg:text-[2.9rem] leading-[1.22] max-w-[26ch]">
 {AMBICAO_CITACAO.quote}
 </blockquote>
 <figcaption className="relative mt-7 flex items-start gap-4">
 <span aria-hidden="true" className="mt-2 w-10 h-px bg-un-gold shrink-0" />
 <span className="block">
              <span className="block text-white text-[11px] font-bold uppercase tracking-[0.22em]">
                {AMBICAO_CITACAO.author}
              </span>
              <span className="block text-un-blue-3/85 text-xs mt-1.5">
                {AMBICAO_CITACAO.role}
              </span>
              <span className="block text-white/60 text-[11px] mt-0.5">
                {AMBICAO_CITACAO.source}
              </span>
            </span>
          </figcaption>
        </figure>
      </Reveal>

  {/* ---- Faixa 1: definição + resultado-herói ---- */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 mb-5 lg:mb-6">
    {/* Definição — peça dominante com imagem institucional de fundo e eixos estruturados */}
    <BentoCard delay={100} className="lg:col-span-7">
      <div className="group relative glass-near rounded-[2rem] p-9 md:p-12 h-full overflow-hidden flex flex-col justify-between">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          alt="Liderança empresarial e Agenda 2030"
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-all duration-700 group-hover:scale-105 group-hover:opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-un-footer via-un-footer/90 to-un-footer/60 pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block text-un-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
            Definição
          </span>
          <p className="text-white text-xl md:text-2xl lg:text-[1.75rem] leading-[1.35] font-light mb-8">
            {AMBICAO_DEFINICAO}
          </p>

          {/* Três eixos de apoio da Definição */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="block font-display font-black text-un-gold text-xs uppercase tracking-wider mb-1">
                Compromissos
              </span>
              <p className="text-white/70 text-[11px] leading-relaxed font-light">
                Metas públicas e mensuráveis até 2030.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="block font-display font-black text-un-gold text-xs uppercase tracking-wider mb-1">
                Transformação
              </span>
              <p className="text-white/70 text-[11px] leading-relaxed font-light">
                Mudança nas organizações e cadeias de valor.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="block font-display font-black text-un-gold text-xs uppercase tracking-wider mb-1">
                18 ODS
              </span>
              <p className="text-white/70 text-[11px] leading-relaxed font-light">
                Conexão com a agenda global de sustentabilidade.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
          <span className="text-un-blue-3 text-[10px] font-bold uppercase tracking-[0.25em]">
            Estratégia Empresarial do Pacto Global da ONU
          </span>
          <span className="text-white/60 text-xs font-light">Impacto Coletivo & Individual</span>
        </div>
      </div>
    </BentoCard>

    {/* Resultados — um número herói, três de apoio */}
    <BentoCard delay={180} className="lg:col-span-5">
      <div className="glass rounded-[2rem] p-9 md:p-12 h-full flex flex-col overflow-hidden">
        <span className="relative block text-un-blue-3 text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5">
          {AMBICAO_RESULTADOS.title}
        </span>
        <span className="relative block text-white/60 text-[11px] font-light tracking-wide mb-8">
          {AMBICAO_RESULTADOS.period}
        </span>
        <div className="relative">
          <ContadorAnimado
            valor={AMBICAO_RESULTADOS.stats[0].value}
            className="block font-display font-black text-un-gold text-7xl md:text-8xl leading-[0.85] tabular-nums"
            style={{ textShadow: '0 0 40px rgba(204,177,70,0.28)' }}
          />
          <span className="block text-white text-sm mt-3 font-medium">
            {AMBICAO_RESULTADOS.stats[0].label}
          </span>
        </div>
        <dl className="relative mt-8 divide-y divide-white/10 border-t border-white/10">
          {AMBICAO_RESULTADOS.stats.slice(1).map((s) => (
            <div key={s.label} className="flex items-baseline justify-between gap-4 py-3.5">
              <dt className="text-un-blue-3 text-xs leading-snug">{s.label}</dt>
              <dd className="font-display font-black text-white text-2xl md:text-[1.7rem] leading-none tabular-nums shrink-0">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        {AMBICAO_RESULTADOS.alcance && (
          <div className="relative mt-8 pt-7 border-t border-un-gold/30">
            <p className="text-white text-sm md:text-[0.95rem] leading-relaxed font-light mb-4">
              A iniciativa já ultrapassou fronteiras: inspirou o{' '}
              <a
                href="https://forwardfaster.unglobalcompact.org/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-un-gold hover:text-white underline decoration-un-gold/60 underline-offset-4 transition-colors"
              >
                Forward Faster
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>{' '}
              do Pacto Global da ONU, reafirmando o Brasil como referência nessa agenda.
            </p>

            <a
              href="https://forwardfaster.unglobalcompact.org/home"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-un-gold hover:text-un-blue text-xs font-bold uppercase tracking-wider text-white border border-white/20 transition-all duration-300 shadow-sm"
            >
              <span>Conheça a iniciativa Forward Faster</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        )}
        <p className="relative text-white/60 text-[11px] leading-relaxed font-light mt-auto pt-8">
          {AMBICAO_RESULTADOS.nota}
        </p>
      </div>
    </BentoCard>
  </div>

  {/* ---- Faixa 2: origem + linha do tempo em largura total ---- */}
  <BentoCard delay={240}>
    <div className="glass-far rounded-xl !border-t-2 !border-t-un-gold p-9 md:p-12 mb-5 lg:mb-6">
      <div className="relative grid lg:grid-cols-12 gap-4 lg:gap-12 pb-10 md:pb-14 border-b border-white/10">
        <span className="lg:col-span-4 block text-un-blue-3 text-[10px] font-bold uppercase tracking-[0.25em] lg:pt-1">
          Como surgiu
        </span>
        <p className="lg:col-span-8 text-white/75 text-sm md:text-base leading-relaxed font-light max-w-[65ch]">
          {AMBICAO_ORIGEM.description}
        </p>
      </div>

      <div className="relative pt-10 md:pt-14">
        <span className="block text-un-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-8">
          Linha do tempo
        </span>
        <ol className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-9 list-none m-0 p-0">
          <span
            aria-hidden="true"
            className="hidden lg:block absolute left-0 right-0 top-[7px] h-px bg-white/15"
          />
          {AMBICAO_ORIGEM.timeline.map((item, i) => {
            const isLast = i === AMBICAO_ORIGEM.timeline.length - 1;
            return (
              <li key={item.year} className="relative">
                <span
                  className="relative block w-[15px] h-[15px] rounded-full ring-4 ring-un-footer mb-4"
                  style={{
                    backgroundColor: isLast ? '#CCB146' : '#AECFE6',
                    boxShadow: isLast ? '0 0 18px rgba(204,177,70,0.6)' : 'none',
                  }}
                />
                <span className="block font-display font-black text-white text-2xl md:text-[1.75rem] leading-none tabular-nums mb-2">
                  {item.year}
                </span>
                {item.title && (
                  <span className="block font-bold text-white/90 text-xs md:text-sm leading-snug pr-2 mb-1">
                    {item.title}
                  </span>
                )}
                <span className="block text-un-blue-3/80 text-[11px] md:text-xs leading-snug pr-2">
                  {item.description ?? item.event}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  </BentoCard>

  {/* ---- Faixa 3: propósito + pilares ---- */}
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
    <BentoCard delay={300} className="lg:col-span-7">
      <div className="group relative glass-near rounded-[2rem] p-9 md:p-12 h-full overflow-hidden flex flex-col justify-between">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop"
          alt="Desenvolvimento Sustentável e Impacto Social"
          className="absolute inset-0 w-full h-full object-cover opacity-15 transition-all duration-700 group-hover:scale-105 group-hover:opacity-25 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-un-footer via-un-footer/90 to-un-footer/60 pointer-events-none" />
        <div className="absolute inset-0 text-white/[0.04] pointer-events-none">
          <DotGrid className="w-full h-full" />
        </div>

        <div className="relative z-10">
          <span className="block text-un-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
            {AMBICAO_PROPOSITO.title}
          </span>
          <p className="text-white text-lg md:text-xl lg:text-[1.35rem] leading-[1.5] font-light mb-8">
            {AMBICAO_PROPOSITO.description}
          </p>

          {/* Destaques estruturais do Propósito sem a menção às três palavras */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="block font-display font-black text-un-gold text-xs uppercase tracking-wider mb-1">
                Atuação Coletiva
              </span>
              <p className="text-white/70 text-xs leading-relaxed font-light">
                Mobilização conjunta entre o setor empresarial brasileiro, governo e sociedade civil.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <span className="block font-display font-black text-un-gold text-xs uppercase tracking-wider mb-1">
                Impacto Mensurável
              </span>
              <p className="text-white/70 text-xs leading-relaxed font-light">
                Compromissos públicos com metas auditáveis e reporte contínuo de indicadores.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
          <span className="text-un-blue-3 text-[10px] font-bold uppercase tracking-[0.25em]">
            Transformação Sistêmica & Sustentável
          </span>
          <span className="text-white/50 text-xs font-light tracking-wide">
            Agenda 2030 no Brasil
          </span>
        </div>
      </div>
    </BentoCard>

    {/* Pilares — lista numerada com título 'MAS COMO ELE SE SUSTENTA?' */}
    <BentoCard delay={360} className="lg:col-span-5">
 <div className="glass rounded-[2rem] p-9 md:p-12 h-full overflow-hidden flex flex-col justify-between">
 <div className="relative">
 <span className="block text-un-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
 {AMBICAO_PROPOSITO.subtitle}
 </span>
 <h3 className="text-white font-display font-black text-xl md:text-2xl uppercase tracking-tight mb-6">
 Quatro pilares de sustentação
 </h3>
 <ol className="relative divide-y divide-white/10 border-t border-white/10 list-none m-0 p-0">
 {AMBICAO_PROPOSITO.pillars.map((pillar, i) => (
 <li key={pillar.title} className="group flex gap-5 py-4">
 <span className="font-display font-black text-lg text-un-gold leading-none tabular-nums pt-0.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
 {String(i + 1).padStart(2, '0')}
 </span>
 <div>
 <p className="font-bold text-sm text-white tracking-tight">
 {pillar.title}
 </p>
 <p className="text-xs text-un-blue-3/75 leading-relaxed font-light mt-1">
 {pillar.desc}
 </p>
 </div>
 </li>
 ))}
 </ol>
 </div>
 </div>
 </BentoCard>
 </div>
 </div>
 </section>

 {/* ============ OS 18 ODS ============ */}
 <section id="ods" className="py-20 md:py-28 bg-white scroll-mt-24">
 <div className="container mx-auto px-4 md:px-8 lg:px-12">
 <SectionHeader
 badge="Agenda 2030"
 title="Os 18"
 titleAccent="Objetivos"
 description="Os 17 Objetivos de Desenvolvimento Sustentável aprovados pela ONU em 2015, somados ao ODS 18 — Igualdade Étnico-Racial, de proposição brasileira e implementado pelo Pacto Global em 2025."
 />

 {/* A grade inteira revela como uma unidade — 18 observers para tiles
 pequenos seria custoso e o pop-in individual fica ruidoso. */}
 <Reveal>
 <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-2.5 md:gap-3 list-none p-0 m-0">
 {ODS_NAMES.map((name, i) => {
 const num = i + 1;
 return (
 <li
 key={num}
 className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
 >
 <img
 src={`${import.meta.env.BASE_URL}ods/ods-${num}.jpg`}
 alt={`ODS ${num} — ${name}`}
 loading="lazy"
 width="160"
 height="160"
 className="w-full h-full object-cover"
 />
 {num === 18 && (
 <span
 className="absolute inset-0 rounded-xl pointer-events-none"
 style={{ boxShadow: `inset 0 0 0 2px ${ODS_COLORS[17]}` }}
 aria-hidden="true"
 />
 )}
 </li>
 );
 })}
 </ul>
 </Reveal>

 {/* Destaque: ODS 18 */}
 <Reveal delay={120}>
 <div className="mt-6 md:mt-8 relative overflow-hidden rounded-3xl bg-un-surface border border-gray-100 p-7 md:p-9">
 <span
 className="absolute top-0 left-0 bottom-0 w-1.5"
 style={{ backgroundColor: ODS_COLORS[17] }}
 aria-hidden="true"
 />
 <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-9 pl-2">
 <img
 src={`${import.meta.env.BASE_URL}ods/ods-18.jpg`}
 alt="ODS 18 — Igualdade Étnico Racial"
 loading="lazy"
 width="112"
 height="112"
 className="w-24 h-24 md:w-28 md:h-28 rounded-2xl object-cover shrink-0 shadow-md"
 />
 <div>
 <span
 className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-3"
 style={{ color: ODS_COLORS[17] }}
 >
 Contribuição brasileira
 </span>
 <h3 className="font-display font-black text-xl md:text-2xl text-gray-900 uppercase tracking-tight mb-3">
 ODS 18 — Igualdade Étnico-Racial
 </h3>
 <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light max-w-3xl">
 Além dos 17 Objetivos globais, um 18º ODS de proposição brasileira foi
 implementado pelo Pacto Global em 2025, dedicado ao enfrentamento do racismo
 estrutural e das desigualdades que atingem sobretudo a população negra e os
 povos indígenas. É por isso que, na Rede Brasil, a Agenda 2030 é acompanhada
 a partir de 18 Objetivos.
 </p>
 </div>
 </div>
 </div>
 </Reveal>
 </div>
 </section>

 {/* ============ MOVIMENTOS — BENTO GRID ============ */}
 <section id="movimentos" className="py-20 md:py-28 bg-un-surface">
 <div className="container mx-auto px-4 md:px-8 lg:px-12">
 <SectionHeader
 inverted={false}
 badge="Ambição 2030"
 title="Os 10"
 titleAccent="Movimentos"
 description="Cada Movimento mobiliza empresas em torno de uma causa urgente, com compromissos concretos a serem alcançados até 2030."
 />

        {/* A largura de cada card vem do próprio MovementCard. Com 2 por
            fileira as 5 fileiras fecham exatas — nenhuma sobra a centrar. */}
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

 {/* Link para ver todos */}
 <div className="text-center mt-12">
 <Button variant="outline" icon={ArrowRight} onClick={() => navigate('movimento', MOVIMENTOS[0].id)}>
 Ver todos os Movimentos
 </Button>
 </div>
 </div>
 </section>

 {/* ============ MODALIDADES DE ENGAJAMENTO ============ */}
 <section className="py-20 md:py-28 bg-white">
 <div className="container mx-auto px-4 md:px-8 lg:px-12">
 <SectionHeader
 badge="Como participar"
 title="Modalidades de"
 titleAccent="Engajamento"
 description="Empresas participantes assinam a Carta de Compromisso aos Movimentos e escolhem o nível de engajamento."
 />
 <div className="grid md:grid-cols-5 gap-5 md:gap-6">
 {MODALIDADES.map((mod, i) => (
 <BentoCard
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
 </BentoCard>
 ))}
 </div>
 </div>
 </section>

 {/* ============ ESTRUTURA DOS MOVIMENTOS — FLUXO NUMERADO ============ */}
 <section className="py-20 md:py-28 bg-un-surface">
 <div className="container mx-auto px-4 md:px-8 lg:px-12">
 <SectionHeader
 badge="Como funciona"
 title="Estrutura dos"
 titleAccent="Movimentos"
 description={ESTRUTURA_MOVIMENTOS_INTRO.description}
 />
 <div className="space-y-px bg-gray-200/60 rounded-3xl overflow-hidden border border-gray-100">
 {ESTRUTURA_MOVIMENTOS.map((item, i) => (
 <BentoCard key={item.id} delay={i * 70}>
 <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 bg-white hover:bg-un-surface p-7 md:p-9 transition-colors duration-300">
 {/* Etapas metodológicas entram numeradas. Um item marcado
 explicitamente com camada:false é complemento e fica sem
 número, para a contagem não contradizer o texto oficial. */}
 <span className="font-display font-black text-4xl md:text-5xl text-un-blue/15 group-hover:text-un-gold transition-colors duration-300 leading-none shrink-0 md:w-24">
 {item.camada === false ? '—' : String(i + 1).padStart(2, '0')}
 </span>
 <div className="shrink-0 md:w-72">
 <h3 className="font-display font-black text-lg md:text-2xl text-gray-900 tracking-tight leading-tight">
 {item.title}
 </h3>
 {item.camada === false && (
 <span className="block mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-un-blue-1">
 Complemento
 </span>
 )}
 </div>
 <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light flex-1">
 {item.description}
 </p>
 </div>
 </BentoCard>
 ))}
 </div>
 </div>
 </section>

 {/* ============ COMO FAZER PARTE ============
 Substitui o CTA genérico anterior ("Sua empresa na Ambição 2030"):
 a copy e o destino do botão agora vêm do documento oficial da RBPG. */}
 <ComoFazerParteSection />
 </div>
 );
};
