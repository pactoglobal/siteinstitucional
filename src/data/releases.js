// ============================================================
// SALA DE IMPRENSA — Fonte única de dados
// ------------------------------------------------------------
// Releases, notas e comunicados oficiais. É material para
// jornalista, não matéria para leitor: o que importa aqui é a
// posição oficial, a data, o porta-voz e o contato da assessoria.
// A cobertura editorial (matérias e reportagens) vive em
// `noticias.js` — públicos e formatos diferentes.
// ============================================================

import { byDateDesc } from '../utils/date';

/** Natureza do documento — define o peso institucional da peça. */
export const RELEASE_TIPOS = [
  'Todos',
  'Release',
  'Nota oficial',
  'Comunicado',
  'Posicionamento',
];

export const TIPO_CORES = {
  'Release': '#009EDB',
  'Nota oficial': '#1E3250',
  'Comunicado': '#297D6D',
  'Posicionamento': '#EC3740',
};

export const corDoTipo = (tipo) => TIPO_CORES[tipo] || '#1E3250';

/** Contato único da assessoria — exibido na listagem e em cada release. */
export const ASSESSORIA = {
  nome: 'Assessoria de Imprensa',
  organizacao: 'Pacto Global da ONU – Rede Brasil',
  email: 'imprensa@pactoglobal.org.br',
  telefone: '+55 11 0000-0000',
  horario: 'Segunda a sexta, 9h às 18h (BRT)',
};

/** Kit de imprensa: material pronto para uso em publicação. */
export const KIT_IMPRENSA = [
  {
    id: 'logos',
    titulo: 'Logotipos e marca',
    descricao: 'Versões oficiais em PNG e SVG, com manual de aplicação.',
    formato: 'ZIP',
    url: '#',
  },
  {
    id: 'factsheet',
    titulo: 'Factsheet institucional',
    descricao: 'Números, história e estrutura da Rede Brasil em uma página.',
    formato: 'PDF',
    url: '#',
  },
  {
    id: 'imagens',
    titulo: 'Banco de imagens',
    descricao: 'Fotos institucionais e de eventos liberadas para uso editorial.',
    formato: 'ZIP',
    url: '#',
  },
  {
    id: 'porta-vozes',
    titulo: 'Porta-vozes',
    descricao: 'Lista de especialistas disponíveis para entrevista, por tema.',
    formato: 'PDF',
    url: '#',
  },
];

