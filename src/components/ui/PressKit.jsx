import React from 'react';
import { Mail, Phone, Clock, ArrowDownToLine } from 'lucide-react';
import { ASSESSORIA, KIT_IMPRENSA } from '../../data/releases';

/**
 * Contato da assessoria. É o bloco mais importante da sala de imprensa:
 * jornalista com deadline precisa do e-mail antes de qualquer release.
 */
export const ContatoAssessoria = ({ className = '', tone = 'dark' }) => {
  const dark = tone === 'dark';

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-3xl p-7 md:p-8 ${
        dark ? 'bg-un-blue' : 'border border-gray-100 bg-white'
      } ${className}`}
    >
      {dark && (
        <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      )}

      <div className="relative z-10 flex h-full flex-col">
        <span
          className={`mb-5 text-[10px] font-bold uppercase tracking-[0.25em] ${
            dark ? 'text-un-gold' : 'text-un-blue'
          }`}
        >
          Para jornalistas
        </span>

        <h3
          className={`mb-3 font-display text-xl font-black uppercase leading-tight tracking-tight md:text-2xl ${
            dark ? 'text-white' : 'text-gray-900'
          }`}
        >
          {ASSESSORIA.nome}
        </h3>

        <p className={`mb-7 text-sm font-light leading-relaxed ${dark ? 'text-white/65' : 'text-gray-500'}`}>
          Solicitações de entrevista, dados e credenciamento para eventos.
        </p>

        <dl className="mt-auto flex flex-col gap-3.5">
          <div className="flex items-center gap-3">
            <Mail className={`h-4 w-4 shrink-0 ${dark ? 'text-un-gold' : 'text-un-blue'}`} />
            <dt className="sr-only">E-mail</dt>
            <dd>
              <a
                href={`mailto:${ASSESSORIA.email}`}
                className={`text-sm font-bold underline-offset-4 transition-colors hover:underline ${
                  dark ? 'text-white' : 'text-gray-900'
                }`}
              >
                {ASSESSORIA.email}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <Phone className={`h-4 w-4 shrink-0 ${dark ? 'text-un-gold' : 'text-un-blue'}`} />
            <dt className="sr-only">Telefone</dt>
            <dd className={`text-sm ${dark ? 'text-white/80' : 'text-gray-700'}`}>
              {ASSESSORIA.telefone}
            </dd>
          </div>
          <div className="flex items-center gap-3">
            <Clock className={`h-4 w-4 shrink-0 ${dark ? 'text-un-gold' : 'text-un-blue'}`} />
            <dt className="sr-only">Horário</dt>
            <dd className={`text-xs font-light ${dark ? 'text-white/55' : 'text-gray-500'}`}>
              {ASSESSORIA.horario}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

/** Kit de imprensa: material pronto para publicação. */
export const KitImprensa = ({ className = '' }) => (
  <div className={`flex h-full flex-col rounded-3xl border border-gray-100 bg-un-surface p-7 md:p-8 ${className}`}>
    <span className="mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-un-gold">
      Kit de imprensa
    </span>
    <h3 className="mb-6 font-display text-xl font-black uppercase leading-tight tracking-tight text-gray-900 md:text-2xl">
      Material para uso editorial
    </h3>

    <ul className="flex flex-col gap-2.5">
      {KIT_IMPRENSA.map((item) => (
        <li key={item.id}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-transparent bg-white p-4 transition-all duration-300 hover:border-un-blue/20 hover:shadow-md"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-un-blue/5 text-un-blue transition-colors group-hover:bg-un-blue group-hover:text-white">
              <ArrowDownToLine className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-bold leading-tight text-gray-900">
                {item.titulo}
              </span>
              <span className="mt-0.5 block text-xs font-light leading-snug text-gray-500">
                {item.descricao}
              </span>
            </span>
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {item.formato}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
