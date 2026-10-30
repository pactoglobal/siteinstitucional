import React from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  GraduationCap,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { cn } from '../../utils/cn';
import { BENEFICIOS_ADESAO } from '../../data/comoAderir';

const IMAGES_BASE = `${import.meta.env.BASE_URL}images/adesao/`;

const ICONS = { ShieldCheck, GraduationCap, TrendingUp, Users, Globe, BarChart3 };

// Posição de cada card no grid de 12 colunas (lg). O primeiro e o quarto
// ocupam duas linhas para quebrar o ritmo de uma grade uniforme.
const LAYOUT = {
  credibilidade: 'lg:col-span-7 lg:row-span-2',
  academy: 'lg:col-span-5',
  plataformas: 'lg:col-span-5',
  benchmarking: 'lg:col-span-4 lg:row-span-2',
  eventos: 'lg:col-span-8',
  cop: 'lg:col-span-8',
};

const BeneficioCard = ({ beneficio, onAderir }) => {
  const Icon = ICONS[beneficio.icone] || Award;
  const destaque = Boolean(beneficio.destaque);

  return (
    <article
      className={cn(
        'group relative isolate flex min-h-[440px] sm:min-h-[480px] w-full flex-col justify-between overflow-hidden rounded-3xl text-white',
        'shadow-sm transition-shadow duration-300 hover:shadow-2xl',
        destaque ? 'ring-2 ring-un-gold/60' : 'ring-1 ring-white/10'
      )}
    >
      <img
        src={`${IMAGES_BASE}${beneficio.imagem}.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 motion-reduce:transition-none"
      />
      {/* Azul da ONU sobe do rodapé, onde está o texto; o topo deixa a foto aparecer */}
      <div
        className={cn(
          'absolute inset-0 -z-10 bg-gradient-to-t',
          destaque
            ? 'from-un-blue from-25% via-un-blue/85 via-60% to-un-blue/0'
            : 'from-un-blue from-30% via-un-blue/88 via-62% to-un-blue/0'
        )}
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3 p-6 sm:p-8">
        <span
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border backdrop-blur-md',
            destaque
              ? 'border-un-gold/50 bg-un-gold/25 text-un-gold'
              : 'border-white/25 bg-white/15 text-white'
          )}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span
          className={cn(
            'rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md',
            destaque
              ? 'border-un-gold/40 bg-un-blue/60 text-un-gold'
              : 'border-white/20 bg-un-blue/50 text-slate-100'
          )}
        >
          {beneficio.badge}
        </span>
      </div>

      <div className="space-y-4 p-6 pt-0 sm:p-8 sm:pt-0">
        <h3
          className={cn(
            'font-display font-black uppercase leading-[1.08] tracking-tight',
            destaque ? 'text-3xl sm:text-4xl' : 'text-xl sm:text-2xl'
          )}
        >
          {beneficio.titulo}
        </h3>

        <p className={cn('font-light leading-relaxed text-slate-100', destaque ? 'text-sm sm:text-base max-w-xl' : 'text-sm')}>
          {beneficio.descricao}
        </p>

        <ul className="space-y-2 border-t border-white/15 pt-4">
          {beneficio.pontos.map((ponto) => (
            <li key={ponto} className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug text-slate-100">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-un-gold" />
              <span>{ponto}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={onAderir}
          className={cn(
            'inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer',
            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
            destaque
              ? 'bg-un-gold text-un-blue hover:bg-white'
              : 'border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-un-blue'
          )}
        >
          Aderir a esta iniciativa <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};

export const BeneficiosBento = ({ onAderir }) => (
  <section id="beneficios" className="py-12 md:py-20">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Valor & Diferenciação Estratégica"
        title="Por que sua Organização deve Participar?"
        titleAccent="Credibilidade Global & Ação Local"
        description="Ao integrar a Rede Brasil, sua empresa se vincula à maior iniciativa de sustentabilidade corporativa do Sistema ONU e ganha acesso a um ecossistema completo de ferramentas, capacitação e liderança."
        className="mb-12"
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[minmax(440px,auto)] lg:gap-6">
        {BENEFICIOS_ADESAO.map((beneficio, idx) => (
          <Reveal
            key={beneficio.id}
            delay={idx * 70}
            className={cn('flex', beneficio.destaque && 'md:col-span-2', LAYOUT[beneficio.id])}
          >
            <BeneficioCard beneficio={beneficio} onAderir={onAderir} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
