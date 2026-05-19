import { Globe, Calendar, FileText, Target, Briefcase, BookOpen, Users, Building2, ShieldCheck, LogIn } from 'lucide-react';

export const ROUTES = {
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

export const HASH_TO_ROUTE = Object.fromEntries(
  Object.entries(ROUTES).map(([key, hash]) => [hash, key])
);

export const MOCK_EVENTS = [
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


export const PILLAR_ICONS = {
  'direitos-humanos': Users,
  'trabalho': Briefcase,
  'meio-ambiente': Globe,
  'anticorrupcao': ShieldCheck,
};

export const PILLARS_DATA = [
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
    ods: [3, 8]
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

export const ODS_COLORS = [
  '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
  '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
  '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
  '#00689D', '#19486A', '#6E417A'
];

export const ODS_NAMES = [
  'Erradicação da Pobreza', 'Fome Zero e Agricultura Sustentável', 'Saúde e Bem-Estar',
  'Educação de Qualidade', 'Igualdade de Gênero', 'Água Potável e Saneamento',
  'Energia Limpa e Acessível', 'Trabalho Decente e Crescimento Econômico', 'Indústria, Inovação e Infraestrutura',
  'Redução das Desigualdades', 'Cidades e Comunidades Sustentáveis', 'Consumo e Produção Responsáveis',
  'Ação Contra a Mudança Global do Clima', 'Vida na Água', 'Vida Terrestre',
  'Paz, Justiça e Instituições Eficazes', 'Parcerias e Meios de Implementação', 'Igualdade Étnico Racial'
];

export const HERO_SLIDES = [
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

export const MENU_DESTAQUES = [
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

export const MENU_EXPLORAR = [
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

export const MENU_PARTICIPAR = [
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

// Header Menu Constants
export const HEADER_PROGRAMAS = [
  'HUBs ODS & Multiplicadores', 
  'Liderança de Impacto', 
  'Diálogos DH & DEI', 
  'CFO Coalition', 
  'COPs'
];

export const HEADER_CONHECIMENTO = [
  'Publicações', 
  'Academy', 
  'Cursos & Workshops', 
  'ESG e Sustentabilidade', 
  'Guias e Relatórios'
];

// Institutional Stats
export const INSTITUTIONAL_STATS = {
  globalParticipants: '25k+',
  localNetworks: '67',
  brasilParticipants: '1.900',
  brasilInitiatives: '50'
};
