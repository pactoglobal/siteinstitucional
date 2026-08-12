// ============================================================
// NOTÍCIAS — Fonte única de dados
// ------------------------------------------------------------
// Espelha a estrutura de pactoglobal.org.br/noticias/.
// Cada item tem `slug` (URL estável), `date` ISO e `body`
// estruturado — pronto para ser trocado por um CMS/API sem
// mexer nos componentes.
// ============================================================

import { byDateDesc } from '../utils/date';

/** Categorias editoriais — a primeira é o estado "sem filtro". */
export const NOTICIA_CATEGORIAS = [
  'Todas',
  'Direitos Humanos',
  'Fórum Ambição 2030',
  'Clima',
  'Anticorrupção',
  'Gênero',
  'Institucional',
];

/** Cor de acento por categoria — alinhada à paleta dos Movimentos. */
export const CATEGORIA_CORES = {
  'Direitos Humanos': '#6E417A',
  'Fórum Ambição 2030': '#CCB146',
  'Clima': '#297D6D',
  'Anticorrupção': '#EC3740',
  'Gênero': '#DD1367',
  'Institucional': '#1E3250',
};

export const corDaCategoria = (categoria) => CATEGORIA_CORES[categoria] || '#1E3250';

export const NOTICIAS = [
  {
    slug: 'pacto-global-acnudh-oit-ocde-evento-direitos-humanos-cinemateca',
    title:
      'Pacto Global da ONU, ACNUDH, OIT e OCDE promovem evento sobre direitos humanos para empresas na Cinemateca',
    excerpt:
      'I Encontro Brasileiro de Direitos Humanos e Empresas, que ocorre no dia 04, antecipa agenda que será levada ao Fórum Internacional da ONU em Genebra.',
    category: 'Direitos Humanos',
    date: '2026-07-28',
    readingTime: 5,
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    imageCaption:
      'Encontro reúne empresas, governo, academia e sociedade civil na Cinemateca Brasileira, em São Paulo.',
    featured: true,
    body: [
      {
        type: 'lead',
        text: 'O I Encontro Brasileiro de Direitos Humanos e Empresas reúne, no dia 4 de agosto, na Cinemateca Brasileira, em São Paulo, lideranças empresariais, representantes de governo, academia e sociedade civil para discutir a implementação dos Princípios Orientadores da ONU sobre Empresas e Direitos Humanos no contexto brasileiro.',
      },
      {
        type: 'p',
        text: 'A realização é do Pacto Global da ONU – Rede Brasil em parceria com o Escritório do Alto Comissariado das Nações Unidas para os Direitos Humanos (ACNUDH), a Organização Internacional do Trabalho (OIT) e a Organização para a Cooperação e Desenvolvimento Econômico (OCDE). O encontro antecipa a agenda que será levada ao Fórum Internacional sobre Empresas e Direitos Humanos, em Genebra.',
      },
      {
        type: 'p',
        text: 'Com mais de 1.900 empresas participantes no Brasil, a Rede Brasil tem intensificado o trabalho de tradução dos compromissos internacionais em prática empresarial mensurável — especialmente em devida diligência, cadeias de suprimentos e trabalho decente.',
      },
      { type: 'h2', text: 'Diálogo entre diferentes atores sociais' },
      {
        type: 'p',
        text: 'A programação foi construída para colocar no mesmo espaço atores que raramente dialogam de forma estruturada: departamentos jurídicos e de sustentabilidade, sindicatos, Ministério Público do Trabalho, investidores e organizações de defesa de direitos.',
      },
      {
        type: 'quote',
        text: 'Direitos humanos deixaram de ser um capítulo do relatório de sustentabilidade para se tornar critério de acesso a mercado, a crédito e a cadeias globais de valor.',
        author: 'Rede Brasil',
        role: 'Pacto Global da ONU',
      },
      {
        type: 'p',
        text: 'Entre os temas em pauta estão a devida diligência em direitos humanos no mercado financeiro, salário digno, inclusão produtiva e os mecanismos de reparação disponíveis a trabalhadores e comunidades afetadas.',
      },
      { type: 'h2', text: 'Programação de alto nível' },
      {
        type: 'list',
        items: [
          'Painel de abertura com ACNUDH, OIT e OCDE sobre o estado da agenda no Brasil',
          'Sessão técnica de devida diligência para o setor financeiro',
          'Mesa sobre salário digno com foco na América Latina',
          'Apresentação dos encaminhamentos que seguem para Genebra',
        ],
      },
      {
        type: 'service',
        title: 'Serviço',
        items: [
          { label: 'Evento', value: 'I Encontro Brasileiro de Direitos Humanos e Empresas' },
          { label: 'Data', value: '4 de agosto de 2026' },
          { label: 'Local', value: 'Cinemateca Brasileira — São Paulo, SP' },
          { label: 'Realização', value: 'Pacto Global da ONU – Rede Brasil, ACNUDH, OIT e OCDE' },
        ],
      },
    ],
    relacionadas: [
      'i-encontro-brasileiro-direitos-humanos-empresas',
      'guia-devida-diligencia-mercado-financeiro',
    ],
  },
  {
    slug: 'i-encontro-brasileiro-direitos-humanos-empresas',
    title:
      'I Encontro Brasileiro de Direitos Humanos e Empresas define agenda que segue para Genebra',
    excerpt:
      'Encaminhamentos construídos por empresas, sindicatos e sociedade civil vão compor a contribuição brasileira ao Fórum Internacional da ONU.',
    category: 'Direitos Humanos',
    date: '2026-08-05',
    readingTime: 6,
    image:
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O encontro realizado na Cinemateca Brasileira consolidou um conjunto de encaminhamentos que a Rede Brasil levará ao Fórum Internacional sobre Empresas e Direitos Humanos, em Genebra.',
      },
      {
        type: 'p',
        text: 'Os grupos de trabalho se debruçaram sobre quatro frentes: devida diligência, salário digno, inclusão produtiva e mecanismos de reparação. Cada frente produziu recomendações endereçadas simultaneamente ao setor empresarial e ao poder público.',
      },
      {
        type: 'p',
        text: 'A expectativa é que as recomendações sejam incorporadas às jornadas de conhecimento oferecidas às empresas comprometidas ao longo do segundo semestre.',
      },
    ],
  },
  {
    slug: 'forum-ambicao-2030-reune-liderancas-empresariais',
    title: 'Fórum Ambição 2030 reúne lideranças empresariais em torno das metas de década',
    excerpt:
      'Edição de 2026 concentra o debate na tradução de compromissos públicos em metas mensuráveis dentro das operações.',
    category: 'Fórum Ambição 2030',
    date: '2026-05-22',
    readingTime: 4,
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    body: [
      {
        type: 'lead',
        text: 'O Fórum Ambição 2030 reuniu lideranças de empresas participantes para avaliar o avanço dos dez Movimentos e recalibrar as metas assumidas para o fim da década.',
      },
      {
        type: 'p',
        text: 'A leitura predominante entre os participantes é a de que o desafio deixou de ser a adesão e passou a ser a mensuração: como demonstrar, com dados auditáveis, que os compromissos públicos alteraram a operação.',
      },
    ],
  },
  {
    slug: 'avanish-sahai-ia-agenda-esg',
    title: 'Avanish Sahai debate como a IA pode acelerar a agenda ESG nas empresas',
    excerpt:
      'Executivo aponta que o gargalo da sustentabilidade corporativa migrou da coleta de dados para a capacidade de decidir com eles.',
    category: 'Fórum Ambição 2030',
    date: '2026-05-29',
    readingTime: 5,
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'Em painel do Fórum Ambição 2030, Avanish Sahai defendeu que a inteligência artificial só acelera a agenda ESG quando aplicada sobre bases de dados já governadas.',
      },
      {
        type: 'quote',
        text: 'Automatizar um processo de coleta ruim entrega relatório errado mais rápido. O ganho está em governança de dado, não em modelo.',
        author: 'Avanish Sahai',
      },
      {
        type: 'p',
        text: 'O debate atravessou temas como rastreabilidade de cadeia, inventário de emissões e o risco de greenwashing assistido por modelos generativos.',
      },
    ],
  },
  {
    slug: 'saude-mental-inclusao-refugiados-ia-etica',
    title: 'Saúde mental, inclusão de refugiados e IA ética marcam segundo dia do Fórum',
    excerpt:
      'Painéis simultâneos conectaram a agenda de pessoas às discussões sobre tecnologia e futuro do trabalho.',
    category: 'Fórum Ambição 2030',
    date: '2026-06-03',
    readingTime: 4,
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O segundo dia do Fórum Ambição 2030 dedicou a programação à interseção entre agenda de pessoas e transformação tecnológica.',
      },
      {
        type: 'p',
        text: 'A sessão sobre saúde mental apresentou o Guia de Saúde Mental e Futuro do Trabalho, construído com empresas do Movimento Saúde e Bem-Estar.',
      },
    ],
  },
  {
    slug: 'forum-ambicao-2030-transicao-verde',
    title: 'Fórum Ambição 2030 debate financiamento da transição verde no Brasil',
    excerpt:
      'Investidores e empresas discutem os instrumentos disponíveis para financiar descarbonização de setores intensivos em carbono.',
    category: 'Clima',
    date: '2026-06-11',
    readingTime: 7,
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O debate sobre financiamento da transição reuniu bancos, gestoras e empresas de setores intensivos em carbono para mapear os instrumentos hoje disponíveis no mercado brasileiro.',
      },
      {
        type: 'p',
        text: 'A conclusão comum foi a de que o custo de capital já diferencia empresas com metas validadas cientificamente daquelas com compromissos genéricos.',
      },
    ],
  },
  {
    slug: 'guia-devida-diligencia-mercado-financeiro',
    title:
      'Rede Brasil lança Guia Prático de Devida Diligência em Direitos Humanos para o mercado financeiro',
    excerpt:
      'Material orienta instituições financeiras a incorporar avaliação de riscos em direitos humanos às decisões de crédito e investimento.',
    category: 'Direitos Humanos',
    date: '2026-04-16',
    readingTime: 5,
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O guia traduz os Princípios Orientadores da ONU para a realidade operacional de bancos, gestoras e seguradoras que atuam no Brasil.',
      },
      {
        type: 'p',
        text: 'A publicação detalha como estruturar a identificação de riscos, a integração aos comitês de crédito e o acompanhamento de planos de ação junto a empresas investidas.',
      },
    ],
  },
  {
    slug: 'movimento-equidade-racial-novas-signatarias',
    title: 'Movimento por Equidade Racial recebe novas empresas signatárias',
    excerpt:
      'Adesões ampliam a base de companhias com metas públicas de representatividade em posições de liderança.',
    category: 'Gênero',
    date: '2026-07-09',
    readingTime: 3,
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'Novas empresas assinaram a Carta de Compromisso do Movimento por Equidade Racial, assumindo metas públicas de representatividade até 2030.',
      },
    ],
  },
  {
    slug: 'semana-integridade-alliance-for-integrity',
    title: 'Semana Regional de Integridade discute ética como linguagem universal dos negócios',
    excerpt:
      'Edição de 2026 acontece em Assunção e reúne empresas da América Latina em torno da cultura de integridade.',
    category: 'Anticorrupção',
    date: '2026-07-15',
    readingTime: 4,
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'A 11ª Semana Regional de Integridade Empresarial coloca a integridade como infraestrutura da confiança nos negócios internacionais.',
      },
    ],
  },
  {
    slug: 'rede-brasil-25-anos',
    title: 'Rede Brasil prepara programação de 25 anos com balanço de impacto',
    excerpt:
      'Encontro Nacional marcará as duas décadas e meia da rede com a divulgação de um balanço consolidado de resultados.',
    category: 'Institucional',
    date: '2026-06-25',
    readingTime: 3,
    image:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O Encontro Nacional da Rede Brasil marcará os 25 anos da rede no país com um balanço consolidado dos resultados das empresas participantes.',
      },
    ],
  },
].sort(byDateDesc('date'));

/** @param {string} slug */
export const getNoticia = (slug) => NOTICIAS.find((n) => n.slug === slug) || null;

/**
 * Relacionadas: respeita a lista curada em `relacionadas` e completa
 * com itens da mesma categoria, sem repetir a notícia atual.
 */
export const getRelacionadas = (slug, limite = 3) => {
  const atual = getNoticia(slug);
  if (!atual) return [];

  const curadas = (atual.relacionadas || [])
    .map(getNoticia)
    .filter(Boolean);

  const mesmaCategoria = NOTICIAS.filter(
    (n) => n.slug !== slug && n.category === atual.category && !curadas.includes(n),
  );

  return [...curadas, ...mesmaCategoria].slice(0, limite);
};

/** Categorias que efetivamente têm conteúdo, na ordem canônica. */
export const categoriasComNoticias = () =>
  NOTICIA_CATEGORIAS.filter(
    (c) => c === 'Todas' || NOTICIAS.some((n) => n.category === c),
  );
