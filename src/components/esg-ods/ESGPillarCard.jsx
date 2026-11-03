import React from 'react';
import { CheckCircle2, Globe, ShieldCheck, Users } from 'lucide-react';

const PILLAR_ICONS = {
  E: Globe,
  S: Users,
  G: ShieldCheck,
};

export const ESGPillarCard = ({ pilar }) => {
  const IconComponent = PILLAR_ICONS[pilar.letra];
  return (
    <div className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-un-blue/50 hover:shadow-xl transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${pilar.cor}15, ${pilar.cor}05)` }} />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white group-hover:scale-110 transition-transform" style={{ backgroundColor: pilar.cor }}>
            <IconComponent className="w-7 h-7" aria-hidden="true" />
          </div>
          <div>
            <span className="text-4xl font-display font-black" style={{ color: pilar.cor }}>{pilar.letra}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-3 block mt-1">{pilar.nome}</span>
          </div>
        </div>
        <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight mb-4">
          {pilar.nome.split(' ')[0]}
        </h3>
        <div className="space-y-3 mb-6">
          {pilar.subtemas.map((subtema) => (
            <div key={subtema} className="flex items-start gap-3 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: pilar.cor }} aria-hidden="true" />
              <span>{subtema}</span>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-slate-100">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Métricas-chave:</span>
          <p className="text-sm text-slate-600 mt-1 font-mono">{pilar.metricas_chave}</p>
        </div>
      </div>
    </div>
  );
};
