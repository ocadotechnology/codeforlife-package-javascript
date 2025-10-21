import { j as d } from "./jsx-runtime-lzYHhGH3.js";
import { CircularProgress as ze, Button as De, Autocomplete as Ae, TextField as fe, FormControl as Ee, FormControlLabel as Be, Checkbox as $e, FormHelperText as we, InputAdornment as me, IconButton as _e } from "@mui/material";
import { useState as U, useEffect as I, forwardRef as Ue, Children as Ie, useRef as Ve } from "react";
import { S as He } from "./api-BFYu8ZvQ.js";
import { u as Ne } from "./api-Cs4Y-WeI.js";
import { Field as _, Formik as We, Form as qe } from "formik";
import { string as V, number as Re, bool as Ge, date as Ze, array as Xe } from "yup";
import { schemaToFieldValidator as H, submitForm as Qe } from "./utils/form.es.js";
import { getNestedProperty as D, COUNTRY_ISO_CODE_MAPPING as Ke, COUNTRY_ISO_CODES as Je, getKeyPaths as et, UK_COUNTIES as tt } from "./utils/general.es.js";
import "./en-gb-B_rK7Jx1.js";
import { LocalizationProvider as rt, DatePicker as nt } from "@mui/x-date-pickers";
import j from "dayjs";
import { EmailOutlined as st, PersonOutlined as ot, Visibility as it, VisibilityOff as at } from "@mui/icons-material";
import "./settings/index.es.js";
import "./session-oI-Ht2C8.js";
import "js-cookie";
import { u as ut } from "./schemas-BMQZbhti.js";
import "./urls-DP4a8kxP.js";
import { g as N } from "./_commonjsHelpers-DaMA6jEr.js";
const ct = ({
  useLazyListQuery: s,
  filterOptions: e,
  getOptionLabel: t,
  getOptionKey: r = (n) => n.id,
  searchKey: a,
  ...i
}) => {
  const [n, o] = U(""), [u, { isLoading: m, isError: c }] = s(), [{ limit: g, offset: y }, x] = Ne(), [{ options: Y, hasMore: M }, h] = U({ options: {}, hasMore: !0 });
  I(
    () => {
      const T = { limit: g, offset: y, ...e };
      n && (T[a] = n), u(T, !0).unwrap().then(({ data: O, offset: C, limit: b, count: w }) => {
        h(({ options: F }) => {
          const v = { ...F };
          return O.forEach((k) => {
            v[r(k)] = k;
          }), { options: v, hasMore: C + b < w };
        });
      }).catch((O) => {
        O && console.error(O);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      u,
      g,
      y,
      a,
      n,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...Object.values(e || {})
    ]
  );
  let l = Object.keys(Y);
  if (!l.length) return /* @__PURE__ */ d.jsx(d.Fragment, {});
  typeof r(Object.values(Y)[0]) == "number" && (l = l.map(Number));
  function f() {
    x(({ page: T, limit: O }) => ({ page: T + 1, limit: O }));
  }
  const p = ({ children: T, ...O }, C) => {
    const b = Ie.toArray(T);
    return m ? b.push(/* @__PURE__ */ d.jsx(ze, {}, "is-loading")) : (c && b.push(/* @__PURE__ */ d.jsx(He, {}, "is-error")), M && b.push(
      /* @__PURE__ */ d.jsx(De, { onClick: f, children: "Load more" }, "load-more")
    )), /* @__PURE__ */ d.jsx(
      "ul",
      {
        ...O,
        ref: C,
        onScroll: (w) => {
          !m && w.currentTarget.clientHeight + w.currentTarget.scrollTop >= w.currentTarget.scrollHeight && f();
        },
        children: b
      }
    );
  };
  return /* @__PURE__ */ d.jsx(
    re,
    {
      options: l,
      getOptionLabel: (T) => t(Y[T]),
      onInputChange: (T, O, C) => {
        o(C === "input" ? O : "");
      },
      ListboxComponent: Ue(p),
      ...i
    }
  );
}, re = ({
  textFieldProps: s,
  options: e,
  validateOptions: t,
  ...r
}) => {
  const { id: a, name: i, required: n, ...o } = s, u = i.split("."), m = "not a valid option";
  let c = typeof e[0] == "string" ? V().oneOf(e, m) : Re().oneOf(e, m);
  n && (c = c.required());
  const g = {
    name: i,
    type: typeof e[0] == "string" ? "text" : "number",
    validate: H(c, t)
  };
  return /* @__PURE__ */ d.jsx(_, { ...g, children: ({ form: y, meta: x }) => {
    const Y = D(
      y.values,
      u
    ), M = D(y.touched, u), h = D(y.errors, u);
    return /* @__PURE__ */ d.jsx(
      Ae,
      {
        options: e,
        defaultValue: x.initialValue === "" ? void 0 : x.initialValue,
        renderInput: ({
          id: l,
          // eslint-disable-line @typescript-eslint/no-unused-vars
          ...f
        }) => /* @__PURE__ */ d.jsx(
          fe,
          {
            id: a ?? i,
            name: i,
            required: n,
            type: "text",
            value: Y,
            error: M && !!h,
            helperText: M && h,
            ...o,
            ...f
          }
        ),
        onChange: (l, f) => {
          y.setFieldValue(i, f ?? void 0, !0);
        },
        onBlur: y.handleBlur,
        ...r
      }
    );
  } });
}, lt = ({
  id: s,
  name: e,
  formControlLabelProps: t,
  required: r = !1,
  errorMessage: a = "this is a required field",
  validateOptions: i,
  ...n
}) => {
  const o = e.split(".");
  let u = Ge();
  r && (u = u.oneOf([!0], a));
  const m = {
    name: e,
    type: "checkbox",
    validate: H(u, i)
  };
  return /* @__PURE__ */ d.jsx(_, { ...m, children: ({ form: c, meta: g }) => {
    const y = D(c.touched, o), x = D(c.errors, o), Y = D(
      c.values,
      o
    ), M = y && !!x;
    return /* @__PURE__ */ d.jsxs(Ee, { error: M, required: r, children: [
      /* @__PURE__ */ d.jsx(
        Be,
        {
          control: /* @__PURE__ */ d.jsx(
            $e,
            {
              defaultChecked: g.initialValue,
              id: s ?? e,
              name: e,
              value: Y,
              onChange: c.handleChange,
              onBlur: c.handleBlur,
              ...n
            }
          ),
          ...t
        }
      ),
      M && /* @__PURE__ */ d.jsx(we, { children: x })
    ] });
  } });
}, dt = ({
  textFieldProps: s,
  ...e
}) => {
  const {
    name: t = "country",
    label: r = "Country",
    placeholder: a = "Select your country",
    ...i
  } = s || {};
  return /* @__PURE__ */ d.jsx(
    re,
    {
      options: Je,
      getOptionLabel: (n) => Ke[n],
      textFieldProps: { name: t, label: r, placeholder: a, ...i },
      ...e
    }
  );
};
function he() {
  return he = Object.assign ? Object.assign.bind() : function(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (s[r] = t[r]);
    }
    return s;
  }, he.apply(null, arguments);
}
var Q = { exports: {} }, ht = Q.exports, ye;
function ft() {
  return ye || (ye = 1, (function(s, e) {
    (function(t, r) {
      s.exports = r();
    })(ht, (function() {
      var t = "week", r = "year";
      return function(a, i, n) {
        var o = i.prototype;
        o.week = function(u) {
          if (u === void 0 && (u = null), u !== null) return this.add(7 * (u - this.week()), "day");
          var m = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var c = n(this).startOf(r).add(1, r).date(m), g = n(this).endOf(t);
            if (c.isBefore(g)) return 1;
          }
          var y = n(this).startOf(r).date(m).startOf(t).subtract(1, "millisecond"), x = this.diff(y, t, !0);
          return x < 0 ? n(this).startOf("week").week() : Math.ceil(x);
        }, o.weeks = function(u) {
          return u === void 0 && (u = null), this.week(u);
        };
      };
    }));
  })(Q)), Q.exports;
}
var mt = ft();
const pt = /* @__PURE__ */ N(mt);
var K = { exports: {} }, gt = K.exports, xe;
function yt() {
  return xe || (xe = 1, (function(s, e) {
    (function(t, r) {
      s.exports = r();
    })(gt, (function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d/, i = /\d\d/, n = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, u = {}, m = function(h) {
        return (h = +h) + (h > 68 ? 1900 : 2e3);
      }, c = function(h) {
        return function(l) {
          this[h] = +l;
        };
      }, g = [/[+-]\d\d:?(\d\d)?|Z/, function(h) {
        (this.zone || (this.zone = {})).offset = (function(l) {
          if (!l || l === "Z") return 0;
          var f = l.match(/([+-]|\d\d)/g), p = 60 * f[1] + (+f[2] || 0);
          return p === 0 ? 0 : f[0] === "+" ? -p : p;
        })(h);
      }], y = function(h) {
        var l = u[h];
        return l && (l.indexOf ? l : l.s.concat(l.f));
      }, x = function(h, l) {
        var f, p = u.meridiem;
        if (p) {
          for (var T = 1; T <= 24; T += 1) if (h.indexOf(p(T, 0, l)) > -1) {
            f = T > 12;
            break;
          }
        } else f = h === (l ? "pm" : "PM");
        return f;
      }, Y = { A: [o, function(h) {
        this.afternoon = x(h, !1);
      }], a: [o, function(h) {
        this.afternoon = x(h, !0);
      }], Q: [a, function(h) {
        this.month = 3 * (h - 1) + 1;
      }], S: [a, function(h) {
        this.milliseconds = 100 * +h;
      }], SS: [i, function(h) {
        this.milliseconds = 10 * +h;
      }], SSS: [/\d{3}/, function(h) {
        this.milliseconds = +h;
      }], s: [n, c("seconds")], ss: [n, c("seconds")], m: [n, c("minutes")], mm: [n, c("minutes")], H: [n, c("hours")], h: [n, c("hours")], HH: [n, c("hours")], hh: [n, c("hours")], D: [n, c("day")], DD: [i, c("day")], Do: [o, function(h) {
        var l = u.ordinal, f = h.match(/\d+/);
        if (this.day = f[0], l) for (var p = 1; p <= 31; p += 1) l(p).replace(/\[|\]/g, "") === h && (this.day = p);
      }], w: [n, c("week")], ww: [i, c("week")], M: [n, c("month")], MM: [i, c("month")], MMM: [o, function(h) {
        var l = y("months"), f = (y("monthsShort") || l.map((function(p) {
          return p.slice(0, 3);
        }))).indexOf(h) + 1;
        if (f < 1) throw new Error();
        this.month = f % 12 || f;
      }], MMMM: [o, function(h) {
        var l = y("months").indexOf(h) + 1;
        if (l < 1) throw new Error();
        this.month = l % 12 || l;
      }], Y: [/[+-]?\d+/, c("year")], YY: [i, function(h) {
        this.year = m(h);
      }], YYYY: [/\d{4}/, c("year")], Z: g, ZZ: g };
      function M(h) {
        var l, f;
        l = h, f = u && u.formats;
        for (var p = (h = l.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(v, k, P) {
          var S = P && P.toUpperCase();
          return k || f[P] || t[P] || f[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(z, A, E) {
            return A || E.slice(1);
          }));
        }))).match(r), T = p.length, O = 0; O < T; O += 1) {
          var C = p[O], b = Y[C], w = b && b[0], F = b && b[1];
          p[O] = F ? { regex: w, parser: F } : C.replace(/^\[|\]$/g, "");
        }
        return function(v) {
          for (var k = {}, P = 0, S = 0; P < T; P += 1) {
            var z = p[P];
            if (typeof z == "string") S += z.length;
            else {
              var A = z.regex, E = z.parser, q = v.slice(S), $ = A.exec(q)[0];
              E.call(k, $), v = v.replace($, "");
            }
          }
          return (function(B) {
            var R = B.afternoon;
            if (R !== void 0) {
              var L = B.hours;
              R ? L < 12 && (B.hours += 12) : L === 12 && (B.hours = 0), delete B.afternoon;
            }
          })(k), k;
        };
      }
      return function(h, l, f) {
        f.p.customParseFormat = !0, h && h.parseTwoDigitYear && (m = h.parseTwoDigitYear);
        var p = l.prototype, T = p.parse;
        p.parse = function(O) {
          var C = O.date, b = O.utc, w = O.args;
          this.$u = b;
          var F = w[1];
          if (typeof F == "string") {
            var v = w[2] === !0, k = w[3] === !0, P = v || k, S = w[2];
            k && (S = w[2]), u = this.$locale(), !v && S && (u = f.Ls[S]), this.$d = (function(q, $, B, R) {
              try {
                if (["x", "X"].indexOf($) > -1) return new Date(($ === "X" ? 1e3 : 1) * q);
                var L = M($)(q), ne = L.year, G = L.month, Fe = L.day, ke = L.hours, Se = L.minutes, ve = L.seconds, Pe = L.milliseconds, pe = L.zone, ge = L.week, se = /* @__PURE__ */ new Date(), oe = Fe || (ne || G ? 1 : se.getDate()), ie = ne || se.getFullYear(), Z = 0;
                ne && !G || (Z = G > 0 ? G - 1 : se.getMonth());
                var X, ae = ke || 0, ue = Se || 0, ce = ve || 0, le = Pe || 0;
                return pe ? new Date(Date.UTC(ie, Z, oe, ae, ue, ce, le + 60 * pe.offset * 1e3)) : B ? new Date(Date.UTC(ie, Z, oe, ae, ue, ce, le)) : (X = new Date(ie, Z, oe, ae, ue, ce, le), ge && (X = R(X).week(ge).toDate()), X);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(C, F, b, f), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), P && C != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), u = {};
          } else if (F instanceof Array) for (var z = F.length, A = 1; A <= z; A += 1) {
            w[1] = F[A - 1];
            var E = f.apply(this, w);
            if (E.isValid()) {
              this.$d = E.$d, this.$L = E.$L, this.init();
              break;
            }
            A === z && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else T.call(this, O);
        };
      };
    }));
  })(K)), K.exports;
}
var xt = yt();
const Tt = /* @__PURE__ */ N(xt);
var J = { exports: {} }, Mt = J.exports, Te;
function Ot() {
  return Te || (Te = 1, (function(s, e) {
    (function(t, r) {
      s.exports = r();
    })(Mt, (function() {
      var t = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(r, a, i) {
        var n = a.prototype, o = n.format;
        i.en.formats = t, n.format = function(u) {
          u === void 0 && (u = "YYYY-MM-DDTHH:mm:ssZ");
          var m = this.$locale().formats, c = (function(g, y) {
            return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(x, Y, M) {
              var h = M && M.toUpperCase();
              return Y || y[M] || t[M] || y[h].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(l, f, p) {
                return f || p.slice(1);
              }));
            }));
          })(u, m === void 0 ? {} : m);
          return o.call(this, c);
        };
      };
    }));
  })(J)), J.exports;
}
var Yt = Ot();
const jt = /* @__PURE__ */ N(Yt);
var ee = { exports: {} }, Dt = ee.exports, Me;
function wt() {
  return Me || (Me = 1, (function(s, e) {
    (function(t, r) {
      s.exports = r();
    })(Dt, (function() {
      return function(t, r, a) {
        r.prototype.isBetween = function(i, n, o, u) {
          var m = a(i), c = a(n), g = (u = u || "()")[0] === "(", y = u[1] === ")";
          return (g ? this.isAfter(m, o) : !this.isBefore(m, o)) && (y ? this.isBefore(c, o) : !this.isAfter(c, o)) || (g ? this.isBefore(m, o) : !this.isAfter(m, o)) && (y ? this.isAfter(c, o) : !this.isBefore(c, o));
        };
      };
    }));
  })(ee)), ee.exports;
}
var bt = wt();
const Lt = /* @__PURE__ */ N(bt);
var te = { exports: {} }, Ct = te.exports, Oe;
function Ft() {
  return Oe || (Oe = 1, (function(s, e) {
    (function(t, r) {
      s.exports = r();
    })(Ct, (function() {
      return function(t, r) {
        var a = r.prototype, i = a.format;
        a.format = function(n) {
          var o = this, u = this.$locale();
          if (!this.isValid()) return i.bind(this)(n);
          var m = this.$utils(), c = (n || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(g) {
            switch (g) {
              case "Q":
                return Math.ceil((o.$M + 1) / 3);
              case "Do":
                return u.ordinal(o.$D);
              case "gggg":
                return o.weekYear();
              case "GGGG":
                return o.isoWeekYear();
              case "wo":
                return u.ordinal(o.week(), "W");
              case "w":
              case "ww":
                return m.s(o.week(), g === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return m.s(o.isoWeek(), g === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return m.s(String(o.$H === 0 ? 24 : o.$H), g === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(o.$d.getTime() / 1e3);
              case "x":
                return o.$d.getTime();
              case "z":
                return "[" + o.offsetName() + "]";
              case "zzz":
                return "[" + o.offsetName("long") + "]";
              default:
                return g;
            }
          }));
          return i.bind(this)(c);
        };
      };
    }));
  })(te)), te.exports;
}
var kt = Ft();
const St = /* @__PURE__ */ N(kt), Ye = /* @__PURE__ */ new Set();
function vt(s, e = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const t = Array.isArray(s) ? s.join(`
`) : s;
  Ye.has(t) || (Ye.add(t), e === "error" ? console.error(t) : console.warn(t));
}
j.extend(jt);
j.extend(pt);
j.extend(Lt);
j.extend(St);
const Pt = {
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
}, zt = {
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
  fullTime12h: "hh:mm A",
  fullTime24h: "HH:mm",
  keyboardDateTime12h: "L hh:mm A",
  keyboardDateTime24h: "L HH:mm"
}, de = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), je = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`);
class At {
  isMUIAdapter = !0;
  isTimezoneCompatible = !0;
  lib = "dayjs";
  escapedCharacters = {
    start: "[",
    end: "]"
  };
  formatTokenMap = Pt;
  constructor({
    locale: e,
    formats: t
  } = {}) {
    this.locale = e, this.formats = he({}, zt, t), j.extend(Tt);
  }
  setLocaleToValue = (e) => {
    const t = this.getCurrentLocaleCode();
    return t === e.locale() ? e : e.locale(t);
  };
  hasUTCPlugin = () => typeof j.utc < "u";
  hasTimezonePlugin = () => typeof j.tz < "u";
  isSame = (e, t, r) => {
    const a = this.setTimezone(t, this.getTimezone(e));
    return e.format(r) === a.format(r);
  };
  /**
   * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
   */
  cleanTimezone = (e) => {
    switch (e) {
      case "default":
        return;
      case "system":
        return j.tz.guess();
      default:
        return e;
    }
  };
  createSystemDate = (e) => {
    let t;
    if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
      const r = j.tz.guess();
      r === "UTC" ? t = j(e) : t = j.tz(e, r);
    } else
      t = j(e);
    return this.setLocaleToValue(t);
  };
  createUTCDate = (e) => {
    if (!this.hasUTCPlugin())
      throw new Error(de);
    return this.setLocaleToValue(j.utc(e));
  };
  createTZDate = (e, t) => {
    if (!this.hasUTCPlugin())
      throw new Error(de);
    if (!this.hasTimezonePlugin())
      throw new Error(je);
    const r = e !== void 0 && !e.endsWith("Z");
    return this.setLocaleToValue(j(e).tz(this.cleanTimezone(t), r));
  };
  getLocaleFormats = () => {
    const e = j.Ls, t = this.locale || "en";
    let r = e[t];
    return r === void 0 && (process.env.NODE_ENV !== "production" && vt(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), r = e.en), r.formats;
  };
  /**
   * If the new day does not have the same offset as the old one (when switching to summer day time for example),
   * Then dayjs will not automatically adjust the offset (moment does).
   * We have to parse again the value to make sure the `fixOffset` method is applied.
   * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
   */
  adjustOffset = (e) => {
    if (!this.hasTimezonePlugin())
      return e;
    const t = this.getTimezone(e);
    if (t !== "UTC") {
      const r = e.tz(this.cleanTimezone(t), !0);
      if (r.$offset === (e.$offset ?? 0))
        return e;
      e.$offset = r.$offset;
    }
    return e;
  };
  date = (e, t = "default") => e === null ? null : t === "UTC" ? this.createUTCDate(e) : t === "system" || t === "default" && !this.hasTimezonePlugin() ? this.createSystemDate(e) : this.createTZDate(e, t);
  getInvalidDate = () => j(/* @__PURE__ */ new Date("Invalid date"));
  getTimezone = (e) => {
    if (this.hasTimezonePlugin()) {
      const t = e.$x?.$timezone;
      if (t)
        return t;
    }
    return this.hasUTCPlugin() && e.isUTC() ? "UTC" : "system";
  };
  setTimezone = (e, t) => {
    if (this.getTimezone(e) === t)
      return e;
    if (t === "UTC") {
      if (!this.hasUTCPlugin())
        throw new Error(de);
      return e.utc();
    }
    if (t === "system")
      return e.local();
    if (!this.hasTimezonePlugin()) {
      if (t === "default")
        return e;
      throw new Error(je);
    }
    return this.setLocaleToValue(j.tz(e, this.cleanTimezone(t)));
  };
  toJsDate = (e) => e.toDate();
  parse = (e, t) => e === "" ? null : j(e, t, this.locale, !0);
  getCurrentLocaleCode = () => this.locale || "en";
  is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || "");
  expandFormat = (e) => {
    const t = this.getLocaleFormats(), r = (a) => a.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (i, n, o) => n || o.slice(1));
    return e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (a, i, n) => {
      const o = n && n.toUpperCase();
      return i || t[n] || r(t[o]);
    });
  };
  isValid = (e) => e == null ? !1 : e.isValid();
  format = (e, t) => this.formatByString(e, this.formats[t]);
  formatByString = (e, t) => this.setLocaleToValue(e).format(t);
  formatNumber = (e) => e;
  isEqual = (e, t) => e === null && t === null ? !0 : e === null || t === null ? !1 : e.toDate().getTime() === t.toDate().getTime();
  isSameYear = (e, t) => this.isSame(e, t, "YYYY");
  isSameMonth = (e, t) => this.isSame(e, t, "YYYY-MM");
  isSameDay = (e, t) => this.isSame(e, t, "YYYY-MM-DD");
  isSameHour = (e, t) => e.isSame(t, "hour");
  isAfter = (e, t) => e > t;
  isAfterYear = (e, t) => this.hasUTCPlugin() ? !this.isSameYear(e, t) && e.utc() > t.utc() : e.isAfter(t, "year");
  isAfterDay = (e, t) => this.hasUTCPlugin() ? !this.isSameDay(e, t) && e.utc() > t.utc() : e.isAfter(t, "day");
  isBefore = (e, t) => e < t;
  isBeforeYear = (e, t) => this.hasUTCPlugin() ? !this.isSameYear(e, t) && e.utc() < t.utc() : e.isBefore(t, "year");
  isBeforeDay = (e, t) => this.hasUTCPlugin() ? !this.isSameDay(e, t) && e.utc() < t.utc() : e.isBefore(t, "day");
  isWithinRange = (e, [t, r]) => e >= t && e <= r;
  startOfYear = (e) => this.adjustOffset(e.startOf("year"));
  startOfMonth = (e) => this.adjustOffset(e.startOf("month"));
  startOfWeek = (e) => this.adjustOffset(this.setLocaleToValue(e).startOf("week"));
  startOfDay = (e) => this.adjustOffset(e.startOf("day"));
  endOfYear = (e) => this.adjustOffset(e.endOf("year"));
  endOfMonth = (e) => this.adjustOffset(e.endOf("month"));
  endOfWeek = (e) => this.adjustOffset(this.setLocaleToValue(e).endOf("week"));
  endOfDay = (e) => this.adjustOffset(e.endOf("day"));
  addYears = (e, t) => this.adjustOffset(e.add(t, "year"));
  addMonths = (e, t) => this.adjustOffset(e.add(t, "month"));
  addWeeks = (e, t) => this.adjustOffset(e.add(t, "week"));
  addDays = (e, t) => this.adjustOffset(e.add(t, "day"));
  addHours = (e, t) => this.adjustOffset(e.add(t, "hour"));
  addMinutes = (e, t) => this.adjustOffset(e.add(t, "minute"));
  addSeconds = (e, t) => this.adjustOffset(e.add(t, "second"));
  getYear = (e) => e.year();
  getMonth = (e) => e.month();
  getDate = (e) => e.date();
  getHours = (e) => e.hour();
  getMinutes = (e) => e.minute();
  getSeconds = (e) => e.second();
  getMilliseconds = (e) => e.millisecond();
  setYear = (e, t) => this.adjustOffset(e.set("year", t));
  setMonth = (e, t) => this.adjustOffset(e.set("month", t));
  setDate = (e, t) => this.adjustOffset(e.set("date", t));
  setHours = (e, t) => this.adjustOffset(e.set("hour", t));
  setMinutes = (e, t) => this.adjustOffset(e.set("minute", t));
  setSeconds = (e, t) => this.adjustOffset(e.set("second", t));
  setMilliseconds = (e, t) => this.adjustOffset(e.set("millisecond", t));
  getDaysInMonth = (e) => e.daysInMonth();
  getWeekArray = (e) => {
    const t = this.startOfWeek(this.startOfMonth(e)), r = this.endOfWeek(this.endOfMonth(e));
    let a = 0, i = t;
    const n = [];
    for (; i < r; ) {
      const o = Math.floor(a / 7);
      n[o] = n[o] || [], n[o].push(i), i = this.addDays(i, 1), a += 1;
    }
    return n;
  };
  getWeekNumber = (e) => e.week();
  getDayOfWeek(e) {
    return e.day() + 1;
  }
  getYearRange = ([e, t]) => {
    const r = this.startOfYear(e), a = this.endOfYear(t), i = [];
    let n = r;
    for (; this.isBefore(n, a); )
      i.push(n), n = this.addYears(n, 1);
    return i;
  };
}
const Et = ({
  name: s,
  required: e,
  minDate: t,
  maxDate: r,
  validateOptions: a,
  ...i
}) => {
  const n = s.split(".");
  function o(c) {
    return c.locale("en-gb").format("L");
  }
  let u = Ze();
  e && (u = u.required()), t && (u = u.min(
    t,
    `this field must be after or equal to ${o(t)}`
  )), r && (u = u.max(
    r,
    `this field must be before or equal to ${o(r)}`
  ));
  const m = {
    name: s,
    type: "date",
    validate: H(u, a)
  };
  return /* @__PURE__ */ d.jsx(_, { ...m, children: ({ form: c }) => {
    const g = D(c.errors, n), y = D(c.touched, n);
    let x = D(
      c.values,
      n
    );
    x = x ? j(x) : null;
    function Y(M) {
      c.setFieldValue(
        s,
        M && M.isValid() ? M.format("YYYY-MM-DD") : null,
        !0
      );
    }
    return /* @__PURE__ */ d.jsx(
      rt,
      {
        dateAdapter: At,
        adapterLocale: "en-gb",
        children: /* @__PURE__ */ d.jsx(
          nt,
          {
            name: s,
            value: x,
            minDate: t,
            maxDate: r,
            onChange: Y,
            slotProps: {
              textField: {
                id: s,
                // @ts-expect-error value is compatible
                onChange: (M) => {
                  Y(M);
                },
                onBlur: c.handleBlur,
                required: e,
                error: y && !!g,
                helperText: y && g
              }
            },
            ...i
          }
        )
      }
    );
  } });
}, W = ({
  id: s,
  name: e,
  schema: t,
  type: r = "text",
  required: a = !1,
  dirty: i = !1,
  unique: n = !1,
  uniqueCaseInsensitive: o = !1,
  split: u,
  validateOptions: m,
  ...c
}) => {
  const [g, y] = U(""), x = e.split(".");
  function Y() {
    let l = t;
    if (l = a ? l.required() : l.optional(), i && !u && (l = l.notOneOf(
      [g],
      "cannot be initial value"
    )), !u) return l;
    let f = Xe().of(l);
    return f = a ? f.required().min(1) : f.optional(), (n || o) && (f = f.test({
      message: "cannot have duplicates",
      test: (p) => Array.isArray(p) && p.length >= 2 && p.every((T) => typeof T == "string") ? new Set(
        o ? p.map((T) => T.toLowerCase()) : p
      ).size === p.length : !0
    })), i && (f = f.notOneOf(
      [g],
      "cannot be initial value"
    )), f;
  }
  const M = {
    name: e,
    type: r,
    validate: H(Y(), m)
  }, h = ({ form: l }) => {
    const f = D(
      l.initialValues,
      x
    ), p = D(
      l.values,
      x
    ), T = D(l.errors, x), O = D(l.touched, x);
    return I(() => {
      y(f);
    }, [f]), I(() => {
      l.setFieldValue(
        e,
        u && typeof p == "string" ? p.split(u) : p,
        !0
      );
    }, [p]), /* @__PURE__ */ d.jsx(
      fe,
      {
        id: s ?? e,
        name: e,
        type: r,
        required: a,
        value: p,
        onChange: l.handleChange,
        onBlur: l.handleBlur,
        error: O && !!T,
        helperText: O && T,
        ...c
      }
    );
  };
  return /* @__PURE__ */ d.jsx(_, { ...M, children: h });
}, Bt = ({
  name: s = "email",
  label: e = "Email address",
  placeholder: t = "Enter your email address",
  InputProps: r = {},
  ...a
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    type: "email",
    schema: V().email(),
    name: s,
    label: e,
    placeholder: t,
    InputProps: {
      endAdornment: /* @__PURE__ */ d.jsx(me, { position: "end", children: /* @__PURE__ */ d.jsx(st, {}) }),
      ...r
    },
    ...a
  }
), $t = ({
  name: s = "first_name",
  label: e = "First name",
  placeholder: t = "Enter your first name",
  InputProps: r = {},
  ...a
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    schema: ut.first_name,
    name: s,
    label: e,
    placeholder: t,
    InputProps: {
      endAdornment: /* @__PURE__ */ d.jsx(me, { position: "end", children: /* @__PURE__ */ d.jsx(ot, {}) }),
      ...r
    },
    ...a
  }
), be = {
  behavior: "smooth",
  block: "start"
}, _t = ({
  scrollIntoViewOptions: s = be,
  ...e
}) => {
  const t = Ve(null);
  return I(() => {
    t.current && t.current.scrollIntoView(s);
  }, [s]), /* @__PURE__ */ d.jsx(we, { ref: t, error: !0, ...e });
}, Le = ({
  children: s,
  scrollIntoViewOptions: e = be,
  nonFieldErrorsProps: t,
  fieldRefs: r = [],
  ...a
}) => /* @__PURE__ */ d.jsx(We, { ...a, children: (i) => {
  const n = !!Object.keys(i.errors).length, o = n && typeof i.errors.__all__ == "string";
  if (n && !o && i.isSubmitting && r.length) {
    const u = et(i.errors), m = r.find(({ name: c }) => u.includes(c))?.inputRef.current;
    m && m.scrollIntoView(e);
  }
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    o && /* @__PURE__ */ d.jsx(_t, { ...t, children: i.errors.__all__ }),
    /* @__PURE__ */ d.jsx(qe, { children: typeof s == "function" ? s(i) : s })
  ] });
} }), Ut = ({
  useMutation: s,
  submitOptions: e,
  ...t
}) => {
  const [r] = s();
  return /* @__PURE__ */ d.jsx(
    Le,
    {
      ...t,
      onSubmit: Qe(
        r,
        t.initialValues,
        e
      )
    }
  );
}, It = (s) => "onSubmit" in s ? /* @__PURE__ */ d.jsx(Le, { ...s }) : Ut(s), Vt = ({
  name: s = "otp",
  label: e = "OTP",
  placeholder: t = "Enter your OTP",
  ...r
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    name: s,
    label: e,
    schema: V().matches(/^[0-9]{6}$/, "Must be exactly 6 digits."),
    placeholder: t,
    required: !0,
    ...r
  }
), Ht = ({
  id: s,
  repeatName: e,
  setValue: t,
  fieldProps: r,
  name: a,
  label: i,
  placeholder: n,
  type: o,
  ...u
}) => {
  const { form: m } = r, c = a.split("."), g = D(m.values, c), y = e.split("."), x = D(
    m.values,
    y
  ), Y = D(
    m.touched,
    y
  ), M = D(m.errors, y);
  return I(() => {
    t(g);
  }, [t, g]), /* @__PURE__ */ d.jsx(
    fe,
    {
      required: !0,
      type: o,
      label: i ?? `Repeat ${a.replace("_", " ")}`,
      placeholder: n ?? `Enter your ${a.replace("_", " ")} again`,
      id: s ?? e,
      name: e,
      value: x,
      onChange: m.handleChange,
      onBlur: m.handleBlur,
      error: Y && !!M,
      helperText: Y && M,
      ...u
    }
  );
}, Ce = ({
  name: s,
  type: e = "text",
  validateOptions: t,
  ...r
}) => {
  const [a, i] = U(""), n = `${s}_repeat`, o = {
    name: n,
    type: e,
    validate: H(
      V().required().equals([a], "does not match"),
      t
    )
  };
  return /* @__PURE__ */ d.jsx(_, { ...o, children: (u) => /* @__PURE__ */ d.jsx(
    Ht,
    {
      name: s,
      type: e,
      repeatName: n,
      setValue: i,
      fieldProps: u,
      ...r
    }
  ) });
}, Nt = ({
  name: s = "password",
  label: e = "Password",
  placeholder: t = "Enter your password",
  schema: r = V(),
  InputProps: a = {},
  withRepeatField: i = !1,
  repeatFieldProps: n = {},
  ...o
}) => {
  const [u, m] = U(!1), c = u ? "text" : "password", g = /* @__PURE__ */ d.jsx(me, { position: "end", children: /* @__PURE__ */ d.jsx(
    _e,
    {
      onClick: () => {
        m((y) => !y);
      },
      edge: "end",
      children: u ? /* @__PURE__ */ d.jsx(it, {}) : /* @__PURE__ */ d.jsx(at, {})
    }
  ) });
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      W,
      {
        autoComplete: "off",
        type: c,
        name: s,
        label: e,
        schema: r,
        placeholder: t,
        InputProps: { endAdornment: g, ...a },
        ...o
      }
    ),
    i && /* @__PURE__ */ d.jsx(
      Ce,
      {
        name: s,
        type: c,
        ...n,
        InputProps: { endAdornment: g, ...n.InputProps }
      }
    )
  ] });
}, Wt = ({
  children: s = "Submit",
  ...e
}) => {
  function t(r, a) {
    a = a || {};
    for (const i in r) {
      const n = r[i];
      a[i] = n instanceof Object && n.constructor === Object ? t(n, a) : !0;
    }
    return a;
  }
  return /* @__PURE__ */ d.jsx(_, { name: "submit", type: "submit", children: ({ form: r }) => /* @__PURE__ */ d.jsx(
    De,
    {
      type: "button",
      onClick: () => {
        r.setTouched(t(r.values), !0).then((a) => {
          const i = !!(a && Object.keys(a).length);
          r.setSubmitting(i), i || r.submitForm();
        });
      },
      ...e,
      children: s
    }
  ) });
}, qt = ({
  textFieldProps: s,
  ...e
}) => {
  const {
    name: t = "uk_county",
    label: r = "UK county",
    placeholder: a = "Select your UK county",
    ...i
  } = s || {};
  return /* @__PURE__ */ d.jsx(
    re,
    {
      options: tt,
      textFieldProps: { name: t, label: r, placeholder: a, ...i },
      ...e
    }
  );
}, fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ApiAutocompleteField: ct,
  AutocompleteField: re,
  CheckboxField: lt,
  CountryField: dt,
  DatePickerField: Et,
  EmailField: Bt,
  FirstNameField: $t,
  Form: It,
  OtpField: Vt,
  PasswordField: Nt,
  RepeatField: Ce,
  SubmitButton: Wt,
  TextField: W,
  UkCountyField: qt
}, Symbol.toStringTag, { value: "Module" }));
export {
  ct as A,
  lt as C,
  Et as D,
  Bt as E,
  $t as F,
  Vt as O,
  Nt as P,
  Ce as R,
  Wt as S,
  W as T,
  qt as U,
  re as a,
  dt as b,
  It as c,
  fr as i
};
//# sourceMappingURL=index-BRHFlEjS.js.map
