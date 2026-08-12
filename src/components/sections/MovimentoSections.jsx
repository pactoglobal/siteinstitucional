import React from 'react';
import { Check, FileText, ArrowUpRight, Users2, ClipboardList } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../utils/cn';
import { MODALIDADES, FORMAS_ENGAJAMENTO, MONITORAMENTO } from '../../data/ambicao2030';

// ============================================================
// Blocos das páginas de Movimento.
// Todos recebem `mov` e só renderizam quando há dado — assim a
// mesma página serve para Movimentos com governança/vídeo/rede
// publicados e para os que ainda não têm esse conteúdo.
// ============================================================

const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={cn('reveal', isVisible && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/** Cabeçalho de bloco: régua na cor do Movimento + eyebrow + título. */
export const BlocoHeader = ({ color, eyebrow, title, titleAccent, description, inverted = false }) => (
  <div className="mb-10 md:mb-14 max-w-3xl">
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px" style={{ backgroundColor: color }} />
      <span
        className={cn(
          'text-[10px] font-bold uppercase tracking-[0.25em]',
          inverted ? 'text-white/60' : 'text-gray-500',
        )}
      >
        {eyebrow}
      </span>
    </div>
    <h2
      className={cn(
        'font-display font-black uppercase tracking-tight leading-[1.06] text-3xl md:text-[2.6rem]',
        inverted ? 'text-white' : 'text-gray-900',
      )}
    >
      {title}{' '}
      {titleAccent && (
        <span style={{ color: inverted ? '#CCB146' : color }}>{titleAccent}</span>
      )}
    </h2>
    {description && (
      <p
        className={cn(
          'mt-5 text-sm md:text-base leading-relaxed font-light',
          inverted ? 'text-white/70' : 'text-gray-500',
        )}
      >
        {description}
      </p>
    )}
  </div>
);

/** Números de engajamento do Movimento (Relatório Ambição 2030 — Ano 4). */
export const MovimentoNumeros = ({ mov }) => {
  const n = mov.numeros;
  if (!n?.comprometidas) return null;

  const apoio = [
    { value: n.respondentes, label: 'Organizações que responderam ao 4º ciclo de indicadores' },
    { value: n.recomendacao, label: 'Nota média de recomendação (NPS do Movimento)' },
  ].filter((x) => x.value != null);

  return (
    <section id="numeros" className="py-20 md:py-28 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader
          color={mov.color}
          eyebrow="Onde estamos"
          title="Em"
          titleAccent="números"
          description="Dados oficiais do 4º ciclo de coleta de indicadores da Ambição 2030 (2025/2026)."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {/* Métrica protagonista, na cor do Movimento */}
          <Reveal className="lg:col-span-5">
            <div
              className="relative h-full rounded-[2.5rem] p-9 md:p-12 overflow-hidden text-white shadow-2xl flex flex-col justify-between"
              style={{ background: `linear-gradient(135deg, ${mov.color}, ${mov.color}cc)` }}
            >
              <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 mb-6 px-3 py-1 bg-white/15 backdrop-blur-md rounded-full border border-white/20">
                  Adesão Oficial
                </span>
                <span
                  className="block font-display font-black text-7xl md:text-8xl lg:text-9xl leading-[0.85] tabular-nums"
                  style={{ textShadow: '0 0 35px rgba(255,255,255,0.25)' }}
                >
                  {n.comprometidas}
                </span>
              </div>
              <div className="relative z-10 mt-8 pt-6 border-t border-white/20">
                <span className="block text-white text-base md:text-lg font-light leading-relaxed">
                  organizações brasileiras assinaram a Carta de Compromisso deste Movimento.
                </span>
              </div>
            </div>
          </Reveal>

          {/* Apoio + monitoramento, em réguas Bento */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="h-full rounded-[2.5rem] bg-slate-50/80 border border-slate-200/80 p-9 md:p-12 flex flex-col justify-between">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                  Engajamento & Indicadores
                </span>
                <dl className="divide-y divide-slate-200/80 border-t border-slate-200/80">
                  {apoio.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-6 py-4">
                      <dt className="text-slate-600 text-sm md:text-base font-light">{s.label}</dt>
                      <dd
                        className="font-display font-black text-3xl md:text-4xl leading-none tabular-nums shrink-0"
                        style={{ color: mov.color }}
                      >
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Monitoramento — como o compromisso é acompanhado */}
              <div className="mt-8 pt-8 border-t border-slate-200/80">
                <span className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500 mb-5">
                  <ClipboardList className="w-4 h-4" style={{ color: mov.color }} />
                  {MONITORAMENTO.title}
                </span>
                <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed mb-6">
                  {MONITORAMENTO.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none m-0 p-0">
                  {MONITORAMENTO.processos.map((p) => (
                    <li key={p.title} className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm">
                      <p className="font-bold text-sm text-slate-900 mb-1.5">{p.title}</p>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        {p.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/** Vídeo teaser — só renderiza quando há videoId. */
export const MovimentoVideo = ({ mov }) => {
  if (!mov.videoId) return null;
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader color={mov.color} eyebrow="Assista" title="Vídeo" titleAccent="teaser" />
        <Reveal>
          <div className="relative rounded-[2.5rem] overflow-hidden bg-un-blue aspect-video shadow-2xl border border-slate-200">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${mov.videoId}`}
              title={`Vídeo teaser — ${mov.name}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};

/** Pilares de atuação próprios do Movimento. */
export const MovimentoPilares = ({ mov }) => {
  if (!mov.pilares?.length) return null;
  return (
    <section id="pilares" className="py-20 md:py-28 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader
          color={mov.color}
          eyebrow="Como trabalhamos"
          title="Pilares de"
          titleAccent="atuação"
        />
        <Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 list-none m-0 p-0">
            {mov.pilares.map((p, i) => (
              <li key={p.title ?? p} className="relative bg-slate-50/80 border border-slate-200/80 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-lg">
                <span className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundColor: mov.color }} />
                <span
                  className="block font-display font-black text-sm tabular-nums mb-4"
                  style={{ color: mov.color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-bold text-[0.95rem] text-slate-900 leading-snug">
                  {p.title ?? p}
                </p>
                {p.desc && (
                  <p className="text-xs text-slate-500 leading-relaxed font-light mt-2">{p.desc}</p>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
};

/** Governança: Comitê Consultivo e Comitê Executivo. */
export const MovimentoGovernanca = ({ mov }) => {
  const consultivo = mov.comiteConsultivo ?? [];
  const executivo = mov.comiteExecutivo ?? [];
  if (!consultivo.length && !executivo.length) return null;

  const iniciais = (nome) =>
    nome
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
      .toUpperCase();

  return (
    <section id="governanca" className="py-20 md:py-28 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader
          color={mov.color}
          eyebrow="Governança"
          title="Quem"
          titleAccent="orienta"
          description="Lideranças e especialistas nacionais que direcionam a estratégia técnica do Movimento."
        />

        {consultivo.length > 0 && (
          <Reveal>
            <div className="mb-8">
              <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                Comitê Consultivo
              </span>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 list-none m-0 p-0">
                {consultivo.map((p) => (
                  <li key={p.nome} className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 text-center hover:bg-white hover:shadow-md transition-all">
                    <span
                      className="w-14 h-14 rounded-full mx-auto mb-4 grid place-items-center text-white font-display font-black text-lg shadow-md"
                      style={{ background: `linear-gradient(140deg, ${mov.color}, ${mov.color}bb)` }}
                      aria-hidden="true"
                    >
                      {iniciais(p.nome)}
                    </span>
                    <p className="font-bold text-sm text-slate-900 leading-snug">{p.nome}</p>
                    {p.org && (
                      <p className="text-xs text-slate-500 mt-1.5 leading-snug font-light">{p.org}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {executivo.length > 0 && (
          <Reveal delay={120}>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-8 md:p-10">
              <span className="flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-5">
                <Users2 className="w-4 h-4" style={{ color: mov.color }} />
                Comitê Executivo
              </span>
              <ul className="flex flex-wrap gap-2.5 list-none m-0 p-0">
                {executivo.map((o) => (
                  <li
                    key={o.nome}
                    className="text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm"
                  >
                    {o.nome}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
};

/** Rede de apoio: Embaixadoras e Parceiras Estratégicas. */
export const MovimentoRede = ({ mov }) => {
  const grupos = [
    { titulo: 'Empresas Embaixadoras', itens: mov.embaixadoras ?? [] },
    { titulo: 'Parceiras Estratégicas', itens: mov.parceirasEstrategicas ?? [] },
  ].filter((g) => g.itens.length > 0);
  if (!grupos.length) return null;

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader
          color={mov.color}
          eyebrow="Rede de apoio"
          title="Quem"
          titleAccent="sustenta"
        />
        <div className="space-y-6">
          {grupos.map((g, gi) => (
            <Reveal key={g.titulo} delay={gi * 120}>
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-8 md:p-10">
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                  {g.titulo}
                </span>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 list-none m-0 p-0">
                  {g.itens.map((o) => (
                    <li
                      key={o.nome}
                      className="bg-white border border-slate-200 rounded-xl h-20 flex items-center justify-center px-4 text-center shadow-sm"
                    >
                      <span className="text-xs font-semibold text-slate-700 leading-snug">
                        {o.nome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

/** Publicações e materiais do Movimento. */
export const MovimentoRecursos = ({ mov }) => {
  if (!mov.recursos?.length) return null;
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader
          color={mov.color}
          eyebrow="Conhecimento"
          title="Publicações e"
          titleAccent="materiais"
        />
        <Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none m-0 p-0">
            {mov.recursos.map((r) => (
              <li key={r.titulo}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between h-full bg-slate-50/80 border border-slate-200/80 rounded-2xl p-7 transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-xl"
                >
                  <FileText className="w-6 h-6 mb-5" style={{ color: mov.color }} />
                  <span className="font-bold text-[0.95rem] text-slate-900 leading-snug">
                    {r.titulo}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-700 transition-colors">
                    Acessar Material
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

/** Modalidades de empresa + formas de engajamento de governos e OSCs. */
export const MovimentoEngajamento = ({ mov }) => (
  <section id="engajamento" className="py-20 md:py-28 bg-white border-t border-slate-100 scroll-mt-24">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <BlocoHeader
        color={mov.color}
        eyebrow="Como participar"
        title="Formas de"
        titleAccent="engajamento"
        description="Empresas de todos os portes assinam a Carta de Compromisso. Governos e sociedade civil também participam ativamente."
      />

      {/* Duas modalidades de empresa — assimetria Bento 2:3 */}
      <div className="grid md:grid-cols-5 gap-5 md:gap-6 mb-6">
        {MODALIDADES.map((mod, i) => (
          <Reveal key={mod.id} delay={i * 120} className={i === 0 ? 'md:col-span-2' : 'md:col-span-3'}>
            <div
              className={cn(
                'group relative h-full rounded-[2.5rem] p-9 md:p-11 overflow-hidden transition-all duration-300 hover:-translate-y-1',
                i === 0
                  ? 'bg-slate-50/80 border border-slate-200/80'
                  : 'text-white shadow-2xl',
              )}
              style={i !== 0 ? { background: `linear-gradient(135deg, ${mov.color}, ${mov.color}d9)` } : undefined}
            >
              {i !== 0 && (
                <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />
              )}
              <span
                className={cn(
                  'relative block text-[10px] font-bold uppercase tracking-[0.25em] mb-5',
                  i === 0 ? 'text-slate-400' : 'text-white/80',
                )}
              >
                {i === 0 ? 'Jornada de Aprendizado' : 'Protagonismo & Liderança'}
              </span>
              <h3
                className={cn(
                  'relative font-display font-black text-2xl md:text-[1.9rem] tracking-tight mb-4',
                  i === 0 ? 'text-slate-900' : 'text-white',
                )}
              >
                {mod.title}
              </h3>
              <p
                className={cn(
                  'relative text-sm md:text-base leading-relaxed font-light',
                  i === 0 ? 'text-slate-600' : 'text-white/90',
                )}
              >
                {mod.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Governos e organizações apoiadoras */}
      <Reveal delay={240}>
        <div className="rounded-[2rem] border-t-4 border-un-gold bg-slate-50/80 border border-slate-200/80 p-8 md:p-12">
          <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 mb-7">
            Atores Não-Empresariais
          </span>
          <dl className="grid md:grid-cols-2 gap-x-10 gap-y-7 m-0">
            {FORMAS_ENGAJAMENTO.map((f) => (
              <div key={f.id}>
                <dt className="flex items-center gap-2.5 font-bold text-[0.95rem] text-slate-900 mb-2">
                  <Check className="w-4 h-4 shrink-0" style={{ color: mov.color }} />
                  {f.title}
                </dt>
                <dd className="text-sm text-slate-500 leading-relaxed font-light m-0">
                  {f.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  </section>
);
