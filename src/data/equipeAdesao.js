/**
 * Perfis da área de adesão do Pacto Global – Rede Brasil.
 *
 * PRÉVIA PARA VALIDAÇÃO: os cargos vêm do deck de Onboarding 2026, mas nome,
 * foto e contatos são genéricos ("Nome Sobrenome", e-mail coletivo de
 * Engajamento, LinkedIn institucional e reunião no Teams com a equipe) até cada pessoa concordar com a
 * exposição e o DPO avaliar (LGPD). O repositório é público: o que entrar aqui
 * fica visível no GitHub.
 *
 * O card só mostra o botão do que estiver preenchido, a pessoa só aparece se
 * tiver ao menos um canal, e a seção some se ninguém tiver.
 *
 * - foto:     caminho em public/images/equipe/ (ex.: "nome-sobrenome.jpg")
 * - email:    endereço institucional
 * - linkedin: URL completa do perfil
 * - agenda:   link de agendamento do Teams (Microsoft Bookings / reunião)
 */
const EMAIL_EQUIPE = "engajamento@pactoglobal.org.br";
const LINKEDIN_INSTITUCIONAL = "https://www.linkedin.com/company/pactoglobalbr";

// Link oficial do Teams para nova reunião: abre o agendamento já com o e-mail
// da equipe como convidado. Serve à prévia porque não há link público de
// agenda (Bookings). Trocar pelo link de agendamento de cada pessoa.
const AGENDA_TEAMS_EQUIPE =
  "https://teams.microsoft.com/l/meeting/new" +
  `?subject=${encodeURIComponent("Adesão ao Pacto Global – Rede Brasil")}` +
  `&attendees=${EMAIL_EQUIPE}`;

const perfilGenerico = (id, cargo) => ({
  id,
  nome: "Nome Sobrenome",
  cargo,
  foto: null,
  email: EMAIL_EQUIPE,
  linkedin: LINKEDIN_INSTITUCIONAL,
  agenda: AGENDA_TEAMS_EQUIPE,
});

export const EQUIPE_ADESAO = [
  perfilGenerico("gerencia", "Gerente de Engajamento e CRM"),
  perfilGenerico("coordenacao", "Coordenador(a) de Engajamento"),
  perfilGenerico("analista", "Analista de Engajamento"),
  perfilGenerico("assistente-1", "Assistente de Engajamento"),
  perfilGenerico("assistente-2", "Assistente de Engajamento"),
];
