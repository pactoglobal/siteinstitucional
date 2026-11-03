import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import { ODS_COLORS } from '../../data/constants';
import { routeHref } from '../../hooks/useHashRoute';

// Os ids de MOVIMENTOS_AMBICAO_2030 (esgOds.js) divergem de dois slugs da
// página de movimento (ambicao2030.js).
const SLUG_MOVIMENTO = {
  'educa-2030': 'educa2030',
  'transparencia-100': 'transparencia',
};

export const MovementCard = ({ mov }) => (
  <article className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-gold/40 hover:shadow-xl transition-all duration-500 overflow-hidden">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-un-gold/10 to-transparent" />
    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
        <img
          src={mov.logo}
          alt={mov.movimento}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-display font-black text-lg" style={{ backgroundColor: ODS_COLORS[mov.ods - 1] }}>
            {mov.ods}
          </span>
          {mov.odsExtra && (
            <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-display font-black text-lg" style={{ backgroundColor: ODS_COLORS[mov.odsExtra - 1] }}>
              {mov.odsExtra}
            </span>
          )}
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hidden sm:block">
            {mov.pilarNome} — ODS {mov.ods}{mov.odsExtra ? ` + ${mov.odsExtra}` : ''}
          </span>
        </div>
        <h3 className="text-lg font-display font-bold text-slate-900 uppercase tracking-tight mb-2">{mov.movimento}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">{mov.descricao}</p>
        <p className="text-xs text-slate-500 font-medium mb-3">Metas: {mov.metas}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {mov.pilares_mov?.slice(0, 3).map((p) => (
            <span key={p.titulo} className="px-3 py-1 text-[10px] font-medium rounded-full bg-slate-100 text-slate-700">{p.titulo}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Building2 className="w-4 h-4" aria-hidden="true" />
          <span>{mov.empresas}+ empresas participantes</span>
        </div>
      </div>
      <div className="shrink-0">
        <a
          href={routeHref('movimento', SLUG_MOVIMENTO[mov.id] || mov.id)}
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-un-blue hover:text-un-gold border-b border-un-blue/30 hover:border-un-gold py-1 transition-colors"
        >
          Ver detalhes<span className="sr-only">: {mov.movimento}</span> <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
        </a>
      </div>
    </div>
  </article>
);
