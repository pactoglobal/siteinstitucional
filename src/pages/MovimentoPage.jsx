import React, { useMemo } from 'react';
import { ArrowLeft, ArrowRight, Check, Target } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';
import { getMovimento, MOVIMENTOS, ESTRUTURA_MOVIMENTOS } from '../data/ambicao2030';
import {
  MovimentoNumeros,
  MovimentoVideo,
  MovimentoPilares,
  MovimentoGovernanca,
  MovimentoRede,
  MovimentoRecursos,
  MovimentoEngajamento,
} from '../components/sections/MovimentoSections';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

// Spans do bento de "Como funciona" — ESTRUTURA_MOVIMENTOS tem sempre
// exatamente 5 itens, por isso o padrão pode ser fixo (classes literais,
// para o Tailwind JIT conseguir escanear).
const COMO_FUNCIONA_SPANS = ['lg:col-span-5', 'lg:col-span-7', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4'];

const NotFound = ({ navigate }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32">
    <h1 className="text-3xl md:text-5xl font-display font-black text-un-blue mb-4">Movimento não encontrado</h1>
    <p className="text-gray-500 mb-8">O Movimento que você procura não existe ou foi movido.</p>
    <Button variant="primary" icon={ArrowLeft} onClick={() => navigate('ambicao')}>
      Ver todos os Movimentos
    </Button>
  </div>
);

// Textura de pontos sutil — mesmo padrão usado no hero da Ambição 2030.
const DotGrid = ({ className = '' }) => (
  <svg className={className} aria-hidden="true">
    <defs>
      <pattern id="movimento-dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="1" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#movimento-dots)" />
  </svg>
);

// Staged reveal no scroll (mesmo padrão local usado em AmbicaoPage.jsx).
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  );
};

// Seções possíveis da sub-navegação, na ordem da página. `when` decide se a
// âncora aparece — blocos sem dado (governança, pilares) não são listados.
const SUBNAV_ALL = [
  { id: 'oque-e', label: 'O que é', when: () => true },
  { id: 'compromissos', label: 'Compromissos', when: () => true },
  { id: 'numeros', label: 'Números', when: (m) => !!m.numeros?.comprometidas },
  { id: 'pilares', label: 'Pilares', when: (m) => !!m.pilares?.length },
  { id: 'como-funciona', label: 'Como funciona', when: () => true },
  {
    id: 'governanca',
    label: 'Governança',
    when: (m) => !!(m.comiteConsultivo?.length || m.comiteExecutivo?.length),
  },
  { id: 'engajamento', label: 'Participação', when: () => true },
  { id: 'aderir', label: 'Aderir', when: () => true },
];

