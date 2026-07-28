// ============================================================
// AMBIÇÃO 2030 — Fonte única de dados
// ------------------------------------------------------------
// Centraliza o conteúdo da Ambição 2030 e dos 10 Movimentos.
// A AmbicaoPage (hub) e a MovimentoPage (template) consomem
// daqui — uma página por movimento, mesma estrutura.
// Os logos brancos estão em: public/movimentos/<id>.png
// ============================================================

export const AMBICAO_DEFINICAO =
 'Gerar impacto positivo e mensurável a partir de compromissos públicos assumidos por organizações brasileiras em torno dos 18 Objetivos de Desenvolvimento Sustentável — por meio de ação coletiva e individual, na reta final rumo a 2030.';

export const AMBICAO_INTRO =
 'Todas as empresas participantes do Pacto Global da ONU – Rede Brasil podem (e são encorajadas a) assinar os compromissos dos Movimentos da Ambição 2030. Após a assinatura da Carta de Compromisso ao(s) Movimento(s), existem duas modalidades de engajamento.';

// ============================================================
// Seção "O que é Ambição 2030" — Origem, Propósito e Resultados
// Fatos e números verificados no Relatório Ambição 2030 — Ano 4
// (fev.–abr. 2026, referente ao ano de 2025).
// ============================================================

export const AMBICAO_ORIGEM = {
 title: "Como Surgiu",
 description:
 "Lançada em abril de 2022 pelo Pacto Global da ONU – Rede Brasil, a Ambição 2030 nasceu da Década da Ação da ONU — o chamado do Secretário-Geral António Guterres para acelerar o cumprimento da Agenda 2030. A iniciativa convida organizações de todo o país a assumirem compromissos públicos e mensuráveis em torno de 10 causas urgentes, hoje referência nacional em mobilização empresarial para o desenvolvimento sustentável.",
 timeline: [
 { year: "2015", event: "ONU estabelece os 17 ODS como agenda global" },
 { year: "2020", event: "Guterres convoca a Década da Ação da ONU" },
 { year: "2022", event: "Lançamento oficial da Ambição 2030, em abril" },
 { year: "2023", event: "Brasil adota o ODS 18 — Igualdade Étnico-Racial" },
 { year: "2025", event: "389 organizações comprometidas — o ano do amadurecimento" },
 { year: "2030", event: "Horizonte final da Agenda 2030" },
 ]
};

export const AMBICAO_PROPOSITO = {
 title: "Nosso Propósito",
 description:
 "Conectar sustentabilidade à gestão, à governança e à tomada de decisão das organizações brasileiras. Não são agendas isoladas, mas uma lógica integrada de transformação: dez Movimentos temáticos, compromissos mensuráveis e uma só ação coletiva rumo a 2030.",
 pillars: [
 { title: "Ação Coletiva", desc: "Empresas unidas por causas comuns" },
 { title: "Metas Claras", desc: "Compromissos públicos e mensuráveis" },
 { title: "Impacto Nacional", desc: "Transformação em escala Brasil" },
 { title: "Horizonte 2030", desc: "Alinhado com os ODS globais" }
 ]
};

// Citação da Mensagem do Conselho — Relatório Ambição 2030, Ano 4.
export const AMBICAO_CITACAO = {
 quote: 'É a década da implementação.',
 author: 'Rachel Maia',
 role: 'Presidente do Conselho de Administração',
};

// Resultados acumulados até dez/2025 — Relatório Ambição 2030, Ano 4.
export const AMBICAO_RESULTADOS = {
 title: "Resultados até 2025",
 period: "Relatório Ambição 2030 — Ano 4",
 stats: [
 { value: '389', label: 'Organizações comprometidas' },
 { value: '751', label: 'Cartas Compromisso assinadas' },
 { value: '+2 mil', label: 'Compromissos públicos assumidos' },
 { value: '+2 mi', label: 'Pessoas trabalhadoras impactadas' },
 ],
 nota: 'Recomendação média de 9,1 (escala de 0 a 10) entre as organizações participantes.',
};

