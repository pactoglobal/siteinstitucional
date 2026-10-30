import React from 'react';
import { CalendarPlus, Linkedin, Mail } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { cn } from '../../utils/cn';
import { EQUIPE_ADESAO } from '../../data/equipeAdesao';
import { WhatsAppGlyph } from './WhatsAppFab';

const FOTOS_BASE = `${import.meta.env.BASE_URL}images/equipe/`;

// Posição de cada perfil no grid de 6 colunas (lg): dois cards de destaque
// em cima e três menores embaixo. Os dois primeiros da lista são os destaques.
const LAYOUT = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2'];

const iniciais = (nome) =>
  nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('')
    .toUpperCase();

const Avatar = ({ membro, grande, unico }) => {
  const tamanho = unico
    ? 'h-28 w-28 sm:h-36 sm:w-36'
    : grande
      ? 'h-24 w-24 sm:h-28 sm:w-28'
      : 'h-20 w-20 sm:h-24 sm:w-24';

  return (
    <div
      className={cn(
        'relative shrink-0 overflow-hidden rounded-full ring-4 ring-un-gold/70 ring-offset-4 ring-offset-white',
        tamanho
      )}
    >
      {membro.foto ? (
        <img
          src={`${FOTOS_BASE}${membro.foto}`}
          alt={`Foto de ${membro.nome}`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          aria-hidden="true"
          className="flex h-full w-full items-center justify-center bg-gradient-to-br from-un-blue to-un-blue-1 font-display text-2xl font-black text-un-gold sm:text-3xl"
        >
          {iniciais(membro.nome)}
        </span>
      )}
    </div>
  );
};

const AcaoContato = ({ href, icone: Icone, rotulo, destaque, externo, titulo, rotuloAcessivel }) => (
  <a
    href={href}
    title={titulo}
    aria-label={rotuloAcessivel}
    {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={cn(
      'inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3 text-xs font-bold transition-all',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-un-blue',
      destaque
        ? 'bg-un-blue text-white hover:bg-un-gold hover:text-un-blue'
        : 'border border-slate-200 bg-white text-slate-700 hover:border-un-blue hover:text-un-blue'
    )}
  >
    <Icone className="h-4 w-4 shrink-0" />
    {rotulo}
  </a>
);

const PerfilCard = ({ membro, grande, unico }) => (
  <article
    className={cn(
      'flex h-full w-full flex-col rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-un-blue hover:shadow-xl sm:p-8',
      grande || unico ? 'gap-6' : 'gap-5',
      unico && 'sm:flex-row sm:items-center sm:gap-8 sm:p-10'
    )}
  >
    <div className={cn('flex gap-5', grande ? 'flex-col sm:flex-row sm:items-center' : 'flex-col items-start')}>
      <Avatar membro={membro} grande={grande} unico={unico} />
      {!unico && (
        <div className="min-w-0">
          <h3
            className={cn(
              'font-display font-black uppercase leading-tight tracking-tight text-slate-900',
              grande ? 'text-2xl' : 'text-lg'
            )}
          >
            {membro.nome}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-slate-600">{membro.cargo}</p>
        </div>
      )}
    </div>

    {/* Com uma pessoa só, nome e canais ficam lado a lado com a foto */}
    {unico && (
      <div className="min-w-0 space-y-5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-un-gold">{membro.cargo}</span>
          <h3 className="mt-1.5 font-display text-2xl font-black uppercase leading-tight tracking-tight text-slate-900 sm:text-3xl">
            {membro.nome}
          </h3>
          {membro.email && (
            <a href={`mailto:${membro.email}`} className="mt-1 inline-block text-sm font-medium text-un-blue hover:underline">
              {membro.email}
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {membro.whatsapp && (
            <AcaoContato href={membro.whatsapp} icone={WhatsAppGlyph} rotulo="WhatsApp" destaque externo />
          )}
          {membro.agenda && (
            <AcaoContato href={membro.agenda} icone={CalendarPlus} rotulo="Agendar no Teams" destaque={!membro.whatsapp} externo />
          )}
          {membro.email && (
            <AcaoContato href={`mailto:${membro.email}`} icone={Mail} rotulo="E-mail" titulo={membro.email} />
          )}
          {membro.linkedin && (
            <AcaoContato href={membro.linkedin} icone={Linkedin} rotulo="LinkedIn" titulo="LinkedIn" externo />
          )}
        </div>
      </div>
    )}

    {!unico && (
    <div className="mt-auto flex flex-wrap gap-2">
      {membro.whatsapp && (
        <AcaoContato href={membro.whatsapp} icone={WhatsAppGlyph} rotulo="WhatsApp" destaque externo />
      )}
      {membro.agenda && (
        <AcaoContato href={membro.agenda} icone={CalendarPlus} rotulo="Agendar no Teams" destaque={!membro.whatsapp} externo />
      )}
      {membro.email && (
        <AcaoContato href={`mailto:${membro.email}`} icone={Mail} rotulo="E-mail" titulo={membro.email} />
      )}
      {membro.linkedin && (
        <AcaoContato
          href={membro.linkedin}
          icone={Linkedin}
          rotulo={grande ? 'LinkedIn' : null}
          rotuloAcessivel={grande ? undefined : 'LinkedIn (abre em nova aba)'}
          titulo="LinkedIn"
          externo
        />
      )}
    </div>
    )}
  </article>
);

/**
 * Contato de Adesão. Com uma pessoa só, vira um card horizontal; com mais, uma
 * grade. Cada pessoa só aparece se tiver ao menos um canal
 * (e-mail, LinkedIn ou agenda) em data/equipeAdesao.js, e a seção some se
 * ninguém tiver: nome sem contato não serve a quem visita e expõe a pessoa à toa.
 */
export const EquipeAdesao = ({ equipe: todos = EQUIPE_ADESAO }) => {
  const equipe = todos.filter((membro) => membro.whatsapp || membro.email || membro.linkedin || membro.agenda);
  if (equipe.length === 0) return null;

  return (
    <section id="equipe" className="border-t border-slate-200/80 bg-un-surface py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Atendimento à adesão"
          title="Contato de Adesão"
          titleAccent="Fale com quem conduz a sua entrada"
          description="A pessoa responsável pela adesão acompanha sua empresa do primeiro contato ao fim do processo. Chame no WhatsApp, envie um e-mail ou conecte-se pelo LinkedIn."
          className="mb-12"
        />

        {equipe.length === 1 ? (
          <Reveal className="mx-auto flex max-w-3xl">
            <PerfilCard membro={equipe[0]} unico />
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {equipe.map((membro, idx) => (
              <Reveal key={membro.id} delay={idx * 70} className={cn('flex', LAYOUT[idx] || 'lg:col-span-2')}>
                <PerfilCard membro={membro} grande={idx < 2} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
