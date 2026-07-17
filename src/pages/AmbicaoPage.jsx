import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Compass, Users, Target, Globe, Calendar } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';
import {
 AMBICAO_DEFINICAO,
 AMBICAO_INTRO,
 AMBICAO_ORIGEM,
 AMBICAO_PROPOSITO,
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

// AMBICAO_PROPOSITO.pillars não carrega ícones (dado é framework-agnostic) —
// mapeados aqui, na mesma ordem do conteúdo.
const PROPOSITO_ICONS = [Users, Target, Globe, Calendar];

// Componentes para Bento Grid
const BentoCard = ({ children, className = '', delay = 0 }) => (
 <Reveal delay={delay} className={className}>
 {children}
 </Reveal>
);

const MovementCard = ({ movement, index, navigate, isFeatured = false }) => (
 <button
 onClick={() => navigate('movimento', movement.id)}
 className={`group relative w-full h-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-un-gold focus:ring-offset-2 ${
 isFeatured ? 'lg:col-span-2' : ''
 }`}
 >
 {isFeatured ? (
 <>
 <div
 className="absolute inset-0 transition-all duration-500"
 style={{
 background: `linear-gradient(135deg, ${movement.color} 0%, ${movement.color}cc 100%)`
 }}
 />
 <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between text-left">
 <div>
 <span className="inline-block text-white/80 text-[9px] font-bold uppercase tracking-widest mb-4">
 Movimento {String(index + 1).padStart(2, '0')}
 </span>
 <h3 className="font-display font-black text-2xl md:text-3xl text-white uppercase tracking-tight mb-4">
 {movement.shortName}
 </h3>
 </div>
 <div className="flex items-end justify-between">
 <p className="text-white/90 text-sm md:text-base leading-relaxed font-light max-w-[70%]">
 {movement.ambicao}
 </p>
 <span className="self-end shrink-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white group-hover:text-un-blue transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
 <ArrowUpRight className="w-5 h-5" />
 </span>
 </div>
 </div>
 </>
 ) : (
 <>
 <div className="absolute inset-0 bg-gradient-to-br from-un-surface to-white border border-gray-100" />
 <div className="relative z-10 p-8 h-full flex flex-col justify-between text-left">
 <div>
 <span className="inline-block text-un-blue text-[9px] font-bold uppercase tracking-widest mb-4">
 Movimento {String(index + 1).padStart(2, '0')}
 </span>
 <h3 className="font-display font-black text-xl md:text-2xl text-gray-900 uppercase tracking-tight mb-4">
 {movement.shortName}
 </h3>
 </div>
 <div className="flex items-end justify-between">
 <div className="w-10 h-10 rounded-xl" style={{ backgroundColor: movement.color }} />
 <span className="self-end shrink-0 w-10 h-10 rounded-full bg-un-blue/5 flex items-center justify-center text-un-blue group-hover:bg-un-blue group-hover:text-white transition-all duration-300 group-hover:scale-110">
 <ArrowUpRight className="w-4 h-4" />
 </span>
 </div>
 </div>
 </>
 )}
 </button>
);

export const AmbicaoPage = ({ navigate }) => (
 <div className="animate-fade-in">
 {/* ============ HERO EDITORIAL ============ */}
 <section className="relative bg-un-blue overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
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
 href="#oque-e"
 onClick={(e) => {
 e.preventDefault();
 document.querySelector('#oque-e')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }}
 className="group inline-flex items-center gap-2 min-h-[44px] text-white/70 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors px-2 py-3 cursor-pointer"
 >
 Descobrir a Ambição
 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* ============ 🆕 NOVO: O QUE É AMBIÇÃO 2030 ============ */}
 <section id="oque-e" className="py-20 md:py-28 bg-un-surface">
 <div className="container mx-auto px-4 md:px-8 lg:px-12">
 {/* Header da seção */}
 <Reveal>
 <div className="text-center mb-16">
 <span className="inline-block text-un-blue text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6">
 Origem e Propósito
 </span>
 <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tight leading-[1.1] text-gray-900 max-w-4xl mx-auto">
 O que é a <span className="text-un-blue-1">Ambição 2030</span>
 </h2>
 </div>
 </Reveal>

 {/* Bento Grid - Layout Assimétrico */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
 {/* Card 1: Definição (8 colunas) */}
 <BentoCard delay={100} className="lg:col-span-8">
 <div className="relative bg-un-blue rounded-3xl p-8 md:p-10 h-full overflow-hidden group">
 <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />
 <div className="absolute top-0 left-0 w-full h-1.5 flex">
 {ODS_COLORS.slice(0, 8).map((c, i) => (
 <span key={i} className="flex-1" style={{ backgroundColor: c }} />
 ))}
 </div>
 <div className="relative z-10">
 <span className="inline-block bg-un-gold/10 text-un-gold text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-6">
 Definição
 </span>
 <p className="text-white text-xl md:text-2xl lg:text-3xl leading-[1.4] font-light">
 {AMBICAO_DEFINICAO}
 </p>
 </div>
 </div>
 </BentoCard>

 {/* Card 2: Stats (4 colunas) */}
 <BentoCard delay={150} className="lg:col-span-4">
 <div className="bg-white rounded-3xl p-8 md:p-10 h-full border border-gray-100 shadow-sm">
 <span className="block text-gray-500 text-[9px] font-bold uppercase tracking-widest mb-6">
 Em números
 </span>
 <div className="space-y-6">
 {STATS.map((s) => (
 <div key={s.label}>
 <span className="block font-display font-black text-4xl md:text-5xl text-un-blue leading-none">
 {s.value}
 </span>
 <span className="block text-gray-500 text-xs uppercase tracking-widest mt-2">
 {s.label}
 </span>
 </div>
 ))}
 </div>
 </div>
 </BentoCard>

 {/* Card 3: Como Surgiu (4 colunas) */}
 <BentoCard delay={200} className="lg:col-span-4">
 <div className="bg-white rounded-3xl p-8 md:p-10 h-full border border-gray-100 shadow-sm">
 <span className="block text-un-blue text-[9px] font-bold uppercase tracking-widest mb-6">
 Como Surgiu
 </span>
 <h3 className="font-display font-black text-xl md:text-2xl text-gray-900 mb-4 uppercase tracking-tight">
 {AMBICAO_ORIGEM.title}
 </h3>
 <p className="text-gray-600 text-sm leading-relaxed font-light">
 {AMBICAO_ORIGEM.description}
 </p>
 </div>
 </BentoCard>

 {/* Card 4: Timeline (8 colunas) */}
 <BentoCard delay={250} className="lg:col-span-8">
 <div className="relative bg-un-surface rounded-3xl p-8 md:p-10 h-full border border-gray-100 overflow-hidden">
 <span className="block text-un-gold text-[9px] font-bold uppercase tracking-widest mb-6">
 Linha do Tempo
 </span>
 <div className="relative pl-6 border-l-2 border-gray-200">
 {AMBICAO_ORIGEM.timeline.map((item, i) => (
 <div key={item.year} className={`relative mb-6 ${i === 0 ? 'mt-0' : 'mt-8'}`}>
 <span className="absolute -left-6 w-3 h-3 rounded-full bg-un-blue border-2 border-white" />
 <span className="absolute -left-12 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
 {item.year}
 </span>
 <p className="text-gray-800 text-sm md:text-base font-medium">
 {item.event}
 </p>
 </div>
 ))}
 </div>
 </div>
 </BentoCard>

 {/* Card 5: Propósito (8 colunas) */}
 <BentoCard delay={300} className="lg:col-span-8">
 <div className="relative bg-gradient-to-br from-un-blue to-un-footer rounded-3xl p-8 md:p-10 h-full overflow-hidden group">
 <div className="absolute inset-0 text-white/[0.04]">
 <DotGrid className="w-full h-full" />
 </div>
 <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none" />
 <div className="relative z-10">
 <span className="inline-block bg-white/10 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-6">
 Nosso Propósito
 </span>
 <h3 className="font-display font-black text-2xl md:text-3xl text-white mb-6 uppercase tracking-tight">
 {AMBICAO_PROPOSITO.title}
 </h3>
 <p className="text-white/80 text-base md:text-lg leading-relaxed font-light">
 {AMBICAO_PROPOSITO.description}
 </p>
 </div>
 </div>
 </BentoCard>

 {/* Card 6: Pilares (4 colunas) */}
 <BentoCard delay={350} className="lg:col-span-4">
 <div className="bg-white rounded-3xl p-8 md:p-10 h-full border border-gray-100 shadow-sm">
 <span className="block text-un-gold text-[9px] font-bold uppercase tracking-widest mb-6">
 4 Pilares
 </span>
 <div className="grid grid-cols-2 gap-4">
 {AMBICAO_PROPOSITO.pillars.map((pillar, i) => {
 const PillarIcon = PROPOSITO_ICONS[i];
 return (
 <div key={pillar.title} className="flex items-start gap-2">
 <div className="w-8 h-8 rounded-lg bg-un-blue/5 flex items-center justify-center shrink-0">
 {PillarIcon && <PillarIcon className="w-4 h-4 text-un-blue" />}
 </div>
 <div>
 <p className="font-bold text-xs text-gray-900 uppercase tracking-tight">
 {pillar.title}
 </p>
 <p className="text-[10px] text-gray-500 leading-relaxed font-light">
 {pillar.desc}
 </p>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </BentoCard>
 </div>
 </div>
 </section>

 {/* ============ MOVIMENTOS — BENTO GRID ============ */}
 <section id="movimentos" className="py-20 md:py-28 bg-white">
 <div className="container mx-auto px-4 md:px-8 lg:px-12">
 <SectionHeader
 inverted={false}
 barColor="bg-un-gold"
 badge="Ambição 2030"
 title="Os 10"
 titleAccent="Movimentos"
 description="Cada Movimento mobiliza empresas em torno de uma causa urgente, com compromissos concretos a serem alcançados até 2030."
 />

 {/* Bento Grid Layout para Movimentos */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
 {/* Movimentos 0, 3, 6 - Destacados (coloridos) */}
 {[0, 3, 6].map((index) => (
 <MovementCard
 key={MOVIMENTOS[index].id}
 movement={MOVIMENTOS[index]}
 index={index}
 navigate={navigate}
 isFeatured
 />
 ))}
 
 {/* Movimentos 1, 2, 4, 5, 7, 8, 9 - Normais (brancos) */}
 {[1, 2, 4, 5, 7, 8, 9].map((index) => (
 <MovementCard
 key={MOVIMENTOS[index].id}
 movement={MOVIMENTOS[index]}
 index={index}
 navigate={navigate}
 isFeatured={false}
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
 <section className="py-20 md:py-28 bg-un-surface">
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
 <section className="py-20 md:py-28 bg-white">
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
 <BentoCard key={item.id} delay={i * 70}>
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
 </BentoCard>
 ))}
 </div>
 </div>
 </section>

 {/* ============ CTA ============ */}
 <section className="py-20 md:py-28 bg-un-surface">
 <div className="container mx-auto px-4 md:px-8 lg:px-12">
 <BentoCard>
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
 <div className="absolute inset-0 text-white/[0.05]">
 <DotGrid className="w-full h-full" />
 </div>
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
 </BentoCard>
 </div>
 </section>
 </div>
);
