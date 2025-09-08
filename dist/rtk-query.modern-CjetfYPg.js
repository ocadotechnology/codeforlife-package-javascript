import { isPlainObject as be, nanoid as Ut, formatProdErrorMessage as Qe, createAction as ye, createSelector as sn, createNextState as ct, createAsyncThunk as vt, createSlice as pe, prepareAutoBatched as me, isAnyOf as qe, isFulfilled as oe, isRejectedWithValue as ut, combineReducers as on, SHOULD_AUTOBATCH as Kt, isAllOf as Ve, isRejected as lt, isPending as Vt, isAction as an, isAsyncThunkAction as bt } from "@reduxjs/toolkit";
var ft = Symbol.for("immer-nothing"), ve = Symbol.for("immer-draftable"), H = Symbol.for("immer-state"), Wt = process.env.NODE_ENV !== "production" ? [
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
    const n = Wt[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ae = Object.getPrototypeOf;
function Z(e) {
  return !!e && !!e[H];
}
function ee(e) {
  return e ? Lt(e) || Array.isArray(e) || !!e[ve] || !!e.constructor?.[ve] || he(e) || Oe(e) : !1;
}
var cn = Object.prototype.constructor.toString();
function Lt(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ae(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === cn;
}
function un(e) {
  return Z(e) || W(15, e), e[H].base_;
}
function Se(e, t) {
  ce(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function ce(e) {
  const t = e[H];
  return t ? t.type_ : Array.isArray(e) ? 1 : he(e) ? 2 : Oe(e) ? 3 : 0;
}
function _e(e, t) {
  return ce(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function We(e, t) {
  return ce(e) === 2 ? e.get(t) : e[t];
}
function Bt(e, t, n) {
  const r = ce(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function ln(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function he(e) {
  return e instanceof Map;
}
function Oe(e) {
  return e instanceof Set;
}
function se(e) {
  return e.copy_ || e.base_;
}
function Ge(e, t) {
  if (he(e))
    return new Map(e);
  if (Oe(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = Lt(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[H];
    let s = Reflect.ownKeys(r);
    for (let d = 0; d < s.length; d++) {
      const p = s[d], g = r[p];
      g.writable === !1 && (g.writable = !0, g.configurable = !0), (g.get || g.set) && (r[p] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: g.enumerable,
        value: e[p]
      });
    }
    return Object.create(ae(e), r);
  } else {
    const r = ae(e);
    if (r !== null && n)
      return { ...e };
    const s = Object.create(r);
    return Object.assign(s, e);
  }
}
function dt(e, t = !1) {
  return xe(e) || Z(e) || !ee(e) || (ce(e) > 1 && Object.defineProperties(e, {
    set: { value: De },
    add: { value: De },
    clear: { value: De },
    delete: { value: De }
  }), Object.freeze(e), t && Object.values(e).forEach((n) => dt(n, !0))), e;
}
function De() {
  W(2);
}
function xe(e) {
  return Object.isFrozen(e);
}
var Xe = {};
function ue(e) {
  const t = Xe[e];
  return t || W(0, e), t;
}
function fn(e, t) {
  Xe[e] || (Xe[e] = t);
}
var we;
function Ht() {
  return we;
}
function dn(e, t) {
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
function St(e, t) {
  t && (ue("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ze(e) {
  et(e), e.drafts_.forEach(pn), e.drafts_ = null;
}
function et(e) {
  e === we && (we = e.parent_);
}
function _t(e) {
  return we = dn(we, e);
}
function pn(e) {
  const t = e[H];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function wt(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[H].modified_ && (Ze(t), W(4)), ee(e) && (e = Me(t, e), t.parent_ || ke(t, e)), t.patches_ && ue("Patches").generateReplacementPatches_(
    n[H].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Me(t, n, []), Ze(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== ft ? e : void 0;
}
function Me(e, t, n) {
  if (xe(t))
    return t;
  const r = t[H];
  if (!r)
    return Se(
      t,
      (s, d) => Rt(e, r, t, s, d, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return ke(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const s = r.copy_;
    let d = s, p = !1;
    r.type_ === 3 && (d = new Set(s), s.clear(), p = !0), Se(
      d,
      (g, T) => Rt(e, r, s, g, T, n, p)
    ), ke(e, s, !1), n && e.patches_ && ue("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Rt(e, t, n, r, s, d, p) {
  if (process.env.NODE_ENV !== "production" && s === n && W(5), Z(s)) {
    const g = d && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !_e(t.assigned_, r) ? d.concat(r) : void 0, T = Me(e, s, g);
    if (Bt(n, r, T), Z(T))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else p && n.add(s);
  if (ee(s) && !xe(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Me(e, s), (!t || !t.scope_.parent_) && typeof r != "symbol" && (he(n) ? n.has(r) : Object.prototype.propertyIsEnumerable.call(n, r)) && ke(e, s);
  }
}
function ke(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && dt(t, n);
}
function yn(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ht(),
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
  let s = r, d = pt;
  n && (s = [r], d = Re);
  const { revoke: p, proxy: g } = Proxy.revocable(s, d);
  return r.draft_ = g, r.revoke_ = p, g;
}
var pt = {
  get(e, t) {
    if (t === H)
      return e;
    const n = se(e);
    if (!_e(n, t))
      return hn(e, n, t);
    const r = n[t];
    return e.finalized_ || !ee(r) ? r : r === Le(e.base_, t) ? (Be(e), e.copy_[t] = nt(r, e)) : r;
  },
  has(e, t) {
    return t in se(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(se(e));
  },
  set(e, t, n) {
    const r = Jt(se(e), t);
    if (r?.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const s = Le(se(e), t), d = s?.[H];
      if (d && d.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (ln(n, s) && (n !== void 0 || _e(e.base_, t)))
        return !0;
      Be(e), tt(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Le(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Be(e), tt(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
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
Se(pt, (e, t) => {
  Re[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Re.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && W(13), Re.set.call(this, e, t, void 0);
};
Re.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && W(14), pt.set.call(this, e[0], t, n, e[0]);
};
function Le(e, t) {
  const n = e[H];
  return (n ? se(n) : e)[t];
}
function hn(e, t, n) {
  const r = Jt(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    r.get?.call(e.draft_)
  ) : void 0;
}
function Jt(e, t) {
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
function tt(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && tt(e.parent_));
}
function Be(e) {
  e.copy_ || (e.copy_ = Ge(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var mn = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const d = n;
        n = t;
        const p = this;
        return function(T = d, ...I) {
          return p.produce(T, (D) => n.call(this, D, ...I));
        };
      }
      typeof n != "function" && W(6), r !== void 0 && typeof r != "function" && W(7);
      let s;
      if (ee(t)) {
        const d = _t(this), p = nt(t, void 0);
        let g = !0;
        try {
          s = n(p), g = !1;
        } finally {
          g ? Ze(d) : et(d);
        }
        return St(d, r), wt(s, d);
      } else if (!t || typeof t != "object") {
        if (s = n(t), s === void 0 && (s = t), s === ft && (s = void 0), this.autoFreeze_ && dt(s, !0), r) {
          const d = [], p = [];
          ue("Patches").generateReplacementPatches_(t, s, d, p), r(d, p);
        }
        return s;
      } else
        W(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (p, ...g) => this.produceWithPatches(p, (T) => t(T, ...g));
      let r, s;
      return [this.produce(t, n, (p, g) => {
        r = p, s = g;
      }), r, s];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    ee(e) || W(8), Z(e) && (e = gn(e));
    const t = _t(this), n = nt(e, void 0);
    return n[H].isManual_ = !0, et(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[H];
    (!n || !n.isManual_) && W(9);
    const { scope_: r } = n;
    return St(r, t), wt(void 0, r);
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
      const s = t[n];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = ue("Patches").applyPatches_;
    return Z(e) ? r(e, t) : this.produce(
      e,
      (s) => r(s, t)
    );
  }
};
function nt(e, t) {
  const n = he(e) ? ue("MapSet").proxyMap_(e, t) : Oe(e) ? ue("MapSet").proxySet_(e, t) : yn(e, t);
  return (t ? t.scope_ : Ht()).drafts_.push(n), n;
}
function gn(e) {
  return Z(e) || W(10, e), Yt(e);
}
function Yt(e) {
  if (!ee(e) || xe(e))
    return e;
  const t = e[H];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ge(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ge(e, !0);
  return Se(n, (r, s) => {
    Bt(n, r, Yt(s));
  }), t && (t.finalized_ = !1), n;
}
function vn() {
  process.env.NODE_ENV !== "production" && Wt.push(
    'Sets cannot have "replace" patches.',
    function(f) {
      return "Unsupported patch operation: " + f;
    },
    function(f) {
      return "Cannot apply patch, path doesn't resolve: " + f;
    },
    "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
  );
  const t = "replace", n = "add", r = "remove";
  function s(f, w, A, b) {
    switch (f.type_) {
      case 0:
      case 2:
        return p(
          f,
          w,
          A,
          b
        );
      case 1:
        return d(f, w, A, b);
      case 3:
        return g(
          f,
          w,
          A,
          b
        );
    }
  }
  function d(f, w, A, b) {
    let { base_: u, assigned_: c } = f, v = f.copy_;
    v.length < u.length && ([u, v] = [v, u], [A, b] = [b, A]);
    for (let i = 0; i < u.length; i++)
      if (c[i] && v[i] !== u[i]) {
        const a = w.concat([i]);
        A.push({
          op: t,
          path: a,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: R(v[i])
        }), b.push({
          op: t,
          path: a,
          value: R(u[i])
        });
      }
    for (let i = u.length; i < v.length; i++) {
      const a = w.concat([i]);
      A.push({
        op: n,
        path: a,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: R(v[i])
      });
    }
    for (let i = v.length - 1; u.length <= i; --i) {
      const a = w.concat([i]);
      b.push({
        op: r,
        path: a
      });
    }
  }
  function p(f, w, A, b) {
    const { base_: u, copy_: c } = f;
    Se(f.assigned_, (v, i) => {
      const a = We(u, v), m = We(c, v), E = i ? _e(u, v) ? t : n : r;
      if (a === m && E === t)
        return;
      const P = w.concat(v);
      A.push(E === r ? { op: E, path: P } : { op: E, path: P, value: m }), b.push(
        E === n ? { op: r, path: P } : E === r ? { op: n, path: P, value: R(a) } : { op: t, path: P, value: R(a) }
      );
    });
  }
  function g(f, w, A, b) {
    let { base_: u, copy_: c } = f, v = 0;
    u.forEach((i) => {
      if (!c.has(i)) {
        const a = w.concat([v]);
        A.push({
          op: r,
          path: a,
          value: i
        }), b.unshift({
          op: n,
          path: a,
          value: i
        });
      }
      v++;
    }), v = 0, c.forEach((i) => {
      if (!u.has(i)) {
        const a = w.concat([v]);
        A.push({
          op: n,
          path: a,
          value: i
        }), b.unshift({
          op: r,
          path: a,
          value: i
        });
      }
      v++;
    });
  }
  function T(f, w, A, b) {
    A.push({
      op: t,
      path: [],
      value: w === ft ? void 0 : w
    }), b.push({
      op: t,
      path: [],
      value: f
    });
  }
  function I(f, w) {
    return w.forEach((A) => {
      const { path: b, op: u } = A;
      let c = f;
      for (let m = 0; m < b.length - 1; m++) {
        const E = ce(c);
        let P = b[m];
        typeof P != "string" && typeof P != "number" && (P = "" + P), (E === 0 || E === 1) && (P === "__proto__" || P === "constructor") && W(19), typeof c == "function" && P === "prototype" && W(19), c = We(c, P), typeof c != "object" && W(18, b.join("/"));
      }
      const v = ce(c), i = D(A.value), a = b[b.length - 1];
      switch (u) {
        case t:
          switch (v) {
            case 2:
              return c.set(a, i);
            case 3:
              W(16);
            default:
              return c[a] = i;
          }
        case n:
          switch (v) {
            case 1:
              return a === "-" ? c.push(i) : c.splice(a, 0, i);
            case 2:
              return c.set(a, i);
            case 3:
              return c.add(i);
            default:
              return c[a] = i;
          }
        case r:
          switch (v) {
            case 1:
              return c.splice(a, 1);
            case 2:
              return c.delete(a);
            case 3:
              return c.delete(A.value);
            default:
              return delete c[a];
          }
        default:
          W(17, u);
      }
    }), f;
  }
  function D(f) {
    if (!ee(f))
      return f;
    if (Array.isArray(f))
      return f.map(D);
    if (he(f))
      return new Map(
        Array.from(f.entries()).map(([A, b]) => [A, D(b)])
      );
    if (Oe(f))
      return new Set(Array.from(f).map(D));
    const w = Object.create(ae(f));
    for (const A in f)
      w[A] = D(f[A]);
    return _e(f, ve) && (w[ve] = f[ve]), w;
  }
  function R(f) {
    return Z(f) ? D(f) : f;
  }
  fn("Patches", {
    applyPatches_: I,
    generatePatches_: s,
    generateReplacementPatches_: T
  });
}
var Ee = new mn();
Ee.produce;
var Gt = /* @__PURE__ */ Ee.produceWithPatches.bind(
  Ee
), Et = /* @__PURE__ */ Ee.applyPatches.bind(Ee), bn = class extends Error {
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
}, Sn = (e, t, n) => {
  if (t.length === 1 && t[0] === n) {
    let r = !1;
    try {
      const s = {};
      e(s) === s && (r = !0);
    } catch {
    }
    if (r) {
      let s;
      try {
        throw new Error();
      } catch (d) {
        ({ stack: s } = d);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: s }
      );
    }
  }
}, _n = (e, t, n) => {
  const { memoize: r, memoizeOptions: s } = t, { inputSelectorResults: d, inputSelectorResultsCopy: p } = e, g = r(() => ({}), ...s);
  if (!(g.apply(null, d) === g.apply(null, p))) {
    let I;
    try {
      throw new Error();
    } catch (D) {
      ({ stack: I } = D);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: n,
        firstInputs: d,
        secondInputs: p,
        stack: I
      }
    );
  }
}, wn = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function Rn(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function En(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function Pn(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((n) => typeof n == "function")) {
    const n = e.map(
      (r) => typeof r == "function" ? `function ${r.name || "unnamed"}()` : typeof r
    ).join(", ");
    throw new TypeError(`${t}[${n}]`);
  }
}
var Pt = (e) => Array.isArray(e) ? e : [e];
function An(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return Pn(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function At(e, t) {
  const n = [], { length: r } = e;
  for (let s = 0; s < r; s++)
    n.push(e[s].apply(null, t));
  return n;
}
var On = (e, t) => {
  const { identityFunctionCheck: n, inputStabilityCheck: r } = {
    ...wn,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: Sn
    },
    inputStabilityCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: _n
    }
  };
}, In = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, Dn = typeof WeakRef < "u" ? WeakRef : In, Tn = 0, Ot = 1;
function Te() {
  return {
    s: Tn,
    v: void 0,
    o: null,
    p: null
  };
}
function Fe(e, t = {}) {
  let n = Te();
  const { resultEqualityCheck: r } = t;
  let s, d = 0;
  function p() {
    let g = n;
    const { length: T } = arguments;
    for (let R = 0, f = T; R < f; R++) {
      const w = arguments[R];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let A = g.o;
        A === null && (g.o = A = /* @__PURE__ */ new WeakMap());
        const b = A.get(w);
        b === void 0 ? (g = Te(), A.set(w, g)) : g = b;
      } else {
        let A = g.p;
        A === null && (g.p = A = /* @__PURE__ */ new Map());
        const b = A.get(w);
        b === void 0 ? (g = Te(), A.set(w, g)) : g = b;
      }
    }
    const I = g;
    let D;
    if (g.s === Ot)
      D = g.v;
    else if (D = e.apply(null, arguments), d++, r) {
      const R = s?.deref?.() ?? s;
      R != null && r(R, D) && (D = R, d !== 0 && d--), s = typeof D == "object" && D !== null || typeof D == "function" ? new Dn(D) : D;
    }
    return I.s = Ot, I.v = D, D;
  }
  return p.clearCache = () => {
    n = Te(), p.resetResultsCount();
  }, p.resultsCount = () => d, p.resetResultsCount = () => {
    d = 0;
  }, p;
}
function Nn(e, ...t) {
  const n = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, r = (...s) => {
    let d = 0, p = 0, g, T = {}, I = s.pop();
    typeof I == "object" && (T = I, I = s.pop()), Rn(
      I,
      `createSelector expects an output function after the inputs, but received: [${typeof I}]`
    );
    const D = {
      ...n,
      ...T
    }, {
      memoize: R,
      memoizeOptions: f = [],
      argsMemoize: w = Fe,
      argsMemoizeOptions: A = [],
      devModeChecks: b = {}
    } = D, u = Pt(f), c = Pt(A), v = An(s), i = R(function() {
      return d++, I.apply(
        null,
        arguments
      );
    }, ...u);
    let a = !0;
    const m = w(function() {
      p++;
      const P = At(
        v,
        arguments
      );
      if (g = i.apply(null, P), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: O, inputStabilityCheck: S } = On(a, b);
        if (O.shouldRun && O.run(
          I,
          P,
          g
        ), S.shouldRun) {
          const y = At(
            v,
            arguments
          );
          S.run(
            { inputSelectorResults: P, inputSelectorResultsCopy: y },
            { memoize: R, memoizeOptions: u },
            arguments
          );
        }
        a && (a = !1);
      }
      return g;
    }, ...c);
    return Object.assign(m, {
      resultFunc: I,
      memoizedResultFunc: i,
      dependencies: v,
      dependencyRecomputations: () => p,
      resetDependencyRecomputations: () => {
        p = 0;
      },
      lastResult: () => g,
      recomputations: () => d,
      resetRecomputations: () => {
        d = 0;
      },
      memoize: R,
      argsMemoize: w
    });
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Cn = /* @__PURE__ */ Nn(Fe), Qn = Object.assign(
  (e, t = Cn) => {
    En(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const n = Object.keys(e), r = n.map(
      (d) => e[d]
    );
    return t(
      r,
      (...d) => d.reduce((p, g, T) => (p[n[T]] = g, p), {})
    );
  },
  { withTypes: () => Qn }
), qn = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(qn || {});
function It(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var Dt = be;
function Xt(e, t) {
  if (e === t || !(Dt(e) && Dt(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const n = Object.keys(t), r = Object.keys(e);
  let s = n.length === r.length;
  const d = Array.isArray(t) ? [] : {};
  for (const p of n)
    d[p] = Xt(e[p], t[p]), s && (s = e[p] === d[p]);
  return s ? e : d;
}
function He(e) {
  let t = 0;
  for (const n in e)
    t++;
  return t;
}
var Tt = (e) => [].concat(...e);
function Mn(e) {
  return new RegExp("(^|:)//").test(e);
}
function kn() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function je(e) {
  return e != null;
}
function Fn() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var jn = (e) => e.replace(/\/$/, ""), zn = (e) => e.replace(/^\//, "");
function xn(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (Mn(t))
    return t;
  const n = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = jn(e), t = zn(t), `${e}${n}${t}`;
}
function $n(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n).get(t);
}
function rt(e, t, n) {
  return e.has(t) ? e.get(t) : e.set(t, n(t)).get(t);
}
var it = () => /* @__PURE__ */ new Map(), Nt = (...e) => fetch(...e), Un = (e) => e.status >= 200 && e.status <= 299, Kn = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function Ct(e) {
  if (!be(e))
    return e;
  const t = {
    ...e
  };
  for (const [n, r] of Object.entries(t))
    r === void 0 && delete t[n];
  return t;
}
function lr({
  baseUrl: e,
  prepareHeaders: t = (R) => R,
  fetchFn: n = Nt,
  paramsSerializer: r,
  isJsonContentType: s = Kn,
  jsonContentType: d = "application/json",
  jsonReplacer: p,
  timeout: g,
  responseHandler: T,
  validateStatus: I,
  ...D
} = {}) {
  return typeof fetch > "u" && n === Nt && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (f, w, A) => {
    const {
      getState: b,
      extra: u,
      endpoint: c,
      forced: v,
      type: i
    } = w;
    let a, {
      url: m,
      headers: E = new Headers(D.headers),
      params: P = void 0,
      responseHandler: O = T ?? "json",
      validateStatus: S = I ?? Un,
      timeout: y = g,
      ...o
    } = typeof f == "string" ? {
      url: f
    } : f, l, h = w.signal;
    y && (l = new AbortController(), w.signal.addEventListener("abort", l.abort), h = l.signal);
    let _ = {
      ...D,
      signal: h,
      ...o
    };
    E = new Headers(Ct(E)), _.headers = await t(E, {
      getState: b,
      arg: f,
      extra: u,
      endpoint: c,
      forced: v,
      type: i,
      extraOptions: A
    }) || E;
    const N = (j) => typeof j == "object" && (be(j) || Array.isArray(j) || typeof j.toJSON == "function");
    if (!_.headers.has("content-type") && N(_.body) && _.headers.set("content-type", d), N(_.body) && s(_.headers) && (_.body = JSON.stringify(_.body, p)), P) {
      const j = ~m.indexOf("?") ? "&" : "?", x = r ? r(P) : new URLSearchParams(Ct(P));
      m += j + x;
    }
    m = xn(e, m);
    const q = new Request(m, _);
    a = {
      request: new Request(m, _)
    };
    let Q, C = !1, F = l && setTimeout(() => {
      C = !0, l.abort();
    }, y);
    try {
      Q = await n(q);
    } catch (j) {
      return {
        error: {
          status: C ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(j)
        },
        meta: a
      };
    } finally {
      F && clearTimeout(F), l?.signal.removeEventListener("abort", l.abort);
    }
    const K = Q.clone();
    a.response = K;
    let L, $ = "";
    try {
      let j;
      if (await Promise.all([
        R(Q, O).then((x) => L = x, (x) => j = x),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        K.text().then((x) => $ = x, () => {
        })
      ]), j) throw j;
    } catch (j) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: Q.status,
          data: $,
          error: String(j)
        },
        meta: a
      };
    }
    return S(Q, L) ? {
      data: L,
      meta: a
    } : {
      error: {
        status: Q.status,
        data: L
      },
      meta: a
    };
  };
  async function R(f, w) {
    if (typeof w == "function")
      return w(f);
    if (w === "content-type" && (w = s(f.headers) ? "json" : "text"), w === "json") {
      const A = await f.text();
      return A.length ? JSON.parse(A) : null;
    }
    return f.text();
  }
}
var Qt = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, $e = /* @__PURE__ */ ye("__rtkq/focused"), yt = /* @__PURE__ */ ye("__rtkq/unfocused"), Ue = /* @__PURE__ */ ye("__rtkq/online"), ht = /* @__PURE__ */ ye("__rtkq/offline"), Je = !1;
function fr(e, t) {
  function n() {
    const r = () => e($e()), s = () => e(yt()), d = () => e(Ue()), p = () => e(ht()), g = () => {
      window.document.visibilityState === "visible" ? r() : s();
    };
    return Je || typeof window < "u" && window.addEventListener && (window.addEventListener("visibilitychange", g, !1), window.addEventListener("focus", r, !1), window.addEventListener("online", d, !1), window.addEventListener("offline", p, !1), Je = !0), () => {
      window.removeEventListener("focus", r), window.removeEventListener("visibilitychange", g), window.removeEventListener("online", d), window.removeEventListener("offline", p), Je = !1;
    };
  }
  return n();
}
function Ke(e) {
  return e.type === "query";
}
function Vn(e) {
  return e.type === "mutation";
}
function Ie(e) {
  return e.type === "infinitequery";
}
function ze(e) {
  return Ke(e) || Ie(e);
}
function mt(e, t, n, r, s, d) {
  return Wn(e) ? e(t, n, r, s).filter(je).map(st).map(d) : Array.isArray(e) ? e.map(st).map(d) : [];
}
function Wn(e) {
  return typeof e == "function";
}
function st(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function Ln(e, t) {
  return e.catch(t);
}
var Pe = Symbol("forceQueryFn"), ot = (e) => typeof e[Pe] == "function";
function Bn({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: n,
  mutationThunk: r,
  api: s,
  context: d,
  internalState: p
}) {
  const {
    runningQueries: g,
    runningMutations: T
  } = p, {
    unsubscribeQueryResult: I,
    removeMutationResult: D,
    updateSubscriptionOptions: R
  } = s.internalActions;
  return {
    buildInitiateQuery: v,
    buildInitiateInfiniteQuery: i,
    buildInitiateMutation: a,
    getRunningQueryThunk: f,
    getRunningMutationThunk: w,
    getRunningQueriesThunk: A,
    getRunningMutationsThunk: b
  };
  function f(m, E) {
    return (P) => {
      const O = d.endpointDefinitions[m], S = e({
        queryArgs: E,
        endpointDefinition: O,
        endpointName: m
      });
      return g.get(P)?.[S];
    };
  }
  function w(m, E) {
    return (P) => T.get(P)?.[E];
  }
  function A() {
    return (m) => Object.values(g.get(m) || {}).filter(je);
  }
  function b() {
    return (m) => Object.values(T.get(m) || {}).filter(je);
  }
  function u(m) {
    if (process.env.NODE_ENV !== "production") {
      if (u.triggered) return;
      const E = m(s.internalActions.internal_getRTKQSubscriptions());
      if (u.triggered = !0, typeof E != "object" || typeof E?.type == "string")
        throw new Error(process.env.NODE_ENV === "production" ? Qe(34) : `Warning: Middleware for RTK-Query API at reducerPath "${s.reducerPath}" has not been added to the store.
You must add the middleware for RTK-Query to function correctly!`);
    }
  }
  function c(m, E) {
    const P = (O, {
      subscribe: S = !0,
      forceRefetch: y,
      subscriptionOptions: o,
      [Pe]: l,
      ...h
    } = {}) => (_, N) => {
      const q = e({
        queryArgs: O,
        endpointDefinition: E,
        endpointName: m
      });
      let z;
      const Q = {
        ...h,
        type: "query",
        subscribe: S,
        forceRefetch: y,
        subscriptionOptions: o,
        endpointName: m,
        originalArgs: O,
        queryCacheKey: q,
        [Pe]: l
      };
      if (Ke(E))
        z = t(Q);
      else {
        const {
          direction: k,
          initialPageParam: M
        } = h;
        z = n({
          ...Q,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: k,
          initialPageParam: M
        });
      }
      const C = s.endpoints[m].select(O), F = _(z), K = C(N());
      u(_);
      const {
        requestId: L,
        abort: $
      } = F, j = K.requestId !== L, x = g.get(_)?.[q], U = () => C(N()), V = Object.assign(l ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        F.then(U)
      ) : j && !x ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(K)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([x, F]).then(U)
      ), {
        arg: O,
        requestId: L,
        subscriptionOptions: o,
        queryCacheKey: q,
        abort: $,
        async unwrap() {
          const k = await V;
          if (k.isError)
            throw k.error;
          return k.data;
        },
        refetch: () => _(P(O, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          S && _(I({
            queryCacheKey: q,
            requestId: L
          }));
        },
        updateSubscriptionOptions(k) {
          V.subscriptionOptions = k, _(R({
            endpointName: m,
            requestId: L,
            queryCacheKey: q,
            options: k
          }));
        }
      });
      if (!x && !j && !l) {
        const k = $n(g, _, {});
        k[q] = V, V.then(() => {
          delete k[q], He(k) || g.delete(_);
        });
      }
      return V;
    };
    return P;
  }
  function v(m, E) {
    return c(m, E);
  }
  function i(m, E) {
    return c(m, E);
  }
  function a(m) {
    return (E, {
      track: P = !0,
      fixedCacheKey: O
    } = {}) => (S, y) => {
      const o = r({
        type: "mutation",
        endpointName: m,
        originalArgs: E,
        track: P,
        fixedCacheKey: O
      }), l = S(o);
      u(S);
      const {
        requestId: h,
        abort: _,
        unwrap: N
      } = l, q = Ln(l.unwrap().then((F) => ({
        data: F
      })), (F) => ({
        error: F
      })), z = () => {
        S(D({
          requestId: h,
          fixedCacheKey: O
        }));
      }, Q = Object.assign(q, {
        arg: l.arg,
        requestId: h,
        abort: _,
        unwrap: N,
        reset: z
      }), C = T.get(S) || {};
      return T.set(S, C), C[h] = Q, Q.then(() => {
        delete C[h], He(C) || T.delete(S);
      }), O && (C[O] = Q, Q.then(() => {
        C[O] === Q && (delete C[O], He(C) || T.delete(S));
      })), Q;
    };
  }
}
var Zt = class extends bn {
  constructor(e, t, n, r) {
    super(e), this.value = t, this.schemaName = n, this._bqMeta = r;
  }
}, re = (e, t) => Array.isArray(e) ? e.includes(t) : !!e;
async function ie(e, t, n, r) {
  const s = await e["~standard"].validate(t);
  if (s.issues)
    throw new Zt(s.issues, t, n, r);
  return s.value;
}
function qt(e) {
  return e;
}
var ge = (e = {}) => ({
  ...e,
  [Kt]: !0
});
function Hn({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: n
  },
  serializeQueryArgs: r,
  api: s,
  assertTagType: d,
  selectors: p,
  onSchemaFailure: g,
  catchSchemaFailure: T,
  skipSchemaValidation: I
}) {
  const D = (o, l, h, _) => (N, q) => {
    const z = n[o], Q = r({
      queryArgs: l,
      endpointDefinition: z,
      endpointName: o
    });
    if (N(s.internalActions.queryResultPatched({
      queryCacheKey: Q,
      patches: h
    })), !_)
      return;
    const C = s.endpoints[o].select(l)(
      // Work around TS 4.1 mismatch
      q()
    ), F = mt(z.providesTags, C.data, void 0, l, {}, d);
    N(s.internalActions.updateProvidedBy([{
      queryCacheKey: Q,
      providedTags: F
    }]));
  };
  function R(o, l, h = 0) {
    const _ = [l, ...o];
    return h && _.length > h ? _.slice(0, -1) : _;
  }
  function f(o, l, h = 0) {
    const _ = [...o, l];
    return h && _.length > h ? _.slice(1) : _;
  }
  const w = (o, l, h, _ = !0) => (N, q) => {
    const Q = s.endpoints[o].select(l)(
      // Work around TS 4.1 mismatch
      q()
    ), C = {
      patches: [],
      inversePatches: [],
      undo: () => N(s.util.patchQueryData(o, l, C.inversePatches, _))
    };
    if (Q.status === "uninitialized")
      return C;
    let F;
    if ("data" in Q)
      if (ee(Q.data)) {
        const [K, L, $] = Gt(Q.data, h);
        C.patches.push(...L), C.inversePatches.push(...$), F = K;
      } else
        F = h(Q.data), C.patches.push({
          op: "replace",
          path: [],
          value: F
        }), C.inversePatches.push({
          op: "replace",
          path: [],
          value: Q.data
        });
    return C.patches.length === 0 || N(s.util.patchQueryData(o, l, C.patches, _)), C;
  }, A = (o, l, h) => (_) => _(s.endpoints[o].initiate(l, {
    subscribe: !1,
    forceRefetch: !0,
    [Pe]: () => ({
      data: h
    })
  })), b = (o, l) => o.query && o[l] ? o[l] : qt, u = async (o, {
    signal: l,
    abort: h,
    rejectWithValue: _,
    fulfillWithValue: N,
    dispatch: q,
    getState: z,
    extra: Q
  }) => {
    const C = n[o.endpointName], {
      metaSchema: F,
      skipSchemaValidation: K = I
    } = C;
    try {
      let L = qt;
      const $ = {
        signal: l,
        abort: h,
        dispatch: q,
        getState: z,
        extra: Q,
        endpoint: o.endpointName,
        type: o.type,
        forced: o.type === "query" ? c(o, z()) : void 0,
        queryCacheKey: o.type === "query" ? o.queryCacheKey : void 0
      }, j = o.type === "query" ? o[Pe] : void 0;
      let x;
      const U = async (k, M, B, le) => {
        if (M == null && k.pages.length)
          return Promise.resolve({
            data: k
          });
        const te = {
          queryArg: o.originalArgs,
          pageParam: M
        }, fe = await V(te), G = le ? R : f;
        return {
          data: {
            pages: G(k.pages, fe.data, B),
            pageParams: G(k.pageParams, M, B)
          },
          meta: fe.meta
        };
      };
      async function V(k) {
        let M;
        const {
          extraOptions: B,
          argSchema: le,
          rawResponseSchema: te,
          responseSchema: fe
        } = C;
        if (le && !re(K, "arg") && (k = await ie(
          le,
          k,
          "argSchema",
          {}
          // we don't have a meta yet, so we can't pass it
        )), j ? M = j() : C.query ? (L = b(C, "transformResponse"), M = await t(C.query(k), $, B)) : M = await C.queryFn(k, $, B, (J) => t(J, $, B)), typeof process < "u" && process.env.NODE_ENV === "development") {
          const J = C.query ? "`baseQuery`" : "`queryFn`";
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
          Y && console.error(`Error encountered handling the endpoint ${o.endpointName}.
                  ${Y}
                  It needs to return an object with either the shape \`{ data: <value> }\` or \`{ error: <value> }\` that may contain an optional \`meta\` property.
                  Object returned was:`, M);
        }
        if (M.error) throw new Qt(M.error, M.meta);
        let {
          data: G
        } = M;
        te && !re(K, "rawResponse") && (G = await ie(te, M.data, "rawResponseSchema", M.meta));
        let ne = await L(G, M.meta, k);
        return fe && !re(K, "response") && (ne = await ie(fe, ne, "responseSchema", M.meta)), {
          ...M,
          data: ne
        };
      }
      if (o.type === "query" && "infiniteQueryOptions" in C) {
        const {
          infiniteQueryOptions: k
        } = C, {
          maxPages: M = 1 / 0
        } = k;
        let B;
        const le = {
          pages: [],
          pageParams: []
        }, te = p.selectQueryEntry(z(), o.queryCacheKey)?.data, G = /* arg.forceRefetch */ c(o, z()) && !o.direction || !te ? le : te;
        if ("direction" in o && o.direction && G.pages.length) {
          const ne = o.direction === "backward", Y = (ne ? en : at)(k, G, o.originalArgs);
          B = await U(G, Y, M, ne);
        } else {
          const {
            initialPageParam: ne = k.initialPageParam
          } = o, J = te?.pageParams ?? [], Y = J[0] ?? ne, de = J.length;
          B = await U(G, Y, M), j && (B = {
            data: B.data.pages[0]
          });
          for (let gt = 1; gt < de; gt++) {
            const rn = at(k, B.data, o.originalArgs);
            B = await U(B.data, rn, M);
          }
        }
        x = B;
      } else
        x = await V(o.originalArgs);
      return F && !re(K, "meta") && x.meta && (x.meta = await ie(F, x.meta, "metaSchema", x.meta)), N(x.data, ge({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: x.meta
      }));
    } catch (L) {
      let $ = L;
      if ($ instanceof Qt) {
        let j = b(C, "transformErrorResponse");
        const {
          rawErrorResponseSchema: x,
          errorResponseSchema: U
        } = C;
        let {
          value: V,
          meta: k
        } = $;
        try {
          x && !re(K, "rawErrorResponse") && (V = await ie(x, V, "rawErrorResponseSchema", k)), F && !re(K, "meta") && (k = await ie(F, k, "metaSchema", k));
          let M = await j(V, k, o.originalArgs);
          return U && !re(K, "errorResponse") && (M = await ie(U, M, "errorResponseSchema", k)), _(M, ge({
            baseQueryMeta: k
          }));
        } catch (M) {
          $ = M;
        }
      }
      try {
        if ($ instanceof Zt) {
          const j = {
            endpoint: o.endpointName,
            arg: o.originalArgs,
            type: o.type,
            queryCacheKey: o.type === "query" ? o.queryCacheKey : void 0
          };
          C.onSchemaFailure?.($, j), g?.($, j);
          const {
            catchSchemaFailure: x = T
          } = C;
          if (x)
            return _(x($, j), ge({
              baseQueryMeta: $._bqMeta
            }));
        }
      } catch (j) {
        $ = j;
      }
      throw typeof process < "u" && process.env.NODE_ENV !== "production" ? console.error(`An unhandled error occurred processing a request for the endpoint "${o.endpointName}".
In the case of an unhandled error, no tags will be "provided" or "invalidated".`, $) : console.error($), $;
    }
  };
  function c(o, l) {
    const h = p.selectQueryEntry(l, o.queryCacheKey), _ = p.selectConfig(l).refetchOnMountOrArgChange, N = h?.fulfilledTimeStamp, q = o.forceRefetch ?? (o.subscribe && _);
    return q ? q === !0 || (Number(/* @__PURE__ */ new Date()) - Number(N)) / 1e3 >= q : !1;
  }
  const v = () => vt(`${e}/executeQuery`, u, {
    getPendingMeta({
      arg: l
    }) {
      const h = n[l.endpointName];
      return ge({
        startedTimeStamp: Date.now(),
        ...Ie(h) ? {
          direction: l.direction
        } : {}
      });
    },
    condition(l, {
      getState: h
    }) {
      const _ = h(), N = p.selectQueryEntry(_, l.queryCacheKey), q = N?.fulfilledTimeStamp, z = l.originalArgs, Q = N?.originalArgs, C = n[l.endpointName], F = l.direction;
      return ot(l) ? !0 : N?.status === "pending" ? !1 : c(l, _) || Ke(C) && C?.forceRefetch?.({
        currentArg: z,
        previousArg: Q,
        endpointState: N,
        state: _
      }) ? !0 : !(q && !F);
    },
    dispatchConditionRejection: !0
  }), i = v(), a = v(), m = vt(`${e}/executeMutation`, u, {
    getPendingMeta() {
      return ge({
        startedTimeStamp: Date.now()
      });
    }
  }), E = (o) => "force" in o, P = (o) => "ifOlderThan" in o, O = (o, l, h) => (_, N) => {
    const q = E(h) && h.force, z = P(h) && h.ifOlderThan, Q = (F = !0) => {
      const K = {
        forceRefetch: F,
        isPrefetch: !0
      };
      return s.endpoints[o].initiate(l, K);
    }, C = s.endpoints[o].select(l)(N());
    if (q)
      _(Q());
    else if (z) {
      const F = C?.fulfilledTimeStamp;
      if (!F) {
        _(Q());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(F))) / 1e3 >= z && _(Q());
    } else
      _(Q(!1));
  };
  function S(o) {
    return (l) => l?.meta?.arg?.endpointName === o;
  }
  function y(o, l) {
    return {
      matchPending: Ve(Vt(o), S(l)),
      matchFulfilled: Ve(oe(o), S(l)),
      matchRejected: Ve(lt(o), S(l))
    };
  }
  return {
    queryThunk: i,
    mutationThunk: m,
    infiniteQueryThunk: a,
    prefetch: O,
    updateQueryData: w,
    upsertQueryData: A,
    patchQueryData: D,
    buildMatchThunkActions: y
  };
}
function at(e, {
  pages: t,
  pageParams: n
}, r) {
  const s = t.length - 1;
  return e.getNextPageParam(t[s], t, n[s], n, r);
}
function en(e, {
  pages: t,
  pageParams: n
}, r) {
  return e.getPreviousPageParam?.(t[0], t, n[0], n, r);
}
function tn(e, t, n, r) {
  return mt(n[e.meta.arg.endpointName][t], oe(e) ? e.payload : void 0, ut(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, r);
}
function Ne(e, t, n) {
  const r = e[t];
  r && n(r);
}
function Ae(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Mt(e, t, n) {
  const r = e[Ae(t)];
  r && n(r);
}
var Ce = {};
function Jn({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: n,
  serializeQueryArgs: r,
  context: {
    endpointDefinitions: s,
    apiUid: d,
    extractRehydrationInfo: p,
    hasRehydrationInfo: g
  },
  assertTagType: T,
  config: I
}) {
  const D = ye(`${e}/resetApiState`);
  function R(S, y, o, l) {
    S[y.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: y.endpointName
    }, Ne(S, y.queryCacheKey, (h) => {
      h.status = "pending", h.requestId = o && h.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        h.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        l.requestId
      ), y.originalArgs !== void 0 && (h.originalArgs = y.originalArgs), h.startedTimeStamp = l.startedTimeStamp;
      const _ = s[l.arg.endpointName];
      Ie(_) && "direction" in y && (h.direction = y.direction);
    });
  }
  function f(S, y, o, l) {
    Ne(S, y.arg.queryCacheKey, (h) => {
      if (h.requestId !== y.requestId && !l) return;
      const {
        merge: _
      } = s[y.arg.endpointName];
      if (h.status = "fulfilled", _)
        if (h.data !== void 0) {
          const {
            fulfilledTimeStamp: N,
            arg: q,
            baseQueryMeta: z,
            requestId: Q
          } = y;
          let C = ct(h.data, (F) => _(F, o, {
            arg: q.originalArgs,
            baseQueryMeta: z,
            fulfilledTimeStamp: N,
            requestId: Q
          }));
          h.data = C;
        } else
          h.data = o;
      else
        h.data = s[y.arg.endpointName].structuralSharing ?? !0 ? Xt(Z(h.data) ? un(h.data) : h.data, o) : o;
      delete h.error, h.fulfilledTimeStamp = y.fulfilledTimeStamp;
    });
  }
  const w = pe({
    name: `${e}/queries`,
    initialState: Ce,
    reducers: {
      removeQueryResult: {
        reducer(S, {
          payload: {
            queryCacheKey: y
          }
        }) {
          delete S[y];
        },
        prepare: me()
      },
      cacheEntriesUpserted: {
        reducer(S, y) {
          for (const o of y.payload) {
            const {
              queryDescription: l,
              value: h
            } = o;
            R(S, l, !0, {
              arg: l,
              requestId: y.meta.requestId,
              startedTimeStamp: y.meta.timestamp
            }), f(
              S,
              {
                arg: l,
                requestId: y.meta.requestId,
                fulfilledTimeStamp: y.meta.timestamp,
                baseQueryMeta: {}
              },
              h,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (S) => ({
          payload: S.map((l) => {
            const {
              endpointName: h,
              arg: _,
              value: N
            } = l, q = s[h];
            return {
              queryDescription: {
                type: "query",
                endpointName: h,
                originalArgs: l.arg,
                queryCacheKey: r({
                  queryArgs: _,
                  endpointDefinition: q,
                  endpointName: h
                })
              },
              value: N
            };
          }),
          meta: {
            [Kt]: !0,
            requestId: Ut(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(S, {
          payload: {
            queryCacheKey: y,
            patches: o
          }
        }) {
          Ne(S, y, (l) => {
            l.data = Et(l.data, o.concat());
          });
        },
        prepare: me()
      }
    },
    extraReducers(S) {
      S.addCase(t.pending, (y, {
        meta: o,
        meta: {
          arg: l
        }
      }) => {
        const h = ot(l);
        R(y, l, h, o);
      }).addCase(t.fulfilled, (y, {
        meta: o,
        payload: l
      }) => {
        const h = ot(o.arg);
        f(y, o, l, h);
      }).addCase(t.rejected, (y, {
        meta: {
          condition: o,
          arg: l,
          requestId: h
        },
        error: _,
        payload: N
      }) => {
        Ne(y, l.queryCacheKey, (q) => {
          if (!o) {
            if (q.requestId !== h) return;
            q.status = "rejected", q.error = N ?? _;
          }
        });
      }).addMatcher(g, (y, o) => {
        const {
          queries: l
        } = p(o);
        for (const [h, _] of Object.entries(l))
          // do not rehydrate entries that were currently in flight.
          (_?.status === "fulfilled" || _?.status === "rejected") && (y[h] = _);
      });
    }
  }), A = pe({
    name: `${e}/mutations`,
    initialState: Ce,
    reducers: {
      removeMutationResult: {
        reducer(S, {
          payload: y
        }) {
          const o = Ae(y);
          o in S && delete S[o];
        },
        prepare: me()
      }
    },
    extraReducers(S) {
      S.addCase(n.pending, (y, {
        meta: o,
        meta: {
          requestId: l,
          arg: h,
          startedTimeStamp: _
        }
      }) => {
        h.track && (y[Ae(o)] = {
          requestId: l,
          status: "pending",
          endpointName: h.endpointName,
          startedTimeStamp: _
        });
      }).addCase(n.fulfilled, (y, {
        payload: o,
        meta: l
      }) => {
        l.arg.track && Mt(y, l, (h) => {
          h.requestId === l.requestId && (h.status = "fulfilled", h.data = o, h.fulfilledTimeStamp = l.fulfilledTimeStamp);
        });
      }).addCase(n.rejected, (y, {
        payload: o,
        error: l,
        meta: h
      }) => {
        h.arg.track && Mt(y, h, (_) => {
          _.requestId === h.requestId && (_.status = "rejected", _.error = o ?? l);
        });
      }).addMatcher(g, (y, o) => {
        const {
          mutations: l
        } = p(o);
        for (const [h, _] of Object.entries(l))
          // do not rehydrate entries that were currently in flight.
          (_?.status === "fulfilled" || _?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          h !== _?.requestId && (y[h] = _);
      });
    }
  }), b = {
    tags: {},
    keys: {}
  }, u = pe({
    name: `${e}/invalidation`,
    initialState: b,
    reducers: {
      updateProvidedBy: {
        reducer(S, y) {
          for (const {
            queryCacheKey: o,
            providedTags: l
          } of y.payload) {
            c(S, o);
            for (const {
              type: h,
              id: _
            } of l) {
              const N = (S.tags[h] ??= {})[_ || "__internal_without_id"] ??= [];
              N.includes(o) || N.push(o);
            }
            S.keys[o] = l;
          }
        },
        prepare: me()
      }
    },
    extraReducers(S) {
      S.addCase(w.actions.removeQueryResult, (y, {
        payload: {
          queryCacheKey: o
        }
      }) => {
        c(y, o);
      }).addMatcher(g, (y, o) => {
        const {
          provided: l
        } = p(o);
        for (const [h, _] of Object.entries(l.tags ?? {}))
          for (const [N, q] of Object.entries(_)) {
            const z = (y.tags[h] ??= {})[N || "__internal_without_id"] ??= [];
            for (const Q of q)
              z.includes(Q) || z.push(Q), y.keys[Q] = l.keys[Q];
          }
      }).addMatcher(qe(oe(t), ut(t)), (y, o) => {
        v(y, [o]);
      }).addMatcher(w.actions.cacheEntriesUpserted.match, (y, o) => {
        const l = o.payload.map(({
          queryDescription: h,
          value: _
        }) => ({
          type: "UNKNOWN",
          payload: _,
          meta: {
            requestStatus: "fulfilled",
            requestId: "UNKNOWN",
            arg: h
          }
        }));
        v(y, l);
      });
    }
  });
  function c(S, y) {
    const o = S.keys[y] ?? [];
    for (const l of o) {
      const h = l.type, _ = l.id ?? "__internal_without_id", N = S.tags[h]?.[_];
      N && (S.tags[h][_] = N.filter((q) => q !== y));
    }
    delete S.keys[y];
  }
  function v(S, y) {
    const o = y.map((l) => {
      const h = tn(l, "providesTags", s, T), {
        queryCacheKey: _
      } = l.meta.arg;
      return {
        queryCacheKey: _,
        providedTags: h
      };
    });
    u.caseReducers.updateProvidedBy(S, u.actions.updateProvidedBy(o));
  }
  const i = pe({
    name: `${e}/subscriptions`,
    initialState: Ce,
    reducers: {
      updateSubscriptionOptions(S, y) {
      },
      unsubscribeQueryResult(S, y) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), a = pe({
    name: `${e}/internalSubscriptions`,
    initialState: Ce,
    reducers: {
      subscriptionsUpdated: {
        reducer(S, y) {
          return Et(S, y.payload);
        },
        prepare: me()
      }
    }
  }), m = pe({
    name: `${e}/config`,
    initialState: {
      online: Fn(),
      focused: kn(),
      middlewareRegistered: !1,
      ...I
    },
    reducers: {
      middlewareRegistered(S, {
        payload: y
      }) {
        S.middlewareRegistered = S.middlewareRegistered === "conflict" || d !== y ? "conflict" : !0;
      }
    },
    extraReducers: (S) => {
      S.addCase(Ue, (y) => {
        y.online = !0;
      }).addCase(ht, (y) => {
        y.online = !1;
      }).addCase($e, (y) => {
        y.focused = !0;
      }).addCase(yt, (y) => {
        y.focused = !1;
      }).addMatcher(g, (y) => ({
        ...y
      }));
    }
  }), E = on({
    queries: w.reducer,
    mutations: A.reducer,
    provided: u.reducer,
    subscriptions: a.reducer,
    config: m.reducer
  }), P = (S, y) => E(D.match(y) ? void 0 : S, y), O = {
    ...m.actions,
    ...w.actions,
    ...i.actions,
    ...a.actions,
    ...A.actions,
    ...u.actions,
    resetApiState: D
  };
  return {
    reducer: P,
    actions: O
  };
}
var Ye = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), nn = {
  status: "uninitialized"
  /* uninitialized */
}, kt = /* @__PURE__ */ ct(nn, () => {
}), Ft = /* @__PURE__ */ ct(nn, () => {
});
function Yn({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: n
}) {
  const r = (i) => kt, s = (i) => Ft;
  return {
    buildQuerySelector: f,
    buildInfiniteQuerySelector: w,
    buildMutationSelector: A,
    selectInvalidatedBy: b,
    selectCachedArgsForQuery: u,
    selectApiState: p,
    selectQueries: g,
    selectMutations: I,
    selectQueryEntry: T,
    selectConfig: D
  };
  function d(i) {
    return {
      ...i,
      ...It(i.status)
    };
  }
  function p(i) {
    const a = i[t];
    if (process.env.NODE_ENV !== "production" && !a) {
      if (p.triggered) return a;
      p.triggered = !0, console.error(`Error: No data found at \`state.${t}\`. Did you forget to add the reducer to the store?`);
    }
    return a;
  }
  function g(i) {
    return p(i)?.queries;
  }
  function T(i, a) {
    return g(i)?.[a];
  }
  function I(i) {
    return p(i)?.mutations;
  }
  function D(i) {
    return p(i)?.config;
  }
  function R(i, a, m) {
    return (E) => {
      if (E === Ye)
        return n(r, m);
      const P = e({
        queryArgs: E,
        endpointDefinition: a,
        endpointName: i
      });
      return n((S) => T(S, P) ?? kt, m);
    };
  }
  function f(i, a) {
    return R(i, a, d);
  }
  function w(i, a) {
    const {
      infiniteQueryOptions: m
    } = a;
    function E(P) {
      const O = {
        ...P,
        ...It(P.status)
      }, {
        isLoading: S,
        isError: y,
        direction: o
      } = O, l = o === "forward", h = o === "backward";
      return {
        ...O,
        hasNextPage: c(m, O.data, O.originalArgs),
        hasPreviousPage: v(m, O.data, O.originalArgs),
        isFetchingNextPage: S && l,
        isFetchingPreviousPage: S && h,
        isFetchNextPageError: y && l,
        isFetchPreviousPageError: y && h
      };
    }
    return R(i, a, E);
  }
  function A() {
    return (i) => {
      let a;
      return typeof i == "object" ? a = Ae(i) ?? Ye : a = i, n(a === Ye ? s : (P) => p(P)?.mutations?.[a] ?? Ft, d);
    };
  }
  function b(i, a) {
    const m = i[t], E = /* @__PURE__ */ new Set();
    for (const P of a.filter(je).map(st)) {
      const O = m.provided.tags[P.type];
      if (!O)
        continue;
      let S = (P.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        O[P.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Tt(Object.values(O))
      )) ?? [];
      for (const y of S)
        E.add(y);
    }
    return Tt(Array.from(E.values()).map((P) => {
      const O = m.queries[P];
      return O ? [{
        queryCacheKey: P,
        endpointName: O.endpointName,
        originalArgs: O.originalArgs
      }] : [];
    }));
  }
  function u(i, a) {
    return Object.values(g(i)).filter(
      (m) => m?.endpointName === a && m.status !== "uninitialized"
      /* uninitialized */
    ).map((m) => m.originalArgs);
  }
  function c(i, a, m) {
    return a ? at(i, a, m) != null : !1;
  }
  function v(i, a, m) {
    return !a || !i.getPreviousPageParam ? !1 : en(i, a, m) != null;
  }
}
var jt = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, zt = ({
  endpointName: e,
  queryArgs: t
}) => {
  let n = "";
  const r = jt?.get(t);
  if (typeof r == "string")
    n = r;
  else {
    const s = JSON.stringify(t, (d, p) => (p = typeof p == "bigint" ? {
      $bigint: p.toString()
    } : p, p = be(p) ? Object.keys(p).sort().reduce((g, T) => (g[T] = p[T], g), {}) : p, p));
    be(t) && jt?.set(t, s), n = s;
  }
  return `${e}(${n})`;
};
function Gn(...e) {
  return function(n) {
    const r = Fe((I) => n.extractRehydrationInfo?.(I, {
      reducerPath: n.reducerPath ?? "api"
    })), s = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...n,
      extractRehydrationInfo: r,
      serializeQueryArgs(I) {
        let D = zt;
        if ("serializeQueryArgs" in I.endpointDefinition) {
          const R = I.endpointDefinition.serializeQueryArgs;
          D = (f) => {
            const w = R(f);
            return typeof w == "string" ? w : zt({
              ...f,
              queryArgs: w
            });
          };
        } else n.serializeQueryArgs && (D = n.serializeQueryArgs);
        return D(I);
      },
      tagTypes: [...n.tagTypes || []]
    }, d = {
      endpointDefinitions: {},
      batch(I) {
        I();
      },
      apiUid: Ut(),
      extractRehydrationInfo: r,
      hasRehydrationInfo: Fe((I) => r(I) != null)
    }, p = {
      injectEndpoints: T,
      enhanceEndpoints({
        addTagTypes: I,
        endpoints: D
      }) {
        if (I)
          for (const R of I)
            s.tagTypes.includes(R) || s.tagTypes.push(R);
        if (D)
          for (const [R, f] of Object.entries(D))
            typeof f == "function" ? f(d.endpointDefinitions[R]) : Object.assign(d.endpointDefinitions[R] || {}, f);
        return p;
      }
    }, g = e.map((I) => I.init(p, s, d));
    function T(I) {
      const D = I.endpoints({
        query: (R) => ({
          ...R,
          type: "query"
          /* query */
        }),
        mutation: (R) => ({
          ...R,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (R) => ({
          ...R,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [R, f] of Object.entries(D)) {
        if (I.overrideExisting !== !0 && R in d.endpointDefinitions) {
          if (I.overrideExisting === "throw")
            throw new Error(process.env.NODE_ENV === "production" ? Qe(39) : `called \`injectEndpoints\` to override already-existing endpointName ${R} without specifying \`overrideExisting: true\``);
          typeof process < "u" && process.env.NODE_ENV === "development" && console.error(`called \`injectEndpoints\` to override already-existing endpointName ${R} without specifying \`overrideExisting: true\``);
          continue;
        }
        if (typeof process < "u" && process.env.NODE_ENV === "development" && Ie(f)) {
          const {
            infiniteQueryOptions: w
          } = f, {
            maxPages: A,
            getPreviousPageParam: b
          } = w;
          if (typeof A == "number") {
            if (A < 1)
              throw new Error(process.env.NODE_ENV === "production" ? Qe(40) : `maxPages for endpoint '${R}' must be a number greater than 0`);
            if (typeof b != "function")
              throw new Error(process.env.NODE_ENV === "production" ? Qe(41) : `getPreviousPageParam for endpoint '${R}' must be a function if maxPages is used`);
          }
        }
        d.endpointDefinitions[R] = f;
        for (const w of g)
          w.injectEndpoint(R, f);
      }
      return p;
    }
    return p.injectEndpoints({
      endpoints: n.endpoints
    });
  };
}
function X(e, ...t) {
  return Object.assign(e, ...t);
}
var Xn = ({
  api: e,
  queryThunk: t,
  internalState: n,
  mwApi: r
}) => {
  const s = `${e.reducerPath}/subscriptions`;
  let d = null, p = null;
  const {
    updateSubscriptionOptions: g,
    unsubscribeQueryResult: T
  } = e.internalActions, I = (b, u) => {
    if (g.match(u)) {
      const {
        queryCacheKey: v,
        requestId: i,
        options: a
      } = u.payload, m = b.get(v);
      return m?.has(i) && m.set(i, a), !0;
    }
    if (T.match(u)) {
      const {
        queryCacheKey: v,
        requestId: i
      } = u.payload, a = b.get(v);
      return a && a.delete(i), !0;
    }
    if (e.internalActions.removeQueryResult.match(u))
      return b.delete(u.payload.queryCacheKey), !0;
    if (t.pending.match(u)) {
      const {
        meta: {
          arg: v,
          requestId: i
        }
      } = u, a = rt(b, v.queryCacheKey, it);
      return v.subscribe && a.set(i, v.subscriptionOptions ?? a.get(i) ?? {}), !0;
    }
    let c = !1;
    if (t.rejected.match(u)) {
      const {
        meta: {
          condition: v,
          arg: i,
          requestId: a
        }
      } = u;
      if (v && i.subscribe) {
        const m = rt(b, i.queryCacheKey, it);
        m.set(a, i.subscriptionOptions ?? m.get(a) ?? {}), c = !0;
      }
    }
    return c;
  }, D = () => n.currentSubscriptions, w = {
    getSubscriptions: D,
    getSubscriptionCount: (b) => D().get(b)?.size ?? 0,
    isRequestSubscribed: (b, u) => !!D()?.get(b)?.get(u)
  };
  function A(b) {
    return JSON.parse(JSON.stringify(Object.fromEntries([...b].map(([u, c]) => [u, Object.fromEntries(c)]))));
  }
  return (b, u) => {
    if (d || (d = A(n.currentSubscriptions)), e.util.resetApiState.match(b))
      return d = {}, n.currentSubscriptions.clear(), p = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(b))
      return [!1, w];
    const c = I(n.currentSubscriptions, b);
    let v = !0;
    if (process.env.NODE_ENV === "test" && typeof b.type == "string" && b.type === `${e.reducerPath}/getPolling`)
      return [!1, n.currentPolls];
    if (c) {
      p || (p = setTimeout(() => {
        const m = A(n.currentSubscriptions), [, E] = Gt(d, () => m);
        u.next(e.internalActions.subscriptionsUpdated(E)), d = m, p = null;
      }, 500));
      const i = typeof b.type == "string" && !!b.type.startsWith(s), a = t.rejected.match(b) && b.meta.condition && !!b.meta.arg.subscribe;
      v = !i && !a;
    }
    return [v, !1];
  };
}, Zn = 2147483647 / 1e3 - 1, er = ({
  reducerPath: e,
  api: t,
  queryThunk: n,
  context: r,
  internalState: s,
  selectors: {
    selectQueryEntry: d,
    selectConfig: p
  },
  getRunningQueryThunk: g,
  mwApi: T
}) => {
  const {
    removeQueryResult: I,
    unsubscribeQueryResult: D,
    cacheEntriesUpserted: R
  } = t.internalActions, f = s.runningQueries.get(T.dispatch), w = qe(D.match, n.fulfilled, n.rejected, R.match);
  function A(i) {
    const a = s.currentSubscriptions.get(i);
    if (!a)
      return !1;
    const m = a.size > 0, E = f?.[i] !== void 0;
    return m || E;
  }
  const b = {}, u = (i, a, m) => {
    const E = a.getState(), P = p(E);
    if (w(i)) {
      let O;
      if (R.match(i))
        O = i.payload.map((S) => S.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: S
        } = D.match(i) ? i.payload : i.meta.arg;
        O = [S];
      }
      c(O, a, P);
    }
    if (t.util.resetApiState.match(i))
      for (const [O, S] of Object.entries(b))
        S && clearTimeout(S), delete b[O];
    if (r.hasRehydrationInfo(i)) {
      const {
        queries: O
      } = r.extractRehydrationInfo(i);
      c(Object.keys(O), a, P);
    }
  };
  function c(i, a, m) {
    const E = a.getState();
    for (const P of i) {
      const O = d(E, P);
      O?.endpointName && v(P, O.endpointName, a, m);
    }
  }
  function v(i, a, m, E) {
    const O = r.endpointDefinitions[a]?.keepUnusedDataFor ?? E.keepUnusedDataFor;
    if (O === 1 / 0)
      return;
    const S = Math.max(0, Math.min(O, Zn));
    if (!A(i)) {
      const y = b[i];
      y && clearTimeout(y), b[i] = setTimeout(() => {
        if (!A(i)) {
          const o = d(m.getState(), i);
          o?.endpointName && m.dispatch(g(o.endpointName, o.originalArgs))?.abort(), m.dispatch(I({
            queryCacheKey: i
          }));
        }
        delete b[i];
      }, S * 1e3);
    }
  }
  return u;
}, xt = new Error("Promise never resolved before cacheEntryRemoved."), tr = ({
  api: e,
  reducerPath: t,
  context: n,
  queryThunk: r,
  mutationThunk: s,
  internalState: d,
  selectors: {
    selectQueryEntry: p,
    selectApiState: g
  }
}) => {
  const T = bt(r), I = bt(s), D = oe(r, s), R = {};
  function f(c, v, i) {
    const a = R[c];
    a?.valueResolved && (a.valueResolved({
      data: v,
      meta: i
    }), delete a.valueResolved);
  }
  function w(c) {
    const v = R[c];
    v && (delete R[c], v.cacheEntryRemoved());
  }
  const A = (c, v, i) => {
    const a = b(c);
    function m(E, P, O, S) {
      const y = p(i, P), o = p(v.getState(), P);
      !y && o && u(E, S, P, v, O);
    }
    if (r.pending.match(c))
      m(c.meta.arg.endpointName, a, c.meta.requestId, c.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(c))
      for (const {
        queryDescription: E,
        value: P
      } of c.payload) {
        const {
          endpointName: O,
          originalArgs: S,
          queryCacheKey: y
        } = E;
        m(O, y, c.meta.requestId, S), f(y, P, {});
      }
    else if (s.pending.match(c))
      v.getState()[t].mutations[a] && u(c.meta.arg.endpointName, c.meta.arg.originalArgs, a, v, c.meta.requestId);
    else if (D(c))
      f(a, c.payload, c.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(c) || e.internalActions.removeMutationResult.match(c))
      w(a);
    else if (e.util.resetApiState.match(c))
      for (const E of Object.keys(R))
        w(E);
  };
  function b(c) {
    return T(c) ? c.meta.arg.queryCacheKey : I(c) ? c.meta.arg.fixedCacheKey ?? c.meta.requestId : e.internalActions.removeQueryResult.match(c) ? c.payload.queryCacheKey : e.internalActions.removeMutationResult.match(c) ? Ae(c.payload) : "";
  }
  function u(c, v, i, a, m) {
    const E = n.endpointDefinitions[c], P = E?.onCacheEntryAdded;
    if (!P) return;
    const O = {}, S = new Promise((N) => {
      O.cacheEntryRemoved = N;
    }), y = Promise.race([new Promise((N) => {
      O.valueResolved = N;
    }), S.then(() => {
      throw xt;
    })]);
    y.catch(() => {
    }), R[i] = O;
    const o = e.endpoints[c].select(ze(E) ? v : i), l = a.dispatch((N, q, z) => z), h = {
      ...a,
      getCacheEntry: () => o(a.getState()),
      requestId: m,
      extra: l,
      updateCachedData: ze(E) ? (N) => a.dispatch(e.util.updateQueryData(c, v, N)) : void 0,
      cacheDataLoaded: y,
      cacheEntryRemoved: S
    }, _ = P(v, h);
    Promise.resolve(_).catch((N) => {
      if (N !== xt)
        throw N;
    });
  }
  return A;
}, nr = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: n
}) => (r, s) => {
  e.util.resetApiState.match(r) && s.dispatch(e.internalActions.middlewareRegistered(t)), typeof process < "u" && process.env.NODE_ENV === "development" && e.internalActions.middlewareRegistered.match(r) && r.payload === t && s.getState()[n]?.config?.middlewareRegistered === "conflict" && console.warn(`There is a mismatch between slice and middleware for the reducerPath "${n}".
You can only have one api per reducer path, this will lead to crashes in various situations!${n === "api" ? `
If you have multiple apis, you *have* to specify the reducerPath option when using createApi!` : ""}`);
}, rr = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: n
  },
  mutationThunk: r,
  queryThunk: s,
  api: d,
  assertTagType: p,
  refetchQuery: g,
  internalState: T
}) => {
  const {
    removeQueryResult: I
  } = d.internalActions, D = qe(oe(r), ut(r)), R = qe(oe(r, s), lt(r, s));
  let f = [];
  const w = (u, c) => {
    D(u) ? b(tn(u, "invalidatesTags", n, p), c) : R(u) ? b([], c) : d.util.invalidateTags.match(u) && b(mt(u.payload, void 0, void 0, void 0, void 0, p), c);
  };
  function A(u) {
    const {
      queries: c,
      mutations: v
    } = u;
    for (const i of [c, v])
      for (const a in i)
        if (i[a]?.status === "pending") return !0;
    return !1;
  }
  function b(u, c) {
    const v = c.getState(), i = v[e];
    if (f.push(...u), i.config.invalidationBehavior === "delayed" && A(i))
      return;
    const a = f;
    if (f = [], a.length === 0) return;
    const m = d.util.selectInvalidatedBy(v, a);
    t.batch(() => {
      const E = Array.from(m.values());
      for (const {
        queryCacheKey: P
      } of E) {
        const O = i.queries[P], S = rt(T.currentSubscriptions, P, it);
        O && (S.size === 0 ? c.dispatch(I({
          queryCacheKey: P
        })) : O.status !== "uninitialized" && c.dispatch(g(O)));
      }
    });
  }
  return w;
}, ir = ({
  reducerPath: e,
  queryThunk: t,
  api: n,
  refetchQuery: r,
  internalState: s
}) => {
  const {
    currentPolls: d,
    currentSubscriptions: p
  } = s, g = /* @__PURE__ */ new Set();
  let T = null;
  const I = (u, c) => {
    (n.internalActions.updateSubscriptionOptions.match(u) || n.internalActions.unsubscribeQueryResult.match(u)) && D(u.payload.queryCacheKey, c), (t.pending.match(u) || t.rejected.match(u) && u.meta.condition) && D(u.meta.arg.queryCacheKey, c), (t.fulfilled.match(u) || t.rejected.match(u) && !u.meta.condition) && R(u.meta.arg, c), n.util.resetApiState.match(u) && (A(), T && (clearTimeout(T), T = null), g.clear());
  };
  function D(u, c) {
    g.add(u), T || (T = setTimeout(() => {
      for (const v of g)
        f({
          queryCacheKey: v
        }, c);
      g.clear(), T = null;
    }, 0));
  }
  function R({
    queryCacheKey: u
  }, c) {
    const v = c.getState()[e], i = v.queries[u], a = p.get(u);
    if (!i || i.status === "uninitialized") return;
    const {
      lowestPollingInterval: m,
      skipPollingIfUnfocused: E
    } = b(a);
    if (!Number.isFinite(m)) return;
    const P = d.get(u);
    P?.timeout && (clearTimeout(P.timeout), P.timeout = void 0);
    const O = Date.now() + m;
    d.set(u, {
      nextPollTimestamp: O,
      pollingInterval: m,
      timeout: setTimeout(() => {
        (v.config.focused || !E) && c.dispatch(r(i)), R({
          queryCacheKey: u
        }, c);
      }, m)
    });
  }
  function f({
    queryCacheKey: u
  }, c) {
    const i = c.getState()[e].queries[u], a = p.get(u);
    if (!i || i.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: m
    } = b(a);
    if (process.env.NODE_ENV === "test") {
      const O = d.pollUpdateCounters ??= {};
      O[u] ??= 0, O[u]++;
    }
    if (!Number.isFinite(m)) {
      w(u);
      return;
    }
    const E = d.get(u), P = Date.now() + m;
    (!E || P < E.nextPollTimestamp) && R({
      queryCacheKey: u
    }, c);
  }
  function w(u) {
    const c = d.get(u);
    c?.timeout && clearTimeout(c.timeout), d.delete(u);
  }
  function A() {
    for (const u of d.keys())
      w(u);
  }
  function b(u = /* @__PURE__ */ new Map()) {
    let c = !1, v = Number.POSITIVE_INFINITY;
    for (const i of u.values())
      i.pollingInterval && (v = Math.min(i.pollingInterval, v), c = i.skipPollingIfUnfocused || c);
    return {
      lowestPollingInterval: v,
      skipPollingIfUnfocused: c
    };
  }
  return I;
}, sr = ({
  api: e,
  context: t,
  queryThunk: n,
  mutationThunk: r
}) => {
  const s = Vt(n, r), d = lt(n, r), p = oe(n, r), g = {};
  return (I, D) => {
    if (s(I)) {
      const {
        requestId: R,
        arg: {
          endpointName: f,
          originalArgs: w
        }
      } = I.meta, A = t.endpointDefinitions[f], b = A?.onQueryStarted;
      if (b) {
        const u = {}, c = new Promise((m, E) => {
          u.resolve = m, u.reject = E;
        });
        c.catch(() => {
        }), g[R] = u;
        const v = e.endpoints[f].select(ze(A) ? w : R), i = D.dispatch((m, E, P) => P), a = {
          ...D,
          getCacheEntry: () => v(D.getState()),
          requestId: R,
          extra: i,
          updateCachedData: ze(A) ? (m) => D.dispatch(e.util.updateQueryData(f, w, m)) : void 0,
          queryFulfilled: c
        };
        b(w, a);
      }
    } else if (p(I)) {
      const {
        requestId: R,
        baseQueryMeta: f
      } = I.meta;
      g[R]?.resolve({
        data: I.payload,
        meta: f
      }), delete g[R];
    } else if (d(I)) {
      const {
        requestId: R,
        rejectedWithValue: f,
        baseQueryMeta: w
      } = I.meta;
      g[R]?.reject({
        error: I.payload ?? I.error,
        isUnhandledError: !f,
        meta: w
      }), delete g[R];
    }
  };
}, or = ({
  reducerPath: e,
  context: t,
  api: n,
  refetchQuery: r,
  internalState: s
}) => {
  const {
    removeQueryResult: d
  } = n.internalActions, p = (T, I) => {
    $e.match(T) && g(I, "refetchOnFocus"), Ue.match(T) && g(I, "refetchOnReconnect");
  };
  function g(T, I) {
    const D = T.getState()[e], R = D.queries, f = s.currentSubscriptions;
    t.batch(() => {
      for (const w of f.keys()) {
        const A = R[w], b = f.get(w);
        if (!b || !A) continue;
        const u = [...b.values()];
        (u.some((v) => v[I] === !0) || u.every((v) => v[I] === void 0) && D.config[I]) && (b.size === 0 ? T.dispatch(d({
          queryCacheKey: w
        })) : A.status !== "uninitialized" && T.dispatch(r(A)));
      }
    });
  }
  return p;
};
function ar(e) {
  const {
    reducerPath: t,
    queryThunk: n,
    api: r,
    context: s,
    internalState: d
  } = e, {
    apiUid: p
  } = s, g = {
    invalidateTags: ye(`${t}/invalidateTags`)
  }, T = (f) => f.type.startsWith(`${t}/`), I = [nr, er, rr, ir, tr, sr];
  return {
    middleware: (f) => {
      let w = !1;
      const A = {
        ...e,
        internalState: d,
        refetchQuery: R,
        isThisApiSliceAction: T,
        mwApi: f
      }, b = I.map((v) => v(A)), u = Xn(A), c = or(A);
      return (v) => (i) => {
        if (!an(i))
          return v(i);
        w || (w = !0, f.dispatch(r.internalActions.middlewareRegistered(p)));
        const a = {
          ...f,
          next: v
        }, m = f.getState(), [E, P] = u(i, a, m);
        let O;
        if (E ? O = v(i) : O = P, f.getState()[t] && (c(i, a, m), T(i) || s.hasRehydrationInfo(i)))
          for (const S of b)
            S(i, a, m);
        return O;
      };
    },
    actions: g
  };
  function R(f) {
    return e.api.endpoints[f.endpointName].initiate(f.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var $t = /* @__PURE__ */ Symbol(), cr = ({
  createSelector: e = sn
} = {}) => ({
  name: $t,
  init(t, {
    baseQuery: n,
    tagTypes: r,
    reducerPath: s,
    serializeQueryArgs: d,
    keepUnusedDataFor: p,
    refetchOnMountOrArgChange: g,
    refetchOnFocus: T,
    refetchOnReconnect: I,
    invalidationBehavior: D,
    onSchemaFailure: R,
    catchSchemaFailure: f,
    skipSchemaValidation: w
  }, A) {
    vn();
    const b = (U) => (typeof process < "u" && process.env.NODE_ENV === "development" && (r.includes(U.type) || console.error(`Tag type '${U.type}' was used, but not specified in \`tagTypes\`!`)), U);
    Object.assign(t, {
      reducerPath: s,
      endpoints: {},
      internalActions: {
        onOnline: Ue,
        onOffline: ht,
        onFocus: $e,
        onFocusLost: yt
      },
      util: {}
    });
    const u = Yn({
      serializeQueryArgs: d,
      reducerPath: s,
      createSelector: e
    }), {
      selectInvalidatedBy: c,
      selectCachedArgsForQuery: v,
      buildQuerySelector: i,
      buildInfiniteQuerySelector: a,
      buildMutationSelector: m
    } = u;
    X(t.util, {
      selectInvalidatedBy: c,
      selectCachedArgsForQuery: v
    });
    const {
      queryThunk: E,
      infiniteQueryThunk: P,
      mutationThunk: O,
      patchQueryData: S,
      updateQueryData: y,
      upsertQueryData: o,
      prefetch: l,
      buildMatchThunkActions: h
    } = Hn({
      baseQuery: n,
      reducerPath: s,
      context: A,
      api: t,
      serializeQueryArgs: d,
      assertTagType: b,
      selectors: u,
      onSchemaFailure: R,
      catchSchemaFailure: f,
      skipSchemaValidation: w
    }), {
      reducer: _,
      actions: N
    } = Jn({
      context: A,
      queryThunk: E,
      mutationThunk: O,
      serializeQueryArgs: d,
      reducerPath: s,
      assertTagType: b,
      config: {
        refetchOnFocus: T,
        refetchOnReconnect: I,
        refetchOnMountOrArgChange: g,
        keepUnusedDataFor: p,
        reducerPath: s,
        invalidationBehavior: D
      }
    });
    X(t.util, {
      patchQueryData: S,
      updateQueryData: y,
      upsertQueryData: o,
      prefetch: l,
      resetApiState: N.resetApiState,
      upsertQueryEntries: N.cacheEntriesUpserted
    }), X(t.internalActions, N);
    const q = {
      currentSubscriptions: /* @__PURE__ */ new Map(),
      currentPolls: /* @__PURE__ */ new Map(),
      runningQueries: /* @__PURE__ */ new Map(),
      runningMutations: /* @__PURE__ */ new Map()
    }, {
      buildInitiateQuery: z,
      buildInitiateInfiniteQuery: Q,
      buildInitiateMutation: C,
      getRunningMutationThunk: F,
      getRunningMutationsThunk: K,
      getRunningQueriesThunk: L,
      getRunningQueryThunk: $
    } = Bn({
      queryThunk: E,
      mutationThunk: O,
      infiniteQueryThunk: P,
      api: t,
      serializeQueryArgs: d,
      context: A,
      internalState: q
    });
    X(t.util, {
      getRunningMutationThunk: F,
      getRunningMutationsThunk: K,
      getRunningQueryThunk: $,
      getRunningQueriesThunk: L
    });
    const {
      middleware: j,
      actions: x
    } = ar({
      reducerPath: s,
      context: A,
      queryThunk: E,
      mutationThunk: O,
      infiniteQueryThunk: P,
      api: t,
      assertTagType: b,
      selectors: u,
      getRunningQueryThunk: $,
      internalState: q
    });
    return X(t.util, x), X(t, {
      reducer: _,
      middleware: j
    }), {
      name: $t,
      injectEndpoint(U, V) {
        const k = t, M = k.endpoints[U] ??= {};
        Ke(V) && X(M, {
          name: U,
          select: i(U, V),
          initiate: z(U, V)
        }, h(E, U)), Vn(V) && X(M, {
          name: U,
          select: m(),
          initiate: C(U)
        }, h(O, U)), Ie(V) && X(M, {
          name: U,
          select: a(U, V),
          initiate: Q(U, V)
        }, h(E, U));
      }
    };
  }
});
cr();
export {
  qn as Q,
  Cn as a,
  Gn as b,
  cr as c,
  Ye as d,
  Xt as e,
  lr as f,
  fr as s
};
//# sourceMappingURL=rtk-query.modern-CjetfYPg.js.map