export const RELEASES = [
  {
    slug: 'release-i-encontro-direitos-humanos-empresas',
    title:
      'Pacto Global da ONU – Rede Brasil realiza o I Encontro Brasileiro de Direitos Humanos e Empresas',
    excerpt:
      'Evento em São Paulo reúne ACNUDH, OIT e OCDE e antecipa a contribuição brasileira ao Fórum Internacional da ONU, em Genebra.',
    type: 'Release',
    date: '2026-07-28',
    location: 'São Paulo, SP',
    spokesperson: 'Diretoria Executiva — Rede Brasil',
    image:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop',
    featured: true,
    body: [
      {
        type: 'lead',
        text: 'O Pacto Global da ONU – Rede Brasil anuncia a realização do I Encontro Brasileiro de Direitos Humanos e Empresas, no dia 4 de agosto, na Cinemateca Brasileira, em São Paulo, em parceria com ACNUDH, OIT e OCDE.',
      },
      {
        type: 'p',
        text: 'O encontro reúne lideranças empresariais, representantes de governo, academia e sociedade civil para discutir a implementação dos Princípios Orientadores da ONU sobre Empresas e Direitos Humanos no contexto brasileiro.',
      },
      {
        type: 'p',
        text: 'Os encaminhamentos construídos ao longo do dia comporão a contribuição brasileira ao Fórum Internacional sobre Empresas e Direitos Humanos, em Genebra.',
      },
      {
        type: 'service',
        title: 'Serviço',
        items: [
          { label: 'Evento', value: 'I Encontro Brasileiro de Direitos Humanos e Empresas' },
          { label: 'Data', value: '4 de agosto de 2026' },
          { label: 'Local', value: 'Cinemateca Brasileira — São Paulo, SP' },
          { label: 'Credenciamento', value: 'imprensa@pactoglobal.org.br' },
        ],
      },
    ],
  },
  {
    slug: 'nota-oficial-ods-18-igualdade-etnico-racial',
    title: 'Nota oficial sobre a adoção do ODS 18 — Igualdade Étnico-Racial pela Rede Brasil',
    excerpt:
      'A Rede Brasil esclarece o escopo e a data de adoção do ODS 18 no âmbito de suas iniciativas e materiais institucionais.',
    type: 'Nota oficial',
    date: '2026-07-11',
    location: 'São Paulo, SP',
    spokesperson: 'Conselho Deliberativo — Rede Brasil',
    image:
      'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    body: [
      {
        type: 'lead',
        text: 'O Pacto Global da ONU – Rede Brasil esclarece os termos da adoção do ODS 18 — Igualdade Étnico-Racial no âmbito de suas iniciativas, materiais e comunicações institucionais.',
      },
      {
        type: 'p',
        text: 'A nota detalha o escopo da adoção pela rede e sua articulação com os demais Objetivos de Desenvolvimento Sustentável já incorporados aos dez Movimentos da Ambição 2030.',
      },
    ],
  },
  {
    slug: 'comunicado-forum-ambicao-2030-resultados',
    title: 'Comunicado: resultados do Fórum Ambição 2030 — edição 2026',
    excerpt:
      'Balanço do encontro anual, com o número de empresas participantes, compromissos assinados e os encaminhamentos por Movimento.',
    type: 'Comunicado',
    date: '2026-05-23',
    location: 'São Paulo, SP',
    spokesperson: 'Coordenação da Ambição 2030',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O Pacto Global da ONU – Rede Brasil divulga o balanço da edição 2026 do Fórum Ambição 2030, realizada em São Paulo entre 20 e 22 de maio.',
      },
      {
        type: 'p',
        text: 'O comunicado consolida o número de empresas participantes, os compromissos assinados no período e os encaminhamentos definidos por cada um dos dez Movimentos.',
      },
    ],
  },
  {
    slug: 'posicionamento-trabalho-decente-cadeias-de-valor',
    title: 'Posicionamento sobre trabalho decente em cadeias de valor',
    excerpt:
      'A rede reafirma os compromissos das empresas participantes quanto à devida diligência em direitos humanos junto a fornecedores.',
    type: 'Posicionamento',
    date: '2026-06-30',
    location: 'São Paulo, SP',
    spokesperson: 'Diretoria Executiva — Rede Brasil',
    image:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O Pacto Global da ONU – Rede Brasil reafirma o compromisso das empresas participantes com o trabalho decente em toda a cadeia de valor.',
      },
      {
        type: 'p',
        text: 'O posicionamento trata da devida diligência em direitos humanos aplicada a fornecedores e terceiros, e das expectativas da rede quanto a mecanismos de reparação acessíveis.',
      },
    ],
  },
  {
    slug: 'release-guia-devida-diligencia-mercado-financeiro',
    title: 'Rede Brasil lança Guia de Devida Diligência em Direitos Humanos para o mercado financeiro',
    excerpt:
      'Publicação orienta bancos, gestoras e seguradoras a incorporar risco em direitos humanos às decisões de crédito e investimento.',
    type: 'Release',
    date: '2026-04-16',
    location: 'São Paulo, SP',
    spokesperson: 'Coordenação de Direitos Humanos',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O Pacto Global da ONU – Rede Brasil lança o Guia Prático em Devida Diligência para os Direitos Humanos no Mercado Financeiro, disponível para download gratuito.',
      },
      {
        type: 'p',
        text: 'O material traduz os Princípios Orientadores da ONU para a realidade operacional de instituições financeiras que atuam no Brasil.',
      },
    ],
  },
  {
    slug: 'comunicado-encontro-nacional-25-anos',
    title: 'Comunicado: Encontro Nacional marca os 25 anos da Rede Brasil',
    excerpt:
      'Programação de novembro reúne empresas participantes no Rio de Janeiro e apresenta balanço consolidado de impacto.',
    type: 'Comunicado',
    date: '2026-06-25',
    location: 'Rio de Janeiro, RJ',
    spokesperson: 'Diretoria Executiva — Rede Brasil',
    image:
      'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O Pacto Global da ONU – Rede Brasil comunica a realização do Encontro Nacional que marca os 25 anos da rede no país, em novembro, no Rio de Janeiro.',
      },
    ],
  },
  {
    slug: 'release-semana-regional-integridade',
    title: 'Rede Brasil integra a 11ª Semana Regional de Integridade Empresarial',
    excerpt:
      'Edição de 2026 acontece em Assunção, no Paraguai, e reúne empresas da América Latina em torno da cultura de integridade.',
    type: 'Release',
    date: '2026-07-15',
    location: 'Assunção, Paraguai',
    spokesperson: 'Coordenação de Anticorrupção',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    body: [
      {
        type: 'lead',
        text: 'O Pacto Global da ONU – Rede Brasil participa da 11ª Semana Regional de Integridade Empresarial, promovida pela Alliance for Integrity, entre 17 e 21 de agosto, em Assunção.',
      },
    ],
  },
].sort(byDateDesc('date'));

/** @param {string} slug */
export const getRelease = (slug) => RELEASES.find((r) => r.slug === slug) || null;

/** Tipos presentes no acervo, na ordem canônica. */
export const tiposComReleases = () =>
  RELEASE_TIPOS.filter((t) => t === 'Todos' || RELEASES.some((r) => r.type === t));

/** Outros documentos para o rodapé da página de release. */
export const getOutrosReleases = (slug, limite = 3) =>
  RELEASES.filter((r) => r.slug !== slug).slice(0, limite);
