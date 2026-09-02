import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { PLATAFORMAS } from '../../data/plataformas';

// Layout spans para o bento grid da Home (6 itens)
const BENTO_SPANS = [
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-2',
];

export const PlataformasSection = ({ navigate }) => (
  <section className="py-16 md:py-24 bg-[#F4F6F9]">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        badge="Entenda nossas"
        title="Plataformas"
        titleAccent="de Ação"
        description="Seis plataformas temáticas que estruturam como as empresas podem agir de forma coletiva e sistêmica pelos Objetivos de Desenvolvimento Sustentável."
        button={
          <Button
            variant="ghost"
            onClick={() => navigate && navigate('plataformas')}
            className="font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 text-un-blue hover:text-un-blue-1 cursor-pointer"
          >
            Ver Todas <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {PLATAFORMAS.map((plat, idx) => (
          <button
            key={plat.id}
            onClick={() => navigate && navigate('plataforma', plat.slug)}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] text-left w-full border border-slate-200/50 shadow-sm hover:shadow-xl transition-all duration-300 ${BENTO_SPANS[idx] || 'lg:col-span-1'}`}
          >
            {/* Imagem de fundo */}
            <img
              src={plat.image}
              alt={plat.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Color accent bottom bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1.5 transition-all duration-300 group-hover:h-2"
              style={{ backgroundColor: plat.color }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <span
                className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full text-white tracking-wider self-start mb-2 shadow-sm"
                style={{ backgroundColor: plat.color }}
              >
                {plat.pilar}
              </span>

              <h3 className="font-display font-black text-white text-xl md:text-2xl leading-tight tracking-tight mb-2 drop-shadow-lg">
                {plat.name}
              </h3>

              <p className="text-white/80 text-xs md:text-sm leading-relaxed font-light max-w-sm line-clamp-2 opacity-90 group-hover:opacity-100 transition-opacity">
                {plat.subtitulo}
              </p>

              <div className="flex items-center gap-2 mt-3 text-[10px] font-bold uppercase tracking-widest text-white/90">
                <span>Conhecer Plataforma</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);
