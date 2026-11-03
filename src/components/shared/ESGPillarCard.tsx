import React from 'react';
import { cn } from '../../utils/cn';
import { CheckCircle2, Globe, Users, ShieldCheck } from 'lucide-react';

export interface PillarData {
  letra: 'E' | 'S' | 'G';
  nome: string;
  cor: string;
  icone: string;
  subtemas: string[];
  metricas_chave: string;
}

export interface ESGPillarCardProps {
  pilar: PillarData;
  index: number;
}

const PILLAR_ICONS = {
  E: Globe,
  S: Users,
  G: ShieldCheck,
};

export const ESGPillarCard = ({ pilar, index }: ESGPillarCardProps) => {
  const IconComponent = PILLAR_ICONS[pilar.letra];
  
  return (
    <div
      className={cn(
        'group relative rounded-2xl p-6 sm:p-8 bg-paper-2 border border-border hover:border-atlantic/50 hover:shadow-card-hover transition-all duration-500 overflow-hidden reveal'
      )}
      style={{ '--reveal-delay': `${index * 150}ms` } as React.CSSProperties}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${pilar.cor}15, ${pilar.cor}05)` }} />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white group-hover:scale-110 transition-transform" style={{ backgroundColor: pilar.cor }}>
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <span className="text-display-xs font-impact font-black" style={{ color: pilar.cor }}>{pilar.letra}</span>
            <span className="text-micro font-bold uppercase tracking-widest text-ink-4 ml-3 block mt-1">{pilar.nome}</span>
          </div>
        </div>
        <h3 className="text-heading-md font-impact font-black text-ink uppercase tracking-tight mb-4">
          {pilar.nome.split(' ')[0]}
        </h3>
        <div className="space-y-3 mb-6">
          {pilar.subtemas.map((subtema, idx) => (
            <div key={idx} className="flex items-start gap-3 text-body-sm text-ink-3 group-hover:text-ink-2 transition-colors">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: pilar.cor }} />
              <span>{subtema}</span>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-border">
          <span className="text-micro font-bold uppercase tracking-widest text-ink-4">Métricas-chave:</span>
          <p className="text-body-sm text-ink-3 mt-1 font-mono">{pilar.metricas_chave}</p>
        </div>
      </div>
    </div>
  );
};