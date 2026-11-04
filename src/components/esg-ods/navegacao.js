// O site usa rotas por hash (#/esg), então âncoras <a href="#secao"> trocariam
// de página. A navegação interna rola até o id, descontando o header fixo.
const HEADER_OFFSET = 90;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** @param {string} id */
export const rolarPara = (id) => {
  const alvo = document.getElementById(id);
  if (!alvo) return;
  const topo = alvo.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: topo, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
};

/** Logos dos movimentos em public/movimentos, nomeados pelo id do movimento. */
export const logoMovimento = (id) => `${import.meta.env.BASE_URL}movimentos/${id}.png`;

/** Ícone oficial do ODS em public/ods. */
export const iconeOds = (numero) => `${import.meta.env.BASE_URL}ods/ods-${numero}.jpg`;
