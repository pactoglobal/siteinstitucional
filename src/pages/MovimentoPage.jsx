import React from 'react';
import { ArrowLeft, ArrowRight, Check, Target } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { getMovimento, MOVIMENTOS, MODALIDADES } from '../data/ambicao2030';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

const NotFound = ({ navigate }) => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32">
    <h1 className="text-3xl md:text-5xl font-display font-black text-un-blue mb-4">Movimento não encontrado</h1>
    <p className="text-gray-500 mb-8">O Movimento que você procura não existe ou foi movido.</p>
    <Button variant="primary" icon={ArrowLeft} onClick={() => navigate('ambicao')}>
      Ver todos os Movimentos
    </Button>
  </div>
);

export const MovimentoPage = ({ slug, navigate }) => {
  const mov = getMovimento(slug);
  if (!mov) return <NotFound navigate={navigate} />;

  const outros = MOVIMENTOS.filter((m) => m.id !== mov.id).slice(0, 4);

  return (
    <div className="animate-fade-in">
      {/* Hero na cor do Movimento */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" style={{ backgroundColor: mov.color }}>
        <div className="absolute inset-0 z-0">
          <img src={mov.image} alt={mov.name} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${mov.color}cc, ${mov.color})` }} />
        </div>
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <button
            onClick={() => navigate('ambicao')}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[11px] font-bold uppercase tracking-widest mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Ambição 2030
          </button>
          <h1 className="sr-only">{mov.name}</h1>
          <span className="inline-block px-3 py-1 bg-white/15 backdrop-blur-md rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Ambição 2030 · Movimento
          </span>
          <div className="bg-white rounded-3xl px-8 py-10 md:px-12 md:py-12 inline-flex items-center justify-center shadow-2xl mb-8 max-w-full">
            <img
              src={`${import.meta.env.BASE_URL}movimentos/${mov.id}.png`}
              alt={mov.name}
              className="max-h-20 md:max-h-24 w-auto object-contain"
            />
          </div>
          <p className="text-white/90 text-lg md:text-2xl font-light leading-relaxed max-w-3xl">
            {mov.ambicao}
          </p>
        </div>
      </section>

      {/* A Ambição */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-10 rounded-full" style={{ backgroundColor: mov.color }} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">A Ambição</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight leading-[1.2] text-gray-900">
                Onde queremos <span style={{ color: mov.color }}>chegar</span>
              </h2>
            </div>
            <div className="lg:col-span-2 flex flex-col justify-center">
              <Target className="w-8 h-8 mb-5" style={{ color: mov.color }} />
              <p className="text-gray-700 text-lg md:text-2xl leading-relaxed font-light">
                {mov.ambicao}
              </p>
              {mov.ods?.length > 0 && (
                <div className="flex items-center gap-3 mt-8 pt-8 border-t border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">ODS relacionados</span>
                  <div className="flex gap-2">
                    {mov.ods.map((n) => (
                      <span
                        key={n}
                        title={ODS_NAMES[n - 1]}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-black text-sm"
                        style={{ backgroundColor: ODS_COLORS[n - 1] }}
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Compromissos */}
      <section className="py-16 md:py-24 bg-un-surface">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            barColor="bg-un-blue"
            badge="Carta de Compromisso"
            title="Nossos"
            titleAccent="Compromissos"
            description="Metas que as empresas se comprometem a alcançar até 2030 ao assinar a Carta de Compromisso deste Movimento."
          />
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {mov.compromissos.map((c, i) => (
              <div
                key={i}
                className="group flex gap-4 bg-white rounded-2xl p-6 md:p-7 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${mov.color}1A` }}
                >
                  <Check className="w-5 h-5" style={{ color: mov.color }} />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed font-light">
                  {c}
                </p>
              </div>
            ))}
          </div>
          {mov.nota && (
            <p className="text-gray-400 text-xs mt-6 leading-relaxed max-w-3xl italic">{mov.nota}</p>
          )}
        </div>
      </section>

      {/* Modalidades de Engajamento */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <SectionHeader
            barColor="bg-un-green"
            badge="Como participar"
            title="Modalidades de"
            titleAccent="Engajamento"
          />
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {MODALIDADES.map((mod, i) => (
              <div
                key={mod.id}
                className="relative bg-un-surface rounded-3xl p-8 md:p-10 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: mov.color, opacity: i === 0 ? 0.5 : 1 }} />
                <h3 className="font-display font-black text-xl md:text-2xl text-gray-900 tracking-tight mb-3">
                  {mod.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
                  {mod.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + outros movimentos */}
      <section className="py-16 md:py-24" style={{ backgroundColor: mov.color }}>
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tight text-white leading-[1.2] mb-4">
              Comprometa-se com o <span className="text-white/80">{mov.shortName}</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg font-light max-w-2xl mx-auto mb-8">
              Assine a Carta de Compromisso e contribua para uma ambição coletiva rumo a 2030.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-white/40 text-white hover:bg-white hover:!text-gray-900"
                icon={ArrowRight}
                onClick={() => navigate('participar')}
              >
                Quero Aderir
              </Button>
            </div>
          </div>

          <div className="border-t border-white/15 pt-12">
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest text-center mb-6">
              Outros Movimentos
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {outros.map((m) => (
                <button
                  key={m.id}
                  onClick={() => navigate('movimento', m.id)}
                  className="group flex items-center justify-center bg-white hover:shadow-xl rounded-2xl px-5 py-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}movimentos/${m.id}.png`}
                    alt={m.name}
                    className="max-h-9 max-w-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
