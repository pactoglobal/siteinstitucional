import React, { useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Target,
  Globe,
  Users,
  ShieldCheck,
  Zap,
  BookOpen,
  Sprout,
  Trees,
  Coins,
  MapPin,
  Scale,
  HeartHandshake,
  Award,
  Megaphone,
  CheckCircle2,
  Newspaper,
  Droplets,
  Anchor,
  Recycle,
  Sparkles,
  Layers,
  Building2,
  Share2,
} from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';
import { getPlataforma, PLATAFORMAS } from '../data/plataformas';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

// Mapeamento de ícones dinâmicos
const ICON_MAP = {
  Target,
  Zap,
  BookOpen,
  ShieldCheck,
  Users,
  Sprout,
  Trees,
  Coins,
  MapPin,
  Scale,
  HeartHandshake,
  Award,
  Megaphone,
  CheckCircle2,
  Newspaper,
  Droplets,
  Anchor,
  Recycle,
  Sparkles,
  Layers,
  Building2,
  FileCheck: ShieldCheck,
  ShieldAlert: ShieldCheck,
};

const NotFound = ({ navigate }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32">
    <h1 className="text-3xl md:text-5xl font-display font-black text-un-blue mb-4">
      Plataforma não encontrada
    </h1>
    <p className="text-gray-500 mb-8">
      A Plataforma de Ação que você procura não existe ou foi movida.
    </p>
    <Button variant="primary" icon={ArrowLeft} onClick={() => navigate('plataformas')}>
      Ver todas as Plataformas
    </Button>
  </div>
);

// Textura de pontos sutil
const DotGrid = ({ className = '' }) => (
  <svg className={className} aria-hidden="true">
    <defs>
      <pattern id="plataforma-dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#plataforma-dots)" />
  </svg>
);

// Staged reveal no scroll
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

// Seções da sub-navegação da Plataforma
const SUBNAV_SECTIONS = [
  { id: 'sobre-plataforma', label: 'O que é' },
  { id: 'projetos-iniciativas', label: 'Projetos & GTs' },
  { id: 'como-atuamos', label: 'Como Atuamos' },
  { id: 'vantagens', label: 'Vantagens' },
  { id: 'aderir', label: 'Como Aderir' },
];

