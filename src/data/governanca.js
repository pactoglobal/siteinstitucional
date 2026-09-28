/**
 * DADOS OFICIAIS DE GOVERNANÇA — PACTO GLOBAL DA ONU - REDE BRASIL
 * Mapeamento fidedigno e estruturado da arquitetura institucional,
 * instâncias colegiadas, documentos de referência e FAQ de integridade.
 */

export const MANDATO_INFO = {
  titulo: "Governança & Integridade Corporativa",
  subtitulo: "O elo oficial do Pacto Global das Nações Unidas no Brasil — a 2ª maior rede local do mundo.",
  naturezaJuridica: "Associação privada sem fins lucrativos",
  baseLegal: "Memorando de Entendimento (MoU) com a sede do UN Global Compact em Nova York",
  anoCriacao: 2003,
  sede: "São Paulo, SP - Brasil",
  declaracao: `O Pacto Global - Rede Brasil é constituído por meio de uma associação sem fins lucrativos que trabalha em parceria direta com a sede do Pacto Global da ONU, em Nova York, mediante a celebração de um Memorando de Entendimentos (MoU). Como elo oficial no país, garante rigor técnico, conformidade estatutária e alinhamento estratégico com os Dez Princípios universais e os 17 Objetivos de Desenvolvimento Sustentável (ODS).`
};

export const ESTATISTICAS_GOVERNANCA = [
  { valor: "+2.000", rotulo: "Empresas & Organizações Conectadas" },
  { valor: "2ª Maior", rotulo: "Rede Local do Pacto Global no Mundo" },
  { valor: "11", rotulo: "Assentos no Conselho de Administração" },
  { valor: "100%", rotulo: "Demonstrações Financeiras Auditadas" }
];

export const PILARES_GOVERNANCA = [
  {
    id: "mandato",
    numero: "01",
    titulo: "Mandato & Representatividade",
    descricao: "O Conselho de Administração é eleito em Assembleia Geral pelos signatários, mesclando grandes empresas, PMEs, sociedade civil e assentos natos da ONU.",
    destaque: "Mandatos bienais auditáveis"
  },
  {
    id: "auditoria",
    numero: "02",
    titulo: "Transparência Financeira",
    descricao: "Contas e relatórios anuais auditados por firmas internacionais independentes, com fiscalização contínua do Conselho Fiscal e publicação aberta.",
    destaque: "Auditoria Externa Independente"
  },
  {
    id: "compliance",
    numero: "03",
    titulo: "Ética & Prevenção de Conflitos",
    descricao: "Código de conduta rigoroso e Política de Conflito de Interesses assinada por todos os conselheiros, diretores e comitês temáticos.",
    destaque: "Código de Ética 2025"
  },
  {
    id: "ouvidoria",
    numero: "04",
    titulo: "Canal Independente 0800",
    descricao: "Canal terceirizado de denúncias disponível 24 horas por dia, 7 dias por semana, com garantia estatutária de não retaliação e anonimato absoluto.",
    destaque: "0800 300 4472"
  }
];

