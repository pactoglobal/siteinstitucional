import React, { useState } from 'react';
import { ArrowRight, Globe, Layers, Target, Users, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { PLATAFORMAS } from '../data/plataformas';
import { ODS_COLORS } from '../data/constants';
import { cn } from '../utils/cn';

// Filtros temáticos
const FILTROS = [
  { id: 'todos', label: 'Todas as Plataformas' },
  { id: 'Meio Ambiente', label: 'Meio Ambiente & Clima' },
  { id: 'Direitos Humanos', label: 'Direitos Humanos & Trabalho' },
  { id: 'Anticorrupção', label: 'Integridade & Governança' },
  { id: 'Transversal', label: 'Transversal & Comunicação' },
];

export const PlataformasPage = ({ navigate }) => {
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  const plataformasFiltradas =
    filtroAtivo === 'todos'
      ? PLATAFORMAS
      : PLATAFORMAS.filter((p) => p.pilar === filtroAtivo);

  return (
    <div className="animate-fade-in">
      {/* Hero Principal */}
      <PageHero
        category="Ação Coletiva & Impacto"
        title="Plataformas de Ação"
        description="Espaços de liderança, aprendizado e transformação setorial onde as empresas aceleram metas concretas para os Objetivos de Desenvolvimento Sustentável."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
        color="bg-[#002B49]"
      />

      {/* Introdução & Bento Grid de Plataformas */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Header & Filtros */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-un-blue text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                Arquitetura Temática
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-900 uppercase tracking-tight">
                Explore as <span className="text-un-blue">6 Frentes Oficiais</span>
              </h2>
            </div>

            {/* Filtros em Pílulas */}
            <div className="flex flex-wrap items-center gap-2">
              {FILTROS.map((f) => {
                const isActive = filtroAtivo === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFiltroAtivo(f.id)}
                    className={cn(
                      'text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 cursor-pointer',
                      isActive
                        ? 'bg-un-blue text-white shadow-md scale-105'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200',
                    )}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Assimétrico Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plataformasFiltradas.map((plat, index) => {
              const isLead = index === 0 && filtroAtivo === 'todos';
              return (
                <div
                  key={plat.id}
                  onClick={() => navigate('plataforma', plat.slug)}
                  className={cn(
                    'group relative flex flex-col justify-between rounded-[2.5rem] bg-white border border-slate-200/80 p-8 md:p-10 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden',
                    isLead ? 'lg:col-span-2' : 'lg:col-span-1',
                  )}
                >
                  {/* Top Bar na cor da plataforma */}
                  <div
                    className="absolute top-0 left-0 right-0 h-3 transition-all duration-300 group-hover:h-3.5"
                    style={{ backgroundColor: plat.color }}
                  />

                  {/* Header do Card */}
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <span
                        className="text-[10px] font-black uppercase px-3.5 py-1 rounded-full text-white tracking-wider shadow-sm"
                        style={{ backgroundColor: plat.color }}
                      >
                        {plat.pilar}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {plat.ods.slice(0, 4).map((n) => (
                          <span
                            key={n}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-xs"
                            style={{ backgroundColor: ODS_COLORS[n - 1] || plat.color }}
                            title={`ODS ${n}`}
                          >
                            {n}
                          </span>
                        ))}
                        {plat.ods.length > 4 && (
                          <span className="text-[10px] font-bold text-slate-400 pl-1">
                            +{plat.ods.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display font-black text-2xl md:text-3xl text-slate-900 group-hover:text-un-blue transition-colors leading-tight mb-3">
                      {plat.name}
                    </h3>

                    <p className="text-sm md:text-base font-light text-slate-600 leading-relaxed line-clamp-3 mb-6">
                      {plat.subtitulo}
                    </p>
                  </div>

                  {/* Foto Temática Nítida */}
                  <div className="relative h-44 md:h-48 rounded-2xl overflow-hidden shadow-md my-4 border border-slate-100">
                    <img
                      src={plat.image}
                      alt={plat.name}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-4 text-white text-xs font-bold uppercase tracking-widest drop-shadow-md">
                      {plat.numeros.destaque}
                    </span>
                  </div>

                  {/* Footer do Card */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-wider">
                      Acessar Plataforma
                    </span>
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1.5 shadow-sm"
                      style={{ backgroundColor: plat.color }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção Como Funciona a Adesão */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl">
          <SectionHeader
            badge="Governança & Integração"
            title="Como sua empresa"
            titleAccent="participa"
            description="As Plataformas de Ação são exclusivas para organizações signatárias do Pacto Global da ONU – Rede Brasil."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
              <span className="block font-display font-black text-4xl text-un-blue mb-4">01</span>
              <h4 className="font-display font-black text-xl text-slate-900 mb-2">Adesão ao Pacto</h4>
              <p className="text-sm font-light text-slate-600">Sua empresa deve ser participante formal da Rede Brasil do Pacto Global da ONU.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
              <span className="block font-display font-black text-4xl text-un-blue mb-4">02</span>
              <h4 className="font-display font-black text-xl text-slate-900 mb-2">Escolha de Frentes</h4>
              <p className="text-sm font-light text-slate-600">Selecione as plataformas temáticas prioritárias para o seu setor e cadeia de valor.</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 text-center">
              <span className="block font-display font-black text-4xl text-un-blue mb-4">03</span>
              <h4 className="font-display font-black text-xl text-slate-900 mb-2">Ação Coletiva</h4>
              <p className="text-sm font-light text-slate-600">Participe dos GTs, capacitações e reporte seu progresso no ciclo anual da CoP.</p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button
              variant="primary"
              onClick={() => navigate('participar')}
              className="px-10 py-5 bg-un-blue text-white hover:bg-un-blue-1 text-sm font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 transition-all"
            >
              Quero Aderir ao Pacto Global
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
