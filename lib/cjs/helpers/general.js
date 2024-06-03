"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UK_COUNTIES = exports.COUNTRY_ISO_CODES = exports.MIN_DATE = exports.camelCaseToSnakeCase = exports.snakeCaseToCamelCase = exports.path = exports.wrap = exports.openInNewTab = void 0;
function openInNewTab(url, target) {
    if (target === void 0) { target = '_blank'; }
    window.open(url, target);
}
exports.openInNewTab = openInNewTab;
function wrap(newFn, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (newFn.before !== undefined) {
            newFn.before.apply(newFn, args);
        }
        var value;
        if (fn !== undefined) {
            value = fn.apply(void 0, args);
        }
        if (newFn.after !== undefined) {
            newFn.after.apply(newFn, args);
        }
        return value;
    };
}
exports.wrap = wrap;
function path(_, 
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
subpaths) {
    if (subpaths === void 0) { subpaths = {}; }
    function updatePath(path, root) {
        Object.entries(path).forEach(function (_a) {
            var key = _a[0], subpath = _a[1];
            if (typeof subpath === 'string') {
                if (!root || key !== '_')
                    path[key] = _ + subpath;
            }
            else {
                updatePath(subpath, false);
            }
        });
    }
    var path = __assign(__assign({}, subpaths), { _: _ });
    if (_ === '') {
        path._ = '/';
    }
    else {
        updatePath(path, true);
    }
    return path;
}
exports.path = path;
function snakeCaseToCamelCase(obj) {
    Object.entries(obj).forEach(function (_a) {
        var snakeKey = _a[0], value = _a[1];
        if (typeof value === 'object')
            snakeCaseToCamelCase(value);
        var camelKey = snakeKey.replace(/_+[a-z]/g, function (_char) {
            return _char[_char.length - 1].toUpperCase();
        });
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete obj[snakeKey];
        obj[camelKey] = value;
    });
}
exports.snakeCaseToCamelCase = snakeCaseToCamelCase;
function camelCaseToSnakeCase(obj) {
    Object.entries(obj).forEach(function (_a) {
        var camelKey = _a[0], value = _a[1];
        if (typeof value === 'object')
            camelCaseToSnakeCase(value);
        var snakeKey = camelKey.replace(/[A-Z]/g, function (char) { return "_".concat(char.toLowerCase()); });
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete obj[camelKey];
        obj[snakeKey] = value;
    });
}
exports.camelCaseToSnakeCase = camelCaseToSnakeCase;
exports.MIN_DATE = new Date(0, 0, 0);
exports.COUNTRY_ISO_CODES = [
    'AF',
    'AX',
    'AL',
    'DZ',
    'AS',
    'AD',
    'AO',
    'AI',
    'AQ',
    'AG',
    'AR',
    'AM',
    'AW',
    'AU',
    'AT',
    'AZ',
    'BS',
    'BH',
    'BD',
    'BB',
    'BY',
    'BE',
    'BZ',
    'BJ',
    'BM',
    'BT',
    'BO',
    'BQ',
    'BA',
    'BW',
    'BV',
    'BR',
    'IO',
    'BN',
    'BG',
    'BF',
    'BI',
    'KH',
    'CM',
    'CA',
    'CV',
    'KY',
    'CF',
    'TD',
    'CL',
    'CN',
    'CX',
    'CC',
    'CO',
    'KM',
    'CG',
    'CD',
    'CK',
    'CR',
    'CI',
    'HR',
    'CU',
    'CW',
    'CY',
    'CZ',
    'DK',
    'DJ',
    'DM',
    'DO',
    'EC',
    'EG',
    'SV',
    'GQ',
    'ER',
    'EE',
    'ET',
    'FK',
    'FO',
    'FJ',
    'FI',
    'FR',
    'GF',
    'PF',
    'TF',
    'GA',
    'GM',
    'GE',
    'DE',
    'GH',
    'GI',
    'GR',
    'GL',
    'GD',
    'GP',
    'GU',
    'GT',
    'GG',
    'GN',
    'GW',
    'GY',
    'HT',
    'HM',
    'VA',
    'HN',
    'HK',
    'HU',
    'IS',
    'IN',
    'ID',
    'IR',
    'IQ',
    'IE',
    'IM',
    'IL',
    'IT',
    'JM',
    'JP',
    'JE',
    'JO',
    'KZ',
    'KE',
    'KI',
    'KP',
    'KR',
    'KW',
    'KG',
    'LA',
    'LV',
    'LB',
    'LS',
    'LR',
    'LY',
    'LI',
    'LT',
    'LU',
    'MO',
    'MK',
    'MG',
    'MW',
    'MY',
    'MV',
    'ML',
    'MT',
    'MH',
    'MQ',
    'MR',
    'MU',
    'YT',
    'MX',
    'FM',
    'MD',
    'MC',
    'MN',
    'ME',
    'MS',
    'MA',
    'MZ',
    'MM',
    'NA',
    'NR',
    'NP',
    'NL',
    'NC',
    'NZ',
    'NI',
    'NE',
    'NG',
    'NU',
    'NF',
    'MP',
    'NO',
    'OM',
    'PK',
    'PW',
    'PS',
    'PA',
    'PG',
    'PY',
    'PE',
    'PH',
    'PN',
    'PL',
    'PT',
    'PR',
    'QA',
    'RE',
    'RO',
    'RU',
    'RW',
    'BL',
    'SH',
    'KN',
    'LC',
    'MF',
    'PM',
    'VC',
    'WS',
    'SM',
    'ST',
    'SA',
    'SN',
    'RS',
    'SC',
    'SL',
    'SG',
    'SX',
    'SK',
    'SI',
    'SB',
    'SO',
    'ZA',
    'GS',
    'SS',
    'ES',
    'LK',
    'SD',
    'SR',
    'SJ',
    'SZ',
    'SE',
    'CH',
    'SY',
    'TW',
    'TJ',
    'TZ',
    'TH',
    'TL',
    'TG',
    'TK',
    'TO',
    'TT',
    'TN',
    'TR',
    'TM',
    'TC',
    'TV',
    'UG',
    'UA',
    'AE',
    'GB',
    'US',
    'UM',
    'UY',
    'UZ',
    'VU',
    'VE',
    'VN',
    'VG',
    'VI',
    'WF',
    'EH',
    'YE',
    'ZM',
    'ZW'
];
exports.UK_COUNTIES = [
    'Aberdeen City',
    'Aberdeenshire',
    'Angus',
    'Argyll and Bute',
    'Bedfordshire',
    'Belfast',
    'Belfast Greater',
    'Berkshire',
    'Blaenau Gwent',
    'Bridgend',
    'Buckinghamshire',
    'Caerphilly',
    'Cambridgeshire',
    'Cardiff',
    'Carmarthenshire',
    'Ceredigion',
    'Channel Islands',
    'Cheshire',
    'City of Edinburgh',
    'Clackmannanshire',
    'Conwy',
    'Cornwall',
    'County Antrim',
    'County Armagh',
    'County Down',
    'County Fermanagh',
    'County Londonderry',
    'County Tyrone',
    'County of Bristol',
    'Cumbria',
    'Denbighshire',
    'Derbyshire',
    'Devon',
    'Dorset',
    'Dumfries and Galloway',
    'Dunbartonshire',
    'Dundee City',
    'Durham',
    'East Ayrshire',
    'East Dunbartonshire',
    'East Lothian',
    'East Renfrewshire',
    'East Riding of Yorkshire',
    'East Sussex',
    'Essex',
    'Falkirk',
    'Fife',
    'Flintshire',
    'Glasgow City',
    'Gloucestershire',
    'Greater London',
    'Greater Manchester',
    'Guernsey Channel Islands',
    'Gwynedd',
    'Hampshire',
    'Hereford and Worcester',
    'Herefordshire',
    'Hertfordshire',
    'Highland',
    'Inverclyde',
    'Inverness',
    'Isle of Anglesey',
    'Isle of Barra',
    'Isle of Man',
    'Isle of Wight',
    'Jersey Channel Islands',
    'Kent',
    'Lancashire',
    'Leicestershire',
    'Lincolnshire',
    'Merseyside',
    'Merthyr Tydfil',
    'Midlothian',
    'Monmouthshire',
    'Moray',
    'Neath Port Talbot',
    'Newport',
    'Norfolk',
    'North Ayrshire',
    'North Lanarkshire',
    'North Yorkshire',
    'Northamptonshire',
    'Northumberland',
    'Nottinghamshire',
    'Orkney',
    'Orkney Islands',
    'Oxfordshire',
    'Pembrokeshire',
    'Perth and Kinross',
    'Powys',
    'Renfrewshire',
    'Rhondda Cynon Taff',
    'Rutland',
    'Scottish Borders',
    'Shetland Islands',
    'Shropshire',
    'Somerset',
    'South Ayrshire',
    'South Lanarkshire',
    'South Yorkshire',
    'Staffordshire',
    'Stirling',
    'Suffolk',
    'Surrey',
    'Swansea',
    'Torfaen',
    'Tyne and Wear',
    'Vale of Glamorgan',
    'Warwickshire',
    'West Dunbart',
    'West Lothian',
    'West Midlands',
    'West Sussex',
    'West Yorkshire',
    'Western Isles',
    'Wiltshire',
    'Worcestershire',
    'Wrexham'
];
