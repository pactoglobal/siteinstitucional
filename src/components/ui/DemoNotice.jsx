import React from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Aviso de conteúdo de demonstração.
 *
 * O protótipo é público (pactoglobal.github.io) e carrega a marca da ONU.
 * Títulos, datas e categorias vieram do site real, mas o corpo das
 * matérias, as programações e os resumos das publicações são texto de
 * preenchimento para validar o layout. Sem este aviso, a página exibiria
 * conteúdo inventado como se fosse editorial da Rede Brasil.
 *
 * Remover junto com a entrada do conteúdo editorial real.
 */
export const DemoNotice = ({ children = 'Conteúdo de demonstração para validação de layout — textos, datas e programações não são editoriais oficiais.' }) => (
  <div className="border-b border-amber-200 bg-amber-50">
    <div className="container mx-auto flex items-start gap-3 px-4 py-3 md:px-8 lg:px-12">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
      <p className="text-xs font-medium leading-relaxed text-amber-900">
        {children}
      </p>
    </div>
  </div>
);
