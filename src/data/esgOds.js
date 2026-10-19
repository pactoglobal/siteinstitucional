/**
 * Dados da página ESG e ODS — Pacto Global da ONU - Rede Brasil
 * Baseado em: https://www.pactoglobal.org.br/esg/ + NotebookLM Brasil Sustenta (Brand Bible)
 * Fonte única de copy — nenhum texto institucional direto no JSX
 */

import { ODS_COLORS, ODS_NAMES } from './constants';

/** Lista dos 17 ODS + ODS 18 (Brasil) para uso em grids/badges */
export const ODS_LIST = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: ODS_NAMES[i],
  color: ODS_COLORS[i],
}));

/** Fundamentação conceitual: ODS vs ESG */
export const FUNDAMENTACAO_CONCEITUAL = {
  titulo: 'ODS e ESG: Conceitos Complementares',
  intro: 'A página institucional esclarece de forma definitiva a diferença e a complementaridade entre os dois conceitos, superando a confusão comum no mercado.',
  ods: {
    titulo: 'ODS (Agenda 2030)',
    descricao: 'Trata-se de uma agenda normativa global pactuada em 2015 por 193 países-membros da ONU, composta por 17 Objetivos e 169 metas. Define as necessidades prioritárias da sociedade e do planeta — "o que a humanidade precisa resolver".',
  },
  esg: {
    titulo: 'Fatores ESG (Environmental, Social, Governance)',
    descricao: 'Constituem uma abordagem analítica e operacional de gestão e investimentos. Traduzem externalidades socioambientais em métricas de risco, oportunidade e geração de valor de longo prazo para as corporações — "como a empresa opera e mede seu impacto".',
  },
  sinergia: {
    titulo: 'Dinâmica Causal e Dupla Materialidade',
    descricao: 'A relação entre eles opera de forma indissociável: enquanto os ODS estabelecem as metas macroeconômicas de sustentabilidade, as práticas ESG funcionam como o motor microeconômico e operacional corporativo para alcançá-las. Organizações que adotam critérios ESG estruturados reduzem riscos e geram contribuições diretas e auditáveis para as metas dos ODS.',
  },
};

/** Definição e contexto geral de ESG (versão simplificada para seção "O que é ESG") */
export const ESG_DEFINICAO = {
  titulo: 'O que é ESG?',
  descricao: 'ESG é uma sigla em inglês que significa Environmental, Social and Governance, e corresponde às práticas ambientais, sociais e de governança de uma organização. O termo foi cunhado em 2004 em uma publicação do Pacto Global em parceria com o Banco Mundial, chamada Who Cares Wins. Surgiu de uma provocação do secretário-geral da ONU Kofi Annan a 50 CEOs de grandes instituições financeiras, sobre como integrar fatores sociais, ambientais e de governança no mercado de capitais.',
  pilares: [
    {
      letra: 'E',
      nome: 'Environmental (Ambiental)',
      descricao: 'Como a empresa impacta o meio ambiente: emissões de carbono, gestão de resíduos, uso de recursos naturais, biodiversidade, mudança climática.',
    },
    {
      letra: 'S',
      nome: 'Social',
      descricao: 'Como a empresa trata as pessoas: direitos humanos, trabalho decente, diversidade e inclusão, saúde e segurança, relações com comunidades.',
    },
    {
      letra: 'G',
      nome: 'Governance (Governança)',
      descricao: 'Como a empresa é gerida: estrutura do conselho, remuneração executiva, anticorrupção, transparência, direitos dos acionistas, ética.',
    },
  ],
};

/** Conexão ESG ↔ ODS */
export const ESG_ODS_CONEXAO = {
  titulo: 'ESG e os ODS: uma conexão inseparável',
  descricao: 'Os critérios ESG estão totalmente relacionados aos ODS, realidade nas discussões no mercado de capitais. Os 17 Objetivos de Desenvolvimento Sustentável reúnem os grandes desafios e vulnerabilidades da sociedade como um todo. Com isso, apontam os principais itens a serem acompanhados de perto.',
  textoApoio: 'Segundo o Climate Change and Sustainability Services, da Ernest Young, as informações ESG são essenciais hoje para a tomada de decisões dos investidores. ESG nada mais é do que a própria sustentabilidade empresarial. Uma empresa que está em conformidade com práticas ESG entende quais são seus impactos negativos e positivos na sociedade e consegue agir sobre eles.',
};

