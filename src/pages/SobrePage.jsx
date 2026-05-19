import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { PillaresSection } from '../components/sections/PillaresSection';
import { INSTITUTIONAL_STATS } from '../data/constants';

export const SobrePage = () => (
  <div className="animate-fade-in bg-un-surface min-h-screen pb-0">
    <PageHero 
      category="Iniciativa Especial ONU"
      title="Pacto Global das Nações Unidas"
      description="A maior iniciativa de sustentabilidade corporativa do mundo, impulsionando negócios como agentes de transformação."
      image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    />

    {/* Section 1: Global Context */}
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          
          {/* Main Global Text (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-un-blue text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center shadow-xl shadow-un-blue/10">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <div className="relative z-10 space-y-6">
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-un-gold">
                No Mundo
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase leading-[1.1] text-white">
                Pacto Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-gold to-white">Nações Unidas</span>
              </h2>
              
              <p className="text-white/95 text-base md:text-lg font-medium leading-relaxed">
                Lançado em 2000 pelo então secretário-geral das Nações Unidas, <span className="text-un-gold font-bold">Kofi Annan</span>, o Pacto Global é uma chamada para as empresas de todo o mundo alinharem suas operações e estratégias aos Dez Princípios universais nas áreas de Direitos Humanos, Trabalho, Meio Ambiente e Anticorrupção e desenvolverem ações que contribuam para o enfrentamento dos desafios da sociedade.
              </p>
              
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                Na visão do ex-secretário, disseminar as boas práticas empresariais não era uma retórica para convertidos, mas sim um processo em passos curtos rumo a uma mudança profunda da gestão mundial de negócios. Quem integra o Pacto Global também assume a responsabilidade de contribuir para o alcance dos 17 Objetivos de Desenvolvimento Sustentável (ODS). Em 2015, os 193 países-membros das Nações Unidas aprovaram, por consenso, a Agenda 2030. Trata-se de um plano de ação de 2015 a 2030.
              </p>

              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                O Pacto Global não é um instrumento regulatório, um código de conduta obrigatório ou um fórum para policiar as políticas e práticas gerenciais. É uma iniciativa voluntária que fornece diretrizes para a promoção do crescimento sustentável e da cidadania, por meio de lideranças corporativas comprometidas e inovadoras. A sede do Pacto Global é em Nova York.
              </p>
              
              <div className="pt-6">
                <a href="http://www.unglobalcompact.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-un-gold text-un-blue px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-white transition-colors">
                  Acessar Site Global <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Kofi Annan Photo & Stats Column */}
          <div className="lg:col-span-1 flex flex-col gap-4 md:gap-6">
            <div className="rounded-[2rem] overflow-hidden relative shadow-xl flex-1 min-h-[250px] bg-gray-900 filter saturate-150">
              <img 
                src={`${import.meta.env.BASE_URL}images/kofi-annan.jpg`} 
                alt="Kofi Annan" 
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-un-blue via-un-blue/80 to-transparent p-6 text-white text-center">
                <p className="font-display font-black text-3xl mb-1 text-un-gold drop-shadow-md">2000</p>
                <p className="text-white text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  Lançado por Kofi Annan
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-lg shadow-black/5 flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <p className="text-4xl md:text-5xl font-display font-black text-un-blue mb-1">{INSTITUTIONAL_STATS.globalParticipants}</p>
              <p className="text-[#4C6B8B] text-[10px] font-bold uppercase tracking-widest">Participantes Globais</p>
            </div>

            <div className="bg-un-gold text-un-blue rounded-[2rem] p-6 shadow-xl flex flex-col justify-center items-center text-center relative overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
               <Globe className="absolute -right-4 -bottom-4 w-24 h-24 opacity-10 group-hover:scale-110 transition-transform duration-500" />
               <p className="text-4xl md:text-5xl font-display font-black mb-1 relative z-10">{INSTITUTIONAL_STATS.localNetworks}</p>
               <p className="text-un-blue/80 text-[10px] font-bold uppercase tracking-widest relative z-10">Redes Locais em Todos <br/>os Continentes</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Section 2: Rede Brasil & Posicionamento */}
    <section className="py-12 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        
        <SectionHeader 
          barColor="bg-un-gold" 
          badge="No Brasil" 
          title="O Pacto Global" 
          titleAccent="Crescendo Juntos" 
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              O Pacto Global – Rede Brasil foi criado em 2003, e hoje é a <span className="font-bold text-un-blue">segunda maior rede local do mundo</span>, com mais de <span className="font-bold text-un-blue">{INSTITUTIONAL_STATS.brasilParticipants} participantes</span>.
            </p>
            <p>
              A Rede Brasil responde à sede do Pacto Global, em Nova York, e preside o Conselho das Redes Locais na América Latina. Os projetos conduzidos no país são desenvolvidos por meio das Plataformas de Ação (Ação pela Água, Ação pelo Agro Sustentável, Ação pelos Direitos Humanos, Ação pelo Clima, Ação contra a Corrupção, Ação pelos ODS e Ação para Comunicar e Engajar), dos Movimentos e dos Programas Internacionais. 
            </p>
            <p className="bg-un-gray p-6 rounded-2xl border border-gray-100 text-sm">
              Atualmente estão em andamento cerca de <span className="font-bold text-un-blue">{INSTITUTIONAL_STATS.brasilInitiatives} iniciativas</span>, que contam com o envolvimento de centenas de empresas, assim como agências da ONU e agências governamentais. Os projetos abrangem os temas: Água e Saneamento, Alimentos e Agricultura, Energia e Clima, Direitos Humanos e Trabalho, Anticorrupção, Engajamento e Comunicação.
            </p>
          </div>
          
          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              Há um envolvimento cada vez maior das empresas brasileiras em torno da sustentabilidade e uma maturidade crescente em relação ao tema. Há pouco tempo, muitas achavam que bastava apoiar um projeto no entorno de suas unidades para cumprir o seu papel social. Evoluímos e muito.
            </p>
            <p>
              Hoje existe um entendimento sobre os desafios da humanidade e o papel das organizações neste contexto. Diversas companhias com atuação no Brasil possuem departamentos estruturados de sustentabilidade, os quais controlam os impactos ambientais da operação e a relação dos seus produtos e serviços com a sociedade e com o planeta.
            </p>
            <div className="border-l-4 border-un-blue pl-6 py-4 italic text-gray-600 bg-un-blue/5 rounded-r-xl">
              "Há projetos maduros e consistentes, que possuem em seu DNA a perenidade e o desenvolvimento sustentável – que vão além da simples doação de recurso para solucionar uma necessidade imediata."
            </div>
          </div>
        </div>

        {/* Posicionamento Bento */}
        <h3 className="text-2xl font-display font-black text-un-blue uppercase mb-8">Nosso Posicionamento</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-un-surface border border-gray-100 p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-un-blue text-white flex items-center justify-center font-display font-black text-2xl mb-6">1</div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              O Pacto Global - Rede Brasil é uma <span className="font-bold text-un-blue">plataforma que reúne o setor empresarial</span> para atuar com impacto mensurável nos ODS, tanto na evolução dos modelos de negócios como na implementação de projetos em parceria.
            </p>
          </div>
          <div className="bg-un-surface border border-gray-100 p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-un-green text-white flex items-center justify-center font-display font-black text-2xl mb-6">2</div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Como uma iniciativa da ONU, a Rede Brasil <span className="font-bold text-un-green">acessa o conhecimento das diversas agências</span> e conta com o envolvimento do poder público, academia e sociedade civil. É a experiência da ONU em ação nos negócios.
            </p>
          </div>
          <div className="bg-un-surface border border-gray-100 p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-un-gold text-un-blue flex items-center justify-center font-display font-black text-2xl mb-6">3</div>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              <span className="font-bold text-un-blue">Alavancar o potencial da comunidade empresarial</span> como agente de transformação também é garantir a competitividade na economia mundial e a inclusão de lideranças em fóruns decisórios globais de referência.
            </p>
          </div>
        </div>

      </div>
    </section>

    {/* Section 3: Os Dez Princípios */}
    <section className="pt-20 bg-un-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl text-center mb-16 space-y-8 relative z-10">
        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
          Princípios Universais
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-black text-white uppercase leading-tight">
          Os 10 Princípios do<br/> <span className="text-un-gold">Pacto Global</span>
        </h2>
        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          O Pacto Global advoga Dez Princípios universais, derivados da Declaração Universal de Direitos Humanos, da Declaração da Organização Internacional do Trabalho sobre Princípios e Direitos Fundamentais no Trabalho, da Declaração do Rio sobre Meio Ambiente e Desenvolvimento e da Convenção das Nações Unidas Contra a Corrupção.
        </p>
        <div className="w-24 h-1 bg-un-gold mx-auto rounded-full"></div>
        <p className="text-white font-bold text-lg md:text-xl">
          As organizações que passam a fazer parte do Pacto Global comprometem-se a seguir esses princípios no dia a dia de suas operações.
        </p>
      </div>
      
      {/* Reusing the PillaresSection Component for the visual breakdown */}
      <div className="relative z-10">
         <PillaresSection />
      </div>
    </section>

    {/* CTA Final */}
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#003460] to-black/80"></div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mb-8">Faça parte da mudança</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
           <Button variant="primary" className="bg-un-gold text-un-blue hover:bg-white" icon={ArrowRight}>Quero Aderir</Button>
           <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Fale Conosco</Button>
        </div>
      </div>
    </section>
  </div>
);