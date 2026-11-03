import React from 'react';
import { cn } from '../../utils/cn';

export interface TimelineItem {
  ano: string;
  titulo?: string;
  evento?: string;
  descricao: string;
  icone: string;
  destaque?: boolean;
}

export interface TimelineProps {
  items: TimelineItem[];
  title: string;
  color?: 'atlantic' | 'leaf' | 'sun' | 'purple';
}

const ICON_COMPONENTS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe: () => import('lucide-react').then(m => <m.Globe />),
  Users: () => import('lucide-react').then(m => <m.Users />),
  Target: () => import('lucide-react').then(m => <m.Target />),
  FileText: () => import('lucide-react').then(m => <m.FileText />),
  TrendingUp: () => import('lucide-react').then(m => <m.TrendingUp />),
  Scale: () => import('lucide-react').then(m => <m.Scale />),
  Gavel: () => import('lucide-react').then(m => <m.Gavel />),
  Clock: () => import('lucide-react').then(m => <m.Clock />),
  Flag: () => import('lucide-react').then(m => <m.Flag />),
  Award: () => import('lucide-react').then(m => <m.Award />),
  AlertTriangle: () => import('lucide-react').then(m => <m.AlertTriangle />),
  BarChart3: () => import('lucide-react').then(m => <m.BarChart3 />),
  Zap: () => import('lucide-react').then(m => <m.Zap />),
  Recycle: () => import('lucide-react').then(m => <m.Recycle />),
  Droplets: () => import('lucide-react').then(m => <m.Droplets />),
  TreePine: () => import('lucide-react').then(m => <m.TreePine />),
  Factory: () => import('lucide-react').then(m => <m.Factory />),
  Wind: () => import('lucide-react').then(m => <m.Wind />),
  SolarPanel: () => import('lucide-react').then(m => <m.SolarPanel />),
  Landmark: () => import('lucide-react').then(m => <m.Landmark />),
  Handshake: () => import('lucide-react').then(m => <m.Handshake />),
  Stethoscope: () => import('lucide-react').then(m => <m.Stethoscope />),
  PiggyBank: () => import('lucide-react').then(m => <m.PiggyBank />),
  Eye: () => import('lucide-react').then(m => <m.Eye />),
  Network: () => import('lucide-react').then(m => <m.Network />),
  MapPin: () => import('lucide-react').then(m => <m.MapPin />),
  Calculator: () => import('lucide-react').then(m => <m.Calculator />),
  PieChart: () => import('lucide-react').then(m => <m.PieChart />),
  Shield: () => import('lucide-react').then(m => <m.Shield />),
  Lock: () => import('lucide-react').then(m => <m.Lock />),
  Unlock: () => import('lucide-react').then(m => <m.Unlock />),
  Key: () => import('lucide-react').then(m => <m.Key />),
  Diamond: () => import('lucide-react').then(m => <m.Diamond />),
  Star: () => import('lucide-react').then(m => <m.Star />),
  Medal: () => import('lucide-react').then(m => <m.Medal />),
  Trophy: () => import('lucide-react').then(m => <m.Trophy />),
  Crown: () => import('lucide-react').then(m => <m.Crown />),
  Gem: () => import('lucide-react').then(m => <m.Gem />),
  Sparkles: () => import('lucide-react').then(m => <m.Sparkles />),
  Sun: () => import('lucide-react').then(m => <m.Sun />),
  Moon: () => import('lucide-react').then(m => <m.Moon />),
  Cloud: () => import('lucide-react').then(m => <m.Cloud />),
  Snowflake: () => import('lucide-react').then(m => <m.Snowflake />),
  Flame: () => import('lucide-react').then(m => <m.Flame />),
  Mountain: () => import('lucide-react').then(m => <m.Mountain />),
  TreeDeciduous: () => import('lucide-react').then(m => <m.TreeDeciduous />),
  Building: () => import('lucide-react').then(m => <m.Building />),
  Ship: () => import('lucide-react').then(m => <m.Ship />),
  Plane: () => import('lucide-react').then(m => <m.Plane />),
  Train: () => import('lucide-react').then(m => <m.Train />),
  Car: () => import('lucide-react').then(m => <m.Car />),
  Bike: () => import('lucide-react').then(m => <m.Bike />),
  Accessibility: () => import('lucide-react').then(m => <m.Accessibility />),
  Languages: () => import('lucide-react').then(m => <m.Languages />),
  Smartphone: () => import('lucide-react').then(m => <m.Smartphone />),
  Tablet: () => import('lucide-react').then(m => <m.Tablet />),
  Laptop: () => import('lucide-react').then(m => <m.Laptop />),
  Monitor: () => import('lucide-react').then(m => <m.Monitor />),
  Keyboard: () => import('lucide-react').then(m => <m.Keyboard />),
  Mouse: () => import('lucide-react').then(m => <m.Mouse />),
  Printer: () => import('lucide-react').then(m => <m.Printer />),
  Camera: () => import('lucide-react').then(m => <m.Camera />),
  Mic: () => import('lucide-react').then(m => <m.Mic />),
  Speaker: () => import('lucide-react').then(m => <m.Speaker />),
  Headphones: () => import('lucide-react').then(m => <m.Headphones />),
  Volume2: () => import('lucide-react').then(m => <m.Volume2 />),
  VolumeX: () => import('lucide-react').then(m => <m.VolumeX />),
  Play: () => import('lucide-react').then(m => <m.Play />),
  Pause: () => import('lucide-react').then(m => <m.Pause />),
  SkipForward: () => import('lucide-react').then(m => <m.SkipForward />),
  SkipBack: () => import('lucide-react').then(m => <m.SkipBack />),
  FastForward: () => import('lucide-react').then(m => <m.FastForward />),
  Rewind: () => import('lucide-react').then(m => <m.Rewind />),
  Shuffle: () => import('lucide-react').then(m => <m.Shuffle />),
  Repeat: () => import('lucide-react').then(m => <m.Repeat />),
  Bookmark: () => import('lucide-react').then(m => <m.Bookmark />),
  Tag: () => import('lucide-react').then(m => <m.Tag />),
  Navigation: () => import('lucide-react').then(m => <m.Navigation />),
  Anchor: () => import('lucide-react').then(m => <m.Anchor />),
  Aperture: () => import('lucide-react').then(m => <m.Aperture />),
  Crop: () => import('lucide-react').then(m => <m.Crop />),
  RotateCcw: () => import('lucide-react').then(m => <m.RotateCcw />),
  RotateCw: () => import('lucide-react').then(m => <m.RotateCw />),
  FlipHorizontal: () => import('lucide-react').then(m => <m.FlipHorizontal />),
  FlipVertical: () => import('lucide-react').then(m => <m.FlipVertical />),
  ZoomIn: () => import('lucide-react').then(m => <m.ZoomIn />),
  ZoomOut: () => import('lucide-react').then(m => <m.ZoomOut />),
  Minimize2: () => import('lucide-react').then(m => <m.Minimize2 />),
  Maximize2: () => import('lucide-react').then(m => <m.Maximize2 />),
  Fullscreen: () => import('lucide-react').then(m => <m.Fullscreen />),
  Minimize: () => import('lucide-react').then(m => <m.Minimize />),
  Expand: () => import('lucide-react').then(m => <m.Expand />),
  Move: () => import('lucide-react').then(m => <m.Move />),
  Lasso: () => import('lucide-react').then(m => <m.Lasso />),
  PenTool: () => import('lucide-react').then(m => <m.PenTool />),
  Brush: () => import('lucide-react').then(m => <m.Brush />),
  Eraser: () => import('lucide-react').then(m => <m.Eraser />),
  PaintBucket: () => import('lucide-react').then(m => <m.PaintBucket />),
  Type: () => import('lucide-react').then(m => <m.Type />),
  Text: () => import('lucide-react').then(m => <m.Text />),
  Bold: () => import('lucide-react').then(m => <m.Bold />),
  Italic: () => import('lucide-react').then(m => <m.Italic />),
  Underline: () => import('lucide-react').then(m => <m.Underline />),
  Strikethrough: () => import('lucide-react').then(m => <m.Strikethrough />),
  Code: () => import('lucide-react').then(m => <m.Code />),
  Code2: () => import('lucide-react').then(m => <m.Code2 />),
  Terminal: () => import('lucide-react').then(m => <m.Terminal />),
  Hash: () => import('lucide-react').then(m => <m.Hash />),
  GitBranch: () => import('lucide-react').then(m => <m.GitBranch />),
  GitCommit: () => import('lucide-react').then(m => <m.GitCommit />),
  GitMerge: () => import('lucide-react').then(m => <m.GitMerge />),
  GitPullRequest: () => import('lucide-react').then(m => <m.GitPullRequest />),
  GitCompare: () => import('lucide-react').then(m => <m.GitCompare />),
  Github: () => import('lucide-react').then(m => <m.Github />),
  Gitlab: () => import('lucide-react').then(m => <m.Gitlab />),
};

