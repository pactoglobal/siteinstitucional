import React from 'react';
import {
  Target,
  Compass,
  TrendingUp,
  BookOpen,
  BarChart3,
  Globe,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Leaf,
  Users,
  ShieldCheck,
  Building2,
  LineChart,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import {
  ESG_DEFINICAO,
  ESG_ODS_CONEXAO,
  FERRAMENTAS_ESG,
  METAS_AMBICAO_ODS,
  MERCADO_ESG,
  ESG_CTA,
  ODS_LIST,
} from '../data/esgOds';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

// Ícones para os pilares ESG
const PILLAR_ICONS = {
  E: Globe,
  S: Users,
  G: ShieldCheck,
};

export const ESGODSPage = () => (
  <div className="animate-fade-in bg-un-surface min-h-screen">
    {/* 1. HERO EDITORIAL */}
    <PageHero
      category="Estratégia Empresarial ESG"
      title="ESG e ODS"
      description="Entenda o significado da sigla ESG (Ambiental, Social e Governança), sua conexão com os Objetivos de Desenvolvimento Sustentável e como o Pacto Global auxilia sua empresa a integrar esses princípios no dia a dia dos negócios."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      color="bg-un-blue"
    />

    {/* 2. O QUE É ESG - DEFINIÇÃO E PILARES */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Fundamentos"
          title={ESG_DEFINICAO.titulo}
          description={ESG_DEFINICAO.descricao}
          className="mb-12"
        />

        {/* Grid dos 3 pilares ESG */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ESG_DEFINICAO.pilares.map((pilar) => {
            const IconComponent = PILLAR_ICONS[pilar.letra];
            return (
              <div
                key={pilar.letra}
                className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-un-blue/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-un-blue/5 text-un-blue flex items-center justify-center shrink-0 group-hover:bg-un-blue group-hover:text-white transition-colors">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-3xl font-display font-black text-un-blue">{pilar.letra}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-2">{pilar.nome}</span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight mb-3">
                  {pilar.nome.split(' ')[0]}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{pilar.descricao}</p>
              </div>
            );
          })}
        </div>

        {/* Origem do termo */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-blue/5 border border-un-blue/10">
          <h4 className="text-lg font-display font-bold text-un-blue uppercase tracking-tight mb-3">
            Origem do termo ESG
          </h4>
          <p className="text-slate-700 leading-relaxed">
            O termo foi cunhado em <strong>2004</strong> em uma publicação do Pacto Global em parceria com o Banco Mundial, chamada
            <em>Who Cares Wins</em>. Surgiu de uma provocação do secretário-geral da ONU <strong>Kofi Annan</strong> a 50 CEOs de
            grandes instituições financeiras, sobre como integrar fatores sociais, ambientais e de governança no mercado de capitais.
          </p>
        </div>
      </div>
    </section>

    {/* 3. CONEXÃO ESG ↔ ODS */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              badge="Conexão Estratégica"
              title={ESG_ODS_CONEXAO.titulo}
              description={ESG_ODS_CONEXAO.descricao}
              className="mb-8"
            />
            <p className="text-slate-600 leading-relaxed mb-6">{ESG_ODS_CONEXAO.textoApoio}</p>
            <div className="flex flex-wrap gap-3">
              {['Ambiental', 'Social', 'Governança'].map((tema) => (
                <span
                  key={tema}
                  className="px-4 py-2 bg-white border border-un-blue/20 text-un-blue text-sm font-medium rounded-full"
                >
                  {tema}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="esgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E3250" />
                    <stop offset="100%" stopColor="#297D6D" />
                  </linearGradient>
                </defs>
                {/* Círculo externo ODS */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="10,10" />
                {/* 3 arcos ESG */}
                <path
                  d="M200 200 L200 20 A180 180 0 0 1 355.88 200 Z"
                  fill="url(#esgGrad)"
                  fillOpacity="0.15"
                />
                <path
                  d="M200 200 L355.88 200 A180 180 0 0 1 20 200 Z"
                  fill="#297D6D"
                  fillOpacity="0.15"
                />
                <path
                  d="M200 200 L20 200 A180 180 0 0 1 200 20 Z"
                  fill="#6E417A"
                  fillOpacity="0.15"
                />
                {/* Labels */}
                <text x="200" y="60" textAnchor="middle" className="text-xs font-bold fill-un-blue uppercase tracking-wider">Environmental</text>
                <text x="370" y="210" textAnchor="middle" className="text-xs font-bold fill-un-green uppercase tracking-wider" transform="rotate(90 370 210)">Social</text>
                <text x="200" y="370" textAnchor="middle" className="text-xs font-bold fill-un-purple uppercase tracking-wider">Governance</text>
                <text x="200" y="200" textAnchor="middle" dominantBaseline="middle" className="text-2xl font-display font-black fill-un-blue">ODS</text>
                <text x="200" y="225" textAnchor="middle" dominantBaseline="middle" className="text-xs font-medium fill-slate-500">17 + 1</text>
              </svg>
            </div>
            <p className="text-center text-xs text-slate-500 mt-4 max-w-md mx-auto">
              Os 3 pilares ESG cobrem transversalmente os 17 ODS + ODS 18 (Igualdade Étnico-Racial, proposição brasileira)
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* 4. GRADE DOS 18 ODS */}
    <section id="ods" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Agenda 2030"
          title="Os 18 Objetivos de Desenvolvimento Sustentável"
          titleAccent="Referência para toda estratégia ESG"
          description="Os ODS reúnem os grandes desafios e vulnerabilidades da sociedade. Apontam os principais itens a serem acompanhados de perto por empresas que querem estar em conformidade com práticas ESG."
          className="mb-10"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
          {ODS_LIST.map((ods) => (
            <button
              key={ods.id}
              type="button"
              className={cn(
                "relative aspect-square min-h-[100px] rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 group",
                "border-2",
                `border-[${ods.color}]`,
                "bg-white",
                "hover:shadow-lg",
                "hover:-translate-y-1"
              )}
              style={{ borderColor: ods.color }}
            >
              <span
                className="text-2xl sm:text-3xl font-display font-black mb-1"
                style={{ color: ods.color }}
              >
                {ods.id}
              </span>
              <span className="text-[10px] sm:text-xs font-medium leading-snug text-slate-700 group-hover:text-slate-900">
                {ods.name}
              </span>
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: ods.color }}
              />
            </button>
          ))}
        </div>

        {/* Destaque ODS 18 */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-purple/5 border border-un-purple/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-un-purple/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-un-purple/10 flex items-center justify-center shrink-0">
                <span className="text-2xl font-display font-black" style={{ color: ODS_COLORS[17] }}>18</span>
              </div>
              <div>
                <h4 className="text-xl font-display font-bold text-un-purple uppercase tracking-tight">
                  ODS 18 — Igualdade Étnico-Racial
                </h4>
                <p className="text-sm text-slate-600">Proposição brasileira, implementada pelo Pacto Global em 2025</p>
              </div>
            </div>
            <Button variant="outline" className="shrink-0 border-un-purple text-un-purple hover:bg-un-purple hover:text-white">
              <ExternalLink className="w-3.5 h-3.5 mr-2" /> Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* 5. FERRAMENTAS PRÁTICAS */}
    <section className="py-12 md:py-20 bg-un-surface">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Ferramentas do Pacto Global"
          title="Como Implementar ESG e ODS na Prática"
          description="Duas ferramentas principais do Pacto Global para que sua organização integre os ODS no dia a dia das operações e estabeleça metas compatíveis com padrões globais."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {FERRAMENTAS_ESG.map((ferramenta, idx) => (
            <div
              key={ferramenta.id}
              className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={ferramenta.imagem}
                  className="w-full h-48 object-cover opacity-15"
                  alt={ferramenta.titulo}
                />
              </div>
              <div className="relative z-10 p-6 sm:p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold bg-white/90 px-3 py-1 rounded-full border border-un-gold/30 inline-block mb-4">
                  {idx === 0 ? 'Guia Metodológico' : 'Programa de Aceleração'}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 uppercase tracking-tight mb-2">
                  {ferramenta.titulo}
                </h3>
                <p className="text-sm text-slate-500 mb-3">{ferramenta.subtitulo}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{ferramenta.descricao}</p>

                {ferramenta.passos && (
                  <div className="space-y-3 mb-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">Passos do {ferramenta.titulo}:</h5>
                    <ol className="space-y-2">
                      {ferramenta.passos.map((passo, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2 text-sm text-slate-700">
                          <span
                            className="w-5 h-5 rounded-full bg-un-blue/10 text-un-blue text-[10px] font-bold flex items-center justify-center shrink-0"
                          >
                            {pIdx + 1}
                          </span>
                          {passo}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {ferramenta.beneficios && (
                  <div className="space-y-3 mb-6">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">Benefícios:</h5>
                    <ul className="space-y-2">
                      {ferramenta.beneficios.map((beneficio, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-un-green shrink-0" />
                          {beneficio}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {ferramenta.links?.map((link, lIdx) => (
                    <Button
                      key={lIdx}
                      variant="ghost"
                      size="sm"
                      className="text-un-blue hover:text-un-gold border-b border-un-blue/30 hover:border-un-gold px-0"
                    >
                      {link.label} <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  ))}
                  {ferramenta.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-un-blue hover:text-un-gold border-b border-un-blue/30 hover:border-un-gold px-0"
                    >
                      {ferramenta.link.label} <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. METAS DA AMBIÇÃO PELOS ODS */}
    <section className="py-12 md:py-20 bg-white border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Metas Transformadoras"
          title="Exemplos de Metas do Programa Ambição pelos ODS"
          description="As metas visam traduzir os ODS para os negócios, com foco em ampliar o impacto das empresas em desafios globais. O programa permite ir além do progresso incremental e intensificar a mudança transformadora."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {METAS_AMBICAO_ODS.map((meta) => (
            <div
              key={meta.ods}
              className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-gold/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-display font-black text-lg"
                  style={{ backgroundColor: ODS_COLORS[meta.ods - 1] }}
                >
                  {meta.ods}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">ODS {meta.ods}</span>
              </div>
              <h4 className="text-lg font-display font-bold text-slate-900 uppercase tracking-tight mb-3">
                {meta.titulo}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">{meta.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 7. MERCADO ESG - ESTATÍSTICAS E CASOS */}
    <section className="py-12 md:py-20 bg-un-blue text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-un-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl relative z-10">
        <SectionHeader
          badge="Evidência de Mercado"
          title={MERCADO_ESG.titulo}
          titleAccent="Dados que comprovam o retorno do investimento em ESG"
          description={MERCADO_ESG.intro}
          inverted
          className="mb-12"
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {MERCADO_ESG.estatisticas.map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/5 border border-white/10 rounded-2xl">
              <div className="text-3xl sm:text-4xl font-display font-black text-un-gold mb-2">{stat.valor}</div>
              <div className="text-xs sm:text-sm font-medium text-white mb-1">{stat.rotulo}</div>
              <div className="text-[10px] text-slate-400">Fonte: {stat.fonte}</div>
            </div>
          ))}
        </div>

        {/* Cases */}
        <div className="grid md:grid-cols-3 gap-6">
          {MERCADO_ESG.casos.map((caso, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-un-gold/20 text-un-gold flex items-center justify-center shrink-0">
                  <LineChart className="w-5 h-5" />
                </div>
                <h5 className="text-lg font-display font-bold text-white">{caso.nome}</h5>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{caso.descricao}</p>
              <Button
                variant="ghost"
                size="sm"
                className="text-un-gold hover:text-white border-b border-un-gold/30 hover:border-white px-0"
              >
                {caso.link.label} <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 8. CTA FINAL */}
    <section className="py-12 md:py-20 bg-un-surface">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <div className="rounded-3xl p-8 sm:p-12 bg-un-blue text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-un-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-un-gold/20 border border-un-gold/30 text-un-gold text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
              Próximos Passos
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight mb-4">
              {ESG_CTA.titulo}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              {ESG_CTA.descricao}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {ESG_CTA.botoes.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant === 'primary' ? 'default' : 'outline'}
                  size="lg"
                  className={cn(
                    "min-h-[52px] px-8",
                    btn.variant === 'primary'
                      ? "bg-un-gold text-un-blue hover:bg-white"
                      : "border-white/30 text-white hover:bg-white/10"
                  )}
                  onClick={() => (window.location.hash = btn.href.replace('#', ''))}
                >
                  {btn.label}
                  {btn.variant === 'primary' && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);