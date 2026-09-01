import { ODS_COLORS, ODS_NAMES } from './constants';

/** 17 ODS da ONU com metadados para amostragem na visualização */
export const ODS_LIST = Array.from({ length: 17 }, (_, i) => ({
  id: i + 1,
  name: ODS_NAMES[i],
  color: ODS_COLORS[i],
}));

/**
 * Estrutura oficial de 5 pilares metodológicos dos Movimentos da Ambição 2030.
 */
export const ESTRUTURA_MOVIMENTOS = [
  {
    id: 'engajamento',
    title: 'Engajamento & Adesão',
    description:
      'Mobilização de lideranças empresariais (CEOs/C-Level) para assumirem publicamente a Carta de Compromisso do Movimento.',
  },
  {
    id: 'capacitacao',
    title: 'Capacitação & Ferramentas',
    description:
      'Acesso a workshops exclusivos, guias metodológicos, academias globais e troca de melhores práticas entre pares.',
  },
  {
    id: 'projetos',
    title: 'Projetos de Impacto Coletivo',
    description:
      'Iniciativas intersetoriais de alta escala para solucionar desafios sistêmicos que nenhuma empresa resolve sozinha.',
  },
  {
    id: 'indicadores',
    title: 'Monitoramento & Indicadores',
    description:
      'Reporte anual de progresso através da Plataforma de Coleta de Indicadores, garantindo transparência e mensurabilidade.',
  },
  {
    id: 'reconhecimento',
    title: 'Reconhecimento & Visibilidade',
    description:
      'Destaque no Relatório Anual da Ambição 2030, palcos internacionais (COP, Assembleia Geral da ONU) e selo oficial do Movimento.',
  },
];

/** 5 Pilares do Modelo de Negócios / Gestão */
export const PILARES_ATUACAO = [
  {
    id: 'governanca',
    number: '01',
    title: 'Governança e Estratégia',
    description:
      'Integração das metas de sustentabilidade à estratégia de negócios e governança corporativa.',
  },
  {
    id: 'operacoes',
    number: '02',
    title: 'Operações e Cadeias de Valor',
    description:
      'Implementação de práticas sustentáveis em operações e engajamento de fornecedores.',
  },
  {
    id: 'inovacao',
    number: '03',
    title: 'Modelos de Negócios e Inovação',
    description:
      'Desenvolvimento de soluções inovadoras e criação de novos modelos de negócios de impacto.',
  },
  {
    id: 'transparencia',
    number: '04',
    title: 'Transparência e Integridade',
    description:
      'Promoção da transparência, ética e combate à corrupção em todos os níveis.',
  },
  {
    id: 'colaboracao',
    number: '05',
    title: 'Colaboração entre Setores',
    description:
      'Fortalecimento de parcerias e cooperação entre empresas, governo e sociedade civil.',
  },
];

/* ============================================
   SEÇÃO "PARA QUEM É" (Personas)
   Perfis de engajamento que o Movimento atende
   ============================================ */
export const PERFIL = [
  {
    id: 'lider-sustentabilidade',
    number: '01',
    title: 'Líder de Sustentabilidade',
    description:
      'Quem busca metodologia robusta, benchmarks e qualificação técnica para implementar a agenda ESG na empresa.',
  },
  {
    id: 'ceo',
    number: '02',
    title: 'CEO / Board',
    description:
      'Quem precisa conectar propósito, estratégia e valor de negócio, posicionando a empresa na vanguarda da sustentabilidade.',
  },
  {
    id: 'empresa-nova',
    number: '03',
    title: 'Empresa nova na agenda',
    description:
      'Quem quer começar com clareza, seguindo um processo transparente e com suporte completo do início ao fim.',
  },
];

/* ============================================
   SEÇÃO "O QUE NÃO MUDOU" (Seção 08)
   Transição Lei das Empresas → Ambição 2030
   ============================================ */
export const O_QUE_NAO_MUDOU = {
  title: 'O que não mudou?',
  mesmaComunidade: {
    title: 'Mesma comunidade',
    description:
      'O ecossistema de líderes e empresas comprometidos com a Agenda 2030 segue ativo.',
  },
  mesmaAgenda: {
    title: 'Mesma agenda',
    description:
      'Prioridades climáticas, sociais e de governança permanecem conectadas às Metas Globais da ONU.',
  },
};

/** Modalidades de participação das empresas nos Movimentos */
export const MODALIDADES = [
  {
    id: 'participante',
    title: 'Empresa Participante',
    description:
      'Engaja na jornada dos movimentos.',
  },
  {
    id: 'comprometida',
    title: 'Empresa Comprometida',
    description:
      'Investe nos movimentos e ganha protagonismo na Ambição 2030.',
  },
];

/** Outras formas de engajamento (atores não empresariais) */
export const FORMAS_ENGAJAMENTO = [
  {
    id: 'governos',
    title: 'Governos & Setor Público',
    description:
      'Parceria para alinhamento de políticas públicas, compras públicas sustentáveis e implementação de metas dos ODS em escala subnacional.',
  },
  {
    id: 'osc',
    title: 'Organizações da Sociedade Civil & Academia',
    description:
      'Cooperação técnica para validação metodológica, produção de conhecimento e garantia de transparência social nos compromissos.',
  },
];

