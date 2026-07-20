// ============================================================
// AMBIÇÃO 2030 — Fonte única de dados
// ------------------------------------------------------------
// Centraliza o conteúdo da Ambição 2030 e dos 10 Movimentos.
// A AmbicaoPage (hub) e a MovimentoPage (template) consomem
// daqui — uma página por movimento, mesma estrutura.
// Os logos brancos estão em: public/movimentos/<id>.png
// ============================================================

export const AMBICAO_DEFINICAO =
 'Gerar impacto positivo a partir de compromissos públicos de um grupo de empresas, por meio de ação coletiva e individual, para o alcance dos ODS.';

export const AMBICAO_INTRO =
 'Todas as empresas participantes do Pacto Global da ONU – Rede Brasil podem (e são encorajadas a) assinar os compromissos dos Movimentos da Ambição 2030. Após a assinatura da Carta de Compromisso ao(s) Movimento(s), existem duas modalidades de engajamento.';

// ============================================================
// NOVO: Seção "O que é Ambição 2030" - Origem e Propósito
// ============================================================

export const AMBICAO_ORIGEM = {
 title: "Como Surgiu",
 description: 
 "A Ambição 2030 nasceu da necessidade de traduzir os Objetivos de Desenvolvimento Sustentável em ação empresarial concreta. Lançada em 2021 pelo Pacto Global da ONU – Rede Brasil, a iniciativa une empresas em torno de 10 causas urgentes, cada uma com metas mensuráveis até 2030.",
 timeline: [
 { year: "2015", event: "ONU estabelece os 17 ODS como agenda global" },
 { year: "2019", event: "Pacto Global Brasil identifica necessidade de tradução local" },
 { year: "2021", event: "Lançamento oficial da Ambição 2030 com 10 Movimentos" },
 { year: "2024", event: "+1.900 empresas participantes em todo o Brasil" },
 { year: "2030", event: "Meta: Impacto transformador em escala nacional" }
 ]
};

export const AMBICAO_PROPOSITO = {
 title: "Nosso Propósito",
 description: 
 "Mobilizar o setor empresarial brasileiro para atuar de forma coletiva e individual na implementação da Agenda 2030, gerando impacto positivo mensurável em pessoas, planeta e prosperidade.",
 pillars: [
 { title: "Ação Coletiva", desc: "Empresas unidas por causas comuns" },
 { title: "Metas Claras", desc: "Compromissos públicos e mensuráveis" },
 { title: "Impacto Nacional", desc: "Transformação em escala Brasil" },
 { title: "Horizonte 2030", desc: "Alinhado com os ODS globais" }
 ]
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
 'Engajar o setor empresarial brasileiro para individualmente estabelecer metas baseadas na ciência e coletivamente chegar a uma redução de 2 Gt de CO₂e em emissões acumuladas.',
 compromissos: [
 'Reduzir emissões de GEE de forma alinhada aos critérios da Science Based Targets (SBTi) ou formalizar o compromisso com a SBTi (metas de curto e/ou longo prazos).',
 'Publicar anualmente inventário de emissões de gases de efeito estufa (GEE).',
 'Trabalhar com o setor empresarial brasileiro para coletivamente chegar a uma redução de emissões de 2 Gt de CO₂e.',
 ],
 nota: null,
 },
 {
 id: 'impacto-amazonia',
 name: 'Movimento Impacto Amazônia',
 shortName: 'Impacto Amazônia',
 color: '#1A6B3C',
 ods: [15],
 image:
 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Engajar o setor empresarial brasileiro no enfrentamento ao desmatamento na Amazônia, por meio de ações individuais, setoriais e intersetoriais que promovam o uso responsável do solo e a preservação da floresta viva.',
 compromissos: [
 'Garantir que a operação da organização e seus produtos não contribuam com desmatamento.',
 'Desenvolver ao menos um projeto até 2030 que colabore com a manutenção da floresta viva no território da Amazônia Legal.',
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
 compromissos: [
 '30% dos cargos de alta liderança ocupados por mulheres até 2025.',
 '50% dos cargos de alta liderança ocupados por mulheres até 2030.',
 ],
 nota: null,
 },
 {
 id: 'raca-prioridade',
 name: 'Movimento Raça é Prioridade',
 shortName: 'Raça é Prioridade',
 color: '#D81B7E',
 ods: [10],
 image:
 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop',
 ambicao:
 'Mais empresas comprometidas em ter mais pessoas negras* em posição de liderança até 2030.',
 compromissos: [
 '30% de pessoas negras* em posição de liderança até 2025.',
 '50% de pessoas negras* em posição de liderança até 2030.',
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
 compromissos: [
 'Elevar a escolaridade de pessoas trabalhadoras da organização, sobretudo entre grupos mais vulneráveis, como negros, mulheres e pessoas com deficiência, considerando operação e terceiros.',
 'Promover a inclusão produtiva de jovens de 14 a 29 anos, com foco no Jovem Aprendiz, e formação para o desenvolvimento sustentável.',
 'Impulsionar o desenvolvimento profissional de mulheres em carreiras STEM.',
 ],
 nota: null,
 },
];

export const getMovimento = (id) => MOVIMENTOS.find((m) => m.id === id) || null;
