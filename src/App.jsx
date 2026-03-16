import React, { useState, useEffect } from 'react';
import { Menu, Search, ArrowRight, Globe, ChevronDown, X, Play, BarChart3, Users, User, LogIn, FileText, BookOpen, Target, Briefcase, Building2, Calendar, ChevronLeft, ChevronRight, MapPin, Landmark, TrendingUp, ShieldCheck, Award, FileDown, UploadCloud, Edit3, MessageCircle } from 'lucide-react';

/**
 * ARTEFATO FINAL: UN GLOBAL COMPACT DESIGN SYSTEM (v13)
 * ---------------------------------------------------------
 * Componentes Inclusos:
 * 1. Super Menu (Overlay Fullscreen + Busca + Mobile Nav)
 * 2. Capsule Header (Sticky + Clean + Logos)
 * 3. Hero Carousel (Curvo + Sem Borda + Centralizado)
 * 4. Impact Section (Dados + Mapa Pontilhado)
 * 5. Bento Grid (Notícias Assimétricas)
 * 6. Footer Institucional (Apoiadores + Links)
 */

// --- UTILS ---
const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- DADOS E MOCKS ---

const HERO_SLIDES = [
  {
    id: 1,
    badge: "Ambição 2030",
    title: "Unindo Empresas,",
    subtitle: "Mundo Melhor",
    desc: "A maior iniciativa de sustentabilidade corporativa do mundo. Lidere a mudança com os Dez Princípios.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
    ctaPrimary: "Quero Aderir",
    ctaSecondary: "Ver o Manifesto"
  },
  {
    id: 2,
    badge: "Meio Ambiente",
    title: "Ação Climática",
    subtitle: "Agora",
    desc: "Comprometa-se com metas baseadas na ciência para reduzir emissões e garantir o futuro do planeta.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    ctaPrimary: "Conheça o Hub",
    ctaSecondary: "Net Zero"
  },
  {
    id: 3,
    badge: "Direitos Humanos",
    title: "Equidade é",
    subtitle: "Prioridade",
    desc: "Promovendo a igualdade de gênero e raça nas posições de liderança corporativa brasileira.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    ctaPrimary: "Elas Lideram",
    ctaSecondary: "Saiba Mais"
  }
];

const MENU_DESTAQUES = [
  {
    label: "Pacto Global",
    icon: Globe,
    subItems: [
      { label: "Sobre Nós" },
      { label: "Rede Brasil" },
      { label: "Governança" },
      { label: "Apoiadores" },
      { label: "Parceiros" }
    ]
  },
  {
    label: "Nossos Eventos",
    icon: Calendar,
    subItems: [
      { label: "Institucionais" },
      { label: "Temáticos" },
      { label: "Agenda de Eventos" }
    ]
  },
  {
    label: "Notícias",
    icon: FileText,
    subItems: [
      { label: "Últimas Notícias" },
      { label: "Destaques" },
      { label: "Sala de Imprensa" }
    ]
  }
];

const MENU_EXPLORAR = [
  {
    label: "Nossa Agenda",
    icon: Target,
    subItems: [
      { label: "10 Princípios" }, // Typo fix: user asked for "10 Princípio", making it plural for correctness
      { label: "ODS" },
      { label: "Ambição 2030" },
      { label: "Movimentos" },
      { label: "Plataformas de Ação" }
    ]
  },
  {
    label: "Programas",
    icon: Briefcase,
    subItems: [
      { label: "HUBs ODS & Multiplicadores" },
      { label: "Liderança de Impacto" },
      { label: "Diálogos DH & DEI" },
      { label: "CFO Coalition" },
      { label: "COPs" }
    ]
  },
  {
    label: "Conhecimento",
    icon: BookOpen,
    subItems: [
      { label: "Publicações" },
      { label: "Academy" },
      { label: "Cursos & Workshops" },
      { label: "ESG e sustentabilidade corporativa" },
      { label: "Guias e relatórios" }
    ]
  }
];

const MENU_PARTICIPAR = [
  {
    label: "Participação",
    icon: Users,
    subItems: [
      { label: "Quero aderir" },
      { label: "Benefícios da participação" },
      { label: "Critérios e requisitos" },
      { label: "Etapas de adesão" },
      { label: "FAQ" }
    ]
  },
  {
    label: "Empresas Participantes",
    icon: Building2,
    subItems: [
      { label: "Quem faz parte" },
      { label: "Casos e Boas Práticas" }
    ]
  },
  {
    label: "CoP",
    icon: FileText,
    subItems: [
      { id: "cop", label: "O que é CoP" }, // Link mantido
      { label: "Como enviar a CoP" },
      { label: "Prazos e Orientações" },
      { label: "FAQ" }
    ]
  },
  {
    label: "Parceria e Patrocínio",
    icon: LogIn,
    subItems: [
      { label: "Quero Patrocinar" },
      { label: "Quero ser Parceiro" },
      { label: "Quero Apoiar Iniciativas" }
    ]
  }
];

// --- COMPONENTES ATÔMICOS ---

const Button = ({ children, variant = 'primary', icon: Icon, className = '', onClick }) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wider text-[10px] md:text-xs lg:text-sm transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#CCB146] focus:ring-offset-2 shrink-0";

  const variants = {
    primary: "bg-[#297D6D] text-white hover:bg-[#1E5C4F] hover:scale-105 shadow-lg shadow-[#297D6D]/20 px-4 py-3 md:px-6 md:py-3.5",
    secondary: "bg-[#1E3250] text-white hover:bg-[#2A4060] px-4 py-3 md:px-6 md:py-3.5",
    outline: "border-2 border-white/30 text-white hover:bg-white hover:text-[#1E3250] backdrop-blur-sm px-4 py-3 md:px-6 md:py-3.5",
    ghost: "text-[#1E3250] hover:bg-gray-100 px-3 py-2 md:px-4 md:py-2",
    login: "text-white hover:text-[#CCB146] font-bold px-3 py-2 flex items-center gap-2"
  };

  return (
    <button onClick={onClick} className={cn(base, variants[variant], className)}>
      {Icon && <Icon className="mr-1.5 md:mr-2 w-3.5 h-3.5 md:w-4 md:h-4" />}
      {children}
    </button>
  );
};