function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const Component = ICON_COMPONENTS[name];
  if (!Component) return null;
  return <Component className={className} />;
}

export interface TimelineItem {
  ano: string;
  titulo?: string;
  evento?: string;
  descricao: string;
  icone: string;
  destaque?: boolean;
}

export interface TimelineProps {
  items: TimelineItem[];
  title: string;
  color?: 'atlantic' | 'leaf' | 'sun' | 'purple';
}

export const Timeline = ({ items, title, color = 'atlantic' }: TimelineProps) => (
  <section className="py-12 md:py-20 bg-paper border-y border-border-strong">
    <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
      <h2 className="text-display-xs sm:text-display-sm md:text-display-md font-impact font-black uppercase tracking-tight mb-4 text-center">{title}</h2>
      <p className="text-body-md text-ink-3 mb-12 text-center">Linha do Tempo</p>
      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b" style={{ backgroundColor: `var(--color-${color})` }} />
        {items.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={item.ano}
              className={cn(
                'flex items-start gap-6 mb-12 reveal',
                isLeft ? 'md:flex-row-reverse' : ''
              )}
              style={{ '--reveal-delay': `${idx * 100}ms` } as React.CSSProperties}
            >
              <div className={cn(
                'w-1/2 md:w-5/12',
                isLeft ? 'md:pr-12 text-right' : 'md:pl-12'
              )}>
                <div className={cn(
                  'relative',
                  isLeft ? 'md:mr-16' : 'md:ml-16'
                )}>
                  <div className="absolute right-0 top-4 w-4 h-4 rounded-full border-4 border-paper z-10" style={{ backgroundColor: `var(--color-${color})`, borderColor: `var(--color-${color})` }} />
                  <div className={cn(
                    'bg-paper-2 p-6 rounded-2xl shadow-card border transition-all hover:shadow-card-hover',
                    isLeft ? 'border-r-4' : 'border-l-4'
                  )} style={{ borderColor: `var(--color-${color})` }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: `var(--color-${color})` }}>
                        <Icon name={item.icone} className="w-5 h-5" />
                      </div>
                      <span className="text-display-xs font-impact font-black text-ink">{item.ano}</span>
                    </div>
                    <h4 className="text-heading-md font-impact font-bold text-ink mb-2">{item.titulo || item.evento}</h4>
                    <p className="text-body-sm text-ink-3 leading-relaxed">{item.descricao}</p>
                    {item.destaque && (
                      <span className="inline-block mt-3 px-3 py-1 text-micro font-bold uppercase tracking-widest rounded-full text-white" style={{ backgroundColor: `var(--color-${color})` }}>
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