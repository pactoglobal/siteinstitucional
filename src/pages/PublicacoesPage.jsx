import React, { useMemo, useState } from 'react';
import { FileX } from 'lucide-react';
import { EditorialHero } from '../components/ui/EditorialHero';
import { FilterDock, FilterRail, FilterSelect, SearchField, ResultCount } from '../components/ui/FilterBar';
import { PublicationCard } from '../components/ui/PublicationCard';
import { Pagination } from '../components/ui/Pagination';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import {
  PUBLICACOES,
  temasComPublicacoes,
  tiposComPublicacoes,
  corDoTema,
} from '../data/publicacoes';
import { contemTermo } from '../utils/text';

const POR_PAGINA = 8;
const TODOS = 'Todos';

export const PublicacoesPage = () => {
  const [tema, setTema] = useState(TODOS);
  const [tipo, setTipo] = useState(TODOS);
  const [busca, setBusca] = useState('');
  const [pagina, setPagina] = useState(1);

  const temas = useMemo(() => temasComPublicacoes(), []);
  const tipos = useMemo(() => tiposComPublicacoes(), []);

  const filtradas = useMemo(
    () =>
      PUBLICACOES.filter(
        (p) =>
          (tema === TODOS || p.themes.includes(tema)) &&
          (tipo === TODOS || p.type === tipo) &&
          contemTermo(busca, p.title, p.summary, p.themes.join(' '), p.type),
      ),
    [tema, tipo, busca],
  );

  const temFiltro = tema !== TODOS || tipo !== TODOS || busca.trim() !== '';

  // Destaques só aparecem no acervo sem filtro — com filtro, tudo entra na grade.
  const destaques = temFiltro ? [] : filtradas.filter((p) => p.featured).slice(0, 3);
  const restante = temFiltro ? filtradas : filtradas.filter((p) => !destaques.includes(p));

  const totalPaginas = Math.ceil(restante.length / POR_PAGINA);
  const paginaAtual = Math.min(pagina, Math.max(totalPaginas, 1));
  const visiveis = restante.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA);

  const limpar = () => {
    setTema(TODOS);
    setTipo(TODOS);
    setBusca('');
    setPagina(1);
  };

  const irParaPagina = (p) => {
    setPagina(p);
    document.querySelector('#acervo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="animate-fade-in">
      <EditorialHero
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
        eyebrow="Observatório · Acervo aberto"
        title="Publicações"
        lead="Guias, relatórios e pesquisas produzidos pela rede para apoiar empresas na implementação de práticas empresariais responsáveis. Acesso livre e gratuito."
        meta={[
          { value: PUBLICACOES.length, label: 'Documentos' },
          { value: temas.length - 1, label: 'Temas' },
          { value: 'PT-BR', label: 'Idioma' },
        ]}
        accent="#CCB146"
        background="#6E417A"
      />

      {/* ============ FILTROS ============ */}
      <FilterDock>
        <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          <FilterRail
            label="Tema"
            options={temas}
            value={tema}
            onChange={(v) => {
              setTema(v);
              setPagina(1);
            }}
            accentFor={(opt) => (opt === TODOS ? '#1E3250' : corDoTema(opt))}
            countFor={(opt) =>
              opt === TODOS
                ? PUBLICACOES.length
                : PUBLICACOES.filter((p) => p.themes.includes(opt)).length
            }
            className="flex-1"
          />
          <div className="flex shrink-0 items-baseline gap-8 pb-4">
            <FilterSelect
              id="filtro-tipo"
              label="Tipo"
              options={tipos}
              value={tipo}
              onChange={(v) => {
                setTipo(v);
                setPagina(1);
              }}
            />
            <SearchField
              value={busca}
              onChange={(v) => {
                setBusca(v);
                setPagina(1);
              }}
              placeholder="Buscar"
              label="Buscar publicações"
              className="w-40"
            />
          </div>
        </div>
      </FilterDock>

      {/* ============ DESTAQUES ============ */}
      {destaques.length > 0 && (
        <section className="bg-white py-14 md:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <SectionHeader
              badge="Recém-publicados"
              title="Em"
              titleAccent="destaque"
              description="Os materiais mais recentes produzidos com as empresas participantes."
            />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
              {destaques.map((p, i) => (
                <Reveal
                  key={p.slug}
                  delay={i * 90}
                  className={i === 0 ? 'lg:col-span-2' : undefined}
                >
                  <PublicationCard publicacao={p} variant="featured" className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============ ACERVO ============ */}
      <section id="acervo" className="scroll-mt-[calc(var(--header-h)+5rem)] bg-un-surface py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {!temFiltro && (
            <SectionHeader
              badge="Acervo completo"
              title="Todas as"
              titleAccent="publicações"
            />
          )}

          {filtradas.length === 0 ? (
            <EmptyState
              icon={FileX}
              title="Nenhuma publicação encontrada"
              description="Não há documentos que combinem com este tema, tipo e termo de busca."
              action={
                <button
                  type="button"
                  onClick={limpar}
                  className="text-[11px] font-bold uppercase tracking-widest text-un-purple underline underline-offset-4 transition-colors hover:text-un-blue"
                >
                  Limpar filtros
                </button>
              }
            />
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4">
                {visiveis.map((p, i) => (
                  <Reveal key={p.slug} delay={i * 60}>
                    <PublicationCard publicacao={p} className="h-full" />
                  </Reveal>
                ))}
              </div>

              <ResultCount
                total={filtradas.length}
                singular="publicação"
                plural="publicações"
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
