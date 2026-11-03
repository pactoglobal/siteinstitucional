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
  image: `/siteinstitucional/ods/ods-${i + 1}.jpg`,
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

/** Timeline ESG */
export const ESG_TIMELINE = [
  {
    ano: '1987',
    titulo: 'Relatório Brundtland',
    descricao: 'Comissão Mundial sobre Meio Ambiente e Desenvolvimento define "desenvolvimento sustentável" como atender necessidades presentes sem comprometer futuras gerações.',
    icone: 'Globe',
  },
  {
    ano: '1992',
    titulo: 'Cúpula da Terra (Rio-92)',
    descricao: 'Agenda 21 e Convenção-Quadro sobre Mudança do Clima estabelecem bases para governança ambiental global.',
    icone: 'Users',
  },
  {
    ano: '2000',
    titulo: 'Objetivos de Desenvolvimento do Milênio (ODM)',
    descricao: 'ONU estabelece 8 metas para 2015 — predecessor dos ODS, focado em erradicação da pobreza extrema.',
    icone: 'Target',
  },
  {
    ano: '2004',
    titulo: 'Publicação "Who Cares Wins"',
    descricao: 'Pacto Global + Banco Mundial cunham o termo ESG em resposta ao desafio de Kofi Annan a 50 CEOs: integrar fatores sociais, ambientais e de governança ao mercado de capitais.',
    icone: 'FileText',
    destaque: true,
  },
  {
    ano: '2006',
    titulo: 'Princípios para Investimento Responsável (PRI)',
    descricao: 'Lançamento da iniciativa PRI da ONU — hoje com mais de 5.000 signatários e US$ 120 trilhões em ativos sob gestão.',
    icone: 'TrendingUp',
  },
  {
    ano: '2011',
    titulo: 'Princípios Orientadores ONU sobre Empresas e Direitos Humanos',
    descricao: 'Framework "Proteger, Respeitar, Reparar" — base para o pilar S do ESG e due diligence de direitos humanos.',
    icone: 'Scale',
  },
  {
    ano: '2015',
    titulo: 'Agenda 2030 e 17 ODS + Acordo de Paris',
    descricao: '193 países aprovam os Objetivos de Desenvolvimento Sustentável. ODS tornam-se a bússola normativa global para ESG corporativo.',
    icone: 'Target',
  },
  {
    ano: '2017',
    titulo: 'TCFD — Task Force on Climate-related Financial Disclosures',
    descricao: 'Recomendações voluntárias para divulgação de riscos climáticos — base para IFRS S2 e regulações globais.',
    icone: 'FileText',
  },
  {
    ano: '2021',
    titulo: 'ISSB — International Sustainability Standards Board',
    descricao: 'Criação do padrão global único para divulgação de sustentabilidade (IFRS S1 e S2) — fim da fragmentação de frameworks.',
    icone: 'Globe',
  },
  {
    ano: '2022',
    titulo: 'Lançamento Ambição 2030 (Rede Brasil)',
    descricao: 'Pacto Global Brasil lança 10 Movimentos de aceleração com metas públicas auditáveis — maior iniciativa de impacto empresarial do país.',
    icone: 'Flag',
    destaque: true,
  },
  {
    ano: '2024-2026',
    titulo: 'Regulação Obrigatória no Brasil (CVM 193/244, CMN 5.185)',
    descricao: 'Brasil internaliza padrões ISSB (IFRS S1/S2) para companhias abertas e instituições financeiras — ESG deixa de ser voluntário.',
    icone: 'Gavel',
  },
];

