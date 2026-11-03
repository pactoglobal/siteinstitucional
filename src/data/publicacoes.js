// ============================================================
// PUBLICAÇÕES — Fonte única de dados
// ------------------------------------------------------------
// Espelha pactoglobal.org.br/observatorio/publicacoes/.
// Os temas seguem exatamente a taxonomia do Observatório.
// `themes` é uma lista: uma publicação pode responder a mais de
// um tema (ex.: Direitos Humanos + Salário Digno).
// ============================================================

import { byDateDesc } from '../utils/date';

/** Taxonomia do Observatório — a primeira entrada é o estado "sem filtro". */
export const PUBLICACAO_TEMAS = [
  'Todos',
  'Agro',
  'Água',
  'Clima',
  'Corrupção',
  'Direitos Humanos',
  'Executivo',
  'Gênero',
  'Institucional',
  'Salário Digno',
];

export const TEMA_CORES = {
  'Agro': '#56C02B',
  'Água': '#00689D',
  'Clima': '#297D6D',
  'Corrupção': '#EC3740',
  'Direitos Humanos': '#6E417A',
  'Executivo': '#1E3250',
  'Gênero': '#DD1367',
  'Institucional': '#4C6B8B',
  'Salário Digno': '#CCB146',
};

export const corDoTema = (tema) => TEMA_CORES[tema] || '#1E3250';

export const PUBLICACAO_TIPOS = ['Todos', 'Guia', 'Relatório', 'Pesquisa', 'Manual'];

export const PUBLICACOES = [
  {
    slug: 'guia-devida-diligencia-direitos-humanos-mercado-financeiro',
    title: 'Guia Prático em Devida Diligência para os Direitos Humanos no Mercado Financeiro',
    summary:
      'Orienta instituições financeiras a incorporar a avaliação de riscos em direitos humanos às decisões de crédito, investimento e relacionamento com empresas investidas.',
    themes: ['Direitos Humanos', 'Executivo'],
    type: 'Guia',
    language: 'Português',
    date: '2026-04-22',
    pages: 68,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    slug: 'guia-saude-mental-futuro-do-trabalho',
    title: 'Guia de Saúde Mental e Futuro do Trabalho',
    summary:
      'Construído com empresas do Movimento Saúde e Bem-Estar, reúne práticas de prevenção, acolhimento e mensuração de saúde mental no ambiente corporativo.',
    themes: ['Direitos Humanos'],
    type: 'Guia',
    language: 'Português',
    date: '2026-04-15',
    pages: 52,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    slug: 'guia-salario-digno-america-latina',
    title: 'Guia do Salário Digno – Visão América Latina com Foco no Brasil',
    summary:
      'Metodologia de cálculo, referências regionais e caminhos de implementação do salário digno em cadeias de valor latino-americanas.',
    themes: ['Salário Digno', 'Direitos Humanos'],
    type: 'Guia',
    language: 'Português',
    date: '2026-04-08',
    pages: 74,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'guia-inclusao-produtiva-jovens-aprendizes',
    title: 'Guia de Inclusão Produtiva de Jovens Aprendizes',
    summary:
      'Estrutura programas de aprendizagem com foco em permanência, desenvolvimento e efetivação de jovens em situação de vulnerabilidade.',
    themes: ['Direitos Humanos', 'Gênero'],
    type: 'Guia',
    language: 'Português',
    date: '2026-03-19',
    pages: 44,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'relatorio-ambicao-2030-balanco',
    title: 'Ambição 2030 — Balanço dos Dez Movimentos',
    summary:
      'Consolidação dos compromissos públicos assumidos pelas empresas signatárias e do progresso medido em cada um dos dez Movimentos.',
    themes: ['Institucional', 'Executivo'],
    type: 'Relatório',
    language: 'Português',
    date: '2026-05-30',
    pages: 96,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    featured: true,
  },
  {
    slug: 'manual-integridade-cadeia-de-valor',
    title: 'Manual de Integridade na Cadeia de Valor',
    summary:
      'Passo a passo para estender programas de compliance a fornecedores e terceiros, com modelos de cláusulas e trilhas de auditoria.',
    themes: ['Corrupção'],
    type: 'Manual',
    language: 'Português',
    date: '2026-02-26',
    pages: 58,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'pesquisa-transicao-climatica-setor-privado',
    title: 'Pesquisa: Transição Climática no Setor Privado Brasileiro',
    summary:
      'Levantamento com empresas participantes sobre metas de descarbonização, inventários de emissões e barreiras de financiamento.',
    themes: ['Clima'],
    type: 'Pesquisa',
    language: 'Português',
    date: '2026-06-12',
    pages: 40,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'guia-gestao-hidrica-empresarial',
    title: 'Guia de Gestão Hídrica Empresarial',
    summary:
      'Referências para medição de pegada hídrica, gestão de risco de água e engajamento com bacias hidrográficas críticas.',
    themes: ['Água', 'Clima'],
    type: 'Guia',
    language: 'Português',
    date: '2026-01-29',
    pages: 62,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'relatorio-agro-sustentavel-biomas',
    title: 'Agro Sustentável: Cadeias de Suprimento e Proteção de Biomas',
    summary:
      'Analisa rastreabilidade, desmatamento zero e certificação em cadeias agropecuárias com operação no Brasil.',
    themes: ['Agro'],
    type: 'Relatório',
    language: 'Português',
    date: '2025-11-20',
    pages: 84,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'pesquisa-equidade-racial-liderancas',
    title: 'Pesquisa: Equidade Racial em Posições de Liderança',
    summary:
      'Retrato da representatividade racial nos quadros de liderança das empresas participantes e das metas assumidas até 2030.',
    themes: ['Gênero', 'Direitos Humanos'],
    type: 'Pesquisa',
    language: 'Português',
    date: '2025-10-08',
    pages: 36,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'relatorio-anual-rede-brasil',
    title: 'Relatório Anual da Rede Brasil',
    summary:
      'Prestação de contas da rede: governança, composição, atividades realizadas e resultados do ciclo.',
    themes: ['Institucional'],
    type: 'Relatório',
    language: 'Português',
    date: '2026-03-05',
    pages: 112,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'guia-executivo-ods-conselhos',
    title: 'Guia Executivo: ODS na Pauta dos Conselhos',
    summary:
      'Material direto ao ponto para conselheiros e alta liderança sobre supervisão da agenda de sustentabilidade.',
    themes: ['Executivo', 'Institucional'],
    type: 'Guia',
    language: 'Português',
    date: '2025-09-17',
    pages: 28,
    fileUrl: '#',
    cover:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop',
  },
].sort(byDateDesc('date'));

/** @param {string} slug */
export const getPublicacao = (slug) => PUBLICACOES.find((p) => p.slug === slug) || null;

/** Temas que efetivamente têm publicações, na ordem canônica. */
export const temasComPublicacoes = () =>
  PUBLICACAO_TEMAS.filter(
    (t) => t === 'Todos' || PUBLICACOES.some((p) => p.themes.includes(t)),
  );

/** Tipos presentes no acervo, na ordem canônica. */
export const tiposComPublicacoes = () =>
  PUBLICACAO_TIPOS.filter(
    (t) => t === 'Todos' || PUBLICACOES.some((p) => p.type === t),
  );
