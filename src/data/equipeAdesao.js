/**
 * Perfis da área de adesão do Pacto Global – Rede Brasil.
 *
 * PRÉVIA PARA VALIDAÇÃO: os cargos vêm do deck de Onboarding 2026, mas nome,
 * foto e contatos são genéricos ("Nome Sobrenome", e-mail coletivo de
 * Engajamento e LinkedIn institucional) até cada pessoa concordar com a
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

const perfilGenerico = (id, cargo) => ({
  id,
  nome: "Nome Sobrenome",
  cargo,
  foto: null,
  email: EMAIL_EQUIPE,
  linkedin: LINKEDIN_INSTITUCIONAL,
  agenda: null,
});

export const EQUIPE_ADESAO = [
  perfilGenerico("gerencia", "Gerente de Engajamento e CRM"),
  perfilGenerico("coordenacao", "Coordenador(a) de Engajamento"),
  perfilGenerico("analista", "Analista de Engajamento"),
  perfilGenerico("assistente-1", "Assistente de Engajamento"),
  perfilGenerico("assistente-2", "Assistente de Engajamento"),
];
