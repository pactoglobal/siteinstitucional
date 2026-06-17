import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { EventCard } from '../ui/EventCard';
import { MOCK_EVENTS } from '../../data/constants';

export const EventsListSection = ({ navigate }) => {
  const [activeTab, setActiveTab] = React.useState('upcoming');
  return (
  <section className="py-12 md:py-16 bg-[#F4F6F9]">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        barColor="bg-un-gold"
        badge="Agenda 2026"
        title="Nossos"
        titleAccent="Eventos e Fóruns"
        description="Participe das discussões que moldam o futuro. Selecione entre os próximos eventos ou visualize nossa cronologia completa de encontros realizados."
        button={
          <Button
            variant="ghost"
            className="font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 text-un-blue hover:text-un-blue-1"
            onClick={() => navigate && navigate('eventos')}
          >
            Ver Todos <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        }
      />

      {/* Tabs */}
      <div className="flex items-center mb-8">
        <div className="flex items-center gap-4 bg-gray-100 p-1.5 rounded-full px-4">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`text-[10px] uppercase tracking-widest font-black transition-all ${activeTab === 'upcoming' ? 'text-un-blue' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Vem aí
          </button>
          <div className="w-px h-3 bg-gray-300"></div>
          <button
            onClick={() => setActiveTab('past')}
            className={`text-[10px] uppercase tracking-widest font-black transition-all ${activeTab === 'past' ? 'text-un-blue' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Anteriores
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {MOCK_EVENTS.map(evt => (
          <EventCard key={evt.id} event={evt} />
        ))}
      </div>
    </div>
  </section>
  );
};