import React from 'react';
import { DotGrid, Grain } from './Texture';

/**
 * Hero editorial v4 — mesmo vocabulário do hero da Ambição 2030:
 * glow difuso, malha de pontos, grão e fade inferior para a próxima seção.
 *
 * Com `image`, a foto entra como plano de fundo sob um degradê pesado na
 * cor da página. O degradê não é decorativo: o texto é branco e precisa
 * de contraste garantido sobre qualquer região da foto, então ele vai de
 * opaco à esquerda (onde o texto vive) a translúcido à direita.
 *
 * ATENÇÃO ao escolher a foto — dois critérios, ambos medidos em canvas
 * sobre a luminância (0.2126R+0.7152G+0.0722B):
 *   1. média acima de ~170. O fundo da marca é escuro; foto escura ou
 *      azulada some sob o degradê (duas já foram trocadas, em 104 e 80).
 *   2. desvio-padrão acima de ~45. Média alta sozinha não basta: uma foto
 *      clara e uniforme (medida em 204/23) virou lavagem chapada, sem
 *      textura nenhuma. É o contraste interno que faz a imagem existir.
 */
export const EditorialHero = ({
  eyebrow,
  title,
  titleAccent,
  lead,
  meta,
  actions,
  accent = '#CCB146',
  background = '#1E3250',
  image,
  imagePosition = 'center',
  children,
}) => (
  <section
    className="relative overflow-hidden pt-36 md:pt-48 pb-20 md:pb-28"
    style={{ backgroundColor: background }}
  >
    {image && (
      <div className="absolute inset-0" aria-hidden="true">
        {/* O realce existe para o componente não depender da luminância da
            foto: sob o degradê, uma imagem escura vira mancha chapada e o
            hero perde a textura que justifica ter foto. */}
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover brightness-[1.18] contrast-[1.06] saturate-[0.9]"
          style={{ objectPosition: imagePosition }}
          fetchPriority="high"
          decoding="async"
        />
        {/* Vinheta horizontal. A coluna de texto ocupa até ~55% da largura,
            então o degradê só precisa ser opaco até ali — daí para a
            direita ele abre e deixa a foto de fato aparecer. */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(100deg, ${background} 0%, ${background}f7 30%, ${background}c4 52%, ${background}42 100%)`,
          }}
        />
        {/* Assenta o topo (sob o header) e a base (fade para a seção seguinte) */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, ${background}e6 0%, transparent 26%, transparent 66%, ${background} 100%)`,
          }}
        />
      </div>
    )}

    {/* Glow difuso — profundidade atmosférica.
        Sem foto ele é o que dá volume ao fundo chapado. Com foto, cai
        para um terço: ele fica exatamente sobre a área onde a imagem
        aparece e, em cheio, lava a textura dela (visível na página de
        Publicações, cujo roxo é bem mais claro que o azul da marca). */}
    <div
      className="absolute -right-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[680px] md:h-[680px] rounded-full blur-3xl animate-glow pointer-events-none"
      style={{
        background: `radial-gradient(circle, ${accent}${image ? '1f' : '59'}, transparent 65%)`,
      }}
      aria-hidden="true"
    />

    <div className="absolute inset-0 text-white/[0.05]" aria-hidden="true">
      <DotGrid className="w-full h-full" />
    </div>
    <Grain />

    {/* Fade para a seção seguinte */}
    <div
      className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
      style={{ background: `linear-gradient(to top, ${background}, transparent)` }}
      aria-hidden="true"
    />

    <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-4xl">
        {eyebrow && (
          <span
            className="inline-flex items-center gap-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] mb-8 animate-fade-in-up"
            style={{ color: accent, animationDelay: '0ms' }}
          >
            <span className="w-10 h-px" style={{ backgroundColor: accent }} />
            {eyebrow}
          </span>
        )}

        {/* Escala dramática e entrelinha fechada: o título é a peça de
            hierarquia do hero, não um rótulo. Segue o hero da Ambição. */}
        <h1
          className="font-display font-black uppercase leading-[0.84] tracking-[-0.02em] mb-8 animate-fade-in-up text-white text-5xl sm:text-6xl md:text-8xl lg:text-[7.5rem]"
          style={{ animationDelay: '90ms' }}
        >
          {title}
          {titleAccent && (
            <>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              <span style={{ color: accent }}>{titleAccent}</span>
            </>
          )}
        </h1>

        {lead && (
          <p
            className="text-white/70 text-base md:text-lg font-light leading-[1.7] max-w-xl mb-10 animate-fade-in-up"
            style={{ animationDelay: '180ms' }}
          >
            {lead}
          </p>
        )}

        {meta?.length > 0 && (
          <dl
            className="flex flex-wrap items-stretch gap-x-10 gap-y-6 md:gap-x-14 mb-10 animate-fade-in-up border-t border-white/15 pt-7"
            style={{ animationDelay: '260ms' }}
          >
            {meta.map((item, i) => (
              <div key={item.label} className="relative flex flex-col">
                {i > 0 && (
                  <span className="hidden md:block absolute -left-7 top-0 bottom-0 w-px bg-white/12" />
                )}
                <dt className="order-2 text-[9px] md:text-[10px] uppercase tracking-[0.3em] mt-2.5 font-bold text-white/45">
                  {item.label}
                </dt>
                <dd className="order-1 font-display font-black text-3xl md:text-5xl text-white leading-none tabular-nums">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {actions && (
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '340ms' }}
          >
            {actions}
          </div>
        )}

        {children}
      </div>
    </div>
  </section>
);
