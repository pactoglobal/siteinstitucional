/**
 * Textos das páginas ESG (#/esg) e ODS (#/ods) — Pacto Global da ONU – Rede Brasil.
 *
 * Toda a copy das duas páginas fica aqui, para ser revisada num lugar só. Os
 * componentes de src/components/esg-ods só montam o layout.
 *
 * Roteiro da página ESG:
 *   1. Origem: a pergunta que o Pacto Global fez ao mercado em 2004.
 *   2. O que cada letra cobre: uma pergunta por pilar.
 *   3. Por que agora: de escolha voluntária a exigência de mercado.
 *   4. O que a empresa faz na Rede Brasil: aprender, assumir metas, prestar contas.
 *   5. Dúvidas frequentes.
 *   6. Próximo passo.
 *
 * Roteiro da página ODS:
 *   1. O acordo de 2015 e o 18º objetivo.
 *   2. Onde a Rede Brasil atua em cada ODS (explorador).
 *   3. O ODS 18.
 *   4. Da agenda à meta: os movimentos da Ambição 2030.
 *   5. Por onde começar: ferramentas do Pacto Global.
 *   6. Próximo passo.
 *
 * Regras de copy que valem aqui:
 * - ODS 18: "proposição brasileira, implementada pelo Pacto Global em 2025".
 *   Não trocar o ator nem a data.
 * - "Participantes", nunca "signatários"; "Dez Princípios" por extenso.
 * - O Pacto Global é "a maior iniciativa de sustentabilidade corporativa do
 *   mundo". Aderir não exige cumprir tudo antes, e o Pacto não certifica.
 */

import { ODS_COLORS, ODS_NAMES, INSTITUTIONAL_STATS } from './constants';

/** Lista dos 17 ODS + ODS 18 para grades e badges */
export const ODS_LIST = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: ODS_NAMES[i],
  color: ODS_COLORS[i],
  image: `/siteinstitucional/ods/ods-${i + 1}.jpg`,
}));

const PARTICIPANTES = INSTITUTIONAL_STATS.brasilParticipants;

const ORIGEM_ESG =
  'O termo foi cunhado em <strong>2004</strong> no relatório <em>"Who Cares Wins"</em>, iniciativa do Pacto Global da ONU com apoio da IFC (Grupo Banco Mundial) e do governo suíço. Partiu de um convite do secretário-geral da ONU <strong>Kofi Annan</strong> a mais de 50 CEOs de grandes instituições financeiras, para que propusessem como integrar fatores ambientais, sociais e de governança à análise de investimentos. Cerca de 20 instituições, de 9 países, endossaram o relatório.';

const BOTOES_CTA = [
  { label: 'Como aderir', href: '#/como-aderir', variant: 'primary' },
  { label: 'Conheça a Ambição 2030', href: '#/ambicao', variant: 'secondary' },
  { label: 'Ver Plataformas de Ação', href: '#/plataformas', variant: 'secondary' },
];

/* ------------------------------------------------------------------ */
/* Página ESG                                                           */
/* ------------------------------------------------------------------ */

