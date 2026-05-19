import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const MOVIMENTOS = [
  {
    id: 'conexao-circular',
    span: 2,
    bg: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'mais-agua',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'educa2030',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'elas-lideram',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'mente-foco',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'net-zero',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'raca-prioridade',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'salario-digno',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'transparencia',
    span: 2,
    bg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'impacto-amazonia',
    span: 1,
    bg: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop',
  },
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

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        style={{ gridAutoRows: '140px' }}
      >
        {MOVIMENTOS.map((mov) => (
          <a
            key={mov.id}
            href="#"
            className="group relative flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer"
            style={{ gridColumn: `span ${mov.span}` }}
          >
            {/* Background image */}
            <img
              src={mov.bg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/75 group-hover:bg-white/65 transition-colors duration-300" />

            {/* Logo */}
            <img
              src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
              alt={mov.id}
              className="relative z-10 w-[80%] h-[60%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
