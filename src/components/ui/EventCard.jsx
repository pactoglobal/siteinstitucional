import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const EventCard = ({ event }) => (
  <a href="#" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-un-gold focus-visible:ring-offset-2 outline-none">
    {/* Image */}
    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Card Body */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-un-blue transition-colors">
        {event.title}
      </h3>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
        <Calendar className="w-4 h-4 shrink-0" />
        <span>{event.dateRange}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <MapPin className="w-4 h-4 shrink-0" />
        <span>{event.location}</span>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{event.category}</p>

      {/* Status Badge */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        {event.status === 'upcoming' ? (
          <div className="flex items-center gap-2 text-sm font-semibold text-un-blue">
            <div className="w-4 h-4 rounded border border-un-blue flex items-center justify-center">
              <div className="w-2 h-2 bg-un-blue rounded-sm" />
            </div>
            {event.statusLabel}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-400">
            <div className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-300 rounded-full" />
            </div>
            {event.statusLabel}
          </div>
        )}
      </div>
    </div>
  </a>
);