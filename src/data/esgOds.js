/**
 * Dados da página ESG e ODS — Pacto Global da ONU - Rede Brasil
 * Baseado em: https://www.pactoglobal.org.br/esg/
 * Fonte única de copy — nenhum texto institucional direto no JSX
 */

import { ODS_COLORS, ODS_NAMES } from './constants';

/** Lista dos 17 ODS + ODS 18 (Brasil) para uso em grids/badges */
export const ODS_LIST = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: ODS_NAMES[i],
  color: ODS_COLORS[i],
}));

/** Definição e contexto geral de ESG */
export const ESG_DEFINICAO = {
  titulo: 'O que é ESG?',
  descricao:
    'ESG é uma sigla em inglês que significa Environmental, Social and Governance, e corresponde às práticas ambientais, sociais e de governança de uma organização. O termo foi cunhado em 2004 em uma publicação do Pacto Global em parceria com o Banco Mundial, chamada Who Cares Wins. Surgiu de uma provocação do secretário-geral da ONU Kofi Annan a 50 CEOs de grandes instituições financeiras, sobre como integrar fatores sociais, ambientais e de governança no mercado de capitais.',
  pilares: [
    {
      letra: 'E',
      nome: 'Environmental (Ambiental)',
      descricao:
        'Como a empresa impacta o meio ambiente: emissões de carbono, gestão de resíduos, uso de recursos naturais, biodiversidade, mudança climática.',
    },
    {
      letra: 'S',
      nome: 'Social',
      descricao:
        'Como a empresa trata as pessoas: direitos humanos, trabalho decente, diversidade e inclusão, saúde e segurança, relações com comunidades.',
    },
    {
      letra: 'G',
      nome: 'Governance (Governança)',
      descricao:
        'Como a empresa é gerida: estrutura do conselho, remuneração executiva, anticorrupção, transparência, direitos dos acionistas, ética.',
    },
  ],
};

/** Conexão ESG ↔ ODS */
export const ESG_ODS_CONEXAO = {
  titulo: 'ESG e os ODS: uma conexão inseparável',
  descricao:
    'Os critérios ESG estão totalmente relacionados aos ODS, realidade nas discussões no mercado de capitais. Os 17 Objetivos de Desenvolvimento Sustentável reúnem os grandes desafios e vulnerabilidades da sociedade como um todo. Com isso, apontam os principais itens a serem acompanhados de perto.',
  textoApoio:
    'Segundo o Climate Change and Sustainability Services, da Ernest Young, as informações ESG são essenciais hoje para a tomada de decisões dos investidores. ESG nada mais é do que a própria sustentabilidade empresarial. Uma empresa que está em conformidade com práticas ESG entende quais são seus impactos negativos e positivos na sociedade e consegue agir sobre eles.',
};

/** Ferramentas práticas do Pacto Global para implementar ESG/ODS */
export const FERRAMENTAS_ESG = [
  {
    id: 'sdg-compass',
    titulo: 'SDG Compass',
    subtitulo: 'Guia em 5 passos para alinhar estratégia aos ODS',
    descricao:
      'O SDG Compass é um guia do Pacto Global, em cinco passos, que ajuda as empresas a entenderem os seus impactos relacionados aos ODS e a estabelecerem metas compatíveis.',
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
    descricao:
      'O Ambição pelos ODS é um programa de aceleração internacional do Pacto Global que auxilia as empresas no estabelecimento de metas relacionadas aos ODS para integrar uma estratégia ESG em conformidade com padrões exigidos em todo o mundo. Foi lançado em janeiro de 2020 no Fórum Econômico Mundial, em Davos, pelo Secretário-Geral da ONU, António Guterres.',
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
  intro:
    'Atuar de acordo com padrões ESG amplia a competitividade do setor empresarial, seja no mercado interno ou no exterior. No mundo atual, no qual as empresas são acompanhadas de perto pelos seus diversos stakeholders, ESG é a indicação de solidez, custos mais baixos, melhor reputação e maior resiliência em meio às incertezas e vulnerabilidades.',
  estatisticas: [
    { valor: '57%', rotulo: 'dos ativos de fundos mútuos na Europa em fundos ESG até 2025', fonte: 'PwC' },
    { valor: 'US$ 8,9 tri', rotulo: 'em ativos ESG na Europa até 2025', fonte: 'PwC' },
    { valor: '77%', rotulo: 'dos investidores institucionais planejam parar de comprar produtos não ESG', fonte: 'PwC' },
    { valor: 'R$ 2,5 bi', rotulo: 'captados por fundos ESG no Brasil em 2020', fonte: 'Morningstar / Capital Reset' },
  ],
  casos: [
    {
      nome: 'ESG na B3',
      descricao:
        'Em setembro de 2020, a B3 lançou em parceria com a S&P Dow Jones o índice S&P/B3 Brasil ESG, que utiliza critérios baseados em práticas ambientais, sociais e de governança para selecionar empresas brasileiras. Entre os critérios está a aderência aos Dez Princípios do Pacto Global.',
      link: { label: 'Conheça o índice S&P/B3 Brasil ESG', url: 'https://www.b3.com.br' },
    },
    {
      nome: 'ESG no BTG Pactual',
      descricao:
        'O BTG Pactual lançou o ETF ESGB11, fundo de índice negociado em bolsa que considera aspectos ESG das empresas constituintes, replicando a carteira do índice S&P/B3 Brasil ESG.',
      link: { label: 'Saiba mais sobre ESGB11', url: 'https://www.btgpactual.com' },
    },
    {
      nome: 'ESG na BlackRock',
      descricao:
        'A maior gestora de ativos do mundo, com mais de USD 6 trilhões em carteira, passou a incluir em 2020 métricas ESG transversalmente em todas as suas análises de riscos.',
      link: { label: 'Abordagem ESG da BlackRock', url: 'https://www.blackrock.com' },
    },
  ],
};

/** CTA final — como começar a jornada ESG com o Pacto Global */
export const ESG_CTA = {
  titulo: 'Comece sua jornada ESG com o Pacto Global',
  descricao:
    'O Pacto Global da ONU é a maior iniciativa de sustentabilidade corporativa do mundo. Ao aderir, sua empresa assume os Dez Princípios universais e ganha acesso a ferramentas, redes e metodologias para transformar compromissos em impacto real.',
  botoes: [
    { label: 'Como Aderir', href: '#/como-aderir', variant: 'primary' },
    { label: 'Conheça a Ambição 2030', href: '#/ambicao', variant: 'secondary' },
    { label: 'Ver Plataformas de Ação', href: '#/plataformas', variant: 'secondary' },
  ],
};