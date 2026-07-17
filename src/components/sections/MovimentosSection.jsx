import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { MOVIMENTOS } from '../../data/ambicao2030';

// Apenas o layout (span do bento) é local — cor, id e nome vêm de ambicao2030.js,
// a fonte única de dados dos Movimentos (evita divergência entre seções).
const SPAN_BY_ID = {
  'conexao-circular': 2,
  transparencia: 2,
};

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
            style={{ gridColumn: `span ${SPAN_BY_ID[mov.id] ?? 1}` }}
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
              alt={mov.name}
              className="relative z-10 w-[80%] h-[55%] object-contain transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>
    </div>
  </section>
);
