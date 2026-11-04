// Países aceitos pelo campo "pais" do form handler do Pardot. O valor enviado
// é o nome em inglês, exatamente como o Pardot espera. O rótulo sai em
// português do próprio navegador (Intl.DisplayNames), pelo código ISO 3166-1.
const PARDOT =
  'AF:Afghanistan|AL:Albania|DZ:Algeria|AD:Andorra|AO:Angola|AR:Argentina|' +
  'AM:Armenia|AU:Australia|AT:Austria|AZ:Azerbaijan|BS:Bahamas|BH:Bahrain|' +
  'BD:Bangladesh|BB:Barbados|BY:Belarus|BE:Belgium|BZ:Belize|BJ:Benin|' +
  'BT:Bhutan|BO:Bolivia|BA:Bosnia and Herzegovina|BW:Botswana|BR:Brazil|' +
  'BN:Brunei|BG:Bulgaria|BF:Burkina Faso|BI:Burundi|KH:Cambodia|CM:Cameroon|' +
  'CA:Canada|CV:Cape Verde|CF:Central African Republic|TD:Chad|CL:Chile|' +
  'CN:China|CO:Colombia|KM:Comoros|CG:Congo|CR:Costa Rica|HR:Croatia|CU:Cuba|' +
  'CY:Cyprus|CZ:Czech Republic|DK:Denmark|DJ:Djibouti|DO:Dominican Republic|' +
  'EC:Ecuador|EG:Egypt|SV:El Salvador|GQ:Equatorial Guinea|ER:Eritrea|' +
  'EE:Estonia|ET:Ethiopia|FJ:Fiji|FI:Finland|FR:France|GA:Gabon|GM:Gambia|' +
  'GE:Georgia|DD:Germany|GH:Ghana|GR:Greece|GT:Guatemala|GN:Guinea|HT:Haiti|' +
  'HN:Honduras|HK:Hong Kong|HU:Hungary|IS:Iceland|IN:India|ID:Indonesia|' +
  'IR:Iran|IQ:Iraq|IE:Ireland|IL:Israel|IT:Italy|JM:Jamaica|JP:Japan|JO:Jordan|' +
  'KZ:Kazakhstan|KE:Kenya|KW:Kuwait|KG:Kyrgyzstan|LA:Laos|LV:Latvia|LB:Lebanon|' +
  'LS:Lesotho|LR:Liberia|LY:Libya|LI:Liechtenstein|LT:Lithuania|LU:Luxembourg|' +
  'MO:Macau|MG:Madagascar|MW:Malawi|MY:Malaysia|MV:Maldives|ML:Mali|MT:Malta|' +
  'MR:Mauritania|MU:Mauritius|MX:Mexico|MD:Moldova|MC:Monaco|MN:Mongolia|' +
  'ME:Montenegro|MA:Morocco|MZ:Mozambique|MM:Myanmar|NA:Namibia|NP:Nepal|' +
  'NL:Netherlands|NZ:New Zealand|NI:Nicaragua|NE:Niger|NG:Nigeria|' +
  'KP:North Korea|MK:North Macedonia|NO:Norway|OM:Oman|PK:Pakistan|' +
  'PS:Palestine|PA:Panama|PG:Papua New Guinea|PY:Paraguay|PE:Peru|' +
  'PH:Philippines|PL:Poland|PT:Portugal|QA:Qatar|RO:Romania|RU:Russia|' +
  'RW:Rwanda|SA:Saudi Arabia|SN:Senegal|CS:Serbia|SL:Sierra Leone|SG:Singapore|' +
  'SK:Slovakia|SI:Slovenia|SO:Somalia|ZA:South Africa|KR:South Korea|ES:Spain|' +
  'LK:Sri Lanka|SD:Sudan|SE:Sweden|CH:Switzerland|SY:Syria|TW:Taiwan|' +
  'TJ:Tajikistan|TZ:Tanzania|TH:Thailand|TG:Togo|TT:Trinidad and Tobago|' +
  'TN:Tunisia|TR:Turkey|TM:Turkmenistan|UG:Uganda|UA:Ukraine|' +
  'AE:United Arab Emirates|GB:United Kingdom|US:United States|UY:Uruguay|' +
  'UZ:Uzbekistan|VE:Venezuela|VN:Vietnam|YD:Yemen|ZM:Zambia|RH:Zimbabwe|';

const paresPardot = () =>
  PARDOT.split('|').filter(Boolean).map((par) => {
    const [codigo, valor] = par.split(':');
    return { codigo, valor };
  });

const rotuladosEmPortugues = () => {
  try {
    const nomes = new Intl.DisplayNames(['pt-BR'], { type: 'region' });
    return paresPardot()
      .map(({ codigo, valor }) => ({ valor, rotulo: nomes.of(codigo) }))
      .sort((a, b) => a.rotulo.localeCompare(b.rotulo, 'pt-BR'));
  } catch {
    return paresPardot()
      .map(({ valor }) => ({ valor, rotulo: valor }))
      .sort((a, b) => a.rotulo.localeCompare(b.rotulo, 'pt-BR'));
  }
};

/** Opções { valor, rotulo } do campo País: Brasil primeiro e "Outro" no fim. */
export const PAISES = (() => {
  const todos = rotuladosEmPortugues();
  const brasil = todos.find(({ valor }) => valor === 'Brazil');
  return [brasil, ...todos.filter((pais) => pais !== brasil), { valor: 'Other', rotulo: 'Outro' }];
})();
