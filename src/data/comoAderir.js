/**
 * Dados Oficiais da Jornada de Adesão do Pacto Global da ONU - Rede Brasil
 * Fontes: pactoglobal.org.br/como-aderir, UN Global Compact Guidelines, Tabela de Contribuições Oficiais
 *
 * Revisão de conteúdo da equipe da RBPG (Mariana Benevente e Barbara Souza,
 * out/2025). Quatro regras saíram dessa revisão e valem para a página inteira:
 *
 * 1. "Signatário" não existe mais. Só há empresas participantes.
 * 2. Desde janeiro de 2025 não há adesão de organizações não empresariais.
 *    A exceção são entidades com característica empresarial (hospitais e
 *    escolas) — OSC e OSCIP não aderem.
 * 3. Não existe anuidade isenta. Toda participante contribui, subsidiária
 *    inclusive.
 * 4. Subsidiária paga 50%, seja a matriz brasileira ou estrangeira.
 *
 * Segunda revisão (Joycelinn Brasiliense, out/2026):
 *
 * 5. O Pacto Global é "a maior iniciativa de sustentabilidade corporativa do
 *    mundo" — não "do Sistema ONU".
 * 6. Padrão de nome: "Pacto Global da ONU – Rede Brasil" e "Dez Princípios",
 *    por extenso.
 * 7. Quem cuida da entrada da empresa é a equipe de Adesão (não Engajamento),
 *    e o e-mail de contato é contato@pactoglobal.org.br.
 */

export const ADESAO_STATS = [
  { valor: "+25.000", rotulo: "Organizações no Mundo", subrotulo: "Maior iniciativa de sustentabilidade corporativa do mundo" },
  { valor: "+2.000", rotulo: "Participantes no Brasil", subrotulo: "2ª maior rede local do UN Global Compact" },
  { valor: "160+", rotulo: "Países Conectados", subrotulo: "Capilaridade global com impacto local" },
];

export const BENEFICIOS_ADESAO = [
  {
    id: "academy",
    titulo: "UN Global Compact Academy",
    descricao: "Acesso ilimitado à maior plataforma digital corporativa de sustentabilidade do mundo, com cursos práticos, masterclasses e certificações.",
    badge: "Capacitação Contínua",
    imagem: "card-academy",
    icone: "GraduationCap",
    pontos: [
      "Cerca de 100 cursos nos pilares Direitos Humanos, Trabalho, Meio Ambiente e Anticorrupção, revisados e atualizados anualmente",
      "Trilhas temáticas: Net Zero, Diversidade, Finanças Sustentáveis e Direitos Humanos",
      "Workshops ao vivo com especialistas globais da ONU",
    ]
  },
  {
    id: "plataformas",
    titulo: "Plataformas de Ação & Movimentos",
    descricao: "Integre coalizões multissetoriais de alto impacto para acelerar metas ESG audaciosas com métricas auditáveis.",
    link: { rotulo: "Conhecer a Ambição 2030", rota: "ambicao" },
    badge: "Ação Coletiva",
    imagem: "card-movimentos",
    icone: "TrendingUp",
    pontos: [
      "Participação nos 10 Movimentos da Ambição 2030 (Elas Lideram, Raça é Prioridade, Net Zero)",
      "Grupos de trabalho técnicos com pares do mesmo setor",
      "Metodologias práticas e ferramentas de autoavaliação corporativa",
    ]
  },
  {
    id: "benchmarking",
    titulo: "Comunidade & Benchmarking",
    descricao: "Conecte-se com mais de 2.000 empresas no Brasil em uma rede colaborativa orientada à troca de soluções e boas práticas.",
    badge: "Networking Estratégico",
    imagem: "card-comunidade",
    icone: "Users",
    pontos: [
      "Mesas redondas exclusivas de C-Level e lideranças ESG",
      "Publicações de casos de sucesso e pesquisas setoriais",
      "Acesso aos Hubs Regionais ODS em todo o território nacional",
    ]
  },
  {
    id: "eventos",
    titulo: "Eventos Institucionais & Internacionais",
    descricao: "Participe dos eventos institucionais da Rede Brasil, como o Fórum Ambição 2030 e o SDGs in Brazil, e das agendas internacionais em que o Pacto Global está presente, como a Conferência das Partes do Clima (COP).",
    badge: "Voz Global",
    imagem: "card-eventos",
    icone: "Globe",
    pontos: [
      "Fórum Ambição 2030 e SDGs in Brazil, eventos institucionais da Rede Brasil",
      "Agendas paralelas à COP do Clima e à Climate Week NYC",
      "Reuniões e encontros temáticos das Plataformas de Ação",
    ]
  },
  {
    id: "cop",
    titulo: "Comunicação de Progresso (CoP)",
    descricao: "Relato anual em que a empresa demonstra seu progresso na implementação dos Dez Princípios e na contribuição para os ODS.",
    badge: "Transparência & ESG",
    imagem: "card-cop",
    icone: "BarChart3",
    pontos: [
      "Construção de credibilidade e valor de marca",
      "Mensuração e demonstração de progresso",
      "Comparação com pares e identificação de lacunas e aprendizados",
    ]
  }
];