export const CONSELHO_ADMINISTRACAO = [
  {
    empresa: "AEGEA SANEAMENTO",
    cargoConselho: "Presidência",
    titular: "Ana Paula de Medeiros Carracedo",
    funcaoTitular: "Presidente do Conselho & Diretora de Integridade (Aegea)",
    foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    logo: "https://www.pactoglobal.org.br/wp-content/uploads/2024/05/logo-aegea.svg",
    suplente: "Edison Carlos",
    categoria: "Empresa",
    destaque: true
  },
  {
    empresa: "ITAÚ UNIBANCO",
    cargoConselho: "Vice-Presidência",
    titular: "Luciana Nicola",
    funcaoTitular: "Vice-Presidente do Conselho & Diretora de Sustentabilidade (Itaú)",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/VF3FmH1yZUagzqtBZuia.png",
    suplente: "Kelly Cristina Fiel De Souza",
    categoria: "Empresa",
    destaque: true
  },
  {
    empresa: "ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU)",
    cargoConselho: "Assento Nato ONU",
    titular: "Igor Garafulic",
    funcaoTitular: "Coordenador Residente do Sistema ONU no Brasil",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    logo: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Pacto-Logo.png",
    suplente: "Gabinete da Coordenação Residente",
    categoria: "Nações Unidas",
    destaque: true
  },
  {
    empresa: "UN GLOBAL COMPACT (HQ NOVA YORK)",
    cargoConselho: "Sede Global (Nova York)",
    titular: "Esther Corral",
    funcaoTitular: "Regional Manager - Global Compact Headquarters",
    foto: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
    logo: "https://www.pactoglobal.org.br/wp-content/uploads/2026/02/logo-pacto.png",
    suplente: "UNGC Global Operations",
    categoria: "Nações Unidas",
    destaque: true
  },
  {
    empresa: "CPFL ENERGIA",
    cargoConselho: "Conselheiro",
    titular: "Rodolfo Nardez Sirol",
    funcaoTitular: "Diretor de Sustentabilidade e Meio Ambiente",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/HTQDEruSzQPndJ2cGurT.png",
    suplente: "Maria Elisa Novaes Delgado",
    categoria: "Empresa"
  },
  {
    empresa: "FGV EAESP",
    cargoConselho: "Conselheiro",
    titular: "Ligia Maura Fernandes Garcia da Costa",
    funcaoTitular: "Professora e Coordenadora Acadêmica",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop",
    logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2025/09/PNG-1-scaled.png",
    suplente: "Tales Andreassi",
    categoria: "Academia"
  },
  {
    empresa: "GRUPO SABIN",
    cargoConselho: "Conselheiro",
    titular: "Lídia Freire Abdalla Nery",
    funcaoTitular: "Presidente Executiva (CEO) do Grupo Sabin",
    foto: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&auto=format&fit=crop",
    logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/KuOS0cIfJA4xgBAPiPwt.png",
    suplente: "Sandra Soares Costa",
    categoria: "Empresa"
  },
  {
    empresa: "INSTITUTO REDE MULHER EMPREENDEDORA",
    cargoConselho: "Conselheiro",
    titular: "Ana Lucia Pedro Fontes",
    funcaoTitular: "Fundadora e Presidente do Instituto RME",
    foto: "https://casefala.com.br/site2/wp-content/uploads/2020/11/ana-fontes-credito-priscila-prade-3-scaled.jpg",
    logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/V5kvl7rps6d50IeUEDzZ.png",
    suplente: "Josino Pedro Filho",
    categoria: "Sociedade Civil"
  },
  {
    empresa: "SANTA CASA DE MISERICÓRDIA DE SP",
    cargoConselho: "Conselheiro",
    titular: "Dra. Maria Dulce Garcez Leme Cardenuto",
    funcaoTitular: "Médica e Gestora Hospitalar",
    foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&auto=format&fit=crop",
    logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/4VRmkwK6F8Yyh51bta4u.png",
    suplente: "Dr. Rogério Pecchini",
    categoria: "Saúde & Sociedade Civil"
  },
  {
    empresa: "MOTIVA INFRAESTRUTURA DE MOBILIDADE",
    cargoConselho: "Conselheiro",
    titular: "Juliana Maria da Silva",
    funcaoTitular: "Liderança de Sustentabilidade Corporativa",
    foto: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=300&auto=format&fit=crop",
    logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/April2020/RVOYQmsex8Zi7ucw1UER.png",
    suplente: "Renata Ruggiero Moraes",
    categoria: "Empresa"
  },
  {
    empresa: "NESTLÉ BRASIL",
    cargoConselho: "Conselheiro",
    titular: "Gustavo Chiarini Bastos",
    funcaoTitular: "Diretor Jurídico e de Integridade",
    foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
    logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/NBHF1tDMAcY3nGWlyXWv.png",
    suplente: "Ana Carolina Carregaro",
    categoria: "Empresa"
  }
];

