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
  Scale,
  Gavel,
  FileText,
  Brain,
  GraduationCap,
  Briefcase,
  Heart,
  HandHeart,
  Clock,
  Flag,
  Award,
  AlertTriangle,
  Zap,
  Recycle,
  Droplets,
  TreePine,
  Factory,
  Wind,
  SolarPanel,
  Landmark,
  Handshake,
  Stethoscope,
  PiggyBank,
  Eye,
  Network,
  MapPin,
  Calculator,
  PieChart,
  Shield,
  Lock,
  Unlock,
  Key,
  Diamond,
  Star,
  Medal,
  Trophy,
  Crown,
  Gem,
  Sparkles,
  Sun,
  Moon,
  Cloud,
  Snowflake,
  Flame,
  Mountain,
  TreeDeciduous,
  Building,
  Ship,
  Plane,
  Train,
  Car,
  Bike,
  Accessibility,
  Languages,
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Keyboard,
  Mouse,
  Printer,
  Camera,
  Mic,
  Speaker,
  Headphones,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  FastForward,
  Rewind,
  Shuffle,
  Repeat,
  Bookmark,
  Tag,
  Navigation,
  Anchor,
  Aperture,
  Crop,
  RotateCcw,
  RotateCw,
  FlipHorizontal,
  FlipVertical,
  ZoomIn,
  ZoomOut,
  Minimize2,
  Maximize2,
  Fullscreen,
  Minimize,
  Expand,
  Move,
  Lasso,
  PenTool,
  Brush,
  Eraser,
  PaintBucket,
  Type,
  Text,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Code2,
  Terminal,
  Hash,
  GitBranch,
  GitCommit,
  GitMerge,
  GitPullRequest,
  GitCompare,
  Github,
  Gitlab,
} from 'lucide-react';
import { PageHero } from '../components/ui/PageHero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';
import {
  FUNDAMENTACAO_CONCEITUAL,
  ESG_TIMELINE,
  ODS_TIMELINE,
  ESG_DEFINICAO_DETALHADA,
  ESG_ODS_CONEXAO,
  MOVIMENTOS_AMBICAO_2030,
  CONTEXTO_REGULATORIO,
  CASOS_INSPIRADORES,
  FERRAMENTAS_ESG,
  METAS_AMBICAO_ODS,
  MERCADO_ESG,
  POR_QUE_ADERIR_MOVIMENTOS,
  ESG_CTA,
  ODS_LIST,
} from '../data/esgOds';
import { ODS_COLORS, ODS_NAMES } from '../data/constants';

