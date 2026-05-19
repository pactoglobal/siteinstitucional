import React from 'react';
import { Button } from '../components/ui/Button';
import { PageHero } from '../components/ui/PageHero';

export const ConhecimentoPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Resources"
      title="Conhecimento"
      description="Acesse publicações, cursos, workshops e ferramentas para impulsionar a jornada ESG da sua empresa."
      image="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop"
      color="bg-[#6E417A]"
    />
    <section className="py-20 bg-gray-50">
       <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {['Publicações', 'Academy', 'ESG Corporativo'].map(item => (
                <div key={item} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                   <h3 className="text-xl font-bold text-un-blue mb-4 uppercase tracking-tighter">{item}</h3>
                   <p className="text-gray-500 text-sm mb-6">Explore nossa curadoria de conteúdos técnicos e práticos para sua organização.</p>
                   <Button variant="ghost" className="p-0 border-b border-un-blue rounded-none">Acessar Grátis</Button>
                </div>
             ))}
          </div>
       </div>
    </section>
  </div>
);