/**
 * Requisitos mínimos para a adesão, na redação da equipe de Adesão
 * (Joycelinn Brasiliense). Substituem a antiga lista "O que impede a adesão",
 * que abria todos os itens com "Não" e ficava confusa.
 */
export const REQUISITOS_MINIMOS = [
  "Possuir a partir de 10 funcionários",
  "Ser empresa privada (não OSC, OSCIP ou pessoa física — exceto hospitais e escolas com característica empresarial)",
  "Não ser entidade pública governamental, estatal ou municipal",
  "Não ter sanções da ONU nem constar na Lista de Fornecedores Inelegíveis por questões éticas",
  "Não ter receita de armas letais, minas terrestres, bombas de fragmentação ou tabaco",
];

export const REQUISITOS_NOTA =
  "A avaliação da atuação da empresa em relação aos Dez Princípios é feita durante o processo de adesão.";

export const TABELA_CONTRIBUICOES = [
  {
    faixaUSD: "USD 30 Bilhões ou mais",
    anuidadeUSD: 30000,
    anuidadeFormatada: "USD 30.000",
    destaque: false
  },
  {
    faixaUSD: "USD 10 – 30 Bilhões",
    anuidadeUSD: 25000,
    anuidadeFormatada: "USD 25.000",
    destaque: false
  },
  {
    faixaUSD: "USD 5 – 10 Bilhões",
    anuidadeUSD: 20000,
    anuidadeFormatada: "USD 20.000",
    destaque: false
  },
  {
    faixaUSD: "USD 1 – 5 Bilhões",
    anuidadeUSD: 15000,
    anuidadeFormatada: "USD 15.000",
    destaque: false
  },
  {
    faixaUSD: "USD 500 Milhões – 1 Bilhão",
    anuidadeUSD: 7500,
    anuidadeFormatada: "USD 7.500",
    destaque: false
  },
  {
    faixaUSD: "USD 250 – 500 Milhões",
    anuidadeUSD: 5000,
    anuidadeFormatada: "USD 5.000",
    destaque: false
  },
  {
    faixaUSD: "USD 50 – 250 Milhões",
    anuidadeUSD: 2500,
    anuidadeFormatada: "USD 2.500",
    destaque: false
  },
  {
    faixaUSD: "USD 25 – 50 Milhões",
    anuidadeUSD: 1250,
    anuidadeFormatada: "USD 1.250",
    destaque: true
  },
  {
    faixaUSD: "Abaixo de USD 25 Milhões",
    anuidadeUSD: 450,
    anuidadeFormatada: "USD 450",
    destaque: true
  },
];

