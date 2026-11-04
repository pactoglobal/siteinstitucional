import React from 'react';
import { cn } from '../../utils/cn';

// Bandeira em SVG: o emoji 🇧🇷 aparece como "BR" no Windows.
const BandeiraBrasil = () => (
  <svg viewBox="0 0 28 20" className="h-4 w-[22px] shrink-0 rounded-[2px] shadow-sm" aria-hidden="true">
    <rect width="28" height="20" fill="#009C3B" />
    <polygon points="14,2.5 25.5,10 14,17.5 2.5,10" fill="#FFDF00" />
    <circle cx="14" cy="10" r="4.6" fill="#002776" />
  </svg>
);

/** Formata até 11 dígitos como (11) 91234-5678 ou (11) 1234-5678. */
const formatarTelefone = (valor) => {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

/**
 * Telefone com bandeira do Brasil e DDI +55 fixos. O valor guardado é o
 * número formatado, sem o +55; o campo oculto `name` envia o número com o DDI.
 */
export const CampoTelefone = ({ id, name, value, onChange, className }) => (
  <div
    className={cn(
      'flex items-center overflow-hidden focus-within:border-un-blue',
      className
    )}
  >
    <span className="flex shrink-0 items-center gap-2 border-r border-slate-200 pr-3 text-xs font-semibold text-slate-700">
      <BandeiraBrasil />
      +55
    </span>
    <input
      id={id}
      type="tel"
      inputMode="numeric"
      autoComplete="tel-national"
      required
      placeholder="(11) 91234-5678"
      pattern="\(\d{2}\) \d{4,5}-\d{4}"
      title="Informe DDD e número, por exemplo (11) 91234-5678"
      value={value}
      onChange={(e) => onChange(formatarTelefone(e.target.value))}
      className="min-w-0 flex-1 bg-transparent py-3 pl-3 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none"
    />
    {name && <input type="hidden" name={name} value={value ? `+55 ${value}` : ''} />}
  </div>
);
