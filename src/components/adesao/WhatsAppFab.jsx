import React from 'react';

// Glifo do WhatsApp (24x24). O lucide-react não traz logos de marca.
const WhatsAppGlyph = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.17-3.48-8.41z" />
  </svg>
);

/**
 * Botão flutuante de WhatsApp com número fixo da área de adesão.
 *
 * Fica no canto inferior esquerdo porque o canto direito já tem o menu de
 * seções e o botão de voltar ao topo. Sem número configurado não renderiza
 * nada, em vez de montar um link quebrado.
 */
export const WhatsAppFab = ({ numero, mensagem }) => {
  const digitos = (numero || '').replace(/\D/g, '');
  if (!digitos) return null;

  const href = `https://wa.me/${digitos}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a equipe de adesão pelo WhatsApp (abre em nova aba)"
      className="group fixed bottom-6 left-4 z-40 flex h-14 items-center gap-0 rounded-full bg-[#25D366] pl-3.5 pr-3.5 text-white shadow-xl shadow-black/25 ring-2 ring-white/70 transition-all duration-300 hover:gap-2.5 hover:pr-5 hover:bg-[#1ebe5b] focus-visible:gap-2.5 focus-visible:pr-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-un-blue sm:left-6"
    >
      <WhatsAppGlyph className="h-7 w-7 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 group-hover:max-w-[12rem] group-hover:opacity-100 group-focus-visible:max-w-[12rem] group-focus-visible:opacity-100">
        Fale com a equipe
      </span>
    </a>
  );
};
