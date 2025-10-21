import { g as He, c as te } from "./_commonjsHelpers-DaMA6jEr.js";
import Y from "stream";
import ae from "buffer";
import ze from "events";
import Ct from "util";
var me = { exports: {} }, Ge;
function Lt() {
  return Ge || (Ge = 1, (function(b, h) {
    var y = Y;
    b.exports = d, d.through = d;
    function d(p, l, f) {
      p = p || function(q) {
        this.queue(q);
      }, l = l || function() {
        this.queue(null);
      };
      var t = !1, o = !1, c = [], v = !1, s = new y();
      s.readable = s.writable = !0, s.paused = !1, s.autoDestroy = !(f && f.autoDestroy === !1), s.write = function(q) {
        return p.call(this, q), !s.paused;
      };
      function k() {
        for (; c.length && !s.paused; ) {
          var q = c.shift();
          if (q === null)
            return s.emit("end");
          s.emit("data", q);
        }
      }
      s.queue = s.push = function(q) {
        return v || (q === null && (v = !0), c.push(q), k()), s;
      }, s.on("end", function() {
        s.readable = !1, !s.writable && s.autoDestroy && process.nextTick(function() {
          s.destroy();
        });
      });
      function M() {
        s.writable = !1, l.call(s), !s.readable && s.autoDestroy && s.destroy();
      }
      return s.end = function(q) {
        if (!t)
          return t = !0, arguments.length && s.write(q), M(), s;
      }, s.destroy = function() {
        if (!o)
          return o = !0, t = !0, c.length = 0, s.writable = s.readable = !1, s.emit("close"), s;
      }, s.pause = function() {
        if (!s.paused)
          return s.paused = !0, s;
      }, s.resume = function() {
        return s.paused && (s.paused = !1, s.emit("resume")), k(), s.paused || s.emit("drain"), s;
      }, s;
    }
  })(me)), me.exports;
}
var Nt = Lt();
const Pt = /* @__PURE__ */ He(Nt);
var _e, Ke;
function Ut() {
  if (Ke) return _e;
  Ke = 1;
  var b = Object.prototype.toString, h = typeof Buffer.alloc == "function" && typeof Buffer.allocUnsafe == "function" && typeof Buffer.from == "function";
  function y(f) {
    return b.call(f).slice(8, -1) === "ArrayBuffer";
  }
  function d(f, t, o) {
    t >>>= 0;
    var c = f.byteLength - t;
    if (c < 0)
      throw new RangeError("'offset' is out of bounds");
    if (o === void 0)
      o = c;
    else if (o >>>= 0, o > c)
      throw new RangeError("'length' is out of bounds");
    return h ? Buffer.from(f.slice(t, t + o)) : new Buffer(new Uint8Array(f.slice(t, t + o)));
  }
  function p(f, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !Buffer.isEncoding(t))
      throw new TypeError('"encoding" must be a valid string encoding');
    return h ? Buffer.from(f, t) : new Buffer(f, t);
  }
  function l(f, t, o) {
    if (typeof f == "number")
      throw new TypeError('"value" argument must not be a number');
    return y(f) ? d(f, t, o) : typeof f == "string" ? p(f, t) : h ? Buffer.from(f) : new Buffer(f);
  }
  return _e = l, _e;
}
var se = { exports: {} }, Se, Je;
function It() {
  return Je || (Je = 1, Se = Array.isArray || function(b) {
    return Object.prototype.toString.call(b) == "[object Array]";
  }), Se;
}
var z = {}, Qe;
function J() {
  if (Qe) return z;
  Qe = 1;
  function b(w) {
    return Array.isArray ? Array.isArray(w) : q(w) === "[object Array]";
  }
  z.isArray = b;
  function h(w) {
    return typeof w == "boolean";
  }
  z.isBoolean = h;
  function y(w) {
    return w === null;
  }
  z.isNull = y;
  function d(w) {
    return w == null;
  }
  z.isNullOrUndefined = d;
  function p(w) {
    return typeof w == "number";
  }
  z.isNumber = p;
  function l(w) {
    return typeof w == "string";
  }
  z.isString = l;
  function f(w) {
    return typeof w == "symbol";
  }
  z.isSymbol = f;
  function t(w) {
    return w === void 0;
  }
  z.isUndefined = t;
  function o(w) {
    return q(w) === "[object RegExp]";
  }
  z.isRegExp = o;
  function c(w) {
    return typeof w == "object" && w !== null;
  }
  z.isObject = c;
  function v(w) {
    return q(w) === "[object Date]";
  }
  z.isDate = v;
  function s(w) {
    return q(w) === "[object Error]" || w instanceof Error;
  }
  z.isError = s;
  function k(w) {
    return typeof w == "function";
  }
  z.isFunction = k;
  function M(w) {
    return w === null || typeof w == "boolean" || typeof w == "number" || typeof w == "string" || typeof w == "symbol" || // ES6 symbol
    typeof w > "u";
  }
  z.isPrimitive = M, z.isBuffer = ae.Buffer.isBuffer;
  function q(w) {
    return Object.prototype.toString.call(w);
  }
  return z;
}
var oe = { exports: {} }, Ye;
function K() {
  return Ye || (Ye = 1, typeof Object.create == "function" ? oe.exports = function(h, y) {
    y && (h.super_ = y, h.prototype = Object.create(y.prototype, {
      constructor: {
        value: h,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : oe.exports = function(h, y) {
    if (y) {
      h.super_ = y;
      var d = function() {
      };
      d.prototype = y.prototype, h.prototype = new d(), h.prototype.constructor = h;
    }
  }), oe.exports;
}
var xe = {}, et;
function tt() {
  if (et) return xe;
  et = 1;
  var b = ae.Buffer, h = b.isEncoding || function(t) {
    switch (t && t.toLowerCase()) {
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
  function y(t) {
    if (t && !h(t))
      throw new Error("Unknown encoding: " + t);
  }
  var d = xe.StringDecoder = function(t) {
    switch (this.encoding = (t || "utf8").toLowerCase().replace(/[-_]/, ""), y(t), this.encoding) {
      case "utf8":
        this.surrogateSize = 3;
        break;
      case "ucs2":
      case "utf16le":
        this.surrogateSize = 2, this.detectIncompleteChar = l;
        break;
      case "base64":
        this.surrogateSize = 3, this.detectIncompleteChar = f;
        break;
      default:
        this.write = p;
        return;
    }
    this.charBuffer = new b(6), this.charReceived = 0, this.charLength = 0;
  };
  d.prototype.write = function(t) {
    for (var o = ""; this.charLength; ) {
      var c = t.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : t.length;
      if (t.copy(this.charBuffer, this.charReceived, 0, c), this.charReceived += c, this.charReceived < this.charLength)
        return "";
      t = t.slice(c, t.length), o = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
      var s = o.charCodeAt(o.length - 1);
      if (s >= 55296 && s <= 56319) {
        this.charLength += this.surrogateSize, o = "";
        continue;
      }
      if (this.charReceived = this.charLength = 0, t.length === 0)
        return o;
      break;
    }
    this.detectIncompleteChar(t);
    var v = t.length;
    this.charLength && (t.copy(this.charBuffer, 0, t.length - this.charReceived, v), v -= this.charReceived), o += t.toString(this.encoding, 0, v);
    var v = o.length - 1, s = o.charCodeAt(v);
    if (s >= 55296 && s <= 56319) {
      var k = this.surrogateSize;
      return this.charLength += k, this.charReceived += k, this.charBuffer.copy(this.charBuffer, k, 0, k), t.copy(this.charBuffer, 0, 0, k), o.substring(0, v);
    }
    return o;
  }, d.prototype.detectIncompleteChar = function(t) {
    for (var o = t.length >= 3 ? 3 : t.length; o > 0; o--) {
      var c = t[t.length - o];
      if (o == 1 && c >> 5 == 6) {
        this.charLength = 2;
        break;
      }
      if (o <= 2 && c >> 4 == 14) {
        this.charLength = 3;
        break;
      }
      if (o <= 3 && c >> 3 == 30) {
        this.charLength = 4;
        break;
      }
    }
    this.charReceived = o;
  }, d.prototype.end = function(t) {
    var o = "";
    if (t && t.length && (o = this.write(t)), this.charReceived) {
      var c = this.charReceived, v = this.charBuffer, s = this.encoding;
      o += v.slice(0, c).toString(s);
    }
    return o;
  };
  function p(t) {
    return t.toString(this.encoding);
  }
  function l(t) {
    this.charReceived = t.length % 2, this.charLength = this.charReceived ? 2 : 0;
  }
  function f(t) {
    this.charReceived = t.length % 3, this.charLength = this.charReceived ? 3 : 0;
  }
  return xe;
}
var Re, rt;
function Mt() {
  if (rt) return Re;
  rt = 1, Re = t;
  var b = It(), h = ae.Buffer;
  t.ReadableState = f;
  var y = ze.EventEmitter;
  y.listenerCount || (y.listenerCount = function(i, n) {
    return i.listeners(n).length;
  });
  var d = Y, p = J();
  p.inherits = K();
  var l;
  p.inherits(t, d);
  function f(i, n) {
    i = i || {};
    var R = i.highWaterMark;
    this.highWaterMark = R || R === 0 ? R : 16 * 1024, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = !1, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.calledRead = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!i.objectMode, this.defaultEncoding = i.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, i.encoding && (l || (l = tt().StringDecoder), this.decoder = new l(i.encoding), this.encoding = i.encoding);
  }
  function t(i) {
    if (!(this instanceof t))
      return new t(i);
    this._readableState = new f(i), this.readable = !0, d.call(this);
  }
  t.prototype.push = function(i, n) {
    var R = this._readableState;
    return typeof i == "string" && !R.objectMode && (n = n || R.defaultEncoding, n !== R.encoding && (i = new h(i, n), n = "")), o(this, R, i, n, !1);
  }, t.prototype.unshift = function(i) {
    var n = this._readableState;
    return o(this, n, i, "", !0);
  };
  function o(i, n, R, j, N) {
    var H = M(n, R);
    if (H)
      i.emit("error", H);
    else if (R == null)
      n.reading = !1, n.ended || q(i, n);
    else if (n.objectMode || R && R.length > 0)
      if (n.ended && !N) {
        var a = new Error("stream.push() after EOF");
        i.emit("error", a);
      } else if (n.endEmitted && N) {
        var a = new Error("stream.unshift() after end event");
        i.emit("error", a);
      } else
        n.decoder && !N && !j && (R = n.decoder.write(R)), n.length += n.objectMode ? 1 : R.length, N ? n.buffer.unshift(R) : (n.reading = !1, n.buffer.push(R)), n.needReadable && w(i), g(i, n);
    else N || (n.reading = !1);
    return c(n);
  }
  function c(i) {
    return !i.ended && (i.needReadable || i.length < i.highWaterMark || i.length === 0);
  }
  t.prototype.setEncoding = function(i) {
    l || (l = tt().StringDecoder), this._readableState.decoder = new l(i), this._readableState.encoding = i;
  };
  var v = 8388608;
  function s(i) {
    if (i >= v)
      i = v;
    else {
      i--;
      for (var n = 1; n < 32; n <<= 1) i |= i >> n;
      i++;
    }
    return i;
  }
  function k(i, n) {
    return n.length === 0 && n.ended ? 0 : n.objectMode ? i === 0 ? 0 : 1 : i === null || isNaN(i) ? n.flowing && n.buffer.length ? n.buffer[0].length : n.length : i <= 0 ? 0 : (i > n.highWaterMark && (n.highWaterMark = s(i)), i > n.length ? n.ended ? n.length : (n.needReadable = !0, 0) : i);
  }
  t.prototype.read = function(i) {
    var n = this._readableState;
    n.calledRead = !0;
    var R = i, j;
    if ((typeof i != "number" || i > 0) && (n.emittedReadable = !1), i === 0 && n.needReadable && (n.length >= n.highWaterMark || n.ended))
      return w(this), null;
    if (i = k(i, n), i === 0 && n.ended)
      return j = null, n.length > 0 && n.decoder && (j = D(i, n), n.length -= j.length), n.length === 0 && U(this), j;
    var N = n.needReadable;
    return n.length - i <= n.highWaterMark && (N = !0), (n.ended || n.reading) && (N = !1), N && (n.reading = !0, n.sync = !0, n.length === 0 && (n.needReadable = !0), this._read(n.highWaterMark), n.sync = !1), N && !n.reading && (i = k(R, n)), i > 0 ? j = D(i, n) : j = null, j === null && (n.needReadable = !0, i = 0), n.length -= i, n.length === 0 && !n.ended && (n.needReadable = !0), n.ended && !n.endEmitted && n.length === 0 && U(this), j;
  };
  function M(i, n) {
    var R = null;
    return !h.isBuffer(n) && typeof n != "string" && n !== null && n !== void 0 && !i.objectMode && (R = new TypeError("Invalid non-string/buffer chunk")), R;
  }
  function q(i, n) {
    if (n.decoder && !n.ended) {
      var R = n.decoder.end();
      R && R.length && (n.buffer.push(R), n.length += n.objectMode ? 1 : R.length);
    }
    n.ended = !0, n.length > 0 ? w(i) : U(i);
  }
  function w(i) {
    var n = i._readableState;
    n.needReadable = !1, !n.emittedReadable && (n.emittedReadable = !0, n.sync ? process.nextTick(function() {
      F(i);
    }) : F(i));
  }
  function F(i) {
    i.emit("readable");
  }
  function g(i, n) {
    n.readingMore || (n.readingMore = !0, process.nextTick(function() {
      x(i, n);
    }));
  }
  function x(i, n) {
    for (var R = n.length; !n.reading && !n.flowing && !n.ended && n.length < n.highWaterMark && (i.read(0), R !== n.length); )
      R = n.length;
    n.readingMore = !1;
  }
  t.prototype._read = function(i) {
    this.emit("error", new Error("not implemented"));
  }, t.prototype.pipe = function(i, n) {
    var R = this, j = this._readableState;
    switch (j.pipesCount) {
      case 0:
        j.pipes = i;
        break;
      case 1:
        j.pipes = [j.pipes, i];
        break;
      default:
        j.pipes.push(i);
        break;
    }
    j.pipesCount += 1;
    var N = (!n || n.end !== !1) && i !== process.stdout && i !== process.stderr, H = N ? u : B;
    j.endEmitted ? process.nextTick(H) : R.once("end", H), i.on("unpipe", a);
    function a(G) {
      G === R && B();
    }
    function u() {
      i.end();
    }
    var S = O(R);
    i.on("drain", S);
    function B() {
      i.removeListener("close", L), i.removeListener("finish", V), i.removeListener("drain", S), i.removeListener("error", W), i.removeListener("unpipe", a), R.removeListener("end", u), R.removeListener("end", B), (!i._writableState || i._writableState.needDrain) && S();
    }
    function W(G) {
      X(), i.removeListener("error", W), y.listenerCount(i, "error") === 0 && i.emit("error", G);
    }
    !i._events || !i._events.error ? i.on("error", W) : b(i._events.error) ? i._events.error.unshift(W) : i._events.error = [W, i._events.error];
    function L() {
      i.removeListener("finish", V), X();
    }
    i.once("close", L);
    function V() {
      i.removeListener("close", L), X();
    }
    i.once("finish", V);
    function X() {
      R.unpipe(i);
    }
    return i.emit("pipe", R), j.flowing || (this.on("readable", m), j.flowing = !0, process.nextTick(function() {
      _(R);
    })), i;
  };
  function O(i) {
    return function() {
      var n = i._readableState;
      n.awaitDrain--, n.awaitDrain === 0 && _(i);
    };
  }
  function _(i) {
    var n = i._readableState, R;
    n.awaitDrain = 0;
    function j(N, H, a) {
      var u = N.write(R);
      u === !1 && n.awaitDrain++;
    }
    for (; n.pipesCount && (R = i.read()) !== null; )
      if (n.pipesCount === 1 ? j(n.pipes) : $(n.pipes, j), i.emit("data", R), n.awaitDrain > 0)
        return;
    if (n.pipesCount === 0) {
      n.flowing = !1, y.listenerCount(i, "data") > 0 && T(i);
      return;
    }
    n.ranOut = !0;
  }
  function m() {
    this._readableState.ranOut && (this._readableState.ranOut = !1, _(this));
  }
  t.prototype.unpipe = function(i) {
    var n = this._readableState;
    if (n.pipesCount === 0)
      return this;
    if (n.pipesCount === 1)
      return i && i !== n.pipes ? this : (i || (i = n.pipes), n.pipes = null, n.pipesCount = 0, this.removeListener("readable", m), n.flowing = !1, i && i.emit("unpipe", this), this);
    if (!i) {
      var R = n.pipes, j = n.pipesCount;
      n.pipes = null, n.pipesCount = 0, this.removeListener("readable", m), n.flowing = !1;
      for (var N = 0; N < j; N++)
        R[N].emit("unpipe", this);
      return this;
    }
    var N = Z(n.pipes, i);
    return N === -1 ? this : (n.pipes.splice(N, 1), n.pipesCount -= 1, n.pipesCount === 1 && (n.pipes = n.pipes[0]), i.emit("unpipe", this), this);
  }, t.prototype.on = function(i, n) {
    var R = d.prototype.on.call(this, i, n);
    if (i === "data" && !this._readableState.flowing && T(this), i === "readable" && this.readable) {
      var j = this._readableState;
      j.readableListening || (j.readableListening = !0, j.emittedReadable = !1, j.needReadable = !0, j.reading ? j.length && w(this) : this.read(0));
    }
    return R;
  }, t.prototype.addListener = t.prototype.on, t.prototype.resume = function() {
    T(this), this.read(0), this.emit("resume");
  }, t.prototype.pause = function() {
    T(this, !0), this.emit("pause");
  };
  function T(i, n) {
    var R = i._readableState;
    if (R.flowing)
      throw new Error("Cannot switch to old mode now.");
    var j = n || !1, N = !1;
    i.readable = !0, i.pipe = d.prototype.pipe, i.on = i.addListener = d.prototype.on, i.on("readable", function() {
      N = !0;
      for (var H; !j && (H = i.read()) !== null; )
        i.emit("data", H);
      H === null && (N = !1, i._readableState.needReadable = !0);
    }), i.pause = function() {
      j = !0, this.emit("pause");
    }, i.resume = function() {
      j = !1, N ? process.nextTick(function() {
        i.emit("readable");
      }) : this.read(0), this.emit("resume");
    }, i.emit("readable");
  }
  t.prototype.wrap = function(i) {
    var n = this._readableState, R = !1, j = this;
    i.on("end", function() {
      if (n.decoder && !n.ended) {
        var a = n.decoder.end();
        a && a.length && j.push(a);
      }
      j.push(null);
    }), i.on("data", function(a) {
      if (n.decoder && (a = n.decoder.write(a)), !(n.objectMode && a == null) && !(!n.objectMode && (!a || !a.length))) {
        var u = j.push(a);
        u || (R = !0, i.pause());
      }
    });
    for (var N in i)
      typeof i[N] == "function" && typeof this[N] > "u" && (this[N] = /* @__PURE__ */ (function(a) {
        return function() {
          return i[a].apply(i, arguments);
        };
      })(N));
    var H = ["error", "close", "destroy", "pause", "resume"];
    return $(H, function(a) {
      i.on(a, j.emit.bind(j, a));
    }), j._read = function(a) {
      R && (R = !1, i.resume());
    }, j;
  }, t._fromList = D;
  function D(i, n) {
    var R = n.buffer, j = n.length, N = !!n.decoder, H = !!n.objectMode, a;
    if (R.length === 0)
      return null;
    if (j === 0)
      a = null;
    else if (H)
      a = R.shift();
    else if (!i || i >= j)
      N ? a = R.join("") : a = h.concat(R, j), R.length = 0;
    else if (i < R[0].length) {
      var u = R[0];
      a = u.slice(0, i), R[0] = u.slice(i);
    } else if (i === R[0].length)
      a = R.shift();
    else {
      N ? a = "" : a = new h(i);
      for (var S = 0, B = 0, W = R.length; B < W && S < i; B++) {
        var u = R[0], L = Math.min(i - S, u.length);
        N ? a += u.slice(0, L) : u.copy(a, S, 0, L), L < u.length ? R[0] = u.slice(L) : R.shift(), S += L;
      }
    }
    return a;
  }
  function U(i) {
    var n = i._readableState;
    if (n.length > 0)
      throw new Error("endReadable called on non-empty stream");
    !n.endEmitted && n.calledRead && (n.ended = !0, process.nextTick(function() {
      !n.endEmitted && n.length === 0 && (n.endEmitted = !0, i.readable = !1, i.emit("end"));
    }));
  }
  function $(i, n) {
    for (var R = 0, j = i.length; R < j; R++)
      n(i[R], R);
  }
  function Z(i, n) {
    for (var R = 0, j = i.length; R < j; R++)
      if (i[R] === n) return R;
    return -1;
  }
  return Re;
}
var Ee, it;
function Ve() {
  if (it) return Ee;
  it = 1, Ee = p;
  var b = Object.keys || function(t) {
    var o = [];
    for (var c in t) o.push(c);
    return o;
  }, h = J();
  h.inherits = K();
  var y = Mt(), d = kt();
  h.inherits(p, y), f(b(d.prototype), function(t) {
    p.prototype[t] || (p.prototype[t] = d.prototype[t]);
  });
  function p(t) {
    if (!(this instanceof p))
      return new p(t);
    y.call(this, t), d.call(this, t), t && t.readable === !1 && (this.readable = !1), t && t.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, t && t.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", l);
  }
  function l() {
    this.allowHalfOpen || this._writableState.ended || process.nextTick(this.end.bind(this));
  }
  function f(t, o) {
    for (var c = 0, v = t.length; c < v; c++)
      o(t[c], c);
  }
  return Ee;
}
var Te, nt;
function kt() {
  if (nt) return Te;
  nt = 1, Te = l;
  var b = ae.Buffer;
  l.WritableState = p;
  var h = J();
  h.inherits = K();
  var y = Y;
  h.inherits(l, y);
  function d(_, m, T) {
    this.chunk = _, this.encoding = m, this.callback = T;
  }
  function p(_, m) {
    _ = _ || {};
    var T = _.highWaterMark;
    this.highWaterMark = T || T === 0 ? T : 16 * 1024, this.objectMode = !!_.objectMode, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
    var D = _.decodeStrings === !1;
    this.decodeStrings = !D, this.defaultEncoding = _.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(U) {
      M(m, U);
    }, this.writecb = null, this.writelen = 0, this.buffer = [], this.errorEmitted = !1;
  }
  function l(_) {
    var m = Ve();
    if (!(this instanceof l) && !(this instanceof m))
      return new l(_);
    this._writableState = new p(_, this), this.writable = !0, y.call(this);
  }
  l.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe. Not readable."));
  };
  function f(_, m, T) {
    var D = new Error("write after end");
    _.emit("error", D), process.nextTick(function() {
      T(D);
    });
  }
  function t(_, m, T, D) {
    var U = !0;
    if (!b.isBuffer(T) && typeof T != "string" && T !== null && T !== void 0 && !m.objectMode) {
      var $ = new TypeError("Invalid non-string/buffer chunk");
      _.emit("error", $), process.nextTick(function() {
        D($);
      }), U = !1;
    }
    return U;
  }
  l.prototype.write = function(_, m, T) {
    var D = this._writableState, U = !1;
    return typeof m == "function" && (T = m, m = null), b.isBuffer(_) ? m = "buffer" : m || (m = D.defaultEncoding), typeof T != "function" && (T = function() {
    }), D.ended ? f(this, D, T) : t(this, D, _, T) && (U = c(this, D, _, m, T)), U;
  };
  function o(_, m, T) {
    return !_.objectMode && _.decodeStrings !== !1 && typeof m == "string" && (m = new b(m, T)), m;
  }
  function c(_, m, T, D, U) {
    T = o(m, T, D), b.isBuffer(T) && (D = "buffer");
    var $ = m.objectMode ? 1 : T.length;
    m.length += $;
    var Z = m.length < m.highWaterMark;
    return Z || (m.needDrain = !0), m.writing ? m.buffer.push(new d(T, D, U)) : v(_, m, $, T, D, U), Z;
  }
  function v(_, m, T, D, U, $) {
    m.writelen = T, m.writecb = $, m.writing = !0, m.sync = !0, _._write(D, U, m.onwrite), m.sync = !1;
  }
  function s(_, m, T, D, U) {
    T ? process.nextTick(function() {
      U(D);
    }) : U(D), _._writableState.errorEmitted = !0, _.emit("error", D);
  }
  function k(_) {
    _.writing = !1, _.writecb = null, _.length -= _.writelen, _.writelen = 0;
  }
  function M(_, m) {
    var T = _._writableState, D = T.sync, U = T.writecb;
    if (k(T), m)
      s(_, T, D, m, U);
    else {
      var $ = g(_, T);
      !$ && !T.bufferProcessing && T.buffer.length && F(_, T), D ? process.nextTick(function() {
        q(_, T, $, U);
      }) : q(_, T, $, U);
    }
  }
  function q(_, m, T, D) {
    T || w(_, m), D(), T && x(_, m);
  }
  function w(_, m) {
    m.length === 0 && m.needDrain && (m.needDrain = !1, _.emit("drain"));
  }
  function F(_, m) {
    m.bufferProcessing = !0;
    for (var T = 0; T < m.buffer.length; T++) {
      var D = m.buffer[T], U = D.chunk, $ = D.encoding, Z = D.callback, i = m.objectMode ? 1 : U.length;
      if (v(_, m, i, U, $, Z), m.writing) {
        T++;
        break;
      }
    }
    m.bufferProcessing = !1, T < m.buffer.length ? m.buffer = m.buffer.slice(T) : m.buffer.length = 0;
  }
  l.prototype._write = function(_, m, T) {
    T(new Error("not implemented"));
  }, l.prototype.end = function(_, m, T) {
    var D = this._writableState;
    typeof _ == "function" ? (T = _, _ = null, m = null) : typeof m == "function" && (T = m, m = null), typeof _ < "u" && _ !== null && this.write(_, m), !D.ending && !D.finished && O(this, D, T);
  };
  function g(_, m) {
    return m.ending && m.length === 0 && !m.finished && !m.writing;
  }
  function x(_, m) {
    var T = g(_, m);
    return T && (m.finished = !0, _.emit("finish")), T;
  }
  function O(_, m, T) {
    m.ending = !0, x(_, m), T && (m.finished ? process.nextTick(T) : _.once("finish", T)), m.ended = !0;
  }
  return Te;
}
var Ce, at;
function qt() {
  if (at) return Ce;
  at = 1, Ce = p;
  var b = Ve(), h = J();
  h.inherits = K(), h.inherits(p, b);
  function y(f, t) {
    this.afterTransform = function(o, c) {
      return d(t, o, c);
    }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null;
  }
  function d(f, t, o) {
    var c = f._transformState;
    c.transforming = !1;
    var v = c.writecb;
    if (!v)
      return f.emit("error", new Error("no writecb in Transform class"));
    c.writechunk = null, c.writecb = null, o != null && f.push(o), v && v(t);
    var s = f._readableState;
    s.reading = !1, (s.needReadable || s.length < s.highWaterMark) && f._read(s.highWaterMark);
  }
  function p(f) {
    if (!(this instanceof p))
      return new p(f);
    b.call(this, f), this._transformState = new y(f, this);
    var t = this;
    this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("finish", function() {
      typeof this._flush == "function" ? this._flush(function(o) {
        l(t, o);
      }) : l(t);
    });
  }
  p.prototype.push = function(f, t) {
    return this._transformState.needTransform = !1, b.prototype.push.call(this, f, t);
  }, p.prototype._transform = function(f, t, o) {
    throw new Error("not implemented");
  }, p.prototype._write = function(f, t, o) {
    var c = this._transformState;
    if (c.writecb = o, c.writechunk = f, c.writeencoding = t, !c.transforming) {
      var v = this._readableState;
      (c.needTransform || v.needReadable || v.length < v.highWaterMark) && this._read(v.highWaterMark);
    }
  }, p.prototype._read = function(f) {
    var t = this._transformState;
    t.writechunk !== null && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
  };
  function l(f, t) {
    if (t)
      return f.emit("error", t);
    var o = f._writableState;
    f._readableState;
    var c = f._transformState;
    if (o.length)
      throw new Error("calling transform done when ws.length != 0");
    if (c.transforming)
      throw new Error("calling transform done when still transforming");
    return f.push(null);
  }
  return Ce;
}
var Me, ft;
function Ft() {
  if (ft) return Me;
  ft = 1, Me = y;
  var b = qt(), h = J();
  h.inherits = K(), h.inherits(y, b);
  function y(d) {
    if (!(this instanceof y))
      return new y(d);
    b.call(this, d);
  }
  return y.prototype._transform = function(d, p, l) {
    l(null, d);
  }, Me;
}
var st;
function $t() {
  return st || (st = 1, (function(b, h) {
    var y = Y;
    h = b.exports = Mt(), h.Stream = y, h.Readable = h, h.Writable = kt(), h.Duplex = Ve(), h.Transform = qt(), h.PassThrough = Ft(), !process.browser && process.env.READABLE_STREAM === "disable" && (b.exports = Y);
  })(se, se.exports)), se.exports;
}
var ke, ot;
function Ht() {
  if (ot) return ke;
  ot = 1;
  var b = Ut(), h = $t().Transform, y = K();
  y(f, h), ke = f;
  var d = {
    lt: 60,
    gt: 62,
    slash: 47,
    dquote: 34,
    squote: 39,
    equal: 61
  }, p = {
    endScript: b("<\/script"),
    endStyle: b("</style"),
    endTitle: b("</title"),
    comment: b("<!--"),
    endComment: b("-->"),
    cdata: b("<![CDATA["),
    endCdata: b("]]>")
  }, l = {
    TagNameState: 1,
    AttributeNameState: 2,
    BeforeAttributeValueState: 3,
    AttributeValueState: 4
  };
  function f() {
    if (!(this instanceof f)) return new f();
    h.call(this), this._readableState.objectMode = !0, this.state = "text", this.tagState = null, this.quoteState = null, this.raw = null, this.buffers = [], this._last = [];
  }
  f.prototype._transform = function(v, s, k) {
    var M = 0, q = 0;
    for (this._prev && (v = Buffer.concat([this._prev, v]), M = this._prev.length - 1, q = this._offset, this._prev = null, this._offset = 0); M < v.length; M++) {
      var w = v[M];
      if (this._last.push(w), this._last.length > 9 && this._last.shift(), this.raw) {
        var F = this._testRaw(v, q, M);
        F && (this.push(["text", F[0]]), this.raw === p.endComment || this.raw === p.endCdata ? (this.state = "text", this.buffers = [], this.push(["close", F[1]])) : (this.state = "open", this.buffers = [F[1]]), this.raw = null, q = M + 1);
      } else {
        if (this.state === "text" && w === d.lt && M === v.length - 1)
          return this._prev = v, this._offset = q, k();
        if (this.state === "text" && w === d.lt && !c(v[M + 1]))
          M > 0 && M - q > 0 && this.buffers.push(v.slice(q, M)), q = M, this.state = "open", this.tagState = l.TagNameState, this._pushState("text");
        else if (this.tagState === l.TagNameState && c(w))
          this.tagState = l.AttributeNameState;
        else if (this.tagState === l.AttributeNameState && w === d.equal)
          this.tagState = l.BeforeAttributeValueState;
        else if (!(this.tagState === l.BeforeAttributeValueState && c(w))) if (this.tagState === l.BeforeAttributeValueState && w !== d.gt)
          this.tagState = l.AttributeValueState, w === d.dquote ? this.quoteState = "double" : w === d.squote ? this.quoteState = "single" : this.quoteState = null;
        else if (this.tagState === l.AttributeValueState && !this.quoteState && c(w))
          this.tagState = l.AttributeNameState;
        else if (this.tagState === l.AttributeValueState && this.quoteState === "double" && w === d.dquote)
          this.quoteState = null, this.tagState = l.AttributeNameState;
        else if (this.tagState === l.AttributeValueState && this.quoteState === "single" && w === d.squote)
          this.quoteState = null, this.tagState = l.AttributeNameState;
        else if (this.state === "open" && w === d.gt && !this.quoteState)
          if (this.buffers.push(v.slice(q, M + 1)), q = M + 1, this.state = "text", this.tagState = null, this._getChar(1) === d.slash)
            this._pushState("close");
          else {
            var g = this._getTag();
            g === "script" && (this.raw = p.endScript), g === "style" && (this.raw = p.endStyle), g === "title" && (this.raw = p.endTitle), this._pushState("open");
          }
        else this.state === "open" && t(this._last, p.comment) ? (this.buffers.push(v.slice(q, M + 1)), q = M + 1, this.state = "text", this.raw = p.endComment, this._pushState("open")) : this.state === "open" && t(this._last, p.cdata) && (this.buffers.push(v.slice(q, M + 1)), q = M + 1, this.state = "text", this.raw = p.endCdata, this._pushState("open"));
      }
    }
    q < v.length && this.buffers.push(v.slice(q)), k();
  }, f.prototype._flush = function(v) {
    this.state === "text" && this._pushState("text"), this.push(null), v();
  }, f.prototype._pushState = function(v) {
    if (this.buffers.length !== 0) {
      var s = Buffer.concat(this.buffers);
      this.buffers = [], this.push([v, s]);
    }
  }, f.prototype._getChar = function(v) {
    for (var s = 0, k = 0; k < this.buffers.length; k++) {
      var M = this.buffers[k];
      if (s + M.length > v)
        return M[v - s];
      s += M;
    }
  }, f.prototype._getTag = function() {
    for (var v = 0, s = "", k = 0; k < this.buffers.length; k++) {
      for (var M = this.buffers[k], q = 0; q < M.length; q++)
        if (!(v === 0 && q === 0)) {
          var w = String.fromCharCode(M[q]);
          if (/[^\w-!\[\]]/.test(w))
            return s.toLowerCase();
          s += w;
        }
      v += M.length;
    }
  }, f.prototype._testRaw = function(w, s, k) {
    var M = this.raw, q = this._last;
    if (t(q, M)) {
      this.buffers.push(w.slice(s, k + 1));
      var w = Buffer.concat(this.buffers), F = w.length - M.length;
      return [w.slice(0, F), w.slice(F)];
    }
  };
  function t(v, s) {
    if (v.length < s.length) return !1;
    for (var k = v.length - 1, M = s.length - 1; k >= 0 && M >= 0; k--, M--)
      if (o(v[k]) !== o(s[M])) return !1;
    return !0;
  }
  function o(v) {
    return v >= 65 && v <= 90 ? v + 32 : v;
  }
  function c(v) {
    return v === 32 || v === 9 || v === 10 || v === 12 || v === 13;
  }
  return ke;
}
var zt = Ht();
const Vt = /* @__PURE__ */ He(zt);
var le = { exports: {} }, ue = { exports: {} }, he = { exports: {} }, lt;
function ce() {
  if (lt) return he.exports;
  lt = 1, typeof process > "u" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0 ? he.exports = { nextTick: b } : he.exports = process;
  function b(h, y, d, p) {
    if (typeof h != "function")
      throw new TypeError('"callback" argument must be a function');
    var l = arguments.length, f, t;
    switch (l) {
      case 0:
      case 1:
        return process.nextTick(h);
      case 2:
        return process.nextTick(function() {
          h.call(null, y);
        });
      case 3:
        return process.nextTick(function() {
          h.call(null, y, d);
        });
      case 4:
        return process.nextTick(function() {
          h.call(null, y, d, p);
        });
      default:
        for (f = new Array(l - 1), t = 0; t < f.length; )
          f[t++] = arguments[t];
        return process.nextTick(function() {
          h.apply(null, f);
        });
    }
  }
  return he.exports;
}
var qe, ut;
function Xt() {
  if (ut) return qe;
  ut = 1;
  var b = {}.toString;
  return qe = Array.isArray || function(h) {
    return b.call(h) == "[object Array]";
  }, qe;
}
var je, ht;
function jt() {
  return ht || (ht = 1, je = ze.EventEmitter), je;
}
var de = { exports: {} }, dt;
function pe() {
  return dt || (dt = 1, (function(b, h) {
    var y = ae, d = y.Buffer;
    function p(f, t) {
      for (var o in f)
        t[o] = f[o];
    }
    d.from && d.alloc && d.allocUnsafe && d.allocUnsafeSlow ? b.exports = y : (p(y, h), h.Buffer = l);
    function l(f, t, o) {
      return d(f, t, o);
    }
    p(d, l), l.from = function(f, t, o) {
      if (typeof f == "number")
        throw new TypeError("Argument must not be a number");
      return d(f, t, o);
    }, l.alloc = function(f, t, o) {
      if (typeof f != "number")
        throw new TypeError("Argument must be a number");
      var c = d(f);
      return t !== void 0 ? typeof o == "string" ? c.fill(t, o) : c.fill(t) : c.fill(0), c;
    }, l.allocUnsafe = function(f) {
      if (typeof f != "number")
        throw new TypeError("Argument must be a number");
      return d(f);
    }, l.allocUnsafeSlow = function(f) {
      if (typeof f != "number")
        throw new TypeError("Argument must be a number");
      return y.SlowBuffer(f);
    };
  })(de, de.exports)), de.exports;
}
var Be = { exports: {} }, ct;
function Zt() {
  return ct || (ct = 1, (function(b) {
    function h(l, f) {
      if (!(l instanceof f))
        throw new TypeError("Cannot call a class as a function");
    }
    var y = pe().Buffer, d = Ct;
    function p(l, f, t) {
      l.copy(f, t);
    }
    b.exports = (function() {
      function l() {
        h(this, l), this.head = null, this.tail = null, this.length = 0;
      }
      return l.prototype.push = function(t) {
        var o = { data: t, next: null };
        this.length > 0 ? this.tail.next = o : this.head = o, this.tail = o, ++this.length;
      }, l.prototype.unshift = function(t) {
        var o = { data: t, next: this.head };
        this.length === 0 && (this.tail = o), this.head = o, ++this.length;
      }, l.prototype.shift = function() {
        if (this.length !== 0) {
          var t = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
        }
      }, l.prototype.clear = function() {
        this.head = this.tail = null, this.length = 0;
      }, l.prototype.join = function(t) {
        if (this.length === 0) return "";
        for (var o = this.head, c = "" + o.data; o = o.next; )
          c += t + o.data;
        return c;
      }, l.prototype.concat = function(t) {
        if (this.length === 0) return y.alloc(0);
        for (var o = y.allocUnsafe(t >>> 0), c = this.head, v = 0; c; )
          p(c.data, o, v), v += c.data.length, c = c.next;
        return o;
      }, l;
    })(), d && d.inspect && d.inspect.custom && (b.exports.prototype[d.inspect.custom] = function() {
      var l = d.inspect({ length: this.length });
      return this.constructor.name + " " + l;
    });
  })(Be)), Be.exports;
}
var De, pt;
function Bt() {
  if (pt) return De;
  pt = 1;
  var b = ce();
  function h(p, l) {
    var f = this, t = this._readableState && this._readableState.destroyed, o = this._writableState && this._writableState.destroyed;
    return t || o ? (l ? l(p) : p && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, b.nextTick(d, this, p)) : b.nextTick(d, this, p)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(p || null, function(c) {
      !l && c ? f._writableState ? f._writableState.errorEmitted || (f._writableState.errorEmitted = !0, b.nextTick(d, f, c)) : b.nextTick(d, f, c) : l && l(c);
    }), this);
  }
  function y() {
    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
  }
  function d(p, l) {
    p.emit("error", l);
  }
  return De = {
    destroy: h,
    undestroy: y
  }, De;
}
var Ae, gt;
function Gt() {
  if (gt) return Ae;
  gt = 1, Ae = b;
  function b(y, d) {
    if (h("noDeprecation"))
      return y;
    var p = !1;
    function l() {
      if (!p) {
        if (h("throwDeprecation"))
          throw new Error(d);
        h("traceDeprecation") ? console.trace(d) : console.warn(d), p = !0;
      }
      return y.apply(this, arguments);
    }
    return l;
  }
  function h(y) {
    try {
      if (!te.localStorage) return !1;
    } catch {
      return !1;
    }
    var d = te.localStorage[y];
    return d == null ? !1 : String(d).toLowerCase() === "true";
  }
  return Ae;
}
var Oe, vt;
function Dt() {
  if (vt) return Oe;
  vt = 1;
  var b = ce();
  Oe = w;
  function h(a) {
    var u = this;
    this.next = null, this.entry = null, this.finish = function() {
      H(u, a);
    };
  }
  var y = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : b.nextTick, d;
  w.WritableState = M;
  var p = Object.create(J());
  p.inherits = K();
  var l = {
    deprecate: Gt()
  }, f = jt(), t = pe().Buffer, o = (typeof te < "u" ? te : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function c(a) {
    return t.from(a);
  }
  function v(a) {
    return t.isBuffer(a) || a instanceof o;
  }
  var s = Bt();
  p.inherits(w, f);
  function k() {
  }
  function M(a, u) {
    d = d || re(), a = a || {};
    var S = u instanceof d;
    this.objectMode = !!a.objectMode, S && (this.objectMode = this.objectMode || !!a.writableObjectMode);
    var B = a.highWaterMark, W = a.writableHighWaterMark, L = this.objectMode ? 16 : 16 * 1024;
    B || B === 0 ? this.highWaterMark = B : S && (W || W === 0) ? this.highWaterMark = W : this.highWaterMark = L, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var V = a.decodeStrings === !1;
    this.decodeStrings = !V, this.defaultEncoding = a.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(X) {
      D(u, X);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new h(this);
  }
  M.prototype.getBuffer = function() {
    for (var u = this.bufferedRequest, S = []; u; )
      S.push(u), u = u.next;
    return S;
  }, (function() {
    try {
      Object.defineProperty(M.prototype, "buffer", {
        get: l.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  })();
  var q;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (q = Function.prototype[Symbol.hasInstance], Object.defineProperty(w, Symbol.hasInstance, {
    value: function(a) {
      return q.call(this, a) ? !0 : this !== w ? !1 : a && a._writableState instanceof M;
    }
  })) : q = function(a) {
    return a instanceof this;
  };
  function w(a) {
    if (d = d || re(), !q.call(w, this) && !(this instanceof d))
      return new w(a);
    this._writableState = new M(a, this), this.writable = !0, a && (typeof a.write == "function" && (this._write = a.write), typeof a.writev == "function" && (this._writev = a.writev), typeof a.destroy == "function" && (this._destroy = a.destroy), typeof a.final == "function" && (this._final = a.final)), f.call(this);
  }
  w.prototype.pipe = function() {
    this.emit("error", new Error("Cannot pipe, not readable"));
  };
  function F(a, u) {
    var S = new Error("write after end");
    a.emit("error", S), b.nextTick(u, S);
  }
  function g(a, u, S, B) {
    var W = !0, L = !1;
    return S === null ? L = new TypeError("May not write null values to stream") : typeof S != "string" && S !== void 0 && !u.objectMode && (L = new TypeError("Invalid non-string/buffer chunk")), L && (a.emit("error", L), b.nextTick(B, L), W = !1), W;
  }
  w.prototype.write = function(a, u, S) {
    var B = this._writableState, W = !1, L = !B.objectMode && v(a);
    return L && !t.isBuffer(a) && (a = c(a)), typeof u == "function" && (S = u, u = null), L ? u = "buffer" : u || (u = B.defaultEncoding), typeof S != "function" && (S = k), B.ended ? F(this, S) : (L || g(this, B, a, S)) && (B.pendingcb++, W = O(this, B, L, a, u, S)), W;
  }, w.prototype.cork = function() {
    var a = this._writableState;
    a.corked++;
  }, w.prototype.uncork = function() {
    var a = this._writableState;
    a.corked && (a.corked--, !a.writing && !a.corked && !a.bufferProcessing && a.bufferedRequest && Z(this, a));
  }, w.prototype.setDefaultEncoding = function(u) {
    if (typeof u == "string" && (u = u.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((u + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + u);
    return this._writableState.defaultEncoding = u, this;
  };
  function x(a, u, S) {
    return !a.objectMode && a.decodeStrings !== !1 && typeof u == "string" && (u = t.from(u, S)), u;
  }
  Object.defineProperty(w.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function O(a, u, S, B, W, L) {
    if (!S) {
      var V = x(u, B, W);
      B !== V && (S = !0, W = "buffer", B = V);
    }
    var X = u.objectMode ? 1 : B.length;
    u.length += X;
    var G = u.length < u.highWaterMark;
    if (G || (u.needDrain = !0), u.writing || u.corked) {
      var Q = u.lastBufferedRequest;
      u.lastBufferedRequest = {
        chunk: B,
        encoding: W,
        isBuf: S,
        callback: L,
        next: null
      }, Q ? Q.next = u.lastBufferedRequest : u.bufferedRequest = u.lastBufferedRequest, u.bufferedRequestCount += 1;
    } else
      _(a, u, !1, X, B, W, L);
    return G;
  }
  function _(a, u, S, B, W, L, V) {
    u.writelen = B, u.writecb = V, u.writing = !0, u.sync = !0, S ? a._writev(W, u.onwrite) : a._write(W, L, u.onwrite), u.sync = !1;
  }
  function m(a, u, S, B, W) {
    --u.pendingcb, S ? (b.nextTick(W, B), b.nextTick(j, a, u), a._writableState.errorEmitted = !0, a.emit("error", B)) : (W(B), a._writableState.errorEmitted = !0, a.emit("error", B), j(a, u));
  }
  function T(a) {
    a.writing = !1, a.writecb = null, a.length -= a.writelen, a.writelen = 0;
  }
  function D(a, u) {
    var S = a._writableState, B = S.sync, W = S.writecb;
    if (T(S), u) m(a, S, B, u, W);
    else {
      var L = i(S);
      !L && !S.corked && !S.bufferProcessing && S.bufferedRequest && Z(a, S), B ? y(U, a, S, L, W) : U(a, S, L, W);
    }
  }
  function U(a, u, S, B) {
    S || $(a, u), u.pendingcb--, B(), j(a, u);
  }
  function $(a, u) {
    u.length === 0 && u.needDrain && (u.needDrain = !1, a.emit("drain"));
  }
  function Z(a, u) {
    u.bufferProcessing = !0;
    var S = u.bufferedRequest;
    if (a._writev && S && S.next) {
      var B = u.bufferedRequestCount, W = new Array(B), L = u.corkedRequestsFree;
      L.entry = S;
      for (var V = 0, X = !0; S; )
        W[V] = S, S.isBuf || (X = !1), S = S.next, V += 1;
      W.allBuffers = X, _(a, u, !0, u.length, W, "", L.finish), u.pendingcb++, u.lastBufferedRequest = null, L.next ? (u.corkedRequestsFree = L.next, L.next = null) : u.corkedRequestsFree = new h(u), u.bufferedRequestCount = 0;
    } else {
      for (; S; ) {
        var G = S.chunk, Q = S.encoding, e = S.callback, r = u.objectMode ? 1 : G.length;
        if (_(a, u, !1, r, G, Q, e), S = S.next, u.bufferedRequestCount--, u.writing)
          break;
      }
      S === null && (u.lastBufferedRequest = null);
    }
    u.bufferedRequest = S, u.bufferProcessing = !1;
  }
  w.prototype._write = function(a, u, S) {
    S(new Error("_write() is not implemented"));
  }, w.prototype._writev = null, w.prototype.end = function(a, u, S) {
    var B = this._writableState;
    typeof a == "function" ? (S = a, a = null, u = null) : typeof u == "function" && (S = u, u = null), a != null && this.write(a, u), B.corked && (B.corked = 1, this.uncork()), B.ending || N(this, B, S);
  };
  function i(a) {
    return a.ending && a.length === 0 && a.bufferedRequest === null && !a.finished && !a.writing;
  }
  function n(a, u) {
    a._final(function(S) {
      u.pendingcb--, S && a.emit("error", S), u.prefinished = !0, a.emit("prefinish"), j(a, u);
    });
  }
  function R(a, u) {
    !u.prefinished && !u.finalCalled && (typeof a._final == "function" ? (u.pendingcb++, u.finalCalled = !0, b.nextTick(n, a, u)) : (u.prefinished = !0, a.emit("prefinish")));
  }
  function j(a, u) {
    var S = i(u);
    return S && (R(a, u), u.pendingcb === 0 && (u.finished = !0, a.emit("finish"))), S;
  }
  function N(a, u, S) {
    u.ending = !0, j(a, u), S && (u.finished ? b.nextTick(S) : a.once("finish", S)), u.ended = !0, a.writable = !1;
  }
  function H(a, u, S) {
    var B = a.entry;
    for (a.entry = null; B; ) {
      var W = B.callback;
      u.pendingcb--, W(S), B = B.next;
    }
    u.corkedRequestsFree.next = a;
  }
  return Object.defineProperty(w.prototype, "destroyed", {
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(a) {
      this._writableState && (this._writableState.destroyed = a);
    }
  }), w.prototype.destroy = s.destroy, w.prototype._undestroy = s.undestroy, w.prototype._destroy = function(a, u) {
    this.end(), u(a);
  }, Oe;
}
var We, wt;
function re() {
  if (wt) return We;
  wt = 1;
  var b = ce(), h = Object.keys || function(s) {
    var k = [];
    for (var M in s)
      k.push(M);
    return k;
  };
  We = o;
  var y = Object.create(J());
  y.inherits = K();
  var d = At(), p = Dt();
  y.inherits(o, d);
  for (var l = h(p.prototype), f = 0; f < l.length; f++) {
    var t = l[f];
    o.prototype[t] || (o.prototype[t] = p.prototype[t]);
  }
  function o(s) {
    if (!(this instanceof o)) return new o(s);
    d.call(this, s), p.call(this, s), s && s.readable === !1 && (this.readable = !1), s && s.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, s && s.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", c);
  }
  Object.defineProperty(o.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function c() {
    this.allowHalfOpen || this._writableState.ended || b.nextTick(v, this);
  }
  function v(s) {
    s.end();
  }
  return Object.defineProperty(o.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(s) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = s, this._writableState.destroyed = s);
    }
  }), o.prototype._destroy = function(s, k) {
    this.push(null), this.end(), b.nextTick(k, s);
  }, We;
}
var Le = {}, bt;
function yt() {
  if (bt) return Le;
  bt = 1;
  var b = pe().Buffer, h = b.isEncoding || function(g) {
    switch (g = "" + g, g && g.toLowerCase()) {
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
  function y(g) {
    if (!g) return "utf8";
    for (var x; ; )
      switch (g) {
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
          return g;
        default:
          if (x) return;
          g = ("" + g).toLowerCase(), x = !0;
      }
  }
  function d(g) {
    var x = y(g);
    if (typeof x != "string" && (b.isEncoding === h || !h(g))) throw new Error("Unknown encoding: " + g);
    return x || g;
  }
  Le.StringDecoder = p;
  function p(g) {
    this.encoding = d(g);
    var x;
    switch (this.encoding) {
      case "utf16le":
        this.text = s, this.end = k, x = 4;
        break;
      case "utf8":
        this.fillLast = o, x = 4;
        break;
      case "base64":
        this.text = M, this.end = q, x = 3;
        break;
      default:
        this.write = w, this.end = F;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = b.allocUnsafe(x);
  }
  p.prototype.write = function(g) {
    if (g.length === 0) return "";
    var x, O;
    if (this.lastNeed) {
      if (x = this.fillLast(g), x === void 0) return "";
      O = this.lastNeed, this.lastNeed = 0;
    } else
      O = 0;
    return O < g.length ? x ? x + this.text(g, O) : this.text(g, O) : x || "";
  }, p.prototype.end = v, p.prototype.text = c, p.prototype.fillLast = function(g) {
    if (this.lastNeed <= g.length)
      return g.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    g.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, g.length), this.lastNeed -= g.length;
  };
  function l(g) {
    return g <= 127 ? 0 : g >> 5 === 6 ? 2 : g >> 4 === 14 ? 3 : g >> 3 === 30 ? 4 : g >> 6 === 2 ? -1 : -2;
  }
  function f(g, x, O) {
    var _ = x.length - 1;
    if (_ < O) return 0;
    var m = l(x[_]);
    return m >= 0 ? (m > 0 && (g.lastNeed = m - 1), m) : --_ < O || m === -2 ? 0 : (m = l(x[_]), m >= 0 ? (m > 0 && (g.lastNeed = m - 2), m) : --_ < O || m === -2 ? 0 : (m = l(x[_]), m >= 0 ? (m > 0 && (m === 2 ? m = 0 : g.lastNeed = m - 3), m) : 0));
  }
  function t(g, x, O) {
    if ((x[0] & 192) !== 128)
      return g.lastNeed = 0, "�";
    if (g.lastNeed > 1 && x.length > 1) {
      if ((x[1] & 192) !== 128)
        return g.lastNeed = 1, "�";
      if (g.lastNeed > 2 && x.length > 2 && (x[2] & 192) !== 128)
        return g.lastNeed = 2, "�";
    }
  }
  function o(g) {
    var x = this.lastTotal - this.lastNeed, O = t(this, g);
    if (O !== void 0) return O;
    if (this.lastNeed <= g.length)
      return g.copy(this.lastChar, x, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    g.copy(this.lastChar, x, 0, g.length), this.lastNeed -= g.length;
  }
  function c(g, x) {
    var O = f(this, g, x);
    if (!this.lastNeed) return g.toString("utf8", x);
    this.lastTotal = O;
    var _ = g.length - (O - this.lastNeed);
    return g.copy(this.lastChar, 0, _), g.toString("utf8", x, _);
  }
  function v(g) {
    var x = g && g.length ? this.write(g) : "";
    return this.lastNeed ? x + "�" : x;
  }
  function s(g, x) {
    if ((g.length - x) % 2 === 0) {
      var O = g.toString("utf16le", x);
      if (O) {
        var _ = O.charCodeAt(O.length - 1);
        if (_ >= 55296 && _ <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = g[g.length - 2], this.lastChar[1] = g[g.length - 1], O.slice(0, -1);
      }
      return O;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = g[g.length - 1], g.toString("utf16le", x, g.length - 1);
  }
  function k(g) {
    var x = g && g.length ? this.write(g) : "";
    if (this.lastNeed) {
      var O = this.lastTotal - this.lastNeed;
      return x + this.lastChar.toString("utf16le", 0, O);
    }
    return x;
  }
  function M(g, x) {
    var O = (g.length - x) % 3;
    return O === 0 ? g.toString("base64", x) : (this.lastNeed = 3 - O, this.lastTotal = 3, O === 1 ? this.lastChar[0] = g[g.length - 1] : (this.lastChar[0] = g[g.length - 2], this.lastChar[1] = g[g.length - 1]), g.toString("base64", x, g.length - O));
  }
  function q(g) {
    var x = g && g.length ? this.write(g) : "";
    return this.lastNeed ? x + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : x;
  }
  function w(g) {
    return g.toString(this.encoding);
  }
  function F(g) {
    return g && g.length ? this.write(g) : "";
  }
  return Le;
}
var Ne, mt;
function At() {
  if (mt) return Ne;
  mt = 1;
  var b = ce();
  Ne = x;
  var h = Xt(), y;
  x.ReadableState = g, ze.EventEmitter;
  var d = function(e, r) {
    return e.listeners(r).length;
  }, p = jt(), l = pe().Buffer, f = (typeof te < "u" ? te : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function t(e) {
    return l.from(e);
  }
  function o(e) {
    return l.isBuffer(e) || e instanceof f;
  }
  var c = Object.create(J());
  c.inherits = K();
  var v = Ct, s = void 0;
  v && v.debuglog ? s = v.debuglog("stream") : s = function() {
  };
  var k = Zt(), M = Bt(), q;
  c.inherits(x, p);
  var w = ["error", "close", "destroy", "pause", "resume"];
  function F(e, r, E) {
    if (typeof e.prependListener == "function") return e.prependListener(r, E);
    !e._events || !e._events[r] ? e.on(r, E) : h(e._events[r]) ? e._events[r].unshift(E) : e._events[r] = [E, e._events[r]];
  }
  function g(e, r) {
    y = y || re(), e = e || {};
    var E = r instanceof y;
    this.objectMode = !!e.objectMode, E && (this.objectMode = this.objectMode || !!e.readableObjectMode);
    var C = e.highWaterMark, I = e.readableHighWaterMark, A = this.objectMode ? 16 : 16 * 1024;
    C || C === 0 ? this.highWaterMark = C : E && (I || I === 0) ? this.highWaterMark = I : this.highWaterMark = A, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new k(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (q || (q = yt().StringDecoder), this.decoder = new q(e.encoding), this.encoding = e.encoding);
  }
  function x(e) {
    if (y = y || re(), !(this instanceof x)) return new x(e);
    this._readableState = new g(e, this), this.readable = !0, e && (typeof e.read == "function" && (this._read = e.read), typeof e.destroy == "function" && (this._destroy = e.destroy)), p.call(this);
  }
  Object.defineProperty(x.prototype, "destroyed", {
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(e) {
      this._readableState && (this._readableState.destroyed = e);
    }
  }), x.prototype.destroy = M.destroy, x.prototype._undestroy = M.undestroy, x.prototype._destroy = function(e, r) {
    this.push(null), r(e);
  }, x.prototype.push = function(e, r) {
    var E = this._readableState, C;
    return E.objectMode ? C = !0 : typeof e == "string" && (r = r || E.defaultEncoding, r !== E.encoding && (e = l.from(e, r), r = ""), C = !0), O(this, e, r, !1, C);
  }, x.prototype.unshift = function(e) {
    return O(this, e, null, !0, !1);
  };
  function O(e, r, E, C, I) {
    var A = e._readableState;
    if (r === null)
      A.reading = !1, Z(e, A);
    else {
      var P;
      I || (P = m(A, r)), P ? e.emit("error", P) : A.objectMode || r && r.length > 0 ? (typeof r != "string" && !A.objectMode && Object.getPrototypeOf(r) !== l.prototype && (r = t(r)), C ? A.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : _(e, A, r, !0) : A.ended ? e.emit("error", new Error("stream.push() after EOF")) : (A.reading = !1, A.decoder && !E ? (r = A.decoder.write(r), A.objectMode || r.length !== 0 ? _(e, A, r, !1) : R(e, A)) : _(e, A, r, !1))) : C || (A.reading = !1);
    }
    return T(A);
  }
  function _(e, r, E, C) {
    r.flowing && r.length === 0 && !r.sync ? (e.emit("data", E), e.read(0)) : (r.length += r.objectMode ? 1 : E.length, C ? r.buffer.unshift(E) : r.buffer.push(E), r.needReadable && i(e)), R(e, r);
  }
  function m(e, r) {
    var E;
    return !o(r) && typeof r != "string" && r !== void 0 && !e.objectMode && (E = new TypeError("Invalid non-string/buffer chunk")), E;
  }
  function T(e) {
    return !e.ended && (e.needReadable || e.length < e.highWaterMark || e.length === 0);
  }
  x.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, x.prototype.setEncoding = function(e) {
    return q || (q = yt().StringDecoder), this._readableState.decoder = new q(e), this._readableState.encoding = e, this;
  };
  var D = 8388608;
  function U(e) {
    return e >= D ? e = D : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
  }
  function $(e, r) {
    return e <= 0 || r.length === 0 && r.ended ? 0 : r.objectMode ? 1 : e !== e ? r.flowing && r.length ? r.buffer.head.data.length : r.length : (e > r.highWaterMark && (r.highWaterMark = U(e)), e <= r.length ? e : r.ended ? r.length : (r.needReadable = !0, 0));
  }
  x.prototype.read = function(e) {
    s("read", e), e = parseInt(e, 10);
    var r = this._readableState, E = e;
    if (e !== 0 && (r.emittedReadable = !1), e === 0 && r.needReadable && (r.length >= r.highWaterMark || r.ended))
      return s("read: emitReadable", r.length, r.ended), r.length === 0 && r.ended ? X(this) : i(this), null;
    if (e = $(e, r), e === 0 && r.ended)
      return r.length === 0 && X(this), null;
    var C = r.needReadable;
    s("need readable", C), (r.length === 0 || r.length - e < r.highWaterMark) && (C = !0, s("length less than watermark", C)), r.ended || r.reading ? (C = !1, s("reading or ended", C)) : C && (s("do read"), r.reading = !0, r.sync = !0, r.length === 0 && (r.needReadable = !0), this._read(r.highWaterMark), r.sync = !1, r.reading || (e = $(E, r)));
    var I;
    return e > 0 ? I = B(e, r) : I = null, I === null ? (r.needReadable = !0, e = 0) : r.length -= e, r.length === 0 && (r.ended || (r.needReadable = !0), E !== e && r.ended && X(this)), I !== null && this.emit("data", I), I;
  };
  function Z(e, r) {
    if (!r.ended) {
      if (r.decoder) {
        var E = r.decoder.end();
        E && E.length && (r.buffer.push(E), r.length += r.objectMode ? 1 : E.length);
      }
      r.ended = !0, i(e);
    }
  }
  function i(e) {
    var r = e._readableState;
    r.needReadable = !1, r.emittedReadable || (s("emitReadable", r.flowing), r.emittedReadable = !0, r.sync ? b.nextTick(n, e) : n(e));
  }
  function n(e) {
    s("emit readable"), e.emit("readable"), S(e);
  }
  function R(e, r) {
    r.readingMore || (r.readingMore = !0, b.nextTick(j, e, r));
  }
  function j(e, r) {
    for (var E = r.length; !r.reading && !r.flowing && !r.ended && r.length < r.highWaterMark && (s("maybeReadMore read 0"), e.read(0), E !== r.length); )
      E = r.length;
    r.readingMore = !1;
  }
  x.prototype._read = function(e) {
    this.emit("error", new Error("_read() is not implemented"));
  }, x.prototype.pipe = function(e, r) {
    var E = this, C = this._readableState;
    switch (C.pipesCount) {
      case 0:
        C.pipes = e;
        break;
      case 1:
        C.pipes = [C.pipes, e];
        break;
      default:
        C.pipes.push(e);
        break;
    }
    C.pipesCount += 1, s("pipe count=%d opts=%j", C.pipesCount, r);
    var I = (!r || r.end !== !1) && e !== process.stdout && e !== process.stderr, A = I ? fe : ie;
    C.endEmitted ? b.nextTick(A) : E.once("end", A), e.on("unpipe", P);
    function P(ee, ne) {
      s("onunpipe"), ee === E && ne && ne.hasUnpiped === !1 && (ne.hasUnpiped = !0, Wt());
    }
    function fe() {
      s("onend"), e.end();
    }
    var ge = N(E);
    e.on("drain", ge);
    var Xe = !1;
    function Wt() {
      s("cleanup"), e.removeListener("close", be), e.removeListener("finish", ye), e.removeListener("drain", ge), e.removeListener("error", we), e.removeListener("unpipe", P), E.removeListener("end", fe), E.removeListener("end", ie), E.removeListener("data", Ze), Xe = !0, C.awaitDrain && (!e._writableState || e._writableState.needDrain) && ge();
    }
    var ve = !1;
    E.on("data", Ze);
    function Ze(ee) {
      s("ondata"), ve = !1;
      var ne = e.write(ee);
      ne === !1 && !ve && ((C.pipesCount === 1 && C.pipes === e || C.pipesCount > 1 && Q(C.pipes, e) !== -1) && !Xe && (s("false write response, pause", C.awaitDrain), C.awaitDrain++, ve = !0), E.pause());
    }
    function we(ee) {
      s("onerror", ee), ie(), e.removeListener("error", we), d(e, "error") === 0 && e.emit("error", ee);
    }
    F(e, "error", we);
    function be() {
      e.removeListener("finish", ye), ie();
    }
    e.once("close", be);
    function ye() {
      s("onfinish"), e.removeListener("close", be), ie();
    }
    e.once("finish", ye);
    function ie() {
      s("unpipe"), E.unpipe(e);
    }
    return e.emit("pipe", E), C.flowing || (s("pipe resume"), E.resume()), e;
  };
  function N(e) {
    return function() {
      var r = e._readableState;
      s("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && d(e, "data") && (r.flowing = !0, S(e));
    };
  }
  x.prototype.unpipe = function(e) {
    var r = this._readableState, E = { hasUnpiped: !1 };
    if (r.pipesCount === 0) return this;
    if (r.pipesCount === 1)
      return e && e !== r.pipes ? this : (e || (e = r.pipes), r.pipes = null, r.pipesCount = 0, r.flowing = !1, e && e.emit("unpipe", this, E), this);
    if (!e) {
      var C = r.pipes, I = r.pipesCount;
      r.pipes = null, r.pipesCount = 0, r.flowing = !1;
      for (var A = 0; A < I; A++)
        C[A].emit("unpipe", this, { hasUnpiped: !1 });
      return this;
    }
    var P = Q(r.pipes, e);
    return P === -1 ? this : (r.pipes.splice(P, 1), r.pipesCount -= 1, r.pipesCount === 1 && (r.pipes = r.pipes[0]), e.emit("unpipe", this, E), this);
  }, x.prototype.on = function(e, r) {
    var E = p.prototype.on.call(this, e, r);
    if (e === "data")
      this._readableState.flowing !== !1 && this.resume();
    else if (e === "readable") {
      var C = this._readableState;
      !C.endEmitted && !C.readableListening && (C.readableListening = C.needReadable = !0, C.emittedReadable = !1, C.reading ? C.length && i(this) : b.nextTick(H, this));
    }
    return E;
  }, x.prototype.addListener = x.prototype.on;
  function H(e) {
    s("readable nexttick read 0"), e.read(0);
  }
  x.prototype.resume = function() {
    var e = this._readableState;
    return e.flowing || (s("resume"), e.flowing = !0, a(this, e)), this;
  };
  function a(e, r) {
    r.resumeScheduled || (r.resumeScheduled = !0, b.nextTick(u, e, r));
  }
  function u(e, r) {
    r.reading || (s("resume read 0"), e.read(0)), r.resumeScheduled = !1, r.awaitDrain = 0, e.emit("resume"), S(e), r.flowing && !r.reading && e.read(0);
  }
  x.prototype.pause = function() {
    return s("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (s("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
  };
  function S(e) {
    var r = e._readableState;
    for (s("flow", r.flowing); r.flowing && e.read() !== null; )
      ;
  }
  x.prototype.wrap = function(e) {
    var r = this, E = this._readableState, C = !1;
    e.on("end", function() {
      if (s("wrapped end"), E.decoder && !E.ended) {
        var P = E.decoder.end();
        P && P.length && r.push(P);
      }
      r.push(null);
    }), e.on("data", function(P) {
      if (s("wrapped data"), E.decoder && (P = E.decoder.write(P)), !(E.objectMode && P == null) && !(!E.objectMode && (!P || !P.length))) {
        var fe = r.push(P);
        fe || (C = !0, e.pause());
      }
    });
    for (var I in e)
      this[I] === void 0 && typeof e[I] == "function" && (this[I] = /* @__PURE__ */ (function(P) {
        return function() {
          return e[P].apply(e, arguments);
        };
      })(I));
    for (var A = 0; A < w.length; A++)
      e.on(w[A], this.emit.bind(this, w[A]));
    return this._read = function(P) {
      s("wrapped _read", P), C && (C = !1, e.resume());
    }, this;
  }, Object.defineProperty(x.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), x._fromList = B;
  function B(e, r) {
    if (r.length === 0) return null;
    var E;
    return r.objectMode ? E = r.buffer.shift() : !e || e >= r.length ? (r.decoder ? E = r.buffer.join("") : r.buffer.length === 1 ? E = r.buffer.head.data : E = r.buffer.concat(r.length), r.buffer.clear()) : E = W(e, r.buffer, r.decoder), E;
  }
  function W(e, r, E) {
    var C;
    return e < r.head.data.length ? (C = r.head.data.slice(0, e), r.head.data = r.head.data.slice(e)) : e === r.head.data.length ? C = r.shift() : C = E ? L(e, r) : V(e, r), C;
  }
  function L(e, r) {
    var E = r.head, C = 1, I = E.data;
    for (e -= I.length; E = E.next; ) {
      var A = E.data, P = e > A.length ? A.length : e;
      if (P === A.length ? I += A : I += A.slice(0, e), e -= P, e === 0) {
        P === A.length ? (++C, E.next ? r.head = E.next : r.head = r.tail = null) : (r.head = E, E.data = A.slice(P));
        break;
      }
      ++C;
    }
    return r.length -= C, I;
  }
  function V(e, r) {
    var E = l.allocUnsafe(e), C = r.head, I = 1;
    for (C.data.copy(E), e -= C.data.length; C = C.next; ) {
      var A = C.data, P = e > A.length ? A.length : e;
      if (A.copy(E, E.length - e, 0, P), e -= P, e === 0) {
        P === A.length ? (++I, C.next ? r.head = C.next : r.head = r.tail = null) : (r.head = C, C.data = A.slice(P));
        break;
      }
      ++I;
    }
    return r.length -= I, E;
  }
  function X(e) {
    var r = e._readableState;
    if (r.length > 0) throw new Error('"endReadable()" called on non-empty stream');
    r.endEmitted || (r.ended = !0, b.nextTick(G, r, e));
  }
  function G(e, r) {
    !e.endEmitted && e.length === 0 && (e.endEmitted = !0, r.readable = !1, r.emit("end"));
  }
  function Q(e, r) {
    for (var E = 0, C = e.length; E < C; E++)
      if (e[E] === r) return E;
    return -1;
  }
  return Ne;
}
var Pe, _t;
function Ot() {
  if (_t) return Pe;
  _t = 1, Pe = d;
  var b = re(), h = Object.create(J());
  h.inherits = K(), h.inherits(d, b);
  function y(f, t) {
    var o = this._transformState;
    o.transforming = !1;
    var c = o.writecb;
    if (!c)
      return this.emit("error", new Error("write callback called multiple times"));
    o.writechunk = null, o.writecb = null, t != null && this.push(t), c(f);
    var v = this._readableState;
    v.reading = !1, (v.needReadable || v.length < v.highWaterMark) && this._read(v.highWaterMark);
  }
  function d(f) {
    if (!(this instanceof d)) return new d(f);
    b.call(this, f), this._transformState = {
      afterTransform: y.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, f && (typeof f.transform == "function" && (this._transform = f.transform), typeof f.flush == "function" && (this._flush = f.flush)), this.on("prefinish", p);
  }
  function p() {
    var f = this;
    typeof this._flush == "function" ? this._flush(function(t, o) {
      l(f, t, o);
    }) : l(this, null, null);
  }
  d.prototype.push = function(f, t) {
    return this._transformState.needTransform = !1, b.prototype.push.call(this, f, t);
  }, d.prototype._transform = function(f, t, o) {
    throw new Error("_transform() is not implemented");
  }, d.prototype._write = function(f, t, o) {
    var c = this._transformState;
    if (c.writecb = o, c.writechunk = f, c.writeencoding = t, !c.transforming) {
      var v = this._readableState;
      (c.needTransform || v.needReadable || v.length < v.highWaterMark) && this._read(v.highWaterMark);
    }
  }, d.prototype._read = function(f) {
    var t = this._transformState;
    t.writechunk !== null && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0;
  }, d.prototype._destroy = function(f, t) {
    var o = this;
    b.prototype._destroy.call(this, f, function(c) {
      t(c), o.emit("close");
    });
  };
  function l(f, t, o) {
    if (t) return f.emit("error", t);
    if (o != null && f.push(o), f._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (f._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return f.push(null);
  }
  return Pe;
}
var Ue, St;
function Kt() {
  if (St) return Ue;
  St = 1, Ue = y;
  var b = Ot(), h = Object.create(J());
  h.inherits = K(), h.inherits(y, b);
  function y(d) {
    if (!(this instanceof y)) return new y(d);
    b.call(this, d);
  }
  return y.prototype._transform = function(d, p, l) {
    l(null, d);
  }, Ue;
}
var xt;
function Jt() {
  return xt || (xt = 1, (function(b, h) {
    h = b.exports = At(), h.Stream = h, h.Readable = h, h.Writable = Dt(), h.Duplex = re(), h.Transform = Ot(), h.PassThrough = Kt();
  })(ue, ue.exports)), ue.exports;
}
var Rt;
function Qt() {
  if (Rt) return le.exports;
  Rt = 1;
  var b = Jt();
  function h(y, d, p) {
    typeof p > "u" && (p = d, d = y, y = null), b.Duplex.call(this, y), typeof p.read != "function" && (p = new b.Readable(y).wrap(p)), this._writable = d, this._readable = p, this._waiting = !1;
    var l = this;
    d.once("finish", function() {
      l.end();
    }), this.once("finish", function() {
      d.end();
    }), p.on("readable", function() {
      l._waiting && (l._waiting = !1, l._read());
    }), p.once("end", function() {
      l.push(null);
    }), (!y || typeof y.bubbleErrors > "u" || y.bubbleErrors) && (d.on("error", function(f) {
      l.emit("error", f);
    }), p.on("error", function(f) {
      l.emit("error", f);
    }));
  }
  return h.prototype = Object.create(b.Duplex.prototype, { constructor: { value: h } }), h.prototype._write = function(d, p, l) {
    this._writable.write(d, p, l);
  }, h.prototype._read = function() {
    for (var d, p = 0; (d = this._readable.read()) !== null; )
      this.push(d), p++;
    p === 0 && (this._waiting = !0);
  }, le.exports = function(d, p, l) {
    return new h(d, p, l);
  }, le.exports.DuplexWrapper = h, le.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ie, Et;
function Yt() {
  if (Et) return Ie;
  Et = 1;
  var b = Object.getOwnPropertySymbols, h = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable;
  function d(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function p() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var f = {}, t = 0; t < 10; t++)
        f["_" + String.fromCharCode(t)] = t;
      var o = Object.getOwnPropertyNames(f).map(function(v) {
        return f[v];
      });
      if (o.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        c[v] = v;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ie = p() ? Object.assign : function(l, f) {
    for (var t, o = d(l), c, v = 1; v < arguments.length; v++) {
      t = Object(arguments[v]);
      for (var s in t)
        h.call(t, s) && (o[s] = t[s]);
      if (b) {
        c = b(t);
        for (var k = 0; k < c.length; k++)
          y.call(t, c[k]) && (o[c[k]] = t[c[k]]);
      }
    }
    return o;
  }, Ie;
}
var Fe, Tt;
function er() {
  if (Tt) return Fe;
  Tt = 1;
  var b = Qt(), h = Y.PassThrough, y = Y.PassThrough, d = Yt(), p = [].slice, l = {
    bubbleErrors: !1,
    objectMode: !0
  };
  Fe = f;
  function f(t, o, c) {
    Array.isArray(t) || (t = p.call(arguments), o = null, c = null);
    var v = t[t.length - 1];
    typeof v == "function" && (c = t.splice(-1)[0], v = t[t.length - 1]), typeof v == "object" && typeof v.pipe != "function" && (o = t.splice(-1)[0]);
    var s = t[0], k = t[t.length - 1], M;
    if (o = d({}, l, o), !s)
      return c && process.nextTick(c), new h(o);
    if (s.writable && k.readable ? M = b(o, s, k) : t.length == 1 ? M = new y(o).wrap(t[0]) : s.writable ? M = s : k.readable ? M = k : M = new h(o), t.forEach(function(w, F) {
      var g = t[F + 1];
      g && w.pipe(g), w != M && w.on("error", M.emit.bind(M, "error"));
    }), c) {
      let w = function(F) {
        q || (q = !0, c(F));
      };
      var q = !1;
      M.on("error", w), k.on("finish", function() {
        w();
      }), k.on("close", function() {
        w();
      });
    }
    return M;
  }
  return Fe;
}
var tr = er();
const rr = /* @__PURE__ */ He(tr);
var ir = function(h) {
  return function(y) {
    for (var d = new RegExp(h.key + "-([a-zA-Z0-9-_]+)", "gm"), p = {
      html: y,
      ids: [],
      css: ""
    }, l, f = {}; (l = d.exec(y)) !== null; )
      f[l[1]] === void 0 && (f[l[1]] = !0);
    return p.ids = Object.keys(h.inserted).filter(function(t) {
      if ((f[t] !== void 0 || h.registered[h.key + "-" + t] === void 0) && h.inserted[t] !== !0)
        return p.css += h.inserted[t], !0;
    }), p;
  };
}, nr = function(h) {
  return function(y) {
    for (var d = new RegExp(h.key + "-([a-zA-Z0-9-_]+)", "gm"), p = {
      html: y,
      styles: []
    }, l, f = {}; (l = d.exec(y)) !== null; )
      f[l[1]] === void 0 && (f[l[1]] = !0);
    var t = [], o = "";
    return Object.keys(h.inserted).forEach(function(c) {
      (f[c] !== void 0 || h.registered[h.key + "-" + c] === void 0) && h.inserted[c] !== !0 && (h.registered[h.key + "-" + c] ? (t.push(c), o += h.inserted[c]) : p.styles.push({
        key: h.key + "-global",
        ids: [c],
        css: h.inserted[c]
      }));
    }), p.styles.push({
      key: h.key,
      ids: t,
      css: o
    }), p;
  };
};
function $e(b, h, y, d) {
  return '<style data-emotion="' + b + " " + h + '"' + d + ">" + y + "</style>";
}
var ar = function(h, y) {
  return function(d) {
    var p = h.inserted, l = h.key, f = h.registered, t = new RegExp("<|" + l + "-([a-zA-Z0-9-_]+)", "gm"), o = {}, c = "", v = "", s = "";
    for (var k in p)
      if (p.hasOwnProperty(k)) {
        var M = p[k], q = l + "-" + k;
        M !== !0 && f[q] === void 0 && (s += M, v += " " + k);
      }
    s !== "" && (c = $e(l, v.substring(1), s, y));
    for (var w = "", F = "", g = 0, x; (x = t.exec(d)) !== null; ) {
      if (x[0] === "<") {
        w !== "" && (c += $e(l, w.substring(1), F, y), w = "", F = ""), c += d.substring(g, x.index), g = x.index;
        continue;
      }
      var O = x[1], _ = p[O];
      _ === !0 || _ === void 0 || o[O] || (o[O] = !0, F += _, w += " " + O);
    }
    return c += d.substring(g), c;
  };
}, fr = function(h, y) {
  return function() {
    var d = {}, p = Vt(), l = Pt(function(t) {
      var o = t[0], c = t[1];
      if (o === "open") {
        for (var v = "", s = {}, k, M = c.toString(), q = new RegExp(h.key + "-([a-zA-Z0-9-_]+)", "gm"); (k = q.exec(M)) !== null; )
          k !== null && d[k[1]] === void 0 && (s[k[1]] = !0);
        Object.keys(h.inserted).forEach(function(w) {
          h.inserted[w] !== !0 && d[w] === void 0 && (s[w] === !0 || h.registered[h.key + "-" + w] === void 0 && (s[w] = !0)) && (d[w] = !0, v += h.inserted[w]);
        }), v !== "" && this.queue('<style data-emotion="' + h.key + " " + Object.keys(s).join(" ") + '"' + y + ">" + v + "</style>");
      }
      this.queue(c);
    }, function() {
      this.queue(null);
    });
    return rr(p, l);
  };
}, sr = function(h, y) {
  return function(d) {
    var p = "";
    return d.styles.forEach(function(l) {
      p += $e(l.key, l.ids.join(" "), l.css, y);
    }), p;
  };
};
function cr(b) {
  b.compat !== !0 && (b.compat = !0);
  var h = b.nonce !== void 0 ? ' nonce="' + b.nonce + '"' : "";
  return {
    extractCritical: ir(b),
    extractCriticalToChunks: nr(b),
    renderStylesToString: ar(b, h),
    renderStylesToNodeStream: fr(b, h),
    constructStyleTagsFromChunks: sr(b, h)
  };
}
export {
  cr as default
};
//# sourceMappingURL=emotion-server-create-instance.browser.esm-CgeoyX9a.js.map
