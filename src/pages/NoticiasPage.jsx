import React, { useMemo, useState } from 'react';
import { EditorialHero } from '../components/ui/EditorialHero';
import { FilterDock, FilterRail, SearchField, ResultCount } from '../components/ui/FilterBar';
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
  const secundarias = temFiltro ? [] : filtradas.slice(1, 2);
  const restante = temFiltro ? filtradas : filtradas.slice(2);

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
        image="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2070&auto=format&fit=crop"
        eyebrow="Cobertura da Rede Brasil"
        title="Notícias"
        lead="Reportagens, entrevistas e análises sobre a atuação da rede, os dez Movimentos da Ambição 2030 e a agenda de sustentabilidade corporativa no país."
        meta={[
          { value: NOTICIAS.length, label: 'Publicadas' },
          { value: categorias.length - 1, label: 'Editorias' },
          { value: '2026', label: 'Ciclo atual' },
        ]}
      />

      {/* ============ FILTROS ============ */}
      <FilterDock>
        <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          <FilterRail
            label="Editoria"
            options={categorias}
            value={categoria}
            onChange={trocarFiltro(setCategoria)}
            accentFor={(opt) => (opt === TODAS ? '#1E3250' : corDaCategoria(opt))}
            countFor={(opt) =>
              opt === TODAS ? NOTICIAS.length : NOTICIAS.filter((n) => n.category === opt).length
            }
            className="flex-1"
          />
          <SearchField
            value={busca}
            onChange={(v) => {
              setBusca(v);
              setPagina(1);
            }}
            placeholder="Buscar"
            label="Buscar notícias"
            className="pb-4 xl:w-52"
          />
        </div>
      </FilterDock>

      {/* ============ LISTAGEM ============ */}
      <section id="listagem" className="bg-un-surface py-14 md:py-20 scroll-mt-[calc(var(--header-h)+5rem)]">
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
              {/* Abertura: destaque + uma matéria de apoio, na mesma altura.
                  Duas colunas empilhadas à direita esticavam o destaque para
                  ~900px e desproporcionavam a foto. O resto vai para o índice. */}
              {destaque && (
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
                  <Reveal className="lg:col-span-7">
                    <ArticleCard noticia={destaque} variant="featured" className="h-full" />
                  </Reveal>

                  {secundarias.map((n, i) => (
                    <Reveal key={n.slug} delay={110 + i * 80} className="lg:col-span-5">
                      <ArticleCard noticia={n} variant="default" className="h-full" />
                    </Reveal>
                  ))}
                </div>
              )}

              {/* Arquivo em índice — contraponto tipográfico ao bento acima */}
              {visiveis.length > 0 && (
                <div className="mt-14 border-b border-gray-200">
                  {visiveis.map((n, i) => (
                    <Reveal key={n.slug} delay={i * 50}>
                      <ArticleCard
                        noticia={n}
                        variant="index"
                        index={(paginaAtual - 1) * POR_PAGINA + i + 1 + (destaque ? 2 : 0)}
                      />
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
