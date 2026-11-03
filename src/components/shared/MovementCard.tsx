import React from 'react';
import { cn } from '../../utils/cn';
import { Building2, ArrowRight, ExternalLink } from 'lucide-react';

export interface MovementData {
  id: string;
  pilar: 'E' | 'S' | 'G';
  pilarNome: string;
  movimento: string;
  ods: number;
  odsExtra?: number;
  logo: string;
  cor: string;
  metas: string;
  descricao: string;
  empresas: number;
  pilares_mov?: Array<{ titulo: string; desc: string }>;
}

export interface MovementCardProps {
  mov: MovementData;
  index: number;
}

const PILAR_ICONS = {
  E: () => import('lucide-react').then(m => <m.Globe />),
  S: () => import('lucide-react').then(m => <m.Users />),
  G: () => import('lucide-react').then(m => <m.ShieldCheck />),
};

export const MovementCard = ({ mov, index }: MovementCardProps) => (
  <article
    className={cn(
      'group relative rounded-2xl p-6 bg-paper-2 border border-border hover:border-sun/40 hover:shadow-card-hover transition-all duration-500 overflow-hidden reveal'
    )}
    style={{ '--reveal-delay': `${index * 100}ms` } as React.CSSProperties}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-sun/10 to-transparent" />
    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
        <img
          src={mov.logo}
          alt={mov.movimento}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-impact font-black text-lg" style={{ backgroundColor: `var(--ods-${mov.ods})` }}>
            {mov.ods}
          </span>
          {mov.odsExtra && (
            <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-impact font-black text-lg" style={{ backgroundColor: `var(--ods-${mov.odsExtra})` }}>
              {mov.odsExtra}
            </span>
          )}
          <span className="text-micro font-bold uppercase tracking-widest text-ink-4 hidden sm:block">
            {mov.pilarNome} — ODS {mov.ods}{mov.odsExtra ? ` + ${mov.odsExtra}` : ''}
          </span>
        </div>
        <h4 className="text-heading-md font-impact font-bold text-ink uppercase tracking-tight mb-2">{mov.movimento}</h4>
        <p className="text-body-sm text-ink-3 leading-relaxed mb-3">{mov.descricao}</p>
        <p className="text-caption text-ink-4 font-medium mb-3">Metas: {mov.metas}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {mov.pilares_mov?.slice(0, 3).map((p, idx) => (
            <span key={idx} className="px-3 py-1 text-micro font-medium rounded-full bg-paper text-ink-3 border border-border">{p.titulo}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-body-sm text-ink-4">
          <Building2 className="w-4 h-4" />
          <span>{mov.empresas}+ empresas signatárias</span>
        </div>
      </div>
      <div className="shrink-0">
        <button className="text-atlantic hover:text-sun border-b border-atlantic/30 hover:border-sun px-0">
          Ver detalhes <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </button>
      </div>
    </div>
  </article>
);