/** Processos oficiais de monitoramento dos compromissos */
export const MONITORAMENTO = {
  title: 'Processo de Reporte e Transparência',
  description:
    'Todas as organizações signatárias da Ambição 2030 passam por um ciclo anual de acompanhamento para medir o avanço em direção às metas de 2030.',
  processos: [
    {
      title: 'Ciclo Anual de Indicadores',
      description:
        'Preenchimento da plataforma de dados oficial do Pacto Global da ONU - Rede Brasil entre os meses de julho e setembro.',
    },
    {
      title: 'Validação & Auditoria de Amostra',
      description:
        'Verificação das informações reportadas com base em metodologias globais e alinhamento com padrões GRI e ISSB.',
    },
    {
      title: 'Publicação no Relatório Anual',
      description:
        'Divulgação consolidada do progresso no Relatório da Ambição 2030, lançado anualmente durante o evento anual da Rede Brasil.',
    },
    {
      title: 'Feedback & Plano de Ação',
      description:
        'Devolutiva individual para cada empresa com benchmarking setorial e recomendações para aceleração de metas.',
    },
  ],
};
export const AMBICAO_DEFINICAO =
  'Uma iniciativa do Pacto Global da ONU - Rede Brasil que convoca o setor privado a assumir compromissos públicos e mensuráveis com os Objetivos de Desenvolvimento Sustentável (ODS) até 2030.';

export const AMBICAO_INTRO = {
  eyebrow: 'Estratégia Empresarial ESG',
  title: 'Ambição 2030',
  description:
    'Lançada em abril de 2022, a Ambição 2030 é uma jornada de transformação para induzir mudanças estruturais nas empresas brasileiras por meio de 10 Movimentos temáticos.',
};

export const AMBICAO_CITACAO = {
  quote:
    'A Ambição 2030 não é apenas sobre relatórios ESG — é sobre a transformação real da economia brasileira em direção à sustentabilidade e justiça social.',
  author: 'Pacto Global da ONU',
  role: 'Rede Brasil',
  source: 'Relatório de Impacto 2025',
};

export const AMBICAO_RESULTADOS = {
  title: 'Em números, hoje',
  period: 'jun / 2026',
  stats: [
    { value: '10', label: 'Movimentos temáticos', color: '#1E3250' },
    { value: '18', label: 'ODS conectados*', color: '#297D6D' },
    { value: '401', label: 'Empresas comprometidas (jun/2026)', color: '#6E417A' },
    { value: '788', label: 'Cartas compromisso assinadas', color: '#EC3740' },
    { value: '+2.000', label: 'Compromissos públicos assumidos', color: '#CCB146' },
    { value: '+2 milhões', label: 'Pessoas trabalhadoras impactadas diretamente', color: '#4C6B8B' },
  ],
  alcance: 'Transformação sistêmica e sustentável com impacto mensurável nas metas de 2030.',
  nota: 'Dados consolidados com base na plataforma oficial de reporte anual da Ambição 2030.',
};

export const AMBICAO_ORIGEM = {
  description:
    'A trajetória da Ambição 2030 desde o surgimento do Pacto Global da ONU até a consolidação da maior iniciativa de impacto empresarial do Brasil.',
  timeline: [
    { year: '2000', title: 'Surgiu o Pacto Global da ONU', description: 'Iniciativa global convocada pela ONU para o setor privado.' },
    { year: '2003', title: 'Pacto Global da ONU - Rede Brasil', description: 'Criação oficial da Rede Brasil do Pacto Global.' },
    { year: '2015', title: 'Agenda 2030 da ONU', description: 'ONU estabelece os 17 ODS como agenda global de sustentabilidade.' },
    { year: '2020', title: 'Década da Ação', description: 'Guterres convoca a Década da Ação para acelerar metas mundiais.' },
    { year: '2022', title: 'Lançamento oficial da Ambição 2030', description: 'Lançamento da Ambição 2030 no Brasil, com 10 Movimentos temáticos.' },
    { year: '2030', title: 'Horizonte final', description: 'O que resta a cumprir das metas públicas dos Movimentos.' },
  ],
};

export const AMBICAO_PROPOSITO = {
  title: 'O Propósito da Ambição 2030',
  description:
    'Mobilizar empresas brasileiras para liderarem a transição sustentável com metas públicas, transparência e impacto de longo prazo.',
  subtitle: 'Nossos Pilares Fundamentais',
  pillars: [
    { title: 'Engajamento C-Level', description: 'Assinatura pública dos CEOs e vinculação aos planos estratégicos corporativos.' },
    { title: 'Transparência Auditável', description: 'Reporte anual em plataforma padronizada de indicadores.' },
    { title: 'Impacto Coletivo', description: 'Alianças intersetoriais para enfrentar desafios complexos.' },
  ],
};

export const ESTRUTURA_MOVIMENTOS_INTRO = {
  eyebrow: 'Arquitetura dos Movimentos',
  title: 'Estrutura dos Movimentos',
  description:
    'Cada um dos 10 Movimentos é estruturado em etapas metodológicas que garantem a evolução da adesão ao reporte de progresso.',
};