// --- Modalidades de engajamento ---
export const MODALIDADES = [
 {
 id: 'comprometida',
 title: 'Empresa Comprometida',
 description:
 'Acesso a jornadas gratuitas de construção do conhecimento, que contam com eventos abertos, grupos de trabalho, cases, painéis e workshops.',
 },
 {
 id: 'embaixadora',
 title: 'Empresa Embaixadora',
 description:
 'Para empresas comprometidas que querem ter papel protagonista e de viabilização das ações do Movimento. Algumas contrapartidas incluem participação no Comitê Consultivo, jornada premium e convite a eventos nacionais e internacionais.',
 },
];

// --- Estrutura dos Movimentos (5 pilares) ---
export const ESTRUTURA_MOVIMENTOS = [
 {
 id: 'ambicao',
 title: 'Ambição 2030',
 description:
 'Inspiração que coletivamente almejamos alcançar ao contribuir para a realização dos ODS.',
 },
 {
 id: 'compromissos',
 title: 'Compromissos das Empresas',
 description:
 'Metas com as quais as empresas se comprometem a realizar até 2030, por meio da assinatura da Carta de Compromisso pelo CEO. Uma forma poderosa de impulsionar empresas com vantagem competitiva rumo à transformação social.',
 },
 {
 id: 'pilares',
 title: 'Pilares de Atuação',
 description:
 'Eixos de ação e caminhos dos Movimentos, que buscam organizar e sistematizar a forma de atuação e trabalho das empresas para alcançar os compromissos assumidos.',
 },
 {
 id: 'jornada',
 title: 'Jornada dos Movimentos',
 description:
 'Cursos e formações oferecidos às empresas — treinamentos, workshops, lives, seminários e encontros — para acelerar o conhecimento das temáticas dos Movimentos e planejar a entrega dos compromissos. A jornada é gratuita e aberta a todas as empresas comprometidas.',
 },
 {
 id: 'governanca',
 title: 'Governança',
 description:
 'Comitê Consultivo formado por principais referências nacionais sobre o tema (membros convidados), Empresas Embaixadoras (por 2 anos, com possibilidade de renovação) e o Pacto Global da ONU – Rede Brasil (permanente).',
 },
];

