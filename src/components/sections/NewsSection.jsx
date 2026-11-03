import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { ArticleCard } from '../ui/ArticleCard';
import { NOTICIAS } from '../../data/noticias';

const DESTAQUES = 5;

/**
 * Vitrine de notícias da home. A listagem completa, com filtros e
 * paginação, vive em `NoticiasPage`.
 */
export const NewsSection = ({ navigate }) => {
  const noticias = NOTICIAS.slice(0, DESTAQUES);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Inovação e Tendências"
          title="Nossas"
          titleAccent="Notícias"
          description="Acompanhe as últimas atualizações, insights e marcos da sustentabilidade corporativa no Brasil e no mundo."
          button={
            <Button
              variant="ghost"
              className="hidden items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-un-blue hover:text-un-blue-1 md:flex"
              onClick={() => navigate?.('noticias')}
            >
              Ver Todas <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          }
        />

        {/* Carrossel horizontal com snap */}
        <div className="hide-scrollbar -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-10 pt-4 md:gap-8">
          {noticias.map((noticia) => (
            <ArticleCard
              key={noticia.slug}
              noticia={noticia}
              className="w-[85vw] min-w-[300px] shrink-0 snap-start sm:w-[380px] md:w-[420px]"
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:mt-12">
          <Button
            variant="primary"
            className="px-10 py-4 shadow-xl hover:shadow-un-blue/20"
            onClick={() => navigate?.('noticias')}
            icon={ArrowRight}
          >
            Ver Todas as Notícias
          </Button>
        </div>
      </div>
    </section>
  );
};
