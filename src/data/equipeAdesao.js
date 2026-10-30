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
 * - whatsapp: link wa.me completo, com a mensagem pré-preenchida
 * - email:    endereço institucional
 * - linkedin: URL completa do perfil
 * - agenda:   link de agendamento do Teams (Microsoft Bookings / reunião)
 */

export const EQUIPE_ADESAO = [
  {
    id: "barbara-souza",
    nome: "Barbara Rodrigues de Souza",
    cargo: "Analista de Adesão",
    foto: "barbara-souza.jpg",
    whatsapp:
      "https://wa.me/5511963110743?text=Ol%C3%A1%20B%C3%A1rbara%2C%20tudo%20bem%3F%20Estou%20entrando%20em%20contato%2C%20pois%20visitei%20o%20site%20e%20gostaria%20de%20fazer%20parte%20do%20Pacto%20Global%20da%20ONU%20-%20Brasil.",
    email: "barbara.souza@pactoglobal.org.br",
    linkedin: "https://www.linkedin.com/in/barbara-rodrigues-de-souza/",
    agenda: null,
  },
];