export const REGRAS_CONTRIBUICAO = [
  {
    titulo: "Contribuição Anual",
    imagem: "regra-contribui",
    descricao: "A contribuição anual mantém a participação da empresa ativa e garante o acesso às iniciativas e oportunidades da rede.",
    icone: "UserCheck"
  },
  {
    titulo: "Subsidiárias",
    imagem: "regra-subsidiaria",
    descricao: "Empresas de grupos que já participam do Pacto Global contam com 50% de desconto sobre o valor da sua faixa de faturamento, seja a matriz brasileira ou estrangeira.",
    icone: "Building"
  },
  {
    titulo: "A partir de 10 Funcionários",
    imagem: "regra-porte",
    descricao: "A adesão é voltada a empresas privadas com a partir de 10 funcionários.",
    icone: "Globe2"
  },
  {
    titulo: "Cobrança e Renovação",
    imagem: "regra-renovacao",
    descricao: "O valor é definido pelo faturamento bruto anual, em dólar. A primeira cobrança acontece após a conclusão da adesão, e a renovação é anual, no mesmo período.",
    icone: "GraduationCap"
  }
];

/**
 * Etapas da adesão.
 *
 * O box "Alinhamento aos Dez Princípios" saiu a pedido da RBPG: ele dava a
 * entender que a empresa precisa comprovar conformidade antes de aderir,
 * o que não é verdade — o compromisso é de melhoria contínua.
 *
 * Segunda revisão: sai a etapa "Carta de Compromisso do CEO" e entra o
 * "Pagamento da Anuidade", depois do onboarding e antes da CoP.
 *
 * `apoio` descreve o que a Rede Brasil faz em cada etapa. `id` é a chave
 * estável usada pelo JSX para decidir o CTA de cada card.
 */
export const ETAPAS_ADESAO = [
  {
    id: "contato",
    imagem: "etapa-contato",
    numero: "01",
    titulo: "Converse com a Rede Brasil",
    descricao: "O primeiro passo é falar com a equipe de Adesão. Ela avalia o enquadramento da sua empresa, explica a contribuição aplicável ao seu porte e esclarece dúvidas antes de qualquer etapa formal.",
    tempo: "Ponto de partida",
    icone: "UserCheck",
    destaque: true,
    apoio: "A equipe de Adesão conduz esta conversa e segue como seu ponto de contato até o fim do processo.",
    acao: "Preencher o formulário"
  },
  {
    id: "portal",
    imagem: "etapa-portal",
    numero: "02",
    titulo: "Inscrição no Portal Global da ONU",
    descricao: "A candidatura é submetida no portal do UN Global Compact com os dados institucionais da empresa.",
    tempo: "Submissão online",
    icone: "Laptop",
    apoio: "A equipe de Adesão acompanha o preenchimento da candidatura.",
    acao: "Abrir o portal global"
  },
  {
    id: "diligencia",
    imagem: "etapa-diligencia",
    numero: "03",
    titulo: "Due Diligence & Análise Reputacional",
    descricao: "A equipe de Integridade e Governança da Rede Brasil e do UN Global Compact realiza a averiguação de diligência e conformidade regulatória da empresa candidata. Hoje o processo leva no máximo 3 semanas.",
    tempo: "Até 3 semanas",
    icone: "ShieldAlert",
    apoio: "A Rede Brasil informa o andamento e retorna caso falte alguma informação.",
    acao: "Falar com a equipe"
  },
  {
    id: "onboarding",
    imagem: "etapa-onboarding",
    numero: "04",
    titulo: "Boas-Vindas & Reunião de Onboarding",
    descricao: "Após a aprovação, sua empresa recebe o kit de boas-vindas com os logos de participante e participa do encontro de integração com a equipe de Adesão.",
    tempo: "Integração",
    icone: "Award",
    apoio: "O encontro de integração é conduzido pela equipe de Adesão da Rede Brasil.",
    acao: "Falar com a equipe"
  },
  {
    id: "anuidade",
    imagem: "etapa-carta",
    numero: "05",
    titulo: "Pagamento da Anuidade",
    descricao: "Concluída a integração, é emitida a primeira cobrança da contribuição anual, calculada pelo faturamento bruto da empresa. A renovação acontece a cada ano, no mesmo período.",
    tempo: "Após o onboarding",
    icone: "FileCheck",
    apoio: "A equipe de Adesão envia a cobrança e esclarece dúvidas sobre valores e prazos.",
    acao: "Simular a anuidade"
  },
  {
    id: "cop",
    imagem: "etapa-cop",
    numero: "06",
    titulo: "Comunicação de Progresso (CoP)",
    descricao: "Em até 1 ano após a adesão, a empresa publica sua primeira Comunicação de Progresso, o relato anual dos avanços na implementação dos Dez Princípios.",
    tempo: "Anual (recorrente)",
    icone: "BarChart2",
    apoio: "A Rede Brasil oferece capacitação e suporte para o primeiro ciclo de reporte.",
    acao: "Falar com a equipe"
  }
];

