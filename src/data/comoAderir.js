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
 */

export const ADESAO_STATS = [
  { valor: "+25.000", rotulo: "Organizações no Mundo", subrotulo: "Maior iniciativa de sustentabilidade do planeta" },
  { valor: "+2.000", rotulo: "Participantes no Brasil", subrotulo: "2ª maior rede local do UN Global Compact" },
  { valor: "160+", rotulo: "Países Conectados", subrotulo: "Capilaridade global com impacto local" },
  { valor: "100%", rotulo: "Alinhado à ONU", subrotulo: "Comunicação de Progresso (CoP) auditada" },
];

export const BENEFICIOS_ADESAO = [
  {
    id: "credibilidade",
    titulo: "Chancela Global da ONU",
    descricao: "Associe a sua marca aos 10 Princípios Universais e à Agenda 2030, fortalecendo a confiança de investidores, clientes e talentos.",
    badge: "Reputação & Ética",
    icone: "ShieldCheck",
    destaque: true,
    pontos: [
      "Uso autorizado do selo 'We Support the UN Global Compact'",
      "Presença no diretório público global de participantes da ONU",
      "Diferenciação competitiva em concorrências públicas e privadas",
    ]
  },
  {
    id: "academy",
    titulo: "UN Global Compact Academy",
    descricao: "Acesso ilimitado à maior plataforma digital corporativa de sustentabilidade do mundo, com cursos práticos, masterclasses e certificações.",
    badge: "Capacitação Contínua",
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
    badge: "Ação Coletiva",
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
    descricao: "Conecte-se com mais de 2.000 empresas no Brasil em uma rede colaborativa orientada à troca de soluções reais de descarbonização e impacto.",
    badge: "Networking Estratégico",
    icone: "Users",
    pontos: [
      "Mesas redondas exclusivas de C-Level e lideranças ESG",
      "Publicações de casos de sucesso e pesquisas setoriais",
      "Acesso ao Hubs Regionais ODS em todo o território nacional",
    ]
  },
  {
    id: "eventos",
    titulo: "Eventos & Missões Internacionais",
    descricao: "Voz e representatividade em fóruns globais de tomada de decisão, COP do Clima e cúpulas da Assembleia Geral da ONU em Nova York.",
    badge: "Voz Global",
    icone: "Globe",
    pontos: [
      "Acesso a delegações brasileiras na Climate Week NY e COPs",
      "Fórum Anual do Pacto Global e Encontros de Liderança",
      "Oportunidades de fala em painéis temáticos e debates estratégicos",
    ]
  },
  {
    id: "cop",
    titulo: "Comunicação de Progresso (CoP)",
    descricao: "Ferramenta digital padronizada e moderna para relatar anualmente avanços em governança, direitos humanos, trabalho e meio ambiente.",
    badge: "Transparência & ESG",
    icone: "BarChart3",
    pontos: [
      "Questionário eletrônico compatível com GRI, ISSB e SASB",
      "Relatório automático comparativo de desempenho com o setor",
      "Demonstração auditável de compromisso a bancos e stakeholders",
    ]
  }
];

/**
 * Quem pode aderir.
 *
 * O Pacto Global é uma iniciativa para empresas privadas. A adesão de
 * organizações não empresariais foi encerrada em janeiro de 2025 — por isso
 * a lista abaixo não tem mais a categoria "Academia / Terceiro Setor".
 *
 * As duas categorias que restam são as que a RBPG de fato opera: empresa
 * que entra pela primeira vez (participante) e empresa de um grupo que já
 * participa em qualquer país (subsidiária).
 */
