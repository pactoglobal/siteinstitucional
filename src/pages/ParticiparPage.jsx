import React from 'react';
import { Award, TrendingUp, Users } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';

export const ParticiparPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Junte-se à nós"
      title="Participação"
      description="Descubra como sua empresa pode se tornar signatária do Pacto Global e liderar pelo exemplo."
      image="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop"
      color="bg-un-green"
    />
    <section className="py-20 bg-white">
       <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-display font-black text-un-blue mb-12 uppercase">Por que participar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
             <div>
                <div className="w-16 h-16 bg-un-green/10 text-un-green rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <Award className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-4 uppercase">Credibilidade</h4>
                <p className="text-sm text-gray-500">Alinhe-se à maior iniciativa de sustentabilidade da ONU.</p>
             </div>
             <div>
                <div className="w-16 h-16 bg-un-blue/10 text-un-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <TrendingUp className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-4 uppercase">Performance</h4>
                <p className="text-sm text-gray-500">Melhore seus índices ESG com ferramentas de medição.</p>
             </div>
             <div>
                <div className="w-16 h-16 bg-un-gold/10 text-un-gold rounded-2xl flex items-center justify-center mx-auto mb-6">
                   <Users className="w-8 h-8" />
                </div>
                <h4 className="font-bold mb-4 uppercase">Networking</h4>
                <p className="text-sm text-gray-500">Conecte-se com mais de 2.000 empresas no Brasil.</p>
             </div>
          </div>
       </div>
    </section>
  </div>
);