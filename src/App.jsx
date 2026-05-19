import React, { useEffect } from 'react';

/**
 * ARTEFATO FINAL: UN GLOBAL COMPACT DESIGN SYSTEM (v13)
 * ---------------------------------------------------------
 * Componentes Inclusos:
 * 1. Super Menu (Overlay Fullscreen + Busca + Mobile Nav)
 * 2. Capsule Header (Sticky + Clean + Logos)
 * 3. Hero Carousel (Curvo + Sem Borda + Centralizado)
 * 4. Impact Section (Dados + Mapa Pontilhado)
 * 5. Bento Grid (Notícias Assimétricas)
 * 6. Footer Institucional (Apoiadores + Links)
 */

import { useHashRoute } from './hooks/useHashRoute';
import { CapsuleHeader } from './components/layout/CapsuleHeader';
import { Footer } from './components/layout/Footer';
import { HomeContent } from './pages/HomeContent';
import { SobrePage } from './pages/SobrePage';
import { EventosPage } from './pages/EventosPage';
import { NoticiasPage } from './pages/NoticiasPage';
import { NossaAgendaPage } from './pages/NossaAgendaPage';
import { ProgramasPage } from './pages/ProgramasPage';
import { ConhecimentoPage } from './pages/ConhecimentoPage';
import { ParticiparPage } from './pages/ParticiparPage';
import { CopPage } from './pages/CopPage';

const App = () => {
  const { currentRoute, navigate } = useHashRoute('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-un-gold selection:text-un-blue flex flex-col">
      <CapsuleHeader onRouteChange={navigate} currentRoute={currentRoute} />

      <main className="flex-1">
        {currentRoute === 'home' && <HomeContent navigate={navigate} />}
        {currentRoute === 'sobre' && <SobrePage />}
        {currentRoute === 'eventos' && <EventosPage />}
        {currentRoute === 'noticias' && <NoticiasPage />}
        {currentRoute === 'agenda' && <NossaAgendaPage />}
        {currentRoute === 'programas' && <ProgramasPage />}
        {currentRoute === 'conhecimento' && <ConhecimentoPage />}
        {currentRoute === 'participar' && <ParticiparPage />}
        {currentRoute === 'cop' && <CopPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
