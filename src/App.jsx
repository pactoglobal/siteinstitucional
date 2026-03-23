import React, { useState, useEffect } from 'react';
import { Menu, Search, ArrowRight, Globe, ChevronDown, X, Play, BarChart3, Users, User, LogIn, FileText, BookOpen, Target, Briefcase, Building2, Calendar, ChevronLeft, ChevronRight, MapPin, Landmark, TrendingUp, ShieldCheck, Award, FileDown, UploadCloud, Edit3, MessageCircle, AlertTriangle, Megaphone, Linkedin, Instagram, Youtube } from 'lucide-react';

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

// --- ROUTING ---

const ROUTES = {
  home: '#/',
  sobre: '#/sobre',
  eventos: '#/eventos',
  noticias: '#/noticias',
  agenda: '#/agenda',
  programas: '#/programas',
  conhecimento: '#/conhecimento',
  participar: '#/participar',
  cop:  '#/cop',
};

const HASH_TO_ROUTE = Object.fromEntries(
  Object.entries(ROUTES).map(([key, hash]) => [hash, key])
);

const useHashRoute = (defaultRoute = 'home') => {
  const getRouteFromHash = () => {
    const hash = window.location.hash || '#/';
    return HASH_TO_ROUTE[hash] || defaultRoute;
  };

  const [currentRoute, setCurrentRoute] = useState(getRouteFromHash);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentRoute(getRouteFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (routeKey) => {
    const hash = ROUTES[routeKey];
    if (hash) {
      window.location.hash = hash;
    } else {
      window.location.hash = '#/';
    }
  };

  return { currentRoute, navigate };
};

// --- DADOS E MOCKS ---


const MOCK_EVENTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    title: "Fórum de Liderança com Propósito — Edição 2026",
    dateRange: "18 Março — 20 Junho 2026",
    location: "São Paulo, Brasil",
    category: "LIDERANÇA",
    status: "upcoming",
    statusLabel: "Inscrições abertas"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop",
    title: "Encontro Nacional da Rede Brasil — 25 Anos",
    dateRange: "2 — 4 Junho 2026",
    location: "Rio de Janeiro, Brasil",
    category: "INSTITUCIONAL",
    status: "pending",
    statusLabel: "Aguardando detalhes"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
    title: "Diálogos DH & DEI — Ciclo 2026",
    dateRange: "18 Agosto 2026",
    location: "Online",
    category: "DIREITOS HUMANOS",
    status: "upcoming",
    statusLabel: "Inscrições abertas"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    title: "Ambição 2030: O Impacto das Metas Climáticas",
    dateRange: "25 Setembro 2026",
    location: "Online",
    category: "ACADEMY",
    status: "pending",
    statusLabel: "Aguardando detalhes"
  }
];


const PILLAR_ICONS = {
  'direitos-humanos': Users,
  'trabalho': Briefcase,
  'meio-ambiente': Globe,
  'anticorrupcao': ShieldCheck,
};

const PILLARS_DATA = [
  {
    id: 'direitos-humanos',
    number: '01',
    title: 'Direitos Humanos',
    color: '#1E3250',
    accentLight: 'bg-[#1E3250]/10',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
    description: 'As empresas devem apoiar e respeitar a proteção dos direitos humanos reconhecidos internacionalmente, assegurando sua não participação em violações destes direitos.',
    principles: [
      { num: 1, text: 'As empresas devem apoiar e respeitar a proteção de direitos humanos reconhecidos internacionalmente.' },
      { num: 2, text: 'Assegurar-se de sua não participação em violações destes direitos.' }
    ],
    ods: [3, 4, 5, 10, 18]
  },
  {
    id: 'trabalho',
    number: '02',
    title: 'Trabalho',
    color: '#4C6B8B',
    accentLight: 'bg-[#4C6B8B]/10',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop',
    description: 'Os princípios de trabalho buscam garantir a liberdade de associação, a eliminação do trabalho forçado e infantil, e o fim da discriminação no emprego.',
    principles: [
      { num: 3, text: 'As empresas devem apoiar a liberdade de associação e o reconhecimento efetivo do direito à negociação coletiva.' },
      { num: 4, text: 'A eliminação de todas as formas de trabalho forçado ou compulsório.' },
      { num: 5, text: 'A abolição efetiva do trabalho infantil.' },
      { num: 6, text: 'Eliminar a discriminação no emprego.' }
    ],
    ods: [8]
  },
  {
    id: 'meio-ambiente',
    number: '03',
    title: 'Meio Ambiente',
    color: '#297D6D',
    accentLight: 'bg-[#297D6D]/10',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop',
    description: 'As empresas devem adotar uma abordagem preventiva aos desafios ambientais, desenvolver iniciativas de responsabilidade ambiental e tecnologias ecologicamente corretas.',
    principles: [
      { num: 7, text: 'As empresas devem apoiar uma abordagem preventiva aos desafios ambientais.' },
      { num: 8, text: 'Desenvolver iniciativas para promover maior responsabilidade ambiental.' },
      { num: 9, text: 'Incentivar o desenvolvimento e difusão de tecnologias ambientalmente amigáveis.' }
    ],
    ods: [2, 6, 12, 13, 14, 15]
  },
  {
    id: 'anticorrupcao',
    number: '04',
    title: 'Anticorrupção',
    color: '#6E417A',
    accentLight: 'bg-[#6E417A]/10',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    description: 'As empresas devem combater a corrupção em todas as suas formas, inclusive extorsão e propina, promovendo uma cultura de integridade e transparência.',
    principles: [
      { num: 10, text: 'As empresas devem combater a corrupção em todas as suas formas, inclusive extorsão e propina.' }
    ],
    ods: [16]
  }
];

const ODS_COLORS = [
  '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
  '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
  '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
  '#00689D', '#19486A', '#6E417A'
];