/** Timeline ODS */
export const ODS_TIMELINE = [
  {
    ano: '2000',
    evento: 'Cúpula do Milênio — 8 ODM estabelecidos para 2015',
    icone: 'Target',
  },
  {
    ano: '2012',
    evento: 'Rio+20 — Decisão de criar agenda pós-2015 com objetivos universais',
    icone: 'Globe',
  },
  {
    ano: '2013-2015',
    evento: 'Processo intergovernamental aberto (OWG) — 13 sessões de negociação',
    icone: 'Users',
  },
  {
    ano: 'Set 2015',
    evento: 'Cúpula da ONU aprova Agenda 2030 — 17 ODS + 169 metas (vigência 2016-2030)',
    icone: 'FileText',
    destaque: true,
  },
  {
    ano: '2016-2019',
    evento: 'Implementação inicial — indicadores globais (IAEG-SDGs) e linha de base',
    icone: 'BarChart3',
  },
  {
    ano: '2019',
    evento: 'Primeiro Quadriênio — Relatório do Secretário-Geral: progresso insuficiente',
    icone: 'AlertTriangle',
  },
  {
    ano: '2020',
    evento: 'Década da Ação — Lançamento pelo Sec-Geral António Guterres; COVID-19 retarda progresso',
    icone: 'Clock',
  },
  {
    ano: '2023',
    evento: 'Cúpula dos ODS (Midpoint) — Declaração Política: acelerar implementação',
    icone: 'TrendingUp',
  },
  {
    ano: '2025',
    evento: 'Brasil propõe e Pacto Global implementa ODS 18 — Igualdade Étnico-Racial',
    icone: 'Award',
    destaque: true,
  },
  {
    ano: '2030',
    evento: 'Prazo final da Agenda 2030 — Metas globais de desenvolvimento sustentável',
    icone: 'Flag',
  },
];

/** Definição detalhada de ESG */
export const ESG_DEFINICAO_DETALHADA = {
  titulo: 'O que é ESG — Definição Completa',
  intro: 'ESG é uma sigla em inglês que significa Environmental, Social and Governance (Ambiental, Social e Governança). Corresponde ao conjunto de práticas, políticas e métricas que uma organização adota para gerir seus impactos socioambientais e sua governança corporativa.',
  origem: 'O termo foi cunhado em <strong>2004</strong> na publicação <em>"Who Cares Wins"</em>, iniciativa do Pacto Global da ONU em parceria com o Banco Mundial (IFC). Surgiu de uma provocação do secretário-geral da ONU <strong>Kofi Annan</strong> a 50 CEOs das maiores instituições financeiras globais: "como integrar fatores sociais, ambientais e de governança no mercado de capitais?".',
  evolucao: 'Inicialmente focado em investimento responsável (screening negativo), o ESG evoluiu para abordagem de <strong>criação de valor</strong> — gestão de riscos físicos e de transição, inovação em produtos de baixo carbono, atração de talentos, acesso a capital mais barato, licença social para operar.',
  pilares: [
    {
      letra: 'E',
      nome: 'Environmental (Ambiental)',
      cor: '#297D6D',
      icone: 'Globe',
      subtemas: [
        'Mudança climática: emissões GEE (Escopos 1, 2, 3), metas Net Zero, SBTi',
        'Energia: eficiência, renováveis, transição justa',
        'Água: eficiência hídrica, gestão de bacias, saneamento',
        'Biodiversidade: desmatamento zero, restauração, bioeconomia',
        'Economia circular: ecodesign, logística reversa, zero aterro',
        'Poluição: qualidade do ar, gestão de químicos, plásticos',
      ],
      metricas_chave: 'tCO₂e, % energia renovável, m³ água/ton, % resíduos valorizados, hectares restaurados',
    },
    {
      letra: 'S',
      nome: 'Social',
      cor: '#1E3250',
      icone: 'Users',
      subtemas: [
        'Capital humano: diversidade, equidade, inclusão (DEI), salário digno',
        'Saúde e segurança: taxa de acidentes, bem-estar, saúde mental',
        'Direitos humanos: due diligence, trabalho forçado/infantil, povos indígenas',
        'Relações trabalhistas: liberdade sindical, negociação coletiva',
        'Comunidades: consentimento livre, prévio e informado (CLPI), investimento social',
        'Cadeia de valor: due diligence em fornecedores, trabalho decente',
      ],
      metricas_chave: '% mulheres em liderança, % negros/indígenas em liderança, salário digno %, taxa acidentes, horas treinamento',
    },
    {
      letra: 'G',
      nome: 'Governance (Governança)',
      cor: '#6E417A',
      icone: 'ShieldCheck',
      subtemas: [
        'Conselho: independência, diversidade, comitês ESG, competências climáticas',
        'Remuneração: variável atrelada a metas ESG (KPIs climáticos, DEI)',
        'Anticorrupção: compliance, canal denúncias, proteção whistleblower',
        'Transparência: divulgação IFRS S1/S2, GRI, TCFD, asseveração terceira parte',
        'Ética e integridade: código conduta, conflitos de interesse, lobby responsável',
        'Direitos acionistas: voto, assembleias, proteção minoritários',
      ],
      metricas_chave: '% conselheiros independentes, % mulheres no conselho, remuneração ESG %, casos corrupção, asseveração %',
    },
  ],
};