/** 10 Movimentos da Ambição 2030 conectados a pilares ESG e ODS */
export const MOVIMENTOS_AMBICAO_2030 = [
  {
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: 'Ambição Net Zero',
    ods: 13,
    metas: 'Inventário GEE (Escopos 1, 2 e 3) anual, metas baseadas na ciência (SBTi) para limitar o aquecimento a 1,5°C e redução acumulada de 2 Gt CO₂e',
    descricao: 'Engajar o setor empresarial para estabelecer metas climáticas baseadas na ciência com ambição coletiva de contribuir para limitar as emissões líquidas nacionais.',
  },
  {
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: '+ Água',
    ods: 6,
    metas: 'Eficiência hídrica operacional, neutralidade de água em regiões estressadas e resiliência em saneamento para impactar 100 milhões de pessoas',
    descricao: 'Acelerar a universalização do saneamento e a resiliência hídrica do Brasil até 2033.',
  },
  {
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: 'Conexão Circular',
    ods: 12,
    metas: 'Implementação de ecodesign, modelos de negócios circulares e aceleração da meta de zero resíduos em aterros até 2030',
    descricao: 'Eliminando resíduos e promovendo a transição para modelos de negócios 100% circulares.',
  },
  {
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: 'Impacto Biomas',
    ods: 15,
    metas: 'Rastreabilidade total das cadeias de suprimento e garantia de desmatamento zero',
    descricao: 'Zerar o desmatamento nas cadeias produtivas e promover a bioeconomia nos biomas nacionais.',
  },
  {
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Elas Lideram 2030',
    ods: 5,
    metas: '30% de mulheres em cargos de alta liderança até 2025 e 50% até 2030',
    descricao: 'Promover a igualdade de gênero nas posições de liderança corporativa brasileira.',
  },
  {
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Raça é Prioridade',
    ods: 10,
    odsExtra: 18,
    metas: '30% de pessoas negras/indígenas em posições de liderança até 2025 e 50% até 2030',
    descricao: 'Promover a equidade racial e combater o racismo estrutural no ambiente corporativo.',
  },
  {
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Salário Digno',
    ods: 1,
    odsExtra: 8,
    metas: '100% de salário digno a funcionários diretos e terceirizados até 2030 e engajamento da cadeia de suprimentos',
    descricao: 'Assegurar remuneração digna para todos os trabalhadores nas operações e cadeia de valor.',
  },
  {
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Mente em Foco',
    ods: 3,
    metas: 'Saúde mental na pauta estratégica da alta liderança, redução do estigma e programas de prevenção permanentes',
    descricao: 'Colocar a saúde mental como prioridade estratégica nas organizações.',
  },
  {
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Educa 2030',
    ods: 4,
    metas: 'Capacitação técnica inclusiva e formação em áreas STEM para empregabilidade',
    descricao: 'Promover educação de qualidade e formação técnica para a empregabilidade do futuro.',
  },
  {
    pilar: 'G',
    pilarNome: 'Governança',
    movimento: 'Transparência 100%',
    ods: 16,
    metas: '100% de transparência nas relações com o poder público, mecanismos anticorrupção e proteção efetiva a denunciantes',
    descricao: 'Fortalecer a integridade corporativa, anticorrupção e transparência radical em todos os níveis.',
  },
];

/** Observatório 2030 */
export const OBSERVATORIO_2030 = {
  titulo: 'Observatório 2030',
  descricao: 'Plataforma de acompanhamento contínuo e público do cumprimento das metas corporativas da Ambição 2030, desenvolvida em parceria com consultorias e instituições científicas (Resultante, MPT, USP, Insper). Assegura transparência e auditabilidade dos compromissos assumidos pelas empresas signatárias.',
  link: { label: 'Acessar Observatório 2030', url: 'https://observatorio2030.pactoglobal.org.br' },
};

