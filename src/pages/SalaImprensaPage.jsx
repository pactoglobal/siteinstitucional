import React, { useMemo, useState } from 'react';
import { FileX, ArrowRight } from 'lucide-react';
import { EditorialHero } from '../components/ui/EditorialHero';
import { FilterDock, FilterRail, SearchField, ResultCount } from '../components/ui/FilterBar';
import { ReleaseCard } from '../components/ui/ReleaseCard';
import { ContatoAssessoria, KitImprensa } from '../components/ui/PressKit';
import { Pagination } from '../components/ui/Pagination';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { RELEASES, tiposComReleases, corDoTipo, ASSESSORIA } from '../data/releases';
import { contemTermo } from '../utils/text';

const POR_PAGINA = 6;
const TODOS = 'Todos';

/**
 * Sala de Imprensa — releases, notas e comunicados oficiais.
 * Público: jornalista. A cobertura editorial (matérias e reportagens)
 * fica em NoticiasPage.
 */
export const SalaImprensaPage = ({ navigate }) => {
  const [tipo, setTipo] = useState(TODOS);
  const [busca, setBusca] = useState('');
  const [pagina, setPagina] = useState(1);

  const tipos = useMemo(() => tiposComReleases(), []);

  const filtrados = useMemo(
    () =>
      RELEASES.filter(
        (r) =>
          (tipo === TODOS || r.type === tipo) &&
          contemTermo(busca, r.title, r.excerpt, r.type, r.spokesperson),
      ),
    [tipo, busca],
  );

  const temFiltro = tipo !== TODOS || busca.trim() !== '';
  const destaque = temFiltro ? null : filtrados[0];
  const restante = temFiltro ? filtrados : filtrados.slice(1);

  const totalPaginas = Math.ceil(restante.length / POR_PAGINA);
  const paginaAtual = Math.min(pagina, Math.max(totalPaginas, 1));
  const visiveis = restante.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA);

  const limpar = () => {
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
        eyebrow="Sala de Imprensa"
        title="Releases e"
        titleAccent="comunicados"
        lead="Posições oficiais, notas e material de apoio do Pacto Global da ONU – Rede Brasil para veículos de comunicação."
        meta={[
          { value: RELEASES.length, label: 'Documentos' },
          { value: tipos.length - 1, label: 'Naturezas' },
          { value: '24h', label: 'Retorno médio' },
        ]}
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
        actions={
          <a
            href={`mailto:${ASSESSORIA.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-un-green px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-un-green/20 transition-all duration-300 hover:bg-un-green/90 hover:shadow-xl active:scale-95"
          >
            Falar com a assessoria <ArrowRight className="h-4 w-4" />
          </a>
        }
      />

      {/* ============ BENTO: DESTAQUE + ASSESSORIA + KIT ============ */}
      <section className="bg-un-surface py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
            {destaque && (
              <Reveal className="lg:col-span-7">
                <ReleaseCard release={destaque} variant="featured" className="h-full" />
              </Reveal>
            )}

            <Reveal delay={100} className={destaque ? 'lg:col-span-5' : 'lg:col-span-6'}>
              <ContatoAssessoria className="h-full" />
            </Reveal>

            <Reveal delay={180} className="lg:col-span-12">
              <KitImprensa />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FILTROS ============ */}
      <FilterDock>
        <div className="flex flex-col gap-1 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          <FilterRail
            label="Natureza"
            options={tipos}
            value={tipo}
            onChange={(v) => {
              setTipo(v);
              setPagina(1);
            }}
            accentFor={(opt) => (opt === TODOS ? '#1E3250' : corDoTipo(opt))}
            countFor={(opt) =>
              opt === TODOS ? RELEASES.length : RELEASES.filter((r) => r.type === opt).length
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
            label="Buscar releases"
            className="pb-4 xl:w-52"
          />
        </div>
      </FilterDock>

      {/* ============ ACERVO ============ */}
      <section id="acervo" className="scroll-mt-[calc(var(--header-h)+5rem)] bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {!temFiltro && (
            <SectionHeader
              badge="Acervo"
              title="Todos os"
              titleAccent="documentos"
              description="Releases, notas oficiais, comunicados e posicionamentos, do mais recente ao mais antigo."
            />
          )}

          {filtrados.length === 0 ? (
            <EmptyState
              icon={FileX}
              title="Nenhum documento encontrado"
              description="Não há releases que combinem com esta natureza e este termo de busca."
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
              <div className="flex flex-col gap-4">
                {visiveis.map((r, i) => (
                  <Reveal key={r.slug} delay={i * 60}>
                    <ReleaseCard release={r} />
                  </Reveal>
                ))}
              </div>

              <ResultCount
                total={filtrados.length}
                singular="documento"
                plural="documentos"
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

      {/* ============ PONTE PARA A COBERTURA EDITORIAL ============ */}
      <section className="bg-un-surface py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-8 md:flex-row md:items-center md:p-10">
            <div>
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-un-gold">
                Procurando matérias?
              </span>
              <h2 className="mb-2 font-display text-xl font-black uppercase leading-tight tracking-tight text-gray-900 md:text-2xl">
                A cobertura editorial fica em Notícias
              </h2>
              <p className="max-w-xl text-sm font-light leading-relaxed text-gray-500">
                Aqui ficam as posições oficiais da rede. Reportagens, entrevistas e matérias sobre
                as iniciativas estão na editoria de notícias.
              </p>
            </div>
            <Button variant="secondary" icon={ArrowRight} onClick={() => navigate?.('noticias')}>
              Ver notícias
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
