import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { PublicationCard } from '../ui/PublicationCard';
import { PUBLICACOES } from '../../data/publicacoes';

const NA_HOME = 4;

/**
 * Vitrine do Observatório na home. O acervo completo, com filtro por
 * tema e tipo, vive em `PublicacoesPage`.
 */
export const PublicacoesSection = ({ navigate }) => (
  <section className="bg-[#F4F6F9] py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Publicações e Pesquisas"
        title="Conhecimento"
        titleAccent="em Ação"
        description="Guias, relatórios e pesquisas produzidos pela rede para apoiar empresas na implementação de práticas responsáveis."
        button={
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-un-blue hover:text-un-blue-1"
            onClick={() => navigate?.('publicacoes')}
          >
            Ver Todas <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {PUBLICACOES.slice(0, NA_HOME).map((publicacao) => (
          <PublicationCard key={publicacao.slug} publicacao={publicacao} className="h-full" />
        ))}
      </div>
    </div>
  </section>
);
