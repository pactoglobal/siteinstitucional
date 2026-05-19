import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const MOVIMENTOS = [
  { id: 'mais-agua',        color: '#009EDB' },
  { id: 'conexao-circular', color: '#56C02B' },
  { id: 'educa2030',        color: '#FFC300' },
  { id: 'transparencia',    color: '#EC3740' },
  { id: 'raca-prioridade',  color: '#8B4513' },
  { id: 'elas-lideram',     color: '#E04B2A' },
  { id: 'mente-foco',       color: '#00689D' },
  { id: 'net-zero',         color: '#3A7D44' },
  { id: 'impacto-amazonia', color: '#1A6B3C' },
  { id: 'salario-digno',    color: '#F5A623' },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
        {MOVIMENTOS.map((mov) => (
          <a
            key={mov.id}
            href="#"
            className="group flex items-center justify-center bg-[#E8ECF2] rounded-2xl p-5 md:p-6 hover:bg-[#1E3250] hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            <img
              src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
              alt={mov.id}
              className="w-full h-auto object-contain max-h-14 transition-transform duration-300 group-hover:scale-105 group-hover:brightness-0 group-hover:invert"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
