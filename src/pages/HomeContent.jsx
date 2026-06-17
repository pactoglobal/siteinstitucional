import React from 'react';
import { HeroCarousel } from '../components/sections/HeroCarousel';
import { ImpactSection } from '../components/sections/ImpactSection';
import { PillaresSection } from '../components/sections/PillaresSection';
import { MovimentosSection } from '../components/sections/MovimentosSection';
import { PlataformasSection } from '../components/sections/PlataformasSection';
import { EventsListSection } from '../components/sections/EventsListSection';
import { NewsSection } from '../components/sections/NewsSection';
import { PublicacoesSection } from '../components/sections/PublicacoesSection';
import { ParceirosSection } from '../components/sections/ParceirosSection';

export const HomeContent = ({ navigate }) => (
  <div className="animate-fade-in">
    <HeroCarousel />
    <ImpactSection />
    <EventsListSection navigate={navigate} />
    <PillaresSection />
    <MovimentosSection />
    <PlataformasSection />
    <NewsSection navigate={navigate} />
    <PublicacoesSection />
    <ParceirosSection />
  </div>
);