const Badge = ({ children, color = "bg-[#CCB146]" }) => (
  <span className={cn("inline-block px-2.5 py-1 md:px-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#1E3250] mb-3 rounded-sm", color)}>
    {children}
  </span>
);

const SupporterLogos = ({ className, vertical = false, labelClass = "text-white/50" }) => (
  <div className={cn("flex flex-col items-center", className)}>
    <span className={cn("text-[8px] uppercase tracking-widest mb-2", labelClass)}>Apoiadores Institucionais</span>
    <div className={cn("flex items-center gap-4 md:gap-6", vertical ? "flex-col gap-4" : "")}>
      <div className="h-3 md:h-4 flex items-center text-white font-serif font-bold italic tracking-wide text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity">aegea</div>
      {!vertical && <div className="h-3 w-px bg-white/30"></div>}
      <div className="h-3 md:h-4 flex items-center text-white font-black tracking-tighter text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity"><span className="text-[#297D6D]">M</span>RV</div>
      {!vertical && <div className="h-3 w-px bg-white/30"></div>}
      <div className="h-3 md:h-4 flex items-center text-white font-sans font-bold text-[8px] md:text-[10px] tracking-tight uppercase opacity-90 hover:opacity-100 transition-opacity"><span className="text-[#297D6D] mr-1">Schneider</span> Electric</div>
    </div>
  </div>
);

// --- COMPONENTE: SUPER MENU (Overlay) ---

