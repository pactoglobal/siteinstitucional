import React, { useState, useMemo } from 'react';
import { Search, X, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export const EmpresasModal = ({ isOpen, onClose, movimento }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const empresas = movimento?.empresasComprometidas ?? [];

  const filteredEmpresas = useMemo(() => {
    if (!searchQuery.trim()) return empresas;
    const query = searchQuery.toLowerCase();
    return empresas.filter(
      (e) =>
        e.nome.toLowerCase().includes(query) ||
        (e.data && e.data.includes(query)),
    );
  }, [empresas, searchQuery]);

  if (!isOpen || !movimento) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop com desfoque de vidro */}
      <div
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Conteúdo do Modal */}
      <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col max-h-[85vh] animate-scale-up">
        {/* Header do Modal com a cor do Movimento */}
        <div
          className="p-6 md:p-8 text-white relative overflow-hidden flex items-center justify-between"
          style={{ backgroundColor: movimento.color }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30 pointer-events-none" />
          
          <div className="relative z-10 flex items-center gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white font-display font-black text-xl shadow-inner">
              {empresas.length}
            </span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 block mb-1">
                Empresas Comprometidas
              </span>
              <h3 className="text-xl md:text-2xl font-display font-black tracking-tight text-white">
                {movimento.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Campo de Busca */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar organização por nome ou data..."
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all shadow-sm"
              style={{ focusRingColor: movimento.color }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs uppercase font-bold"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Tabela / Lista de Organizações */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          {filteredEmpresas.length === 0 ? (
            <div className="text-center py-12">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-medium text-base">
                Nenhuma organização encontrada para "{searchQuery}".
              </p>
              <p className="text-slate-400 text-xs mt-1">
                Tente buscar por outro termo.
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="grid grid-cols-12 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                <span className="col-span-8">Organização</span>
                <span className="col-span-4 text-right">Data de Adesão</span>
              </div>
              <ul className="divide-y divide-slate-100 list-none m-0 p-0">
                {filteredEmpresas.map((empresa, idx) => (
                  <li
                    key={empresa.nome + idx}
                    className="grid grid-cols-12 items-center px-4 py-3.5 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <div className="col-span-8 flex items-center gap-3">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0"
                        style={{ color: movimento.color }}
                      />
                      <span className="font-semibold text-sm text-slate-800">
                        {empresa.nome}
                      </span>
                    </div>
                    <div className="col-span-4 flex items-center justify-end gap-1.5 text-xs text-slate-500 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{empresa.data || 'Ano 4'}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer do Modal */}
        <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>
            Mostrando <strong>{filteredEmpresas.length}</strong> de{' '}
            <strong>{empresas.length}</strong> organizações
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold uppercase tracking-wider text-[11px] transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
