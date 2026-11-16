import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  Search,
  ShieldCheck,
  Share2,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import {
  CATEGORIAS_MATERIAIS as CATEGORIAS,
  MATERIAIS_ANTICORRUPCAO,
} from '../data/materiaisAnticorrupcao';

export const MateriaisAnticorrupcaoPage = ({ navigate }) => {
  const brandColor = '#6E417A';
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');
  const [busca, setBusca] = useState('');
  const [copiadoId, setCopiadoId] = useState(null);

  const materiaisFiltrados = useMemo(() => {
    return MATERIAIS_ANTICORRUPCAO.filter((m) => {
      const matchCat = categoriaAtiva === 'Todos' || m.categoria === categoriaAtiva;
      const matchBusca =
        !busca.trim() ||
        m.title.toLowerCase().includes(busca.toLowerCase()) ||
        m.descricao.toLowerCase().includes(busca.toLowerCase()) ||
        m.setor.toLowerCase().includes(busca.toLowerCase());
      return matchCat && matchBusca;
    });
  }, [categoriaAtiva, busca]);

  const handleShare = (m) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `${m.title} — Pacto Global da ONU - Rede Brasil (https://pactoglobal.github.io/siteinstitucional/#/materiais-anticorrupcao)`
      );
      setCopiadoId(m.id);
      setTimeout(() => setCopiadoId(null), 2500);
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-screen">
      {/* ============ HERO: MATERIAIS E GUIAS ÚTEIS ============ */}
      <section
        className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden text-white"
        style={{ backgroundColor: brandColor }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover scale-105 opacity-20"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(110deg, ${brandColor} 0%, ${brandColor}f2 48%, #4A1D57 100%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={() => navigate('plataforma', 'acao-contra-a-corrupcao')}
              className="group inline-flex items-center gap-2.5 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Voltar para Plataforma Ação Contra a Corrupção</span>
            </button>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-[11px] font-bold uppercase tracking-[0.2em] border border-white/20">
              <BookOpen className="w-3.5 h-3.5 text-un-gold" />
              Central de Conhecimento Público
            </span>
          </div>

          <span className="inline-block text-un-gold text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Biblioteca Técnica · ODS 16
          </span>

          <h1 className="font-display font-black uppercase tracking-tight text-white leading-[0.92] text-4xl md:text-7xl lg:text-8xl mb-8 max-w-5xl">
            Materiais e Guias <span className="text-un-gold">Úteis</span>
          </h1>

          <p className="text-white/95 text-lg md:text-2xl font-light leading-relaxed max-w-4xl mb-12">
            Reunimos em um único acervo todos os materiais públicos, cartilhas setoriais, manuais
            de compliance e gabaritos de metas produzidos pelo Pacto Global da ONU – Rede Brasil,
            facilitando o acesso e a implementação de práticas íntegras nas empresas.
          </p>

          {/* Quick Filter Box dentro do Hero */}
          <div className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 max-w-3xl flex items-center gap-3">
            <Search className="w-5 h-5 text-white/70 ml-3" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por título, palavra-chave ou setor (ex: agro, canais, due diligence)..."
              className="w-full bg-transparent border-0 text-white placeholder-white/60 text-sm md:text-base focus:outline-none focus:ring-0"
            />
            {busca && (
              <button
                onClick={() => setBusca('')}
                className="text-xs uppercase font-bold text-white/70 hover:text-white px-3 py-1 cursor-pointer"
              >
                Limpar
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ============ CATÁLOGO DE MATERIAIS ============ */}
      <section className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {/* Barra de Filtro de Categorias */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIAS.map((cat) => {
                const ativa = categoriaAtiva === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategoriaAtiva(cat)}
                    className={cn(
                      'whitespace-nowrap text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all cursor-pointer',
                      ativa
                        ? 'bg-purple-900 text-white shadow-md scale-105'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              {materiaisFiltrados.length} {materiaisFiltrados.length === 1 ? 'material encontrado' : 'materiais encontrados'}
            </span>
          </div>

          {/* Grid de Materiais */}
          {materiaisFiltrados.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-display font-black text-slate-800 mb-2">
                Nenhum material encontrado
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                Não encontramos materiais para os filtros selecionados. Tente buscar por outros termos
                ou selecione outra categoria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setBusca('');
                  setCategoriaAtiva('Todos');
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materiaisFiltrados.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    'group relative flex flex-col justify-between rounded-3xl p-8 bg-white border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl',
                    m.destaque
                      ? 'border-purple-300 shadow-lg ring-1 ring-purple-100'
                      : 'border-slate-200/90 shadow-sm'
                  )}
                >
                  <div>
                    {/* Header do Card */}
                    <div className="flex items-center justify-between mb-5 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-[10px] tracking-wider uppercase px-3 py-1 rounded-full bg-purple-50 text-purple-800 border border-purple-200">
                          {m.tipo}
                        </span>
                        {m.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-amber-50 text-amber-800 rounded-full border border-amber-200">
                            {m.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 font-medium">
                        {m.ano}
                      </span>
                    </div>

                    {/* Título */}
                    <h3 className="font-display font-black text-xl text-slate-900 group-hover:text-purple-900 transition-colors mb-3 leading-snug">
                      {m.title}
                    </h3>

                    {/* Setor */}
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-4">
                      <ShieldCheck className="w-3.5 h-3.5 text-purple-700 shrink-0" />
                      <span>{m.setor}</span>
                    </div>

                    {/* Descrição */}
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light mb-6">
                      {m.descricao}
                    </p>
                  </div>

                  {/* Rodapé e Ações */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {m.formato} · {m.paginas} páginas
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleShare(m)}
                        title="Copiar link"
                        aria-label={`Compartilhar ${m.title}`}
                        className="p-2 rounded-xl text-slate-400 hover:text-purple-700 hover:bg-purple-50 transition-colors cursor-pointer"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      <a
                        href={m.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-purple-900 hover:bg-purple-950 text-white font-display font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all hover:scale-105"
                      >
                        <span>Acessar</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {copiadoId === m.id && (
                    <div className="absolute top-4 right-4 bg-slate-900 text-white text-[11px] px-3 py-1 rounded-full shadow-lg">
                      Link copiado!
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ BANNER: AÇÕES COLETIVAS & SUPORTE ============ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="rounded-[3rem] p-10 md:p-16 bg-gradient-to-r from-purple-950 to-slate-900 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-un-gold">
                Engajamento Setorial Ativo
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white leading-tight">
                Conheça as Ações Coletivas Anticorrupção
              </h2>
              <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed">
                Descubra como sua empresa pode atuar em conjunto com concorrentes e parceiros
                setoriais para transformar padrões de mercado nos setores de Mobilidade e Agroindústria.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button
                onClick={() => navigate('acoesColetivas')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-display font-black text-xs md:text-sm uppercase tracking-wider rounded-full shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <span>Página de Ações Coletivas</span>
                <ArrowRight className="w-4 h-4 text-purple-700" />
              </button>
              <button
                onClick={() => navigate('publicacoes')}
                className="inline-flex items-center gap-2 px-6 py-4 text-white hover:text-un-gold font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Ver Observatório Geral</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