export const FAQ_ADESAO = [
  {
    pergunta: "1. Como é calculada a contribuição financeira anual?",
    resposta: "A contribuição anual é calculada de forma proporcional ao faturamento bruto anual da empresa, com valores fixados em dólares americanos (USD) que variam de USD 450 (para empresas com receita inferior a USD 25 milhões) até USD 30.000 (para multinacionais com faturamento acima de USD 30 bilhões). Não existe anuidade isenta: toda empresa participante contribui. Subsidiárias de grupos já participantes pagam 50% do valor da sua faixa."
  },
  {
    pergunta: "2. Quais organizações podem aderir ao Pacto Global da ONU?",
    resposta: "O Pacto Global da ONU – Rede Brasil reúne empresas privadas de todos os portes e setores, a partir de 10 funcionários. Hospitais e escolas com característica empresarial também podem aderir. Não aderem pessoas físicas, OSCs, OSCIPs nem entidades públicas. A candidatura passa ainda pela análise de diligência reputacional da ONU."
  },
  {
    pergunta: "3. Quem deve assinar a Carta de Compromisso institucional?",
    resposta: "A carta deve ser obrigatoriamente assinada pela mais alta liderança da empresa no Brasil (CEO, Presidente ou Diretor-Geral). Não são aceitas assinaturas de gerências ou procurações de terceiros. O texto segue uma redação internacional padronizada pelas Nações Unidas e não pode sofrer alterações de cláusulas."
  },
  {
    pergunta: "4. Quanto tempo leva a conclusão do processo de adesão?",
    resposta: "Hoje o processo leva no máximo 3 semanas, contando a validação técnica, a análise de diligência reputacional e a homologação formal pelo escritório central do UN Global Compact em Nova York, após a submissão de todos os documentos exigidos."
  },
  {
    pergunta: "5. O que é a Comunicação de Progresso (CoP)?",
    resposta: "A Comunicação de Progresso (CoP) é o principal mecanismo anual de transparência do Pacto Global. Consiste em um questionário digital padronizado preenchido anualmente pelas empresas participantes na plataforma da ONU, detalhando suas ações, metas e indicadores nos quatro pilares temáticos: Direitos Humanos, Trabalho Decente, Meio Ambiente e Combate à Corrupção."
  },
  {
    pergunta: "6. Como funciona a saída ou cancelamento da participação?",
    resposta: "Há três formas de encerramento. Autodesligamento: a empresa pede para sair, bastando comunicação formal do representante legal para contato@pactoglobal.org.br. Não entrega da CoP: empresas que não publicam o relatório são deslistadas automaticamente no fim daquele ano. Inadimplência: aplica-se às empresas inadimplentes por 12 meses. Vale lembrar que a CoP pode ser substituída pelo Relatório de Sustentabilidade, caso a empresa já o produza."
  },
  {
    pergunta: "7. Quais são os canais de suporte para dúvidas no processo de adesão?",
    resposta: "A equipe de Adesão da Rede Brasil atende pelo e-mail contato@pactoglobal.org.br e acompanha a empresa em todas as etapas, do primeiro contato à reunião de onboarding."
  },
  {
    pergunta: "8. Empresas participantes podem utilizar o logo do Pacto Global da ONU?",
    link: { rotulo: "Ver política de uso do logotipo", url: "https://unglobalcompact.org/library/1831" },
    resposta: "Sim. As organizações ativas e com a CoP em dia recebem autorização expressa e diretrizes para uso do selo oficial 'We Support the UN Global Compact' em seus relatórios anuais, sites institucionais e comunicações corporativas, respeitando o Manual de Marca das Nações Unidas. A Rede Brasil disponibiliza o material completo de uso do logotipo no Kit de Mídia para participantes."
  }
];

