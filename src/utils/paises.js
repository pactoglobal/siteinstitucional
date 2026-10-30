// Códigos ISO 3166-1 alfa-2. Os nomes saem em português do próprio navegador
// (Intl.DisplayNames), sem manter uma lista traduzida à mão.
const CODIGOS = 'AF ZA AL DE AD AO AG SA DZ AR AM AU AT AZ BS BD BB BH BE BZ BJ BY BO BA BW BR BN BG BF BI BT CV KH CM CA QA KZ TD CL CN CY CO KM CG CD KP KR CI CR HR CU DK DJ DM EG SV AE EC ER SK SI ES US EE SZ ET FJ PH FI FR GA GM GH GE GD GR GT GY GN GQ GW HT HN HU YE MH SB IN ID IR IQ IE IS IL IT JM JP JO KI KW LA LS LV LB LR LY LI LT LU MK MG MY MW MV ML MT MA MU MR MX MM FM MZ MD MC MN ME NA NR NP NI NE NG NO NZ OM NL PW PS PA PG PK PY PE PL PT KE KG GB CF CZ DO RO RW RU WS SM LC KN ST VC SN SL RS SC SG SY SO LK SD SS SR SE CH TJ TH TZ TL TG TO TT TN TM TR TV UA UG UY UZ VU VA VE VN ZM ZW HK MO TW XK'.split(' ');

const nomesPaises = () => {
  try {
    const nomes = new Intl.DisplayNames(['pt-BR'], { type: 'region' });
    return CODIGOS.map((codigo) => nomes.of(codigo)).sort((a, b) => a.localeCompare(b, 'pt-BR'));
  } catch {
    return ['Brasil'];
  }
};

/** Lista de países em português, com o Brasil primeiro. */
export const PAISES = ['Brasil', ...nomesPaises().filter((nome) => nome !== 'Brasil')];