// Mapa de ícones para timeline - apenas ícones importados
const TIMELINE_ICONS = {
  Globe: Globe,
  Users: Users,
  Target: Target,
  FileText: FileText,
  TrendingUp: TrendingUp,
  Scale: Scale,
  Gavel: Gavel,
  Clock: Clock,
  Flag: Flag,
  Award: Award,
  AlertTriangle: AlertTriangle,
  BarChart3: BarChart3,
  Zap: Zap,
  Recycle: Recycle,
  Droplets: Droplets,
  TreePine: TreePine,
  Factory: Factory,
  Wind: Wind,
  SolarPanel: SolarPanel,
  Landmark: Landmark,
  Handshake: Handshake,
  Stethoscope: Stethoscope,
  PiggyBank: PiggyBank,
  Eye: Eye,
  Network: Network,
  MapPin: MapPin,
  Calculator: Calculator,
  PieChart: PieChart,
  Shield: Shield,
  Lock: Lock,
  Unlock: Unlock,
  Key: Key,
  Diamond: Diamond,
  Star: Star,
  Medal: Medal,
  Trophy: Trophy,
  Crown: Crown,
  Gem: Gem,
  Sparkles: Sparkles,
  Sun: Sun,
  Moon: Moon,
  Cloud: Cloud,
  Snowflake: Snowflake,
  Flame: Flame,
  Mountain: Mountain,
  TreeDeciduous: TreeDeciduous,
  Building: Building,
  Ship: Ship,
  Plane: Plane,
  Train: Train,
  Car: Car,
  Bike: Bike,
  Accessibility: Accessibility,
  Languages: Languages,
  Smartphone: Smartphone,
  Tablet: Tablet,
  Laptop: Laptop,
  Monitor: Monitor,
  Keyboard: Keyboard,
  Mouse: Mouse,
  Printer: Printer,
  Camera: Camera,
  Mic: Mic,
  Speaker: Speaker,
  Headphones: Headphones,
  Volume2: Volume2,
  VolumeX: VolumeX,
  Play: Play,
  Pause: Pause,
  SkipForward: SkipForward,
  SkipBack: SkipBack,
  FastForward: FastForward,
  Rewind: Rewind,
  Shuffle: Shuffle,
  Repeat: Repeat,
  Bookmark: Bookmark,
  Tag: Tag,
  Navigation: Navigation,
  Anchor: Anchor,
  Aperture: Aperture,
  Crop: Crop,
  RotateCcw: RotateCcw,
  RotateCw: RotateCw,
  FlipHorizontal: FlipHorizontal,
  FlipVertical: FlipVertical,
  ZoomIn: ZoomIn,
  ZoomOut: ZoomOut,
  Minimize2: Minimize2,
  Maximize2: Maximize2,
  Fullscreen: Fullscreen,
  Minimize: Minimize,
  Expand: Expand,
  Move: Move,
  Lasso: Lasso,
  PenTool: PenTool,
  Brush: Brush,
  Eraser: Eraser,
  PaintBucket: PaintBucket,
  Type: Type,
  Text: Text,
  Bold: Bold,
  Italic: Italic,
  Underline: Underline,
  Strikethrough: Strikethrough,
  Code: Code,
  Code2: Code2,
  Terminal: Terminal,
  Hash: Hash,
  GitBranch: GitBranch,
  GitCommit: GitCommit,
  GitMerge: GitMerge,
  GitPullRequest: GitPullRequest,
  GitCompare: GitCompare,
  Github: Github,
  Gitlab: Gitlab,
};

// Ícones para os pilares ESG
const PILLAR_ICONS = {
  E: Globe,
  S: Users,
  G: ShieldCheck,
};