/** Conexão ESG ↔ ODS */
export const ESG_ODS_CONEXAO = {
  titulo: 'ESG e os ODS: uma conexão inseparável',
  descricao: 'Os critérios ESG estão totalmente relacionados aos ODS, realidade nas discussões no mercado de capitais. Os 17 Objetivos de Desenvolvimento Sustentável reúnem os grandes desafios e vulnerabilidades da sociedade como um todo. Com isso, apontam os principais itens a serem acompanhados de perto.',
  textoApoio: 'Segundo o Climate Change and Sustainability Services, da Ernest Young, as informações ESG são essenciais hoje para a tomada de decisões dos investidores. ESG nada mais é do que a própria sustentabilidade empresarial. Uma empresa que está em conformidade com práticas ESG entende quais são seus impactos negativos e positivos na sociedade e consegue agir sobre eles.',
  matriz: [
    { pilar: 'E', ods: [6, 7, 12, 13, 14, 15], descricao: 'Clima, água, circularidade, oceanos, vida terrestre' },
    { pilar: 'S', ods: [1, 3, 4, 5, 8, 10, 18], descricao: 'Pobreza, saúde, educação, gênero, trabalho, desigualdades, igualdade étnico-racial' },
    { pilar: 'G', ods: [16, 17], descricao: 'Instituições eficazes, parcerias, transparência, anticorrupção' },
  ],
};

