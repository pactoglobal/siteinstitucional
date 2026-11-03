import React from 'react';
import { SearchX } from 'lucide-react';

/**
 * Estado vazio de listagem filtrada — antes não existia em nenhuma página.
 *
 * `as` controla o nível do título: dentro de uma listagem é um h3 sob o
 * cabeçalho da seção; quando o estado vazio É a página inteira (rota de
 * detalhe com slug inválido), precisa ser o h1 da página.
 */
export const EmptyState = ({
  title = 'Nenhum resultado encontrado',
  description = 'Ajuste os filtros para ver mais conteúdo.',
  action,
  icon: Icon = SearchX,
  as: Heading = 'h3',
}) => (
  <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 bg-white/60 px-6 py-20 text-center">
    <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-un-blue/5 text-un-blue">
      <Icon className="h-7 w-7" />
    </span>
    <Heading className="font-display font-black uppercase tracking-tight text-gray-900 text-lg md:text-xl mb-3">
      {title}
    </Heading>
    <p className="max-w-sm text-sm font-light leading-relaxed text-gray-500">{description}</p>
    {action && <div className="mt-7">{action}</div>}
  </div>
);
