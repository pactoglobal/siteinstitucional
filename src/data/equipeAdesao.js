/**
 * Contato de Adesão do Pacto Global da ONU – Rede Brasil.
 *
 * A página mostra uma única pessoa, a que conduz a entrada das empresas.
 * Dados informados pelo Brener (out/2026). O repositório é público: o que
 * entrar aqui fica visível no GitHub.
 *
 * O card só mostra o botão do que estiver preenchido, a pessoa só aparece se
 * tiver ao menos um canal, e a seção some se ninguém tiver.
 *
 * - foto:     caminho em public/images/equipe/ (ex.: "nome-sobrenome.jpg")
 * - email:    endereço institucional
 * - linkedin: URL completa do perfil
 * - agenda:   link de agendamento do Teams (Microsoft Bookings / reunião)
 */

// Link oficial do Teams para nova reunião, já com a pessoa como convidada.
// Trocar pelo link de agendamento (Bookings) quando houver um.
const agendaTeams = (email) =>
  "https://teams.microsoft.com/l/meeting/new" +
  `?subject=${encodeURIComponent("Adesão ao Pacto Global – Rede Brasil")}` +
  `&attendees=${email}`;

export const EQUIPE_ADESAO = [
  {
    id: "barbara-souza",
    nome: "Barbara Rodrigues de Souza",
    cargo: "Analista de Adesão",
    foto: "barbara-souza.jpg",
    email: "barbara.souza@pactoglobal.org.br",
    linkedin: "https://www.linkedin.com/in/barbara-rodrigues-de-souza/",
    agenda: agendaTeams("barbara.souza@pactoglobal.org.br"),
  },
];