// --- Os 10 Movimentos da Ambição 2030 ---
// Ordem espelha o material institucional.
export const MOVIMENTOS = [
 {
 id: 'mais-agua',
 name: 'Movimento + Água',
 shortName: '+ Água',
 color: '#009EDB',
 ods: [6],
 image:
 'https://images.unsplash.com/photo-1538300342682-cf57afb97285?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Impactar a vida de mais de 100 milhões de pessoas, alcançando a universalização do saneamento e a segurança hídrica no país.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 'Contribuir para que 99% da população brasileira tenha acesso a água potável.*',
 'Contribuir para que 90% da população brasileira tenha esgoto coletado e tratado.*',
 'Desenvolver pelo menos um projeto que altere positivamente a quantidade, qualidade e regime de vazões de uma bacia hidrográfica nacional sob estresse hídrico.',
 'Aumentar em 25% a eficiência do uso da água nos processos produtivos, assegurando retiradas menores e sustentáveis de recursos hídricos da natureza.',
 ],
 nota:
 '*Os compromissos focados em saneamento terão como linha de chegada 2033, a fim de caminharmos lado a lado com o novo marco legal do saneamento.',
 },
 {
 id: 'conexao-circular',
 name: 'Movimento Conexão Circular',
 shortName: 'Conexão Circular',
 color: '#B8922A',
 ods: [12],
 image:
 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Assegurar padrões de produção e de consumo sustentáveis, que busquem o uso eficiente de recursos naturais, reduzam o desperdício e minimizem o descarte de resíduos, contribuindo para a redução efetiva de todas as formas de poluição.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 'Diminuir a geração e/ou valorizar resíduos sólidos no percentual mínimo de 40% até 2030.*',
 'Implementar 3 premissas de circularidade no modelo de negócio da organização até 2030.',
 'Valorizar resíduos orgânicos no percentual mínimo de 33% até 2030, promovendo menor emissão de gases de efeito estufa.*',
 ],
 nota: '*Das organizações listadas.',
 },
 {
 id: 'net-zero',
 name: 'Movimento Ambição Net Zero',
 shortName: 'Ambição Net Zero',
 color: '#2E8B57',
 ods: [13],
 image:
 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 // Meta coletiva atualizada em 2025 (Relatório Ambição 2030 — Ano 4):
 // alinhada ao Plano Clima e à NDC brasileira, em vez da redução
 // acumulada de 2 Gt CO₂e anunciada no lançamento do Movimento.
 'Engajar o setor empresarial brasileiro na ambição coletiva de contribuir para limitar as emissões líquidas nacionais de gases de efeito estufa em 2030 a 1,2 Gt CO₂e, alinhado ao Plano Clima e à meta climática nacional (NDC brasileira).',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 'Publicar anualmente o inventário de emissões de gases de efeito estufa (GEE) dos Escopos 1, 2 e 3 (recomenda-se validação por terceira parte).',
 'Reduzir as emissões de GEE de forma compatível com a ciência climática (recomenda-se utilizar como referência os critérios da Science Based Targets initiative – SBTi) ou formalizar o compromisso com a SBTi, com metas de curto e/ou longo prazo (Net Zero).',
 'Conduzir a transição para uma economia de baixo carbono de forma justa e inclusiva, garantindo que os esforços de descarbonização considerem os impactos sociais, promovam a equidade e a criação de oportunidades para pessoas trabalhadoras e comunidades impactadas.',
 ],
 nota: null,
 },
  {
    id: 'impacto-biomas',
    name: 'Movimento Impacto Biomas',
    shortName: 'Impacto Biomas',
    color: '#1A6B3C',
    ods: [15],
    image:
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1600&auto=format&fit=crop',
    ambicao:
      'Engajar o setor empresarial brasileiro na conservação e restauração dos biomas brasileiros, por meio de ações que promovam o uso responsável do solo, desmatamento zero e a preservação da biodiversidade.',
    // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
    subtitulo: null,
    coordenacao: null,
    compromissos: [
      'Garantir que a operação da organização e sua cadeia de valor não contribuam para o desmatamento ou degradação dos biomas.',
      'Desenvolver projetos estratégicos até 2030 para a conservação e restauração florestal dos biomas brasileiros.',
    ],
    nota: null,
  },
 {
 id: 'transparencia',
 name: 'Movimento Transparência 100%',
 shortName: 'Transparência 100%',
 color: '#006080',
 ods: [16],
 image:
 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Desenvolver instituições eficazes, responsáveis e transparentes em todos os níveis.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 '100% de transparência nas interações com a administração pública.',
 '100% de integridade na remuneração da alta administração.',
 '100% da cadeia de valor de alto risco treinada em integridade.',
 '100% de transparência da estrutura de compliance e governança.',
 '100% de transparência sobre os canais de denúncias.',
 ],
 nota: null,
 },
 {
 id: 'elas-lideram',
 name: 'Movimento Elas Lideram 2030',
 shortName: 'Elas Lideram 2030',
 color: '#E04B2A',
 ods: [5],
 image:
 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Mais empresas comprometidas com o Elas Lideram 2030 e mais mulheres em posição de alta liderança.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 '30% dos cargos de alta liderança ocupados por mulheres até 2025.',
 '50% dos cargos de alta liderança ocupados por mulheres até 2030.',
 '50% dos cargos de liderança (a partir de coordenação) ocupados por mulheres até 2030, sendo ao menos 25% do total ocupado por mulheres de grupos historicamente sub-representados: negras, indígenas, quilombolas, com deficiência, LGBTQIAP+ (incluindo mulheres trans e travestis) e/ou em situação de refúgio.*',
 ],
 nota:
 '*Compromisso adicional, lançado para o ciclo 2026 — aberto às empresas que optarem por ampliar sua meta com um recorte interseccional.',
 },
 {
 id: 'raca-prioridade',
 name: 'Movimento Raça é Prioridade',
 shortName: 'Raça é Prioridade',
 color: '#D81B7E',
 // Inicialmente alinhado só ao ODS 10; desde 2025 (Relatório Ambição
 // 2030 — Ano 4) o Movimento também está alinhado ao ODS 18.
 ods: [10, 18],
 image:
 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Mais empresas comprometidas em ter mais pessoas negras* em posição de liderança e diversidade étnico-racial na cadeia de fornecimento até 2030.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 '30% de pessoas negras* em posição de liderança até 2025.',
 '50% de pessoas negras* em posição de liderança até 2030.',
 'Implementar diversidade étnico-racial* em toda a cadeia de fornecimento: mapeamento de fornecedores liderados por pessoas negras e indígenas, atualização das políticas de compras, ampliação da divulgação de oportunidades e monitoramento de indicadores.',
 ],
 nota:
 '*Negras, indígenas, quilombolas ou pertencentes a outro grupo étnico socialmente vulnerável.',
 },
 {
 id: 'mente-foco',
 name: 'Movimento Mente em Foco',
 shortName: 'Mente em Foco',
 color: '#3A7D44',
 ods: [3],
 image:
 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 '1.000 empresas com programas estruturantes de saúde mental com impacto positivo em 10 milhões de pessoas trabalhadoras.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 'Ter um profissional de referência para aconselhamento e atendimento.',
 'Oferecer orientação e manejo de crises.',
 'Garantir a avaliação permanente das pessoas trabalhadoras.',
 'Criar um programa antiestigma.',
 'Manter gestores engajados com capacitação para atuar em relação ao tema e orientação sobre as melhores condutas, sendo agentes de transformação.',
 'Promover ações de incentivo à saúde mental, como campanhas e iniciativas para práticas culturais, esportivas, de nutrição, bem-estar e educação, a partir de demandas identificadas.',
 ],
 nota: null,
 },
 {
 id: 'salario-digno',
 name: 'Movimento Salário Digno',
 shortName: 'Salário Digno',
 color: '#8B1A3A',
 ods: [8],
 image:
 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Garantir 100% de salário digno para pessoas trabalhadoras próprias, contratadas e/ou terceirizadas, e engajar toda a cadeia de suprimentos para desenvolver metas de salário digno.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 '100% de pessoas trabalhadoras em toda operação da organização com salário digno até 2030.',
 '100% de pessoas trabalhadoras contratadas e/ou terceirizadas com salário digno até 2030.',
 'Promover e engajar toda a cadeia de suprimentos para desenvolver metas de salário digno até 2030.',
 ],
 nota: null,
 },
 {
 id: 'educa2030',
 name: 'Movimento Educa2030',
 shortName: 'Educa2030',
 color: '#C0392B',
 ods: [4],
 image:
 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Promover o avanço da educação para o trabalho, diversa e alinhada à Agenda 2030 e de Direitos Humanos.',
 // ⚠ PENDENTE: preencher com dado real da RBPG (não inventar).
 subtitulo: null,
 coordenacao: null,
 compromissos: [
 'Elevar a escolaridade de pessoas trabalhadoras da organização, sobretudo entre grupos mais vulneráveis, como negros, mulheres e pessoas com deficiência, considerando operação e terceiros.',
 'Promover a inclusão produtiva de jovens de 14 a 29 anos, com foco no Jovem Aprendiz, e formação para o desenvolvimento sustentável.',
 'Impulsionar o desenvolvimento profissional de mulheres em carreiras STEM.',
 ],
 nota: null,
 },
];

export const getMovimento = (id) => MOVIMENTOS.find((m) => m.id === id) || null;
