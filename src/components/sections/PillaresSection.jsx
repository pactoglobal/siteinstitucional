import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { PILLARS_DATA, PILLAR_ICONS, ODS_NAMES } from '../../data/constants';

export const PillaresSection = () => {
  const [openPillar, setOpenPillar] = React.useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F4F6F9] to-[#ECEEF2]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        <SectionHeader 
          barColor="bg-un-blue"
          badge="Conheça nossos"
          title="Pilares"
          titleAccent="de Atuação"
          description="Mais de 80 iniciativas para engajar empresas em qualquer estágio da jornada ESG, alinhados aos ODS e aos nossos quatro pilares de atuação."
        />

        {/* 10 Principles Bento Box (Redesigned) */}
        <div className="bg-un-blue rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl shadow-un-blue/10 transition-all duration-500">
          <div className="flex flex-col lg:flex-row">
            {/* Text Column */}
            <div className="lg:w-5/12 p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <span className="text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 inline-block relative z-10" style={{letterSpacing: '0.2em'}}>Compromisso Obrigatório</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-[1.1] tracking-tight relative z-10">10 Princípios<br/>Universais</h3>
              <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-light relative z-10">
                Ao aderir ao Pacto Global da ONU, as empresas assumem o compromisso contínuo de seguir os Dez Princípios Universais — as diretrizes que fundamentam a sustentabilidade global em quatro pautas centrais.
              </p>
              <div className="hidden lg:flex items-center gap-3 text-un-blue-3 text-xs uppercase font-bold tracking-widest relative z-10">
                <ArrowRight className="w-4 h-4" /> Selecione um pilar
              </div>
            </div>
            
            {/* 2x2 Bento Cards Column */}
            <div className="lg:w-7/12 p-4 md:p-6 lg:p-8 bg-black/10">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[400px]">
                {PILLARS_DATA.map((pillar, idx) => {
                  const IC = PILLAR_ICONS[pillar.id];
                  const isActive = openPillar === idx;
                  return (
                  <button 
                    key={pillar.id} 
                    onClick={() => setOpenPillar(isActive ? -1 : idx)}
                    className={`rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 border-2 group relative overflow-hidden focus:outline-none ${isActive ? 'bg-white/10 border-white/20 shadow-lg scale-[1.02] z-10' : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`}
                  >
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-[1.2rem] overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 ${isActive ? 'shadow-lg shadow-black/20' : ''}`} style={{ backgroundColor: `${pillar.color}` }}>
                      <img 
                        src={`${import.meta.env.BASE_URL}icons/${pillar.id}.png`} 
                        alt={pillar.title} 
                        className="absolute inset-0 w-full h-[140%] object-cover object-top brightness-0 invert scale-75" 
                      />
                    </div>
                    
                    {/* Active indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: `${pillar.color}` }}></div>
                  </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Expanded Pillar Infobox (Opens Inside the Bento Container) */}
          {openPillar !== -1 && (
            <div className="border-t border-white/10 bg-black/20 animate-fade-in transition-all duration-500 p-8 md:p-14">
               {(() => {
                 const activePillar = PILLARS_DATA[openPillar];
                 const ActiveIcon = PILLAR_ICONS[activePillar.id];
                 return (
                   <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14">
                      {/* Left: Image & Pillar Intro */}
                      <div className="lg:col-span-2 flex flex-col">
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] mb-6 shadow-xl">
                          <img src={activePillar.image} alt={activePillar.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute bottom-6 left-6 flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden backdrop-blur-md shadow-lg" style={{ backgroundColor: activePillar.color }}>
                              <img 
                                src={`${import.meta.env.BASE_URL}icons/${activePillar.id}.png`} 
                                alt={activePillar.title} 
                                className="w-[65%] h-auto brightness-0 invert" 
                              />
                            </div>
                            <span className="text-white font-display font-black text-xl uppercase tracking-wider">{activePillar.title}</span>
                          </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed font-light">{activePillar.description}</p>
                      </div>

                      {/* Right: Principles List */}
                      <div className="lg:col-span-3">
                        <h4 className="flex items-center gap-3 text-un-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8">
                          <span className="w-8 h-[2px] bg-un-gold/50 rounded-full" />
                          Princípios Relacionados
                        </h4>
                        <div className="grid gap-4 mb-10">
                          {activePillar.principles.map(p => (
                            <div key={p.num} className="flex gap-5 items-start bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                              <span
                                className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md font-display font-black text-white text-lg"
                                style={{ backgroundColor: activePillar.color }}
                              >
                                {p.num}
                              </span>
                              <p className="text-white/90 text-sm md:text-base leading-relaxed pt-0.5">{p.text}</p>
                            </div>
                          ))}
                        </div>

                        {/* ODS Relacionados */}
                        {activePillar.ods && activePillar.ods.length > 0 && (
                          <div className="animate-fade-in">
                            <h4 className="flex items-center gap-3 text-un-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6">
                              <span className="w-8 h-[2px] bg-un-gold/50 rounded-full" />
                              Objetivos Relacionados (ODS)
                            </h4>
                            <div className="flex flex-wrap gap-3 md:gap-4">
                              {activePillar.ods.map(odsNum => (
                                <div key={odsNum} className="group relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-un-gold/50">
                                  <img 
                                    src={`${import.meta.env.BASE_URL}ods/ods-${odsNum}.jpg`} 
                                    alt={ODS_NAMES[odsNum - 1]} 
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                     <span className="text-white font-bold text-xs">{odsNum}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                   </div>
                 );
               })()}
            </div>
          )}
        </div>



      </div>
    </section>
  );
};