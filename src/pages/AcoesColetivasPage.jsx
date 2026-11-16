import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award,
  Globe,
  Mail,
  Calendar,
  ExternalLink,
  BookOpen,
  FileText,
  Building,
  Zap,
  Truck,
  Sprout,
  Users2,
  CheckCircle2,
  Video,
  Layers,
} from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useReveal } from '../hooks/useReveal';

// Staged reveal no scroll
const Reveal = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const AcoesColetivasPage = ({ navigate }) => {
  const brandColor = '#6E417A';

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* ============ HERO EDITORIAL: AÇÕES COLETIVAS ============ */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden text-white"
        style={{ backgroundColor: brandColor }}
      >
        {/* Imagem de fundo e gradientes sutis */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover scale-105 opacity-25"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(110deg, ${brandColor} 0%, ${brandColor}f2 48%, #4A1D57 100%)`,
            }}
          />
        </div>

        {/* Glow de acento */}
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%)',
          }}
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* Navegação de retorno & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={() => navigate('plataforma', 'acao-contra-a-corrupcao')}
              className="group inline-flex items-center gap-2.5 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Voltar para Plataforma Ação Contra a Corrupção</span>
            </button>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[11px] font-bold uppercase tracking-[0.2em] border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-un-gold" />
              Contrapartida Siemens Integrity Initiative
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white text-[11px] font-bold uppercase tracking-[0.22em] border border-white/25">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Hub Internacional de Ações Coletivas
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-black/20 backdrop-blur-md rounded-full text-white/90 text-[11px] font-bold uppercase tracking-[0.22em] border border-white/10">
              Basel Institute on Governance
            </span>
          </div>

          <h1 className="font-display font-black uppercase tracking-tight text-white leading-[0.92] text-4xl md:text-7xl lg:text-8xl mb-8 max-w-5xl">
            Ações Coletivas <span className="text-un-gold">Anticorrupção</span>
          </h1>

          <p className="text-white/95 text-lg md:text-2xl font-light leading-relaxed max-w-4xl mb-12">
            Ao longo dos anos, foram lançadas cinco Ações Coletivas pela Rede Brasil do Pacto Global.
            Elas estão listadas no maior hub de ações coletivas do mundo do{' '}
            <strong className="font-semibold text-white">Basel Institute on Governance</strong>,
            além de terem sido citadas como exemplo de boas práticas em sua publicação sobre ações
            coletivas em 2020.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-10 border-t border-white/20 max-w-5xl">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <span className="block font-display font-black text-3xl md:text-4xl text-white">5</span>
              <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                Ações Coletivas Lançadas
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <span className="block font-display font-black text-3xl md:text-4xl text-emerald-300">2</span>
              <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                Frentes Ativas (Mobilidade & Agro)
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <span className="block font-display font-black text-3xl md:text-4xl text-un-gold">2024</span>
              <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                Prêmio Basel Institute (Agro)
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
              <span className="block font-display font-black text-3xl md:text-4xl text-white">Siemens</span>
              <span className="text-xs uppercase font-bold tracking-wider text-white/80">
                Integrity Initiative Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FRENTES ATIVAS ============ */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            badge="Frentes em Andamento"
            title="Ações Coletivas"
            titleAccent="Ativas"
            description="Iniciativas setoriais multissetoriais em operação no Brasil para nivelar regras éticas e prevenir riscos de corrupção."
          />

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* CARD 1: SETOR DE MOBILIDADE */}
            <Reveal>
              <div className="relative rounded-[2.5rem] bg-white border border-slate-200/90 shadow-2xl p-8 md:p-14 overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-3"
                  style={{ backgroundColor: brandColor }}
                />

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700">
                      <Truck className="w-6 h-6" />
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-700">
                        Nova Ação Coletiva · Kick off 2026
                      </span>
                      <h2 className="text-2xl md:text-4xl font-display font-black uppercase text-slate-900 leading-tight">
                        Ação Coletiva Anticorrupção do Setor de Mobilidade
                      </h2>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Em Implantação
                  </span>
                </div>

                <div className="prose prose-slate max-w-none text-slate-600 text-base md:text-lg leading-relaxed font-light space-y-4 mb-8">
                  <p>
                    A mobilidade é infraestrutura essencial ao desenvolvimento do país. Seus
                    contratos são de grande escala, longa duração e elevada complexidade técnica —
                    características que exigem mecanismos de integridade proporcionalmente robustos,
                    tanto nas empresas quanto nas instâncias de contratação e fiscalização.
                    Fortalecer esses mecanismos é condição para a previsibilidade regulatória, para
                    a concorrência leal e para o investimento de longo prazo no setor.
                  </p>
                  <p>
                    A <strong>Ação Coletiva Anticorrupção no Setor de Mobilidade</strong> reúne
                    empresas de transporte rodoviário de cargas, concessionárias ferroviárias e
                    operadoras de metrô e trem metropolitano, ao lado de associações setoriais e
                    parceiros do poder público.
                  </p>
                </div>

                {/* Três Compromissos */}
                <div className="mb-10">
                  <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 mb-4">
                    Três Compromissos Fundamentais do Setor:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                      <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-display font-black text-sm flex items-center justify-center mb-3">
                        01
                      </span>
                      <h4 className="font-bold text-slate-900 text-base mb-2">Mudança Cultural</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                        Promover padrões éticos rigorosos e mudança cultural substantiva em toda a
                        operação logística e de passageiros.
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                      <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-display font-black text-sm flex items-center justify-center mb-3">
                        02
                      </span>
                      <h4 className="font-bold text-slate-900 text-base mb-2">Mitigação de Riscos</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                        Prevenir e reduzir riscos de corrupção nas operações diárias, contratações
                        públicas e cadeias de valor.
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                      <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 font-display font-black text-sm flex items-center justify-center mb-3">
                        03
                      </span>
                      <h4 className="font-bold text-slate-900 text-base mb-2">Incentivos de Mercado</h4>
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light">
                        Consolidar compromissos coletivos de integridade que criem incentivos
                        concretos e valor reputacional no mercado.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Box de Apoio Siemens */}
                <div className="p-6 rounded-2xl bg-purple-50/70 border border-purple-200/80 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <ShieldCheck className="w-6 h-6 text-purple-700 shrink-0" />
                    <p className="text-xs md:text-sm text-purple-950 font-medium">
                      A iniciativa é coordenada pela{' '}
                      <strong>Rede Brasil do Pacto Global das Nações Unidas</strong>, com apoio da{' '}
                      <strong>Siemens Integrity Initiative</strong>.
                    </p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 px-3 py-1 bg-white rounded-full border border-purple-200 whitespace-nowrap">
                    Kick off previsto: Setembro/2026
                  </span>
                </div>

                {/* Box Evento Oficial em Destaque */}
                <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-purple-950 text-white shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-un-gold" />
                      <span className="text-[11px] font-bold uppercase tracking-widest text-un-gold">
                        Evento de Lançamento Oficial
                      </span>
                    </div>
                    <h4 className="font-display font-black text-xl md:text-2xl text-white">
                      Workshop de Lançamento: Ação Coletiva de Mobilidade (online)
                    </h4>
                    <p className="text-slate-300 text-xs md:text-sm font-light">
                      03 de setembro | 10h00 às 11h30 – Aberto a todo o público interessado no setor.
                    </p>
                  </div>
                  <a
                    href="https://events.teams.microsoft.com/event/366663ca-df37-4830-9e1b-882b905d316e@d7befe04-75f0-4bb1-935c-015360077546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-un-gold hover:bg-yellow-400 text-slate-900 font-display font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all shrink-0 hover:scale-105"
                  >
                    <span>Inscreva-se no Workshop</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Chamada para manifestação de interesse */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs md:text-sm text-slate-600 font-light">
                    <strong>Quer participar?</strong> Empresas, associações e organizações do setor
                    podem manifestar interesse formal pelo e-mail:
                  </div>
                  <a
                    href="mailto:acoescoletivas@pactoglobal.org.br?subject=Interesse%20na%20A%C3%A7%C3%A3o%20Coletiva%20de%20Mobilidade"
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-purple-700 hover:text-purple-900 hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    acoescoletivas@pactoglobal.org.br
                  </a>
                </div>
              </div>
            </Reveal>

            {/* CARD 2: AGROINDÚSTRIA */}
            <Reveal delay={100}>
              <div className="relative rounded-[2.5rem] bg-white border border-slate-200/90 shadow-2xl p-8 md:p-14 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-3 bg-emerald-600" />

                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <Sprout className="w-6 h-6" />
                    </span>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                        Iniciativa Consolidada · Premiada Internacionalmente
                      </span>
                      <h2 className="text-2xl md:text-4xl font-display font-black uppercase text-slate-900 leading-tight">
                        Ação Coletiva Anticorrupção da Agroindústria
                      </h2>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-50 text-amber-800 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5 text-amber-600" />
                    Award 2024 · Basel Institute
                  </span>
                </div>

                <div className="prose prose-slate max-w-none text-slate-600 text-base md:text-lg leading-relaxed font-light space-y-4 mb-8">
                  <p>
                    Baseada em princípios e valores fundamentais da conduta ética e transparente, a
                    ação coletiva da Agroindústria é uma iniciativa pelo comprometimento com as
                    melhores práticas de prevenção e combate à corrupção no setor.
                  </p>
                  <p>
                    Responsáveis por uma parcela significativa das exportações e do Produto Interno
                    Bruto nacional, as empresas da Agroindústria reconhecem a importância do
                    protagonismo na prevenção e combate à corrupção no Brasil e da responsabilidade
                    em exercer influência positiva para as demais empresas e setores.
                  </p>
                  <p>
                    Com esse objetivo, o{' '}
                    <strong>Guia de Boas Práticas Anticorrupção da Agroindústria</strong> consolida
                    os princípios éticos fundamentais, estimula as relações transparentes com o poder
                    público e incentiva o caminhar do setor por ambientes de negócio cada vez mais
                    íntegros.
                  </p>
                </div>

                {/* Selo Premiação Basel Institute */}
                <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/90 mb-8 flex items-start md:items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm md:text-base">
                      Anti-Corruption Collective Action Awards 2024
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 font-light">
                      Reconhecimento internacional conferido pelo{' '}
                      <strong>Basel Institute on Governance</strong> ao pioneirismo e impacto da Ação
                      Coletiva da Agroindústria brasileira.
                    </p>
                  </div>
                </div>

                {/* Vídeo Institucional da AC de Agro */}
                <div className="mb-8 rounded-3xl bg-slate-900 text-white p-8 md:p-10 border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Video className="w-5 h-5 text-emerald-400" />
                      <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                        Vídeo Institucional
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                      Pacto Global · Rede Brasil
                    </span>
                  </div>
                  <h4 className="font-display font-black text-xl md:text-2xl mb-2">
                    Ação Coletiva da Agroindústria em Ação
                  </h4>
                  <p className="text-slate-300 text-xs md:text-sm font-light mb-6 max-w-2xl">
                    Assista à apresentação dos princípios, das lideranças signatárias e dos
                    mecanismos de integridade implementados no agronegócio nacional.
                  </p>

                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/60 border border-slate-700/80 flex items-center justify-center group">
                    <img
                      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop"
                      alt="Capa do Vídeo Institucional AC Agroindústria"
                      className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                    />
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <Video className="w-8 h-8 ml-0.5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/20">
                        Vídeo Institucional da AC de Agro
                      </span>
                    </div>
                  </div>
                </div>

                {/* Acesso ao Guia */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-emerald-700" />
                    <span className="text-xs md:text-sm font-medium text-slate-700">
                      Guia de Boas Práticas Anticorrupção da Agroindústria disponível para consulta
                    </span>
                  </div>
                  <button
                    onClick={() => navigate('materiaisAnticorrupcao')}
                    className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-emerald-700 hover:text-emerald-900 hover:underline cursor-pointer"
                  >
                    <span>Ver no Catálogo de Materiais</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ AÇÕES COLETIVAS JÁ ENCERRADAS ============ */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            badge="Legado e Conquistas"
            title="Ações Coletivas"
            titleAccent="Já Encerradas"
            description="Projetos pioneiros que estabeleceram novos parâmetros e cartilhas de conformidade setorial no país."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* MISEC */}
            <Reveal delay={60}>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between hover:shadow-xl hover:bg-white transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-200/80 flex items-center justify-center text-slate-700">
                      <Building className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-slate-200/60 rounded-full text-slate-600">
                      Encerrada · 13 Empresas
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-900 mb-3 leading-snug">
                    Movimento pela Integridade do Setor de Engenharia e Construção (MISEC)
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light mb-6">
                    Voltada para o setor de Engenharia e Construção, essa ação coletiva reuniu 13
                    empresas e 2 associações não empresariais. Foi desenvolvida a{' '}
                    <strong>Cartilha Integridade no Setor da Construção</strong>, resultado de série
                    de reuniões com as 4 maiores empresas do setor, inspirada na ferramenta do Pacto
                    Global <em>“RESIST – Resist, Extortion and Solicitation in International Transactions”</em>.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Cartilha MISEC / RESIST</span>
                  <span className="font-bold text-purple-700">Rede Brasil</span>
                </div>
              </div>
            </Reveal>

            {/* ENERGIA ELÉTRICA */}
            <Reveal delay={120}>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between hover:shadow-xl hover:bg-white transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100/80 flex items-center justify-center text-amber-800">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-amber-100/60 rounded-full text-amber-800">
                      Ativa 2023–2026 · Concluída
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-900 mb-3 leading-snug">
                    Ação Coletiva de Integridade do Setor de Energia Elétrica
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light space-y-2 mb-6">
                    Criada com o propósito de promover uma cultura de integridade e garantir o
                    cumprimento das normas e legislações aplicáveis. Desenvolveu a{' '}
                    <strong>Cartilha ESG Boas Práticas com a Administração Pública</strong> (dividida
                    em Transparência e Ética, Relações Públicas, Contratações Públicas).
                    <br />
                    Em colaboração com o GT Elétrico Energético do Pacto Global, desenvolveu também o{' '}
                    <strong>Caderno sobre Integração da Devida Diligência em Direitos Humanos e Ações Anticorrupção</strong>.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Cartilha ESG & GT Energia</span>
                  <span className="font-bold text-amber-700">Rede Brasil</span>
                </div>
              </div>
            </Reveal>

            {/* LIMPEZA URBANA */}
            <Reveal delay={180}>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex flex-col justify-between hover:shadow-xl hover:bg-white transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100/80 flex items-center justify-center text-emerald-800">
                      <Layers className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-emerald-100/60 rounded-full text-emerald-800">
                      Pacto Setorial & Riscos
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-900 mb-3 leading-snug">
                    Integridade no Setor de Limpeza Urbana, Resíduos Sólidos e Efluentes
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light mb-6">
                    Mobilizou o setor para consolidação de um ambiente ético e livre de corrupção,
                    estimulando a concorrência leal. Foi desenvolvida uma{' '}
                    <strong>cartilha sobre cenários de corrupção e como enfrentá-los</strong>, além do{' '}
                    <strong>mapa de riscos de corrupção do setor</strong> e o{' '}
                    <strong>Pacto Setorial de Integridade</strong> lançado com Manual de Governança.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Pacto Setorial 2019</span>
                  <span className="font-bold text-emerald-700">Rede Brasil</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CONTATO & CONTRAPARTIDA SIEMENS ============ */}
      <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-[0.25em] border border-white/20">
              Canal Oficial de Atendimento
            </span>

            <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight text-white leading-tight">
              Deseja engajar sua organização nas{' '}
              <span className="text-un-gold">Ações Coletivas</span>?
            </h2>

            <p className="text-slate-300 text-base md:text-xl font-light leading-relaxed">
              Para informações sobre o projeto, adesão a grupos setoriais e esclarecimento de
              dúvidas sobre a metodologia de ações coletivas anticorrupção, contate a equipe técnica
              dedicada:
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl">
              <a
                href="mailto:acoescoletivas@pactoglobal.org.br"
                className="flex items-center gap-3 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-display font-black text-sm uppercase tracking-wider transition-all shadow-md"
              >
                <Mail className="w-4 h-4 text-purple-700" />
                <span>acoescoletivas@pactoglobal.org.br</span>
              </a>
              <button
                onClick={() => navigate('materiaisAnticorrupcao')}
                className="flex items-center gap-2 px-6 py-3 text-white/90 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Acessar Materiais Úteis</span>
              </button>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Siemens Integrity Initiative Project</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-un-blue-2" />
                <span>Metodologia Global United Nations Global Compact</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-un-gold" />
                <span>Basel Institute on Governance Hub</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