export const CONSELHO_FISCAL = [
  {
    nome: "Mônica Pires",
    cargo: "Membro Efetivo do Conselho Fiscal",
    foto: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2023/11/0plA27TWX9FMCYBj5VVV.jpg?bv_host=www.pactoglobal.org.br",
    atribuicao: "Fiscalização orçamentária e acompanhamento de auditorias independentes."
  },
  {
    nome: "Roberto Lamb",
    cargo: "Membro Efetivo do Conselho Fiscal",
    foto: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2024/01/roberto-lamb.jpeg?bv_host=www.pactoglobal.org.br",
    atribuicao: "Auditoria de demonstrações contábeis e conformidade com normas IFRS."
  },
  {
    nome: "Carlos Cammas",
    cargo: "Membro Efetivo do Conselho Fiscal",
    foto: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2025/09/Foto-Carlos-Cammas.jpg?bv_host=www.pactoglobal.org.br",
    atribuicao: "Governança financeira e análise de pareceres dos auditores externos."
  },
  {
    nome: "Rosana Passos de Pádua",
    cargo: "Membro Efetivo do Conselho Fiscal",
    foto: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2025/09/WhatsApp-Image-2025-09-10-at-14.15.37-e1759420923339.jpeg?bv_host=www.pactoglobal.org.br",
    atribuicao: "Compliance fiscal e validação de relatórios de encerramento de exercício."
  }
];

export const DIRETORIA_EXECUTIVA = [
  {
    nome: "Mônica Gregori",
    cargo: "Diretora de Impacto",
    foto: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2024/10/monica-gregori.jpg?bv_host=www.pactoglobal.org.br",
    descricao: "Lidera as frentes temáticas, Plataformas de Ação, Movimentos da Ambição 2030 e métricas de impacto socioambiental dos participantes da Rede Brasil."
  },
  {
    nome: "Rodrigo de Assis Favetta",
    cargo: "Diretor Financeiro & Administrativo",
    foto: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2024/06/favetta2.png?bv_host=www.pactoglobal.org.br",
    descricao: "Responsável pela sustentabilidade financeira, governança corporativa, infraestrutura operacional e compliance orçamentário da associação."
  }
];

export const ORGANOGRAMA_INFO = {
  imagem: "https://www.pactoglobal.org.br/wp-content/uploads/2026/05/VWzmt679XaPAy2LalgbwzLAoI3qeCFwOpHdazkGI-scaled.webp",
  estruturaIntegridade: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2025/10/image009.png",
  titulo: "Estrutura Organizacional e Governança",
  descricao: "Hierarquia institucional auditada que conecta a Assembleia Geral, Conselho de Administração, Conselho Fiscal, Diretoria Executiva e as Áreas de Integridade e Operações."
};

