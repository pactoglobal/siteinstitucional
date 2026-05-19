import React, { useState } from 'react';
import { ChevronDown, Calendar, ArrowRight, BarChart3, Target, ShieldCheck, Users, TrendingUp, FileText, BookOpen, Building2, Search, AlertTriangle, MessageCircle, FileDown, UploadCloud, Edit3, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { Button } from '../components/ui/Button';
import { Tile } from '../components/ui/Tile';

// --- COMPONENTE: PÁGINA CoP (COMMUNICATION ON PROGRESS) ---

const CoP_FAQS = [
  {
    q: "Minha empresa precisa enviar a CoP este ano?",
    a: "Todas as empresas que aderiram ao Pacto Global até o ano passado devem enviar a Comunicação de Progresso (CoP) neste ano.\n\nEmpresas que aderiram ao Pacto Global no ano corrente não precisam enviar a CoP neste ciclo e deverão realizar seu primeiro envio no ano seguinte à adesão."
  },
  {
    q: "Quando devo enviar a CoP?",
    a: "O envio da Comunicação de Progresso acontece anualmente no período universal de 1º de abril a 31 de julho.\n\nA CoP sempre reporta informações referentes ao ano anterior. Ou seja, funciona de forma semelhante ao imposto de renda: em 2026 são reportadas as ações realizadas em 2025."
  },
  {
    q: "Preciso enviar a CoP todos os anos?",
    a: "Sim.\nApós o primeiro envio, a CoP deve ser submetida anualmente, sempre dentro do período oficial (1º de abril a 31 de julho).\n\nExemplo:\n• Empresa aderiu em 2025\n• Primeiro envio da CoP: 2026\n• Depois disso: todos os anos"
  },
  {
    q: "Entrei no Pacto Global no segundo semestre do ano. Existe alguma diferença?",
    a: "Sim.\nEmpresas que aderiram no segundo semestre do ano passado podem optar por deixar as respostas da primeira CoP no modo privado.\n\nNesse caso, as respostas ficam visíveis apenas para: a própria empresa e para a equipe do Pacto Global."
  },
  {
    q: "Como faço para acessar o sistema de envio da CoP?",
    a: "A CoP é enviada por meio da área restrita do Pacto Global.\nPara acessar, é necessário que o usuário seja ponto de contato da empresa no sistema. Acesse: https://unglobalcompact.org/login\n\nCaso ainda não seja um ponto de contato, envie um e-mail para engajamento@pactoglobal.org.br informando: Nome, e-mail, cargo, telefone e nome da empresa."
  },
  {
    q: "Como devo preencher a CoP?",
    a: "A Comunicação de Progresso deve relatar as ações desenvolvidas pela empresa no ano anterior.\n\nAs informações devem abordar cinco áreas principais:\n• Direitos Humanos\n• Trabalho\n• Meio Ambiente\n• Anticorrupção\n• Governança"
  },
  {
    q: "Minha empresa precisa preencher obrigatoriamente o questionário?",
    a: "Não necessariamente.\n\nExistem duas formas de envio da CoP:\n1️⃣ Preenchendo o questionário digital da plataforma\n2️⃣ Enviando um relatório de sustentabilidade\n\nO relatório pode ser simples, desde que apresente as principais iniciativas e ações da empresa relacionadas às cinco áreas da CoP. É possível verificar um modelo de envio na aba de documentos deste site."
  },
  {
    q: "Qual a diferença entre enviar o questionário ou um relatório de sustentabilidade?",
    a: "Ao preencher o questionário digital, a empresa passa a ter acesso a uma visualização completa de dados e indicadores, permitindo realizar comparações com outras empresas participantes do Pacto Global.\n\nJá ao enviar apenas um relatório de sustentabilidade, as informações são publicadas no perfil da empresa, porém não alimentam os dashboards comparativos da plataforma.\nPor isso, recomendamos o preenchimento do questionário sempre que possível."
  },
  {
    q: "E se minha empresa não tiver todas as informações para responder o questionário?",
    a: "O questionário digital possui opções como:\n• Não aplicável\n• Desconhecido\n• Optar por não divulgar\n\nEssas opções existem porque o Pacto Global reconhece que as empresas estão em diferentes estágios de maturidade em sustentabilidade.\nPortanto, utilizar essas respostas não gera penalidade."
  },
  {
    q: "Qual período de dados devo utilizar na CoP?",
    a: "O ideal é utilizar dados referentes a um período fechado de 12 meses, dentro dos 12 meses anteriores ao envio da CoP.\n\nExemplos de períodos válidos:\n• Janeiro a dezembro de 2025\n• Julho de 2024 a junho de 2025\n• Abril de 2025 a março de 2026\n\nO importante é que a empresa mantenha consistência ao longo dos anos, permitindo comparações ao longo do tempo."
  },
  {
    q: "É possível assinar a declaração do CEO em nome dele?",
    a: "Sim.\nA pessoa responsável pelo envio da CoP pode realizar o envio em nome da empresa, incluindo a declaração de apoio contínuo assinada pelo CEO.\nNo perfil público da empresa, aparecerá o nome do CEO como signatário da declaração."
  },
  {
    q: "O que acontece se a empresa não enviar a CoP no prazo?",
    a: "Se a empresa não enviar a CoP entre 1º de abril e 31 de julho, ela passa a ser classificada como \"Não Comunicante\" no site do Pacto Global.\n\nSe a situação não for regularizada até 31 de dezembro, a empresa poderá ser excluída da iniciativa."
  },
  {
    q: "Minha empresa pode voltar ao Pacto Global após ser excluída?",
    a: "Sim.\nEmpresas excluídas por falta de comunicação podem solicitar o retorno à iniciativa, seguindo o processo de reingresso estabelecido pelo Pacto Global. Caso sua empresa se encontre nessa situação, por gentileza, entre em contato através do e-mail de engajamento oficial."
  }
];

const CopFaqItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-un-blue/10 last:border-0">
    <button 
      className="w-full flex justify-between items-center py-4 md:py-6 text-left focus:outline-none group"
      onClick={onClick}
    >
      <span className="font-bold text-sm md:text-base lg:text-lg text-un-blue group-hover:text-un-green transition-colors pr-8">
        {question}
      </span>
      <div className={cn("shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300", isOpen ? "border-un-green bg-un-green text-white rotate-180" : "border-un-blue/20 text-un-blue/50 group-hover:border-un-green group-hover:text-un-green")}>
        <ChevronDown className="w-4 h-4" />
      </div>
    </button>
    <div className={cn("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 opacity-0")}>
      <div className="text-sm md:text-base text-[#4C6B8B] leading-relaxed whitespace-pre-wrap pr-4 md:pr-12">
        {answer}
      </div>
    </div>
  </div>
);




