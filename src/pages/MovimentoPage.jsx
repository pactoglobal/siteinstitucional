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
      {/* Hero do Movimento: imagem em destaque + cor do Movimento.
          ⚠ mov.image ainda é placeholder (Unsplash) — trocar pelas fotos
          oficiais de cada Movimento em public/images/movimentos/. */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden" style={{ backgroundColor: mov.color }}>
        <div className="absolute inset-0 z-0">
          <img src={mov.image} alt="" aria-hidden="true" className="w-full h-full object-cover" />
          {/* Vinheta na cor do Movimento: forte à esquerda (texto), leve à direita (imagem) */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(100deg, ${mov.color} 0%, ${mov.color}e6 42%, ${mov.color}73 100%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${mov.color} 0%, transparent 45%)` }}
          />
        </div>
        <div className="absolute inset-0 text-white/[0.06] z-0">
          <DotGrid className="w-full h-full" />
        </div>
        <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none z-0" />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <button
            onClick={() => navigate('ambicao')}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[11px] font-bold uppercase tracking-widest mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Ambição 2030
          </button>

          <div className="flex items-center gap-4 mb-7">
            <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em]">
              Ambição 2030 · Movimento
            </span>
            {mov.ods?.length > 0 && (
              <span className="hidden sm:inline-flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                ODS {mov.ods.join(', ')} · {mov.ods.map((n) => ODS_NAMES[n - 1]).join(' · ')}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-5 mb-6">
            <div className="inline-flex items-center justify-center bg-white rounded-xl px-5 py-3 shadow-lg h-14 md:h-16 w-52 md:w-64">
              <img
                src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                alt={mov.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Título */}
          <h1 className="font-display font-black uppercase tracking-tight text-white leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-5 max-w-4xl">
            {mov.shortName}
          </h1>

          {/* Subtítulo — usa o campo dedicado quando houver; senão, a ambição */}
          <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
            {mov.subtitulo || mov.ambicao}
          </p>

          {/* Coordenação da plataforma — só renderiza com dado real */}
          {mov.coordenacao && (
            <div className="mt-9 pt-7 border-t border-white/20 max-w-3xl">
              <span className="block text-white/60 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                Coordenação
              </span>
              <p className="text-white text-sm md:text-base font-medium leading-relaxed">
                {mov.coordenacao}
              </p>
            </div>
          )}
        </div>
      </section>

      <MovimentoSubNav color={mov.color} sections={sections} ids={sectionIds} />

      {/* A Ambição */}
      <section id="oque-e" className="py-20 md:py-28 bg-white scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: mov.color }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">A Ambição</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight leading-[1.2] text-gray-900">
                Onde queremos <span style={{ color: mov.color }}>chegar</span>
              </h2>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <Target className="w-8 h-8 mb-5" style={{ color: mov.color }} />
              <p className="text-gray-700 text-lg md:text-2xl leading-relaxed font-light">
                {mov.ambicao}
              </p>
              {mov.ods?.length > 0 && (
                <div className="flex items-center gap-3 mt-8 pt-8 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">ODS relacionados</span>
                  <div className="flex gap-2">
                    {mov.ods.map((n) => (
                      <span
                        key={n}
                        title={ODS_NAMES[n - 1]}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-black text-sm"
                        style={{ backgroundColor: ODS_COLORS[n - 1] }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section id="compromissos" className="py-20 md:py-28 bg-white border-t border-gray-100 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            badge="Carta de Compromisso"
            title="Nossos"
            titleAccent="Compromissos"
            description="Metas que as empresas se comprometem a alcançar até 2030 ao assinar a Carta de Compromisso deste Movimento."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {mov.compromissos.map((c, i) => {
              const featured = i % 3 === 0;
              return (
                <Reveal key={i} delay={i * 60} className={featured ? 'lg:col-span-2' : ''}>
                  <div
                    className={cn(
                      'group relative flex gap-4 h-full rounded-3xl p-6 md:p-8 overflow-hidden transition-all duration-300',
                      featured ? 'text-white' : 'bg-un-surface hover:shadow-md',
                    )}
                    style={featured ? { background: `linear-gradient(135deg, ${mov.color}, ${mov.color}cc)` } : undefined}
                  >
                    {featured && <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />}
                    <div className="relative flex flex-col items-center gap-2 shrink-0">
                      <div
                        className={cn('w-9 h-9 rounded-xl flex items-center justify-center', featured && 'bg-white/20')}
                        style={!featured ? { backgroundColor: `${mov.color}1A` } : undefined}
                      >
                        <Check className="w-5 h-5" style={{ color: featured ? '#fff' : mov.color }} />
                      </div>
                      <span className={cn('text-[10px] font-bold tabular-nums', featured ? 'text-white/60' : 'text-gray-300')}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p
                      className={cn(
                        'relative text-sm md:text-base leading-relaxed font-light self-center',
                        featured ? 'text-white/95' : 'text-gray-700',
                      )}
                    >
                      {c}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {mov.nota && (
            <p className="text-gray-400 text-xs mt-6 leading-relaxed max-w-3xl italic">{mov.nota}</p>
          )}
        </div>
      </section>

      {/* Números reais do ciclo 2025 + monitoramento */}
      <MovimentoNumeros mov={mov} />

      {/* Vídeo teaser e pilares próprios — condicionais */}
      <MovimentoVideo mov={mov} />
      <MovimentoPilares mov={mov} />

      {/* Como funciona — estrutura compartilhada por todos os Movimentos,
          na cor deste Movimento */}
      <section id="como-funciona" className="py-20 md:py-28 bg-white border-t border-gray-100 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2 h-10 rounded-full" style={{ backgroundColor: mov.color }} />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">Como funciona</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight leading-[1.2] text-gray-900 mb-4 max-w-2xl">
            A mesma arquitetura de <span style={{ color: mov.color }}>todos os Movimentos</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg font-light max-w-2xl mb-10 md:mb-14">
            O {mov.shortName} segue os cinco elementos que organizam todos os Movimentos da Ambição 2030,
            do compromisso público à governança compartilhada.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
            {ESTRUTURA_MOVIMENTOS.map((item, i) => {
              const lead = i === 0;
              return (
                <Reveal key={item.id} delay={i * 70} className={COMO_FUNCIONA_SPANS[i]}>
                  <div
                    className={cn(
                      'group relative h-full rounded-3xl p-7 md:p-9 overflow-hidden transition-colors duration-300',
                      lead ? 'text-white' : 'bg-un-surface',
                    )}
                    style={lead ? { background: `linear-gradient(135deg, ${mov.color}, ${mov.color}cc)` } : undefined}
                  >
                    {lead && <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />}
                    <span
                      className="relative block font-display font-black text-4xl md:text-5xl leading-none mb-5"
                      style={{ color: lead ? 'rgba(255,255,255,0.3)' : `${mov.color}26` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className={cn('relative font-display font-black text-lg md:text-2xl tracking-tight leading-tight mb-3', lead ? 'text-white' : 'text-gray-900')}>
                      {item.title}
                    </h3>
                    <p className={cn('relative text-sm md:text-base leading-relaxed font-light', lead ? 'text-white/85' : 'text-gray-500')}>
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

      {/* CTA + outros movimentos */}
      <section id="aderir" className="py-20 md:py-28 scroll-mt-24" style={{ backgroundColor: mov.color }}>
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight text-white leading-[1.2] mb-4">
              Comprometa-se com o <span className="text-white/80">{mov.shortName}</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light max-w-2xl mx-auto mb-8">
              Assine a Carta de Compromisso e contribua para uma ambição coletiva rumo a 2030.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:!text-gray-900"
                icon={ArrowRight}
                onClick={() => navigate('participar')}
              >
                Quero Aderir
              </Button>
            </div>
          </div>

          <div className="border-t border-white/15 pt-12">
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest text-center mb-6">
              Outros Movimentos
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3.5 md:gap-4">
              {outros.map((m) => (
                <button
                  key={m.id}
                  onClick={() => navigate('movimento', m.id)}
                  className="group relative flex items-center justify-center bg-white hover:shadow-xl rounded-2xl h-22 md:h-26 p-3 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                >
                  {/* Cor do Movimento só no hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300"
                    style={{ backgroundColor: m.color }}
                  />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}movimentos/${m.id}.png`}
                      alt={m.name}
                      loading="lazy"
                      className="h-10 md:h-12 w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
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
