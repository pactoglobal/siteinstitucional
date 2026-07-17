import React from 'react';
import { ArrowLeft, ArrowRight, Check, Target } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { cn } from '../utils/cn';
import { getMovimento, MOVIMENTOS, MODALIDADES, ESTRUTURA_MOVIMENTOS } from '../data/ambicao2030';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

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

// Seções ancoradas pela sub-navegação sticky. Definidas fora do componente
// para manter identidade estável (useScrollSpy depende disso).
const SUBNAV_SECTIONS = [
  { id: 'oque-e', label: 'O que é' },
  { id: 'compromissos', label: 'Compromissos' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'engajamento', label: 'Participação' },
  { id: 'aderir', label: 'Aderir' },
];
const SUBNAV_IDS = SUBNAV_SECTIONS.map((s) => s.id);

const MovimentoSubNav = ({ color }) => {
  const activeId = useScrollSpy(SUBNAV_IDS);

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
        {SUBNAV_SECTIONS.map((s) => (
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
  if (!mov) return <NotFound navigate={navigate} />;

  const outros = MOVIMENTOS.filter((m) => m.id !== mov.id).slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero na cor do Movimento */}
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden" style={{ backgroundColor: mov.color }}>
        <div className="absolute inset-0 z-0">
          <img src={mov.image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${mov.color}cc, ${mov.color})` }} />
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
            <div className="inline-flex bg-white rounded-xl px-4 py-2.5 shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                alt={mov.name}
                className="h-7 md:h-8 w-auto object-contain"
              />
            </div>
          </div>

          <h1 className="font-display font-black uppercase tracking-tight text-white leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-6 max-w-4xl">
            {mov.shortName}
          </h1>

          <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
            {mov.ambicao}
          </p>
        </div>
      </section>

      <MovimentoSubNav color={mov.color} />

      {/* A Ambição */}
      <section id="oque-e" className="py-16 md:py-24 bg-white scroll-mt-24">
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
      <section id="compromissos" className="py-16 md:py-24 bg-un-surface scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            barColor="bg-un-blue"
            badge="Carta de Compromisso"
            title="Nossos"
            titleAccent="Compromissos"
            description="Metas que as empresas se comprometem a alcançar até 2030 ao assinar a Carta de Compromisso deste Movimento."
          />
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {mov.compromissos.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group flex gap-4 bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${mov.color}1A` }}
                    >
                      <Check className="w-5 h-5" style={{ color: mov.color }} />
                    </div>
                    <span className="text-[10px] font-bold text-gray-300 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light self-center">
                    {c}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          {mov.nota && (
            <p className="text-gray-400 text-xs mt-6 leading-relaxed max-w-3xl italic">{mov.nota}</p>
          )}
        </div>
      </section>

      {/* Como funciona — estrutura compartilhada por todos os Movimentos,
          na cor deste Movimento */}
      <section id="como-funciona" className="py-16 md:py-24 bg-white scroll-mt-24">
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
          <div className="space-y-px bg-gray-200/60 rounded-3xl overflow-hidden border border-gray-100">
            {ESTRUTURA_MOVIMENTOS.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 bg-white p-7 md:p-9 transition-colors duration-300">
                  <span
                    className="font-display font-black text-4xl md:text-5xl leading-none shrink-0 md:w-24 transition-colors duration-300"
                    style={{ color: `${mov.color}26` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-black text-lg md:text-2xl text-gray-900 tracking-tight shrink-0 md:w-64 leading-tight">
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

      {/* Modalidades de Engajamento */}
      <section id="engajamento" className="py-16 md:py-24 bg-un-surface scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            barColor="bg-un-green"
            badge="Como participar"
            title="Modalidades de"
            titleAccent="Engajamento"
          />
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {MODALIDADES.map((mod, i) => (
              <div
                key={mod.id}
                className="relative bg-white rounded-3xl p-8 md:p-10 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: mov.color, opacity: i === 0 ? 0.45 : 1 }} />
                <h3 className="font-display font-black text-xl md:text-2xl text-gray-900 tracking-tight mb-3">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + outros movimentos */}
      <section id="aderir" className="py-16 md:py-24 scroll-mt-24" style={{ backgroundColor: mov.color }}>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {outros.map((m) => (
                <button
                  key={m.id}
                  onClick={() => navigate('movimento', m.id)}
                  className="group flex items-center justify-center bg-white hover:shadow-xl rounded-2xl px-5 py-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}movimentos/${m.id}.png`}
                    alt={m.name}
                    className="max-h-9 max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