export const QUEM_PODE_ADERIR = [
  {
    tipo: "Empresas Participantes",
    subtitulo: "Empresas que entram pela primeira vez na Rede Brasil",
    criterios: "Empresas privadas legalmente constituídas no Brasil, com ao menos 10 funcionários.",
    categoria: "Participante",
    cor: "border-un-blue bg-un-blue/5",
    icone: "Building2",
    vantagens: "Acesso integral às plataformas de ação, aos Movimentos Ambição 2030, à UN Global Compact Academy e aos eventos nacionais e globais da rede."
  },
  {
    tipo: "Subsidiárias",
    subtitulo: "Empresas de grupos que já participam do Pacto Global",
    criterios: "Empresas que fazem parte de outra empresa já participante do Pacto Global em qualquer lugar do mundo.",
    categoria: "Participante",
    cor: "border-un-gold bg-un-gold/5",
    icone: "Briefcase",
    vantagens: "Mesmas contrapartidas de uma participante, com contribuição anual de 50% do valor correspondente à faixa de faturamento."
  }
];

/**
 * Critérios de inelegibilidade informados pela equipe de Engajamento da RBPG.
 * Estão redigidos como impedimento porque é assim que a análise é feita: a
 * candidatura é barrada se qualquer um deles se aplicar.
 */
export const CRITERIOS_ELEGIBILIDADE = [
  "Não ter submissão de sanção pela ONU",
  "Não estar na Lista de Fornecedores Inelegíveis da ONU por questões éticas",
  "Não obter receita da produção, venda e/ou transferência de minas terrestres antipessoais, bombas de fragmentação e armas letais",
  "Não obter receita da produção e/ou manufatura de tabaco",
  "Não ser pessoa física, OSC ou OSCIP — exceto hospitais e escolas com característica empresarial",
  "Não ser entidade pública governamental, estatal ou municipal administrada pelo poder público",
  "Não ser empresa com menos de 10 funcionários"
];

export const TABELA_CONTRIBUICOES = [
  {
    faixaUSD: "USD 30 Bilhões ou mais",
    anuidadeUSD: 30000,
    anuidadeFormatada: "USD 30.000",
    categoria: "Empresas Globais Tier 1",
    destaque: false
  },
  {
    faixaUSD: "USD 10 – 30 Bilhões",
    anuidadeUSD: 25000,
    anuidadeFormatada: "USD 25.000",
    categoria: "Grandes Corporações",
    destaque: false
  },
  {
    faixaUSD: "USD 5 – 10 Bilhões",
    anuidadeUSD: 20000,
    anuidadeFormatada: "USD 20.000",
    categoria: "Grandes Corporações",
    destaque: false
  },
  {
    faixaUSD: "USD 1 – 5 Bilhões",
    anuidadeUSD: 15000,
    anuidadeFormatada: "USD 15.000",
    categoria: "Médias-Grandes Empresas",
    destaque: false
  },
  {
    faixaUSD: "USD 500 Milhões – 1 Bilhão",
    anuidadeUSD: 7500,
    anuidadeFormatada: "USD 7.500",
    categoria: "Médias-Grandes Empresas",
    destaque: false
  },
  {
    faixaUSD: "USD 250 – 500 Milhões",
    anuidadeUSD: 5000,
    anuidadeFormatada: "USD 5.000",
    categoria: "Empresas de Médio Porte",
    destaque: false
  },
  {
    faixaUSD: "USD 50 – 250 Milhões",
    anuidadeUSD: 2500,
    anuidadeFormatada: "USD 2.500",
    categoria: "Empresas de Médio Porte",
    destaque: false
  },
  {
    faixaUSD: "USD 25 – 50 Milhões",
    anuidadeUSD: 1250,
    anuidadeFormatada: "USD 1.250",
    categoria: "Pequenas-Médias Empresas (PMEs)",
    destaque: true
  },
  {
    faixaUSD: "Abaixo de USD 25 Milhões",
    anuidadeUSD: 450,
    anuidadeFormatada: "USD 450",
    categoria: "Pequenas Empresas (PMEs)",
    destaque: true
  },
];

