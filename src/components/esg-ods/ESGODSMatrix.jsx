import React from 'react';
import { ODS_COLORS } from '../../data/constants';
import { ESG_ODS_CONEXAO } from '../../data/esgOds';

const PILAR_CORES = { E: '#297D6D', S: '#1E3250', G: '#6E417A' };
const PILAR_NOMES = { E: 'Ambiental (E)', S: 'Social (S)', G: 'Governança (G)' };

// Infográfico de conexão entre os pilares ESG e os ODS
export const ESGODSMatrix = () => (
  <div className="rounded-3xl p-8 bg-white border border-slate-200/90 overflow-hidden">
    <h3 className="text-lg font-display font-bold text-slate-900 uppercase tracking-tight mb-6 text-center">Matriz de Conexão: Pilares ESG ↔ ODS</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {ESG_ODS_CONEXAO.matriz.map((item) => (
        <div key={item.pilar} className="relative rounded-2xl p-6 border-2" style={{ backgroundColor: `${PILAR_CORES[item.pilar]}10`, borderColor: `${PILAR_CORES[item.pilar]}30` }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-black text-xl" style={{ backgroundColor: PILAR_CORES[item.pilar] }}>
              {item.pilar}
            </div>
            <h4 className="font-display font-bold text-slate-900">{PILAR_NOMES[item.pilar]}</h4>
          </div>
          <ul className="flex flex-wrap gap-2 mb-4 list-none p-0 m-0" aria-label={`ODS ligados ao pilar ${PILAR_NOMES[item.pilar]}`}>
            {item.ods.map((odsNum) => (
              <li
                key={odsNum}
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-display font-black text-sm"
                style={{ backgroundColor: ODS_COLORS[odsNum - 1] }}
              >
                {odsNum}
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600">{item.descricao}</p>
        </div>
      ))}
    </div>
  </div>
);
