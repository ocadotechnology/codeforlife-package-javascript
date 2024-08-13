export type Required<T, K extends keyof T> = { [P in K]-?: T[P] }
export type Optional<T, K extends keyof T> = Partial<Pick<T, K>>

export function openInNewTab(url: string, target = "_blank"): void {
  window.open(url, target)
}

export function wrap(
  newFn: {
    before?: (...args: any[]) => void
    after?: (...args: any[]) => void
  },
  fn?: (...args: any[]) => any,
): (...args: any[]) => any {
  return (...args) => {
    if (newFn.before !== undefined) {
      newFn.before(...args)
    }
    let value
    if (fn !== undefined) {
      value = fn(...args)
    }
    if (newFn.after !== undefined) {
      newFn.after(...args)
    }
    return value
  }
}

export function snakeCaseToCamelCase(obj: Record<string, any>): void {
  Object.entries(obj).forEach(([snakeKey, value]) => {
    if (typeof value === "object") snakeCaseToCamelCase(value)

    const camelKey = snakeKey.replace(/_+[a-z]/g, _char =>
      _char[_char.length - 1].toUpperCase(),
    )

    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete obj[snakeKey]
    obj[camelKey] = value
  })
}

export function camelCaseToSnakeCase(obj: Record<string, any>): void {
  Object.entries(obj).forEach(([camelKey, value]) => {
    if (typeof value === "object") camelCaseToSnakeCase(value)

    const snakeKey = camelKey.replace(
      /[A-Z]/g,
      char => `_${char.toLowerCase()}`,
    )

    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete obj[camelKey]
    obj[snakeKey] = value
  })
}

export const MIN_DATE = new Date(0, 0, 0)

export const COUNTRY_ISO_CODES = [
  "AF",
  "AX",
  "AL",
  "DZ",
  "AS",
  "AD",
  "AO",
  "AI",
  "AQ",
  "AG",
  "AR",
  "AM",
  "AW",
  "AU",
  "AT",
  "AZ",
  "BS",
  "BH",
  "BD",
  "BB",
  "BY",
  "BE",
  "BZ",
  "BJ",
  "BM",
  "BT",
  "BO",
  "BQ",
  "BA",
  "BW",
  "BV",
  "BR",
  "IO",
  "BN",
  "BG",
  "BF",
  "BI",
  "KH",
  "CM",
  "CA",
  "CV",
  "KY",
  "CF",
  "TD",
  "CL",
  "CN",
  "CX",
  "CC",
  "CO",
  "KM",
  "CG",
  "CD",
  "CK",
  "CR",
  "CI",
  "HR",
  "CU",
  "CW",
  "CY",
  "CZ",
  "DK",
  "DJ",
  "DM",
  "DO",
  "EC",
  "EG",
  "SV",
  "GQ",
  "ER",
  "EE",
  "ET",
  "FK",
  "FO",
  "FJ",
  "FI",
  "FR",
  "GF",
  "PF",
  "TF",
  "GA",
  "GM",
  "GE",
  "DE",
  "GH",
  "GI",
  "GR",
  "GL",
  "GD",
  "GP",
  "GU",
  "GT",
  "GG",
  "GN",
  "GW",
  "GY",
  "HT",
  "HM",
  "VA",
  "HN",
  "HK",
  "HU",
  "IS",
  "IN",
  "ID",
  "IR",
  "IQ",
  "IE",
  "IM",
  "IL",
  "IT",
  "JM",
  "JP",
  "JE",
  "JO",
  "KZ",
  "KE",
  "KI",
  "KP",
  "KR",
  "KW",
  "KG",
  "LA",
  "LV",
  "LB",
  "LS",
  "LR",
  "LY",
  "LI",
  "LT",
  "LU",
  "MO",
  "MK",
  "MG",
  "MW",
  "MY",
  "MV",
  "ML",
  "MT",
  "MH",
  "MQ",
  "MR",
  "MU",
  "YT",
  "MX",
  "FM",
  "MD",
  "MC",
  "MN",
  "ME",
  "MS",
  "MA",
  "MZ",
  "MM",
  "NA",
  "NR",
  "NP",
  "NL",
  "NC",
  "NZ",
  "NI",
  "NE",
  "NG",
  "NU",
  "NF",
  "MP",
  "NO",
  "OM",
  "PK",
  "PW",
  "PS",
  "PA",
  "PG",
  "PY",
  "PE",
  "PH",
  "PN",
  "PL",
  "PT",
  "PR",
  "QA",
  "RE",
  "RO",
  "RU",
  "RW",
  "BL",
  "SH",
  "KN",
  "LC",
  "MF",
  "PM",
  "VC",
  "WS",
  "SM",
  "ST",
  "SA",
  "SN",
  "RS",
  "SC",
  "SL",
  "SG",
  "SX",
  "SK",
  "SI",
  "SB",
  "SO",
  "ZA",
  "GS",
  "SS",
  "ES",
  "LK",
  "SD",
  "SR",
  "SJ",
  "SZ",
  "SE",
  "CH",
  "SY",
  "TW",
  "TJ",
  "TZ",
  "TH",
  "TL",
  "TG",
  "TK",
  "TO",
  "TT",
  "TN",
  "TR",
  "TM",
  "TC",
  "TV",
  "UG",
  "UA",
  "AE",
  "GB",
  "US",
  "UM",
  "UY",
  "UZ",
  "VU",
  "VE",
  "VN",
  "VG",
  "VI",
  "WF",
  "EH",
  "YE",
  "ZM",
  "ZW",
] as const

export type CountryIsoCodes = (typeof COUNTRY_ISO_CODES)[number]

export const UK_COUNTIES = [
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
  "Wrexham",
] as const

export type UkCounties = (typeof UK_COUNTIES)[number]

export function getNestedProperty(
  obj: Record<string, any>,
  dotPath: string | string[],
): any {
  if (typeof dotPath === "string") dotPath = dotPath.split(".")

  let value: unknown = obj
  for (let i = 0; i < dotPath.length; i++) {
    value = (value as Record<string, any>)[dotPath[i]]
    if (
      i !== dotPath.length - 1 &&
      (typeof value !== "object" || value === null)
    )
      return
  }

  return value
}

export function withKeyPaths(obj: object, delimiter: string = "."): object {
  function _withKeyPaths(obj: object, path: string[]) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        const _path = [...path, key]

        if (typeof value === "object") value = _withKeyPaths(value, _path)

        return [_path.join(delimiter), value]
      }),
    )
  }

  return _withKeyPaths(obj, [])
}

export function excludeKeyPaths(
  obj: object,
  exclude: string[],
  delimiter: string = ".",
): any {
  function _excludeKeyPaths(obj: object, path: string[]) {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => {
          const _path = [...path, key]

          if (typeof value === "object") value = _excludeKeyPaths(value, _path)

          return exclude.includes(_path.join(delimiter)) ? [] : [key, value]
        })
        .filter(entry => entry.length),
    )
  }

  return exclude.length ? _excludeKeyPaths(obj, []) : obj
}
