/**
 * Textos das páginas ESG (#/esg) e ODS (#/ods) — Pacto Global da ONU – Rede Brasil.
 *
 * As duas páginas são dossiês de leitura, em capítulos. Toda a copy fica aqui
 * para ser revisada num lugar só; os componentes de src/components/esg-ods
 * só montam o layout.
 *
 * Posicionamento, a partir das páginas oficiais (pactoglobal.org.br/esg,
 * pactoglobal.org.br/ods e unglobalcompact.org):
 * - ESG "é a própria sustentabilidade empresarial", e praticá-lo começa por
 *   duas perguntas: a empresa respeita os Dez Princípios? Contribui para os ODS?
 * - Os Dez Princípios são a base mínima de conduta; os ODS, a direção.
 * - O Pacto Global é o principal canal da ONU com o setor privado.
 *
 * Regras de copy:
 * - ODS 18: "proposição brasileira, implementada pelo Pacto Global em 2025".
 * - "Participantes", nunca "signatários"; "Dez Princípios" por extenso.
 * - O Pacto Global é "a maior iniciativa de sustentabilidade corporativa do
 *   mundo". Aderir não exige cumprir tudo antes, e o Pacto não certifica.
 * - Todo fato leva data. Estatísticas de mercado sem fonte atual ficam fora.
 */

import { ODS_COLORS, ODS_NAMES, INSTITUTIONAL_STATS } from './constants';

/** Os 17 ODS + ODS 18, para grades e badges */
export const ODS_LIST = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  name: ODS_NAMES[i],
  color: ODS_COLORS[i],
  image: `/siteinstitucional/ods/ods-${i + 1}.jpg`,
}));

const PARTICIPANTES = INSTITUTIONAL_STATS.brasilParticipants;

const BOTOES_CTA = [
  { label: 'Como aderir', href: '#/como-aderir', variant: 'primary' },
  { label: 'Conheça a Ambição 2030', href: '#/ambicao', variant: 'secondary' },
  { label: 'Ver Plataformas de Ação', href: '#/plataformas', variant: 'secondary' },
];

/* ------------------------------------------------------------------ */
/* Página ESG                                                           */
/* ------------------------------------------------------------------ */

export const CAPITULOS_ESG = [
  { id: 'o-que-e', titulo: 'O que é ESG' },
  { id: 'origem', titulo: 'De onde veio' },
  { id: 'duas-perguntas', titulo: 'Duas perguntas' },
  { id: 'tres-letras', titulo: 'As três letras' },
  { id: 'por-que-importa', titulo: 'Por que importa' },
  { id: 'rede-brasil', titulo: 'Como a Rede Brasil apoia' },
  { id: 'duvidas', titulo: 'Dúvidas' },
];

