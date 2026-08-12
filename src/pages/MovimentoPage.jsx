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
      className="sticky top-14 md:top-[70px] z-30 bg-white/90 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center gap-1 md:gap-2 py-2.5 overflow-x-auto">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={(e) => handleClick(e, s.id)}
            aria-current={activeId === s.id ? 'true' : undefined}
            className={cn(
              'whitespace-nowrap text-[11px] font-bold uppercase tracking-widest px-3.5 py-2 rounded-full transition-colors duration-200',
              activeId === s.id ? 'text-white' : 'text-gray-500 hover:text-gray-800',
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
  // Memoizado: useScrollSpy observa a identidade do array de ids.
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
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden" style={{ backgroundColor: mov.color }}>
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
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-40 pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)' }}
        />

        <div className="absolute inset-0 text-white/[0.06] z-0">
          <DotGrid className="w-full h-full" />
        </div>
        <div className="absolute inset-0 grain-overlay opacity-[0.04] mix-blend-overlay pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <button
            onClick={() => navigate('ambicao')}
            className="group inline-flex items-center gap-2 text-white/80 hover:text-white text-[11px] font-bold uppercase tracking-widest mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Voltar para Ambição 2030</span>
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-un-gold animate-pulse" />
              Ambição 2030 · Movimento Oficial
            </span>
            {mov.ods?.length > 0 && (
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] border border-white/10">
                ODS {mov.ods.join(', ')} · {mov.ods.map((n) => ODS_NAMES[n - 1]).join(' · ')}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="inline-flex items-center justify-center bg-white rounded-2xl px-6 py-4 shadow-2xl h-16 md:h-20 w-60 md:w-72 border border-white/40">
              <img
                src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                alt={mov.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Quick Stat Pill em vidro */}
            {mov.numeros?.comprometidas && (
              <div className="hidden md:flex items-center gap-4 px-6 py-3.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <div>
                  <span className="block font-display font-black text-2xl leading-none">
                    {mov.numeros.comprometidas}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">
                    Empresas Comprometidas
                  </span>
                </div>
                {mov.numeros.recomendacao && (
                  <>
                    <div className="w-px h-8 bg-white/20" />
                    <div>
                      <span className="block font-display font-black text-2xl leading-none text-un-gold">
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
          <h1 className="font-display font-black uppercase tracking-tight text-white leading-[0.92] text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl drop-shadow-sm">
            {mov.shortName}
          </h1>

          {/* Subtítulo */}
          <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mb-8">
            {mov.subtitulo || mov.ambicao}
          </p>

          {/* Coordenação */}
          {mov.coordenacao && (
            <div className="pt-6 border-t border-white/20 max-w-3xl flex items-center gap-3">
              <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.25em]">
                Coordenação:
              </span>
              <span className="text-white text-sm font-medium">
                {mov.coordenacao}
              </span>
            </div>
          )}
        </div>
      </section>

      <MovimentoSubNav color={mov.color} sections={sections} ids={sectionIds} />

      {/* ============ A AMBIÇÃO — BENTO GLASS CARD ============ */}
      <section id="oque-e" className="py-20 md:py-28 bg-slate-50/50 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="relative glass-near rounded-[2.5rem] p-9 md:p-14 border border-slate-200/80 bg-white shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: mov.color }} />
            
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: mov.color }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
                    Onde Queremos Chegar
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-black uppercase tracking-tight leading-[1.1] text-slate-900 mb-4">
                  A Ambição <span style={{ color: mov.color }}>2030</span>
                </h2>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light">
                  A meta coletiva do setor privado para acelerar a transformação sustentável do Brasil.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="relative pl-6 md:pl-8 border-l-4" style={{ borderColor: mov.color }}>
                  <Target className="w-8 h-8 mb-4 opacity-80" style={{ color: mov.color }} />
                  <p className="text-slate-800 text-xl md:text-2xl lg:text-[1.65rem] leading-[1.4] font-light tracking-tight">
                    "{mov.ambicao}"
                  </p>
                </div>

                {mov.ods?.length > 0 && (
                  <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-slate-100">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      ODS prioritários conectados:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {mov.ods.map((n) => (
                        <span
                          key={n}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-white font-display font-black text-xs shadow-sm"
                          style={{ backgroundColor: ODS_COLORS[n - 1] }}
                        >
                          <span>ODS {n}</span>
                          <span className="font-sans font-normal opacity-90 text-[10px]">
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
      <section id="compromissos" className="py-20 md:py-28 bg-white border-t border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            badge="Carta de Compromisso"
            title="Nossos"
            titleAccent="Compromissos"
            description="Metas públicas que as organizações assumem ao aderir formalmente ao Movimento."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {mov.compromissos.map((c, i) => {
              const featured = i === 0;
              return (
                <Reveal key={i} delay={i * 60} className={featured ? 'lg:col-span-2' : ''}>
                  <div
                    className={cn(
                      'group relative flex flex-col justify-between h-full rounded-[2rem] p-8 md:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1.5',
                      featured
                        ? 'text-white shadow-2xl'
                        : 'bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-slate-300',
                    )}
                    style={featured ? { background: `linear-gradient(135deg, ${mov.color}, ${mov.color}d9)` } : undefined}
                  >
                    {featured && <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />}
                    
                    <div className="relative z-10 flex items-center justify-between mb-6">
                      <div
                        className={cn(
                          'w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm',
                          featured ? 'bg-white/20 backdrop-blur-md' : 'bg-white border border-slate-200',
                        )}
                        style={!featured ? { color: mov.color } : undefined}
                      >
                        <Check className="w-5 h-5" style={{ color: featured ? '#fff' : mov.color }} />
                      </div>
                      <span
                        className={cn(
                          'font-display font-black text-sm tracking-wider tabular-nums px-3 py-1 rounded-full',
                          featured ? 'bg-white/15 text-white' : 'bg-slate-200/60 text-slate-500',
                        )}
                      >
                        META {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p
                      className={cn(
                        'relative z-10 text-base md:text-lg leading-relaxed font-light my-2',
                        featured ? 'text-white' : 'text-slate-800',
                      )}
                    >
                      {c}
                    </p>

                    <div className="relative z-10 mt-6 pt-5 border-t border-current/10 flex items-center justify-between text-xs">
                      <span className={featured ? 'text-white/70' : 'text-slate-400'}>
                        {featured ? 'Compromisso Principal' : 'Meta Auditável'}
                      </span>
                      <span className={cn('font-bold uppercase tracking-wider text-[10px]', featured ? 'text-un-gold' : '')} style={!featured ? { color: mov.color } : undefined}>
                        Horizonte 2030
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {mov.nota && (
            <p className="text-slate-400 text-xs mt-8 leading-relaxed max-w-3xl italic bg-slate-50 p-4 rounded-xl border border-slate-100">
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
      <section id="como-funciona" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: mov.color }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
              Metodologia Padronizada
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-slate-900 mb-4 max-w-3xl">
            A mesma arquitetura de <span style={{ color: mov.color }}>todos os Movimentos</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mb-12">
            O {mov.shortName} segue a estrutura de cinco pilares que organiza a Ambição 2030, do engajamento ao reporte contínuo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {ESTRUTURA_MOVIMENTOS.map((item, i) => {
              const lead = i === 0;
              return (
                <Reveal key={item.id} delay={i * 70} className={COMO_FUNCIONA_SPANS[i]}>
                  <div
                    className={cn(
                      'group relative h-full rounded-[2rem] p-8 md:p-10 overflow-hidden transition-all duration-300 hover:-translate-y-1',
                      lead ? 'text-white shadow-2xl' : 'bg-white border border-slate-200/80 hover:shadow-xl',
                    )}
                    style={lead ? { background: `linear-gradient(135deg, ${mov.color}, ${mov.color}d9)` } : undefined}
                  >
                    {lead && <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />}
                    <span
                      className="relative block font-display font-black text-5xl md:text-6xl leading-none mb-6"
                      style={{ color: lead ? 'rgba(255,255,255,0.3)' : `${mov.color}33` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={cn('relative font-display font-black text-xl md:text-2xl tracking-tight leading-tight mb-3', lead ? 'text-white' : 'text-slate-900')}>
                      {item.title}
                    </h3>
                    <p className={cn('relative text-sm md:text-base leading-relaxed font-light', lead ? 'text-white/90' : 'text-slate-500')}>
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
      <section id="aderir" className="relative py-20 md:py-28 overflow-hidden scroll-mt-24" style={{ backgroundColor: mov.color }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 text-white/[0.04]">
          <DotGrid className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-un-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Faça Parte
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-[1.1] mb-6">
              Comprometa-se com o <span className="text-un-gold">{mov.shortName}</span>
            </h2>
            <p className="text-white/85 text-base md:text-xl font-light leading-relaxed mb-8">
              Assine a Carta de Compromisso e integre a maior rede empresarial de impacto sustentável do país.
            </p>
            <button
              onClick={() => navigate('participar')}
              className="inline-flex items-center justify-center gap-3 bg-un-gold text-un-blue font-bold uppercase tracking-wider text-sm px-9 py-4 rounded-full shadow-2xl shadow-black/20 hover:bg-white hover:text-un-blue hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Quero Aderir Agora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="border-t border-white/20 pt-14">
            <div className="flex items-center justify-between mb-8">
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest">
                Explore Outros Movimentos da Ambição 2030
              </span>
              <button
                onClick={() => navigate('ambicao')}
                className="text-white text-xs font-bold uppercase tracking-wider hover:underline"
              >
                Ver todos (10)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {outros.map((m) => (
                <button
                  key={m.id}
                  onClick={() => navigate('movimento', m.id)}
                  className="group relative flex flex-col justify-between h-40 md:h-48 bg-white rounded-2xl md:rounded-3xl p-5 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 overflow-hidden text-left cursor-pointer"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-2 transition-all duration-300 group-hover:h-2.5"
                    style={{ backgroundColor: m.color }}
                  />

                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span
                      className="text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full text-white tracking-wider shadow-sm"
                      style={{ backgroundColor: m.color }}
                    >
                      ODS {m.ods?.join(', ')}
                    </span>
                  </div>

                  <div className="relative z-10 flex-1 flex items-center justify-center w-full my-2 px-2">
                    <img
                      src={`${import.meta.env.BASE_URL}movimentos/${m.id}.png`}
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-auto max-h-12 md:max-h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="relative z-10 flex items-center justify-between w-full pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-900 transition-colors truncate">
                      Ver detalhes
                    </span>
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 shadow-sm"
                      style={{ backgroundColor: m.color }}
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
