import { j as Wo } from "../jsx-runtime-lzYHhGH3.js";
import { BrowserRouter as Th, Routes as lh, StaticRouter as ph } from "react-router";
import As, { StrictMode as oh } from "react";
import Rh from "@emotion/cache";
import { g as hf, c as ls } from "../_commonjsHelpers-DaMA6jEr.js";
import rs from "stream";
import ps from "buffer";
import df from "events";
import uh from "util";
import { c as xh } from "../client-BK9NlSVR.js";
import Ms from "react-dom";
import { ThemeProvider as Eh, CssBaseline as kh } from "@mui/material";
import { CacheProvider as Ch } from "@emotion/react";
import { Provider as Sh } from "react-redux";
var zs = { exports: {} }, Ef;
function Ph() {
  return Ef || (Ef = 1, (function(ce, V) {
    var F = rs;
    ce.exports = ee, ee.through = ee;
    function ee(oe, Z, Y) {
      oe = oe || function(U) {
        this.queue(U);
      }, Z = Z || function() {
        this.queue(null);
      };
      var C = !1, q = !1, ue = [], k = !1, B = new F();
      B.readable = B.writable = !0, B.paused = !1, B.autoDestroy = !(Y && Y.autoDestroy === !1), B.write = function(U) {
        return oe.call(this, U), !B.paused;
      };
      function Ie() {
        for (; ue.length && !B.paused; ) {
          var U = ue.shift();
          if (U === null)
            return B.emit("end");
          B.emit("data", U);
        }
      }
      B.queue = B.push = function(U) {
        return k || (U === null && (k = !0), ue.push(U), Ie()), B;
      }, B.on("end", function() {
        B.readable = !1, !B.writable && B.autoDestroy && process.nextTick(function() {
          B.destroy();
        });
      });
      function G() {
        B.writable = !1, Z.call(B), !B.readable && B.autoDestroy && B.destroy();
      }
      return B.end = function(U) {
        if (!C)
          return C = !0, arguments.length && B.write(U), G(), B;
      }, B.destroy = function() {
        if (!q)
          return q = !0, C = !0, ue.length = 0, B.writable = B.readable = !1, B.emit("close"), B;
      }, B.pause = function() {
        if (!B.paused)
          return B.paused = !0, B;
      }, B.resume = function() {
        return B.paused && (B.paused = !1, B.emit("resume")), Ie(), B.paused || B.emit("drain"), B;
      }, B;
    }
  })(zs)), zs.exports;
}
var Fh = Ph();
const Ah = /* @__PURE__ */ hf(Fh);
var Us, kf;
function Mh() {
  if (kf) return Us;
  kf = 1;
  var ce = Object.prototype.toString, V = typeof Buffer.alloc == "function" && typeof Buffer.allocUnsafe == "function" && typeof Buffer.from == "function";
  function F(Y) {
    return ce.call(Y).slice(8, -1) === "ArrayBuffer";
  }
  function ee(Y, C, q) {
    C >>>= 0;
    var ue = Y.byteLength - C;
    if (ue < 0)
      throw new RangeError("'offset' is out of bounds");
    if (q === void 0)
      q = ue;
    else if (q >>>= 0, q > ue)
      throw new RangeError("'length' is out of bounds");
    return V ? Buffer.from(Y.slice(C, C + q)) : new Buffer(new Uint8Array(Y.slice(C, C + q)));
  }
  function oe(Y, C) {
    if ((typeof C != "string" || C === "") && (C = "utf8"), !Buffer.isEncoding(C))
      throw new TypeError('"encoding" must be a valid string encoding');
    return V ? Buffer.from(Y, C) : new Buffer(Y, C);
  }
  function Z(Y, C, q) {
    if (typeof Y == "number")
      throw new TypeError('"value" argument must not be a number');
    return F(Y) ? ee(Y, C, q) : typeof Y == "string" ? oe(Y, C) : V ? Buffer.from(Y) : new Buffer(Y);
  }
  return Us = Z, Us;
}
var Es = { exports: {} }, Ys, Cf;
function Oh() {
  return Cf || (Cf = 1, Ys = Array.isArray || function(ce) {
    return Object.prototype.toString.call(ce) == "[object Array]";
  }), Ys;
}
var _i = {}, Sf;
function ac() {
  if (Sf) return _i;
  Sf = 1;
  function ce(fe) {
    return Array.isArray ? Array.isArray(fe) : U(fe) === "[object Array]";
  }
  _i.isArray = ce;
  function V(fe) {
    return typeof fe == "boolean";
  }
  _i.isBoolean = V;
  function F(fe) {
    return fe === null;
  }
  _i.isNull = F;
  function ee(fe) {
    return fe == null;
  }
  _i.isNullOrUndefined = ee;
  function oe(fe) {
    return typeof fe == "number";
  }
  _i.isNumber = oe;
  function Z(fe) {
    return typeof fe == "string";
  }
  _i.isString = Z;
  function Y(fe) {
    return typeof fe == "symbol";
  }
  _i.isSymbol = Y;
  function C(fe) {
    return fe === void 0;
  }
  _i.isUndefined = C;
  function q(fe) {
    return U(fe) === "[object RegExp]";
  }
  _i.isRegExp = q;
  function ue(fe) {
    return typeof fe == "object" && fe !== null;
  }
  _i.isObject = ue;
  function k(fe) {
    return U(fe) === "[object Date]";
  }
  _i.isDate = k;
  function B(fe) {
    return U(fe) === "[object Error]" || fe instanceof Error;
  }
  _i.isError = B;
  function Ie(fe) {
    return typeof fe == "function";
  }
  _i.isFunction = Ie;
  function G(fe) {
    return fe === null || typeof fe == "boolean" || typeof fe == "number" || typeof fe == "string" || typeof fe == "symbol" || // ES6 symbol
    typeof fe > "u";
  }
  _i.isPrimitive = G, _i.isBuffer = ps.Buffer.isBuffer;
  function U(fe) {
    return Object.prototype.toString.call(fe);
  }
  return _i;
}
var ks = { exports: {} }, Pf;
function Pu() {
  return Pf || (Pf = 1, typeof Object.create == "function" ? ks.exports = function(V, F) {
    F && (V.super_ = F, V.prototype = Object.create(F.prototype, {
      constructor: {
        value: V,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : ks.exports = function(V, F) {
    if (F) {
      V.super_ = F;
      var ee = function() {
      };
      ee.prototype = F.prototype, V.prototype = new ee(), V.prototype.constructor = V;
    }
  }), ks.exports;
}
var Gs = {}, Ff;
function Af() {
  if (Ff) return Gs;
  Ff = 1;
  var ce = ps.Buffer, V = ce.isEncoding || function(C) {
    switch (C && C.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function F(C) {
    if (C && !V(C))
      throw new Error("Unknown encoding: " + C);
  }
  var ee = Gs.StringDecoder = function(C) {
    switch (this.encoding = (C || "utf8").toLowerCase().replace(/[-_]/, ""), F(C), this.encoding) {
      case "utf8":
        this.surrogateSize = 3;
        break;
      case "ucs2":
      case "utf16le":
        this.surrogateSize = 2, this.detectIncompleteChar = Z;
        break;
      case "base64":
        this.surrogateSize = 3, this.detectIncompleteChar = Y;
        break;
      default:
        this.write = oe;
        return;
    }
    this.charBuffer = new ce(6), this.charReceived = 0, this.charLength = 0;
  };
  ee.prototype.write = function(C) {
    for (var q = ""; this.charLength; ) {
      var ue = C.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : C.length;
      if (C.copy(this.charBuffer, this.charReceived, 0, ue), this.charReceived += ue, this.charReceived < this.charLength)
        return "";
      C = C.slice(ue, C.length), q = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
      var B = q.charCodeAt(q.length - 1);
      if (B >= 55296 && B <= 56319) {
        this.charLength += this.surrogateSize, q = "";
        continue;
      }
      if (this.charReceived = this.charLength = 0, C.length === 0)
        return q;
      break;
    }
    this.detectIncompleteChar(C);
    var k = C.length;
    this.charLength && (C.copy(this.charBuffer, 0, C.length - this.charReceived, k), k -= this.charReceived), q += C.toString(this.encoding, 0, k);
    var k = q.length - 1, B = q.charCodeAt(k);
    if (B >= 55296 && B <= 56319) {
      var Ie = this.surrogateSize;
      return this.charLength += Ie, this.charReceived += Ie, this.charBuffer.copy(this.charBuffer, Ie, 0, Ie), C.copy(this.charBuffer, 0, 0, Ie), q.substring(0, k);
    }
    return q;
  }, ee.prototype.detectIncompleteChar = function(C) {
    for (var q = C.length >= 3 ? 3 : C.length; q > 0; q--) {
      var ue = C[C.length - q];
      if (q == 1 && ue >> 5 == 6) {
        this.charLength = 2;
        break;
      }
      if (q <= 2 && ue >> 4 == 14) {
        this.charLength = 3;
        break;
      }
      if (q <= 3 && ue >> 3 == 30) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = q;
  }, ee.prototype.end = function(C) {
    var q = "";
    if (C && C.length && (q = this.write(C)), this.charReceived) {
      var ue = this.charReceived, k = this.charBuffer, B = this.encoding;
      q += k.slice(0, ue).toString(B);
    }
    return q;
  };
  function oe(C) {
    return C.toString(this.encoding);
  }
  function Z(C) {
    this.charReceived = C.length % 2, this.charLength = this.charReceived ? 2 : 0;
  }
  function Y(C) {
    this.charReceived = C.length % 3, this.charLength = this.charReceived ? 3 : 0;
  }
  return Gs;
}
var Xs, Mf;
function ch() {
  if (Mf) return Xs;
  Mf = 1, Xs = C;
  var ce = Oh(), V = ps.Buffer;
  C.ReadableState = Y;
  var F = df.EventEmitter;
  F.listenerCount || (F.listenerCount = function(N, H) {
    return N.listeners(H).length;
  });
  var ee = rs, oe = ac();
  oe.inherits = Pu();
  var Z;
  oe.inherits(C, ee);
  function Y(N, H) {
    N = N || {};
    var se = N.highWaterMark;
    this.highWaterMark = se || se === 0 ? se : 16 * 1024, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = !1, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.calledRead = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!N.objectMode, this.defaultEncoding = N.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, N.encoding && (Z || (Z = Af().StringDecoder), this.decoder = new Z(N.encoding), this.encoding = N.encoding);
  }
  function C(N) {
    if (!(this instanceof C))
      return new C(N);
    this._readableState = new Y(N), this.readable = !0, ee.call(this);
  }
  C.prototype.push = function(N, H) {
    var se = this._readableState;
    return typeof N == "string" && !se.objectMode && (H = H || se.defaultEncoding, H !== se.encoding && (N = new V(N, H), H = "")), q(this, se, N, H, !1);
  }, C.prototype.unshift = function(N) {
    var H = this._readableState;
    return q(this, H, N, "", !0);
  };
  function q(N, H, se, Ee, Ze) {
    var ae = G(H, se);
    if (ae)
      N.emit("error", ae);
    else if (se == null)
      H.reading = !1, H.ended || U(N, H);
    else if (H.objectMode || se && se.length > 0)
      if (H.ended && !Ze) {
        var P = new Error("stream.push() after EOF");
        N.emit("error", P);
      } else if (H.endEmitted && Ze) {
        var P = new Error("stream.unshift() after end event");
        N.emit("error", P);
      } else
        H.decoder && !Ze && !Ee && (se = H.decoder.write(se)), H.length += H.objectMode ? 1 : se.length, Ze ? H.buffer.unshift(se) : (H.reading = !1, H.buffer.push(se)), H.needReadable && fe(N), he(N, H);
    else Ze || (H.reading = !1);
    return ue(H);
  }
  function ue(N) {
    return !N.ended && (N.needReadable || N.length < N.highWaterMark || N.length === 0);
  }
  C.prototype.setEncoding = function(N) {
    Z || (Z = Af().StringDecoder), this._readableState.decoder = new Z(N), this._readableState.encoding = N;
  };
  var k = 8388608;
  function B(N) {
    if (N >= k)
      N = k;
    else {
      N--;
      for (var H = 1; H < 32; H <<= 1) N |= N >> H;
      N++;
    }
    return N;
  }
  function Ie(N, H) {
    return H.length === 0 && H.ended ? 0 : H.objectMode ? N === 0 ? 0 : 1 : N === null || isNaN(N) ? H.flowing && H.buffer.length ? H.buffer[0].length : H.length : N <= 0 ? 0 : (N > H.highWaterMark && (H.highWaterMark = B(N)), N > H.length ? H.ended ? H.length : (H.needReadable = !0, 0) : N);
  }
  C.prototype.read = function(N) {
    var H = this._readableState;
    H.calledRead = !0;
    var se = N, Ee;
    if ((typeof N != "number" || N > 0) && (H.emittedReadable = !1), N === 0 && H.needReadable && (H.length >= H.highWaterMark || H.ended))
      return fe(this), null;
    if (N = Ie(N, H), N === 0 && H.ended)
      return Ee = null, H.length > 0 && H.decoder && (Ee = Ve(N, H), H.length -= Ee.length), H.length === 0 && it(this), Ee;
    var Ze = H.needReadable;
    return H.length - N <= H.highWaterMark && (Ze = !0), (H.ended || H.reading) && (Ze = !1), Ze && (H.reading = !0, H.sync = !0, H.length === 0 && (H.needReadable = !0), this._read(H.highWaterMark), H.sync = !1), Ze && !H.reading && (N = Ie(se, H)), N > 0 ? Ee = Ve(N, H) : Ee = null, Ee === null && (H.needReadable = !0, N = 0), H.length -= N, H.length === 0 && !H.ended && (H.needReadable = !0), H.ended && !H.endEmitted && H.length === 0 && it(this), Ee;
  };
  function G(N, H) {
    var se = null;
    return !V.isBuffer(H) && typeof H != "string" && H !== null && H !== void 0 && !N.objectMode && (se = new TypeError("Invalid non-string/buffer chunk")), se;
  }
  function U(N, H) {
    if (H.decoder && !H.ended) {
      var se = H.decoder.end();
      se && se.length && (H.buffer.push(se), H.length += H.objectMode ? 1 : se.length);
    }
    H.ended = !0, H.length > 0 ? fe(N) : it(N);
  }
  function fe(N) {
    var H = N._readableState;
    H.needReadable = !1, !H.emittedReadable && (H.emittedReadable = !0, H.sync ? process.nextTick(function() {
      Et(N);
    }) : Et(N));
  }
  function Et(N) {
    N.emit("readable");
  }
  function he(N, H) {
    H.readingMore || (H.readingMore = !0, process.nextTick(function() {
      pe(N, H);
    }));
  }
  function pe(N, H) {
    for (var se = H.length; !H.reading && !H.flowing && !H.ended && H.length < H.highWaterMark && (N.read(0), se !== H.length); )
      se = H.length;
    H.readingMore = !1;
  }
  C.prototype._read = function(N) {
    this.emit("error", new Error("not implemented"));
  }, C.prototype.pipe = function(N, H) {
    var se = this, Ee = this._readableState;
    switch (Ee.pipesCount) {
      case 0:
        Ee.pipes = N;
        break;
      case 1:
        Ee.pipes = [Ee.pipes, N];
        break;
      default:
        Ee.pipes.push(N);
        break;
    }
    Ee.pipesCount += 1;
    var Ze = (!H || H.end !== !1) && N !== process.stdout && N !== process.stderr, ae = Ze ? $ : te;
    Ee.endEmitted ? process.nextTick(ae) : se.once("end", ae), N.on("unpipe", P);
    function P(dt) {
      dt === se && te();
    }
    function $() {
      N.end();
    }
    var le = Ge(se);
    N.on("drain", le);
    function te() {
      N.removeListener("close", nt), N.removeListener("finish", pt), N.removeListener("drain", le), N.removeListener("error", Q), N.removeListener("unpipe", P), se.removeListener("end", $), se.removeListener("end", te), (!N._writableState || N._writableState.needDrain) && le();
    }
    function Q(dt) {
      Qe(), N.removeListener("error", Q), F.listenerCount(N, "error") === 0 && N.emit("error", dt);
    }
    !N._events || !N._events.error ? N.on("error", Q) : ce(N._events.error) ? N._events.error.unshift(Q) : N._events.error = [Q, N._events.error];
    function nt() {
      N.removeListener("finish", pt), Qe();
    }
    N.once("close", nt);
    function pt() {
      N.removeListener("close", nt), Qe();
    }
    N.once("finish", pt);
    function Qe() {
      se.unpipe(N);
    }
    return N.emit("pipe", se), Ee.flowing || (this.on("readable", j), Ee.flowing = !0, process.nextTick(function() {
      Re(se);
    })), N;
  };
  function Ge(N) {
    return function() {
      var H = N._readableState;
      H.awaitDrain--, H.awaitDrain === 0 && Re(N);
    };
  }
  function Re(N) {
    var H = N._readableState, se;
    H.awaitDrain = 0;
    function Ee(Ze, ae, P) {
      var $ = Ze.write(se);
      $ === !1 && H.awaitDrain++;
    }
    for (; H.pipesCount && (se = N.read()) !== null; )
      if (H.pipesCount === 1 ? Ee(H.pipes) : $e(H.pipes, Ee), N.emit("data", se), H.awaitDrain > 0)
        return;
    if (H.pipesCount === 0) {
      H.flowing = !1, F.listenerCount(N, "data") > 0 && Ae(N);
      return;
    }
    H.ranOut = !0;
  }
  function j() {
    this._readableState.ranOut && (this._readableState.ranOut = !1, Re(this));
  }
  C.prototype.unpipe = function(N) {
    var H = this._readableState;
    if (H.pipesCount === 0)
      return this;
    if (H.pipesCount === 1)
      return N && N !== H.pipes ? this : (N || (N = H.pipes), H.pipes = null, H.pipesCount = 0, this.removeListener("readable", j), H.flowing = !1, N && N.emit("unpipe", this), this);
    if (!N) {
      var se = H.pipes, Ee = H.pipesCount;
      H.pipes = null, H.pipesCount = 0, this.removeListener("readable", j), H.flowing = !1;
      for (var Ze = 0; Ze < Ee; Ze++)
        se[Ze].emit("unpipe", this);
      return this;
    }
    var Ze = _t(H.pipes, N);
    return Ze === -1 ? this : (H.pipes.splice(Ze, 1), H.pipesCount -= 1, H.pipesCount === 1 && (H.pipes = H.pipes[0]), N.emit("unpipe", this), this);
  }, C.prototype.on = function(N, H) {
    var se = ee.prototype.on.call(this, N, H);
    if (N === "data" && !this._readableState.flowing && Ae(this), N === "readable" && this.readable) {
      var Ee = this._readableState;
      Ee.readableListening || (Ee.readableListening = !0, Ee.emittedReadable = !1, Ee.needReadable = !0, Ee.reading ? Ee.length && fe(this) : this.read(0));
    }
    return se;
  }, C.prototype.addListener = C.prototype.on, C.prototype.resume = function() {
    Ae(this), this.read(0), this.emit("resume");
  }, C.prototype.pause = function() {
    Ae(this, !0), this.emit("pause");
  };
  function Ae(N, H) {
    var se = N._readableState;
    if (se.flowing)
      throw new Error("Cannot switch to old mode now.");
    var Ee = H || !1, Ze = !1;
    N.readable = !0, N.pipe = ee.prototype.pipe, N.on = N.addListener = ee.prototype.on, N.on("readable", function() {
      Ze = !0;
      for (var ae; !Ee && (ae = N.read()) !== null; )
        N.emit("data", ae);
      ae === null && (Ze = !1, N._readableState.needReadable = !0);
    }), N.pause = function() {
      Ee = !0, this.emit("pause");
    }, N.resume = function() {
      Ee = !1, Ze ? process.nextTick(function() {
        N.emit("readable");
      }) : this.read(0), this.emit("resume");
    }, N.emit("readable");
  }
  C.prototype.wrap = function(N) {
    var H = this._readableState, se = !1, Ee = this;
    N.on("end", function() {
      if (H.decoder && !H.ended) {
        var P = H.decoder.end();
        P && P.length && Ee.push(P);
      }
      Ee.push(null);
    }), N.on("data", function(P) {
      if (H.decoder && (P = H.decoder.write(P)), !(H.objectMode && P == null) && !(!H.objectMode && (!P || !P.length))) {
        var $ = Ee.push(P);
        $ || (se = !0, N.pause());
      }
    });
    for (var Ze in N)
      typeof N[Ze] == "function" && typeof this[Ze] > "u" && (this[Ze] = /* @__PURE__ */ (function(P) {
        return function() {
          return N[P].apply(N, arguments);
        };
      })(Ze));
    var ae = ["error", "close", "destroy", "pause", "resume"];
    return $e(ae, function(P) {
      N.on(P, Ee.emit.bind(Ee, P));
    }), Ee._read = function(P) {
      se && (se = !1, N.resume());
    }, Ee;
  }, C._fromList = Ve;
  function Ve(N, H) {
    var se = H.buffer, Ee = H.length, Ze = !!H.decoder, ae = !!H.objectMode, P;
    if (se.length === 0)
      return null;
    if (Ee === 0)
      P = null;
    else if (ae)
      P = se.shift();
    else if (!N || N >= Ee)
      Ze ? P = se.join("") : P = V.concat(se, Ee), se.length = 0;
    else if (N < se[0].length) {
      var $ = se[0];
      P = $.slice(0, N), se[0] = $.slice(N);
    } else if (N === se[0].length)
      P = se.shift();
    else {
      Ze ? P = "" : P = new V(N);
      for (var le = 0, te = 0, Q = se.length; te < Q && le < N; te++) {
        var $ = se[0], nt = Math.min(N - le, $.length);
        Ze ? P += $.slice(0, nt) : $.copy(P, le, 0, nt), nt < $.length ? se[0] = $.slice(nt) : se.shift(), le += nt;
      }
    }
    return P;
  }
  function it(N) {
    var H = N._readableState;
    if (H.length > 0)
      throw new Error("endReadable called on non-empty stream");
    !H.endEmitted && H.calledRead && (H.ended = !0, process.nextTick(function() {
      !H.endEmitted && H.length === 0 && (H.endEmitted = !0, N.readable = !1, N.emit("end"));
    }));
  }
  function $e(N, H) {
    for (var se = 0, Ee = N.length; se < Ee; se++)
      H(N[se], se);
  }
  function _t(N, H) {
    for (var se = 0, Ee = N.length; se < Ee; se++)
      if (N[se] === H) return se;
    return -1;
  }
  return Xs;
}
var Zs, Of;
function gf() {
  if (Of) return Zs;
  Of = 1, Zs = oe;
  var ce = Object.keys || function(C) {
    var q = [];
    for (var ue in C) q.push(ue);
    return q;
  }, V = ac();
  V.inherits = Pu();
  var F = ch(), ee = sh();
  V.inherits(oe, F), Y(ce(ee.prototype), function(C) {
    oe.prototype[C] || (oe.prototype[C] = ee.prototype[C]);
  });
  function oe(C) {
    if (!(this instanceof oe))
      return new oe(C);
    F.call(this, C), ee.call(this, C), C && C.readable === !1 && (this.readable = !1), C && C.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, C && C.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", Z);
  }
  function Z() {
    this.allowHalfOpen || this._writableState.ended || process.nextTick(this.end.bind(this));
  }
  function Y(C, q) {
    for (var ue = 0, k = C.length; ue < k; ue++)
      q(C[ue], ue);
  }
  return Zs;
}
var Qs, _f;
function sh() {
  if (_f) return Qs;
  _f = 1, Qs = Z;
  var ce = ps.Buffer;
  Z.WritableState = oe;
  var V = ac();
  V.inherits = Pu();
  var F = rs;
  V.inherits(Z, F);
  function ee(Re, j, Ae) {
    this.chunk = Re, this.encoding = j, this.callback = Ae;
  }
  function oe(Re, j) {
    Re = Re || {};
    var Ae = Re.highWaterMark;
    this.highWaterMark = Ae || Ae === 0 ? Ae : 16 * 1024, this.objectMode = !!Re.objectMode, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
    var Ve = Re.decodeStrings === !1;
    this.decodeStrings = !Ve, this.defaultEncoding = Re.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(it) {
      G(j, it);
    }, this.writecb = null, this.writelen = 0, this.buffer = [], this.errorEmitted = !1;
  }
  function Z(Re) {
    var j = gf();
    if (!(this instanceof Z) && !(this instanceof j))
      return new Z(Re);
    this._writableState = new oe(Re, this), this.writable = !0, F.call(this);
  }
  Z.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe. Not readable."));
  };
  function Y(Re, j, Ae) {
    var Ve = new Error("write after end");
    Re.emit("error", Ve), process.nextTick(function() {
      Ae(Ve);
    });
  }
  function C(Re, j, Ae, Ve) {
    var it = !0;
    if (!ce.isBuffer(Ae) && typeof Ae != "string" && Ae !== null && Ae !== void 0 && !j.objectMode) {
      var $e = new TypeError("Invalid non-string/buffer chunk");
      Re.emit("error", $e), process.nextTick(function() {
        Ve($e);
      }), it = !1;
    }
    return it;
  }
  Z.prototype.write = function(Re, j, Ae) {
    var Ve = this._writableState, it = !1;
    return typeof j == "function" && (Ae = j, j = null), ce.isBuffer(Re) ? j = "buffer" : j || (j = Ve.defaultEncoding), typeof Ae != "function" && (Ae = function() {
    }), Ve.ended ? Y(this, Ve, Ae) : C(this, Ve, Re, Ae) && (it = ue(this, Ve, Re, j, Ae)), it;
  };
  function q(Re, j, Ae) {
    return !Re.objectMode && Re.decodeStrings !== !1 && typeof j == "string" && (j = new ce(j, Ae)), j;
  }
  function ue(Re, j, Ae, Ve, it) {
    Ae = q(j, Ae, Ve), ce.isBuffer(Ae) && (Ve = "buffer");
    var $e = j.objectMode ? 1 : Ae.length;
    j.length += $e;
    var _t = j.length < j.highWaterMark;
    return _t || (j.needDrain = !0), j.writing ? j.buffer.push(new ee(Ae, Ve, it)) : k(Re, j, $e, Ae, Ve, it), _t;
  }
  function k(Re, j, Ae, Ve, it, $e) {
    j.writelen = Ae, j.writecb = $e, j.writing = !0, j.sync = !0, Re._write(Ve, it, j.onwrite), j.sync = !1;
  }
  function B(Re, j, Ae, Ve, it) {
    Ae ? process.nextTick(function() {
      it(Ve);
    }) : it(Ve), Re._writableState.errorEmitted = !0, Re.emit("error", Ve);
  }
  function Ie(Re) {
    Re.writing = !1, Re.writecb = null, Re.length -= Re.writelen, Re.writelen = 0;
  }
  function G(Re, j) {
    var Ae = Re._writableState, Ve = Ae.sync, it = Ae.writecb;
    if (Ie(Ae), j)
      B(Re, Ae, Ve, j, it);
    else {
      var $e = he(Re, Ae);
      !$e && !Ae.bufferProcessing && Ae.buffer.length && Et(Re, Ae), Ve ? process.nextTick(function() {
        U(Re, Ae, $e, it);
      }) : U(Re, Ae, $e, it);
    }
  }
  function U(Re, j, Ae, Ve) {
    Ae || fe(Re, j), Ve(), Ae && pe(Re, j);
  }
  function fe(Re, j) {
    j.length === 0 && j.needDrain && (j.needDrain = !1, Re.emit("drain"));
  }
  function Et(Re, j) {
    j.bufferProcessing = !0;
    for (var Ae = 0; Ae < j.buffer.length; Ae++) {
      var Ve = j.buffer[Ae], it = Ve.chunk, $e = Ve.encoding, _t = Ve.callback, N = j.objectMode ? 1 : it.length;
      if (k(Re, j, N, it, $e, _t), j.writing) {
        Ae++;
        break;
      }
    }
    j.bufferProcessing = !1, Ae < j.buffer.length ? j.buffer = j.buffer.slice(Ae) : j.buffer.length = 0;
  }
  Z.prototype._write = function(Re, j, Ae) {
    Ae(new Error("not implemented"));
  }, Z.prototype.end = function(Re, j, Ae) {
    var Ve = this._writableState;
    typeof Re == "function" ? (Ae = Re, Re = null, j = null) : typeof j == "function" && (Ae = j, j = null), typeof Re < "u" && Re !== null && this.write(Re, j), !Ve.ending && !Ve.finished && Ge(this, Ve, Ae);
  };
  function he(Re, j) {
    return j.ending && j.length === 0 && !j.finished && !j.writing;
  }
  function pe(Re, j) {
    var Ae = he(Re, j);
    return Ae && (j.finished = !0, Re.emit("finish")), Ae;
  }
  function Ge(Re, j, Ae) {
    j.ending = !0, pe(Re, j), Ae && (j.finished ? process.nextTick(Ae) : Re.once("finish", Ae)), j.ended = !0;
  }
  return Qs;
}
var Js, If;
function fh() {
  if (If) return Js;
  If = 1, Js = oe;
  var ce = gf(), V = ac();
  V.inherits = Pu(), V.inherits(oe, ce);
  function F(Y, C) {
    this.afterTransform = function(q, ue) {
      return ee(C, q, ue);
    }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null;
  }
  function ee(Y, C, q) {
    var ue = Y._transformState;
    ue.transforming = !1;
    var k = ue.writecb;
    if (!k)
      return Y.emit("error", new Error("no writecb in Transform class"));
    ue.writechunk = null, ue.writecb = null, q != null && Y.push(q), k && k(C);
    var B = Y._readableState;
    B.reading = !1, (B.needReadable || B.length < B.highWaterMark) && Y._read(B.highWaterMark);
  }
  function oe(Y) {
    if (!(this instanceof oe))
      return new oe(Y);
    ce.call(this, Y), this._transformState = new F(Y, this);
    var C = this;
    this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("finish", function() {
      typeof this._flush == "function" ? this._flush(function(q) {
        Z(C, q);
      }) : Z(C);
    });
  }
  oe.prototype.push = function(Y, C) {
    return this._transformState.needTransform = !1, ce.prototype.push.call(this, Y, C);
  }, oe.prototype._transform = function(Y, C, q) {
    throw new Error("not implemented");
  }, oe.prototype._write = function(Y, C, q) {
    var ue = this._transformState;
    if (ue.writecb = q, ue.writechunk = Y, ue.writeencoding = C, !ue.transforming) {
      var k = this._readableState;
      (ue.needTransform || k.needReadable || k.length < k.highWaterMark) && this._read(k.highWaterMark);
    }
  }, oe.prototype._read = function(Y) {
    var C = this._transformState;
    C.writechunk !== null && C.writecb && !C.transforming ? (C.transforming = !0, this._transform(C.writechunk, C.writeencoding, C.afterTransform)) : C.needTransform = !0;
  };
  function Z(Y, C) {
    if (C)
      return Y.emit("error", C);
    var q = Y._writableState;
    Y._readableState;
    var ue = Y._transformState;
    if (q.length)
      throw new Error("calling transform done when ws.length != 0");
    if (ue.transforming)
      throw new Error("calling transform done when still transforming");
    return Y.push(null);
  }
  return Js;
}
var Vs, mf;
function _h() {
  if (mf) return Vs;
  mf = 1, Vs = F;
  var ce = fh(), V = ac();
  V.inherits = Pu(), V.inherits(F, ce);
  function F(ee) {
    if (!(this instanceof F))
      return new F(ee);
    ce.call(this, ee);
  }
  return F.prototype._transform = function(ee, oe, Z) {
    Z(null, ee);
  }, Vs;
}
var Df;
function Ih() {
  return Df || (Df = 1, (function(ce, V) {
    var F = rs;
    V = ce.exports = ch(), V.Stream = F, V.Readable = V, V.Writable = sh(), V.Duplex = gf(), V.Transform = fh(), V.PassThrough = _h(), !process.browser && process.env.READABLE_STREAM === "disable" && (ce.exports = rs);
  })(Es, Es.exports)), Es.exports;
}
var Ks, Lf;
function mh() {
  if (Lf) return Ks;
  Lf = 1;
  var ce = Mh(), V = Ih().Transform, F = Pu();
  F(Y, V), Ks = Y;
  var ee = {
    lt: 60,
    gt: 62,
    slash: 47,
    dquote: 34,
    squote: 39,
    equal: 61
  }, oe = {
    endScript: ce("<\/script"),
    endStyle: ce("</style"),
    endTitle: ce("</title"),
    comment: ce("<!--"),
    endComment: ce("-->"),
    cdata: ce("<![CDATA["),
    endCdata: ce("]]>")
  }, Z = {
    TagNameState: 1,
    AttributeNameState: 2,
    BeforeAttributeValueState: 3,
    AttributeValueState: 4
  };
  function Y() {
    if (!(this instanceof Y)) return new Y();
    V.call(this), this._readableState.objectMode = !0, this.state = "text", this.tagState = null, this.quoteState = null, this.raw = null, this.buffers = [], this._last = [];
  }
  Y.prototype._transform = function(k, B, Ie) {
    var G = 0, U = 0;
    for (this._prev && (k = Buffer.concat([this._prev, k]), G = this._prev.length - 1, U = this._offset, this._prev = null, this._offset = 0); G < k.length; G++) {
      var fe = k[G];
      if (this._last.push(fe), this._last.length > 9 && this._last.shift(), this.raw) {
        var Et = this._testRaw(k, U, G);
        Et && (this.push(["text", Et[0]]), this.raw === oe.endComment || this.raw === oe.endCdata ? (this.state = "text", this.buffers = [], this.push(["close", Et[1]])) : (this.state = "open", this.buffers = [Et[1]]), this.raw = null, U = G + 1);
      } else {
        if (this.state === "text" && fe === ee.lt && G === k.length - 1)
          return this._prev = k, this._offset = U, Ie();
        if (this.state === "text" && fe === ee.lt && !ue(k[G + 1]))
          G > 0 && G - U > 0 && this.buffers.push(k.slice(U, G)), U = G, this.state = "open", this.tagState = Z.TagNameState, this._pushState("text");
        else if (this.tagState === Z.TagNameState && ue(fe))
          this.tagState = Z.AttributeNameState;
        else if (this.tagState === Z.AttributeNameState && fe === ee.equal)
          this.tagState = Z.BeforeAttributeValueState;
        else if (!(this.tagState === Z.BeforeAttributeValueState && ue(fe))) if (this.tagState === Z.BeforeAttributeValueState && fe !== ee.gt)
          this.tagState = Z.AttributeValueState, fe === ee.dquote ? this.quoteState = "double" : fe === ee.squote ? this.quoteState = "single" : this.quoteState = null;
        else if (this.tagState === Z.AttributeValueState && !this.quoteState && ue(fe))
          this.tagState = Z.AttributeNameState;
        else if (this.tagState === Z.AttributeValueState && this.quoteState === "double" && fe === ee.dquote)
          this.quoteState = null, this.tagState = Z.AttributeNameState;
        else if (this.tagState === Z.AttributeValueState && this.quoteState === "single" && fe === ee.squote)
          this.quoteState = null, this.tagState = Z.AttributeNameState;
        else if (this.state === "open" && fe === ee.gt && !this.quoteState)
          if (this.buffers.push(k.slice(U, G + 1)), U = G + 1, this.state = "text", this.tagState = null, this._getChar(1) === ee.slash)
            this._pushState("close");
          else {
            var he = this._getTag();
            he === "script" && (this.raw = oe.endScript), he === "style" && (this.raw = oe.endStyle), he === "title" && (this.raw = oe.endTitle), this._pushState("open");
          }
        else this.state === "open" && C(this._last, oe.comment) ? (this.buffers.push(k.slice(U, G + 1)), U = G + 1, this.state = "text", this.raw = oe.endComment, this._pushState("open")) : this.state === "open" && C(this._last, oe.cdata) && (this.buffers.push(k.slice(U, G + 1)), U = G + 1, this.state = "text", this.raw = oe.endCdata, this._pushState("open"));
      }
    }
    U < k.length && this.buffers.push(k.slice(U)), Ie();
  }, Y.prototype._flush = function(k) {
    this.state === "text" && this._pushState("text"), this.push(null), k();
  }, Y.prototype._pushState = function(k) {
    if (this.buffers.length !== 0) {
      var B = Buffer.concat(this.buffers);
      this.buffers = [], this.push([k, B]);
    }
  }, Y.prototype._getChar = function(k) {
    for (var B = 0, Ie = 0; Ie < this.buffers.length; Ie++) {
      var G = this.buffers[Ie];
      if (B + G.length > k)
        return G[k - B];
      B += G;
    }
  }, Y.prototype._getTag = function() {
    for (var k = 0, B = "", Ie = 0; Ie < this.buffers.length; Ie++) {
      for (var G = this.buffers[Ie], U = 0; U < G.length; U++)
        if (!(k === 0 && U === 0)) {
          var fe = String.fromCharCode(G[U]);
          if (/[^\w-!\[\]]/.test(fe))
            return B.toLowerCase();
          B += fe;
        }
      k += G.length;
    }
  }, Y.prototype._testRaw = function(fe, B, Ie) {
    var G = this.raw, U = this._last;
    if (C(U, G)) {
      this.buffers.push(fe.slice(B, Ie + 1));
      var fe = Buffer.concat(this.buffers), Et = fe.length - G.length;
      return [fe.slice(0, Et), fe.slice(Et)];
    }
  };
  function C(k, B) {
    if (k.length < B.length) return !1;
    for (var Ie = k.length - 1, G = B.length - 1; Ie >= 0 && G >= 0; Ie--, G--)
      if (q(k[Ie]) !== q(B[G])) return !1;
    return !0;
  }
  function q(k) {
    return k >= 65 && k <= 90 ? k + 32 : k;
  }
  function ue(k) {
    return k === 32 || k === 9 || k === 10 || k === 12 || k === 13;
  }
  return Ks;
}
var Dh = mh();
const Lh = /* @__PURE__ */ hf(Dh);
var Cs = { exports: {} }, Ss = { exports: {} }, Ps = { exports: {} }, Bf;
function Os() {
  if (Bf) return Ps.exports;
  Bf = 1, typeof process > "u" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0 ? Ps.exports = { nextTick: ce } : Ps.exports = process;
  function ce(V, F, ee, oe) {
    if (typeof V != "function")
      throw new TypeError('"callback" argument must be a function');
    var Z = arguments.length, Y, C;
    switch (Z) {
      case 0:
      case 1:
        return process.nextTick(V);
      case 2:
        return process.nextTick(function() {
          V.call(null, F);
        });
      case 3:
        return process.nextTick(function() {
          V.call(null, F, ee);
        });
      case 4:
        return process.nextTick(function() {
          V.call(null, F, ee, oe);
        });
      default:
        for (Y = new Array(Z - 1), C = 0; C < Y.length; )
          Y[C++] = arguments[C];
        return process.nextTick(function() {
          V.apply(null, Y);
        });
    }
  }
  return Ps.exports;
}
var qs, Wf;
function Bh() {
  if (Wf) return qs;
  Wf = 1;
  var ce = {}.toString;
  return qs = Array.isArray || function(V) {
    return ce.call(V) == "[object Array]";
  }, qs;
}
var js, Nf;
function hh() {
  return Nf || (Nf = 1, js = df.EventEmitter), js;
}
var Fs = { exports: {} }, Hf;
function _s() {
  return Hf || (Hf = 1, (function(ce, V) {
    var F = ps, ee = F.Buffer;
    function oe(Y, C) {
      for (var q in Y)
        C[q] = Y[q];
    }
    ee.from && ee.alloc && ee.allocUnsafe && ee.allocUnsafeSlow ? ce.exports = F : (oe(F, V), V.Buffer = Z);
    function Z(Y, C, q) {
      return ee(Y, C, q);
    }
    oe(ee, Z), Z.from = function(Y, C, q) {
      if (typeof Y == "number")
        throw new TypeError("Argument must not be a number");
      return ee(Y, C, q);
    }, Z.alloc = function(Y, C, q) {
      if (typeof Y != "number")
        throw new TypeError("Argument must be a number");
      var ue = ee(Y);
      return C !== void 0 ? typeof q == "string" ? ue.fill(C, q) : ue.fill(C) : ue.fill(0), ue;
    }, Z.allocUnsafe = function(Y) {
      if (typeof Y != "number")
        throw new TypeError("Argument must be a number");
      return ee(Y);
    }, Z.allocUnsafeSlow = function(Y) {
      if (typeof Y != "number")
        throw new TypeError("Argument must be a number");
      return F.SlowBuffer(Y);
    };
  })(Fs, Fs.exports)), Fs.exports;
}
var $s = { exports: {} }, zf;
function Wh() {
  return zf || (zf = 1, (function(ce) {
    function V(Z, Y) {
      if (!(Z instanceof Y))
        throw new TypeError("Cannot call a class as a function");
    }
    var F = _s().Buffer, ee = uh;
    function oe(Z, Y, C) {
      Z.copy(Y, C);
    }
    ce.exports = (function() {
      function Z() {
        V(this, Z), this.head = null, this.tail = null, this.length = 0;
      }
      return Z.prototype.push = function(C) {
        var q = { data: C, next: null };
        this.length > 0 ? this.tail.next = q : this.head = q, this.tail = q, ++this.length;
      }, Z.prototype.unshift = function(C) {
        var q = { data: C, next: this.head };
        this.length === 0 && (this.tail = q), this.head = q, ++this.length;
      }, Z.prototype.shift = function() {
        if (this.length !== 0) {
          var C = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, C;
        }
      }, Z.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, Z.prototype.join = function(C) {
        if (this.length === 0) return "";
        for (var q = this.head, ue = "" + q.data; q = q.next; )
          ue += C + q.data;
        return ue;
      }, Z.prototype.concat = function(C) {
        if (this.length === 0) return F.alloc(0);
        for (var q = F.allocUnsafe(C >>> 0), ue = this.head, k = 0; ue; )
          oe(ue.data, q, k), k += ue.data.length, ue = ue.next;
        return q;
      }, Z;
    })(), ee && ee.inspect && ee.inspect.custom && (ce.exports.prototype[ee.inspect.custom] = function() {
      var Z = ee.inspect({ length: this.length });
      return this.constructor.name + " " + Z;
    });
  })($s)), $s.exports;
}
var ef, Uf;
function dh() {
  if (Uf) return ef;
  Uf = 1;
  var ce = Os();
  function V(oe, Z) {
    var Y = this, C = this._readableState && this._readableState.destroyed, q = this._writableState && this._writableState.destroyed;
    return C || q ? (Z ? Z(oe) : oe && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, ce.nextTick(ee, this, oe)) : ce.nextTick(ee, this, oe)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(oe || null, function(ue) {
      !Z && ue ? Y._writableState ? Y._writableState.errorEmitted || (Y._writableState.errorEmitted = !0, ce.nextTick(ee, Y, ue)) : ce.nextTick(ee, Y, ue) : Z && Z(ue);
    }), this);
  }
  function F() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }
  function ee(oe, Z) {
    oe.emit("error", Z);
  }
  return ef = {
    destroy: V,
    undestroy: F
  }, ef;
}
var tf, Yf;
function Nh() {
  if (Yf) return tf;
  Yf = 1, tf = ce;
  function ce(F, ee) {
    if (V("noDeprecation"))
      return F;
    var oe = !1;
    function Z() {
      if (!oe) {
        if (V("throwDeprecation"))
          throw new Error(ee);
        V("traceDeprecation") ? console.trace(ee) : console.warn(ee), oe = !0;
      }
      return F.apply(this, arguments);
    }
    return Z;
  }
  function V(F) {
    try {
      if (!ls.localStorage) return !1;
    } catch {
      return !1;
    }
    var ee = ls.localStorage[F];
    return ee == null ? !1 : String(ee).toLowerCase() === "true";
  }
  return tf;
}
var nf, Gf;
function gh() {
  if (Gf) return nf;
  Gf = 1;
  var ce = Os();
  nf = fe;
  function V(P) {
    var $ = this;
    this.next = null, this.entry = null, this.finish = function() {
      ae($, P);
    };
  }
  var F = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : ce.nextTick, ee;
  fe.WritableState = G;
  var oe = Object.create(ac());
  oe.inherits = Pu();
  var Z = {
    deprecate: Nh()
  }, Y = hh(), C = _s().Buffer, q = (typeof ls < "u" ? ls : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function ue(P) {
    return C.from(P);
  }
  function k(P) {
    return C.isBuffer(P) || P instanceof q;
  }
  var B = dh();
  oe.inherits(fe, Y);
  function Ie() {
  }
  function G(P, $) {
    ee = ee || os(), P = P || {};
    var le = $ instanceof ee;
    this.objectMode = !!P.objectMode, le && (this.objectMode = this.objectMode || !!P.writableObjectMode);
    var te = P.highWaterMark, Q = P.writableHighWaterMark, nt = this.objectMode ? 16 : 16 * 1024;
    te || te === 0 ? this.highWaterMark = te : le && (Q || Q === 0) ? this.highWaterMark = Q : this.highWaterMark = nt, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var pt = P.decodeStrings === !1;
    this.decodeStrings = !pt, this.defaultEncoding = P.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(Qe) {
      Ve($, Qe);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new V(this);
  }
  G.prototype.getBuffer = function() {
    for (var $ = this.bufferedRequest, le = []; $; )
      le.push($), $ = $.next;
    return le;
  }, (function() {
    try {
      Object.defineProperty(G.prototype, "buffer", {
        get: Z.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  })();
  var U;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (U = Function.prototype[Symbol.hasInstance], Object.defineProperty(fe, Symbol.hasInstance, {
    value: function(P) {
      return U.call(this, P) ? !0 : this !== fe ? !1 : P && P._writableState instanceof G;
    }
  })) : U = function(P) {
    return P instanceof this;
  };
  function fe(P) {
    if (ee = ee || os(), !U.call(fe, this) && !(this instanceof ee))
      return new fe(P);
    this._writableState = new G(P, this), this.writable = !0, P && (typeof P.write == "function" && (this._write = P.write), typeof P.writev == "function" && (this._writev = P.writev), typeof P.destroy == "function" && (this._destroy = P.destroy), typeof P.final == "function" && (this._final = P.final)), Y.call(this);
  }
  fe.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function Et(P, $) {
    var le = new Error("write after end");
    P.emit("error", le), ce.nextTick($, le);
  }
  function he(P, $, le, te) {
    var Q = !0, nt = !1;
    return le === null ? nt = new TypeError("May not write null values to stream") : typeof le != "string" && le !== void 0 && !$.objectMode && (nt = new TypeError("Invalid non-string/buffer chunk")), nt && (P.emit("error", nt), ce.nextTick(te, nt), Q = !1), Q;
  }
  fe.prototype.write = function(P, $, le) {
    var te = this._writableState, Q = !1, nt = !te.objectMode && k(P);
    return nt && !C.isBuffer(P) && (P = ue(P)), typeof $ == "function" && (le = $, $ = null), nt ? $ = "buffer" : $ || ($ = te.defaultEncoding), typeof le != "function" && (le = Ie), te.ended ? Et(this, le) : (nt || he(this, te, P, le)) && (te.pendingcb++, Q = Ge(this, te, nt, P, $, le)), Q;
  }, fe.prototype.cork = function() {
    var P = this._writableState;
    P.corked++;
  }, fe.prototype.uncork = function() {
    var P = this._writableState;
    P.corked && (P.corked--, !P.writing && !P.corked && !P.bufferProcessing && P.bufferedRequest && _t(this, P));
  }, fe.prototype.setDefaultEncoding = function($) {
    if (typeof $ == "string" && ($ = $.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf(($ + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + $);
    return this._writableState.defaultEncoding = $, this;
  };
  function pe(P, $, le) {
    return !P.objectMode && P.decodeStrings !== !1 && typeof $ == "string" && ($ = C.from($, le)), $;
  }
  Object.defineProperty(fe.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function Ge(P, $, le, te, Q, nt) {
    if (!le) {
      var pt = pe($, te, Q);
      te !== pt && (le = !0, Q = "buffer", te = pt);
    }
    var Qe = $.objectMode ? 1 : te.length;
    $.length += Qe;
    var dt = $.length < $.highWaterMark;
    if (dt || ($.needDrain = !0), $.writing || $.corked) {
      var It = $.lastBufferedRequest;
      $.lastBufferedRequest = {
        chunk: te,
        encoding: Q,
        isBuf: le,
        callback: nt,
        next: null
      }, It ? It.next = $.lastBufferedRequest : $.bufferedRequest = $.lastBufferedRequest, $.bufferedRequestCount += 1;
    } else
      Re(P, $, !1, Qe, te, Q, nt);
    return dt;
  }
  function Re(P, $, le, te, Q, nt, pt) {
    $.writelen = te, $.writecb = pt, $.writing = !0, $.sync = !0, le ? P._writev(Q, $.onwrite) : P._write(Q, nt, $.onwrite), $.sync = !1;
  }
  function j(P, $, le, te, Q) {
    --$.pendingcb, le ? (ce.nextTick(Q, te), ce.nextTick(Ee, P, $), P._writableState.errorEmitted = !0, P.emit("error", te)) : (Q(te), P._writableState.errorEmitted = !0, P.emit("error", te), Ee(P, $));
  }
  function Ae(P) {
    P.writing = !1, P.writecb = null, P.length -= P.writelen, P.writelen = 0;
  }
  function Ve(P, $) {
    var le = P._writableState, te = le.sync, Q = le.writecb;
    if (Ae(le), $) j(P, le, te, $, Q);
    else {
      var nt = N(le);
      !nt && !le.corked && !le.bufferProcessing && le.bufferedRequest && _t(P, le), te ? F(it, P, le, nt, Q) : it(P, le, nt, Q);
    }
  }
  function it(P, $, le, te) {
    le || $e(P, $), $.pendingcb--, te(), Ee(P, $);
  }
  function $e(P, $) {
    $.length === 0 && $.needDrain && ($.needDrain = !1, P.emit("drain"));
  }
  function _t(P, $) {
    $.bufferProcessing = !0;
    var le = $.bufferedRequest;
    if (P._writev && le && le.next) {
      var te = $.bufferedRequestCount, Q = new Array(te), nt = $.corkedRequestsFree;
      nt.entry = le;
      for (var pt = 0, Qe = !0; le; )
        Q[pt] = le, le.isBuf || (Qe = !1), le = le.next, pt += 1;
      Q.allBuffers = Qe, Re(P, $, !0, $.length, Q, "", nt.finish), $.pendingcb++, $.lastBufferedRequest = null, nt.next ? ($.corkedRequestsFree = nt.next, nt.next = null) : $.corkedRequestsFree = new V($), $.bufferedRequestCount = 0;
    } else {
      for (; le; ) {
        var dt = le.chunk, It = le.encoding, S = le.callback, M = $.objectMode ? 1 : dt.length;
        if (Re(P, $, !1, M, dt, It, S), le = le.next, $.bufferedRequestCount--, $.writing)
          break;
      }
      le === null && ($.lastBufferedRequest = null);
    }
    $.bufferedRequest = le, $.bufferProcessing = !1;
  }
  fe.prototype._write = function(P, $, le) {
    le(new Error("_write() is not implemented"));
  }, fe.prototype._writev = null, fe.prototype.end = function(P, $, le) {
    var te = this._writableState;
    typeof P == "function" ? (le = P, P = null, $ = null) : typeof $ == "function" && (le = $, $ = null), P != null && this.write(P, $), te.corked && (te.corked = 1, this.uncork()), te.ending || Ze(this, te, le);
  };
  function N(P) {
    return P.ending && P.length === 0 && P.bufferedRequest === null && !P.finished && !P.writing;
  }
  function H(P, $) {
    P._final(function(le) {
      $.pendingcb--, le && P.emit("error", le), $.prefinished = !0, P.emit("prefinish"), Ee(P, $);
    });
  }
  function se(P, $) {
    !$.prefinished && !$.finalCalled && (typeof P._final == "function" ? ($.pendingcb++, $.finalCalled = !0, ce.nextTick(H, P, $)) : ($.prefinished = !0, P.emit("prefinish")));
  }
  function Ee(P, $) {
    var le = N($);
    return le && (se(P, $), $.pendingcb === 0 && ($.finished = !0, P.emit("finish"))), le;
  }
  function Ze(P, $, le) {
    $.ending = !0, Ee(P, $), le && ($.finished ? ce.nextTick(le) : P.once("finish", le)), $.ended = !0, P.writable = !1;
  }
  function ae(P, $, le) {
    var te = P.entry;
    for (P.entry = null; te; ) {
      var Q = te.callback;
      $.pendingcb--, Q(le), te = te.next;
    }
    $.corkedRequestsFree.next = P;
  }
  return Object.defineProperty(fe.prototype, "destroyed", {
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(P) {
      this._writableState && (this._writableState.destroyed = P);
    }
  }), fe.prototype.destroy = B.destroy, fe.prototype._undestroy = B.undestroy, fe.prototype._destroy = function(P, $) {
    this.end(), $(P);
  }, nf;
}
var rf, Xf;
function os() {
  if (Xf) return rf;
  Xf = 1;
  var ce = Os(), V = Object.keys || function(B) {
    var Ie = [];
    for (var G in B)
      Ie.push(G);
    return Ie;
  };
  rf = q;
  var F = Object.create(ac());
  F.inherits = Pu();
  var ee = vh(), oe = gh();
  F.inherits(q, ee);
  for (var Z = V(oe.prototype), Y = 0; Y < Z.length; Y++) {
    var C = Z[Y];
    q.prototype[C] || (q.prototype[C] = oe.prototype[C]);
  }
  function q(B) {
    if (!(this instanceof q)) return new q(B);
    ee.call(this, B), oe.call(this, B), B && B.readable === !1 && (this.readable = !1), B && B.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, B && B.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", ue);
  }
  Object.defineProperty(q.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function ue() {
    this.allowHalfOpen || this._writableState.ended || ce.nextTick(k, this);
  }
  function k(B) {
    B.end();
  }
  return Object.defineProperty(q.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(B) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = B, this._writableState.destroyed = B);
    }
  }), q.prototype._destroy = function(B, Ie) {
    this.push(null), this.end(), ce.nextTick(Ie, B);
  }, rf;
}
var af = {}, Zf;
function Qf() {
  if (Zf) return af;
  Zf = 1;
  var ce = _s().Buffer, V = ce.isEncoding || function(he) {
    switch (he = "" + he, he && he.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function F(he) {
    if (!he) return "utf8";
    for (var pe; ; )
      switch (he) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return he;
        default:
          if (pe) return;
          he = ("" + he).toLowerCase(), pe = !0;
      }
  }
  function ee(he) {
    var pe = F(he);
    if (typeof pe != "string" && (ce.isEncoding === V || !V(he))) throw new Error("Unknown encoding: " + he);
    return pe || he;
  }
  af.StringDecoder = oe;
  function oe(he) {
    this.encoding = ee(he);
    var pe;
    switch (this.encoding) {
      case "utf16le":
        this.text = B, this.end = Ie, pe = 4;
        break;
      case "utf8":
        this.fillLast = q, pe = 4;
        break;
      case "base64":
        this.text = G, this.end = U, pe = 3;
        break;
      default:
        this.write = fe, this.end = Et;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = ce.allocUnsafe(pe);
  }
  oe.prototype.write = function(he) {
    if (he.length === 0) return "";
    var pe, Ge;
    if (this.lastNeed) {
      if (pe = this.fillLast(he), pe === void 0) return "";
      Ge = this.lastNeed, this.lastNeed = 0;
    } else
      Ge = 0;
    return Ge < he.length ? pe ? pe + this.text(he, Ge) : this.text(he, Ge) : pe || "";
  }, oe.prototype.end = k, oe.prototype.text = ue, oe.prototype.fillLast = function(he) {
    if (this.lastNeed <= he.length)
      return he.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    he.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, he.length), this.lastNeed -= he.length;
  };
  function Z(he) {
    return he <= 127 ? 0 : he >> 5 === 6 ? 2 : he >> 4 === 14 ? 3 : he >> 3 === 30 ? 4 : he >> 6 === 2 ? -1 : -2;
  }
  function Y(he, pe, Ge) {
    var Re = pe.length - 1;
    if (Re < Ge) return 0;
    var j = Z(pe[Re]);
    return j >= 0 ? (j > 0 && (he.lastNeed = j - 1), j) : --Re < Ge || j === -2 ? 0 : (j = Z(pe[Re]), j >= 0 ? (j > 0 && (he.lastNeed = j - 2), j) : --Re < Ge || j === -2 ? 0 : (j = Z(pe[Re]), j >= 0 ? (j > 0 && (j === 2 ? j = 0 : he.lastNeed = j - 3), j) : 0));
  }
  function C(he, pe, Ge) {
    if ((pe[0] & 192) !== 128)
      return he.lastNeed = 0, "�";
    if (he.lastNeed > 1 && pe.length > 1) {
      if ((pe[1] & 192) !== 128)
        return he.lastNeed = 1, "�";
      if (he.lastNeed > 2 && pe.length > 2 && (pe[2] & 192) !== 128)
        return he.lastNeed = 2, "�";
    }
  }
  function q(he) {
    var pe = this.lastTotal - this.lastNeed, Ge = C(this, he);
    if (Ge !== void 0) return Ge;
    if (this.lastNeed <= he.length)
      return he.copy(this.lastChar, pe, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    he.copy(this.lastChar, pe, 0, he.length), this.lastNeed -= he.length;
  }
  function ue(he, pe) {
    var Ge = Y(this, he, pe);
    if (!this.lastNeed) return he.toString("utf8", pe);
    this.lastTotal = Ge;
    var Re = he.length - (Ge - this.lastNeed);
    return he.copy(this.lastChar, 0, Re), he.toString("utf8", pe, Re);
  }
  function k(he) {
    var pe = he && he.length ? this.write(he) : "";
    return this.lastNeed ? pe + "�" : pe;
  }
  function B(he, pe) {
    if ((he.length - pe) % 2 === 0) {
      var Ge = he.toString("utf16le", pe);
      if (Ge) {
        var Re = Ge.charCodeAt(Ge.length - 1);
        if (Re >= 55296 && Re <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = he[he.length - 2], this.lastChar[1] = he[he.length - 1], Ge.slice(0, -1);
      }
      return Ge;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = he[he.length - 1], he.toString("utf16le", pe, he.length - 1);
  }
  function Ie(he) {
    var pe = he && he.length ? this.write(he) : "";
    if (this.lastNeed) {
      var Ge = this.lastTotal - this.lastNeed;
      return pe + this.lastChar.toString("utf16le", 0, Ge);
    }
    return pe;
  }
  function G(he, pe) {
    var Ge = (he.length - pe) % 3;
    return Ge === 0 ? he.toString("base64", pe) : (this.lastNeed = 3 - Ge, this.lastTotal = 3, Ge === 1 ? this.lastChar[0] = he[he.length - 1] : (this.lastChar[0] = he[he.length - 2], this.lastChar[1] = he[he.length - 1]), he.toString("base64", pe, he.length - Ge));
  }
  function U(he) {
    var pe = he && he.length ? this.write(he) : "";
    return this.lastNeed ? pe + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : pe;
  }
  function fe(he) {
    return he.toString(this.encoding);
  }
  function Et(he) {
    return he && he.length ? this.write(he) : "";
  }
  return af;
}
var lf, Jf;
function vh() {
  if (Jf) return lf;
  Jf = 1;
  var ce = Os();
  lf = pe;
  var V = Bh(), F;
  pe.ReadableState = he, df.EventEmitter;
  var ee = function(S, M) {
    return S.listeners(M).length;
  }, oe = hh(), Z = _s().Buffer, Y = (typeof ls < "u" ? ls : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function C(S) {
    return Z.from(S);
  }
  function q(S) {
    return Z.isBuffer(S) || S instanceof Y;
  }
  var ue = Object.create(ac());
  ue.inherits = Pu();
  var k = uh, B = void 0;
  k && k.debuglog ? B = k.debuglog("stream") : B = function() {
  };
  var Ie = Wh(), G = dh(), U;
  ue.inherits(pe, oe);
  var fe = ["error", "close", "destroy", "pause", "resume"];
  function Et(S, M, Se) {
    if (typeof S.prependListener == "function") return S.prependListener(M, Se);
    !S._events || !S._events[M] ? S.on(M, Se) : V(S._events[M]) ? S._events[M].unshift(Se) : S._events[M] = [Se, S._events[M]];
  }
  function he(S, M) {
    F = F || os(), S = S || {};
    var Se = M instanceof F;
    this.objectMode = !!S.objectMode, Se && (this.objectMode = this.objectMode || !!S.readableObjectMode);
    var we = S.highWaterMark, me = S.readableHighWaterMark, Me = this.objectMode ? 16 : 16 * 1024;
    we || we === 0 ? this.highWaterMark = we : Se && (me || me === 0) ? this.highWaterMark = me : this.highWaterMark = Me, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new Ie(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = S.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, S.encoding && (U || (U = Qf().StringDecoder), this.decoder = new U(S.encoding), this.encoding = S.encoding);
  }
  function pe(S) {
    if (F = F || os(), !(this instanceof pe)) return new pe(S);
    this._readableState = new he(S, this), this.readable = !0, S && (typeof S.read == "function" && (this._read = S.read), typeof S.destroy == "function" && (this._destroy = S.destroy)), oe.call(this);
  }
  Object.defineProperty(pe.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(S) {
      this._readableState && (this._readableState.destroyed = S);
    }
  }), pe.prototype.destroy = G.destroy, pe.prototype._undestroy = G.undestroy, pe.prototype._destroy = function(S, M) {
    this.push(null), M(S);
  }, pe.prototype.push = function(S, M) {
    var Se = this._readableState, we;
    return Se.objectMode ? we = !0 : typeof S == "string" && (M = M || Se.defaultEncoding, M !== Se.encoding && (S = Z.from(S, M), M = ""), we = !0), Ge(this, S, M, !1, we);
  }, pe.prototype.unshift = function(S) {
    return Ge(this, S, null, !0, !1);
  };
  function Ge(S, M, Se, we, me) {
    var Me = S._readableState;
    if (M === null)
      Me.reading = !1, _t(S, Me);
    else {
      var ot;
      me || (ot = j(Me, M)), ot ? S.emit("error", ot) : Me.objectMode || M && M.length > 0 ? (typeof M != "string" && !Me.objectMode && Object.getPrototypeOf(M) !== Z.prototype && (M = C(M)), we ? Me.endEmitted ? S.emit("error", new Error("stream.unshift() after end event")) : Re(S, Me, M, !0) : Me.ended ? S.emit("error", new Error("stream.push() after EOF")) : (Me.reading = !1, Me.decoder && !Se ? (M = Me.decoder.write(M), Me.objectMode || M.length !== 0 ? Re(S, Me, M, !1) : se(S, Me)) : Re(S, Me, M, !1))) : we || (Me.reading = !1);
    }
    return Ae(Me);
  }
  function Re(S, M, Se, we) {
    M.flowing && M.length === 0 && !M.sync ? (S.emit("data", Se), S.read(0)) : (M.length += M.objectMode ? 1 : Se.length, we ? M.buffer.unshift(Se) : M.buffer.push(Se), M.needReadable && N(S)), se(S, M);
  }
  function j(S, M) {
    var Se;
    return !q(M) && typeof M != "string" && M !== void 0 && !S.objectMode && (Se = new TypeError("Invalid non-string/buffer chunk")), Se;
  }
  function Ae(S) {
    return !S.ended && (S.needReadable || S.length < S.highWaterMark || S.length === 0);
  }
  pe.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, pe.prototype.setEncoding = function(S) {
    return U || (U = Qf().StringDecoder), this._readableState.decoder = new U(S), this._readableState.encoding = S, this;
  };
  var Ve = 8388608;
  function it(S) {
    return S >= Ve ? S = Ve : (S--, S |= S >>> 1, S |= S >>> 2, S |= S >>> 4, S |= S >>> 8, S |= S >>> 16, S++), S;
  }
  function $e(S, M) {
    return S <= 0 || M.length === 0 && M.ended ? 0 : M.objectMode ? 1 : S !== S ? M.flowing && M.length ? M.buffer.head.data.length : M.length : (S > M.highWaterMark && (M.highWaterMark = it(S)), S <= M.length ? S : M.ended ? M.length : (M.needReadable = !0, 0));
  }
  pe.prototype.read = function(S) {
    B("read", S), S = parseInt(S, 10);
    var M = this._readableState, Se = S;
    if (S !== 0 && (M.emittedReadable = !1), S === 0 && M.needReadable && (M.length >= M.highWaterMark || M.ended))
      return B("read: emitReadable", M.length, M.ended), M.length === 0 && M.ended ? Qe(this) : N(this), null;
    if (S = $e(S, M), S === 0 && M.ended)
      return M.length === 0 && Qe(this), null;
    var we = M.needReadable;
    B("need readable", we), (M.length === 0 || M.length - S < M.highWaterMark) && (we = !0, B("length less than watermark", we)), M.ended || M.reading ? (we = !1, B("reading or ended", we)) : we && (B("do read"), M.reading = !0, M.sync = !0, M.length === 0 && (M.needReadable = !0), this._read(M.highWaterMark), M.sync = !1, M.reading || (S = $e(Se, M)));
    var me;
    return S > 0 ? me = te(S, M) : me = null, me === null ? (M.needReadable = !0, S = 0) : M.length -= S, M.length === 0 && (M.ended || (M.needReadable = !0), Se !== S && M.ended && Qe(this)), me !== null && this.emit("data", me), me;
  };
  function _t(S, M) {
    if (!M.ended) {
      if (M.decoder) {
        var Se = M.decoder.end();
        Se && Se.length && (M.buffer.push(Se), M.length += M.objectMode ? 1 : Se.length);
      }
      M.ended = !0, N(S);
    }
  }
  function N(S) {
    var M = S._readableState;
    M.needReadable = !1, M.emittedReadable || (B("emitReadable", M.flowing), M.emittedReadable = !0, M.sync ? ce.nextTick(H, S) : H(S));
  }
  function H(S) {
    B("emit readable"), S.emit("readable"), le(S);
  }
  function se(S, M) {
    M.readingMore || (M.readingMore = !0, ce.nextTick(Ee, S, M));
  }
  function Ee(S, M) {
    for (var Se = M.length; !M.reading && !M.flowing && !M.ended && M.length < M.highWaterMark && (B("maybeReadMore read 0"), S.read(0), Se !== M.length); )
      Se = M.length;
    M.readingMore = !1;
  }
  pe.prototype._read = function(S) {
    this.emit("error", new Error("_read() is not implemented"));
  }, pe.prototype.pipe = function(S, M) {
    var Se = this, we = this._readableState;
    switch (we.pipesCount) {
      case 0:
        we.pipes = S;
        break;
      case 1:
        we.pipes = [we.pipes, S];
        break;
      default:
        we.pipes.push(S);
        break;
    }
    we.pipesCount += 1, B("pipe count=%d opts=%j", we.pipesCount, M);
    var me = (!M || M.end !== !1) && S !== process.stdout && S !== process.stderr, Me = me ? ua : bn;
    we.endEmitted ? ce.nextTick(Me) : Se.once("end", Me), S.on("unpipe", ot);
    function ot(wr, Sn) {
      B("onunpipe"), wr === Se && Sn && Sn.hasUnpiped === !1 && (Sn.hasUnpiped = !0, yr());
    }
    function ua() {
      B("onend"), S.end();
    }
    var nn = Ze(Se);
    S.on("drain", nn);
    var Yt = !1;
    function yr() {
      B("cleanup"), S.removeListener("close", Qt), S.removeListener("finish", et), S.removeListener("drain", nn), S.removeListener("error", Cn), S.removeListener("unpipe", ot), Se.removeListener("end", ua), Se.removeListener("end", bn), Se.removeListener("data", Ia), Yt = !0, we.awaitDrain && (!S._writableState || S._writableState.needDrain) && nn();
    }
    var ca = !1;
    Se.on("data", Ia);
    function Ia(wr) {
      B("ondata"), ca = !1;
      var Sn = S.write(wr);
      Sn === !1 && !ca && ((we.pipesCount === 1 && we.pipes === S || we.pipesCount > 1 && It(we.pipes, S) !== -1) && !Yt && (B("false write response, pause", we.awaitDrain), we.awaitDrain++, ca = !0), Se.pause());
    }
    function Cn(wr) {
      B("onerror", wr), bn(), S.removeListener("error", Cn), ee(S, "error") === 0 && S.emit("error", wr);
    }
    Et(S, "error", Cn);
    function Qt() {
      S.removeListener("finish", et), bn();
    }
    S.once("close", Qt);
    function et() {
      B("onfinish"), S.removeListener("close", Qt), bn();
    }
    S.once("finish", et);
    function bn() {
      B("unpipe"), Se.unpipe(S);
    }
    return S.emit("pipe", Se), we.flowing || (B("pipe resume"), Se.resume()), S;
  };
  function Ze(S) {
    return function() {
      var M = S._readableState;
      B("pipeOnDrain", M.awaitDrain), M.awaitDrain && M.awaitDrain--, M.awaitDrain === 0 && ee(S, "data") && (M.flowing = !0, le(S));
    };
  }
  pe.prototype.unpipe = function(S) {
    var M = this._readableState, Se = { hasUnpiped: !1 };
    if (M.pipesCount === 0) return this;
    if (M.pipesCount === 1)
      return S && S !== M.pipes ? this : (S || (S = M.pipes), M.pipes = null, M.pipesCount = 0, M.flowing = !1, S && S.emit("unpipe", this, Se), this);
    if (!S) {
      var we = M.pipes, me = M.pipesCount;
      M.pipes = null, M.pipesCount = 0, M.flowing = !1;
      for (var Me = 0; Me < me; Me++)
        we[Me].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var ot = It(M.pipes, S);
    return ot === -1 ? this : (M.pipes.splice(ot, 1), M.pipesCount -= 1, M.pipesCount === 1 && (M.pipes = M.pipes[0]), S.emit("unpipe", this, Se), this);
  }, pe.prototype.on = function(S, M) {
    var Se = oe.prototype.on.call(this, S, M);
    if (S === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (S === "readable") {
      var we = this._readableState;
      !we.endEmitted && !we.readableListening && (we.readableListening = we.needReadable = !0, we.emittedReadable = !1, we.reading ? we.length && N(this) : ce.nextTick(ae, this));
    }
    return Se;
  }, pe.prototype.addListener = pe.prototype.on;
  function ae(S) {
    B("readable nexttick read 0"), S.read(0);
  }
  pe.prototype.resume = function() {
    var S = this._readableState;
    return S.flowing || (B("resume"), S.flowing = !0, P(this, S)), this;
  };
  function P(S, M) {
    M.resumeScheduled || (M.resumeScheduled = !0, ce.nextTick($, S, M));
  }
  function $(S, M) {
    M.reading || (B("resume read 0"), S.read(0)), M.resumeScheduled = !1, M.awaitDrain = 0, S.emit("resume"), le(S), M.flowing && !M.reading && S.read(0);
  }
  pe.prototype.pause = function() {
    return B("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (B("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
  };
  function le(S) {
    var M = S._readableState;
    for (B("flow", M.flowing); M.flowing && S.read() !== null; )
      ;
  }
  pe.prototype.wrap = function(S) {
    var M = this, Se = this._readableState, we = !1;
    S.on("end", function() {
      if (B("wrapped end"), Se.decoder && !Se.ended) {
        var ot = Se.decoder.end();
        ot && ot.length && M.push(ot);
      }
      M.push(null);
    }), S.on("data", function(ot) {
      if (B("wrapped data"), Se.decoder && (ot = Se.decoder.write(ot)), !(Se.objectMode && ot == null) && !(!Se.objectMode && (!ot || !ot.length))) {
        var ua = M.push(ot);
        ua || (we = !0, S.pause());
      }
    });
    for (var me in S)
      this[me] === void 0 && typeof S[me] == "function" && (this[me] = /* @__PURE__ */ (function(ot) {
        return function() {
          return S[ot].apply(S, arguments);
        };
      })(me));
    for (var Me = 0; Me < fe.length; Me++)
      S.on(fe[Me], this.emit.bind(this, fe[Me]));
    return this._read = function(ot) {
      B("wrapped _read", ot), we && (we = !1, S.resume());
    }, this;
  }, Object.defineProperty(pe.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), pe._fromList = te;
  function te(S, M) {
    if (M.length === 0) return null;
    var Se;
    return M.objectMode ? Se = M.buffer.shift() : !S || S >= M.length ? (M.decoder ? Se = M.buffer.join("") : M.buffer.length === 1 ? Se = M.buffer.head.data : Se = M.buffer.concat(M.length), M.buffer.clear()) : Se = Q(S, M.buffer, M.decoder), Se;
  }
  function Q(S, M, Se) {
    var we;
    return S < M.head.data.length ? (we = M.head.data.slice(0, S), M.head.data = M.head.data.slice(S)) : S === M.head.data.length ? we = M.shift() : we = Se ? nt(S, M) : pt(S, M), we;
  }
  function nt(S, M) {
    var Se = M.head, we = 1, me = Se.data;
    for (S -= me.length; Se = Se.next; ) {
      var Me = Se.data, ot = S > Me.length ? Me.length : S;
      if (ot === Me.length ? me += Me : me += Me.slice(0, S), S -= ot, S === 0) {
        ot === Me.length ? (++we, Se.next ? M.head = Se.next : M.head = M.tail = null) : (M.head = Se, Se.data = Me.slice(ot));
        break;
      }
      ++we;
    }
    return M.length -= we, me;
  }
  function pt(S, M) {
    var Se = Z.allocUnsafe(S), we = M.head, me = 1;
    for (we.data.copy(Se), S -= we.data.length; we = we.next; ) {
      var Me = we.data, ot = S > Me.length ? Me.length : S;
      if (Me.copy(Se, Se.length - S, 0, ot), S -= ot, S === 0) {
        ot === Me.length ? (++me, we.next ? M.head = we.next : M.head = M.tail = null) : (M.head = we, we.data = Me.slice(ot));
        break;
      }
      ++me;
    }
    return M.length -= me, Se;
  }
  function Qe(S) {
    var M = S._readableState;
    if (M.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    M.endEmitted || (M.ended = !0, ce.nextTick(dt, M, S));
  }
  function dt(S, M) {
    !S.endEmitted && S.length === 0 && (S.endEmitted = !0, M.readable = !1, M.emit("end"));
  }
  function It(S, M) {
    for (var Se = 0, we = S.length; Se < we; Se++)
      if (S[Se] === M) return Se;
    return -1;
  }
  return lf;
}
var of, Vf;
function bh() {
  if (Vf) return of;
  Vf = 1, of = ee;
  var ce = os(), V = Object.create(ac());
  V.inherits = Pu(), V.inherits(ee, ce);
  function F(Y, C) {
    var q = this._transformState;
    q.transforming = !1;
    var ue = q.writecb;
    if (!ue)
      return this.emit("error", new Error("write callback called multiple times"));
    q.writechunk = null, q.writecb = null, C != null && this.push(C), ue(Y);
    var k = this._readableState;
    k.reading = !1, (k.needReadable || k.length < k.highWaterMark) && this._read(k.highWaterMark);
  }
  function ee(Y) {
    if (!(this instanceof ee)) return new ee(Y);
    ce.call(this, Y), this._transformState = {
      afterTransform: F.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, Y && (typeof Y.transform == "function" && (this._transform = Y.transform), typeof Y.flush == "function" && (this._flush = Y.flush)), this.on("prefinish", oe);
  }
  function oe() {
    var Y = this;
    typeof this._flush == "function" ? this._flush(function(C, q) {
      Z(Y, C, q);
    }) : Z(this, null, null);
  }
  ee.prototype.push = function(Y, C) {
    return this._transformState.needTransform = !1, ce.prototype.push.call(this, Y, C);
  }, ee.prototype._transform = function(Y, C, q) {
    throw new Error("_transform() is not implemented");
  }, ee.prototype._write = function(Y, C, q) {
    var ue = this._transformState;
    if (ue.writecb = q, ue.writechunk = Y, ue.writeencoding = C, !ue.transforming) {
      var k = this._readableState;
      (ue.needTransform || k.needReadable || k.length < k.highWaterMark) && this._read(k.highWaterMark);
    }
  }, ee.prototype._read = function(Y) {
    var C = this._transformState;
    C.writechunk !== null && C.writecb && !C.transforming ? (C.transforming = !0, this._transform(C.writechunk, C.writeencoding, C.afterTransform)) : C.needTransform = !0;
  }, ee.prototype._destroy = function(Y, C) {
    var q = this;
    ce.prototype._destroy.call(this, Y, function(ue) {
      C(ue), q.emit("close");
    });
  };
  function Z(Y, C, q) {
    if (C) return Y.emit("error", C);
    if (q != null && Y.push(q), Y._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (Y._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return Y.push(null);
  }
  return of;
}
var uf, Kf;
function Hh() {
  if (Kf) return uf;
  Kf = 1, uf = F;
  var ce = bh(), V = Object.create(ac());
  V.inherits = Pu(), V.inherits(F, ce);
  function F(ee) {
    if (!(this instanceof F)) return new F(ee);
    ce.call(this, ee);
  }
  return F.prototype._transform = function(ee, oe, Z) {
    Z(null, ee);
  }, uf;
}
var qf;
function zh() {
  return qf || (qf = 1, (function(ce, V) {
    V = ce.exports = vh(), V.Stream = V, V.Readable = V, V.Writable = gh(), V.Duplex = os(), V.Transform = bh(), V.PassThrough = Hh();
  })(Ss, Ss.exports)), Ss.exports;
}
var jf;
function Uh() {
  if (jf) return Cs.exports;
  jf = 1;
  var ce = zh();
  function V(F, ee, oe) {
    typeof oe > "u" && (oe = ee, ee = F, F = null), ce.Duplex.call(this, F), typeof oe.read != "function" && (oe = new ce.Readable(F).wrap(oe)), this._writable = ee, this._readable = oe, this._waiting = !1;
    var Z = this;
    ee.once("finish", function() {
      Z.end();
    }), this.once("finish", function() {
      ee.end();
    }), oe.on("readable", function() {
      Z._waiting && (Z._waiting = !1, Z._read());
    }), oe.once("end", function() {
      Z.push(null);
    }), (!F || typeof F.bubbleErrors > "u" || F.bubbleErrors) && (ee.on("error", function(Y) {
      Z.emit("error", Y);
    }), oe.on("error", function(Y) {
      Z.emit("error", Y);
    }));
  }
  return V.prototype = Object.create(ce.Duplex.prototype, { constructor: { value: V } }), V.prototype._write = function(ee, oe, Z) {
    this._writable.write(ee, oe, Z);
  }, V.prototype._read = function() {
    for (var ee, oe = 0; (ee = this._readable.read()) !== null; )
      this.push(ee), oe++;
    oe === 0 && (this._waiting = !0);
  }, Cs.exports = function(ee, oe, Z) {
    return new V(ee, oe, Z);
  }, Cs.exports.DuplexWrapper = V, Cs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var cf, $f;
function Yh() {
  if ($f) return cf;
  $f = 1;
  var ce = Object.getOwnPropertySymbols, V = Object.prototype.hasOwnProperty, F = Object.prototype.propertyIsEnumerable;
  function ee(Z) {
    if (Z == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(Z);
  }
  function oe() {
    try {
      if (!Object.assign)
        return !1;
      var Z = new String("abc");
      if (Z[5] = "de", Object.getOwnPropertyNames(Z)[0] === "5")
        return !1;
      for (var Y = {}, C = 0; C < 10; C++)
        Y["_" + String.fromCharCode(C)] = C;
      var q = Object.getOwnPropertyNames(Y).map(function(k) {
        return Y[k];
      });
      if (q.join("") !== "0123456789")
        return !1;
      var ue = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(k) {
        ue[k] = k;
      }), Object.keys(Object.assign({}, ue)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return cf = oe() ? Object.assign : function(Z, Y) {
    for (var C, q = ee(Z), ue, k = 1; k < arguments.length; k++) {
      C = Object(arguments[k]);
      for (var B in C)
        V.call(C, B) && (q[B] = C[B]);
      if (ce) {
        ue = ce(C);
        for (var Ie = 0; Ie < ue.length; Ie++)
          F.call(C, ue[Ie]) && (q[ue[Ie]] = C[ue[Ie]]);
      }
    }
    return q;
  }, cf;
}
var sf, eh;
function Gh() {
  if (eh) return sf;
  eh = 1;
  var ce = Uh(), V = rs.PassThrough, F = rs.PassThrough, ee = Yh(), oe = [].slice, Z = {
    bubbleErrors: !1,
    objectMode: !0
  };
  sf = Y;
  function Y(C, q, ue) {
    Array.isArray(C) || (C = oe.call(arguments), q = null, ue = null);
    var k = C[C.length - 1];
    typeof k == "function" && (ue = C.splice(-1)[0], k = C[C.length - 1]), typeof k == "object" && typeof k.pipe != "function" && (q = C.splice(-1)[0]);
    var B = C[0], Ie = C[C.length - 1], G;
    if (q = ee({}, Z, q), !B)
      return ue && process.nextTick(ue), new V(q);
    if (B.writable && Ie.readable ? G = ce(q, B, Ie) : C.length == 1 ? G = new F(q).wrap(C[0]) : B.writable ? G = B : Ie.readable ? G = Ie : G = new V(q), C.forEach(function(fe, Et) {
      var he = C[Et + 1];
      he && fe.pipe(he), fe != G && fe.on("error", G.emit.bind(G, "error"));
    }), ue) {
      let fe = function(Et) {
        U || (U = !0, ue(Et));
      };
      var U = !1;
      G.on("error", fe), Ie.on("finish", function() {
        fe();
      }), Ie.on("close", function() {
        fe();
      });
    }
    return G;
  }
  return sf;
}
var Xh = Gh();
const Zh = /* @__PURE__ */ hf(Xh);
var Qh = function(V) {
  return function(F) {
    for (var ee = new RegExp(V.key + "-([a-zA-Z0-9-_]+)", "gm"), oe = {
      html: F,
      ids: [],
      css: ""
    }, Z, Y = {}; (Z = ee.exec(F)) !== null; )
      Y[Z[1]] === void 0 && (Y[Z[1]] = !0);
    return oe.ids = Object.keys(V.inserted).filter(function(C) {
      if ((Y[C] !== void 0 || V.registered[V.key + "-" + C] === void 0) && V.inserted[C] !== !0)
        return oe.css += V.inserted[C], !0;
    }), oe;
  };
}, Jh = function(V) {
  return function(F) {
    for (var ee = new RegExp(V.key + "-([a-zA-Z0-9-_]+)", "gm"), oe = {
      html: F,
      styles: []
    }, Z, Y = {}; (Z = ee.exec(F)) !== null; )
      Y[Z[1]] === void 0 && (Y[Z[1]] = !0);
    var C = [], q = "";
    return Object.keys(V.inserted).forEach(function(ue) {
      (Y[ue] !== void 0 || V.registered[V.key + "-" + ue] === void 0) && V.inserted[ue] !== !0 && (V.registered[V.key + "-" + ue] ? (C.push(ue), q += V.inserted[ue]) : oe.styles.push({
        key: V.key + "-global",
        ids: [ue],
        css: V.inserted[ue]
      }));
    }), oe.styles.push({
      key: V.key,
      ids: C,
      css: q
    }), oe;
  };
};
function ff(ce, V, F, ee) {
  return '<style data-emotion="' + ce + " " + V + '"' + ee + ">" + F + "</style>";
}
var Vh = function(V, F) {
  return function(ee) {
    var oe = V.inserted, Z = V.key, Y = V.registered, C = new RegExp("<|" + Z + "-([a-zA-Z0-9-_]+)", "gm"), q = {}, ue = "", k = "", B = "";
    for (var Ie in oe)
      if (oe.hasOwnProperty(Ie)) {
        var G = oe[Ie], U = Z + "-" + Ie;
        G !== !0 && Y[U] === void 0 && (B += G, k += " " + Ie);
      }
    B !== "" && (ue = ff(Z, k.substring(1), B, F));
    for (var fe = "", Et = "", he = 0, pe; (pe = C.exec(ee)) !== null; ) {
      if (pe[0] === "<") {
        fe !== "" && (ue += ff(Z, fe.substring(1), Et, F), fe = "", Et = ""), ue += ee.substring(he, pe.index), he = pe.index;
        continue;
      }
      var Ge = pe[1], Re = oe[Ge];
      Re === !0 || Re === void 0 || q[Ge] || (q[Ge] = !0, Et += Re, fe += " " + Ge);
    }
    return ue += ee.substring(he), ue;
  };
}, Kh = function(V, F) {
  return function() {
    var ee = {}, oe = Lh(), Z = Ah(function(C) {
      var q = C[0], ue = C[1];
      if (q === "open") {
        for (var k = "", B = {}, Ie, G = ue.toString(), U = new RegExp(V.key + "-([a-zA-Z0-9-_]+)", "gm"); (Ie = U.exec(G)) !== null; )
          Ie !== null && ee[Ie[1]] === void 0 && (B[Ie[1]] = !0);
        Object.keys(V.inserted).forEach(function(fe) {
          V.inserted[fe] !== !0 && ee[fe] === void 0 && (B[fe] === !0 || V.registered[V.key + "-" + fe] === void 0 && (B[fe] = !0)) && (ee[fe] = !0, k += V.inserted[fe]);
        }), k !== "" && this.queue('<style data-emotion="' + V.key + " " + Object.keys(B).join(" ") + '"' + F + ">" + k + "</style>");
      }
      this.queue(ue);
    }, function() {
      this.queue(null);
    });
    return Zh(oe, Z);
  };
}, qh = function(V, F) {
  return function(ee) {
    var oe = "";
    return ee.styles.forEach(function(Z) {
      oe += ff(Z.key, Z.ids.join(" "), Z.css, F);
    }), oe;
  };
};
function jh(ce) {
  ce.compat !== !0 && (ce.compat = !0);
  var V = ce.nonce !== void 0 ? ' nonce="' + ce.nonce + '"' : "";
  return {
    extractCritical: Qh(ce),
    extractCriticalToChunks: Jh(ce),
    renderStylesToString: Vh(ce, V),
    renderStylesToNodeStream: Kh(ce, V),
    constructStyleTagsFromChunks: qh(ce, V)
  };
}
var ns = {}, bs = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var th;
function $h() {
  if (th) return bs;
  th = 1;
  var ce = As, V = Ms;
  function F(a) {
    var o = "https://react.dev/errors/" + a;
    if (1 < arguments.length) {
      o += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var f = 2; f < arguments.length; f++)
        o += "&args[]=" + encodeURIComponent(arguments[f]);
    }
    return "Minified React error #" + a + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ee = Symbol.for("react.transitional.element"), oe = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), ue = Symbol.for("react.consumer"), k = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), he = Symbol.for("react.activity"), pe = Symbol.for("react.legacy_hidden"), Ge = Symbol.for("react.memo_cache_sentinel"), Re = Symbol.for("react.view_transition"), j = Symbol.iterator, Ae = Array.isArray;
  function Ve(a, o) {
    var f = a.length & 3, g = a.length - f, T = o;
    for (o = 0; o < g; ) {
      var x = a.charCodeAt(o) & 255 | (a.charCodeAt(++o) & 255) << 8 | (a.charCodeAt(++o) & 255) << 16 | (a.charCodeAt(++o) & 255) << 24;
      ++o, x = 3432918353 * (x & 65535) + ((3432918353 * (x >>> 16) & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, x = 461845907 * (x & 65535) + ((461845907 * (x >>> 16) & 65535) << 16) & 4294967295, T ^= x, T = T << 13 | T >>> 19, T = 5 * (T & 65535) + ((5 * (T >>> 16) & 65535) << 16) & 4294967295, T = (T & 65535) + 27492 + (((T >>> 16) + 58964 & 65535) << 16);
    }
    switch (x = 0, f) {
      case 3:
        x ^= (a.charCodeAt(o + 2) & 255) << 16;
      case 2:
        x ^= (a.charCodeAt(o + 1) & 255) << 8;
      case 1:
        x ^= a.charCodeAt(o) & 255, x = 3432918353 * (x & 65535) + ((3432918353 * (x >>> 16) & 65535) << 16) & 4294967295, x = x << 15 | x >>> 17, T ^= 461845907 * (x & 65535) + ((461845907 * (x >>> 16) & 65535) << 16) & 4294967295;
    }
    return T ^= a.length, T ^= T >>> 16, T = 2246822507 * (T & 65535) + ((2246822507 * (T >>> 16) & 65535) << 16) & 4294967295, T ^= T >>> 13, T = 3266489909 * (T & 65535) + ((3266489909 * (T >>> 16) & 65535) << 16) & 4294967295, (T ^ T >>> 16) >>> 0;
  }
  var it = Object.assign, $e = Object.prototype.hasOwnProperty, _t = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), N = {}, H = {};
  function se(a) {
    return $e.call(H, a) ? !0 : $e.call(N, a) ? !1 : _t.test(a) ? H[a] = !0 : (N[a] = !0, !1);
  }
  var Ee = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), Ze = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), ae = /["'&<>]/;
  function P(a) {
    if (typeof a == "boolean" || typeof a == "number" || typeof a == "bigint")
      return "" + a;
    a = "" + a;
    var o = ae.exec(a);
    if (o) {
      var f = "", g, T = 0;
      for (g = o.index; g < a.length; g++) {
        switch (a.charCodeAt(g)) {
          case 34:
            o = "&quot;";
            break;
          case 38:
            o = "&amp;";
            break;
          case 39:
            o = "&#x27;";
            break;
          case 60:
            o = "&lt;";
            break;
          case 62:
            o = "&gt;";
            break;
          default:
            continue;
        }
        T !== g && (f += a.slice(T, g)), T = g + 1, f += o;
      }
      a = T !== g ? f + a.slice(T, g) : f;
    }
    return a;
  }
  var $ = /([A-Z])/g, le = /^ms-/, te = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Q(a) {
    return te.test("" + a) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : a;
  }
  var nt = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pt = V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Qe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, dt = pt.d;
  pt.d = {
    f: dt.f,
    r: dt.r,
    D: Ii,
    C: Mc,
    L: El,
    m: Oc,
    X: Zn,
    S: mi,
    M: Iu
  };
  var It = [], S = /(<\/|<)(s)(cript)/gi;
  function M(a, o, f, g) {
    return "" + o + (f === "s" ? "\\u0073" : "\\u0053") + g;
  }
  function Se(a, o, f, g, T) {
    return {
      idPrefix: a === void 0 ? "" : a,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: f,
      bootstrapScripts: g,
      bootstrapModules: T,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function we() {
    return {
      htmlChunks: null,
      headChunks: null,
      bodyChunks: null,
      contribution: 0
    };
  }
  function me(a, o, f) {
    return {
      insertionMode: a,
      selectedValue: o,
      tagScope: f
    };
  }
  function Me(a, o, f) {
    switch (o) {
      case "noscript":
        return me(2, null, a.tagScope | 1);
      case "select":
        return me(
          2,
          f.value != null ? f.value : f.defaultValue,
          a.tagScope
        );
      case "svg":
        return me(4, null, a.tagScope);
      case "picture":
        return me(2, null, a.tagScope | 2);
      case "math":
        return me(5, null, a.tagScope);
      case "foreignObject":
        return me(2, null, a.tagScope);
      case "table":
        return me(6, null, a.tagScope);
      case "thead":
      case "tbody":
      case "tfoot":
        return me(7, null, a.tagScope);
      case "colgroup":
        return me(9, null, a.tagScope);
      case "tr":
        return me(8, null, a.tagScope);
      case "head":
        if (2 > a.insertionMode)
          return me(3, null, a.tagScope);
        break;
      case "html":
        if (a.insertionMode === 0)
          return me(1, null, a.tagScope);
    }
    return 6 <= a.insertionMode || 2 > a.insertionMode ? me(2, null, a.tagScope) : a;
  }
  var ot = /* @__PURE__ */ new Map();
  function ua(a, o) {
    if (typeof o != "object") throw Error(F(62));
    var f = !0, g;
    for (g in o)
      if ($e.call(o, g)) {
        var T = o[g];
        if (T != null && typeof T != "boolean" && T !== "") {
          if (g.indexOf("--") === 0) {
            var x = P(g);
            T = P(("" + T).trim());
          } else
            x = ot.get(g), x === void 0 && (x = P(
              g.replace($, "-$1").toLowerCase().replace(le, "-ms-")
            ), ot.set(g, x)), T = typeof T == "number" ? T === 0 || Ee.has(g) ? "" + T : T + "px" : P(("" + T).trim());
          f ? (f = !1, a.push(' style="', x, ":", T)) : a.push(";", x, ":", T);
        }
      }
    f || a.push('"');
  }
  function nn(a, o, f) {
    f && typeof f != "function" && typeof f != "symbol" && a.push(" ", o, '=""');
  }
  function Yt(a, o, f) {
    typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && a.push(" ", o, '="', P(f), '"');
  }
  var yr = P(
    "javascript:throw new Error('React form unexpectedly submitted.')"
  );
  function ca(a, o) {
    this.push('<input type="hidden"'), Ia(a), Yt(this, "name", o), Yt(this, "value", a), this.push("/>");
  }
  function Ia(a) {
    if (typeof a != "string") throw Error(F(480));
  }
  function Cn(a, o) {
    if (typeof o.$$FORM_ACTION == "function") {
      var f = a.nextFormID++;
      a = a.idPrefix + f;
      try {
        var g = o.$$FORM_ACTION(a);
        if (g) {
          var T = g.data;
          T?.forEach(Ia);
        }
        return g;
      } catch (x) {
        if (typeof x == "object" && x !== null && typeof x.then == "function")
          throw x;
      }
    }
    return null;
  }
  function Qt(a, o, f, g, T, x, A, ne) {
    var J = null;
    if (typeof g == "function") {
      var ie = Cn(o, g);
      ie !== null ? (ne = ie.name, g = ie.action || "", T = ie.encType, x = ie.method, A = ie.target, J = ie.data) : (a.push(" ", "formAction", '="', yr, '"'), A = x = T = g = ne = null, Sn(o, f));
    }
    return ne != null && et(a, "name", ne), g != null && et(a, "formAction", g), T != null && et(a, "formEncType", T), x != null && et(a, "formMethod", x), A != null && et(a, "formTarget", A), J;
  }
  function et(a, o, f) {
    switch (o) {
      case "className":
        Yt(a, "class", f);
        break;
      case "tabIndex":
        Yt(a, "tabindex", f);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yt(a, o, f);
        break;
      case "style":
        ua(a, f);
        break;
      case "src":
      case "href":
        if (f === "") break;
      case "action":
      case "formAction":
        if (f == null || typeof f == "function" || typeof f == "symbol" || typeof f == "boolean")
          break;
        f = Q("" + f), a.push(" ", o, '="', P(f), '"');
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        nn(a, o.toLowerCase(), f);
        break;
      case "xlinkHref":
        if (typeof f == "function" || typeof f == "symbol" || typeof f == "boolean")
          break;
        f = Q("" + f), a.push(" ", "xlink:href", '="', P(f), '"');
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof f != "function" && typeof f != "symbol" && a.push(" ", o, '="', P(f), '"');
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        f && typeof f != "function" && typeof f != "symbol" && a.push(" ", o, '=""');
        break;
      case "capture":
      case "download":
        f === !0 ? a.push(" ", o, '=""') : f !== !1 && typeof f != "function" && typeof f != "symbol" && a.push(" ", o, '="', P(f), '"');
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof f != "function" && typeof f != "symbol" && !isNaN(f) && 1 <= f && a.push(" ", o, '="', P(f), '"');
        break;
      case "rowSpan":
      case "start":
        typeof f == "function" || typeof f == "symbol" || isNaN(f) || a.push(" ", o, '="', P(f), '"');
        break;
      case "xlinkActuate":
        Yt(a, "xlink:actuate", f);
        break;
      case "xlinkArcrole":
        Yt(a, "xlink:arcrole", f);
        break;
      case "xlinkRole":
        Yt(a, "xlink:role", f);
        break;
      case "xlinkShow":
        Yt(a, "xlink:show", f);
        break;
      case "xlinkTitle":
        Yt(a, "xlink:title", f);
        break;
      case "xlinkType":
        Yt(a, "xlink:type", f);
        break;
      case "xmlBase":
        Yt(a, "xml:base", f);
        break;
      case "xmlLang":
        Yt(a, "xml:lang", f);
        break;
      case "xmlSpace":
        Yt(a, "xml:space", f);
        break;
      default:
        if ((!(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (o = Ze.get(o) || o, se(o))) {
          switch (typeof f) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var g = o.toLowerCase().slice(0, 5);
              if (g !== "data-" && g !== "aria-") return;
          }
          a.push(" ", o, '="', P(f), '"');
        }
    }
  }
  function bn(a, o, f) {
    if (o != null) {
      if (f != null) throw Error(F(60));
      if (typeof o != "object" || !("__html" in o))
        throw Error(F(61));
      o = o.__html, o != null && a.push("" + o);
    }
  }
  function wr(a) {
    var o = "";
    return ce.Children.forEach(a, function(f) {
      f != null && (o += f);
    }), o;
  }
  function Sn(a, o) {
    (a.instructions & 16) === 0 && (a.instructions |= 16, o.bootstrapChunks.unshift(
      o.startInlineScript,
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`,
      "<\/script>"
    ));
  }
  function Ln(a, o) {
    a.push(wt("link"));
    for (var f in o)
      if ($e.call(o, f)) {
        var g = o[f];
        if (g != null)
          switch (f) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(F(399, "link"));
            default:
              et(a, f, g);
          }
      }
    return a.push("/>"), null;
  }
  var Fu = /(<\/|<)(s)(tyle)/gi;
  function Au(a, o, f, g) {
    return "" + o + (f === "s" ? "\\73 " : "\\53 ") + g;
  }
  function wl(a, o, f) {
    a.push(wt(f));
    for (var g in o)
      if ($e.call(o, g)) {
        var T = o[g];
        if (T != null)
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(F(399, f));
            default:
              et(a, g, T);
          }
      }
    return a.push("/>"), null;
  }
  function Mu(a, o) {
    a.push(wt("title"));
    var f = null, g = null, T;
    for (T in o)
      if ($e.call(o, T)) {
        var x = o[T];
        if (x != null)
          switch (T) {
            case "children":
              f = x;
              break;
            case "dangerouslySetInnerHTML":
              g = x;
              break;
            default:
              et(a, T, x);
          }
      }
    return a.push(">"), o = Array.isArray(f) ? 2 > f.length ? f[0] : null : f, typeof o != "function" && typeof o != "symbol" && o !== null && o !== void 0 && a.push(P("" + o)), bn(a, g, f), a.push(Da("title")), null;
  }
  function sa(a, o) {
    a.push(wt("script"));
    var f = null, g = null, T;
    for (T in o)
      if ($e.call(o, T)) {
        var x = o[T];
        if (x != null)
          switch (T) {
            case "children":
              f = x;
              break;
            case "dangerouslySetInnerHTML":
              g = x;
              break;
            default:
              et(a, T, x);
          }
      }
    return a.push(">"), bn(a, g, f), typeof f == "string" && a.push(("" + f).replace(S, M)), a.push(Da("script")), null;
  }
  function ma(a, o, f) {
    a.push(wt(f));
    var g = f = null, T;
    for (T in o)
      if ($e.call(o, T)) {
        var x = o[T];
        if (x != null)
          switch (T) {
            case "children":
              f = x;
              break;
            case "dangerouslySetInnerHTML":
              g = x;
              break;
            default:
              et(a, T, x);
          }
      }
    return a.push(">"), bn(a, g, f), f;
  }
  function No(a, o, f) {
    a.push(wt(f));
    var g = f = null, T;
    for (T in o)
      if ($e.call(o, T)) {
        var x = o[T];
        if (x != null)
          switch (T) {
            case "children":
              f = x;
              break;
            case "dangerouslySetInnerHTML":
              g = x;
              break;
            default:
              et(a, T, x);
          }
      }
    return a.push(">"), bn(a, g, f), typeof f == "string" ? (a.push(P(f)), null) : f;
  }
  var ro = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Tl = /* @__PURE__ */ new Map();
  function wt(a) {
    var o = Tl.get(a);
    if (o === void 0) {
      if (!ro.test(a))
        throw Error(F(65, a));
      o = "<" + a, Tl.set(a, o);
    }
    return o;
  }
  function Sr(a, o, f, g, T, x, A, ne, J, ie) {
    switch (o) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        a.push(wt("a"));
        var Be = null, ke = null, Le;
        for (Le in f)
          if ($e.call(f, Le)) {
            var Ne = f[Le];
            if (Ne != null)
              switch (Le) {
                case "children":
                  Be = Ne;
                  break;
                case "dangerouslySetInnerHTML":
                  ke = Ne;
                  break;
                case "href":
                  Ne === "" ? Yt(a, "href", "") : et(a, Le, Ne);
                  break;
                default:
                  et(a, Le, Ne);
              }
          }
        if (a.push(">"), bn(a, ke, Be), typeof Be == "string") {
          a.push(P(Be));
          var tt = null;
        } else tt = Be;
        return tt;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        a.push(wt("select"));
        var ze = null, bt = null, St;
        for (St in f)
          if ($e.call(f, St)) {
            var Rt = f[St];
            if (Rt != null)
              switch (St) {
                case "children":
                  ze = Rt;
                  break;
                case "dangerouslySetInnerHTML":
                  bt = Rt;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  et(
                    a,
                    St,
                    Rt
                  );
              }
          }
        return a.push(">"), bn(a, bt, ze), ze;
      case "option":
        var Nt = ne.selectedValue;
        a.push(wt("option"));
        var Ue = null, ft = null, rt = null, Mn = null, jn;
        for (jn in f)
          if ($e.call(f, jn)) {
            var Xe = f[jn];
            if (Xe != null)
              switch (jn) {
                case "children":
                  Ue = Xe;
                  break;
                case "selected":
                  rt = Xe;
                  break;
                case "dangerouslySetInnerHTML":
                  Mn = Xe;
                  break;
                case "value":
                  ft = Xe;
                default:
                  et(
                    a,
                    jn,
                    Xe
                  );
              }
          }
        if (Nt != null) {
          var At = ft !== null ? "" + ft : wr(Ue);
          if (Ae(Nt)) {
            for (var un = 0; un < Nt.length; un++)
              if ("" + Nt[un] === At) {
                a.push(' selected=""');
                break;
              }
          } else
            "" + Nt === At && a.push(' selected=""');
        } else rt && a.push(' selected=""');
        return a.push(">"), bn(a, Mn, Ue), Ue;
      case "textarea":
        a.push(wt("textarea"));
        var Tn = null, xi = null, mt = null, cn;
        for (cn in f)
          if ($e.call(f, cn)) {
            var fr = f[cn];
            if (fr != null)
              switch (cn) {
                case "children":
                  mt = fr;
                  break;
                case "value":
                  Tn = fr;
                  break;
                case "defaultValue":
                  xi = fr;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(F(91));
                default:
                  et(
                    a,
                    cn,
                    fr
                  );
              }
          }
        if (Tn === null && xi !== null && (Tn = xi), a.push(">"), mt != null) {
          if (Tn != null) throw Error(F(92));
          if (Ae(mt)) {
            if (1 < mt.length)
              throw Error(F(93));
            Tn = "" + mt[0];
          }
          Tn = "" + mt;
        }
        return typeof Tn == "string" && Tn[0] === `
` && a.push(`
`), Tn !== null && a.push(P("" + Tn)), null;
      case "input":
        a.push(wt("input"));
        var $n = null, Ei = null, er = null, ii = null, _r = null, sn = null, Qr = null, Ir = null, ki = null, ai;
        for (ai in f)
          if ($e.call(f, ai)) {
            var Jr = f[ai];
            if (Jr != null)
              switch (ai) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(F(399, "input"));
                case "name":
                  $n = Jr;
                  break;
                case "formAction":
                  Ei = Jr;
                  break;
                case "formEncType":
                  er = Jr;
                  break;
                case "formMethod":
                  ii = Jr;
                  break;
                case "formTarget":
                  _r = Jr;
                  break;
                case "defaultChecked":
                  ki = Jr;
                  break;
                case "defaultValue":
                  Qr = Jr;
                  break;
                case "checked":
                  Ir = Jr;
                  break;
                case "value":
                  sn = Jr;
                  break;
                default:
                  et(
                    a,
                    ai,
                    Jr
                  );
              }
          }
        var Uu = Qt(
          a,
          g,
          T,
          Ei,
          er,
          ii,
          _r,
          $n
        );
        return Ir !== null ? nn(a, "checked", Ir) : ki !== null && nn(a, "checked", ki), sn !== null ? et(a, "value", sn) : Qr !== null && et(a, "value", Qr), a.push("/>"), Uu?.forEach(ca, a), null;
      case "button":
        a.push(wt("button"));
        var Ta = null, Ci = null, tu = null, vc = null, ml = null, bc = null, On = null, hr;
        for (hr in f)
          if ($e.call(f, hr)) {
            var qt = f[hr];
            if (qt != null)
              switch (hr) {
                case "children":
                  Ta = qt;
                  break;
                case "dangerouslySetInnerHTML":
                  Ci = qt;
                  break;
                case "name":
                  tu = qt;
                  break;
                case "formAction":
                  vc = qt;
                  break;
                case "formEncType":
                  ml = qt;
                  break;
                case "formMethod":
                  bc = qt;
                  break;
                case "formTarget":
                  On = qt;
                  break;
                default:
                  et(
                    a,
                    hr,
                    qt
                  );
              }
          }
        var nu = Qt(
          a,
          g,
          T,
          vc,
          ml,
          bc,
          On,
          tu
        );
        if (a.push(">"), nu?.forEach(ca, a), bn(a, Ci, Ta), typeof Ta == "string") {
          a.push(P(Ta));
          var Si = null;
        } else Si = Ta;
        return Si;
      case "form":
        a.push(wt("form"));
        var el = null, jt = null, li = null, yo = null, Pi = null, wo = null, Dl;
        for (Dl in f)
          if ($e.call(f, Dl)) {
            var pa = f[Dl];
            if (pa != null)
              switch (Dl) {
                case "children":
                  el = pa;
                  break;
                case "dangerouslySetInnerHTML":
                  jt = pa;
                  break;
                case "action":
                  li = pa;
                  break;
                case "encType":
                  yo = pa;
                  break;
                case "method":
                  Pi = pa;
                  break;
                case "target":
                  wo = pa;
                  break;
                default:
                  et(
                    a,
                    Dl,
                    pa
                  );
              }
          }
        var pn = null, ru = null;
        if (typeof li == "function") {
          var mr = Cn(
            g,
            li
          );
          mr !== null ? (li = mr.action || "", yo = mr.encType, Pi = mr.method, wo = mr.target, pn = mr.data, ru = mr.name) : (a.push(
            " ",
            "action",
            '="',
            yr,
            '"'
          ), wo = Pi = yo = li = null, Sn(g, T));
        }
        if (li != null && et(a, "action", li), yo != null && et(a, "encType", yo), Pi != null && et(a, "method", Pi), wo != null && et(a, "target", wo), a.push(">"), ru !== null && (a.push('<input type="hidden"'), Yt(a, "name", ru), a.push("/>"), pn?.forEach(ca, a)), bn(a, jt, el), typeof el == "string") {
          a.push(P(el));
          var Ll = null;
        } else Ll = el;
        return Ll;
      case "menuitem":
        a.push(wt("menuitem"));
        for (var tl in f)
          if ($e.call(f, tl)) {
            var Xi = f[tl];
            if (Xi != null)
              switch (tl) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(F(400));
                default:
                  et(
                    a,
                    tl,
                    Xi
                  );
              }
          }
        return a.push(">"), null;
      case "object":
        a.push(wt("object"));
        var oi = null, nl = null, tr;
        for (tr in f)
          if ($e.call(f, tr)) {
            var Ra = f[tr];
            if (Ra != null)
              switch (tr) {
                case "children":
                  oi = Ra;
                  break;
                case "dangerouslySetInnerHTML":
                  nl = Ra;
                  break;
                case "data":
                  var yc = Q("" + Ra);
                  if (yc === "") break;
                  a.push(
                    " ",
                    "data",
                    '="',
                    P(yc),
                    '"'
                  );
                  break;
                default:
                  et(
                    a,
                    tr,
                    Ra
                  );
              }
          }
        if (a.push(">"), bn(a, nl, oi), typeof oi == "string") {
          a.push(P(oi));
          var iu = null;
        } else iu = oi;
        return iu;
      case "title":
        if (ne.insertionMode === 4 || ne.tagScope & 1 || f.itemProp != null)
          var To = Mu(
            a,
            f
          );
        else
          ie ? To = null : (Mu(T.hoistableChunks, f), To = void 0);
        return To;
      case "link":
        var Yu = f.rel, _n = f.href, Bl = f.precedence;
        if (ne.insertionMode === 4 || ne.tagScope & 1 || f.itemProp != null || typeof Yu != "string" || typeof _n != "string" || _n === "") {
          Ln(a, f);
          var Wl = null;
        } else if (f.rel === "stylesheet")
          if (typeof Bl != "string" || f.disabled != null || f.onLoad || f.onError)
            Wl = Ln(
              a,
              f
            );
          else {
            var rl = T.styles.get(Bl), au = g.styleResources.hasOwnProperty(_n) ? g.styleResources[_n] : void 0;
            if (au !== null) {
              g.styleResources[_n] = null, rl || (rl = {
                precedence: P(Bl),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, T.styles.set(Bl, rl));
              var lu = {
                state: 0,
                props: it({}, f, {
                  "data-precedence": f.precedence,
                  precedence: null
                })
              };
              if (au) {
                au.length === 2 && yi(lu.props, au);
                var Vr = T.preloads.stylesheets.get(_n);
                Vr && 0 < Vr.length ? Vr.length = 0 : lu.state = 1;
              }
              rl.sheets.set(_n, lu), A && A.stylesheets.add(lu);
            } else if (rl) {
              var mc = rl.sheets.get(_n);
              mc && A && A.stylesheets.add(mc);
            }
            J && a.push("<!-- -->"), Wl = null;
          }
        else
          f.onLoad || f.onError ? Wl = Ln(
            a,
            f
          ) : (J && a.push("<!-- -->"), Wl = ie ? null : Ln(T.hoistableChunks, f));
        return Wl;
      case "script":
        var Zi = f.async;
        if (typeof f.src != "string" || !f.src || !Zi || typeof Zi == "function" || typeof Zi == "symbol" || f.onLoad || f.onError || ne.insertionMode === 4 || ne.tagScope & 1 || f.itemProp != null)
          var wc = sa(
            a,
            f
          );
        else {
          var xa = f.src;
          if (f.type === "module")
            var po = g.moduleScriptResources, ou = T.preloads.moduleScripts;
          else
            po = g.scriptResources, ou = T.preloads.scripts;
          var il = po.hasOwnProperty(xa) ? po[xa] : void 0;
          if (il !== null) {
            po[xa] = null;
            var uu = f;
            if (il) {
              il.length === 2 && (uu = it({}, f), yi(uu, il));
              var Gu = ou.get(xa);
              Gu && (Gu.length = 0);
            }
            var Xu = [];
            T.scripts.add(Xu), sa(Xu, uu);
          }
          J && a.push("<!-- -->"), wc = null;
        }
        return wc;
      case "style":
        var cu = f.precedence, Fi = f.href;
        if (ne.insertionMode === 4 || ne.tagScope & 1 || f.itemProp != null || typeof cu != "string" || typeof Fi != "string" || Fi === "") {
          a.push(wt("style"));
          var Ea = null, Ro = null, Nl;
          for (Nl in f)
            if ($e.call(f, Nl)) {
              var su = f[Nl];
              if (su != null)
                switch (Nl) {
                  case "children":
                    Ea = su;
                    break;
                  case "dangerouslySetInnerHTML":
                    Ro = su;
                    break;
                  default:
                    et(
                      a,
                      Nl,
                      su
                    );
                }
            }
          a.push(">");
          var xo = Array.isArray(Ea) ? 2 > Ea.length ? Ea[0] : null : Ea;
          typeof xo != "function" && typeof xo != "symbol" && xo !== null && xo !== void 0 && a.push(("" + xo).replace(Fu, Au)), bn(a, Ro, Ea), a.push(Da("style"));
          var al = null;
        } else {
          var ll = T.styles.get(cu);
          if ((g.styleResources.hasOwnProperty(Fi) ? g.styleResources[Fi] : void 0) !== null) {
            g.styleResources[Fi] = null, ll ? ll.hrefs.push(
              P(Fi)
            ) : (ll = {
              precedence: P(cu),
              rules: [],
              hrefs: [P(Fi)],
              sheets: /* @__PURE__ */ new Map()
            }, T.styles.set(cu, ll));
            var ol = ll.rules, Hl = null, zl = null, fu;
            for (fu in f)
              if ($e.call(f, fu)) {
                var i = f[fu];
                if (i != null)
                  switch (fu) {
                    case "children":
                      Hl = i;
                      break;
                    case "dangerouslySetInnerHTML":
                      zl = i;
                  }
              }
            var l = Array.isArray(Hl) ? 2 > Hl.length ? Hl[0] : null : Hl;
            typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && ol.push(
              ("" + l).replace(Fu, Au)
            ), bn(ol, zl, Hl);
          }
          ll && A && A.styles.add(ll), J && a.push("<!-- -->"), al = void 0;
        }
        return al;
      case "meta":
        if (ne.insertionMode === 4 || ne.tagScope & 1 || f.itemProp != null)
          var s = wl(
            a,
            f,
            "meta"
          );
        else
          J && a.push("<!-- -->"), s = ie ? null : typeof f.charSet == "string" ? wl(T.charsetChunks, f, "meta") : f.name === "viewport" ? wl(T.viewportChunks, f, "meta") : wl(T.hoistableChunks, f, "meta");
        return s;
      case "listing":
      case "pre":
        a.push(wt(o));
        var v = null, w = null, E;
        for (E in f)
          if ($e.call(f, E)) {
            var O = f[E];
            if (O != null)
              switch (E) {
                case "children":
                  v = O;
                  break;
                case "dangerouslySetInnerHTML":
                  w = O;
                  break;
                default:
                  et(
                    a,
                    E,
                    O
                  );
              }
          }
        if (a.push(">"), w != null) {
          if (v != null) throw Error(F(60));
          if (typeof w != "object" || !("__html" in w))
            throw Error(F(61));
          var K = w.__html;
          K != null && (typeof K == "string" && 0 < K.length && K[0] === `
` ? a.push(`
`, K) : a.push("" + K));
        }
        return typeof v == "string" && v[0] === `
` && a.push(`
`), v;
      case "img":
        var m = f.src, X = f.srcSet;
        if (!(f.loading === "lazy" || !m && !X || typeof m != "string" && m != null || typeof X != "string" && X != null) && f.fetchPriority !== "low" && !(ne.tagScope & 3) && (typeof m != "string" || m[4] !== ":" || m[0] !== "d" && m[0] !== "D" || m[1] !== "a" && m[1] !== "A" || m[2] !== "t" && m[2] !== "T" || m[3] !== "a" && m[3] !== "A") && (typeof X != "string" || X[4] !== ":" || X[0] !== "d" && X[0] !== "D" || X[1] !== "a" && X[1] !== "A" || X[2] !== "t" && X[2] !== "T" || X[3] !== "a" && X[3] !== "A")) {
          var Ce = typeof f.sizes == "string" ? f.sizes : void 0, ge = X ? X + `
` + (Ce || "") : m, We = T.preloads.images, Ye = We.get(ge);
          if (Ye)
            (f.fetchPriority === "high" || 10 > T.highImagePreloads.size) && (We.delete(ge), T.highImagePreloads.add(Ye));
          else if (!g.imageResources.hasOwnProperty(ge)) {
            g.imageResources[ge] = It;
            var Ke = f.crossOrigin, at = typeof Ke == "string" ? Ke === "use-credentials" ? Ke : "" : void 0, Dt = T.headers, fn;
            Dt && 0 < Dt.remainingCapacity && typeof f.srcSet != "string" && (f.fetchPriority === "high" || 500 > Dt.highImagePreloads.length) && (fn = Fr(m, "image", {
              imageSrcSet: f.srcSet,
              imageSizes: f.sizes,
              crossOrigin: at,
              integrity: f.integrity,
              nonce: f.nonce,
              type: f.type,
              fetchPriority: f.fetchPriority,
              referrerPolicy: f.refererPolicy
            }), 0 <= (Dt.remainingCapacity -= fn.length + 2)) ? (T.resets.image[ge] = It, Dt.highImagePreloads && (Dt.highImagePreloads += ", "), Dt.highImagePreloads += fn) : (Ye = [], Ln(Ye, {
              rel: "preload",
              as: "image",
              href: X ? void 0 : m,
              imageSrcSet: X,
              imageSizes: Ce,
              crossOrigin: at,
              integrity: f.integrity,
              type: f.type,
              fetchPriority: f.fetchPriority,
              referrerPolicy: f.referrerPolicy
            }), f.fetchPriority === "high" || 10 > T.highImagePreloads.size ? T.highImagePreloads.add(Ye) : (T.bulkPreloads.add(Ye), We.set(ge, Ye)));
          }
        }
        return wl(a, f, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return wl(a, f, o);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > ne.insertionMode) {
          var Tt = x || T.preamble;
          if (Tt.headChunks)
            throw Error(F(545, "`<head>`"));
          Tt.headChunks = [];
          var dr = ma(
            Tt.headChunks,
            f,
            "head"
          );
        } else
          dr = No(
            a,
            f,
            "head"
          );
        return dr;
      case "body":
        if (2 > ne.insertionMode) {
          var hn = x || T.preamble;
          if (hn.bodyChunks)
            throw Error(F(545, "`<body>`"));
          hn.bodyChunks = [];
          var Dr = ma(
            hn.bodyChunks,
            f,
            "body"
          );
        } else
          Dr = No(
            a,
            f,
            "body"
          );
        return Dr;
      case "html":
        if (ne.insertionMode === 0) {
          var nr = x || T.preamble;
          if (nr.htmlChunks)
            throw Error(F(545, "`<html>`"));
          nr.htmlChunks = [""];
          var Nn = ma(
            nr.htmlChunks,
            f,
            "html"
          );
        } else
          Nn = No(
            a,
            f,
            "html"
          );
        return Nn;
      default:
        if (o.indexOf("-") !== -1) {
          a.push(wt(o));
          var Rr = null, Lt = null, Rn;
          for (Rn in f)
            if ($e.call(f, Rn)) {
              var $t = f[Rn];
              if ($t != null) {
                var rr = Rn;
                switch (Rn) {
                  case "children":
                    Rr = $t;
                    break;
                  case "dangerouslySetInnerHTML":
                    Lt = $t;
                    break;
                  case "style":
                    ua(a, $t);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    rr = "class";
                  default:
                    if (se(Rn) && typeof $t != "function" && typeof $t != "symbol" && $t !== !1) {
                      if ($t === !0) $t = "";
                      else if (typeof $t == "object") continue;
                      a.push(
                        " ",
                        rr,
                        '="',
                        P($t),
                        '"'
                      );
                    }
                }
              }
            }
          return a.push(">"), bn(a, Lt, Rr), Rr;
        }
    }
    return No(a, f, o);
  }
  var Ho = /* @__PURE__ */ new Map();
  function Da(a) {
    var o = Ho.get(a);
    return o === void 0 && (o = "</" + a + ">", Ho.set(a, o)), o;
  }
  function bi(a, o) {
    a = a.preamble, a.htmlChunks === null && o.htmlChunks && (a.htmlChunks = o.htmlChunks, o.contribution |= 1), a.headChunks === null && o.headChunks && (a.headChunks = o.headChunks, o.contribution |= 4), a.bodyChunks === null && o.bodyChunks && (a.bodyChunks = o.bodyChunks, o.contribution |= 2);
  }
  function Ou(a, o) {
    o = o.bootstrapChunks;
    for (var f = 0; f < o.length - 1; f++)
      a.push(o[f]);
    return f < o.length ? (f = o[f], o.length = 0, a.push(f)) : !0;
  }
  function lc(a, o, f) {
    if (a.push('<!--$?--><template id="'), f === null) throw Error(F(395));
    return a.push(o.boundaryPrefix), o = f.toString(16), a.push(o), a.push('"></template>');
  }
  function _u(a, o) {
    o = o.contribution, o !== 0 && (a.push("<!--"), a.push("" + o), a.push("-->"));
  }
  function zo(a, o, f, g) {
    switch (f.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return a.push('<div hidden id="'), a.push(o.segmentPrefix), o = g.toString(16), a.push(o), a.push('">');
      case 4:
        return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(o.segmentPrefix), o = g.toString(16), a.push(o), a.push('">');
      case 5:
        return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(o.segmentPrefix), o = g.toString(16), a.push(o), a.push('">');
      case 6:
        return a.push('<table hidden id="'), a.push(o.segmentPrefix), o = g.toString(16), a.push(o), a.push('">');
      case 7:
        return a.push('<table hidden><tbody id="'), a.push(o.segmentPrefix), o = g.toString(16), a.push(o), a.push('">');
      case 8:
        return a.push('<table hidden><tr id="'), a.push(o.segmentPrefix), o = g.toString(16), a.push(o), a.push('">');
      case 9:
        return a.push('<table hidden><colgroup id="'), a.push(o.segmentPrefix), o = g.toString(16), a.push(o), a.push('">');
      default:
        throw Error(F(397));
    }
  }
  function Wt(a, o) {
    switch (o.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return a.push("</div>");
      case 4:
        return a.push("</svg>");
      case 5:
        return a.push("</math>");
      case 6:
        return a.push("</table>");
      case 7:
        return a.push("</tbody></table>");
      case 8:
        return a.push("</tr></table>");
      case 9:
        return a.push("</colgroup></table>");
      default:
        throw Error(F(397));
    }
  }
  var La = /[<\u2028\u2029]/g;
  function Bn(a) {
    return JSON.stringify(a).replace(
      La,
      function(o) {
        switch (o) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var zr = /[&><\u2028\u2029]/g;
  function yn(a) {
    return JSON.stringify(a).replace(
      zr,
      function(o) {
        switch (o) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var pl = !1, Ur = !0;
  function Pn(a) {
    var o = a.rules, f = a.hrefs, g = 0;
    if (f.length) {
      for (this.push('<style media="not all" data-precedence="'), this.push(a.precedence), this.push('" data-href="'); g < f.length - 1; g++)
        this.push(f[g]), this.push(" ");
      for (this.push(f[g]), this.push('">'), g = 0; g < o.length; g++) this.push(o[g]);
      Ur = this.push("</style>"), pl = !0, o.length = 0, f.length = 0;
    }
  }
  function Gt(a) {
    return a.state !== 2 ? pl = !0 : !1;
  }
  function Ba(a, o, f) {
    return pl = !1, Ur = !0, o.styles.forEach(Pn, a), o.stylesheets.forEach(Gt), pl && (f.stylesToHoist = !0), Ur;
  }
  function Pr(a) {
    for (var o = 0; o < a.length; o++) this.push(a[o]);
    a.length = 0;
  }
  var Yr = [];
  function oc(a) {
    Ln(Yr, a.props);
    for (var o = 0; o < Yr.length; o++)
      this.push(Yr[o]);
    Yr.length = 0, a.state = 2;
  }
  function io(a) {
    var o = 0 < a.sheets.size;
    a.sheets.forEach(oc, this), a.sheets.clear();
    var f = a.rules, g = a.hrefs;
    if (!o || g.length) {
      if (this.push('<style data-precedence="'), this.push(a.precedence), a = 0, g.length) {
        for (this.push('" data-href="'); a < g.length - 1; a++)
          this.push(g[a]), this.push(" ");
        this.push(g[a]);
      }
      for (this.push('">'), a = 0; a < f.length; a++)
        this.push(f[a]);
      this.push("</style>"), f.length = 0, g.length = 0;
    }
  }
  function vt(a) {
    if (a.state === 0) {
      a.state = 1;
      var o = a.props;
      for (Ln(Yr, {
        rel: "preload",
        as: "style",
        href: a.props.href,
        crossOrigin: o.crossOrigin,
        fetchPriority: o.fetchPriority,
        integrity: o.integrity,
        media: o.media,
        hrefLang: o.hrefLang,
        referrerPolicy: o.referrerPolicy
      }), a = 0; a < Yr.length; a++)
        this.push(Yr[a]);
      Yr.length = 0;
    }
  }
  function zt(a) {
    a.sheets.forEach(vt, this), a.sheets.clear();
  }
  function Rl(a, o) {
    a.push("[");
    var f = "[";
    o.stylesheets.forEach(function(g) {
      if (g.state !== 2)
        if (g.state === 3)
          a.push(f), g = yn(
            "" + g.props.href
          ), a.push(g), a.push("]"), f = ",[";
        else {
          a.push(f);
          var T = g.props["data-precedence"], x = g.props, A = Q("" + g.props.href);
          A = yn(A), a.push(A), T = "" + T, a.push(","), T = yn(T), a.push(T);
          for (var ne in x)
            if ($e.call(x, ne) && (T = x[ne], T != null))
              switch (ne) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(F(399, "link"));
                default:
                  Xn(
                    a,
                    ne,
                    T
                  );
              }
          a.push("]"), f = ",[", g.state = 3;
        }
    }), a.push("]");
  }
  function Xn(a, o, f) {
    var g = o.toLowerCase();
    switch (typeof f) {
      case "function":
      case "symbol":
        return;
    }
    switch (o) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        g = "class", o = "" + f;
        break;
      case "hidden":
        if (f === !1) return;
        o = "";
        break;
      case "src":
      case "href":
        f = Q(f), o = "" + f;
        break;
      default:
        if (2 < o.length && (o[0] === "o" || o[0] === "O") && (o[1] === "n" || o[1] === "N") || !se(o))
          return;
        o = "" + f;
    }
    a.push(","), g = yn(g), a.push(g), a.push(","), g = yn(o), a.push(g);
  }
  function xl() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
  }
  function Ii(a) {
    var o = qn || null;
    if (o) {
      var f = o.resumableState, g = o.renderState;
      if (typeof a == "string" && a) {
        if (!f.dnsResources.hasOwnProperty(a)) {
          f.dnsResources[a] = null, f = g.headers;
          var T, x;
          (x = f && 0 < f.remainingCapacity) && (x = (T = "<" + ("" + a).replace(
            ao,
            Wa
          ) + ">; rel=dns-prefetch", 0 <= (f.remainingCapacity -= T.length + 2))), x ? (g.resets.dns[a] = null, f.preconnects && (f.preconnects += ", "), f.preconnects += T) : (T = [], Ln(T, { href: a, rel: "dns-prefetch" }), g.preconnects.add(T));
        }
        An(o);
      }
    } else dt.D(a);
  }
  function Mc(a, o) {
    var f = qn || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (typeof a == "string" && a) {
        var x = o === "use-credentials" ? "credentials" : typeof o == "string" ? "anonymous" : "default";
        if (!g.connectResources[x].hasOwnProperty(a)) {
          g.connectResources[x][a] = null, g = T.headers;
          var A, ne;
          if (ne = g && 0 < g.remainingCapacity) {
            if (ne = "<" + ("" + a).replace(
              ao,
              Wa
            ) + ">; rel=preconnect", typeof o == "string") {
              var J = ("" + o).replace(
                Di,
                Na
              );
              ne += '; crossorigin="' + J + '"';
            }
            ne = (A = ne, 0 <= (g.remainingCapacity -= A.length + 2));
          }
          ne ? (T.resets.connect[x][a] = null, g.preconnects && (g.preconnects += ", "), g.preconnects += A) : (x = [], Ln(x, {
            rel: "preconnect",
            href: a,
            crossOrigin: o
          }), T.preconnects.add(x));
        }
        An(f);
      }
    } else dt.C(a, o);
  }
  function El(a, o, f) {
    var g = qn || null;
    if (g) {
      var T = g.resumableState, x = g.renderState;
      if (o && a) {
        switch (o) {
          case "image":
            if (f)
              var A = f.imageSrcSet, ne = f.imageSizes, J = f.fetchPriority;
            var ie = A ? A + `
` + (ne || "") : a;
            if (T.imageResources.hasOwnProperty(ie)) return;
            T.imageResources[ie] = It, T = x.headers;
            var Be;
            T && 0 < T.remainingCapacity && typeof A != "string" && J === "high" && (Be = Fr(a, o, f), 0 <= (T.remainingCapacity -= Be.length + 2)) ? (x.resets.image[ie] = It, T.highImagePreloads && (T.highImagePreloads += ", "), T.highImagePreloads += Be) : (T = [], Ln(
              T,
              it(
                { rel: "preload", href: A ? void 0 : a, as: o },
                f
              )
            ), J === "high" ? x.highImagePreloads.add(T) : (x.bulkPreloads.add(T), x.preloads.images.set(ie, T)));
            break;
          case "style":
            if (T.styleResources.hasOwnProperty(a)) return;
            A = [], Ln(
              A,
              it({ rel: "preload", href: a, as: o }, f)
            ), T.styleResources[a] = !f || typeof f.crossOrigin != "string" && typeof f.integrity != "string" ? It : [f.crossOrigin, f.integrity], x.preloads.stylesheets.set(a, A), x.bulkPreloads.add(A);
            break;
          case "script":
            if (T.scriptResources.hasOwnProperty(a)) return;
            A = [], x.preloads.scripts.set(a, A), x.bulkPreloads.add(A), Ln(
              A,
              it({ rel: "preload", href: a, as: o }, f)
            ), T.scriptResources[a] = !f || typeof f.crossOrigin != "string" && typeof f.integrity != "string" ? It : [f.crossOrigin, f.integrity];
            break;
          default:
            if (T.unknownResources.hasOwnProperty(o)) {
              if (A = T.unknownResources[o], A.hasOwnProperty(a))
                return;
            } else
              A = {}, T.unknownResources[o] = A;
            if (A[a] = It, (T = x.headers) && 0 < T.remainingCapacity && o === "font" && (ie = Fr(a, o, f), 0 <= (T.remainingCapacity -= ie.length + 2)))
              x.resets.font[a] = It, T.fontPreloads && (T.fontPreloads += ", "), T.fontPreloads += ie;
            else
              switch (T = [], a = it({ rel: "preload", href: a, as: o }, f), Ln(T, a), o) {
                case "font":
                  x.fontPreloads.add(T);
                  break;
                default:
                  x.bulkPreloads.add(T);
              }
        }
        An(g);
      }
    } else dt.L(a, o, f);
  }
  function Oc(a, o) {
    var f = qn || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (a) {
        var x = o && typeof o.as == "string" ? o.as : "script";
        switch (x) {
          case "script":
            if (g.moduleScriptResources.hasOwnProperty(a)) return;
            x = [], g.moduleScriptResources[a] = !o || typeof o.crossOrigin != "string" && typeof o.integrity != "string" ? It : [o.crossOrigin, o.integrity], T.preloads.moduleScripts.set(a, x);
            break;
          default:
            if (g.moduleUnknownResources.hasOwnProperty(x)) {
              var A = g.unknownResources[x];
              if (A.hasOwnProperty(a)) return;
            } else
              A = {}, g.moduleUnknownResources[x] = A;
            x = [], A[a] = It;
        }
        Ln(x, it({ rel: "modulepreload", href: a }, o)), T.bulkPreloads.add(x), An(f);
      }
    } else dt.m(a, o);
  }
  function mi(a, o, f) {
    var g = qn || null;
    if (g) {
      var T = g.resumableState, x = g.renderState;
      if (a) {
        o = o || "default";
        var A = x.styles.get(o), ne = T.styleResources.hasOwnProperty(a) ? T.styleResources[a] : void 0;
        ne !== null && (T.styleResources[a] = null, A || (A = {
          precedence: P(o),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, x.styles.set(o, A)), o = {
          state: 0,
          props: it(
            { rel: "stylesheet", href: a, "data-precedence": o },
            f
          )
        }, ne && (ne.length === 2 && yi(o.props, ne), (x = x.preloads.stylesheets.get(a)) && 0 < x.length ? x.length = 0 : o.state = 1), A.sheets.set(a, o), An(g));
      }
    } else dt.S(a, o, f);
  }
  function Zn(a, o) {
    var f = qn || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (a) {
        var x = g.scriptResources.hasOwnProperty(a) ? g.scriptResources[a] : void 0;
        x !== null && (g.scriptResources[a] = null, o = it({ src: a, async: !0 }, o), x && (x.length === 2 && yi(o, x), a = T.preloads.scripts.get(a)) && (a.length = 0), a = [], T.scripts.add(a), sa(a, o), An(f));
      }
    } else dt.X(a, o);
  }
  function Iu(a, o) {
    var f = qn || null;
    if (f) {
      var g = f.resumableState, T = f.renderState;
      if (a) {
        var x = g.moduleScriptResources.hasOwnProperty(
          a
        ) ? g.moduleScriptResources[a] : void 0;
        x !== null && (g.moduleScriptResources[a] = null, o = it({ src: a, type: "module", async: !0 }, o), x && (x.length === 2 && yi(o, x), a = T.preloads.moduleScripts.get(a)) && (a.length = 0), a = [], T.scripts.add(a), sa(a, o), An(f));
      }
    } else dt.M(a, o);
  }
  function yi(a, o) {
    a.crossOrigin == null && (a.crossOrigin = o[0]), a.integrity == null && (a.integrity = o[1]);
  }
  function Fr(a, o, f) {
    a = ("" + a).replace(
      ao,
      Wa
    ), o = ("" + o).replace(
      Di,
      Na
    ), o = "<" + a + '>; rel=preload; as="' + o + '"';
    for (var g in f)
      $e.call(f, g) && (a = f[g], typeof a == "string" && (o += "; " + g.toLowerCase() + '="' + ("" + a).replace(
        Di,
        Na
      ) + '"'));
    return o;
  }
  var ao = /[<>\r\n]/g;
  function Wa(a) {
    switch (a) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var Di = /["';,\r\n]/g;
  function Na(a) {
    switch (a) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function mu(a) {
    this.styles.add(a);
  }
  function _c(a) {
    this.stylesheets.add(a);
  }
  function fa(a, o) {
    var f = a.idPrefix, g = [], T = a.bootstrapScriptContent, x = a.bootstrapScripts, A = a.bootstrapModules;
    T !== void 0 && g.push(
      "<script>",
      ("" + T).replace(S, M),
      "<\/script>"
    ), T = f + "P:";
    var ne = f + "S:";
    f += "B:";
    var J = we(), ie = /* @__PURE__ */ new Set(), Be = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set(), Le = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Set(), tt = /* @__PURE__ */ new Set(), ze = /* @__PURE__ */ new Set(), bt = {
      images: /* @__PURE__ */ new Map(),
      stylesheets: /* @__PURE__ */ new Map(),
      scripts: /* @__PURE__ */ new Map(),
      moduleScripts: /* @__PURE__ */ new Map()
    };
    if (x !== void 0)
      for (var St = 0; St < x.length; St++) {
        var Rt = x[St], Nt, Ue = void 0, ft = void 0, rt = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: void 0
        };
        typeof Rt == "string" ? rt.href = Nt = Rt : (rt.href = Nt = Rt.src, rt.integrity = ft = typeof Rt.integrity == "string" ? Rt.integrity : void 0, rt.crossOrigin = Ue = typeof Rt == "string" || Rt.crossOrigin == null ? void 0 : Rt.crossOrigin === "use-credentials" ? "use-credentials" : ""), Rt = a;
        var Mn = Nt;
        Rt.scriptResources[Mn] = null, Rt.moduleScriptResources[Mn] = null, Rt = [], Ln(Rt, rt), Ne.add(Rt), g.push('<script src="', P(Nt)), typeof ft == "string" && g.push('" integrity="', P(ft)), typeof Ue == "string" && g.push(
          '" crossorigin="',
          P(Ue)
        ), g.push('" async=""><\/script>');
      }
    if (A !== void 0)
      for (x = 0; x < A.length; x++)
        rt = A[x], Ue = Nt = void 0, ft = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: void 0
        }, typeof rt == "string" ? ft.href = St = rt : (ft.href = St = rt.src, ft.integrity = Ue = typeof rt.integrity == "string" ? rt.integrity : void 0, ft.crossOrigin = Nt = typeof rt == "string" || rt.crossOrigin == null ? void 0 : rt.crossOrigin === "use-credentials" ? "use-credentials" : ""), rt = a, Rt = St, rt.scriptResources[Rt] = null, rt.moduleScriptResources[Rt] = null, rt = [], Ln(rt, ft), Ne.add(rt), g.push(
          '<script type="module" src="',
          P(St)
        ), typeof Ue == "string" && g.push(
          '" integrity="',
          P(Ue)
        ), typeof Nt == "string" && g.push('" crossorigin="', P(Nt)), g.push('" async=""><\/script>');
    return {
      placeholderPrefix: T,
      segmentPrefix: ne,
      boundaryPrefix: f,
      startInlineScript: "<script>",
      preamble: J,
      externalRuntimeScript: null,
      bootstrapChunks: g,
      importMapChunks: [],
      onHeaders: void 0,
      headers: null,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: ie,
      fontPreloads: Be,
      highImagePreloads: ke,
      styles: Le,
      bootstrapScripts: Ne,
      scripts: tt,
      bulkPreloads: ze,
      preloads: bt,
      stylesToHoist: !1,
      generateStaticMarkup: o
    };
  }
  function Jt(a, o, f, g) {
    return f.generateStaticMarkup ? (a.push(P(o)), !1) : (o === "" ? a = g : (g && a.push("<!-- -->"), a.push(P(o)), a = !0), a);
  }
  function Uo(a, o, f, g) {
    o.generateStaticMarkup || f && g && a.push("<!-- -->");
  }
  var uc = Function.prototype.bind, lo = Symbol.for("react.client.reference");
  function or(a) {
    if (a == null) return null;
    if (typeof a == "function")
      return a.$$typeof === lo ? null : a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Z:
        return "Fragment";
      case C:
        return "Profiler";
      case Y:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case G:
        return "SuspenseList";
      case he:
        return "Activity";
    }
    if (typeof a == "object")
      switch (a.$$typeof) {
        case oe:
          return "Portal";
        case k:
          return (a.displayName || "Context") + ".Provider";
        case ue:
          return (a._context.displayName || "Context") + ".Consumer";
        case B:
          var o = a.render;
          return a = a.displayName, a || (a = o.displayName || o.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
        case U:
          return o = a.displayName || null, o !== null ? o : or(a.type) || "Memo";
        case fe:
          o = a._payload, a = a._init;
          try {
            return or(a(o));
          } catch {
          }
      }
    return null;
  }
  var cc = {}, Ha = null;
  function ni(a, o) {
    if (a !== o) {
      a.context._currentValue2 = a.parentValue, a = a.parent;
      var f = o.parent;
      if (a === null) {
        if (f !== null) throw Error(F(401));
      } else {
        if (f === null) throw Error(F(401));
        ni(a, f);
      }
      o.context._currentValue2 = o.value;
    }
  }
  function ha(a) {
    a.context._currentValue2 = a.parentValue, a = a.parent, a !== null && ha(a);
  }
  function kl(a) {
    var o = a.parent;
    o !== null && kl(o), a.context._currentValue2 = a.value;
  }
  function Yo(a, o) {
    if (a.context._currentValue2 = a.parentValue, a = a.parent, a === null) throw Error(F(402));
    a.depth === o.depth ? ni(a, o) : Yo(a, o);
  }
  function Cl(a, o) {
    var f = o.parent;
    if (f === null) throw Error(F(402));
    a.depth === f.depth ? ni(a, f) : Cl(a, f), o.context._currentValue2 = o.value;
  }
  function Gr(a) {
    var o = Ha;
    o !== a && (o === null ? kl(a) : a === null ? ha(o) : o.depth === a.depth ? ni(o, a) : o.depth > a.depth ? Yo(o, a) : Cl(o, a), Ha = a);
  }
  var za = {
    enqueueSetState: function(a, o) {
      a = a._reactInternals, a.queue !== null && a.queue.push(o);
    },
    enqueueReplaceState: function(a, o) {
      a = a._reactInternals, a.replace = !0, a.queue = [o];
    },
    enqueueForceUpdate: function() {
    }
  }, Sl = { id: 1, overflow: "" };
  function da(a, o, f) {
    var g = a.id;
    a = a.overflow;
    var T = 32 - Li(g) - 1;
    g &= ~(1 << T), f += 1;
    var x = 32 - Li(o) + T;
    if (30 < x) {
      var A = T - T % 5;
      return x = (g & (1 << A) - 1).toString(32), g >>= A, T -= A, {
        id: 1 << 32 - Li(o) + T | f << T | g,
        overflow: x + a
      };
    }
    return {
      id: 1 << x | f << T | g,
      overflow: a
    };
  }
  var Li = Math.clz32 ? Math.clz32 : sc, Qn = Math.log, Bi = Math.LN2;
  function sc(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Qn(a) / Bi | 0) | 0;
  }
  var Xr = Error(F(460));
  function ga() {
  }
  function oo(a, o, f) {
    switch (f = a[f], f === void 0 ? a.push(o) : f !== o && (o.then(ga, ga), o = f), o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(ga, ga) : (a = o, a.status = "pending", a.then(
          function(g) {
            if (o.status === "pending") {
              var T = o;
              T.status = "fulfilled", T.value = g;
            }
          },
          function(g) {
            if (o.status === "pending") {
              var T = o;
              T.status = "rejected", T.reason = g;
            }
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
        throw Wi = o, Xr;
    }
  }
  var Wi = null;
  function on() {
    if (Wi === null) throw Error(F(459));
    var a = Wi;
    return Wi = null, a;
  }
  function Ua(a, o) {
    return a === o && (a !== 0 || 1 / a === 1 / o) || a !== a && o !== o;
  }
  var Tr = typeof Object.is == "function" ? Object.is : Ua, pr = null, Go = null, Xo = null, Jn = null, uo = null, kt = null, Vn = !1, Ya = !1, va = 0, Ni = 0, Hi = -1, Pl = 0, Kn = null, zi = null, ba = 0;
  function Ar() {
    if (pr === null)
      throw Error(F(321));
    return pr;
  }
  function Fl() {
    if (0 < ba) throw Error(F(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ya() {
    return kt === null ? uo === null ? (Vn = !1, uo = kt = Fl()) : (Vn = !0, kt = uo) : kt.next === null ? (Vn = !1, kt = kt.next = Fl()) : (Vn = !0, kt = kt.next), kt;
  }
  function wi() {
    var a = Kn;
    return Kn = null, a;
  }
  function Ui() {
    Jn = Xo = Go = pr = null, Ya = !1, uo = null, ba = 0, kt = zi = null;
  }
  function Zo(a, o) {
    return typeof o == "function" ? o(a) : o;
  }
  function Al(a, o, f) {
    if (pr = Ar(), kt = ya(), Vn) {
      var g = kt.queue;
      if (o = g.dispatch, zi !== null && (f = zi.get(g), f !== void 0)) {
        zi.delete(g), g = kt.memoizedState;
        do
          g = a(g, f.action), f = f.next;
        while (f !== null);
        return kt.memoizedState = g, [g, o];
      }
      return [kt.memoizedState, o];
    }
    return a = a === Zo ? typeof o == "function" ? o() : o : f !== void 0 ? f(o) : o, kt.memoizedState = a, a = kt.queue = { last: null, dispatch: null }, a = a.dispatch = Ga.bind(
      null,
      pr,
      a
    ), [kt.memoizedState, a];
  }
  function Du(a, o) {
    if (pr = Ar(), kt = ya(), o = o === void 0 ? null : o, kt !== null) {
      var f = kt.memoizedState;
      if (f !== null && o !== null) {
        var g = f[1];
        e: if (g === null) g = !1;
        else {
          for (var T = 0; T < g.length && T < o.length; T++)
            if (!Tr(o[T], g[T])) {
              g = !1;
              break e;
            }
          g = !0;
        }
        if (g) return f[0];
      }
    }
    return a = a(), kt.memoizedState = [a, o], a;
  }
  function Ga(a, o, f) {
    if (25 <= ba) throw Error(F(301));
    if (a === pr)
      if (Ya = !0, a = { action: f, next: null }, zi === null && (zi = /* @__PURE__ */ new Map()), f = zi.get(o), f === void 0)
        zi.set(o, a);
      else {
        for (o = f; o.next !== null; ) o = o.next;
        o.next = a;
      }
  }
  function Qo() {
    throw Error(F(394));
  }
  function Lu() {
    throw Error(F(479));
  }
  function co(a, o, f) {
    Ar();
    var g = Ni++, T = Xo;
    if (typeof a.$$FORM_ACTION == "function") {
      var x = null, A = Jn;
      T = T.formState;
      var ne = a.$$IS_SIGNATURE_EQUAL;
      if (T !== null && typeof ne == "function") {
        var J = T[1];
        ne.call(a, T[2], T[3]) && (x = f !== void 0 ? "p" + f : "k" + Ve(
          JSON.stringify([A, null, g]),
          0
        ), J === x && (Hi = g, o = T[0]));
      }
      var ie = a.bind(null, o);
      return a = function(ke) {
        ie(ke);
      }, typeof ie.$$FORM_ACTION == "function" && (a.$$FORM_ACTION = function(ke) {
        ke = ie.$$FORM_ACTION(ke), f !== void 0 && (f += "", ke.action = f);
        var Le = ke.data;
        return Le && (x === null && (x = f !== void 0 ? "p" + f : "k" + Ve(
          JSON.stringify([
            A,
            null,
            g
          ]),
          0
        )), Le.append("$ACTION_KEY", x)), ke;
      }), [o, a, !1];
    }
    var Be = a.bind(null, o);
    return [
      o,
      function(ke) {
        Be(ke);
      },
      !1
    ];
  }
  function Jo(a) {
    var o = Pl;
    return Pl += 1, Kn === null && (Kn = []), oo(Kn, a, o);
  }
  function fc() {
    throw Error(F(393));
  }
  function so() {
  }
  var Xa = {
    readContext: function(a) {
      return a._currentValue2;
    },
    use: function(a) {
      if (a !== null && typeof a == "object") {
        if (typeof a.then == "function") return Jo(a);
        if (a.$$typeof === k)
          return a._currentValue2;
      }
      throw Error(F(438, String(a)));
    },
    useContext: function(a) {
      return Ar(), a._currentValue2;
    },
    useMemo: Du,
    useReducer: Al,
    useRef: function(a) {
      pr = Ar(), kt = ya();
      var o = kt.memoizedState;
      return o === null ? (a = { current: a }, kt.memoizedState = a) : o;
    },
    useState: function(a) {
      return Al(Zo, a);
    },
    useInsertionEffect: so,
    useLayoutEffect: so,
    useCallback: function(a, o) {
      return Du(function() {
        return a;
      }, o);
    },
    useImperativeHandle: so,
    useEffect: so,
    useDebugValue: so,
    useDeferredValue: function(a, o) {
      return Ar(), o !== void 0 ? o : a;
    },
    useTransition: function() {
      return Ar(), [!1, Qo];
    },
    useId: function() {
      var a = Go.treeContext, o = a.overflow;
      a = a.id, a = (a & ~(1 << 32 - Li(a) - 1)).toString(32) + o;
      var f = Ml;
      if (f === null) throw Error(F(404));
      return o = va++, a = "«" + f.idPrefix + "R" + a, 0 < o && (a += "H" + o.toString(32)), a + "»";
    },
    useSyncExternalStore: function(a, o, f) {
      if (f === void 0)
        throw Error(F(407));
      return f();
    },
    useOptimistic: function(a) {
      return Ar(), [a, Lu];
    },
    useActionState: co,
    useFormState: co,
    useHostTransitionStatus: function() {
      return Ar(), Qe;
    },
    useMemoCache: function(a) {
      for (var o = Array(a), f = 0; f < a; f++)
        o[f] = Ge;
      return o;
    },
    useCacheRefresh: function() {
      return fc;
    }
  }, Ml = null, Za = {
    getCacheForType: function() {
      throw Error(F(248));
    }
  }, Vo, Qa;
  function Ol(a) {
    if (Vo === void 0)
      try {
        throw Error();
      } catch (f) {
        var o = f.stack.trim().match(/\n( *(at )?)/);
        Vo = o && o[1] || "", Qa = -1 < f.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < f.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vo + a + Qa;
  }
  var _l = !1;
  function Ja(a, o) {
    if (!a || _l) return "";
    _l = !0;
    var f = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var g = {
        DetermineComponentFrameRoot: function() {
          try {
            if (o) {
              var ke = function() {
                throw Error();
              };
              if (Object.defineProperty(ke.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ke, []);
                } catch (Ne) {
                  var Le = Ne;
                }
                Reflect.construct(a, [], ke);
              } else {
                try {
                  ke.call();
                } catch (Ne) {
                  Le = Ne;
                }
                a.call(ke.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Ne) {
                Le = Ne;
              }
              (ke = a()) && typeof ke.catch == "function" && ke.catch(function() {
              });
            }
          } catch (Ne) {
            if (Ne && Le && typeof Ne.stack == "string")
              return [Ne.stack, Le.stack];
          }
          return [null, null];
        }
      };
      g.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var T = Object.getOwnPropertyDescriptor(
        g.DetermineComponentFrameRoot,
        "name"
      );
      T && T.configurable && Object.defineProperty(
        g.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var x = g.DetermineComponentFrameRoot(), A = x[0], ne = x[1];
      if (A && ne) {
        var J = A.split(`
`), ie = ne.split(`
`);
        for (T = g = 0; g < J.length && !J[g].includes("DetermineComponentFrameRoot"); )
          g++;
        for (; T < ie.length && !ie[T].includes(
          "DetermineComponentFrameRoot"
        ); )
          T++;
        if (g === J.length || T === ie.length)
          for (g = J.length - 1, T = ie.length - 1; 1 <= g && 0 <= T && J[g] !== ie[T]; )
            T--;
        for (; 1 <= g && 0 <= T; g--, T--)
          if (J[g] !== ie[T]) {
            if (g !== 1 || T !== 1)
              do
                if (g--, T--, 0 > T || J[g] !== ie[T]) {
                  var Be = `
` + J[g].replace(" at new ", " at ");
                  return a.displayName && Be.includes("<anonymous>") && (Be = Be.replace("<anonymous>", a.displayName)), Be;
                }
              while (1 <= g && 0 <= T);
            break;
          }
      }
    } finally {
      _l = !1, Error.prepareStackTrace = f;
    }
    return (f = a ? a.displayName || a.name : "") ? Ol(f) : "";
  }
  function Va(a) {
    if (typeof a == "string") return Ol(a);
    if (typeof a == "function")
      return a.prototype && a.prototype.isReactComponent ? Ja(a, !0) : Ja(a, !1);
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case B:
          return Ja(a.render, !1);
        case U:
          return Ja(a.type, !1);
        case fe:
          var o = a, f = o._payload;
          o = o._init;
          try {
            a = o(f);
          } catch {
            return Ol("Lazy");
          }
          return Va(a);
      }
      if (typeof a.name == "string")
        return f = a.env, Ol(
          a.name + (f ? " [" + f + "]" : "")
        );
    }
    switch (a) {
      case G:
        return Ol("SuspenseList");
      case Ie:
        return Ol("Suspense");
    }
    return "";
  }
  function Ti(a) {
    if (typeof a == "object" && a !== null && typeof a.environmentName == "string") {
      var o = a.environmentName;
      a = [a].slice(0), typeof a[0] == "string" ? a.splice(
        0,
        1,
        "[%s] " + a[0],
        " " + o + " "
      ) : a.splice(0, 0, "[%s] ", " " + o + " "), a.unshift(console), o = uc.apply(console.error, a), o();
    } else console.error(a);
    return null;
  }
  function Yi() {
  }
  function Ko(a, o, f, g, T, x, A, ne, J, ie, Be) {
    var ke = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = a, this.renderState = o, this.rootFormatContext = f, this.progressiveChunkSize = g === void 0 ? 12800 : g, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = ke, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = T === void 0 ? Ti : T, this.onPostpone = ie === void 0 ? Yi : ie, this.onAllReady = x === void 0 ? Yi : x, this.onShellReady = A === void 0 ? Yi : A, this.onShellError = ne === void 0 ? Yi : ne, this.onFatalError = J === void 0 ? Yi : J, this.formState = Be === void 0 ? null : Be;
  }
  function Il(a, o, f, g, T, x, A, ne, J, ie, Be, ke) {
    return o = new Ko(
      o,
      f,
      g,
      T,
      x,
      A,
      ne,
      J,
      ie,
      Be,
      ke
    ), f = Ri(
      o,
      0,
      null,
      g,
      !1,
      !1
    ), f.parentFlushed = !0, a = qa(
      o,
      null,
      a,
      -1,
      null,
      f,
      null,
      null,
      o.abortableTasks,
      null,
      g,
      null,
      Sl,
      null,
      !1
    ), Xt(a), o.pingedTasks.push(a), o;
  }
  var qn = null;
  function Ka(a, o) {
    a.pingedTasks.push(o), a.pingedTasks.length === 1 && (a.flushScheduled = a.destination !== null, hc(a));
  }
  function pi(a, o, f, g) {
    return {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: o,
      errorDigest: null,
      contentState: xl(),
      fallbackState: xl(),
      contentPreamble: f,
      fallbackPreamble: g,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    };
  }
  function qa(a, o, f, g, T, x, A, ne, J, ie, Be, ke, Le, Ne, tt) {
    a.allPendingTasks++, T === null ? a.pendingRootTasks++ : T.pendingTasks++;
    var ze = {
      replay: null,
      node: f,
      childIndex: g,
      ping: function() {
        return Ka(a, ze);
      },
      blockedBoundary: T,
      blockedSegment: x,
      blockedPreamble: A,
      hoistableState: ne,
      abortSet: J,
      keyPath: ie,
      formatContext: Be,
      context: ke,
      treeContext: Le,
      componentStack: Ne,
      thenableState: o,
      isFallback: tt
    };
    return J.add(ze), ze;
  }
  function fo(a, o, f, g, T, x, A, ne, J, ie, Be, ke, Le, Ne) {
    a.allPendingTasks++, x === null ? a.pendingRootTasks++ : x.pendingTasks++, f.pendingTasks++;
    var tt = {
      replay: f,
      node: g,
      childIndex: T,
      ping: function() {
        return Ka(a, tt);
      },
      blockedBoundary: x,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: A,
      abortSet: ne,
      keyPath: J,
      formatContext: ie,
      context: Be,
      treeContext: ke,
      componentStack: Le,
      thenableState: o,
      isFallback: Ne
    };
    return ne.add(tt), tt;
  }
  function Ri(a, o, f, g, T, x) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: o,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: g,
      boundary: f,
      lastPushedText: T,
      textEmbedded: x
    };
  }
  function Xt(a) {
    var o = a.node;
    if (typeof o == "object" && o !== null)
      switch (o.$$typeof) {
        case ee:
          a.componentStack = { parent: a.componentStack, type: o.type };
      }
  }
  function wn(a) {
    var o = {};
    return a && Object.defineProperty(o, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var f = "", g = a;
          do
            f += Va(g.type), g = g.parent;
          while (g);
          var T = f;
        } catch (x) {
          T = `
Error generating stack: ` + x.message + `
` + x.stack;
        }
        return Object.defineProperty(o, "componentStack", {
          value: T
        }), T;
      }
    }), o;
  }
  function Mr(a, o, f) {
    if (a = a.onError, o = a(o, f), o == null || typeof o == "string") return o;
  }
  function ja(a, o) {
    var f = a.onShellError, g = a.onFatalError;
    f(o), g(o), a.destination !== null ? (a.status = 14, a.destination.destroy(o)) : (a.status = 13, a.fatalError = o);
  }
  function rn(a, o, f, g, T, x) {
    var A = o.thenableState;
    for (o.thenableState = null, pr = {}, Go = o, Xo = a, Jn = f, Ni = va = 0, Hi = -1, Pl = 0, Kn = A, a = g(T, x); Ya; )
      Ya = !1, Ni = va = 0, Hi = -1, Pl = 0, ba += 1, kt = null, a = g(T, x);
    return Ui(), a;
  }
  function Pt(a, o, f, g, T, x, A) {
    var ne = !1;
    if (x !== 0 && a.formState !== null) {
      var J = o.blockedSegment;
      if (J !== null) {
        ne = !0, J = J.chunks;
        for (var ie = 0; ie < x; ie++)
          ie === A ? J.push("<!--F!-->") : J.push("<!--F-->");
      }
    }
    x = o.keyPath, o.keyPath = f, T ? (f = o.treeContext, o.treeContext = da(f, 1, 0), Zr(a, o, g, -1), o.treeContext = f) : ne ? Zr(a, o, g, -1) : Fn(a, o, g, -1), o.keyPath = x;
  }
  function Bu(a, o, f, g, T, x) {
    if (typeof g == "function")
      if (g.prototype && g.prototype.isReactComponent) {
        var A = T;
        if ("ref" in T) {
          A = {};
          for (var ne in T)
            ne !== "ref" && (A[ne] = T[ne]);
        }
        var J = g.defaultProps;
        if (J) {
          A === T && (A = it({}, A, T));
          for (var ie in J)
            A[ie] === void 0 && (A[ie] = J[ie]);
        }
        T = A, A = cc, J = g.contextType, typeof J == "object" && J !== null && (A = J._currentValue2), A = new g(T, A);
        var Be = A.state !== void 0 ? A.state : null;
        if (A.updater = za, A.props = T, A.state = Be, J = { queue: [], replace: !1 }, A._reactInternals = J, x = g.contextType, A.context = typeof x == "object" && x !== null ? x._currentValue2 : cc, x = g.getDerivedStateFromProps, typeof x == "function" && (x = x(T, Be), Be = x == null ? Be : it({}, Be, x), A.state = Be), typeof g.getDerivedStateFromProps != "function" && typeof A.getSnapshotBeforeUpdate != "function" && (typeof A.UNSAFE_componentWillMount == "function" || typeof A.componentWillMount == "function"))
          if (g = A.state, typeof A.componentWillMount == "function" && A.componentWillMount(), typeof A.UNSAFE_componentWillMount == "function" && A.UNSAFE_componentWillMount(), g !== A.state && za.enqueueReplaceState(
            A,
            A.state,
            null
          ), J.queue !== null && 0 < J.queue.length)
            if (g = J.queue, x = J.replace, J.queue = null, J.replace = !1, x && g.length === 1)
              A.state = g[0];
            else {
              for (J = x ? g[0] : A.state, Be = !0, x = x ? 1 : 0; x < g.length; x++)
                ie = g[x], ie = typeof ie == "function" ? ie.call(A, J, T, void 0) : ie, ie != null && (Be ? (Be = !1, J = it({}, J, ie)) : it(J, ie));
              A.state = J;
            }
          else J.queue = null;
        if (g = A.render(), a.status === 12) throw null;
        T = o.keyPath, o.keyPath = f, Fn(a, o, g, -1), o.keyPath = T;
      } else {
        if (g = rn(a, o, f, g, T, void 0), a.status === 12) throw null;
        Pt(
          a,
          o,
          f,
          g,
          va !== 0,
          Ni,
          Hi
        );
      }
    else if (typeof g == "string")
      if (A = o.blockedSegment, A === null)
        A = T.children, J = o.formatContext, Be = o.keyPath, o.formatContext = Me(J, g, T), o.keyPath = f, Zr(a, o, A, -1), o.formatContext = J, o.keyPath = Be;
      else {
        x = Sr(
          A.chunks,
          g,
          T,
          a.resumableState,
          a.renderState,
          o.blockedPreamble,
          o.hoistableState,
          o.formatContext,
          A.lastPushedText,
          o.isFallback
        ), A.lastPushedText = !1, J = o.formatContext, Be = o.keyPath, o.keyPath = f, (o.formatContext = Me(J, g, T)).insertionMode === 3 ? (f = Ri(
          a,
          0,
          null,
          o.formatContext,
          !1,
          !1
        ), A.preambleChildren.push(f), f = qa(
          a,
          null,
          x,
          -1,
          o.blockedBoundary,
          f,
          o.blockedPreamble,
          o.hoistableState,
          a.abortableTasks,
          o.keyPath,
          o.formatContext,
          o.context,
          o.treeContext,
          o.componentStack,
          o.isFallback
        ), Xt(f), a.pingedTasks.push(f)) : Zr(a, o, x, -1), o.formatContext = J, o.keyPath = Be;
        e: {
          switch (o = A.chunks, a = a.resumableState, g) {
            case "title":
            case "style":
            case "script":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break e;
            case "body":
              if (1 >= J.insertionMode) {
                a.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (J.insertionMode === 0) {
                a.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= J.insertionMode) break e;
          }
          o.push(Da(g));
        }
        A.lastPushedText = !1;
      }
    else {
      switch (g) {
        case pe:
        case Y:
        case C:
        case Z:
          g = o.keyPath, o.keyPath = f, Fn(a, o, T.children, -1), o.keyPath = g;
          return;
        case he:
          T.mode !== "hidden" && (g = o.keyPath, o.keyPath = f, Fn(a, o, T.children, -1), o.keyPath = g);
          return;
        case G:
          g = o.keyPath, o.keyPath = f, Fn(a, o, T.children, -1), o.keyPath = g;
          return;
        case Re:
        case Et:
          throw Error(F(343));
        case Ie:
          e: if (o.replay !== null) {
            g = o.keyPath, o.keyPath = f, f = T.children;
            try {
              Zr(a, o, f, -1);
            } finally {
              o.keyPath = g;
            }
          } else {
            g = o.keyPath;
            var ke = o.blockedBoundary;
            x = o.blockedPreamble;
            var Le = o.hoistableState;
            ie = o.blockedSegment, ne = T.fallback, T = T.children;
            var Ne = /* @__PURE__ */ new Set(), tt = 2 > o.formatContext.insertionMode ? pi(
              a,
              Ne,
              we(),
              we()
            ) : pi(a, Ne, null, null);
            a.trackedPostpones !== null && (tt.trackedContentKeyPath = f);
            var ze = Ri(
              a,
              ie.chunks.length,
              tt,
              o.formatContext,
              !1,
              !1
            );
            ie.children.push(ze), ie.lastPushedText = !1;
            var bt = Ri(
              a,
              0,
              null,
              o.formatContext,
              !1,
              !1
            );
            if (bt.parentFlushed = !0, a.trackedPostpones !== null) {
              A = [f[0], "Suspense Fallback", f[2]], J = [A[1], A[2], [], null], a.trackedPostpones.workingMap.set(A, J), tt.trackedFallbackNode = J, o.blockedSegment = ze, o.blockedPreamble = tt.fallbackPreamble, o.keyPath = A, ze.status = 6;
              try {
                Zr(a, o, ne, -1), Uo(
                  ze.chunks,
                  a.renderState,
                  ze.lastPushedText,
                  ze.textEmbedded
                ), ze.status = 1;
              } catch (St) {
                throw ze.status = a.status === 12 ? 3 : 4, St;
              } finally {
                o.blockedSegment = ie, o.blockedPreamble = x, o.keyPath = g;
              }
              o = qa(
                a,
                null,
                T,
                -1,
                tt,
                bt,
                tt.contentPreamble,
                tt.contentState,
                o.abortSet,
                f,
                o.formatContext,
                o.context,
                o.treeContext,
                o.componentStack,
                o.isFallback
              ), Xt(o), a.pingedTasks.push(o);
            } else {
              o.blockedBoundary = tt, o.blockedPreamble = tt.contentPreamble, o.hoistableState = tt.contentState, o.blockedSegment = bt, o.keyPath = f, bt.status = 6;
              try {
                if (Zr(a, o, T, -1), Uo(
                  bt.chunks,
                  a.renderState,
                  bt.lastPushedText,
                  bt.textEmbedded
                ), bt.status = 1, $o(tt, bt), tt.pendingTasks === 0 && tt.status === 0) {
                  tt.status = 1, a.pendingRootTasks === 0 && o.blockedPreamble && wa(a);
                  break e;
                }
              } catch (St) {
                tt.status = 4, a.status === 12 ? (bt.status = 3, A = a.fatalError) : (bt.status = 4, A = St), J = wn(o.componentStack), Be = Mr(
                  a,
                  A,
                  J
                ), tt.errorDigest = Be, ho(a, tt);
              } finally {
                o.blockedBoundary = ke, o.blockedPreamble = x, o.hoistableState = Le, o.blockedSegment = ie, o.keyPath = g;
              }
              o = qa(
                a,
                null,
                ne,
                -1,
                ke,
                ze,
                tt.fallbackPreamble,
                tt.fallbackState,
                Ne,
                [f[0], "Suspense Fallback", f[2]],
                o.formatContext,
                o.context,
                o.treeContext,
                o.componentStack,
                !0
              ), Xt(o), a.pingedTasks.push(o);
            }
          }
          return;
      }
      if (typeof g == "object" && g !== null)
        switch (g.$$typeof) {
          case B:
            if ("ref" in T)
              for (tt in A = {}, T)
                tt !== "ref" && (A[tt] = T[tt]);
            else A = T;
            g = rn(
              a,
              o,
              f,
              g.render,
              A,
              x
            ), Pt(
              a,
              o,
              f,
              g,
              va !== 0,
              Ni,
              Hi
            );
            return;
          case U:
            Bu(a, o, f, g.type, T, x);
            return;
          case q:
          case k:
            if (J = T.children, A = o.keyPath, T = T.value, Be = g._currentValue2, g._currentValue2 = T, x = Ha, Ha = g = {
              parent: x,
              depth: x === null ? 0 : x.depth + 1,
              context: g,
              parentValue: Be,
              value: T
            }, o.context = g, o.keyPath = f, Fn(a, o, J, -1), a = Ha, a === null) throw Error(F(403));
            a.context._currentValue2 = a.parentValue, a = Ha = a.parent, o.context = a, o.keyPath = A;
            return;
          case ue:
            T = T.children, g = T(g._context._currentValue2), T = o.keyPath, o.keyPath = f, Fn(a, o, g, -1), o.keyPath = T;
            return;
          case fe:
            if (A = g._init, g = A(g._payload), a.status === 12) throw null;
            Bu(a, o, f, g, T, x);
            return;
        }
      throw Error(
        F(130, g == null ? g : typeof g, "")
      );
    }
  }
  function qo(a, o, f, g, T) {
    var x = o.replay, A = o.blockedBoundary, ne = Ri(
      a,
      0,
      null,
      o.formatContext,
      !1,
      !1
    );
    ne.id = f, ne.parentFlushed = !0;
    try {
      o.replay = null, o.blockedSegment = ne, Zr(a, o, g, T), ne.status = 1, A === null ? a.completedRootSegment = ne : ($o(A, ne), A.parentFlushed && a.partialBoundaries.push(A));
    } finally {
      o.replay = x, o.blockedSegment = null;
    }
  }
  function Fn(a, o, f, g) {
    o.replay !== null && typeof o.replay.slots == "number" ? qo(a, o, o.replay.slots, f, g) : (o.node = f, o.childIndex = g, f = o.componentStack, Xt(o), Wu(a, o), o.componentStack = f);
  }
  function Wu(a, o) {
    var f = o.node, g = o.childIndex;
    if (f !== null) {
      if (typeof f == "object") {
        switch (f.$$typeof) {
          case ee:
            var T = f.type, x = f.key, A = f.props;
            f = A.ref;
            var ne = f !== void 0 ? f : null, J = or(T), ie = x ?? (g === -1 ? 0 : g);
            if (x = [o.keyPath, J, ie], o.replay !== null)
              e: {
                var Be = o.replay;
                for (g = Be.nodes, f = 0; f < g.length; f++) {
                  var ke = g[f];
                  if (ie === ke[1]) {
                    if (ke.length === 4) {
                      if (J !== null && J !== ke[0])
                        throw Error(
                          F(490, ke[0], J)
                        );
                      var Le = ke[2];
                      J = ke[3], ie = o.node, o.replay = {
                        nodes: Le,
                        slots: J,
                        pendingTasks: 1
                      };
                      try {
                        if (Bu(a, o, x, T, A, ne), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
                          throw Error(F(488));
                        o.replay.pendingTasks--;
                      } catch (Ue) {
                        if (typeof Ue == "object" && Ue !== null && (Ue === Xr || typeof Ue.then == "function"))
                          throw o.node === ie && (o.replay = Be), Ue;
                        o.replay.pendingTasks--, A = wn(o.componentStack), x = o.blockedBoundary, T = Ue, A = Mr(a, T, A), Wn(
                          a,
                          x,
                          Le,
                          J,
                          T,
                          A
                        );
                      }
                      o.replay = Be;
                    } else {
                      if (T !== Ie)
                        throw Error(
                          F(
                            490,
                            "Suspense",
                            or(T) || "Unknown"
                          )
                        );
                      t: {
                        Be = void 0, T = ke[5], ne = ke[2], J = ke[3], ie = ke[4] === null ? [] : ke[4][2], ke = ke[4] === null ? null : ke[4][3];
                        var Ne = o.keyPath, tt = o.replay, ze = o.blockedBoundary, bt = o.hoistableState, St = A.children, Rt = A.fallback, Nt = /* @__PURE__ */ new Set();
                        A = 2 > o.formatContext.insertionMode ? pi(
                          a,
                          Nt,
                          we(),
                          we()
                        ) : pi(
                          a,
                          Nt,
                          null,
                          null
                        ), A.parentFlushed = !0, A.rootSegmentID = T, o.blockedBoundary = A, o.hoistableState = A.contentState, o.keyPath = x, o.replay = {
                          nodes: ne,
                          slots: J,
                          pendingTasks: 1
                        };
                        try {
                          if (Zr(a, o, St, -1), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
                            throw Error(F(488));
                          if (o.replay.pendingTasks--, A.pendingTasks === 0 && A.status === 0) {
                            A.status = 1, a.completedBoundaries.push(A);
                            break t;
                          }
                        } catch (Ue) {
                          A.status = 4, Le = wn(o.componentStack), Be = Mr(
                            a,
                            Ue,
                            Le
                          ), A.errorDigest = Be, o.replay.pendingTasks--, a.clientRenderedBoundaries.push(A);
                        } finally {
                          o.blockedBoundary = ze, o.hoistableState = bt, o.replay = tt, o.keyPath = Ne;
                        }
                        o = fo(
                          a,
                          null,
                          {
                            nodes: ie,
                            slots: ke,
                            pendingTasks: 0
                          },
                          Rt,
                          -1,
                          ze,
                          A.fallbackState,
                          Nt,
                          [x[0], "Suspense Fallback", x[2]],
                          o.formatContext,
                          o.context,
                          o.treeContext,
                          o.componentStack,
                          !0
                        ), Xt(o), a.pingedTasks.push(o);
                      }
                    }
                    g.splice(f, 1);
                    break e;
                  }
                }
              }
            else Bu(a, o, x, T, A, ne);
            return;
          case oe:
            throw Error(F(257));
          case fe:
            if (Le = f._init, f = Le(f._payload), a.status === 12) throw null;
            Fn(a, o, f, g);
            return;
        }
        if (Ae(f)) {
          Nu(a, o, f, g);
          return;
        }
        if (f === null || typeof f != "object" ? Le = null : (Le = j && f[j] || f["@@iterator"], Le = typeof Le == "function" ? Le : null), Le && (Le = Le.call(f))) {
          if (f = Le.next(), !f.done) {
            A = [];
            do
              A.push(f.value), f = Le.next();
            while (!f.done);
            Nu(a, o, A, g);
          }
          return;
        }
        if (typeof f.then == "function")
          return o.thenableState = null, Fn(a, o, Jo(f), g);
        if (f.$$typeof === k)
          return Fn(
            a,
            o,
            f._currentValue2,
            g
          );
        throw g = Object.prototype.toString.call(f), Error(
          F(
            31,
            g === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : g
          )
        );
      }
      typeof f == "string" ? (g = o.blockedSegment, g !== null && (g.lastPushedText = Jt(
        g.chunks,
        f,
        a.renderState,
        g.lastPushedText
      ))) : (typeof f == "number" || typeof f == "bigint") && (g = o.blockedSegment, g !== null && (g.lastPushedText = Jt(
        g.chunks,
        "" + f,
        a.renderState,
        g.lastPushedText
      )));
    }
  }
  function Nu(a, o, f, g) {
    var T = o.keyPath;
    if (g !== -1 && (o.keyPath = [o.keyPath, "Fragment", g], o.replay !== null)) {
      for (var x = o.replay, A = x.nodes, ne = 0; ne < A.length; ne++) {
        var J = A[ne];
        if (J[1] === g) {
          g = J[2], J = J[3], o.replay = { nodes: g, slots: J, pendingTasks: 1 };
          try {
            if (Nu(a, o, f, -1), o.replay.pendingTasks === 1 && 0 < o.replay.nodes.length)
              throw Error(F(488));
            o.replay.pendingTasks--;
          } catch (ke) {
            if (typeof ke == "object" && ke !== null && (ke === Xr || typeof ke.then == "function"))
              throw ke;
            o.replay.pendingTasks--, f = wn(o.componentStack);
            var ie = o.blockedBoundary, Be = ke;
            f = Mr(a, Be, f), Wn(
              a,
              ie,
              g,
              J,
              Be,
              f
            );
          }
          o.replay = x, A.splice(ne, 1);
          break;
        }
      }
      o.keyPath = T;
      return;
    }
    if (x = o.treeContext, A = f.length, o.replay !== null && (ne = o.replay.slots, ne !== null && typeof ne == "object")) {
      for (g = 0; g < A; g++)
        J = f[g], o.treeContext = da(x, A, g), ie = ne[g], typeof ie == "number" ? (qo(a, o, ie, J, g), delete ne[g]) : Zr(a, o, J, g);
      o.treeContext = x, o.keyPath = T;
      return;
    }
    for (ne = 0; ne < A; ne++)
      g = f[ne], o.treeContext = da(x, A, ne), Zr(a, o, g, ne);
    o.treeContext = x, o.keyPath = T;
  }
  function ho(a, o) {
    a = a.trackedPostpones, a !== null && (o = o.trackedContentKeyPath, o !== null && (o = a.workingMap.get(o), o !== void 0 && (o.length = 4, o[2] = [], o[3] = null)));
  }
  function jo(a, o, f) {
    return fo(
      a,
      f,
      o.replay,
      o.node,
      o.childIndex,
      o.blockedBoundary,
      o.hoistableState,
      o.abortSet,
      o.keyPath,
      o.formatContext,
      o.context,
      o.treeContext,
      o.componentStack,
      o.isFallback
    );
  }
  function Gi(a, o, f) {
    var g = o.blockedSegment, T = Ri(
      a,
      g.chunks.length,
      null,
      o.formatContext,
      g.lastPushedText,
      !0
    );
    return g.children.push(T), g.lastPushedText = !1, qa(
      a,
      f,
      o.node,
      o.childIndex,
      o.blockedBoundary,
      T,
      o.blockedPreamble,
      o.hoistableState,
      o.abortSet,
      o.keyPath,
      o.formatContext,
      o.context,
      o.treeContext,
      o.componentStack,
      o.isFallback
    );
  }
  function Zr(a, o, f, g) {
    var T = o.formatContext, x = o.context, A = o.keyPath, ne = o.treeContext, J = o.componentStack, ie = o.blockedSegment;
    if (ie === null)
      try {
        return Fn(a, o, f, g);
      } catch (Le) {
        if (Ui(), f = Le === Xr ? on() : Le, typeof f == "object" && f !== null) {
          if (typeof f.then == "function") {
            g = wi(), a = jo(a, o, g).ping, f.then(a, a), o.formatContext = T, o.context = x, o.keyPath = A, o.treeContext = ne, o.componentStack = J, Gr(x);
            return;
          }
          if (f.message === "Maximum call stack size exceeded") {
            f = wi(), f = jo(a, o, f), a.pingedTasks.push(f), o.formatContext = T, o.context = x, o.keyPath = A, o.treeContext = ne, o.componentStack = J, Gr(x);
            return;
          }
        }
      }
    else {
      var Be = ie.children.length, ke = ie.chunks.length;
      try {
        return Fn(a, o, f, g);
      } catch (Le) {
        if (Ui(), ie.children.length = Be, ie.chunks.length = ke, f = Le === Xr ? on() : Le, typeof f == "object" && f !== null) {
          if (typeof f.then == "function") {
            g = wi(), a = Gi(a, o, g).ping, f.then(a, a), o.formatContext = T, o.context = x, o.keyPath = A, o.treeContext = ne, o.componentStack = J, Gr(x);
            return;
          }
          if (f.message === "Maximum call stack size exceeded") {
            f = wi(), f = Gi(a, o, f), a.pingedTasks.push(f), o.formatContext = T, o.context = x, o.keyPath = A, o.treeContext = ne, o.componentStack = J, Gr(x);
            return;
          }
        }
      }
    }
    throw o.formatContext = T, o.context = x, o.keyPath = A, o.treeContext = ne, Gr(x), f;
  }
  function Ic(a) {
    var o = a.blockedBoundary;
    a = a.blockedSegment, a !== null && (a.status = 3, Hu(this, o, a));
  }
  function Wn(a, o, f, g, T, x) {
    for (var A = 0; A < f.length; A++) {
      var ne = f[A];
      if (ne.length === 4)
        Wn(
          a,
          o,
          ne[2],
          ne[3],
          T,
          x
        );
      else {
        ne = ne[5];
        var J = a, ie = x, Be = pi(
          J,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        Be.parentFlushed = !0, Be.rootSegmentID = ne, Be.status = 4, Be.errorDigest = ie, Be.parentFlushed && J.clientRenderedBoundaries.push(Be);
      }
    }
    if (f.length = 0, g !== null) {
      if (o === null) throw Error(F(487));
      if (o.status !== 4 && (o.status = 4, o.errorDigest = x, o.parentFlushed && a.clientRenderedBoundaries.push(o)), typeof g == "object") for (var ke in g) delete g[ke];
    }
  }
  function ur(a, o, f) {
    var g = a.blockedBoundary, T = a.blockedSegment;
    if (T !== null) {
      if (T.status === 6) return;
      T.status = 3;
    }
    if (T = wn(a.componentStack), g === null) {
      if (o.status !== 13 && o.status !== 14) {
        if (g = a.replay, g === null) {
          Mr(o, f, T), ja(o, f);
          return;
        }
        g.pendingTasks--, g.pendingTasks === 0 && 0 < g.nodes.length && (a = Mr(o, f, T), Wn(
          o,
          null,
          g.nodes,
          g.slots,
          f,
          a
        )), o.pendingRootTasks--, o.pendingRootTasks === 0 && Kt(o);
      }
    } else
      g.pendingTasks--, g.status !== 4 && (g.status = 4, a = Mr(o, f, T), g.status = 4, g.errorDigest = a, ho(o, g), g.parentFlushed && o.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(x) {
        return ur(x, o, f);
      }), g.fallbackAbortableTasks.clear();
    o.allPendingTasks--, o.allPendingTasks === 0 && Ct(o);
  }
  function cr(a, o) {
    try {
      var f = a.renderState, g = f.onHeaders;
      if (g) {
        var T = f.headers;
        if (T) {
          f.headers = null;
          var x = T.preconnects;
          if (T.fontPreloads && (x && (x += ", "), x += T.fontPreloads), T.highImagePreloads && (x && (x += ", "), x += T.highImagePreloads), !o) {
            var A = f.styles.values(), ne = A.next();
            e: for (; 0 < T.remainingCapacity && !ne.done; ne = A.next())
              for (var J = ne.value.sheets.values(), ie = J.next(); 0 < T.remainingCapacity && !ie.done; ie = J.next()) {
                var Be = ie.value, ke = Be.props, Le = ke.href, Ne = Be.props, tt = Fr(Ne.href, "style", {
                  crossOrigin: Ne.crossOrigin,
                  integrity: Ne.integrity,
                  nonce: Ne.nonce,
                  type: Ne.type,
                  fetchPriority: Ne.fetchPriority,
                  referrerPolicy: Ne.referrerPolicy,
                  media: Ne.media
                });
                if (0 <= (T.remainingCapacity -= tt.length + 2))
                  f.resets.style[Le] = It, x && (x += ", "), x += tt, f.resets.style[Le] = typeof ke.crossOrigin == "string" || typeof ke.integrity == "string" ? [ke.crossOrigin, ke.integrity] : It;
                else break e;
              }
          }
          g(x ? { Link: x } : {});
        }
      }
    } catch (ze) {
      Mr(a, ze, {});
    }
  }
  function Kt(a) {
    a.trackedPostpones === null && cr(a, !0), a.trackedPostpones === null && wa(a), a.onShellError = Yi, a = a.onShellReady, a();
  }
  function Ct(a) {
    cr(
      a,
      a.trackedPostpones === null ? !0 : a.completedRootSegment === null || a.completedRootSegment.status !== 5
    ), wa(a), a = a.onAllReady, a();
  }
  function $o(a, o) {
    if (o.chunks.length === 0 && o.children.length === 1 && o.children[0].boundary === null && o.children[0].id === -1) {
      var f = o.children[0];
      f.id = o.id, f.parentFlushed = !0, f.status === 1 && $o(a, f);
    } else a.completedSegments.push(o);
  }
  function Hu(a, o, f) {
    if (o === null) {
      if (f !== null && f.parentFlushed) {
        if (a.completedRootSegment !== null)
          throw Error(F(389));
        a.completedRootSegment = f;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && Kt(a);
    } else
      o.pendingTasks--, o.status !== 4 && (o.pendingTasks === 0 ? (o.status === 0 && (o.status = 1), f !== null && f.parentFlushed && f.status === 1 && $o(o, f), o.parentFlushed && a.completedBoundaries.push(o), o.status === 1 && (o.fallbackAbortableTasks.forEach(Ic, a), o.fallbackAbortableTasks.clear(), a.pendingRootTasks === 0 && a.trackedPostpones === null && o.contentPreamble !== null && wa(a))) : f !== null && f.parentFlushed && f.status === 1 && ($o(o, f), o.completedSegments.length === 1 && o.parentFlushed && a.partialBoundaries.push(o)));
    a.allPendingTasks--, a.allPendingTasks === 0 && Ct(a);
  }
  function hc(a) {
    if (a.status !== 14 && a.status !== 13) {
      var o = Ha, f = nt.H;
      nt.H = Xa;
      var g = nt.A;
      nt.A = Za;
      var T = qn;
      qn = a;
      var x = Ml;
      Ml = a.resumableState;
      try {
        var A = a.pingedTasks, ne;
        for (ne = 0; ne < A.length; ne++) {
          var J = A[ne], ie = a, Be = J.blockedSegment;
          if (Be === null) {
            var ke = ie;
            if (J.replay.pendingTasks !== 0) {
              Gr(J.context);
              try {
                if (typeof J.replay.slots == "number" ? qo(
                  ke,
                  J,
                  J.replay.slots,
                  J.node,
                  J.childIndex
                ) : Wu(ke, J), J.replay.pendingTasks === 1 && 0 < J.replay.nodes.length)
                  throw Error(F(488));
                J.replay.pendingTasks--, J.abortSet.delete(J), Hu(ke, J.blockedBoundary, null);
              } catch (At) {
                Ui();
                var Le = At === Xr ? on() : At;
                if (typeof Le == "object" && Le !== null && typeof Le.then == "function") {
                  var Ne = J.ping;
                  Le.then(Ne, Ne), J.thenableState = wi();
                } else {
                  J.replay.pendingTasks--, J.abortSet.delete(J);
                  var tt = wn(J.componentStack);
                  ie = void 0;
                  var ze = ke, bt = J.blockedBoundary, St = ke.status === 12 ? ke.fatalError : Le, Rt = J.replay.nodes, Nt = J.replay.slots;
                  ie = Mr(
                    ze,
                    St,
                    tt
                  ), Wn(
                    ze,
                    bt,
                    Rt,
                    Nt,
                    St,
                    ie
                  ), ke.pendingRootTasks--, ke.pendingRootTasks === 0 && Kt(ke), ke.allPendingTasks--, ke.allPendingTasks === 0 && Ct(ke);
                }
              } finally {
              }
            }
          } else if (ke = void 0, ze = Be, ze.status === 0) {
            ze.status = 6, Gr(J.context);
            var Ue = ze.children.length, ft = ze.chunks.length;
            try {
              Wu(ie, J), Uo(
                ze.chunks,
                ie.renderState,
                ze.lastPushedText,
                ze.textEmbedded
              ), J.abortSet.delete(J), ze.status = 1, Hu(ie, J.blockedBoundary, ze);
            } catch (At) {
              Ui(), ze.children.length = Ue, ze.chunks.length = ft;
              var rt = At === Xr ? on() : ie.status === 12 ? ie.fatalError : At;
              if (typeof rt == "object" && rt !== null && typeof rt.then == "function") {
                ze.status = 0, J.thenableState = wi();
                var Mn = J.ping;
                rt.then(Mn, Mn);
              } else {
                var jn = wn(J.componentStack);
                J.abortSet.delete(J), ze.status = 4;
                var Xe = J.blockedBoundary;
                ke = Mr(
                  ie,
                  rt,
                  jn
                ), Xe === null ? ja(ie, rt) : (Xe.pendingTasks--, Xe.status !== 4 && (Xe.status = 4, Xe.errorDigest = ke, ho(ie, Xe), Xe.parentFlushed && ie.clientRenderedBoundaries.push(Xe), ie.pendingRootTasks === 0 && ie.trackedPostpones === null && Xe.contentPreamble !== null && wa(ie))), ie.allPendingTasks--, ie.allPendingTasks === 0 && Ct(ie);
              }
            } finally {
            }
          }
        }
        A.splice(0, ne), a.destination !== null && bo(a, a.destination);
      } catch (At) {
        Mr(a, At, {}), ja(a, At);
      } finally {
        Ml = x, nt.H = f, nt.A = g, f === Xa && Gr(o), qn = T;
      }
    }
  }
  function dc(a, o, f) {
    o.preambleChildren.length && f.push(o.preambleChildren);
    for (var g = !1, T = 0; T < o.children.length; T++)
      g = go(
        a,
        o.children[T],
        f
      ) || g;
    return g;
  }
  function go(a, o, f) {
    var g = o.boundary;
    if (g === null)
      return dc(
        a,
        o,
        f
      );
    var T = g.contentPreamble, x = g.fallbackPreamble;
    if (T === null || x === null) return !1;
    switch (g.status) {
      case 1:
        if (bi(a.renderState, T), o = g.completedSegments[0], !o) throw Error(F(391));
        return dc(
          a,
          o,
          f
        );
      case 5:
        if (a.trackedPostpones !== null) return !0;
      case 4:
        if (o.status === 1)
          return bi(a.renderState, x), dc(
            a,
            o,
            f
          );
      default:
        return !0;
    }
  }
  function wa(a) {
    if (a.completedRootSegment && a.completedPreambleSegments === null) {
      var o = [], f = go(
        a,
        a.completedRootSegment,
        o
      ), g = a.renderState.preamble;
      (f === !1 || g.headChunks && g.bodyChunks) && (a.completedPreambleSegments = o);
    }
  }
  function ri(a, o, f, g) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        f.id = a.nextSegmentId++;
      case 5:
        return g = f.id, f.lastPushedText = !1, f.textEmbedded = !1, a = a.renderState, o.push('<template id="'), o.push(a.placeholderPrefix), a = g.toString(16), o.push(a), o.push('"></template>');
      case 1:
        f.status = 2;
        var T = !0, x = f.chunks, A = 0;
        f = f.children;
        for (var ne = 0; ne < f.length; ne++) {
          for (T = f[ne]; A < T.index; A++)
            o.push(x[A]);
          T = Or(a, o, T, g);
        }
        for (; A < x.length - 1; A++)
          o.push(x[A]);
        return A < x.length && (T = o.push(x[A])), T;
      default:
        throw Error(F(390));
    }
  }
  function Or(a, o, f, g) {
    var T = f.boundary;
    if (T === null)
      return ri(a, o, f, g);
    if (T.parentFlushed = !0, T.status === 4) {
      if (!a.renderState.generateStaticMarkup) {
        var x = T.errorDigest;
        o.push("<!--$!-->"), o.push("<template"), x && (o.push(' data-dgst="'), x = P(x), o.push(x), o.push('"')), o.push("></template>");
      }
      return ri(a, o, f, g), a.renderState.generateStaticMarkup ? o = !0 : ((a = T.fallbackPreamble) && _u(o, a), o = o.push("<!--/$-->")), o;
    }
    if (T.status !== 1)
      return T.status === 0 && (T.rootSegmentID = a.nextSegmentId++), 0 < T.completedSegments.length && a.partialBoundaries.push(T), lc(
        o,
        a.renderState,
        T.rootSegmentID
      ), g && (T = T.fallbackState, T.styles.forEach(mu, g), T.stylesheets.forEach(
        _c,
        g
      )), ri(a, o, f, g), o.push("<!--/$-->");
    if (T.byteSize > a.progressiveChunkSize)
      return T.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(T), lc(
        o,
        a.renderState,
        T.rootSegmentID
      ), ri(a, o, f, g), o.push("<!--/$-->");
    if (g && (f = T.contentState, f.styles.forEach(mu, g), f.stylesheets.forEach(_c, g)), a.renderState.generateStaticMarkup || o.push("<!--$-->"), f = T.completedSegments, f.length !== 1) throw Error(F(391));
    return Or(a, o, f[0], g), a.renderState.generateStaticMarkup ? o = !0 : ((a = T.contentPreamble) && _u(o, a), o = o.push("<!--/$-->")), o;
  }
  function vo(a, o, f, g) {
    return zo(
      o,
      a.renderState,
      f.parentFormatContext,
      f.id
    ), Or(a, o, f, g), Wt(o, f.parentFormatContext);
  }
  function eu(a, o, f) {
    for (var g = f.completedSegments, T = 0; T < g.length; T++)
      zu(
        a,
        o,
        f,
        g[T]
      );
    g.length = 0, Ba(
      o,
      f.contentState,
      a.renderState
    ), g = a.resumableState, a = a.renderState, T = f.rootSegmentID, f = f.contentState;
    var x = a.stylesToHoist;
    return a.stylesToHoist = !1, o.push(a.startInlineScript), x ? (g.instructions & 2) === 0 ? (g.instructions |= 10, o.push(
      `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    )) : (g.instructions & 8) === 0 ? (g.instructions |= 8, o.push(
      `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    )) : o.push('$RR("') : (g.instructions & 2) === 0 ? (g.instructions |= 2, o.push(
      '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
    )) : o.push('$RC("'), g = T.toString(16), o.push(a.boundaryPrefix), o.push(g), o.push('","'), o.push(a.segmentPrefix), o.push(g), x ? (o.push('",'), Rl(o, f)) : o.push('"'), f = o.push(")<\/script>"), Ou(o, a) && f;
  }
  function zu(a, o, f, g) {
    if (g.status === 2) return !0;
    var T = f.contentState, x = g.id;
    if (x === -1) {
      if ((g.id = f.rootSegmentID) === -1)
        throw Error(F(392));
      return vo(a, o, g, T);
    }
    return x === f.rootSegmentID ? vo(a, o, g, T) : (vo(a, o, g, T), f = a.resumableState, a = a.renderState, o.push(a.startInlineScript), (f.instructions & 1) === 0 ? (f.instructions |= 1, o.push(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    )) : o.push('$RS("'), o.push(a.segmentPrefix), x = x.toString(16), o.push(x), o.push('","'), o.push(a.placeholderPrefix), o.push(x), o = o.push('")<\/script>'), o);
  }
  function bo(a, o) {
    try {
      if (!(0 < a.pendingRootTasks)) {
        var f, g = a.completedRootSegment;
        if (g !== null) {
          if (g.status === 5) return;
          var T = a.completedPreambleSegments;
          if (T === null) return;
          var x = a.renderState, A = x.preamble, ne = A.htmlChunks, J = A.headChunks, ie;
          if (ne) {
            for (ie = 0; ie < ne.length; ie++)
              o.push(ne[ie]);
            if (J)
              for (ie = 0; ie < J.length; ie++)
                o.push(J[ie]);
            else {
              var Be = wt("head");
              o.push(Be), o.push(">");
            }
          } else if (J)
            for (ie = 0; ie < J.length; ie++)
              o.push(J[ie]);
          var ke = x.charsetChunks;
          for (ie = 0; ie < ke.length; ie++)
            o.push(ke[ie]);
          ke.length = 0, x.preconnects.forEach(Pr, o), x.preconnects.clear();
          var Le = x.viewportChunks;
          for (ie = 0; ie < Le.length; ie++)
            o.push(Le[ie]);
          Le.length = 0, x.fontPreloads.forEach(Pr, o), x.fontPreloads.clear(), x.highImagePreloads.forEach(Pr, o), x.highImagePreloads.clear(), x.styles.forEach(io, o);
          var Ne = x.importMapChunks;
          for (ie = 0; ie < Ne.length; ie++)
            o.push(Ne[ie]);
          Ne.length = 0, x.bootstrapScripts.forEach(Pr, o), x.scripts.forEach(Pr, o), x.scripts.clear(), x.bulkPreloads.forEach(Pr, o), x.bulkPreloads.clear();
          var tt = x.hoistableChunks;
          for (ie = 0; ie < tt.length; ie++)
            o.push(tt[ie]);
          for (x = tt.length = 0; x < T.length; x++) {
            var ze = T[x];
            for (A = 0; A < ze.length; A++)
              Or(a, o, ze[A], null);
          }
          var bt = a.renderState.preamble, St = bt.headChunks;
          if (bt.htmlChunks || St) {
            var Rt = Da("head");
            o.push(Rt);
          }
          var Nt = bt.bodyChunks;
          if (Nt)
            for (T = 0; T < Nt.length; T++)
              o.push(Nt[T]);
          Or(a, o, g, null), a.completedRootSegment = null, Ou(o, a.renderState);
        }
        var Ue = a.renderState;
        g = 0;
        var ft = Ue.viewportChunks;
        for (g = 0; g < ft.length; g++)
          o.push(ft[g]);
        ft.length = 0, Ue.preconnects.forEach(Pr, o), Ue.preconnects.clear(), Ue.fontPreloads.forEach(Pr, o), Ue.fontPreloads.clear(), Ue.highImagePreloads.forEach(
          Pr,
          o
        ), Ue.highImagePreloads.clear(), Ue.styles.forEach(zt, o), Ue.scripts.forEach(Pr, o), Ue.scripts.clear(), Ue.bulkPreloads.forEach(Pr, o), Ue.bulkPreloads.clear();
        var rt = Ue.hoistableChunks;
        for (g = 0; g < rt.length; g++)
          o.push(rt[g]);
        rt.length = 0;
        var Mn = a.clientRenderedBoundaries;
        for (f = 0; f < Mn.length; f++) {
          var jn = Mn[f];
          Ue = o;
          var Xe = a.resumableState, At = a.renderState, un = jn.rootSegmentID, Tn = jn.errorDigest;
          Ue.push(At.startInlineScript), (Xe.instructions & 4) === 0 ? (Xe.instructions |= 4, Ue.push(
            '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
          )) : Ue.push('$RX("'), Ue.push(At.boundaryPrefix);
          var xi = un.toString(16);
          if (Ue.push(xi), Ue.push('"'), Tn) {
            Ue.push(",");
            var mt = Bn(
              Tn || ""
            );
            Ue.push(mt);
          }
          var cn = Ue.push(")<\/script>");
          if (!cn) {
            a.destination = null, f++, Mn.splice(0, f);
            return;
          }
        }
        Mn.splice(0, f);
        var fr = a.completedBoundaries;
        for (f = 0; f < fr.length; f++)
          if (!eu(a, o, fr[f])) {
            a.destination = null, f++, fr.splice(0, f);
            return;
          }
        fr.splice(0, f);
        var $n = a.partialBoundaries;
        for (f = 0; f < $n.length; f++) {
          var Ei = $n[f];
          e: {
            Mn = a, jn = o;
            var er = Ei.completedSegments;
            for (cn = 0; cn < er.length; cn++)
              if (!zu(
                Mn,
                jn,
                Ei,
                er[cn]
              )) {
                cn++, er.splice(0, cn);
                var ii = !1;
                break e;
              }
            er.splice(0, cn), ii = Ba(
              jn,
              Ei.contentState,
              Mn.renderState
            );
          }
          if (!ii) {
            a.destination = null, f++, $n.splice(0, f);
            return;
          }
        }
        $n.splice(0, f);
        var _r = a.completedBoundaries;
        for (f = 0; f < _r.length; f++)
          if (!eu(a, o, _r[f])) {
            a.destination = null, f++, _r.splice(0, f);
            return;
          }
        _r.splice(0, f);
      }
    } finally {
      a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && (a.flushScheduled = !1, f = a.resumableState, f.hasBody && ($n = Da("body"), o.push($n)), f.hasHtml && (f = Da("html"), o.push(f)), a.status = 14, o.push(null), a.destination = null);
    }
  }
  function An(a) {
    if (a.flushScheduled === !1 && a.pingedTasks.length === 0 && a.destination !== null) {
      a.flushScheduled = !0;
      var o = a.destination;
      o ? bo(a, o) : a.flushScheduled = !1;
    }
  }
  function Xc(a, o) {
    if (a.status === 13)
      a.status = 14, o.destroy(a.fatalError);
    else if (a.status !== 14 && a.destination === null) {
      a.destination = o;
      try {
        bo(a, o);
      } catch (f) {
        Mr(a, f, {}), ja(a, f);
      }
    }
  }
  function sr(a, o) {
    (a.status === 11 || a.status === 10) && (a.status = 12);
    try {
      var f = a.abortableTasks;
      if (0 < f.size) {
        var g = o === void 0 ? Error(F(432)) : typeof o == "object" && o !== null && typeof o.then == "function" ? Error(F(530)) : o;
        a.fatalError = g, f.forEach(function(T) {
          return ur(T, a, g);
        }), f.clear();
      }
      a.destination !== null && bo(a, a.destination);
    } catch (T) {
      Mr(a, T, {}), ja(a, T);
    }
  }
  function gc() {
  }
  function $a(a, o, f, g) {
    var T = !1, x = null, A = "", ne = !1;
    if (o = Se(o ? o.identifierPrefix : void 0), a = Il(
      a,
      o,
      fa(o, f),
      me(0, null, 0),
      1 / 0,
      gc,
      void 0,
      function() {
        ne = !0;
      },
      void 0,
      void 0,
      void 0
    ), a.flushScheduled = a.destination !== null, hc(a), a.status === 10 && (a.status = 11), a.trackedPostpones === null && cr(a, a.pendingRootTasks === 0), sr(a, g), Xc(a, {
      push: function(J) {
        return J !== null && (A += J), !0;
      },
      destroy: function(J) {
        T = !0, x = J;
      }
    }), T && x !== g) throw x;
    if (!ne) throw Error(F(426));
    return A;
  }
  return bs.renderToStaticMarkup = function(a, o) {
    return $a(
      a,
      o,
      !0,
      'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, bs.renderToString = function(a, o) {
    return $a(
      a,
      o,
      !1,
      'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
    );
  }, bs.version = "19.1.1", bs;
}
var ys = {};
/**
 * @license React
 * react-dom-server.browser.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nh;
function ed() {
  if (nh) return ys;
  nh = 1;
  var ce = As, V = Ms;
  function F(i) {
    var l = "https://react.dev/errors/" + i;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        l += "&args[]=" + encodeURIComponent(arguments[s]);
    }
    return "Minified React error #" + i + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ee = Symbol.for("react.transitional.element"), oe = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), q = Symbol.for("react.provider"), ue = Symbol.for("react.consumer"), k = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), Et = Symbol.for("react.scope"), he = Symbol.for("react.activity"), pe = Symbol.for("react.legacy_hidden"), Ge = Symbol.for("react.memo_cache_sentinel"), Re = Symbol.for("react.view_transition"), j = Symbol.iterator, Ae = Array.isArray;
  function Ve(i, l) {
    var s = i.length & 3, v = i.length - s, w = l;
    for (l = 0; l < v; ) {
      var E = i.charCodeAt(l) & 255 | (i.charCodeAt(++l) & 255) << 8 | (i.charCodeAt(++l) & 255) << 16 | (i.charCodeAt(++l) & 255) << 24;
      ++l, E = 3432918353 * (E & 65535) + ((3432918353 * (E >>> 16) & 65535) << 16) & 4294967295, E = E << 15 | E >>> 17, E = 461845907 * (E & 65535) + ((461845907 * (E >>> 16) & 65535) << 16) & 4294967295, w ^= E, w = w << 13 | w >>> 19, w = 5 * (w & 65535) + ((5 * (w >>> 16) & 65535) << 16) & 4294967295, w = (w & 65535) + 27492 + (((w >>> 16) + 58964 & 65535) << 16);
    }
    switch (E = 0, s) {
      case 3:
        E ^= (i.charCodeAt(l + 2) & 255) << 16;
      case 2:
        E ^= (i.charCodeAt(l + 1) & 255) << 8;
      case 1:
        E ^= i.charCodeAt(l) & 255, E = 3432918353 * (E & 65535) + ((3432918353 * (E >>> 16) & 65535) << 16) & 4294967295, E = E << 15 | E >>> 17, w ^= 461845907 * (E & 65535) + ((461845907 * (E >>> 16) & 65535) << 16) & 4294967295;
    }
    return w ^= i.length, w ^= w >>> 16, w = 2246822507 * (w & 65535) + ((2246822507 * (w >>> 16) & 65535) << 16) & 4294967295, w ^= w >>> 13, w = 3266489909 * (w & 65535) + ((3266489909 * (w >>> 16) & 65535) << 16) & 4294967295, (w ^ w >>> 16) >>> 0;
  }
  var it = new MessageChannel(), $e = [];
  it.port1.onmessage = function() {
    var i = $e.shift();
    i && i();
  };
  function _t(i) {
    $e.push(i), it.port2.postMessage(null);
  }
  function N(i) {
    setTimeout(function() {
      throw i;
    });
  }
  var H = Promise, se = typeof queueMicrotask == "function" ? queueMicrotask : function(i) {
    H.resolve(null).then(i).catch(N);
  }, Ee = null, Ze = 0;
  function ae(i, l) {
    if (l.byteLength !== 0)
      if (2048 < l.byteLength)
        0 < Ze && (i.enqueue(
          new Uint8Array(Ee.buffer, 0, Ze)
        ), Ee = new Uint8Array(2048), Ze = 0), i.enqueue(l);
      else {
        var s = Ee.length - Ze;
        s < l.byteLength && (s === 0 ? i.enqueue(Ee) : (Ee.set(l.subarray(0, s), Ze), i.enqueue(Ee), l = l.subarray(s)), Ee = new Uint8Array(2048), Ze = 0), Ee.set(l, Ze), Ze += l.byteLength;
      }
  }
  function P(i, l) {
    return ae(i, l), !0;
  }
  function $(i) {
    Ee && 0 < Ze && (i.enqueue(new Uint8Array(Ee.buffer, 0, Ze)), Ee = null, Ze = 0);
  }
  var le = new TextEncoder();
  function te(i) {
    return le.encode(i);
  }
  function Q(i) {
    return le.encode(i);
  }
  function nt(i, l) {
    typeof i.error == "function" ? i.error(l) : i.close();
  }
  var pt = Object.assign, Qe = Object.prototype.hasOwnProperty, dt = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), It = {}, S = {};
  function M(i) {
    return Qe.call(S, i) ? !0 : Qe.call(It, i) ? !1 : dt.test(i) ? S[i] = !0 : (It[i] = !0, !1);
  }
  var Se = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  ), we = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), me = /["'&<>]/;
  function Me(i) {
    if (typeof i == "boolean" || typeof i == "number" || typeof i == "bigint")
      return "" + i;
    i = "" + i;
    var l = me.exec(i);
    if (l) {
      var s = "", v, w = 0;
      for (v = l.index; v < i.length; v++) {
        switch (i.charCodeAt(v)) {
          case 34:
            l = "&quot;";
            break;
          case 38:
            l = "&amp;";
            break;
          case 39:
            l = "&#x27;";
            break;
          case 60:
            l = "&lt;";
            break;
          case 62:
            l = "&gt;";
            break;
          default:
            continue;
        }
        w !== v && (s += i.slice(w, v)), w = v + 1, s += l;
      }
      i = w !== v ? s + i.slice(w, v) : s;
    }
    return i;
  }
  var ot = /([A-Z])/g, ua = /^ms-/, nn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yt(i) {
    return nn.test("" + i) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : i;
  }
  var yr = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ca = V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ia = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Cn = ca.d;
  ca.d = {
    f: Cn.f,
    r: Cn.r,
    D: cr,
    C: Kt,
    L: Ct,
    m: $o,
    X: hc,
    S: Hu,
    M: dc
  };
  var Qt = [];
  Q('"></template>');
  var et = Q("<script>"), bn = Q("<\/script>"), wr = Q('<script src="'), Sn = Q('<script type="module" src="'), Ln = Q('" nonce="'), Fu = Q('" integrity="'), Au = Q('" crossorigin="'), wl = Q('" async=""><\/script>'), Mu = /(<\/|<)(s)(cript)/gi;
  function sa(i, l, s, v) {
    return "" + l + (s === "s" ? "\\u0073" : "\\u0053") + v;
  }
  var ma = Q(
    '<script type="importmap">'
  ), No = Q("<\/script>");
  function ro(i, l, s, v, w, E) {
    var O = l === void 0 ? et : Q(
      '<script nonce="' + Me(l) + '">'
    ), K = i.idPrefix;
    s = [];
    var m = i.bootstrapScriptContent, X = i.bootstrapScripts, Ce = i.bootstrapModules;
    if (m !== void 0 && s.push(
      O,
      te(
        ("" + m).replace(Mu, sa)
      ),
      bn
    ), m = [], v !== void 0 && (m.push(ma), m.push(
      te(
        ("" + JSON.stringify(v)).replace(Mu, sa)
      )
    ), m.push(No)), v = w ? {
      preconnects: "",
      fontPreloads: "",
      highImagePreloads: "",
      remainingCapacity: 2 + (typeof E == "number" ? E : 2e3)
    } : null, w = {
      placeholderPrefix: Q(K + "P:"),
      segmentPrefix: Q(K + "S:"),
      boundaryPrefix: Q(K + "B:"),
      startInlineScript: O,
      preamble: wt(),
      externalRuntimeScript: null,
      bootstrapChunks: s,
      importMapChunks: m,
      onHeaders: w,
      headers: v,
      resets: {
        font: {},
        dns: {},
        connect: { default: {}, anonymous: {}, credentials: {} },
        image: {},
        style: {}
      },
      charsetChunks: [],
      viewportChunks: [],
      hoistableChunks: [],
      preconnects: /* @__PURE__ */ new Set(),
      fontPreloads: /* @__PURE__ */ new Set(),
      highImagePreloads: /* @__PURE__ */ new Set(),
      styles: /* @__PURE__ */ new Map(),
      bootstrapScripts: /* @__PURE__ */ new Set(),
      scripts: /* @__PURE__ */ new Set(),
      bulkPreloads: /* @__PURE__ */ new Set(),
      preloads: {
        images: /* @__PURE__ */ new Map(),
        stylesheets: /* @__PURE__ */ new Map(),
        scripts: /* @__PURE__ */ new Map(),
        moduleScripts: /* @__PURE__ */ new Map()
      },
      nonce: l,
      hoistableState: null,
      stylesToHoist: !1
    }, X !== void 0)
      for (v = 0; v < X.length; v++) {
        var ge = X[v];
        K = O = void 0, m = {
          rel: "preload",
          as: "script",
          fetchPriority: "low",
          nonce: l
        }, typeof ge == "string" ? m.href = E = ge : (m.href = E = ge.src, m.integrity = K = typeof ge.integrity == "string" ? ge.integrity : void 0, m.crossOrigin = O = typeof ge == "string" || ge.crossOrigin == null ? void 0 : ge.crossOrigin === "use-credentials" ? "use-credentials" : ""), ge = i;
        var We = E;
        ge.scriptResources[We] = null, ge.moduleScriptResources[We] = null, ge = [], Zn(ge, m), w.bootstrapScripts.add(ge), s.push(
          wr,
          te(Me(E))
        ), l && s.push(
          Ln,
          te(Me(l))
        ), typeof K == "string" && s.push(
          Fu,
          te(Me(K))
        ), typeof O == "string" && s.push(
          Au,
          te(Me(O))
        ), s.push(wl);
      }
    if (Ce !== void 0)
      for (X = 0; X < Ce.length; X++)
        m = Ce[X], O = E = void 0, K = {
          rel: "modulepreload",
          fetchPriority: "low",
          nonce: l
        }, typeof m == "string" ? K.href = v = m : (K.href = v = m.src, K.integrity = O = typeof m.integrity == "string" ? m.integrity : void 0, K.crossOrigin = E = typeof m == "string" || m.crossOrigin == null ? void 0 : m.crossOrigin === "use-credentials" ? "use-credentials" : ""), m = i, ge = v, m.scriptResources[ge] = null, m.moduleScriptResources[ge] = null, m = [], Zn(m, K), w.bootstrapScripts.add(m), s.push(
          Sn,
          te(Me(v))
        ), l && s.push(
          Ln,
          te(Me(l))
        ), typeof O == "string" && s.push(
          Fu,
          te(Me(O))
        ), typeof E == "string" && s.push(
          Au,
          te(Me(E))
        ), s.push(wl);
    return w;
  }
  function Tl(i, l, s, v, w) {
    return {
      idPrefix: i === void 0 ? "" : i,
      nextFormID: 0,
      streamingFormat: 0,
      bootstrapScriptContent: s,
      bootstrapScripts: v,
      bootstrapModules: w,
      instructions: 0,
      hasBody: !1,
      hasHtml: !1,
      unknownResources: {},
      dnsResources: {},
      connectResources: { default: {}, anonymous: {}, credentials: {} },
      imageResources: {},
      styleResources: {},
      scriptResources: {},
      moduleUnknownResources: {},
      moduleScriptResources: {}
    };
  }
  function wt() {
    return {
      htmlChunks: null,
      headChunks: null,
      bodyChunks: null,
      contribution: 0
    };
  }
  function Sr(i, l, s) {
    return {
      insertionMode: i,
      selectedValue: l,
      tagScope: s
    };
  }
  function Ho(i) {
    return Sr(
      i === "http://www.w3.org/2000/svg" ? 4 : i === "http://www.w3.org/1998/Math/MathML" ? 5 : 0,
      null,
      0
    );
  }
  function Da(i, l, s) {
    switch (l) {
      case "noscript":
        return Sr(2, null, i.tagScope | 1);
      case "select":
        return Sr(
          2,
          s.value != null ? s.value : s.defaultValue,
          i.tagScope
        );
      case "svg":
        return Sr(4, null, i.tagScope);
      case "picture":
        return Sr(2, null, i.tagScope | 2);
      case "math":
        return Sr(5, null, i.tagScope);
      case "foreignObject":
        return Sr(2, null, i.tagScope);
      case "table":
        return Sr(6, null, i.tagScope);
      case "thead":
      case "tbody":
      case "tfoot":
        return Sr(7, null, i.tagScope);
      case "colgroup":
        return Sr(9, null, i.tagScope);
      case "tr":
        return Sr(8, null, i.tagScope);
      case "head":
        if (2 > i.insertionMode)
          return Sr(3, null, i.tagScope);
        break;
      case "html":
        if (i.insertionMode === 0)
          return Sr(1, null, i.tagScope);
    }
    return 6 <= i.insertionMode || 2 > i.insertionMode ? Sr(2, null, i.tagScope) : i;
  }
  var bi = Q("<!-- -->");
  function Ou(i, l, s, v) {
    return l === "" ? v : (v && i.push(bi), i.push(te(Me(l))), !0);
  }
  var lc = /* @__PURE__ */ new Map(), _u = Q(' style="'), zo = Q(":"), Wt = Q(";");
  function La(i, l) {
    if (typeof l != "object") throw Error(F(62));
    var s = !0, v;
    for (v in l)
      if (Qe.call(l, v)) {
        var w = l[v];
        if (w != null && typeof w != "boolean" && w !== "") {
          if (v.indexOf("--") === 0) {
            var E = te(Me(v));
            w = te(
              Me(("" + w).trim())
            );
          } else
            E = lc.get(v), E === void 0 && (E = Q(
              Me(
                v.replace(ot, "-$1").toLowerCase().replace(ua, "-ms-")
              )
            ), lc.set(v, E)), w = typeof w == "number" ? w === 0 || Se.has(v) ? te("" + w) : te(w + "px") : te(
              Me(("" + w).trim())
            );
          s ? (s = !1, i.push(
            _u,
            E,
            zo,
            w
          )) : i.push(Wt, E, zo, w);
        }
      }
    s || i.push(yn);
  }
  var Bn = Q(" "), zr = Q('="'), yn = Q('"'), pl = Q('=""');
  function Ur(i, l, s) {
    s && typeof s != "function" && typeof s != "symbol" && i.push(Bn, te(l), pl);
  }
  function Pn(i, l, s) {
    typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && i.push(
      Bn,
      te(l),
      zr,
      te(Me(s)),
      yn
    );
  }
  var Gt = Q(
    Me(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    )
  ), Ba = Q('<input type="hidden"');
  function Pr(i, l) {
    this.push(Ba), Yr(i), Pn(this, "name", l), Pn(this, "value", i), this.push(Rl);
  }
  function Yr(i) {
    if (typeof i != "string") throw Error(F(480));
  }
  function oc(i, l) {
    if (typeof l.$$FORM_ACTION == "function") {
      var s = i.nextFormID++;
      i = i.idPrefix + s;
      try {
        var v = l.$$FORM_ACTION(i);
        if (v) {
          var w = v.data;
          w?.forEach(Yr);
        }
        return v;
      } catch (E) {
        if (typeof E == "object" && E !== null && typeof E.then == "function")
          throw E;
      }
    }
    return null;
  }
  function io(i, l, s, v, w, E, O, K) {
    var m = null;
    if (typeof v == "function") {
      var X = oc(l, v);
      X !== null ? (K = X.name, v = X.action || "", w = X.encType, E = X.method, O = X.target, m = X.data) : (i.push(
        Bn,
        te("formAction"),
        zr,
        Gt,
        yn
      ), O = E = w = v = K = null, El(l, s));
    }
    return K != null && vt(i, "name", K), v != null && vt(i, "formAction", v), w != null && vt(i, "formEncType", w), E != null && vt(i, "formMethod", E), O != null && vt(i, "formTarget", O), m;
  }
  function vt(i, l, s) {
    switch (l) {
      case "className":
        Pn(i, "class", s);
        break;
      case "tabIndex":
        Pn(i, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Pn(i, l, s);
        break;
      case "style":
        La(i, s);
        break;
      case "src":
      case "href":
        if (s === "") break;
      case "action":
      case "formAction":
        if (s == null || typeof s == "function" || typeof s == "symbol" || typeof s == "boolean")
          break;
        s = Yt("" + s), i.push(
          Bn,
          te(l),
          zr,
          te(Me(s)),
          yn
        );
        break;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "ref":
        break;
      case "autoFocus":
      case "multiple":
      case "muted":
        Ur(i, l.toLowerCase(), s);
        break;
      case "xlinkHref":
        if (typeof s == "function" || typeof s == "symbol" || typeof s == "boolean")
          break;
        s = Yt("" + s), i.push(
          Bn,
          te("xlink:href"),
          zr,
          te(Me(s)),
          yn
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        typeof s != "function" && typeof s != "symbol" && i.push(
          Bn,
          te(l),
          zr,
          te(Me(s)),
          yn
        );
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol" && i.push(
          Bn,
          te(l),
          pl
        );
        break;
      case "capture":
      case "download":
        s === !0 ? i.push(
          Bn,
          te(l),
          pl
        ) : s !== !1 && typeof s != "function" && typeof s != "symbol" && i.push(
          Bn,
          te(l),
          zr,
          te(Me(s)),
          yn
        );
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        typeof s != "function" && typeof s != "symbol" && !isNaN(s) && 1 <= s && i.push(
          Bn,
          te(l),
          zr,
          te(Me(s)),
          yn
        );
        break;
      case "rowSpan":
      case "start":
        typeof s == "function" || typeof s == "symbol" || isNaN(s) || i.push(
          Bn,
          te(l),
          zr,
          te(Me(s)),
          yn
        );
        break;
      case "xlinkActuate":
        Pn(i, "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        Pn(i, "xlink:arcrole", s);
        break;
      case "xlinkRole":
        Pn(i, "xlink:role", s);
        break;
      case "xlinkShow":
        Pn(i, "xlink:show", s);
        break;
      case "xlinkTitle":
        Pn(i, "xlink:title", s);
        break;
      case "xlinkType":
        Pn(i, "xlink:type", s);
        break;
      case "xmlBase":
        Pn(i, "xml:base", s);
        break;
      case "xmlLang":
        Pn(i, "xml:lang", s);
        break;
      case "xmlSpace":
        Pn(i, "xml:space", s);
        break;
      default:
        if ((!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = we.get(l) || l, M(l))) {
          switch (typeof s) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              var v = l.toLowerCase().slice(0, 5);
              if (v !== "data-" && v !== "aria-") return;
          }
          i.push(
            Bn,
            te(l),
            zr,
            te(Me(s)),
            yn
          );
        }
    }
  }
  var zt = Q(">"), Rl = Q("/>");
  function Xn(i, l, s) {
    if (l != null) {
      if (s != null) throw Error(F(60));
      if (typeof l != "object" || !("__html" in l))
        throw Error(F(61));
      l = l.__html, l != null && i.push(te("" + l));
    }
  }
  function xl(i) {
    var l = "";
    return ce.Children.forEach(i, function(s) {
      s != null && (l += s);
    }), l;
  }
  var Ii = Q(' selected=""'), Mc = Q(
    `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
  );
  function El(i, l) {
    (i.instructions & 16) === 0 && (i.instructions |= 16, l.bootstrapChunks.unshift(
      l.startInlineScript,
      Mc,
      bn
    ));
  }
  var Oc = Q("<!--F!-->"), mi = Q("<!--F-->");
  function Zn(i, l) {
    i.push(Jt("link"));
    for (var s in l)
      if (Qe.call(l, s)) {
        var v = l[s];
        if (v != null)
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(F(399, "link"));
            default:
              vt(i, s, v);
          }
      }
    return i.push(Rl), null;
  }
  var Iu = /(<\/|<)(s)(tyle)/gi;
  function yi(i, l, s, v) {
    return "" + l + (s === "s" ? "\\73 " : "\\53 ") + v;
  }
  function Fr(i, l, s) {
    i.push(Jt(s));
    for (var v in l)
      if (Qe.call(l, v)) {
        var w = l[v];
        if (w != null)
          switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(F(399, s));
            default:
              vt(i, v, w);
          }
      }
    return i.push(Rl), null;
  }
  function ao(i, l) {
    i.push(Jt("title"));
    var s = null, v = null, w;
    for (w in l)
      if (Qe.call(l, w)) {
        var E = l[w];
        if (E != null)
          switch (w) {
            case "children":
              s = E;
              break;
            case "dangerouslySetInnerHTML":
              v = E;
              break;
            default:
              vt(i, w, E);
          }
      }
    return i.push(zt), l = Array.isArray(s) ? 2 > s.length ? s[0] : null : s, typeof l != "function" && typeof l != "symbol" && l !== null && l !== void 0 && i.push(te(Me("" + l))), Xn(i, v, s), i.push(or("title")), null;
  }
  function Wa(i, l) {
    i.push(Jt("script"));
    var s = null, v = null, w;
    for (w in l)
      if (Qe.call(l, w)) {
        var E = l[w];
        if (E != null)
          switch (w) {
            case "children":
              s = E;
              break;
            case "dangerouslySetInnerHTML":
              v = E;
              break;
            default:
              vt(i, w, E);
          }
      }
    return i.push(zt), Xn(i, v, s), typeof s == "string" && i.push(
      te(("" + s).replace(Mu, sa))
    ), i.push(or("script")), null;
  }
  function Di(i, l, s) {
    i.push(Jt(s));
    var v = s = null, w;
    for (w in l)
      if (Qe.call(l, w)) {
        var E = l[w];
        if (E != null)
          switch (w) {
            case "children":
              s = E;
              break;
            case "dangerouslySetInnerHTML":
              v = E;
              break;
            default:
              vt(i, w, E);
          }
      }
    return i.push(zt), Xn(i, v, s), s;
  }
  function Na(i, l, s) {
    i.push(Jt(s));
    var v = s = null, w;
    for (w in l)
      if (Qe.call(l, w)) {
        var E = l[w];
        if (E != null)
          switch (w) {
            case "children":
              s = E;
              break;
            case "dangerouslySetInnerHTML":
              v = E;
              break;
            default:
              vt(i, w, E);
          }
      }
    return i.push(zt), Xn(i, v, s), typeof s == "string" ? (i.push(te(Me(s))), null) : s;
  }
  var mu = Q(`
`), _c = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, fa = /* @__PURE__ */ new Map();
  function Jt(i) {
    var l = fa.get(i);
    if (l === void 0) {
      if (!_c.test(i))
        throw Error(F(65, i));
      l = Q("<" + i), fa.set(i, l);
    }
    return l;
  }
  var Uo = Q("<!DOCTYPE html>");
  function uc(i, l, s, v, w, E, O, K, m, X) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
        break;
      case "a":
        i.push(Jt("a"));
        var Ce = null, ge = null, We;
        for (We in s)
          if (Qe.call(s, We)) {
            var Ye = s[We];
            if (Ye != null)
              switch (We) {
                case "children":
                  Ce = Ye;
                  break;
                case "dangerouslySetInnerHTML":
                  ge = Ye;
                  break;
                case "href":
                  Ye === "" ? Pn(i, "href", "") : vt(i, We, Ye);
                  break;
                default:
                  vt(i, We, Ye);
              }
          }
        if (i.push(zt), Xn(i, ge, Ce), typeof Ce == "string") {
          i.push(te(Me(Ce)));
          var Ke = null;
        } else Ke = Ce;
        return Ke;
      case "g":
      case "p":
      case "li":
        break;
      case "select":
        i.push(Jt("select"));
        var at = null, Dt = null, fn;
        for (fn in s)
          if (Qe.call(s, fn)) {
            var Tt = s[fn];
            if (Tt != null)
              switch (fn) {
                case "children":
                  at = Tt;
                  break;
                case "dangerouslySetInnerHTML":
                  Dt = Tt;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  vt(
                    i,
                    fn,
                    Tt
                  );
              }
          }
        return i.push(zt), Xn(i, Dt, at), at;
      case "option":
        var dr = K.selectedValue;
        i.push(Jt("option"));
        var hn = null, Dr = null, nr = null, Nn = null, Rr;
        for (Rr in s)
          if (Qe.call(s, Rr)) {
            var Lt = s[Rr];
            if (Lt != null)
              switch (Rr) {
                case "children":
                  hn = Lt;
                  break;
                case "selected":
                  nr = Lt;
                  break;
                case "dangerouslySetInnerHTML":
                  Nn = Lt;
                  break;
                case "value":
                  Dr = Lt;
                default:
                  vt(
                    i,
                    Rr,
                    Lt
                  );
              }
          }
        if (dr != null) {
          var Rn = Dr !== null ? "" + Dr : xl(hn);
          if (Ae(dr)) {
            for (var $t = 0; $t < dr.length; $t++)
              if ("" + dr[$t] === Rn) {
                i.push(Ii);
                break;
              }
          } else
            "" + dr === Rn && i.push(Ii);
        } else nr && i.push(Ii);
        return i.push(zt), Xn(i, Nn, hn), hn;
      case "textarea":
        i.push(Jt("textarea"));
        var rr = null, Ul = null, ka = null, Ca;
        for (Ca in s)
          if (Qe.call(s, Ca)) {
            var Yl = s[Ca];
            if (Yl != null)
              switch (Ca) {
                case "children":
                  ka = Yl;
                  break;
                case "value":
                  rr = Yl;
                  break;
                case "defaultValue":
                  Ul = Yl;
                  break;
                case "dangerouslySetInnerHTML":
                  throw Error(F(91));
                default:
                  vt(
                    i,
                    Ca,
                    Yl
                  );
              }
          }
        if (rr === null && Ul !== null && (rr = Ul), i.push(zt), ka != null) {
          if (rr != null) throw Error(F(92));
          if (Ae(ka)) {
            if (1 < ka.length)
              throw Error(F(93));
            rr = "" + ka[0];
          }
          rr = "" + ka;
        }
        return typeof rr == "string" && rr[0] === `
` && i.push(mu), rr !== null && i.push(
          te(Me("" + rr))
        ), null;
      case "input":
        i.push(Jt("input"));
        var Sa = null, Tc = null, ul = null, Zc = null, Qc = null, Dc = null, Zu = null, Jc = null, Lc = null, Qi;
        for (Qi in s)
          if (Qe.call(s, Qi)) {
            var Lr = s[Qi];
            if (Lr != null)
              switch (Qi) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(F(399, "input"));
                case "name":
                  Sa = Lr;
                  break;
                case "formAction":
                  Tc = Lr;
                  break;
                case "formEncType":
                  ul = Lr;
                  break;
                case "formMethod":
                  Zc = Lr;
                  break;
                case "formTarget":
                  Qc = Lr;
                  break;
                case "defaultChecked":
                  Lc = Lr;
                  break;
                case "defaultValue":
                  Zu = Lr;
                  break;
                case "checked":
                  Jc = Lr;
                  break;
                case "value":
                  Dc = Lr;
                  break;
                default:
                  vt(
                    i,
                    Qi,
                    Lr
                  );
              }
          }
        var Bc = io(
          i,
          v,
          w,
          Tc,
          ul,
          Zc,
          Qc,
          Sa
        );
        return Jc !== null ? Ur(i, "checked", Jc) : Lc !== null && Ur(i, "checked", Lc), Dc !== null ? vt(i, "value", Dc) : Zu !== null && vt(i, "value", Zu), i.push(Rl), Bc?.forEach(Pr, i), null;
      case "button":
        i.push(Jt("button"));
        var Kr = null, Qu = null, Ju = null, pc = null, Rc = null, Zt = null, Vu = null, Eo;
        for (Eo in s)
          if (Qe.call(s, Eo)) {
            var xn = s[Eo];
            if (xn != null)
              switch (Eo) {
                case "children":
                  Kr = xn;
                  break;
                case "dangerouslySetInnerHTML":
                  Qu = xn;
                  break;
                case "name":
                  Ju = xn;
                  break;
                case "formAction":
                  pc = xn;
                  break;
                case "formEncType":
                  Rc = xn;
                  break;
                case "formMethod":
                  Zt = xn;
                  break;
                case "formTarget":
                  Vu = xn;
                  break;
                default:
                  vt(
                    i,
                    Eo,
                    xn
                  );
              }
          }
        var Gl = io(
          i,
          v,
          w,
          pc,
          Rc,
          Zt,
          Vu,
          Ju
        );
        if (i.push(zt), Gl?.forEach(Pr, i), Xn(i, Qu, Kr), typeof Kr == "string") {
          i.push(
            te(Me(Kr))
          );
          var Ji = null;
        } else Ji = Kr;
        return Ji;
      case "form":
        i.push(Jt("form"));
        var Xl = null, ko = null, qr = null, Zl = null, jr = null, cl = null, hu;
        for (hu in s)
          if (Qe.call(s, hu)) {
            var Vi = s[hu];
            if (Vi != null)
              switch (hu) {
                case "children":
                  Xl = Vi;
                  break;
                case "dangerouslySetInnerHTML":
                  ko = Vi;
                  break;
                case "action":
                  qr = Vi;
                  break;
                case "encType":
                  Zl = Vi;
                  break;
                case "method":
                  jr = Vi;
                  break;
                case "target":
                  cl = Vi;
                  break;
                default:
                  vt(
                    i,
                    hu,
                    Vi
                  );
              }
          }
        var ui = null, Wc = null;
        if (typeof qr == "function") {
          var Ki = oc(
            v,
            qr
          );
          Ki !== null ? (qr = Ki.action || "", Zl = Ki.encType, jr = Ki.method, cl = Ki.target, ui = Ki.data, Wc = Ki.name) : (i.push(
            Bn,
            te("action"),
            zr,
            Gt,
            yn
          ), cl = jr = Zl = qr = null, El(v, w));
        }
        if (qr != null && vt(i, "action", qr), Zl != null && vt(i, "encType", Zl), jr != null && vt(i, "method", jr), cl != null && vt(i, "target", cl), i.push(zt), Wc !== null && (i.push(Ba), Pn(i, "name", Wc), i.push(Rl), ui?.forEach(Pr, i)), Xn(i, ko, Xl), typeof Xl == "string") {
          i.push(
            te(Me(Xl))
          );
          var Nc = null;
        } else Nc = Xl;
        return Nc;
      case "menuitem":
        i.push(Jt("menuitem"));
        for (var xc in s)
          if (Qe.call(s, xc)) {
            var Ku = s[xc];
            if (Ku != null)
              switch (xc) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(F(400));
                default:
                  vt(
                    i,
                    xc,
                    Ku
                  );
              }
          }
        return i.push(zt), null;
      case "object":
        i.push(Jt("object"));
        var qu = null, Vc = null, qi;
        for (qi in s)
          if (Qe.call(s, qi)) {
            var Ql = s[qi];
            if (Ql != null)
              switch (qi) {
                case "children":
                  qu = Ql;
                  break;
                case "dangerouslySetInnerHTML":
                  Vc = Ql;
                  break;
                case "data":
                  var Hc = Yt("" + Ql);
                  if (Hc === "") break;
                  i.push(
                    Bn,
                    te("data"),
                    zr,
                    te(Me(Hc)),
                    yn
                  );
                  break;
                default:
                  vt(
                    i,
                    qi,
                    Ql
                  );
              }
          }
        if (i.push(zt), Xn(i, Vc, qu), typeof qu == "string") {
          i.push(
            te(Me(qu))
          );
          var Pa = null;
        } else Pa = qu;
        return Pa;
      case "title":
        if (K.insertionMode === 4 || K.tagScope & 1 || s.itemProp != null)
          var du = ao(
            i,
            s
          );
        else
          X ? du = null : (ao(w.hoistableChunks, s), du = void 0);
        return du;
      case "link":
        var Ec = s.rel, Fa = s.href, gu = s.precedence;
        if (K.insertionMode === 4 || K.tagScope & 1 || s.itemProp != null || typeof Ec != "string" || typeof Fa != "string" || Fa === "") {
          Zn(i, s);
          var Mt = null;
        } else if (s.rel === "stylesheet")
          if (typeof gu != "string" || s.disabled != null || s.onLoad || s.onError)
            Mt = Zn(
              i,
              s
            );
          else {
            var sl = w.styles.get(gu), Co = v.styleResources.hasOwnProperty(Fa) ? v.styleResources[Fa] : void 0;
            if (Co !== null) {
              v.styleResources[Fa] = null, sl || (sl = {
                precedence: te(Me(gu)),
                rules: [],
                hrefs: [],
                sheets: /* @__PURE__ */ new Map()
              }, w.styles.set(gu, sl));
              var Jl = {
                state: 0,
                props: pt({}, s, {
                  "data-precedence": s.precedence,
                  precedence: null
                })
              };
              if (Co) {
                Co.length === 2 && go(Jl.props, Co);
                var So = w.preloads.stylesheets.get(Fa);
                So && 0 < So.length ? So.length = 0 : Jl.state = 1;
              }
              sl.sheets.set(Fa, Jl), O && O.stylesheets.add(Jl);
            } else if (sl) {
              var ju = sl.sheets.get(Fa);
              ju && O && O.stylesheets.add(ju);
            }
            m && i.push(bi), Mt = null;
          }
        else
          s.onLoad || s.onError ? Mt = Zn(
            i,
            s
          ) : (m && i.push(bi), Mt = X ? null : Zn(w.hoistableChunks, s));
        return Mt;
      case "script":
        var vu = s.async;
        if (typeof s.src != "string" || !s.src || !vu || typeof vu == "function" || typeof vu == "symbol" || s.onLoad || s.onError || K.insertionMode === 4 || K.tagScope & 1 || s.itemProp != null)
          var bu = Wa(
            i,
            s
          );
        else {
          var dn = s.src;
          if (s.type === "module")
            var $r = v.moduleScriptResources, en = w.preloads.moduleScripts;
          else
            $r = v.scriptResources, en = w.preloads.scripts;
          var Vl = $r.hasOwnProperty(dn) ? $r[dn] : void 0;
          if (Vl !== null) {
            $r[dn] = null;
            var yu = s;
            if (Vl) {
              Vl.length === 2 && (yu = pt({}, s), go(yu, Vl));
              var fl = en.get(dn);
              fl && (fl.length = 0);
            }
            var Ut = [];
            w.scripts.add(Ut), Wa(Ut, yu);
          }
          m && i.push(bi), bu = null;
        }
        return bu;
      case "style":
        var kc = s.precedence, ji = s.href;
        if (K.insertionMode === 4 || K.tagScope & 1 || s.itemProp != null || typeof kc != "string" || typeof ji != "string" || ji === "") {
          i.push(Jt("style"));
          var Po = null, zc = null, wu;
          for (wu in s)
            if (Qe.call(s, wu)) {
              var $u = s[wu];
              if ($u != null)
                switch (wu) {
                  case "children":
                    Po = $u;
                    break;
                  case "dangerouslySetInnerHTML":
                    zc = $u;
                    break;
                  default:
                    vt(
                      i,
                      wu,
                      $u
                    );
                }
            }
          i.push(zt);
          var Tu = Array.isArray(Po) ? 2 > Po.length ? Po[0] : null : Po;
          typeof Tu != "function" && typeof Tu != "symbol" && Tu !== null && Tu !== void 0 && i.push(
            te(("" + Tu).replace(Iu, yi))
          ), Xn(i, zc, Po), i.push(or("style"));
          var t = null;
        } else {
          var r = w.styles.get(kc);
          if ((v.styleResources.hasOwnProperty(ji) ? v.styleResources[ji] : void 0) !== null) {
            v.styleResources[ji] = null, r ? r.hrefs.push(
              te(Me(ji))
            ) : (r = {
              precedence: te(
                Me(kc)
              ),
              rules: [],
              hrefs: [te(Me(ji))],
              sheets: /* @__PURE__ */ new Map()
            }, w.styles.set(kc, r));
            var u = r.rules, d = null, y = null, R;
            for (R in s)
              if (Qe.call(s, R)) {
                var D = s[R];
                if (D != null)
                  switch (R) {
                    case "children":
                      d = D;
                      break;
                    case "dangerouslySetInnerHTML":
                      y = D;
                  }
              }
            var W = Array.isArray(d) ? 2 > d.length ? d[0] : null : d;
            typeof W != "function" && typeof W != "symbol" && W !== null && W !== void 0 && u.push(
              te(
                ("" + W).replace(Iu, yi)
              )
            ), Xn(u, y, d);
          }
          r && O && O.styles.add(r), m && i.push(bi), t = void 0;
        }
        return t;
      case "meta":
        if (K.insertionMode === 4 || K.tagScope & 1 || s.itemProp != null)
          var de = Fr(
            i,
            s,
            "meta"
          );
        else
          m && i.push(bi), de = X ? null : typeof s.charSet == "string" ? Fr(w.charsetChunks, s, "meta") : s.name === "viewport" ? Fr(w.viewportChunks, s, "meta") : Fr(w.hoistableChunks, s, "meta");
        return de;
      case "listing":
      case "pre":
        i.push(Jt(l));
        var z = null, Fe = null, xe;
        for (xe in s)
          if (Qe.call(s, xe)) {
            var _e = s[xe];
            if (_e != null)
              switch (xe) {
                case "children":
                  z = _e;
                  break;
                case "dangerouslySetInnerHTML":
                  Fe = _e;
                  break;
                default:
                  vt(
                    i,
                    xe,
                    _e
                  );
              }
          }
        if (i.push(zt), Fe != null) {
          if (z != null) throw Error(F(60));
          if (typeof Fe != "object" || !("__html" in Fe))
            throw Error(F(61));
          var De = Fe.__html;
          De != null && (typeof De == "string" && 0 < De.length && De[0] === `
` ? i.push(mu, te(De)) : i.push(te("" + De)));
        }
        return typeof z == "string" && z[0] === `
` && i.push(mu), z;
      case "img":
        var ve = s.src, qe = s.srcSet;
        if (!(s.loading === "lazy" || !ve && !qe || typeof ve != "string" && ve != null || typeof qe != "string" && qe != null) && s.fetchPriority !== "low" && !(K.tagScope & 3) && (typeof ve != "string" || ve[4] !== ":" || ve[0] !== "d" && ve[0] !== "D" || ve[1] !== "a" && ve[1] !== "A" || ve[2] !== "t" && ve[2] !== "T" || ve[3] !== "a" && ve[3] !== "A") && (typeof qe != "string" || qe[4] !== ":" || qe[0] !== "d" && qe[0] !== "D" || qe[1] !== "a" && qe[1] !== "A" || qe[2] !== "t" && qe[2] !== "T" || qe[3] !== "a" && qe[3] !== "A")) {
          var st = typeof s.sizes == "string" ? s.sizes : void 0, je = qe ? qe + `
` + (st || "") : ve, lt = w.preloads.images, tn = lt.get(je);
          if (tn)
            (s.fetchPriority === "high" || 10 > w.highImagePreloads.size) && (lt.delete(je), w.highImagePreloads.add(tn));
          else if (!v.imageResources.hasOwnProperty(je)) {
            v.imageResources[je] = Qt;
            var Je = s.crossOrigin, yt = typeof Je == "string" ? Je === "use-credentials" ? Je : "" : void 0, xt = w.headers, ir;
            xt && 0 < xt.remainingCapacity && typeof s.srcSet != "string" && (s.fetchPriority === "high" || 500 > xt.highImagePreloads.length) && (ir = wa(ve, "image", {
              imageSrcSet: s.srcSet,
              imageSizes: s.sizes,
              crossOrigin: yt,
              integrity: s.integrity,
              nonce: s.nonce,
              type: s.type,
              fetchPriority: s.fetchPriority,
              referrerPolicy: s.refererPolicy
            }), 0 <= (xt.remainingCapacity -= ir.length + 2)) ? (w.resets.image[je] = Qt, xt.highImagePreloads && (xt.highImagePreloads += ", "), xt.highImagePreloads += ir) : (tn = [], Zn(tn, {
              rel: "preload",
              as: "image",
              href: qe ? void 0 : ve,
              imageSrcSet: qe,
              imageSizes: st,
              crossOrigin: yt,
              integrity: s.integrity,
              type: s.type,
              fetchPriority: s.fetchPriority,
              referrerPolicy: s.referrerPolicy
            }), s.fetchPriority === "high" || 10 > w.highImagePreloads.size ? w.highImagePreloads.add(tn) : (w.bulkPreloads.add(tn), lt.set(je, tn)));
          }
        }
        return Fr(i, s, "img");
      case "base":
      case "area":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return Fr(i, s, l);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        break;
      case "head":
        if (2 > K.insertionMode) {
          var En = E || w.preamble;
          if (En.headChunks)
            throw Error(F(545, "`<head>`"));
          En.headChunks = [];
          var In = Di(
            En.headChunks,
            s,
            "head"
          );
        } else
          In = Na(
            i,
            s,
            "head"
          );
        return In;
      case "body":
        if (2 > K.insertionMode) {
          var an = E || w.preamble;
          if (an.bodyChunks)
            throw Error(F(545, "`<body>`"));
          an.bodyChunks = [];
          var ci = Di(
            an.bodyChunks,
            s,
            "body"
          );
        } else
          ci = Na(
            i,
            s,
            "body"
          );
        return ci;
      case "html":
        if (K.insertionMode === 0) {
          var xr = E || w.preamble;
          if (xr.htmlChunks)
            throw Error(F(545, "`<html>`"));
          xr.htmlChunks = [Uo];
          var Ft = Di(
            xr.htmlChunks,
            s,
            "html"
          );
        } else
          Ft = Na(
            i,
            s,
            "html"
          );
        return Ft;
      default:
        if (l.indexOf("-") !== -1) {
          i.push(Jt(l));
          var e = null, n = null, c;
          for (c in s)
            if (Qe.call(s, c)) {
              var h = s[c];
              if (h != null) {
                var b = c;
                switch (c) {
                  case "children":
                    e = h;
                    break;
                  case "dangerouslySetInnerHTML":
                    n = h;
                    break;
                  case "style":
                    La(i, h);
                    break;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "ref":
                    break;
                  case "className":
                    b = "class";
                  default:
                    if (M(c) && typeof h != "function" && typeof h != "symbol" && h !== !1) {
                      if (h === !0) h = "";
                      else if (typeof h == "object") continue;
                      i.push(
                        Bn,
                        te(b),
                        zr,
                        te(Me(h)),
                        yn
                      );
                    }
                }
              }
            }
          return i.push(zt), Xn(i, n, e), e;
        }
    }
    return Na(i, s, l);
  }
  var lo = /* @__PURE__ */ new Map();
  function or(i) {
    var l = lo.get(i);
    return l === void 0 && (l = Q("</" + i + ">"), lo.set(i, l)), l;
  }
  function cc(i, l) {
    i = i.preamble, i.htmlChunks === null && l.htmlChunks && (i.htmlChunks = l.htmlChunks, l.contribution |= 1), i.headChunks === null && l.headChunks && (i.headChunks = l.headChunks, l.contribution |= 4), i.bodyChunks === null && l.bodyChunks && (i.bodyChunks = l.bodyChunks, l.contribution |= 2);
  }
  function Ha(i, l) {
    l = l.bootstrapChunks;
    for (var s = 0; s < l.length - 1; s++)
      ae(i, l[s]);
    return s < l.length ? (s = l[s], l.length = 0, P(i, s)) : !0;
  }
  var ni = Q('<template id="'), ha = Q('"></template>'), kl = Q("<!--$-->"), Yo = Q(
    '<!--$?--><template id="'
  ), Cl = Q('"></template>'), Gr = Q("<!--$!-->"), za = Q("<!--/$-->"), Sl = Q("<template"), da = Q('"'), Li = Q(' data-dgst="');
  Q(' data-msg="'), Q(' data-stck="'), Q(' data-cstck="');
  var Qn = Q("></template>");
  function Bi(i, l, s) {
    if (ae(i, Yo), s === null) throw Error(F(395));
    return ae(i, l.boundaryPrefix), ae(i, te(s.toString(16))), P(i, Cl);
  }
  var sc = Q("<!--"), Xr = Q("-->");
  function ga(i, l) {
    l = l.contribution, l !== 0 && (ae(i, sc), ae(i, te("" + l)), ae(i, Xr));
  }
  var oo = Q('<div hidden id="'), Wi = Q('">'), on = Q("</div>"), Ua = Q(
    '<svg aria-hidden="true" style="display:none" id="'
  ), Tr = Q('">'), pr = Q("</svg>"), Go = Q(
    '<math aria-hidden="true" style="display:none" id="'
  ), Xo = Q('">'), Jn = Q("</math>"), uo = Q('<table hidden id="'), kt = Q('">'), Vn = Q("</table>"), Ya = Q('<table hidden><tbody id="'), va = Q('">'), Ni = Q("</tbody></table>"), Hi = Q('<table hidden><tr id="'), Pl = Q('">'), Kn = Q("</tr></table>"), zi = Q(
    '<table hidden><colgroup id="'
  ), ba = Q('">'), Ar = Q("</colgroup></table>");
  function Fl(i, l, s, v) {
    switch (s.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return ae(i, oo), ae(i, l.segmentPrefix), ae(i, te(v.toString(16))), P(i, Wi);
      case 4:
        return ae(i, Ua), ae(i, l.segmentPrefix), ae(i, te(v.toString(16))), P(i, Tr);
      case 5:
        return ae(i, Go), ae(i, l.segmentPrefix), ae(i, te(v.toString(16))), P(i, Xo);
      case 6:
        return ae(i, uo), ae(i, l.segmentPrefix), ae(i, te(v.toString(16))), P(i, kt);
      case 7:
        return ae(i, Ya), ae(i, l.segmentPrefix), ae(i, te(v.toString(16))), P(i, va);
      case 8:
        return ae(i, Hi), ae(i, l.segmentPrefix), ae(i, te(v.toString(16))), P(i, Pl);
      case 9:
        return ae(i, zi), ae(i, l.segmentPrefix), ae(i, te(v.toString(16))), P(i, ba);
      default:
        throw Error(F(397));
    }
  }
  function ya(i, l) {
    switch (l.insertionMode) {
      case 0:
      case 1:
      case 3:
      case 2:
        return P(i, on);
      case 4:
        return P(i, pr);
      case 5:
        return P(i, Jn);
      case 6:
        return P(i, Vn);
      case 7:
        return P(i, Ni);
      case 8:
        return P(i, Kn);
      case 9:
        return P(i, Ar);
      default:
        throw Error(F(397));
    }
  }
  var wi = Q(
    '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  ), Ui = Q('$RS("'), Zo = Q('","'), Al = Q('")<\/script>');
  Q('<template data-rsi="" data-sid="'), Q('" data-pid="');
  var Du = Q(
    '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
  ), Ga = Q('$RC("'), Qo = Q(
    `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  ), Lu = Q(
    `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
  ), co = Q('$RR("'), Jo = Q('","'), fc = Q('",'), so = Q('"'), Xa = Q(")<\/script>");
  Q('<template data-rci="" data-bid="'), Q('<template data-rri="" data-bid="'), Q('" data-sid="'), Q('" data-sty="');
  var Ml = Q(
    '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
  ), Za = Q('$RX("'), Vo = Q('"'), Qa = Q(","), Ol = Q(")<\/script>");
  Q('<template data-rxi="" data-bid="'), Q('" data-dgst="'), Q('" data-msg="'), Q('" data-stck="'), Q('" data-cstck="');
  var _l = /[<\u2028\u2029]/g;
  function Ja(i) {
    return JSON.stringify(i).replace(
      _l,
      function(l) {
        switch (l) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var Va = /[&><\u2028\u2029]/g;
  function Ti(i) {
    return JSON.stringify(i).replace(
      Va,
      function(l) {
        switch (l) {
          case "&":
            return "\\u0026";
          case ">":
            return "\\u003e";
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error(
              "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
            );
        }
      }
    );
  }
  var Yi = Q(
    '<style media="not all" data-precedence="'
  ), Ko = Q('" data-href="'), Il = Q('">'), qn = Q("</style>"), Ka = !1, pi = !0;
  function qa(i) {
    var l = i.rules, s = i.hrefs, v = 0;
    if (s.length) {
      for (ae(this, Yi), ae(this, i.precedence), ae(this, Ko); v < s.length - 1; v++)
        ae(this, s[v]), ae(this, Pt);
      for (ae(this, s[v]), ae(this, Il), v = 0; v < l.length; v++) ae(this, l[v]);
      pi = P(
        this,
        qn
      ), Ka = !0, l.length = 0, s.length = 0;
    }
  }
  function fo(i) {
    return i.state !== 2 ? Ka = !0 : !1;
  }
  function Ri(i, l, s) {
    return Ka = !1, pi = !0, l.styles.forEach(qa, i), l.stylesheets.forEach(fo), Ka && (s.stylesToHoist = !0), pi;
  }
  function Xt(i) {
    for (var l = 0; l < i.length; l++) ae(this, i[l]);
    i.length = 0;
  }
  var wn = [];
  function Mr(i) {
    Zn(wn, i.props);
    for (var l = 0; l < wn.length; l++)
      ae(this, wn[l]);
    wn.length = 0, i.state = 2;
  }
  var ja = Q(
    '<style data-precedence="'
  ), rn = Q('" data-href="'), Pt = Q(" "), Bu = Q('">'), qo = Q("</style>");
  function Fn(i) {
    var l = 0 < i.sheets.size;
    i.sheets.forEach(Mr, this), i.sheets.clear();
    var s = i.rules, v = i.hrefs;
    if (!l || v.length) {
      if (ae(this, ja), ae(this, i.precedence), i = 0, v.length) {
        for (ae(this, rn); i < v.length - 1; i++)
          ae(this, v[i]), ae(this, Pt);
        ae(this, v[i]);
      }
      for (ae(this, Bu), i = 0; i < s.length; i++)
        ae(this, s[i]);
      ae(this, qo), s.length = 0, v.length = 0;
    }
  }
  function Wu(i) {
    if (i.state === 0) {
      i.state = 1;
      var l = i.props;
      for (Zn(wn, {
        rel: "preload",
        as: "style",
        href: i.props.href,
        crossOrigin: l.crossOrigin,
        fetchPriority: l.fetchPriority,
        integrity: l.integrity,
        media: l.media,
        hrefLang: l.hrefLang,
        referrerPolicy: l.referrerPolicy
      }), i = 0; i < wn.length; i++)
        ae(this, wn[i]);
      wn.length = 0;
    }
  }
  function Nu(i) {
    i.sheets.forEach(Wu, this), i.sheets.clear();
  }
  var ho = Q("["), jo = Q(",["), Gi = Q(","), Zr = Q("]");
  function Ic(i, l) {
    ae(i, ho);
    var s = ho;
    l.stylesheets.forEach(function(v) {
      if (v.state !== 2)
        if (v.state === 3)
          ae(i, s), ae(
            i,
            te(
              Ti("" + v.props.href)
            )
          ), ae(i, Zr), s = jo;
        else {
          ae(i, s);
          var w = v.props["data-precedence"], E = v.props, O = Yt("" + v.props.href);
          ae(
            i,
            te(Ti(O))
          ), w = "" + w, ae(i, Gi), ae(
            i,
            te(Ti(w))
          );
          for (var K in E)
            if (Qe.call(E, K) && (w = E[K], w != null))
              switch (K) {
                case "href":
                case "rel":
                case "precedence":
                case "data-precedence":
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(F(399, "link"));
                default:
                  Wn(
                    i,
                    K,
                    w
                  );
              }
          ae(i, Zr), s = jo, v.state = 3;
        }
    }), ae(i, Zr);
  }
  function Wn(i, l, s) {
    var v = l.toLowerCase();
    switch (typeof s) {
      case "function":
      case "symbol":
        return;
    }
    switch (l) {
      case "innerHTML":
      case "dangerouslySetInnerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "style":
      case "ref":
        return;
      case "className":
        v = "class", l = "" + s;
        break;
      case "hidden":
        if (s === !1) return;
        l = "";
        break;
      case "src":
      case "href":
        s = Yt(s), l = "" + s;
        break;
      default:
        if (2 < l.length && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N") || !M(l))
          return;
        l = "" + s;
    }
    ae(i, Gi), ae(
      i,
      te(Ti(v))
    ), ae(i, Gi), ae(
      i,
      te(Ti(l))
    );
  }
  function ur() {
    return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
  }
  function cr(i) {
    var l = pn || null;
    if (l) {
      var s = l.resumableState, v = l.renderState;
      if (typeof i == "string" && i) {
        if (!s.dnsResources.hasOwnProperty(i)) {
          s.dnsResources[i] = null, s = v.headers;
          var w, E;
          (E = s && 0 < s.remainingCapacity) && (E = (w = "<" + ("" + i).replace(
            ri,
            Or
          ) + ">; rel=dns-prefetch", 0 <= (s.remainingCapacity -= w.length + 2))), E ? (v.resets.dns[i] = null, s.preconnects && (s.preconnects += ", "), s.preconnects += w) : (w = [], Zn(w, { href: i, rel: "dns-prefetch" }), v.preconnects.add(w));
        }
        ol(l);
      }
    } else Cn.D(i);
  }
  function Kt(i, l) {
    var s = pn || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (typeof i == "string" && i) {
        var E = l === "use-credentials" ? "credentials" : typeof l == "string" ? "anonymous" : "default";
        if (!v.connectResources[E].hasOwnProperty(i)) {
          v.connectResources[E][i] = null, v = w.headers;
          var O, K;
          if (K = v && 0 < v.remainingCapacity) {
            if (K = "<" + ("" + i).replace(
              ri,
              Or
            ) + ">; rel=preconnect", typeof l == "string") {
              var m = ("" + l).replace(
                vo,
                eu
              );
              K += '; crossorigin="' + m + '"';
            }
            K = (O = K, 0 <= (v.remainingCapacity -= O.length + 2));
          }
          K ? (w.resets.connect[E][i] = null, v.preconnects && (v.preconnects += ", "), v.preconnects += O) : (E = [], Zn(E, {
            rel: "preconnect",
            href: i,
            crossOrigin: l
          }), w.preconnects.add(E));
        }
        ol(s);
      }
    } else Cn.C(i, l);
  }
  function Ct(i, l, s) {
    var v = pn || null;
    if (v) {
      var w = v.resumableState, E = v.renderState;
      if (l && i) {
        switch (l) {
          case "image":
            if (s)
              var O = s.imageSrcSet, K = s.imageSizes, m = s.fetchPriority;
            var X = O ? O + `
` + (K || "") : i;
            if (w.imageResources.hasOwnProperty(X)) return;
            w.imageResources[X] = Qt, w = E.headers;
            var Ce;
            w && 0 < w.remainingCapacity && typeof O != "string" && m === "high" && (Ce = wa(i, l, s), 0 <= (w.remainingCapacity -= Ce.length + 2)) ? (E.resets.image[X] = Qt, w.highImagePreloads && (w.highImagePreloads += ", "), w.highImagePreloads += Ce) : (w = [], Zn(
              w,
              pt(
                { rel: "preload", href: O ? void 0 : i, as: l },
                s
              )
            ), m === "high" ? E.highImagePreloads.add(w) : (E.bulkPreloads.add(w), E.preloads.images.set(X, w)));
            break;
          case "style":
            if (w.styleResources.hasOwnProperty(i)) return;
            O = [], Zn(
              O,
              pt({ rel: "preload", href: i, as: l }, s)
            ), w.styleResources[i] = !s || typeof s.crossOrigin != "string" && typeof s.integrity != "string" ? Qt : [s.crossOrigin, s.integrity], E.preloads.stylesheets.set(i, O), E.bulkPreloads.add(O);
            break;
          case "script":
            if (w.scriptResources.hasOwnProperty(i)) return;
            O = [], E.preloads.scripts.set(i, O), E.bulkPreloads.add(O), Zn(
              O,
              pt({ rel: "preload", href: i, as: l }, s)
            ), w.scriptResources[i] = !s || typeof s.crossOrigin != "string" && typeof s.integrity != "string" ? Qt : [s.crossOrigin, s.integrity];
            break;
          default:
            if (w.unknownResources.hasOwnProperty(l)) {
              if (O = w.unknownResources[l], O.hasOwnProperty(i))
                return;
            } else
              O = {}, w.unknownResources[l] = O;
            if (O[i] = Qt, (w = E.headers) && 0 < w.remainingCapacity && l === "font" && (X = wa(i, l, s), 0 <= (w.remainingCapacity -= X.length + 2)))
              E.resets.font[i] = Qt, w.fontPreloads && (w.fontPreloads += ", "), w.fontPreloads += X;
            else
              switch (w = [], i = pt({ rel: "preload", href: i, as: l }, s), Zn(w, i), l) {
                case "font":
                  E.fontPreloads.add(w);
                  break;
                default:
                  E.bulkPreloads.add(w);
              }
        }
        ol(v);
      }
    } else Cn.L(i, l, s);
  }
  function $o(i, l) {
    var s = pn || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (i) {
        var E = l && typeof l.as == "string" ? l.as : "script";
        switch (E) {
          case "script":
            if (v.moduleScriptResources.hasOwnProperty(i)) return;
            E = [], v.moduleScriptResources[i] = !l || typeof l.crossOrigin != "string" && typeof l.integrity != "string" ? Qt : [l.crossOrigin, l.integrity], w.preloads.moduleScripts.set(i, E);
            break;
          default:
            if (v.moduleUnknownResources.hasOwnProperty(E)) {
              var O = v.unknownResources[E];
              if (O.hasOwnProperty(i)) return;
            } else
              O = {}, v.moduleUnknownResources[E] = O;
            E = [], O[i] = Qt;
        }
        Zn(E, pt({ rel: "modulepreload", href: i }, l)), w.bulkPreloads.add(E), ol(s);
      }
    } else Cn.m(i, l);
  }
  function Hu(i, l, s) {
    var v = pn || null;
    if (v) {
      var w = v.resumableState, E = v.renderState;
      if (i) {
        l = l || "default";
        var O = E.styles.get(l), K = w.styleResources.hasOwnProperty(i) ? w.styleResources[i] : void 0;
        K !== null && (w.styleResources[i] = null, O || (O = {
          precedence: te(Me(l)),
          rules: [],
          hrefs: [],
          sheets: /* @__PURE__ */ new Map()
        }, E.styles.set(l, O)), l = {
          state: 0,
          props: pt(
            { rel: "stylesheet", href: i, "data-precedence": l },
            s
          )
        }, K && (K.length === 2 && go(l.props, K), (E = E.preloads.stylesheets.get(i)) && 0 < E.length ? E.length = 0 : l.state = 1), O.sheets.set(i, l), ol(v));
      }
    } else Cn.S(i, l, s);
  }
  function hc(i, l) {
    var s = pn || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (i) {
        var E = v.scriptResources.hasOwnProperty(i) ? v.scriptResources[i] : void 0;
        E !== null && (v.scriptResources[i] = null, l = pt({ src: i, async: !0 }, l), E && (E.length === 2 && go(l, E), i = w.preloads.scripts.get(i)) && (i.length = 0), i = [], w.scripts.add(i), Wa(i, l), ol(s));
      }
    } else Cn.X(i, l);
  }
  function dc(i, l) {
    var s = pn || null;
    if (s) {
      var v = s.resumableState, w = s.renderState;
      if (i) {
        var E = v.moduleScriptResources.hasOwnProperty(
          i
        ) ? v.moduleScriptResources[i] : void 0;
        E !== null && (v.moduleScriptResources[i] = null, l = pt({ src: i, type: "module", async: !0 }, l), E && (E.length === 2 && go(l, E), i = w.preloads.moduleScripts.get(i)) && (i.length = 0), i = [], w.scripts.add(i), Wa(i, l), ol(s));
      }
    } else Cn.M(i, l);
  }
  function go(i, l) {
    i.crossOrigin == null && (i.crossOrigin = l[0]), i.integrity == null && (i.integrity = l[1]);
  }
  function wa(i, l, s) {
    i = ("" + i).replace(
      ri,
      Or
    ), l = ("" + l).replace(
      vo,
      eu
    ), l = "<" + i + '>; rel=preload; as="' + l + '"';
    for (var v in s)
      Qe.call(s, v) && (i = s[v], typeof i == "string" && (l += "; " + v.toLowerCase() + '="' + ("" + i).replace(
        vo,
        eu
      ) + '"'));
    return l;
  }
  var ri = /[<>\r\n]/g;
  function Or(i) {
    switch (i) {
      case "<":
        return "%3C";
      case ">":
        return "%3E";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  var vo = /["';,\r\n]/g;
  function eu(i) {
    switch (i) {
      case '"':
        return "%22";
      case "'":
        return "%27";
      case ";":
        return "%3B";
      case ",":
        return "%2C";
      case `
`:
        return "%0A";
      case "\r":
        return "%0D";
      default:
        throw Error(
          "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
        );
    }
  }
  function zu(i) {
    this.styles.add(i);
  }
  function bo(i) {
    this.stylesheets.add(i);
  }
  var An = Function.prototype.bind, Xc = Symbol.for("react.client.reference");
  function sr(i) {
    if (i == null) return null;
    if (typeof i == "function")
      return i.$$typeof === Xc ? null : i.displayName || i.name || null;
    if (typeof i == "string") return i;
    switch (i) {
      case Z:
        return "Fragment";
      case C:
        return "Profiler";
      case Y:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case G:
        return "SuspenseList";
      case he:
        return "Activity";
    }
    if (typeof i == "object")
      switch (i.$$typeof) {
        case oe:
          return "Portal";
        case k:
          return (i.displayName || "Context") + ".Provider";
        case ue:
          return (i._context.displayName || "Context") + ".Consumer";
        case B:
          var l = i.render;
          return i = i.displayName, i || (i = l.displayName || l.name || "", i = i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef"), i;
        case U:
          return l = i.displayName || null, l !== null ? l : sr(i.type) || "Memo";
        case fe:
          l = i._payload, i = i._init;
          try {
            return sr(i(l));
          } catch {
          }
      }
    return null;
  }
  var gc = {}, $a = null;
  function a(i, l) {
    if (i !== l) {
      i.context._currentValue = i.parentValue, i = i.parent;
      var s = l.parent;
      if (i === null) {
        if (s !== null) throw Error(F(401));
      } else {
        if (s === null) throw Error(F(401));
        a(i, s);
      }
      l.context._currentValue = l.value;
    }
  }
  function o(i) {
    i.context._currentValue = i.parentValue, i = i.parent, i !== null && o(i);
  }
  function f(i) {
    var l = i.parent;
    l !== null && f(l), i.context._currentValue = i.value;
  }
  function g(i, l) {
    if (i.context._currentValue = i.parentValue, i = i.parent, i === null) throw Error(F(402));
    i.depth === l.depth ? a(i, l) : g(i, l);
  }
  function T(i, l) {
    var s = l.parent;
    if (s === null) throw Error(F(402));
    i.depth === s.depth ? a(i, s) : T(i, s), l.context._currentValue = l.value;
  }
  function x(i) {
    var l = $a;
    l !== i && (l === null ? f(i) : i === null ? o(l) : l.depth === i.depth ? a(l, i) : l.depth > i.depth ? g(l, i) : T(l, i), $a = i);
  }
  var A = {
    enqueueSetState: function(i, l) {
      i = i._reactInternals, i.queue !== null && i.queue.push(l);
    },
    enqueueReplaceState: function(i, l) {
      i = i._reactInternals, i.replace = !0, i.queue = [l];
    },
    enqueueForceUpdate: function() {
    }
  }, ne = { id: 1, overflow: "" };
  function J(i, l, s) {
    var v = i.id;
    i = i.overflow;
    var w = 32 - ie(v) - 1;
    v &= ~(1 << w), s += 1;
    var E = 32 - ie(l) + w;
    if (30 < E) {
      var O = w - w % 5;
      return E = (v & (1 << O) - 1).toString(32), v >>= O, w -= O, {
        id: 1 << 32 - ie(l) + w | s << w | v,
        overflow: E + i
      };
    }
    return {
      id: 1 << E | s << w | v,
      overflow: i
    };
  }
  var ie = Math.clz32 ? Math.clz32 : Le, Be = Math.log, ke = Math.LN2;
  function Le(i) {
    return i >>>= 0, i === 0 ? 32 : 31 - (Be(i) / ke | 0) | 0;
  }
  var Ne = Error(F(460));
  function tt() {
  }
  function ze(i, l, s) {
    switch (s = i[s], s === void 0 ? i.push(l) : s !== l && (l.then(tt, tt), l = s), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw l.reason;
      default:
        switch (typeof l.status == "string" ? l.then(tt, tt) : (i = l, i.status = "pending", i.then(
          function(v) {
            if (l.status === "pending") {
              var w = l;
              w.status = "fulfilled", w.value = v;
            }
          },
          function(v) {
            if (l.status === "pending") {
              var w = l;
              w.status = "rejected", w.reason = v;
            }
          }
        )), l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw l.reason;
        }
        throw bt = l, Ne;
    }
  }
  var bt = null;
  function St() {
    if (bt === null) throw Error(F(459));
    var i = bt;
    return bt = null, i;
  }
  function Rt(i, l) {
    return i === l && (i !== 0 || 1 / i === 1 / l) || i !== i && l !== l;
  }
  var Nt = typeof Object.is == "function" ? Object.is : Rt, Ue = null, ft = null, rt = null, Mn = null, jn = null, Xe = null, At = !1, un = !1, Tn = 0, xi = 0, mt = -1, cn = 0, fr = null, $n = null, Ei = 0;
  function er() {
    if (Ue === null)
      throw Error(F(321));
    return Ue;
  }
  function ii() {
    if (0 < Ei) throw Error(F(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function _r() {
    return Xe === null ? jn === null ? (At = !1, jn = Xe = ii()) : (At = !0, Xe = jn) : Xe.next === null ? (At = !1, Xe = Xe.next = ii()) : (At = !0, Xe = Xe.next), Xe;
  }
  function sn() {
    var i = fr;
    return fr = null, i;
  }
  function Qr() {
    Mn = rt = ft = Ue = null, un = !1, jn = null, Ei = 0, Xe = $n = null;
  }
  function Ir(i, l) {
    return typeof l == "function" ? l(i) : l;
  }
  function ki(i, l, s) {
    if (Ue = er(), Xe = _r(), At) {
      var v = Xe.queue;
      if (l = v.dispatch, $n !== null && (s = $n.get(v), s !== void 0)) {
        $n.delete(v), v = Xe.memoizedState;
        do
          v = i(v, s.action), s = s.next;
        while (s !== null);
        return Xe.memoizedState = v, [v, l];
      }
      return [Xe.memoizedState, l];
    }
    return i = i === Ir ? typeof l == "function" ? l() : l : s !== void 0 ? s(l) : l, Xe.memoizedState = i, i = Xe.queue = { last: null, dispatch: null }, i = i.dispatch = Jr.bind(
      null,
      Ue,
      i
    ), [Xe.memoizedState, i];
  }
  function ai(i, l) {
    if (Ue = er(), Xe = _r(), l = l === void 0 ? null : l, Xe !== null) {
      var s = Xe.memoizedState;
      if (s !== null && l !== null) {
        var v = s[1];
        e: if (v === null) v = !1;
        else {
          for (var w = 0; w < v.length && w < l.length; w++)
            if (!Nt(l[w], v[w])) {
              v = !1;
              break e;
            }
          v = !0;
        }
        if (v) return s[0];
      }
    }
    return i = i(), Xe.memoizedState = [i, l], i;
  }
  function Jr(i, l, s) {
    if (25 <= Ei) throw Error(F(301));
    if (i === Ue)
      if (un = !0, i = { action: s, next: null }, $n === null && ($n = /* @__PURE__ */ new Map()), s = $n.get(l), s === void 0)
        $n.set(l, i);
      else {
        for (l = s; l.next !== null; ) l = l.next;
        l.next = i;
      }
  }
  function Uu() {
    throw Error(F(394));
  }
  function Ta() {
    throw Error(F(479));
  }
  function Ci(i, l, s) {
    er();
    var v = xi++, w = rt;
    if (typeof i.$$FORM_ACTION == "function") {
      var E = null, O = Mn;
      w = w.formState;
      var K = i.$$IS_SIGNATURE_EQUAL;
      if (w !== null && typeof K == "function") {
        var m = w[1];
        K.call(i, w[2], w[3]) && (E = s !== void 0 ? "p" + s : "k" + Ve(
          JSON.stringify([O, null, v]),
          0
        ), m === E && (mt = v, l = w[0]));
      }
      var X = i.bind(null, l);
      return i = function(ge) {
        X(ge);
      }, typeof X.$$FORM_ACTION == "function" && (i.$$FORM_ACTION = function(ge) {
        ge = X.$$FORM_ACTION(ge), s !== void 0 && (s += "", ge.action = s);
        var We = ge.data;
        return We && (E === null && (E = s !== void 0 ? "p" + s : "k" + Ve(
          JSON.stringify([
            O,
            null,
            v
          ]),
          0
        )), We.append("$ACTION_KEY", E)), ge;
      }), [l, i, !1];
    }
    var Ce = i.bind(null, l);
    return [
      l,
      function(ge) {
        Ce(ge);
      },
      !1
    ];
  }
  function tu(i) {
    var l = cn;
    return cn += 1, fr === null && (fr = []), ze(fr, i, l);
  }
  function vc() {
    throw Error(F(393));
  }
  function ml() {
  }
  var bc = {
    readContext: function(i) {
      return i._currentValue;
    },
    use: function(i) {
      if (i !== null && typeof i == "object") {
        if (typeof i.then == "function") return tu(i);
        if (i.$$typeof === k) return i._currentValue;
      }
      throw Error(F(438, String(i)));
    },
    useContext: function(i) {
      return er(), i._currentValue;
    },
    useMemo: ai,
    useReducer: ki,
    useRef: function(i) {
      Ue = er(), Xe = _r();
      var l = Xe.memoizedState;
      return l === null ? (i = { current: i }, Xe.memoizedState = i) : l;
    },
    useState: function(i) {
      return ki(Ir, i);
    },
    useInsertionEffect: ml,
    useLayoutEffect: ml,
    useCallback: function(i, l) {
      return ai(function() {
        return i;
      }, l);
    },
    useImperativeHandle: ml,
    useEffect: ml,
    useDebugValue: ml,
    useDeferredValue: function(i, l) {
      return er(), l !== void 0 ? l : i;
    },
    useTransition: function() {
      return er(), [!1, Uu];
    },
    useId: function() {
      var i = ft.treeContext, l = i.overflow;
      i = i.id, i = (i & ~(1 << 32 - ie(i) - 1)).toString(32) + l;
      var s = On;
      if (s === null) throw Error(F(404));
      return l = Tn++, i = "«" + s.idPrefix + "R" + i, 0 < l && (i += "H" + l.toString(32)), i + "»";
    },
    useSyncExternalStore: function(i, l, s) {
      if (s === void 0)
        throw Error(F(407));
      return s();
    },
    useOptimistic: function(i) {
      return er(), [i, Ta];
    },
    useActionState: Ci,
    useFormState: Ci,
    useHostTransitionStatus: function() {
      return er(), Ia;
    },
    useMemoCache: function(i) {
      for (var l = Array(i), s = 0; s < i; s++)
        l[s] = Ge;
      return l;
    },
    useCacheRefresh: function() {
      return vc;
    }
  }, On = null, hr = {
    getCacheForType: function() {
      throw Error(F(248));
    }
  }, qt, nu;
  function Si(i) {
    if (qt === void 0)
      try {
        throw Error();
      } catch (s) {
        var l = s.stack.trim().match(/\n( *(at )?)/);
        qt = l && l[1] || "", nu = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + qt + i + nu;
  }
  var el = !1;
  function jt(i, l) {
    if (!i || el) return "";
    el = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var v = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var ge = function() {
                throw Error();
              };
              if (Object.defineProperty(ge.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ge, []);
                } catch (Ye) {
                  var We = Ye;
                }
                Reflect.construct(i, [], ge);
              } else {
                try {
                  ge.call();
                } catch (Ye) {
                  We = Ye;
                }
                i.call(ge.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Ye) {
                We = Ye;
              }
              (ge = i()) && typeof ge.catch == "function" && ge.catch(function() {
              });
            }
          } catch (Ye) {
            if (Ye && We && typeof Ye.stack == "string")
              return [Ye.stack, We.stack];
          }
          return [null, null];
        }
      };
      v.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var w = Object.getOwnPropertyDescriptor(
        v.DetermineComponentFrameRoot,
        "name"
      );
      w && w.configurable && Object.defineProperty(
        v.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var E = v.DetermineComponentFrameRoot(), O = E[0], K = E[1];
      if (O && K) {
        var m = O.split(`
`), X = K.split(`
`);
        for (w = v = 0; v < m.length && !m[v].includes("DetermineComponentFrameRoot"); )
          v++;
        for (; w < X.length && !X[w].includes(
          "DetermineComponentFrameRoot"
        ); )
          w++;
        if (v === m.length || w === X.length)
          for (v = m.length - 1, w = X.length - 1; 1 <= v && 0 <= w && m[v] !== X[w]; )
            w--;
        for (; 1 <= v && 0 <= w; v--, w--)
          if (m[v] !== X[w]) {
            if (v !== 1 || w !== 1)
              do
                if (v--, w--, 0 > w || m[v] !== X[w]) {
                  var Ce = `
` + m[v].replace(" at new ", " at ");
                  return i.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", i.displayName)), Ce;
                }
              while (1 <= v && 0 <= w);
            break;
          }
      }
    } finally {
      el = !1, Error.prepareStackTrace = s;
    }
    return (s = i ? i.displayName || i.name : "") ? Si(s) : "";
  }
  function li(i) {
    if (typeof i == "string") return Si(i);
    if (typeof i == "function")
      return i.prototype && i.prototype.isReactComponent ? jt(i, !0) : jt(i, !1);
    if (typeof i == "object" && i !== null) {
      switch (i.$$typeof) {
        case B:
          return jt(i.render, !1);
        case U:
          return jt(i.type, !1);
        case fe:
          var l = i, s = l._payload;
          l = l._init;
          try {
            i = l(s);
          } catch {
            return Si("Lazy");
          }
          return li(i);
      }
      if (typeof i.name == "string")
        return s = i.env, Si(
          i.name + (s ? " [" + s + "]" : "")
        );
    }
    switch (i) {
      case G:
        return Si("SuspenseList");
      case Ie:
        return Si("Suspense");
    }
    return "";
  }
  function yo(i) {
    if (typeof i == "object" && i !== null && typeof i.environmentName == "string") {
      var l = i.environmentName;
      i = [i].slice(0), typeof i[0] == "string" ? i.splice(
        0,
        1,
        "%c%s%c " + i[0],
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + l + " ",
        ""
      ) : i.splice(
        0,
        0,
        "%c%s%c ",
        "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
        " " + l + " ",
        ""
      ), i.unshift(console), l = An.apply(console.error, i), l();
    } else console.error(i);
    return null;
  }
  function Pi() {
  }
  function wo(i, l, s, v, w, E, O, K, m, X, Ce) {
    var ge = /* @__PURE__ */ new Set();
    this.destination = null, this.flushScheduled = !1, this.resumableState = i, this.renderState = l, this.rootFormatContext = s, this.progressiveChunkSize = v === void 0 ? 12800 : v, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = ge, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = w === void 0 ? yo : w, this.onPostpone = X === void 0 ? Pi : X, this.onAllReady = E === void 0 ? Pi : E, this.onShellReady = O === void 0 ? Pi : O, this.onShellError = K === void 0 ? Pi : K, this.onFatalError = m === void 0 ? Pi : m, this.formState = Ce === void 0 ? null : Ce;
  }
  function Dl(i, l, s, v, w, E, O, K, m, X, Ce, ge) {
    return l = new wo(
      l,
      s,
      v,
      w,
      E,
      O,
      K,
      m,
      X,
      Ce,
      ge
    ), s = Xi(
      l,
      0,
      null,
      v,
      !1,
      !1
    ), s.parentFlushed = !0, i = Ll(
      l,
      null,
      i,
      -1,
      null,
      s,
      null,
      null,
      l.abortableTasks,
      null,
      v,
      null,
      ne,
      null,
      !1
    ), oi(i), l.pingedTasks.push(i), l;
  }
  function pa(i, l, s, v, w, E, O, K, m, X, Ce) {
    return i = Dl(
      i,
      l,
      s,
      v,
      w,
      E,
      O,
      K,
      m,
      X,
      Ce,
      void 0
    ), i.trackedPostpones = {
      workingMap: /* @__PURE__ */ new Map(),
      rootNodes: [],
      rootSlots: null
    }, i;
  }
  var pn = null;
  function ru(i, l) {
    i.pingedTasks.push(l), i.pingedTasks.length === 1 && (i.flushScheduled = i.destination !== null, i.trackedPostpones !== null || i.status === 10 ? se(function() {
      return Gu(i);
    }) : _t(function() {
      return Gu(i);
    }));
  }
  function mr(i, l, s, v) {
    return {
      status: 0,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: l,
      errorDigest: null,
      contentState: ur(),
      fallbackState: ur(),
      contentPreamble: s,
      fallbackPreamble: v,
      trackedContentKeyPath: null,
      trackedFallbackNode: null
    };
  }
  function Ll(i, l, s, v, w, E, O, K, m, X, Ce, ge, We, Ye, Ke) {
    i.allPendingTasks++, w === null ? i.pendingRootTasks++ : w.pendingTasks++;
    var at = {
      replay: null,
      node: s,
      childIndex: v,
      ping: function() {
        return ru(i, at);
      },
      blockedBoundary: w,
      blockedSegment: E,
      blockedPreamble: O,
      hoistableState: K,
      abortSet: m,
      keyPath: X,
      formatContext: Ce,
      context: ge,
      treeContext: We,
      componentStack: Ye,
      thenableState: l,
      isFallback: Ke
    };
    return m.add(at), at;
  }
  function tl(i, l, s, v, w, E, O, K, m, X, Ce, ge, We, Ye) {
    i.allPendingTasks++, E === null ? i.pendingRootTasks++ : E.pendingTasks++, s.pendingTasks++;
    var Ke = {
      replay: s,
      node: v,
      childIndex: w,
      ping: function() {
        return ru(i, Ke);
      },
      blockedBoundary: E,
      blockedSegment: null,
      blockedPreamble: null,
      hoistableState: O,
      abortSet: K,
      keyPath: m,
      formatContext: X,
      context: Ce,
      treeContext: ge,
      componentStack: We,
      thenableState: l,
      isFallback: Ye
    };
    return K.add(Ke), Ke;
  }
  function Xi(i, l, s, v, w, E) {
    return {
      status: 0,
      parentFlushed: !1,
      id: -1,
      index: l,
      chunks: [],
      children: [],
      preambleChildren: [],
      parentFormatContext: v,
      boundary: s,
      lastPushedText: w,
      textEmbedded: E
    };
  }
  function oi(i) {
    var l = i.node;
    if (typeof l == "object" && l !== null)
      switch (l.$$typeof) {
        case ee:
          i.componentStack = { parent: i.componentStack, type: l.type };
      }
  }
  function nl(i) {
    var l = {};
    return i && Object.defineProperty(l, "componentStack", {
      configurable: !0,
      enumerable: !0,
      get: function() {
        try {
          var s = "", v = i;
          do
            s += li(v.type), v = v.parent;
          while (v);
          var w = s;
        } catch (E) {
          w = `
Error generating stack: ` + E.message + `
` + E.stack;
        }
        return Object.defineProperty(l, "componentStack", {
          value: w
        }), w;
      }
    }), l;
  }
  function tr(i, l, s) {
    if (i = i.onError, l = i(l, s), l == null || typeof l == "string") return l;
  }
  function Ra(i, l) {
    var s = i.onShellError, v = i.onFatalError;
    s(l), v(l), i.destination !== null ? (i.status = 14, nt(i.destination, l)) : (i.status = 13, i.fatalError = l);
  }
  function yc(i, l, s, v, w, E) {
    var O = l.thenableState;
    for (l.thenableState = null, Ue = {}, ft = l, rt = i, Mn = s, xi = Tn = 0, mt = -1, cn = 0, fr = O, i = v(w, E); un; )
      un = !1, xi = Tn = 0, mt = -1, cn = 0, Ei += 1, Xe = null, i = v(w, E);
    return Qr(), i;
  }
  function iu(i, l, s, v, w, E, O) {
    var K = !1;
    if (E !== 0 && i.formState !== null) {
      var m = l.blockedSegment;
      if (m !== null) {
        K = !0, m = m.chunks;
        for (var X = 0; X < E; X++)
          X === O ? m.push(Oc) : m.push(mi);
      }
    }
    E = l.keyPath, l.keyPath = s, w ? (s = l.treeContext, l.treeContext = J(s, 1, 0), Vr(i, l, v, -1), l.treeContext = s) : K ? Vr(i, l, v, -1) : _n(i, l, v, -1), l.keyPath = E;
  }
  function To(i, l, s, v, w, E) {
    if (typeof v == "function")
      if (v.prototype && v.prototype.isReactComponent) {
        var O = w;
        if ("ref" in w) {
          O = {};
          for (var K in w)
            K !== "ref" && (O[K] = w[K]);
        }
        var m = v.defaultProps;
        if (m) {
          O === w && (O = pt({}, O, w));
          for (var X in m)
            O[X] === void 0 && (O[X] = m[X]);
        }
        w = O, O = gc, m = v.contextType, typeof m == "object" && m !== null && (O = m._currentValue), O = new v(w, O);
        var Ce = O.state !== void 0 ? O.state : null;
        if (O.updater = A, O.props = w, O.state = Ce, m = { queue: [], replace: !1 }, O._reactInternals = m, E = v.contextType, O.context = typeof E == "object" && E !== null ? E._currentValue : gc, E = v.getDerivedStateFromProps, typeof E == "function" && (E = E(w, Ce), Ce = E == null ? Ce : pt({}, Ce, E), O.state = Ce), typeof v.getDerivedStateFromProps != "function" && typeof O.getSnapshotBeforeUpdate != "function" && (typeof O.UNSAFE_componentWillMount == "function" || typeof O.componentWillMount == "function"))
          if (v = O.state, typeof O.componentWillMount == "function" && O.componentWillMount(), typeof O.UNSAFE_componentWillMount == "function" && O.UNSAFE_componentWillMount(), v !== O.state && A.enqueueReplaceState(
            O,
            O.state,
            null
          ), m.queue !== null && 0 < m.queue.length)
            if (v = m.queue, E = m.replace, m.queue = null, m.replace = !1, E && v.length === 1)
              O.state = v[0];
            else {
              for (m = E ? v[0] : O.state, Ce = !0, E = E ? 1 : 0; E < v.length; E++)
                X = v[E], X = typeof X == "function" ? X.call(O, m, w, void 0) : X, X != null && (Ce ? (Ce = !1, m = pt({}, m, X)) : pt(m, X));
              O.state = m;
            }
          else m.queue = null;
        if (v = O.render(), i.status === 12) throw null;
        w = l.keyPath, l.keyPath = s, _n(i, l, v, -1), l.keyPath = w;
      } else {
        if (v = yc(i, l, s, v, w, void 0), i.status === 12) throw null;
        iu(
          i,
          l,
          s,
          v,
          Tn !== 0,
          xi,
          mt
        );
      }
    else if (typeof v == "string")
      if (O = l.blockedSegment, O === null)
        O = w.children, m = l.formatContext, Ce = l.keyPath, l.formatContext = Da(m, v, w), l.keyPath = s, Vr(i, l, O, -1), l.formatContext = m, l.keyPath = Ce;
      else {
        E = uc(
          O.chunks,
          v,
          w,
          i.resumableState,
          i.renderState,
          l.blockedPreamble,
          l.hoistableState,
          l.formatContext,
          O.lastPushedText,
          l.isFallback
        ), O.lastPushedText = !1, m = l.formatContext, Ce = l.keyPath, l.keyPath = s, (l.formatContext = Da(m, v, w)).insertionMode === 3 ? (s = Xi(
          i,
          0,
          null,
          l.formatContext,
          !1,
          !1
        ), O.preambleChildren.push(s), s = Ll(
          i,
          null,
          E,
          -1,
          l.blockedBoundary,
          s,
          l.blockedPreamble,
          l.hoistableState,
          i.abortableTasks,
          l.keyPath,
          l.formatContext,
          l.context,
          l.treeContext,
          l.componentStack,
          l.isFallback
        ), oi(s), i.pingedTasks.push(s)) : Vr(i, l, E, -1), l.formatContext = m, l.keyPath = Ce;
        e: {
          switch (l = O.chunks, i = i.resumableState, v) {
            case "title":
            case "style":
            case "script":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "img":
            case "input":
            case "keygen":
            case "link":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
              break e;
            case "body":
              if (1 >= m.insertionMode) {
                i.hasBody = !0;
                break e;
              }
              break;
            case "html":
              if (m.insertionMode === 0) {
                i.hasHtml = !0;
                break e;
              }
              break;
            case "head":
              if (1 >= m.insertionMode) break e;
          }
          l.push(or(v));
        }
        O.lastPushedText = !1;
      }
    else {
      switch (v) {
        case pe:
        case Y:
        case C:
        case Z:
          v = l.keyPath, l.keyPath = s, _n(i, l, w.children, -1), l.keyPath = v;
          return;
        case he:
          w.mode !== "hidden" && (v = l.keyPath, l.keyPath = s, _n(i, l, w.children, -1), l.keyPath = v);
          return;
        case G:
          v = l.keyPath, l.keyPath = s, _n(i, l, w.children, -1), l.keyPath = v;
          return;
        case Re:
        case Et:
          throw Error(F(343));
        case Ie:
          e: if (l.replay !== null) {
            v = l.keyPath, l.keyPath = s, s = w.children;
            try {
              Vr(i, l, s, -1);
            } finally {
              l.keyPath = v;
            }
          } else {
            v = l.keyPath;
            var ge = l.blockedBoundary;
            E = l.blockedPreamble;
            var We = l.hoistableState;
            X = l.blockedSegment, K = w.fallback, w = w.children;
            var Ye = /* @__PURE__ */ new Set(), Ke = 2 > l.formatContext.insertionMode ? mr(
              i,
              Ye,
              wt(),
              wt()
            ) : mr(i, Ye, null, null);
            i.trackedPostpones !== null && (Ke.trackedContentKeyPath = s);
            var at = Xi(
              i,
              X.chunks.length,
              Ke,
              l.formatContext,
              !1,
              !1
            );
            X.children.push(at), X.lastPushedText = !1;
            var Dt = Xi(
              i,
              0,
              null,
              l.formatContext,
              !1,
              !1
            );
            if (Dt.parentFlushed = !0, i.trackedPostpones !== null) {
              O = [s[0], "Suspense Fallback", s[2]], m = [O[1], O[2], [], null], i.trackedPostpones.workingMap.set(O, m), Ke.trackedFallbackNode = m, l.blockedSegment = at, l.blockedPreamble = Ke.fallbackPreamble, l.keyPath = O, at.status = 6;
              try {
                Vr(i, l, K, -1), at.lastPushedText && at.textEmbedded && at.chunks.push(bi), at.status = 1;
              } catch (fn) {
                throw at.status = i.status === 12 ? 3 : 4, fn;
              } finally {
                l.blockedSegment = X, l.blockedPreamble = E, l.keyPath = v;
              }
              l = Ll(
                i,
                null,
                w,
                -1,
                Ke,
                Dt,
                Ke.contentPreamble,
                Ke.contentState,
                l.abortSet,
                s,
                l.formatContext,
                l.context,
                l.treeContext,
                l.componentStack,
                l.isFallback
              ), oi(l), i.pingedTasks.push(l);
            } else {
              l.blockedBoundary = Ke, l.blockedPreamble = Ke.contentPreamble, l.hoistableState = Ke.contentState, l.blockedSegment = Dt, l.keyPath = s, Dt.status = 6;
              try {
                if (Vr(i, l, w, -1), Dt.lastPushedText && Dt.textEmbedded && Dt.chunks.push(bi), Dt.status = 1, il(Ke, Dt), Ke.pendingTasks === 0 && Ke.status === 0) {
                  Ke.status = 1, i.pendingRootTasks === 0 && l.blockedPreamble && Fi(i);
                  break e;
                }
              } catch (fn) {
                Ke.status = 4, i.status === 12 ? (Dt.status = 3, O = i.fatalError) : (Dt.status = 4, O = fn), m = nl(l.componentStack), Ce = tr(
                  i,
                  O,
                  m
                ), Ke.errorDigest = Ce, rl(i, Ke);
              } finally {
                l.blockedBoundary = ge, l.blockedPreamble = E, l.hoistableState = We, l.blockedSegment = X, l.keyPath = v;
              }
              l = Ll(
                i,
                null,
                K,
                -1,
                ge,
                at,
                Ke.fallbackPreamble,
                Ke.fallbackState,
                Ye,
                [s[0], "Suspense Fallback", s[2]],
                l.formatContext,
                l.context,
                l.treeContext,
                l.componentStack,
                !0
              ), oi(l), i.pingedTasks.push(l);
            }
          }
          return;
      }
      if (typeof v == "object" && v !== null)
        switch (v.$$typeof) {
          case B:
            if ("ref" in w)
              for (Ke in O = {}, w)
                Ke !== "ref" && (O[Ke] = w[Ke]);
            else O = w;
            v = yc(
              i,
              l,
              s,
              v.render,
              O,
              E
            ), iu(
              i,
              l,
              s,
              v,
              Tn !== 0,
              xi,
              mt
            );
            return;
          case U:
            To(i, l, s, v.type, w, E);
            return;
          case q:
          case k:
            if (m = w.children, O = l.keyPath, w = w.value, Ce = v._currentValue, v._currentValue = w, E = $a, $a = v = {
              parent: E,
              depth: E === null ? 0 : E.depth + 1,
              context: v,
              parentValue: Ce,
              value: w
            }, l.context = v, l.keyPath = s, _n(i, l, m, -1), i = $a, i === null) throw Error(F(403));
            i.context._currentValue = i.parentValue, i = $a = i.parent, l.context = i, l.keyPath = O;
            return;
          case ue:
            w = w.children, v = w(v._context._currentValue), w = l.keyPath, l.keyPath = s, _n(i, l, v, -1), l.keyPath = w;
            return;
          case fe:
            if (O = v._init, v = O(v._payload), i.status === 12) throw null;
            To(i, l, s, v, w, E);
            return;
        }
      throw Error(
        F(130, v == null ? v : typeof v, "")
      );
    }
  }
  function Yu(i, l, s, v, w) {
    var E = l.replay, O = l.blockedBoundary, K = Xi(
      i,
      0,
      null,
      l.formatContext,
      !1,
      !1
    );
    K.id = s, K.parentFlushed = !0;
    try {
      l.replay = null, l.blockedSegment = K, Vr(i, l, v, w), K.status = 1, O === null ? i.completedRootSegment = K : (il(O, K), O.parentFlushed && i.partialBoundaries.push(O));
    } finally {
      l.replay = E, l.blockedSegment = null;
    }
  }
  function _n(i, l, s, v) {
    l.replay !== null && typeof l.replay.slots == "number" ? Yu(i, l, l.replay.slots, s, v) : (l.node = s, l.childIndex = v, s = l.componentStack, oi(l), Bl(i, l), l.componentStack = s);
  }
  function Bl(i, l) {
    var s = l.node, v = l.childIndex;
    if (s !== null) {
      if (typeof s == "object") {
        switch (s.$$typeof) {
          case ee:
            var w = s.type, E = s.key, O = s.props;
            s = O.ref;
            var K = s !== void 0 ? s : null, m = sr(w), X = E ?? (v === -1 ? 0 : v);
            if (E = [l.keyPath, m, X], l.replay !== null)
              e: {
                var Ce = l.replay;
                for (v = Ce.nodes, s = 0; s < v.length; s++) {
                  var ge = v[s];
                  if (X === ge[1]) {
                    if (ge.length === 4) {
                      if (m !== null && m !== ge[0])
                        throw Error(
                          F(490, ge[0], m)
                        );
                      var We = ge[2];
                      m = ge[3], X = l.node, l.replay = {
                        nodes: We,
                        slots: m,
                        pendingTasks: 1
                      };
                      try {
                        if (To(i, l, E, w, O, K), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                          throw Error(F(488));
                        l.replay.pendingTasks--;
                      } catch (hn) {
                        if (typeof hn == "object" && hn !== null && (hn === Ne || typeof hn.then == "function"))
                          throw l.node === X && (l.replay = Ce), hn;
                        l.replay.pendingTasks--, O = nl(l.componentStack), E = l.blockedBoundary, w = hn, O = tr(i, w, O), Zi(
                          i,
                          E,
                          We,
                          m,
                          w,
                          O
                        );
                      }
                      l.replay = Ce;
                    } else {
                      if (w !== Ie)
                        throw Error(
                          F(
                            490,
                            "Suspense",
                            sr(w) || "Unknown"
                          )
                        );
                      t: {
                        Ce = void 0, w = ge[5], K = ge[2], m = ge[3], X = ge[4] === null ? [] : ge[4][2], ge = ge[4] === null ? null : ge[4][3];
                        var Ye = l.keyPath, Ke = l.replay, at = l.blockedBoundary, Dt = l.hoistableState, fn = O.children, Tt = O.fallback, dr = /* @__PURE__ */ new Set();
                        O = 2 > l.formatContext.insertionMode ? mr(
                          i,
                          dr,
                          wt(),
                          wt()
                        ) : mr(
                          i,
                          dr,
                          null,
                          null
                        ), O.parentFlushed = !0, O.rootSegmentID = w, l.blockedBoundary = O, l.hoistableState = O.contentState, l.keyPath = E, l.replay = {
                          nodes: K,
                          slots: m,
                          pendingTasks: 1
                        };
                        try {
                          if (Vr(i, l, fn, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
                            throw Error(F(488));
                          if (l.replay.pendingTasks--, O.pendingTasks === 0 && O.status === 0) {
                            O.status = 1, i.completedBoundaries.push(O);
                            break t;
                          }
                        } catch (hn) {
                          O.status = 4, We = nl(l.componentStack), Ce = tr(
                            i,
                            hn,
                            We
                          ), O.errorDigest = Ce, l.replay.pendingTasks--, i.clientRenderedBoundaries.push(O);
                        } finally {
                          l.blockedBoundary = at, l.hoistableState = Dt, l.replay = Ke, l.keyPath = Ye;
                        }
                        l = tl(
                          i,
                          null,
                          {
                            nodes: X,
                            slots: ge,
                            pendingTasks: 0
                          },
                          Tt,
                          -1,
                          at,
                          O.fallbackState,
                          dr,
                          [E[0], "Suspense Fallback", E[2]],
                          l.formatContext,
                          l.context,
                          l.treeContext,
                          l.componentStack,
                          !0
                        ), oi(l), i.pingedTasks.push(l);
                      }
                    }
                    v.splice(s, 1);
                    break e;
                  }
                }
              }
            else To(i, l, E, w, O, K);
            return;
          case oe:
            throw Error(F(257));
          case fe:
            if (We = s._init, s = We(s._payload), i.status === 12) throw null;
            _n(i, l, s, v);
            return;
        }
        if (Ae(s)) {
          Wl(i, l, s, v);
          return;
        }
        if (s === null || typeof s != "object" ? We = null : (We = j && s[j] || s["@@iterator"], We = typeof We == "function" ? We : null), We && (We = We.call(s))) {
          if (s = We.next(), !s.done) {
            O = [];
            do
              O.push(s.value), s = We.next();
            while (!s.done);
            Wl(i, l, O, v);
          }
          return;
        }
        if (typeof s.then == "function")
          return l.thenableState = null, _n(i, l, tu(s), v);
        if (s.$$typeof === k)
          return _n(
            i,
            l,
            s._currentValue,
            v
          );
        throw v = Object.prototype.toString.call(s), Error(
          F(
            31,
            v === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : v
          )
        );
      }
      typeof s == "string" ? (v = l.blockedSegment, v !== null && (v.lastPushedText = Ou(
        v.chunks,
        s,
        i.renderState,
        v.lastPushedText
      ))) : (typeof s == "number" || typeof s == "bigint") && (v = l.blockedSegment, v !== null && (v.lastPushedText = Ou(
        v.chunks,
        "" + s,
        i.renderState,
        v.lastPushedText
      )));
    }
  }
  function Wl(i, l, s, v) {
    var w = l.keyPath;
    if (v !== -1 && (l.keyPath = [l.keyPath, "Fragment", v], l.replay !== null)) {
      for (var E = l.replay, O = E.nodes, K = 0; K < O.length; K++) {
        var m = O[K];
        if (m[1] === v) {
          v = m[2], m = m[3], l.replay = { nodes: v, slots: m, pendingTasks: 1 };
          try {
            if (Wl(i, l, s, -1), l.replay.pendingTasks === 1 && 0 < l.replay.nodes.length)
              throw Error(F(488));
            l.replay.pendingTasks--;
          } catch (ge) {
            if (typeof ge == "object" && ge !== null && (ge === Ne || typeof ge.then == "function"))
              throw ge;
            l.replay.pendingTasks--, s = nl(l.componentStack);
            var X = l.blockedBoundary, Ce = ge;
            s = tr(i, Ce, s), Zi(
              i,
              X,
              v,
              m,
              Ce,
              s
            );
          }
          l.replay = E, O.splice(K, 1);
          break;
        }
      }
      l.keyPath = w;
      return;
    }
    if (E = l.treeContext, O = s.length, l.replay !== null && (K = l.replay.slots, K !== null && typeof K == "object")) {
      for (v = 0; v < O; v++)
        m = s[v], l.treeContext = J(E, O, v), X = K[v], typeof X == "number" ? (Yu(i, l, X, m, v), delete K[v]) : Vr(i, l, m, v);
      l.treeContext = E, l.keyPath = w;
      return;
    }
    for (K = 0; K < O; K++)
      v = s[K], l.treeContext = J(E, O, K), Vr(i, l, v, K);
    l.treeContext = E, l.keyPath = w;
  }
  function rl(i, l) {
    i = i.trackedPostpones, i !== null && (l = l.trackedContentKeyPath, l !== null && (l = i.workingMap.get(l), l !== void 0 && (l.length = 4, l[2] = [], l[3] = null)));
  }
  function au(i, l, s) {
    return tl(
      i,
      s,
      l.replay,
      l.node,
      l.childIndex,
      l.blockedBoundary,
      l.hoistableState,
      l.abortSet,
      l.keyPath,
      l.formatContext,
      l.context,
      l.treeContext,
      l.componentStack,
      l.isFallback
    );
  }
  function lu(i, l, s) {
    var v = l.blockedSegment, w = Xi(
      i,
      v.chunks.length,
      null,
      l.formatContext,
      v.lastPushedText,
      !0
    );
    return v.children.push(w), v.lastPushedText = !1, Ll(
      i,
      s,
      l.node,
      l.childIndex,
      l.blockedBoundary,
      w,
      l.blockedPreamble,
      l.hoistableState,
      l.abortSet,
      l.keyPath,
      l.formatContext,
      l.context,
      l.treeContext,
      l.componentStack,
      l.isFallback
    );
  }
  function Vr(i, l, s, v) {
    var w = l.formatContext, E = l.context, O = l.keyPath, K = l.treeContext, m = l.componentStack, X = l.blockedSegment;
    if (X === null)
      try {
        return _n(i, l, s, v);
      } catch (We) {
        if (Qr(), s = We === Ne ? St() : We, typeof s == "object" && s !== null) {
          if (typeof s.then == "function") {
            v = sn(), i = au(i, l, v).ping, s.then(i, i), l.formatContext = w, l.context = E, l.keyPath = O, l.treeContext = K, l.componentStack = m, x(E);
            return;
          }
          if (s.message === "Maximum call stack size exceeded") {
            s = sn(), s = au(i, l, s), i.pingedTasks.push(s), l.formatContext = w, l.context = E, l.keyPath = O, l.treeContext = K, l.componentStack = m, x(E);
            return;
          }
        }
      }
    else {
      var Ce = X.children.length, ge = X.chunks.length;
      try {
        return _n(i, l, s, v);
      } catch (We) {
        if (Qr(), X.children.length = Ce, X.chunks.length = ge, s = We === Ne ? St() : We, typeof s == "object" && s !== null) {
          if (typeof s.then == "function") {
            v = sn(), i = lu(i, l, v).ping, s.then(i, i), l.formatContext = w, l.context = E, l.keyPath = O, l.treeContext = K, l.componentStack = m, x(E);
            return;
          }
          if (s.message === "Maximum call stack size exceeded") {
            s = sn(), s = lu(i, l, s), i.pingedTasks.push(s), l.formatContext = w, l.context = E, l.keyPath = O, l.treeContext = K, l.componentStack = m, x(E);
            return;
          }
        }
      }
    }
    throw l.formatContext = w, l.context = E, l.keyPath = O, l.treeContext = K, x(E), s;
  }
  function mc(i) {
    var l = i.blockedBoundary;
    i = i.blockedSegment, i !== null && (i.status = 3, uu(this, l, i));
  }
  function Zi(i, l, s, v, w, E) {
    for (var O = 0; O < s.length; O++) {
      var K = s[O];
      if (K.length === 4)
        Zi(
          i,
          l,
          K[2],
          K[3],
          w,
          E
        );
      else {
        K = K[5];
        var m = i, X = E, Ce = mr(
          m,
          /* @__PURE__ */ new Set(),
          null,
          null
        );
        Ce.parentFlushed = !0, Ce.rootSegmentID = K, Ce.status = 4, Ce.errorDigest = X, Ce.parentFlushed && m.clientRenderedBoundaries.push(Ce);
      }
    }
    if (s.length = 0, v !== null) {
      if (l === null) throw Error(F(487));
      if (l.status !== 4 && (l.status = 4, l.errorDigest = E, l.parentFlushed && i.clientRenderedBoundaries.push(l)), typeof v == "object") for (var ge in v) delete v[ge];
    }
  }
  function wc(i, l, s) {
    var v = i.blockedBoundary, w = i.blockedSegment;
    if (w !== null) {
      if (w.status === 6) return;
      w.status = 3;
    }
    if (w = nl(i.componentStack), v === null) {
      if (l.status !== 13 && l.status !== 14) {
        if (v = i.replay, v === null) {
          tr(l, s, w), Ra(l, s);
          return;
        }
        v.pendingTasks--, v.pendingTasks === 0 && 0 < v.nodes.length && (i = tr(l, s, w), Zi(
          l,
          null,
          v.nodes,
          v.slots,
          s,
          i
        )), l.pendingRootTasks--, l.pendingRootTasks === 0 && po(l);
      }
    } else
      v.pendingTasks--, v.status !== 4 && (v.status = 4, i = tr(l, s, w), v.status = 4, v.errorDigest = i, rl(l, v), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(E) {
        return wc(E, l, s);
      }), v.fallbackAbortableTasks.clear();
    l.allPendingTasks--, l.allPendingTasks === 0 && ou(l);
  }
  function xa(i, l) {
    try {
      var s = i.renderState, v = s.onHeaders;
      if (v) {
        var w = s.headers;
        if (w) {
          s.headers = null;
          var E = w.preconnects;
          if (w.fontPreloads && (E && (E += ", "), E += w.fontPreloads), w.highImagePreloads && (E && (E += ", "), E += w.highImagePreloads), !l) {
            var O = s.styles.values(), K = O.next();
            e: for (; 0 < w.remainingCapacity && !K.done; K = O.next())
              for (var m = K.value.sheets.values(), X = m.next(); 0 < w.remainingCapacity && !X.done; X = m.next()) {
                var Ce = X.value, ge = Ce.props, We = ge.href, Ye = Ce.props, Ke = wa(Ye.href, "style", {
                  crossOrigin: Ye.crossOrigin,
                  integrity: Ye.integrity,
                  nonce: Ye.nonce,
                  type: Ye.type,
                  fetchPriority: Ye.fetchPriority,
                  referrerPolicy: Ye.referrerPolicy,
                  media: Ye.media
                });
                if (0 <= (w.remainingCapacity -= Ke.length + 2))
                  s.resets.style[We] = Qt, E && (E += ", "), E += Ke, s.resets.style[We] = typeof ge.crossOrigin == "string" || typeof ge.integrity == "string" ? [ge.crossOrigin, ge.integrity] : Qt;
                else break e;
              }
          }
          v(E ? { Link: E } : {});
        }
      }
    } catch (at) {
      tr(i, at, {});
    }
  }
  function po(i) {
    i.trackedPostpones === null && xa(i, !0), i.trackedPostpones === null && Fi(i), i.onShellError = Pi, i = i.onShellReady, i();
  }
  function ou(i) {
    xa(
      i,
      i.trackedPostpones === null ? !0 : i.completedRootSegment === null || i.completedRootSegment.status !== 5
    ), Fi(i), i = i.onAllReady, i();
  }
  function il(i, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null && l.children[0].id === -1) {
      var s = l.children[0];
      s.id = l.id, s.parentFlushed = !0, s.status === 1 && il(i, s);
    } else i.completedSegments.push(l);
  }
  function uu(i, l, s) {
    if (l === null) {
      if (s !== null && s.parentFlushed) {
        if (i.completedRootSegment !== null)
          throw Error(F(389));
        i.completedRootSegment = s;
      }
      i.pendingRootTasks--, i.pendingRootTasks === 0 && po(i);
    } else
      l.pendingTasks--, l.status !== 4 && (l.pendingTasks === 0 ? (l.status === 0 && (l.status = 1), s !== null && s.parentFlushed && s.status === 1 && il(l, s), l.parentFlushed && i.completedBoundaries.push(l), l.status === 1 && (l.fallbackAbortableTasks.forEach(mc, i), l.fallbackAbortableTasks.clear(), i.pendingRootTasks === 0 && i.trackedPostpones === null && l.contentPreamble !== null && Fi(i))) : s !== null && s.parentFlushed && s.status === 1 && (il(l, s), l.completedSegments.length === 1 && l.parentFlushed && i.partialBoundaries.push(l)));
    i.allPendingTasks--, i.allPendingTasks === 0 && ou(i);
  }
  function Gu(i) {
    if (i.status !== 14 && i.status !== 13) {
      var l = $a, s = yr.H;
      yr.H = bc;
      var v = yr.A;
      yr.A = hr;
      var w = pn;
      pn = i;
      var E = On;
      On = i.resumableState;
      try {
        var O = i.pingedTasks, K;
        for (K = 0; K < O.length; K++) {
          var m = O[K], X = i, Ce = m.blockedSegment;
          if (Ce === null) {
            var ge = X;
            if (m.replay.pendingTasks !== 0) {
              x(m.context);
              try {
                if (typeof m.replay.slots == "number" ? Yu(
                  ge,
                  m,
                  m.replay.slots,
                  m.node,
                  m.childIndex
                ) : Bl(ge, m), m.replay.pendingTasks === 1 && 0 < m.replay.nodes.length)
                  throw Error(F(488));
                m.replay.pendingTasks--, m.abortSet.delete(m), uu(ge, m.blockedBoundary, null);
              } catch (Rn) {
                Qr();
                var We = Rn === Ne ? St() : Rn;
                if (typeof We == "object" && We !== null && typeof We.then == "function") {
                  var Ye = m.ping;
                  We.then(Ye, Ye), m.thenableState = sn();
                } else {
                  m.replay.pendingTasks--, m.abortSet.delete(m);
                  var Ke = nl(m.componentStack);
                  X = void 0;
                  var at = ge, Dt = m.blockedBoundary, fn = ge.status === 12 ? ge.fatalError : We, Tt = m.replay.nodes, dr = m.replay.slots;
                  X = tr(
                    at,
                    fn,
                    Ke
                  ), Zi(
                    at,
                    Dt,
                    Tt,
                    dr,
                    fn,
                    X
                  ), ge.pendingRootTasks--, ge.pendingRootTasks === 0 && po(ge), ge.allPendingTasks--, ge.allPendingTasks === 0 && ou(ge);
                }
              } finally {
              }
            }
          } else if (ge = void 0, at = Ce, at.status === 0) {
            at.status = 6, x(m.context);
            var hn = at.children.length, Dr = at.chunks.length;
            try {
              Bl(X, m), at.lastPushedText && at.textEmbedded && at.chunks.push(bi), m.abortSet.delete(m), at.status = 1, uu(X, m.blockedBoundary, at);
            } catch (Rn) {
              Qr(), at.children.length = hn, at.chunks.length = Dr;
              var nr = Rn === Ne ? St() : X.status === 12 ? X.fatalError : Rn;
              if (typeof nr == "object" && nr !== null && typeof nr.then == "function") {
                at.status = 0, m.thenableState = sn();
                var Nn = m.ping;
                nr.then(Nn, Nn);
              } else {
                var Rr = nl(m.componentStack);
                m.abortSet.delete(m), at.status = 4;
                var Lt = m.blockedBoundary;
                ge = tr(
                  X,
                  nr,
                  Rr
                ), Lt === null ? Ra(X, nr) : (Lt.pendingTasks--, Lt.status !== 4 && (Lt.status = 4, Lt.errorDigest = ge, rl(X, Lt), Lt.parentFlushed && X.clientRenderedBoundaries.push(Lt), X.pendingRootTasks === 0 && X.trackedPostpones === null && Lt.contentPreamble !== null && Fi(X))), X.allPendingTasks--, X.allPendingTasks === 0 && ou(X);
              }
            } finally {
            }
          }
        }
        O.splice(0, K), i.destination !== null && al(i, i.destination);
      } catch (Rn) {
        tr(i, Rn, {}), Ra(i, Rn);
      } finally {
        On = E, yr.H = s, yr.A = v, s === bc && x(l), pn = w;
      }
    }
  }
  function Xu(i, l, s) {
    l.preambleChildren.length && s.push(l.preambleChildren);
    for (var v = !1, w = 0; w < l.children.length; w++)
      v = cu(
        i,
        l.children[w],
        s
      ) || v;
    return v;
  }
  function cu(i, l, s) {
    var v = l.boundary;
    if (v === null)
      return Xu(
        i,
        l,
        s
      );
    var w = v.contentPreamble, E = v.fallbackPreamble;
    if (w === null || E === null) return !1;
    switch (v.status) {
      case 1:
        if (cc(i.renderState, w), l = v.completedSegments[0], !l) throw Error(F(391));
        return Xu(
          i,
          l,
          s
        );
      case 5:
        if (i.trackedPostpones !== null) return !0;
      case 4:
        if (l.status === 1)
          return cc(i.renderState, E), Xu(
            i,
            l,
            s
          );
      default:
        return !0;
    }
  }
  function Fi(i) {
    if (i.completedRootSegment && i.completedPreambleSegments === null) {
      var l = [], s = cu(
        i,
        i.completedRootSegment,
        l
      ), v = i.renderState.preamble;
      (s === !1 || v.headChunks && v.bodyChunks) && (i.completedPreambleSegments = l);
    }
  }
  function Ea(i, l, s, v) {
    switch (s.parentFlushed = !0, s.status) {
      case 0:
        s.id = i.nextSegmentId++;
      case 5:
        return v = s.id, s.lastPushedText = !1, s.textEmbedded = !1, i = i.renderState, ae(l, ni), ae(l, i.placeholderPrefix), i = te(v.toString(16)), ae(l, i), P(l, ha);
      case 1:
        s.status = 2;
        var w = !0, E = s.chunks, O = 0;
        s = s.children;
        for (var K = 0; K < s.length; K++) {
          for (w = s[K]; O < w.index; O++)
            ae(l, E[O]);
          w = Ro(i, l, w, v);
        }
        for (; O < E.length - 1; O++)
          ae(l, E[O]);
        return O < E.length && (w = P(l, E[O])), w;
      default:
        throw Error(F(390));
    }
  }
  function Ro(i, l, s, v) {
    var w = s.boundary;
    if (w === null)
      return Ea(i, l, s, v);
    if (w.parentFlushed = !0, w.status === 4) {
      var E = w.errorDigest;
      return P(l, Gr), ae(l, Sl), E && (ae(l, Li), ae(l, te(Me(E))), ae(
        l,
        da
      )), P(l, Qn), Ea(i, l, s, v), (i = w.fallbackPreamble) && ga(l, i), P(l, za);
    }
    if (w.status !== 1)
      return w.status === 0 && (w.rootSegmentID = i.nextSegmentId++), 0 < w.completedSegments.length && i.partialBoundaries.push(w), Bi(
        l,
        i.renderState,
        w.rootSegmentID
      ), v && (w = w.fallbackState, w.styles.forEach(zu, v), w.stylesheets.forEach(
        bo,
        v
      )), Ea(i, l, s, v), P(l, za);
    if (w.byteSize > i.progressiveChunkSize)
      return w.rootSegmentID = i.nextSegmentId++, i.completedBoundaries.push(w), Bi(
        l,
        i.renderState,
        w.rootSegmentID
      ), Ea(i, l, s, v), P(l, za);
    if (v && (s = w.contentState, s.styles.forEach(zu, v), s.stylesheets.forEach(bo, v)), P(l, kl), s = w.completedSegments, s.length !== 1) throw Error(F(391));
    return Ro(i, l, s[0], v), (i = w.contentPreamble) && ga(l, i), P(l, za);
  }
  function Nl(i, l, s, v) {
    return Fl(
      l,
      i.renderState,
      s.parentFormatContext,
      s.id
    ), Ro(i, l, s, v), ya(l, s.parentFormatContext);
  }
  function su(i, l, s) {
    for (var v = s.completedSegments, w = 0; w < v.length; w++)
      xo(
        i,
        l,
        s,
        v[w]
      );
    v.length = 0, Ri(
      l,
      s.contentState,
      i.renderState
    ), v = i.resumableState, i = i.renderState, w = s.rootSegmentID, s = s.contentState;
    var E = i.stylesToHoist;
    return i.stylesToHoist = !1, ae(l, i.startInlineScript), E ? (v.instructions & 2) === 0 ? (v.instructions |= 10, ae(l, Qo)) : (v.instructions & 8) === 0 ? (v.instructions |= 8, ae(l, Lu)) : ae(l, co) : (v.instructions & 2) === 0 ? (v.instructions |= 2, ae(l, Du)) : ae(l, Ga), v = te(w.toString(16)), ae(l, i.boundaryPrefix), ae(l, v), ae(l, Jo), ae(l, i.segmentPrefix), ae(l, v), E ? (ae(l, fc), Ic(l, s)) : ae(l, so), s = P(l, Xa), Ha(l, i) && s;
  }
  function xo(i, l, s, v) {
    if (v.status === 2) return !0;
    var w = s.contentState, E = v.id;
    if (E === -1) {
      if ((v.id = s.rootSegmentID) === -1)
        throw Error(F(392));
      return Nl(i, l, v, w);
    }
    return E === s.rootSegmentID ? Nl(i, l, v, w) : (Nl(i, l, v, w), s = i.resumableState, i = i.renderState, ae(l, i.startInlineScript), (s.instructions & 1) === 0 ? (s.instructions |= 1, ae(l, wi)) : ae(l, Ui), ae(l, i.segmentPrefix), E = te(E.toString(16)), ae(l, E), ae(l, Zo), ae(l, i.placeholderPrefix), ae(l, E), l = P(l, Al), l);
  }
  function al(i, l) {
    Ee = new Uint8Array(2048), Ze = 0;
    try {
      if (!(0 < i.pendingRootTasks)) {
        var s, v = i.completedRootSegment;
        if (v !== null) {
          if (v.status === 5) return;
          var w = i.completedPreambleSegments;
          if (w === null) return;
          var E = i.renderState, O = E.preamble, K = O.htmlChunks, m = O.headChunks, X;
          if (K) {
            for (X = 0; X < K.length; X++)
              ae(l, K[X]);
            if (m)
              for (X = 0; X < m.length; X++)
                ae(l, m[X]);
            else
              ae(l, Jt("head")), ae(l, zt);
          } else if (m)
            for (X = 0; X < m.length; X++)
              ae(l, m[X]);
          var Ce = E.charsetChunks;
          for (X = 0; X < Ce.length; X++)
            ae(l, Ce[X]);
          Ce.length = 0, E.preconnects.forEach(Xt, l), E.preconnects.clear();
          var ge = E.viewportChunks;
          for (X = 0; X < ge.length; X++)
            ae(l, ge[X]);
          ge.length = 0, E.fontPreloads.forEach(Xt, l), E.fontPreloads.clear(), E.highImagePreloads.forEach(Xt, l), E.highImagePreloads.clear(), E.styles.forEach(Fn, l);
          var We = E.importMapChunks;
          for (X = 0; X < We.length; X++)
            ae(l, We[X]);
          We.length = 0, E.bootstrapScripts.forEach(Xt, l), E.scripts.forEach(Xt, l), E.scripts.clear(), E.bulkPreloads.forEach(Xt, l), E.bulkPreloads.clear();
          var Ye = E.hoistableChunks;
          for (X = 0; X < Ye.length; X++)
            ae(l, Ye[X]);
          for (E = Ye.length = 0; E < w.length; E++) {
            var Ke = w[E];
            for (O = 0; O < Ke.length; O++)
              Ro(i, l, Ke[O], null);
          }
          var at = i.renderState.preamble, Dt = at.headChunks;
          (at.htmlChunks || Dt) && ae(l, or("head"));
          var fn = at.bodyChunks;
          if (fn)
            for (w = 0; w < fn.length; w++)
              ae(l, fn[w]);
          Ro(i, l, v, null), i.completedRootSegment = null, Ha(l, i.renderState);
        }
        var Tt = i.renderState;
        v = 0;
        var dr = Tt.viewportChunks;
        for (v = 0; v < dr.length; v++)
          ae(l, dr[v]);
        dr.length = 0, Tt.preconnects.forEach(Xt, l), Tt.preconnects.clear(), Tt.fontPreloads.forEach(Xt, l), Tt.fontPreloads.clear(), Tt.highImagePreloads.forEach(
          Xt,
          l
        ), Tt.highImagePreloads.clear(), Tt.styles.forEach(Nu, l), Tt.scripts.forEach(Xt, l), Tt.scripts.clear(), Tt.bulkPreloads.forEach(Xt, l), Tt.bulkPreloads.clear();
        var hn = Tt.hoistableChunks;
        for (v = 0; v < hn.length; v++)
          ae(l, hn[v]);
        hn.length = 0;
        var Dr = i.clientRenderedBoundaries;
        for (s = 0; s < Dr.length; s++) {
          var nr = Dr[s];
          Tt = l;
          var Nn = i.resumableState, Rr = i.renderState, Lt = nr.rootSegmentID, Rn = nr.errorDigest;
          ae(
            Tt,
            Rr.startInlineScript
          ), (Nn.instructions & 4) === 0 ? (Nn.instructions |= 4, ae(Tt, Ml)) : ae(Tt, Za), ae(Tt, Rr.boundaryPrefix), ae(Tt, te(Lt.toString(16))), ae(Tt, Vo), Rn && (ae(
            Tt,
            Qa
          ), ae(
            Tt,
            te(
              Ja(Rn || "")
            )
          ));
          var $t = P(
            Tt,
            Ol
          );
          if (!$t) {
            i.destination = null, s++, Dr.splice(0, s);
            return;
          }
        }
        Dr.splice(0, s);
        var rr = i.completedBoundaries;
        for (s = 0; s < rr.length; s++)
          if (!su(i, l, rr[s])) {
            i.destination = null, s++, rr.splice(0, s);
            return;
          }
        rr.splice(0, s), $(l), Ee = new Uint8Array(2048), Ze = 0;
        var Ul = i.partialBoundaries;
        for (s = 0; s < Ul.length; s++) {
          var ka = Ul[s];
          e: {
            Dr = i, nr = l;
            var Ca = ka.completedSegments;
            for ($t = 0; $t < Ca.length; $t++)
              if (!xo(
                Dr,
                nr,
                ka,
                Ca[$t]
              )) {
                $t++, Ca.splice(0, $t);
                var Yl = !1;
                break e;
              }
            Ca.splice(0, $t), Yl = Ri(
              nr,
              ka.contentState,
              Dr.renderState
            );
          }
          if (!Yl) {
            i.destination = null, s++, Ul.splice(0, s);
            return;
          }
        }
        Ul.splice(0, s);
        var Sa = i.completedBoundaries;
        for (s = 0; s < Sa.length; s++)
          if (!su(i, l, Sa[s])) {
            i.destination = null, s++, Sa.splice(0, s);
            return;
          }
        Sa.splice(0, s);
      }
    } finally {
      i.allPendingTasks === 0 && i.pingedTasks.length === 0 && i.clientRenderedBoundaries.length === 0 && i.completedBoundaries.length === 0 ? (i.flushScheduled = !1, s = i.resumableState, s.hasBody && ae(l, or("body")), s.hasHtml && ae(l, or("html")), $(l), i.status = 14, l.close(), i.destination = null) : $(l);
    }
  }
  function ll(i) {
    i.flushScheduled = i.destination !== null, se(function() {
      return Gu(i);
    }), _t(function() {
      i.status === 10 && (i.status = 11), i.trackedPostpones === null && xa(i, i.pendingRootTasks === 0);
    });
  }
  function ol(i) {
    i.flushScheduled === !1 && i.pingedTasks.length === 0 && i.destination !== null && (i.flushScheduled = !0, _t(function() {
      var l = i.destination;
      l ? al(i, l) : i.flushScheduled = !1;
    }));
  }
  function Hl(i, l) {
    if (i.status === 13)
      i.status = 14, nt(l, i.fatalError);
    else if (i.status !== 14 && i.destination === null) {
      i.destination = l;
      try {
        al(i, l);
      } catch (s) {
        tr(i, s, {}), Ra(i, s);
      }
    }
  }
  function zl(i, l) {
    (i.status === 11 || i.status === 10) && (i.status = 12);
    try {
      var s = i.abortableTasks;
      if (0 < s.size) {
        var v = l === void 0 ? Error(F(432)) : typeof l == "object" && l !== null && typeof l.then == "function" ? Error(F(530)) : l;
        i.fatalError = v, s.forEach(function(w) {
          return wc(w, i, v);
        }), s.clear();
      }
      i.destination !== null && al(i, i.destination);
    } catch (w) {
      tr(i, w, {}), Ra(i, w);
    }
  }
  function fu() {
    var i = ce.version;
    if (i !== "19.1.1")
      throw Error(
        F(
          527,
          i,
          "19.1.1"
        )
      );
  }
  return fu(), fu(), ys.prerender = function(i, l) {
    return new Promise(function(s, v) {
      var w = l ? l.onHeaders : void 0, E;
      w && (E = function(Ce) {
        w(new Headers(Ce));
      });
      var O = Tl(
        l ? l.identifierPrefix : void 0,
        l ? l.unstable_externalRuntimeSrc : void 0,
        l ? l.bootstrapScriptContent : void 0,
        l ? l.bootstrapScripts : void 0,
        l ? l.bootstrapModules : void 0
      ), K = pa(
        i,
        O,
        ro(
          O,
          void 0,
          l ? l.unstable_externalRuntimeSrc : void 0,
          l ? l.importMap : void 0,
          E,
          l ? l.maxHeadersLength : void 0
        ),
        Ho(l ? l.namespaceURI : void 0),
        l ? l.progressiveChunkSize : void 0,
        l ? l.onError : void 0,
        function() {
          var Ce = {
            prelude: new ReadableStream(
              {
                type: "bytes",
                pull: function(ge) {
                  Hl(K, ge);
                },
                cancel: function(ge) {
                  K.destination = null, zl(K, ge);
                }
              },
              { highWaterMark: 0 }
            )
          };
          s(Ce);
        },
        void 0,
        void 0,
        v,
        l ? l.onPostpone : void 0
      );
      if (l && l.signal) {
        var m = l.signal;
        if (m.aborted) zl(K, m.reason);
        else {
          var X = function() {
            zl(K, m.reason), m.removeEventListener("abort", X);
          };
          m.addEventListener("abort", X);
        }
      }
      ll(K);
    });
  }, ys.renderToReadableStream = function(i, l) {
    return new Promise(function(s, v) {
      var w, E, O = new Promise(function(Ye, Ke) {
        E = Ye, w = Ke;
      }), K = l ? l.onHeaders : void 0, m;
      K && (m = function(Ye) {
        K(new Headers(Ye));
      });
      var X = Tl(
        l ? l.identifierPrefix : void 0,
        l ? l.unstable_externalRuntimeSrc : void 0,
        l ? l.bootstrapScriptContent : void 0,
        l ? l.bootstrapScripts : void 0,
        l ? l.bootstrapModules : void 0
      ), Ce = Dl(
        i,
        X,
        ro(
          X,
          l ? l.nonce : void 0,
          l ? l.unstable_externalRuntimeSrc : void 0,
          l ? l.importMap : void 0,
          m,
          l ? l.maxHeadersLength : void 0
        ),
        Ho(l ? l.namespaceURI : void 0),
        l ? l.progressiveChunkSize : void 0,
        l ? l.onError : void 0,
        E,
        function() {
          var Ye = new ReadableStream(
            {
              type: "bytes",
              pull: function(Ke) {
                Hl(Ce, Ke);
              },
              cancel: function(Ke) {
                Ce.destination = null, zl(Ce, Ke);
              }
            },
            { highWaterMark: 0 }
          );
          Ye.allReady = O, s(Ye);
        },
        function(Ye) {
          O.catch(function() {
          }), v(Ye);
        },
        w,
        l ? l.onPostpone : void 0,
        l ? l.formState : void 0
      );
      if (l && l.signal) {
        var ge = l.signal;
        if (ge.aborted) zl(Ce, ge.reason);
        else {
          var We = function() {
            zl(Ce, ge.reason), ge.removeEventListener("abort", We);
          };
          ge.addEventListener("abort", We);
        }
      }
      ll(Ce);
    });
  }, ys.version = "19.1.1", ys;
}
var ws = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rh;
function td() {
  return rh || (rh = 1, process.env.NODE_ENV !== "production" && (function() {
    function ce(t, r, u, d) {
      return "" + r + (u === "s" ? "\\73 " : "\\53 ") + d;
    }
    function V(t, r, u, d) {
      return "" + r + (u === "s" ? "\\u0073" : "\\u0053") + d;
    }
    function F(t) {
      return Object.prototype.toString.call(t).replace(/^\[object (.*)\]$/, function(r, u) {
        return u;
      });
    }
    function ee(t) {
      var r = JSON.stringify(t);
      return '"' + t + '"' === r ? t : r;
    }
    function oe(t) {
      switch (typeof t) {
        case "string":
          return JSON.stringify(
            10 >= t.length ? t : t.slice(0, 10) + "..."
          );
        case "object":
          return Xt(t) ? "[...]" : t !== null && t.$$typeof === ja ? "client" : (t = F(t), t === "Object" ? "{...}" : t);
        case "function":
          return t.$$typeof === ja ? "client" : (t = t.displayName || t.name) ? "function " + t : "function";
        default:
          return String(t);
      }
    }
    function Z(t) {
      if (typeof t == "string") return t;
      switch (t) {
        case Ti:
          return "Suspense";
        case Yi:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Va:
            return Z(t.render);
          case Ko:
            return Z(t.type);
          case Il:
            var r = t._payload;
            t = t._init;
            try {
              return Z(t(r));
            } catch {
            }
        }
      return "";
    }
    function Y(t, r) {
      var u = F(t);
      if (u !== "Object" && u !== "Array") return u;
      var d = -1, y = 0;
      if (Xt(t))
        if (Mr.has(t)) {
          var R = Mr.get(t);
          u = "<" + Z(R) + ">";
          for (var D = 0; D < t.length; D++) {
            var W = t[D];
            W = typeof W == "string" ? W : typeof W == "object" && W !== null ? "{" + Y(W) + "}" : "{" + oe(W) + "}", "" + D === r ? (d = u.length, y = W.length, u += W) : u = 15 > W.length && 40 > u.length + W.length ? u + W : u + "{...}";
          }
          u += "</" + Z(R) + ">";
        } else {
          for (u = "[", R = 0; R < t.length; R++)
            0 < R && (u += ", "), D = t[R], D = typeof D == "object" && D !== null ? Y(D) : oe(D), "" + R === r ? (d = u.length, y = D.length, u += D) : u = 10 > D.length && 40 > u.length + D.length ? u + D : u + "...";
          u += "]";
        }
      else if (t.$$typeof === Xa)
        u = "<" + Z(t.type) + "/>";
      else {
        if (t.$$typeof === ja) return "client";
        if (wn.has(t)) {
          for (u = wn.get(t), u = "<" + (Z(u) || "..."), R = Object.keys(t), D = 0; D < R.length; D++) {
            u += " ", W = R[D], u += ee(W) + "=";
            var de = t[W], z = W === r && typeof de == "object" && de !== null ? Y(de) : oe(de);
            typeof de != "string" && (z = "{" + z + "}"), W === r ? (d = u.length, y = z.length, u += z) : u = 10 > z.length && 40 > u.length + z.length ? u + z : u + "...";
          }
          u += ">";
        } else {
          for (u = "{", R = Object.keys(t), D = 0; D < R.length; D++)
            0 < D && (u += ", "), W = R[D], u += ee(W) + ": ", de = t[W], de = typeof de == "object" && de !== null ? Y(de) : oe(de), W === r ? (d = u.length, y = de.length, u += de) : u = 10 > de.length && 40 > u.length + de.length ? u + de : u + "...";
          u += "}";
        }
      }
      return r === void 0 ? u : -1 < d && 0 < y ? (t = " ".repeat(d) + "^".repeat(y), `
  ` + u + `
  ` + t) : `
  ` + u;
    }
    function C(t, r) {
      var u = t.length & 3, d = t.length - u, y = r;
      for (r = 0; r < d; ) {
        var R = t.charCodeAt(r) & 255 | (t.charCodeAt(++r) & 255) << 8 | (t.charCodeAt(++r) & 255) << 16 | (t.charCodeAt(++r) & 255) << 24;
        ++r, R = 3432918353 * (R & 65535) + ((3432918353 * (R >>> 16) & 65535) << 16) & 4294967295, R = R << 15 | R >>> 17, R = 461845907 * (R & 65535) + ((461845907 * (R >>> 16) & 65535) << 16) & 4294967295, y ^= R, y = y << 13 | y >>> 19, y = 5 * (y & 65535) + ((5 * (y >>> 16) & 65535) << 16) & 4294967295, y = (y & 65535) + 27492 + (((y >>> 16) + 58964 & 65535) << 16);
      }
      switch (R = 0, u) {
        case 3:
          R ^= (t.charCodeAt(r + 2) & 255) << 16;
        case 2:
          R ^= (t.charCodeAt(r + 1) & 255) << 8;
        case 1:
          R ^= t.charCodeAt(r) & 255, R = 3432918353 * (R & 65535) + ((3432918353 * (R >>> 16) & 65535) << 16) & 4294967295, R = R << 15 | R >>> 17, y ^= 461845907 * (R & 65535) + ((461845907 * (R >>> 16) & 65535) << 16) & 4294967295;
      }
      return y ^= t.length, y ^= y >>> 16, y = 2246822507 * (y & 65535) + ((2246822507 * (y >>> 16) & 65535) << 16) & 4294967295, y ^= y >>> 13, y = 3266489909 * (y & 65535) + ((3266489909 * (y >>> 16) & 65535) << 16) & 4294967295, (y ^ y >>> 16) >>> 0;
    }
    function q(t) {
      return typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
    }
    function ue(t) {
      try {
        return k(t), !1;
      } catch {
        return !0;
      }
    }
    function k(t) {
      return "" + t;
    }
    function B(t, r) {
      if (ue(t))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          q(t)
        ), k(t);
    }
    function Ie(t, r) {
      if (ue(t))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          r,
          q(t)
        ), k(t);
    }
    function G(t) {
      if (ue(t))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          q(t)
        ), k(t);
    }
    function U(t) {
      return Pt.call(Fn, t) ? !0 : Pt.call(qo, t) ? !1 : Bu.test(t) ? Fn[t] = !0 : (qo[t] = !0, console.error("Invalid attribute name: `%s`", t), !1);
    }
    function fe(t, r) {
      ho[r.type] || r.onChange || r.onInput || r.readOnly || r.disabled || r.value == null || console.error(
        t === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), r.onChange || r.readOnly || r.disabled || r.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Et(t, r) {
      if (Pt.call(Gi, r) && Gi[r])
        return !0;
      if (Ic.test(r)) {
        if (t = "aria-" + r.slice(4).toLowerCase(), t = jo.hasOwnProperty(t) ? t : null, t == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            r
          ), Gi[r] = !0;
        if (r !== t)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            r,
            t
          ), Gi[r] = !0;
      }
      if (Zr.test(r)) {
        if (t = r.toLowerCase(), t = jo.hasOwnProperty(t) ? t : null, t == null) return Gi[r] = !0, !1;
        r !== t && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          r,
          t
        ), Gi[r] = !0);
      }
      return !0;
    }
    function he(t, r) {
      var u = [], d;
      for (d in r)
        Et(t, d) || u.push(d);
      r = u.map(function(y) {
        return "`" + y + "`";
      }).join(", "), u.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        t
      ) : 1 < u.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        r,
        t
      );
    }
    function pe(t, r, u, d) {
      if (Pt.call(cr, r) && cr[r])
        return !0;
      var y = r.toLowerCase();
      if (y === "onfocusin" || y === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), cr[r] = !0;
      if (typeof u == "function" && (t === "form" && r === "action" || t === "input" && r === "formAction" || t === "button" && r === "formAction"))
        return !0;
      if (Kt.test(r))
        return Ct.test(r) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          r
        ), cr[r] = !0;
      if ($o.test(r) || Hu.test(r)) return !0;
      if (y === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), cr[r] = !0;
      if (y === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), cr[r] = !0;
      if (y === "is" && u !== null && u !== void 0 && typeof u != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof u
        ), cr[r] = !0;
      if (typeof u == "number" && isNaN(u))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          r
        ), cr[r] = !0;
      if (ur.hasOwnProperty(y)) {
        if (y = ur[y], y !== r)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            r,
            y
          ), cr[r] = !0;
      } else if (r !== y)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          r,
          y
        ), cr[r] = !0;
      switch (r) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof u) {
        case "boolean":
          switch (r) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return y = r.toLowerCase().slice(0, 5), y === "data-" || y === "aria-" ? !0 : (u ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                u,
                r,
                r,
                u,
                r
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                u,
                r,
                r,
                u,
                r,
                r,
                r
              ), cr[r] = !0);
          }
        case "function":
        case "symbol":
          return cr[r] = !0, !1;
        case "string":
          if (u === "false" || u === "true") {
            switch (r) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              u,
              r,
              u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              r,
              u
            ), cr[r] = !0;
          }
      }
      return !0;
    }
    function Ge(t, r, u) {
      var d = [], y;
      for (y in r)
        pe(t, y, r[y]) || d.push(y);
      r = d.map(function(R) {
        return "`" + R + "`";
      }).join(", "), d.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        t
      ) : 1 < d.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        r,
        t
      );
    }
    function Re(t) {
      return t.replace(go, function(r, u) {
        return u.toUpperCase();
      });
    }
    function j(t) {
      if (typeof t == "boolean" || typeof t == "number" || typeof t == "bigint")
        return "" + t;
      G(t), t = "" + t;
      var r = zu.exec(t);
      if (r) {
        var u = "", d, y = 0;
        for (d = r.index; d < t.length; d++) {
          switch (t.charCodeAt(d)) {
            case 34:
              r = "&quot;";
              break;
            case 38:
              r = "&amp;";
              break;
            case 39:
              r = "&#x27;";
              break;
            case 60:
              r = "&lt;";
              break;
            case 62:
              r = "&gt;";
              break;
            default:
              continue;
          }
          y !== d && (u += t.slice(y, d)), y = d + 1, u += r;
        }
        t = y !== d ? u + t.slice(y, d) : u;
      }
      return t;
    }
    function Ae(t) {
      return Xc.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Ve(t) {
      return G(t), ("" + t).replace(J, V);
    }
    function it(t, r, u, d, y) {
      return {
        idPrefix: t === void 0 ? "" : t,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: u,
        bootstrapScripts: d,
        bootstrapModules: y,
        instructions: o,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function $e() {
      return {
        htmlChunks: null,
        headChunks: null,
        bodyChunks: null,
        contribution: Be
      };
    }
    function _t(t, r, u) {
      return {
        insertionMode: t,
        selectedValue: r,
        tagScope: u
      };
    }
    function N(t, r, u) {
      switch (r) {
        case "noscript":
          return _t(
            Ne,
            null,
            t.tagScope | 1
          );
        case "select":
          return _t(
            Ne,
            u.value != null ? u.value : u.defaultValue,
            t.tagScope
          );
        case "svg":
          return _t(ze, null, t.tagScope);
        case "picture":
          return _t(
            Ne,
            null,
            t.tagScope | 2
          );
        case "math":
          return _t(bt, null, t.tagScope);
        case "foreignObject":
          return _t(Ne, null, t.tagScope);
        case "table":
          return _t(
            St,
            null,
            t.tagScope
          );
        case "thead":
        case "tbody":
        case "tfoot":
          return _t(
            Rt,
            null,
            t.tagScope
          );
        case "colgroup":
          return _t(
            Ue,
            null,
            t.tagScope
          );
        case "tr":
          return _t(
            Nt,
            null,
            t.tagScope
          );
        case "head":
          if (t.insertionMode < Ne)
            return _t(
              tt,
              null,
              t.tagScope
            );
          break;
        case "html":
          if (t.insertionMode === ke)
            return _t(
              Le,
              null,
              t.tagScope
            );
      }
      return t.insertionMode >= St || t.insertionMode < Ne ? _t(Ne, null, t.tagScope) : t;
    }
    function H(t, r) {
      if (typeof r != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var u = !0, d;
      for (d in r)
        if (Pt.call(r, d)) {
          var y = r[d];
          if (y != null && typeof y != "boolean" && y !== "") {
            if (d.indexOf("--") === 0) {
              var R = j(d);
              Ie(y, d), y = j(("" + y).trim());
            } else {
              R = d;
              var D = y;
              if (-1 < R.indexOf("-")) {
                var W = R;
                ri.hasOwnProperty(W) && ri[W] || (ri[W] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  W,
                  Re(W.replace(dc, "ms-"))
                ));
              } else if (hc.test(R))
                W = R, ri.hasOwnProperty(W) && ri[W] || (ri[W] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  W,
                  W.charAt(0).toUpperCase() + W.slice(1)
                ));
              else if (wa.test(D)) {
                W = R;
                var de = D;
                Or.hasOwnProperty(de) && Or[de] || (Or[de] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  W,
                  de.replace(
                    wa,
                    ""
                  )
                ));
              }
              typeof D == "number" && (isNaN(D) ? vo || (vo = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                R
              )) : isFinite(D) || eu || (eu = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                R
              ))), R = d, D = ft.get(R), D !== void 0 || (D = j(
                R.replace(bo, "-$1").toLowerCase().replace(An, "-ms-")
              ), ft.set(R, D)), R = D, typeof y == "number" ? y = y === 0 || Wu.has(d) ? "" + y : y + "px" : (Ie(y, d), y = j(
                ("" + y).trim()
              ));
            }
            u ? (u = !1, t.push(
              rt,
              R,
              Mn,
              y
            )) : t.push(jn, R, Mn, y);
          }
        }
      u || t.push(un);
    }
    function se(t, r, u) {
      u && typeof u != "function" && typeof u != "symbol" && t.push(Xe, r, Tn);
    }
    function Ee(t, r, u) {
      typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && t.push(
        Xe,
        r,
        At,
        j(u),
        un
      );
    }
    function Ze(t, r) {
      this.push('<input type="hidden"'), ae(t), Ee(this, "name", r), Ee(this, "value", t), this.push(cn);
    }
    function ae(t) {
      if (typeof t != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function P(t, r) {
      if (typeof r.$$FORM_ACTION == "function") {
        var u = t.nextFormID++;
        t = t.idPrefix + u;
        try {
          var d = r.$$FORM_ACTION(t);
          if (d) {
            var y = d.data;
            y?.forEach(ae);
          }
          return d;
        } catch (R) {
          if (typeof R == "object" && R !== null && typeof R.then == "function")
            throw R;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            R
          );
        }
      }
      return null;
    }
    function $(t, r, u, d, y, R, D, W) {
      var de = null;
      if (typeof d == "function") {
        W === null || Ir || (Ir = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), y === null && R === null || ai || (ai = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), D === null || ki || (ki = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var z = P(r, d);
        z !== null ? (W = z.name, d = z.action || "", y = z.encType, R = z.method, D = z.target, de = z.data) : (t.push(
          Xe,
          "formAction",
          At,
          xi,
          un
        ), D = R = y = d = W = null, pt(r, u));
      }
      return W != null && le(t, "name", W), d != null && le(t, "formAction", d), y != null && le(t, "formEncType", y), R != null && le(t, "formMethod", R), D != null && le(t, "formTarget", D), de;
    }
    function le(t, r, u) {
      switch (r) {
        case "className":
          Ee(t, "class", u);
          break;
        case "tabIndex":
          Ee(t, "tabindex", u);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ee(t, r, u);
          break;
        case "style":
          H(t, u);
          break;
        case "src":
        case "href":
          if (u === "") {
            console.error(
              r === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              r,
              r
            );
            break;
          }
        case "action":
        case "formAction":
          if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          B(u, r), u = Ae("" + u), t.push(
            Xe,
            r,
            At,
            j(u),
            un
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          se(t, r.toLowerCase(), u);
          break;
        case "xlinkHref":
          if (typeof u == "function" || typeof u == "symbol" || typeof u == "boolean")
            break;
          B(u, r), u = Ae("" + u), t.push(
            Xe,
            "xlink:href",
            At,
            j(u),
            un
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof u != "function" && typeof u != "symbol" && t.push(
            Xe,
            r,
            At,
            j(u),
            un
          );
          break;
        case "inert":
          u !== "" || ie[r] || (ie[r] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            r
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          u && typeof u != "function" && typeof u != "symbol" && t.push(Xe, r, Tn);
          break;
        case "capture":
        case "download":
          u === !0 ? t.push(Xe, r, Tn) : u !== !1 && typeof u != "function" && typeof u != "symbol" && t.push(
            Xe,
            r,
            At,
            j(u),
            un
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u && t.push(
            Xe,
            r,
            At,
            j(u),
            un
          );
          break;
        case "rowSpan":
        case "start":
          typeof u == "function" || typeof u == "symbol" || isNaN(u) || t.push(
            Xe,
            r,
            At,
            j(u),
            un
          );
          break;
        case "xlinkActuate":
          Ee(t, "xlink:actuate", u);
          break;
        case "xlinkArcrole":
          Ee(t, "xlink:arcrole", u);
          break;
        case "xlinkRole":
          Ee(t, "xlink:role", u);
          break;
        case "xlinkShow":
          Ee(t, "xlink:show", u);
          break;
        case "xlinkTitle":
          Ee(t, "xlink:title", u);
          break;
        case "xlinkType":
          Ee(t, "xlink:type", u);
          break;
        case "xmlBase":
          Ee(t, "xml:base", u);
          break;
        case "xmlLang":
          Ee(t, "xml:lang", u);
          break;
        case "xmlSpace":
          Ee(t, "xml:space", u);
          break;
        default:
          if ((!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (r = Nu.get(r) || r, U(r))) {
            switch (typeof u) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var d = r.toLowerCase().slice(0, 5);
                if (d !== "data-" && d !== "aria-") return;
            }
            t.push(
              Xe,
              r,
              At,
              j(u),
              un
            );
          }
      }
    }
    function te(t, r, u) {
      if (r != null) {
        if (u != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof r != "object" || !("__html" in r))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        r = r.__html, r != null && (G(r), t.push("" + r));
      }
    }
    function Q(t, r) {
      var u = t[r];
      u != null && (u = Xt(u), t.multiple && !u ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        r
      ) : !t.multiple && u && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        r
      ));
    }
    function nt(t) {
      var r = "";
      return fc.Children.forEach(t, function(u) {
        u != null && (r += u, ii || typeof u == "string" || typeof u == "number" || typeof u == "bigint" || (ii = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), r;
    }
    function pt(t, r) {
      (t.instructions & 16) === o && (t.instructions |= 16, r.bootstrapChunks.unshift(
        r.startInlineScript,
        Jr,
        "<\/script>"
      ));
    }
    function Qe(t, r) {
      t.push(me("link"));
      for (var u in r)
        if (Pt.call(r, u)) {
          var d = r[u];
          if (d != null)
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                le(t, u, d);
            }
        }
      return t.push(cn), null;
    }
    function dt(t) {
      return G(t), ("" + t).replace(Uu, ce);
    }
    function It(t, r, u) {
      t.push(me(u));
      for (var d in r)
        if (Pt.call(r, d)) {
          var y = r[d];
          if (y != null)
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  u + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                le(t, d, y);
            }
        }
      return t.push(cn), null;
    }
    function S(t, r) {
      t.push(me("title"));
      var u = null, d = null, y;
      for (y in r)
        if (Pt.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                u = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                le(t, y, R);
            }
        }
      return t.push(mt), r = Array.isArray(u) ? 2 > u.length ? u[0] : null : u, typeof r != "function" && typeof r != "symbol" && r !== null && r !== void 0 && t.push(j("" + r)), te(t, d, u), t.push(ot("title")), null;
    }
    function M(t, r) {
      t.push(me("script"));
      var u = null, d = null, y;
      for (y in r)
        if (Pt.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                u = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                le(t, y, R);
            }
        }
      return t.push(mt), u != null && typeof u != "string" && (r = typeof u == "number" ? "a number for children" : Array.isArray(u) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        r
      )), te(t, d, u), typeof u == "string" && t.push(Ve(u)), t.push(ot("script")), null;
    }
    function Se(t, r, u) {
      t.push(me(u));
      var d = u = null, y;
      for (y in r)
        if (Pt.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                u = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                le(t, y, R);
            }
        }
      return t.push(mt), te(t, d, u), u;
    }
    function we(t, r, u) {
      t.push(me(u));
      var d = u = null, y;
      for (y in r)
        if (Pt.call(r, y)) {
          var R = r[y];
          if (R != null)
            switch (y) {
              case "children":
                u = R;
                break;
              case "dangerouslySetInnerHTML":
                d = R;
                break;
              default:
                le(t, y, R);
            }
        }
      return t.push(mt), te(t, d, u), typeof u == "string" ? (t.push(j(u)), null) : u;
    }
    function me(t) {
      var r = tu.get(t);
      if (r === void 0) {
        if (!Ci.test(t)) throw Error("Invalid tag: " + t);
        r = "<" + t, tu.set(t, r);
      }
      return r;
    }
    function Me(t, r, u, d, y, R, D, W, de, z) {
      he(r, u), r !== "input" && r !== "textarea" && r !== "select" || u == null || u.value !== null || Wn || (Wn = !0, r === "select" && u.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        r
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        r
      ));
      e: if (r.indexOf("-") === -1) var Fe = !1;
      else
        switch (r) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            Fe = !1;
            break e;
          default:
            Fe = !0;
        }
      switch (Fe || typeof u.is == "string" || Ge(r, u), !u.suppressContentEditableWarning && u.contentEditable && u.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), W.insertionMode !== ze && W.insertionMode !== bt && r.indexOf("-") === -1 && r.toLowerCase() !== r && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        r
      ), r) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          t.push(me("a"));
          var xe = null, _e = null, De;
          for (De in u)
            if (Pt.call(u, De)) {
              var ve = u[De];
              if (ve != null)
                switch (De) {
                  case "children":
                    xe = ve;
                    break;
                  case "dangerouslySetInnerHTML":
                    _e = ve;
                    break;
                  case "href":
                    ve === "" ? Ee(t, "href", "") : le(t, De, ve);
                    break;
                  default:
                    le(t, De, ve);
                }
            }
          if (t.push(mt), te(t, _e, xe), typeof xe == "string") {
            t.push(j(xe));
            var qe = null;
          } else qe = xe;
          return qe;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          fe("select", u), Q(u, "value"), Q(u, "defaultValue"), u.value === void 0 || u.defaultValue === void 0 || Ei || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), Ei = !0), t.push(me("select"));
          var st = null, je = null, lt;
          for (lt in u)
            if (Pt.call(u, lt)) {
              var tn = u[lt];
              if (tn != null)
                switch (lt) {
                  case "children":
                    st = tn;
                    break;
                  case "dangerouslySetInnerHTML":
                    je = tn;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    le(
                      t,
                      lt,
                      tn
                    );
                }
            }
          return t.push(mt), te(t, je, st), st;
        case "option":
          var Je = W.selectedValue;
          t.push(me("option"));
          var yt = null, xt = null, ir = null, En = null, In;
          for (In in u)
            if (Pt.call(u, In)) {
              var an = u[In];
              if (an != null)
                switch (In) {
                  case "children":
                    yt = an;
                    break;
                  case "selected":
                    ir = an, sn || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), sn = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    En = an;
                    break;
                  case "value":
                    xt = an;
                  default:
                    le(
                      t,
                      In,
                      an
                    );
                }
            }
          if (Je != null) {
            if (xt !== null) {
              B(xt, "value");
              var ci = "" + xt;
            } else
              En === null || _r || (_r = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), ci = nt(yt);
            if (Xt(Je)) {
              for (var xr = 0; xr < Je.length; xr++)
                if (B(Je[xr], "value"), "" + Je[xr] === ci) {
                  t.push(' selected=""');
                  break;
                }
            } else
              B(Je, "select.value"), "" + Je === ci && t.push(' selected=""');
          } else ir && t.push(' selected=""');
          return t.push(mt), te(t, En, yt), yt;
        case "textarea":
          fe("textarea", u), u.value === void 0 || u.defaultValue === void 0 || er || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), er = !0), t.push(me("textarea"));
          var Ft = null, e = null, n = null, c;
          for (c in u)
            if (Pt.call(u, c)) {
              var h = u[c];
              if (h != null)
                switch (c) {
                  case "children":
                    n = h;
                    break;
                  case "value":
                    Ft = h;
                    break;
                  case "defaultValue":
                    e = h;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    le(
                      t,
                      c,
                      h
                    );
                }
            }
          if (Ft === null && e !== null && (Ft = e), t.push(mt), n != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), Ft != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Xt(n)) {
              if (1 < n.length)
                throw Error("<textarea> can only have at most one child.");
              G(n[0]), Ft = "" + n[0];
            }
            G(n), Ft = "" + n;
          }
          return typeof Ft == "string" && Ft[0] === `
` && t.push(Ta), Ft !== null && (B(Ft, "value"), t.push(j("" + Ft))), null;
        case "input":
          fe("input", u), t.push(me("input"));
          var b = null, p = null, _ = null, I = null, re = null, L = null, Te = null, ye = null, Oe = null, Pe;
          for (Pe in u)
            if (Pt.call(u, Pe)) {
              var be = u[Pe];
              if (be != null)
                switch (Pe) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    b = be;
                    break;
                  case "formAction":
                    p = be;
                    break;
                  case "formEncType":
                    _ = be;
                    break;
                  case "formMethod":
                    I = be;
                    break;
                  case "formTarget":
                    re = be;
                    break;
                  case "defaultChecked":
                    Oe = be;
                    break;
                  case "defaultValue":
                    Te = be;
                    break;
                  case "checked":
                    ye = be;
                    break;
                  case "value":
                    L = be;
                    break;
                  default:
                    le(
                      t,
                      Pe,
                      be
                    );
                }
            }
          p === null || u.type === "image" || u.type === "submit" || Qr || (Qr = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var ht = $(
            t,
            d,
            y,
            p,
            _,
            I,
            re,
            b
          );
          return ye === null || Oe === null || $n || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), $n = !0), L === null || Te === null || fr || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            u.type
          ), fr = !0), ye !== null ? se(t, "checked", ye) : Oe !== null && se(t, "checked", Oe), L !== null ? le(t, "value", L) : Te !== null && le(t, "value", Te), t.push(cn), ht?.forEach(Ze, t), null;
        case "button":
          t.push(me("button"));
          var Ot = null, ut = null, He = null, kn = null, Ht = null, ct = null, gr = null, Br;
          for (Br in u)
            if (Pt.call(u, Br)) {
              var mn = u[Br];
              if (mn != null)
                switch (Br) {
                  case "children":
                    Ot = mn;
                    break;
                  case "dangerouslySetInnerHTML":
                    ut = mn;
                    break;
                  case "name":
                    He = mn;
                    break;
                  case "formAction":
                    kn = mn;
                    break;
                  case "formEncType":
                    Ht = mn;
                    break;
                  case "formMethod":
                    ct = mn;
                    break;
                  case "formTarget":
                    gr = mn;
                    break;
                  default:
                    le(
                      t,
                      Br,
                      mn
                    );
                }
            }
          kn === null || u.type == null || u.type === "submit" || Qr || (Qr = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var Hn = $(
            t,
            d,
            y,
            kn,
            Ht,
            ct,
            gr,
            He
          );
          if (t.push(mt), Hn?.forEach(Ze, t), te(t, ut, Ot), typeof Ot == "string") {
            t.push(j(Ot));
            var Vt = null;
          } else Vt = Ot;
          return Vt;
        case "form":
          t.push(me("form"));
          var vr = null, br = null, gt = null, ln = null, Bt = null, Er = null, kr;
          for (kr in u)
            if (Pt.call(u, kr)) {
              var zn = u[kr];
              if (zn != null)
                switch (kr) {
                  case "children":
                    vr = zn;
                    break;
                  case "dangerouslySetInnerHTML":
                    br = zn;
                    break;
                  case "action":
                    gt = zn;
                    break;
                  case "encType":
                    ln = zn;
                    break;
                  case "method":
                    Bt = zn;
                    break;
                  case "target":
                    Er = zn;
                    break;
                  default:
                    le(
                      t,
                      kr,
                      zn
                    );
                }
            }
          var $i = null, ei = null;
          if (typeof gt == "function") {
            ln === null && Bt === null || ai || (ai = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), Er === null || ki || (ki = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var ea = P(
              d,
              gt
            );
            ea !== null ? (gt = ea.action || "", ln = ea.encType, Bt = ea.method, Er = ea.target, $i = ea.data, ei = ea.name) : (t.push(
              Xe,
              "action",
              At,
              xi,
              un
            ), Er = Bt = ln = gt = null, pt(d, y));
          }
          if (gt != null && le(t, "action", gt), ln != null && le(t, "encType", ln), Bt != null && le(t, "method", Bt), Er != null && le(t, "target", Er), t.push(mt), ei !== null && (t.push('<input type="hidden"'), Ee(t, "name", ei), t.push(cn), $i?.forEach(
            Ze,
            t
          )), te(t, br, vr), typeof vr == "string") {
            t.push(j(vr));
            var Fo = null;
          } else Fo = vr;
          return Fo;
        case "menuitem":
          t.push(me("menuitem"));
          for (var ta in u)
            if (Pt.call(u, ta)) {
              var Kl = u[ta];
              if (Kl != null)
                switch (ta) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    le(
                      t,
                      ta,
                      Kl
                    );
                }
            }
          return t.push(mt), null;
        case "object":
          t.push(me("object"));
          var si = null, Ao = null, Cr;
          for (Cr in u)
            if (Pt.call(u, Cr)) {
              var Un = u[Cr];
              if (Un != null)
                switch (Cr) {
                  case "children":
                    si = Un;
                    break;
                  case "dangerouslySetInnerHTML":
                    Ao = Un;
                    break;
                  case "data":
                    B(Un, "data");
                    var gn = Ae("" + Un);
                    if (gn === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        Cr,
                        Cr
                      );
                      break;
                    }
                    t.push(
                      Xe,
                      "data",
                      At,
                      j(gn),
                      un
                    );
                    break;
                  default:
                    le(
                      t,
                      Cr,
                      Un
                    );
                }
            }
          if (t.push(mt), te(t, Ao, si), typeof si == "string") {
            t.push(j(si));
            var Wr = null;
          } else Wr = si;
          return Wr;
        case "title":
          var fi = W.insertionMode, ql = !!(W.tagScope & 1);
          if (Pt.call(u, "children")) {
            var hi = u.children, na = Array.isArray(hi) ? 2 > hi.length ? hi[0] : null : hi;
            Array.isArray(hi) && 1 < hi.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              hi.length
            ) : typeof na == "function" || typeof na == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof na == "function" ? "a Function" : "a Sybmol"
            ) : na && na.toString === {}.toString && (na.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (fi === ze || ql || u.itemProp != null)
            var di = S(
              t,
              u
            );
          else
            z ? di = null : (S(y.hoistableChunks, u), di = void 0);
          return di;
        case "link":
          var ec = u.rel, Dn = u.href, Nr = u.precedence;
          if (W.insertionMode === ze || W.tagScope & 1 || u.itemProp != null || typeof ec != "string" || typeof Dn != "string" || Dn === "") {
            ec === "stylesheet" && typeof u.precedence == "string" && (typeof Dn == "string" && Dn || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              Dn === null ? "`null`" : Dn === void 0 ? "`undefined`" : Dn === "" ? "an empty string" : 'something with type "' + typeof Dn + '"'
            )), Qe(t, u);
            var Aa = null;
          } else if (u.rel === "stylesheet")
            if (typeof Nr != "string" || u.disabled != null || u.onLoad || u.onError) {
              if (typeof Nr == "string") {
                if (u.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (u.onLoad || u.onError) {
                  var Ma = u.onLoad && u.onError ? "`onLoad` and `onError` props" : u.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    Ma,
                    Ma
                  );
                }
              }
              Aa = Qe(
                t,
                u
              );
            } else {
              var ra = y.styles.get(Nr), jl = d.styleResources.hasOwnProperty(
                Dn
              ) ? d.styleResources[Dn] : void 0;
              if (jl !== A) {
                d.styleResources[Dn] = A, ra || (ra = {
                  precedence: j(Nr),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, y.styles.set(Nr, ra));
                var Ai = {
                  state: Ke,
                  props: rn({}, u, {
                    "data-precedence": u.precedence,
                    precedence: null
                  })
                };
                if (jl) {
                  jl.length === 2 && ro(Ai.props, jl);
                  var hl = y.preloads.stylesheets.get(Dn);
                  hl && 0 < hl.length ? hl.length = 0 : Ai.state = at;
                }
                ra.sheets.set(Dn, Ai), D && D.stylesheets.add(Ai);
              } else if (ra) {
                var dl = ra.sheets.get(Dn);
                dl && D && D.stylesheets.add(dl);
              }
              de && t.push("<!-- -->"), Aa = null;
            }
          else
            u.onLoad || u.onError ? Aa = Qe(
              t,
              u
            ) : (de && t.push("<!-- -->"), Aa = z ? null : Qe(y.hoistableChunks, u));
          return Aa;
        case "script":
          var gl = u.async;
          if (typeof u.src != "string" || !u.src || !gl || typeof gl == "function" || typeof gl == "symbol" || u.onLoad || u.onError || W.insertionMode === ze || W.tagScope & 1 || u.itemProp != null)
            var vl = M(
              t,
              u
            );
          else {
            var gi = u.src;
            if (u.type === "module")
              var ia = d.moduleScriptResources, tc = y.preloads.moduleScripts;
            else
              ia = d.scriptResources, tc = y.preloads.scripts;
            var Mi = ia.hasOwnProperty(gi) ? ia[gi] : void 0;
            if (Mi !== A) {
              ia[gi] = A;
              var Mo = u;
              if (Mi) {
                Mi.length === 2 && (Mo = rn({}, u), ro(Mo, Mi));
                var Oo = tc.get(gi);
                Oo && (Oo.length = 0);
              }
              var Cc = [];
              y.scripts.add(Cc), M(Cc, Mo);
            }
            de && t.push("<!-- -->"), vl = null;
          }
          return vl;
        case "style":
          var Oa = W.insertionMode, nc = !!(W.tagScope & 1);
          if (Pt.call(u, "children")) {
            var ti = u.children, aa = Array.isArray(ti) ? 2 > ti.length ? ti[0] : null : ti;
            (typeof aa == "function" || typeof aa == "symbol" || Array.isArray(aa)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof aa == "function" ? "a Function" : typeof aa == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var vn = u.precedence, ar = u.href;
          if (Oa === ze || nc || u.itemProp != null || typeof vn != "string" || typeof ar != "string" || ar === "") {
            t.push(me("style"));
            var Hr = null, Sc = null, la;
            for (la in u)
              if (Pt.call(u, la)) {
                var bl = u[la];
                if (bl != null)
                  switch (la) {
                    case "children":
                      Hr = bl;
                      break;
                    case "dangerouslySetInnerHTML":
                      Sc = bl;
                      break;
                    default:
                      le(
                        t,
                        la,
                        bl
                      );
                  }
              }
            t.push(mt);
            var $l = Array.isArray(Hr) ? 2 > Hr.length ? Hr[0] : null : Hr;
            typeof $l != "function" && typeof $l != "symbol" && $l !== null && $l !== void 0 && t.push(dt($l)), te(
              t,
              Sc,
              Hr
            ), t.push(ot("style"));
            var Uc = null;
          } else {
            ar.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              ar
            );
            var Yn = y.styles.get(vn), pu = d.styleResources.hasOwnProperty(ar) ? d.styleResources[ar] : void 0;
            if (pu !== A) {
              d.styleResources[ar] = A, pu && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                ar
              ), Yn ? Yn.hrefs.push(
                j(ar)
              ) : (Yn = {
                precedence: j(vn),
                rules: [],
                hrefs: [j(ar)],
                sheets: /* @__PURE__ */ new Map()
              }, y.styles.set(
                vn,
                Yn
              ));
              var _o = Yn.rules, eo = null, Ru = null, Io;
              for (Io in u)
                if (Pt.call(u, Io)) {
                  var rc = u[Io];
                  if (rc != null)
                    switch (Io) {
                      case "children":
                        eo = rc;
                        break;
                      case "dangerouslySetInnerHTML":
                        Ru = rc;
                    }
                }
              var xu = Array.isArray(eo) ? 2 > eo.length ? eo[0] : null : eo;
              typeof xu != "function" && typeof xu != "symbol" && xu !== null && xu !== void 0 && _o.push(dt(xu)), te(_o, Ru, eo);
            }
            Yn && D && D.styles.add(Yn), de && t.push("<!-- -->"), Uc = void 0;
          }
          return Uc;
        case "meta":
          if (W.insertionMode === ze || W.tagScope & 1 || u.itemProp != null)
            var Kc = It(
              t,
              u,
              "meta"
            );
          else
            de && t.push("<!-- -->"), Kc = z ? null : typeof u.charSet == "string" ? It(y.charsetChunks, u, "meta") : u.name === "viewport" ? It(y.viewportChunks, u, "meta") : It(
              y.hoistableChunks,
              u,
              "meta"
            );
          return Kc;
        case "listing":
        case "pre":
          t.push(me(r));
          var Eu = null, mo = null, to;
          for (to in u)
            if (Pt.call(u, to)) {
              var _a = u[to];
              if (_a != null)
                switch (to) {
                  case "children":
                    Eu = _a;
                    break;
                  case "dangerouslySetInnerHTML":
                    mo = _a;
                    break;
                  default:
                    le(
                      t,
                      to,
                      _a
                    );
                }
            }
          if (t.push(mt), mo != null) {
            if (Eu != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof mo != "object" || !("__html" in mo))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var no = mo.__html;
            no != null && (typeof no == "string" && 0 < no.length && no[0] === `
` ? t.push(Ta, no) : (G(no), t.push("" + no)));
          }
          return typeof Eu == "string" && Eu[0] === `
` && t.push(Ta), Eu;
        case "img":
          var lr = u.src, Gn = u.srcSet;
          if (!(u.loading === "lazy" || !lr && !Gn || typeof lr != "string" && lr != null || typeof Gn != "string" && Gn != null) && u.fetchPriority !== "low" && !(W.tagScope & 3) && (typeof lr != "string" || lr[4] !== ":" || lr[0] !== "d" && lr[0] !== "D" || lr[1] !== "a" && lr[1] !== "A" || lr[2] !== "t" && lr[2] !== "T" || lr[3] !== "a" && lr[3] !== "A") && (typeof Gn != "string" || Gn[4] !== ":" || Gn[0] !== "d" && Gn[0] !== "D" || Gn[1] !== "a" && Gn[1] !== "A" || Gn[2] !== "t" && Gn[2] !== "T" || Gn[3] !== "a" && Gn[3] !== "A")) {
            var qc = typeof u.sizes == "string" ? u.sizes : void 0, ku = Gn ? Gn + `
` + (qc || "") : lr, jc = y.preloads.images, Do = jc.get(ku);
            if (Do)
              (u.fetchPriority === "high" || 10 > y.highImagePreloads.size) && (jc.delete(ku), y.highImagePreloads.add(Do));
            else if (!d.imageResources.hasOwnProperty(ku)) {
              d.imageResources[ku] = ne;
              var Lo = u.crossOrigin, Yc = typeof Lo == "string" ? Lo === "use-credentials" ? Lo : "" : void 0, Bo = y.headers, yl;
              Bo && 0 < Bo.remainingCapacity && typeof u.srcSet != "string" && (u.fetchPriority === "high" || 500 > Bo.highImagePreloads.length) && (yl = Tl(lr, "image", {
                imageSrcSet: u.srcSet,
                imageSizes: u.sizes,
                crossOrigin: Yc,
                integrity: u.integrity,
                nonce: u.nonce,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.refererPolicy
              }), 0 <= (Bo.remainingCapacity -= yl.length + 2)) ? (y.resets.image[ku] = ne, Bo.highImagePreloads && (Bo.highImagePreloads += ", "), Bo.highImagePreloads += yl) : (Do = [], Qe(Do, {
                rel: "preload",
                as: "image",
                href: Gn ? void 0 : lr,
                imageSrcSet: Gn,
                imageSizes: qc,
                crossOrigin: Yc,
                integrity: u.integrity,
                type: u.type,
                fetchPriority: u.fetchPriority,
                referrerPolicy: u.referrerPolicy
              }), u.fetchPriority === "high" || 10 > y.highImagePreloads.size ? y.highImagePreloads.add(Do) : (y.bulkPreloads.add(Do), jc.set(ku, Do)));
            }
          }
          return It(t, u, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return It(t, u, r);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (W.insertionMode < Ne) {
            var ic = R || y.preamble;
            if (ic.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            ic.headChunks = [];
            var us = Se(
              ic.headChunks,
              u,
              "head"
            );
          } else
            us = we(
              t,
              u,
              "head"
            );
          return us;
        case "body":
          if (W.insertionMode < Ne) {
            var Pc = R || y.preamble;
            if (Pc.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            Pc.bodyChunks = [];
            var $c = Se(
              Pc.bodyChunks,
              u,
              "body"
            );
          } else
            $c = we(
              t,
              u,
              "body"
            );
          return $c;
        case "html":
          if (W.insertionMode === ke) {
            var Fc = R || y.preamble;
            if (Fc.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            Fc.htmlChunks = [hn];
            var cs = Se(
              Fc.htmlChunks,
              u,
              "html"
            );
          } else
            cs = we(
              t,
              u,
              "html"
            );
          return cs;
        default:
          if (r.indexOf("-") !== -1) {
            t.push(me(r));
            var Cu = null, ss = null, Ac;
            for (Ac in u)
              if (Pt.call(u, Ac)) {
                var vi = u[Ac];
                if (vi != null) {
                  var fs = Ac;
                  switch (Ac) {
                    case "children":
                      Cu = vi;
                      break;
                    case "dangerouslySetInnerHTML":
                      ss = vi;
                      break;
                    case "style":
                      H(t, vi);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      fs = "class";
                    default:
                      if (U(Ac) && typeof vi != "function" && typeof vi != "symbol" && vi !== !1) {
                        if (vi === !0)
                          vi = "";
                        else if (typeof vi == "object")
                          continue;
                        t.push(
                          Xe,
                          fs,
                          At,
                          j(vi),
                          un
                        );
                      }
                  }
                }
              }
            return t.push(mt), te(
              t,
              ss,
              Cu
            ), Cu;
          }
      }
      return we(t, u, r);
    }
    function ot(t) {
      var r = vc.get(t);
      return r === void 0 && (r = "</" + t + ">", vc.set(t, r)), r;
    }
    function ua(t, r) {
      t = t.preamble, t.htmlChunks === null && r.htmlChunks && (t.htmlChunks = r.htmlChunks, r.contribution |= 1), t.headChunks === null && r.headChunks && (t.headChunks = r.headChunks, r.contribution |= 4), t.bodyChunks === null && r.bodyChunks && (t.bodyChunks = r.bodyChunks, r.contribution |= 2);
    }
    function nn(t, r) {
      r = r.bootstrapChunks;
      for (var u = 0; u < r.length - 1; u++)
        t.push(r[u]);
      return u < r.length ? (u = r[u], r.length = 0, t.push(u)) : !0;
    }
    function Yt(t, r, u) {
      if (t.push(hr), u === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return t.push(r.boundaryPrefix), r = u.toString(16), t.push(r), t.push(qt);
    }
    function yr(t, r) {
      r = r.contribution, r !== Be && (t.push(pa), t.push("" + r), t.push(pn));
    }
    function ca(t, r, u, d) {
      switch (u.insertionMode) {
        case ke:
        case Le:
        case tt:
        case Ne:
          return t.push(ru), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(mr);
        case ze:
          return t.push(tl), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(Xi);
        case bt:
          return t.push(nl), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(tr);
        case St:
          return t.push(yc), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(iu);
        case Rt:
          return t.push(Yu), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(_n);
        case Nt:
          return t.push(Wl), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(rl);
        case Ue:
          return t.push(lu), t.push(r.segmentPrefix), r = d.toString(16), t.push(r), t.push(Vr);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ia(t, r) {
      switch (r.insertionMode) {
        case ke:
        case Le:
        case tt:
        case Ne:
          return t.push(Ll);
        case ze:
          return t.push(oi);
        case bt:
          return t.push(Ra);
        case St:
          return t.push(To);
        case Rt:
          return t.push(Bl);
        case Nt:
          return t.push(au);
        case Ue:
          return t.push(mc);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Cn(t) {
      return JSON.stringify(t).replace(
        ol,
        function(r) {
          switch (r) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function Qt(t) {
      return JSON.stringify(t).replace(
        Hl,
        function(r) {
          switch (r) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function et(t) {
      var r = t.rules, u = t.hrefs;
      0 < r.length && u.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var d = 0;
      if (u.length) {
        for (this.push(zl), this.push(t.precedence), this.push(fu); d < u.length - 1; d++)
          this.push(u[d]), this.push(K);
        for (this.push(u[d]), this.push(i), d = 0; d < r.length; d++) this.push(r[d]);
        v = this.push(l), s = !0, r.length = 0, u.length = 0;
      }
    }
    function bn(t) {
      return t.state !== Dt ? s = !0 : !1;
    }
    function wr(t, r, u) {
      return s = !1, v = !0, r.styles.forEach(et, t), r.stylesheets.forEach(bn), s && (u.stylesToHoist = !0), v;
    }
    function Sn(t) {
      for (var r = 0; r < t.length; r++) this.push(t[r]);
      t.length = 0;
    }
    function Ln(t) {
      Qe(w, t.props);
      for (var r = 0; r < w.length; r++)
        this.push(w[r]);
      w.length = 0, t.state = Dt;
    }
    function Fu(t) {
      var r = 0 < t.sheets.size;
      t.sheets.forEach(Ln, this), t.sheets.clear();
      var u = t.rules, d = t.hrefs;
      if (!r || d.length) {
        if (this.push(E), this.push(t.precedence), t = 0, d.length) {
          for (this.push(O); t < d.length - 1; t++)
            this.push(d[t]), this.push(K);
          this.push(d[t]);
        }
        for (this.push(m), t = 0; t < u.length; t++)
          this.push(u[t]);
        this.push(X), u.length = 0, d.length = 0;
      }
    }
    function Au(t) {
      if (t.state === Ke) {
        t.state = at;
        var r = t.props;
        for (Qe(w, {
          rel: "preload",
          as: "style",
          href: t.props.href,
          crossOrigin: r.crossOrigin,
          fetchPriority: r.fetchPriority,
          integrity: r.integrity,
          media: r.media,
          hrefLang: r.hrefLang,
          referrerPolicy: r.referrerPolicy
        }), t = 0; t < w.length; t++)
          this.push(w[t]);
        w.length = 0;
      }
    }
    function wl(t) {
      t.sheets.forEach(Au, this), t.sheets.clear();
    }
    function Mu(t, r) {
      t.push(Ce);
      var u = Ce;
      r.stylesheets.forEach(function(d) {
        if (d.state !== Dt)
          if (d.state === fn)
            t.push(u), d = d.props.href, B(d, "href"), d = Qt("" + d), t.push(d), t.push(Ye), u = ge;
          else {
            t.push(u);
            var y = d.props["data-precedence"], R = d.props, D = Ae("" + d.props.href);
            D = Qt(D), t.push(D), B(y, "precedence"), y = "" + y, t.push(We), y = Qt(y), t.push(y);
            for (var W in R)
              if (Pt.call(R, W) && (y = R[W], y != null))
                switch (W) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    sa(
                      t,
                      W,
                      y
                    );
                }
            t.push(Ye), u = ge, d.state = fn;
          }
      }), t.push(Ye);
    }
    function sa(t, r, u) {
      var d = r.toLowerCase();
      switch (typeof u) {
        case "function":
        case "symbol":
          return;
      }
      switch (r) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          d = "class", B(u, d), r = "" + u;
          break;
        case "hidden":
          if (u === !1) return;
          r = "";
          break;
        case "src":
        case "href":
          u = Ae(u), B(u, d), r = "" + u;
          break;
        default:
          if (2 < r.length && (r[0] === "o" || r[0] === "O") && (r[1] === "n" || r[1] === "N") || !U(r))
            return;
          B(u, d), r = "" + u;
      }
      t.push(We), d = Qt(d), t.push(d), t.push(We), d = Qt(r), t.push(d);
    }
    function ma() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
    }
    function No(t, r, u, d) {
      (t.scriptResources.hasOwnProperty(u) || t.moduleScriptResources.hasOwnProperty(u)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        u
      ), t.scriptResources[u] = A, t.moduleScriptResources[u] = A, t = [], Qe(t, d), r.bootstrapScripts.add(t);
    }
    function ro(t, r) {
      t.crossOrigin == null && (t.crossOrigin = r[0]), t.integrity == null && (t.integrity = r[1]);
    }
    function Tl(t, r, u) {
      t = wt(t), r = Ho(r, "as"), r = "<" + t + '>; rel=preload; as="' + r + '"';
      for (var d in u)
        Pt.call(u, d) && (t = u[d], typeof t == "string" && (r += "; " + d.toLowerCase() + '="' + Ho(
          t,
          d
        ) + '"'));
      return r;
    }
    function wt(t) {
      return B(t, "href"), ("" + t).replace(
        Tt,
        Sr
      );
    }
    function Sr(t) {
      switch (t) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Ho(t, r) {
      return ue(t) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        r,
        q(t)
      ), k(t)), ("" + t).replace(
        dr,
        Da
      );
    }
    function Da(t) {
      switch (t) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function bi(t) {
      this.styles.add(t);
    }
    function Ou(t) {
      this.stylesheets.add(t);
    }
    function lc(t, r) {
      var u = t.idPrefix, d = [], y = t.bootstrapScriptContent, R = t.bootstrapScripts, D = t.bootstrapModules;
      if (y !== void 0 && d.push(
        "<script>",
        Ve(y),
        "<\/script>"
      ), u = {
        placeholderPrefix: u + "P:",
        segmentPrefix: u + "S:",
        boundaryPrefix: u + "B:",
        startInlineScript: "<script>",
        preamble: $e(),
        externalRuntimeScript: null,
        bootstrapChunks: d,
        importMapChunks: [],
        onHeaders: void 0,
        headers: null,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: void 0,
        hoistableState: null,
        stylesToHoist: !1
      }, R !== void 0)
        for (y = 0; y < R.length; y++) {
          var W = R[y], de, z = void 0, Fe = void 0, xe = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: void 0
          };
          typeof W == "string" ? xe.href = de = W : (xe.href = de = W.src, xe.integrity = Fe = typeof W.integrity == "string" ? W.integrity : void 0, xe.crossOrigin = z = typeof W == "string" || W.crossOrigin == null ? void 0 : W.crossOrigin === "use-credentials" ? "use-credentials" : ""), No(t, u, de, xe), d.push('<script src="', j(de)), typeof Fe == "string" && d.push(
            '" integrity="',
            j(Fe)
          ), typeof z == "string" && d.push(
            '" crossorigin="',
            j(z)
          ), d.push('" async=""><\/script>');
        }
      if (D !== void 0)
        for (R = 0; R < D.length; R++)
          y = D[R], z = de = void 0, Fe = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: void 0
          }, typeof y == "string" ? Fe.href = W = y : (Fe.href = W = y.src, Fe.integrity = z = typeof y.integrity == "string" ? y.integrity : void 0, Fe.crossOrigin = de = typeof y == "string" || y.crossOrigin == null ? void 0 : y.crossOrigin === "use-credentials" ? "use-credentials" : ""), No(
            t,
            u,
            W,
            Fe
          ), d.push(
            '<script type="module" src="',
            j(W)
          ), typeof z == "string" && d.push(
            '" integrity="',
            j(z)
          ), typeof de == "string" && d.push(
            '" crossorigin="',
            j(de)
          ), d.push('" async=""><\/script>');
      return {
        placeholderPrefix: u.placeholderPrefix,
        segmentPrefix: u.segmentPrefix,
        boundaryPrefix: u.boundaryPrefix,
        startInlineScript: u.startInlineScript,
        preamble: u.preamble,
        externalRuntimeScript: u.externalRuntimeScript,
        bootstrapChunks: u.bootstrapChunks,
        importMapChunks: u.importMapChunks,
        onHeaders: u.onHeaders,
        headers: u.headers,
        resets: u.resets,
        charsetChunks: u.charsetChunks,
        viewportChunks: u.viewportChunks,
        hoistableChunks: u.hoistableChunks,
        preconnects: u.preconnects,
        fontPreloads: u.fontPreloads,
        highImagePreloads: u.highImagePreloads,
        styles: u.styles,
        bootstrapScripts: u.bootstrapScripts,
        scripts: u.scripts,
        bulkPreloads: u.bulkPreloads,
        preloads: u.preloads,
        stylesToHoist: u.stylesToHoist,
        generateStaticMarkup: r
      };
    }
    function _u(t, r, u, d) {
      return u.generateStaticMarkup ? (t.push(j(r)), !1) : (r === "" ? t = d : (d && t.push("<!-- -->"), t.push(j(r)), t = !0), t);
    }
    function zo(t, r, u, d) {
      r.generateStaticMarkup || u && d && t.push("<!-- -->");
    }
    function Wt(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === nr ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case Za:
          return "Fragment";
        case Qa:
          return "Profiler";
        case Vo:
          return "StrictMode";
        case Ti:
          return "Suspense";
        case Yi:
          return "SuspenseList";
        case Ka:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case Ml:
            return "Portal";
          case Ja:
            return (t.displayName || "Context") + ".Provider";
          case _l:
            return (t._context.displayName || "Context") + ".Consumer";
          case Va:
            var r = t.render;
            return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case Ko:
            return r = t.displayName || null, r !== null ? r : Wt(t.type) || "Memo";
          case Il:
            r = t._payload, t = t._init;
            try {
              return Wt(t(r));
            } catch {
            }
        }
      return null;
    }
    function La(t, r) {
      if (t !== r) {
        t.context._currentValue2 = t.parentValue, t = t.parent;
        var u = r.parent;
        if (t === null) {
          if (u !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (u === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          La(t, u);
        }
        r.context._currentValue2 = r.value;
      }
    }
    function Bn(t) {
      t.context._currentValue2 = t.parentValue, t = t.parent, t !== null && Bn(t);
    }
    function zr(t) {
      var r = t.parent;
      r !== null && zr(r), t.context._currentValue2 = t.value;
    }
    function yn(t, r) {
      if (t.context._currentValue2 = t.parentValue, t = t.parent, t === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      t.depth === r.depth ? La(t, r) : yn(t, r);
    }
    function pl(t, r) {
      var u = r.parent;
      if (u === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      t.depth === u.depth ? La(t, u) : pl(t, u), r.context._currentValue2 = r.value;
    }
    function Ur(t) {
      var r = Lt;
      r !== t && (r === null ? zr(t) : t === null ? Bn(r) : r.depth === t.depth ? La(r, t) : r.depth > t.depth ? yn(r, t) : pl(r, t), Lt = t);
    }
    function Pn(t) {
      if (t !== null && typeof t != "function") {
        var r = String(t);
        Zc.has(r) || (Zc.add(r), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          t
        ));
      }
    }
    function Gt(t, r) {
      t = (t = t.constructor) && Wt(t) || "ReactClass";
      var u = t + "." + r;
      Rn[u] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        r,
        t
      ), Rn[u] = !0);
    }
    function Ba(t, r, u) {
      var d = t.id;
      t = t.overflow;
      var y = 32 - Zu(d) - 1;
      d &= ~(1 << y), u += 1;
      var R = 32 - Zu(r) + y;
      if (30 < R) {
        var D = y - y % 5;
        return R = (d & (1 << D) - 1).toString(32), d >>= D, y -= D, {
          id: 1 << 32 - Zu(r) + y | u << y | d,
          overflow: R + t
        };
      }
      return {
        id: 1 << R | u << y | d,
        overflow: t
      };
    }
    function Pr(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Jc(t) / Lc | 0) | 0;
    }
    function Yr() {
    }
    function oc(t, r, u) {
      switch (u = t[u], u === void 0 ? t.push(r) : u !== r && (r.then(Yr, Yr), r = u), r.status) {
        case "fulfilled":
          return r.value;
        case "rejected":
          throw r.reason;
        default:
          switch (typeof r.status == "string" ? r.then(Yr, Yr) : (t = r, t.status = "pending", t.then(
            function(d) {
              if (r.status === "pending") {
                var y = r;
                y.status = "fulfilled", y.value = d;
              }
            },
            function(d) {
              if (r.status === "pending") {
                var y = r;
                y.status = "rejected", y.reason = d;
              }
            }
          )), r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw r.reason;
          }
          throw Lr = r, Qi;
      }
    }
    function io() {
      if (Lr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var t = Lr;
      return Lr = null, t;
    }
    function vt(t, r) {
      return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
    }
    function zt() {
      if (Kr === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return jr && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), Kr;
    }
    function Rl() {
      if (0 < Zl)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function Xn() {
      return Zt === null ? Rc === null ? (Vu = !1, Rc = Zt = Rl()) : (Vu = !0, Zt = Rc) : Zt.next === null ? (Vu = !1, Zt = Zt.next = Rl()) : (Vu = !0, Zt = Zt.next), Zt;
    }
    function xl() {
      var t = ko;
      return ko = null, t;
    }
    function Ii() {
      jr = !1, pc = Ju = Qu = Kr = null, Eo = !1, Rc = null, Zl = 0, Zt = qr = null;
    }
    function Mc(t) {
      return jr && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), t._currentValue2;
    }
    function El(t, r) {
      return typeof r == "function" ? r(t) : r;
    }
    function Oc(t, r, u) {
      if (t !== El && (cl = "useReducer"), Kr = zt(), Zt = Xn(), Vu) {
        if (u = Zt.queue, r = u.dispatch, qr !== null) {
          var d = qr.get(u);
          if (d !== void 0) {
            qr.delete(u), u = Zt.memoizedState;
            do {
              var y = d.action;
              jr = !0, u = t(u, y), jr = !1, d = d.next;
            } while (d !== null);
            return Zt.memoizedState = u, [u, r];
          }
        }
        return [Zt.memoizedState, r];
      }
      return jr = !0, t = t === El ? typeof r == "function" ? r() : r : u !== void 0 ? u(r) : r, jr = !1, Zt.memoizedState = t, t = Zt.queue = { last: null, dispatch: null }, t = t.dispatch = Zn.bind(
        null,
        Kr,
        t
      ), [Zt.memoizedState, t];
    }
    function mi(t, r) {
      if (Kr = zt(), Zt = Xn(), r = r === void 0 ? null : r, Zt !== null) {
        var u = Zt.memoizedState;
        if (u !== null && r !== null) {
          e: {
            var d = u[1];
            if (d === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                cl
              ), d = !1;
            else {
              r.length !== d.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                cl,
                "[" + r.join(", ") + "]",
                "[" + d.join(", ") + "]"
              );
              for (var y = 0; y < d.length && y < r.length; y++)
                if (!Bc(r[y], d[y])) {
                  d = !1;
                  break e;
                }
              d = !0;
            }
          }
          if (d) return u[0];
        }
      }
      return jr = !0, t = t(), jr = !1, Zt.memoizedState = [t, r], t;
    }
    function Zn(t, r, u) {
      if (25 <= Zl)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (t === Kr)
        if (Eo = !0, t = { action: u, next: null }, qr === null && (qr = /* @__PURE__ */ new Map()), u = qr.get(r), u === void 0)
          qr.set(r, t);
        else {
          for (r = u; r.next !== null; ) r = r.next;
          r.next = t;
        }
    }
    function Iu() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function yi() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function Fr(t, r, u) {
      zt();
      var d = Gl++, y = Ju;
      if (typeof t.$$FORM_ACTION == "function") {
        var R = null, D = pc;
        y = y.formState;
        var W = t.$$IS_SIGNATURE_EQUAL;
        if (y !== null && typeof W == "function") {
          var de = y[1];
          W.call(t, y[2], y[3]) && (R = u !== void 0 ? "p" + u : "k" + C(
            JSON.stringify([
              D,
              null,
              d
            ]),
            0
          ), de === R && (Ji = d, r = y[0]));
        }
        var z = t.bind(null, r);
        return t = function(xe) {
          z(xe);
        }, typeof z.$$FORM_ACTION == "function" && (t.$$FORM_ACTION = function(xe) {
          xe = z.$$FORM_ACTION(xe), u !== void 0 && (B(u, "target"), u += "", xe.action = u);
          var _e = xe.data;
          return _e && (R === null && (R = u !== void 0 ? "p" + u : "k" + C(
            JSON.stringify([
              D,
              null,
              d
            ]),
            0
          )), _e.append("$ACTION_KEY", R)), xe;
        }), [r, t, !1];
      }
      var Fe = t.bind(null, r);
      return [
        r,
        function(xe) {
          Fe(xe);
        },
        !1
      ];
    }
    function ao(t) {
      var r = Xl;
      return Xl += 1, ko === null && (ko = []), oc(ko, t, r);
    }
    function Wa() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function Di() {
    }
    function Na() {
    }
    function mu() {
      if (Ki === 0) {
        Nc = console.log, xc = console.info, Ku = console.warn, qu = console.error, Vc = console.group, qi = console.groupCollapsed, Ql = console.groupEnd;
        var t = {
          configurable: !0,
          enumerable: !0,
          value: Na,
          writable: !0
        };
        Object.defineProperties(console, {
          info: t,
          log: t,
          warn: t,
          error: t,
          group: t,
          groupCollapsed: t,
          groupEnd: t
        });
      }
      Ki++;
    }
    function _c() {
      if (Ki--, Ki === 0) {
        var t = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: rn({}, t, { value: Nc }),
          info: rn({}, t, { value: xc }),
          warn: rn({}, t, { value: Ku }),
          error: rn({}, t, { value: qu }),
          group: rn({}, t, { value: Vc }),
          groupCollapsed: rn({}, t, { value: qi }),
          groupEnd: rn({}, t, { value: Ql })
        });
      }
      0 > Ki && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function fa(t) {
      if (Hc === void 0)
        try {
          throw Error();
        } catch (u) {
          var r = u.stack.trim().match(/\n( *(at )?)/);
          Hc = r && r[1] || "", Pa = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Hc + t + Pa;
    }
    function Jt(t, r) {
      if (!t || du) return "";
      var u = Ec.get(t);
      if (u !== void 0) return u;
      du = !0, u = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var d = null;
      d = sr.H, sr.H = null, mu();
      try {
        var y = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var _e = function() {
                  throw Error();
                };
                if (Object.defineProperty(_e.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(_e, []);
                  } catch (ve) {
                    var De = ve;
                  }
                  Reflect.construct(t, [], _e);
                } else {
                  try {
                    _e.call();
                  } catch (ve) {
                    De = ve;
                  }
                  t.call(_e.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ve) {
                  De = ve;
                }
                (_e = t()) && typeof _e.catch == "function" && _e.catch(function() {
                });
              }
            } catch (ve) {
              if (ve && De && typeof ve.stack == "string")
                return [ve.stack, De.stack];
            }
            return [null, null];
          }
        };
        y.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var R = Object.getOwnPropertyDescriptor(
          y.DetermineComponentFrameRoot,
          "name"
        );
        R && R.configurable && Object.defineProperty(
          y.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var D = y.DetermineComponentFrameRoot(), W = D[0], de = D[1];
        if (W && de) {
          var z = W.split(`
`), Fe = de.split(`
`);
          for (D = R = 0; R < z.length && !z[R].includes(
            "DetermineComponentFrameRoot"
          ); )
            R++;
          for (; D < Fe.length && !Fe[D].includes(
            "DetermineComponentFrameRoot"
          ); )
            D++;
          if (R === z.length || D === Fe.length)
            for (R = z.length - 1, D = Fe.length - 1; 1 <= R && 0 <= D && z[R] !== Fe[D]; )
              D--;
          for (; 1 <= R && 0 <= D; R--, D--)
            if (z[R] !== Fe[D]) {
              if (R !== 1 || D !== 1)
                do
                  if (R--, D--, 0 > D || z[R] !== Fe[D]) {
                    var xe = `
` + z[R].replace(
                      " at new ",
                      " at "
                    );
                    return t.displayName && xe.includes("<anonymous>") && (xe = xe.replace("<anonymous>", t.displayName)), typeof t == "function" && Ec.set(t, xe), xe;
                  }
                while (1 <= R && 0 <= D);
              break;
            }
        }
      } finally {
        du = !1, sr.H = d, _c(), Error.prepareStackTrace = u;
      }
      return z = (z = t ? t.displayName || t.name : "") ? fa(z) : "", typeof t == "function" && Ec.set(t, z), z;
    }
    function Uo(t) {
      var r = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, t = t.stack, Error.prepareStackTrace = r, t.startsWith(`Error: react-stack-top-frame
`) && (t = t.slice(29)), r = t.indexOf(`
`), r !== -1 && (t = t.slice(r + 1)), r = t.indexOf("react_stack_bottom_frame"), r !== -1 && (r = t.lastIndexOf(
        `
`,
        r
      )), r !== -1)
        t = t.slice(0, r);
      else return "";
      return t;
    }
    function uc(t) {
      if (typeof t == "string") return fa(t);
      if (typeof t == "function")
        return t.prototype && t.prototype.isReactComponent ? Jt(t, !0) : Jt(t, !1);
      if (typeof t == "object" && t !== null) {
        switch (t.$$typeof) {
          case Va:
            return Jt(t.render, !1);
          case Ko:
            return Jt(t.type, !1);
          case Il:
            var r = t, u = r._payload;
            r = r._init;
            try {
              t = r(u);
            } catch {
              return fa("Lazy");
            }
            return uc(t);
        }
        if (typeof t.name == "string")
          return u = t.env, fa(
            t.name + (u ? " [" + u + "]" : "")
          );
      }
      switch (t) {
        case Yi:
          return fa("SuspenseList");
        case Ti:
          return fa("Suspense");
      }
      return "";
    }
    function lo(t) {
      if (typeof t == "object" && t !== null && typeof t.environmentName == "string") {
        var r = t.environmentName;
        t = [t].slice(0), typeof t[0] == "string" ? t.splice(
          0,
          1,
          "[%s] " + t[0],
          " " + r + " "
        ) : t.splice(0, 0, "[%s] ", " " + r + " "), t.unshift(console), r = Dr.apply(console.error, t), r();
      } else console.error(t);
      return null;
    }
    function or() {
    }
    function cc(t, r, u, d, y, R, D, W, de, z, Fe) {
      var xe = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = t, this.renderState = r, this.rootFormatContext = u, this.progressiveChunkSize = d === void 0 ? 12800 : d, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = xe, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = y === void 0 ? lo : y, this.onPostpone = z === void 0 ? or : z, this.onAllReady = R === void 0 ? or : R, this.onShellReady = D === void 0 ? or : D, this.onShellError = W === void 0 ? or : W, this.onFatalError = de === void 0 ? or : de, this.formState = Fe === void 0 ? null : Fe, this.didWarnForKey = null;
    }
    function Ha(t, r, u, d, y, R, D, W, de, z, Fe, xe) {
      var _e = vu();
      return 1e3 < _e - So && (sr.recentlyCreatedOwnerStacks = 0, So = _e), r = new cc(
        r,
        u,
        d,
        y,
        R,
        D,
        W,
        de,
        z,
        Fe,
        xe
      ), u = Cl(
        r,
        0,
        null,
        d,
        !1,
        !1
      ), u.parentFlushed = !0, t = kl(
        r,
        null,
        t,
        -1,
        null,
        u,
        null,
        null,
        r.abortableTasks,
        null,
        d,
        null,
        Dc,
        null,
        !1,
        Nn,
        null
      ), Sl(t), r.pingedTasks.push(t), r;
    }
    function ni(t, r) {
      t.pingedTasks.push(r), t.pingedTasks.length === 1 && (t.flushScheduled = t.destination !== null, Kn(t));
    }
    function ha(t, r, u, d) {
      return {
        status: $r,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: r,
        errorDigest: null,
        contentState: ma(),
        fallbackState: ma(),
        contentPreamble: u,
        fallbackPreamble: d,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      };
    }
    function kl(t, r, u, d, y, R, D, W, de, z, Fe, xe, _e, De, ve, qe, st) {
      t.allPendingTasks++, y === null ? t.pendingRootTasks++ : y.pendingTasks++;
      var je = {
        replay: null,
        node: u,
        childIndex: d,
        ping: function() {
          return ni(t, je);
        },
        blockedBoundary: y,
        blockedSegment: R,
        blockedPreamble: D,
        hoistableState: W,
        abortSet: de,
        keyPath: z,
        formatContext: Fe,
        context: xe,
        treeContext: _e,
        componentStack: De,
        thenableState: r,
        isFallback: ve
      };
      return je.debugTask = st, de.add(je), je;
    }
    function Yo(t, r, u, d, y, R, D, W, de, z, Fe, xe, _e, De, ve, qe) {
      t.allPendingTasks++, R === null ? t.pendingRootTasks++ : R.pendingTasks++, u.pendingTasks++;
      var st = {
        replay: u,
        node: d,
        childIndex: y,
        ping: function() {
          return ni(t, st);
        },
        blockedBoundary: R,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: D,
        abortSet: W,
        keyPath: de,
        formatContext: z,
        context: Fe,
        treeContext: xe,
        componentStack: _e,
        thenableState: r,
        isFallback: De
      };
      return st.debugTask = qe, W.add(st), st;
    }
    function Cl(t, r, u, d, y, R) {
      return {
        status: $r,
        parentFlushed: !1,
        id: -1,
        index: r,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: d,
        boundary: u,
        lastPushedText: y,
        textEmbedded: R
      };
    }
    function Gr() {
      if (ui === null || ui.componentStack === null)
        return "";
      var t = ui.componentStack;
      try {
        var r = "";
        if (typeof t.type == "string")
          r += fa(t.type);
        else if (typeof t.type == "function") {
          if (!t.owner) {
            var u = r, d = t.type, y = d ? d.displayName || d.name : "", R = y ? fa(y) : "";
            r = u + R;
          }
        } else
          t.owner || (r += uc(t.type));
        for (; t; )
          u = null, t.debugStack != null ? u = Uo(
            t.debugStack
          ) : (R = t, R.stack != null && (u = typeof R.stack != "string" ? R.stack = Uo(
            R.stack
          ) : R.stack)), (t = t.owner) && u && (r += `
` + u);
        var D = r;
      } catch (W) {
        D = `
Error generating stack: ` + W.message + `
` + W.stack;
      }
      return D;
    }
    function za(t, r) {
      if (r != null)
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          typeof d.name == "string" && d.debugStack !== void 0 && (t.componentStack = {
            parent: t.componentStack,
            type: d,
            owner: d.owner,
            stack: d.debugStack
          }, t.debugTask = d.debugTask);
        }
    }
    function Sl(t) {
      var r = t.node;
      if (typeof r == "object" && r !== null)
        switch (r.$$typeof) {
          case Xa:
            var u = r.type, d = r._owner, y = r._debugStack;
            za(t, r._debugInfo), t.debugTask = r._debugTask, t.componentStack = {
              parent: t.componentStack,
              type: u,
              owner: d,
              stack: y
            };
            break;
          case Il:
            za(t, r._debugInfo);
            break;
          default:
            typeof r.then == "function" && za(t, r._debugInfo);
        }
    }
    function da(t) {
      var r = {};
      return t && Object.defineProperty(r, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var u = "", d = t;
            do
              u += uc(d.type), d = d.parent;
            while (d);
            var y = u;
          } catch (R) {
            y = `
Error generating stack: ` + R.message + `
` + R.stack;
          }
          return Object.defineProperty(r, "componentStack", {
            value: y
          }), y;
        }
      }), r;
    }
    function Li(t, r, u, d, y) {
      t.errorDigest = r, u instanceof Error ? (r = String(u.message), u = String(u.stack)) : (r = typeof u == "object" && u !== null ? Y(u) : String(u), u = null), y = y ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, t.errorMessage = y + r, t.errorStack = u !== null ? y + u : null, t.errorComponentStack = d.componentStack;
    }
    function Qn(t, r, u, d) {
      if (t = t.onError, r = d ? d.run(t.bind(null, r, u)) : t(r, u), r != null && typeof r != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof r
        );
      else return r;
    }
    function Bi(t, r, u, d) {
      u = t.onShellError;
      var y = t.onFatalError;
      d ? (d.run(u.bind(null, r)), d.run(y.bind(null, r))) : (u(r), y(r)), t.destination !== null ? (t.status = fl, t.destination.destroy(r)) : (t.status = 13, t.fatalError = r);
    }
    function sc(t, r, u, d, y, R) {
      var D = r.thenableState;
      for (r.thenableState = null, Kr = {}, Qu = r, Ju = t, pc = u, jr = !1, Gl = xn = 0, Ji = -1, Xl = 0, ko = D, t = gu(d, y, R); Eo; )
        Eo = !1, Gl = xn = 0, Ji = -1, Xl = 0, Zl += 1, Zt = null, t = d(y, R);
      return Ii(), t;
    }
    function Xr(t, r, u, d, y, R, D) {
      var W = !1;
      if (R !== 0 && t.formState !== null) {
        var de = r.blockedSegment;
        if (de !== null) {
          W = !0, de = de.chunks;
          for (var z = 0; z < R; z++)
            z === D ? de.push("<!--F!-->") : de.push("<!--F-->");
        }
      }
      R = r.keyPath, r.keyPath = u, y ? (u = r.treeContext, r.treeContext = Ba(u, 1, 0), Jn(t, r, d, -1), r.treeContext = u) : W ? Jn(t, r, d, -1) : on(t, r, d, -1), r.keyPath = R;
    }
    function ga(t, r, u, d, y, R) {
      if (typeof d == "function")
        if (d.prototype && d.prototype.isReactComponent) {
          var D = y;
          if ("ref" in y) {
            D = {};
            for (var W in y)
              W !== "ref" && (D[W] = y[W]);
          }
          var de = d.defaultProps;
          if (de) {
            D === y && (D = rn({}, D, y));
            for (var z in de)
              D[z] === void 0 && (D[z] = de[z]);
          }
          var Fe = D, xe = Nn, _e = d.contextType;
          if ("contextType" in d && _e !== null && (_e === void 0 || _e.$$typeof !== Ja) && !ul.has(d)) {
            ul.add(d);
            var De = _e === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof _e != "object" ? " However, it is set to a " + typeof _e + "." : _e.$$typeof === _l ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(_e).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              Wt(d) || "Component",
              De
            );
          }
          typeof _e == "object" && _e !== null && (xe = _e._currentValue2);
          var ve = new d(Fe, xe);
          if (typeof d.getDerivedStateFromProps == "function" && (ve.state === null || ve.state === void 0)) {
            var qe = Wt(d) || "Component";
            rr.has(qe) || (rr.add(qe), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              qe,
              ve.state === null ? "null" : "undefined",
              qe
            ));
          }
          if (typeof d.getDerivedStateFromProps == "function" || typeof ve.getSnapshotBeforeUpdate == "function") {
            var st = null, je = null, lt = null;
            if (typeof ve.componentWillMount == "function" && ve.componentWillMount.__suppressDeprecationWarning !== !0 ? st = "componentWillMount" : typeof ve.UNSAFE_componentWillMount == "function" && (st = "UNSAFE_componentWillMount"), typeof ve.componentWillReceiveProps == "function" && ve.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? je = "componentWillReceiveProps" : typeof ve.UNSAFE_componentWillReceiveProps == "function" && (je = "UNSAFE_componentWillReceiveProps"), typeof ve.componentWillUpdate == "function" && ve.componentWillUpdate.__suppressDeprecationWarning !== !0 ? lt = "componentWillUpdate" : typeof ve.UNSAFE_componentWillUpdate == "function" && (lt = "UNSAFE_componentWillUpdate"), st !== null || je !== null || lt !== null) {
              var tn = Wt(d) || "Component", Je = typeof d.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              ka.has(tn) || (ka.add(
                tn
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                tn,
                Je,
                st !== null ? `
  ` + st : "",
                je !== null ? `
  ` + je : "",
                lt !== null ? `
  ` + lt : ""
              ));
            }
          }
          var yt = Wt(d) || "Component";
          ve.render || (d.prototype && typeof d.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            yt
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            yt
          )), !ve.getInitialState || ve.getInitialState.isReactClassApproved || ve.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            yt
          ), ve.getDefaultProps && !ve.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            yt
          ), ve.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            yt
          ), d.childContextTypes && !Tc.has(d) && (Tc.add(d), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            yt
          )), d.contextTypes && !Sa.has(d) && (Sa.add(d), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            yt
          )), typeof ve.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            yt
          ), d.prototype && d.prototype.isPureReactComponent && typeof ve.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            Wt(d) || "A pure component"
          ), typeof ve.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            yt
          ), typeof ve.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            yt
          ), typeof ve.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            yt
          ), typeof ve.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            yt
          );
          var xt = ve.props !== Fe;
          ve.props !== void 0 && xt && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            yt
          ), ve.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            yt,
            yt
          ), typeof ve.getSnapshotBeforeUpdate != "function" || typeof ve.componentDidUpdate == "function" || Ul.has(d) || (Ul.add(d), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            Wt(d)
          )), typeof ve.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            yt
          ), typeof ve.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            yt
          ), typeof d.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            yt
          );
          var ir = ve.state;
          ir && (typeof ir != "object" || Xt(ir)) && console.error("%s.state: must be set to an object or null", yt), typeof ve.getChildContext == "function" && typeof d.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            yt
          );
          var En = ve.state !== void 0 ? ve.state : null;
          ve.updater = Qc, ve.props = Fe, ve.state = En;
          var In = { queue: [], replace: !1 };
          ve._reactInternals = In;
          var an = d.contextType;
          if (ve.context = typeof an == "object" && an !== null ? an._currentValue2 : Nn, ve.state === Fe) {
            var ci = Wt(d) || "Component";
            Ca.has(
              ci
            ) || (Ca.add(
              ci
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              ci
            ));
          }
          var xr = d.getDerivedStateFromProps;
          if (typeof xr == "function") {
            var Ft = xr(
              Fe,
              En
            );
            if (Ft === void 0) {
              var e = Wt(d) || "Component";
              Yl.has(e) || (Yl.add(e), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                e
              ));
            }
            var n = Ft == null ? En : rn({}, En, Ft);
            ve.state = n;
          }
          if (typeof d.getDerivedStateFromProps != "function" && typeof ve.getSnapshotBeforeUpdate != "function" && (typeof ve.UNSAFE_componentWillMount == "function" || typeof ve.componentWillMount == "function")) {
            var c = ve.state;
            if (typeof ve.componentWillMount == "function") {
              if (ve.componentWillMount.__suppressDeprecationWarning !== !0) {
                var h = Wt(d) || "Unknown";
                $t[h] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  h
                ), $t[h] = !0);
              }
              ve.componentWillMount();
            }
            if (typeof ve.UNSAFE_componentWillMount == "function" && ve.UNSAFE_componentWillMount(), c !== ve.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Wt(d) || "Component"
            ), Qc.enqueueReplaceState(
              ve,
              ve.state,
              null
            )), In.queue !== null && 0 < In.queue.length) {
              var b = In.queue, p = In.replace;
              if (In.queue = null, In.replace = !1, p && b.length === 1)
                ve.state = b[0];
              else {
                for (var _ = p ? b[0] : ve.state, I = !0, re = p ? 1 : 0; re < b.length; re++) {
                  var L = b[re], Te = typeof L == "function" ? L.call(
                    ve,
                    _,
                    Fe,
                    void 0
                  ) : L;
                  Te != null && (I ? (I = !1, _ = rn(
                    {},
                    _,
                    Te
                  )) : rn(_, Te));
                }
                ve.state = _;
              }
            } else In.queue = null;
          }
          var ye = sl(ve);
          if (t.status === 12) throw null;
          ve.props !== Fe && (wu || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            Wt(d) || "a component"
          ), wu = !0);
          var Oe = r.keyPath;
          r.keyPath = u, on(t, r, ye, -1), r.keyPath = Oe;
        } else {
          if (d.prototype && typeof d.prototype.render == "function") {
            var Pe = Wt(d) || "Unknown";
            kc[Pe] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              Pe,
              Pe
            ), kc[Pe] = !0);
          }
          var be = sc(
            t,
            r,
            u,
            d,
            y,
            void 0
          );
          if (t.status === 12) throw null;
          var ht = xn !== 0, Ot = Gl, ut = Ji;
          if (d.contextTypes) {
            var He = Wt(d) || "Unknown";
            ji[He] || (ji[He] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              He
            ));
          }
          if (d && d.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            d.displayName || d.name || "Component"
          ), typeof d.getDerivedStateFromProps == "function") {
            var kn = Wt(d) || "Unknown";
            zc[kn] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              kn
            ), zc[kn] = !0);
          }
          if (typeof d.contextType == "object" && d.contextType !== null) {
            var Ht = Wt(d) || "Unknown";
            Po[Ht] || (console.error(
              "%s: Function components do not support contextType.",
              Ht
            ), Po[Ht] = !0);
          }
          Xr(
            t,
            r,
            u,
            be,
            ht,
            Ot,
            ut
          );
        }
      else if (typeof d == "string") {
        var ct = r.blockedSegment;
        if (ct === null) {
          var gr = y.children, Br = r.formatContext, mn = r.keyPath;
          r.formatContext = N(Br, d, y), r.keyPath = u, Jn(t, r, gr, -1), r.formatContext = Br, r.keyPath = mn;
        } else {
          var Hn = Me(
            ct.chunks,
            d,
            y,
            t.resumableState,
            t.renderState,
            r.blockedPreamble,
            r.hoistableState,
            r.formatContext,
            ct.lastPushedText,
            r.isFallback
          );
          ct.lastPushedText = !1;
          var Vt = r.formatContext, vr = r.keyPath;
          if (r.keyPath = u, (r.formatContext = N(
            Vt,
            d,
            y
          )).insertionMode === tt) {
            var br = Cl(
              t,
              0,
              null,
              r.formatContext,
              !1,
              !1
            );
            ct.preambleChildren.push(br);
            var gt = kl(
              t,
              null,
              Hn,
              -1,
              r.blockedBoundary,
              br,
              r.blockedPreamble,
              r.hoistableState,
              t.abortableTasks,
              r.keyPath,
              r.formatContext,
              r.context,
              r.treeContext,
              r.componentStack,
              r.isFallback,
              Nn,
              r.debugTask
            );
            Sl(gt), t.pingedTasks.push(gt);
          } else Jn(t, r, Hn, -1);
          r.formatContext = Vt, r.keyPath = vr;
          e: {
            var ln = ct.chunks, Bt = t.resumableState;
            switch (d) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break e;
              case "body":
                if (Vt.insertionMode <= Le) {
                  Bt.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if (Vt.insertionMode === ke) {
                  Bt.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if (Vt.insertionMode <= Le) break e;
            }
            ln.push(ot(d));
          }
          ct.lastPushedText = !1;
        }
      } else {
        switch (d) {
          case pi:
          case Vo:
          case Qa:
          case Za:
            var Er = r.keyPath;
            r.keyPath = u, on(t, r, y.children, -1), r.keyPath = Er;
            return;
          case Ka:
            if (y.mode !== "hidden") {
              var kr = r.keyPath;
              r.keyPath = u, on(t, r, y.children, -1), r.keyPath = kr;
            }
            return;
          case Yi:
            var zn = r.keyPath;
            r.keyPath = u, on(t, r, y.children, -1), r.keyPath = zn;
            return;
          case fo:
          case qn:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case Ti:
            e: if (r.replay !== null) {
              var $i = r.keyPath;
              r.keyPath = u;
              var ei = y.children;
              try {
                Jn(t, r, ei, -1);
              } finally {
                r.keyPath = $i;
              }
            } else {
              var ea = r.keyPath, Fo = r.blockedBoundary, ta = r.blockedPreamble, Kl = r.hoistableState, si = r.blockedSegment, Ao = y.fallback, Cr = y.children, Un = /* @__PURE__ */ new Set(), gn = r.formatContext.insertionMode < Ne ? ha(
                t,
                Un,
                $e(),
                $e()
              ) : ha(
                t,
                Un,
                null,
                null
              );
              t.trackedPostpones !== null && (gn.trackedContentKeyPath = u);
              var Wr = Cl(
                t,
                si.chunks.length,
                gn,
                r.formatContext,
                !1,
                !1
              );
              si.children.push(Wr), si.lastPushedText = !1;
              var fi = Cl(
                t,
                0,
                null,
                r.formatContext,
                !1,
                !1
              );
              if (fi.parentFlushed = !0, t.trackedPostpones !== null) {
                var ql = [
                  u[0],
                  "Suspense Fallback",
                  u[2]
                ], hi = [
                  ql[1],
                  ql[2],
                  [],
                  null
                ];
                t.trackedPostpones.workingMap.set(
                  ql,
                  hi
                ), gn.trackedFallbackNode = hi, r.blockedSegment = Wr, r.blockedPreamble = gn.fallbackPreamble, r.keyPath = ql, Wr.status = 6;
                try {
                  Jn(t, r, Ao, -1), zo(
                    Wr.chunks,
                    t.renderState,
                    Wr.lastPushedText,
                    Wr.textEmbedded
                  ), Wr.status = en;
                } catch (ti) {
                  throw Wr.status = t.status === 12 ? 3 : 4, ti;
                } finally {
                  r.blockedSegment = si, r.blockedPreamble = ta, r.keyPath = ea;
                }
                var na = kl(
                  t,
                  null,
                  Cr,
                  -1,
                  gn,
                  fi,
                  gn.contentPreamble,
                  gn.contentState,
                  r.abortSet,
                  u,
                  r.formatContext,
                  r.context,
                  r.treeContext,
                  r.componentStack,
                  r.isFallback,
                  Nn,
                  r.debugTask
                );
                Sl(na), t.pingedTasks.push(na);
              } else {
                r.blockedBoundary = gn, r.blockedPreamble = gn.contentPreamble, r.hoistableState = gn.contentState, r.blockedSegment = fi, r.keyPath = u, fi.status = 6;
                try {
                  if (Jn(t, r, Cr, -1), zo(
                    fi.chunks,
                    t.renderState,
                    fi.lastPushedText,
                    fi.textEmbedded
                  ), fi.status = en, Hi(gn, fi), gn.pendingTasks === 0 && gn.status === $r) {
                    gn.status = en, t.pendingRootTasks === 0 && r.blockedPreamble && Ar(t);
                    break e;
                  }
                } catch (ti) {
                  if (gn.status = dn, t.status === 12) {
                    fi.status = 3;
                    var di = t.fatalError;
                  } else
                    fi.status = 4, di = ti;
                  var ec = da(r.componentStack), Dn = Qn(
                    t,
                    di,
                    ec,
                    r.debugTask
                  );
                  Li(
                    gn,
                    Dn,
                    di,
                    ec,
                    !1
                  ), pr(t, gn);
                } finally {
                  r.blockedBoundary = Fo, r.blockedPreamble = ta, r.hoistableState = Kl, r.blockedSegment = si, r.keyPath = ea;
                }
                var Nr = kl(
                  t,
                  null,
                  Ao,
                  -1,
                  Fo,
                  Wr,
                  gn.fallbackPreamble,
                  gn.fallbackState,
                  Un,
                  [u[0], "Suspense Fallback", u[2]],
                  r.formatContext,
                  r.context,
                  r.treeContext,
                  r.componentStack,
                  !0,
                  Nn,
                  r.debugTask
                );
                Sl(Nr), t.pingedTasks.push(Nr);
              }
            }
            return;
        }
        if (typeof d == "object" && d !== null)
          switch (d.$$typeof) {
            case Va:
              if ("ref" in y) {
                var Aa = {};
                for (var Ma in y)
                  Ma !== "ref" && (Aa[Ma] = y[Ma]);
              } else Aa = y;
              var ra = sc(
                t,
                r,
                u,
                d.render,
                Aa,
                R
              );
              Xr(
                t,
                r,
                u,
                ra,
                xn !== 0,
                Gl,
                Ji
              );
              return;
            case Ko:
              ga(t, r, u, d.type, y, R);
              return;
            case Ol:
            case Ja:
              var jl = y.value, Ai = y.children, hl = r.context, dl = r.keyPath, gl = d._currentValue2;
              d._currentValue2 = jl, d._currentRenderer2 !== void 0 && d._currentRenderer2 !== null && d._currentRenderer2 !== Rr && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), d._currentRenderer2 = Rr;
              var vl = Lt, gi = {
                parent: vl,
                depth: vl === null ? 0 : vl.depth + 1,
                context: d,
                parentValue: gl,
                value: jl
              };
              Lt = gi, r.context = gi, r.keyPath = u, on(t, r, Ai, -1);
              var ia = Lt;
              if (ia === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              ia.context !== d && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), ia.context._currentValue2 = ia.parentValue, d._currentRenderer2 !== void 0 && d._currentRenderer2 !== null && d._currentRenderer2 !== Rr && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), d._currentRenderer2 = Rr;
              var tc = Lt = ia.parent;
              r.context = tc, r.keyPath = dl, hl !== r.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case _l:
              var Mi = d._context, Mo = y.children;
              typeof Mo != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var Oo = Mo(Mi._currentValue2), Cc = r.keyPath;
              r.keyPath = u, on(t, r, Oo, -1), r.keyPath = Cc;
              return;
            case Il:
              var Oa = Jl(d);
              if (t.status === 12) throw null;
              ga(t, r, u, Oa, y, R);
              return;
          }
        var nc = "";
        throw (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (nc += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((d == null ? d : typeof d) + "." + nc)
        );
      }
    }
    function oo(t, r, u, d, y) {
      var R = r.replay, D = r.blockedBoundary, W = Cl(
        t,
        0,
        null,
        r.formatContext,
        !1,
        !1
      );
      W.id = u, W.parentFlushed = !0;
      try {
        r.replay = null, r.blockedSegment = W, Jn(t, r, d, y), W.status = en, D === null ? t.completedRootSegment = W : (Hi(D, W), D.parentFlushed && t.partialBoundaries.push(D));
      } finally {
        r.replay = R, r.blockedSegment = null;
      }
    }
    function Wi(t, r, u, d, y, R, D, W, de, z) {
      R = z.nodes;
      for (var Fe = 0; Fe < R.length; Fe++) {
        var xe = R[Fe];
        if (y === xe[1]) {
          if (xe.length === 4) {
            if (d !== null && d !== xe[0])
              throw Error(
                "Expected the resume to render <" + xe[0] + "> in this slot but instead it rendered <" + d + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var _e = xe[2];
            xe = xe[3], d = r.node, r.replay = { nodes: _e, slots: xe, pendingTasks: 1 };
            try {
              if (ga(t, r, u, D, W, de), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (Je) {
              if (typeof Je == "object" && Je !== null && (Je === Qi || typeof Je.then == "function"))
                throw r.node === d && (r.replay = z), Je;
              r.replay.pendingTasks--, D = da(r.componentStack), W = t, t = r.blockedBoundary, u = Je, de = xe, xe = Qn(W, u, D, r.debugTask), kt(
                W,
                t,
                _e,
                de,
                u,
                xe,
                D,
                !1
              );
            }
            r.replay = z;
          } else {
            if (D !== Ti)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Wt(D) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              z = void 0, D = xe[5], de = xe[2], d = xe[3], y = xe[4] === null ? [] : xe[4][2], xe = xe[4] === null ? null : xe[4][3];
              var De = r.keyPath, ve = r.replay, qe = r.blockedBoundary, st = r.hoistableState, je = W.children, lt = W.fallback, tn = /* @__PURE__ */ new Set();
              W = r.formatContext.insertionMode < Ne ? ha(
                t,
                tn,
                $e(),
                $e()
              ) : ha(
                t,
                tn,
                null,
                null
              ), W.parentFlushed = !0, W.rootSegmentID = D, r.blockedBoundary = W, r.hoistableState = W.contentState, r.keyPath = u, r.replay = { nodes: de, slots: d, pendingTasks: 1 };
              try {
                if (Jn(t, r, je, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (r.replay.pendingTasks--, W.pendingTasks === 0 && W.status === $r) {
                  W.status = en, t.completedBoundaries.push(W);
                  break e;
                }
              } catch (Je) {
                W.status = dn, _e = da(r.componentStack), z = Qn(
                  t,
                  Je,
                  _e,
                  r.debugTask
                ), Li(W, z, Je, _e, !1), r.replay.pendingTasks--, t.clientRenderedBoundaries.push(W);
              } finally {
                r.blockedBoundary = qe, r.hoistableState = st, r.replay = ve, r.keyPath = De;
              }
              W = Yo(
                t,
                null,
                { nodes: y, slots: xe, pendingTasks: 0 },
                lt,
                -1,
                qe,
                W.fallbackState,
                tn,
                [u[0], "Suspense Fallback", u[2]],
                r.formatContext,
                r.context,
                r.treeContext,
                r.componentStack,
                !0,
                Nn,
                r.debugTask
              ), Sl(W), t.pingedTasks.push(W);
            }
          }
          R.splice(Fe, 1);
          break;
        }
      }
    }
    function on(t, r, u, d) {
      r.replay !== null && typeof r.replay.slots == "number" ? oo(t, r, r.replay.slots, u, d) : (r.node = u, r.childIndex = d, u = r.componentStack, d = r.debugTask, Sl(r), Ua(t, r), r.componentStack = u, r.debugTask = d);
    }
    function Ua(t, r) {
      var u = r.node, d = r.childIndex;
      if (u !== null) {
        if (typeof u == "object") {
          switch (u.$$typeof) {
            case Xa:
              var y = u.type, R = u.key;
              u = u.props;
              var D = u.ref;
              D = D !== void 0 ? D : null;
              var W = r.debugTask, de = Wt(y);
              R = R ?? (d === -1 ? 0 : d);
              var z = [r.keyPath, de, R];
              r.replay !== null ? W ? W.run(
                Wi.bind(
                  null,
                  t,
                  r,
                  z,
                  de,
                  R,
                  d,
                  y,
                  u,
                  D,
                  r.replay
                )
              ) : Wi(
                t,
                r,
                z,
                de,
                R,
                d,
                y,
                u,
                D,
                r.replay
              ) : W ? W.run(
                ga.bind(
                  null,
                  t,
                  r,
                  z,
                  y,
                  u,
                  D
                )
              ) : ga(t, r, z, y, u, D);
              return;
            case Ml:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case Il:
              if (u = Jl(u), t.status === 12) throw null;
              on(t, r, u, d);
              return;
          }
          if (Xt(u)) {
            Tr(t, r, u, d);
            return;
          }
          if (u === null || typeof u != "object" ? R = null : (y = Ri && u[Ri] || u["@@iterator"], R = typeof y == "function" ? y : null), R && (y = R.call(u))) {
            if (y === u ? (d !== -1 || r.componentStack === null || typeof r.componentStack.type != "function" || Object.prototype.toString.call(r.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(y) !== "[object Generator]") && ($u || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), $u = !0) : u.entries !== R || Tu || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Tu = !0), u = y.next(), !u.done) {
              R = [];
              do
                R.push(u.value), u = y.next();
              while (!u.done);
              Tr(t, r, R, d);
            }
            return;
          }
          if (typeof u.then == "function")
            return r.thenableState = null, on(
              t,
              r,
              ao(u),
              d
            );
          if (u.$$typeof === Ja)
            return on(
              t,
              r,
              u._currentValue2,
              d
            );
          throw t = Object.prototype.toString.call(u), Error(
            "Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof u == "string" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = _u(
          r.chunks,
          u,
          t.renderState,
          r.lastPushedText
        ))) : typeof u == "number" || typeof u == "bigint" ? (r = r.blockedSegment, r !== null && (r.lastPushedText = _u(
          r.chunks,
          "" + u,
          t.renderState,
          r.lastPushedText
        ))) : (typeof u == "function" && (t = u.displayName || u.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          t,
          t
        )), typeof u == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(u)
        ));
      }
    }
    function Tr(t, r, u, d) {
      var y = r.keyPath, R = r.componentStack, D = r.debugTask;
      if (za(r, r.node._debugInfo), d !== -1 && (r.keyPath = [r.keyPath, "Fragment", d], r.replay !== null)) {
        for (var W = r.replay, de = W.nodes, z = 0; z < de.length; z++) {
          var Fe = de[z];
          if (Fe[1] === d) {
            d = Fe[2], Fe = Fe[3], r.replay = { nodes: d, slots: Fe, pendingTasks: 1 };
            try {
              if (Tr(t, r, u, -1), r.replay.pendingTasks === 1 && 0 < r.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              r.replay.pendingTasks--;
            } catch (je) {
              if (typeof je == "object" && je !== null && (je === Qi || typeof je.then == "function"))
                throw je;
              r.replay.pendingTasks--;
              var xe = da(r.componentStack);
              u = r.blockedBoundary;
              var _e = je, De = Fe;
              Fe = Qn(
                t,
                _e,
                xe,
                r.debugTask
              ), kt(
                t,
                u,
                d,
                De,
                _e,
                Fe,
                xe,
                !1
              );
            }
            r.replay = W, de.splice(z, 1);
            break;
          }
        }
        r.keyPath = y, r.componentStack = R, r.debugTask = D;
        return;
      }
      if (W = r.treeContext, de = u.length, r.replay !== null && (z = r.replay.slots, z !== null && typeof z == "object")) {
        for (d = 0; d < de; d++)
          Fe = u[d], r.treeContext = Ba(
            W,
            de,
            d
          ), _e = z[d], typeof _e == "number" ? (oo(t, r, _e, Fe, d), delete z[d]) : Jn(t, r, Fe, d);
        r.treeContext = W, r.keyPath = y, r.componentStack = R, r.debugTask = D;
        return;
      }
      for (z = 0; z < de; z++) {
        if (d = u[z], De = t, Fe = r, _e = d, _e !== null && typeof _e == "object" && (_e.$$typeof === Xa || _e.$$typeof === Ml) && _e._store && (!_e._store.validated && _e.key == null || _e._store.validated === 2)) {
          if (typeof _e._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          if (_e._store.validated = 1, xe = De.didWarnForKey, xe == null && (xe = De.didWarnForKey = /* @__PURE__ */ new WeakSet()), De = Fe.componentStack, De !== null && !xe.has(De)) {
            xe.add(De);
            var ve = Wt(_e.type);
            xe = _e._owner;
            var qe = De.owner;
            if (De = "", qe && typeof qe.type < "u") {
              var st = Wt(qe.type);
              st && (De = `

Check the render method of \`` + st + "`.");
            }
            De || ve && (De = `

Check the top-level render call using <` + ve + ">."), ve = "", xe != null && qe !== xe && (qe = null, typeof xe.type < "u" ? qe = Wt(xe.type) : typeof xe.name == "string" && (qe = xe.name), qe && (ve = " It was passed a child from " + qe + ".")), xe = Fe.componentStack, Fe.componentStack = {
              parent: Fe.componentStack,
              type: _e.type,
              owner: _e._owner,
              stack: _e._debugStack
            }, console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              De,
              ve
            ), Fe.componentStack = xe;
          }
        }
        r.treeContext = Ba(W, de, z), Jn(t, r, d, z);
      }
      r.treeContext = W, r.keyPath = y, r.componentStack = R, r.debugTask = D;
    }
    function pr(t, r) {
      t = t.trackedPostpones, t !== null && (r = r.trackedContentKeyPath, r !== null && (r = t.workingMap.get(r), r !== void 0 && (r.length = 4, r[2] = [], r[3] = null)));
    }
    function Go(t, r, u) {
      return Yo(
        t,
        u,
        r.replay,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.componentStack,
        r.isFallback,
        Nn,
        r.debugTask
      );
    }
    function Xo(t, r, u) {
      var d = r.blockedSegment, y = Cl(
        t,
        d.chunks.length,
        null,
        r.formatContext,
        d.lastPushedText,
        !0
      );
      return d.children.push(y), d.lastPushedText = !1, kl(
        t,
        u,
        r.node,
        r.childIndex,
        r.blockedBoundary,
        y,
        r.blockedPreamble,
        r.hoistableState,
        r.abortSet,
        r.keyPath,
        r.formatContext,
        r.context,
        r.treeContext,
        r.componentStack,
        r.isFallback,
        Nn,
        r.debugTask
      );
    }
    function Jn(t, r, u, d) {
      var y = r.formatContext, R = r.context, D = r.keyPath, W = r.treeContext, de = r.componentStack, z = r.debugTask, Fe = r.blockedSegment;
      if (Fe === null)
        try {
          return on(t, r, u, d);
        } catch (De) {
          if (Ii(), u = De === Qi ? io() : De, typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              d = xl(), t = Go(
                t,
                r,
                d
              ).ping, u.then(t, t), r.formatContext = y, r.context = R, r.keyPath = D, r.treeContext = W, r.componentStack = de, r.debugTask = z, Ur(R);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              u = xl(), u = Go(t, r, u), t.pingedTasks.push(u), r.formatContext = y, r.context = R, r.keyPath = D, r.treeContext = W, r.componentStack = de, r.debugTask = z, Ur(R);
              return;
            }
          }
        }
      else {
        var xe = Fe.children.length, _e = Fe.chunks.length;
        try {
          return on(t, r, u, d);
        } catch (De) {
          if (Ii(), Fe.children.length = xe, Fe.chunks.length = _e, u = De === Qi ? io() : De, typeof u == "object" && u !== null) {
            if (typeof u.then == "function") {
              d = xl(), t = Xo(
                t,
                r,
                d
              ).ping, u.then(t, t), r.formatContext = y, r.context = R, r.keyPath = D, r.treeContext = W, r.componentStack = de, r.debugTask = z, Ur(R);
              return;
            }
            if (u.message === "Maximum call stack size exceeded") {
              u = xl(), u = Xo(t, r, u), t.pingedTasks.push(u), r.formatContext = y, r.context = R, r.keyPath = D, r.treeContext = W, r.componentStack = de, r.debugTask = z, Ur(R);
              return;
            }
          }
        }
      }
      throw r.formatContext = y, r.context = R, r.keyPath = D, r.treeContext = W, Ur(R), u;
    }
    function uo(t) {
      var r = t.blockedBoundary;
      t = t.blockedSegment, t !== null && (t.status = 3, Pl(this, r, t));
    }
    function kt(t, r, u, d, y, R, D, W) {
      for (var de = 0; de < u.length; de++) {
        var z = u[de];
        if (z.length === 4)
          kt(
            t,
            r,
            z[2],
            z[3],
            y,
            R,
            D,
            W
          );
        else {
          var Fe = t;
          z = z[5];
          var xe = y, _e = R, De = D, ve = W, qe = ha(
            Fe,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          qe.parentFlushed = !0, qe.rootSegmentID = z, qe.status = dn, Li(
            qe,
            _e,
            xe,
            De,
            ve
          ), qe.parentFlushed && Fe.clientRenderedBoundaries.push(qe);
        }
      }
      if (u.length = 0, d !== null) {
        if (r === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (r.status !== dn && (r.status = dn, Li(
          r,
          R,
          y,
          D,
          W
        ), r.parentFlushed && t.clientRenderedBoundaries.push(r)), typeof d == "object")
          for (var st in d) delete d[st];
      }
    }
    function Vn(t, r, u) {
      var d = t.blockedBoundary, y = t.blockedSegment;
      if (y !== null) {
        if (y.status === 6) return;
        y.status = 3;
      }
      if (y = da(t.componentStack), d === null) {
        if (r.status !== 13 && r.status !== fl) {
          if (d = t.replay, d === null) {
            Qn(r, u, y, null), Bi(r, u, y, null);
            return;
          }
          d.pendingTasks--, d.pendingTasks === 0 && 0 < d.nodes.length && (t = Qn(r, u, y, null), kt(
            r,
            null,
            d.nodes,
            d.slots,
            u,
            t,
            y,
            !0
          )), r.pendingRootTasks--, r.pendingRootTasks === 0 && va(r);
        }
      } else
        d.pendingTasks--, d.status !== dn && (d.status = dn, t = Qn(r, u, y, null), d.status = dn, Li(d, t, u, y, !0), pr(r, d), d.parentFlushed && r.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(R) {
          return Vn(R, r, u);
        }), d.fallbackAbortableTasks.clear();
      r.allPendingTasks--, r.allPendingTasks === 0 && Ni(r);
    }
    function Ya(t, r) {
      try {
        var u = t.renderState, d = u.onHeaders;
        if (d) {
          var y = u.headers;
          if (y) {
            u.headers = null;
            var R = y.preconnects;
            if (y.fontPreloads && (R && (R += ", "), R += y.fontPreloads), y.highImagePreloads && (R && (R += ", "), R += y.highImagePreloads), !r) {
              var D = u.styles.values(), W = D.next();
              e: for (; 0 < y.remainingCapacity && !W.done; W = D.next())
                for (var de = W.value.sheets.values(), z = de.next(); 0 < y.remainingCapacity && !z.done; z = de.next()) {
                  var Fe = z.value, xe = Fe.props, _e = xe.href, De = Fe.props, ve = Tl(
                    De.href,
                    "style",
                    {
                      crossOrigin: De.crossOrigin,
                      integrity: De.integrity,
                      nonce: De.nonce,
                      type: De.type,
                      fetchPriority: De.fetchPriority,
                      referrerPolicy: De.referrerPolicy,
                      media: De.media
                    }
                  );
                  if (0 <= (y.remainingCapacity -= ve.length + 2))
                    u.resets.style[_e] = ne, R && (R += ", "), R += ve, u.resets.style[_e] = typeof xe.crossOrigin == "string" || typeof xe.integrity == "string" ? [xe.crossOrigin, xe.integrity] : ne;
                  else break e;
                }
            }
            d(R ? { Link: R } : {});
          }
        }
      } catch (qe) {
        Qn(t, qe, {}, null);
      }
    }
    function va(t) {
      t.trackedPostpones === null && Ya(t, !0), t.trackedPostpones === null && Ar(t), t.onShellError = or, t = t.onShellReady, t();
    }
    function Ni(t) {
      Ya(
        t,
        t.trackedPostpones === null ? !0 : t.completedRootSegment === null || t.completedRootSegment.status !== yu
      ), Ar(t), t = t.onAllReady, t();
    }
    function Hi(t, r) {
      if (r.chunks.length === 0 && r.children.length === 1 && r.children[0].boundary === null && r.children[0].id === -1) {
        var u = r.children[0];
        u.id = r.id, u.parentFlushed = !0, u.status === en && Hi(t, u);
      } else t.completedSegments.push(r);
    }
    function Pl(t, r, u) {
      if (r === null) {
        if (u !== null && u.parentFlushed) {
          if (t.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          t.completedRootSegment = u;
        }
        t.pendingRootTasks--, t.pendingRootTasks === 0 && va(t);
      } else
        r.pendingTasks--, r.status !== dn && (r.pendingTasks === 0 ? (r.status === $r && (r.status = en), u !== null && u.parentFlushed && u.status === en && Hi(r, u), r.parentFlushed && t.completedBoundaries.push(r), r.status === en && (r.fallbackAbortableTasks.forEach(
          uo,
          t
        ), r.fallbackAbortableTasks.clear(), t.pendingRootTasks === 0 && t.trackedPostpones === null && r.contentPreamble !== null && Ar(t))) : u !== null && u.parentFlushed && u.status === en && (Hi(r, u), r.completedSegments.length === 1 && r.parentFlushed && t.partialBoundaries.push(r)));
      t.allPendingTasks--, t.allPendingTasks === 0 && Ni(t);
    }
    function Kn(t) {
      if (t.status !== fl && t.status !== 13) {
        var r = Lt, u = sr.H;
        sr.H = hu;
        var d = sr.A;
        sr.A = Wc;
        var y = Ut;
        Ut = t;
        var R = sr.getCurrentStack;
        sr.getCurrentStack = Gr;
        var D = Vi;
        Vi = t.resumableState;
        try {
          var W = t.pingedTasks, de;
          for (de = 0; de < W.length; de++) {
            var z = t, Fe = W[de], xe = Fe.blockedSegment;
            if (xe === null) {
              var _e = void 0, De = z;
              if (z = Fe, z.replay.pendingTasks !== 0) {
                Ur(z.context), _e = ui, ui = z;
                try {
                  if (typeof z.replay.slots == "number" ? oo(
                    De,
                    z,
                    z.replay.slots,
                    z.node,
                    z.childIndex
                  ) : Ua(De, z), z.replay.pendingTasks === 1 && 0 < z.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  z.replay.pendingTasks--, z.abortSet.delete(z), Pl(De, z.blockedBoundary, null);
                } catch (n) {
                  Ii();
                  var ve = n === Qi ? io() : n;
                  if (typeof ve == "object" && ve !== null && typeof ve.then == "function") {
                    var qe = z.ping;
                    ve.then(qe, qe), z.thenableState = xl();
                  } else {
                    z.replay.pendingTasks--, z.abortSet.delete(z);
                    var st = da(z.componentStack), je = void 0, lt = De, tn = z.blockedBoundary, Je = De.status === 12 ? De.fatalError : ve, yt = st, xt = z.replay.nodes, ir = z.replay.slots;
                    je = Qn(
                      lt,
                      Je,
                      yt,
                      z.debugTask
                    ), kt(
                      lt,
                      tn,
                      xt,
                      ir,
                      Je,
                      je,
                      yt,
                      !1
                    ), De.pendingRootTasks--, De.pendingRootTasks === 0 && va(De), De.allPendingTasks--, De.allPendingTasks === 0 && Ni(De);
                  }
                } finally {
                  ui = _e;
                }
              }
            } else if (De = _e = void 0, je = Fe, lt = xe, lt.status === $r) {
              lt.status = 6, Ur(je.context), De = ui, ui = je;
              var En = lt.children.length, In = lt.chunks.length;
              try {
                Ua(z, je), zo(
                  lt.chunks,
                  z.renderState,
                  lt.lastPushedText,
                  lt.textEmbedded
                ), je.abortSet.delete(je), lt.status = en, Pl(
                  z,
                  je.blockedBoundary,
                  lt
                );
              } catch (n) {
                Ii(), lt.children.length = En, lt.chunks.length = In;
                var an = n === Qi ? io() : z.status === 12 ? z.fatalError : n;
                if (typeof an == "object" && an !== null && typeof an.then == "function") {
                  lt.status = $r, je.thenableState = xl();
                  var ci = je.ping;
                  an.then(ci, ci);
                } else {
                  var xr = da(
                    je.componentStack
                  );
                  je.abortSet.delete(je), lt.status = 4;
                  var Ft = je.blockedBoundary, e = je.debugTask;
                  _e = Qn(
                    z,
                    an,
                    xr,
                    e
                  ), Ft === null ? Bi(
                    z,
                    an,
                    xr,
                    e
                  ) : (Ft.pendingTasks--, Ft.status !== dn && (Ft.status = dn, Li(
                    Ft,
                    _e,
                    an,
                    xr,
                    !1
                  ), pr(z, Ft), Ft.parentFlushed && z.clientRenderedBoundaries.push(
                    Ft
                  ), z.pendingRootTasks === 0 && z.trackedPostpones === null && Ft.contentPreamble !== null && Ar(z))), z.allPendingTasks--, z.allPendingTasks === 0 && Ni(z);
                }
              } finally {
                ui = De;
              }
            }
          }
          W.splice(0, de), t.destination !== null && Al(
            t,
            t.destination
          );
        } catch (n) {
          W = {}, Qn(t, n, W, null), Bi(t, n, W, null);
        } finally {
          Vi = D, sr.H = u, sr.A = d, sr.getCurrentStack = R, u === hu && Ur(r), Ut = y;
        }
      }
    }
    function zi(t, r, u) {
      r.preambleChildren.length && u.push(r.preambleChildren);
      for (var d = !1, y = 0; y < r.children.length; y++)
        d = ba(
          t,
          r.children[y],
          u
        ) || d;
      return d;
    }
    function ba(t, r, u) {
      var d = r.boundary;
      if (d === null)
        return zi(
          t,
          r,
          u
        );
      var y = d.contentPreamble, R = d.fallbackPreamble;
      if (y === null || R === null) return !1;
      switch (d.status) {
        case en:
          if (ua(t.renderState, y), r = d.completedSegments[0], !r)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return zi(
            t,
            r,
            u
          );
        case yu:
          if (t.trackedPostpones !== null) return !0;
        case dn:
          if (r.status === en)
            return ua(t.renderState, R), zi(
              t,
              r,
              u
            );
        default:
          return !0;
      }
    }
    function Ar(t) {
      if (t.completedRootSegment && t.completedPreambleSegments === null) {
        var r = [], u = ba(
          t,
          t.completedRootSegment,
          r
        ), d = t.renderState.preamble;
        (u === !1 || d.headChunks && d.bodyChunks) && (t.completedPreambleSegments = r);
      }
    }
    function Fl(t, r, u, d) {
      switch (u.parentFlushed = !0, u.status) {
        case $r:
          u.id = t.nextSegmentId++;
        case yu:
          return d = u.id, u.lastPushedText = !1, u.textEmbedded = !1, t = t.renderState, r.push(ml), r.push(t.placeholderPrefix), t = d.toString(16), r.push(t), r.push(bc);
        case en:
          u.status = Vl;
          var y = !0, R = u.chunks, D = 0;
          u = u.children;
          for (var W = 0; W < u.length; W++) {
            for (y = u[W]; D < y.index; D++)
              r.push(R[D]);
            y = ya(t, r, y, d);
          }
          for (; D < R.length - 1; D++)
            r.push(R[D]);
          return D < R.length && (y = r.push(R[D])), y;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function ya(t, r, u, d) {
      var y = u.boundary;
      if (y === null)
        return Fl(t, r, u, d);
      if (y.parentFlushed = !0, y.status === dn) {
        if (!t.renderState.generateStaticMarkup) {
          var R = y.errorDigest, D = y.errorMessage, W = y.errorStack, de = y.errorComponentStack;
          r.push(nu), r.push(el), R && (r.push(li), R = j(R), r.push(R), r.push(
            jt
          )), D && (r.push(yo), D = j(D), r.push(D), r.push(
            jt
          )), W && (r.push(Pi), W = j(W), r.push(W), r.push(
            jt
          )), de && (r.push(wo), de = j(de), r.push(de), r.push(
            jt
          )), r.push(Dl);
        }
        return Fl(t, r, u, d), t.renderState.generateStaticMarkup ? r = !0 : ((t = y.fallbackPreamble) && yr(r, t), r = r.push(Si)), r;
      }
      if (y.status !== en)
        return y.status === $r && (y.rootSegmentID = t.nextSegmentId++), 0 < y.completedSegments.length && t.partialBoundaries.push(y), Yt(
          r,
          t.renderState,
          y.rootSegmentID
        ), d && (y = y.fallbackState, y.styles.forEach(bi, d), y.stylesheets.forEach(
          Ou,
          d
        )), Fl(t, r, u, d), r.push(Si);
      if (y.byteSize > t.progressiveChunkSize)
        return y.rootSegmentID = t.nextSegmentId++, t.completedBoundaries.push(y), Yt(
          r,
          t.renderState,
          y.rootSegmentID
        ), Fl(t, r, u, d), r.push(Si);
      if (d && (u = y.contentState, u.styles.forEach(bi, d), u.stylesheets.forEach(Ou, d)), t.renderState.generateStaticMarkup || r.push(On), u = y.completedSegments, u.length !== 1)
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      return ya(t, r, u[0], d), t.renderState.generateStaticMarkup ? r = !0 : ((t = y.contentPreamble) && yr(r, t), r = r.push(Si)), r;
    }
    function wi(t, r, u, d) {
      return ca(
        r,
        t.renderState,
        u.parentFormatContext,
        u.id
      ), ya(t, r, u, d), Ia(r, u.parentFormatContext);
    }
    function Ui(t, r, u) {
      for (var d = u.completedSegments, y = 0; y < d.length; y++)
        Zo(
          t,
          r,
          u,
          d[y]
        );
      d.length = 0, wr(
        r,
        u.contentState,
        t.renderState
      ), d = t.resumableState, t = t.renderState, y = u.rootSegmentID, u = u.contentState;
      var R = t.stylesToHoist;
      return t.stylesToHoist = !1, r.push(t.startInlineScript), R ? (d.instructions & g) === o ? (d.instructions = d.instructions | x | g, r.push(uu)) : (d.instructions & x) === o ? (d.instructions |= x, r.push(Gu)) : r.push(Xu) : (d.instructions & g) === o ? (d.instructions |= g, r.push(ou)) : r.push(il), d = y.toString(16), r.push(t.boundaryPrefix), r.push(d), r.push(cu), r.push(t.segmentPrefix), r.push(d), R ? (r.push(Fi), Mu(r, u)) : r.push(Ea), u = r.push(Ro), nn(r, t) && u;
    }
    function Zo(t, r, u, d) {
      if (d.status === Vl) return !0;
      var y = u.contentState, R = d.id;
      if (R === -1) {
        if ((d.id = u.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return wi(
          t,
          r,
          d,
          y
        );
      }
      return R === u.rootSegmentID ? wi(
        t,
        r,
        d,
        y
      ) : (wi(t, r, d, y), u = t.resumableState, t = t.renderState, r.push(t.startInlineScript), (u.instructions & f) === o ? (u.instructions |= f, r.push(Zi)) : r.push(wc), r.push(t.segmentPrefix), R = R.toString(16), r.push(R), r.push(xa), r.push(t.placeholderPrefix), r.push(R), r = r.push(po), r);
    }
    function Al(t, r) {
      try {
        if (!(0 < t.pendingRootTasks)) {
          var u, d = t.completedRootSegment;
          if (d !== null) {
            if (d.status === yu) return;
            var y = t.completedPreambleSegments;
            if (y === null) return;
            var R = t.renderState, D = R.preamble, W = D.htmlChunks, de = D.headChunks, z;
            if (W) {
              for (z = 0; z < W.length; z++)
                r.push(W[z]);
              if (de)
                for (z = 0; z < de.length; z++)
                  r.push(de[z]);
              else {
                var Fe = me("head");
                r.push(Fe), r.push(mt);
              }
            } else if (de)
              for (z = 0; z < de.length; z++)
                r.push(de[z]);
            var xe = R.charsetChunks;
            for (z = 0; z < xe.length; z++)
              r.push(xe[z]);
            xe.length = 0, R.preconnects.forEach(Sn, r), R.preconnects.clear();
            var _e = R.viewportChunks;
            for (z = 0; z < _e.length; z++)
              r.push(_e[z]);
            _e.length = 0, R.fontPreloads.forEach(Sn, r), R.fontPreloads.clear(), R.highImagePreloads.forEach(Sn, r), R.highImagePreloads.clear(), R.styles.forEach(Fu, r);
            var De = R.importMapChunks;
            for (z = 0; z < De.length; z++)
              r.push(De[z]);
            De.length = 0, R.bootstrapScripts.forEach(Sn, r), R.scripts.forEach(Sn, r), R.scripts.clear(), R.bulkPreloads.forEach(Sn, r), R.bulkPreloads.clear();
            var ve = R.hoistableChunks;
            for (z = 0; z < ve.length; z++)
              r.push(ve[z]);
            for (R = ve.length = 0; R < y.length; R++) {
              var qe = y[R];
              for (D = 0; D < qe.length; D++)
                ya(t, r, qe[D], null);
            }
            var st = t.renderState.preamble, je = st.headChunks;
            if (st.htmlChunks || je) {
              var lt = ot("head");
              r.push(lt);
            }
            var tn = st.bodyChunks;
            if (tn)
              for (y = 0; y < tn.length; y++)
                r.push(tn[y]);
            ya(t, r, d, null), t.completedRootSegment = null, nn(r, t.renderState);
          }
          var Je = t.renderState;
          d = 0;
          var yt = Je.viewportChunks;
          for (d = 0; d < yt.length; d++)
            r.push(yt[d]);
          yt.length = 0, Je.preconnects.forEach(Sn, r), Je.preconnects.clear(), Je.fontPreloads.forEach(Sn, r), Je.fontPreloads.clear(), Je.highImagePreloads.forEach(
            Sn,
            r
          ), Je.highImagePreloads.clear(), Je.styles.forEach(wl, r), Je.scripts.forEach(Sn, r), Je.scripts.clear(), Je.bulkPreloads.forEach(Sn, r), Je.bulkPreloads.clear();
          var xt = Je.hoistableChunks;
          for (d = 0; d < xt.length; d++)
            r.push(xt[d]);
          xt.length = 0;
          var ir = t.clientRenderedBoundaries;
          for (u = 0; u < ir.length; u++) {
            var En = ir[u];
            Je = r;
            var In = t.resumableState, an = t.renderState, ci = En.rootSegmentID, xr = En.errorDigest, Ft = En.errorMessage, e = En.errorStack, n = En.errorComponentStack;
            Je.push(an.startInlineScript), (In.instructions & T) === o ? (In.instructions |= T, Je.push(Nl)) : Je.push(su), Je.push(an.boundaryPrefix);
            var c = ci.toString(16);
            if (Je.push(c), Je.push(xo), xr || Ft || e || n) {
              Je.push(al);
              var h = Cn(
                xr || ""
              );
              Je.push(h);
            }
            if (Ft || e || n) {
              Je.push(al);
              var b = Cn(
                Ft || ""
              );
              Je.push(b);
            }
            if (e || n) {
              Je.push(al);
              var p = Cn(
                e || ""
              );
              Je.push(p);
            }
            if (n) {
              Je.push(al);
              var _ = Cn(n);
              Je.push(_);
            }
            var I = Je.push(
              ll
            );
            if (!I) {
              t.destination = null, u++, ir.splice(0, u);
              return;
            }
          }
          ir.splice(0, u);
          var re = t.completedBoundaries;
          for (u = 0; u < re.length; u++)
            if (!Ui(
              t,
              r,
              re[u]
            )) {
              t.destination = null, u++, re.splice(0, u);
              return;
            }
          re.splice(0, u);
          var L = t.partialBoundaries;
          for (u = 0; u < L.length; u++) {
            e: {
              ir = t, En = r;
              var Te = L[u], ye = Te.completedSegments;
              for (I = 0; I < ye.length; I++)
                if (!Zo(
                  ir,
                  En,
                  Te,
                  ye[I]
                )) {
                  I++, ye.splice(0, I);
                  var Oe = !1;
                  break e;
                }
              ye.splice(0, I), Oe = wr(
                En,
                Te.contentState,
                ir.renderState
              );
            }
            if (!Oe) {
              t.destination = null, u++, L.splice(0, u);
              return;
            }
          }
          L.splice(0, u);
          var Pe = t.completedBoundaries;
          for (u = 0; u < Pe.length; u++)
            if (!Ui(t, r, Pe[u])) {
              t.destination = null, u++, Pe.splice(0, u);
              return;
            }
          Pe.splice(0, u);
        }
      } finally {
        t.allPendingTasks === 0 && t.pingedTasks.length === 0 && t.clientRenderedBoundaries.length === 0 && t.completedBoundaries.length === 0 && (t.flushScheduled = !1, u = t.resumableState, u.hasBody && (L = ot("body"), r.push(L)), u.hasHtml && (u = ot("html"), r.push(u)), t.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), t.status = fl, r.push(null), t.destination = null);
      }
    }
    function Du(t) {
      t.flushScheduled = t.destination !== null, Kn(t), t.status === 10 && (t.status = 11), t.trackedPostpones === null && Ya(t, t.pendingRootTasks === 0);
    }
    function Ga(t) {
      if (t.flushScheduled === !1 && t.pingedTasks.length === 0 && t.destination !== null) {
        t.flushScheduled = !0;
        var r = t.destination;
        r ? Al(t, r) : t.flushScheduled = !1;
      }
    }
    function Qo(t, r) {
      if (t.status === 13)
        t.status = fl, r.destroy(t.fatalError);
      else if (t.status !== fl && t.destination === null) {
        t.destination = r;
        try {
          Al(t, r);
        } catch (u) {
          r = {}, Qn(t, u, r, null), Bi(t, u, r, null);
        }
      }
    }
    function Lu(t, r) {
      (t.status === 11 || t.status === 10) && (t.status = 12);
      try {
        var u = t.abortableTasks;
        if (0 < u.size) {
          var d = r === void 0 ? Error("The render was aborted by the server without a reason.") : typeof r == "object" && r !== null && typeof r.then == "function" ? Error("The render was aborted by the server with a promise.") : r;
          t.fatalError = d, u.forEach(function(y) {
            return Vn(y, t, d);
          }), u.clear();
        }
        t.destination !== null && Al(t, t.destination);
      } catch (y) {
        r = {}, Qn(t, y, r, null), Bi(t, y, r, null);
      }
    }
    function co() {
    }
    function Jo(t, r, u, d) {
      var y = !1, R = null, D = "", W = !1;
      if (r = it(
        r ? r.identifierPrefix : void 0
      ), t = Ha(
        t,
        r,
        lc(r, u),
        _t(ke, null, 0),
        1 / 0,
        co,
        void 0,
        function() {
          W = !0;
        },
        void 0,
        void 0,
        void 0
      ), Du(t), Lu(t, d), Qo(t, {
        push: function(de) {
          return de !== null && (D += de), !0;
        },
        destroy: function(de) {
          y = !0, R = de;
        }
      }), y && R !== d) throw R;
      if (!W)
        throw Error(
          "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
        );
      return D;
    }
    var fc = As, so = Ms, Xa = Symbol.for("react.transitional.element"), Ml = Symbol.for("react.portal"), Za = Symbol.for("react.fragment"), Vo = Symbol.for("react.strict_mode"), Qa = Symbol.for("react.profiler"), Ol = Symbol.for("react.provider"), _l = Symbol.for("react.consumer"), Ja = Symbol.for("react.context"), Va = Symbol.for("react.forward_ref"), Ti = Symbol.for("react.suspense"), Yi = Symbol.for("react.suspense_list"), Ko = Symbol.for("react.memo"), Il = Symbol.for("react.lazy"), qn = Symbol.for("react.scope"), Ka = Symbol.for("react.activity"), pi = Symbol.for("react.legacy_hidden"), qa = Symbol.for("react.memo_cache_sentinel"), fo = Symbol.for("react.view_transition"), Ri = Symbol.iterator, Xt = Array.isArray, wn = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), ja = Symbol.for("react.client.reference"), rn = Object.assign, Pt = Object.prototype.hasOwnProperty, Bu = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), qo = {}, Fn = {}, Wu = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Nu = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), ho = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, jo = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Gi = {}, Zr = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ic = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Wn = !1, ur = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, cr = {}, Kt = /^on./, Ct = /^on[^A-Z]/, $o = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hu = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), hc = /^(?:webkit|moz|o)[A-Z]/, dc = /^-ms-/, go = /-(.)/g, wa = /;\s*$/, ri = {}, Or = {}, vo = !1, eu = !1, zu = /["'&<>]/, bo = /([A-Z])/g, An = /^ms-/, Xc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, sr = fc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, gc = so.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $a = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), a = gc.d;
    gc.d = {
      f: a.f,
      r: a.r,
      D: function(t) {
        var r = Ut || null;
        if (r) {
          var u = r.resumableState, d = r.renderState;
          if (typeof t == "string" && t) {
            if (!u.dnsResources.hasOwnProperty(t)) {
              u.dnsResources[t] = A, u = d.headers;
              var y, R;
              (R = u && 0 < u.remainingCapacity) && (R = (y = "<" + wt(t) + ">; rel=dns-prefetch", 0 <= (u.remainingCapacity -= y.length + 2))), R ? (d.resets.dns[t] = A, u.preconnects && (u.preconnects += ", "), u.preconnects += y) : (y = [], Qe(y, { href: t, rel: "dns-prefetch" }), d.preconnects.add(y));
            }
            Ga(r);
          }
        } else a.D(t);
      },
      C: function(t, r) {
        var u = Ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (typeof t == "string" && t) {
            var R = r === "use-credentials" ? "credentials" : typeof r == "string" ? "anonymous" : "default";
            if (!d.connectResources[R].hasOwnProperty(t)) {
              d.connectResources[R][t] = A, d = y.headers;
              var D, W;
              if (W = d && 0 < d.remainingCapacity) {
                if (W = "<" + wt(t) + ">; rel=preconnect", typeof r == "string") {
                  var de = Ho(
                    r,
                    "crossOrigin"
                  );
                  W += '; crossorigin="' + de + '"';
                }
                W = (D = W, 0 <= (d.remainingCapacity -= D.length + 2));
              }
              W ? (y.resets.connect[R][t] = A, d.preconnects && (d.preconnects += ", "), d.preconnects += D) : (R = [], Qe(R, {
                rel: "preconnect",
                href: t,
                crossOrigin: r
              }), y.preconnects.add(R));
            }
            Ga(u);
          }
        } else a.C(t, r);
      },
      L: function(t, r, u) {
        var d = Ut || null;
        if (d) {
          var y = d.resumableState, R = d.renderState;
          if (r && t) {
            switch (r) {
              case "image":
                if (u)
                  var D = u.imageSrcSet, W = u.imageSizes, de = u.fetchPriority;
                var z = D ? D + `
` + (W || "") : t;
                if (y.imageResources.hasOwnProperty(z)) return;
                y.imageResources[z] = ne, y = R.headers;
                var Fe;
                y && 0 < y.remainingCapacity && typeof D != "string" && de === "high" && (Fe = Tl(t, r, u), 0 <= (y.remainingCapacity -= Fe.length + 2)) ? (R.resets.image[z] = ne, y.highImagePreloads && (y.highImagePreloads += ", "), y.highImagePreloads += Fe) : (y = [], Qe(
                  y,
                  rn(
                    {
                      rel: "preload",
                      href: D ? void 0 : t,
                      as: r
                    },
                    u
                  )
                ), de === "high" ? R.highImagePreloads.add(y) : (R.bulkPreloads.add(y), R.preloads.images.set(z, y)));
                break;
              case "style":
                if (y.styleResources.hasOwnProperty(t)) return;
                D = [], Qe(
                  D,
                  rn({ rel: "preload", href: t, as: r }, u)
                ), y.styleResources[t] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? ne : [u.crossOrigin, u.integrity], R.preloads.stylesheets.set(t, D), R.bulkPreloads.add(D);
                break;
              case "script":
                if (y.scriptResources.hasOwnProperty(t)) return;
                D = [], R.preloads.scripts.set(t, D), R.bulkPreloads.add(D), Qe(
                  D,
                  rn({ rel: "preload", href: t, as: r }, u)
                ), y.scriptResources[t] = !u || typeof u.crossOrigin != "string" && typeof u.integrity != "string" ? ne : [u.crossOrigin, u.integrity];
                break;
              default:
                if (y.unknownResources.hasOwnProperty(r)) {
                  if (D = y.unknownResources[r], D.hasOwnProperty(t))
                    return;
                } else
                  D = {}, y.unknownResources[r] = D;
                if (D[t] = ne, (y = R.headers) && 0 < y.remainingCapacity && r === "font" && (z = Tl(t, r, u), 0 <= (y.remainingCapacity -= z.length + 2)))
                  R.resets.font[t] = ne, y.fontPreloads && (y.fontPreloads += ", "), y.fontPreloads += z;
                else
                  switch (y = [], t = rn(
                    { rel: "preload", href: t, as: r },
                    u
                  ), Qe(y, t), r) {
                    case "font":
                      R.fontPreloads.add(y);
                      break;
                    default:
                      R.bulkPreloads.add(y);
                  }
            }
            Ga(d);
          }
        } else a.L(t, r, u);
      },
      m: function(t, r) {
        var u = Ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (t) {
            var R = r && typeof r.as == "string" ? r.as : "script";
            switch (R) {
              case "script":
                if (d.moduleScriptResources.hasOwnProperty(t))
                  return;
                R = [], d.moduleScriptResources[t] = !r || typeof r.crossOrigin != "string" && typeof r.integrity != "string" ? ne : [r.crossOrigin, r.integrity], y.preloads.moduleScripts.set(t, R);
                break;
              default:
                if (d.moduleUnknownResources.hasOwnProperty(R)) {
                  var D = d.unknownResources[R];
                  if (D.hasOwnProperty(t)) return;
                } else
                  D = {}, d.moduleUnknownResources[R] = D;
                R = [], D[t] = ne;
            }
            Qe(
              R,
              rn({ rel: "modulepreload", href: t }, r)
            ), y.bulkPreloads.add(R), Ga(u);
          }
        } else a.m(t, r);
      },
      X: function(t, r) {
        var u = Ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (t) {
            var R = d.scriptResources.hasOwnProperty(
              t
            ) ? d.scriptResources[t] : void 0;
            R !== A && (d.scriptResources[t] = A, r = rn({ src: t, async: !0 }, r), R && (R.length === 2 && ro(r, R), t = y.preloads.scripts.get(t)) && (t.length = 0), t = [], y.scripts.add(t), M(t, r), Ga(u));
          }
        } else a.X(t, r);
      },
      S: function(t, r, u) {
        var d = Ut || null;
        if (d) {
          var y = d.resumableState, R = d.renderState;
          if (t) {
            r = r || "default";
            var D = R.styles.get(r), W = y.styleResources.hasOwnProperty(t) ? y.styleResources[t] : void 0;
            W !== A && (y.styleResources[t] = A, D || (D = {
              precedence: j(r),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, R.styles.set(r, D)), r = {
              state: Ke,
              props: rn(
                {
                  rel: "stylesheet",
                  href: t,
                  "data-precedence": r
                },
                u
              )
            }, W && (W.length === 2 && ro(r.props, W), (R = R.preloads.stylesheets.get(t)) && 0 < R.length ? R.length = 0 : r.state = at), D.sheets.set(t, r), Ga(d));
          }
        } else a.S(t, r, u);
      },
      M: function(t, r) {
        var u = Ut || null;
        if (u) {
          var d = u.resumableState, y = u.renderState;
          if (t) {
            var R = d.moduleScriptResources.hasOwnProperty(t) ? d.moduleScriptResources[t] : void 0;
            R !== A && (d.moduleScriptResources[t] = A, r = rn(
              { src: t, type: "module", async: !0 },
              r
            ), R && (R.length === 2 && ro(r, R), t = y.preloads.moduleScripts.get(t)) && (t.length = 0), t = [], y.scripts.add(t), M(t, r), Ga(u));
          }
        } else a.M(t, r);
      }
    };
    var o = 0, f = 1, g = 2, T = 4, x = 8, A = null, ne = [];
    Object.freeze(ne);
    var J = /(<\/|<)(s)(cript)/gi, ie = {}, Be = 0, ke = 0, Le = 1, Ne = 2, tt = 3, ze = 4, bt = 5, St = 6, Rt = 7, Nt = 8, Ue = 9, ft = /* @__PURE__ */ new Map(), rt = ' style="', Mn = ":", jn = ";", Xe = " ", At = '="', un = '"', Tn = '=""', xi = j(
      "javascript:throw new Error('React form unexpectedly submitted.')"
    ), mt = ">", cn = "/>", fr = !1, $n = !1, Ei = !1, er = !1, ii = !1, _r = !1, sn = !1, Qr = !1, Ir = !1, ki = !1, ai = !1, Jr = `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`, Uu = /(<\/|<)(s)(tyle)/gi, Ta = `
`, Ci = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, tu = /* @__PURE__ */ new Map(), vc = /* @__PURE__ */ new Map(), ml = '<template id="', bc = '"></template>', On = "<!--$-->", hr = '<!--$?--><template id="', qt = '"></template>', nu = "<!--$!-->", Si = "<!--/$-->", el = "<template", jt = '"', li = ' data-dgst="', yo = ' data-msg="', Pi = ' data-stck="', wo = ' data-cstck="', Dl = "></template>", pa = "<!--", pn = "-->", ru = '<div hidden id="', mr = '">', Ll = "</div>", tl = '<svg aria-hidden="true" style="display:none" id="', Xi = '">', oi = "</svg>", nl = '<math aria-hidden="true" style="display:none" id="', tr = '">', Ra = "</math>", yc = '<table hidden id="', iu = '">', To = "</table>", Yu = '<table hidden><tbody id="', _n = '">', Bl = "</tbody></table>", Wl = '<table hidden><tr id="', rl = '">', au = "</tr></table>", lu = '<table hidden><colgroup id="', Vr = '">', mc = "</colgroup></table>", Zi = '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("', wc = '$RS("', xa = '","', po = '")<\/script>', ou = '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("', il = '$RC("', uu = `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, Gu = `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`, Xu = '$RR("', cu = '","', Fi = '",', Ea = '"', Ro = ")<\/script>", Nl = '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("', su = '$RX("', xo = '"', al = ",", ll = ")<\/script>", ol = /[<\u2028\u2029]/g, Hl = /[&><\u2028\u2029]/g, zl = '<style media="not all" data-precedence="', fu = '" data-href="', i = '">', l = "</style>", s = !1, v = !0, w = [], E = '<style data-precedence="', O = '" data-href="', K = " ", m = '">', X = "</style>", Ce = "[", ge = ",[", We = ",", Ye = "]", Ke = 0, at = 1, Dt = 2, fn = 3, Tt = /[<>\r\n]/g, dr = /["';,\r\n]/g, hn = "", Dr = Function.prototype.bind, nr = Symbol.for("react.client.reference"), Nn = {};
    Object.freeze(Nn);
    var Rr = {}, Lt = null, Rn = {}, $t = {}, rr = /* @__PURE__ */ new Set(), Ul = /* @__PURE__ */ new Set(), ka = /* @__PURE__ */ new Set(), Ca = /* @__PURE__ */ new Set(), Yl = /* @__PURE__ */ new Set(), Sa = /* @__PURE__ */ new Set(), Tc = /* @__PURE__ */ new Set(), ul = /* @__PURE__ */ new Set(), Zc = /* @__PURE__ */ new Set(), Qc = {
      enqueueSetState: function(t, r, u) {
        var d = t._reactInternals;
        d.queue === null ? Gt(t, "setState") : (d.queue.push(r), u != null && Pn(u));
      },
      enqueueReplaceState: function(t, r, u) {
        t = t._reactInternals, t.replace = !0, t.queue = [r], u != null && Pn(u);
      },
      enqueueForceUpdate: function(t, r) {
        t._reactInternals.queue === null ? Gt(t, "forceUpdate") : r != null && Pn(r);
      }
    }, Dc = { id: 1, overflow: "" }, Zu = Math.clz32 ? Math.clz32 : Pr, Jc = Math.log, Lc = Math.LN2, Qi = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Lr = null, Bc = typeof Object.is == "function" ? Object.is : vt, Kr = null, Qu = null, Ju = null, pc = null, Rc = null, Zt = null, Vu = !1, Eo = !1, xn = 0, Gl = 0, Ji = -1, Xl = 0, ko = null, qr = null, Zl = 0, jr = !1, cl, hu = {
      readContext: Mc,
      use: function(t) {
        if (t !== null && typeof t == "object") {
          if (typeof t.then == "function")
            return ao(t);
          if (t.$$typeof === Ja)
            return Mc(t);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(t)
        );
      },
      useContext: function(t) {
        return cl = "useContext", zt(), t._currentValue2;
      },
      useMemo: mi,
      useReducer: Oc,
      useRef: function(t) {
        Kr = zt(), Zt = Xn();
        var r = Zt.memoizedState;
        return r === null ? (t = { current: t }, Object.seal(t), Zt.memoizedState = t) : r;
      },
      useState: function(t) {
        return cl = "useState", Oc(El, t);
      },
      useInsertionEffect: Di,
      useLayoutEffect: Di,
      useCallback: function(t, r) {
        return mi(function() {
          return t;
        }, r);
      },
      useImperativeHandle: Di,
      useEffect: Di,
      useDebugValue: Di,
      useDeferredValue: function(t, r) {
        return zt(), r !== void 0 ? r : t;
      },
      useTransition: function() {
        return zt(), [!1, Iu];
      },
      useId: function() {
        var t = Qu.treeContext, r = t.overflow;
        t = t.id, t = (t & ~(1 << 32 - Zu(t) - 1)).toString(32) + r;
        var u = Vi;
        if (u === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return r = xn++, t = "«" + u.idPrefix + "R" + t, 0 < r && (t += "H" + r.toString(32)), t + "»";
      },
      useSyncExternalStore: function(t, r, u) {
        if (u === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return u();
      },
      useOptimistic: function(t) {
        return zt(), [t, yi];
      },
      useActionState: Fr,
      useFormState: Fr,
      useHostTransitionStatus: function() {
        return zt(), $a;
      },
      useMemoCache: function(t) {
        for (var r = Array(t), u = 0; u < t; u++)
          r[u] = qa;
        return r;
      },
      useCacheRefresh: function() {
        return Wa;
      }
    }, Vi = null, ui = null, Wc = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return ui === null ? null : ui.componentStack;
      }
    }, Ki = 0, Nc, xc, Ku, qu, Vc, qi, Ql;
    Na.__reactDisabledLog = !0;
    var Hc, Pa, du = !1, Ec = new (typeof WeakMap == "function" ? WeakMap : Map)(), Fa = {
      react_stack_bottom_frame: function(t, r, u) {
        return t(r, u);
      }
    }, gu = Fa.react_stack_bottom_frame.bind(Fa), Mt = {
      react_stack_bottom_frame: function(t) {
        return t.render();
      }
    }, sl = Mt.react_stack_bottom_frame.bind(Mt), Co = {
      react_stack_bottom_frame: function(t) {
        var r = t._init;
        return r(t._payload);
      }
    }, Jl = Co.react_stack_bottom_frame.bind(Co), So = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var ju = performance, vu = function() {
        return ju.now();
      };
    else {
      var bu = Date;
      vu = function() {
        return bu.now();
      };
    }
    var dn = 4, $r = 0, en = 1, Vl = 2, yu = 5, fl = 14, Ut = null, kc = {}, ji = {}, Po = {}, zc = {}, wu = !1, $u = !1, Tu = !1;
    ws.renderToStaticMarkup = function(t, r) {
      return Jo(
        t,
        r,
        !0,
        'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, ws.renderToString = function(t, r) {
      return Jo(
        t,
        r,
        !1,
        'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server'
      );
    }, ws.version = "19.1.1";
  })()), ws;
}
var Ts = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function nd() {
  return ih || (ih = 1, process.env.NODE_ENV !== "production" && (function() {
    function ce(e, n, c, h) {
      return "" + n + (c === "s" ? "\\73 " : "\\53 ") + h;
    }
    function V(e, n, c, h) {
      return "" + n + (c === "s" ? "\\u0073" : "\\u0053") + h;
    }
    function F(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(n, c) {
        return c;
      });
    }
    function ee(e) {
      var n = JSON.stringify(e);
      return '"' + e + '"' === n ? e : n;
    }
    function oe(e) {
      switch (typeof e) {
        case "string":
          return JSON.stringify(
            10 >= e.length ? e : e.slice(0, 10) + "..."
          );
        case "object":
          return Fn(e) ? "[...]" : e !== null && e.$$typeof === ho ? "client" : (e = F(e), e === "Object" ? "{...}" : e);
        case "function":
          return e.$$typeof === ho ? "client" : (e = e.displayName || e.name) ? "function " + e : "function";
        default:
          return String(e);
      }
    }
    function Z(e) {
      if (typeof e == "string") return e;
      switch (e) {
        case fo:
          return "Suspense";
        case Ri:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case qa:
            return Z(e.render);
          case Xt:
            return Z(e.type);
          case wn:
            var n = e._payload;
            e = e._init;
            try {
              return Z(e(n));
            } catch {
            }
        }
      return "";
    }
    function Y(e, n) {
      var c = F(e);
      if (c !== "Object" && c !== "Array") return c;
      var h = -1, b = 0;
      if (Fn(e))
        if (Nu.has(e)) {
          var p = Nu.get(e);
          c = "<" + Z(p) + ">";
          for (var _ = 0; _ < e.length; _++) {
            var I = e[_];
            I = typeof I == "string" ? I : typeof I == "object" && I !== null ? "{" + Y(I) + "}" : "{" + oe(I) + "}", "" + _ === n ? (h = c.length, b = I.length, c += I) : c = 15 > I.length && 40 > c.length + I.length ? c + I : c + "{...}";
          }
          c += "</" + Z(p) + ">";
        } else {
          for (c = "[", p = 0; p < e.length; p++)
            0 < p && (c += ", "), _ = e[p], _ = typeof _ == "object" && _ !== null ? Y(_) : oe(_), "" + p === n ? (h = c.length, b = _.length, c += _) : c = 10 > _.length && 40 > c.length + _.length ? c + _ : c + "...";
          c += "]";
        }
      else if (e.$$typeof === Va)
        c = "<" + Z(e.type) + "/>";
      else {
        if (e.$$typeof === ho) return "client";
        if (Wu.has(e)) {
          for (c = Wu.get(e), c = "<" + (Z(c) || "..."), p = Object.keys(e), _ = 0; _ < p.length; _++) {
            c += " ", I = p[_], c += ee(I) + "=";
            var re = e[I], L = I === n && typeof re == "object" && re !== null ? Y(re) : oe(re);
            typeof re != "string" && (L = "{" + L + "}"), I === n ? (h = c.length, b = L.length, c += L) : c = 10 > L.length && 40 > c.length + L.length ? c + L : c + "...";
          }
          c += ">";
        } else {
          for (c = "{", p = Object.keys(e), _ = 0; _ < p.length; _++)
            0 < _ && (c += ", "), I = p[_], c += ee(I) + ": ", re = e[I], re = typeof re == "object" && re !== null ? Y(re) : oe(re), I === n ? (h = c.length, b = re.length, c += re) : c = 10 > re.length && 40 > c.length + re.length ? c + re : c + "...";
          c += "}";
        }
      }
      return n === void 0 ? c : -1 < h && 0 < b ? (e = " ".repeat(h) + "^".repeat(b), `
  ` + c + `
  ` + e) : `
  ` + c;
    }
    function C(e, n) {
      var c = e.length & 3, h = e.length - c, b = n;
      for (n = 0; n < h; ) {
        var p = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24;
        ++n, p = 3432918353 * (p & 65535) + ((3432918353 * (p >>> 16) & 65535) << 16) & 4294967295, p = p << 15 | p >>> 17, p = 461845907 * (p & 65535) + ((461845907 * (p >>> 16) & 65535) << 16) & 4294967295, b ^= p, b = b << 13 | b >>> 19, b = 5 * (b & 65535) + ((5 * (b >>> 16) & 65535) << 16) & 4294967295, b = (b & 65535) + 27492 + (((b >>> 16) + 58964 & 65535) << 16);
      }
      switch (p = 0, c) {
        case 3:
          p ^= (e.charCodeAt(n + 2) & 255) << 16;
        case 2:
          p ^= (e.charCodeAt(n + 1) & 255) << 8;
        case 1:
          p ^= e.charCodeAt(n) & 255, p = 3432918353 * (p & 65535) + ((3432918353 * (p >>> 16) & 65535) << 16) & 4294967295, p = p << 15 | p >>> 17, b ^= 461845907 * (p & 65535) + ((461845907 * (p >>> 16) & 65535) << 16) & 4294967295;
      }
      return b ^= e.length, b ^= b >>> 16, b = 2246822507 * (b & 65535) + ((2246822507 * (b >>> 16) & 65535) << 16) & 4294967295, b ^= b >>> 13, b = 3266489909 * (b & 65535) + ((3266489909 * (b >>> 16) & 65535) << 16) & 4294967295, (b ^ b >>> 16) >>> 0;
    }
    function q(e) {
      Gi.push(e), jo.port2.postMessage(null);
    }
    function ue(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function k(e, n) {
      if (n.byteLength !== 0)
        if (2048 < n.byteLength)
          0 < ur && (e.enqueue(
            new Uint8Array(Wn.buffer, 0, ur)
          ), Wn = new Uint8Array(2048), ur = 0), e.enqueue(n);
        else {
          var c = Wn.length - ur;
          c < n.byteLength && (c === 0 ? e.enqueue(Wn) : (Wn.set(
            n.subarray(0, c),
            ur
          ), e.enqueue(Wn), n = n.subarray(c)), Wn = new Uint8Array(2048), ur = 0), Wn.set(n, ur), ur += n.byteLength;
        }
    }
    function B(e, n) {
      return k(e, n), !0;
    }
    function Ie(e) {
      Wn && 0 < ur && (e.enqueue(
        new Uint8Array(Wn.buffer, 0, ur)
      ), Wn = null, ur = 0);
    }
    function G(e) {
      return cr.encode(e);
    }
    function U(e) {
      return e = cr.encode(e), 2048 < e.byteLength && console.error(
        "precomputed chunks must be smaller than the view size configured for this host. This is a bug in React."
      ), e;
    }
    function fe(e, n) {
      typeof e.error == "function" ? e.error(n) : e.close();
    }
    function Et(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function he(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function Ge(e, n) {
      if (he(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          n,
          Et(e)
        ), pe(e);
    }
    function Re(e, n) {
      if (he(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          n,
          Et(e)
        ), pe(e);
    }
    function j(e) {
      if (he(e))
        return console.error(
          "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
          Et(e)
        ), pe(e);
    }
    function Ae(e) {
      return Ct.call(hc, e) ? !0 : Ct.call(Hu, e) ? !1 : $o.test(e) ? hc[e] = !0 : (Hu[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Ve(e, n) {
      wa[n.type] || n.onChange || n.onInput || n.readOnly || n.disabled || n.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), n.onChange || n.readOnly || n.disabled || n.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function it(e, n) {
      if (Ct.call(Or, n) && Or[n])
        return !0;
      if (eu.test(n)) {
        if (e = "aria-" + n.slice(4).toLowerCase(), e = ri.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            n
          ), Or[n] = !0;
        if (n !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            n,
            e
          ), Or[n] = !0;
      }
      if (vo.test(n)) {
        if (e = n.toLowerCase(), e = ri.hasOwnProperty(e) ? e : null, e == null) return Or[n] = !0, !1;
        n !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          n,
          e
        ), Or[n] = !0);
      }
      return !0;
    }
    function $e(e, n) {
      var c = [], h;
      for (h in n)
        it(e, h) || c.push(h);
      n = c.map(function(b) {
        return "`" + b + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        n,
        e
      ) : 1 < c.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        n,
        e
      );
    }
    function _t(e, n, c, h) {
      if (Ct.call(An, n) && An[n])
        return !0;
      var b = n.toLowerCase();
      if (b === "onfocusin" || b === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), An[n] = !0;
      if (typeof c == "function" && (e === "form" && n === "action" || e === "input" && n === "formAction" || e === "button" && n === "formAction"))
        return !0;
      if (Xc.test(n))
        return sr.test(n) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          n
        ), An[n] = !0;
      if (gc.test(n) || $a.test(n)) return !0;
      if (b === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), An[n] = !0;
      if (b === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), An[n] = !0;
      if (b === "is" && c !== null && c !== void 0 && typeof c != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof c
        ), An[n] = !0;
      if (typeof c == "number" && isNaN(c))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          n
        ), An[n] = !0;
      if (bo.hasOwnProperty(b)) {
        if (b = bo[b], b !== n)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            n,
            b
          ), An[n] = !0;
      } else if (n !== b)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          n,
          b
        ), An[n] = !0;
      switch (n) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof c) {
        case "boolean":
          switch (n) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return b = n.toLowerCase().slice(0, 5), b === "data-" || b === "aria-" ? !0 : (c ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                c,
                n,
                n,
                c,
                n
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                c,
                n,
                n,
                c,
                n,
                n,
                n
              ), An[n] = !0);
          }
        case "function":
        case "symbol":
          return An[n] = !0, !1;
        case "string":
          if (c === "false" || c === "true") {
            switch (n) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              c,
              n,
              c === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              n,
              c
            ), An[n] = !0;
          }
      }
      return !0;
    }
    function N(e, n, c) {
      var h = [], b;
      for (b in n)
        _t(e, b, n[b]) || h.push(b);
      n = h.map(function(p) {
        return "`" + p + "`";
      }).join(", "), h.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        n,
        e
      ) : 1 < h.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        n,
        e
      );
    }
    function H(e) {
      return e.replace(f, function(n, c) {
        return c.toUpperCase();
      });
    }
    function se(e) {
      if (typeof e == "boolean" || typeof e == "number" || typeof e == "bigint")
        return "" + e;
      j(e), e = "" + e;
      var n = J.exec(e);
      if (n) {
        var c = "", h, b = 0;
        for (h = n.index; h < e.length; h++) {
          switch (e.charCodeAt(h)) {
            case 34:
              n = "&quot;";
              break;
            case 38:
              n = "&amp;";
              break;
            case 39:
              n = "&#x27;";
              break;
            case 60:
              n = "&lt;";
              break;
            case 62:
              n = "&gt;";
              break;
            default:
              continue;
          }
          b !== h && (c += e.slice(b, h)), b = h + 1, c += n;
        }
        e = b !== h ? c + e.slice(b, h) : c;
      }
      return e;
    }
    function Ee(e) {
      return ke.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ze(e) {
      return j(e), ("" + e).replace(cn, V);
    }
    function ae(e, n, c, h, b, p) {
      var _ = n === void 0 ? Mn : U(
        '<script nonce="' + se(n) + '">'
      ), I = e.idPrefix;
      c = [];
      var re = e.bootstrapScriptContent, L = e.bootstrapScripts, Te = e.bootstrapModules;
      if (re !== void 0 && c.push(
        _,
        G(
          Ze(re)
        ),
        jn
      ), re = [], h !== void 0 && (re.push(fr), re.push(
        G(
          Ze(JSON.stringify(h))
        )
      ), re.push($n)), b && typeof p == "number" && 0 >= p && console.error(
        "React expected a positive non-zero `maxHeadersLength` option but found %s instead. When using the `onHeaders` option you may supply an optional `maxHeadersLength` option as well however, when setting this value to zero or less no headers will be captured.",
        p === 0 ? "zero" : p
      ), h = b ? {
        preconnects: "",
        fontPreloads: "",
        highImagePreloads: "",
        remainingCapacity: 2 + (typeof p == "number" ? p : 2e3)
      } : null, b = {
        placeholderPrefix: U(I + "P:"),
        segmentPrefix: U(I + "S:"),
        boundaryPrefix: U(I + "B:"),
        startInlineScript: _,
        preamble: $(),
        externalRuntimeScript: null,
        bootstrapChunks: c,
        importMapChunks: re,
        onHeaders: b,
        headers: h,
        resets: {
          font: {},
          dns: {},
          connect: { default: {}, anonymous: {}, credentials: {} },
          image: {},
          style: {}
        },
        charsetChunks: [],
        viewportChunks: [],
        hoistableChunks: [],
        preconnects: /* @__PURE__ */ new Set(),
        fontPreloads: /* @__PURE__ */ new Set(),
        highImagePreloads: /* @__PURE__ */ new Set(),
        styles: /* @__PURE__ */ new Map(),
        bootstrapScripts: /* @__PURE__ */ new Set(),
        scripts: /* @__PURE__ */ new Set(),
        bulkPreloads: /* @__PURE__ */ new Set(),
        preloads: {
          images: /* @__PURE__ */ new Map(),
          stylesheets: /* @__PURE__ */ new Map(),
          scripts: /* @__PURE__ */ new Map(),
          moduleScripts: /* @__PURE__ */ new Map()
        },
        nonce: n,
        hoistableState: null,
        stylesToHoist: !1
      }, L !== void 0)
        for (h = 0; h < L.length; h++) {
          p = L[h], re = I = void 0;
          var ye = {
            rel: "preload",
            as: "script",
            fetchPriority: "low",
            nonce: n
          };
          typeof p == "string" ? ye.href = _ = p : (ye.href = _ = p.src, ye.integrity = re = typeof p.integrity == "string" ? p.integrity : void 0, ye.crossOrigin = I = typeof p == "string" || p.crossOrigin == null ? void 0 : p.crossOrigin === "use-credentials" ? "use-credentials" : ""), zo(
            e,
            b,
            _,
            ye
          ), c.push(
            Xe,
            G(se(_))
          ), n && c.push(
            un,
            G(se(n))
          ), typeof re == "string" && c.push(
            Tn,
            G(se(re))
          ), typeof I == "string" && c.push(
            xi,
            G(se(I))
          ), c.push(mt);
        }
      if (Te !== void 0)
        for (L = 0; L < Te.length; L++)
          h = Te[L], I = _ = void 0, re = {
            rel: "modulepreload",
            fetchPriority: "low",
            nonce: n
          }, typeof h == "string" ? re.href = p = h : (re.href = p = h.src, re.integrity = I = typeof h.integrity == "string" ? h.integrity : void 0, re.crossOrigin = _ = typeof h == "string" || h.crossOrigin == null ? void 0 : h.crossOrigin === "use-credentials" ? "use-credentials" : ""), zo(
            e,
            b,
            p,
            re
          ), c.push(
            At,
            G(se(p))
          ), n && c.push(
            un,
            G(se(n))
          ), typeof I == "string" && c.push(
            Tn,
            G(se(I))
          ), typeof _ == "string" && c.push(
            xi,
            G(se(_))
          ), c.push(mt);
      return b;
    }
    function P(e, n, c, h, b) {
      return {
        idPrefix: e === void 0 ? "" : e,
        nextFormID: 0,
        streamingFormat: 0,
        bootstrapScriptContent: c,
        bootstrapScripts: h,
        bootstrapModules: b,
        instructions: bt,
        hasBody: !1,
        hasHtml: !1,
        unknownResources: {},
        dnsResources: {},
        connectResources: { default: {}, anonymous: {}, credentials: {} },
        imageResources: {},
        styleResources: {},
        scriptResources: {},
        moduleUnknownResources: {},
        moduleScriptResources: {}
      };
    }
    function $() {
      return {
        htmlChunks: null,
        headChunks: null,
        bodyChunks: null,
        contribution: er
      };
    }
    function le(e, n, c) {
      return {
        insertionMode: e,
        selectedValue: n,
        tagScope: c
      };
    }
    function te(e) {
      return le(
        e === "http://www.w3.org/2000/svg" ? Ir : e === "http://www.w3.org/1998/Math/MathML" ? ki : ii,
        null,
        0
      );
    }
    function Q(e, n, c) {
      switch (n) {
        case "noscript":
          return le(
            sn,
            null,
            e.tagScope | 1
          );
        case "select":
          return le(
            sn,
            c.value != null ? c.value : c.defaultValue,
            e.tagScope
          );
        case "svg":
          return le(Ir, null, e.tagScope);
        case "picture":
          return le(
            sn,
            null,
            e.tagScope | 2
          );
        case "math":
          return le(ki, null, e.tagScope);
        case "foreignObject":
          return le(sn, null, e.tagScope);
        case "table":
          return le(
            ai,
            null,
            e.tagScope
          );
        case "thead":
        case "tbody":
        case "tfoot":
          return le(
            Jr,
            null,
            e.tagScope
          );
        case "colgroup":
          return le(
            Ta,
            null,
            e.tagScope
          );
        case "tr":
          return le(
            Uu,
            null,
            e.tagScope
          );
        case "head":
          if (e.insertionMode < sn)
            return le(
              Qr,
              null,
              e.tagScope
            );
          break;
        case "html":
          if (e.insertionMode === ii)
            return le(
              _r,
              null,
              e.tagScope
            );
      }
      return e.insertionMode >= ai || e.insertionMode < sn ? le(sn, null, e.tagScope) : e;
    }
    function nt(e, n, c, h) {
      return n === "" ? h : (h && e.push(Ci), e.push(G(se(n))), !0);
    }
    function pt(e, n) {
      if (typeof n != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      var c = !0, h;
      for (h in n)
        if (Ct.call(n, h)) {
          var b = n[h];
          if (b != null && typeof b != "boolean" && b !== "") {
            if (h.indexOf("--") === 0) {
              var p = G(se(h));
              Re(b, h), b = G(
                se(("" + b).trim())
              );
            } else {
              p = h;
              var _ = b;
              if (-1 < p.indexOf("-")) {
                var I = p;
                T.hasOwnProperty(I) && T[I] || (T[I] = !0, console.error(
                  "Unsupported style property %s. Did you mean %s?",
                  I,
                  H(I.replace(o, "ms-"))
                ));
              } else if (a.test(p))
                I = p, T.hasOwnProperty(I) && T[I] || (T[I] = !0, console.error(
                  "Unsupported vendor-prefixed style property %s. Did you mean %s?",
                  I,
                  I.charAt(0).toUpperCase() + I.slice(1)
                ));
              else if (g.test(_)) {
                I = p;
                var re = _;
                x.hasOwnProperty(re) && x[re] || (x[re] = !0, console.error(
                  `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
                  I,
                  re.replace(
                    g,
                    ""
                  )
                ));
              }
              typeof _ == "number" && (isNaN(_) ? A || (A = !0, console.error(
                "`NaN` is an invalid value for the `%s` css style property.",
                p
              )) : isFinite(_) || ne || (ne = !0, console.error(
                "`Infinity` is an invalid value for the `%s` css style property.",
                p
              ))), p = h, _ = tu.get(p), _ !== void 0 || (_ = U(
                se(
                  p.replace(ie, "-$1").toLowerCase().replace(Be, "-ms-")
                )
              ), tu.set(p, _)), p = _, typeof b == "number" ? b = b === 0 || dc.has(h) ? G("" + b) : G(b + "px") : (Re(b, h), b = G(
                se(("" + b).trim())
              ));
            }
            c ? (c = !1, e.push(
              vc,
              p,
              ml,
              b
            )) : e.push(bc, p, ml, b);
          }
        }
      c || e.push(qt);
    }
    function Qe(e, n, c) {
      c && typeof c != "function" && typeof c != "symbol" && e.push(
        On,
        G(n),
        nu
      );
    }
    function dt(e, n, c) {
      typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && e.push(
        On,
        G(n),
        hr,
        G(se(c)),
        qt
      );
    }
    function It(e, n) {
      this.push(el), S(e), dt(this, "name", n), dt(this, "value", e), this.push(li);
    }
    function S(e) {
      if (typeof e != "string")
        throw Error(
          "File/Blob fields are not yet supported in progressive forms. Will fallback to client hydration."
        );
    }
    function M(e, n) {
      if (typeof n.$$FORM_ACTION == "function") {
        var c = e.nextFormID++;
        e = e.idPrefix + c;
        try {
          var h = n.$$FORM_ACTION(e);
          if (h) {
            var b = h.data;
            b?.forEach(S);
          }
          return h;
        } catch (p) {
          if (typeof p == "object" && p !== null && typeof p.then == "function")
            throw p;
          console.error(
            `Failed to serialize an action for progressive enhancement:
%s`,
            p
          );
        }
      }
      return null;
    }
    function Se(e, n, c, h, b, p, _, I) {
      var re = null;
      if (typeof h == "function") {
        I === null || Ll || (Ll = !0, console.error(
          'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
        )), b === null && p === null || Xi || (Xi = !0, console.error(
          "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
        )), _ === null || tl || (tl = !0, console.error(
          "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
        ));
        var L = M(n, h);
        L !== null ? (I = L.name, h = L.action || "", b = L.encType, p = L.method, _ = L.target, re = L.data) : (e.push(
          On,
          G("formAction"),
          hr,
          Si,
          qt
        ), _ = p = b = h = I = null, ua(n, c));
      }
      return I != null && we(e, "name", I), h != null && we(e, "formAction", h), b != null && we(e, "formEncType", b), p != null && we(e, "formMethod", p), _ != null && we(e, "formTarget", _), re;
    }
    function we(e, n, c) {
      switch (n) {
        case "className":
          dt(e, "class", c);
          break;
        case "tabIndex":
          dt(e, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          dt(e, n, c);
          break;
        case "style":
          pt(e, c);
          break;
        case "src":
        case "href":
          if (c === "") {
            console.error(
              n === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              n,
              n
            );
            break;
          }
        case "action":
        case "formAction":
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          Ge(c, n), c = Ee("" + c), e.push(
            On,
            G(n),
            hr,
            G(se(c)),
            qt
          );
          break;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "ref":
          break;
        case "autoFocus":
        case "multiple":
        case "muted":
          Qe(e, n.toLowerCase(), c);
          break;
        case "xlinkHref":
          if (typeof c == "function" || typeof c == "symbol" || typeof c == "boolean")
            break;
          Ge(c, n), c = Ee("" + c), e.push(
            On,
            G("xlink:href"),
            hr,
            G(se(c)),
            qt
          );
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          typeof c != "function" && typeof c != "symbol" && e.push(
            On,
            G(n),
            hr,
            G(se(c)),
            qt
          );
          break;
        case "inert":
          c !== "" || Ei[n] || (Ei[n] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            n
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          c && typeof c != "function" && typeof c != "symbol" && e.push(
            On,
            G(n),
            nu
          );
          break;
        case "capture":
        case "download":
          c === !0 ? e.push(
            On,
            G(n),
            nu
          ) : c !== !1 && typeof c != "function" && typeof c != "symbol" && e.push(
            On,
            G(n),
            hr,
            G(se(c)),
            qt
          );
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c && e.push(
            On,
            G(n),
            hr,
            G(se(c)),
            qt
          );
          break;
        case "rowSpan":
        case "start":
          typeof c == "function" || typeof c == "symbol" || isNaN(c) || e.push(
            On,
            G(n),
            hr,
            G(se(c)),
            qt
          );
          break;
        case "xlinkActuate":
          dt(e, "xlink:actuate", c);
          break;
        case "xlinkArcrole":
          dt(e, "xlink:arcrole", c);
          break;
        case "xlinkRole":
          dt(e, "xlink:role", c);
          break;
        case "xlinkShow":
          dt(e, "xlink:show", c);
          break;
        case "xlinkTitle":
          dt(e, "xlink:title", c);
          break;
        case "xlinkType":
          dt(e, "xlink:type", c);
          break;
        case "xmlBase":
          dt(e, "xml:base", c);
          break;
        case "xmlLang":
          dt(e, "xml:lang", c);
          break;
        case "xmlSpace":
          dt(e, "xml:space", c);
          break;
        default:
          if ((!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = go.get(n) || n, Ae(n))) {
            switch (typeof c) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                var h = n.toLowerCase().slice(0, 5);
                if (h !== "data-" && h !== "aria-") return;
            }
            e.push(
              On,
              G(n),
              hr,
              G(se(c)),
              qt
            );
          }
      }
    }
    function me(e, n, c) {
      if (n != null) {
        if (c != null)
          throw Error(
            "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
          );
        if (typeof n != "object" || !("__html" in n))
          throw Error(
            "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
          );
        n = n.__html, n != null && (j(n), e.push(G("" + n)));
      }
    }
    function Me(e, n) {
      var c = e[n];
      c != null && (c = Fn(c), e.multiple && !c ? console.error(
        "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
        n
      ) : !e.multiple && c && console.error(
        "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
        n
      ));
    }
    function ot(e) {
      var n = "";
      return _l.Children.forEach(e, function(c) {
        c != null && (n += c, pa || typeof c == "string" || typeof c == "number" || typeof c == "bigint" || (pa = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        )));
      }), n;
    }
    function ua(e, n) {
      (e.instructions & 16) === bt && (e.instructions |= 16, n.bootstrapChunks.unshift(
        n.startInlineScript,
        nl,
        jn
      ));
    }
    function nn(e, n) {
      e.push(et("link"));
      for (var c in n)
        if (Ct.call(n, c)) {
          var h = n[c];
          if (h != null)
            switch (c) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                we(e, c, h);
            }
        }
      return e.push(li), null;
    }
    function Yt(e) {
      return j(e), ("" + e).replace(yc, ce);
    }
    function yr(e, n, c) {
      e.push(et(c));
      for (var h in n)
        if (Ct.call(n, h)) {
          var b = n[h];
          if (b != null)
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  c + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                we(e, h, b);
            }
        }
      return e.push(li), null;
    }
    function ca(e, n) {
      e.push(et("title"));
      var c = null, h = null, b;
      for (b in n)
        if (Ct.call(n, b)) {
          var p = n[b];
          if (p != null)
            switch (b) {
              case "children":
                c = p;
                break;
              case "dangerouslySetInnerHTML":
                h = p;
                break;
              default:
                we(e, b, p);
            }
        }
      return e.push(jt), n = Array.isArray(c) ? 2 > c.length ? c[0] : null : c, typeof n != "function" && typeof n != "symbol" && n !== null && n !== void 0 && e.push(G(se("" + n))), me(e, h, c), e.push(wr("title")), null;
    }
    function Ia(e, n) {
      e.push(et("script"));
      var c = null, h = null, b;
      for (b in n)
        if (Ct.call(n, b)) {
          var p = n[b];
          if (p != null)
            switch (b) {
              case "children":
                c = p;
                break;
              case "dangerouslySetInnerHTML":
                h = p;
                break;
              default:
                we(e, b, p);
            }
        }
      return e.push(jt), c != null && typeof c != "string" && (n = typeof c == "number" ? "a number for children" : Array.isArray(c) ? "an array for children" : "something unexpected for children", console.error(
        "A script element was rendered with %s. If script element has children it must be a single string. Consider using dangerouslySetInnerHTML or passing a plain string as children.",
        n
      )), me(e, h, c), typeof c == "string" && e.push(G(Ze(c))), e.push(wr("script")), null;
    }
    function Cn(e, n, c) {
      e.push(et(c));
      var h = c = null, b;
      for (b in n)
        if (Ct.call(n, b)) {
          var p = n[b];
          if (p != null)
            switch (b) {
              case "children":
                c = p;
                break;
              case "dangerouslySetInnerHTML":
                h = p;
                break;
              default:
                we(e, b, p);
            }
        }
      return e.push(jt), me(e, h, c), c;
    }
    function Qt(e, n, c) {
      e.push(et(c));
      var h = c = null, b;
      for (b in n)
        if (Ct.call(n, b)) {
          var p = n[b];
          if (p != null)
            switch (b) {
              case "children":
                c = p;
                break;
              case "dangerouslySetInnerHTML":
                h = p;
                break;
              default:
                we(e, b, p);
            }
        }
      return e.push(jt), me(e, h, c), typeof c == "string" ? (e.push(G(se(c))), null) : c;
    }
    function et(e) {
      var n = Yu.get(e);
      if (n === void 0) {
        if (!To.test(e)) throw Error("Invalid tag: " + e);
        n = U("<" + e), Yu.set(e, n);
      }
      return n;
    }
    function bn(e, n, c, h, b, p, _, I, re, L) {
      $e(n, c), n !== "input" && n !== "textarea" && n !== "select" || c == null || c.value !== null || zu || (zu = !0, n === "select" && c.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        n
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        n
      ));
      e: if (n.indexOf("-") === -1) var Te = !1;
      else
        switch (n) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            Te = !1;
            break e;
          default:
            Te = !0;
        }
      switch (Te || typeof c.is == "string" || N(n, c), !c.suppressContentEditableWarning && c.contentEditable && c.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      ), I.insertionMode !== Ir && I.insertionMode !== ki && n.indexOf("-") === -1 && n.toLowerCase() !== n && console.error(
        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
        n
      ), n) {
        case "div":
        case "span":
        case "svg":
        case "path":
          break;
        case "a":
          e.push(et("a"));
          var ye = null, Oe = null, Pe;
          for (Pe in c)
            if (Ct.call(c, Pe)) {
              var be = c[Pe];
              if (be != null)
                switch (Pe) {
                  case "children":
                    ye = be;
                    break;
                  case "dangerouslySetInnerHTML":
                    Oe = be;
                    break;
                  case "href":
                    be === "" ? dt(e, "href", "") : we(e, Pe, be);
                    break;
                  default:
                    we(e, Pe, be);
                }
            }
          if (e.push(jt), me(e, Oe, ye), typeof ye == "string") {
            e.push(G(se(ye)));
            var ht = null;
          } else ht = ye;
          return ht;
        case "g":
        case "p":
        case "li":
          break;
        case "select":
          Ve("select", c), Me(c, "value"), Me(c, "defaultValue"), c.value === void 0 || c.defaultValue === void 0 || wo || (console.error(
            "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), wo = !0), e.push(et("select"));
          var Ot = null, ut = null, He;
          for (He in c)
            if (Ct.call(c, He)) {
              var kn = c[He];
              if (kn != null)
                switch (He) {
                  case "children":
                    Ot = kn;
                    break;
                  case "dangerouslySetInnerHTML":
                    ut = kn;
                    break;
                  case "defaultValue":
                  case "value":
                    break;
                  default:
                    we(
                      e,
                      He,
                      kn
                    );
                }
            }
          return e.push(jt), me(e, ut, Ot), Ot;
        case "option":
          var Ht = I.selectedValue;
          e.push(et("option"));
          var ct = null, gr = null, Br = null, mn = null, Hn;
          for (Hn in c)
            if (Ct.call(c, Hn)) {
              var Vt = c[Hn];
              if (Vt != null)
                switch (Hn) {
                  case "children":
                    ct = Vt;
                    break;
                  case "selected":
                    Br = Vt, ru || (console.error(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ), ru = !0);
                    break;
                  case "dangerouslySetInnerHTML":
                    mn = Vt;
                    break;
                  case "value":
                    gr = Vt;
                  default:
                    we(
                      e,
                      Hn,
                      Vt
                    );
                }
            }
          if (Ht != null) {
            if (gr !== null) {
              Ge(gr, "value");
              var vr = "" + gr;
            } else
              mn === null || pn || (pn = !0, console.error(
                "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
              )), vr = ot(ct);
            if (Fn(Ht)) {
              for (var br = 0; br < Ht.length; br++)
                if (Ge(Ht[br], "value"), "" + Ht[br] === vr) {
                  e.push(oi);
                  break;
                }
            } else
              Ge(Ht, "select.value"), "" + Ht === vr && e.push(oi);
          } else Br && e.push(oi);
          return e.push(jt), me(e, mn, ct), ct;
        case "textarea":
          Ve("textarea", c), c.value === void 0 || c.defaultValue === void 0 || Dl || (console.error(
            "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components"
          ), Dl = !0), e.push(et("textarea"));
          var gt = null, ln = null, Bt = null, Er;
          for (Er in c)
            if (Ct.call(c, Er)) {
              var kr = c[Er];
              if (kr != null)
                switch (Er) {
                  case "children":
                    Bt = kr;
                    break;
                  case "value":
                    gt = kr;
                    break;
                  case "defaultValue":
                    ln = kr;
                    break;
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  default:
                    we(
                      e,
                      Er,
                      kr
                    );
                }
            }
          if (gt === null && ln !== null && (gt = ln), e.push(jt), Bt != null) {
            if (console.error(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ), gt != null)
              throw Error(
                "If you supply `defaultValue` on a <textarea>, do not pass children."
              );
            if (Fn(Bt)) {
              if (1 < Bt.length)
                throw Error("<textarea> can only have at most one child.");
              j(Bt[0]), gt = "" + Bt[0];
            }
            j(Bt), gt = "" + Bt;
          }
          return typeof gt == "string" && gt[0] === `
` && e.push(iu), gt !== null && (Ge(gt, "value"), e.push(
            G(se("" + gt))
          )), null;
        case "input":
          Ve("input", c), e.push(et("input"));
          var zn = null, $i = null, ei = null, ea = null, Fo = null, ta = null, Kl = null, si = null, Ao = null, Cr;
          for (Cr in c)
            if (Ct.call(c, Cr)) {
              var Un = c[Cr];
              if (Un != null)
                switch (Cr) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  case "name":
                    zn = Un;
                    break;
                  case "formAction":
                    $i = Un;
                    break;
                  case "formEncType":
                    ei = Un;
                    break;
                  case "formMethod":
                    ea = Un;
                    break;
                  case "formTarget":
                    Fo = Un;
                    break;
                  case "defaultChecked":
                    Ao = Un;
                    break;
                  case "defaultValue":
                    Kl = Un;
                    break;
                  case "checked":
                    si = Un;
                    break;
                  case "value":
                    ta = Un;
                    break;
                  default:
                    we(
                      e,
                      Cr,
                      Un
                    );
                }
            }
          $i === null || c.type === "image" || c.type === "submit" || mr || (mr = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          ));
          var gn = Se(
            e,
            h,
            b,
            $i,
            ei,
            ea,
            Fo,
            zn
          );
          return si === null || Ao === null || Pi || (console.error(
            "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), Pi = !0), ta === null || Kl === null || yo || (console.error(
            "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
            "A component",
            c.type
          ), yo = !0), si !== null ? Qe(e, "checked", si) : Ao !== null && Qe(e, "checked", Ao), ta !== null ? we(e, "value", ta) : Kl !== null && we(e, "value", Kl), e.push(li), gn?.forEach(It, e), null;
        case "button":
          e.push(et("button"));
          var Wr = null, fi = null, ql = null, hi = null, na = null, di = null, ec = null, Dn;
          for (Dn in c)
            if (Ct.call(c, Dn)) {
              var Nr = c[Dn];
              if (Nr != null)
                switch (Dn) {
                  case "children":
                    Wr = Nr;
                    break;
                  case "dangerouslySetInnerHTML":
                    fi = Nr;
                    break;
                  case "name":
                    ql = Nr;
                    break;
                  case "formAction":
                    hi = Nr;
                    break;
                  case "formEncType":
                    na = Nr;
                    break;
                  case "formMethod":
                    di = Nr;
                    break;
                  case "formTarget":
                    ec = Nr;
                    break;
                  default:
                    we(
                      e,
                      Dn,
                      Nr
                    );
                }
            }
          hi === null || c.type == null || c.type === "submit" || mr || (mr = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          ));
          var Aa = Se(
            e,
            h,
            b,
            hi,
            na,
            di,
            ec,
            ql
          );
          if (e.push(jt), Aa?.forEach(It, e), me(e, fi, Wr), typeof Wr == "string") {
            e.push(
              G(se(Wr))
            );
            var Ma = null;
          } else Ma = Wr;
          return Ma;
        case "form":
          e.push(et("form"));
          var ra = null, jl = null, Ai = null, hl = null, dl = null, gl = null, vl;
          for (vl in c)
            if (Ct.call(c, vl)) {
              var gi = c[vl];
              if (gi != null)
                switch (vl) {
                  case "children":
                    ra = gi;
                    break;
                  case "dangerouslySetInnerHTML":
                    jl = gi;
                    break;
                  case "action":
                    Ai = gi;
                    break;
                  case "encType":
                    hl = gi;
                    break;
                  case "method":
                    dl = gi;
                    break;
                  case "target":
                    gl = gi;
                    break;
                  default:
                    we(
                      e,
                      vl,
                      gi
                    );
                }
            }
          var ia = null, tc = null;
          if (typeof Ai == "function") {
            hl === null && dl === null || Xi || (Xi = !0, console.error(
              "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
            )), gl === null || tl || (tl = !0, console.error(
              "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
            ));
            var Mi = M(
              h,
              Ai
            );
            Mi !== null ? (Ai = Mi.action || "", hl = Mi.encType, dl = Mi.method, gl = Mi.target, ia = Mi.data, tc = Mi.name) : (e.push(
              On,
              G("action"),
              hr,
              Si,
              qt
            ), gl = dl = hl = Ai = null, ua(h, b));
          }
          if (Ai != null && we(e, "action", Ai), hl != null && we(e, "encType", hl), dl != null && we(e, "method", dl), gl != null && we(e, "target", gl), e.push(jt), tc !== null && (e.push(el), dt(e, "name", tc), e.push(li), ia?.forEach(
            It,
            e
          )), me(e, jl, ra), typeof ra == "string") {
            e.push(
              G(se(ra))
            );
            var Mo = null;
          } else Mo = ra;
          return Mo;
        case "menuitem":
          e.push(et("menuitem"));
          for (var Oo in c)
            if (Ct.call(c, Oo)) {
              var Cc = c[Oo];
              if (Cc != null)
                switch (Oo) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                    );
                  default:
                    we(
                      e,
                      Oo,
                      Cc
                    );
                }
            }
          return e.push(jt), null;
        case "object":
          e.push(et("object"));
          var Oa = null, nc = null, ti;
          for (ti in c)
            if (Ct.call(c, ti)) {
              var aa = c[ti];
              if (aa != null)
                switch (ti) {
                  case "children":
                    Oa = aa;
                    break;
                  case "dangerouslySetInnerHTML":
                    nc = aa;
                    break;
                  case "data":
                    Ge(aa, "data");
                    var vn = Ee("" + aa);
                    if (vn === "") {
                      console.error(
                        'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                        ti,
                        ti
                      );
                      break;
                    }
                    e.push(
                      On,
                      G("data"),
                      hr,
                      G(se(vn)),
                      qt
                    );
                    break;
                  default:
                    we(
                      e,
                      ti,
                      aa
                    );
                }
            }
          if (e.push(jt), me(e, nc, Oa), typeof Oa == "string") {
            e.push(
              G(se(Oa))
            );
            var ar = null;
          } else ar = Oa;
          return ar;
        case "title":
          var Hr = I.insertionMode, Sc = !!(I.tagScope & 1);
          if (Ct.call(c, "children")) {
            var la = c.children, bl = Array.isArray(la) ? 2 > la.length ? la[0] : null : la;
            Array.isArray(la) && 1 < la.length ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an Array with length %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert `children` of <title> tags to a single string value which is why Arrays of length greater than 1 are not supported. When using JSX it can be common to combine text nodes and value nodes. For example: <title>hello {nameOfUser}</title>. While not immediately apparent, `children` in this case is an Array with length 2. If your `children` prop is using this form try rewriting it using a template string: <title>{`hello ${nameOfUser}`}</title>.",
              la.length
            ) : typeof bl == "function" || typeof bl == "symbol" ? console.error(
              "React expect children of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found %s instead. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value.",
              typeof bl == "function" ? "a Function" : "a Sybmol"
            ) : bl && bl.toString === {}.toString && (bl.$$typeof != null ? console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that appears to be a React element which never implements a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value which is why rendering React elements is not supported. If the `children` of <title> is a React Component try moving the <title> tag into that component. If the `children` of <title> is some HTML markup change it to be Text only to be valid HTML."
            ) : console.error(
              "React expects the `children` prop of <title> tags to be a string, number, bigint, or object with a novel `toString` method but found an object that does not implement a suitable `toString` method. Browsers treat all child Nodes of <title> tags as Text content and React expects to be able to convert children of <title> tags to a single string value. Using the default `toString` method available on every object is almost certainly an error. Consider whether the `children` of this <title> is an object in error and change it to a string or number value if so. Otherwise implement a `toString` method that React can use to produce a valid <title>."
            ));
          }
          if (Hr === Ir || Sc || c.itemProp != null)
            var $l = ca(
              e,
              c
            );
          else
            L ? $l = null : (ca(b.hoistableChunks, c), $l = void 0);
          return $l;
        case "link":
          var Uc = c.rel, Yn = c.href, pu = c.precedence;
          if (I.insertionMode === Ir || I.tagScope & 1 || c.itemProp != null || typeof Uc != "string" || typeof Yn != "string" || Yn === "") {
            Uc === "stylesheet" && typeof c.precedence == "string" && (typeof Yn == "string" && Yn || console.error(
              'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and expected the `href` prop to be a non-empty string but ecountered %s instead. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop ensure there is a non-empty string `href` prop as well, otherwise remove the `precedence` prop.',
              Yn === null ? "`null`" : Yn === void 0 ? "`undefined`" : Yn === "" ? "an empty string" : 'something with type "' + typeof Yn + '"'
            )), nn(e, c);
            var _o = null;
          } else if (c.rel === "stylesheet")
            if (typeof pu != "string" || c.disabled != null || c.onLoad || c.onError) {
              if (typeof pu == "string") {
                if (c.disabled != null)
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and a `disabled` prop. The presence of the `disabled` prop indicates an intent to manage the stylesheet active state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the `disabled` prop, otherwise remove the `precedence` prop.'
                  );
                else if (c.onLoad || c.onError) {
                  var eo = c.onLoad && c.onError ? "`onLoad` and `onError` props" : c.onLoad ? "`onLoad` prop" : "`onError` prop";
                  console.error(
                    'React encountered a `<link rel="stylesheet" .../>` with a `precedence` prop and %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                    eo,
                    eo
                  );
                }
              }
              _o = nn(
                e,
                c
              );
            } else {
              var Ru = b.styles.get(pu), Io = h.styleResources.hasOwnProperty(
                Yn
              ) ? h.styleResources[Yn] : void 0;
              if (Io !== ft) {
                h.styleResources[Yn] = ft, Ru || (Ru = {
                  precedence: G(se(pu)),
                  rules: [],
                  hrefs: [],
                  sheets: /* @__PURE__ */ new Map()
                }, b.styles.set(pu, Ru));
                var rc = {
                  state: Kr,
                  props: Kt({}, c, {
                    "data-precedence": c.precedence,
                    precedence: null
                  })
                };
                if (Io) {
                  Io.length === 2 && Wt(rc.props, Io);
                  var xu = b.preloads.stylesheets.get(Yn);
                  xu && 0 < xu.length ? xu.length = 0 : rc.state = Qu;
                }
                Ru.sheets.set(Yn, rc), _ && _.stylesheets.add(rc);
              } else if (Ru) {
                var Kc = Ru.sheets.get(Yn);
                Kc && _ && _.stylesheets.add(Kc);
              }
              re && e.push(Ci), _o = null;
            }
          else
            c.onLoad || c.onError ? _o = nn(
              e,
              c
            ) : (re && e.push(Ci), _o = L ? null : nn(b.hoistableChunks, c));
          return _o;
        case "script":
          var Eu = c.async;
          if (typeof c.src != "string" || !c.src || !Eu || typeof Eu == "function" || typeof Eu == "symbol" || c.onLoad || c.onError || I.insertionMode === Ir || I.tagScope & 1 || c.itemProp != null)
            var mo = Ia(
              e,
              c
            );
          else {
            var to = c.src;
            if (c.type === "module")
              var _a = h.moduleScriptResources, no = b.preloads.moduleScripts;
            else
              _a = h.scriptResources, no = b.preloads.scripts;
            var lr = _a.hasOwnProperty(to) ? _a[to] : void 0;
            if (lr !== ft) {
              _a[to] = ft;
              var Gn = c;
              if (lr) {
                lr.length === 2 && (Gn = Kt({}, c), Wt(Gn, lr));
                var qc = no.get(to);
                qc && (qc.length = 0);
              }
              var ku = [];
              b.scripts.add(ku), Ia(ku, Gn);
            }
            re && e.push(Ci), mo = null;
          }
          return mo;
        case "style":
          var jc = I.insertionMode, Do = !!(I.tagScope & 1);
          if (Ct.call(c, "children")) {
            var Lo = c.children, Yc = Array.isArray(Lo) ? 2 > Lo.length ? Lo[0] : null : Lo;
            (typeof Yc == "function" || typeof Yc == "symbol" || Array.isArray(Yc)) && console.error(
              "React expect children of <style> tags to be a string, number, or object with a `toString` method but found %s instead. In browsers style Elements can only have `Text` Nodes as children.",
              typeof Yc == "function" ? "a Function" : typeof Yc == "symbol" ? "a Sybmol" : "an Array"
            );
          }
          var Bo = c.precedence, yl = c.href;
          if (jc === Ir || Do || c.itemProp != null || typeof Bo != "string" || typeof yl != "string" || yl === "") {
            e.push(et("style"));
            var ic = null, us = null, Pc;
            for (Pc in c)
              if (Ct.call(c, Pc)) {
                var $c = c[Pc];
                if ($c != null)
                  switch (Pc) {
                    case "children":
                      ic = $c;
                      break;
                    case "dangerouslySetInnerHTML":
                      us = $c;
                      break;
                    default:
                      we(
                        e,
                        Pc,
                        $c
                      );
                  }
              }
            e.push(jt);
            var Fc = Array.isArray(ic) ? 2 > ic.length ? ic[0] : null : ic;
            typeof Fc != "function" && typeof Fc != "symbol" && Fc !== null && Fc !== void 0 && e.push(
              G(Yt(Fc))
            ), me(
              e,
              us,
              ic
            ), e.push(wr("style"));
            var cs = null;
          } else {
            yl.includes(" ") && console.error(
              'React expected the `href` prop for a <style> tag opting into hoisting semantics using the `precedence` prop to not have any spaces but ecountered spaces instead. using spaces in this prop will cause hydration of this style to fail on the client. The href for the <style> where this ocurred is "%s".',
              yl
            );
            var Cu = b.styles.get(Bo), ss = h.styleResources.hasOwnProperty(yl) ? h.styleResources[yl] : void 0;
            if (ss !== ft) {
              h.styleResources[yl] = ft, ss && console.error(
                'React encountered a hoistable style tag for the same href as a preload: "%s". When using a style tag to inline styles you should not also preload it as a stylsheet.',
                yl
              ), Cu ? Cu.hrefs.push(
                G(se(yl))
              ) : (Cu = {
                precedence: G(
                  se(Bo)
                ),
                rules: [],
                hrefs: [G(se(yl))],
                sheets: /* @__PURE__ */ new Map()
              }, b.styles.set(
                Bo,
                Cu
              ));
              var Ac = Cu.rules, vi = null, fs = null, Rs;
              for (Rs in c)
                if (Ct.call(c, Rs)) {
                  var Is = c[Rs];
                  if (Is != null)
                    switch (Rs) {
                      case "children":
                        vi = Is;
                        break;
                      case "dangerouslySetInnerHTML":
                        fs = Is;
                    }
                }
              var hs = Array.isArray(vi) ? 2 > vi.length ? vi[0] : null : vi;
              typeof hs != "function" && typeof hs != "symbol" && hs !== null && hs !== void 0 && Ac.push(
                G(Yt(hs))
              ), me(Ac, fs, vi);
            }
            Cu && _ && _.styles.add(Cu), re && e.push(Ci), cs = void 0;
          }
          return cs;
        case "meta":
          if (I.insertionMode === Ir || I.tagScope & 1 || c.itemProp != null)
            var vf = yr(
              e,
              c,
              "meta"
            );
          else
            re && e.push(Ci), vf = L ? null : typeof c.charSet == "string" ? yr(b.charsetChunks, c, "meta") : c.name === "viewport" ? yr(b.viewportChunks, c, "meta") : yr(
              b.hoistableChunks,
              c,
              "meta"
            );
          return vf;
        case "listing":
        case "pre":
          e.push(et(n));
          var ds = null, gs = null, vs;
          for (vs in c)
            if (Ct.call(c, vs)) {
              var xs = c[vs];
              if (xs != null)
                switch (vs) {
                  case "children":
                    ds = xs;
                    break;
                  case "dangerouslySetInnerHTML":
                    gs = xs;
                    break;
                  default:
                    we(
                      e,
                      vs,
                      xs
                    );
                }
            }
          if (e.push(jt), gs != null) {
            if (ds != null)
              throw Error(
                "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
              );
            if (typeof gs != "object" || !("__html" in gs))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            var Gc = gs.__html;
            Gc != null && (typeof Gc == "string" && 0 < Gc.length && Gc[0] === `
` ? e.push(iu, G(Gc)) : (j(Gc), e.push(G("" + Gc))));
          }
          return typeof ds == "string" && ds[0] === `
` && e.push(iu), ds;
        case "img":
          var oa = c.src, Oi = c.srcSet;
          if (!(c.loading === "lazy" || !oa && !Oi || typeof oa != "string" && oa != null || typeof Oi != "string" && Oi != null) && c.fetchPriority !== "low" && !(I.tagScope & 3) && (typeof oa != "string" || oa[4] !== ":" || oa[0] !== "d" && oa[0] !== "D" || oa[1] !== "a" && oa[1] !== "A" || oa[2] !== "t" && oa[2] !== "T" || oa[3] !== "a" && oa[3] !== "A") && (typeof Oi != "string" || Oi[4] !== ":" || Oi[0] !== "d" && Oi[0] !== "D" || Oi[1] !== "a" && Oi[1] !== "A" || Oi[2] !== "t" && Oi[2] !== "T" || Oi[3] !== "a" && Oi[3] !== "A")) {
            var bf = typeof c.sizes == "string" ? c.sizes : void 0, is = Oi ? Oi + `
` + (bf || "") : oa, ms = b.preloads.images, es = ms.get(is);
            if (es)
              (c.fetchPriority === "high" || 10 > b.highImagePreloads.size) && (ms.delete(is), b.highImagePreloads.add(es));
            else if (!h.imageResources.hasOwnProperty(is)) {
              h.imageResources[is] = rt;
              var Ds = c.crossOrigin, yf = typeof Ds == "string" ? Ds === "use-credentials" ? Ds : "" : void 0, ts = b.headers, Ls;
              ts && 0 < ts.remainingCapacity && typeof c.srcSet != "string" && (c.fetchPriority === "high" || 500 > ts.highImagePreloads.length) && (Ls = La(oa, "image", {
                imageSrcSet: c.srcSet,
                imageSizes: c.sizes,
                crossOrigin: yf,
                integrity: c.integrity,
                nonce: c.nonce,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.refererPolicy
              }), 0 <= (ts.remainingCapacity -= Ls.length + 2)) ? (b.resets.image[is] = rt, ts.highImagePreloads && (ts.highImagePreloads += ", "), ts.highImagePreloads += Ls) : (es = [], nn(es, {
                rel: "preload",
                as: "image",
                href: Oi ? void 0 : oa,
                imageSrcSet: Oi,
                imageSizes: bf,
                crossOrigin: yf,
                integrity: c.integrity,
                type: c.type,
                fetchPriority: c.fetchPriority,
                referrerPolicy: c.referrerPolicy
              }), c.fetchPriority === "high" || 10 > b.highImagePreloads.size ? b.highImagePreloads.add(es) : (b.bulkPreloads.add(es), ms.set(is, es)));
            }
          }
          return yr(e, c, "img");
        case "base":
        case "area":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "param":
        case "source":
        case "track":
        case "wbr":
          return yr(e, c, n);
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          break;
        case "head":
          if (I.insertionMode < sn) {
            var Bs = p || b.preamble;
            if (Bs.headChunks)
              throw Error("The `<head>` tag may only be rendered once.");
            Bs.headChunks = [];
            var wf = Cn(
              Bs.headChunks,
              c,
              "head"
            );
          } else
            wf = Qt(
              e,
              c,
              "head"
            );
          return wf;
        case "body":
          if (I.insertionMode < sn) {
            var Ws = p || b.preamble;
            if (Ws.bodyChunks)
              throw Error("The `<body>` tag may only be rendered once.");
            Ws.bodyChunks = [];
            var Tf = Cn(
              Ws.bodyChunks,
              c,
              "body"
            );
          } else
            Tf = Qt(
              e,
              c,
              "body"
            );
          return Tf;
        case "html":
          if (I.insertionMode === ii) {
            var Ns = p || b.preamble;
            if (Ns.htmlChunks)
              throw Error("The `<html>` tag may only be rendered once.");
            Ns.htmlChunks = [_n];
            var pf = Cn(
              Ns.htmlChunks,
              c,
              "html"
            );
          } else
            pf = Qt(
              e,
              c,
              "html"
            );
          return pf;
        default:
          if (n.indexOf("-") !== -1) {
            e.push(et(n));
            var Hs = null, Rf = null, as;
            for (as in c)
              if (Ct.call(c, as)) {
                var Su = c[as];
                if (Su != null) {
                  var xf = as;
                  switch (as) {
                    case "children":
                      Hs = Su;
                      break;
                    case "dangerouslySetInnerHTML":
                      Rf = Su;
                      break;
                    case "style":
                      pt(e, Su);
                      break;
                    case "suppressContentEditableWarning":
                    case "suppressHydrationWarning":
                    case "ref":
                      break;
                    case "className":
                      xf = "class";
                    default:
                      if (Ae(as) && typeof Su != "function" && typeof Su != "symbol" && Su !== !1) {
                        if (Su === !0)
                          Su = "";
                        else if (typeof Su == "object")
                          continue;
                        e.push(
                          On,
                          G(xf),
                          hr,
                          G(
                            se(Su)
                          ),
                          qt
                        );
                      }
                  }
                }
              }
            return e.push(jt), me(
              e,
              Rf,
              Hs
            ), Hs;
          }
      }
      return Qt(e, c, n);
    }
    function wr(e) {
      var n = Bl.get(e);
      return n === void 0 && (n = U("</" + e + ">"), Bl.set(e, n)), n;
    }
    function Sn(e, n) {
      e = e.preamble, e.htmlChunks === null && n.htmlChunks && (e.htmlChunks = n.htmlChunks, n.contribution |= 1), e.headChunks === null && n.headChunks && (e.headChunks = n.headChunks, n.contribution |= 4), e.bodyChunks === null && n.bodyChunks && (e.bodyChunks = n.bodyChunks, n.contribution |= 2);
    }
    function Ln(e, n) {
      n = n.bootstrapChunks;
      for (var c = 0; c < n.length - 1; c++)
        k(e, n[c]);
      return c < n.length ? (c = n[c], n.length = 0, B(e, c)) : !0;
    }
    function Fu(e, n, c) {
      if (k(e, lu), c === null)
        throw Error(
          "An ID must have been assigned before we can complete the boundary."
        );
      return k(e, n.boundaryPrefix), k(e, G(c.toString(16))), B(e, Vr);
    }
    function Au(e, n) {
      n = n.contribution, n !== er && (k(e, Xu), k(e, G("" + n)), k(e, cu));
    }
    function wl(e, n, c, h) {
      switch (c.insertionMode) {
        case ii:
        case _r:
        case Qr:
        case sn:
          return k(e, Fi), k(e, n.segmentPrefix), k(e, G(h.toString(16))), B(e, Ea);
        case Ir:
          return k(e, Nl), k(e, n.segmentPrefix), k(e, G(h.toString(16))), B(e, su);
        case ki:
          return k(e, al), k(e, n.segmentPrefix), k(e, G(h.toString(16))), B(e, ll);
        case ai:
          return k(e, Hl), k(e, n.segmentPrefix), k(e, G(h.toString(16))), B(e, zl);
        case Jr:
          return k(e, i), k(e, n.segmentPrefix), k(e, G(h.toString(16))), B(e, l);
        case Uu:
          return k(e, v), k(e, n.segmentPrefix), k(e, G(h.toString(16))), B(e, w);
        case Ta:
          return k(e, O), k(e, n.segmentPrefix), k(e, G(h.toString(16))), B(e, K);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Mu(e, n) {
      switch (n.insertionMode) {
        case ii:
        case _r:
        case Qr:
        case sn:
          return B(e, Ro);
        case Ir:
          return B(e, xo);
        case ki:
          return B(e, ol);
        case ai:
          return B(e, fu);
        case Jr:
          return B(e, s);
        case Uu:
          return B(e, E);
        case Ta:
          return B(e, m);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function sa(e) {
      return JSON.stringify(e).replace(
        $t,
        function(n) {
          switch (n) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function ma(e) {
      return JSON.stringify(e).replace(
        rr,
        function(n) {
          switch (n) {
            case "&":
              return "\\u0026";
            case ">":
              return "\\u003e";
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw Error(
                "escapeJSObjectForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        }
      );
    }
    function No(e) {
      var n = e.rules, c = e.hrefs;
      0 < n.length && c.length === 0 && console.error(
        "React expected to have at least one href for an a hoistable style but found none. This is a bug in React."
      );
      var h = 0;
      if (c.length) {
        for (k(this, Ul), k(this, e.precedence), k(this, ka); h < c.length - 1; h++)
          k(this, c[h]), k(this, Dc);
        for (k(this, c[h]), k(this, Ca), h = 0; h < n.length; h++) k(this, n[h]);
        Tc = B(
          this,
          Yl
        ), Sa = !0, n.length = 0, c.length = 0;
      }
    }
    function ro(e) {
      return e.state !== Ju ? Sa = !0 : !1;
    }
    function Tl(e, n, c) {
      return Sa = !1, Tc = !0, n.styles.forEach(No, e), n.stylesheets.forEach(ro), Sa && (c.stylesToHoist = !0), Tc;
    }
    function wt(e) {
      for (var n = 0; n < e.length; n++) k(this, e[n]);
      e.length = 0;
    }
    function Sr(e) {
      nn(ul, e.props);
      for (var n = 0; n < ul.length; n++)
        k(this, ul[n]);
      ul.length = 0, e.state = Ju;
    }
    function Ho(e) {
      var n = 0 < e.sheets.size;
      e.sheets.forEach(Sr, this), e.sheets.clear();
      var c = e.rules, h = e.hrefs;
      if (!n || h.length) {
        if (k(this, Zc), k(this, e.precedence), e = 0, h.length) {
          for (k(this, Qc); e < h.length - 1; e++)
            k(this, h[e]), k(this, Dc);
          k(this, h[e]);
        }
        for (k(this, Zu), e = 0; e < c.length; e++)
          k(this, c[e]);
        k(this, Jc), c.length = 0, h.length = 0;
      }
    }
    function Da(e) {
      if (e.state === Kr) {
        e.state = Qu;
        var n = e.props;
        for (nn(ul, {
          rel: "preload",
          as: "style",
          href: e.props.href,
          crossOrigin: n.crossOrigin,
          fetchPriority: n.fetchPriority,
          integrity: n.integrity,
          media: n.media,
          hrefLang: n.hrefLang,
          referrerPolicy: n.referrerPolicy
        }), e = 0; e < ul.length; e++)
          k(this, ul[e]);
        ul.length = 0;
      }
    }
    function bi(e) {
      e.sheets.forEach(Da, this), e.sheets.clear();
    }
    function Ou(e, n) {
      k(e, Lc);
      var c = Lc;
      n.stylesheets.forEach(function(h) {
        if (h.state !== Ju)
          if (h.state === pc)
            k(e, c), h = h.props.href, Ge(h, "href"), k(
              e,
              G(
                ma("" + h)
              )
            ), k(e, Bc), c = Qi;
          else {
            k(e, c);
            var b = h.props["data-precedence"], p = h.props, _ = Ee("" + h.props.href);
            k(
              e,
              G(ma(_))
            ), Ge(b, "precedence"), b = "" + b, k(e, Lr), k(
              e,
              G(ma(b))
            );
            for (var I in p)
              if (Ct.call(p, I) && (b = p[I], b != null))
                switch (I) {
                  case "href":
                  case "rel":
                  case "precedence":
                  case "data-precedence":
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      "link is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    lc(
                      e,
                      I,
                      b
                    );
                }
            k(e, Bc), c = Qi, h.state = pc;
          }
      }), k(e, Bc);
    }
    function lc(e, n, c) {
      var h = n.toLowerCase();
      switch (typeof c) {
        case "function":
        case "symbol":
          return;
      }
      switch (n) {
        case "innerHTML":
        case "dangerouslySetInnerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "style":
        case "ref":
          return;
        case "className":
          h = "class", Ge(c, h), n = "" + c;
          break;
        case "hidden":
          if (c === !1) return;
          n = "";
          break;
        case "src":
        case "href":
          c = Ee(c), Ge(c, h), n = "" + c;
          break;
        default:
          if (2 < n.length && (n[0] === "o" || n[0] === "O") && (n[1] === "n" || n[1] === "N") || !Ae(n))
            return;
          Ge(c, h), n = "" + c;
      }
      k(e, Lr), k(
        e,
        G(ma(h))
      ), k(e, Lr), k(
        e,
        G(ma(n))
      );
    }
    function _u() {
      return { styles: /* @__PURE__ */ new Set(), stylesheets: /* @__PURE__ */ new Set() };
    }
    function zo(e, n, c, h) {
      (e.scriptResources.hasOwnProperty(c) || e.moduleScriptResources.hasOwnProperty(c)) && console.error(
        'Internal React Error: React expected bootstrap script or module with src "%s" to not have been preloaded already. please file an issue',
        c
      ), e.scriptResources[c] = ft, e.moduleScriptResources[c] = ft, e = [], nn(e, h), n.bootstrapScripts.add(e);
    }
    function Wt(e, n) {
      e.crossOrigin == null && (e.crossOrigin = n[0]), e.integrity == null && (e.integrity = n[1]);
    }
    function La(e, n, c) {
      e = Bn(e), n = yn(n, "as"), n = "<" + e + '>; rel=preload; as="' + n + '"';
      for (var h in c)
        Ct.call(c, h) && (e = c[h], typeof e == "string" && (n += "; " + h.toLowerCase() + '="' + yn(
          e,
          h
        ) + '"'));
      return n;
    }
    function Bn(e) {
      return Ge(e, "href"), ("" + e).replace(
        Rc,
        zr
      );
    }
    function zr(e) {
      switch (e) {
        case "<":
          return "%3C";
        case ">":
          return "%3E";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeLinkHrefForHeaderContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function yn(e, n) {
      return he(e) && (console.error(
        "The provided `%s` option is an unsupported type %s. This value must be coerced to a string before using it here.",
        n,
        Et(e)
      ), pe(e)), ("" + e).replace(
        Zt,
        pl
      );
    }
    function pl(e) {
      switch (e) {
        case '"':
          return "%22";
        case "'":
          return "%27";
        case ";":
          return "%3B";
        case ",":
          return "%2C";
        case `
`:
          return "%0A";
        case "\r":
          return "%0D";
        default:
          throw Error(
            "escapeStringForLinkHeaderQuotedParamValueContextReplacer encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    }
    function Ur(e) {
      this.styles.add(e);
    }
    function Pn(e) {
      this.stylesheets.add(e);
    }
    function Gt(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Eo ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Yi:
          return "Fragment";
        case Il:
          return "Profiler";
        case Ko:
          return "StrictMode";
        case fo:
          return "Suspense";
        case Ri:
          return "SuspenseList";
        case ja:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Ti:
            return "Portal";
          case pi:
            return (e.displayName || "Context") + ".Provider";
          case Ka:
            return (e._context.displayName || "Context") + ".Consumer";
          case qa:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Xt:
            return n = e.displayName || null, n !== null ? n : Gt(e.type) || "Memo";
          case wn:
            n = e._payload, e = e._init;
            try {
              return Gt(e(n));
            } catch {
            }
        }
      return null;
    }
    function Ba(e, n) {
      if (e !== n) {
        e.context._currentValue = e.parentValue, e = e.parent;
        var c = n.parent;
        if (e === null) {
          if (c !== null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
        } else {
          if (c === null)
            throw Error(
              "The stacks must reach the root at the same time. This is a bug in React."
            );
          Ba(e, c);
        }
        n.context._currentValue = n.value;
      }
    }
    function Pr(e) {
      e.context._currentValue = e.parentValue, e = e.parent, e !== null && Pr(e);
    }
    function Yr(e) {
      var n = e.parent;
      n !== null && Yr(n), e.context._currentValue = e.value;
    }
    function oc(e, n) {
      if (e.context._currentValue = e.parentValue, e = e.parent, e === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === n.depth ? Ba(e, n) : oc(e, n);
    }
    function io(e, n) {
      var c = n.parent;
      if (c === null)
        throw Error(
          "The depth must equal at least at zero before reaching the root. This is a bug in React."
        );
      e.depth === c.depth ? Ba(e, c) : io(e, c), n.context._currentValue = n.value;
    }
    function vt(e) {
      var n = Ji;
      n !== e && (n === null ? Yr(e) : e === null ? Pr(n) : n.depth === e.depth ? Ba(n, e) : n.depth > e.depth ? oc(n, e) : io(n, e), Ji = e);
    }
    function zt(e) {
      if (e !== null && typeof e != "function") {
        var n = String(e);
        Ki.has(n) || (Ki.add(n), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Rl(e, n) {
      e = (e = e.constructor) && Gt(e) || "ReactClass";
      var c = e + "." + n;
      Xl[c] || (console.error(
        `Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
        n,
        e
      ), Xl[c] = !0);
    }
    function Xn(e, n, c) {
      var h = e.id;
      e = e.overflow;
      var b = 32 - Ku(h) - 1;
      h &= ~(1 << b), c += 1;
      var p = 32 - Ku(n) + b;
      if (30 < p) {
        var _ = b - b % 5;
        return p = (h & (1 << _) - 1).toString(32), h >>= _, b -= _, {
          id: 1 << 32 - Ku(n) + b | c << b | h,
          overflow: p + e
        };
      }
      return {
        id: 1 << p | c << b | h,
        overflow: e
      };
    }
    function xl(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (qu(e) / Vc | 0) | 0;
    }
    function Ii() {
    }
    function Mc(e, n, c) {
      switch (c = e[c], c === void 0 ? e.push(n) : c !== n && (n.then(Ii, Ii), n = c), n.status) {
        case "fulfilled":
          return n.value;
        case "rejected":
          throw n.reason;
        default:
          switch (typeof n.status == "string" ? n.then(Ii, Ii) : (e = n, e.status = "pending", e.then(
            function(h) {
              if (n.status === "pending") {
                var b = n;
                b.status = "fulfilled", b.value = h;
              }
            },
            function(h) {
              if (n.status === "pending") {
                var b = n;
                b.status = "rejected", b.reason = h;
              }
            }
          )), n.status) {
            case "fulfilled":
              return n.value;
            case "rejected":
              throw n.reason;
          }
          throw Ql = n, qi;
      }
    }
    function El() {
      if (Ql === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Ql;
      return Ql = null, e;
    }
    function Oc(e, n) {
      return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    function mi() {
      if (Pa === null)
        throw Error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        );
      return en && console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      ), Pa;
    }
    function Zn() {
      if (0 < $r)
        throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function Iu() {
      return Mt === null ? gu === null ? (sl = !1, gu = Mt = Zn()) : (sl = !0, Mt = gu) : Mt.next === null ? (sl = !1, Mt = Mt.next = Zn()) : (sl = !0, Mt = Mt.next), Mt;
    }
    function yi() {
      var e = bu;
      return bu = null, e;
    }
    function Fr() {
      en = !1, Fa = Ec = du = Pa = null, Co = !1, gu = null, $r = 0, Mt = dn = null;
    }
    function ao(e) {
      return en && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), e._currentValue;
    }
    function Wa(e, n) {
      return typeof n == "function" ? n(e) : n;
    }
    function Di(e, n, c) {
      if (e !== Wa && (Vl = "useReducer"), Pa = mi(), Mt = Iu(), sl) {
        if (c = Mt.queue, n = c.dispatch, dn !== null) {
          var h = dn.get(c);
          if (h !== void 0) {
            dn.delete(c), c = Mt.memoizedState;
            do {
              var b = h.action;
              en = !0, c = e(c, b), en = !1, h = h.next;
            } while (h !== null);
            return Mt.memoizedState = c, [c, n];
          }
        }
        return [Mt.memoizedState, n];
      }
      return en = !0, e = e === Wa ? typeof n == "function" ? n() : n : c !== void 0 ? c(n) : n, en = !1, Mt.memoizedState = e, e = Mt.queue = { last: null, dispatch: null }, e = e.dispatch = mu.bind(
        null,
        Pa,
        e
      ), [Mt.memoizedState, e];
    }
    function Na(e, n) {
      if (Pa = mi(), Mt = Iu(), n = n === void 0 ? null : n, Mt !== null) {
        var c = Mt.memoizedState;
        if (c !== null && n !== null) {
          e: {
            var h = c[1];
            if (h === null)
              console.error(
                "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
                Vl
              ), h = !1;
            else {
              n.length !== h.length && console.error(
                `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
                Vl,
                "[" + n.join(", ") + "]",
                "[" + h.join(", ") + "]"
              );
              for (var b = 0; b < h.length && b < n.length; b++)
                if (!Hc(n[b], h[b])) {
                  h = !1;
                  break e;
                }
              h = !0;
            }
          }
          if (h) return c[0];
        }
      }
      return en = !0, e = e(), en = !1, Mt.memoizedState = [e, n], e;
    }
    function mu(e, n, c) {
      if (25 <= $r)
        throw Error(
          "Too many re-renders. React limits the number of renders to prevent an infinite loop."
        );
      if (e === Pa)
        if (Co = !0, e = { action: c, next: null }, dn === null && (dn = /* @__PURE__ */ new Map()), c = dn.get(n), c === void 0)
          dn.set(n, e);
        else {
          for (n = c; n.next !== null; ) n = n.next;
          n.next = e;
        }
    }
    function _c() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function fa() {
      throw Error("Cannot update optimistic state while rendering.");
    }
    function Jt(e, n, c) {
      mi();
      var h = So++, b = Ec;
      if (typeof e.$$FORM_ACTION == "function") {
        var p = null, _ = Fa;
        b = b.formState;
        var I = e.$$IS_SIGNATURE_EQUAL;
        if (b !== null && typeof I == "function") {
          var re = b[1];
          I.call(e, b[2], b[3]) && (p = c !== void 0 ? "p" + c : "k" + C(
            JSON.stringify([
              _,
              null,
              h
            ]),
            0
          ), re === p && (ju = h, n = b[0]));
        }
        var L = e.bind(null, n);
        return e = function(ye) {
          L(ye);
        }, typeof L.$$FORM_ACTION == "function" && (e.$$FORM_ACTION = function(ye) {
          ye = L.$$FORM_ACTION(ye), c !== void 0 && (Ge(c, "target"), c += "", ye.action = c);
          var Oe = ye.data;
          return Oe && (p === null && (p = c !== void 0 ? "p" + c : "k" + C(
            JSON.stringify([
              _,
              null,
              h
            ]),
            0
          )), Oe.append("$ACTION_KEY", p)), ye;
        }), [n, e, !1];
      }
      var Te = e.bind(null, n);
      return [
        n,
        function(ye) {
          Te(ye);
        },
        !1
      ];
    }
    function Uo(e) {
      var n = vu;
      return vu += 1, bu === null && (bu = []), Mc(bu, e, n);
    }
    function uc() {
      throw Error("Cache cannot be refreshed during server rendering.");
    }
    function lo() {
    }
    function or() {
    }
    function cc() {
      if (ji === 0) {
        Po = console.log, zc = console.info, wu = console.warn, $u = console.error, Tu = console.group, t = console.groupCollapsed, r = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: or,
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
      ji++;
    }
    function Ha() {
      if (ji--, ji === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Kt({}, e, { value: Po }),
          info: Kt({}, e, { value: zc }),
          warn: Kt({}, e, { value: wu }),
          error: Kt({}, e, { value: $u }),
          group: Kt({}, e, { value: Tu }),
          groupCollapsed: Kt({}, e, { value: t }),
          groupEnd: Kt({}, e, { value: r })
        });
      }
      0 > ji && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function ni(e) {
      if (u === void 0)
        try {
          throw Error();
        } catch (c) {
          var n = c.stack.trim().match(/\n( *(at )?)/);
          u = n && n[1] || "", d = -1 < c.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < c.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + u + e + d;
    }
    function ha(e, n) {
      if (!e || y) return "";
      var c = R.get(e);
      if (c !== void 0) return c;
      y = !0, c = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var h = null;
      h = Le.H, Le.H = null, cc();
      try {
        var b = {
          DetermineComponentFrameRoot: function() {
            try {
              if (n) {
                var Oe = function() {
                  throw Error();
                };
                if (Object.defineProperty(Oe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Oe, []);
                  } catch (be) {
                    var Pe = be;
                  }
                  Reflect.construct(e, [], Oe);
                } else {
                  try {
                    Oe.call();
                  } catch (be) {
                    Pe = be;
                  }
                  e.call(Oe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (be) {
                  Pe = be;
                }
                (Oe = e()) && typeof Oe.catch == "function" && Oe.catch(function() {
                });
              }
            } catch (be) {
              if (be && Pe && typeof be.stack == "string")
                return [be.stack, Pe.stack];
            }
            return [null, null];
          }
        };
        b.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var p = Object.getOwnPropertyDescriptor(
          b.DetermineComponentFrameRoot,
          "name"
        );
        p && p.configurable && Object.defineProperty(
          b.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var _ = b.DetermineComponentFrameRoot(), I = _[0], re = _[1];
        if (I && re) {
          var L = I.split(`
`), Te = re.split(`
`);
          for (_ = p = 0; p < L.length && !L[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          for (; _ < Te.length && !Te[_].includes(
            "DetermineComponentFrameRoot"
          ); )
            _++;
          if (p === L.length || _ === Te.length)
            for (p = L.length - 1, _ = Te.length - 1; 1 <= p && 0 <= _ && L[p] !== Te[_]; )
              _--;
          for (; 1 <= p && 0 <= _; p--, _--)
            if (L[p] !== Te[_]) {
              if (p !== 1 || _ !== 1)
                do
                  if (p--, _--, 0 > _ || L[p] !== Te[_]) {
                    var ye = `
` + L[p].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ye.includes("<anonymous>") && (ye = ye.replace("<anonymous>", e.displayName)), typeof e == "function" && R.set(e, ye), ye;
                  }
                while (1 <= p && 0 <= _);
              break;
            }
        }
      } finally {
        y = !1, Le.H = h, Ha(), Error.prepareStackTrace = c;
      }
      return L = (L = e ? e.displayName || e.name : "") ? ni(L) : "", typeof e == "function" && R.set(e, L), L;
    }
    function kl(e) {
      var n = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = n, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), n = e.indexOf(`
`), n !== -1 && (e = e.slice(n + 1)), n = e.indexOf("react_stack_bottom_frame"), n !== -1 && (n = e.lastIndexOf(
        `
`,
        n
      )), n !== -1)
        e = e.slice(0, n);
      else return "";
      return e;
    }
    function Yo(e) {
      if (typeof e == "string") return ni(e);
      if (typeof e == "function")
        return e.prototype && e.prototype.isReactComponent ? ha(e, !0) : ha(e, !1);
      if (typeof e == "object" && e !== null) {
        switch (e.$$typeof) {
          case qa:
            return ha(e.render, !1);
          case Xt:
            return ha(e.type, !1);
          case wn:
            var n = e, c = n._payload;
            n = n._init;
            try {
              e = n(c);
            } catch {
              return ni("Lazy");
            }
            return Yo(e);
        }
        if (typeof e.name == "string")
          return c = e.env, ni(
            e.name + (c ? " [" + c + "]" : "")
          );
      }
      switch (e) {
        case Ri:
          return ni("SuspenseList");
        case fo:
          return ni("Suspense");
      }
      return "";
    }
    function Cl(e) {
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var n = e.environmentName;
        e = [e].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          "%c%s%c " + e[0],
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + n + " ",
          ""
        ) : e.splice(
          0,
          0,
          "%c%s%c ",
          "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
          " " + n + " ",
          ""
        ), e.unshift(console), n = Vu.apply(console.error, e), n();
      } else console.error(e);
      return null;
    }
    function Gr() {
    }
    function za(e, n, c, h, b, p, _, I, re, L, Te) {
      var ye = /* @__PURE__ */ new Set();
      this.destination = null, this.flushScheduled = !1, this.resumableState = e, this.renderState = n, this.rootFormatContext = c, this.progressiveChunkSize = h === void 0 ? 12800 : h, this.status = 10, this.fatalError = null, this.pendingRootTasks = this.allPendingTasks = this.nextSegmentId = 0, this.completedPreambleSegments = this.completedRootSegment = null, this.abortableTasks = ye, this.pingedTasks = [], this.clientRenderedBoundaries = [], this.completedBoundaries = [], this.partialBoundaries = [], this.trackedPostpones = null, this.onError = b === void 0 ? Cl : b, this.onPostpone = L === void 0 ? Gr : L, this.onAllReady = p === void 0 ? Gr : p, this.onShellReady = _ === void 0 ? Gr : _, this.onShellError = I === void 0 ? Gr : I, this.onFatalError = re === void 0 ? Gr : re, this.formState = Te === void 0 ? null : Te, this.didWarnForKey = null;
    }
    function Sl(e, n, c, h, b, p, _, I, re, L, Te, ye) {
      var Oe = ve();
      return 1e3 < Oe - _e && (Le.recentlyCreatedOwnerStacks = 0, _e = Oe), n = new za(
        n,
        c,
        h,
        b,
        p,
        _,
        I,
        re,
        L,
        Te,
        ye
      ), c = Xr(
        n,
        0,
        null,
        h,
        !1,
        !1
      ), c.parentFlushed = !0, e = Bi(
        n,
        null,
        e,
        -1,
        null,
        c,
        null,
        null,
        n.abortableTasks,
        null,
        h,
        null,
        xc,
        null,
        !1,
        xn,
        null
      ), Wi(e), n.pingedTasks.push(e), n;
    }
    function da(e, n, c, h, b, p, _, I, re, L, Te) {
      return e = Sl(
        e,
        n,
        c,
        h,
        b,
        p,
        _,
        I,
        re,
        L,
        Te,
        void 0
      ), e.trackedPostpones = {
        workingMap: /* @__PURE__ */ new Map(),
        rootNodes: [],
        rootSlots: null
      }, e;
    }
    function Li(e, n) {
      e.pingedTasks.push(n), e.pingedTasks.length === 1 && (e.flushScheduled = e.destination !== null, e.trackedPostpones !== null || e.status === 10 ? Ic(function() {
        return Al(e);
      }) : q(function() {
        return Al(e);
      }));
    }
    function Qn(e, n, c, h) {
      return {
        status: je,
        rootSegmentID: -1,
        parentFlushed: !1,
        pendingTasks: 0,
        completedSegments: [],
        byteSize: 0,
        fallbackAbortableTasks: n,
        errorDigest: null,
        contentState: _u(),
        fallbackState: _u(),
        contentPreamble: c,
        fallbackPreamble: h,
        trackedContentKeyPath: null,
        trackedFallbackNode: null,
        errorMessage: null,
        errorStack: null,
        errorComponentStack: null
      };
    }
    function Bi(e, n, c, h, b, p, _, I, re, L, Te, ye, Oe, Pe, be, ht, Ot) {
      e.allPendingTasks++, b === null ? e.pendingRootTasks++ : b.pendingTasks++;
      var ut = {
        replay: null,
        node: c,
        childIndex: h,
        ping: function() {
          return Li(e, ut);
        },
        blockedBoundary: b,
        blockedSegment: p,
        blockedPreamble: _,
        hoistableState: I,
        abortSet: re,
        keyPath: L,
        formatContext: Te,
        context: ye,
        treeContext: Oe,
        componentStack: Pe,
        thenableState: n,
        isFallback: be
      };
      return ut.debugTask = Ot, re.add(ut), ut;
    }
    function sc(e, n, c, h, b, p, _, I, re, L, Te, ye, Oe, Pe, be, ht) {
      e.allPendingTasks++, p === null ? e.pendingRootTasks++ : p.pendingTasks++, c.pendingTasks++;
      var Ot = {
        replay: c,
        node: h,
        childIndex: b,
        ping: function() {
          return Li(e, Ot);
        },
        blockedBoundary: p,
        blockedSegment: null,
        blockedPreamble: null,
        hoistableState: _,
        abortSet: I,
        keyPath: re,
        formatContext: L,
        context: Te,
        treeContext: ye,
        componentStack: Oe,
        thenableState: n,
        isFallback: Pe
      };
      return Ot.debugTask = ht, I.add(Ot), Ot;
    }
    function Xr(e, n, c, h, b, p) {
      return {
        status: je,
        parentFlushed: !1,
        id: -1,
        index: n,
        chunks: [],
        children: [],
        preambleChildren: [],
        parentFormatContext: h,
        boundary: c,
        lastPushedText: b,
        textEmbedded: p
      };
    }
    function ga() {
      if (Ut === null || Ut.componentStack === null)
        return "";
      var e = Ut.componentStack;
      try {
        var n = "";
        if (typeof e.type == "string")
          n += ni(e.type);
        else if (typeof e.type == "function") {
          if (!e.owner) {
            var c = n, h = e.type, b = h ? h.displayName || h.name : "", p = b ? ni(b) : "";
            n = c + p;
          }
        } else
          e.owner || (n += Yo(e.type));
        for (; e; )
          c = null, e.debugStack != null ? c = kl(
            e.debugStack
          ) : (p = e, p.stack != null && (c = typeof p.stack != "string" ? p.stack = kl(
            p.stack
          ) : p.stack)), (e = e.owner) && c && (n += `
` + c);
        var _ = n;
      } catch (I) {
        _ = `
Error generating stack: ` + I.message + `
` + I.stack;
      }
      return _;
    }
    function oo(e, n) {
      if (n != null)
        for (var c = 0; c < n.length; c++) {
          var h = n[c];
          typeof h.name == "string" && h.debugStack !== void 0 && (e.componentStack = {
            parent: e.componentStack,
            type: h,
            owner: h.owner,
            stack: h.debugStack
          }, e.debugTask = h.debugTask);
        }
    }
    function Wi(e) {
      var n = e.node;
      if (typeof n == "object" && n !== null)
        switch (n.$$typeof) {
          case Va:
            var c = n.type, h = n._owner, b = n._debugStack;
            oo(e, n._debugInfo), e.debugTask = n._debugTask, e.componentStack = {
              parent: e.componentStack,
              type: c,
              owner: h,
              stack: b
            };
            break;
          case wn:
            oo(e, n._debugInfo);
            break;
          default:
            typeof n.then == "function" && oo(e, n._debugInfo);
        }
    }
    function on(e) {
      var n = {};
      return e && Object.defineProperty(n, "componentStack", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          try {
            var c = "", h = e;
            do
              c += Yo(h.type), h = h.parent;
            while (h);
            var b = c;
          } catch (p) {
            b = `
Error generating stack: ` + p.message + `
` + p.stack;
          }
          return Object.defineProperty(n, "componentStack", {
            value: b
          }), b;
        }
      }), n;
    }
    function Ua(e, n, c, h, b) {
      e.errorDigest = n, c instanceof Error ? (n = String(c.message), c = String(c.stack)) : (n = typeof c == "object" && c !== null ? Y(c) : String(c), c = null), b = b ? `Switched to client rendering because the server rendering aborted due to:

` : `Switched to client rendering because the server rendering errored:

`, e.errorMessage = b + n, e.errorStack = c !== null ? b + c : null, e.errorComponentStack = h.componentStack;
    }
    function Tr(e, n, c, h) {
      if (e = e.onError, n = h ? h.run(e.bind(null, n, c)) : e(n, c), n != null && typeof n != "string")
        console.error(
          'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "%s" instead',
          typeof n
        );
      else return n;
    }
    function pr(e, n, c, h) {
      c = e.onShellError;
      var b = e.onFatalError;
      h ? (h.run(c.bind(null, n)), h.run(b.bind(null, n))) : (c(n), b(n)), e.destination !== null ? (e.status = yt, fe(e.destination, n)) : (e.status = 13, e.fatalError = n);
    }
    function Go(e, n, c, h, b, p) {
      var _ = n.thenableState;
      for (n.thenableState = null, Pa = {}, du = n, Ec = e, Fa = c, en = !1, So = Jl = 0, ju = -1, vu = 0, bu = _, e = W(h, b, p); Co; )
        Co = !1, So = Jl = 0, ju = -1, vu = 0, $r += 1, Mt = null, e = h(b, p);
      return Fr(), e;
    }
    function Xo(e, n, c, h, b, p, _) {
      var I = !1;
      if (p !== 0 && e.formState !== null) {
        var re = n.blockedSegment;
        if (re !== null) {
          I = !0, re = re.chunks;
          for (var L = 0; L < p; L++)
            L === _ ? re.push(tr) : re.push(Ra);
        }
      }
      p = n.keyPath, n.keyPath = c, b ? (c = n.treeContext, n.treeContext = Xn(c, 1, 0), Kn(e, n, h, -1), n.treeContext = c) : I ? Kn(e, n, h, -1) : Vn(e, n, h, -1), n.keyPath = p;
    }
    function Jn(e, n, c, h, b, p) {
      if (typeof h == "function")
        if (h.prototype && h.prototype.isReactComponent) {
          var _ = b;
          if ("ref" in b) {
            _ = {};
            for (var I in b)
              I !== "ref" && (_[I] = b[I]);
          }
          var re = h.defaultProps;
          if (re) {
            _ === b && (_ = Kt({}, _, b));
            for (var L in re)
              _[L] === void 0 && (_[L] = re[L]);
          }
          var Te = _, ye = xn, Oe = h.contextType;
          if ("contextType" in h && Oe !== null && (Oe === void 0 || Oe.$$typeof !== pi) && !Wc.has(h)) {
            Wc.add(h);
            var Pe = Oe === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof Oe != "object" ? " However, it is set to a " + typeof Oe + "." : Oe.$$typeof === Ka ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(Oe).join(", ") + "}.";
            console.error(
              "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
              Gt(h) || "Component",
              Pe
            );
          }
          typeof Oe == "object" && Oe !== null && (ye = Oe._currentValue);
          var be = new h(Te, ye);
          if (typeof h.getDerivedStateFromProps == "function" && (be.state === null || be.state === void 0)) {
            var ht = Gt(h) || "Component";
            qr.has(ht) || (qr.add(ht), console.error(
              "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
              ht,
              be.state === null ? "null" : "undefined",
              ht
            ));
          }
          if (typeof h.getDerivedStateFromProps == "function" || typeof be.getSnapshotBeforeUpdate == "function") {
            var Ot = null, ut = null, He = null;
            if (typeof be.componentWillMount == "function" && be.componentWillMount.__suppressDeprecationWarning !== !0 ? Ot = "componentWillMount" : typeof be.UNSAFE_componentWillMount == "function" && (Ot = "UNSAFE_componentWillMount"), typeof be.componentWillReceiveProps == "function" && be.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? ut = "componentWillReceiveProps" : typeof be.UNSAFE_componentWillReceiveProps == "function" && (ut = "UNSAFE_componentWillReceiveProps"), typeof be.componentWillUpdate == "function" && be.componentWillUpdate.__suppressDeprecationWarning !== !0 ? He = "componentWillUpdate" : typeof be.UNSAFE_componentWillUpdate == "function" && (He = "UNSAFE_componentWillUpdate"), Ot !== null || ut !== null || He !== null) {
              var kn = Gt(h) || "Component", Ht = typeof h.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
              jr.has(kn) || (jr.add(
                kn
              ), console.error(
                `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
                kn,
                Ht,
                Ot !== null ? `
  ` + Ot : "",
                ut !== null ? `
  ` + ut : "",
                He !== null ? `
  ` + He : ""
              ));
            }
          }
          var ct = Gt(h) || "Component";
          be.render || (h.prototype && typeof h.prototype.render == "function" ? console.error(
            "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
            ct
          ) : console.error(
            "No `render` method found on the %s instance: you may have forgotten to define `render`.",
            ct
          )), !be.getInitialState || be.getInitialState.isReactClassApproved || be.state || console.error(
            "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
            ct
          ), be.getDefaultProps && !be.getDefaultProps.isReactClassApproved && console.error(
            "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
            ct
          ), be.contextType && console.error(
            "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
            ct
          ), h.childContextTypes && !ui.has(h) && (ui.add(h), console.error(
            "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
            ct
          )), h.contextTypes && !Vi.has(h) && (Vi.add(h), console.error(
            "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
            ct
          )), typeof be.componentShouldUpdate == "function" && console.error(
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            ct
          ), h.prototype && h.prototype.isPureReactComponent && typeof be.shouldComponentUpdate < "u" && console.error(
            "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
            Gt(h) || "A pure component"
          ), typeof be.componentDidUnmount == "function" && console.error(
            "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
            ct
          ), typeof be.componentDidReceiveProps == "function" && console.error(
            "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
            ct
          ), typeof be.componentWillRecieveProps == "function" && console.error(
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            ct
          ), typeof be.UNSAFE_componentWillRecieveProps == "function" && console.error(
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            ct
          );
          var gr = be.props !== Te;
          be.props !== void 0 && gr && console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            ct
          ), be.defaultProps && console.error(
            "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
            ct,
            ct
          ), typeof be.getSnapshotBeforeUpdate != "function" || typeof be.componentDidUpdate == "function" || Zl.has(h) || (Zl.add(h), console.error(
            "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
            Gt(h)
          )), typeof be.getDerivedStateFromProps == "function" && console.error(
            "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            ct
          ), typeof be.getDerivedStateFromError == "function" && console.error(
            "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
            ct
          ), typeof h.getSnapshotBeforeUpdate == "function" && console.error(
            "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
            ct
          );
          var Br = be.state;
          Br && (typeof Br != "object" || Fn(Br)) && console.error("%s.state: must be set to an object or null", ct), typeof be.getChildContext == "function" && typeof h.childContextTypes != "object" && console.error(
            "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
            ct
          );
          var mn = be.state !== void 0 ? be.state : null;
          be.updater = Nc, be.props = Te, be.state = mn;
          var Hn = { queue: [], replace: !1 };
          be._reactInternals = Hn;
          var Vt = h.contextType;
          if (be.context = typeof Vt == "object" && Vt !== null ? Vt._currentValue : xn, be.state === Te) {
            var vr = Gt(h) || "Component";
            cl.has(
              vr
            ) || (cl.add(
              vr
            ), console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              vr
            ));
          }
          var br = h.getDerivedStateFromProps;
          if (typeof br == "function") {
            var gt = br(
              Te,
              mn
            );
            if (gt === void 0) {
              var ln = Gt(h) || "Component";
              hu.has(ln) || (hu.add(ln), console.error(
                "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                ln
              ));
            }
            var Bt = gt == null ? mn : Kt({}, mn, gt);
            be.state = Bt;
          }
          if (typeof h.getDerivedStateFromProps != "function" && typeof be.getSnapshotBeforeUpdate != "function" && (typeof be.UNSAFE_componentWillMount == "function" || typeof be.componentWillMount == "function")) {
            var Er = be.state;
            if (typeof be.componentWillMount == "function") {
              if (be.componentWillMount.__suppressDeprecationWarning !== !0) {
                var kr = Gt(h) || "Unknown";
                ko[kr] || (console.warn(
                  `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                  kr
                ), ko[kr] = !0);
              }
              be.componentWillMount();
            }
            if (typeof be.UNSAFE_componentWillMount == "function" && be.UNSAFE_componentWillMount(), Er !== be.state && (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              Gt(h) || "Component"
            ), Nc.enqueueReplaceState(
              be,
              be.state,
              null
            )), Hn.queue !== null && 0 < Hn.queue.length) {
              var zn = Hn.queue, $i = Hn.replace;
              if (Hn.queue = null, Hn.replace = !1, $i && zn.length === 1)
                be.state = zn[0];
              else {
                for (var ei = $i ? zn[0] : be.state, ea = !0, Fo = $i ? 1 : 0; Fo < zn.length; Fo++) {
                  var ta = zn[Fo], Kl = typeof ta == "function" ? ta.call(
                    be,
                    ei,
                    Te,
                    void 0
                  ) : ta;
                  Kl != null && (ea ? (ea = !1, ei = Kt(
                    {},
                    ei,
                    Kl
                  )) : Kt(ei, Kl));
                }
                be.state = ei;
              }
            } else Hn.queue = null;
          }
          var si = z(be);
          if (e.status === 12) throw null;
          be.props !== Te && (ci || console.error(
            "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
            Gt(h) || "a component"
          ), ci = !0);
          var Ao = n.keyPath;
          n.keyPath = c, Vn(e, n, si, -1), n.keyPath = Ao;
        } else {
          if (h.prototype && typeof h.prototype.render == "function") {
            var Cr = Gt(h) || "Unknown";
            ir[Cr] || (console.error(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              Cr,
              Cr
            ), ir[Cr] = !0);
          }
          var Un = Go(
            e,
            n,
            c,
            h,
            b,
            void 0
          );
          if (e.status === 12) throw null;
          var gn = Jl !== 0, Wr = So, fi = ju;
          if (h.contextTypes) {
            var ql = Gt(h) || "Unknown";
            En[ql] || (En[ql] = !0, console.error(
              "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
              ql
            ));
          }
          if (h && h.childContextTypes && console.error(
            `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
            h.displayName || h.name || "Component"
          ), typeof h.getDerivedStateFromProps == "function") {
            var hi = Gt(h) || "Unknown";
            an[hi] || (console.error(
              "%s: Function components do not support getDerivedStateFromProps.",
              hi
            ), an[hi] = !0);
          }
          if (typeof h.contextType == "object" && h.contextType !== null) {
            var na = Gt(h) || "Unknown";
            In[na] || (console.error(
              "%s: Function components do not support contextType.",
              na
            ), In[na] = !0);
          }
          Xo(
            e,
            n,
            c,
            Un,
            gn,
            Wr,
            fi
          );
        }
      else if (typeof h == "string") {
        var di = n.blockedSegment;
        if (di === null) {
          var ec = b.children, Dn = n.formatContext, Nr = n.keyPath;
          n.formatContext = Q(Dn, h, b), n.keyPath = c, Kn(e, n, ec, -1), n.formatContext = Dn, n.keyPath = Nr;
        } else {
          var Aa = bn(
            di.chunks,
            h,
            b,
            e.resumableState,
            e.renderState,
            n.blockedPreamble,
            n.hoistableState,
            n.formatContext,
            di.lastPushedText,
            n.isFallback
          );
          di.lastPushedText = !1;
          var Ma = n.formatContext, ra = n.keyPath;
          if (n.keyPath = c, (n.formatContext = Q(
            Ma,
            h,
            b
          )).insertionMode === Qr) {
            var jl = Xr(
              e,
              0,
              null,
              n.formatContext,
              !1,
              !1
            );
            di.preambleChildren.push(jl);
            var Ai = Bi(
              e,
              null,
              Aa,
              -1,
              n.blockedBoundary,
              jl,
              n.blockedPreamble,
              n.hoistableState,
              e.abortableTasks,
              n.keyPath,
              n.formatContext,
              n.context,
              n.treeContext,
              n.componentStack,
              n.isFallback,
              xn,
              n.debugTask
            );
            Wi(Ai), e.pingedTasks.push(Ai);
          } else Kn(e, n, Aa, -1);
          n.formatContext = Ma, n.keyPath = ra;
          e: {
            var hl = di.chunks, dl = e.resumableState;
            switch (h) {
              case "title":
              case "style":
              case "script":
              case "area":
              case "base":
              case "br":
              case "col":
              case "embed":
              case "hr":
              case "img":
              case "input":
              case "keygen":
              case "link":
              case "meta":
              case "param":
              case "source":
              case "track":
              case "wbr":
                break e;
              case "body":
                if (Ma.insertionMode <= _r) {
                  dl.hasBody = !0;
                  break e;
                }
                break;
              case "html":
                if (Ma.insertionMode === ii) {
                  dl.hasHtml = !0;
                  break e;
                }
                break;
              case "head":
                if (Ma.insertionMode <= _r) break e;
            }
            hl.push(wr(h));
          }
          di.lastPushedText = !1;
        }
      } else {
        switch (h) {
          case rn:
          case Ko:
          case Il:
          case Yi:
            var gl = n.keyPath;
            n.keyPath = c, Vn(e, n, b.children, -1), n.keyPath = gl;
            return;
          case ja:
            if (b.mode !== "hidden") {
              var vl = n.keyPath;
              n.keyPath = c, Vn(e, n, b.children, -1), n.keyPath = vl;
            }
            return;
          case Ri:
            var gi = n.keyPath;
            n.keyPath = c, Vn(e, n, b.children, -1), n.keyPath = gi;
            return;
          case Bu:
          case Mr:
            throw Error(
              "ReactDOMServer does not yet support scope components."
            );
          case fo:
            e: if (n.replay !== null) {
              var ia = n.keyPath;
              n.keyPath = c;
              var tc = b.children;
              try {
                Kn(e, n, tc, -1);
              } finally {
                n.keyPath = ia;
              }
            } else {
              var Mi = n.keyPath, Mo = n.blockedBoundary, Oo = n.blockedPreamble, Cc = n.hoistableState, Oa = n.blockedSegment, nc = b.fallback, ti = b.children, aa = /* @__PURE__ */ new Set(), vn = n.formatContext.insertionMode < sn ? Qn(
                e,
                aa,
                $(),
                $()
              ) : Qn(
                e,
                aa,
                null,
                null
              );
              e.trackedPostpones !== null && (vn.trackedContentKeyPath = c);
              var ar = Xr(
                e,
                Oa.chunks.length,
                vn,
                n.formatContext,
                !1,
                !1
              );
              Oa.children.push(ar), Oa.lastPushedText = !1;
              var Hr = Xr(
                e,
                0,
                null,
                n.formatContext,
                !1,
                !1
              );
              if (Hr.parentFlushed = !0, e.trackedPostpones !== null) {
                var Sc = [
                  c[0],
                  "Suspense Fallback",
                  c[2]
                ], la = [
                  Sc[1],
                  Sc[2],
                  [],
                  null
                ];
                e.trackedPostpones.workingMap.set(
                  Sc,
                  la
                ), vn.trackedFallbackNode = la, n.blockedSegment = ar, n.blockedPreamble = vn.fallbackPreamble, n.keyPath = Sc, ar.status = 6;
                try {
                  Kn(e, n, nc, -1), ar.lastPushedText && ar.textEmbedded && ar.chunks.push(Ci), ar.status = lt;
                } catch (Lo) {
                  throw ar.status = e.status === 12 ? 3 : 4, Lo;
                } finally {
                  n.blockedSegment = Oa, n.blockedPreamble = Oo, n.keyPath = Mi;
                }
                var bl = Bi(
                  e,
                  null,
                  ti,
                  -1,
                  vn,
                  Hr,
                  vn.contentPreamble,
                  vn.contentState,
                  n.abortSet,
                  c,
                  n.formatContext,
                  n.context,
                  n.treeContext,
                  n.componentStack,
                  n.isFallback,
                  xn,
                  n.debugTask
                );
                Wi(bl), e.pingedTasks.push(bl);
              } else {
                n.blockedBoundary = vn, n.blockedPreamble = vn.contentPreamble, n.hoistableState = vn.contentState, n.blockedSegment = Hr, n.keyPath = c, Hr.status = 6;
                try {
                  if (Kn(e, n, ti, -1), Hr.lastPushedText && Hr.textEmbedded && Hr.chunks.push(Ci), Hr.status = lt, Ui(vn, Hr), vn.pendingTasks === 0 && vn.status === je) {
                    vn.status = lt, e.pendingRootTasks === 0 && n.blockedPreamble && Qo(e);
                    break e;
                  }
                } catch (Lo) {
                  if (vn.status = st, e.status === 12) {
                    Hr.status = 3;
                    var $l = e.fatalError;
                  } else
                    Hr.status = 4, $l = Lo;
                  var Uc = on(n.componentStack), Yn = Tr(
                    e,
                    $l,
                    Uc,
                    n.debugTask
                  );
                  Ua(
                    vn,
                    Yn,
                    $l,
                    Uc,
                    !1
                  ), Ni(e, vn);
                } finally {
                  n.blockedBoundary = Mo, n.blockedPreamble = Oo, n.hoistableState = Cc, n.blockedSegment = Oa, n.keyPath = Mi;
                }
                var pu = Bi(
                  e,
                  null,
                  nc,
                  -1,
                  Mo,
                  ar,
                  vn.fallbackPreamble,
                  vn.fallbackState,
                  aa,
                  [c[0], "Suspense Fallback", c[2]],
                  n.formatContext,
                  n.context,
                  n.treeContext,
                  n.componentStack,
                  !0,
                  xn,
                  n.debugTask
                );
                Wi(pu), e.pingedTasks.push(pu);
              }
            }
            return;
        }
        if (typeof h == "object" && h !== null)
          switch (h.$$typeof) {
            case qa:
              if ("ref" in b) {
                var _o = {};
                for (var eo in b)
                  eo !== "ref" && (_o[eo] = b[eo]);
              } else _o = b;
              var Ru = Go(
                e,
                n,
                c,
                h.render,
                _o,
                p
              );
              Xo(
                e,
                n,
                c,
                Ru,
                Jl !== 0,
                So,
                ju
              );
              return;
            case Xt:
              Jn(e, n, c, h.type, b, p);
              return;
            case qn:
            case pi:
              var Io = b.value, rc = b.children, xu = n.context, Kc = n.keyPath, Eu = h._currentValue;
              h._currentValue = Io, h._currentRenderer !== void 0 && h._currentRenderer !== null && h._currentRenderer !== Gl && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), h._currentRenderer = Gl;
              var mo = Ji, to = {
                parent: mo,
                depth: mo === null ? 0 : mo.depth + 1,
                context: h,
                parentValue: Eu,
                value: Io
              };
              Ji = to, n.context = to, n.keyPath = c, Vn(e, n, rc, -1);
              var _a = Ji;
              if (_a === null)
                throw Error(
                  "Tried to pop a Context at the root of the app. This is a bug in React."
                );
              _a.context !== h && console.error(
                "The parent context is not the expected context. This is probably a bug in React."
              ), _a.context._currentValue = _a.parentValue, h._currentRenderer !== void 0 && h._currentRenderer !== null && h._currentRenderer !== Gl && console.error(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ), h._currentRenderer = Gl;
              var no = Ji = _a.parent;
              n.context = no, n.keyPath = Kc, xu !== n.context && console.error(
                "Popping the context provider did not return back to the original snapshot. This is a bug in React."
              );
              return;
            case Ka:
              var lr = h._context, Gn = b.children;
              typeof Gn != "function" && console.error(
                "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
              );
              var qc = Gn(lr._currentValue), ku = n.keyPath;
              n.keyPath = c, Vn(e, n, qc, -1), n.keyPath = ku;
              return;
            case wn:
              var jc = xe(h);
              if (e.status === 12) throw null;
              Jn(e, n, c, jc, b, p);
              return;
          }
        var Do = "";
        throw (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Do += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), Error(
          "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((h == null ? h : typeof h) + "." + Do)
        );
      }
    }
    function uo(e, n, c, h, b) {
      var p = n.replay, _ = n.blockedBoundary, I = Xr(
        e,
        0,
        null,
        n.formatContext,
        !1,
        !1
      );
      I.id = c, I.parentFlushed = !0;
      try {
        n.replay = null, n.blockedSegment = I, Kn(e, n, h, b), I.status = lt, _ === null ? e.completedRootSegment = I : (Ui(_, I), _.parentFlushed && e.partialBoundaries.push(_));
      } finally {
        n.replay = p, n.blockedSegment = null;
      }
    }
    function kt(e, n, c, h, b, p, _, I, re, L) {
      p = L.nodes;
      for (var Te = 0; Te < p.length; Te++) {
        var ye = p[Te];
        if (b === ye[1]) {
          if (ye.length === 4) {
            if (h !== null && h !== ye[0])
              throw Error(
                "Expected the resume to render <" + ye[0] + "> in this slot but instead it rendered <" + h + ">. The tree doesn't match so React will fallback to client rendering."
              );
            var Oe = ye[2];
            ye = ye[3], h = n.node, n.replay = { nodes: Oe, slots: ye, pendingTasks: 1 };
            try {
              if (Jn(e, n, c, _, I, re), n.replay.pendingTasks === 1 && 0 < n.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              n.replay.pendingTasks--;
            } catch (Ht) {
              if (typeof Ht == "object" && Ht !== null && (Ht === qi || typeof Ht.then == "function"))
                throw n.node === h && (n.replay = L), Ht;
              n.replay.pendingTasks--, _ = on(n.componentStack), I = e, e = n.blockedBoundary, c = Ht, re = ye, ye = Tr(I, c, _, n.debugTask), ba(
                I,
                e,
                Oe,
                re,
                c,
                ye,
                _,
                !1
              );
            }
            n.replay = L;
          } else {
            if (_ !== fo)
              throw Error(
                "Expected the resume to render <Suspense> in this slot but instead it rendered <" + (Gt(_) || "Unknown") + ">. The tree doesn't match so React will fallback to client rendering."
              );
            e: {
              L = void 0, _ = ye[5], re = ye[2], h = ye[3], b = ye[4] === null ? [] : ye[4][2], ye = ye[4] === null ? null : ye[4][3];
              var Pe = n.keyPath, be = n.replay, ht = n.blockedBoundary, Ot = n.hoistableState, ut = I.children, He = I.fallback, kn = /* @__PURE__ */ new Set();
              I = n.formatContext.insertionMode < sn ? Qn(
                e,
                kn,
                $(),
                $()
              ) : Qn(
                e,
                kn,
                null,
                null
              ), I.parentFlushed = !0, I.rootSegmentID = _, n.blockedBoundary = I, n.hoistableState = I.contentState, n.keyPath = c, n.replay = { nodes: re, slots: h, pendingTasks: 1 };
              try {
                if (Kn(e, n, ut, -1), n.replay.pendingTasks === 1 && 0 < n.replay.nodes.length)
                  throw Error(
                    "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                  );
                if (n.replay.pendingTasks--, I.pendingTasks === 0 && I.status === je) {
                  I.status = lt, e.completedBoundaries.push(I);
                  break e;
                }
              } catch (Ht) {
                I.status = st, Oe = on(n.componentStack), L = Tr(
                  e,
                  Ht,
                  Oe,
                  n.debugTask
                ), Ua(I, L, Ht, Oe, !1), n.replay.pendingTasks--, e.clientRenderedBoundaries.push(I);
              } finally {
                n.blockedBoundary = ht, n.hoistableState = Ot, n.replay = be, n.keyPath = Pe;
              }
              I = sc(
                e,
                null,
                { nodes: b, slots: ye, pendingTasks: 0 },
                He,
                -1,
                ht,
                I.fallbackState,
                kn,
                [c[0], "Suspense Fallback", c[2]],
                n.formatContext,
                n.context,
                n.treeContext,
                n.componentStack,
                !0,
                xn,
                n.debugTask
              ), Wi(I), e.pingedTasks.push(I);
            }
          }
          p.splice(Te, 1);
          break;
        }
      }
    }
    function Vn(e, n, c, h) {
      n.replay !== null && typeof n.replay.slots == "number" ? uo(e, n, n.replay.slots, c, h) : (n.node = c, n.childIndex = h, c = n.componentStack, h = n.debugTask, Wi(n), Ya(e, n), n.componentStack = c, n.debugTask = h);
    }
    function Ya(e, n) {
      var c = n.node, h = n.childIndex;
      if (c !== null) {
        if (typeof c == "object") {
          switch (c.$$typeof) {
            case Va:
              var b = c.type, p = c.key;
              c = c.props;
              var _ = c.ref;
              _ = _ !== void 0 ? _ : null;
              var I = n.debugTask, re = Gt(b);
              p = p ?? (h === -1 ? 0 : h);
              var L = [n.keyPath, re, p];
              n.replay !== null ? I ? I.run(
                kt.bind(
                  null,
                  e,
                  n,
                  L,
                  re,
                  p,
                  h,
                  b,
                  c,
                  _,
                  n.replay
                )
              ) : kt(
                e,
                n,
                L,
                re,
                p,
                h,
                b,
                c,
                _,
                n.replay
              ) : I ? I.run(
                Jn.bind(
                  null,
                  e,
                  n,
                  L,
                  b,
                  c,
                  _
                )
              ) : Jn(e, n, L, b, c, _);
              return;
            case Ti:
              throw Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case wn:
              if (c = xe(c), e.status === 12) throw null;
              Vn(e, n, c, h);
              return;
          }
          if (Fn(c)) {
            va(e, n, c, h);
            return;
          }
          if (c === null || typeof c != "object" ? p = null : (b = qo && c[qo] || c["@@iterator"], p = typeof b == "function" ? b : null), p && (b = p.call(c))) {
            if (b === c ? (h !== -1 || n.componentStack === null || typeof n.componentStack.type != "function" || Object.prototype.toString.call(n.componentStack.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(b) !== "[object Generator]") && (xr || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), xr = !0) : c.entries !== p || Ft || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), Ft = !0), c = b.next(), !c.done) {
              p = [];
              do
                p.push(c.value), c = b.next();
              while (!c.done);
              va(e, n, p, h);
            }
            return;
          }
          if (typeof c.then == "function")
            return n.thenableState = null, Vn(
              e,
              n,
              Uo(c),
              h
            );
          if (c.$$typeof === pi)
            return Vn(
              e,
              n,
              c._currentValue,
              h
            );
          throw e = Object.prototype.toString.call(c), Error(
            "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(c).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        typeof c == "string" ? (n = n.blockedSegment, n !== null && (n.lastPushedText = nt(
          n.chunks,
          c,
          e.renderState,
          n.lastPushedText
        ))) : typeof c == "number" || typeof c == "bigint" ? (n = n.blockedSegment, n !== null && (n.lastPushedText = nt(
          n.chunks,
          "" + c,
          e.renderState,
          n.lastPushedText
        ))) : (typeof c == "function" && (e = c.displayName || c.name || "Component", console.error(
          "Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.",
          e,
          e
        )), typeof c == "symbol" && console.error(
          `Symbols are not valid as a React child.
  %s`,
          String(c)
        ));
      }
    }
    function va(e, n, c, h) {
      var b = n.keyPath, p = n.componentStack, _ = n.debugTask;
      if (oo(n, n.node._debugInfo), h !== -1 && (n.keyPath = [n.keyPath, "Fragment", h], n.replay !== null)) {
        for (var I = n.replay, re = I.nodes, L = 0; L < re.length; L++) {
          var Te = re[L];
          if (Te[1] === h) {
            h = Te[2], Te = Te[3], n.replay = { nodes: h, slots: Te, pendingTasks: 1 };
            try {
              if (va(e, n, c, -1), n.replay.pendingTasks === 1 && 0 < n.replay.nodes.length)
                throw Error(
                  "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                );
              n.replay.pendingTasks--;
            } catch (ut) {
              if (typeof ut == "object" && ut !== null && (ut === qi || typeof ut.then == "function"))
                throw ut;
              n.replay.pendingTasks--;
              var ye = on(n.componentStack);
              c = n.blockedBoundary;
              var Oe = ut, Pe = Te;
              Te = Tr(
                e,
                Oe,
                ye,
                n.debugTask
              ), ba(
                e,
                c,
                h,
                Pe,
                Oe,
                Te,
                ye,
                !1
              );
            }
            n.replay = I, re.splice(L, 1);
            break;
          }
        }
        n.keyPath = b, n.componentStack = p, n.debugTask = _;
        return;
      }
      if (I = n.treeContext, re = c.length, n.replay !== null && (L = n.replay.slots, L !== null && typeof L == "object")) {
        for (h = 0; h < re; h++)
          Te = c[h], n.treeContext = Xn(
            I,
            re,
            h
          ), Oe = L[h], typeof Oe == "number" ? (uo(e, n, Oe, Te, h), delete L[h]) : Kn(e, n, Te, h);
        n.treeContext = I, n.keyPath = b, n.componentStack = p, n.debugTask = _;
        return;
      }
      for (L = 0; L < re; L++) {
        if (h = c[L], Pe = e, Te = n, Oe = h, Oe !== null && typeof Oe == "object" && (Oe.$$typeof === Va || Oe.$$typeof === Ti) && Oe._store && (!Oe._store.validated && Oe.key == null || Oe._store.validated === 2)) {
          if (typeof Oe._store != "object")
            throw Error(
              "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
            );
          if (Oe._store.validated = 1, ye = Pe.didWarnForKey, ye == null && (ye = Pe.didWarnForKey = /* @__PURE__ */ new WeakSet()), Pe = Te.componentStack, Pe !== null && !ye.has(Pe)) {
            ye.add(Pe);
            var be = Gt(Oe.type);
            ye = Oe._owner;
            var ht = Pe.owner;
            if (Pe = "", ht && typeof ht.type < "u") {
              var Ot = Gt(ht.type);
              Ot && (Pe = `

Check the render method of \`` + Ot + "`.");
            }
            Pe || be && (Pe = `

Check the top-level render call using <` + be + ">."), be = "", ye != null && ht !== ye && (ht = null, typeof ye.type < "u" ? ht = Gt(ye.type) : typeof ye.name == "string" && (ht = ye.name), ht && (be = " It was passed a child from " + ht + ".")), ye = Te.componentStack, Te.componentStack = {
              parent: Te.componentStack,
              type: Oe.type,
              owner: Oe._owner,
              stack: Oe._debugStack
            }, console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              Pe,
              be
            ), Te.componentStack = ye;
          }
        }
        n.treeContext = Xn(I, re, L), Kn(e, n, h, L);
      }
      n.treeContext = I, n.keyPath = b, n.componentStack = p, n.debugTask = _;
    }
    function Ni(e, n) {
      e = e.trackedPostpones, e !== null && (n = n.trackedContentKeyPath, n !== null && (n = e.workingMap.get(n), n !== void 0 && (n.length = 4, n[2] = [], n[3] = null)));
    }
    function Hi(e, n, c) {
      return sc(
        e,
        c,
        n.replay,
        n.node,
        n.childIndex,
        n.blockedBoundary,
        n.hoistableState,
        n.abortSet,
        n.keyPath,
        n.formatContext,
        n.context,
        n.treeContext,
        n.componentStack,
        n.isFallback,
        xn,
        n.debugTask
      );
    }
    function Pl(e, n, c) {
      var h = n.blockedSegment, b = Xr(
        e,
        h.chunks.length,
        null,
        n.formatContext,
        h.lastPushedText,
        !0
      );
      return h.children.push(b), h.lastPushedText = !1, Bi(
        e,
        c,
        n.node,
        n.childIndex,
        n.blockedBoundary,
        b,
        n.blockedPreamble,
        n.hoistableState,
        n.abortSet,
        n.keyPath,
        n.formatContext,
        n.context,
        n.treeContext,
        n.componentStack,
        n.isFallback,
        xn,
        n.debugTask
      );
    }
    function Kn(e, n, c, h) {
      var b = n.formatContext, p = n.context, _ = n.keyPath, I = n.treeContext, re = n.componentStack, L = n.debugTask, Te = n.blockedSegment;
      if (Te === null)
        try {
          return Vn(e, n, c, h);
        } catch (Pe) {
          if (Fr(), c = Pe === qi ? El() : Pe, typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              h = yi(), e = Hi(
                e,
                n,
                h
              ).ping, c.then(e, e), n.formatContext = b, n.context = p, n.keyPath = _, n.treeContext = I, n.componentStack = re, n.debugTask = L, vt(p);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              c = yi(), c = Hi(e, n, c), e.pingedTasks.push(c), n.formatContext = b, n.context = p, n.keyPath = _, n.treeContext = I, n.componentStack = re, n.debugTask = L, vt(p);
              return;
            }
          }
        }
      else {
        var ye = Te.children.length, Oe = Te.chunks.length;
        try {
          return Vn(e, n, c, h);
        } catch (Pe) {
          if (Fr(), Te.children.length = ye, Te.chunks.length = Oe, c = Pe === qi ? El() : Pe, typeof c == "object" && c !== null) {
            if (typeof c.then == "function") {
              h = yi(), e = Pl(
                e,
                n,
                h
              ).ping, c.then(e, e), n.formatContext = b, n.context = p, n.keyPath = _, n.treeContext = I, n.componentStack = re, n.debugTask = L, vt(p);
              return;
            }
            if (c.message === "Maximum call stack size exceeded") {
              c = yi(), c = Pl(e, n, c), e.pingedTasks.push(c), n.formatContext = b, n.context = p, n.keyPath = _, n.treeContext = I, n.componentStack = re, n.debugTask = L, vt(p);
              return;
            }
          }
        }
      }
      throw n.formatContext = b, n.context = p, n.keyPath = _, n.treeContext = I, vt(p), c;
    }
    function zi(e) {
      var n = e.blockedBoundary;
      e = e.blockedSegment, e !== null && (e.status = 3, Zo(this, n, e));
    }
    function ba(e, n, c, h, b, p, _, I) {
      for (var re = 0; re < c.length; re++) {
        var L = c[re];
        if (L.length === 4)
          ba(
            e,
            n,
            L[2],
            L[3],
            b,
            p,
            _,
            I
          );
        else {
          var Te = e;
          L = L[5];
          var ye = b, Oe = p, Pe = _, be = I, ht = Qn(
            Te,
            /* @__PURE__ */ new Set(),
            null,
            null
          );
          ht.parentFlushed = !0, ht.rootSegmentID = L, ht.status = st, Ua(
            ht,
            Oe,
            ye,
            Pe,
            be
          ), ht.parentFlushed && Te.clientRenderedBoundaries.push(ht);
        }
      }
      if (c.length = 0, h !== null) {
        if (n === null)
          throw Error(
            "We should not have any resumable nodes in the shell. This is a bug in React."
          );
        if (n.status !== st && (n.status = st, Ua(
          n,
          p,
          b,
          _,
          I
        ), n.parentFlushed && e.clientRenderedBoundaries.push(n)), typeof h == "object")
          for (var Ot in h) delete h[Ot];
      }
    }
    function Ar(e, n, c) {
      var h = e.blockedBoundary, b = e.blockedSegment;
      if (b !== null) {
        if (b.status === 6) return;
        b.status = 3;
      }
      if (b = on(e.componentStack), h === null) {
        if (n.status !== 13 && n.status !== yt) {
          if (h = e.replay, h === null) {
            Tr(n, c, b, null), pr(n, c, b, null);
            return;
          }
          h.pendingTasks--, h.pendingTasks === 0 && 0 < h.nodes.length && (e = Tr(n, c, b, null), ba(
            n,
            null,
            h.nodes,
            h.slots,
            c,
            e,
            b,
            !0
          )), n.pendingRootTasks--, n.pendingRootTasks === 0 && ya(n);
        }
      } else
        h.pendingTasks--, h.status !== st && (h.status = st, e = Tr(n, c, b, null), h.status = st, Ua(h, e, c, b, !0), Ni(n, h), h.parentFlushed && n.clientRenderedBoundaries.push(h)), h.fallbackAbortableTasks.forEach(function(p) {
          return Ar(p, n, c);
        }), h.fallbackAbortableTasks.clear();
      n.allPendingTasks--, n.allPendingTasks === 0 && wi(n);
    }
    function Fl(e, n) {
      try {
        var c = e.renderState, h = c.onHeaders;
        if (h) {
          var b = c.headers;
          if (b) {
            c.headers = null;
            var p = b.preconnects;
            if (b.fontPreloads && (p && (p += ", "), p += b.fontPreloads), b.highImagePreloads && (p && (p += ", "), p += b.highImagePreloads), !n) {
              var _ = c.styles.values(), I = _.next();
              e: for (; 0 < b.remainingCapacity && !I.done; I = _.next())
                for (var re = I.value.sheets.values(), L = re.next(); 0 < b.remainingCapacity && !L.done; L = re.next()) {
                  var Te = L.value, ye = Te.props, Oe = ye.href, Pe = Te.props, be = La(
                    Pe.href,
                    "style",
                    {
                      crossOrigin: Pe.crossOrigin,
                      integrity: Pe.integrity,
                      nonce: Pe.nonce,
                      type: Pe.type,
                      fetchPriority: Pe.fetchPriority,
                      referrerPolicy: Pe.referrerPolicy,
                      media: Pe.media
                    }
                  );
                  if (0 <= (b.remainingCapacity -= be.length + 2))
                    c.resets.style[Oe] = rt, p && (p += ", "), p += be, c.resets.style[Oe] = typeof ye.crossOrigin == "string" || typeof ye.integrity == "string" ? [ye.crossOrigin, ye.integrity] : rt;
                  else break e;
                }
            }
            h(p ? { Link: p } : {});
          }
        }
      } catch (ht) {
        Tr(e, ht, {}, null);
      }
    }
    function ya(e) {
      e.trackedPostpones === null && Fl(e, !0), e.trackedPostpones === null && Qo(e), e.onShellError = Gr, e = e.onShellReady, e();
    }
    function wi(e) {
      Fl(
        e,
        e.trackedPostpones === null ? !0 : e.completedRootSegment === null || e.completedRootSegment.status !== Je
      ), Qo(e), e = e.onAllReady, e();
    }
    function Ui(e, n) {
      if (n.chunks.length === 0 && n.children.length === 1 && n.children[0].boundary === null && n.children[0].id === -1) {
        var c = n.children[0];
        c.id = n.id, c.parentFlushed = !0, c.status === lt && Ui(e, c);
      } else e.completedSegments.push(n);
    }
    function Zo(e, n, c) {
      if (n === null) {
        if (c !== null && c.parentFlushed) {
          if (e.completedRootSegment !== null)
            throw Error(
              "There can only be one root segment. This is a bug in React."
            );
          e.completedRootSegment = c;
        }
        e.pendingRootTasks--, e.pendingRootTasks === 0 && ya(e);
      } else
        n.pendingTasks--, n.status !== st && (n.pendingTasks === 0 ? (n.status === je && (n.status = lt), c !== null && c.parentFlushed && c.status === lt && Ui(n, c), n.parentFlushed && e.completedBoundaries.push(n), n.status === lt && (n.fallbackAbortableTasks.forEach(
          zi,
          e
        ), n.fallbackAbortableTasks.clear(), e.pendingRootTasks === 0 && e.trackedPostpones === null && n.contentPreamble !== null && Qo(e))) : c !== null && c.parentFlushed && c.status === lt && (Ui(n, c), n.completedSegments.length === 1 && n.parentFlushed && e.partialBoundaries.push(n)));
      e.allPendingTasks--, e.allPendingTasks === 0 && wi(e);
    }
    function Al(e) {
      if (e.status !== yt && e.status !== 13) {
        var n = Ji, c = Le.H;
        Le.H = yu;
        var h = Le.A;
        Le.A = kc;
        var b = xt;
        xt = e;
        var p = Le.getCurrentStack;
        Le.getCurrentStack = ga;
        var _ = fl;
        fl = e.resumableState;
        try {
          var I = e.pingedTasks, re;
          for (re = 0; re < I.length; re++) {
            var L = e, Te = I[re], ye = Te.blockedSegment;
            if (ye === null) {
              var Oe = void 0, Pe = L;
              if (L = Te, L.replay.pendingTasks !== 0) {
                vt(L.context), Oe = Ut, Ut = L;
                try {
                  if (typeof L.replay.slots == "number" ? uo(
                    Pe,
                    L,
                    L.replay.slots,
                    L.node,
                    L.childIndex
                  ) : Ya(Pe, L), L.replay.pendingTasks === 1 && 0 < L.replay.nodes.length)
                    throw Error(
                      "Couldn't find all resumable slots by key/index during replaying. The tree doesn't match so React will fallback to client rendering."
                    );
                  L.replay.pendingTasks--, L.abortSet.delete(L), Zo(Pe, L.blockedBoundary, null);
                } catch (Bt) {
                  Fr();
                  var be = Bt === qi ? El() : Bt;
                  if (typeof be == "object" && be !== null && typeof be.then == "function") {
                    var ht = L.ping;
                    be.then(ht, ht), L.thenableState = yi();
                  } else {
                    L.replay.pendingTasks--, L.abortSet.delete(L);
                    var Ot = on(L.componentStack), ut = void 0, He = Pe, kn = L.blockedBoundary, Ht = Pe.status === 12 ? Pe.fatalError : be, ct = Ot, gr = L.replay.nodes, Br = L.replay.slots;
                    ut = Tr(
                      He,
                      Ht,
                      ct,
                      L.debugTask
                    ), ba(
                      He,
                      kn,
                      gr,
                      Br,
                      Ht,
                      ut,
                      ct,
                      !1
                    ), Pe.pendingRootTasks--, Pe.pendingRootTasks === 0 && ya(Pe), Pe.allPendingTasks--, Pe.allPendingTasks === 0 && wi(Pe);
                  }
                } finally {
                  Ut = Oe;
                }
              }
            } else if (Pe = Oe = void 0, ut = Te, He = ye, He.status === je) {
              He.status = 6, vt(ut.context), Pe = Ut, Ut = ut;
              var mn = He.children.length, Hn = He.chunks.length;
              try {
                Ya(L, ut), He.lastPushedText && He.textEmbedded && He.chunks.push(Ci), ut.abortSet.delete(ut), He.status = lt, Zo(
                  L,
                  ut.blockedBoundary,
                  He
                );
              } catch (Bt) {
                Fr(), He.children.length = mn, He.chunks.length = Hn;
                var Vt = Bt === qi ? El() : L.status === 12 ? L.fatalError : Bt;
                if (typeof Vt == "object" && Vt !== null && typeof Vt.then == "function") {
                  He.status = je, ut.thenableState = yi();
                  var vr = ut.ping;
                  Vt.then(vr, vr);
                } else {
                  var br = on(
                    ut.componentStack
                  );
                  ut.abortSet.delete(ut), He.status = 4;
                  var gt = ut.blockedBoundary, ln = ut.debugTask;
                  Oe = Tr(
                    L,
                    Vt,
                    br,
                    ln
                  ), gt === null ? pr(
                    L,
                    Vt,
                    br,
                    ln
                  ) : (gt.pendingTasks--, gt.status !== st && (gt.status = st, Ua(
                    gt,
                    Oe,
                    Vt,
                    br,
                    !1
                  ), Ni(L, gt), gt.parentFlushed && L.clientRenderedBoundaries.push(
                    gt
                  ), L.pendingRootTasks === 0 && L.trackedPostpones === null && gt.contentPreamble !== null && Qo(L))), L.allPendingTasks--, L.allPendingTasks === 0 && wi(L);
                }
              } finally {
                Ut = Pe;
              }
            }
          }
          I.splice(0, re), e.destination !== null && Xa(
            e,
            e.destination
          );
        } catch (Bt) {
          I = {}, Tr(e, Bt, I, null), pr(e, Bt, I, null);
        } finally {
          fl = _, Le.H = c, Le.A = h, Le.getCurrentStack = p, c === yu && vt(n), xt = b;
        }
      }
    }
    function Du(e, n, c) {
      n.preambleChildren.length && c.push(n.preambleChildren);
      for (var h = !1, b = 0; b < n.children.length; b++)
        h = Ga(
          e,
          n.children[b],
          c
        ) || h;
      return h;
    }
    function Ga(e, n, c) {
      var h = n.boundary;
      if (h === null)
        return Du(
          e,
          n,
          c
        );
      var b = h.contentPreamble, p = h.fallbackPreamble;
      if (b === null || p === null) return !1;
      switch (h.status) {
        case lt:
          if (Sn(e.renderState, b), n = h.completedSegments[0], !n)
            throw Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          return Du(
            e,
            n,
            c
          );
        case Je:
          if (e.trackedPostpones !== null) return !0;
        case st:
          if (n.status === lt)
            return Sn(e.renderState, p), Du(
              e,
              n,
              c
            );
        default:
          return !0;
      }
    }
    function Qo(e) {
      if (e.completedRootSegment && e.completedPreambleSegments === null) {
        var n = [], c = Ga(
          e,
          e.completedRootSegment,
          n
        ), h = e.renderState.preamble;
        (c === !1 || h.headChunks && h.bodyChunks) && (e.completedPreambleSegments = n);
      }
    }
    function Lu(e, n, c, h) {
      switch (c.parentFlushed = !0, c.status) {
        case je:
          c.id = e.nextSegmentId++;
        case Je:
          return h = c.id, c.lastPushedText = !1, c.textEmbedded = !1, e = e.renderState, k(n, Wl), k(n, e.placeholderPrefix), e = G(h.toString(16)), k(n, e), B(n, rl);
        case lt:
          c.status = tn;
          var b = !0, p = c.chunks, _ = 0;
          c = c.children;
          for (var I = 0; I < c.length; I++) {
            for (b = c[I]; _ < b.index; _++)
              k(n, p[_]);
            b = co(e, n, b, h);
          }
          for (; _ < p.length - 1; _++)
            k(n, p[_]);
          return _ < p.length && (b = B(n, p[_])), b;
        default:
          throw Error(
            "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
          );
      }
    }
    function co(e, n, c, h) {
      var b = c.boundary;
      if (b === null)
        return Lu(e, n, c, h);
      if (b.parentFlushed = !0, b.status === st) {
        var p = b.errorDigest, _ = b.errorMessage, I = b.errorStack, re = b.errorComponentStack;
        return B(n, mc), k(n, wc), p && (k(n, po), k(
          n,
          G(se(p))
        ), k(
          n,
          xa
        )), _ && (k(n, ou), k(
          n,
          G(se(_))
        ), k(
          n,
          xa
        )), I && (k(n, il), k(
          n,
          G(se(I))
        ), k(
          n,
          xa
        )), re && (k(n, uu), k(
          n,
          G(se(re))
        ), k(
          n,
          xa
        )), B(n, Gu), Lu(e, n, c, h), (e = b.fallbackPreamble) && Au(n, e), B(n, Zi);
      }
      if (b.status !== lt)
        return b.status === je && (b.rootSegmentID = e.nextSegmentId++), 0 < b.completedSegments.length && e.partialBoundaries.push(b), Fu(
          n,
          e.renderState,
          b.rootSegmentID
        ), h && (b = b.fallbackState, b.styles.forEach(Ur, h), b.stylesheets.forEach(
          Pn,
          h
        )), Lu(e, n, c, h), B(n, Zi);
      if (b.byteSize > e.progressiveChunkSize)
        return b.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(b), Fu(
          n,
          e.renderState,
          b.rootSegmentID
        ), Lu(e, n, c, h), B(n, Zi);
      if (h && (c = b.contentState, c.styles.forEach(Ur, h), c.stylesheets.forEach(Pn, h)), B(n, au), c = b.completedSegments, c.length !== 1)
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      return co(e, n, c[0], h), (e = b.contentPreamble) && Au(n, e), B(n, Zi);
    }
    function Jo(e, n, c, h) {
      return wl(
        n,
        e.renderState,
        c.parentFormatContext,
        c.id
      ), co(e, n, c, h), Mu(n, c.parentFormatContext);
    }
    function fc(e, n, c) {
      for (var h = c.completedSegments, b = 0; b < h.length; b++)
        so(
          e,
          n,
          c,
          h[b]
        );
      h.length = 0, Tl(
        n,
        c.contentState,
        e.renderState
      ), h = e.resumableState, e = e.renderState, b = c.rootSegmentID, c = c.contentState;
      var p = e.stylesToHoist;
      return e.stylesToHoist = !1, k(n, e.startInlineScript), p ? (h.instructions & Rt) === bt ? (h.instructions = h.instructions | Ue | Rt, k(n, at)) : (h.instructions & Ue) === bt ? (h.instructions |= Ue, k(
        n,
        Dt
      )) : k(n, fn) : (h.instructions & Rt) === bt ? (h.instructions |= Rt, k(n, Ye)) : k(n, Ke), h = G(b.toString(16)), k(n, e.boundaryPrefix), k(n, h), k(n, Tt), k(n, e.segmentPrefix), k(n, h), p ? (k(n, dr), Ou(n, c)) : k(n, hn), c = B(n, Dr), Ln(n, e) && c;
    }
    function so(e, n, c, h) {
      if (h.status === tn) return !0;
      var b = c.contentState, p = h.id;
      if (p === -1) {
        if ((h.id = c.rootSegmentID) === -1)
          throw Error(
            "A root segment ID must have been assigned by now. This is a bug in React."
          );
        return Jo(
          e,
          n,
          h,
          b
        );
      }
      return p === c.rootSegmentID ? Jo(
        e,
        n,
        h,
        b
      ) : (Jo(e, n, h, b), c = e.resumableState, e = e.renderState, k(n, e.startInlineScript), (c.instructions & St) === bt ? (c.instructions |= St, k(n, X)) : k(n, Ce), k(n, e.segmentPrefix), p = G(p.toString(16)), k(n, p), k(n, ge), k(n, e.placeholderPrefix), k(n, p), n = B(n, We), n);
    }
    function Xa(e, n) {
      Wn = new Uint8Array(2048), ur = 0;
      try {
        if (!(0 < e.pendingRootTasks)) {
          var c, h = e.completedRootSegment;
          if (h !== null) {
            if (h.status === Je) return;
            var b = e.completedPreambleSegments;
            if (b === null) return;
            var p = e.renderState, _ = p.preamble, I = _.htmlChunks, re = _.headChunks, L;
            if (I) {
              for (L = 0; L < I.length; L++)
                k(n, I[L]);
              if (re)
                for (L = 0; L < re.length; L++)
                  k(n, re[L]);
              else
                k(n, et("head")), k(n, jt);
            } else if (re)
              for (L = 0; L < re.length; L++)
                k(n, re[L]);
            var Te = p.charsetChunks;
            for (L = 0; L < Te.length; L++)
              k(n, Te[L]);
            Te.length = 0, p.preconnects.forEach(wt, n), p.preconnects.clear();
            var ye = p.viewportChunks;
            for (L = 0; L < ye.length; L++)
              k(n, ye[L]);
            ye.length = 0, p.fontPreloads.forEach(wt, n), p.fontPreloads.clear(), p.highImagePreloads.forEach(wt, n), p.highImagePreloads.clear(), p.styles.forEach(Ho, n);
            var Oe = p.importMapChunks;
            for (L = 0; L < Oe.length; L++)
              k(n, Oe[L]);
            Oe.length = 0, p.bootstrapScripts.forEach(wt, n), p.scripts.forEach(wt, n), p.scripts.clear(), p.bulkPreloads.forEach(wt, n), p.bulkPreloads.clear();
            var Pe = p.hoistableChunks;
            for (L = 0; L < Pe.length; L++)
              k(n, Pe[L]);
            for (p = Pe.length = 0; p < b.length; p++) {
              var be = b[p];
              for (_ = 0; _ < be.length; _++)
                co(e, n, be[_], null);
            }
            var ht = e.renderState.preamble, Ot = ht.headChunks;
            (ht.htmlChunks || Ot) && k(n, wr("head"));
            var ut = ht.bodyChunks;
            if (ut)
              for (b = 0; b < ut.length; b++)
                k(n, ut[b]);
            co(e, n, h, null), e.completedRootSegment = null, Ln(n, e.renderState);
          }
          var He = e.renderState;
          h = 0;
          var kn = He.viewportChunks;
          for (h = 0; h < kn.length; h++)
            k(
              n,
              kn[h]
            );
          kn.length = 0, He.preconnects.forEach(wt, n), He.preconnects.clear(), He.fontPreloads.forEach(wt, n), He.fontPreloads.clear(), He.highImagePreloads.forEach(
            wt,
            n
          ), He.highImagePreloads.clear(), He.styles.forEach(bi, n), He.scripts.forEach(wt, n), He.scripts.clear(), He.bulkPreloads.forEach(wt, n), He.bulkPreloads.clear();
          var Ht = He.hoistableChunks;
          for (h = 0; h < Ht.length; h++)
            k(
              n,
              Ht[h]
            );
          Ht.length = 0;
          var ct = e.clientRenderedBoundaries;
          for (c = 0; c < ct.length; c++) {
            var gr = ct[c];
            He = n;
            var Br = e.resumableState, mn = e.renderState, Hn = gr.rootSegmentID, Vt = gr.errorDigest, vr = gr.errorMessage, br = gr.errorStack, gt = gr.errorComponentStack;
            k(
              He,
              mn.startInlineScript
            ), (Br.instructions & Nt) === bt ? (Br.instructions |= Nt, k(He, nr)) : k(He, Nn), k(
              He,
              mn.boundaryPrefix
            ), k(He, G(Hn.toString(16))), k(He, Rr), (Vt || vr || br || gt) && (k(
              He,
              Lt
            ), k(
              He,
              G(
                sa(Vt || "")
              )
            )), (vr || br || gt) && (k(
              He,
              Lt
            ), k(
              He,
              G(
                sa(vr || "")
              )
            )), (br || gt) && (k(
              He,
              Lt
            ), k(
              He,
              G(
                sa(br || "")
              )
            )), gt && (k(
              He,
              Lt
            ), k(
              He,
              G(
                sa(gt)
              )
            ));
            var ln = B(
              He,
              Rn
            );
            if (!ln) {
              e.destination = null, c++, ct.splice(0, c);
              return;
            }
          }
          ct.splice(0, c);
          var Bt = e.completedBoundaries;
          for (c = 0; c < Bt.length; c++)
            if (!fc(
              e,
              n,
              Bt[c]
            )) {
              e.destination = null, c++, Bt.splice(0, c);
              return;
            }
          Bt.splice(0, c), Ie(n), Wn = new Uint8Array(2048), ur = 0;
          var Er = e.partialBoundaries;
          for (c = 0; c < Er.length; c++) {
            e: {
              ct = e, gr = n;
              var kr = Er[c], zn = kr.completedSegments;
              for (ln = 0; ln < zn.length; ln++)
                if (!so(
                  ct,
                  gr,
                  kr,
                  zn[ln]
                )) {
                  ln++, zn.splice(0, ln);
                  var $i = !1;
                  break e;
                }
              zn.splice(0, ln), $i = Tl(
                gr,
                kr.contentState,
                ct.renderState
              );
            }
            if (!$i) {
              e.destination = null, c++, Er.splice(0, c);
              return;
            }
          }
          Er.splice(0, c);
          var ei = e.completedBoundaries;
          for (c = 0; c < ei.length; c++)
            if (!fc(e, n, ei[c])) {
              e.destination = null, c++, ei.splice(0, c);
              return;
            }
          ei.splice(0, c);
        }
      } finally {
        e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 ? (e.flushScheduled = !1, c = e.resumableState, c.hasBody && k(n, wr("body")), c.hasHtml && k(n, wr("html")), Ie(n), e.abortableTasks.size !== 0 && console.error(
          "There was still abortable task at the root when we closed. This is a bug in React."
        ), e.status = yt, n.close(), e.destination = null) : Ie(n);
      }
    }
    function Ml(e) {
      e.flushScheduled = e.destination !== null, Ic(function() {
        return Al(e);
      }), q(function() {
        e.status === 10 && (e.status = 11), e.trackedPostpones === null && Fl(e, e.pendingRootTasks === 0);
      });
    }
    function Za(e) {
      e.flushScheduled === !1 && e.pingedTasks.length === 0 && e.destination !== null && (e.flushScheduled = !0, q(function() {
        var n = e.destination;
        n ? Xa(e, n) : e.flushScheduled = !1;
      }));
    }
    function Vo(e, n) {
      if (e.status === 13)
        e.status = yt, fe(n, e.fatalError);
      else if (e.status !== yt && e.destination === null) {
        e.destination = n;
        try {
          Xa(e, n);
        } catch (c) {
          n = {}, Tr(e, c, n, null), pr(e, c, n, null);
        }
      }
    }
    function Qa(e, n) {
      (e.status === 11 || e.status === 10) && (e.status = 12);
      try {
        var c = e.abortableTasks;
        if (0 < c.size) {
          var h = n === void 0 ? Error("The render was aborted by the server without a reason.") : typeof n == "object" && n !== null && typeof n.then == "function" ? Error("The render was aborted by the server with a promise.") : n;
          e.fatalError = h, c.forEach(function(b) {
            return Ar(b, e, h);
          }), c.clear();
        }
        e.destination !== null && Xa(e, e.destination);
      } catch (b) {
        n = {}, Tr(e, b, n, null), pr(e, b, n, null);
      }
    }
    function Ol() {
      var e = _l.version;
      if (e !== "19.1.1")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.1
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }
    var _l = As, Ja = Ms, Va = Symbol.for("react.transitional.element"), Ti = Symbol.for("react.portal"), Yi = Symbol.for("react.fragment"), Ko = Symbol.for("react.strict_mode"), Il = Symbol.for("react.profiler"), qn = Symbol.for("react.provider"), Ka = Symbol.for("react.consumer"), pi = Symbol.for("react.context"), qa = Symbol.for("react.forward_ref"), fo = Symbol.for("react.suspense"), Ri = Symbol.for("react.suspense_list"), Xt = Symbol.for("react.memo"), wn = Symbol.for("react.lazy"), Mr = Symbol.for("react.scope"), ja = Symbol.for("react.activity"), rn = Symbol.for("react.legacy_hidden"), Pt = Symbol.for("react.memo_cache_sentinel"), Bu = Symbol.for("react.view_transition"), qo = Symbol.iterator, Fn = Array.isArray, Wu = /* @__PURE__ */ new WeakMap(), Nu = /* @__PURE__ */ new WeakMap(), ho = Symbol.for("react.client.reference"), jo = new MessageChannel(), Gi = [];
    jo.port1.onmessage = function() {
      var e = Gi.shift();
      e && e();
    };
    var Zr = Promise, Ic = typeof queueMicrotask == "function" ? queueMicrotask : function(e) {
      Zr.resolve(null).then(e).catch(ue);
    }, Wn = null, ur = 0, cr = new TextEncoder(), Kt = Object.assign, Ct = Object.prototype.hasOwnProperty, $o = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hu = {}, hc = {}, dc = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), go = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), wa = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, ri = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Or = {}, vo = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eu = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), zu = !1, bo = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, An = {}, Xc = /^on./, sr = /^on[^A-Z]/, gc = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), $a = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), a = /^(?:webkit|moz|o)[A-Z]/, o = /^-ms-/, f = /-(.)/g, g = /;\s*$/, T = {}, x = {}, A = !1, ne = !1, J = /["'&<>]/, ie = /([A-Z])/g, Be = /^ms-/, ke = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Le = _l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ne = Ja.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, tt = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), ze = Ne.d;
    Ne.d = {
      f: ze.f,
      r: ze.r,
      D: function(e) {
        var n = xt || null;
        if (n) {
          var c = n.resumableState, h = n.renderState;
          if (typeof e == "string" && e) {
            if (!c.dnsResources.hasOwnProperty(e)) {
              c.dnsResources[e] = ft, c = h.headers;
              var b, p;
              (p = c && 0 < c.remainingCapacity) && (p = (b = "<" + Bn(e) + ">; rel=dns-prefetch", 0 <= (c.remainingCapacity -= b.length + 2))), p ? (h.resets.dns[e] = ft, c.preconnects && (c.preconnects += ", "), c.preconnects += b) : (b = [], nn(b, { href: e, rel: "dns-prefetch" }), h.preconnects.add(b));
            }
            Za(n);
          }
        } else ze.D(e);
      },
      C: function(e, n) {
        var c = xt || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (typeof e == "string" && e) {
            var p = n === "use-credentials" ? "credentials" : typeof n == "string" ? "anonymous" : "default";
            if (!h.connectResources[p].hasOwnProperty(e)) {
              h.connectResources[p][e] = ft, h = b.headers;
              var _, I;
              if (I = h && 0 < h.remainingCapacity) {
                if (I = "<" + Bn(e) + ">; rel=preconnect", typeof n == "string") {
                  var re = yn(
                    n,
                    "crossOrigin"
                  );
                  I += '; crossorigin="' + re + '"';
                }
                I = (_ = I, 0 <= (h.remainingCapacity -= _.length + 2));
              }
              I ? (b.resets.connect[p][e] = ft, h.preconnects && (h.preconnects += ", "), h.preconnects += _) : (p = [], nn(p, {
                rel: "preconnect",
                href: e,
                crossOrigin: n
              }), b.preconnects.add(p));
            }
            Za(c);
          }
        } else ze.C(e, n);
      },
      L: function(e, n, c) {
        var h = xt || null;
        if (h) {
          var b = h.resumableState, p = h.renderState;
          if (n && e) {
            switch (n) {
              case "image":
                if (c)
                  var _ = c.imageSrcSet, I = c.imageSizes, re = c.fetchPriority;
                var L = _ ? _ + `
` + (I || "") : e;
                if (b.imageResources.hasOwnProperty(L)) return;
                b.imageResources[L] = rt, b = p.headers;
                var Te;
                b && 0 < b.remainingCapacity && typeof _ != "string" && re === "high" && (Te = La(e, n, c), 0 <= (b.remainingCapacity -= Te.length + 2)) ? (p.resets.image[L] = rt, b.highImagePreloads && (b.highImagePreloads += ", "), b.highImagePreloads += Te) : (b = [], nn(
                  b,
                  Kt(
                    {
                      rel: "preload",
                      href: _ ? void 0 : e,
                      as: n
                    },
                    c
                  )
                ), re === "high" ? p.highImagePreloads.add(b) : (p.bulkPreloads.add(b), p.preloads.images.set(L, b)));
                break;
              case "style":
                if (b.styleResources.hasOwnProperty(e)) return;
                _ = [], nn(
                  _,
                  Kt({ rel: "preload", href: e, as: n }, c)
                ), b.styleResources[e] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? rt : [c.crossOrigin, c.integrity], p.preloads.stylesheets.set(e, _), p.bulkPreloads.add(_);
                break;
              case "script":
                if (b.scriptResources.hasOwnProperty(e)) return;
                _ = [], p.preloads.scripts.set(e, _), p.bulkPreloads.add(_), nn(
                  _,
                  Kt({ rel: "preload", href: e, as: n }, c)
                ), b.scriptResources[e] = !c || typeof c.crossOrigin != "string" && typeof c.integrity != "string" ? rt : [c.crossOrigin, c.integrity];
                break;
              default:
                if (b.unknownResources.hasOwnProperty(n)) {
                  if (_ = b.unknownResources[n], _.hasOwnProperty(e))
                    return;
                } else
                  _ = {}, b.unknownResources[n] = _;
                if (_[e] = rt, (b = p.headers) && 0 < b.remainingCapacity && n === "font" && (L = La(e, n, c), 0 <= (b.remainingCapacity -= L.length + 2)))
                  p.resets.font[e] = rt, b.fontPreloads && (b.fontPreloads += ", "), b.fontPreloads += L;
                else
                  switch (b = [], e = Kt(
                    { rel: "preload", href: e, as: n },
                    c
                  ), nn(b, e), n) {
                    case "font":
                      p.fontPreloads.add(b);
                      break;
                    default:
                      p.bulkPreloads.add(b);
                  }
            }
            Za(h);
          }
        } else ze.L(e, n, c);
      },
      m: function(e, n) {
        var c = xt || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (e) {
            var p = n && typeof n.as == "string" ? n.as : "script";
            switch (p) {
              case "script":
                if (h.moduleScriptResources.hasOwnProperty(e))
                  return;
                p = [], h.moduleScriptResources[e] = !n || typeof n.crossOrigin != "string" && typeof n.integrity != "string" ? rt : [n.crossOrigin, n.integrity], b.preloads.moduleScripts.set(e, p);
                break;
              default:
                if (h.moduleUnknownResources.hasOwnProperty(p)) {
                  var _ = h.unknownResources[p];
                  if (_.hasOwnProperty(e)) return;
                } else
                  _ = {}, h.moduleUnknownResources[p] = _;
                p = [], _[e] = rt;
            }
            nn(
              p,
              Kt({ rel: "modulepreload", href: e }, n)
            ), b.bulkPreloads.add(p), Za(c);
          }
        } else ze.m(e, n);
      },
      X: function(e, n) {
        var c = xt || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (e) {
            var p = h.scriptResources.hasOwnProperty(
              e
            ) ? h.scriptResources[e] : void 0;
            p !== ft && (h.scriptResources[e] = ft, n = Kt({ src: e, async: !0 }, n), p && (p.length === 2 && Wt(n, p), e = b.preloads.scripts.get(e)) && (e.length = 0), e = [], b.scripts.add(e), Ia(e, n), Za(c));
          }
        } else ze.X(e, n);
      },
      S: function(e, n, c) {
        var h = xt || null;
        if (h) {
          var b = h.resumableState, p = h.renderState;
          if (e) {
            n = n || "default";
            var _ = p.styles.get(n), I = b.styleResources.hasOwnProperty(e) ? b.styleResources[e] : void 0;
            I !== ft && (b.styleResources[e] = ft, _ || (_ = {
              precedence: G(se(n)),
              rules: [],
              hrefs: [],
              sheets: /* @__PURE__ */ new Map()
            }, p.styles.set(n, _)), n = {
              state: Kr,
              props: Kt(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": n
                },
                c
              )
            }, I && (I.length === 2 && Wt(n.props, I), (p = p.preloads.stylesheets.get(e)) && 0 < p.length ? p.length = 0 : n.state = Qu), _.sheets.set(e, n), Za(h));
          }
        } else ze.S(e, n, c);
      },
      M: function(e, n) {
        var c = xt || null;
        if (c) {
          var h = c.resumableState, b = c.renderState;
          if (e) {
            var p = h.moduleScriptResources.hasOwnProperty(e) ? h.moduleScriptResources[e] : void 0;
            p !== ft && (h.moduleScriptResources[e] = ft, n = Kt(
              { src: e, type: "module", async: !0 },
              n
            ), p && (p.length === 2 && Wt(n, p), e = b.preloads.moduleScripts.get(e)) && (e.length = 0), e = [], b.scripts.add(e), Ia(e, n), Za(c));
          }
        } else ze.M(e, n);
      }
    };
    var bt = 0, St = 1, Rt = 2, Nt = 4, Ue = 8, ft = null, rt = [];
    Object.freeze(rt), U('"></template>');
    var Mn = U("<script>"), jn = U("<\/script>"), Xe = U('<script src="'), At = U('<script type="module" src="'), un = U('" nonce="'), Tn = U('" integrity="'), xi = U('" crossorigin="'), mt = U('" async=""><\/script>'), cn = /(<\/|<)(s)(cript)/gi, fr = U(
      '<script type="importmap">'
    ), $n = U("<\/script>"), Ei = {}, er = 0, ii = 0, _r = 1, sn = 2, Qr = 3, Ir = 4, ki = 5, ai = 6, Jr = 7, Uu = 8, Ta = 9, Ci = U("<!-- -->"), tu = /* @__PURE__ */ new Map(), vc = U(' style="'), ml = U(":"), bc = U(";"), On = U(" "), hr = U('="'), qt = U('"'), nu = U('=""'), Si = U(
      se(
        "javascript:throw new Error('React form unexpectedly submitted.')"
      )
    ), el = U('<input type="hidden"'), jt = U(">"), li = U("/>"), yo = !1, Pi = !1, wo = !1, Dl = !1, pa = !1, pn = !1, ru = !1, mr = !1, Ll = !1, tl = !1, Xi = !1, oi = U(' selected=""'), nl = U(
      `addEventListener("submit",function(a){if(!a.defaultPrevented){var c=a.target,d=a.submitter,e=c.action,b=d;if(d){var f=d.getAttribute("formAction");null!=f&&(e=f,b=null)}"javascript:throw new Error('React form unexpectedly submitted.')"===e&&(a.preventDefault(),b?(a=document.createElement("input"),a.name=b.name,a.value=b.value,b.parentNode.insertBefore(a,b),b=new FormData(c),a.parentNode.removeChild(a)):b=new FormData(c),a=c.ownerDocument||c,(a.$$reactFormReplay=a.$$reactFormReplay||[]).push(c,d,b))}});`
    ), tr = U("<!--F!-->"), Ra = U("<!--F-->"), yc = /(<\/|<)(s)(tyle)/gi, iu = U(`
`), To = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Yu = /* @__PURE__ */ new Map(), _n = U("<!DOCTYPE html>"), Bl = /* @__PURE__ */ new Map(), Wl = U('<template id="'), rl = U('"></template>'), au = U("<!--$-->"), lu = U(
      '<!--$?--><template id="'
    ), Vr = U('"></template>'), mc = U("<!--$!-->"), Zi = U("<!--/$-->"), wc = U("<template"), xa = U('"'), po = U(' data-dgst="'), ou = U(' data-msg="'), il = U(' data-stck="'), uu = U(' data-cstck="'), Gu = U("></template>"), Xu = U("<!--"), cu = U("-->"), Fi = U('<div hidden id="'), Ea = U('">'), Ro = U("</div>"), Nl = U(
      '<svg aria-hidden="true" style="display:none" id="'
    ), su = U('">'), xo = U("</svg>"), al = U(
      '<math aria-hidden="true" style="display:none" id="'
    ), ll = U('">'), ol = U("</math>"), Hl = U('<table hidden id="'), zl = U('">'), fu = U("</table>"), i = U(
      '<table hidden><tbody id="'
    ), l = U('">'), s = U("</tbody></table>"), v = U('<table hidden><tr id="'), w = U('">'), E = U("</tr></table>"), O = U(
      '<table hidden><colgroup id="'
    ), K = U('">'), m = U("</colgroup></table>"), X = U(
      '$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
    ), Ce = U('$RS("'), ge = U('","'), We = U('")<\/script>');
    U('<template data-rsi="" data-sid="'), U('" data-pid="');
    var Ye = U(
      '$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RC("'
    ), Ke = U('$RC("'), at = U(
      `$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    ), Dt = U(
      `$RM=new Map;
$RR=function(t,u,y){function v(n){this._p=null;n()}for(var w=$RC,p=$RM,q=new Map,r=document,g,b,h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),x=[],k=0;b=h[k++];)"not all"===b.getAttribute("media")?x.push(b):("LINK"===b.tagName&&p.set(b.getAttribute("href"),b),q.set(b.dataset.precedence,g=b));b=0;h=[];var l,a;for(k=!0;;){if(k){var e=y[b++];if(!e){k=!1;b=0;continue}var c=!1,m=0;var d=e[m++];if(a=p.get(d)){var f=a._p;c=!0}else{a=r.createElement("link");a.href=
d;a.rel="stylesheet";for(a.dataset.precedence=l=e[m++];f=e[m++];)a.setAttribute(f,e[m++]);f=a._p=new Promise(function(n,z){a.onload=v.bind(a,n);a.onerror=v.bind(a,z)});p.set(d,a)}d=a.getAttribute("media");!f||d&&!matchMedia(d).matches||h.push(f);if(c)continue}else{a=x[b++];if(!a)break;l=a.getAttribute("data-precedence");a.removeAttribute("media")}c=q.get(l)||g;c===g&&(g=a);q.set(l,a);c?c.parentNode.insertBefore(a,c.nextSibling):(c=r.head,c.insertBefore(a,c.firstChild))}Promise.all(h).then(w.bind(null,
t,u,""),w.bind(null,t,u,"Resource failed to load"))};$RR("`
    ), fn = U('$RR("'), Tt = U('","'), dr = U('",'), hn = U('"'), Dr = U(")<\/script>");
    U('<template data-rci="" data-bid="'), U('<template data-rri="" data-bid="'), U('" data-sid="'), U('" data-sty="');
    var nr = U(
      '$RX=function(b,c,d,e,f){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),f&&(a.cstck=f),b._reactRetry&&b._reactRetry())};;$RX("'
    ), Nn = U('$RX("'), Rr = U('"'), Lt = U(","), Rn = U(")<\/script>");
    U('<template data-rxi="" data-bid="'), U('" data-dgst="'), U('" data-msg="'), U('" data-stck="'), U('" data-cstck="');
    var $t = /[<\u2028\u2029]/g, rr = /[&><\u2028\u2029]/g, Ul = U(
      '<style media="not all" data-precedence="'
    ), ka = U('" data-href="'), Ca = U('">'), Yl = U("</style>"), Sa = !1, Tc = !0, ul = [], Zc = U(
      '<style data-precedence="'
    ), Qc = U('" data-href="'), Dc = U(" "), Zu = U('">'), Jc = U("</style>"), Lc = U("["), Qi = U(",["), Lr = U(","), Bc = U("]"), Kr = 0, Qu = 1, Ju = 2, pc = 3, Rc = /[<>\r\n]/g, Zt = /["';,\r\n]/g, Vu = Function.prototype.bind, Eo = Symbol.for("react.client.reference"), xn = {};
    Object.freeze(xn);
    var Gl = {}, Ji = null, Xl = {}, ko = {}, qr = /* @__PURE__ */ new Set(), Zl = /* @__PURE__ */ new Set(), jr = /* @__PURE__ */ new Set(), cl = /* @__PURE__ */ new Set(), hu = /* @__PURE__ */ new Set(), Vi = /* @__PURE__ */ new Set(), ui = /* @__PURE__ */ new Set(), Wc = /* @__PURE__ */ new Set(), Ki = /* @__PURE__ */ new Set(), Nc = {
      enqueueSetState: function(e, n, c) {
        var h = e._reactInternals;
        h.queue === null ? Rl(e, "setState") : (h.queue.push(n), c != null && zt(c));
      },
      enqueueReplaceState: function(e, n, c) {
        e = e._reactInternals, e.replace = !0, e.queue = [n], c != null && zt(c);
      },
      enqueueForceUpdate: function(e, n) {
        e._reactInternals.queue === null ? Rl(e, "forceUpdate") : n != null && zt(n);
      }
    }, xc = { id: 1, overflow: "" }, Ku = Math.clz32 ? Math.clz32 : xl, qu = Math.log, Vc = Math.LN2, qi = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), Ql = null, Hc = typeof Object.is == "function" ? Object.is : Oc, Pa = null, du = null, Ec = null, Fa = null, gu = null, Mt = null, sl = !1, Co = !1, Jl = 0, So = 0, ju = -1, vu = 0, bu = null, dn = null, $r = 0, en = !1, Vl, yu = {
      readContext: ao,
      use: function(e) {
        if (e !== null && typeof e == "object") {
          if (typeof e.then == "function")
            return Uo(e);
          if (e.$$typeof === pi)
            return ao(e);
        }
        throw Error(
          "An unsupported type was passed to use(): " + String(e)
        );
      },
      useContext: function(e) {
        return Vl = "useContext", mi(), e._currentValue;
      },
      useMemo: Na,
      useReducer: Di,
      useRef: function(e) {
        Pa = mi(), Mt = Iu();
        var n = Mt.memoizedState;
        return n === null ? (e = { current: e }, Object.seal(e), Mt.memoizedState = e) : n;
      },
      useState: function(e) {
        return Vl = "useState", Di(Wa, e);
      },
      useInsertionEffect: lo,
      useLayoutEffect: lo,
      useCallback: function(e, n) {
        return Na(function() {
          return e;
        }, n);
      },
      useImperativeHandle: lo,
      useEffect: lo,
      useDebugValue: lo,
      useDeferredValue: function(e, n) {
        return mi(), n !== void 0 ? n : e;
      },
      useTransition: function() {
        return mi(), [!1, _c];
      },
      useId: function() {
        var e = du.treeContext, n = e.overflow;
        e = e.id, e = (e & ~(1 << 32 - Ku(e) - 1)).toString(32) + n;
        var c = fl;
        if (c === null)
          throw Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        return n = Jl++, e = "«" + c.idPrefix + "R" + e, 0 < n && (e += "H" + n.toString(32)), e + "»";
      },
      useSyncExternalStore: function(e, n, c) {
        if (c === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        return c();
      },
      useOptimistic: function(e) {
        return mi(), [e, fa];
      },
      useActionState: Jt,
      useFormState: Jt,
      useHostTransitionStatus: function() {
        return mi(), tt;
      },
      useMemoCache: function(e) {
        for (var n = Array(e), c = 0; c < e; c++)
          n[c] = Pt;
        return n;
      },
      useCacheRefresh: function() {
        return uc;
      }
    }, fl = null, Ut = null, kc = {
      getCacheForType: function() {
        throw Error("Not implemented.");
      },
      getOwner: function() {
        return Ut === null ? null : Ut.componentStack;
      }
    }, ji = 0, Po, zc, wu, $u, Tu, t, r;
    or.__reactDisabledLog = !0;
    var u, d, y = !1, R = new (typeof WeakMap == "function" ? WeakMap : Map)(), D = {
      react_stack_bottom_frame: function(e, n, c) {
        return e(n, c);
      }
    }, W = D.react_stack_bottom_frame.bind(D), de = {
      react_stack_bottom_frame: function(e) {
        return e.render();
      }
    }, z = de.react_stack_bottom_frame.bind(de), Fe = {
      react_stack_bottom_frame: function(e) {
        var n = e._init;
        return n(e._payload);
      }
    }, xe = Fe.react_stack_bottom_frame.bind(Fe), _e = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var De = performance, ve = function() {
        return De.now();
      };
    else {
      var qe = Date;
      ve = function() {
        return qe.now();
      };
    }
    var st = 4, je = 0, lt = 1, tn = 2, Je = 5, yt = 14, xt = null, ir = {}, En = {}, In = {}, an = {}, ci = !1, xr = !1, Ft = !1;
    Ol(), Ol(), Ts.prerender = function(e, n) {
      return new Promise(function(c, h) {
        var b = n ? n.onHeaders : void 0, p;
        b && (p = function(Te) {
          b(new Headers(Te));
        });
        var _ = P(
          n ? n.identifierPrefix : void 0,
          n ? n.unstable_externalRuntimeSrc : void 0,
          n ? n.bootstrapScriptContent : void 0,
          n ? n.bootstrapScripts : void 0,
          n ? n.bootstrapModules : void 0
        ), I = da(
          e,
          _,
          ae(
            _,
            void 0,
            n ? n.unstable_externalRuntimeSrc : void 0,
            n ? n.importMap : void 0,
            p,
            n ? n.maxHeadersLength : void 0
          ),
          te(n ? n.namespaceURI : void 0),
          n ? n.progressiveChunkSize : void 0,
          n ? n.onError : void 0,
          function() {
            var Te = {
              prelude: new ReadableStream(
                {
                  type: "bytes",
                  pull: function(ye) {
                    Vo(I, ye);
                  },
                  cancel: function(ye) {
                    I.destination = null, Qa(I, ye);
                  }
                },
                { highWaterMark: 0 }
              )
            };
            c(Te);
          },
          void 0,
          void 0,
          h,
          n ? n.onPostpone : void 0
        );
        if (n && n.signal) {
          var re = n.signal;
          if (re.aborted) Qa(I, re.reason);
          else {
            var L = function() {
              Qa(I, re.reason), re.removeEventListener("abort", L);
            };
            re.addEventListener("abort", L);
          }
        }
        Ml(I);
      });
    }, Ts.renderToReadableStream = function(e, n) {
      return new Promise(function(c, h) {
        var b, p, _ = new Promise(function(Pe, be) {
          p = Pe, b = be;
        }), I = n ? n.onHeaders : void 0, re;
        I && (re = function(Pe) {
          I(new Headers(Pe));
        });
        var L = P(
          n ? n.identifierPrefix : void 0,
          n ? n.unstable_externalRuntimeSrc : void 0,
          n ? n.bootstrapScriptContent : void 0,
          n ? n.bootstrapScripts : void 0,
          n ? n.bootstrapModules : void 0
        ), Te = Sl(
          e,
          L,
          ae(
            L,
            n ? n.nonce : void 0,
            n ? n.unstable_externalRuntimeSrc : void 0,
            n ? n.importMap : void 0,
            re,
            n ? n.maxHeadersLength : void 0
          ),
          te(n ? n.namespaceURI : void 0),
          n ? n.progressiveChunkSize : void 0,
          n ? n.onError : void 0,
          p,
          function() {
            var Pe = new ReadableStream(
              {
                type: "bytes",
                pull: function(be) {
                  Vo(Te, be);
                },
                cancel: function(be) {
                  Te.destination = null, Qa(Te, be);
                }
              },
              { highWaterMark: 0 }
            );
            Pe.allReady = _, c(Pe);
          },
          function(Pe) {
            _.catch(function() {
            }), h(Pe);
          },
          b,
          n ? n.onPostpone : void 0,
          n ? n.formState : void 0
        );
        if (n && n.signal) {
          var ye = n.signal;
          if (ye.aborted) Qa(Te, ye.reason);
          else {
            var Oe = function() {
              Qa(Te, ye.reason), ye.removeEventListener("abort", Oe);
            };
            ye.addEventListener("abort", Oe);
          }
        }
        Ml(Te);
      });
    }, Ts.version = "19.1.1";
  })()), Ts;
}
var ah;
function rd() {
  if (ah) return ns;
  ah = 1;
  var ce, V;
  return process.env.NODE_ENV === "production" ? (ce = $h(), V = ed()) : (ce = td(), V = nd()), ns.version = ce.version, ns.renderToString = ce.renderToString, ns.renderToStaticMarkup = ce.renderToStaticMarkup, ns.renderToReadableStream = V.renderToReadableStream, V.resume && (ns.resume = V.resume), ns;
}
var id = rd();
const yh = ({
  children: ce,
  emotionCache: V,
  theme: F,
  store: ee,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: oe = 3600,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: Z = 3600
}) => (
  // https://mui.com/material-ui/guides/server-rendering/
  /* @__PURE__ */ Wo.jsx(Ch, { value: V, children: /* @__PURE__ */ Wo.jsxs(Eh, { theme: F, children: [
    /* @__PURE__ */ Wo.jsx(kh, {}),
    /* @__PURE__ */ Wo.jsx(Sh, { store: ee, children: ce })
  ] }) })
);
function wh({
  key: ce = "css",
  // ensures all styles are generated with this prefix
  prepend: V = !0,
  // loads MUI-styles first so we can override them easily
  ...F
} = {}) {
  return Rh({ key: ce, prepend: V, ...F });
}
function Td({
  routes: ce,
  createEmotionCacheOptions: V = {},
  ...F
}) {
  function ee(oe) {
    const Z = wh(V), Y = jh(Z), C = id.renderToString(
      /* @__PURE__ */ Wo.jsx(oh, { children: /* @__PURE__ */ Wo.jsx(yh, { emotionCache: Z, ...F, children: /* @__PURE__ */ Wo.jsx(ph, { location: oe, children: /* @__PURE__ */ Wo.jsx(lh, { children: ce }) }) }) })
    ), q = Y.extractCriticalToChunks(C), ue = Y.constructStyleTagsFromChunks(q);
    return {
      html: C,
      head: ue
    };
  }
  return { render: ee };
}
function pd({
  routes: ce,
  createEmotionCacheOptions: V = {},
  ...F
}) {
  const ee = wh(V);
  xh.hydrateRoot(
    document.getElementById("root"),
    /* @__PURE__ */ Wo.jsx(oh, { children: /* @__PURE__ */ Wo.jsx(yh, { emotionCache: ee, ...F, children: /* @__PURE__ */ Wo.jsx(Th, { children: /* @__PURE__ */ Wo.jsx(lh, { children: ce }) }) }) })
  );
}
export {
  pd as client,
  Td as server
};
//# sourceMappingURL=entry.es.js.map
