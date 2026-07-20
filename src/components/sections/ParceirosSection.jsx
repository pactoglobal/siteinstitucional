import React from 'react';
import { SectionHeader } from '../ui/SectionHeader';

const PARCEIROS = [
  {
    id: 'befly',
    name: 'BeFly',
    src: null,
    label: 'BeFly',
    style: 'font-black tracking-tight text-gray-800 text-lg',
  },
  {
    id: 'icmp',
    name: 'ICMP',
    src: null,
    label: 'ICMP\nConsultoria em TI',
    style: 'font-bold text-[11px] leading-tight text-white bg-un-blue px-3 py-1.5 rounded',
  },
  {
    id: 'blip',
    name: 'blip',
    src: null,
    label: 'blip',
    style: 'font-black text-xl text-[#00B0FF]',
  },
  {
    id: 'equalweb',
    name: 'Equalweb',
    src: null,
    label: 'ẼQUALWEB',
    style: 'font-bold tracking-widest text-[11px] text-gray-700 uppercase',
  },
  {
    id: 'stilingue',
    name: 'Stilingue',
    src: null,
    label: 'STILINGUE',
    style: 'font-bold tracking-widest text-[11px] text-gray-700 uppercase',
  },
  {
    id: 'be-lgpd',
    name: 'be. LGPD',
    src: null,
    label: 'be.\nLGPD Standards\nCompliance',
    style: 'font-bold text-[10px] leading-tight text-gray-700',
  },
  {
    id: 'deskbee',
    name: 'deskbee',
    src: null,
    label: 'deskbee',
    style: 'font-black text-lg text-[#1E3250]',
  },
];

export const ParceirosSection = () => (
  <section className="py-16 md:py-20 bg-un-surface">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        barColor="bg-un-blue"
        badge="Ecossistema"
        title="Nossos"
        titleAccent="Parceiros"
        description="Empresas que apoiam a operação e ampliam o impacto da Rede Brasil do Pacto Global da ONU."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
        {PARCEIROS.map((p) => (
          <a
            key={p.id}
            href="#"
            className="group flex items-center justify-center bg-white rounded-2xl border border-gray-100 hover:border-un-blue/20 hover:shadow-lg transition-all duration-300 aspect-[3/2] p-5"
          >
            <span
              className={`text-center whitespace-pre-line transition-opacity duration-300 group-hover:opacity-80 ${p.style}`}
            >
              {p.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);
