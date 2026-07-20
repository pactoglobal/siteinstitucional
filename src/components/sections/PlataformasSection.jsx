import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const PLATAFORMAS = [
  {
    id: 'clima',
    title: 'Ação pelo Clima',
    description: 'Ambições climáticas alinhadas à ciência e ao Acordo de Paris.',
    color: '#009EDB',
    span: 'lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'corrupcao',
    title: 'Contra a Corrupção',
    description: 'Integridade corporativa e transparência em toda a cadeia de valor.',
    color: '#EC3740',
    span: 'lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'direitos-humanos',
    title: 'Direitos Humanos',
    description: 'Respeito aos direitos humanos nas operações e relações comerciais.',
    color: '#6E417A',
    span: 'lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'agricultura',
    title: 'Agricultura e Florestas',
    description: 'Cadeias de suprimentos sustentáveis e proteção dos biomas brasileiros.',
    color: '#56C02B',
    span: 'lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'comunicar',
    title: 'Comunicar e Engajar',
    description: 'Amplificando narrativas de impacto e engajando stakeholders nos ODS.',
    color: '#F5A623',
    span: 'lg:col-span-1',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'oceano',
    title: 'Oceano, Água e Resíduos',
    description: 'Protegendo recursos hídricos e ecossistemas marinhos.',
    color: '#00689D',
    span: 'lg:col-span-2',
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200&auto=format&fit=crop',
  },
];

export const PlataformasSection = () => (
  <section className="py-16 md:py-24 bg-[#F4F6F9]">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        barColor="bg-un-blue"
        badge="Entenda nossas"
        title="Plataformas"
        titleAccent="de Ação"
        description="Seis plataformas temáticas que estruturam como as empresas podem agir de forma coletiva e sistêmica pelos Objetivos de Desenvolvimento Sustentável."
        button={
          <Button variant="ghost" className="font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 text-un-blue hover:text-un-blue-1">
            Ver Todas <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {PLATAFORMAS.map((plat) => (
          <a
            key={plat.id}
            href="#"
            className={`group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/3] ${plat.span}`}
          >
            {/* Background image */}
            <img
              src={plat.image}
              alt={plat.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

            {/* Color accent bottom bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
              style={{ backgroundColor: plat.color }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h3 className="font-display font-black text-white text-xl md:text-2xl leading-tight tracking-tight mb-2 drop-shadow-lg">
                {plat.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed font-light max-w-xs opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {plat.description}
              </p>
              <div className="flex items-center gap-2 mt-3 text-[10px] font-bold uppercase tracking-widest text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Saiba mais <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
