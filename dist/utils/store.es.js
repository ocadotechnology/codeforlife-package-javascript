import { createAction as he, nanoid as kt, formatProdErrorMessage as Ce, createSelector as Gt, createNextState as it, createAsyncThunk as yt, createSlice as pe, prepareAutoBatched as me, isAnyOf as Ne, isFulfilled as oe, isRejectedWithValue as st, combineReducers as Xt, isPlainObject as He, SHOULD_AUTOBATCH as Mt, isAllOf as Ke, isRejected as ot, isPending as Ft, isAction as Zt, isAsyncThunkAction as ht, configureStore as en } from "@reduxjs/toolkit";
var ct = Symbol.for("immer-nothing"), ve = Symbol.for("immer-draftable"), L = Symbol.for("immer-state"), zt = process.env.NODE_ENV !== "production" ? [
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
function V(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = zt[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ce = Object.getPrototypeOf;
function ee(e) {
  return !!e && !!e[L];
}
function te(e) {
  return e ? jt(e) || Array.isArray(e) || !!e[ve] || !!e.constructor?.[ve] || Re(e) || Ae(e) : !1;
}
var tn = Object.prototype.constructor.toString();
function jt(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ce(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === tn;
}
function nn(e) {
  return ee(e) || V(15, e), e[L].base_;
}
function be(e, t) {
  ae(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function ae(e) {
  const t = e[L];
  return t ? t.type_ : Array.isArray(e) ? 1 : Re(e) ? 2 : Ae(e) ? 3 : 0;
}
function Se(e, t) {
  return ae(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Ve(e, t) {
  return ae(e) === 2 ? e.get(t) : e[t];
}
function xt(e, t, n) {
  const r = ae(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function rn(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Re(e) {
  return e instanceof Map;
}
function Ae(e) {
  return e instanceof Set;
}
function se(e) {
  return e.copy_ || e.base_;
}
function Je(e, t) {
  if (Re(e))
    return new Map(e);
  if (Ae(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = jt(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[L];
    let i = Reflect.ownKeys(r);
    for (let p = 0; p < i.length; p++) {
      const f = i[p], v = r[f];
      v.writable === !1 && (v.writable = !0, v.configurable = !0), (v.get || v.set) && (r[f] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: v.enumerable,
        value: e[f]
      });
    }
    return Object.create(ce(e), r);
  } else {
    const r = ce(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function at(e, t = !1) {
  return ze(e) || ee(e) || !te(e) || (ae(e) > 1 && (e.set = e.add = e.clear = e.delete = sn), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => at(r, !0))), e;
}
function sn() {
  V(2);
}
function ze(e) {
  return Object.isFrozen(e);
}
var Ye = {};
function ue(e) {
  const t = Ye[e];
  return t || V(0, e), t;
}
function on(e, t) {
  Ye[e] || (Ye[e] = t);
}
var _e;
function $t() {
  return _e;
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
  Xe(e), e.drafts_.forEach(an), e.drafts_ = null;
}
function Xe(e) {
  e === _e && (_e = e.parent_);
}
function gt(e) {
  return _e = cn(_e, e);
}
function an(e) {
  const t = e[L];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function vt(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[L].modified_ && (Ge(t), V(4)), te(e) && (e = Qe(t, e), t.parent_ || qe(t, e)), t.patches_ && ue("Patches").generateReplacementPatches_(
    n[L].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Qe(t, n, []), Ge(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ct ? e : void 0;
}
function Qe(e, t, n) {
  if (ze(t))
    return t;
  const r = t[L];
  if (!r)
    return be(
      t,
      (i, p) => bt(e, r, t, i, p, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return qe(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let p = i, f = !1;
    r.type_ === 3 && (p = new Set(i), i.clear(), f = !0), be(
      p,
      (v, D) => bt(e, r, i, v, D, n, f)
    ), qe(e, i, !1), n && e.patches_ && ue("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function bt(e, t, n, r, i, p, f) {
  if (process.env.NODE_ENV !== "production" && i === n && V(5), ee(i)) {
    const v = p && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Se(t.assigned_, r) ? p.concat(r) : void 0, D = Qe(e, i, v);
    if (xt(n, r, D), ee(D))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else f && n.add(i);
  if (te(i) && !ze(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Qe(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && qe(e, i);
  }
}
function qe(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && at(t, n);
}
function un(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : $t(),
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
  let i = r, p = ut;
  n && (i = [r], p = we);
  const { revoke: f, proxy: v } = Proxy.revocable(i, p);
  return r.draft_ = v, r.revoke_ = f, v;
}
var ut = {
  get(e, t) {
    if (t === L)
      return e;
    const n = se(e);
    if (!Se(n, t))
      return ln(e, n, t);
    const r = n[t];
    return e.finalized_ || !te(r) ? r : r === Ue(e.base_, t) ? (We(e), e.copy_[t] = et(r, e)) : r;
  },
  has(e, t) {
    return t in se(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(se(e));
  },
  set(e, t, n) {
    const r = Kt(se(e), t);
    if (r?.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Ue(se(e), t), p = i?.[L];
      if (p && p.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (rn(n, i) && (n !== void 0 || Se(e.base_, t)))
        return !0;
      We(e), Ze(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ue(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, We(e), Ze(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
    V(11);
  },
  getPrototypeOf(e) {
    return ce(e.base_);
  },
  setPrototypeOf() {
    V(12);
  }
}, we = {};
be(ut, (e, t) => {
  we[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
we.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && V(13), we.set.call(this, e, t, void 0);
};
we.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && V(14), ut.set.call(this, e[0], t, n, e[0]);
};
function Ue(e, t) {
  const n = e[L];
  return (n ? se(n) : e)[t];
}
function ln(e, t, n) {
  const r = Kt(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(e.draft_)
  ) : void 0;
}
function Kt(e, t) {
  if (!(t in e))
    return;
  let n = ce(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = ce(n);
  }
}
function Ze(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Ze(e.parent_));
}
function We(e) {
  e.copy_ || (e.copy_ = Je(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var fn = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const p = n;
        n = t;
        const f = this;
        return function(D = p, ...w) {
          return f.produce(D, (I) => n.call(this, I, ...w));
        };
      }
      typeof n != "function" && V(6), r !== void 0 && typeof r != "function" && V(7);
      let i;
      if (te(t)) {
        const p = gt(this), f = et(t, void 0);
        let v = !0;
        try {
          i = n(f), v = !1;
        } finally {
          v ? Ge(p) : Xe(p);
        }
        return mt(p, r), vt(i, p);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === ct && (i = void 0), this.autoFreeze_ && at(i, !0), r) {
          const p = [], f = [];
          ue("Patches").generateReplacementPatches_(t, i, p, f), r(p, f);
        }
        return i;
      } else
        V(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (f, ...v) => this.produceWithPatches(f, (D) => t(D, ...v));
      let r, i;
      return [this.produce(t, n, (f, v) => {
        r = f, i = v;
      }), r, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    te(e) || V(8), ee(e) && (e = dn(e));
    const t = gt(this), n = et(e, void 0);
    return n[L].isManual_ = !0, Xe(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[L];
    (!n || !n.isManual_) && V(9);
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
  const n = Re(e) ? ue("MapSet").proxyMap_(e, t) : Ae(e) ? ue("MapSet").proxySet_(e, t) : un(e, t);
  return (t ? t.scope_ : $t()).drafts_.push(n), n;
}
function dn(e) {
  return ee(e) || V(10, e), Vt(e);
}
function Vt(e) {
  if (!te(e) || ze(e))
    return e;
  const t = e[L];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Je(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Je(e, !0);
  return be(n, (r, i) => {
    xt(n, r, Vt(i));
  }), t && (t.finalized_ = !1), n;
}
function pn() {
  process.env.NODE_ENV !== "production" && zt.push(
    'Sets cannot have "replace" patches.',
    function(o) {
      return "Unsupported patch operation: " + o;
    },
    function(o) {
      return "Cannot apply patch, path doesn't resolve: " + o;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", n = "add", r = "remove";
  function i(o, l, m, S) {
    switch (o.type_) {
      case 0:
      case 2:
        return f(
          o,
          l,
          m,
          S
        );
      case 1:
        return p(o, l, m, S);
      case 3:
        return v(
          o,
          l,
          m,
          S
        );
    }
  }
  function p(o, l, m, S) {
    let { base_: g, assigned_: s } = o, _ = o.copy_;
    _.length < g.length && ([g, _] = [_, g], [m, S] = [S, m]);
    for (let a = 0; a < g.length; a++)
      if (s[a] && _[a] !== g[a]) {
        const u = l.concat([a]);
        m.push({
          op: t,
          path: u,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: b(_[a])
        }), S.push({
          op: t,
          path: u,
          value: b(g[a])
        });
      }
    for (let a = g.length; a < _.length; a++) {
      const u = l.concat([a]);
      m.push({
        op: n,
        path: u,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: b(_[a])
      });
    }
    for (let a = _.length - 1; g.length <= a; --a) {
      const u = l.concat([a]);
      S.push({
        op: r,
        path: u
      });
    }
  }
  function f(o, l, m, S) {
    const { base_: g, copy_: s } = o;
    be(o.assigned_, (_, a) => {
      const u = Ve(g, _), P = Ve(s, _), O = a ? Se(g, _) ? t : n : r;
      if (u === P && O === t)
        return;
      const E = l.concat(_);
      m.push(O === r ? { op: O, path: E } : { op: O, path: E, value: P }), S.push(
        O === n ? { op: r, path: E } : O === r ? { op: n, path: E, value: b(u) } : { op: t, path: E, value: b(u) }
      );
    });
  }
  function v(o, l, m, S) {
    let { base_: g, copy_: s } = o, _ = 0;
    g.forEach((a) => {
      if (!s.has(a)) {
        const u = l.concat([_]);
        m.push({
          op: r,
          path: u,
          value: a
        }), S.unshift({
          op: n,
          path: u,
          value: a
        });
      }
      _++;
    }), _ = 0, s.forEach((a) => {
      if (!g.has(a)) {
        const u = l.concat([_]);
        m.push({
          op: n,
          path: u,
          value: a
        }), S.unshift({
          op: r,
          path: u,
          value: a
        });
      }
      _++;
    });
  }
  function D(o, l, m, S) {
    m.push({
      op: t,
      path: [],
      value: l === ct ? void 0 : l
    }), S.push({
      op: t,
      path: [],
      value: o
    });
  }
  function w(o, l) {
    return l.forEach((m) => {
      const { path: S, op: g } = m;
      let s = o;
      for (let P = 0; P < S.length - 1; P++) {
        const O = ae(s);
        let E = S[P];
        typeof E != "string" && typeof E != "number" && (E = "" + E), (O === 0 || O === 1) && (E === "__proto__" || E === "constructor") && V(19), typeof s == "function" && E === "prototype" && V(19), s = Ve(s, E), typeof s != "object" && V(18, S.join("/"));
      }
      const _ = ae(s), a = I(m.value), u = S[S.length - 1];
      switch (g) {
        case t:
          switch (_) {
            case 2:
              return s.set(u, a);
            case 3:
              V(16);
            default:
              return s[u] = a;
          }
        case n:
          switch (_) {
            case 1:
              return u === "-" ? s.push(a) : s.splice(u, 0, a);
            case 2:
              return s.set(u, a);
            case 3:
              return s.add(a);
            default:
              return s[u] = a;
          }
        case r:
          switch (_) {
            case 1:
              return s.splice(u, 1);
            case 2:
              return s.delete(u);
            case 3:
              return s.delete(m.value);
            default:
              return delete s[u];
          }
        default:
          V(17, g);
      }
    }), o;
  }
  function I(o) {
    if (!te(o))
      return o;
    if (Array.isArray(o))
      return o.map(I);
    if (Re(o))
      return new Map(
        Array.from(o.entries()).map(([m, S]) => [m, I(S)])
      );
    if (Ae(o))
      return new Set(Array.from(o).map(I));
    const l = Object.create(ce(o));
    for (const m in o)
      l[m] = I(o[m]);
    return Se(o, ve) && (l[ve] = o[ve]), l;
  }
  function b(o) {
    return ee(o) ? I(o) : o;
  }
  on("Patches", {
    applyPatches_: w,
    generatePatches_: i,
    generateReplacementPatches_: D
  });
}
var H = new fn();
H.produce;
var Ut = H.produceWithPatches.bind(
  H
);
H.setAutoFreeze.bind(H);
H.setUseStrictShallowCopy.bind(H);
var St = H.applyPatches.bind(H);
H.createDraft.bind(H);
H.finishDraft.bind(H);
var yn = class extends Error {
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
}, hn = (e, t, n) => {
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
      } catch (p) {
        ({ stack: i } = p);
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
}, mn = (e, t, n) => {
  const { memoize: r, memoizeOptions: i } = t, { inputSelectorResults: p, inputSelectorResultsCopy: f } = e, v = r(() => ({}), ...i);
  if (!(v.apply(null, p) === v.apply(null, f))) {
    let w;
    try {
      throw new Error();
    } catch (I) {
      ({ stack: w } = I);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: p,
        secondInputs: f,
        stack: w
      }
    );
  }
}, gn = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function vn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function bn(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Sn(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var _t = (e) => Array.isArray(e) ? e : [e];
function _n(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Sn(
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
var wn = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...gn,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: hn
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: mn
    }
  };
}, Pn = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, En = typeof WeakRef < "u" ? WeakRef : Pn, Rn = 0, Pt = 1;
function Ie() {
  return {
    s: Rn,
    v: void 0,
    o: null,
    p: null
  };
}
function ke(e, t = {}) {
  let n = Ie();
  const { resultEqualityCheck: r } = t;
  let i, p = 0;
  function f() {
    let v = n;
    const { length: D } = arguments;
    for (let b = 0, o = D; b < o; b++) {
      const l = arguments[b];
      if (typeof l == "function" || typeof l == "object" && l !== null) {
        let m = v.o;
        m === null && (v.o = m = /* @__PURE__ */ new WeakMap());
        const S = m.get(l);
        S === void 0 ? (v = Ie(), m.set(l, v)) : v = S;
      } else {
        let m = v.p;
        m === null && (v.p = m = /* @__PURE__ */ new Map());
        const S = m.get(l);
        S === void 0 ? (v = Ie(), m.set(l, v)) : v = S;
      }
    }
    const w = v;
    let I;
    if (v.s === Pt)
      I = v.v;
    else if (I = e.apply(null, arguments), p++, r) {
      const b = i?.deref?.() ?? i;
      b != null && r(b, I) && (I = b, p !== 0 && p--), i = typeof I == "object" && I !== null || typeof I == "function" ? new En(I) : I;
    }
    return w.s = Pt, w.v = I, I;
  }
  return f.clearCache = () => {
    n = Ie(), f.resetResultsCount();
  }, f.resultsCount = () => p, f.resetResultsCount = () => {
    p = 0;
  }, f;
}
function An(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...i) => {
    let p = 0, f = 0, v, D = {}, w = i.pop();
    typeof w == "object" && (D = w, w = i.pop()), vn(
      w,
      `createSelector expects an output function after the inputs, but received: [${typeof w}]`
    );
    const I = {
      ...n,
      ...D
    }, {
      memoize: b,
      memoizeOptions: o = [],
      argsMemoize: l = ke,
      argsMemoizeOptions: m = [],
      devModeChecks: S = {}
    } = I, g = _t(o), s = _t(m), _ = _n(i), a = b(function() {
      return p++, w.apply(
        null,
        arguments
      );
    }, ...g);
    let u = !0;
    const P = l(function() {
      f++;
      const E = wt(
        _,
        arguments
      );
      if (v = a.apply(null, E), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: T, inputStabilityCheck: R } = wn(u, S);
        if (T.shouldRun && T.run(
          w,
          E,
          v
        ), R.shouldRun) {
          const h = wt(
            _,
            arguments
          );
          R.run(
            { inputSelectorResults: E, inputSelectorResultsCopy: h },
            { memoize: b, memoizeOptions: g },
            arguments
          );
        }
        u && (u = !1);
      }
      return v;
    }, ...s);
    return Object.assign(P, {
      resultFunc: w,
      memoizedResultFunc: a,
      dependencies: _,
      dependencyRecomputations: () => f,
      resetDependencyRecomputations: () => {
        f = 0;
      },
      lastResult: () => v,
      recomputations: () => p,
      resetRecomputations: () => {
        p = 0;
      },
      memoize: b,
      argsMemoize: l
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var On = /* @__PURE__ */ An(ke), In = Object.assign(
  (e, t = On) => {
    bn(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (p) => e[p]
    );
    return t(
      r,
      (...p) => p.reduce((f, v, D) => (f[n[D]] = v, f), {})
    );
  },
  { withTypes: () => In }
);
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
var Rt = He;
function Wt(e, t) {
  if (e === t || !(Rt(e) && Rt(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), r = Object.keys(e);
  let i = n.length === r.length;
  const p = Array.isArray(t) ? [] : {};
  for (const f of n)
    p[f] = Wt(e[f], t[f]), i && (i = e[f] === p[f]);
  return i ? e : p;
}
function ye(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var At = (e) => [].concat(...e);
function Dn() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Me(e) {
  return e != null;
}
function Tn() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
function Cn(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n).get(t);
}
var Ot = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, je = /* @__PURE__ */ he("__rtkq/focused"), lt = /* @__PURE__ */ he("__rtkq/unfocused"), xe = /* @__PURE__ */ he("__rtkq/online"), ft = /* @__PURE__ */ he("__rtkq/offline"), Be = !1;
function Nn(e, t) {
  function n() {
    const r = () => e(je()), i = () => e(lt()), p = () => e(xe()), f = () => e(ft()), v = () => {
      window.document.visibilityState === "visible" ? r() : i();
    };
    return Be || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", v, !1), window.addEventListener("focus", r, !1), window.addEventListener("online", p, !1), window.addEventListener("offline", f, !1), Be = !0), () => {
      window.removeEventListener("focus", r), window.removeEventListener("visibilitychange", v), window.removeEventListener("online", p), window.removeEventListener("offline", f), Be = !1;
    };
  }
  return n();
}
function $e(e) {
  return e.type === "query";
}
function Qn(e) {
  return e.type === "mutation";
}
function Oe(e) {
  return e.type === "infinitequery";
}
function Fe(e) {
  return $e(e) || Oe(e);
}
function dt(e, t, n, r, i, p) {
  return qn(e) ? e(t, n, r, i).filter(Me).map(tt).map(p) : Array.isArray(e) ? e.map(tt).map(p) : [];
}
function qn(e) {
  return typeof e == "function";
}
function tt(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function kn(e, t) {
  return e.catch(t);
}
var Pe = Symbol("forceQueryFn"), nt = (e) => typeof e[Pe] == "function";
function Mn({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: n,
  mutationThunk: r,
  api: i,
  context: p
}) {
  const f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: D,
    removeMutationResult: w,
    updateSubscriptionOptions: I
  } = i.internalActions;
  return {
    buildInitiateQuery: s,
    buildInitiateInfiniteQuery: _,
    buildInitiateMutation: a,
    getRunningQueryThunk: b,
    getRunningMutationThunk: o,
    getRunningQueriesThunk: l,
    getRunningMutationsThunk: m
  };
  function b(u, P) {
    return (O) => {
      const E = p.endpointDefinitions[u], T = e({
        queryArgs: P,
        endpointDefinition: E,
        endpointName: u
      });
      return f.get(O)?.[T];
    };
  }
  function o(u, P) {
    return (O) => v.get(O)?.[P];
  }
  function l() {
    return (u) => Object.values(f.get(u) || {}).filter(Me);
  }
  function m() {
    return (u) => Object.values(v.get(u) || {}).filter(Me);
  }
  function S(u) {
    if (process.env.NODE_ENV !== "production") {
      if (S.triggered) return;
      const P = u(i.internalActions.internal_getRTKQSubscriptions());
      if (S.triggered = !0, typeof P != "object" || typeof P?.type == "string")
        throw new Error(process.env.NODE_ENV === "production" ? Ce(34) : `Warning: Middleware for RTK-Query API at reducerPath "${i.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function g(u, P) {
    const O = (E, {
      subscribe: T = !0,
      forceRefetch: R,
      subscriptionOptions: h,
      [Pe]: c,
      ...y
    } = {}) => (d, A) => {
      const C = e({
        queryArgs: E,
        endpointDefinition: P,
        endpointName: u
      });
      let q;
      const F = {
        ...y,
        type: "query",
        subscribe: T,
        forceRefetch: R,
        subscriptionOptions: h,
        endpointName: u,
        originalArgs: E,
        queryCacheKey: C,
        [Pe]: c
      };
      if ($e(P))
        q = t(F);
      else {
        const {
          direction: $,
          initialPageParam: z
        } = y;
        q = n({
          ...F,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: $,
          initialPageParam: z
        });
      }
      const Q = i.endpoints[u].select(E), N = d(q), j = Q(A());
      S(d);
      const {
        requestId: U,
        abort: X
      } = N, x = j.requestId !== U, W = f.get(d)?.[C], k = () => Q(A()), K = Object.assign(c ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        N.then(k)
      ) : x && !W ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(j)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([W, N]).then(k)
      ), {
        arg: E,
        requestId: U,
        subscriptionOptions: h,
        queryCacheKey: C,
        abort: X,
        async unwrap() {
          const $ = await K;
          if ($.isError)
            throw $.error;
          return $.data;
        },
        refetch: () => d(O(E, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          T && d(D({
            queryCacheKey: C,
            requestId: U
          }));
        },
        updateSubscriptionOptions($) {
          K.subscriptionOptions = $, d(I({
            endpointName: u,
            requestId: U,
            queryCacheKey: C,
            options: $
          }));
        }
      });
      if (!W && !x && !c) {
        const $ = Cn(f, d, {});
        $[C] = K, K.then(() => {
          delete $[C], ye($) || f.delete(d);
        });
      }
      return K;
    };
    return O;
  }
  function s(u, P) {
    return g(u, P);
  }
  function _(u, P) {
    return g(u, P);
  }
  function a(u) {
    return (P, {
      track: O = !0,
      fixedCacheKey: E
    } = {}) => (T, R) => {
      const h = r({
        type: "mutation",
        endpointName: u,
        originalArgs: P,
        track: O,
        fixedCacheKey: E
      }), c = T(h);
      S(T);
      const {
        requestId: y,
        abort: d,
        unwrap: A
      } = c, C = kn(c.unwrap().then((N) => ({
        data: N
      })), (N) => ({
        error: N
      })), q = () => {
        T(w({
          requestId: y,
          fixedCacheKey: E
        }));
      }, F = Object.assign(C, {
        arg: c.arg,
        requestId: y,
        abort: d,
        unwrap: A,
        reset: q
      }), Q = v.get(T) || {};
      return v.set(T, Q), Q[y] = F, F.then(() => {
        delete Q[y], ye(Q) || v.delete(T);
      }), E && (Q[E] = F, F.then(() => {
        Q[E] === F && (delete Q[E], ye(Q) || v.delete(T));
      })), F;
    };
  }
}
var Bt = class extends yn {
  constructor(e, t, n, r) {
    super(e), this.value = t, this.schemaName = n, this._bqMeta = r;
  }
};
async function ie(e, t, n, r) {
  const i = await e["~standard"].validate(t);
  if (i.issues)
    throw new Bt(i.issues, t, n, r);
  return i.value;
}
function Fn(e) {
  return e;
}
var ge = (e = {}) => ({
  ...e,
  [Mt]: !0
});
function zn({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: r,
  api: i,
  assertTagType: p,
  selectors: f,
  onSchemaFailure: v,
  catchSchemaFailure: D,
  skipSchemaValidation: w
}) {
  const I = (c, y, d, A) => (C, q) => {
    const F = n[c], Q = r({
      queryArgs: y,
      endpointDefinition: F,
      endpointName: c
    });
    if (C(i.internalActions.queryResultPatched({
      queryCacheKey: Q,
      patches: d
    })), !A)
      return;
    const N = i.endpoints[c].select(y)(
      // Work around TS 4.1 mismatch
      q()
    ), j = dt(F.providesTags, N.data, void 0, y, {}, p);
    C(i.internalActions.updateProvidedBy([{
      queryCacheKey: Q,
      providedTags: j
    }]));
  };
  function b(c, y, d = 0) {
    const A = [y, ...c];
    return d && A.length > d ? A.slice(0, -1) : A;
  }
  function o(c, y, d = 0) {
    const A = [...c, y];
    return d && A.length > d ? A.slice(1) : A;
  }
  const l = (c, y, d, A = !0) => (C, q) => {
    const Q = i.endpoints[c].select(y)(
      // Work around TS 4.1 mismatch
      q()
    ), N = {
      patches: [],
      inversePatches: [],
      undo: () => C(i.util.patchQueryData(c, y, N.inversePatches, A))
    };
    if (Q.status === "uninitialized")
      return N;
    let j;
    if ("data" in Q)
      if (te(Q.data)) {
        const [U, X, x] = Ut(Q.data, d);
        N.patches.push(...X), N.inversePatches.push(...x), j = U;
      } else
        j = d(Q.data), N.patches.push({
          op: "replace",
          path: [],
          value: j
        }), N.inversePatches.push({
          op: "replace",
          path: [],
          value: Q.data
        });
    return N.patches.length === 0 || C(i.util.patchQueryData(c, y, N.patches, A)), N;
  }, m = (c, y, d) => (A) => A(i.endpoints[c].initiate(y, {
    subscribe: !1,
    forceRefetch: !0,
    [Pe]: () => ({
      data: d
    })
  })), S = (c, y) => c.query && c[y] ? c[y] : Fn, g = async (c, {
    signal: y,
    abort: d,
    rejectWithValue: A,
    fulfillWithValue: C,
    dispatch: q,
    getState: F,
    extra: Q
  }) => {
    const N = n[c.endpointName], {
      metaSchema: j,
      skipSchemaValidation: U = w
    } = N;
    try {
      let X = S(N, "transformResponse");
      const x = {
        signal: y,
        abort: d,
        dispatch: q,
        getState: F,
        extra: Q,
        endpoint: c.endpointName,
        type: c.type,
        forced: c.type === "query" ? s(c, F()) : void 0,
        queryCacheKey: c.type === "query" ? c.queryCacheKey : void 0
      }, W = c.type === "query" ? c[Pe] : void 0;
      let k;
      const K = async (z, M, B, le) => {
        if (M == null && z.pages.length)
          return Promise.resolve({
            data: z
          });
        const ne = {
          queryArg: c.originalArgs,
          pageParam: M
        }, fe = await $(ne), G = le ? b : o;
        return {
          data: {
            pages: G(z.pages, fe.data, B),
            pageParams: G(z.pageParams, M, B)
          },
          meta: fe.meta
        };
      };
      async function $(z) {
        let M;
        const {
          extraOptions: B,
          argSchema: le,
          rawResponseSchema: ne,
          responseSchema: fe
        } = N;
        if (le && !U && (z = await ie(
          le,
          z,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), W ? M = W() : N.query ? M = await t(N.query(z), x, B) : M = await N.queryFn(z, x, B, (J) => t(J, x, B)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const J = N.query ? "`baseQuery`" : "`queryFn`";
          let Y;
          if (!M)
            Y = `${J} did not return anything.`;
          else if (typeof M != "object")
            Y = `${J} did not return an object.`;
          else if (M.error && M.data)
            Y = `${J} returned an object containing both \`error\` and \`result\`.`;
          else if (M.error === void 0 && M.data === void 0)
            Y = `${J} returned an object containing neither a valid \`error\` and \`result\`. At least one of them should not be \`undefined\``;
          else
            for (const de of Object.keys(M))
              if (de !== "error" && de !== "data" && de !== "meta") {
                Y = `The object returned by ${J} has the unknown property ${de}.`;
                break;
              }
          Y && console.error(`Error encountered handling the endpoint ${c.endpointName}.
                  ${Y}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, M);
        }
        if (M.error) throw new Ot(M.error, M.meta);
        let {
          data: G
        } = M;
        ne && !U && (G = await ie(ne, M.data, "rawResponseSchema", M.meta));
        let re = await X(G, M.meta, z);
        return fe && !U && (re = await ie(fe, re, "responseSchema", M.meta)), {
          ...M,
          data: re
        };
      }
      if (c.type === "query" && "infiniteQueryOptions" in N) {
        const {
          infiniteQueryOptions: z
        } = N, {
          maxPages: M = 1 / 0
        } = z;
        let B;
        const le = {
          pages: [],
          pageParams: []
        }, ne = f.selectQueryEntry(F(), c.queryCacheKey)?.data, G = /* arg.forceRefetch */ s(c, F()) && !c.direction || !ne ? le : ne;
        if ("direction" in c && c.direction && G.pages.length) {
          const re = c.direction === "backward", Y = (re ? Lt : rt)(z, G, c.originalArgs);
          B = await K(G, Y, M, re);
        } else {
          const {
            initialPageParam: re = z.initialPageParam
          } = c, J = ne?.pageParams ?? [], Y = J[0] ?? re, de = J.length;
          B = await K(G, Y, M), W && (B = {
            data: B.data.pages[0]
          });
          for (let pt = 1; pt < de; pt++) {
            const Yt = rt(z, B.data, c.originalArgs);
            B = await K(B.data, Yt, M);
          }
        }
        k = B;
      } else
        k = await $(c.originalArgs);
      return j && !U && k.meta && (k.meta = await ie(j, k.meta, "metaSchema", k.meta)), C(k.data, ge({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: k.meta
      }));
    } catch (X) {
      let x = X;
      if (x instanceof Ot) {
        let W = S(N, "transformErrorResponse");
        const {
          rawErrorResponseSchema: k,
          errorResponseSchema: K
        } = N;
        let {
          value: $,
          meta: z
        } = x;
        try {
          k && !U && ($ = await ie(k, $, "rawErrorResponseSchema", z)), j && !U && (z = await ie(j, z, "metaSchema", z));
          let M = await W($, z, c.originalArgs);
          return K && !U && (M = await ie(K, M, "errorResponseSchema", z)), A(M, ge({
            baseQueryMeta: z
          }));
        } catch (M) {
          x = M;
        }
      }
      try {
        if (x instanceof Bt) {
          const W = {
            endpoint: c.endpointName,
            arg: c.originalArgs,
            type: c.type,
            queryCacheKey: c.type === "query" ? c.queryCacheKey : void 0
          };
          N.onSchemaFailure?.(x, W), v?.(x, W);
          const {
            catchSchemaFailure: k = D
          } = N;
          if (k)
            return A(k(x, W), ge({
              baseQueryMeta: x._bqMeta
            }));
        }
      } catch (W) {
        x = W;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${c.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, x) : console.error(x), x;
    }
  };
  function s(c, y) {
    const d = f.selectQueryEntry(y, c.queryCacheKey), A = f.selectConfig(y).refetchOnMountOrArgChange, C = d?.fulfilledTimeStamp, q = c.forceRefetch ?? (c.subscribe && A);
    return q ? q === !0 || (Number(/* @__PURE__ */ new Date()) - Number(C)) / 1e3 >= q : !1;
  }
  const _ = () => yt(`${e}/executeQuery`, g, {
    getPendingMeta({
      arg: y
    }) {
      const d = n[y.endpointName];
      return ge({
        startedTimeStamp: Date.now(),
        ...Oe(d) ? {
          direction: y.direction
        } : {}
      });
    },
    condition(y, {
      getState: d
    }) {
      const A = d(), C = f.selectQueryEntry(A, y.queryCacheKey), q = C?.fulfilledTimeStamp, F = y.originalArgs, Q = C?.originalArgs, N = n[y.endpointName], j = y.direction;
      return nt(y) ? !0 : C?.status === "pending" ? !1 : s(y, A) || $e(N) && N?.forceRefetch?.({
        currentArg: F,
        previousArg: Q,
        endpointState: C,
        state: A
      }) ? !0 : !(q && !j);
    },
    dispatchConditionRejection: !0
  }), a = _(), u = _(), P = yt(`${e}/executeMutation`, g, {
    getPendingMeta() {
      return ge({
        startedTimeStamp: Date.now()
      });
    }
  }), O = (c) => "force" in c, E = (c) => "ifOlderThan" in c, T = (c, y, d) => (A, C) => {
    const q = O(d) && d.force, F = E(d) && d.ifOlderThan, Q = (j = !0) => {
      const U = {
        forceRefetch: j,
        isPrefetch: !0
      };
      return i.endpoints[c].initiate(y, U);
    }, N = i.endpoints[c].select(y)(C());
    if (q)
      A(Q());
    else if (F) {
      const j = N?.fulfilledTimeStamp;
      if (!j) {
        A(Q());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(j))) / 1e3 >= F && A(Q());
    } else
      A(Q(!1));
  };
  function R(c) {
    return (y) => y?.meta?.arg?.endpointName === c;
  }
  function h(c, y) {
    return {
      matchPending: Ke(Ft(c), R(y)),
      matchFulfilled: Ke(oe(c), R(y)),
      matchRejected: Ke(ot(c), R(y))
    };
  }
  return {
    queryThunk: a,
    mutationThunk: P,
    infiniteQueryThunk: u,
    prefetch: T,
    updateQueryData: l,
    upsertQueryData: m,
    patchQueryData: I,
    buildMatchThunkActions: h
  };
}
function rt(e, {
  pages: t,
  pageParams: n
}, r) {
  const i = t.length - 1;
  return e.getNextPageParam(t[i], t, n[i], n, r);
}
function Lt(e, {
  pages: t,
  pageParams: n
}, r) {
  return e.getPreviousPageParam?.(t[0], t, n[0], n, r);
}
function Ht(e, t, n, r) {
  return dt(n[e.meta.arg.endpointName][t], oe(e) ? e.payload : void 0, st(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, r);
}
function De(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Ee(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function It(e, t, n) {
  const r = e[Ee(t)];
  r && n(r);
}
var Te = {};
function jn({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: i,
    apiUid: p,
    extractRehydrationInfo: f,
    hasRehydrationInfo: v
  },
  assertTagType: D,
  config: w
}) {
  const I = he(`${e}/resetApiState`);
  function b(R, h, c, y) {
    R[h.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: h.endpointName
    }, De(R, h.queryCacheKey, (d) => {
      d.status = "pending", d.requestId = c && d.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        d.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        y.requestId
      ), h.originalArgs !== void 0 && (d.originalArgs = h.originalArgs), d.startedTimeStamp = y.startedTimeStamp;
      const A = i[y.arg.endpointName];
      Oe(A) && "direction" in h && (d.direction = h.direction);
    });
  }
  function o(R, h, c, y) {
    De(R, h.arg.queryCacheKey, (d) => {
      if (d.requestId !== h.requestId && !y) return;
      const {
        merge: A
      } = i[h.arg.endpointName];
      if (d.status = "fulfilled", A)
        if (d.data !== void 0) {
          const {
            fulfilledTimeStamp: C,
            arg: q,
            baseQueryMeta: F,
            requestId: Q
          } = h;
          let N = it(d.data, (j) => A(j, c, {
            arg: q.originalArgs,
            baseQueryMeta: F,
            fulfilledTimeStamp: C,
            requestId: Q
          }));
          d.data = N;
        } else
          d.data = c;
      else
        d.data = i[h.arg.endpointName].structuralSharing ?? !0 ? Wt(ee(d.data) ? nn(d.data) : d.data, c) : c;
      delete d.error, d.fulfilledTimeStamp = h.fulfilledTimeStamp;
    });
  }
  const l = pe({
    name: `${e}/queries`,
    initialState: Te,
    reducers: {
      removeQueryResult: {
        reducer(R, {
          payload: {
            queryCacheKey: h
          }
        }) {
          delete R[h];
        },
        prepare: me()
      },
      cacheEntriesUpserted: {
        reducer(R, h) {
          for (const c of h.payload) {
            const {
              queryDescription: y,
              value: d
            } = c;
            b(R, y, !0, {
              arg: y,
              requestId: h.meta.requestId,
              startedTimeStamp: h.meta.timestamp
            }), o(
              R,
              {
                arg: y,
                requestId: h.meta.requestId,
                fulfilledTimeStamp: h.meta.timestamp,
                baseQueryMeta: {}
              },
              d,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (R) => ({
          payload: R.map((y) => {
            const {
              endpointName: d,
              arg: A,
              value: C
            } = y, q = i[d];
            return {
              queryDescription: {
                type: "query",
                endpointName: d,
                originalArgs: y.arg,
                queryCacheKey: r({
                  queryArgs: A,
                  endpointDefinition: q,
                  endpointName: d
                })
              },
              value: C
            };
          }),
          meta: {
            [Mt]: !0,
            requestId: kt(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(R, {
          payload: {
            queryCacheKey: h,
            patches: c
          }
        }) {
          De(R, h, (y) => {
            y.data = St(y.data, c.concat());
          });
        },
        prepare: me()
      }
    },
    extraReducers(R) {
      R.addCase(t.pending, (h, {
        meta: c,
        meta: {
          arg: y
        }
      }) => {
        const d = nt(y);
        b(h, y, d, c);
      }).addCase(t.fulfilled, (h, {
        meta: c,
        payload: y
      }) => {
        const d = nt(c.arg);
        o(h, c, y, d);
      }).addCase(t.rejected, (h, {
        meta: {
          condition: c,
          arg: y,
          requestId: d
        },
        error: A,
        payload: C
      }) => {
        De(h, y.queryCacheKey, (q) => {
          if (!c) {
            if (q.requestId !== d) return;
            q.status = "rejected", q.error = C ?? A;
          }
        });
      }).addMatcher(v, (h, c) => {
        const {
          queries: y
        } = f(c);
        for (const [d, A] of Object.entries(y))
          // do not rehydrate entries that were currently in flight.
          (A?.status === "fulfilled" || A?.status === "rejected") && (h[d] = A);
      });
    }
  }), m = pe({
    name: `${e}/mutations`,
    initialState: Te,
    reducers: {
      removeMutationResult: {
        reducer(R, {
          payload: h
        }) {
          const c = Ee(h);
          c in R && delete R[c];
        },
        prepare: me()
      }
    },
    extraReducers(R) {
      R.addCase(n.pending, (h, {
        meta: c,
        meta: {
          requestId: y,
          arg: d,
          startedTimeStamp: A
        }
      }) => {
        d.track && (h[Ee(c)] = {
          requestId: y,
          status: "pending",
          endpointName: d.endpointName,
          startedTimeStamp: A
        });
      }).addCase(n.fulfilled, (h, {
        payload: c,
        meta: y
      }) => {
        y.arg.track && It(h, y, (d) => {
          d.requestId === y.requestId && (d.status = "fulfilled", d.data = c, d.fulfilledTimeStamp = y.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (h, {
        payload: c,
        error: y,
        meta: d
      }) => {
        d.arg.track && It(h, d, (A) => {
          A.requestId === d.requestId && (A.status = "rejected", A.error = c ?? y);
        });
      }).addMatcher(v, (h, c) => {
        const {
          mutations: y
        } = f(c);
        for (const [d, A] of Object.entries(y))
          // do not rehydrate entries that were currently in flight.
          (A?.status === "fulfilled" || A?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          d !== A?.requestId && (h[d] = A);
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
        reducer(R, h) {
          for (const {
            queryCacheKey: c,
            providedTags: y
          } of h.payload) {
            s(R, c);
            for (const {
              type: d,
              id: A
            } of y) {
              const C = (R.tags[d] ??= {})[A || "__internal_without_id"] ??= [];
              C.includes(c) || C.push(c);
            }
            R.keys[c] = y;
          }
        },
        prepare: me()
      }
    },
    extraReducers(R) {
      R.addCase(l.actions.removeQueryResult, (h, {
        payload: {
          queryCacheKey: c
        }
      }) => {
        s(h, c);
      }).addMatcher(v, (h, c) => {
        const {
          provided: y
        } = f(c);
        for (const [d, A] of Object.entries(y))
          for (const [C, q] of Object.entries(A)) {
            const F = (h.tags[d] ??= {})[C || "__internal_without_id"] ??= [];
            for (const Q of q)
              F.includes(Q) || F.push(Q);
          }
      }).addMatcher(Ne(oe(t), st(t)), (h, c) => {
        _(h, [c]);
      }).addMatcher(l.actions.cacheEntriesUpserted.match, (h, c) => {
        const y = c.payload.map(({
          queryDescription: d,
          value: A
        }) => ({
          type: "UNKNOWN",
          payload: A,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: d
          }
        }));
        _(h, y);
      });
    }
  });
  function s(R, h) {
    const c = R.keys[h] ?? [];
    for (const y of c) {
      const d = y.type, A = y.id ?? "__internal_without_id", C = R.tags[d]?.[A];
      C && (R.tags[d][A] = C.filter((q) => q !== h));
    }
    delete R.keys[h];
  }
  function _(R, h) {
    const c = h.map((y) => {
      const d = Ht(y, "providesTags", i, D), {
        queryCacheKey: A
      } = y.meta.arg;
      return {
        queryCacheKey: A,
        providedTags: d
      };
    });
    g.caseReducers.updateProvidedBy(R, g.actions.updateProvidedBy(c));
  }
  const a = pe({
    name: `${e}/subscriptions`,
    initialState: Te,
    reducers: {
      updateSubscriptionOptions(R, h) {
      },
      unsubscribeQueryResult(R, h) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), u = pe({
    name: `${e}/internalSubscriptions`,
    initialState: Te,
    reducers: {
      subscriptionsUpdated: {
        reducer(R, h) {
          return St(R, h.payload);
        },
        prepare: me()
      }
    }
  }), P = pe({
    name: `${e}/config`,
    initialState: {
      online: Tn(),
      focused: Dn(),
      middlewareRegistered: !1,
      ...w
    },
    reducers: {
      middlewareRegistered(R, {
        payload: h
      }) {
        R.middlewareRegistered = R.middlewareRegistered === "conflict" || p !== h ? "conflict" : !0;
      }
    },
    extraReducers: (R) => {
      R.addCase(xe, (h) => {
        h.online = !0;
      }).addCase(ft, (h) => {
        h.online = !1;
      }).addCase(je, (h) => {
        h.focused = !0;
      }).addCase(lt, (h) => {
        h.focused = !1;
      }).addMatcher(v, (h) => ({
        ...h
      }));
    }
  }), O = Xt({
    queries: l.reducer,
    mutations: m.reducer,
    provided: g.reducer,
    subscriptions: u.reducer,
    config: P.reducer
  }), E = (R, h) => O(I.match(h) ? void 0 : R, h), T = {
    ...P.actions,
    ...l.actions,
    ...a.actions,
    ...u.actions,
    ...m.actions,
    ...g.actions,
    resetApiState: I
  };
  return {
    reducer: E,
    actions: T
  };
}
var Le = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Jt = {
  status: "uninitialized"
  /* uninitialized */
}, Dt = /* @__PURE__ */ it(Jt, () => {
}), Tt = /* @__PURE__ */ it(Jt, () => {
});
function xn({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const r = (a) => Dt, i = (a) => Tt;
  return {
    buildQuerySelector: o,
    buildInfiniteQuerySelector: l,
    buildMutationSelector: m,
    selectInvalidatedBy: S,
    selectCachedArgsForQuery: g,
    selectApiState: f,
    selectQueries: v,
    selectMutations: w,
    selectQueryEntry: D,
    selectConfig: I
  };
  function p(a) {
    return {
      ...a,
      ...Et(a.status)
    };
  }
  function f(a) {
    const u = a[t];
    if (process.env.NODE_ENV !== "production" && !u) {
      if (f.triggered) return u;
      f.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return u;
  }
  function v(a) {
    return f(a)?.queries;
  }
  function D(a, u) {
    return v(a)?.[u];
  }
  function w(a) {
    return f(a)?.mutations;
  }
  function I(a) {
    return f(a)?.config;
  }
  function b(a, u, P) {
    return (O) => {
      if (O === Le)
        return n(r, P);
      const E = e({
        queryArgs: O,
        endpointDefinition: u,
        endpointName: a
      });
      return n((R) => D(R, E) ?? Dt, P);
    };
  }
  function o(a, u) {
    return b(a, u, p);
  }
  function l(a, u) {
    const {
      infiniteQueryOptions: P
    } = u;
    function O(E) {
      const T = {
        ...E,
        ...Et(E.status)
      }, {
        isLoading: R,
        isError: h,
        direction: c
      } = T, y = c === "forward", d = c === "backward";
      return {
        ...T,
        hasNextPage: s(P, T.data, T.originalArgs),
        hasPreviousPage: _(P, T.data, T.originalArgs),
        isFetchingNextPage: R && y,
        isFetchingPreviousPage: R && d,
        isFetchNextPageError: h && y,
        isFetchPreviousPageError: h && d
      };
    }
    return b(a, u, O);
  }
  function m() {
    return (a) => {
      let u;
      return typeof a == "object" ? u = Ee(a) ?? Le : u = a, n(u === Le ? i : (E) => f(E)?.mutations?.[u] ?? Tt, p);
    };
  }
  function S(a, u) {
    const P = a[t], O = /* @__PURE__ */ new Set();
    for (const E of u.filter(Me).map(tt)) {
      const T = P.provided.tags[E.type];
      if (!T)
        continue;
      let R = (E.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        T[E.id]
      ) : (
        // no id: invalidate all queries that provide this type
        At(Object.values(T))
      )) ?? [];
      for (const h of R)
        O.add(h);
    }
    return At(Array.from(O.values()).map((E) => {
      const T = P.queries[E];
      return T ? [{
        queryCacheKey: E,
        endpointName: T.endpointName,
        originalArgs: T.originalArgs
      }] : [];
    }));
  }
  function g(a, u) {
    return Object.values(v(a)).filter(
      (P) => P?.endpointName === u && P.status !== "uninitialized"
      /* uninitialized */
    ).map((P) => P.originalArgs);
  }
  function s(a, u, P) {
    return u ? rt(a, u, P) != null : !1;
  }
  function _(a, u, P) {
    return !u || !a.getPreviousPageParam ? !1 : Lt(a, u, P) != null;
  }
}
var Ct = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Nt = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const r = Ct?.get(t);
  if (typeof r == "string")
    n = r;
  else {
    const i = JSON.stringify(t, (p, f) => (f = typeof f == "bigint" ? {
      $bigint: f.toString()
    } : f, f = He(f) ? Object.keys(f).sort().reduce((v, D) => (v[D] = f[D], v), {}) : f, f));
    He(t) && Ct?.set(t, i), n = i;
  }
  return `${e}(${n})`;
};
function $n(...e) {
  return function(n) {
    const r = ke((w) => n.extractRehydrationInfo?.(w, {
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
      serializeQueryArgs(w) {
        let I = Nt;
        if ("serializeQueryArgs" in w.endpointDefinition) {
          const b = w.endpointDefinition.serializeQueryArgs;
          I = (o) => {
            const l = b(o);
            return typeof l == "string" ? l : Nt({
              ...o,
              queryArgs: l
            });
          };
        } else n.serializeQueryArgs && (I = n.serializeQueryArgs);
        return I(w);
      },
      tagTypes: [...n.tagTypes || []]
    }, p = {
      endpointDefinitions: {},
      batch(w) {
        w();
      },
      apiUid: kt(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: ke((w) => r(w) != null)
    }, f = {
      injectEndpoints: D,
      enhanceEndpoints({
        addTagTypes: w,
        endpoints: I
      }) {
        if (w)
          for (const b of w)
            i.tagTypes.includes(b) || i.tagTypes.push(b);
        if (I)
          for (const [b, o] of Object.entries(I))
            typeof o == "function" ? o(p.endpointDefinitions[b]) : Object.assign(p.endpointDefinitions[b] || {}, o);
        return f;
      }
    }, v = e.map((w) => w.init(f, i, p));
    function D(w) {
      const I = w.endpoints({
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
      for (const [b, o] of Object.entries(I)) {
        if (w.overrideExisting !== !0 && b in p.endpointDefinitions) {
          if (w.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? Ce(39) : `called \`injectEndpoints\` to override already-existing endpointName ${b} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${b} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && Oe(o)) {
          const {
            infiniteQueryOptions: l
          } = o, {
            maxPages: m,
            getPreviousPageParam: S
          } = l;
          if (typeof m == "number") {
            if (m < 1)
              throw new Error(process.env.NODE_ENV === "production" ? Ce(40) : `maxPages for endpoint '${b}' must be a number greater than 0`);
            if (typeof S != "function")
              throw new Error(process.env.NODE_ENV === "production" ? Ce(41) : `getPreviousPageParam for endpoint '${b}' must be a function if maxPages is used`);
          }
        }
        p.endpointDefinitions[b] = o;
        for (const l of v)
          l.injectEndpoint(b, o);
      }
      return f;
    }
    return f.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function Z(e, ...t) {
  return Object.assign(e, ...t);
}
var Kn = ({
  api: e,
  queryThunk: t,
  internalState: n
}) => {
  const r = `${e.reducerPath}/subscriptions`;
  let i = null, p = null;
  const {
    updateSubscriptionOptions: f,
    unsubscribeQueryResult: v
  } = e.internalActions, D = (l, m) => {
    if (f.match(m)) {
      const {
        queryCacheKey: g,
        requestId: s,
        options: _
      } = m.payload;
      return l?.[g]?.[s] && (l[g][s] = _), !0;
    }
    if (v.match(m)) {
      const {
        queryCacheKey: g,
        requestId: s
      } = m.payload;
      return l[g] && delete l[g][s], !0;
    }
    if (e.internalActions.removeQueryResult.match(m))
      return delete l[m.payload.queryCacheKey], !0;
    if (t.pending.match(m)) {
      const {
        meta: {
          arg: g,
          requestId: s
        }
      } = m, _ = l[g.queryCacheKey] ??= {};
      return _[`${s}_running`] = {}, g.subscribe && (_[s] = g.subscriptionOptions ?? _[s] ?? {}), !0;
    }
    let S = !1;
    if (t.fulfilled.match(m) || t.rejected.match(m)) {
      const g = l[m.meta.arg.queryCacheKey] || {}, s = `${m.meta.requestId}_running`;
      S ||= !!g[s], delete g[s];
    }
    if (t.rejected.match(m)) {
      const {
        meta: {
          condition: g,
          arg: s,
          requestId: _
        }
      } = m;
      if (g && s.subscribe) {
        const a = l[s.queryCacheKey] ??= {};
        a[_] = s.subscriptionOptions ?? a[_] ?? {}, S = !0;
      }
    }
    return S;
  }, w = () => n.currentSubscriptions, o = {
    getSubscriptions: w,
    getSubscriptionCount: (l) => {
      const S = w()[l] ?? {};
      return ye(S);
    },
    isRequestSubscribed: (l, m) => !!w()?.[l]?.[m]
  };
  return (l, m) => {
    if (i || (i = JSON.parse(JSON.stringify(n.currentSubscriptions))), e.util.resetApiState.match(l))
      return i = n.currentSubscriptions = {}, p = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(l))
      return [!1, o];
    const S = D(n.currentSubscriptions, l);
    let g = !0;
    if (S) {
      p || (p = setTimeout(() => {
        const a = JSON.parse(JSON.stringify(n.currentSubscriptions)), [, u] = Ut(i, () => a);
        m.next(e.internalActions.subscriptionsUpdated(u)), i = a, p = null;
      }, 500));
      const s = typeof l.type == "string" && !!l.type.startsWith(r), _ = t.rejected.match(l) && l.meta.condition && !!l.meta.arg.subscribe;
      g = !s && !_;
    }
    return [g, !1];
  };
};
function Vn(e) {
  for (const t in e)
    return !1;
  return !0;
}
var Un = 2147483647 / 1e3 - 1, Wn = ({
  reducerPath: e,
  api: t,
  queryThunk: n,
  context: r,
  internalState: i,
  selectors: {
    selectQueryEntry: p,
    selectConfig: f
  }
}) => {
  const {
    removeQueryResult: v,
    unsubscribeQueryResult: D,
    cacheEntriesUpserted: w
  } = t.internalActions, I = Ne(D.match, n.fulfilled, n.rejected, w.match);
  function b(g) {
    const s = i.currentSubscriptions[g];
    return !!s && !Vn(s);
  }
  const o = {}, l = (g, s, _) => {
    const a = s.getState(), u = f(a);
    if (I(g)) {
      let P;
      if (w.match(g))
        P = g.payload.map((O) => O.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: O
        } = D.match(g) ? g.payload : g.meta.arg;
        P = [O];
      }
      m(P, s, u);
    }
    if (t.util.resetApiState.match(g))
      for (const [P, O] of Object.entries(o))
        O && clearTimeout(O), delete o[P];
    if (r.hasRehydrationInfo(g)) {
      const {
        queries: P
      } = r.extractRehydrationInfo(g);
      m(Object.keys(P), s, u);
    }
  };
  function m(g, s, _) {
    const a = s.getState();
    for (const u of g) {
      const P = p(a, u);
      S(u, P?.endpointName, s, _);
    }
  }
  function S(g, s, _, a) {
    const P = r.endpointDefinitions[s]?.keepUnusedDataFor ?? a.keepUnusedDataFor;
    if (P === 1 / 0)
      return;
    const O = Math.max(0, Math.min(P, Un));
    if (!b(g)) {
      const E = o[g];
      E && clearTimeout(E), o[g] = setTimeout(() => {
        b(g) || _.dispatch(v({
          queryCacheKey: g
        })), delete o[g];
      }, O * 1e3);
    }
  }
  return l;
}, Qt = new Error("Promise never resolved before cacheEntryRemoved."), Bn = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: r,
  mutationThunk: i,
  internalState: p,
  selectors: {
    selectQueryEntry: f,
    selectApiState: v
  }
}) => {
  const D = ht(r), w = ht(i), I = oe(r, i), b = {};
  function o(s, _, a) {
    const u = b[s];
    u?.valueResolved && (u.valueResolved({
      data: _,
      meta: a
    }), delete u.valueResolved);
  }
  function l(s) {
    const _ = b[s];
    _ && (delete b[s], _.cacheEntryRemoved());
  }
  const m = (s, _, a) => {
    const u = S(s);
    function P(O, E, T, R) {
      const h = f(a, E), c = f(_.getState(), E);
      !h && c && g(O, R, E, _, T);
    }
    if (r.pending.match(s))
      P(s.meta.arg.endpointName, u, s.meta.requestId, s.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(s))
      for (const {
        queryDescription: O,
        value: E
      } of s.payload) {
        const {
          endpointName: T,
          originalArgs: R,
          queryCacheKey: h
        } = O;
        P(T, h, s.meta.requestId, R), o(h, E, {});
      }
    else if (i.pending.match(s))
      _.getState()[t].mutations[u] && g(s.meta.arg.endpointName, s.meta.arg.originalArgs, u, _, s.meta.requestId);
    else if (I(s))
      o(u, s.payload, s.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(s) || e.internalActions.removeMutationResult.match(s))
      l(u);
    else if (e.util.resetApiState.match(s))
      for (const O of Object.keys(b))
        l(O);
  };
  function S(s) {
    return D(s) ? s.meta.arg.queryCacheKey : w(s) ? s.meta.arg.fixedCacheKey ?? s.meta.requestId : e.internalActions.removeQueryResult.match(s) ? s.payload.queryCacheKey : e.internalActions.removeMutationResult.match(s) ? Ee(s.payload) : "";
  }
  function g(s, _, a, u, P) {
    const O = n.endpointDefinitions[s], E = O?.onCacheEntryAdded;
    if (!E) return;
    const T = {}, R = new Promise((C) => {
      T.cacheEntryRemoved = C;
    }), h = Promise.race([new Promise((C) => {
      T.valueResolved = C;
    }), R.then(() => {
      throw Qt;
    })]);
    h.catch(() => {
    }), b[a] = T;
    const c = e.endpoints[s].select(Fe(O) ? _ : a), y = u.dispatch((C, q, F) => F), d = {
      ...u,
      getCacheEntry: () => c(u.getState()),
      requestId: P,
      extra: y,
      updateCachedData: Fe(O) ? (C) => u.dispatch(e.util.updateQueryData(s, _, C)) : void 0,
      cacheDataLoaded: h,
      cacheEntryRemoved: R
    }, A = E(_, d);
    Promise.resolve(A).catch((C) => {
      if (C !== Qt)
        throw C;
    });
  }
  return m;
}, Ln = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: n
}) => (r, i) => {
  e.util.resetApiState.match(r) && i.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(r) && r.payload === t && i.getState()[n]?.config?.middlewareRegistered === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, Hn = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: r,
  queryThunk: i,
  api: p,
  assertTagType: f,
  refetchQuery: v,
  internalState: D
}) => {
  const {
    removeQueryResult: w
  } = p.internalActions, I = Ne(oe(r), st(r)), b = Ne(oe(r, i), ot(r, i));
  let o = [];
  const l = (g, s) => {
    I(g) ? S(Ht(g, "invalidatesTags", n, f), s) : b(g) ? S([], s) : p.util.invalidateTags.match(g) && S(dt(g.payload, void 0, void 0, void 0, void 0, f), s);
  };
  function m(g) {
    const {
      queries: s,
      mutations: _
    } = g;
    for (const a of [s, _])
      for (const u in a)
        if (a[u]?.status === "pending") return !0;
    return !1;
  }
  function S(g, s) {
    const _ = s.getState(), a = _[e];
    if (o.push(...g), a.config.invalidationBehavior === "delayed" && m(a))
      return;
    const u = o;
    if (o = [], u.length === 0) return;
    const P = p.util.selectInvalidatedBy(_, u);
    t.batch(() => {
      const O = Array.from(P.values());
      for (const {
        queryCacheKey: E
      } of O) {
        const T = a.queries[E], R = D.currentSubscriptions[E] ?? {};
        T && (ye(R) === 0 ? s.dispatch(w({
          queryCacheKey: E
        })) : T.status !== "uninitialized" && s.dispatch(v(T)));
      }
    });
  }
  return l;
}, Jn = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: r,
  internalState: i
}) => {
  const p = {}, f = (o, l) => {
    (n.internalActions.updateSubscriptionOptions.match(o) || n.internalActions.unsubscribeQueryResult.match(o)) && D(o.payload, l), (t.pending.match(o) || t.rejected.match(o) && o.meta.condition) && D(o.meta.arg, l), (t.fulfilled.match(o) || t.rejected.match(o) && !o.meta.condition) && v(o.meta.arg, l), n.util.resetApiState.match(o) && I();
  };
  function v({
    queryCacheKey: o
  }, l) {
    const m = l.getState()[e], S = m.queries[o], g = i.currentSubscriptions[o];
    if (!S || S.status === "uninitialized") return;
    const {
      lowestPollingInterval: s,
      skipPollingIfUnfocused: _
    } = b(g);
    if (!Number.isFinite(s)) return;
    const a = p[o];
    a?.timeout && (clearTimeout(a.timeout), a.timeout = void 0);
    const u = Date.now() + s;
    p[o] = {
      nextPollTimestamp: u,
      pollingInterval: s,
      timeout: setTimeout(() => {
        (m.config.focused || !_) && l.dispatch(r(S)), v({
          queryCacheKey: o
        }, l);
      }, s)
    };
  }
  function D({
    queryCacheKey: o
  }, l) {
    const S = l.getState()[e].queries[o], g = i.currentSubscriptions[o];
    if (!S || S.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: s
    } = b(g);
    if (!Number.isFinite(s)) {
      w(o);
      return;
    }
    const _ = p[o], a = Date.now() + s;
    (!_ || a < _.nextPollTimestamp) && v({
      queryCacheKey: o
    }, l);
  }
  function w(o) {
    const l = p[o];
    l?.timeout && clearTimeout(l.timeout), delete p[o];
  }
  function I() {
    for (const o of Object.keys(p))
      w(o);
  }
  function b(o = {}) {
    let l = !1, m = Number.POSITIVE_INFINITY;
    for (let S in o)
      o[S].pollingInterval && (m = Math.min(o[S].pollingInterval, m), l = o[S].skipPollingIfUnfocused || l);
    return {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: l
    };
  }
  return f;
}, Yn = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: r
}) => {
  const i = Ft(n, r), p = ot(n, r), f = oe(n, r), v = {};
  return (w, I) => {
    if (i(w)) {
      const {
        requestId: b,
        arg: {
          endpointName: o,
          originalArgs: l
        }
      } = w.meta, m = t.endpointDefinitions[o], S = m?.onQueryStarted;
      if (S) {
        const g = {}, s = new Promise((P, O) => {
          g.resolve = P, g.reject = O;
        });
        s.catch(() => {
        }), v[b] = g;
        const _ = e.endpoints[o].select(Fe(m) ? l : b), a = I.dispatch((P, O, E) => E), u = {
          ...I,
          getCacheEntry: () => _(I.getState()),
          requestId: b,
          extra: a,
          updateCachedData: Fe(m) ? (P) => I.dispatch(e.util.updateQueryData(o, l, P)) : void 0,
          queryFulfilled: s
        };
        S(l, u);
      }
    } else if (f(w)) {
      const {
        requestId: b,
        baseQueryMeta: o
      } = w.meta;
      v[b]?.resolve({
        data: w.payload,
        meta: o
      }), delete v[b];
    } else if (p(w)) {
      const {
        requestId: b,
        rejectedWithValue: o,
        baseQueryMeta: l
      } = w.meta;
      v[b]?.reject({
        error: w.payload ?? w.error,
        isUnhandledError: !o,
        meta: l
      }), delete v[b];
    }
  };
}, Gn = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: r,
  internalState: i
}) => {
  const {
    removeQueryResult: p
  } = n.internalActions, f = (D, w) => {
    je.match(D) && v(w, "refetchOnFocus"), xe.match(D) && v(w, "refetchOnReconnect");
  };
  function v(D, w) {
    const I = D.getState()[e], b = I.queries, o = i.currentSubscriptions;
    t.batch(() => {
      for (const l of Object.keys(o)) {
        const m = b[l], S = o[l];
        if (!S || !m) continue;
        (Object.values(S).some((s) => s[w] === !0) || Object.values(S).every((s) => s[w] === void 0) && I.config[w]) && (ye(S) === 0 ? D.dispatch(p({
          queryCacheKey: l
        })) : m.status !== "uninitialized" && D.dispatch(r(m)));
      }
    });
  }
  return f;
};
function Xn(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: r,
    context: i
  } = e, {
    apiUid: p
  } = i, f = {
    invalidateTags: he(`${t}/invalidateTags`)
  }, v = (b) => b.type.startsWith(`${t}/`), D = [Ln, Wn, Hn, Jn, Bn, Yn];
  return {
    middleware: (b) => {
      let o = !1;
      const m = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: I,
        isThisApiSliceAction: v
      }, S = D.map((_) => _(m)), g = Kn(m), s = Gn(m);
      return (_) => (a) => {
        if (!Zt(a))
          return _(a);
        o || (o = !0, b.dispatch(r.internalActions.middlewareRegistered(p)));
        const u = {
          ...b,
          next: _
        }, P = b.getState(), [O, E] = g(a, u, P);
        let T;
        if (O ? T = _(a) : T = E, b.getState()[t] && (s(a, u, P), v(a) || i.hasRehydrationInfo(a)))
          for (const R of S)
            R(a, u, P);
        return T;
      };
    },
    actions: f
  };
  function I(b) {
    return e.api.endpoints[b.endpointName].initiate(b.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var qt = /* @__PURE__ */ Symbol(), Zn = ({
  createSelector: e = Gt
} = {}) => ({
  name: qt,
  init(t, {
    baseQuery: n,
    tagTypes: r,
    reducerPath: i,
    serializeQueryArgs: p,
    keepUnusedDataFor: f,
    refetchOnMountOrArgChange: v,
    refetchOnFocus: D,
    refetchOnReconnect: w,
    invalidationBehavior: I,
    onSchemaFailure: b,
    catchSchemaFailure: o,
    skipSchemaValidation: l
  }, m) {
    pn();
    const S = (k) => (typeof process < "u" && process.env.NODE_ENV === "development" && (r.includes(k.type) || console.error(`Tag type '${k.type}' was used, but not specified in \`tagTypes\`!`)), k);
    Object.assign(t, {
      reducerPath: i,
      endpoints: {},
      internalActions: {
        onOnline: xe,
        onOffline: ft,
        onFocus: je,
        onFocusLost: lt
      },
      util: {}
    });
    const g = xn({
      serializeQueryArgs: p,
      reducerPath: i,
      createSelector: e
    }), {
      selectInvalidatedBy: s,
      selectCachedArgsForQuery: _,
      buildQuerySelector: a,
      buildInfiniteQuerySelector: u,
      buildMutationSelector: P
    } = g;
    Z(t.util, {
      selectInvalidatedBy: s,
      selectCachedArgsForQuery: _
    });
    const {
      queryThunk: O,
      infiniteQueryThunk: E,
      mutationThunk: T,
      patchQueryData: R,
      updateQueryData: h,
      upsertQueryData: c,
      prefetch: y,
      buildMatchThunkActions: d
    } = zn({
      baseQuery: n,
      reducerPath: i,
      context: m,
      api: t,
      serializeQueryArgs: p,
      assertTagType: S,
      selectors: g,
      onSchemaFailure: b,
      catchSchemaFailure: o,
      skipSchemaValidation: l
    }), {
      reducer: A,
      actions: C
    } = jn({
      context: m,
      queryThunk: O,
      mutationThunk: T,
      serializeQueryArgs: p,
      reducerPath: i,
      assertTagType: S,
      config: {
        refetchOnFocus: D,
        refetchOnReconnect: w,
        refetchOnMountOrArgChange: v,
        keepUnusedDataFor: f,
        reducerPath: i,
        invalidationBehavior: I
      }
    });
    Z(t.util, {
      patchQueryData: R,
      updateQueryData: h,
      upsertQueryData: c,
      prefetch: y,
      resetApiState: C.resetApiState,
      upsertQueryEntries: C.cacheEntriesUpserted
    }), Z(t.internalActions, C);
    const {
      middleware: q,
      actions: F
    } = Xn({
      reducerPath: i,
      context: m,
      queryThunk: O,
      mutationThunk: T,
      infiniteQueryThunk: E,
      api: t,
      assertTagType: S,
      selectors: g
    });
    Z(t.util, F), Z(t, {
      reducer: A,
      middleware: q
    });
    const {
      buildInitiateQuery: Q,
      buildInitiateInfiniteQuery: N,
      buildInitiateMutation: j,
      getRunningMutationThunk: U,
      getRunningMutationsThunk: X,
      getRunningQueriesThunk: x,
      getRunningQueryThunk: W
    } = Mn({
      queryThunk: O,
      mutationThunk: T,
      infiniteQueryThunk: E,
      api: t,
      serializeQueryArgs: p,
      context: m
    });
    return Z(t.util, {
      getRunningMutationThunk: U,
      getRunningMutationsThunk: X,
      getRunningQueryThunk: W,
      getRunningQueriesThunk: x
    }), {
      name: qt,
      injectEndpoint(k, K) {
        const $ = t, z = $.endpoints[k] ??= {};
        $e(K) && Z(z, {
          name: k,
          select: a(k, K),
          initiate: Q(k, K)
        }, d(O, k)), Qn(K) && Z(z, {
          name: k,
          select: P(),
          initiate: j(k)
        }, d(T, k)), Oe(K) && Z(z, {
          name: k,
          select: u(k, K),
          initiate: N(k, K)
        }, d(O, k));
      }
    };
  }
});
Zn();
function tr({
  reducer: e,
  middlewares: t = [],
  preloadedState: n = {}
}) {
  const r = en({
    reducer: e,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (i) => i().concat(t),
    preloadedState: n
  });
  return Nn(r.dispatch), r;
}
export {
  tr as makeStore
};
//# sourceMappingURL=store.es.js.map