export const CORB_EMPRESAS = [
  { nome: "Aegea", site: "https://www.aegea.com.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/2024/05/logo-aegea.svg" },
  { nome: "Albert Einstein", site: "https://www.einstein.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/KuOS0cIfJA4xgBAPiPwt.png" },
  { nome: "Alpargatas", site: "https://alpargatas.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/December2020/Bkv4wNYWPzwOQVeNaFgW.png" },
  { nome: "Amaggi", site: "https://www.amaggi.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/HsYEd0G2OA9H2c8PCk54.png" },
  { nome: "Ambev", site: "https://www.ambev.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/q9YadX0Ge7yKdEyD4WKV.png" },
  { nome: "Anglo American", site: "https://brasil.angloamerican.com/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/April2020/RVOYQmsex8Zi7ucw1UER.png" },
  { nome: "Atvos", site: "https://atvos.com/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/August2020/uzLPg9Zw5LLPW6LdyC37.png" },
  { nome: "B3", site: "https://www.b3.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/NBHF1tDMAcY3nGWlyXWv.png" },
  { nome: "Banco do Brasil", site: "https://www.bb.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/2beFOD1w26smXJji95Kf.png" },
  { nome: "Bradesco", site: "https://banco.bradesco/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/April2020/uqRnhTiZdIL52qdV4qUa.PNG" },
  { nome: "BRK Ambiental", site: "https://www.brkambiental.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/4VRmkwK6F8Yyh51bta4u.png" },
  { nome: "Caixa Econômica Federal", site: "https://www.caixa.gov.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/l9phSxMj5a6mNh23TxNv.png" },
  { nome: "Copel", site: "https://www.copel.com/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/ezX5ZqDRupbfCLAmQAIN.png" },
  { nome: "CPFL Energia", site: "https://www.cpfl.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/HTQDEruSzQPndJ2cGurT.png" },
  { nome: "CTG Brasil", site: "https://www.ctgbr.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/agUnKKw91ijtV11k0c4Q.png" },
  { nome: "Eletrobras", site: "https://eletrobras.com/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/WHGGJeCESY1er06sxEgk.png" },
  { nome: "Enel", site: "https://www.enel.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/vsLuwrO6rq7dFT9jR3iu.png" },
  { nome: "Fundação Dom Cabral (FDC)", site: "https://www.fdc.org.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2025/09/PNG-1-scaled.png" },
  { nome: "FIEMG", site: "https://www.fiemg.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/April2020/81OJUAGOxduwOniQ6p1C.PNG" },
  { nome: "Fiep", site: "https://www.fiepr.org.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/h1K7Vu1AYpmXwwhOjbct.png" },
  { nome: "Fiesp", site: "https://www.fiesp.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/eL7zPxXMsoitj2I2MsSX.png" },
  { nome: "iFood", site: "https://www.ifood.com.br/", logo: "https://i.imgur.com/P8bWaC0.png" },
  { nome: "Instituto Ethos", site: "https://www.ethos.org.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/V5kvl7rps6d50IeUEDzZ.png" },
  { nome: "Itaipu Binacional", site: "https://www.itaipu.gov.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/Km1IGj7YLQnCdp73ogSR.png" },
  { nome: "Itaú Unibanco", site: "https://www.itau.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/VF3FmH1yZUagzqtBZuia.png" },
  { nome: "Machado Meyer Advogados", site: "https://www.machadomeyer.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/October2020/4Wj2BG6Nc7Zh8driMRmT.png" },
  { nome: "Mattos Filho", site: "https://www.mattosfilho.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/A03bnVaqFOPQiUj7Y3ki.png" },
  { nome: "MRV", site: "https://www.mrv.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/April2020/HQp1sMHQucU5viOrlTmu.jpg" },
  { nome: "Natura", site: "https://www.natura.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/gyPpBtgaYUb9xoSFgD91.png" },
  { nome: "Neoenergia", site: "https://www.neoenergia.com/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/April2020/1QHq5pHhvCn4XR6WBpk0.PNG" },
  { nome: "Nestlé", site: "https://www.nestle.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/April2020/UxZsQ5FTqDRUYBith3EA.PNG" },
  { nome: "Nubank", site: "https://nubank.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2022/R5eRHvXCXeVhMoiiYfTp.jpg" },
  { nome: "Petrobras", site: "https://petrobras.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/SdGMc6pSyaFyZo9mRh3w.png" },
  { nome: "Pinheiro Neto Advogados", site: "https://www.pinheironeto.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/November2021/PY882t0xQgglh4iY1RDM.jpg" },
  { nome: "PwC Brasil", site: "https://www.pwc.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/u1P3YgNT6vzKKZNawH8j.png" },
  { nome: "Santander", site: "https://www.santander.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/mlQpaxPCKndlHjsyrSsY.png" },
  { nome: "Sebrae MT", site: "https://sebrae.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/Y1z4Q9wfKn3B2wdXmnux.png" },
  { nome: "Siemens", site: "https://www.siemens.com/br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/z8MLmW0iQuvDrvaTRMdz.png" },
  { nome: "SPIC Brasil", site: "https://www.spicbrasil.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/October2021/y23qYymvWHpC0S1gcipO.jpg" },
  { nome: "Unilever", site: "https://www.unilever.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/August2022/8R37HqzIwYVEuihmTfUX.png" },
  { nome: "Vivo", site: "https://www.vivo.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/June2022/kxshrwXacfynY2LOmdW9.png" },
  { nome: "Votorantim", site: "https://www.votorantim.com.br/", logo: "https://pactoglobal.org.br/wp-content/themes/pacto-global/storage/comites/March2019/12DqgLeNKq5hziIWJsd3.png" },
  { nome: "YDUQS", site: "https://www.yduqs.com.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2024/05/YDUQS-logo-2.png" },
  { nome: "CEMIG", site: "https://www.cemig.com.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2025/03/Logo-Cemig-Preta.png" }
];