export const REGRAS_CONTRIBUICAO = [
  {
    titulo: "Toda Participante Contribui",
    descricao: "Não existe anuidade isenta. A contribuição anual é requisito para manter a participação ativa e o acesso às iniciativas da rede.",
    icone: "UserCheck"
  },
  {
    titulo: "Subsidiárias",
    descricao: "Empresas que fazem parte de um grupo já participante do Pacto Global pagam 50% do valor correspondente à sua faixa de faturamento. A regra vale igualmente para subsidiária de matriz brasileira ou estrangeira.",
    icone: "Building"
  },
  {
    titulo: "Requisito Mínimo de Porte",
    descricao: "Para aderir, a empresa precisa ter ao menos 10 funcionários e demonstrar conformidade jurídica nacional.",
    icone: "Globe2"
  },
  {
    titulo: "Cobrança e Renovação",
    descricao: "O valor é definido pelo faturamento bruto anual em dólares. A primeira cobrança ocorre após a conclusão da adesão e se renova a cada ano, no mesmo período.",
    icone: "GraduationCap"
  }
];

/**
 * Etapas da adesão.
 *
 * O box "Alinhamento aos 10 Princípios" saiu a pedido da RBPG: ele dava a
 * entender que a empresa precisa comprovar conformidade antes de aderir,
 * o que não é verdade — o compromisso é de melhoria contínua.
 *
 * `apoio` descreve o que a Rede Brasil faz em cada etapa: a empresa não
 * percorre o processo sozinha, e isso não estava dito em lugar nenhum.
 * `id` é a chave estável usada pelo JSX para decidir o CTA de cada card —
 * antes o código comparava o número da etapa, que quebra a cada reordenação.
 */
