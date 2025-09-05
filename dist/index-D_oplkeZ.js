import { j as d } from "./jsx-runtime-Dpn_P65e.js";
import { CircularProgress as zt, Button as Dt, Autocomplete as At, TextField as ft, FormControl as Et, FormControlLabel as Bt, Checkbox as $t, FormHelperText as wt, InputAdornment as mt, IconButton as Ut } from "@mui/material";
import { useState as _, useEffect as I, forwardRef as _t, Children as It, useRef as Vt } from "react";
import { m as Ht, j as D, n as Nt, d as Wt, h as qt, U as Rt } from "./urls-CidH8aI9.js";
import { u as Gt, s as V, g as H, a as Zt } from "./en-gb-CkCoz8Uz.js";
import { Field as U, Formik as Xt, Form as Qt } from "formik";
import { string as N, number as Kt, bool as Jt, date as te, array as ee } from "yup";
import { LocalizationProvider as re, DatePicker as se } from "@mui/x-date-pickers";
import j from "dayjs";
import { EmailOutlined as ne, PersonOutlined as ie, Visibility as oe, VisibilityOff as ae } from "@mui/icons-material";
import "@reduxjs/toolkit/query/react";
import "js-cookie";
import { u as ue } from "./schemas-shENJqrs.js";
const ce = ({
  useLazyListQuery: a,
  filterOptions: i,
  getOptionLabel: n,
  getOptionKey: t = (o) => o.id,
  searchKey: e,
  ...r
}) => {
  const [o, u] = _(""), [s, { isLoading: l, isError: c }] = a(), [{ limit: g, offset: y }, x] = Gt(), [{ options: Y, hasMore: T }, f] = _({ options: {}, hasMore: !0 });
  I(
    () => {
      const M = { limit: g, offset: y, ...i };
      o && (M[e] = o), s(M, !0).unwrap().then(({ data: O, offset: C, limit: b, count: w }) => {
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
      o,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...Object.values(i || {})
    ]
  );
  let h = Object.keys(Y);
  if (!h.length) return /* @__PURE__ */ d.jsx(d.Fragment, {});
  typeof t(Object.values(Y)[0]) == "number" && (h = h.map(Number));
  function m() {
    x(({ page: M, limit: O }) => ({ page: M + 1, limit: O }));
  }
  const p = ({ children: M, ...O }, C) => {
    const b = It.toArray(M);
    return l ? b.push(/* @__PURE__ */ d.jsx(zt, {}, "is-loading")) : (c && b.push(/* @__PURE__ */ d.jsx(Ht, {}, "is-error")), T && b.push(
      /* @__PURE__ */ d.jsx(Dt, { onClick: m, children: "Load more" }, "load-more")
    )), /* @__PURE__ */ d.jsx(
      "ul",
      {
        ...O,
        ref: C,
        onScroll: (w) => {
          !l && w.currentTarget.clientHeight + w.currentTarget.scrollTop >= w.currentTarget.scrollHeight && m();
        },
        children: b
      }
    );
  };
  return /* @__PURE__ */ d.jsx(
    rt,
    {
      options: h,
      getOptionLabel: (M) => n(Y[M]),
      onInputChange: (M, O, C) => {
        u(C === "input" ? O : "");
      },
      ListboxComponent: _t(p),
      ...r
    }
  );
}, rt = ({
  textFieldProps: a,
  options: i,
  validateOptions: n,
  ...t
}) => {
  const { id: e, name: r, required: o, ...u } = a, s = r.split("."), l = "not a valid option";
  let c = typeof i[0] == "string" ? N().oneOf(i, l) : Kt().oneOf(i, l);
  o && (c = c.required());
  const g = {
    name: r,
    type: typeof i[0] == "string" ? "text" : "number",
    validate: V(c, n)
  };
  return /* @__PURE__ */ d.jsx(U, { ...g, children: ({ form: y, meta: x }) => {
    const Y = D(
      y.values,
      s
    ), T = D(y.touched, s), f = D(y.errors, s);
    return /* @__PURE__ */ d.jsx(
      At,
      {
        options: i,
        defaultValue: x.initialValue === "" ? void 0 : x.initialValue,
        renderInput: ({
          id: h,
          // eslint-disable-line @typescript-eslint/no-unused-vars
          ...m
        }) => /* @__PURE__ */ d.jsx(
          ft,
          {
            id: e ?? r,
            name: r,
            required: o,
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
  id: a,
  name: i,
  formControlLabelProps: n,
  required: t = !1,
  errorMessage: e = "this is a required field",
  validateOptions: r,
  ...o
}) => {
  const u = i.split(".");
  let s = Jt();
  t && (s = s.oneOf([!0], e));
  const l = {
    name: i,
    type: "checkbox",
    validate: V(s, r)
  };
  return /* @__PURE__ */ d.jsx(U, { ...l, children: ({ form: c, meta: g }) => {
    const y = D(c.touched, u), x = D(c.errors, u), Y = D(
      c.values,
      u
    ), T = y && !!x;
    return /* @__PURE__ */ d.jsxs(Et, { error: T, required: t, children: [
      /* @__PURE__ */ d.jsx(
        Bt,
        {
          control: /* @__PURE__ */ d.jsx(
            $t,
            {
              defaultChecked: g.initialValue,
              id: a ?? i,
              name: i,
              value: Y,
              onChange: c.handleChange,
              onBlur: c.handleBlur,
              ...o
            }
          ),
          ...n
        }
      ),
      T && /* @__PURE__ */ d.jsx(wt, { children: x })
    ] });
  } });
}, de = ({
  textFieldProps: a,
  ...i
}) => {
  const {
    name: n = "country",
    label: t = "Country",
    placeholder: e = "Select your country",
    ...r
  } = a || {};
  return /* @__PURE__ */ d.jsx(
    rt,
    {
      options: Wt,
      getOptionLabel: (o) => Nt[o],
      textFieldProps: { name: n, label: t, placeholder: e, ...r },
      ...i
    }
  );
};
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(a) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var t in n) ({}).hasOwnProperty.call(n, t) && (a[t] = n[t]);
    }
    return a;
  }, lt.apply(null, arguments);
}
var Q = { exports: {} }, le = Q.exports, yt;
function fe() {
  return yt || (yt = 1, (function(a, i) {
    (function(n, t) {
      a.exports = t();
    })(le, (function() {
      var n = "week", t = "year";
      return function(e, r, o) {
        var u = r.prototype;
        u.week = function(s) {
          if (s === void 0 && (s = null), s !== null) return this.add(7 * (s - this.week()), "day");
          var l = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var c = o(this).startOf(t).add(1, t).date(l), g = o(this).endOf(n);
            if (c.isBefore(g)) return 1;
          }
          var y = o(this).startOf(t).date(l).startOf(n).subtract(1, "millisecond"), x = this.diff(y, n, !0);
          return x < 0 ? o(this).startOf("week").week() : Math.ceil(x);
        }, u.weeks = function(s) {
          return s === void 0 && (s = null), this.week(s);
        };
      };
    }));
  })(Q)), Q.exports;
}
var me = fe();
const pe = /* @__PURE__ */ H(me);
var K = { exports: {} }, ge = K.exports, xt;
function ye() {
  return xt || (xt = 1, (function(a, i) {
    (function(n, t) {
      a.exports = t();
    })(ge, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, e = /\d/, r = /\d\d/, o = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, s = {}, l = function(f) {
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
      }, x = function(f, h) {
        var m, p = s.meridiem;
        if (p) {
          for (var M = 1; M <= 24; M += 1) if (f.indexOf(p(M, 0, h)) > -1) {
            m = M > 12;
            break;
          }
        } else m = f === (h ? "pm" : "PM");
        return m;
      }, Y = { A: [u, function(f) {
        this.afternoon = x(f, !1);
      }], a: [u, function(f) {
        this.afternoon = x(f, !0);
      }], Q: [e, function(f) {
        this.month = 3 * (f - 1) + 1;
      }], S: [e, function(f) {
        this.milliseconds = 100 * +f;
      }], SS: [r, function(f) {
        this.milliseconds = 10 * +f;
      }], SSS: [/\d{3}/, function(f) {
        this.milliseconds = +f;
      }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [r, c("day")], Do: [u, function(f) {
        var h = s.ordinal, m = f.match(/\d+/);
        if (this.day = m[0], h) for (var p = 1; p <= 31; p += 1) h(p).replace(/\[|\]/g, "") === f && (this.day = p);
      }], w: [o, c("week")], ww: [r, c("week")], M: [o, c("month")], MM: [r, c("month")], MMM: [u, function(f) {
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
        this.year = l(f);
      }], YYYY: [/\d{4}/, c("year")], Z: g, ZZ: g };
      function T(f) {
        var h, m;
        h = f, m = s && s.formats;
        for (var p = (f = h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(P, F, v) {
          var S = v && v.toUpperCase();
          return F || m[v] || n[v] || m[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(z, A, E) {
            return A || E.slice(1);
          }));
        }))).match(t), M = p.length, O = 0; O < M; O += 1) {
          var C = p[O], b = Y[C], w = b && b[0], k = b && b[1];
          p[O] = k ? { regex: w, parser: k } : C.replace(/^\[|\]$/g, "");
        }
        return function(P) {
          for (var F = {}, v = 0, S = 0; v < M; v += 1) {
            var z = p[v];
            if (typeof z == "string") S += z.length;
            else {
              var A = z.regex, E = z.parser, q = P.slice(S), $ = A.exec(q)[0];
              E.call(F, $), P = P.replace($, "");
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
        m.p.customParseFormat = !0, f && f.parseTwoDigitYear && (l = f.parseTwoDigitYear);
        var p = h.prototype, M = p.parse;
        p.parse = function(O) {
          var C = O.date, b = O.utc, w = O.args;
          this.$u = b;
          var k = w[1];
          if (typeof k == "string") {
            var P = w[2] === !0, F = w[3] === !0, v = P || F, S = w[2];
            F && (S = w[2]), s = this.$locale(), !P && S && (s = m.Ls[S]), this.$d = (function(q, $, B, R) {
              try {
                if (["x", "X"].indexOf($) > -1) return new Date(($ === "X" ? 1e3 : 1) * q);
                var L = T($)(q), st = L.year, G = L.month, kt = L.day, Ft = L.hours, St = L.minutes, Pt = L.seconds, vt = L.milliseconds, pt = L.zone, gt = L.week, nt = /* @__PURE__ */ new Date(), it = kt || (st || G ? 1 : nt.getDate()), ot = st || nt.getFullYear(), Z = 0;
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
          else M.call(this, O);
        };
      };
    }));
  })(K)), K.exports;
}
var xe = ye();
const Me = /* @__PURE__ */ H(xe);
var J = { exports: {} }, Te = J.exports, Mt;
function Oe() {
  return Mt || (Mt = 1, (function(a, i) {
    (function(n, t) {
      a.exports = t();
    })(Te, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, e, r) {
        var o = e.prototype, u = o.format;
        r.en.formats = n, o.format = function(s) {
          s === void 0 && (s = "YYYY-MM-DDTHH:mm:ssZ");
          var l = this.$locale().formats, c = (function(g, y) {
            return g.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(x, Y, T) {
              var f = T && T.toUpperCase();
              return Y || y[T] || n[T] || y[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(h, m, p) {
                return m || p.slice(1);
              }));
            }));
          })(s, l === void 0 ? {} : l);
          return u.call(this, c);
        };
      };
    }));
  })(J)), J.exports;
}
var Ye = Oe();
const je = /* @__PURE__ */ H(Ye);
var tt = { exports: {} }, De = tt.exports, Tt;
function we() {
  return Tt || (Tt = 1, (function(a, i) {
    (function(n, t) {
      a.exports = t();
    })(De, (function() {
      return function(n, t, e) {
        t.prototype.isBetween = function(r, o, u, s) {
          var l = e(r), c = e(o), g = (s = s || "()")[0] === "(", y = s[1] === ")";
          return (g ? this.isAfter(l, u) : !this.isBefore(l, u)) && (y ? this.isBefore(c, u) : !this.isAfter(c, u)) || (g ? this.isBefore(l, u) : !this.isAfter(l, u)) && (y ? this.isAfter(c, u) : !this.isBefore(c, u));
        };
      };
    }));
  })(tt)), tt.exports;
}
var be = we();
const Le = /* @__PURE__ */ H(be);
var et = { exports: {} }, Ce = et.exports, Ot;
function ke() {
  return Ot || (Ot = 1, (function(a, i) {
    (function(n, t) {
      a.exports = t();
    })(Ce, (function() {
      return function(n, t) {
        var e = t.prototype, r = e.format;
        e.format = function(o) {
          var u = this, s = this.$locale();
          if (!this.isValid()) return r.bind(this)(o);
          var l = this.$utils(), c = (o || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(g) {
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
                return l.s(u.week(), g === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return l.s(u.isoWeek(), g === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return l.s(String(u.$H === 0 ? 24 : u.$H), g === "k" ? 1 : 2, "0");
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
const Se = /* @__PURE__ */ H(Fe), Yt = /* @__PURE__ */ new Set();
function Pe(a, i = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const n = Array.isArray(a) ? a.join(`
`) : a;
  Yt.has(n) || (Yt.add(n), i === "error" ? console.error(n) : console.warn(n));
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
}, dt = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), jt = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Ae = (a, i) => i ? (...n) => a(...n).locale(i) : a;
class Ee {
  constructor({
    locale: i,
    formats: n
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = ve, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof j.utc < "u", this.hasTimezonePlugin = () => typeof j.tz < "u", this.isSame = (t, e, r) => {
      const o = this.setTimezone(e, this.getTimezone(t));
      return t.format(r) === o.format(r);
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
        throw new Error(dt);
      return j.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(dt);
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
          throw new Error(dt);
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
      const e = this.getLocaleFormats(), r = (o) => o.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (u, s, l) => s || l.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (o, u, s) => {
        const l = s && s.toUpperCase();
        return u || e[s] || r(e[l]);
      });
    }, this.isValid = (t) => t == null ? !1 : t.isValid(), this.format = (t, e) => this.formatByString(t, this.formats[e]), this.formatByString = (t, e) => this.dayjs(t).format(e), this.formatNumber = (t) => t, this.isEqual = (t, e) => t === null && e === null ? !0 : t === null || e === null ? !1 : t.toDate().getTime() === e.toDate().getTime(), this.isSameYear = (t, e) => this.isSame(t, e, "YYYY"), this.isSameMonth = (t, e) => this.isSame(t, e, "YYYY-MM"), this.isSameDay = (t, e) => this.isSame(t, e, "YYYY-MM-DD"), this.isSameHour = (t, e) => t.isSame(e, "hour"), this.isAfter = (t, e) => t > e, this.isAfterYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"), this.isAfterDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"), this.isBefore = (t, e) => t < e, this.isBeforeYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"), this.isBeforeDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"), this.isWithinRange = (t, [e, r]) => t >= e && t <= r, this.startOfYear = (t) => this.adjustOffset(t.startOf("year")), this.startOfMonth = (t) => this.adjustOffset(t.startOf("month")), this.startOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).startOf("week")), this.startOfDay = (t) => this.adjustOffset(t.startOf("day")), this.endOfYear = (t) => this.adjustOffset(t.endOf("year")), this.endOfMonth = (t) => this.adjustOffset(t.endOf("month")), this.endOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).endOf("week")), this.endOfDay = (t) => this.adjustOffset(t.endOf("day")), this.addYears = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "year") : t.add(e, "year")), this.addMonths = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "month") : t.add(e, "month")), this.addWeeks = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "week") : t.add(e, "week")), this.addDays = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "day") : t.add(e, "day")), this.addHours = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "hour") : t.add(e, "hour")), this.addMinutes = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "minute") : t.add(e, "minute")), this.addSeconds = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "second") : t.add(e, "second")), this.getYear = (t) => t.year(), this.getMonth = (t) => t.month(), this.getDate = (t) => t.date(), this.getHours = (t) => t.hour(), this.getMinutes = (t) => t.minute(), this.getSeconds = (t) => t.second(), this.getMilliseconds = (t) => t.millisecond(), this.setYear = (t, e) => this.adjustOffset(t.set("year", e)), this.setMonth = (t, e) => this.adjustOffset(t.set("month", e)), this.setDate = (t, e) => this.adjustOffset(t.set("date", e)), this.setHours = (t, e) => this.adjustOffset(t.set("hour", e)), this.setMinutes = (t, e) => this.adjustOffset(t.set("minute", e)), this.setSeconds = (t, e) => this.adjustOffset(t.set("second", e)), this.setMilliseconds = (t, e) => this.adjustOffset(t.set("millisecond", e)), this.getDaysInMonth = (t) => t.daysInMonth(), this.getWeekArray = (t) => {
      const e = this.startOfWeek(this.startOfMonth(t)), r = this.endOfWeek(this.endOfMonth(t));
      let o = 0, u = e;
      const s = [];
      for (; u < r; ) {
        const l = Math.floor(o / 7);
        s[l] = s[l] || [], s[l].push(u), u = this.addDays(u, 1), o += 1;
      }
      return s;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = ([t, e]) => {
      const r = this.startOfYear(t), o = this.endOfYear(e), u = [];
      let s = r;
      for (; this.isBefore(s, o); )
        u.push(s), s = this.addYears(s, 1);
      return u;
    }, this.dayjs = Ae(j, i), this.locale = i, this.formats = lt({}, ze, n), j.extend(Me);
  }
  getDayOfWeek(i) {
    return i.day() + 1;
  }
}
const Be = ({
  name: a,
  required: i,
  minDate: n,
  maxDate: t,
  validateOptions: e,
  ...r
}) => {
  const o = a.split(".");
  function u(c) {
    return c.locale("en-gb").format("L");
  }
  let s = te();
  i && (s = s.required()), n && (s = s.min(
    n,
    `this field must be after or equal to ${u(n)}`
  )), t && (s = s.max(
    t,
    `this field must be before or equal to ${u(t)}`
  ));
  const l = {
    name: a,
    type: "date",
    validate: V(s, e)
  };
  return /* @__PURE__ */ d.jsx(U, { ...l, children: ({ form: c }) => {
    const g = D(c.errors, o), y = D(c.touched, o);
    let x = D(
      c.values,
      o
    );
    x = x ? j(x) : null;
    function Y(T) {
      c.setFieldValue(
        a,
        T && T.isValid() ? T.format("YYYY-MM-DD") : null,
        !0
      );
    }
    return /* @__PURE__ */ d.jsx(
      re,
      {
        dateAdapter: Ee,
        adapterLocale: "en-gb",
        children: /* @__PURE__ */ d.jsx(
          se,
          {
            name: a,
            value: x,
            minDate: n,
            maxDate: t,
            onChange: Y,
            slotProps: {
              textField: {
                id: a,
                onChange: (T) => {
                  Y(T);
                },
                onBlur: c.handleBlur,
                required: i,
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
  id: a,
  name: i,
  schema: n,
  type: t = "text",
  required: e = !1,
  dirty: r = !1,
  unique: o = !1,
  uniqueCaseInsensitive: u = !1,
  split: s,
  validateOptions: l,
  ...c
}) => {
  const [g, y] = _(""), x = i.split(".");
  function Y() {
    let h = n;
    if (h = e ? h.required() : h.optional(), r && !s && (h = h.notOneOf(
      [g],
      "cannot be initial value"
    )), !s) return h;
    let m = ee().of(h);
    return m = e ? m.required().min(1) : m.optional(), (o || u) && (m = m.test({
      message: "cannot have duplicates",
      test: (p) => Array.isArray(p) && p.length >= 2 && p.every((M) => typeof M == "string") ? new Set(
        u ? p.map((M) => M.toLowerCase()) : p
      ).size === p.length : !0
    })), r && (m = m.notOneOf(
      [g],
      "cannot be initial value"
    )), m;
  }
  const T = {
    name: i,
    type: t,
    validate: V(Y(), l)
  }, f = ({ form: h }) => {
    const m = D(
      h.initialValues,
      x
    ), p = D(
      h.values,
      x
    ), M = D(h.errors, x), O = D(h.touched, x);
    return I(() => {
      y(m);
    }, [m]), I(() => {
      h.setFieldValue(
        i,
        s && typeof p == "string" ? p.split(s) : p,
        !0
      );
    }, [p]), /* @__PURE__ */ d.jsx(
      ft,
      {
        id: a ?? i,
        name: i,
        type: t,
        required: e,
        value: p,
        onChange: h.handleChange,
        onBlur: h.handleBlur,
        error: O && !!M,
        helperText: O && M,
        ...c
      }
    );
  };
  return /* @__PURE__ */ d.jsx(U, { ...T, children: f });
}, $e = ({
  name: a = "email",
  label: i = "Email address",
  placeholder: n = "Enter your email address",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    type: "email",
    schema: N().email(),
    name: a,
    label: i,
    placeholder: n,
    InputProps: {
      endAdornment: /* @__PURE__ */ d.jsx(mt, { position: "end", children: /* @__PURE__ */ d.jsx(ne, {}) }),
      ...t
    },
    ...e
  }
), Ue = ({
  name: a = "first_name",
  label: i = "First name",
  placeholder: n = "Enter your first name",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    schema: ue.first_name,
    name: a,
    label: i,
    placeholder: n,
    InputProps: {
      endAdornment: /* @__PURE__ */ d.jsx(mt, { position: "end", children: /* @__PURE__ */ d.jsx(ie, {}) }),
      ...t
    },
    ...e
  }
), bt = {
  behavior: "smooth",
  block: "start"
}, _e = ({
  scrollIntoViewOptions: a = bt,
  ...i
}) => {
  const n = Vt(null);
  return I(() => {
    n.current && n.current.scrollIntoView(a);
  }, [a]), /* @__PURE__ */ d.jsx(wt, { ref: n, error: !0, ...i });
}, Lt = ({
  children: a,
  scrollIntoViewOptions: i = bt,
  nonFieldErrorsProps: n,
  fieldRefs: t = [],
  ...e
}) => /* @__PURE__ */ d.jsx(Xt, { ...e, children: (r) => {
  const o = !!Object.keys(r.errors).length, u = o && typeof r.errors.__all__ == "string";
  if (o && !u && r.isSubmitting && t.length) {
    const s = qt(r.errors), l = t.find(({ name: c }) => s.includes(c))?.inputRef.current;
    l && l.scrollIntoView(i);
  }
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    u && /* @__PURE__ */ d.jsx(_e, { ...n, children: r.errors.__all__ }),
    /* @__PURE__ */ d.jsx(Qt, { children: typeof a == "function" ? a(r) : a })
  ] });
} }), Ie = ({
  useMutation: a,
  submitOptions: i,
  ...n
}) => {
  const [t] = a();
  return /* @__PURE__ */ d.jsx(
    Lt,
    {
      ...n,
      onSubmit: Zt(
        t,
        n.initialValues,
        i
      )
    }
  );
}, Ve = (a) => "onSubmit" in a ? /* @__PURE__ */ d.jsx(Lt, { ...a }) : Ie(a), He = ({
  name: a = "otp",
  label: i = "OTP",
  placeholder: n = "Enter your OTP",
  ...t
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    name: a,
    label: i,
    schema: N().matches(/^[0-9]{6}$/, "Must be exactly 6 digits."),
    placeholder: n,
    required: !0,
    ...t
  }
), Ne = ({
  id: a,
  repeatName: i,
  setValue: n,
  fieldProps: t,
  name: e,
  label: r,
  placeholder: o,
  type: u,
  ...s
}) => {
  const { form: l } = t, c = e.split("."), g = D(l.values, c), y = i.split("."), x = D(
    l.values,
    y
  ), Y = D(
    l.touched,
    y
  ), T = D(l.errors, y);
  return I(() => {
    n(g);
  }, [n, g]), /* @__PURE__ */ d.jsx(
    ft,
    {
      required: !0,
      type: u,
      label: r ?? `Repeat ${e.replace("_", " ")}`,
      placeholder: o ?? `Enter your ${e.replace("_", " ")} again`,
      id: a ?? i,
      name: i,
      value: x,
      onChange: l.handleChange,
      onBlur: l.handleBlur,
      error: Y && !!T,
      helperText: Y && T,
      ...s
    }
  );
}, Ct = ({
  name: a,
  type: i = "text",
  validateOptions: n,
  ...t
}) => {
  const [e, r] = _(""), o = `${a}_repeat`, u = {
    name: o,
    type: i,
    validate: V(
      N().required().equals([e], "does not match"),
      n
    )
  };
  return /* @__PURE__ */ d.jsx(U, { ...u, children: (s) => /* @__PURE__ */ d.jsx(
    Ne,
    {
      name: a,
      type: i,
      repeatName: o,
      setValue: r,
      fieldProps: s,
      ...t
    }
  ) });
}, We = ({
  name: a = "password",
  label: i = "Password",
  placeholder: n = "Enter your password",
  schema: t = N(),
  InputProps: e = {},
  withRepeatField: r = !1,
  repeatFieldProps: o = {},
  ...u
}) => {
  const [s, l] = _(!1), c = s ? "text" : "password", g = /* @__PURE__ */ d.jsx(mt, { position: "end", children: /* @__PURE__ */ d.jsx(
    Ut,
    {
      onClick: () => {
        l((y) => !y);
      },
      edge: "end",
      children: s ? /* @__PURE__ */ d.jsx(oe, {}) : /* @__PURE__ */ d.jsx(ae, {})
    }
  ) });
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      W,
      {
        autoComplete: "off",
        type: c,
        name: a,
        label: i,
        schema: t,
        placeholder: n,
        InputProps: { endAdornment: g, ...e },
        ...u
      }
    ),
    r && /* @__PURE__ */ d.jsx(
      Ct,
      {
        name: a,
        type: c,
        ...o,
        InputProps: { endAdornment: g, ...o.InputProps }
      }
    )
  ] });
}, qe = ({
  children: a = "Submit",
  ...i
}) => {
  function n(t, e) {
    e = e || {};
    for (const r in t) {
      const o = t[r];
      e[r] = o instanceof Object && o.constructor === Object ? n(o, e) : !0;
    }
    return e;
  }
  return /* @__PURE__ */ d.jsx(U, { name: "submit", type: "submit", children: ({ form: t }) => /* @__PURE__ */ d.jsx(
    Dt,
    {
      type: "button",
      onClick: () => {
        t.setTouched(n(t.values), !0).then((e) => {
          const r = !!(e && Object.keys(e).length);
          t.setSubmitting(r), r || t.submitForm();
        });
      },
      ...i,
      children: a
    }
  ) });
}, Re = ({
  textFieldProps: a,
  ...i
}) => {
  const {
    name: n = "uk_county",
    label: t = "UK county",
    placeholder: e = "Select your UK county",
    ...r
  } = a || {};
  return /* @__PURE__ */ d.jsx(
    rt,
    {
      options: Rt,
      textFieldProps: { name: n, label: t, placeholder: e, ...r },
      ...i
    }
  );
}, ur = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ApiAutocompleteField: ce,
  AutocompleteField: rt,
  CheckboxField: he,
  CountryField: de,
  DatePickerField: Be,
  EmailField: $e,
  FirstNameField: Ue,
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
  $e as E,
  Ue as F,
  He as O,
  We as P,
  Ct as R,
  qe as S,
  W as T,
  Re as U,
  rt as a,
  de as b,
  Ve as c,
  ur as i
};
//# sourceMappingURL=index-D_oplkeZ.js.map
