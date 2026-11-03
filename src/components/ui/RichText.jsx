import React from 'react';
import { Quote } from 'lucide-react';

/**
 * Renderiza o corpo estruturado de notícias e eventos.
 * O conteúdo é um array de blocos tipados — nada de HTML cru, o que
 * elimina a necessidade de dangerouslySetInnerHTML e o risco de XSS
 * quando a origem passar a ser um CMS.
 */
export const RichText = ({ blocks = [], accent = '#1E3250' }) => (
  <div className="flex flex-col">
    {blocks.map((block, i) => {
      switch (block.type) {
        case 'lead':
          return (
            <p
              key={i}
              className="text-gray-900 text-lg md:text-2xl font-light leading-[1.55] mb-8 first-letter:font-display first-letter:font-black"
            >
              {block.text}
            </p>
          );

        case 'h2':
          return (
            <h2
              key={i}
              className="font-display font-black uppercase tracking-tight text-gray-900 text-xl md:text-3xl leading-tight mt-12 mb-5"
            >
              <span className="block w-12 h-1 rounded-full mb-4" style={{ backgroundColor: accent }} />
              {block.text}
            </h2>
          );

        case 'quote':
          return (
            <figure
              key={i}
              className="relative my-10 rounded-3xl bg-un-surface border border-gray-100 p-7 md:p-10"
            >
              <span
                className="absolute top-0 left-8 w-12 h-1 rounded-b-full"
                style={{ backgroundColor: accent }}
              />
              <Quote className="w-7 h-7 mb-5 opacity-30" style={{ color: accent }} aria-hidden="true" />
              <blockquote className="font-display font-black text-gray-900 text-lg md:text-2xl leading-snug tracking-tight">
                {block.text}
              </blockquote>
              {block.author && (
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="w-8 h-px" style={{ backgroundColor: accent }} />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-900">
                    {block.author}
                  </span>
                  {block.role && (
                    <span className="text-[11px] uppercase tracking-widest text-gray-400">
                      {block.role}
                    </span>
                  )}
                </figcaption>
              )}
            </figure>
          );

        case 'list':
          return (
            <ul key={i} className="my-6 flex flex-col gap-3.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-4 text-gray-700 text-base md:text-lg font-light leading-relaxed">
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          );

        case 'service':
          return (
            <aside
              key={i}
              className="my-10 overflow-hidden rounded-3xl border border-gray-200 bg-white"
            >
              <div
                className="px-6 py-4 md:px-8"
                style={{ backgroundColor: accent }}
              >
                <h3 className="font-display font-black uppercase tracking-[0.2em] text-white text-xs">
                  {block.title || 'Serviço'}
                </h3>
              </div>
              <dl className="divide-y divide-gray-100">
                {block.items.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 px-6 py-4 md:flex-row md:gap-8 md:px-8">
                    <dt className="w-32 shrink-0 text-[10px] font-bold uppercase tracking-widest text-gray-400 md:pt-1">
                      {item.label}
                    </dt>
                    <dd className="text-gray-800 text-sm md:text-base font-light leading-relaxed">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          );

        case 'p':
        default:
          return (
            <p
              key={i}
              className="text-gray-700 text-base md:text-lg font-light leading-[1.8] mb-6"
            >
              {block.text}
            </p>
          );
      }
    })}
  </div>
);
