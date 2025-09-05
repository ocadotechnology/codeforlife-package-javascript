import { fetchBaseQuery as ov, createApi as av } from "@reduxjs/toolkit/query/react";
import ci from "js-cookie";
import { buildCreateSlice as iv, asyncThunkCreator as sv, isAction as bm, createAction as rn, nanoid as vm, formatProdErrorMessage as os, createSelector as lv, createNextState as Gl, createAsyncThunk as Uu, createSlice as Nr, prepareAutoBatched as pn, isAnyOf as vs, isFulfilled as Cr, isRejectedWithValue as Yl, combineReducers as uv, isPlainObject as bl, SHOULD_AUTOBATCH as ym, isAllOf as Js, isRejected as Kl, isPending as gm, isAsyncThunkAction as $u, configureStore as cv } from "@reduxjs/toolkit";
import * as di from "react";
import Hr, { useState as ot, useEffect as Be, forwardRef as dv, Children as Rm, useRef as Em, useCallback as Cm, isValidElement as fv, cloneElement as pv } from "react";
import { Stack as gr, Typography as bt, CircularProgress as _m, Button as Or, Autocomplete as mv, TextField as Ql, FormControl as hv, FormControlLabel as bv, Checkbox as vv, FormHelperText as wm, InputAdornment as Zl, IconButton as Pi, Box as ks, Container as Tm, createTheme as Xl, Link as Sm, ListItem as yv, Tab as Pm, Tabs as gv, TableContainer as Rv, Table as Ev, TableHead as Cv, TableRow as xm, TableCell as ys, TableBody as _v, ThemeProvider as qm, CssBaseline as wv, Tooltip as Tv, useScrollTrigger as Sv, AppBar as Pv, Toolbar as xv, List as qv, Unstable_Grid2 as Hu, TablePagination as Mv, Dialog as Mm, Divider as Ov, buttonClasses as vl, typographyClasses as Om, listItemTextClasses as Av, tabClasses as yl, tableCellClasses as gl, inputClasses as $i, formHelperTextClasses as Iv, formLabelClasses as kv, filledInputClasses as Dv, svgIconClasses as Nv, outlinedInputClasses as Lv, inputBaseClasses as Hi, responsiveFontSizes as Am } from "@mui/material";
import * as xe from "yup";
import { number as Im, string as Ar, ValidationError as km, bool as jv, date as Fv, array as Bv, object as Jl } from "yup";
import { SyncProblem as Uv, EmailOutlined as $v, PersonOutlined as Hv, Visibility as Vv, VisibilityOff as zv, ErrorOutline as Wv, InfoOutlined as Gv, CloseOutlined as Yv, ChevronLeft as Kv, ChevronRight as Qv, ContentCopy as Zv, Download as Xv, Circle as Jv, Hexagon as ey } from "@mui/icons-material";
import { Field as nn, Formik as ty, Form as ry } from "formik";
import $e from "dayjs";
import { LocalizationProvider as ny, DatePicker as oy } from "@mui/x-date-pickers";
import { useNavigate as Dm, useLocation as Nm, useSearchParams as ay, useParams as Lm, createSearchParams as iy, generatePath as jm, Link as xi, BrowserRouter as sy, Routes as ly } from "react-router-dom";
import { useSelector as uy, Provider as Fm } from "react-redux";
import "@mui/material/styles/ThemeProvider";
import "@mui/material/OverridableComponent";
import "@mui/material/styles/createTypography";
import "@mui/material/styles/overrides";
import Rr from "react-dom";
const cy = [
  // These are the tags for the common models used throughout our system.
  // https://github.com/ocadotechnology/codeforlife-package-python/tree/main/codeforlife/user/models
  // NOTE: Don't use the "Teacher" and "Student" tags. Use "User" instead.
  "User",
  "School",
  "Class",
  "AuthFactor"
], dy = {}, Ds = dy, fy = Ds.VITE_SERVICE_NAME ?? "REPLACE_ME", py = Ds.VITE_SERVICE_API_URL ?? "http://localhost:8000", my = `${fy}_csrftoken`, hy = Ds.VITE_SESSION_COOKIE_NAME ?? "session_key", Ns = Ds.VITE_SESSION_METADATA_COOKIE_NAME ?? "session_metadata", by = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, qi = by, YP = qi.MODE, KP = qi.BASE_URL, QP = qi.PROD, ZP = qi.DEV, XP = qi.SSR, vy = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, JP = new Proxy(vy, {
  get: (e, t) => e[`VITE_${t}`]
}), yy = iv({
  creators: { asyncThunk: sv }
}), gy = {
  isLoggedIn: !!ci.get(Ns)
}, Bm = yy({
  name: "session",
  initialState: gy,
  reducers: (e) => ({
    login: e.reducer((t) => {
      t.isLoggedIn = !0;
    }),
    logout: e.reducer((t) => {
      t.isLoggedIn = !1;
    })
  }),
  selectors: {
    selectIsLoggedIn: (e) => e.isLoggedIn
  }
}), { login: Ry, logout: Ey } = Bm.actions, { selectIsLoggedIn: Cy } = Bm.selectors;
function ex(e, t = "session/login/") {
  return e.mutation({
    query: (r) => ({ url: t, method: "POST", body: r }),
    async onQueryStarted(r, { dispatch: n, queryFulfilled: o }) {
      try {
        await o, n(Ry());
      } catch (a) {
        console.error("Failed to call login endpoint...", a);
      }
    }
  });
}
function _y(e, t, r = "session/logout/") {
  return t.mutation({
    query: () => ({ url: r, method: "POST" }),
    async onQueryStarted(n, { dispatch: o, queryFulfilled: a }) {
      try {
        await a;
      } catch (i) {
        console.error("Failed to call logout endpoint...", i);
      } finally {
        o(Ey()), o(e.util.resetApiState());
      }
    }
  });
}
function Um(e, t = "_blank") {
  window.open(e, t);
}
function $m(e, t) {
  return (...r) => {
    e.before !== void 0 && e.before(...r);
    let n;
    return t !== void 0 && (n = t(...r)), e.after !== void 0 && e.after(...r), n;
  };
}
function Hm(e) {
  Object.entries(e).forEach(([t, r]) => {
    typeof r == "object" && Hm(r);
    const n = t.replace(
      /_+[a-z]/g,
      (o) => o[o.length - 1].toUpperCase()
    );
    delete e[t], e[n] = r;
  });
}
function Vm(e) {
  Object.entries(e).forEach(([t, r]) => {
    typeof r == "object" && Vm(r);
    const n = t.replace(
      /[A-Z]/g,
      (o) => `_${o.toLowerCase()}`
    );
    delete e[t], e[n] = r;
  });
}
const wy = new Date(0, 0, 0), eu = [
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
], Ty = [
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
], zm = {
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
}, tu = [
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
function je(e, t) {
  typeof t == "string" && (t = t.split("."));
  let r = e;
  for (let n = 0; n < t.length; n++)
    if (r = r[t[n]], n !== t.length - 1 && (typeof r != "object" || r === null))
      return;
  return r;
}
function Sy(e, t = ".") {
  function r(n, o) {
    return Object.fromEntries(
      Object.entries(n).map(([a, i]) => {
        const s = [...o, a];
        return typeof i == "object" && i !== null && (i = r(i, s)), [s.join(t), i];
      })
    );
  }
  return r(e, []);
}
function ru(e, t = ".") {
  function r(n, o) {
    return Object.entries(n).map(([a, i]) => {
      const s = [...o, a], l = s.join(t);
      return typeof i == "object" && i !== null ? [l, ...r(i, s)] : [l];
    }).flat();
  }
  return r(e, []);
}
function Wm(e, t, r = ".") {
  function n(o, a) {
    return Object.fromEntries(
      Object.entries(o).map(([i, s]) => {
        const l = [...a, i];
        return typeof s == "object" && s !== null && !(s instanceof Date) && (s = n(s, l)), t.includes(l.join(r)) ? [] : [i, s];
      }).filter((i) => i.length)
    );
  }
  return t.length ? n(e, []) : e;
}
function nu(e, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") {
  const r = window.crypto.getRandomValues(new Uint8Array(e));
  let n = "";
  for (let o = 0; o < e; o++)
    n += t.charAt(r[o] % t.length);
  return n;
}
const Py = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  COUNTRIES: Ty,
  COUNTRY_ISO_CODES: eu,
  COUNTRY_ISO_CODE_MAPPING: zm,
  MIN_DATE: wy,
  UK_COUNTIES: tu,
  camelCaseToSnakeCase: Vm,
  excludeKeyPaths: Wm,
  generateSecureRandomString: nu,
  getKeyPaths: ru,
  getNestedProperty: je,
  openInNewTab: Um,
  snakeCaseToCamelCase: Hm,
  withKeyPaths: Sy,
  wrap: $m
}, Symbol.toStringTag, { value: "Module" }));
function Gm() {
  ci.remove(hy), ci.remove(Ns);
}
function as() {
  return ci.get(my);
}
function ou(e, t) {
  return `oauth2.${e}.${t}`;
}
const xy = ["S256"], qy = [
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
async function Ym(e) {
  const t = nu(e), r = new TextEncoder().encode(t), n = await window.crypto.subtle.digest("SHA-256", r);
  return {
    verifier: t,
    challenge: btoa(String.fromCharCode(...new Uint8Array(n))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
    method: "S256"
  };
}
const My = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OAUTH2_CODE_CHALLENGE_LENGTHS: qy,
  OAUTH2_CODE_CHALLENGE_METHODS: xy,
  generateOAuth2CodeChallenge: Ym,
  getCsrfCookie: as,
  logout: Gm,
  makeOAuth2StorageKey: ou
}, Symbol.toStringTag, { value: "Module" }));
function on(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vi = { exports: {} }, mn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vu;
function Oy() {
  if (Vu) return mn;
  Vu = 1;
  var e = Hr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, u) {
    var p, f = {}, c = null, m = null;
    u !== void 0 && (c = "" + u), l.key !== void 0 && (c = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (p in l) n.call(l, p) && !a.hasOwnProperty(p) && (f[p] = l[p]);
    if (s && s.defaultProps) for (p in l = s.defaultProps, l) f[p] === void 0 && (f[p] = l[p]);
    return { $$typeof: t, type: s, key: c, ref: m, props: f, _owner: o.current };
  }
  return mn.Fragment = r, mn.jsx = i, mn.jsxs = i, mn;
}
var hn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zu;
function Ay() {
  return zu || (zu = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Hr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), c = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, y = "@@iterator";
    function C(x) {
      if (x === null || typeof x != "object")
        return null;
      var H = h && x[h] || x[y];
      return typeof H == "function" ? H : null;
    }
    var d = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(x) {
      {
        for (var H = arguments.length, Z = new Array(H > 1 ? H - 1 : 0), oe = 1; oe < H; oe++)
          Z[oe - 1] = arguments[oe];
        b("error", x, Z);
      }
    }
    function b(x, H, Z) {
      {
        var oe = d.ReactDebugCurrentFrame, _e = oe.getStackAddendum();
        _e !== "" && (H += "%s", Z = Z.concat([_e]));
        var Te = Z.map(function(he) {
          return String(he);
        });
        Te.unshift("Warning: " + H), Function.prototype.apply.call(console[x], console, Te);
      }
    }
    var E = !1, w = !1, g = !1, v = !1, _ = !1, A;
    A = Symbol.for("react.module.reference");
    function O(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === n || x === a || _ || x === o || x === u || x === p || v || x === m || E || w || g || typeof x == "object" && x !== null && (x.$$typeof === c || x.$$typeof === f || x.$$typeof === i || x.$$typeof === s || x.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === A || x.getModuleId !== void 0));
    }
    function q(x, H, Z) {
      var oe = x.displayName;
      if (oe)
        return oe;
      var _e = H.displayName || H.name || "";
      return _e !== "" ? Z + "(" + _e + ")" : Z;
    }
    function I(x) {
      return x.displayName || "Context";
    }
    function T(x) {
      if (x == null)
        return null;
      if (typeof x.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof x == "function")
        return x.displayName || x.name || null;
      if (typeof x == "string")
        return x;
      switch (x) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case s:
            var H = x;
            return I(H) + ".Consumer";
          case i:
            var Z = x;
            return I(Z._context) + ".Provider";
          case l:
            return q(x, x.render, "ForwardRef");
          case f:
            var oe = x.displayName || null;
            return oe !== null ? oe : T(x.type) || "Memo";
          case c: {
            var _e = x, Te = _e._payload, he = _e._init;
            try {
              return T(he(Te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, N = 0, Y, G, Q, K, se, ne, we;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function be() {
      {
        if (N === 0) {
          Y = console.log, G = console.info, Q = console.warn, K = console.error, se = console.group, ne = console.groupCollapsed, we = console.groupEnd;
          var x = {
            configurable: !0,
            enumerable: !0,
            value: W,
            writable: !0
          };
          Object.defineProperties(console, {
            info: x,
            log: x,
            warn: x,
            error: x,
            group: x,
            groupCollapsed: x,
            groupEnd: x
          });
        }
        N++;
      }
    }
    function X() {
      {
        if (N--, N === 0) {
          var x = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, x, {
              value: Y
            }),
            info: k({}, x, {
              value: G
            }),
            warn: k({}, x, {
              value: Q
            }),
            error: k({}, x, {
              value: K
            }),
            group: k({}, x, {
              value: se
            }),
            groupCollapsed: k({}, x, {
              value: ne
            }),
            groupEnd: k({}, x, {
              value: we
            })
          });
        }
        N < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = d.ReactCurrentDispatcher, me;
    function le(x, H, Z) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (_e) {
            var oe = _e.stack.trim().match(/\n( *(at )?)/);
            me = oe && oe[1] || "";
          }
        return `
` + me + x;
      }
    }
    var M = !1, z;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      z = new B();
    }
    function J(x, H) {
      if (!x || M)
        return "";
      {
        var Z = z.get(x);
        if (Z !== void 0)
          return Z;
      }
      var oe;
      M = !0;
      var _e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Te;
      Te = ue.current, ue.current = null, be();
      try {
        if (H) {
          var he = function() {
            throw Error();
          };
          if (Object.defineProperty(he.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(he, []);
            } catch (Ge) {
              oe = Ge;
            }
            Reflect.construct(x, [], he);
          } else {
            try {
              he.call();
            } catch (Ge) {
              oe = Ge;
            }
            x.call(he.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ge) {
            oe = Ge;
          }
          x();
        }
      } catch (Ge) {
        if (Ge && oe && typeof Ge.stack == "string") {
          for (var pe = Ge.stack.split(`
`), ze = oe.stack.split(`
`), Ae = pe.length - 1, Ie = ze.length - 1; Ae >= 1 && Ie >= 0 && pe[Ae] !== ze[Ie]; )
            Ie--;
          for (; Ae >= 1 && Ie >= 0; Ae--, Ie--)
            if (pe[Ae] !== ze[Ie]) {
              if (Ae !== 1 || Ie !== 1)
                do
                  if (Ae--, Ie--, Ie < 0 || pe[Ae] !== ze[Ie]) {
                    var Je = `
` + pe[Ae].replace(" at new ", " at ");
                    return x.displayName && Je.includes("<anonymous>") && (Je = Je.replace("<anonymous>", x.displayName)), typeof x == "function" && z.set(x, Je), Je;
                  }
                while (Ae >= 1 && Ie >= 0);
              break;
            }
        }
      } finally {
        M = !1, ue.current = Te, X(), Error.prepareStackTrace = _e;
      }
      var St = x ? x.displayName || x.name : "", Pt = St ? le(St) : "";
      return typeof x == "function" && z.set(x, Pt), Pt;
    }
    function ee(x, H, Z) {
      return J(x, !1);
    }
    function re(x) {
      var H = x.prototype;
      return !!(H && H.isReactComponent);
    }
    function ce(x, H, Z) {
      if (x == null)
        return "";
      if (typeof x == "function")
        return J(x, re(x));
      if (typeof x == "string")
        return le(x);
      switch (x) {
        case u:
          return le("Suspense");
        case p:
          return le("SuspenseList");
      }
      if (typeof x == "object")
        switch (x.$$typeof) {
          case l:
            return ee(x.render);
          case f:
            return ce(x.type, H, Z);
          case c: {
            var oe = x, _e = oe._payload, Te = oe._init;
            try {
              return ce(Te(_e), H, Z);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, ve = {}, qe = d.ReactDebugCurrentFrame;
    function Ue(x) {
      if (x) {
        var H = x._owner, Z = ce(x.type, x._source, H ? H.type : null);
        qe.setExtraStackFrame(Z);
      } else
        qe.setExtraStackFrame(null);
    }
    function ft(x, H, Z, oe, _e) {
      {
        var Te = Function.call.bind(ae);
        for (var he in x)
          if (Te(x, he)) {
            var pe = void 0;
            try {
              if (typeof x[he] != "function") {
                var ze = Error((oe || "React class") + ": " + Z + " type `" + he + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof x[he] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ze.name = "Invariant Violation", ze;
              }
              pe = x[he](H, he, oe, Z, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ae) {
              pe = Ae;
            }
            pe && !(pe instanceof Error) && (Ue(_e), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", Z, he, typeof pe), Ue(null)), pe instanceof Error && !(pe.message in ve) && (ve[pe.message] = !0, Ue(_e), R("Failed %s type: %s", Z, pe.message), Ue(null));
          }
      }
    }
    var Wt = Array.isArray;
    function vt(x) {
      return Wt(x);
    }
    function Gt(x) {
      {
        var H = typeof Symbol == "function" && Symbol.toStringTag, Z = H && x[Symbol.toStringTag] || x.constructor.name || "Object";
        return Z;
      }
    }
    function Yt(x) {
      try {
        return Kt(x), !1;
      } catch {
        return !0;
      }
    }
    function Kt(x) {
      return "" + x;
    }
    function yt(x) {
      if (Yt(x))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Gt(x)), Kt(x);
    }
    var _t = d.ReactCurrentOwner, pt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qt, S;
    function U(x) {
      if (ae.call(x, "ref")) {
        var H = Object.getOwnPropertyDescriptor(x, "ref").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.ref !== void 0;
    }
    function F(x) {
      if (ae.call(x, "key")) {
        var H = Object.getOwnPropertyDescriptor(x, "key").get;
        if (H && H.isReactWarning)
          return !1;
      }
      return x.key !== void 0;
    }
    function te(x, H) {
      typeof x.ref == "string" && _t.current;
    }
    function ye(x, H) {
      {
        var Z = function() {
          Qt || (Qt = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(x, "key", {
          get: Z,
          configurable: !0
        });
      }
    }
    function ge(x, H) {
      {
        var Z = function() {
          S || (S = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
        };
        Z.isReactWarning = !0, Object.defineProperty(x, "ref", {
          get: Z,
          configurable: !0
        });
      }
    }
    var de = function(x, H, Z, oe, _e, Te, he) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: x,
        key: H,
        ref: Z,
        props: he,
        // Record the component responsible for creating this element.
        _owner: Te
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _e
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Ce(x, H, Z, oe, _e) {
      {
        var Te, he = {}, pe = null, ze = null;
        Z !== void 0 && (yt(Z), pe = "" + Z), F(H) && (yt(H.key), pe = "" + H.key), U(H) && (ze = H.ref, te(H, _e));
        for (Te in H)
          ae.call(H, Te) && !pt.hasOwnProperty(Te) && (he[Te] = H[Te]);
        if (x && x.defaultProps) {
          var Ae = x.defaultProps;
          for (Te in Ae)
            he[Te] === void 0 && (he[Te] = Ae[Te]);
        }
        if (pe || ze) {
          var Ie = typeof x == "function" ? x.displayName || x.name || "Unknown" : x;
          pe && ye(he, Ie), ze && ge(he, Ie);
        }
        return de(x, pe, ze, _e, oe, _t.current, he);
      }
    }
    var Ve = d.ReactCurrentOwner, We = d.ReactDebugCurrentFrame;
    function it(x) {
      if (x) {
        var H = x._owner, Z = ce(x.type, x._source, H ? H.type : null);
        We.setExtraStackFrame(Z);
      } else
        We.setExtraStackFrame(null);
    }
    var ur;
    ur = !1;
    function cr(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }
    function wt() {
      {
        if (Ve.current) {
          var x = T(Ve.current.type);
          if (x)
            return `

Check the render method of \`` + x + "`.";
        }
        return "";
      }
    }
    function un(x) {
      return "";
    }
    var Zt = {};
    function Dr(x) {
      {
        var H = wt();
        if (!H) {
          var Z = typeof x == "string" ? x : x.displayName || x.name;
          Z && (H = `

Check the top-level render call using <` + Z + ">.");
        }
        return H;
      }
    }
    function V(x, H) {
      {
        if (!x._store || x._store.validated || x.key != null)
          return;
        x._store.validated = !0;
        var Z = Dr(H);
        if (Zt[Z])
          return;
        Zt[Z] = !0;
        var oe = "";
        x && x._owner && x._owner !== Ve.current && (oe = " It was passed a child from " + T(x._owner.type) + "."), it(x), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Z, oe), it(null);
      }
    }
    function dr(x, H) {
      {
        if (typeof x != "object")
          return;
        if (vt(x))
          for (var Z = 0; Z < x.length; Z++) {
            var oe = x[Z];
            cr(oe) && V(oe, H);
          }
        else if (cr(x))
          x._store && (x._store.validated = !0);
        else if (x) {
          var _e = C(x);
          if (typeof _e == "function" && _e !== x.entries)
            for (var Te = _e.call(x), he; !(he = Te.next()).done; )
              cr(he.value) && V(he.value, H);
        }
      }
    }
    function cn(x) {
      {
        var H = x.type;
        if (H == null || typeof H == "string")
          return;
        var Z;
        if (typeof H == "function")
          Z = H.propTypes;
        else if (typeof H == "object" && (H.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        H.$$typeof === f))
          Z = H.propTypes;
        else
          return;
        if (Z) {
          var oe = T(H);
          ft(Z, x.props, "prop", oe, x);
        } else if (H.PropTypes !== void 0 && !ur) {
          ur = !0;
          var _e = T(H);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _e || "Unknown");
        }
        typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(x) {
      {
        for (var H = Object.keys(x.props), Z = 0; Z < H.length; Z++) {
          var oe = H[Z];
          if (oe !== "children" && oe !== "key") {
            it(x), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), it(null);
            break;
          }
        }
        x.ref !== null && (it(x), R("Invalid attribute `ref` supplied to `React.Fragment`."), it(null));
      }
    }
    var ji = {};
    function dn(x, H, Z, oe, _e, Te) {
      {
        var he = O(x);
        if (!he) {
          var pe = "";
          (x === void 0 || typeof x == "object" && x !== null && Object.keys(x).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ze = un();
          ze ? pe += ze : pe += wt();
          var Ae;
          x === null ? Ae = "null" : vt(x) ? Ae = "array" : x !== void 0 && x.$$typeof === t ? (Ae = "<" + (T(x.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : Ae = typeof x, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ae, pe);
        }
        var Ie = Ce(x, H, Z, _e, Te);
        if (Ie == null)
          return Ie;
        if (he) {
          var Je = H.children;
          if (Je !== void 0)
            if (oe)
              if (vt(Je)) {
                for (var St = 0; St < Je.length; St++)
                  dr(Je[St], x);
                Object.freeze && Object.freeze(Je);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dr(Je, x);
        }
        if (ae.call(H, "key")) {
          var Pt = T(x), Ge = Object.keys(H).filter(function(Bi) {
            return Bi !== "key";
          }), fn = Ge.length > 0 ? "{key: someKey, " + Ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ji[Pt + fn]) {
            var Qs = Ge.length > 0 ? "{" + Ge.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fn, Pt, Qs, Pt), ji[Pt + fn] = !0;
          }
        }
        return x === n ? Tt(Ie) : cn(Ie), Ie;
      }
    }
    function Gs(x, H, Z) {
      return dn(x, H, Z, !0);
    }
    function Ys(x, H, Z) {
      return dn(x, H, Z, !1);
    }
    var Ks = Ys, Fi = Gs;
    hn.Fragment = n, hn.jsx = Ks, hn.jsxs = Fi;
  })()), hn;
}
var Wu;
function Iy() {
  return Wu || (Wu = 1, process.env.NODE_ENV === "production" ? Vi.exports = Oy() : Vi.exports = Ay()), Vi.exports;
}
var D = Iy();
function br(e = Im()) {
  return e.min(1);
}
function Km(e, t, r = {}) {
  const { schema: n = Ar(), flags: o } = r;
  return n.matches(new RegExp(`^[${e}]*$`, o), t);
}
function Vt(e, t, r = {}) {
  const { spaces: n = !1, specialChars: o, ...a } = r;
  let i = `can only contain: ${t}`;
  return n && (e += " ", i += ", spaces"), o && (e += o, i += `, special characters (${o})`), Km(e, i, a);
}
function sr(e, t, r = {}) {
  let { flags: n = "u" } = r;
  return n.includes("u") || (n += "u"), Vt(e, t, { ...r, flags: n });
}
function ky(e) {
  return Vt("a-zA-Z", "ASCII alpha characters (a-z, A-Z)", e);
}
function Dy(e) {
  return Vt("a-z", "lowercase ASCII alpha characters (a-z)", e);
}
function Ny(e) {
  return Vt("A-Z", "uppercase ASCII alpha characters (A-Z)", e);
}
function Ly(e) {
  return Vt("0-9", "ASCII numbers (0-9)", e);
}
function jy(e) {
  return Vt(
    "a-zA-Z0-9",
    "ASCII alphanumeric characters (a-z, A-Z, 0-9)",
    e
  );
}
function Qm(e) {
  return Vt(
    "a-z0-9",
    "lowercase ASCII alphanumeric characters (a-z, 0-9)",
    e
  );
}
function Zm(e) {
  return Vt(
    "A-Z0-9",
    "uppercase ASCII alphanumeric characters (A-Z, 0-9)",
    e
  );
}
function Fy(e) {
  return sr("\\p{L}", "unicode alpha characters", e);
}
function By(e) {
  return sr(
    "\\p{Ll}",
    "lowercase unicode alpha characters",
    e
  );
}
function Uy(e) {
  return sr(
    "\\p{Lu}",
    "uppercase unicode alpha characters",
    e
  );
}
function $y(e) {
  return sr("\\p{N}", "unicode numbers", e);
}
function fi(e) {
  return sr(
    "\\p{L}\\p{N}",
    "unicode alphanumeric characters",
    e
  );
}
function Hy(e) {
  return sr(
    "\\p{Ll}\\p{N}",
    "lowercase unicode alphanumeric characters",
    e
  );
}
function Vy(e) {
  return sr(
    "\\p{Lu}\\p{N}",
    "uppercase unicode alphanumeric characters",
    e
  );
}
function Ls(e, t, r) {
  const { onError: n, ...o } = r || {};
  try {
    return t.validateSync(e, o);
  } catch (a) {
    if (a instanceof km) {
      if (n) return n(a);
    } else throw a;
  }
}
const zy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  asciiAlphaString: ky,
  asciiAlphanumericString: jy,
  asciiNumericString: Ly,
  buildCharSet: Vt,
  buildUnicodeCharSet: sr,
  lowercaseAsciiAlphaString: Dy,
  lowercaseAsciiAlphanumericString: Qm,
  lowercaseUnicodeAlphaString: By,
  lowercaseUnicodeAlphanumericString: Hy,
  matchesCharSet: Km,
  numericId: br,
  tryValidateSync: Ls,
  unicodeAlphaString: Fy,
  unicodeAlphanumericString: fi,
  unicodeNumericString: $y,
  uppercaseAsciiAlphaString: Ny,
  uppercaseAsciiAlphanumericString: Zm,
  uppercaseUnicodeAlphaString: Uy,
  uppercaseUnicodeAlphanumericString: Vy
}, Symbol.toStringTag, { value: "Module" })), Xm = () => /* @__PURE__ */ D.jsxs(gr, { alignItems: "center", alignContent: "center", children: [
  /* @__PURE__ */ D.jsx(Uv, { color: "error" }),
  /* @__PURE__ */ D.jsx(bt, { color: "error.main", children: "Failed to sync data" })
] });
function _r(e, t) {
  if (t.url && Object.entries(t.url).forEach(([r, n]) => {
    e = e.replace(`<${r}>`, String(n));
  }), t.search) {
    const r = [];
    for (const n in t.search) {
      const o = t.search[n];
      if (o !== void 0)
        if (Array.isArray(o))
          for (const a of o) r.push([n, String(a)]);
        else
          r.push([n, String(o)]);
    }
    r.length !== 0 && (e += `?${new URLSearchParams(r).toString()}`);
  }
  return e;
}
function Rl(e) {
  return typeof e == "number" || typeof e == "string";
}
function Jm(e) {
  return { type: e, id: "LIST" };
}
function wr(e, t) {
  const {
    includeListTag: r = !1,
    argKeysAreIds: n = !1,
    id: o = "id"
  } = t || {};
  function a(s, l = r) {
    const u = s.map((p) => ({ type: e, id: String(p) }));
    return l && u.push(Jm(e)), u;
  }
  function i(s) {
    return je(s, o);
  }
  return (s, l, u) => {
    if (!l) {
      if (u) {
        if (Rl(u)) return a([u]);
        if (Array.isArray(u)) {
          if (u.length && Rl(u[0]))
            return a(u);
        } else if (typeof u == "object" && n)
          return a(Object.keys(u));
      }
      if (s)
        return Array.isArray(s) ? a(s.map(i)) : i(s) !== void 0 ? a([i(s)]) : a(s.data.map(i), !0);
    }
    return a([]);
  };
}
function rr(e, t) {
  if (e === t) throw Error("List and detail are the same.");
  return { list: e, detail: t };
}
function eh(e, t, r) {
  const { data: n, isLoading: o, isSuccess: a } = e, i = e.error, {
    loading: s = /* @__PURE__ */ D.jsx(_m, {}),
    error: l = /* @__PURE__ */ D.jsx(Xm, {})
  } = r || {};
  if (i)
    return console.error(i), l;
  if (o) return s;
  if (n) return t(n);
  if (a) throw Error("Expected to get data from API but got nothing.");
  return s;
}
function th(e) {
  return ["GET", "HEAD", "OPTIONS", "TRACE"].includes(e.toUpperCase());
}
const Wy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildUrl: _r,
  handleResultState: eh,
  isModelId: Rl,
  isSafeHttpMethod: th,
  listTag: Jm,
  modelUrls: rr,
  tagData: wr
}, Symbol.toStringTag, { value: "Module" }));
function tx({
  tagTypes: e = []
} = {}) {
  const t = ov({
    baseUrl: `${py}/`,
    credentials: "include",
    prepareHeaders: (n, o) => {
      const { type: a, arg: i } = o, s = typeof i == "string" ? "GET" : i.method || "GET";
      if (a === "mutation" || !th(s)) {
        const l = as();
        l && n.set("x-csrftoken", l);
      }
      return n;
    }
  }), r = av({
    // https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
    baseQuery: async (n, o, a) => {
      if (o.type === "mutation" && as() === void 0) {
        const { error: i } = await t(
          { url: "/csrf/cookie/", method: "GET" },
          o,
          {}
        );
        i !== void 0 && console.error(i), as();
      }
      return await t(n, o, a);
    },
    tagTypes: [...cy, ...e],
    endpoints: () => ({})
  });
  return r.injectEndpoints({
    endpoints: (n) => ({
      logout: _y(r, n)
    })
  });
}
const Vr = {
  user: rr("users/", "users/<id>/"),
  teacher: rr("users/teachers/", "users/teachers/<id>/"),
  student: rr("users/students/", "users/students/<id>/"),
  school: rr("schools/", "schools/<id>/"),
  class: rr("classes/", "classes/<id>/"),
  otpBypassToken: rr("otp-bypass-tokens/", "otp-bypass-tokens/<id>/"),
  authFactor: rr("auth-factors/", "auth-factors/<id>/")
}, Gy = "AuthFactor";
function rx(e) {
  return {
    listAuthFactors: e.query({
      query: (t) => ({
        url: _r(Vr.authFactor.list, { search: t }),
        method: "GET"
      }),
      providesTags: wr(Gy, { includeListTag: !0 })
    })
  };
}
const Gu = "Class";
function nx(e) {
  return {
    retrieveClass: e.query({
      query: (t) => ({
        url: _r(Vr.class.detail, { url: { id: t } }),
        method: "GET"
      }),
      providesTags: wr(Gu)
    }),
    listClasses: e.query({
      query: (t) => ({
        url: _r(Vr.class.list, { search: t }),
        method: "GET"
      }),
      providesTags: wr(Gu, { includeListTag: !0 })
    })
  };
}
const Yy = "School";
function ox(e) {
  return {
    retrieveSchool: e.query({
      query: (t) => ({
        url: _r(Vr.school.detail, { url: { id: t } }),
        method: "GET"
      }),
      providesTags: wr(Yy)
    })
  };
}
const Yu = "User";
function ax(e) {
  return {
    retrieveUser: e.query({
      query: (t) => ({
        url: _r(Vr.user.detail, { url: { id: t } }),
        method: "GET"
      }),
      providesTags: wr(Yu)
    }),
    listUsers: e.query({
      query: (t) => ({
        url: _r(Vr.user.list, { search: t }),
        method: "GET"
      }),
      providesTags: wr(Yu, { includeListTag: !0 })
    })
  };
}
const Fe = {
  user: br(),
  teacher: br(),
  student: br(),
  school: br(),
  klass: Zm().length(5),
  authFactor: br(),
  otpBypassToken: br()
}, zr = {
  id: Fe.teacher.required(),
  school: Fe.school,
  is_admin: xe.bool().required()
}, rh = {
  id: Fe.student.required(),
  school: Fe.school.required(),
  klass: Fe.klass.required(),
  auto_gen_password: xe.string().required()
}, Ke = {
  id: Fe.user.required(),
  requesting_to_join_class: Fe.klass,
  first_name: fi({
    spaces: !0,
    specialChars: "-'"
  }).required().max(150),
  last_name: fi({
    spaces: !0,
    specialChars: "-'"
  }).max(150),
  last_login: xe.date(),
  email: xe.string().email(),
  password: xe.string().required(),
  is_staff: xe.bool().required(),
  is_active: xe.bool().required(),
  date_joined: xe.date().required(),
  teacher: xe.object(zr).optional(),
  student: xe.object(rh).optional()
}, au = {
  ...Ke,
  password: Ke.password.min(10, "must be at least 10 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit").matches(
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
    "must contain at least one special character"
  ),
  email: Ke.email.required(),
  last_name: Ke.last_name.required(),
  teacher: Ke.teacher.required(),
  student: xe.string().oneOf([void 0])
}, Wr = {
  ...zr,
  school: zr.school.required()
}, iu = {
  ...au,
  teacher: xe.object(Wr)
}, nh = {
  ...Wr,
  is_admin: Wr.is_admin.isTrue()
}, Ky = {
  ...iu,
  teacher: xe.object(nh)
}, oh = {
  ...Wr,
  is_admin: Wr.is_admin.isFalse()
}, Qy = {
  ...iu,
  teacher: xe.object(oh)
}, ah = {
  ...zr,
  school: xe.string().oneOf([void 0]),
  is_admin: zr.is_admin.isFalse()
}, Zy = {
  ...au,
  teacher: xe.object(ah)
}, Xy = {
  ...Ke,
  password: Ke.password.min(6, "must be at least 6 characters long"),
  email: Ke.email.oneOf([void 0]),
  last_name: Ke.last_name.oneOf([void 0]),
  teacher: xe.string().oneOf([void 0]),
  student: Ke.student.required()
}, Jy = {
  ...Ke,
  password: Ke.password.min(8, "must be at least 8 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit"),
  email: Ke.email.required(),
  last_name: Ke.last_name.required(),
  teacher: xe.string().oneOf([void 0]),
  student: xe.string().oneOf([void 0])
}, eg = {
  ...zr,
  user: Fe.user.required()
}, tg = {
  ...Wr,
  user: Fe.user.required()
}, rg = {
  ...nh,
  user: Fe.user.required()
}, ng = {
  ...oh,
  user: Fe.user.required()
}, og = {
  ...ah,
  user: Fe.user.required()
}, ag = {
  ...rh,
  user: Fe.user.required()
}, ig = {
  id: Fe.school.required(),
  name: fi({
    spaces: !0,
    specialChars: "'."
  }).required().max(200),
  country: xe.string().oneOf(eu),
  uk_county: xe.string().oneOf(tu)
}, sg = {
  id: Fe.klass.required(),
  teacher: Fe.teacher.required(),
  school: Fe.school.required(),
  name: fi({
    spaces: !0,
    specialChars: "-_"
  }).required().max(200),
  read_classmates_data: xe.bool().required(),
  receive_requests_until: xe.date()
}, lg = {
  id: Fe.authFactor.required(),
  user: Fe.user.required(),
  type: xe.string().oneOf(["otp"]).required()
}, ug = {
  id: Fe.otpBypassToken.required(),
  user: Fe.user.required(),
  token: Qm().required().length(8)
}, ix = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adminSchoolTeacher: rg,
  adminSchoolTeacherUser: Ky,
  authFactor: lg,
  indyUser: Jy,
  klass: sg,
  nonAdminSchoolTeacher: ng,
  nonAdminSchoolTeacherUser: Qy,
  nonSchoolTeacher: og,
  nonSchoolTeacherUser: Zy,
  otpBypassToken: ug,
  school: ig,
  schoolTeacher: tg,
  schoolTeacherUser: iu,
  student: ag,
  studentUser: Xy,
  teacher: eg,
  teacherUser: au,
  user: Ke
}, Symbol.toStringTag, { value: "Module" }));
function ih(e) {
  const { page: t = 0, limit: r = 150 } = e || {}, [n, o] = ot({
    page: t,
    limit: r,
    offset: t * r
  });
  return [n, (i) => {
    o(({ page: s, limit: l }) => {
      const u = typeof i == "function" ? i({ page: s, limit: l }) : i;
      let p = u.page;
      const f = u.limit;
      return f !== l && (p = 0), { page: p, limit: f, offset: p * f };
    });
  }];
}
const cg = ({
  useLazyListQuery: e,
  filterOptions: t,
  getOptionLabel: r,
  getOptionKey: n = (i) => i.id,
  searchKey: o,
  ...a
}) => {
  const [i, s] = ot(""), [l, { isLoading: u, isError: p }] = e(), [{ limit: f, offset: c }, m] = ih(), [{ options: h, hasMore: y }, C] = ot({ options: {}, hasMore: !0 });
  Be(
    () => {
      const E = { limit: f, offset: c, ...t };
      i && (E[o] = i), l(E, !0).unwrap().then(({ data: w, offset: g, limit: v, count: _ }) => {
        C(({ options: A }) => {
          const O = { ...A };
          return w.forEach((q) => {
            O[n(q)] = q;
          }), { options: O, hasMore: g + v < _ };
        });
      }).catch((w) => {
        w && console.error(w);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      l,
      f,
      c,
      o,
      i,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...Object.values(t || {})
    ]
  );
  let d = Object.keys(h);
  if (!d.length) return /* @__PURE__ */ D.jsx(D.Fragment, {});
  typeof n(Object.values(h)[0]) == "number" && (d = d.map(Number));
  function R() {
    m(({ page: E, limit: w }) => ({ page: E + 1, limit: w }));
  }
  const b = ({ children: E, ...w }, g) => {
    const v = Rm.toArray(E);
    return u ? v.push(/* @__PURE__ */ D.jsx(_m, {}, "is-loading")) : (p && v.push(/* @__PURE__ */ D.jsx(Xm, {}, "is-error")), y && v.push(
      /* @__PURE__ */ D.jsx(Or, { onClick: R, children: "Load more" }, "load-more")
    )), /* @__PURE__ */ D.jsx(
      "ul",
      {
        ...w,
        ref: g,
        onScroll: (_) => {
          !u && _.currentTarget.clientHeight + _.currentTarget.scrollTop >= _.currentTarget.scrollHeight && R();
        },
        children: v
      }
    );
  };
  return /* @__PURE__ */ D.jsx(
    js,
    {
      options: d,
      getOptionLabel: (E) => r(h[E]),
      onInputChange: (E, w, g) => {
        s(g === "input" ? w : "");
      },
      ListboxComponent: dv(b),
      ...a
    }
  );
};
function sh(e) {
  return typeof e == "object" && e !== null && "status" in e && e.status === 400 && "data" in e && typeof e.data == "object" && e.data !== null;
}
function lh(e, t) {
  if (!sh(e)) throw e;
  const r = Object.fromEntries(
    Object.entries(e.data).map(([n, o]) => (Array.isArray(o) && (o = o.join(". ")), [n, o]))
  );
  t(r);
}
function uh(e, t, r) {
  const {
    include: n,
    onlyDirtyValues: o = !1,
    then: a,
    catch: i,
    finally: s
  } = r || {};
  let { exclude: l = [] } = r || {};
  return (u, p) => {
    let f = r && r.clean ? r.clean(u) : u;
    o && (l = [
      ...l,
      ...fh(u, t).filter(
        (c) => !l.includes(c)
      )
    ]), n && (l = l.filter((c) => !n.includes(c))), l.length && (f = Wm(f, l)), e(f).unwrap().then((c) => {
      a && a(c, u, p);
    }).catch((c) => {
      i && i(c, u, p), lh(c, p.setErrors);
    }).finally(() => {
      s && s(u, p);
    });
  };
}
function an(e, t) {
  return async (r) => {
    try {
      await e.validate(r, t);
    } catch (n) {
      if (n instanceof km)
        return n.errors.join(". ");
      throw n;
    }
  };
}
function ch(e, t, r) {
  return r || (r = ru(e)), Object.fromEntries(
    r.map((n) => [n, dh(e, t, n)])
  );
}
function dh(e, t, r) {
  const n = je(e, r), o = je(t, r);
  return n !== o;
}
function fh(e, t, r) {
  return Object.entries(ch(e, t, r)).filter(
    ([
      n,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      o
    ]) => !o
  ).map(([n]) => n);
}
const dg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCleanNames: fh,
  getDirty: ch,
  isDirty: dh,
  isFormError: sh,
  schemaToFieldValidator: an,
  setFormErrors: lh,
  submitForm: uh
}, Symbol.toStringTag, { value: "Module" })), js = ({
  textFieldProps: e,
  options: t,
  validateOptions: r,
  ...n
}) => {
  const { id: o, name: a, required: i, ...s } = e, l = a.split("."), u = "not a valid option";
  let p = typeof t[0] == "string" ? Ar().oneOf(t, u) : Im().oneOf(t, u);
  i && (p = p.required());
  const f = {
    name: a,
    type: typeof t[0] == "string" ? "text" : "number",
    validate: an(p, r)
  };
  return /* @__PURE__ */ D.jsx(nn, { ...f, children: ({ form: c, meta: m }) => {
    const h = je(
      c.values,
      l
    ), y = je(c.touched, l), C = je(c.errors, l);
    return /* @__PURE__ */ D.jsx(
      mv,
      {
        options: t,
        defaultValue: m.initialValue === "" ? void 0 : m.initialValue,
        renderInput: ({
          id: d,
          // eslint-disable-line @typescript-eslint/no-unused-vars
          ...R
        }) => /* @__PURE__ */ D.jsx(
          Ql,
          {
            id: o ?? a,
            name: a,
            required: i,
            type: "text",
            value: h,
            error: y && !!C,
            helperText: y && C,
            ...s,
            ...R
          }
        ),
        onChange: (d, R) => {
          c.setFieldValue(a, R ?? void 0, !0);
        },
        onBlur: c.handleBlur,
        ...n
      }
    );
  } });
}, fg = ({
  id: e,
  name: t,
  formControlLabelProps: r,
  required: n = !1,
  errorMessage: o = "this is a required field",
  validateOptions: a,
  ...i
}) => {
  const s = t.split(".");
  let l = jv();
  n && (l = l.oneOf([!0], o));
  const u = {
    name: t,
    type: "checkbox",
    validate: an(l, a)
  };
  return /* @__PURE__ */ D.jsx(nn, { ...u, children: ({ form: p, meta: f }) => {
    const c = je(p.touched, s), m = je(p.errors, s), h = je(
      p.values,
      s
    ), y = c && !!m;
    return /* @__PURE__ */ D.jsxs(hv, { error: y, required: n, children: [
      /* @__PURE__ */ D.jsx(
        bv,
        {
          control: /* @__PURE__ */ D.jsx(
            vv,
            {
              defaultChecked: f.initialValue,
              id: e ?? t,
              name: t,
              value: h,
              onChange: p.handleChange,
              onBlur: p.handleBlur,
              ...i
            }
          ),
          ...r
        }
      ),
      y && /* @__PURE__ */ D.jsx(wm, { children: m })
    ] });
  } });
}, pg = ({
  textFieldProps: e,
  ...t
}) => {
  const {
    name: r = "country",
    label: n = "Country",
    placeholder: o = "Select your country",
    ...a
  } = e || {};
  return /* @__PURE__ */ D.jsx(
    js,
    {
      options: eu,
      getOptionLabel: (i) => zm[i],
      textFieldProps: { name: r, label: n, placeholder: o, ...a },
      ...t
    }
  );
};
var is = { exports: {} }, mg = is.exports, Ku;
function hg() {
  return Ku || (Ku = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n($e);
    })(mg, (function(r) {
      function n(i) {
        return i && typeof i == "object" && "default" in i ? i : { default: i };
      }
      var o = n(r), a = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(i) {
        var s = ["th", "st", "nd", "rd"], l = i % 100;
        return "[" + i + (s[(l - 20) % 10] || s[l] || s[0]) + "]";
      } };
      return o.default.locale(a, null, !0), a;
    }));
  })(is)), is.exports;
}
hg();
function El() {
  return El = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, El.apply(null, arguments);
}
var ss = { exports: {} }, bg = ss.exports, Qu;
function vg() {
  return Qu || (Qu = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(bg, (function() {
      var r = "week", n = "year";
      return function(o, a, i) {
        var s = a.prototype;
        s.week = function(l) {
          if (l === void 0 && (l = null), l !== null) return this.add(7 * (l - this.week()), "day");
          var u = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var p = i(this).startOf(n).add(1, n).date(u), f = i(this).endOf(r);
            if (p.isBefore(f)) return 1;
          }
          var c = i(this).startOf(n).date(u).startOf(r).subtract(1, "millisecond"), m = this.diff(c, r, !0);
          return m < 0 ? i(this).startOf("week").week() : Math.ceil(m);
        }, s.weeks = function(l) {
          return l === void 0 && (l = null), this.week(l);
        };
      };
    }));
  })(ss)), ss.exports;
}
var yg = vg();
const gg = /* @__PURE__ */ on(yg);
var ls = { exports: {} }, Rg = ls.exports, Zu;
function Eg() {
  return Zu || (Zu = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Rg, (function() {
      var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, n = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, o = /\d/, a = /\d\d/, i = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, l = {}, u = function(C) {
        return (C = +C) + (C > 68 ? 1900 : 2e3);
      }, p = function(C) {
        return function(d) {
          this[C] = +d;
        };
      }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(C) {
        (this.zone || (this.zone = {})).offset = (function(d) {
          if (!d || d === "Z") return 0;
          var R = d.match(/([+-]|\d\d)/g), b = 60 * R[1] + (+R[2] || 0);
          return b === 0 ? 0 : R[0] === "+" ? -b : b;
        })(C);
      }], c = function(C) {
        var d = l[C];
        return d && (d.indexOf ? d : d.s.concat(d.f));
      }, m = function(C, d) {
        var R, b = l.meridiem;
        if (b) {
          for (var E = 1; E <= 24; E += 1) if (C.indexOf(b(E, 0, d)) > -1) {
            R = E > 12;
            break;
          }
        } else R = C === (d ? "pm" : "PM");
        return R;
      }, h = { A: [s, function(C) {
        this.afternoon = m(C, !1);
      }], a: [s, function(C) {
        this.afternoon = m(C, !0);
      }], Q: [o, function(C) {
        this.month = 3 * (C - 1) + 1;
      }], S: [o, function(C) {
        this.milliseconds = 100 * +C;
      }], SS: [a, function(C) {
        this.milliseconds = 10 * +C;
      }], SSS: [/\d{3}/, function(C) {
        this.milliseconds = +C;
      }], s: [i, p("seconds")], ss: [i, p("seconds")], m: [i, p("minutes")], mm: [i, p("minutes")], H: [i, p("hours")], h: [i, p("hours")], HH: [i, p("hours")], hh: [i, p("hours")], D: [i, p("day")], DD: [a, p("day")], Do: [s, function(C) {
        var d = l.ordinal, R = C.match(/\d+/);
        if (this.day = R[0], d) for (var b = 1; b <= 31; b += 1) d(b).replace(/\[|\]/g, "") === C && (this.day = b);
      }], w: [i, p("week")], ww: [a, p("week")], M: [i, p("month")], MM: [a, p("month")], MMM: [s, function(C) {
        var d = c("months"), R = (c("monthsShort") || d.map((function(b) {
          return b.slice(0, 3);
        }))).indexOf(C) + 1;
        if (R < 1) throw new Error();
        this.month = R % 12 || R;
      }], MMMM: [s, function(C) {
        var d = c("months").indexOf(C) + 1;
        if (d < 1) throw new Error();
        this.month = d % 12 || d;
      }], Y: [/[+-]?\d+/, p("year")], YY: [a, function(C) {
        this.year = u(C);
      }], YYYY: [/\d{4}/, p("year")], Z: f, ZZ: f };
      function y(C) {
        var d, R;
        d = C, R = l && l.formats;
        for (var b = (C = d.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(O, q, I) {
          var T = I && I.toUpperCase();
          return q || R[I] || r[I] || R[T].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(k, N, Y) {
            return N || Y.slice(1);
          }));
        }))).match(n), E = b.length, w = 0; w < E; w += 1) {
          var g = b[w], v = h[g], _ = v && v[0], A = v && v[1];
          b[w] = A ? { regex: _, parser: A } : g.replace(/^\[|\]$/g, "");
        }
        return function(O) {
          for (var q = {}, I = 0, T = 0; I < E; I += 1) {
            var k = b[I];
            if (typeof k == "string") T += k.length;
            else {
              var N = k.regex, Y = k.parser, G = O.slice(T), Q = N.exec(G)[0];
              Y.call(q, Q), O = O.replace(Q, "");
            }
          }
          return (function(K) {
            var se = K.afternoon;
            if (se !== void 0) {
              var ne = K.hours;
              se ? ne < 12 && (K.hours += 12) : ne === 12 && (K.hours = 0), delete K.afternoon;
            }
          })(q), q;
        };
      }
      return function(C, d, R) {
        R.p.customParseFormat = !0, C && C.parseTwoDigitYear && (u = C.parseTwoDigitYear);
        var b = d.prototype, E = b.parse;
        b.parse = function(w) {
          var g = w.date, v = w.utc, _ = w.args;
          this.$u = v;
          var A = _[1];
          if (typeof A == "string") {
            var O = _[2] === !0, q = _[3] === !0, I = O || q, T = _[2];
            q && (T = _[2]), l = this.$locale(), !O && T && (l = R.Ls[T]), this.$d = (function(G, Q, K, se) {
              try {
                if (["x", "X"].indexOf(Q) > -1) return new Date((Q === "X" ? 1e3 : 1) * G);
                var ne = y(Q)(G), we = ne.year, W = ne.month, be = ne.day, X = ne.hours, ue = ne.minutes, me = ne.seconds, le = ne.milliseconds, M = ne.zone, z = ne.week, B = /* @__PURE__ */ new Date(), J = be || (we || W ? 1 : B.getDate()), ee = we || B.getFullYear(), re = 0;
                we && !W || (re = W > 0 ? W - 1 : B.getMonth());
                var ce, ae = X || 0, ve = ue || 0, qe = me || 0, Ue = le || 0;
                return M ? new Date(Date.UTC(ee, re, J, ae, ve, qe, Ue + 60 * M.offset * 1e3)) : K ? new Date(Date.UTC(ee, re, J, ae, ve, qe, Ue)) : (ce = new Date(ee, re, J, ae, ve, qe, Ue), z && (ce = se(ce).week(z).toDate()), ce);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(g, A, v, R), this.init(), T && T !== !0 && (this.$L = this.locale(T).$L), I && g != this.format(A) && (this.$d = /* @__PURE__ */ new Date("")), l = {};
          } else if (A instanceof Array) for (var k = A.length, N = 1; N <= k; N += 1) {
            _[1] = A[N - 1];
            var Y = R.apply(this, _);
            if (Y.isValid()) {
              this.$d = Y.$d, this.$L = Y.$L, this.init();
              break;
            }
            N === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else E.call(this, w);
        };
      };
    }));
  })(ls)), ls.exports;
}
var Cg = Eg();
const _g = /* @__PURE__ */ on(Cg);
var us = { exports: {} }, wg = us.exports, Xu;
function Tg() {
  return Xu || (Xu = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(wg, (function() {
      var r = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(n, o, a) {
        var i = o.prototype, s = i.format;
        a.en.formats = r, i.format = function(l) {
          l === void 0 && (l = "YYYY-MM-DDTHH:mm:ssZ");
          var u = this.$locale().formats, p = (function(f, c) {
            return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(m, h, y) {
              var C = y && y.toUpperCase();
              return h || c[y] || r[y] || c[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(d, R, b) {
                return R || b.slice(1);
              }));
            }));
          })(l, u === void 0 ? {} : u);
          return s.call(this, p);
        };
      };
    }));
  })(us)), us.exports;
}
var Sg = Tg();
const Pg = /* @__PURE__ */ on(Sg);
var cs = { exports: {} }, xg = cs.exports, Ju;
function qg() {
  return Ju || (Ju = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(xg, (function() {
      return function(r, n, o) {
        n.prototype.isBetween = function(a, i, s, l) {
          var u = o(a), p = o(i), f = (l = l || "()")[0] === "(", c = l[1] === ")";
          return (f ? this.isAfter(u, s) : !this.isBefore(u, s)) && (c ? this.isBefore(p, s) : !this.isAfter(p, s)) || (f ? this.isBefore(u, s) : !this.isAfter(u, s)) && (c ? this.isAfter(p, s) : !this.isBefore(p, s));
        };
      };
    }));
  })(cs)), cs.exports;
}
var Mg = qg();
const Og = /* @__PURE__ */ on(Mg);
var ds = { exports: {} }, Ag = ds.exports, ec;
function Ig() {
  return ec || (ec = 1, (function(e, t) {
    (function(r, n) {
      e.exports = n();
    })(Ag, (function() {
      return function(r, n) {
        var o = n.prototype, a = o.format;
        o.format = function(i) {
          var s = this, l = this.$locale();
          if (!this.isValid()) return a.bind(this)(i);
          var u = this.$utils(), p = (i || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(f) {
            switch (f) {
              case "Q":
                return Math.ceil((s.$M + 1) / 3);
              case "Do":
                return l.ordinal(s.$D);
              case "gggg":
                return s.weekYear();
              case "GGGG":
                return s.isoWeekYear();
              case "wo":
                return l.ordinal(s.week(), "W");
              case "w":
              case "ww":
                return u.s(s.week(), f === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return u.s(s.isoWeek(), f === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return u.s(String(s.$H === 0 ? 24 : s.$H), f === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(s.$d.getTime() / 1e3);
              case "x":
                return s.$d.getTime();
              case "z":
                return "[" + s.offsetName() + "]";
              case "zzz":
                return "[" + s.offsetName("long") + "]";
              default:
                return f;
            }
          }));
          return a.bind(this)(p);
        };
      };
    }));
  })(ds)), ds.exports;
}
var kg = Ig();
const Dg = /* @__PURE__ */ on(kg), tc = /* @__PURE__ */ new Set();
function Ng(e, t = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const r = Array.isArray(e) ? e.join(`
`) : e;
  tc.has(r) || (tc.add(r), t === "error" ? console.error(r) : console.warn(r));
}
$e.extend(Pg);
$e.extend(gg);
$e.extend(Og);
$e.extend(Dg);
const Lg = {
  // Year
  YY: "year",
  YYYY: {
    sectionType: "year",
    contentType: "digit",
    maxLength: 4
  },
  // Month
  M: {
    sectionType: "month",
    contentType: "digit",
    maxLength: 2
  },
  MM: "month",
  MMM: {
    sectionType: "month",
    contentType: "letter"
  },
  MMMM: {
    sectionType: "month",
    contentType: "letter"
  },
  // Day of the month
  D: {
    sectionType: "day",
    contentType: "digit",
    maxLength: 2
  },
  DD: "day",
  Do: {
    sectionType: "day",
    contentType: "digit-with-letter"
  },
  // Day of the week
  d: {
    sectionType: "weekDay",
    contentType: "digit",
    maxLength: 2
  },
  dd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  ddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  dddd: {
    sectionType: "weekDay",
    contentType: "letter"
  },
  // Meridiem
  A: "meridiem",
  a: "meridiem",
  // Hours
  H: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  HH: "hours",
  h: {
    sectionType: "hours",
    contentType: "digit",
    maxLength: 2
  },
  hh: "hours",
  // Minutes
  m: {
    sectionType: "minutes",
    contentType: "digit",
    maxLength: 2
  },
  mm: "minutes",
  // Seconds
  s: {
    sectionType: "seconds",
    contentType: "digit",
    maxLength: 2
  },
  ss: "seconds"
}, jg = {
  year: "YYYY",
  month: "MMMM",
  monthShort: "MMM",
  dayOfMonth: "D",
  dayOfMonthFull: "Do",
  weekday: "dddd",
  weekdayShort: "dd",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "A",
  minutes: "mm",
  seconds: "ss",
  fullDate: "ll",
  keyboardDate: "L",
  shortDate: "MMM D",
  normalDate: "D MMMM",
  normalDateWithWeekday: "ddd, MMM D",
  fullTime: "LT",
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime: "L LT",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, el = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), rc = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Fg = (e, t) => t ? (...r) => e(...r).locale(t) : e;
class Bg {
  constructor({
    locale: t,
    formats: r
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = Lg, this.setLocaleToValue = (n) => {
      const o = this.getCurrentLocaleCode();
      return o === n.locale() ? n : n.locale(o);
    }, this.hasUTCPlugin = () => typeof $e.utc < "u", this.hasTimezonePlugin = () => typeof $e.tz < "u", this.isSame = (n, o, a) => {
      const i = this.setTimezone(o, this.getTimezone(n));
      return n.format(a) === i.format(a);
    }, this.cleanTimezone = (n) => {
      switch (n) {
        case "default":
          return;
        case "system":
          return $e.tz.guess();
        default:
          return n;
      }
    }, this.createSystemDate = (n) => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const o = $e.tz.guess();
        return o !== "UTC" ? $e.tz(n, o) : $e(n);
      }
      return $e(n);
    }, this.createUTCDate = (n) => {
      if (!this.hasUTCPlugin())
        throw new Error(el);
      return $e.utc(n);
    }, this.createTZDate = (n, o) => {
      if (!this.hasUTCPlugin())
        throw new Error(el);
      if (!this.hasTimezonePlugin())
        throw new Error(rc);
      const a = n !== void 0 && !n.endsWith("Z");
      return $e(n).tz(this.cleanTimezone(o), a);
    }, this.getLocaleFormats = () => {
      const n = $e.Ls, o = this.locale || "en";
      let a = n[o];
      return a === void 0 && (process.env.NODE_ENV !== "production" && Ng(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), a = n.en), a.formats;
    }, this.adjustOffset = (n) => {
      if (!this.hasTimezonePlugin())
        return n;
      const o = this.getTimezone(n);
      if (o !== "UTC") {
        const a = n.tz(this.cleanTimezone(o), !0);
        if (a.$offset === (n.$offset ?? 0))
          return n;
        n.$offset = a.$offset;
      }
      return n;
    }, this.date = (n, o = "default") => {
      if (n === null)
        return null;
      let a;
      return o === "UTC" ? a = this.createUTCDate(n) : o === "system" || o === "default" && !this.hasTimezonePlugin() ? a = this.createSystemDate(n) : a = this.createTZDate(n, o), this.locale === void 0 ? a : a.locale(this.locale);
    }, this.getInvalidDate = () => $e(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (n) => {
      if (this.hasTimezonePlugin()) {
        const o = n.$x?.$timezone;
        if (o)
          return o;
      }
      return this.hasUTCPlugin() && n.isUTC() ? "UTC" : "system";
    }, this.setTimezone = (n, o) => {
      if (this.getTimezone(n) === o)
        return n;
      if (o === "UTC") {
        if (!this.hasUTCPlugin())
          throw new Error(el);
        return n.utc();
      }
      if (o === "system")
        return n.local();
      if (!this.hasTimezonePlugin()) {
        if (o === "default")
          return n;
        throw new Error(rc);
      }
      return $e.tz(n, this.cleanTimezone(o));
    }, this.toJsDate = (n) => n.toDate(), this.parse = (n, o) => n === "" ? null : this.dayjs(n, o, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (n) => {
      const o = this.getLocaleFormats(), a = (i) => i.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (s, l, u) => l || u.slice(1));
      return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (i, s, l) => {
        const u = l && l.toUpperCase();
        return s || o[l] || a(o[u]);
      });
    }, this.isValid = (n) => n == null ? !1 : n.isValid(), this.format = (n, o) => this.formatByString(n, this.formats[o]), this.formatByString = (n, o) => this.dayjs(n).format(o), this.formatNumber = (n) => n, this.isEqual = (n, o) => n === null && o === null ? !0 : n === null || o === null ? !1 : n.toDate().getTime() === o.toDate().getTime(), this.isSameYear = (n, o) => this.isSame(n, o, "YYYY"), this.isSameMonth = (n, o) => this.isSame(n, o, "YYYY-MM"), this.isSameDay = (n, o) => this.isSame(n, o, "YYYY-MM-DD"), this.isSameHour = (n, o) => n.isSame(o, "hour"), this.isAfter = (n, o) => n > o, this.isAfterYear = (n, o) => this.hasUTCPlugin() ? !this.isSameYear(n, o) && n.utc() > o.utc() : n.isAfter(o, "year"), this.isAfterDay = (n, o) => this.hasUTCPlugin() ? !this.isSameDay(n, o) && n.utc() > o.utc() : n.isAfter(o, "day"), this.isBefore = (n, o) => n < o, this.isBeforeYear = (n, o) => this.hasUTCPlugin() ? !this.isSameYear(n, o) && n.utc() < o.utc() : n.isBefore(o, "year"), this.isBeforeDay = (n, o) => this.hasUTCPlugin() ? !this.isSameDay(n, o) && n.utc() < o.utc() : n.isBefore(o, "day"), this.isWithinRange = (n, [o, a]) => n >= o && n <= a, this.startOfYear = (n) => this.adjustOffset(n.startOf("year")), this.startOfMonth = (n) => this.adjustOffset(n.startOf("month")), this.startOfWeek = (n) => this.adjustOffset(this.setLocaleToValue(n).startOf("week")), this.startOfDay = (n) => this.adjustOffset(n.startOf("day")), this.endOfYear = (n) => this.adjustOffset(n.endOf("year")), this.endOfMonth = (n) => this.adjustOffset(n.endOf("month")), this.endOfWeek = (n) => this.adjustOffset(this.setLocaleToValue(n).endOf("week")), this.endOfDay = (n) => this.adjustOffset(n.endOf("day")), this.addYears = (n, o) => this.adjustOffset(o < 0 ? n.subtract(Math.abs(o), "year") : n.add(o, "year")), this.addMonths = (n, o) => this.adjustOffset(o < 0 ? n.subtract(Math.abs(o), "month") : n.add(o, "month")), this.addWeeks = (n, o) => this.adjustOffset(o < 0 ? n.subtract(Math.abs(o), "week") : n.add(o, "week")), this.addDays = (n, o) => this.adjustOffset(o < 0 ? n.subtract(Math.abs(o), "day") : n.add(o, "day")), this.addHours = (n, o) => this.adjustOffset(o < 0 ? n.subtract(Math.abs(o), "hour") : n.add(o, "hour")), this.addMinutes = (n, o) => this.adjustOffset(o < 0 ? n.subtract(Math.abs(o), "minute") : n.add(o, "minute")), this.addSeconds = (n, o) => this.adjustOffset(o < 0 ? n.subtract(Math.abs(o), "second") : n.add(o, "second")), this.getYear = (n) => n.year(), this.getMonth = (n) => n.month(), this.getDate = (n) => n.date(), this.getHours = (n) => n.hour(), this.getMinutes = (n) => n.minute(), this.getSeconds = (n) => n.second(), this.getMilliseconds = (n) => n.millisecond(), this.setYear = (n, o) => this.adjustOffset(n.set("year", o)), this.setMonth = (n, o) => this.adjustOffset(n.set("month", o)), this.setDate = (n, o) => this.adjustOffset(n.set("date", o)), this.setHours = (n, o) => this.adjustOffset(n.set("hour", o)), this.setMinutes = (n, o) => this.adjustOffset(n.set("minute", o)), this.setSeconds = (n, o) => this.adjustOffset(n.set("second", o)), this.setMilliseconds = (n, o) => this.adjustOffset(n.set("millisecond", o)), this.getDaysInMonth = (n) => n.daysInMonth(), this.getWeekArray = (n) => {
      const o = this.startOfWeek(this.startOfMonth(n)), a = this.endOfWeek(this.endOfMonth(n));
      let i = 0, s = o;
      const l = [];
      for (; s < a; ) {
        const u = Math.floor(i / 7);
        l[u] = l[u] || [], l[u].push(s), s = this.addDays(s, 1), i += 1;
      }
      return l;
    }, this.getWeekNumber = (n) => n.week(), this.getYearRange = ([n, o]) => {
      const a = this.startOfYear(n), i = this.endOfYear(o), s = [];
      let l = a;
      for (; this.isBefore(l, i); )
        s.push(l), l = this.addYears(l, 1);
      return s;
    }, this.dayjs = Fg($e, t), this.locale = t, this.formats = El({}, jg, r), $e.extend(_g);
  }
  getDayOfWeek(t) {
    return t.day() + 1;
  }
}
const Ug = ({
  name: e,
  required: t,
  minDate: r,
  maxDate: n,
  validateOptions: o,
  ...a
}) => {
  const i = e.split(".");
  function s(p) {
    return p.locale("en-gb").format("L");
  }
  let l = Fv();
  t && (l = l.required()), r && (l = l.min(
    r,
    `this field must be after or equal to ${s(r)}`
  )), n && (l = l.max(
    n,
    `this field must be before or equal to ${s(n)}`
  ));
  const u = {
    name: e,
    type: "date",
    validate: an(l, o)
  };
  return /* @__PURE__ */ D.jsx(nn, { ...u, children: ({ form: p }) => {
    const f = je(p.errors, i), c = je(p.touched, i);
    let m = je(
      p.values,
      i
    );
    m = m ? $e(m) : null;
    function h(y) {
      p.setFieldValue(
        e,
        y && y.isValid() ? y.format("YYYY-MM-DD") : null,
        !0
      );
    }
    return /* @__PURE__ */ D.jsx(
      ny,
      {
        dateAdapter: Bg,
        adapterLocale: "en-gb",
        children: /* @__PURE__ */ D.jsx(
          oy,
          {
            name: e,
            value: m,
            minDate: r,
            maxDate: n,
            onChange: h,
            slotProps: {
              textField: {
                id: e,
                onChange: (y) => {
                  h(y);
                },
                onBlur: p.handleBlur,
                required: t,
                error: c && !!f,
                helperText: c && f
              }
            },
            ...a
          }
        )
      }
    );
  } });
}, Mi = ({
  id: e,
  name: t,
  schema: r,
  type: n = "text",
  required: o = !1,
  dirty: a = !1,
  unique: i = !1,
  uniqueCaseInsensitive: s = !1,
  split: l,
  validateOptions: u,
  ...p
}) => {
  const [f, c] = ot(""), m = t.split(".");
  function h() {
    let d = r;
    if (d = o ? d.required() : d.optional(), a && !l && (d = d.notOneOf(
      [f],
      "cannot be initial value"
    )), !l) return d;
    let R = Bv().of(d);
    return R = o ? R.required().min(1) : R.optional(), (i || s) && (R = R.test({
      message: "cannot have duplicates",
      test: (b) => Array.isArray(b) && b.length >= 2 && b.every((E) => typeof E == "string") ? new Set(
        s ? b.map((E) => E.toLowerCase()) : b
      ).size === b.length : !0
    })), a && (R = R.notOneOf(
      [f],
      "cannot be initial value"
    )), R;
  }
  const y = {
    name: t,
    type: n,
    validate: an(h(), u)
  }, C = ({ form: d }) => {
    const R = je(
      d.initialValues,
      m
    ), b = je(
      d.values,
      m
    ), E = je(d.errors, m), w = je(d.touched, m);
    return Be(() => {
      c(R);
    }, [R]), Be(() => {
      d.setFieldValue(
        t,
        l && typeof b == "string" ? b.split(l) : b,
        !0
      );
    }, [b]), /* @__PURE__ */ D.jsx(
      Ql,
      {
        id: e ?? t,
        name: t,
        type: n,
        required: o,
        value: b,
        onChange: d.handleChange,
        onBlur: d.handleBlur,
        error: w && !!E,
        helperText: w && E,
        ...p
      }
    );
  };
  return /* @__PURE__ */ D.jsx(nn, { ...y, children: C });
}, $g = ({
  name: e = "email",
  label: t = "Email address",
  placeholder: r = "Enter your email address",
  InputProps: n = {},
  ...o
}) => /* @__PURE__ */ D.jsx(
  Mi,
  {
    type: "email",
    schema: Ar().email(),
    name: e,
    label: t,
    placeholder: r,
    InputProps: {
      endAdornment: /* @__PURE__ */ D.jsx(Zl, { position: "end", children: /* @__PURE__ */ D.jsx($v, {}) }),
      ...n
    },
    ...o
  }
), Hg = ({
  name: e = "first_name",
  label: t = "First name",
  placeholder: r = "Enter your first name",
  InputProps: n = {},
  ...o
}) => /* @__PURE__ */ D.jsx(
  Mi,
  {
    schema: Ke.first_name,
    name: e,
    label: t,
    placeholder: r,
    InputProps: {
      endAdornment: /* @__PURE__ */ D.jsx(Zl, { position: "end", children: /* @__PURE__ */ D.jsx(Hv, {}) }),
      ...n
    },
    ...o
  }
), ph = {
  behavior: "smooth",
  block: "start"
}, Vg = ({
  scrollIntoViewOptions: e = ph,
  ...t
}) => {
  const r = Em(null);
  return Be(() => {
    r.current && r.current.scrollIntoView(e);
  }, [e]), /* @__PURE__ */ D.jsx(wm, { ref: r, error: !0, ...t });
}, mh = ({
  children: e,
  scrollIntoViewOptions: t = ph,
  nonFieldErrorsProps: r,
  fieldRefs: n = [],
  ...o
}) => /* @__PURE__ */ D.jsx(ty, { ...o, children: (a) => {
  const i = !!Object.keys(a.errors).length, s = i && typeof a.errors.__all__ == "string";
  if (i && !s && a.isSubmitting && n.length) {
    const l = ru(a.errors), u = n.find(({ name: p }) => l.includes(p))?.inputRef.current;
    u && u.scrollIntoView(t);
  }
  return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    s && /* @__PURE__ */ D.jsx(Vg, { ...r, children: a.errors.__all__ }),
    /* @__PURE__ */ D.jsx(ry, { children: typeof e == "function" ? e(a) : e })
  ] });
} }), zg = ({
  useMutation: e,
  submitOptions: t,
  ...r
}) => {
  const [n] = e();
  return /* @__PURE__ */ D.jsx(
    mh,
    {
      ...r,
      onSubmit: uh(
        n,
        r.initialValues,
        t
      )
    }
  );
}, Wg = (e) => "onSubmit" in e ? /* @__PURE__ */ D.jsx(mh, { ...e }) : zg(e), Gg = ({
  name: e = "otp",
  label: t = "OTP",
  placeholder: r = "Enter your OTP",
  ...n
}) => /* @__PURE__ */ D.jsx(
  Mi,
  {
    name: e,
    label: t,
    schema: Ar().matches(/^[0-9]{6}$/, "Must be exactly 6 digits."),
    placeholder: r,
    required: !0,
    ...n
  }
), Yg = ({
  id: e,
  repeatName: t,
  setValue: r,
  fieldProps: n,
  name: o,
  label: a,
  placeholder: i,
  type: s,
  ...l
}) => {
  const { form: u } = n, p = o.split("."), f = je(u.values, p), c = t.split("."), m = je(
    u.values,
    c
  ), h = je(
    u.touched,
    c
  ), y = je(u.errors, c);
  return Be(() => {
    r(f);
  }, [r, f]), /* @__PURE__ */ D.jsx(
    Ql,
    {
      required: !0,
      type: s,
      label: a ?? `Repeat ${o.replace("_", " ")}`,
      placeholder: i ?? `Enter your ${o.replace("_", " ")} again`,
      id: e ?? t,
      name: t,
      value: m,
      onChange: u.handleChange,
      onBlur: u.handleBlur,
      error: h && !!y,
      helperText: h && y,
      ...l
    }
  );
}, hh = ({
  name: e,
  type: t = "text",
  validateOptions: r,
  ...n
}) => {
  const [o, a] = ot(""), i = `${e}_repeat`, s = {
    name: i,
    type: t,
    validate: an(
      Ar().required().equals([o], "does not match"),
      r
    )
  };
  return /* @__PURE__ */ D.jsx(nn, { ...s, children: (l) => /* @__PURE__ */ D.jsx(
    Yg,
    {
      name: e,
      type: t,
      repeatName: i,
      setValue: a,
      fieldProps: l,
      ...n
    }
  ) });
}, Kg = ({
  name: e = "password",
  label: t = "Password",
  placeholder: r = "Enter your password",
  schema: n = Ar(),
  InputProps: o = {},
  withRepeatField: a = !1,
  repeatFieldProps: i = {},
  ...s
}) => {
  const [l, u] = ot(!1), p = l ? "text" : "password", f = /* @__PURE__ */ D.jsx(Zl, { position: "end", children: /* @__PURE__ */ D.jsx(
    Pi,
    {
      onClick: () => {
        u((c) => !c);
      },
      edge: "end",
      children: l ? /* @__PURE__ */ D.jsx(Vv, {}) : /* @__PURE__ */ D.jsx(zv, {})
    }
  ) });
  return /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    /* @__PURE__ */ D.jsx(
      Mi,
      {
        autoComplete: "off",
        type: p,
        name: e,
        label: t,
        schema: n,
        placeholder: r,
        InputProps: { endAdornment: f, ...o },
        ...s
      }
    ),
    a && /* @__PURE__ */ D.jsx(
      hh,
      {
        name: e,
        type: p,
        ...i,
        InputProps: { endAdornment: f, ...i.InputProps }
      }
    )
  ] });
}, Qg = ({
  children: e = "Submit",
  ...t
}) => {
  function r(n, o) {
    o = o || {};
    for (const a in n) {
      const i = n[a];
      o[a] = i instanceof Object && i.constructor === Object ? r(i, o) : !0;
    }
    return o;
  }
  return /* @__PURE__ */ D.jsx(nn, { name: "submit", type: "submit", children: ({ form: n }) => /* @__PURE__ */ D.jsx(
    Or,
    {
      type: "button",
      onClick: () => {
        n.setTouched(r(n.values), !0).then((o) => {
          const a = !!(o && Object.keys(o).length);
          n.setSubmitting(a), a || n.submitForm();
        });
      },
      ...t,
      children: e
    }
  ) });
}, Zg = ({
  textFieldProps: e,
  ...t
}) => {
  const {
    name: r = "uk_county",
    label: n = "UK county",
    placeholder: o = "Select your UK county",
    ...a
  } = e || {};
  return /* @__PURE__ */ D.jsx(
    js,
    {
      options: tu,
      textFieldProps: { name: r, label: n, placeholder: o, ...a },
      ...t
    }
  );
}, sx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ApiAutocompleteField: cg,
  AutocompleteField: js,
  CheckboxField: fg,
  CountryField: pg,
  DatePickerField: Ug,
  EmailField: $g,
  FirstNameField: Hg,
  Form: Wg,
  OtpField: Gg,
  PasswordField: Kg,
  RepeatField: hh,
  SubmitButton: Qg,
  TextField: Mi,
  UkCountyField: Zg
}, Symbol.toStringTag, { value: "Module" })), bh = ({ href: e, hrefInNewTab: t = !1, ...r }) => {
  let {
    onClick: n,
    style: o = {},
    ...a
    // eslint-disable-line prefer-const
  } = r;
  return o.width === void 0 && (o.width = "100%"), e !== void 0 && (o = { ...o, cursor: "pointer" }, t ? n = () => {
    Um(e);
  } : n = () => {
    window.location.replace(e);
  }), /* @__PURE__ */ D.jsx(ks, { component: "img", onClick: n, style: o, ...a });
}, pi = ({ boxProps: e, ...t }) => /* @__PURE__ */ D.jsx(ks, { ...e, children: /* @__PURE__ */ D.jsx(Tm, { ...t }) }), Gr = {
  500: "#E0004D",
  400: "#EE0857",
  300: "#FA1664"
}, su = {
  500: "#F6BE00"
}, lu = {
  500: "#00A3E0"
}, {
  palette: { augmentColor: Lr }
} = Xl(), nc = {
  main: Gr[500],
  contrastText: "#fff"
}, oc = {
  main: lu[500],
  contrastText: "#fff"
}, ac = {
  main: su[500],
  contrastText: "#000"
}, or = {
  // primary / teacher
  primary: nc,
  teacher: Lr({ color: nc }),
  // secondary / indy
  secondary: ac,
  indy: Lr({ color: ac }),
  // tertiary / student
  tertiary: Lr({ color: oc }),
  student: Lr({ color: oc }),
  // other
  white: Lr({ color: { main: "#fff" } }),
  black: Lr({ color: { main: "#000" } }),
  info: { main: "#f1ecec" },
  error: { main: "#d50000" }
}, vh = ({
  open: e = !0,
  error: t = !1,
  onClose: r,
  children: n,
  bgcolor: o = "secondary"
}) => {
  const [a, i] = ot(e);
  if (Be(() => {
    i(e);
  }, [e]), !a) return /* @__PURE__ */ D.jsx(D.Fragment, {});
  const s = or[o].contrastText;
  return /* @__PURE__ */ D.jsx(
    pi,
    {
      boxProps: {
        bgcolor: {
          secondary: "#ffd23b",
          tertiary: "#08bafc"
        }[o]
      },
      sx: { paddingY: "5px" },
      children: /* @__PURE__ */ D.jsxs(gr, { direction: "row", alignItems: "center", gap: 2, children: [
        t ? /* @__PURE__ */ D.jsx(Wv, { htmlColor: s }) : /* @__PURE__ */ D.jsx(Gv, { htmlColor: s }),
        /* @__PURE__ */ D.jsx(bt, { variant: "body2", color: s, mb: 0, children: n }),
        /* @__PURE__ */ D.jsx(
          Pi,
          {
            style: { marginLeft: "auto" },
            onClick: () => {
              i(!1), r !== void 0 && r();
            },
            children: /* @__PURE__ */ D.jsx(Yv, { htmlColor: s })
          }
        )
      ] })
    }
  );
};
function Fs() {
  const e = Dm(), t = yh();
  return (r, n = void 0) => {
    if (typeof r == "number") e(r);
    else {
      const { next: o = !0, ...a } = n || {};
      e(
        o && "next" in t ? t.next : r,
        a
      );
    }
  };
}
function uu() {
  return Nm();
}
function yh(e, t) {
  const r = Object.fromEntries(ay()[0].entries());
  return e ? Ls(r, Jl(e), t) : r;
}
function Xg(e, t) {
  const r = Lm();
  return e ? Ls(r, Jl(e), t) : r;
}
function lx({
  shape: e,
  children: t,
  onValidationError: r,
  onValidationSuccess: n = () => {
  },
  validateOptions: o
}) {
  const a = Xg(e, o), i = Fs();
  return Be(
    () => {
      a ? n(a) : r(i);
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), a ? t(a) : /* @__PURE__ */ D.jsx(D.Fragment, {});
}
function gs(e = Ns) {
  return uy(Cy) ? JSON.parse(ci.get(e)) : void 0;
}
gs.predefine = (e = Ns) => () => gs(e);
function Jg(e, t = {}) {
  const { userType: r, next: n = !0 } = t, { pathname: o } = uu(), a = Fs(), i = gs(), s = r && (!i || i.user_type !== r);
  return Be(() => {
    s && a({
      pathname: "/login" + {
        teacher: "/teacher",
        student: "/student",
        indy: "/independent"
      }[r],
      search: n ? iy({ next: o }).toString() : void 0
    });
  }, [a, s, r, n, o]), s ? /* @__PURE__ */ D.jsx(D.Fragment, {}) : typeof e == "function" ? e(i) : e;
}
function e1(e, t = 32, r = "state") {
  const n = ou(e, r), o = sessionStorage.getItem(n), [a, i] = ot();
  Be(() => {
    let l;
    o && o.length === t ? l = o : (l = nu(t), sessionStorage.setItem(n, l)), i(l);
  }, [n, o, t]);
  const s = Cm(() => {
    sessionStorage.removeItem(n), i(void 0);
  }, [n]);
  return [a, s];
}
function t1(e, t = 128, r = "codeChallenge") {
  const n = ou(e, r), o = sessionStorage.getItem(n), [a, i] = ot();
  Be(() => {
    let l;
    if (o) {
      const u = JSON.parse(o);
      typeof u == "object" && u && "verifier" in u && typeof u.verifier == "string" && u.verifier.length === t && "challenge" in u && typeof u.challenge == "string" && "method" in u && u.method === "S256" && (l = {
        verifier: u.verifier,
        challenge: u.challenge,
        method: u.method
      });
    }
    l ? i(l) : Ym(t).then((u) => {
      sessionStorage.setItem(
        n,
        JSON.stringify(u)
      ), i(u);
    }).catch((u) => {
      u && console.error(u);
    });
  }, [n, o, t]);
  const s = Cm(() => {
    sessionStorage.removeItem(n), i(void 0);
  }, [n]);
  return [a, s];
}
function r1({
  provider: e,
  authUri: t,
  clientId: r,
  redirectUri: n,
  scope: o,
  responseType: a = "code",
  accessType: i = "offline",
  prompt: s,
  useSessionMetadata: l,
  useLoginMutation: u,
  onCreateSession: p,
  onRetrieveSession: f
}) {
  const [c, m] = e1(e), [
    {
      verifier: h,
      challenge: y,
      method: C
    } = {},
    d
  ] = t1(e), [
    R,
    {
      originalArgs: b = {},
      isLoading: E,
      isError: w
    }
  ] = u(), g = l(), v = Fs(), _ = yh({ code: xe.string(), state: xe.string() }) || {}, O = uu().state || {};
  if (Be(() => {
    _.code && _.state && v(".", {
      // Removes the URL containing the search params from the history stack.
      replace: !0,
      // Ensure we don't break the auth flow by navigating to another page.
      next: !1,
      // Store the search params in the page's state instead.
      state: { code: _.code, state: _.state }
    });
  }, [_.code, _.state, v]), Be(() => {
    g ? f(g) : (
      // If the state and code verifier have been generated...
      c && h && // ...and the page's state contains a code...
      O.code && // ...and the page's state contains the stored state...
      O.state === c && // ...and the login endpoint was not called with the current values or has
      // not returned an error...
      (b.code !== O.code || b.code_verifier !== h || b.redirect_uri !== n || !w) && // ...and the login endpoint is not currently being called...
      !E && R({
        code: O.code,
        code_verifier: h,
        redirect_uri: n
      }).unwrap().then(p).catch(() => {
        v(".", {
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
        m(), d();
      })
    );
  }, [
    v,
    n,
    // State
    c,
    O.state,
    m,
    // Code
    h,
    O.code,
    d,
    // Login
    R,
    E,
    w,
    b.code,
    b.code_verifier,
    b.redirect_uri,
    // Session
    g,
    p,
    f
  ]), c && y && C) {
    const q = {
      client_id: r,
      redirect_uri: n,
      scope: o,
      response_type: a,
      access_type: i,
      state: c,
      code_challenge: y,
      code_challenge_method: C
    };
    return s && (q.prompt = s), [
      t + "?" + new URLSearchParams(q).toString(),
      q
    ];
  }
  return [];
}
const ux = (e) => r1(
  // @ts-expect-error value is assignable
  "useSessionMetadata" in e ? e : { ...e, useSessionMetadata: gs }
), n1 = ({
  children: e,
  session: t
}) => {
  const { state: r } = Nm();
  let { scroll: n, notifications: o } = r || {};
  return n = n || { x: 0, y: 0 }, o = o || [], Be(() => {
    window.scroll(n.x, n.y);
  }, [n.x, n.y]), /* @__PURE__ */ D.jsx(D.Fragment, { children: Jg((a) => {
    if (typeof e == "function" && (e = e(a)), o.length) {
      const i = Rm.toArray(e);
      return o.forEach((s, l) => {
        i.splice(
          s.index ?? l,
          0,
          /* @__PURE__ */ D.jsx(vh, { ...s.props })
        );
      }), i;
    }
    return e;
  }, t) });
};
function o1(e, t = {}) {
  function r(o, a, i) {
    typeof o.__ == "object" && (i = i ? { ...i, ...o.__ } : o.__);
    const s = typeof e == "string" && i ? jm(e, i) : e;
    Object.entries(o).forEach(([l, u]) => {
      if (l !== "__")
        if (u = u, typeof u == "string") {
          if (typeof s == "string" && (!a || l !== "_")) {
            let p = s + u;
            p.endsWith("/") && (p = p.slice(0, -1)), o[l] = p;
          }
        } else
          r(u, !1, i);
    });
  }
  const n = { ...t, _: typeof e == "string" ? e : "", __: e };
  return e === "" ? n._ = "/" : r(n, !0), n;
}
function a1(e, t) {
  return e.__[t];
}
const i1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getParam: a1,
  path: o1
}, Symbol.toStringTag, { value: "Module" })), cx = (e) => /* @__PURE__ */ D.jsx(Sm, { component: xi, ...e }), ic = (e) => /* @__PURE__ */ D.jsx(Or, { ...e, component: xi }), dx = (e) => /* @__PURE__ */ D.jsx(Pi, { ...e, component: xi }), fx = (e) => /* @__PURE__ */ D.jsx(yv, { ...e, component: xi }), px = (e) => /* @__PURE__ */ D.jsx(Pm, { ...e, component: xi });
function mx() {
  return Em(null);
}
function hx({
  props: e,
  attrs: t,
  eventTypes: r
}) {
  const [n, o] = ot();
  return Be(() => {
    if (document.querySelector(`script[src="${e.src}"]`))
      throw Error("already exists");
    const a = document.createElement("script");
    Object.entries(e).forEach(([s, l]) => {
      a[s] = l;
    }), t !== void 0 && Object.entries(t).forEach(([s, l]) => {
      a.setAttribute(s, l);
    });
    function i(s) {
      o(s.type);
    }
    return r?.forEach((s) => {
      a.addEventListener(s, i);
    }), document.head.appendChild(a), () => {
      r?.forEach((s) => {
        a.removeEventListener(s, i);
      }), document.head.removeChild(a);
    };
  }, [r, t, e]), n;
}
function s1(e, t = 1) {
  if (e <= 0) throw Error("seconds must be > 0");
  if (t <= 0) throw Error("interval must be > 0");
  const [r, n] = ot(e);
  return Be(() => {
    const o = setInterval(() => {
      n((a) => (a = a - t, a < 0 ? 0 : a));
    }, t * 1e3);
    return () => {
      clearInterval(o);
    };
  }, [t]), [r, n];
}
function bx(e, t, r, n = {}) {
  const { options: o, deps: a = [] } = n;
  Be(
    () => (e.addEventListener(t, r, o), () => {
      e.removeEventListener(t, r, o);
    }),
    // TODO: simplify this hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    a
  );
}
const vx = ({
  delta: e,
  to: t,
  ...r
}) => {
  const n = Fs();
  return Be(() => {
    typeof e == "number" ? n(e) : n(t, r);
  }, [n, e, t, r]), /* @__PURE__ */ D.jsx(D.Fragment, {});
}, l1 = ({
  header: e,
  subheader: t,
  textAlign: r = "start",
  imageProps: n,
  button1Props: o,
  button2Props: a,
  bgcolor: i = "primary"
}) => {
  const s = or[i].contrastText;
  return /* @__PURE__ */ D.jsx(
    pi,
    {
      boxProps: {
        bgcolor: {
          primary: Gr[500],
          secondary: su[500],
          tertiary: lu[500]
        }[i]
      },
      sx: { paddingY: 0 },
      children: /* @__PURE__ */ D.jsxs(
        gr,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: r,
          gap: 2,
          children: [
            /* @__PURE__ */ D.jsxs(
              gr,
              {
                py: {
                  xs: "80px",
                  md: n !== void 0 ? 0 : "100px"
                },
                textAlign: r,
                children: [
                  /* @__PURE__ */ D.jsx(
                    bt,
                    {
                      variant: "h2",
                      color: s,
                      mb: t !== void 0 ? void 0 : 0,
                      children: e
                    }
                  ),
                  t !== void 0 && /* @__PURE__ */ D.jsx(
                    bt,
                    {
                      color: s,
                      variant: "h4",
                      mb: o !== void 0 ? void 0 : 0,
                      children: t
                    }
                  ),
                  /* @__PURE__ */ D.jsxs(gr, { direction: "row", gap: 2, children: [
                    o !== void 0 && /* @__PURE__ */ D.jsx(ic, { ...o }),
                    a !== void 0 && /* @__PURE__ */ D.jsx(ic, { ...a })
                  ] })
                ]
              }
            ),
            n !== void 0 && /* @__PURE__ */ D.jsx(
              bh,
              {
                ...n,
                display: { xs: "none", md: "block" },
                maxWidth: "320px",
                marginLeft: "auto"
              }
            )
          ]
        }
      )
    }
  );
}, u1 = ({ header: e, tabs: t, originalPath: r, value: n = 0 }) => {
  const o = Lm(), a = Dm(), [i, s] = ot(
    n < 0 ? 0 : n >= t.length ? t.length - 1 : n
  ), l = t.map((f) => f.label), u = t.map((f) => f.children), p = t.map((f) => f.path);
  return Be(() => {
    s(n);
  }, [n]), Be(() => {
    const f = Ls(
      o,
      Jl({
        tab: Ar().oneOf(p).required()
      })
    )?.tab;
    f !== void 0 && s(p.indexOf(f));
  }, [o, p]), /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    /* @__PURE__ */ D.jsx(
      pi,
      {
        boxProps: { bgcolor: Gr[500] },
        sx: { paddingY: "100px" },
        className: "flex-center",
        children: /* @__PURE__ */ D.jsx(
          bt,
          {
            textAlign: "center",
            variant: "h2",
            style: { color: "white" },
            mb: 0,
            children: e
          }
        )
      }
    ),
    /* @__PURE__ */ D.jsx(
      pi,
      {
        boxProps: { bgcolor: Gr[300] },
        sx: { paddingY: "6px" },
        className: "flex-center",
        children: /* @__PURE__ */ D.jsx(
          gv,
          {
            value: i,
            onChange: (f, c) => {
              a(
                jm(r, {
                  tab: p[c]
                })
              );
            },
            ScrollButtonComponent: ({
              disabled: f,
              onClick: c,
              direction: m
            }) => /* @__PURE__ */ D.jsx(D.Fragment, { children: f === !1 && /* @__PURE__ */ D.jsx(
              Pi,
              {
                onClick: c,
                style: {
                  padding: 0,
                  [m === "left" ? "marginRight" : "marginLeft"]: "15px",
                  color: "white"
                },
                children: m === "left" ? /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx(Kv, {}) }) : /* @__PURE__ */ D.jsx(D.Fragment, { children: /* @__PURE__ */ D.jsx(Qv, {}) })
              }
            ) }),
            children: l.map((f) => /* @__PURE__ */ D.jsx(Pm, { disableRipple: !0, label: f }, f))
          }
        )
      }
    ),
    u[i]
  ] });
}, yx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: l1,
  Notification: vh,
  Page: n1,
  Section: pi,
  TabBar: u1
}, Symbol.toStringTag, { value: "Module" })), c1 = ({
  headers: e,
  children: t,
  containerProps: r,
  headProps: n,
  headRowProps: o,
  bodyProps: a,
  ...i
}) => /* @__PURE__ */ D.jsx(Rv, { ...r, children: /* @__PURE__ */ D.jsxs(Ev, { ...i, children: [
  /* @__PURE__ */ D.jsx(Cv, { ...n, children: /* @__PURE__ */ D.jsx(xm, { ...o, children: e.map((s, l) => {
    const u = `table-head-cell-${l}`;
    return typeof s == "string" || fv(s) ? /* @__PURE__ */ D.jsx(ys, { children: s }, u) : /* @__PURE__ */ D.jsx(ys, { ...s }, u);
  }) }) }),
  /* @__PURE__ */ D.jsx(_v, { ...a, children: t })
] }) }), d1 = ({ cellProps: e, ...t }) => /* @__PURE__ */ D.jsx(ys, { ...e, children: /* @__PURE__ */ D.jsx(gr, { ...t }) }), gx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BodyRow: xm,
  Cell: ys,
  CellStack: d1,
  Table: c1
}, Symbol.toStringTag, { value: "Module" })), f1 = ({
  path: e,
  routes: t,
  header: r = /* @__PURE__ */ D.jsx(D.Fragment, {}),
  // TODO: "header = <Header />"
  footer: n = /* @__PURE__ */ D.jsx(D.Fragment, {}),
  // TODO: "footer = <Footer />"
  headerExcludePaths: o = [],
  footerExcludePaths: a = []
}) => /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
  !o.includes(e) && r,
  /* @__PURE__ */ D.jsx(ly, { children: t }),
  !a.includes(e) && n
] }), p1 = (e) => {
  const { pathname: t } = uu();
  return /* @__PURE__ */ D.jsx(f1, { path: t, ...e });
}, Rx = ({
  path: e,
  theme: t,
  store: r,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: n = 3600,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: o = 3600,
  ...a
}) => /* @__PURE__ */ D.jsxs(qm, { theme: t, children: [
  /* @__PURE__ */ D.jsx(wv, {}),
  /* @__PURE__ */ D.jsx(Fm, { store: r, children: /* @__PURE__ */ D.jsx(sy, { children: /* @__PURE__ */ D.jsx(p1, { ...a }) }) })
] }), Ex = ({
  open: e = !1,
  onClick: t,
  ...r
}) => {
  const [n, o] = Hr.useState(e);
  return Hr.useEffect(() => {
    o(e);
  }, [e]), /* @__PURE__ */ D.jsx(
    Tv,
    {
      open: n,
      onMouseOver: () => {
        n || o(!0);
      },
      onMouseLeave: () => {
        o(!1);
      },
      onClick: $m(
        {
          after: () => {
            o(!n);
          }
        },
        t
      ),
      ...r
    }
  );
}, Cx = ({
  content: e,
  children: t = /* @__PURE__ */ D.jsx(Zv, {}),
  ...r
}) => /* @__PURE__ */ D.jsx(
  Pi,
  {
    "data-testid": "copy-icon-button",
    onClick: () => {
      navigator.clipboard.writeText(e);
    },
    ...r,
    children: t
  }
), m1 = ({
  seconds: e,
  start: t = !0,
  onEnd: r,
  ...n
}) => {
  e = Math.floor(e);
  const o = s1(e)[0], [a, i] = ot(!t);
  o === 0 && !a && (i(!0), r()), e = Math.floor(o % 60);
  const s = Math.floor(o / 60);
  return /* @__PURE__ */ D.jsx(D.Fragment, { children: o > 0 && /* @__PURE__ */ D.jsxs(bt, { ...n, children: [
    s > 0 && `${s} ${s > 1 ? "mins" : "min"} `,
    e > 0 && `${e} ${e > 1 ? "secs" : "sec"}`
  ] }) });
}, _x = ({
  children: e = "Download",
  endIcon: t = /* @__PURE__ */ D.jsx(Xv, {}),
  file: r,
  ...n
}) => {
  let o, a;
  if ("mimeType" in r) {
    const { text: i, mimeType: s, name: l, charset: u = "utf-8" } = r;
    let { extension: p } = r;
    p || (p = "." + { plain: "txt", csv: "csv" }[s]), a = {
      download: l + p,
      href: `data:text/${s};charset=${u},${encodeURIComponent(i)}`
    };
  } else
    o = URL.createObjectURL(r), a = { href: o };
  return Be(() => () => {
    o && URL.revokeObjectURL(o);
  }, [o]), /* @__PURE__ */ D.jsx(Or, { endIcon: t, ...n, ...a, children: e });
}, wx = ({
  containerProps: e,
  toolbarProps: t,
  elevation: r = 4,
  children: n,
  ...o
}) => {
  const a = Sv({
    disableHysteresis: !0,
    threshold: 0
  });
  return pv(
    /* @__PURE__ */ D.jsx(Pv, { elevation: r, ...o, children: /* @__PURE__ */ D.jsx(Tm, { ...e, children: /* @__PURE__ */ D.jsx(xv, { ...t, children: n }) }) }),
    {
      position: a ? "fixed" : "sticky"
    }
  );
}, Tx = ({
  children: e,
  inputProps: t,
  ...r
}) => /* @__PURE__ */ D.jsxs(Or, { component: "label", ...r, children: [
  e,
  /* @__PURE__ */ D.jsx("input", { type: "file", hidden: !0, ...t })
] }), Sx = ({
  styleType: e,
  listProps: t = {},
  pl: r = 4,
  children: n
}) => {
  const { sx: o, ...a } = t, i = { display: "list-item" };
  return /* @__PURE__ */ D.jsx(
    qv,
    {
      sx: {
        listStyleType: e,
        pl: r,
        ".MuiListItem-root": i,
        ".MuiListItemText-root": i,
        ...o
      },
      ...a,
      children: n
    }
  );
}, Px = ({
  rows: e,
  containerProps: t = {},
  globalItemProps: r
}) => {
  const n = Number(t.columns ?? 12), o = (s) => Math.floor(n / s), a = (s, l, u) => Math.floor(l / o(u)) * e.length + s, i = (s, l) => {
    const u = e[0].length % o(l);
    return u !== 0 && s === e[0].length - 1 ? (n - u * l) / 2 : 0;
  };
  return /* @__PURE__ */ D.jsx(Hu, { container: !0, ...t, children: e.map(
    (s, l) => s.map(({ element: u, itemProps: p = {} }, f) => /* @__PURE__ */ D.jsx(
      Hu,
      {
        order: {
          xs: a(l, f, r.xs),
          sm: a(l, f, r.sm),
          md: a(l, f, r.md),
          lg: a(l, f, r.lg),
          xl: a(l, f, r.xl)
        },
        xsOffset: i(f, r.xs),
        smOffset: i(f, r.sm),
        mdOffset: i(f, r.md),
        lgOffset: i(f, r.lg),
        xlOffset: i(f, r.xl),
        ...r,
        ...p,
        children: u
      },
      `${l}-${f}`
    ))
  ) });
}, xx = ({
  elementId: e,
  options: t,
  ...r
}) => /* @__PURE__ */ D.jsx(
  Sm,
  {
    ...r,
    onClick: () => {
      document.getElementById(e)?.scrollIntoView(t);
    }
  }
), qx = ({
  children: e,
  useLazyListQuery: t,
  preferCacheValue: r,
  filters: n,
  page: o = 0,
  rowsPerPage: a = 50,
  rowsPerPageOptions: i = [50, 100, 150],
  stackProps: s,
  onRowsPerPageChange: l,
  onPageChange: u,
  ...p
}) => {
  const [f, c] = t(), [{ limit: m, page: h, offset: y }, C] = ih({
    page: o,
    limit: a
  });
  Be(
    () => {
      f({ limit: m, offset: y, ...n }, r);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      f,
      m,
      y,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(n || {}),
      r
    ]
  );
  const { count: d, max_limit: R } = c.data || {};
  return R && (i = i.filter(
    (b) => b <= R
  )), /* @__PURE__ */ D.jsxs(gr, { ...s, children: [
    eh(
      c,
      ({ data: b }) => e(b, {
        limit: m,
        page: h,
        offset: y,
        count: d,
        maxLimit: R
      })
    ),
    /* @__PURE__ */ D.jsx(
      Mv,
      {
        component: "div",
        count: d ?? 0,
        rowsPerPage: m,
        onRowsPerPageChange: (b) => {
          C({ limit: parseInt(b.target.value), page: 0 }), l && l(b);
        },
        page: h,
        onPageChange: (b, E) => {
          C(({ limit: w }) => ({ limit: w, page: E })), u && u(b, E);
        },
        rowsPerPageOptions: i.sort((b, E) => b - E),
        ...p
      }
    )
  ] });
}, Mx = ({
  src: e,
  style: t = {},
  ...r
}) => /* @__PURE__ */ D.jsx(
  ks,
  {
    component: "iframe",
    width: "100%",
    src: e,
    title: "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
    style: { border: "0px", aspectRatio: "16 / 9", ...t },
    ...r
  }
), Ox = ({ open: e, onClose: t }) => /* @__PURE__ */ D.jsxs(Mm, { open: e, onClose: t, children: [
  /* @__PURE__ */ D.jsx(bt, { variant: "h5", textAlign: "center", children: "Where did you go? 👀" }),
  /* @__PURE__ */ D.jsx(bt, { textAlign: "center", children: "We noticed that you have been inactive for a while. Are you still there? For your online safety we will log you out in:" }),
  /* @__PURE__ */ D.jsx(
    m1,
    {
      textAlign: "center",
      variant: "h5",
      seconds: 120,
      onEnd: () => {
        t(), alert("TODO: call logout endpoint");
      }
    }
  ),
  /* @__PURE__ */ D.jsx(bt, { textAlign: "center", children: "You may lose progress unless you continue or save." }),
  /* @__PURE__ */ D.jsx(Or, { onClick: t, autoFocus: !0, children: "Wait, I'm still here!" })
] }), h1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20511.91%20423.62'%3e%3cdefs%3e%3cstyle%3e.d{fill:%23f9c5db;}.e{fill:%23fff;}.f{fill:%23666;}.g{fill:%23db5d90;}.h{fill:%23afafaf;}.i{fill:%235b5a5b;}.j{opacity:.2;}%3c/style%3e%3c/defs%3e%3cg%20id='a'/%3e%3cg%20id='b'%3e%3cpath%20class='d'%20d='M442.29,190.69c-4.39-18.43-13.61-35.22-22.63-51.72-2.21-4.04-4.38-8.11-6.49-12.2-.07-.13-.15-.37-.24-.62-.09-.56-.22-1.26-.27-1.5-.35-1.67-.71-3.47-.94-5.22,.17,.84,.17-2.04,.07-3.29-.21-2.8-.49-5.71-1.13-8.45-1.27-5.43-4.12-9.99-7.23-14.49-2.25-3.27-4.6-6.48-6.59-9.92-.51-.88-.98-1.79-1.46-2.69-.01-.03-.03-.06-.04-.09-.1-.52-.3-1.36-.42-1.68,0-.08,0-.15,0-.24-.25-7.47-1.39-15.18-3.36-22.4-4.34-15.9-13.85-30.79-29.48-37.38-10.06-4.25-21.31-5.05-31.65-1.16-5.07,1.91-9.75,4.4-14.44,7.09-.67,.38-1.33,.76-2,1.14-.09-.07-.17-.13-.24-.18-.89-.7-1.77-1.4-2.66-2.09-4.9-3.81-9.64-7.47-15.34-10-12.16-5.41-25.49-7.1-38.72-7.13-6-3.36-12.68-5.63-20.27-6.29-19.81-1.71-35.07,9.1-50.05,19.98-1.84,.87-3.65,1.79-5.43,2.76-11.73-2.88-23.23-6.51-35.37-7.64-16.82-1.56-32.38,3.66-45.25,14.38-5.58,4.65-10.45,10.7-14,17.38-11.73-2.99-24.82-.3-33.89,8.54-2.85,2.78-5.27,6.15-6.98,9.75-.74,1.55-1.52,3.11-2.19,4.69-6.99,3.63-13.43,6.54-18.48,13.08-5.54,7.17-8.17,15.32-9.36,24.21-.58,4.3-.78,8.52-.87,12.85-.03,1.77-.06,3.54-.14,5.32-.05,1.17-.2,2.35-.22,3.52,0,.05,0,.07,0,.11-.02,.05-.03,.09-.05,.16-.27,.86-1.49,4.85-.87,3.73-.57,1.18-1.24,2.31-1.87,3.45-2.45,4.43-4.95,9.05-6.21,13.98-2.6,10.17-.92,20.53,1.19,30.62,1.99,9.53,5.06,19.27,9.72,28.06-.18,.57-.32,1.16-.42,1.77-2.48,14.32-4.41,28.45-1.82,42.89,2.62,14.62,11.3,25.55,22.21,35.04,2.12,1.85,4.25,3.69,6.2,5.72,.6,.63,3.12,4.22,1.03,.93,.88,1.38,1.76,2.72,2.57,4.15,3.65,6.37,7.45,12.39,12.6,17.71,5.44,5.63,12.04,12.23,19.71,14.34,1.1,.3,2.19,.49,3.27,.58,1.27,1.04,2.59,2.03,3.93,3,.49,1.1,1.04,2.17,1.63,3.23,2.77,4.92,7.75,7.89,13.06,8.76,.6,.65,1.2,1.31,1.79,1.97,3.76,4.21,7.45,8.48,11.09,12.8,1.53,1.81,3.04,3.64,4.52,5.49,.29,.36,1.27,1.64,1.56,2,.5,.66,.99,1.33,1.48,2,3.11,4.29,6.03,8.73,8.6,13.37,5.42,9.78,8.61,19.81,17.84,26.94,10.02,7.75,22.28,10.02,34.59,11.32,12.11,1.27,25.35,.72,34.91-7.83,21.04-18.81,.59-49.34-14.08-65.08-8.43-9.04-18.2-16.49-28.57-23.08,9.77-2.69,18.56-7.88,24.67-16.9,2.18-3.21,3.76-6.87,4.87-10.57,.23-.78,.41-1.57,.57-2.36,1.78-1.12,3.91-2.13,5.26-3.14,4.02-3.01,7.77-6.12,11.24-9.74,4.61-4.8,6.41-12.13,4.66-18.46,2.6-.17,5.2-.64,7.81-1.01,9.57-1.35,19.14-2.8,28.66-4.47,18.7-3.27,37.29-7.36,55.41-13.08,12.41-3.92,24.3-9.45,36.49-14.02,4.91,.32,9.79-1.21,13.52-4.49,.5-.14,.99-.29,1.49-.42,17.65-4.73,36.7,1.28,53.41-7.59,4.09-2.17,7.51-5.13,10.14-8.66,7.9-3.99,12.07-12.5,9.92-21.51Zm-161.74-110.32c.03-.22,.05-.45,.08-.71,.06,.04,.01,.32-.08,.71Zm-116.35,174.2l-.05-.28c.14,.03,.27,.05,.41,.07-.12,.07-.24,.14-.36,.21Zm217.74-50.6c0,.43,0,.86,.03,1.28-.22,0-.44,.02-.66,.03,.21-.44,.42-.87,.63-1.31ZM313.52,25.5s-.03-.02,0,0h0ZM43.06,70.85c-.27,.26-.42,.24,0,0h0Zm160.22,227.41c-.17,.09-.71,.52-1.66,1.28,.47-.68,1.21-1.3,2.08-1.89-.13,.21-.27,.41-.42,.61Z'/%3e%3cpath%20class='f'%20d='M151.43,412.81c-21.81-28.05-42.03-56.46-67.07-81.79l.29-.41c22.02,15.35,39.34,36.47,53.86,58.84,4.84,7.49,9.37,15.17,13.38,23.14l-.45,.22h0Z'/%3e%3cpath%20class='f'%20d='M137.94,258.21c17.21,15.87,21.48,40.05,4.62,57.96-8.03,8.83-18.23,15.19-28.93,20.23-1.05,.49-2.13,.96-3.3,1.43-.68,.12-1.32,.3-1.87,.36-30.97,3.76-53.28-17.65-62.97-45.27l2.16,2.23c-.95-.43-1.69-.81-2.51-1.23-14.65-7.92-28.03-20.03-34-35.9-3.7-9.79-3.97-20.93-1.03-30.81l.49,.1c-1.11,5.8-1.49,11.76-.59,17.61,3.02,21.31,20.64,37.47,39.34,46.21l.16,.07,.06,.16c2.39,6.17,5.35,12.12,9.04,17.59,3.64,5.46,8.13,10.45,13.32,14.47,10.28,7.99,24.34,11.99,36.99,9.88,14.78-6.28,30.14-15.16,38.07-29.65,5.83-11.05,4.01-24.66-2.15-35.19-2.02-3.56-4.43-6.94-7.24-9.9l.35-.36h0Z'/%3e%3cpath%20class='f'%20d='M27.46,222.17c-8.91-6.16-15.79-14.98-20.61-24.63-15.83-30.94-2.67-67.45,23.43-88.04l.37,.33c-3.06,3.58-7.03,8.52-9.64,12.33-19.27,27.09-22.14,59.5-3.07,87.55,2.88,4.34,6.14,8.46,9.86,12.09l-.33,.37h0Z'/%3e%3cpath%20class='f'%20d='M22.29,119.02c-3.79-12.15-4.93-27.75,2.01-39.02,2.02-3.31,5.16-6.1,8.75-7.72,2.72-1.24,5.28-2.55,7.75-4.04,4.52-2.89,8.94-6.32,11.66-10.9,.44-1.01,1.09-1.78,1.7-2.61,7.74-9.88,20.64-13.83,30.48-4.47l-.27,.42c-7.43-4.82-16.18-4.26-22.64,1.9-2.02,1.85-3.81,4.01-5.19,6.35-.5,1.23-1.54,2.88-2.46,4.08-2.88,3.82-6.63,6.9-10.64,9.45-5.14,3.49-11.89,4.55-15.37,10.16-6.63,10.14-6.39,24.65-5.28,36.34l-.49,.07h0Z'/%3e%3cpath%20class='f'%20d='M101.06,97.94c-16.06-4.22-25.06-17.92-19.42-34.18,3.35-9.68,8.2-19.07,14.86-26.9,7.87-9.22,18.31-16.7,30.21-19.57,7.99-1.66,16.54-.12,23.9,2.21,5.9,1.98,11.57,4.42,16.77,7.71l-.21,.45c-5.53-2.37-11.31-4.21-17.17-5.54-5.85-1.35-11.9-2.06-17.86-1.54-19.17,2.75-34.69,19.81-42.92,36.44-1.4,2.91-3.37,7.3-4.37,10.37-2.09,6.36-1.5,13.63,2.44,19.16,3.38,4.92,8.47,8.6,13.93,10.92l-.17,.47h0Z'/%3e%3cpath%20class='f'%20d='M222.86,8.58c-20.62-.37-39.77,10.41-49.37,28.44-4.75,8.27-7.95,17.74-6.82,27.2,1.23,9.55,6.94,18.16,14.57,23.91,4.25,4.33,10.56,7.19,16.69,6.2,.72-.1,2.24-.35,2.97-.45,3.74,5.24,4.49,13.15-.44,17.83-.56,.59-1.23,1.06-1.82,1.58l-.34-.37c.51-.57,1.08-1.09,1.54-1.7,3.55-4.25,2.88-10.56-.25-14.86l.33,.11c-7.4,2.48-16.1-.49-21.36-5.5-13.67-9.24-20.29-25.92-15.53-41.88,4.54-15.12,14.77-28.97,29.08-36.04,9.5-4.65,20.36-6.44,30.84-4.94l-.09,.49h0Z'/%3e%3cpath%20class='f'%20d='M208.82,29.72c3.06-6.17,8.58-11.41,15.39-13.1,2.3-.67,4.72-.73,7.11-.68l-.77,.11c16.73-7,45.75-16.61,61.69-4.02,7.33,5.02,15.97,7.39,23.17,12.95,4.68,3.47,8.18,8.46,10.46,13.78,1.22,3.08,2.03,5.92,2.74,9.13,.71,3.17,1.3,7.92,1.74,11.16,.83,5.5,1.47,11.05,2.98,16.39,.04,.11,.06,.12,.08,.18l.03,.08v.04l.12,.23c.58,1.26,.96,2.72,1.27,3.99,1.87,8.86,3.6,21.66-2.41,29.43-1.54,1.93-4.03,3.42-6.55,3.93-.42,.12-.86,.19-1.3,.35-16.56,5.08-47.28,23.42-63.2,11.85-6.73-4.79-10.14-12.9-11.28-20.77-.78-6.24-.79-12.78,2.13-18.55l2.06,2.61c-2.85,.53-5.61,.37-8.39-.26-8.19-1.76-13.79-8.51-16.56-16.05l.46-.2c.8,1.65,1.73,3.49,2.78,5.01,3.07,4.79,7.98,8.53,13.64,9.53,2.69,.52,5.51,.46,8.14-.19-1.47,2.7-1.91,5.86-2.05,8.95-.25,8.56,1.87,17.79,7.81,24.18,3.98,4.42,9.75,6.23,15.6,5.58,11.62-1.15,22.5-6.08,33.19-10.54,5.41-2.24,10.71-4.85,16.43-6.3,1.33-.34,2.51-1.12,3.38-2.19,4.89-6.41,2.84-20.94,.33-28.21-2.14-5.93-2.56-12.25-3.53-18.42-.41-3.14-.94-7.72-1.61-10.81-1.55-7.71-4.88-15.51-11.3-20.37-4.54-3.65-10.02-5.9-15.15-8.62-3.91-1.96-7.52-4.61-11.12-7.04-11.31-6.02-26.41-3-38.37-.24-5.68,1.43-11.3,3.16-16.76,5.24-2.22-.14-4.47-.2-6.64,.34-6.51,1.35-11.99,6.1-15.28,11.76l-.44-.23h0Z'/%3e%3cpath%20class='f'%20d='M311.48,27.06c7.57-7.87,18.84-16.99,30.49-16.05,19.31,2.51,43.75,14.12,48.92,34.68,2.45,10.77,3.61,23.1-1.2,33.42l.56-2.4c.1,1.11,.37,2.25,.78,3.27,.7,1.67,1.64,2.83,3.15,3.59,2.07,.77,4.18,1.3,6.27,2.21,10.93,4.24,17.68,15.08,15.89,26.8-1.25,10.43-9.13,19.74-18.77,22.96l-.21-.45c2.92-1.43,5.63-3.28,7.95-5.55,9.36-8.81,11.67-25.51,1.81-34.8-2.35-2.21-5.2-3.83-8.23-4.98-3.02-1.32-6.58-1.49-9.14-3.79-2.58-2.27-3.91-5.6-4.27-8.97-.02-.13,0-.14,.06-.25,3.97-9.4,2.6-20.19,.56-29.93-3.84-15.21-18.86-24.21-32.65-29.45-4.77-1.63-9.71-3.37-14.79-3.43-5.09,.17-9.93,2.26-14.35,4.67-4.45,2.49-8.65,5.48-12.5,8.81l-.34-.37h0Z'/%3e%3cpath%20class='f'%20d='M359.05,101.57c13.08,1.53,24.07,11.47,26.11,24.71,.67,3.96,.78,8.16,1.35,12.13,1.07,7.82,2.37,15.62,4.23,23.29,1.25,6.09,3.42,11.85,4.34,17.9,2.43,14.92-1.95,31.82-15.54,40.1-1.26,.74-2.86,1.69-4.15,2.37-11.26,5.92-28.2,16.39-39.67,21.84-3.69,1.7-7.55,3.38-11.68,3.84l-.09-.49c3.87-.87,7.44-2.86,10.92-4.83,13.81-8.27,26.97-17.62,40.96-25.61,10.81-6.29,15.41-18.47,14.87-30.57-.02-8.12-3.05-15.71-4.56-23.57-2.06-9.87-3.46-19.9-3.93-29.97,.25-15.5-8.16-26.76-23.25-30.64l.09-.49h0Z'/%3e%3cpath%20class='f'%20d='M408.01,132.23c6.68-3.19,14.64-.21,18.26,6.23,1.17,1.85,2.09,4.26,2.89,6.27,1.48,3.8,2.98,8.11,4.41,11.95,2.12,6.22,4.76,13.86,6.71,20.1,1.85,5.6,3.4,11.49,3.76,17.45,.28,4.71,.02,10.32-2.47,14.72-2.31,3.88-4.61,7.65-7.83,11.03-8.16,9.08-21.38,12.19-33.04,10.72l-.02-.5c8.38-.47,16.91-2.31,23.87-7.15,6.1-4.2,10.11-10.66,13.43-17.15,2.27-6.27,1.15-13.21-.15-19.59-2.42-9.3-6.87-23.16-9.55-32.51-1.22-3.7-2.83-10.58-4.58-14.01-2.71-5.92-9.27-8.91-15.53-7.09l-.16-.47h0Z'/%3e%3cpath%20class='f'%20d='M221.65,273.51c2.26,9.89-2.86,20.36-10.84,26.3-8.02,5.94-18.74,7.75-28.08,4.56l-.02-.5c2.02-.15,4.73-.37,6.68-.71,13.4-1.78,25.65-10.16,30.09-23.24,.76-2.09,1.38-4.26,1.67-6.45l.5,.04h0Z'/%3e%3cpath%20class='f'%20d='M200.07,300.72c3.54,4.74,5.27,12.19,.36,16.88-1.33,1.29-2.95,2.41-4.44,3.5-8.96,6.27-19.78,11.25-31.01,10.18-8.27-.2-18.35-1.37-22.86-9.37-1.38-2.44-2.16-5.13-2.46-7.88l.47-.17c2.37,6.69,7.42,11.59,14.64,12.33,3.36,.49,6.8,.35,10.25,.37,3.47,.14,6.78-.08,10.12-.96,7.46-1.85,14.5-5.27,21.05-9.25,.7-.44,1.46-.88,2.1-1.42,4.09-3.36,2.96-9.61,1.32-14l.46-.2h0Z'/%3e%3cpath%20class='f'%20d='M176.12,326.86c24.94,11.54,50.15,41.47,49.33,70.03l-.49,.09c-4.51-21.44-17.93-39.76-32.96-55.19-5.11-5.13-10.46-10.07-16.17-14.53l.3-.4h0Z'/%3e%3cpath%20class='f'%20d='M137.61,234.31c-12.87-5.26-28.97-12.85-41.88-7.04-1.34,.62-3.31,1.96-4.59,2.75-11.69,7.35-22.74,15.2-34.81,22.2l-.34-.37c5.77-5.42,11.8-10.57,18.04-15.44,4.67-3.67,9.46-7.19,14.4-10.49,1.66-1.08,3.28-2.22,5.1-3.14,3.65-1.77,7.74-2.47,11.74-2.33,12.02,.6,23.14,6.48,32.65,13.46l-.31,.4h0Z'/%3e%3cpath%20class='f'%20d='M90.49,123.12c6.33,13.05,6.79,31.3-5.1,41.5-10.92,8.88-24.57,16.5-39.18,15.65-4.18-.4-8.44-1.75-11.45-4.52l.24-.44c6.92,3.68,15.23,2.4,22.36-.05,7.28-2.54,14.04-6.47,20.3-10.98,3.08-2.25,6.3-4.46,8.52-7.63,4.53-6.27,5.59-14.37,5.32-21.95-.14-3.85-.61-7.72-1.49-11.46l.48-.13h0Z'/%3e%3cpath%20class='f'%20d='M76.79,174.22c3.7,1.29,6.73,4.02,9.14,7.02,7.21,9.2,8.66,21.88,5.65,32.96l-.13-1.32c.12,.93,.23,1.85,.32,2.79,.25,2.86,.4,5.72,.17,8.61l-.48,.15c-1.04-3.12-2.49-7.38-3.46-10.47,1.28-13.81-1.06-29.39-11.54-39.35l.31-.39h0Z'/%3e%3cpath%20class='f'%20d='M161.1,151.64c18.17-8.77,42.86,4.98,40,26.29l-.49,.11c-1.08-4.19-2.72-8.24-5.15-11.81-6.15-9.08-17.16-13.47-27.83-14.07-2.16-.15-4.34-.19-6.48-.02l-.06-.5h0Z'/%3e%3cpath%20class='f'%20d='M195.26,197.53c9.79-9.84,24.22-14.13,37.94-13.48,1.11,.1,3.32,.32,4.42,.46,7.16,1.13,14.35,2.25,21.07,5.18,1.06,.51,2.08,1.12,2.81,2.1,1.44,1.78,1.05,4.71-.91,5.97l-4.67-6.12c4.01-2.82,8.54-4.73,13.23-6.02,4.5-1.22,9.21-1.75,13.86-1.45l.08,.49c-6.59,1.14-13.01,3.31-18.85,6.56-1.93,1.09-3.84,2.29-5.53,3.67l-.52-.68c-.19,.12-.03,.28-.13,.16-.82-.7-2-.99-3.03-1.34-3.93-1.17-8-1.9-12.05-2.61-5.43-.94-10.83-1.83-16.31-1.67-10.9,.26-21.85,3.41-31.11,9.19l-.29-.41h0Z'/%3e%3cpath%20class='f'%20d='M280.33,149.53c21.07,10.79,41.84,14.23,63.49,3.14,4.86-2.38,9.69-5.07,14.86-7l.29,.41-8.8,6.36c-8.7,6.56-19.03,11.36-30.03,11.98-14.62,.82-29.2-4.98-40.14-14.52l.34-.37h0Z'/%3e%3cpath%20class='f'%20d='M181.26,213.67c9.93,6.09,14.18,19.54,8.98,30.15-2.37,5.24-6.32,9.39-10.53,13.13-.7,.55-2.55,1.99-3.24,2.52-.76,.57-2.62,1.68-3.41,2.24-8.4,4.91-18.22,8-27.95,7.45l-.08-.49c7.4-1.54,14.6-4.36,21.17-8.09,2.82-1.6,5.82-3.63,8.32-5.7,6.91-5.72,13.87-13.25,13.91-22.75,.06-6.69-3.05-13.21-7.53-18.09l.35-.36h0Z'/%3e%3cpath%20class='f'%20d='M167.22,124.02c16.67-8.3,39.6-10.49,56.5-1.46,1.18,.63,2.62,1.58,3.71,2.33,6.81,5.05,13.4,10.22,19.4,16.43l-.27,.42-9.05-5.51c-3.22-1.95-10.39-6.51-13.52-8.33-1.47-.86-3.13-1.66-4.7-2.3-13.13-5.17-27.76-4.86-41.56-2.99-3.49,.48-6.97,1.08-10.39,1.89l-.13-.48h0Z'/%3e%3cpath%20class='g'%20d='M340.25,209.52c-25.34,51.85-74.22,96.17-129.16,52.06-5.91-4.68-11.34-9.88-16.4-15.37,16.15,14.34,36.02,27.42,58.32,26.95,29.45-1,49.96-26.56,62.8-50.65,3.26-6.21,6.29-12.71,8.64-19.29,1.48-4.46,6.3-6.88,10.76-5.4,4.81,1.56,7.2,7.13,5.03,11.69h0Z'/%3e%3cpath%20class='g'%20d='M450.9,222.82c-3.86,14.01-12.5,26.41-23.37,35.88-8.87,7.57-19.71,13.2-30.75,16.3-38.57,10.56-80.42-1.74-116.27-16.32,22.35,6.65,45.15,11.56,68.41,12.15,1.99,0,6.67-.07,8.57-.09,1.81-.07,6.59-.45,8.5-.58l5.59-.75c17.07-2.47,33.77-9.13,45.66-21.69,7.23-7.71,12.77-17.29,14.99-27.65,.57-5.45,5.76-9.39,11.19-8.31,5.12,.99,8.48,5.94,7.49,11.06h0Z'/%3e%3cg%3e%3cpath%20class='e'%20d='M328.57,220.35c-.65,0-1.3-.03-1.94-.08-16.21-1.28-28.15-18.25-26.61-37.84,1.47-18.67,14.76-33.29,30.26-33.29,.65,0,1.3,.03,1.94,.08,16.21,1.28,28.15,18.25,26.61,37.84-1.47,18.67-14.76,33.29-30.26,33.29Z'/%3e%3cpath%20class='h'%20d='M330.28,147.64v3h0c.6,0,1.22,.02,1.82,.07,15.39,1.21,26.71,17.46,25.23,36.23-1.41,17.89-14.04,31.91-28.76,31.91-.61,0-1.22-.02-1.83-.07-15.39-1.21-26.71-17.46-25.23-36.23,1.41-17.89,14.04-31.91,28.76-31.91v-3m0,0c-16.21,0-30.21,15.05-31.75,34.67-1.61,20.45,10.92,38.11,27.98,39.46,.69,.05,1.38,.08,2.06,.08,16.21,0,30.21-15.05,31.75-34.67,1.61-20.45-10.92-38.11-27.98-39.46-.69-.05-1.38-.08-2.06-.08h0Z'/%3e%3c/g%3e%3cellipse%20class='i'%20cx='334.82'%20cy='199.39'%20rx='13.2'%20ry='9.39'%20transform='translate(39%20453.06)%20rotate(-71.39)'/%3e%3cg%3e%3cpath%20class='e'%20d='M446.3,231.11c-1.21,0-2.43-.1-3.63-.29-15.09-2.39-25.01-19.17-22.12-37.41,2.62-16.55,15.08-29.03,28.97-29.03,1.21,0,2.43,.1,3.63,.29,15.09,2.39,25.01,19.17,22.12,37.41-2.62,16.55-15.08,29.03-28.97,29.03Z'/%3e%3cpath%20class='h'%20d='M449.52,165.88h0c1.13,0,2.27,.09,3.39,.27,14.27,2.26,23.63,18.27,20.87,35.7-2.51,15.83-14.33,27.77-27.49,27.77-1.13,0-2.27-.09-3.39-.27-14.27-2.26-23.63-18.27-20.87-35.7,2.51-15.83,14.33-27.76,27.49-27.77m0-3c-14.48,0-27.67,12.76-30.45,30.3-3.02,19.09,7.44,36.61,23.37,39.13,1.29,.2,2.58,.3,3.86,.3,14.48,0,27.67-12.76,30.45-30.3,3.02-19.09-7.44-36.61-23.37-39.13-1.29-.2-2.58-.3-3.86-.3h0Z'/%3e%3c/g%3e%3cellipse%20class='i'%20cx='446.51'%20cy='209.6'%20rx='12.44'%20ry='8.84'%20transform='translate(78.46%20537.99)%20rotate(-66.89)'/%3e%3c/g%3e%3cg%20id='c'%3e%3cg%20class='j'%3e%3cpolygon%20class='e'%20points='329.42%20118.98%20367.62%20124.71%20301.63%20213.52%20283.04%20209.6%20267.19%20191.08%20329.42%20118.98'/%3e%3c/g%3e%3cg%20class='j'%3e%3cpolygon%20class='e'%20points='265.79%20162.67%20265.79%20110.28%20280.5%20109.04%20306.96%20113.1%20265.79%20162.67'/%3e%3c/g%3e%3cg%20class='j'%3e%3cpolygon%20class='e'%20points='469.91%20148.92%20504.3%20154.03%20444.89%20233.05%20428.16%20229.56%20413.89%20213.08%20469.91%20148.92'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M510.06,159.47c-1.72-6.02-6.83-10.58-13.04-11.65l-69.11-14.88c-.07-.01-.14-.03-.21-.04-.22-.04-.87-.14-1.8-.2,.43-.03,.68-.02,.68-.02l-63.81-15.39s.09,.05,.14,.08c-.13-.02-.26-.06-.39-.08l-81.21-13.19c-.51-.08-3-.45-6.09-.21-.4-.09-.8-.14-1.22-.12-3.73,.15-92.16,3.94-158.51,31.15-1.6,.65-2.74,2.09-3.03,3.79-.17,.98-3.97,24.18,5.96,42.8,2.22,4.17,5,7.83,8.25,10.88,.7,.66,1.58,1.1,2.53,1.28,1.15,.21,2.92,.46,4.89,.46,3.22,0,6.94-.67,9.21-3.26,1.08-1.23,2.68-3.9,1.36-7.97-.85-2.63-3.66-4.03-6.29-3.18-1.97,.64-3.27,2.41-3.43,4.37-.72,.04-1.62,.02-2.51-.06-1.99-2.08-3.73-4.5-5.18-7.22-6.52-12.22-5.86-27.59-5.26-33.71,49.43-19.59,112.16-26.35,139.12-28.46-.19,.94-.32,1.95-.32,3.07v66.73c0,.12,0,.24,.01,.36,.06,.88,1.75,21.62,20.3,29.43,11.43,4.81,43.5,6.74,68.38,7.52,.28,0,.55,.01,.82,.01,11.7,0,21.98-7.74,25.19-19.07l.23-.84c3.05-11.22,3.54-40.64,3.62-51.05,1.2-3.01,3.1-4.63,5.93-6.52,7.68-5.14,18.12-2.75,22.92,5.14,.42,.69,.82,1.4,1.21,2.11v53.78c0,.1,0,.21,.01,.31,.06,.79,1.55,19.46,18.05,26.51,10.37,4.43,37.17,6.13,57.82,6.78,.25,0,.49,.01,.74,.01,10.42,0,19.58-6.98,22.43-17.2l.2-.74c3.21-11.98,3.23-47.01,3.23-49.25,.02-.85,.04-5.71-1.84-12.26Zm-140.69-12.46s0,.09,0,.13c.02,11.06-.54,41.98-3.28,52.06l-.21,.75c-2.03,7.17-8.61,12.03-16.08,11.78-33.48-1.04-57.11-3.49-64.81-6.74-12.31-5.19-14.03-19.14-14.19-20.79V117.69c0-1.77,.62-2.3,.88-2.52,1.65-1.41,5.77-1.54,8.03-1.19l81.22,13.19c3.23,.53,5.9,2.83,6.78,5.87,1.83,6.29,1.67,13.9,1.67,13.97Zm133.58,24.48c0,.06,0,.12,0,.19,.01,9.98-.49,37.88-2.93,46.98l-.18,.67c-1.8,6.47-7.66,10.83-14.26,10.63-27.7-.87-47.6-3.08-54.59-6.07-10.96-4.68-12.48-17.3-12.62-18.78v-59.99c0-1.64,.57-2.12,.81-2.33,1.44-1.23,4.99-1.36,6.97-1.06l69.08,14.87c.07,.02,.14,.03,.21,.04,2.86,.47,5.22,2.55,6.01,5.3,1.6,5.58,1.49,9.53,1.49,9.55Z'/%3e%3cpath%20d='M431.58,118.93c2.88-2.73,6.23-4.98,9.71-6.86,10.9-6.05,23.5-5.13,33.14,2.88,1.88,2.01,4.26,4.78,6,7.27,1.74,2.53,3.65,5.26,4.1,8.34,.03,.36,.57,.4,.66,.06,1.36-5.31-1.24-10.84-3.68-15.43-1-1.64-1.88-3.43-3.32-4.86-3.2-3.28-7.29-6.04-11.99-7.63-13.51-4.78-29.72,2.7-35.13,15.74l-.04,.11c-.15,.32,.31,.63,.55,.37Z'/%3e%3cpath%20d='M297.47,90.2c2.88-2.73,6.23-4.98,9.71-6.86,10.9-6.05,23.5-5.13,33.14,2.88,1.88,2.01,4.26,4.78,6,7.27,1.74,2.53,3.65,5.26,4.1,8.34,.03,.36,.57,.4,.66,.06,1.36-5.31-1.24-10.84-3.68-15.43-1-1.64-1.88-3.43-3.32-4.86-3.2-3.28-7.29-6.04-11.99-7.63-13.51-4.78-29.72,2.7-35.13,15.74l-.04,.11c-.15,.32,.31,.63,.55,.37Z'/%3e%3c/g%3e%3cpath%20class='d'%20d='M246.7,141.54s-45.89-33.79-87.25-15.71c-41.36,18.08-12.08,29.13-12.08,29.13l39-19.62,60.33,6.21Z'/%3e%3c/g%3e%3c/svg%3e", Ax = ({ open: e, onClose: t }) => /* @__PURE__ */ D.jsxs(Mm, { open: e, onClose: t, maxWidth: "sm", children: [
  /* @__PURE__ */ D.jsx(bh, { src: h1, alt: "brain", maxWidth: 100, marginY: 3 }),
  /* @__PURE__ */ D.jsx(bt, { variant: "h5", textAlign: "center", children: "Time for a break?" }),
  /* @__PURE__ */ D.jsx(bt, { textAlign: "center", children: "You have been using the Code for Life website for a while. Remember to take regular screen breaks to recharge those brain cells!" }),
  /* @__PURE__ */ D.jsx(Or, { onClick: t, autoFocus: !0, children: "Continue" })
] }), Ix = (e) => (t) => (r) => {
  const n = t(r);
  return bm(r) && r.type === "session/logout" && Gm(), n;
}, b1 = {
  styleOverrides: {
    root: {
      borderRadius: "0px !important",
      margin: "0px !important",
      width: "100%"
    }
  }
}, v1 = {
  styleOverrides: {
    root: {
      width: "100%"
    }
  }
};
function y1({
  elements: e,
  dividerProps: t
}) {
  return e.map((r, n) => /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    r,
    n !== e.length - 1 ? /* @__PURE__ */ D.jsx(Ov, { ...t }) : void 0
  ] }));
}
function gh(e, t, r = "root", n = _h) {
  if (n !== void 0) {
    const o = n[t];
    if (o !== void 0 && "styleOverrides" in o && typeof o.styleOverrides == "object" && r in o.styleOverrides) {
      const a = o.styleOverrides[r];
      switch (typeof a) {
        case "function":
          return a({ ownerState: e });
        case "object":
          return a;
      }
    }
  }
  return {};
}
function Oi(e) {
  return e.className?.split(" ") ?? [];
}
function Oe(e, t) {
  const r = Array.isArray(e) ? e : Oi(e);
  return t.every((n) => r.includes(n));
}
function Rh(e, t) {
  return (Array.isArray(e) ? e : Oi(e)).map((n) => n.match(t)).filter((n) => n !== null).map((n) => n);
}
const g1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getClassNames: Oi,
  getStyleOverrides: gh,
  includesClassNames: Oe,
  insertDividerBetweenElements: y1,
  matchClassNames: Rh
}, Symbol.toStringTag, { value: "Module" })), Eh = {
  fontFamily: '"Inter"',
  fontSize: "14px !important",
  fontWeight: 600,
  margin: 0,
  marginBottom: "12px",
  letterSpacing: 0
}, ht = {
  h1: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "60px",
    // lineHeight: '60px',
    marginBottom: "24px",
    letterSpacing: 0
  },
  h2: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "55px",
    // lineHeight: '55px',
    marginBottom: "22px",
    letterSpacing: 0
  },
  h3: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "45px",
    // lineHeight: '47px',
    marginBottom: "20px",
    letterSpacing: 0
  },
  h4: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "30px",
    // lineHeight: '38px',
    marginBottom: "18px",
    letterSpacing: 0
  },
  h5: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "25px",
    // lineHeight: '32px',
    marginBottom: "16px",
    letterSpacing: 0
  },
  h6: {
    color: "#383b3b",
    fontFamily: '"SpaceGrotesk"',
    fontWeight: 500,
    fontSize: "21px",
    // lineHeight: '26px',
    marginBottom: "10px",
    letterSpacing: 0
  },
  body1: {
    color: "#383b3b",
    fontFamily: '"Inter"',
    fontWeight: 500,
    fontSize: "1.07rem !important",
    // lineHeight: '22px',
    marginBottom: "16px",
    letterSpacing: 0
  },
  body2: {
    color: "#383b3b",
    fontFamily: '"Inter"',
    fontWeight: 500,
    fontSize: "0.92rem !important",
    // lineHeight: '20px',
    marginBottom: "14px",
    letterSpacing: 0
  },
  button: {
    fontFamily: '"Inter"',
    fontSize: "15px",
    fontWeight: 600,
    letterSpacing: 0
  }
}, R1 = {
  defaultProps: {
    variant: "contained",
    size: "medium"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      color: "black",
      textTransform: "none",
      textAlign: "center",
      borderRadius: "0px",
      padding: "11px 12px",
      height: "42px",
      whiteSpace: "nowrap",
      width: "fit-content",
      minWidth: "150px",
      boxShadow: "none",
      ...e.size === "small" && {
        height: "27px",
        padding: "4.5px 9px",
        letterSpacing: "0"
      },
      ...Oe(e, ["body"]) && {
        marginBottom: ht.body1?.marginBottom
      }
    }),
    contained: ({ ownerState: e }) => ({
      backgroundColor: "#ffd23b",
      "&:hover": {
        backgroundColor: "#ffc709",
        boxShadow: [
          "0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
          "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
          "0px 3px 5px 0px rgba(0, 0, 0, 0.2);"
        ].join()
      },
      [`&.${vl.disabled}`]: {
        backgroundColor: "#ffe382",
        color: "#7A5F01"
      },
      ...Oe(e, ["alert"]) && {
        color: "white",
        backgroundColor: "#ff0000",
        "&:hover": {
          backgroundColor: "#df0531"
        },
        [`&.${vl.disabled}`]: {
          backgroundColor: "#E76A6A",
          color: "white"
        }
      }
    }),
    outlined: {
      border: "2px solid #eab502",
      "&:hover": {
        border: "2px solid #eab502",
        backgroundColor: "transparent",
        textDecoration: "underline"
      }
    }
  }
};
function si(e, t = !1) {
  let r = `${8 * e}px`;
  return t && (r += " !important"), r;
}
const E1 = {
  styleOverrides: {
    root: {
      padding: si(2)
    }
  }
}, C1 = {
  styleOverrides: {
    root: {
      paddingLeft: "0px",
      marginLeft: "-2px"
    }
  }
};
function Ch(e) {
  const t = {}, r = Oi(e);
  return r.some((n) => n.startsWith("flex-")) && (t.display = "flex", Oe(r, ["flex-center"]) ? (t.justifyContent = "center", t.alignItems = "center") : Oe(r, ["flex-center-x"]) ? (t.justifyContent = "center", t.alignItems = "start") : Oe(r, ["flex-center-y"]) ? (t.justifyContent = "start", t.alignItems = "center") : Oe(r, ["flex-end"]) ? (t.justifyContent = "end", t.alignItems = "end") : Oe(r, ["flex-end-x"]) ? (t.justifyContent = "end", t.alignItems = "start") : Oe(r, ["flex-end-y"]) && (t.justifyContent = "start", t.alignItems = "end")), t;
}
function _1(e) {
  let t = {};
  const r = Oi(e);
  return Oe(r, ["nowrap-ellipsis"]) && (t.whiteSpace = "nowrap", t.overflow = "hidden", t.textOverflow = "ellipsis"), ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"].filter((n) => n in ht).forEach((n) => {
    const o = ht[n];
    Oe(r, [n]) && (t = { ...t, ...o }), Rh(r, new RegExp(`^${n}-(\\w+)$`)).forEach(
      (a) => {
        const i = a[1];
        i in o && (t[i] = o[i]);
      }
    );
  }), t;
}
const w1 = {
  defaultProps: {
    maxWidth: "lg"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...Ch(e),
      paddingLeft: si(2, !0),
      paddingRight: si(2, !0),
      padding: si(7)
    })
  }
}, T1 = {
  defaultProps: {
    maxWidth: "sm"
  },
  styleOverrides: {
    paper: {
      borderRadius: "0px !important",
      padding: "24px",
      alignItems: "center"
    }
  }
}, S1 = {
  styleOverrides: {
    root: {
      [`.${Om.root}`]: {
        ...Eh,
        marginBottom: 0
      },
      margin: 0
    }
  }
}, P1 = {
  styleOverrides: {
    root: {
      ...Eh
    }
  }
}, x1 = {
  defaultProps: {
    disableEqualOverflow: !0
    // padding: 0 // TODO: normalize padding.
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...Ch(e)
    })
  }
}, q1 = {
  styleOverrides: {
    root: {
      backgroundColor: "white",
      marginBottom: 0,
      color: ht.body1?.color
    }
  }
}, M1 = {
  defaultProps: {
    underline: "none",
    // BUG: if not set, MUI fails to run.
    color: "inherit"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      cursor: "pointer",
      ...Oe(e, ["no-decor"]) ? {
        ":hover": {
          textDecoration: "underline"
        }
      } : {
        textDecoration: "underline",
        ":hover": {
          fontWeight: "bold"
        }
      },
      ...Oe(e, ["back-to"]) && {
        textDecoration: "none",
        display: "inline-block",
        marginBottom: ht.body1?.marginBottom,
        ":hover": {
          fontWeight: "bold",
          textDecoration: "underline"
        },
        ":before": {
          content: '"< Back to "'
        }
      }
    })
  }
}, O1 = {
  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  }
}, A1 = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...Oe(e, ["last"]) && {
        [`.${Av.primary}`]: {
          marginBottom: 0
        }
      }
    })
  }
}, I1 = {
  styleOverrides: {
    paper: {
      borderRadius: 0
    },
    list: {
      padding: 0
    }
  }
}, k1 = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...Oe(e, ["header"]) && {
        pointerEvents: "none",
        fontWeight: "bold"
      }
    })
  }
}, D1 = {
  defaultProps: {
    color: "black"
  },
  styleOverrides: {
    root: {
      borderRadius: "0px"
    }
  }
}, N1 = {
  styleOverrides: {
    root: {
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 600,
      minWidth: "150px",
      border: "2px solid white",
      [`&.${yl.selected}`]: {
        color: Gr[300],
        backgroundColor: "white",
        cursor: "default"
      },
      [`:not(.${yl.selected})`]: {
        color: "white",
        ":hover": {
          textDecoration: "underline"
        }
      }
    }
  }
}, L1 = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      borderStyle: "hidden",
      overflowX: "auto",
      [`.${gl.root}`]: {
        border: "2px solid white"
      },
      ...Oe(e, ["text"]) && {
        borderStyle: "unset",
        display: "block",
        [`.${gl.root}`]: {
          border: "1px solid #DDD"
        }
      },
      ...Oe(e, ["body"]) && {
        marginBottom: ht.body1?.marginBottom
      }
    })
  }
}, j1 = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      backgroundColor: "#F1ECEC",
      ...Oe(e, ["text"]) && {
        backgroundColor: "white"
      }
    })
  }
}, F1 = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      backgroundColor: "#6E7171",
      ...Oe(e, ["light"]) && {
        backgroundColor: "#9A9C9E"
      },
      [`.${Om.root}`]: {
        color: "white",
        fontWeight: 600,
        marginBottom: 0
      },
      [`.${gl.head}`]: {
        color: "white",
        fontWeight: 600
      }
    })
  }
}, B1 = {
  defaultProps: {
    variant: "scrollable",
    scrollButtons: !0,
    allowScrollButtonsMobile: !0
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ...e !== void 0 && // NOTE: this is a bug with MUI
      [void 0, "horizontal"].includes(e.orientation) && {
        [`.${yl.root}:not(:last-of-type)`]: {
          marginRight: "30px"
        }
      }
    }),
    indicator: {
      display: "none"
    }
  }
}, U1 = {
  defaultProps: {
    size: "small",
    variant: "filled"
  },
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      width: "100%",
      backgroundColor: "transparent",
      [`& > .${Hi.root}`]: {
        ...e.disabled ? {
          [`.${Hi.disabled}`]: {
            color: `${ht.body1.color} !important`,
            "-webkit-text-fill-color": "unset"
          },
          border: "0px !important",
          borderRadius: "0px !important",
          // @ts-expect-error value is assignable
          backgroundColor: `${or.info.main} !important`
        } : {
          border: "1px solid black !important",
          borderRadius: "0px !important",
          backgroundColor: "white !important"
        }
      },
      [`& > .${Hi.root}.${Hi.error}`]: {
        // @ts-expect-error value is assignable
        border: `1px solid ${or.error.main} !important`
      },
      [`& .${Lv.root}.${$i.focused} > fieldset`]: {
        borderColor: "black !important"
      },
      [`.${Nv.root}`]: {
        color: `${ht.body1.color} !important`
      },
      [`.${Dv.root}::after`]: {
        borderColor: `${ht.body1.color} !important`
      },
      [`.${kv.root}`]: {
        color: `${ht.body1.color} !important`
      },
      [`.${Iv.root}`]: {
        fontSize: "12px !important"
      },
      ...e.multiline === !0 && {
        ...(Oe(e, ["resize"]) || Oe(e, ["resize-both"])) && {
          width: "auto",
          [`.${$i.inputMultiline}`]: {
            resize: "both"
          }
        },
        ...Oe(e, ["resize-horizontal"]) && {
          width: "auto",
          [`.${$i.inputMultiline}`]: {
            resize: "horizontal"
          }
        },
        ...Oe(e, ["resize-vertical"]) && {
          [`.${$i.inputMultiline}`]: {
            resize: "vertical"
          }
        }
      }
    })
  }
}, $1 = {
  styleOverrides: {
    root: {
      padding: "15px 0px !important"
    }
  }
}, H1 = {
  styleOverrides: {
    root: ({ ownerState: e }) => ({
      ..._1(e)
    })
  }
}, _h = {
  MuiAccordion: b1,
  MuiAutocomplete: v1,
  MuiButton: R1,
  MuiCardActions: E1,
  MuiCheckbox: C1,
  MuiContainer: w1,
  MuiDialog: T1,
  MuiFormControlLabel: S1,
  MuiFormHelperText: P1,
  MuiGrid2: x1,
  MuiInputBase: q1,
  MuiLink: M1,
  MuiList: O1,
  MuiListItemText: A1,
  MuiMenu: I1,
  MuiMenuItem: k1,
  MuiSelect: D1,
  MuiTab: N1,
  MuiTable: L1,
  MuiTableBody: j1,
  MuiTableHead: F1,
  MuiTabs: B1,
  MuiTextField: U1,
  MuiToolbar: $1,
  MuiTypography: H1
}, kx = ({
  options: e = wh,
  withShapes: t = !1,
  userType: r,
  bgcolor: n,
  children: o,
  sx: a,
  ...i
}) => {
  let s, l, u;
  switch (r) {
    case "teacher":
      n = n ?? Gr[400], s = "tertiary", l = "secondary", u = or.primary.contrastText;
      break;
    case "student":
      n = n ?? lu[500], s = "secondary", l = "primary", u = or.tertiary.contrastText;
      break;
    case "independent":
      n = n ?? su[500], s = "primary", l = "tertiary", u = or.secondary.contrastText;
      break;
  }
  const p = {
    display: { xs: "none", md: "block" },
    fontSize: "180px",
    position: "absolute"
  }, f = {
    color: u,
    textDecorationColor: u
  };
  function c(h, y, C, d = "root") {
    return {
      // Get the original styles.
      ...gh(
        h,
        C,
        d,
        e.components
      ),
      // Override styles unless the class name 'no-override' is set.
      ...!Oe(h, ["no-override"]) && y
    };
  }
  const m = Am(
    Xl({
      ...e,
      components: {
        ...e.components,
        MuiTypography: {
          ...e.components?.MuiTypography,
          styleOverrides: {
            ...e.components?.MuiTypography?.styleOverrides,
            root: ({ ownerState: h }) => c(
              h,
              {
                ...f
              },
              "MuiTypography"
            )
          }
        },
        MuiFormHelperText: {
          ...e.components?.MuiFormHelperText,
          styleOverrides: {
            ...e.components?.MuiFormHelperText?.styleOverrides,
            root: ({ ownerState: h }) => c(
              h,
              {
                ...f
              },
              "MuiFormHelperText"
            )
          }
        },
        MuiLink: {
          ...e.components?.MuiLink,
          styleOverrides: {
            ...e.components?.MuiLink?.styleOverrides,
            root: ({ ownerState: h }) => c(
              h,
              {
                ...f
              },
              "MuiLink"
            )
          }
        },
        MuiButton: {
          ...e.components?.MuiButton,
          styleOverrides: {
            ...e.components?.MuiButton?.styleOverrides,
            contained: ({ ownerState: h }) => c(
              h,
              {
                ...r === "independent" && {
                  backgroundColor: "white",
                  "&:hover": {
                    backgroundColor: "#f6f5f5",
                    boxShadow: [
                      "0px 6px 10px 0px rgba(0, 0, 0, 0.14)",
                      "0px 1px 18px 0px rgba(0, 0, 0, 0.12)",
                      "0px 3px 5px 0px rgba(0, 0, 0, 0.2);"
                    ].join()
                  },
                  [`&.${vl.disabled}`]: {
                    backgroundColor: "white",
                    color: u
                  }
                }
              },
              "MuiButton",
              "contained"
            ),
            outlined: ({ ownerState: h }) => c(
              h,
              {
                ...f,
                border: `2px solid ${u}`,
                "&:hover": {
                  border: `2px solid ${u}`,
                  backgroundColor: "transparent",
                  textDecoration: "underline"
                }
              },
              "MuiButton",
              "outlined"
            )
          }
        },
        MuiCheckbox: {
          ...e.components?.MuiCheckbox,
          styleOverrides: {
            ...e.components?.MuiCheckbox?.styleOverrides,
            root: ({ ownerState: h }) => c(
              h,
              {
                color: `${u} !important`
              },
              "MuiCheckbox"
            )
          }
        },
        MuiSvgIcon: {
          ...e.components?.MuiSvgIcon,
          styleOverrides: {
            ...e.components?.MuiSvgIcon?.styleOverrides,
            root: ({ ownerState: h }) => c(
              h,
              {
                "&.checkbox-error": {
                  color: `${u} !important`
                }
              },
              "MuiSvgIcon"
            )
          }
        }
      }
    })
  );
  return /* @__PURE__ */ D.jsx(qm, { theme: m, children: /* @__PURE__ */ D.jsxs(
    ks,
    {
      sx: {
        ...a,
        ...t && {
          paddingY: { xs: 2, sm: 3, md: 5 },
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginX: { md: "90px" }
        },
        bgcolor: n,
        alignItems: "center",
        position: "relative"
      },
      ...i,
      children: [
        t && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
          /* @__PURE__ */ D.jsx(
            Jv,
            {
              color: s,
              sx: {
                ...p,
                top: "5%",
                left: "0%",
                transform: "translate(-60%, 0%)"
              }
            }
          ),
          /* @__PURE__ */ D.jsx(
            ey,
            {
              color: l,
              sx: {
                ...p,
                bottom: "5%",
                right: "0%",
                transform: "translate(60%, 0%) rotate(90deg)"
              }
            }
          )
        ] }),
        o
      ]
    }
  ) });
}, wh = {
  palette: or,
  components: _h,
  spacing: si,
  typography: ht
}, Dx = Am(Xl(wh));
var cu = Symbol.for("immer-nothing"), li = Symbol.for("immer-draftable"), et = Symbol.for("immer-state"), Th = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function He(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = Th[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Tr = Object.getPrototypeOf;
function Ut(e) {
  return !!e && !!e[et];
}
function $t(e) {
  return e ? Sh(e) || Array.isArray(e) || !!e[li] || !!e.constructor?.[li] || Ai(e) || Ii(e) : !1;
}
var V1 = Object.prototype.constructor.toString();
function Sh(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Tr(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === V1;
}
function z1(e) {
  return Ut(e) || He(15, e), e[et].base_;
}
function mi(e, t) {
  Sr(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Sr(e) {
  const t = e[et];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ai(e) ? 2 : Ii(e) ? 3 : 0;
}
function hi(e, t) {
  return Sr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function tl(e, t) {
  return Sr(e) === 2 ? e.get(t) : e[t];
}
function Ph(e, t, r) {
  const n = Sr(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function W1(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ai(e) {
  return e instanceof Map;
}
function Ii(e) {
  return e instanceof Set;
}
function vr(e) {
  return e.copy_ || e.base_;
}
function Cl(e, t) {
  if (Ai(e))
    return new Map(e);
  if (Ii(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = Sh(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[et];
    let o = Reflect.ownKeys(n);
    for (let a = 0; a < o.length; a++) {
      const i = o[a], s = n[i];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (n[i] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[i]
      });
    }
    return Object.create(Tr(e), n);
  } else {
    const n = Tr(e);
    if (n !== null && r)
      return { ...e };
    const o = Object.create(n);
    return Object.assign(o, e);
  }
}
function du(e, t = !1) {
  return Bs(e) || Ut(e) || !$t(e) || (Sr(e) > 1 && (e.set = e.add = e.clear = e.delete = G1), Object.freeze(e), t && Object.entries(e).forEach(([r, n]) => du(n, !0))), e;
}
function G1() {
  He(2);
}
function Bs(e) {
  return Object.isFrozen(e);
}
var _l = {};
function Pr(e) {
  const t = _l[e];
  return t || He(0, e), t;
}
function Y1(e, t) {
  _l[e] || (_l[e] = t);
}
var bi;
function xh() {
  return bi;
}
function K1(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function sc(e, t) {
  t && (Pr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function wl(e) {
  Tl(e), e.drafts_.forEach(Q1), e.drafts_ = null;
}
function Tl(e) {
  e === bi && (bi = e.parent_);
}
function lc(e) {
  return bi = K1(bi, e);
}
function Q1(e) {
  const t = e[et];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function uc(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[et].modified_ && (wl(t), He(4)), $t(e) && (e = Rs(t, e), t.parent_ || Es(t, e)), t.patches_ && Pr("Patches").generateReplacementPatches_(
    r[et].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Rs(t, r, []), wl(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== cu ? e : void 0;
}
function Rs(e, t, r) {
  if (Bs(t))
    return t;
  const n = t[et];
  if (!n)
    return mi(
      t,
      (o, a) => cc(e, n, t, o, a, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return Es(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const o = n.copy_;
    let a = o, i = !1;
    n.type_ === 3 && (a = new Set(o), o.clear(), i = !0), mi(
      a,
      (s, l) => cc(e, n, o, s, l, r, i)
    ), Es(e, o, !1), r && e.patches_ && Pr("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function cc(e, t, r, n, o, a, i) {
  if (process.env.NODE_ENV !== "production" && o === r && He(5), Ut(o)) {
    const s = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !hi(t.assigned_, n) ? a.concat(n) : void 0, l = Rs(e, o, s);
    if (Ph(r, n, l), Ut(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else i && r.add(o);
  if ($t(o) && !Bs(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Rs(e, o), (!t || !t.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && Es(e, o);
  }
}
function Es(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && du(t, r);
}
function Z1(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : xh(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let o = n, a = fu;
  r && (o = [n], a = vi);
  const { revoke: i, proxy: s } = Proxy.revocable(o, a);
  return n.draft_ = s, n.revoke_ = i, s;
}
var fu = {
  get(e, t) {
    if (t === et)
      return e;
    const r = vr(e);
    if (!hi(r, t))
      return X1(e, r, t);
    const n = r[t];
    return e.finalized_ || !$t(n) ? n : n === rl(e.base_, t) ? (nl(e), e.copy_[t] = Pl(n, e)) : n;
  },
  has(e, t) {
    return t in vr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(vr(e));
  },
  set(e, t, r) {
    const n = qh(vr(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const o = rl(vr(e), t), a = o?.[et];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (W1(r, o) && (r !== void 0 || hi(e.base_, t)))
        return !0;
      nl(e), Sl(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return rl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, nl(e), Sl(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = vr(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    He(11);
  },
  getPrototypeOf(e) {
    return Tr(e.base_);
  },
  setPrototypeOf() {
    He(12);
  }
}, vi = {};
mi(fu, (e, t) => {
  vi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
vi.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && He(13), vi.set.call(this, e, t, void 0);
};
vi.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && He(14), fu.set.call(this, e[0], t, r, e[0]);
};
function rl(e, t) {
  const r = e[et];
  return (r ? vr(r) : e)[t];
}
function X1(e, t, r) {
  const n = qh(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function qh(e, t) {
  if (!(t in e))
    return;
  let r = Tr(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Tr(r);
  }
}
function Sl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Sl(e.parent_));
}
function nl(e) {
  e.copy_ || (e.copy_ = Cl(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var J1 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const i = this;
        return function(l = a, ...u) {
          return i.produce(l, (p) => r.call(this, p, ...u));
        };
      }
      typeof r != "function" && He(6), n !== void 0 && typeof n != "function" && He(7);
      let o;
      if ($t(t)) {
        const a = lc(this), i = Pl(t, void 0);
        let s = !0;
        try {
          o = r(i), s = !1;
        } finally {
          s ? wl(a) : Tl(a);
        }
        return sc(a, n), uc(o, a);
      } else if (!t || typeof t != "object") {
        if (o = r(t), o === void 0 && (o = t), o === cu && (o = void 0), this.autoFreeze_ && du(o, !0), n) {
          const a = [], i = [];
          Pr("Patches").generateReplacementPatches_(t, o, a, i), n(a, i);
        }
        return o;
      } else
        He(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (i, ...s) => this.produceWithPatches(i, (l) => t(l, ...s));
      let n, o;
      return [this.produce(t, r, (i, s) => {
        n = i, o = s;
      }), n, o];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    $t(e) || He(8), Ut(e) && (e = eR(e));
    const t = lc(this), r = Pl(e, void 0);
    return r[et].isManual_ = !0, Tl(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[et];
    (!r || !r.isManual_) && He(9);
    const { scope_: n } = r;
    return sc(n, t), uc(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const o = t[r];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Pr("Patches").applyPatches_;
    return Ut(e) ? n(e, t) : this.produce(
      e,
      (o) => n(o, t)
    );
  }
};
function Pl(e, t) {
  const r = Ai(e) ? Pr("MapSet").proxyMap_(e, t) : Ii(e) ? Pr("MapSet").proxySet_(e, t) : Z1(e, t);
  return (t ? t.scope_ : xh()).drafts_.push(r), r;
}
function eR(e) {
  return Ut(e) || He(10, e), Mh(e);
}
function Mh(e) {
  if (!$t(e) || Bs(e))
    return e;
  const t = e[et];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Cl(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Cl(e, !0);
  return mi(r, (n, o) => {
    Ph(r, n, Mh(o));
  }), t && (t.finalized_ = !1), r;
}
function tR() {
  process.env.NODE_ENV !== "production" && Th.push(
    'Sets cannot have "replace" patches.',
    function(c) {
      return "Unsupported patch operation: " + c;
    },
    function(c) {
      return "Cannot apply patch, path doesn't resolve: " + c;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", r = "add", n = "remove";
  function o(c, m, h, y) {
    switch (c.type_) {
      case 0:
      case 2:
        return i(
          c,
          m,
          h,
          y
        );
      case 1:
        return a(c, m, h, y);
      case 3:
        return s(
          c,
          m,
          h,
          y
        );
    }
  }
  function a(c, m, h, y) {
    let { base_: C, assigned_: d } = c, R = c.copy_;
    R.length < C.length && ([C, R] = [R, C], [h, y] = [y, h]);
    for (let b = 0; b < C.length; b++)
      if (d[b] && R[b] !== C[b]) {
        const E = m.concat([b]);
        h.push({
          op: t,
          path: E,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: f(R[b])
        }), y.push({
          op: t,
          path: E,
          value: f(C[b])
        });
      }
    for (let b = C.length; b < R.length; b++) {
      const E = m.concat([b]);
      h.push({
        op: r,
        path: E,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: f(R[b])
      });
    }
    for (let b = R.length - 1; C.length <= b; --b) {
      const E = m.concat([b]);
      y.push({
        op: n,
        path: E
      });
    }
  }
  function i(c, m, h, y) {
    const { base_: C, copy_: d } = c;
    mi(c.assigned_, (R, b) => {
      const E = tl(C, R), w = tl(d, R), g = b ? hi(C, R) ? t : r : n;
      if (E === w && g === t)
        return;
      const v = m.concat(R);
      h.push(g === n ? { op: g, path: v } : { op: g, path: v, value: w }), y.push(
        g === r ? { op: n, path: v } : g === n ? { op: r, path: v, value: f(E) } : { op: t, path: v, value: f(E) }
      );
    });
  }
  function s(c, m, h, y) {
    let { base_: C, copy_: d } = c, R = 0;
    C.forEach((b) => {
      if (!d.has(b)) {
        const E = m.concat([R]);
        h.push({
          op: n,
          path: E,
          value: b
        }), y.unshift({
          op: r,
          path: E,
          value: b
        });
      }
      R++;
    }), R = 0, d.forEach((b) => {
      if (!C.has(b)) {
        const E = m.concat([R]);
        h.push({
          op: r,
          path: E,
          value: b
        }), y.unshift({
          op: n,
          path: E,
          value: b
        });
      }
      R++;
    });
  }
  function l(c, m, h, y) {
    h.push({
      op: t,
      path: [],
      value: m === cu ? void 0 : m
    }), y.push({
      op: t,
      path: [],
      value: c
    });
  }
  function u(c, m) {
    return m.forEach((h) => {
      const { path: y, op: C } = h;
      let d = c;
      for (let w = 0; w < y.length - 1; w++) {
        const g = Sr(d);
        let v = y[w];
        typeof v != "string" && typeof v != "number" && (v = "" + v), (g === 0 || g === 1) && (v === "__proto__" || v === "constructor") && He(19), typeof d == "function" && v === "prototype" && He(19), d = tl(d, v), typeof d != "object" && He(18, y.join("/"));
      }
      const R = Sr(d), b = p(h.value), E = y[y.length - 1];
      switch (C) {
        case t:
          switch (R) {
            case 2:
              return d.set(E, b);
            case 3:
              He(16);
            default:
              return d[E] = b;
          }
        case r:
          switch (R) {
            case 1:
              return E === "-" ? d.push(b) : d.splice(E, 0, b);
            case 2:
              return d.set(E, b);
            case 3:
              return d.add(b);
            default:
              return d[E] = b;
          }
        case n:
          switch (R) {
            case 1:
              return d.splice(E, 1);
            case 2:
              return d.delete(E);
            case 3:
              return d.delete(h.value);
            default:
              return delete d[E];
          }
        default:
          He(17, C);
      }
    }), c;
  }
  function p(c) {
    if (!$t(c))
      return c;
    if (Array.isArray(c))
      return c.map(p);
    if (Ai(c))
      return new Map(
        Array.from(c.entries()).map(([h, y]) => [h, p(y)])
      );
    if (Ii(c))
      return new Set(Array.from(c).map(p));
    const m = Object.create(Tr(c));
    for (const h in c)
      m[h] = p(c[h]);
    return hi(c, li) && (m[li] = c[li]), m;
  }
  function f(c) {
    return Ut(c) ? p(c) : c;
  }
  Y1("Patches", {
    applyPatches_: u,
    generatePatches_: o,
    generateReplacementPatches_: l
  });
}
var at = new J1();
at.produce;
var Oh = at.produceWithPatches.bind(
  at
);
at.setAutoFreeze.bind(at);
at.setUseStrictShallowCopy.bind(at);
var dc = at.applyPatches.bind(at);
at.createDraft.bind(at);
at.finishDraft.bind(at);
var rR = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(e) {
    super(e[0].message), this.name = "SchemaError", this.issues = e;
  }
}, nR = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const o = {};
      e(o) === o && (n = !0);
    } catch {
    }
    if (n) {
      let o;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: o } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: o }
      );
    }
  }
}, oR = (e, t, r) => {
  const { memoize: n, memoizeOptions: o } = t, { inputSelectorResults: a, inputSelectorResultsCopy: i } = e, s = n(() => ({}), ...o);
  if (!(s.apply(null, a) === s.apply(null, i))) {
    let u;
    try {
      throw new Error();
    } catch (p) {
      ({ stack: u } = p);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: i,
        stack: u
      }
    );
  }
}, aR = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function iR(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function sR(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function lR(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var fc = (e) => Array.isArray(e) ? e : [e];
function uR(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return lR(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function pc(e, t) {
  const r = [], { length: n } = e;
  for (let o = 0; o < n; o++)
    r.push(e[o].apply(null, t));
  return r;
}
var cR = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...aR,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: nR
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: oR
    }
  };
}, dR = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, fR = typeof WeakRef < "u" ? WeakRef : dR, pR = 0, mc = 1;
function zi() {
  return {
    s: pR,
    v: void 0,
    o: null,
    p: null
  };
}
function Cs(e, t = {}) {
  let r = zi();
  const { resultEqualityCheck: n } = t;
  let o, a = 0;
  function i() {
    let s = r;
    const { length: l } = arguments;
    for (let f = 0, c = l; f < c; f++) {
      const m = arguments[f];
      if (typeof m == "function" || typeof m == "object" && m !== null) {
        let h = s.o;
        h === null && (s.o = h = /* @__PURE__ */ new WeakMap());
        const y = h.get(m);
        y === void 0 ? (s = zi(), h.set(m, s)) : s = y;
      } else {
        let h = s.p;
        h === null && (s.p = h = /* @__PURE__ */ new Map());
        const y = h.get(m);
        y === void 0 ? (s = zi(), h.set(m, s)) : s = y;
      }
    }
    const u = s;
    let p;
    if (s.s === mc)
      p = s.v;
    else if (p = e.apply(null, arguments), a++, n) {
      const f = o?.deref?.() ?? o;
      f != null && n(f, p) && (p = f, a !== 0 && a--), o = typeof p == "object" && p !== null || typeof p == "function" ? new fR(p) : p;
    }
    return u.s = mc, u.v = p, p;
  }
  return i.clearCache = () => {
    r = zi(), i.resetResultsCount();
  }, i.resultsCount = () => a, i.resetResultsCount = () => {
    a = 0;
  }, i;
}
function mR(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...o) => {
    let a = 0, i = 0, s, l = {}, u = o.pop();
    typeof u == "object" && (l = u, u = o.pop()), iR(
      u,
      `createSelector expects an output function after the inputs, but received: [${typeof u}]`
    );
    const p = {
      ...r,
      ...l
    }, {
      memoize: f,
      memoizeOptions: c = [],
      argsMemoize: m = Cs,
      argsMemoizeOptions: h = [],
      devModeChecks: y = {}
    } = p, C = fc(c), d = fc(h), R = uR(o), b = f(function() {
      return a++, u.apply(
        null,
        arguments
      );
    }, ...C);
    let E = !0;
    const w = m(function() {
      i++;
      const v = pc(
        R,
        arguments
      );
      if (s = b.apply(null, v), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: _, inputStabilityCheck: A } = cR(E, y);
        if (_.shouldRun && _.run(
          u,
          v,
          s
        ), A.shouldRun) {
          const O = pc(
            R,
            arguments
          );
          A.run(
            { inputSelectorResults: v, inputSelectorResultsCopy: O },
            { memoize: f, memoizeOptions: C },
            arguments
          );
        }
        E && (E = !1);
      }
      return s;
    }, ...d);
    return Object.assign(w, {
      resultFunc: u,
      memoizedResultFunc: b,
      dependencies: R,
      dependencyRecomputations: () => i,
      resetDependencyRecomputations: () => {
        i = 0;
      },
      lastResult: () => s,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: f,
      argsMemoize: m
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var hR = /* @__PURE__ */ mR(Cs), bR = Object.assign(
  (e, t = hR) => {
    sR(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((i, s, l) => (i[r[l]] = s, i), {})
    );
  },
  { withTypes: () => bR }
);
function hc(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var bc = bl;
function Ah(e, t) {
  if (e === t || !(bc(e) && bc(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), n = Object.keys(e);
  let o = r.length === n.length;
  const a = Array.isArray(t) ? [] : {};
  for (const i of r)
    a[i] = Ah(e[i], t[i]), o && (o = e[i] === a[i]);
  return o ? e : a;
}
function Br(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var vc = (e) => [].concat(...e);
function vR() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function _s(e) {
  return e != null;
}
function yR() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function gR(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var yc = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Us = /* @__PURE__ */ rn("__rtkq/focused"), pu = /* @__PURE__ */ rn("__rtkq/unfocused"), $s = /* @__PURE__ */ rn("__rtkq/online"), mu = /* @__PURE__ */ rn("__rtkq/offline"), ol = !1;
function RR(e, t) {
  function r() {
    const n = () => e(Us()), o = () => e(pu()), a = () => e($s()), i = () => e(mu()), s = () => {
      window.document.visibilityState === "visible" ? n() : o();
    };
    return ol || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", s, !1), window.addEventListener("focus", n, !1), window.addEventListener("online", a, !1), window.addEventListener("offline", i, !1), ol = !0), () => {
      window.removeEventListener("focus", n), window.removeEventListener("visibilitychange", s), window.removeEventListener("online", a), window.removeEventListener("offline", i), ol = !1;
    };
  }
  return r();
}
function Hs(e) {
  return e.type === "query";
}
function ER(e) {
  return e.type === "mutation";
}
function ki(e) {
  return e.type === "infinitequery";
}
function ws(e) {
  return Hs(e) || ki(e);
}
function hu(e, t, r, n, o, a) {
  return CR(e) ? e(t, r, n, o).filter(_s).map(xl).map(a) : Array.isArray(e) ? e.map(xl).map(a) : [];
}
function CR(e) {
  return typeof e == "function";
}
function xl(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function _R(e, t) {
  return e.catch(t);
}
var yi = Symbol("forceQueryFn"), ql = (e) => typeof e[yi] == "function";
function wR({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: n,
  api: o,
  context: a
}) {
  const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: l,
    removeMutationResult: u,
    updateSubscriptionOptions: p
  } = o.internalActions;
  return {
    buildInitiateQuery: d,
    buildInitiateInfiniteQuery: R,
    buildInitiateMutation: b,
    getRunningQueryThunk: f,
    getRunningMutationThunk: c,
    getRunningQueriesThunk: m,
    getRunningMutationsThunk: h
  };
  function f(E, w) {
    return (g) => {
      const v = a.endpointDefinitions[E], _ = e({
        queryArgs: w,
        endpointDefinition: v,
        endpointName: E
      });
      return i.get(g)?.[_];
    };
  }
  function c(E, w) {
    return (g) => s.get(g)?.[w];
  }
  function m() {
    return (E) => Object.values(i.get(E) || {}).filter(_s);
  }
  function h() {
    return (E) => Object.values(s.get(E) || {}).filter(_s);
  }
  function y(E) {
    if (process.env.NODE_ENV !== "production") {
      if (y.triggered) return;
      const w = E(o.internalActions.internal_getRTKQSubscriptions());
      if (y.triggered = !0, typeof w != "object" || typeof w?.type == "string")
        throw new Error(process.env.NODE_ENV === "production" ? os(34) : `Warning: Middleware for RTK-Query API at reducerPath "${o.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function C(E, w) {
    const g = (v, {
      subscribe: _ = !0,
      forceRefetch: A,
      subscriptionOptions: O,
      [yi]: q,
      ...I
    } = {}) => (T, k) => {
      const N = e({
        queryArgs: v,
        endpointDefinition: w,
        endpointName: E
      });
      let Y;
      const G = {
        ...I,
        type: "query",
        subscribe: _,
        forceRefetch: A,
        subscriptionOptions: O,
        endpointName: E,
        originalArgs: v,
        queryCacheKey: N,
        [yi]: q
      };
      if (Hs(w))
        Y = t(G);
      else {
        const {
          direction: me,
          initialPageParam: le
        } = I;
        Y = r({
          ...G,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: me,
          initialPageParam: le
        });
      }
      const Q = o.endpoints[E].select(v), K = T(Y), se = Q(k());
      y(T);
      const {
        requestId: ne,
        abort: we
      } = K, W = se.requestId !== ne, be = i.get(T)?.[N], X = () => Q(k()), ue = Object.assign(q ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        K.then(X)
      ) : W && !be ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(se)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([be, K]).then(X)
      ), {
        arg: v,
        requestId: ne,
        subscriptionOptions: O,
        queryCacheKey: N,
        abort: we,
        async unwrap() {
          const me = await ue;
          if (me.isError)
            throw me.error;
          return me.data;
        },
        refetch: () => T(g(v, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          _ && T(l({
            queryCacheKey: N,
            requestId: ne
          }));
        },
        updateSubscriptionOptions(me) {
          ue.subscriptionOptions = me, T(p({
            endpointName: E,
            requestId: ne,
            queryCacheKey: N,
            options: me
          }));
        }
      });
      if (!be && !W && !q) {
        const me = gR(i, T, {});
        me[N] = ue, ue.then(() => {
          delete me[N], Br(me) || i.delete(T);
        });
      }
      return ue;
    };
    return g;
  }
  function d(E, w) {
    return C(E, w);
  }
  function R(E, w) {
    return C(E, w);
  }
  function b(E) {
    return (w, {
      track: g = !0,
      fixedCacheKey: v
    } = {}) => (_, A) => {
      const O = n({
        type: "mutation",
        endpointName: E,
        originalArgs: w,
        track: g,
        fixedCacheKey: v
      }), q = _(O);
      y(_);
      const {
        requestId: I,
        abort: T,
        unwrap: k
      } = q, N = _R(q.unwrap().then((K) => ({
        data: K
      })), (K) => ({
        error: K
      })), Y = () => {
        _(u({
          requestId: I,
          fixedCacheKey: v
        }));
      }, G = Object.assign(N, {
        arg: q.arg,
        requestId: I,
        abort: T,
        unwrap: k,
        reset: Y
      }), Q = s.get(_) || {};
      return s.set(_, Q), Q[I] = G, G.then(() => {
        delete Q[I], Br(Q) || s.delete(_);
      }), v && (Q[v] = G, G.then(() => {
        Q[v] === G && (delete Q[v], Br(Q) || s.delete(_));
      })), G;
    };
  }
}
var Ih = class extends rR {
  constructor(e, t, r, n) {
    super(e), this.value = t, this.schemaName = r, this._bqMeta = n;
  }
};
async function fr(e, t, r, n) {
  const o = await e["~standard"].validate(t);
  if (o.issues)
    throw new Ih(o.issues, t, r, n);
  return o.value;
}
function TR(e) {
  return e;
}
var bn = (e = {}) => ({
  ...e,
  [ym]: !0
});
function SR({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: n,
  api: o,
  assertTagType: a,
  selectors: i,
  onSchemaFailure: s,
  catchSchemaFailure: l,
  skipSchemaValidation: u
}) {
  const p = (q, I, T, k) => (N, Y) => {
    const G = r[q], Q = n({
      queryArgs: I,
      endpointDefinition: G,
      endpointName: q
    });
    if (N(o.internalActions.queryResultPatched({
      queryCacheKey: Q,
      patches: T
    })), !k)
      return;
    const K = o.endpoints[q].select(I)(
      // Work around TS 4.1 mismatch
      Y()
    ), se = hu(G.providesTags, K.data, void 0, I, {}, a);
    N(o.internalActions.updateProvidedBy([{
      queryCacheKey: Q,
      providedTags: se
    }]));
  };
  function f(q, I, T = 0) {
    const k = [I, ...q];
    return T && k.length > T ? k.slice(0, -1) : k;
  }
  function c(q, I, T = 0) {
    const k = [...q, I];
    return T && k.length > T ? k.slice(1) : k;
  }
  const m = (q, I, T, k = !0) => (N, Y) => {
    const Q = o.endpoints[q].select(I)(
      // Work around TS 4.1 mismatch
      Y()
    ), K = {
      patches: [],
      inversePatches: [],
      undo: () => N(o.util.patchQueryData(q, I, K.inversePatches, k))
    };
    if (Q.status === "uninitialized")
      return K;
    let se;
    if ("data" in Q)
      if ($t(Q.data)) {
        const [ne, we, W] = Oh(Q.data, T);
        K.patches.push(...we), K.inversePatches.push(...W), se = ne;
      } else
        se = T(Q.data), K.patches.push({
          op: "replace",
          path: [],
          value: se
        }), K.inversePatches.push({
          op: "replace",
          path: [],
          value: Q.data
        });
    return K.patches.length === 0 || N(o.util.patchQueryData(q, I, K.patches, k)), K;
  }, h = (q, I, T) => (k) => k(o.endpoints[q].initiate(I, {
    subscribe: !1,
    forceRefetch: !0,
    [yi]: () => ({
      data: T
    })
  })), y = (q, I) => q.query && q[I] ? q[I] : TR, C = async (q, {
    signal: I,
    abort: T,
    rejectWithValue: k,
    fulfillWithValue: N,
    dispatch: Y,
    getState: G,
    extra: Q
  }) => {
    const K = r[q.endpointName], {
      metaSchema: se,
      skipSchemaValidation: ne = u
    } = K;
    try {
      let we = y(K, "transformResponse");
      const W = {
        signal: I,
        abort: T,
        dispatch: Y,
        getState: G,
        extra: Q,
        endpoint: q.endpointName,
        type: q.type,
        forced: q.type === "query" ? d(q, G()) : void 0,
        queryCacheKey: q.type === "query" ? q.queryCacheKey : void 0
      }, be = q.type === "query" ? q[yi] : void 0;
      let X;
      const ue = async (le, M, z, B) => {
        if (M == null && le.pages.length)
          return Promise.resolve({
            data: le
          });
        const J = {
          queryArg: q.originalArgs,
          pageParam: M
        }, ee = await me(J), re = B ? f : c;
        return {
          data: {
            pages: re(le.pages, ee.data, z),
            pageParams: re(le.pageParams, M, z)
          },
          meta: ee.meta
        };
      };
      async function me(le) {
        let M;
        const {
          extraOptions: z,
          argSchema: B,
          rawResponseSchema: J,
          responseSchema: ee
        } = K;
        if (B && !ne && (le = await fr(
          B,
          le,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), be ? M = be() : K.query ? M = await t(K.query(le), W, z) : M = await K.queryFn(le, W, z, (ae) => t(ae, W, z)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const ae = K.query ? "`baseQuery`" : "`queryFn`";
          let ve;
          if (!M)
            ve = `${ae} did not return anything.`;
          else if (typeof M != "object")
            ve = `${ae} did not return an object.`;
          else if (M.error && M.data)
            ve = `${ae} returned an object containing both \`error\` and \`result\`.`;
          else if (M.error === void 0 && M.data === void 0)
            ve = `${ae} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const qe of Object.keys(M))
              if (qe !== "error" && qe !== "data" && qe !== "meta") {
                ve = `The object returned by ${ae} has the unknown property ${qe}.`;
                break;
              }
          ve && console.error(`Error encountered handling the endpoint ${q.endpointName}.
                  ${ve}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, M);
        }
        if (M.error) throw new yc(M.error, M.meta);
        let {
          data: re
        } = M;
        J && !ne && (re = await fr(J, M.data, "rawResponseSchema", M.meta));
        let ce = await we(re, M.meta, le);
        return ee && !ne && (ce = await fr(ee, ce, "responseSchema", M.meta)), {
          ...M,
          data: ce
        };
      }
      if (q.type === "query" && "infiniteQueryOptions" in K) {
        const {
          infiniteQueryOptions: le
        } = K, {
          maxPages: M = 1 / 0
        } = le;
        let z;
        const B = {
          pages: [],
          pageParams: []
        }, J = i.selectQueryEntry(G(), q.queryCacheKey)?.data, re = /* arg.forceRefetch */ d(q, G()) && !q.direction || !J ? B : J;
        if ("direction" in q && q.direction && re.pages.length) {
          const ce = q.direction === "backward", ve = (ce ? kh : Ml)(le, re, q.originalArgs);
          z = await ue(re, ve, M, ce);
        } else {
          const {
            initialPageParam: ce = le.initialPageParam
          } = q, ae = J?.pageParams ?? [], ve = ae[0] ?? ce, qe = ae.length;
          z = await ue(re, ve, M), be && (z = {
            data: z.data.pages[0]
          });
          for (let Ue = 1; Ue < qe; Ue++) {
            const ft = Ml(le, z.data, q.originalArgs);
            z = await ue(z.data, ft, M);
          }
        }
        X = z;
      } else
        X = await me(q.originalArgs);
      return se && !ne && X.meta && (X.meta = await fr(se, X.meta, "metaSchema", X.meta)), N(X.data, bn({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: X.meta
      }));
    } catch (we) {
      let W = we;
      if (W instanceof yc) {
        let be = y(K, "transformErrorResponse");
        const {
          rawErrorResponseSchema: X,
          errorResponseSchema: ue
        } = K;
        let {
          value: me,
          meta: le
        } = W;
        try {
          X && !ne && (me = await fr(X, me, "rawErrorResponseSchema", le)), se && !ne && (le = await fr(se, le, "metaSchema", le));
          let M = await be(me, le, q.originalArgs);
          return ue && !ne && (M = await fr(ue, M, "errorResponseSchema", le)), k(M, bn({
            baseQueryMeta: le
          }));
        } catch (M) {
          W = M;
        }
      }
      try {
        if (W instanceof Ih) {
          const be = {
            endpoint: q.endpointName,
            arg: q.originalArgs,
            type: q.type,
            queryCacheKey: q.type === "query" ? q.queryCacheKey : void 0
          };
          K.onSchemaFailure?.(W, be), s?.(W, be);
          const {
            catchSchemaFailure: X = l
          } = K;
          if (X)
            return k(X(W, be), bn({
              baseQueryMeta: W._bqMeta
            }));
        }
      } catch (be) {
        W = be;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${q.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, W) : console.error(W), W;
    }
  };
  function d(q, I) {
    const T = i.selectQueryEntry(I, q.queryCacheKey), k = i.selectConfig(I).refetchOnMountOrArgChange, N = T?.fulfilledTimeStamp, Y = q.forceRefetch ?? (q.subscribe && k);
    return Y ? Y === !0 || (Number(/* @__PURE__ */ new Date()) - Number(N)) / 1e3 >= Y : !1;
  }
  const R = () => Uu(`${e}/executeQuery`, C, {
    getPendingMeta({
      arg: I
    }) {
      const T = r[I.endpointName];
      return bn({
        startedTimeStamp: Date.now(),
        ...ki(T) ? {
          direction: I.direction
        } : {}
      });
    },
    condition(I, {
      getState: T
    }) {
      const k = T(), N = i.selectQueryEntry(k, I.queryCacheKey), Y = N?.fulfilledTimeStamp, G = I.originalArgs, Q = N?.originalArgs, K = r[I.endpointName], se = I.direction;
      return ql(I) ? !0 : N?.status === "pending" ? !1 : d(I, k) || Hs(K) && K?.forceRefetch?.({
        currentArg: G,
        previousArg: Q,
        endpointState: N,
        state: k
      }) ? !0 : !(Y && !se);
    },
    dispatchConditionRejection: !0
  }), b = R(), E = R(), w = Uu(`${e}/executeMutation`, C, {
    getPendingMeta() {
      return bn({
        startedTimeStamp: Date.now()
      });
    }
  }), g = (q) => "force" in q, v = (q) => "ifOlderThan" in q, _ = (q, I, T) => (k, N) => {
    const Y = g(T) && T.force, G = v(T) && T.ifOlderThan, Q = (se = !0) => {
      const ne = {
        forceRefetch: se,
        isPrefetch: !0
      };
      return o.endpoints[q].initiate(I, ne);
    }, K = o.endpoints[q].select(I)(N());
    if (Y)
      k(Q());
    else if (G) {
      const se = K?.fulfilledTimeStamp;
      if (!se) {
        k(Q());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(se))) / 1e3 >= G && k(Q());
    } else
      k(Q(!1));
  };
  function A(q) {
    return (I) => I?.meta?.arg?.endpointName === q;
  }
  function O(q, I) {
    return {
      matchPending: Js(gm(q), A(I)),
      matchFulfilled: Js(Cr(q), A(I)),
      matchRejected: Js(Kl(q), A(I))
    };
  }
  return {
    queryThunk: b,
    mutationThunk: w,
    infiniteQueryThunk: E,
    prefetch: _,
    updateQueryData: m,
    upsertQueryData: h,
    patchQueryData: p,
    buildMatchThunkActions: O
  };
}
function Ml(e, {
  pages: t,
  pageParams: r
}, n) {
  const o = t.length - 1;
  return e.getNextPageParam(t[o], t, r[o], r, n);
}
function kh(e, {
  pages: t,
  pageParams: r
}, n) {
  return e.getPreviousPageParam?.(t[0], t, r[0], r, n);
}
function Dh(e, t, r, n) {
  return hu(r[e.meta.arg.endpointName][t], Cr(e) ? e.payload : void 0, Yl(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, n);
}
function Wi(e, t, r) {
  const n = e[t];
  n && r(n);
}
function gi(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function gc(e, t, r) {
  const n = e[gi(t)];
  n && r(n);
}
var Gi = {};
function PR({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: n,
  context: {
    endpointDefinitions: o,
    apiUid: a,
    extractRehydrationInfo: i,
    hasRehydrationInfo: s
  },
  assertTagType: l,
  config: u
}) {
  const p = rn(`${e}/resetApiState`);
  function f(A, O, q, I) {
    A[O.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: O.endpointName
    }, Wi(A, O.queryCacheKey, (T) => {
      T.status = "pending", T.requestId = q && T.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        T.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        I.requestId
      ), O.originalArgs !== void 0 && (T.originalArgs = O.originalArgs), T.startedTimeStamp = I.startedTimeStamp;
      const k = o[I.arg.endpointName];
      ki(k) && "direction" in O && (T.direction = O.direction);
    });
  }
  function c(A, O, q, I) {
    Wi(A, O.arg.queryCacheKey, (T) => {
      if (T.requestId !== O.requestId && !I) return;
      const {
        merge: k
      } = o[O.arg.endpointName];
      if (T.status = "fulfilled", k)
        if (T.data !== void 0) {
          const {
            fulfilledTimeStamp: N,
            arg: Y,
            baseQueryMeta: G,
            requestId: Q
          } = O;
          let K = Gl(T.data, (se) => k(se, q, {
            arg: Y.originalArgs,
            baseQueryMeta: G,
            fulfilledTimeStamp: N,
            requestId: Q
          }));
          T.data = K;
        } else
          T.data = q;
      else
        T.data = o[O.arg.endpointName].structuralSharing ?? !0 ? Ah(Ut(T.data) ? z1(T.data) : T.data, q) : q;
      delete T.error, T.fulfilledTimeStamp = O.fulfilledTimeStamp;
    });
  }
  const m = Nr({
    name: `${e}/queries`,
    initialState: Gi,
    reducers: {
      removeQueryResult: {
        reducer(A, {
          payload: {
            queryCacheKey: O
          }
        }) {
          delete A[O];
        },
        prepare: pn()
      },
      cacheEntriesUpserted: {
        reducer(A, O) {
          for (const q of O.payload) {
            const {
              queryDescription: I,
              value: T
            } = q;
            f(A, I, !0, {
              arg: I,
              requestId: O.meta.requestId,
              startedTimeStamp: O.meta.timestamp
            }), c(
              A,
              {
                arg: I,
                requestId: O.meta.requestId,
                fulfilledTimeStamp: O.meta.timestamp,
                baseQueryMeta: {}
              },
              T,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (A) => ({
          payload: A.map((I) => {
            const {
              endpointName: T,
              arg: k,
              value: N
            } = I, Y = o[T];
            return {
              queryDescription: {
                type: "query",
                endpointName: T,
                originalArgs: I.arg,
                queryCacheKey: n({
                  queryArgs: k,
                  endpointDefinition: Y,
                  endpointName: T
                })
              },
              value: N
            };
          }),
          meta: {
            [ym]: !0,
            requestId: vm(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(A, {
          payload: {
            queryCacheKey: O,
            patches: q
          }
        }) {
          Wi(A, O, (I) => {
            I.data = dc(I.data, q.concat());
          });
        },
        prepare: pn()
      }
    },
    extraReducers(A) {
      A.addCase(t.pending, (O, {
        meta: q,
        meta: {
          arg: I
        }
      }) => {
        const T = ql(I);
        f(O, I, T, q);
      }).addCase(t.fulfilled, (O, {
        meta: q,
        payload: I
      }) => {
        const T = ql(q.arg);
        c(O, q, I, T);
      }).addCase(t.rejected, (O, {
        meta: {
          condition: q,
          arg: I,
          requestId: T
        },
        error: k,
        payload: N
      }) => {
        Wi(O, I.queryCacheKey, (Y) => {
          if (!q) {
            if (Y.requestId !== T) return;
            Y.status = "rejected", Y.error = N ?? k;
          }
        });
      }).addMatcher(s, (O, q) => {
        const {
          queries: I
        } = i(q);
        for (const [T, k] of Object.entries(I))
          // do not rehydrate entries that were currently in flight.
          (k?.status === "fulfilled" || k?.status === "rejected") && (O[T] = k);
      });
    }
  }), h = Nr({
    name: `${e}/mutations`,
    initialState: Gi,
    reducers: {
      removeMutationResult: {
        reducer(A, {
          payload: O
        }) {
          const q = gi(O);
          q in A && delete A[q];
        },
        prepare: pn()
      }
    },
    extraReducers(A) {
      A.addCase(r.pending, (O, {
        meta: q,
        meta: {
          requestId: I,
          arg: T,
          startedTimeStamp: k
        }
      }) => {
        T.track && (O[gi(q)] = {
          requestId: I,
          status: "pending",
          endpointName: T.endpointName,
          startedTimeStamp: k
        });
      }).addCase(r.fulfilled, (O, {
        payload: q,
        meta: I
      }) => {
        I.arg.track && gc(O, I, (T) => {
          T.requestId === I.requestId && (T.status = "fulfilled", T.data = q, T.fulfilledTimeStamp = I.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (O, {
        payload: q,
        error: I,
        meta: T
      }) => {
        T.arg.track && gc(O, T, (k) => {
          k.requestId === T.requestId && (k.status = "rejected", k.error = q ?? I);
        });
      }).addMatcher(s, (O, q) => {
        const {
          mutations: I
        } = i(q);
        for (const [T, k] of Object.entries(I))
          // do not rehydrate entries that were currently in flight.
          (k?.status === "fulfilled" || k?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          T !== k?.requestId && (O[T] = k);
      });
    }
  }), y = {
    tags: {},
    keys: {}
  }, C = Nr({
    name: `${e}/invalidation`,
    initialState: y,
    reducers: {
      updateProvidedBy: {
        reducer(A, O) {
          for (const {
            queryCacheKey: q,
            providedTags: I
          } of O.payload) {
            d(A, q);
            for (const {
              type: T,
              id: k
            } of I) {
              const N = (A.tags[T] ??= {})[k || "__internal_without_id"] ??= [];
              N.includes(q) || N.push(q);
            }
            A.keys[q] = I;
          }
        },
        prepare: pn()
      }
    },
    extraReducers(A) {
      A.addCase(m.actions.removeQueryResult, (O, {
        payload: {
          queryCacheKey: q
        }
      }) => {
        d(O, q);
      }).addMatcher(s, (O, q) => {
        const {
          provided: I
        } = i(q);
        for (const [T, k] of Object.entries(I))
          for (const [N, Y] of Object.entries(k)) {
            const G = (O.tags[T] ??= {})[N || "__internal_without_id"] ??= [];
            for (const Q of Y)
              G.includes(Q) || G.push(Q);
          }
      }).addMatcher(vs(Cr(t), Yl(t)), (O, q) => {
        R(O, [q]);
      }).addMatcher(m.actions.cacheEntriesUpserted.match, (O, q) => {
        const I = q.payload.map(({
          queryDescription: T,
          value: k
        }) => ({
          type: "UNKNOWN",
          payload: k,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: T
          }
        }));
        R(O, I);
      });
    }
  });
  function d(A, O) {
    const q = A.keys[O] ?? [];
    for (const I of q) {
      const T = I.type, k = I.id ?? "__internal_without_id", N = A.tags[T]?.[k];
      N && (A.tags[T][k] = N.filter((Y) => Y !== O));
    }
    delete A.keys[O];
  }
  function R(A, O) {
    const q = O.map((I) => {
      const T = Dh(I, "providesTags", o, l), {
        queryCacheKey: k
      } = I.meta.arg;
      return {
        queryCacheKey: k,
        providedTags: T
      };
    });
    C.caseReducers.updateProvidedBy(A, C.actions.updateProvidedBy(q));
  }
  const b = Nr({
    name: `${e}/subscriptions`,
    initialState: Gi,
    reducers: {
      updateSubscriptionOptions(A, O) {
      },
      unsubscribeQueryResult(A, O) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), E = Nr({
    name: `${e}/internalSubscriptions`,
    initialState: Gi,
    reducers: {
      subscriptionsUpdated: {
        reducer(A, O) {
          return dc(A, O.payload);
        },
        prepare: pn()
      }
    }
  }), w = Nr({
    name: `${e}/config`,
    initialState: {
      online: yR(),
      focused: vR(),
      middlewareRegistered: !1,
      ...u
    },
    reducers: {
      middlewareRegistered(A, {
        payload: O
      }) {
        A.middlewareRegistered = A.middlewareRegistered === "conflict" || a !== O ? "conflict" : !0;
      }
    },
    extraReducers: (A) => {
      A.addCase($s, (O) => {
        O.online = !0;
      }).addCase(mu, (O) => {
        O.online = !1;
      }).addCase(Us, (O) => {
        O.focused = !0;
      }).addCase(pu, (O) => {
        O.focused = !1;
      }).addMatcher(s, (O) => ({
        ...O
      }));
    }
  }), g = uv({
    queries: m.reducer,
    mutations: h.reducer,
    provided: C.reducer,
    subscriptions: E.reducer,
    config: w.reducer
  }), v = (A, O) => g(p.match(O) ? void 0 : A, O), _ = {
    ...w.actions,
    ...m.actions,
    ...b.actions,
    ...E.actions,
    ...h.actions,
    ...C.actions,
    resetApiState: p
  };
  return {
    reducer: v,
    actions: _
  };
}
var al = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Nh = {
  status: "uninitialized"
  /* uninitialized */
}, Rc = /* @__PURE__ */ Gl(Nh, () => {
}), Ec = /* @__PURE__ */ Gl(Nh, () => {
});
function xR({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const n = (b) => Rc, o = (b) => Ec;
  return {
    buildQuerySelector: c,
    buildInfiniteQuerySelector: m,
    buildMutationSelector: h,
    selectInvalidatedBy: y,
    selectCachedArgsForQuery: C,
    selectApiState: i,
    selectQueries: s,
    selectMutations: u,
    selectQueryEntry: l,
    selectConfig: p
  };
  function a(b) {
    return {
      ...b,
      ...hc(b.status)
    };
  }
  function i(b) {
    const E = b[t];
    if (process.env.NODE_ENV !== "production" && !E) {
      if (i.triggered) return E;
      i.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return E;
  }
  function s(b) {
    return i(b)?.queries;
  }
  function l(b, E) {
    return s(b)?.[E];
  }
  function u(b) {
    return i(b)?.mutations;
  }
  function p(b) {
    return i(b)?.config;
  }
  function f(b, E, w) {
    return (g) => {
      if (g === al)
        return r(n, w);
      const v = e({
        queryArgs: g,
        endpointDefinition: E,
        endpointName: b
      });
      return r((A) => l(A, v) ?? Rc, w);
    };
  }
  function c(b, E) {
    return f(b, E, a);
  }
  function m(b, E) {
    const {
      infiniteQueryOptions: w
    } = E;
    function g(v) {
      const _ = {
        ...v,
        ...hc(v.status)
      }, {
        isLoading: A,
        isError: O,
        direction: q
      } = _, I = q === "forward", T = q === "backward";
      return {
        ..._,
        hasNextPage: d(w, _.data, _.originalArgs),
        hasPreviousPage: R(w, _.data, _.originalArgs),
        isFetchingNextPage: A && I,
        isFetchingPreviousPage: A && T,
        isFetchNextPageError: O && I,
        isFetchPreviousPageError: O && T
      };
    }
    return f(b, E, g);
  }
  function h() {
    return (b) => {
      let E;
      return typeof b == "object" ? E = gi(b) ?? al : E = b, r(E === al ? o : (v) => i(v)?.mutations?.[E] ?? Ec, a);
    };
  }
  function y(b, E) {
    const w = b[t], g = /* @__PURE__ */ new Set();
    for (const v of E.filter(_s).map(xl)) {
      const _ = w.provided.tags[v.type];
      if (!_)
        continue;
      let A = (v.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        _[v.id]
      ) : (
        // no id: invalidate all queries that provide this type
        vc(Object.values(_))
      )) ?? [];
      for (const O of A)
        g.add(O);
    }
    return vc(Array.from(g.values()).map((v) => {
      const _ = w.queries[v];
      return _ ? [{
        queryCacheKey: v,
        endpointName: _.endpointName,
        originalArgs: _.originalArgs
      }] : [];
    }));
  }
  function C(b, E) {
    return Object.values(s(b)).filter(
      (w) => w?.endpointName === E && w.status !== "uninitialized"
      /* uninitialized */
    ).map((w) => w.originalArgs);
  }
  function d(b, E, w) {
    return E ? Ml(b, E, w) != null : !1;
  }
  function R(b, E, w) {
    return !E || !b.getPreviousPageParam ? !1 : kh(b, E, w) != null;
  }
}
var Cc = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, _c = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const n = Cc?.get(t);
  if (typeof n == "string")
    r = n;
  else {
    const o = JSON.stringify(t, (a, i) => (i = typeof i == "bigint" ? {
      $bigint: i.toString()
    } : i, i = bl(i) ? Object.keys(i).sort().reduce((s, l) => (s[l] = i[l], s), {}) : i, i));
    bl(t) && Cc?.set(t, o), r = o;
  }
  return `${e}(${r})`;
};
function qR(...e) {
  return function(r) {
    const n = Cs((u) => r.extractRehydrationInfo?.(u, {
      reducerPath: r.reducerPath ?? "api"
    })), o = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: n,
      serializeQueryArgs(u) {
        let p = _c;
        if ("serializeQueryArgs" in u.endpointDefinition) {
          const f = u.endpointDefinition.serializeQueryArgs;
          p = (c) => {
            const m = f(c);
            return typeof m == "string" ? m : _c({
              ...c,
              queryArgs: m
            });
          };
        } else r.serializeQueryArgs && (p = r.serializeQueryArgs);
        return p(u);
      },
      tagTypes: [...r.tagTypes || []]
    }, a = {
      endpointDefinitions: {},
      batch(u) {
        u();
      },
      apiUid: vm(),
      extractRehydrationInfo: n,
      hasRehydrationInfo: Cs((u) => n(u) != null)
    }, i = {
      injectEndpoints: l,
      enhanceEndpoints({
        addTagTypes: u,
        endpoints: p
      }) {
        if (u)
          for (const f of u)
            o.tagTypes.includes(f) || o.tagTypes.push(f);
        if (p)
          for (const [f, c] of Object.entries(p))
            typeof c == "function" ? c(a.endpointDefinitions[f]) : Object.assign(a.endpointDefinitions[f] || {}, c);
        return i;
      }
    }, s = e.map((u) => u.init(i, o, a));
    function l(u) {
      const p = u.endpoints({
        query: (f) => ({
          ...f,
          type: "query"
          /* query */
        }),
        mutation: (f) => ({
          ...f,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (f) => ({
          ...f,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [f, c] of Object.entries(p)) {
        if (u.overrideExisting !== !0 && f in a.endpointDefinitions) {
          if (u.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? os(39) : `called \`injectEndpoints\` to override already-existing endpointName ${f} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${f} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && ki(c)) {
          const {
            infiniteQueryOptions: m
          } = c, {
            maxPages: h,
            getPreviousPageParam: y
          } = m;
          if (typeof h == "number") {
            if (h < 1)
              throw new Error(process.env.NODE_ENV === "production" ? os(40) : `maxPages for endpoint '${f}' must be a number greater than 0`);
            if (typeof y != "function")
              throw new Error(process.env.NODE_ENV === "production" ? os(41) : `getPreviousPageParam for endpoint '${f}' must be a function if maxPages is used`);
          }
        }
        a.endpointDefinitions[f] = c;
        for (const m of s)
          m.injectEndpoint(f, c);
      }
      return i;
    }
    return i.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function xt(e, ...t) {
  return Object.assign(e, ...t);
}
var MR = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const n = `${e.reducerPath}/subscriptions`;
  let o = null, a = null;
  const {
    updateSubscriptionOptions: i,
    unsubscribeQueryResult: s
  } = e.internalActions, l = (m, h) => {
    if (i.match(h)) {
      const {
        queryCacheKey: C,
        requestId: d,
        options: R
      } = h.payload;
      return m?.[C]?.[d] && (m[C][d] = R), !0;
    }
    if (s.match(h)) {
      const {
        queryCacheKey: C,
        requestId: d
      } = h.payload;
      return m[C] && delete m[C][d], !0;
    }
    if (e.internalActions.removeQueryResult.match(h))
      return delete m[h.payload.queryCacheKey], !0;
    if (t.pending.match(h)) {
      const {
        meta: {
          arg: C,
          requestId: d
        }
      } = h, R = m[C.queryCacheKey] ??= {};
      return R[`${d}_running`] = {}, C.subscribe && (R[d] = C.subscriptionOptions ?? R[d] ?? {}), !0;
    }
    let y = !1;
    if (t.fulfilled.match(h) || t.rejected.match(h)) {
      const C = m[h.meta.arg.queryCacheKey] || {}, d = `${h.meta.requestId}_running`;
      y ||= !!C[d], delete C[d];
    }
    if (t.rejected.match(h)) {
      const {
        meta: {
          condition: C,
          arg: d,
          requestId: R
        }
      } = h;
      if (C && d.subscribe) {
        const b = m[d.queryCacheKey] ??= {};
        b[R] = d.subscriptionOptions ?? b[R] ?? {}, y = !0;
      }
    }
    return y;
  }, u = () => r.currentSubscriptions, c = {
    getSubscriptions: u,
    getSubscriptionCount: (m) => {
      const y = u()[m] ?? {};
      return Br(y);
    },
    isRequestSubscribed: (m, h) => !!u()?.[m]?.[h]
  };
  return (m, h) => {
    if (o || (o = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(m))
      return o = r.currentSubscriptions = {}, a = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(m))
      return [!1, c];
    const y = l(r.currentSubscriptions, m);
    let C = !0;
    if (y) {
      a || (a = setTimeout(() => {
        const b = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, E] = Oh(o, () => b);
        h.next(e.internalActions.subscriptionsUpdated(E)), o = b, a = null;
      }, 500));
      const d = typeof m.type == "string" && !!m.type.startsWith(n), R = t.rejected.match(m) && m.meta.condition && !!m.meta.arg.subscribe;
      C = !d && !R;
    }
    return [C, !1];
  };
};
function OR(e) {
  for (const t in e)
    return !1;
  return !0;
}
var AR = 2147483647 / 1e3 - 1, IR = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: n,
  internalState: o,
  selectors: {
    selectQueryEntry: a,
    selectConfig: i
  }
}) => {
  const {
    removeQueryResult: s,
    unsubscribeQueryResult: l,
    cacheEntriesUpserted: u
  } = t.internalActions, p = vs(l.match, r.fulfilled, r.rejected, u.match);
  function f(C) {
    const d = o.currentSubscriptions[C];
    return !!d && !OR(d);
  }
  const c = {}, m = (C, d, R) => {
    const b = d.getState(), E = i(b);
    if (p(C)) {
      let w;
      if (u.match(C))
        w = C.payload.map((g) => g.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: g
        } = l.match(C) ? C.payload : C.meta.arg;
        w = [g];
      }
      h(w, d, E);
    }
    if (t.util.resetApiState.match(C))
      for (const [w, g] of Object.entries(c))
        g && clearTimeout(g), delete c[w];
    if (n.hasRehydrationInfo(C)) {
      const {
        queries: w
      } = n.extractRehydrationInfo(C);
      h(Object.keys(w), d, E);
    }
  };
  function h(C, d, R) {
    const b = d.getState();
    for (const E of C) {
      const w = a(b, E);
      y(E, w?.endpointName, d, R);
    }
  }
  function y(C, d, R, b) {
    const w = n.endpointDefinitions[d]?.keepUnusedDataFor ?? b.keepUnusedDataFor;
    if (w === 1 / 0)
      return;
    const g = Math.max(0, Math.min(w, AR));
    if (!f(C)) {
      const v = c[C];
      v && clearTimeout(v), c[C] = setTimeout(() => {
        f(C) || R.dispatch(s({
          queryCacheKey: C
        })), delete c[C];
      }, g * 1e3);
    }
  }
  return m;
}, wc = new Error("Promise never resolved before cacheEntryRemoved."), kR = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: n,
  mutationThunk: o,
  internalState: a,
  selectors: {
    selectQueryEntry: i,
    selectApiState: s
  }
}) => {
  const l = $u(n), u = $u(o), p = Cr(n, o), f = {};
  function c(d, R, b) {
    const E = f[d];
    E?.valueResolved && (E.valueResolved({
      data: R,
      meta: b
    }), delete E.valueResolved);
  }
  function m(d) {
    const R = f[d];
    R && (delete f[d], R.cacheEntryRemoved());
  }
  const h = (d, R, b) => {
    const E = y(d);
    function w(g, v, _, A) {
      const O = i(b, v), q = i(R.getState(), v);
      !O && q && C(g, A, v, R, _);
    }
    if (n.pending.match(d))
      w(d.meta.arg.endpointName, E, d.meta.requestId, d.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(d))
      for (const {
        queryDescription: g,
        value: v
      } of d.payload) {
        const {
          endpointName: _,
          originalArgs: A,
          queryCacheKey: O
        } = g;
        w(_, O, d.meta.requestId, A), c(O, v, {});
      }
    else if (o.pending.match(d))
      R.getState()[t].mutations[E] && C(d.meta.arg.endpointName, d.meta.arg.originalArgs, E, R, d.meta.requestId);
    else if (p(d))
      c(E, d.payload, d.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(d) || e.internalActions.removeMutationResult.match(d))
      m(E);
    else if (e.util.resetApiState.match(d))
      for (const g of Object.keys(f))
        m(g);
  };
  function y(d) {
    return l(d) ? d.meta.arg.queryCacheKey : u(d) ? d.meta.arg.fixedCacheKey ?? d.meta.requestId : e.internalActions.removeQueryResult.match(d) ? d.payload.queryCacheKey : e.internalActions.removeMutationResult.match(d) ? gi(d.payload) : "";
  }
  function C(d, R, b, E, w) {
    const g = r.endpointDefinitions[d], v = g?.onCacheEntryAdded;
    if (!v) return;
    const _ = {}, A = new Promise((N) => {
      _.cacheEntryRemoved = N;
    }), O = Promise.race([new Promise((N) => {
      _.valueResolved = N;
    }), A.then(() => {
      throw wc;
    })]);
    O.catch(() => {
    }), f[b] = _;
    const q = e.endpoints[d].select(ws(g) ? R : b), I = E.dispatch((N, Y, G) => G), T = {
      ...E,
      getCacheEntry: () => q(E.getState()),
      requestId: w,
      extra: I,
      updateCachedData: ws(g) ? (N) => E.dispatch(e.util.updateQueryData(d, R, N)) : void 0,
      cacheDataLoaded: O,
      cacheEntryRemoved: A
    }, k = v(R, T);
    Promise.resolve(k).catch((N) => {
      if (N !== wc)
        throw N;
    });
  }
  return h;
}, DR = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (n, o) => {
  e.util.resetApiState.match(n) && o.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(n) && n.payload === t && o.getState()[r]?.config?.middlewareRegistered === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${r}".
You can only have one api per reducer path, this will lead to crashes in various situations!${r === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, NR = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: n,
  queryThunk: o,
  api: a,
  assertTagType: i,
  refetchQuery: s,
  internalState: l
}) => {
  const {
    removeQueryResult: u
  } = a.internalActions, p = vs(Cr(n), Yl(n)), f = vs(Cr(n, o), Kl(n, o));
  let c = [];
  const m = (C, d) => {
    p(C) ? y(Dh(C, "invalidatesTags", r, i), d) : f(C) ? y([], d) : a.util.invalidateTags.match(C) && y(hu(C.payload, void 0, void 0, void 0, void 0, i), d);
  };
  function h(C) {
    const {
      queries: d,
      mutations: R
    } = C;
    for (const b of [d, R])
      for (const E in b)
        if (b[E]?.status === "pending") return !0;
    return !1;
  }
  function y(C, d) {
    const R = d.getState(), b = R[e];
    if (c.push(...C), b.config.invalidationBehavior === "delayed" && h(b))
      return;
    const E = c;
    if (c = [], E.length === 0) return;
    const w = a.util.selectInvalidatedBy(R, E);
    t.batch(() => {
      const g = Array.from(w.values());
      for (const {
        queryCacheKey: v
      } of g) {
        const _ = b.queries[v], A = l.currentSubscriptions[v] ?? {};
        _ && (Br(A) === 0 ? d.dispatch(u({
          queryCacheKey: v
        })) : _.status !== "uninitialized" && d.dispatch(s(_)));
      }
    });
  }
  return m;
}, LR = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const a = {}, i = (c, m) => {
    (r.internalActions.updateSubscriptionOptions.match(c) || r.internalActions.unsubscribeQueryResult.match(c)) && l(c.payload, m), (t.pending.match(c) || t.rejected.match(c) && c.meta.condition) && l(c.meta.arg, m), (t.fulfilled.match(c) || t.rejected.match(c) && !c.meta.condition) && s(c.meta.arg, m), r.util.resetApiState.match(c) && p();
  };
  function s({
    queryCacheKey: c
  }, m) {
    const h = m.getState()[e], y = h.queries[c], C = o.currentSubscriptions[c];
    if (!y || y.status === "uninitialized") return;
    const {
      lowestPollingInterval: d,
      skipPollingIfUnfocused: R
    } = f(C);
    if (!Number.isFinite(d)) return;
    const b = a[c];
    b?.timeout && (clearTimeout(b.timeout), b.timeout = void 0);
    const E = Date.now() + d;
    a[c] = {
      nextPollTimestamp: E,
      pollingInterval: d,
      timeout: setTimeout(() => {
        (h.config.focused || !R) && m.dispatch(n(y)), s({
          queryCacheKey: c
        }, m);
      }, d)
    };
  }
  function l({
    queryCacheKey: c
  }, m) {
    const y = m.getState()[e].queries[c], C = o.currentSubscriptions[c];
    if (!y || y.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: d
    } = f(C);
    if (!Number.isFinite(d)) {
      u(c);
      return;
    }
    const R = a[c], b = Date.now() + d;
    (!R || b < R.nextPollTimestamp) && s({
      queryCacheKey: c
    }, m);
  }
  function u(c) {
    const m = a[c];
    m?.timeout && clearTimeout(m.timeout), delete a[c];
  }
  function p() {
    for (const c of Object.keys(a))
      u(c);
  }
  function f(c = {}) {
    let m = !1, h = Number.POSITIVE_INFINITY;
    for (let y in c)
      c[y].pollingInterval && (h = Math.min(c[y].pollingInterval, h), m = c[y].skipPollingIfUnfocused || m);
    return {
      lowestPollingInterval: h,
      skipPollingIfUnfocused: m
    };
  }
  return i;
}, jR = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: n
}) => {
  const o = gm(r, n), a = Kl(r, n), i = Cr(r, n), s = {};
  return (u, p) => {
    if (o(u)) {
      const {
        requestId: f,
        arg: {
          endpointName: c,
          originalArgs: m
        }
      } = u.meta, h = t.endpointDefinitions[c], y = h?.onQueryStarted;
      if (y) {
        const C = {}, d = new Promise((w, g) => {
          C.resolve = w, C.reject = g;
        });
        d.catch(() => {
        }), s[f] = C;
        const R = e.endpoints[c].select(ws(h) ? m : f), b = p.dispatch((w, g, v) => v), E = {
          ...p,
          getCacheEntry: () => R(p.getState()),
          requestId: f,
          extra: b,
          updateCachedData: ws(h) ? (w) => p.dispatch(e.util.updateQueryData(c, m, w)) : void 0,
          queryFulfilled: d
        };
        y(m, E);
      }
    } else if (i(u)) {
      const {
        requestId: f,
        baseQueryMeta: c
      } = u.meta;
      s[f]?.resolve({
        data: u.payload,
        meta: c
      }), delete s[f];
    } else if (a(u)) {
      const {
        requestId: f,
        rejectedWithValue: c,
        baseQueryMeta: m
      } = u.meta;
      s[f]?.reject({
        error: u.payload ?? u.error,
        isUnhandledError: !c,
        meta: m
      }), delete s[f];
    }
  };
}, FR = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: n,
  internalState: o
}) => {
  const {
    removeQueryResult: a
  } = r.internalActions, i = (l, u) => {
    Us.match(l) && s(u, "refetchOnFocus"), $s.match(l) && s(u, "refetchOnReconnect");
  };
  function s(l, u) {
    const p = l.getState()[e], f = p.queries, c = o.currentSubscriptions;
    t.batch(() => {
      for (const m of Object.keys(c)) {
        const h = f[m], y = c[m];
        if (!y || !h) continue;
        (Object.values(y).some((d) => d[u] === !0) || Object.values(y).every((d) => d[u] === void 0) && p.config[u]) && (Br(y) === 0 ? l.dispatch(a({
          queryCacheKey: m
        })) : h.status !== "uninitialized" && l.dispatch(n(h)));
      }
    });
  }
  return i;
};
function BR(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: n,
    context: o
  } = e, {
    apiUid: a
  } = o, i = {
    invalidateTags: rn(`${t}/invalidateTags`)
  }, s = (f) => f.type.startsWith(`${t}/`), l = [DR, IR, NR, LR, kR, jR];
  return {
    middleware: (f) => {
      let c = !1;
      const h = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: p,
        isThisApiSliceAction: s
      }, y = l.map((R) => R(h)), C = MR(h), d = FR(h);
      return (R) => (b) => {
        if (!bm(b))
          return R(b);
        c || (c = !0, f.dispatch(n.internalActions.middlewareRegistered(a)));
        const E = {
          ...f,
          next: R
        }, w = f.getState(), [g, v] = C(b, E, w);
        let _;
        if (g ? _ = R(b) : _ = v, f.getState()[t] && (d(b, E, w), s(b) || o.hasRehydrationInfo(b)))
          for (const A of y)
            A(b, E, w);
        return _;
      };
    },
    actions: i
  };
  function p(f) {
    return e.api.endpoints[f.endpointName].initiate(f.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Tc = /* @__PURE__ */ Symbol(), UR = ({
  createSelector: e = lv
} = {}) => ({
  name: Tc,
  init(t, {
    baseQuery: r,
    tagTypes: n,
    reducerPath: o,
    serializeQueryArgs: a,
    keepUnusedDataFor: i,
    refetchOnMountOrArgChange: s,
    refetchOnFocus: l,
    refetchOnReconnect: u,
    invalidationBehavior: p,
    onSchemaFailure: f,
    catchSchemaFailure: c,
    skipSchemaValidation: m
  }, h) {
    tR();
    const y = (X) => (typeof process < "u" && process.env.NODE_ENV === "development" && (n.includes(X.type) || console.error(`Tag type '${X.type}' was used, but not specified in \`tagTypes\`!`)), X);
    Object.assign(t, {
      reducerPath: o,
      endpoints: {},
      internalActions: {
        onOnline: $s,
        onOffline: mu,
        onFocus: Us,
        onFocusLost: pu
      },
      util: {}
    });
    const C = xR({
      serializeQueryArgs: a,
      reducerPath: o,
      createSelector: e
    }), {
      selectInvalidatedBy: d,
      selectCachedArgsForQuery: R,
      buildQuerySelector: b,
      buildInfiniteQuerySelector: E,
      buildMutationSelector: w
    } = C;
    xt(t.util, {
      selectInvalidatedBy: d,
      selectCachedArgsForQuery: R
    });
    const {
      queryThunk: g,
      infiniteQueryThunk: v,
      mutationThunk: _,
      patchQueryData: A,
      updateQueryData: O,
      upsertQueryData: q,
      prefetch: I,
      buildMatchThunkActions: T
    } = SR({
      baseQuery: r,
      reducerPath: o,
      context: h,
      api: t,
      serializeQueryArgs: a,
      assertTagType: y,
      selectors: C,
      onSchemaFailure: f,
      catchSchemaFailure: c,
      skipSchemaValidation: m
    }), {
      reducer: k,
      actions: N
    } = PR({
      context: h,
      queryThunk: g,
      mutationThunk: _,
      serializeQueryArgs: a,
      reducerPath: o,
      assertTagType: y,
      config: {
        refetchOnFocus: l,
        refetchOnReconnect: u,
        refetchOnMountOrArgChange: s,
        keepUnusedDataFor: i,
        reducerPath: o,
        invalidationBehavior: p
      }
    });
    xt(t.util, {
      patchQueryData: A,
      updateQueryData: O,
      upsertQueryData: q,
      prefetch: I,
      resetApiState: N.resetApiState,
      upsertQueryEntries: N.cacheEntriesUpserted
    }), xt(t.internalActions, N);
    const {
      middleware: Y,
      actions: G
    } = BR({
      reducerPath: o,
      context: h,
      queryThunk: g,
      mutationThunk: _,
      infiniteQueryThunk: v,
      api: t,
      assertTagType: y,
      selectors: C
    });
    xt(t.util, G), xt(t, {
      reducer: k,
      middleware: Y
    });
    const {
      buildInitiateQuery: Q,
      buildInitiateInfiniteQuery: K,
      buildInitiateMutation: se,
      getRunningMutationThunk: ne,
      getRunningMutationsThunk: we,
      getRunningQueriesThunk: W,
      getRunningQueryThunk: be
    } = wR({
      queryThunk: g,
      mutationThunk: _,
      infiniteQueryThunk: v,
      api: t,
      serializeQueryArgs: a,
      context: h
    });
    return xt(t.util, {
      getRunningMutationThunk: ne,
      getRunningMutationsThunk: we,
      getRunningQueryThunk: be,
      getRunningQueriesThunk: W
    }), {
      name: Tc,
      injectEndpoint(X, ue) {
        const me = t, le = me.endpoints[X] ??= {};
        Hs(ue) && xt(le, {
          name: X,
          select: b(X, ue),
          initiate: Q(X, ue)
        }, T(g, X)), ER(ue) && xt(le, {
          name: X,
          select: w(),
          initiate: se(X)
        }, T(_, X)), ki(ue) && xt(le, {
          name: X,
          select: E(X, ue),
          initiate: K(X, ue)
        }, T(g, X));
      }
    };
  }
});
UR();
function Lh({
  reducer: e,
  middlewares: t = [],
  preloadedState: r = {}
}) {
  const n = cv({
    reducer: e,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (o) => o().concat(t),
    preloadedState: r
  });
  return RR(n.dispatch), n;
}
const $R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  makeStore: Lh
}, Symbol.toStringTag, { value: "Module" }));
var gt = {}, fs = { exports: {} };
fs.exports;
var Sc;
function jh() {
  return Sc || (Sc = 1, (function(e) {
    const r = (a = 0) => (i) => `\x1B[${38 + a};5;${i}m`, n = (a = 0) => (i, s, l) => `\x1B[${38 + a};2;${i};${s};${l}m`;
    function o() {
      const a = /* @__PURE__ */ new Map(), i = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      i.color.gray = i.color.blackBright, i.bgColor.bgGray = i.bgColor.bgBlackBright, i.color.grey = i.color.blackBright, i.bgColor.bgGrey = i.bgColor.bgBlackBright;
      for (const [s, l] of Object.entries(i)) {
        for (const [u, p] of Object.entries(l))
          i[u] = {
            open: `\x1B[${p[0]}m`,
            close: `\x1B[${p[1]}m`
          }, l[u] = i[u], a.set(p[0], p[1]);
        Object.defineProperty(i, s, {
          value: l,
          enumerable: !1
        });
      }
      return Object.defineProperty(i, "codes", {
        value: a,
        enumerable: !1
      }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = r(), i.color.ansi16m = n(), i.bgColor.ansi256 = r(10), i.bgColor.ansi16m = n(10), Object.defineProperties(i, {
        rgbToAnsi256: {
          value: (s, l, u) => s === l && l === u ? s < 8 ? 16 : s > 248 ? 231 : Math.round((s - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(s / 255 * 5) + 6 * Math.round(l / 255 * 5) + Math.round(u / 255 * 5),
          enumerable: !1
        },
        hexToRgb: {
          value: (s) => {
            const l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16));
            if (!l)
              return [0, 0, 0];
            let { colorString: u } = l.groups;
            u.length === 3 && (u = u.split("").map((f) => f + f).join(""));
            const p = Number.parseInt(u, 16);
            return [
              p >> 16 & 255,
              p >> 8 & 255,
              p & 255
            ];
          },
          enumerable: !1
        },
        hexToAnsi256: {
          value: (s) => i.rgbToAnsi256(...i.hexToRgb(s)),
          enumerable: !1
        }
      }), i;
    }
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: o
    });
  })(fs)), fs.exports;
}
var pr = {}, Pc;
function Vs() {
  if (Pc) return pr;
  Pc = 1, Object.defineProperty(pr, "__esModule", {
    value: !0
  }), pr.printIteratorEntries = t, pr.printIteratorValues = r, pr.printListItems = n, pr.printObjectProperties = o;
  const e = (a, i) => {
    const s = Object.keys(a).sort(i);
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(a).forEach((l) => {
      Object.getOwnPropertyDescriptor(a, l).enumerable && s.push(l);
    }), s;
  };
  function t(a, i, s, l, u, p, f = ": ") {
    let c = "", m = a.next();
    if (!m.done) {
      c += i.spacingOuter;
      const h = s + i.indent;
      for (; !m.done; ) {
        const y = p(
          m.value[0],
          i,
          h,
          l,
          u
        ), C = p(
          m.value[1],
          i,
          h,
          l,
          u
        );
        c += h + y + f + C, m = a.next(), m.done ? i.min || (c += ",") : c += "," + i.spacingInner;
      }
      c += i.spacingOuter + s;
    }
    return c;
  }
  function r(a, i, s, l, u, p) {
    let f = "", c = a.next();
    if (!c.done) {
      f += i.spacingOuter;
      const m = s + i.indent;
      for (; !c.done; )
        f += m + p(c.value, i, m, l, u), c = a.next(), c.done ? i.min || (f += ",") : f += "," + i.spacingInner;
      f += i.spacingOuter + s;
    }
    return f;
  }
  function n(a, i, s, l, u, p) {
    let f = "";
    if (a.length) {
      f += i.spacingOuter;
      const c = s + i.indent;
      for (let m = 0; m < a.length; m++)
        f += c, m in a && (f += p(a[m], i, c, l, u)), m < a.length - 1 ? f += "," + i.spacingInner : i.min || (f += ",");
      f += i.spacingOuter + s;
    }
    return f;
  }
  function o(a, i, s, l, u, p) {
    let f = "";
    const c = e(a, i.compareKeys);
    if (c.length) {
      f += i.spacingOuter;
      const m = s + i.indent;
      for (let h = 0; h < c.length; h++) {
        const y = c[h], C = p(y, i, m, l, u), d = p(a[y], i, m, l, u);
        f += m + C + ": " + d, h < c.length - 1 ? f += "," + i.spacingInner : i.min || (f += ",");
      }
      f += i.spacingOuter + s;
    }
    return f;
  }
  return pr;
}
var qt = {}, xc;
function HR() {
  if (xc) return qt;
  xc = 1, Object.defineProperty(qt, "__esModule", {
    value: !0
  }), qt.test = qt.serialize = qt.default = void 0;
  var e = Vs(), t = (function() {
    return typeof globalThis < "u" ? globalThis : typeof t < "u" ? t : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), r = t["jest-symbol-do-not-touch"] || t.Symbol;
  const n = typeof r == "function" && r.for ? r.for("jest.asymmetricMatcher") : 1267621, o = " ", a = (u, p, f, c, m, h) => {
    const y = u.toString();
    return y === "ArrayContaining" || y === "ArrayNotContaining" ? ++c > p.maxDepth ? "[" + y + "]" : y + o + "[" + (0, e.printListItems)(
      u.sample,
      p,
      f,
      c,
      m,
      h
    ) + "]" : y === "ObjectContaining" || y === "ObjectNotContaining" ? ++c > p.maxDepth ? "[" + y + "]" : y + o + "{" + (0, e.printObjectProperties)(
      u.sample,
      p,
      f,
      c,
      m,
      h
    ) + "}" : y === "StringMatching" || y === "StringNotMatching" || y === "StringContaining" || y === "StringNotContaining" ? y + o + h(u.sample, p, f, c, m) : u.toAsymmetricMatcher();
  };
  qt.serialize = a;
  const i = (u) => u && u.$$typeof === n;
  qt.test = i;
  var l = {
    serialize: a,
    test: i
  };
  return qt.default = l, qt;
}
var Mt = {}, il, qc;
function VR() {
  return qc || (qc = 1, il = ({ onlyFirst: e = !1 } = {}) => {
    const t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  }), il;
}
var Mc;
function zR() {
  if (Mc) return Mt;
  Mc = 1, Object.defineProperty(Mt, "__esModule", {
    value: !0
  }), Mt.test = Mt.serialize = Mt.default = void 0;
  var e = r(VR()), t = r(jh());
  function r(l) {
    return l && l.__esModule ? l : { default: l };
  }
  const n = (l) => l.replace((0, e.default)(), (u) => {
    switch (u) {
      case t.default.red.close:
      case t.default.green.close:
      case t.default.cyan.close:
      case t.default.gray.close:
      case t.default.white.close:
      case t.default.yellow.close:
      case t.default.bgRed.close:
      case t.default.bgGreen.close:
      case t.default.bgYellow.close:
      case t.default.inverse.close:
      case t.default.dim.close:
      case t.default.bold.close:
      case t.default.reset.open:
      case t.default.reset.close:
        return "</>";
      case t.default.red.open:
        return "<red>";
      case t.default.green.open:
        return "<green>";
      case t.default.cyan.open:
        return "<cyan>";
      case t.default.gray.open:
        return "<gray>";
      case t.default.white.open:
        return "<white>";
      case t.default.yellow.open:
        return "<yellow>";
      case t.default.bgRed.open:
        return "<bgRed>";
      case t.default.bgGreen.open:
        return "<bgGreen>";
      case t.default.bgYellow.open:
        return "<bgYellow>";
      case t.default.inverse.open:
        return "<inverse>";
      case t.default.dim.open:
        return "<dim>";
      case t.default.bold.open:
        return "<bold>";
      default:
        return "";
    }
  }), o = (l) => typeof l == "string" && !!l.match((0, e.default)());
  Mt.test = o;
  const a = (l, u, p, f, c, m) => m(n(l), u, p, f, c);
  Mt.serialize = a;
  var s = {
    serialize: a,
    test: o
  };
  return Mt.default = s, Mt;
}
var Ot = {}, Oc;
function WR() {
  if (Oc) return Ot;
  Oc = 1, Object.defineProperty(Ot, "__esModule", {
    value: !0
  }), Ot.test = Ot.serialize = Ot.default = void 0;
  var e = Vs();
  const t = " ", r = ["DOMStringMap", "NamedNodeMap"], n = /^(HTML\w*Collection|NodeList)$/, o = (p) => r.indexOf(p) !== -1 || n.test(p), a = (p) => p && p.constructor && !!p.constructor.name && o(p.constructor.name);
  Ot.test = a;
  const i = (p) => p.constructor.name === "NamedNodeMap", s = (p, f, c, m, h, y) => {
    const C = p.constructor.name;
    return ++m > f.maxDepth ? "[" + C + "]" : (f.min ? "" : C + t) + (r.indexOf(C) !== -1 ? "{" + (0, e.printObjectProperties)(
      i(p) ? Array.from(p).reduce((d, R) => (d[R.name] = R.value, d), {}) : { ...p },
      f,
      c,
      m,
      h,
      y
    ) + "}" : "[" + (0, e.printListItems)(
      Array.from(p),
      f,
      c,
      m,
      h,
      y
    ) + "]");
  };
  Ot.serialize = s;
  var u = {
    serialize: s,
    test: a
  };
  return Ot.default = u, Ot;
}
var At = {}, Xe = {}, Yi = {}, Ac;
function GR() {
  if (Ac) return Yi;
  Ac = 1, Object.defineProperty(Yi, "__esModule", {
    value: !0
  }), Yi.default = e;
  function e(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return Yi;
}
var Ic;
function bu() {
  if (Ic) return Xe;
  Ic = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  }), Xe.printText = Xe.printProps = Xe.printElementAsLeaf = Xe.printElement = Xe.printComment = Xe.printChildren = void 0;
  var e = t(GR());
  function t(l) {
    return l && l.__esModule ? l : { default: l };
  }
  const r = (l, u, p, f, c, m, h) => {
    const y = f + p.indent, C = p.colors;
    return l.map((d) => {
      const R = u[d];
      let b = h(R, p, y, c, m);
      return typeof R != "string" && (b.indexOf(`
`) !== -1 && (b = p.spacingOuter + y + b + p.spacingOuter + f), b = "{" + b + "}"), p.spacingInner + f + C.prop.open + d + C.prop.close + "=" + C.value.open + b + C.value.close;
    }).join("");
  };
  Xe.printProps = r;
  const n = (l, u, p, f, c, m) => l.map(
    (h) => u.spacingOuter + p + (typeof h == "string" ? o(h, u) : m(h, u, p, f, c))
  ).join("");
  Xe.printChildren = n;
  const o = (l, u) => {
    const p = u.colors.content;
    return p.open + (0, e.default)(l) + p.close;
  };
  Xe.printText = o;
  const a = (l, u) => {
    const p = u.colors.comment;
    return p.open + "<!--" + (0, e.default)(l) + "-->" + p.close;
  };
  Xe.printComment = a;
  const i = (l, u, p, f, c) => {
    const m = f.colors.tag;
    return m.open + "<" + l + (u && m.close + u + f.spacingOuter + c + m.open) + (p ? ">" + m.close + p + f.spacingOuter + c + m.open + "</" + l : (u && !f.min ? "" : " ") + "/") + ">" + m.close;
  };
  Xe.printElement = i;
  const s = (l, u) => {
    const p = u.colors.tag;
    return p.open + "<" + l + p.close + " …" + p.open + " />" + p.close;
  };
  return Xe.printElementAsLeaf = s, Xe;
}
var kc;
function YR() {
  if (kc) return At;
  kc = 1, Object.defineProperty(At, "__esModule", {
    value: !0
  }), At.test = At.serialize = At.default = void 0;
  var e = bu();
  const t = 1, r = 3, n = 8, o = 11, a = /^((HTML|SVG)\w*)?Element$/, i = (y) => {
    try {
      return typeof y.hasAttribute == "function" && y.hasAttribute("is");
    } catch {
      return !1;
    }
  }, s = (y) => {
    const C = y.constructor.name, { nodeType: d, tagName: R } = y, b = typeof R == "string" && R.includes("-") || i(y);
    return d === t && (a.test(C) || b) || d === r && C === "Text" || d === n && C === "Comment" || d === o && C === "DocumentFragment";
  }, l = (y) => {
    var C;
    return (y == null || (C = y.constructor) === null || C === void 0 ? void 0 : C.name) && s(y);
  };
  At.test = l;
  function u(y) {
    return y.nodeType === r;
  }
  function p(y) {
    return y.nodeType === n;
  }
  function f(y) {
    return y.nodeType === o;
  }
  const c = (y, C, d, R, b, E) => {
    if (u(y))
      return (0, e.printText)(y.data, C);
    if (p(y))
      return (0, e.printComment)(y.data, C);
    const w = f(y) ? "DocumentFragment" : y.tagName.toLowerCase();
    return ++R > C.maxDepth ? (0, e.printElementAsLeaf)(w, C) : (0, e.printElement)(
      w,
      (0, e.printProps)(
        f(y) ? [] : Array.from(y.attributes).map((g) => g.name).sort(),
        f(y) ? {} : Array.from(y.attributes).reduce((g, v) => (g[v.name] = v.value, g), {}),
        C,
        d + C.indent,
        R,
        b,
        E
      ),
      (0, e.printChildren)(
        Array.prototype.slice.call(y.childNodes || y.children),
        C,
        d + C.indent,
        R,
        b,
        E
      ),
      C,
      d
    );
  };
  At.serialize = c;
  var h = {
    serialize: c,
    test: l
  };
  return At.default = h, At;
}
var It = {}, Dc;
function KR() {
  if (Dc) return It;
  Dc = 1, Object.defineProperty(It, "__esModule", {
    value: !0
  }), It.test = It.serialize = It.default = void 0;
  var e = Vs();
  const t = "@@__IMMUTABLE_ITERABLE__@@", r = "@@__IMMUTABLE_LIST__@@", n = "@@__IMMUTABLE_KEYED__@@", o = "@@__IMMUTABLE_MAP__@@", a = "@@__IMMUTABLE_ORDERED__@@", i = "@@__IMMUTABLE_RECORD__@@", s = "@@__IMMUTABLE_SEQ__@@", l = "@@__IMMUTABLE_SET__@@", u = "@@__IMMUTABLE_STACK__@@", p = (v) => "Immutable." + v, f = (v) => "[" + v + "]", c = " ", m = "…", h = (v, _, A, O, q, I, T) => ++O > _.maxDepth ? f(p(T)) : p(T) + c + "{" + (0, e.printIteratorEntries)(
    v.entries(),
    _,
    A,
    O,
    q,
    I
  ) + "}";
  function y(v) {
    let _ = 0;
    return {
      next() {
        if (_ < v._keys.length) {
          const A = v._keys[_++];
          return {
            done: !1,
            value: [A, v.get(A)]
          };
        }
        return {
          done: !0,
          value: void 0
        };
      }
    };
  }
  const C = (v, _, A, O, q, I) => {
    const T = p(v._name || "Record");
    return ++O > _.maxDepth ? f(T) : T + c + "{" + (0, e.printIteratorEntries)(
      y(v),
      _,
      A,
      O,
      q,
      I
    ) + "}";
  }, d = (v, _, A, O, q, I) => {
    const T = p("Seq");
    return ++O > _.maxDepth ? f(T) : v[n] ? T + c + "{" + // from Immutable collection of entries or from ECMAScript object
    (v._iter || v._object ? (0, e.printIteratorEntries)(
      v.entries(),
      _,
      A,
      O,
      q,
      I
    ) : m) + "}" : T + c + "[" + (v._iter || // from Immutable collection of values
    v._array || // from ECMAScript array
    v._collection || // from ECMAScript collection in immutable v4
    v._iterable ? (0, e.printIteratorValues)(
      v.values(),
      _,
      A,
      O,
      q,
      I
    ) : m) + "]";
  }, R = (v, _, A, O, q, I, T) => ++O > _.maxDepth ? f(p(T)) : p(T) + c + "[" + (0, e.printIteratorValues)(
    v.values(),
    _,
    A,
    O,
    q,
    I
  ) + "]", b = (v, _, A, O, q, I) => v[o] ? h(
    v,
    _,
    A,
    O,
    q,
    I,
    v[a] ? "OrderedMap" : "Map"
  ) : v[r] ? R(
    v,
    _,
    A,
    O,
    q,
    I,
    "List"
  ) : v[l] ? R(
    v,
    _,
    A,
    O,
    q,
    I,
    v[a] ? "OrderedSet" : "Set"
  ) : v[u] ? R(
    v,
    _,
    A,
    O,
    q,
    I,
    "Stack"
  ) : v[s] ? d(v, _, A, O, q, I) : C(v, _, A, O, q, I);
  It.serialize = b;
  const E = (v) => v && (v[t] === !0 || v[i] === !0);
  It.test = E;
  var g = {
    serialize: b,
    test: E
  };
  return It.default = g, It;
}
var kt = {}, Ki = { exports: {} }, Se = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc;
function QR() {
  if (Nc) return Se;
  Nc = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, s = 60112, l = 60113, u = 60120, p = 60115, f = 60116, c = 60121, m = 60122, h = 60117, y = 60129, C = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var d = Symbol.for;
    e = d("react.element"), t = d("react.portal"), r = d("react.fragment"), n = d("react.strict_mode"), o = d("react.profiler"), a = d("react.provider"), i = d("react.context"), s = d("react.forward_ref"), l = d("react.suspense"), u = d("react.suspense_list"), p = d("react.memo"), f = d("react.lazy"), c = d("react.block"), m = d("react.server.block"), h = d("react.fundamental"), y = d("react.debug_trace_mode"), C = d("react.legacy_hidden");
  }
  function R(T) {
    if (typeof T == "object" && T !== null) {
      var k = T.$$typeof;
      switch (k) {
        case e:
          switch (T = T.type, T) {
            case r:
            case o:
            case n:
            case l:
            case u:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case i:
                case s:
                case f:
                case p:
                case a:
                  return T;
                default:
                  return k;
              }
          }
        case t:
          return k;
      }
    }
  }
  var b = a, E = e, w = s, g = r, v = f, _ = p, A = t, O = o, q = n, I = l;
  return Se.ContextConsumer = i, Se.ContextProvider = b, Se.Element = E, Se.ForwardRef = w, Se.Fragment = g, Se.Lazy = v, Se.Memo = _, Se.Portal = A, Se.Profiler = O, Se.StrictMode = q, Se.Suspense = I, Se.isAsyncMode = function() {
    return !1;
  }, Se.isConcurrentMode = function() {
    return !1;
  }, Se.isContextConsumer = function(T) {
    return R(T) === i;
  }, Se.isContextProvider = function(T) {
    return R(T) === a;
  }, Se.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e;
  }, Se.isForwardRef = function(T) {
    return R(T) === s;
  }, Se.isFragment = function(T) {
    return R(T) === r;
  }, Se.isLazy = function(T) {
    return R(T) === f;
  }, Se.isMemo = function(T) {
    return R(T) === p;
  }, Se.isPortal = function(T) {
    return R(T) === t;
  }, Se.isProfiler = function(T) {
    return R(T) === o;
  }, Se.isStrictMode = function(T) {
    return R(T) === n;
  }, Se.isSuspense = function(T) {
    return R(T) === l;
  }, Se.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === r || T === o || T === y || T === n || T === l || T === u || T === C || typeof T == "object" && T !== null && (T.$$typeof === f || T.$$typeof === p || T.$$typeof === a || T.$$typeof === i || T.$$typeof === s || T.$$typeof === h || T.$$typeof === c || T[0] === m);
  }, Se.typeOf = R, Se;
}
var Pe = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lc;
function ZR() {
  return Lc || (Lc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, s = 60112, l = 60113, u = 60120, p = 60115, f = 60116, c = 60121, m = 60122, h = 60117, y = 60129, C = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var d = Symbol.for;
      e = d("react.element"), t = d("react.portal"), r = d("react.fragment"), n = d("react.strict_mode"), o = d("react.profiler"), a = d("react.provider"), i = d("react.context"), s = d("react.forward_ref"), l = d("react.suspense"), u = d("react.suspense_list"), p = d("react.memo"), f = d("react.lazy"), c = d("react.block"), m = d("react.server.block"), h = d("react.fundamental"), d("react.scope"), d("react.opaque.id"), y = d("react.debug_trace_mode"), d("react.offscreen"), C = d("react.legacy_hidden");
    }
    var R = !1;
    function b(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === r || B === o || B === y || B === n || B === l || B === u || B === C || R || typeof B == "object" && B !== null && (B.$$typeof === f || B.$$typeof === p || B.$$typeof === a || B.$$typeof === i || B.$$typeof === s || B.$$typeof === h || B.$$typeof === c || B[0] === m));
    }
    function E(B) {
      if (typeof B == "object" && B !== null) {
        var J = B.$$typeof;
        switch (J) {
          case e:
            var ee = B.type;
            switch (ee) {
              case r:
              case o:
              case n:
              case l:
              case u:
                return ee;
              default:
                var re = ee && ee.$$typeof;
                switch (re) {
                  case i:
                  case s:
                  case f:
                  case p:
                  case a:
                    return re;
                  default:
                    return J;
                }
            }
          case t:
            return J;
        }
      }
    }
    var w = i, g = a, v = e, _ = s, A = r, O = f, q = p, I = t, T = o, k = n, N = l, Y = !1, G = !1;
    function Q(B) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(B) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function se(B) {
      return E(B) === i;
    }
    function ne(B) {
      return E(B) === a;
    }
    function we(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function W(B) {
      return E(B) === s;
    }
    function be(B) {
      return E(B) === r;
    }
    function X(B) {
      return E(B) === f;
    }
    function ue(B) {
      return E(B) === p;
    }
    function me(B) {
      return E(B) === t;
    }
    function le(B) {
      return E(B) === o;
    }
    function M(B) {
      return E(B) === n;
    }
    function z(B) {
      return E(B) === l;
    }
    Pe.ContextConsumer = w, Pe.ContextProvider = g, Pe.Element = v, Pe.ForwardRef = _, Pe.Fragment = A, Pe.Lazy = O, Pe.Memo = q, Pe.Portal = I, Pe.Profiler = T, Pe.StrictMode = k, Pe.Suspense = N, Pe.isAsyncMode = Q, Pe.isConcurrentMode = K, Pe.isContextConsumer = se, Pe.isContextProvider = ne, Pe.isElement = we, Pe.isForwardRef = W, Pe.isFragment = be, Pe.isLazy = X, Pe.isMemo = ue, Pe.isPortal = me, Pe.isProfiler = le, Pe.isStrictMode = M, Pe.isSuspense = z, Pe.isValidElementType = b, Pe.typeOf = E;
  })()), Pe;
}
var jc;
function XR() {
  return jc || (jc = 1, process.env.NODE_ENV === "production" ? Ki.exports = QR() : Ki.exports = ZR()), Ki.exports;
}
var Fc;
function JR() {
  if (Fc) return kt;
  Fc = 1, Object.defineProperty(kt, "__esModule", {
    value: !0
  }), kt.test = kt.serialize = kt.default = void 0;
  var e = n(XR()), t = bu();
  function r(f) {
    if (typeof WeakMap != "function") return null;
    var c = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    return (r = function(h) {
      return h ? m : c;
    })(f);
  }
  function n(f, c) {
    if (f && f.__esModule)
      return f;
    if (f === null || typeof f != "object" && typeof f != "function")
      return { default: f };
    var m = r(c);
    if (m && m.has(f))
      return m.get(f);
    var h = {}, y = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var C in f)
      if (C !== "default" && Object.prototype.hasOwnProperty.call(f, C)) {
        var d = y ? Object.getOwnPropertyDescriptor(f, C) : null;
        d && (d.get || d.set) ? Object.defineProperty(h, C, d) : h[C] = f[C];
      }
    return h.default = f, m && m.set(f, h), h;
  }
  const o = (f, c = []) => (Array.isArray(f) ? f.forEach((m) => {
    o(m, c);
  }) : f != null && f !== !1 && c.push(f), c), a = (f) => {
    const c = f.type;
    if (typeof c == "string")
      return c;
    if (typeof c == "function")
      return c.displayName || c.name || "Unknown";
    if (e.isFragment(f))
      return "React.Fragment";
    if (e.isSuspense(f))
      return "React.Suspense";
    if (typeof c == "object" && c !== null) {
      if (e.isContextProvider(f))
        return "Context.Provider";
      if (e.isContextConsumer(f))
        return "Context.Consumer";
      if (e.isForwardRef(f)) {
        if (c.displayName)
          return c.displayName;
        const m = c.render.displayName || c.render.name || "";
        return m !== "" ? "ForwardRef(" + m + ")" : "ForwardRef";
      }
      if (e.isMemo(f)) {
        const m = c.displayName || c.type.displayName || c.type.name || "";
        return m !== "" ? "Memo(" + m + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  }, i = (f) => {
    const { props: c } = f;
    return Object.keys(c).filter((m) => m !== "children" && c[m] !== void 0).sort();
  }, s = (f, c, m, h, y, C) => ++h > c.maxDepth ? (0, t.printElementAsLeaf)(a(f), c) : (0, t.printElement)(
    a(f),
    (0, t.printProps)(
      i(f),
      f.props,
      c,
      m + c.indent,
      h,
      y,
      C
    ),
    (0, t.printChildren)(
      o(f.props.children),
      c,
      m + c.indent,
      h,
      y,
      C
    ),
    c,
    m
  );
  kt.serialize = s;
  const l = (f) => f != null && e.isElement(f);
  kt.test = l;
  var p = {
    serialize: s,
    test: l
  };
  return kt.default = p, kt;
}
var Dt = {}, Bc;
function eE() {
  if (Bc) return Dt;
  Bc = 1, Object.defineProperty(Dt, "__esModule", {
    value: !0
  }), Dt.test = Dt.serialize = Dt.default = void 0;
  var e = bu(), t = (function() {
    return typeof globalThis < "u" ? globalThis : typeof t < "u" ? t : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), r = t["jest-symbol-do-not-touch"] || t.Symbol;
  const n = typeof r == "function" && r.for ? r.for("react.test.json") : 245830487, o = (u) => {
    const { props: p } = u;
    return p ? Object.keys(p).filter((f) => p[f] !== void 0).sort() : [];
  }, a = (u, p, f, c, m, h) => ++c > p.maxDepth ? (0, e.printElementAsLeaf)(u.type, p) : (0, e.printElement)(
    u.type,
    u.props ? (0, e.printProps)(
      o(u),
      u.props,
      p,
      f + p.indent,
      c,
      m,
      h
    ) : "",
    u.children ? (0, e.printChildren)(
      u.children,
      p,
      f + p.indent,
      c,
      m,
      h
    ) : "",
    p,
    f
  );
  Dt.serialize = a;
  const i = (u) => u && u.$$typeof === n;
  Dt.test = i;
  var l = {
    serialize: a,
    test: i
  };
  return Dt.default = l, Dt;
}
var Uc;
function tE() {
  if (Uc) return gt;
  Uc = 1, Object.defineProperty(gt, "__esModule", {
    value: !0
  }), gt.default = gt.DEFAULT_OPTIONS = void 0, gt.format = ue, gt.plugins = void 0;
  var e = u(jh()), t = Vs(), r = u(
    HR()
  ), n = u(zR()), o = u(WR()), a = u(YR()), i = u(KR()), s = u(JR()), l = u(
    eE()
  );
  function u(M) {
    return M && M.__esModule ? M : { default: M };
  }
  const p = Object.prototype.toString, f = Date.prototype.toISOString, c = Error.prototype.toString, m = RegExp.prototype.toString, h = (M) => typeof M.constructor == "function" && M.constructor.name || "Object", y = (M) => typeof window < "u" && M === window, C = /^Symbol\((.*)\)(.*)$/, d = /\n/gi;
  class R extends Error {
    constructor(z, B) {
      super(z), this.stack = B, this.name = this.constructor.name;
    }
  }
  function b(M) {
    return M === "[object Array]" || M === "[object ArrayBuffer]" || M === "[object DataView]" || M === "[object Float32Array]" || M === "[object Float64Array]" || M === "[object Int8Array]" || M === "[object Int16Array]" || M === "[object Int32Array]" || M === "[object Uint8Array]" || M === "[object Uint8ClampedArray]" || M === "[object Uint16Array]" || M === "[object Uint32Array]";
  }
  function E(M) {
    return Object.is(M, -0) ? "-0" : String(M);
  }
  function w(M) {
    return `${M}n`;
  }
  function g(M, z) {
    return z ? "[Function " + (M.name || "anonymous") + "]" : "[Function]";
  }
  function v(M) {
    return String(M).replace(C, "Symbol($1)");
  }
  function _(M) {
    return "[" + c.call(M) + "]";
  }
  function A(M, z, B, J) {
    if (M === !0 || M === !1)
      return "" + M;
    if (M === void 0)
      return "undefined";
    if (M === null)
      return "null";
    const ee = typeof M;
    if (ee === "number")
      return E(M);
    if (ee === "bigint")
      return w(M);
    if (ee === "string")
      return J ? '"' + M.replace(/"|\\/g, "\\$&") + '"' : '"' + M + '"';
    if (ee === "function")
      return g(M, z);
    if (ee === "symbol")
      return v(M);
    const re = p.call(M);
    return re === "[object WeakMap]" ? "WeakMap {}" : re === "[object WeakSet]" ? "WeakSet {}" : re === "[object Function]" || re === "[object GeneratorFunction]" ? g(M, z) : re === "[object Symbol]" ? v(M) : re === "[object Date]" ? isNaN(+M) ? "Date { NaN }" : f.call(M) : re === "[object Error]" ? _(M) : re === "[object RegExp]" ? B ? m.call(M).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : m.call(M) : M instanceof Error ? _(M) : null;
  }
  function O(M, z, B, J, ee, re) {
    if (ee.indexOf(M) !== -1)
      return "[Circular]";
    ee = ee.slice(), ee.push(M);
    const ce = ++J > z.maxDepth, ae = z.min;
    if (z.callToJSON && !ce && M.toJSON && typeof M.toJSON == "function" && !re)
      return k(M.toJSON(), z, B, J, ee, !0);
    const ve = p.call(M);
    return ve === "[object Arguments]" ? ce ? "[Arguments]" : (ae ? "" : "Arguments ") + "[" + (0, t.printListItems)(
      M,
      z,
      B,
      J,
      ee,
      k
    ) + "]" : b(ve) ? ce ? "[" + M.constructor.name + "]" : (ae || !z.printBasicPrototype && M.constructor.name === "Array" ? "" : M.constructor.name + " ") + "[" + (0, t.printListItems)(
      M,
      z,
      B,
      J,
      ee,
      k
    ) + "]" : ve === "[object Map]" ? ce ? "[Map]" : "Map {" + (0, t.printIteratorEntries)(
      M.entries(),
      z,
      B,
      J,
      ee,
      k,
      " => "
    ) + "}" : ve === "[object Set]" ? ce ? "[Set]" : "Set {" + (0, t.printIteratorValues)(
      M.values(),
      z,
      B,
      J,
      ee,
      k
    ) + "}" : ce || y(M) ? "[" + h(M) + "]" : (ae || !z.printBasicPrototype && h(M) === "Object" ? "" : h(M) + " ") + "{" + (0, t.printObjectProperties)(
      M,
      z,
      B,
      J,
      ee,
      k
    ) + "}";
  }
  function q(M) {
    return M.serialize != null;
  }
  function I(M, z, B, J, ee, re) {
    let ce;
    try {
      ce = q(M) ? M.serialize(z, B, J, ee, re, k) : M.print(
        z,
        (ae) => k(ae, B, J, ee, re),
        (ae) => {
          const ve = J + B.indent;
          return ve + ae.replace(d, `
` + ve);
        },
        {
          edgeSpacing: B.spacingOuter,
          min: B.min,
          spacing: B.spacingInner
        },
        B.colors
      );
    } catch (ae) {
      throw new R(ae.message, ae.stack);
    }
    if (typeof ce != "string")
      throw new Error(
        `pretty-format: Plugin must return type "string" but instead returned "${typeof ce}".`
      );
    return ce;
  }
  function T(M, z) {
    for (let B = 0; B < M.length; B++)
      try {
        if (M[B].test(z))
          return M[B];
      } catch (J) {
        throw new R(J.message, J.stack);
      }
    return null;
  }
  function k(M, z, B, J, ee, re) {
    const ce = T(z.plugins, M);
    if (ce !== null)
      return I(ce, M, z, B, J, ee);
    const ae = A(
      M,
      z.printFunctionName,
      z.escapeRegex,
      z.escapeString
    );
    return ae !== null ? ae : O(
      M,
      z,
      B,
      J,
      ee,
      re
    );
  }
  const N = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
  }, Y = Object.keys(N), G = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: 1 / 0,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: N
  };
  gt.DEFAULT_OPTIONS = G;
  function Q(M) {
    if (Object.keys(M).forEach((z) => {
      if (!G.hasOwnProperty(z))
        throw new Error(`pretty-format: Unknown option "${z}".`);
    }), M.min && M.indent !== void 0 && M.indent !== 0)
      throw new Error(
        'pretty-format: Options "min" and "indent" cannot be used together.'
      );
    if (M.theme !== void 0) {
      if (M.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof M.theme != "object")
        throw new Error(
          `pretty-format: Option "theme" must be of type "object" but instead received "${typeof M.theme}".`
        );
    }
  }
  const K = (M) => Y.reduce((z, B) => {
    const J = M.theme && M.theme[B] !== void 0 ? M.theme[B] : N[B], ee = J && e.default[J];
    if (ee && typeof ee.close == "string" && typeof ee.open == "string")
      z[B] = ee;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${B}" whose value "${J}" is undefined in ansi-styles.`
      );
    return z;
  }, /* @__PURE__ */ Object.create(null)), se = () => Y.reduce((M, z) => (M[z] = {
    close: "",
    open: ""
  }, M), /* @__PURE__ */ Object.create(null)), ne = (M) => M && M.printFunctionName !== void 0 ? M.printFunctionName : G.printFunctionName, we = (M) => M && M.escapeRegex !== void 0 ? M.escapeRegex : G.escapeRegex, W = (M) => M && M.escapeString !== void 0 ? M.escapeString : G.escapeString, be = (M) => {
    var z;
    return {
      callToJSON: M && M.callToJSON !== void 0 ? M.callToJSON : G.callToJSON,
      colors: M && M.highlight ? K(M) : se(),
      compareKeys: M && typeof M.compareKeys == "function" ? M.compareKeys : G.compareKeys,
      escapeRegex: we(M),
      escapeString: W(M),
      indent: M && M.min ? "" : X(
        M && M.indent !== void 0 ? M.indent : G.indent
      ),
      maxDepth: M && M.maxDepth !== void 0 ? M.maxDepth : G.maxDepth,
      min: M && M.min !== void 0 ? M.min : G.min,
      plugins: M && M.plugins !== void 0 ? M.plugins : G.plugins,
      printBasicPrototype: (z = M?.printBasicPrototype) !== null && z !== void 0 ? z : !0,
      printFunctionName: ne(M),
      spacingInner: M && M.min ? " " : `
`,
      spacingOuter: M && M.min ? "" : `
`
    };
  };
  function X(M) {
    return new Array(M + 1).join(" ");
  }
  function ue(M, z) {
    if (z && (Q(z), z.plugins)) {
      const J = T(z.plugins, M);
      if (J !== null)
        return I(J, M, be(z), "", 0, []);
    }
    const B = A(
      M,
      ne(z),
      we(z),
      W(z)
    );
    return B !== null ? B : O(M, be(z), "", 0, []);
  }
  const me = {
    AsymmetricMatcher: r.default,
    ConvertAnsi: n.default,
    DOMCollection: o.default,
    DOMElement: a.default,
    Immutable: i.default,
    ReactElement: s.default,
    ReactTestComponent: l.default
  };
  gt.plugins = me;
  var le = ue;
  return gt.default = le, gt;
}
var Fh = tE(), rE = Object.prototype.toString;
function nE(e) {
  return typeof e == "function" || rE.call(e) === "[object Function]";
}
function oE(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var aE = Math.pow(2, 53) - 1;
function iE(e) {
  var t = oE(e);
  return Math.min(Math.max(t, 0), aE);
}
function mt(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var o = iE(n.length), a = nE(r) ? Object(new r(o)) : new Array(o), i = 0, s; i < o; )
    s = n[i], a[i] = s, i += 1;
  return a.length = o, a;
}
function Ri(e) {
  "@babel/helpers - typeof";
  return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ri(e);
}
function sE(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lE(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Bh(n.key), n);
  }
}
function uE(e, t, r) {
  return t && lE(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cE(e, t, r) {
  return t = Bh(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Bh(e) {
  var t = dE(e, "string");
  return Ri(t) === "symbol" ? t : String(t);
}
function dE(e, t) {
  if (Ri(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ri(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fE = /* @__PURE__ */ (function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    sE(this, e), cE(this, "items", void 0), this.items = t;
  }
  return uE(e, [{
    key: "add",
    value: function(r) {
      return this.has(r) === !1 && this.items.push(r), this;
    }
  }, {
    key: "clear",
    value: function() {
      this.items = [];
    }
  }, {
    key: "delete",
    value: function(r) {
      var n = this.items.length;
      return this.items = this.items.filter(function(o) {
        return o !== r;
      }), n !== this.items.length;
    }
  }, {
    key: "forEach",
    value: function(r) {
      var n = this;
      this.items.forEach(function(o) {
        r(o, o, n);
      });
    }
  }, {
    key: "has",
    value: function(r) {
      return this.items.indexOf(r) !== -1;
    }
  }, {
    key: "size",
    get: function() {
      return this.items.length;
    }
  }]), e;
})();
const pE = typeof Set > "u" ? Set : fE;
function Qe(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var mE = {
  article: "article",
  aside: "complementary",
  button: "button",
  datalist: "listbox",
  dd: "definition",
  details: "group",
  dialog: "dialog",
  dt: "term",
  fieldset: "group",
  figure: "figure",
  // WARNING: Only with an accessible name
  form: "form",
  footer: "contentinfo",
  h1: "heading",
  h2: "heading",
  h3: "heading",
  h4: "heading",
  h5: "heading",
  h6: "heading",
  header: "banner",
  hr: "separator",
  html: "document",
  legend: "legend",
  li: "listitem",
  math: "math",
  main: "main",
  menu: "list",
  nav: "navigation",
  ol: "list",
  optgroup: "group",
  // WARNING: Only in certain context
  option: "option",
  output: "status",
  progress: "progressbar",
  // WARNING: Only with an accessible name
  section: "region",
  summary: "button",
  table: "table",
  tbody: "rowgroup",
  textarea: "textbox",
  tfoot: "rowgroup",
  // WARNING: Only in certain context
  td: "cell",
  th: "columnheader",
  thead: "rowgroup",
  tr: "row",
  ul: "list"
}, hE = {
  caption: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  code: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  deletion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  emphasis: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  generic: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby", "aria-roledescription"]),
  insertion: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  paragraph: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  presentation: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  strong: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  subscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"]),
  superscript: /* @__PURE__ */ new Set(["aria-label", "aria-labelledby"])
};
function bE(e, t) {
  return [
    "aria-atomic",
    "aria-busy",
    "aria-controls",
    "aria-current",
    "aria-describedby",
    "aria-details",
    // "disabled",
    "aria-dropeffect",
    // "errormessage",
    "aria-flowto",
    "aria-grabbed",
    // "haspopup",
    "aria-hidden",
    // "invalid",
    "aria-keyshortcuts",
    "aria-label",
    "aria-labelledby",
    "aria-live",
    "aria-owns",
    "aria-relevant",
    "aria-roledescription"
  ].some(function(r) {
    var n;
    return e.hasAttribute(r) && !((n = hE[t]) !== null && n !== void 0 && n.has(r));
  });
}
function Uh(e, t) {
  return bE(e, t);
}
function vE(e) {
  var t = gE(e);
  if (t === null || t === "presentation") {
    var r = yE(e);
    if (t !== "presentation" || Uh(e, r || ""))
      return r;
  }
  return t;
}
function yE(e) {
  var t = mE[Qe(e)];
  if (t !== void 0)
    return t;
  switch (Qe(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !Uh(e, "img") ? "presentation" : "img";
    case "input": {
      var r = e, n = r.type;
      switch (n) {
        case "button":
        case "image":
        case "reset":
        case "submit":
          return "button";
        case "checkbox":
        case "radio":
          return n;
        case "range":
          return "slider";
        case "email":
        case "tel":
        case "text":
        case "url":
          return e.hasAttribute("list") ? "combobox" : "textbox";
        case "search":
          return e.hasAttribute("list") ? "combobox" : "searchbox";
        case "number":
          return "spinbutton";
        default:
          return null;
      }
    }
    case "select":
      return e.hasAttribute("multiple") || e.size > 1 ? "listbox" : "combobox";
  }
  return null;
}
function gE(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
function Me(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function $h(e) {
  return Me(e) && Qe(e) === "caption";
}
function ps(e) {
  return Me(e) && Qe(e) === "input";
}
function RE(e) {
  return Me(e) && Qe(e) === "optgroup";
}
function EE(e) {
  return Me(e) && Qe(e) === "select";
}
function CE(e) {
  return Me(e) && Qe(e) === "table";
}
function _E(e) {
  return Me(e) && Qe(e) === "textarea";
}
function wE(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function TE(e) {
  return Me(e) && Qe(e) === "fieldset";
}
function SE(e) {
  return Me(e) && Qe(e) === "legend";
}
function PE(e) {
  return Me(e) && Qe(e) === "slot";
}
function xE(e) {
  return Me(e) && e.ownerSVGElement !== void 0;
}
function qE(e) {
  return Me(e) && Qe(e) === "svg";
}
function ME(e) {
  return xE(e) && Qe(e) === "title";
}
function Ts(e, t) {
  if (Me(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(" "), n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r.map(function(o) {
      return n.getElementById(o);
    }).filter(
      function(o) {
        return o !== null;
      }
      // TODO: why does this not narrow?
    );
  }
  return [];
}
function jt(e, t) {
  return Me(e) ? t.indexOf(vE(e)) !== -1 : !1;
}
function OE(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function AE(e, t) {
  if (!Me(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function IE(e) {
  return jt(e, ["button", "combobox", "listbox", "textbox"]) || Hh(e, "range");
}
function Hh(e, t) {
  if (!Me(e))
    return !1;
  switch (t) {
    case "range":
      return jt(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function $c(e, t) {
  var r = mt(e.querySelectorAll(t));
  return Ts(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, mt(n.querySelectorAll(t)));
  }), r;
}
function kE(e) {
  return EE(e) ? e.selectedOptions || $c(e, "[selected]") : $c(e, '[aria-selected="true"]');
}
function DE(e) {
  return jt(e, ["none", "presentation"]);
}
function NE(e) {
  return $h(e);
}
function LE(e) {
  return jt(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function jE(e) {
  return !1;
}
function FE(e) {
  return ps(e) || _E(e) ? e.value : e.textContent || "";
}
function Hc(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Vh(e) {
  var t = Qe(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function zh(e) {
  if (Vh(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && Me(r)) {
      var n = zh(r);
      n !== null && (t = n);
    }
  }), t;
}
function BE(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : zh(e);
}
function UE(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return mt(t);
  if (!Vh(e))
    return null;
  var r = e.ownerDocument;
  return mt(r.querySelectorAll("label")).filter(function(n) {
    return BE(n) === e;
  });
}
function $E(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? mt(e.childNodes) : t;
}
function Wh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new pE(), n = wE(e), o = t.compute, a = o === void 0 ? "name" : o, i = t.computedStyleSupportsPseudoElements, s = i === void 0 ? t.getComputedStyle !== void 0 : i, l = t.getComputedStyle, u = l === void 0 ? n.getComputedStyle.bind(n) : l, p = t.hidden, f = p === void 0 ? !1 : p;
  function c(d, R) {
    var b = "";
    if (Me(d) && s) {
      var E = u(d, "::before"), w = Hc(E);
      b = "".concat(w, " ").concat(b);
    }
    var g = PE(d) ? $E(d) : mt(d.childNodes).concat(Ts(d, "aria-owns"));
    if (g.forEach(function(A) {
      var O = C(A, {
        isEmbeddedInLabel: R.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), q = Me(A) ? u(A).getPropertyValue("display") : "inline", I = q !== "inline" ? " " : "";
      b += "".concat(I).concat(O).concat(I);
    }), Me(d) && s) {
      var v = u(d, "::after"), _ = Hc(v);
      b = "".concat(b, " ").concat(_);
    }
    return b.trim();
  }
  function m(d, R) {
    var b = d.getAttributeNode(R);
    return b !== null && !r.has(b) && b.value.trim() !== "" ? (r.add(b), b.value) : null;
  }
  function h(d) {
    return Me(d) ? m(d, "title") : null;
  }
  function y(d) {
    if (!Me(d))
      return null;
    if (TE(d)) {
      r.add(d);
      for (var R = mt(d.childNodes), b = 0; b < R.length; b += 1) {
        var E = R[b];
        if (SE(E))
          return C(E, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (CE(d)) {
      r.add(d);
      for (var w = mt(d.childNodes), g = 0; g < w.length; g += 1) {
        var v = w[g];
        if ($h(v))
          return C(v, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (qE(d)) {
      r.add(d);
      for (var _ = mt(d.childNodes), A = 0; A < _.length; A += 1) {
        var O = _[A];
        if (ME(O))
          return O.textContent;
      }
      return null;
    } else if (Qe(d) === "img" || Qe(d) === "area") {
      var q = m(d, "alt");
      if (q !== null)
        return q;
    } else if (RE(d)) {
      var I = m(d, "label");
      if (I !== null)
        return I;
    }
    if (ps(d) && (d.type === "button" || d.type === "submit" || d.type === "reset")) {
      var T = m(d, "value");
      if (T !== null)
        return T;
      if (d.type === "submit")
        return "Submit";
      if (d.type === "reset")
        return "Reset";
    }
    var k = UE(d);
    if (k !== null && k.length !== 0)
      return r.add(d), mt(k).map(function(Q) {
        return C(Q, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(Q) {
        return Q.length > 0;
      }).join(" ");
    if (ps(d) && d.type === "image") {
      var N = m(d, "alt");
      if (N !== null)
        return N;
      var Y = m(d, "title");
      return Y !== null ? Y : "Submit Query";
    }
    if (jt(d, ["button"])) {
      var G = c(d, {
        isEmbeddedInLabel: !1
      });
      if (G !== "")
        return G;
    }
    return null;
  }
  function C(d, R) {
    if (r.has(d))
      return "";
    if (!f && AE(d, u) && !R.isReferenced)
      return r.add(d), "";
    var b = Me(d) ? d.getAttributeNode("aria-labelledby") : null, E = b !== null && !r.has(b) ? Ts(d, "aria-labelledby") : [];
    if (a === "name" && !R.isReferenced && E.length > 0)
      return r.add(b), E.map(function(q) {
        return C(q, {
          isEmbeddedInLabel: R.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var w = R.recursion && IE(d) && a === "name";
    if (!w) {
      var g = (Me(d) && d.getAttribute("aria-label") || "").trim();
      if (g !== "" && a === "name")
        return r.add(d), g;
      if (!DE(d)) {
        var v = y(d);
        if (v !== null)
          return r.add(d), v;
      }
    }
    if (jt(d, ["menu"]))
      return r.add(d), "";
    if (w || R.isEmbeddedInLabel || R.isReferenced) {
      if (jt(d, ["combobox", "listbox"])) {
        r.add(d);
        var _ = kE(d);
        return _.length === 0 ? ps(d) ? d.value : "" : mt(_).map(function(q) {
          return C(q, {
            isEmbeddedInLabel: R.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (Hh(d, "range"))
        return r.add(d), d.hasAttribute("aria-valuetext") ? d.getAttribute("aria-valuetext") : d.hasAttribute("aria-valuenow") ? d.getAttribute("aria-valuenow") : d.getAttribute("value") || "";
      if (jt(d, ["textbox"]))
        return r.add(d), FE(d);
    }
    if (LE(d) || Me(d) && R.isReferenced || NE(d) || jE()) {
      var A = c(d, {
        isEmbeddedInLabel: R.isEmbeddedInLabel
      });
      if (A !== "")
        return r.add(d), A;
    }
    if (d.nodeType === d.TEXT_NODE)
      return r.add(d), d.textContent || "";
    if (R.recursion)
      return r.add(d), c(d, {
        isEmbeddedInLabel: R.isEmbeddedInLabel
      });
    var O = h(d);
    return O !== null ? (r.add(d), O) : (r.add(d), "");
  }
  return OE(C(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: a === "description",
    recursion: !1
  }));
}
function Ei(e) {
  "@babel/helpers - typeof";
  return Ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ei(e);
}
function Vc(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vc(Object(r), !0).forEach(function(n) {
      HE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vc(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HE(e, t, r) {
  return t = VE(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VE(e) {
  var t = zE(e, "string");
  return Ei(t) === "symbol" ? t : String(t);
}
function zE(e, t) {
  if (Ei(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Ei(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Gh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Ts(e, "aria-describedby").map(function(o) {
    return Wh(o, zc(zc({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function WE(e) {
  return jt(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function vu(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return WE(e) ? "" : Wh(e, t);
}
var rt = {}, vn = {}, Qi = {}, yn = {}, Wc;
function GE() {
  if (Wc) return yn;
  Wc = 1, Object.defineProperty(yn, "__esModule", {
    value: !0
  }), yn.default = void 0;
  function e() {
    var r = this, n = 0, o = {
      "@@iterator": function() {
        return o;
      },
      next: function() {
        if (n < r.length) {
          var i = r[n];
          return n = n + 1, {
            done: !1,
            value: i
          };
        } else
          return {
            done: !0
          };
      }
    };
    return o;
  }
  var t = e;
  return yn.default = t, yn;
}
var Gc;
function Di() {
  if (Gc) return Qi;
  Gc = 1, Object.defineProperty(Qi, "__esModule", {
    value: !0
  }), Qi.default = n;
  var e = t(GE());
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function r(o) {
    "@babel/helpers - typeof";
    return r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(a) {
      return typeof a;
    } : function(a) {
      return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
    }, r(o);
  }
  function n(o, a) {
    return typeof Symbol == "function" && r(Symbol.iterator) === "symbol" && Object.defineProperty(o, Symbol.iterator, {
      value: e.default.bind(a)
    }), o;
  }
  return Qi;
}
var Yc;
function YE() {
  if (Yc) return vn;
  Yc = 1, Object.defineProperty(vn, "__esModule", {
    value: !0
  }), vn.default = void 0;
  var e = t(Di());
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c, m) {
    return a(c) || o(c, m) || s(c, m) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(c, m) {
    var h = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (h != null) {
      var y = [], C = !0, d = !1, R, b;
      try {
        for (h = h.call(c); !(C = (R = h.next()).done) && (y.push(R.value), !(m && y.length === m)); C = !0)
          ;
      } catch (E) {
        d = !0, b = E;
      } finally {
        try {
          !C && h.return != null && h.return();
        } finally {
          if (d) throw b;
        }
      }
      return y;
    }
  }
  function a(c) {
    if (Array.isArray(c)) return c;
  }
  function i(c, m) {
    var h = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (!h) {
      if (Array.isArray(c) || (h = s(c)) || m) {
        h && (c = h);
        var y = 0, C = function() {
        };
        return { s: C, n: function() {
          return y >= c.length ? { done: !0 } : { done: !1, value: c[y++] };
        }, e: function(w) {
          throw w;
        }, f: C };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var d = !0, R = !1, b;
    return { s: function() {
      h = h.call(c);
    }, n: function() {
      var w = h.next();
      return d = w.done, w;
    }, e: function(w) {
      R = !0, b = w;
    }, f: function() {
      try {
        !d && h.return != null && h.return();
      } finally {
        if (R) throw b;
      }
    } };
  }
  function s(c, m) {
    if (c) {
      if (typeof c == "string") return l(c, m);
      var h = Object.prototype.toString.call(c).slice(8, -1);
      if (h === "Object" && c.constructor && (h = c.constructor.name), h === "Map" || h === "Set") return Array.from(c);
      if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)) return l(c, m);
    }
  }
  function l(c, m) {
    (m == null || m > c.length) && (m = c.length);
    for (var h = 0, y = new Array(m); h < m; h++)
      y[h] = c[h];
    return y;
  }
  var u = [["aria-activedescendant", {
    type: "id"
  }], ["aria-atomic", {
    type: "boolean"
  }], ["aria-autocomplete", {
    type: "token",
    values: ["inline", "list", "both", "none"]
  }], ["aria-braillelabel", {
    type: "string"
  }], ["aria-brailleroledescription", {
    type: "string"
  }], ["aria-busy", {
    type: "boolean"
  }], ["aria-checked", {
    type: "tristate"
  }], ["aria-colcount", {
    type: "integer"
  }], ["aria-colindex", {
    type: "integer"
  }], ["aria-colspan", {
    type: "integer"
  }], ["aria-controls", {
    type: "idlist"
  }], ["aria-current", {
    type: "token",
    values: ["page", "step", "location", "date", "time", !0, !1]
  }], ["aria-describedby", {
    type: "idlist"
  }], ["aria-description", {
    type: "string"
  }], ["aria-details", {
    type: "id"
  }], ["aria-disabled", {
    type: "boolean"
  }], ["aria-dropeffect", {
    type: "tokenlist",
    values: ["copy", "execute", "link", "move", "none", "popup"]
  }], ["aria-errormessage", {
    type: "id"
  }], ["aria-expanded", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-flowto", {
    type: "idlist"
  }], ["aria-grabbed", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-haspopup", {
    type: "token",
    values: [!1, !0, "menu", "listbox", "tree", "grid", "dialog"]
  }], ["aria-hidden", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-invalid", {
    type: "token",
    values: ["grammar", !1, "spelling", !0]
  }], ["aria-keyshortcuts", {
    type: "string"
  }], ["aria-label", {
    type: "string"
  }], ["aria-labelledby", {
    type: "idlist"
  }], ["aria-level", {
    type: "integer"
  }], ["aria-live", {
    type: "token",
    values: ["assertive", "off", "polite"]
  }], ["aria-modal", {
    type: "boolean"
  }], ["aria-multiline", {
    type: "boolean"
  }], ["aria-multiselectable", {
    type: "boolean"
  }], ["aria-orientation", {
    type: "token",
    values: ["vertical", "undefined", "horizontal"]
  }], ["aria-owns", {
    type: "idlist"
  }], ["aria-placeholder", {
    type: "string"
  }], ["aria-posinset", {
    type: "integer"
  }], ["aria-pressed", {
    type: "tristate"
  }], ["aria-readonly", {
    type: "boolean"
  }], ["aria-relevant", {
    type: "tokenlist",
    values: ["additions", "all", "removals", "text"]
  }], ["aria-required", {
    type: "boolean"
  }], ["aria-roledescription", {
    type: "string"
  }], ["aria-rowcount", {
    type: "integer"
  }], ["aria-rowindex", {
    type: "integer"
  }], ["aria-rowspan", {
    type: "integer"
  }], ["aria-selected", {
    type: "boolean",
    allowundefined: !0
  }], ["aria-setsize", {
    type: "integer"
  }], ["aria-sort", {
    type: "token",
    values: ["ascending", "descending", "none", "other"]
  }], ["aria-valuemax", {
    type: "number"
  }], ["aria-valuemin", {
    type: "number"
  }], ["aria-valuenow", {
    type: "number"
  }], ["aria-valuetext", {
    type: "string"
  }]], p = {
    entries: function() {
      return u;
    },
    forEach: function(m) {
      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, y = i(u), C;
      try {
        for (y.s(); !(C = y.n()).done; ) {
          var d = r(C.value, 2), R = d[0], b = d[1];
          m.call(h, b, R, u);
        }
      } catch (E) {
        y.e(E);
      } finally {
        y.f();
      }
    },
    get: function(m) {
      var h = u.find(function(y) {
        return y[0] === m;
      });
      return h && h[1];
    },
    has: function(m) {
      return !!p.get(m);
    },
    keys: function() {
      return u.map(function(m) {
        var h = r(m, 1), y = h[0];
        return y;
      });
    },
    values: function() {
      return u.map(function(m) {
        var h = r(m, 2), y = h[1];
        return y;
      });
    }
  }, f = (0, e.default)(p, p.entries());
  return vn.default = f, vn;
}
var gn = {}, Kc;
function KE() {
  if (Kc) return gn;
  Kc = 1, Object.defineProperty(gn, "__esModule", {
    value: !0
  }), gn.default = void 0;
  var e = t(Di());
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c, m) {
    return a(c) || o(c, m) || s(c, m) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(c, m) {
    var h = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (h != null) {
      var y = [], C = !0, d = !1, R, b;
      try {
        for (h = h.call(c); !(C = (R = h.next()).done) && (y.push(R.value), !(m && y.length === m)); C = !0)
          ;
      } catch (E) {
        d = !0, b = E;
      } finally {
        try {
          !C && h.return != null && h.return();
        } finally {
          if (d) throw b;
        }
      }
      return y;
    }
  }
  function a(c) {
    if (Array.isArray(c)) return c;
  }
  function i(c, m) {
    var h = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (!h) {
      if (Array.isArray(c) || (h = s(c)) || m) {
        h && (c = h);
        var y = 0, C = function() {
        };
        return { s: C, n: function() {
          return y >= c.length ? { done: !0 } : { done: !1, value: c[y++] };
        }, e: function(w) {
          throw w;
        }, f: C };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var d = !0, R = !1, b;
    return { s: function() {
      h = h.call(c);
    }, n: function() {
      var w = h.next();
      return d = w.done, w;
    }, e: function(w) {
      R = !0, b = w;
    }, f: function() {
      try {
        !d && h.return != null && h.return();
      } finally {
        if (R) throw b;
      }
    } };
  }
  function s(c, m) {
    if (c) {
      if (typeof c == "string") return l(c, m);
      var h = Object.prototype.toString.call(c).slice(8, -1);
      if (h === "Object" && c.constructor && (h = c.constructor.name), h === "Map" || h === "Set") return Array.from(c);
      if (h === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)) return l(c, m);
    }
  }
  function l(c, m) {
    (m == null || m > c.length) && (m = c.length);
    for (var h = 0, y = new Array(m); h < m; h++)
      y[h] = c[h];
    return y;
  }
  var u = [["a", {
    reserved: !1
  }], ["abbr", {
    reserved: !1
  }], ["acronym", {
    reserved: !1
  }], ["address", {
    reserved: !1
  }], ["applet", {
    reserved: !1
  }], ["area", {
    reserved: !1
  }], ["article", {
    reserved: !1
  }], ["aside", {
    reserved: !1
  }], ["audio", {
    reserved: !1
  }], ["b", {
    reserved: !1
  }], ["base", {
    reserved: !0
  }], ["bdi", {
    reserved: !1
  }], ["bdo", {
    reserved: !1
  }], ["big", {
    reserved: !1
  }], ["blink", {
    reserved: !1
  }], ["blockquote", {
    reserved: !1
  }], ["body", {
    reserved: !1
  }], ["br", {
    reserved: !1
  }], ["button", {
    reserved: !1
  }], ["canvas", {
    reserved: !1
  }], ["caption", {
    reserved: !1
  }], ["center", {
    reserved: !1
  }], ["cite", {
    reserved: !1
  }], ["code", {
    reserved: !1
  }], ["col", {
    reserved: !0
  }], ["colgroup", {
    reserved: !0
  }], ["content", {
    reserved: !1
  }], ["data", {
    reserved: !1
  }], ["datalist", {
    reserved: !1
  }], ["dd", {
    reserved: !1
  }], ["del", {
    reserved: !1
  }], ["details", {
    reserved: !1
  }], ["dfn", {
    reserved: !1
  }], ["dialog", {
    reserved: !1
  }], ["dir", {
    reserved: !1
  }], ["div", {
    reserved: !1
  }], ["dl", {
    reserved: !1
  }], ["dt", {
    reserved: !1
  }], ["em", {
    reserved: !1
  }], ["embed", {
    reserved: !1
  }], ["fieldset", {
    reserved: !1
  }], ["figcaption", {
    reserved: !1
  }], ["figure", {
    reserved: !1
  }], ["font", {
    reserved: !1
  }], ["footer", {
    reserved: !1
  }], ["form", {
    reserved: !1
  }], ["frame", {
    reserved: !1
  }], ["frameset", {
    reserved: !1
  }], ["h1", {
    reserved: !1
  }], ["h2", {
    reserved: !1
  }], ["h3", {
    reserved: !1
  }], ["h4", {
    reserved: !1
  }], ["h5", {
    reserved: !1
  }], ["h6", {
    reserved: !1
  }], ["head", {
    reserved: !0
  }], ["header", {
    reserved: !1
  }], ["hgroup", {
    reserved: !1
  }], ["hr", {
    reserved: !1
  }], ["html", {
    reserved: !0
  }], ["i", {
    reserved: !1
  }], ["iframe", {
    reserved: !1
  }], ["img", {
    reserved: !1
  }], ["input", {
    reserved: !1
  }], ["ins", {
    reserved: !1
  }], ["kbd", {
    reserved: !1
  }], ["keygen", {
    reserved: !1
  }], ["label", {
    reserved: !1
  }], ["legend", {
    reserved: !1
  }], ["li", {
    reserved: !1
  }], ["link", {
    reserved: !0
  }], ["main", {
    reserved: !1
  }], ["map", {
    reserved: !1
  }], ["mark", {
    reserved: !1
  }], ["marquee", {
    reserved: !1
  }], ["menu", {
    reserved: !1
  }], ["menuitem", {
    reserved: !1
  }], ["meta", {
    reserved: !0
  }], ["meter", {
    reserved: !1
  }], ["nav", {
    reserved: !1
  }], ["noembed", {
    reserved: !0
  }], ["noscript", {
    reserved: !0
  }], ["object", {
    reserved: !1
  }], ["ol", {
    reserved: !1
  }], ["optgroup", {
    reserved: !1
  }], ["option", {
    reserved: !1
  }], ["output", {
    reserved: !1
  }], ["p", {
    reserved: !1
  }], ["param", {
    reserved: !0
  }], ["picture", {
    reserved: !0
  }], ["pre", {
    reserved: !1
  }], ["progress", {
    reserved: !1
  }], ["q", {
    reserved: !1
  }], ["rp", {
    reserved: !1
  }], ["rt", {
    reserved: !1
  }], ["rtc", {
    reserved: !1
  }], ["ruby", {
    reserved: !1
  }], ["s", {
    reserved: !1
  }], ["samp", {
    reserved: !1
  }], ["script", {
    reserved: !0
  }], ["section", {
    reserved: !1
  }], ["select", {
    reserved: !1
  }], ["small", {
    reserved: !1
  }], ["source", {
    reserved: !0
  }], ["spacer", {
    reserved: !1
  }], ["span", {
    reserved: !1
  }], ["strike", {
    reserved: !1
  }], ["strong", {
    reserved: !1
  }], ["style", {
    reserved: !0
  }], ["sub", {
    reserved: !1
  }], ["summary", {
    reserved: !1
  }], ["sup", {
    reserved: !1
  }], ["table", {
    reserved: !1
  }], ["tbody", {
    reserved: !1
  }], ["td", {
    reserved: !1
  }], ["textarea", {
    reserved: !1
  }], ["tfoot", {
    reserved: !1
  }], ["th", {
    reserved: !1
  }], ["thead", {
    reserved: !1
  }], ["time", {
    reserved: !1
  }], ["title", {
    reserved: !0
  }], ["tr", {
    reserved: !1
  }], ["track", {
    reserved: !0
  }], ["tt", {
    reserved: !1
  }], ["u", {
    reserved: !1
  }], ["ul", {
    reserved: !1
  }], ["var", {
    reserved: !1
  }], ["video", {
    reserved: !1
  }], ["wbr", {
    reserved: !1
  }], ["xmp", {
    reserved: !1
  }]], p = {
    entries: function() {
      return u;
    },
    forEach: function(m) {
      var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, y = i(u), C;
      try {
        for (y.s(); !(C = y.n()).done; ) {
          var d = r(C.value, 2), R = d[0], b = d[1];
          m.call(h, b, R, u);
        }
      } catch (E) {
        y.e(E);
      } finally {
        y.f();
      }
    },
    get: function(m) {
      var h = u.find(function(y) {
        return y[0] === m;
      });
      return h && h[1];
    },
    has: function(m) {
      return !!p.get(m);
    },
    keys: function() {
      return u.map(function(m) {
        var h = r(m, 1), y = h[0];
        return y;
      });
    },
    values: function() {
      return u.map(function(m) {
        var h = r(m, 2), y = h[1];
        return y;
      });
    }
  }, f = (0, e.default)(p, p.entries());
  return gn.default = f, gn;
}
var Rn = {}, En = {}, Cn = {}, Qc;
function QE() {
  if (Qc) return Cn;
  Qc = 1, Object.defineProperty(Cn, "__esModule", {
    value: !0
  }), Cn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, t = e;
  return Cn.default = t, Cn;
}
var _n = {}, Zc;
function ZE() {
  if (Zc) return _n;
  Zc = 1, Object.defineProperty(_n, "__esModule", {
    value: !0
  }), _n.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, t = e;
  return _n.default = t, _n;
}
var wn = {}, Xc;
function XE() {
  if (Xc) return wn;
  Xc = 1, Object.defineProperty(wn, "__esModule", {
    value: !0
  }), wn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "input"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget"]]
  }, t = e;
  return wn.default = t, wn;
}
var Tn = {}, Jc;
function JE() {
  if (Jc) return Tn;
  Jc = 1, Object.defineProperty(Tn, "__esModule", {
    value: !0
  }), Tn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Tn.default = t, Tn;
}
var Sn = {}, ed;
function e0() {
  if (ed) return Sn;
  ed = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuemax": null,
      "aria-valuemin": null,
      "aria-valuenow": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Sn.default = t, Sn;
}
var Pn = {}, td;
function t0() {
  if (td) return Pn;
  td = 1, Object.defineProperty(Pn, "__esModule", {
    value: !0
  }), Pn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      "aria-atomic": null,
      "aria-busy": null,
      "aria-controls": null,
      "aria-current": null,
      "aria-describedby": null,
      "aria-details": null,
      "aria-dropeffect": null,
      "aria-flowto": null,
      "aria-grabbed": null,
      "aria-hidden": null,
      "aria-keyshortcuts": null,
      "aria-label": null,
      "aria-labelledby": null,
      "aria-live": null,
      "aria-owns": null,
      "aria-relevant": null,
      "aria-roledescription": null
    },
    relatedConcepts: [{
      concept: {
        name: "role"
      },
      module: "XHTML"
    }, {
      concept: {
        name: "type"
      },
      module: "Dublin Core"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  }, t = e;
  return Pn.default = t, Pn;
}
var xn = {}, rd;
function r0() {
  if (rd) return xn;
  rd = 1, Object.defineProperty(xn, "__esModule", {
    value: !0
  }), xn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "frontmatter"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "DTB"
    }, {
      concept: {
        name: "level"
      },
      module: "SMIL"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return xn.default = t, xn;
}
var qn = {}, nd;
function n0() {
  if (nd) return qn;
  nd = 1, Object.defineProperty(qn, "__esModule", {
    value: !0
  }), qn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return qn.default = t, qn;
}
var Mn = {}, od;
function o0() {
  if (od) return Mn;
  od = 1, Object.defineProperty(Mn, "__esModule", {
    value: !0
  }), Mn.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "group"]]
  }, t = e;
  return Mn.default = t, Mn;
}
var On = {}, ad;
function a0() {
  if (ad) return On;
  ad = 1, Object.defineProperty(On, "__esModule", {
    value: !0
  }), On.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, t = e;
  return On.default = t, On;
}
var An = {}, id;
function i0() {
  if (id) return An;
  id = 1, Object.defineProperty(An, "__esModule", {
    value: !0
  }), An.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, t = e;
  return An.default = t, An;
}
var In = {}, sd;
function s0() {
  if (sd) return In;
  sd = 1, Object.defineProperty(In, "__esModule", {
    value: !0
  }), In.default = void 0;
  var e = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-modal": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype"]]
  }, t = e;
  return In.default = t, In;
}
var ld;
function l0() {
  if (ld) return En;
  ld = 1, Object.defineProperty(En, "__esModule", {
    value: !0
  }), En.default = void 0;
  var e = c(QE()), t = c(ZE()), r = c(XE()), n = c(JE()), o = c(e0()), a = c(t0()), i = c(r0()), s = c(n0()), l = c(o0()), u = c(a0()), p = c(i0()), f = c(s0());
  function c(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var m = [["command", e.default], ["composite", t.default], ["input", r.default], ["landmark", n.default], ["range", o.default], ["roletype", a.default], ["section", i.default], ["sectionhead", s.default], ["select", l.default], ["structure", u.default], ["widget", p.default], ["window", f.default]], h = m;
  return En.default = h, En;
}
var kn = {}, Dn = {}, ud;
function u0() {
  if (ud) return Dn;
  ud = 1, Object.defineProperty(Dn, "__esModule", {
    value: !0
  }), Dn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "assertive"
    },
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Dn.default = t, Dn;
}
var Nn = {}, cd;
function c0() {
  if (cd) return Nn;
  cd = 1, Object.defineProperty(Nn, "__esModule", {
    value: !0
  }), Nn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "alert"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "alert"], ["roletype", "window", "dialog"]]
  }, t = e;
  return Nn.default = t, Nn;
}
var Ln = {}, dd;
function d0() {
  if (dd) return Ln;
  dd = 1, Object.defineProperty(Ln, "__esModule", {
    value: !0
  }), Ln.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Ln.default = t, Ln;
}
var jn = {}, fd;
function f0() {
  if (fd) return jn;
  fd = 1, Object.defineProperty(jn, "__esModule", {
    value: !0
  }), jn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "article"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  }, t = e;
  return jn.default = t, jn;
}
var Fn = {}, pd;
function p0() {
  if (pd) return Fn;
  pd = 1, Object.defineProperty(Fn, "__esModule", {
    value: !0
  }), Fn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "header"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Fn.default = t, Fn;
}
var Bn = {}, md;
function m0() {
  if (md) return Bn;
  md = 1, Object.defineProperty(Bn, "__esModule", {
    value: !0
  }), Bn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "blockquote"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Bn.default = t, Bn;
}
var Un = {}, hd;
function h0() {
  if (hd) return Un;
  hd = 1, Object.defineProperty(Un, "__esModule", {
    value: !0
  }), Un.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-pressed": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "button"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "image"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "reset"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "type",
          value: "submit"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "button"
      },
      module: "HTML"
    }, {
      concept: {
        name: "trigger"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, t = e;
  return Un.default = t, Un;
}
var $n = {}, bd;
function b0() {
  if (bd) return $n;
  bd = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "caption"
      },
      module: "HTML"
    }],
    requireContextRole: ["figure", "grid", "table"],
    requiredContextRole: ["figure", "grid", "table"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return $n.default = t, $n;
}
var Hn = {}, vd;
function v0() {
  if (vd) return Hn;
  vd = 1, Object.defineProperty(Hn, "__esModule", {
    value: !0
  }), Hn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-colspan": null,
      "aria-rowindex": null,
      "aria-rowspan": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has table role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Hn.default = t, Hn;
}
var Vn = {}, yd;
function y0() {
  if (yd) return Vn;
  yd = 1, Object.defineProperty(Vn, "__esModule", {
    value: !0
  }), Vn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "checkbox"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return Vn.default = t, Vn;
}
var zn = {}, gd;
function g0() {
  if (gd) return zn;
  gd = 1, Object.defineProperty(zn, "__esModule", {
    value: !0
  }), zn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "code"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return zn.default = t, zn;
}
var Wn = {}, Rd;
function R0() {
  if (Rd) return Wn;
  Rd = 1, Object.defineProperty(Wn, "__esModule", {
    value: !0
  }), Wn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "col"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "colgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  }, t = e;
  return Wn.default = t, Wn;
}
var Gn = {}, Ed;
function E0() {
  if (Ed) return Gn;
  Ed = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-expanded": "false",
      "aria-haspopup": "listbox"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "multiple"
        }, {
          constraints: ["undefined"],
          name: "size"
        }],
        constraints: ["the multiple attribute is not set and the size attribute does not have a value greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-expanded": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return Gn.default = t, Gn;
}
var Yn = {}, Cd;
function C0() {
  if (Cd) return Yn;
  Cd = 1, Object.defineProperty(Yn, "__esModule", {
    value: !0
  }), Yn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        constraints: ["scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "aside"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Yn.default = t, Yn;
}
var Kn = {}, _d;
function _0() {
  if (_d) return Kn;
  _d = 1, Object.defineProperty(Kn, "__esModule", {
    value: !0
  }), Kn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        constraints: ["scoped to the body element"],
        name: "footer"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Kn.default = t, Kn;
}
var Qn = {}, wd;
function w0() {
  if (wd) return Qn;
  wd = 1, Object.defineProperty(Qn, "__esModule", {
    value: !0
  }), Qn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dd"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Qn.default = t, Qn;
}
var Zn = {}, Td;
function T0() {
  if (Td) return Zn;
  Td = 1, Object.defineProperty(Zn, "__esModule", {
    value: !0
  }), Zn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "del"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Zn.default = t, Zn;
}
var Xn = {}, Sd;
function S0() {
  if (Sd) return Xn;
  Sd = 1, Object.defineProperty(Xn, "__esModule", {
    value: !0
  }), Xn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dialog"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "window"]]
  }, t = e;
  return Xn.default = t, Xn;
}
var Jn = {}, Pd;
function P0() {
  if (Pd) return Jn;
  Pd = 1, Object.defineProperty(Jn, "__esModule", {
    value: !0
  }), Jn.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      module: "DAISY Guide"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  }, t = e;
  return Jn.default = t, Jn;
}
var eo = {}, xd;
function x0() {
  if (xd) return eo;
  xd = 1, Object.defineProperty(eo, "__esModule", {
    value: !0
  }), eo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "Device Independence Delivery Unit"
      }
    }, {
      concept: {
        name: "html"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return eo.default = t, eo;
}
var to = {}, qd;
function q0() {
  if (qd) return to;
  qd = 1, Object.defineProperty(to, "__esModule", {
    value: !0
  }), to.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "em"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return to.default = t, to;
}
var ro = {}, Md;
function M0() {
  if (Md) return ro;
  Md = 1, Object.defineProperty(ro, "__esModule", {
    value: !0
  }), ro.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["article"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "list"]]
  }, t = e;
  return ro.default = t, ro;
}
var no = {}, Od;
function O0() {
  if (Od) return no;
  Od = 1, Object.defineProperty(no, "__esModule", {
    value: !0
  }), no.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "figure"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return no.default = t, no;
}
var oo = {}, Ad;
function A0() {
  if (Ad) return oo;
  Ad = 1, Object.defineProperty(oo, "__esModule", {
    value: !0
  }), oo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "form"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "name"
        }],
        name: "form"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return oo.default = t, oo;
}
var ao = {}, Id;
function I0() {
  if (Id) return ao;
  Id = 1, Object.defineProperty(ao, "__esModule", {
    value: !0
  }), ao.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        name: "area"
      },
      module: "HTML"
    }, {
      concept: {
        name: "aside"
      },
      module: "HTML"
    }, {
      concept: {
        name: "b"
      },
      module: "HTML"
    }, {
      concept: {
        name: "bdo"
      },
      module: "HTML"
    }, {
      concept: {
        name: "body"
      },
      module: "HTML"
    }, {
      concept: {
        name: "data"
      },
      module: "HTML"
    }, {
      concept: {
        name: "div"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "footer"
      },
      module: "HTML"
    }, {
      concept: {
        constraints: ["scoped to the main element", "scoped to a sectioning content element", "scoped to a sectioning root element other than body"],
        name: "header"
      },
      module: "HTML"
    }, {
      concept: {
        name: "hgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "i"
      },
      module: "HTML"
    }, {
      concept: {
        name: "pre"
      },
      module: "HTML"
    }, {
      concept: {
        name: "q"
      },
      module: "HTML"
    }, {
      concept: {
        name: "samp"
      },
      module: "HTML"
    }, {
      concept: {
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "small"
      },
      module: "HTML"
    }, {
      concept: {
        name: "span"
      },
      module: "HTML"
    }, {
      concept: {
        name: "u"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return ao.default = t, ao;
}
var io = {}, kd;
function k0() {
  if (kd) return io;
  kd = 1, Object.defineProperty(io, "__esModule", {
    value: !0
  }), io.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-multiselectable": null,
      "aria-readonly": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "structure", "section", "table"]]
  }, t = e;
  return io.default = t, io;
}
var so = {}, Dd;
function D0() {
  if (Dd) return so;
  Dd = 1, Object.defineProperty(so, "__esModule", {
    value: !0
  }), so.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-selected": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["ancestor table element has grid role", "ancestor table element has treegrid role"],
        name: "td"
      },
      module: "HTML"
    }],
    requireContextRole: ["row"],
    requiredContextRole: ["row"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "widget"]]
  }, t = e;
  return so.default = t, so;
}
var lo = {}, Nd;
function N0() {
  if (Nd) return lo;
  Nd = 1, Object.defineProperty(lo, "__esModule", {
    value: !0
  }), lo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-disabled": null
    },
    relatedConcepts: [{
      concept: {
        name: "details"
      },
      module: "HTML"
    }, {
      concept: {
        name: "fieldset"
      },
      module: "HTML"
    }, {
      concept: {
        name: "optgroup"
      },
      module: "HTML"
    }, {
      concept: {
        name: "address"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return lo.default = t, lo;
}
var uo = {}, Ld;
function L0() {
  if (Ld) return uo;
  Ld = 1, Object.defineProperty(uo, "__esModule", {
    value: !0
  }), uo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-level": "2"
    },
    relatedConcepts: [{
      concept: {
        name: "h1"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h2"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h3"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h4"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h5"
      },
      module: "HTML"
    }, {
      concept: {
        name: "h6"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-level": "2"
    },
    superClass: [["roletype", "structure", "sectionhead"]]
  }, t = e;
  return uo.default = t, uo;
}
var co = {}, jd;
function j0() {
  if (jd) return co;
  jd = 1, Object.defineProperty(co, "__esModule", {
    value: !0
  }), co.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "alt"
        }],
        name: "img"
      },
      module: "HTML"
    }, {
      concept: {
        name: "imggroup"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return co.default = t, co;
}
var fo = {}, Fd;
function F0() {
  if (Fd) return fo;
  Fd = 1, Object.defineProperty(fo, "__esModule", {
    value: !0
  }), fo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "ins"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return fo.default = t, fo;
}
var po = {}, Bd;
function B0() {
  if (Bd) return po;
  Bd = 1, Object.defineProperty(po, "__esModule", {
    value: !0
  }), po.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "a"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "href"
        }],
        name: "area"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, t = e;
  return po.default = t, po;
}
var mo = {}, Ud;
function U0() {
  if (Ud) return mo;
  Ud = 1, Object.defineProperty(mo, "__esModule", {
    value: !0
  }), mo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menu"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ol"
      },
      module: "HTML"
    }, {
      concept: {
        name: "ul"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["listitem"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return mo.default = t, mo;
}
var ho = {}, $d;
function $0() {
  if ($d) return ho;
  $d = 1, Object.defineProperty(ho, "__esModule", {
    value: !0
  }), ho.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: [">1"],
          name: "size"
        }],
        constraints: ["the size attribute value is greater than 1"],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "multiple"
        }],
        name: "select"
      },
      module: "HTML"
    }, {
      concept: {
        name: "datalist"
      },
      module: "HTML"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["option", "group"], ["option"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return ho.default = t, ho;
}
var bo = {}, Hd;
function H0() {
  if (Hd) return bo;
  Hd = 1, Object.defineProperty(bo, "__esModule", {
    value: !0
  }), bo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        constraints: ["direct descendant of ol", "direct descendant of ul", "direct descendant of menu"],
        name: "li"
      },
      module: "HTML"
    }, {
      concept: {
        name: "item"
      },
      module: "XForms"
    }],
    requireContextRole: ["directory", "list"],
    requiredContextRole: ["directory", "list"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return bo.default = t, bo;
}
var vo = {}, Vd;
function V0() {
  if (Vd) return vo;
  Vd = 1, Object.defineProperty(vo, "__esModule", {
    value: !0
  }), vo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-live": "polite"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return vo.default = t, vo;
}
var yo = {}, zd;
function z0() {
  if (zd) return yo;
  zd = 1, Object.defineProperty(yo, "__esModule", {
    value: !0
  }), yo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "main"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return yo.default = t, yo;
}
var go = {}, Wd;
function W0() {
  if (Wd) return go;
  Wd = 1, Object.defineProperty(go, "__esModule", {
    value: !0
  }), go.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: [],
    props: {
      "aria-braillelabel": null,
      "aria-brailleroledescription": null,
      "aria-description": null
    },
    relatedConcepts: [{
      concept: {
        name: "mark"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return go.default = t, go;
}
var Ro = {}, Gd;
function G0() {
  if (Gd) return Ro;
  Gd = 1, Object.defineProperty(Ro, "__esModule", {
    value: !0
  }), Ro.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ro.default = t, Ro;
}
var Eo = {}, Yd;
function Y0() {
  if (Yd) return Eo;
  Yd = 1, Object.defineProperty(Eo, "__esModule", {
    value: !0
  }), Eo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "math"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Eo.default = t, Eo;
}
var Co = {}, Kd;
function K0() {
  if (Kd) return Co;
  Kd = 1, Object.defineProperty(Co, "__esModule", {
    value: !0
  }), Co.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "vertical"
    },
    relatedConcepts: [{
      concept: {
        name: "MENU"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "list"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "select"
      },
      module: "XForms"
    }, {
      concept: {
        name: "sidebar"
      },
      module: "DTB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return Co.default = t, Co;
}
var _o = {}, Qd;
function Q0() {
  if (Qd) return _o;
  Qd = 1, Object.defineProperty(_o, "__esModule", {
    value: !0
  }), _o.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "toolbar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["menuitem", "group"], ["menuitemradio", "group"], ["menuitemcheckbox", "group"], ["menuitem"], ["menuitemcheckbox"], ["menuitemradio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select", "menu"], ["roletype", "structure", "section", "group", "select", "menu"]]
  }, t = e;
  return _o.default = t, _o;
}
var wo = {}, Zd;
function Z0() {
  if (Zd) return wo;
  Zd = 1, Object.defineProperty(wo, "__esModule", {
    value: !0
  }), wo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "MENU_ITEM"
      },
      module: "JAPI"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command"]]
  }, t = e;
  return wo.default = t, wo;
}
var To = {}, Xd;
function X0() {
  if (Xd) return To;
  Xd = 1, Object.defineProperty(To, "__esModule", {
    value: !0
  }), To.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"], ["roletype", "widget", "command", "menuitem"]]
  }, t = e;
  return To.default = t, To;
}
var So = {}, Jd;
function J0() {
  if (Jd) return So;
  Jd = 1, Object.defineProperty(So, "__esModule", {
    value: !0
  }), So.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "menuitem"
      },
      module: "ARIA"
    }],
    requireContextRole: ["group", "menu", "menubar"],
    requiredContextRole: ["group", "menu", "menubar"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox", "menuitemcheckbox"], ["roletype", "widget", "command", "menuitem", "menuitemcheckbox"], ["roletype", "widget", "input", "radio"]]
  }, t = e;
  return So.default = t, So;
}
var Po = {}, ef;
function eC() {
  if (ef) return Po;
  ef = 1, Object.defineProperty(Po, "__esModule", {
    value: !0
  }), Po.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null,
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        name: "meter"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"]]
  }, t = e;
  return Po.default = t, Po;
}
var xo = {}, tf;
function tC() {
  if (tf) return xo;
  tf = 1, Object.defineProperty(xo, "__esModule", {
    value: !0
  }), xo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "nav"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return xo.default = t, xo;
}
var qo = {}, rf;
function rC() {
  if (rf) return qo;
  rf = 1, Object.defineProperty(qo, "__esModule", {
    value: !0
  }), qo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  }, t = e;
  return qo.default = t, qo;
}
var Mo = {}, nf;
function nC() {
  if (nf) return Mo;
  nf = 1, Object.defineProperty(Mo, "__esModule", {
    value: !0
  }), Mo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Mo.default = t, Mo;
}
var Oo = {}, of;
function oC() {
  if (of) return Oo;
  of = 1, Object.defineProperty(Oo, "__esModule", {
    value: !0
  }), Oo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [{
      concept: {
        name: "item"
      },
      module: "XForms"
    }, {
      concept: {
        name: "listitem"
      },
      module: "ARIA"
    }, {
      concept: {
        name: "option"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": "false"
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return Oo.default = t, Oo;
}
var Ao = {}, af;
function aC() {
  if (af) return Ao;
  af = 1, Object.defineProperty(Ao, "__esModule", {
    value: !0
  }), Ao.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "p"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ao.default = t, Ao;
}
var Io = {}, sf;
function iC() {
  if (sf) return Io;
  sf = 1, Object.defineProperty(Io, "__esModule", {
    value: !0
  }), Io.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "alt",
          value: ""
        }],
        name: "img"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Io.default = t, Io;
}
var ko = {}, lf;
function sC() {
  if (lf) return ko;
  lf = 1, Object.defineProperty(ko, "__esModule", {
    value: !0
  }), ko.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "progress"
      },
      module: "HTML"
    }, {
      concept: {
        name: "status"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  }, t = e;
  return ko.default = t, ko;
}
var Do = {}, uf;
function lC() {
  if (uf) return Do;
  uf = 1, Object.defineProperty(Do, "__esModule", {
    value: !0
  }), Do.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-checked": null,
      "aria-posinset": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "radio"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return Do.default = t, Do;
}
var No = {}, cf;
function uC() {
  if (cf) return No;
  cf = 1, Object.defineProperty(No, "__esModule", {
    value: !0
  }), No.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        name: "list"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["radio"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return No.default = t, No;
}
var Lo = {}, df;
function cC() {
  if (df) return Lo;
  df = 1, Object.defineProperty(Lo, "__esModule", {
    value: !0
  }), Lo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-label"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["set"],
          name: "aria-labelledby"
        }],
        name: "section"
      },
      module: "HTML"
    }, {
      concept: {
        name: "Device Independence Glossart perceivable unit"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Lo.default = t, Lo;
}
var jo = {}, ff;
function dC() {
  if (ff) return jo;
  ff = 1, Object.defineProperty(jo, "__esModule", {
    value: !0
  }), jo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-colindex": null,
      "aria-expanded": null,
      "aria-level": null,
      "aria-posinset": null,
      "aria-rowindex": null,
      "aria-selected": null,
      "aria-setsize": null
    },
    relatedConcepts: [{
      concept: {
        name: "tr"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredContextRole: ["grid", "rowgroup", "table", "treegrid"],
    requiredOwnedElements: [["cell"], ["columnheader"], ["gridcell"], ["rowheader"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"], ["roletype", "widget"]]
  }, t = e;
  return jo.default = t, jo;
}
var Fo = {}, pf;
function fC() {
  if (pf) return Fo;
  pf = 1, Object.defineProperty(Fo, "__esModule", {
    value: !0
  }), Fo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "tbody"
      },
      module: "HTML"
    }, {
      concept: {
        name: "tfoot"
      },
      module: "HTML"
    }, {
      concept: {
        name: "thead"
      },
      module: "HTML"
    }],
    requireContextRole: ["grid", "table", "treegrid"],
    requiredContextRole: ["grid", "table", "treegrid"],
    requiredOwnedElements: [["row"]],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Fo.default = t, Fo;
}
var Bo = {}, mf;
function pC() {
  if (mf) return Bo;
  mf = 1, Object.defineProperty(Bo, "__esModule", {
    value: !0
  }), Bo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-sort": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "scope",
          value: "row"
        }],
        name: "th"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          name: "scope",
          value: "rowgroup"
        }],
        name: "th"
      },
      module: "HTML"
    }],
    requireContextRole: ["row", "rowgroup"],
    requiredContextRole: ["row", "rowgroup"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "cell"], ["roletype", "structure", "section", "cell", "gridcell"], ["roletype", "widget", "gridcell"], ["roletype", "structure", "sectionhead"]]
  }, t = e;
  return Bo.default = t, Bo;
}
var Uo = {}, hf;
function mC() {
  if (hf) return Uo;
  hf = 1, Object.defineProperty(Uo, "__esModule", {
    value: !0
  }), Uo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-valuetext": null,
      "aria-orientation": "vertical",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-controls": null,
      "aria-valuenow": null
    },
    superClass: [["roletype", "structure", "range"], ["roletype", "widget"]]
  }, t = e;
  return Uo.default = t, Uo;
}
var $o = {}, bf;
function hC() {
  if (bf) return $o;
  bf = 1, Object.defineProperty($o, "__esModule", {
    value: !0
  }), $o.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return $o.default = t, $o;
}
var Ho = {}, vf;
function bC() {
  if (vf) return Ho;
  vf = 1, Object.defineProperty(Ho, "__esModule", {
    value: !0
  }), Ho.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "search"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input", "textbox"]]
  }, t = e;
  return Ho.default = t, Ho;
}
var Vo = {}, yf;
function vC() {
  if (yf) return Vo;
  yf = 1, Object.defineProperty(Vo, "__esModule", {
    value: !0
  }), Vo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0",
      "aria-valuenow": null,
      "aria-valuetext": null
    },
    relatedConcepts: [{
      concept: {
        name: "hr"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure"]]
  }, t = e;
  return Vo.default = t, Vo;
}
var zo = {}, gf;
function yC() {
  if (gf) return zo;
  gf = 1, Object.defineProperty(zo, "__esModule", {
    value: !0
  }), zo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-valuetext": null,
      "aria-orientation": "horizontal",
      "aria-valuemax": "100",
      "aria-valuemin": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "range"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-valuenow": null
    },
    superClass: [["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  }, t = e;
  return zo.default = t, zo;
}
var Wo = {}, Rf;
function gC() {
  if (Rf) return Wo;
  Rf = 1, Object.defineProperty(Wo, "__esModule", {
    value: !0
  }), Wo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-readonly": null,
      "aria-required": null,
      "aria-valuetext": null,
      "aria-valuenow": "0"
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          name: "type",
          value: "number"
        }],
        name: "input"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"], ["roletype", "widget", "input"], ["roletype", "structure", "range"]]
  }, t = e;
  return Wo.default = t, Wo;
}
var Go = {}, Ef;
function RC() {
  if (Ef) return Go;
  Ef = 1, Object.defineProperty(Go, "__esModule", {
    value: !0
  }), Go.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-atomic": "true",
      "aria-live": "polite"
    },
    relatedConcepts: [{
      concept: {
        name: "output"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Go.default = t, Go;
}
var Yo = {}, Cf;
function EC() {
  if (Cf) return Yo;
  Cf = 1, Object.defineProperty(Yo, "__esModule", {
    value: !0
  }), Yo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "strong"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Yo.default = t, Yo;
}
var Ko = {}, _f;
function CC() {
  if (_f) return Ko;
  _f = 1, Object.defineProperty(Ko, "__esModule", {
    value: !0
  }), Ko.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sub"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ko.default = t, Ko;
}
var Qo = {}, wf;
function _C() {
  if (wf) return Qo;
  wf = 1, Object.defineProperty(Qo, "__esModule", {
    value: !0
  }), Qo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["prohibited"],
    prohibitedProps: ["aria-label", "aria-labelledby"],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "sup"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Qo.default = t, Qo;
}
var Zo = {}, Tf;
function wC() {
  if (Tf) return Zo;
  Tf = 1, Object.defineProperty(Zo, "__esModule", {
    value: !0
  }), Zo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "button"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-checked": null
    },
    superClass: [["roletype", "widget", "input", "checkbox"]]
  }, t = e;
  return Zo.default = t, Zo;
}
var Xo = {}, Sf;
function TC() {
  if (Sf) return Xo;
  Sf = 1, Object.defineProperty(Xo, "__esModule", {
    value: !0
  }), Xo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-posinset": null,
      "aria-setsize": null,
      "aria-selected": "false"
    },
    relatedConcepts: [],
    requireContextRole: ["tablist"],
    requiredContextRole: ["tablist"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"], ["roletype", "widget"]]
  }, t = e;
  return Xo.default = t, Xo;
}
var Jo = {}, Pf;
function SC() {
  if (Pf) return Jo;
  Pf = 1, Object.defineProperty(Jo, "__esModule", {
    value: !0
  }), Jo.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-colcount": null,
      "aria-rowcount": null
    },
    relatedConcepts: [{
      concept: {
        name: "table"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Jo.default = t, Jo;
}
var ea = {}, xf;
function PC() {
  if (xf) return ea;
  xf = 1, Object.defineProperty(ea, "__esModule", {
    value: !0
  }), ea.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-level": null,
      "aria-multiselectable": null,
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      module: "DAISY",
      concept: {
        name: "guide"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["tab"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite"]]
  }, t = e;
  return ea.default = t, ea;
}
var ta = {}, qf;
function xC() {
  if (qf) return ta;
  qf = 1, Object.defineProperty(ta, "__esModule", {
    value: !0
  }), ta.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return ta.default = t, ta;
}
var ra = {}, Mf;
function qC() {
  if (Mf) return ra;
  Mf = 1, Object.defineProperty(ra, "__esModule", {
    value: !0
  }), ra.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "dfn"
      },
      module: "HTML"
    }, {
      concept: {
        name: "dt"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return ra.default = t, ra;
}
var na = {}, Of;
function MC() {
  if (Of) return na;
  Of = 1, Object.defineProperty(na, "__esModule", {
    value: !0
  }), na.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-activedescendant": null,
      "aria-autocomplete": null,
      "aria-errormessage": null,
      "aria-haspopup": null,
      "aria-invalid": null,
      "aria-multiline": null,
      "aria-placeholder": null,
      "aria-readonly": null,
      "aria-required": null
    },
    relatedConcepts: [{
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "type"
        }, {
          constraints: ["undefined"],
          name: "list"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "email"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "tel"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "text"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        attributes: [{
          constraints: ["undefined"],
          name: "list"
        }, {
          name: "type",
          value: "url"
        }],
        constraints: ["the list attribute is not set"],
        name: "input"
      },
      module: "HTML"
    }, {
      concept: {
        name: "input"
      },
      module: "XForms"
    }, {
      concept: {
        name: "textarea"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "input"]]
  }, t = e;
  return na.default = t, na;
}
var oa = {}, Af;
function OC() {
  if (Af) return oa;
  Af = 1, Object.defineProperty(oa, "__esModule", {
    value: !0
  }), oa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "time"
      },
      module: "HTML"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return oa.default = t, oa;
}
var aa = {}, If;
function AC() {
  if (If) return aa;
  If = 1, Object.defineProperty(aa, "__esModule", {
    value: !0
  }), aa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "status"]]
  }, t = e;
  return aa.default = t, aa;
}
var ia = {}, kf;
function IC() {
  if (kf) return ia;
  kf = 1, Object.defineProperty(ia, "__esModule", {
    value: !0
  }), ia.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-orientation": "horizontal"
    },
    relatedConcepts: [{
      concept: {
        name: "menubar"
      },
      module: "ARIA"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  }, t = e;
  return ia.default = t, ia;
}
var sa = {}, Df;
function kC() {
  if (Df) return sa;
  Df = 1, Object.defineProperty(sa, "__esModule", {
    value: !0
  }), sa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return sa.default = t, sa;
}
var la = {}, Nf;
function DC() {
  if (Nf) return la;
  Nf = 1, Object.defineProperty(la, "__esModule", {
    value: !0
  }), la.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null,
      "aria-multiselectable": null,
      "aria-required": null,
      "aria-orientation": "vertical"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["treeitem", "group"], ["treeitem"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "select"], ["roletype", "structure", "section", "group", "select"]]
  }, t = e;
  return la.default = t, la;
}
var ua = {}, Lf;
function NC() {
  if (Lf) return ua;
  Lf = 1, Object.defineProperty(ua, "__esModule", {
    value: !0
  }), ua.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["row"], ["row", "rowgroup"]],
    requiredProps: {},
    superClass: [["roletype", "widget", "composite", "grid"], ["roletype", "structure", "section", "table", "grid"], ["roletype", "widget", "composite", "select", "tree"], ["roletype", "structure", "section", "group", "select", "tree"]]
  }, t = e;
  return ua.default = t, ua;
}
var ca = {}, jf;
function LC() {
  if (jf) return ca;
  jf = 1, Object.defineProperty(ca, "__esModule", {
    value: !0
  }), ca.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-expanded": null,
      "aria-haspopup": null
    },
    relatedConcepts: [],
    requireContextRole: ["group", "tree"],
    requiredContextRole: ["group", "tree"],
    requiredOwnedElements: [],
    requiredProps: {
      "aria-selected": null
    },
    superClass: [["roletype", "structure", "section", "listitem"], ["roletype", "widget", "input", "option"]]
  }, t = e;
  return ca.default = t, ca;
}
var Ff;
function jC() {
  if (Ff) return kn;
  Ff = 1, Object.defineProperty(kn, "__esModule", {
    value: !0
  }), kn.default = void 0;
  var e = V(u0()), t = V(c0()), r = V(d0()), n = V(f0()), o = V(p0()), a = V(m0()), i = V(h0()), s = V(b0()), l = V(v0()), u = V(y0()), p = V(g0()), f = V(R0()), c = V(E0()), m = V(C0()), h = V(_0()), y = V(w0()), C = V(T0()), d = V(S0()), R = V(P0()), b = V(x0()), E = V(q0()), w = V(M0()), g = V(O0()), v = V(A0()), _ = V(I0()), A = V(k0()), O = V(D0()), q = V(N0()), I = V(L0()), T = V(j0()), k = V(F0()), N = V(B0()), Y = V(U0()), G = V($0()), Q = V(H0()), K = V(V0()), se = V(z0()), ne = V(W0()), we = V(G0()), W = V(Y0()), be = V(K0()), X = V(Q0()), ue = V(Z0()), me = V(X0()), le = V(J0()), M = V(eC()), z = V(tC()), B = V(rC()), J = V(nC()), ee = V(oC()), re = V(aC()), ce = V(iC()), ae = V(sC()), ve = V(lC()), qe = V(uC()), Ue = V(cC()), ft = V(dC()), Wt = V(fC()), vt = V(pC()), Gt = V(mC()), Yt = V(hC()), Kt = V(bC()), yt = V(vC()), _t = V(yC()), pt = V(gC()), Qt = V(RC()), S = V(EC()), U = V(CC()), F = V(_C()), te = V(wC()), ye = V(TC()), ge = V(SC()), de = V(PC()), Ce = V(xC()), Ve = V(qC()), We = V(MC()), it = V(OC()), ur = V(AC()), cr = V(IC()), wt = V(kC()), un = V(DC()), Zt = V(NC()), Dr = V(LC());
  function V(Tt) {
    return Tt && Tt.__esModule ? Tt : { default: Tt };
  }
  var dr = [["alert", e.default], ["alertdialog", t.default], ["application", r.default], ["article", n.default], ["banner", o.default], ["blockquote", a.default], ["button", i.default], ["caption", s.default], ["cell", l.default], ["checkbox", u.default], ["code", p.default], ["columnheader", f.default], ["combobox", c.default], ["complementary", m.default], ["contentinfo", h.default], ["definition", y.default], ["deletion", C.default], ["dialog", d.default], ["directory", R.default], ["document", b.default], ["emphasis", E.default], ["feed", w.default], ["figure", g.default], ["form", v.default], ["generic", _.default], ["grid", A.default], ["gridcell", O.default], ["group", q.default], ["heading", I.default], ["img", T.default], ["insertion", k.default], ["link", N.default], ["list", Y.default], ["listbox", G.default], ["listitem", Q.default], ["log", K.default], ["main", se.default], ["mark", ne.default], ["marquee", we.default], ["math", W.default], ["menu", be.default], ["menubar", X.default], ["menuitem", ue.default], ["menuitemcheckbox", me.default], ["menuitemradio", le.default], ["meter", M.default], ["navigation", z.default], ["none", B.default], ["note", J.default], ["option", ee.default], ["paragraph", re.default], ["presentation", ce.default], ["progressbar", ae.default], ["radio", ve.default], ["radiogroup", qe.default], ["region", Ue.default], ["row", ft.default], ["rowgroup", Wt.default], ["rowheader", vt.default], ["scrollbar", Gt.default], ["search", Yt.default], ["searchbox", Kt.default], ["separator", yt.default], ["slider", _t.default], ["spinbutton", pt.default], ["status", Qt.default], ["strong", S.default], ["subscript", U.default], ["superscript", F.default], ["switch", te.default], ["tab", ye.default], ["table", ge.default], ["tablist", de.default], ["tabpanel", Ce.default], ["term", Ve.default], ["textbox", We.default], ["time", it.default], ["timer", ur.default], ["toolbar", cr.default], ["tooltip", wt.default], ["tree", un.default], ["treegrid", Zt.default], ["treeitem", Dr.default]], cn = dr;
  return kn.default = cn, kn;
}
var da = {}, fa = {}, Bf;
function FC() {
  if (Bf) return fa;
  Bf = 1, Object.defineProperty(fa, "__esModule", {
    value: !0
  }), fa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "abstract [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return fa.default = t, fa;
}
var pa = {}, Uf;
function BC() {
  if (Uf) return pa;
  Uf = 1, Object.defineProperty(pa, "__esModule", {
    value: !0
  }), pa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "acknowledgments [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return pa.default = t, pa;
}
var ma = {}, $f;
function UC() {
  if ($f) return ma;
  $f = 1, Object.defineProperty(ma, "__esModule", {
    value: !0
  }), ma.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "afterword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return ma.default = t, ma;
}
var ha = {}, Hf;
function $C() {
  if (Hf) return ha;
  Hf = 1, Object.defineProperty(ha, "__esModule", {
    value: !0
  }), ha.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "appendix [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return ha.default = t, ha;
}
var ba = {}, Vf;
function HC() {
  if (Vf) return ba;
  Vf = 1, Object.defineProperty(ba, "__esModule", {
    value: !0
  }), ba.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "referrer [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return ba.default = t, ba;
}
var va = {}, zf;
function VC() {
  if (zf) return va;
  zf = 1, Object.defineProperty(va, "__esModule", {
    value: !0
  }), va.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "EPUB biblioentry [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-bibliography"],
    requiredContextRole: ["doc-bibliography"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  }, t = e;
  return va.default = t, va;
}
var ya = {}, Wf;
function zC() {
  if (Wf) return ya;
  Wf = 1, Object.defineProperty(ya, "__esModule", {
    value: !0
  }), ya.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "bibliography [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-biblioentry"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return ya.default = t, ya;
}
var ga = {}, Gf;
function WC() {
  if (Gf) return ga;
  Gf = 1, Object.defineProperty(ga, "__esModule", {
    value: !0
  }), ga.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "biblioref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return ga.default = t, ga;
}
var Ra = {}, Yf;
function GC() {
  if (Yf) return Ra;
  Yf = 1, Object.defineProperty(Ra, "__esModule", {
    value: !0
  }), Ra.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "chapter [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Ra.default = t, Ra;
}
var Ea = {}, Kf;
function YC() {
  if (Kf) return Ea;
  Kf = 1, Object.defineProperty(Ea, "__esModule", {
    value: !0
  }), Ea.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "colophon [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ea.default = t, Ea;
}
var Ca = {}, Qf;
function KC() {
  if (Qf) return Ca;
  Qf = 1, Object.defineProperty(Ca, "__esModule", {
    value: !0
  }), Ca.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "conclusion [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Ca.default = t, Ca;
}
var _a = {}, Zf;
function QC() {
  if (Zf) return _a;
  Zf = 1, Object.defineProperty(_a, "__esModule", {
    value: !0
  }), _a.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "cover [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  }, t = e;
  return _a.default = t, _a;
}
var wa = {}, Xf;
function ZC() {
  if (Xf) return wa;
  Xf = 1, Object.defineProperty(wa, "__esModule", {
    value: !0
  }), wa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credit [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return wa.default = t, wa;
}
var Ta = {}, Jf;
function XC() {
  if (Jf) return Ta;
  Jf = 1, Object.defineProperty(Ta, "__esModule", {
    value: !0
  }), Ta.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "credits [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Ta.default = t, Ta;
}
var Sa = {}, ep;
function JC() {
  if (ep) return Sa;
  ep = 1, Object.defineProperty(Sa, "__esModule", {
    value: !0
  }), Sa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "dedication [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Sa.default = t, Sa;
}
var Pa = {}, tp;
function e_() {
  if (tp) return Pa;
  tp = 1, Object.defineProperty(Pa, "__esModule", {
    value: !0
  }), Pa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: ["doc-endnotes"],
    requiredContextRole: ["doc-endnotes"],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "listitem"]]
  }, t = e;
  return Pa.default = t, Pa;
}
var xa = {}, rp;
function t_() {
  if (rp) return xa;
  rp = 1, Object.defineProperty(xa, "__esModule", {
    value: !0
  }), xa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "rearnotes [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["doc-endnote"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return xa.default = t, xa;
}
var qa = {}, np;
function r_() {
  if (np) return qa;
  np = 1, Object.defineProperty(qa, "__esModule", {
    value: !0
  }), qa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epigraph [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return qa.default = t, qa;
}
var Ma = {}, op;
function n_() {
  if (op) return Ma;
  op = 1, Object.defineProperty(Ma, "__esModule", {
    value: !0
  }), Ma.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "epilogue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Ma.default = t, Ma;
}
var Oa = {}, ap;
function o_() {
  if (ap) return Oa;
  ap = 1, Object.defineProperty(Oa, "__esModule", {
    value: !0
  }), Oa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "errata [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Oa.default = t, Oa;
}
var Aa = {}, ip;
function a_() {
  if (ip) return Aa;
  ip = 1, Object.defineProperty(Aa, "__esModule", {
    value: !0
  }), Aa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Aa.default = t, Aa;
}
var Ia = {}, sp;
function i_() {
  if (sp) return Ia;
  sp = 1, Object.defineProperty(Ia, "__esModule", {
    value: !0
  }), Ia.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "footnote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ia.default = t, Ia;
}
var ka = {}, lp;
function s_() {
  if (lp) return ka;
  lp = 1, Object.defineProperty(ka, "__esModule", {
    value: !0
  }), ka.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "foreword [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return ka.default = t, ka;
}
var Da = {}, up;
function l_() {
  if (up) return Da;
  up = 1, Object.defineProperty(Da, "__esModule", {
    value: !0
  }), Da.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossary [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [["definition"], ["term"]],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Da.default = t, Da;
}
var Na = {}, cp;
function u_() {
  if (cp) return Na;
  cp = 1, Object.defineProperty(Na, "__esModule", {
    value: !0
  }), Na.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "glossref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return Na.default = t, Na;
}
var La = {}, dp;
function c_() {
  if (dp) return La;
  dp = 1, Object.defineProperty(La, "__esModule", {
    value: !0
  }), La.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "index [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, t = e;
  return La.default = t, La;
}
var ja = {}, fp;
function d_() {
  if (fp) return ja;
  fp = 1, Object.defineProperty(ja, "__esModule", {
    value: !0
  }), ja.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "introduction [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return ja.default = t, ja;
}
var Fa = {}, pp;
function f_() {
  if (pp) return Fa;
  pp = 1, Object.defineProperty(Fa, "__esModule", {
    value: !0
  }), Fa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "noteref [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "widget", "command", "link"]]
  }, t = e;
  return Fa.default = t, Fa;
}
var Ba = {}, mp;
function p_() {
  if (mp) return Ba;
  mp = 1, Object.defineProperty(Ba, "__esModule", {
    value: !0
  }), Ba.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "notice [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  }, t = e;
  return Ba.default = t, Ba;
}
var Ua = {}, hp;
function m_() {
  if (hp) return Ua;
  hp = 1, Object.defineProperty(Ua, "__esModule", {
    value: !0
  }), Ua.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "pagebreak [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "separator"]]
  }, t = e;
  return Ua.default = t, Ua;
}
var $a = {}, bp;
function h_() {
  if (bp) return $a;
  bp = 1, Object.defineProperty($a, "__esModule", {
    value: !0
  }), $a.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "page-list [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, t = e;
  return $a.default = t, $a;
}
var Ha = {}, vp;
function b_() {
  if (vp) return Ha;
  vp = 1, Object.defineProperty(Ha, "__esModule", {
    value: !0
  }), Ha.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "part [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Ha.default = t, Ha;
}
var Va = {}, yp;
function v_() {
  if (yp) return Va;
  yp = 1, Object.defineProperty(Va, "__esModule", {
    value: !0
  }), Va.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "preface [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return Va.default = t, Va;
}
var za = {}, gp;
function y_() {
  if (gp) return za;
  gp = 1, Object.defineProperty(za, "__esModule", {
    value: !0
  }), za.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "prologue [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark"]]
  }, t = e;
  return za.default = t, za;
}
var Wa = {}, Rp;
function g_() {
  if (Rp) return Wa;
  Rp = 1, Object.defineProperty(Wa, "__esModule", {
    value: !0
  }), Wa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{
      concept: {
        name: "pullquote [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["none"]]
  }, t = e;
  return Wa.default = t, Wa;
}
var Ga = {}, Ep;
function R_() {
  if (Ep) return Ga;
  Ep = 1, Object.defineProperty(Ga, "__esModule", {
    value: !0
  }), Ga.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "qna [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Ga.default = t, Ga;
}
var Ya = {}, Cp;
function E_() {
  if (Cp) return Ya;
  Cp = 1, Object.defineProperty(Ya, "__esModule", {
    value: !0
  }), Ya.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "subtitle [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "sectionhead"]]
  }, t = e;
  return Ya.default = t, Ya;
}
var Ka = {}, _p;
function C_() {
  if (_p) return Ka;
  _p = 1, Object.defineProperty(Ka, "__esModule", {
    value: !0
  }), Ka.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "help [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "note"]]
  }, t = e;
  return Ka.default = t, Ka;
}
var Qa = {}, wp;
function __() {
  if (wp) return Qa;
  wp = 1, Object.defineProperty(Qa, "__esModule", {
    value: !0
  }), Qa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      concept: {
        name: "toc [EPUB-SSV]"
      },
      module: "EPUB"
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "landmark", "navigation"]]
  }, t = e;
  return Qa.default = t, Qa;
}
var Tp;
function w_() {
  if (Tp) return da;
  Tp = 1, Object.defineProperty(da, "__esModule", {
    value: !0
  }), da.default = void 0;
  var e = W(FC()), t = W(BC()), r = W(UC()), n = W($C()), o = W(HC()), a = W(VC()), i = W(zC()), s = W(WC()), l = W(GC()), u = W(YC()), p = W(KC()), f = W(QC()), c = W(ZC()), m = W(XC()), h = W(JC()), y = W(e_()), C = W(t_()), d = W(r_()), R = W(n_()), b = W(o_()), E = W(a_()), w = W(i_()), g = W(s_()), v = W(l_()), _ = W(u_()), A = W(c_()), O = W(d_()), q = W(f_()), I = W(p_()), T = W(m_()), k = W(h_()), N = W(b_()), Y = W(v_()), G = W(y_()), Q = W(g_()), K = W(R_()), se = W(E_()), ne = W(C_()), we = W(__());
  function W(ue) {
    return ue && ue.__esModule ? ue : { default: ue };
  }
  var be = [["doc-abstract", e.default], ["doc-acknowledgments", t.default], ["doc-afterword", r.default], ["doc-appendix", n.default], ["doc-backlink", o.default], ["doc-biblioentry", a.default], ["doc-bibliography", i.default], ["doc-biblioref", s.default], ["doc-chapter", l.default], ["doc-colophon", u.default], ["doc-conclusion", p.default], ["doc-cover", f.default], ["doc-credit", c.default], ["doc-credits", m.default], ["doc-dedication", h.default], ["doc-endnote", y.default], ["doc-endnotes", C.default], ["doc-epigraph", d.default], ["doc-epilogue", R.default], ["doc-errata", b.default], ["doc-example", E.default], ["doc-footnote", w.default], ["doc-foreword", g.default], ["doc-glossary", v.default], ["doc-glossref", _.default], ["doc-index", A.default], ["doc-introduction", O.default], ["doc-noteref", q.default], ["doc-notice", I.default], ["doc-pagebreak", T.default], ["doc-pagelist", k.default], ["doc-part", N.default], ["doc-preface", Y.default], ["doc-prologue", G.default], ["doc-pullquote", Q.default], ["doc-qna", K.default], ["doc-subtitle", se.default], ["doc-tip", ne.default], ["doc-toc", we.default]], X = be;
  return da.default = X, da;
}
var Za = {}, Xa = {}, Sp;
function T_() {
  if (Sp) return Xa;
  Sp = 1, Object.defineProperty(Xa, "__esModule", {
    value: !0
  }), Xa.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-object"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "article"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "document"]]
  }, t = e;
  return Xa.default = t, Xa;
}
var Ja = {}, Pp;
function S_() {
  if (Pp) return Ja;
  Pp = 1, Object.defineProperty(Ja, "__esModule", {
    value: !0
  }), Ja.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ["author", "contents"],
    prohibitedProps: [],
    props: {
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [{
      module: "GRAPHICS",
      concept: {
        name: "graphics-document"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "group"
      }
    }, {
      module: "ARIA",
      concept: {
        name: "img"
      }
    }, {
      module: "GRAPHICS",
      concept: {
        name: "graphics-symbol"
      }
    }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "group"]]
  }, t = e;
  return Ja.default = t, Ja;
}
var ei = {}, xp;
function P_() {
  if (xp) return ei;
  xp = 1, Object.defineProperty(ei, "__esModule", {
    value: !0
  }), ei.default = void 0;
  var e = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ["author"],
    prohibitedProps: [],
    props: {
      "aria-disabled": null,
      "aria-errormessage": null,
      "aria-expanded": null,
      "aria-haspopup": null,
      "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section", "img"]]
  }, t = e;
  return ei.default = t, ei;
}
var qp;
function x_() {
  if (qp) return Za;
  qp = 1, Object.defineProperty(Za, "__esModule", {
    value: !0
  }), Za.default = void 0;
  var e = n(T_()), t = n(S_()), r = n(P_());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = [["graphics-document", e.default], ["graphics-object", t.default], ["graphics-symbol", r.default]], a = o;
  return Za.default = a, Za;
}
var Mp;
function yu() {
  if (Mp) return Rn;
  Mp = 1, Object.defineProperty(Rn, "__esModule", {
    value: !0
  }), Rn.default = void 0;
  var e = a(l0()), t = a(jC()), r = a(w_()), n = a(x_()), o = a(Di());
  function a(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function i(d, R, b) {
    return R in d ? Object.defineProperty(d, R, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : d[R] = b, d;
  }
  function s(d, R) {
    var b = typeof Symbol < "u" && d[Symbol.iterator] || d["@@iterator"];
    if (!b) {
      if (Array.isArray(d) || (b = p(d)) || R) {
        b && (d = b);
        var E = 0, w = function() {
        };
        return { s: w, n: function() {
          return E >= d.length ? { done: !0 } : { done: !1, value: d[E++] };
        }, e: function(O) {
          throw O;
        }, f: w };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var g = !0, v = !1, _;
    return { s: function() {
      b = b.call(d);
    }, n: function() {
      var O = b.next();
      return g = O.done, O;
    }, e: function(O) {
      v = !0, _ = O;
    }, f: function() {
      try {
        !g && b.return != null && b.return();
      } finally {
        if (v) throw _;
      }
    } };
  }
  function l(d, R) {
    return m(d) || c(d, R) || p(d, R) || u();
  }
  function u() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function p(d, R) {
    if (d) {
      if (typeof d == "string") return f(d, R);
      var b = Object.prototype.toString.call(d).slice(8, -1);
      if (b === "Object" && d.constructor && (b = d.constructor.name), b === "Map" || b === "Set") return Array.from(d);
      if (b === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)) return f(d, R);
    }
  }
  function f(d, R) {
    (R == null || R > d.length) && (R = d.length);
    for (var b = 0, E = new Array(R); b < R; b++)
      E[b] = d[b];
    return E;
  }
  function c(d, R) {
    var b = d == null ? null : typeof Symbol < "u" && d[Symbol.iterator] || d["@@iterator"];
    if (b != null) {
      var E = [], w = !0, g = !1, v, _;
      try {
        for (b = b.call(d); !(w = (v = b.next()).done) && (E.push(v.value), !(R && E.length === R)); w = !0)
          ;
      } catch (A) {
        g = !0, _ = A;
      } finally {
        try {
          !w && b.return != null && b.return();
        } finally {
          if (g) throw _;
        }
      }
      return E;
    }
  }
  function m(d) {
    if (Array.isArray(d)) return d;
  }
  var h = [].concat(e.default, t.default, r.default, n.default);
  h.forEach(function(d) {
    var R = l(d, 2), b = R[1], E = s(b.superClass), w;
    try {
      for (E.s(); !(w = E.n()).done; ) {
        var g = w.value, v = s(g), _;
        try {
          var A = function() {
            var q = _.value, I = h.find(function(G) {
              var Q = l(G, 1), K = Q[0];
              return K === q;
            });
            if (I)
              for (var T = I[1], k = 0, N = Object.keys(T.props); k < N.length; k++) {
                var Y = N[k];
                Object.prototype.hasOwnProperty.call(b.props, Y) || Object.assign(b.props, i({}, Y, T.props[Y]));
              }
          };
          for (v.s(); !(_ = v.n()).done; )
            A();
        } catch (O) {
          v.e(O);
        } finally {
          v.f();
        }
      }
    } catch (O) {
      E.e(O);
    } finally {
      E.f();
    }
  });
  var y = {
    entries: function() {
      return h;
    },
    forEach: function(R) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, E = s(h), w;
      try {
        for (E.s(); !(w = E.n()).done; ) {
          var g = l(w.value, 2), v = g[0], _ = g[1];
          R.call(b, _, v, h);
        }
      } catch (A) {
        E.e(A);
      } finally {
        E.f();
      }
    },
    get: function(R) {
      var b = h.find(function(E) {
        return E[0] === R;
      });
      return b && b[1];
    },
    has: function(R) {
      return !!y.get(R);
    },
    keys: function() {
      return h.map(function(R) {
        var b = l(R, 1), E = b[0];
        return E;
      });
    },
    values: function() {
      return h.map(function(R) {
        var b = l(R, 2), E = b[1];
        return E;
      });
    }
  }, C = (0, o.default)(y, y.entries());
  return Rn.default = C, Rn;
}
var ti = {}, sl = {}, Op;
function q_() {
  if (Op) return sl;
  Op = 1;
  var e = Object.prototype.hasOwnProperty;
  function t(r, n) {
    var o, a;
    if (r === n) return !0;
    if (r && n && (o = r.constructor) === n.constructor) {
      if (o === Date) return r.getTime() === n.getTime();
      if (o === RegExp) return r.toString() === n.toString();
      if (o === Array) {
        if ((a = r.length) === n.length)
          for (; a-- && t(r[a], n[a]); ) ;
        return a === -1;
      }
      if (!o || typeof r == "object") {
        a = 0;
        for (o in r)
          if (e.call(r, o) && ++a && !e.call(n, o) || !(o in n) || !t(r[o], n[o])) return !1;
        return Object.keys(n).length === a;
      }
    }
    return r !== r && n !== n;
  }
  return sl.dequal = t, sl;
}
var Ap;
function M_() {
  if (Ap) return ti;
  Ap = 1, Object.defineProperty(ti, "__esModule", {
    value: !0
  }), ti.default = void 0;
  var e = q_(), t = n(Di()), r = n(yu());
  function n(w) {
    return w && w.__esModule ? w : { default: w };
  }
  function o(w, g) {
    return s(w) || i(w, g) || u(w, g) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function i(w, g) {
    var v = w == null ? null : typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
    if (v != null) {
      var _ = [], A = !0, O = !1, q, I;
      try {
        for (v = v.call(w); !(A = (q = v.next()).done) && (_.push(q.value), !(g && _.length === g)); A = !0)
          ;
      } catch (T) {
        O = !0, I = T;
      } finally {
        try {
          !A && v.return != null && v.return();
        } finally {
          if (O) throw I;
        }
      }
      return _;
    }
  }
  function s(w) {
    if (Array.isArray(w)) return w;
  }
  function l(w, g) {
    var v = typeof Symbol < "u" && w[Symbol.iterator] || w["@@iterator"];
    if (!v) {
      if (Array.isArray(w) || (v = u(w)) || g) {
        v && (w = v);
        var _ = 0, A = function() {
        };
        return { s: A, n: function() {
          return _ >= w.length ? { done: !0 } : { done: !1, value: w[_++] };
        }, e: function(k) {
          throw k;
        }, f: A };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var O = !0, q = !1, I;
    return { s: function() {
      v = v.call(w);
    }, n: function() {
      var k = v.next();
      return O = k.done, k;
    }, e: function(k) {
      q = !0, I = k;
    }, f: function() {
      try {
        !O && v.return != null && v.return();
      } finally {
        if (q) throw I;
      }
    } };
  }
  function u(w, g) {
    if (w) {
      if (typeof w == "string") return p(w, g);
      var v = Object.prototype.toString.call(w).slice(8, -1);
      if (v === "Object" && w.constructor && (v = w.constructor.name), v === "Map" || v === "Set") return Array.from(w);
      if (v === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(v)) return p(w, g);
    }
  }
  function p(w, g) {
    (g == null || g > w.length) && (g = w.length);
    for (var v = 0, _ = new Array(g); v < g; v++)
      _[v] = w[v];
    return _;
  }
  for (var f = [], c = r.default.keys(), m = 0; m < c.length; m++) {
    var h = c[m], y = r.default.get(h);
    if (y)
      for (var C = [].concat(y.baseConcepts, y.relatedConcepts), d = 0; d < C.length; d++) {
        var R = C[d];
        R.module === "HTML" && (function() {
          var w = R.concept;
          if (w) {
            var g = f.find(function(O) {
              return (0, e.dequal)(O, w);
            }), v;
            g ? v = g[1] : v = [];
            for (var _ = !0, A = 0; A < v.length; A++)
              if (v[A] === h) {
                _ = !1;
                break;
              }
            _ && v.push(h), f.push([w, v]);
          }
        })();
      }
  }
  var b = {
    entries: function() {
      return f;
    },
    forEach: function(g) {
      var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, _ = l(f), A;
      try {
        for (_.s(); !(A = _.n()).done; ) {
          var O = o(A.value, 2), q = O[0], I = O[1];
          g.call(v, I, q, f);
        }
      } catch (T) {
        _.e(T);
      } finally {
        _.f();
      }
    },
    get: function(g) {
      var v = f.find(function(_) {
        return g.name === _[0].name && (0, e.dequal)(g.attributes, _[0].attributes);
      });
      return v && v[1];
    },
    has: function(g) {
      return !!b.get(g);
    },
    keys: function() {
      return f.map(function(g) {
        var v = o(g, 1), _ = v[0];
        return _;
      });
    },
    values: function() {
      return f.map(function(g) {
        var v = o(g, 2), _ = v[1];
        return _;
      });
    }
  }, E = (0, t.default)(b, b.entries());
  return ti.default = E, ti;
}
var ri = {}, Ip;
function O_() {
  if (Ip) return ri;
  Ip = 1, Object.defineProperty(ri, "__esModule", {
    value: !0
  }), ri.default = void 0;
  var e = r(Di()), t = r(yu());
  function r(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function n(g, v) {
    return i(g) || a(g, v) || l(g, v) || o();
  }
  function o() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a(g, v) {
    var _ = g == null ? null : typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
    if (_ != null) {
      var A = [], O = !0, q = !1, I, T;
      try {
        for (_ = _.call(g); !(O = (I = _.next()).done) && (A.push(I.value), !(v && A.length === v)); O = !0)
          ;
      } catch (k) {
        q = !0, T = k;
      } finally {
        try {
          !O && _.return != null && _.return();
        } finally {
          if (q) throw T;
        }
      }
      return A;
    }
  }
  function i(g) {
    if (Array.isArray(g)) return g;
  }
  function s(g, v) {
    var _ = typeof Symbol < "u" && g[Symbol.iterator] || g["@@iterator"];
    if (!_) {
      if (Array.isArray(g) || (_ = l(g)) || v) {
        _ && (g = _);
        var A = 0, O = function() {
        };
        return { s: O, n: function() {
          return A >= g.length ? { done: !0 } : { done: !1, value: g[A++] };
        }, e: function(N) {
          throw N;
        }, f: O };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var q = !0, I = !1, T;
    return { s: function() {
      _ = _.call(g);
    }, n: function() {
      var N = _.next();
      return q = N.done, N;
    }, e: function(N) {
      I = !0, T = N;
    }, f: function() {
      try {
        !q && _.return != null && _.return();
      } finally {
        if (I) throw T;
      }
    } };
  }
  function l(g, v) {
    if (g) {
      if (typeof g == "string") return u(g, v);
      var _ = Object.prototype.toString.call(g).slice(8, -1);
      if (_ === "Object" && g.constructor && (_ = g.constructor.name), _ === "Map" || _ === "Set") return Array.from(g);
      if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return u(g, v);
    }
  }
  function u(g, v) {
    (v == null || v > g.length) && (v = g.length);
    for (var _ = 0, A = new Array(v); _ < v; _++)
      A[_] = g[_];
    return A;
  }
  for (var p = [], f = t.default.keys(), c = 0; c < f.length; c++) {
    var m = f[c], h = t.default.get(m), y = [];
    if (h) {
      for (var C = [].concat(h.baseConcepts, h.relatedConcepts), d = 0; d < C.length; d++) {
        var R = C[d];
        if (R.module === "HTML") {
          var b = R.concept;
          b != null && y.push(b);
        }
      }
      y.length > 0 && p.push([m, y]);
    }
  }
  var E = {
    entries: function() {
      return p;
    },
    forEach: function(v) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, A = s(p), O;
      try {
        for (A.s(); !(O = A.n()).done; ) {
          var q = n(O.value, 2), I = q[0], T = q[1];
          v.call(_, T, I, p);
        }
      } catch (k) {
        A.e(k);
      } finally {
        A.f();
      }
    },
    get: function(v) {
      var _ = p.find(function(A) {
        return A[0] === v;
      });
      return _ && _[1];
    },
    has: function(v) {
      return !!E.get(v);
    },
    keys: function() {
      return p.map(function(v) {
        var _ = n(v, 1), A = _[0];
        return A;
      });
    },
    values: function() {
      return p.map(function(v) {
        var _ = n(v, 2), A = _[1];
        return A;
      });
    }
  }, w = (0, e.default)(E, E.entries());
  return ri.default = w, ri;
}
var kp;
function A_() {
  if (kp) return rt;
  kp = 1, Object.defineProperty(rt, "__esModule", {
    value: !0
  }), rt.roles = rt.roleElements = rt.elementRoles = rt.dom = rt.aria = void 0;
  var e = a(YE()), t = a(KE()), r = a(yu()), n = a(M_()), o = a(O_());
  function a(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var i = e.default;
  rt.aria = i;
  var s = t.default;
  rt.dom = s;
  var l = r.default;
  rt.roles = l;
  var u = n.default;
  rt.elementRoles = u;
  var p = o.default;
  return rt.roleElements = p, rt;
}
var ut = A_(), ll = { exports: {} }, Dp;
function I_() {
  return Dp || (Dp = 1, (function(e) {
    var t = (function() {
      var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", a = {};
      function i(l, u) {
        if (!a[l]) {
          a[l] = {};
          for (var p = 0; p < l.length; p++)
            a[l][l.charAt(p)] = p;
        }
        return a[l][u];
      }
      var s = {
        compressToBase64: function(l) {
          if (l == null) return "";
          var u = s._compress(l, 6, function(p) {
            return n.charAt(p);
          });
          switch (u.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return u;
            case 1:
              return u + "===";
            case 2:
              return u + "==";
            case 3:
              return u + "=";
          }
        },
        decompressFromBase64: function(l) {
          return l == null ? "" : l == "" ? null : s._decompress(l.length, 32, function(u) {
            return i(n, l.charAt(u));
          });
        },
        compressToUTF16: function(l) {
          return l == null ? "" : s._compress(l, 15, function(u) {
            return r(u + 32);
          }) + " ";
        },
        decompressFromUTF16: function(l) {
          return l == null ? "" : l == "" ? null : s._decompress(l.length, 16384, function(u) {
            return l.charCodeAt(u) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(l) {
          for (var u = s.compress(l), p = new Uint8Array(u.length * 2), f = 0, c = u.length; f < c; f++) {
            var m = u.charCodeAt(f);
            p[f * 2] = m >>> 8, p[f * 2 + 1] = m % 256;
          }
          return p;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(l) {
          if (l == null)
            return s.decompress(l);
          for (var u = new Array(l.length / 2), p = 0, f = u.length; p < f; p++)
            u[p] = l[p * 2] * 256 + l[p * 2 + 1];
          var c = [];
          return u.forEach(function(m) {
            c.push(r(m));
          }), s.decompress(c.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(l) {
          return l == null ? "" : s._compress(l, 6, function(u) {
            return o.charAt(u);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(l) {
          return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"), s._decompress(l.length, 32, function(u) {
            return i(o, l.charAt(u));
          }));
        },
        compress: function(l) {
          return s._compress(l, 16, function(u) {
            return r(u);
          });
        },
        _compress: function(l, u, p) {
          if (l == null) return "";
          var f, c, m = {}, h = {}, y = "", C = "", d = "", R = 2, b = 3, E = 2, w = [], g = 0, v = 0, _;
          for (_ = 0; _ < l.length; _ += 1)
            if (y = l.charAt(_), Object.prototype.hasOwnProperty.call(m, y) || (m[y] = b++, h[y] = !0), C = d + y, Object.prototype.hasOwnProperty.call(m, C))
              d = C;
            else {
              if (Object.prototype.hasOwnProperty.call(h, d)) {
                if (d.charCodeAt(0) < 256) {
                  for (f = 0; f < E; f++)
                    g = g << 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++;
                  for (c = d.charCodeAt(0), f = 0; f < 8; f++)
                    g = g << 1 | c & 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = c >> 1;
                } else {
                  for (c = 1, f = 0; f < E; f++)
                    g = g << 1 | c, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = 0;
                  for (c = d.charCodeAt(0), f = 0; f < 16; f++)
                    g = g << 1 | c & 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = c >> 1;
                }
                R--, R == 0 && (R = Math.pow(2, E), E++), delete h[d];
              } else
                for (c = m[d], f = 0; f < E; f++)
                  g = g << 1 | c & 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = c >> 1;
              R--, R == 0 && (R = Math.pow(2, E), E++), m[C] = b++, d = String(y);
            }
          if (d !== "") {
            if (Object.prototype.hasOwnProperty.call(h, d)) {
              if (d.charCodeAt(0) < 256) {
                for (f = 0; f < E; f++)
                  g = g << 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++;
                for (c = d.charCodeAt(0), f = 0; f < 8; f++)
                  g = g << 1 | c & 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = c >> 1;
              } else {
                for (c = 1, f = 0; f < E; f++)
                  g = g << 1 | c, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = 0;
                for (c = d.charCodeAt(0), f = 0; f < 16; f++)
                  g = g << 1 | c & 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = c >> 1;
              }
              R--, R == 0 && (R = Math.pow(2, E), E++), delete h[d];
            } else
              for (c = m[d], f = 0; f < E; f++)
                g = g << 1 | c & 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = c >> 1;
            R--, R == 0 && (R = Math.pow(2, E), E++);
          }
          for (c = 2, f = 0; f < E; f++)
            g = g << 1 | c & 1, v == u - 1 ? (v = 0, w.push(p(g)), g = 0) : v++, c = c >> 1;
          for (; ; )
            if (g = g << 1, v == u - 1) {
              w.push(p(g));
              break;
            } else v++;
          return w.join("");
        },
        decompress: function(l) {
          return l == null ? "" : l == "" ? null : s._decompress(l.length, 32768, function(u) {
            return l.charCodeAt(u);
          });
        },
        _decompress: function(l, u, p) {
          var f = [], c = 4, m = 4, h = 3, y = "", C = [], d, R, b, E, w, g, v, _ = { val: p(0), position: u, index: 1 };
          for (d = 0; d < 3; d += 1)
            f[d] = d;
          for (b = 0, w = Math.pow(2, 2), g = 1; g != w; )
            E = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), b |= (E > 0 ? 1 : 0) * g, g <<= 1;
          switch (b) {
            case 0:
              for (b = 0, w = Math.pow(2, 8), g = 1; g != w; )
                E = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), b |= (E > 0 ? 1 : 0) * g, g <<= 1;
              v = r(b);
              break;
            case 1:
              for (b = 0, w = Math.pow(2, 16), g = 1; g != w; )
                E = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), b |= (E > 0 ? 1 : 0) * g, g <<= 1;
              v = r(b);
              break;
            case 2:
              return "";
          }
          for (f[3] = v, R = v, C.push(v); ; ) {
            if (_.index > l)
              return "";
            for (b = 0, w = Math.pow(2, h), g = 1; g != w; )
              E = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), b |= (E > 0 ? 1 : 0) * g, g <<= 1;
            switch (v = b) {
              case 0:
                for (b = 0, w = Math.pow(2, 8), g = 1; g != w; )
                  E = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), b |= (E > 0 ? 1 : 0) * g, g <<= 1;
                f[m++] = r(b), v = m - 1, c--;
                break;
              case 1:
                for (b = 0, w = Math.pow(2, 16), g = 1; g != w; )
                  E = _.val & _.position, _.position >>= 1, _.position == 0 && (_.position = u, _.val = p(_.index++)), b |= (E > 0 ? 1 : 0) * g, g <<= 1;
                f[m++] = r(b), v = m - 1, c--;
                break;
              case 2:
                return C.join("");
            }
            if (c == 0 && (c = Math.pow(2, h), h++), f[v])
              y = f[v];
            else if (v === m)
              y = R + R.charAt(0);
            else
              return null;
            C.push(y), f[m++] = R + y.charAt(0), c--, R = y, c == 0 && (c = Math.pow(2, h), h++);
          }
        }
      };
      return s;
    })();
    e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return t;
    });
  })(ll)), ll.exports;
}
var k_ = I_();
const D_ = /* @__PURE__ */ on(k_);
function Yh(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const N_ = (e, t, r, n, o, a, i) => {
  const s = n + r.indent, l = r.colors;
  return e.map((u) => {
    const p = t[u];
    let f = i(p, r, s, o, a);
    return typeof p != "string" && (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + s + f + r.spacingOuter + n), f = "{" + f + "}"), r.spacingInner + n + l.prop.open + u + l.prop.close + "=" + l.value.open + f + l.value.close;
  }).join("");
}, L_ = 3, j_ = (e, t, r, n, o, a) => e.map((i) => {
  const s = typeof i == "string" ? Kh(i, t) : a(i, t, r, n, o);
  return s === "" && typeof i == "object" && i !== null && i.nodeType !== L_ ? "" : t.spacingOuter + r + s;
}).join(""), Kh = (e, t) => {
  const r = t.colors.content;
  return r.open + Yh(e) + r.close;
}, F_ = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + Yh(e) + "-->" + r.close;
}, B_ = (e, t, r, n, o) => {
  const a = n.colors.tag;
  return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close;
}, U_ = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, $_ = 1, Qh = 3, Zh = 8, Xh = 11, H_ = /^((HTML|SVG)\w*)?Element$/, Jh = (e) => {
  const {
    tagName: t
  } = e;
  return !!(typeof t == "string" && t.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is"));
}, V_ = (e) => {
  const t = e.constructor.name, {
    nodeType: r
  } = e;
  return r === $_ && (H_.test(t) || Jh(e)) || r === Qh && t === "Text" || r === Zh && t === "Comment" || r === Xh && t === "DocumentFragment";
};
function z_(e) {
  return e.nodeType === Qh;
}
function W_(e) {
  return e.nodeType === Zh;
}
function ul(e) {
  return e.nodeType === Xh;
}
function G_(e) {
  return {
    test: (t) => {
      var r;
      return ((t == null || (r = t.constructor) == null ? void 0 : r.name) || Jh(t)) && V_(t);
    },
    serialize: (t, r, n, o, a, i) => {
      if (z_(t))
        return Kh(t.data, r);
      if (W_(t))
        return F_(t.data, r);
      const s = ul(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++o > r.maxDepth ? U_(s, r) : B_(s, N_(ul(t) ? [] : Array.from(t.attributes).map((l) => l.name).sort(), ul(t) ? {} : Array.from(t.attributes).reduce((l, u) => (l[u.name] = u.value, l), {}), r, n + r.indent, o, a, i), j_(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n);
    }
  };
}
let eb = null, gu = null, Ru = null;
try {
  const e = module && module.require;
  gu = e.call(module, "fs").readFileSync, Ru = e.call(module, "@babel/code-frame").codeFrameColumns, eb = e.call(module, "picocolors");
} catch {
}
function Y_(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), o = n.split(":"), [a, i, s] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
  let l = "";
  try {
    l = gu(a, "utf-8");
  } catch {
    return "";
  }
  const u = Ru(l, {
    start: {
      line: i,
      column: s
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return eb.dim(n) + `
` + u + `
`;
}
function K_() {
  if (!gu || !Ru)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return Y_(t);
}
const tb = 3;
function cl() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function Eu() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function rb(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function zt(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const Q_ = () => {
  if (typeof process > "u")
    return !1;
  let e;
  try {
    var t;
    const r = (t = process.env) == null ? void 0 : t.COLORS;
    r && (e = JSON.parse(r));
  } catch {
  }
  return typeof e == "boolean" ? e : process.versions !== void 0 && process.versions.node !== void 0;
}, {
  DOMCollection: Z_
} = Fh.plugins, X_ = 1, J_ = 8;
function ew(e) {
  return e.nodeType !== J_ && (e.nodeType !== X_ || !e.matches(Ee().defaultIgnore));
}
function Yr(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = Eu().body), typeof t != "number" && (t = typeof process < "u" && typeof process.env < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: o = ew,
    ...a
  } = r, i = Fh.format(e, {
    plugins: [G_(o), Z_],
    printFunctionName: !1,
    highlight: Q_(),
    ...a
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Np = function() {
  const e = K_();
  console.log(e ? Yr(...arguments) + `

` + e : Yr(...arguments));
};
let Er = {
  testIdAttribute: "data-testid",
  asyncUtilTimeout: 1e3,
  // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
  // forcing react-testing-library to wrap all async functions would've been
  // a total nightmare (consider wrapping every findBy* query and then also
  // updating `within` so those would be wrapped too. Total nightmare).
  // so we have this config option that's really only intended for
  // react-testing-library to use. For that reason, this feature will remain
  // undocumented.
  asyncWrapper: (e) => e(),
  unstable_advanceTimersWrapper: (e) => e(),
  eventWrapper: (e) => e(),
  // default value for the `hidden` option in `ByRole` queries
  defaultHidden: !1,
  // default value for the `ignore` option in `ByText` queries
  defaultIgnore: "script, style",
  // showOriginalStackTrace flag to show the full error stack traces for async errors
  showOriginalStackTrace: !1,
  // throw errors w/ suggestions for better queries. Opt in so off by default.
  throwSuggestions: !1,
  // called when getBy* queries fail. (message, container) => Error
  getElementError(e, t) {
    const r = Yr(t), n = new Error([e, "Ignored nodes: comments, " + Er.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return n.name = "TestingLibraryElementError", n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function tw(e) {
  try {
    return Er._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    Er._disableExpensiveErrorDiagnostics = !1;
  }
}
function rw(e) {
  typeof e == "function" && (e = e(Er)), Er = {
    ...Er,
    ...e
  };
}
function Ee() {
  return Er;
}
const nw = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function nb(e) {
  return nw.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === tb ? e.textContent : Array.from(e.childNodes).map((t) => nb(t)).join("");
}
function Ol(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = nb(e) : t = e.value || e.textContent, t;
}
function ob(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!ow(e)) return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function ow(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function ab(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const o = t.getAttribute("aria-labelledby"), a = o ? o.split(" ") : [];
  return a.length ? a.map((i) => {
    const s = e.querySelector('[id="' + i + '"]');
    return s ? {
      content: Ol(s),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(ob(t)).map((i) => {
    const s = Ol(i), u = Array.from(i.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((p) => p.matches(n))[0];
    return {
      content: s,
      formControl: u
    };
  });
}
function ib(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function sn(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  ib(r);
  const o = n(e);
  return typeof r == "string" || typeof r == "number" ? o.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(o, t) : lb(r, o);
}
function Bt(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  ib(r);
  const o = n(e);
  return r instanceof Function ? r(o, t) : r instanceof RegExp ? lb(r, o) : o === String(r);
}
function sb(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (n) => {
    let o = n;
    return o = t ? o.trim() : o, o = r ? o.replace(/\s+/g, " ") : o, o;
  };
}
function Ir(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: n
  } = e;
  if (!n)
    return sb({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function lb(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function zs(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === tb && !!t.textContent).map((t) => t.textContent).join("");
}
const aw = iw(ut.elementRoles);
function ub(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function Cu(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = ub
  } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === "hidden")
    return !0;
  let o = e;
  for (; o; ) {
    if (r(o))
      return !0;
    o = o.parentElement;
  }
  return !1;
}
function _u(e) {
  for (const {
    match: t,
    roles: r
  } of aw)
    if (t(e))
      return [...r];
  return [];
}
function iw(e) {
  function t(i) {
    let {
      name: s,
      attributes: l
    } = i;
    return "" + s + l.map((u) => {
      let {
        name: p,
        value: f,
        constraints: c = []
      } = u;
      const m = c.indexOf("undefined") !== -1, h = c.indexOf("set") !== -1;
      return typeof f < "u" ? "[" + p + '="' + f + '"]' : m ? ":not([" + p + "])" : h ? "[" + p + "]:not([" + p + '=""])' : "[" + p + "]";
    }).join("");
  }
  function r(i) {
    let {
      attributes: s = []
    } = i;
    return s.length;
  }
  function n(i, s) {
    let {
      specificity: l
    } = i, {
      specificity: u
    } = s;
    return u - l;
  }
  function o(i) {
    let {
      attributes: s = []
    } = i;
    const l = s.findIndex((p) => p.value && p.name === "type" && p.value === "text");
    l >= 0 && (s = [...s.slice(0, l), ...s.slice(l + 1)]);
    const u = t({
      ...i,
      attributes: s
    });
    return (p) => l >= 0 && p.type !== "text" ? !1 : p.matches(u);
  }
  let a = [];
  for (const [i, s] of e.entries())
    a = [...a, {
      match: o(i),
      roles: Array.from(s),
      specificity: r(i)
    }];
  return a.sort(n);
}
function sw(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(o) {
    return [o, ...Array.from(o.children).reduce((a, i) => [...a, ...n(i)], [])];
  }
  return n(e).filter((o) => r === !1 ? Cu(o) === !1 : !0).reduce((o, a) => {
    let i = [];
    return a.hasAttribute("role") ? i = a.getAttribute("role").split(" ").slice(0, 1) : i = _u(a), i.reduce((s, l) => Array.isArray(s[l]) ? {
      ...s,
      [l]: [...s[l], a]
    } : {
      ...s,
      [l]: [a]
    }, o);
  }, {});
}
function lw(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const o = sw(e, {
    hidden: r
  });
  return Object.entries(o).filter((a) => {
    let [i] = a;
    return i !== "generic";
  }).map((a) => {
    let [i, s] = a;
    const l = "-".repeat(50), u = s.map((p) => {
      const f = 'Name "' + vu(p, {
        computedStyleSupportsPseudoElements: Ee().computedStyleSupportsPseudoElements
      }) + `":
`, c = Yr(p.cloneNode(!1));
      if (n) {
        const m = 'Description "' + Gh(p, {
          computedStyleSupportsPseudoElements: Ee().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + f + m + c;
      }
      return "" + f + c;
    }).join(`

`);
    return i + `:

` + u + `

` + l;
  }).join(`
`);
}
function uw(e) {
  return e.tagName === "OPTION" ? e.selected : Ni(e, "aria-selected");
}
function cw(e) {
  return e.getAttribute("aria-busy") === "true";
}
function dw(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : Ni(e, "aria-checked");
}
function fw(e) {
  return Ni(e, "aria-pressed");
}
function pw(e) {
  var t, r;
  return (t = (r = Ni(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function mw(e) {
  return Ni(e, "aria-expanded");
}
function Ni(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function hw(e) {
  const t = {
    H1: 1,
    H2: 2,
    H3: 3,
    H4: 4,
    H5: 5,
    H6: 6
  };
  return e.getAttribute("aria-level") && Number(e.getAttribute("aria-level")) || t[e.tagName];
}
function bw(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function vw(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function yw(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function gw(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const Lp = sb();
function Rw(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function jp(e) {
  return new RegExp(Rw(e.toLowerCase()), "i");
}
function Jt(e, t, r, n) {
  let {
    variant: o,
    name: a
  } = n, i = "";
  const s = {}, l = [["Role", "TestId"].includes(e) ? r : jp(r)];
  a && (s.name = jp(a)), e === "Role" && Cu(t) && (s.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(s).length > 0 && l.push(s);
  const u = o + "By" + e;
  return {
    queryName: e,
    queryMethod: u,
    queryArgs: l,
    variant: o,
    warning: i,
    toString() {
      i && console.warn(i);
      let [p, f] = l;
      return p = typeof p == "string" ? "'" + p + "'" : p, f = f ? ", { " + Object.entries(f).map((c) => {
        let [m, h] = c;
        return m + ": " + h;
      }).join(", ") + " }" : "", u + "(" + p + f + ")";
    }
  };
}
function er(e, t, r) {
  return r && !0;
}
function Al(e, t, r) {
  var n, o;
  if (t === void 0 && (t = "get"), e.matches(Ee().defaultIgnore))
    return;
  const a = (n = e.getAttribute("role")) != null ? n : (o = _u(e)) == null ? void 0 : o[0];
  if (a !== "generic" && er("Role", r, a))
    return Jt("Role", e, a, {
      variant: t,
      name: vu(e, {
        computedStyleSupportsPseudoElements: Ee().computedStyleSupportsPseudoElements
      })
    });
  const i = ab(document, e).map((c) => c.content).join(" ");
  if (er("LabelText", r, i))
    return Jt("LabelText", e, i, {
      variant: t
    });
  const s = e.getAttribute("placeholder");
  if (er("PlaceholderText", r, s))
    return Jt("PlaceholderText", e, s, {
      variant: t
    });
  const l = Lp(zs(e));
  if (er("Text", r, l))
    return Jt("Text", e, l, {
      variant: t
    });
  if (er("DisplayValue", r, e.value))
    return Jt("DisplayValue", e, Lp(e.value), {
      variant: t
    });
  const u = e.getAttribute("alt");
  if (er("AltText", r, u))
    return Jt("AltText", e, u, {
      variant: t
    });
  const p = e.getAttribute("title");
  if (er("Title", r, p))
    return Jt("Title", e, p, {
      variant: t
    });
  const f = e.getAttribute(Ee().testIdAttribute);
  if (er("TestId", r, f))
    return Jt("TestId", e, f, {
      variant: t
    });
}
function Zi(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Ew(e, t) {
  let {
    container: r = Eu(),
    timeout: n = Ee().asyncUtilTimeout,
    showOriginalStackTrace: o = Ee().showOriginalStackTrace,
    stackTraceError: a,
    interval: i = 50,
    onTimeout: s = (u) => (Object.defineProperty(u, "message", {
      value: Ee().getElementError(u.message, r).message
    }), u),
    mutationObserverOptions: l = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (u, p) => {
    let f, c, m, h = !1, y = "idle";
    const C = setTimeout(w, n), d = cl();
    if (d) {
      const {
        unstable_advanceTimersWrapper: g
      } = Ee();
      for (E(); !h; ) {
        if (!cl()) {
          const v = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          o || Zi(v, a), p(v);
          return;
        }
        if (await g(async () => {
          jest.advanceTimersByTime(i);
        }), h)
          break;
        E();
      }
    } else {
      try {
        zt(r);
      } catch (v) {
        p(v);
        return;
      }
      c = setInterval(b, i);
      const {
        MutationObserver: g
      } = rb(r);
      m = new g(b), m.observe(r, l), E();
    }
    function R(g, v) {
      h = !0, clearTimeout(C), d || (clearInterval(c), m.disconnect()), g ? p(g) : u(v);
    }
    function b() {
      if (cl()) {
        const g = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return o || Zi(g, a), p(g);
      } else
        return E();
    }
    function E() {
      if (y !== "pending")
        try {
          const g = tw(e);
          typeof g?.then == "function" ? (y = "pending", g.then((v) => {
            y = "resolved", R(null, v);
          }, (v) => {
            y = "rejected", f = v;
          })) : R(null, g);
        } catch (g) {
          f = g;
        }
    }
    function w() {
      let g;
      f ? (g = f, !o && g.name === "TestingLibraryElementError" && Zi(g, a)) : (g = new Error("Timed out in waitFor."), o || Zi(g, a)), R(s(g), null);
    }
  });
}
function Cw(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return Ee().asyncWrapper(() => Ew(e, {
    stackTraceError: r,
    ...t
  }));
}
function cb(e, t) {
  return Ee().getElementError(e, t);
}
function _w(e, t) {
  return cb(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function Ws(e, t, r, n) {
  let {
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  } = n === void 0 ? {} : n;
  const l = o ? Bt : sn, u = Ir({
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((p) => l(p.getAttribute(e), p, r, u));
}
function Ss(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (i.length > 1) {
      const s = i.map((l) => cb(null, l).message).join(`

`);
      throw _w(t(r, ...o) + `

Here are the matching elements:

` + s, r);
    }
    return i[0] || null;
  };
}
function db(e, t) {
  return Ee().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function ww(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (!i.length)
      throw Ee().getElementError(t(r, ...o), r);
    return i;
  };
}
function Ps(e) {
  return (t, r, n, o) => Cw(() => e(t, r, n), {
    container: t,
    ...o
  });
}
const Ur = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const s = e(n, ...a), [{
    suggest: l = Ee().throwSuggestions
  } = {}] = a.slice(-1);
  if (s && l) {
    const u = Al(s, r);
    if (u && !t.endsWith(u.queryName))
      throw db(u.toString(), n);
  }
  return s;
}, ct = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const s = e(n, ...a), [{
    suggest: l = Ee().throwSuggestions
  } = {}] = a.slice(-1);
  if (s.length && l) {
    const u = [...new Set(s.map((p) => {
      var f;
      return (f = Al(p, r)) == null ? void 0 : f.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      u.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        Al(s[0], r).queryName
      )
    )
      throw db(u[0], n);
  }
  return s;
};
function kr(e, t, r) {
  const n = Ur(Ss(e, t), e.name, "query"), o = ww(e, r), a = Ss(o, t), i = Ur(a, e.name, "get"), s = ct(o, e.name.replace("query", "get"), "getAll"), l = Ps(ct(o, e.name, "findAll")), u = Ps(Ur(a, e.name, "find"));
  return [n, s, i, l, u];
}
function Tw(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Ol(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const Sw = function(e, t, r) {
  let {
    exact: n = !0,
    trim: o,
    collapseWhitespace: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  const s = n ? Bt : sn, l = Ir({
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  });
  return Tw(e).filter((p) => {
    let {
      node: f,
      textToMatch: c
    } = p;
    return s(c, f, t, l);
  }).map((p) => {
    let {
      node: f
    } = p;
    return f;
  });
}, Ci = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  } = r === void 0 ? {} : r;
  zt(e);
  const l = o ? Bt : sn, u = Ir({
    collapseWhitespace: a,
    trim: i,
    normalizer: s
  }), p = Array.from(e.querySelectorAll("*")).filter((f) => ob(f).length || f.hasAttribute("aria-labelledby")).reduce((f, c) => {
    const m = ab(e, c, {
      selector: n
    });
    m.filter((y) => !!y.formControl).forEach((y) => {
      l(y.content, y.formControl, t, u) && y.formControl && f.push(y.formControl);
    });
    const h = m.filter((y) => !!y.content).map((y) => y.content);
    return l(h.join(" "), c, t, u) && f.push(c), h.length > 1 && h.forEach((y, C) => {
      l(y, c, t, u) && f.push(c);
      const d = [...h];
      d.splice(C, 1), d.length > 1 && l(d.join(" "), c, t, u) && f.push(c);
    }), f;
  }, []).concat(Ws("aria-label", e, t, {
    exact: o,
    normalizer: u
  }));
  return Array.from(new Set(p)).filter((f) => f.matches(n));
}, xr = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    n[o - 2] = arguments[o];
  const a = Ci(e, t, ...n);
  if (!a.length) {
    const i = Sw(e, t, ...n);
    if (i.length) {
      const s = i.map((l) => Pw(e, l)).filter((l) => !!l);
      throw s.length ? Ee().getElementError(s.map((l) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + l + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + l + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : Ee().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw Ee().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return a;
};
function Pw(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const fb = (e, t) => "Found multiple elements with the text of: " + t, xw = Ur(Ss(Ci, fb), Ci.name, "query"), pb = Ss(xr, fb), qw = Ps(ct(xr, xr.name, "findAll")), Mw = Ps(Ur(pb, xr.name, "find")), Ow = ct(xr, xr.name, "getAll"), Aw = Ur(pb, xr.name, "get"), Iw = ct(Ci, Ci.name, "queryAll"), Il = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return zt(t[0]), Ws("placeholder", ...t);
}, kw = (e, t) => "Found multiple elements with the placeholder text of: " + t, Dw = (e, t) => "Unable to find an element with the placeholder text of: " + t, Nw = ct(Il, Il.name, "queryAll"), [Lw, jw, Fw, Bw, Uw] = kr(Il, kw, Dw), kl = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    ignore: s = Ee().defaultIgnore,
    normalizer: l
  } = r === void 0 ? {} : r;
  zt(e);
  const u = o ? Bt : sn, p = Ir({
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  });
  let f = [];
  return typeof e.matches == "function" && e.matches(n) && (f = [e]), [...f, ...Array.from(e.querySelectorAll(n))].filter((c) => !s || !c.matches(s)).filter((c) => u(zs(c), c, t, p));
}, $w = (e, t) => "Found multiple elements with the text: " + t, Hw = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: n,
    trim: o,
    normalizer: a,
    selector: i
  } = r, l = Ir({
    collapseWhitespace: n,
    trim: o,
    normalizer: a
  })(t.toString()), u = l !== t.toString(), p = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (u ? l + " (normalized from '" + t + "')" : t) + (p ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, Vw = ct(kl, kl.name, "queryAll"), [zw, Ww, Gw, Yw, Kw] = kr(kl, $w, Hw), Dl = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  zt(e);
  const s = n ? Bt : sn, l = Ir({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((u) => u.tagName === "SELECT" ? Array.from(u.options).filter((f) => f.selected).some((f) => s(zs(f), f, t, l)) : s(u.value, u, t, l));
}, Qw = (e, t) => "Found multiple elements with the display value: " + t + ".", Zw = (e, t) => "Unable to find an element with the display value: " + t + ".", Xw = ct(Dl, Dl.name, "queryAll"), [Jw, eT, tT, rT, nT] = kr(Dl, Qw, Zw), oT = /^(img|input|area|.+-.+)$/i, Nl = function(e, t, r) {
  return r === void 0 && (r = {}), zt(e), Ws("alt", e, t, r).filter((n) => oT.test(n.tagName));
}, aT = (e, t) => "Found multiple elements with the alt text: " + t, iT = (e, t) => "Unable to find an element with the alt text: " + t, sT = ct(Nl, Nl.name, "queryAll"), [lT, uT, cT, dT, fT] = kr(Nl, aT, iT), pT = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, Ll = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  zt(e);
  const s = n ? Bt : sn, l = Ir({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((u) => s(u.getAttribute("title"), u, t, l) || pT(u) && s(zs(u), u, t, l));
}, mT = (e, t) => "Found multiple elements with the title: " + t + ".", hT = (e, t) => "Unable to find an element with the title: " + t + ".", bT = ct(Ll, Ll.name, "queryAll"), [vT, yT, gT, RT, ET] = kr(Ll, mT, hT), jl = function(e, t, r) {
  let {
    hidden: n = Ee().defaultHidden,
    name: o,
    description: a,
    queryFallbacks: i = !1,
    selected: s,
    busy: l,
    checked: u,
    pressed: p,
    current: f,
    level: c,
    expanded: m,
    value: {
      now: h,
      min: y,
      max: C,
      text: d
    } = {}
  } = r === void 0 ? {} : r;
  if (zt(e), s !== void 0) {
    var R;
    if (((R = ut.roles.get(t)) == null ? void 0 : R.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (l !== void 0) {
    var b;
    if (((b = ut.roles.get(t)) == null ? void 0 : b.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var E;
    if (((E = ut.roles.get(t)) == null ? void 0 : E.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var w;
    if (((w = ut.roles.get(t)) == null ? void 0 : w.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (f !== void 0) {
    var g;
    if (((g = ut.roles.get(t)) == null ? void 0 : g.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (c !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (h !== void 0) {
    var v;
    if (((v = ut.roles.get(t)) == null ? void 0 : v.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (C !== void 0) {
    var _;
    if (((_ = ut.roles.get(t)) == null ? void 0 : _.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (y !== void 0) {
    var A;
    if (((A = ut.roles.get(t)) == null ? void 0 : A.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var O;
    if (((O = ut.roles.get(t)) == null ? void 0 : O.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (m !== void 0) {
    var q;
    if (((q = ut.roles.get(t)) == null ? void 0 : q.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const I = /* @__PURE__ */ new WeakMap();
  function T(k) {
    return I.has(k) || I.set(k, ub(k)), I.get(k);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    CT(t)
  )).filter((k) => {
    if (k.hasAttribute("role")) {
      const G = k.getAttribute("role");
      if (i)
        return G.split(" ").filter(Boolean).some((K) => K === t);
      const [Q] = G.split(" ");
      return Q === t;
    }
    return _u(k).some((G) => G === t);
  }).filter((k) => {
    if (s !== void 0)
      return s === uw(k);
    if (l !== void 0)
      return l === cw(k);
    if (u !== void 0)
      return u === dw(k);
    if (p !== void 0)
      return p === fw(k);
    if (f !== void 0)
      return f === pw(k);
    if (m !== void 0)
      return m === mw(k);
    if (c !== void 0)
      return c === hw(k);
    if (h !== void 0 || C !== void 0 || y !== void 0 || d !== void 0) {
      let Y = !0;
      if (h !== void 0 && Y && (Y = h === bw(k)), C !== void 0 && Y && (Y = C === vw(k)), y !== void 0 && Y && (Y = y === yw(k)), d !== void 0) {
        var N;
        Y && (Y = Bt((N = gw(k)) != null ? N : null, k, d, (G) => G));
      }
      return Y;
    }
    return !0;
  }).filter((k) => o === void 0 ? !0 : Bt(vu(k, {
    computedStyleSupportsPseudoElements: Ee().computedStyleSupportsPseudoElements
  }), k, o, (N) => N)).filter((k) => a === void 0 ? !0 : Bt(Gh(k, {
    computedStyleSupportsPseudoElements: Ee().computedStyleSupportsPseudoElements
  }), k, a, (N) => N)).filter((k) => n === !1 ? Cu(k, {
    isSubtreeInaccessible: T
  }) === !1 : !0);
};
function CT(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = ut.roleElements.get(e)) != null ? t : /* @__PURE__ */ new Set(), o = new Set(Array.from(n).map((a) => {
    let {
      name: i
    } = a;
    return i;
  }));
  return [r].concat(Array.from(o)).join(",");
}
const mb = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, _T = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + mb(n);
}, wT = function(e, t, r) {
  let {
    hidden: n = Ee().defaultHidden,
    name: o,
    description: a
  } = r === void 0 ? {} : r;
  if (Ee()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + mb(o);
  let i = "";
  Array.from(e.children).forEach((p) => {
    i += lw(p, {
      hidden: n,
      includeDescription: a !== void 0
    });
  });
  let s;
  i.length === 0 ? n === !1 ? s = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : s = "There are no available roles." : s = (`
Here are the ` + (n === !1 ? "accessible" : "available") + ` roles:

  ` + i.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let l = "";
  o === void 0 ? l = "" : typeof o == "string" ? l = ' and name "' + o + '"' : l = " and name `" + o + "`";
  let u = "";
  return a === void 0 ? u = "" : typeof a == "string" ? u = ' and description "' + a + '"' : u = " and description `" + a + "`", (`
Unable to find an ` + (n === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + l + u + `

` + s).trim();
}, TT = ct(jl, jl.name, "queryAll"), [ST, PT, xT, qT, MT] = kr(jl, _T, wT), wu = () => Ee().testIdAttribute, Fl = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return zt(t[0]), Ws(wu(), ...t);
}, OT = (e, t) => "Found multiple elements by: [" + wu() + '="' + t + '"]', AT = (e, t) => "Unable to find an element by: [" + wu() + '="' + t + '"]', IT = ct(Fl, Fl.name, "queryAll"), [kT, DT, NT, LT, jT] = kr(Fl, OT, AT);
var Bl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: Iw,
  queryByLabelText: xw,
  getAllByLabelText: Ow,
  getByLabelText: Aw,
  findAllByLabelText: qw,
  findByLabelText: Mw,
  queryByPlaceholderText: Lw,
  queryAllByPlaceholderText: Nw,
  getByPlaceholderText: Fw,
  getAllByPlaceholderText: jw,
  findAllByPlaceholderText: Bw,
  findByPlaceholderText: Uw,
  queryByText: zw,
  queryAllByText: Vw,
  getByText: Gw,
  getAllByText: Ww,
  findAllByText: Yw,
  findByText: Kw,
  queryByDisplayValue: Jw,
  queryAllByDisplayValue: Xw,
  getByDisplayValue: tT,
  getAllByDisplayValue: eT,
  findAllByDisplayValue: rT,
  findByDisplayValue: nT,
  queryByAltText: lT,
  queryAllByAltText: sT,
  getByAltText: cT,
  getAllByAltText: uT,
  findAllByAltText: dT,
  findByAltText: fT,
  queryByTitle: vT,
  queryAllByTitle: bT,
  getByTitle: gT,
  getAllByTitle: yT,
  findAllByTitle: RT,
  findByTitle: ET,
  queryByRole: ST,
  queryAllByRole: TT,
  getAllByRole: PT,
  getByRole: xT,
  findAllByRole: qT,
  findByRole: MT,
  queryByTestId: kT,
  queryAllByTestId: IT,
  getByTestId: NT,
  getAllByTestId: DT,
  findAllByTestId: LT,
  findByTestId: jT
});
function hb(e, t, r) {
  return t === void 0 && (t = Bl), r === void 0 && (r = {}), Object.keys(t).reduce((n, o) => {
    const a = t[o];
    return n[o] = a.bind(null, e), n;
  }, r);
}
const Fp = {
  // Clipboard Events
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Composition Events
  compositionEnd: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionStart: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  compositionUpdate: {
    EventType: "CompositionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Keyboard Events
  keyDown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyPress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  keyUp: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      charCode: 0,
      composed: !0
    }
  },
  // Focus Events
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusIn: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusOut: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // Form Events
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  invalid: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !0
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  reset: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  // Mouse Events
  click: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      button: 0,
      composed: !0
    }
  },
  contextMenu: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblClick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drag: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragEnd: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragEnter: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragExit: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragLeave: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  dragOver: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dragStart: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  drop: {
    EventType: "DragEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseDown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseEnter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseLeave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseMove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOut: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseOver: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseUp: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Selection Events
  select: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Touch Events
  touchCancel: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  touchEnd: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchMove: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  touchStart: {
    EventType: "TouchEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // UI Events
  resize: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  scroll: {
    EventType: "UIEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Wheel Events
  wheel: {
    EventType: "WheelEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  // Media Events
  abort: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlay: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  canPlayThrough: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  durationChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  emptied: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  encrypted: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  ended: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedData: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadedMetadata: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  loadStart: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pause: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  play: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  playing: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  progress: {
    EventType: "ProgressEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  rateChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeked: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  seeking: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  stalled: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  suspend: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  timeUpdate: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  volumeChange: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  waiting: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Events
  load: {
    // TODO: load events can be UIEvent or Event depending on what generated them
    // This is where this abstraction breaks down.
    // But the common targets are <img />, <script /> and window.
    // Neither of these targets receive a UIEvent
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  error: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  // Animation Events
  animationStart: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationEnd: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  animationIteration: {
    EventType: "AnimationEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // Transition Events
  transitionCancel: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionEnd: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  transitionRun: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  transitionStart: {
    EventType: "TransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // pointer events
  pointerOver: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerEnter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerDown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerMove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerUp: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerCancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerOut: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerLeave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  gotPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  lostPointerCapture: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  // history events
  popState: {
    EventType: "PopStateEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  // window events
  offline: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  online: {
    EventType: "Event",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pageHide: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  },
  pageShow: {
    EventType: "PageTransitionEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
}, Bp = {
  doubleClick: "dblClick"
};
function _i(e, t) {
  return Ee().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function dl(e, t, r, n) {
  let {
    EventType: o = "Event",
    defaultInit: a = {}
  } = n === void 0 ? {} : n;
  if (!t)
    throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  const i = {
    ...a,
    ...r
  }, {
    target: {
      value: s,
      files: l,
      ...u
    } = {}
  } = i;
  s !== void 0 && FT(t, s), l !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: l
  }), Object.assign(t, u);
  const p = rb(t), f = p[o] || p.Event;
  let c;
  if (typeof f == "function")
    c = new f(e, i);
  else {
    c = p.document.createEvent(o);
    const {
      bubbles: h,
      cancelable: y,
      detail: C,
      ...d
    } = i;
    c.initEvent(e, h, y, C), Object.keys(d).forEach((R) => {
      c[R] = d[R];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((h) => {
    const y = i[h];
    typeof y == "object" && (typeof p.DataTransfer == "function" ? Object.defineProperty(c, h, {
      value: Object.getOwnPropertyNames(y).reduce((C, d) => (Object.defineProperty(C, d, {
        value: y[d]
      }), C), new p.DataTransfer())
    }) : Object.defineProperty(c, h, {
      value: y
    }));
  }), c;
}
Object.keys(Fp).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = Fp[e], n = e.toLowerCase();
  dl[e] = (o, a) => dl(n, o, a, {
    EventType: t,
    defaultInit: r
  }), _i[e] = (o, a) => _i(o, dl[e](o, a));
});
function FT(e, t) {
  const {
    set: r
  } = Object.getOwnPropertyDescriptor(e, "value") || {}, n = Object.getPrototypeOf(e), {
    set: o
  } = Object.getOwnPropertyDescriptor(n, "value") || {};
  if (o && r !== o)
    o.call(e, t);
  else if (r)
    r.call(e, t);
  else
    throw new Error("The given element does not have a value setter");
}
Object.keys(Bp).forEach((e) => {
  const t = Bp[e];
  _i[e] = function() {
    return _i[t](...arguments);
  };
});
function BT(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function UT(e) {
  return D_.compressToEncodedURIComponent(BT(e));
}
function $T(e) {
  return "https://testing-playground.com/#markup=" + UT(e);
}
const HT = (e, t, r) => Array.isArray(e) ? e.forEach((n) => Np(n, t, r)) : Np(e, t, r), VT = function(e) {
  if (e === void 0 && (e = Eu().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = $T(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, Up = {
  debug: HT,
  logTestingPlaygroundURL: VT
};
typeof document < "u" && document.body ? hb(document.body, Bl, Up) : Object.keys(Bl).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), Up);
var Xi = { exports: {} }, Ne = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p;
function zT() {
  if ($p) return Ne;
  $p = 1;
  var e = Hr, t = Rr;
  function r(S) {
    var U = S, F = S;
    if (S.alternate) for (; U.return; ) U = U.return;
    else {
      S = U;
      do
        U = S, (U.flags & 4098) !== 0 && (F = U.return), S = U.return;
      while (S);
    }
    return U.tag === 3 ? F : null;
  }
  function n(S) {
    if (r(S) !== S) throw Error("Unable to find node on an unmounted component.");
  }
  function o(S) {
    var U = S.alternate;
    if (!U) {
      if (U = r(S), U === null) throw Error("Unable to find node on an unmounted component.");
      return U !== S ? null : S;
    }
    for (var F = S, te = U; ; ) {
      var ye = F.return;
      if (ye === null) break;
      var ge = ye.alternate;
      if (ge === null) {
        if (te = ye.return, te !== null) {
          F = te;
          continue;
        }
        break;
      }
      if (ye.child === ge.child) {
        for (ge = ye.child; ge; ) {
          if (ge === F) return n(ye), S;
          if (ge === te) return n(ye), U;
          ge = ge.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (F.return !== te.return) F = ye, te = ge;
      else {
        for (var de = !1, Ce = ye.child; Ce; ) {
          if (Ce === F) {
            de = !0, F = ye, te = ge;
            break;
          }
          if (Ce === te) {
            de = !0, te = ye, F = ge;
            break;
          }
          Ce = Ce.sibling;
        }
        if (!de) {
          for (Ce = ge.child; Ce; ) {
            if (Ce === F) {
              de = !0, F = ge, te = ye;
              break;
            }
            if (Ce === te) {
              de = !0, te = ge, F = ye;
              break;
            }
            Ce = Ce.sibling;
          }
          if (!de) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (F.alternate !== te) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (F.tag !== 3) throw Error("Unable to find node on an unmounted component.");
    return F.stateNode.current === F ? S : U;
  }
  var a = Object.assign;
  function i(S) {
    var U = S.keyCode;
    return "charCode" in S ? (S = S.charCode, S === 0 && U === 13 && (S = 13)) : S = U, S === 10 && (S = 13), 32 <= S || S === 13 ? S : 0;
  }
  function s() {
    return !0;
  }
  function l() {
    return !1;
  }
  function u(S) {
    function U(F, te, ye, ge, de) {
      this._reactName = F, this._targetInst = ye, this.type = te, this.nativeEvent = ge, this.target = de, this.currentTarget = null;
      for (var Ce in S) S.hasOwnProperty(Ce) && (F = S[Ce], this[Ce] = F ? F(ge) : ge[Ce]);
      return this.isDefaultPrevented = (ge.defaultPrevented != null ? ge.defaultPrevented : ge.returnValue === !1) ? s : l, this.isPropagationStopped = l, this;
    }
    return a(U.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var F = this.nativeEvent;
      F && (F.preventDefault ? F.preventDefault() : typeof F.returnValue != "unknown" && (F.returnValue = !1), this.isDefaultPrevented = s);
    }, stopPropagation: function() {
      var F = this.nativeEvent;
      F && (F.stopPropagation ? F.stopPropagation() : typeof F.cancelBubble != "unknown" && (F.cancelBubble = !0), this.isPropagationStopped = s);
    }, persist: function() {
    }, isPersistent: s }), U;
  }
  var p = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(S) {
    return S.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, f = u(p), c = a({}, p, { view: 0, detail: 0 });
  u(c);
  var m, h, y, C = a({}, c, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: O, button: 0, buttons: 0, relatedTarget: function(S) {
    return S.relatedTarget === void 0 ? S.fromElement === S.srcElement ? S.toElement : S.fromElement : S.relatedTarget;
  }, movementX: function(S) {
    return "movementX" in S ? S.movementX : (S !== y && (y && S.type === "mousemove" ? (m = S.screenX - y.screenX, h = S.screenY - y.screenY) : h = m = 0, y = S), m);
  }, movementY: function(S) {
    return "movementY" in S ? S.movementY : h;
  } });
  u(C);
  var d = a({}, C, { dataTransfer: 0 });
  u(d);
  var R = a({}, c, { relatedTarget: 0 });
  u(R);
  var b = a({}, p, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  u(b);
  var E = a({}, p, { clipboardData: function(S) {
    return "clipboardData" in S ? S.clipboardData : window.clipboardData;
  } });
  u(E);
  var w = a({}, p, { data: 0 });
  u(w);
  var g = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, v = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, _ = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function A(S) {
    var U = this.nativeEvent;
    return U.getModifierState ? U.getModifierState(S) : (S = _[S]) ? !!U[S] : !1;
  }
  function O() {
    return A;
  }
  var q = a({}, c, { key: function(S) {
    if (S.key) {
      var U = g[S.key] || S.key;
      if (U !== "Unidentified") return U;
    }
    return S.type === "keypress" ? (S = i(S), S === 13 ? "Enter" : String.fromCharCode(S)) : S.type === "keydown" || S.type === "keyup" ? v[S.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: O, charCode: function(S) {
    return S.type === "keypress" ? i(S) : 0;
  }, keyCode: function(S) {
    return S.type === "keydown" || S.type === "keyup" ? S.keyCode : 0;
  }, which: function(S) {
    return S.type === "keypress" ? i(S) : S.type === "keydown" || S.type === "keyup" ? S.keyCode : 0;
  } });
  u(q);
  var I = a({}, C, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  u(I);
  var T = a({}, c, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: O });
  u(T);
  var k = a({}, p, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  u(k);
  var N = a({}, C, { deltaX: function(S) {
    return "deltaX" in S ? S.deltaX : "wheelDeltaX" in S ? -S.wheelDeltaX : 0;
  }, deltaY: function(S) {
    return "deltaY" in S ? S.deltaY : "wheelDeltaY" in S ? -S.wheelDeltaY : "wheelDelta" in S ? -S.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  u(N);
  function Y(S, U, F, te, ye, ge, de, Ce, Ve) {
    var We = Array.prototype.slice.call(arguments, 3);
    try {
      U.apply(F, We);
    } catch (it) {
      this.onError(it);
    }
  }
  var G = !1, Q = null, K = !1, se = null, ne = { onError: function(S) {
    G = !0, Q = S;
  } };
  function we(S, U, F, te, ye, ge, de, Ce, Ve) {
    G = !1, Q = null, Y.apply(ne, arguments);
  }
  function W(S, U, F, te, ye, ge, de, Ce, Ve) {
    if (we.apply(this, arguments), G) {
      if (G) {
        var We = Q;
        G = !1, Q = null;
      } else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      K || (K = !0, se = We);
    }
  }
  var be = Array.isArray, X = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, ue = X[0], me = X[1], le = X[2], M = X[3], z = X[4], B = e.unstable_act;
  function J() {
  }
  function ee(S, U) {
    if (!S) return [];
    if (S = o(S), !S) return [];
    for (var F = S, te = []; ; ) {
      if (F.tag === 5 || F.tag === 6 || F.tag === 1 || F.tag === 0) {
        var ye = F.stateNode;
        U(ye) && te.push(ye);
      }
      if (F.child) F.child.return = F, F = F.child;
      else {
        if (F === S) return te;
        for (; !F.sibling; ) {
          if (!F.return || F.return === S) return te;
          F = F.return;
        }
        F.sibling.return = F.return, F = F.sibling;
      }
    }
  }
  function re(S, U) {
    if (S && !S._reactInternals) {
      var F = String(S);
      throw S = be(S) ? "an array" : S && S.nodeType === 1 && S.tagName ? "a DOM node" : F === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : F, Error(U + "(...): the first argument must be a React class instance. Instead received: " + (S + "."));
    }
  }
  function ce(S) {
    return !(!S || S.nodeType !== 1 || !S.tagName);
  }
  function ae(S) {
    return ce(S) ? !1 : S != null && typeof S.render == "function" && typeof S.setState == "function";
  }
  function ve(S, U) {
    return ae(S) ? S._reactInternals.type === U : !1;
  }
  function qe(S, U) {
    return re(S, "findAllInRenderedTree"), S ? ee(S._reactInternals, U) : [];
  }
  function Ue(S, U) {
    return re(S, "scryRenderedDOMComponentsWithClass"), qe(S, function(F) {
      if (ce(F)) {
        var te = F.className;
        typeof te != "string" && (te = F.getAttribute("class") || "");
        var ye = te.split(/\s+/);
        if (!be(U)) {
          if (U === void 0) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          U = U.split(/\s+/);
        }
        return U.every(function(ge) {
          return ye.indexOf(ge) !== -1;
        });
      }
      return !1;
    });
  }
  function ft(S, U) {
    return re(S, "scryRenderedDOMComponentsWithTag"), qe(S, function(F) {
      return ce(F) && F.tagName.toUpperCase() === U.toUpperCase();
    });
  }
  function Wt(S, U) {
    return re(S, "scryRenderedComponentsWithType"), qe(S, function(F) {
      return ve(F, U);
    });
  }
  function vt(S, U, F) {
    var te = S.type || "unknown-event";
    S.currentTarget = me(F), W(te, U, void 0, S), S.currentTarget = null;
  }
  function Gt(S, U, F) {
    for (var te = []; S; ) {
      te.push(S);
      do
        S = S.return;
      while (S && S.tag !== 5);
      S = S || null;
    }
    for (S = te.length; 0 < S--; ) U(te[S], "captured", F);
    for (S = 0; S < te.length; S++) U(te[S], "bubbled", F);
  }
  function Yt(S, U) {
    var F = S.stateNode;
    if (!F) return null;
    var te = le(F);
    if (!te) return null;
    F = te[U];
    e: switch (U) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (te = !te.disabled) || (S = S.type, te = !(S === "button" || S === "input" || S === "select" || S === "textarea")), S = !te;
        break e;
      default:
        S = !1;
    }
    if (S) return null;
    if (F && typeof F != "function") throw Error("Expected `" + U + "` listener to be a function, instead got a value of `" + typeof F + "` type.");
    return F;
  }
  function Kt(S, U, F) {
    S && F && F._reactName && (U = Yt(S, F._reactName)) && (F._dispatchListeners == null && (F._dispatchListeners = []), F._dispatchInstances == null && (F._dispatchInstances = []), F._dispatchListeners.push(U), F._dispatchInstances.push(S));
  }
  function yt(S, U, F) {
    var te = F._reactName;
    U === "captured" && (te += "Capture"), (U = Yt(S, te)) && (F._dispatchListeners == null && (F._dispatchListeners = []), F._dispatchInstances == null && (F._dispatchInstances = []), F._dispatchListeners.push(U), F._dispatchInstances.push(S));
  }
  var _t = {}, pt = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function Qt(S) {
    return function(U, F) {
      if (e.isValidElement(U)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (ae(U)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var te = "on" + S[0].toUpperCase() + S.slice(1), ye = new J();
      ye.target = U, ye.type = S.toLowerCase();
      var ge = ue(U), de = new f(te, ye.type, ge, ye, U);
      de.persist(), a(de, F), pt.has(S) ? de && de._reactName && Kt(de._targetInst, null, de) : de && de._reactName && Gt(de._targetInst, yt, de), t.unstable_batchedUpdates(function() {
        if (M(U), de) {
          var Ce = de._dispatchListeners, Ve = de._dispatchInstances;
          if (be(Ce)) for (var We = 0; We < Ce.length && !de.isPropagationStopped(); We++) vt(de, Ce[We], Ve[We]);
          else Ce && vt(de, Ce, Ve);
          de._dispatchListeners = null, de._dispatchInstances = null, de.isPersistent() || de.constructor.release(de);
        }
        if (K) throw Ce = se, K = !1, se = null, Ce;
      }), z();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(S) {
    _t[S] = Qt(S);
  }), Ne.Simulate = _t, Ne.act = B, Ne.findAllInRenderedTree = qe, Ne.findRenderedComponentWithType = function(S, U) {
    if (re(S, "findRenderedComponentWithType"), S = Wt(S, U), S.length !== 1) throw Error("Did not find exactly one match (found: " + S.length + ") for componentType:" + U);
    return S[0];
  }, Ne.findRenderedDOMComponentWithClass = function(S, U) {
    if (re(S, "findRenderedDOMComponentWithClass"), S = Ue(S, U), S.length !== 1) throw Error("Did not find exactly one match (found: " + S.length + ") for class:" + U);
    return S[0];
  }, Ne.findRenderedDOMComponentWithTag = function(S, U) {
    if (re(S, "findRenderedDOMComponentWithTag"), S = ft(S, U), S.length !== 1) throw Error("Did not find exactly one match (found: " + S.length + ") for tag:" + U);
    return S[0];
  }, Ne.isCompositeComponent = ae, Ne.isCompositeComponentWithType = ve, Ne.isDOMComponent = ce, Ne.isDOMComponentElement = function(S) {
    return !!(S && e.isValidElement(S) && S.tagName);
  }, Ne.isElement = function(S) {
    return e.isValidElement(S);
  }, Ne.isElementOfType = function(S, U) {
    return e.isValidElement(S) && S.type === U;
  }, Ne.mockComponent = function(S, U) {
    return U = U || S.mockTagName || "div", S.prototype.render.mockImplementation(function() {
      return e.createElement(U, null, this.props.children);
    }), this;
  }, Ne.nativeTouchData = function(S, U) {
    return { touches: [{ pageX: S, pageY: U }] };
  }, Ne.renderIntoDocument = function(S) {
    var U = document.createElement("div");
    return t.render(S, U);
  }, Ne.scryRenderedComponentsWithType = Wt, Ne.scryRenderedDOMComponentsWithClass = Ue, Ne.scryRenderedDOMComponentsWithTag = ft, Ne.traverseTwoPhase = Gt, Ne;
}
var Le = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hp;
function WT() {
  return Hp || (Hp = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Hr, t = Rr, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(P) {
      {
        for (var L = arguments.length, j = new Array(L > 1 ? L - 1 : 0), $ = 1; $ < L; $++)
          j[$ - 1] = arguments[$];
        a("warn", P, j);
      }
    }
    function o(P) {
      {
        for (var L = arguments.length, j = new Array(L > 1 ? L - 1 : 0), $ = 1; $ < L; $++)
          j[$ - 1] = arguments[$];
        a("error", P, j);
      }
    }
    function a(P, L, j) {
      {
        var $ = r.ReactDebugCurrentFrame, ie = $.getStackAddendum();
        ie !== "" && (L += "%s", j = j.concat([ie]));
        var Re = j.map(function(ke) {
          return String(ke);
        });
        Re.unshift("Warning: " + L), Function.prototype.apply.call(console[P], console, Re);
      }
    }
    function i(P) {
      return P._reactInternals;
    }
    var s = 0, l = 1, u = 3, p = 5, f = 6, c = (
      /*                      */
      0
    ), m = (
      /*                    */
      2
    ), h = (
      /*                    */
      4096
    );
    r.ReactCurrentOwner;
    function y(P) {
      var L = P, j = P;
      if (P.alternate)
        for (; L.return; )
          L = L.return;
      else {
        var $ = L;
        do
          L = $, (L.flags & (m | h)) !== c && (j = L.return), $ = L.return;
        while ($);
      }
      return L.tag === u ? j : null;
    }
    function C(P) {
      if (y(P) !== P)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function d(P) {
      var L = P.alternate;
      if (!L) {
        var j = y(P);
        if (j === null)
          throw new Error("Unable to find node on an unmounted component.");
        return j !== P ? null : P;
      }
      for (var $ = P, ie = L; ; ) {
        var Re = $.return;
        if (Re === null)
          break;
        var ke = Re.alternate;
        if (ke === null) {
          var st = Re.return;
          if (st !== null) {
            $ = ie = st;
            continue;
          }
          break;
        }
        if (Re.child === ke.child) {
          for (var lt = Re.child; lt; ) {
            if (lt === $)
              return C(Re), P;
            if (lt === ie)
              return C(Re), L;
            lt = lt.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if ($.return !== ie.return)
          $ = Re, ie = ke;
        else {
          for (var tt = !1, Ye = Re.child; Ye; ) {
            if (Ye === $) {
              tt = !0, $ = Re, ie = ke;
              break;
            }
            if (Ye === ie) {
              tt = !0, ie = Re, $ = ke;
              break;
            }
            Ye = Ye.sibling;
          }
          if (!tt) {
            for (Ye = ke.child; Ye; ) {
              if (Ye === $) {
                tt = !0, $ = ke, ie = Re;
                break;
              }
              if (Ye === ie) {
                tt = !0, ie = ke, $ = Re;
                break;
              }
              Ye = Ye.sibling;
            }
            if (!tt)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if ($.alternate !== ie)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if ($.tag !== u)
        throw new Error("Unable to find node on an unmounted component.");
      return $.stateNode.current === $ ? P : L;
    }
    var R = Object.assign;
    function b(P) {
      var L, j = P.keyCode;
      return "charCode" in P ? (L = P.charCode, L === 0 && j === 13 && (L = 13)) : L = j, L === 10 && (L = 13), L >= 32 || L === 13 ? L : 0;
    }
    function E() {
      return !0;
    }
    function w() {
      return !1;
    }
    function g(P) {
      function L(j, $, ie, Re, ke) {
        this._reactName = j, this._targetInst = ie, this.type = $, this.nativeEvent = Re, this.target = ke, this.currentTarget = null;
        for (var st in P)
          if (P.hasOwnProperty(st)) {
            var lt = P[st];
            lt ? this[st] = lt(Re) : this[st] = Re[st];
          }
        var tt = Re.defaultPrevented != null ? Re.defaultPrevented : Re.returnValue === !1;
        return tt ? this.isDefaultPrevented = E : this.isDefaultPrevented = w, this.isPropagationStopped = w, this;
      }
      return R(L.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var j = this.nativeEvent;
          j && (j.preventDefault ? j.preventDefault() : typeof j.returnValue != "unknown" && (j.returnValue = !1), this.isDefaultPrevented = E);
        },
        stopPropagation: function() {
          var j = this.nativeEvent;
          j && (j.stopPropagation ? j.stopPropagation() : typeof j.cancelBubble != "unknown" && (j.cancelBubble = !0), this.isPropagationStopped = E);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: E
      }), L;
    }
    var v = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(P) {
        return P.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, _ = g(v), A = R({}, v, {
      view: 0,
      detail: 0
    });
    g(A);
    var O, q, I;
    function T(P) {
      P !== I && (I && P.type === "mousemove" ? (O = P.screenX - I.screenX, q = P.screenY - I.screenY) : (O = 0, q = 0), I = P);
    }
    var k = R({}, A, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: X,
      button: 0,
      buttons: 0,
      relatedTarget: function(P) {
        return P.relatedTarget === void 0 ? P.fromElement === P.srcElement ? P.toElement : P.fromElement : P.relatedTarget;
      },
      movementX: function(P) {
        return "movementX" in P ? P.movementX : (T(P), O);
      },
      movementY: function(P) {
        return "movementY" in P ? P.movementY : q;
      }
    });
    g(k);
    var N = R({}, k, {
      dataTransfer: 0
    });
    g(N);
    var Y = R({}, A, {
      relatedTarget: 0
    });
    g(Y);
    var G = R({}, v, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    g(G);
    var Q = R({}, v, {
      clipboardData: function(P) {
        return "clipboardData" in P ? P.clipboardData : window.clipboardData;
      }
    });
    g(Q);
    var K = R({}, v, {
      data: 0
    });
    g(K);
    var se = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, ne = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function we(P) {
      if (P.key) {
        var L = se[P.key] || P.key;
        if (L !== "Unidentified")
          return L;
      }
      if (P.type === "keypress") {
        var j = b(P);
        return j === 13 ? "Enter" : String.fromCharCode(j);
      }
      return P.type === "keydown" || P.type === "keyup" ? ne[P.keyCode] || "Unidentified" : "";
    }
    var W = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function be(P) {
      var L = this, j = L.nativeEvent;
      if (j.getModifierState)
        return j.getModifierState(P);
      var $ = W[P];
      return $ ? !!j[$] : !1;
    }
    function X(P) {
      return be;
    }
    var ue = R({}, A, {
      key: we,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: X,
      // Legacy Interface
      charCode: function(P) {
        return P.type === "keypress" ? b(P) : 0;
      },
      keyCode: function(P) {
        return P.type === "keydown" || P.type === "keyup" ? P.keyCode : 0;
      },
      which: function(P) {
        return P.type === "keypress" ? b(P) : P.type === "keydown" || P.type === "keyup" ? P.keyCode : 0;
      }
    });
    g(ue);
    var me = R({}, k, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    });
    g(me);
    var le = R({}, A, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: X
    });
    g(le);
    var M = R({}, v, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    g(M);
    var z = R({}, k, {
      deltaX: function(P) {
        return "deltaX" in P ? P.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in P ? -P.wheelDeltaX : 0
        );
      },
      deltaY: function(P) {
        return "deltaY" in P ? P.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in P ? -P.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in P ? -P.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    });
    g(z);
    var B = 1;
    function J(P, L, j, $, ie, Re, ke, st, lt) {
      var tt = Array.prototype.slice.call(arguments, 3);
      try {
        L.apply(j, tt);
      } catch (Ye) {
        this.onError(Ye);
      }
    }
    var ee = J;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var re = document.createElement("react");
      ee = function(L, j, $, ie, Re, ke, st, lt, tt) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var Ye = document.createEvent("Event"), Zs = !1, ku = !0, rv = window.event, Du = Object.getOwnPropertyDescriptor(window, "event");
        function Nu() {
          re.removeEventListener(Xs, Lu, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = rv);
        }
        var nv = Array.prototype.slice.call(arguments, 3);
        function Lu() {
          Zs = !0, Nu(), j.apply($, nv), ku = !1;
        }
        var Xt, ju = !1, Fu = !1;
        function Bu(Ui) {
          if (Xt = Ui.error, ju = !0, Xt === null && Ui.colno === 0 && Ui.lineno === 0 && (Fu = !0), Ui.defaultPrevented && Xt != null && typeof Xt == "object")
            try {
              Xt._suppressLogging = !0;
            } catch {
            }
        }
        var Xs = "react-" + (L || "invokeguardedcallback");
        if (window.addEventListener("error", Bu), re.addEventListener(Xs, Lu, !1), Ye.initEvent(Xs, !1, !1), re.dispatchEvent(Ye), Du && Object.defineProperty(window, "event", Du), Zs && ku && (ju ? Fu && (Xt = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Xt = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Xt)), window.removeEventListener("error", Bu), !Zs)
          return Nu(), J.apply(this, arguments);
      };
    }
    var ce = ee, ae = !1, ve = null, qe = !1, Ue = null, ft = {
      onError: function(P) {
        ae = !0, ve = P;
      }
    };
    function Wt(P, L, j, $, ie, Re, ke, st, lt) {
      ae = !1, ve = null, ce.apply(ft, arguments);
    }
    function vt(P, L, j, $, ie, Re, ke, st, lt) {
      if (Wt.apply(this, arguments), ae) {
        var tt = Yt();
        qe || (qe = !0, Ue = tt);
      }
    }
    function Gt() {
      if (qe) {
        var P = Ue;
        throw qe = !1, Ue = null, P;
      }
    }
    function Yt() {
      if (ae) {
        var P = ve;
        return ae = !1, ve = null, P;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var Kt = Array.isArray;
    function yt(P) {
      return Kt(P);
    }
    var _t = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pt = _t.Events, Qt = pt[0], S = pt[1], U = pt[2], F = pt[3], te = pt[4], ye = e.unstable_act;
    function ge(P) {
    }
    var de = !1;
    function Ce(P, L) {
      if (!P)
        return [];
      var j = d(P);
      if (!j)
        return [];
      for (var $ = j, ie = []; ; ) {
        if ($.tag === p || $.tag === f || $.tag === l || $.tag === s) {
          var Re = $.stateNode;
          L(Re) && ie.push(Re);
        }
        if ($.child) {
          $.child.return = $, $ = $.child;
          continue;
        }
        if ($ === j)
          return ie;
        for (; !$.sibling; ) {
          if (!$.return || $.return === j)
            return ie;
          $ = $.return;
        }
        $.sibling.return = $.return, $ = $.sibling;
      }
    }
    function Ve(P, L) {
      if (P && !i(P)) {
        var j, $ = String(P);
        throw yt(P) ? j = "an array" : P && P.nodeType === B && P.tagName ? j = "a DOM node" : $ === "[object Object]" ? j = "object with keys {" + Object.keys(P).join(", ") + "}" : j = $, new Error(L + "(...): the first argument must be a React class instance. " + ("Instead received: " + j + "."));
      }
    }
    var We = !1;
    function it(P) {
      We || (We = !0, o("ReactDOMTestUtils is deprecated and will be removed in a future major release, because it exposes internal implementation details that are highly likely to change between releases. Upgrade to a modern testing library, such as @testing-library/react. See https://react.dev/warnings/react-dom-test-utils for more info."));
      var L = document.createElement("div");
      return t.render(P, L);
    }
    function ur(P) {
      return e.isValidElement(P);
    }
    function cr(P, L) {
      return e.isValidElement(P) && P.type === L;
    }
    function wt(P) {
      return !!(P && P.nodeType === B && P.tagName);
    }
    function un(P) {
      return !!(P && e.isValidElement(P) && P.tagName);
    }
    function Zt(P) {
      return wt(P) ? !1 : P != null && typeof P.render == "function" && typeof P.setState == "function";
    }
    function Dr(P, L) {
      if (!Zt(P))
        return !1;
      var j = i(P), $ = j.type;
      return $ === L;
    }
    function V(P, L) {
      if (Ve(P, "findAllInRenderedTree"), !P)
        return [];
      var j = i(P);
      return Ce(j, L);
    }
    function dr(P, L) {
      return Ve(P, "scryRenderedDOMComponentsWithClass"), V(P, function(j) {
        if (wt(j)) {
          var $ = j.className;
          typeof $ != "string" && ($ = j.getAttribute("class") || "");
          var ie = $.split(/\s+/);
          if (!yt(L)) {
            if (L === void 0)
              throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            L = L.split(/\s+/);
          }
          return L.every(function(Re) {
            return ie.indexOf(Re) !== -1;
          });
        }
        return !1;
      });
    }
    function cn(P, L) {
      Ve(P, "findRenderedDOMComponentWithClass");
      var j = dr(P, L);
      if (j.length !== 1)
        throw new Error("Did not find exactly one match (found: " + j.length + ") for class:" + L);
      return j[0];
    }
    function Tt(P, L) {
      return Ve(P, "scryRenderedDOMComponentsWithTag"), V(P, function(j) {
        return wt(j) && j.tagName.toUpperCase() === L.toUpperCase();
      });
    }
    function ji(P, L) {
      Ve(P, "findRenderedDOMComponentWithTag");
      var j = Tt(P, L);
      if (j.length !== 1)
        throw new Error("Did not find exactly one match (found: " + j.length + ") for tag:" + L);
      return j[0];
    }
    function dn(P, L) {
      return Ve(P, "scryRenderedComponentsWithType"), V(P, function(j) {
        return Dr(j, L);
      });
    }
    function Gs(P, L) {
      Ve(P, "findRenderedComponentWithType");
      var j = dn(P, L);
      if (j.length !== 1)
        throw new Error("Did not find exactly one match (found: " + j.length + ") for componentType:" + L);
      return j[0];
    }
    function Ys(P, L) {
      return de || (de = !0, n(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), L = L || P.mockTagName || "div", P.prototype.render.mockImplementation(function() {
        return e.createElement(L, null, this.props.children);
      }), this;
    }
    function Ks(P, L) {
      return {
        touches: [{
          pageX: P,
          pageY: L
        }]
      };
    }
    function Fi(P, L, j) {
      var $ = P.type || "unknown-event";
      P.currentTarget = S(j), vt($, L, void 0, P), P.currentTarget = null;
    }
    function x(P) {
      var L = P._dispatchListeners, j = P._dispatchInstances;
      if (yt(L))
        for (var $ = 0; $ < L.length && !P.isPropagationStopped(); $++)
          Fi(P, L[$], j[$]);
      else L && Fi(P, L, j);
      P._dispatchListeners = null, P._dispatchInstances = null;
    }
    var H = function(P) {
      P && (x(P), P.isPersistent() || P.constructor.release(P));
    };
    function Z(P) {
      return P === "button" || P === "input" || P === "select" || P === "textarea";
    }
    function oe(P) {
      do
        P = P.return;
      while (P && P.tag !== p);
      return P || null;
    }
    function _e(P, L, j) {
      for (var $ = []; P; )
        $.push(P), P = oe(P);
      var ie;
      for (ie = $.length; ie-- > 0; )
        L($[ie], "captured", j);
      for (ie = 0; ie < $.length; ie++)
        L($[ie], "bubbled", j);
    }
    function Te(P, L, j) {
      switch (P) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(j.disabled && Z(L));
        default:
          return !1;
      }
    }
    function he(P, L) {
      var j = P.stateNode;
      if (!j)
        return null;
      var $ = U(j);
      if (!$)
        return null;
      var ie = $[L];
      if (Te(L, P.type, $))
        return null;
      if (ie && typeof ie != "function")
        throw new Error("Expected `" + L + "` listener to be a function, instead got a value of `" + typeof ie + "` type.");
      return ie;
    }
    function pe(P, L, j) {
      var $ = L._reactName;
      return j === "captured" && ($ += "Capture"), he(P, $);
    }
    function ze(P, L, j) {
      if (P && j && j._reactName) {
        var $ = j._reactName, ie = he(P, $);
        ie && (j._dispatchListeners == null && (j._dispatchListeners = []), j._dispatchInstances == null && (j._dispatchInstances = []), j._dispatchListeners.push(ie), j._dispatchInstances.push(P));
      }
    }
    function Ae(P, L, j) {
      P || o("Dispatching inst must not be null");
      var $ = pe(P, j, L);
      $ && (j._dispatchListeners == null && (j._dispatchListeners = []), j._dispatchInstances == null && (j._dispatchInstances = []), j._dispatchListeners.push($), j._dispatchInstances.push(P));
    }
    function Ie(P) {
      P && P._reactName && ze(P._targetInst, null, P);
    }
    function Je(P) {
      P && P._reactName && _e(P._targetInst, Ae, P);
    }
    var St = {}, Pt = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function Ge(P) {
      return function(L, j) {
        if (e.isValidElement(L))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (Zt(L))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var $ = "on" + P[0].toUpperCase() + P.slice(1), ie = new ge();
        ie.target = L, ie.type = P.toLowerCase();
        var Re = Qt(L), ke = new _($, ie.type, Re, ie, L);
        ke.persist(), R(ke, j), Pt.has(P) ? Ie(ke) : Je(ke), t.unstable_batchedUpdates(function() {
          F(L), H(ke), Gt();
        }), te();
      };
    }
    var fn = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
    function Qs() {
      fn.forEach(function(P) {
        St[P] = Ge(P);
      });
    }
    Qs();
    var Bi = !1, tv = function(L) {
      return Bi || (Bi = !0, o("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), ye(L);
    };
    Le.Simulate = St, Le.act = tv, Le.findAllInRenderedTree = V, Le.findRenderedComponentWithType = Gs, Le.findRenderedDOMComponentWithClass = cn, Le.findRenderedDOMComponentWithTag = ji, Le.isCompositeComponent = Zt, Le.isCompositeComponentWithType = Dr, Le.isDOMComponent = wt, Le.isDOMComponentElement = un, Le.isElement = ur, Le.isElementOfType = cr, Le.mockComponent = Ys, Le.nativeTouchData = Ks, Le.renderIntoDocument = it, Le.scryRenderedComponentsWithType = dn, Le.scryRenderedDOMComponentsWithClass = dr, Le.scryRenderedDOMComponentsWithTag = Tt, Le.traverseTwoPhase = _e;
  })()), Le;
}
var Vp;
function GT() {
  return Vp || (Vp = 1, process.env.NODE_ENV === "production" ? Xi.exports = zT() : Xi.exports = WT()), Xi.exports;
}
var YT = GT(), jr = {}, zp;
function KT() {
  if (zp) return jr;
  zp = 1;
  var e = Rr;
  if (process.env.NODE_ENV === "production")
    jr.createRoot = e.createRoot, jr.hydrateRoot = e.hydrateRoot;
  else {
    var t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    jr.createRoot = function(r, n) {
      t.usingClientEntryPoint = !0;
      try {
        return e.createRoot(r, n);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, jr.hydrateRoot = function(r, n, o) {
      t.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(r, n, o);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return jr;
}
var Wp = KT();
const QT = typeof di.act == "function" ? di.act : YT.act;
function bb() {
  if (typeof globalThis < "u")
    return globalThis;
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}
function Lt(e) {
  bb().IS_REACT_ACT_ENVIRONMENT = e;
}
function xs() {
  return bb().IS_REACT_ACT_ENVIRONMENT;
}
function ZT(e) {
  return (t) => {
    const r = xs();
    Lt(!0);
    try {
      let n = !1;
      const o = e(() => {
        const a = t();
        return a !== null && typeof a == "object" && typeof a.then == "function" && (n = !0), a;
      });
      if (n) {
        const a = o;
        return {
          then: (i, s) => {
            a.then((l) => {
              Lt(r), i(l);
            }, (l) => {
              Lt(r), s(l);
            });
          }
        };
      } else
        return Lt(r), o;
    } catch (n) {
      throw Lt(r), n;
    }
  };
}
const Kr = ZT(QT);
Object.keys(_i).forEach((e) => {
});
let XT = {
  reactStrictMode: !1
};
function JT() {
  return {
    ...Ee(),
    ...XT
  };
}
function e2() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
rw({
  unstable_advanceTimersWrapper: (e) => Kr(e),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (e) => {
    const t = xs();
    Lt(!1);
    try {
      const r = await e();
      return await new Promise((n) => {
        setTimeout(() => {
          n();
        }, 0), e2() && jest.advanceTimersByTime(0);
      }), r;
    } finally {
      Lt(t);
    }
  },
  eventWrapper: (e) => {
    let t;
    return Kr(() => {
      t = e();
    }), t;
  }
});
const Ul = /* @__PURE__ */ new Set(), qs = [];
function $l(e, t) {
  return t ?? JT().reactStrictMode ? /* @__PURE__ */ di.createElement(di.StrictMode, null, e) : e;
}
function Hl(e, t) {
  return t ? /* @__PURE__ */ di.createElement(t, null, e) : e;
}
function t2(e, t) {
  let {
    hydrate: r,
    onCaughtError: n,
    onRecoverableError: o,
    ui: a,
    wrapper: i,
    reactStrictMode: s
  } = t, l;
  return r ? Kr(() => {
    l = Wp.hydrateRoot(e, $l(Hl(a, i), s), {
      onCaughtError: n,
      onRecoverableError: o
    });
  }) : l = Wp.createRoot(e, {
    onCaughtError: n,
    onRecoverableError: o
  }), {
    hydrate() {
      if (!r)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(u) {
      l.render(u);
    },
    unmount() {
      l.unmount();
    }
  };
}
function r2(e) {
  return {
    hydrate(t) {
      Rr.hydrate(t, e);
    },
    render(t) {
      Rr.render(t, e);
    },
    unmount() {
      Rr.unmountComponentAtNode(e);
    }
  };
}
function vb(e, t) {
  let {
    baseElement: r,
    container: n,
    hydrate: o,
    queries: a,
    root: i,
    wrapper: s,
    reactStrictMode: l
  } = t;
  return Kr(() => {
    o ? i.hydrate($l(Hl(e, s), l), n) : i.render($l(Hl(e, s), l), n);
  }), {
    container: n,
    baseElement: r,
    debug: function(u, p, f) {
      return u === void 0 && (u = r), Array.isArray(u) ? (
        // eslint-disable-next-line no-console
        u.forEach((c) => console.log(Yr(c, p, f)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(Yr(u, p, f))
      );
    },
    unmount: () => {
      Kr(() => {
        i.unmount();
      });
    },
    rerender: (u) => {
      vb(u, {
        container: n,
        baseElement: r,
        root: i,
        wrapper: s,
        reactStrictMode: l
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(n.innerHTML);
      {
        const u = document.createElement("template");
        return u.innerHTML = n.innerHTML, u.content;
      }
    },
    ...hb(r, a)
  };
}
function Tu(e, t) {
  let {
    container: r,
    baseElement: n = r,
    legacyRoot: o = !1,
    onCaughtError: a,
    onUncaughtError: i,
    onRecoverableError: s,
    queries: l,
    hydrate: u = !1,
    wrapper: p,
    reactStrictMode: f
  } = t === void 0 ? {} : t;
  if (i !== void 0)
    throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
  if (o && typeof Rr.render != "function") {
    const m = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
    throw Error.captureStackTrace(m, Tu), m;
  }
  n || (n = document.body), r || (r = n.appendChild(document.createElement("div")));
  let c;
  return Ul.has(r) ? qs.forEach((m) => {
    m.container === r && (c = m.root);
  }) : (c = (o ? r2 : t2)(r, {
    hydrate: u,
    onCaughtError: a,
    onRecoverableError: s,
    ui: e,
    wrapper: p,
    reactStrictMode: f
  }), qs.push({
    container: r,
    root: c
  }), Ul.add(r)), vb(e, {
    container: r,
    baseElement: n,
    queries: l,
    hydrate: u,
    wrapper: p,
    root: c,
    reactStrictMode: f
  });
}
function Gp() {
  qs.forEach((e) => {
    let {
      root: t,
      container: r
    } = e;
    Kr(() => {
      t.unmount();
    }), r.parentNode === document.body && document.body.removeChild(r);
  }), qs.length = 0, Ul.clear();
}
if ((typeof process > "u" || !process.env?.RTL_SKIP_AUTO_CLEANUP) && (typeof afterEach == "function" ? afterEach(() => {
  Gp();
}) : typeof teardown == "function" && teardown(() => {
  Gp();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let e = xs();
  beforeAll(() => {
    e = xs(), Lt(!0);
  }), afterAll(() => {
    Lt(e);
  });
}
function fe(e, t, r) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : r ? Object.entries(r).every(([n, o]) => e[n] === o) : !0;
}
function dt(e) {
  var t;
  if (n2(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${o2(e)}`);
}
function n2(e) {
  return e.nodeType === 9;
}
function o2(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function yb(e, t) {
  return new Promise((r, n) => {
    const o = new t();
    o.onerror = n, o.onabort = n, o.onload = () => {
      r(String(o.result));
    }, o.readAsText(e);
  });
}
function Su(e, t) {
  const r = {
    ...t,
    length: t.length,
    item: (n) => r[n],
    [Symbol.iterator]: function* () {
      for (let o = 0; o < r.length; o++)
        yield r[o];
    }
  };
  return r.constructor = e.FileList, e.FileList && Object.setPrototypeOf(r, e.FileList.prototype), Object.freeze(r), r;
}
function nr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class gb {
  getAsFile() {
    return this.file;
  }
  getAsString(t) {
    typeof this.data == "string" && t(this.data);
  }
  /* istanbul ignore next */
  webkitGetAsEntry() {
    throw new Error("not implemented");
  }
  constructor(t, r) {
    nr(this, "kind", void 0), nr(this, "type", void 0), nr(this, "file", null), nr(this, "data", void 0), typeof t == "string" ? (this.kind = "string", this.type = String(r), this.data = t) : (this.kind = "file", this.type = t.type, this.file = t);
  }
}
class a2 extends Array {
  add(...t) {
    const r = new gb(t[0], t[1]);
    return this.push(r), r;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function Ji(e, t) {
  const [r, n] = e.split("/"), o = !n || n === "*";
  return (a) => t ? a.type === (o ? r : e) : o ? a.type.startsWith(`${r}/`) : a.type === r;
}
function i2(e) {
  return new class {
    getData(r) {
      var n;
      const o = (n = this.items.find(Ji(r, !0))) !== null && n !== void 0 ? n : this.items.find(Ji(r, !1));
      let a = "";
      return o?.getAsString((i) => {
        a = i;
      }), a;
    }
    setData(r, n) {
      const o = this.items.findIndex(Ji(r, !0)), a = new gb(n, r);
      o >= 0 ? this.items.splice(o, 1, a) : this.items.push(a);
    }
    clearData(r) {
      if (r) {
        const n = this.items.findIndex(Ji(r, !0));
        n >= 0 && this.items.remove(n);
      } else
        this.items.clear();
    }
    get types() {
      const r = [];
      return this.files.length && r.push("Files"), this.items.forEach((n) => r.push(n.type)), Object.freeze(r), r;
    }
    /* istanbul ignore next */
    setDragImage() {
    }
    constructor() {
      nr(this, "dropEffect", "none"), nr(this, "effectAllowed", "uninitialized"), nr(this, "items", new a2()), nr(this, "files", Su(e, []));
    }
  }();
}
function Pu(e, t = []) {
  const r = typeof e.DataTransfer > "u" ? i2(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(r, "files", {
    get: () => Su(e, t)
  }), r;
}
async function s2(e, t) {
  return t.kind === "file" ? t.getAsFile() : new e.Blob([
    await new Promise((r) => t.getAsString(r))
  ], {
    type: t.type
  });
}
function Rb(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Eb(e, ...t) {
  const r = Object.fromEntries(t.map((n) => [
    typeof n == "string" ? "text/plain" : n.type,
    Promise.resolve(n)
  ]));
  return typeof e.ClipboardItem < "u" ? new e.ClipboardItem(r) : new class {
    get types() {
      return Array.from(Object.keys(this.data));
    }
    async getType(o) {
      const a = await this.data[o];
      if (!a)
        throw new Error(`${o} is not one of the available MIME types on this item.`);
      return a instanceof e.Blob ? a : new e.Blob([
        a
      ], {
        type: o
      });
    }
    constructor(o) {
      Rb(this, "data", void 0), this.data = o;
    }
  }(r);
}
const Qr = Symbol("Manage ClipboardSub");
function Yp(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let n = "";
      for (const o of this.items) {
        const a = o.types.includes("text/plain") ? "text/plain" : o.types.find((i) => i.startsWith("text/"));
        a && (n += await o.getType(a).then((i) => yb(i, e.FileReader)));
      }
      return n;
    }
    async write(n) {
      this.items = n;
    }
    async writeText(n) {
      this.items = [
        Eb(e, n)
      ];
    }
    constructor(...n) {
      super(...n), Rb(this, "items", []);
    }
  }(), {
    [Qr]: t
  });
}
function xu(e) {
  return !!e?.[Qr];
}
function l2(e) {
  if (xu(e.navigator.clipboard))
    return e.navigator.clipboard[Qr];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let r;
  const n = {
    resetClipboardStub: () => {
      r = Yp(e, n);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return r = Yp(e, n), Object.defineProperty(e.navigator, "clipboard", {
    get: () => r,
    configurable: !0
  }), r[Qr];
}
function u2(e) {
  xu(e.navigator.clipboard) && e.navigator.clipboard[Qr].resetClipboardStub();
}
function c2(e) {
  xu(e.navigator.clipboard) && e.navigator.clipboard[Qr].detachClipboardStub();
}
async function d2(e) {
  const t = e.defaultView, r = t?.navigator.clipboard, n = r && await r.read();
  if (!n)
    throw new Error("The Clipboard API is unavailable.");
  const o = Pu(t);
  for (const a of n)
    for (const i of a.types)
      o.setData(i, await a.getType(i).then((s) => yb(s, t.FileReader)));
  return o;
}
async function Cb(e, t) {
  const r = dt(e), n = r.navigator.clipboard, o = [];
  for (let i = 0; i < t.items.length; i++) {
    const s = t.items[i], l = await s2(r, s);
    o.push(Eb(r, l));
  }
  if (!(n && await n.write(o).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const Ms = globalThis;
typeof Ms.afterEach == "function" && Ms.afterEach(() => u2(globalThis.window));
typeof Ms.afterAll == "function" && Ms.afterAll(() => c2(globalThis.window));
const _b = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function qu(e) {
  return e.matches(_b);
}
function f2(e) {
  return new e.constructor(e.type, e);
}
function Ht(e) {
  for (let r = e; r; r = r.parentElement)
    if (fe(r, [
      "button",
      "input",
      "select",
      "textarea",
      "optgroup",
      "option"
    ])) {
      if (r.hasAttribute("disabled"))
        return !0;
    } else if (fe(r, "fieldset")) {
      var t;
      if (r.hasAttribute("disabled") && !(!((t = r.querySelector(":scope > legend")) === null || t === void 0) && t.contains(e)))
        return !0;
    } else if (r.tagName.includes("-") && r.constructor.formAssociated && r.hasAttribute("disabled"))
      return !0;
  return !1;
}
function Li(e) {
  const t = e.activeElement;
  return t?.shadowRoot ? Li(t.shadowRoot) : Ht(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function fl(e) {
  var t;
  return (t = Li(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function p2(e, t) {
  let r = e;
  do {
    if (t(r))
      return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function qr(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function wi(e) {
  const t = m2(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function m2(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
var wb = /* @__PURE__ */ (function(e) {
  return e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio", e;
})(wb || {});
function Tb(e) {
  return fe(e, "button") || fe(e, "input") && e.type in wb;
}
function Zr(e) {
  return Pb(e) && !e.readOnly || qr(e);
}
var Sb = /* @__PURE__ */ (function(e) {
  return e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week", e;
})(Sb || {});
function Pb(e) {
  return fe(e, "textarea") || fe(e, "input") && e.type in Sb;
}
function Et(e) {
  return xb(e) && Pb(e);
}
function h2(e) {
  return xb(e) && Tb(e);
}
function xb(e) {
  return e.nodeType === 1;
}
function b2(e) {
  const t = e.ownerDocument.getSelection();
  if (t?.focusNode && Et(e)) {
    const n = wi(t.focusNode);
    if (n) {
      if (!t.isCollapsed) {
        var r;
        const o = ((r = n.firstChild) === null || r === void 0 ? void 0 : r.nodeType) === 3 ? n.firstChild : n;
        t.setBaseAndExtent(o, 0, o, 0);
      }
    } else
      t.setBaseAndExtent(e, 0, e, 0);
  }
}
function Xr(e, t) {
  return Ee().eventWrapper(e);
}
function ar(e) {
  const t = p2(e, qu), r = Li(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && (Xr(t ? () => t.focus() : () => r?.blur()), b2(t ?? e.ownerDocument.body));
}
function v2(e) {
  !qu(e) || !(Li(e.ownerDocument) === e) || Xr(() => e.blur());
}
const ir = {};
ir.click = (e, t, r) => {
  const n = t.closest("button,input,label,select,textarea"), o = n && fe(n, "label") && n.control;
  if (o && o !== t)
    return () => {
      qu(o) && (ar(o), r.dispatchEvent(o, f2(e)));
    };
  if (fe(t, "input", {
    type: "file"
  }))
    return () => {
      v2(t), t.dispatchEvent(new (dt(t)).Event("fileDialog")), ar(t);
    };
};
const Jr = Symbol("Displayed value in UI"), Ft = Symbol("Displayed selection in UI"), Os = Symbol("Initial value to compare on blur");
function y2(e) {
  return typeof e == "object" && Jr in e;
}
function g2(e) {
  return !!e && typeof e == "object" && Ft in e;
}
function R2(e, t) {
  e[Os] === void 0 && (e[Os] = e.value), e[Jr] = t, e.value = Object.assign(new String(t), {
    [Jr]: !0
  });
}
function Ct(e) {
  return e[Jr] === void 0 ? e.value : String(e[Jr]);
}
function Mu(e) {
  e[Jr] = void 0;
}
function qb(e) {
  e[Os] = void 0;
}
function E2(e) {
  return e[Os];
}
function C2(e, t) {
  e[Ft] = t;
}
function ln(e, { focusOffset: t, anchorOffset: r = t }, n = "replace") {
  const o = Ct(e).length, a = (f) => Math.max(0, Math.min(o, f)), i = n === "replace" || e[Ft] === void 0 ? a(r) : e[Ft].anchorOffset, s = a(t), l = Math.min(i, s), u = Math.max(i, s);
  if (e[Ft] = {
    anchorOffset: i,
    focusOffset: s
  }, e.selectionStart === l && e.selectionEnd === u)
    return;
  const p = Object.assign(new Number(l), {
    [Ft]: !0
  });
  try {
    e.setSelectionRange(p, u);
  } catch {
  }
}
function Ti(e) {
  var t, r, n;
  const o = (n = e[Ft]) !== null && n !== void 0 ? n : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0
  };
  return {
    ...o,
    startOffset: Math.min(o.anchorOffset, o.focusOffset),
    endOffset: Math.max(o.anchorOffset, o.focusOffset)
  };
}
function _2(e) {
  return !!e[Ft];
}
function ms(e) {
  e[Ft] = void 0;
}
const As = globalThis.parseInt;
function w2(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const r = As(t[0], 10), n = As(t[1], 10);
  if (r >= 3 || r === 2 && n >= 4) {
    let o;
    return r >= 3 ? o = 1 : o = 2, Kp(t, o);
  }
  return e.length === 2 ? e : Kp(t, 2);
}
function Kp(e, t) {
  const r = e.slice(0, t), n = Math.min(As(r, 10), 23), o = e.slice(t), a = As(o, 10), i = Math.min(a, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function Mb(e, t) {
  const r = e.cloneNode();
  return r.value = t, r.value === t;
}
var Ob = /* @__PURE__ */ (function(e) {
  return e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url", e;
})(Ob || {});
function T2(e) {
  var t;
  const r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function S2(e) {
  return fe(e, "textarea") || fe(e, "input") && e.type in Ob;
}
function Ab(e, t, r, n) {
  if (hs(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return {
      node: e,
      offset: t + r
    };
  const o = Qp(e, t, r);
  if (o) {
    if (hs(o))
      return {
        node: o,
        offset: r > 0 ? Math.min(1, o.nodeValue.length) : Math.max(o.nodeValue.length - 1, 0)
      };
    if (fe(o, "br")) {
      const a = Qp(o, void 0, r);
      return a ? hs(a) ? {
        node: a,
        offset: r > 0 ? 0 : a.nodeValue.length
      } : r < 0 && fe(a, "br") ? {
        node: o.parentNode,
        offset: es(o)
      } : {
        node: a.parentNode,
        offset: es(a) + (r > 0 ? 0 : 1)
      } : r < 0 && n === "deleteContentBackward" ? {
        node: o.parentNode,
        offset: es(o)
      } : void 0;
    } else
      return {
        node: o.parentNode,
        offset: es(o) + (r > 0 ? 1 : 0)
      };
  }
}
function Qp(e, t, r) {
  const n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && Ou(e) && n >= 0 && n < e.children.length && (e = e.children[n]), x2(e, r === 1 ? "next" : "previous", P2);
}
function P2(e) {
  if (hs(e))
    return !0;
  if (Ou(e)) {
    if (fe(e, [
      "input",
      "textarea"
    ]))
      return e.type !== "hidden";
    if (fe(e, "br"))
      return !0;
  }
  return !1;
}
function es(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function Ou(e) {
  return e.nodeType === 1;
}
function hs(e) {
  return e.nodeType === 3;
}
function x2(e, t, r) {
  for (; ; ) {
    var n;
    const o = e[`${t}Sibling`];
    if (o) {
      if (e = q2(o, t === "next" ? "first" : "last"), r(e))
        return e;
    } else if (e.parentNode && (!Ou(e.parentNode) || !qr(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
      e = e.parentNode;
    else
      break;
  }
}
function q2(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const Si = Symbol("Track programmatic changes for React workaround");
function M2(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && dt(e).REACT_VERSION === 17;
}
function O2(e) {
  M2(e) && (e[Si] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function A2(e, t) {
  var r, n;
  (n = e[Si]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t), e[Si] || (Mu(e), ln(e, {
    focusOffset: t.length
  }));
}
function I2(e, t) {
  var r;
  const n = e[Si];
  if (e[Si] = void 0, !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
    return;
  const o = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  o || Mu(e), _2(e) && ln(e, {
    focusOffset: o ? t : e.value.length
  });
}
function Ib(e) {
  const t = k2(e);
  if (t && Et(t))
    return {
      type: "input",
      selection: Ti(t)
    };
  const r = t?.ownerDocument.getSelection();
  return {
    type: wi(e) && r?.anchorNode && wi(r.anchorNode) ? "contenteditable" : "default",
    selection: r
  };
}
function k2(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function D2(e) {
  const t = Ib(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function Mr({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var o, a;
  if (Ib(e).type === "input")
    return ln(e, {
      anchorOffset: n,
      focusOffset: t
    });
  (a = r.ownerDocument) === null || a === void 0 || (o = a.getSelection()) === null || o === void 0 || o.setBaseAndExtent(r, n, e, t);
}
function kb(e) {
  return fe(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function en(e, t, r, n = "insertText") {
  const o = D2(t);
  o && (!kb(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: n,
    data: r
  }) || ("startContainer" in o ? N2(e, t, o, r, n) : L2(e, t, o, r, n)));
}
function N2(e, t, r, n, o) {
  let a = !1;
  if (!r.collapsed)
    a = !0, r.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(o)) {
    const i = Ab(r.startContainer, r.startOffset, o === "deleteContentBackward" ? -1 : 1, o);
    if (i) {
      a = !0;
      const s = r.cloneRange();
      s.comparePoint(i.node, i.offset) < 0 ? s.setStart(i.node, i.offset) : s.setEnd(i.node, i.offset), s.deleteContents();
    }
  }
  if (n)
    if (r.endContainer.nodeType === 3) {
      const i = r.endOffset;
      r.endContainer.insertData(i, n), r.setStart(r.endContainer, i + n.length), r.setEnd(r.endContainer, i + n.length);
    } else {
      const i = t.ownerDocument.createTextNode(n);
      r.insertNode(i), r.setStart(i, n.length), r.setEnd(i, n.length);
    }
  (a || n) && e.dispatchUIEvent(t, "input", {
    inputType: o
  });
}
function L2(e, t, r, n, o) {
  let a = n;
  if (S2(t)) {
    const u = T2(t);
    if (u !== void 0 && n.length > 0) {
      const p = u - t.value.length;
      if (p > 0)
        a = n.substring(0, p);
      else
        return;
    }
  }
  const { newValue: i, newOffset: s, oldValue: l } = j2(a, t, r, o);
  i === l && s === r.startOffset && s === r.endOffset || fe(t, "input", {
    type: "number"
  }) && !F2(i) || (R2(t, i), Mr({
    focusNode: t,
    anchorOffset: s,
    focusOffset: s
  }), kb(t) ? Mb(t, i) && (Zp(e, t, s, {}), e.dispatchUIEvent(t, "change"), qb(t)) : Zp(e, t, s, {
    data: n,
    inputType: o
  }));
}
function j2(e, t, { startOffset: r, endOffset: n }, o) {
  const a = Ct(t), i = Math.max(0, r === n && o === "deleteContentBackward" ? r - 1 : r), s = a.substring(0, i), l = Math.min(a.length, r === n && o === "deleteContentForward" ? r + 1 : n), u = a.substring(l, a.length);
  let p = `${s}${e}${u}`, f = i + e.length;
  if (fe(t, "input", {
    type: "time"
  })) {
    const c = w2(p);
    c !== "" && Mb(t, c) && (p = c, f = c.length);
  }
  return {
    oldValue: a,
    newValue: p,
    newOffset: f
  };
}
function Zp(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), I2(t, r);
}
function F2(e) {
  var t, r;
  const n = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 || n[1] && !/^-?\d*$/.test(n[1]));
}
ir.cut = (e, t, r) => () => {
  Zr(t) && en(r, t, "", "deleteByCut");
};
function B2(e) {
  return e ? qr(e) ? e.textContent : Ct(e) : null;
}
function U2(e) {
  const t = dt(e);
  for (let r = e; r?.ownerDocument; r = r.parentElement) {
    const { display: n, visibility: o } = t.getComputedStyle(r);
    if (n === "none" || o === "hidden")
      return !1;
  }
  return !0;
}
function $2(e, t) {
  const r = e.ownerDocument, n = r.querySelectorAll(_b), o = Array.from(n).filter((l) => l === e || !(Number(l.getAttribute("tabindex")) < 0 || Ht(l)));
  Number(e.getAttribute("tabindex")) >= 0 && o.sort((l, u) => {
    const p = Number(l.getAttribute("tabindex")), f = Number(u.getAttribute("tabindex"));
    return p === f ? 0 : p === 0 ? 1 : f === 0 ? -1 : p - f;
  });
  const a = {};
  let i = [
    r.body
  ];
  const s = fe(e, "input", {
    type: "radio"
  }) ? e.name : void 0;
  o.forEach((l) => {
    const u = l;
    if (fe(u, "input", {
      type: "radio"
    }) && u.name) {
      if (u === e) {
        i.push(u);
        return;
      } else if (u.name === s)
        return;
      if (u.checked) {
        i = i.filter((p) => !fe(p, "input", {
          type: "radio",
          name: u.name
        })), i.push(u), a[u.name] = u;
        return;
      }
      if (typeof a[u.name] < "u")
        return;
    }
    i.push(u);
  });
  for (let l = i.findIndex((u) => u === e); ; )
    if (l += t ? -1 : 1, l === i.length ? l = 0 : l === -1 && (l = i.length - 1), i[l] === e || i[l] === r.body || U2(i[l]))
      return i[l];
}
function Xp(e, t) {
  if (Et(e)) {
    const r = Ti(e);
    Mr({
      focusNode: e,
      focusOffset: r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset
    });
  } else {
    const r = e.ownerDocument.getSelection();
    if (!r?.focusNode)
      return;
    if (r.isCollapsed) {
      const n = Ab(r.focusNode, r.focusOffset, t);
      n && Mr({
        focusNode: n.node,
        focusOffset: n.offset
      });
    } else
      r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function Db(e) {
  if (Et(e))
    return Mr({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: Ct(e).length
    });
  var t;
  const r = (t = wi(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  Mr({
    focusNode: r,
    anchorOffset: 0,
    focusOffset: r.childNodes.length
  });
}
function H2(e) {
  if (Et(e))
    return Ti(e).startOffset === 0 && Ti(e).endOffset === Ct(e).length;
  var t;
  const r = (t = wi(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, n = e.ownerDocument.getSelection();
  return n?.anchorNode === r && n.focusNode === r && n.anchorOffset === 0 && n.focusOffset === r.childNodes.length;
}
function oi(e, t, r) {
  var n;
  if (Et(e))
    return Mr({
      focusNode: e,
      anchorOffset: t,
      focusOffset: r
    });
  if (qr(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
    return Mr({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: r
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function ts(e, t, r) {
  const n = dt(t), o = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let a = o.findIndex((i) => i === t) + r; ; a += r) {
    if (o[a] || (a = r > 0 ? 0 : o.length - 1), o[a] === t)
      return;
    if (!Ht(o[a])) {
      ar(o[a]), e.dispatchUIEvent(o[a], "click");
      return;
    }
  }
}
ir.keydown = (e, t, r) => {
  var n, o;
  return (o = (n = Jp[e.key]) === null || n === void 0 ? void 0 : n.call(Jp, e, t, r)) !== null && o !== void 0 ? o : V2(e, t, r);
};
const Jp = {
  ArrowDown: (e, t, r) => {
    if (fe(t, "input", {
      type: "radio"
    }))
      return () => ts(r, t, 1);
  },
  ArrowLeft: (e, t, r) => fe(t, "input", {
    type: "radio"
  }) ? () => ts(r, t, -1) : () => Xp(t, -1),
  ArrowRight: (e, t, r) => fe(t, "input", {
    type: "radio"
  }) ? () => ts(r, t, 1) : () => Xp(t, 1),
  ArrowUp: (e, t, r) => {
    if (fe(t, "input", {
      type: "radio"
    }))
      return () => ts(r, t, -1);
  },
  Backspace: (e, t, r) => {
    if (Zr(t))
      return () => {
        en(r, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, r) => {
    if (Zr(t))
      return () => {
        en(r, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (fe(t, [
      "input",
      "textarea"
    ]) || qr(t))
      return () => {
        var r, n;
        const o = (n = (r = B2(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : (
          /* istanbul ignore next */
          0
        );
        oi(t, o, o);
      };
  },
  Home: (e, t) => {
    if (fe(t, [
      "input",
      "textarea"
    ]) || qr(t))
      return () => {
        oi(t, 0, 0);
      };
  },
  PageDown: (e, t) => {
    if (fe(t, [
      "input"
    ]))
      return () => {
        const r = Ct(t).length;
        oi(t, r, r);
      };
  },
  PageUp: (e, t) => {
    if (fe(t, [
      "input"
    ]))
      return () => {
        oi(t, 0, 0);
      };
  },
  Tab: (e, t, r) => () => {
    const n = $2(t, r.system.keyboard.modifiers.Shift);
    ar(n), Et(n) && ln(n, {
      anchorOffset: 0,
      focusOffset: n.value.length
    });
  }
}, V2 = (e, t, r) => {
  if (e.code === "KeyA" && r.system.keyboard.modifiers.Control)
    return () => Db(t);
};
ir.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (fe(t, "button") || fe(t, "input") && z2.includes(t.type) || fe(t, "a") && t.href)
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (fe(t, "input")) {
      const n = t.form, o = n?.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return o ? () => r.dispatchUIEvent(o, "click") : n && W2.includes(t.type) && n.querySelectorAll("input").length === 1 ? () => r.dispatchUIEvent(n, "submit") : void 0;
    }
  }
  if (Zr(t)) {
    const n = e.key === "Enter" ? qr(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", o = e.key === "Enter" ? `
` : e.key;
    return () => en(r, t, o, n);
  }
};
const z2 = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], W2 = [
  "email",
  "month",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week"
];
ir.keyup = (e, t, r) => {
  var n;
  return (n = em[e.key]) === null || n === void 0 ? void 0 : n.call(em, e, t, r);
};
const em = {
  " ": (e, t, r) => {
    if (Tb(t))
      return () => r.dispatchUIEvent(t, "click");
  }
};
ir.paste = (e, t, r) => {
  if (Zr(t))
    return () => {
      var n;
      const o = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text");
      o && en(r, t, o, "insertFromPaste");
    };
};
const Nb = {
  auxclick: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  beforeinput: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  blur: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  click: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  contextmenu: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  copy: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  change: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !1
    }
  },
  cut: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  dblclick: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  focus: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  focusin: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  focusout: {
    EventType: "FocusEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  keydown: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keypress: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  keyup: {
    EventType: "KeyboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  paste: {
    EventType: "ClipboardEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  input: {
    EventType: "InputEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  mousedown: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseenter: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mouseleave: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1,
      composed: !0
    }
  },
  mousemove: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseout: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseover: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  mouseup: {
    EventType: "MouseEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerover: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerenter: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  pointerdown: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointermove: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerup: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointercancel: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }
  },
  pointerout: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !0,
      cancelable: !0,
      composed: !0
    }
  },
  pointerleave: {
    EventType: "PointerEvent",
    defaultInit: {
      bubbles: !1,
      cancelable: !1
    }
  },
  submit: {
    EventType: "Event",
    defaultInit: {
      bubbles: !0,
      cancelable: !0
    }
  }
};
function Lb(e) {
  return Nb[e].EventType;
}
const G2 = [
  "MouseEvent",
  "PointerEvent"
];
function Y2(e) {
  return G2.includes(Lb(e));
}
function K2(e) {
  return Lb(e) === "KeyboardEvent";
}
const Q2 = {
  ClipboardEvent: [
    X2
  ],
  Event: [],
  FocusEvent: [
    ni,
    J2
  ],
  InputEvent: [
    ni,
    eS
  ],
  MouseEvent: [
    ni,
    pl,
    tm
  ],
  PointerEvent: [
    ni,
    pl,
    tm,
    rS
  ],
  KeyboardEvent: [
    ni,
    pl,
    tS
  ]
};
function jb(e, t, r) {
  const n = dt(t), { EventType: o, defaultInit: a } = Nb[e], i = new (Z2(n))[o](e, a);
  return Q2[o].forEach((s) => s(i, r ?? {})), i;
}
function Z2(e) {
  var t;
  const r = (t = e.Event) !== null && t !== void 0 ? t : class {
  };
  var n;
  const o = (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {
  };
  var a;
  const i = (a = e.ClipboardEvent) !== null && a !== void 0 ? a : class extends r {
  };
  var s;
  const l = (s = e.PopStateEvent) !== null && s !== void 0 ? s : class extends r {
  };
  var u;
  const p = (u = e.ProgressEvent) !== null && u !== void 0 ? u : class extends r {
  };
  var f;
  const c = (f = e.TransitionEvent) !== null && f !== void 0 ? f : class extends r {
  };
  var m;
  const h = (m = e.UIEvent) !== null && m !== void 0 ? m : class extends r {
  };
  var y;
  const C = (y = e.CompositionEvent) !== null && y !== void 0 ? y : class extends h {
  };
  var d;
  const R = (d = e.FocusEvent) !== null && d !== void 0 ? d : class extends h {
  };
  var b;
  const E = (b = e.InputEvent) !== null && b !== void 0 ? b : class extends h {
  };
  var w;
  const g = (w = e.KeyboardEvent) !== null && w !== void 0 ? w : class extends h {
  };
  var v;
  const _ = (v = e.MouseEvent) !== null && v !== void 0 ? v : class extends h {
  };
  var A;
  const O = (A = e.DragEvent) !== null && A !== void 0 ? A : class extends _ {
  };
  var q;
  const I = (q = e.PointerEvent) !== null && q !== void 0 ? q : class extends _ {
  };
  var T;
  const k = (T = e.TouchEvent) !== null && T !== void 0 ? T : class extends h {
  };
  return {
    Event: r,
    AnimationEvent: o,
    ClipboardEvent: i,
    PopStateEvent: l,
    ProgressEvent: p,
    TransitionEvent: c,
    UIEvent: h,
    CompositionEvent: C,
    FocusEvent: R,
    InputEvent: E,
    KeyboardEvent: g,
    MouseEvent: _,
    DragEvent: O,
    PointerEvent: I,
    TouchEvent: k
  };
}
function lr(e, t) {
  for (const [r, n] of Object.entries(t))
    Object.defineProperty(e, r, {
      get: () => n ?? null
    });
}
function De(e) {
  return Number(e ?? 0);
}
function X2(e, { clipboardData: t }) {
  lr(e, {
    clipboardData: t
  });
}
function J2(e, { relatedTarget: t }) {
  lr(e, {
    relatedTarget: t
  });
}
function eS(e, { data: t, inputType: r, isComposing: n }) {
  lr(e, {
    data: t,
    isComposing: !!n,
    inputType: String(r)
  });
}
function ni(e, { view: t, detail: r }) {
  lr(e, {
    view: t,
    detail: De(r ?? 0)
  });
}
function pl(e, { altKey: t, ctrlKey: r, metaKey: n, shiftKey: o, modifierAltGraph: a, modifierCapsLock: i, modifierFn: s, modifierFnLock: l, modifierNumLock: u, modifierScrollLock: p, modifierSymbol: f, modifierSymbolLock: c }) {
  lr(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!o,
    getModifierState(m) {
      return !!{
        Alt: t,
        AltGraph: a,
        CapsLock: i,
        Control: r,
        Fn: s,
        FnLock: l,
        Meta: n,
        NumLock: u,
        ScrollLock: p,
        Shift: o,
        Symbol: f,
        SymbolLock: c
      }[m];
    }
  });
}
function tS(e, { key: t, code: r, location: n, repeat: o, isComposing: a, charCode: i }) {
  lr(e, {
    key: String(t),
    code: String(r),
    location: De(n),
    repeat: !!o,
    isComposing: !!a,
    charCode: i
  });
}
function tm(e, { x: t, y: r, screenX: n, screenY: o, clientX: a = t, clientY: i = r, button: s, buttons: l, relatedTarget: u, offsetX: p, offsetY: f, pageX: c, pageY: m }) {
  lr(e, {
    screenX: De(n),
    screenY: De(o),
    clientX: De(a),
    x: De(a),
    clientY: De(i),
    y: De(i),
    button: De(s),
    buttons: De(l),
    relatedTarget: u,
    offsetX: De(p),
    offsetY: De(f),
    pageX: De(c),
    pageY: De(m)
  });
}
function rS(e, { pointerId: t, width: r, height: n, pressure: o, tangentialPressure: a, tiltX: i, tiltY: s, twist: l, pointerType: u, isPrimary: p }) {
  lr(e, {
    pointerId: De(t),
    width: De(r ?? 1),
    height: De(n ?? 1),
    pressure: De(o),
    tangentialPressure: De(a),
    tiltX: De(i),
    tiltY: De(s),
    twist: De(l),
    pointerType: String(u),
    isPrimary: !!p
  });
}
function nS(e, t, r, n = !1) {
  (Y2(t) || K2(t)) && (r = {
    ...r,
    ...this.system.getUIEventModifiers()
  });
  const o = jb(t, e, r);
  return Fb.call(this, e, o, n);
}
function Fb(e, t, r = !1) {
  var n;
  const o = t.type, a = r ? () => {
  } : (n = ir[o]) === null || n === void 0 ? void 0 : n.call(ir, t, e, this);
  if (a) {
    t.preventDefault();
    let i = !1;
    return Object.defineProperty(t, "defaultPrevented", {
      get: () => i
    }), Object.defineProperty(t, "preventDefault", {
      value: () => {
        i = t.cancelable;
      }
    }), Xr(() => e.dispatchEvent(t)), i || a(), !i;
  }
  return Xr(() => e.dispatchEvent(t));
}
function yr(e, t, r) {
  const n = jb(t, e, r);
  Xr(() => e.dispatchEvent(n));
}
const rm = Symbol("patched focus/blur methods");
function Bb(e) {
  if (e.prototype[rm])
    return;
  const { focus: t, blur: r } = e.prototype;
  Object.defineProperties(e.prototype, {
    focus: {
      configurable: !0,
      get: () => o
    },
    blur: {
      configurable: !0,
      get: () => a
    },
    [rm]: {
      configurable: !0,
      get: () => ({
        focus: t,
        blur: r
      })
    }
  });
  let n;
  function o(i) {
    if (this.ownerDocument.visibilityState !== "hidden")
      return t.call(this, i);
    const s = nm(this.ownerDocument);
    if (s === this)
      return;
    const l = Symbol("focus call");
    n = l, s && (r.call(s), yr(s, "blur", {
      relatedTarget: this
    }), yr(s, "focusout", {
      relatedTarget: n === l ? this : null
    })), n === l && (t.call(this, i), yr(this, "focus", {
      relatedTarget: s
    })), n === l && yr(this, "focusin", {
      relatedTarget: s
    });
  }
  function a() {
    if (this.ownerDocument.visibilityState !== "hidden")
      return r.call(this);
    const i = nm(this.ownerDocument);
    if (i !== this)
      return;
    n = Symbol("blur call"), r.call(this), yr(i, "blur", {
      relatedTarget: null
    }), yr(i, "focusout", {
      relatedTarget: null
    });
  }
}
function nm(e) {
  const t = Li(e);
  return t?.tagName === "BODY" ? null : t;
}
const ml = Symbol("Interceptor for programmatical calls");
function Fr(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = Object.getOwnPropertyDescriptor(e, t), a = n?.set ? "set" : "value";
  if (typeof n?.[a] != "function" || n[a][ml])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...s) {
    const { applyNative: l = !1, realArgs: u, then: p } = r.call(this, ...s), f = (!l && o || n)[a];
    a === "set" ? f.call(this, u) : f.call(this, ...u), p?.();
  }
  i[ml] = ml, Object.defineProperty(e, t, {
    ...o ?? n,
    [a]: i
  });
}
function oS(e) {
  Fr(e, "value", function(r) {
    const n = y2(r);
    return n && O2(this), {
      applyNative: !!n,
      realArgs: aS(this, r),
      then: n ? void 0 : () => A2(this, String(r))
    };
  });
}
function aS(e, t) {
  return fe(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function iS(e) {
  Fr(e, "setSelectionRange", function(r, ...n) {
    const o = g2(r);
    return {
      applyNative: !!o,
      realArgs: [
        Number(r),
        ...n
      ],
      then: () => o ? void 0 : ms(e)
    };
  }), Fr(e, "selectionStart", function(r) {
    return {
      realArgs: r,
      then: () => ms(e)
    };
  }), Fr(e, "selectionEnd", function(r) {
    return {
      realArgs: r,
      then: () => ms(e)
    };
  }), Fr(e, "select", function() {
    return {
      realArgs: [],
      then: () => C2(e, {
        anchorOffset: 0,
        focusOffset: Ct(e).length
      })
    };
  });
}
function sS(e) {
  Fr(e, "setRangeText", function(...r) {
    return {
      realArgs: r,
      then: () => {
        Mu(e), ms(e);
      }
    };
  });
}
const $r = Symbol("Node prepared with document state workarounds");
function Ub(e) {
  e[$r] || (e.addEventListener("focus", (t) => {
    const r = t.target;
    om(r);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && om(e.activeElement), e.addEventListener("blur", (t) => {
    const r = t.target, n = E2(r);
    n !== void 0 && (r.value !== n && yr(r, "change"), qb(r));
  }, {
    capture: !0,
    passive: !0
  }), e[$r] = $r);
}
function om(e) {
  e[$r] || (fe(e, [
    "input",
    "textarea"
  ]) && (oS(e), iS(e), sS(e)), e[$r] = $r);
}
function lS(e) {
  return uS(e) ? e : e.ownerDocument;
}
function uS(e) {
  return e.nodeType === 9;
}
var nt = /* @__PURE__ */ (function(e) {
  return e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call", e;
})({});
function ai(e, t) {
  e.levelRefs[t] = {};
}
function rs(e, t) {
  return e.levelRefs[t];
}
function tn(e) {
  const t = e.delay;
  if (typeof t == "number")
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t)
    ]);
}
var bs = /* @__PURE__ */ (function(e) {
  return e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never", e;
})({});
function mr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Rt = /* @__PURE__ */ (function(e) {
  return e[e.STANDARD = 0] = "STANDARD", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.NUMPAD = 3] = "NUMPAD", e;
})({});
const cS = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function am(e) {
  return cS.includes(e);
}
const dS = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function im(e) {
  return dS.includes(e);
}
class fS {
  isKeyPressed(t) {
    return this.pressed.has(String(t.code));
  }
  getPressedKeys() {
    return this.pressed.values().map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, r) {
    const n = String(r.key), o = String(r.code), a = fl(t.config.document);
    this.setKeydownTarget(a), this.pressed.add(o, r), am(n) && (this.modifiers[n] = !0);
    const i = t.dispatchUIEvent(a, "keydown", {
      key: n,
      code: o
    });
    im(n) && !this.modifiers[n] && (this.modifiers[n] = !0, this.modifierLockStart[n] = !0), i && this.pressed.setUnprevented(o), i && this.hasKeyPress(n) && t.dispatchUIEvent(fl(t.config.document), "keypress", {
      key: n,
      code: o,
      charCode: r.key === "Enter" ? 13 : String(r.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, r) {
    const n = String(r.key), o = String(r.code), a = this.pressed.isUnprevented(o);
    this.pressed.delete(o), am(n) && !this.pressed.values().find((i) => i.keyDef.key === n) && (this.modifiers[n] = !1), t.dispatchUIEvent(fl(t.config.document), "keyup", {
      key: n,
      code: o
    }, !a), im(n) && this.modifiers[n] && (this.modifierLockStart[n] ? this.modifierLockStart[n] = !1 : this.modifiers[n] = !1);
  }
  setKeydownTarget(t) {
    t !== this.lastKeydownTarget && (this.carryChar = ""), this.lastKeydownTarget = t;
  }
  hasKeyPress(t) {
    return (t.length === 1 || t === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
  }
  constructor(t) {
    mr(this, "system", void 0), mr(this, "modifiers", {
      Alt: !1,
      AltGraph: !1,
      CapsLock: !1,
      Control: !1,
      Fn: !1,
      FnLock: !1,
      Meta: !1,
      NumLock: !1,
      ScrollLock: !1,
      Shift: !1,
      Symbol: !1,
      SymbolLock: !1
    }), mr(this, "pressed", new class {
      add(r, n) {
        var o, a, i;
        (i = (o = this.registry)[a = r]) !== null && i !== void 0 || (o[a] = {
          keyDef: n,
          unpreventedDefault: !1
        });
      }
      has(r) {
        return !!this.registry[r];
      }
      setUnprevented(r) {
        const n = this.registry[r];
        n && (n.unpreventedDefault = !0);
      }
      isUnprevented(r) {
        var n;
        return !!(!((n = this.registry[r]) === null || n === void 0) && n.unpreventedDefault);
      }
      delete(r) {
        delete this.registry[r];
      }
      values() {
        return Object.values(this.registry);
      }
      constructor() {
        mr(this, "registry", {});
      }
    }()), mr(this, "carryChar", ""), mr(this, "lastKeydownTarget", void 0), mr(this, "modifierLockStart", {}), this.system = t;
  }
}
const pS = [
  // alphanumeric block - writing system
  ..."0123456789".split("").map((e) => ({
    code: `Digit${e}`,
    key: e
  })),
  ...")!@#$%^&*(".split("").map((e, t) => ({
    code: `Digit${t}`,
    key: e,
    shiftKey: !0
  })),
  ..."abcdefghijklmnopqrstuvwxyz".split("").map((e) => ({
    code: `Key${e.toUpperCase()}`,
    key: e
  })),
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((e) => ({
    code: `Key${e}`,
    key: e,
    shiftKey: !0
  })),
  {
    code: "BracketLeft",
    key: "["
  },
  {
    code: "BracketLeft",
    key: "{",
    shiftKey: !0
  },
  {
    code: "BracketRight",
    key: "]"
  },
  {
    code: "BracketRight",
    key: "}",
    shiftKey: !0
  },
  // alphanumeric block - functional
  {
    code: "Space",
    key: " "
  },
  {
    code: "AltLeft",
    key: "Alt",
    location: Rt.LEFT
  },
  {
    code: "AltRight",
    key: "Alt",
    location: Rt.RIGHT
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: Rt.LEFT
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: Rt.RIGHT
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: Rt.LEFT
  },
  {
    code: "ControlRight",
    key: "Control",
    location: Rt.RIGHT
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: Rt.LEFT
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: Rt.RIGHT
  },
  {
    code: "OSLeft",
    key: "OS",
    location: Rt.LEFT
  },
  {
    code: "OSRight",
    key: "OS",
    location: Rt.RIGHT
  },
  {
    code: "ContextMenu",
    key: "ContextMenu"
  },
  {
    code: "Tab",
    key: "Tab"
  },
  {
    code: "CapsLock",
    key: "CapsLock"
  },
  {
    code: "Backspace",
    key: "Backspace"
  },
  {
    code: "Enter",
    key: "Enter"
  },
  // function
  {
    code: "Escape",
    key: "Escape"
  },
  // arrows
  {
    code: "ArrowUp",
    key: "ArrowUp"
  },
  {
    code: "ArrowDown",
    key: "ArrowDown"
  },
  {
    code: "ArrowLeft",
    key: "ArrowLeft"
  },
  {
    code: "ArrowRight",
    key: "ArrowRight"
  },
  // control pad
  {
    code: "Home",
    key: "Home"
  },
  {
    code: "End",
    key: "End"
  },
  {
    code: "Delete",
    key: "Delete"
  },
  {
    code: "PageUp",
    key: "PageUp"
  },
  {
    code: "PageDown",
    key: "PageDown"
  },
  // Special keys that are not part of a default US-layout but included for specific behavior
  {
    code: "Fn",
    key: "Fn"
  },
  {
    code: "Symbol",
    key: "Symbol"
  },
  {
    code: "AltRight",
    key: "AltGraph"
  }
], mS = [
  {
    name: "MouseLeft",
    pointerType: "mouse",
    button: "primary"
  },
  {
    name: "MouseRight",
    pointerType: "mouse",
    button: "secondary"
  },
  {
    name: "MouseMiddle",
    pointerType: "mouse",
    button: "auxiliary"
  },
  {
    name: "TouchA",
    pointerType: "touch"
  },
  {
    name: "TouchB",
    pointerType: "touch"
  },
  {
    name: "TouchC",
    pointerType: "touch"
  }
];
function hS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class $b {
  getButtons() {
    let t = 0;
    for (const r of Object.keys(this.pressed))
      t |= 2 ** Number(r);
    return t;
  }
  down(t) {
    const r = Vl(t.button);
    if (r in this.pressed) {
      this.pressed[r].push(t);
      return;
    }
    return this.pressed[r] = [
      t
    ], r;
  }
  up(t) {
    const r = Vl(t.button);
    if (r in this.pressed && (this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name), this.pressed[r].length === 0))
      return delete this.pressed[r], r;
  }
  constructor() {
    hS(this, "pressed", {});
  }
}
const sm = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function Vl(e = 0) {
  return e in sm ? sm[e] : Number(e);
}
const lm = {
  1: 2,
  2: 1
};
function zl(e) {
  return e = Vl(e), e in lm ? lm[e] : e;
}
function bS(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class vS {
  get countPressed() {
    return this.pressedKeys.size;
  }
  isPressed(t) {
    return this.pressedKeys.has(t.name);
  }
  addPressed(t) {
    return this.pressedKeys.add(t.name);
  }
  removePressed(t) {
    return this.pressedKeys.delete(t.name);
  }
  constructor() {
    bS(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function ui(e, t) {
  const r = [];
  for (let a = e; a; a = a.parentElement)
    r.push(a);
  const n = [];
  for (let a = t; a; a = a.parentElement)
    n.push(a);
  let o = 0;
  for (; !(o >= r.length || o >= n.length || r[r.length - 1 - o] !== n[n.length - 1 - o]); o++)
    ;
  return [
    r.slice(0, r.length - o),
    n.slice(0, n.length - o),
    n.slice(n.length - o)
  ];
}
function Wl({ target: e, node: t, offset: r }) {
  return Et(e) ? {
    node: e,
    offset: r ?? Ct(e).length
  } : t ? {
    node: t,
    offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : Hb(e, r);
}
function Hb(e, t, r = !0) {
  let n = t === void 0 ? e.childNodes.length - 1 : 0;
  const o = t === void 0 ? -1 : 1;
  for (; t === void 0 ? n >= (r ? Math.max(e.childNodes.length - 1, 0) : 0) : n <= e.childNodes.length; ) {
    if (t && n === e.childNodes.length)
      throw new Error("The given offset is out of bounds.");
    const a = e.childNodes.item(n), i = String(a.textContent);
    if (i.length)
      if (t !== void 0 && i.length < t)
        t -= i.length;
      else {
        if (a.nodeType === 1)
          return Hb(a, t, !1);
        if (a.nodeType === 3)
          return {
            node: a,
            offset: t ?? a.nodeValue.length
          };
      }
    n += o;
  }
  return {
    node: e,
    offset: e.childNodes.length
  };
}
function yS({ document: e, target: t, clickCount: r, node: n, offset: o }) {
  if (h2(t))
    return;
  const a = Et(t), i = String(a ? Ct(t) : t.textContent), [s, l] = n ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      o,
      o
    ]
  ) : gS(i, o, r);
  if (a)
    return ln(t, {
      anchorOffset: s ?? i.length,
      focusOffset: l ?? i.length
    }), {
      node: t,
      start: s ?? 0,
      end: l ?? i.length
    };
  {
    const { node: u, offset: p } = Wl({
      target: t,
      node: n,
      offset: s
    }), { node: f, offset: c } = Wl({
      target: t,
      node: n,
      offset: l
    }), m = t.ownerDocument.createRange();
    try {
      m.setStart(u, p), m.setEnd(f, c);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    const h = e.getSelection();
    return h?.removeAllRanges(), h?.addRange(m.cloneRange()), m;
  }
}
function gS(e, t, r) {
  if (r % 3 === 1 || e.length === 0)
    return [
      t,
      t
    ];
  const n = t ?? e.length;
  return r % 3 === 2 ? [
    n - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length
  ] : [
    n - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
    t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length
  ];
}
function RS(e, { document: t, target: r, node: n, offset: o }) {
  const a = Wl({
    target: r,
    node: n,
    offset: o
  });
  if ("node" in e) {
    if (a.node === e.node) {
      const i = a.offset < e.start ? e.end : e.start, s = a.offset > e.end || a.offset < e.start ? a.offset : e.end;
      ln(e.node, {
        anchorOffset: i,
        focusOffset: s
      });
    }
  } else {
    const i = e.cloneRange(), s = i.comparePoint(a.node, a.offset);
    s < 0 ? i.setStart(a.node, a.offset) : s > 0 && i.setEnd(a.node, a.offset);
    const l = t.getSelection();
    l?.removeAllRanges(), l?.addRange(i.cloneRange());
  }
}
function Vb(e, t) {
  var r, n, o, a, i, s, l, u, p, f, c, m, h, y, C, d, R, b, E, w, g, v, _, A;
  return e.target !== t.target || ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.x) || ((o = e.coords) === null || o === void 0 ? void 0 : o.y) !== ((a = t.coords) === null || a === void 0 ? void 0 : a.y) || ((i = e.coords) === null || i === void 0 ? void 0 : i.clientX) !== ((s = t.coords) === null || s === void 0 ? void 0 : s.clientX) || ((l = e.coords) === null || l === void 0 ? void 0 : l.clientY) !== ((u = t.coords) === null || u === void 0 ? void 0 : u.clientY) || ((p = e.coords) === null || p === void 0 ? void 0 : p.offsetX) !== ((f = t.coords) === null || f === void 0 ? void 0 : f.offsetX) || ((c = e.coords) === null || c === void 0 ? void 0 : c.offsetY) !== ((m = t.coords) === null || m === void 0 ? void 0 : m.offsetY) || ((h = e.coords) === null || h === void 0 ? void 0 : h.pageX) !== ((y = t.coords) === null || y === void 0 ? void 0 : y.pageX) || ((C = e.coords) === null || C === void 0 ? void 0 : C.pageY) !== ((d = t.coords) === null || d === void 0 ? void 0 : d.pageY) || ((R = e.coords) === null || R === void 0 ? void 0 : R.screenX) !== ((b = t.coords) === null || b === void 0 ? void 0 : b.screenX) || ((E = e.coords) === null || E === void 0 ? void 0 : E.screenY) !== ((w = t.coords) === null || w === void 0 ? void 0 : w.screenY) || ((g = e.caret) === null || g === void 0 ? void 0 : g.node) !== ((v = t.caret) === null || v === void 0 ? void 0 : v.node) || ((_ = e.caret) === null || _ === void 0 ? void 0 : _.offset) !== ((A = t.caret) === null || A === void 0 ? void 0 : A.offset);
}
function hr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class ES {
  move(t, r, n) {
    const o = this.position, a = this.getTarget(t);
    if (this.position = r, !Vb(o, r))
      return;
    const i = this.getTarget(t), s = this.getEventInit("mousemove"), [l, u] = ui(a, i);
    return {
      leave: () => {
        a !== i && (t.dispatchUIEvent(a, "mouseout", s), l.forEach((p) => t.dispatchUIEvent(p, "mouseleave", s)));
      },
      enter: () => {
        a !== i && (t.dispatchUIEvent(i, "mouseover", s), u.forEach((p) => t.dispatchUIEvent(p, "mouseenter", s)));
      },
      move: () => {
        n || (t.dispatchUIEvent(i, "mousemove", s), this.modifySelecting(t));
      }
    };
  }
  down(t, r, n) {
    const o = this.buttons.down(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    this.buttonDownTarget[o] = a;
    const i = this.getEventInit("mousedown", r.button), s = Ht(a);
    !n && (s || t.dispatchUIEvent(a, "mousedown", i)) && (this.startSelecting(t, i.detail), ar(a)), !s && zl(r.button) === 2 && t.dispatchUIEvent(a, "contextmenu", this.getEventInit("contextmenu", r.button));
  }
  up(t, r, n) {
    const o = this.buttons.up(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    if (!Ht(a)) {
      if (!n) {
        const s = this.getEventInit("mouseup", r.button);
        t.dispatchUIEvent(a, "mouseup", s), this.endSelecting();
      }
      const i = ui(this.buttonDownTarget[o], a)[2][0];
      if (i) {
        const s = this.getEventInit("click", r.button);
        s.detail && (t.dispatchUIEvent(i, s.button === 0 ? "click" : "auxclick", s), s.button === 0 && s.detail === 2 && t.dispatchUIEvent(i, "dblclick", {
          ...this.getEventInit("dblclick", r.button),
          detail: s.detail
        }));
      }
    }
  }
  resetClickCount() {
    this.clickCount.reset();
  }
  getEventInit(t, r) {
    const n = {
      ...this.position.coords
    };
    return n.button = zl(r), n.buttons = this.buttons.getButtons(), t === "mousedown" ? n.detail = this.clickCount.getOnDown(n.button) : t === "mouseup" ? n.detail = this.clickCount.getOnUp(n.button) : (t === "click" || t === "auxclick") && (n.detail = this.clickCount.incOnClick(n.button)), n;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  startSelecting(t, r) {
    var n, o;
    this.selecting = yS({
      document: t.config.document,
      target: this.getTarget(t),
      node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
      offset: (o = this.position.caret) === null || o === void 0 ? void 0 : o.offset,
      clickCount: r
    });
  }
  modifySelecting(t) {
    var r, n;
    this.selecting && RS(this.selecting, {
      document: t.config.document,
      target: this.getTarget(t),
      node: (r = this.position.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (n = this.position.caret) === null || n === void 0 ? void 0 : n.offset
    });
  }
  endSelecting() {
    this.selecting = void 0;
  }
  constructor() {
    hr(this, "position", {}), hr(this, "buttons", new $b()), hr(this, "selecting", void 0), hr(this, "buttonDownTarget", {}), hr(this, "clickCount", new class {
      incOnClick(t) {
        const r = this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
        return this.count = this.count[t] === void 0 ? {} : {
          [t]: Number(this.count[t]) + 1
        }, r;
      }
      getOnDown(t) {
        var r;
        this.down = {
          [t]: (r = this.count[t]) !== null && r !== void 0 ? r : 0
        };
        var n;
        return this.count = {
          [t]: (n = this.count[t]) !== null && n !== void 0 ? n : 0
        }, Number(this.count[t]) + 1;
      }
      getOnUp(t) {
        return this.down[t] === void 0 ? void 0 : Number(this.down[t]) + 1;
      }
      reset() {
        this.count = {};
      }
      constructor() {
        hr(this, "down", {}), hr(this, "count", {});
      }
    }());
  }
}
function Is(e, t) {
  var r;
  return ((r = zb(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function CS(e) {
  const t = dt(e);
  for (let r = e, n = []; r?.ownerDocument; r = r.parentElement) {
    n.push(r);
    const o = t.getComputedStyle(r).pointerEvents;
    if (o && ![
      "inherit",
      "unset"
    ].includes(o))
      return {
        pointerEvents: o,
        tree: n
      };
  }
}
const um = Symbol("Last check for pointer-events");
function zb(e, t) {
  const r = t[um];
  if (!(e.config.pointerEventsCheck !== bs.Never && (!r || cm(e.config.pointerEventsCheck, bs.EachApiCall) && r[nt.Call] !== rs(e, nt.Call) || cm(e.config.pointerEventsCheck, bs.EachTrigger) && r[nt.Trigger] !== rs(e, nt.Trigger))))
    return r?.result;
  const o = CS(t);
  return t[um] = {
    [nt.Call]: rs(e, nt.Call),
    [nt.Trigger]: rs(e, nt.Trigger),
    result: o
  }, o;
}
function ii(e, t) {
  const r = zb(e, t);
  if (r?.pointerEvents === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      _S(r.tree)
    ].join(`
`));
}
function _S(e) {
  return e.reverse().map((t, r) => [
    "".padEnd(r),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    wS(t),
    e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function wS(e) {
  var t;
  let r;
  if (e.hasAttribute("aria-label"))
    r = e.getAttribute("aria-label");
  else if (e.hasAttribute("aria-labelledby")) {
    var n, o;
    r = (o = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby"))) === null || o === void 0 || (n = o.textContent) === null || n === void 0 ? void 0 : n.trim();
  } else if (fe(e, [
    "button",
    "input",
    "meter",
    "output",
    "progress",
    "select",
    "textarea"
  ]) && (!((t = e.labels) === null || t === void 0) && t.length))
    r = Array.from(e.labels).map((i) => {
      var s;
      return (s = i.textContent) === null || s === void 0 ? void 0 : s.trim();
    }).join("|");
  else if (fe(e, "button")) {
    var a;
    r = (a = e.textContent) === null || a === void 0 ? void 0 : a.trim();
  }
  return r = r?.replace(/\n/g, "  "), Number(r?.length) > 30 && (r = `${r?.substring(0, 29)}…`), r ? `(label=${r})` : "";
}
function cm(e, t) {
  return (e & t) > 0;
}
function Nt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class TS {
  init(t) {
    const r = this.getTarget(t), [, n] = ui(null, r), o = this.getEventInit();
    return ii(t, r), t.dispatchUIEvent(r, "pointerover", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerenter", o)), this;
  }
  move(t, r) {
    const n = this.position, o = this.getTarget(t);
    if (this.position = r, !Vb(n, r))
      return;
    const a = this.getTarget(t), i = this.getEventInit(-1), [s, l] = ui(o, a);
    return {
      leave: () => {
        Is(t, o) && o !== a && (t.dispatchUIEvent(o, "pointerout", i), s.forEach((u) => t.dispatchUIEvent(u, "pointerleave", i)));
      },
      enter: () => {
        ii(t, a), o !== a && (t.dispatchUIEvent(a, "pointerover", i), l.forEach((u) => t.dispatchUIEvent(u, "pointerenter", i)));
      },
      move: () => {
        t.dispatchUIEvent(a, "pointermove", i);
      }
    };
  }
  down(t, r = 0) {
    if (this.isDown)
      return;
    const n = this.getTarget(t);
    ii(t, n), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(n, "pointerdown", this.getEventInit(r));
  }
  up(t, r = 0) {
    if (!this.isDown)
      return;
    const n = this.getTarget(t);
    ii(t, n), this.isPrevented = !1, this.isDown = !1, t.dispatchUIEvent(n, "pointerup", this.getEventInit(r));
  }
  release(t) {
    const r = this.getTarget(t), [n] = ui(r, null), o = this.getEventInit();
    Is(t, r) && (t.dispatchUIEvent(r, "pointerout", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerleave", o))), this.isCancelled = !0;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  getEventInit(t) {
    return {
      ...this.position.coords,
      pointerId: this.pointerId,
      pointerType: this.pointerType,
      isPrimary: this.isPrimary,
      button: zl(t),
      buttons: this.buttons.getButtons()
    };
  }
  constructor({ pointerId: t, pointerType: r, isPrimary: n }, o) {
    Nt(this, "pointerId", void 0), Nt(this, "pointerType", void 0), Nt(this, "isPrimary", void 0), Nt(this, "buttons", void 0), Nt(this, "isMultitouch", !1), Nt(this, "isCancelled", !1), Nt(this, "isDown", !1), Nt(this, "isPrevented", !1), Nt(this, "position", {}), this.pointerId = t, this.pointerType = r, this.isPrimary = n, this.isMultitouch = !n, this.buttons = o;
  }
}
function tr(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class SS {
  isKeyPressed(t) {
    return this.devices.get(t.pointerType).isPressed(t);
  }
  async press(t, r, n) {
    this.devices.get(r.pointerType).addPressed(r), this.buttons.down(r);
    const o = this.getPointerName(r), a = r.pointerType === "touch" ? this.pointers.new(o, r.pointerType, this.buttons) : this.pointers.get(o);
    a.position = n, a.pointerType !== "touch" && (this.mouse.position = n), a.pointerType === "touch" && a.init(t), a.down(t, r.button), a.pointerType !== "touch" && this.mouse.down(t, r, a.isPrevented);
  }
  async move(t, r, n) {
    const o = this.pointers.get(r), a = o.move(t, n), i = o.pointerType === "touch" ? void 0 : this.mouse.move(t, n, o.isPrevented);
    a?.leave(), i?.leave(), a?.enter(), i?.enter(), a?.move(), i?.move();
  }
  async release(t, r, n) {
    const o = this.devices.get(r.pointerType);
    o.removePressed(r), this.buttons.up(r);
    const a = this.pointers.get(this.getPointerName(r)), i = a.isPrevented;
    if (a.position = n, a.pointerType !== "touch" && (this.mouse.position = n), o.countPressed === 0 && a.up(t, r.button), a.pointerType === "touch" && a.release(t), a.pointerType === "touch" && !a.isMultitouch) {
      const s = this.mouse.move(t, n, i);
      s?.leave(), s?.enter(), s?.move(), this.mouse.down(t, r, i);
    }
    if (!a.isMultitouch) {
      const s = this.mouse.move(t, n, i);
      s?.leave(), s?.enter(), s?.move(), this.mouse.up(t, r, i);
    }
  }
  getPointerName(t) {
    return t.pointerType === "touch" ? t.name : t.pointerType;
  }
  getPreviousPosition(t) {
    return this.pointers.has(t) ? this.pointers.get(t).position : void 0;
  }
  resetClickCount() {
    this.mouse.resetClickCount();
  }
  getMouseTarget(t) {
    var r;
    return (r = this.mouse.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  setMousePosition(t) {
    this.mouse.position = t, this.pointers.get("mouse").position = t;
  }
  constructor(t) {
    tr(this, "system", void 0), tr(this, "mouse", void 0), tr(this, "buttons", void 0), tr(this, "devices", new class {
      get(r) {
        var n, o, a;
        return (a = (n = this.registry)[o = r]) !== null && a !== void 0 ? a : n[o] = new vS();
      }
      constructor() {
        tr(this, "registry", {});
      }
    }()), tr(this, "pointers", new class {
      new(r, n, o) {
        const a = n !== "touch" || !Object.values(this.registry).some((i) => i.pointerType === "touch" && !i.isCancelled);
        return a || Object.values(this.registry).forEach((i) => {
          i.pointerType === n && !i.isCancelled && (i.isMultitouch = !0);
        }), this.registry[r] = new TS({
          pointerId: this.nextId++,
          pointerType: n,
          isPrimary: a
        }, o), this.registry[r];
      }
      get(r) {
        if (!this.has(r))
          throw new Error(`Trying to access pointer "${r}" which does not exist.`);
        return this.registry[r];
      }
      has(r) {
        return r in this.registry;
      }
      constructor() {
        tr(this, "registry", {}), tr(this, "nextId", 1);
      }
    }()), this.system = t, this.buttons = new $b(), this.mouse = new ES(), this.pointers.new("mouse", "mouse", this.buttons);
  }
}
function dm(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Wb {
  getUIEventModifiers() {
    return {
      altKey: this.keyboard.modifiers.Alt,
      ctrlKey: this.keyboard.modifiers.Control,
      metaKey: this.keyboard.modifiers.Meta,
      shiftKey: this.keyboard.modifiers.Shift,
      modifierAltGraph: this.keyboard.modifiers.AltGraph,
      modifierCapsLock: this.keyboard.modifiers.CapsLock,
      modifierFn: this.keyboard.modifiers.Fn,
      modifierFnLock: this.keyboard.modifiers.FnLock,
      modifierNumLock: this.keyboard.modifiers.NumLock,
      modifierScrollLock: this.keyboard.modifiers.ScrollLock,
      modifierSymbol: this.keyboard.modifiers.Symbol,
      modifierSymbolLock: this.keyboard.modifiers.SymbolLock
    };
  }
  constructor() {
    dm(this, "keyboard", new fS(this)), dm(this, "pointer", new SS(this));
  }
}
async function PS(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function xS(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function qS(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function MS(e) {
  return this.pointer({
    target: e
  });
}
async function OS(e) {
  return ii(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function AS({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
var Au = /* @__PURE__ */ (function(e) {
  return e["{"] = "}", e["["] = "]", e;
})(Au || {});
function Gb(e, t) {
  let r = 0;
  const n = e[r] in Au ? e[r] : "";
  r += n.length;
  const a = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return {
    type: a,
    ...a === "" ? IS(e, r, t) : kS(e, r, a, t)
  };
}
function IS(e, t, r) {
  const n = e[t];
  return Yb(n, e, t, r), t += n.length, {
    consumedLength: t,
    descriptor: n,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function kS(e, t, r, n) {
  var o, a;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const s = r === "{" && e[t] === "\\";
  t += Number(s);
  const l = s ? e[t] : (o = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || o === void 0 ? void 0 : o[0];
  Yb(l, e, t, n), t += l.length;
  var u;
  const p = (u = (a = e.slice(t).match(/^>\d+/)) === null || a === void 0 ? void 0 : a[0]) !== null && u !== void 0 ? u : "";
  t += p.length;
  const f = e[t] === "/" || !p && e[t] === ">" ? e[t] : "";
  t += f.length;
  const c = Au[r], m = e[t] === c ? c : "";
  if (!m)
    throw new Error(Kb([
      !p && "repeat modifier",
      !f && "release modifier",
      `"${c}"`
    ].filter(Boolean).join(" or "), e[t], e, n));
  return t += m.length, {
    consumedLength: t,
    descriptor: l,
    releasePrevious: !!i,
    repeat: p ? Math.max(Number(p.substr(1)), 1) : 1,
    releaseSelf: DS(f, p)
  };
}
function Yb(e, t, r, n) {
  if (!e)
    throw new Error(Kb("key descriptor", t[r], t, n));
}
function DS(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function Kb(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${n === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function NS(e, t) {
  const r = [];
  do {
    const { type: o, descriptor: a, consumedLength: i, releasePrevious: s, releaseSelf: l = !0, repeat: u } = Gb(t, "keyboard");
    var n;
    const p = (n = e.find((f) => {
      if (o === "[") {
        var c;
        return ((c = f.code) === null || c === void 0 ? void 0 : c.toLowerCase()) === a.toLowerCase();
      } else if (o === "{") {
        var m;
        return ((m = f.key) === null || m === void 0 ? void 0 : m.toLowerCase()) === a.toLowerCase();
      }
      return f.key === a;
    })) !== null && n !== void 0 ? n : {
      key: "Unknown",
      code: "Unknown",
      [o === "[" ? "code" : "key"]: a
    };
    r.push({
      keyDef: p,
      releasePrevious: s,
      releaseSelf: l,
      repeat: u
    }), t = t.slice(i);
  } while (t);
  return r;
}
async function LS(e) {
  const t = NS(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await tn(this.config), await jS(this, t[r]);
}
async function jS(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: o }) {
  const { system: a } = e;
  if (a.keyboard.isKeyPressed(t) && await a.keyboard.keyup(e, t), !r) {
    for (let i = 1; i <= o; i++)
      await a.keyboard.keydown(e, t), i < o && await tn(e.config);
    n && await a.keyboard.keyup(e, t);
  }
}
async function FS(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function Qb(e) {
  const t = Et(e) ? {
    "text/plain": BS(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, r = Pu(dt(e));
  for (const n in t)
    t[n] && r.setData(n, t[n]);
  return r;
}
function BS(e) {
  const t = Ti(e);
  return Ct(e).substring(t.startOffset, t.endOffset);
}
async function US() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = Qb(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", {
      clipboardData: n
    }) && this.config.writeToClipboard && await Cb(e, n), n;
}
async function $S() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = Qb(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", {
      clipboardData: n
    }) && this.config.writeToClipboard && await Cb(r.ownerDocument, n), n;
}
async function HS(e) {
  const t = this.config.document;
  var r;
  const n = (r = t.activeElement) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    t.body
  );
  var o;
  const a = (o = typeof e == "string" ? VS(t, e) : e) !== null && o !== void 0 ? o : await d2(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(n, "paste", {
    clipboardData: a
  });
}
function VS(e, t) {
  const r = Pu(dt(e));
  return r.setData("text", t), r;
}
function fm(e, t) {
  const r = [];
  do {
    const { descriptor: n, consumedLength: o, releasePrevious: a, releaseSelf: i = !0 } = Gb(t, "pointer"), s = e.find((l) => l.name === n);
    s && r.push({
      keyDef: s,
      releasePrevious: a,
      releaseSelf: i
    }), t = t.slice(o);
  } while (t);
  return r;
}
async function zS(e) {
  const { pointerMap: t } = this.config, r = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((n) => {
    typeof n == "string" ? r.push(...fm(t, n)) : "keys" in n ? r.push(...fm(t, n.keys).map((o) => ({
      ...n,
      ...o
    }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await tn(this.config), await WS(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function WS(e, t) {
  var r, n;
  const o = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", a = e.system.pointer.getPreviousPosition(o);
  var i, s, l, u;
  const p = {
    target: (i = t.target) !== null && i !== void 0 ? i : GS(e, a),
    coords: (s = t.coords) !== null && s !== void 0 ? s : a?.coords,
    caret: {
      node: (l = t.node) !== null && l !== void 0 ? l : pm(t) || a == null || (r = a.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (u = t.offset) !== null && u !== void 0 ? u : pm(t) || a == null || (n = a.caret) === null || n === void 0 ? void 0 : n.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (ai(e, nt.Trigger), await e.system.pointer.release(e, t.keyDef, p)), t.releasePrevious || (ai(e, nt.Trigger), await e.system.pointer.press(e, t.keyDef, p), t.releaseSelf && (ai(e, nt.Trigger), await e.system.pointer.release(e, t.keyDef, p)))) : (ai(e, nt.Trigger), await e.system.pointer.move(e, o, p));
}
function pm(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function GS(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function YS(e) {
  if (!Zr(e) || Ht(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (ar(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (Db(e), !H2(e))
    throw new Error("The element content to be cleared could not be selected.");
  en(this, e, "", "deleteContentBackward");
}
async function KS(e, t) {
  return Zb.call(this, !0, e, t);
}
async function QS(e, t) {
  return Zb.call(this, !1, e, t);
}
async function Zb(e, t, r) {
  if (!e && !t.multiple)
    throw Ee().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const n = Array.isArray(r) ? r : [
    r
  ], o = Array.from(t.querySelectorAll('option, [role="option"]')), a = n.map((s) => {
    if (typeof s != "string" && o.includes(s))
      return s;
    {
      const l = o.find((u) => u.value === s || u.innerHTML === s);
      if (l)
        return l;
      throw Ee().getElementError(`Value "${String(s)}" not found in options`, t);
    }
  }).filter((s) => !Ht(s));
  if (Ht(t) || !a.length) return;
  const i = (s) => {
    s.selected = e, this.dispatchUIEvent(t, "input", {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }), this.dispatchUIEvent(t, "change");
  };
  if (fe(t, "select"))
    if (t.multiple)
      for (const s of a) {
        const l = this.config.pointerEventsCheck === 0 ? !0 : Is(this, s);
        l && (this.dispatchUIEvent(s, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(s, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(s, "pointermove"), this.dispatchUIEvent(s, "mousemove"), this.dispatchUIEvent(s, "pointerdown"), this.dispatchUIEvent(s, "mousedown")), ar(t), l && (this.dispatchUIEvent(s, "pointerup"), this.dispatchUIEvent(s, "mouseup")), i(s), l && this.dispatchUIEvent(s, "click"), await tn(this.config);
      }
    else if (a.length === 1) {
      const s = this.config.pointerEventsCheck === 0 ? !0 : Is(this, t);
      s ? await this.click(t) : ar(t), i(a[0]), s && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await tn(this.config);
    } else
      throw Ee().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const s of a)
      await this.click(s), await this.unhover(s);
  else
    throw Ee().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function ZS(e, t, { skipClick: r = this.config.skipClick, skipAutoClose: n = this.config.skipAutoClose, initialSelectionStart: o, initialSelectionEnd: a } = {}) {
  e.disabled || (r || await this.click(e), o !== void 0 && oi(e, o, a ?? o), await this.keyboard(t), n || await FS(this));
}
const mm = Symbol("files and value properties are mocked");
function hl(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function XS(e, t) {
  var r;
  (r = e[mm]) === null || r === void 0 || r.restore();
  const n = Object.getOwnPropertyDescriptor(e, "type"), o = Object.getOwnPropertyDescriptor(e, "value"), a = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    hl(e, "type", n), hl(e, "value", o), hl(e, "files", a);
  }
  e[mm] = {
    restore: i
  }, Object.defineProperties(e, {
    files: {
      configurable: !0,
      get: () => t
    },
    value: {
      configurable: !0,
      get: () => t.length ? `C:\\fakepath\\${t[0].name}` : "",
      set(s) {
        if (s === "")
          i();
        else {
          var l;
          o == null || (l = o.set) === null || l === void 0 || l.call(e, s);
        }
      }
    },
    type: {
      configurable: !0,
      get: () => "file",
      set(s) {
        s !== "file" && (i(), e.type = s);
      }
    }
  });
}
async function JS(e, t) {
  const r = fe(e, "label") ? e.control : e;
  if (!r || !fe(r, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r?.tagName} element does not accept file uploads`);
  if (Ht(e)) return;
  const n = (Array.isArray(t) ? t : [
    t
  ]).filter((a) => !this.config.applyAccept || eP(a, r.accept)).slice(0, r.multiple ? void 0 : 1), o = () => {
    var a;
    n.length === ((a = r.files) === null || a === void 0 ? void 0 : a.length) && n.every((i, s) => {
      var l;
      return i === ((l = r.files) === null || l === void 0 ? void 0 : l.item(s));
    }) || (XS(r, Su(dt(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
  };
  r.addEventListener("fileDialog", o), await this.click(e), r.removeEventListener("fileDialog", o);
}
function ns(e) {
  return e.toLowerCase().replace(/(\.|\/)jpg\b/g, "$1jpeg");
}
function eP(e, t) {
  if (!t)
    return !0;
  const r = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return ns(t).trim().split(/\s*,\s*/).some((n) => n.startsWith(".") ? ns(e.name).endsWith(n) : r.includes(n) ? ns(e.type).startsWith(n.replace("*", "")) : ns(e.type) === n);
}
const hm = {
  click: PS,
  dblClick: xS,
  tripleClick: qS,
  hover: MS,
  unhover: OS,
  tab: AS,
  keyboard: LS,
  copy: US,
  cut: $S,
  paste: HS,
  pointer: zS,
  clear: YS,
  deselectOptions: QS,
  selectOptions: KS,
  type: ZS,
  upload: JS
};
function tP(e) {
  return Ee().asyncWrapper(e);
}
const Xb = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: pS,
  pointerMap: mS,
  pointerEventsCheck: bs.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, rP = {
  ...Xb,
  writeToClipboard: !0
};
function Jb(e = {}, t = rP, r) {
  const n = iP(e, r, t);
  return {
    ...t,
    ...e,
    document: n
  };
}
function nP(e = {}) {
  const t = Jb(e);
  Ub(t.document), Bb(dt(t.document).HTMLElement);
  var r;
  const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    globalThis.window
  );
  return l2(n), Iu(t).api;
}
function Ze({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  const o = Jb(r, Xb, n);
  Ub(o.document), Bb(dt(o.document).HTMLElement);
  var a;
  const i = (a = t ?? e) !== null && a !== void 0 ? a : new Wb();
  return {
    api: Iu(o, i).api,
    system: i
  };
}
function oP(e) {
  return Iu({
    ...this.config,
    ...e
  }, this.system).api;
}
function aP(e, t) {
  function r(...n) {
    return ai(e, nt.Call), tP(() => t.apply(e, n).then(async (o) => (await tn(e.config), o)));
  }
  return Object.defineProperty(r, "name", {
    get: () => t.name
  }), r;
}
function Iu(e, t = new Wb()) {
  const r = {};
  return Object.assign(r, {
    config: e,
    dispatchEvent: Fb.bind(r),
    dispatchUIEvent: nS.bind(r),
    system: t,
    levelRefs: {},
    ...hm
  }), {
    instance: r,
    api: {
      ...Object.fromEntries(Object.entries(hm).map(([n, o]) => [
        n,
        aP(r, o)
      ])),
      setup: oP.bind(r)
    }
  };
}
function iP(e, t, r) {
  var n, o;
  return (o = (n = e.document) !== null && n !== void 0 ? n : t && lS(t)) !== null && o !== void 0 ? o : r.document;
}
function sP(e) {
  return Ze().api.clear(e);
}
function lP(e, t = {}) {
  return Ze(t, e).api.click(e);
}
function uP(e = {}) {
  return Ze(e).api.copy();
}
function cP(e = {}) {
  return Ze(e).api.cut();
}
function dP(e, t = {}) {
  return Ze(t).api.dblClick(e);
}
function fP(e, t, r = {}) {
  return Ze(r).api.deselectOptions(e, t);
}
function pP(e, t = {}) {
  return Ze(t).api.hover(e);
}
async function mP(e, t = {}) {
  const { api: r, system: n } = Ze(t);
  return r.keyboard(e).then(() => n);
}
async function hP(e, t = {}) {
  const { api: r, system: n } = Ze(t);
  return r.pointer(e).then(() => n);
}
function bP(e, t) {
  return Ze(t).api.paste(e);
}
function vP(e, t, r = {}) {
  return Ze(r).api.selectOptions(e, t);
}
function yP(e, t = {}) {
  return Ze(t).api.tripleClick(e);
}
function gP(e, t, r = {}) {
  return Ze(r, e).api.type(e, t, r);
}
function RP(e, t = {}) {
  const { api: r, system: n } = Ze(t);
  return n.pointer.setMousePosition({
    target: e
  }), r.unhover(e);
}
function EP(e, t, r = {}) {
  return Ze(r).api.upload(e, t);
}
function CP(e = {}) {
  return Ze().api.tab(e);
}
const _P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: sP,
  click: lP,
  copy: uP,
  cut: cP,
  dblClick: dP,
  deselectOptions: fP,
  hover: pP,
  keyboard: mP,
  paste: bP,
  pointer: hP,
  selectOptions: vP,
  tab: CP,
  tripleClick: yP,
  type: gP,
  unhover: RP,
  upload: EP
}, Symbol.toStringTag, { value: "Module" })), ev = {
  ..._P,
  setup: nP
};
function wP(e, t = {}) {
  return {
    user: ev.setup(),
    ...Tu(e, t)
  };
}
function TP(e, t, r = {}) {
  const {
    middlewares: n,
    preloadedState: o,
    // Automatically create a store instance if no store was passed in
    store: a = Lh({ reducer: t, middlewares: n, preloadedState: o }),
    ...i
  } = r, s = ({ children: l }) => /* @__PURE__ */ D.jsx(Fm, { store: a, children: l });
  return {
    store: a,
    user: ev.setup(),
    ...Tu(e, { wrapper: s, ...i })
  };
}
const SP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  renderWithStore: TP,
  renderWithUser: wP
}, Symbol.toStringTag, { value: "Module" }));
function PP(e) {
  window.FreshworksWidget(e);
}
function xP() {
  window.Optanon.ToggleInfoDisplay();
}
const qP = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  configureFreshworksWidget: PP,
  toggleOneTrustInfoDisplay: xP
}, Symbol.toStringTag, { value: "Module" })), eq = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  api: Wy,
  auth: My,
  form: dg,
  general: Py,
  router: i1,
  schema: zy,
  store: $R,
  test: SP,
  theme: g1,
  window: qP
}, Symbol.toStringTag, { value: "Module" }));
export {
  Gy as AUTH_FACTOR_TAG,
  Rx as App,
  KP as BASE_URL,
  Gu as CLASS_TAG,
  my as CSRF_COOKIE_NAME,
  Ex as ClickableTooltip,
  Cx as CopyIconButton,
  m1 as Countdown,
  ZP as DEV,
  _x as DownloadFileButton,
  wx as ElevatedAppBar,
  bh as Image,
  Ox as InactiveDialog,
  Tx as InputFileButton,
  Sx as ItemizedList,
  cx as Link,
  ic as LinkButton,
  dx as LinkIconButton,
  fx as LinkListItem,
  px as LinkTab,
  YP as MODE,
  vx as Navigator,
  Px as OrderedGrid,
  QP as PROD,
  Yy as SCHOOL_TAG,
  py as SERVICE_API_URL,
  fy as SERVICE_NAME,
  hy as SESSION_COOKIE_NAME,
  Ns as SESSION_METADATA_COOKIE_NAME,
  XP as SSR,
  Ax as ScreenTimeDialog,
  xx as ScrollIntoViewLink,
  Xm as SyncError,
  qx as TablePagination,
  kx as ThemedBox,
  Yu as USER_TAG,
  Mx as YouTubeVideo,
  ex as buildLoginEndpoint,
  _y as buildLogoutEndpoint,
  tx as createApi,
  yy as createSlice,
  sx as forms,
  rx as getReadAuthFactorEndpoints,
  nx as getReadClassEndpoints,
  ox as getReadSchoolEndpoints,
  ax as getReadUserEndpoints,
  Ix as logoutMiddleware,
  yx as pages,
  ix as schemas,
  Bm as sessionSlice,
  gx as tables,
  cy as tagTypes,
  Dx as theme,
  wh as themeOptions,
  Vr as urls,
  s1 as useCountdown,
  bx as useEventListener,
  hx as useExternalScript,
  mx as useInputRef,
  uu as useLocation,
  Fs as useNavigate,
  ux as useOAuth2,
  t1 as useOAuth2CodeChallenge,
  e1 as useOAuth2State,
  ih as usePagination,
  Xg as useParams,
  lx as useParamsRequired,
  yh as useSearchParams,
  Jg as useSession,
  gs as useSessionMetadata,
  eq as utils,
  JP as vite
};
//# sourceMappingURL=codeforlife.es.js.map
