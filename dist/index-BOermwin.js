import { j as d } from "./jsx-runtime-XvoU0p7t.js";
import { CircularProgress as zt, Button as bt, Autocomplete as At, TextField as ft, FormControl as _t, FormControlLabel as Bt, Checkbox as $t, FormHelperText as wt, InputAdornment as mt, IconButton as Ut } from "@mui/material";
import { useState as U, useEffect as I, forwardRef as It, Children as Vt, useRef as Ht } from "react";
import { S as Nt } from "./urls-dtY2-PoS.js";
import { u as Wt } from "./api-Cs4Y-WeI.js";
import { Field as $, Formik as qt, Form as Rt } from "formik";
import { ValidationError as Gt, string as V, number as Zt, bool as Xt, date as Kt, array as Qt } from "yup";
import { e as Jt, b as Dt, a as b, c as te, C as ee, U as re } from "./general-DO-KrNo5.js";
import "./en-gb-B_rK7Jx1.js";
import { LocalizationProvider as se, DatePicker as ne } from "@mui/x-date-pickers";
import Y from "dayjs";
import { EmailOutlined as ie, PersonOutlined as oe, Visibility as ae, VisibilityOff as ue } from "@mui/icons-material";
import "@reduxjs/toolkit/query/react";
import "./settings/index.es.js";
import "./session-oI-Ht2C8.js";
import "js-cookie";
import { u as ce } from "./schemas-BoS4A2yH.js";
function H(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
const he = ({
  useLazyListQuery: r,
  filterOptions: o,
  getOptionLabel: s,
  getOptionKey: t = (a) => a.id,
  searchKey: e,
  ...i
}) => {
  const [a, u] = U(""), [n, { isLoading: h, isError: c }] = r(), [{ limit: y, offset: p }, x] = Wt(), [{ options: j, hasMore: T }, f] = U({ options: {}, hasMore: !0 });
  I(
    () => {
      const M = { limit: y, offset: p, ...o };
      a && (M[e] = a), n(M, !0).unwrap().then(({ data: O, offset: L, limit: D, count: w }) => {
        f(({ options: F }) => {
          const P = { ...F };
          return O.forEach((k) => {
            P[t(k)] = k;
          }), { options: P, hasMore: L + D < w };
        });
      }).catch((O) => {
        O && console.error(O);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      y,
      p,
      e,
      a,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...Object.values(o || {})
    ]
  );
  let l = Object.keys(j);
  if (!l.length) return /* @__PURE__ */ d.jsx(d.Fragment, {});
  typeof t(Object.values(j)[0]) == "number" && (l = l.map(Number));
  function m() {
    x(({ page: M, limit: O }) => ({ page: M + 1, limit: O }));
  }
  const g = ({ children: M, ...O }, L) => {
    const D = Vt.toArray(M);
    return h ? D.push(/* @__PURE__ */ d.jsx(zt, {}, "is-loading")) : (c && D.push(/* @__PURE__ */ d.jsx(Nt, {}, "is-error")), T && D.push(
      /* @__PURE__ */ d.jsx(bt, { onClick: m, children: "Load more" }, "load-more")
    )), /* @__PURE__ */ d.jsx(
      "ul",
      {
        ...O,
        ref: L,
        onScroll: (w) => {
          !h && w.currentTarget.clientHeight + w.currentTarget.scrollTop >= w.currentTarget.scrollHeight && m();
        },
        children: D
      }
    );
  };
  return /* @__PURE__ */ d.jsx(
    rt,
    {
      options: l,
      getOptionLabel: (M) => s(j[M]),
      onInputChange: (M, O, L) => {
        u(L === "input" ? O : "");
      },
      ListboxComponent: It(g),
      ...i
    }
  );
};
function le(r) {
  return typeof r == "object" && r !== null && "status" in r && r.status === 400 && "data" in r && typeof r.data == "object" && r.data !== null;
}
function de(r, o) {
  if (!le(r)) throw r;
  const s = Object.fromEntries(
    Object.entries(r.data).map(([t, e]) => (Array.isArray(e) && (e = e.join(". ")), [t, e]))
  );
  o(s);
}
function fe(r, o, s) {
  const {
    include: t,
    onlyDirtyValues: e = !1,
    then: i,
    catch: a,
    finally: u
  } = s || {};
  let { exclude: n = [] } = s || {};
  return (h, c) => {
    let y = s && s.clean ? s.clean(h) : h;
    e && (n = [
      ...n,
      ...ye(h, o).filter(
        (p) => !n.includes(p)
      )
    ]), t && (n = n.filter((p) => !t.includes(p))), n.length && (y = Jt(y, n)), r(y).unwrap().then((p) => {
      i && i(p, h, c);
    }).catch((p) => {
      a && a(p, h, c), de(p, c.setErrors);
    }).finally(() => {
      u && u(h, c);
    });
  };
}
function N(r, o) {
  return async (s) => {
    try {
      await r.validate(s, o);
    } catch (t) {
      if (t instanceof Gt)
        return t.errors.join(". ");
      throw t;
    }
  };
}
function me(r, o, s) {
  return s || (s = Dt(r)), Object.fromEntries(
    s.map((t) => [t, pe(r, o, t)])
  );
}
function pe(r, o, s) {
  const t = b(r, s), e = b(o, s);
  return t !== e;
}
function ye(r, o, s) {
  return Object.entries(me(r, o, s)).filter(
    ([
      t,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      e
    ]) => !e
  ).map(([t]) => t);
}
const rt = ({
  textFieldProps: r,
  options: o,
  validateOptions: s,
  ...t
}) => {
  const { id: e, name: i, required: a, ...u } = r, n = i.split("."), h = "not a valid option";
  let c = typeof o[0] == "string" ? V().oneOf(o, h) : Zt().oneOf(o, h);
  a && (c = c.required());
  const y = {
    name: i,
    type: typeof o[0] == "string" ? "text" : "number",
    validate: N(c, s)
  };
  return /* @__PURE__ */ d.jsx($, { ...y, children: ({ form: p, meta: x }) => {
    const j = b(
      p.values,
      n
    ), T = b(p.touched, n), f = b(p.errors, n);
    return /* @__PURE__ */ d.jsx(
      At,
      {
        options: o,
        defaultValue: x.initialValue === "" ? void 0 : x.initialValue,
        renderInput: ({
          id: l,
          // eslint-disable-line @typescript-eslint/no-unused-vars
          ...m
        }) => /* @__PURE__ */ d.jsx(
          ft,
          {
            id: e ?? i,
            name: i,
            required: a,
            type: "text",
            value: j,
            error: T && !!f,
            helperText: T && f,
            ...u,
            ...m
          }
        ),
        onChange: (l, m) => {
          p.setFieldValue(i, m ?? void 0, !0);
        },
        onBlur: p.handleBlur,
        ...t
      }
    );
  } });
}, ge = ({
  id: r,
  name: o,
  formControlLabelProps: s,
  required: t = !1,
  errorMessage: e = "this is a required field",
  validateOptions: i,
  ...a
}) => {
  const u = o.split(".");
  let n = Xt();
  t && (n = n.oneOf([!0], e));
  const h = {
    name: o,
    type: "checkbox",
    validate: N(n, i)
  };
  return /* @__PURE__ */ d.jsx($, { ...h, children: ({ form: c, meta: y }) => {
    const p = b(c.touched, u), x = b(c.errors, u), j = b(
      c.values,
      u
    ), T = p && !!x;
    return /* @__PURE__ */ d.jsxs(_t, { error: T, required: t, children: [
      /* @__PURE__ */ d.jsx(
        Bt,
        {
          control: /* @__PURE__ */ d.jsx(
            $t,
            {
              defaultChecked: y.initialValue,
              id: r ?? o,
              name: o,
              value: j,
              onChange: c.handleChange,
              onBlur: c.handleBlur,
              ...a
            }
          ),
          ...s
        }
      ),
      T && /* @__PURE__ */ d.jsx(wt, { children: x })
    ] });
  } });
}, xe = ({
  textFieldProps: r,
  ...o
}) => {
  const {
    name: s = "country",
    label: t = "Country",
    placeholder: e = "Select your country",
    ...i
  } = r || {};
  return /* @__PURE__ */ d.jsx(
    rt,
    {
      options: ee,
      getOptionLabel: (a) => te[a],
      textFieldProps: { name: s, label: t, placeholder: e, ...i },
      ...o
    }
  );
};
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var s = arguments[o];
      for (var t in s) ({}).hasOwnProperty.call(s, t) && (r[t] = s[t]);
    }
    return r;
  }, dt.apply(null, arguments);
}
var K = { exports: {} }, Me = K.exports, gt;
function Te() {
  return gt || (gt = 1, (function(r, o) {
    (function(s, t) {
      r.exports = t();
    })(Me, (function() {
      var s = "week", t = "year";
      return function(e, i, a) {
        var u = i.prototype;
        u.week = function(n) {
          if (n === void 0 && (n = null), n !== null) return this.add(7 * (n - this.week()), "day");
          var h = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var c = a(this).startOf(t).add(1, t).date(h), y = a(this).endOf(s);
            if (c.isBefore(y)) return 1;
          }
          var p = a(this).startOf(t).date(h).startOf(s).subtract(1, "millisecond"), x = this.diff(p, s, !0);
          return x < 0 ? a(this).startOf("week").week() : Math.ceil(x);
        }, u.weeks = function(n) {
          return n === void 0 && (n = null), this.week(n);
        };
      };
    }));
  })(K)), K.exports;
}
var Oe = Te();
const je = /* @__PURE__ */ H(Oe);
var Q = { exports: {} }, Ye = Q.exports, xt;
function be() {
  return xt || (xt = 1, (function(r, o) {
    (function(s, t) {
      r.exports = t();
    })(Ye, (function() {
      var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, e = /\d/, i = /\d\d/, a = /\d\d?/, u = /\d*[^-_:/,()\s\d]+/, n = {}, h = function(f) {
        return (f = +f) + (f > 68 ? 1900 : 2e3);
      }, c = function(f) {
        return function(l) {
          this[f] = +l;
        };
      }, y = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
        (this.zone || (this.zone = {})).offset = (function(l) {
          if (!l || l === "Z") return 0;
          var m = l.match(/([+-]|\d\d)/g), g = 60 * m[1] + (+m[2] || 0);
          return g === 0 ? 0 : m[0] === "+" ? -g : g;
        })(f);
      }], p = function(f) {
        var l = n[f];
        return l && (l.indexOf ? l : l.s.concat(l.f));
      }, x = function(f, l) {
        var m, g = n.meridiem;
        if (g) {
          for (var M = 1; M <= 24; M += 1) if (f.indexOf(g(M, 0, l)) > -1) {
            m = M > 12;
            break;
          }
        } else m = f === (l ? "pm" : "PM");
        return m;
      }, j = { A: [u, function(f) {
        this.afternoon = x(f, !1);
      }], a: [u, function(f) {
        this.afternoon = x(f, !0);
      }], Q: [e, function(f) {
        this.month = 3 * (f - 1) + 1;
      }], S: [e, function(f) {
        this.milliseconds = 100 * +f;
      }], SS: [i, function(f) {
        this.milliseconds = 10 * +f;
      }], SSS: [/\d{3}/, function(f) {
        this.milliseconds = +f;
      }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [i, c("day")], Do: [u, function(f) {
        var l = n.ordinal, m = f.match(/\d+/);
        if (this.day = m[0], l) for (var g = 1; g <= 31; g += 1) l(g).replace(/\[|\]/g, "") === f && (this.day = g);
      }], w: [a, c("week")], ww: [i, c("week")], M: [a, c("month")], MM: [i, c("month")], MMM: [u, function(f) {
        var l = p("months"), m = (p("monthsShort") || l.map((function(g) {
          return g.slice(0, 3);
        }))).indexOf(f) + 1;
        if (m < 1) throw new Error();
        this.month = m % 12 || m;
      }], MMMM: [u, function(f) {
        var l = p("months").indexOf(f) + 1;
        if (l < 1) throw new Error();
        this.month = l % 12 || l;
      }], Y: [/[+-]?\d+/, c("year")], YY: [i, function(f) {
        this.year = h(f);
      }], YYYY: [/\d{4}/, c("year")], Z: y, ZZ: y };
      function T(f) {
        var l, m;
        l = f, m = n && n.formats;
        for (var g = (f = l.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(P, k, v) {
          var S = v && v.toUpperCase();
          return k || m[v] || s[v] || m[S].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(E, z, A) {
            return z || A.slice(1);
          }));
        }))).match(t), M = g.length, O = 0; O < M; O += 1) {
          var L = g[O], D = j[L], w = D && D[0], F = D && D[1];
          g[O] = F ? { regex: w, parser: F } : L.replace(/^\[|\]$/g, "");
        }
        return function(P) {
          for (var k = {}, v = 0, S = 0; v < M; v += 1) {
            var E = g[v];
            if (typeof E == "string") S += E.length;
            else {
              var z = E.regex, A = E.parser, q = P.slice(S), B = z.exec(q)[0];
              A.call(k, B), P = P.replace(B, "");
            }
          }
          return (function(_) {
            var R = _.afternoon;
            if (R !== void 0) {
              var C = _.hours;
              R ? C < 12 && (_.hours += 12) : C === 12 && (_.hours = 0), delete _.afternoon;
            }
          })(k), k;
        };
      }
      return function(f, l, m) {
        m.p.customParseFormat = !0, f && f.parseTwoDigitYear && (h = f.parseTwoDigitYear);
        var g = l.prototype, M = g.parse;
        g.parse = function(O) {
          var L = O.date, D = O.utc, w = O.args;
          this.$u = D;
          var F = w[1];
          if (typeof F == "string") {
            var P = w[2] === !0, k = w[3] === !0, v = P || k, S = w[2];
            k && (S = w[2]), n = this.$locale(), !P && S && (n = m.Ls[S]), this.$d = (function(q, B, _, R) {
              try {
                if (["x", "X"].indexOf(B) > -1) return new Date((B === "X" ? 1e3 : 1) * q);
                var C = T(B)(q), st = C.year, G = C.month, kt = C.day, St = C.hours, Pt = C.minutes, vt = C.seconds, Et = C.milliseconds, pt = C.zone, yt = C.week, nt = /* @__PURE__ */ new Date(), it = kt || (st || G ? 1 : nt.getDate()), ot = st || nt.getFullYear(), Z = 0;
                st && !G || (Z = G > 0 ? G - 1 : nt.getMonth());
                var X, at = St || 0, ut = Pt || 0, ct = vt || 0, ht = Et || 0;
                return pt ? new Date(Date.UTC(ot, Z, it, at, ut, ct, ht + 60 * pt.offset * 1e3)) : _ ? new Date(Date.UTC(ot, Z, it, at, ut, ct, ht)) : (X = new Date(ot, Z, it, at, ut, ct, ht), yt && (X = R(X).week(yt).toDate()), X);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(L, F, D, m), this.init(), S && S !== !0 && (this.$L = this.locale(S).$L), v && L != this.format(F) && (this.$d = /* @__PURE__ */ new Date("")), n = {};
          } else if (F instanceof Array) for (var E = F.length, z = 1; z <= E; z += 1) {
            w[1] = F[z - 1];
            var A = m.apply(this, w);
            if (A.isValid()) {
              this.$d = A.$d, this.$L = A.$L, this.init();
              break;
            }
            z === E && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else M.call(this, O);
        };
      };
    }));
  })(Q)), Q.exports;
}
var we = be();
const De = /* @__PURE__ */ H(we);
var J = { exports: {} }, Ce = J.exports, Mt;
function Le() {
  return Mt || (Mt = 1, (function(r, o) {
    (function(s, t) {
      r.exports = t();
    })(Ce, (function() {
      var s = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
      return function(t, e, i) {
        var a = e.prototype, u = a.format;
        i.en.formats = s, a.format = function(n) {
          n === void 0 && (n = "YYYY-MM-DDTHH:mm:ssZ");
          var h = this.$locale().formats, c = (function(y, p) {
            return y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(x, j, T) {
              var f = T && T.toUpperCase();
              return j || p[T] || s[T] || p[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(l, m, g) {
                return m || g.slice(1);
              }));
            }));
          })(n, h === void 0 ? {} : h);
          return u.call(this, c);
        };
      };
    }));
  })(J)), J.exports;
}
var Fe = Le();
const ke = /* @__PURE__ */ H(Fe);
var tt = { exports: {} }, Se = tt.exports, Tt;
function Pe() {
  return Tt || (Tt = 1, (function(r, o) {
    (function(s, t) {
      r.exports = t();
    })(Se, (function() {
      return function(s, t, e) {
        t.prototype.isBetween = function(i, a, u, n) {
          var h = e(i), c = e(a), y = (n = n || "()")[0] === "(", p = n[1] === ")";
          return (y ? this.isAfter(h, u) : !this.isBefore(h, u)) && (p ? this.isBefore(c, u) : !this.isAfter(c, u)) || (y ? this.isBefore(h, u) : !this.isAfter(h, u)) && (p ? this.isAfter(c, u) : !this.isBefore(c, u));
        };
      };
    }));
  })(tt)), tt.exports;
}
var ve = Pe();
const Ee = /* @__PURE__ */ H(ve);
var et = { exports: {} }, ze = et.exports, Ot;
function Ae() {
  return Ot || (Ot = 1, (function(r, o) {
    (function(s, t) {
      r.exports = t();
    })(ze, (function() {
      return function(s, t) {
        var e = t.prototype, i = e.format;
        e.format = function(a) {
          var u = this, n = this.$locale();
          if (!this.isValid()) return i.bind(this)(a);
          var h = this.$utils(), c = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(y) {
            switch (y) {
              case "Q":
                return Math.ceil((u.$M + 1) / 3);
              case "Do":
                return n.ordinal(u.$D);
              case "gggg":
                return u.weekYear();
              case "GGGG":
                return u.isoWeekYear();
              case "wo":
                return n.ordinal(u.week(), "W");
              case "w":
              case "ww":
                return h.s(u.week(), y === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return h.s(u.isoWeek(), y === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return h.s(String(u.$H === 0 ? 24 : u.$H), y === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(u.$d.getTime() / 1e3);
              case "x":
                return u.$d.getTime();
              case "z":
                return "[" + u.offsetName() + "]";
              case "zzz":
                return "[" + u.offsetName("long") + "]";
              default:
                return y;
            }
          }));
          return i.bind(this)(c);
        };
      };
    }));
  })(et)), et.exports;
}
var _e = Ae();
const Be = /* @__PURE__ */ H(_e), jt = /* @__PURE__ */ new Set();
function $e(r, o = "warning") {
  if (process.env.NODE_ENV === "production")
    return;
  const s = Array.isArray(r) ? r.join(`
`) : r;
  jt.has(s) || (jt.add(s), o === "error" ? console.error(s) : console.warn(s));
}
Y.extend(ke);
Y.extend(je);
Y.extend(Ee);
Y.extend(Be);
const Ue = {
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
}, Ie = {
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
`), Yt = ["Missing timezone plugin", "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin", "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"].join(`
`), Ve = (r, o) => o ? (...s) => r(...s).locale(o) : r;
class He {
  constructor({
    locale: o,
    formats: s
  } = {}) {
    this.isMUIAdapter = !0, this.isTimezoneCompatible = !0, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
      start: "[",
      end: "]"
    }, this.formatTokenMap = Ue, this.setLocaleToValue = (t) => {
      const e = this.getCurrentLocaleCode();
      return e === t.locale() ? t : t.locale(e);
    }, this.hasUTCPlugin = () => typeof Y.utc < "u", this.hasTimezonePlugin = () => typeof Y.tz < "u", this.isSame = (t, e, i) => {
      const a = this.setTimezone(e, this.getTimezone(t));
      return t.format(i) === a.format(i);
    }, this.cleanTimezone = (t) => {
      switch (t) {
        case "default":
          return;
        case "system":
          return Y.tz.guess();
        default:
          return t;
      }
    }, this.createSystemDate = (t) => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const e = Y.tz.guess();
        return e !== "UTC" ? Y.tz(t, e) : Y(t);
      }
      return Y(t);
    }, this.createUTCDate = (t) => {
      if (!this.hasUTCPlugin())
        throw new Error(lt);
      return Y.utc(t);
    }, this.createTZDate = (t, e) => {
      if (!this.hasUTCPlugin())
        throw new Error(lt);
      if (!this.hasTimezonePlugin())
        throw new Error(Yt);
      const i = t !== void 0 && !t.endsWith("Z");
      return Y(t).tz(this.cleanTimezone(e), i);
    }, this.getLocaleFormats = () => {
      const t = Y.Ls, e = this.locale || "en";
      let i = t[e];
      return i === void 0 && (process.env.NODE_ENV !== "production" && $e(["MUI X: Your locale has not been found.", "Either the locale key is not a supported one. Locales supported by dayjs are available here: https://github.com/iamkun/dayjs/tree/dev/src/locale.", "Or you forget to import the locale from 'dayjs/locale/{localeUsed}'", "fallback on English locale."]), i = t.en), i.formats;
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
    }, this.getInvalidDate = () => Y(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (t) => {
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
        throw new Error(Yt);
      }
      return Y.tz(t, this.cleanTimezone(e));
    }, this.toJsDate = (t) => t.toDate(), this.parse = (t, e) => t === "" ? null : this.dayjs(t, e, this.locale, !0), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (t) => {
      const e = this.getLocaleFormats(), i = (a) => a.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (u, n, h) => n || h.slice(1));
      return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (a, u, n) => {
        const h = n && n.toUpperCase();
        return u || e[n] || i(e[h]);
      });
    }, this.isValid = (t) => t == null ? !1 : t.isValid(), this.format = (t, e) => this.formatByString(t, this.formats[e]), this.formatByString = (t, e) => this.dayjs(t).format(e), this.formatNumber = (t) => t, this.isEqual = (t, e) => t === null && e === null ? !0 : t === null || e === null ? !1 : t.toDate().getTime() === e.toDate().getTime(), this.isSameYear = (t, e) => this.isSame(t, e, "YYYY"), this.isSameMonth = (t, e) => this.isSame(t, e, "YYYY-MM"), this.isSameDay = (t, e) => this.isSame(t, e, "YYYY-MM-DD"), this.isSameHour = (t, e) => t.isSame(e, "hour"), this.isAfter = (t, e) => t > e, this.isAfterYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() > e.utc() : t.isAfter(e, "year"), this.isAfterDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() > e.utc() : t.isAfter(e, "day"), this.isBefore = (t, e) => t < e, this.isBeforeYear = (t, e) => this.hasUTCPlugin() ? !this.isSameYear(t, e) && t.utc() < e.utc() : t.isBefore(e, "year"), this.isBeforeDay = (t, e) => this.hasUTCPlugin() ? !this.isSameDay(t, e) && t.utc() < e.utc() : t.isBefore(e, "day"), this.isWithinRange = (t, [e, i]) => t >= e && t <= i, this.startOfYear = (t) => this.adjustOffset(t.startOf("year")), this.startOfMonth = (t) => this.adjustOffset(t.startOf("month")), this.startOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).startOf("week")), this.startOfDay = (t) => this.adjustOffset(t.startOf("day")), this.endOfYear = (t) => this.adjustOffset(t.endOf("year")), this.endOfMonth = (t) => this.adjustOffset(t.endOf("month")), this.endOfWeek = (t) => this.adjustOffset(this.setLocaleToValue(t).endOf("week")), this.endOfDay = (t) => this.adjustOffset(t.endOf("day")), this.addYears = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "year") : t.add(e, "year")), this.addMonths = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "month") : t.add(e, "month")), this.addWeeks = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "week") : t.add(e, "week")), this.addDays = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "day") : t.add(e, "day")), this.addHours = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "hour") : t.add(e, "hour")), this.addMinutes = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "minute") : t.add(e, "minute")), this.addSeconds = (t, e) => this.adjustOffset(e < 0 ? t.subtract(Math.abs(e), "second") : t.add(e, "second")), this.getYear = (t) => t.year(), this.getMonth = (t) => t.month(), this.getDate = (t) => t.date(), this.getHours = (t) => t.hour(), this.getMinutes = (t) => t.minute(), this.getSeconds = (t) => t.second(), this.getMilliseconds = (t) => t.millisecond(), this.setYear = (t, e) => this.adjustOffset(t.set("year", e)), this.setMonth = (t, e) => this.adjustOffset(t.set("month", e)), this.setDate = (t, e) => this.adjustOffset(t.set("date", e)), this.setHours = (t, e) => this.adjustOffset(t.set("hour", e)), this.setMinutes = (t, e) => this.adjustOffset(t.set("minute", e)), this.setSeconds = (t, e) => this.adjustOffset(t.set("second", e)), this.setMilliseconds = (t, e) => this.adjustOffset(t.set("millisecond", e)), this.getDaysInMonth = (t) => t.daysInMonth(), this.getWeekArray = (t) => {
      const e = this.startOfWeek(this.startOfMonth(t)), i = this.endOfWeek(this.endOfMonth(t));
      let a = 0, u = e;
      const n = [];
      for (; u < i; ) {
        const h = Math.floor(a / 7);
        n[h] = n[h] || [], n[h].push(u), u = this.addDays(u, 1), a += 1;
      }
      return n;
    }, this.getWeekNumber = (t) => t.week(), this.getYearRange = ([t, e]) => {
      const i = this.startOfYear(t), a = this.endOfYear(e), u = [];
      let n = i;
      for (; this.isBefore(n, a); )
        u.push(n), n = this.addYears(n, 1);
      return u;
    }, this.dayjs = Ve(Y, o), this.locale = o, this.formats = dt({}, Ie, s), Y.extend(De);
  }
  getDayOfWeek(o) {
    return o.day() + 1;
  }
}
const Ne = ({
  name: r,
  required: o,
  minDate: s,
  maxDate: t,
  validateOptions: e,
  ...i
}) => {
  const a = r.split(".");
  function u(c) {
    return c.locale("en-gb").format("L");
  }
  let n = Kt();
  o && (n = n.required()), s && (n = n.min(
    s,
    `this field must be after or equal to ${u(s)}`
  )), t && (n = n.max(
    t,
    `this field must be before or equal to ${u(t)}`
  ));
  const h = {
    name: r,
    type: "date",
    validate: N(n, e)
  };
  return /* @__PURE__ */ d.jsx($, { ...h, children: ({ form: c }) => {
    const y = b(c.errors, a), p = b(c.touched, a);
    let x = b(
      c.values,
      a
    );
    x = x ? Y(x) : null;
    function j(T) {
      c.setFieldValue(
        r,
        T && T.isValid() ? T.format("YYYY-MM-DD") : null,
        !0
      );
    }
    return /* @__PURE__ */ d.jsx(
      se,
      {
        dateAdapter: He,
        adapterLocale: "en-gb",
        children: /* @__PURE__ */ d.jsx(
          ne,
          {
            name: r,
            value: x,
            minDate: s,
            maxDate: t,
            onChange: j,
            slotProps: {
              textField: {
                id: r,
                onChange: (T) => {
                  j(T);
                },
                onBlur: c.handleBlur,
                required: o,
                error: p && !!y,
                helperText: p && y
              }
            },
            ...i
          }
        )
      }
    );
  } });
}, W = ({
  id: r,
  name: o,
  schema: s,
  type: t = "text",
  required: e = !1,
  dirty: i = !1,
  unique: a = !1,
  uniqueCaseInsensitive: u = !1,
  split: n,
  validateOptions: h,
  ...c
}) => {
  const [y, p] = U(""), x = o.split(".");
  function j() {
    let l = s;
    if (l = e ? l.required() : l.optional(), i && !n && (l = l.notOneOf(
      [y],
      "cannot be initial value"
    )), !n) return l;
    let m = Qt().of(l);
    return m = e ? m.required().min(1) : m.optional(), (a || u) && (m = m.test({
      message: "cannot have duplicates",
      test: (g) => Array.isArray(g) && g.length >= 2 && g.every((M) => typeof M == "string") ? new Set(
        u ? g.map((M) => M.toLowerCase()) : g
      ).size === g.length : !0
    })), i && (m = m.notOneOf(
      [y],
      "cannot be initial value"
    )), m;
  }
  const T = {
    name: o,
    type: t,
    validate: N(j(), h)
  }, f = ({ form: l }) => {
    const m = b(
      l.initialValues,
      x
    ), g = b(
      l.values,
      x
    ), M = b(l.errors, x), O = b(l.touched, x);
    return I(() => {
      p(m);
    }, [m]), I(() => {
      l.setFieldValue(
        o,
        n && typeof g == "string" ? g.split(n) : g,
        !0
      );
    }, [g]), /* @__PURE__ */ d.jsx(
      ft,
      {
        id: r ?? o,
        name: o,
        type: t,
        required: e,
        value: g,
        onChange: l.handleChange,
        onBlur: l.handleBlur,
        error: O && !!M,
        helperText: O && M,
        ...c
      }
    );
  };
  return /* @__PURE__ */ d.jsx($, { ...T, children: f });
}, We = ({
  name: r = "email",
  label: o = "Email address",
  placeholder: s = "Enter your email address",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    type: "email",
    schema: V().email(),
    name: r,
    label: o,
    placeholder: s,
    InputProps: {
      endAdornment: /* @__PURE__ */ d.jsx(mt, { position: "end", children: /* @__PURE__ */ d.jsx(ie, {}) }),
      ...t
    },
    ...e
  }
), qe = ({
  name: r = "first_name",
  label: o = "First name",
  placeholder: s = "Enter your first name",
  InputProps: t = {},
  ...e
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    schema: ce.first_name,
    name: r,
    label: o,
    placeholder: s,
    InputProps: {
      endAdornment: /* @__PURE__ */ d.jsx(mt, { position: "end", children: /* @__PURE__ */ d.jsx(oe, {}) }),
      ...t
    },
    ...e
  }
), Ct = {
  behavior: "smooth",
  block: "start"
}, Re = ({
  scrollIntoViewOptions: r = Ct,
  ...o
}) => {
  const s = Ht(null);
  return I(() => {
    s.current && s.current.scrollIntoView(r);
  }, [r]), /* @__PURE__ */ d.jsx(wt, { ref: s, error: !0, ...o });
}, Lt = ({
  children: r,
  scrollIntoViewOptions: o = Ct,
  nonFieldErrorsProps: s,
  fieldRefs: t = [],
  ...e
}) => /* @__PURE__ */ d.jsx(qt, { ...e, children: (i) => {
  const a = !!Object.keys(i.errors).length, u = a && typeof i.errors.__all__ == "string";
  if (a && !u && i.isSubmitting && t.length) {
    const n = Dt(i.errors), h = t.find(({ name: c }) => n.includes(c))?.inputRef.current;
    h && h.scrollIntoView(o);
  }
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    u && /* @__PURE__ */ d.jsx(Re, { ...s, children: i.errors.__all__ }),
    /* @__PURE__ */ d.jsx(Rt, { children: typeof r == "function" ? r(i) : r })
  ] });
} }), Ge = ({
  useMutation: r,
  submitOptions: o,
  ...s
}) => {
  const [t] = r();
  return /* @__PURE__ */ d.jsx(
    Lt,
    {
      ...s,
      onSubmit: fe(
        t,
        s.initialValues,
        o
      )
    }
  );
}, Ze = (r) => "onSubmit" in r ? /* @__PURE__ */ d.jsx(Lt, { ...r }) : Ge(r), Xe = ({
  name: r = "otp",
  label: o = "OTP",
  placeholder: s = "Enter your OTP",
  ...t
}) => /* @__PURE__ */ d.jsx(
  W,
  {
    name: r,
    label: o,
    schema: V().matches(/^[0-9]{6}$/, "Must be exactly 6 digits."),
    placeholder: s,
    required: !0,
    ...t
  }
), Ke = ({
  id: r,
  repeatName: o,
  setValue: s,
  fieldProps: t,
  name: e,
  label: i,
  placeholder: a,
  type: u,
  ...n
}) => {
  const { form: h } = t, c = e.split("."), y = b(h.values, c), p = o.split("."), x = b(
    h.values,
    p
  ), j = b(
    h.touched,
    p
  ), T = b(h.errors, p);
  return I(() => {
    s(y);
  }, [s, y]), /* @__PURE__ */ d.jsx(
    ft,
    {
      required: !0,
      type: u,
      label: i ?? `Repeat ${e.replace("_", " ")}`,
      placeholder: a ?? `Enter your ${e.replace("_", " ")} again`,
      id: r ?? o,
      name: o,
      value: x,
      onChange: h.handleChange,
      onBlur: h.handleBlur,
      error: j && !!T,
      helperText: j && T,
      ...n
    }
  );
}, Ft = ({
  name: r,
  type: o = "text",
  validateOptions: s,
  ...t
}) => {
  const [e, i] = U(""), a = `${r}_repeat`, u = {
    name: a,
    type: o,
    validate: N(
      V().required().equals([e], "does not match"),
      s
    )
  };
  return /* @__PURE__ */ d.jsx($, { ...u, children: (n) => /* @__PURE__ */ d.jsx(
    Ke,
    {
      name: r,
      type: o,
      repeatName: a,
      setValue: i,
      fieldProps: n,
      ...t
    }
  ) });
}, Qe = ({
  name: r = "password",
  label: o = "Password",
  placeholder: s = "Enter your password",
  schema: t = V(),
  InputProps: e = {},
  withRepeatField: i = !1,
  repeatFieldProps: a = {},
  ...u
}) => {
  const [n, h] = U(!1), c = n ? "text" : "password", y = /* @__PURE__ */ d.jsx(mt, { position: "end", children: /* @__PURE__ */ d.jsx(
    Ut,
    {
      onClick: () => {
        h((p) => !p);
      },
      edge: "end",
      children: n ? /* @__PURE__ */ d.jsx(ae, {}) : /* @__PURE__ */ d.jsx(ue, {})
    }
  ) });
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      W,
      {
        autoComplete: "off",
        type: c,
        name: r,
        label: o,
        schema: t,
        placeholder: s,
        InputProps: { endAdornment: y, ...e },
        ...u
      }
    ),
    i && /* @__PURE__ */ d.jsx(
      Ft,
      {
        name: r,
        type: c,
        ...a,
        InputProps: { endAdornment: y, ...a.InputProps }
      }
    )
  ] });
}, Je = ({
  children: r = "Submit",
  ...o
}) => {
  function s(t, e) {
    e = e || {};
    for (const i in t) {
      const a = t[i];
      e[i] = a instanceof Object && a.constructor === Object ? s(a, e) : !0;
    }
    return e;
  }
  return /* @__PURE__ */ d.jsx($, { name: "submit", type: "submit", children: ({ form: t }) => /* @__PURE__ */ d.jsx(
    bt,
    {
      type: "button",
      onClick: () => {
        t.setTouched(s(t.values), !0).then((e) => {
          const i = !!(e && Object.keys(e).length);
          t.setSubmitting(i), i || t.submitForm();
        });
      },
      ...o,
      children: r
    }
  ) });
}, tr = ({
  textFieldProps: r,
  ...o
}) => {
  const {
    name: s = "uk_county",
    label: t = "UK county",
    placeholder: e = "Select your UK county",
    ...i
  } = r || {};
  return /* @__PURE__ */ d.jsx(
    rt,
    {
      options: re,
      textFieldProps: { name: s, label: t, placeholder: e, ...i },
      ...o
    }
  );
}, Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ApiAutocompleteField: he,
  AutocompleteField: rt,
  CheckboxField: ge,
  CountryField: xe,
  DatePickerField: Ne,
  EmailField: We,
  FirstNameField: qe,
  Form: Ze,
  OtpField: Xe,
  PasswordField: Qe,
  RepeatField: Ft,
  SubmitButton: Je,
  TextField: W,
  UkCountyField: tr
}, Symbol.toStringTag, { value: "Module" }));
export {
  he as A,
  ge as C,
  Ne as D,
  We as E,
  qe as F,
  Xe as O,
  Qe as P,
  Ft as R,
  Je as S,
  W as T,
  tr as U,
  rt as a,
  xe as b,
  Ze as c,
  Mr as i
};
//# sourceMappingURL=index-BOermwin.js.map