export const CONTATO_ENGAJAMENTO = {
  email: "contato@pactoglobal.org.br",
  portalInscricaoUrl: "https://unglobalcompact.org/participation/join/application",
  modeloCartaUrl: "https://unglobalcompact.org/participation/join/application/business",
  diretorioPublicoUrl: "https://unglobalcompact.org/what-is-gc/participants",
  kitMidiaUrl: "https://unglobalcompact.org/library/1831",
  horario: "Segunda a Sexta, das 9h às 18h (Brasília)",
  // WhatsApp do Contato de Adesão (Barbara), só dígitos com DDI e DDD. É o
  // mesmo número e a mesma mensagem do botão no card dela (equipeAdesao.js).
  // Vazio + whatsappPrevia = o botão aparece em modo prévia e leva ao
  // formulário; vazio sem prévia = o botão não aparece.
  whatsapp: "5511963110743",
  whatsappPrevia: false,
  whatsappMensagem: "Olá Bárbara, tudo bem? Estou entrando em contato, pois visitei o site e gostaria de fazer parte do Pacto Global da ONU - Brasil."
};

// Dados Oficiais do UN Global Compact & Accenture CEO Study
export const CEO_STUDY_STATS = [
  {
    porcentagem: "98%",
    descricao: "afirmam que o papel prioritário do CEO é tornar sua operação mais sustentável e ética.",
    destaque: "Liderança Executiva",
    imagem: "evidencia-lideranca",
  },
  {
    porcentagem: "96%",
    descricao: "concordam que o setor privado desempenha papel indispensável para o alcance dos 17 ODS da ONU.",
    destaque: "Impacto Coletivo",
    imagem: "evidencia-impacto",
  },
  {
    porcentagem: "80%",
    descricao: "identificam na sustentabilidade corporativa uma via direta para vantagem competitiva em seu setor.",
    destaque: "Vantagem Competitiva",
    imagem: "evidencia-vantagem",
  },
  {
    porcentagem: "81%",
    descricao: "atribuem o avanço real das suas metas de descarbonização e governança à metodologia do Pacto Global.",
    destaque: "Resultados Práticos",
    imagem: "evidencia-resultados",
  }
];

/**
 * Campos do formulário de interesse, conforme o documento "Formulário - em
 * português" da equipe de Adesão (campos obrigatórios integrados ao
 * Salesforce/Pardot). Os valores das listas são exatos: o Pardot diferencia
 * maiúsculas e minúsculas. O telefone é campo oculto no documento e fica
 * de fora.
 */
export const FORMULARIO_ADESAO = {
  niveisHierarquicos: [
    "C-Level (Alta liderança)",
    "Diretor(a) / Head",
    "Gerente / Gerente Sênior",
    "Analista / Associado(a)",
    "Consultor(a)",
    "Estudante / Pesquisador(a)",
    "Outro",
  ],
  tiposOrganizacao: [
    "Empresa",
    "Associação empresarial",
    "Organização sem fins lucrativos / ONG",
    "Governo",
    "Entidade da ONU",
    "Rede Local do Pacto Global",
    "Instituição acadêmica",
    "Outro",
  ],
  numeroFuncionarios: ["1 - 10", "10 - 250", "250 - 1000", "1000 - 10,000", "10,000+"],
  optInPergunta: "Você deseja receber notícias, atualizações e insights do Pacto Global da ONU?",
};