export const TEXTOS_ESG = {
  hero: {
    selo: 'Desde 2004',
    titulo: 'ESG',
    subtitulo: 'Ambiental, Social e Governança',
    texto:
      'Em 2004, o Pacto Global da ONU perguntou ao mercado financeiro como levar em conta o planeta, as pessoas e a ética na hora de investir. A resposta ganhou três letras e mudou a forma como as empresas são avaliadas. Veja o que cada uma cobre e como a Rede Brasil ajuda sua empresa a passar do compromisso ao resultado.',
    acao: 'Conheça os pilares',
    link: 'Ver os 18 ODS',
  },

  pilares: {
    selo: 'O que cada letra cobre',
    titulo: 'Três perguntas',
    destaque: 'que toda empresa precisa responder',
    descricao:
      'Investidores, clientes, reguladores e a sociedade fazem as mesmas perguntas a qualquer empresa. Os temas mostram onde procurar a resposta; os indicadores, como comprová-la.',
    rotuloMedida: 'Como se mede:',
    rotuloPrincipios: 'Dez Princípios relacionados',
  },

  regulacao: {
    selo: 'Por que agora',
    titulo: 'De escolha a exigência',
    texto:
      'Por quase duas décadas, o ESG foi uma decisão voluntária. Hoje ele está nas regras do mercado de capitais brasileiro e nas exigências de quem compra do Brasil. Participar do Pacto Global prepara a empresa para essa conversa.',
  },

  emAcao: {
    selo: 'Do compromisso à prática',
    titulo: 'A adesão é o começo',
    descricao:
      'Ao aderir ao Pacto Global da ONU – Rede Brasil, a empresa assume os Dez Princípios e passa a contar com três frentes para transformar compromisso em resultado.',
    etapas: {
      plataformas: {
        verbo: 'Aprender junto',
        titulo: 'Plataformas de Ação',
        texto: (total) =>
          `${total} plataformas temáticas em que as empresas participantes trocam práticas, constroem soluções em conjunto e aprofundam as agendas ambiental, social e de governança.`,
        acao: 'Ver as plataformas',
      },
      ambicao: {
        verbo: 'Assumir metas públicas',
        titulo: 'Ambição 2030',
        texto: (total) =>
          `${total} movimentos com metas públicas e mensuráveis até 2030. A empresa escolhe em quais entrar e assume o compromisso diante do mercado.`,
        acao: 'Conhecer a Ambição 2030',
      },
      cop: {
        verbo: 'Prestar contas',
        titulo: 'Comunicação de Progresso',
        texto:
          'Todo ano, a empresa relata o que fez para aplicar os Dez Princípios e contribuir com os ODS. É o registro do avanço de cada participante, ano após ano.',
        acao: 'Entender a CoP',
      },
    },
  },

  perguntas: {
    selo: 'Dúvidas frequentes',
    titulo: 'ESG, ODS e o Pacto Global',
    texto:
      'Os dois conceitos aparecem juntos o tempo todo. Em uma frase: os ODS dizem o que o mundo precisa resolver até 2030; o ESG mostra como cada empresa contribui e como comprova isso.',
    itens: [
      {
        id: 'esg',
        pergunta: 'O que é ESG, em uma frase?',
        resposta:
          'É a forma de avaliar como uma empresa lida com o meio ambiente, com as pessoas e com a própria gestão, e o quanto isso afeta o valor dela e a sociedade. Não é selo nem certificação: nenhuma empresa "é ESG". Ela tem práticas e resultados melhores ou piores em cada tema.',
      },
      { id: 'origem', pergunta: 'De onde vem o termo?', resposta: ORIGEM_ESG, html: true },
      {
        id: 'conexao',
        pergunta: 'Como ESG e ODS se conectam?',
        resposta:
          'Os ODS são a agenda: 17 objetivos acordados em 2015 pelos 193 países-membros da ONU, mais o ODS 18, Igualdade Étnico-Racial, uma proposição brasileira implementada pelo Pacto Global em 2025. O ESG é a gestão: os temas, as metas e os indicadores com que a empresa mostra o que faz por essa agenda, e também os impactos negativos que precisa reduzir.',
      },
      {
        id: 'obrigatorio',
        pergunta: 'ESG é obrigatório?',
        resposta:
          'Para companhias abertas e instituições financeiras, a divulgação de informações de sustentabilidade já está nas regras da CVM e do Conselho Monetário Nacional. Para as demais empresas, a exigência costuma chegar pela cadeia de valor: grandes clientes, investidores, bancos e mercados de exportação pedem dados ESG a quem fornece para eles.',
      },
      {
        id: 'evolucao',
        pergunta: 'Como o ESG evoluiu?',
        resposta:
          'Começou no mercado financeiro, como critério para excluir setores problemáticos das carteiras de investimento. Hoje orienta a <strong>estratégia</strong> das empresas: gestão de riscos climáticos, inovação em produtos de baixo carbono, atração de talentos, acesso a crédito e a confiança da sociedade para operar.',
        html: true,
      },
      {
        id: 'adesao',
        pergunta: 'A empresa precisa cumprir tudo antes de aderir ao Pacto Global?',
        resposta:
          'Não. A adesão é um compromisso público de aplicar os Dez Princípios, contribuir com os ODS e relatar o progresso todo ano, na Comunicação de Progresso. O Pacto Global é uma iniciativa voluntária: não certifica nem classifica empresas. <a href="#/como-aderir" class="font-bold text-un-blue underline decoration-un-gold underline-offset-4 hover:text-un-blue-1">Veja como aderir</a>.',
        html: true,
      },
    ],
  },

  cta: {
    selo: 'Próximo passo',
    titulo: 'Sua empresa pode começar agora',
    descricao: `O Pacto Global da ONU é a maior iniciativa de sustentabilidade corporativa do mundo. No Brasil, são mais de ${PARTICIPANTES} participantes trocando práticas, assumindo metas e prestando contas.`,
    botoes: BOTOES_CTA,
    outraPagina: 'Veja os 18 ODS e onde a Rede Brasil atua em cada um',
  },
};