export const TEXTOS_ESG = {
  hero: {
    selo: 'Dossiê · Pacto Global da ONU – Rede Brasil',
    titulo: 'ESG',
    subtitulo: 'Ambiental, Social e Governança',
    tese: 'Não é uma evolução da sustentabilidade empresarial. É a própria sustentabilidade empresarial.',
    texto:
      'O que significa a sigla, como ela nasceu dentro do Pacto Global da ONU e como levar esses princípios para o dia a dia da sua empresa.',
  },

  oQueE: {
    titulo: 'Práticas ambientais, sociais e de governança',
    paragrafos: [
      'ESG é uma sigla em inglês que significa <em>environmental, social and governance</em> e corresponde às práticas ambientais, sociais e de governança de uma organização.',
      'O termo ganhou força quando o mercado financeiro passou a considerar essas questões nas análises de risco e nas decisões de investimento. Mas o ESG não pertence só aos investidores: é a forma como a empresa entende seus impactos, positivos e negativos, e age sobre eles.',
      'Por isso o Pacto Global trata o ESG como sinônimo de sustentabilidade empresarial. Uma empresa que pratica ESG minimiza os impactos negativos, potencializa os positivos e responde pelos prejuízos que já causou.',
    ],
    citacao: {
      texto: 'ESG não é uma evolução da sustentabilidade empresarial, mas sim a própria sustentabilidade empresarial.',
      autor: 'Diretor-executivo do Pacto Global da ONU – Rede Brasil',
      fonte: 'Artigo na revista Exame',
    },
    naoE: [
      { titulo: 'Não é selo', texto: 'Nenhuma empresa "é ESG". Ela tem práticas e resultados melhores ou piores em cada tema.' },
      { titulo: 'Não é filantropia', texto: 'Trata do jeito como a empresa opera, não de doações feitas à parte do negócio.' },
      { titulo: 'Não é só para grandes empresas', texto: 'A cobrança chega pela cadeia: clientes, bancos e investidores pedem dados ESG a quem fornece para eles.' },
    ],
  },

  origem: {
    titulo: 'Uma pergunta da ONU ao mercado financeiro',
    paragrafos: [
      'Em janeiro de 2004, o secretário-geral da ONU, <strong>Kofi Annan</strong>, escreveu a mais de 50 CEOs de grandes instituições financeiras. O convite era descobrir como integrar fatores ambientais, sociais e de governança à análise de investimentos.',
      'A iniciativa foi coordenada pelo Pacto Global da ONU, com apoio da IFC (Grupo Banco Mundial) e do governo suíço. O resultado foi o relatório <em>"Who Cares Wins"</em>, endossado por cerca de 20 instituições de 9 países. Foi ali que a sigla ESG apareceu pela primeira vez.',
      'A tese do relatório era direta: considerar esses fatores não é caridade, é análise financeira melhor, porque eles afetam o valor das empresas no longo prazo.',
    ],
    foto: { arquivo: 'images/kofi-annan.jpg', legenda: 'Kofi Annan, secretário-geral da ONU de 1997 a 2006, lançou o Pacto Global em 2000.' },
    rotuloLinha: 'Linha do tempo',
    legendaLinha: 'Marcos do Pacto Global da ONU',
  },

  duasPerguntas: {
    titulo: 'Para o Pacto Global, praticar ESG começa por duas perguntas',
    texto:
      'Não é preciso começar por um índice ou por um relatório. O Pacto Global propõe um ponto de partida que qualquer empresa pode usar.',
    pergunta1: {
      numero: '1',
      texto: 'Minha empresa está em conformidade com os Dez Princípios do Pacto Global?',
      apoio:
        'Os Dez Princípios são a base mínima de conduta. Vêm da Declaração Universal dos Direitos Humanos, da Declaração da OIT sobre Princípios e Direitos Fundamentais no Trabalho, da Declaração do Rio sobre Meio Ambiente e Desenvolvimento e da Convenção das Nações Unidas contra a Corrupção.',
    },
    pergunta2: {
      numero: '2',
      texto: 'Minha empresa tem projetos que contribuem para o alcance dos Objetivos de Desenvolvimento Sustentável?',
      apoio:
        'Os ODS, acordados em 2015, resumem os desafios ambientais, sociais e de governança do nosso tempo. São o principal guia para a empresa decidir onde gerar impacto positivo.',
      acao: 'Conheça os 18 ODS',
    },
    regra: {
      texto: 'Boas práticas em uma área não compensam danos em outra.',
      fonte: 'UN Global Compact, sobre os Dez Princípios',
    },
    rotuloLetra: 'Pilar ESG',
  },

  tresLetras: {
    titulo: 'O que cada letra cobre',
    texto:
      'Cada letra responde a uma pergunta que investidores, clientes, reguladores e a sociedade fazem a qualquer empresa. Os temas mostram onde procurar a resposta; os indicadores, como comprová-la.',
    rotuloTemas: 'Temas',
    rotuloMedida: 'Como se mede',
  },

  porQueImporta: {
    titulo: 'De escolha a exigência',
    texto:
      'Por quase duas décadas, o ESG foi uma decisão voluntária. Hoje ele está nos índices da bolsa, nas regras do mercado de capitais brasileiro e nas exigências de quem compra do Brasil.',
    mercadoTitulo: 'No mercado',
    mercado: [
      {
        ano: '2005',
        titulo: 'Índice de Sustentabilidade Empresarial (ISE B3)',
        texto: 'Primeiro índice de sustentabilidade da América Latina, criado pela bolsa brasileira.',
      },
      {
        ano: '2020',
        titulo: 'Índice S&P/B3 Brasil ESG',
        texto: 'Lançado pela B3 com a S&P Dow Jones. Entre os critérios de seleção está a aderência aos Dez Princípios do Pacto Global.',
      },
    ],
    regulacaoTitulo: 'Na regulação',
  },

  redeBrasil: {
    titulo: 'Do compromisso à prática',
    texto: `Ao aderir ao Pacto Global da ONU – Rede Brasil, a empresa assume publicamente os Dez Princípios e passa a contar com uma rede de mais de ${PARTICIPANTES} participantes e com estas frentes:`,
    frentes: [
      {
        id: 'plataformas',
        verbo: 'Aprender junto',
        titulo: 'Plataformas de Ação',
        texto: 'Grupos temáticos em que as empresas trocam práticas e constroem soluções em conjunto.',
        rota: 'plataformas',
      },
      {
        id: 'ambicao',
        verbo: 'Assumir metas públicas',
        titulo: 'Ambição 2030',
        texto: 'Dez movimentos com metas públicas e mensuráveis até 2030, cada um ligado a ODS prioritários.',
        rota: 'ambicao',
      },
      {
        id: 'ferramentas',
        verbo: 'Planejar',
        titulo: 'SDG Compass e Ambição pelos ODS',
        texto: 'Ferramentas do Pacto Global para escolher prioridades e definir metas ligadas aos ODS.',
        rota: 'ods',
      },
      {
        id: 'cop',
        verbo: 'Prestar contas',
        titulo: 'Comunicação de Progresso',
        texto: 'Todo ano, a empresa relata o que fez para aplicar os Dez Princípios e contribuir com os ODS.',
        rota: 'cop',
      },
    ],
  },

  duvidas: {
    titulo: 'Perguntas frequentes',
    itens: [
      {
        id: 'obrigatorio',
        pergunta: 'ESG é obrigatório?',
        resposta:
          'Para companhias abertas e instituições financeiras, a divulgação de informações de sustentabilidade já está nas regras da CVM e do Conselho Monetário Nacional. Para as demais empresas, a exigência costuma chegar pela cadeia de valor: grandes clientes, investidores, bancos e mercados de exportação pedem dados ESG a quem fornece para eles.',
      },
      {
        id: 'conexao',
        pergunta: 'Qual a diferença entre ESG e ODS?',
        resposta:
          'Os ODS são a agenda: 17 objetivos acordados em 2015 pelos 193 países-membros da ONU, mais o ODS 18, Igualdade Étnico-Racial, uma proposição brasileira implementada pelo Pacto Global em 2025. O ESG é a gestão: os temas, as metas e os indicadores com que a empresa mostra o que faz por essa agenda, e os impactos negativos que precisa reduzir.',
      },
      {
        id: 'evolucao',
        pergunta: 'Como o ESG evoluiu desde 2004?',
        resposta:
          'Começou no mercado financeiro, como critério de análise de investimentos. Hoje orienta a estratégia das empresas: gestão de riscos climáticos, inovação em produtos de baixo carbono, atração de talentos, acesso a crédito e a confiança da sociedade para operar.',
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
    outraPagina: 'Leia também: os 18 ODS e o papel das empresas',
  },
};

/** Marcos do ESG. `pacto: true` marca os momentos do próprio Pacto Global. */
export const LINHA_TEMPO_ESG = [
  { ano: '1987', titulo: 'Nosso Futuro Comum', texto: 'O Relatório Brundtland, da ONU, define desenvolvimento sustentável.' },
  { ano: '1999', titulo: 'O chamado de Davos', texto: 'No Fórum Econômico Mundial, Kofi Annan propõe às empresas um pacto por valores e princípios compartilhados.', pacto: true },
  { ano: '2000', titulo: 'Nasce o Pacto Global', texto: 'Lançado na sede da ONU, em Nova York, com nove princípios.', pacto: true },
  { ano: '2003', titulo: 'Rede Brasil', texto: 'Criação do Pacto Global da ONU – Rede Brasil.', pacto: true },
  { ano: '2004', titulo: '"Who Cares Wins"', texto: 'Relatório do Pacto Global cunha a sigla ESG. No mesmo ano, entra o 10º Princípio, contra a corrupção.', pacto: true },
  { ano: '2005', titulo: 'Relatório Freshfields', texto: 'Estudo da UNEP FI conclui que considerar fatores ESG é compatível com o dever fiduciário dos gestores.' },
  { ano: '2006', titulo: 'Princípios para o Investimento Responsável', texto: 'O PRI é lançado pela UNEP FI e pelo Pacto Global.', pacto: true },
  { ano: '2015', titulo: 'Agenda 2030 e Acordo de Paris', texto: 'Os ODS e a meta climática global passam a orientar a agenda ESG.' },
  { ano: '2021', titulo: 'ISSB', texto: 'Criação do conselho que publicaria, em 2023, as normas globais de divulgação IFRS S1 e S2.' },
  { ano: '2023', titulo: 'CVM 193', texto: 'O Brasil é um dos primeiros países a adotar as normas do ISSB.' },
];

/**
 * Os três pilares. `areas` são as áreas dos Dez Princípios ligadas a cada
 * letra (os textos dos princípios vêm de PILLARS_DATA, em constants.js).
 */
export const PILARES_ESG = [
  {
    letra: 'E',
    nome: 'Ambiental',
    pergunta: 'Qual é o impacto da empresa no planeta, e do planeta na empresa?',
    areas: ['meio-ambiente'],
    temas: ['Mudança climática', 'Energia', 'Água', 'Biodiversidade', 'Economia circular', 'Poluição'],
    medida:
      'Emissões de gases de efeito estufa (escopos 1, 2 e 3), participação de energia renovável, consumo de água por unidade produzida, resíduos reaproveitados e área restaurada.',
  },
  {
    letra: 'S',
    nome: 'Social',
    pergunta: 'Como a empresa trata as pessoas, dentro e fora dela?',
    areas: ['direitos-humanos', 'trabalho'],
    temas: ['Diversidade e inclusão', 'Saúde e segurança', 'Direitos humanos', 'Relações de trabalho', 'Comunidades', 'Cadeia de valor'],
    medida:
      'Mulheres e pessoas negras e indígenas na liderança, salário digno, taxa de acidentes, horas de treinamento e fornecedores avaliados em direitos humanos.',
  },
  {
    letra: 'G',
    nome: 'Governança',
    pergunta: 'Quem decide, com que regras e com quanta transparência?',
    areas: ['anticorrupcao'],
    temas: ['Conselho', 'Remuneração', 'Anticorrupção', 'Transparência', 'Ética e integridade', 'Direitos dos acionistas'],
    medida:
      'Conselheiros independentes, mulheres no conselho, remuneração variável ligada a metas ESG, casos de corrupção apurados e relato com asseguração independente.',
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

export const CAPITULOS_ODS = [
  { id: 'agenda', titulo: 'A Agenda 2030' },
  { id: 'historia', titulo: 'Como nasceu' },
  { id: 'empresas', titulo: 'O papel das empresas' },
  { id: 'objetivos', titulo: 'Os 18 objetivos' },
  { id: 'ods-18', titulo: 'O ODS 18' },
  { id: 'metas', titulo: 'Da agenda à meta' },
  { id: 'ferramentas', titulo: 'Por onde começar' },
];

export const TEXTOS_ODS = {
  hero: {
    selo: 'Dossiê · Pacto Global da ONU – Rede Brasil',
    titulo: 'Os 18 ODS',
    subtitulo: 'Objetivos de Desenvolvimento Sustentável',
    tese: 'Agir por um futuro em que todas as formas de vida possam prosperar.',
    texto:
      'O que é a Agenda 2030, como ela nasceu, o papel das empresas e o que a Rede Brasil faz em cada um dos 18 objetivos.',
  },

  agenda: {
    titulo: 'Um apelo global à ação',
    paragrafos: [
      'Em 2015, a ONU propôs aos seus países-membros uma agenda de desenvolvimento sustentável para os 15 anos seguintes: a <strong>Agenda 2030</strong>, com 17 Objetivos de Desenvolvimento Sustentável e 169 metas.',
      'Os ODS são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Buscam assegurar os direitos humanos, combater a desigualdade e a injustiça, alcançar a igualdade de gênero e enfrentar a mudança do clima.',
      'É um esforço conjunto de países, empresas, instituições e sociedade civil. Quem participa do Pacto Global da ONU – Rede Brasil assume também a responsabilidade de contribuir para o alcance dos ODS.',
    ],
    numeros: [
      { valor: '193', rotulo: 'países-membros da ONU' },
      { valor: '17 + 1', rotulo: 'objetivos, com o ODS 18' },
      { valor: '169', rotulo: 'metas globais' },
      { valor: '2030', rotulo: 'prazo da Agenda' },
    ],
  },

  historia: {
    titulo: 'De oito metas a uma agenda universal',
    texto:
      'Os ODS não começaram do zero. Ampliaram os Objetivos de Desenvolvimento do Milênio, que valiam para os países em desenvolvimento, e passaram a valer para todos: governos, empresas e sociedade.',
    legendaLinha: 'Marcos do Pacto Global da ONU',
  },

  empresas: {
    titulo: 'Por que a Agenda 2030 precisa das empresas',
    citacao: {
      texto:
        'O setor privado tem um papel essencial nesse processo como grande detentor do poder econômico, propulsor de inovações e tecnologias, influenciador e engajador dos mais diversos públicos.',
      autor: 'Pacto Global da ONU – Rede Brasil',
    },
    paragrafos: [
      'Como principal canal da ONU com o setor privado, o Pacto Global tem a missão de engajar as empresas nessa agenda.',
      'A lógica é a mesma do ESG: os <strong>Dez Princípios</strong> são a base, o que a empresa não pode deixar de cumprir em direitos humanos, trabalho, meio ambiente e anticorrupção. Os <strong>ODS</strong> são a direção, onde ela escolhe gerar impacto positivo.',
    ],
    base: { rotulo: 'A base', titulo: 'Dez Princípios', texto: 'Conduta mínima em direitos humanos, trabalho, meio ambiente e anticorrupção.' },
    direcao: { rotulo: 'A direção', titulo: '18 ODS', texto: 'Os desafios em que a empresa escolhe contribuir, com metas.' },
    acaoEsg: 'Entenda o ESG',
  },

  objetivos: {
    titulo: 'O que cada objetivo busca, e onde a Rede Brasil atua',
    texto:
      'Selecione um ODS para ler o que ele busca e ver os movimentos da Ambição 2030 e as Plataformas de Ação que trabalham o tema com as empresas participantes.',
    rotuloBusca: 'O que busca',
    rotuloMovimentos: 'Movimentos da Ambição 2030',
    rotuloPlataformas: 'Plataformas de Ação',
    rotuloMeta: 'Exemplo de meta · Ambição pelos ODS',
    semMovimento:
      'Nenhum movimento da Ambição 2030 tem este ODS como foco. O tema é trabalhado nas Plataformas de Ação.',
  },

  ods18: {
    titulo: 'Igualdade Étnico-Racial',
    texto:
      'Nenhum dos 17 ODS é dedicado à igualdade étnico-racial. O ODS 18 é uma proposição brasileira, implementada pelo Pacto Global em 2025. Na Rede Brasil, o tema é trabalhado pelo movimento Raça é Prioridade.',
    acaoNota: 'Ler a nota oficial',
    acaoMovimento: 'Raça é Prioridade',
  },

  metas: {
    titulo: 'Da agenda à meta',
    texto:
      'Objetivos globais só mudam a realidade quando viram metas de empresas. No Brasil, esse é o papel da Ambição 2030; no mundo, do Forward Faster.',
    ambicao: {
      rotulo: 'No Brasil · desde 2022',
      titulo: 'Ambição 2030',
      texto: (total) => `${total} movimentos com metas públicas e mensuráveis até 2030, cada um ligado a ODS prioritários.`,
      acao: 'Conhecer a Ambição 2030',
    },
    forwardFaster: {
      rotulo: 'No mundo · desde 2023',
      titulo: 'Forward Faster',
      texto:
        'Iniciativa do UN Global Compact que convoca as empresas a agir mais rápido, até 2030, em cinco áreas em que o setor privado tem mais influência:',
      areas: ['Igualdade de gênero', 'Ação climática', 'Salário digno', 'Resiliência hídrica', 'Finanças e investimento'],
      link: { label: 'Conheça o Forward Faster', url: 'https://forwardfaster.unglobalcompact.org/' },
    },
  },

  ferramentas: {
    titulo: 'Como levar os ODS para a estratégia',
    texto: 'Duas ferramentas do Pacto Global para sair da intenção e chegar a metas.',
  },

  cta: {
    selo: 'Próximo passo',
    titulo: 'Coloque sua empresa na Agenda 2030',
    descricao: `Participar do Pacto Global da ONU – Rede Brasil é assumir os Dez Princípios, escolher em quais ODS a empresa vai fazer diferença e trabalhar ao lado de mais de ${PARTICIPANTES} participantes para chegar lá.`,
    botoes: BOTOES_CTA,
    outraPagina: 'Leia também: o que é ESG e como nasceu o termo',
  },
};

/** Marcos da Agenda 2030. `pacto: true` marca os momentos do Pacto Global. */
export const LINHA_TEMPO_ODS = [
  { ano: '2000', titulo: 'Cúpula do Milênio', texto: 'A ONU define os 8 Objetivos de Desenvolvimento do Milênio, com prazo em 2015. No mesmo ano nasce o Pacto Global.', pacto: true },
  { ano: '2012', titulo: 'Rio+20', texto: 'No Rio de Janeiro, os países decidem criar objetivos de desenvolvimento sustentável universais.' },
  { ano: '2015', titulo: 'Agenda 2030', texto: '193 países aprovam os 17 ODS e 169 metas, com vigência de 2016 a 2030.' },
  { ano: '2019', titulo: 'Década de Ação', texto: 'A ONU convoca uma década de ação para acelerar a Agenda até 2030.' },
  { ano: '2020', titulo: 'Ambição pelos ODS', texto: 'O Pacto Global lança, em Davos, o programa para metas empresariais ligadas aos ODS.', pacto: true },
  { ano: '2022', titulo: 'Ambição 2030', texto: 'A Rede Brasil lança os movimentos com metas públicas para as empresas.', pacto: true },
  { ano: '2023', titulo: 'Metade do caminho', texto: 'Cúpula dos ODS pede aceleração. O Pacto Global lança o Forward Faster.', pacto: true },
  { ano: '2025', titulo: 'ODS 18', texto: 'Igualdade Étnico-Racial: proposição brasileira, implementada pelo Pacto Global.', pacto: true },
  { ano: '2030', titulo: 'Prazo da Agenda', texto: 'Data-limite para os objetivos e metas globais.' },
];

/**
 * O que cada ODS busca. Textos dos ODS 1 a 17 seguem os enunciados oficiais
 * da ONU em português; o do ODS 18 resume a proposição.
 */
export const ODS_BUSCA = {
  1: 'Acabar com a pobreza em todas as suas formas, em todos os lugares.',
  2: 'Acabar com a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável.',
  3: 'Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades.',
  4: 'Assegurar a educação inclusiva, equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos.',
  5: 'Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.',
  6: 'Assegurar a disponibilidade e a gestão sustentável da água e do saneamento para todas e todos.',
  7: 'Assegurar o acesso confiável, sustentável, moderno e a preço acessível à energia para todas e todos.',
  8: 'Promover o crescimento econômico sustentado, inclusivo e sustentável, o emprego pleno e produtivo e o trabalho decente para todas e todos.',
  9: 'Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.',
  10: 'Reduzir a desigualdade dentro dos países e entre eles.',
  11: 'Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.',
  12: 'Assegurar padrões de produção e de consumo sustentáveis.',
  13: 'Tomar medidas urgentes para combater a mudança do clima e seus impactos.',
  14: 'Conservar e usar de forma sustentável os oceanos, os mares e os recursos marinhos.',
  15: 'Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, combater a desertificação e deter a perda de biodiversidade.',
  16: 'Promover sociedades pacíficas e inclusivas, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas.',
  17: 'Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.',
  18: 'Promover a igualdade étnico-racial e combater o racismo e a discriminação em todas as suas formas.',
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
