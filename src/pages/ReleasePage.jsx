import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, MapPin, Mic, FileX } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { RichText } from '../components/ui/RichText';
import { ShareBar } from '../components/ui/ShareBar';
import { ReleaseCard } from '../components/ui/ReleaseCard';
import { ContatoAssessoria } from '../components/ui/PressKit';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { DotGrid, Grain } from '../components/ui/Texture';
import { SectionHeader } from '../components/ui/SectionHeader';
import { getRelease, getOutrosReleases, corDoTipo } from '../data/releases';
import { formatDateLong } from '../utils/date';

const NaoEncontrado = ({ navigate }) => (
  <div className="pb-20 pt-32">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <EmptyState
        as="h1"
        icon={FileX}
        title="Documento não encontrado"
        description="O release que você procura não existe ou foi movido para o arquivo."
        action={
          <Button variant="primary" icon={ArrowLeft} onClick={() => navigate('imprensa')}>
            Voltar à Sala de Imprensa
          </Button>
        }
      />
    </div>
  </div>
);

export const ReleasePage = ({ slug, navigate }) => {
  const release = getRelease(slug);
  if (!release) return <NaoEncontrado navigate={navigate} />;

  const cor = corDoTipo(release.type);
  const outros = getOutrosReleases(slug, 3);

  return (
    <article className="animate-fade-in">
      {/* ============ CABEÇALHO ============ */}
      <header className="relative overflow-hidden bg-un-blue pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src={release.image}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, #1E3250 0%, #1E3250f2 40%, #1E3250c4 66%, #1E325085 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, #1E3250e6 0%, transparent 32%, transparent 66%, #1E3250 100%)',
            }}
          />
        </div>
        <div className="absolute inset-0 text-white/[0.05]" aria-hidden="true">
          <DotGrid className="h-full w-full" />
        </div>
        <Grain />

        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
          <button
            type="button"
            onClick={() => navigate('imprensa')}
            className="mb-9 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Sala de Imprensa
          </button>

          <div className="max-w-4xl">
            <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span
                className="rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                style={{ backgroundColor: cor }}
              >
                {release.type}
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/55">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={release.date}>{formatDateLong(release.date)}</time>
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/55">
                <MapPin className="h-3.5 w-3.5" />
                {release.location}
              </span>
            </div>

            <h1 className="mb-6 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl">
              {release.title}
            </h1>

            <p className="inline-flex items-center gap-2 text-sm text-white/70">
              <Mic className="h-4 w-4 shrink-0" />
              {release.spokesperson}
            </p>
          </div>
        </div>
      </header>

      {/* ============ CORPO + ASSESSORIA ============ */}
      <div className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <RichText blocks={release.body} accent={cor} />

              <div className="mt-14 flex flex-col gap-6 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <ShareBar title={release.title} />
                <button
                  type="button"
                  onClick={() => navigate('imprensa')}
                  className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-un-blue transition-colors hover:text-un-blue-1"
                >
                  Todos os documentos
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="lg:sticky lg:top-28">
                <ContatoAssessoria />
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ============ OUTROS DOCUMENTOS ============ */}
      {outros.length > 0 && (
        <section className="bg-un-surface py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeader badge="Sala de Imprensa" title="Outros" titleAccent="documentos" />
            <div className="flex flex-col gap-4">
              {outros.map((r, i) => (
                <Reveal key={r.slug} delay={i * 80}>
                  <ReleaseCard release={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
};