/** Contexto regulatório no Brasil */
export const CONTEXTO_REGULATORIO = {
  titulo: 'Contexto Regulatório no Brasil: do Voluntarismo à Exigência de Mercado',
  intro: 'O Pacto Global posiciona-se como aliado das empresas na conformidade regulatória perante o mercado de capitais.',
  resolucoes: [
    {
      nome: 'Resolução CVM 59/2021',
      descricao: 'Primeiras exigências formais de divulgação ESG no Formulário de Referência (FRE) para companhias abertas, sob o modelo "pratique ou explique" — exigindo dados sobre diversidade no conselho, emissões de GEE e remuneração atrelada a métricas ESG.',
    },
    {
      nome: 'Resoluções CVM 193/2023 e CVM 244/2026 (Padrões ISSB — IFRS S1 e S2)',
      descricao: 'Brasil pioneiro na internalização dos padrões globais do ISSB (IFRS S1 — Requisitos Gerais de Sustentabilidade e IFRS S2 — Divulgações Climáticas). Modelo "pratique ou explique" permanente; empresas que optarem por reportar sob padrão IFRS devem fazê-lo por no mínimo três exercícios consecutivos, exigindo consistência e dados auditáveis.',
    },
    {
      nome: 'Resolução CMN 5.185',
      descricao: 'Para instituições financeiras, mantém exigências alinhadas ao IFRS S1/S2.',
    },
    {
      nome: 'EUDR — Lei Antidesmatamento da União Europeia',
      descricao: 'Regulamentação estrangeira de impacto extraterritorial que exige que empresas exportadoras brasileiras comprovem rastreabilidade e ausência de desmatamento em suas cadeias.',
    },
  ],
};

/** Casos inspiradores */
export const CASOS_INSPIRADORES = [
  {
    empresa: 'Claro Brasil',
    destaque: 'Aderiu a 7 Movimentos simultaneamente da Ambição 2030',
    descricao: 'Exemplo de engajamento transversal nos pilares E, S e G.',
  },
  {
    empresa: 'ENGIE Brasil',
    destaque: 'Liderança em Ambição Net Zero e Transparência 100%',
    descricao: 'Referência em metas climáticas baseadas na ciência (SBTi) e governança.',
  },
  {
    empresa: 'Iguá Saneamento',
    destaque: 'Protagonista no Movimento + Água',
    descricao: 'Impulsionando universalização do saneamento e segurança hídrica.',
  },
];

/** Ferramentas práticas do Pacto Global para implementar ESG/ODS */
export const FERRAMENTAS_ESG = [
  {
    id: 'sdg-compass',
    titulo: 'SDG Compass',
    subtitulo: 'Guia em 5 passos para alinhar estratégia aos ODS',
    descricao: 'O SDG Compass é um guia do Pacto Global, em cinco passos, que ajuda as empresas a entenderem os seus impactos relacionados aos ODS e a estabelecerem metas compatíveis.',
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
    imagem: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'ambicao-pelos-ods',
    titulo: 'Ambição pelos ODS (SDG Ambition)',
    subtitulo: 'Programa de aceleração internacional para metas ODS',
    descricao: 'O Ambição pelos ODS é um programa de aceleração internacional do Pacto Global que auxilia as empresas no estabelecimento de metas relacionadas aos ODS para integrar uma estratégia ESG em conformidade com padrões exigidos em todo o mundo. Foi lançado em janeiro de 2020 no Fórum Econômico Mundial, em Davos, pelo Secretário-Geral da ONU, António Guterres.',
    beneficios: [
      'Ir além do progresso incremental',
      'Intensificar a mudança transformadora',
      'Ampliar o valor do negócio',
      'Construir resiliência',
      'Impulsionar crescimento de longo prazo',
    ],
    link: { label: 'Saiba mais sobre Ambição pelos ODS', url: 'https://www.pactoglobal.org.br/pg/ambicao-pelos-ods' },
    imagem: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop',
  },
];

/** Exemplos de metas do programa Ambição pelos ODS */
export const METAS_AMBICAO_ODS = [
  {
    ods: 13,
    titulo: 'Ação Contra a Mudança Global do Clima',
    meta: 'Estabelecer metas de redução de emissões alinhadas à ciência (SBTi) para limitar o aquecimento a 1,5°C.',
  },
  {
    ods: 5,
    titulo: 'Igualdade de Gênero',
    meta: 'Alcançar paridade de gênero em cargos de liderança até 2030.',
  },
  {
    ods: 8,
    titulo: 'Trabalho Decente e Crescimento Econômico',
    meta: 'Erradicar trabalho forçado, infantil e traficado nas cadeias de valor.',
  },
  {
    ods: 12,
    titulo: 'Consumo e Produção Responsáveis',
    meta: 'Eliminar plásticos de uso único e implementar modelos circulares.',
  },
  {
    ods: 10,
    titulo: 'Redução das Desigualdades',
    meta: 'Promover equidade salarial e inclusão de grupos sub-representados.',
  },
  {
    ods: 9,
    titulo: 'Indústria, Inovação e Infraestrutura',
    meta: 'Acelerar inovação em tecnologias de baixo carbono e infraestrutura resiliente.',
  },
];

