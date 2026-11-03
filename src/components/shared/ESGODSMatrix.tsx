import React from 'react';
import { cn } from '../../utils/cn';
import { ExternalLink } from 'lucide-react';

export interface MatrixItem {
  pilar: 'E' | 'S' | 'G';
  ods: number[];
  descricao: string;
}

export interface ESGODSMatrixProps {
  matrix?: MatrixItem[];
}

const PILAR_COLORS = { E: '#297D6D', S: '#1E3250', G: '#6E417A' };
const PILAR_NAMES = { E: 'Ambiental (E)', S: 'Social (S)', G: 'Governança (G)' };

export const ESGODSMatrix = ({ 
  matrix = [
    { pilar: 'E', ods: [6, 7, 12, 13, 14, 15], descricao: 'Clima, água, circularidade, oceanos, vida terrestre' },
    { pilar: 'S', ods: [1, 3, 4, 5, 8, 10, 18], descricao: 'Pobreza, saúde, educação, gênero, trabalho, desigualdades, igualdade étnico-racial' },
    { pilar: 'G', ods: [16, 17], descricao: 'Instituições eficazes, parcerias, transparência, anticorrupção' },
  ]
}: ESGODSMatrixProps) => (
  <div className="rounded-2xl p-8 bg-paper-2 border border-border overflow-hidden reveal" style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
    <h4 className="text-heading-md font-impact font-bold text-ink uppercase tracking-tight mb-6 text-center">Matriz de Conexão: Pilares ESG ↔ ODS</h4>
    <div className="grid md:grid-cols-3 gap-6">
      {matrix.map((item, idx) => (
        <div key={idx} className="relative rounded-xl p-6 border-2" style={{ backgroundColor: `${PILAR_COLORS[item.pilar]}10`, borderColor: `${PILAR_COLORS[item.pilar]}30` }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-impact font-black text-xl" style={{ backgroundColor: PILAR_COLORS[item.pilar] }}>
              {item.pilar}
            </div>
            <h5 className="font-impact font-bold text-ink">{PILAR_NAMES[item.pilar]}</h5>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.ods.map((odsNum) => (
              <span
                key={odsNum}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-impact font-black text-sm"
                style={{ backgroundColor: `var(--ods-${odsNum})` }}
              >
                {odsNum}
              </span>
            ))}
          </div>
          <p className="text-body-sm text-ink-3">{item.descricao}</p>
        </div>
      ))}
    </div>
  </div>
);