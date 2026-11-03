import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { EventCard } from '../ui/EventCard';
import { EmptyState } from '../ui/EmptyState';
import { proximosEventos, eventosRealizados } from '../../data/eventos';
import { cn } from '../../utils/cn';

const NA_HOME = 4;

/**
 * Vitrine da agenda na home. As abas filtram de verdade — a agenda
 * completa, com tema/formato/ano, vive em `EventosPage`.
 */
export const EventsListSection = ({ navigate }) => {
  const [aba, setAba] = React.useState('proximos');

  const proximos = React.useMemo(() => proximosEventos(), []);
  const realizados = React.useMemo(() => eventosRealizados(), []);

  const lista = (aba === 'proximos' ? proximos : realizados).slice(0, NA_HOME);

  const tabClass = (ativo) =>
    cn(
      'text-[10px] font-black uppercase tracking-widest transition-all',
      ativo ? 'text-un-blue' : 'text-gray-400 hover:text-gray-600',
    );

  return (
    <section className="bg-[#F4F6F9] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <SectionHeader
          badge="Agenda 2026"
          title="Nossos"
          titleAccent="Eventos e Fóruns"
          description="Participe das discussões que moldam o futuro. Selecione entre os próximos eventos ou visualize nossa cronologia completa de encontros realizados."
          button={
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-un-blue hover:text-un-blue-1"
              onClick={() => navigate?.('eventos')}
            >
              Ver Todos <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          }
        />

        {/* Abas */}
        <div className="mb-8 flex items-center">
          <div className="flex items-center gap-4 rounded-full bg-gray-100 p-1.5 px-4">
            <button type="button" onClick={() => setAba('proximos')} className={tabClass(aba === 'proximos')}>
              Vem aí
            </button>
            <div className="h-3 w-px bg-gray-300" />
            <button
              type="button"
              onClick={() => setAba('realizados')}
              className={tabClass(aba === 'realizados')}
            >
              Anteriores
            </button>
          </div>
        </div>

        {lista.length === 0 ? (
          <EmptyState
            title={aba === 'proximos' ? 'Nenhum evento programado' : 'Nenhum evento realizado'}
            description="Acompanhe a agenda completa para novidades."
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {lista.map((evento) => (
              <EventCard key={evento.slug} evento={evento} variant="tile" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
