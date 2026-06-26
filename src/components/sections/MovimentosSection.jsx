import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const MOVIMENTOS = [
  { id: 'conexao-circular', color: '#B8922A', span: 2 },
  { id: 'mais-agua',        color: '#009EDB', span: 1 },
  { id: 'educa2030',        color: '#C0392B', span: 1 },
  { id: 'elas-lideram',     color: '#E04B2A', span: 1 },
  { id: 'mente-foco',       color: '#3A7D44', span: 1 },
  { id: 'net-zero',         color: '#3A7D44', span: 1 },
  { id: 'raca-prioridade',  color: '#D81B7E', span: 1 },
  { id: 'salario-digno',    color: '#8B1A3A', span: 1 },
  { id: 'transparencia',    color: '#006080', span: 2 },
  { id: 'impacto-amazonia', color: '#1A6B3C', span: 1 },
];

export const MovimentosSection = ({ navigate }) => (
  <section className="py-16 md:py-24 bg-un-blue">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        inverted
        barColor="bg-un-green"
        badge="Ambição 2030"
        title="Nossos"
        titleAccent="Movimentos"
        description="Iniciativas estratégicas que mobilizam empresas em torno de causas urgentes, conectando compromisso com ação real."
        button={
          <Button
            variant="ghost"
            className="text-white hover:text-un-blue-3 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2"
            onClick={() => navigate && navigate('ambicao')}
          >
            Ver Todos <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        }
      />

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        style={{ gridAutoRows: '140px' }}
      >
        {MOVIMENTOS.map((mov) => (
          <button
            key={mov.id}
            onClick={() => navigate && navigate('movimento', mov.id)}
            className="group relative flex items-center justify-center bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold"
            style={{ gridColumn: `span ${mov.span}` }}
          >
            {/* Top color bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
              style={{ backgroundColor: mov.color }}
            />

            {/* Subtle color wash on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300"
              style={{ backgroundColor: mov.color }}
            />

            {/* Logo */}
            <img
              src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
              alt={mov.id}
              className="relative z-10 w-[80%] h-[55%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>
    </div>
  </section>
);
