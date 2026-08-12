// ============================================================
// AGENDA / EVENTOS — Fonte única de dados
// ------------------------------------------------------------
// Espelha pactoglobal.org.br/agenda/ e /agendas/<slug>/.
// Datas em ISO (YYYY-MM-DD) para permitir ordenação, filtro por
// período e separação entre agenda futura e realizada — o que a
// string livre "18 Março — 20 Junho 2026" impedia.
// ============================================================

import { byDateAsc, byDateDesc, todayISO } from '../utils/date';

export const EVENTO_CATEGORIAS = [
  'Todos',
  'Direitos Humanos',
  'Anticorrupção',
  'Adesão',
  'Clima',
  'Institucional',
  'Academy',
];

export const EVENTO_FORMATOS = ['Todos', 'Presencial', 'Online', 'Híbrido'];

export const CATEGORIA_CORES = {
  'Direitos Humanos': '#6E417A',
  'Anticorrupção': '#EC3740',
  'Adesão': '#009EDB',
  'Clima': '#297D6D',
  'Institucional': '#1E3250',
  'Academy': '#CCB146',
};

export const corDaCategoria = (categoria) => CATEGORIA_CORES[categoria] || '#1E3250';

export const ACESSO_ABERTO = 'Aberto ao público';
export const ACESSO_PARTICIPANTES = 'Exclusivo para participantes';

