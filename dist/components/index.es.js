import { v as Bt, j as r, R as Jt, T as H, U as w, V as te, W as ee, f as W, X as re, Y as se, Z as ne, _ as oe, d as $t, x as ie, F as ae, e as ce, s as le, p as jt, I as ue, $ as de, G as he, a0 as fe, a1 as me } from "../Countdown-CrHWwDog.js";
import { C as Es } from "../Countdown-CrHWwDog.js";
import { CircularProgress as pe, Button as q, Autocomplete as xe, TextField as Mt, FormControl as ge, FormControlLabel as ye, Checkbox as je, FormHelperText as zt, InputAdornment as bt, IconButton as G, Box as Et, Container as At, Stack as V, Typography as at, Link as Ut, ListItem as Te, Tab as Vt, Tabs as Me, TableContainer as be, Table as Oe, TableHead as we, TableRow as Rt, TableCell as ct, TableBody as Ye, ThemeProvider as Le, CssBaseline as ve, Tooltip as Ce, useScrollTrigger as De, AppBar as ke, Toolbar as Fe, List as Se, Unstable_Grid2 as Yt, TablePagination as Pe } from "@mui/material";
import Lt, { useState as A, useEffect as C, forwardRef as _e, Children as Nt, useRef as Be, isValidElement as $e, cloneElement as ze } from "react";
import { Field as R, Formik as Ee, Form as Ae } from "formik";
import { string as N, number as Ue, bool as Ve, date as Re, array as Ne, object as Ie } from "yup";
import { LocalizationProvider as He, DatePicker as We } from "@mui/x-date-pickers";
import O from "dayjs";
import { EmailOutlined as qe, PersonOutlined as Ge, Visibility as Ze, VisibilityOff as Xe, ErrorOutline as Qe, InfoOutlined as Ke, CloseOutlined as Je, ChevronLeft as tr, ChevronRight as er, ContentCopy as rr, Download as sr } from "@mui/icons-material";
import "@reduxjs/toolkit/query/react";
import "js-cookie";
import { useLocation as nr, Link as Z, useParams as or, useNavigate as ir, generatePath as ar, BrowserRouter as cr, Routes as lr } from "react-router-dom";
import { Provider as ur } from "react-redux";
import "@mui/material/styles/ThemeProvider";
const dr = ({
  useLazyListQuery: s,
  filterOptions: o,
  getOptionLabel: n,
  getOptionKey: t = (l) => l.id,
  searchKey: e,
  ...i
}) => {
  const [l, c] = A(""), [a, { isLoading: d, isError: u }] = s(), [{ limit: h, offset: g }, y] = Bt(), [{ options: b, hasMore: T }, m] = A({ options: {}, hasMore: !0 });
  C(
    () => {
      const j = { limit: h, offset: g, ...o };
      l && (j[e] = l), a(j, !0).unwrap().then(({ data: M, offset: D, limit: L, count: Y }) => {
        m(({ options: k }) => {
          const P = { ...k };
          return M.forEach((F) => {
            P[t(F)] = F;
          }), { options: P, hasMore: D + L < Y };
        });
      }).catch((M) => {
        M && console.error(M);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      a,
      h,
      g,
      e,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...Object.values(o || {})
    ]
  );
  let f = Object.keys(b);
  if (!f.length) return /* @__PURE__ */ r.jsx(r.Fragment, {});
  typeof t(Object.values(b)[0]) == "number" && (f = f.map(Number));
  function x() {
    y(({ page: j, limit: M }) => ({ page: j + 1, limit: M }));
  }
  const p = ({ children: j, ...M }, D) => {
    const L = Nt.toArray(j);
    return d ? L.push(/* @__PURE__ */ r.jsx(pe, {}, "is-loading")) : (u && L.push(/* @__PURE__ */ r.jsx(Jt, {}, "is-error")), T && L.push(
      /* @__PURE__ */ r.jsx(q, { onClick: x, children: "Load more" }, "load-more")
    )), /* @__PURE__ */ r.jsx(
      "ul",
      {
        ...M,
        ref: D,
        onScroll: (Y) => {
          !d && Y.currentTarget.clientHeight + Y.currentTarget.scrollTop >= Y.currentTarget.scrollHeight && x();
        },
        children: L
      }
    );
  };
  return /* @__PURE__ */ r.jsx(
    lt,
    {
      options: f,
      getOptionLabel: (j) => n(b[j]),
      onInputChange: (j, M, D) => {
        c(D === "input" ? M : "");
      },
      ListboxComponent: _e(p),
      ...i
    }
  );
}, lt = ({
  textFieldProps: s,
  options: o,
  validateOptions: n,
  ...t
}) => {
  const { id: e, name: i, required: l, ...c } = s, a = i.split("."), d = "not a valid option";
  let u = typeof o[0] == "string" ? N().oneOf(o, d) : Ue().oneOf(o, d);
  l && (u = u.required());
  const h = {
    name: i,
    type: typeof o[0] == "string" ? "text" : "number",
    validate: H(u, n)
  };
  return /* @__PURE__ */ r.jsx(R, { ...h, children: ({ form: g, meta: y }) => {
    const b = w(
      g.values,
      a
    ), T = w(g.touched, a), m = w(g.errors, a);
    return /* @__PURE__ */ r.jsx(
      xe,
      {
        options: o,
        defaultValue: y.initialValue === "" ? void 0 : y.initialValue,
        renderInput: ({
          id: f,
          // eslint-disable-line @typescript-eslint/no-unused-vars
          ...x
        }) => /* @__PURE__ */ r.jsx(
          Mt,
          {
            id: e ?? i,
            name: i,
            required: l,
            type: "text",
            value: b,
            error: T && !!m,
            helperText: T && m,
            ...c,
            ...x
          }
        ),
        onChange: (f, x) => {
          g.setFieldValue(i, x ?? void 0, !0);
        },
        onBlur: g.handleBlur,
        ...t
      }
    );
  } });
}, hr = ({
  id: s,
  name: o,
  formControlLabelProps: n,
  required: t = !1,
  errorMessage: e = "this is a required field",
  validateOptions: i,
  ...l
}) => {
  const c = o.split(".");
  let a = Ve();
  t && (a = a.oneOf([!0], e));
  const d = {
    name: o,
    type: "checkbox",
    validate: H(a, i)
  };
  return /* @__PURE__ */ r.jsx(R, { ...d, children: ({ form: u, meta: h }) => {
    const g = w(u.touched, c), y = w(u.errors, c), b = w(
      u.values,
      c
    ), T = g && !!y;
    return /* @__PURE__ */ r.jsxs(ge, { error: T, required: t, children: [
      /* @__PURE__ */ r.jsx(
        ye,
        {
          control: /* @__PURE__ */ r.jsx(
            je,
            {
              defaultChecked: h.initialValue,
              id: s ?? o,
              name: o,
              value: b,
              onChange: u.handleChange,
              onBlur: u.handleBlur,
              ...l
            }
          ),
          ...n
        }
      ),
      T && /* @__PURE__ */ r.jsx(zt, { children: y })
    ] });
  } });
}, fr = ({
  textFieldProps: s,
  ...o
}) => {
  const {
    name: n = "country",
    label: t = "Country",
    placeholder: e = "Select your country",
    ...i
  } = s || {};
  return /* @__PURE__ */ r.jsx(
    lt,
    {
      options: ee,
      getOptionLabel: (l) => te[l],
      textFieldProps: { name: n, label: t, placeholder: e, ...i },
      ...o
    }
  );
};
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(s) {
    for (var o = 1; o < arguments.length; o++) {
      var n = arguments[o];
      for (var t in n) ({}).hasOwnProperty.call(n, t) && (s[t] = n[t]);
    }
    return s;
  }, Tt.apply(null, arguments);
}
var rt = { exports: {} }, mr = rt.exports, vt;
function pr() {
  return vt || (vt = 1, (function(s, o) {
    (function(n, t) {
      s.exports = t();
    })(mr, (function() {
      var n = "week", t = "year";
      return function(e, i, l) {
        var c = i.prototype;
        c.week = function(a) {
          if (a === void 0 && (a = null), a !== null) return this.add(7 * (a - this.week()), "day");
          var d = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var u = l(this).startOf(t).add(1, t).date(d), h = l(this).endOf(n);
            if (u.isBefore(h)) return 1;
          }
          var g = l(this).startOf(t).date(d).startOf(n).subtract(1, "millisecond"), y = this.diff(g, n, !0);
          return y < 0 ? l(this).startOf("week").week() : Math.ceil(y);
        }, c.weeks = function(a) {
          return a === void 0 && (a = null), this.week(a);
        };
      };
    }));
  })(rt)), rt.exports;
}
var xr = pr();
const gr = /* @__PURE__ */ W(xr);
var st = { exports: {} }, yr = st.exports, Ct;
function jr() {
  return Ct || (Ct = 1, (function(s, o) {
    (function(n, t) {
      s.exports = t();
    })(yr, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, e = /\d/, i = /\d\d/, l = /\d\d?/, c = /\d*[^-_:/,()\s\d]+/, a = {}, d = function(m) {
        return (m = +m) + (m > 68 ? 1900 : 2e3);
      }, u = function(m) {
        return function(f) {
          this[m] = +f;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(m) {
        (this.zone || (this.zone = {})).offset = (function(f) {
          if (!f || f === "Z") return 0;
          var x = f.match(/([+-]|\d\d)/g), p = 60 * x[1] + (+x[2] || 0);
          return p === 0 ? 0 : x[0] === "+" ? -p : p;
        })(m);
      }], g = function(m) {
        var f = a[m];
        return f && (f.indexOf ? f : f.s.concat(f.f));
      }, y = function(m, f) {
        var x, p = a.meridiem;
        if (p) {
          for (var j = 1; j <= 24; j += 1) if (m.indexOf(p(j, 0, f)) > -1) {
            x = j > 12;
            break;
          }
        } else x = m === (f ? "pm" : "PM");
        return x;
      }, b = { A: [c, function(m) {
        this.afternoon = y(m, !1);
      }], a: [c, function(m) {
        this.afternoon = y(m, !0);
      }], Q: [e, function(m) {
        this.month = 3 * (m - 1) + 1;
      }], S: [e, function(m) {
        this.milliseconds = 100 * +m;
      }], SS: [i, function(m) {
        this.milliseconds = 10 * +m;
      }], SSS: [/\d{3}/, function(m) {
        this.milliseconds = +m;
      }], s: [l, u("seconds")], ss: [l, u("seconds")], m: [l, u("minutes")], mm: [l, u("minutes")], H: [l, u("hours")], h: [l, u("hours")], HH: [l, u("hours")], hh: [l, u("hours")], D: [l, u("day")], DD: [i, u("day")], Do: [c, function(m) {
        var f = a.ordinal, x = m.match(/\d+/);
        if (this.day = x[0], f) for (var p = 1; p <= 31; p += 1) f(p).replace(/\[|\]/g, "") === m && (this.day = p);
      }], w: [l, u("week")], ww: [i, u("week")], M: [l, u("month")], MM: [i, u("month")], MMM: [c, function(m) {
        var f = g("months"), x = (g("monthsShort") || f.map((function(p) {
          return p.slice(0, 3);
        }))).indexOf(m) + 1;
        if (x < 1) throw new Error();
        this.month = x % 12 || x;
      }], MMMM: [c, function(m) {
        var f = g("months").indexOf(m) + 1;
        if (f < 1) throw new Error();
        this.month = f % 12 || f;
      }], Y: [/[+-]?\d+/, u("year")], YY: [i, function(m) {
        this.year = d(m);
      }], YYYY: [/\d{4}/, u("year")], Z: h, ZZ: h };
      function T(m) {
        var f, x;
        f = m, x = a && a.formats;
        for (var p = (m = f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(P, F, _) {
          var S = _ && _.toUpperCase();
          return F || x[_] || n[_] || x[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(B, $, z) {
            return $ || z.slice(1);
          }));
        }))).match(t), j = p.length, M = 0; M < j; M += 1) {
          var D = p[M], L = b[D], Y = L && L[0], k = L && L[1];
          p[M] = k ? { regex: Y, parser: k } : D.replace(/^\[|\]$/g, "");
        }
        return function(P) {
          for (var F = {}, _ = 0, S = 0; _ < j; _ += 1) {
            var B = p[_];
            if (typeof B == "string") S += B.length;
            else {
              var $ = B.regex, z = B.parser, Q = P.slice(S), U = $.exec(Q)[0];
              z.call(F, U), P = P.replace(U, "");
            }
          }
          return (function(E) {
            var K = E.afternoon;
            if (K !== void 0) {
              var v = E.hours;
              K ? v < 12 && (E.hours += 12) : v === 12 && (E.hours = 0), delete E.afternoon;
            }
          })(F), F;
        };
      }
      return function(m, f, x) {
        x.p.customParseFormat = !0, m && m.parseTwoDigitYear && (d = m.parseTwoDigitYear);
        var p = f.prototype, j = p.parse;
        p.parse = function(M) {
          var D = M.date, L = M.utc, Y = M.args;
          this.$u = L;
          var k = Y[1];
          if (typeof k == "string") {
            var P = Y[2] === !0, F = Y[3] === !0, _ = P || F, S = Y[2];
            F && (S = Y[2]), a = this.$locale(), !P && S && (a = x.Ls[S]), this.$d = (function(Q, U, E, K) {
              try {
                if (["x", "X"].indexOf(U) > -1) return new Date((U === "X" ? 1e3 : 1) * Q);
                var v = T(U)(Q), ut = v.year, J = v.month, Gt = v.day, Zt = v.hours, Xt = v.minutes, Qt = v.seconds, Kt = v.milliseconds, Ot = v.zone, wt = v.week, dt = /* @__PURE__ */ new Date(), ht = Gt || (ut || J ? 1 : dt.getDate()), ft = ut || dt.getFullYear(), tt = 0;
                ut && !J || (tt = J > 0 ? J - 1 : dt.getMonth());
                var et, mt = Zt || 0, pt = Xt || 0, xt = Qt || 0, gt = Kt || 0;
                return Ot ? new Date(Date.UTC(ft, tt, ht, mt, pt, xt, gt + 60 * Ot.offset * 1e3)) : E ? new Date(Date.UTC(ft, tt, ht, mt, pt, xt, gt)) : (et = new Date(ft, tt, ht, mt, pt, xt, gt), wt && (et = K(et).week(wt).toDate()), et);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(D, k, L, x), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), _ && D != this.format(k) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
          } else if (k instanceof Array) for (var B = k.length, $ = 1; $ <= B; $ += 1) {
            Y[1] = k[$ - 1];
            var z = x.apply(this, Y);
            if (z.isValid()) {
              this.$d = z.$d, this.$L = z.$L, this.init();
              break;
            }
            $ === B && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else j.call(this, M);
        };
      };
    }));
  })(st)), st.exports;
}
var Tr = jr();
const Mr = /* @__PURE__ */ W(Tr);
var nt = { exports: {} }, br = nt.exports, Dt;
function Or() {
  return Dt || (Dt = 1, (function(s, o) {
    (function(n, t) {
      s.exports = t();
    })(br, (function() {
      var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, e, i) {
        var l = e.prototype, c = l.format;
        i.en.formats = n, l.format = function(a) {
          a === void 0 && (a = "YYYY-MM-DDTHH:mm:ssZ");
          var d = this.$locale().formats, u = (function(h, g) {
            return h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(y, b, T) {
              var m = T && T.toUpperCase();
              return b || g[T] || n[T] || g[m].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(f, x, p) {
                return x || p.slice(1);
              }));
            }));
          })(a, d === void 0 ? {} : d);
          return c.call(this, u);
        };
      };
    }));
  })(nt)), nt.exports;
}
var wr = Or();
const Yr = /* @__PURE__ */ W(wr);
var ot = { exports: {} }, Lr = ot.exports, kt;
function vr() {
  return kt || (kt = 1, (function(s, o) {
    (function(n, t) {
      s.exports = t();
    })(Lr, (function() {
      return function(n, t, e) {
        t.prototype.isBetween = function(i, l, c, a) {
          var d = e(i), u = e(l), h = (a = a || "()")[0] === "(", g = a[1] === ")";
          return (h ? this.isAfter(d, c) : !this.isBefore(d, c)) && (g ? this.isBefore(u, c) : !this.isAfter(u, c)) || (h ? this.isBefore(d, c) : !this.isAfter(d, c)) && (g ? this.isAfter(u, c) : !this.isBefore(u, c));
        };
      };
    }));
  })(ot)), ot.exports;
}
var Cr = vr();
const Dr = /* @__PURE__ */ W(Cr);
var it = { exports: {} }, kr = it.exports, Ft;
function Fr() {
  return Ft || (Ft = 1, (function(s, o) {
    (function(n, t) {
      s.exports = t();
    })(kr, (function() {
      return function(n, t) {
        var e = t.prototype, i = e.format;
        e.format = function(l) {
          var c = this, a = this.$locale();
          if (!this.isValid()) return i.bind(this)(l);
          var d = this.$utils(), u = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(h) {
            switch (h) {
              case "Q":
                return Math.ceil((c.$M + 1) / 3);
              case "Do":
                return a.ordinal(c.$D);
              case "gggg":
                return c.weekYear();
              case "GGGG":
                return c.isoWeekYear();
              case "wo":
                return a.ordinal(c.week(), "W");
              case "w":
              case "ww":
                return d.s(c.week(), h === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return d.s(c.isoWeek(), h === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return d.s(String(c.$H === 0 ? 24 : c.$H), h === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(c.$d.getTime() / 1e3);
              case "x":
                return c.$d.getTime();
              case "z":
                return "[" + c.offsetName() + "]";
              case "zzz":
                return "[" + c.offsetName("long") + "]";
              default:
                return h;
            }
          }));
          return i.bind(this)(u);
        };
      };
    }));
  })(it)), it.exports;
}
var Sr = Fr();
const Pr = /* @__PURE__ */ W(Sr), St = /* @__PURE__ */ new Set();
function _r(s, o = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const n = Array.isArray(s) ? s.join(`
`) : s;
  St.has(n) || (St.add(n), o === "error" ? console.error(n) : console.warn(n));
}
O.extend(Yr);
O.extend(gr);
O.extend(Dr);
O.extend(Pr);
const Br = {
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
}, $r = {
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
}, yt = ["Missing UTC plugin", "To be able to use UTC or timezones, you have to enable the `utc` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"].join(`
`), Pt = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), zr = (s, o) => o ? (...n) => s(...n).locale(o) : s;
class Er {
  constructor({
    locale: o,
    formats: n
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = Br, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof O.utc < "u", this.hasTimezonePlugin = () => typeof O.tz < "u", this.isSame = (t, e, i) => {
      const l = this.setTimezone(e, this.getTimezone(t));
      return t.format(i) === l.format(i);
    }, this.cleanTimezone = (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return O.tz.guess();
        default:
          return t;
      }
    }, this.createSystemDate = (t) => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const e = O.tz.guess();
        return e !== "UTC" ? O.tz(t, e) : O(t);
      }
      return O(t);
    }, this.createUTCDate = (t) => {
      if (!this.hasUTCPlugin())
        throw new Error(yt);
      return O.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(yt);
      if (!this.hasTimezonePlugin())
        throw new Error(Pt);
      const i = t !== void 0 && !t.endsWith("Z");
      return O(t).tz(this.cleanTimezone(e), i);
    }, this.getLocaleFormats = () => {
      const t = O.Ls, e = this.locale || "en";
      let i = t[e];
      return i === void 0 && (process.env.NODE_ENV !== "production" && _r(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), i = t.en), i.formats;
    }, this.adjustOffset = (t) => {
      if (!this.hasTimezonePlugin())
        return t;
      const e = this.getTimezone(t);
      if (e !== "UTC") {
        const i = t.tz(this.cleanTimezone(e), !0);
        if (i.$offset === (t.$offset ?? 0))
          return t;
        t.$offset = i.$offset;
      }
      return t;
    }, this.date = (t, e = "default") => {
      if (t === null)
        return null;
      let i;
      return e === "UTC" ? i = this.createUTCDate(t) : e === "system" || e === "default" && !this.hasTimezonePlugin() ? i = this.createSystemDate(t) : i = this.createTZDate(t, e), this.locale === void 0 ? i : i.locale(this.locale);
    }, this.getInvalidDate = () => O(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (t) => {
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
          throw new Error(yt);
        return t.utc();
      }
      if (e === "system")
        return t.local();
      if (!this.hasTimezonePlugin()) {
        if (e === "default")
          return t;
        throw new Error(Pt);
      }
      return O.tz(t, this.cleanTimezone(e));
    }, this.toJsDate = (t) => t.toDate(), this.parse = (t, e) => t === "" ? null : this.dayjs(t, e, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (t) => {
      const e = this.getLocaleFormats(), i = (l) => l.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (c, a, d) => a || d.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (l, c, a) => {
        const d = a && a.toUpperCase();
        return c || e[a] || i(e[d]);
      });
    }, this.isValid = (t) => t == null ? !1 : t.isValid(), this.format = (t, e) => this.formatByString(t, this.formats[e]), this.formatByString = (t, e) => this.dayjs(t).format(e), this.formatNumber = (t) => t, this.isEqual = (t, e) => t === null && e === null ? !0 : t === null || e === null ? !1 : t.toDate().getTime() === e.toDate().getTime(), this.isSameYear = (t, e) => this.isSame(t, e, "YYYY"), this.isSameMonth = (t, e) => this.isSame(t, e, "YYYY-MM"), this.isSameDay = (t, e) => this.isSame(t, e, "YYYY-MM-DD"), this.isSameHour = (t, e) => t.isSame(e, "hour"), this.isAfter = (t, e) => t > e, this.isAfterYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"), this.isAfterDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"), this.isBefore = (t, e) => t < e, this.isBeforeYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"), this.isBeforeDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"), this.isWithinRange = (t, [e, i]) => t >= e && t <= i, this.startOfYear = (t) => this.adjustOffset(t.startOf("year")), this.startOfMonth = (t) => this.adjustOffset(t.startOf("month")), this.startOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).startOf("week")), this.startOfDay = (t) => this.adjustOffset(t.startOf("day")), this.endOfYear = (t) => this.adjustOffset(t.endOf("year")), this.endOfMonth = (t) => this.adjustOffset(t.endOf("month")), this.endOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).endOf("week")), this.endOfDay = (t) => this.adjustOffset(t.endOf("day")), this.addYears = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "year") : t.add(e, "year")), this.addMonths = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "month") : t.add(e, "month")), this.addWeeks = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "week") : t.add(e, "week")), this.addDays = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "day") : t.add(e, "day")), this.addHours = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "hour") : t.add(e, "hour")), this.addMinutes = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "minute") : t.add(e, "minute")), this.addSeconds = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "second") : t.add(e, "second")), this.getYear = (t) => t.year(), this.getMonth = (t) => t.month(), this.getDate = (t) => t.date(), this.getHours = (t) => t.hour(), this.getMinutes = (t) => t.minute(), this.getSeconds = (t) => t.second(), this.getMilliseconds = (t) => t.millisecond(), this.setYear = (t, e) => this.adjustOffset(t.set("year", e)), this.setMonth = (t, e) => this.adjustOffset(t.set("month", e)), this.setDate = (t, e) => this.adjustOffset(t.set("date", e)), this.setHours = (t, e) => this.adjustOffset(t.set("hour", e)), this.setMinutes = (t, e) => this.adjustOffset(t.set("minute", e)), this.setSeconds = (t, e) => this.adjustOffset(t.set("second", e)), this.setMilliseconds = (t, e) => this.adjustOffset(t.set("millisecond", e)), this.getDaysInMonth = (t) => t.daysInMonth(), this.getWeekArray = (t) => {
      const e = this.startOfWeek(this.startOfMonth(t)), i = this.endOfWeek(this.endOfMonth(t));
      let l = 0, c = e;
      const a = [];
      for (; c < i; ) {
        const d = Math.floor(l / 7);
        a[d] = a[d] || [], a[d].push(c), c = this.addDays(c, 1), l += 1;
      }
      return a;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = ([t, e]) => {
      const i = this.startOfYear(t), l = this.endOfYear(e), c = [];
      let a = i;
      for (; this.isBefore(a, l); )
        c.push(a), a = this.addYears(a, 1);
      return c;
    }, this.dayjs = zr(O, o), this.locale = o, this.formats = Tt({}, $r, n), O.extend(Mr);
  }
  getDayOfWeek(o) {
    return o.day() + 1;
  }
}
const Ar = ({
  name: s,
  required: o,
  minDate: n,
  maxDate: t,
  validateOptions: e,
  ...i
}) => {
  const l = s.split(".");
  function c(u) {
    return u.locale("en-gb").format("L");
  }
  let a = Re();
  o && (a = a.required()), n && (a = a.min(
    n,
    `this field must be after or equal to ${c(n)}`
  )), t && (a = a.max(
    t,
    `this field must be before or equal to ${c(t)}`
  ));
  const d = {
    name: s,
    type: "date",
    validate: H(a, e)
  };
  return /* @__PURE__ */ r.jsx(R, { ...d, children: ({ form: u }) => {
    const h = w(u.errors, l), g = w(u.touched, l);
    let y = w(
      u.values,
      l
    );
    y = y ? O(y) : null;
    function b(T) {
      u.setFieldValue(
        s,
        T && T.isValid() ? T.format("YYYY-MM-DD") : null,
        !0
      );
    }
    return /* @__PURE__ */ r.jsx(
      He,
      {
        dateAdapter: Er,
        adapterLocale: "en-gb",
        children: /* @__PURE__ */ r.jsx(
          We,
          {
            name: s,
            value: y,
            minDate: n,
            maxDate: t,
            onChange: b,
            slotProps: {
              textField: {
                id: s,
                onChange: (T) => {
                  b(T);
                },
                onBlur: u.handleBlur,
                required: o,
                error: g && !!h,
                helperText: g && h
              }
            },
            ...i
          }
        )
      }
    );
  } });
}, X = ({
  id: s,
  name: o,
  schema: n,
  type: t = "text",
  required: e = !1,
  dirty: i = !1,
  unique: l = !1,
  uniqueCaseInsensitive: c = !1,
  split: a,
  validateOptions: d,
  ...u
}) => {
  const [h, g] = A(""), y = o.split(".");
  function b() {
    let f = n;
    if (f = e ? f.required() : f.optional(), i && !a && (f = f.notOneOf(
      [h],
      "cannot be initial value"
    )), !a) return f;
    let x = Ne().of(f);
    return x = e ? x.required().min(1) : x.optional(), (l || c) && (x = x.test({
      message: "cannot have duplicates",
      test: (p) => Array.isArray(p) && p.length >= 2 && p.every((j) => typeof j == "string") ? new Set(
        c ? p.map((j) => j.toLowerCase()) : p
      ).size === p.length : !0
    })), i && (x = x.notOneOf(
      [h],
      "cannot be initial value"
    )), x;
  }
  const T = {
    name: o,
    type: t,
    validate: H(b(), d)
  }, m = ({ form: f }) => {
    const x = w(
      f.initialValues,
      y
    ), p = w(
      f.values,
      y
    ), j = w(f.errors, y), M = w(f.touched, y);
    return C(() => {
      g(x);
    }, [x]), C(() => {
      f.setFieldValue(
        o,
        a && typeof p == "string" ? p.split(a) : p,
        !0
      );
    }, [p]), /* @__PURE__ */ r.jsx(
      Mt,
      {
        id: s ?? o,
        name: o,
        type: t,
        required: e,
        value: p,
        onChange: f.handleChange,
        onBlur: f.handleBlur,
        error: M && !!j,
        helperText: M && j,
        ...u
      }
    );
  };
  return /* @__PURE__ */ r.jsx(R, { ...T, children: m });
}, Ur = ({
  name: s = "email",
  label: o = "Email address",
  placeholder: n = "Enter your email address",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ r.jsx(
  X,
  {
    type: "email",
    schema: N().email(),
    name: s,
    label: o,
    placeholder: n,
    InputProps: {
      endAdornment: /* @__PURE__ */ r.jsx(bt, { position: "end", children: /* @__PURE__ */ r.jsx(qe, {}) }),
      ...t
    },
    ...e
  }
), Vr = ({
  name: s = "first_name",
  label: o = "First name",
  placeholder: n = "Enter your first name",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ r.jsx(
  X,
  {
    schema: re.first_name,
    name: s,
    label: o,
    placeholder: n,
    InputProps: {
      endAdornment: /* @__PURE__ */ r.jsx(bt, { position: "end", children: /* @__PURE__ */ r.jsx(Ge, {}) }),
      ...t
    },
    ...e
  }
), It = {
  behavior: "smooth",
  block: "start"
}, Rr = ({
  scrollIntoViewOptions: s = It,
  ...o
}) => {
  const n = Be(null);
  return C(() => {
    n.current && n.current.scrollIntoView(s);
  }, [s]), /* @__PURE__ */ r.jsx(zt, { ref: n, error: !0, ...o });
}, Ht = ({
  children: s,
  scrollIntoViewOptions: o = It,
  nonFieldErrorsProps: n,
  fieldRefs: t = [],
  ...e
}) => /* @__PURE__ */ r.jsx(Ee, { ...e, children: (i) => {
  const l = !!Object.keys(i.errors).length, c = l && typeof i.errors.__all__ == "string";
  if (l && !c && i.isSubmitting && t.length) {
    const a = ne(i.errors), d = t.find(({ name: u }) => a.includes(u))?.inputRef.current;
    d && d.scrollIntoView(o);
  }
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    c && /* @__PURE__ */ r.jsx(Rr, { ...n, children: i.errors.__all__ }),
    /* @__PURE__ */ r.jsx(Ae, { children: typeof s == "function" ? s(i) : s })
  ] });
} }), Nr = ({
  useMutation: s,
  submitOptions: o,
  ...n
}) => {
  const [t] = s();
  return /* @__PURE__ */ r.jsx(
    Ht,
    {
      ...n,
      onSubmit: se(
        t,
        n.initialValues,
        o
      )
    }
  );
}, Ir = (s) => "onSubmit" in s ? /* @__PURE__ */ r.jsx(Ht, { ...s }) : Nr(s), Hr = ({
  name: s = "otp",
  label: o = "OTP",
  placeholder: n = "Enter your OTP",
  ...t
}) => /* @__PURE__ */ r.jsx(
  X,
  {
    name: s,
    label: o,
    schema: N().matches(/^[0-9]{6}$/, "Must be exactly 6 digits."),
    placeholder: n,
    required: !0,
    ...t
  }
), Wr = ({
  id: s,
  repeatName: o,
  setValue: n,
  fieldProps: t,
  name: e,
  label: i,
  placeholder: l,
  type: c,
  ...a
}) => {
  const { form: d } = t, u = e.split("."), h = w(d.values, u), g = o.split("."), y = w(
    d.values,
    g
  ), b = w(
    d.touched,
    g
  ), T = w(d.errors, g);
  return C(() => {
    n(h);
  }, [n, h]), /* @__PURE__ */ r.jsx(
    Mt,
    {
      required: !0,
      type: c,
      label: i ?? `Repeat ${e.replace("_", " ")}`,
      placeholder: l ?? `Enter your ${e.replace("_", " ")} again`,
      id: s ?? o,
      name: o,
      value: y,
      onChange: d.handleChange,
      onBlur: d.handleBlur,
      error: b && !!T,
      helperText: b && T,
      ...a
    }
  );
}, Wt = ({
  name: s,
  type: o = "text",
  validateOptions: n,
  ...t
}) => {
  const [e, i] = A(""), l = `${s}_repeat`, c = {
    name: l,
    type: o,
    validate: H(
      N().required().equals([e], "does not match"),
      n
    )
  };
  return /* @__PURE__ */ r.jsx(R, { ...c, children: (a) => /* @__PURE__ */ r.jsx(
    Wr,
    {
      name: s,
      type: o,
      repeatName: l,
      setValue: i,
      fieldProps: a,
      ...t
    }
  ) });
}, qr = ({
  name: s = "password",
  label: o = "Password",
  placeholder: n = "Enter your password",
  schema: t = N(),
  InputProps: e = {},
  withRepeatField: i = !1,
  repeatFieldProps: l = {},
  ...c
}) => {
  const [a, d] = A(!1), u = a ? "text" : "password", h = /* @__PURE__ */ r.jsx(bt, { position: "end", children: /* @__PURE__ */ r.jsx(
    G,
    {
      onClick: () => {
        d((g) => !g);
      },
      edge: "end",
      children: a ? /* @__PURE__ */ r.jsx(Ze, {}) : /* @__PURE__ */ r.jsx(Xe, {})
    }
  ) });
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      X,
      {
        autoComplete: "off",
        type: u,
        name: s,
        label: o,
        schema: t,
        placeholder: n,
        InputProps: { endAdornment: h, ...e },
        ...c
      }
    ),
    i && /* @__PURE__ */ r.jsx(
      Wt,
      {
        name: s,
        type: u,
        ...l,
        InputProps: { endAdornment: h, ...l.InputProps }
      }
    )
  ] });
}, Gr = ({
  children: s = "Submit",
  ...o
}) => {
  function n(t, e) {
    e = e || {};
    for (const i in t) {
      const l = t[i];
      e[i] = l instanceof Object && l.constructor === Object ? n(l, e) : !0;
    }
    return e;
  }
  return /* @__PURE__ */ r.jsx(R, { name: "submit", type: "submit", children: ({ form: t }) => /* @__PURE__ */ r.jsx(
    q,
    {
      type: "button",
      onClick: () => {
        t.setTouched(n(t.values), !0).then((e) => {
          const i = !!(e && Object.keys(e).length);
          t.setSubmitting(i), i || t.submitForm();
        });
      },
      ...o,
      children: s
    }
  ) });
}, Zr = ({
  textFieldProps: s,
  ...o
}) => {
  const {
    name: n = "uk_county",
    label: t = "UK county",
    placeholder: e = "Select your UK county",
    ...i
  } = s || {};
  return /* @__PURE__ */ r.jsx(
    lt,
    {
      options: oe,
      textFieldProps: { name: n, label: t, placeholder: e, ...i },
      ...o
    }
  );
}, gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ApiAutocompleteField: dr,
  AutocompleteField: lt,
  CheckboxField: hr,
  CountryField: fr,
  DatePickerField: Ar,
  EmailField: Ur,
  FirstNameField: Vr,
  Form: Ir,
  OtpField: Hr,
  PasswordField: qr,
  RepeatField: Wt,
  SubmitButton: Gr,
  TextField: X,
  UkCountyField: Zr
}, Symbol.toStringTag, { value: "Module" })), I = ({ boxProps: s, ...o }) => /* @__PURE__ */ r.jsx(Et, { ...s, children: /* @__PURE__ */ r.jsx(At, { ...o }) }), qt = ({
  open: s = !0,
  error: o = !1,
  onClose: n,
  children: t,
  bgcolor: e = "secondary"
}) => {
  const [i, l] = A(s);
  if (C(() => {
    l(s);
  }, [s]), !i) return /* @__PURE__ */ r.jsx(r.Fragment, {});
  const c = $t[e].contrastText;
  return /* @__PURE__ */ r.jsx(
    I,
    {
      boxProps: {
        bgcolor: {
          secondary: "#ffd23b",
          tertiary: "#08bafc"
        }[e]
      },
      sx: { paddingY: "5px" },
      children: /* @__PURE__ */ r.jsxs(V, { direction: "row", alignItems: "center", gap: 2, children: [
        o ? /* @__PURE__ */ r.jsx(Qe, { htmlColor: c }) : /* @__PURE__ */ r.jsx(Ke, { htmlColor: c }),
        /* @__PURE__ */ r.jsx(at, { variant: "body2", color: c, mb: 0, children: t }),
        /* @__PURE__ */ r.jsx(
          G,
          {
            style: { marginLeft: "auto" },
            onClick: () => {
              l(!1), n !== void 0 && n();
            },
            children: /* @__PURE__ */ r.jsx(Je, { htmlColor: c })
          }
        )
      ] })
    }
  );
}, Xr = ({
  children: s,
  session: o
}) => {
  const { state: n } = nr();
  let { scroll: t, notifications: e } = n || {};
  return t = t || { x: 0, y: 0 }, e = e || [], C(() => {
    window.scroll(t.x, t.y);
  }, [t.x, t.y]), /* @__PURE__ */ r.jsx(r.Fragment, { children: ie((i) => {
    if (typeof s == "function" && (s = s(i)), e.length) {
      const l = Nt.toArray(s);
      return e.forEach((c, a) => {
        l.splice(
          c.index ?? a,
          0,
          /* @__PURE__ */ r.jsx(qt, { ...c.props })
        );
      }), l;
    }
    return s;
  }, o) });
}, ys = (s) => /* @__PURE__ */ r.jsx(Ut, { component: Z, ...s }), _t = (s) => /* @__PURE__ */ r.jsx(q, { ...s, component: Z }), js = (s) => /* @__PURE__ */ r.jsx(G, { ...s, component: Z }), Ts = (s) => /* @__PURE__ */ r.jsx(Te, { ...s, component: Z }), Ms = (s) => /* @__PURE__ */ r.jsx(Vt, { ...s, component: Z }), bs = ({
  delta: s,
  to: o,
  ...n
}) => {
  const t = ae();
  return C(() => {
    typeof s == "number" ? t(s) : t(o, n);
  }, [t, s, o, n]), /* @__PURE__ */ r.jsx(r.Fragment, {});
}, Qr = ({
  header: s,
  subheader: o,
  textAlign: n = "start",
  imageProps: t,
  button1Props: e,
  button2Props: i,
  bgcolor: l = "primary"
}) => {
  const c = $t[l].contrastText;
  return /* @__PURE__ */ r.jsx(
    I,
    {
      boxProps: {
        bgcolor: {
          primary: jt[500],
          secondary: le[500],
          tertiary: ce[500]
        }[l]
      },
      sx: { paddingY: 0 },
      children: /* @__PURE__ */ r.jsxs(
        V,
        {
          direction: "row",
          alignItems: "center",
          justifyContent: n,
          gap: 2,
          children: [
            /* @__PURE__ */ r.jsxs(
              V,
              {
                py: {
                  xs: "80px",
                  md: t !== void 0 ? 0 : "100px"
                },
                textAlign: n,
                children: [
                  /* @__PURE__ */ r.jsx(
                    at,
                    {
                      variant: "h2",
                      color: c,
                      mb: o !== void 0 ? void 0 : 0,
                      children: s
                    }
                  ),
                  o !== void 0 && /* @__PURE__ */ r.jsx(
                    at,
                    {
                      color: c,
                      variant: "h4",
                      mb: e !== void 0 ? void 0 : 0,
                      children: o
                    }
                  ),
                  /* @__PURE__ */ r.jsxs(V, { direction: "row", gap: 2, children: [
                    e !== void 0 && /* @__PURE__ */ r.jsx(_t, { ...e }),
                    i !== void 0 && /* @__PURE__ */ r.jsx(_t, { ...i })
                  ] })
                ]
              }
            ),
            t !== void 0 && /* @__PURE__ */ r.jsx(
              ue,
              {
                ...t,
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
}, Kr = ({ header: s, tabs: o, originalPath: n, value: t = 0 }) => {
  const e = or(), i = ir(), [l, c] = A(
    t < 0 ? 0 : t >= o.length ? o.length - 1 : t
  ), a = o.map((h) => h.label), d = o.map((h) => h.children), u = o.map((h) => h.path);
  return C(() => {
    c(t);
  }, [t]), C(() => {
    const h = de(
      e,
      Ie({
        tab: N().oneOf(u).required()
      })
    )?.tab;
    h !== void 0 && c(u.indexOf(h));
  }, [e, u]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      I,
      {
        boxProps: { bgcolor: jt[500] },
        sx: { paddingY: "100px" },
        className: "flex-center",
        children: /* @__PURE__ */ r.jsx(
          at,
          {
            textAlign: "center",
            variant: "h2",
            style: { color: "white" },
            mb: 0,
            children: s
          }
        )
      }
    ),
    /* @__PURE__ */ r.jsx(
      I,
      {
        boxProps: { bgcolor: jt[300] },
        sx: { paddingY: "6px" },
        className: "flex-center",
        children: /* @__PURE__ */ r.jsx(
          Me,
          {
            value: l,
            onChange: (h, g) => {
              i(
                ar(n, {
                  tab: u[g]
                })
              );
            },
            ScrollButtonComponent: ({
              disabled: h,
              onClick: g,
              direction: y
            }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: h === !1 && /* @__PURE__ */ r.jsx(
              G,
              {
                onClick: g,
                style: {
                  padding: 0,
                  [y === "left" ? "marginRight" : "marginLeft"]: "15px",
                  color: "white"
                },
                children: y === "left" ? /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(tr, {}) }) : /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsx(er, {}) })
              }
            ) }),
            children: a.map((h) => /* @__PURE__ */ r.jsx(Vt, { disableRipple: !0, label: h }, h))
          }
        )
      }
    ),
    d[l]
  ] });
}, Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Banner: Qr,
  Notification: qt,
  Page: Xr,
  Section: I,
  TabBar: Kr
}, Symbol.toStringTag, { value: "Module" })), Jr = ({
  headers: s,
  children: o,
  containerProps: n,
  headProps: t,
  headRowProps: e,
  bodyProps: i,
  ...l
}) => /* @__PURE__ */ r.jsx(be, { ...n, children: /* @__PURE__ */ r.jsxs(Oe, { ...l, children: [
  /* @__PURE__ */ r.jsx(we, { ...t, children: /* @__PURE__ */ r.jsx(Rt, { ...e, children: s.map((c, a) => {
    const d = `table-head-cell-${a}`;
    return typeof c == "string" || $e(c) ? /* @__PURE__ */ r.jsx(ct, { children: c }, d) : /* @__PURE__ */ r.jsx(ct, { ...c }, d);
  }) }) }),
  /* @__PURE__ */ r.jsx(Ye, { ...i, children: o })
] }) }), ts = ({ cellProps: s, ...o }) => /* @__PURE__ */ r.jsx(ct, { ...s, children: /* @__PURE__ */ r.jsx(V, { ...o }) }), ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BodyRow: Rt,
  Cell: ct,
  CellStack: ts,
  Table: Jr
}, Symbol.toStringTag, { value: "Module" })), es = ({
  path: s,
  routes: o,
  header: n = /* @__PURE__ */ r.jsx(r.Fragment, {}),
  // TODO: "header = <Header />"
  footer: t = /* @__PURE__ */ r.jsx(r.Fragment, {}),
  // TODO: "footer = <Footer />"
  headerExcludePaths: e = [],
  footerExcludePaths: i = []
}) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  !e.includes(s) && n,
  /* @__PURE__ */ r.jsx(lr, { children: o }),
  !i.includes(s) && t
] }), rs = (s) => {
  const { pathname: o } = he();
  return /* @__PURE__ */ r.jsx(es, { path: o, ...s });
}, Ys = ({
  path: s,
  theme: o,
  store: n,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: t = 3600,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: e = 3600,
  ...i
}) => /* @__PURE__ */ r.jsxs(Le, { theme: o, children: [
  /* @__PURE__ */ r.jsx(ve, {}),
  /* @__PURE__ */ r.jsx(ur, { store: n, children: /* @__PURE__ */ r.jsx(cr, { children: /* @__PURE__ */ r.jsx(rs, { ...i }) }) })
] }), Ls = ({
  open: s = !1,
  onClick: o,
  ...n
}) => {
  const [t, e] = Lt.useState(s);
  return Lt.useEffect(() => {
    e(s);
  }, [s]), /* @__PURE__ */ r.jsx(
    Ce,
    {
      open: t,
      onMouseOver: () => {
        t || e(!0);
      },
      onMouseLeave: () => {
        e(!1);
      },
      onClick: fe(
        {
          after: () => {
            e(!t);
          }
        },
        o
      ),
      ...n
    }
  );
}, vs = ({
  content: s,
  children: o = /* @__PURE__ */ r.jsx(rr, {}),
  ...n
}) => /* @__PURE__ */ r.jsx(
  G,
  {
    "data-testid": "copy-icon-button",
    onClick: () => {
      navigator.clipboard.writeText(s);
    },
    ...n,
    children: o
  }
), Cs = ({
  children: s = "Download",
  endIcon: o = /* @__PURE__ */ r.jsx(sr, {}),
  file: n,
  ...t
}) => {
  let e, i;
  if ("mimeType" in n) {
    const { text: l, mimeType: c, name: a, charset: d = "utf-8" } = n;
    let { extension: u } = n;
    u || (u = "." + { plain: "txt", csv: "csv" }[c]), i = {
      download: a + u,
      href: `data:text/${c};charset=${d},${encodeURIComponent(l)}`
    };
  } else
    e = URL.createObjectURL(n), i = { href: e };
  return C(() => () => {
    e && URL.revokeObjectURL(e);
  }, [e]), /* @__PURE__ */ r.jsx(q, { endIcon: o, ...t, ...i, children: s });
}, Ds = ({
  containerProps: s,
  toolbarProps: o,
  elevation: n = 4,
  children: t,
  ...e
}) => {
  const i = De({
    disableHysteresis: !0,
    threshold: 0
  });
  return ze(
    /* @__PURE__ */ r.jsx(ke, { elevation: n, ...e, children: /* @__PURE__ */ r.jsx(At, { ...s, children: /* @__PURE__ */ r.jsx(Fe, { ...o, children: t }) }) }),
    {
      position: i ? "fixed" : "sticky"
    }
  );
}, ks = ({
  children: s,
  inputProps: o,
  ...n
}) => /* @__PURE__ */ r.jsxs(q, { component: "label", ...n, children: [
  s,
  /* @__PURE__ */ r.jsx("input", { type: "file", hidden: !0, ...o })
] }), Fs = ({
  styleType: s,
  listProps: o = {},
  pl: n = 4,
  children: t
}) => {
  const { sx: e, ...i } = o, l = { display: "list-item" };
  return /* @__PURE__ */ r.jsx(
    Se,
    {
      sx: {
        listStyleType: s,
        pl: n,
        ".MuiListItem-root": l,
        ".MuiListItemText-root": l,
        ...e
      },
      ...i,
      children: t
    }
  );
}, Ss = ({
  rows: s,
  containerProps: o = {},
  globalItemProps: n
}) => {
  const t = Number(o.columns ?? 12), e = (c) => Math.floor(t / c), i = (c, a, d) => Math.floor(a / e(d)) * s.length + c, l = (c, a) => {
    const d = s[0].length % e(a);
    return d !== 0 && c === s[0].length - 1 ? (t - d * a) / 2 : 0;
  };
  return /* @__PURE__ */ r.jsx(Yt, { container: !0, ...o, children: s.map(
    (c, a) => c.map(({ element: d, itemProps: u = {} }, h) => /* @__PURE__ */ r.jsx(
      Yt,
      {
        order: {
          xs: i(a, h, n.xs),
          sm: i(a, h, n.sm),
          md: i(a, h, n.md),
          lg: i(a, h, n.lg),
          xl: i(a, h, n.xl)
        },
        xsOffset: l(h, n.xs),
        smOffset: l(h, n.sm),
        mdOffset: l(h, n.md),
        lgOffset: l(h, n.lg),
        xlOffset: l(h, n.xl),
        ...n,
        ...u,
        children: d
      },
      `${a}-${h}`
    ))
  ) });
}, Ps = ({
  elementId: s,
  options: o,
  ...n
}) => /* @__PURE__ */ r.jsx(
  Ut,
  {
    ...n,
    onClick: () => {
      document.getElementById(s)?.scrollIntoView(o);
    }
  }
), _s = ({
  children: s,
  useLazyListQuery: o,
  preferCacheValue: n,
  filters: t,
  page: e = 0,
  rowsPerPage: i = 50,
  rowsPerPageOptions: l = [50, 100, 150],
  stackProps: c,
  onRowsPerPageChange: a,
  onPageChange: d,
  ...u
}) => {
  const [h, g] = o(), [{ limit: y, page: b, offset: T }, m] = Bt({
    page: e,
    limit: i
  });
  C(
    () => {
      h({ limit: y, offset: T, ...t }, n);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      h,
      y,
      T,
      // eslint-disable-next-line react-hooks/exhaustive-deps,@typescript-eslint/no-unsafe-assignment
      ...Object.values(t || {}),
      n
    ]
  );
  const { count: f, max_limit: x } = g.data || {};
  return x && (l = l.filter(
    (p) => p <= x
  )), /* @__PURE__ */ r.jsxs(V, { ...c, children: [
    me(
      g,
      ({ data: p }) => s(p, {
        limit: y,
        page: b,
        offset: T,
        count: f,
        maxLimit: x
      })
    ),
    /* @__PURE__ */ r.jsx(
      Pe,
      {
        component: "div",
        count: f ?? 0,
        rowsPerPage: y,
        onRowsPerPageChange: (p) => {
          m({ limit: parseInt(p.target.value), page: 0 }), a && a(p);
        },
        page: b,
        onPageChange: (p, j) => {
          m(({ limit: M }) => ({ limit: M, page: j })), d && d(p, j);
        },
        rowsPerPageOptions: l.sort((p, j) => p - j),
        ...u
      }
    )
  ] });
}, Bs = ({
  src: s,
  style: o = {},
  ...n
}) => /* @__PURE__ */ r.jsx(
  Et,
  {
    component: "iframe",
    width: "100%",
    src: s,
    title: "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen",
    style: { border: "0px", aspectRatio: "16 / 9", ...o },
    ...n
  }
);
export {
  Ys as App,
  Ls as ClickableTooltip,
  vs as CopyIconButton,
  Es as Countdown,
  Cs as DownloadFileButton,
  Ds as ElevatedAppBar,
  ue as Image,
  ks as InputFileButton,
  Fs as ItemizedList,
  ys as Link,
  _t as LinkButton,
  js as LinkIconButton,
  Ts as LinkListItem,
  Ms as LinkTab,
  bs as Navigator,
  Ss as OrderedGrid,
  Ps as ScrollIntoViewLink,
  Jt as SyncError,
  _s as TablePagination,
  Bs as YouTubeVideo,
  gs as forms,
  Os as pages,
  ws as tables
};
//# sourceMappingURL=index.es.js.map