/** Mercado ESG: dados e tendências */
export const MERCADO_ESG = {
  titulo: 'Oportunidades de mercado e tendências ESG',
  intro: 'Atuar de acordo com padrões ESG amplia a competitividade do setor empresarial, seja no mercado interno ou no exterior. No mundo atual, no qual as empresas são acompanhadas de perto pelos seus diversos stakeholders, ESG é a indicação de solidez, custos mais baixos, melhor reputação e maior resiliência em meio às incertezas e vulnerabilidades.',
  estatisticas: [
    { valor: '57%', rotulo: 'dos ativos de fundos mútuos na Europa em fundos ESG até 2025', fonte: 'PwC' },
    { valor: 'US$ 8,9 tri', rotulo: 'em ativos ESG na Europa até 2025', fonte: 'PwC' },
    { valor: '77%', rotulo: 'dos investidores institucionais planejam parar de comprar produtos não ESG', fonte: 'PwC' },
    { valor: 'R$ 2,5 bi', rotulo: 'captados por fundos ESG no Brasil em 2020', fonte: 'Morningstar / Capital Reset' },
  ],
  casos: [
    {
      nome: 'ESG na B3',
      descricao: 'Em setembro de 2020, a B3 lançou em parceria com a S&P Dow Jones o índice S&P/B3 Brasil ESG, que utiliza critérios baseados em práticas ambientais, sociais e de governança para selecionar empresas brasileiras. Entre os critérios está a aderência aos Dez Princípios do Pacto Global.',
      link: { label: 'Conheça o índice S&P/B3 Brasil ESG', url: 'https://www.b3.com.br' },
    },
    {
      nome: 'ESG no BTG Pactual',
      descricao: 'O BTG Pactual lançou o ETF ESGB11, fundo de índice negociado em bolsa que considera aspectos ESG das empresas constituintes, replicando a carteira do índice S&P/B3 Brasil ESG.',
      link: { label: 'Saiba mais sobre ESGB11', url: 'https://www.btgpactual.com' },
    },
    {
      nome: 'ESG na BlackRock',
      descricao: 'A maior gestora de ativos do mundo, com mais de USD 6 trilhões em carteira, passou a incluir em 2020 métricas ESG transversalmente em todas as suas análises de riscos.',
      link: { label: 'Abordagem ESG da BlackRock', url: 'https://www.blackrock.com' },
    },
  ],
};

/** CTA final — como começar a jornada ESG com o Pacto Global */
export const ESG_CTA = {
  titulo: 'Comece sua jornada ESG com o Pacto Global',
  descricao: 'O Pacto Global da ONU é a maior iniciativa de sustentabilidade corporativa do mundo. Ao aderir, sua empresa assume os Dez Princípios universais e ganha acesso a ferramentas, redes e metodologias para transformar compromissos em impacto real.',
  botoes: [
    { label: 'Como Aderir', href: '#/como-aderir', variant: 'primary' },
    { label: 'Conheça a Ambição 2030', href: '#/ambicao', variant: 'secondary' },
    { label: 'Ver Plataformas de Ação', href: '#/plataformas', variant: 'secondary' },
  ],
};

/** Por que aderir aos Movimentos */
export const POR_QUE_ADERIR_MOVIMENTOS = {
  titulo: 'Por que aderir aos Movimentos da Ambição 2030?',
  descricao: 'Aderir aos Movimentos oferece às empresas metodologias validadas, capacitação técnica, participação em fóruns da ONU e suporte estruturado para cumprir as metas regulatórias de sustentabilidade com transparência.',
  beneficios: [
    'Metodologias práticas e ferramentas de autoavaliação corporativa',
    'Grupos de trabalho técnicos com pares do mesmo setor',
    'Workshops exclusivos, guias metodológicos, academias globais',
    'Participação em fóruns globais de tomada de decisão (COP, Assembleia Geral da ONU)',
    'Suporte estruturado para conformidade com CVM, ISSB e regulações internacionais',
    'Colaboração pré-competitiva para resolver desafios sistêmicos',
  ],
};