const SuperMenu = ({ isOpen, onClose, onRouteChange }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const handleNav = (id) => {
    if (id && onRouteChange) {
      onRouteChange(id);
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div className={cn(
      "fixed inset-0 z-[100] bg-[#1E3250] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col overflow-hidden",
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
    )}>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #CCB146; border-radius: 20px; }
      `}</style>

      <div className="flex justify-between items-center p-4 md:p-8 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={() => handleNav('home')} className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#1E3250] hover:scale-105 transition-transform">
            <Globe className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button onClick={() => handleNav('home')} className="flex flex-col text-left">
            <span className="text-white font-black text-sm md:text-lg uppercase tracking-tight leading-none hover:text-[#CCB146] transition-colors">UN Global Compact</span>
            <span className="text-[#CCB146] text-[8px] md:text-[10px] uppercase tracking-[0.2em] leading-none mt-1">Menu Principal</span>
          </button>
        </div>

        <button onClick={onClose} className="group flex items-center gap-2 md:gap-3 text-white hover:text-[#CCB146] transition-colors">
          <span className="hidden md:block text-xs font-bold uppercase tracking-widest">Fechar</span>
          <div className="p-2 md:p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 py-8 md:py-12">

          <div className="max-w-2xl mb-8 md:mb-12">
            <div className="relative group">
              <Search className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white/50 group-focus-within:text-[#CCB146] transition-colors" />
              <input
                type="text"
                placeholder="O QUE VOCÊ PROCURA?"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 md:py-5 pl-12 md:pl-16 pr-6 text-white placeholder-white/30 focus:outline-none focus:border-[#CCB146] focus:bg-white/10 transition-all text-xs md:text-sm lg:text-base uppercase tracking-widest font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 pb-8">
            {[
              { title: "Destaques", items: MENU_DESTAQUES },
              { title: "Explorar", items: MENU_EXPLORAR },
              { title: "Participar", items: MENU_PARTICIPAR }
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <h3 className="text-[#CCB146] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border-b border-white/10 pb-2">{section.title}</h3>
                <div className="flex flex-col gap-y-4 md:gap-y-6">
                  {section.items.map((item) => (
                    <div key={item.label}>
                      {item.subItems ? (
                        <div className="mb-2 md:mb-4">
                          <button
                            onClick={() => toggleExpand(item.label)}
                            className="flex items-center gap-3 text-white hover:text-[#CCB146] font-bold uppercase tracking-wide text-xs md:text-sm lg:text-base py-2 transition-colors w-full text-left"
                          >
                            {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white opacity-80 shrink-0" />}
                            {item.label}
                            <ChevronDown className={cn("ml-auto w-3 h-3 md:w-4 md:h-4 transition-transform", expandedItem === item.label && "rotate-180")} />
                          </button>
                          <div className={cn("overflow-hidden transition-all duration-300 pl-8 space-y-2", expandedItem === item.label ? "max-h-[500px] pt-4 opacity-100" : "max-h-0 opacity-0")}>
                            {item.subItems.map(sub => (
                              <button key={sub.label} onClick={(e) => { e.preventDefault(); sub.id ? handleNav(sub.id) : onClose(); }} className="block w-full text-left text-[#AECFE6] hover:text-white text-[10px] md:text-xs font-medium py-1">
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button onClick={() => handleNav(item.id)} className="flex items-center gap-3 text-white hover:text-[#CCB146] font-bold uppercase tracking-wide text-xs md:text-sm lg:text-base py-2 transition-colors w-full text-left">
                           {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white opacity-80 shrink-0" />}
                           {item.label}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12 border-t border-white/10 bg-[#0B1220] shrink-0">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-8">
          <div className="w-full xl:w-auto text-center xl:text-left">
            <Button variant="outline" className="w-full xl:w-auto px-8 py-4 text-xs font-bold border-white/20 text-white hover:bg-white hover:text-[#1E3250]">
              Área do Participante
            </Button>
          </div>
          <SupporterLogos className="opacity-80 scale-90 md:scale-100" />
          <div className="flex gap-6 text-white/40">
            {['LinkedIn', 'Instagram', 'YouTube'].map(s => (
              <a key={s} href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-[#CCB146] transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: CAPSULE HEADER (RED BULL STYLE) ---

const CapsuleHeader = ({ onRouteChange, currentRoute }) => {
  const [scrolled, setScrolled] = useState(false);
  const [superMenuOpen, setSuperMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SuperMenu isOpen={superMenuOpen} onClose={() => setSuperMenuOpen(false)} onRouteChange={onRouteChange} />

      <header className={cn(
        "fixed w-full z-50 transition-all duration-500",
        scrolled ? "bg-[#0B1220] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-5"
      )}>
        <div className="container mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between">
          
          {/* Logo e Menu Esquerda */}
          <div className="flex items-center gap-4 md:gap-6 w-1/4 xl:w-1/4">
            <button
              onClick={() => setSuperMenuOpen(true)}
              className="text-white hover:text-[#CCB146] transition-colors p-2 flex items-center gap-2"
            >
              <Menu className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button onClick={() => onRouteChange && onRouteChange('home')} className="flex items-center gap-2 group hidden sm:flex">
              <Globe className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#CCB146] transition-colors" />
              <div className="flex flex-col text-left">
                <span className="font-black text-[10px] md:text-xs tracking-tighter uppercase text-white leading-none">UN Global Compact</span>
                <span className="text-[8px] md:text-[9px] tracking-widest text-[#CCB146] uppercase leading-none mt-0.5">Rede Brasil</span>
              </div>
            </button>
          </div>

          {/* Pílula Central (Menu Rápido) */}
          <div className="hidden lg:flex w-1/2 xl:w-2/4 justify-center">
            <nav className="flex items-center gap-4 xl:gap-6 bg-[#0B1220]/60 backdrop-blur-md rounded-full px-6 xl:px-8 py-2.5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {/* Link Simples */}
              <button onClick={() => setSuperMenuOpen(true)} className="text-white hover:text-[#CCB146] text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                Sobre Nós
              </button>
              
              {/* Dropdown Programas */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white group-hover:text-[#CCB146] text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors py-1.5 whitespace-nowrap">
                  Programas <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-[#1E3250] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="py-3 flex flex-col">
                        {['HUBs ODS & Multiplicadores', 'Liderança de Impacto', 'Diálogos DH & DEI', 'CFO Coalition', 'COPs'].map(sub => (
                          <button key={sub} onClick={() => setSuperMenuOpen(true)} className="text-left px-5 py-3 text-[10px] xl:text-[11px] text-white/70 hover:text-[#CCB146] hover:bg-white/5 transition-colors uppercase tracking-widest font-bold whitespace-nowrap">
                            {sub}
                          </button>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Conhecimento */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white group-hover:text-[#CCB146] text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors py-1.5 whitespace-nowrap">
                  Conhecimento <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-[#1E3250] backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="py-3 flex flex-col">
                        {['Publicações', 'Academy', 'Cursos & Workshops', 'ESG e Sustentabilidade', 'Guias e Relatórios'].map(sub => (
                          <button key={sub} onClick={() => setSuperMenuOpen(true)} className="text-left px-5 py-3 text-[10px] xl:text-[11px] text-white/70 hover:text-[#CCB146] hover:bg-white/5 transition-colors uppercase tracking-widest font-bold whitespace-nowrap">
                            {sub}
                          </button>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Links Simples */}
              {['Eventos', 'Notícias'].map(item => (
                <button
                  key={item}
                  onClick={() => setSuperMenuOpen(true)}
                  className="text-white hover:text-[#CCB146] text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Ferramentas Direita */}
          <div className="flex items-center justify-end gap-2 md:gap-4 w-1/4 xl:w-1/4">
            <button onClick={() => setSuperMenuOpen(true)} className="text-white hover:text-[#CCB146] transition-colors p-2" title="Buscar">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button className="text-white hover:text-[#CCB146] transition-colors p-2" title="Área do Participante">
              <User className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <Button variant="primary" className="hidden md:flex text-[9px] px-4 py-2 bg-[#CCB146] hover:bg-[#b09633] text-[#1E3250] whitespace-nowrap">
              Quero Aderir
            </Button>
          </div>

        </div>
      </header>
    </>
  );
};

// --- COMPONENTE: HERO CARROSSEL (RED BULL STYLE) ---

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-screen min-h-[600px] overflow-hidden bg-[#0B1220] group touch-pan-y">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] w-full",
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          )}
        >
          <img src={slide.image} alt={slide.badge} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-black/40 to-transparent opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

          <div className="absolute bottom-16 md:bottom-24 left-4 md:left-12 lg:left-24 z-20 w-full max-w-4xl pr-4">
            <div className={cn("transition-all duration-1000 delay-300 transform", index === current ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0")}>
              <Badge color="bg-[#DB0032] text-white shadow-lg mb-4 md:mb-6">{slide.badge}</Badge>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl mb-4 md:mb-6">
                {slide.title}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCB146] to-white">{slide.subtitle}</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-8">
                <Button variant="primary" icon={ArrowRight} className="bg-[#DB0032] hover:bg-white hover:text-[#DB0032] shadow-[#DB0032]/20 text-xs md:text-sm px-6 py-3 md:px-8 md:py-4">
                  {slide.ctaPrimary}
                </Button>
                <div className="flex items-center text-[#AECFE6] text-xs md:text-sm font-medium hover:text-white transition-colors cursor-pointer">
                  <Play className="w-4 h-4 mr-2" />
                  {slide.ctaSecondary} <span className="mx-2 opacity-50">•</span> 3 min
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Progress Indicator (Red Bull Horizontal Dots) */}
      <div className="absolute bottom-6 left-4 md:left-12 lg:left-24 flex items-center gap-2 z-30">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={cn(
              "h-1 md:h-1.5 rounded-full transition-all duration-500 ease-out",
              current === idx ? "w-12 md:w-16 bg-[#CCB146]" : "w-2 md:w-3 bg-white/40 hover:bg-white"
            )}
            aria-label={`Ir para slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

// --- COMPONENTE: SEÇÃO DE IMPACTO ---

const ImpactSection = () => {
  const stats = [
    { id: 1, value: "22.485", label: "Empresas", sub: "Comprometidas", icon: Building2, color: "text-[#CCB146]" },
    { id: 2, value: "167", label: "Países", sub: "Alcance Global", icon: Globe, color: "text-[#297D6D]" },
    { id: 3, value: "3.024", label: "Não Empresariais", sub: "Organizações", icon: Landmark, color: "text-[#AECFE6]" },
    { id: 4, value: "62", label: "Redes Locais", sub: "Atuação Regional", icon: MapPin, color: "text-[#CCB146]" },
    { id: 5, value: "25.509", label: "Participantes", sub: "Total da Rede", icon: Users, color: "text-white" },
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-32 bg-[#1E3250] overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3250] via-transparent to-[#1E3250]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3250] via-transparent to-[#1E3250]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 lg:mb-24 gap-6 md:gap-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded bg-[#297D6D]/20 border border-[#297D6D]/30 text-[#297D6D] text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Nossa Magnitude
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
              A maior iniciativa de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCB146] to-[#F5E6A3]">sustentabilidade corporativa</span> <br />
              do mundo.
            </h2>
            <p className="mt-4 md:mt-6 text-[#AECFE6] text-sm md:text-base lg:text-lg max-w-xl leading-relaxed">
              Conectando estratégias empresariais aos Dez Princípios Universais. Saiba como podemos apoiar sua empresa nessa jornada de transformação.
            </p>
          </div>

          <button className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/30 text-white rounded-full hover:bg-white hover:text-[#1E3250] transition-all duration-300">
            <span className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Saiba Mais</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 border-t border-white/10 pt-8 md:pt-12">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col group cursor-default">
              <div className="mb-2 md:mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <stat.icon className={cn("w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8", stat.color)} />
              </div>
              <div className="relative">
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-black text-white tracking-tighter mb-1 group-hover:-translate-y-1 transition-transform duration-300">
                  {stat.value}
                </h3>
                <div className="h-1 w-6 md:w-8 bg-[#CCB146] rounded-full mb-2 md:mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-[8px] md:text-[10px] text-[#AECFE6] uppercase tracking-wide mt-0.5 md:mt-1">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- COMPONENTE: BENTO GRID & TILE ---

const Tile = ({ size = "small", image, category, title, subtitle, color = "bg-[#CCB146]" }) => {
  const gridClass = {
    large: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[500px]",
    wide: "md:col-span-2 md:row-span-1 min-h-[250px]",
    small: "md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-[300px]"
  };

  return (
    <div className={cn("group relative overflow-hidden bg-[#1E3250] rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500", gridClass[size])}>
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3250] via-[#1E3250]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>

      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className={cn("font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-2 md:mb-3 flex items-center gap-2 text-white")}>
            <span className={cn("w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm", color)}></span>
            {category}
          </span>
          <h3 className={cn("font-black text-white uppercase leading-[0.9] mb-2 md:mb-3", size === 'large' ? 'text-2xl md:text-3xl lg:text-5xl' : 'text-lg md:text-xl lg:text-2xl')}>
            {title}
          </h3>
          {subtitle && <p className="text-[#AECFE6] text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: FOOTER ---

const Footer = () => (
  <footer className="bg-[#1E3250] text-white pt-12 md:pt-16 lg:pt-24 pb-8 md:pb-12 border-t border-white/10">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-20">
      <div className="lg:col-span-2 space-y-6">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center text-[#1E3250]">
            <Globe className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          UN Global Compact
        </h2>
        <p className="text-[#AECFE6] max-w-sm leading-relaxed text-xs md:text-sm">
          Como uma iniciativa especial do Secretário-Geral da ONU, o Pacto Global das Nações Unidas é um chamado para que as empresas alinhem suas estratégias e operações com Dez Princípios universais.
        </p>
        <div className="flex gap-4 pt-4">
          {['In', 'Ig', 'Yt', 'Fb'].map(s => (
            <div key={s} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#CCB146] hover:text-[#1E3250] hover:border-[#CCB146] transition-all cursor-pointer font-bold text-[10px] md:text-xs">{s}</div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-bold text-[#CCB146] uppercase tracking-widest mb-4 md:mb-6 text-[10px] md:text-xs">Organização</h4>
        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium text-[#AECFE6]">
          <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Nossa Equipe</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Conselho</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#CCB146] uppercase tracking-widest mb-4 md:mb-6 text-[10px] md:text-xs">Temas</h4>
        <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-medium text-[#AECFE6]">
          <li><a href="#" className="hover:text-white transition-colors">Direitos Humanos</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Trabalho</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Meio Ambiente</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Anticorrupção</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-[#CCB146] uppercase tracking-widest mb-4 md:mb-6 text-[10px] md:text-xs">Contato</h4>
        <p className="text-[#AECFE6] text-xs md:text-sm mb-4">secretaria@pactoglobal.org.br</p>
        <Button variant="outline" className="w-full text-xs">Imprensa</Button>
      </div>
    </div>

    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-[#4C6B8B] font-medium uppercase tracking-wide gap-4 md:gap-0">
      <p className="text-center md:text-left">© 2026 UN Global Compact Network Brazil. All rights reserved.</p>
      <div className="flex gap-4 md:gap-6">
        <a href="#" className="hover:text-white">Termos de Uso</a>
        <a href="#" className="hover:text-white">Privacidade</a>
        <a href="#" className="hover:text-white">Cookies</a>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

const HomeContent = () => (
  <div className="animate-fade-in">
    <HeroCarousel />
    <ImpactSection />

    {/* BENTO GRID SECTION */}
    <section className="py-12 md:py-20 bg-[#F6F8FB]">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-[#1E3250] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Destaques</span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase text-[#1E3250] leading-tight">Acelerando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#297D6D] to-[#1E3250]">Impacto</span></h2>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" className="rounded-full border border-[#1E3250]/10 text-[10px] md:text-xs">Ver Tudo</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          <Tile
            size="large"
            image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop"
            category="Meio Ambiente"
            color="bg-[#297D6D]"
            title="Movimento +Água"
            subtitle="Uma coalizão para garantir a segurança hídrica no Brasil, impactando milhões de vidas."
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop"
            category="Direitos Humanos"
            color="bg-[#6E417A]"
            title="Elas Lideram 2030"
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop"
            category="Anticorrupção"
            color="bg-[#EC3740]"
            title="Integridade Já"
          />
          <Tile
            size="wide"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
            category="Liderança"
            title="Fórum de CEOs 2026"
            subtitle="Grandes líderes debatendo o futuro da economia verde no Brasil."
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            category="Global Goals"
            title="Agenda 2030"
          />
          <Tile
            size="small"
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            category="Educação"
            title="Academy"
          />
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 md:py-24 lg:py-32 bg-[#1E3250] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-8xl font-black uppercase mb-4 md:mb-8 tracking-tighter text-white">É hora de agir.</h2>
        <p className="text-sm md:text-lg lg:text-xl font-medium mb-8 md:mb-10 max-w-2xl mx-auto text-[#AECFE6]">
          Sua empresa pode ser parte da solução. Junte-se à maior rede de sustentabilidade do mundo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Button variant="primary" className="px-10 py-4 md:px-12 md:py-5 text-sm md:text-base shadow-[0_0_40px_-10px_#297D6D] w-full sm:w-auto">
            Quero Aderir
          </Button>
          <Button variant="outline" className="px-10 py-4 md:px-12 md:py-5 text-sm md:text-base border-white/20 text-white hover:bg-white hover:text-[#1E3250] w-full sm:w-auto">
            Conheça os Benefícios
          </Button>
        </div>
      </div>
    </section>
  </div>
);

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
  <div className="border-b border-[#1E3250]/10 last:border-0">
    <button 
      className="w-full flex justify-between items-center py-4 md:py-6 text-left focus:outline-none group"
      onClick={onClick}
    >
      <span className="font-bold text-sm md:text-base lg:text-lg text-[#1E3250] group-hover:text-[#297D6D] transition-colors pr-8">
        {question}
      </span>
      <div className={cn("shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300", isOpen ? "border-[#297D6D] bg-[#297D6D] text-white rotate-180" : "border-[#1E3250]/20 text-[#1E3250]/50 group-hover:border-[#297D6D] group-hover:text-[#297D6D]")}>
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

const CopPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Lógica da Barra de Progresso Dinâmica
  const now = new Date();
  const currentYear = now.getFullYear();
  const startDate = new Date(currentYear, 3, 1); // 1 de Abril
  const endDate = new Date(currentYear, 6, 31);   // 31 de Julho
  
  let progressPercentage = 0;
  let statusText = "Aberto";
  let statusColor = "text-[#CCB146]";
  
  if (now < startDate) {
    progressPercentage = 0;
    statusText = "Pré-abertura";
    statusColor = "text-white/50";
  } else if (now > endDate) {
    progressPercentage = 100;
    statusText = "Encerrado";
    statusColor = "text-red-400";
  } else {
    // Calculando porcentagem dentro do período
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsed = now.getTime() - startDate.getTime();
    progressPercentage = Math.max(0, Math.min(100, (elapsed / totalDuration) * 100));
  }

  return (
    <div className="animate-fade-in bg-[#F6F8FB]">
      {/* Hero & Timeline */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#1E3250] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10 text-center">
          <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 rounded-sm bg-[#CCB146]/20 text-[#CCB146] border border-[#CCB146]/30">Compliance & Transparência</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Comunicação sobre o<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#297D6D] to-[#AECFE6]">Progresso (CoP)</span>
          </h1>
          <h2 className="text-[#AECFE6] font-bold text-xl md:text-2xl mb-4">
            O principal mecanismo de reporte do Pacto Global da ONU para empresas participantes.
          </h2>
          <p className="text-[#4C6B8B] max-w-3xl mx-auto text-sm md:text-base mb-12">
            A Comunicação de Progresso (CoP) é um requisito anual obrigatório para empresas participantes. Por meio dela, as organizações reportam suas ações, políticas e resultados relacionados aos Dez Princípios do Pacto Global e sua contribuição para os Objetivos de Desenvolvimento Sustentável (ODS).
          </p>

          {/* Timeline Termômetro */}
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-md shadow-2xl">
            <h3 className="text-white font-bold uppercase tracking-widest text-xs md:text-sm mb-6 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4 text-[#CCB146]" /> 
              Período de submissão CoP {currentYear}
            </h3>
            
            <div className="relative h-4 bg-white/10 rounded-full mb-8 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#1E5C4F] to-[#CCB146] rounded-full relative transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              >
                {progressPercentage > 0 && progressPercentage < 100 && (
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 animate-pulse"></div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-end text-left relative">
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs text-white/50 uppercase font-black tracking-wider mb-1">Início</span>
                <span className="text-white font-bold text-sm md:text-xl">1º de Abril de {currentYear}</span>
              </div>
              <div className="flex flex-col text-center absolute left-1/2 -translate-x-1/2">
                <span className={cn("text-[10px] md:text-[11px] uppercase font-black tracking-wider mb-1", statusColor)}>Status Atual</span>
                <span className={cn("text-white font-bold text-sm md:text-xl", now >= startDate && now <= endDate ? "animate-pulse" : "")}>{statusText}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] md:text-xs text-white/50 uppercase font-black tracking-wider mb-1">Prazo Final</span>
                <span className="text-white font-bold text-sm md:text-xl">31 de Julho de {currentYear}</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4">
              <Button variant="primary" icon={ArrowRight}>Acessar plataforma de submissão</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#1E3250]">Conhecer a Academy CoP</Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#1E3250]">Ver FAQ</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proposta de Valor / Benefícios */}
      <section className="py-16 md:py-24 bg-[#1E3250]">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 rounded-sm bg-[#CCB146]/10 text-[#CCB146] border border-[#CCB146]/20">Vantagens da CoP</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">Por que reportar a <span className="text-[#AECFE6]">CoP</span>?</h2>
            <p className="text-[#AECFE6] mt-4 max-w-2xl mx-auto text-sm md:text-base">A Comunicação de Progresso permite que as empresas alcancem maturidade e diferencial competitivo em sustentabilidade.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <BarChart3 className="w-10 h-10 text-[#CCB146] mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Monitoramento Constante</h3>
              <p className="text-[#AECFE6] text-sm leading-relaxed">Monitore e demonstre seu progresso em sustentabilidade de forma estruturada e comparável ao longo dos anos.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Target className="w-10 h-10 text-[#297D6D] mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Identificação de Lacunas</h3>
              <p className="text-[#AECFE6] text-sm leading-relaxed">Identifique lacunas e oportunidades estratégicas de melhoria na gestão e operação das métricas de sustentabilidade.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <ShieldCheck className="w-10 h-10 text-white mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Credibilidade Institucional</h3>
              <p className="text-[#AECFE6] text-sm leading-relaxed">Fortaleça sua reputação evidenciando publicamente o compromisso real com os Dez Princípios e com os ODS.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors lg:col-start-1 lg:col-end-auto md:col-span-2 lg:col-span-1">
              <Users className="w-10 h-10 text-[#CCB146] mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Benchmarking Global</h3>
              <p className="text-[#AECFE6] text-sm leading-relaxed">Compare seu desempenho diretamente com outras empresas participantes nacionais e internacionais do mesmo setor.</p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors md:col-span-1 lg:col-span-2">
              <TrendingUp className="w-10 h-10 text-[#297D6D] mb-6" />
              <h3 className="text-white font-bold text-lg mb-3">Insights e Dados</h3>
              <p className="text-[#AECFE6] text-sm leading-relaxed">Acesse insights estratégicos por meio de nossas ferramentas exclusivas de visualização de dados da CoP, auxiliando nas tomadas de decisão corporativas a nível de conselho/diretoria.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O que é a CoP? / Estrutura da CoP */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="sticky top-24">
              <span className="text-[#297D6D] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Definição Oficial</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#1E3250] leading-tight mb-6">
                O que é a Comunicação sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#297D6D] to-[#1E3250]">Progresso</span>?
              </h2>
              <p className="text-[#4C6B8B] text-sm md:text-base mb-6 leading-relaxed">
                A Comunicação de Progresso (CoP) é o principal mecanismo de reporte do Pacto Global das Nações Unidas. Por meio da CoP, empresas participantes comunicam seus avanços na implementação dos Dez Princípios do Pacto Global e sua contribuição para os Objetivos de Desenvolvimento Sustentável (ODS).
              </p>
              <p className="text-[#4C6B8B] text-sm md:text-base mb-6 leading-relaxed">
                O reporte reúne informações sobre políticas, práticas empresariais e resultados em áreas essenciais para a sustentabilidade corporativa, incluindo:
              </p>
              
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
                {['Direitos Humanos', 'Trabalho', 'Meio Ambiente', 'Anticorrupção', 'Governança'].map(item => (
                  <li key={item} className="flex items-center gap-2 text-[#1E3250] font-bold text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#297D6D]"></div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-[#F6F8FB] p-5 md:p-6 rounded-xl border border-[#1E3250]/5 border-l-4 border-l-[#CCB146]">
                <p className="text-[#4C6B8B] text-sm italic">
                  "A CoP promove maior transparência, accountability e acompanhamento do progresso das empresas na agenda de sustentabilidade."
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="mb-4">
                <span className="text-[#CCB146] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Mecânica de Submissão</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-[#1E3250] tracking-tight">Estrutura da CoP</h3>
                <p className="text-[#4C6B8B] text-sm mt-3">A CoP é submetida por meio da plataforma digital do Pacto Global e possui dois componentes principais, mais uma opção complementar.</p>
              </div>

              <div className="bg-[#1E3250] p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-start group shadow-xl shadow-[#1E3250]/10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white border border-white/20">
                  <BarChart3 className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-white font-black text-base md:text-xl mb-2 uppercase tracking-tight">Questionário Digital</h3>
                  <p className="text-[#AECFE6] text-xs md:text-sm mb-3">Os participantes devem preencher um questionário online focado em 5 áreas temáticas. Ele coleta informações precisas sobre políticas, práticas e indicadores.</p>
                  <div className="flex flex-wrap gap-2 text-[#AECFE6] text-xs">
                    <span className="bg-white/10 px-2 py-1 rounded">36 Obrigatórias</span>
                    <span className="bg-white/10 px-2 py-1 rounded">31 Opcionais</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-[#1E3250]/10 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-start shadow-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#CCB146]/10 flex items-center justify-center shrink-0 text-[#CCB146]">
                  <FileText className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[#1E3250] font-black text-base md:text-xl mb-2 uppercase tracking-tight">Declaração do CEO</h3>
                  <p className="text-[#4C6B8B] text-xs md:text-sm mb-3">Uma declaração anual assinada pelo principal executivo reafirmando o compromisso contínuo com os Dez Princípios do Pacto Global. A assinatura é realizada digitalmente na plataforma.</p>
                </div>
              </div>

              <div className="bg-[#F6F8FB] border border-[#1E3250]/10 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-l-transparent">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#297D6D]/10 flex items-center justify-center shrink-0 text-[#297D6D]">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-[#1E3250] font-black text-base md:text-xl mb-2 uppercase tracking-tight">Relatório de Sustentabilidade <span className="text-[#4C6B8B] text-xs uppercase font-bold tracking-widest">(Opcional)</span></h3>
                  <p className="text-[#4C6B8B] text-xs md:text-sm mb-3">Empresas podem submeter seu relatório gerencial como alternativa ou complemento ao questionário, apresentando políticas, resultados e avanços e desafios.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Deve Enviar e Consequências */}
      <section className="py-16 md:py-24 bg-[#F6F8FB] border-t border-[#1E3250]/10">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white border border-[#1E3250]/10 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1E3250]/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#1E3250]" />
                </div>
                <h3 className="text-2xl font-black uppercase text-[#1E3250] tracking-tight">Quem deve enviar a CoP</h3>
              </div>
              <p className="text-[#4C6B8B] font-bold text-sm mb-4">Devem enviar a CoP:</p>
              <ul className="space-y-3 mb-6">
                <li className="flex gap-3 text-sm text-[#4C6B8B]">
                  <ShieldCheck className="w-5 h-5 text-[#297D6D] shrink-0" />
                  <span>Todas as empresas participantes do Pacto Global que aderiram <strong>antes de 1º de janeiro de 2026</strong>, reportando as ações realizadas durante 2025.</span>
                </li>
              </ul>
              <div className="bg-[#F6F8FB] p-4 rounded-xl border border-[#1E3250]/5">
                <p className="text-[#1E3250] font-bold text-xs uppercase tracking-widest mb-3">Estão isentas:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-xs text-[#4C6B8B] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CCB146] mt-1.5 shrink-0"></div>
                    Organizações não empresariais participantes (universidades, sindicatos, associações, ONGs), que reportam por meio da COE.
                  </li>
                  <li className="flex items-start gap-2 text-xs text-[#4C6B8B] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CCB146] mt-1.5 shrink-0"></div>
                    Empresas que aderiram ao Pacto Global em 2026, que reportarão apenas no ano seguinte.
                  </li>
                  <li className="flex items-start gap-2 text-xs text-[#4C6B8B] leading-relaxed">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CCB146] mt-1.5 shrink-0"></div>
                    Subsidiárias cuja empresa-mãe realiza reporte consolidado (submissão própria é opcional).
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1E3250] border border-white/10 p-8 rounded-2xl shadow-xl shadow-[#1E3250]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <Search className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">Consequências do Não Envio</h3>
              </div>
              <p className="text-[#AECFE6] text-sm md:text-base leading-relaxed mb-6">
                Empresas que não enviarem sua Comunicação de Progresso dentro do prazo oficial serão classificadas como <strong className="text-red-400">“não comunicativas”</strong> em seu perfil público no site do Pacto Global.
              </p>
              <div className="bg-white/5 p-5 md:p-6 rounded-xl border-l-4 border-l-red-500">
                <p className="text-white text-sm md:text-base font-bold mb-2">Risco de Remoção</p>
                <p className="text-[#AECFE6] text-xs md:text-sm leading-relaxed">
                  Caso a situação não seja regularizada até 31 de dezembro do mesmo ano, a empresa poderá ser removida da iniciativa a partir de 1º de janeiro do ano seguinte, conforme a política de reporte do Pacto Global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção CoE (Organizações Não-Empresariais) */}
      <section className="py-12 md:py-16 bg-white border-t border-[#1E3250]/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-[#1E5C4F] to-[#297D6D] rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10 max-w-4xl">
              <span className="inline-block px-3 py-1 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-4 rounded-sm bg-white/20 text-white backdrop-blur-sm">Para Não Empresariais</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-white mb-6">
                Comunicação sobre Engajamento (COE)
              </h2>
              <p className="text-[#AECFE6] text-sm md:text-base leading-relaxed mb-6">
                A Comunicação sobre Engajamento (COE) é o mecanismo de reporte destinado às organizações não empresariais participantes, como: universidades, organizações da sociedade civil, associações empresariais, sindicatos e instituições públicas.
              </p>
              <p className="text-[#AECFE6] text-sm md:text-base leading-relaxed mb-8">
                Publicada a cada dois anos, a COE consiste em um documento narrativo que descreve como a organização promove e apoia os Dez Princípios do Pacto Global e contribui para os Objetivos de Desenvolvimento Sustentável (ODS). Assim como a CoP, ela é publicada no perfil público da organização no site do Pacto Global.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#297D6D] shadow-lg shadow-black/10">Saber mais sobre a COE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada de Reporte em 3 Passos */}
      <section className="py-20 bg-[#F6F8FB] border-t border-[#1E3250]/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#297D6D] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">O Processo Digital</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#1E3250] tracking-tight">Como preparar e enviar sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#297D6D] to-[#1E3250]">CoP</span></h2>
            <p className="text-[#4C6B8B] mt-4 max-w-3xl mx-auto text-sm md:text-base">Para realizar a submissão, os participantes navegam através da plataforma digital do Pacto Global. Após a submissão, a CoP será publicada no perfil público da empresa.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative px-4">
            {/* Linha conectora oculta em mobile/tablet */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-r from-[#1E5C4F]/20 via-[#1E5C4F]/60 to-[#1E5C4F]/20 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group bg-[#F6F8FB] pt-4">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-white border border-[#1E3250]/10 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-black text-[#1E3250]/5 absolute -z-10 group-hover:text-[#1E3250]/10 transition-colors">1</span>
                <FileDown className="w-10 h-10 text-[#1E5C4F]" />
              </div>
              <h3 className="font-black text-xl text-[#1E3250] mb-2 uppercase tracking-tight">Preparação</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Revisar o questionário CoP para compreender as informações solicitadas e organizar todo o processo interno focado na coleta de dados com as demais áreas.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group bg-[#F6F8FB] pt-4 mt-8 lg:mt-0">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-[#1E3250] flex items-center justify-center shadow-lg shadow-[#1E3250]/20 group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-black text-white/5 absolute -z-10 group-hover:text-white/10 transition-colors">2</span>
                <UploadCloud className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-black text-xl text-[#1E3250] mb-2 uppercase tracking-tight">Painel Global</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Acessar o painel de participantes na plataforma do Pacto Global e confirmar a renovação da declaração de apoio contínuo do CEO de forma digital.</p>
              <Button variant="primary" className="text-xs px-3 py-1.5 h-auto text-center" icon={ArrowRight}>Plataforma Digital</Button>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group bg-[#F6F8FB] pt-4 mt-8 lg:mt-0">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-gradient-to-br from-[#CCB146] to-[#A89030] flex items-center justify-center shadow-lg shadow-[#CCB146]/30 group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-black text-white/20 absolute -z-10 transition-colors">3</span>
                <Edit3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-black text-xl text-[#1E3250] mb-2 uppercase tracking-tight">Submissão Oficial</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Submeter formalmente o questionário digital ou o relatório de sustentabilidade integrado dentro do período oficial estabelecido pelo Pacto Global.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Visualização de Dados da CoP (Novo bloco) */}
      <section className="py-16 md:py-24 bg-white border-t border-[#1E3250]/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2">
              <span className="text-[#297D6D] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Insights Globais</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#1E3250] leading-tight mb-6">
                Visualização de Dados da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#297D6D] to-[#1E3250]">CoP</span>
              </h2>
              <p className="text-[#4C6B8B] text-sm md:text-base mb-6 leading-relaxed">
                As ferramentas de visualização de dados da CoP permitem analisar informações agregadas reportadas pelas empresas participantes.
              </p>
              <h4 className="text-[#1E3250] font-bold text-sm mb-3">Essas ferramentas ajudam a compreender:</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-[#4C6B8B]">
                   <Globe className="w-5 h-5 text-[#CCB146] shrink-0" /> O progresso global na implementação dos Dez Princípios
                </li>
                <li className="flex items-center gap-3 text-sm text-[#4C6B8B]">
                   <TrendingUp className="w-5 h-5 text-[#CCB146] shrink-0" /> Tendências em sustentabilidade corporativa
                </li>
                <li className="flex items-center gap-3 text-sm text-[#4C6B8B]">
                   <BarChart3 className="w-5 h-5 text-[#CCB146] shrink-0" /> Dados comparativos entre empresas e ciclos de reporte
                </li>
              </ul>
              
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-[#1E3250] font-bold text-xs uppercase w-full sm:w-auto">Ciclos Disponíveis:</span>
                <span className="bg-[#F6F8FB] text-[#1E3250] px-3 py-1.5 rounded-full text-xs font-black shadow-sm">2023</span>
                <span className="bg-[#F6F8FB] text-[#1E3250] px-3 py-1.5 rounded-full text-xs font-black shadow-sm">2024</span>
                <span className="bg-[#297D6D] text-white px-3 py-1.5 rounded-full text-xs font-black shadow-lg shadow-[#297D6D]/20">2025</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
               <div className="bg-[#F6F8FB] rounded-[2rem] p-8 md:p-12 aspect-square md:aspect-video lg:aspect-square flex items-center justify-center border border-[#1E3250]/10 relative overflow-hidden group shadow-lg">
                 <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] transition-opacity group-hover:opacity-10"></div>
                 <BarChart3 className="w-32 h-32 md:w-48 md:h-48 text-[#1E3250]/5 group-hover:scale-110 transition-transform duration-500" />
                 
                 <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl flex items-center justify-between hover:ring-2 hover:ring-[#297D6D] cursor-pointer transition-all">
                   <div className="flex items-center gap-3 md:gap-4">
                     <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#CCB146]/20 flex items-center justify-center">
                       <Target className="w-5 h-5 md:w-6 md:h-6 text-[#CCB146]" />
                     </div>
                     <div>
                       <p className="text-[10px] md:text-xs text-[#4C6B8B] font-bold uppercase tracking-widest">Acesso Público</p>
                       <p className="text-sm md:text-base font-black text-[#1E3250]">Explorar Dashboard</p>
                     </div>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-[#1E3250]/5 flex items-center justify-center group-hover:bg-[#1E3250] transition-colors">
                     <ArrowRight className="w-4 h-4 text-[#1E3250] group-hover:text-white transition-colors" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Ferramentas / Toolbox */}
      <section className="py-16 md:py-24 bg-[#F6F8FB] border-t border-[#1E3250]/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="mb-12">
            <span className="text-[#297D6D] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Toolbox</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase text-[#1E3250] leading-tight mb-4">
              Materiais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#297D6D] to-[#1E3250]">Apoio</span>
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
              color="bg-[#1E3250]" 
            />
            <Tile 
              size="wide" 
              category="Vídeo" 
              title="Demonstração da Plataforma" 
              subtitle="Veja o tutorial em vídeo da navegação no sistema global da ONU." 
              image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
              color="bg-[#CCB146]" 
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
              color="bg-[#297D6D]" 
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
              title="Histórias de Sucesso" 
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              color="bg-[#1E3250]" 
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white border-t border-[#1E3250]/10">
        <div className="container mx-auto max-w-4xl px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest mb-4 rounded-sm bg-[#1E3250]/10 text-[#1E3250]">FAQ Oficial</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase text-[#1E3250] mb-4">Dúvidas Frequentes</h2>
            <p className="text-[#4C6B8B] text-sm md:text-base">As questões mais comuns respondidas pela nossa equipe de engajamento.</p>
          </div>

          <div className="bg-white rounded-2xl border border-[#1E3250]/10 p-4 md:p-8 shadow-xl shadow-[#1E3250]/5">
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
        </div>
      </section>

      {/* Helpdesk & CTA Suporte */}
      <section className="py-16 md:py-24 bg-[#1E3250] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto max-w-4xl px-4 md:px-8 relative z-10 text-center">
          <div className="w-16 h-16 mx-auto bg-[#297D6D]/20 rounded-full flex items-center justify-center text-[#297D6D] mb-6 shadow-lg shadow-[#297D6D]/10">
            <MessageCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white mb-6 tracking-tight">Ainda Precisa de Ajuda?</h2>
          <p className="text-[#AECFE6] text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Nossa equipe de engajamento está à disposição para auxiliar sua empresa durante o Período Universal. Se você enfrentou algum erro técnico na plataforma global ou tem dúvidas na documentação, fale com nossos especialistas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button variant="primary" icon={ArrowRight}>Abrir Chamado</Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#1E3250]">engajamento@pactoglobal.org.br</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#CCB146] selection:text-[#1E3250] flex flex-col">
      <CapsuleHeader onRouteChange={setCurrentRoute} currentRoute={currentRoute} />

      <main className="flex-1">
        {currentRoute === 'home' && <HomeContent />}
        {currentRoute === 'cop' && <CopPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
