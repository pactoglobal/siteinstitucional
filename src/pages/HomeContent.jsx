import React from 'react';
import { HeroCarousel } from '../components/sections/HeroCarousel';
import { ImpactSection } from '../components/sections/ImpactSection';
import { PillaresSection } from '../components/sections/PillaresSection';
import { MovimentosSection } from '../components/sections/MovimentosSection';
import { PlataformasSection } from '../components/sections/PlataformasSection';
import { EventsListSection } from '../components/sections/EventsListSection';
import { NewsSection } from '../components/sections/NewsSection';
import { PublicacoesSection } from '../components/sections/PublicacoesSection';

export const HomeContent = ({ navigate }) => (
  <div className="animate-fade-in">
    <HeroCarousel />
    <ImpactSection />
    <PillaresSection />
    <MovimentosSection />
    <PlataformasSection />
    <EventsListSection />
    <NewsSection navigate={navigate} />
    <PublicacoesSection />
  </div>
);