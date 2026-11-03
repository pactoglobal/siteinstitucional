import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useGsap } from '../../hooks/useGsap';
import { useReveal } from '../../hooks/useReveal';
import { EASE, prefereMenosMovimento } from '../../lib/animation';
import { AMBICAO_CHAMADO, AMBICAO_COMO_FAZER_PARTE } from '../../data/ambicao2030';

// ============================================================
// Contador que anima ao entrar em tela.
// ------------------------------------------------------------
// Os valores da RBPG não são todos numéricos ("+2 mil", "+2 mi"),
// então o componente separa prefixo/número/sufixo e anima só a
// parte que é número. O que não casar com o padrão é renderizado
// como veio — nunca inventamos um valor para conseguir animar.
// ============================================================
const PADRAO_VALOR = /^([^\d]*)(\d[\d.,]*)(.*)$/;

// Reveal via CSS + IntersectionObserver (mesmo padrão do resto do site).
// Escolhido de propósito para a copy: se o JS de animação falhar, o CSS
// já deixa o conteúdo no estado final — texto institucional nunca some.
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, visivel] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${visivel ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ContadorAnimado = ({ valor, className = '', style }) => {
  const casou = String(valor).match(PADRAO_VALOR);
  const alvoRef = useRef(null);

  // Uma única chamada: é a ref devolvida aqui que vai ao DOM, e é ela
  // que o ScrollTrigger usa como trigger.
  const raizRef = useGsap(
    ({ gsap, raiz }) => {
      if (!casou) return;
      const numero = Number(casou[2].replace(/\./g, '').replace(',', '.'));
      if (!Number.isFinite(numero)) return;
      const contador = { n: 0 };
      gsap.to(contador, {
        n: numero,
        duration: 1.6,
        ease: EASE.saida,
        scrollTrigger: { trigger: raiz, start: 'top 85%', once: true },
        onUpdate: () => {
          if (alvoRef.current) {
            alvoRef.current.textContent = Math.round(contador.n).toLocaleString('pt-BR');
          }
        },
      });
    },
    [valor],
  );

  if (!casou) return <span className={className} style={style}>{valor}</span>;

  const [, prefixo, numero, sufixo] = casou;
  // Sem animação, o número precisa já estar escrito no HTML — é o que
  // leitores de tela e o estado reduced-motion consomem.
  const inicial = prefereMenosMovimento() ? numero : '0';

  return (
    <span ref={raizRef} className={className} style={style}>
      {/* O valor final fica legível para tecnologia assistiva mesmo
          durante a contagem, que é puramente visual. */}
      <span className="sr-only">{valor}</span>
      <span aria-hidden="true">
        {prefixo}
        <span ref={alvoRef}>{inicial}</span>
        {sufixo}
      </span>
    </span>
  );
};

// ============================================================
// O CHAMADO — abertura narrativa (texto oficial da RBPG).
// Composição editorial: filete + eyebrow, parágrafos em coluna
// estreita e a frase-tese em corpo grande, revelada por máscara.
// ============================================================
export const ChamadoSection = () => {
  // A copy oficial já chegou em dois formatos diferentes (lista de parágrafos
  // e texto único em `description`). Normalizamos aqui para que uma edição em
  // ambicao2030.js mude o texto sem derrubar a página inteira.
  const { eyebrow, title, description, paragrafos, destaque } = AMBICAO_CHAMADO;
  const corpo = paragrafos ?? (description ? [description] : []);
  const tese = destaque ?? title;

  // REGRA DESTA PÁGINA: nenhuma copy institucional depende do GSAP para
  // ficar visível. O texto usa o Reveal do projeto (IntersectionObserver +
  // CSS), que já degrada para o estado final se o JS falhar. O GSAP entra
  // só no que é aditivo — aqui, o filete que se desenha. Se a lib não
  // carregar, o filete simplesmente já está lá.
  const raizRef = useGsap(({ gsap, raiz }) => {
    const filete = raiz.querySelector('[data-anim="filete"]');
    if (filete) {
      gsap.from(filete, {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: EASE.entrada,
        scrollTrigger: { trigger: raiz, start: 'top 78%', once: true },
      });
    }
  }, []);

  return (
    <section
      ref={raizRef}
      id="chamado"
      aria-labelledby="chamado-titulo"
      className="relative bg-un-surface py-20 md:py-32 overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Coluna do eyebrow — vira rótulo lateral no desktop */}
          <div className="lg:col-span-3">
            <span
              id="chamado-titulo"
              className="inline-flex items-center gap-3 text-un-blue text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]"
            >
              <span data-anim="filete" className="w-10 h-px bg-un-gold" />
              {eyebrow}
            </span>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            {corpo.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="text-gray-700 text-lg md:text-2xl font-light leading-[1.55] mb-6 md:mb-8">
                  {p}
                </p>
              </Reveal>
            ))}

            {/* Frase-tese: muda de peso e de cor para encerrar o bloco */}
            {/* leading-[1.24]: caixa-alta em português precisa de entrelinha
                maior que o usual — com 1.12 a cedilha de "MUDANÇA" e o til de
                "ORGANIZAÇÕES" encostavam na linha seguinte. */}
            <Reveal delay={280} className="mt-4 md:mt-8">
              <p className="font-display font-black uppercase text-un-blue text-2xl md:text-[2.1rem] lg:text-[2.6rem] leading-[1.24] tracking-tight border-l-2 border-un-gold pl-6 md:pl-9">
                {tese}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================
// COMO FAZER PARTE — fecho da página (texto oficial da RBPG).
// ============================================================
export const ComoFazerParteSection = () => {
  // Sem GSAP aqui pelo mesmo motivo do Chamado: é copy oficial.

  // Mesma normalização do Chamado: aceita tanto o formato antigo (chamadas
  // soltas + cta) quanto o atual (passos numerados), sem quebrar a página.
  const { eyebrow, title, titulo, description, descricao, passos, chamadas, cta } =
    AMBICAO_COMO_FAZER_PARTE;
  const heading = titulo ?? title;
  const texto = descricao ?? description;
  const etapas = passos ?? (chamadas ?? []).map((c) => ({ titulo: c }));

  return (
    <section
      id="como-fazer-parte"
      aria-labelledby="fazer-parte-titulo"
      className="relative bg-un-blue py-20 md:py-32 overflow-hidden scroll-mt-24"
    >
      {/* Halo de acento — mesma família do CTA, mantém a página coesa */}
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(204,177,70,0.55), transparent 70%)' }}
      />
      <div className="absolute inset-0 grain-overlay opacity-[0.05] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative">
        <span className="inline-flex items-center gap-3 text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8">
          <span className="w-10 h-px bg-un-gold/60" />
          {eyebrow}
        </span>

        <h2
          id="fazer-parte-titulo"
          className="font-display font-black uppercase tracking-tight text-white text-3xl md:text-5xl lg:text-[3.4rem] leading-[1.2] max-w-4xl mb-8"
        >
          {heading}
        </h2>

        <p className="text-un-blue-3 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-12">
          {texto}
        </p>

        {/* As etapas em escada: cada uma entra por baixo da anterior */}
        <ol className="flex flex-col gap-7 md:gap-9 mb-14 list-none m-0 p-0">
          {etapas.map((etapa, i) => (
            <li key={etapa.titulo}>
              <Reveal delay={i * 110}>
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                  {etapa.numero && (
                    <span className="font-display font-black text-un-gold/70 text-3xl md:text-4xl leading-none tabular-nums shrink-0 md:w-20">
                      {etapa.numero}
                    </span>
                  )}
                  <div>
                    <span className="block font-display font-black uppercase tracking-tight text-white text-xl md:text-3xl lg:text-[2.4rem] leading-[1.22]">
                      {etapa.titulo}
                    </span>
                    {etapa.descricao && (
                      <p className="mt-2 text-un-blue-3 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                        {etapa.descricao}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Link externo: destino fora da SPA, então é <a>, não Button.
            Só renderiza quando a RBPG informar o destino — nunca inventamos URL. */}
        {cta?.href && (
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-un-gold text-un-blue font-bold uppercase tracking-widest text-xs md:text-sm px-8 py-5 rounded-full transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-un-blue"
          >
            {cta.label}
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>
    </section>
  );
};
