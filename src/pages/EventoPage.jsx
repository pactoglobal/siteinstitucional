import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CalendarX,
  Calendar,
  Clock,
  MapPin,
  Users,
  Globe2,
  Building2,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { RichText } from '../components/ui/RichText';
import { ShareBar } from '../components/ui/ShareBar';
import { EventCard, EventMeta } from '../components/ui/EventCard';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { DotGrid, Grain } from '../components/ui/Texture';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  getEvento,
  getEventosRelacionados,
  corDaCategoria,
  isProximo,
  ACESSO_ABERTO,
} from '../data/eventos';
import { formatDateRange } from '../utils/date';

const NaoEncontrado = ({ navigate }) => (
  <div className="pt-32 pb-20">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <EmptyState
        as="h1"
        icon={CalendarX}
        title="Evento não encontrado"
        description="O evento que você procura não existe ou saiu da agenda."
        action={
          <Button variant="primary" icon={ArrowLeft} onClick={() => navigate('eventos')}>
            Ver a agenda completa
          </Button>
        }
      />
    </div>
  </div>
);

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex gap-4 py-4">
    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-un-blue/5 text-un-blue">
      <Icon className="h-4 w-4" />
    </span>
    <div className="min-w-0">
      <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{label}</dt>
      <dd className="mt-1 text-sm font-medium leading-relaxed text-gray-900">{value}</dd>
    </div>
  </div>
);

export const EventoPage = ({ slug, navigate }) => {
  const evento = getEvento(slug);
  if (!evento) return <NaoEncontrado navigate={navigate} />;

  const cor = corDaCategoria(evento.category);
  const relacionados = getEventosRelacionados(slug, 3);
  const aberto = isProximo(evento);
  const inscricoesAbertas = aberto && Boolean(evento.registrationUrl);

  return (
    <article className="animate-fade-in">
      {/* ============ HERO NA COR DO TEMA ============ */}
      <header
        className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24"
        style={{ backgroundColor: cor }}
      >
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={evento.image}
            alt=""
            className="h-full w-full object-cover opacity-20"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to bottom, ${cor}e6, ${cor})` }}
          />
        </div>
        <div className="absolute inset-0 text-white/[0.06]" aria-hidden="true">
          <DotGrid className="h-full w-full" />
        </div>
        <Grain />

        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate('eventos')}
            className="mb-9 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Agenda
          </button>

          <div className="max-w-4xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                {evento.category}
              </span>
              {!aberto && (
                <span className="rounded-full bg-black/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                  Evento realizado
                </span>
              )}
            </div>

            {evento.subtitle && (
              <span className="mb-3 block text-sm font-bold uppercase tracking-[0.25em] text-white/60">
                {evento.subtitle}
              </span>
            )}

            <h1 className="mb-7 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              {evento.title}
            </h1>

            <p className="mb-8 max-w-2xl text-base font-light leading-relaxed text-white/85 md:text-xl">
              {evento.excerpt}
            </p>

            <EventMeta evento={evento} tone="dark" />
          </div>
        </div>
      </header>

      {/* ============ CORPO + PAINEL DE INFORMAÇÕES ============ */}
      <div className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Descrição + programação */}
            <div className="lg:col-span-7">
              <RichText blocks={evento.description} accent={cor} />

              {evento.programa?.length > 0 && (
                <section className="mt-14">
                  <h2 className="mb-8 font-display text-xl font-black uppercase tracking-tight text-gray-900 md:text-3xl">
                    <span
                      className="mb-4 block h-1 w-12 rounded-full"
                      style={{ backgroundColor: cor }}
                    />
                    Programação
                  </h2>

                  <ol className="relative border-l-2 border-gray-100 pl-8">
                    {evento.programa.map((item) => (
                      <li key={`${item.time}-${item.title}`} className="relative mb-9 last:mb-0">
                        <span
                          className="absolute -left-[41px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-white"
                          style={{ backgroundColor: cor }}
                        />
                        <span
                          className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.2em]"
                          style={{ color: cor }}
                        >
                          {item.time}
                        </span>
                        <h3 className="font-display text-base font-black uppercase tracking-tight text-gray-900 md:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm font-light leading-relaxed text-gray-500">
                          {item.desc}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              <div className="mt-14 border-t border-gray-100 pt-8">
                <ShareBar title={evento.title} />
              </div>
            </div>

            {/* Painel fixo */}
            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-un-surface">
                  <div className="px-6 py-5 md:px-7" style={{ backgroundColor: cor }}>
                    <h2 className="font-display text-xs font-black uppercase tracking-[0.2em] text-white">
                      Informações
                    </h2>
                  </div>

                  <dl className="divide-y divide-gray-100 px-6 md:px-7">
                    <InfoRow
                      icon={Calendar}
                      label="Data"
                      value={formatDateRange(evento.startDate, evento.endDate)}
                    />
                    {evento.time && <InfoRow icon={Clock} label="Horário" value={evento.time} />}
                    <InfoRow icon={MapPin} label="Local" value={evento.location} />
                    <InfoRow icon={Globe2} label="Formato" value={evento.format} />
                    <InfoRow
                      icon={Users}
                      label="Acesso"
                      value={
                        evento.access === ACESSO_ABERTO
                          ? 'Aberto ao público'
                          : 'Exclusivo para empresas participantes'
                      }
                    />
                    <InfoRow icon={Building2} label="Realização" value={evento.organizer} />
                    <InfoRow icon={Globe2} label="Idioma" value={evento.language} />
                  </dl>

                  <div className="p-6 pt-2 md:p-7 md:pt-2">
                    {inscricoesAbertas ? (
                      <a
                        href={evento.registrationUrl}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-un-green px-6 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-un-green/20 transition-all duration-300 hover:bg-un-green/90 hover:shadow-xl active:scale-95"
                      >
                        Inscreva-se <ArrowRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <p className="rounded-2xl bg-gray-100 px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-gray-400">
                        Inscrições encerradas
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ============ OUTROS EVENTOS ============ */}
      {relacionados.length > 0 && (
        <section className="bg-un-surface py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeader
              badge="Continue na agenda"
              title="Outros"
              titleAccent="Eventos"
            />
            <div className="flex flex-col gap-4">
              {relacionados.map((e, i) => (
                <Reveal key={e.slug} delay={i * 80}>
                  <EventCard evento={e} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
