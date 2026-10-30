import React from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  GraduationCap,
  Globe,
  Plus,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { FotoFundo } from './FotoFundo';
import { cn } from '../../utils/cn';
import { BENEFICIOS_ADESAO } from '../../data/comoAderir';

const ICONS = { ShieldCheck, GraduationCap, TrendingUp, Users, Globe, BarChart3 };

const CTA_CLASSES =
  'inline-flex min-h-[40px] items-center gap-2 rounded-full px-4 text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

const Pontos = ({ pontos }) => (
  <ul className="space-y-2">
    {pontos.map((ponto) => (
      <li key={ponto} className="flex items-start gap-2 text-xs leading-snug text-slate-100">
        <CheckCircle2 className="mt-px h-3.5 w-3.5 shrink-0 text-un-gold" />
        <span>{ponto}</span>
      </li>
    ))}
  </ul>
);

/**
 * Card de destaque (Sistema ONU): ocupa 2×2 no desktop e mostra os itens
 * sempre, porque tem espaço para isso.
 */
const CardDestaque = ({ beneficio, onAderir }) => {
  const Icon = ICONS[beneficio.icone] || Award;

  return (
    <article className="group relative isolate flex h-full w-full flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 text-white shadow-sm ring-1 ring-un-gold/50 transition-shadow duration-300 hover:shadow-2xl sm:p-9">
      <FotoFundo imagem={beneficio.imagem} />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-un-gold/40 bg-un-gold/20 text-un-gold backdrop-blur-md">
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full border border-un-gold/40 bg-un-blue/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-un-gold backdrop-blur-md">
          {beneficio.badge}
        </span>
      </div>

      <div className="mt-24 space-y-5">
        <h3 className="max-w-md font-display text-3xl font-black uppercase leading-[1.04] tracking-tight sm:text-4xl">
          {beneficio.titulo}
        </h3>
        <p className="max-w-lg text-sm font-light leading-relaxed text-slate-100 sm:text-base">
          {beneficio.descricao}
        </p>
        <div className="border-t border-white/15 pt-5">
          <Pontos pontos={beneficio.pontos} />
        </div>
        <button type="button" onClick={onAderir} className={cn(CTA_CLASSES, 'bg-un-gold text-un-blue hover:bg-white')}>
          Aderir a esta iniciativa <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};

/**
 * Card compacto: em repouso mostra foto, título e descrição; os itens e o CTA
 * sobem num painel no hover ou no foco (ver .bento-revela em index.css).
 */
const CardCompacto = ({ beneficio, onAderir }) => {
  const Icon = ICONS[beneficio.icone] || Award;

  return (
    <article className="bento-card group relative isolate flex h-full min-h-[300px] w-full flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-white shadow-sm ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-2xl sm:p-7">
      <FotoFundo imagem={beneficio.imagem} />

      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
        <Icon className="h-5 w-5" />
      </span>

      <div className="mt-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-un-gold">
          {beneficio.badge}
        </span>
        <h3 className="mt-2 font-display text-xl font-black uppercase leading-[1.08] tracking-tight">
          {beneficio.titulo}
        </h3>
        <p className="mt-2 text-[13px] font-light leading-relaxed text-slate-200">{beneficio.descricao}</p>

        <span className="bento-dica mt-4 items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white/80 transition-opacity">
          <Plus className="h-3.5 w-3.5 text-un-gold" /> Ver o que inclui
        </span>

        <div className="bento-revela mt-5 space-y-5">
          <div>
            <span className="bento-revela-titulo mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-un-gold">{beneficio.titulo}</span>
            <div>
              <Pontos pontos={beneficio.pontos} />
            </div>
          </div>
          <button
            type="button"
            onClick={onAderir}
            className={cn(CTA_CLASSES, 'self-start border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-un-blue')}
          >
            Aderir <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

// Grade de 3 colunas no desktop: destaque em 2×2 e cinco cards compactos.
const LAYOUT = {
  credibilidade: 'md:col-span-2 lg:col-span-2 lg:row-span-2',
};

export const BeneficiosBento = ({ onAderir }) => (
  <section id="beneficios" className="py-12 md:py-20">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Valor & Diferenciação Estratégica"
        title="Por que sua Organização deve Participar?"
        titleAccent="Credibilidade Global & Ação Local"
        description="Ao integrar a Rede Brasil, sua empresa se vincula à maior iniciativa de sustentabilidade corporativa do Sistema ONU e ganha acesso a um ecossistema completo de ferramentas, capacitação e liderança."
        className="mb-10"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(300px,auto)] lg:gap-5">
        {BENEFICIOS_ADESAO.map((beneficio, idx) => (
          <Reveal key={beneficio.id} delay={idx * 60} className={cn('flex', LAYOUT[beneficio.id])}>
            {beneficio.destaque ? (
              <CardDestaque beneficio={beneficio} onAderir={onAderir} />
            ) : (
              <CardCompacto beneficio={beneficio} onAderir={onAderir} />
            )}
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
