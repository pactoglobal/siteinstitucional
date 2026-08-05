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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {MOVIMENTOS.map((mov, index) => (
          <button
            key={mov.id}
            onClick={() => navigate && navigate('movimento', mov.id)}
            className="group relative flex flex-col justify-between h-36 md:h-44 bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-un-gold hover:-translate-y-1.5 overflow-hidden text-left cursor-pointer"
          >
            {/* Top Brand Color Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
              style={{ backgroundColor: mov.color }}
            />

            {/* Subtle Hover Color Background Tint */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: mov.color }}
            />

            {/* Top Info Header: Number & ODS Pill */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span
                className="text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full text-white tracking-wider shadow-sm"
                style={{ backgroundColor: mov.color }}
              >
                ODS {mov.ods?.join(', ')}
              </span>
            </div>

            {/* Logo Centralizado de Alta Definição */}
            <div className="relative z-10 flex-1 flex items-center justify-center w-full my-2 px-2">
              <img
                src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
                alt={mov.name}
                loading="lazy"
                className="w-full h-auto max-h-12 md:max-h-14 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Footer com Seta de Ação */}
            <div className="relative z-10 flex items-center justify-between w-full pt-2 border-t border-gray-100/80">
              <span className="text-[11px] font-semibold text-gray-500 group-hover:text-un-blue transition-colors truncate">
                Explorar
              </span>
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1 shadow-sm"
                style={{ backgroundColor: mov.color }}
              >
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);