/** 10 Movimentos da Ambição 2030 */
export const MOVIMENTOS_AMBICAO_2030 = [
  {
    id: 'net-zero',
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: 'Ambição Net Zero',
    ods: 13,
    logo: '/siteinstitucional/movimentos/net-zero.png',
    cor: '#2E8B57',
    metas: 'Inventário GEE (Escopos 1, 2, 3) anual, metas baseadas na ciência (SBTi) para limitar o aquecimento a 1,5°C e redução acumulada de 2 Gt CO₂e',
    descricao: 'Engajar o setor empresarial para estabelecer metas climáticas baseadas na ciência com ambição coletiva de contribuir para limitar as emissões líquidas nacionais.',
    empresas: 129,
    pilares_mov: [
      { titulo: 'Inventário & Transparência', desc: 'Publicação de inventários de emissões dos Escopos 1, 2 e 3 auditados.' },
      { titulo: 'Metas Alinhadas à Ciência (SBTi)', desc: 'Formalização de metas de redução validadas pela iniciativa SBTi.' },
      { titulo: 'Transição Justa', desc: 'Garantia de que a descarbonização promova inclusão e empregos verdes.' },
    ],
  },
  {
    id: 'mais-agua',
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: '+ Água',
    ods: 6,
    logo: '/siteinstitucional/movimentos/mais-agua.png',
    cor: '#009EDB',
    metas: 'Eficiência hídrica operacional, neutralidade de água em regiões estressadas e resiliência em saneamento para impactar 100 milhões de pessoas',
    descricao: 'Acelerar a universalização do saneamento e a resiliência hídrica do Brasil até 2033.',
    empresas: 77,
    pilares_mov: [
      { titulo: 'Universalização do Saneamento', desc: 'Aceleração de investimentos e tecnologias para 99% de água e 90% de esgoto.' },
      { titulo: 'Segurança Hídrica & Bacias', desc: 'Recuperação de vazões e qualidade em bacias hidrográficas sob estresse crítico.' },
      { titulo: 'Eficiência Operacional', desc: 'Redução do consumo e reúso de água em processos industriais e agronegócio.' },
      { titulo: 'Governança & Políticas Públicas', desc: 'Articulação entre setor privado, agências reguladoras e prefeituras.' },
    ],
  },
  {
    id: 'conexao-circular',
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: 'Conexão Circular',
    ods: 12,
    logo: '/siteinstitucional/movimentos/conexao-circular.png',
    cor: '#B8922A',
    metas: 'Implementação de ecodesign, modelos de negócios circulares e aceleração da meta de zero resíduos em aterros até 2030',
    descricao: 'Eliminando resíduos e promovendo a transição para modelos de negócios 100% circulares.',
    empresas: 74,
    pilares_mov: [
      { titulo: 'Design para Circularidade', desc: 'Revisão de embalagens e produtos para eliminação de resíduos na fonte.' },
      { titulo: 'Logística Reversa & Reciclagem', desc: 'Desenvolvimento de cadeias de logística reversa inclusiva com cooperativas.' },
      { titulo: 'Zero Aterro & Orgânicos', desc: 'Compostagem e valorização de 33% dos resíduos orgânicos industriais.' },
    ],
  },
  {
    id: 'impacto-biomas',
    pilar: 'E',
    pilarNome: 'Ambiental',
    movimento: 'Impacto Biomas',
    ods: 15,
    logo: '/siteinstitucional/movimentos/impacto-biomas.png',
    cor: '#1A6B3C',
    metas: 'Rastreabilidade total das cadeias de suprimento e garantia de desmatamento zero',
    descricao: 'Zerar o desmatamento nas cadeias produtivas e promover a bioeconomia nos biomas nacionais.',
    empresas: 28,
    pilares_mov: [
      { titulo: 'Desmatamento Zero', desc: 'Eliminação da degradação florestal nas cadeias diretas e indiretas.' },
      { titulo: 'Restauração Florestal', desc: 'Projetos integrados para recuperação de hectares na Amazônia e Cerrado.' },
      { titulo: 'Valorização da Bioeconomia', desc: 'Fomento a negócios sustentáveis com comunidades tradicionais.' },
    ],
  },
  {
    id: 'elas-lideram',
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Elas Lideram 2030',
    ods: 5,
    logo: '/siteinstitucional/movimentos/elas-lideram.png',
    cor: '#DD1367',
    metas: '30% de mulheres em cargos de alta liderança até 2025 e 50% até 2030',
    descricao: 'Promover a igualdade de gênero nas posições de liderança corporativa brasileira.',
    empresas: 85,
    pilares_mov: [
      { titulo: 'Liderança Feminina', desc: 'Metas de representação em conselhos, C-level e gerência sênior.' },
      { titulo: 'Equidade Salarial', desc: 'Eliminação do gap salarial por gênero em funções equivalentes.' },
      { titulo: 'Políticas de Cuidado', desc: 'Licenças parentais igualitárias, creches, flexibilidade.' },
    ],
  },
  {
    id: 'raca-prioridade',
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Raça é Prioridade',
    ods: 10,
    odsExtra: 18,
    logo: '/siteinstitucional/movimentos/raca-prioridade.png',
    cor: '#EC3740',
    metas: '30% de pessoas negras/indígenas em posições de liderança até 2025 e 50% até 2030',
    descricao: 'Promover a equidade racial e combater o racismo estrutural no ambiente corporativo.',
    empresas: 42,
    pilares_mov: [
      { titulo: 'Representatividade', desc: 'Metas de contratação e promoção de talentos negros e indígenas.' },
      { titulo: 'Educação Antirracista', desc: 'Formação continuada para lideranças e equipes.' },
      { titulo: 'Fornecedores Diversos', desc: 'Programas de desenvolvimento de empreendedores negros/indígenas.' },
    ],
  },
  {
    id: 'salario-digno',
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Salário Digno',
    ods: 1,
    odsExtra: 8,
    logo: '/siteinstitucional/movimentos/salario-digno.png',
    cor: '#FD6925',
    metas: '100% de salário digno a funcionários diretos e terceirizados até 2030 e engajamento da cadeia de suprimentos',
    descricao: 'Assegurar remuneração digna para todos os trabalhadores nas operações e cadeia de valor.',
    empresas: 38,
    pilares_mov: [
      { titulo: 'Piso Salarial', desc: 'Cálculo de living wage por região e setor (metodologia Anker).' },
      { titulo: 'Terceirizados', desc: 'Extensão do salário digno a prestadores de serviço.' },
      { titulo: 'Cadeia de Valor', desc: 'Engajamento de fornecedores estratégicos.' },
    ],
  },
  {
    id: 'mente-foco',
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Mente em Foco',
    ods: 3,
    logo: '/siteinstitucional/movimentos/mente-foco.png',
    cor: '#4C9F38',
    metas: 'Saúde mental na pauta estratégica da alta liderança, redução do estigma e programas de prevenção permanentes',
    descricao: 'Colocar a saúde mental como prioridade estratégica nas organizações.',
    empresas: 31,
    pilares_mov: [
      { titulo: 'Liderança Engajada', desc: 'CEOs e C-levels como patrocinadores da agenda.' },
      { titulo: 'Prevenção Primária', desc: 'Gestão de riscos psicossociais (ISO 45003).' },
      { titulo: 'Cultura de Cuidado', desc: 'Programas de apoio, escuta ativa, redução de estigma.' },
    ],
  },
  {
    id: 'educa-2030',
    pilar: 'S',
    pilarNome: 'Social',
    movimento: 'Educa 2030',
    ods: 4,
    logo: '/siteinstitucional/movimentos/educa2030.png',
    cor: '#FCC30B',
    metas: 'Capacitação técnica inclusiva e formação em áreas STEM para empregabilidade',
    descricao: 'Promover educação de qualidade e formação técnica para a empregabilidade do futuro.',
    empresas: 29,
    pilares_mov: [
      { titulo: 'STEM Inclusivo', desc: 'Bolsas e mentorias para grupos sub-representados em tech.' },
      { titulo: 'Requalificação', desc: 'Programas de upskilling/reskilling para transição justa.' },
      { titulo: 'Parcerias Educacionais', desc: 'Colaboração com universidades, institutos técnicos, Sistema S.' },
    ],
  },
  {
    id: 'transparencia-100',
    pilar: 'G',
    pilarNome: 'Governança',
    movimento: 'Transparência 100%',
    ods: 16,
    logo: '/siteinstitucional/movimentos/transparencia.png',
    cor: '#006080',
    metas: '100% de transparência nas relações com o poder público, mecanismos anticorrupção e proteção efetiva a denunciantes',
    descricao: 'Fortalecer a integridade corporativa, anticorrupção e transparência radical em todos os níveis.',
    empresas: 81,
    pilares_mov: [
      { titulo: 'Interação com Setor Público', desc: '100% de transparência em reuniões, doações, relações com governos.' },
      { titulo: 'Integridade na Alta Direção', desc: 'Governança clara sobre remuneração, bônus, conflitos de interesse.' },
      { titulo: 'Treinamento da Cadeia de Risco', desc: 'Capacitação obrigatória em compliance para fornecedores de alto risco.' },
    ],
  },
];

