import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { MOVIMENTOS } from '../../data/ambicao2030';

export const MovimentosSection = ({ navigate }) => (
  <section className="py-16 md:py-24 bg-un-blue">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        inverted
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-4">
        {MOVIMENTOS.map((mov) => (
          <button
            key={mov.id}
            onClick={() => navigate && navigate('movimento', mov.id)}
            className="group relative flex items-center justify-center h-22 md:h-26 bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-un-gold hover:-translate-y-1"
          >
            {/* A cor do Movimento entra só no hover, como banho suave */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300"
              style={{ backgroundColor: mov.color }}
            />

            {/* Logo com altura rigorosamente uniforme e proporcional */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-3">
              <img
                src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                alt={mov.name}
                loading="lazy"
                className="h-10 md:h-12 w-auto max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);