export const CopPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Lógica da Barra de Progresso Dinâmica
  const now = new Date();
  const currentYear = now.getFullYear();
  const startDate = new Date(currentYear, 3, 1);    // 1 de Abril
  const endStage1 = new Date(currentYear, 6, 31);   // 31 de Julho
  const endStage2 = new Date(currentYear, 11, 31);  // 31 de Dezembro

  // Progresso relativo ao período total (Abril → Dezembro)
  let progressPercentage = 0;
  let statusText = "Pré-abertura";
  let statusColor = "text-white/50";
  let activeStage = 0; // 0=pré, 1=etapa1, 2=etapa2, 3=encerrado

  if (now < startDate) {
    progressPercentage = 0;
    statusText = "Pré-abertura";
    statusColor = "text-white/50";
    activeStage = 0;
  } else if (now <= endStage1) {
    const totalDuration = endStage1.getTime() - startDate.getTime();
    const elapsed = now.getTime() - startDate.getTime();
    // Etapa 1 ocupa 0%-50% da barra
    progressPercentage = Math.max(0, Math.min(50, (elapsed / totalDuration) * 50));
    statusText = "Aberto";
    statusColor = "text-un-gold";
    activeStage = 1;
  } else if (now <= endStage2) {
    const totalDuration = endStage2.getTime() - endStage1.getTime();
    const elapsed = now.getTime() - endStage1.getTime();
    // Etapa 2 ocupa 50%-100% da barra
    progressPercentage = 50 + Math.max(0, Math.min(50, (elapsed / totalDuration) * 50));
    statusText = "Prazo Estendido";
    statusColor = "text-un-gold";
    activeStage = 2;
  } else {
    progressPercentage = 100;
    statusText = "Encerrado";
    statusColor = "text-red-400";
    activeStage = 3;
  }

  return (
    <div className="animate-fade-in bg-un-surface">
      {/* Hero & Timeline */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-un-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10 text-center">
          <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-display font-black uppercase tracking-widest mb-6 rounded-sm bg-un-gold/20 text-un-gold border border-un-gold/30">Compliance & Transparência</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter mb-6">
            Comunicação de<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-green to-un-blue-3">Progresso <span className="normal-case">(CoP)</span></span>
          </h1>
          <h2 className="text-un-blue-3 font-bold text-xl md:text-2xl mb-4">
            O principal mecanismo de reporte do Pacto Global da ONU para empresas participantes.
          </h2>
          <p className="text-[#4C6B8B] max-w-3xl mx-auto text-sm md:text-base mb-12">
            A Comunicação de Progresso (CoP) é um requisito anual obrigatório para empresas participantes. Por meio dela, as organizações reportam suas ações, políticas e resultados relacionados aos Dez Princípios do Pacto Global e sua contribuição para os Objetivos de Desenvolvimento Sustentável (ODS).
          </p>

          {/* Timeline Termômetro */}
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-2xl">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-6 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-un-gold" /> 
              Período de submissão CoP {currentYear}
            </h3>

            {/* Barra de progresso com divisor de etapas */}
            <div className="relative h-4 bg-white/10 rounded-full mb-3 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-un-green/80 to-un-gold rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              >
                {progressPercentage > 0 && progressPercentage < 100 && (
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 animate-pulse"></div>
                )}
              </div>
              {/* Divisor de etapas no meio (31 Jul) */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-white/30 z-10"></div>
            </div>

            {/* Etapas Labels */}
            <div className="flex mb-8 text-[10px] md:text-xs">
              <div className={cn("flex-1 text-center px-1 py-1 rounded-l-full font-display font-black uppercase tracking-wider transition-colors", activeStage === 1 ? "text-un-gold" : "text-white/40")}>
                Etapa 1 — Prazo Padrão<br/>
                <span className="font-normal normal-case opacity-70">1 abr – 31 jul</span>
              </div>
              <div className={cn("flex-1 text-center px-1 py-1 rounded-r-full font-display font-black uppercase tracking-wider transition-colors", activeStage === 2 ? "text-un-gold" : "text-white/40")}>
                Etapa 2 — Prazo Estendido<br/>
                <span className="font-normal normal-case opacity-70">1 ago – 31 dez</span>
              </div>
            </div>

            {/* Datas de início, status e fim */}
            <div className="flex justify-between items-end text-left relative">
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs text-white/50 uppercase font-display font-black tracking-wider mb-1">Início</span>
                <span className="text-white font-bold text-sm md:text-xl">1º de Abril de {currentYear}</span>
              </div>
              <div className="flex flex-col text-center absolute left-1/2 -translate-x-1/2">
                <span className={cn("text-[10px] md:text-[11px] uppercase font-display font-black tracking-wider mb-1", statusColor)}>Status Atual</span>
                <span className={cn("text-white font-bold text-sm md:text-xl", (activeStage === 1 || activeStage === 2) ? "animate-pulse" : "")}>{statusText}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] md:text-xs text-white/50 uppercase font-display font-black tracking-wider mb-1">Prazo Final</span>
                <span className="text-white font-bold text-sm md:text-xl">31 de Dezembro de {currentYear}</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
              <Button variant="primary" icon={ArrowRight}>Acessar plataforma de submissão</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-un-blue">Conhecer a Academy CoP</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-un-blue">Ver FAQ</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proposta de Valor / Benefícios */}
      <section className="py-16 md:py-24 bg-un-blue">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-display font-black uppercase tracking-widest mb-4 rounded-sm bg-un-gold/10 text-un-gold border border-un-gold/20">Vantagens da CoP</span>
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white tracking-tight">Por que reportar a <span className="text-un-blue-3 normal-case">CoP</span>?</h2>
            <p className="text-un-blue-3 mt-4 max-w-2xl mx-auto text-sm md:text-base">A Comunicação de Progresso permite que as empresas alcancem maturidade e diferencial competitivo em sustentabilidade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <BarChart3 className="w-10 h-10 text-un-gold mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Monitoramento Constante</h3>
              <p className="text-un-blue-3 text-sm leading-relaxed">Monitore e demonstre seu progresso em sustentabilidade de forma estruturada e comparável ao longo dos anos.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Target className="w-10 h-10 text-un-green mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Identificação de Lacunas</h3>
              <p className="text-un-blue-3 text-sm leading-relaxed">Identifique lacunas e oportunidades estratégicas de melhoria na gestão e operação das métricas de sustentabilidade.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-10 h-10 text-white mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Credibilidade Institucional</h3>
              <p className="text-un-blue-3 text-sm leading-relaxed">Fortaleça sua reputação evidenciando publicamente o compromisso real com os Dez Princípios e com os ODS.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors lg:col-start-1 lg:col-end-auto md:col-span-2 lg:col-span-1">
              <Users className="w-10 h-10 text-un-gold mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Benchmarking Global</h3>
              <p className="text-un-blue-3 text-sm leading-relaxed">Compare seu desempenho diretamente com outras empresas participantes nacionais e internacionais do mesmo setor.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors md:col-span-1 lg:col-span-2">
              <TrendingUp className="w-10 h-10 text-un-green mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Insights e Dados</h3>
              <p className="text-un-blue-3 text-sm leading-relaxed">Acesse insights estratégicos por meio de nossas ferramentas exclusivas de visualização de dados da CoP, auxiliando nas tomadas de decisão corporativas a nível de conselho/diretoria.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="primary" icon={ArrowRight}>Começar a reportar agora</Button>
          </div>
        </div>
      </section>

      {/* O que é a CoP? / Estrutura da CoP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="sticky top-24">
              <span className="text-un-green font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Definição Oficial</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-un-blue leading-tight mb-6">
                O que é a Comunicação de <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-green to-un-blue">Progresso</span>?
              </h2>
              <p className="text-[#4C6B8B] text-sm md:text-base mb-6 leading-relaxed">
                A Comunicação de Progresso (CoP) é o principal mecanismo de reporte do Pacto Global das Nações Unidas. Por meio da CoP, empresas participantes comunicam seus avanços na implementação dos Dez Princípios do Pacto Global e sua contribuição para os Objetivos de Desenvolvimento Sustentável (ODS).
              </p>
              <p className="text-[#4C6B8B] text-sm md:text-base mb-6 leading-relaxed">
                O reporte reúne informações sobre políticas, práticas empresariais e resultados em áreas essenciais para a sustentabilidade corporativa, incluindo:
              </p>
              
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                {['Direitos Humanos', 'Trabalho', 'Meio Ambiente', 'Anticorrupção', 'Governança'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-un-blue font-bold text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-un-green"></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-un-surface p-5 md:p-6 rounded-xl border border-un-blue/5 border-l-4 border-l-un-gold">
                <p className="text-[#4C6B8B] text-sm italic">
                  "A CoP promove maior transparência, accountability e acompanhamento do progresso das empresas na agenda de sustentabilidade."
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="mb-4">
                <span className="text-un-gold font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Mecânica de Submissão</span>
                <h3 className="text-2xl md:text-3xl font-display font-black uppercase text-un-blue tracking-tight">Estrutura da <span className="normal-case">CoP</span></h3>
                <p className="text-[#4C6B8B] text-sm mt-3">A CoP é submetida por meio da plataforma digital do Pacto Global e possui dois componentes principais, mais uma opção complementar.</p>
              </div>

              <div className="bg-un-blue p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group shadow-xl shadow-un-blue/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white border border-white/20">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-white font-display font-black text-base md:text-xl mb-2 uppercase tracking-tight">Questionário Digital</h3>
                  <p className="text-un-blue-3 text-xs md:text-sm mb-3">Os participantes devem preencher um questionário online focado em 5 áreas temáticas. Ele coleta informações precisas sobre políticas, práticas e indicadores.</p>
                  <div className="flex flex-wrap gap-2 text-un-blue-3 text-xs">
                    <span className="bg-white/10 px-2 py-1 rounded">36 Obrigatórias</span>
                    <span className="bg-white/10 px-2 py-1 rounded">31 Opcionais</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-un-blue/10 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-start shadow-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-un-gold/10 flex items-center justify-center shrink-0 text-un-gold">
                  <FileText className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-un-blue font-display font-black text-base md:text-xl mb-2 uppercase tracking-tight">Declaração do CEO</h3>
                  <p className="text-[#4C6B8B] text-xs md:text-sm mb-3">Uma declaração anual assinada pelo principal executivo reafirmando o compromisso contínuo com os Dez Princípios do Pacto Global. A assinatura é realizada digitalmente na plataforma.</p>
                </div>
              </div>

              <div className="bg-un-surface border border-un-blue/10 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-l-transparent">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-un-green/10 flex items-center justify-center shrink-0 text-un-green">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-un-blue font-display font-black text-base md:text-xl mb-2 uppercase tracking-tight">Relatório de Sustentabilidade <span className="text-[#4C6B8B] text-xs uppercase font-bold tracking-widest">(Opcional)</span></h3>
                  <p className="text-[#4C6B8B] text-xs md:text-sm mb-3">Empresas podem submeter seu relatório gerencial como alternativa ou complemento ao questionário, apresentando políticas, resultados e avanços e desafios.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center lg:text-left lg:col-start-2">
            <Button variant="primary" icon={ArrowRight}>Acessar Plataforma CoP</Button>
          </div>
        </div>
      </section>

      {/* Quem Deve Enviar a CoP */}
      <section className="py-16 md:py-24 bg-un-surface border-t border-un-blue/10">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Quem Envia */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-un-blue/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-un-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-un-blue tracking-tight">Quem deve enviar a <span className="normal-case">CoP</span></h2>
              </div>
              
              <div className="bg-white border border-un-blue/10 p-6 md:p-8 rounded-2xl shadow-sm mb-6">
                <p className="text-[#4C6B8B] font-bold text-sm md:text-base mb-4">A obrigatoriedade de envio abrange:</p>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-un-green shrink-0 mt-1" />
                  <p className="text-[#4C6B8B] text-sm md:text-base leading-relaxed">
                    Todas as empresas participantes do Pacto Global que aderiram <strong>antes de 1º de janeiro de 2026</strong>. O preenchimento atual sempre refletirá sobre as ações realizadas durante o ano anterior inteiro (2025).
                  </p>
                </div>
              </div>
            </div>

            {/* Isenções */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white border-2 border-dashed border-un-blue/10 p-6 md:p-8 rounded-3xl h-full flex flex-col justify-center">
                <p className="text-un-gold font-bold text-xs md:text-sm uppercase tracking-widest mb-6">Organizações Isentas de Envio</p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3 text-sm md:text-base text-[#4C6B8B] leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-un-gold mt-2 shrink-0"></div>
                    <span><strong>Organizações não empresariais</strong> participantes (universidades, sindicatos, associações, ONGs), que reportam por meio da ferramenta CoE (Comunicação de Engajamento).</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-[#4C6B8B] leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-un-gold mt-2 shrink-0"></div>
                    <span><strong>Novos aderentes</strong> que ingressaram no Pacto Global em 2026. Estes reportarão apenas no ano seguinte à adesão (2027).</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-[#4C6B8B] leading-relaxed">
                    <div className="w-2 h-2 rounded-full bg-un-gold mt-2 shrink-0"></div>
                    <span><strong>Subsidiárias</strong> cuja empresa-mãe já realiza o reporte consolidado englobando todas as operações (a submissão própria torna-se opcional, não configurando rebaixamento caso não seja enviada).</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consequências do Não Envio */}
      <section className="py-16 md:py-24 bg-un-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Contexto */}
            <div className="lg:w-1/2">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-red-500" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-white tracking-tight mb-6">Consequências do <span className="text-red-400">Não Envio</span></h2>
              <p className="text-un-blue-3 text-base md:text-lg leading-relaxed mb-8 font-light">
                O descumprimento do prazo oficial do pacto reflete na integridade, transparência e status público da organização na iniciativa global.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm shadow-xl relative overflow-hidden group">
                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-1">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                  </span>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Empresas que não enviarem sua Comunicação de Progresso na data limite estipulada são publicamente alteradas e classificadas com o rótulo de status <strong className="text-red-400">“Não Comunicativas”</strong> em seu perfil oficial na base do Pacto Global.
                  </p>
                </div>
              </div>
            </div>

            {/* Risco de Remoção */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-white font-display font-black text-2xl md:text-3xl uppercase tracking-tight mb-4 flex items-center gap-3 relative z-10">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  Risco de Exclusão (Delisting)
                </h3>
                <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-8 relative z-10">
                  Caso a situação de falta de submissão atrase até passar de <strong>31 de dezembro</strong> do mesmo ano do reporte, a empresa será oficialmente submetida ao status de remoção da iniciativa.
                </p>
                <div className="bg-black/30 p-5 rounded-xl border-l-4 border-l-red-500 relative z-10 shadow-inner">
                  <p className="text-red-200 text-sm font-medium leading-relaxed">
                    A política oficial do Pacto Global determina a remoção da infração sumariante a partir de 1º de janeiro do ano seguinte, com a perda do direito de uso oficial do logotipo em materiais da empresa.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center lg:text-left">
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-un-blue" icon={ArrowRight}>Verificar Status da Empresa</Button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Seção CoE (Organizações Não-Empresariais) */}
      <section className="py-12 md:py-16 bg-white border-t border-un-blue/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-un-green/80 to-un-green rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-4xl">
              <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-display font-black uppercase tracking-widest mb-4 rounded-sm bg-white/20 text-white backdrop-blur-sm">Para Não Empresariais</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase text-white mb-6">
                Comunicação de Engajamento (CoE)
              </h2>
              <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-6">
                A Comunicação de Engajamento (CoE) é o mecanismo de reporte destinado às organizações não empresariais participantes, como: universidades, organizações da sociedade civil, associações empresariais, sindicatos e instituições públicas.
              </p>
              <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-8">
                Publicada a cada dois anos, a CoE consiste em um documento narrativo que descreve como a organização promove e apoia os Dez Princípios do Pacto Global e contribui para os Objetivos de Desenvolvimento Sustentável (ODS). Assim como a CoP, ela é publicada no perfil público da organização no site do Pacto Global.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-un-green shadow-lg shadow-black/10">Saber mais sobre a CoE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada de Reporte em 3 Passos */}
      <section className="py-20 bg-un-surface border-t border-un-blue/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-un-green font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">O Processo Digital</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-un-blue tracking-tight">Como preparar e enviar sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-green to-un-blue normal-case">CoP</span></h2>
            <p className="text-[#4C6B8B] mt-4 max-w-3xl mx-auto text-sm md:text-base">Para realizar a submissão, os participantes navegam através da plataforma digital do Pacto Global. Após a submissão, a CoP será publicada no perfil público da empresa.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative px-4">
            {/* Linha conectora oculta em mobile/tablet */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-r from-un-green/80/20 via-un-green/80/60 to-un-green/80/20 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group bg-un-surface pt-4">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-white border border-un-blue/10 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-display font-black text-un-blue/5 absolute -z-10 group-hover:text-un-blue/10 transition-colors">1</span>
                <FileDown className="w-10 h-10 text-un-green/80" />
              </div>
              <h3 className="font-display font-black text-xl text-un-blue mb-2 uppercase tracking-tight">Preparação</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Revisar o questionário CoP para compreender as informações solicitadas e organizar todo o processo interno focado na coleta de dados com as demais áreas.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group bg-un-surface pt-4 mt-8 lg:mt-0">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-un-blue flex items-center justify-center shadow-lg shadow-un-blue/20 group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-display font-black text-white/5 absolute -z-10 group-hover:text-white/10 transition-colors">2</span>
                <UploadCloud className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-black text-xl text-un-blue mb-2 uppercase tracking-tight">Painel Global</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Acessar o painel de participantes na plataforma do Pacto Global e confirmar a renovação da declaração de apoio contínuo do CEO de forma digital.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group bg-un-surface pt-4 mt-8 lg:mt-0">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-gradient-to-br from-un-gold to-[#A89030] flex items-center justify-center shadow-lg shadow-un-gold/30 group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-display font-black text-white/20 absolute -z-10 transition-colors">3</span>
                <Edit3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-black text-xl text-un-blue mb-2 uppercase tracking-tight">Submissão Oficial</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Submeter formalmente o questionário digital ou o relatório de sustentabilidade integrado dentro do período oficial estabelecido pelo Pacto Global.</p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button variant="primary" icon={ArrowRight}>Acessar Plataforma de Reporte</Button>
          </div>
        </div>
      </section>

      {/* Visualização de Dados da CoP (Novo bloco) */}
      <section className="py-16 md:py-24 bg-white border-t border-un-blue/5 text-center">
        <div className="container mx-auto max-w-5xl px-4 md:px-8 lg:px-12">
          <span className="text-un-green font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 block">Insights Globais</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-un-blue leading-tight mb-6">
            Visualização de Dados da <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-green to-un-blue normal-case">CoP</span>
          </h2>
          <p className="text-[#4C6B8B] text-sm md:text-base mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            As ferramentas de visualização de dados da CoP permitem que empresas globais e locais analisem informações agregadas de relatórios submetidos, ganhando vantagem direcional e mercadológica.
          </p>
          
          {/* Features Grid */}
          <div className="bg-un-surface border border-un-blue/5 p-8 md:p-10 rounded-[2rem] mx-auto mb-10 text-left flex flex-col items-center">
             <h4 className="text-un-blue font-display font-black uppercase tracking-tight text-xl mb-8">Essas ferramentas ajudam a compreender:</h4>
             <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
               <li className="bg-white p-6 rounded-2xl border border-un-blue/5 shadow-sm flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
                 <Globe className="w-10 h-10 text-un-gold" />
                 <span className="text-base font-black font-display uppercase tracking-tight text-un-blue">Progresso Global</span>
                 <span className="text-sm font-medium text-[#4C6B8B] leading-relaxed">Avanço das metas traçadas na implementação dos Dez Princípios</span>
               </li>
               <li className="bg-white p-6 rounded-2xl border border-un-blue/5 shadow-sm flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
                 <TrendingUp className="w-10 h-10 text-un-gold" />
                 <span className="text-base font-black font-display uppercase tracking-tight text-un-blue">Tendências</span>
                 <span className="text-sm font-medium text-[#4C6B8B] leading-relaxed">Visão transversal sobre a sustentabilidade corporativa macroeconômica</span>
               </li>
               <li className="bg-white p-6 rounded-2xl border border-un-blue/5 shadow-sm flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform">
                 <BarChart3 className="w-10 h-10 text-un-gold" />
                 <span className="text-base font-black font-display uppercase tracking-tight text-un-blue">Benchmarking</span>
                 <span className="text-sm font-medium text-[#4C6B8B] leading-relaxed">Dados e métricas comparativos interligando empresas e ciclos</span>
               </li>
             </ul>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <div className="flex flex-wrap items-center justify-center gap-3 bg-un-surface px-6 py-3 rounded-full border border-un-blue/5">
              <span className="text-un-blue font-bold text-[10px] md:text-xs uppercase mr-2 opacity-70">Ciclos:</span>
              <span className="bg-white text-un-blue px-3 py-1 rounded-full text-xs font-display font-black shadow-sm">2023</span>
              <span className="bg-white text-un-blue px-3 py-1 rounded-full text-xs font-display font-black shadow-sm">2024</span>
              <span className="bg-un-green text-white px-3 py-1 rounded-full text-xs font-display font-black shadow-md">2025</span>
            </div>
            <Button variant="primary" icon={ArrowRight}>Acessar Dashboard Completo</Button>
          </div>
        </div>
      </section>

      {/* Visualização de Dados da CoP (Dashboard Viewer) */}
      <section className="py-16 md:py-24 bg-un-surface border-t border-un-blue/5 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-50 h-32 z-0"></div>
        <div className="container mx-auto max-w-6xl px-4 md:px-8 lg:px-12 relative z-10 w-full flex justify-center">
             {(() => {
               const DASH_IMAGES = [
                 { src: `${import.meta.env.BASE_URL}cop-dashboard/dashboard-1.png`, alt: 'Dashboard CoP - Visão Geral' },
                 { src: `${import.meta.env.BASE_URL}cop-dashboard/dashboard-2.png`, alt: 'Dashboard CoP - Indicadores' },
                 { src: `${import.meta.env.BASE_URL}cop-dashboard/dashboard-3.png`, alt: 'Dashboard CoP - Comparativos' },
               ];
               const [dashSlide, setDashSlide] = React.useState(0);
               React.useEffect(() => {
                 const t = setInterval(() => setDashSlide(p => (p + 1) % DASH_IMAGES.length), 4000);
                 return () => clearInterval(t);
               }, []);
               return (
               <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-un-blue/10 border-4 border-white bg-white w-full max-w-[1200px]">
                 {/* Carousel */}
                 <div className="relative w-full overflow-hidden bg-un-surface grid">
                   {DASH_IMAGES.map((img, idx) => (
                     <img
                       key={idx}
                       src={img.src}
                       alt={img.alt}
                       className={`w-full h-auto object-contain col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${dashSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                     />
                   ))}
                   
                   {/* Gradient overlay for better dot visibility */}
                   <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-20 pointer-events-none"></div>

                   {/* Dots */}
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                     {DASH_IMAGES.map((_, idx) => (
                       <button
                         key={idx}
                         onClick={() => setDashSlide(idx)}
                         className={`w-3 h-3 rounded-full transition-all duration-300 ${dashSlide === idx ? 'bg-un-gold scale-125 shadow-md' : 'bg-white hover:bg-white/80'}`}
                         title={`Ver imagem ${idx + 1}`}
                         aria-label={`Mudar para o slide ${idx + 1}`}
                       />
                     ))}
                   </div>
                   {/* Arrows */}
                   <button onClick={() => setDashSlide(p => (p - 1 + DASH_IMAGES.length) % DASH_IMAGES.length)} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-transform hover:scale-105 z-30 group" aria-label="Imagem anterior">
                     <ChevronLeft className="w-6 h-6 text-un-blue group-hover:-translate-x-0.5 transition-transform" />
                   </button>
                   <button onClick={() => setDashSlide(p => (p + 1) % DASH_IMAGES.length)} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-transform hover:scale-105 z-30 group" aria-label="Próxima imagem">
                     <ChevronRight className="w-6 h-6 text-un-blue group-hover:translate-x-0.5 transition-transform" />
                   </button>
                 </div>
                 {/* Explorar Dashboard CTA Bar */}
                 <a href="#" className="flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 bg-white hover:bg-un-surface transition-colors group">
                   <div className="flex items-center gap-5">
                     <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-un-gold/20 flex items-center justify-center shrink-0">
                       <Target className="w-6 h-6 md:w-8 md:h-8 text-un-gold group-hover:scale-110 transition-transform" />
                     </div>
                     <div className="text-center sm:text-left">
                       <p className="text-[10px] md:text-sm text-[#4C6B8B] font-bold uppercase tracking-widest mb-1">Acesso Público Restrito</p>
                       <p className="text-xl md:text-2xl font-display font-black text-un-blue tracking-tight">Explorar Dashboard em Tela Cheia</p>
                     </div>
                   </div>
                   <div className="mt-4 sm:mt-0 w-12 h-12 rounded-full bg-un-blue/5 flex items-center justify-center group-hover:bg-un-blue transition-colors shrink-0">
                     <ArrowRight className="w-5 h-5 text-un-blue group-hover:text-white transition-colors" />
                   </div>
                 </a>
               </div>
               );
             })()}
        </div>
      </section>

      {/* Grid de Ferramentas / Toolbox */}
      <section className="py-16 md:py-24 bg-un-surface border-t border-un-blue/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="mb-12">
            <span className="text-un-green font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Toolbox</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black uppercase text-un-blue leading-tight mb-4">
              Materiais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-green to-un-blue">Apoio</span>
            </h2>
            <p className="text-[#4C6B8B] max-w-xl text-sm md:text-base">Tudo o que você precisa para alinhar sua equipe, coletar dados offline e efetuar o disparo do questionário perfeitamente.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
            <Tile 
              size="large" 
              category="Documento Oficial" 
              title="Manual CoP PDF" 
              subtitle="Guia completo e passo a passo atualizado para nortear seu relatório na plataforma digital." 
              image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop" 
              color="bg-un-blue" 
            />
            <Tile 
              size="wide" 
              category="Vídeo" 
              title="Demonstração da Plataforma" 
              subtitle="Veja o tutorial em vídeo da navegação no sistema global da ONU." 
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
              color="bg-un-gold" 
            />
            <Tile 
              size="small" 
              category="Modelo" 
              title="Declaração do CEO" 
              image="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2070&auto=format&fit=crop" 
              color="bg-[#6E417A]" 
            />
            <Tile 
              size="small" 
              category="Offline" 
              title="Questionário Interativo" 
              image="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2070&auto=format&fit=crop" 
              color="bg-un-green" 
            />
            <Tile 
              size="small" 
              category="Regras" 
              title="Política CoP 2025" 
              image="https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=2070&auto=format&fit=crop" 
              color="bg-[#EC3740]" 
            />
            <Tile 
              size="small" 
              category="Dicas" 
              title="Casos de Sucesso" 
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              color="bg-un-blue" 
            />
          </div>
          <div className="mt-12 text-center">
            <Button variant="primary" icon={ArrowRight}>Ver todos os Materiais de Apoio</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white border-t border-un-blue/10">
        <div className="container mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-display font-black uppercase tracking-widest mb-4 rounded-sm bg-un-blue/10 text-un-blue">FAQ Oficial</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-black uppercase text-un-blue mb-4">Dúvidas Frequentes</h2>
            <p className="text-[#4C6B8B] text-sm md:text-base">As questões mais comuns respondidas pela nossa equipe de engajamento.</p>
          </div>

          <div className="bg-white rounded-2xl border border-un-blue/10 p-4 md:p-8 shadow-xl shadow-un-blue/5">
            {CoP_FAQS.map((faq, index) => (
              <CopFaqItem 
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" className="text-un-blue border-un-blue hover:bg-un-blue hover:text-white border-2 border-solid">Ver FAQ Completo</Button>
          </div>
        </div>
      </section>

      {/* Helpdesk & CTA Suporte */}
      <section className="py-16 md:py-24 bg-un-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto max-w-4xl px-4 md:px-8 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto bg-un-green/20 rounded-full flex items-center justify-center text-un-green mb-6 shadow-lg shadow-un-green/10">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-white mb-6 tracking-tight">Ainda Precisa de Ajuda?</h2>
          <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Nossa equipe de engajamento está à disposição para auxiliar sua empresa durante o Período Universal. Se você enfrentou algum erro técnico na plataforma global ou tem dúvidas na documentação, fale com nossos especialistas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" icon={ArrowRight}>Abrir Chamado</Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-un-blue">engajamento@pactoglobal.org.br</Button>
          </div>
        </div>
      </section>
    </div>
  );
};