import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export const NEWS_DATA = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1965&auto=format&fit=crop',
    title: 'Pacto Global lança nova iniciativa focada em economia circular',
    description: 'Companhias signatárias se reúnem para discutir o impacto das novas metas de redução de resíduos em suas operações logísticas e a importância do engajamento mútuo.',
    category: 'MEIO AMBIENTE',
    time: '2 min de leitura'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    title: 'Exclusivo: CEOs debatem o futuro do trabalho decente no Brasil',
    description: 'Lideranças discutem como manter a integridade garantindo oportunidades iguais, combatendo discriminações e valorizando os talentos no ambiente corporativo.',
    category: 'TRABALHO',
    time: '5 min de leitura'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop',
    title: 'O poder de ser positivo: Notícias de impacto transformador',
    description: 'Ações contínuas em territórios afetados mostram como atitudes sustentáveis geraram mudanças reais e significativas em inúmeras comunidades vulneráveis.',
    category: 'DIREITOS HUMANOS',
    time: '10 min de leitura'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    title: 'Integração de novas métricas de governança no setor financeiro',
    description: 'Especialistas traçam um paralelo contundente entre a transparência de relatórios e a capacidade de atração de novos investimentos globais na área verde.',
    category: 'ANTICORRUPÇÃO',
    time: '8 min de leitura'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop',
    title: 'Ambição 2030 traz novas narrativas climáticas e globais',
    description: 'A sustentabilidade não fica de fora das grandes iniciativas; descubra os detalhes sobre como o maior pacto empresarial encara o desafio de Zero Carbono.',
    category: 'SUSTENTABILIDADE',
    time: '6 min de leitura'
  }
];

export const NewsSection = ({ navigate }) => {
  return (
    <section className="py-16 md:py-24 bg-un-surface">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader 
          barColor="bg-un-blue"
          badge="Inovação e Tendências"
          title="Nossas"
          titleAccent="Notícias"
          description="Acompanhe as últimas atualizações, insights e marcos da sustentabilidade corporativa no Brasil e no mundo."
          button={
            navigate && (
              <Button 
                variant="ghost" 
                className="hidden md:flex items-center gap-2 text-un-blue hover:text-un-blue-1 font-bold uppercase tracking-widest text-[10px]"
                onClick={() => navigate('noticias')}
              >
                Ver Todas <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            )
          }
        />

        {/* Horizontal scroll container (Carousel) */}
        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-10 snap-x snap-mandatory pt-4 px-4 -mx-4 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <style>{`
             .hide-scrollbar::-webkit-scrollbar { display: none; }
           `}</style>
           
            {NEWS_DATA.map(news => (
               <div 
                key={news.id} 
                onClick={() => navigate && navigate('noticias')}
                className="min-w-[300px] w-[85vw] sm:w-[380px] md:w-[440px] shrink-0 snap-start bg-white rounded-[2rem] shadow-sm border border-gray-100/80 flex flex-col overflow-hidden group cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 focus:outline-none"
              >
                {/* Image Cover */}
                <div className="w-full h-64 md:h-[300px] overflow-hidden relative">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-un-blue flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-xl">
                     <ArrowRight className="w-5 h-5 -rotate-45" />
                  </div>
                </div>
               
               {/* Content */}
               <div className="p-7 md:p-8 flex flex-col flex-1">
                 <h3 className="text-xl md:text-2xl font-bold font-display text-gray-900 leading-snug tracking-tight mb-4 group-hover:text-un-blue transition-colors">
                   {news.title}
                 </h3>
                 <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed font-light mb-8 line-clamp-3">
                   {news.description}
                 </p>
                 
                 {/* Footer metadata */}
                 <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-100/80">
                   <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-800">
                     {news.category}
                   </span>
                   <span className="text-[10px] md:text-xs text-gray-400 font-medium whitespace-nowrap">
                     {news.time}
                   </span>
                 </div>
               </div>
             </div>
           ))}
        </div>

        {/* View All Button - Centered Bottom */}
        {navigate && (
          <div className="mt-12 md:mt-16 flex justify-center">
            <Button 
              variant="primary" 
              className="px-10 py-4 shadow-xl hover:shadow-un-blue/20"
              onClick={() => navigate('noticias')}
              icon={ArrowRight}
            >
              Ver Todas as Notícias
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};