/**
 * Papel de cada cor da marca na página Como Aderir.
 *
 * - dourado: finanças e ação principal (simulador, anuidade, "Quero aderir")
 * - verde:   sustentabilidade, progresso e confirmação (checks, etapas, CoP)
 * - roxo:    pessoas e relacionamento (porte, contato, comunidade, FAQ)
 * - azul:    dados e informação (evidência executiva, análise)
 *
 * Verde e roxo como texto sobre o azul-marinho não têm contraste suficiente.
 * Em fundo escuro eles entram como preenchimento (pílulas, selos, barras) com
 * texto branco; como texto, só sobre fundo claro.
 */

/** Pílula preenchida, para usar sobre fundo escuro ou foto. */
export const PILULA = {
  dourado: 'bg-un-gold text-un-blue',
  verde: 'bg-un-green text-white',
  roxo: 'bg-un-purple text-white',
  azul: 'bg-un-blue-1 text-white',
};

/** Fundo sólido, para barras, selos e marcadores. */
export const FUNDO = {
  dourado: 'bg-un-gold',
  verde: 'bg-un-green',
  roxo: 'bg-un-purple',
  azul: 'bg-un-blue-1',
};