const ODS_NAMES = [
  'Erradicação da Pobreza', 'Fome Zero e Agricultura Sustentável', 'Saúde e Bem-Estar',
  'Educação de Qualidade', 'Igualdade de Gênero', 'Água Potável e Saneamento',
  'Energia Limpa e Acessível', 'Trabalho Decente e Crescimento Econômico', 'Indústria, Inovação e Infraestrutura',
  'Redução das Desigualdades', 'Cidades e Comunidades Sustentáveis', 'Consumo e Produção Responsáveis',
  'Ação Contra a Mudança Global do Clima', 'Vida na Água', 'Vida Terrestre',
  'Paz, Justiça e Instituições Eficazes', 'Parcerias e Meios de Implementação', 'Igualdade Étnico Racial'
];

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
    id: "sobre",
    icon: Globe,
    subItems: [
      { id: "sobre", label: "Sobre Nós" },
      { id: "sobre", label: "Rede Brasil" },
      { id: "sobre", label: "Governança" },
      { id: "sobre", label: "Apoiadores" },
      { id: "sobre", label: "Parceiros" }
    ]
  },
  {
    label: "Nossos Eventos",
    id: "eventos",
    icon: Calendar,
    subItems: [
      { id: "eventos", label: "Institucionais" },
      { id: "eventos", label: "Temáticos" },
      { id: "eventos", label: "Agenda de Eventos" }
    ]
  },
  {
    label: "Notícias",
    id: "noticias",
    icon: FileText,
    subItems: [
      { id: "noticias", label: "Últimas Notícias" },
      { id: "noticias", label: "Destaques" },
      { id: "noticias", label: "Sala de Imprensa" }
    ]
  }
];

const MENU_EXPLORAR = [
  {
    label: "Nossa Agenda",
    id: "agenda",
    icon: Target,
    subItems: [
      { id: "agenda", label: "10 Princípios" }, // Typo fix: user asked for "10 Princípio", making it plural for correctness
      { id: "agenda", label: "ODS" },
      { id: "agenda", label: "Ambição 2030" },
      { id: "agenda", label: "Movimentos" },
      { id: "agenda", label: "Plataformas de Ação" }
    ]
  },
  {
    label: "Programas",
    id: "programas",
    icon: Briefcase,
    subItems: [
      { id: "programas", label: "HUBs ODS & Multiplicadores" },
      { id: "programas", label: "Liderança de Impacto" },
      { id: "programas", label: "Diálogos DH & DEI" },
      { id: "programas", label: "CFO Coalition" },
      { id: "programas", label: "COPs" }
    ]
  },
  {
    label: "Conhecimento",
    id: "conhecimento",
    icon: BookOpen,
    subItems: [
      { id: "conhecimento", label: "Publicações" },
      { id: "conhecimento", label: "Academy" },
      { id: "conhecimento", label: "Cursos & Workshops" },
      { id: "conhecimento", label: "ESG e sustentabilidade corporativa" },
      { id: "conhecimento", label: "Guias e relatórios" }
    ]
  }
];

const MENU_PARTICIPAR = [
  {
    label: "Participação",
    id: "participar",
    icon: Users,
    subItems: [
      { id: "participar", label: "Quero aderir" },
      { id: "participar", label: "Benefícios da participação" },
      { id: "participar", label: "Critérios e requisitos" },
      { id: "participar", label: "Etapas de adesão" },
      { id: "participar", label: "FAQ" }
    ]
  },
  {
    label: "Empresas Participantes",
    id: "participar",
    icon: Building2,
    subItems: [
      { id: "participar", label: "Quem faz parte" },
      { id: "participar", label: "Casos e Boas Práticas" }
    ]
  },
  {
    label: "CoP",
    id: "cop",
    icon: FileText,
    subItems: [
      { id: "cop", label: "O que é CoP" }, // Link mantido
      { id: "cop", label: "Como enviar a CoP" },
      { id: "cop", label: "Prazos e Orientações" },
      { id: "cop", label: "FAQ" }
    ]
  },
  {
    label: "Parceria e Patrocínio",
    id: "participar",
    icon: LogIn,
    subItems: [
      { id: "participar", label: "Quero Patrocinar" },
      { id: "participar", label: "Quero ser Parceiro" },
      { id: "participar", label: "Quero Apoiar Iniciativas" }
    ]
  }
];

// --- COMPONENTES ATÔMICOS ---

const Button = ({ children, variant = 'primary', icon: Icon, className = '', onClick }) => {
  const base = "inline-flex items-center justify-center font-bold uppercase tracking-wider text-[10px] md:text-xs lg:text-sm transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-un-gold focus:ring-offset-2 shrink-0";

  const variants = {
    primary: "bg-un-green text-white hover:bg-un-green/80 hover:scale-105 shadow-lg shadow-un-green/20 px-4 py-3 md:px-6 md:py-3.5",
    secondary: "bg-un-blue text-white hover:bg-un-blue-1 px-4 py-3 md:px-6 md:py-3.5",
    outline: "border-2 border-white/30 text-white hover:bg-white hover:text-un-blue backdrop-blur-sm px-4 py-3 md:px-6 md:py-3.5",
    ghost: "text-un-blue hover:bg-gray-100 px-3 py-2 md:px-4 md:py-2",
    login: "text-white hover:text-un-gold font-bold px-3 py-2 flex items-center gap-2"
  };

  return (
    <button onClick={onClick} className={cn(base, variants[variant], className)}>
      {Icon && <Icon className="mr-1.5 md:mr-2 w-3.5 h-3.5 md:w-4 md:h-4" />}
      {children}
    </button>
  );
};

const Badge = ({ children, color = "bg-un-gold" }) => (
  <span className={cn("inline-block px-2.5 py-1 md:px-3 text-[9px] md:text-[10px] font-display font-black uppercase tracking-widest text-un-blue mb-3 rounded-sm", color)}>
    {children}
  </span>
);

