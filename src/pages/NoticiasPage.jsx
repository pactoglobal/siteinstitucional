import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { NewsSection } from '../components/sections/NewsSection';

export const NoticiasPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Comunicação"
      title="Notícias"
      description="Acompanhe as últimas atualizações, destaques e materiais da nossa sala de imprensa."
      image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
      color="bg-un-footer"
    />
    <NewsSection />
  </div>
);