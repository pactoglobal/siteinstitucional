import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { EditorialHero } from '../components/ui/EditorialHero';
import { FilterPills, ResultCount } from '../components/ui/FilterBar';
import { ArticleCard } from '../components/ui/ArticleCard';
import { Pagination } from '../components/ui/Pagination';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { NOTICIAS, categoriasComNoticias, corDaCategoria } from '../data/noticias';
import { contemTermo } from '../utils/text';

const POR_PAGINA = 6;
const TODAS = 'Todas';

export const NoticiasPage = () => {
  const [categoria, setCategoria] = useState(TODAS);
  const [busca, setBusca] = useState('');
  const [pagina, setPagina] = useState(1);

  const categorias = useMemo(() => categoriasComNoticias(), []);

  const filtradas = useMemo(
    () =>
      NOTICIAS.filter(
        (n) =>
          (categoria === TODAS || n.category === categoria) &&
          contemTermo(busca, n.title, n.excerpt, n.category),
      ),
    [categoria, busca],
  );

  // Sem filtro ativo a primeira notícia vira destaque do bento; com filtro,
  // a listagem fica plana para não esconder resultado atrás de hierarquia.
  const temFiltro = categoria !== TODAS || busca.trim() !== '';
  const destaque = temFiltro ? null : filtradas[0];
  const secundarias = temFiltro ? [] : filtradas.slice(1, 3);
  const restante = temFiltro ? filtradas : filtradas.slice(3);

  const totalPaginas = Math.ceil(restante.length / POR_PAGINA);
  const paginaAtual = Math.min(pagina, Math.max(totalPaginas, 1));
  const visiveis = restante.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA);

  const trocarFiltro = (fn) => (valor) => {
    fn(valor);
    setPagina(1);
  };

  const limpar = () => {
    setCategoria(TODAS);
    setBusca('');
    setPagina(1);
  };

  const irParaPagina = (p) => {
    setPagina(p);
    document.querySelector('#listagem')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="animate-fade-in">
      <EditorialHero
        eyebrow="Sala de Imprensa"
        title="Notícias"
        lead="Cobertura das ações da rede, dos Movimentos da Ambição 2030 e da agenda de sustentabilidade corporativa no Brasil."
        meta={[
          { value: NOTICIAS.length, label: 'Publicadas' },
          { value: categorias.length - 1, label: 'Editorias' },
          { value: '2026', label: 'Ciclo atual' },
        ]}
      />

      {/* ============ FILTROS ============ */}
      <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/85 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <FilterPills
              options={categorias}
              value={categoria}
              onChange={trocarFiltro(setCategoria)}
              accentFor={(opt) => (opt === TODAS ? '#1E3250' : corDaCategoria(opt))}
              countFor={(opt) =>
                opt === TODAS
                  ? NOTICIAS.length
                  : NOTICIAS.filter((n) => n.category === opt).length
              }
              className="min-w-0 flex-1"
            />

            <div className="relative shrink-0 lg:w-72">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={busca}
                onChange={(e) => {
                  setBusca(e.target.value);
                  setPagina(1);
                }}
                placeholder="Buscar notícias"
                aria-label="Buscar notícias"
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm text-gray-900 transition-colors placeholder:text-gray-400 hover:border-gray-900 focus:border-un-blue focus:outline-none"
              />
              {busca && (
                <button
                  type="button"
                  onClick={() => setBusca('')}
                  aria-label="Limpar busca"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LISTAGEM ============ */}
      <section id="listagem" className="bg-un-surface py-14 md:py-20 scroll-mt-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {filtradas.length === 0 ? (
            <EmptyState
              title="Nenhuma notícia encontrada"
              description="Não há publicações que combinem com esta editoria e este termo de busca."
              action={
                <button
                  type="button"
                  onClick={limpar}
                  className="text-[11px] font-bold uppercase tracking-widest text-un-blue underline underline-offset-4 transition-colors hover:text-un-blue-1"
                >
                  Limpar filtros
                </button>
              }
            />
          ) : (
            <>
              {/* Bento de destaque — só sem filtro ativo */}
              {destaque && (
                <div className="mb-6 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
                  <Reveal className="lg:col-span-8">
                    <ArticleCard noticia={destaque} variant="featured" className="h-full" />
                  </Reveal>

                  <div className="flex flex-col gap-5 lg:col-span-4 lg:gap-6">
                    {secundarias.map((n, i) => (
                      <Reveal key={n.slug} delay={100 + i * 80} className="flex-1">
                        <ArticleCard noticia={n} variant="default" className="h-full" />
                      </Reveal>
                    ))}
                  </div>
                </div>
              )}

              {/* Grade principal */}
              {visiveis.length > 0 && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {visiveis.map((n, i) => (
                    <Reveal key={n.slug} delay={i * 70}>
                      <ArticleCard noticia={n} className="h-full" />
                    </Reveal>
                  ))}
                </div>
              )}

              <ResultCount
                total={filtradas.length}
                singular="notícia"
                plural="notícias"
                hasFilters={temFiltro}
                onReset={limpar}
              />

              <Pagination
                page={paginaAtual}
                totalPages={totalPaginas}
                onChange={irParaPagina}
                className="mt-10"
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};
