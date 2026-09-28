import React, { useState, useMemo, useEffect } from 'react';
import { 
  Shield, 
  FileText, 
  FileCheck, 
  Users, 
  Building2, 
  Scale, 
  PhoneCall, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Download, 
  Globe, 
  Award, 
  CheckCircle2, 
  BarChart3, 
  Lock, 
  ArrowRight,
  Info,
  Maximize2,
  X,
  ChevronsUpDown,
  UserCheck,
  Compass
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import {
  MANDATO_INFO,
  ESTATISTICAS_GOVERNANCA,
  PILARES_GOVERNANCA,
  CONSELHO_ADMINISTRACAO,
  CONSELHO_FISCAL,
  DIRETORIA_EXECUTIVA,
  ORGANOGRAMA_INFO,
  CORB_EMPRESAS,
  CLUSTERS_DOCUMENTOS,
  DOCUMENTOS_GOVERNANCA,
  CANAL_DENUNCIAS,
  FAQ_GOVERNANCA,
  APOIADORES_GOVERNANCA
} from '../data/governanca';

// Bento Card Reutilizável com renderização imediata e robusta
const BentoCard = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

export const GovernancaPage = ({ navigate }) => {
  // Estado das instâncias colegiadas
  const [activeTab, setActiveTab] = useState('conselho'); // 'conselho', 'fiscal', 'diretoria', 'corb'

  // Estado para busca no CORB
  const [corbSearch, setCorbSearch] = useState('');

  // Estado dos documentos (filtros de ano e busca)
  const [selectedYear, setSelectedYear] = useState('Todos');
  const [docSearch, setDocSearch] = useState('');
  const [openClusters, setOpenClusters] = useState({
    constitutivos: true,
    financeiro: true,
    estrategia: true,
    compliance: true,
    dados: true,
    marca: true
  });

  // Estado do FAQ (qual pergunta está aberta)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Modal para visualização ampliada do organograma
  const [organogramaModalOpen, setOrganogramaModalOpen] = useState(false);

  // Menu de navegação rápida flutuante
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [floatingNavOpen, setFloatingNavOpen] = useState(false);

  // Listener para rolagem da página (exibe botão de voltar ao topo e navegação flutuante)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
        setFloatingNavOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trava scroll da tela quando o modal estiver aberto e ouve tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && organogramaModalOpen) {
        setOrganogramaModalOpen(false);
      }
    };
    if (organogramaModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [organogramaModalOpen]);

  // Função canônica para rolagem suave in-page sem alterar o hash da URL (evita recarregamento de rota)
  const scrollToSection = (sectionId) => {
    setFloatingNavOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Anos disponíveis para filtro ordenados decrescentemente
  const anosDisponiveis = useMemo(() => {
    const anosSet = new Set(DOCUMENTOS_GOVERNANCA.map(d => d.ano));
    return ['Todos', ...Array.from(anosSet).sort((a, b) => Number(b) - Number(a))];
  }, []);

  // Filtragem dos documentos com busca resiliente
  const documentosFiltrados = useMemo(() => {
    return DOCUMENTOS_GOVERNANCA.filter(doc => {
      const matchAno = selectedYear === 'Todos' || doc.ano === selectedYear;
      const matchBusca = docSearch.trim() === '' || 
        doc.titulo.toLowerCase().includes(docSearch.toLowerCase()) ||
        doc.subtitulo.toLowerCase().includes(docSearch.toLowerCase());
      return matchAno && matchBusca;
    });
  }, [selectedYear, docSearch]);

  // Agrupamento dos documentos filtrados por cluster
  const clustersComDocumentos = useMemo(() => {
    return CLUSTERS_DOCUMENTOS.map(cluster => {
      const docs = documentosFiltrados.filter(d => d.clusterId === cluster.id);
      return {
        ...cluster,
        documentos: docs
      };
    });
  }, [documentosFiltrados]);

  // Verifica se todos os clusters estão abertos
  const areAllClustersOpen = useMemo(() => {
    return CLUSTERS_DOCUMENTOS.every(c => openClusters[c.id]);
  }, [openClusters]);

  // Alterna todos os clusters
  const toggleAllClusters = () => {
    const nextState = !areAllClustersOpen;
    const updated = {};
    CLUSTERS_DOCUMENTOS.forEach(c => {
      updated[c.id] = nextState;
    });
    setOpenClusters(updated);
  };

  // Empresas do CORB filtradas
  const corbFiltrado = useMemo(() => {
    if (!corbSearch.trim()) return CORB_EMPRESAS;
    return CORB_EMPRESAS.filter(empresa => 
      empresa.nome.toLowerCase().includes(corbSearch.toLowerCase())
    );
  }, [corbSearch]);

  const toggleCluster = (clusterId) => {
    setOpenClusters(prev => ({
      ...prev,
      [clusterId]: !prev[clusterId]
    }));
  };

  const toggleFaq = (idx) => {
    setOpenFaqIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="animate-fade-in bg-un-surface min-h-screen pb-0 relative">
      
      {/* 1. HERO EDITORIAL */}
      <PageHero 
        category="Iniciativa Especial ONU • Mandato Oficial"
        title="Governança & Integridade"
        description="A arquitetura institucional e os órgãos de controle que asseguram a integridade, a transparência e a legitimidade das ações do Pacto Global da ONU no Brasil."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      />

      {/* GUIA RÁPIDO EDITORIAL (ENXUTO, NÃO-INTRUSIVO E 100% IN-PAGE) */}
      <section className="bg-white border-b border-slate-200/80 py-4 shadow-2xs">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-un-gold"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                Acesso Rápido às Seções
              </span>
            </div>
            
            {/* 5 Macro-Pílulas de Navegação Direta */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch py-1">
              <button 
                type="button" 
                onClick={() => scrollToSection('mandato')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <Scale className="w-3.5 h-3.5 text-un-gold" /> Mandato ONU
              </button>
              
              <button 
                type="button" 
                onClick={() => scrollToSection('instancias')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <Users className="w-3.5 h-3.5 text-un-gold" /> Órgãos Colegiados
              </button>

              <button 
                type="button" 
                onClick={() => scrollToSection('organograma')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <BarChart3 className="w-3.5 h-3.5 text-un-gold" /> Organograma
              </button>
              
              <button 
                type="button" 
                onClick={() => scrollToSection('documentos')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <FileText className="w-3.5 h-3.5 text-un-gold" /> Documentos Oficiais
              </button>
              
              <button 
                type="button" 
                onClick={() => scrollToSection('denuncias')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-black text-emerald-950 bg-emerald-100 hover:bg-emerald-600 hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-emerald-200"
              >
                <PhoneCall className="w-3.5 h-3.5" /> Canal 0800
              </button>
              
              <button 
                type="button" 
                onClick={() => scrollToSection('faq')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <Info className="w-3.5 h-3.5 text-un-gold" /> FAQ
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MANDATO ONU & ASSOCIAÇÃO BRASILEIRA (BENTO GRID 7:5) */}
      <section id="mandato" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Estrutura e Vínculo Institucional"
            title="O Mandato da Rede Brasil"
            titleAccent="Conexão Global & Ação Local"
            description="Como a maior iniciativa de sustentabilidade empresarial do planeta opera legalmente e institucionalmente em território brasileiro."
            className="mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Bento Card 7: Contexto Institucional */}
            <BentoCard className="lg:col-span-7 bg-un-blue text-white rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-un-blue/10">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-un-gold border border-white/15">
                    Personalidade Jurídica
                  </span>
                  <span className="text-slate-300 text-xs font-mono">
                    Desde {MANDATO_INFO.anoCriacao}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-4xl font-display font-black uppercase text-white leading-snug">
                  Associação Privada sem Fins Lucrativos com <span className="block mt-1 text-un-gold">Mandato Exclusivo da ONU</span>
                </h3>

                <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                  {MANDATO_INFO.declaracao}
                </p>

                <div className="pt-4 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-un-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">Memorando com NY</h4>
                      <p className="text-xs text-slate-200 font-light mt-0.5">Alinhamento direto com a sede do UN Global Compact em Nova York.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-un-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">Governança Autônoma</h4>
                      <p className="text-xs text-slate-200 font-light mt-0.5">Conselho eleito e fiscalização independente sob a legislação brasileira.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-white/15 flex items-center justify-between flex-wrap gap-4">
                <span className="text-xs text-slate-300 font-mono">Sede Operacional: {MANDATO_INFO.sede}</span>
                <button 
                  type="button"
                  onClick={() => scrollToSection('documentos')}
                  className="min-h-[44px] px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-un-gold hover:text-white transition-all cursor-pointer border border-white/10"
                >
                  Ver Estatuto Social <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </BentoCard>

            {/* Bento Card 5: Hierarquia de Mandato (Inspirado no Schema da Rede França) */}
            <BentoCard className="lg:col-span-5 bg-white border border-slate-200/90 rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <span className="inline-block px-3 py-1 bg-un-blue/5 rounded-full text-un-blue text-[10px] font-bold uppercase tracking-widest mb-6 border border-un-blue/10">
                  Cadeia de Prestação de Contas
                </span>

                <h3 className="text-xl md:text-2xl font-display font-black uppercase text-slate-900 mb-6">
                  Hierarquia Institucional
                </h3>

                <div className="space-y-4 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                  
                  <div className="relative flex items-start gap-4 pl-8">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-un-blue ring-4 ring-white"></div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">Nível Global</span>
                      <h4 className="text-sm font-bold text-slate-900">Assembleia Geral das Nações Unidas</h4>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">Definição dos mandatos dos ODS e cooperação internacional.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4 pl-8">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-un-gold ring-4 ring-white"></div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">Sede Nova York</span>
                      <h4 className="text-sm font-bold text-slate-900">UN Global Compact Headquarters</h4>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">Guardião dos Dez Princípios e supervisão das redes mundiais.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4 pl-8">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-emerald-600 ring-4 ring-white"></div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">Território Nacional</span>
                      <h4 className="text-sm font-bold text-slate-900">Pacto Global - Rede Brasil</h4>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">Associação sem fins lucrativos, regida por Conselho eleito e Diretoria.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4 pl-8">
                    <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-slate-500 ring-4 ring-white"></div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">Ecossistema</span>
                      <h4 className="text-sm font-bold text-slate-900">+2.000 Organizações Signatárias</h4>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">Corporações, PMEs e sociedade civil implementando a Agenda 2030.</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Estatísticas Rápidas com Alto Contraste */}
              <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100">
                {ESTATISTICAS_GOVERNANCA.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-center">
                    <div className="text-xl sm:text-2xl font-display font-black text-un-blue">{item.valor}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-700 tracking-wider leading-tight mt-0.5">{item.rotulo}</div>
                  </div>
                ))}
              </div>
            </BentoCard>

          </div>
        </div>
      </section>

      {/* 3. CARD EDITORIAL DA PRESIDÊNCIA DO CONSELHO (ESTILO EDITORIAL REDE FRANÇA) */}
      <section id="lideranca" className="py-12 md:py-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <div className="bg-gradient-to-br from-slate-900 via-un-blue to-slate-900 rounded-[2.5rem] p-6 sm:p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-un-gold/10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Citação Editorial e Perfis da Presidência com Fotos */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3.5 py-1 bg-un-gold/20 text-un-gold text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-un-gold/30">
                    Mensagem da Liderança
                  </span>
                  <span className="text-slate-300 text-xs uppercase tracking-widest font-mono">Mandato 2025–2027</span>
                </div>

                <blockquote className="text-lg sm:text-2xl md:text-3xl font-display font-bold leading-relaxed text-white">
                  “A governança da Rede Brasil é o alicerce que confere legitimidade ao setor empresarial brasileiro perante a comunidade internacional. Operamos com transparência radical e rigor ético para transformar compromissos formais em impacto auditável e sustentável.”
                </blockquote>

                {/* Perfis das Lideranças da Presidência com Fotos e Logos Corporativos */}
                <div className="pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Presidente: Ana Paula Carracedo */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-un-gold/50 shadow-md bg-un-blue relative">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop" 
                        alt="Ana Paula Carracedo" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-un-gold block">
                        Presidente do Conselho
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight">Ana Paula Carracedo</h4>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/15 text-slate-100">
                        AEGEA Saneamento
                      </span>
                    </div>
                  </div>

                  {/* Vice-Presidente: Luciana Nicola */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 border-2 border-un-gold/50 shadow-md bg-un-blue relative">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop" 
                        alt="Luciana Nicola" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-un-gold block">
                        Vice-Presidente do Conselho
                      </span>
                      <h4 className="text-sm font-bold text-white leading-tight">Luciana Nicola</h4>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/15 text-slate-100">
                        Itaú Unibanco
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card de Reconhecimento Pro Bono e Compliance */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-un-gold/20 flex items-center justify-center text-un-gold border border-un-gold/30 shadow-inner">
                  <Award className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold uppercase tracking-wider text-white">
                  Mandatos Transparentes & Auditados
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed font-light">
                  Os membros do Conselho atuam <strong className="text-white font-semibold">pro bono</strong> nos termos do Estatuto Social, sem remuneração e submetidos à Política de Conflito de Interesses.
                </p>
                <div className="pt-2">
                  <button 
                    type="button"
                    onClick={() => scrollToSection('instancias')}
                    className="min-h-[44px] px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all border border-white/20 w-full sm:w-auto cursor-pointer"
                  >
                    Ver Órgãos Colegiados <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 4. INSTÂNCIAS DE GOVERNANÇA EM BENTO TABS COM FOTOS PARA CADA MEMBRO */}
      <section id="instancias" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Órgãos Colegiados & Liderança"
            title="Instâncias de Decisão"
            titleAccent="Equilíbrio & Representatividade"
            description="Conheça a composição dos colegiados responsáveis pelas deliberações estratégicas, fiscalização orçamentária e operação técnica da Rede Brasil."
            className="mb-8"
          />

          {/* Seletor de Abas com Rolagem Touch Suave */}
          <div className="flex overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch pb-3 mb-8 gap-2 sm:gap-3 border-b border-slate-200">
            <button
              type="button"
              onClick={() => setActiveTab('conselho')}
              className={cn(
                "min-h-[44px] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center justify-center shrink-0 focus:outline-none",
                activeTab === 'conselho' 
                  ? "bg-un-blue text-white shadow-md shadow-un-blue/20" 
                  : "bg-white text-slate-700 border border-slate-200 hover:border-un-blue"
              )}
            >
              Conselho de Administração (11)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('fiscal')}
              className={cn(
                "min-h-[44px] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center justify-center shrink-0 focus:outline-none",
                activeTab === 'fiscal' 
                  ? "bg-un-blue text-white shadow-md shadow-un-blue/20" 
                  : "bg-white text-slate-700 border border-slate-200 hover:border-un-blue"
              )}
            >
              Conselho Fiscal (4)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('diretoria')}
              className={cn(
                "min-h-[44px] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center justify-center shrink-0 focus:outline-none",
                activeTab === 'diretoria' 
                  ? "bg-un-blue text-white shadow-md shadow-un-blue/20" 
                  : "bg-white text-slate-700 border border-slate-200 hover:border-un-blue"
              )}
            >
              Diretoria Executiva
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('corb')}
              className={cn(
                "min-h-[44px] px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center justify-center shrink-0 focus:outline-none",
                activeTab === 'corb' 
                  ? "bg-un-blue text-white shadow-md shadow-un-blue/20" 
                  : "bg-white text-slate-700 border border-slate-200 hover:border-un-blue"
              )}
            >
              Conselho Orientador - CORB ({CORB_EMPRESAS.length})
            </button>
          </div>

          {/* PAINEL 1: CONSELHO DE ADMINISTRAÇÃO COM FOTO E LOGO EM CADA CARD */}
          {activeTab === 'conselho' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-slate-100/90 border border-slate-200 p-4 rounded-2xl text-xs text-slate-700 flex items-center gap-3">
                <Info className="w-5 h-5 text-un-blue shrink-0" />
                <span>O Conselho de Administração fixa a orientação geral das atividades, aprova orçamentos e políticas institucionais. Composto por assentos eleitos e assentos institucionais da ONU.</span>
              </div>

              {/* Grid dos 11 Membros com Foto de Retrato, Logo da Empresa e Suplente */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {CONSELHO_ADMINISTRACAO.map((item, idx) => (
                  <div 
                    key={idx}
                    className={cn(
                      "rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group shadow-sm",
                      item.destaque 
                        ? "bg-un-blue text-white border-2 border-un-gold/50 hover:shadow-xl hover:-translate-y-1" 
                        : "bg-white text-slate-900 border border-slate-200/90 hover:border-un-blue hover:shadow-md hover:-translate-y-1"
                    )}
                  >
                    <div>
                      {/* Top Header do Card: Cargo e Categoria sem sobreposição */}
                      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                        <span className={cn(
                          "text-[10px] font-bold uppercase tracking-wider",
                          item.destaque ? "text-un-gold" : "text-slate-500"
                        )}>
                          {item.cargoConselho}
                        </span>
                        {item.categoria && (
                          <span className={cn(
                            "text-[9px] font-black uppercase px-2.5 py-1 rounded-md tracking-wider shrink-0",
                            item.destaque 
                              ? "bg-un-gold text-un-blue shadow-xs" 
                              : "bg-slate-100 text-slate-700"
                          )}>
                            {item.categoria}
                          </span>
                        )}
                      </div>

                      {/* Bloco com Foto de Retrato do Titular e Função */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={cn(
                          "w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 shadow-sm relative group-hover:scale-105 transition-transform",
                          item.destaque ? "border-un-gold/60 bg-white/10" : "border-slate-200 bg-slate-100"
                        )}>
                          <img 
                            src={item.foto} 
                            alt={item.titular} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.parentElement) {
                                e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', item.destaque ? 'bg-un-gold' : 'bg-un-blue');
                                const span = document.createElement('span');
                                span.className = item.destaque ? 'text-un-blue font-black text-sm' : 'text-white font-black text-sm';
                                span.innerText = item.titular.split(' ').slice(0, 2).map(n => n[0]).join('');
                                e.target.parentElement.appendChild(span);
                              }
                            }}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h5 className="text-base font-bold leading-snug">
                            {item.titular}
                          </h5>
                          {item.funcaoTitular && (
                            <p className={cn("text-xs leading-normal mt-0.5", item.destaque ? "text-slate-200" : "text-slate-600")}>
                              {item.funcaoTitular}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Caixa da Empresa / Instituição com Logo */}
                      <div className={cn(
                        "p-3 rounded-2xl mb-4 flex items-center justify-between gap-3",
                        item.destaque ? "bg-white/10 border border-white/10" : "bg-slate-50 border border-slate-100"
                      )}>
                        <div className="min-w-0">
                          <span className={cn("text-[9px] uppercase font-bold tracking-wider block", item.destaque ? "text-slate-300" : "text-slate-500")}>
                            Organização:
                          </span>
                          <h4 className="text-sm font-display font-black uppercase tracking-tight truncate">
                            {item.empresa}
                          </h4>
                        </div>
                        {item.logo && (
                          <div className="w-9 h-9 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 border border-slate-200 shadow-2xs">
                            <img src={item.logo} alt={item.empresa} className="w-full h-full object-contain" />
                          </div>
                        )}
                      </div>

                      {/* Informações do Suplente */}
                      {item.suplente && (
                        <div className="pt-3 border-t border-slate-100/15">
                          <span className={cn("text-[10px] uppercase font-bold tracking-wider block", item.destaque ? "text-slate-300" : "text-slate-500")}>
                            Suplente:
                          </span>
                          <p className={cn("text-xs leading-tight mt-0.5 font-medium", item.destaque ? "text-slate-200" : "text-slate-700")}>
                            {item.suplente}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAINEL 2: CONSELHO FISCAL COM FOTOS VERIFICADAS */}
          {activeTab === 'fiscal' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-slate-100/90 border border-slate-200 p-4 rounded-2xl text-xs text-slate-700 flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-700 shrink-0" />
                <span>O Conselho Fiscal é o órgão fiscalizador independente responsável pelo exame dos livros contábeis, verificação de contas e validação dos pareceres das auditorias independentes.</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CONSELHO_FISCAL.map((membro, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 text-center flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-all">
                    <div>
                      <div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 border-2 border-slate-200 shadow-sm mx-auto bg-slate-100 flex items-center justify-center relative group-hover:scale-105 transition-transform">
                        <img 
                          src={membro.foto} 
                          alt={membro.nome} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.parentElement) {
                              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-un-blue');
                              const span = document.createElement('span');
                              span.className = 'text-white font-black text-lg';
                              span.innerText = membro.nome.split(' ').slice(0, 2).map(n => n[0]).join('');
                              e.target.parentElement.appendChild(span);
                            }
                          }}
                        />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{membro.nome}</h4>
                      <p className="text-xs text-un-blue font-bold uppercase tracking-wider mb-3">{membro.cargo}</p>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">{membro.atribuicao}</p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-slate-100 w-full text-center">
                      <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-800 uppercase tracking-widest bg-emerald-100 px-3 py-1 rounded-full">
                        Atuação Efetiva
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PAINEL 3: DIRETORIA EXECUTIVA COM FOTOS E BIOGRAFIAS */}
          {activeTab === 'diretoria' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-slate-100/90 border border-slate-200 p-4 rounded-2xl text-xs text-slate-700 flex items-center gap-3">
                <Users className="w-5 h-5 text-un-blue shrink-0" />
                <span>A Diretoria Executiva conduz as operações diárias, o relacionamento com participantes e a execução técnica dos projetos, reportando-se diretamente ao Conselho de Administração.</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {DIRETORIA_EXECUTIVA.map((dir, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm bg-slate-100">
                      <img 
                        src={dir.foto} 
                        alt={dir.nome} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          if (e.target.parentElement) {
                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-un-blue');
                            const span = document.createElement('span');
                            span.className = 'text-white font-black text-xl';
                            span.innerText = dir.nome.split(' ').slice(0, 2).map(n => n[0]).join('');
                            e.target.parentElement.appendChild(span);
                          }
                        }}
                      />
                    </div>
                    <div className="space-y-2 text-center sm:text-left">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold bg-un-blue px-3 py-1 rounded-full inline-block">
                        Liderança Executiva
                      </span>
                      <h4 className="text-2xl font-display font-black text-slate-900">{dir.nome}</h4>
                      <p className="text-sm font-bold text-un-blue">{dir.cargo}</p>
                      <p className="text-xs text-slate-700 leading-relaxed pt-2 font-normal">{dir.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Estrutura de Integridade & Compliance */}
              <div className="bg-un-blue text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 max-w-xl text-center md:text-left">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold">Conformidade & Compliance</span>
                  <h4 className="text-xl sm:text-2xl font-display font-black">Área de Governança e Integridade da Rede Brasil</h4>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                    Setor interno dedicado à mitigação de riscos estatutários, recepção de denúncias, relacionamento com auditorias independentes e aplicação contínua da Lei Geral de Proteção de Dados (LGPD).
                  </p>
                </div>
                <div className="shrink-0 w-full sm:w-auto">
                  <button 
                    type="button"
                    onClick={() => scrollToSection('denuncias')}
                    className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-un-gold text-un-blue px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
                  >
                    Canal de Denúncias <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PAINEL 4: CONSELHO ORIENTADOR DA REDE BRASIL (CORB) */}
          {activeTab === 'corb' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-slate-100 border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-slate-900">Empresas Participantes do CORB</h4>
                  <p className="text-xs text-slate-600">Mais de 40 corporações de liderança orientando o rumo estratégico e a aceleração dos ODS no Brasil.</p>
                </div>
                
                {/* Busca no CORB com Touch Target 44px e botão de limpar */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input 
                    type="text"
                    value={corbSearch}
                    onChange={(e) => setCorbSearch(e.target.value)}
                    placeholder="Buscar empresa participante..."
                    className="w-full min-h-[44px] bg-white border border-slate-300 rounded-full pl-9 pr-10 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-un-blue focus:ring-1 focus:ring-un-blue"
                  />
                  {corbSearch && (
                    <button
                      type="button"
                      onClick={() => setCorbSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                      title="Limpar busca"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Grid das Empresas do CORB */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {corbFiltrado.map((empresa, idx) => (
                  <a
                    key={idx}
                    href={empresa.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200/90 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-[90px] hover:border-un-blue hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-un-blue"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-un-blue transition-colors line-clamp-2 break-words">
                      {empresa.nome}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-2 group-hover:text-un-gold">
                      Visitar site <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </a>
                ))}
              </div>

              {corbFiltrado.length === 0 && (
                <div className="text-center py-12 text-slate-500 text-xs">
                  Nenhuma empresa encontrada com o termo "{corbSearch}".
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* 5. PILARES DE GOVERNANÇA EM PRÁTICA (4 BENTO CARDS COM ÍCONES) */}
      <section id="pilares" className="py-12 md:py-20 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Princípios Operacionais"
            title="Práticas de Governança"
            titleAccent="Rigor & Ética em Cada Ação"
            description="Como as diretrizes internacionais da ONU são traduzidas em rotinas de controle e integridade no Brasil."
            className="mb-10"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES_GOVERNANCA.map((pilar, idx) => (
              <div key={idx} className="bg-un-surface border border-slate-200/90 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-slate-600">{pilar.numero}</span>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest bg-un-blue/10 text-un-blue border border-un-blue/15">
                      {pilar.destaque}
                    </span>
                  </div>
                  <h4 className="text-lg font-display font-black text-slate-900 mb-3">{pilar.titulo}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">{pilar.descricao}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ORGANOGRAMA INSTITUCIONAL BENTO BOX */}
      <section id="organograma" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <div className="bg-white border border-slate-200 rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="max-w-2xl space-y-2">
                <span className="px-3 py-1 bg-un-blue/5 text-un-blue text-[10px] font-bold uppercase tracking-widest rounded-full border border-un-blue/10">
                  Visão Estrutural
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 uppercase">Organograma Institucional</h3>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {ORGANOGRAMA_INFO.descricao}
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  type="button"
                  onClick={() => setOrganogramaModalOpen(true)}
                  className="min-h-[44px] inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer focus:outline-none"
                >
                  <Maximize2 className="w-4 h-4" /> Expandir Imagem
                </button>
                <a
                  href={ORGANOGRAMA_INFO.imagem}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-2 bg-un-blue hover:bg-un-blue/90 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors focus:outline-none"
                >
                  <Download className="w-4 h-4" /> Baixar
                </a>
              </div>
            </div>

            {/* Imagem do Organograma com Zoom interativo */}
            <div 
              onClick={() => setOrganogramaModalOpen(true)}
              className="rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-50 cursor-pointer group relative"
            >
              <img 
                src={ORGANOGRAMA_INFO.imagem} 
                alt="Organograma Oficial do Pacto Global Rede Brasil" 
                className="w-full h-auto object-contain max-h-[600px] mx-auto group-hover:scale-[1.01] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-un-blue/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="min-h-[44px] bg-white text-un-blue px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" /> Clique para Ampliar
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MODAL EXPANDIDO DO ORGANOGRAMA COM FECHAMENTO ESC & BACKDROP */}
      {organogramaModalOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-organograma-title"
          onClick={() => setOrganogramaModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 bg-slate-50">
              <h4 id="modal-organograma-title" className="text-base sm:text-lg font-bold text-slate-900">
                Organograma Institucional Completo — Rede Brasil
              </h4>
              <button 
                type="button"
                onClick={() => setOrganogramaModalOpen(false)}
                className="min-h-[44px] min-w-[44px] bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-full inline-flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Fechar visualizador"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-slate-100">
              <img 
                src={ORGANOGRAMA_INFO.imagem} 
                alt="Organograma Completo Ampliado" 
                className="w-full h-auto object-contain max-h-[75vh]" 
              />
            </div>
          </div>
        </div>
      )}

      {/* 7. CENTRAL DE DOCUMENTOS EM ACORDEONS INTELIGENTES (CLUSTERIZAÇÃO + ANOS) */}
      <section id="documentos" className="py-12 md:py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Transparência & Conformidade"
            title="Central de Documentos Oficiais"
            titleAccent="Acesso Público & Auditável"
            description="Todos os instrumentos constitutivos, políticas de conduta, demonstrações financeiras auditadas e planejamentos estratégicos da Rede Brasil."
            className="mb-10"
          />

          {/* Barra de Filtros e Busca de Documentos */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 mb-8 space-y-6">
            
            {/* Segmentação por Ano com Touch Targets 44px */}
            <div>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-700">Filtrar por Ano de Vigência / Resolução:</span>
                <span className="text-xs font-mono font-bold text-slate-600">Total: {DOCUMENTOS_GOVERNANCA.length} documentos</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {anosDisponiveis.map((ano) => (
                  <button
                    key={ano}
                    type="button"
                    onClick={() => setSelectedYear(ano)}
                    className={cn(
                      "min-h-[44px] px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer inline-flex items-center justify-center focus:outline-none",
                      selectedYear === ano
                        ? "bg-un-blue text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-un-blue"
                    )}
                  >
                    {ano}
                  </button>
                ))}
              </div>
            </div>

            {/* Campo de Busca Textual e Botão Expandir / Recolher Todos */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text"
                  value={docSearch}
                  onChange={(e) => setDocSearch(e.target.value)}
                  placeholder="Pesquisar documento por nome, política, estatuto..."
                  className="w-full min-h-[44px] bg-white border border-slate-300 rounded-full pl-9 pr-10 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-un-blue"
                />
                {docSearch && (
                  <button
                    type="button"
                    onClick={() => setDocSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                    title="Limpar pesquisa"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3 justify-between sm:justify-end">
                <div className="text-xs text-slate-600 font-mono">
                  Exibindo <strong className="text-un-blue">{documentosFiltrados.length}</strong> de {DOCUMENTOS_GOVERNANCA.length}
                </div>
                <button
                  type="button"
                  onClick={toggleAllClusters}
                  className="min-h-[44px] px-4 py-2 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors cursor-pointer inline-flex items-center gap-1.5 focus:outline-none"
                >
                  <ChevronsUpDown className="w-3.5 h-3.5" />
                  {areAllClustersOpen ? 'Recolher Todos' : 'Expandir Todos'}
                </button>
              </div>
            </div>

          </div>

          {/* ACORDEONS DOS 6 CLUSTERS DE DOCUMENTOS */}
          <div className="space-y-4">
            {clustersComDocumentos.map((cluster) => {
              const isOpen = openClusters[cluster.id] ?? true;
              const hasDocs = cluster.documentos.length > 0;

              if (!hasDocs && (selectedYear !== 'Todos' || docSearch.trim() !== '')) {
                return null; // Oculta clusters vazios durante filtro ativo
              }

              return (
                <div key={cluster.id} className="border border-slate-200 rounded-3xl overflow-hidden bg-white shadow-xs">
                  
                  {/* Cabeçalho do Acordeon com Touch Target 52px */}
                  <button
                    type="button"
                    onClick={() => toggleCluster(cluster.id)}
                    aria-expanded={isOpen}
                    className="w-full min-h-[52px] flex items-center justify-between p-5 sm:p-6 bg-slate-50/60 hover:bg-slate-100/70 transition-colors text-left cursor-pointer focus:outline-none focus:bg-slate-100"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-un-blue/10 text-un-blue flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900">{cluster.nome}</h4>
                        <p className="text-xs text-slate-600 font-normal">{cluster.descricao}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-800">
                        {cluster.documentos.length} doc{cluster.documentos.length !== 1 ? 's' : ''}
                      </span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-slate-600" /> : <ChevronDown className="w-5 h-5 text-slate-600" />}
                    </div>
                  </button>

                  {/* Conteúdo do Acordeon */}
                  {isOpen && (
                    <div className="p-6 divide-y divide-slate-100">
                      {cluster.documentos.map((doc) => (
                        <div key={doc.id} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                          
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-800">
                                {doc.ano}
                              </span>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-un-blue/10 text-un-blue">
                                {doc.tipo}
                              </span>
                              {doc.obrigatorio && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                                  Normativo
                                </span>
                              )}
                              <span className="text-[11px] text-slate-500 font-mono font-medium">Aprovado: {doc.dataAprovacao}</span>
                            </div>

                            <h5 className="text-sm font-bold text-slate-900 group-hover:text-un-blue transition-colors">
                              {doc.titulo}
                            </h5>
                            <p className="text-xs text-slate-600 font-normal">{doc.subtitulo}</p>
                          </div>

                          <div className="shrink-0 w-full sm:w-auto">
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="min-h-[44px] w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-un-blue hover:text-white text-slate-800 px-5 py-2.5 rounded-full text-xs font-bold transition-all focus:outline-none"
                            >
                              <Download className="w-4 h-4" /> Acessar Documento
                            </a>
                          </div>

                        </div>
                      ))}

                      {cluster.documentos.length === 0 && (
                        <div className="text-center py-6 text-xs text-slate-500">
                          Nenhum documento neste cluster para os filtros atuais.
                        </div>
                      )}
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* 8. CARD DESTACADO: CANAL DE DENÚNCIAS 0800 COM LIGAÇÃO DIRETA NO MOBILE */}
          <div id="denuncias" className="mt-12 bg-gradient-to-r from-[#0F2942] via-un-blue to-[#133A5E] text-white rounded-[2rem] p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-widest rounded-full inline-block">
                  Linha de Integridade 100% Independente
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  Canal de Denúncias da Rede Brasil
                </h3>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-light">
                  {CANAL_DENUNCIAS.descricao}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {CANAL_DENUNCIAS.caracteristicas.map((carac, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{carac}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center space-y-4">
                <div className="text-xs uppercase font-mono tracking-widest text-emerald-300 font-bold">Ligação Gratuita 24/7</div>
                
                {/* Link Direto para Discagem com Touch Target 44px */}
                <a 
                  href="tel:08003004472"
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 text-2xl sm:text-3xl font-display font-black text-white hover:text-emerald-300 transition-colors focus:outline-none"
                  title="Ligar para o canal 0800"
                >
                  <PhoneCall className="w-6 h-6 text-emerald-400 shrink-0" />
                  {CANAL_DENUNCIAS.telefone}
                </a>

                <a
                  href={CANAL_DENUNCIAS.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-full transition-colors shadow-lg focus:outline-none"
                >
                  Registrar Relato Web <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. FAQ DE GOVERNANÇA & COMPLIANCE (BENTO ACCORDION 5:7) */}
      <section id="faq" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Coluna 5: Contexto Editorial do FAQ */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3 py-1 bg-un-blue/5 text-un-blue text-[10px] font-bold uppercase tracking-widest rounded-full inline-block border border-un-blue/10">
                Esclarecimentos & Dúvidas
              </span>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase text-slate-900 leading-tight">
                Perguntas Frequentes sobre <span className="text-un-blue">Nossa Governança</span>
              </h3>

              <p className="text-sm text-slate-700 font-light leading-relaxed">
                Reunimos os principais esclarecimentos jurídicos, estatutários e operacionais sobre o funcionamento da Rede Brasil, o papel do Conselho de Administração e os mecanismos de fiscalização e auditoria.
              </p>

              <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Ainda tem dúvidas institucionais?</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Nossa área de Governança e Compliance está à disposição de signatários, conselheiros e público geral para esclarecimento de protocolos e atas.
                </p>
                <a 
                  href="mailto:governanca@pactoglobal.org.br" 
                  className="min-h-[44px] inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-un-blue hover:text-un-gold transition-colors focus:outline-none"
                >
                  Falar com Governança <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Coluna 7: Acordeom de Perguntas e Respostas */}
            <div className="lg:col-span-7 space-y-3">
              {FAQ_GOVERNANCA.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full min-h-[52px] flex items-center justify-between p-5 text-left font-bold text-sm text-slate-900 hover:text-un-blue transition-colors cursor-pointer focus:outline-none"
                    >
                      <span className="pr-4">{faq.pergunta}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-un-blue shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />}
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-2 text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-100 bg-slate-50/50">
                        {faq.resposta}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 10. ECOSSISTEMA DE PARCEIROS & APOIADORES */}
      <section id="parceiros" className="py-12 md:py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Ecossistema</span>
            <h3 className="text-2xl font-display font-black uppercase text-slate-900">Apoiadores da Governança</h3>
            <p className="text-xs text-slate-600">Organizações que viabilizam a excelência técnica, auditorias e conformidade da Rede Brasil.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {APOIADORES_GOVERNANCA.map((apoiador, idx) => (
              <a
                key={idx}
                href={apoiador.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-[84px] hover:bg-white hover:border-un-blue hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-un-blue"
              >
                <span className="text-xs font-bold text-slate-800 group-hover:text-un-blue transition-colors">
                  {apoiador.nome}
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1 group-hover:text-un-gold">
                  Parceiro Oficial
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 11. CTA INSTITUCIONAL FINAL COM TOUCH TARGETS 48PX */}
      <section className="py-16 md:py-24 bg-un-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl text-center space-y-6 relative z-10">
          <span className="px-3.5 py-1 bg-un-gold/20 text-un-gold text-[10px] font-bold uppercase tracking-widest rounded-full border border-un-gold/30">
            Junte-se à Rede Brasil
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase break-words">
            Sua Empresa Comprometida com a <span className="text-un-gold">Agenda 2030</span>
          </h2>
          <p className="text-slate-200 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Faça parte da maior rede de sustentabilidade corporativa do mundo e integre práticas de governança transparentes e alinhadas aos padrões globais da ONU.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              type="button"
              onClick={() => navigate && navigate('participar')}
              className="min-h-[48px] w-full sm:w-auto bg-un-gold text-un-blue hover:bg-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors shadow-lg cursor-pointer focus:outline-none"
            >
              Quero Aderir ao Pacto Global
            </button>
            <button 
              type="button"
              onClick={() => navigate && navigate('sobre')}
              className="min-h-[48px] w-full sm:w-auto border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer focus:outline-none"
            >
              Conhecer a Rede Brasil
            </button>
          </div>
        </div>
      </section>

      {/* 12. DOCK FLUTUANTE DE NAVEGAÇÃO RÁPIDA (DISCRETO & 100% IN-PAGE) */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 animate-fade-in">
          
          {/* Menu Flutuante Expandido (Acima dos Botões) */}
          {floatingNavOpen && (
            <div className="bg-slate-900/95 backdrop-blur-md border border-white/20 text-white rounded-3xl p-3 shadow-2xl flex flex-col gap-1.5 animate-fade-in-up mb-1 w-52">
              <span className="text-[9px] font-mono uppercase tracking-widest text-un-gold px-3 pt-1 font-bold">
                Saltar para Seção:
              </span>
              <button 
                type="button"
                onClick={() => scrollToSection('mandato')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Scale className="w-3 h-3 text-un-gold" /> Mandato ONU
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('instancias')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-3 h-3 text-un-gold" /> Órgãos Colegiados
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('organograma')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <BarChart3 className="w-3 h-3 text-un-gold" /> Organograma
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('documentos')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-3 h-3 text-un-gold" /> Documentos Oficiais
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('denuncias')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer text-emerald-300"
              >
                <PhoneCall className="w-3 h-3" /> Canal 0800
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('faq')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Info className="w-3 h-3 text-un-gold" /> FAQ
              </button>
            </div>
          )}

          <div className="flex items-center gap-2">
            {/* Botão de Toggle do Menu Flutuante */}
            <button
              type="button"
              onClick={() => setFloatingNavOpen(!floatingNavOpen)}
              className="h-11 px-4 rounded-full bg-slate-900/90 hover:bg-un-blue text-white shadow-xl flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border border-white/20 backdrop-blur-md"
              title="Navegar pelas seções"
            >
              <Compass className="w-4 h-4 text-un-gold animate-spin-slow" />
              <span className="hidden sm:inline">Seções</span>
              <ChevronUp className={cn("w-3.5 h-3.5 transition-transform", floatingNavOpen ? "rotate-180" : "")} />
            </button>

            {/* Botão de Retorno ao Topo */}
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-11 h-11 rounded-full bg-un-blue hover:bg-un-gold hover:text-un-blue text-white shadow-xl flex items-center justify-center transition-all cursor-pointer border border-white/20 shrink-0"
              title="Voltar ao início da página"
              aria-label="Voltar ao início da página"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
