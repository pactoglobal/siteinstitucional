import React from 'react';
import {
  AlertTriangle,
  Award,
  BarChart3,
  Clock,
  FileText,
  Flag,
  Gavel,
  Globe,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

// Só os ícones citados em ESG_TIMELINE e ODS_TIMELINE (src/data/esgOds.js).
// Ícone desconhecido cai em Target.
const TIMELINE_ICONS = {
  AlertTriangle,
  Award,
  BarChart3,
  Clock,
  FileText,
  Flag,
  Gavel,
  Globe,
  Scale,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
};

/**
 * Linha do tempo vertical. `cor` é um hex: as classes un-* do Tailwind não
 * viram variáveis CSS, então `var(--un-blue)` deixava a linha sem cor.
 */
export const Timeline = ({ items, title, cor }) => (
  <section className="py-12 md:py-20 bg-white border-y border-slate-200/80">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
      <SectionHeader
        badge="Linha do Tempo"
        title={title}
        className="mb-12 text-center"
      />
      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5" style={{ backgroundColor: cor }} />
        {items.map((item, idx) => {
          const IconComponent = TIMELINE_ICONS[item.icone] || Target;
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={item.ano}
              className={`flex items-start gap-6 mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`w-1/2 md:w-5/12 ${isLeft ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                <div className={`relative ${isLeft ? 'md:mr-16' : 'md:ml-16'}`}>
                  <div className="absolute right-0 top-4 w-4 h-4 rounded-full border-4 z-10" style={{ backgroundColor: cor, borderColor: cor }} />
                  <div className={`bg-white p-6 rounded-2xl shadow-lg border ${isLeft ? 'border-r-4' : 'border-l-4'} transition-all hover:shadow-xl`} style={{ borderColor: cor }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: cor }}>
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="text-lg font-display font-black text-slate-900">{item.ano}</span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2">{item.titulo || item.evento}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.descricao}</p>
                    {item.destaque && (
                      <span className="inline-block mt-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full text-white" style={{ backgroundColor: cor }}>
                        Marco Principal
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
