import { useEffect, useRef } from 'react';
import { loadGsap } from '../lib/animation';

/**
 * Roda uma montagem GSAP com escopo num elemento e limpa tudo ao desmontar.
 *
 * O `gsap.context` é o que torna isso seguro numa SPA com rotas em hash:
 * ele registra toda tween e ScrollTrigger criada dentro do callback e as
 * mata de uma vez no revert(). Sem isso, trocar de rota deixa ScrollTriggers
 * órfãos apontando para nós que já saíram do DOM.
 *
 * @param {(ctx: {gsap: object, ScrollTrigger: object, raiz: HTMLElement}) => void} montar
 * @param {Array} deps
 * @returns {import('react').RefObject<HTMLElement>} ref para o elemento raiz
 */
export function useGsap(montar, deps = []) {
  const raizRef = useRef(null);
  // Mantém o callback fresco sem re-rodar o efeito a cada render.
  const montarRef = useRef(montar);
  montarRef.current = montar;

  useEffect(() => {
    let ctx;
    let cancelado = false;

    loadGsap().then((lib) => {
      // null = prefers-reduced-motion. Sem timeline: o CSS já deixa
      // .reveal visível nesse caso, então a seção fica no estado final.
      if (!lib || cancelado || !raizRef.current) return;
      const { gsap, ScrollTrigger } = lib;
      ctx = gsap.context(
        () => montarRef.current({ gsap, ScrollTrigger, raiz: raizRef.current }),
        raizRef,
      );

      // ScrollTrigger congela as posições no momento da criação. Nesta SPA
      // as seções montam depois da rota trocar e a altura da página ainda
      // muda (fontes, imagens lazy), então um gatilho criado com o seu
      // ponto de partida já ultrapassado nunca dispara — e o elemento fica
      // travado no estado inicial do `from()`, invisível ou deslocado.
      // O refresh recalcula tudo e faz disparar o que já deveria ter
      // disparado. Em rAF duplo para cair depois do paint deste commit.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!cancelado) ScrollTrigger.refresh();
        });
      });

      // Fontes web mudam a altura do texto ao trocar do fallback: sem este
      // segundo refresh os pontos ficam calculados sobre a métrica errada.
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!cancelado) ScrollTrigger.refresh();
        });
      }
    });

    return () => {
      cancelado = true;
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return raizRef;
}
