import React, { useState } from 'react';
import { Check, FileText, ArrowUpRight, Users2, ClipboardList, Eye, Building2 } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { cn } from '../../utils/cn';
import { MODALIDADES, FORMAS_ENGAJAMENTO, MONITORAMENTO } from '../../data/ambicao2030';
import { EmpresasModal } from '../ui/EmpresasModal';

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
  <div className="mb-14 md:mb-20 max-w-4xl">
    <div className="flex items-center gap-3.5 mb-5">
      <span className="w-10 h-0.5 rounded-full" style={{ backgroundColor: color }} />
      <span
        className={cn(
          'text-xs font-bold uppercase tracking-[0.25em]',
          inverted ? 'text-white/60' : 'text-slate-400',
        )}
      >
        {eyebrow}
      </span>
    </div>
    <h2
      className={cn(
        'font-display font-black uppercase tracking-tight leading-[1.04] text-3xl md:text-5xl lg:text-6xl',
        inverted ? 'text-white' : 'text-slate-900',
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
          'mt-6 text-base md:text-xl leading-relaxed font-light max-w-3xl',
          inverted ? 'text-white/70' : 'text-slate-500',
        )}
      >
        {description}
      </p>
    )}
  </div>
);

/** Números de engajamento do Movimento com composição circular e Modal de Empresas. */
export const MovimentoNumeros = ({ mov }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const n = mov.numeros;
  if (!n?.comprometidas) return null;

  return (
    <>
      <section id="numeros" className="py-24 md:py-36 bg-white border-t border-slate-100 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <BlocoHeader
            color={mov.color}
            eyebrow="Onde estamos"
            title="Principais"
            titleAccent="números"
            description="Dados oficiais do 4º ciclo de coleta de indicadores da Ambição 2030 (2025/2026)."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Composição visual circular com ícone + imagem temática (Estilo Oficial Pacto) */}
            <Reveal className="lg:col-span-6">
              <div className="relative flex items-center justify-center p-4">
                {/* Glow de fundo */}
                <div
                  className="absolute w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: mov.color }}
                />

                {/* Círculo Principal de Foto com Moldura dupla */}
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[26rem] md:h-[26rem] rounded-full p-2.5 bg-white shadow-2xl border-4" style={{ borderColor: `${mov.color}40` }}>
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={mov.image}
                      alt={mov.name}
                      className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Badge circular com o ícone do movimento */}
                  <div
                    className="absolute -left-3 top-1/4 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white"
                    style={{ backgroundColor: mov.color }}
                  >
                    <Building2 className="w-9 h-9 sm:w-10 sm:h-10" />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Painel de Métricas + Botão do Modal de Empresas Comprometidas */}
            <Reveal delay={120} className="lg:col-span-6">
              <div className="space-y-8 bg-slate-50/80 rounded-[3rem] p-10 md:p-14 border border-slate-200/80 shadow-xl">
                {/* Métrica 1: Empresas Comprometidas + Botão com Modal */}
                <div className="pb-8 border-b border-slate-200/80">
                  <span className="block font-display font-black text-6xl md:text-7xl lg:text-8xl text-slate-900 leading-none mb-2">
                    {n.comprometidas}
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-lg md:text-xl font-bold text-slate-700">
                      Empresas Comprometidas
                    </span>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      style={{ backgroundColor: mov.color }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>Empresas</span>
                    </button>
                  </div>
                </div>

                {/* Métricas secundárias */}
                <div className="grid sm:grid-cols-2 gap-8 pt-2">
                  <div>
                    <span className="block font-display font-black text-4xl md:text-5xl text-slate-800 leading-none mb-2">
                      {n.apoiadoras || 14}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      Organizações Apoiadoras
                    </span>
                  </div>

                  <div>
                    <span className="block font-display font-black text-4xl md:text-5xl text-slate-800 leading-none mb-2">
                      {n.governos || 2}
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      Governos
                    </span>
                  </div>
                </div>

                {/* Rodapé informativo */}
                {n.recomendacao && (
                  <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                    <span>NPS Média do Movimento:</span>
                    <span className="font-display font-black text-lg text-slate-800">
                      {n.recomendacao} / 10
                    </span>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Modal de Empresas Comprometidas */}
      <EmpresasModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        movimento={mov}
      />
    </>
  );
};

