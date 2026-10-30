import React from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  CheckCircle2,
  GraduationCap,
  Globe,
  Plus,
  TrendingUp,
  Users,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { FotoFundo } from './FotoFundo';
import { cn } from '../../utils/cn';
import { BENEFICIOS_ADESAO } from '../../data/comoAderir';

const ICONS = { GraduationCap, TrendingUp, Users, Globe, BarChart3 };

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
 * Card do bento: em repouso mostra foto, título e descrição; os itens (e o
 * link, quando houver) sobem num painel no hover ou no foco — ver
 * .bento-revela em index.css. No toque ficam sempre visíveis.
 *
 * Não há botão "Aderir" nos cards: ele levava à calculadora, e a equipe de
 * Adesão pediu para tirar.
 */
const BeneficioCard = ({ beneficio, navigate }) => {
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
            <span className="bento-revela-titulo mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-un-gold">
              {beneficio.titulo}
            </span>
            <Pontos pontos={beneficio.pontos} />
          </div>
          {beneficio.link && navigate && (
            <button
              type="button"
              onClick={() => navigate(beneficio.link.rota)}
              className="inline-flex min-h-[40px] items-center gap-2 self-start rounded-full bg-un-gold px-4 text-[11px] font-bold uppercase tracking-wider text-un-blue transition-all cursor-pointer hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {beneficio.link.rotulo} <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

// Grade de 6 colunas no desktop: dois cards largos em cima e três embaixo.
const LAYOUT = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2'];

export const BeneficiosBento = ({ navigate }) => (
  <section id="beneficios" className="py-12 md:py-20">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Valor & Diferenciação Estratégica"
        title="Por que sua Organização deve Participar?"
        titleAccent="Credibilidade Global & Ação Local"
        description="Ao aderir ao Pacto Global da ONU – Rede Brasil, sua empresa passa a fazer parte da maior iniciativa de sustentabilidade corporativa do mundo e ganha acesso a um ecossistema completo de ferramentas, capacitação e liderança."
        className="mb-10"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[minmax(300px,auto)] lg:gap-5">
        {BENEFICIOS_ADESAO.map((beneficio, idx) => (
          <Reveal
            key={beneficio.id}
            delay={idx * 60}
            className={cn('flex', LAYOUT[idx] || 'lg:col-span-2', idx === BENEFICIOS_ADESAO.length - 1 && 'md:col-span-2 lg:col-span-2')}
          >
            <BeneficioCard beneficio={beneficio} navigate={navigate} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
