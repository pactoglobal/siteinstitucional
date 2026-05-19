import React from 'react';
import { ArrowRight, Thermometer, ShieldCheck, Leaf, Users, Megaphone, Waves } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

const PLATAFORMAS = [
  {
    id: 'clima',
    title: 'Plataforma de Ação pelo Clima',
    description: 'Mobilizando empresas para ambições climáticas alinhadas à ciência e ao Acordo de Paris.',
    color: '#009EDB',
    Icon: Thermometer,
  },
  {
    id: 'corrupcao',
    title: 'Ação Contra a Corrupção',
    description: 'Fortalecendo a integridade corporativa e práticas transparentes em toda a cadeia de valor.',
    color: '#EC3740',
    Icon: ShieldCheck,
  },
  {
    id: 'agricultura',
    title: 'Ação pela Agricultura e Florestas',
    description: 'Impulsionando cadeias de suprimentos sustentáveis e proteção dos biomas brasileiros.',
    color: '#56C02B',
    Icon: Leaf,
  },
  {
    id: 'direitos-humanos',
    title: 'Ação pelos Direitos Humanos',
    description: 'Integrando respeito aos direitos humanos nas operações e relações comerciais das empresas.',
    color: '#6E417A',
    Icon: Users,
  },
  {
    id: 'comunicar',
    title: 'Ação Para Comunicar e Engajar',
    description: 'Amplificando narrativas de impacto e engajando stakeholders em torno dos ODS.',
    color: '#F5A623',
    Icon: Megaphone,
  },
  {
    id: 'oceano',
    title: 'Ação pelo Oceano, Água e Resíduos',
    description: 'Protegendo recursos hídricos e ecossistemas marinhos através da ação empresarial coletiva.',
    color: '#00689D',
    Icon: Waves,
  },
];

export const PlataformasSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        barColor="bg-un-blue"
        badge="Entenda nossas"
        title="Plataformas"
        titleAccent="de Ação"
        description="Seis plataformas temáticas que estruturam como as empresas podem agir de forma coletiva e sistêmica pelos Objetivos de Desenvolvimento Sustentável."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {PLATAFORMAS.map((plat) => (
          <a
            key={plat.id}
            href="#"
            className="group relative bg-white rounded-3xl p-6 md:p-8 border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 flex flex-col gap-4 overflow-hidden"
          >
            {/* Color accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: plat.color }}
            />

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: `${plat.color}18` }}
            >
              <plat.Icon className="w-5 h-5" style={{ color: plat.color }} />
            </div>

            <div className="flex-1">
              <h3
                className="font-display font-black text-lg leading-tight tracking-tight mb-2 transition-colors duration-200"
                style={{ color: '#1a2b4a' }}
              >
                {plat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {plat.description}
              </p>
            </div>

            <div
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
              style={{ color: plat.color }}
            >
              Saiba mais <ArrowRight className="w-3 h-3" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);
