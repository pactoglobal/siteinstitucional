import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Fechamento das páginas ESG e ODS. `conteudo` vem de TEXTOS_ESG.cta ou
 * TEXTOS_ODS.cta; `outraPagina` é o href da outra página, cujo rótulo está
 * em `conteudo.outraPagina`.
 */
export const CtaFinal = ({ conteudo, outraPagina }) => (
  <section className="py-12 md:py-20 bg-un-surface">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
      <div className="rounded-3xl p-8 sm:p-12 bg-un-blue text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-un-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-un-gold/20 border border-un-gold/30 text-un-gold text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
            {conteudo.selo}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight mb-4">
            {conteudo.titulo}
          </h2>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            {conteudo.descricao}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            {conteudo.botoes.map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className={cn(
                  "inline-flex items-center justify-center min-h-[52px] px-8 rounded-full font-bold uppercase tracking-wider text-xs md:text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 focus-visible:ring-offset-un-blue",
                  btn.variant === 'primary'
                    ? "bg-un-gold text-un-blue hover:bg-white"
                    : "border-2 border-white/30 text-white hover:bg-white/10"
                )}
              >
                {btn.label}
                {btn.variant === 'primary' && <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />}
              </a>
            ))}
          </div>
          {outraPagina && (
            <a
              href={outraPagina}
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium text-un-blue-3 hover:text-white underline underline-offset-4 decoration-un-gold transition-colors"
            >
              {conteudo.outraPagina} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);
