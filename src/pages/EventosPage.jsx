import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { EventsListSection } from '../components/sections/EventsListSection';

export const EventosPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Agenda 2026"
      title="Nossos Eventos"
      description="Participe dos principais fóruns e discussões que estão moldando o futuro dos negócios sustentáveis."
      image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      color="bg-[#1E3250]"
    />
    <div className="py-12 bg-gray-50">
       <EventsListSection />
    </div>
  </div>
);