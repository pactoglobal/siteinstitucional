import React from 'react';
import { ArrowLeft, ArrowRight, Clock, Calendar, Newspaper } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { DemoNotice } from '../components/ui/DemoNotice';
import { RichText } from '../components/ui/RichText';
import { ShareBar } from '../components/ui/ShareBar';
import { ArticleCard } from '../components/ui/ArticleCard';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { DotGrid, Grain } from '../components/ui/Texture';
import { SectionHeader } from '../components/ui/SectionHeader';
import { getNoticia, getRelacionadas, corDaCategoria } from '../data/noticias';
import { formatDateLong } from '../utils/date';

const NaoEncontrada = ({ navigate }) => (
  <div className="pt-32 pb-20">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <EmptyState
        as="h1"
        icon={Newspaper}
        title="Notícia não encontrada"
        description="A publicação que você procura não existe ou foi movida para o arquivo."
        action={
          <Button variant="primary" icon={ArrowLeft} onClick={() => navigate('noticias')}>
            Ver todas as notícias
          </Button>
        }
      />
    </div>
  </div>
);

export const NoticiaPage = ({ slug, navigate }) => {
  const noticia = getNoticia(slug);
  if (!noticia) return <NaoEncontrada navigate={navigate} />;

  const cor = corDaCategoria(noticia.category);
  const relacionadas = getRelacionadas(slug, 3);

  return (
    <article className="animate-fade-in">
      <DemoNotice />

      {/* ============ CABEÇALHO EDITORIAL ============ */}
      <header className="relative overflow-hidden bg-un-blue pt-32 md:pt-40 pb-32 md:pb-44">
        <div
          className="absolute -right-32 top-0 h-[520px] w-[520px] rounded-full blur-3xl animate-glow pointer-events-none"
          style={{ background: `radial-gradient(circle, ${cor}66, transparent 65%)` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 text-white/[0.05]" aria-hidden="true">
          <DotGrid className="h-full w-full" />
        </div>
        <Grain />

        <div className="container relative z-10 mx-auto px-4 md:px-8 lg:px-12">
          <div className="max-w-4xl">
            <button
              type="button"
              onClick={() => navigate('noticias')}
              className="mb-9 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Notícias
            </button>

            <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                style={{ backgroundColor: cor }}
              >
                {noticia.category}
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50">
                <Calendar className="h-3.5 w-3.5" />
                <time dateTime={noticia.date}>{formatDateLong(noticia.date)}</time>
              </span>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50">
                <Clock className="h-3.5 w-3.5" />
                {noticia.readingTime} min de leitura
              </span>
            </div>

            <h1 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              {noticia.title}
            </h1>
          </div>
        </div>
      </header>

      {/* ============ IMAGEM EM SOBREPOSIÇÃO ============ */}
      <div className="relative z-20 -mt-20 md:-mt-32">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <figure className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={noticia.image}
              alt={noticia.imageCaption || noticia.title}
              className="aspect-[16/9] w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            {noticia.imageCaption && (
              <figcaption className="bg-white px-6 py-4 text-xs font-light leading-relaxed text-gray-500 md:px-8">
                {noticia.imageCaption}
              </figcaption>
            )}
          </figure>
        </div>
      </div>

      {/* ============ CORPO ============ */}
      <div className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Coluna lateral fixa */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-28 flex flex-col gap-8">
                <div>
                  <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Publicado em
                  </span>
                  <p className="font-display text-lg font-black uppercase leading-tight tracking-tight text-gray-900">
                    {formatDateLong(noticia.date)}
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <ShareBar title={noticia.title} className="flex-wrap gap-y-3" />
                </div>
              </div>
            </aside>

            {/* Texto */}
            <div className="lg:col-span-8 lg:col-start-5">
              <RichText blocks={noticia.body} accent={cor} />

              <div className="mt-14 flex flex-col gap-6 border-t border-gray-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <ShareBar title={noticia.title} />
                <button
                  type="button"
                  onClick={() => navigate('noticias')}
                  className="group inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-un-blue transition-colors hover:text-un-blue-1"
                >
                  Todas as notícias
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ RELACIONADAS ============ */}
      {relacionadas.length > 0 && (
        <section className="bg-un-surface py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeader
              badge="Continue lendo"
              title="Notícias"
              titleAccent="relacionadas"
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {relacionadas.map((n, i) => (
                <Reveal key={n.slug} delay={i * 80}>
                  <ArticleCard noticia={n} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-un-blue py-16 md:py-20">
        <Grain />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-8 lg:px-12">
          <h2 className="mx-auto mb-4 max-w-2xl font-display text-2xl font-black uppercase leading-tight tracking-tight text-white md:text-4xl">
            Sua empresa também pode fazer parte
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base font-light text-white/70">
            Junte-se às mais de 1.900 empresas participantes do Pacto Global da ONU no Brasil.
          </p>
          <div className="flex justify-center">
            <Button variant="primary" icon={ArrowRight} onClick={() => navigate('participar')}>
              Quero Aderir
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};
