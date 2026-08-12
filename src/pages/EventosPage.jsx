import React, { useMemo, useState } from 'react';
import { CalendarX } from 'lucide-react';
import { EditorialHero } from '../components/ui/EditorialHero';
import { FilterPills, FilterSelect, ResultCount } from '../components/ui/FilterBar';
import { EventCard } from '../components/ui/EventCard';
import { EmptyState } from '../components/ui/EmptyState';
import { Reveal } from '../components/ui/Reveal';
import { cn } from '../utils/cn';
import { formatMonthYear } from '../utils/date';
import {
  EVENTO_CATEGORIAS,
  EVENTO_FORMATOS,
  proximosEventos,
  eventosRealizados,
  anosComEventos,
  corDaCategoria,
} from '../data/eventos';

const TODOS = 'Todos';
const TODOS_ANOS = 'Todos os anos';

/** Agrupa por mês preservando a ordem já definida pela aba. */
const agruparPorMes = (eventos) =>
  eventos.reduce((grupos, evento) => {
    const chave = evento.startDate.slice(0, 7);
    const ultimo = grupos[grupos.length - 1];
    if (ultimo?.chave === chave) {
      ultimo.eventos.push(evento);
    } else {
      grupos.push({ chave, rotulo: formatMonthYear(evento.startDate), eventos: [evento] });
    }
    return grupos;
  }, []);

const Tab = ({ ativo, onClick, children, count }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={ativo}
    className={cn(
      'relative inline-flex items-center gap-2 px-5 py-3 text-[11px] font-black uppercase tracking-widest transition-colors',
      ativo ? 'text-white' : 'text-white/40 hover:text-white/70',
    )}
  >
    {children}
    <span className={cn('tabular-nums', ativo ? 'text-un-gold' : 'text-white/25')}>{count}</span>
    {ativo && <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-un-gold" />}
  </button>
);

export const EventosPage = () => {
  const [aba, setAba] = useState('proximos');
  const [categoria, setCategoria] = useState(TODOS);
  const [formato, setFormato] = useState(TODOS);
  const [ano, setAno] = useState(TODOS_ANOS);

  const proximos = useMemo(() => proximosEventos(), []);
  const realizados = useMemo(() => eventosRealizados(), []);
  const anos = useMemo(() => [TODOS_ANOS, ...anosComEventos()], []);

  const base = aba === 'proximos' ? proximos : realizados;

  const filtrados = useMemo(
    () =>
      base.filter(
        (e) =>
          (categoria === TODOS || e.category === categoria) &&
          (formato === TODOS || e.format === formato) &&
          (ano === TODOS_ANOS || e.startDate.startsWith(ano)),
      ),
    [base, categoria, formato, ano],
  );

  const grupos = useMemo(() => agruparPorMes(filtrados), [filtrados]);

  const temFiltro = categoria !== TODOS || formato !== TODOS || ano !== TODOS_ANOS;
  const limpar = () => {
    setCategoria(TODOS);
    setFormato(TODOS);
    setAno(TODOS_ANOS);
  };

  return (
    <div className="animate-fade-in">
      <EditorialHero
        eyebrow="Agenda 2026"
        title="Nossos"
        titleAccent="Eventos"
        lead="Fóruns, workshops e encontros que reúnem as empresas participantes em torno dos Dez Princípios e dos Objetivos de Desenvolvimento Sustentável."
        meta={[
          { value: proximos.length, label: 'Próximos' },
          { value: realizados.length, label: 'Realizados' },
          { value: EVENTO_CATEGORIAS.length - 1, label: 'Temas' },
        ]}
      >
        {/* Abas ancoradas no rodapé do hero */}
        <div className="mt-12 flex items-center gap-2 border-b border-white/15">
          <Tab ativo={aba === 'proximos'} onClick={() => setAba('proximos')} count={proximos.length}>
            Vem aí
          </Tab>
          <Tab
            ativo={aba === 'realizados'}
            onClick={() => setAba('realizados')}
            count={realizados.length}
          >
            Realizados
          </Tab>
        </div>
      </EditorialHero>

      {/* ============ FILTROS ============ */}
      <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/85 backdrop-blur-md">
        <div className="container mx-auto px-4 py-5 md:px-8 lg:px-12">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <FilterPills
              label="Tema"
              options={EVENTO_CATEGORIAS}
              value={categoria}
              onChange={setCategoria}
              accentFor={(opt) => (opt === TODOS ? '#1E3250' : corDaCategoria(opt))}
              countFor={(opt) =>
                opt === TODOS ? base.length : base.filter((e) => e.category === opt).length
              }
              className="min-w-0 flex-1"
            />

            <div className="flex shrink-0 gap-3">
              <FilterSelect
                id="filtro-formato"
                label="Formato"
                options={EVENTO_FORMATOS}
                value={formato}
                onChange={setFormato}
              />
              <FilterSelect
                id="filtro-ano"
                label="Ano"
                options={anos}
                value={ano}
                onChange={setAno}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ LISTAGEM ============ */}
      <section className="bg-un-surface py-14 md:py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          {filtrados.length === 0 ? (
            <EmptyState
              icon={CalendarX}
              title={
                aba === 'proximos'
                  ? 'Nenhum evento programado com esses filtros'
                  : 'Nenhum evento realizado com esses filtros'
              }
              description="Ajuste tema, formato ou ano para ver mais encontros da agenda."
              action={
                temFiltro && (
                  <button
                    type="button"
                    onClick={limpar}
                    className="text-[11px] font-bold uppercase tracking-widest text-un-blue underline underline-offset-4 transition-colors hover:text-un-blue-1"
                  >
                    Limpar filtros
                  </button>
                )
              }
            />
          ) : (
            <>
              <div className="flex flex-col gap-12">
                {grupos.map((grupo, gi) => (
                  <div key={grupo.chave}>
                    {/* Cabeçalho do mês */}
                    <div className="mb-6 flex items-center gap-5">
                      <h2 className="font-display text-xl font-black uppercase tracking-tight text-gray-900 md:text-2xl">
                        {grupo.rotulo}
                      </h2>
                      <span className="h-px flex-1 bg-gray-200" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                        {grupo.eventos.length}{' '}
                        {grupo.eventos.length === 1 ? 'evento' : 'eventos'}
                      </span>
                    </div>

                    <div className="flex flex-col gap-4">
                      {grupo.eventos.map((evento, i) => (
                        <Reveal key={evento.slug} delay={gi === 0 ? i * 70 : 0}>
                          <EventCard evento={evento} />
                        </Reveal>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <ResultCount
                total={filtrados.length}
                singular="evento"
                plural="eventos"
                hasFilters={temFiltro}
                onReset={limpar}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};
