/**
 * Apresentação dos três pilares ESG. O conteúdo (subtemas, métricas) vem de
 * ESG_DEFINICAO_DETALHADA.pilares; aqui fica só o que é visual.
 *
 * Cores pelo papel definido na Como Aderir (adesao/cores.js): verde para
 * sustentabilidade, roxo para pessoas, azul para dados e informação. Sobre o
 * azul-marinho elas entram como preenchimento, nunca como texto.
 *
 * `principios` são as quatro áreas dos Dez Princípios do Pacto Global, com os
 * ícones de public/icons. É uma relação temática, não um requisito de adesão.
 */
export const PILARES_VISUAL = {
  E: {
    id: 'pilar-e',
    nome: 'Ambiental',
    preenchimento: 'bg-un-green',
    texto: 'text-un-green',
    foto: 'hero-solar',
    principios: [{ nome: 'Meio Ambiente', icone: 'meio-ambiente', faixa: 'Princípios 7 a 9' }],
  },
  S: {
    id: 'pilar-s',
    nome: 'Social',
    preenchimento: 'bg-un-purple',
    texto: 'text-un-purple',
    foto: 'hero-equipe',
    principios: [
      { nome: 'Direitos Humanos', icone: 'direitos-humanos', faixa: 'Princípios 1 e 2' },
      { nome: 'Trabalho', icone: 'trabalho', faixa: 'Princípios 3 a 6' },
    ],
  },
  G: {
    id: 'pilar-g',
    nome: 'Governança',
    preenchimento: 'bg-un-blue-1',
    texto: 'text-un-blue-1',
    foto: 'evidencia-lideranca',
    principios: [{ nome: 'Anticorrupção', icone: 'anticorrupcao', faixa: 'Princípio 10' }],
  },
};

/** "Mudança climática: emissões GEE..." -> "Mudança climática" */
export const tituloSubtema = (subtema) => subtema.split(':')[0];
