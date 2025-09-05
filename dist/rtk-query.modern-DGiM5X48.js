import { isPlainObject as be, nanoid as Ft, formatProdErrorMessage as Ne, createAction as he, createSelector as Zt, createNextState as it, createAsyncThunk as yt, createSlice as pe, prepareAutoBatched as me, isAnyOf as qe, isFulfilled as oe, isRejectedWithValue as st, combineReducers as en, SHOULD_AUTOBATCH as jt, isAllOf as Ue, isRejected as ot, isPending as xt, isAction as tn, isAsyncThunkAction as ht } from "@reduxjs/toolkit";
var at = Symbol.for("immer-nothing"), ve = Symbol.for("immer-draftable"), H = Symbol.for("immer-state"), zt = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function W(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = zt[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ae = Object.getPrototypeOf;
function ee(e) {
  return !!e && !!e[H];
}
function te(e) {
  return e ? $t(e) || Array.isArray(e) || !!e[ve] || !!e.constructor?.[ve] || Ae(e) || Oe(e) : !1;
}
var nn = Object.prototype.constructor.toString();
function $t(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ae(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === nn;
}
function rn(e) {
  return ee(e) || W(15, e), e[H].base_;
}
function Se(e, t) {
  ce(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function ce(e) {
  const t = e[H];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ae(e) ? 2 : Oe(e) ? 3 : 0;
}
function _e(e, t) {
  return ce(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ve(e, t) {
  return ce(e) === 2 ? e.get(t) : e[t];
}
function Kt(e, t, n) {
  const r = ce(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function sn(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ae(e) {
  return e instanceof Map;
}
function Oe(e) {
  return e instanceof Set;
}
function se(e) {
  return e.copy_ || e.base_;
}
function Je(e, t) {
  if (Ae(e))
    return new Map(e);
  if (Oe(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = $t(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[H];
    let i = Reflect.ownKeys(r);
    for (let y = 0; y < i.length; y++) {
      const d = i[y], v = r[d];
      v.writable === !1 && (v.writable = !0, v.configurable = !0), (v.get || v.set) && (r[d] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: v.enumerable,
        value: e[d]
      });
    }
    return Object.create(ae(e), r);
  } else {
    const r = ae(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function ct(e, t = !1) {
  return xe(e) || ee(e) || !te(e) || (ce(e) > 1 && (e.set = e.add = e.clear = e.delete = on), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => ct(r, !0))), e;
}
function on() {
  W(2);
}
function xe(e) {
  return Object.isFrozen(e);
}
var Ye = {};
function ue(e) {
  const t = Ye[e];
  return t || W(0, e), t;
}
function an(e, t) {
  Ye[e] || (Ye[e] = t);
}
var we;
function Ut() {
  return we;
}
function cn(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function mt(e, t) {
  t && (ue("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ge(e) {
  Xe(e), e.drafts_.forEach(un), e.drafts_ = null;
}
function Xe(e) {
  e === we && (we = e.parent_);
}
function gt(e) {
  return we = cn(we, e);
}
function un(e) {
  const t = e[H];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function vt(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[H].modified_ && (Ge(t), W(4)), te(e) && (e = Qe(t, e), t.parent_ || Me(t, e)), t.patches_ && ue("Patches").generateReplacementPatches_(
    n[H].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Qe(t, n, []), Ge(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== at ? e : void 0;
}
function Qe(e, t, n) {
  if (xe(t))
    return t;
  const r = t[H];
  if (!r)
    return Se(
      t,
      (i, y) => bt(e, r, t, i, y, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Me(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let y = i, d = !1;
    r.type_ === 3 && (y = new Set(i), i.clear(), d = !0), Se(
      y,
      (v, D) => bt(e, r, i, v, D, n, d)
    ), Me(e, i, !1), n && e.patches_ && ue("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function bt(e, t, n, r, i, y, d) {
  if (process.env.NODE_ENV !== "production" && i === n && W(5), ee(i)) {
    const v = y && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !_e(t.assigned_, r) ? y.concat(r) : void 0, D = Qe(e, i, v);
    if (Kt(n, r, D), ee(D))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else d && n.add(i);
  if (te(i) && !xe(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Qe(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Me(e, i);
  }
}
function Me(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && ct(t, n);
}
function ln(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ut(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = r, y = ut;
  n && (i = [r], y = Re);
  const { revoke: d, proxy: v } = Proxy.revocable(i, y);
  return r.draft_ = v, r.revoke_ = d, v;
}
var ut = {
  get(e, t) {
    if (t === H)
      return e;
    const n = se(e);
    if (!_e(n, t))
      return fn(e, n, t);
    const r = n[t];
    return e.finalized_ || !te(r) ? r : r === We(e.base_, t) ? (Le(e), e.copy_[t] = et(r, e)) : r;
  },
  has(e, t) {
    return t in se(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(se(e));
  },
  set(e, t, n) {
    const r = Vt(se(e), t);
    if (r?.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = We(se(e), t), y = i?.[H];
      if (y && y.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (sn(n, i) && (n !== void 0 || _e(e.base_, t)))
        return !0;
      Le(e), Ze(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return We(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Le(e), Ze(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = se(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    W(11);
  },
  getPrototypeOf(e) {
    return ae(e.base_);
  },
  setPrototypeOf() {
    W(12);
  }
}, Re = {};
Se(ut, (e, t) => {
  Re[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Re.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && W(13), Re.set.call(this, e, t, void 0);
};
Re.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && W(14), ut.set.call(this, e[0], t, n, e[0]);
};
function We(e, t) {
  const n = e[H];
  return (n ? se(n) : e)[t];
}
function fn(e, t, n) {
  const r = Vt(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(e.draft_)
  ) : void 0;
}
function Vt(e, t) {
  if (!(t in e))
    return;
  let n = ae(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = ae(n);
  }
}
function Ze(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ze(e.parent_));
}
function Le(e) {
  e.copy_ || (e.copy_ = Je(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var dn = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const y = n;
        n = t;
        const d = this;
        return function(D = y, ...E) {
          return d.produce(D, (I) => n.call(this, I, ...E));
        };
      }
      typeof n != "function" && W(6), r !== void 0 && typeof r != "function" && W(7);
      let i;
      if (te(t)) {
        const y = gt(this), d = et(t, void 0);
        let v = !0;
        try {
          i = n(d), v = !1;
        } finally {
          v ? Ge(y) : Xe(y);
        }
        return mt(y, r), vt(i, y);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === at && (i = void 0), this.autoFreeze_ && ct(i, !0), r) {
          const y = [], d = [];
          ue("Patches").generateReplacementPatches_(t, i, y, d), r(y, d);
        }
        return i;
      } else
        W(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (d, ...v) => this.produceWithPatches(d, (D) => t(D, ...v));
      let r, i;
      return [this.produce(t, n, (d, v) => {
        r = d, i = v;
      }), r, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    te(e) || W(8), ee(e) && (e = pn(e));
    const t = gt(this), n = et(e, void 0);
    return n[H].isManual_ = !0, Xe(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[H];
    (!n || !n.isManual_) && W(9);
    const { scope_: r } = n;
    return mt(r, t), vt(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = ue("Patches").applyPatches_;
    return ee(e) ? r(e, t) : this.produce(
      e,
      (i) => r(i, t)
    );
  }
};
function et(e, t) {
  const n = Ae(e) ? ue("MapSet").proxyMap_(e, t) : Oe(e) ? ue("MapSet").proxySet_(e, t) : ln(e, t);
  return (t ? t.scope_ : Ut()).drafts_.push(n), n;
}
function pn(e) {
  return ee(e) || W(10, e), Wt(e);
}
function Wt(e) {
  if (!te(e) || xe(e))
    return e;
  const t = e[H];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Je(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Je(e, !0);
  return Se(n, (r, i) => {
    Kt(n, r, Wt(i));
  }), t && (t.finalized_ = !1), n;
}
function yn() {
  process.env.NODE_ENV !== "production" && zt.push(
    'Sets cannot have "replace" patches.',
    function(s) {
      return "Unsupported patch operation: " + s;
    },
    function(s) {
      return "Cannot apply patch, path doesn't resolve: " + s;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", n = "add", r = "remove";
  function i(s, l, h, S) {
    switch (s.type_) {
      case 0:
      case 2:
        return d(
          s,
          l,
          h,
          S
        );
      case 1:
        return y(s, l, h, S);
      case 3:
        return v(
          s,
          l,
          h,
          S
        );
    }
  }
  function y(s, l, h, S) {
    let { base_: g, assigned_: o } = s, _ = s.copy_;
    _.length < g.length && ([g, _] = [_, g], [h, S] = [S, h]);
    for (let u = 0; u < g.length; u++)
      if (o[u] && _[u] !== g[u]) {
        const c = l.concat([u]);
        h.push({
          op: t,
          path: c,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: b(_[u])
        }), S.push({
          op: t,
          path: c,
          value: b(g[u])
        });
      }
    for (let u = g.length; u < _.length; u++) {
      const c = l.concat([u]);
      h.push({
        op: n,
        path: c,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: b(_[u])
      });
    }
    for (let u = _.length - 1; g.length <= u; --u) {
      const c = l.concat([u]);
      S.push({
        op: r,
        path: c
      });
    }
  }
  function d(s, l, h, S) {
    const { base_: g, copy_: o } = s;
    Se(s.assigned_, (_, u) => {
      const c = Ve(g, _), w = Ve(o, _), O = u ? _e(g, _) ? t : n : r;
      if (c === w && O === t)
        return;
      const P = l.concat(_);
      h.push(O === r ? { op: O, path: P } : { op: O, path: P, value: w }), S.push(
        O === n ? { op: r, path: P } : O === r ? { op: n, path: P, value: b(c) } : { op: t, path: P, value: b(c) }
      );
    });
  }
  function v(s, l, h, S) {
    let { base_: g, copy_: o } = s, _ = 0;
    g.forEach((u) => {
      if (!o.has(u)) {
        const c = l.concat([_]);
        h.push({
          op: r,
          path: c,
          value: u
        }), S.unshift({
          op: n,
          path: c,
          value: u
        });
      }
      _++;
    }), _ = 0, o.forEach((u) => {
      if (!g.has(u)) {
        const c = l.concat([_]);
        h.push({
          op: n,
          path: c,
          value: u
        }), S.unshift({
          op: r,
          path: c,
          value: u
        });
      }
      _++;
    });
  }
  function D(s, l, h, S) {
    h.push({
      op: t,
      path: [],
      value: l === at ? void 0 : l
    }), S.push({
      op: t,
      path: [],
      value: s
    });
  }
  function E(s, l) {
    return l.forEach((h) => {
      const { path: S, op: g } = h;
      let o = s;
      for (let w = 0; w < S.length - 1; w++) {
        const O = ce(o);
        let P = S[w];
        typeof P != "string" && typeof P != "number" && (P = "" + P), (O === 0 || O === 1) && (P === "__proto__" || P === "constructor") && W(19), typeof o == "function" && P === "prototype" && W(19), o = Ve(o, P), typeof o != "object" && W(18, S.join("/"));
      }
      const _ = ce(o), u = I(h.value), c = S[S.length - 1];
      switch (g) {
        case t:
          switch (_) {
            case 2:
              return o.set(c, u);
            case 3:
              W(16);
            default:
              return o[c] = u;
          }
        case n:
          switch (_) {
            case 1:
              return c === "-" ? o.push(u) : o.splice(c, 0, u);
            case 2:
              return o.set(c, u);
            case 3:
              return o.add(u);
            default:
              return o[c] = u;
          }
        case r:
          switch (_) {
            case 1:
              return o.splice(c, 1);
            case 2:
              return o.delete(c);
            case 3:
              return o.delete(h.value);
            default:
              return delete o[c];
          }
        default:
          W(17, g);
      }
    }), s;
  }
  function I(s) {
    if (!te(s))
      return s;
    if (Array.isArray(s))
      return s.map(I);
    if (Ae(s))
      return new Map(
        Array.from(s.entries()).map(([h, S]) => [h, I(S)])
      );
    if (Oe(s))
      return new Set(Array.from(s).map(I));
    const l = Object.create(ae(s));
    for (const h in s)
      l[h] = I(s[h]);
    return _e(s, ve) && (l[ve] = s[ve]), l;
  }
  function b(s) {
    return ee(s) ? I(s) : s;
  }
  an("Patches", {
    applyPatches_: E,
    generatePatches_: i,
    generateReplacementPatches_: D
  });
}
var J = new dn();
J.produce;
var Lt = J.produceWithPatches.bind(
  J
);
J.setAutoFreeze.bind(J);
J.setUseStrictShallowCopy.bind(J);
var St = J.applyPatches.bind(J);
J.createDraft.bind(J);
J.finishDraft.bind(J);
var hn = class extends Error {
  /**
   * The schema issues.
   */
  issues;
  /**
   * Creates a schema error with useful information.
   *
   * @param issues The schema issues.
   */
  constructor(e) {
    super(e[0].message), this.name = "SchemaError", this.issues = e;
  }
}, mn = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let r = !1;
    try {
      const i = {};
      e(i) === i && (r = !0);
    } catch {
    }
    if (r) {
      let i;
      try {
        throw new Error();
      } catch (y) {
        ({ stack: i } = y);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, gn = (e, t, n) => {
  const { memoize: r, memoizeOptions: i } = t, { inputSelectorResults: y, inputSelectorResultsCopy: d } = e, v = r(() => ({}), ...i);
  if (!(v.apply(null, y) === v.apply(null, d))) {
    let E;
    try {
      throw new Error();
    } catch (I) {
      ({ stack: E } = I);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: y,
        secondInputs: d,
        stack: E
      }
    );
  }
}, vn = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function bn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function Sn(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function _n(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var _t = (e) => Array.isArray(e) ? e : [e];
function wn(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return _n(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function wt(e, t) {
  const n = [], { length: r } = e;
  for (let i = 0; i < r; i++)
    n.push(e[i].apply(null, t));
  return n;
}
var Rn = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...vn,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: mn
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: gn
    }
  };
}, En = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Pn = typeof WeakRef < "u" ? WeakRef : En, An = 0, Rt = 1;
function De() {
  return {
    s: An,
    v: void 0,
    o: null,
    p: null
  };
}
function ke(e, t = {}) {
  let n = De();
  const { resultEqualityCheck: r } = t;
  let i, y = 0;
  function d() {
    let v = n;
    const { length: D } = arguments;
    for (let b = 0, s = D; b < s; b++) {
      const l = arguments[b];
      if (typeof l == "function" || typeof l == "object" && l !== null) {
        let h = v.o;
        h === null && (v.o = h = /* @__PURE__ */ new WeakMap());
        const S = h.get(l);
        S === void 0 ? (v = De(), h.set(l, v)) : v = S;
      } else {
        let h = v.p;
        h === null && (v.p = h = /* @__PURE__ */ new Map());
        const S = h.get(l);
        S === void 0 ? (v = De(), h.set(l, v)) : v = S;
      }
    }
    const E = v;
    let I;
    if (v.s === Rt)
      I = v.v;
    else if (I = e.apply(null, arguments), y++, r) {
      const b = i?.deref?.() ?? i;
      b != null && r(b, I) && (I = b, y !== 0 && y--), i = typeof I == "object" && I !== null || typeof I == "function" ? new Pn(I) : I;
    }
    return E.s = Rt, E.v = I, I;
  }
  return d.clearCache = () => {
    n = De(), d.resetResultsCount();
  }, d.resultsCount = () => y, d.resetResultsCount = () => {
    y = 0;
  }, d;
}
function On(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...i) => {
    let y = 0, d = 0, v, D = {}, E = i.pop();
    typeof E == "object" && (D = E, E = i.pop()), bn(
      E,
      `createSelector expects an output function after the inputs, but received: [${typeof E}]`
    );
    const I = {
      ...n,
      ...D
    }, {
      memoize: b,
      memoizeOptions: s = [],
      argsMemoize: l = ke,
      argsMemoizeOptions: h = [],
      devModeChecks: S = {}
    } = I, g = _t(s), o = _t(h), _ = wn(i), u = b(function() {
      return y++, E.apply(
        null,
        arguments
      );
    }, ...g);
    let c = !0;
    const w = l(function() {
      d++;
      const P = wt(
        _,
        arguments
      );
      if (v = u.apply(null, P), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: T, inputStabilityCheck: A } = Rn(c, S);
        if (T.shouldRun && T.run(
          E,
          P,
          v
        ), A.shouldRun) {
          const m = wt(
            _,
            arguments
          );
          A.run(
            { inputSelectorResults: P, inputSelectorResultsCopy: m },
            { memoize: b, memoizeOptions: g },
            arguments
          );
        }
        c && (c = !1);
      }
      return v;
    }, ...o);
    return Object.assign(w, {
      resultFunc: E,
      memoizedResultFunc: u,
      dependencies: _,
      dependencyRecomputations: () => d,
      resetDependencyRecomputations: () => {
        d = 0;
      },
      lastResult: () => v,
      recomputations: () => y,
      resetRecomputations: () => {
        y = 0;
      },
      memoize: b,
      argsMemoize: l
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var In = /* @__PURE__ */ On(ke), Dn = Object.assign(
  (e, t = In) => {
    Sn(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (y) => e[y]
    );
    return t(
      r,
      (...y) => y.reduce((d, v, D) => (d[n[D]] = v, d), {})
    );
  },
  { withTypes: () => Dn }
), Tn = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(Tn || {});
function Et(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var Pt = be;
function Bt(e, t) {
  if (e === t || !(Pt(e) && Pt(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), r = Object.keys(e);
  let i = n.length === r.length;
  const y = Array.isArray(t) ? [] : {};
  for (const d of n)
    y[d] = Bt(e[d], t[d]), i && (i = e[d] === y[d]);
  return i ? e : y;
}
function ye(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var At = (e) => [].concat(...e);
function Cn(e) {
  return new RegExp("(^|:)//").test(e);
}
function Nn() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Fe(e) {
  return e != null;
}
function qn() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var Qn = (e) => e.replace(/\/$/, ""), Mn = (e) => e.replace(/^\//, "");
function kn(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (Cn(t))
    return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = Qn(e), t = Mn(t), `${e}${n}${t}`;
}
function Fn(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n).get(t);
}
var Ot = (...e) => fetch(...e), jn = (e) => e.status >= 200 && e.status <= 299, xn = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function It(e) {
  if (!be(e))
    return e;
  const t = {
    ...e
  };
  for (const [n, r] of Object.entries(t))
    r === void 0 && delete t[n];
  return t;
}
function cr({
  baseUrl: e,
  prepareHeaders: t = (b) => b,
  fetchFn: n = Ot,
  paramsSerializer: r,
  isJsonContentType: i = xn,
  jsonContentType: y = "application/json",
  jsonReplacer: d,
  timeout: v,
  responseHandler: D,
  validateStatus: E,
  ...I
} = {}) {
  return typeof fetch > "u" && n === Ot && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (s, l, h) => {
    const {
      getState: S,
      extra: g,
      endpoint: o,
      forced: _,
      type: u
    } = l;
    let c, {
      url: w,
      headers: O = new Headers(I.headers),
      params: P = void 0,
      responseHandler: T = D ?? "json",
      validateStatus: A = E ?? jn,
      timeout: m = v,
      ...a
    } = typeof s == "string" ? {
      url: s
    } : s, f, p = l.signal;
    m && (f = new AbortController(), l.signal.addEventListener("abort", f.abort), p = f.signal);
    let R = {
      ...I,
      signal: p,
      ...a
    };
    O = new Headers(It(O)), R.headers = await t(O, {
      getState: S,
      arg: s,
      extra: g,
      endpoint: o,
      forced: _,
      type: u,
      extraOptions: h
    }) || O;
    const C = (j) => typeof j == "object" && (be(j) || Array.isArray(j) || typeof j.toJSON == "function");
    if (!R.headers.has("content-type") && C(R.body) && R.headers.set("content-type", y), C(R.body) && i(R.headers) && (R.body = JSON.stringify(R.body, d)), P) {
      const j = ~w.indexOf("?") ? "&" : "?", Q = r ? r(P) : new URLSearchParams(It(P));
      w += j + Q;
    }
    w = kn(e, w);
    const M = new Request(w, R);
    c = {
      request: new Request(w, R)
    };
    let q, N = !1, z = f && setTimeout(() => {
      N = !0, f.abort();
    }, m);
    try {
      q = await n(M);
    } catch (j) {
      return {
        error: {
          status: N ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(j)
        },
        meta: c
      };
    } finally {
      z && clearTimeout(z), f?.signal.removeEventListener("abort", f.abort);
    }
    const K = q.clone();
    c.response = K;
    let B, $ = "";
    try {
      let j;
      if (await Promise.all([
        b(q, T).then((Q) => B = Q, (Q) => j = Q),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        K.text().then((Q) => $ = Q, () => {
        })
      ]), j) throw j;
    } catch (j) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: q.status,
          data: $,
          error: String(j)
        },
        meta: c
      };
    }
    return A(q, B) ? {
      data: B,
      meta: c
    } : {
      error: {
        status: q.status,
        data: B
      },
      meta: c
    };
  };
  async function b(s, l) {
    if (typeof l == "function")
      return l(s);
    if (l === "content-type" && (l = i(s.headers) ? "json" : "text"), l === "json") {
      const h = await s.text();
      return h.length ? JSON.parse(h) : null;
    }
    return s.text();
  }
}
var Dt = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, ze = /* @__PURE__ */ he("__rtkq/focused"), lt = /* @__PURE__ */ he("__rtkq/unfocused"), $e = /* @__PURE__ */ he("__rtkq/online"), ft = /* @__PURE__ */ he("__rtkq/offline"), Be = !1;
function ur(e, t) {
  function n() {
    const r = () => e(ze()), i = () => e(lt()), y = () => e($e()), d = () => e(ft()), v = () => {
      window.document.visibilityState === "visible" ? r() : i();
    };
    return Be || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", v, !1), window.addEventListener("focus", r, !1), window.addEventListener("online", y, !1), window.addEventListener("offline", d, !1), Be = !0), () => {
      window.removeEventListener("focus", r), window.removeEventListener("visibilitychange", v), window.removeEventListener("online", y), window.removeEventListener("offline", d), Be = !1;
    };
  }
  return n();
}
function Ke(e) {
  return e.type === "query";
}
function zn(e) {
  return e.type === "mutation";
}
function Ie(e) {
  return e.type === "infinitequery";
}
function je(e) {
  return Ke(e) || Ie(e);
}
function dt(e, t, n, r, i, y) {
  return $n(e) ? e(t, n, r, i).filter(Fe).map(tt).map(y) : Array.isArray(e) ? e.map(tt).map(y) : [];
}
function $n(e) {
  return typeof e == "function";
}
function tt(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Kn(e, t) {
  return e.catch(t);
}
var Ee = Symbol("forceQueryFn"), nt = (e) => typeof e[Ee] == "function";
function Un({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: n,
  mutationThunk: r,
  api: i,
  context: y
}) {
  const d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: D,
    removeMutationResult: E,
    updateSubscriptionOptions: I
  } = i.internalActions;
  return {
    buildInitiateQuery: o,
    buildInitiateInfiniteQuery: _,
    buildInitiateMutation: u,
    getRunningQueryThunk: b,
    getRunningMutationThunk: s,
    getRunningQueriesThunk: l,
    getRunningMutationsThunk: h
  };
  function b(c, w) {
    return (O) => {
      const P = y.endpointDefinitions[c], T = e({
        queryArgs: w,
        endpointDefinition: P,
        endpointName: c
      });
      return d.get(O)?.[T];
    };
  }
  function s(c, w) {
    return (O) => v.get(O)?.[w];
  }
  function l() {
    return (c) => Object.values(d.get(c) || {}).filter(Fe);
  }
  function h() {
    return (c) => Object.values(v.get(c) || {}).filter(Fe);
  }
  function S(c) {
    if (process.env.NODE_ENV !== "production") {
      if (S.triggered) return;
      const w = c(i.internalActions.internal_getRTKQSubscriptions());
      if (S.triggered = !0, typeof w != "object" || typeof w?.type == "string")
        throw new Error(process.env.NODE_ENV === "production" ? Ne(34) : `Warning: Middleware for RTK-Query API at reducerPath "${i.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function g(c, w) {
    const O = (P, {
      subscribe: T = !0,
      forceRefetch: A,
      subscriptionOptions: m,
      [Ee]: a,
      ...f
    } = {}) => (p, R) => {
      const C = e({
        queryArgs: P,
        endpointDefinition: w,
        endpointName: c
      });
      let M;
      const k = {
        ...f,
        type: "query",
        subscribe: T,
        forceRefetch: A,
        subscriptionOptions: m,
        endpointName: c,
        originalArgs: P,
        queryCacheKey: C,
        [Ee]: a
      };
      if (Ke(w))
        M = t(k);
      else {
        const {
          direction: U,
          initialPageParam: x
        } = f;
        M = n({
          ...k,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: U,
          initialPageParam: x
        });
      }
      const q = i.endpoints[c].select(P), N = p(M), z = q(R());
      S(p);
      const {
        requestId: K,
        abort: B
      } = N, $ = z.requestId !== K, j = d.get(p)?.[C], Q = () => q(R()), V = Object.assign(a ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        N.then(Q)
      ) : $ && !j ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(z)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([j, N]).then(Q)
      ), {
        arg: P,
        requestId: K,
        subscriptionOptions: m,
        queryCacheKey: C,
        abort: B,
        async unwrap() {
          const U = await V;
          if (U.isError)
            throw U.error;
          return U.data;
        },
        refetch: () => p(O(P, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          T && p(D({
            queryCacheKey: C,
            requestId: K
          }));
        },
        updateSubscriptionOptions(U) {
          V.subscriptionOptions = U, p(I({
            endpointName: c,
            requestId: K,
            queryCacheKey: C,
            options: U
          }));
        }
      });
      if (!j && !$ && !a) {
        const U = Fn(d, p, {});
        U[C] = V, V.then(() => {
          delete U[C], ye(U) || d.delete(p);
        });
      }
      return V;
    };
    return O;
  }
  function o(c, w) {
    return g(c, w);
  }
  function _(c, w) {
    return g(c, w);
  }
  function u(c) {
    return (w, {
      track: O = !0,
      fixedCacheKey: P
    } = {}) => (T, A) => {
      const m = r({
        type: "mutation",
        endpointName: c,
        originalArgs: w,
        track: O,
        fixedCacheKey: P
      }), a = T(m);
      S(T);
      const {
        requestId: f,
        abort: p,
        unwrap: R
      } = a, C = Kn(a.unwrap().then((N) => ({
        data: N
      })), (N) => ({
        error: N
      })), M = () => {
        T(E({
          requestId: f,
          fixedCacheKey: P
        }));
      }, k = Object.assign(C, {
        arg: a.arg,
        requestId: f,
        abort: p,
        unwrap: R,
        reset: M
      }), q = v.get(T) || {};
      return v.set(T, q), q[f] = k, k.then(() => {
        delete q[f], ye(q) || v.delete(T);
      }), P && (q[P] = k, k.then(() => {
        q[P] === k && (delete q[P], ye(q) || v.delete(T));
      })), k;
    };
  }
}
var Ht = class extends hn {
  constructor(e, t, n, r) {
    super(e), this.value = t, this.schemaName = n, this._bqMeta = r;
  }
};
async function ie(e, t, n, r) {
  const i = await e["~standard"].validate(t);
  if (i.issues)
    throw new Ht(i.issues, t, n, r);
  return i.value;
}
function Vn(e) {
  return e;
}
var ge = (e = {}) => ({
  ...e,
  [jt]: !0
});
function Wn({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: r,
  api: i,
  assertTagType: y,
  selectors: d,
  onSchemaFailure: v,
  catchSchemaFailure: D,
  skipSchemaValidation: E
}) {
  const I = (a, f, p, R) => (C, M) => {
    const k = n[a], q = r({
      queryArgs: f,
      endpointDefinition: k,
      endpointName: a
    });
    if (C(i.internalActions.queryResultPatched({
      queryCacheKey: q,
      patches: p
    })), !R)
      return;
    const N = i.endpoints[a].select(f)(
      // Work around TS 4.1 mismatch
      M()
    ), z = dt(k.providesTags, N.data, void 0, f, {}, y);
    C(i.internalActions.updateProvidedBy([{
      queryCacheKey: q,
      providedTags: z
    }]));
  };
  function b(a, f, p = 0) {
    const R = [f, ...a];
    return p && R.length > p ? R.slice(0, -1) : R;
  }
  function s(a, f, p = 0) {
    const R = [...a, f];
    return p && R.length > p ? R.slice(1) : R;
  }
  const l = (a, f, p, R = !0) => (C, M) => {
    const q = i.endpoints[a].select(f)(
      // Work around TS 4.1 mismatch
      M()
    ), N = {
      patches: [],
      inversePatches: [],
      undo: () => C(i.util.patchQueryData(a, f, N.inversePatches, R))
    };
    if (q.status === "uninitialized")
      return N;
    let z;
    if ("data" in q)
      if (te(q.data)) {
        const [K, B, $] = Lt(q.data, p);
        N.patches.push(...B), N.inversePatches.push(...$), z = K;
      } else
        z = p(q.data), N.patches.push({
          op: "replace",
          path: [],
          value: z
        }), N.inversePatches.push({
          op: "replace",
          path: [],
          value: q.data
        });
    return N.patches.length === 0 || C(i.util.patchQueryData(a, f, N.patches, R)), N;
  }, h = (a, f, p) => (R) => R(i.endpoints[a].initiate(f, {
    subscribe: !1,
    forceRefetch: !0,
    [Ee]: () => ({
      data: p
    })
  })), S = (a, f) => a.query && a[f] ? a[f] : Vn, g = async (a, {
    signal: f,
    abort: p,
    rejectWithValue: R,
    fulfillWithValue: C,
    dispatch: M,
    getState: k,
    extra: q
  }) => {
    const N = n[a.endpointName], {
      metaSchema: z,
      skipSchemaValidation: K = E
    } = N;
    try {
      let B = S(N, "transformResponse");
      const $ = {
        signal: f,
        abort: p,
        dispatch: M,
        getState: k,
        extra: q,
        endpoint: a.endpointName,
        type: a.type,
        forced: a.type === "query" ? o(a, k()) : void 0,
        queryCacheKey: a.type === "query" ? a.queryCacheKey : void 0
      }, j = a.type === "query" ? a[Ee] : void 0;
      let Q;
      const V = async (x, F, L, le) => {
        if (F == null && x.pages.length)
          return Promise.resolve({
            data: x
          });
        const ne = {
          queryArg: a.originalArgs,
          pageParam: F
        }, fe = await U(ne), X = le ? b : s;
        return {
          data: {
            pages: X(x.pages, fe.data, L),
            pageParams: X(x.pageParams, F, L)
          },
          meta: fe.meta
        };
      };
      async function U(x) {
        let F;
        const {
          extraOptions: L,
          argSchema: le,
          rawResponseSchema: ne,
          responseSchema: fe
        } = N;
        if (le && !K && (x = await ie(
          le,
          x,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), j ? F = j() : N.query ? F = await t(N.query(x), $, L) : F = await N.queryFn(x, $, L, (Y) => t(Y, $, L)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const Y = N.query ? "`baseQuery`" : "`queryFn`";
          let G;
          if (!F)
            G = `${Y} did not return anything.`;
          else if (typeof F != "object")
            G = `${Y} did not return an object.`;
          else if (F.error && F.data)
            G = `${Y} returned an object containing both \`error\` and \`result\`.`;
          else if (F.error === void 0 && F.data === void 0)
            G = `${Y} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const de of Object.keys(F))
              if (de !== "error" && de !== "data" && de !== "meta") {
                G = `The object returned by ${Y} has the unknown property ${de}.`;
                break;
              }
          G && console.error(`Error encountered handling the endpoint ${a.endpointName}.
                  ${G}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, F);
        }
        if (F.error) throw new Dt(F.error, F.meta);
        let {
          data: X
        } = F;
        ne && !K && (X = await ie(ne, F.data, "rawResponseSchema", F.meta));
        let re = await B(X, F.meta, x);
        return fe && !K && (re = await ie(fe, re, "responseSchema", F.meta)), {
          ...F,
          data: re
        };
      }
      if (a.type === "query" && "infiniteQueryOptions" in N) {
        const {
          infiniteQueryOptions: x
        } = N, {
          maxPages: F = 1 / 0
        } = x;
        let L;
        const le = {
          pages: [],
          pageParams: []
        }, ne = d.selectQueryEntry(k(), a.queryCacheKey)?.data, X = /* arg.forceRefetch */ o(a, k()) && !a.direction || !ne ? le : ne;
        if ("direction" in a && a.direction && X.pages.length) {
          const re = a.direction === "backward", G = (re ? Jt : rt)(x, X, a.originalArgs);
          L = await V(X, G, F, re);
        } else {
          const {
            initialPageParam: re = x.initialPageParam
          } = a, Y = ne?.pageParams ?? [], G = Y[0] ?? re, de = Y.length;
          L = await V(X, G, F), j && (L = {
            data: L.data.pages[0]
          });
          for (let pt = 1; pt < de; pt++) {
            const Xt = rt(x, L.data, a.originalArgs);
            L = await V(L.data, Xt, F);
          }
        }
        Q = L;
      } else
        Q = await U(a.originalArgs);
      return z && !K && Q.meta && (Q.meta = await ie(z, Q.meta, "metaSchema", Q.meta)), C(Q.data, ge({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: Q.meta
      }));
    } catch (B) {
      let $ = B;
      if ($ instanceof Dt) {
        let j = S(N, "transformErrorResponse");
        const {
          rawErrorResponseSchema: Q,
          errorResponseSchema: V
        } = N;
        let {
          value: U,
          meta: x
        } = $;
        try {
          Q && !K && (U = await ie(Q, U, "rawErrorResponseSchema", x)), z && !K && (x = await ie(z, x, "metaSchema", x));
          let F = await j(U, x, a.originalArgs);
          return V && !K && (F = await ie(V, F, "errorResponseSchema", x)), R(F, ge({
            baseQueryMeta: x
          }));
        } catch (F) {
          $ = F;
        }
      }
      try {
        if ($ instanceof Ht) {
          const j = {
            endpoint: a.endpointName,
            arg: a.originalArgs,
            type: a.type,
            queryCacheKey: a.type === "query" ? a.queryCacheKey : void 0
          };
          N.onSchemaFailure?.($, j), v?.($, j);
          const {
            catchSchemaFailure: Q = D
          } = N;
          if (Q)
            return R(Q($, j), ge({
              baseQueryMeta: $._bqMeta
            }));
        }
      } catch (j) {
        $ = j;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${a.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, $) : console.error($), $;
    }
  };
  function o(a, f) {
    const p = d.selectQueryEntry(f, a.queryCacheKey), R = d.selectConfig(f).refetchOnMountOrArgChange, C = p?.fulfilledTimeStamp, M = a.forceRefetch ?? (a.subscribe && R);
    return M ? M === !0 || (Number(/* @__PURE__ */ new Date()) - Number(C)) / 1e3 >= M : !1;
  }
  const _ = () => yt(`${e}/executeQuery`, g, {
    getPendingMeta({
      arg: f
    }) {
      const p = n[f.endpointName];
      return ge({
        startedTimeStamp: Date.now(),
        ...Ie(p) ? {
          direction: f.direction
        } : {}
      });
    },
    condition(f, {
      getState: p
    }) {
      const R = p(), C = d.selectQueryEntry(R, f.queryCacheKey), M = C?.fulfilledTimeStamp, k = f.originalArgs, q = C?.originalArgs, N = n[f.endpointName], z = f.direction;
      return nt(f) ? !0 : C?.status === "pending" ? !1 : o(f, R) || Ke(N) && N?.forceRefetch?.({
        currentArg: k,
        previousArg: q,
        endpointState: C,
        state: R
      }) ? !0 : !(M && !z);
    },
    dispatchConditionRejection: !0
  }), u = _(), c = _(), w = yt(`${e}/executeMutation`, g, {
    getPendingMeta() {
      return ge({
        startedTimeStamp: Date.now()
      });
    }
  }), O = (a) => "force" in a, P = (a) => "ifOlderThan" in a, T = (a, f, p) => (R, C) => {
    const M = O(p) && p.force, k = P(p) && p.ifOlderThan, q = (z = !0) => {
      const K = {
        forceRefetch: z,
        isPrefetch: !0
      };
      return i.endpoints[a].initiate(f, K);
    }, N = i.endpoints[a].select(f)(C());
    if (M)
      R(q());
    else if (k) {
      const z = N?.fulfilledTimeStamp;
      if (!z) {
        R(q());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(z))) / 1e3 >= k && R(q());
    } else
      R(q(!1));
  };
  function A(a) {
    return (f) => f?.meta?.arg?.endpointName === a;
  }
  function m(a, f) {
    return {
      matchPending: Ue(xt(a), A(f)),
      matchFulfilled: Ue(oe(a), A(f)),
      matchRejected: Ue(ot(a), A(f))
    };
  }
  return {
    queryThunk: u,
    mutationThunk: w,
    infiniteQueryThunk: c,
    prefetch: T,
    updateQueryData: l,
    upsertQueryData: h,
    patchQueryData: I,
    buildMatchThunkActions: m
  };
}
function rt(e, {
  pages: t,
  pageParams: n
}, r) {
  const i = t.length - 1;
  return e.getNextPageParam(t[i], t, n[i], n, r);
}
function Jt(e, {
  pages: t,
  pageParams: n
}, r) {
  return e.getPreviousPageParam?.(t[0], t, n[0], n, r);
}
function Yt(e, t, n, r) {
  return dt(n[e.meta.arg.endpointName][t], oe(e) ? e.payload : void 0, st(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, r);
}
function Te(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Pe(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Tt(e, t, n) {
  const r = e[Pe(t)];
  r && n(r);
}
var Ce = {};
function Ln({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: i,
    apiUid: y,
    extractRehydrationInfo: d,
    hasRehydrationInfo: v
  },
  assertTagType: D,
  config: E
}) {
  const I = he(`${e}/resetApiState`);
  function b(A, m, a, f) {
    A[m.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: m.endpointName
    }, Te(A, m.queryCacheKey, (p) => {
      p.status = "pending", p.requestId = a && p.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        p.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        f.requestId
      ), m.originalArgs !== void 0 && (p.originalArgs = m.originalArgs), p.startedTimeStamp = f.startedTimeStamp;
      const R = i[f.arg.endpointName];
      Ie(R) && "direction" in m && (p.direction = m.direction);
    });
  }
  function s(A, m, a, f) {
    Te(A, m.arg.queryCacheKey, (p) => {
      if (p.requestId !== m.requestId && !f) return;
      const {
        merge: R
      } = i[m.arg.endpointName];
      if (p.status = "fulfilled", R)
        if (p.data !== void 0) {
          const {
            fulfilledTimeStamp: C,
            arg: M,
            baseQueryMeta: k,
            requestId: q
          } = m;
          let N = it(p.data, (z) => R(z, a, {
            arg: M.originalArgs,
            baseQueryMeta: k,
            fulfilledTimeStamp: C,
            requestId: q
          }));
          p.data = N;
        } else
          p.data = a;
      else
        p.data = i[m.arg.endpointName].structuralSharing ?? !0 ? Bt(ee(p.data) ? rn(p.data) : p.data, a) : a;
      delete p.error, p.fulfilledTimeStamp = m.fulfilledTimeStamp;
    });
  }
  const l = pe({
    name: `${e}/queries`,
    initialState: Ce,
    reducers: {
      removeQueryResult: {
        reducer(A, {
          payload: {
            queryCacheKey: m
          }
        }) {
          delete A[m];
        },
        prepare: me()
      },
      cacheEntriesUpserted: {
        reducer(A, m) {
          for (const a of m.payload) {
            const {
              queryDescription: f,
              value: p
            } = a;
            b(A, f, !0, {
              arg: f,
              requestId: m.meta.requestId,
              startedTimeStamp: m.meta.timestamp
            }), s(
              A,
              {
                arg: f,
                requestId: m.meta.requestId,
                fulfilledTimeStamp: m.meta.timestamp,
                baseQueryMeta: {}
              },
              p,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (A) => ({
          payload: A.map((f) => {
            const {
              endpointName: p,
              arg: R,
              value: C
            } = f, M = i[p];
            return {
              queryDescription: {
                type: "query",
                endpointName: p,
                originalArgs: f.arg,
                queryCacheKey: r({
                  queryArgs: R,
                  endpointDefinition: M,
                  endpointName: p
                })
              },
              value: C
            };
          }),
          meta: {
            [jt]: !0,
            requestId: Ft(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(A, {
          payload: {
            queryCacheKey: m,
            patches: a
          }
        }) {
          Te(A, m, (f) => {
            f.data = St(f.data, a.concat());
          });
        },
        prepare: me()
      }
    },
    extraReducers(A) {
      A.addCase(t.pending, (m, {
        meta: a,
        meta: {
          arg: f
        }
      }) => {
        const p = nt(f);
        b(m, f, p, a);
      }).addCase(t.fulfilled, (m, {
        meta: a,
        payload: f
      }) => {
        const p = nt(a.arg);
        s(m, a, f, p);
      }).addCase(t.rejected, (m, {
        meta: {
          condition: a,
          arg: f,
          requestId: p
        },
        error: R,
        payload: C
      }) => {
        Te(m, f.queryCacheKey, (M) => {
          if (!a) {
            if (M.requestId !== p) return;
            M.status = "rejected", M.error = C ?? R;
          }
        });
      }).addMatcher(v, (m, a) => {
        const {
          queries: f
        } = d(a);
        for (const [p, R] of Object.entries(f))
          // do not rehydrate entries that were currently in flight.
          (R?.status === "fulfilled" || R?.status === "rejected") && (m[p] = R);
      });
    }
  }), h = pe({
    name: `${e}/mutations`,
    initialState: Ce,
    reducers: {
      removeMutationResult: {
        reducer(A, {
          payload: m
        }) {
          const a = Pe(m);
          a in A && delete A[a];
        },
        prepare: me()
      }
    },
    extraReducers(A) {
      A.addCase(n.pending, (m, {
        meta: a,
        meta: {
          requestId: f,
          arg: p,
          startedTimeStamp: R
        }
      }) => {
        p.track && (m[Pe(a)] = {
          requestId: f,
          status: "pending",
          endpointName: p.endpointName,
          startedTimeStamp: R
        });
      }).addCase(n.fulfilled, (m, {
        payload: a,
        meta: f
      }) => {
        f.arg.track && Tt(m, f, (p) => {
          p.requestId === f.requestId && (p.status = "fulfilled", p.data = a, p.fulfilledTimeStamp = f.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (m, {
        payload: a,
        error: f,
        meta: p
      }) => {
        p.arg.track && Tt(m, p, (R) => {
          R.requestId === p.requestId && (R.status = "rejected", R.error = a ?? f);
        });
      }).addMatcher(v, (m, a) => {
        const {
          mutations: f
        } = d(a);
        for (const [p, R] of Object.entries(f))
          // do not rehydrate entries that were currently in flight.
          (R?.status === "fulfilled" || R?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          p !== R?.requestId && (m[p] = R);
      });
    }
  }), S = {
    tags: {},
    keys: {}
  }, g = pe({
    name: `${e}/invalidation`,
    initialState: S,
    reducers: {
      updateProvidedBy: {
        reducer(A, m) {
          for (const {
            queryCacheKey: a,
            providedTags: f
          } of m.payload) {
            o(A, a);
            for (const {
              type: p,
              id: R
            } of f) {
              const C = (A.tags[p] ??= {})[R || "__internal_without_id"] ??= [];
              C.includes(a) || C.push(a);
            }
            A.keys[a] = f;
          }
        },
        prepare: me()
      }
    },
    extraReducers(A) {
      A.addCase(l.actions.removeQueryResult, (m, {
        payload: {
          queryCacheKey: a
        }
      }) => {
        o(m, a);
      }).addMatcher(v, (m, a) => {
        const {
          provided: f
        } = d(a);
        for (const [p, R] of Object.entries(f))
          for (const [C, M] of Object.entries(R)) {
            const k = (m.tags[p] ??= {})[C || "__internal_without_id"] ??= [];
            for (const q of M)
              k.includes(q) || k.push(q);
          }
      }).addMatcher(qe(oe(t), st(t)), (m, a) => {
        _(m, [a]);
      }).addMatcher(l.actions.cacheEntriesUpserted.match, (m, a) => {
        const f = a.payload.map(({
          queryDescription: p,
          value: R
        }) => ({
          type: "UNKNOWN",
          payload: R,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: p
          }
        }));
        _(m, f);
      });
    }
  });
  function o(A, m) {
    const a = A.keys[m] ?? [];
    for (const f of a) {
      const p = f.type, R = f.id ?? "__internal_without_id", C = A.tags[p]?.[R];
      C && (A.tags[p][R] = C.filter((M) => M !== m));
    }
    delete A.keys[m];
  }
  function _(A, m) {
    const a = m.map((f) => {
      const p = Yt(f, "providesTags", i, D), {
        queryCacheKey: R
      } = f.meta.arg;
      return {
        queryCacheKey: R,
        providedTags: p
      };
    });
    g.caseReducers.updateProvidedBy(A, g.actions.updateProvidedBy(a));
  }
  const u = pe({
    name: `${e}/subscriptions`,
    initialState: Ce,
    reducers: {
      updateSubscriptionOptions(A, m) {
      },
      unsubscribeQueryResult(A, m) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), c = pe({
    name: `${e}/internalSubscriptions`,
    initialState: Ce,
    reducers: {
      subscriptionsUpdated: {
        reducer(A, m) {
          return St(A, m.payload);
        },
        prepare: me()
      }
    }
  }), w = pe({
    name: `${e}/config`,
    initialState: {
      online: qn(),
      focused: Nn(),
      middlewareRegistered: !1,
      ...E
    },
    reducers: {
      middlewareRegistered(A, {
        payload: m
      }) {
        A.middlewareRegistered = A.middlewareRegistered === "conflict" || y !== m ? "conflict" : !0;
      }
    },
    extraReducers: (A) => {
      A.addCase($e, (m) => {
        m.online = !0;
      }).addCase(ft, (m) => {
        m.online = !1;
      }).addCase(ze, (m) => {
        m.focused = !0;
      }).addCase(lt, (m) => {
        m.focused = !1;
      }).addMatcher(v, (m) => ({
        ...m
      }));
    }
  }), O = en({
    queries: l.reducer,
    mutations: h.reducer,
    provided: g.reducer,
    subscriptions: c.reducer,
    config: w.reducer
  }), P = (A, m) => O(I.match(m) ? void 0 : A, m), T = {
    ...w.actions,
    ...l.actions,
    ...u.actions,
    ...c.actions,
    ...h.actions,
    ...g.actions,
    resetApiState: I
  };
  return {
    reducer: P,
    actions: T
  };
}
var He = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Gt = {
  status: "uninitialized"
  /* uninitialized */
}, Ct = /* @__PURE__ */ it(Gt, () => {
}), Nt = /* @__PURE__ */ it(Gt, () => {
});
function Bn({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const r = (u) => Ct, i = (u) => Nt;
  return {
    buildQuerySelector: s,
    buildInfiniteQuerySelector: l,
    buildMutationSelector: h,
    selectInvalidatedBy: S,
    selectCachedArgsForQuery: g,
    selectApiState: d,
    selectQueries: v,
    selectMutations: E,
    selectQueryEntry: D,
    selectConfig: I
  };
  function y(u) {
    return {
      ...u,
      ...Et(u.status)
    };
  }
  function d(u) {
    const c = u[t];
    if (process.env.NODE_ENV !== "production" && !c) {
      if (d.triggered) return c;
      d.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return c;
  }
  function v(u) {
    return d(u)?.queries;
  }
  function D(u, c) {
    return v(u)?.[c];
  }
  function E(u) {
    return d(u)?.mutations;
  }
  function I(u) {
    return d(u)?.config;
  }
  function b(u, c, w) {
    return (O) => {
      if (O === He)
        return n(r, w);
      const P = e({
        queryArgs: O,
        endpointDefinition: c,
        endpointName: u
      });
      return n((A) => D(A, P) ?? Ct, w);
    };
  }
  function s(u, c) {
    return b(u, c, y);
  }
  function l(u, c) {
    const {
      infiniteQueryOptions: w
    } = c;
    function O(P) {
      const T = {
        ...P,
        ...Et(P.status)
      }, {
        isLoading: A,
        isError: m,
        direction: a
      } = T, f = a === "forward", p = a === "backward";
      return {
        ...T,
        hasNextPage: o(w, T.data, T.originalArgs),
        hasPreviousPage: _(w, T.data, T.originalArgs),
        isFetchingNextPage: A && f,
        isFetchingPreviousPage: A && p,
        isFetchNextPageError: m && f,
        isFetchPreviousPageError: m && p
      };
    }
    return b(u, c, O);
  }
  function h() {
    return (u) => {
      let c;
      return typeof u == "object" ? c = Pe(u) ?? He : c = u, n(c === He ? i : (P) => d(P)?.mutations?.[c] ?? Nt, y);
    };
  }
  function S(u, c) {
    const w = u[t], O = /* @__PURE__ */ new Set();
    for (const P of c.filter(Fe).map(tt)) {
      const T = w.provided.tags[P.type];
      if (!T)
        continue;
      let A = (P.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        T[P.id]
      ) : (
        // no id: invalidate all queries that provide this type
        At(Object.values(T))
      )) ?? [];
      for (const m of A)
        O.add(m);
    }
    return At(Array.from(O.values()).map((P) => {
      const T = w.queries[P];
      return T ? [{
        queryCacheKey: P,
        endpointName: T.endpointName,
        originalArgs: T.originalArgs
      }] : [];
    }));
  }
  function g(u, c) {
    return Object.values(v(u)).filter(
      (w) => w?.endpointName === c && w.status !== "uninitialized"
      /* uninitialized */
    ).map((w) => w.originalArgs);
  }
  function o(u, c, w) {
    return c ? rt(u, c, w) != null : !1;
  }
  function _(u, c, w) {
    return !c || !u.getPreviousPageParam ? !1 : Jt(u, c, w) != null;
  }
}
var qt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Qt = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const r = qt?.get(t);
  if (typeof r == "string")
    n = r;
  else {
    const i = JSON.stringify(t, (y, d) => (d = typeof d == "bigint" ? {
      $bigint: d.toString()
    } : d, d = be(d) ? Object.keys(d).sort().reduce((v, D) => (v[D] = d[D], v), {}) : d, d));
    be(t) && qt?.set(t, i), n = i;
  }
  return `${e}(${n})`;
};
function Hn(...e) {
  return function(n) {
    const r = ke((E) => n.extractRehydrationInfo?.(E, {
      reducerPath: n.reducerPath ?? "api"
    })), i = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...n,
      extractRehydrationInfo: r,
      serializeQueryArgs(E) {
        let I = Qt;
        if ("serializeQueryArgs" in E.endpointDefinition) {
          const b = E.endpointDefinition.serializeQueryArgs;
          I = (s) => {
            const l = b(s);
            return typeof l == "string" ? l : Qt({
              ...s,
              queryArgs: l
            });
          };
        } else n.serializeQueryArgs && (I = n.serializeQueryArgs);
        return I(E);
      },
      tagTypes: [...n.tagTypes || []]
    }, y = {
      endpointDefinitions: {},
      batch(E) {
        E();
      },
      apiUid: Ft(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: ke((E) => r(E) != null)
    }, d = {
      injectEndpoints: D,
      enhanceEndpoints({
        addTagTypes: E,
        endpoints: I
      }) {
        if (E)
          for (const b of E)
            i.tagTypes.includes(b) || i.tagTypes.push(b);
        if (I)
          for (const [b, s] of Object.entries(I))
            typeof s == "function" ? s(y.endpointDefinitions[b]) : Object.assign(y.endpointDefinitions[b] || {}, s);
        return d;
      }
    }, v = e.map((E) => E.init(d, i, y));
    function D(E) {
      const I = E.endpoints({
        query: (b) => ({
          ...b,
          type: "query"
          /* query */
        }),
        mutation: (b) => ({
          ...b,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (b) => ({
          ...b,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [b, s] of Object.entries(I)) {
        if (E.overrideExisting !== !0 && b in y.endpointDefinitions) {
          if (E.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? Ne(39) : `called \`injectEndpoints\` to override already-existing endpointName ${b} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${b} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && Ie(s)) {
          const {
            infiniteQueryOptions: l
          } = s, {
            maxPages: h,
            getPreviousPageParam: S
          } = l;
          if (typeof h == "number") {
            if (h < 1)
              throw new Error(process.env.NODE_ENV === "production" ? Ne(40) : `maxPages for endpoint '${b}' must be a number greater than 0`);
            if (typeof S != "function")
              throw new Error(process.env.NODE_ENV === "production" ? Ne(41) : `getPreviousPageParam for endpoint '${b}' must be a function if maxPages is used`);
          }
        }
        y.endpointDefinitions[b] = s;
        for (const l of v)
          l.injectEndpoint(b, s);
      }
      return d;
    }
    return d.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function Z(e, ...t) {
  return Object.assign(e, ...t);
}
var Jn = ({
  api: e,
  queryThunk: t,
  internalState: n
}) => {
  const r = `${e.reducerPath}/subscriptions`;
  let i = null, y = null;
  const {
    updateSubscriptionOptions: d,
    unsubscribeQueryResult: v
  } = e.internalActions, D = (l, h) => {
    if (d.match(h)) {
      const {
        queryCacheKey: g,
        requestId: o,
        options: _
      } = h.payload;
      return l?.[g]?.[o] && (l[g][o] = _), !0;
    }
    if (v.match(h)) {
      const {
        queryCacheKey: g,
        requestId: o
      } = h.payload;
      return l[g] && delete l[g][o], !0;
    }
    if (e.internalActions.removeQueryResult.match(h))
      return delete l[h.payload.queryCacheKey], !0;
    if (t.pending.match(h)) {
      const {
        meta: {
          arg: g,
          requestId: o
        }
      } = h, _ = l[g.queryCacheKey] ??= {};
      return _[`${o}_running`] = {}, g.subscribe && (_[o] = g.subscriptionOptions ?? _[o] ?? {}), !0;
    }
    let S = !1;
    if (t.fulfilled.match(h) || t.rejected.match(h)) {
      const g = l[h.meta.arg.queryCacheKey] || {}, o = `${h.meta.requestId}_running`;
      S ||= !!g[o], delete g[o];
    }
    if (t.rejected.match(h)) {
      const {
        meta: {
          condition: g,
          arg: o,
          requestId: _
        }
      } = h;
      if (g && o.subscribe) {
        const u = l[o.queryCacheKey] ??= {};
        u[_] = o.subscriptionOptions ?? u[_] ?? {}, S = !0;
      }
    }
    return S;
  }, E = () => n.currentSubscriptions, s = {
    getSubscriptions: E,
    getSubscriptionCount: (l) => {
      const S = E()[l] ?? {};
      return ye(S);
    },
    isRequestSubscribed: (l, h) => !!E()?.[l]?.[h]
  };
  return (l, h) => {
    if (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(l))
      return i = n.currentSubscriptions = {}, y = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(l))
      return [!1, s];
    const S = D(n.currentSubscriptions, l);
    let g = !0;
    if (S) {
      y || (y = setTimeout(() => {
        const u = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, c] = Lt(i, () => u);
        h.next(e.internalActions.subscriptionsUpdated(c)), i = u, y = null;
      }, 500));
      const o = typeof l.type == "string" && !!l.type.startsWith(r), _ = t.rejected.match(l) && l.meta.condition && !!l.meta.arg.subscribe;
      g = !o && !_;
    }
    return [g, !1];
  };
};
function Yn(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Gn = 2147483647 / 1e3 - 1, Xn = ({
  reducerPath: e,
  api: t,
  queryThunk: n,
  context: r,
  internalState: i,
  selectors: {
    selectQueryEntry: y,
    selectConfig: d
  }
}) => {
  const {
    removeQueryResult: v,
    unsubscribeQueryResult: D,
    cacheEntriesUpserted: E
  } = t.internalActions, I = qe(D.match, n.fulfilled, n.rejected, E.match);
  function b(g) {
    const o = i.currentSubscriptions[g];
    return !!o && !Yn(o);
  }
  const s = {}, l = (g, o, _) => {
    const u = o.getState(), c = d(u);
    if (I(g)) {
      let w;
      if (E.match(g))
        w = g.payload.map((O) => O.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: O
        } = D.match(g) ? g.payload : g.meta.arg;
        w = [O];
      }
      h(w, o, c);
    }
    if (t.util.resetApiState.match(g))
      for (const [w, O] of Object.entries(s))
        O && clearTimeout(O), delete s[w];
    if (r.hasRehydrationInfo(g)) {
      const {
        queries: w
      } = r.extractRehydrationInfo(g);
      h(Object.keys(w), o, c);
    }
  };
  function h(g, o, _) {
    const u = o.getState();
    for (const c of g) {
      const w = y(u, c);
      S(c, w?.endpointName, o, _);
    }
  }
  function S(g, o, _, u) {
    const w = r.endpointDefinitions[o]?.keepUnusedDataFor ?? u.keepUnusedDataFor;
    if (w === 1 / 0)
      return;
    const O = Math.max(0, Math.min(w, Gn));
    if (!b(g)) {
      const P = s[g];
      P && clearTimeout(P), s[g] = setTimeout(() => {
        b(g) || _.dispatch(v({
          queryCacheKey: g
        })), delete s[g];
      }, O * 1e3);
    }
  }
  return l;
}, Mt = new Error("Promise never resolved before cacheEntryRemoved."), Zn = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: r,
  mutationThunk: i,
  internalState: y,
  selectors: {
    selectQueryEntry: d,
    selectApiState: v
  }
}) => {
  const D = ht(r), E = ht(i), I = oe(r, i), b = {};
  function s(o, _, u) {
    const c = b[o];
    c?.valueResolved && (c.valueResolved({
      data: _,
      meta: u
    }), delete c.valueResolved);
  }
  function l(o) {
    const _ = b[o];
    _ && (delete b[o], _.cacheEntryRemoved());
  }
  const h = (o, _, u) => {
    const c = S(o);
    function w(O, P, T, A) {
      const m = d(u, P), a = d(_.getState(), P);
      !m && a && g(O, A, P, _, T);
    }
    if (r.pending.match(o))
      w(o.meta.arg.endpointName, c, o.meta.requestId, o.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(o))
      for (const {
        queryDescription: O,
        value: P
      } of o.payload) {
        const {
          endpointName: T,
          originalArgs: A,
          queryCacheKey: m
        } = O;
        w(T, m, o.meta.requestId, A), s(m, P, {});
      }
    else if (i.pending.match(o))
      _.getState()[t].mutations[c] && g(o.meta.arg.endpointName, o.meta.arg.originalArgs, c, _, o.meta.requestId);
    else if (I(o))
      s(c, o.payload, o.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(o) || e.internalActions.removeMutationResult.match(o))
      l(c);
    else if (e.util.resetApiState.match(o))
      for (const O of Object.keys(b))
        l(O);
  };
  function S(o) {
    return D(o) ? o.meta.arg.queryCacheKey : E(o) ? o.meta.arg.fixedCacheKey ?? o.meta.requestId : e.internalActions.removeQueryResult.match(o) ? o.payload.queryCacheKey : e.internalActions.removeMutationResult.match(o) ? Pe(o.payload) : "";
  }
  function g(o, _, u, c, w) {
    const O = n.endpointDefinitions[o], P = O?.onCacheEntryAdded;
    if (!P) return;
    const T = {}, A = new Promise((C) => {
      T.cacheEntryRemoved = C;
    }), m = Promise.race([new Promise((C) => {
      T.valueResolved = C;
    }), A.then(() => {
      throw Mt;
    })]);
    m.catch(() => {
    }), b[u] = T;
    const a = e.endpoints[o].select(je(O) ? _ : u), f = c.dispatch((C, M, k) => k), p = {
      ...c,
      getCacheEntry: () => a(c.getState()),
      requestId: w,
      extra: f,
      updateCachedData: je(O) ? (C) => c.dispatch(e.util.updateQueryData(o, _, C)) : void 0,
      cacheDataLoaded: m,
      cacheEntryRemoved: A
    }, R = P(_, p);
    Promise.resolve(R).catch((C) => {
      if (C !== Mt)
        throw C;
    });
  }
  return h;
}, er = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: n
}) => (r, i) => {
  e.util.resetApiState.match(r) && i.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(r) && r.payload === t && i.getState()[n]?.config?.middlewareRegistered === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, tr = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: r,
  queryThunk: i,
  api: y,
  assertTagType: d,
  refetchQuery: v,
  internalState: D
}) => {
  const {
    removeQueryResult: E
  } = y.internalActions, I = qe(oe(r), st(r)), b = qe(oe(r, i), ot(r, i));
  let s = [];
  const l = (g, o) => {
    I(g) ? S(Yt(g, "invalidatesTags", n, d), o) : b(g) ? S([], o) : y.util.invalidateTags.match(g) && S(dt(g.payload, void 0, void 0, void 0, void 0, d), o);
  };
  function h(g) {
    const {
      queries: o,
      mutations: _
    } = g;
    for (const u of [o, _])
      for (const c in u)
        if (u[c]?.status === "pending") return !0;
    return !1;
  }
  function S(g, o) {
    const _ = o.getState(), u = _[e];
    if (s.push(...g), u.config.invalidationBehavior === "delayed" && h(u))
      return;
    const c = s;
    if (s = [], c.length === 0) return;
    const w = y.util.selectInvalidatedBy(_, c);
    t.batch(() => {
      const O = Array.from(w.values());
      for (const {
        queryCacheKey: P
      } of O) {
        const T = u.queries[P], A = D.currentSubscriptions[P] ?? {};
        T && (ye(A) === 0 ? o.dispatch(E({
          queryCacheKey: P
        })) : T.status !== "uninitialized" && o.dispatch(v(T)));
      }
    });
  }
  return l;
}, nr = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: r,
  internalState: i
}) => {
  const y = {}, d = (s, l) => {
    (n.internalActions.updateSubscriptionOptions.match(s) || n.internalActions.unsubscribeQueryResult.match(s)) && D(s.payload, l), (t.pending.match(s) || t.rejected.match(s) && s.meta.condition) && D(s.meta.arg, l), (t.fulfilled.match(s) || t.rejected.match(s) && !s.meta.condition) && v(s.meta.arg, l), n.util.resetApiState.match(s) && I();
  };
  function v({
    queryCacheKey: s
  }, l) {
    const h = l.getState()[e], S = h.queries[s], g = i.currentSubscriptions[s];
    if (!S || S.status === "uninitialized") return;
    const {
      lowestPollingInterval: o,
      skipPollingIfUnfocused: _
    } = b(g);
    if (!Number.isFinite(o)) return;
    const u = y[s];
    u?.timeout && (clearTimeout(u.timeout), u.timeout = void 0);
    const c = Date.now() + o;
    y[s] = {
      nextPollTimestamp: c,
      pollingInterval: o,
      timeout: setTimeout(() => {
        (h.config.focused || !_) && l.dispatch(r(S)), v({
          queryCacheKey: s
        }, l);
      }, o)
    };
  }
  function D({
    queryCacheKey: s
  }, l) {
    const S = l.getState()[e].queries[s], g = i.currentSubscriptions[s];
    if (!S || S.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: o
    } = b(g);
    if (!Number.isFinite(o)) {
      E(s);
      return;
    }
    const _ = y[s], u = Date.now() + o;
    (!_ || u < _.nextPollTimestamp) && v({
      queryCacheKey: s
    }, l);
  }
  function E(s) {
    const l = y[s];
    l?.timeout && clearTimeout(l.timeout), delete y[s];
  }
  function I() {
    for (const s of Object.keys(y))
      E(s);
  }
  function b(s = {}) {
    let l = !1, h = Number.POSITIVE_INFINITY;
    for (let S in s)
      s[S].pollingInterval && (h = Math.min(s[S].pollingInterval, h), l = s[S].skipPollingIfUnfocused || l);
    return {
      lowestPollingInterval: h,
      skipPollingIfUnfocused: l
    };
  }
  return d;
}, rr = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: r
}) => {
  const i = xt(n, r), y = ot(n, r), d = oe(n, r), v = {};
  return (E, I) => {
    if (i(E)) {
      const {
        requestId: b,
        arg: {
          endpointName: s,
          originalArgs: l
        }
      } = E.meta, h = t.endpointDefinitions[s], S = h?.onQueryStarted;
      if (S) {
        const g = {}, o = new Promise((w, O) => {
          g.resolve = w, g.reject = O;
        });
        o.catch(() => {
        }), v[b] = g;
        const _ = e.endpoints[s].select(je(h) ? l : b), u = I.dispatch((w, O, P) => P), c = {
          ...I,
          getCacheEntry: () => _(I.getState()),
          requestId: b,
          extra: u,
          updateCachedData: je(h) ? (w) => I.dispatch(e.util.updateQueryData(s, l, w)) : void 0,
          queryFulfilled: o
        };
        S(l, c);
      }
    } else if (d(E)) {
      const {
        requestId: b,
        baseQueryMeta: s
      } = E.meta;
      v[b]?.resolve({
        data: E.payload,
        meta: s
      }), delete v[b];
    } else if (y(E)) {
      const {
        requestId: b,
        rejectedWithValue: s,
        baseQueryMeta: l
      } = E.meta;
      v[b]?.reject({
        error: E.payload ?? E.error,
        isUnhandledError: !s,
        meta: l
      }), delete v[b];
    }
  };
}, ir = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: r,
  internalState: i
}) => {
  const {
    removeQueryResult: y
  } = n.internalActions, d = (D, E) => {
    ze.match(D) && v(E, "refetchOnFocus"), $e.match(D) && v(E, "refetchOnReconnect");
  };
  function v(D, E) {
    const I = D.getState()[e], b = I.queries, s = i.currentSubscriptions;
    t.batch(() => {
      for (const l of Object.keys(s)) {
        const h = b[l], S = s[l];
        if (!S || !h) continue;
        (Object.values(S).some((o) => o[E] === !0) || Object.values(S).every((o) => o[E] === void 0) && I.config[E]) && (ye(S) === 0 ? D.dispatch(y({
          queryCacheKey: l
        })) : h.status !== "uninitialized" && D.dispatch(r(h)));
      }
    });
  }
  return d;
};
function sr(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: r,
    context: i
  } = e, {
    apiUid: y
  } = i, d = {
    invalidateTags: he(`${t}/invalidateTags`)
  }, v = (b) => b.type.startsWith(`${t}/`), D = [er, Xn, tr, nr, Zn, rr];
  return {
    middleware: (b) => {
      let s = !1;
      const h = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: I,
        isThisApiSliceAction: v
      }, S = D.map((_) => _(h)), g = Jn(h), o = ir(h);
      return (_) => (u) => {
        if (!tn(u))
          return _(u);
        s || (s = !0, b.dispatch(r.internalActions.middlewareRegistered(y)));
        const c = {
          ...b,
          next: _
        }, w = b.getState(), [O, P] = g(u, c, w);
        let T;
        if (O ? T = _(u) : T = P, b.getState()[t] && (o(u, c, w), v(u) || i.hasRehydrationInfo(u)))
          for (const A of S)
            A(u, c, w);
        return T;
      };
    },
    actions: d
  };
  function I(b) {
    return e.api.endpoints[b.endpointName].initiate(b.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var kt = /* @__PURE__ */ Symbol(), or = ({
  createSelector: e = Zt
} = {}) => ({
  name: kt,
  init(t, {
    baseQuery: n,
    tagTypes: r,
    reducerPath: i,
    serializeQueryArgs: y,
    keepUnusedDataFor: d,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: D,
    refetchOnReconnect: E,
    invalidationBehavior: I,
    onSchemaFailure: b,
    catchSchemaFailure: s,
    skipSchemaValidation: l
  }, h) {
    yn();
    const S = (Q) => (typeof process < "u" && process.env.NODE_ENV === "development" && (r.includes(Q.type) || console.error(`Tag type '${Q.type}' was used, but not specified in \`tagTypes\`!`)), Q);
    Object.assign(t, {
      reducerPath: i,
      endpoints: {},
      internalActions: {
        onOnline: $e,
        onOffline: ft,
        onFocus: ze,
        onFocusLost: lt
      },
      util: {}
    });
    const g = Bn({
      serializeQueryArgs: y,
      reducerPath: i,
      createSelector: e
    }), {
      selectInvalidatedBy: o,
      selectCachedArgsForQuery: _,
      buildQuerySelector: u,
      buildInfiniteQuerySelector: c,
      buildMutationSelector: w
    } = g;
    Z(t.util, {
      selectInvalidatedBy: o,
      selectCachedArgsForQuery: _
    });
    const {
      queryThunk: O,
      infiniteQueryThunk: P,
      mutationThunk: T,
      patchQueryData: A,
      updateQueryData: m,
      upsertQueryData: a,
      prefetch: f,
      buildMatchThunkActions: p
    } = Wn({
      baseQuery: n,
      reducerPath: i,
      context: h,
      api: t,
      serializeQueryArgs: y,
      assertTagType: S,
      selectors: g,
      onSchemaFailure: b,
      catchSchemaFailure: s,
      skipSchemaValidation: l
    }), {
      reducer: R,
      actions: C
    } = Ln({
      context: h,
      queryThunk: O,
      mutationThunk: T,
      serializeQueryArgs: y,
      reducerPath: i,
      assertTagType: S,
      config: {
        refetchOnFocus: D,
        refetchOnReconnect: E,
        refetchOnMountOrArgChange: v,
        keepUnusedDataFor: d,
        reducerPath: i,
        invalidationBehavior: I
      }
    });
    Z(t.util, {
      patchQueryData: A,
      updateQueryData: m,
      upsertQueryData: a,
      prefetch: f,
      resetApiState: C.resetApiState,
      upsertQueryEntries: C.cacheEntriesUpserted
    }), Z(t.internalActions, C);
    const {
      middleware: M,
      actions: k
    } = sr({
      reducerPath: i,
      context: h,
      queryThunk: O,
      mutationThunk: T,
      infiniteQueryThunk: P,
      api: t,
      assertTagType: S,
      selectors: g
    });
    Z(t.util, k), Z(t, {
      reducer: R,
      middleware: M
    });
    const {
      buildInitiateQuery: q,
      buildInitiateInfiniteQuery: N,
      buildInitiateMutation: z,
      getRunningMutationThunk: K,
      getRunningMutationsThunk: B,
      getRunningQueriesThunk: $,
      getRunningQueryThunk: j
    } = Un({
      queryThunk: O,
      mutationThunk: T,
      infiniteQueryThunk: P,
      api: t,
      serializeQueryArgs: y,
      context: h
    });
    return Z(t.util, {
      getRunningMutationThunk: K,
      getRunningMutationsThunk: B,
      getRunningQueryThunk: j,
      getRunningQueriesThunk: $
    }), {
      name: kt,
      injectEndpoint(Q, V) {
        const U = t, x = U.endpoints[Q] ??= {};
        Ke(V) && Z(x, {
          name: Q,
          select: u(Q, V),
          initiate: q(Q, V)
        }, p(O, Q)), zn(V) && Z(x, {
          name: Q,
          select: w(),
          initiate: z(Q)
        }, p(T, Q)), Ie(V) && Z(x, {
          name: Q,
          select: c(Q, V),
          initiate: N(Q, V)
        }, p(O, Q));
      }
    };
  }
});
or();
export {
  Tn as Q,
  In as a,
  Hn as b,
  or as c,
  He as d,
  Qt as e,
  cr as f,
  ur as s
};
//# sourceMappingURL=rtk-query.modern-DGiM5X48.js.map
