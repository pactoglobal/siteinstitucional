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
  XCircle,
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
import { AdesaoHero } from '../components/adesao/AdesaoHero';
import { BeneficiosBento } from '../components/adesao/BeneficiosBento';
import { EquipeAdesao } from '../components/adesao/EquipeAdesao';
import { WhatsAppFab } from '../components/adesao/WhatsAppFab';
import { FotoFundo } from '../components/adesao/FotoFundo';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import { PAISES } from '../utils/paises';
import {
  ADESAO_STATS,
  BENEFICIOS_ADESAO,
  REQUISITOS_MINIMOS,
  REQUISITOS_NOTA,
  FORMULARIO_ADESAO,
  TABELA_CONTRIBUICOES,
  REGRAS_CONTRIBUICAO,
  ETAPAS_ADESAO,
  FAQ_ADESAO,
  CONTATO_ENGAJAMENTO,
  CEO_STUDY_STATS,
} from '../data/comoAderir';

// Classes dos campos do formulário de interesse
const ROTULO_CLASSES = 'text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1.5';
const CAMPO_CLASSES =
  'w-full min-h-[44px] px-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-un-blue transition-colors';

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

export const ParticiparPage = ({ navigate }) => {
  // Estado do Simulador de Anuidade
  // Dois perfis apenas: participante (tabela cheia) e subsidiaria (50%).
  // Nao empresarial e subsidiaria isenta sairam na revisao da RBPG — nao
  // existe mais adesao de ONG nem anuidade isenta.
  const [tipoOrg, setTipoOrg] = useState('participante'); // 'participante' | 'subsidiaria'
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
    pais: 'Brasil',
    cargo: '',
    nivel: '',
    empresa: '',
    tipoOrganizacao: 'Empresa',
    funcionarios: '',
    optIn: '',
    mensagem: '',
    lgpd: false
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
    const faixaBase = TABELA_CONTRIBUICOES[selectedFaixaIndex] || TABELA_CONTRIBUICOES[8];
    if (tipoOrg === 'subsidiaria') {
      const valorFinalUSD = Math.round(faixaBase.anuidadeUSD * 0.5);
      return {
        anuidadeUSD: valorFinalUSD,
        anuidadeFormatada: `USD ${valorFinalUSD.toLocaleString('pt-BR')}`,
        regra: 'Empresas que fazem parte de um grupo já participante do Pacto Global pagam 50% do valor da sua faixa, seja a matriz brasileira ou estrangeira.',
      };
    }

    // Empresa participante
    return {
      anuidadeUSD: faixaBase.anuidadeUSD,
      anuidadeFormatada: faixaBase.anuidadeFormatada,
      regra: 'Contribuição proporcional ao faturamento bruto anual.',
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
      `Primeiro nome: ${formData.nome}`,
      `Sobrenome: ${formData.sobrenome}`,
      `E-mail corporativo: ${formData.email}`,
      `País: ${formData.pais}`,
      `Cargo: ${formData.cargo}`,
      `Nível hierárquico: ${formData.nivel}`,
      `Organização: ${formData.empresa}`,
      `Tipo de organização: ${formData.tipoOrganizacao}`,
      `Número de funcionários: ${formData.funcionarios}`,
      `${FORMULARIO_ADESAO.optInPergunta} ${formData.optIn === 'Yes' ? 'Sim' : 'Não'}`,
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
      
      {/* 1. HERO COM FOTOS EM ROTAÇÃO */}
      <AdesaoHero
        onQueroAderir={() => scrollToSection('contato')}
        onSimular={() => scrollToSection('simulador')}
        onVerEtapas={() => scrollToSection('etapas')}
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
                onClick={() => scrollToSection('evidencia-executiva')}
                className="min-h-[42px] px-4 py-2 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-un-blue hover:text-white transition-all inline-flex items-center gap-2 cursor-pointer shrink-0 border border-slate-200/60"
              >
                <TrendingUp className="w-3.5 h-3.5 text-un-gold" /> Evidência Executiva
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
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

      {/* 3. BENEFÍCIOS DA PARTICIPAÇÃO (BENTO GRID COM FOTOS) */}
      <BeneficiosBento navigate={navigate} />

      {/* 4. QUEM PODE PARTICIPAR (SEGMENTAÇÃO) */}
      <section id="publicos" className="py-12 md:py-20 bg-white border-y border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
          
          <SectionHeader 
            badge="Elegibilidade & Categorias"
            title="Quem Pode Aderir à Rede Brasil?"
            titleAccent="Uma Iniciativa para Empresas Privadas"
            description="O Pacto Global da ONU – Rede Brasil reúne empresas privadas de todos os portes e setores. Da pequena empresa ao grande conglomerado, toda companhia legalmente constituída pode aderir ao assumir o compromisso de incorporar os Dez Princípios à sua estratégia e às suas operações."
            className="mb-8"
          />

          {/* Requisito de porte em destaque: é a primeira pergunta de quase toda
              empresa que chega na página. */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-un-gold/35 bg-un-gold/10 px-5 py-4 sm:px-6 sm:py-5">
            <div className="flex items-center gap-3 shrink-0">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-un-blue text-white shrink-0">
                <UserCheck className="h-5 w-5" />
              </span>
              <span className="font-display text-3xl font-black leading-none text-un-blue tabular-nums">
                10+
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              <strong className="font-bold text-slate-900">
                Adesão voltada a empresas a partir de 10 funcionários.
              </strong>{' '}
              Empresas menores podem acompanhar a agenda do Pacto Global da ONU – Rede Brasil,
              ainda sem a condição de participante.
            </p>
          </div>

          {/* Requisitos mínimos, na redação da equipe de Adesão. Substituem a
              antiga lista "O que impede a adesão" e os cards de categoria. */}
          <div className="relative overflow-hidden rounded-[1.75rem] bg-un-blue p-6 text-white shadow-xl sm:p-10">
            <img
              src={`${import.meta.env.BASE_URL}logo-pacto-white.png`}
              alt=""
              aria-hidden="true"
              className="absolute right-6 top-6 h-10 w-auto opacity-90 sm:right-10 sm:top-8 sm:h-12"
            />
            <h3 className="pr-24 font-display text-2xl font-black uppercase tracking-tight sm:text-3xl">
              Requisitos mínimos
            </h3>
            <p className="mt-1 text-sm font-light text-slate-200 sm:text-base">
              O essencial para a sua empresa poder aderir:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
              {REQUISITOS_MINIMOS.map((requisito) => (
                <li key={requisito} className="flex items-start gap-3 text-sm leading-relaxed text-slate-100">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  <span>{requisito}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/15 pt-4 text-xs font-light text-slate-300">
              {REQUISITOS_NOTA}
            </p>
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
            description="Consulte a anuidade correspondente ao faturamento bruto anual da sua empresa e entenda a regra aplicada às subsidiárias."
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
                <span id="simulador-perfil-label" className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  1. Perfil da Organização:
                </span>
                <div role="radiogroup" aria-labelledby="simulador-perfil-label" className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={tipoOrg === 'participante'}
                    onClick={() => setTipoOrg('participante')}
                    className={cn(
                      "p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer flex flex-col justify-between",
                      tipoOrg === 'participante'
                        ? "bg-un-blue text-white border-un-blue shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <span className="font-bold block">Empresa Participante</span>
                    <span className="text-[11px] opacity-85 mt-1 leading-snug">Empresa que adere pela primeira vez ao Pacto Global. Paga o valor cheio da sua faixa.</span>
                  </button>

                  <button
                    type="button"
                    role="radio"
                    aria-checked={tipoOrg === 'subsidiaria'}
                    onClick={() => setTipoOrg('subsidiaria')}
                    className={cn(
                      "p-3 rounded-2xl text-left border transition-all text-xs cursor-pointer flex flex-col justify-between",
                      tipoOrg === 'subsidiaria'
                        ? "bg-un-blue text-white border-un-blue shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    )}
                  >
                    <span className="font-bold block">Subsidiária</span>
                    <span className="text-[11px] opacity-85 mt-1 leading-snug">Empresa de um grupo que já participa do Pacto Global, no Brasil ou no exterior. Paga 50% do valor da faixa.</span>
                  </button>
                </div>
              </div>

              {/* A faixa de faturamento vale para os dois perfis: a subsidiaria
                  paga 50% da mesma tabela, entao tambem precisa escolher. */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block" htmlFor="simulador-faixa">
                  2. Faixa de Faturamento Bruto Anual:
                </label>
                <select
                  id="simulador-faixa"
                  value={selectedFaixaIndex}
                  onChange={(e) => setSelectedFaixaIndex(Number(e.target.value))}
                  className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-un-blue transition-colors cursor-pointer"
                >
                  {TABELA_CONTRIBUICOES.map((faixa, fIdx) => (
                    <option key={fIdx} value={fIdx}>
                      {faixa.faixaUSD}
                    </option>
                  ))}
                </select>
              </div>

              {/* Card de Regra e Nota Informativa */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                <Info className="w-4 h-4 text-un-blue shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {simuladorResultado.regra} Os valores oficiais são tabelados em dólar e faturados anualmente pela Rede Brasil, convertidos pelo câmbio oficial da data de emissão.
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
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Periodicidade:</span>
                    <strong className="text-white">Anual</strong>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Moeda Base da ONU:</span>
                    <strong className="text-white">Dólar Americano (USD)</strong>
                  </div>
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
                  Dúvidas sobre o faturamento? <a href={`mailto:${CONTATO_ENGAJAMENTO.email}`} className="underline hover:text-white font-medium">Fale com a equipe de Adesão</a>
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
                {TABELA_CONTRIBUICOES.length} Faixas Regulamentadas
              </span>
            </div>

            <div className="overflow-x-auto no-scrollbar -webkit-overflow-scrolling-touch">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                    <th className="py-3 px-4">Faixa de Faturamento (USD)</th>
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
                <div
                  key={rIdx}
                  className="group relative isolate flex min-h-[240px] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white shadow-sm"
                >
                  <FotoFundo imagem={regra.imagem} />
                  <h5 className="text-sm font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-un-gold shrink-0" />
                    {regra.titulo}
                  </h5>
                  <p className="mt-1.5 text-xs text-slate-200 leading-relaxed font-light">{regra.descricao}</p>
                </div>
              ))}
            </div>

            {/* Link para o Diretório Global de Participantes */}
            <div className="mt-10 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-amber-900">
                <Globe className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Consulte as mais de 25.000 organizações ativas no <strong>Diretório Público Global de Participantes</strong> da ONU.</span>
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
      </section>

      {/* 5.1 EVIDÊNCIA EXECUTIVA & DADOS GLOBAIS (ACCENTURE & UNGC CEO STUDY) */}
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
                className="group relative isolate flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 sm:p-7 ring-1 ring-white/15 transition-shadow duration-300 hover:shadow-2xl"
              >
                <FotoFundo imagem={stat.imagem} />
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full border border-un-gold/35 bg-un-blue/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-un-gold backdrop-blur-md">
                    {stat.destaque}
                  </span>
                  <TrendingUp className="w-4 h-4 text-un-gold" />
                </div>
                <div className="mt-16">
                  <div className="text-5xl sm:text-6xl font-display font-black text-un-gold tracking-tight">
                    {stat.porcentagem}
                  </div>
                  <p className="mt-2 text-[13px] text-slate-100 font-light leading-relaxed">
                    {stat.descricao}
                  </p>
                  <div className="pt-3 mt-4 border-t border-white/15 flex items-center justify-between text-[10px] text-slate-300">
                    <span>Accenture CEO Study</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-un-gold" />
                  </div>
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
              onClick={() => scrollToSection('contato')}
              className="px-5 py-2.5 rounded-full bg-un-gold text-un-blue font-bold uppercase tracking-wider text-[11px] hover:bg-white transition-colors cursor-pointer shrink-0"
            >
              Falar com a equipe de Adesão
            </button>
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
                    "group relative isolate flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 sm:p-7 text-white shadow-sm transition-shadow duration-300 hover:shadow-2xl",
                    etapa.destaque ? "ring-2 ring-un-gold/70" : "ring-1 ring-un-blue/10"
                  )}
                >
                  <FotoFundo imagem={etapa.imagem} />

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-4xl font-display font-black tracking-tight text-un-gold drop-shadow">
                      {etapa.numero}
                    </span>
                    <span className="rounded-full border border-white/25 bg-un-blue/60 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                      {etapa.tempo}
                    </span>
                  </div>

                  <div className="mt-16 space-y-4">
                    <div className="space-y-1.5">
                      <h4 className="text-lg sm:text-xl font-display font-black uppercase leading-tight tracking-tight">
                        {etapa.titulo}
                      </h4>
                      <p className="text-[13px] leading-relaxed font-light text-slate-100">
                        {etapa.descricao}
                      </p>
                    </div>

                    {/* O que a Rede Brasil faz nesta etapa. A empresa não percorre
                        o processo sozinha, e isso não aparecia em lugar nenhum. */}
                    {etapa.apoio && (
                      <div className="flex items-start gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 backdrop-blur-md">
                        <UserCheck className="w-3.5 h-3.5 shrink-0 mt-0.5 text-un-gold" />
                        <p className="text-[11px] leading-snug font-light text-slate-100">
                          {etapa.apoio}
                        </p>
                      </div>
                    )}

                    {/* O portal da ONU é o único link externo que sobra nos cards.
                        O botão "Baixar Modelo da Carta" saiu: apontava para uma URL
                        que redireciona para o formulário de candidatura, ou seja,
                        prometia um download que não existe. */}
                    {etapa.id === 'portal' ? (
                      <a
                        href={CONTATO_ENGAJAMENTO.portalInscricaoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[42px] px-4 py-2 rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-un-blue transition-all text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer w-full justify-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Abrir portal da ONU
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => scrollToSection(etapa.id === 'anuidade' ? 'simulador' : 'contato')}
                        className={cn(
                          "min-h-[42px] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all cursor-pointer w-full justify-center",
                          etapa.destaque
                            ? "bg-un-gold text-un-blue hover:bg-white"
                            : "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-un-blue"
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
                Fale com a Equipe <span className="text-un-blue block mt-1">de Adesão</span>
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
                      <a href={`mailto:${CONTATO_ENGAJAMENTO.email}`} className="font-bold text-un-blue hover:underline text-sm">
                        {CONTATO_ENGAJAMENTO.email}
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
                    Adesão responde em até 2 dias úteis.
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
                      <label className={ROTULO_CLASSES} htmlFor="contato-nome">
                        Primeiro nome*
                      </label>
                      <input
                        id="contato-nome"
                        type="text"
                        required
                        placeholder="Seu primeiro nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className={CAMPO_CLASSES}
                      />
                    </div>
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-sobrenome">
                        Sobrenome*
                      </label>
                      <input
                        id="contato-sobrenome"
                        type="text"
                        required
                        placeholder="Seu sobrenome"
                        value={formData.sobrenome}
                        onChange={(e) => setFormData({ ...formData, sobrenome: e.target.value })}
                        className={CAMPO_CLASSES}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-email">
                        E-mail corporativo*
                      </label>
                      <input
                        id="contato-email"
                        type="email"
                        required
                        placeholder="nome@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={CAMPO_CLASSES}
                      />
                    </div>
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-pais">
                        País*
                      </label>
                      <select
                        id="contato-pais"
                        required
                        value={formData.pais}
                        onChange={(e) => setFormData({ ...formData, pais: e.target.value })}
                        className={cn(CAMPO_CLASSES, 'cursor-pointer')}
                      >
                        {PAISES.map((opcao) => (
                          <option key={opcao} value={opcao}>{opcao}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-cargo">
                        Cargo*
                      </label>
                      <input
                        id="contato-cargo"
                        type="text"
                        required
                        placeholder="Ex.: Diretora de Sustentabilidade"
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        className={CAMPO_CLASSES}
                      />
                    </div>
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-nivel">
                        Nível hierárquico*
                      </label>
                      <select
                        id="contato-nivel"
                        required
                        value={formData.nivel}
                        onChange={(e) => setFormData({ ...formData, nivel: e.target.value })}
                        className={cn(CAMPO_CLASSES, 'cursor-pointer')}
                      >
                        <option value="" disabled>Selecione</option>
                        {FORMULARIO_ADESAO.niveisHierarquicos.map((opcao) => (
                          <option key={opcao} value={opcao}>{opcao}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-empresa">
                        Organização*
                      </label>
                      <input
                        id="contato-empresa"
                        type="text"
                        required
                        placeholder="Razão social ou nome fantasia"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className={CAMPO_CLASSES}
                      />
                    </div>
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-tipo">
                        Tipo de organização*
                      </label>
                      <select
                        id="contato-tipo"
                        required
                        value={formData.tipoOrganizacao}
                        onChange={(e) => setFormData({ ...formData, tipoOrganizacao: e.target.value })}
                        className={cn(CAMPO_CLASSES, 'cursor-pointer')}
                      >
                        {FORMULARIO_ADESAO.tiposOrganizacao.map((opcao) => (
                          <option key={opcao} value={opcao}>{opcao}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={ROTULO_CLASSES} htmlFor="contato-funcionarios">
                        Número de funcionários*
                      </label>
                      <select
                        id="contato-funcionarios"
                        required
                        value={formData.funcionarios}
                        onChange={(e) => setFormData({ ...formData, funcionarios: e.target.value })}
                        className={cn(CAMPO_CLASSES, 'cursor-pointer')}
                      >
                        <option value="" disabled>Selecione</option>
                        {FORMULARIO_ADESAO.numeroFuncionarios.map((opcao) => (
                          <option key={opcao} value={opcao}>{opcao}</option>
                        ))}
                      </select>
                    </div>
                    <fieldset>
                      <legend className={ROTULO_CLASSES}>{FORMULARIO_ADESAO.optInPergunta}*</legend>
                      <div className="flex min-h-[44px] items-center gap-6">
                        {[['Yes', 'Sim'], ['No', 'Não']].map(([valor, rotulo]) => (
                          <label key={valor} className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                            <input
                              type="radio"
                              name="contato-optin"
                              value={valor}
                              required
                              checked={formData.optIn === valor}
                              onChange={(e) => setFormData({ ...formData, optIn: e.target.value })}
                              className="h-4 w-4 cursor-pointer text-un-blue focus:ring-un-blue"
                            />
                            {rotulo}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div>
                    <label className={ROTULO_CLASSES} htmlFor="contato-mensagem">
                      Dúvida ou mensagem
                    </label>
                    <textarea 
                      id="contato-mensagem"
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
                      Concordo com o tratamento dos dados institucionais para fins de contato e orientação sobre a adesão ao Pacto Global da ONU, nos termos da LGPD e da{' '}
                      <a
                        href="https://www.pactoglobal.org.br/politica-de-privacidade/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-un-blue underline hover:text-un-gold"
                      >
                        Política de Privacidade
                      </a>
                      .
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
                      {item.link && (
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 font-bold text-un-blue hover:underline inline-flex items-center gap-1.5"
                        >
                          {item.link.rotulo} <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
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
              href={`mailto:${CONTATO_ENGAJAMENTO.email}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-un-blue text-un-blue hover:bg-un-blue hover:text-white transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" /> Falar com a equipe de Adesão
            </a>
          </div>

        </div>
      </section>

      {/* 9. DOCK FLUTUANTE DE NAVEGAÇÃO RÁPIDA (DISCRETO & 100% IN-PAGE) */}
      {/* 9. PERFIS DA ÁREA DE ADESÃO (some enquanto não houver contatos cadastrados) */}
      <EquipeAdesao />

      <WhatsAppFab
        numero={CONTATO_ENGAJAMENTO.whatsapp}
        mensagem={CONTATO_ENGAJAMENTO.whatsappMensagem}
        onPrevia={CONTATO_ENGAJAMENTO.whatsappPrevia ? () => scrollToSection('contato') : undefined}
      />

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
                onClick={() => scrollToSection('evidencia-executiva')}
                className="px-3 py-1.5 rounded-xl text-xs font-medium hover:bg-white/15 text-left transition-colors flex items-center gap-2 cursor-pointer"
              >
                <TrendingUp className="w-3 h-3 text-un-gold" /> Evidência Executiva
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