const SupporterLogos = ({ className, vertical = false, labelClass = "text-white/50" }) => (
  <div className={cn("flex flex-col items-center", className)}>
    <span className={cn("text-[8px] uppercase tracking-widest mb-2", labelClass)}>Apoiadores Institucionais</span>
    <div className={cn("flex items-center gap-4 md:gap-6", vertical ? "flex-col gap-4" : "")}>
      <div className="h-3 md:h-4 flex items-center text-white font-serif font-bold italic tracking-wide text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity">aegea</div>
      {!vertical && <div className="h-3 w-px bg-white/30"></div>}
      <div className="h-3 md:h-4 flex items-center text-white font-display font-black tracking-tighter text-sm md:text-base opacity-90 hover:opacity-100 transition-opacity"><span className="text-un-green">M</span>RV</div>
      {!vertical && <div className="h-3 w-px bg-white/30"></div>}
      <div className="h-3 md:h-4 flex items-center text-white font-sans font-bold text-[8px] md:text-[10px] tracking-tight uppercase opacity-90 hover:opacity-100 transition-opacity"><span className="text-un-green mr-1">Schneider</span> Electric</div>
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
      "fixed inset-0 z-[100] bg-un-blue transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col overflow-hidden",
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
    )}>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #CCB146; border-radius: 20px; }
      `}</style>

      <div className="flex justify-between items-center p-4 md:p-8 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={() => handleNav('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={`${import.meta.env.BASE_URL}logo-pacto-white.png`} alt="Pacto Global - Rede Brasil" className="h-8 md:h-10 w-auto" />
          </button>
        </div>

        <button onClick={onClose} className="group flex items-center gap-2 md:gap-3 text-white hover:text-un-gold transition-colors">
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
              <Search className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white/50 group-focus-within:text-un-gold transition-colors" />
              <input
                type="text"
                placeholder="O QUE VOCÊ PROCURA?"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 md:py-5 pl-12 md:pl-16 pr-6 text-white placeholder-white/30 focus:outline-none focus:border-un-gold focus:bg-white/10 transition-all text-xs md:text-sm lg:text-base uppercase tracking-widest font-bold"
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
                <h3 className="text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border-b border-white/10 pb-2">{section.title}</h3>
                <div className="flex flex-col gap-y-4 md:gap-y-6">
                  {section.items.map((item) => (
                    <div key={item.label}>
                      {item.subItems ? (
                        <div className="mb-2 md:mb-4">
                          <button
                            onClick={() => toggleExpand(item.label)}
                            className="flex items-center gap-3 text-white hover:text-un-gold font-bold uppercase tracking-wide text-xs md:text-sm lg:text-base py-2 transition-colors w-full text-left"
                          >
                            {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white opacity-80 shrink-0" />}
                            <span className={item.label === 'CoP' ? 'normal-case' : ''}>{item.label}</span>
                            <ChevronDown className={cn("ml-auto w-3 h-3 md:w-4 md:h-4 transition-transform", expandedItem === item.label && "rotate-180")} />
                          </button>
                          <div className={cn("overflow-hidden transition-all duration-300 pl-8 space-y-2", expandedItem === item.label ? "max-h-[500px] pt-4 opacity-100" : "max-h-0 opacity-0")}>
                            {item.subItems.map(sub => (
                              <button key={sub.label} onClick={(e) => { e.preventDefault(); sub.id ? handleNav(sub.id) : onClose(); }} className="block w-full text-left text-un-blue-3 hover:text-white text-[10px] md:text-xs font-medium py-1">
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button onClick={() => handleNav(item.id)} className="flex items-center gap-3 text-white hover:text-un-gold font-bold uppercase tracking-wide text-xs md:text-sm lg:text-base py-2 transition-colors w-full text-left">
                           {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white opacity-80 shrink-0" />}
                           <span className={item.label === 'CoP' ? 'normal-case' : ''}>{item.label}</span>
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

      <div className="p-6 md:p-12 border-t border-white/10 bg-un-blue shrink-0">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-8">
          <div className="w-full xl:w-auto text-center xl:text-left">
            <Button variant="outline" className="w-full xl:w-auto px-8 py-4 text-xs font-bold border-white/20 text-white hover:bg-white hover:text-un-blue">
              Área do Participante
            </Button>
          </div>
          <SupporterLogos className="opacity-80 scale-90 md:scale-100" />
          <div className="flex gap-6 text-white/40">
            {['LinkedIn', 'Instagram', 'YouTube'].map(s => (
              <a key={s} href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-un-gold transition-colors">{s}</a>
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
        scrolled ? "bg-un-blue py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]" : "bg-transparent py-5"
      )}>
        <div className="container mx-auto px-4 md:px-8 xl:px-12 flex items-center justify-between">
          
          {/* Logo e Menu Esquerda */}
          <div className="flex items-center gap-4 md:gap-6 w-1/4 xl:w-1/4">
            <button
              onClick={() => setSuperMenuOpen(true)}
              className="text-white hover:text-un-gold transition-colors p-2 flex items-center gap-2"
            >
              <Menu className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button onClick={() => onRouteChange && onRouteChange('home')} className="hidden sm:flex items-center group hover:opacity-80 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}logo-pacto-white.png`} alt="Pacto Global - Rede Brasil" className="h-7 md:h-9 w-auto" />
            </button>
          </div>

          {/* Pílula Central (Menu Rápido) */}
          <div className="hidden lg:flex w-1/2 xl:w-2/4 justify-center">
            <nav className="flex items-center gap-4 xl:gap-6 bg-un-blue/60 backdrop-blur-md rounded-full px-6 xl:px-8 py-2.5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {/* Link Simples */}
              <button onClick={() => setSuperMenuOpen(true)} className="text-white hover:text-un-gold text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                Sobre Nós
              </button>
              
              {/* Dropdown Programas */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white group-hover:text-un-gold text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors py-1.5 whitespace-nowrap">
                  Programas <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-un-blue backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="py-3 flex flex-col">
                        {['HUBs ODS & Multiplicadores', 'Liderança de Impacto', 'Diálogos DH & DEI', 'CFO Coalition', 'COPs'].map(sub => (
                          <button key={sub} onClick={() => setSuperMenuOpen(true)} className="text-left px-5 py-3 text-[10px] xl:text-[11px] text-white/70 hover:text-un-gold hover:bg-white/5 transition-colors uppercase tracking-widest font-bold whitespace-nowrap">
                            {sub}
                          </button>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Conhecimento */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-white group-hover:text-un-gold text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors py-1.5 whitespace-nowrap">
                  Conhecimento <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-un-blue backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="py-3 flex flex-col">
                        {['Publicações', 'Academy', 'Cursos & Workshops', 'ESG e Sustentabilidade', 'Guias e Relatórios'].map(sub => (
                          <button key={sub} onClick={() => setSuperMenuOpen(true)} className="text-left px-5 py-3 text-[10px] xl:text-[11px] text-white/70 hover:text-un-gold hover:bg-white/5 transition-colors uppercase tracking-widest font-bold whitespace-nowrap">
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
                  className="text-white hover:text-un-gold text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Ferramentas Direita */}
          <div className="flex items-center justify-end gap-2 md:gap-4 w-1/4 xl:w-1/4">
            <button onClick={() => setSuperMenuOpen(true)} className="text-white hover:text-un-gold transition-colors p-2" title="Buscar">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button className="text-white hover:text-un-gold transition-colors p-2" title="Área do Participante">
              <User className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <Button variant="primary" className="hidden md:flex text-[9px] px-4 py-2 bg-un-gold hover:bg-un-gold/80 text-un-blue whitespace-nowrap">
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
    <section className="relative w-full h-[85vh] md:h-screen min-h-[600px] overflow-hidden bg-un-blue group touch-pan-y">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] w-full",
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          )}
        >
          <img src={slide.image} alt={slide.badge} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-un-blue via-black/40 to-transparent opacity-95"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

          <div className="absolute bottom-16 md:bottom-24 left-4 md:left-12 lg:left-24 z-20 w-full max-w-4xl pr-4">
            <div className={cn("transition-all duration-1000 delay-300 transform", index === current ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0")}>
              <Badge color="bg-un-red text-white shadow-lg mb-4 md:mb-6">{slide.badge}</Badge>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.9] drop-shadow-2xl mb-4 md:mb-6">
                {slide.title}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-gold to-white">{slide.subtitle}</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mt-8">
                <Button variant="primary" icon={ArrowRight} className="bg-un-red hover:bg-white hover:text-un-red shadow-un-red/20 text-xs md:text-sm px-6 py-3 md:px-8 md:py-4">
                  {slide.ctaPrimary}
                </Button>
                <div className="flex items-center text-un-blue-3 text-xs md:text-sm font-medium hover:text-white transition-colors cursor-pointer">
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
              current === idx ? "w-12 md:w-16 bg-un-gold" : "w-2 md:w-3 bg-white/40 hover:bg-white"
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
    { id: 1, value: "22.485", label: "Empresas", sub: "Comprometidas", icon: Building2, color: "text-un-gold" },
    { id: 2, value: "167", label: "Países", sub: "Alcance Global", icon: Globe, color: "text-un-green" },
    { id: 3, value: "3.024", label: "Não Empresariais", sub: "Organizações", icon: Landmark, color: "text-un-blue-3" },
    { id: 4, value: "62", label: "Redes Locais", sub: "Atuação Regional", icon: MapPin, color: "text-un-gold" },
    { id: 5, value: "25.509", label: "Participantes", sub: "Total da Rede", icon: Users, color: "text-white" },
  ];

  return (
    <section className="relative py-12 md:py-20 lg:py-32 bg-un-blue overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-un-blue via-transparent to-un-blue"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-un-blue via-transparent to-un-blue"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 lg:mb-24 gap-6 md:gap-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded bg-un-green/20 border border-un-green/30 text-un-green text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Nossa Magnitude
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-display font-black text-white uppercase tracking-tight leading-[1.1]">
              A maior iniciativa de <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-gold to-[#F5E6A3]">sustentabilidade corporativa</span> <br />
              do mundo.
            </h2>
            <p className="mt-4 md:mt-6 text-un-blue-3 text-sm md:text-base lg:text-lg max-w-xl leading-relaxed">
              Conectando estratégias empresariais aos Dez Princípios Universais. Saiba como podemos apoiar sua empresa nessa jornada de transformação.
            </p>
          </div>

          <button className="group flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-transparent border border-white/30 text-white rounded-full hover:bg-white hover:text-un-blue transition-all duration-300">
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
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-display font-black text-white tracking-tighter mb-1 group-hover:-translate-y-1 transition-transform duration-300">
                  {stat.value}
                </h3>
                <div className="h-1 w-6 md:w-8 bg-un-gold rounded-full mb-2 md:mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-[10px] md:text-xs lg:text-sm font-bold text-white uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-[8px] md:text-[10px] text-un-blue-3 uppercase tracking-wide mt-0.5 md:mt-1">
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

const Tile = ({ size = "small", image, category, title, subtitle, color = "bg-un-gold" }) => {
  const gridClass = {
    large: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[500px]",
    wide: "md:col-span-2 md:row-span-1 min-h-[250px]",
    small: "md:col-span-1 md:row-span-1 min-h-[250px] md:min-h-[300px]"
  };

  return (
    <div className={cn("group relative overflow-hidden bg-un-blue rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500", gridClass[size])}>
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-un-blue via-un-blue/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80"></div>
      </div>

      <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className={cn("font-bold text-[8px] md:text-[10px] uppercase tracking-[0.2em] mb-2 md:mb-3 flex items-center gap-2 text-white")}>
            <span className={cn("w-1.5 h-1.5 md:w-2 md:h-2 rounded-sm", color)}></span>
            {category}
          </span>
          <h3 className={cn("font-display font-black text-white uppercase leading-[0.9] mb-2 md:mb-3", size === 'large' ? 'text-2xl md:text-3xl lg:text-5xl' : 'text-lg md:text-xl lg:text-2xl')}>
            {title}
          </h3>
          {subtitle && <p className="text-un-blue-3 text-xs md:text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE: FOOTER ---

const Footer = () => (
  <footer className="bg-[#0f2942] text-white pt-16 md:pt-20 lg:pt-24 border-t border-white/5">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 pb-16 md:pb-24">
      {/* Coluna 1: Logo, Texto e Redes */}
      <div className="flex flex-col space-y-6">
        <img src={`${import.meta.env.BASE_URL}logo-pacto-white.png`} alt="Pacto Global - Rede Brasil" className="h-20 md:h-24 w-auto object-contain object-left" style={{filter: 'brightness(0) invert(1)'}} />
        <p className="text-white/60 max-w-[280px] leading-relaxed text-[13px] font-light">
          Nos ajude a transformar o mundo por meio dos negócios.
        </p>
        <div>
          <h4 className="font-semibold text-white text-sm mb-4 inline-block border-b-2 border-[#1a5276] pb-1.5 pr-8">Nas Redes</h4>
          <div className="flex gap-3 pt-2">
            {[
               { icon: Linkedin, name: 'Linkedin' },
               { icon: Instagram, name: 'Instagram' },
               { icon: Youtube, name: 'Youtube' },
               { icon: () => <span className="text-sm font-black leading-none">X</span>, name: 'X' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-[#1a5276] flex items-center justify-center hover:bg-white hover:text-[#0f2942] transition-all duration-300 cursor-pointer text-white/90 hover:scale-110">
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Coluna 2: Links Úteis */}
      <div>
        <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-[#1a5276] pb-1.5 pr-8">Links Úteis</h4>
        <ul className="space-y-4 text-[13px] font-light text-white/60">
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Sobre Nós</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Dez Princípios</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block leading-relaxed">Objetivos de<br/>Desenvolvimento<br/>Sustentável</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Saiba quem já faz parte</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Como aderir</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Comunicação de Progresso</a></li>
        </ul>
      </div>

      {/* Coluna 3: Oportunidades & Políticas */}
      <div>
        <div className="mb-10">
          <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-[#1a5276] pb-1.5 pr-8">Oportunidades</h4>
          <ul className="space-y-4 text-[13px] font-light text-white/60">
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Trabalhe conosco</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-[#1a5276] pb-1.5 pr-8">Políticas</h4>
          <ul className="space-y-4 text-[13px] font-light text-white/60">
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Política de Cookies</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Política de Privacidade | Landing Pages e E-mails</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Política de Privacidade | Chatbot</a></li>
          </ul>
        </div>
      </div>

      {/* Coluna 4: Sala de Imprensa */}
      <div>
        <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-[#1a5276] pb-1.5 pr-8">Sala de Imprensa</h4>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0f2942] rounded-full px-7 py-3 font-bold uppercase tracking-wider text-xs shadow-lg hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300 mt-2"
        >
          <Megaphone className="w-4 h-4" />
          ACESSE
        </a>
      </div>
    </div>

    {/* Bottom Copyright Bar */}
    <div className="w-full bg-[#1a5276] py-5">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 text-[11px] text-white/70 font-medium tracking-wide">
        <span>© 2026 Todos os direitos reservados</span>
        <span className="hidden sm:inline mx-4 text-white/25">|</span>
        <span>Pacto Global - Rede Brasil</span>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---


const EventCard = ({ event }) => (
  <a href="#" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
    {/* Image */}
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Card Body */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-un-blue transition-colors">
        {event.title}
      </h3>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
        <Calendar className="w-4 h-4 shrink-0" />
        <span>{event.dateRange}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 shrink-0" />
        <span>{event.location}</span>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{event.category}</p>

      {/* Status Badge */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        {event.status === 'upcoming' ? (
          <div className="flex items-center gap-2 text-sm font-semibold text-un-blue">
            <div className="w-4 h-4 rounded border border-un-blue flex items-center justify-center">
              <div className="w-2 h-2 bg-un-blue rounded-sm" />
            </div>
            {event.statusLabel}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-400">
            <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-300 rounded-full" />
            </div>
            {event.statusLabel}
          </div>
        )}
      </div>
    </div>
  </a>
);

const EventsListSection = () => {
  const [activeTab, setActiveTab] = React.useState('upcoming');
  return (
  <section className="py-12 md:py-16 bg-[#F8F9FB]">
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-display font-black text-gray-900">Eventos</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`text-sm font-bold pb-1 transition-colors relative ${activeTab === 'upcoming' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'}`}
            >
              Vem aí
              {activeTab === 'upcoming' && <span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-un-red rounded-full" />}
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`text-sm font-bold pb-1 transition-colors relative ${activeTab === 'past' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-700'}`}
            >
              Anteriores
              {activeTab === 'past' && <span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-un-red rounded-full" />}
            </button>
          </div>
        </div>
        <a href="#" className="hidden md:flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-un-blue transition-colors border border-gray-300 rounded-full px-4 py-2 hover:border-un-blue">
          Ver todos <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {MOCK_EVENTS.map(evt => (
          <EventCard key={evt.id} event={evt} />
        ))}
      </div>

      <a href="#" className="flex md:hidden items-center justify-center gap-1 text-sm font-bold text-gray-700 border border-gray-300 rounded-full px-4 py-2 mt-8 hover:border-un-blue hover:text-un-blue transition-colors">
        Ver todos <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  </section>
  );
};




const PillaresSection = () => {
  const [openPillar, setOpenPillar] = React.useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F4F6F9] to-[#ECEEF2]">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-un-blue-1 mb-3 block">Conheça nossos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 leading-tight">
            Pilares <span className="text-un-blue">de Atuação</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Mais de 80 iniciativas para engajar empresas em qualquer estágio da jornada ESG, alinhados aos ODS e aos nossos quatro pilares de atuação.
          </p>
        </div>

        {/* 10 Principles Bento Box (Redesigned) */}
        <div className="bg-un-blue rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl shadow-un-blue/10 transition-all duration-500">
          <div className="flex flex-col lg:flex-row">
            {/* Text Column */}
            <div className="lg:w-5/12 p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <span className="text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 inline-block relative z-10" style={{letterSpacing: '0.2em'}}>Compromisso Obrigatório</span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-6 leading-[1.1] tracking-tight relative z-10">10 Princípios<br/>Universais</h3>
              <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-light relative z-10">
                Ao aderir ao Pacto Global da ONU, as empresas assumem o compromisso contínuo de seguir os Dez Princípios Universais — as diretrizes que fundamentam a sustentabilidade global em quatro pautas centrais.
              </p>
              <div className="hidden lg:flex items-center gap-3 text-un-blue-3 text-xs uppercase font-bold tracking-widest relative z-10">
                <ArrowRight className="w-4 h-4" /> Selecione um pilar
              </div>
            </div>
            
            {/* 2x2 Bento Cards Column */}
            <div className="lg:w-7/12 p-4 md:p-6 lg:p-8 bg-black/10">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full min-h-[400px]">
                {PILLARS_DATA.map((pillar, idx) => {
                  const IC = PILLAR_ICONS[pillar.id];
                  const isActive = openPillar === idx;
                  return (
                  <button 
                    key={pillar.id} 
                    onClick={() => setOpenPillar(isActive ? -1 : idx)}
                    className={`rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center text-center transition-all duration-300 border-2 group relative overflow-hidden focus:outline-none ${isActive ? 'bg-white/10 border-white/20 shadow-lg scale-[1.02] z-10' : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`}
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:-translate-y-1 ${isActive ? 'shadow-lg shadow-black/20' : ''}`} style={{ backgroundColor: `${pillar.color}` }}>
                      <IC className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <p className="text-sm md:text-base font-black font-display uppercase tracking-wider text-white mb-1.5">{pillar.title}</p>
                    <p className="text-[10px] md:text-xs text-white/50 font-bold uppercase tracking-wider">{pillar.principles.length} princípio{pillar.principles.length > 1 ? 's' : ''}</p>
                    
                    {/* Active indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: `${pillar.color}` }}></div>
                  </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Expanded Pillar Infobox (Opens Inside the Bento Container) */}
          {openPillar !== -1 && (
            <div className="border-t border-white/10 bg-black/20 animate-fade-in transition-all duration-500 p-8 md:p-14">
               {(() => {
                 const activePillar = PILLARS_DATA[openPillar];
                 const ActiveIcon = PILLAR_ICONS[activePillar.id];
                 return (
                   <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-14">
                      {/* Left: Image & Pillar Intro */}
                      <div className="lg:col-span-2 flex flex-col">
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] mb-6 shadow-xl">
                          <img src={activePillar.image} alt={activePillar.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute bottom-6 left-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg" style={{ backgroundColor: activePillar.color }}>
                              <ActiveIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-white font-display font-black text-xl uppercase tracking-wider">{activePillar.title}</span>
                          </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed font-light">{activePillar.description}</p>
                      </div>

                      {/* Right: Principles List */}
                      <div className="lg:col-span-3">
                        <h4 className="flex items-center gap-3 text-un-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-8">
                          <span className="w-8 h-[2px] bg-un-gold/50 rounded-full" />
                          Princípios Relacionados
                        </h4>
                        <div className="grid gap-4 mb-10">
                          {activePillar.principles.map(p => (
                            <div key={p.num} className="flex gap-5 items-start bg-white/5 p-5 md:p-6 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                              <span
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-display font-black shrink-0 shadow-md text-sm"
                                style={{ backgroundColor: activePillar.color }}
                              >
                                {p.num}
                              </span>
                              <p className="text-white/90 text-sm md:text-base leading-relaxed pt-0.5">{p.text}</p>
                            </div>
                          ))}
                        </div>

                        {/* ODS Relacionados */}
                        {activePillar.ods && activePillar.ods.length > 0 && (
                          <div className="animate-fade-in">
                            <h4 className="flex items-center gap-3 text-un-gold font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-6">
                              <span className="w-8 h-[2px] bg-un-gold/50 rounded-full" />
                              Objetivos Relacionados (ODS)
                            </h4>
                            <div className="flex flex-wrap gap-3 md:gap-4">
                              {activePillar.ods.map(odsNum => (
                                <div key={odsNum} className="group relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 transition-all duration-300 ring-2 ring-transparent hover:ring-un-gold/50">
                                  <img 
                                    src={`${import.meta.env.BASE_URL}ods/ods-${odsNum}.jpg`} 
                                    alt={ODS_NAMES[odsNum - 1]} 
                                    className="w-full h-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                     <span className="text-white font-bold text-xs">{odsNum}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                   </div>
                 );
               })()}
            </div>
          )}
        </div>



      </div>
    </section>
  );
};

const NEWS_DATA = [
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
    title: 'O poder de ser positivo: Histórias de impacto transformador',
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

const NewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FAFBFC]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-screen-2xl">
        {/* Header */}
        <div className="flex justify-between items-end mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 tracking-tight">
            Histórias
          </h2>
        </div>

        {/* Horizontal scroll container (Carousel) */}
        <div className="flex overflow-x-auto gap-6 md:gap-8 pb-10 snap-x snap-mandatory pt-4 px-4 -mx-4 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
           <style>{`
             .hide-scrollbar::-webkit-scrollbar { display: none; }
           `}</style>
           
           {NEWS_DATA.map(news => (
             <div key={news.id} className="min-w-[300px] w-[85vw] sm:w-[360px] md:w-[420px] shrink-0 snap-start bg-white rounded-[1.5rem] shadow-sm border border-gray-100/80 flex flex-col overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-un-blue/5 transition-all duration-300 hover:-translate-y-1.5 focus:outline-none">
               {/* Image Cover */}
               <div className="w-full h-60 md:h-[280px] overflow-hidden relative">
                 <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-white -rotate-45" />
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
      </div>
    </section>
  );
};

const HomeContent = () => (
  <div className="animate-fade-in">
    <HeroCarousel />
    <ImpactSection />
    <EventsListSection />
    <PillaresSection />
    <NewsSection />

    {/* BENTO GRID SECTION */}
    <section className="py-12 md:py-20 bg-[#F6F8FB]">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-un-blue font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Destaques</span>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-display font-black uppercase text-un-blue leading-tight">Acelerando o <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-green to-un-blue">Impacto</span></h2>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" className="rounded-full border border-un-blue/10 text-[10px] md:text-xs">Ver Tudo</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-auto">
          <Tile
            size="large"
            image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1974&auto=format&fit=crop"
            category="Meio Ambiente"
            color="bg-un-green"
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
    <section className="py-16 md:py-24 lg:py-32 bg-un-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-8xl font-display font-black uppercase mb-4 md:mb-8 tracking-tighter text-white">É hora de agir.</h2>
        <p className="text-sm md:text-lg lg:text-xl font-medium mb-8 md:mb-10 max-w-2xl mx-auto text-un-blue-3">
          Sua empresa pode ser parte da solução. Junte-se à maior rede de sustentabilidade do mundo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <Button variant="primary" className="px-10 py-4 md:px-12 md:py-5 text-sm md:text-base shadow-[0_0_40px_-10px_#297D6D] w-full sm:w-auto">
            Quero Aderir
          </Button>
          <Button variant="outline" className="px-10 py-4 md:px-12 md:py-5 text-sm md:text-base border-white/20 text-white hover:bg-white hover:text-un-blue w-full sm:w-auto">
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

// --- COMPONENTE: GENERIC PAGE SHELL ---

const PageHero = ({ title, category, description, image, color = "bg-un-blue" }) => (
  <section className={cn("relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden", color)}>
    <div className="absolute inset-0 z-0">
      <img src={image} className="w-full h-full object-cover opacity-20 transition-scale duration-[10s] hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-b from-un-blue/80 via-un-blue/50 to-un-blue" />
    </div>
    <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12 relative z-10 text-center md:text-left">
      <div className="max-w-3xl">
        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
          {category}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase leading-[0.9] mb-8 animate-fade-in-up delay-75">
          {title}
        </h1>
        <p className="text-white/70 text-base md:text-xl font-light leading-relaxed mb-10 animate-fade-in-up delay-150">
          {description}
        </p>
      </div>
    </div>
  </section>
);

const SobrePage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Pacto Global"
      title="Sobre Nós"
      description="Conheça a maior iniciativa de sustentabilidade corporativa do mundo e nossa atuação no Brasil."
      image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
    />
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl text-center">
        <h2 className="text-3xl font-display font-black text-un-blue mb-8 uppercase">Quem Somos</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          O Pacto Global das Nações Unidas é um chamado para as empresas alinharem suas estratégias e operações com dez princípios universais nas áreas de direitos humanos, trabalho, meio ambiente e anticorrupção e tomarem medidas que promovam objetivos sociais.
        </p>
      </div>
    </section>
  </div>
);

const EventosPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Agenda 2026"
      title="Nossos Eventos"
      description="Participe dos principais fóruns e discussões que estão moldando o futuro dos negócios sustentáveis."
      image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
      color="bg-[#1E3250]"
    />
    <div className="py-12 bg-gray-50">
       <EventsListSection />
    </div>
  </div>
);

const NoticiasPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Comunicação"
      title="Notícias"
      description="Acompanhe as últimas atualizações, destaques e materiais da nossa sala de imprensa."
      image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
      color="bg-[#0f2942]"
    />
    <NewsSection />
  </div>
);

const NossaAgendaPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Nossa Agenda"
      title="Impacto Global"
      description="Os Dez Princípios e os Objetivos de Desenvolvimento Sustentável (ODS) no centro da sua estratégia."
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
      color="bg-[#297D6D]"
    />
    <PillaresSection />
  </div>
);

const ProgramasPage = () => (
  <div className="animate-fade-in">
    <PageHero 
      category="Ação"
      title="Programas"
      description="Iniciativas focadas e plataformas de ação para acelerar o progresso em temas críticos de sustentabilidade."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      color="bg-[#166088]"
    />
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center max-w-3xl">
         <h2 className="text-3xl font-display font-black text-un-blue mb-8 uppercase">Acelerando o Impacto</h2>
         <p className="text-gray-600">Nossos programas são desenhados para mover empresas de compromissos para ações concretas, utilizando métricas claras e compartilhamento de conhecimento.</p>
      </div>
    </section>
  </div>
);

const ConhecimentoPage = () => (
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

const ParticiparPage = () => (
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

const CopPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  
  // Lógica da Barra de Progresso Dinâmica
  const now = new Date();
  const currentYear = now.getFullYear();
  const startDate = new Date(currentYear, 3, 1); // 1 de Abril
  const endDate = new Date(currentYear, 6, 31);   // 31 de Julho
  
  let progressPercentage = 0;
  let statusText = "Aberto";
  let statusColor = "text-un-gold";
  
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
            
            <div className="relative h-4 bg-white/10 rounded-full mb-8 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-un-green/80 to-un-gold rounded-full relative transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              >
                {progressPercentage > 0 && progressPercentage < 100 && (
                  <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 animate-pulse"></div>
                )}
              </div>
            </div>

            <div className="flex justify-between items-end text-left relative">
              <div className="flex flex-col">
                <span className="text-[10px] md:text-xs text-white/50 uppercase font-display font-black tracking-wider mb-1">Início</span>
                <span className="text-white font-bold text-sm md:text-xl">1º de Abril de {currentYear}</span>
              </div>
              <div className="flex flex-col text-center absolute left-1/2 -translate-x-1/2">
                <span className={cn("text-[10px] md:text-[11px] uppercase font-display font-black tracking-wider mb-1", statusColor)}>Status Atual</span>
                <span className={cn("text-white font-bold text-sm md:text-xl", now >= startDate && now <= endDate ? "animate-pulse" : "")}>{statusText}</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-[10px] md:text-xs text-white/50 uppercase font-display font-black tracking-wider mb-1">Prazo Final</span>
                <span className="text-white font-bold text-sm md:text-xl">31 de Julho de {currentYear}</span>
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

              <div className="bg-[#F6F8FB] p-5 md:p-6 rounded-xl border border-un-blue/5 border-l-4 border-l-un-gold">
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

              <div className="bg-[#F6F8FB] border border-un-blue/10 p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6 items-start border-l-transparent">
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
      <section className="py-16 md:py-24 bg-[#F6F8FB] border-t border-un-blue/10">
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
                    <span><strong>Organizações não empresariais</strong> participantes (universidades, sindicatos, associações, ONGs), que reportam por meio da ferramenta COE (Comunicação sobre Engajamento).</span>
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
                Comunicação sobre Engajamento (COE)
              </h2>
              <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-6">
                A Comunicação sobre Engajamento (COE) é o mecanismo de reporte destinado às organizações não empresariais participantes, como: universidades, organizações da sociedade civil, associações empresariais, sindicatos e instituições públicas.
              </p>
              <p className="text-un-blue-3 text-sm md:text-base leading-relaxed mb-8">
                Publicada a cada dois anos, a COE consiste em um documento narrativo que descreve como a organização promove e apoia os Dez Princípios do Pacto Global e contribui para os Objetivos de Desenvolvimento Sustentável (ODS). Assim como a CoP, ela é publicada no perfil público da organização no site do Pacto Global.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-un-green shadow-lg shadow-black/10">Saber mais sobre a COE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada de Reporte em 3 Passos */}
      <section className="py-20 bg-[#F6F8FB] border-t border-un-blue/5">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-un-green font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">O Processo Digital</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-un-blue tracking-tight">Como preparar e enviar sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-un-green to-un-blue normal-case">CoP</span></h2>
            <p className="text-[#4C6B8B] mt-4 max-w-3xl mx-auto text-sm md:text-base">Para realizar a submissão, os participantes navegam através da plataforma digital do Pacto Global. Após a submissão, a CoP será publicada no perfil público da empresa.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative px-4">
            {/* Linha conectora oculta em mobile/tablet */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[16.6%] right-[16.6%] h-[2px] bg-gradient-to-r from-un-green/80/20 via-un-green/80/60 to-un-green/80/20 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center group bg-[#F6F8FB] pt-4">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-white border border-un-blue/10 flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-display font-black text-un-blue/5 absolute -z-10 group-hover:text-un-blue/10 transition-colors">1</span>
                <FileDown className="w-10 h-10 text-un-green/80" />
              </div>
              <h3 className="font-display font-black text-xl text-un-blue mb-2 uppercase tracking-tight">Preparação</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Revisar o questionário CoP para compreender as informações solicitadas e organizar todo o processo interno focado na coleta de dados com as demais áreas.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group bg-[#F6F8FB] pt-4 mt-8 lg:mt-0">
              <div className="w-24 h-24 mb-6 rounded-3xl bg-un-blue flex items-center justify-center shadow-lg shadow-un-blue/20 group-hover:-translate-y-2 transition-transform duration-300">
                <span className="text-5xl font-display font-black text-white/5 absolute -z-10 group-hover:text-white/10 transition-colors">2</span>
                <UploadCloud className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display font-black text-xl text-un-blue mb-2 uppercase tracking-tight">Painel Global</h3>
              <p className="text-[#4C6B8B] text-sm mb-4 px-2">Acessar o painel de participantes na plataforma do Pacto Global e confirmar a renovação da declaração de apoio contínuo do CEO de forma digital.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center group bg-[#F6F8FB] pt-4 mt-8 lg:mt-0">
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
          <div className="bg-[#F6F8FB] border border-un-blue/5 p-8 md:p-10 rounded-[2rem] mx-auto mb-10 text-left flex flex-col items-center">
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
            <div className="flex flex-wrap items-center justify-center gap-3 bg-[#F6F8FB] px-6 py-3 rounded-full border border-un-blue/5">
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
      <section className="py-16 md:py-24 bg-[#F6F8FB] border-t border-un-blue/5 relative">
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
                 <div className="relative w-full overflow-hidden bg-[#F6F8FB] grid">
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
                 <a href="#" className="flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 bg-white hover:bg-[#F6F8FB] transition-colors group">
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
      <section className="py-16 md:py-24 bg-[#F6F8FB] border-t border-un-blue/5">
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
              title="Histórias de Sucesso" 
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

const App = () => {
  const { currentRoute, navigate } = useHashRoute('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-un-gold selection:text-un-blue flex flex-col">
      <CapsuleHeader onRouteChange={navigate} currentRoute={currentRoute} />

      <main className="flex-1">
        {currentRoute === 'home' && <HomeContent />}
        {currentRoute === 'sobre' && <SobrePage />}
        {currentRoute === 'eventos' && <EventosPage />}
        {currentRoute === 'noticias' && <NoticiasPage />}
        {currentRoute === 'agenda' && <NossaAgendaPage />}
        {currentRoute === 'programas' && <ProgramasPage />}
        {currentRoute === 'conhecimento' && <ConhecimentoPage />}
        {currentRoute === 'participar' && <ParticiparPage />}
        {currentRoute === 'cop' && <CopPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