/**
 * Os três pilares. A ordem é a do bento (E em destaque). O visual de cada um
 * (cor, foto, áreas dos Dez Princípios) fica em components/esg-ods/pilares.js.
 */
export const PILARES_ESG = [
  {
    letra: 'E',
    pergunta: 'Qual é o impacto da empresa no planeta, e do planeta na empresa?',
    temas: ['Mudança climática', 'Energia', 'Água', 'Biodiversidade', 'Economia circular', 'Poluição'],
    medida:
      'emissões de gases de efeito estufa (escopos 1, 2 e 3), participação de energia renovável, consumo de água por unidade produzida, resíduos reaproveitados e área restaurada.',
  },
  {
    letra: 'S',
    pergunta: 'Como a empresa trata as pessoas, dentro e fora dela?',
    temas: ['Diversidade e inclusão', 'Saúde e segurança', 'Direitos humanos', 'Relações de trabalho', 'Comunidades', 'Cadeia de valor'],
    medida:
      'mulheres e pessoas negras e indígenas na liderança, salário digno, taxa de acidentes, horas de treinamento e fornecedores avaliados em direitos humanos.',
  },
  {
    letra: 'G',
    pergunta: 'Quem decide, com que regras e com quanta transparência?',
    temas: ['Conselho', 'Remuneração', 'Anticorrupção', 'Transparência', 'Ética e integridade', 'Direitos dos acionistas'],
    medida:
      'conselheiros independentes, mulheres no conselho, remuneração variável ligada a metas ESG, casos de corrupção apurados e relato com asseguração independente.',
  },
];