export const AMBICAO_CHAMADO = {
  eyebrow: 'O Chamado',
  title: 'Ambição 2030',
  description:
    'Em 2020, o mundo entrou na Década da Ação, convocada pelo Secretário-Geral da ONU, António Guterres. O Brasil respondeu com a Ambição 2030, convidando empresas do país inteiro a assumirem compromissos públicos e mensuráveis vinculados aos ODS.',
  paragrafos: [
    'O Pacto Global da ONU – Rede Brasil convoca as empresas a acelerarem suas metas de sustentabilidade por meio dos 10 Movimentos temáticos.',
    'A Ambição 2030 é uma jornada de transformação para induzir mudanças estruturais no setor empresarial brasileiro.',
  ],
  destaque: 'Transformação sistêmica e sustentável com impacto mensurável.',
};

export const AMBICAO_COMO_FAZER_PARTE = {
  eyebrow: 'Adesão Corporativa',
  title: 'Como Fazer Parte',
  description:
    'Sua empresa pode engajar formalmente em um ou mais Movimentos da Ambição 2030. O CEO assina publicamente a carta de compromisso do movimento.',
  passos: [
    { numero: '01', titulo: 'Escolha os Movimentos', descricao: 'Identifique os temas e ODS prioritários para o seu setor e estratégia ESG.' },
    { numero: '02', titulo: 'Assine a Carta de Compromisso', descricao: 'O CEO assina publicamente a declaração de metas para 2030.' },
    { numero: '03', titulo: 'Reporte Anualmente', descricao: 'Acompanhe e divulgue o progresso no ciclo anual de coleta de indicadores.' },
  ],
  beneficios: [
    'Mobilização da mais alta liderança (CEO) para assumirem publicamente a carta de compromisso do movimento',
    'Acesso das lideranças engajadas em uma jornada estruturada e exclusiva de iniciativas do movimento como workshops, guias...',
    'Palcos nacionais e internacionais',
  ],
};

/** Seções temáticas exibidas nos cards / menu */
export const SECOES_ATUACAO = [
  {
    id: 'compromissos',
    title: 'Carta de Compromisso',
    camada: false,
    description:
      'Metas públicas e mensuráveis assumidas pelas empresas ao aderir a cada um dos 10 Movimentos da Ambição 2030.',
  },
  {
    id: 'ambicao',
    title: 'Ambição 2030',
    camada: false,
    description:
      'Inspiração que coletivamente almejamos alcançar ao contribuir para a realização dos ODS.',
  },
  {
    id: 'pilares',
    title: 'Pilares de Atuação',
    camada: false,
    description:
      'Eixos de ação e caminhos dos Movimentos, que buscam organizar e sistematizar a forma de atuação e trabalho das empresas para alcançar os compromissos assumidos.',
  },
];