export const CLUSTERS_DOCUMENTOS = [
  {
    id: "constitutivos",
    nome: "Atos Constitutivos & Estatuto Social",
    icone: "FileCheck",
    descricao: "Documentos de fundação, regulamentação interna e diretrizes das Plataformas de Ação."
  },
  {
    id: "financeiro",
    nome: "Demonstrações Financeiras & Auditorias",
    icone: "BarChart3",
    descricao: "Balanços patrimoniais e demonstrações financeiras anuais com parecer de auditoria independente."
  },
  {
    id: "estrategia",
    nome: "Planejamento Estratégico & Metas",
    icone: "Target",
    descricao: "Diretrizes de expansão, metas anuais de impacto e planejamento plurianual da Rede Brasil."
  },
  {
    id: "compliance",
    nome: "Ética, Integridade & Compliance",
    icone: "Shield",
    descricao: "Políticas institucionais de conformidade, conflito de interesses e medidas anticorrupção."
  },
  {
    id: "dados",
    nome: "Privacidade, Proteção de Dados (LGPD) & PSI",
    icone: "Lock",
    descricao: "Políticas de governança de dados pessoais, avisos aos signatários e segurança da informação."
  },
  {
    id: "marca",
    nome: "Diretrizes de Marca, Comunicação & Pessoas",
    icone: "Award",
    descricao: "Regulamento oficial para uso de logotipos ONU Global Compact e diretrizes de trabalho."
  }
];

export const DOCUMENTOS_GOVERNANCA = [
  {
    id: "estatuto-2026",
    titulo: "Estatuto Social",
    subtitulo: "Instituto Rede Brasil do Pacto Global da ONU",
    clusterId: "constitutivos",
    ano: "2026",
    dataAprovacao: "19.02.2026",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2026/08/Estatuto-Social-Pacto-Global-da-ONU-Rede-Brasil-19.02.2026.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "regimento-2025",
    titulo: "Regimento Interno",
    subtitulo: "Normas operacionais de deliberação das instâncias",
    clusterId: "constitutivos",
    ano: "2025",
    dataAprovacao: "31.10.2025",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2026/01/Regimento_Interno__31.10.2025.docx-3.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "regulamento-plataformas-2022",
    titulo: "Regulamento de Plataformas de Ação",
    subtitulo: "Diretrizes e governança das frentes temáticas",
    clusterId: "constitutivos",
    ano: "2022",
    dataAprovacao: "Jun/2022",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Regulamento-de-Frentes-Tematicas-Jun-2022-Assinado.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "df-2024",
    titulo: "Demonstrações Financeiras 2024",
    subtitulo: "Balanço Patrimonial com Parecer de Auditoria Independente",
    clusterId: "financeiro",
    ano: "2024",
    dataAprovacao: "Jul/2025",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2026/07/Demonstracoes-Financeiras-2024.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "df-2023",
    titulo: "Demonstrações Financeiras 2023",
    subtitulo: "Exercício fiscal auditado — Instituto Rede Brasil",
    clusterId: "financeiro",
    ano: "2023",
    dataAprovacao: "Ago/2024",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2025/08/24BDC-030-PB-Instituto-Rede-Brasil-do-Pacto-Global-EF.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "pe-2026",
    titulo: "Planejamento Estratégico de 2026",
    subtitulo: "Diretrizes operacionais e metas de expansão",
    clusterId: "estrategia",
    ano: "2026",
    dataAprovacao: "Jul/2026",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2026/07/Planejamento-Estrategico-2026.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "pe-2025",
    titulo: "Planejamento Estratégico 2025",
    subtitulo: "Metas de impacto e aceleração dos ODS",
    clusterId: "estrategia",
    ano: "2025",
    dataAprovacao: "Ago/2025",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2025/08/PE-2025.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "codigo-etica-2025",
    titulo: "Código de Ética e Conduta",
    subtitulo: "Diretriz norteadora para equipe, conselheiros e parceiros",
    clusterId: "compliance",
    ano: "2025",
    dataAprovacao: "Out/2025",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2025/10/Codigo_de_Etica_e_Conduta_-_Pacto_Global_Rede_Brasil_2025.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "medidas-integridade-2024",
    titulo: "Medidas de Integridade",
    subtitulo: "Mecanismos de salvaguarda e combate à corrupção",
    clusterId: "compliance",
    ano: "2024",
    dataAprovacao: "Mar/2024",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Medidas-de-Integridade-Rede-Brasil-do-Pacto-Global_Portugues_ve.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "conflito-interesses-2021",
    titulo: "Política de Conflito de Interesses",
    subtitulo: "Prevenção e mitigação de vínculos de interesse",
    clusterId: "compliance",
    ano: "2021",
    dataAprovacao: "Mar/2021",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Politica-de-Conflito-de-Interesses_port_vf.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "politica-compras-2020",
    titulo: "Política de Compras e Contratações",
    subtitulo: "Critérios de seleção transparente de fornecedores",
    clusterId: "compliance",
    ano: "2020",
    dataAprovacao: "Dez/2020",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Politica-de-Compras-e-Contratacoes-do-Instituto-Rede-Brasil-do-Pacto-Global-Dez-2020-vf-assinada.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "lgpd-governanca-2026",
    titulo: "Política de Governança e Proteção de Dados Pessoais",
    subtitulo: "Adequação plena à Lei Geral de Proteção de Dados (LGPD)",
    clusterId: "dados",
    ano: "2026",
    dataAprovacao: "Mar/2026",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2026/03/Política_de_Governança_de_Proteção_de_Dados_Pessoais.docx-1.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "psi-2026",
    titulo: "Política de Segurança da Informação (PSI)",
    subtitulo: "Protocolos de segurança cibernética e custódia digital",
    clusterId: "dados",
    ano: "2026",
    dataAprovacao: "Mar/2026",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2026/03/Política_de_Segurança_da_Informação.docx-1.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "aviso-signatarios-2021",
    titulo: "Aviso de Privacidade aos Signatários e Prospects",
    subtitulo: "Tratamento de dados no processo de adesão",
    clusterId: "dados",
    ano: "2021",
    dataAprovacao: "Mar/2021",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Aviso-de-Privacidade-Signatarios-e-Prospects-final-Marco-2021.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "aviso-beneficiarios-2021",
    titulo: "Aviso de Privacidade aos Beneficiários",
    subtitulo: "Direitos e tratamento de dados em projetos sociais",
    clusterId: "dados",
    ano: "2021",
    dataAprovacao: "Mar/2021",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Aviso-de-Privacidade-Beneficiarios-Final-Marco-2021-1.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "dados-fornecedores-2021",
    titulo: "Tratamento de Dados para Fornecedores e Parceiros",
    subtitulo: "Cláusulas de conformidade para prestadores de serviço",
    clusterId: "dados",
    ano: "2021",
    dataAprovacao: "Mar/2021",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Politica-Dados-Fornecedores-e-Parceiros-final-Marco-2021.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "logo-ungc-2026",
    titulo: "Política de Uso do Logotipo do UN Global Compact",
    subtitulo: "Manual oficial de aplicação da marca pelas empresas",
    clusterId: "marca",
    ano: "2026",
    dataAprovacao: "Mai/2026",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2026/05/vom1djDPDetuXW1EtPl0So1eVC8kv4kl62rtIoz4.pdf",
    tipo: "PDF",
    obrigatorio: true
  },
  {
    id: "comunicacao-2021",
    titulo: "Política de Comunicação",
    subtitulo: "Diretrizes de porta-vozes, imprensa e publicações",
    clusterId: "marca",
    ano: "2021",
    dataAprovacao: "Mar/2021",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Politica-de-Comunicacao-Final-Marco-2021.pdf",
    tipo: "PDF",
    obrigatorio: false
  },
  {
    id: "trabalho-remoto-2020",
    titulo: "Política de Trabalho Remoto",
    subtitulo: "Regulamento interno para regime híbrido e remoto",
    clusterId: "marca",
    ano: "2020",
    dataAprovacao: "Dez/2020",
    url: "https://www.pactoglobal.org.br/wp-content/uploads/2024/03/Pacto-Global-Politica-Trabalho-Remoto-Dez-vf-assinada.pdf",
    tipo: "PDF",
    obrigatorio: false
  }
];

