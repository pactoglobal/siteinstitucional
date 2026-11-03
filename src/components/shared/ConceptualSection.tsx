import React from 'react';
import { cn } from '../../utils/cn';
import { Target, LineChart, Lightbulb } from 'lucide-react';

export interface ConceptualSectionProps {
  gradientTitle?: boolean;
}

export const ConceptualSection = ({ gradientTitle = true }: ConceptualSectionProps) => (
  <section className="py-12 md:py-20 bg-paper-2">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
      <h2 className={cn(
        'text-display-xs sm:text-display-sm md:text-display-md font-impact font-black uppercase tracking-tight mb-4 text-center',
        gradientTitle && 'gradient-text-ods'
      )}>
        Fundamentação Conceitual
      </h2>
      <p className="text-body-md text-ink-3 mb-12 text-center">
        A página institucional esclarece de forma definitiva a diferença e a complementaridade entre os dois conceitos, superando a confusão comum no mercado.
      </p>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <article className="rounded-2xl p-6 sm:p-8 bg-atlantic/5 border border-atlantic/10 hover:shadow-card-hover transition-all duration-300 reveal" style={{ "--reveal-delay": "0ms" } as React.CSSProperties}>
          <div className="w-12 h-12 rounded-xl bg-atlantic/20 text-atlantic flex items-center justify-center mb-4">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-heading-md font-impact font-bold text-atlantic uppercase tracking-tight mb-3">
            ODS (Agenda 2030)
          </h3>
          <p className="text-body-md text-ink-3 leading-relaxed">Trata-se de uma agenda normativa global pactuada em 2015 por 193 países-membros da ONU, composta por 17 Objetivos e 169 metas. Define as necessidades prioritárias da sociedade e do planeta — "o que a humanidade precisa resolver".</p>
          <div className="mt-4 pt-4 border-t border-atlantic/20">
            <span className="text-micro font-bold uppercase tracking-widest text-atlantic">Agenda normativa global • 193 países • 17 ODS + 169 metas</span>
          </div>
        </article>

        <article className="rounded-2xl p-6 sm:p-8 bg-leaf/5 border border-leaf/10 hover:shadow-card-hover transition-all duration-300 reveal" style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <div className="w-12 h-12 rounded-xl bg-leaf/20 text-leaf flex items-center justify-center mb-4">
            <LineChart className="w-6 h-6" />
          </div>
          <h3 className="text-heading-md font-impact font-bold text-leaf uppercase tracking-tight mb-3">
            Fatores ESG (Environmental, Social, Governance)
          </h3>
          <p className="text-body-md text-ink-3 leading-relaxed">Constituem uma abordagem analítica e operacional de gestão e investimentos. Traduzem externalidades socioambientais em métricas de risco, oportunidade e geração de valor de longo prazo para as corporações — "como a empresa opera e mede seu impacto".</p>
          <div className="mt-4 pt-4 border-t border-leaf/20">
            <span className="text-micro font-bold uppercase tracking-widest text-leaf">Abordagem operacional • Gestão de riscos • Criação de valor</span>
          </div>
        </article>

        <article className="rounded-2xl p-6 sm:p-8 bg-sun/5 border border-sun/10 hover:shadow-card-hover transition-all duration-300 relative overflow-hidden reveal" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-sun/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-12 h-12 rounded-xl bg-sun/20 text-sun flex items-center justify-center mb-4">
            <Lightbulb className="w-6 h-6" />
          </div>
          <h3 className="text-heading-md font-impact font-bold text-sun uppercase tracking-tight mb-3">
            Dinâmica Causal e Dupla Materialidade
          </h3>
          <p className="text-body-md text-ink-3 leading-relaxed">A relação entre eles opera de forma indissociável: enquanto os ODS estabelecem as metas macroeconômicas de sustentabilidade, as práticas ESG funcionam como o motor microeconômico e operacional corporativo para alcançá-las. Organizações que adotam critérios ESG estruturados reduzem riscos e geram contribuições diretas e auditáveis para as metas dos ODS.</p>
          <div className="mt-4 pt-4 border-t border-sun/20">
            <span className="text-micro font-bold uppercase tracking-widest text-sun">Dupla materialidade • Motor microeconômico • Impacto auditável</span>
          </div>
        </article>
      </div>
    </div>
  </section>
);