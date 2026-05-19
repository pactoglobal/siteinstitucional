import React from 'react';
import { PageHero } from '../components/ui/PageHero';

export const ProgramasPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Ação"
      title="Programas"
      description="Iniciativas focadas e plataformas de ação para acelerar o progresso em temas críticos de sustentabilidade."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      color="bg-[#166088]"
    />
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center max-w-3xl">
         <h2 className="text-3xl font-display font-black text-un-blue mb-8 uppercase">Acelerando o Impacto</h2>
         <p className="text-gray-600">Nossos programas são desenhados para mover empresas de compromissos para ações concretas, utilizando métricas claras e compartilhamento de conhecimento.</p>
      </div>
    </section>
  </div>
);