export const EVENTOS = [
  {
    slug: 'semana-regional-de-integridade-alliance-for-integrity',
    title: '11ª Semana Regional de Integridade Empresarial',
    subtitle: 'Alliance for Integrity',
    excerpt:
      'Cultura da Integridade Global: a ética como linguagem universal para negócios internacionais sustentáveis.',
    category: 'Anticorrupção',
    format: 'Presencial',
    access: ACESSO_PARTICIPANTES,
    startDate: '2026-08-17',
    endDate: '2026-08-21',
    time: '09h00 às 18h00',
    location: 'Assunção, Paraguai',
    city: 'Assunção',
    organizer: 'Alliance for Integrity (GIZ) e APAC',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'A 11ª Semana Regional de Integridade Empresarial aborda a temática "Cultura da Integridade Global: a ética como linguagem universal para negócios internacionais sustentáveis".',
      },
      {
        type: 'p',
        text: 'O encontro parte de uma constatação: a integridade deixou de ser um requisito reputacional para se tornar infraestrutura essencial da confiança nos negócios globais — e diferencial competitivo concreto no acesso a financiamento e a mercados internacionais.',
      },
      {
        type: 'p',
        text: 'A programação reúne empresas, órgãos de controle e organizações da sociedade civil da América Latina em torno de práticas de compliance aplicáveis a cadeias de valor transfronteiriças.',
      },
    ],
    programa: [
      { time: '17/08', title: 'Abertura regional', desc: 'Panorama da integridade empresarial na América Latina.' },
      { time: '18/08', title: 'Compliance em cadeias de valor', desc: 'Devida diligência de terceiros e fornecedores.' },
      { time: '19/08', title: 'Integridade e acesso a financiamento', desc: 'O que investidores e bancos passaram a exigir.' },
      { time: '20/08', title: 'Casos empresariais', desc: 'Programas de integridade em operação, com resultados medidos.' },
      { time: '21/08', title: 'Encerramento e encaminhamentos', desc: 'Compromissos regionais para o próximo ciclo.' },
    ],
  },
  {
    slug: 'conheca-o-pacto-global-rede-brasil-agosto',
    title: 'Conheça o Pacto Global da ONU – Rede Brasil',
    excerpt:
      'Sessão de apresentação para empresas interessadas em aderir: os Dez Princípios, critérios, etapas e benefícios da participação.',
    category: 'Adesão',
    format: 'Online',
    access: ACESSO_ABERTO,
    startDate: '2026-08-12',
    endDate: null,
    time: '10h00 às 11h30',
    location: 'Online',
    organizer: 'Pacto Global da ONU – Rede Brasil',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'Encontro mensal aberto a empresas de qualquer porte que queiram entender o que significa aderir ao Pacto Global da ONU.',
      },
      {
        type: 'p',
        text: 'A sessão cobre os Dez Princípios, os critérios e requisitos de participação, as etapas de adesão e as obrigações de comunicação de progresso (CoP).',
      },
    ],
    programa: [
      { time: '10h00', title: 'O que é o Pacto Global', desc: 'Origem, escopo global e atuação da Rede Brasil.' },
      { time: '10h30', title: 'Critérios e etapas de adesão', desc: 'O passo a passo do processo.' },
      { time: '11h00', title: 'Perguntas e respostas', desc: 'Espaço aberto às empresas participantes.' },
    ],
  },
  {
    slug: 'i-encontro-brasileiro-direitos-humanos-e-empresas',
    title: 'I Encontro Brasileiro de Direitos Humanos e Empresas',
    excerpt:
      'Realização conjunta com ACNUDH, OIT e OCDE que antecipa a agenda brasileira levada ao Fórum Internacional em Genebra.',
    category: 'Direitos Humanos',
    format: 'Presencial',
    access: ACESSO_ABERTO,
    startDate: '2026-08-04',
    endDate: null,
    time: '09h00 às 18h00',
    location: 'Cinemateca Brasileira — São Paulo, SP',
    city: 'São Paulo',
    organizer: 'Rede Brasil, ACNUDH, OIT e OCDE',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'O encontro reúne lideranças empresariais, governo, academia e sociedade civil para discutir a implementação dos Princípios Orientadores da ONU sobre Empresas e Direitos Humanos no Brasil.',
      },
    ],
    programa: [
      { time: '09h00', title: 'Abertura', desc: 'ACNUDH, OIT, OCDE e Rede Brasil.' },
      { time: '11h00', title: 'Devida diligência no mercado financeiro', desc: 'Sessão técnica.' },
      { time: '14h00', title: 'Salário digno na América Latina', desc: 'Mesa temática.' },
      { time: '16h30', title: 'Encaminhamentos para Genebra', desc: 'Consolidação das recomendações.' },
    ],
  },
  {
    slug: 'dialogos-dh-dei-ciclo-2026',
    title: 'Diálogos DH & DEI — Ciclo 2026',
    excerpt:
      'Ciclo de encontros sobre direitos humanos, diversidade, equidade e inclusão nas operações empresariais.',
    category: 'Direitos Humanos',
    format: 'Online',
    access: ACESSO_PARTICIPANTES,
    startDate: '2026-08-18',
    endDate: null,
    time: '14h00 às 16h00',
    location: 'Online',
    organizer: 'Pacto Global da ONU – Rede Brasil',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'Encontro do ciclo Diálogos DH & DEI, voltado a profissionais de sustentabilidade, jurídico e recursos humanos das empresas participantes.',
      },
    ],
  },
  {
    slug: 'ambicao-2030-impacto-metas-climaticas',
    title: 'Ambição 2030: O Impacto das Metas Climáticas',
    excerpt:
      'Workshop da Academy sobre definição, validação e acompanhamento de metas climáticas baseadas na ciência.',
    category: 'Academy',
    format: 'Online',
    access: ACESSO_ABERTO,
    startDate: '2026-09-25',
    endDate: null,
    time: '09h00 às 12h00',
    location: 'Online',
    organizer: 'Pacto Global da ONU – Rede Brasil',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'Workshop prático sobre como estruturar metas climáticas alinhadas à ciência e integrá-las ao planejamento das operações.',
      },
    ],
  },
  {
    slug: 'encontro-nacional-rede-brasil-25-anos',
    title: 'Encontro Nacional da Rede Brasil — 25 Anos',
    excerpt:
      'Celebração dos 25 anos da rede no Brasil, com balanço consolidado de impacto das empresas participantes.',
    category: 'Institucional',
    format: 'Híbrido',
    access: ACESSO_PARTICIPANTES,
    startDate: '2026-11-03',
    endDate: '2026-11-04',
    time: '09h00 às 19h00',
    location: 'Rio de Janeiro, RJ',
    city: 'Rio de Janeiro',
    organizer: 'Pacto Global da ONU – Rede Brasil',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'O Encontro Nacional marca os 25 anos da Rede Brasil com a apresentação de um balanço consolidado dos resultados das empresas participantes.',
      },
    ],
  },
  {
    slug: 'forum-ambicao-2030-edicao-2026',
    title: 'Fórum Ambição 2030 — Edição 2026',
    excerpt:
      'Principal encontro anual da rede, com os dez Movimentos, painéis de alto nível e apresentação de resultados.',
    category: 'Institucional',
    format: 'Presencial',
    access: ACESSO_ABERTO,
    startDate: '2026-05-20',
    endDate: '2026-05-22',
    time: '08h30 às 19h00',
    location: 'São Paulo, SP',
    city: 'São Paulo',
    organizer: 'Pacto Global da ONU – Rede Brasil',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'Três dias dedicados ao avanço dos dez Movimentos da Ambição 2030 e à tradução dos compromissos públicos em metas mensuráveis.',
      },
    ],
  },
  {
    slug: 'cfo-coalition-encontro-junho',
    title: 'CFO Coalition — Encontro de Lideranças Financeiras',
    excerpt:
      'Sessão fechada com diretores financeiros sobre integração dos ODS às decisões de alocação de capital.',
    category: 'Clima',
    format: 'Presencial',
    access: ACESSO_PARTICIPANTES,
    startDate: '2026-06-18',
    endDate: null,
    time: '15h00 às 18h00',
    location: 'São Paulo, SP',
    city: 'São Paulo',
    organizer: 'Pacto Global da ONU – Rede Brasil',
    language: 'Português',
    registrationUrl: '#',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    description: [
      {
        type: 'lead',
        text: 'Encontro da CFO Coalition sobre como as decisões de alocação de capital incorporam os Objetivos de Desenvolvimento Sustentável.',
      },
    ],
  },
];

