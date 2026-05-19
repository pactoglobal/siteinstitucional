import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

const PUBLICACOES = [
  {
    id: 'saude-mental',
    title: 'Guia de Saúde Mental e Futuro do Trabalho',
    category: 'Trabalho',
    lang: 'Português',
    color: '#6E417A',
    cover: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'salario-digno-latam',
    title: 'Salário Digno – Visão da América Latina',
    category: 'Trabalho',
    lang: 'Português',
    color: '#F5A623',
    cover: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'guia-salario-digno',
    title: 'Guia Salário Digno',
    category: 'Trabalho',
    lang: 'Português',
    color: '#297D6D',
    cover: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'jovens-aprendizes',
    title: 'Guia de Inclusão Produtiva de Jovens Aprendizes',
    category: 'Direitos Humanos',
    lang: 'Português',
    color: '#009EDB',
    cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 'devida-diligencia',
    title: 'Guia Prático de Devida Diligência em Direitos Humanos',
    category: 'Direitos Humanos',
    lang: 'Português',
    color: '#EC3740',
    cover: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop',
  },
];

export const PublicacoesSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        barColor="bg-un-gold"
        badge="Publicações e Pesquisas"
        title="Conhecimento"
        titleAccent="em Ação"
        description="Guias, relatórios e pesquisas produzidos pela rede para apoiar empresas na implementação de práticas responsáveis."
        button={
          <Button variant="ghost" className="text-un-blue hover:text-un-blue-1 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
            Ver Todas <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        {PUBLICACOES.map((pub) => (
          <div
            key={pub.id}
            className="group flex flex-col bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-300"
          >
            {/* Cover */}
            <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={pub.cover}
                alt={pub.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: pub.color }}
              >
                {pub.category}
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/70 text-[10px] font-medium">
                <FileText className="w-3 h-3" />
                {pub.lang}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col flex-1 p-4 gap-3">
              <h3 className="text-gray-900 font-display font-black text-sm leading-tight tracking-tight flex-1">
                {pub.title}
              </h3>
              <a
                href="#"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 mt-auto"
                style={{ color: pub.color }}
              >
                Documento Completo <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