export const CANAL_DENUNCIAS = {
  telefone: "0800 300 4472",
  link: "https://canaldedenuncia.com.br/pactoglobalbrasil",
  descricao: "Canal externo, independente e confidencial para registro de denúncias de violações éticas, fraudes, assédio ou descumprimento de políticas.",
  caracteristicas: [
    "Operação 100% terceirizada por empresa especializada",
    "Garantia irrestrita de anonimato e sigilo",
    "Protocolo de não retaliação ao denunciante de boa-fé",
    "Acompanhamento em tempo real via protocolo"
  ]
};

export const FAQ_GOVERNANCA = [
  {
    pergunta: "Qual é a natureza jurídica do Pacto Global - Rede Brasil?",
    resposta: "O Pacto Global - Rede Brasil é constituído como uma associação civil de direito privado, sem fins lucrativos. Ele opera no país por meio de um Memorando de Entendimentos (MoU) formalizado com o Escritório do Pacto Global das Nações Unidas em Nova York, conferindo-lhe o mandato oficial de representação da iniciativa no território brasileiro."
  },
  {
    pergunta: "Como funciona a eleição e composição do Conselho de Administração?",
    resposta: "O Conselho de Administração é composto por 11 assentos e eleito pela Assembleia Geral dos participantes da Rede Brasil. A sua composição é estruturada para garantir representatividade multissetorial (grandes empresas, pequenas e médias empresas, academia e organizações da sociedade civil), além de contar com assentos natos reservados para a Coordenação Residente da ONU no Brasil e para a sede do UN Global Compact."
  },
  {
    pergunta: "Qual é o papel do Conselho Orientador da Rede Brasil (CORB)?",
    resposta: "O CORB é um órgão consultivo de alto nível composto por lideranças das maiores corporações e instituições participantes da Rede Brasil. Ele atua orientando as diretrizes estratégicas de longo prazo, promovendo o engajamento multisetorial e fortalecendo a mobilização do setor privado para as metas da Agenda 2030."
  },
  {
    pergunta: "Como é assegurada a transparência e fiscalização das contas?",
    resposta: "Todas as contas e demonstrações financeiras anuais da associação são submetidas à auditoria externa independente realizada por empresas internacionais de auditoria. Além disso, o Conselho Fiscal atua de forma permanente na conferência contábil, e todos os balanços auditados são publicados abertamente no site oficial para consulta pública."
  },
  {
    pergunta: "Como funciona o Canal de Denúncias e quem pode acioná-lo?",
    resposta: "O Canal de Denúncias (0800 300 4472 e via web) é gerido de forma 100% autônoma e externa por uma consultoria especializada em compliance. Pode ser utilizado por qualquer signatário, colaborador, prestador de serviço ou cidadão para reportar suspeitas de conduta inadequada, conflito de interesses ou descumprimento estatutário, com garantia formal de anonimato e proteção contra retaliação."
  },
  {
    pergunta: "Qual a relação entre a Rede Brasil e a sede da ONU em Nova York?",
    resposta: "A Rede Brasil é o braço executivo e de mobilização local do UN Global Compact. Enquanto Nova York define os marcos globais, campanhas internacionais (como o Forward Faster) e a Comunicação de Progresso (CoP), a Rede Brasil adapta e lidera programas no país (como os Movimentos da Ambição 2030, Hubs ODS e Plataformas de Ação), prestando contas regulares à liderança global da ONU."
  },
  {
    pergunta: "Como a Rede Brasil garante conformidade com a LGPD e Segurança da Informação?",
    resposta: "A instituição conta com uma Política de Governança de Proteção de Dados Pessoais e uma Política de Segurança da Informação (PSI) aprovadas pelo Conselho, encarregado de dados (DPO) constituído e contratos com fornecedores submetidos a cláusulas rígidas de confidencialidade e salvaguarda digital."
  }
];