/** Contexto regulatório no Brasil */
export const CONTEXTO_REGULATORIO = {
  resolucoes: [
    {
      nome: 'Resolução CVM 59/2021',
      status: 'Vigente',
      descricao: 'Primeiras exigências formais de divulgação ESG no Formulário de Referência (FRE) para companhias abertas, sob o modelo "pratique ou explique" — exigindo dados sobre diversidade no conselho, emissões de GEE e remuneração atrelada a métricas ESG.',
    },
    {
      nome: 'Resoluções CVM 193/2023 e CVM 244/2026 (Padrões ISSB — IFRS S1 e S2)',
      status: 'Vigente',
      descricao: 'Brasil pioneiro na internalização dos padrões globais do ISSB (IFRS S1 — Requisitos Gerais de Sustentabilidade e IFRS S2 — Divulgações Climáticas). Modelo "pratique ou explique" permanente; empresas que optarem por reportar sob padrão IFRS devem fazê-lo por no mínimo três exercícios consecutivos, exigindo consistência e dados auditáveis.',
    },
    {
      nome: 'Resolução CMN 5.185/2024',
      status: 'Vigente',
      descricao: 'Para instituições financeiras, mantém exigências alinhadas ao IFRS S1/S2 — gestão de riscos climáticos, sociais e de governança no sistema financeiro.',
    },
    {
      nome: 'EUDR — Regulamento da UE Livre de Desmatamento (2023/1115)',
      status: 'Aplicável a exportadores',
      descricao: 'Regulamentação extraterritorial que exige que empresas exportadoras para a UE comprovem rastreabilidade georreferenciada e ausência de desmatamento em cadeias de soja, carne, madeira, café, cacau, borracha, óleo de palma.',
    },
    {
      nome: 'CSRD/ESRS — Corporate Sustainability Reporting Directive (UE)',
      status: 'Aplicável a empresas com subsidiárias na UE',
      descricao: 'Padrão europeu obrigatório de reporte de sustentabilidade (European Sustainability Reporting Standards) — dupla materialidade, asseguração, taxonomia verde.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Página ODS                                                           */
/* ------------------------------------------------------------------ */

export const TEXTOS_ODS = {
  hero: {
    selo: 'Agenda 2030',
    titulo: 'Os 18 ODS',
    subtitulo: '17 objetivos globais e um brasileiro',
    texto:
      'Em 2015, os 193 países-membros da ONU acordaram 17 objetivos para acabar com a pobreza, proteger o planeta e reduzir desigualdades até 2030. O 18º, Igualdade Étnico-Racial, é uma proposição brasileira, implementada pelo Pacto Global em 2025. Escolha um objetivo e veja como as empresas da Rede Brasil trabalham nele.',
    acao: 'Explorar os ODS',
    link: 'Entender o ESG',
  },

  explorador: {
    selo: 'Escolha um objetivo',
    titulo: 'Onde a Rede Brasil atua',
    descricao:
      'Selecione um ODS para ver os movimentos da Ambição 2030 e as Plataformas de Ação que trabalham o tema com as empresas participantes.',
    rotuloMovimentos: 'Movimentos da Ambição 2030',
    rotuloPlataformas: 'Plataformas de Ação',
    rotuloMeta: 'Exemplo de meta · Ambição pelos ODS',
    semMovimento:
      'Nenhum movimento da Ambição 2030 tem este ODS como foco. O tema é trabalhado nas Plataformas de Ação abaixo.',
  },

  ods18: {
    selo: 'O 18º objetivo',
    titulo: 'ODS 18 — Igualdade Étnico-Racial',
    texto:
      'Nenhum dos 17 ODS é dedicado à igualdade étnico-racial. O 18º é uma proposição brasileira, implementada pelo Pacto Global em 2025. Na Rede Brasil, o tema é trabalhado pelo movimento Raça é Prioridade.',
    acaoNota: 'Ler a nota oficial',
    acaoMovimento: 'Raça é Prioridade',
  },

  movimentos: {
    selo: 'Ambição 2030',
    titulo: 'Da agenda à meta',
    descricao: (total) =>
      `${total} movimentos traduzem os ODS em metas públicas e mensuráveis para as empresas até 2030. Cada um tem foco em ODS prioritários.`,
    acao: 'Conhecer a Ambição 2030',
  },

  ferramentas: {
    selo: 'Por onde começar',
    titulo: 'Como levar os ODS para a estratégia',
    descricao: 'Duas ferramentas do Pacto Global para sair da intenção e chegar a metas.',
  },

  cta: {
    selo: 'Próximo passo',
    titulo: 'Coloque sua empresa na Agenda 2030',
    descricao: `Participar do Pacto Global da ONU – Rede Brasil é assumir os Dez Princípios, escolher em quais ODS a empresa vai fazer diferença e trabalhar ao lado de mais de ${PARTICIPANTES} participantes para chegar lá.`,
    botoes: BOTOES_CTA,
    outraPagina: 'Entenda o que é ESG e como ele se conecta aos ODS',
  },
};

/** Ferramentas do Pacto Global para trabalhar os ODS */
export const FERRAMENTAS_ODS = {
  sdgCompass: {
    tipo: 'Guia metodológico',
    titulo: 'SDG Compass',
    descricao:
      'Guia do Pacto Global em cinco passos para a empresa entender seus impactos sobre os ODS, escolher prioridades e definir metas compatíveis.',
    passos: [
      'Entender os ODS',
      'Definir prioridades',
      'Estabelecer metas',
      'Integrar à estratégia',
      'Reportar e comunicar',
    ],
    links: [
      { label: 'Roadmap "Como trabalhar os ODS"', url: 'https://materiais.pactoglobal.org.br/como-trabalhar-os-ods' },
      { label: 'Publicação completa SDG Compass', url: 'https://materiais.pactoglobal.org.br/sdg-compass' },
    ],
  },
  ambicaoPelosOds: {
    tipo: 'Programa de aceleração',
    titulo: 'Ambição pelos ODS (SDG Ambition)',
    descricao:
      'Programa internacional do Pacto Global que ajuda as empresas a definir metas ambiciosas ligadas aos ODS e a integrá-las à gestão. Foi lançado em janeiro de 2020, no Fórum Econômico Mundial, em Davos, pelo secretário-geral da ONU, António Guterres.',
    beneficios: [
      'Ir além do progresso incremental',
      'Intensificar a mudança transformadora',
      'Ampliar o valor do negócio',
      'Construir resiliência',
      'Impulsionar o crescimento de longo prazo',
    ],
    link: { label: 'Saiba mais sobre Ambição pelos ODS', url: 'https://www.pactoglobal.org.br/pg/ambicao-pelos-ods' },
  },
};

/** Exemplos de meta do programa Ambição pelos ODS, mostrados no explorador */
export const METAS_AMBICAO_ODS = [
  { ods: 13, meta: 'Estabelecer metas de redução de emissões alinhadas à ciência (SBTi) para limitar o aquecimento a 1,5°C.' },
  { ods: 5, meta: 'Alcançar paridade de gênero em cargos de liderança até 2030.' },
  { ods: 8, meta: 'Erradicar trabalho forçado, infantil e traficado nas cadeias de valor.' },
  { ods: 12, meta: 'Eliminar plásticos de uso único e implementar modelos circulares.' },
  { ods: 10, meta: 'Promover equidade salarial e inclusão de grupos sub-representados.' },
  { ods: 9, meta: 'Acelerar inovação em tecnologias de baixo carbono e infraestrutura resiliente.' },
];
