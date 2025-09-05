import { j as vf } from "../jsx-runtime-Dpn_P65e.js";
import { g as bf } from "../_commonjsHelpers-C6fGbg64.js";
import * as Vo from "react";
import Sc from "react";
import Rt from "react-dom";
import { Provider as hf } from "react-redux";
import { makeStore as yf } from "./store.es.js";
var Be = {}, ma = { exports: {} };
ma.exports;
var Ui;
function Oc() {
  return Ui || (Ui = 1, (function(e) {
    const r = (a = 0) => (i) => `\x1B[${38 + a};5;${i}m`, n = (a = 0) => (i, l, u) => `\x1B[${38 + a};2;${i};${l};${u}m`;
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
      for (const [l, u] of Object.entries(i)) {
        for (const [s, d] of Object.entries(u))
          i[s] = {
            open: `\x1B[${d[0]}m`,
            close: `\x1B[${d[1]}m`
          }, u[s] = i[s], a.set(d[0], d[1]);
        Object.defineProperty(i, l, {
          value: u,
          enumerable: !1
        });
      }
      return Object.defineProperty(i, "codes", {
        value: a,
        enumerable: !1
      }), i.color.close = "\x1B[39m", i.bgColor.close = "\x1B[49m", i.color.ansi256 = r(), i.color.ansi16m = n(), i.bgColor.ansi256 = r(10), i.bgColor.ansi16m = n(10), Object.defineProperties(i, {
        rgbToAnsi256: {
          value: (l, u, s) => l === u && u === s ? l < 8 ? 16 : l > 248 ? 231 : Math.round((l - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(l / 255 * 5) + 6 * Math.round(u / 255 * 5) + Math.round(s / 255 * 5),
          enumerable: !1
        },
        hexToRgb: {
          value: (l) => {
            const u = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(l.toString(16));
            if (!u)
              return [0, 0, 0];
            let { colorString: s } = u.groups;
            s.length === 3 && (s = s.split("").map((f) => f + f).join(""));
            const d = Number.parseInt(s, 16);
            return [
              d >> 16 & 255,
              d >> 8 & 255,
              d & 255
            ];
          },
          enumerable: !1
        },
        hexToAnsi256: {
          value: (l) => i.rgbToAnsi256(...i.hexToRgb(l)),
          enumerable: !1
        }
      }), i;
    }
    Object.defineProperty(e, "exports", {
      enumerable: !0,
      get: o
    });
  })(ma)), ma.exports;
}
var bt = {}, ji;
function xa() {
  if (ji) return bt;
  ji = 1, Object.defineProperty(bt, "__esModule", {
    value: !0
  }), bt.printIteratorEntries = t, bt.printIteratorValues = r, bt.printListItems = n, bt.printObjectProperties = o;
  const e = (a, i) => {
    const l = Object.keys(a).sort(i);
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(a).forEach((u) => {
      Object.getOwnPropertyDescriptor(a, u).enumerable && l.push(u);
    }), l;
  };
  function t(a, i, l, u, s, d, f = ": ") {
    let c = "", h = a.next();
    if (!h.done) {
      c += i.spacingOuter;
      const g = l + i.indent;
      for (; !h.done; ) {
        const R = d(
          h.value[0],
          i,
          g,
          u,
          s
        ), T = d(
          h.value[1],
          i,
          g,
          u,
          s
        );
        c += g + R + f + T, h = a.next(), h.done ? i.min || (c += ",") : c += "," + i.spacingInner;
      }
      c += i.spacingOuter + l;
    }
    return c;
  }
  function r(a, i, l, u, s, d) {
    let f = "", c = a.next();
    if (!c.done) {
      f += i.spacingOuter;
      const h = l + i.indent;
      for (; !c.done; )
        f += h + d(c.value, i, h, u, s), c = a.next(), c.done ? i.min || (f += ",") : f += "," + i.spacingInner;
      f += i.spacingOuter + l;
    }
    return f;
  }
  function n(a, i, l, u, s, d) {
    let f = "";
    if (a.length) {
      f += i.spacingOuter;
      const c = l + i.indent;
      for (let h = 0; h < a.length; h++)
        f += c, h in a && (f += d(a[h], i, c, u, s)), h < a.length - 1 ? f += "," + i.spacingInner : i.min || (f += ",");
      f += i.spacingOuter + l;
    }
    return f;
  }
  function o(a, i, l, u, s, d) {
    let f = "";
    const c = e(a, i.compareKeys);
    if (c.length) {
      f += i.spacingOuter;
      const h = l + i.indent;
      for (let g = 0; g < c.length; g++) {
        const R = c[g], T = d(R, i, h, u, s), p = d(a[R], i, h, u, s);
        f += h + T + ": " + p, g < c.length - 1 ? f += "," + i.spacingInner : i.min || (f += ",");
      }
      f += i.spacingOuter + l;
    }
    return f;
  }
  return bt;
}
var We = {}, $i;
function gf() {
  if ($i) return We;
  $i = 1, Object.defineProperty(We, "__esModule", {
    value: !0
  }), We.test = We.serialize = We.default = void 0;
  var e = xa(), t = (function() {
    return typeof globalThis < "u" ? globalThis : typeof t < "u" ? t : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), r = t["jest-symbol-do-not-touch"] || t.Symbol;
  const n = typeof r == "function" && r.for ? r.for("jest.asymmetricMatcher") : 1267621, o = " ", a = (s, d, f, c, h, g) => {
    const R = s.toString();
    return R === "ArrayContaining" || R === "ArrayNotContaining" ? ++c > d.maxDepth ? "[" + R + "]" : R + o + "[" + (0, e.printListItems)(
      s.sample,
      d,
      f,
      c,
      h,
      g
    ) + "]" : R === "ObjectContaining" || R === "ObjectNotContaining" ? ++c > d.maxDepth ? "[" + R + "]" : R + o + "{" + (0, e.printObjectProperties)(
      s.sample,
      d,
      f,
      c,
      h,
      g
    ) + "}" : R === "StringMatching" || R === "StringNotMatching" || R === "StringContaining" || R === "StringNotContaining" ? R + o + g(s.sample, d, f, c, h) : s.toAsymmetricMatcher();
  };
  We.serialize = a;
  const i = (s) => s && s.$$typeof === n;
  We.test = i;
  var u = {
    serialize: a,
    test: i
  };
  return We.default = u, We;
}
var ze = {}, La, Hi;
function Rf() {
  return Hi || (Hi = 1, La = ({ onlyFirst: e = !1 } = {}) => {
    const t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  }), La;
}
var Vi;
function Ef() {
  if (Vi) return ze;
  Vi = 1, Object.defineProperty(ze, "__esModule", {
    value: !0
  }), ze.test = ze.serialize = ze.default = void 0;
  var e = r(Rf()), t = r(Oc());
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  const n = (u) => u.replace((0, e.default)(), (s) => {
    switch (s) {
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
  }), o = (u) => typeof u == "string" && !!u.match((0, e.default)());
  ze.test = o;
  const a = (u, s, d, f, c, h) => h(n(u), s, d, f, c);
  ze.serialize = a;
  var l = {
    serialize: a,
    test: o
  };
  return ze.default = l, ze;
}
var Ke = {}, Wi;
function Cf() {
  if (Wi) return Ke;
  Wi = 1, Object.defineProperty(Ke, "__esModule", {
    value: !0
  }), Ke.test = Ke.serialize = Ke.default = void 0;
  var e = xa();
  const t = " ", r = ["DOMStringMap", "NamedNodeMap"], n = /^(HTML\w*Collection|NodeList)$/, o = (d) => r.indexOf(d) !== -1 || n.test(d), a = (d) => d && d.constructor && !!d.constructor.name && o(d.constructor.name);
  Ke.test = a;
  const i = (d) => d.constructor.name === "NamedNodeMap", l = (d, f, c, h, g, R) => {
    const T = d.constructor.name;
    return ++h > f.maxDepth ? "[" + T + "]" : (f.min ? "" : T + t) + (r.indexOf(T) !== -1 ? "{" + (0, e.printObjectProperties)(
      i(d) ? Array.from(d).reduce((p, w) => (p[w.name] = w.value, p), {}) : { ...d },
      f,
      c,
      h,
      g,
      R
    ) + "}" : "[" + (0, e.printListItems)(
      Array.from(d),
      f,
      c,
      h,
      g,
      R
    ) + "]");
  };
  Ke.serialize = l;
  var s = {
    serialize: l,
    test: a
  };
  return Ke.default = s, Ke;
}
var Ge = {}, Ce = {}, oa = {}, zi;
function wf() {
  if (zi) return oa;
  zi = 1, Object.defineProperty(oa, "__esModule", {
    value: !0
  }), oa.default = e;
  function e(t) {
    return t.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  return oa;
}
var Ki;
function si() {
  if (Ki) return Ce;
  Ki = 1, Object.defineProperty(Ce, "__esModule", {
    value: !0
  }), Ce.printText = Ce.printProps = Ce.printElementAsLeaf = Ce.printElement = Ce.printComment = Ce.printChildren = void 0;
  var e = t(wf());
  function t(u) {
    return u && u.__esModule ? u : { default: u };
  }
  const r = (u, s, d, f, c, h, g) => {
    const R = f + d.indent, T = d.colors;
    return u.map((p) => {
      const w = s[p];
      let _ = g(w, d, R, c, h);
      return typeof w != "string" && (_.indexOf(`
`) !== -1 && (_ = d.spacingOuter + R + _ + d.spacingOuter + f), _ = "{" + _ + "}"), d.spacingInner + f + T.prop.open + p + T.prop.close + "=" + T.value.open + _ + T.value.close;
    }).join("");
  };
  Ce.printProps = r;
  const n = (u, s, d, f, c, h) => u.map(
    (g) => s.spacingOuter + d + (typeof g == "string" ? o(g, s) : h(g, s, d, f, c))
  ).join("");
  Ce.printChildren = n;
  const o = (u, s) => {
    const d = s.colors.content;
    return d.open + (0, e.default)(u) + d.close;
  };
  Ce.printText = o;
  const a = (u, s) => {
    const d = s.colors.comment;
    return d.open + "<!--" + (0, e.default)(u) + "-->" + d.close;
  };
  Ce.printComment = a;
  const i = (u, s, d, f, c) => {
    const h = f.colors.tag;
    return h.open + "<" + u + (s && h.close + s + f.spacingOuter + c + h.open) + (d ? ">" + h.close + d + f.spacingOuter + c + h.open + "</" + u : (s && !f.min ? "" : " ") + "/") + ">" + h.close;
  };
  Ce.printElement = i;
  const l = (u, s) => {
    const d = s.colors.tag;
    return d.open + "<" + u + d.close + " …" + d.open + " />" + d.close;
  };
  return Ce.printElementAsLeaf = l, Ce;
}
var Gi;
function _f() {
  if (Gi) return Ge;
  Gi = 1, Object.defineProperty(Ge, "__esModule", {
    value: !0
  }), Ge.test = Ge.serialize = Ge.default = void 0;
  var e = si();
  const t = 1, r = 3, n = 8, o = 11, a = /^((HTML|SVG)\w*)?Element$/, i = (R) => {
    try {
      return typeof R.hasAttribute == "function" && R.hasAttribute("is");
    } catch {
      return !1;
    }
  }, l = (R) => {
    const T = R.constructor.name, { nodeType: p, tagName: w } = R, _ = typeof w == "string" && w.includes("-") || i(R);
    return p === t && (a.test(T) || _) || p === r && T === "Text" || p === n && T === "Comment" || p === o && T === "DocumentFragment";
  }, u = (R) => {
    var T;
    return (R == null || (T = R.constructor) === null || T === void 0 ? void 0 : T.name) && l(R);
  };
  Ge.test = u;
  function s(R) {
    return R.nodeType === r;
  }
  function d(R) {
    return R.nodeType === n;
  }
  function f(R) {
    return R.nodeType === o;
  }
  const c = (R, T, p, w, _, P) => {
    if (s(R))
      return (0, e.printText)(R.data, T);
    if (d(R))
      return (0, e.printComment)(R.data, T);
    const q = f(R) ? "DocumentFragment" : R.tagName.toLowerCase();
    return ++w > T.maxDepth ? (0, e.printElementAsLeaf)(q, T) : (0, e.printElement)(
      q,
      (0, e.printProps)(
        f(R) ? [] : Array.from(R.attributes).map((b) => b.name).sort(),
        f(R) ? {} : Array.from(R.attributes).reduce((b, y) => (b[y.name] = y.value, b), {}),
        T,
        p + T.indent,
        w,
        _,
        P
      ),
      (0, e.printChildren)(
        Array.prototype.slice.call(R.childNodes || R.children),
        T,
        p + T.indent,
        w,
        _,
        P
      ),
      T,
      p
    );
  };
  Ge.serialize = c;
  var g = {
    serialize: c,
    test: u
  };
  return Ge.default = g, Ge;
}
var Ye = {}, Yi;
function qf() {
  if (Yi) return Ye;
  Yi = 1, Object.defineProperty(Ye, "__esModule", {
    value: !0
  }), Ye.test = Ye.serialize = Ye.default = void 0;
  var e = xa();
  const t = "@@__IMMUTABLE_ITERABLE__@@", r = "@@__IMMUTABLE_LIST__@@", n = "@@__IMMUTABLE_KEYED__@@", o = "@@__IMMUTABLE_MAP__@@", a = "@@__IMMUTABLE_ORDERED__@@", i = "@@__IMMUTABLE_RECORD__@@", l = "@@__IMMUTABLE_SEQ__@@", u = "@@__IMMUTABLE_SET__@@", s = "@@__IMMUTABLE_STACK__@@", d = (y) => "Immutable." + y, f = (y) => "[" + y + "]", c = " ", h = "…", g = (y, E, A, L, F, U, O) => ++L > E.maxDepth ? f(d(O)) : d(O) + c + "{" + (0, e.printIteratorEntries)(
    y.entries(),
    E,
    A,
    L,
    F,
    U
  ) + "}";
  function R(y) {
    let E = 0;
    return {
      next() {
        if (E < y._keys.length) {
          const A = y._keys[E++];
          return {
            done: !1,
            value: [A, y.get(A)]
          };
        }
        return {
          done: !0,
          value: void 0
        };
      }
    };
  }
  const T = (y, E, A, L, F, U) => {
    const O = d(y._name || "Record");
    return ++L > E.maxDepth ? f(O) : O + c + "{" + (0, e.printIteratorEntries)(
      R(y),
      E,
      A,
      L,
      F,
      U
    ) + "}";
  }, p = (y, E, A, L, F, U) => {
    const O = d("Seq");
    return ++L > E.maxDepth ? f(O) : y[n] ? O + c + "{" + // from Immutable collection of entries or from ECMAScript object
    (y._iter || y._object ? (0, e.printIteratorEntries)(
      y.entries(),
      E,
      A,
      L,
      F,
      U
    ) : h) + "}" : O + c + "[" + (y._iter || // from Immutable collection of values
    y._array || // from ECMAScript array
    y._collection || // from ECMAScript collection in immutable v4
    y._iterable ? (0, e.printIteratorValues)(
      y.values(),
      E,
      A,
      L,
      F,
      U
    ) : h) + "]";
  }, w = (y, E, A, L, F, U, O) => ++L > E.maxDepth ? f(d(O)) : d(O) + c + "[" + (0, e.printIteratorValues)(
    y.values(),
    E,
    A,
    L,
    F,
    U
  ) + "]", _ = (y, E, A, L, F, U) => y[o] ? g(
    y,
    E,
    A,
    L,
    F,
    U,
    y[a] ? "OrderedMap" : "Map"
  ) : y[r] ? w(
    y,
    E,
    A,
    L,
    F,
    U,
    "List"
  ) : y[u] ? w(
    y,
    E,
    A,
    L,
    F,
    U,
    y[a] ? "OrderedSet" : "Set"
  ) : y[s] ? w(
    y,
    E,
    A,
    L,
    F,
    U,
    "Stack"
  ) : y[l] ? p(y, E, A, L, F, U) : T(y, E, A, L, F, U);
  Ye.serialize = _;
  const P = (y) => y && (y[t] === !0 || y[i] === !0);
  Ye.test = P;
  var b = {
    serialize: _,
    test: P
  };
  return Ye.default = b, Ye;
}
var Xe = {}, aa = { exports: {} }, oe = {};
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xi;
function Pf() {
  if (Xi) return oe;
  Xi = 1;
  var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, l = 60112, u = 60113, s = 60120, d = 60115, f = 60116, c = 60121, h = 60122, g = 60117, R = 60129, T = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var p = Symbol.for;
    e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), o = p("react.profiler"), a = p("react.provider"), i = p("react.context"), l = p("react.forward_ref"), u = p("react.suspense"), s = p("react.suspense_list"), d = p("react.memo"), f = p("react.lazy"), c = p("react.block"), h = p("react.server.block"), g = p("react.fundamental"), R = p("react.debug_trace_mode"), T = p("react.legacy_hidden");
  }
  function w(O) {
    if (typeof O == "object" && O !== null) {
      var B = O.$$typeof;
      switch (B) {
        case e:
          switch (O = O.type, O) {
            case r:
            case o:
            case n:
            case u:
            case s:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case i:
                case l:
                case f:
                case d:
                case a:
                  return O;
                default:
                  return B;
              }
          }
        case t:
          return B;
      }
    }
  }
  var _ = a, P = e, q = l, b = r, y = f, E = d, A = t, L = o, F = n, U = u;
  return oe.ContextConsumer = i, oe.ContextProvider = _, oe.Element = P, oe.ForwardRef = q, oe.Fragment = b, oe.Lazy = y, oe.Memo = E, oe.Portal = A, oe.Profiler = L, oe.StrictMode = F, oe.Suspense = U, oe.isAsyncMode = function() {
    return !1;
  }, oe.isConcurrentMode = function() {
    return !1;
  }, oe.isContextConsumer = function(O) {
    return w(O) === i;
  }, oe.isContextProvider = function(O) {
    return w(O) === a;
  }, oe.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === e;
  }, oe.isForwardRef = function(O) {
    return w(O) === l;
  }, oe.isFragment = function(O) {
    return w(O) === r;
  }, oe.isLazy = function(O) {
    return w(O) === f;
  }, oe.isMemo = function(O) {
    return w(O) === d;
  }, oe.isPortal = function(O) {
    return w(O) === t;
  }, oe.isProfiler = function(O) {
    return w(O) === o;
  }, oe.isStrictMode = function(O) {
    return w(O) === n;
  }, oe.isSuspense = function(O) {
    return w(O) === u;
  }, oe.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === r || O === o || O === R || O === n || O === u || O === s || O === T || typeof O == "object" && O !== null && (O.$$typeof === f || O.$$typeof === d || O.$$typeof === a || O.$$typeof === i || O.$$typeof === l || O.$$typeof === g || O.$$typeof === c || O[0] === h);
  }, oe.typeOf = w, oe;
}
var ae = {};
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qi;
function Tf() {
  return Qi || (Qi = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = 60103, t = 60106, r = 60107, n = 60108, o = 60114, a = 60109, i = 60110, l = 60112, u = 60113, s = 60120, d = 60115, f = 60116, c = 60121, h = 60122, g = 60117, R = 60129, T = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var p = Symbol.for;
      e = p("react.element"), t = p("react.portal"), r = p("react.fragment"), n = p("react.strict_mode"), o = p("react.profiler"), a = p("react.provider"), i = p("react.context"), l = p("react.forward_ref"), u = p("react.suspense"), s = p("react.suspense_list"), d = p("react.memo"), f = p("react.lazy"), c = p("react.block"), h = p("react.server.block"), g = p("react.fundamental"), p("react.scope"), p("react.opaque.id"), R = p("react.debug_trace_mode"), p("react.offscreen"), T = p("react.legacy_hidden");
    }
    var w = !1;
    function _(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === o || D === R || D === n || D === u || D === s || D === T || w || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === d || D.$$typeof === a || D.$$typeof === i || D.$$typeof === l || D.$$typeof === g || D.$$typeof === c || D[0] === h));
    }
    function P(D) {
      if (typeof D == "object" && D !== null) {
        var X = D.$$typeof;
        switch (X) {
          case e:
            var z = D.type;
            switch (z) {
              case r:
              case o:
              case n:
              case u:
              case s:
                return z;
              default:
                var Z = z && z.$$typeof;
                switch (Z) {
                  case i:
                  case l:
                  case f:
                  case d:
                  case a:
                    return Z;
                  default:
                    return X;
                }
            }
          case t:
            return X;
        }
      }
    }
    var q = i, b = a, y = e, E = l, A = r, L = f, F = d, U = t, O = o, B = n, V = u, re = !1, G = !1;
    function se(D) {
      return re || (re = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function me(D) {
      return G || (G = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _e(D) {
      return P(D) === i;
    }
    function Se(D) {
      return P(D) === a;
    }
    function Oe(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function $(D) {
      return P(D) === l;
    }
    function we(D) {
      return P(D) === r;
    }
    function ve(D) {
      return P(D) === f;
    }
    function Re(D) {
      return P(D) === d;
    }
    function $e(D) {
      return P(D) === t;
    }
    function He(D) {
      return P(D) === o;
    }
    function C(D) {
      return P(D) === n;
    }
    function j(D) {
      return P(D) === u;
    }
    ae.ContextConsumer = q, ae.ContextProvider = b, ae.Element = y, ae.ForwardRef = E, ae.Fragment = A, ae.Lazy = L, ae.Memo = F, ae.Portal = U, ae.Profiler = O, ae.StrictMode = B, ae.Suspense = V, ae.isAsyncMode = se, ae.isConcurrentMode = me, ae.isContextConsumer = _e, ae.isContextProvider = Se, ae.isElement = Oe, ae.isForwardRef = $, ae.isFragment = we, ae.isLazy = ve, ae.isMemo = Re, ae.isPortal = $e, ae.isProfiler = He, ae.isStrictMode = C, ae.isSuspense = j, ae.isValidElementType = _, ae.typeOf = P;
  })()), ae;
}
var Ji;
function xf() {
  return Ji || (Ji = 1, process.env.NODE_ENV === "production" ? aa.exports = Pf() : aa.exports = Tf()), aa.exports;
}
var Zi;
function Sf() {
  if (Zi) return Xe;
  Zi = 1, Object.defineProperty(Xe, "__esModule", {
    value: !0
  }), Xe.test = Xe.serialize = Xe.default = void 0;
  var e = n(xf()), t = si();
  function r(f) {
    if (typeof WeakMap != "function") return null;
    var c = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    return (r = function(g) {
      return g ? h : c;
    })(f);
  }
  function n(f, c) {
    if (f && f.__esModule)
      return f;
    if (f === null || typeof f != "object" && typeof f != "function")
      return { default: f };
    var h = r(c);
    if (h && h.has(f))
      return h.get(f);
    var g = {}, R = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var T in f)
      if (T !== "default" && Object.prototype.hasOwnProperty.call(f, T)) {
        var p = R ? Object.getOwnPropertyDescriptor(f, T) : null;
        p && (p.get || p.set) ? Object.defineProperty(g, T, p) : g[T] = f[T];
      }
    return g.default = f, h && h.set(f, g), g;
  }
  const o = (f, c = []) => (Array.isArray(f) ? f.forEach((h) => {
    o(h, c);
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
        const h = c.render.displayName || c.render.name || "";
        return h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef";
      }
      if (e.isMemo(f)) {
        const h = c.displayName || c.type.displayName || c.type.name || "";
        return h !== "" ? "Memo(" + h + ")" : "Memo";
      }
    }
    return "UNDEFINED";
  }, i = (f) => {
    const { props: c } = f;
    return Object.keys(c).filter((h) => h !== "children" && c[h] !== void 0).sort();
  }, l = (f, c, h, g, R, T) => ++g > c.maxDepth ? (0, t.printElementAsLeaf)(a(f), c) : (0, t.printElement)(
    a(f),
    (0, t.printProps)(
      i(f),
      f.props,
      c,
      h + c.indent,
      g,
      R,
      T
    ),
    (0, t.printChildren)(
      o(f.props.children),
      c,
      h + c.indent,
      g,
      R,
      T
    ),
    c,
    h
  );
  Xe.serialize = l;
  const u = (f) => f != null && e.isElement(f);
  Xe.test = u;
  var d = {
    serialize: l,
    test: u
  };
  return Xe.default = d, Xe;
}
var Qe = {}, el;
function Of() {
  if (el) return Qe;
  el = 1, Object.defineProperty(Qe, "__esModule", {
    value: !0
  }), Qe.test = Qe.serialize = Qe.default = void 0;
  var e = si(), t = (function() {
    return typeof globalThis < "u" ? globalThis : typeof t < "u" ? t : typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")();
  })(), r = t["jest-symbol-do-not-touch"] || t.Symbol;
  const n = typeof r == "function" && r.for ? r.for("react.test.json") : 245830487, o = (s) => {
    const { props: d } = s;
    return d ? Object.keys(d).filter((f) => d[f] !== void 0).sort() : [];
  }, a = (s, d, f, c, h, g) => ++c > d.maxDepth ? (0, e.printElementAsLeaf)(s.type, d) : (0, e.printElement)(
    s.type,
    s.props ? (0, e.printProps)(
      o(s),
      s.props,
      d,
      f + d.indent,
      c,
      h,
      g
    ) : "",
    s.children ? (0, e.printChildren)(
      s.children,
      d,
      f + d.indent,
      c,
      h,
      g
    ) : "",
    d,
    f
  );
  Qe.serialize = a;
  const i = (s) => s && s.$$typeof === n;
  Qe.test = i;
  var u = {
    serialize: a,
    test: i
  };
  return Qe.default = u, Qe;
}
var tl;
function Mf() {
  if (tl) return Be;
  tl = 1, Object.defineProperty(Be, "__esModule", {
    value: !0
  }), Be.default = Be.DEFAULT_OPTIONS = void 0, Be.format = Re, Be.plugins = void 0;
  var e = s(Oc()), t = xa(), r = s(
    gf()
  ), n = s(Ef()), o = s(Cf()), a = s(_f()), i = s(qf()), l = s(Sf()), u = s(
    Of()
  );
  function s(C) {
    return C && C.__esModule ? C : { default: C };
  }
  const d = Object.prototype.toString, f = Date.prototype.toISOString, c = Error.prototype.toString, h = RegExp.prototype.toString, g = (C) => typeof C.constructor == "function" && C.constructor.name || "Object", R = (C) => typeof window < "u" && C === window, T = /^Symbol\((.*)\)(.*)$/, p = /\n/gi;
  class w extends Error {
    constructor(j, D) {
      super(j), this.stack = D, this.name = this.constructor.name;
    }
  }
  function _(C) {
    return C === "[object Array]" || C === "[object ArrayBuffer]" || C === "[object DataView]" || C === "[object Float32Array]" || C === "[object Float64Array]" || C === "[object Int8Array]" || C === "[object Int16Array]" || C === "[object Int32Array]" || C === "[object Uint8Array]" || C === "[object Uint8ClampedArray]" || C === "[object Uint16Array]" || C === "[object Uint32Array]";
  }
  function P(C) {
    return Object.is(C, -0) ? "-0" : String(C);
  }
  function q(C) {
    return `${C}n`;
  }
  function b(C, j) {
    return j ? "[Function " + (C.name || "anonymous") + "]" : "[Function]";
  }
  function y(C) {
    return String(C).replace(T, "Symbol($1)");
  }
  function E(C) {
    return "[" + c.call(C) + "]";
  }
  function A(C, j, D, X) {
    if (C === !0 || C === !1)
      return "" + C;
    if (C === void 0)
      return "undefined";
    if (C === null)
      return "null";
    const z = typeof C;
    if (z === "number")
      return P(C);
    if (z === "bigint")
      return q(C);
    if (z === "string")
      return X ? '"' + C.replace(/"|\\/g, "\\$&") + '"' : '"' + C + '"';
    if (z === "function")
      return b(C, j);
    if (z === "symbol")
      return y(C);
    const Z = d.call(C);
    return Z === "[object WeakMap]" ? "WeakMap {}" : Z === "[object WeakSet]" ? "WeakSet {}" : Z === "[object Function]" || Z === "[object GeneratorFunction]" ? b(C, j) : Z === "[object Symbol]" ? y(C) : Z === "[object Date]" ? isNaN(+C) ? "Date { NaN }" : f.call(C) : Z === "[object Error]" ? E(C) : Z === "[object RegExp]" ? D ? h.call(C).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : h.call(C) : C instanceof Error ? E(C) : null;
  }
  function L(C, j, D, X, z, Z) {
    if (z.indexOf(C) !== -1)
      return "[Circular]";
    z = z.slice(), z.push(C);
    const ue = ++X > j.maxDepth, ie = j.min;
    if (j.callToJSON && !ue && C.toJSON && typeof C.toJSON == "function" && !Z)
      return B(C.toJSON(), j, D, X, z, !0);
    const be = d.call(C);
    return be === "[object Arguments]" ? ue ? "[Arguments]" : (ie ? "" : "Arguments ") + "[" + (0, t.printListItems)(
      C,
      j,
      D,
      X,
      z,
      B
    ) + "]" : _(be) ? ue ? "[" + C.constructor.name + "]" : (ie || !j.printBasicPrototype && C.constructor.name === "Array" ? "" : C.constructor.name + " ") + "[" + (0, t.printListItems)(
      C,
      j,
      D,
      X,
      z,
      B
    ) + "]" : be === "[object Map]" ? ue ? "[Map]" : "Map {" + (0, t.printIteratorEntries)(
      C.entries(),
      j,
      D,
      X,
      z,
      B,
      " => "
    ) + "}" : be === "[object Set]" ? ue ? "[Set]" : "Set {" + (0, t.printIteratorValues)(
      C.values(),
      j,
      D,
      X,
      z,
      B
    ) + "}" : ue || R(C) ? "[" + g(C) + "]" : (ie || !j.printBasicPrototype && g(C) === "Object" ? "" : g(C) + " ") + "{" + (0, t.printObjectProperties)(
      C,
      j,
      D,
      X,
      z,
      B
    ) + "}";
  }
  function F(C) {
    return C.serialize != null;
  }
  function U(C, j, D, X, z, Z) {
    let ue;
    try {
      ue = F(C) ? C.serialize(j, D, X, z, Z, B) : C.print(
        j,
        (ie) => B(ie, D, X, z, Z),
        (ie) => {
          const be = X + D.indent;
          return be + ie.replace(p, `
` + be);
        },
        {
          edgeSpacing: D.spacingOuter,
          min: D.min,
          spacing: D.spacingInner
        },
        D.colors
      );
    } catch (ie) {
      throw new w(ie.message, ie.stack);
    }
    if (typeof ue != "string")
      throw new Error(
        `pretty-format: Plugin must return type "string" but instead returned "${typeof ue}".`
      );
    return ue;
  }
  function O(C, j) {
    for (let D = 0; D < C.length; D++)
      try {
        if (C[D].test(j))
          return C[D];
      } catch (X) {
        throw new w(X.message, X.stack);
      }
    return null;
  }
  function B(C, j, D, X, z, Z) {
    const ue = O(j.plugins, C);
    if (ue !== null)
      return U(ue, C, j, D, X, z);
    const ie = A(
      C,
      j.printFunctionName,
      j.escapeRegex,
      j.escapeString
    );
    return ie !== null ? ie : L(
      C,
      j,
      D,
      X,
      z,
      Z
    );
  }
  const V = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
  }, re = Object.keys(V), G = {
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
    theme: V
  };
  Be.DEFAULT_OPTIONS = G;
  function se(C) {
    if (Object.keys(C).forEach((j) => {
      if (!G.hasOwnProperty(j))
        throw new Error(`pretty-format: Unknown option "${j}".`);
    }), C.min && C.indent !== void 0 && C.indent !== 0)
      throw new Error(
        'pretty-format: Options "min" and "indent" cannot be used together.'
      );
    if (C.theme !== void 0) {
      if (C.theme === null)
        throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof C.theme != "object")
        throw new Error(
          `pretty-format: Option "theme" must be of type "object" but instead received "${typeof C.theme}".`
        );
    }
  }
  const me = (C) => re.reduce((j, D) => {
    const X = C.theme && C.theme[D] !== void 0 ? C.theme[D] : V[D], z = X && e.default[X];
    if (z && typeof z.close == "string" && typeof z.open == "string")
      j[D] = z;
    else
      throw new Error(
        `pretty-format: Option "theme" has a key "${D}" whose value "${X}" is undefined in ansi-styles.`
      );
    return j;
  }, /* @__PURE__ */ Object.create(null)), _e = () => re.reduce((C, j) => (C[j] = {
    close: "",
    open: ""
  }, C), /* @__PURE__ */ Object.create(null)), Se = (C) => C && C.printFunctionName !== void 0 ? C.printFunctionName : G.printFunctionName, Oe = (C) => C && C.escapeRegex !== void 0 ? C.escapeRegex : G.escapeRegex, $ = (C) => C && C.escapeString !== void 0 ? C.escapeString : G.escapeString, we = (C) => {
    var j;
    return {
      callToJSON: C && C.callToJSON !== void 0 ? C.callToJSON : G.callToJSON,
      colors: C && C.highlight ? me(C) : _e(),
      compareKeys: C && typeof C.compareKeys == "function" ? C.compareKeys : G.compareKeys,
      escapeRegex: Oe(C),
      escapeString: $(C),
      indent: C && C.min ? "" : ve(
        C && C.indent !== void 0 ? C.indent : G.indent
      ),
      maxDepth: C && C.maxDepth !== void 0 ? C.maxDepth : G.maxDepth,
      min: C && C.min !== void 0 ? C.min : G.min,
      plugins: C && C.plugins !== void 0 ? C.plugins : G.plugins,
      printBasicPrototype: (j = C?.printBasicPrototype) !== null && j !== void 0 ? j : !0,
      printFunctionName: Se(C),
      spacingInner: C && C.min ? " " : `
`,
      spacingOuter: C && C.min ? "" : `
`
    };
  };
  function ve(C) {
    return new Array(C + 1).join(" ");
  }
  function Re(C, j) {
    if (j && (se(j), j.plugins)) {
      const X = O(j.plugins, C);
      if (X !== null)
        return U(X, C, we(j), "", 0, []);
    }
    const D = A(
      C,
      Se(j),
      Oe(j),
      $(j)
    );
    return D !== null ? D : L(C, we(j), "", 0, []);
  }
  const $e = {
    AsymmetricMatcher: r.default,
    ConvertAnsi: n.default,
    DOMCollection: o.default,
    DOMElement: a.default,
    Immutable: i.default,
    ReactElement: l.default,
    ReactTestComponent: u.default
  };
  Be.plugins = $e;
  var He = Re;
  return Be.default = He, Be;
}
var Mc = Mf(), Af = Object.prototype.toString;
function If(e) {
  return typeof e == "function" || Af.call(e) === "[object Function]";
}
function kf(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var Df = Math.pow(2, 53) - 1;
function Nf(e) {
  var t = kf(e);
  return Math.min(Math.max(t, 0), Df);
}
function Le(e, t) {
  var r = Array, n = Object(e);
  if (e == null)
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
  for (var o = Nf(n.length), a = If(r) ? Object(new r(o)) : new Array(o), i = 0, l; i < o; )
    l = n[i], a[i] = l, i += 1;
  return a.length = o, a;
}
function Wo(e) {
  "@babel/helpers - typeof";
  return Wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wo(e);
}
function Lf(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bf(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Ac(n.key), n);
  }
}
function Ff(e, t, r) {
  return t && Bf(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Uf(e, t, r) {
  return t = Ac(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ac(e) {
  var t = jf(e, "string");
  return Wo(t) === "symbol" ? t : String(t);
}
function jf(e, t) {
  if (Wo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (Wo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $f = /* @__PURE__ */ (function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    Lf(this, e), Uf(this, "items", void 0), this.items = t;
  }
  return Ff(e, [{
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
const Hf = typeof Set > "u" ? Set : $f;
function ye(e) {
  var t;
  return (
    // eslint-disable-next-line no-restricted-properties -- actual guard for environments without localName
    (t = e.localName) !== null && t !== void 0 ? t : (
      // eslint-disable-next-line no-restricted-properties -- required for the fallback
      e.tagName.toLowerCase()
    )
  );
}
var Vf = {
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
}, Wf = {
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
function zf(e, t) {
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
    return e.hasAttribute(r) && !((n = Wf[t]) !== null && n !== void 0 && n.has(r));
  });
}
function Ic(e, t) {
  return zf(e, t);
}
function Kf(e) {
  var t = Yf(e);
  if (t === null || t === "presentation") {
    var r = Gf(e);
    if (t !== "presentation" || Ic(e, r || ""))
      return r;
  }
  return t;
}
function Gf(e) {
  var t = Vf[ye(e)];
  if (t !== void 0)
    return t;
  switch (ye(e)) {
    case "a":
    case "area":
    case "link":
      if (e.hasAttribute("href"))
        return "link";
      break;
    case "img":
      return e.getAttribute("alt") === "" && !Ic(e, "img") ? "presentation" : "img";
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
function Yf(e) {
  var t = e.getAttribute("role");
  if (t !== null) {
    var r = t.trim().split(" ")[0];
    if (r.length > 0)
      return r;
  }
  return null;
}
function le(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function kc(e) {
  return le(e) && ye(e) === "caption";
}
function va(e) {
  return le(e) && ye(e) === "input";
}
function Xf(e) {
  return le(e) && ye(e) === "optgroup";
}
function Qf(e) {
  return le(e) && ye(e) === "select";
}
function Jf(e) {
  return le(e) && ye(e) === "table";
}
function Zf(e) {
  return le(e) && ye(e) === "textarea";
}
function ep(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument, r = t.defaultView;
  if (r === null)
    throw new TypeError("no window available");
  return r;
}
function tp(e) {
  return le(e) && ye(e) === "fieldset";
}
function rp(e) {
  return le(e) && ye(e) === "legend";
}
function np(e) {
  return le(e) && ye(e) === "slot";
}
function op(e) {
  return le(e) && e.ownerSVGElement !== void 0;
}
function ap(e) {
  return le(e) && ye(e) === "svg";
}
function ip(e) {
  return op(e) && ye(e) === "title";
}
function ga(e, t) {
  if (le(e) && e.hasAttribute(t)) {
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
function et(e, t) {
  return le(e) ? t.indexOf(Kf(e)) !== -1 : !1;
}
function lp(e) {
  return e.trim().replace(/\s\s+/g, " ");
}
function up(e, t) {
  if (!le(e))
    return !1;
  if (e.hasAttribute("hidden") || e.getAttribute("aria-hidden") === "true")
    return !0;
  var r = t(e);
  return r.getPropertyValue("display") === "none" || r.getPropertyValue("visibility") === "hidden";
}
function sp(e) {
  return et(e, ["button", "combobox", "listbox", "textbox"]) || Dc(e, "range");
}
function Dc(e, t) {
  if (!le(e))
    return !1;
  switch (t) {
    case "range":
      return et(e, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(t, "'. This is likely a bug :("));
  }
}
function rl(e, t) {
  var r = Le(e.querySelectorAll(t));
  return ga(e, "aria-owns").forEach(function(n) {
    r.push.apply(r, Le(n.querySelectorAll(t)));
  }), r;
}
function cp(e) {
  return Qf(e) ? e.selectedOptions || rl(e, "[selected]") : rl(e, '[aria-selected="true"]');
}
function dp(e) {
  return et(e, ["none", "presentation"]);
}
function fp(e) {
  return kc(e);
}
function pp(e) {
  return et(e, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}
function mp(e) {
  return !1;
}
function vp(e) {
  return va(e) || Zf(e) ? e.value : e.textContent || "";
}
function nl(e) {
  var t = e.getPropertyValue("content");
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : "";
}
function Nc(e) {
  var t = ye(e);
  return t === "button" || t === "input" && e.getAttribute("type") !== "hidden" || t === "meter" || t === "output" || t === "progress" || t === "select" || t === "textarea";
}
function Lc(e) {
  if (Nc(e))
    return e;
  var t = null;
  return e.childNodes.forEach(function(r) {
    if (t === null && le(r)) {
      var n = Lc(r);
      n !== null && (t = n);
    }
  }), t;
}
function bp(e) {
  if (e.control !== void 0)
    return e.control;
  var t = e.getAttribute("for");
  return t !== null ? e.ownerDocument.getElementById(t) : Lc(e);
}
function hp(e) {
  var t = e.labels;
  if (t === null)
    return t;
  if (t !== void 0)
    return Le(t);
  if (!Nc(e))
    return null;
  var r = e.ownerDocument;
  return Le(r.querySelectorAll("label")).filter(function(n) {
    return bp(n) === e;
  });
}
function yp(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? Le(e.childNodes) : t;
}
function Bc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = new Hf(), n = ep(e), o = t.compute, a = o === void 0 ? "name" : o, i = t.computedStyleSupportsPseudoElements, l = i === void 0 ? t.getComputedStyle !== void 0 : i, u = t.getComputedStyle, s = u === void 0 ? n.getComputedStyle.bind(n) : u, d = t.hidden, f = d === void 0 ? !1 : d;
  function c(p, w) {
    var _ = "";
    if (le(p) && l) {
      var P = s(p, "::before"), q = nl(P);
      _ = "".concat(q, " ").concat(_);
    }
    var b = np(p) ? yp(p) : Le(p.childNodes).concat(ga(p, "aria-owns"));
    if (b.forEach(function(A) {
      var L = T(A, {
        isEmbeddedInLabel: w.isEmbeddedInLabel,
        isReferenced: !1,
        recursion: !0
      }), F = le(A) ? s(A).getPropertyValue("display") : "inline", U = F !== "inline" ? " " : "";
      _ += "".concat(U).concat(L).concat(U);
    }), le(p) && l) {
      var y = s(p, "::after"), E = nl(y);
      _ = "".concat(_, " ").concat(E);
    }
    return _.trim();
  }
  function h(p, w) {
    var _ = p.getAttributeNode(w);
    return _ !== null && !r.has(_) && _.value.trim() !== "" ? (r.add(_), _.value) : null;
  }
  function g(p) {
    return le(p) ? h(p, "title") : null;
  }
  function R(p) {
    if (!le(p))
      return null;
    if (tp(p)) {
      r.add(p);
      for (var w = Le(p.childNodes), _ = 0; _ < w.length; _ += 1) {
        var P = w[_];
        if (rp(P))
          return T(P, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Jf(p)) {
      r.add(p);
      for (var q = Le(p.childNodes), b = 0; b < q.length; b += 1) {
        var y = q[b];
        if (kc(y))
          return T(y, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (ap(p)) {
      r.add(p);
      for (var E = Le(p.childNodes), A = 0; A < E.length; A += 1) {
        var L = E[A];
        if (ip(L))
          return L.textContent;
      }
      return null;
    } else if (ye(p) === "img" || ye(p) === "area") {
      var F = h(p, "alt");
      if (F !== null)
        return F;
    } else if (Xf(p)) {
      var U = h(p, "label");
      if (U !== null)
        return U;
    }
    if (va(p) && (p.type === "button" || p.type === "submit" || p.type === "reset")) {
      var O = h(p, "value");
      if (O !== null)
        return O;
      if (p.type === "submit")
        return "Submit";
      if (p.type === "reset")
        return "Reset";
    }
    var B = hp(p);
    if (B !== null && B.length !== 0)
      return r.add(p), Le(B).map(function(se) {
        return T(se, {
          isEmbeddedInLabel: !0,
          isReferenced: !1,
          recursion: !0
        });
      }).filter(function(se) {
        return se.length > 0;
      }).join(" ");
    if (va(p) && p.type === "image") {
      var V = h(p, "alt");
      if (V !== null)
        return V;
      var re = h(p, "title");
      return re !== null ? re : "Submit Query";
    }
    if (et(p, ["button"])) {
      var G = c(p, {
        isEmbeddedInLabel: !1
      });
      if (G !== "")
        return G;
    }
    return null;
  }
  function T(p, w) {
    if (r.has(p))
      return "";
    if (!f && up(p, s) && !w.isReferenced)
      return r.add(p), "";
    var _ = le(p) ? p.getAttributeNode("aria-labelledby") : null, P = _ !== null && !r.has(_) ? ga(p, "aria-labelledby") : [];
    if (a === "name" && !w.isReferenced && P.length > 0)
      return r.add(_), P.map(function(F) {
        return T(F, {
          isEmbeddedInLabel: w.isEmbeddedInLabel,
          isReferenced: !0,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: !1
        });
      }).join(" ");
    var q = w.recursion && sp(p) && a === "name";
    if (!q) {
      var b = (le(p) && p.getAttribute("aria-label") || "").trim();
      if (b !== "" && a === "name")
        return r.add(p), b;
      if (!dp(p)) {
        var y = R(p);
        if (y !== null)
          return r.add(p), y;
      }
    }
    if (et(p, ["menu"]))
      return r.add(p), "";
    if (q || w.isEmbeddedInLabel || w.isReferenced) {
      if (et(p, ["combobox", "listbox"])) {
        r.add(p);
        var E = cp(p);
        return E.length === 0 ? va(p) ? p.value : "" : Le(E).map(function(F) {
          return T(F, {
            isEmbeddedInLabel: w.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          });
        }).join(" ");
      }
      if (Dc(p, "range"))
        return r.add(p), p.hasAttribute("aria-valuetext") ? p.getAttribute("aria-valuetext") : p.hasAttribute("aria-valuenow") ? p.getAttribute("aria-valuenow") : p.getAttribute("value") || "";
      if (et(p, ["textbox"]))
        return r.add(p), vp(p);
    }
    if (pp(p) || le(p) && w.isReferenced || fp(p) || mp()) {
      var A = c(p, {
        isEmbeddedInLabel: w.isEmbeddedInLabel
      });
      if (A !== "")
        return r.add(p), A;
    }
    if (p.nodeType === p.TEXT_NODE)
      return r.add(p), p.textContent || "";
    if (w.recursion)
      return r.add(p), c(p, {
        isEmbeddedInLabel: w.isEmbeddedInLabel
      });
    var L = g(p);
    return L !== null ? (r.add(p), L) : (r.add(p), "");
  }
  return lp(T(e, {
    isEmbeddedInLabel: !1,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: a === "description",
    recursion: !1
  }));
}
function zo(e) {
  "@babel/helpers - typeof";
  return zo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zo(e);
}
function ol(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ol(Object(r), !0).forEach(function(n) {
      gp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ol(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gp(e, t, r) {
  return t = Rp(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Rp(e) {
  var t = Ep(e, "string");
  return zo(t) === "symbol" ? t : String(t);
}
function Ep(e, t) {
  if (zo(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (zo(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ga(e, "aria-describedby").map(function(o) {
    return Bc(o, al(al({}, t), {}, {
      compute: "description"
    }));
  }).join(" ");
  if (r === "") {
    var n = e.getAttribute("title");
    r = n === null ? "" : n;
  }
  return r;
}
function Cp(e) {
  return et(e, ["caption", "code", "deletion", "emphasis", "generic", "insertion", "paragraph", "presentation", "strong", "subscript", "superscript"]);
}
function ci(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return Cp(e) ? "" : Bc(e, t);
}
var Te = {}, Jt = {}, ia = {}, Zt = {}, il;
function wp() {
  if (il) return Zt;
  il = 1, Object.defineProperty(Zt, "__esModule", {
    value: !0
  }), Zt.default = void 0;
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
  return Zt.default = t, Zt;
}
var ll;
function Jo() {
  if (ll) return ia;
  ll = 1, Object.defineProperty(ia, "__esModule", {
    value: !0
  }), ia.default = n;
  var e = t(wp());
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
  return ia;
}
var ul;
function _p() {
  if (ul) return Jt;
  ul = 1, Object.defineProperty(Jt, "__esModule", {
    value: !0
  }), Jt.default = void 0;
  var e = t(Jo());
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c, h) {
    return a(c) || o(c, h) || l(c, h) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(c, h) {
    var g = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (g != null) {
      var R = [], T = !0, p = !1, w, _;
      try {
        for (g = g.call(c); !(T = (w = g.next()).done) && (R.push(w.value), !(h && R.length === h)); T = !0)
          ;
      } catch (P) {
        p = !0, _ = P;
      } finally {
        try {
          !T && g.return != null && g.return();
        } finally {
          if (p) throw _;
        }
      }
      return R;
    }
  }
  function a(c) {
    if (Array.isArray(c)) return c;
  }
  function i(c, h) {
    var g = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (!g) {
      if (Array.isArray(c) || (g = l(c)) || h) {
        g && (c = g);
        var R = 0, T = function() {
        };
        return { s: T, n: function() {
          return R >= c.length ? { done: !0 } : { done: !1, value: c[R++] };
        }, e: function(q) {
          throw q;
        }, f: T };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, w = !1, _;
    return { s: function() {
      g = g.call(c);
    }, n: function() {
      var q = g.next();
      return p = q.done, q;
    }, e: function(q) {
      w = !0, _ = q;
    }, f: function() {
      try {
        !p && g.return != null && g.return();
      } finally {
        if (w) throw _;
      }
    } };
  }
  function l(c, h) {
    if (c) {
      if (typeof c == "string") return u(c, h);
      var g = Object.prototype.toString.call(c).slice(8, -1);
      if (g === "Object" && c.constructor && (g = c.constructor.name), g === "Map" || g === "Set") return Array.from(c);
      if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return u(c, h);
    }
  }
  function u(c, h) {
    (h == null || h > c.length) && (h = c.length);
    for (var g = 0, R = new Array(h); g < h; g++)
      R[g] = c[g];
    return R;
  }
  var s = [["aria-activedescendant", {
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
  }]], d = {
    entries: function() {
      return s;
    },
    forEach: function(h) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, R = i(s), T;
      try {
        for (R.s(); !(T = R.n()).done; ) {
          var p = r(T.value, 2), w = p[0], _ = p[1];
          h.call(g, _, w, s);
        }
      } catch (P) {
        R.e(P);
      } finally {
        R.f();
      }
    },
    get: function(h) {
      var g = s.find(function(R) {
        return R[0] === h;
      });
      return g && g[1];
    },
    has: function(h) {
      return !!d.get(h);
    },
    keys: function() {
      return s.map(function(h) {
        var g = r(h, 1), R = g[0];
        return R;
      });
    },
    values: function() {
      return s.map(function(h) {
        var g = r(h, 2), R = g[1];
        return R;
      });
    }
  }, f = (0, e.default)(d, d.entries());
  return Jt.default = f, Jt;
}
var er = {}, sl;
function qp() {
  if (sl) return er;
  sl = 1, Object.defineProperty(er, "__esModule", {
    value: !0
  }), er.default = void 0;
  var e = t(Jo());
  function t(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function r(c, h) {
    return a(c) || o(c, h) || l(c, h) || n();
  }
  function n() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function o(c, h) {
    var g = c == null ? null : typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (g != null) {
      var R = [], T = !0, p = !1, w, _;
      try {
        for (g = g.call(c); !(T = (w = g.next()).done) && (R.push(w.value), !(h && R.length === h)); T = !0)
          ;
      } catch (P) {
        p = !0, _ = P;
      } finally {
        try {
          !T && g.return != null && g.return();
        } finally {
          if (p) throw _;
        }
      }
      return R;
    }
  }
  function a(c) {
    if (Array.isArray(c)) return c;
  }
  function i(c, h) {
    var g = typeof Symbol < "u" && c[Symbol.iterator] || c["@@iterator"];
    if (!g) {
      if (Array.isArray(c) || (g = l(c)) || h) {
        g && (c = g);
        var R = 0, T = function() {
        };
        return { s: T, n: function() {
          return R >= c.length ? { done: !0 } : { done: !1, value: c[R++] };
        }, e: function(q) {
          throw q;
        }, f: T };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var p = !0, w = !1, _;
    return { s: function() {
      g = g.call(c);
    }, n: function() {
      var q = g.next();
      return p = q.done, q;
    }, e: function(q) {
      w = !0, _ = q;
    }, f: function() {
      try {
        !p && g.return != null && g.return();
      } finally {
        if (w) throw _;
      }
    } };
  }
  function l(c, h) {
    if (c) {
      if (typeof c == "string") return u(c, h);
      var g = Object.prototype.toString.call(c).slice(8, -1);
      if (g === "Object" && c.constructor && (g = c.constructor.name), g === "Map" || g === "Set") return Array.from(c);
      if (g === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(g)) return u(c, h);
    }
  }
  function u(c, h) {
    (h == null || h > c.length) && (h = c.length);
    for (var g = 0, R = new Array(h); g < h; g++)
      R[g] = c[g];
    return R;
  }
  var s = [["a", {
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
  }]], d = {
    entries: function() {
      return s;
    },
    forEach: function(h) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, R = i(s), T;
      try {
        for (R.s(); !(T = R.n()).done; ) {
          var p = r(T.value, 2), w = p[0], _ = p[1];
          h.call(g, _, w, s);
        }
      } catch (P) {
        R.e(P);
      } finally {
        R.f();
      }
    },
    get: function(h) {
      var g = s.find(function(R) {
        return R[0] === h;
      });
      return g && g[1];
    },
    has: function(h) {
      return !!d.get(h);
    },
    keys: function() {
      return s.map(function(h) {
        var g = r(h, 1), R = g[0];
        return R;
      });
    },
    values: function() {
      return s.map(function(h) {
        var g = r(h, 2), R = g[1];
        return R;
      });
    }
  }, f = (0, e.default)(d, d.entries());
  return er.default = f, er;
}
var tr = {}, rr = {}, nr = {}, cl;
function Pp() {
  if (cl) return nr;
  cl = 1, Object.defineProperty(nr, "__esModule", {
    value: !0
  }), nr.default = void 0;
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
  return nr.default = t, nr;
}
var or = {}, dl;
function Tp() {
  if (dl) return or;
  dl = 1, Object.defineProperty(or, "__esModule", {
    value: !0
  }), or.default = void 0;
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
  return or.default = t, or;
}
var ar = {}, fl;
function xp() {
  if (fl) return ar;
  fl = 1, Object.defineProperty(ar, "__esModule", {
    value: !0
  }), ar.default = void 0;
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
  return ar.default = t, ar;
}
var ir = {}, pl;
function Sp() {
  if (pl) return ir;
  pl = 1, Object.defineProperty(ir, "__esModule", {
    value: !0
  }), ir.default = void 0;
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
  return ir.default = t, ir;
}
var lr = {}, ml;
function Op() {
  if (ml) return lr;
  ml = 1, Object.defineProperty(lr, "__esModule", {
    value: !0
  }), lr.default = void 0;
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
  return lr.default = t, lr;
}
var ur = {}, vl;
function Mp() {
  if (vl) return ur;
  vl = 1, Object.defineProperty(ur, "__esModule", {
    value: !0
  }), ur.default = void 0;
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
  return ur.default = t, ur;
}
var sr = {}, bl;
function Ap() {
  if (bl) return sr;
  bl = 1, Object.defineProperty(sr, "__esModule", {
    value: !0
  }), sr.default = void 0;
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
  return sr.default = t, sr;
}
var cr = {}, hl;
function Ip() {
  if (hl) return cr;
  hl = 1, Object.defineProperty(cr, "__esModule", {
    value: !0
  }), cr.default = void 0;
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
  return cr.default = t, cr;
}
var dr = {}, yl;
function kp() {
  if (yl) return dr;
  yl = 1, Object.defineProperty(dr, "__esModule", {
    value: !0
  }), dr.default = void 0;
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
  return dr.default = t, dr;
}
var fr = {}, gl;
function Dp() {
  if (gl) return fr;
  gl = 1, Object.defineProperty(fr, "__esModule", {
    value: !0
  }), fr.default = void 0;
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
  return fr.default = t, fr;
}
var pr = {}, Rl;
function Np() {
  if (Rl) return pr;
  Rl = 1, Object.defineProperty(pr, "__esModule", {
    value: !0
  }), pr.default = void 0;
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
  return pr.default = t, pr;
}
var mr = {}, El;
function Lp() {
  if (El) return mr;
  El = 1, Object.defineProperty(mr, "__esModule", {
    value: !0
  }), mr.default = void 0;
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
  return mr.default = t, mr;
}
var Cl;
function Bp() {
  if (Cl) return rr;
  Cl = 1, Object.defineProperty(rr, "__esModule", {
    value: !0
  }), rr.default = void 0;
  var e = c(Pp()), t = c(Tp()), r = c(xp()), n = c(Sp()), o = c(Op()), a = c(Mp()), i = c(Ap()), l = c(Ip()), u = c(kp()), s = c(Dp()), d = c(Np()), f = c(Lp());
  function c(R) {
    return R && R.__esModule ? R : { default: R };
  }
  var h = [["command", e.default], ["composite", t.default], ["input", r.default], ["landmark", n.default], ["range", o.default], ["roletype", a.default], ["section", i.default], ["sectionhead", l.default], ["select", u.default], ["structure", s.default], ["widget", d.default], ["window", f.default]], g = h;
  return rr.default = g, rr;
}
var vr = {}, br = {}, wl;
function Fp() {
  if (wl) return br;
  wl = 1, Object.defineProperty(br, "__esModule", {
    value: !0
  }), br.default = void 0;
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
  return br.default = t, br;
}
var hr = {}, _l;
function Up() {
  if (_l) return hr;
  _l = 1, Object.defineProperty(hr, "__esModule", {
    value: !0
  }), hr.default = void 0;
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
  return hr.default = t, hr;
}
var yr = {}, ql;
function jp() {
  if (ql) return yr;
  ql = 1, Object.defineProperty(yr, "__esModule", {
    value: !0
  }), yr.default = void 0;
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
  return yr.default = t, yr;
}
var gr = {}, Pl;
function $p() {
  if (Pl) return gr;
  Pl = 1, Object.defineProperty(gr, "__esModule", {
    value: !0
  }), gr.default = void 0;
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
  return gr.default = t, gr;
}
var Rr = {}, Tl;
function Hp() {
  if (Tl) return Rr;
  Tl = 1, Object.defineProperty(Rr, "__esModule", {
    value: !0
  }), Rr.default = void 0;
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
  return Rr.default = t, Rr;
}
var Er = {}, xl;
function Vp() {
  if (xl) return Er;
  xl = 1, Object.defineProperty(Er, "__esModule", {
    value: !0
  }), Er.default = void 0;
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
  return Er.default = t, Er;
}
var Cr = {}, Sl;
function Wp() {
  if (Sl) return Cr;
  Sl = 1, Object.defineProperty(Cr, "__esModule", {
    value: !0
  }), Cr.default = void 0;
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
  return Cr.default = t, Cr;
}
var wr = {}, Ol;
function zp() {
  if (Ol) return wr;
  Ol = 1, Object.defineProperty(wr, "__esModule", {
    value: !0
  }), wr.default = void 0;
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
  return wr.default = t, wr;
}
var _r = {}, Ml;
function Kp() {
  if (Ml) return _r;
  Ml = 1, Object.defineProperty(_r, "__esModule", {
    value: !0
  }), _r.default = void 0;
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
  return _r.default = t, _r;
}
var qr = {}, Al;
function Gp() {
  if (Al) return qr;
  Al = 1, Object.defineProperty(qr, "__esModule", {
    value: !0
  }), qr.default = void 0;
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
  return qr.default = t, qr;
}
var Pr = {}, Il;
function Yp() {
  if (Il) return Pr;
  Il = 1, Object.defineProperty(Pr, "__esModule", {
    value: !0
  }), Pr.default = void 0;
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
  return Pr.default = t, Pr;
}
var Tr = {}, kl;
function Xp() {
  if (kl) return Tr;
  kl = 1, Object.defineProperty(Tr, "__esModule", {
    value: !0
  }), Tr.default = void 0;
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
  return Tr.default = t, Tr;
}
var xr = {}, Dl;
function Qp() {
  if (Dl) return xr;
  Dl = 1, Object.defineProperty(xr, "__esModule", {
    value: !0
  }), xr.default = void 0;
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
  return xr.default = t, xr;
}
var Sr = {}, Nl;
function Jp() {
  if (Nl) return Sr;
  Nl = 1, Object.defineProperty(Sr, "__esModule", {
    value: !0
  }), Sr.default = void 0;
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
  return Sr.default = t, Sr;
}
var Or = {}, Ll;
function Zp() {
  if (Ll) return Or;
  Ll = 1, Object.defineProperty(Or, "__esModule", {
    value: !0
  }), Or.default = void 0;
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
  return Or.default = t, Or;
}
var Mr = {}, Bl;
function em() {
  if (Bl) return Mr;
  Bl = 1, Object.defineProperty(Mr, "__esModule", {
    value: !0
  }), Mr.default = void 0;
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
  return Mr.default = t, Mr;
}
var Ar = {}, Fl;
function tm() {
  if (Fl) return Ar;
  Fl = 1, Object.defineProperty(Ar, "__esModule", {
    value: !0
  }), Ar.default = void 0;
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
  return Ar.default = t, Ar;
}
var Ir = {}, Ul;
function rm() {
  if (Ul) return Ir;
  Ul = 1, Object.defineProperty(Ir, "__esModule", {
    value: !0
  }), Ir.default = void 0;
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
  return Ir.default = t, Ir;
}
var kr = {}, jl;
function nm() {
  if (jl) return kr;
  jl = 1, Object.defineProperty(kr, "__esModule", {
    value: !0
  }), kr.default = void 0;
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
  return kr.default = t, kr;
}
var Dr = {}, $l;
function om() {
  if ($l) return Dr;
  $l = 1, Object.defineProperty(Dr, "__esModule", {
    value: !0
  }), Dr.default = void 0;
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
  return Dr.default = t, Dr;
}
var Nr = {}, Hl;
function am() {
  if (Hl) return Nr;
  Hl = 1, Object.defineProperty(Nr, "__esModule", {
    value: !0
  }), Nr.default = void 0;
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
  return Nr.default = t, Nr;
}
var Lr = {}, Vl;
function im() {
  if (Vl) return Lr;
  Vl = 1, Object.defineProperty(Lr, "__esModule", {
    value: !0
  }), Lr.default = void 0;
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
  return Lr.default = t, Lr;
}
var Br = {}, Wl;
function lm() {
  if (Wl) return Br;
  Wl = 1, Object.defineProperty(Br, "__esModule", {
    value: !0
  }), Br.default = void 0;
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
  return Br.default = t, Br;
}
var Fr = {}, zl;
function um() {
  if (zl) return Fr;
  zl = 1, Object.defineProperty(Fr, "__esModule", {
    value: !0
  }), Fr.default = void 0;
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
  return Fr.default = t, Fr;
}
var Ur = {}, Kl;
function sm() {
  if (Kl) return Ur;
  Kl = 1, Object.defineProperty(Ur, "__esModule", {
    value: !0
  }), Ur.default = void 0;
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
  return Ur.default = t, Ur;
}
var jr = {}, Gl;
function cm() {
  if (Gl) return jr;
  Gl = 1, Object.defineProperty(jr, "__esModule", {
    value: !0
  }), jr.default = void 0;
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
  return jr.default = t, jr;
}
var $r = {}, Yl;
function dm() {
  if (Yl) return $r;
  Yl = 1, Object.defineProperty($r, "__esModule", {
    value: !0
  }), $r.default = void 0;
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
  return $r.default = t, $r;
}
var Hr = {}, Xl;
function fm() {
  if (Xl) return Hr;
  Xl = 1, Object.defineProperty(Hr, "__esModule", {
    value: !0
  }), Hr.default = void 0;
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
  return Hr.default = t, Hr;
}
var Vr = {}, Ql;
function pm() {
  if (Ql) return Vr;
  Ql = 1, Object.defineProperty(Vr, "__esModule", {
    value: !0
  }), Vr.default = void 0;
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
  return Vr.default = t, Vr;
}
var Wr = {}, Jl;
function mm() {
  if (Jl) return Wr;
  Jl = 1, Object.defineProperty(Wr, "__esModule", {
    value: !0
  }), Wr.default = void 0;
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
  return Wr.default = t, Wr;
}
var zr = {}, Zl;
function vm() {
  if (Zl) return zr;
  Zl = 1, Object.defineProperty(zr, "__esModule", {
    value: !0
  }), zr.default = void 0;
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
  return zr.default = t, zr;
}
var Kr = {}, eu;
function bm() {
  if (eu) return Kr;
  eu = 1, Object.defineProperty(Kr, "__esModule", {
    value: !0
  }), Kr.default = void 0;
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
  return Kr.default = t, Kr;
}
var Gr = {}, tu;
function hm() {
  if (tu) return Gr;
  tu = 1, Object.defineProperty(Gr, "__esModule", {
    value: !0
  }), Gr.default = void 0;
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
  return Gr.default = t, Gr;
}
var Yr = {}, ru;
function ym() {
  if (ru) return Yr;
  ru = 1, Object.defineProperty(Yr, "__esModule", {
    value: !0
  }), Yr.default = void 0;
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
  return Yr.default = t, Yr;
}
var Xr = {}, nu;
function gm() {
  if (nu) return Xr;
  nu = 1, Object.defineProperty(Xr, "__esModule", {
    value: !0
  }), Xr.default = void 0;
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
  return Xr.default = t, Xr;
}
var Qr = {}, ou;
function Rm() {
  if (ou) return Qr;
  ou = 1, Object.defineProperty(Qr, "__esModule", {
    value: !0
  }), Qr.default = void 0;
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
  return Qr.default = t, Qr;
}
var Jr = {}, au;
function Em() {
  if (au) return Jr;
  au = 1, Object.defineProperty(Jr, "__esModule", {
    value: !0
  }), Jr.default = void 0;
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
  return Jr.default = t, Jr;
}
var Zr = {}, iu;
function Cm() {
  if (iu) return Zr;
  iu = 1, Object.defineProperty(Zr, "__esModule", {
    value: !0
  }), Zr.default = void 0;
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
  return Zr.default = t, Zr;
}
var en = {}, lu;
function wm() {
  if (lu) return en;
  lu = 1, Object.defineProperty(en, "__esModule", {
    value: !0
  }), en.default = void 0;
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
  return en.default = t, en;
}
var tn = {}, uu;
function _m() {
  if (uu) return tn;
  uu = 1, Object.defineProperty(tn, "__esModule", {
    value: !0
  }), tn.default = void 0;
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
  return tn.default = t, tn;
}
var rn = {}, su;
function qm() {
  if (su) return rn;
  su = 1, Object.defineProperty(rn, "__esModule", {
    value: !0
  }), rn.default = void 0;
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
  return rn.default = t, rn;
}
var nn = {}, cu;
function Pm() {
  if (cu) return nn;
  cu = 1, Object.defineProperty(nn, "__esModule", {
    value: !0
  }), nn.default = void 0;
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
  return nn.default = t, nn;
}
var on = {}, du;
function Tm() {
  if (du) return on;
  du = 1, Object.defineProperty(on, "__esModule", {
    value: !0
  }), on.default = void 0;
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
  return on.default = t, on;
}
var an = {}, fu;
function xm() {
  if (fu) return an;
  fu = 1, Object.defineProperty(an, "__esModule", {
    value: !0
  }), an.default = void 0;
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
  return an.default = t, an;
}
var ln = {}, pu;
function Sm() {
  if (pu) return ln;
  pu = 1, Object.defineProperty(ln, "__esModule", {
    value: !0
  }), ln.default = void 0;
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
  return ln.default = t, ln;
}
var un = {}, mu;
function Om() {
  if (mu) return un;
  mu = 1, Object.defineProperty(un, "__esModule", {
    value: !0
  }), un.default = void 0;
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
  return un.default = t, un;
}
var sn = {}, vu;
function Mm() {
  if (vu) return sn;
  vu = 1, Object.defineProperty(sn, "__esModule", {
    value: !0
  }), sn.default = void 0;
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
  return sn.default = t, sn;
}
var cn = {}, bu;
function Am() {
  if (bu) return cn;
  bu = 1, Object.defineProperty(cn, "__esModule", {
    value: !0
  }), cn.default = void 0;
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
  return cn.default = t, cn;
}
var dn = {}, hu;
function Im() {
  if (hu) return dn;
  hu = 1, Object.defineProperty(dn, "__esModule", {
    value: !0
  }), dn.default = void 0;
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
  return dn.default = t, dn;
}
var fn = {}, yu;
function km() {
  if (yu) return fn;
  yu = 1, Object.defineProperty(fn, "__esModule", {
    value: !0
  }), fn.default = void 0;
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
  return fn.default = t, fn;
}
var pn = {}, gu;
function Dm() {
  if (gu) return pn;
  gu = 1, Object.defineProperty(pn, "__esModule", {
    value: !0
  }), pn.default = void 0;
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
  return pn.default = t, pn;
}
var mn = {}, Ru;
function Nm() {
  if (Ru) return mn;
  Ru = 1, Object.defineProperty(mn, "__esModule", {
    value: !0
  }), mn.default = void 0;
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
  return mn.default = t, mn;
}
var vn = {}, Eu;
function Lm() {
  if (Eu) return vn;
  Eu = 1, Object.defineProperty(vn, "__esModule", {
    value: !0
  }), vn.default = void 0;
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
  return vn.default = t, vn;
}
var bn = {}, Cu;
function Bm() {
  if (Cu) return bn;
  Cu = 1, Object.defineProperty(bn, "__esModule", {
    value: !0
  }), bn.default = void 0;
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
  return bn.default = t, bn;
}
var hn = {}, wu;
function Fm() {
  if (wu) return hn;
  wu = 1, Object.defineProperty(hn, "__esModule", {
    value: !0
  }), hn.default = void 0;
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
  return hn.default = t, hn;
}
var yn = {}, _u;
function Um() {
  if (_u) return yn;
  _u = 1, Object.defineProperty(yn, "__esModule", {
    value: !0
  }), yn.default = void 0;
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
  return yn.default = t, yn;
}
var gn = {}, qu;
function jm() {
  if (qu) return gn;
  qu = 1, Object.defineProperty(gn, "__esModule", {
    value: !0
  }), gn.default = void 0;
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
  return gn.default = t, gn;
}
var Rn = {}, Pu;
function $m() {
  if (Pu) return Rn;
  Pu = 1, Object.defineProperty(Rn, "__esModule", {
    value: !0
  }), Rn.default = void 0;
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
  return Rn.default = t, Rn;
}
var En = {}, Tu;
function Hm() {
  if (Tu) return En;
  Tu = 1, Object.defineProperty(En, "__esModule", {
    value: !0
  }), En.default = void 0;
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
  return En.default = t, En;
}
var Cn = {}, xu;
function Vm() {
  if (xu) return Cn;
  xu = 1, Object.defineProperty(Cn, "__esModule", {
    value: !0
  }), Cn.default = void 0;
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
  return Cn.default = t, Cn;
}
var wn = {}, Su;
function Wm() {
  if (Su) return wn;
  Su = 1, Object.defineProperty(wn, "__esModule", {
    value: !0
  }), wn.default = void 0;
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
  return wn.default = t, wn;
}
var _n = {}, Ou;
function zm() {
  if (Ou) return _n;
  Ou = 1, Object.defineProperty(_n, "__esModule", {
    value: !0
  }), _n.default = void 0;
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
  return _n.default = t, _n;
}
var qn = {}, Mu;
function Km() {
  if (Mu) return qn;
  Mu = 1, Object.defineProperty(qn, "__esModule", {
    value: !0
  }), qn.default = void 0;
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
  return qn.default = t, qn;
}
var Pn = {}, Au;
function Gm() {
  if (Au) return Pn;
  Au = 1, Object.defineProperty(Pn, "__esModule", {
    value: !0
  }), Pn.default = void 0;
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
  return Pn.default = t, Pn;
}
var Tn = {}, Iu;
function Ym() {
  if (Iu) return Tn;
  Iu = 1, Object.defineProperty(Tn, "__esModule", {
    value: !0
  }), Tn.default = void 0;
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
  return Tn.default = t, Tn;
}
var xn = {}, ku;
function Xm() {
  if (ku) return xn;
  ku = 1, Object.defineProperty(xn, "__esModule", {
    value: !0
  }), xn.default = void 0;
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
  return xn.default = t, xn;
}
var Sn = {}, Du;
function Qm() {
  if (Du) return Sn;
  Du = 1, Object.defineProperty(Sn, "__esModule", {
    value: !0
  }), Sn.default = void 0;
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
  return Sn.default = t, Sn;
}
var On = {}, Nu;
function Jm() {
  if (Nu) return On;
  Nu = 1, Object.defineProperty(On, "__esModule", {
    value: !0
  }), On.default = void 0;
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
  return On.default = t, On;
}
var Mn = {}, Lu;
function Zm() {
  if (Lu) return Mn;
  Lu = 1, Object.defineProperty(Mn, "__esModule", {
    value: !0
  }), Mn.default = void 0;
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
  return Mn.default = t, Mn;
}
var An = {}, Bu;
function ev() {
  if (Bu) return An;
  Bu = 1, Object.defineProperty(An, "__esModule", {
    value: !0
  }), An.default = void 0;
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
  return An.default = t, An;
}
var In = {}, Fu;
function tv() {
  if (Fu) return In;
  Fu = 1, Object.defineProperty(In, "__esModule", {
    value: !0
  }), In.default = void 0;
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
  return In.default = t, In;
}
var kn = {}, Uu;
function rv() {
  if (Uu) return kn;
  Uu = 1, Object.defineProperty(kn, "__esModule", {
    value: !0
  }), kn.default = void 0;
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
  return kn.default = t, kn;
}
var Dn = {}, ju;
function nv() {
  if (ju) return Dn;
  ju = 1, Object.defineProperty(Dn, "__esModule", {
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
  return Dn.default = t, Dn;
}
var Nn = {}, $u;
function ov() {
  if ($u) return Nn;
  $u = 1, Object.defineProperty(Nn, "__esModule", {
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
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [["roletype", "structure", "section"]]
  }, t = e;
  return Nn.default = t, Nn;
}
var Ln = {}, Hu;
function av() {
  if (Hu) return Ln;
  Hu = 1, Object.defineProperty(Ln, "__esModule", {
    value: !0
  }), Ln.default = void 0;
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
  return Ln.default = t, Ln;
}
var Bn = {}, Vu;
function iv() {
  if (Vu) return Bn;
  Vu = 1, Object.defineProperty(Bn, "__esModule", {
    value: !0
  }), Bn.default = void 0;
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
  return Bn.default = t, Bn;
}
var Fn = {}, Wu;
function lv() {
  if (Wu) return Fn;
  Wu = 1, Object.defineProperty(Fn, "__esModule", {
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
  return Fn.default = t, Fn;
}
var Un = {}, zu;
function uv() {
  if (zu) return Un;
  zu = 1, Object.defineProperty(Un, "__esModule", {
    value: !0
  }), Un.default = void 0;
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
  return Un.default = t, Un;
}
var jn = {}, Ku;
function sv() {
  if (Ku) return jn;
  Ku = 1, Object.defineProperty(jn, "__esModule", {
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
  return jn.default = t, jn;
}
var $n = {}, Gu;
function cv() {
  if (Gu) return $n;
  Gu = 1, Object.defineProperty($n, "__esModule", {
    value: !0
  }), $n.default = void 0;
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
  return $n.default = t, $n;
}
var Hn = {}, Yu;
function dv() {
  if (Yu) return Hn;
  Yu = 1, Object.defineProperty(Hn, "__esModule", {
    value: !0
  }), Hn.default = void 0;
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
  return Hn.default = t, Hn;
}
var Vn = {}, Xu;
function fv() {
  if (Xu) return Vn;
  Xu = 1, Object.defineProperty(Vn, "__esModule", {
    value: !0
  }), Vn.default = void 0;
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
  return Vn.default = t, Vn;
}
var Wn = {}, Qu;
function pv() {
  if (Qu) return Wn;
  Qu = 1, Object.defineProperty(Wn, "__esModule", {
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
  return Wn.default = t, Wn;
}
var Ju;
function mv() {
  if (Ju) return vr;
  Ju = 1, Object.defineProperty(vr, "__esModule", {
    value: !0
  }), vr.default = void 0;
  var e = N(Fp()), t = N(Up()), r = N(jp()), n = N($p()), o = N(Hp()), a = N(Vp()), i = N(Wp()), l = N(zp()), u = N(Kp()), s = N(Gp()), d = N(Yp()), f = N(Xp()), c = N(Qp()), h = N(Jp()), g = N(Zp()), R = N(em()), T = N(tm()), p = N(rm()), w = N(nm()), _ = N(om()), P = N(am()), q = N(im()), b = N(lm()), y = N(um()), E = N(sm()), A = N(cm()), L = N(dm()), F = N(fm()), U = N(pm()), O = N(mm()), B = N(vm()), V = N(bm()), re = N(hm()), G = N(ym()), se = N(gm()), me = N(Rm()), _e = N(Em()), Se = N(Cm()), Oe = N(wm()), $ = N(_m()), we = N(qm()), ve = N(Pm()), Re = N(Tm()), $e = N(xm()), He = N(Sm()), C = N(Om()), j = N(Mm()), D = N(Am()), X = N(Im()), z = N(km()), Z = N(Dm()), ue = N(Nm()), ie = N(Lm()), be = N(Bm()), Ne = N(Fm()), at = N(Um()), Tt = N(jm()), xt = N($m()), St = N(Hm()), Ot = N(Vm()), Mt = N(Wm()), Gt = N(zm()), mt = N(Km()), At = N(Gm()), Ve = N(Ym()), Yt = N(Xm()), m = N(Qm()), I = N(Jm()), M = N(Zm()), H = N(ev()), ee = N(tv()), te = N(rv()), Y = N(nv()), ne = N(ov()), Ee = N(av()), qe = N(iv()), Xt = N(lv()), Ma = N(uv()), Aa = N(sv()), It = N(cv()), Ia = N(dv()), Qt = N(fv()), ta = N(pv());
  function N(vt) {
    return vt && vt.__esModule ? vt : { default: vt };
  }
  var ra = [["alert", e.default], ["alertdialog", t.default], ["application", r.default], ["article", n.default], ["banner", o.default], ["blockquote", a.default], ["button", i.default], ["caption", l.default], ["cell", u.default], ["checkbox", s.default], ["code", d.default], ["columnheader", f.default], ["combobox", c.default], ["complementary", h.default], ["contentinfo", g.default], ["definition", R.default], ["deletion", T.default], ["dialog", p.default], ["directory", w.default], ["document", _.default], ["emphasis", P.default], ["feed", q.default], ["figure", b.default], ["form", y.default], ["generic", E.default], ["grid", A.default], ["gridcell", L.default], ["group", F.default], ["heading", U.default], ["img", O.default], ["insertion", B.default], ["link", V.default], ["list", re.default], ["listbox", G.default], ["listitem", se.default], ["log", me.default], ["main", _e.default], ["mark", Se.default], ["marquee", Oe.default], ["math", $.default], ["menu", we.default], ["menubar", ve.default], ["menuitem", Re.default], ["menuitemcheckbox", $e.default], ["menuitemradio", He.default], ["meter", C.default], ["navigation", j.default], ["none", D.default], ["note", X.default], ["option", z.default], ["paragraph", Z.default], ["presentation", ue.default], ["progressbar", ie.default], ["radio", be.default], ["radiogroup", Ne.default], ["region", at.default], ["row", Tt.default], ["rowgroup", xt.default], ["rowheader", St.default], ["scrollbar", Ot.default], ["search", Mt.default], ["searchbox", Gt.default], ["separator", mt.default], ["slider", At.default], ["spinbutton", Ve.default], ["status", Yt.default], ["strong", m.default], ["subscript", I.default], ["superscript", M.default], ["switch", H.default], ["tab", ee.default], ["table", te.default], ["tablist", Y.default], ["tabpanel", ne.default], ["term", Ee.default], ["textbox", qe.default], ["time", Xt.default], ["timer", Ma.default], ["toolbar", Aa.default], ["tooltip", It.default], ["tree", Ia.default], ["treegrid", Qt.default], ["treeitem", ta.default]], ka = ra;
  return vr.default = ka, vr;
}
var zn = {}, Kn = {}, Zu;
function vv() {
  if (Zu) return Kn;
  Zu = 1, Object.defineProperty(Kn, "__esModule", {
    value: !0
  }), Kn.default = void 0;
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
  return Kn.default = t, Kn;
}
var Gn = {}, es;
function bv() {
  if (es) return Gn;
  es = 1, Object.defineProperty(Gn, "__esModule", {
    value: !0
  }), Gn.default = void 0;
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
  return Gn.default = t, Gn;
}
var Yn = {}, ts;
function hv() {
  if (ts) return Yn;
  ts = 1, Object.defineProperty(Yn, "__esModule", {
    value: !0
  }), Yn.default = void 0;
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
  return Yn.default = t, Yn;
}
var Xn = {}, rs;
function yv() {
  if (rs) return Xn;
  rs = 1, Object.defineProperty(Xn, "__esModule", {
    value: !0
  }), Xn.default = void 0;
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
  return Xn.default = t, Xn;
}
var Qn = {}, ns;
function gv() {
  if (ns) return Qn;
  ns = 1, Object.defineProperty(Qn, "__esModule", {
    value: !0
  }), Qn.default = void 0;
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
  return Qn.default = t, Qn;
}
var Jn = {}, os;
function Rv() {
  if (os) return Jn;
  os = 1, Object.defineProperty(Jn, "__esModule", {
    value: !0
  }), Jn.default = void 0;
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
  return Jn.default = t, Jn;
}
var Zn = {}, as;
function Ev() {
  if (as) return Zn;
  as = 1, Object.defineProperty(Zn, "__esModule", {
    value: !0
  }), Zn.default = void 0;
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
  return Zn.default = t, Zn;
}
var eo = {}, is;
function Cv() {
  if (is) return eo;
  is = 1, Object.defineProperty(eo, "__esModule", {
    value: !0
  }), eo.default = void 0;
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
  return eo.default = t, eo;
}
var to = {}, ls;
function wv() {
  if (ls) return to;
  ls = 1, Object.defineProperty(to, "__esModule", {
    value: !0
  }), to.default = void 0;
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
  return to.default = t, to;
}
var ro = {}, us;
function _v() {
  if (us) return ro;
  us = 1, Object.defineProperty(ro, "__esModule", {
    value: !0
  }), ro.default = void 0;
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
  return ro.default = t, ro;
}
var no = {}, ss;
function qv() {
  if (ss) return no;
  ss = 1, Object.defineProperty(no, "__esModule", {
    value: !0
  }), no.default = void 0;
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
  return no.default = t, no;
}
var oo = {}, cs;
function Pv() {
  if (cs) return oo;
  cs = 1, Object.defineProperty(oo, "__esModule", {
    value: !0
  }), oo.default = void 0;
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
  return oo.default = t, oo;
}
var ao = {}, ds;
function Tv() {
  if (ds) return ao;
  ds = 1, Object.defineProperty(ao, "__esModule", {
    value: !0
  }), ao.default = void 0;
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
  return ao.default = t, ao;
}
var io = {}, fs;
function xv() {
  if (fs) return io;
  fs = 1, Object.defineProperty(io, "__esModule", {
    value: !0
  }), io.default = void 0;
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
  return io.default = t, io;
}
var lo = {}, ps;
function Sv() {
  if (ps) return lo;
  ps = 1, Object.defineProperty(lo, "__esModule", {
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
  return lo.default = t, lo;
}
var uo = {}, ms;
function Ov() {
  if (ms) return uo;
  ms = 1, Object.defineProperty(uo, "__esModule", {
    value: !0
  }), uo.default = void 0;
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
  return uo.default = t, uo;
}
var so = {}, vs;
function Mv() {
  if (vs) return so;
  vs = 1, Object.defineProperty(so, "__esModule", {
    value: !0
  }), so.default = void 0;
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
  return so.default = t, so;
}
var co = {}, bs;
function Av() {
  if (bs) return co;
  bs = 1, Object.defineProperty(co, "__esModule", {
    value: !0
  }), co.default = void 0;
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
  return co.default = t, co;
}
var fo = {}, hs;
function Iv() {
  if (hs) return fo;
  hs = 1, Object.defineProperty(fo, "__esModule", {
    value: !0
  }), fo.default = void 0;
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
  return fo.default = t, fo;
}
var po = {}, ys;
function kv() {
  if (ys) return po;
  ys = 1, Object.defineProperty(po, "__esModule", {
    value: !0
  }), po.default = void 0;
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
  return po.default = t, po;
}
var mo = {}, gs;
function Dv() {
  if (gs) return mo;
  gs = 1, Object.defineProperty(mo, "__esModule", {
    value: !0
  }), mo.default = void 0;
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
  return mo.default = t, mo;
}
var vo = {}, Rs;
function Nv() {
  if (Rs) return vo;
  Rs = 1, Object.defineProperty(vo, "__esModule", {
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
  return vo.default = t, vo;
}
var bo = {}, Es;
function Lv() {
  if (Es) return bo;
  Es = 1, Object.defineProperty(bo, "__esModule", {
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
  return bo.default = t, bo;
}
var ho = {}, Cs;
function Bv() {
  if (Cs) return ho;
  Cs = 1, Object.defineProperty(ho, "__esModule", {
    value: !0
  }), ho.default = void 0;
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
  return ho.default = t, ho;
}
var yo = {}, ws;
function Fv() {
  if (ws) return yo;
  ws = 1, Object.defineProperty(yo, "__esModule", {
    value: !0
  }), yo.default = void 0;
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
  return yo.default = t, yo;
}
var go = {}, _s;
function Uv() {
  if (_s) return go;
  _s = 1, Object.defineProperty(go, "__esModule", {
    value: !0
  }), go.default = void 0;
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
  return go.default = t, go;
}
var Ro = {}, qs;
function jv() {
  if (qs) return Ro;
  qs = 1, Object.defineProperty(Ro, "__esModule", {
    value: !0
  }), Ro.default = void 0;
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
  return Ro.default = t, Ro;
}
var Eo = {}, Ps;
function $v() {
  if (Ps) return Eo;
  Ps = 1, Object.defineProperty(Eo, "__esModule", {
    value: !0
  }), Eo.default = void 0;
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
  return Eo.default = t, Eo;
}
var Co = {}, Ts;
function Hv() {
  if (Ts) return Co;
  Ts = 1, Object.defineProperty(Co, "__esModule", {
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
  return Co.default = t, Co;
}
var wo = {}, xs;
function Vv() {
  if (xs) return wo;
  xs = 1, Object.defineProperty(wo, "__esModule", {
    value: !0
  }), wo.default = void 0;
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
  return wo.default = t, wo;
}
var _o = {}, Ss;
function Wv() {
  if (Ss) return _o;
  Ss = 1, Object.defineProperty(_o, "__esModule", {
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
  return _o.default = t, _o;
}
var qo = {}, Os;
function zv() {
  if (Os) return qo;
  Os = 1, Object.defineProperty(qo, "__esModule", {
    value: !0
  }), qo.default = void 0;
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
  return qo.default = t, qo;
}
var Po = {}, Ms;
function Kv() {
  if (Ms) return Po;
  Ms = 1, Object.defineProperty(Po, "__esModule", {
    value: !0
  }), Po.default = void 0;
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
  return Po.default = t, Po;
}
var To = {}, As;
function Gv() {
  if (As) return To;
  As = 1, Object.defineProperty(To, "__esModule", {
    value: !0
  }), To.default = void 0;
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
  return To.default = t, To;
}
var xo = {}, Is;
function Yv() {
  if (Is) return xo;
  Is = 1, Object.defineProperty(xo, "__esModule", {
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
  return xo.default = t, xo;
}
var So = {}, ks;
function Xv() {
  if (ks) return So;
  ks = 1, Object.defineProperty(So, "__esModule", {
    value: !0
  }), So.default = void 0;
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
  return So.default = t, So;
}
var Oo = {}, Ds;
function Qv() {
  if (Ds) return Oo;
  Ds = 1, Object.defineProperty(Oo, "__esModule", {
    value: !0
  }), Oo.default = void 0;
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
  return Oo.default = t, Oo;
}
var Mo = {}, Ns;
function Jv() {
  if (Ns) return Mo;
  Ns = 1, Object.defineProperty(Mo, "__esModule", {
    value: !0
  }), Mo.default = void 0;
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
  return Mo.default = t, Mo;
}
var Ao = {}, Ls;
function Zv() {
  if (Ls) return Ao;
  Ls = 1, Object.defineProperty(Ao, "__esModule", {
    value: !0
  }), Ao.default = void 0;
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
  return Ao.default = t, Ao;
}
var Bs;
function eb() {
  if (Bs) return zn;
  Bs = 1, Object.defineProperty(zn, "__esModule", {
    value: !0
  }), zn.default = void 0;
  var e = $(vv()), t = $(bv()), r = $(hv()), n = $(yv()), o = $(gv()), a = $(Rv()), i = $(Ev()), l = $(Cv()), u = $(wv()), s = $(_v()), d = $(qv()), f = $(Pv()), c = $(Tv()), h = $(xv()), g = $(Sv()), R = $(Ov()), T = $(Mv()), p = $(Av()), w = $(Iv()), _ = $(kv()), P = $(Dv()), q = $(Nv()), b = $(Lv()), y = $(Bv()), E = $(Fv()), A = $(Uv()), L = $(jv()), F = $($v()), U = $(Hv()), O = $(Vv()), B = $(Wv()), V = $(zv()), re = $(Kv()), G = $(Gv()), se = $(Yv()), me = $(Xv()), _e = $(Qv()), Se = $(Jv()), Oe = $(Zv());
  function $(Re) {
    return Re && Re.__esModule ? Re : { default: Re };
  }
  var we = [["doc-abstract", e.default], ["doc-acknowledgments", t.default], ["doc-afterword", r.default], ["doc-appendix", n.default], ["doc-backlink", o.default], ["doc-biblioentry", a.default], ["doc-bibliography", i.default], ["doc-biblioref", l.default], ["doc-chapter", u.default], ["doc-colophon", s.default], ["doc-conclusion", d.default], ["doc-cover", f.default], ["doc-credit", c.default], ["doc-credits", h.default], ["doc-dedication", g.default], ["doc-endnote", R.default], ["doc-endnotes", T.default], ["doc-epigraph", p.default], ["doc-epilogue", w.default], ["doc-errata", _.default], ["doc-example", P.default], ["doc-footnote", q.default], ["doc-foreword", b.default], ["doc-glossary", y.default], ["doc-glossref", E.default], ["doc-index", A.default], ["doc-introduction", L.default], ["doc-noteref", F.default], ["doc-notice", U.default], ["doc-pagebreak", O.default], ["doc-pagelist", B.default], ["doc-part", V.default], ["doc-preface", re.default], ["doc-prologue", G.default], ["doc-pullquote", se.default], ["doc-qna", me.default], ["doc-subtitle", _e.default], ["doc-tip", Se.default], ["doc-toc", Oe.default]], ve = we;
  return zn.default = ve, zn;
}
var Io = {}, ko = {}, Fs;
function tb() {
  if (Fs) return ko;
  Fs = 1, Object.defineProperty(ko, "__esModule", {
    value: !0
  }), ko.default = void 0;
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
  return ko.default = t, ko;
}
var Do = {}, Us;
function rb() {
  if (Us) return Do;
  Us = 1, Object.defineProperty(Do, "__esModule", {
    value: !0
  }), Do.default = void 0;
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
  return Do.default = t, Do;
}
var No = {}, js;
function nb() {
  if (js) return No;
  js = 1, Object.defineProperty(No, "__esModule", {
    value: !0
  }), No.default = void 0;
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
  return No.default = t, No;
}
var $s;
function ob() {
  if ($s) return Io;
  $s = 1, Object.defineProperty(Io, "__esModule", {
    value: !0
  }), Io.default = void 0;
  var e = n(tb()), t = n(rb()), r = n(nb());
  function n(i) {
    return i && i.__esModule ? i : { default: i };
  }
  var o = [["graphics-document", e.default], ["graphics-object", t.default], ["graphics-symbol", r.default]], a = o;
  return Io.default = a, Io;
}
var Hs;
function di() {
  if (Hs) return tr;
  Hs = 1, Object.defineProperty(tr, "__esModule", {
    value: !0
  }), tr.default = void 0;
  var e = a(Bp()), t = a(mv()), r = a(eb()), n = a(ob()), o = a(Jo());
  function a(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function i(p, w, _) {
    return w in p ? Object.defineProperty(p, w, { value: _, enumerable: !0, configurable: !0, writable: !0 }) : p[w] = _, p;
  }
  function l(p, w) {
    var _ = typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (!_) {
      if (Array.isArray(p) || (_ = d(p)) || w) {
        _ && (p = _);
        var P = 0, q = function() {
        };
        return { s: q, n: function() {
          return P >= p.length ? { done: !0 } : { done: !1, value: p[P++] };
        }, e: function(L) {
          throw L;
        }, f: q };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var b = !0, y = !1, E;
    return { s: function() {
      _ = _.call(p);
    }, n: function() {
      var L = _.next();
      return b = L.done, L;
    }, e: function(L) {
      y = !0, E = L;
    }, f: function() {
      try {
        !b && _.return != null && _.return();
      } finally {
        if (y) throw E;
      }
    } };
  }
  function u(p, w) {
    return h(p) || c(p, w) || d(p, w) || s();
  }
  function s() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function d(p, w) {
    if (p) {
      if (typeof p == "string") return f(p, w);
      var _ = Object.prototype.toString.call(p).slice(8, -1);
      if (_ === "Object" && p.constructor && (_ = p.constructor.name), _ === "Map" || _ === "Set") return Array.from(p);
      if (_ === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)) return f(p, w);
    }
  }
  function f(p, w) {
    (w == null || w > p.length) && (w = p.length);
    for (var _ = 0, P = new Array(w); _ < w; _++)
      P[_] = p[_];
    return P;
  }
  function c(p, w) {
    var _ = p == null ? null : typeof Symbol < "u" && p[Symbol.iterator] || p["@@iterator"];
    if (_ != null) {
      var P = [], q = !0, b = !1, y, E;
      try {
        for (_ = _.call(p); !(q = (y = _.next()).done) && (P.push(y.value), !(w && P.length === w)); q = !0)
          ;
      } catch (A) {
        b = !0, E = A;
      } finally {
        try {
          !q && _.return != null && _.return();
        } finally {
          if (b) throw E;
        }
      }
      return P;
    }
  }
  function h(p) {
    if (Array.isArray(p)) return p;
  }
  var g = [].concat(e.default, t.default, r.default, n.default);
  g.forEach(function(p) {
    var w = u(p, 2), _ = w[1], P = l(_.superClass), q;
    try {
      for (P.s(); !(q = P.n()).done; ) {
        var b = q.value, y = l(b), E;
        try {
          var A = function() {
            var F = E.value, U = g.find(function(G) {
              var se = u(G, 1), me = se[0];
              return me === F;
            });
            if (U)
              for (var O = U[1], B = 0, V = Object.keys(O.props); B < V.length; B++) {
                var re = V[B];
                Object.prototype.hasOwnProperty.call(_.props, re) || Object.assign(_.props, i({}, re, O.props[re]));
              }
          };
          for (y.s(); !(E = y.n()).done; )
            A();
        } catch (L) {
          y.e(L);
        } finally {
          y.f();
        }
      }
    } catch (L) {
      P.e(L);
    } finally {
      P.f();
    }
  });
  var R = {
    entries: function() {
      return g;
    },
    forEach: function(w) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, P = l(g), q;
      try {
        for (P.s(); !(q = P.n()).done; ) {
          var b = u(q.value, 2), y = b[0], E = b[1];
          w.call(_, E, y, g);
        }
      } catch (A) {
        P.e(A);
      } finally {
        P.f();
      }
    },
    get: function(w) {
      var _ = g.find(function(P) {
        return P[0] === w;
      });
      return _ && _[1];
    },
    has: function(w) {
      return !!R.get(w);
    },
    keys: function() {
      return g.map(function(w) {
        var _ = u(w, 1), P = _[0];
        return P;
      });
    },
    values: function() {
      return g.map(function(w) {
        var _ = u(w, 2), P = _[1];
        return P;
      });
    }
  }, T = (0, o.default)(R, R.entries());
  return tr.default = T, tr;
}
var Lo = {}, Ba = {}, Vs;
function ab() {
  if (Vs) return Ba;
  Vs = 1;
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
  return Ba.dequal = t, Ba;
}
var Ws;
function ib() {
  if (Ws) return Lo;
  Ws = 1, Object.defineProperty(Lo, "__esModule", {
    value: !0
  }), Lo.default = void 0;
  var e = ab(), t = n(Jo()), r = n(di());
  function n(q) {
    return q && q.__esModule ? q : { default: q };
  }
  function o(q, b) {
    return l(q) || i(q, b) || s(q, b) || a();
  }
  function a() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function i(q, b) {
    var y = q == null ? null : typeof Symbol < "u" && q[Symbol.iterator] || q["@@iterator"];
    if (y != null) {
      var E = [], A = !0, L = !1, F, U;
      try {
        for (y = y.call(q); !(A = (F = y.next()).done) && (E.push(F.value), !(b && E.length === b)); A = !0)
          ;
      } catch (O) {
        L = !0, U = O;
      } finally {
        try {
          !A && y.return != null && y.return();
        } finally {
          if (L) throw U;
        }
      }
      return E;
    }
  }
  function l(q) {
    if (Array.isArray(q)) return q;
  }
  function u(q, b) {
    var y = typeof Symbol < "u" && q[Symbol.iterator] || q["@@iterator"];
    if (!y) {
      if (Array.isArray(q) || (y = s(q)) || b) {
        y && (q = y);
        var E = 0, A = function() {
        };
        return { s: A, n: function() {
          return E >= q.length ? { done: !0 } : { done: !1, value: q[E++] };
        }, e: function(B) {
          throw B;
        }, f: A };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var L = !0, F = !1, U;
    return { s: function() {
      y = y.call(q);
    }, n: function() {
      var B = y.next();
      return L = B.done, B;
    }, e: function(B) {
      F = !0, U = B;
    }, f: function() {
      try {
        !L && y.return != null && y.return();
      } finally {
        if (F) throw U;
      }
    } };
  }
  function s(q, b) {
    if (q) {
      if (typeof q == "string") return d(q, b);
      var y = Object.prototype.toString.call(q).slice(8, -1);
      if (y === "Object" && q.constructor && (y = q.constructor.name), y === "Map" || y === "Set") return Array.from(q);
      if (y === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y)) return d(q, b);
    }
  }
  function d(q, b) {
    (b == null || b > q.length) && (b = q.length);
    for (var y = 0, E = new Array(b); y < b; y++)
      E[y] = q[y];
    return E;
  }
  for (var f = [], c = r.default.keys(), h = 0; h < c.length; h++) {
    var g = c[h], R = r.default.get(g);
    if (R)
      for (var T = [].concat(R.baseConcepts, R.relatedConcepts), p = 0; p < T.length; p++) {
        var w = T[p];
        w.module === "HTML" && (function() {
          var q = w.concept;
          if (q) {
            var b = f.find(function(L) {
              return (0, e.dequal)(L, q);
            }), y;
            b ? y = b[1] : y = [];
            for (var E = !0, A = 0; A < y.length; A++)
              if (y[A] === g) {
                E = !1;
                break;
              }
            E && y.push(g), f.push([q, y]);
          }
        })();
      }
  }
  var _ = {
    entries: function() {
      return f;
    },
    forEach: function(b) {
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, E = u(f), A;
      try {
        for (E.s(); !(A = E.n()).done; ) {
          var L = o(A.value, 2), F = L[0], U = L[1];
          b.call(y, U, F, f);
        }
      } catch (O) {
        E.e(O);
      } finally {
        E.f();
      }
    },
    get: function(b) {
      var y = f.find(function(E) {
        return b.name === E[0].name && (0, e.dequal)(b.attributes, E[0].attributes);
      });
      return y && y[1];
    },
    has: function(b) {
      return !!_.get(b);
    },
    keys: function() {
      return f.map(function(b) {
        var y = o(b, 1), E = y[0];
        return E;
      });
    },
    values: function() {
      return f.map(function(b) {
        var y = o(b, 2), E = y[1];
        return E;
      });
    }
  }, P = (0, t.default)(_, _.entries());
  return Lo.default = P, Lo;
}
var Bo = {}, zs;
function lb() {
  if (zs) return Bo;
  zs = 1, Object.defineProperty(Bo, "__esModule", {
    value: !0
  }), Bo.default = void 0;
  var e = r(Jo()), t = r(di());
  function r(b) {
    return b && b.__esModule ? b : { default: b };
  }
  function n(b, y) {
    return i(b) || a(b, y) || u(b, y) || o();
  }
  function o() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function a(b, y) {
    var E = b == null ? null : typeof Symbol < "u" && b[Symbol.iterator] || b["@@iterator"];
    if (E != null) {
      var A = [], L = !0, F = !1, U, O;
      try {
        for (E = E.call(b); !(L = (U = E.next()).done) && (A.push(U.value), !(y && A.length === y)); L = !0)
          ;
      } catch (B) {
        F = !0, O = B;
      } finally {
        try {
          !L && E.return != null && E.return();
        } finally {
          if (F) throw O;
        }
      }
      return A;
    }
  }
  function i(b) {
    if (Array.isArray(b)) return b;
  }
  function l(b, y) {
    var E = typeof Symbol < "u" && b[Symbol.iterator] || b["@@iterator"];
    if (!E) {
      if (Array.isArray(b) || (E = u(b)) || y) {
        E && (b = E);
        var A = 0, L = function() {
        };
        return { s: L, n: function() {
          return A >= b.length ? { done: !0 } : { done: !1, value: b[A++] };
        }, e: function(V) {
          throw V;
        }, f: L };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var F = !0, U = !1, O;
    return { s: function() {
      E = E.call(b);
    }, n: function() {
      var V = E.next();
      return F = V.done, V;
    }, e: function(V) {
      U = !0, O = V;
    }, f: function() {
      try {
        !F && E.return != null && E.return();
      } finally {
        if (U) throw O;
      }
    } };
  }
  function u(b, y) {
    if (b) {
      if (typeof b == "string") return s(b, y);
      var E = Object.prototype.toString.call(b).slice(8, -1);
      if (E === "Object" && b.constructor && (E = b.constructor.name), E === "Map" || E === "Set") return Array.from(b);
      if (E === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E)) return s(b, y);
    }
  }
  function s(b, y) {
    (y == null || y > b.length) && (y = b.length);
    for (var E = 0, A = new Array(y); E < y; E++)
      A[E] = b[E];
    return A;
  }
  for (var d = [], f = t.default.keys(), c = 0; c < f.length; c++) {
    var h = f[c], g = t.default.get(h), R = [];
    if (g) {
      for (var T = [].concat(g.baseConcepts, g.relatedConcepts), p = 0; p < T.length; p++) {
        var w = T[p];
        if (w.module === "HTML") {
          var _ = w.concept;
          _ != null && R.push(_);
        }
      }
      R.length > 0 && d.push([h, R]);
    }
  }
  var P = {
    entries: function() {
      return d;
    },
    forEach: function(y) {
      var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, A = l(d), L;
      try {
        for (A.s(); !(L = A.n()).done; ) {
          var F = n(L.value, 2), U = F[0], O = F[1];
          y.call(E, O, U, d);
        }
      } catch (B) {
        A.e(B);
      } finally {
        A.f();
      }
    },
    get: function(y) {
      var E = d.find(function(A) {
        return A[0] === y;
      });
      return E && E[1];
    },
    has: function(y) {
      return !!P.get(y);
    },
    keys: function() {
      return d.map(function(y) {
        var E = n(y, 1), A = E[0];
        return A;
      });
    },
    values: function() {
      return d.map(function(y) {
        var E = n(y, 2), A = E[1];
        return A;
      });
    }
  }, q = (0, e.default)(P, P.entries());
  return Bo.default = q, Bo;
}
var Ks;
function ub() {
  if (Ks) return Te;
  Ks = 1, Object.defineProperty(Te, "__esModule", {
    value: !0
  }), Te.roles = Te.roleElements = Te.elementRoles = Te.dom = Te.aria = void 0;
  var e = a(_p()), t = a(qp()), r = a(di()), n = a(ib()), o = a(lb());
  function a(f) {
    return f && f.__esModule ? f : { default: f };
  }
  var i = e.default;
  Te.aria = i;
  var l = t.default;
  Te.dom = l;
  var u = r.default;
  Te.roles = u;
  var s = n.default;
  Te.elementRoles = s;
  var d = o.default;
  return Te.roleElements = d, Te;
}
var Ie = ub(), Fa = { exports: {} }, Gs;
function sb() {
  return Gs || (Gs = 1, (function(e) {
    var t = (function() {
      var r = String.fromCharCode, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", a = {};
      function i(u, s) {
        if (!a[u]) {
          a[u] = {};
          for (var d = 0; d < u.length; d++)
            a[u][u.charAt(d)] = d;
        }
        return a[u][s];
      }
      var l = {
        compressToBase64: function(u) {
          if (u == null) return "";
          var s = l._compress(u, 6, function(d) {
            return n.charAt(d);
          });
          switch (s.length % 4) {
            // To produce valid Base64
            default:
            // When could this happen ?
            case 0:
              return s;
            case 1:
              return s + "===";
            case 2:
              return s + "==";
            case 3:
              return s + "=";
          }
        },
        decompressFromBase64: function(u) {
          return u == null ? "" : u == "" ? null : l._decompress(u.length, 32, function(s) {
            return i(n, u.charAt(s));
          });
        },
        compressToUTF16: function(u) {
          return u == null ? "" : l._compress(u, 15, function(s) {
            return r(s + 32);
          }) + " ";
        },
        decompressFromUTF16: function(u) {
          return u == null ? "" : u == "" ? null : l._decompress(u.length, 16384, function(s) {
            return u.charCodeAt(s) - 32;
          });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(u) {
          for (var s = l.compress(u), d = new Uint8Array(s.length * 2), f = 0, c = s.length; f < c; f++) {
            var h = s.charCodeAt(f);
            d[f * 2] = h >>> 8, d[f * 2 + 1] = h % 256;
          }
          return d;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(u) {
          if (u == null)
            return l.decompress(u);
          for (var s = new Array(u.length / 2), d = 0, f = s.length; d < f; d++)
            s[d] = u[d * 2] * 256 + u[d * 2 + 1];
          var c = [];
          return s.forEach(function(h) {
            c.push(r(h));
          }), l.decompress(c.join(""));
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(u) {
          return u == null ? "" : l._compress(u, 6, function(s) {
            return o.charAt(s);
          });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(u) {
          return u == null ? "" : u == "" ? null : (u = u.replace(/ /g, "+"), l._decompress(u.length, 32, function(s) {
            return i(o, u.charAt(s));
          }));
        },
        compress: function(u) {
          return l._compress(u, 16, function(s) {
            return r(s);
          });
        },
        _compress: function(u, s, d) {
          if (u == null) return "";
          var f, c, h = {}, g = {}, R = "", T = "", p = "", w = 2, _ = 3, P = 2, q = [], b = 0, y = 0, E;
          for (E = 0; E < u.length; E += 1)
            if (R = u.charAt(E), Object.prototype.hasOwnProperty.call(h, R) || (h[R] = _++, g[R] = !0), T = p + R, Object.prototype.hasOwnProperty.call(h, T))
              p = T;
            else {
              if (Object.prototype.hasOwnProperty.call(g, p)) {
                if (p.charCodeAt(0) < 256) {
                  for (f = 0; f < P; f++)
                    b = b << 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++;
                  for (c = p.charCodeAt(0), f = 0; f < 8; f++)
                    b = b << 1 | c & 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = c >> 1;
                } else {
                  for (c = 1, f = 0; f < P; f++)
                    b = b << 1 | c, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = 0;
                  for (c = p.charCodeAt(0), f = 0; f < 16; f++)
                    b = b << 1 | c & 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = c >> 1;
                }
                w--, w == 0 && (w = Math.pow(2, P), P++), delete g[p];
              } else
                for (c = h[p], f = 0; f < P; f++)
                  b = b << 1 | c & 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = c >> 1;
              w--, w == 0 && (w = Math.pow(2, P), P++), h[T] = _++, p = String(R);
            }
          if (p !== "") {
            if (Object.prototype.hasOwnProperty.call(g, p)) {
              if (p.charCodeAt(0) < 256) {
                for (f = 0; f < P; f++)
                  b = b << 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++;
                for (c = p.charCodeAt(0), f = 0; f < 8; f++)
                  b = b << 1 | c & 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = c >> 1;
              } else {
                for (c = 1, f = 0; f < P; f++)
                  b = b << 1 | c, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = 0;
                for (c = p.charCodeAt(0), f = 0; f < 16; f++)
                  b = b << 1 | c & 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = c >> 1;
              }
              w--, w == 0 && (w = Math.pow(2, P), P++), delete g[p];
            } else
              for (c = h[p], f = 0; f < P; f++)
                b = b << 1 | c & 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = c >> 1;
            w--, w == 0 && (w = Math.pow(2, P), P++);
          }
          for (c = 2, f = 0; f < P; f++)
            b = b << 1 | c & 1, y == s - 1 ? (y = 0, q.push(d(b)), b = 0) : y++, c = c >> 1;
          for (; ; )
            if (b = b << 1, y == s - 1) {
              q.push(d(b));
              break;
            } else y++;
          return q.join("");
        },
        decompress: function(u) {
          return u == null ? "" : u == "" ? null : l._decompress(u.length, 32768, function(s) {
            return u.charCodeAt(s);
          });
        },
        _decompress: function(u, s, d) {
          var f = [], c = 4, h = 4, g = 3, R = "", T = [], p, w, _, P, q, b, y, E = { val: d(0), position: s, index: 1 };
          for (p = 0; p < 3; p += 1)
            f[p] = p;
          for (_ = 0, q = Math.pow(2, 2), b = 1; b != q; )
            P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = s, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * b, b <<= 1;
          switch (_) {
            case 0:
              for (_ = 0, q = Math.pow(2, 8), b = 1; b != q; )
                P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = s, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * b, b <<= 1;
              y = r(_);
              break;
            case 1:
              for (_ = 0, q = Math.pow(2, 16), b = 1; b != q; )
                P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = s, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * b, b <<= 1;
              y = r(_);
              break;
            case 2:
              return "";
          }
          for (f[3] = y, w = y, T.push(y); ; ) {
            if (E.index > u)
              return "";
            for (_ = 0, q = Math.pow(2, g), b = 1; b != q; )
              P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = s, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * b, b <<= 1;
            switch (y = _) {
              case 0:
                for (_ = 0, q = Math.pow(2, 8), b = 1; b != q; )
                  P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = s, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * b, b <<= 1;
                f[h++] = r(_), y = h - 1, c--;
                break;
              case 1:
                for (_ = 0, q = Math.pow(2, 16), b = 1; b != q; )
                  P = E.val & E.position, E.position >>= 1, E.position == 0 && (E.position = s, E.val = d(E.index++)), _ |= (P > 0 ? 1 : 0) * b, b <<= 1;
                f[h++] = r(_), y = h - 1, c--;
                break;
              case 2:
                return T.join("");
            }
            if (c == 0 && (c = Math.pow(2, g), g++), f[y])
              R = f[y];
            else if (y === h)
              R = w + w.charAt(0);
            else
              return null;
            T.push(R), f[h++] = w + R.charAt(0), c--, w = R, c == 0 && (c = Math.pow(2, g), g++);
          }
        }
      };
      return l;
    })();
    e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
      return t;
    });
  })(Fa)), Fa.exports;
}
var cb = sb();
const db = /* @__PURE__ */ bf(cb);
function Uc(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
const fb = (e, t, r, n, o, a, i) => {
  const l = n + r.indent, u = r.colors;
  return e.map((s) => {
    const d = t[s];
    let f = i(d, r, l, o, a);
    return typeof d != "string" && (f.indexOf(`
`) !== -1 && (f = r.spacingOuter + l + f + r.spacingOuter + n), f = "{" + f + "}"), r.spacingInner + n + u.prop.open + s + u.prop.close + "=" + u.value.open + f + u.value.close;
  }).join("");
}, pb = 3, mb = (e, t, r, n, o, a) => e.map((i) => {
  const l = typeof i == "string" ? jc(i, t) : a(i, t, r, n, o);
  return l === "" && typeof i == "object" && i !== null && i.nodeType !== pb ? "" : t.spacingOuter + r + l;
}).join(""), jc = (e, t) => {
  const r = t.colors.content;
  return r.open + Uc(e) + r.close;
}, vb = (e, t) => {
  const r = t.colors.comment;
  return r.open + "<!--" + Uc(e) + "-->" + r.close;
}, bb = (e, t, r, n, o) => {
  const a = n.colors.tag;
  return a.open + "<" + e + (t && a.close + t + n.spacingOuter + o + a.open) + (r ? ">" + a.close + r + n.spacingOuter + o + a.open + "</" + e : (t && !n.min ? "" : " ") + "/") + ">" + a.close;
}, hb = (e, t) => {
  const r = t.colors.tag;
  return r.open + "<" + e + r.close + " …" + r.open + " />" + r.close;
}, yb = 1, $c = 3, Hc = 8, Vc = 11, gb = /^((HTML|SVG)\w*)?Element$/, Wc = (e) => {
  const {
    tagName: t
  } = e;
  return !!(typeof t == "string" && t.includes("-") || typeof e.hasAttribute == "function" && e.hasAttribute("is"));
}, Rb = (e) => {
  const t = e.constructor.name, {
    nodeType: r
  } = e;
  return r === yb && (gb.test(t) || Wc(e)) || r === $c && t === "Text" || r === Hc && t === "Comment" || r === Vc && t === "DocumentFragment";
};
function Eb(e) {
  return e.nodeType === $c;
}
function Cb(e) {
  return e.nodeType === Hc;
}
function Ua(e) {
  return e.nodeType === Vc;
}
function wb(e) {
  return {
    test: (t) => {
      var r;
      return ((t == null || (r = t.constructor) == null ? void 0 : r.name) || Wc(t)) && Rb(t);
    },
    serialize: (t, r, n, o, a, i) => {
      if (Eb(t))
        return jc(t.data, r);
      if (Cb(t))
        return vb(t.data, r);
      const l = Ua(t) ? "DocumentFragment" : t.tagName.toLowerCase();
      return ++o > r.maxDepth ? hb(l, r) : bb(l, fb(Ua(t) ? [] : Array.from(t.attributes).map((u) => u.name).sort(), Ua(t) ? {} : Array.from(t.attributes).reduce((u, s) => (u[s.name] = s.value, u), {}), r, n + r.indent, o, a, i), mb(Array.prototype.slice.call(t.childNodes || t.children).filter(e), r, n + r.indent, o, a, i), r, n);
    }
  };
}
let zc = null, fi = null, pi = null;
try {
  const e = module && module.require;
  fi = e.call(module, "fs").readFileSync, pi = e.call(module, "@babel/code-frame").codeFrameColumns, zc = e.call(module, "picocolors");
} catch {
}
function _b(e) {
  const t = e.indexOf("(") + 1, r = e.indexOf(")"), n = e.slice(t, r), o = n.split(":"), [a, i, l] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)];
  let u = "";
  try {
    u = fi(a, "utf-8");
  } catch {
    return "";
  }
  const s = pi(u, {
    start: {
      line: i,
      column: l
    }
  }, {
    highlightCode: !0,
    linesBelow: 0
  });
  return zc.dim(n) + `
` + s + `
`;
}
function qb() {
  if (!fi || !pi)
    return "";
  const t = new Error().stack.split(`
`).slice(1).find((r) => !r.includes("node_modules/"));
  return _b(t);
}
const Kc = 3;
function ja() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- not supported by our support matrix
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
function mi() {
  if (typeof window > "u")
    throw new Error("Could not find default container");
  return window.document;
}
function Gc(e) {
  if (e.defaultView)
    return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window)
    return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null ? new Error("It looks like the window object is not available for the provided node.") : e.then instanceof Function ? new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?") : Array.isArray(e) ? new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?") : typeof e.debug == "function" && typeof e.logTestingPlaygroundURL == "function" ? new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?") : new Error("The given node is not an Element, the node type is: " + typeof e + ".");
}
function ot(e) {
  if (!e || typeof e.querySelector != "function" || typeof e.querySelectorAll != "function")
    throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + t(e) + ".");
  function t(r) {
    return typeof r == "object" ? r === null ? "null" : r.constructor.name : typeof r;
  }
}
const Pb = () => {
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
  DOMCollection: Tb
} = Mc.plugins, xb = 1, Sb = 8;
function Ob(e) {
  return e.nodeType !== Sb && (e.nodeType !== xb || !e.matches(J().defaultIgnore));
}
function Bt(e, t, r) {
  if (r === void 0 && (r = {}), e || (e = mi().body), typeof t != "number" && (t = typeof process < "u" && typeof process.env < "u" && process.env.DEBUG_PRINT_LIMIT || 7e3), t === 0)
    return "";
  e.documentElement && (e = e.documentElement);
  let n = typeof e;
  if (n === "object" ? n = e.constructor.name : e = {}, !("outerHTML" in e))
    throw new TypeError("Expected an element or document but got " + n);
  const {
    filterNode: o = Ob,
    ...a
  } = r, i = Mc.format(e, {
    plugins: [wb(o), Tb],
    printFunctionName: !1,
    highlight: Pb(),
    ...a
  });
  return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + "..." : i;
}
const Ys = function() {
  const e = qb();
  console.log(e ? Bt(...arguments) + `

` + e : Bt(...arguments));
};
let Et = {
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
    const r = Bt(t), n = new Error([e, "Ignored nodes: comments, " + Et.defaultIgnore + `
` + r].filter(Boolean).join(`

`));
    return n.name = "TestingLibraryElementError", n;
  },
  _disableExpensiveErrorDiagnostics: !1,
  computedStyleSupportsPseudoElements: !1
};
function Mb(e) {
  try {
    return Et._disableExpensiveErrorDiagnostics = !0, e();
  } finally {
    Et._disableExpensiveErrorDiagnostics = !1;
  }
}
function Ab(e) {
  typeof e == "function" && (e = e(Et)), Et = {
    ...Et,
    ...e
  };
}
function J() {
  return Et;
}
const Ib = ["button", "meter", "output", "progress", "select", "textarea", "input"];
function Yc(e) {
  return Ib.includes(e.nodeName.toLowerCase()) ? "" : e.nodeType === Kc ? e.textContent : Array.from(e.childNodes).map((t) => Yc(t)).join("");
}
function Ka(e) {
  let t;
  return e.tagName.toLowerCase() === "label" ? t = Yc(e) : t = e.value || e.textContent, t;
}
function Xc(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!kb(e)) return [];
  const r = e.ownerDocument.querySelectorAll("label");
  return Array.from(r).filter((n) => n.control === e);
}
function kb(e) {
  return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) || e.tagName === "INPUT" && e.getAttribute("type") !== "hidden";
}
function Qc(e, t, r) {
  let {
    selector: n = "*"
  } = r === void 0 ? {} : r;
  const o = t.getAttribute("aria-labelledby"), a = o ? o.split(" ") : [];
  return a.length ? a.map((i) => {
    const l = e.querySelector('[id="' + i + '"]');
    return l ? {
      content: Ka(l),
      formControl: null
    } : {
      content: "",
      formControl: null
    };
  }) : Array.from(Xc(t)).map((i) => {
    const l = Ka(i), s = Array.from(i.querySelectorAll("button, input, meter, output, progress, select, textarea")).filter((d) => d.matches(n))[0];
    return {
      content: l,
      formControl: s
    };
  });
}
function Jc(e) {
  if (e == null)
    throw new Error(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions -- implicitly converting `T` to `string`
      "It looks like " + e + " was passed instead of a matcher. Did you do something like getByText(" + e + ")?"
    );
}
function zt(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  Jc(r);
  const o = n(e);
  return typeof r == "string" || typeof r == "number" ? o.toLowerCase().includes(r.toString().toLowerCase()) : typeof r == "function" ? r(o, t) : ed(r, o);
}
function rt(e, t, r, n) {
  if (typeof e != "string")
    return !1;
  Jc(r);
  const o = n(e);
  return r instanceof Function ? r(o, t) : r instanceof RegExp ? ed(r, o) : o === String(r);
}
function Zc(e) {
  let {
    trim: t = !0,
    collapseWhitespace: r = !0
  } = e === void 0 ? {} : e;
  return (n) => {
    let o = n;
    return o = t ? o.trim() : o, o = r ? o.replace(/\s+/g, " ") : o, o;
  };
}
function qt(e) {
  let {
    trim: t,
    collapseWhitespace: r,
    normalizer: n
  } = e;
  if (!n)
    return Zc({
      trim: t,
      collapseWhitespace: r
    });
  if (typeof t < "u" || typeof r < "u")
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
  return n;
}
function ed(e, t) {
  const r = e.test(t);
  return e.global && e.lastIndex !== 0 && (console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp."), e.lastIndex = 0), r;
}
function Sa(e) {
  return e.matches("input[type=submit], input[type=button], input[type=reset]") ? e.value : Array.from(e.childNodes).filter((t) => t.nodeType === Kc && !!t.textContent).map((t) => t.textContent).join("");
}
const Db = Nb(Ie.elementRoles);
function td(e) {
  return e.hidden === !0 || e.getAttribute("aria-hidden") === "true" || e.ownerDocument.defaultView.getComputedStyle(e).display === "none";
}
function vi(e, t) {
  t === void 0 && (t = {});
  const {
    isSubtreeInaccessible: r = td
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
function bi(e) {
  for (const {
    match: t,
    roles: r
  } of Db)
    if (t(e))
      return [...r];
  return [];
}
function Nb(e) {
  function t(i) {
    let {
      name: l,
      attributes: u
    } = i;
    return "" + l + u.map((s) => {
      let {
        name: d,
        value: f,
        constraints: c = []
      } = s;
      const h = c.indexOf("undefined") !== -1, g = c.indexOf("set") !== -1;
      return typeof f < "u" ? "[" + d + '="' + f + '"]' : h ? ":not([" + d + "])" : g ? "[" + d + "]:not([" + d + '=""])' : "[" + d + "]";
    }).join("");
  }
  function r(i) {
    let {
      attributes: l = []
    } = i;
    return l.length;
  }
  function n(i, l) {
    let {
      specificity: u
    } = i, {
      specificity: s
    } = l;
    return s - u;
  }
  function o(i) {
    let {
      attributes: l = []
    } = i;
    const u = l.findIndex((d) => d.value && d.name === "type" && d.value === "text");
    u >= 0 && (l = [...l.slice(0, u), ...l.slice(u + 1)]);
    const s = t({
      ...i,
      attributes: l
    });
    return (d) => u >= 0 && d.type !== "text" ? !1 : d.matches(s);
  }
  let a = [];
  for (const [i, l] of e.entries())
    a = [...a, {
      match: o(i),
      roles: Array.from(l),
      specificity: r(i)
    }];
  return a.sort(n);
}
function Lb(e, t) {
  let {
    hidden: r = !1
  } = t === void 0 ? {} : t;
  function n(o) {
    return [o, ...Array.from(o.children).reduce((a, i) => [...a, ...n(i)], [])];
  }
  return n(e).filter((o) => r === !1 ? vi(o) === !1 : !0).reduce((o, a) => {
    let i = [];
    return a.hasAttribute("role") ? i = a.getAttribute("role").split(" ").slice(0, 1) : i = bi(a), i.reduce((l, u) => Array.isArray(l[u]) ? {
      ...l,
      [u]: [...l[u], a]
    } : {
      ...l,
      [u]: [a]
    }, o);
  }, {});
}
function Bb(e, t) {
  let {
    hidden: r,
    includeDescription: n
  } = t;
  const o = Lb(e, {
    hidden: r
  });
  return Object.entries(o).filter((a) => {
    let [i] = a;
    return i !== "generic";
  }).map((a) => {
    let [i, l] = a;
    const u = "-".repeat(50), s = l.map((d) => {
      const f = 'Name "' + ci(d, {
        computedStyleSupportsPseudoElements: J().computedStyleSupportsPseudoElements
      }) + `":
`, c = Bt(d.cloneNode(!1));
      if (n) {
        const h = 'Description "' + Fc(d, {
          computedStyleSupportsPseudoElements: J().computedStyleSupportsPseudoElements
        }) + `":
`;
        return "" + f + h + c;
      }
      return "" + f + c;
    }).join(`

`);
    return i + `:

` + s + `

` + u;
  }).join(`
`);
}
function Fb(e) {
  return e.tagName === "OPTION" ? e.selected : Zo(e, "aria-selected");
}
function Ub(e) {
  return e.getAttribute("aria-busy") === "true";
}
function jb(e) {
  if (!("indeterminate" in e && e.indeterminate))
    return "checked" in e ? e.checked : Zo(e, "aria-checked");
}
function $b(e) {
  return Zo(e, "aria-pressed");
}
function Hb(e) {
  var t, r;
  return (t = (r = Zo(e, "aria-current")) != null ? r : e.getAttribute("aria-current")) != null ? t : !1;
}
function Vb(e) {
  return Zo(e, "aria-expanded");
}
function Zo(e, t) {
  const r = e.getAttribute(t);
  if (r === "true")
    return !0;
  if (r === "false")
    return !1;
}
function Wb(e) {
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
function zb(e) {
  const t = e.getAttribute("aria-valuenow");
  return t === null ? void 0 : +t;
}
function Kb(e) {
  const t = e.getAttribute("aria-valuemax");
  return t === null ? void 0 : +t;
}
function Gb(e) {
  const t = e.getAttribute("aria-valuemin");
  return t === null ? void 0 : +t;
}
function Yb(e) {
  const t = e.getAttribute("aria-valuetext");
  return t === null ? void 0 : t;
}
const Xs = Zc();
function Xb(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Qs(e) {
  return new RegExp(Xb(e.toLowerCase()), "i");
}
function lt(e, t, r, n) {
  let {
    variant: o,
    name: a
  } = n, i = "";
  const l = {}, u = [["Role", "TestId"].includes(e) ? r : Qs(r)];
  a && (l.name = Qs(a)), e === "Role" && vi(t) && (l.hidden = !0, i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `), Object.keys(l).length > 0 && u.push(l);
  const s = o + "By" + e;
  return {
    queryName: e,
    queryMethod: s,
    queryArgs: u,
    variant: o,
    warning: i,
    toString() {
      i && console.warn(i);
      let [d, f] = u;
      return d = typeof d == "string" ? "'" + d + "'" : d, f = f ? ", { " + Object.entries(f).map((c) => {
        let [h, g] = c;
        return h + ": " + g;
      }).join(", ") + " }" : "", s + "(" + d + f + ")";
    }
  };
}
function ut(e, t, r) {
  return r && !0;
}
function Ga(e, t, r) {
  var n, o;
  if (t === void 0 && (t = "get"), e.matches(J().defaultIgnore))
    return;
  const a = (n = e.getAttribute("role")) != null ? n : (o = bi(e)) == null ? void 0 : o[0];
  if (a !== "generic" && ut("Role", r, a))
    return lt("Role", e, a, {
      variant: t,
      name: ci(e, {
        computedStyleSupportsPseudoElements: J().computedStyleSupportsPseudoElements
      })
    });
  const i = Qc(document, e).map((c) => c.content).join(" ");
  if (ut("LabelText", r, i))
    return lt("LabelText", e, i, {
      variant: t
    });
  const l = e.getAttribute("placeholder");
  if (ut("PlaceholderText", r, l))
    return lt("PlaceholderText", e, l, {
      variant: t
    });
  const u = Xs(Sa(e));
  if (ut("Text", r, u))
    return lt("Text", e, u, {
      variant: t
    });
  if (ut("DisplayValue", r, e.value))
    return lt("DisplayValue", e, Xs(e.value), {
      variant: t
    });
  const s = e.getAttribute("alt");
  if (ut("AltText", r, s))
    return lt("AltText", e, s, {
      variant: t
    });
  const d = e.getAttribute("title");
  if (ut("Title", r, d))
    return lt("Title", e, d, {
      variant: t
    });
  const f = e.getAttribute(J().testIdAttribute);
  if (ut("TestId", r, f))
    return lt("TestId", e, f, {
      variant: t
    });
}
function la(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function Qb(e, t) {
  let {
    container: r = mi(),
    timeout: n = J().asyncUtilTimeout,
    showOriginalStackTrace: o = J().showOriginalStackTrace,
    stackTraceError: a,
    interval: i = 50,
    onTimeout: l = (s) => (Object.defineProperty(s, "message", {
      value: J().getElementError(s.message, r).message
    }), s),
    mutationObserverOptions: u = {
      subtree: !0,
      childList: !0,
      attributes: !0,
      characterData: !0
    }
  } = t;
  if (typeof e != "function")
    throw new TypeError("Received `callback` arg must be a function");
  return new Promise(async (s, d) => {
    let f, c, h, g = !1, R = "idle";
    const T = setTimeout(q, n), p = ja();
    if (p) {
      const {
        unstable_advanceTimersWrapper: b
      } = J();
      for (P(); !g; ) {
        if (!ja()) {
          const y = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
          o || la(y, a), d(y);
          return;
        }
        if (await b(async () => {
          jest.advanceTimersByTime(i);
        }), g)
          break;
        P();
      }
    } else {
      try {
        ot(r);
      } catch (y) {
        d(y);
        return;
      }
      c = setInterval(_, i);
      const {
        MutationObserver: b
      } = Gc(r);
      h = new b(_), h.observe(r, u), P();
    }
    function w(b, y) {
      g = !0, clearTimeout(T), p || (clearInterval(c), h.disconnect()), b ? d(b) : s(y);
    }
    function _() {
      if (ja()) {
        const b = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
        return o || la(b, a), d(b);
      } else
        return P();
    }
    function P() {
      if (R !== "pending")
        try {
          const b = Mb(e);
          typeof b?.then == "function" ? (R = "pending", b.then((y) => {
            R = "resolved", w(null, y);
          }, (y) => {
            R = "rejected", f = y;
          })) : w(null, b);
        } catch (b) {
          f = b;
        }
    }
    function q() {
      let b;
      f ? (b = f, !o && b.name === "TestingLibraryElementError" && la(b, a)) : (b = new Error("Timed out in waitFor."), o || la(b, a)), w(l(b), null);
    }
  });
}
function Jb(e, t) {
  const r = new Error("STACK_TRACE_MESSAGE");
  return J().asyncWrapper(() => Qb(e, {
    stackTraceError: r,
    ...t
  }));
}
function rd(e, t) {
  return J().getElementError(e, t);
}
function Zb(e, t) {
  return rd(e + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", t);
}
function Oa(e, t, r, n) {
  let {
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  } = n === void 0 ? {} : n;
  const u = o ? rt : zt, s = qt({
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  });
  return Array.from(t.querySelectorAll("[" + e + "]")).filter((d) => u(d.getAttribute(e), d, r, s));
}
function Ra(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (i.length > 1) {
      const l = i.map((u) => rd(null, u).message).join(`

`);
      throw Zb(t(r, ...o) + `

Here are the matching elements:

` + l, r);
    }
    return i[0] || null;
  };
}
function nd(e, t) {
  return J().getElementError(`A better query is available, try this:
` + e.toString() + `
`, t);
}
function eh(e, t) {
  return function(r) {
    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
      o[a - 1] = arguments[a];
    const i = e(r, ...o);
    if (!i.length)
      throw J().getElementError(t(r, ...o), r);
    return i;
  };
}
function Ea(e) {
  return (t, r, n, o) => Jb(() => e(t, r, n), {
    container: t,
    ...o
  });
}
const Nt = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const l = e(n, ...a), [{
    suggest: u = J().throwSuggestions
  } = {}] = a.slice(-1);
  if (l && u) {
    const s = Ga(l, r);
    if (s && !t.endsWith(s.queryName))
      throw nd(s.toString(), n);
  }
  return l;
}, ke = (e, t, r) => function(n) {
  for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
    a[i - 1] = arguments[i];
  const l = e(n, ...a), [{
    suggest: u = J().throwSuggestions
  } = {}] = a.slice(-1);
  if (l.length && u) {
    const s = [...new Set(l.map((d) => {
      var f;
      return (f = Ga(d, r)) == null ? void 0 : f.toString();
    }))];
    if (
      // only want to suggest if all the els have the same suggestion.
      s.length === 1 && !t.endsWith(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- TODO: Can this be null at runtime?
        Ga(l[0], r).queryName
      )
    )
      throw nd(s[0], n);
  }
  return l;
};
function Pt(e, t, r) {
  const n = Nt(Ra(e, t), e.name, "query"), o = eh(e, r), a = Ra(o, t), i = Nt(a, e.name, "get"), l = ke(o, e.name.replace("query", "get"), "getAll"), u = Ea(ke(o, e.name, "findAll")), s = Ea(Nt(a, e.name, "find"));
  return [n, l, i, u, s];
}
function th(e) {
  return Array.from(e.querySelectorAll("label,input")).map((t) => ({
    node: t,
    textToMatch: Ka(t)
  })).filter((t) => {
    let {
      textToMatch: r
    } = t;
    return r !== null;
  });
}
const rh = function(e, t, r) {
  let {
    exact: n = !0,
    trim: o,
    collapseWhitespace: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  const l = n ? rt : zt, u = qt({
    collapseWhitespace: a,
    trim: o,
    normalizer: i
  });
  return th(e).filter((d) => {
    let {
      node: f,
      textToMatch: c
    } = d;
    return l(c, f, t, u);
  }).map((d) => {
    let {
      node: f
    } = d;
    return f;
  });
}, Ko = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  } = r === void 0 ? {} : r;
  ot(e);
  const u = o ? rt : zt, s = qt({
    collapseWhitespace: a,
    trim: i,
    normalizer: l
  }), d = Array.from(e.querySelectorAll("*")).filter((f) => Xc(f).length || f.hasAttribute("aria-labelledby")).reduce((f, c) => {
    const h = Qc(e, c, {
      selector: n
    });
    h.filter((R) => !!R.formControl).forEach((R) => {
      u(R.content, R.formControl, t, s) && R.formControl && f.push(R.formControl);
    });
    const g = h.filter((R) => !!R.content).map((R) => R.content);
    return u(g.join(" "), c, t, s) && f.push(c), g.length > 1 && g.forEach((R, T) => {
      u(R, c, t, s) && f.push(c);
      const p = [...g];
      p.splice(T, 1), p.length > 1 && u(p.join(" "), c, t, s) && f.push(c);
    }), f;
  }, []).concat(Oa("aria-label", e, t, {
    exact: o,
    normalizer: s
  }));
  return Array.from(new Set(d)).filter((f) => f.matches(n));
}, Ct = function(e, t) {
  for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    n[o - 2] = arguments[o];
  const a = Ko(e, t, ...n);
  if (!a.length) {
    const i = rh(e, t, ...n);
    if (i.length) {
      const l = i.map((u) => nh(e, u)).filter((u) => !!u);
      throw l.length ? J().getElementError(l.map((u) => "Found a label with the text of: " + t + ", however the element associated with this label (<" + u + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + u + " />, you can use aria-label or aria-labelledby instead.").join(`

`), e) : J().getElementError("Found a label with the text of: " + t + `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`, e);
    } else
      throw J().getElementError("Unable to find a label with the text of: " + t, e);
  }
  return a;
};
function nh(e, t) {
  const r = t.getAttribute("for");
  if (!r)
    return null;
  const n = e.querySelector('[id="' + r + '"]');
  return n ? n.tagName.toLowerCase() : null;
}
const od = (e, t) => "Found multiple elements with the text of: " + t, oh = Nt(Ra(Ko, od), Ko.name, "query"), ad = Ra(Ct, od), ah = Ea(ke(Ct, Ct.name, "findAll")), ih = Ea(Nt(ad, Ct.name, "find")), lh = ke(Ct, Ct.name, "getAll"), uh = Nt(ad, Ct.name, "get"), sh = ke(Ko, Ko.name, "queryAll"), Ya = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ot(t[0]), Oa("placeholder", ...t);
}, ch = (e, t) => "Found multiple elements with the placeholder text of: " + t, dh = (e, t) => "Unable to find an element with the placeholder text of: " + t, fh = ke(Ya, Ya.name, "queryAll"), [ph, mh, vh, bh, hh] = Pt(Ya, ch, dh), Xa = function(e, t, r) {
  let {
    selector: n = "*",
    exact: o = !0,
    collapseWhitespace: a,
    trim: i,
    ignore: l = J().defaultIgnore,
    normalizer: u
  } = r === void 0 ? {} : r;
  ot(e);
  const s = o ? rt : zt, d = qt({
    collapseWhitespace: a,
    trim: i,
    normalizer: u
  });
  let f = [];
  return typeof e.matches == "function" && e.matches(n) && (f = [e]), [...f, ...Array.from(e.querySelectorAll(n))].filter((c) => !l || !c.matches(l)).filter((c) => s(Sa(c), c, t, d));
}, yh = (e, t) => "Found multiple elements with the text: " + t, gh = function(e, t, r) {
  r === void 0 && (r = {});
  const {
    collapseWhitespace: n,
    trim: o,
    normalizer: a,
    selector: i
  } = r, u = qt({
    collapseWhitespace: n,
    trim: o,
    normalizer: a
  })(t.toString()), s = u !== t.toString(), d = (i ?? "*") !== "*";
  return "Unable to find an element with the text: " + (s ? u + " (normalized from '" + t + "')" : t) + (d ? ", which matches selector '" + i + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
}, Rh = ke(Xa, Xa.name, "queryAll"), [Eh, Ch, wh, _h, qh] = Pt(Xa, yh, gh), Qa = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  ot(e);
  const l = n ? rt : zt, u = qt({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("input,textarea,select")).filter((s) => s.tagName === "SELECT" ? Array.from(s.options).filter((f) => f.selected).some((f) => l(Sa(f), f, t, u)) : l(s.value, s, t, u));
}, Ph = (e, t) => "Found multiple elements with the display value: " + t + ".", Th = (e, t) => "Unable to find an element with the display value: " + t + ".", xh = ke(Qa, Qa.name, "queryAll"), [Sh, Oh, Mh, Ah, Ih] = Pt(Qa, Ph, Th), kh = /^(img|input|area|.+-.+)$/i, Ja = function(e, t, r) {
  return r === void 0 && (r = {}), ot(e), Oa("alt", e, t, r).filter((n) => kh.test(n.tagName));
}, Dh = (e, t) => "Found multiple elements with the alt text: " + t, Nh = (e, t) => "Unable to find an element with the alt text: " + t, Lh = ke(Ja, Ja.name, "queryAll"), [Bh, Fh, Uh, jh, $h] = Pt(Ja, Dh, Nh), Hh = (e) => {
  var t;
  return e.tagName.toLowerCase() === "title" && ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === "svg";
}, Za = function(e, t, r) {
  let {
    exact: n = !0,
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  } = r === void 0 ? {} : r;
  ot(e);
  const l = n ? rt : zt, u = qt({
    collapseWhitespace: o,
    trim: a,
    normalizer: i
  });
  return Array.from(e.querySelectorAll("[title], svg > title")).filter((s) => l(s.getAttribute("title"), s, t, u) || Hh(s) && l(Sa(s), s, t, u));
}, Vh = (e, t) => "Found multiple elements with the title: " + t + ".", Wh = (e, t) => "Unable to find an element with the title: " + t + ".", zh = ke(Za, Za.name, "queryAll"), [Kh, Gh, Yh, Xh, Qh] = Pt(Za, Vh, Wh), ei = function(e, t, r) {
  let {
    hidden: n = J().defaultHidden,
    name: o,
    description: a,
    queryFallbacks: i = !1,
    selected: l,
    busy: u,
    checked: s,
    pressed: d,
    current: f,
    level: c,
    expanded: h,
    value: {
      now: g,
      min: R,
      max: T,
      text: p
    } = {}
  } = r === void 0 ? {} : r;
  if (ot(e), l !== void 0) {
    var w;
    if (((w = Ie.roles.get(t)) == null ? void 0 : w.props["aria-selected"]) === void 0)
      throw new Error('"aria-selected" is not supported on role "' + t + '".');
  }
  if (u !== void 0) {
    var _;
    if (((_ = Ie.roles.get(t)) == null ? void 0 : _.props["aria-busy"]) === void 0)
      throw new Error('"aria-busy" is not supported on role "' + t + '".');
  }
  if (s !== void 0) {
    var P;
    if (((P = Ie.roles.get(t)) == null ? void 0 : P.props["aria-checked"]) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + t + '".');
  }
  if (d !== void 0) {
    var q;
    if (((q = Ie.roles.get(t)) == null ? void 0 : q.props["aria-pressed"]) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + t + '".');
  }
  if (f !== void 0) {
    var b;
    if (((b = Ie.roles.get(t)) == null ? void 0 : b.props["aria-current"]) === void 0)
      throw new Error('"aria-current" is not supported on role "' + t + '".');
  }
  if (c !== void 0 && t !== "heading")
    throw new Error('Role "' + t + '" cannot have "level" property.');
  if (g !== void 0) {
    var y;
    if (((y = Ie.roles.get(t)) == null ? void 0 : y.props["aria-valuenow"]) === void 0)
      throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
  }
  if (T !== void 0) {
    var E;
    if (((E = Ie.roles.get(t)) == null ? void 0 : E.props["aria-valuemax"]) === void 0)
      throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
  }
  if (R !== void 0) {
    var A;
    if (((A = Ie.roles.get(t)) == null ? void 0 : A.props["aria-valuemin"]) === void 0)
      throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
  }
  if (p !== void 0) {
    var L;
    if (((L = Ie.roles.get(t)) == null ? void 0 : L.props["aria-valuetext"]) === void 0)
      throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
  }
  if (h !== void 0) {
    var F;
    if (((F = Ie.roles.get(t)) == null ? void 0 : F.props["aria-expanded"]) === void 0)
      throw new Error('"aria-expanded" is not supported on role "' + t + '".');
  }
  const U = /* @__PURE__ */ new WeakMap();
  function O(B) {
    return U.has(B) || U.set(B, td(B)), U.get(B);
  }
  return Array.from(e.querySelectorAll(
    // Only query elements that can be matched by the following filters
    Jh(t)
  )).filter((B) => {
    if (B.hasAttribute("role")) {
      const G = B.getAttribute("role");
      if (i)
        return G.split(" ").filter(Boolean).some((me) => me === t);
      const [se] = G.split(" ");
      return se === t;
    }
    return bi(B).some((G) => G === t);
  }).filter((B) => {
    if (l !== void 0)
      return l === Fb(B);
    if (u !== void 0)
      return u === Ub(B);
    if (s !== void 0)
      return s === jb(B);
    if (d !== void 0)
      return d === $b(B);
    if (f !== void 0)
      return f === Hb(B);
    if (h !== void 0)
      return h === Vb(B);
    if (c !== void 0)
      return c === Wb(B);
    if (g !== void 0 || T !== void 0 || R !== void 0 || p !== void 0) {
      let re = !0;
      if (g !== void 0 && re && (re = g === zb(B)), T !== void 0 && re && (re = T === Kb(B)), R !== void 0 && re && (re = R === Gb(B)), p !== void 0) {
        var V;
        re && (re = rt((V = Yb(B)) != null ? V : null, B, p, (G) => G));
      }
      return re;
    }
    return !0;
  }).filter((B) => o === void 0 ? !0 : rt(ci(B, {
    computedStyleSupportsPseudoElements: J().computedStyleSupportsPseudoElements
  }), B, o, (V) => V)).filter((B) => a === void 0 ? !0 : rt(Fc(B, {
    computedStyleSupportsPseudoElements: J().computedStyleSupportsPseudoElements
  }), B, a, (V) => V)).filter((B) => n === !1 ? vi(B, {
    isSubtreeInaccessible: O
  }) === !1 : !0);
};
function Jh(e) {
  var t;
  const r = '*[role~="' + e + '"]', n = (t = Ie.roleElements.get(e)) != null ? t : /* @__PURE__ */ new Set(), o = new Set(Array.from(n).map((a) => {
    let {
      name: i
    } = a;
    return i;
  }));
  return [r].concat(Array.from(o)).join(",");
}
const id = (e) => {
  let t = "";
  return e === void 0 ? t = "" : typeof e == "string" ? t = ' and name "' + e + '"' : t = " and name `" + e + "`", t;
}, Zh = function(e, t, r) {
  let {
    name: n
  } = r === void 0 ? {} : r;
  return 'Found multiple elements with the role "' + t + '"' + id(n);
}, ey = function(e, t, r) {
  let {
    hidden: n = J().defaultHidden,
    name: o,
    description: a
  } = r === void 0 ? {} : r;
  if (J()._disableExpensiveErrorDiagnostics)
    return 'Unable to find role="' + t + '"' + id(o);
  let i = "";
  Array.from(e.children).forEach((d) => {
    i += Bb(d, {
      hidden: n,
      includeDescription: a !== void 0
    });
  });
  let l;
  i.length === 0 ? n === !1 ? l = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole" : l = "There are no available roles." : l = (`
Here are the ` + (n === !1 ? "accessible" : "available") + ` roles:

  ` + i.replace(/\n/g, `
  `).replace(/\n\s\s\n/g, `

`) + `
`).trim();
  let u = "";
  o === void 0 ? u = "" : typeof o == "string" ? u = ' and name "' + o + '"' : u = " and name `" + o + "`";
  let s = "";
  return a === void 0 ? s = "" : typeof a == "string" ? s = ' and description "' + a + '"' : s = " and description `" + a + "`", (`
Unable to find an ` + (n === !1 ? "accessible " : "") + 'element with the role "' + t + '"' + u + s + `

` + l).trim();
}, ty = ke(ei, ei.name, "queryAll"), [ry, ny, oy, ay, iy] = Pt(ei, Zh, ey), hi = () => J().testIdAttribute, ti = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return ot(t[0]), Oa(hi(), ...t);
}, ly = (e, t) => "Found multiple elements by: [" + hi() + '="' + t + '"]', uy = (e, t) => "Unable to find an element by: [" + hi() + '="' + t + '"]', sy = ke(ti, ti.name, "queryAll"), [cy, dy, fy, py, my] = Pt(ti, ly, uy);
var ri = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  queryAllByLabelText: sh,
  queryByLabelText: oh,
  getAllByLabelText: lh,
  getByLabelText: uh,
  findAllByLabelText: ah,
  findByLabelText: ih,
  queryByPlaceholderText: ph,
  queryAllByPlaceholderText: fh,
  getByPlaceholderText: vh,
  getAllByPlaceholderText: mh,
  findAllByPlaceholderText: bh,
  findByPlaceholderText: hh,
  queryByText: Eh,
  queryAllByText: Rh,
  getByText: wh,
  getAllByText: Ch,
  findAllByText: _h,
  findByText: qh,
  queryByDisplayValue: Sh,
  queryAllByDisplayValue: xh,
  getByDisplayValue: Mh,
  getAllByDisplayValue: Oh,
  findAllByDisplayValue: Ah,
  findByDisplayValue: Ih,
  queryByAltText: Bh,
  queryAllByAltText: Lh,
  getByAltText: Uh,
  getAllByAltText: Fh,
  findAllByAltText: jh,
  findByAltText: $h,
  queryByTitle: Kh,
  queryAllByTitle: zh,
  getByTitle: Yh,
  getAllByTitle: Gh,
  findAllByTitle: Xh,
  findByTitle: Qh,
  queryByRole: ry,
  queryAllByRole: ty,
  getAllByRole: ny,
  getByRole: oy,
  findAllByRole: ay,
  findByRole: iy,
  queryByTestId: cy,
  queryAllByTestId: sy,
  getByTestId: fy,
  getAllByTestId: dy,
  findAllByTestId: py,
  findByTestId: my
});
function ld(e, t, r) {
  return t === void 0 && (t = ri), r === void 0 && (r = {}), Object.keys(t).reduce((n, o) => {
    const a = t[o];
    return n[o] = a.bind(null, e), n;
  }, r);
}
const Js = {
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
}, Zs = {
  doubleClick: "dblClick"
};
function Go(e, t) {
  return J().eventWrapper(() => {
    if (!t)
      throw new Error("Unable to fire an event - please provide an event object.");
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function $a(e, t, r, n) {
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
      value: l,
      files: u,
      ...s
    } = {}
  } = i;
  l !== void 0 && vy(t, l), u !== void 0 && Object.defineProperty(t, "files", {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: u
  }), Object.assign(t, s);
  const d = Gc(t), f = d[o] || d.Event;
  let c;
  if (typeof f == "function")
    c = new f(e, i);
  else {
    c = d.document.createEvent(o);
    const {
      bubbles: g,
      cancelable: R,
      detail: T,
      ...p
    } = i;
    c.initEvent(e, g, R, T), Object.keys(p).forEach((w) => {
      c[w] = p[w];
    });
  }
  return ["dataTransfer", "clipboardData"].forEach((g) => {
    const R = i[g];
    typeof R == "object" && (typeof d.DataTransfer == "function" ? Object.defineProperty(c, g, {
      value: Object.getOwnPropertyNames(R).reduce((T, p) => (Object.defineProperty(T, p, {
        value: R[p]
      }), T), new d.DataTransfer())
    }) : Object.defineProperty(c, g, {
      value: R
    }));
  }), c;
}
Object.keys(Js).forEach((e) => {
  const {
    EventType: t,
    defaultInit: r
  } = Js[e], n = e.toLowerCase();
  $a[e] = (o, a) => $a(n, o, a, {
    EventType: t,
    defaultInit: r
  }), Go[e] = (o, a) => Go(o, $a[e](o, a));
});
function vy(e, t) {
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
Object.keys(Zs).forEach((e) => {
  const t = Zs[e];
  Go[e] = function() {
    return Go[t](...arguments);
  };
});
function by(e) {
  return e.replace(/[ \t]*[\n][ \t]*/g, `
`);
}
function hy(e) {
  return db.compressToEncodedURIComponent(by(e));
}
function yy(e) {
  return "https://testing-playground.com/#markup=" + hy(e);
}
const gy = (e, t, r) => Array.isArray(e) ? e.forEach((n) => Ys(n, t, r)) : Ys(e, t, r), Ry = function(e) {
  if (e === void 0 && (e = mi().body), !e || !("innerHTML" in e)) {
    console.log("The element you're providing isn't a valid DOM element.");
    return;
  }
  if (!e.innerHTML) {
    console.log("The provided element doesn't have any children.");
    return;
  }
  const t = yy(e.innerHTML);
  return console.log(`Open this URL in your browser

` + t), t;
}, ec = {
  debug: gy,
  logTestingPlaygroundURL: Ry
};
typeof document < "u" && document.body ? ld(document.body, ri, ec) : Object.keys(ri).reduce((e, t) => (e[t] = () => {
  throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
}, e), ec);
var ua = { exports: {} }, fe = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tc;
function Ey() {
  if (tc) return fe;
  tc = 1;
  var e = Sc, t = Rt;
  function r(m) {
    var I = m, M = m;
    if (m.alternate) for (; I.return; ) I = I.return;
    else {
      m = I;
      do
        I = m, (I.flags & 4098) !== 0 && (M = I.return), m = I.return;
      while (m);
    }
    return I.tag === 3 ? M : null;
  }
  function n(m) {
    if (r(m) !== m) throw Error("Unable to find node on an unmounted component.");
  }
  function o(m) {
    var I = m.alternate;
    if (!I) {
      if (I = r(m), I === null) throw Error("Unable to find node on an unmounted component.");
      return I !== m ? null : m;
    }
    for (var M = m, H = I; ; ) {
      var ee = M.return;
      if (ee === null) break;
      var te = ee.alternate;
      if (te === null) {
        if (H = ee.return, H !== null) {
          M = H;
          continue;
        }
        break;
      }
      if (ee.child === te.child) {
        for (te = ee.child; te; ) {
          if (te === M) return n(ee), m;
          if (te === H) return n(ee), I;
          te = te.sibling;
        }
        throw Error("Unable to find node on an unmounted component.");
      }
      if (M.return !== H.return) M = ee, H = te;
      else {
        for (var Y = !1, ne = ee.child; ne; ) {
          if (ne === M) {
            Y = !0, M = ee, H = te;
            break;
          }
          if (ne === H) {
            Y = !0, H = ee, M = te;
            break;
          }
          ne = ne.sibling;
        }
        if (!Y) {
          for (ne = te.child; ne; ) {
            if (ne === M) {
              Y = !0, M = te, H = ee;
              break;
            }
            if (ne === H) {
              Y = !0, H = te, M = ee;
              break;
            }
            ne = ne.sibling;
          }
          if (!Y) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
        }
      }
      if (M.alternate !== H) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    }
    if (M.tag !== 3) throw Error("Unable to find node on an unmounted component.");
    return M.stateNode.current === M ? m : I;
  }
  var a = Object.assign;
  function i(m) {
    var I = m.keyCode;
    return "charCode" in m ? (m = m.charCode, m === 0 && I === 13 && (m = 13)) : m = I, m === 10 && (m = 13), 32 <= m || m === 13 ? m : 0;
  }
  function l() {
    return !0;
  }
  function u() {
    return !1;
  }
  function s(m) {
    function I(M, H, ee, te, Y) {
      this._reactName = M, this._targetInst = ee, this.type = H, this.nativeEvent = te, this.target = Y, this.currentTarget = null;
      for (var ne in m) m.hasOwnProperty(ne) && (M = m[ne], this[ne] = M ? M(te) : te[ne]);
      return this.isDefaultPrevented = (te.defaultPrevented != null ? te.defaultPrevented : te.returnValue === !1) ? l : u, this.isPropagationStopped = u, this;
    }
    return a(I.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var M = this.nativeEvent;
      M && (M.preventDefault ? M.preventDefault() : typeof M.returnValue != "unknown" && (M.returnValue = !1), this.isDefaultPrevented = l);
    }, stopPropagation: function() {
      var M = this.nativeEvent;
      M && (M.stopPropagation ? M.stopPropagation() : typeof M.cancelBubble != "unknown" && (M.cancelBubble = !0), this.isPropagationStopped = l);
    }, persist: function() {
    }, isPersistent: l }), I;
  }
  var d = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(m) {
    return m.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, f = s(d), c = a({}, d, { view: 0, detail: 0 });
  s(c);
  var h, g, R, T = a({}, c, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: L, button: 0, buttons: 0, relatedTarget: function(m) {
    return m.relatedTarget === void 0 ? m.fromElement === m.srcElement ? m.toElement : m.fromElement : m.relatedTarget;
  }, movementX: function(m) {
    return "movementX" in m ? m.movementX : (m !== R && (R && m.type === "mousemove" ? (h = m.screenX - R.screenX, g = m.screenY - R.screenY) : g = h = 0, R = m), h);
  }, movementY: function(m) {
    return "movementY" in m ? m.movementY : g;
  } });
  s(T);
  var p = a({}, T, { dataTransfer: 0 });
  s(p);
  var w = a({}, c, { relatedTarget: 0 });
  s(w);
  var _ = a({}, d, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
  s(_);
  var P = a({}, d, { clipboardData: function(m) {
    return "clipboardData" in m ? m.clipboardData : window.clipboardData;
  } });
  s(P);
  var q = a({}, d, { data: 0 });
  s(q);
  var b = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, y = {
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
  }, E = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function A(m) {
    var I = this.nativeEvent;
    return I.getModifierState ? I.getModifierState(m) : (m = E[m]) ? !!I[m] : !1;
  }
  function L() {
    return A;
  }
  var F = a({}, c, { key: function(m) {
    if (m.key) {
      var I = b[m.key] || m.key;
      if (I !== "Unidentified") return I;
    }
    return m.type === "keypress" ? (m = i(m), m === 13 ? "Enter" : String.fromCharCode(m)) : m.type === "keydown" || m.type === "keyup" ? y[m.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: L, charCode: function(m) {
    return m.type === "keypress" ? i(m) : 0;
  }, keyCode: function(m) {
    return m.type === "keydown" || m.type === "keyup" ? m.keyCode : 0;
  }, which: function(m) {
    return m.type === "keypress" ? i(m) : m.type === "keydown" || m.type === "keyup" ? m.keyCode : 0;
  } });
  s(F);
  var U = a({}, T, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
  s(U);
  var O = a({}, c, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: L });
  s(O);
  var B = a({}, d, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
  s(B);
  var V = a({}, T, { deltaX: function(m) {
    return "deltaX" in m ? m.deltaX : "wheelDeltaX" in m ? -m.wheelDeltaX : 0;
  }, deltaY: function(m) {
    return "deltaY" in m ? m.deltaY : "wheelDeltaY" in m ? -m.wheelDeltaY : "wheelDelta" in m ? -m.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0 });
  s(V);
  function re(m, I, M, H, ee, te, Y, ne, Ee) {
    var qe = Array.prototype.slice.call(arguments, 3);
    try {
      I.apply(M, qe);
    } catch (Xt) {
      this.onError(Xt);
    }
  }
  var G = !1, se = null, me = !1, _e = null, Se = { onError: function(m) {
    G = !0, se = m;
  } };
  function Oe(m, I, M, H, ee, te, Y, ne, Ee) {
    G = !1, se = null, re.apply(Se, arguments);
  }
  function $(m, I, M, H, ee, te, Y, ne, Ee) {
    if (Oe.apply(this, arguments), G) {
      if (G) {
        var qe = se;
        G = !1, se = null;
      } else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
      me || (me = !0, _e = qe);
    }
  }
  var we = Array.isArray, ve = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, Re = ve[0], $e = ve[1], He = ve[2], C = ve[3], j = ve[4], D = e.unstable_act;
  function X() {
  }
  function z(m, I) {
    if (!m) return [];
    if (m = o(m), !m) return [];
    for (var M = m, H = []; ; ) {
      if (M.tag === 5 || M.tag === 6 || M.tag === 1 || M.tag === 0) {
        var ee = M.stateNode;
        I(ee) && H.push(ee);
      }
      if (M.child) M.child.return = M, M = M.child;
      else {
        if (M === m) return H;
        for (; !M.sibling; ) {
          if (!M.return || M.return === m) return H;
          M = M.return;
        }
        M.sibling.return = M.return, M = M.sibling;
      }
    }
  }
  function Z(m, I) {
    if (m && !m._reactInternals) {
      var M = String(m);
      throw m = we(m) ? "an array" : m && m.nodeType === 1 && m.tagName ? "a DOM node" : M === "[object Object]" ? "object with keys {" + Object.keys(m).join(", ") + "}" : M, Error(I + "(...): the first argument must be a React class instance. Instead received: " + (m + "."));
    }
  }
  function ue(m) {
    return !(!m || m.nodeType !== 1 || !m.tagName);
  }
  function ie(m) {
    return ue(m) ? !1 : m != null && typeof m.render == "function" && typeof m.setState == "function";
  }
  function be(m, I) {
    return ie(m) ? m._reactInternals.type === I : !1;
  }
  function Ne(m, I) {
    return Z(m, "findAllInRenderedTree"), m ? z(m._reactInternals, I) : [];
  }
  function at(m, I) {
    return Z(m, "scryRenderedDOMComponentsWithClass"), Ne(m, function(M) {
      if (ue(M)) {
        var H = M.className;
        typeof H != "string" && (H = M.getAttribute("class") || "");
        var ee = H.split(/\s+/);
        if (!we(I)) {
          if (I === void 0) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
          I = I.split(/\s+/);
        }
        return I.every(function(te) {
          return ee.indexOf(te) !== -1;
        });
      }
      return !1;
    });
  }
  function Tt(m, I) {
    return Z(m, "scryRenderedDOMComponentsWithTag"), Ne(m, function(M) {
      return ue(M) && M.tagName.toUpperCase() === I.toUpperCase();
    });
  }
  function xt(m, I) {
    return Z(m, "scryRenderedComponentsWithType"), Ne(m, function(M) {
      return be(M, I);
    });
  }
  function St(m, I, M) {
    var H = m.type || "unknown-event";
    m.currentTarget = $e(M), $(H, I, void 0, m), m.currentTarget = null;
  }
  function Ot(m, I, M) {
    for (var H = []; m; ) {
      H.push(m);
      do
        m = m.return;
      while (m && m.tag !== 5);
      m = m || null;
    }
    for (m = H.length; 0 < m--; ) I(H[m], "captured", M);
    for (m = 0; m < H.length; m++) I(H[m], "bubbled", M);
  }
  function Mt(m, I) {
    var M = m.stateNode;
    if (!M) return null;
    var H = He(M);
    if (!H) return null;
    M = H[I];
    e: switch (I) {
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
        (H = !H.disabled) || (m = m.type, H = !(m === "button" || m === "input" || m === "select" || m === "textarea")), m = !H;
        break e;
      default:
        m = !1;
    }
    if (m) return null;
    if (M && typeof M != "function") throw Error("Expected `" + I + "` listener to be a function, instead got a value of `" + typeof M + "` type.");
    return M;
  }
  function Gt(m, I, M) {
    m && M && M._reactName && (I = Mt(m, M._reactName)) && (M._dispatchListeners == null && (M._dispatchListeners = []), M._dispatchInstances == null && (M._dispatchInstances = []), M._dispatchListeners.push(I), M._dispatchInstances.push(m));
  }
  function mt(m, I, M) {
    var H = M._reactName;
    I === "captured" && (H += "Capture"), (I = Mt(m, H)) && (M._dispatchListeners == null && (M._dispatchListeners = []), M._dispatchInstances == null && (M._dispatchInstances = []), M._dispatchListeners.push(I), M._dispatchInstances.push(m));
  }
  var At = {}, Ve = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
  function Yt(m) {
    return function(I, M) {
      if (e.isValidElement(I)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
      if (ie(I)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
      var H = "on" + m[0].toUpperCase() + m.slice(1), ee = new X();
      ee.target = I, ee.type = m.toLowerCase();
      var te = Re(I), Y = new f(H, ee.type, te, ee, I);
      Y.persist(), a(Y, M), Ve.has(m) ? Y && Y._reactName && Gt(Y._targetInst, null, Y) : Y && Y._reactName && Ot(Y._targetInst, mt, Y), t.unstable_batchedUpdates(function() {
        if (C(I), Y) {
          var ne = Y._dispatchListeners, Ee = Y._dispatchInstances;
          if (we(ne)) for (var qe = 0; qe < ne.length && !Y.isPropagationStopped(); qe++) St(Y, ne[qe], Ee[qe]);
          else ne && St(Y, ne, Ee);
          Y._dispatchListeners = null, Y._dispatchInstances = null, Y.isPersistent() || Y.constructor.release(Y);
        }
        if (me) throw ne = _e, me = !1, _e = null, ne;
      }), j();
    };
  }
  return "blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(m) {
    At[m] = Yt(m);
  }), fe.Simulate = At, fe.act = D, fe.findAllInRenderedTree = Ne, fe.findRenderedComponentWithType = function(m, I) {
    if (Z(m, "findRenderedComponentWithType"), m = xt(m, I), m.length !== 1) throw Error("Did not find exactly one match (found: " + m.length + ") for componentType:" + I);
    return m[0];
  }, fe.findRenderedDOMComponentWithClass = function(m, I) {
    if (Z(m, "findRenderedDOMComponentWithClass"), m = at(m, I), m.length !== 1) throw Error("Did not find exactly one match (found: " + m.length + ") for class:" + I);
    return m[0];
  }, fe.findRenderedDOMComponentWithTag = function(m, I) {
    if (Z(m, "findRenderedDOMComponentWithTag"), m = Tt(m, I), m.length !== 1) throw Error("Did not find exactly one match (found: " + m.length + ") for tag:" + I);
    return m[0];
  }, fe.isCompositeComponent = ie, fe.isCompositeComponentWithType = be, fe.isDOMComponent = ue, fe.isDOMComponentElement = function(m) {
    return !!(m && e.isValidElement(m) && m.tagName);
  }, fe.isElement = function(m) {
    return e.isValidElement(m);
  }, fe.isElementOfType = function(m, I) {
    return e.isValidElement(m) && m.type === I;
  }, fe.mockComponent = function(m, I) {
    return I = I || m.mockTagName || "div", m.prototype.render.mockImplementation(function() {
      return e.createElement(I, null, this.props.children);
    }), this;
  }, fe.nativeTouchData = function(m, I) {
    return { touches: [{ pageX: m, pageY: I }] };
  }, fe.renderIntoDocument = function(m) {
    var I = document.createElement("div");
    return t.render(m, I);
  }, fe.scryRenderedComponentsWithType = xt, fe.scryRenderedDOMComponentsWithClass = at, fe.scryRenderedDOMComponentsWithTag = Tt, fe.traverseTwoPhase = Ot, fe;
}
var pe = {};
/**
 * @license React
 * react-dom-test-utils.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rc;
function Cy() {
  return rc || (rc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Sc, t = Rt, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function n(v) {
      {
        for (var x = arguments.length, S = new Array(x > 1 ? x - 1 : 0), k = 1; k < x; k++)
          S[k - 1] = arguments[k];
        a("warn", v, S);
      }
    }
    function o(v) {
      {
        for (var x = arguments.length, S = new Array(x > 1 ? x - 1 : 0), k = 1; k < x; k++)
          S[k - 1] = arguments[k];
        a("error", v, S);
      }
    }
    function a(v, x, S) {
      {
        var k = r.ReactDebugCurrentFrame, W = k.getStackAddendum();
        W !== "" && (x += "%s", S = S.concat([W]));
        var Q = S.map(function(ce) {
          return String(ce);
        });
        Q.unshift("Warning: " + x), Function.prototype.apply.call(console[v], console, Q);
      }
    }
    function i(v) {
      return v._reactInternals;
    }
    var l = 0, u = 1, s = 3, d = 5, f = 6, c = (
      /*                      */
      0
    ), h = (
      /*                    */
      2
    ), g = (
      /*                    */
      4096
    );
    r.ReactCurrentOwner;
    function R(v) {
      var x = v, S = v;
      if (v.alternate)
        for (; x.return; )
          x = x.return;
      else {
        var k = x;
        do
          x = k, (x.flags & (h | g)) !== c && (S = x.return), k = x.return;
        while (k);
      }
      return x.tag === s ? S : null;
    }
    function T(v) {
      if (R(v) !== v)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function p(v) {
      var x = v.alternate;
      if (!x) {
        var S = R(v);
        if (S === null)
          throw new Error("Unable to find node on an unmounted component.");
        return S !== v ? null : v;
      }
      for (var k = v, W = x; ; ) {
        var Q = k.return;
        if (Q === null)
          break;
        var ce = Q.alternate;
        if (ce === null) {
          var Me = Q.return;
          if (Me !== null) {
            k = W = Me;
            continue;
          }
          break;
        }
        if (Q.child === ce.child) {
          for (var Ae = Q.child; Ae; ) {
            if (Ae === k)
              return T(Q), v;
            if (Ae === W)
              return T(Q), x;
            Ae = Ae.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (k.return !== W.return)
          k = Q, W = ce;
        else {
          for (var Pe = !1, he = Q.child; he; ) {
            if (he === k) {
              Pe = !0, k = Q, W = ce;
              break;
            }
            if (he === W) {
              Pe = !0, W = Q, k = ce;
              break;
            }
            he = he.sibling;
          }
          if (!Pe) {
            for (he = ce.child; he; ) {
              if (he === k) {
                Pe = !0, k = ce, W = Q;
                break;
              }
              if (he === W) {
                Pe = !0, W = ce, k = Q;
                break;
              }
              he = he.sibling;
            }
            if (!Pe)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (k.alternate !== W)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (k.tag !== s)
        throw new Error("Unable to find node on an unmounted component.");
      return k.stateNode.current === k ? v : x;
    }
    var w = Object.assign;
    function _(v) {
      var x, S = v.keyCode;
      return "charCode" in v ? (x = v.charCode, x === 0 && S === 13 && (x = 13)) : x = S, x === 10 && (x = 13), x >= 32 || x === 13 ? x : 0;
    }
    function P() {
      return !0;
    }
    function q() {
      return !1;
    }
    function b(v) {
      function x(S, k, W, Q, ce) {
        this._reactName = S, this._targetInst = W, this.type = k, this.nativeEvent = Q, this.target = ce, this.currentTarget = null;
        for (var Me in v)
          if (v.hasOwnProperty(Me)) {
            var Ae = v[Me];
            Ae ? this[Me] = Ae(Q) : this[Me] = Q[Me];
          }
        var Pe = Q.defaultPrevented != null ? Q.defaultPrevented : Q.returnValue === !1;
        return Pe ? this.isDefaultPrevented = P : this.isDefaultPrevented = q, this.isPropagationStopped = q, this;
      }
      return w(x.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var S = this.nativeEvent;
          S && (S.preventDefault ? S.preventDefault() : typeof S.returnValue != "unknown" && (S.returnValue = !1), this.isDefaultPrevented = P);
        },
        stopPropagation: function() {
          var S = this.nativeEvent;
          S && (S.stopPropagation ? S.stopPropagation() : typeof S.cancelBubble != "unknown" && (S.cancelBubble = !0), this.isPropagationStopped = P);
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
        isPersistent: P
      }), x;
    }
    var y = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(v) {
        return v.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, E = b(y), A = w({}, y, {
      view: 0,
      detail: 0
    });
    b(A);
    var L, F, U;
    function O(v) {
      v !== U && (U && v.type === "mousemove" ? (L = v.screenX - U.screenX, F = v.screenY - U.screenY) : (L = 0, F = 0), U = v);
    }
    var B = w({}, A, {
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
      getModifierState: ve,
      button: 0,
      buttons: 0,
      relatedTarget: function(v) {
        return v.relatedTarget === void 0 ? v.fromElement === v.srcElement ? v.toElement : v.fromElement : v.relatedTarget;
      },
      movementX: function(v) {
        return "movementX" in v ? v.movementX : (O(v), L);
      },
      movementY: function(v) {
        return "movementY" in v ? v.movementY : F;
      }
    });
    b(B);
    var V = w({}, B, {
      dataTransfer: 0
    });
    b(V);
    var re = w({}, A, {
      relatedTarget: 0
    });
    b(re);
    var G = w({}, y, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    b(G);
    var se = w({}, y, {
      clipboardData: function(v) {
        return "clipboardData" in v ? v.clipboardData : window.clipboardData;
      }
    });
    b(se);
    var me = w({}, y, {
      data: 0
    });
    b(me);
    var _e = {
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
    }, Se = {
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
    function Oe(v) {
      if (v.key) {
        var x = _e[v.key] || v.key;
        if (x !== "Unidentified")
          return x;
      }
      if (v.type === "keypress") {
        var S = _(v);
        return S === 13 ? "Enter" : String.fromCharCode(S);
      }
      return v.type === "keydown" || v.type === "keyup" ? Se[v.keyCode] || "Unidentified" : "";
    }
    var $ = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function we(v) {
      var x = this, S = x.nativeEvent;
      if (S.getModifierState)
        return S.getModifierState(v);
      var k = $[v];
      return k ? !!S[k] : !1;
    }
    function ve(v) {
      return we;
    }
    var Re = w({}, A, {
      key: Oe,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ve,
      // Legacy Interface
      charCode: function(v) {
        return v.type === "keypress" ? _(v) : 0;
      },
      keyCode: function(v) {
        return v.type === "keydown" || v.type === "keyup" ? v.keyCode : 0;
      },
      which: function(v) {
        return v.type === "keypress" ? _(v) : v.type === "keydown" || v.type === "keyup" ? v.keyCode : 0;
      }
    });
    b(Re);
    var $e = w({}, B, {
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
    b($e);
    var He = w({}, A, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ve
    });
    b(He);
    var C = w({}, y, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    });
    b(C);
    var j = w({}, B, {
      deltaX: function(v) {
        return "deltaX" in v ? v.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in v ? -v.wheelDeltaX : 0
        );
      },
      deltaY: function(v) {
        return "deltaY" in v ? v.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in v ? -v.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in v ? -v.wheelDelta : 0
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
    b(j);
    var D = 1;
    function X(v, x, S, k, W, Q, ce, Me, Ae) {
      var Pe = Array.prototype.slice.call(arguments, 3);
      try {
        x.apply(S, Pe);
      } catch (he) {
        this.onError(he);
      }
    }
    var z = X;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Z = document.createElement("react");
      z = function(x, S, k, W, Q, ce, Me, Ae, Pe) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var he = document.createEvent("Event"), Da = !1, Ii = !0, pf = window.event, ki = Object.getOwnPropertyDescriptor(window, "event");
        function Di() {
          Z.removeEventListener(Na, Ni, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = pf);
        }
        var mf = Array.prototype.slice.call(arguments, 3);
        function Ni() {
          Da = !0, Di(), S.apply(k, mf), Ii = !1;
        }
        var it, Li = !1, Bi = !1;
        function Fi(na) {
          if (it = na.error, Li = !0, it === null && na.colno === 0 && na.lineno === 0 && (Bi = !0), na.defaultPrevented && it != null && typeof it == "object")
            try {
              it._suppressLogging = !0;
            } catch {
            }
        }
        var Na = "react-" + (x || "invokeguardedcallback");
        if (window.addEventListener("error", Fi), Z.addEventListener(Na, Ni, !1), he.initEvent(Na, !1, !1), Z.dispatchEvent(he), ki && Object.defineProperty(window, "event", ki), Da && Ii && (Li ? Bi && (it = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : it = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(it)), window.removeEventListener("error", Fi), !Da)
          return Di(), X.apply(this, arguments);
      };
    }
    var ue = z, ie = !1, be = null, Ne = !1, at = null, Tt = {
      onError: function(v) {
        ie = !0, be = v;
      }
    };
    function xt(v, x, S, k, W, Q, ce, Me, Ae) {
      ie = !1, be = null, ue.apply(Tt, arguments);
    }
    function St(v, x, S, k, W, Q, ce, Me, Ae) {
      if (xt.apply(this, arguments), ie) {
        var Pe = Mt();
        Ne || (Ne = !0, at = Pe);
      }
    }
    function Ot() {
      if (Ne) {
        var v = at;
        throw Ne = !1, at = null, v;
      }
    }
    function Mt() {
      if (ie) {
        var v = be;
        return ie = !1, be = null, v;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    var Gt = Array.isArray;
    function mt(v) {
      return Gt(v);
    }
    var At = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ve = At.Events, Yt = Ve[0], m = Ve[1], I = Ve[2], M = Ve[3], H = Ve[4], ee = e.unstable_act;
    function te(v) {
    }
    var Y = !1;
    function ne(v, x) {
      if (!v)
        return [];
      var S = p(v);
      if (!S)
        return [];
      for (var k = S, W = []; ; ) {
        if (k.tag === d || k.tag === f || k.tag === u || k.tag === l) {
          var Q = k.stateNode;
          x(Q) && W.push(Q);
        }
        if (k.child) {
          k.child.return = k, k = k.child;
          continue;
        }
        if (k === S)
          return W;
        for (; !k.sibling; ) {
          if (!k.return || k.return === S)
            return W;
          k = k.return;
        }
        k.sibling.return = k.return, k = k.sibling;
      }
    }
    function Ee(v, x) {
      if (v && !i(v)) {
        var S, k = String(v);
        throw mt(v) ? S = "an array" : v && v.nodeType === D && v.tagName ? S = "a DOM node" : k === "[object Object]" ? S = "object with keys {" + Object.keys(v).join(", ") + "}" : S = k, new Error(x + "(...): the first argument must be a React class instance. " + ("Instead received: " + S + "."));
      }
    }
    var qe = !1;
    function Xt(v) {
      qe || (qe = !0, o("ReactDOMTestUtils is deprecated and will be removed in a future major release, because it exposes internal implementation details that are highly likely to change between releases. Upgrade to a modern testing library, such as @testing-library/react. See https://react.dev/warnings/react-dom-test-utils for more info."));
      var x = document.createElement("div");
      return t.render(v, x);
    }
    function Ma(v) {
      return e.isValidElement(v);
    }
    function Aa(v, x) {
      return e.isValidElement(v) && v.type === x;
    }
    function It(v) {
      return !!(v && v.nodeType === D && v.tagName);
    }
    function Ia(v) {
      return !!(v && e.isValidElement(v) && v.tagName);
    }
    function Qt(v) {
      return It(v) ? !1 : v != null && typeof v.render == "function" && typeof v.setState == "function";
    }
    function ta(v, x) {
      if (!Qt(v))
        return !1;
      var S = i(v), k = S.type;
      return k === x;
    }
    function N(v, x) {
      if (Ee(v, "findAllInRenderedTree"), !v)
        return [];
      var S = i(v);
      return ne(S, x);
    }
    function ra(v, x) {
      return Ee(v, "scryRenderedDOMComponentsWithClass"), N(v, function(S) {
        if (It(S)) {
          var k = S.className;
          typeof k != "string" && (k = S.getAttribute("class") || "");
          var W = k.split(/\s+/);
          if (!mt(x)) {
            if (x === void 0)
              throw new Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
            x = x.split(/\s+/);
          }
          return x.every(function(Q) {
            return W.indexOf(Q) !== -1;
          });
        }
        return !1;
      });
    }
    function ka(v, x) {
      Ee(v, "findRenderedDOMComponentWithClass");
      var S = ra(v, x);
      if (S.length !== 1)
        throw new Error("Did not find exactly one match (found: " + S.length + ") for class:" + x);
      return S[0];
    }
    function vt(v, x) {
      return Ee(v, "scryRenderedDOMComponentsWithTag"), N(v, function(S) {
        return It(S) && S.tagName.toUpperCase() === x.toUpperCase();
      });
    }
    function Kd(v, x) {
      Ee(v, "findRenderedDOMComponentWithTag");
      var S = vt(v, x);
      if (S.length !== 1)
        throw new Error("Did not find exactly one match (found: " + S.length + ") for tag:" + x);
      return S[0];
    }
    function Ti(v, x) {
      return Ee(v, "scryRenderedComponentsWithType"), N(v, function(S) {
        return ta(S, x);
      });
    }
    function Gd(v, x) {
      Ee(v, "findRenderedComponentWithType");
      var S = Ti(v, x);
      if (S.length !== 1)
        throw new Error("Did not find exactly one match (found: " + S.length + ") for componentType:" + x);
      return S[0];
    }
    function Yd(v, x) {
      return Y || (Y = !0, n(`ReactTestUtils.mockComponent() is deprecated. Use shallow rendering or jest.mock() instead.

See https://reactjs.org/link/test-utils-mock-component for more information.`)), x = x || v.mockTagName || "div", v.prototype.render.mockImplementation(function() {
        return e.createElement(x, null, this.props.children);
      }), this;
    }
    function Xd(v, x) {
      return {
        touches: [{
          pageX: v,
          pageY: x
        }]
      };
    }
    function xi(v, x, S) {
      var k = v.type || "unknown-event";
      v.currentTarget = m(S), St(k, x, void 0, v), v.currentTarget = null;
    }
    function Qd(v) {
      var x = v._dispatchListeners, S = v._dispatchInstances;
      if (mt(x))
        for (var k = 0; k < x.length && !v.isPropagationStopped(); k++)
          xi(v, x[k], S[k]);
      else x && xi(v, x, S);
      v._dispatchListeners = null, v._dispatchInstances = null;
    }
    var Jd = function(v) {
      v && (Qd(v), v.isPersistent() || v.constructor.release(v));
    };
    function Zd(v) {
      return v === "button" || v === "input" || v === "select" || v === "textarea";
    }
    function ef(v) {
      do
        v = v.return;
      while (v && v.tag !== d);
      return v || null;
    }
    function Si(v, x, S) {
      for (var k = []; v; )
        k.push(v), v = ef(v);
      var W;
      for (W = k.length; W-- > 0; )
        x(k[W], "captured", S);
      for (W = 0; W < k.length; W++)
        x(k[W], "bubbled", S);
    }
    function tf(v, x, S) {
      switch (v) {
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
          return !!(S.disabled && Zd(x));
        default:
          return !1;
      }
    }
    function Oi(v, x) {
      var S = v.stateNode;
      if (!S)
        return null;
      var k = I(S);
      if (!k)
        return null;
      var W = k[x];
      if (tf(x, v.type, k))
        return null;
      if (W && typeof W != "function")
        throw new Error("Expected `" + x + "` listener to be a function, instead got a value of `" + typeof W + "` type.");
      return W;
    }
    function rf(v, x, S) {
      var k = x._reactName;
      return S === "captured" && (k += "Capture"), Oi(v, k);
    }
    function nf(v, x, S) {
      if (v && S && S._reactName) {
        var k = S._reactName, W = Oi(v, k);
        W && (S._dispatchListeners == null && (S._dispatchListeners = []), S._dispatchInstances == null && (S._dispatchInstances = []), S._dispatchListeners.push(W), S._dispatchInstances.push(v));
      }
    }
    function of(v, x, S) {
      v || o("Dispatching inst must not be null");
      var k = rf(v, S, x);
      k && (S._dispatchListeners == null && (S._dispatchListeners = []), S._dispatchInstances == null && (S._dispatchInstances = []), S._dispatchListeners.push(k), S._dispatchInstances.push(v));
    }
    function af(v) {
      v && v._reactName && nf(v._targetInst, null, v);
    }
    function lf(v) {
      v && v._reactName && Si(v._targetInst, of, v);
    }
    var Mi = {}, uf = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
    function sf(v) {
      return function(x, S) {
        if (e.isValidElement(x))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
        if (Qt(x))
          throw new Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
        var k = "on" + v[0].toUpperCase() + v.slice(1), W = new te();
        W.target = x, W.type = v.toLowerCase();
        var Q = Yt(x), ce = new E(k, W.type, Q, W, x);
        ce.persist(), w(ce, S), uf.has(v) ? af(ce) : lf(ce), t.unstable_batchedUpdates(function() {
          M(x), Jd(ce), Ot();
        }), H();
      };
    }
    var cf = ["blur", "cancel", "click", "close", "contextMenu", "copy", "cut", "auxClick", "doubleClick", "dragEnd", "dragStart", "drop", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "mouseDown", "mouseUp", "paste", "pause", "play", "pointerCancel", "pointerDown", "pointerUp", "rateChange", "reset", "resize", "seeked", "submit", "touchCancel", "touchEnd", "touchStart", "volumeChange", "drag", "dragEnter", "dragExit", "dragLeave", "dragOver", "mouseMove", "mouseOut", "mouseOver", "pointerMove", "pointerOut", "pointerOver", "scroll", "toggle", "touchMove", "wheel", "abort", "animationEnd", "animationIteration", "animationStart", "canPlay", "canPlayThrough", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "playing", "progress", "seeking", "stalled", "suspend", "timeUpdate", "transitionEnd", "waiting", "mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave", "change", "select", "beforeInput", "compositionEnd", "compositionStart", "compositionUpdate"];
    function df() {
      cf.forEach(function(v) {
        Mi[v] = sf(v);
      });
    }
    df();
    var Ai = !1, ff = function(x) {
      return Ai || (Ai = !0, o("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")), ee(x);
    };
    pe.Simulate = Mi, pe.act = ff, pe.findAllInRenderedTree = N, pe.findRenderedComponentWithType = Gd, pe.findRenderedDOMComponentWithClass = ka, pe.findRenderedDOMComponentWithTag = Kd, pe.isCompositeComponent = Qt, pe.isCompositeComponentWithType = ta, pe.isDOMComponent = It, pe.isDOMComponentElement = Ia, pe.isElement = Ma, pe.isElementOfType = Aa, pe.mockComponent = Yd, pe.nativeTouchData = Xd, pe.renderIntoDocument = Xt, pe.scryRenderedComponentsWithType = Ti, pe.scryRenderedDOMComponentsWithClass = ra, pe.scryRenderedDOMComponentsWithTag = vt, pe.traverseTwoPhase = Si;
  })()), pe;
}
var nc;
function wy() {
  return nc || (nc = 1, process.env.NODE_ENV === "production" ? ua.exports = Ey() : ua.exports = Cy()), ua.exports;
}
var _y = wy(), kt = {}, oc;
function qy() {
  if (oc) return kt;
  oc = 1;
  var e = Rt;
  if (process.env.NODE_ENV === "production")
    kt.createRoot = e.createRoot, kt.hydrateRoot = e.hydrateRoot;
  else {
    var t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    kt.createRoot = function(r, n) {
      t.usingClientEntryPoint = !0;
      try {
        return e.createRoot(r, n);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, kt.hydrateRoot = function(r, n, o) {
      t.usingClientEntryPoint = !0;
      try {
        return e.hydrateRoot(r, n, o);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return kt;
}
var ac = qy();
const Py = typeof Vo.act == "function" ? Vo.act : _y.act;
function ud() {
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
function Ze(e) {
  ud().IS_REACT_ACT_ENVIRONMENT = e;
}
function Ca() {
  return ud().IS_REACT_ACT_ENVIRONMENT;
}
function Ty(e) {
  return (t) => {
    const r = Ca();
    Ze(!0);
    try {
      let n = !1;
      const o = e(() => {
        const a = t();
        return a !== null && typeof a == "object" && typeof a.then == "function" && (n = !0), a;
      });
      if (n) {
        const a = o;
        return {
          then: (i, l) => {
            a.then((u) => {
              Ze(r), i(u);
            }, (u) => {
              Ze(r), l(u);
            });
          }
        };
      } else
        return Ze(r), o;
    } catch (n) {
      throw Ze(r), n;
    }
  };
}
const Ft = Ty(Py);
Object.keys(Go).forEach((e) => {
});
let xy = {
  reactStrictMode: !1
};
function Sy() {
  return {
    ...J(),
    ...xy
  };
}
function Oy() {
  return typeof jest < "u" && jest !== null ? (
    // legacy timers
    setTimeout._isMockFunction === !0 || // modern timers
    // eslint-disable-next-line prefer-object-has-own -- No Object.hasOwn in all target environments we support.
    Object.prototype.hasOwnProperty.call(setTimeout, "clock")
  ) : !1;
}
Ab({
  unstable_advanceTimersWrapper: (e) => Ft(e),
  // We just want to run `waitFor` without IS_REACT_ACT_ENVIRONMENT
  // But that's not necessarily how `asyncWrapper` is used since it's a public method.
  // Let's just hope nobody else is using it.
  asyncWrapper: async (e) => {
    const t = Ca();
    Ze(!1);
    try {
      const r = await e();
      return await new Promise((n) => {
        setTimeout(() => {
          n();
        }, 0), Oy() && jest.advanceTimersByTime(0);
      }), r;
    } finally {
      Ze(t);
    }
  },
  eventWrapper: (e) => {
    let t;
    return Ft(() => {
      t = e();
    }), t;
  }
});
const ni = /* @__PURE__ */ new Set(), wa = [];
function oi(e, t) {
  return t ?? Sy().reactStrictMode ? /* @__PURE__ */ Vo.createElement(Vo.StrictMode, null, e) : e;
}
function ai(e, t) {
  return t ? /* @__PURE__ */ Vo.createElement(t, null, e) : e;
}
function My(e, t) {
  let {
    hydrate: r,
    onCaughtError: n,
    onRecoverableError: o,
    ui: a,
    wrapper: i,
    reactStrictMode: l
  } = t, u;
  return r ? Ft(() => {
    u = ac.hydrateRoot(e, oi(ai(a, i), l), {
      onCaughtError: n,
      onRecoverableError: o
    });
  }) : u = ac.createRoot(e, {
    onCaughtError: n,
    onRecoverableError: o
  }), {
    hydrate() {
      if (!r)
        throw new Error("Attempted to hydrate a non-hydrateable root. This is a bug in `@testing-library/react`.");
    },
    render(s) {
      u.render(s);
    },
    unmount() {
      u.unmount();
    }
  };
}
function Ay(e) {
  return {
    hydrate(t) {
      Rt.hydrate(t, e);
    },
    render(t) {
      Rt.render(t, e);
    },
    unmount() {
      Rt.unmountComponentAtNode(e);
    }
  };
}
function sd(e, t) {
  let {
    baseElement: r,
    container: n,
    hydrate: o,
    queries: a,
    root: i,
    wrapper: l,
    reactStrictMode: u
  } = t;
  return Ft(() => {
    o ? i.hydrate(oi(ai(e, l), u), n) : i.render(oi(ai(e, l), u), n);
  }), {
    container: n,
    baseElement: r,
    debug: function(s, d, f) {
      return s === void 0 && (s = r), Array.isArray(s) ? (
        // eslint-disable-next-line no-console
        s.forEach((c) => console.log(Bt(c, d, f)))
      ) : (
        // eslint-disable-next-line no-console,
        console.log(Bt(s, d, f))
      );
    },
    unmount: () => {
      Ft(() => {
        i.unmount();
      });
    },
    rerender: (s) => {
      sd(s, {
        container: n,
        baseElement: r,
        root: i,
        wrapper: l,
        reactStrictMode: u
      });
    },
    asFragment: () => {
      if (typeof document.createRange == "function")
        return document.createRange().createContextualFragment(n.innerHTML);
      {
        const s = document.createElement("template");
        return s.innerHTML = n.innerHTML, s.content;
      }
    },
    ...ld(r, a)
  };
}
function yi(e, t) {
  let {
    container: r,
    baseElement: n = r,
    legacyRoot: o = !1,
    onCaughtError: a,
    onUncaughtError: i,
    onRecoverableError: l,
    queries: u,
    hydrate: s = !1,
    wrapper: d,
    reactStrictMode: f
  } = t === void 0 ? {} : t;
  if (i !== void 0)
    throw new Error("onUncaughtError is not supported. The `render` call will already throw on uncaught errors.");
  if (o && typeof Rt.render != "function") {
    const h = new Error("`legacyRoot: true` is not supported in this version of React. If your app runs React 19 or later, you should remove this flag. If your app runs React 18 or earlier, visit https://react.dev/blog/2022/03/08/react-18-upgrade-guide for upgrade instructions.");
    throw Error.captureStackTrace(h, yi), h;
  }
  n || (n = document.body), r || (r = n.appendChild(document.createElement("div")));
  let c;
  return ni.has(r) ? wa.forEach((h) => {
    h.container === r && (c = h.root);
  }) : (c = (o ? Ay : My)(r, {
    hydrate: s,
    onCaughtError: a,
    onRecoverableError: l,
    ui: e,
    wrapper: d,
    reactStrictMode: f
  }), wa.push({
    container: r,
    root: c
  }), ni.add(r)), sd(e, {
    container: r,
    baseElement: n,
    queries: u,
    hydrate: s,
    wrapper: d,
    root: c,
    reactStrictMode: f
  });
}
function ic() {
  wa.forEach((e) => {
    let {
      root: t,
      container: r
    } = e;
    Ft(() => {
      t.unmount();
    }), r.parentNode === document.body && document.body.removeChild(r);
  }), wa.length = 0, ni.clear();
}
if ((typeof process > "u" || !process.env?.RTL_SKIP_AUTO_CLEANUP) && (typeof afterEach == "function" ? afterEach(() => {
  ic();
}) : typeof teardown == "function" && teardown(() => {
  ic();
}), typeof beforeAll == "function" && typeof afterAll == "function")) {
  let e = Ca();
  beforeAll(() => {
    e = Ca(), Ze(!0);
  }), afterAll(() => {
    Ze(e);
  });
}
function K(e, t, r) {
  return e.namespaceURI && e.namespaceURI !== "http://www.w3.org/1999/xhtml" || (t = Array.isArray(t) ? t : [
    t
  ], !t.includes(e.tagName.toLowerCase())) ? !1 : r ? Object.entries(r).every(([n, o]) => e[n] === o) : !0;
}
function De(e) {
  var t;
  if (Iy(e) && e.defaultView)
    return e.defaultView;
  if (!((t = e.ownerDocument) === null || t === void 0) && t.defaultView)
    return e.ownerDocument.defaultView;
  throw new Error(`Could not determine window of node. Node was ${ky(e)}`);
}
function Iy(e) {
  return e.nodeType === 9;
}
function ky(e) {
  return typeof e == "function" ? `function ${e.name}` : e === null ? "null" : String(e);
}
function cd(e, t) {
  return new Promise((r, n) => {
    const o = new t();
    o.onerror = n, o.onabort = n, o.onload = () => {
      r(String(o.result));
    }, o.readAsText(e);
  });
}
function gi(e, t) {
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
function ct(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class dd {
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
    ct(this, "kind", void 0), ct(this, "type", void 0), ct(this, "file", null), ct(this, "data", void 0), typeof t == "string" ? (this.kind = "string", this.type = String(r), this.data = t) : (this.kind = "file", this.type = t.type, this.file = t);
  }
}
class Dy extends Array {
  add(...t) {
    const r = new dd(t[0], t[1]);
    return this.push(r), r;
  }
  clear() {
    this.splice(0, this.length);
  }
  remove(t) {
    this.splice(t, 1);
  }
}
function sa(e, t) {
  const [r, n] = e.split("/"), o = !n || n === "*";
  return (a) => t ? a.type === (o ? r : e) : o ? a.type.startsWith(`${r}/`) : a.type === r;
}
function Ny(e) {
  return new class {
    getData(r) {
      var n;
      const o = (n = this.items.find(sa(r, !0))) !== null && n !== void 0 ? n : this.items.find(sa(r, !1));
      let a = "";
      return o?.getAsString((i) => {
        a = i;
      }), a;
    }
    setData(r, n) {
      const o = this.items.findIndex(sa(r, !0)), a = new dd(n, r);
      o >= 0 ? this.items.splice(o, 1, a) : this.items.push(a);
    }
    clearData(r) {
      if (r) {
        const n = this.items.findIndex(sa(r, !0));
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
      ct(this, "dropEffect", "none"), ct(this, "effectAllowed", "uninitialized"), ct(this, "items", new Dy()), ct(this, "files", gi(e, []));
    }
  }();
}
function Ri(e, t = []) {
  const r = typeof e.DataTransfer > "u" ? Ny(e) : (
    /* istanbul ignore next */
    new e.DataTransfer()
  );
  return Object.defineProperty(r, "files", {
    get: () => gi(e, t)
  }), r;
}
async function Ly(e, t) {
  return t.kind === "file" ? t.getAsFile() : new e.Blob([
    await new Promise((r) => t.getAsString(r))
  ], {
    type: t.type
  });
}
function fd(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function pd(e, ...t) {
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
      fd(this, "data", void 0), this.data = o;
    }
  }(r);
}
const Ut = Symbol("Manage ClipboardSub");
function lc(e, t) {
  return Object.assign(new class extends e.EventTarget {
    async read() {
      return Array.from(this.items);
    }
    async readText() {
      let n = "";
      for (const o of this.items) {
        const a = o.types.includes("text/plain") ? "text/plain" : o.types.find((i) => i.startsWith("text/"));
        a && (n += await o.getType(a).then((i) => cd(i, e.FileReader)));
      }
      return n;
    }
    async write(n) {
      this.items = n;
    }
    async writeText(n) {
      this.items = [
        pd(e, n)
      ];
    }
    constructor(...n) {
      super(...n), fd(this, "items", []);
    }
  }(), {
    [Ut]: t
  });
}
function Ei(e) {
  return !!e?.[Ut];
}
function By(e) {
  if (Ei(e.navigator.clipboard))
    return e.navigator.clipboard[Ut];
  const t = Object.getOwnPropertyDescriptor(e.navigator, "clipboard");
  let r;
  const n = {
    resetClipboardStub: () => {
      r = lc(e, n);
    },
    detachClipboardStub: () => {
      t ? Object.defineProperty(e.navigator, "clipboard", t) : Object.defineProperty(e.navigator, "clipboard", {
        value: void 0,
        configurable: !0
      });
    }
  };
  return r = lc(e, n), Object.defineProperty(e.navigator, "clipboard", {
    get: () => r,
    configurable: !0
  }), r[Ut];
}
function Fy(e) {
  Ei(e.navigator.clipboard) && e.navigator.clipboard[Ut].resetClipboardStub();
}
function Uy(e) {
  Ei(e.navigator.clipboard) && e.navigator.clipboard[Ut].detachClipboardStub();
}
async function jy(e) {
  const t = e.defaultView, r = t?.navigator.clipboard, n = r && await r.read();
  if (!n)
    throw new Error("The Clipboard API is unavailable.");
  const o = Ri(t);
  for (const a of n)
    for (const i of a.types)
      o.setData(i, await a.getType(i).then((l) => cd(l, t.FileReader)));
  return o;
}
async function md(e, t) {
  const r = De(e), n = r.navigator.clipboard, o = [];
  for (let i = 0; i < t.items.length; i++) {
    const l = t.items[i], u = await Ly(r, l);
    o.push(pd(r, u));
  }
  if (!(n && await n.write(o).then(
    () => !0,
    // Can happen with other implementations that e.g. require permissions
    /* istanbul ignore next */
    () => !1
  )))
    throw new Error("The Clipboard API is unavailable.");
}
const _a = globalThis;
typeof _a.afterEach == "function" && _a.afterEach(() => Fy(globalThis.window));
typeof _a.afterAll == "function" && _a.afterAll(() => Uy(globalThis.window));
const vd = [
  "input:not([type=hidden]):not([disabled])",
  "button:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[contenteditable=""]',
  '[contenteditable="true"]',
  "a[href]",
  "[tabindex]:not([disabled])"
].join(", ");
function Ci(e) {
  return e.matches(vd);
}
function $y(e) {
  return new e.constructor(e.type, e);
}
function nt(e) {
  for (let r = e; r; r = r.parentElement)
    if (K(r, [
      "button",
      "input",
      "select",
      "textarea",
      "optgroup",
      "option"
    ])) {
      if (r.hasAttribute("disabled"))
        return !0;
    } else if (K(r, "fieldset")) {
      var t;
      if (r.hasAttribute("disabled") && !(!((t = r.querySelector(":scope > legend")) === null || t === void 0) && t.contains(e)))
        return !0;
    } else if (r.tagName.includes("-") && r.constructor.formAssociated && r.hasAttribute("disabled"))
      return !0;
  return !1;
}
function ea(e) {
  const t = e.activeElement;
  return t?.shadowRoot ? ea(t.shadowRoot) : nt(t) ? e.ownerDocument ? (
    /* istanbul ignore next */
    e.ownerDocument.body
  ) : e.body : t;
}
function Ha(e) {
  var t;
  return (t = ea(e)) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  );
}
function Hy(e, t) {
  let r = e;
  do {
    if (t(r))
      return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function wt(e) {
  return e.hasAttribute("contenteditable") && (e.getAttribute("contenteditable") == "true" || e.getAttribute("contenteditable") == "");
}
function Yo(e) {
  const t = Vy(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function Vy(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
var bd = /* @__PURE__ */ (function(e) {
  return e.button = "button", e.color = "color", e.file = "file", e.image = "image", e.reset = "reset", e.submit = "submit", e.checkbox = "checkbox", e.radio = "radio", e;
})(bd || {});
function hd(e) {
  return K(e, "button") || K(e, "input") && e.type in bd;
}
function jt(e) {
  return gd(e) && !e.readOnly || wt(e);
}
var yd = /* @__PURE__ */ (function(e) {
  return e.text = "text", e.date = "date", e["datetime-local"] = "datetime-local", e.email = "email", e.month = "month", e.number = "number", e.password = "password", e.search = "search", e.tel = "tel", e.time = "time", e.url = "url", e.week = "week", e;
})(yd || {});
function gd(e) {
  return K(e, "textarea") || K(e, "input") && e.type in yd;
}
function Ue(e) {
  return Rd(e) && gd(e);
}
function Wy(e) {
  return Rd(e) && hd(e);
}
function Rd(e) {
  return e.nodeType === 1;
}
function zy(e) {
  const t = e.ownerDocument.getSelection();
  if (t?.focusNode && Ue(e)) {
    const n = Yo(t.focusNode);
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
function $t(e, t) {
  return J().eventWrapper(e);
}
function dt(e) {
  const t = Hy(e, Ci), r = ea(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r && ($t(t ? () => t.focus() : () => r?.blur()), zy(t ?? e.ownerDocument.body));
}
function Ky(e) {
  !Ci(e) || !(ea(e.ownerDocument) === e) || $t(() => e.blur());
}
const ft = {};
ft.click = (e, t, r) => {
  const n = t.closest("button,input,label,select,textarea"), o = n && K(n, "label") && n.control;
  if (o && o !== t)
    return () => {
      Ci(o) && (dt(o), r.dispatchEvent(o, $y(e)));
    };
  if (K(t, "input", {
    type: "file"
  }))
    return () => {
      Ky(t), t.dispatchEvent(new (De(t)).Event("fileDialog")), dt(t);
    };
};
const Ht = Symbol("Displayed value in UI"), tt = Symbol("Displayed selection in UI"), qa = Symbol("Initial value to compare on blur");
function Gy(e) {
  return typeof e == "object" && Ht in e;
}
function Yy(e) {
  return !!e && typeof e == "object" && tt in e;
}
function Xy(e, t) {
  e[qa] === void 0 && (e[qa] = e.value), e[Ht] = t, e.value = Object.assign(new String(t), {
    [Ht]: !0
  });
}
function je(e) {
  return e[Ht] === void 0 ? e.value : String(e[Ht]);
}
function wi(e) {
  e[Ht] = void 0;
}
function Ed(e) {
  e[qa] = void 0;
}
function Qy(e) {
  return e[qa];
}
function Jy(e, t) {
  e[tt] = t;
}
function Kt(e, { focusOffset: t, anchorOffset: r = t }, n = "replace") {
  const o = je(e).length, a = (f) => Math.max(0, Math.min(o, f)), i = n === "replace" || e[tt] === void 0 ? a(r) : e[tt].anchorOffset, l = a(t), u = Math.min(i, l), s = Math.max(i, l);
  if (e[tt] = {
    anchorOffset: i,
    focusOffset: l
  }, e.selectionStart === u && e.selectionEnd === s)
    return;
  const d = Object.assign(new Number(u), {
    [tt]: !0
  });
  try {
    e.setSelectionRange(d, s);
  } catch {
  }
}
function Xo(e) {
  var t, r, n;
  const o = (n = e[tt]) !== null && n !== void 0 ? n : {
    anchorOffset: (t = e.selectionStart) !== null && t !== void 0 ? t : 0,
    focusOffset: (r = e.selectionEnd) !== null && r !== void 0 ? r : 0
  };
  return {
    ...o,
    startOffset: Math.min(o.anchorOffset, o.focusOffset),
    endOffset: Math.max(o.anchorOffset, o.focusOffset)
  };
}
function Zy(e) {
  return !!e[tt];
}
function ba(e) {
  e[tt] = void 0;
}
const Pa = globalThis.parseInt;
function eg(e) {
  const t = e.replace(/\D/g, "");
  if (t.length < 2)
    return e;
  const r = Pa(t[0], 10), n = Pa(t[1], 10);
  if (r >= 3 || r === 2 && n >= 4) {
    let o;
    return r >= 3 ? o = 1 : o = 2, uc(t, o);
  }
  return e.length === 2 ? e : uc(t, 2);
}
function uc(e, t) {
  const r = e.slice(0, t), n = Math.min(Pa(r, 10), 23), o = e.slice(t), a = Pa(o, 10), i = Math.min(a, 59);
  return `${n.toString().padStart(2, "0")}:${i.toString().padStart(2, "0")}`;
}
function Cd(e, t) {
  const r = e.cloneNode();
  return r.value = t, r.value === t;
}
var wd = /* @__PURE__ */ (function(e) {
  return e.email = "email", e.password = "password", e.search = "search", e.telephone = "telephone", e.text = "text", e.url = "url", e;
})(wd || {});
function tg(e) {
  var t;
  const r = (t = e.getAttribute("maxlength")) !== null && t !== void 0 ? t : "";
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function rg(e) {
  return K(e, "textarea") || K(e, "input") && e.type in wd;
}
function _d(e, t, r, n) {
  if (ha(e) && t + r >= 0 && t + r <= e.nodeValue.length)
    return {
      node: e,
      offset: t + r
    };
  const o = sc(e, t, r);
  if (o) {
    if (ha(o))
      return {
        node: o,
        offset: r > 0 ? Math.min(1, o.nodeValue.length) : Math.max(o.nodeValue.length - 1, 0)
      };
    if (K(o, "br")) {
      const a = sc(o, void 0, r);
      return a ? ha(a) ? {
        node: a,
        offset: r > 0 ? 0 : a.nodeValue.length
      } : r < 0 && K(a, "br") ? {
        node: o.parentNode,
        offset: ca(o)
      } : {
        node: a.parentNode,
        offset: ca(a) + (r > 0 ? 0 : 1)
      } : r < 0 && n === "deleteContentBackward" ? {
        node: o.parentNode,
        offset: ca(o)
      } : void 0;
    } else
      return {
        node: o.parentNode,
        offset: ca(o) + (r > 0 ? 1 : 0)
      };
  }
}
function sc(e, t, r) {
  const n = Number(t) + (r < 0 ? -1 : 0);
  return t !== void 0 && _i(e) && n >= 0 && n < e.children.length && (e = e.children[n]), og(e, r === 1 ? "next" : "previous", ng);
}
function ng(e) {
  if (ha(e))
    return !0;
  if (_i(e)) {
    if (K(e, [
      "input",
      "textarea"
    ]))
      return e.type !== "hidden";
    if (K(e, "br"))
      return !0;
  }
  return !1;
}
function ca(e) {
  let t = 0;
  for (; e.previousSibling; )
    t++, e = e.previousSibling;
  return t;
}
function _i(e) {
  return e.nodeType === 1;
}
function ha(e) {
  return e.nodeType === 3;
}
function og(e, t, r) {
  for (; ; ) {
    var n;
    const o = e[`${t}Sibling`];
    if (o) {
      if (e = ag(o, t === "next" ? "first" : "last"), r(e))
        return e;
    } else if (e.parentNode && (!_i(e.parentNode) || !wt(e.parentNode) && e.parentNode !== ((n = e.ownerDocument) === null || n === void 0 ? void 0 : n.body)))
      e = e.parentNode;
    else
      break;
  }
}
function ag(e, t) {
  for (; e.hasChildNodes(); )
    e = e[`${t}Child`];
  return e;
}
const Qo = Symbol("Track programmatic changes for React workaround");
function ig(e) {
  return Object.getOwnPropertyNames(e).some((t) => t.startsWith("__react")) && De(e).REACT_VERSION === 17;
}
function lg(e) {
  ig(e) && (e[Qo] = {
    previousValue: String(e.value),
    tracked: []
  });
}
function ug(e, t) {
  var r, n;
  (n = e[Qo]) === null || n === void 0 || (r = n.tracked) === null || r === void 0 || r.push(t), e[Qo] || (wi(e), Kt(e, {
    focusOffset: t.length
  }));
}
function sg(e, t) {
  var r;
  const n = e[Qo];
  if (e[Qo] = void 0, !(!(n == null || (r = n.tracked) === null || r === void 0) && r.length))
    return;
  const o = n.tracked.length === 2 && n.tracked[0] === n.previousValue && n.tracked[1] === e.value;
  o || wi(e), Zy(e) && Kt(e, {
    focusOffset: o ? t : e.value.length
  });
}
function qd(e) {
  const t = cg(e);
  if (t && Ue(t))
    return {
      type: "input",
      selection: Xo(t)
    };
  const r = t?.ownerDocument.getSelection();
  return {
    type: Yo(e) && r?.anchorNode && Yo(r.anchorNode) ? "contenteditable" : "default",
    selection: r
  };
}
function cg(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function dg(e) {
  const t = qd(e);
  if (t.type === "input")
    return t.selection;
  if (t.type === "contenteditable") {
    var r;
    return (r = t.selection) === null || r === void 0 ? void 0 : r.getRangeAt(0);
  }
}
function _t({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: n = t }) {
  var o, a;
  if (qd(e).type === "input")
    return Kt(e, {
      anchorOffset: n,
      focusOffset: t
    });
  (a = r.ownerDocument) === null || a === void 0 || (o = a.getSelection()) === null || o === void 0 || o.setBaseAndExtent(r, n, e, t);
}
function Pd(e) {
  return K(e, "input") && [
    "date",
    "time"
  ].includes(e.type);
}
function Vt(e, t, r, n = "insertText") {
  const o = dg(t);
  o && (!Pd(t) && !e.dispatchUIEvent(t, "beforeinput", {
    inputType: n,
    data: r
  }) || ("startContainer" in o ? fg(e, t, o, r, n) : pg(e, t, o, r, n)));
}
function fg(e, t, r, n, o) {
  let a = !1;
  if (!r.collapsed)
    a = !0, r.deleteContents();
  else if ([
    "deleteContentBackward",
    "deleteContentForward"
  ].includes(o)) {
    const i = _d(r.startContainer, r.startOffset, o === "deleteContentBackward" ? -1 : 1, o);
    if (i) {
      a = !0;
      const l = r.cloneRange();
      l.comparePoint(i.node, i.offset) < 0 ? l.setStart(i.node, i.offset) : l.setEnd(i.node, i.offset), l.deleteContents();
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
function pg(e, t, r, n, o) {
  let a = n;
  if (rg(t)) {
    const s = tg(t);
    if (s !== void 0 && n.length > 0) {
      const d = s - t.value.length;
      if (d > 0)
        a = n.substring(0, d);
      else
        return;
    }
  }
  const { newValue: i, newOffset: l, oldValue: u } = mg(a, t, r, o);
  i === u && l === r.startOffset && l === r.endOffset || K(t, "input", {
    type: "number"
  }) && !vg(i) || (Xy(t, i), _t({
    focusNode: t,
    anchorOffset: l,
    focusOffset: l
  }), Pd(t) ? Cd(t, i) && (cc(e, t, l, {}), e.dispatchUIEvent(t, "change"), Ed(t)) : cc(e, t, l, {
    data: n,
    inputType: o
  }));
}
function mg(e, t, { startOffset: r, endOffset: n }, o) {
  const a = je(t), i = Math.max(0, r === n && o === "deleteContentBackward" ? r - 1 : r), l = a.substring(0, i), u = Math.min(a.length, r === n && o === "deleteContentForward" ? r + 1 : n), s = a.substring(u, a.length);
  let d = `${l}${e}${s}`, f = i + e.length;
  if (K(t, "input", {
    type: "time"
  })) {
    const c = eg(d);
    c !== "" && Cd(t, c) && (d = c, f = c.length);
  }
  return {
    oldValue: a,
    newValue: d,
    newOffset: f
  };
}
function cc(e, t, r, n) {
  e.dispatchUIEvent(t, "input", n), sg(t, r);
}
function vg(e) {
  var t, r;
  const n = e.split("e", 2);
  return !(/[^\d.\-e]/.test(e) || Number((t = e.match(/-/g)) === null || t === void 0 ? void 0 : t.length) > 2 || Number((r = e.match(/\./g)) === null || r === void 0 ? void 0 : r.length) > 1 || n[1] && !/^-?\d*$/.test(n[1]));
}
ft.cut = (e, t, r) => () => {
  jt(t) && Vt(r, t, "", "deleteByCut");
};
function bg(e) {
  return e ? wt(e) ? e.textContent : je(e) : null;
}
function hg(e) {
  const t = De(e);
  for (let r = e; r?.ownerDocument; r = r.parentElement) {
    const { display: n, visibility: o } = t.getComputedStyle(r);
    if (n === "none" || o === "hidden")
      return !1;
  }
  return !0;
}
function yg(e, t) {
  const r = e.ownerDocument, n = r.querySelectorAll(vd), o = Array.from(n).filter((u) => u === e || !(Number(u.getAttribute("tabindex")) < 0 || nt(u)));
  Number(e.getAttribute("tabindex")) >= 0 && o.sort((u, s) => {
    const d = Number(u.getAttribute("tabindex")), f = Number(s.getAttribute("tabindex"));
    return d === f ? 0 : d === 0 ? 1 : f === 0 ? -1 : d - f;
  });
  const a = {};
  let i = [
    r.body
  ];
  const l = K(e, "input", {
    type: "radio"
  }) ? e.name : void 0;
  o.forEach((u) => {
    const s = u;
    if (K(s, "input", {
      type: "radio"
    }) && s.name) {
      if (s === e) {
        i.push(s);
        return;
      } else if (s.name === l)
        return;
      if (s.checked) {
        i = i.filter((d) => !K(d, "input", {
          type: "radio",
          name: s.name
        })), i.push(s), a[s.name] = s;
        return;
      }
      if (typeof a[s.name] < "u")
        return;
    }
    i.push(s);
  });
  for (let u = i.findIndex((s) => s === e); ; )
    if (u += t ? -1 : 1, u === i.length ? u = 0 : u === -1 && (u = i.length - 1), i[u] === e || i[u] === r.body || hg(i[u]))
      return i[u];
}
function dc(e, t) {
  if (Ue(e)) {
    const r = Xo(e);
    _t({
      focusNode: e,
      focusOffset: r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset
    });
  } else {
    const r = e.ownerDocument.getSelection();
    if (!r?.focusNode)
      return;
    if (r.isCollapsed) {
      const n = _d(r.focusNode, r.focusOffset, t);
      n && _t({
        focusNode: n.node,
        focusOffset: n.offset
      });
    } else
      r[t < 0 ? "collapseToStart" : "collapseToEnd"]();
  }
}
function Td(e) {
  if (Ue(e))
    return _t({
      focusNode: e,
      anchorOffset: 0,
      focusOffset: je(e).length
    });
  var t;
  const r = (t = Yo(e)) !== null && t !== void 0 ? t : e.ownerDocument.body;
  _t({
    focusNode: r,
    anchorOffset: 0,
    focusOffset: r.childNodes.length
  });
}
function gg(e) {
  if (Ue(e))
    return Xo(e).startOffset === 0 && Xo(e).endOffset === je(e).length;
  var t;
  const r = (t = Yo(e)) !== null && t !== void 0 ? t : e.ownerDocument.body, n = e.ownerDocument.getSelection();
  return n?.anchorNode === r && n.focusNode === r && n.anchorOffset === 0 && n.focusOffset === r.childNodes.length;
}
function Uo(e, t, r) {
  var n;
  if (Ue(e))
    return _t({
      focusNode: e,
      anchorOffset: t,
      focusOffset: r
    });
  if (wt(e) && ((n = e.firstChild) === null || n === void 0 ? void 0 : n.nodeType) === 3)
    return _t({
      focusNode: e.firstChild,
      anchorOffset: t,
      focusOffset: r
    });
  throw new Error("Not implemented. The result of this interaction is unreliable.");
}
function da(e, t, r) {
  const n = De(t), o = Array.from(t.ownerDocument.querySelectorAll(t.name ? `input[type="radio"][name="${n.CSS.escape(t.name)}"]` : 'input[type="radio"][name=""], input[type="radio"]:not([name])'));
  for (let a = o.findIndex((i) => i === t) + r; ; a += r) {
    if (o[a] || (a = r > 0 ? 0 : o.length - 1), o[a] === t)
      return;
    if (!nt(o[a])) {
      dt(o[a]), e.dispatchUIEvent(o[a], "click");
      return;
    }
  }
}
ft.keydown = (e, t, r) => {
  var n, o;
  return (o = (n = fc[e.key]) === null || n === void 0 ? void 0 : n.call(fc, e, t, r)) !== null && o !== void 0 ? o : Rg(e, t, r);
};
const fc = {
  ArrowDown: (e, t, r) => {
    if (K(t, "input", {
      type: "radio"
    }))
      return () => da(r, t, 1);
  },
  ArrowLeft: (e, t, r) => K(t, "input", {
    type: "radio"
  }) ? () => da(r, t, -1) : () => dc(t, -1),
  ArrowRight: (e, t, r) => K(t, "input", {
    type: "radio"
  }) ? () => da(r, t, 1) : () => dc(t, 1),
  ArrowUp: (e, t, r) => {
    if (K(t, "input", {
      type: "radio"
    }))
      return () => da(r, t, -1);
  },
  Backspace: (e, t, r) => {
    if (jt(t))
      return () => {
        Vt(r, t, "", "deleteContentBackward");
      };
  },
  Delete: (e, t, r) => {
    if (jt(t))
      return () => {
        Vt(r, t, "", "deleteContentForward");
      };
  },
  End: (e, t) => {
    if (K(t, [
      "input",
      "textarea"
    ]) || wt(t))
      return () => {
        var r, n;
        const o = (n = (r = bg(t)) === null || r === void 0 ? void 0 : r.length) !== null && n !== void 0 ? n : (
          /* istanbul ignore next */
          0
        );
        Uo(t, o, o);
      };
  },
  Home: (e, t) => {
    if (K(t, [
      "input",
      "textarea"
    ]) || wt(t))
      return () => {
        Uo(t, 0, 0);
      };
  },
  PageDown: (e, t) => {
    if (K(t, [
      "input"
    ]))
      return () => {
        const r = je(t).length;
        Uo(t, r, r);
      };
  },
  PageUp: (e, t) => {
    if (K(t, [
      "input"
    ]))
      return () => {
        Uo(t, 0, 0);
      };
  },
  Tab: (e, t, r) => () => {
    const n = yg(t, r.system.keyboard.modifiers.Shift);
    dt(n), Ue(n) && Kt(n, {
      anchorOffset: 0,
      focusOffset: n.value.length
    });
  }
}, Rg = (e, t, r) => {
  if (e.code === "KeyA" && r.system.keyboard.modifiers.Control)
    return () => Td(t);
};
ft.keypress = (e, t, r) => {
  if (e.key === "Enter") {
    if (K(t, "button") || K(t, "input") && Eg.includes(t.type) || K(t, "a") && t.href)
      return () => {
        r.dispatchUIEvent(t, "click");
      };
    if (K(t, "input")) {
      const n = t.form, o = n?.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return o ? () => r.dispatchUIEvent(o, "click") : n && Cg.includes(t.type) && n.querySelectorAll("input").length === 1 ? () => r.dispatchUIEvent(n, "submit") : void 0;
    }
  }
  if (jt(t)) {
    const n = e.key === "Enter" ? wt(t) && !r.system.keyboard.modifiers.Shift ? "insertParagraph" : "insertLineBreak" : "insertText", o = e.key === "Enter" ? `
` : e.key;
    return () => Vt(r, t, o, n);
  }
};
const Eg = [
  "button",
  "color",
  "file",
  "image",
  "reset",
  "submit"
], Cg = [
  "email",
  "month",
  "password",
  "search",
  "tel",
  "text",
  "url",
  "week"
];
ft.keyup = (e, t, r) => {
  var n;
  return (n = pc[e.key]) === null || n === void 0 ? void 0 : n.call(pc, e, t, r);
};
const pc = {
  " ": (e, t, r) => {
    if (hd(t))
      return () => r.dispatchUIEvent(t, "click");
  }
};
ft.paste = (e, t, r) => {
  if (jt(t))
    return () => {
      var n;
      const o = (n = e.clipboardData) === null || n === void 0 ? void 0 : n.getData("text");
      o && Vt(r, t, o, "insertFromPaste");
    };
};
const xd = {
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
function Sd(e) {
  return xd[e].EventType;
}
const wg = [
  "MouseEvent",
  "PointerEvent"
];
function _g(e) {
  return wg.includes(Sd(e));
}
function qg(e) {
  return Sd(e) === "KeyboardEvent";
}
const Pg = {
  ClipboardEvent: [
    xg
  ],
  Event: [],
  FocusEvent: [
    Fo,
    Sg
  ],
  InputEvent: [
    Fo,
    Og
  ],
  MouseEvent: [
    Fo,
    Va,
    mc
  ],
  PointerEvent: [
    Fo,
    Va,
    mc,
    Ag
  ],
  KeyboardEvent: [
    Fo,
    Va,
    Mg
  ]
};
function Od(e, t, r) {
  const n = De(t), { EventType: o, defaultInit: a } = xd[e], i = new (Tg(n))[o](e, a);
  return Pg[o].forEach((l) => l(i, r ?? {})), i;
}
function Tg(e) {
  var t;
  const r = (t = e.Event) !== null && t !== void 0 ? t : class {
  };
  var n;
  const o = (n = e.AnimationEvent) !== null && n !== void 0 ? n : class extends r {
  };
  var a;
  const i = (a = e.ClipboardEvent) !== null && a !== void 0 ? a : class extends r {
  };
  var l;
  const u = (l = e.PopStateEvent) !== null && l !== void 0 ? l : class extends r {
  };
  var s;
  const d = (s = e.ProgressEvent) !== null && s !== void 0 ? s : class extends r {
  };
  var f;
  const c = (f = e.TransitionEvent) !== null && f !== void 0 ? f : class extends r {
  };
  var h;
  const g = (h = e.UIEvent) !== null && h !== void 0 ? h : class extends r {
  };
  var R;
  const T = (R = e.CompositionEvent) !== null && R !== void 0 ? R : class extends g {
  };
  var p;
  const w = (p = e.FocusEvent) !== null && p !== void 0 ? p : class extends g {
  };
  var _;
  const P = (_ = e.InputEvent) !== null && _ !== void 0 ? _ : class extends g {
  };
  var q;
  const b = (q = e.KeyboardEvent) !== null && q !== void 0 ? q : class extends g {
  };
  var y;
  const E = (y = e.MouseEvent) !== null && y !== void 0 ? y : class extends g {
  };
  var A;
  const L = (A = e.DragEvent) !== null && A !== void 0 ? A : class extends E {
  };
  var F;
  const U = (F = e.PointerEvent) !== null && F !== void 0 ? F : class extends E {
  };
  var O;
  const B = (O = e.TouchEvent) !== null && O !== void 0 ? O : class extends g {
  };
  return {
    Event: r,
    AnimationEvent: o,
    ClipboardEvent: i,
    PopStateEvent: u,
    ProgressEvent: d,
    TransitionEvent: c,
    UIEvent: g,
    CompositionEvent: T,
    FocusEvent: w,
    InputEvent: P,
    KeyboardEvent: b,
    MouseEvent: E,
    DragEvent: L,
    PointerEvent: U,
    TouchEvent: B
  };
}
function pt(e, t) {
  for (const [r, n] of Object.entries(t))
    Object.defineProperty(e, r, {
      get: () => n ?? null
    });
}
function de(e) {
  return Number(e ?? 0);
}
function xg(e, { clipboardData: t }) {
  pt(e, {
    clipboardData: t
  });
}
function Sg(e, { relatedTarget: t }) {
  pt(e, {
    relatedTarget: t
  });
}
function Og(e, { data: t, inputType: r, isComposing: n }) {
  pt(e, {
    data: t,
    isComposing: !!n,
    inputType: String(r)
  });
}
function Fo(e, { view: t, detail: r }) {
  pt(e, {
    view: t,
    detail: de(r ?? 0)
  });
}
function Va(e, { altKey: t, ctrlKey: r, metaKey: n, shiftKey: o, modifierAltGraph: a, modifierCapsLock: i, modifierFn: l, modifierFnLock: u, modifierNumLock: s, modifierScrollLock: d, modifierSymbol: f, modifierSymbolLock: c }) {
  pt(e, {
    altKey: !!t,
    ctrlKey: !!r,
    metaKey: !!n,
    shiftKey: !!o,
    getModifierState(h) {
      return !!{
        Alt: t,
        AltGraph: a,
        CapsLock: i,
        Control: r,
        Fn: l,
        FnLock: u,
        Meta: n,
        NumLock: s,
        ScrollLock: d,
        Shift: o,
        Symbol: f,
        SymbolLock: c
      }[h];
    }
  });
}
function Mg(e, { key: t, code: r, location: n, repeat: o, isComposing: a, charCode: i }) {
  pt(e, {
    key: String(t),
    code: String(r),
    location: de(n),
    repeat: !!o,
    isComposing: !!a,
    charCode: i
  });
}
function mc(e, { x: t, y: r, screenX: n, screenY: o, clientX: a = t, clientY: i = r, button: l, buttons: u, relatedTarget: s, offsetX: d, offsetY: f, pageX: c, pageY: h }) {
  pt(e, {
    screenX: de(n),
    screenY: de(o),
    clientX: de(a),
    x: de(a),
    clientY: de(i),
    y: de(i),
    button: de(l),
    buttons: de(u),
    relatedTarget: s,
    offsetX: de(d),
    offsetY: de(f),
    pageX: de(c),
    pageY: de(h)
  });
}
function Ag(e, { pointerId: t, width: r, height: n, pressure: o, tangentialPressure: a, tiltX: i, tiltY: l, twist: u, pointerType: s, isPrimary: d }) {
  pt(e, {
    pointerId: de(t),
    width: de(r ?? 1),
    height: de(n ?? 1),
    pressure: de(o),
    tangentialPressure: de(a),
    tiltX: de(i),
    tiltY: de(l),
    twist: de(u),
    pointerType: String(s),
    isPrimary: !!d
  });
}
function Ig(e, t, r, n = !1) {
  (_g(t) || qg(t)) && (r = {
    ...r,
    ...this.system.getUIEventModifiers()
  });
  const o = Od(t, e, r);
  return Md.call(this, e, o, n);
}
function Md(e, t, r = !1) {
  var n;
  const o = t.type, a = r ? () => {
  } : (n = ft[o]) === null || n === void 0 ? void 0 : n.call(ft, t, e, this);
  if (a) {
    t.preventDefault();
    let i = !1;
    return Object.defineProperty(t, "defaultPrevented", {
      get: () => i
    }), Object.defineProperty(t, "preventDefault", {
      value: () => {
        i = t.cancelable;
      }
    }), $t(() => e.dispatchEvent(t)), i || a(), !i;
  }
  return $t(() => e.dispatchEvent(t));
}
function gt(e, t, r) {
  const n = Od(t, e, r);
  $t(() => e.dispatchEvent(n));
}
const vc = Symbol("patched focus/blur methods");
function Ad(e) {
  if (e.prototype[vc])
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
    [vc]: {
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
    const l = bc(this.ownerDocument);
    if (l === this)
      return;
    const u = Symbol("focus call");
    n = u, l && (r.call(l), gt(l, "blur", {
      relatedTarget: this
    }), gt(l, "focusout", {
      relatedTarget: n === u ? this : null
    })), n === u && (t.call(this, i), gt(this, "focus", {
      relatedTarget: l
    })), n === u && gt(this, "focusin", {
      relatedTarget: l
    });
  }
  function a() {
    if (this.ownerDocument.visibilityState !== "hidden")
      return r.call(this);
    const i = bc(this.ownerDocument);
    if (i !== this)
      return;
    n = Symbol("blur call"), r.call(this), gt(i, "blur", {
      relatedTarget: null
    }), gt(i, "focusout", {
      relatedTarget: null
    });
  }
}
function bc(e) {
  const t = ea(e);
  return t?.tagName === "BODY" ? null : t;
}
const Wa = Symbol("Interceptor for programmatical calls");
function Dt(e, t, r) {
  const n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), o = Object.getOwnPropertyDescriptor(e, t), a = n?.set ? "set" : "value";
  if (typeof n?.[a] != "function" || n[a][Wa])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function i(...l) {
    const { applyNative: u = !1, realArgs: s, then: d } = r.call(this, ...l), f = (!u && o || n)[a];
    a === "set" ? f.call(this, s) : f.call(this, ...s), d?.();
  }
  i[Wa] = Wa, Object.defineProperty(e, t, {
    ...o ?? n,
    [a]: i
  });
}
function kg(e) {
  Dt(e, "value", function(r) {
    const n = Gy(r);
    return n && lg(this), {
      applyNative: !!n,
      realArgs: Dg(this, r),
      then: n ? void 0 : () => ug(this, String(r))
    };
  });
}
function Dg(e, t) {
  return K(e, "input", {
    type: "number"
  }) && String(t) !== "" && !Number.isNaN(Number(t)) ? String(Number(t)) : String(t);
}
function Ng(e) {
  Dt(e, "setSelectionRange", function(r, ...n) {
    const o = Yy(r);
    return {
      applyNative: !!o,
      realArgs: [
        Number(r),
        ...n
      ],
      then: () => o ? void 0 : ba(e)
    };
  }), Dt(e, "selectionStart", function(r) {
    return {
      realArgs: r,
      then: () => ba(e)
    };
  }), Dt(e, "selectionEnd", function(r) {
    return {
      realArgs: r,
      then: () => ba(e)
    };
  }), Dt(e, "select", function() {
    return {
      realArgs: [],
      then: () => Jy(e, {
        anchorOffset: 0,
        focusOffset: je(e).length
      })
    };
  });
}
function Lg(e) {
  Dt(e, "setRangeText", function(...r) {
    return {
      realArgs: r,
      then: () => {
        wi(e), ba(e);
      }
    };
  });
}
const Lt = Symbol("Node prepared with document state workarounds");
function Id(e) {
  e[Lt] || (e.addEventListener("focus", (t) => {
    const r = t.target;
    hc(r);
  }, {
    capture: !0,
    passive: !0
  }), e.activeElement && hc(e.activeElement), e.addEventListener("blur", (t) => {
    const r = t.target, n = Qy(r);
    n !== void 0 && (r.value !== n && gt(r, "change"), Ed(r));
  }, {
    capture: !0,
    passive: !0
  }), e[Lt] = Lt);
}
function hc(e) {
  e[Lt] || (K(e, [
    "input",
    "textarea"
  ]) && (kg(e), Ng(e), Lg(e)), e[Lt] = Lt);
}
function Bg(e) {
  return Fg(e) ? e : e.ownerDocument;
}
function Fg(e) {
  return e.nodeType === 9;
}
var xe = /* @__PURE__ */ (function(e) {
  return e[e.Trigger = 2] = "Trigger", e[e.Call = 1] = "Call", e;
})({});
function jo(e, t) {
  e.levelRefs[t] = {};
}
function fa(e, t) {
  return e.levelRefs[t];
}
function Wt(e) {
  const t = e.delay;
  if (typeof t == "number")
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t)
    ]);
}
var ya = /* @__PURE__ */ (function(e) {
  return e[e.EachTrigger = 4] = "EachTrigger", e[e.EachApiCall = 2] = "EachApiCall", e[e.EachTarget = 1] = "EachTarget", e[e.Never = 0] = "Never", e;
})({});
function ht(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Fe = /* @__PURE__ */ (function(e) {
  return e[e.STANDARD = 0] = "STANDARD", e[e.LEFT = 1] = "LEFT", e[e.RIGHT = 2] = "RIGHT", e[e.NUMPAD = 3] = "NUMPAD", e;
})({});
const Ug = [
  "Alt",
  "AltGraph",
  "Control",
  "Fn",
  "Meta",
  "Shift",
  "Symbol"
];
function yc(e) {
  return Ug.includes(e);
}
const jg = [
  "CapsLock",
  "FnLock",
  "NumLock",
  "ScrollLock",
  "SymbolLock"
];
function gc(e) {
  return jg.includes(e);
}
class $g {
  isKeyPressed(t) {
    return this.pressed.has(String(t.code));
  }
  getPressedKeys() {
    return this.pressed.values().map((t) => t.keyDef);
  }
  /** Press a key */
  async keydown(t, r) {
    const n = String(r.key), o = String(r.code), a = Ha(t.config.document);
    this.setKeydownTarget(a), this.pressed.add(o, r), yc(n) && (this.modifiers[n] = !0);
    const i = t.dispatchUIEvent(a, "keydown", {
      key: n,
      code: o
    });
    gc(n) && !this.modifiers[n] && (this.modifiers[n] = !0, this.modifierLockStart[n] = !0), i && this.pressed.setUnprevented(o), i && this.hasKeyPress(n) && t.dispatchUIEvent(Ha(t.config.document), "keypress", {
      key: n,
      code: o,
      charCode: r.key === "Enter" ? 13 : String(r.key).charCodeAt(0)
    });
  }
  /** Release a key */
  async keyup(t, r) {
    const n = String(r.key), o = String(r.code), a = this.pressed.isUnprevented(o);
    this.pressed.delete(o), yc(n) && !this.pressed.values().find((i) => i.keyDef.key === n) && (this.modifiers[n] = !1), t.dispatchUIEvent(Ha(t.config.document), "keyup", {
      key: n,
      code: o
    }, !a), gc(n) && this.modifiers[n] && (this.modifierLockStart[n] ? this.modifierLockStart[n] = !1 : this.modifiers[n] = !1);
  }
  setKeydownTarget(t) {
    t !== this.lastKeydownTarget && (this.carryChar = ""), this.lastKeydownTarget = t;
  }
  hasKeyPress(t) {
    return (t.length === 1 || t === "Enter") && !this.modifiers.Control && !this.modifiers.Alt;
  }
  constructor(t) {
    ht(this, "system", void 0), ht(this, "modifiers", {
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
    }), ht(this, "pressed", new class {
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
        ht(this, "registry", {});
      }
    }()), ht(this, "carryChar", ""), ht(this, "lastKeydownTarget", void 0), ht(this, "modifierLockStart", {}), this.system = t;
  }
}
const Hg = [
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
    location: Fe.LEFT
  },
  {
    code: "AltRight",
    key: "Alt",
    location: Fe.RIGHT
  },
  {
    code: "ShiftLeft",
    key: "Shift",
    location: Fe.LEFT
  },
  {
    code: "ShiftRight",
    key: "Shift",
    location: Fe.RIGHT
  },
  {
    code: "ControlLeft",
    key: "Control",
    location: Fe.LEFT
  },
  {
    code: "ControlRight",
    key: "Control",
    location: Fe.RIGHT
  },
  {
    code: "MetaLeft",
    key: "Meta",
    location: Fe.LEFT
  },
  {
    code: "MetaRight",
    key: "Meta",
    location: Fe.RIGHT
  },
  {
    code: "OSLeft",
    key: "OS",
    location: Fe.LEFT
  },
  {
    code: "OSRight",
    key: "OS",
    location: Fe.RIGHT
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
], Vg = [
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
function Wg(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class kd {
  getButtons() {
    let t = 0;
    for (const r of Object.keys(this.pressed))
      t |= 2 ** Number(r);
    return t;
  }
  down(t) {
    const r = ii(t.button);
    if (r in this.pressed) {
      this.pressed[r].push(t);
      return;
    }
    return this.pressed[r] = [
      t
    ], r;
  }
  up(t) {
    const r = ii(t.button);
    if (r in this.pressed && (this.pressed[r] = this.pressed[r].filter((n) => n.name !== t.name), this.pressed[r].length === 0))
      return delete this.pressed[r], r;
  }
  constructor() {
    Wg(this, "pressed", {});
  }
}
const Rc = {
  primary: 0,
  secondary: 1,
  auxiliary: 2,
  back: 3,
  X1: 3,
  forward: 4,
  X2: 4
};
function ii(e = 0) {
  return e in Rc ? Rc[e] : Number(e);
}
const Ec = {
  1: 2,
  2: 1
};
function li(e) {
  return e = ii(e), e in Ec ? Ec[e] : e;
}
function zg(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Kg {
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
    zg(this, "pressedKeys", /* @__PURE__ */ new Set());
  }
}
function Ho(e, t) {
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
function ui({ target: e, node: t, offset: r }) {
  return Ue(e) ? {
    node: e,
    offset: r ?? je(e).length
  } : t ? {
    node: t,
    offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length)
  } : Dd(e, r);
}
function Dd(e, t, r = !0) {
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
          return Dd(a, t, !1);
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
function Gg({ document: e, target: t, clickCount: r, node: n, offset: o }) {
  if (Wy(t))
    return;
  const a = Ue(t), i = String(a ? je(t) : t.textContent), [l, u] = n ? (
    // which elements might be considered in the same line of text.
    // TODO: support expanding initial range on multiple clicks if node is given
    [
      o,
      o
    ]
  ) : Yg(i, o, r);
  if (a)
    return Kt(t, {
      anchorOffset: l ?? i.length,
      focusOffset: u ?? i.length
    }), {
      node: t,
      start: l ?? 0,
      end: u ?? i.length
    };
  {
    const { node: s, offset: d } = ui({
      target: t,
      node: n,
      offset: l
    }), { node: f, offset: c } = ui({
      target: t,
      node: n,
      offset: u
    }), h = t.ownerDocument.createRange();
    try {
      h.setStart(s, d), h.setEnd(f, c);
    } catch {
      throw new Error("The given offset is out of bounds.");
    }
    const g = e.getSelection();
    return g?.removeAllRanges(), g?.addRange(h.cloneRange()), h;
  }
}
function Yg(e, t, r) {
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
function Xg(e, { document: t, target: r, node: n, offset: o }) {
  const a = ui({
    target: r,
    node: n,
    offset: o
  });
  if ("node" in e) {
    if (a.node === e.node) {
      const i = a.offset < e.start ? e.end : e.start, l = a.offset > e.end || a.offset < e.start ? a.offset : e.end;
      Kt(e.node, {
        anchorOffset: i,
        focusOffset: l
      });
    }
  } else {
    const i = e.cloneRange(), l = i.comparePoint(a.node, a.offset);
    l < 0 ? i.setStart(a.node, a.offset) : l > 0 && i.setEnd(a.node, a.offset);
    const u = t.getSelection();
    u?.removeAllRanges(), u?.addRange(i.cloneRange());
  }
}
function Nd(e, t) {
  var r, n, o, a, i, l, u, s, d, f, c, h, g, R, T, p, w, _, P, q, b, y, E, A;
  return e.target !== t.target || ((r = e.coords) === null || r === void 0 ? void 0 : r.x) !== ((n = t.coords) === null || n === void 0 ? void 0 : n.x) || ((o = e.coords) === null || o === void 0 ? void 0 : o.y) !== ((a = t.coords) === null || a === void 0 ? void 0 : a.y) || ((i = e.coords) === null || i === void 0 ? void 0 : i.clientX) !== ((l = t.coords) === null || l === void 0 ? void 0 : l.clientX) || ((u = e.coords) === null || u === void 0 ? void 0 : u.clientY) !== ((s = t.coords) === null || s === void 0 ? void 0 : s.clientY) || ((d = e.coords) === null || d === void 0 ? void 0 : d.offsetX) !== ((f = t.coords) === null || f === void 0 ? void 0 : f.offsetX) || ((c = e.coords) === null || c === void 0 ? void 0 : c.offsetY) !== ((h = t.coords) === null || h === void 0 ? void 0 : h.offsetY) || ((g = e.coords) === null || g === void 0 ? void 0 : g.pageX) !== ((R = t.coords) === null || R === void 0 ? void 0 : R.pageX) || ((T = e.coords) === null || T === void 0 ? void 0 : T.pageY) !== ((p = t.coords) === null || p === void 0 ? void 0 : p.pageY) || ((w = e.coords) === null || w === void 0 ? void 0 : w.screenX) !== ((_ = t.coords) === null || _ === void 0 ? void 0 : _.screenX) || ((P = e.coords) === null || P === void 0 ? void 0 : P.screenY) !== ((q = t.coords) === null || q === void 0 ? void 0 : q.screenY) || ((b = e.caret) === null || b === void 0 ? void 0 : b.node) !== ((y = t.caret) === null || y === void 0 ? void 0 : y.node) || ((E = e.caret) === null || E === void 0 ? void 0 : E.offset) !== ((A = t.caret) === null || A === void 0 ? void 0 : A.offset);
}
function yt(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Qg {
  move(t, r, n) {
    const o = this.position, a = this.getTarget(t);
    if (this.position = r, !Nd(o, r))
      return;
    const i = this.getTarget(t), l = this.getEventInit("mousemove"), [u, s] = Ho(a, i);
    return {
      leave: () => {
        a !== i && (t.dispatchUIEvent(a, "mouseout", l), u.forEach((d) => t.dispatchUIEvent(d, "mouseleave", l)));
      },
      enter: () => {
        a !== i && (t.dispatchUIEvent(i, "mouseover", l), s.forEach((d) => t.dispatchUIEvent(d, "mouseenter", l)));
      },
      move: () => {
        n || (t.dispatchUIEvent(i, "mousemove", l), this.modifySelecting(t));
      }
    };
  }
  down(t, r, n) {
    const o = this.buttons.down(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    this.buttonDownTarget[o] = a;
    const i = this.getEventInit("mousedown", r.button), l = nt(a);
    !n && (l || t.dispatchUIEvent(a, "mousedown", i)) && (this.startSelecting(t, i.detail), dt(a)), !l && li(r.button) === 2 && t.dispatchUIEvent(a, "contextmenu", this.getEventInit("contextmenu", r.button));
  }
  up(t, r, n) {
    const o = this.buttons.up(r);
    if (o === void 0)
      return;
    const a = this.getTarget(t);
    if (!nt(a)) {
      if (!n) {
        const l = this.getEventInit("mouseup", r.button);
        t.dispatchUIEvent(a, "mouseup", l), this.endSelecting();
      }
      const i = Ho(this.buttonDownTarget[o], a)[2][0];
      if (i) {
        const l = this.getEventInit("click", r.button);
        l.detail && (t.dispatchUIEvent(i, l.button === 0 ? "click" : "auxclick", l), l.button === 0 && l.detail === 2 && t.dispatchUIEvent(i, "dblclick", {
          ...this.getEventInit("dblclick", r.button),
          detail: l.detail
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
    return n.button = li(r), n.buttons = this.buttons.getButtons(), t === "mousedown" ? n.detail = this.clickCount.getOnDown(n.button) : t === "mouseup" ? n.detail = this.clickCount.getOnUp(n.button) : (t === "click" || t === "auxclick") && (n.detail = this.clickCount.incOnClick(n.button)), n;
  }
  getTarget(t) {
    var r;
    return (r = this.position.target) !== null && r !== void 0 ? r : t.config.document.body;
  }
  startSelecting(t, r) {
    var n, o;
    this.selecting = Gg({
      document: t.config.document,
      target: this.getTarget(t),
      node: (n = this.position.caret) === null || n === void 0 ? void 0 : n.node,
      offset: (o = this.position.caret) === null || o === void 0 ? void 0 : o.offset,
      clickCount: r
    });
  }
  modifySelecting(t) {
    var r, n;
    this.selecting && Xg(this.selecting, {
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
    yt(this, "position", {}), yt(this, "buttons", new kd()), yt(this, "selecting", void 0), yt(this, "buttonDownTarget", {}), yt(this, "clickCount", new class {
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
        yt(this, "down", {}), yt(this, "count", {});
      }
    }());
  }
}
function Ta(e, t) {
  var r;
  return ((r = Ld(e, t)) === null || r === void 0 ? void 0 : r.pointerEvents) !== "none";
}
function Jg(e) {
  const t = De(e);
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
const Cc = Symbol("Last check for pointer-events");
function Ld(e, t) {
  const r = t[Cc];
  if (!(e.config.pointerEventsCheck !== ya.Never && (!r || wc(e.config.pointerEventsCheck, ya.EachApiCall) && r[xe.Call] !== fa(e, xe.Call) || wc(e.config.pointerEventsCheck, ya.EachTrigger) && r[xe.Trigger] !== fa(e, xe.Trigger))))
    return r?.result;
  const o = Jg(t);
  return t[Cc] = {
    [xe.Call]: fa(e, xe.Call),
    [xe.Trigger]: fa(e, xe.Trigger),
    result: o
  }, o;
}
function $o(e, t) {
  const r = Ld(e, t);
  if (r?.pointerEvents === "none")
    throw new Error([
      `Unable to perform pointer interaction as the element ${r.tree.length > 1 ? "inherits" : "has"} \`pointer-events: none\`:`,
      "",
      Zg(r.tree)
    ].join(`
`));
}
function Zg(e) {
  return e.reverse().map((t, r) => [
    "".padEnd(r),
    t.tagName,
    t.id && `#${t.id}`,
    t.hasAttribute("data-testid") && `(testId=${t.getAttribute("data-testid")})`,
    eR(t),
    e.length > 1 && r === 0 && "  <-- This element declared `pointer-events: none`",
    e.length > 1 && r === e.length - 1 && "  <-- Asserted pointer events here"
  ].filter(Boolean).join("")).join(`
`);
}
function eR(e) {
  var t;
  let r;
  if (e.hasAttribute("aria-label"))
    r = e.getAttribute("aria-label");
  else if (e.hasAttribute("aria-labelledby")) {
    var n, o;
    r = (o = e.ownerDocument.getElementById(e.getAttribute("aria-labelledby"))) === null || o === void 0 || (n = o.textContent) === null || n === void 0 ? void 0 : n.trim();
  } else if (K(e, [
    "button",
    "input",
    "meter",
    "output",
    "progress",
    "select",
    "textarea"
  ]) && (!((t = e.labels) === null || t === void 0) && t.length))
    r = Array.from(e.labels).map((i) => {
      var l;
      return (l = i.textContent) === null || l === void 0 ? void 0 : l.trim();
    }).join("|");
  else if (K(e, "button")) {
    var a;
    r = (a = e.textContent) === null || a === void 0 ? void 0 : a.trim();
  }
  return r = r?.replace(/\n/g, "  "), Number(r?.length) > 30 && (r = `${r?.substring(0, 29)}…`), r ? `(label=${r})` : "";
}
function wc(e, t) {
  return (e & t) > 0;
}
function Je(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class tR {
  init(t) {
    const r = this.getTarget(t), [, n] = Ho(null, r), o = this.getEventInit();
    return $o(t, r), t.dispatchUIEvent(r, "pointerover", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerenter", o)), this;
  }
  move(t, r) {
    const n = this.position, o = this.getTarget(t);
    if (this.position = r, !Nd(n, r))
      return;
    const a = this.getTarget(t), i = this.getEventInit(-1), [l, u] = Ho(o, a);
    return {
      leave: () => {
        Ta(t, o) && o !== a && (t.dispatchUIEvent(o, "pointerout", i), l.forEach((s) => t.dispatchUIEvent(s, "pointerleave", i)));
      },
      enter: () => {
        $o(t, a), o !== a && (t.dispatchUIEvent(a, "pointerover", i), u.forEach((s) => t.dispatchUIEvent(s, "pointerenter", i)));
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
    $o(t, n), this.isDown = !0, this.isPrevented = !t.dispatchUIEvent(n, "pointerdown", this.getEventInit(r));
  }
  up(t, r = 0) {
    if (!this.isDown)
      return;
    const n = this.getTarget(t);
    $o(t, n), this.isPrevented = !1, this.isDown = !1, t.dispatchUIEvent(n, "pointerup", this.getEventInit(r));
  }
  release(t) {
    const r = this.getTarget(t), [n] = Ho(r, null), o = this.getEventInit();
    Ta(t, r) && (t.dispatchUIEvent(r, "pointerout", o), n.forEach((a) => t.dispatchUIEvent(a, "pointerleave", o))), this.isCancelled = !0;
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
      button: li(t),
      buttons: this.buttons.getButtons()
    };
  }
  constructor({ pointerId: t, pointerType: r, isPrimary: n }, o) {
    Je(this, "pointerId", void 0), Je(this, "pointerType", void 0), Je(this, "isPrimary", void 0), Je(this, "buttons", void 0), Je(this, "isMultitouch", !1), Je(this, "isCancelled", !1), Je(this, "isDown", !1), Je(this, "isPrevented", !1), Je(this, "position", {}), this.pointerId = t, this.pointerType = r, this.isPrimary = n, this.isMultitouch = !n, this.buttons = o;
  }
}
function st(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class rR {
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
      const l = this.mouse.move(t, n, i);
      l?.leave(), l?.enter(), l?.move(), this.mouse.down(t, r, i);
    }
    if (!a.isMultitouch) {
      const l = this.mouse.move(t, n, i);
      l?.leave(), l?.enter(), l?.move(), this.mouse.up(t, r, i);
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
    st(this, "system", void 0), st(this, "mouse", void 0), st(this, "buttons", void 0), st(this, "devices", new class {
      get(r) {
        var n, o, a;
        return (a = (n = this.registry)[o = r]) !== null && a !== void 0 ? a : n[o] = new Kg();
      }
      constructor() {
        st(this, "registry", {});
      }
    }()), st(this, "pointers", new class {
      new(r, n, o) {
        const a = n !== "touch" || !Object.values(this.registry).some((i) => i.pointerType === "touch" && !i.isCancelled);
        return a || Object.values(this.registry).forEach((i) => {
          i.pointerType === n && !i.isCancelled && (i.isMultitouch = !0);
        }), this.registry[r] = new tR({
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
        st(this, "registry", {}), st(this, "nextId", 1);
      }
    }()), this.system = t, this.buttons = new kd(), this.mouse = new Qg(), this.pointers.new("mouse", "mouse", this.buttons);
  }
}
function _c(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
class Bd {
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
    _c(this, "keyboard", new $g(this)), _c(this, "pointer", new rR(this));
  }
}
async function nR(e) {
  const t = [];
  return this.config.skipHover || t.push({
    target: e
  }), t.push({
    keys: "[MouseLeft]",
    target: e
  }), this.pointer(t);
}
async function oR(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft]"
  ]);
}
async function aR(e) {
  return this.pointer([
    {
      target: e
    },
    "[MouseLeft][MouseLeft][MouseLeft]"
  ]);
}
async function iR(e) {
  return this.pointer({
    target: e
  });
}
async function lR(e) {
  return $o(this, this.system.pointer.getMouseTarget(this)), this.pointer({
    target: e.ownerDocument.body
  });
}
async function uR({ shift: e } = {}) {
  return this.keyboard(e === !0 ? "{Shift>}{Tab}{/Shift}" : e === !1 ? "[/ShiftLeft][/ShiftRight]{Tab}" : "{Tab}");
}
var qi = /* @__PURE__ */ (function(e) {
  return e["{"] = "}", e["["] = "]", e;
})(qi || {});
function Fd(e, t) {
  let r = 0;
  const n = e[r] in qi ? e[r] : "";
  r += n.length;
  const a = new RegExp(`^\\${n}{2}`).test(e) ? "" : n;
  return {
    type: a,
    ...a === "" ? sR(e, r, t) : cR(e, r, a, t)
  };
}
function sR(e, t, r) {
  const n = e[t];
  return Ud(n, e, t, r), t += n.length, {
    consumedLength: t,
    descriptor: n,
    releasePrevious: !1,
    releaseSelf: !0,
    repeat: 1
  };
}
function cR(e, t, r, n) {
  var o, a;
  const i = e[t] === "/" ? "/" : "";
  t += i.length;
  const l = r === "{" && e[t] === "\\";
  t += Number(l);
  const u = l ? e[t] : (o = e.slice(t).match(r === "{" ? /^\w+|^[^}>/]/ : /^\w+/)) === null || o === void 0 ? void 0 : o[0];
  Ud(u, e, t, n), t += u.length;
  var s;
  const d = (s = (a = e.slice(t).match(/^>\d+/)) === null || a === void 0 ? void 0 : a[0]) !== null && s !== void 0 ? s : "";
  t += d.length;
  const f = e[t] === "/" || !d && e[t] === ">" ? e[t] : "";
  t += f.length;
  const c = qi[r], h = e[t] === c ? c : "";
  if (!h)
    throw new Error(jd([
      !d && "repeat modifier",
      !f && "release modifier",
      `"${c}"`
    ].filter(Boolean).join(" or "), e[t], e, n));
  return t += h.length, {
    consumedLength: t,
    descriptor: u,
    releasePrevious: !!i,
    repeat: d ? Math.max(Number(d.substr(1)), 1) : 1,
    releaseSelf: dR(f, d)
  };
}
function Ud(e, t, r, n) {
  if (!e)
    throw new Error(jd("key descriptor", t[r], t, n));
}
function dR(e, t) {
  if (e)
    return e === "/";
  if (t)
    return !1;
}
function jd(e, t, r, n) {
  return `Expected ${e} but found "${t ?? ""}" in "${r}"
    See ${n === "pointer" ? "https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen" : "https://testing-library.com/docs/user-event/keyboard"}
    for more information about how userEvent parses your input.`;
}
function fR(e, t) {
  const r = [];
  do {
    const { type: o, descriptor: a, consumedLength: i, releasePrevious: l, releaseSelf: u = !0, repeat: s } = Fd(t, "keyboard");
    var n;
    const d = (n = e.find((f) => {
      if (o === "[") {
        var c;
        return ((c = f.code) === null || c === void 0 ? void 0 : c.toLowerCase()) === a.toLowerCase();
      } else if (o === "{") {
        var h;
        return ((h = f.key) === null || h === void 0 ? void 0 : h.toLowerCase()) === a.toLowerCase();
      }
      return f.key === a;
    })) !== null && n !== void 0 ? n : {
      key: "Unknown",
      code: "Unknown",
      [o === "[" ? "code" : "key"]: a
    };
    r.push({
      keyDef: d,
      releasePrevious: l,
      releaseSelf: u,
      repeat: s
    }), t = t.slice(i);
  } while (t);
  return r;
}
async function pR(e) {
  const t = fR(this.config.keyboardMap, e);
  for (let r = 0; r < t.length; r++)
    await Wt(this.config), await mR(this, t[r]);
}
async function mR(e, { keyDef: t, releasePrevious: r, releaseSelf: n, repeat: o }) {
  const { system: a } = e;
  if (a.keyboard.isKeyPressed(t) && await a.keyboard.keyup(e, t), !r) {
    for (let i = 1; i <= o; i++)
      await a.keyboard.keydown(e, t), i < o && await Wt(e.config);
    n && await a.keyboard.keyup(e, t);
  }
}
async function vR(e) {
  for (const t of e.system.keyboard.getPressedKeys())
    await e.system.keyboard.keyup(e, t);
}
function $d(e) {
  const t = Ue(e) ? {
    "text/plain": bR(e)
  } : {
    "text/plain": String(e.ownerDocument.getSelection())
  }, r = Ri(De(e));
  for (const n in t)
    t[n] && r.setData(n, t[n]);
  return r;
}
function bR(e) {
  const t = Xo(e);
  return je(e).substring(t.startOffset, t.endOffset);
}
async function hR() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = $d(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "copy", {
      clipboardData: n
    }) && this.config.writeToClipboard && await md(e, n), n;
}
async function yR() {
  const e = this.config.document;
  var t;
  const r = (t = e.activeElement) !== null && t !== void 0 ? t : (
    /* istanbul ignore next */
    e.body
  ), n = $d(r);
  if (n.items.length !== 0)
    return this.dispatchUIEvent(r, "cut", {
      clipboardData: n
    }) && this.config.writeToClipboard && await md(r.ownerDocument, n), n;
}
async function gR(e) {
  const t = this.config.document;
  var r;
  const n = (r = t.activeElement) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    t.body
  );
  var o;
  const a = (o = typeof e == "string" ? RR(t, e) : e) !== null && o !== void 0 ? o : await jy(t).catch(() => {
    throw new Error("`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.");
  });
  this.dispatchUIEvent(n, "paste", {
    clipboardData: a
  });
}
function RR(e, t) {
  const r = Ri(De(e));
  return r.setData("text", t), r;
}
function qc(e, t) {
  const r = [];
  do {
    const { descriptor: n, consumedLength: o, releasePrevious: a, releaseSelf: i = !0 } = Fd(t, "pointer"), l = e.find((u) => u.name === n);
    l && r.push({
      keyDef: l,
      releasePrevious: a,
      releaseSelf: i
    }), t = t.slice(o);
  } while (t);
  return r;
}
async function ER(e) {
  const { pointerMap: t } = this.config, r = [];
  (Array.isArray(e) ? e : [
    e
  ]).forEach((n) => {
    typeof n == "string" ? r.push(...qc(t, n)) : "keys" in n ? r.push(...qc(t, n.keys).map((o) => ({
      ...n,
      ...o
    }))) : r.push(n);
  });
  for (let n = 0; n < r.length; n++)
    await Wt(this.config), await CR(this, r[n]);
  this.system.pointer.resetClickCount();
}
async function CR(e, t) {
  var r, n;
  const o = "pointerName" in t && t.pointerName ? t.pointerName : "keyDef" in t ? e.system.pointer.getPointerName(t.keyDef) : "mouse", a = e.system.pointer.getPreviousPosition(o);
  var i, l, u, s;
  const d = {
    target: (i = t.target) !== null && i !== void 0 ? i : wR(e, a),
    coords: (l = t.coords) !== null && l !== void 0 ? l : a?.coords,
    caret: {
      node: (u = t.node) !== null && u !== void 0 ? u : Pc(t) || a == null || (r = a.caret) === null || r === void 0 ? void 0 : r.node,
      offset: (s = t.offset) !== null && s !== void 0 ? s : Pc(t) || a == null || (n = a.caret) === null || n === void 0 ? void 0 : n.offset
    }
  };
  "keyDef" in t ? (e.system.pointer.isKeyPressed(t.keyDef) && (jo(e, xe.Trigger), await e.system.pointer.release(e, t.keyDef, d)), t.releasePrevious || (jo(e, xe.Trigger), await e.system.pointer.press(e, t.keyDef, d), t.releaseSelf && (jo(e, xe.Trigger), await e.system.pointer.release(e, t.keyDef, d)))) : (jo(e, xe.Trigger), await e.system.pointer.move(e, o, d));
}
function Pc(e) {
  var t, r;
  return !!((r = (t = e.target) !== null && t !== void 0 ? t : e.node) !== null && r !== void 0 ? r : e.offset !== void 0);
}
function wR(e, t) {
  if (!t)
    throw new Error("This pointer has no previous position. Provide a target property!");
  var r;
  return (r = t.target) !== null && r !== void 0 ? r : e.config.document.body;
}
async function _R(e) {
  if (!jt(e) || nt(e))
    throw new Error("clear()` is only supported on editable elements.");
  if (dt(e), e.ownerDocument.activeElement !== e)
    throw new Error("The element to be cleared could not be focused.");
  if (Td(e), !gg(e))
    throw new Error("The element content to be cleared could not be selected.");
  Vt(this, e, "", "deleteContentBackward");
}
async function qR(e, t) {
  return Hd.call(this, !0, e, t);
}
async function PR(e, t) {
  return Hd.call(this, !1, e, t);
}
async function Hd(e, t, r) {
  if (!e && !t.multiple)
    throw J().getElementError("Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.", t);
  const n = Array.isArray(r) ? r : [
    r
  ], o = Array.from(t.querySelectorAll('option, [role="option"]')), a = n.map((l) => {
    if (typeof l != "string" && o.includes(l))
      return l;
    {
      const u = o.find((s) => s.value === l || s.innerHTML === l);
      if (u)
        return u;
      throw J().getElementError(`Value "${String(l)}" not found in options`, t);
    }
  }).filter((l) => !nt(l));
  if (nt(t) || !a.length) return;
  const i = (l) => {
    l.selected = e, this.dispatchUIEvent(t, "input", {
      bubbles: !0,
      cancelable: !1,
      composed: !0
    }), this.dispatchUIEvent(t, "change");
  };
  if (K(t, "select"))
    if (t.multiple)
      for (const l of a) {
        const u = this.config.pointerEventsCheck === 0 ? !0 : Ta(this, l);
        u && (this.dispatchUIEvent(l, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(l, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(l, "pointermove"), this.dispatchUIEvent(l, "mousemove"), this.dispatchUIEvent(l, "pointerdown"), this.dispatchUIEvent(l, "mousedown")), dt(t), u && (this.dispatchUIEvent(l, "pointerup"), this.dispatchUIEvent(l, "mouseup")), i(l), u && this.dispatchUIEvent(l, "click"), await Wt(this.config);
      }
    else if (a.length === 1) {
      const l = this.config.pointerEventsCheck === 0 ? !0 : Ta(this, t);
      l ? await this.click(t) : dt(t), i(a[0]), l && (this.dispatchUIEvent(t, "pointerover"), this.dispatchUIEvent(t, "pointerenter"), this.dispatchUIEvent(t, "mouseover"), this.dispatchUIEvent(t, "mouseenter"), this.dispatchUIEvent(t, "pointerup"), this.dispatchUIEvent(t, "mouseup"), this.dispatchUIEvent(t, "click")), await Wt(this.config);
    } else
      throw J().getElementError("Cannot select multiple options on a non-multiple select", t);
  else if (t.getAttribute("role") === "listbox")
    for (const l of a)
      await this.click(l), await this.unhover(l);
  else
    throw J().getElementError("Cannot select options on elements that are neither select nor listbox elements", t);
}
async function TR(e, t, { skipClick: r = this.config.skipClick, skipAutoClose: n = this.config.skipAutoClose, initialSelectionStart: o, initialSelectionEnd: a } = {}) {
  e.disabled || (r || await this.click(e), o !== void 0 && Uo(e, o, a ?? o), await this.keyboard(t), n || await vR(this));
}
const Tc = Symbol("files and value properties are mocked");
function za(e, t, r) {
  r ? Object.defineProperty(e, t, r) : delete e[t];
}
function xR(e, t) {
  var r;
  (r = e[Tc]) === null || r === void 0 || r.restore();
  const n = Object.getOwnPropertyDescriptor(e, "type"), o = Object.getOwnPropertyDescriptor(e, "value"), a = Object.getOwnPropertyDescriptor(e, "files");
  function i() {
    za(e, "type", n), za(e, "value", o), za(e, "files", a);
  }
  e[Tc] = {
    restore: i
  }, Object.defineProperties(e, {
    files: {
      configurable: !0,
      get: () => t
    },
    value: {
      configurable: !0,
      get: () => t.length ? `C:\\fakepath\\${t[0].name}` : "",
      set(l) {
        if (l === "")
          i();
        else {
          var u;
          o == null || (u = o.set) === null || u === void 0 || u.call(e, l);
        }
      }
    },
    type: {
      configurable: !0,
      get: () => "file",
      set(l) {
        l !== "file" && (i(), e.type = l);
      }
    }
  });
}
async function SR(e, t) {
  const r = K(e, "label") ? e.control : e;
  if (!r || !K(r, "input", {
    type: "file"
  }))
    throw new TypeError(`The ${r === e ? "given" : "associated"} ${r?.tagName} element does not accept file uploads`);
  if (nt(e)) return;
  const n = (Array.isArray(t) ? t : [
    t
  ]).filter((a) => !this.config.applyAccept || OR(a, r.accept)).slice(0, r.multiple ? void 0 : 1), o = () => {
    var a;
    n.length === ((a = r.files) === null || a === void 0 ? void 0 : a.length) && n.every((i, l) => {
      var u;
      return i === ((u = r.files) === null || u === void 0 ? void 0 : u.item(l));
    }) || (xR(r, gi(De(e), n)), this.dispatchUIEvent(r, "input"), this.dispatchUIEvent(r, "change"));
  };
  r.addEventListener("fileDialog", o), await this.click(e), r.removeEventListener("fileDialog", o);
}
function pa(e) {
  return e.toLowerCase().replace(/(\.|\/)jpg\b/g, "$1jpeg");
}
function OR(e, t) {
  if (!t)
    return !0;
  const r = [
    "audio/*",
    "image/*",
    "video/*"
  ];
  return pa(t).trim().split(/\s*,\s*/).some((n) => n.startsWith(".") ? pa(e.name).endsWith(n) : r.includes(n) ? pa(e.type).startsWith(n.replace("*", "")) : pa(e.type) === n);
}
const xc = {
  click: nR,
  dblClick: oR,
  tripleClick: aR,
  hover: iR,
  unhover: lR,
  tab: uR,
  keyboard: pR,
  copy: hR,
  cut: yR,
  paste: gR,
  pointer: ER,
  clear: _R,
  deselectOptions: PR,
  selectOptions: qR,
  type: TR,
  upload: SR
};
function MR(e) {
  return J().asyncWrapper(e);
}
const Vd = {
  applyAccept: !0,
  autoModify: !0,
  delay: 0,
  document: globalThis.document,
  keyboardMap: Hg,
  pointerMap: Vg,
  pointerEventsCheck: ya.EachApiCall,
  skipAutoClose: !1,
  skipClick: !1,
  skipHover: !1,
  writeToClipboard: !1,
  advanceTimers: () => Promise.resolve()
}, AR = {
  ...Vd,
  writeToClipboard: !0
};
function Wd(e = {}, t = AR, r) {
  const n = NR(e, r, t);
  return {
    ...t,
    ...e,
    document: n
  };
}
function IR(e = {}) {
  const t = Wd(e);
  Id(t.document), Ad(De(t.document).HTMLElement);
  var r;
  const n = (r = t.document.defaultView) !== null && r !== void 0 ? r : (
    /* istanbul ignore next */
    globalThis.window
  );
  return By(n), Pi(t).api;
}
function ge({ keyboardState: e, pointerState: t, ...r } = {}, n) {
  const o = Wd(r, Vd, n);
  Id(o.document), Ad(De(o.document).HTMLElement);
  var a;
  const i = (a = t ?? e) !== null && a !== void 0 ? a : new Bd();
  return {
    api: Pi(o, i).api,
    system: i
  };
}
function kR(e) {
  return Pi({
    ...this.config,
    ...e
  }, this.system).api;
}
function DR(e, t) {
  function r(...n) {
    return jo(e, xe.Call), MR(() => t.apply(e, n).then(async (o) => (await Wt(e.config), o)));
  }
  return Object.defineProperty(r, "name", {
    get: () => t.name
  }), r;
}
function Pi(e, t = new Bd()) {
  const r = {};
  return Object.assign(r, {
    config: e,
    dispatchEvent: Md.bind(r),
    dispatchUIEvent: Ig.bind(r),
    system: t,
    levelRefs: {},
    ...xc
  }), {
    instance: r,
    api: {
      ...Object.fromEntries(Object.entries(xc).map(([n, o]) => [
        n,
        DR(r, o)
      ])),
      setup: kR.bind(r)
    }
  };
}
function NR(e, t, r) {
  var n, o;
  return (o = (n = e.document) !== null && n !== void 0 ? n : t && Bg(t)) !== null && o !== void 0 ? o : r.document;
}
function LR(e) {
  return ge().api.clear(e);
}
function BR(e, t = {}) {
  return ge(t, e).api.click(e);
}
function FR(e = {}) {
  return ge(e).api.copy();
}
function UR(e = {}) {
  return ge(e).api.cut();
}
function jR(e, t = {}) {
  return ge(t).api.dblClick(e);
}
function $R(e, t, r = {}) {
  return ge(r).api.deselectOptions(e, t);
}
function HR(e, t = {}) {
  return ge(t).api.hover(e);
}
async function VR(e, t = {}) {
  const { api: r, system: n } = ge(t);
  return r.keyboard(e).then(() => n);
}
async function WR(e, t = {}) {
  const { api: r, system: n } = ge(t);
  return r.pointer(e).then(() => n);
}
function zR(e, t) {
  return ge(t).api.paste(e);
}
function KR(e, t, r = {}) {
  return ge(r).api.selectOptions(e, t);
}
function GR(e, t = {}) {
  return ge(t).api.tripleClick(e);
}
function YR(e, t, r = {}) {
  return ge(r, e).api.type(e, t, r);
}
function XR(e, t = {}) {
  const { api: r, system: n } = ge(t);
  return n.pointer.setMousePosition({
    target: e
  }), r.unhover(e);
}
function QR(e, t, r = {}) {
  return ge(r).api.upload(e, t);
}
function JR(e = {}) {
  return ge().api.tab(e);
}
const ZR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clear: LR,
  click: BR,
  copy: FR,
  cut: UR,
  dblClick: jR,
  deselectOptions: $R,
  hover: HR,
  keyboard: VR,
  paste: zR,
  pointer: WR,
  selectOptions: KR,
  tab: JR,
  tripleClick: GR,
  type: YR,
  unhover: XR,
  upload: QR
}, Symbol.toStringTag, { value: "Module" })), zd = {
  ...ZR,
  setup: IR
};
function qE(e, t = {}) {
  return {
    user: zd.setup(),
    ...yi(e, t)
  };
}
function PE(e, t, r = {}) {
  const {
    middlewares: n,
    preloadedState: o,
    // Automatically create a store instance if no store was passed in
    store: a = yf({ reducer: t, middlewares: n, preloadedState: o }),
    ...i
  } = r, l = ({ children: u }) => /* @__PURE__ */ vf.jsx(hf, { store: a, children: u });
  return {
    store: a,
    user: zd.setup(),
    ...yi(e, { wrapper: l, ...i })
  };
}
export {
  PE as renderWithStore,
  qE as renderWithUser
};
//# sourceMappingURL=test.es.js.map