/** @param {string} slug */
export const getEvento = (slug) => EVENTOS.find((e) => e.slug === slug) || null;

/** Data de referência para o corte entre agenda futura e realizada. */
const fimDoEvento = (evento) => evento.endDate || evento.startDate;

export const isProximo = (evento, hoje = todayISO()) => fimDoEvento(evento) >= hoje;

/** Próximos eventos, do mais iminente ao mais distante. */
export const proximosEventos = (hoje = todayISO()) =>
  EVENTOS.filter((e) => isProximo(e, hoje)).sort(byDateAsc('startDate'));

/** Eventos realizados, do mais recente ao mais antigo. */
export const eventosRealizados = (hoje = todayISO()) =>
  EVENTOS.filter((e) => !isProximo(e, hoje)).sort(byDateDesc('startDate'));

/** Anos com eventos, decrescente — alimenta o filtro de período. */
export const anosComEventos = () =>
  [...new Set(EVENTOS.map((e) => e.startDate.slice(0, 4)))].sort((a, b) => b.localeCompare(a));

/** Outros eventos para o rodapé da página de detalhe. */
export const getEventosRelacionados = (slug, limite = 3) => {
  const atual = getEvento(slug);
  if (!atual) return [];

  const mesmaCategoria = EVENTOS.filter(
    (e) => e.slug !== slug && e.category === atual.category,
  );
  const demais = EVENTOS.filter(
    (e) => e.slug !== slug && e.category !== atual.category,
  );

  return [...mesmaCategoria, ...demais]
    .sort(byDateAsc('startDate'))
    .slice(0, limite);
};
