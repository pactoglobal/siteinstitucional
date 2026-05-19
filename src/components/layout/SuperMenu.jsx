import React, { useState, useEffect } from 'react';
import { Menu, Search, ChevronDown, X } from 'lucide-react';
import { cn } from '../../utils/cn';
import { MENU_DESTAQUES, MENU_EXPLORAR, MENU_PARTICIPAR } from '../../data/constants';
import { Button } from '../ui/Button';
import { SupporterLogos } from '../ui/SupporterLogos';

// --- COMPONENTE: SUPER MENU (Overlay) ---

export const SuperMenu = ({ isOpen, onClose, onRouteChange }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const toggleExpand = (label) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  const handleNav = (id) => {
    if (id && onRouteChange) {
      onRouteChange(id);
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <div className={cn(
      "fixed inset-0 z-[100] bg-un-blue transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col overflow-hidden",
      isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
    )}>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background-color: #CCB146; border-radius: 20px; }
      `}</style>

      <div className="flex justify-between items-center px-4 md:px-8 lg:px-12 py-4 md:py-8 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={() => handleNav('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={`${import.meta.env.BASE_URL}logo-pacto-white.png`} alt="Pacto Global - Rede Brasil" className="h-8 md:h-10 w-auto" />
          </button>
        </div>

        <button onClick={onClose} className="group flex items-center gap-2 md:gap-3 text-white hover:text-un-gold transition-colors">
          <span className="hidden md:block text-xs font-bold uppercase tracking-widest">Fechar</span>
          <div className="p-2 md:p-3 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12">

          <div className="max-w-2xl mb-8 md:mb-12">
            <div className="relative group">
              <Search className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-white/50 group-focus-within:text-un-gold transition-colors" />
              <input
                type="text"
                placeholder="O QUE VOCÊ PROCURA?"
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 md:py-5 pl-12 md:pl-16 pr-6 text-white placeholder-white/30 focus:outline-none focus:border-un-gold focus:bg-white/10 transition-all text-xs md:text-sm lg:text-base uppercase tracking-widest font-bold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 pb-8">
            {[
              { title: "Destaques", items: MENU_DESTAQUES },
              { title: "Explorar", items: MENU_EXPLORAR },
              { title: "Participar", items: MENU_PARTICIPAR }
            ].map((section, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                <h3 className="text-un-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border-b border-white/10 pb-2">{section.title}</h3>
                <div className="flex flex-col gap-y-4 md:gap-y-6">
                  {section.items.map((item) => (
                    <div key={item.label}>
                      {item.subItems ? (
                        <div className="mb-2 md:mb-4">
                          <button
                            onClick={() => toggleExpand(item.label)}
                            className="flex items-center gap-3 text-white hover:text-un-gold font-bold uppercase tracking-wide text-xs md:text-sm lg:text-base py-2 transition-colors w-full text-left"
                          >
                            {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white opacity-80 shrink-0" />}
                            <span className={item.label === 'CoP' ? 'normal-case' : ''}>{item.label}</span>
                            <ChevronDown className={cn("ml-auto w-3 h-3 md:w-4 md:h-4 transition-transform", expandedItem === item.label && "rotate-180")} />
                          </button>
                          <div className={cn("overflow-hidden transition-all duration-300 pl-8 space-y-2", expandedItem === item.label ? "max-h-[500px] pt-4 opacity-100" : "max-h-0 opacity-0")}>
                            {item.subItems.map(sub => (
                              <button key={sub.label} onClick={(e) => { e.preventDefault(); sub.id ? handleNav(sub.id) : onClose(); }} className="block w-full text-left text-un-blue-3 hover:text-white text-[10px] md:text-xs font-medium py-1">
                                {sub.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <button onClick={() => handleNav(item.id)} className="flex items-center gap-3 text-white hover:text-un-gold font-bold uppercase tracking-wide text-xs md:text-sm lg:text-base py-2 transition-colors w-full text-left">
                           {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white opacity-80 shrink-0" />}
                           <span className={item.label === 'CoP' ? 'normal-case' : ''}>{item.label}</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12 border-t border-white/10 bg-un-blue shrink-0">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-6 xl:gap-8">
          <div className="w-full xl:w-auto text-center xl:text-left">
            <Button variant="outline" className="w-full xl:w-auto px-8 py-4 text-xs font-bold border-white/20 text-white hover:bg-white hover:text-un-blue">
              Área do Participante
            </Button>
          </div>
          <SupporterLogos className="opacity-80 scale-90 md:scale-100" />
          <div className="flex gap-6 text-white/40">
            {['LinkedIn', 'Instagram', 'YouTube'].map(s => (
              <a key={s} href="#" className="text-[10px] md:text-xs font-bold uppercase tracking-widest hover:text-un-gold transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};