import React from 'react';
import { Linkedin, Instagram, Youtube, Megaphone } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-un-footer text-white pt-16 md:pt-20 lg:pt-24 border-t border-white/5">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 pb-16 md:pb-24">
      {/* Coluna 1: Logo, Texto e Redes */}
      <div className="flex flex-col space-y-6">
        <img src={`${import.meta.env.BASE_URL}logo-pacto-white.png`} alt="Pacto Global - Rede Brasil" className="h-20 md:h-24 w-auto object-contain object-left" style={{filter: 'brightness(0) invert(1)'}} />
        <p className="text-white/60 max-w-[280px] leading-relaxed text-[13px] font-light">
          Nos ajude a transformar o mundo por meio dos negócios.
        </p>
        <div>
          <h4 className="font-semibold text-white text-sm mb-4 inline-block border-b-2 border-un-footer-accent pb-1.5 pr-8">Nas Redes</h4>
          <div className="flex gap-3 pt-2">
            {[
               { icon: Linkedin, name: 'Linkedin' },
               { icon: Instagram, name: 'Instagram' },
               { icon: Youtube, name: 'Youtube' },
               { icon: () => <span className="text-sm font-black leading-none">X</span>, name: 'X' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-un-footer-accent flex items-center justify-center hover:bg-white hover:text-[#0f2942] transition-all duration-300 cursor-pointer text-white/90 hover:scale-110">
                  <Icon className="w-[18px] h-[18px]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Coluna 2: Links Úteis */}
      <div>
        <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-un-footer-accent pb-1.5 pr-8">Links Úteis</h4>
        <ul className="space-y-4 text-[13px] font-light text-white/60">
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Sobre Nós</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Dez Princípios</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block leading-relaxed">Objetivos de<br/>Desenvolvimento<br/>Sustentável</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Saiba quem já faz parte</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Como aderir</a></li>
          <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Comunicação de Progresso</a></li>
        </ul>
      </div>

      {/* Coluna 3: Oportunidades & Políticas */}
      <div>
        <div className="mb-10">
          <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-un-footer-accent pb-1.5 pr-8">Oportunidades</h4>
          <ul className="space-y-4 text-[13px] font-light text-white/60">
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Trabalhe conosco</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-un-footer-accent pb-1.5 pr-8">Políticas</h4>
          <ul className="space-y-4 text-[13px] font-light text-white/60">
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Política de Cookies</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Política de Privacidade | Landing Pages e E-mails</a></li>
            <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Política de Privacidade | Chatbot</a></li>
          </ul>
        </div>
      </div>

      {/* Coluna 4: Sala de Imprensa */}
      <div>
        <h4 className="font-semibold text-white text-sm mb-6 inline-block border-b-2 border-un-footer-accent pb-1.5 pr-8">Sala de Imprensa</h4>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0f2942] rounded-full px-7 py-3 font-bold uppercase tracking-wider text-xs shadow-lg hover:bg-gray-50 hover:shadow-xl hover:scale-105 transition-all duration-300 mt-2"
        >
          <Megaphone className="w-4 h-4" />
          ACESSE
        </a>
      </div>
    </div>

    {/* Bottom Copyright Bar */}
    <div className="w-full bg-un-footer-accent py-5">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-0 text-[11px] text-white/70 font-medium tracking-wide">
        <span>© 2026 Todos os direitos reservados</span>
        <span className="hidden sm:inline mx-4 text-white/25">|</span>
        <span>Pacto Global - Rede Brasil</span>
      </div>
    </div>
  </footer>
);