export const ETAPAS_ADESAO = [
  {
    id: "contato",
    numero: "01",
    titulo: "Converse com a Rede Brasil",
    descricao: "O primeiro passo é falar com a equipe de Engajamento. Ela avalia o enquadramento da sua organização, explica a contribuição aplicável ao seu porte e esclarece dúvidas antes de qualquer documento ser preenchido.",
    tempo: "Ponto de partida",
    icone: "UserCheck",
    apoio: "A equipe conduz esta conversa e segue como seu ponto de contato até o fim do processo.",
    acao: "Falar com a equipe"
  },
  {
    id: "carta",
    numero: "02",
    titulo: "Carta de Compromisso do CEO",
    descricao: "A adesão é formalizada por uma carta assinada pela mais alta liderança da organização no Brasil (CEO, Presidente ou Diretor-Geral). O texto é padronizado internacionalmente pelas Nações Unidas e não admite alterações.",
    tempo: "Documentação",
    icone: "FileSignature",
    destaque: true,
    apoio: "A Rede Brasil orienta sobre o conteúdo da carta e revisa antes da submissão.",
    acao: "Tirar dúvidas sobre a carta"
  },
  {
    id: "portal",
    numero: "03",
    titulo: "Inscrição no Portal Global da ONU",
    descricao: "A candidatura é submetida no portal internacional do UN Global Compact, em inglês, com os dados institucionais da empresa e a Carta de Compromisso.",
    tempo: "Submissão online",
    icone: "Laptop",
    apoio: "A equipe acompanha o preenchimento e ajuda com os campos do formulário em inglês.",
    acao: "Abrir o portal global"
  },
  {
    id: "diligencia",
    numero: "04",
    titulo: "Due Diligence & Análise Reputacional",
    descricao: "A equipe de Integridade e Governança da Rede Brasil e do UN Global Compact realiza a averiguação de diligência e conformidade regulatória da organização candidata. Hoje o processo leva no máximo 3 semanas.",
    tempo: "Até 3 semanas",
    icone: "ShieldAlert",
    apoio: "A Rede Brasil informa o andamento e retorna caso falte algum documento.",
    acao: "Falar com a equipe"
  },
  {
    id: "onboarding",
    numero: "05",
    titulo: "Boas-Vindas & Reunião de Onboarding",
    descricao: "Após aprovação formal da ONU em Nova York, sua empresa recebe o certificado de participante, manual de boas-vindas e participa do encontro de integração com a equipe de Engajamento.",
    tempo: "Integração",
    icone: "Award",
    apoio: "O encontro de integração é conduzido pela equipe de Engajamento da Rede Brasil.",
    acao: "Falar com a equipe"
  },
  {
    id: "cop",
    numero: "06",
    titulo: "Comunicação de Progresso (CoP)",
    descricao: "Após 1 ano de adesão, reporte seus avanços anuais por meio da plataforma digital simplificada de CoP, demonstrando transparência e compromisso contínuo perante a sociedade.",
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
    resposta: "O Pacto Global é uma iniciativa para empresas privadas. Desde janeiro de 2025 não há adesão de organizações não empresariais — a exceção são entidades com característica empresarial, como hospitais e escolas. Não aderem pessoas físicas, OSCs, OSCIPs, entidades públicas administradas pelo poder público nem empresas com menos de 10 funcionários. A candidatura também passa pela análise de diligência reputacional da ONU."
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
    resposta: "Há três formas de encerramento. Autodesligamento: a empresa pede para sair, bastando comunicação formal do representante legal para engajamento@pactoglobal.org.br. Não entrega da CoP: empresas que não publicam o relatório são deslistadas automaticamente no fim daquele ano. Inadimplência: aplica-se às empresas inadimplentes por 12 meses. Vale lembrar que a CoP pode ser substituída pelo Relatório de Sustentabilidade, caso a empresa já o produza."
  },
  {
    pergunta: "7. Quais são os canais de suporte para dúvidas no processo de adesão?",
    resposta: "A equipe de Engajamento e Relacionamento com Participantes da Rede Brasil atende diretamente pelo e-mail engajamento@pactoglobal.org.br e acompanha a empresa em todas as etapas, do primeiro contato à reunião de onboarding."
  },
  {
    pergunta: "8. Empresas participantes podem utilizar o logo do Pacto Global da ONU?",
    link: { rotulo: "Ver política de uso do logotipo", url: "https://unglobalcompact.org/library/1831" },
    resposta: "Sim. As organizações ativas e com a CoP em dia recebem autorização expressa e diretrizes para uso do selo oficial 'We Support the UN Global Compact' em seus relatórios anuais, sites institucionais e comunicações corporativas, respeitando o Manual de Marca das Nações Unidas. A Rede Brasil disponibiliza o material completo de uso do logotipo no Kit de Mídia para participantes."
  }
];

export const CONTATO_ENGAJAMENTO = {
  email: "engajamento@pactoglobal.org.br",
  portalInscricaoUrl: "https://unglobalcompact.org/participation/join/application",
  modeloCartaUrl: "https://unglobalcompact.org/participation/join/application/business",
  diretorioPublicoUrl: "https://unglobalcompact.org/what-is-gc/participants",
  kitMidiaUrl: "https://unglobalcompact.org/library/1831",
  horario: "Segunda a Sexta, das 9h às 18h (Brasília)"
};

// Dados Oficiais do UN Global Compact & Accenture CEO Study
export const CEO_STUDY_STATS = [
  {
    porcentagem: "98%",
    descricao: "afirmam que o papel prioritário do CEO é tornar sua operação mais sustentável e ética.",
    destaque: "Liderança Executiva"
  },
  {
    porcentagem: "96%",
    descricao: "concordam que o setor privado desempenha papel indispensável para o alcance dos 17 ODS da ONU.",
    destaque: "Impacto Coletivo"
  },
  {
    porcentagem: "80%",
    descricao: "identificam na sustentabilidade corporativa uma via direta para vantagem competitiva em seu setor.",
    destaque: "Vantagem Competitiva"
  },
  {
    porcentagem: "81%",
    descricao: "atribuem o avanço real das suas metas de descarbonização e governança à metodologia do Pacto Global.",
    destaque: "Resultados Práticos"
  }
];