// --- Os 10 Movimentos da Ambição 2030 ---
// Ordem e estrutura padronizadas espelhando a Plataforma Oficial do Pacto Global da ONU - Rede Brasil.
export const MOVIMENTOS = [
  {
    id: 'mais-agua',
    name: 'Movimento + Água',
    shortName: '+ Água',
    color: '#009EDB',
    ods: [6],
    image: 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Impactar a vida de mais de 100 milhões de pessoas, alcançando a universalização do saneamento e a segurança hídrica no país.',
    numeros: { comprometidas: 77, apoiadoras: 14, governos: 2, respondentes: 57, recomendacao: '8,7' },
    subtitulo: 'Acelerando a universalização do saneamento e a resiliência hídrica do Brasil até 2033.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Plataforma de Água',
    videoId: 'dQw4w9WgXcQ',
    pilares: [
      { title: 'Universalização do Saneamento', desc: 'Aceleração de investimentos e tecnologias para 99% de água e 90% de esgoto.' },
      { title: 'Segurança Hídrica & Bacias', desc: 'Recuperação de vazões e qualidade em bacias hidrográficas sob estresse crítico.' },
      { title: 'Eficiência Operacional', desc: 'Redução do consumo e reúso de água em processos industriais e agronegócio.' },
      { title: 'Governança & Políticas Públicas', desc: 'Articulação entre setor privado, agências reguladoras e prefeituras.' }
    ],
    comiteConsultivo: [
      { nome: 'Ana Paula', org: 'Instituto Água Sustentável' },
      { nome: 'Édison Carlos', org: 'Instituto Trata Brasil' },
      { nome: 'Marussa Boldrin', org: 'Frente Parlamentar do Saneamento' }
    ],
    comiteExecutivo: [
      { nome: 'Sanepar' }, { nome: 'Saneago' }, { nome: 'Ambev' }, { nome: 'Sabesp' }, { nome: 'BRK Ambiental' }
    ],
    embaixadoras: [
      { nome: 'Ambev' }, { nome: 'Sanepar' }, { nome: 'KPMG' }, { nome: 'Natura &Co' }
    ],
    parceirasEstrategicas: [
      { nome: 'UNICEF Brasil' }, { nome: 'Instituto Trata Brasil' }, { nome: 'WRI Brasil' }
    ],
    empresasComprometidas: [
      { nome: 'Acqua Mater', data: '03/03/2022' },
      { nome: 'Sanepar - Companhia de Saneamento do Paraná', data: '14/03/2022' },
      { nome: 'BioMovement', data: '22/03/2022' },
      { nome: 'Special Dog', data: '28/03/2022' },
      { nome: 'Saneago', data: '18/04/2022' },
      { nome: 'Unimar', data: '18/04/2022' },
      { nome: 'KPMG', data: '24/04/2022' },
      { nome: 'Ambev', data: '02/05/2022' },
      { nome: 'Sabesp', data: '10/05/2022' },
      { nome: 'BRK Ambiental', data: '18/05/2022' },
      { nome: 'Natura &Co', data: '01/06/2022' },
      { nome: 'Suzano', data: '15/06/2022' },
      { nome: 'Tigre S/A', data: '02/07/2022' },
      { nome: 'Dexco', data: '12/08/2022' },
      { nome: 'Aegea Saneamento', data: '05/09/2022' }
    ],
    recursos: [
      { titulo: 'Guia Prático de Gestão de Bacias Hidrográficas', url: 'https://www.pactoglobal.org.br' },
      { titulo: 'Relatório do 4º Ciclo de Indicadores +Água', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      'Contribuir para que 99% da população brasileira tenha acesso a água potável.',
      'Contribuir para que 90% da população brasileira tenha esgoto coletado e tratado.',
      'Desenvolver pelo menos um projeto que altere positivamente a quantidade, qualidade e regime de vazões de uma bacia hidrográfica nacional sob estresse hídrico.',
      'Aumentar em 25% a eficiência do uso da água nos processos produtivos, assegurando retiradas menores e sustentáveis de recursos hídricos da natureza.'
    ],
    nota: 'Os compromissos focados em saneamento terão como linha de chegada 2033, a fim de caminharmos lado a lado com o novo marco legal do saneamento.'
  },
  {
    id: 'conexao-circular',
    name: 'Movimento Conexão Circular',
    shortName: 'Conexão Circular',
    color: '#B8922A',
    ods: [12],
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Assegurar padrões de produção e de consumo sustentáveis, que busquem o uso eficiente de recursos naturais, reduzam o desperdício e minimizem o descarte de resíduos para o meio ambiente.',
    numeros: { comprometidas: 74, apoiadoras: 12, governos: 1, respondentes: 59, recomendacao: '8,8' },
    subtitulo: 'Eliminando resíduos e promovendo a transição para modelos de negócios 100% circulares.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Plataforma de Economia Circular',
    videoId: null,
    pilares: [
      { title: 'Design para Circularidade', desc: 'Revisão de embalagens e produtos para eliminção de resíduos na fonte.' },
      { title: 'Logística Reversa & Reciclagem', desc: 'Desenvolvimento de cadeias de logística reversa inclusiva com cooperativas.' },
      { title: 'Zero Aterro & Orgânicos', desc: 'Compostagem e valorização de 33% dos resíduos orgânicos industriais.' }
    ],
    comiteConsultivo: [
      { nome: 'Beatriz Luz', org: 'Exchange 4 Change Brasil' },
      { nome: 'Davide Rossi', org: 'Ellen MacArthur Foundation' }
    ],
    comiteExecutivo: [
      { nome: 'Braskem' }, { nome: 'Nestlé Brasil' }, { nome: 'Unilever' }
    ],
    embaixadoras: [
      { nome: 'Braskem' }, { nome: 'Nestlé Brasil' }, { nome: 'Unilever' }
    ],
    parceirasEstrategicas: [
      { nome: 'CEMPRE' }, { nome: 'Ellen MacArthur Foundation' }
    ],
    empresasComprometidas: [
      { nome: 'Braskem S.A.', data: '10/04/2022' },
      { nome: 'Nestlé Brasil', data: '22/04/2022' },
      { nome: 'Unilever Brasil', data: '05/05/2022' },
      { nome: 'Veolia Brasil', data: '18/06/2022' },
      { nome: 'Ball Corporation', data: '02/07/2022' }
    ],
    recursos: [
      { titulo: 'Manual de Diretrizes de Circularidade Corporativa', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      'Diminuir a geração e/ou valorizar resíduos sólidos no percentual mínimo de 40% até 2030.',
      'Implementar 3 premissas de circularidade no modelo de negócio da organização até 2030.',
      'Valorizar resíduos orgânicos no percentual mínimo de 33% até 2030, promovendo menor emissão de gases de efeito estufa.'
    ],
    nota: 'Das organizações listadas.'
  },
  {
    id: 'net-zero',
    name: 'Movimento Ambição Net Zero',
    shortName: 'Ambição Net Zero',
    color: '#2E8B57',
    ods: [13],
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Engajar o setor empresarial brasileiro para individualmente estabelecer metas baseadas na ciência com ambição coletiva de contribuir para limitar as emissões líquidas nacionais de gases de efeito estufa em 2030 a 1,2 Gt CO₂e.',
    numeros: { comprometidas: 129, apoiadoras: 22, governos: 3, respondentes: 100, recomendacao: '9,0' },
    subtitulo: 'Acelerando a descarbonização da economia brasileira com metas climáticas baseadas na ciência.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Plataforma de Clima',
    videoId: null,
    pilares: [
      { title: 'Inventário & Transparência', desc: 'Publicação de inventários de emissões dos Escopos 1, 2 e 3 auditados.' },
      { title: 'Metas Alinhadas à Ciência (SBTi)', desc: 'Formalização de metas de redução validadas pela iniciativa SBTi.' },
      { title: 'Transição Justa', desc: 'Garantia de que a descarbonização promova inclusão e oportunidade de empregos verdes.' }
    ],
    comiteConsultivo: [
      { nome: 'Carlos Nobre', org: 'IEA-USP / Painel de Notáveis' },
      { nome: 'Tasso Azevedo', org: 'MapBiomas' }
    ],
    comiteExecutivo: [
      { nome: 'Engie Brasil' }, { nome: 'Itaú Unibanco' }, { nome: 'Natura &Co' }, { nome: 'EDP Brasil' }
    ],
    embaixadoras: [
      { nome: 'Engie Brasil' }, { nome: 'Natura &Co' }, { nome: 'Schneider Electric' }
    ],
    parceirasEstrategicas: [
      { nome: 'SBTi' }, { nome: 'WRI Brasil' }, { nome: 'CDP Latin America' }
    ],
    empresasComprometidas: [
      { nome: 'Natura &Co', data: '12/04/2022' },
      { nome: 'Engie Brasil', data: '25/04/2022' },
      { nome: 'Itaú Unibanco', data: '10/05/2022' },
      { nome: 'EDP Brasil', data: '01/06/2022' },
      { nome: 'Klabin S.A.', data: '14/07/2022' }
    ],
    recursos: [
      { titulo: 'Guia de Orientação para Transição Justa no Brasil', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      'Publicar anualmente o inventário de emissões de gases de efeito estufa (GEE) dos Escopos 1, 2 e 3 (recomenda-se validação por terceira parte).',
      'Reduzir as emissões de GEE de forma compatível com a ciência climática (recomenda-se utilizar como referência os critérios da Science Based Targets initiative – SBTi) ou formalizar o compromisso com a SBTi, com metas de curto e/ou longo prazo (Net Zero).',
      'Conduzir a transição para uma economia de baixo carbono de forma justa e inclusiva, garantindo que os esforços de descarbonização considerem os impactos sociais, promovam a equidade e a criação de oportunidades para pessoas trabalhadoras e comunidades impactadas.'
    ],
    nota: null
  },
  {
    id: 'impacto-biomas',
    name: 'Movimento Impacto Biomas',
    shortName: 'Impacto Biomas',
    color: '#1A6B3C',
    ods: [15],
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Mover o setor empresarial brasileiro para combater o desmatamento, promover a conservação dos biomas brasileiros, por meio de ações individuais, setoriais e intersetoriais.',
    numeros: { comprometidas: 28, apoiadoras: 8, governos: 2, respondentes: 18, recomendacao: '8,8' },
    subtitulo: 'Zerar o desmatamento nas cadeias produtivas e promover a bioeconomia nos biomas nacionais.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Plataforma de Florestas e Biodiversidade',
    videoId: null,
    pilares: [
      { title: 'Desmatamento Zero', desc: 'Eliminação da degradação florestal nas cadeias diretas e indiretas de fornecimento.' },
      { title: 'Restauração Florestal', desc: 'Projetos integrados para recuperação de hectares nativos na Amazônia e Cerrado.' },
      { title: 'Valorização da Bioeconomia', desc: 'Fomento a negócios sustentáveis com comunidades tradicionais e povos originários.' }
    ],
    comiteConsultivo: [
      { nome: 'Beto Veríssimo', org: 'Imazon' },
      { nome: 'Izabella Teixeira', org: 'Ex-Ministra do Meio Ambiente' }
    ],
    comiteExecutivo: [
      { nome: 'Suzano' }, { nome: 'JBS' }, { nome: 'Marfrig' }
    ],
    embaixadoras: [
      { nome: 'Suzano' }, { nome: 'Natura' }
    ],
    parceirasEstrategicas: [
      { nome: 'Imazon' }, { nome: 'MapBiomas' }, { nome: 'TNC Brasil' }
    ],
    empresasComprometidas: [
      { nome: 'Suzano S.A.', data: '18/05/2022' },
      { nome: 'Natura &Co', data: '02/06/2022' },
      { nome: 'Klabin', data: '15/07/2022' },
      { nome: 'JBS S.A.', data: '10/08/2022' }
    ],
    recursos: [
      { titulo: 'Framework de Rastreabilidade para Cadeia Florestal', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      'Garantir que a operação da organização e sua cadeia de valor não contribuam para o desmatamento ou degradação dos biomas.',
      'Desenvolver projetos estratégicos até 2030 para a conservação e restauração florestal dos biomas brasileiros.'
    ],
    nota: null
  },
  {
    id: 'transparencia',
    name: 'Movimento Transparência 100%',
    shortName: 'Transparência 100%',
    color: '#006080',
    ods: [16],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Desenvolver instituições eficazes, responsáveis e transparentes em todos os níveis no setor privado brasileiro.',
    numeros: { comprometidas: 81, apoiadoras: 16, governos: 4, respondentes: 71, recomendacao: '9,1' },
    subtitulo: 'Fortalecendo a integridade corporativa, anticorrupção e transparência radical em todos os níveis.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Plataforma de Anticorrupção',
    videoId: null,
    pilares: [
      { title: 'Interação com Setor Público', desc: '100% de transparência em reuniões, doações e relações com governos.' },
      { title: 'Integridade na Alta Direção', desc: 'Governança clara sobre remuneração, bônus e conflitos de interesse.' },
      { title: 'Treinamento da Cadeia de Risco', desc: 'Capacitação obrigatória em compliance para fornecedores de alto risco.' }
    ],
    comiteConsultivo: [
      { nome: 'Modesto Carvalhosa', org: 'Jurista & Autor' },
      { nome: 'Bruno Brandão', org: 'Transparência Internacional Brasil' }
    ],
    comiteExecutivo: [
      { nome: 'Siemens Brasil' }, { nome: 'KPMG' }, { nome: 'Embraer' }
    ],
    embaixadoras: [
      { nome: 'Siemens Brasil' }, { nome: 'KPMG' }
    ],
    parceirasEstrategicas: [
      { nome: 'Transparência Internacional' }, { nome: 'Ethos' }
    ],
    empresasComprometidas: [
      { nome: 'Siemens Brasil', data: '01/04/2022' },
      { nome: 'KPMG Auditores', data: '12/04/2022' },
      { nome: 'Embraer S.A.', data: '28/05/2022' },
      { nome: 'Eletrobras', data: '10/06/2022' }
    ],
    recursos: [
      { titulo: 'Guia Prático de Transparência em Canais de Denúncia', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      '100% de transparência nas interações com a administração pública.',
      '100% de integridade na remuneração da alta administração.',
      '100% da cadeia de valor de alto risco treinada em integridade.',
      '100% de transparência da estrutura de compliance e governança.',
      '100% de transparência sobre os canais de denúncias.'
    ],
    nota: null
  },
  {
    id: 'elas-lideram',
    name: 'Movimento Elas Lideram 2030',
    shortName: 'Elas Lideram 2030',
    color: '#E04B2A',
    ods: [5],
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Ampliar o número de empresas comprometidas com o Movimento e aumentar a presença de mais mulheres em posição de liderança e alta liderança.',
    numeros: { comprometidas: 145, apoiadoras: 25, governos: 5, respondentes: 88, recomendacao: '9,5' },
    subtitulo: 'Acelerando a equidade de gênero e a paridade de mulheres na alta liderança corporativa.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & ONU Mulheres',
    videoId: null,
    pilares: [
      { title: 'Equidade no C-Level & Conselho', desc: 'Metas para 50% de mulheres em cargos de diretoria e conselho de administração.' },
      { title: 'Interseccionalidade & Inclusão', desc: 'Inclusão de mulheres negras, PCDs, trans, refugiadas e periféricas.' },
      { title: 'Mentoria & Pipeline de Liderança', desc: 'Programas de aceleração de carreira para cargos de gerência e coordenação.' }
    ],
    comiteConsultivo: [
      { nome: 'Rachel Maia', org: 'Ex-Presidente do Conselho / RM Consulting' },
      { nome: 'Anastasia Divinskaya', org: 'ONU Mulheres Brasil' }
    ],
    comiteExecutivo: [
      { nome: 'Magazine Luiza' }, { nome: 'PwC Brasil' }, { nome: 'Schneider Electric' }
    ],
    embaixadoras: [
      { nome: 'Magazine Luiza' }, { nome: 'PwC Brasil' }, { nome: 'Uber Brasil' }
    ],
    parceirasEstrategicas: [
      { nome: 'ONU Mulheres' }, { nome: 'WILL - Women in Leadership in Latin America' }
    ],
    empresasComprometidas: [
      { nome: 'Magazine Luiza S.A.', data: '15/03/2022' },
      { nome: 'PwC Brasil', data: '02/04/2022' },
      { nome: 'Schneider Electric', data: '18/04/2022' },
      { nome: 'Uber Brasil', data: '10/05/2022' },
      { nome: 'Willis Towers Watson', data: '01/06/2022' }
    ],
    recursos: [
      { titulo: 'Playbook de Paridade de Gênero para Organizações', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      '30% dos cargos de alta liderança ocupados por mulheres até 2025.',
      '50% dos cargos de alta liderança ocupados por mulheres até 2030.',
      '50% dos cargos de liderança (a partir de coordenação) ocupados por mulheres até 2030, sendo ao menos 25% do total ocupado por mulheres de grupos historicamente sub-representados: negras, indígenas, quilombolas, com deficiência, LGBTQIAP+ e refugiadas.'
    ],
    nota: 'Compromisso adicional, lançado para o ciclo 2026 — aberto às empresas que optarem por ampliar sua meta com um recorte interseccional.'
  },
  {
    id: 'raca-prioridade',
    name: 'Movimento Raça é Prioridade',
    shortName: 'Raça é Prioridade',
    color: '#D81B7E',
    ods: [10, 18],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Ampliar o número de empresas comprometidas em ter mais pessoas negras, indígenas e vulneráveis em posição de liderança e diversidade étnico-racial na cadeia de fornecimento até 2030.',
    numeros: { comprometidas: 56, apoiadoras: 10, governos: 2, respondentes: 37, recomendacao: '9,5' },
    subtitulo: 'Promovendo a equidade étnico-racial (ODS 18) e combatendo o racismo estrutural nas empresas.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Plataforma de Direitos Humanos',
    videoId: null,
    pilares: [
      { title: 'Liderança Negra & Indígena', desc: 'Metas para 50% de profissionais negros em cargos de gestão até 2030.' },
      { title: 'Cadeia de Suprimentos Diversa', desc: 'Inclusão de fornecedores e empreendedores negros e indígenas.' },
      { title: 'Cultura Antirracista', desc: 'Programas permanentes de letramento e combate ao preconceito.' }
    ],
    comiteConsultivo: [
      { nome: 'Luana Génot', org: 'Instituto Identidades do Brasil (ID_BR)' },
      { nome: 'Helio Santos', org: 'Instituto Baobá' }
    ],
    comiteExecutivo: [
      { nome: 'Carrefour Brasil' }, { nome: 'Gerdau' }, { nome: 'B3' }
    ],
    embaixadoras: [
      { nome: 'Carrefour Brasil' }, { nome: 'Gerdau' }
    ],
    parceirasEstrategicas: [
      { nome: 'ID_BR' }, { nome: 'Instituto Baobá' }
    ],
    empresasComprometidas: [
      { nome: 'Carrefour Brasil', data: '10/05/2022' },
      { nome: 'Gerdau S.A.', data: '22/05/2022' },
      { nome: 'B3 - Brasil, Bolsa, Balcão', data: '05/06/2022' }
    ],
    recursos: [
      { titulo: 'Guia para Compras Sustentáveis com Foco em Étnico-Racial', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      '30% de pessoas negras em posição de liderança até 2025.',
      '50% de pessoas negras em posição de liderança até 2030.',
      'Implementar diversidade étnico-racial em toda a cadeia de fornecimento: mapeamento de fornecedores liderados por pessoas negras e indígenas, atualização das políticas de compras, ampliação da divulgação de oportunidades e monitoramento de indicadores.'
    ],
    nota: 'Negras, indígenas, quilombolas ou pertencentes a outro grupo étnico socialmente vulnerável.'
  },
  {
    id: 'mente-foco',
    name: 'Movimento Mente em Foco',
    shortName: 'Mente em Foco',
    color: '#3A7D44',
    ods: [3],
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Engajar mais empresas com programas estruturados de saúde mental e gerar impacto positivo na vida das suas pessoas trabalhadoras, por meio de avaliação, ações proativas de prevenção e tratamento.',
    numeros: { comprometidas: 119, apoiadoras: 18, governos: 3, respondentes: 77, recomendacao: '9,1' },
    subtitulo: 'Priorizando o bem-estar psicológico e eliminando o estigma da saúde mental no ambiente de trabalho.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Plataforma de Saúde e Bem-Estar',
    videoId: null,
    pilares: [
      { title: 'Profissional de Referência & Crise', desc: 'Atendimento psicológico e protocolos para manejo de momentos críticos.' },
      { title: 'Cultura Antiestigma', desc: 'Campanhas de conscientização para normalizar o cuidado com a mente.' },
      { title: 'Capacitação de Gestores', desc: 'Treinamento de lideranças para identificação de burnout e escuta ativa.' }
    ],
    comiteConsultivo: [
      { nome: 'Dra. Ana Beatriz Barbosa', org: 'Psiquiatra e Escritora' },
      { nome: 'Dr. Roberto de Almeida', org: 'Sociedade Brasileira de Psicologia' }
    ],
    comiteExecutivo: [
      { nome: 'Johnson & Johnson' }, { nome: 'AstraZeneca' }, { nome: 'Danone' }
    ],
    embaixadoras: [
      { nome: 'Johnson & Johnson' }, { nome: 'Danone Brasil' }
    ],
    parceirasEstrategicas: [
      { nome: 'Vittude' }, { nome: 'Zenklub' }
    ],
    empresasComprometidas: [
      { nome: 'Johnson & Johnson Brasil', data: '12/03/2022' },
      { nome: 'Danone Brasil', data: '28/03/2022' },
      { nome: 'AstraZeneca Brasil', data: '14/04/2022' }
    ],
    recursos: [
      { titulo: 'Diretrizes Corporativas para Saúde Mental no Trabalho', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      'Ter um profissional de referência para aconselhamento e atendimento.',
      'Oferecer orientação e manejo de crises.',
      'Garantir a avaliação permanente das pessoas trabalhadoras.',
      'Criar um programa antiestigma.',
      'Manter gestores engajados com capacitação para atuar em relação ao tema e orientação sobre as melhores condutas, sendo agentes de transformação.',
      'Promover ações de incentivo à saúde mental, como campanhas e iniciativas para práticas culturais, esportivas, de nutrição, bem-estar e educação, a partir de demandas identificadas.'
    ],
    nota: null
  },
  {
    id: 'salario-digno',
    name: 'Movimento Salário Digno',
    shortName: 'Salário Digno',
    color: '#8B1A3A',
    ods: [8],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Engajar o setor empresarial para pagar salário digno para pessoas trabalhadoras próprias, contratadas e terceirizadas, e promover o engajamento da cadeia de fornecimento para desenvolver metas de salário digno.',
    numeros: { comprometidas: 36, apoiadoras: 9, governos: 1, respondentes: 28, recomendacao: '8,9' },
    subtitulo: 'Garantindo remuneração justa e qualidade de vida para trabalhadores próprios, terceiros e cadeia de suprimentos.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & Organização Internacional do Trabalho (OIT)',
    videoId: null,
    pilares: [
      { title: 'Remuneração Própria 100%', desc: 'Garantia de que nenhum funcionário direto receba abaixo da renda digna regional.' },
      { title: 'Terceirizados & Contratados', desc: 'Extensão dos parâmetros de salário digno a prestadores de serviços.' },
      { title: 'Cadeia de Suprimentos', desc: 'Incentivo a fornecedores para adequação progressiva de pisos salariais.' }
    ],
    comiteConsultivo: [
      { nome: 'Vinícius Pinheiro', org: 'OIT Brasil' },
      { nome: 'Clemente Ganz Lúcio', org: 'DIEESE' }
    ],
    comiteExecutivo: [
      { nome: 'L’Oréal Brasil' }, { nome: 'Unilever Brasil' }
    ],
    embaixadoras: [
      { nome: 'L’Oréal Brasil' }
    ],
    parceirasEstrategicas: [
      { nome: 'OIT Brasil' }, { nome: 'Fair Wage Network' }
    ],
    empresasComprometidas: [
      { nome: 'L’Oréal Brasil', data: '05/04/2022' },
      { nome: 'Unilever Brasil', data: '20/04/2022' }
    ],
    recursos: [
      { titulo: 'Metodologia de Cálculo de Salário Digno por Região do Brasil', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      '100% de pessoas trabalhadoras em toda operação da organização com salário digno até 2030.',
      '100% de pessoas trabalhadoras contratadas e/ou terceirizadas com salário digno até 2030.',
      'Promover e engajar toda a cadeia de suprimentos para desenvolver metas de salário digno até 2030.'
    ],
    nota: null
  },
  {
    id: 'educa2030',
    name: 'Movimento Educa2030',
    shortName: 'Educa2030',
    color: '#C0392B',
    ods: [4],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop',
    metaImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop',
    ambicao: 'Promover o avanço da Educação para o trabalho, diversa e alinhada à Agenda 2030 e aos Direitos Humanos.',
    numeros: { comprometidas: 25, apoiadoras: 7, governos: 2, respondentes: 24, recomendacao: '9,5' },
    subtitulo: 'Elevar a escolaridade, formar jovens vulneráveis para o mercado e acelerar mulheres em carreiras STEM.',
    coordenacao: 'Pacto Global da ONU - Rede Brasil & UNESCO',
    videoId: null,
    pilares: [
      { title: 'Elevação de Escolaridade', desc: 'Bolsas e incentivo para conclusão de ensino básico e superior de colaboradores.' },
      { title: 'Inclusão Produtiva de Jovens', desc: 'Programas de aprendizagem e qualificação tecnológica para jovens de 14 a 29 anos.' },
      { title: 'Mulheres em STEM', desc: 'Aceleração de carreiras femininas em Ciência, Tecnologia, Engenharia e Matemática.' }
    ],
    comiteConsultivo: [
      { nome: 'Priscila Cruz', org: 'Todos Pela Educação' },
      { nome: 'Marlova Noleto', org: 'UNESCO no Brasil' }
    ],
    comiteExecutivo: [
      { nome: 'Fundação Telefônica Vivo' }, { nome: 'Itaú Social' }
    ],
    embaixadoras: [
      { nome: 'Fundação Telefônica Vivo' }
    ],
    parceirasEstrategicas: [
      { nome: 'Todos Pela Educação' }, { nome: 'UNESCO' }
    ],
    empresasComprometidas: [
      { nome: 'Telefônica Brasil (Vivo)', data: '10/05/2022' },
      { nome: 'Itaú Unibanco', data: '28/05/2022' }
    ],
    recursos: [
      { titulo: 'Guia de Inclusão Produtiva para o Setor Privado', url: 'https://www.pactoglobal.org.br' }
    ],
    compromissos: [
      'Elevar a escolaridade de pessoas trabalhadoras da organização, sobretudo entre grupos mais vulneráveis, como negros, mulheres e pessoas com deficiência, considerando operação e terceiros.',
      'Promover a inclusão produtiva de jovens de 14 a 29 anos, com foco no Jovem Aprendiz, e formação para o desenvolvimento sustentável.',
      'Impulsionar o desenvolvimento profissional de mulheres em carreiras STEM.'
    ],
    nota: null
  }
];

export const getMovimento = (id) => MOVIMENTOS.find((m) => m.id === id) || null;
