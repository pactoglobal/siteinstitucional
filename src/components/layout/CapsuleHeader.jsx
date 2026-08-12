import React, { useState, useEffect } from 'react';
import { Menu, Search, ChevronDown, User } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { SuperMenu } from './SuperMenu';
import { HEADER_PROGRAMAS, HEADER_CONHECIMENTO } from '../../data/constants';
import { getMovimento } from '../../data/ambicao2030';

// --- COMPONENTE: CAPSULE HEADER (RED BULL STYLE) ---

export const CapsuleHeader = ({ onRouteChange, currentRoute, routeParam }) => {
  const [scrolled, setScrolled] = useState(false);
  const [superMenuOpen, setSuperMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mov = currentRoute === 'movimento' && routeParam ? getMovimento(routeParam) : null;

  return (
    <>
      <SuperMenu isOpen={superMenuOpen} onClose={() => setSuperMenuOpen(false)} onRouteChange={onRouteChange} />

      <header
        className={cn(
          'fixed w-full z-50 transition-all duration-500',
          scrolled ? 'py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]' : 'bg-transparent py-5',
        )}
        style={{
          backgroundColor: scrolled ? (mov ? mov.color : '#002B49') : 'transparent',
        }}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
          
          {/* Logo e Menu Esquerda */}
          <div className="flex items-center gap-4 md:gap-6 w-1/4 xl:w-1/4">
            <button
              onClick={() => setSuperMenuOpen(true)}
              className="text-white hover:text-un-gold transition-colors p-2 flex items-center gap-2"
            >
              <Menu className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button onClick={() => onRouteChange && onRouteChange('home')} className="hidden sm:flex items-center group hover:opacity-80 transition-opacity">
              <img src={`${import.meta.env.BASE_URL}logo-pacto-white.png`} alt="Pacto Global - Rede Brasil" className="h-7 md:h-9 w-auto" />
            </button>
          </div>

          {/* Pílula Central (Menu Rápido) */}
          <div className="hidden lg:flex w-1/2 xl:w-2/4 justify-center">
            <nav
              className={cn(
                'flex items-center gap-4 xl:gap-6 backdrop-blur-md rounded-full px-6 xl:px-8 py-2.5 transition-all duration-300 shadow-xl',
                mov
                  ? 'border border-white shadow-black/20'
                  : 'bg-un-blue/60 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]',
              )}
              style={mov ? { backgroundColor: mov.color } : undefined}
            >
              {/* Links Simples */}
              <button 
                onClick={() => onRouteChange && onRouteChange('sobre')} 
                className={`text-white hover:opacity-80 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${currentRoute === 'sobre' ? 'underline decoration-2' : ''}`}
              >
                Sobre Nós
              </button>
              
              <button 
                onClick={() => onRouteChange && onRouteChange('ambicao')} 
                className={`text-white hover:opacity-80 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${currentRoute === 'ambicao' ? 'underline decoration-2' : ''}`}
              >
                Ambição 2030
              </button>
              
              {/* Dropdown Programas */}
              <div className="relative group">
                <button 
                  onClick={() => onRouteChange && onRouteChange('programas')}
                  className={`flex items-center gap-1 text-white group-hover:opacity-80 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors py-1.5 whitespace-nowrap ${currentRoute === 'programas' ? 'underline decoration-2' : ''}`}
                >
                  Programas <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-un-blue backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="py-3 flex flex-col">
                        {HEADER_PROGRAMAS.map(sub => (
                          <button key={sub} onClick={() => onRouteChange && onRouteChange('programas')} className="text-left px-5 py-3 text-[10px] xl:text-[11px] text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest font-bold whitespace-nowrap">
                            {sub}
                          </button>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Dropdown Conhecimento */}
              <div className="relative group">
                <button 
                  onClick={() => onRouteChange && onRouteChange('conhecimento')}
                  className={`flex items-center gap-1 text-white group-hover:opacity-80 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors py-1.5 whitespace-nowrap ${currentRoute === 'conhecimento' ? 'underline decoration-2' : ''}`}
                >
                  Conhecimento <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-un-blue backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                     <div className="py-3 flex flex-col">
                        {HEADER_CONHECIMENTO.map(sub => (
                          <button key={sub} onClick={() => onRouteChange && onRouteChange('conhecimento')} className="text-left px-5 py-3 text-[10px] xl:text-[11px] text-white/70 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest font-bold whitespace-nowrap">
                            {sub}
                          </button>
                        ))}
                     </div>
                  </div>
                </div>
              </div>

              {/* Links Simples */}
              {[{label: 'Eventos', route: 'eventos'}, {label: 'Notícias', route: 'noticias'}].map(item => (
                <button
                  key={item.label}
                  onClick={() => onRouteChange && onRouteChange(item.route)}
                  className={`text-white hover:opacity-80 text-[10px] xl:text-[11px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${currentRoute === item.route ? 'underline decoration-2' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Ferramentas Direita */}
          <div className="flex items-center justify-end gap-2 md:gap-4 w-1/4 xl:w-1/4">
            <button onClick={() => setSuperMenuOpen(true)} className="text-white hover:opacity-80 transition-colors p-2" title="Buscar">
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button className="text-white hover:opacity-80 transition-colors p-2" title="Área do Participante">
              <User className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            {mov ? (
              <button
                onClick={() => onRouteChange && onRouteChange('participar')}
                className="hidden md:flex items-center justify-center text-[10px] xl:text-[11px] font-black uppercase tracking-wider px-5 py-2.5 rounded-full bg-white shadow-lg hover:scale-105 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
                style={{ color: mov.color }}
              >
                Quero Aderir
              </button>
            ) : (
              <Button
                variant="primary"
                onClick={() => onRouteChange && onRouteChange('participar')}
                className="hidden md:flex text-[9px] px-4 py-2 bg-un-gold hover:bg-un-gold/80 text-un-blue whitespace-nowrap"
              >
                Quero Aderir
              </Button>
            )}
          </div>

        </div>
      </header>
    </>
  );
};