/** Vídeo teaser — só renderiza quando há videoId. */
export const MovimentoVideo = ({ mov }) => {
  if (!mov.videoId) return null;
  return (
    <section className="py-24 md:py-36 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader color={mov.color} eyebrow="Assista" title="Vídeo" titleAccent="teaser" />
        <Reveal>
          <div className="relative rounded-[3rem] overflow-hidden bg-un-blue aspect-video shadow-2xl border border-slate-200">
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

const PILAR_IMAGES = [
  'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop',
];

/** Pilares de atuação próprios do Movimento. */
export const MovimentoPilares = ({ mov }) => {
  if (!mov.pilares?.length) return null;
  return (
    <section id="pilares" className="py-24 md:py-36 bg-slate-100/90 border-t border-slate-200/80 scroll-mt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <BlocoHeader
          color={mov.color}
          eyebrow="Como trabalhamos"
          title="Pilares de"
          titleAccent="Atuação"
        />
        <Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 list-none m-0 p-0">
            {mov.pilares.map((p, i) => (
              <li
                key={p.title ?? p}
                className="group relative bg-white/90 backdrop-blur-md border border-white/80 rounded-3xl p-8 overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background Image no Card sem interferir na leitura (Glassmorphism com imagem) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={PILAR_IMAGES[i % PILAR_IMAGES.length]}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover opacity-[0.14] group-hover:opacity-25 scale-100 group-hover:scale-110 transition-all duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-white/95" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-black text-sm tracking-wider shadow-md text-white"
                      style={{ backgroundColor: mov.color }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      Pilar {i + 1}
                    </span>
                  </div>

                  <p className="font-display font-black text-xl text-slate-900 leading-snug mb-3">
                    {p.title ?? p}
                  </p>
                  {p.desc && (
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light mt-2">{p.desc}</p>
                  )}
                </div>
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
    <section id="governanca" className="py-24 md:py-36 bg-white border-t border-slate-100 scroll-mt-24">
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
            <div className="mb-12">
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-400 mb-8">
                Comitê Consultivo
              </span>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 list-none m-0 p-0">
                {consultivo.map((p) => (
                  <li key={p.nome} className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-7 text-center hover:bg-white hover:shadow-xl transition-all">
                    <span
                      className="w-16 h-16 rounded-full mx-auto mb-5 grid place-items-center text-white font-display font-black text-xl shadow-lg"
                      style={{ background: `linear-gradient(140deg, ${mov.color}, ${mov.color}bb)` }}
                      aria-hidden="true"
                    >
                      {iniciais(p.nome)}
                    </span>
                    <p className="font-bold text-base text-slate-900 leading-snug">{p.nome}</p>
                    {p.org && (
                      <p className="text-xs md:text-sm text-slate-500 mt-2 leading-snug font-light">{p.org}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {executivo.length > 0 && (
          <Reveal delay={120}>
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-10 md:p-14">
              <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-400 mb-6">
                <Users2 className="w-4 h-4" style={{ color: mov.color }} />
                Comitê Executivo
              </span>
              <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
                {executivo.map((o) => (
                  <li
                    key={o.nome}
                    className="text-sm md:text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm"
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
    <section className="py-24 md:py-36 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader
          color={mov.color}
          eyebrow="Rede de apoio"
          title="Quem"
          titleAccent="sustenta"
        />
        <div className="space-y-8">
          {grupos.map((g, gi) => (
            <Reveal key={g.titulo} delay={gi * 120}>
              <div className="bg-slate-50/80 border border-slate-200/80 rounded-3xl p-10 md:p-14">
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-400 mb-8">
                  {g.titulo}
                </span>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 list-none m-0 p-0">
                  {g.itens.map((o) => (
                    <li
                      key={o.nome}
                      className="bg-white border border-slate-200 rounded-2xl h-24 flex items-center justify-center px-5 text-center shadow-sm"
                    >
                      <span className="text-xs md:text-sm font-semibold text-slate-700 leading-snug">
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

const RECURSO_COVERS = [
  'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
];

/** Publicações e materiais do Movimento. */
export const MovimentoRecursos = ({ mov }) => {
  if (!mov.recursos?.length) return null;
  return (
    <section className="py-24 md:py-36 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <BlocoHeader
          color={mov.color}
          eyebrow="Conhecimento"
          title="Publicações e"
          titleAccent="materiais"
        />
        <Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none m-0 p-0">
            {mov.recursos.map((r, i) => {
              const coverImg = r.capa || mov.metaImage || mov.image || RECURSO_COVERS[i % RECURSO_COVERS.length];
              return (
                <li key={r.titulo}>
                  <a
                    href={r.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col justify-between h-full bg-white border border-slate-200/80 rounded-[2.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300"
                  >
                    {/* Capa Visual da Publicação (Nítida com gradiente e badge) */}
                    <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-900">
                      <img
                        src={coverImg}
                        alt={r.titulo}
                        className="w-full h-full object-cover scale-100 group-hover:scale-108 transition-transform duration-700 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                      {/* Badge do Tipo de Material */}
                      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-wider shadow-md">
                        <FileText className="w-3.5 h-3.5" style={{ color: mov.color }} />
                        <span>{r.tipo || 'Publicação Oficial'}</span>
                      </div>

                      {/* Identificação do Movimento no rodapé da capa */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                        <span className="truncate pr-2 font-display font-bold uppercase tracking-wider text-[11px] text-white">
                          {mov.name}
                        </span>
                        <span className="shrink-0 px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold text-white border border-white/30">
                          PDF
                        </span>
                      </div>
                    </div>

                    {/* Conteúdo Informativo */}
                    <div className="p-8 flex flex-col justify-between flex-1 bg-white">
                      <h3 className="font-display font-black text-lg md:text-xl text-slate-900 leading-snug group-hover:text-slate-800 transition-colors mb-6">
                        {r.titulo}
                      </h3>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <span
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors"
                          style={{ color: mov.color }}
                        >
                          <span>Acessar Material</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

/** Modalidades de empresa + formas de engajamento de governos e OSCs. */
export const MovimentoEngajamento = ({ mov }) => (
  <section id="engajamento" className="py-24 md:py-36 text-white scroll-mt-24 relative overflow-hidden" style={{ backgroundColor: mov.color }}>
    <div className="absolute inset-0 bg-black/15 pointer-events-none" />
    <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
      <BlocoHeader
        color="#fff"
        eyebrow="Como participar"
        title="Formas de"
        titleAccent="engajamento"
        description="Empresas de todos os portes assinam a Carta de Compromisso. Governos e sociedade civil também participam ativamente."
        inverted={true}
      />

      {/* Duas modalidades de empresa — assimetria Bento 2:3 */}
      <div className="grid md:grid-cols-5 gap-8 md:gap-10 mb-8">
        {MODALIDADES.map((mod, i) => (
          <Reveal key={mod.id} delay={i * 120} className={i === 0 ? 'md:col-span-2' : 'md:col-span-3'}>
            <div className="group relative h-full rounded-[3rem] p-10 md:p-14 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 bg-white text-slate-900 shadow-2xl border border-white/40">
              <span className="relative block text-xs font-bold uppercase tracking-[0.25em] mb-6 text-slate-400">
                {i === 0 ? 'Jornada de Aprendizado' : 'Protagonismo & Liderança'}
              </span>
              <h3 className="relative font-display font-black text-2xl md:text-4xl tracking-tight mb-5 text-slate-900">
                {mod.title}
              </h3>
              <p className="relative text-base md:text-lg leading-relaxed font-light text-slate-600">
                {mod.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Governos e organizações apoiadoras */}
      <Reveal delay={240}>
        <div className="rounded-[2.5rem] bg-white text-slate-900 border border-white/40 p-10 md:p-16 shadow-2xl">
          <span className="block text-xs font-bold uppercase tracking-[0.22em] text-slate-400 mb-8">
            Atores Não-Empresariais
          </span>
          <dl className="grid md:grid-cols-2 gap-x-12 gap-y-8 m-0">
            {FORMAS_ENGAJAMENTO.map((f) => (
              <div key={f.id}>
                <dt className="flex items-center gap-3 font-bold text-base md:text-lg text-slate-900 mb-3">
                  <Check className="w-5 h-5 shrink-0" style={{ color: mov.color }} />
                  {f.title}
                </dt>
                <dd className="text-sm md:text-base text-slate-600 leading-relaxed font-light m-0">
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
