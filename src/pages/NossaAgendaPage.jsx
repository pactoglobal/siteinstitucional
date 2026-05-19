import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { PillaresSection } from '../components/sections/PillaresSection';

export const NossaAgendaPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Nossa Agenda"
      title="Impacto Global"
      description="Os Dez Princípios e os Objetivos de Desenvolvimento Sustentável (ODS) no centro da sua estratégia."
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
      color="bg-[#297D6D]"
    />
    <PillaresSection />
  </div>
);