/** Contexto regulatório no Brasil */
export const CONTEXTO_REGULATORIO = {
  titulo: 'Contexto Regulatório no Brasil: do Voluntarismo à Exigência de Mercado',
  intro: 'O Pacto Global posiciona-se como aliado das empresas na conformidade regulatória perante o mercado de capitais.',
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

/** Casos inspiradores */
export const CASOS_INSPIRADORES = [
  {
    empresa: 'Claro Brasil',
    destaque: 'Aderiu a 7 Movimentos simultaneamente da Ambição 2030',
    descricao: 'Exemplo de engajamento transversal nos pilares E, S e G — Net Zero, +Água, Elas Lideram, Raça é Prioridade, Mente em Foco, Educa 2030, Transparência 100%.',
    logo: '/siteinstitucional/movimentos/elas-lideram.png',
  },
  {
    empresa: 'ENGIE Brasil',
    destaque: 'Liderança em Ambição Net Zero e Transparência 100%',
    descricao: 'Referência em metas climáticas baseadas na ciência (SBTi aprovado), inventário completo Escopo 3, governança climática no conselho.',
    logo: '/siteinstitucional/movimentos/net-zero.png',
  },
  {
    empresa: 'Iguá Saneamento',
    destaque: 'Protagonista no Movimento + Água',
    descricao: 'Impulsionando universalização do saneamento e segurança hídrica — metas de eficiência hídrica, redução de perdas, saneamento rural.',
    logo: '/siteinstitucional/movimentos/mais-agua.png',
  },
];

/** Ferramentas práticas */
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

/** Metas do programa Ambição pelos ODS */
export const METAS_AMBICAO_ODS = [
  { ods: 13, titulo: 'Ação Contra a Mudança Global do Clima', meta: 'Estabelecer metas de redução de emissões alinhadas à ciência (SBTi) para limitar o aquecimento a 1,5°C.' },
  { ods: 5, titulo: 'Igualdade de Gênero', meta: 'Alcançar paridade de gênero em cargos de liderança até 2030.' },
  { ods: 8, titulo: 'Trabalho Decente e Crescimento Econômico', meta: 'Erradicar trabalho forçado, infantil e traficado nas cadeias de valor.' },
  { ods: 12, titulo: 'Consumo e Produção Responsáveis', meta: 'Eliminar plásticos de uso único e implementar modelos circulares.' },
  { ods: 10, titulo: 'Redução das Desigualdades', meta: 'Promover equidade salarial e inclusão de grupos sub-representados.' },
  { ods: 9, titulo: 'Indústria, Inovação e Infraestrutura', meta: 'Acelerar inovação em tecnologias de baixo carbono e infraestrutura resiliente.' },
];

/** Mercado ESG */
export const MERCADO_ESG = {
  titulo: 'Oportunidades de mercado e tendências ESG',
  intro: 'Atuar de acordo com padrões ESG amplia a competitividade do setor empresarial. No mundo atual, no qual as empresas são acompanhadas de perto pelos stakeholders, ESG é indicação de solidez, custos mais baixos, melhor reputação e maior resiliência.',
  estatisticas: [
    { valor: '57%', rotulo: 'dos ativos de fundos mútuos na Europa em fundos ESG até 2025', fonte: 'PwC' },
    { valor: 'US$ 8,9 tri', rotulo: 'em ativos ESG na Europa até 2025', fonte: 'PwC' },
    { valor: '77%', rotulo: 'dos investidores institucionais planejam parar de comprar produtos não ESG', fonte: 'PwC' },
    { valor: 'R$ 2,5 bi', rotulo: 'captados por fundos ESG no Brasil em 2020', fonte: 'Morningstar / Capital Reset' },
  ],
  casos: [
    { nome: 'ESG na B3', descricao: 'Índice S&P/B3 Brasil ESG (2020) — critérios ambientais, sociais e de governança; aderência aos 10 Princípios do Pacto Global.', link: { label: 'Conheça o índice', url: 'https://www.b3.com.br' } },
    { nome: 'ESG no BTG Pactual', descricao: 'ETF ESGB11 replica índice S&P/B3 Brasil ESG — primeiro ETF ESG do Brasil.', link: { label: 'Saiba mais', url: 'https://www.btgpactual.com' } },
    { nome: 'ESG na BlackRock', descricao: 'Maior gestora global (USD 6+ tri) incluiu métricas ESG transversalmente em todas as análises de risco desde 2020.', link: { label: 'Abordagem ESG', url: 'https://www.blackrock.com' } },
  ],
};

/** Por que aderir */
export const POR_QUE_ADERIR_MOVIMENTOS = {
  titulo: 'Por que aderir aos Movimentos da Ambição 2030?',
  descricao: 'Aderir oferece metodologias validadas, capacitação técnica, participação em fóruns da ONU e suporte estruturado para conformidade regulatória com transparência.',
  beneficios: [
    'Metodologias práticas e ferramentas de autoavaliação corporativa',
    'Grupos de trabalho técnicos com pares do mesmo setor',
    'Workshops exclusivos, guias metodológicos, academias globais (UNGC Academy)',
    'Participação em fóruns globais de tomada de decisão (COP, Assembleia Geral da ONU)',
    'Suporte estruturado para conformidade com CVM, ISSB, EUDR, CSRD',
    'Colaboração pré-competitiva para resolver desafios sistêmicos que nenhuma empresa resolve sozinha',
  ],
};

/** CTA Final */
export const ESG_CTA = {
  titulo: 'Comece sua jornada ESG com o Pacto Global',
  descricao: 'O Pacto Global da ONU é a maior iniciativa de sustentabilidade corporativa do mundo. Ao aderir, sua empresa assume os Dez Princípios universais e ganha acesso a ferramentas, redes e metodologias para transformar compromissos em impacto real.',
  botoes: [
    { label: 'Como Aderir', href: '#/como-aderir', variant: 'primary' },
    { label: 'Conheça a Ambição 2030', href: '#/ambicao', variant: 'secondary' },
    { label: 'Ver Plataformas de Ação', href: '#/plataformas', variant: 'secondary' },
  ],
};