// Componente de Timeline vertical
const Timeline = ({ items, title, color = 'un-blue' }) => (
  <section className="py-12 md:py-20 bg-white border-y border-slate-200/80">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
      <SectionHeader
        badge="Linha do Tempo"
        title={title}
        className="mb-12 text-center"
      />
      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b" style={{ backgroundColor: `var(--${color})` }} />
        {items.map((item, idx) => {
          const IconComponent = TIMELINE_ICONS[item.icone] || Target;
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={item.ano}
              className={`flex items-start gap-6 mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={`w-1/2 md:w-5/12 ${isLeft ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                <div className={`relative ${isLeft ? 'md:mr-16' : 'md:ml-16'}`}>
                  <div className="absolute right-0 top-4 w-4 h-4 rounded-full border-4 border-white z-10" style={{ backgroundColor: `var(--${color})`, borderColor: `var(--${color})` }} />
                  <div className={`bg-white p-6 rounded-2xl shadow-lg border ${isLeft ? 'border-r-4' : 'border-l-4'} transition-all hover:shadow-xl`} style={{ borderColor: `var(--${color})` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: `var(--${color})` }}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-lg font-display font-black text-slate-900">{item.ano}</span>
                    </div>
                    <h4 className="text-lg font-display font-bold text-slate-900 mb-2">{item.titulo || item.evento}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.descricao}</p>
                    {item.destaque && (
                      <span className="inline-block mt-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full" style={{ backgroundColor: `var(--${color})`, color: 'white' }}>
                        Marco Principal
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

// Componente de card de pilar ESG expandido
const ESGPillarCard = ({ pilar }) => {
  const IconComponent = PILLAR_ICONS[pilar.letra];
  return (
    <div className="group relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 hover:border-un-blue/50 hover:shadow-xl transition-all duration-500 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${pilar.cor}15, ${pilar.cor}05)` }} />
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white group-hover:scale-110 transition-transform" style={{ backgroundColor: pilar.cor }}>
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <span className="text-4xl font-display font-black" style={{ color: pilar.cor }}>{pilar.letra}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 ml-3 block mt-1">{pilar.nome}</span>
          </div>
        </div>
        <h3 className="text-xl font-display font-black text-slate-900 uppercase tracking-tight mb-4">
          {pilar.nome.split(' ')[0]}
        </h3>
        <div className="space-y-3 mb-6">
          {pilar.subtemas.map((subtema, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: pilar.cor }} />
              <span>{subtema}</span>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-slate-100">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Métricas-chave:</span>
          <p className="text-sm text-slate-600 mt-1 font-mono">{pilar.metricas_chave}</p>
        </div>
      </div>
    </div>
  );
};

// Componente de card de Movimento com logo
const MovementCard = ({ mov }) => (
  <article className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-gold/40 hover:shadow-xl transition-all duration-500 overflow-hidden">
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-un-gold/10 to-transparent" />
    <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
        <img
          src={mov.logo}
          alt={mov.movimento}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-display font-black text-lg" style={{ backgroundColor: ODS_COLORS[mov.ods - 1] }}>
            {mov.ods}
          </span>
          {mov.odsExtra && (
            <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-display font-black text-lg" style={{ backgroundColor: ODS_COLORS[mov.odsExtra - 1] }}>
              {mov.odsExtra}
            </span>
          )}
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hidden sm:block">
            {mov.pilarNome} — ODS {mov.ods}{mov.odsExtra ? ` + ${mov.odsExtra}` : ''}
          </span>
        </div>
        <h4 className="text-lg font-display font-bold text-slate-900 uppercase tracking-tight mb-2">{mov.movimento}</h4>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">{mov.descricao}</p>
        <p className="text-xs text-slate-500 font-medium mb-3">Metas: {mov.metas}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {mov.pilares_mov?.slice(0, 3).map((p, idx) => (
            <span key={idx} className="px-3 py-1 text-[10px] font-medium rounded-full bg-slate-100 text-slate-700">{p.titulo}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <Building2 className="w-4 h-4" />
          <span>{mov.empresas}+ empresas signatárias</span>
        </div>
      </div>
      <div className="shrink-0">
        <Button
          variant="ghost"
          size="sm"
          className="text-un-blue hover:text-un-gold border-b border-un-blue/30 hover:border-un-gold px-0"
        >
          Ver detalhes <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </Button>
      </div>
    </div>
  </article>
);

// Infográfico de conexão ESG-ODS
const ESGODSMatrix = () => (
  <div className="rounded-3xl p-8 bg-white border border-slate-200/90 overflow-hidden">
    <h4 className="text-lg font-display font-bold text-slate-900 uppercase tracking-tight mb-6 text-center">Matriz de Conexão: Pilares ESG ↔ ODS</h4>
    <div className="grid md:grid-cols-3 gap-6">
      {ESG_ODS_CONEXAO.matriz.map((item, idx) => {
        const pilarColors = { E: '#297D6D', S: '#1E3250', G: '#6E417A' };
        const pilarNames = { E: 'Ambiental (E)', S: 'Social (S)', G: 'Governança (G)' };
        return (
          <div key={idx} className="relative rounded-2xl p-6 border-2" style={{ backgroundColor: `${pilarColors[item.pilar]}10`, borderColor: `${pilarColors[item.pilar]}30` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-black text-xl" style={{ backgroundColor: pilarColors[item.pilar] }}>
                {item.pilar}
              </div>
              <h5 className="font-display font-bold text-slate-900">{pilarNames[item.pilar]}</h5>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.ods.map((odsNum) => (
                <span
                  key={odsNum}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-display font-black text-sm"
                  style={{ backgroundColor: ODS_COLORS[odsNum - 1] }}
                >
                  {odsNum}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-600">{item.descricao}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export const ESGODSPage = () => (
  <div className="animate-fade-in bg-un-surface min-h-screen">
    {/* 1. HERO EDITORIAL */}
    <PageHero
      category="Estratégia Empresarial ESG"
      title="ESG e ODS"
      description="Entenda o significado da sigla ESG (Ambiental, Social e Governança), sua conexão indissociável com os Objetivos de Desenvolvimento Sustentável, a linha do tempo histórica, o contexto regulatório brasileiro e como o Pacto Global auxilia sua empresa a transformar compromissos em impacto real e auditável."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      color="bg-un-blue"
    />

    {/* 2. FUNDAMENTAÇÃO CONCEITUAL: ODS vs ESG */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Fundamentação Conceitual"
          title={FUNDAMENTACAO_CONCEITUAL.titulo}
          description={FUNDAMENTACAO_CONCEITUAL.intro}
          className="mb-12"
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* ODS */}
          <article className="rounded-3xl p-6 sm:p-8 bg-un-blue/5 border border-un-blue/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-un-blue text-white flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-un-blue uppercase tracking-tight mb-3">
              {FUNDAMENTACAO_CONCEITUAL.ods.titulo}
            </h3>
            <p className="text-slate-700 leading-relaxed">{FUNDAMENTACAO_CONCEITUAL.ods.descricao}</p>
            <div className="mt-4 pt-4 border-t border-un-blue/20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-un-blue">Agenda normativa global • 193 países • 17 ODS + 169 metas</span>
            </div>
          </article>

          {/* ESG */}
          <article className="rounded-3xl p-6 sm:p-8 bg-un-green/5 border border-un-green/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-un-green text-white flex items-center justify-center mb-4">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-un-green uppercase tracking-tight mb-3">
              {FUNDAMENTACAO_CONCEITUAL.esg.titulo}
            </h3>
            <p className="text-slate-700 leading-relaxed">{FUNDAMENTACAO_CONCEITUAL.esg.descricao}</p>
            <div className="mt-4 pt-4 border-t border-un-green/20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-un-green">Abordagem operacional • Gestão de riscos • Criação de valor</span>
            </div>
          </article>

          {/* Sinergia */}
          <article className="rounded-3xl p-6 sm:p-8 bg-un-gold/5 border border-un-gold/10 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-un-gold/10 rounded-full blur-2xl pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-un-gold text-un-blue flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-display font-bold text-un-gold uppercase tracking-tight mb-3">
              {FUNDAMENTACAO_CONCEITUAL.sinergia.titulo}
            </h3>
            <p className="text-slate-700 leading-relaxed">{FUNDAMENTACAO_CONCEITUAL.sinergia.descricao}</p>
            <div className="mt-4 pt-4 border-t border-un-gold/20">
              <span className="text-[10px] font-bold uppercase tracking-widest text-un-gold">Dupla materialidade • Motor microeconômico • Impacto auditável</span>
            </div>
          </article>
        </div>

        {/* Matriz de conexão */}
        <ESGODSMatrix />
      </div>
    </section>

    {/* 3. O QUE É ESG — DEFINIÇÃO DETALHADA */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Definição Completa"
          title={ESG_DEFINICAO_DETALHADA.titulo}
          description={ESG_DEFINICAO_DETALHADA.intro}
          className="mb-12"
        />

        {/* Origem */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-blue/5 border border-un-blue/10 mb-12">
          <h4 className="text-lg font-display font-bold text-un-blue uppercase tracking-tight mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5" /> Origem do termo ESG
          </h4>
          <div dangerouslySetInnerHTML={{ __html: ESG_DEFINICAO_DETALHADA.origem }} className="text-slate-700 leading-relaxed" />
        </div>

        {/* Evolução */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-green/5 border border-un-green/10 mb-12">
          <h4 className="text-lg font-display font-bold text-un-green uppercase tracking-tight mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Evolução: de screening a criação de valor
          </h4>
          <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: ESG_DEFINICAO_DETALHADA.evolucao }} />
        </div>

        {/* 3 Pilares detalhados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ESG_DEFINICAO_DETALHADA.pilares.map((pilar) => (
            <ESGPillarCard key={pilar.letra} pilar={pilar} />
          ))}
        </div>
      </div>
    </section>

    {/* 4. TIMELINE ESG */}
    <Timeline items={ESG_TIMELINE} title="Linha do Tempo: A Construção do ESG" color="un-blue" />

    {/* 5. TIMELINE ODS */}
    <Timeline items={ODS_TIMELINE} title="Linha do Tempo: A Agenda 2030 e os ODS" color="un-green" />

    {/* 6. OS 18 ODS - GRADE COM IMAGENS OFICIAIS */}
    <section id="ods" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Agenda 2030"
          title="Os 18 Objetivos de Desenvolvimento Sustentável"
          titleAccent="Ícones oficiais da ONU + ODS 18 brasileiro"
          description="Os ODS reúnem os grandes desafios e vulnerabilidades da sociedade. Apontam os principais itens a serem acompanhados de perto por empresas que querem estar em conformidade com práticas ESG. O Brasil propôs e o Pacto Global implementou o ODS 18 em 2025."
          className="mb-10"
        />

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12 list-none p-0 m-0">
          {ODS_LIST.map((ods) => (
            <li
              key={ods.id}
              className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <img
                src={ods.image}
                alt={`ODS ${ods.id} — ${ods.name}`}
                loading="lazy"
                width="160"
                height="160"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 text-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-2xl font-display font-black" style={{ color: ods.color }}>{ods.id}</span>
                <p className="text-[10px] font-medium leading-snug mt-1">{ods.name}</p>
              </div>
              {ods.id === 18 && (
                <span className="absolute inset-0 rounded-xl pointer-events-none ring-2" style={{ ringColor: ODS_COLORS[17] }} aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>

        {/* Destaque ODS 18 */}
        <div className="rounded-3xl p-6 sm:p-8 bg-un-purple/5 border border-un-purple/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-un-purple/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-un-purple/10 flex items-center justify-center shrink-0">
                <img src="/siteinstitucional/ods/ods-18.jpg" alt="ODS 18" className="w-12 h-12 object-cover rounded-xl" />
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

    {/* 7. 10 MOVIMENTOS DA AMBIÇÃO 2030 COM LOGOS */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Ambição 2030"
          title="Os 10 Movimentos de Aceleração"
          titleAccent="Logos oficiais • Metas públicas auditáveis • Conectando ESG aos ODS"
          description="A Estratégia Ambição 2030 transforma intenções genéricas em compromissos públicos auditáveis e mensuráveis. Cada movimento conecta um pilar ESG a ODS prioritários com metas claras, prazos definidos e logos oficiais."
          className="mb-10"
        />

        <div className="space-y-4">
          {MOVIMENTOS_AMBICAO_2030.map((mov) => (
            <MovementCard key={mov.id} mov={mov} />
          ))}
        </div>
      </div>
    </section>

    {/* 8. CONTEXTO REGULATÓRIO */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Regulação"
          title={CONTEXTO_REGULATORIO.titulo}
          description={CONTEXTO_REGULATORIO.intro}
          className="mb-10"
        />

        <div className="space-y-4">
          {CONTEXTO_REGULATORIO.resolucoes.map((reg, idx) => (
            <article
              key={idx}
              className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-gold/40 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-un-blue/10 text-un-blue flex items-center justify-center shrink-0 group-hover:bg-un-blue group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h5 className="text-lg font-display font-bold text-slate-900">{reg.nome}</h5>
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-un-gold/10 text-un-gold border border-un-gold/20">{reg.status}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{reg.descricao}</p>
              </div>
              <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-un-gold transition-colors shrink-0" />
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 9. CASOS INSPIRADORES */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Casos de Sucesso"
          title="Empresas que Inspiram"
          titleAccent="Engajamento transversal real nos pilares E, S e G"
          description="Grandes empresas brasileiras usam a Ambição 2030 em suas estratégias, atuando em colaboração pré-competitiva para resolver desafios sistêmicos."
          className="mb-10"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {CASOS_INSPIRADORES.map((caso, idx) => (
            <article
              key={idx}
              className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-blue/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img src={caso.logo} alt={caso.empresa} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="text-lg font-display font-bold text-slate-900 mb-2">{caso.empresa}</h4>
              <p className="text-sm text-un-blue font-medium mb-3">{caso.destaque}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{caso.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 10. FERRAMENTAS PRÁTICAS */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Ferramentas do Pacto Global"
          title="Como Implementar ESG e ODS na Prática"
          description="Duas ferramentas principais do Pacto Global para que sua organização integre os ODS no dia a dia das operações e estabeleça metas compatíveis com padrões globais."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {FERRAMENTAS_ESG.map((ferramenta, idx) => (
            <article
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
                          <span className="w-5 h-5 rounded-full bg-un-blue/10 text-un-blue text-[10px] font-bold flex items-center justify-center shrink-0">{pIdx + 1}</span>
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
                    <Button key={lIdx} variant="ghost" size="sm" className="text-un-blue hover:text-un-gold border-b border-un-blue/30 hover:border-un-gold px-0">
                      {link.label} <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  ))}
                  {ferramenta.link && (
                    <Button variant="ghost" size="sm" className="text-un-blue hover:text-un-gold border-b border-un-blue/30 hover:border-un-gold px-0">
                      {ferramenta.link.label} <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 11. METAS DA AMBIÇÃO PELOS ODS */}
    <section className="py-12 md:py-20 bg-un-surface border-y border-slate-200/80">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Metas Transformadoras"
          title="Exemplos de Metas do Programa Ambição pelos ODS"
          description="As metas visam traduzir os ODS para os negócios, com foco em ampliar o impacto das empresas em desafios globais. O programa permite ir além do progresso incremental e intensificar a mudança transformadora."
          className="mb-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {METAS_AMBICAO_ODS.map((meta) => (
            <article
              key={meta.ods}
              className="group relative rounded-3xl p-6 bg-white border border-slate-200/90 hover:border-un-gold/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-display font-black text-lg" style={{ backgroundColor: ODS_COLORS[meta.ods - 1] }}>
                  {meta.ods}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">ODS {meta.ods}</span>
              </div>
              <h4 className="text-lg font-display font-bold text-slate-900 uppercase tracking-tight mb-3">{meta.titulo}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{meta.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 12. MERCADO ESG */}
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {MERCADO_ESG.estatisticas.map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/5 border border-white/10 rounded-2xl group hover:bg-white/10 transition-colors">
              <div className="text-3xl sm:text-4xl font-display font-black text-un-gold mb-2 group-hover:scale-110 transition-transform">{stat.valor}</div>
              <div className="text-xs sm:text-sm font-medium text-white mb-1">{stat.rotulo}</div>
              <div className="text-[10px] text-slate-400">Fonte: {stat.fonte}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {MERCADO_ESG.casos.map((caso, idx) => (
            <article key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-un-gold/20 text-un-gold flex items-center justify-center shrink-0">
                  <LineChart className="w-5 h-5" />
                </div>
                <h5 className="text-lg font-display font-bold text-white">{caso.nome}</h5>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">{caso.descricao}</p>
              <Button variant="ghost" size="sm" className="text-un-gold hover:text-white border-b border-un-gold/30 hover:border-white px-0">
                {caso.link.label} <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 13. POR QUE ADERIR */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-7xl">
        <SectionHeader
          badge="Valor da Adesão"
          title={POR_QUE_ADERIR_MOVIMENTOS.titulo}
          description={POR_QUE_ADERIR_MOVIMENTOS.descricao}
          className="mb-10"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POR_QUE_ADERIR_MOVIMENTOS.beneficios.map((beneficio, idx) => (
            <article key={idx} className="rounded-2xl p-6 bg-white border border-slate-200/90 hover:border-un-blue/50 hover:shadow-xl transition-all duration-300 group">
              <div className="w-10 h-10 rounded-xl bg-un-blue/5 text-un-blue flex items-center justify-center mb-4 group-hover:bg-un-blue group-hover:text-white transition-colors">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{beneficio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* 14. CTA FINAL */}
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