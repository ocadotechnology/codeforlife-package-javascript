import ha, { useState as Z, useEffect as N, useCallback as ma } from "react";
import * as _ from "yup";
import { number as pr, string as gr, ValidationError as pa, object as ga } from "yup";
import Sr from "dayjs";
import { Stack as yr, Typography as Sa, CircularProgress as _r, Box as br, createTheme as vr } from "@mui/material";
import ne from "js-cookie";
import { useNavigate as Er, useLocation as Cr, useSearchParams as Tr, useParams as Ar, createSearchParams as Mr } from "react-router-dom";
import { useSelector as Ir } from "react-redux";
import "@reduxjs/toolkit/query/react";
import { buildCreateSlice as Rr, asyncThunkCreator as Or } from "@reduxjs/toolkit";
import { SyncProblem as Pr } from "@mui/icons-material";
const wr = {}, ye = wr, Nr = ye.VITE_SERVICE_NAME ?? "REPLACE_ME", zt = ye.VITE_SERVICE_API_URL ?? "http://localhost:8000", Lr = `${Nr}_csrftoken`, Gr = ye.VITE_SESSION_COOKIE_NAME ?? "session_key", _e = ye.VITE_SESSION_METADATA_COOKIE_NAME ?? "session_metadata", Br = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, Zt = new Proxy(Br, {
  get: (a, r) => a[`VITE_${r}`]
}), kr = Rr({
  creators: { asyncThunk: Or }
}), jr = {
  isLoggedIn: !!ne.get(_e)
}, ya = kr({
  name: "session",
  initialState: jr,
  reducers: (a) => ({
    login: a.reducer((r) => {
      r.isLoggedIn = !0;
    }),
    logout: a.reducer((r) => {
      r.isLoggedIn = !1;
    })
  }),
  selectors: {
    selectIsLoggedIn: (a) => a.isLoggedIn
  }
}), { login: Qt, logout: Xt } = ya.actions, { selectIsLoggedIn: Dr } = ya.selectors;
function _a(a, r = "_blank") {
  window.open(a, r);
}
function Fr(a, r) {
  return (...t) => {
    a.before !== void 0 && a.before(...t);
    let n;
    return r !== void 0 && (n = r(...t)), a.after !== void 0 && a.after(...t), n;
  };
}
function ba(a) {
  Object.entries(a).forEach(([r, t]) => {
    typeof t == "object" && ba(t);
    const n = r.replace(
      /_+[a-z]/g,
      (o) => o[o.length - 1].toUpperCase()
    );
    delete a[r], a[n] = t;
  });
}
function va(a) {
  Object.entries(a).forEach(([r, t]) => {
    typeof t == "object" && va(t);
    const n = r.replace(
      /[A-Z]/g,
      (o) => `_${o.toLowerCase()}`
    );
    delete a[r], a[n] = t;
  });
}
const xr = new Date(0, 0, 0), Ea = [
  "AD",
  "AE",
  "AF",
  "AG",
  "AI",
  "AL",
  "AM",
  "AO",
  "AQ",
  "AR",
  "AS",
  "AT",
  "AU",
  "AW",
  "AX",
  "AZ",
  "BA",
  "BB",
  "BD",
  "BE",
  "BF",
  "BG",
  "BH",
  "BI",
  "BJ",
  "BL",
  "BM",
  "BN",
  "BO",
  "BQ",
  "BR",
  "BS",
  "BT",
  "BV",
  "BW",
  "BY",
  "BZ",
  "CA",
  "CC",
  "CD",
  "CF",
  "CG",
  "CH",
  "CI",
  "CK",
  "CL",
  "CM",
  "CN",
  "CO",
  "CR",
  "CU",
  "CV",
  "CW",
  "CX",
  "CY",
  "CZ",
  "DE",
  "DJ",
  "DK",
  "DM",
  "DO",
  "DZ",
  "EC",
  "EE",
  "EG",
  "EH",
  "ER",
  "ES",
  "ET",
  "FI",
  "FJ",
  "FK",
  "FM",
  "FO",
  "FR",
  "GA",
  "GB",
  "GD",
  "GE",
  "GF",
  "GG",
  "GH",
  "GI",
  "GL",
  "GM",
  "GN",
  "GP",
  "GQ",
  "GR",
  "GS",
  "GT",
  "GU",
  "GW",
  "GY",
  "HK",
  "HM",
  "HN",
  "HR",
  "HT",
  "HU",
  "ID",
  "IE",
  "IL",
  "IM",
  "IN",
  "IO",
  "IQ",
  "IR",
  "IS",
  "IT",
  "JE",
  "JM",
  "JO",
  "JP",
  "KE",
  "KG",
  "KH",
  "KI",
  "KM",
  "KN",
  "KP",
  "KR",
  "KW",
  "KY",
  "KZ",
  "LA",
  "LB",
  "LC",
  "LI",
  "LK",
  "LR",
  "LS",
  "LT",
  "LU",
  "LV",
  "LY",
  "MA",
  "MC",
  "MD",
  "ME",
  "MF",
  "MG",
  "MH",
  "MK",
  "ML",
  "MM",
  "MN",
  "MO",
  "MP",
  "MQ",
  "MR",
  "MS",
  "MT",
  "MU",
  "MV",
  "MW",
  "MX",
  "MY",
  "MZ",
  "NA",
  "NC",
  "NE",
  "NF",
  "NG",
  "NI",
  "NL",
  "NO",
  "NP",
  "NR",
  "NU",
  "NZ",
  "OM",
  "PA",
  "PE",
  "PF",
  "PG",
  "PH",
  "PK",
  "PL",
  "PM",
  "PN",
  "PR",
  "PS",
  "PT",
  "PW",
  "PY",
  "QA",
  "RE",
  "RO",
  "RS",
  "RU",
  "RW",
  "SA",
  "SB",
  "SC",
  "SD",
  "SE",
  "SG",
  "SH",
  "SI",
  "SJ",
  "SK",
  "SL",
  "SM",
  "SN",
  "SO",
  "SR",
  "SS",
  "ST",
  "SV",
  "SX",
  "SY",
  "SZ",
  "TC",
  "TD",
  "TF",
  "TG",
  "TH",
  "TJ",
  "TK",
  "TL",
  "TM",
  "TN",
  "TO",
  "TR",
  "TT",
  "TV",
  "TW",
  "TZ",
  "UA",
  "UG",
  "UM",
  "US",
  "UY",
  "UZ",
  "VA",
  "VC",
  "VE",
  "VG",
  "VI",
  "VN",
  "VU",
  "WF",
  "WS",
  "YE",
  "YT",
  "ZA",
  "ZM",
  "ZW"
], Ur = [
  "Andorra",
  "United Arab Emirates (the)",
  "Afghanistan",
  "Antigua and Barbuda",
  "Anguilla",
  "Albania",
  "Armenia",
  "Angola",
  "Antarctica",
  "Argentina",
  "American Samoa",
  "Austria",
  "Australia",
  "Aruba",
  "Åland Islands",
  "Azerbaijan",
  "Bosnia and Herzegovina",
  "Barbados",
  "Bangladesh",
  "Belgium",
  "Burkina Faso",
  "Bulgaria",
  "Bahrain",
  "Burundi",
  "Benin",
  "Saint Barthélemy",
  "Bermuda",
  "Brunei Darussalam",
  "Bolivia (Plurinational State of)",
  "Bonaire, Sint Eustatius and Saba",
  "Brazil",
  "Bahamas (the)",
  "Bhutan",
  "Bouvet Island",
  "Botswana",
  "Belarus",
  "Belize",
  "Canada",
  "Cocos (Keeling) Islands (the)",
  "Congo (the Democratic Republic of the)",
  "Central African Republic (the)",
  "Congo (the)",
  "Switzerland",
  "Côte d'Ivoire",
  "Cook Islands (the)",
  "Chile",
  "Cameroon",
  "China",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Cabo Verde",
  "Curaçao",
  "Christmas Island",
  "Cyprus",
  "Czechia",
  "Germany",
  "Djibouti",
  "Denmark",
  "Dominica",
  "Dominican Republic (the",
  "Algeria",
  "Ecuador",
  "Estonia",
  "Egypt",
  "Western Sahara",
  "Eritrea",
  "Spain",
  "Ethiopia",
  "Finland",
  "Fiji",
  "Falkland Islands (the) [Malvinas]",
  "Micronesia (Federated States of)",
  "Faroe Islands (the)",
  "France",
  "Gabon",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "Grenada",
  "Georgia",
  "French Guiana",
  "Guernsey",
  "Ghana",
  "Gibraltar",
  "Greenland",
  "Gambia (the)",
  "Guinea",
  "Guadeloupe",
  "Equatorial Guinea",
  "Greece",
  "South Georgia and the South Sandwich Islands",
  "Guatemala",
  "Guam",
  "Guinea-Bissau",
  "Guyana",
  "Hong Kong",
  "Heard Island and McDonald Islands",
  "Honduras",
  "Croatia",
  "Haiti",
  "Hungary",
  "Indonesia",
  "Ireland",
  "Israel",
  "Isle of Man",
  "India",
  "British Indian Ocean Territory (the)",
  "Iraq",
  "Iran (Islamic Republic of)",
  "Iceland",
  "Italy",
  "Jersey",
  "Jamaica",
  "Jordan",
  "Japan",
  "Kenya",
  "Kyrgyzstan",
  "Cambodia",
  "Kiribati",
  "Comoros (the)",
  "Saint Kitts and Nevis",
  "Korea (the Democratic People's Republic of)",
  "Korea (the Republic of)",
  "Kuwait",
  "Cayman Islands (the)",
  "Kazakhstan",
  "Lao People's Democratic Republic (the)",
  "Lebanon",
  "Saint Lucia",
  "Liechtenstein",
  "Sri Lanka",
  "Liberia",
  "Lesotho",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Libya",
  "Morocco",
  "Monaco",
  "Moldova (the Republic of)",
  "Montenegro",
  "Saint Martin (French part)",
  "Madagascar",
  "Marshall Islands (the)",
  "Republic of North Macedonia",
  "Mali",
  "Myanmar",
  "Mongolia",
  "Macao",
  "Northern Mariana Islands (the)",
  "Martinique",
  "Mauritania",
  "Montserrat",
  "Malta",
  "Mauritius",
  "Maldives",
  "Malawi",
  "Mexico",
  "Malaysia",
  "Mozambique",
  "Namibia",
  "New Caledonia",
  "Niger (the)",
  "Norfolk Island",
  "Nigeria",
  "Nicaragua",
  "Netherlands (the)",
  "Norway",
  "Nepal",
  "Nauru",
  "Niue",
  "New Zealand",
  "Oman",
  "Panama",
  "Peru",
  "French Polynesia",
  "Papua New Guinea",
  "Philippines (the)",
  "Pakistan",
  "Poland",
  "Saint Pierre and Miquelon",
  "Pitcairn",
  "Puerto Rico",
  "Palestine, State of",
  "Portugal",
  "Palau",
  "Paraguay",
  "Qatar",
  "Réunion",
  "Romania",
  "Serbia",
  "Russian Federation (the)",
  "Rwanda",
  "Saudi Arabia",
  "Solomon Islands",
  "Seychelles",
  "Sudan (the)",
  "Sweden",
  "Singapore",
  "Saint Helena, Ascension and Tristan da Cunha",
  "Slovenia",
  "Svalbard and Jan Mayen",
  "Slovakia",
  "Sierra Leone",
  "San Marino",
  "Senegal",
  "Somalia",
  "Suriname",
  "South Sudan",
  "Sao Tome and Principe",
  "El Salvador",
  "Sint Maarten (Dutch part)",
  "Syrian Arab Republic",
  "Eswatini",
  "Turks and Caicos Islands (the)",
  "Chad",
  "French Southern Territories (the)",
  "Togo",
  "Thailand",
  "Tajikistan",
  "Tokelau",
  "Timor-Leste",
  "Turkmenistan",
  "Tunisia",
  "Tonga",
  "Turkey",
  "Trinidad and Tobago",
  "Tuvalu",
  "Taiwan (Province of China)",
  "Tanzania, United Republic of",
  "Ukraine",
  "Uganda",
  "United States Minor Outlying Islands (the)",
  "United States of America (the)",
  "Uruguay",
  "Uzbekistan",
  "Holy See (the)",
  "Saint Vincent and the Grenadines",
  "Venezuela (Bolivarian Republic of)",
  "Virgin Islands (British)",
  "Virgin Islands (U.S.)",
  "Viet Nam",
  "Vanuatu",
  "Wallis and Futuna",
  "Samoa",
  "Yemen",
  "Mayotte",
  "South Africa",
  "Zambia",
  "Zimbabwe"
], Kr = {
  AD: "Andorra",
  AE: "United Arab Emirates (the)",
  AF: "Afghanistan",
  AG: "Antigua and Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
  AO: "Angola",
  AQ: "Antarctica",
  AR: "Argentina",
  AS: "American Samoa",
  AT: "Austria",
  AU: "Australia",
  AW: "Aruba",
  AX: "Åland Islands",
  AZ: "Azerbaijan",
  BA: "Bosnia and Herzegovina",
  BB: "Barbados",
  BD: "Bangladesh",
  BE: "Belgium",
  BF: "Burkina Faso",
  BG: "Bulgaria",
  BH: "Bahrain",
  BI: "Burundi",
  BJ: "Benin",
  BL: "Saint Barthélemy",
  BM: "Bermuda",
  BN: "Brunei Darussalam",
  BO: "Bolivia (Plurinational State of)",
  BQ: "Bonaire, Sint Eustatius and Saba",
  BR: "Brazil",
  BS: "Bahamas (the)",
  BT: "Bhutan",
  BV: "Bouvet Island",
  BW: "Botswana",
  BY: "Belarus",
  BZ: "Belize",
  CA: "Canada",
  CC: "Cocos (Keeling) Islands (the)",
  CD: "Congo (the Democratic Republic of the)",
  CF: "Central African Republic (the)",
  CG: "Congo (the)",
  CH: "Switzerland",
  CI: "Côte d'Ivoire",
  CK: "Cook Islands (the)",
  CL: "Chile",
  CM: "Cameroon",
  CN: "China",
  CO: "Colombia",
  CR: "Costa Rica",
  CU: "Cuba",
  CV: "Cabo Verde",
  CW: "Curaçao",
  CX: "Christmas Island",
  CY: "Cyprus",
  CZ: "Czechia",
  DE: "Germany",
  DJ: "Djibouti",
  DK: "Denmark",
  DM: "Dominica",
  DO: "Dominican Republic (the",
  DZ: "Algeria",
  EC: "Ecuador",
  EE: "Estonia",
  EG: "Egypt",
  EH: "Western Sahara",
  ER: "Eritrea",
  ES: "Spain",
  ET: "Ethiopia",
  FI: "Finland",
  FJ: "Fiji",
  FK: "Falkland Islands (the) [Malvinas]",
  FM: "Micronesia (Federated States of)",
  FO: "Faroe Islands (the)",
  FR: "France",
  GA: "Gabon",
  GB: "United Kingdom of Great Britain and Northern Ireland (the)",
  GD: "Grenada",
  GE: "Georgia",
  GF: "French Guiana",
  GG: "Guernsey",
  GH: "Ghana",
  GI: "Gibraltar",
  GL: "Greenland",
  GM: "Gambia (the)",
  GN: "Guinea",
  GP: "Guadeloupe",
  GQ: "Equatorial Guinea",
  GR: "Greece",
  GS: "South Georgia and the South Sandwich Islands",
  GT: "Guatemala",
  GU: "Guam",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HK: "Hong Kong",
  HM: "Heard Island and McDonald Islands",
  HN: "Honduras",
  HR: "Croatia",
  HT: "Haiti",
  HU: "Hungary",
  ID: "Indonesia",
  IE: "Ireland",
  IL: "Israel",
  IM: "Isle of Man",
  IN: "India",
  IO: "British Indian Ocean Territory (the)",
  IQ: "Iraq",
  IR: "Iran (Islamic Republic of)",
  IS: "Iceland",
  IT: "Italy",
  JE: "Jersey",
  JM: "Jamaica",
  JO: "Jordan",
  JP: "Japan",
  KE: "Kenya",
  KG: "Kyrgyzstan",
  KH: "Cambodia",
  KI: "Kiribati",
  KM: "Comoros (the)",
  KN: "Saint Kitts and Nevis",
  KP: "Korea (the Democratic People's Republic of)",
  KR: "Korea (the Republic of)",
  KW: "Kuwait",
  KY: "Cayman Islands (the)",
  KZ: "Kazakhstan",
  LA: "Lao People's Democratic Republic (the)",
  LB: "Lebanon",
  LC: "Saint Lucia",
  LI: "Liechtenstein",
  LK: "Sri Lanka",
  LR: "Liberia",
  LS: "Lesotho",
  LT: "Lithuania",
  LU: "Luxembourg",
  LV: "Latvia",
  LY: "Libya",
  MA: "Morocco",
  MC: "Monaco",
  MD: "Moldova (the Republic of)",
  ME: "Montenegro",
  MF: "Saint Martin (French part)",
  MG: "Madagascar",
  MH: "Marshall Islands (the)",
  MK: "Republic of North Macedonia",
  ML: "Mali",
  MM: "Myanmar",
  MN: "Mongolia",
  MO: "Macao",
  MP: "Northern Mariana Islands (the)",
  MQ: "Martinique",
  MR: "Mauritania",
  MS: "Montserrat",
  MT: "Malta",
  MU: "Mauritius",
  MV: "Maldives",
  MW: "Malawi",
  MX: "Mexico",
  MY: "Malaysia",
  MZ: "Mozambique",
  NA: "Namibia",
  NC: "New Caledonia",
  NE: "Niger (the)",
  NF: "Norfolk Island",
  NG: "Nigeria",
  NI: "Nicaragua",
  NL: "Netherlands (the)",
  NO: "Norway",
  NP: "Nepal",
  NR: "Nauru",
  NU: "Niue",
  NZ: "New Zealand",
  OM: "Oman",
  PA: "Panama",
  PE: "Peru",
  PF: "French Polynesia",
  PG: "Papua New Guinea",
  PH: "Philippines (the)",
  PK: "Pakistan",
  PL: "Poland",
  PM: "Saint Pierre and Miquelon",
  PN: "Pitcairn",
  PR: "Puerto Rico",
  PS: "Palestine, State of",
  PT: "Portugal",
  PW: "Palau",
  PY: "Paraguay",
  QA: "Qatar",
  RE: "Réunion",
  RO: "Romania",
  RS: "Serbia",
  RU: "Russian Federation (the)",
  RW: "Rwanda",
  SA: "Saudi Arabia",
  SB: "Solomon Islands",
  SC: "Seychelles",
  SD: "Sudan (the)",
  SE: "Sweden",
  SG: "Singapore",
  SH: "Saint Helena, Ascension and Tristan da Cunha",
  SI: "Slovenia",
  SJ: "Svalbard and Jan Mayen",
  SK: "Slovakia",
  SL: "Sierra Leone",
  SM: "San Marino",
  SN: "Senegal",
  SO: "Somalia",
  SR: "Suriname",
  SS: "South Sudan",
  ST: "Sao Tome and Principe",
  SV: "El Salvador",
  SX: "Sint Maarten (Dutch part)",
  SY: "Syrian Arab Republic",
  SZ: "Eswatini",
  TC: "Turks and Caicos Islands (the)",
  TD: "Chad",
  TF: "French Southern Territories (the)",
  TG: "Togo",
  TH: "Thailand",
  TJ: "Tajikistan",
  TK: "Tokelau",
  TL: "Timor-Leste",
  TM: "Turkmenistan",
  TN: "Tunisia",
  TO: "Tonga",
  TR: "Turkey",
  TT: "Trinidad and Tobago",
  TV: "Tuvalu",
  TW: "Taiwan (Province of China)",
  TZ: "Tanzania, United Republic of",
  UA: "Ukraine",
  UG: "Uganda",
  UM: "United States Minor Outlying Islands (the)",
  US: "United States of America (the)",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VA: "Holy See (the)",
  VC: "Saint Vincent and the Grenadines",
  VE: "Venezuela (Bolivarian Republic of)",
  VG: "Virgin Islands (British)",
  VI: "Virgin Islands (U.S.)",
  VN: "Viet Nam",
  VU: "Vanuatu",
  WF: "Wallis and Futuna",
  WS: "Samoa",
  YE: "Yemen",
  YT: "Mayotte",
  ZA: "South Africa",
  ZM: "Zambia",
  ZW: "Zimbabwe"
}, Ca = [
  "Aberdeen City",
  "Aberdeenshire",
  "Angus",
  "Argyll and Bute",
  "Bedfordshire",
  "Belfast",
  "Belfast Greater",
  "Berkshire",
  "Blaenau Gwent",
  "Bridgend",
  "Buckinghamshire",
  "Caerphilly",
  "Cambridgeshire",
  "Cardiff",
  "Carmarthenshire",
  "Ceredigion",
  "Channel Islands",
  "Cheshire",
  "City of Edinburgh",
  "Clackmannanshire",
  "Conwy",
  "Cornwall",
  "County Antrim",
  "County Armagh",
  "County Down",
  "County Fermanagh",
  "County Londonderry",
  "County Tyrone",
  "County of Bristol",
  "Cumbria",
  "Denbighshire",
  "Derbyshire",
  "Devon",
  "Dorset",
  "Dumfries and Galloway",
  "Dunbartonshire",
  "Dundee City",
  "Durham",
  "East Ayrshire",
  "East Dunbartonshire",
  "East Lothian",
  "East Renfrewshire",
  "East Riding of Yorkshire",
  "East Sussex",
  "Essex",
  "Falkirk",
  "Fife",
  "Flintshire",
  "Glasgow City",
  "Gloucestershire",
  "Greater London",
  "Greater Manchester",
  "Guernsey Channel Islands",
  "Gwynedd",
  "Hampshire",
  "Hereford and Worcester",
  "Herefordshire",
  "Hertfordshire",
  "Highland",
  "Inverclyde",
  "Inverness",
  "Isle of Anglesey",
  "Isle of Barra",
  "Isle of Man",
  "Isle of Wight",
  "Jersey Channel Islands",
  "Kent",
  "Lancashire",
  "Leicestershire",
  "Lincolnshire",
  "Merseyside",
  "Merthyr Tydfil",
  "Midlothian",
  "Monmouthshire",
  "Moray",
  "Neath Port Talbot",
  "Newport",
  "Norfolk",
  "North Ayrshire",
  "North Lanarkshire",
  "North Yorkshire",
  "Northamptonshire",
  "Northumberland",
  "Nottinghamshire",
  "Orkney",
  "Orkney Islands",
  "Oxfordshire",
  "Pembrokeshire",
  "Perth and Kinross",
  "Powys",
  "Renfrewshire",
  "Rhondda Cynon Taff",
  "Rutland",
  "Scottish Borders",
  "Shetland Islands",
  "Shropshire",
  "Somerset",
  "South Ayrshire",
  "South Lanarkshire",
  "South Yorkshire",
  "Staffordshire",
  "Stirling",
  "Suffolk",
  "Surrey",
  "Swansea",
  "Torfaen",
  "Tyne and Wear",
  "Vale of Glamorgan",
  "Warwickshire",
  "West Dunbart",
  "West Lothian",
  "West Midlands",
  "West Sussex",
  "West Yorkshire",
  "Western Isles",
  "Wiltshire",
  "Worcestershire",
  "Wrexham"
];
function ge(a, r) {
  typeof r == "string" && (r = r.split("."));
  let t = a;
  for (let n = 0; n < r.length; n++)
    if (t = t[r[n]], n !== r.length - 1 && (typeof t != "object" || t === null))
      return;
  return t;
}
function Vr(a, r = ".") {
  function t(n, o) {
    return Object.fromEntries(
      Object.entries(n).map(([u, s]) => {
        const c = [...o, u];
        return typeof s == "object" && s !== null && (s = t(s, c)), [c.join(r), s];
      })
    );
  }
  return t(a, []);
}
function Ta(a, r = ".") {
  function t(n, o) {
    return Object.entries(n).map(([u, s]) => {
      const c = [...o, u], d = c.join(r);
      return typeof s == "object" && s !== null ? [d, ...t(s, c)] : [d];
    }).flat();
  }
  return t(a, []);
}
function Aa(a, r, t = ".") {
  function n(o, u) {
    return Object.fromEntries(
      Object.entries(o).map(([s, c]) => {
        const d = [...u, s];
        return typeof c == "object" && c !== null && !(c instanceof Date) && (c = n(c, d)), r.includes(d.join(t)) ? [] : [s, c];
      }).filter((s) => s.length)
    );
  }
  return r.length ? n(a, []) : a;
}
function Pe(a, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
  const t = window.crypto.getRandomValues(new Uint8Array(a));
  let n = "";
  for (let o = 0; o < a; o++)
    n += r.charAt(t[o] % r.length);
  return n;
}
const en = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COUNTRIES: Ur,
  COUNTRY_ISO_CODES: Ea,
  COUNTRY_ISO_CODE_MAPPING: Kr,
  MIN_DATE: xr,
  UK_COUNTIES: Ca,
  camelCaseToSnakeCase: va,
  excludeKeyPaths: Aa,
  generateSecureRandomString: Pe,
  getKeyPaths: Ta,
  getNestedProperty: ge,
  openInNewTab: _a,
  snakeCaseToCamelCase: ba,
  withKeyPaths: Vr,
  wrap: Fr
}, Symbol.toStringTag, { value: "Module" }));
function Hr() {
  ne.remove(Gr), ne.remove(_e);
}
function Yr() {
  return ne.get(Lr);
}
function we(a, r) {
  return `oauth2.${a}.${r}`;
}
const Wr = ["S256"], qr = [
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123,
  124,
  125,
  126,
  127,
  128
];
async function Ma(a) {
  const r = Pe(a), t = new TextEncoder().encode(r), n = await window.crypto.subtle.digest("SHA-256", t);
  return {
    verifier: r,
    challenge: btoa(String.fromCharCode(...new Uint8Array(n))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
    method: "S256"
  };
}
const an = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OAUTH2_CODE_CHALLENGE_LENGTHS: qr,
  OAUTH2_CODE_CHALLENGE_METHODS: Wr,
  generateOAuth2CodeChallenge: Ma,
  getCsrfCookie: Yr,
  logout: Hr,
  makeOAuth2StorageKey: we
}, Symbol.toStringTag, { value: "Module" }));
function rn(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var me = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oa;
function Jr() {
  if (oa) return re;
  oa = 1;
  var a = ha, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, d, f) {
    var S, C = {}, b = null, x = null;
    f !== void 0 && (b = "" + f), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (x = d.ref);
    for (S in d) n.call(d, S) && !u.hasOwnProperty(S) && (C[S] = d[S]);
    if (c && c.defaultProps) for (S in d = c.defaultProps, d) C[S] === void 0 && (C[S] = d[S]);
    return { $$typeof: r, type: c, key: b, ref: x, props: C, _owner: o.current };
  }
  return re.Fragment = t, re.jsx = s, re.jsxs = s, re;
}
var te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sa;
function $r() {
  return sa || (sa = 1, process.env.NODE_ENV !== "production" && (function() {
    var a = ha, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), U = Symbol.iterator, oe = "@@iterator";
    function se(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = U && e[U] || e[oe];
      return typeof i == "function" ? i : null;
    }
    var w = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function A(e) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
          l[h - 1] = arguments[h];
        G("error", e, l);
      }
    }
    function G(e, i, l) {
      {
        var h = w.ReactDebugCurrentFrame, g = h.getStackAddendum();
        g !== "" && (i += "%s", l = l.concat([g]));
        var y = l.map(function(p) {
          return String(p);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var ue = !1, ce = !1, Q = !1, Y = !1, B = !1, be;
    be = Symbol.for("react.module.reference");
    function k(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === u || B || e === o || e === f || e === S || Y || e === x || ue || ce || Q || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === C || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function X(e, i, l) {
      var h = e.displayName;
      if (h)
        return h;
      var g = i.displayName || i.name || "";
      return g !== "" ? l + "(" + g + ")" : l;
    }
    function ke(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case u:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var i = e;
            return ke(i) + ".Consumer";
          case s:
            var l = e;
            return ke(l._context) + ".Provider";
          case d:
            return X(e, e.render, "ForwardRef");
          case C:
            var h = e.displayName || null;
            return h !== null ? h : j(e.type) || "Memo";
          case b: {
            var g = e, y = g._payload, p = g._init;
            try {
              return j(p(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, ee = 0, je, De, Fe, xe, Ue, Ke, Ve;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function Ka() {
      {
        if (ee === 0) {
          je = console.log, De = console.info, Fe = console.warn, xe = console.error, Ue = console.group, Ke = console.groupCollapsed, Ve = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ee++;
      }
    }
    function Va() {
      {
        if (ee--, ee === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: je
            }),
            info: K({}, e, {
              value: De
            }),
            warn: K({}, e, {
              value: Fe
            }),
            error: K({}, e, {
              value: xe
            }),
            group: K({}, e, {
              value: Ue
            }),
            groupCollapsed: K({}, e, {
              value: Ke
            }),
            groupEnd: K({}, e, {
              value: Ve
            })
          });
        }
        ee < 0 && A("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ve = w.ReactCurrentDispatcher, Ee;
    function le(e, i, l) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (g) {
            var h = g.stack.trim().match(/\n( *(at )?)/);
            Ee = h && h[1] || "";
          }
        return `
` + Ee + e;
      }
    }
    var Ce = !1, de;
    {
      var Ha = typeof WeakMap == "function" ? WeakMap : Map;
      de = new Ha();
    }
    function Ye(e, i) {
      if (!e || Ce)
        return "";
      {
        var l = de.get(e);
        if (l !== void 0)
          return l;
      }
      var h;
      Ce = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ve.current, ve.current = null, Ka();
      try {
        if (i) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (R) {
              h = R;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (R) {
              h = R;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            h = R;
          }
          e();
        }
      } catch (R) {
        if (R && h && typeof R.stack == "string") {
          for (var m = R.stack.split(`
`), M = h.stack.split(`
`), v = m.length - 1, T = M.length - 1; v >= 1 && T >= 0 && m[v] !== M[T]; )
            T--;
          for (; v >= 1 && T >= 0; v--, T--)
            if (m[v] !== M[T]) {
              if (v !== 1 || T !== 1)
                do
                  if (v--, T--, T < 0 || m[v] !== M[T]) {
                    var P = `
` + m[v].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && de.set(e, P), P;
                  }
                while (v >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        Ce = !1, ve.current = y, Va(), Error.prepareStackTrace = g;
      }
      var q = e ? e.displayName || e.name : "", V = q ? le(q) : "";
      return typeof e == "function" && de.set(e, V), V;
    }
    function Ya(e, i, l) {
      return Ye(e, !1);
    }
    function Wa(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function fe(e, i, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ye(e, Wa(e));
      if (typeof e == "string")
        return le(e);
      switch (e) {
        case f:
          return le("Suspense");
        case S:
          return le("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ya(e.render);
          case C:
            return fe(e.type, i, l);
          case b: {
            var h = e, g = h._payload, y = h._init;
            try {
              return fe(y(g), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, We = {}, qe = w.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var i = e._owner, l = fe(e.type, e._source, i ? i.type : null);
        qe.setExtraStackFrame(l);
      } else
        qe.setExtraStackFrame(null);
    }
    function qa(e, i, l, h, g) {
      {
        var y = Function.call.bind(ae);
        for (var p in e)
          if (y(e, p)) {
            var m = void 0;
            try {
              if (typeof e[p] != "function") {
                var M = Error((h || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              m = e[p](i, p, h, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              m = v;
            }
            m && !(m instanceof Error) && (he(g), A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", l, p, typeof m), he(null)), m instanceof Error && !(m.message in We) && (We[m.message] = !0, he(g), A("Failed %s type: %s", l, m.message), he(null));
          }
      }
    }
    var Ja = Array.isArray;
    function Te(e) {
      return Ja(e);
    }
    function $a(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function za(e) {
      try {
        return Je(e), !1;
      } catch {
        return !0;
      }
    }
    function Je(e) {
      return "" + e;
    }
    function $e(e) {
      if (za(e))
        return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $a(e)), Je(e);
    }
    var ze = w.ReactCurrentOwner, Za = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ze, Qe;
    function Qa(e) {
      if (ae.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xa(e) {
      if (ae.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, i) {
      typeof e.ref == "string" && ze.current;
    }
    function ar(e, i) {
      {
        var l = function() {
          Ze || (Ze = !0, A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function rr(e, i) {
      {
        var l = function() {
          Qe || (Qe = !0, A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var tr = function(e, i, l, h, g, y, p) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: l,
        props: p,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function nr(e, i, l, h, g) {
      {
        var y, p = {}, m = null, M = null;
        l !== void 0 && ($e(l), m = "" + l), Xa(i) && ($e(i.key), m = "" + i.key), Qa(i) && (M = i.ref, er(i, g));
        for (y in i)
          ae.call(i, y) && !Za.hasOwnProperty(y) && (p[y] = i[y]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (y in v)
            p[y] === void 0 && (p[y] = v[y]);
        }
        if (m || M) {
          var T = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && ar(p, T), M && rr(p, T);
        }
        return tr(e, m, M, g, h, ze.current, p);
      }
    }
    var Ae = w.ReactCurrentOwner, Xe = w.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var i = e._owner, l = fe(e.type, e._source, i ? i.type : null);
        Xe.setExtraStackFrame(l);
      } else
        Xe.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Ie(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function ea() {
      {
        if (Ae.current) {
          var e = j(Ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var aa = {};
    function or(e) {
      {
        var i = ea();
        if (!i) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function ra(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = or(i);
        if (aa[l])
          return;
        aa[l] = !0;
        var h = "";
        e && e._owner && e._owner !== Ae.current && (h = " It was passed a child from " + j(e._owner.type) + "."), W(e), A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, h), W(null);
      }
    }
    function ta(e, i) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var l = 0; l < e.length; l++) {
            var h = e[l];
            Ie(h) && ra(h, i);
          }
        else if (Ie(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = se(e);
          if (typeof g == "function" && g !== e.entries)
            for (var y = g.call(e), p; !(p = y.next()).done; )
              Ie(p.value) && ra(p.value, i);
        }
      }
    }
    function sr(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var l;
        if (typeof i == "function")
          l = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === C))
          l = i.propTypes;
        else
          return;
        if (l) {
          var h = j(i);
          qa(l, e.props, "prop", h, e);
        } else if (i.PropTypes !== void 0 && !Me) {
          Me = !0;
          var g = j(i);
          A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var i = Object.keys(e.props), l = 0; l < i.length; l++) {
          var h = i[l];
          if (h !== "children" && h !== "key") {
            W(e), A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), A("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var na = {};
    function ia(e, i, l, h, g, y) {
      {
        var p = k(e);
        if (!p) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = ir();
          M ? m += M : m += ea();
          var v;
          e === null ? v = "null" : Te(e) ? v = "array" : e !== void 0 && e.$$typeof === r ? (v = "<" + (j(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, A("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, m);
        }
        var T = nr(e, i, l, g, y);
        if (T == null)
          return T;
        if (p) {
          var P = i.children;
          if (P !== void 0)
            if (h)
              if (Te(P)) {
                for (var q = 0; q < P.length; q++)
                  ta(P[q], e);
                Object.freeze && Object.freeze(P);
              } else
                A("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ta(P, e);
        }
        if (ae.call(i, "key")) {
          var V = j(e), R = Object.keys(i).filter(function(mr) {
            return mr !== "key";
          }), Re = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!na[V + Re]) {
            var hr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            A(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Re, V, hr, V), na[V + Re] = !0;
          }
        }
        return e === n ? ur(T) : sr(T), T;
      }
    }
    function cr(e, i, l) {
      return ia(e, i, l, !0);
    }
    function lr(e, i, l) {
      return ia(e, i, l, !1);
    }
    var dr = lr, fr = cr;
    te.Fragment = n, te.jsx = dr, te.jsxs = fr;
  })()), te;
}
var ua;
function zr() {
  return ua || (ua = 1, process.env.NODE_ENV === "production" ? me.exports = Jr() : me.exports = $r()), me.exports;
}
var O = zr();
function H(a = pr()) {
  return a.min(1);
}
function Ia(a, r, t = {}) {
  const { schema: n = gr(), flags: o } = t;
  return n.matches(new RegExp(`^[${a}]*$`, o), r);
}
function L(a, r, t = {}) {
  const { spaces: n = !1, specialChars: o, ...u } = t;
  let s = `can only contain: ${r}`;
  return n && (a += " ", s += ", spaces"), o && (a += o, s += `, special characters (${o})`), Ia(a, s, u);
}
function F(a, r, t = {}) {
  let { flags: n = "u" } = t;
  return n.includes("u") || (n += "u"), L(a, r, { ...t, flags: n });
}
function Zr(a) {
  return L("a-zA-Z", "ASCII alpha characters (a-z, A-Z)", a);
}
function Qr(a) {
  return L("a-z", "lowercase ASCII alpha characters (a-z)", a);
}
function Xr(a) {
  return L("A-Z", "uppercase ASCII alpha characters (A-Z)", a);
}
function et(a) {
  return L("0-9", "ASCII numbers (0-9)", a);
}
function at(a) {
  return L(
    "a-zA-Z0-9",
    "ASCII alphanumeric characters (a-z, A-Z, 0-9)",
    a
  );
}
function Ra(a) {
  return L(
    "a-z0-9",
    "lowercase ASCII alphanumeric characters (a-z, 0-9)",
    a
  );
}
function Oa(a) {
  return L(
    "A-Z0-9",
    "uppercase ASCII alphanumeric characters (A-Z, 0-9)",
    a
  );
}
function rt(a) {
  return F("\\p{L}", "unicode alpha characters", a);
}
function tt(a) {
  return F(
    "\\p{Ll}",
    "lowercase unicode alpha characters",
    a
  );
}
function nt(a) {
  return F(
    "\\p{Lu}",
    "uppercase unicode alpha characters",
    a
  );
}
function it(a) {
  return F("\\p{N}", "unicode numbers", a);
}
function ie(a) {
  return F(
    "\\p{L}\\p{N}",
    "unicode alphanumeric characters",
    a
  );
}
function ot(a) {
  return F(
    "\\p{Ll}\\p{N}",
    "lowercase unicode alphanumeric characters",
    a
  );
}
function st(a) {
  return F(
    "\\p{Lu}\\p{N}",
    "uppercase unicode alphanumeric characters",
    a
  );
}
function Ne(a, r, t) {
  const { onError: n, ...o } = t || {};
  try {
    return r.validateSync(a, o);
  } catch (u) {
    if (u instanceof pa) {
      if (n) return n(u);
    } else throw u;
  }
}
const tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  asciiAlphaString: Zr,
  asciiAlphanumericString: at,
  asciiNumericString: et,
  buildCharSet: L,
  buildUnicodeCharSet: F,
  lowercaseAsciiAlphaString: Qr,
  lowercaseAsciiAlphanumericString: Ra,
  lowercaseUnicodeAlphaString: tt,
  lowercaseUnicodeAlphanumericString: ot,
  matchesCharSet: Ia,
  numericId: H,
  tryValidateSync: Ne,
  unicodeAlphaString: rt,
  unicodeAlphanumericString: ie,
  unicodeNumericString: it,
  uppercaseAsciiAlphaString: Xr,
  uppercaseAsciiAlphanumericString: Oa,
  uppercaseUnicodeAlphaString: nt,
  uppercaseUnicodeAlphanumericString: st
}, Symbol.toStringTag, { value: "Module" })), ut = () => /* @__PURE__ */ O.jsxs(yr, { alignItems: "center", alignContent: "center", children: [
  /* @__PURE__ */ O.jsx(Pr, { color: "error" }),
  /* @__PURE__ */ O.jsx(Sa, { color: "error.main", children: "Failed to sync data" })
] });
function ct(a, r) {
  if (r.url && Object.entries(r.url).forEach(([t, n]) => {
    a = a.replace(`<${t}>`, String(n));
  }), r.search) {
    const t = [];
    for (const n in r.search) {
      const o = r.search[n];
      if (o !== void 0)
        if (Array.isArray(o))
          for (const u of o) t.push([n, String(u)]);
        else
          t.push([n, String(o)]);
    }
    t.length !== 0 && (a += `?${new URLSearchParams(t).toString()}`);
  }
  return a;
}
function Oe(a) {
  return typeof a == "number" || typeof a == "string";
}
function Pa(a) {
  return { type: a, id: "LIST" };
}
function lt(a, r) {
  const {
    includeListTag: t = !1,
    argKeysAreIds: n = !1,
    id: o = "id"
  } = r || {};
  function u(c, d = t) {
    const f = c.map((S) => ({ type: a, id: String(S) }));
    return d && f.push(Pa(a)), f;
  }
  function s(c) {
    return ge(c, o);
  }
  return (c, d, f) => {
    if (!d) {
      if (f) {
        if (Oe(f)) return u([f]);
        if (Array.isArray(f)) {
          if (f.length && Oe(f[0]))
            return u(f);
        } else if (typeof f == "object" && n)
          return u(Object.keys(f));
      }
      if (c)
        return Array.isArray(c) ? u(c.map(s)) : s(c) !== void 0 ? u([s(c)]) : u(c.data.map(s), !0);
    }
    return u([]);
  };
}
function D(a, r) {
  if (a === r) throw Error("List and detail are the same.");
  return { list: a, detail: r };
}
function dt(a, r, t) {
  const { data: n, isLoading: o, isSuccess: u } = a, s = a.error, {
    loading: c = /* @__PURE__ */ O.jsx(_r, {}),
    error: d = /* @__PURE__ */ O.jsx(ut, {})
  } = t || {};
  if (s)
    return console.error(s), d;
  if (o) return c;
  if (n) return r(n);
  if (u) throw Error("Expected to get data from API but got nothing.");
  return c;
}
function ft(a) {
  return ["GET", "HEAD", "OPTIONS", "TRACE"].includes(a.toUpperCase());
}
const nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildUrl: ct,
  handleResultState: dt,
  isModelId: Oe,
  isSafeHttpMethod: ft,
  listTag: Pa,
  modelUrls: D,
  tagData: lt
}, Symbol.toStringTag, { value: "Module" })), on = {
  user: D("users/", "users/<id>/"),
  teacher: D("users/teachers/", "users/teachers/<id>/"),
  student: D("users/students/", "users/students/<id>/"),
  school: D("schools/", "schools/<id>/"),
  class: D("classes/", "classes/<id>/"),
  otpBypassToken: D("otp-bypass-tokens/", "otp-bypass-tokens/<id>/"),
  authFactor: D("auth-factors/", "auth-factors/<id>/")
}, E = {
  user: H(),
  teacher: H(),
  student: H(),
  school: H(),
  klass: Oa().length(5),
  authFactor: H(),
  otpBypassToken: H()
}, $ = {
  id: E.teacher.required(),
  school: E.school,
  is_admin: _.bool().required()
}, wa = {
  id: E.student.required(),
  school: E.school.required(),
  klass: E.klass.required(),
  auto_gen_password: _.string().required()
}, I = {
  id: E.user.required(),
  requesting_to_join_class: E.klass,
  first_name: ie({
    spaces: !0,
    specialChars: "-'"
  }).required().max(150),
  last_name: ie({
    spaces: !0,
    specialChars: "-'"
  }).max(150),
  last_login: _.date(),
  email: _.string().email(),
  password: _.string().required(),
  is_staff: _.bool().required(),
  is_active: _.bool().required(),
  date_joined: _.date().required(),
  teacher: _.object($).optional(),
  student: _.object(wa).optional()
}, Le = {
  ...I,
  password: I.password.min(10, "must be at least 10 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit").matches(
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
    "must contain at least one special character"
  ),
  email: I.email.required(),
  last_name: I.last_name.required(),
  teacher: I.teacher.required(),
  student: _.string().oneOf([void 0])
}, z = {
  ...$,
  school: $.school.required()
}, Ge = {
  ...Le,
  teacher: _.object(z)
}, Na = {
  ...z,
  is_admin: z.is_admin.isTrue()
}, ht = {
  ...Ge,
  teacher: _.object(Na)
}, La = {
  ...z,
  is_admin: z.is_admin.isFalse()
}, mt = {
  ...Ge,
  teacher: _.object(La)
}, Ga = {
  ...$,
  school: _.string().oneOf([void 0]),
  is_admin: $.is_admin.isFalse()
}, pt = {
  ...Le,
  teacher: _.object(Ga)
}, gt = {
  ...I,
  password: I.password.min(6, "must be at least 6 characters long"),
  email: I.email.oneOf([void 0]),
  last_name: I.last_name.oneOf([void 0]),
  teacher: _.string().oneOf([void 0]),
  student: I.student.required()
}, St = {
  ...I,
  password: I.password.min(8, "must be at least 8 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit"),
  email: I.email.required(),
  last_name: I.last_name.required(),
  teacher: _.string().oneOf([void 0]),
  student: _.string().oneOf([void 0])
}, yt = {
  ...$,
  user: E.user.required()
}, _t = {
  ...z,
  user: E.user.required()
}, bt = {
  ...Na,
  user: E.user.required()
}, vt = {
  ...La,
  user: E.user.required()
}, Et = {
  ...Ga,
  user: E.user.required()
}, Ct = {
  ...wa,
  user: E.user.required()
}, Tt = {
  id: E.school.required(),
  name: ie({
    spaces: !0,
    specialChars: "'."
  }).required().max(200),
  country: _.string().oneOf(Ea),
  uk_county: _.string().oneOf(Ca)
}, At = {
  id: E.klass.required(),
  teacher: E.teacher.required(),
  school: E.school.required(),
  name: ie({
    spaces: !0,
    specialChars: "-_"
  }).required().max(200),
  read_classmates_data: _.bool().required(),
  receive_requests_until: _.date()
}, Mt = {
  id: E.authFactor.required(),
  user: E.user.required(),
  type: _.string().oneOf(["otp"]).required()
}, It = {
  id: E.otpBypassToken.required(),
  user: E.user.required(),
  token: Ra().required().length(8)
}, sn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adminSchoolTeacher: bt,
  adminSchoolTeacherUser: ht,
  authFactor: Mt,
  indyUser: St,
  klass: At,
  nonAdminSchoolTeacher: vt,
  nonAdminSchoolTeacherUser: mt,
  nonSchoolTeacher: Et,
  nonSchoolTeacherUser: pt,
  otpBypassToken: It,
  school: Tt,
  schoolTeacher: _t,
  schoolTeacherUser: Ge,
  student: Ct,
  studentUser: gt,
  teacher: yt,
  teacherUser: Le,
  user: I
}, Symbol.toStringTag, { value: "Module" }));
function un(a) {
  const { page: r = 0, limit: t = 150 } = a || {}, [n, o] = Z({
    page: r,
    limit: t,
    offset: r * t
  });
  return [n, (s) => {
    o(({ page: c, limit: d }) => {
      const f = typeof s == "function" ? s({ page: c, limit: d }) : s;
      let S = f.page;
      const C = f.limit;
      return C !== d && (S = 0), { page: S, limit: C, offset: S * C };
    });
  }];
}
function Ba(a) {
  return typeof a == "object" && a !== null && "status" in a && a.status === 400 && "data" in a && typeof a.data == "object" && a.data !== null;
}
function ka(a, r) {
  if (!Ba(a)) throw a;
  const t = Object.fromEntries(
    Object.entries(a.data).map(([n, o]) => (Array.isArray(o) && (o = o.join(". ")), [n, o]))
  );
  r(t);
}
function Rt(a, r, t) {
  const {
    include: n,
    onlyDirtyValues: o = !1,
    then: u,
    catch: s,
    finally: c
  } = t || {};
  let { exclude: d = [] } = t || {};
  return (f, S) => {
    let C = t && t.clean ? t.clean(f) : f;
    o && (d = [
      ...d,
      ...Fa(f, r).filter(
        (b) => !d.includes(b)
      )
    ]), n && (d = d.filter((b) => !n.includes(b))), d.length && (C = Aa(C, d)), a(C).unwrap().then((b) => {
      u && u(b, f, S);
    }).catch((b) => {
      s && s(b, f, S), ka(b, S.setErrors);
    }).finally(() => {
      c && c(f, S);
    });
  };
}
function Ot(a, r) {
  return async (t) => {
    try {
      await a.validate(t, r);
    } catch (n) {
      if (n instanceof pa)
        return n.errors.join(". ");
      throw n;
    }
  };
}
function ja(a, r, t) {
  return t || (t = Ta(a)), Object.fromEntries(
    t.map((n) => [n, Da(a, r, n)])
  );
}
function Da(a, r, t) {
  const n = ge(a, t), o = ge(r, t);
  return n !== o;
}
function Fa(a, r, t) {
  return Object.entries(ja(a, r, t)).filter(
    ([
      n,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      o
    ]) => !o
  ).map(([n]) => n);
}
const cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCleanNames: Fa,
  getDirty: ja,
  isDirty: Da,
  isFormError: Ba,
  schemaToFieldValidator: Ot,
  setFormErrors: ka,
  submitForm: Rt
}, Symbol.toStringTag, { value: "Module" }));
var pe = { exports: {} }, Pt = pe.exports, ca;
function wt() {
  return ca || (ca = 1, (function(a, r) {
    (function(t, n) {
      a.exports = n(Sr);
    })(Pt, (function(t) {
      function n(s) {
        return s && typeof s == "object" && "default" in s ? s : { default: s };
      }
      var o = n(t), u = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(s) {
        var c = ["th", "st", "nd", "rd"], d = s % 100;
        return "[" + s + (c[(d - 20) % 10] || c[d] || c[0]) + "]";
      } };
      return o.default.locale(u, null, !0), u;
    }));
  })(pe)), pe.exports;
}
wt();
const ln = ({ href: a, hrefInNewTab: r = !1, ...t }) => {
  let {
    onClick: n,
    style: o = {},
    ...u
    // eslint-disable-line prefer-const
  } = t;
  return o.width === void 0 && (o.width = "100%"), a !== void 0 && (o = { ...o, cursor: "pointer" }, r ? n = () => {
    _a(a);
  } : n = () => {
    window.location.replace(a);
  }), /* @__PURE__ */ O.jsx(br, { component: "img", onClick: n, style: o, ...u });
}, Nt = {
  500: "#E0004D",
  400: "#EE0857",
  300: "#FA1664"
}, Lt = {
  500: "#F6BE00"
}, Gt = {
  500: "#00A3E0"
}, {
  palette: { augmentColor: J }
} = vr(), la = {
  main: Nt[500],
  contrastText: "#fff"
}, da = {
  main: Gt[500],
  contrastText: "#fff"
}, fa = {
  main: Lt[500],
  contrastText: "#000"
}, dn = {
  // primary / teacher
  primary: la,
  teacher: J({ color: la }),
  // secondary / indy
  secondary: fa,
  indy: J({ color: fa }),
  // tertiary / student
  tertiary: J({ color: da }),
  student: J({ color: da }),
  // other
  white: J({ color: { main: "#fff" } }),
  black: J({ color: { main: "#000" } }),
  info: { main: "#f1ecec" },
  error: { main: "#d50000" }
};
function Be() {
  const a = Er(), r = Ua();
  return (t, n = void 0) => {
    if (typeof t == "number") a(t);
    else {
      const { next: o = !0, ...u } = n || {};
      a(
        o && "next" in r ? r.next : t,
        u
      );
    }
  };
}
function xa() {
  return Cr();
}
function Ua(a, r) {
  const t = Object.fromEntries(Tr()[0].entries());
  return a ? Ne(t, ga(a), r) : t;
}
function Bt(a, r) {
  const t = Ar();
  return a ? Ne(t, ga(a), r) : t;
}
function fn({
  shape: a,
  children: r,
  onValidationError: t,
  onValidationSuccess: n = () => {
  },
  validateOptions: o
}) {
  const u = Bt(a, o), s = Be();
  return N(
    () => {
      u ? n(u) : t(s);
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), u ? r(u) : /* @__PURE__ */ O.jsx(O.Fragment, {});
}
function Se(a = _e) {
  return Ir(Dr) ? JSON.parse(ne.get(a)) : void 0;
}
Se.predefine = (a = _e) => () => Se(a);
function hn(a, r = {}) {
  const { userType: t, next: n = !0 } = r, { pathname: o } = xa(), u = Be(), s = Se(), c = t && (!s || s.user_type !== t);
  return N(() => {
    c && u({
      pathname: "/login" + {
        teacher: "/teacher",
        student: "/student",
        indy: "/independent"
      }[t],
      search: n ? Mr({ next: o }).toString() : void 0
    });
  }, [u, c, t, n, o]), c ? /* @__PURE__ */ O.jsx(O.Fragment, {}) : typeof a == "function" ? a(s) : a;
}
function kt(a, r = 32, t = "state") {
  const n = we(a, t), o = sessionStorage.getItem(n), [u, s] = Z();
  N(() => {
    let d;
    o && o.length === r ? d = o : (d = Pe(r), sessionStorage.setItem(n, d)), s(d);
  }, [n, o, r]);
  const c = ma(() => {
    sessionStorage.removeItem(n), s(void 0);
  }, [n]);
  return [u, c];
}
function jt(a, r = 128, t = "codeChallenge") {
  const n = we(a, t), o = sessionStorage.getItem(n), [u, s] = Z();
  N(() => {
    let d;
    if (o) {
      const f = JSON.parse(o);
      typeof f == "object" && f && "verifier" in f && typeof f.verifier == "string" && f.verifier.length === r && "challenge" in f && typeof f.challenge == "string" && "method" in f && f.method === "S256" && (d = {
        verifier: f.verifier,
        challenge: f.challenge,
        method: f.method
      });
    }
    d ? s(d) : Ma(r).then((f) => {
      sessionStorage.setItem(
        n,
        JSON.stringify(f)
      ), s(f);
    }).catch((f) => {
      f && console.error(f);
    });
  }, [n, o, r]);
  const c = ma(() => {
    sessionStorage.removeItem(n), s(void 0);
  }, [n]);
  return [u, c];
}
function Dt({
  provider: a,
  authUri: r,
  clientId: t,
  redirectUri: n,
  scope: o,
  responseType: u = "code",
  accessType: s = "offline",
  prompt: c,
  useSessionMetadata: d,
  useLoginMutation: f,
  onCreateSession: S,
  onRetrieveSession: C
}) {
  const [b, x] = kt(a), [
    {
      verifier: U,
      challenge: oe,
      method: se
    } = {},
    w
  ] = jt(a), [
    A,
    {
      originalArgs: G = {},
      isLoading: ue,
      isError: ce
    }
  ] = f(), Q = d(), Y = Be(), B = Ua({ code: _.string(), state: _.string() }) || {}, k = xa().state || {};
  if (N(() => {
    B.code && B.state && Y(".", {
      // Removes the URL containing the search params from the history stack.
      replace: !0,
      // Ensure we don't break the auth flow by navigating to another page.
      next: !1,
      // Store the search params in the page's state instead.
      state: { code: B.code, state: B.state }
    });
  }, [B.code, B.state, Y]), N(() => {
    Q ? C(Q) : (
      // If the state and code verifier have been generated...
      b && U && // ...and the page's state contains a code...
      k.code && // ...and the page's state contains the stored state...
      k.state === b && // ...and the login endpoint was not called with the current values or has
      // not returned an error...
      (G.code !== k.code || G.code_verifier !== U || G.redirect_uri !== n || !ce) && // ...and the login endpoint is not currently being called...
      !ue && A({
        code: k.code,
        code_verifier: U,
        redirect_uri: n
      }).unwrap().then(S).catch(() => {
        Y(".", {
          replace: !0,
          state: {
            notifications: [
              {
                props: {
                  error: !0,
                  children: "Failed to login. Please try again."
                }
              }
            ]
          }
        });
      }).finally(() => {
        x(), w();
      })
    );
  }, [
    Y,
    n,
    // State
    b,
    k.state,
    x,
    // Code
    U,
    k.code,
    w,
    // Login
    A,
    ue,
    ce,
    G.code,
    G.code_verifier,
    G.redirect_uri,
    // Session
    Q,
    S,
    C
  ]), b && oe && se) {
    const X = {
      client_id: t,
      redirect_uri: n,
      scope: o,
      response_type: u,
      access_type: s,
      state: b,
      code_challenge: oe,
      code_challenge_method: se
    };
    return c && (X.prompt = c), [
      r + "?" + new URLSearchParams(X).toString(),
      X
    ];
  }
  return [];
}
const mn = (a) => Dt(
  // @ts-expect-error value is assignable
  "useSessionMetadata" in a ? a : { ...a, useSessionMetadata: Se }
);
function pn({
  props: a,
  attrs: r,
  eventTypes: t
}) {
  const [n, o] = Z();
  return N(() => {
    if (document.querySelector(`script[src="${a.src}"]`))
      throw Error("already exists");
    const u = document.createElement("script");
    Object.entries(a).forEach(([c, d]) => {
      u[c] = d;
    }), r !== void 0 && Object.entries(r).forEach(([c, d]) => {
      u.setAttribute(c, d);
    });
    function s(c) {
      o(c.type);
    }
    return t?.forEach((c) => {
      u.addEventListener(c, s);
    }), document.head.appendChild(u), () => {
      t?.forEach((c) => {
        u.removeEventListener(c, s);
      }), document.head.removeChild(u);
    };
  }, [t, r, a]), n;
}
function Ft(a, r = 1) {
  if (a <= 0) throw Error("seconds must be > 0");
  if (r <= 0) throw Error("interval must be > 0");
  const [t, n] = Z(a);
  return N(() => {
    const o = setInterval(() => {
      n((u) => (u = u - r, u < 0 ? 0 : u));
    }, r * 1e3);
    return () => {
      clearInterval(o);
    };
  }, [r]), [t, n];
}
function gn(a, r, t, n = {}) {
  const { options: o, deps: u = [] } = n;
  N(
    () => (a.addEventListener(r, t, o), () => {
      a.removeEventListener(r, t, o);
    }),
    // TODO: simplify this hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    u
  );
}
const Sn = ({
  seconds: a,
  start: r = !0,
  onEnd: t,
  ...n
}) => {
  a = Math.floor(a);
  const o = Ft(a)[0], [u, s] = Z(!r);
  o === 0 && !u && (s(!0), t()), a = Math.floor(o % 60);
  const c = Math.floor(o / 60);
  return /* @__PURE__ */ O.jsx(O.Fragment, { children: o > 0 && /* @__PURE__ */ O.jsxs(Sa, { ...n, children: [
    c > 0 && `${c} ${c > 1 ? "mins" : "min"} `,
    a > 0 && `${a} ${a > 1 ? "secs" : "sec"}`
  ] }) });
};
export {
  Ne as $,
  mn as A,
  pn as B,
  Sn as C,
  Ft as D,
  gn as E,
  Be as F,
  xa as G,
  Ua as H,
  ln as I,
  Bt as J,
  fn as K,
  Nr as L,
  Lr as M,
  Gr as N,
  _e as O,
  kr as P,
  ya as Q,
  ut as R,
  zt as S,
  Ot as T,
  ge as U,
  Kr as V,
  Ea as W,
  I as X,
  Rt as Y,
  Ta as Z,
  Ca as _,
  Qt as a,
  Fr as a0,
  dt as a1,
  ct as b,
  Hr as c,
  dn as d,
  Gt as e,
  rn as f,
  Yr as g,
  nn as h,
  ft as i,
  O as j,
  an as k,
  Xt as l,
  cn as m,
  en as n,
  tn as o,
  Nt as p,
  Zt as q,
  sn as r,
  Lt as s,
  lt as t,
  on as u,
  un as v,
  Se as w,
  hn as x,
  kt as y,
  jt as z
};
//# sourceMappingURL=Countdown-CrHWwDog.js.map
