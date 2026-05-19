import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const MOVIMENTOS = [
  { id: 'mais-agua',        title: '+Água',              category: 'Meio Ambiente',   color: '#009EDB' },
  { id: 'conexao-circular', title: 'Conexão Circular',   category: 'Meio Ambiente',   color: '#56C02B' },
  { id: 'educa2030',        title: 'EDUCA2030',          category: 'Educação',        color: '#FFC300' },
  { id: 'transparencia',    title: 'Transparência 100%', category: 'Anticorrupção',   color: '#EC3740' },
  { id: 'raca-prioridade',  title: 'Raça é Prioridade',  category: 'Direitos Humanos',color: '#8B4513' },
  { id: 'elas-lideram',     title: 'Elas Lideram 2030',  category: 'Direitos Humanos',color: '#6E417A' },
  { id: 'mente-foco',       title: 'Mente em Foco',      category: 'Trabalho',        color: '#00689D' },
  { id: 'net-zero',         title: 'Ambição Net Zero',   category: 'Meio Ambiente',   color: '#297D6D' },
  { id: 'impacto-amazonia', title: 'Impacto Amazônia',   category: 'Meio Ambiente',   color: '#1A6B3C' },
  { id: 'salario-digno',    title: 'Salário Digno',      category: 'Trabalho',        color: '#F5A623' },
];

export const MovimentosSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 320, behavior: 'smooth' });
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
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
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 hidden md:block" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 hidden md:block" />

        {/* Scroll controls */}
        <button
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-un-blue hover:bg-un-blue hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 items-center justify-center text-un-blue hover:bg-un-blue hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-16 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {MOVIMENTOS.map((mov) => (
            <div
              key={mov.id}
              className="group relative shrink-0 w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden cursor-pointer snap-start"
              style={{ backgroundColor: mov.color }}
            >
              <img
                src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                alt={mov.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Category pill */}
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: mov.color }}
              >
                {mov.category}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-display font-black text-xl leading-tight tracking-tight mb-3">
                  {mov.title}
                </h3>
                <div className="flex items-center gap-2 text-white/70 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Saiba mais <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Bottom color bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-80"
                style={{ backgroundColor: mov.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