export const APOIADORES_GOVERNANCA = [
  { nome: "ICMP Consultoria", link: "https://www.icmpconsultoria.com.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2026/04/5P36EBuGgJJxtZSSdRMV6siUsnlfoJMEvVlhM4O3.png" },
  { nome: "B2HR", link: "https://b2hr.com", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2026/03/logo-b2hr.png" },
  { nome: "Pinheiro Neto Advogados", link: "https://www.linkedin.com/company/pinheironeto/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2023/12/aIDEyvpK6pLxkc77Wros.png" },
  { nome: "Máquina CW", link: "https://www.linkedin.com/company/maquinacw", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2026/02/maquina.png" },
  { nome: "Purpple", link: "https://www.purpple.com.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2026/02/purple.png" },
  { nome: "Perhaps", link: "https://perhaps.com.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/2025/10/logo_perhaps.svg" },
  { nome: "Be Compliance", link: "https://www.becompliance.com/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2026/02/be.png" },
  { nome: "Machado Meyer", link: "https://www.machadomeyer.com.br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/al_opt_content/IMAGE/www.pactoglobal.org.br/wp-content/uploads/2026/02/machado.png" },
  { nome: "Deskbee", link: "https://www.deskbee.co/br/", logo: "https://www.pactoglobal.org.br/wp-content/uploads/2025/08/logo-default-royal.svg" }
];
