import React from 'react';

const SPONSORS = [
  { name: 'Aegea', style: 'font-serif italic font-bold' },
  { name: 'MRV', style: 'font-black tracking-tighter' },
  { name: 'Schneider Electric', style: 'font-bold uppercase text-[10px] tracking-tight' },
  { name: 'Itaú', style: 'font-black tracking-tight' },
  { name: 'Natura', style: 'font-bold tracking-widest uppercase' },
  { name: 'Bradesco', style: 'font-bold' },
  { name: 'Vale', style: 'font-black uppercase tracking-widest' },
  { name: 'Ambev', style: 'font-bold tracking-tight' },
];

const TickerItem = ({ sponsor }) => (
  <span className="flex items-center gap-6 shrink-0">
    <span className={`text-white/70 hover:text-white transition-colors text-[11px] ${sponsor.style}`}>
      {sponsor.name}
    </span>
    <span className="w-1 h-1 rounded-full bg-white/20" />
  </span>
);

export const SponsorsTicker = () => (
  <div className="bg-un-blue border-b border-white/10 h-8 flex items-center overflow-hidden">
    <div className="shrink-0 px-4 border-r border-white/10 h-full flex items-center">
      <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 whitespace-nowrap font-bold">
        Apoiadores
      </span>
    </div>

    <div className="flex-1 overflow-hidden relative">
      <div className="flex animate-ticker">
        {[...SPONSORS, ...SPONSORS].map((sponsor, i) => (
          <TickerItem key={i} sponsor={sponsor} />
        ))}
      </div>
    </div>
  </div>
);
