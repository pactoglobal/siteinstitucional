// Marcas diacríticas combinantes (Unicode "Combining Diacritical Marks").
const DIACRITICOS = /[̀-ͯ]/g;

/**
 * Normaliza texto para busca: sem caixa, sem acento.
 * "Ambição" e "ambicao" passam a casar.
 *
 * @param {string} texto
 * @returns {string}
 */
export const normalizar = (texto) =>
  String(texto).toLowerCase().normalize('NFD').replace(DIACRITICOS, '');

/**
 * Testa se `termo` aparece em qualquer um dos campos, ignorando acento/caixa.
 *
 * @param {string} termo
 * @param {...string} campos
 * @returns {boolean}
 */
export const contemTermo = (termo, ...campos) => {
  const alvo = normalizar(termo.trim());
  if (!alvo) return true;
  return normalizar(campos.filter(Boolean).join(' ')).includes(alvo);
};
