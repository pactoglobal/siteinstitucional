import React, { useState } from 'react';
import { Linkedin, Link2, Check, MessageCircle } from 'lucide-react';

/** Ícone do X (Twitter) — não existe no lucide-react. */
const XIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const buttonClass =
  'inline-flex items-center justify-center w-11 h-11 rounded-full border border-gray-200 bg-white text-gray-500 transition-all duration-300 hover:border-gray-900 hover:text-gray-900 hover:-translate-y-0.5';

/**
 * Compartilhamento — LinkedIn, X e WhatsApp (os três canais usados hoje
 * no site) mais cópia do link direto.
 */
export const ShareBar = ({ title, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title || '');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard bloqueado (contexto inseguro ou permissão negada):
      // os links de rede social seguem funcionando.
      setCopied(false);
    }
  };

  const links = [
    {
      label: 'Compartilhar no LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: Linkedin,
    },
    {
      label: 'Compartilhar no X',
      href: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: XIcon,
    },
    {
      label: 'Compartilhar no WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      Icon: MessageCircle,
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 mr-1">
        Compartilhar
      </span>

      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={buttonClass}
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}

      <button
        type="button"
        onClick={copy}
        aria-label="Copiar link da página"
        title={copied ? 'Link copiado' : 'Copiar link'}
        className={buttonClass}
      >
        {copied ? <Check className="w-4 h-4 text-un-green" /> : <Link2 className="w-4 h-4" />}
      </button>

      <span aria-live="polite" className="sr-only">
        {copied ? 'Link copiado para a área de transferência' : ''}
      </span>
    </div>
  );
};
