// ============================================================
// Camada de animação — GSAP carregado sob demanda.
// ------------------------------------------------------------
// O bundle da landing tem orçamento apertado, então o GSAP nunca
// entra no chunk inicial: é importado dinamicamente na primeira
// vez que uma seção animada monta. Quem não rola até lá não paga.
//
// Também é aqui que mora a regra de movimento: se a pessoa pediu
// menos animação no sistema, `loadGsap` devolve null e as seções
// renderizam no estado final, sem timeline nenhuma.
// ============================================================

let promessaGsap = null;

/** Respeita prefers-reduced-motion. Consultado a cada chamada — a
 *  pessoa pode mudar a preferência com a página aberta. */
export const prefereMenosMovimento = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Carrega GSAP + ScrollTrigger uma única vez.
 * @returns {Promise<{gsap: object, ScrollTrigger: object} | null>}
 *          null quando há preferência por menos movimento.
 */
export function loadGsap() {
  if (prefereMenosMovimento()) return Promise.resolve(null);

  if (!promessaGsap) {
    promessaGsap = Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ])
      .then(([mod, stMod]) => {
        const gsap = mod.gsap ?? mod.default;
        const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      })
      .catch((erro) => {
        // Animação é enfeite: se o chunk não carregar (rede caindo,
        // bloqueio de CDN), a página continua legível no estado final.
        // Não silenciamos — o erro precisa aparecer no monitoramento.
        console.error('[animation] falha ao carregar GSAP:', erro);
        promessaGsap = null;
        return null;
      });
  }

  return promessaGsap;
}

/** Curvas da casa — mesma família da transição do .reveal no CSS. */
export const EASE = {
  saida: 'expo.out',
  suave: 'power3.out',
  entrada: 'power2.inOut',
};
