import { j as l } from "./jsx-runtime-C7wFtzyj.js";
import { CircularProgress as zt, Button as Dt, Autocomplete as At, TextField as ft, FormControl as Et, FormControlLabel as Bt, Checkbox as _t, FormHelperText as wt, InputAdornment as mt, IconButton as $t } from "@mui/material";
import { useState as U, useEffect as I, forwardRef as Ut, Children as It, useRef as Vt } from "react";
import { S as Ht } from "./api-BvUiTeR7.js";
import { u as Nt } from "./api-Cs4Y-WeI.js";
import { Field as $, Formik as Wt, Form as qt } from "formik";
import { string as V, number as Rt, bool as Gt, date as Zt, array as Xt } from "yup";
import { schemaToFieldValidator as H, submitForm as Qt } from "./utils/form.es.js";
import { getNestedProperty as D, COUNTRY_ISO_CODE_MAPPING as Kt, COUNTRY_ISO_CODES as Jt, getKeyPaths as te, UK_COUNTIES as ee } from "./utils/general.es.js";
import "./en-gb-B_rK7Jx1.js";
import { LocalizationProvider as re, DatePicker as se } from "@mui/x-date-pickers";
import j from "dayjs";
import { EmailOutlined as ne, PersonOutlined as ie, Visibility as oe, VisibilityOff as ae } from "@mui/icons-material";
import "./settings/index.es.js";
import "./session-oI-Ht2C8.js";
import "js-cookie";
import { u as ue } from "./schemas-D3tO0rys.js";
import "./urls-5m9PgoEX.js";
function N(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(n) {
    for (var o = 1; o < arguments.length; o++) {
      var i = arguments[o];
      for (var t in i) ({}).hasOwnProperty.call(i, t) && (n[t] = i[t]);
    }
    return n;
  }, dt.apply(null, arguments);
}
const ce = ({
  useLazyListQuery: n,
  filterOptions: o,
  getOptionLabel: i,
  getOptionKey: t = (a) => a.id,
  searchKey: e,
  ...r
}) => {
  const [a, u] = U(""), [s, { isLoading: d, isError: c }] = n(), [{ limit: g, offset: y }, M] = Nt(), [{ options: Y, hasMore: T }, f] = U({ options: {}, hasMore: !0 });
  I(
    () => {
      const x = { limit: g, offset: y, ...o };
      a && (x[e] = a), s(x, !0).unwrap().then(({ data: O, offset: C, limit: b, count: w }) => {
        f(({ options: k }) => {
          const P = { ...k };
          return O.forEach((F) => {
            P[t(F)] = F;
          }), { options: P, hasMore: C + b < w };
        });
      }).catch((O) => {
        O && console.error(O);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      s,
      g,
      y,
      e,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...Object.values(o || {})
    ]
  );
  let h = Object.keys(Y);
  if (!h.length) return /* @__PURE__ */ l.jsx(l.Fragment, {});
  typeof t(Object.values(Y)[0]) == "number" && (h = h.map(Number));
  function m() {
    M(({ page: x, limit: O }) => ({ page: x + 1, limit: O }));
  }
  const p = ({ children: x, ...O }, C) => {
    const b = It.toArray(x);
    return d ? b.push(/* @__PURE__ */ l.jsx(zt, {}, "is-loading")) : (c && b.push(/* @__PURE__ */ l.jsx(Ht, {}, "is-error")), T && b.push(
      /* @__PURE__ */ l.jsx(Dt, { onClick: m, children: "Load more" }, "load-more")
    )), /* @__PURE__ */ l.jsx(
      "ul",
      {
        ...O,
        ref: C,
        onScroll: (w) => {
          !d && w.currentTarget.clientHeight + w.currentTarget.scrollTop >= w.currentTarget.scrollHeight && m();
        },
        children: b
      }
    );
  };
  return /* @__PURE__ */ l.jsx(
    rt,
    {
      options: h,
      getOptionLabel: (x) => i(Y[x]),
      onInputChange: (x, O, C) => {
        u(C === "input" ? O : "");
      },
      ListboxComponent: Ut(p),
      ...r
    }
  );
}, rt = ({
  textFieldProps: n,
  options: o,
  validateOptions: i,
  ...t
}) => {
  const { id: e, name: r, required: a, ...u } = n, s = r.split("."), d = "not a valid option";
  let c = typeof o[0] == "string" ? V().oneOf(o, d) : Rt().oneOf(o, d);
  a && (c = c.required());
  const g = {
    name: r,
    type: typeof o[0] == "string" ? "text" : "number",
    validate: H(c, i)
  };
  return /* @__PURE__ */ l.jsx($, { ...g, children: ({ form: y, meta: M }) => {
    const Y = D(
      y.values,
      s
    ), T = D(y.touched, s), f = D(y.errors, s);
    return /* @__PURE__ */ l.jsx(
      At,
      {
        options: o,
        defaultValue: M.initialValue === "" ? void 0 : M.initialValue,
        renderInput: ({
          id: h,
          // eslint-disable-line @typescript-eslint/no-unused-vars
          ...m
        }) => /* @__PURE__ */ l.jsx(
          ft,
          {
            id: e ?? r,
            name: r,
            required: a,
            type: "text",
            value: Y,
            error: T && !!f,
            helperText: T && f,
            ...u,
            ...m
          }
        ),
        onChange: (h, m) => {
          y.setFieldValue(r, m ?? void 0, !0);
        },
        onBlur: y.handleBlur,
        ...t
      }
    );
  } });
}, he = ({
  id: n,
  name: o,
  formControlLabelProps: i,
  required: t = !1,
  errorMessage: e = "this is a required field",
  validateOptions: r,
  ...a
}) => {
  const u = o.split(".");
  let s = Gt();
  t && (s = s.oneOf([!0], e));
  const d = {
    name: o,
    type: "checkbox",
    validate: H(s, r)
  };
  return /* @__PURE__ */ l.jsx($, { ...d, children: ({ form: c, meta: g }) => {
    const y = D(c.touched, u), M = D(c.errors, u), Y = D(
      c.values,
      u
    ), T = y && !!M;
    return /* @__PURE__ */ l.jsxs(Et, { error: T, required: t, children: [
      /* @__PURE__ */ l.jsx(
        Bt,
        {
          control: /* @__PURE__ */ l.jsx(
            _t,
            {
              defaultChecked: g.initialValue,
              id: n ?? o,
              name: o,
              value: Y,
              onChange: c.handleChange,
              onBlur: c.handleBlur,
              ...a
            }
          ),
          ...i
        }
      ),
      T && /* @__PURE__ */ l.jsx(wt, { children: M })
    ] });
  } });
}, le = ({
  textFieldProps: n,
  ...o
}) => {
  const {
    name: i = "country",
    label: t = "Country",
    placeholder: e = "Select your country",
    ...r
  } = n || {};
  return /* @__PURE__ */ l.jsx(
    rt,
    {
      options: Jt,
      getOptionLabel: (a) => Kt[a],
      textFieldProps: { name: i, label: t, placeholder: e, ...r },
      ...o
    }
  );
};
var Q = { exports: {} }, de = Q.exports, yt;
function fe() {
  return yt || (yt = 1, (function(n, o) {
    (function(i, t) {
      n.exports = t();
    })(de, (function() {
      var i = "week", t = "year";
      return function(e, r, a) {
        var u = r.prototype;
        u.week = function(s) {
          if (s === void 0 && (s = null), s !== null) return this.add(7 * (s - this.week()), "day");
          var d = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var c = a(this).startOf(t).add(1, t).date(d), g = a(this).endOf(i);
            if (c.isBefore(g)) return 1;
          }
          var y = a(this).startOf(t).date(d).startOf(i).subtract(1, "millisecond"), M = this.diff(y, i, !0);
          return M < 0 ? a(this).startOf("week").week() : Math.ceil(M);
        }, u.weeks = function(s) {
          return s === void 0 && (s = null), this.week(s);
        };
      };
    }));
  })(Q)), Q.exports;
}
var me = fe();
const pe = /* @__PURE__ */ N(me);
var K = { exports: {} }, ge = K.exports, Mt;
function ye() {
  return Mt || (Mt = 1, (function(n, o) {
    (function(i, t) {
      n.exports = t();
    })(ge, (function() {
      var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, e = /\d/, r = /\d\d/, a = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, s = {}, d = function(f) {
        return (f = +f) + (f > 68 ? 1900 : 2e3);
      }, c = function(f) {
        return function(h) {
          this[f] = +h;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
        (this.zone || (this.zone = {})).offset = (function(h) {
          if (!h || h === "Z") return 0;
          var m = h.match(/([+-]|\d\d)/g), p = 60 * m[1] + (+m[2] || 0);
          return p === 0 ? 0 : m[0] === "+" ? -p : p;
        })(f);
      }], y = function(f) {
        var h = s[f];
        return h && (h.indexOf ? h : h.s.concat(h.f));
      }, M = function(f, h) {
        var m, p = s.meridiem;
        if (p) {
          for (var x = 1; x <= 24; x += 1) if (f.indexOf(p(x, 0, h)) > -1) {
            m = x > 12;
            break;
          }
        } else m = f === (h ? "pm" : "PM");
        return m;
      }, Y = { A: [u, function(f) {
        this.afternoon = M(f, !1);
      }], a: [u, function(f) {
        this.afternoon = M(f, !0);
      }], Q: [e, function(f) {
        this.month = 3 * (f - 1) + 1;
      }], S: [e, function(f) {
        this.milliseconds = 100 * +f;
      }], SS: [r, function(f) {
        this.milliseconds = 10 * +f;
      }], SSS: [/\d{3}/, function(f) {
        this.milliseconds = +f;
      }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [r, c("day")], Do: [u, function(f) {
        var h = s.ordinal, m = f.match(/\d+/);
        if (this.day = m[0], h) for (var p = 1; p <= 31; p += 1) h(p).replace(/\[|\]/g, "") === f && (this.day = p);
      }], w: [a, c("week")], ww: [r, c("week")], M: [a, c("month")], MM: [r, c("month")], MMM: [u, function(f) {
        var h = y("months"), m = (y("monthsShort") || h.map((function(p) {
          return p.slice(0, 3);
        }))).indexOf(f) + 1;
        if (m < 1) throw new Error();
        this.month = m % 12 || m;
      }], MMMM: [u, function(f) {
        var h = y("months").indexOf(f) + 1;
        if (h < 1) throw new Error();
        this.month = h % 12 || h;
      }], Y: [/[+-]?\d+/, c("year")], YY: [r, function(f) {
        this.year = d(f);
      }], YYYY: [/\d{4}/, c("year")], Z: g, ZZ: g };
      function T(f) {
        var h, m;
        h = f, m = s && s.formats;
        for (var p = (f = h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(P, F, v) {
          var S = v && v.toUpperCase();
          return F || m[v] || i[v] || m[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(z, A, E) {
            return A || E.slice(1);
          }));
        }))).match(t), x = p.length, O = 0; O < x; O += 1) {
          var C = p[O], b = Y[C], w = b && b[0], k = b && b[1];
          p[O] = k ? { regex: w, parser: k } : C.replace(/^\[|\]$/g, "");
        }
        return function(P) {
          for (var F = {}, v = 0, S = 0; v < x; v += 1) {
            var z = p[v];
            if (typeof z == "string") S += z.length;
            else {
              var A = z.regex, E = z.parser, q = P.slice(S), _ = A.exec(q)[0];
              E.call(F, _), P = P.replace(_, "");
            }
          }
          return (function(B) {
            var R = B.afternoon;
            if (R !== void 0) {
              var L = B.hours;
              R ? L < 12 && (B.hours += 12) : L === 12 && (B.hours = 0), delete B.afternoon;
            }
          })(F), F;
        };
      }
      return function(f, h, m) {
        m.p.customParseFormat = !0, f && f.parseTwoDigitYear && (d = f.parseTwoDigitYear);
        var p = h.prototype, x = p.parse;
        p.parse = function(O) {
          var C = O.date, b = O.utc, w = O.args;
          this.$u = b;
          var k = w[1];
          if (typeof k == "string") {
            var P = w[2] === !0, F = w[3] === !0, v = P || F, S = w[2];
            F && (S = w[2]), s = this.$locale(), !P && S && (s = m.Ls[S]), this.$d = (function(q, _, B, R) {
              try {
                if (["x", "X"].indexOf(_) > -1) return new Date((_ === "X" ? 1e3 : 1) * q);
                var L = T(_)(q), st = L.year, G = L.month, kt = L.day, Ft = L.hours, St = L.minutes, Pt = L.seconds, vt = L.milliseconds, pt = L.zone, gt = L.week, nt = /* @__PURE__ */ new Date(), it = kt || (st || G ? 1 : nt.getDate()), ot = st || nt.getFullYear(), Z = 0;
                st && !G || (Z = G > 0 ? G - 1 : nt.getMonth());
                var X, at = Ft || 0, ut = St || 0, ct = Pt || 0, ht = vt || 0;
                return pt ? new Date(Date.UTC(ot, Z, it, at, ut, ct, ht + 60 * pt.offset * 1e3)) : B ? new Date(Date.UTC(ot, Z, it, at, ut, ct, ht)) : (X = new Date(ot, Z, it, at, ut, ct, ht), gt && (X = R(X).week(gt).toDate()), X);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(C, k, b, m), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), v && C != this.format(k) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (k instanceof Array) for (var z = k.length, A = 1; A <= z; A += 1) {
            w[1] = k[A - 1];
            var E = m.apply(this, w);
            if (E.isValid()) {
              this.$d = E.$d, this.$L = E.$L, this.init();
              break;
            }
            A === z && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else x.call(this, O);
        };
      };
    }));
  })(K)), K.exports;
}
var Me = ye();
const xe = /* @__PURE__ */ N(Me);
var J = { exports: {} }, Te = J.exports, xt;
function Oe() {
  return xt || (xt = 1, (function(n, o) {
    (function(i, t) {
      n.exports = t();
    })(Te, (function() {
      var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, e, r) {
        var a = e.prototype, u = a.format;
        r.en.formats = i, a.format = function(s) {
          s === void 0 && (s = "YYYY-MM-DDTHH:mm:ssZ");
          var d = this.$locale().formats, c = (function(g, y) {
            return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(M, Y, T) {
              var f = T && T.toUpperCase();
              return Y || y[T] || i[T] || y[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(h, m, p) {
                return m || p.slice(1);
              }));
            }));
          })(s, d === void 0 ? {} : d);
          return u.call(this, c);
        };
      };
    }));
  })(J)), J.exports;
}
var Ye = Oe();
const je = /* @__PURE__ */ N(Ye);
var tt = { exports: {} }, De = tt.exports, Tt;
function we() {
  return Tt || (Tt = 1, (function(n, o) {
    (function(i, t) {
      n.exports = t();
    })(De, (function() {
      return function(i, t, e) {
        t.prototype.isBetween = function(r, a, u, s) {
          var d = e(r), c = e(a), g = (s = s || "()")[0] === "(", y = s[1] === ")";
          return (g ? this.isAfter(d, u) : !this.isBefore(d, u)) && (y ? this.isBefore(c, u) : !this.isAfter(c, u)) || (g ? this.isBefore(d, u) : !this.isAfter(d, u)) && (y ? this.isAfter(c, u) : !this.isBefore(c, u));
        };
      };
    }));
  })(tt)), tt.exports;
}
var be = we();
const Le = /* @__PURE__ */ N(be);
var et = { exports: {} }, Ce = et.exports, Ot;
function ke() {
  return Ot || (Ot = 1, (function(n, o) {
    (function(i, t) {
      n.exports = t();
    })(Ce, (function() {
      return function(i, t) {
        var e = t.prototype, r = e.format;
        e.format = function(a) {
          var u = this, s = this.$locale();
          if (!this.isValid()) return r.bind(this)(a);
          var d = this.$utils(), c = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(g) {
            switch (g) {
              case "Q":
                return Math.ceil((u.$M + 1) / 3);
              case "Do":
                return s.ordinal(u.$D);
              case "gggg":
                return u.weekYear();
              case "GGGG":
                return u.isoWeekYear();
              case "wo":
                return s.ordinal(u.week(), "W");
              case "w":
              case "ww":
                return d.s(u.week(), g === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return d.s(u.isoWeek(), g === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return d.s(String(u.$H === 0 ? 24 : u.$H), g === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(u.$d.getTime() / 1e3);
              case "x":
                return u.$d.getTime();
              case "z":
                return "[" + u.offsetName() + "]";
              case "zzz":
                return "[" + u.offsetName("long") + "]";
              default:
                return g;
            }
          }));
          return r.bind(this)(c);
        };
      };
    }));
  })(et)), et.exports;
}
var Fe = ke();
const Se = /* @__PURE__ */ N(Fe), Yt = /* @__PURE__ */ new Set();
function Pe(n, o = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const i = Array.isArray(n) ? n.join(`
`) : n;
  Yt.has(i) || (Yt.add(i), o === "error" ? console.error(i) : console.warn(i));
}
j.extend(je);
j.extend(pe);
j.extend(Le);
j.extend(Se);
const ve = {
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
}, ze = {
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
}, lt = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), jt = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Ae = (n, o) => o ? (...i) => n(...i).locale(o) : n;
class Ee {
  constructor({
    locale: o,
    formats: i
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = ve, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof j.utc < "u", this.hasTimezonePlugin = () => typeof j.tz < "u", this.isSame = (t, e, r) => {
      const a = this.setTimezone(e, this.getTimezone(t));
      return t.format(r) === a.format(r);
    }, this.cleanTimezone = (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return j.tz.guess();
        default:
          return t;
      }
    }, this.createSystemDate = (t) => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const e = j.tz.guess();
        return e !== "UTC" ? j.tz(t, e) : j(t);
      }
      return j(t);
    }, this.createUTCDate = (t) => {
      if (!this.hasUTCPlugin())
        throw new Error(lt);
      return j.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(lt);
      if (!this.hasTimezonePlugin())
        throw new Error(jt);
      const r = t !== void 0 && !t.endsWith("Z");
      return j(t).tz(this.cleanTimezone(e), r);
    }, this.getLocaleFormats = () => {
      const t = j.Ls, e = this.locale || "en";
      let r = t[e];
      return r === void 0 && (process.env.NODE_ENV !== "production" && Pe(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), r = t.en), r.formats;
    }, this.adjustOffset = (t) => {
      if (!this.hasTimezonePlugin())
        return t;
      const e = this.getTimezone(t);
      if (e !== "UTC") {
        const r = t.tz(this.cleanTimezone(e), !0);
        if (r.$offset === (t.$offset ?? 0))
          return t;
        t.$offset = r.$offset;
      }
      return t;
    }, this.date = (t, e = "default") => {
      if (t === null)
        return null;
      let r;
      return e === "UTC" ? r = this.createUTCDate(t) : e === "system" || e === "default" && !this.hasTimezonePlugin() ? r = this.createSystemDate(t) : r = this.createTZDate(t, e), this.locale === void 0 ? r : r.locale(this.locale);
    }, this.getInvalidDate = () => j(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (t) => {
      if (this.hasTimezonePlugin()) {
        const e = t.$x?.$timezone;
        if (e)
          return e;
      }
      return this.hasUTCPlugin() && t.isUTC() ? "UTC" : "system";
    }, this.setTimezone = (t, e) => {
      if (this.getTimezone(t) === e)
        return t;
      if (e === "UTC") {
        if (!this.hasUTCPlugin())
          throw new Error(lt);
        return t.utc();
      }
      if (e === "system")
        return t.local();
      if (!this.hasTimezonePlugin()) {
        if (e === "default")
          return t;
        throw new Error(jt);
      }
      return j.tz(t, this.cleanTimezone(e));
    }, this.toJsDate = (t) => t.toDate(), this.parse = (t, e) => t === "" ? null : this.dayjs(t, e, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (t) => {
      const e = this.getLocaleFormats(), r = (a) => a.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (u, s, d) => s || d.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (a, u, s) => {
        const d = s && s.toUpperCase();
        return u || e[s] || r(e[d]);
      });
    }, this.isValid = (t) => t == null ? !1 : t.isValid(), this.format = (t, e) => this.formatByString(t, this.formats[e]), this.formatByString = (t, e) => this.dayjs(t).format(e), this.formatNumber = (t) => t, this.isEqual = (t, e) => t === null && e === null ? !0 : t === null || e === null ? !1 : t.toDate().getTime() === e.toDate().getTime(), this.isSameYear = (t, e) => this.isSame(t, e, "YYYY"), this.isSameMonth = (t, e) => this.isSame(t, e, "YYYY-MM"), this.isSameDay = (t, e) => this.isSame(t, e, "YYYY-MM-DD"), this.isSameHour = (t, e) => t.isSame(e, "hour"), this.isAfter = (t, e) => t > e, this.isAfterYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"), this.isAfterDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"), this.isBefore = (t, e) => t < e, this.isBeforeYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"), this.isBeforeDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"), this.isWithinRange = (t, [e, r]) => t >= e && t <= r, this.startOfYear = (t) => this.adjustOffset(t.startOf("year")), this.startOfMonth = (t) => this.adjustOffset(t.startOf("month")), this.startOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).startOf("week")), this.startOfDay = (t) => this.adjustOffset(t.startOf("day")), this.endOfYear = (t) => this.adjustOffset(t.endOf("year")), this.endOfMonth = (t) => this.adjustOffset(t.endOf("month")), this.endOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).endOf("week")), this.endOfDay = (t) => this.adjustOffset(t.endOf("day")), this.addYears = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "year") : t.add(e, "year")), this.addMonths = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "month") : t.add(e, "month")), this.addWeeks = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "week") : t.add(e, "week")), this.addDays = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "day") : t.add(e, "day")), this.addHours = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "hour") : t.add(e, "hour")), this.addMinutes = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "minute") : t.add(e, "minute")), this.addSeconds = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "second") : t.add(e, "second")), this.getYear = (t) => t.year(), this.getMonth = (t) => t.month(), this.getDate = (t) => t.date(), this.getHours = (t) => t.hour(), this.getMinutes = (t) => t.minute(), this.getSeconds = (t) => t.second(), this.getMilliseconds = (t) => t.millisecond(), this.setYear = (t, e) => this.adjustOffset(t.set("year", e)), this.setMonth = (t, e) => this.adjustOffset(t.set("month", e)), this.setDate = (t, e) => this.adjustOffset(t.set("date", e)), this.setHours = (t, e) => this.adjustOffset(t.set("hour", e)), this.setMinutes = (t, e) => this.adjustOffset(t.set("minute", e)), this.setSeconds = (t, e) => this.adjustOffset(t.set("second", e)), this.setMilliseconds = (t, e) => this.adjustOffset(t.set("millisecond", e)), this.getDaysInMonth = (t) => t.daysInMonth(), this.getWeekArray = (t) => {
      const e = this.startOfWeek(this.startOfMonth(t)), r = this.endOfWeek(this.endOfMonth(t));
      let a = 0, u = e;
      const s = [];
      for (; u < r; ) {
        const d = Math.floor(a / 7);
        s[d] = s[d] || [], s[d].push(u), u = this.addDays(u, 1), a += 1;
      }
      return s;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = ([t, e]) => {
      const r = this.startOfYear(t), a = this.endOfYear(e), u = [];
      let s = r;
      for (; this.isBefore(s, a); )
        u.push(s), s = this.addYears(s, 1);
      return u;
    }, this.dayjs = Ae(j, o), this.locale = o, this.formats = dt({}, ze, i), j.extend(xe);
  }
  getDayOfWeek(o) {
    return o.day() + 1;
  }
}
const Be = ({
  name: n,
  required: o,
  minDate: i,
  maxDate: t,
  validateOptions: e,
  ...r
}) => {
  const a = n.split(".");
  function u(c) {
    return c.locale("en-gb").format("L");
  }
  let s = Zt();
  o && (s = s.required()), i && (s = s.min(
    i,
    `this field must be after or equal to ${u(i)}`
  )), t && (s = s.max(
    t,
    `this field must be before or equal to ${u(t)}`
  ));
  const d = {
    name: n,
    type: "date",
    validate: H(s, e)
  };
  return /* @__PURE__ */ l.jsx($, { ...d, children: ({ form: c }) => {
    const g = D(c.errors, a), y = D(c.touched, a);
    let M = D(
      c.values,
      a
    );
    M = M ? j(M) : null;
    function Y(T) {
      c.setFieldValue(
        n,
        T && T.isValid() ? T.format("YYYY-MM-DD") : null,
        !0
      );
    }
    return /* @__PURE__ */ l.jsx(
      re,
      {
        dateAdapter: Ee,
        adapterLocale: "en-gb",
        children: /* @__PURE__ */ l.jsx(
          se,
          {
            name: n,
            value: M,
            minDate: i,
            maxDate: t,
            onChange: Y,
            slotProps: {
              textField: {
                id: n,
                onChange: (T) => {
                  Y(T);
                },
                onBlur: c.handleBlur,
                required: o,
                error: y && !!g,
                helperText: y && g
              }
            },
            ...r
          }
        )
      }
    );
  } });
}, W = ({
  id: n,
  name: o,
  schema: i,
  type: t = "text",
  required: e = !1,
  dirty: r = !1,
  unique: a = !1,
  uniqueCaseInsensitive: u = !1,
  split: s,
  validateOptions: d,
  ...c
}) => {
  const [g, y] = U(""), M = o.split(".");
  function Y() {
    let h = i;
    if (h = e ? h.required() : h.optional(), r && !s && (h = h.notOneOf(
      [g],
      "cannot be initial value"
    )), !s) return h;
    let m = Xt().of(h);
    return m = e ? m.required().min(1) : m.optional(), (a || u) && (m = m.test({
      message: "cannot have duplicates",
      test: (p) => Array.isArray(p) && p.length >= 2 && p.every((x) => typeof x == "string") ? new Set(
        u ? p.map((x) => x.toLowerCase()) : p
      ).size === p.length : !0
    })), r && (m = m.notOneOf(
      [g],
      "cannot be initial value"
    )), m;
  }
  const T = {
    name: o,
    type: t,
    validate: H(Y(), d)
  }, f = ({ form: h }) => {
    const m = D(
      h.initialValues,
      M
    ), p = D(
      h.values,
      M
    ), x = D(h.errors, M), O = D(h.touched, M);
    return I(() => {
      y(m);
    }, [m]), I(() => {
      h.setFieldValue(
        o,
        s && typeof p == "string" ? p.split(s) : p,
        !0
      );
    }, [p]), /* @__PURE__ */ l.jsx(
      ft,
      {
        id: n ?? o,
        name: o,
        type: t,
        required: e,
        value: p,
        onChange: h.handleChange,
        onBlur: h.handleBlur,
        error: O && !!x,
        helperText: O && x,
        ...c
      }
    );
  };
  return /* @__PURE__ */ l.jsx($, { ...T, children: f });
}, _e = ({
  name: n = "email",
  label: o = "Email address",
  placeholder: i = "Enter your email address",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ l.jsx(
  W,
  {
    type: "email",
    schema: V().email(),
    name: n,
    label: o,
    placeholder: i,
    InputProps: {
      endAdornment: /* @__PURE__ */ l.jsx(mt, { position: "end", children: /* @__PURE__ */ l.jsx(ne, {}) }),
      ...t
    },
    ...e
  }
), $e = ({
  name: n = "first_name",
  label: o = "First name",
  placeholder: i = "Enter your first name",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ l.jsx(
  W,
  {
    schema: ue.first_name,
    name: n,
    label: o,
    placeholder: i,
    InputProps: {
      endAdornment: /* @__PURE__ */ l.jsx(mt, { position: "end", children: /* @__PURE__ */ l.jsx(ie, {}) }),
      ...t
    },
    ...e
  }
), bt = {
  behavior: "smooth",
  block: "start"
}, Ue = ({
  scrollIntoViewOptions: n = bt,
  ...o
}) => {
  const i = Vt(null);
  return I(() => {
    i.current && i.current.scrollIntoView(n);
  }, [n]), /* @__PURE__ */ l.jsx(wt, { ref: i, error: !0, ...o });
}, Lt = ({
  children: n,
  scrollIntoViewOptions: o = bt,
  nonFieldErrorsProps: i,
  fieldRefs: t = [],
  ...e
}) => /* @__PURE__ */ l.jsx(Wt, { ...e, children: (r) => {
  const a = !!Object.keys(r.errors).length, u = a && typeof r.errors.__all__ == "string";
  if (a && !u && r.isSubmitting && t.length) {
    const s = te(r.errors), d = t.find(({ name: c }) => s.includes(c))?.inputRef.current;
    d && d.scrollIntoView(o);
  }
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    u && /* @__PURE__ */ l.jsx(Ue, { ...i, children: r.errors.__all__ }),
    /* @__PURE__ */ l.jsx(qt, { children: typeof n == "function" ? n(r) : n })
  ] });
} }), Ie = ({
  useMutation: n,
  submitOptions: o,
  ...i
}) => {
  const [t] = n();
  return /* @__PURE__ */ l.jsx(
    Lt,
    {
      ...i,
      onSubmit: Qt(
        t,
        i.initialValues,
        o
      )
    }
  );
}, Ve = (n) => "onSubmit" in n ? /* @__PURE__ */ l.jsx(Lt, { ...n }) : Ie(n), He = ({
  name: n = "otp",
  label: o = "OTP",
  placeholder: i = "Enter your OTP",
  ...t
}) => /* @__PURE__ */ l.jsx(
  W,
  {
    name: n,
    label: o,
    schema: V().matches(/^[0-9]{6}$/, "Must be exactly 6 digits."),
    placeholder: i,
    required: !0,
    ...t
  }
), Ne = ({
  id: n,
  repeatName: o,
  setValue: i,
  fieldProps: t,
  name: e,
  label: r,
  placeholder: a,
  type: u,
  ...s
}) => {
  const { form: d } = t, c = e.split("."), g = D(d.values, c), y = o.split("."), M = D(
    d.values,
    y
  ), Y = D(
    d.touched,
    y
  ), T = D(d.errors, y);
  return I(() => {
    i(g);
  }, [i, g]), /* @__PURE__ */ l.jsx(
    ft,
    {
      required: !0,
      type: u,
      label: r ?? `Repeat ${e.replace("_", " ")}`,
      placeholder: a ?? `Enter your ${e.replace("_", " ")} again`,
      id: n ?? o,
      name: o,
      value: M,
      onChange: d.handleChange,
      onBlur: d.handleBlur,
      error: Y && !!T,
      helperText: Y && T,
      ...s
    }
  );
}, Ct = ({
  name: n,
  type: o = "text",
  validateOptions: i,
  ...t
}) => {
  const [e, r] = U(""), a = `${n}_repeat`, u = {
    name: a,
    type: o,
    validate: H(
      V().required().equals([e], "does not match"),
      i
    )
  };
  return /* @__PURE__ */ l.jsx($, { ...u, children: (s) => /* @__PURE__ */ l.jsx(
    Ne,
    {
      name: n,
      type: o,
      repeatName: a,
      setValue: r,
      fieldProps: s,
      ...t
    }
  ) });
}, We = ({
  name: n = "password",
  label: o = "Password",
  placeholder: i = "Enter your password",
  schema: t = V(),
  InputProps: e = {},
  withRepeatField: r = !1,
  repeatFieldProps: a = {},
  ...u
}) => {
  const [s, d] = U(!1), c = s ? "text" : "password", g = /* @__PURE__ */ l.jsx(mt, { position: "end", children: /* @__PURE__ */ l.jsx(
    $t,
    {
      onClick: () => {
        d((y) => !y);
      },
      edge: "end",
      children: s ? /* @__PURE__ */ l.jsx(oe, {}) : /* @__PURE__ */ l.jsx(ae, {})
    }
  ) });
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      W,
      {
        autoComplete: "off",
        type: c,
        name: n,
        label: o,
        schema: t,
        placeholder: i,
        InputProps: { endAdornment: g, ...e },
        ...u
      }
    ),
    r && /* @__PURE__ */ l.jsx(
      Ct,
      {
        name: n,
        type: c,
        ...a,
        InputProps: { endAdornment: g, ...a.InputProps }
      }
    )
  ] });
}, qe = ({
  children: n = "Submit",
  ...o
}) => {
  function i(t, e) {
    e = e || {};
    for (const r in t) {
      const a = t[r];
      e[r] = a instanceof Object && a.constructor === Object ? i(a, e) : !0;
    }
    return e;
  }
  return /* @__PURE__ */ l.jsx($, { name: "submit", type: "submit", children: ({ form: t }) => /* @__PURE__ */ l.jsx(
    Dt,
    {
      type: "button",
      onClick: () => {
        t.setTouched(i(t.values), !0).then((e) => {
          const r = !!(e && Object.keys(e).length);
          t.setSubmitting(r), r || t.submitForm();
        });
      },
      ...o,
      children: n
    }
  ) });
}, Re = ({
  textFieldProps: n,
  ...o
}) => {
  const {
    name: i = "uk_county",
    label: t = "UK county",
    placeholder: e = "Select your UK county",
    ...r
  } = n || {};
  return /* @__PURE__ */ l.jsx(
    rt,
    {
      options: ee,
      textFieldProps: { name: i, label: t, placeholder: e, ...r },
      ...o
    }
  );
}, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ApiAutocompleteField: ce,
  AutocompleteField: rt,
  CheckboxField: he,
  CountryField: le,
  DatePickerField: Be,
  EmailField: _e,
  FirstNameField: $e,
  Form: Ve,
  OtpField: He,
  PasswordField: We,
  RepeatField: Ct,
  SubmitButton: qe,
  TextField: W,
  UkCountyField: Re
}, Symbol.toStringTag, { value: "Module" }));
export {
  ce as A,
  he as C,
  Be as D,
  _e as E,
  $e as F,
  He as O,
  We as P,
  Ct as R,
  qe as S,
  W as T,
  Re as U,
  rt as a,
  le as b,
  Ve as c,
  fr as i
};
//# sourceMappingURL=index-C-3iPCa4.js.map
