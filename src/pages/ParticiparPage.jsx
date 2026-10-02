import React, { useState, useMemo, useEffect } from 'react';
import { 
  ShieldCheck, 
  GraduationCap, 
  TrendingUp, 
  Users, 
  Globe, 
  BarChart3, 
  Building2, 
  Briefcase, 
  Scale, 
  FileCheck, 
  FileSignature, 
  Laptop, 
  ShieldAlert, 
  Award, 
  BarChart2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  Calculator, 
  DollarSign, 
  Building, 
  Globe2, 
  UserCheck, 
  Mail, 
  Clock, 
  Sparkles,
  Info,
  Compass,
  Send
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import {
  ADESAO_STATS,
  BENEFICIOS_ADESAO,
  QUEM_PODE_ADERIR,
  TABELA_CONTRIBUICOES,
  REGRAS_CONTRIBUICAO,
  ETAPAS_ADESAO,
  FAQ_ADESAO,
  CONTATO_ENGAJAMENTO,
  CEO_STUDY_STATS,
  COMPARATIVO_TIERS
} from '../data/comoAderir';

// Mapeamento de ícones dinâmicos
const ICON_MAP = {
  ShieldCheck,
  GraduationCap,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Building2,
  Briefcase,
  Scale,
  FileCheck,
  FileSignature,
  Laptop,
  ShieldAlert,
  Award,
  BarChart2,
  Building,
  Globe2,
  UserCheck
};

export const ParticiparPage = ({ navigate: _navigate }) => {
  // Estado do Simulador de Anuidade
  const [tipoOrg, setTipoOrg] = useState('empresa_matriz'); // 'empresa_matriz', 'subsidiaria_estrangeira', 'subsidiaria_br', 'nao_empresarial'
  const [selectedFaixaIndex, setSelectedFaixaIndex] = useState(8); // Default: Abaixo de USD 25M (PME)
  
  // Estado do FAQ (qual item está aberto)
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Estado do Dock Flutuante e Scroll
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [floatingNavOpen, setFloatingNavOpen] = useState(false);

  // Estado do Formulário de Contato
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    empresa: '',
    cargo: '',
    porte: 'PME (< USD 25M)',
    mensagem: '',
    lgpd: true
  });

  // Listener para botão de scroll e navegação flutuante
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

  // Rolagem suave in-page sem quebrar a hash route da SPA
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

  // Cálculo da contribuição no simulador
  const simuladorResultado = useMemo(() => {
    if (tipoOrg === 'nao_empresarial') {
      return {
        anuidadeUSD: 0,
        anuidadeBRL: 0,
        anuidadeFormatada: 'Isento (USD 0)',
        regra: 'Organizações não empresariais (Academia, Terceiro Setor, Setor Público) são isentas de anuidade.',
        categoria: 'Não Empresarial'
      };
    }

    if (tipoOrg === 'subsidiaria_br') {
      return {
        anuidadeUSD: 0,
        anuidadeBRL: 0,
        anuidadeFormatada: 'Isento (USD 0)*',
        regra: 'Subsidiárias integrais de matrizes brasileiras já participantes usufruem das contrapartidas sem anuidade adicional.',
        categoria: 'Subsidiária Nacional'
      };
    }

    const faixaBase = TABELA_CONTRIBUICOES[selectedFaixaIndex] || TABELA_CONTRIBUICOES[8];
    const taxaCambioIndicativa = 5.0; // R$ 5,00 por USD para referência

    if (tipoOrg === 'subsidiaria_estrangeira') {
      const valorFinalUSD = Math.round(faixaBase.anuidadeUSD * 0.5);
      return {
        anuidadeUSD: valorFinalUSD,
        anuidadeBRL: valorFinalUSD * taxaCambioIndicativa,
        anuidadeFormatada: `USD ${valorFinalUSD.toLocaleString('en-US')}`,
        regra: 'Subsidiárias brasileiras de grupos multinacionais estrangeiros contam com 50% de benefício na anuidade.',
        categoria: `${faixaBase.categoria} (50% Desc.)`
      };
    }

    // Empresa Matriz Integral
    return {
      anuidadeUSD: faixaBase.anuidadeUSD,
      anuidadeBRL: faixaBase.anuidadeUSD * taxaCambioIndicativa,
      anuidadeFormatada: faixaBase.anuidadeFormatada,
      regra: 'Contribuição proporcional ao faturamento bruto anual auditado.',
      categoria: faixaBase.categoria
    };
  }, [tipoOrg, selectedFaixaIndex]);

  // Não há backend neste site (build estático no GitHub Pages). O envio abre o
  // cliente de e-mail da pessoa com tudo preenchido, para o mesmo endereço que
  // a página já divulga em outros três pontos. Sem isso o formulário colhia
  // dado pessoal com consentimento LGPD, descartava tudo e ainda prometia
  // retorno em 2 dias úteis.
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.empresa) return;

    const assunto = `Interesse em aderir ao Pacto Global — ${formData.empresa}`;
    const corpo = [
      `Nome: ${formData.nome} ${formData.sobrenome}`.trim(),
      `E-mail: ${formData.email}`,
      `Organização: ${formData.empresa}`,
      `Cargo: ${formData.cargo || '—'}`,
      `Porte: ${formData.porte}`,
      '',
      'Mensagem:',
      formData.mensagem || '—',
      '',
      'Consentimento LGPD: concedido no formulário do site.',
    ].join('\n');

    window.location.href =
      `mailto:${CONTATO_ENGAJAMENTO.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    setFormSubmitted(true);
  };

  return (
    <div className="animate-fade-in bg-un-surface min-h-screen pb-0 relative">
      
      {/* 1. HERO EDITORIAL DE ALTA CONVERSÃO */}
      <PageHero 
        category="Adesão & Engajamento • Maior Rede ESG do Mundo"
        title="Como Aderir ao Pacto Global"
        description="Junte-se a mais de 2.000 organizações no Brasil e 24.000 no mundo comprometidas em transformar princípios éticos em liderança e impacto socioambiental real."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      {/* GUIA RÁPIDO EDITORIAL IN-PAGE */}
      <section className="bg-white border-b border-slate-200/80 py-4 shadow-2xs">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-2 h-2 rounded-full bg-un-gold"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                Acesso Rápido à Jornada
              </span>
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch py-1">
              <button 
                type="button" 
                onClick={() => scrollToSection('beneficios')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <Award className="w-3.5 h-3.5 text-un-gold" /> Benefícios
              </button>

              <button 
                type="button" 
                onClick={() => scrollToSection('evidencia-executiva')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <TrendingUp className="w-3.5 h-3.5 text-un-gold" /> Evidência Executiva
              </button>
              
              <button 
                type="button" 
                onClick={() => scrollToSection('publicos')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <Users className="w-3.5 h-3.5 text-un-gold" /> Quem Pode Aderir
              </button>

              <button 
                type="button" 
                onClick={() => scrollToSection('simulador')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <Calculator className="w-3.5 h-3.5 text-un-gold" /> Simulador de Anuidade
              </button>

              <button 
                type="button" 
                onClick={() => scrollToSection('niveis-participacao')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <Globe className="w-3.5 h-3.5 text-un-gold" /> Níveis de Adesão
              </button>
              
              <button 
                type="button" 
                onClick={() => scrollToSection('etapas')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <FileSignature className="w-3.5 h-3.5 text-un-gold" /> 6 Etapas
              </button>

              <button 
                type="button" 
                onClick={() => scrollToSection('faq')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <HelpCircle className="w-3.5 h-3.5 text-un-gold" /> FAQ
              </button>
              
              <button 
                type="button" 
                onClick={() => scrollToSection('contato')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-black text-emerald-950 bg-emerald-100 hover:bg-emerald-600 hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-emerald-200"
              >
                <Send className="w-3.5 h-3.5" /> Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP DE IMPACTO */}
      <section className="bg-un-blue text-white py-8 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {ADESAO_STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-un-gold">
                  {stat.valor}
                </span>
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                  {stat.rotulo}
                </h4>
                <p className="text-[11px] text-slate-300 font-light hidden sm:block">
                  {stat.subrotulo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFÍCIOS DA PARTICIPAÇÃO (BENTO GRID) */}
      <section id="beneficios" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Valor & Diferenciação Estratégica"
            title="Por que sua Organização deve Participar?"
            titleAccent="Credibilidade Global & Ação Local"
            description="Ao integrar a Rede Brasil, sua empresa não apenas chancelará suas práticas ESG com a ONU, mas terá acesso a um ecossistema completo de ferramentas, capacitação e liderança."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFICIOS_ADESAO.map((ben) => {
              const IconComponent = ICON_MAP[ben.icone] || Award;
              return (
                <div 
                  key={ben.id}
                  className={cn(
                    "rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md",
                    ben.destaque 
                      ? "bg-un-blue text-white lg:col-span-2 border-2 border-un-gold/40 relative overflow-hidden" 
                      : "bg-white text-slate-900 border border-slate-200/90 hover:border-un-blue"
                  )}
                >
                  {ben.destaque && (
                    <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-un-gold/10 rounded-full blur-2xl pointer-events-none"></div>
                  )}

                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border",
                        ben.destaque 
                          ? "bg-un-gold/20 text-un-gold border-un-gold/30" 
                          : "bg-un-blue/5 text-un-blue border-un-blue/15"
                      )}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full",
                        ben.destaque 
                          ? "bg-white/10 text-un-gold border border-white/15" 
                          : "bg-slate-100 text-slate-700"
                      )}>
                        {ben.badge}
                      </span>
                    </div>

                    <h3 className={cn(
                      "text-xl sm:text-2xl font-display font-black uppercase tracking-tight",
                      ben.destaque ? "text-white" : "text-slate-900"
                    )}>
                      {ben.titulo}
                    </h3>

                    <p className={cn(
                      "text-xs sm:text-sm leading-relaxed",
                      ben.destaque ? "text-slate-200 font-light" : "text-slate-600"
                    )}>
                      {ben.descricao}
                    </p>

                    <ul className="space-y-2.5 pt-2 border-t border-slate-100/15">
                      {ben.pontos.map((ponto, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className={cn(
                            "w-4 h-4 shrink-0 mt-0.5",
                            ben.destaque ? "text-un-gold" : "text-emerald-600"
                          )} />
                          <span className={ben.destaque ? "text-slate-100" : "text-slate-700"}>
                            {ponto}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4">
                    <button
                      type="button"
                      onClick={() => scrollToSection('simulador')}
                      className={cn(
                        "min-h-[42px] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer",
                        ben.destaque 
                          ? "bg-un-gold text-un-blue hover:bg-white" 
                          : "text-un-blue hover:text-un-gold"
                      )}
                    >
                      Aderir a esta iniciativa <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3.1 EVIDÊNCIA EXECUTIVA & DADOS GLOBAIS (ACCENTURE & UNGC CEO STUDY) */}
      <section id="evidencia-executiva" className="py-12 md:py-20 bg-un-blue text-white relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-un-gold/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold bg-white/10 px-3 py-1 rounded-full border border-white/15 inline-block mb-3">
              Evidência Executiva • UN Global Compact & Accenture CEO Study
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black uppercase tracking-tight text-white">
              O Que Dizem os CEOs que Lideram a Sustentabilidade
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light mt-3 leading-relaxed">
              O maior estudo executivo de sustentabilidade do planeta, conduzido em parceria com a Accenture com mais de 2.800 CEOs de 113 países e 25 setores industriais, comprova: a sustentabilidade é hoje o principal vetor de resiliência corporativa, competitividade e criação de valor financeiro a longo prazo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CEO_STUDY_STATS.map((stat, sIdx) => (
              <div 
                key={sIdx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-un-gold bg-un-gold/10 border border-un-gold/20 px-2.5 py-0.5 rounded-full">
                      {stat.destaque}
                    </span>
                    <TrendingUp className="w-4 h-4 text-un-gold/70 group-hover:text-un-gold transition-colors" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-display font-black text-un-gold tracking-tight pt-2">
                    {stat.porcentagem}
                  </div>
                  <p className="text-xs text-slate-200 font-light leading-relaxed">
                    {stat.descricao}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Accenture CEO Study</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-un-gold" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-un-gold shrink-0" />
              <span>Metodologia global aplicada às mais de 2.000 empresas participantes da Rede Brasil.</span>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('simulador')}
              className="px-5 py-2.5 rounded-full bg-un-gold text-un-blue font-bold uppercase tracking-wider text-[11px] hover:bg-white transition-colors cursor-pointer shrink-0"
            >
              Simular Participação da Minha Empresa
            </button>
          </div>
        </div>
      </section>

      {/* 4. QUEM PODE PARTICIPAR (SEGMENTAÇÃO) */}
      <section id="publicos" className="py-12 md:py-20 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Elegibilidade & Categorias"
            title="Quem Pode Aderir à Rede Brasil?"
            titleAccent="Portas Abertas para Toda a Economia"
            description="Do micro ao grande conglomerado, da universidade à ONG: toda organização legalmente constituída que assumir o compromisso com os 10 Princípios pode participar."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {QUEM_PODE_ADERIR.map((cat, idx) => {
              const IconComp = ICON_MAP[cat.icone] || Building2;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-un-blue shadow-2xs">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold bg-un-blue px-2.5 py-0.5 rounded-md inline-block mb-1">
                        {cat.categoria}
                      </span>
                      <h3 className="text-xl font-display font-black uppercase text-slate-900">
                        {cat.tipo}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">{cat.subtitulo}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 text-xs space-y-2">
                      <div className="font-bold text-slate-900 flex items-center gap-1.5">
                        <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        Critérios Mínimos:
                      </div>
                      <p className="text-slate-600 leading-relaxed font-light">{cat.criterios}</p>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Principais Contrapartidas:</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-light">{cat.vantagens}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200/60 mt-4">
                    <button
                      type="button"
                      onClick={() => {
                        if (idx === 2) setTipoOrg('nao_empresarial');
                        else if (idx === 1) {
                          setTipoOrg('empresa_matriz');
                          setSelectedFaixaIndex(8);
                        } else {
                          setTipoOrg('empresa_matriz');
                          setSelectedFaixaIndex(3);
                        }
                        scrollToSection('simulador');
                      }}
                      className="w-full min-h-[42px] px-4 py-2 rounded-full border border-un-blue text-un-blue hover:bg-un-blue hover:text-white transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      Simular nesta categoria <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. SIMULADOR INTERATIVO & TABELA OFICIAL DE CONTRIBUIÇÃO */}
      <section id="simulador" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Transparência Financeira Oficial"
            title="Simulador de Contribuição Anual"
            titleAccent="Valores Proporcionais ao Porte da Empresa"
            description="Consulte a anuidade correspondente ao faturamento bruto anual da sua organização e entenda as regras de isenção e benefícios para subsidiárias."
            className="mb-10"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Bloco Interativo de Simulação (7 Colunas) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
              
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-un-gold/20 flex items-center justify-center text-un-blue border border-un-gold/30">
                  <Calculator className="w-5 h-5 text-un-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-black uppercase text-slate-900">
                    Calculadora de Anuidade
                  </h3>
                  <p className="text-xs text-slate-500 font-light">Selecione o perfil da sua instituição para calcular o valor</p>
                </div>
              </div>

              {/* Seletor do Tipo de Organização */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  1. Perfil da Organização:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTipoOrg('empresa_matriz')}
                    className={cn(
                      "p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer flex flex-col justify-between",
                      tipoOrg === 'empresa_matriz'
                        ? "bg-un-blue text-white border-un-blue shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <span className="font-bold block">Empresa Brasileira (Matriz)</span>
                    <span className="text-[10px] opacity-80 mt-0.5">Tabela padrão por faixa de receita</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTipoOrg('subsidiaria_estrangeira')}
                    className={cn(
                      "p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer flex flex-col justify-between",
                      tipoOrg === 'subsidiaria_estrangeira'
                        ? "bg-un-blue text-white border-un-blue shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <span className="font-bold block">Subsidiária de Multinacional</span>
                    <span className="text-[10px] opacity-80 mt-0.5">Benefício de 50% de anuidade</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTipoOrg('subsidiaria_br')}
                    className={cn(
                      "p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer flex flex-col justify-between",
                      tipoOrg === 'subsidiaria_br'
                        ? "bg-un-blue text-white border-un-blue shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <span className="font-bold block">Subsidiária de Empresa BR</span>
                    <span className="text-[10px] opacity-80 mt-0.5">Isenta se matriz for participante</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTipoOrg('nao_empresarial')}
                    className={cn(
                      "p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer flex flex-col justify-between",
                      tipoOrg === 'nao_empresarial'
                        ? "bg-un-blue text-white border-un-blue shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <span className="font-bold block">Não Empresarial (ONG / Univ.)</span>
                    <span className="text-[10px] opacity-80 mt-0.5">Participação 100% Isenta</span>
                  </button>
                </div>
              </div>

              {/* Seletor de Faixa de Faturamento (quando for Empresa) */}
              {(tipoOrg === 'empresa_matriz' || tipoOrg === 'subsidiaria_estrangeira') && (
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                    2. Faixa de Faturamento Bruto Anual:
                  </label>
                  <select
                    value={selectedFaixaIndex}
                    onChange={(e) => setSelectedFaixaIndex(Number(e.target.value))}
                    className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-un-blue transition-colors cursor-pointer"
                  >
                    {TABELA_CONTRIBUICOES.filter(f => f.anuidadeUSD > 0).map((faixa, fIdx) => (
                      <option key={fIdx} value={fIdx}>
                        {faixa.faixaUSD} ({faixa.faturamentoBRL}) — {faixa.categoria}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Card de Regra e Nota Informativa */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                <Info className="w-4 h-4 text-un-blue shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {simuladorResultado.regra} Os valores oficiais são tabelados em USD e faturados anualmente pela Rede Brasil sob câmbio oficial da data de emissão.
                </p>
              </div>

            </div>

            {/* Bloco de Resultado do Simulador (5 Colunas) */}
            <div className="lg:col-span-5 bg-un-blue text-white rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-un-gold/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold px-3 py-1 rounded-full bg-white/10 border border-white/15 inline-block">
                  Resultado Estimado
                </span>

                <div>
                  <span className="text-xs uppercase font-medium text-slate-300 block">
                    Anuidade Oficial da Organização:
                  </span>
                  <div className="text-4xl sm:text-5xl font-display font-black text-un-gold mt-1 tracking-tight">
                    {simuladorResultado.anuidadeFormatada}
                  </div>
                  {simuladorResultado.anuidadeUSD > 0 && (
                    <span className="text-xs text-slate-300 block mt-1 font-mono">
                      Equivalente indicativo: ~R$ {simuladorResultado.anuidadeBRL.toLocaleString('pt-BR')} / ano
                    </span>
                  )}
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Categoria:</span>
                    <strong className="text-white">{simuladorResultado.categoria}</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Periodicidade:</span>
                    <strong className="text-white">Anual</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Moeda Base da ONU:</span>
                    <strong className="text-white">Dólar Americano (USD)</strong>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-200 font-light leading-relaxed">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0" />
                    Acesso ilimitado ao UN Global Compact Academy.
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0" />
                    Autorização oficial para uso do selo 'We Support'.
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0" />
                    Voz e participação nos Movimentos da Ambição 2030.
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-white/15 relative z-10 space-y-3">
                <button
                  type="button"
                  onClick={() => scrollToSection('contato')}
                  className="w-full min-h-[48px] px-6 py-3 rounded-full bg-un-gold text-un-blue hover:bg-white transition-all text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  Iniciar Adesão Agora <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-300">
                  Dúvidas sobre o faturamento? <a href="mailto:engajamento@pactoglobal.org.br" className="underline hover:text-white font-medium">Fale com nossa equipe</a>
                </p>
              </div>

            </div>

          </div>

          {/* TABELA COMPLETA OFICIAL EM ACORDEON / EXPANSÍVEL */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h4 className="text-lg font-display font-black uppercase text-slate-900">
                  Tabela Completa de Contribuições (UN Global Compact)
                </h4>
                <p className="text-xs text-slate-500 font-light">Todas as faixas de receita bruta anual e valores de anuidade vigentes</p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-slate-100 rounded-full text-slate-700 shrink-0">
                10 Faixas Regulamentadas
              </span>
            </div>

            <div className="overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Faixa de Faturamento (USD)</th>
                    <th className="py-3 px-4">Referência em BRL</th>
                    <th className="py-3 px-4">Categoria Corporativa</th>
                    <th className="py-3 px-4 text-right">Anuidade Anual (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {TABELA_CONTRIBUICOES.map((row, rIdx) => (
                    <tr 
                      key={rIdx}
                      className={cn(
                        "hover:bg-slate-50 transition-colors",
                        row.destaque ? "bg-un-gold/5 font-semibold" : ""
                      )}
                    >
                      <td className="py-3.5 px-4 font-bold text-slate-900">{row.faixaUSD}</td>
                      <td className="py-3.5 px-4 text-slate-600">{row.faturamentoBRL}</td>
                      <td className="py-3.5 px-4 text-slate-700">
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium">
                          {row.categoria}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-display font-black text-un-blue text-sm">
                        {row.anuidadeFormatada}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 4 Cards de Regras Especiais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-100">
              {REGRAS_CONTRIBUICAO.map((regra, rIdx) => (
                <div key={rIdx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <h5 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-un-gold shrink-0" />
                    {regra.titulo}
                  </h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-light">{regra.descricao}</p>
                </div>
              ))}
            </div>

            {/* NOVO: NÍVEIS OFICIAIS DE PARTICIPAÇÃO DA ONU (SIGNATORY VS PARTICIPANT) */}
            <div id="niveis-participacao" className="mt-12 pt-12 border-t border-slate-200">
              <div className="max-w-3xl mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-un-blue bg-un-blue/10 px-3 py-1 rounded-full border border-un-blue/20 inline-block mb-2">
                  Regulamento Global da ONU • Resolução da Sede em Nova York
                </span>
                <h4 className="text-xl sm:text-2xl font-display font-black uppercase text-slate-900 tracking-tight">
                  Signatário vs. Participante: Conheça os Níveis de Adesão
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mt-1">
                  O UN Global Compact organiza a membresia corporativa em dois níveis oficiais. Compreenda as distinções de contrapartidas, acessos e representatividade internacional para escolher a modalidade ideal para o porte da sua organização.
                </p>
              </div>

              {/* Grid dos Dois Níveis (Bento Style) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Card Signatário */}
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-200/70 px-3 py-1 rounded-full">
                        Nível Nacional • PMEs
                      </span>
                      <Building2 className="w-5 h-5 text-slate-500" />
                    </div>
                    <div>
                      <h5 className="text-xl font-display font-black uppercase text-slate-900">
                        Signatário (Signatory)
                      </h5>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Elegível para empresas com faturamento anual inferior a USD 50 Milhões (PMEs).
                      </p>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-600 font-light border-t border-slate-200/60 pt-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Foco de atuação e relacionamento primariamente com a <strong>Rede Brasil</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Acesso aos cursos essenciais e webinars da <strong>UN Global Compact Academy</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Publicação anual obrigatória da <strong>Comunicação de Progresso (CoP)</strong>.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Presença no diretório público global de signatários da ONU.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-2">Ideal para: Pequenas e Médias Empresas iniciando a formalização ESG.</span>
                  </div>
                </div>

                {/* Card Participante */}
                <div className="bg-un-blue text-white border-2 border-un-gold/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-un-gold/15 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-un-blue bg-un-gold px-3 py-1 rounded-full font-black">
                        Recomendado Corporativo • Global
                      </span>
                      <Award className="w-5 h-5 text-un-gold" />
                    </div>
                    <div>
                      <h5 className="text-xl font-display font-black uppercase text-white">
                        Participante (Participant)
                      </h5>
                      <p className="text-xs text-slate-200 font-light mt-1">
                        Obrigatório para empresas com faturamento &gt; USD 50M e aberto a PMEs com ambição global.
                      </p>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-100 font-light border-t border-white/15 pt-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0 mt-0.5" />
                        <span>Acesso <strong>100% ilimitado e gratuito</strong> à UN Global Compact Academy para <strong>todos os funcionários</strong> da organização.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0 mt-0.5" />
                        <span>Inscrição prioritária e sem custos adicionais nos <strong>Aceleradores Globais</strong> (Net Zero, Target Gender Equality, SDG Innovation).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0 mt-0.5" />
                        <span>Convites e credenciais para o <strong>Leaders Summit</strong> durante a Assembleia Geral da ONU (UNGA) em Nova York.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0 mt-0.5" />
                        <span>Acesso exclusivo à ferramenta mundial de <strong>Benchmarking da CoP</strong> para comparar métricas com pares globais.</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pt-6 mt-6 border-t border-white/15 relative z-10">
                    <span className="text-[11px] font-semibold text-un-gold block mb-2">Ideal para: Grandes empresas, multinacionais e PMEs líderes em sustentabilidade.</span>
                  </div>
                </div>
              </div>

              {/* Tabela de Comparação Direta Criterio a Criterio */}
              <div className="overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-6">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                      <th className="py-3 px-4 w-1/3">Critério de Avaliação</th>
                      <th className="py-3 px-4 w-1/3">Nível Signatário</th>
                      <th className="py-3 px-4 w-1/3 text-un-blue font-black">Nível Participante (Recomendado)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {COMPARATIVO_TIERS.map((tier, tIdx) => (
                      <tr key={tIdx} className="hover:bg-white transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-un-gold"></span>
                          {tier.criterio}
                        </td>
                        <td className="py-3.5 px-4 text-slate-600">{tier.signatory}</td>
                        <td className="py-3.5 px-4 font-semibold text-un-blue bg-un-blue/5">
                          {tier.participant}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Link para o Diretório Global de Participantes */}
              <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-amber-900">
                  <Globe className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Consulte as mais de 24.000 organizações ativas no <strong>Diretório Público Global de Participantes</strong> da ONU.</span>
                </div>
                <a
                  href={CONTATO_ENGAJAMENTO.diretorioPublicoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-un-blue hover:text-amber-800 underline inline-flex items-center gap-1 shrink-0"
                >
                  Acessar Diretório Global <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PASSO A PASSO DA JORNADA DE ADESÃO (6 ETAPAS VISUAIS) */}
      <section id="etapas" className="py-12 md:py-20 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Processo Formal de Entrada"
            title="A Jornada de Adesão em 6 Passos"
            titleAccent="Rigor Técnico & Agilidade Institucional"
            description="Entenda o percurso que sua organização percorrerá desde o compromisso da alta liderança até a integração oficial e a publicação anual de progresso."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ETAPAS_ADESAO.map((etapa) => {
              const IconEtapa = ICON_MAP[etapa.icone] || FileCheck;
              return (
                <div 
                  key={etapa.numero}
                  className={cn(
                    "rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all shadow-sm hover:shadow-md",
                    etapa.destaque 
                      ? "bg-un-blue text-white border-2 border-un-gold/60 relative overflow-hidden" 
                      : "bg-slate-50 text-slate-900 border-slate-200 hover:border-un-blue"
                  )}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "text-3xl font-display font-black tracking-tight",
                        etapa.destaque ? "text-un-gold" : "text-un-blue"
                      )}>
                        {etapa.numero}
                      </span>
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                        etapa.destaque ? "bg-white/10 text-white border border-white/15" : "bg-white text-slate-600 border border-slate-200"
                      )}>
                        {etapa.tempo}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className={cn(
                        "text-lg font-display font-black uppercase tracking-tight",
                        etapa.destaque ? "text-white" : "text-slate-900"
                      )}>
                        {etapa.titulo}
                      </h4>
                      <p className={cn(
                        "text-xs leading-relaxed font-light",
                        etapa.destaque ? "text-slate-200" : "text-slate-600"
                      )}>
                        {etapa.descricao}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200/40 mt-4">
                    {etapa.numero === '02' ? (
                      <a 
                        href={CONTATO_ENGAJAMENTO.modeloCartaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[42px] px-4 py-2 rounded-full bg-un-gold text-un-blue hover:bg-white transition-all text-xs font-black uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer w-full justify-center shadow-sm"
                      >
                        <Download className="w-3.5 h-3.5" /> Baixar Modelo da Carta
                      </a>
                    ) : etapa.numero === '03' ? (
                      <a 
                        href={CONTATO_ENGAJAMENTO.portalInscricaoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[42px] px-4 py-2 rounded-full border border-un-blue text-un-blue hover:bg-un-blue hover:text-white transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer w-full justify-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Formulário Global ONU
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => scrollToSection('contato')}
                        className={cn(
                          "min-h-[42px] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer w-full justify-center",
                          etapa.destaque 
                            ? "bg-white/15 text-white hover:bg-white hover:text-un-blue" 
                            : "border border-slate-300 text-slate-700 hover:border-un-blue hover:text-un-blue"
                        )}
                      >
                        {etapa.acao} <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Card Destaque: A Carta de Compromisso do CEO */}
          <div className="mt-8 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div className="space-y-2 max-w-2xl text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold">
                Documento Estatutário Obrigatório
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-black">
                A Carta de Compromisso da Alta Liderança
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                A carta deve ser obrigatoriamente assinada pelo CEO, Presidente ou líder máximo da empresa no Brasil, declarando apoio inequívoco aos 10 Princípios da ONU e concordância com os relatórios anuais de progresso.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a 
                href={CONTATO_ENGAJAMENTO.modeloCartaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[46px] w-full sm:w-auto px-6 py-3 rounded-full bg-un-gold text-un-blue hover:bg-white transition-all text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Download className="w-4 h-4" /> Baixar Modelo Oficial
              </a>
              <button
                type="button"
                onClick={() => scrollToSection('contato')}
                className="min-h-[46px] w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer border border-white/15"
              >
                Tirar Dúvidas com Suporte
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FORMULÁRIO DE CONTATO & CADASTRO DE INTERESSE */}
      <section id="contato" className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Bloco Editorial Esquerda (5 Colunas) */}
            <div className="lg:col-span-5 space-y-6">
              <span className="px-3.5 py-1 bg-un-gold/20 text-un-blue rounded-full text-xs font-bold uppercase tracking-wider border border-un-gold/30 inline-block">
                Atendimento Personalizado
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-slate-900 leading-[1.1]">
                Fale com a Equipe de <span className="text-un-blue block mt-1">Engajamento & Adesão</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                Nossos especialistas apoiam sua empresa em todas as etapas: desde o enquadramento na tabela de contribuições até o preenchimento do formulário no portal da ONU e a reunião de onboarding.
              </p>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-4 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Canais Diretos da Rede Brasil:</h4>
                
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-un-blue/5 text-un-blue flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">E-mail de Adesão:</span>
                      <a href="mailto:engajamento@pactoglobal.org.br" className="font-bold text-un-blue hover:underline text-sm">
                        engajamento@pactoglobal.org.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-un-blue/5 text-un-blue flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">Horário de Atendimento:</span>
                      <span className="text-slate-700 font-medium">Segunda a Sexta, das 9h às 18h (Brasília)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-un-blue/5 text-un-blue flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block font-semibold">Portal Global das Nações Unidas:</span>
                      <a href="https://unglobalcompact.org" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-un-blue font-medium inline-flex items-center gap-1">
                        unglobalcompact.org <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Formulário de Interesse (7 Colunas) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm">
              
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-slate-900 uppercase">
                    Falta só enviar o e-mail
                  </h3>
                  {/* A confirmação descreve o que de fato aconteceu: o e-mail foi
                      aberto com os dados preenchidos, mas quem envia é a pessoa.
                      Dizer "recebido" aqui seria falso — nada chega à RBPG até o
                      envio acontecer. */}
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Abrimos seu programa de e-mail com a mensagem pronta para{' '}
                    <strong>{CONTATO_ENGAJAMENTO.email}</strong>, já com os dados da{' '}
                    <strong>{formData.empresa}</strong>. Confira e clique em enviar — a equipe de
                    Engajamento responde em até 2 dias úteis.
                  </p>
                  <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                    Se nada abriu, escreva direto para{' '}
                    <a
                      href={`mailto:${CONTATO_ENGAJAMENTO.email}`}
                      className="font-semibold text-un-blue hover:underline"
                    >
                      {CONTATO_ENGAJAMENTO.email}
                    </a>
                    .
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="min-h-[44px] px-6 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-lg font-display font-black uppercase text-slate-900">
                      Cadastro de Interesse & Informações
                    </h3>
                    <p className="text-xs text-slate-500 font-light">Preencha os campos abaixo para receber suporte direto de adesão</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Nome:*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full min-h-[44px] px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Sobrenome:*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Seu sobrenome"
                        value={formData.sobrenome}
                        onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
                        className="w-full min-h-[44px] px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        E-mail Corporativo:*
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="nome@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full min-h-[44px] px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Nome da Organização:*
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Razão Social ou Nome Fantasia"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full min-h-[44px] px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Cargo / Função:
                      </label>
                      <input 
                        type="text" 
                        placeholder="Ex: Diretor de Sustentabilidade, CEO"
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        className="w-full min-h-[44px] px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                        Porte / Faixa Estimada:
                      </label>
                      <select
                        value={formData.porte}
                        onChange={(e) => setFormData({ ...formData, porte: e.target.value })}
                        className="w-full min-h-[44px] px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors cursor-pointer"
                      >
                        <option value="PME (< USD 25M)">PME (Receita até USD 25M)</option>
                        <option value="Média Empresa (USD 25M a 250M)">Média Empresa (USD 25M a 250M)</option>
                        <option value="Grande Empresa (> USD 250M)">Grande Empresa (&gt; USD 250M)</option>
                        <option value="Subsidiária Estrangeira">Subsidiária de Multinacional Estrangeira</option>
                        <option value="Não Empresarial (ONG / Universidade)">Não Empresarial (ONG / Academia / Setor Público)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                      Dúvida ou Mensagem:
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="Como podemos apoiar o processo de adesão da sua empresa?"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input 
                      type="checkbox"
                      id="lgpd"
                      required
                      checked={formData.lgpd}
                      onChange={(e) => setFormData({ ...formData, lgpd: e.target.checked })}
                      className="w-4 h-4 mt-0.5 rounded text-un-blue focus:ring-un-blue cursor-pointer"
                    />
                    <label htmlFor="lgpd" className="text-[11px] text-slate-600 leading-tight cursor-pointer">
                      Concordo com o tratamento dos dados institucionais para fins de contato e orientação sobre a adesão ao Pacto Global da ONU, nos termos da LGPD e Política de Privacidade.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full min-h-[48px] px-6 py-3 rounded-full bg-un-blue text-white hover:bg-un-gold hover:text-un-blue transition-all text-xs font-black uppercase tracking-wider shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" /> Enviar Cadastro de Interesse
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 8. FAQ INTERATIVO DE ADESÃO */}
      <section id="faq" className="py-12 md:py-20 bg-white border-t border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-5xl">
          
          <SectionHeader 
            badge="Esclarecimentos Oficiais"
            title="Perguntas Frequentes sobre Adesão"
            titleAccent="Tire suas Dúvidas Técnicas"
            description="As respostas mais procuradas por líderes corporativos sobre prazos, documentação, custos e prestação de contas no Pacto Global da ONU."
            className="mb-10 text-center"
          />

          <div className="space-y-3">
            {FAQ_ADESAO.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                      {item.pergunta}
                    </span>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-transform",
                      isOpen ? "bg-un-blue text-white rotate-180 border-un-blue" : "bg-white text-slate-500 border-slate-200"
                    )}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-700 leading-relaxed font-light border-t border-slate-200/40 bg-white">
                      {item.resposta}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10 pt-6 border-t border-slate-100">
            <p className="text-xs text-slate-600 mb-3">
              Não encontrou a resposta que procurava?
            </p>
            <a 
              href="mailto:engajamento@pactoglobal.org.br"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-un-blue text-un-blue hover:bg-un-blue hover:text-white transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" /> Falar com o time de suporte
            </a>
          </div>

        </div>
      </section>

      {/* 9. DOCK FLUTUANTE DE NAVEGAÇÃO RÁPIDA (DISCRETO & 100% IN-PAGE) */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 animate-fade-in">
          
          {/* Menu Flutuante Expandido */}
          {floatingNavOpen && (
            <div className="bg-slate-900/95 backdrop-blur-md border border-white/20 text-white rounded-3xl p-3 shadow-2xl flex flex-col gap-1.5 animate-fade-in-up mb-1 w-52">
              <span className="text-[9px] font-mono uppercase tracking-widest text-un-gold px-3 pt-1 font-bold">
                Saltar para Seção:
              </span>
              <button 
                type="button"
                onClick={() => scrollToSection('beneficios')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Award className="w-3 h-3 text-un-gold" /> Benefícios
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('evidencia-executiva')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <TrendingUp className="w-3 h-3 text-un-gold" /> Evidência Executiva
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('publicos')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Users className="w-3 h-3 text-un-gold" /> Quem Pode Aderir
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('simulador')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-3 h-3 text-un-gold" /> Simulador de Anuidade
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('niveis-participacao')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Globe className="w-3 h-3 text-un-gold" /> Níveis de Adesão
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('etapas')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileSignature className="w-3 h-3 text-un-gold" /> 6 Etapas
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('contato')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer text-emerald-300"
              >
                <Send className="w-3 h-3" /> Fale Conosco
              </button>
              <button 
                type="button"
                onClick={() => scrollToSection('faq')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-3 h-3 text-un-gold" /> FAQ
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