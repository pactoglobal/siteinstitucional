/**
 * Dados Oficiais da Jornada de Adesão do Pacto Global da ONU - Rede Brasil
 * Fontes: pactoglobal.org.br/como-aderir, UN Global Compact Guidelines, Tabela de Contribuições Oficiais
 */

export const ADESAO_STATS = [
  { valor: "+24.000", rotulo: "Organizações no Mundo", subrotulo: "Maior iniciativa de sustentabilidade do planeta" },
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
      "Presença no diretório público global de signatários da ONU",
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
      "+100 horas de conteúdo executivo em português e inglês",
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

export const QUEM_PODE_ADERIR = [
  {
    tipo: "Empresas Corporativas",
    subtitulo: "Grandes corporações e multinacionais",
    criterios: "Empresas com mais de 10 colaboradores e faturamento superior a USD 50 milhões.",
    categoria: "Participante",
    cor: "border-un-blue bg-un-blue/5",
    icone: "Building2",
    vantagens: "Acesso integral a todas as plataformas, academias, movimentos, eventos globais e direito de voto em assembleias da Rede Brasil."
  },
  {
    tipo: "PMEs (Pequenas e Médias)",
    subtitulo: "Médias e pequenas empresas em crescimento",
    criterios: "Empresas com mais de 10 colaboradores e receita anual inferior a USD 50 milhões.",
    categoria: "Signatário / Participante",
    cor: "border-un-gold bg-un-gold/5",
    icone: "Briefcase",
    vantagens: "Valores de contribuição reduzidos e proporcionais, capacitação no Academy, trilhas de aceleração e inclusão em cadeias de valor responsáveis."
  },
  {
    tipo: "Organizações Não Empresariais",
    subtitulo: "Academia, Terceiro Setor, Associações e Setor Público",
    criterios: "Instituições de ensino, ONGs, fundações, sindicatos e entidades públicas legalmente constituídas.",
    categoria: "Não Empresarial",
    cor: "border-emerald-600 bg-emerald-50",
    icone: "Scale",
    vantagens: "Contribuição financeira isenta (R$ 0 / USD 0)*. Atuação como articuladores técnicos, formadores de opinião e parceiros de pesquisa na Rede."
  }
];

export const TABELA_CONTRIBUICOES = [
  {
    faixaUSD: "USD 30 Bilhões ou mais",
    faturamentoBRL: "Acima de ~R$ 150 Bilhões",
    anuidadeUSD: 30000,
    anuidadeFormatada: "USD 30.000",
    categoria: "Empresas Globais Tier 1",
    destaque: false
  },
  {
    faixaUSD: "USD 10 – 30 Bilhões",
    faturamentoBRL: "~R$ 50 Bilhões a R$ 150 Bilhões",
    anuidadeUSD: 25000,
    anuidadeFormatada: "USD 25.000",
    categoria: "Grandes Corporações",
    destaque: false
  },
  {
    faixaUSD: "USD 5 – 10 Bilhões",
    faturamentoBRL: "~R$ 25 Bilhões a R$ 50 Bilhões",
    anuidadeUSD: 20000,
    anuidadeFormatada: "USD 20.000",
    categoria: "Grandes Corporações",
    destaque: false
  },
  {
    faixaUSD: "USD 1 – 5 Bilhões",
    faturamentoBRL: "~R$ 5 Bilhões a R$ 25 Bilhões",
    anuidadeUSD: 15000,
    anuidadeFormatada: "USD 15.000",
    categoria: "Médias-Grandes Empresas",
    destaque: false
  },
  {
    faixaUSD: "USD 500 Milhões – 1 Bilhão",
    faturamentoBRL: "~R$ 2,5 Bilhões a R$ 5 Bilhões",
    anuidadeUSD: 7500,
    anuidadeFormatada: "USD 7.500",
    categoria: "Médias-Grandes Empresas",
    destaque: false
  },
  {
    faixaUSD: "USD 250 – 500 Milhões",
    faturamentoBRL: "~R$ 1,25 Bilhão a R$ 2,5 Bilhões",
    anuidadeUSD: 5000,
    anuidadeFormatada: "USD 5.000",
    categoria: "Empresas de Médio Porte",
    destaque: false
  },
  {
    faixaUSD: "USD 50 – 250 Milhões",
    faturamentoBRL: "~R$ 250 Milhões a R$ 1,25 Bilhão",
    anuidadeUSD: 2500,
    anuidadeFormatada: "USD 2.500",
    categoria: "Empresas de Médio Porte",
    destaque: false
  },
  {
    faixaUSD: "USD 25 – 50 Milhões",
    faturamentoBRL: "~R$ 125 Milhões a R$ 250 Milhões",
    anuidadeUSD: 1250,
    anuidadeFormatada: "USD 1.250",
    categoria: "Pequenas-Médias Empresas (PMEs)",
    destaque: true
  },
  {
    faixaUSD: "Abaixo de USD 25 Milhões",
    faturamentoBRL: "Até ~R$ 125 Milhões",
    anuidadeUSD: 450,
    anuidadeFormatada: "USD 450",
    categoria: "Pequenas Empresas (PMEs)",
    destaque: true
  },
  {
    faixaUSD: "Organizações Não Empresariais",
    faturamentoBRL: "Academia, ONGs, Associações e Setor Público",
    anuidadeUSD: 0,
    anuidadeFormatada: "Isento (USD 0)",
    categoria: "Não Empresarial",
    destaque: false
  }
];

export const REGRAS_CONTRIBUICAO = [
  {
    titulo: "Subsidiárias Brasileiras",
    descricao: "Subsidiárias integrais de grupos empresariais já signatários no Brasil são isentas de anuidade própria, usufruindo dos mesmos benefícios da matriz.",
    icone: "Building"
  },
  {
    titulo: "Subsidiárias Estrangeiras",
    descricao: "Subsidiárias de matrizes globais operando no Brasil pagam 50% do valor da contribuição anual correspondente ao nível de faturamento local (exceto participantes do CORB).",
    icone: "Globe2"
  },
  {
    titulo: "Organizações Não Empresariais",
    descricao: "ONGs, universidades, fundações e entidades governamentais não possuem cobrança de contribuição financeira anual (exceto quando integram assentos especiais do conselho).",
    icone: "GraduationCap"
  },
  {
    titulo: "Requisito Mínimo de Porte",
    descricao: "Para se qualificar à adesão corporativa, a empresa deve contar com mais de 10 colaboradores diretos e demonstrar conformidade jurídica nacional.",
    icone: "UserCheck"
  }
];

export const ETAPAS_ADESAO = [
  {
    numero: "01",
    titulo: "Alinhamento aos 10 Princípios",
    descricao: "Verifique se a cultura e as diretrizes corporativas da sua organização estão alinhadas aos 10 Princípios Universais da ONU nas áreas de Direitos Humanos, Trabalho, Meio Ambiente e Anticorrupção.",
    tempo: "Fase Prévia",
    icone: "FileCheck",
    acao: "Ler os 10 Princípios"
  },
  {
    numero: "02",
    titulo: "Carta de Compromisso do CEO",
    descricao: "Obtenha a assinatura do líder máximo da organização no Brasil (CEO, Presidente ou Diretor-Geral). O modelo oficial é padronizado internacionalmente e não admite alterações em seu texto estatutário.",
    tempo: "Documentação",
    icone: "FileSignature",
    destaque: true,
    acao: "Baixar Modelo da Carta"
  },
  {
    numero: "03",
    titulo: "Inscrição no Portal Global da ONU",
    descricao: "Preencha o formulário eletrônico oficial na plataforma internacional (unglobalcompact.org), inserindo os dados institucionais da empresa e anexando a Carta de Compromisso assinada.",
    tempo: "Submissão Online",
    icone: "Laptop",
    acao: "Acessar Portal Global"
  },
  {
    numero: "04",
    titulo: "Due Diligence & Análise Reputacional",
    descricao: "A equipe de Integridade e Governança da Rede Brasil e do UN Global Compact realiza a averiguação de diligência e conformidade regulatória da organização candidata.",
    tempo: "Até 6 semanas",
    icone: "ShieldAlert",
    acao: "Ver Critérios de Diligência"
  },
  {
    numero: "05",
    titulo: "Boas-Vindas & Reunião de Onboarding",
    descricao: "Após aprovação formal da ONU em Nova York, sua empresa recebe o certificado de signatária, manual de boas-vindas e participa do encontro de integração com a equipe de Engajamento.",
    tempo: "Integração",
    icone: "Award",
    acao: "Agendar Integração"
  },
  {
    numero: "06",
    titulo: "Comunicação de Progresso (CoP)",
    descricao: "Após 1 ano de adesão, reporte seus avanços anuais por meio da plataforma digital simplificada de CoP, demonstrando transparência e compromisso contínuo perante a sociedade.",
    tempo: "Anual (Recorrente)",
    icone: "BarChart2",
    acao: "Conhecer a CoP"
  }
];

export const FAQ_ADESAO = [
  {
    pergunta: "1. Como é calculada a contribuição financeira anual?",
    resposta: "A contribuição anual é calculada de forma proporcional ao faturamento bruto anual da empresa, com valores fixados em dólares americanos (USD) que variam de USD 450 (para empresas com receita inferior a USD 25 milhões) até USD 30.000 (para multinacionais com faturamento acima de USD 30 bilhões). Para organizações não empresariais (ONGs e universidades), a participação financeira é isenta."
  },
  {
    pergunta: "2. Todas as empresas podem aderir ao Pacto Global da ONU?",
    resposta: "Sim. Empresas de todos os portes e setores da economia legalmente constituídas no Brasil podem aderir, desde que possuam no mínimo 10 colaboradores e passem satisfatoriamente pelo processo de due diligence reputacional da ONU, demonstrando compromisso com a integridade e os direitos humanos."
  },
  {
    pergunta: "3. Quem deve assinar a Carta de Compromisso institucional?",
    resposta: "A carta deve ser obrigatoriamente assinada pela mais alta liderança da empresa no Brasil (CEO, Presidente ou Diretor-Geral). Não são aceitas assinaturas de gerências ou procurações de terceiros. O texto segue uma redação internacional padronizada pelas Nações Unidas e não pode sofrer alterações de cláusulas."
  },
  {
    pergunta: "4. Quanto tempo leva a conclusão do processo de adesão?",
    resposta: "O processo completo de validação técnica, análise de diligência reputacional e homologação formal pelo escritório central do UN Global Compact em Nova York leva em média de 4 a 6 semanas após a submissão de todos os documentos exigidos."
  },
  {
    pergunta: "5. O que é a Comunicação de Progresso (CoP)?",
    resposta: "A Comunicação de Progresso (CoP) é o principal mecanismo anual de transparência do Pacto Global. Consiste em um questionário digital padronizado preenchido anualmente pelas empresas participantes na plataforma da ONU, detalhando suas ações, metas e indicadores nos quatro pilares temáticos: Direitos Humanos, Trabalho Decente, Meio Ambiente e Combate à Corrupção."
  },
  {
    pergunta: "6. Como funciona a saída ou cancelamento da participação?",
    resposta: "A adesão ao Pacto Global é um compromisso voluntário. Caso a empresa decida se desligar, basta que o representante legal autorizado envie uma comunicação formal por e-mail para engajamento@pactoglobal.org.br informando a decisão. A empresa terá seus dados atualizados no diretório global como ex-participante sem penalidades financeiras adicionais."
  },
  {
    pergunta: "7. Quais são os canais de suporte para dúvidas no processo de adesão?",
    resposta: "A equipe de Engajamento e Relacionamento com Participantes da Rede Brasil atende diretamente pelo e-mail engajamento@pactoglobal.org.br e contato@pactoglobal.org.br, além de sessões mensais online de esclarecimento para empresas interessadas."
  },
  {
    pergunta: "8. Empresas participantes podem utilizar o logo do Pacto Global da ONU?",
    resposta: "Sim. As organizações ativas e com a CoP em dia recebem autorização expressa e diretrizes para uso do selo oficial 'We Support the UN Global Compact' em seus relatórios anuais, sites institucionais e comunicações corporativas, respeitando o Manual de Marca das Nações Unidas."
  }
];

export const CONTATO_ENGAJAMENTO = {
  email: "engajamento@pactoglobal.org.br",
  emailGeral: "contato@pactoglobal.org.br",
  portalInscricaoUrl: "https://unglobalcompact.org/participation/join/application",
  modeloCartaUrl: "https://unglobalcompact.org/participation/join/application/business",
  diretorioPublicoUrl: "https://unglobalcompact.org/what-is-gc/participants",
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

// Comparativo de Níveis de Participação da ONU: Signatory vs Participant
export const COMPARATIVO_TIERS = [
  {
    criterio: "Escopo de Atuação",
    signatory: "Primariamente nacional (Rede Brasil)",
    participant: "Global e Local (Sede em Nova York + Rede Brasil)"
  },
  {
    criterio: "Elegibilidade de Porte",
    signatory: "Apropriado para PMEs (< USD 50M de receita)",
    participant: "Corporações (> USD 50M) e PMEs de alto impacto"
  },
  {
    criterio: "UN Global Compact Academy",
    signatory: "Acesso a conteúdos essenciais e trilhas públicas",
    participant: "Acesso ilimitado e gratuito para todos os colaboradores"
  },
  {
    criterio: "Aceleradores Globais (Accelerators)",
    signatory: "Acesso condicionado a vagas remanescentes",
    participant: "Inscrição prioritária gratuita nas turmas anuais"
  },
  {
    criterio: "Eventos Globais da ONU (NY e COPs)",
    signatory: "Acesso a plenárias abertas e transmissões virtuais",
    participant: "Credenciais para Leaders Summit (UNGA em NY) e salas privadas"
  },
  {
    criterio: "Benchmarking da CoP",
    signatory: "Relatório anual de prestação de contas público",
    participant: "Ferramenta avançada de benchmarking setorial mundial"
  }
];