const MovimentoSubNav = ({ color, sections, ids }) => {
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
      aria-label="Seções do Movimento"
      className="sticky top-14 md:top-[70px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-start md:justify-center gap-2 md:gap-4 lg:gap-8 py-3.5 overflow-x-auto no-scrollbar">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => handleClick(e, s.id)}
            aria-current={activeId === s.id ? 'true' : undefined}
            className={cn(
              'whitespace-nowrap text-xs font-bold uppercase tracking-[0.2em] px-5 py-2.5 rounded-full transition-all duration-300',
              activeId === s.id
                ? 'text-white shadow-md scale-105'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
            )}
            style={activeId === s.id ? { backgroundColor: color } : undefined}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export const MovimentoPage = ({ slug, navigate }) => {
  const mov = getMovimento(slug);
  const sections = useMemo(
    () => (mov ? SUBNAV_ALL.filter((s) => s.when(mov)) : []),
    [mov],
  );
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);

  if (!mov) return <NotFound navigate={navigate} />;

  const outros = MOVIMENTOS.filter((m) => m.id !== mov.id).slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* ============ HERO EDITORIAL DO MOVIMENTO ============ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden" style={{ backgroundColor: mov.color }}>
        {/* Foto em destaque + Vinheta & Glow Temático */}
        <div className="absolute inset-0 z-0">
          <img src={mov.image} alt="" aria-hidden="true" className="w-full h-full object-cover scale-105" />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(110deg, ${mov.color} 0%, ${mov.color}e6 48%, ${mov.color}80 100%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${mov.color} 0%, transparent 60%)` }}
          />
        </div>

        {/* Glow de acento na cor do movimento */}
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-40 pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)' }}
        />

        <div className="absolute inset-0 text-white/[0.06] z-0">
          <DotGrid className="w-full h-full" />
        </div>
        <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <button
            onClick={() => navigate('ambicao')}
            className="group inline-flex items-center gap-2.5 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest mb-10 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Voltar para Ambição 2030</span>
          </button>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-[11px] font-bold uppercase tracking-[0.22em] border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Ambição 2030 · Movimento Oficial
            </span>
            {mov.ods?.length > 0 && (
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-black/20 backdrop-blur-md rounded-full text-white/90 text-[11px] font-bold uppercase tracking-[0.22em] border border-white/10">
                ODS {mov.ods.join(', ')} · {mov.ods.map((n) => ODS_NAMES[n - 1]).join(' · ')}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-8 mb-10">
            <div className="inline-flex items-center justify-center bg-white rounded-3xl px-8 py-5 shadow-2xl h-20 md:h-24 w-64 md:w-80 border border-white/50">
              <img
                src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                alt={mov.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Quick Stat Pill em vidro */}
            {mov.numeros?.comprometidas && (
              <div className="hidden md:flex items-center gap-6 px-8 py-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 text-white">
                <div>
                  <span className="block font-display font-black text-3xl leading-none">
                    {mov.numeros.comprometidas}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">
                    Empresas Comprometidas
                  </span>
                </div>
                {mov.numeros.recomendacao && (
                  <>
                    <div className="w-px h-10 bg-white/20" />
                    <div>
                      <span className="block font-display font-black text-3xl leading-none text-white">
                        {mov.numeros.recomendacao}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">
                        NPS Média
                      </span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Título */}
          <h1 className="font-display font-black uppercase tracking-tight text-white leading-[0.9] text-4xl md:text-7xl lg:text-8xl mb-8 max-w-5xl drop-shadow-sm">
            {mov.shortName}
          </h1>

          {/* Subtítulo */}
          <p className="text-white/90 text-xl md:text-3xl font-light leading-relaxed max-w-4xl mb-10">
            {mov.subtitulo || mov.ambicao}
          </p>

          {/* Coordenação */}
          {mov.coordenacao && (
            <div className="pt-8 border-t border-white/20 max-w-4xl flex items-center gap-4">
              <span className="text-white/60 text-xs font-bold uppercase tracking-[0.25em]">
                Coordenação:
              </span>
              <span className="text-white text-base font-medium">
                {mov.coordenacao}
              </span>
            </div>
          )}
        </div>
      </section>

      <MovimentoSubNav color={mov.color} sections={sections} ids={sectionIds} />

      {/* ============ A AMBIÇÃO — BENTO GLASS CARD ============ */}
      <section id="oque-e" className="py-24 md:py-36 bg-slate-50/60 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative glass-near rounded-[3rem] p-10 md:p-16 lg:p-20 border border-slate-200/80 bg-white shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-3" style={{ backgroundColor: mov.color }} />
            
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-10 lg:pb-0 lg:pr-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: mov.color }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
                    Onde Queremos Chegar
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight leading-[1.05] text-slate-900 mb-6">
                  A Ambição <span style={{ color: mov.color }}>2030</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                  A meta coletiva do setor privado para acelerar a transformação sustentável do Brasil.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="relative pl-8 md:pl-10 border-l-4" style={{ borderColor: mov.color }}>
                  <Target className="w-10 h-10 mb-6 opacity-80" style={{ color: mov.color }} />
                  <p className="text-slate-800 text-2xl md:text-3xl lg:text-[2rem] leading-[1.35] font-light tracking-tight">
                    "{mov.ambicao}"
                  </p>
                </div>

                {mov.ods?.length > 0 && (
                  <div className="flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      ODS prioritários conectados:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {mov.ods.map((n) => (
                        <span
                          key={n}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-white font-display font-black text-sm shadow-sm"
                          style={{ backgroundColor: ODS_COLORS[n - 1] }}
                        >
                          <span>ODS {n}</span>
                          <span className="font-sans font-normal opacity-90 text-xs">
                            {ODS_NAMES[n - 1]}
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

      {/* ============ COMPROMISSOS — BENTO GRID ============ */}
      <section id="compromissos" className="py-24 md:py-36 bg-white border-t border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            badge="Carta de Compromisso"
            title="Nossos"
            titleAccent="Compromissos"
            description="Metas públicas que as organizações assumem ao aderir formalmente ao Movimento."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {mov.compromissos.map((c, i) => {
              const featured = i === 0;
              return (
                <Reveal key={i} delay={i * 60} className={featured ? 'lg:col-span-2' : ''}>
                  <div
                    className={cn(
                      'group relative flex flex-col justify-between h-full rounded-[2.5rem] p-9 md:p-12 lg:p-14 overflow-hidden transition-all duration-500 hover:-translate-y-2',
                      featured
                        ? 'text-white shadow-2xl'
                        : 'bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-2xl hover:border-slate-300',
                    )}
                    style={featured ? { backgroundColor: mov.color } : undefined}
                  >
                    {/* Imagem de Fundo Temática na Meta 01 (Solicitada pelo Usuário) */}
                    {featured && (
                      <div className="absolute inset-0 z-0">
                        <img
                          src={mov.metaImage || mov.image}
                          alt=""
                          aria-hidden="true"
                          className="w-full h-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110 opacity-30 mix-blend-overlay"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${mov.color}f2 0%, ${mov.color}d9 60%, ${mov.color}bf 100%)`,
                          }}
                        />
                        <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />
                      </div>
                    )}
                    
                    <div className="relative z-10 flex items-center justify-between mb-8">
                      <div
                        className={cn(
                          'w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm',
                          featured ? 'bg-white/20 backdrop-blur-md' : 'bg-white border border-slate-200',
                        )}
                        style={!featured ? { color: mov.color } : undefined}
                      >
                        <Check className="w-6 h-6" style={{ color: featured ? '#fff' : mov.color }} />
                      </div>
                      <span
                        className={cn(
                          'font-display font-black text-xs md:text-sm tracking-wider tabular-nums px-4 py-1.5 rounded-full',
                          featured ? 'bg-white/20 text-white backdrop-blur-md border border-white/30' : 'bg-slate-200/70 text-slate-600',
                        )}
                      >
                        META {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p
                      className={cn(
                        'relative z-10 text-lg md:text-xl lg:text-2xl leading-relaxed font-light my-4',
                        featured ? 'text-white drop-shadow-sm font-medium' : 'text-slate-800',
                      )}
                    >
                      {c}
                    </p>

                    <div className="relative z-10 mt-8 pt-6 border-t border-current/10 flex items-center justify-between text-xs md:text-sm">
                      <span className={featured ? 'text-white/80 font-medium' : 'text-slate-400'}>
                        {featured ? 'Compromisso Principal' : 'Meta Auditável'}
                      </span>
                      <span className={cn('font-bold uppercase tracking-wider text-xs', featured ? 'text-white' : '')} style={!featured ? { color: mov.color } : undefined}>
                        Horizonte 2030
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {mov.nota && (
            <p className="text-slate-400 text-xs md:text-sm mt-10 leading-relaxed max-w-4xl italic bg-slate-50 p-6 rounded-2xl border border-slate-100">
              * Nota: {mov.nota}
            </p>
          )}
        </div>
      </section>

      {/* Números reais do ciclo 2025 + monitoramento */}
      <MovimentoNumeros mov={mov} />

      {/* Vídeo teaser e pilares próprios — condicionais */}
      <MovimentoVideo mov={mov} />
      <MovimentoPilares mov={mov} />

      {/* ============ COMO FUNCIONA — ARQUITETURA BENTO ============ */}
      <section id="como-funciona" className="py-24 md:py-36 bg-slate-50/60 border-t border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: mov.color }} />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Metodologia Padronizada
            </span>
          </div>
          <h2 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tight text-slate-900 mb-6 max-w-4xl">
            A mesma arquitetura de <span style={{ color: mov.color }}>todos os Movimentos</span>
          </h2>
          <p className="text-slate-500 text-base md:text-xl font-light max-w-3xl mb-16">
            O {mov.shortName} segue a estrutura de cinco pilares que organiza a Ambição 2030, do engajamento ao reporte contínuo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {ESTRUTURA_MOVIMENTOS.map((item, i) => {
              const lead = i === 0;
              return (
                <Reveal key={item.id} delay={i * 70} className={COMO_FUNCIONA_SPANS[i]}>
                  <div
                    className={cn(
                      'group relative h-full rounded-[2.5rem] p-9 md:p-12 overflow-hidden transition-all duration-300 hover:-translate-y-1.5',
                      lead ? 'text-white shadow-2xl' : 'bg-white border border-slate-200/80 hover:shadow-2xl',
                    )}
                    style={lead ? { background: `linear-gradient(135deg, ${mov.color}, ${mov.color}d9)` } : undefined}
                  >
                    {lead && <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />}
                    <span
                      className="relative block font-display font-black text-6xl md:text-7xl leading-none mb-8"
                      style={{ color: lead ? 'rgba(255,255,255,0.3)' : `${mov.color}33` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={cn('relative font-display font-black text-2xl md:text-3xl tracking-tight leading-tight mb-4', lead ? 'text-white' : 'text-slate-900')}>
                      {item.title}
                    </h3>
                    <p className={cn('relative text-base md:text-lg leading-relaxed font-light', lead ? 'text-white/90' : 'text-slate-500')}>
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blocos condicionais: só aparecem quando há dado real */}
      <MovimentoGovernanca mov={mov} />
      <MovimentoRede mov={mov} />
      <MovimentoRecursos mov={mov} />

      {/* Formas de engajamento (empresas + governos + OSCs) */}
      <MovimentoEngajamento mov={mov} />

      {/* ============ CTA DE ADESÃO + OUTROS MOVIMENTOS ============ */}
      <section id="aderir" className="relative py-24 md:py-36 overflow-hidden scroll-mt-24" style={{ backgroundColor: mov.color }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 text-white/[0.04]">
          <DotGrid className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block text-white/90 text-xs font-bold uppercase tracking-[0.3em] px-5 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/25 shadow-sm mb-6">
              Faça Parte
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tight text-white leading-[1.05] mb-8">
              Comprometa-se com o {mov.shortName}
            </h2>
            <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Assine a Carta de Compromisso e integre a maior rede empresarial de impacto sustentável do país.
            </p>
            <button
              onClick={() => navigate('participar')}
              className="inline-flex items-center justify-center gap-3.5 bg-white text-slate-900 font-display font-black uppercase tracking-wider text-sm md:text-base px-10 py-5 rounded-full shadow-2xl shadow-black/30 hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Quero Aderir Agora</span>
              <ArrowRight className="w-5 h-5 text-slate-900" />
            </button>
          </div>

          <div className="border-t border-white/20 pt-16">
            <div className="flex items-center justify-between mb-10">
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
                Explore Outros Movimentos da Ambição 2030
              </span>
              <button
                onClick={() => navigate('ambicao')}
                className="text-white text-xs md:text-sm font-bold uppercase tracking-wider hover:underline"
              >
                Ver todos (10)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {outros.map((m) => (
                <button
                  key={m.id}
                  onClick={() => navigate('movimento', m.id)}
                  className="group relative flex flex-col justify-between h-44 md:h-56 bg-white rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden text-left cursor-pointer"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-2.5 transition-all duration-300 group-hover:h-3"
                    style={{ backgroundColor: m.color }}
                  />

                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span
                      className="text-[10px] font-black uppercase px-3 py-1 rounded-full text-white tracking-wider shadow-sm"
                      style={{ backgroundColor: m.color }}
                    >
                      ODS {m.ods?.join(', ')}
                    </span>
                  </div>

                  <div className="relative z-10 flex-1 flex items-center justify-center w-full my-3 px-2">
                    <img
                      src={`${import.meta.env.BASE_URL}movimentos/${m.id}.png`}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-auto max-h-14 md:max-h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="relative z-10 flex items-center justify-between w-full pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors truncate">
                      Ver detalhes
                    </span>
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 shadow-sm"
                      style={{ backgroundColor: m.color }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
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
