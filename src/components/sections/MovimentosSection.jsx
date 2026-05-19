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

export const MovimentosSection = () => (
  <section className="py-16 md:py-24 bg-[#F4F6F9]">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        barColor="bg-un-green"
        badge="Ambição 2030"
        title="Nossos"
        titleAccent="Movimentos"
        description="Iniciativas estratégicas que mobilizam empresas em torno de causas urgentes, conectando compromisso com ação real."
        button={
          <Button variant="ghost" className="text-un-blue hover:text-un-blue-1 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
            Ver Todos <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        }
      />

      {/* Bento grid: 4 cols desktop, 2 cols mobile */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {MOVIMENTOS.map((mov) => (
          <a
            key={mov.id}
            href="#"
            className="group flex items-center justify-center rounded-2xl bg-white border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer overflow-hidden"
            style={{
              aspectRatio: '5/2',
              gridColumn: `span ${mov.span}`,
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
              alt={mov.id}
              className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
