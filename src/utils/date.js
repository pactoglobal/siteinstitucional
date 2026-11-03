// ============================================================
// Formatação de datas PT-BR
// ------------------------------------------------------------
// Todas as datas do conteúdo são strings ISO (YYYY-MM-DD).
// O parsing é manual de propósito: `new Date('2026-08-04')` é
// interpretado como UTC e, em BRT (-03), volta um dia atrás.
// ============================================================

const MESES = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

const MESES_CURTOS = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
];

/** @param {string} iso data no formato YYYY-MM-DD */
const parseISO = (iso) => {
  const [year, month, day] = String(iso).split('-').map(Number);
  return { year, month, day };
};

/** "4 de agosto de 2026" */
export const formatDateLong = (iso) => {
  const { year, month, day } = parseISO(iso);
  return `${day} de ${MESES[month - 1]} de ${year}`;
};

/** "04/08/2026" */
export const formatDateShort = (iso) => {
  const { year, month, day } = parseISO(iso);
  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
};

/** "agosto de 2026" */
export const formatMonthYear = (iso) => {
  const { year, month } = parseISO(iso);
  return `${MESES[month - 1]} de ${year}`;
};

/** { day: '04', month: 'ago', year: '2026' } — para o bloco de data dos cards */
export const dateParts = (iso) => {
  const { year, month, day } = parseISO(iso);
  return {
    day: String(day).padStart(2, '0'),
    month: MESES_CURTOS[month - 1],
    year: String(year),
  };
};

/**
 * "17 a 21 de agosto de 2026" — colapsa mês e ano quando coincidem.
 * Sem `end` (ou igual ao início) devolve a data simples.
 */
export const formatDateRange = (startISO, endISO) => {
  if (!endISO || endISO === startISO) return formatDateLong(startISO);

  const start = parseISO(startISO);
  const end = parseISO(endISO);

  if (start.year === end.year && start.month === end.month) {
    return `${start.day} a ${end.day} de ${MESES[start.month - 1]} de ${start.year}`;
  }
  if (start.year === end.year) {
    return `${start.day} de ${MESES[start.month - 1]} a ${end.day} de ${MESES[end.month - 1]} de ${start.year}`;
  }
  return `${formatDateLong(startISO)} a ${formatDateLong(endISO)}`;
};

/** Ordenação decrescente (mais recente primeiro) por campo ISO. */
export const byDateDesc = (field = 'date') => (a, b) =>
  String(b[field]).localeCompare(String(a[field]));

/** Ordenação crescente (mais próximo primeiro) por campo ISO. */
export const byDateAsc = (field = 'date') => (a, b) =>
  String(a[field]).localeCompare(String(b[field]));

/** Data de "hoje" como ISO, para separar agenda futura de passada. */
export const todayISO = () => {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-');
};