const PlataformaSubNav = ({ color, sections, ids }) => {
  const activeId = useScrollSpy(ids);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Seções da Plataforma"
      className="sticky top-14 md:top-[70px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
    >
      <style>{`
        .subnav-brand-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .subnav-brand-scroll::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.04);
        }
        .subnav-brand-scroll::-webkit-scrollbar-thumb {
          background: ${color};
          border-radius: 9999px;
        }
      `}</style>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-start md:justify-center gap-2 md:gap-3 lg:gap-5 py-3 overflow-x-auto subnav-brand-scroll">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleClick(e, s.id)}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full transition-all duration-300 cursor-pointer',
                isActive
                  ? 'text-white shadow-md scale-105 border border-white/30 font-black'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
              )}
              style={isActive ? { backgroundColor: color } : undefined}
            >
              {s.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export const PlataformaPage = ({ slug, navigate }) => {
  const plat = getPlataforma(slug);

  const sections = SUBNAV_SECTIONS;
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  if (!plat) return <NotFound navigate={navigate} />;

  const outras = PLATAFORMAS.filter((p) => p.id !== plat.id);

  return (
    <div className="animate-fade-in">
      {/* ============ HERO EDITORIAL DA PLATAFORMA ============ */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden"
        style={{ backgroundColor: plat.color }}
      >
        {/* Foto em destaque + Vinheta & Glow Temático */}
        <div className="absolute inset-0 z-0">
          <img
            src={plat.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(110deg, ${plat.color} 0%, ${plat.color}f2 48%, ${plat.color}99 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${plat.color} 0%, transparent 60%)`,
            }}
          />
        </div>

        {/* Glow de acento */}
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)',
          }}
        />

        <div className="absolute inset-0 text-white/[0.06] z-0">
          <DotGrid className="w-full h-full" />
        </div>
        <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <button
              onClick={() => navigate('plataformas')}
              className="group inline-flex items-center gap-2.5 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Ver todas as Plataformas de Ação</span>
            </button>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-[11px] font-bold uppercase tracking-[0.2em] border border-white/20">
              <Layers className="w-3.5 h-3.5 text-white" />
              Pilar: {plat.pilar}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-[11px] font-bold uppercase tracking-[0.22em] border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Plataforma de Ação Oficial · Rede Brasil
            </span>

            {plat.ods?.length > 0 && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-white/90 text-[11px] font-bold uppercase tracking-[0.22em] border border-white/10">
                ODS {plat.ods.length > 5 ? '1 a 17 (Transversal)' : plat.ods.join(', ')}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-8 mb-8">
            {/* Quick Stat Pills em vidro */}
            {plat.numeros && (
              <div className="flex flex-wrap items-center gap-6 px-8 py-5 bg-white/15 backdrop-blur-md rounded-3xl border border-white/25 text-white shadow-2xl">
                <div>
                  <span className="block font-display font-black text-3xl md:text-4xl leading-none">
                    {plat.numeros.empresas}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                    Empresas Conectadas
                  </span>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <span className="block font-display font-black text-3xl md:text-4xl leading-none">
                    {plat.numeros.iniciativas}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                    Grandes Frentes / GTs
                  </span>
                </div>
                <div className="w-px h-10 bg-white/20" />
                <div>
                  <span className="block font-display font-black text-3xl md:text-4xl leading-none text-white">
                    {plat.numeros.destaque}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/80">
                    Foco Estratégico
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Título Principal */}
          <h1 className="font-display font-black uppercase tracking-tight text-white leading-[0.9] text-4xl md:text-7xl lg:text-8xl mb-6 max-w-5xl drop-shadow-sm">
            {plat.name}
          </h1>

          {/* Subtítulo */}
          <p className="text-white/95 text-xl md:text-3xl font-light leading-relaxed max-w-4xl mb-10">
            {plat.subtitulo}
          </p>

          {/* Coordenação */}
          {plat.coordenacao && (
            <div className="pt-8 border-t border-white/20 max-w-4xl flex items-center gap-4">
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.25em]">
                Liderança Técnica:
              </span>
              <span className="text-white text-base font-medium">
                {plat.coordenacao}
              </span>
            </div>
          )}
        </div>
      </section>

      <PlataformaSubNav color={plat.color} sections={sections} ids={sectionIds} />

      {/* ============ BENTO CARD: ENTENDA MELHOR & PROPÓSITO ============ */}
      <section id="sobre-plataforma" className="py-12 md:py-20 bg-slate-50/60 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative rounded-[3rem] p-8 md:p-14 lg:p-16 border border-slate-200/80 bg-white shadow-2xl overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-3"
              style={{ backgroundColor: plat.color }}
            />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-100 pb-10 lg:pb-0 lg:pr-12">
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="w-3.5 h-3.5 rounded-full"
                    style={{ backgroundColor: plat.color }}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                    Entenda Melhor
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.05] text-slate-900 mb-6">
                  Propósito & <span style={{ color: plat.color }}>Impacto</span>
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-8">
                  {plat.contexto}
                </p>

                {/* Foto Temática Nítida */}
                <div className="relative h-56 rounded-3xl overflow-hidden shadow-md border border-slate-200 hidden sm:block">
                  <img
                    src={plat.metaImage || plat.image}
                    alt={plat.name}
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div
                  className="relative pl-8 md:pl-10 border-l-4 mb-10"
                  style={{ borderColor: plat.color }}
                >
                  <Target className="w-10 h-10 mb-6 opacity-80" style={{ color: plat.color }} />
                  <p className="text-slate-800 text-xl md:text-2xl lg:text-3xl leading-[1.35] font-light tracking-tight">
                    "{plat.proposito}"
                  </p>
                </div>

                {plat.ods?.length > 0 && (
                  <div className="pt-8 border-t border-slate-100">
                    <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                      Objetivos de Desenvolvimento Sustentável (ODS) Conectados:
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {plat.ods.map((n) => (
                        <span
                          key={n}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-white font-display font-bold text-xs shadow-sm"
                          style={{ backgroundColor: ODS_COLORS[n - 1] || plat.color }}
                        >
                          <span className="font-black">ODS {n}</span>
                          <span className="font-sans font-normal opacity-90 text-[11px] truncate max-w-[180px]">
                            {ODS_NAMES[n - 1] || ''}
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENTO GRID: PROJETOS, GTS & INICIATIVAS ============ */}
      <section
        id="projetos-iniciativas"
        className="py-12 md:py-20 bg-white border-t border-slate-100 scroll-mt-24"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            badge="Frentes de Ação"
            title="Projetos, Iniciativas"
            titleAccent="& GTs"
            description="Conheça os programas de aceleração, grupos de trabalho exclusivos e ferramentas práticas desenvolvidos dentro desta plataforma."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {plat.projetos.map((proj, i) => {
              if (proj.featured) {
                return (
                  <Reveal key={proj.id} delay={i * 60} className="lg:col-span-2">
                    <div
                      className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 h-full rounded-[2.5rem] p-9 md:p-12 overflow-hidden transition-all duration-500 hover:-translate-y-2 text-white shadow-2xl"
                      style={{ backgroundColor: plat.color }}
                    >
                      <div className="md:col-span-7 flex flex-col justify-between relative z-10">
                        <div>
                          <div className="flex items-center justify-between mb-6">
                            <span className="font-display font-black text-xs md:text-sm tracking-wider tabular-nums px-4 py-1.5 rounded-full bg-white/20 text-white border border-white/30">
                              {proj.tipo}
                            </span>
                            {proj.badge && (
                              <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-black/20 rounded-full text-white/90">
                                {proj.badge}
                              </span>
                            )}
                          </div>

                          <h3 className="font-display font-black text-2xl md:text-3xl lg:text-4xl text-white mb-4">
                            {proj.title}
                          </h3>

                          <p className="text-base md:text-lg leading-relaxed font-light text-white/90 my-4">
                            {proj.description}
                          </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between text-xs md:text-sm">
                          <span className="text-white/90 font-medium">Iniciativa Âncora</span>
                          <button
                            onClick={() => navigate('participar')}
                            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs text-white hover:underline cursor-pointer"
                          >
                            Engajar Empresa <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Imagem Temática Nítida */}
                      <div className="md:col-span-5 relative h-64 md:h-full min-h-[220px] rounded-2xl overflow-hidden shadow-lg border border-white/30">
                        <img
                          src={proj.image || plat.image}
                          alt={proj.title}
                          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </Reveal>
                );
              }

              const IconComponent = ICON_MAP[proj.icon] || Sparkles;

              return (
                <Reveal key={proj.id} delay={i * 60}>
                  <div className="group relative flex flex-col justify-between h-full rounded-[2.5rem] p-9 md:p-10 bg-white border border-slate-200/80 hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 border border-slate-200 shadow-sm"
                          style={{ color: plat.color }}
                        >
                          <IconComponent className="w-6 h-6" style={{ color: plat.color }} />
                        </div>
                        <span className="font-display font-black text-[11px] tracking-wider uppercase px-3.5 py-1 rounded-full bg-slate-100 text-slate-700">
                          {proj.tipo}
                        </span>
                      </div>

                      <h3 className="font-display font-black text-xl md:text-2xl text-slate-900 mb-3 group-hover:text-un-blue transition-colors">
                        {proj.title}
                      </h3>

                      <p className="text-sm md:text-base leading-relaxed font-light text-slate-600">
                        {proj.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Plataforma de Ação</span>
                      <span
                        className="font-bold uppercase tracking-wider text-xs"
                        style={{ color: plat.color }}
                      >
                        Rede Brasil
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ METODOLOGIA: COMO ATUAMOS ============ */}
      <section
        id="como-atuamos"
        className="py-12 md:py-20 bg-slate-50/60 border-t border-slate-100 scroll-mt-24"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: plat.color }}
            />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Jornada de Transformação
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight text-slate-900 mb-6 max-w-4xl">
            Como atuamos na <span style={{ color: plat.color }}>{plat.shortName}</span>
          </h2>
          <p className="text-slate-500 text-base md:text-xl font-light max-w-3xl mb-16">
            Uma abordagem sistêmica e auditável que conduz as empresas participantes do diagnóstico à liderança de mercado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plat.comoFunciona.map((step, i) => {
              const lead = i === 0;
              return (
                <Reveal key={step.num} delay={i * 70}>
                  <div
                    className={cn(
                      'group relative h-full rounded-[2.5rem] p-9 md:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1.5',
                      lead
                        ? 'text-white shadow-2xl'
                        : 'bg-white border border-slate-200/80 hover:shadow-2xl',
                    )}
                    style={
                      lead
                        ? {
                            background: `linear-gradient(135deg, ${plat.color}, ${plat.darkColor || plat.color})`,
                          }
                        : undefined
                    }
                  >
                    {lead && (
                      <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />
                    )}
                    <span
                      className="relative block font-display font-black text-6xl md:text-7xl leading-none mb-6"
                      style={{
                        color: lead ? 'rgba(255,255,255,0.3)' : `${plat.color}33`,
                      }}
                    >
                      {step.num}
                    </span>
                    <h3
                      className={cn(
                        'relative font-display font-black text-xl md:text-2xl tracking-tight leading-tight mb-3',
                        lead ? 'text-white' : 'text-slate-900',
                      )}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        'relative text-sm md:text-base leading-relaxed font-light',
                        lead ? 'text-white/90' : 'text-slate-600',
                      )}
                    >
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ VANTAGENS DE FAZER PARTE ============ */}
      <section
        id="vantagens"
        className="py-12 md:py-20 bg-white border-t border-slate-100 scroll-mt-24"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            badge="Diferenciais da Plataforma"
            title="Por que fazer parte da"
            titleAccent={plat.shortName}
            description="Benefícios estratégicos e contrapartidas exclusivas para as empresas participantes do Pacto Global da ONU."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {plat.vantagens.map((vantagem, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-5 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-white"
                    style={{ backgroundColor: plat.color }}
                  >
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-medium text-slate-800 leading-relaxed">
                      {vantagem}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA DE ADESÃO + OUTRAS PLATAFORMAS ============ */}
      <section
        id="aderir"
        className="relative py-24 md:py-36 overflow-hidden scroll-mt-24"
        style={{ backgroundColor: plat.color }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 text-white/[0.04]">
          <DotGrid className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block text-white/90 text-xs font-bold uppercase tracking-[0.3em] px-5 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-sm mb-6">
              Participe da Mudança
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-white leading-[1.05] mb-8">
              {plat.ctaTitle}
            </h2>
            <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              {plat.ctaDesc}
            </p>
            <button
              onClick={() => navigate('participar')}
              className="inline-flex items-center justify-center gap-3.5 bg-white text-slate-900 font-display font-black uppercase tracking-wider text-sm md:text-base px-10 py-5 rounded-full shadow-2xl shadow-black/30 hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Quero Integrar esta Plataforma</span>
              <ArrowRight className="w-5 h-5 text-slate-900" />
            </button>
          </div>

          <div className="border-t border-white/20 pt-16">
            <div className="flex items-center justify-between mb-10">
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                Conheça as Outras Plataformas de Ação
              </span>
              <button
                onClick={() => navigate('plataformas')}
                className="text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:underline cursor-pointer"
              >
                Ver todas ({PLATAFORMAS.length})
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
              {outras.map((p) => (
                <button
                  key={p.id}
                  onClick={() => navigate('plataforma', p.slug)}
                  className="group relative flex flex-col justify-between h-48 bg-white rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden text-left cursor-pointer"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-2.5 transition-all duration-300 group-hover:h-3"
                    style={{ backgroundColor: p.color }}
                  />

                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span
                      className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-white tracking-wider shadow-sm"
                      style={{ backgroundColor: p.color }}
                    >
                      ODS {p.ods?.[0] || '1-17'}
                    </span>
                  </div>

                  <div className="relative z-10 my-2">
                    <h4 className="font-display font-black text-base text-slate-900 group-hover:text-un-blue transition-colors leading-tight">
                      {p.shortName}
                    </h4>
                    <p className="text-[11px] font-light text-slate-500 line-clamp-2 mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between w-full pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                      Ver detalhes
                    </span>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 shadow-sm"
                      style={{ backgroundColor: p.color }}
                    >
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
