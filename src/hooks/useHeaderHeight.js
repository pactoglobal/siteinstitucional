import { useEffect } from 'react';

/**
 * Publica a altura real do CapsuleHeader em `--header-h`.
 *
 * O header é `fixed`, então tudo que é `sticky` precisa começar abaixo
 * dele. Um valor fixo em CSS não serve: a altura muda por breakpoint,
 * ao rolar (py-5 → py-3) e depois que a fonte Flama carrega. Já errou
 * por 15px em produção — a barra de filtros ficava parcialmente
 * escondida atrás do header.
 *
 * Medir em tempo de execução tira a duplicação de verdade: o header
 * responde por sua própria altura e ninguém precisa mantê-la sincronizada.
 */
export function useHeaderHeight() {
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const aplicar = () => {
      const altura = Math.round(header.getBoundingClientRect().height);
      if (altura > 0) {
        document.documentElement.style.setProperty('--header-h', `${altura}px`);
      }
    };

    aplicar();

    const observer =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(aplicar) : null;
    observer?.observe(header);

    window.addEventListener('resize', aplicar);
    // A troca de padding do header acontece no scroll.
    window.addEventListener('scroll', aplicar, { passive: true });
    // Flama é carregada por @font-face: o header cresce quando ela chega.
    document.fonts?.ready.then(aplicar).catch(() => {});

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', aplicar);
      window.removeEventListener('scroll', aplicar);
    };
  }, []);
}
