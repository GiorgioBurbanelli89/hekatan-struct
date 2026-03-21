let U = Object.getPrototypeOf, wt, le, ot, _t, bn = { isConnected: 1 }, Vr = 1e3, It, Sr = {}, Lr = U(bn), fn = U(U), Q, _n = (n, t, e, r) => (n ?? (setTimeout(e, r), /* @__PURE__ */ new Set())).add(t), wn = (n, t, e) => {
  let r = ot;
  ot = t;
  try {
    return n(e);
  } catch (i) {
    return console.error(i), e;
  } finally {
    ot = r;
  }
}, $t = (n) => n.filter((t) => {
  var _a2;
  return (_a2 = t._dom) == null ? void 0 : _a2.isConnected;
}), gn = (n) => It = _n(It, n, () => {
  for (let t of It) t._bindings = $t(t._bindings), t._listeners = $t(t._listeners);
  It = Q;
}, Vr), Ut = { get val() {
  var _a2;
  return (_a2 = ot == null ? void 0 : ot._getters) == null ? void 0 : _a2.add(this), this.rawVal;
}, get oldVal() {
  var _a2;
  return (_a2 = ot == null ? void 0 : ot._getters) == null ? void 0 : _a2.add(this), this._oldVal;
}, set val(n) {
  var _a2;
  (_a2 = ot == null ? void 0 : ot._setters) == null ? void 0 : _a2.add(this), n !== this.rawVal && (this.rawVal = n, this._bindings.length + this._listeners.length ? (le == null ? void 0 : le.add(this), wt = _n(wt, this, Mr)) : this._oldVal = n);
} }, Cn = (n) => ({ __proto__: Ut, rawVal: n, _oldVal: n, _bindings: [], _listeners: [] }), gt = (n, t) => {
  let e = { _getters: /* @__PURE__ */ new Set(), _setters: /* @__PURE__ */ new Set() }, r = { f: n }, i = _t;
  _t = [];
  let s = wn(n, e, t);
  s = (s ?? document).nodeType ? s : new Text(s);
  for (let o of e._getters) e._setters.has(o) || (gn(o), o._bindings.push(r));
  for (let o of _t) o._dom = s;
  return _t = i, r._dom = s;
}, be = (n, t = Cn(), e) => {
  let r = { _getters: /* @__PURE__ */ new Set(), _setters: /* @__PURE__ */ new Set() }, i = { f: n, s: t };
  i._dom = e ?? (_t == null ? void 0 : _t.push(i)) ?? bn, t.val = wn(n, r, t.rawVal);
  for (let s of r._getters) r._setters.has(s) || (gn(s), s._listeners.push(i));
  return t;
}, xn = (n, ...t) => {
  for (let e of t.flat(1 / 0)) {
    let r = U(e ?? 0), i = r === Ut ? gt(() => e.val) : r === fn ? gt(e) : e;
    i != Q && n.append(i);
  }
  return n;
}, yn = (n, t, ...e) => {
  var _a2;
  let [r, ...i] = U(e[0] ?? 0) === Lr ? e : [{}, ...e], s = n ? document.createElementNS(n, t) : document.createElement(t);
  for (let [o, a] of Object.entries(r)) {
    let l = (T) => T ? Object.getOwnPropertyDescriptor(T, o) ?? l(U(T)) : Q, p = t + "," + o, c = Sr[p] ?? (Sr[p] = ((_a2 = l(U(s))) == null ? void 0 : _a2.set) ?? 0), d = o.startsWith("on") ? (T, Y) => {
      let W = o.slice(2);
      s.removeEventListener(W, Y), s.addEventListener(W, T);
    } : c ? c.bind(s) : s.setAttribute.bind(s, o), k = U(a ?? 0);
    o.startsWith("on") || k === fn && (a = be(a), k = Ut), k === Ut ? gt(() => (d(a.val, a._oldVal), s)) : d(a);
  }
  return xn(s, i);
}, $e = (n) => ({ get: (t, e) => yn.bind(Q, n, e) }), Pn = (n, t) => t ? t !== n && n.replaceWith(t) : n.remove(), Mr = () => {
  let n = 0, t = [...wt].filter((r) => r.rawVal !== r._oldVal);
  do {
    le = /* @__PURE__ */ new Set();
    for (let r of new Set(t.flatMap((i) => i._listeners = $t(i._listeners)))) be(r.f, r.s, r._dom), r._dom = Q;
  } while (++n < 100 && (t = [...le]).length);
  let e = [...wt].filter((r) => r.rawVal !== r._oldVal);
  wt = Q;
  for (let r of new Set(e.flatMap((i) => i._bindings = $t(i._bindings)))) Pn(r._dom, gt(r.f, r._dom)), r._dom = Q;
  for (let r of e) r._oldVal = r.rawVal;
};
const rl = { tags: new Proxy((n) => new Proxy(yn, $e(n)), $e()), hydrate: (n, t) => Pn(n, gt(t, n)), add: xn, state: Cn, derive: be };
/*! Tweakpane 4.0.4 (c) 2016 cocopon, licensed under the MIT license. */
function b(n) {
  return n == null;
}
function fe(n) {
  return n !== null && typeof n == "object";
}
function pe(n) {
  return n !== null && typeof n == "object";
}
function Ar(n, t) {
  if (n.length !== t.length) return false;
  for (let e = 0; e < n.length; e++) if (n[e] !== t[e]) return false;
  return true;
}
function J(n, t) {
  return Array.from(/* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(t)])).reduce((r, i) => {
    const s = n[i], o = t[i];
    return pe(s) && pe(o) ? Object.assign(Object.assign({}, r), { [i]: J(s, o) }) : Object.assign(Object.assign({}, r), { [i]: i in t ? o : s });
  }, {});
}
function _e(n) {
  return fe(n) ? "target" in n : false;
}
const Or = { alreadydisposed: () => "View has been already disposed", invalidparams: (n) => `Invalid parameters for '${n.name}'`, nomatchingcontroller: (n) => `No matching controller for '${n.key}'`, nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`, notbindable: () => "Value is not bindable", notcompatible: (n) => `Not compatible with  plugin '${n.id}'`, propertynotfound: (n) => `Property '${n.name}' not found`, shouldneverhappen: () => "This error should never happen" };
class w {
  static alreadyDisposed() {
    return new w({ type: "alreadydisposed" });
  }
  static notBindable() {
    return new w({ type: "notbindable" });
  }
  static notCompatible(t, e) {
    return new w({ type: "notcompatible", context: { id: `${t}.${e}` } });
  }
  static propertyNotFound(t) {
    return new w({ type: "propertynotfound", context: { name: t } });
  }
  static shouldNeverHappen() {
    return new w({ type: "shouldneverhappen" });
  }
  constructor(t) {
    var e;
    this.message = (e = Or[t.type](t.context)) !== null && e !== void 0 ? e : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = t.type;
  }
  toString() {
    return this.message;
  }
}
class Ht {
  constructor(t, e) {
    this.obj_ = t, this.key = e;
  }
  static isBindable(t) {
    return !(t === null || typeof t != "object" && typeof t != "function");
  }
  read() {
    return this.obj_[this.key];
  }
  write(t) {
    this.obj_[this.key] = t;
  }
  writeProperty(t, e) {
    const r = this.read();
    if (!Ht.isBindable(r)) throw w.notBindable();
    if (!(t in r)) throw w.propertyNotFound(t);
    r[t] = e;
  }
}
class g {
  constructor() {
    this.observers_ = {};
  }
  on(t, e, r) {
    var i;
    let s = this.observers_[t];
    return s || (s = this.observers_[t] = []), s.push({ handler: e, key: (i = r == null ? void 0 : r.key) !== null && i !== void 0 ? i : e }), this;
  }
  off(t, e) {
    const r = this.observers_[t];
    return r && (this.observers_[t] = r.filter((i) => i.key !== e)), this;
  }
  emit(t, e) {
    const r = this.observers_[t];
    r && r.forEach((i) => {
      i.handler(e);
    });
  }
}
class Dr {
  constructor(t, e) {
    var r;
    this.constraint_ = e == null ? void 0 : e.constraint, this.equals_ = (r = e == null ? void 0 : e.equals) !== null && r !== void 0 ? r : (i, s) => i === s, this.emitter = new g(), this.rawValue_ = t;
  }
  get constraint() {
    return this.constraint_;
  }
  get rawValue() {
    return this.rawValue_;
  }
  set rawValue(t) {
    this.setRawValue(t, { forceEmit: false, last: true });
  }
  setRawValue(t, e) {
    const r = e ?? { forceEmit: false, last: true }, i = this.constraint_ ? this.constraint_.constrain(t) : t, s = this.rawValue_;
    this.equals_(s, i) && !r.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.rawValue_ = i, this.emitter.emit("change", { options: r, previousRawValue: s, rawValue: i, sender: this }));
  }
}
class Tr {
  constructor(t) {
    this.emitter = new g(), this.value_ = t;
  }
  get rawValue() {
    return this.value_;
  }
  set rawValue(t) {
    this.setRawValue(t, { forceEmit: false, last: true });
  }
  setRawValue(t, e) {
    const r = e ?? { forceEmit: false, last: true }, i = this.value_;
    i === t && !r.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.value_ = t, this.emitter.emit("change", { options: r, previousRawValue: i, rawValue: this.value_, sender: this }));
  }
}
class jr {
  constructor(t) {
    this.emitter = new g(), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.value_ = t, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_);
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  onValueBeforeChange_(t) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), { sender: this }));
  }
  onValueChange_(t) {
    this.emitter.emit("change", Object.assign(Object.assign({}, t), { sender: this }));
  }
}
function f(n, t) {
  const e = t == null ? void 0 : t.constraint, r = t == null ? void 0 : t.equals;
  return !e && !r ? new Tr(n) : new Dr(n, t);
}
function Rr(n) {
  return [new jr(n), (t, e) => {
    n.setRawValue(t, e);
  }];
}
class u {
  constructor(t) {
    this.emitter = new g(), this.valMap_ = t;
    for (const e in this.valMap_) this.valMap_[e].emitter.on("change", () => {
      this.emitter.emit("change", { key: e, sender: this });
    });
  }
  static createCore(t) {
    return Object.keys(t).reduce((r, i) => Object.assign(r, { [i]: f(t[i]) }), {});
  }
  static fromObject(t) {
    const e = this.createCore(t);
    return new u(e);
  }
  get(t) {
    return this.valMap_[t].rawValue;
  }
  set(t, e) {
    this.valMap_[t].rawValue = e;
  }
  value(t) {
    return this.valMap_[t];
  }
}
class St {
  constructor(t) {
    this.values = u.fromObject({ max: t.max, min: t.min });
  }
  constrain(t) {
    const e = this.values.get("max"), r = this.values.get("min");
    return Math.min(Math.max(t, r), e);
  }
}
class Br {
  constructor(t) {
    this.values = u.fromObject({ max: t.max, min: t.min });
  }
  constrain(t) {
    const e = this.values.get("max"), r = this.values.get("min");
    let i = t;
    return b(r) || (i = Math.max(i, r)), b(e) || (i = Math.min(i, e)), i;
  }
}
class Ir {
  constructor(t, e = 0) {
    this.step = t, this.origin = e;
  }
  constrain(t) {
    const e = this.origin % this.step, r = Math.round((t - e) / this.step);
    return e + r * this.step;
  }
}
class Nr {
  constructor(t) {
    this.text = t;
  }
  evaluate() {
    return Number(this.text);
  }
  toString() {
    return this.text;
  }
}
const Fr = { "**": (n, t) => Math.pow(n, t), "*": (n, t) => n * t, "/": (n, t) => n / t, "%": (n, t) => n % t, "+": (n, t) => n + t, "-": (n, t) => n - t, "<<": (n, t) => n << t, ">>": (n, t) => n >> t, ">>>": (n, t) => n >>> t, "&": (n, t) => n & t, "^": (n, t) => n ^ t, "|": (n, t) => n | t };
class Kr {
  constructor(t, e, r) {
    this.left = e, this.operator = t, this.right = r;
  }
  evaluate() {
    const t = Fr[this.operator];
    if (!t) throw new Error(`unexpected binary operator: '${this.operator}`);
    return t(this.left.evaluate(), this.right.evaluate());
  }
  toString() {
    return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ");
  }
}
const zr = { "+": (n) => n, "-": (n) => -n, "~": (n) => ~n };
class $r {
  constructor(t, e) {
    this.operator = t, this.expression = e;
  }
  evaluate() {
    const t = zr[this.operator];
    if (!t) throw new Error(`unexpected unary operator: '${this.operator}`);
    return t(this.expression.evaluate());
  }
  toString() {
    return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
  }
}
function we(n) {
  return (t, e) => {
    for (let r = 0; r < n.length; r++) {
      const i = n[r](t, e);
      if (i !== "") return i;
    }
    return "";
  };
}
function Ct(n, t) {
  var e;
  const r = n.substr(t).match(/^\s+/);
  return (e = r && r[0]) !== null && e !== void 0 ? e : "";
}
function Ur(n, t) {
  const e = n.substr(t, 1);
  return e.match(/^[1-9]$/) ? e : "";
}
function xt(n, t) {
  var e;
  const r = n.substr(t).match(/^[0-9]+/);
  return (e = r && r[0]) !== null && e !== void 0 ? e : "";
}
function Hr(n, t) {
  const e = xt(n, t);
  if (e !== "") return e;
  const r = n.substr(t, 1);
  if (t += 1, r !== "-" && r !== "+") return "";
  const i = xt(n, t);
  return i === "" ? "" : r + i;
}
function ge(n, t) {
  const e = n.substr(t, 1);
  if (t += 1, e.toLowerCase() !== "e") return "";
  const r = Hr(n, t);
  return r === "" ? "" : e + r;
}
function En(n, t) {
  const e = n.substr(t, 1);
  if (e === "0") return e;
  const r = Ur(n, t);
  return t += r.length, r === "" ? "" : r + xt(n, t);
}
function qr(n, t) {
  const e = En(n, t);
  if (t += e.length, e === "") return "";
  const r = n.substr(t, 1);
  if (t += r.length, r !== ".") return "";
  const i = xt(n, t);
  return t += i.length, e + r + i + ge(n, t);
}
function Gr(n, t) {
  const e = n.substr(t, 1);
  if (t += e.length, e !== ".") return "";
  const r = xt(n, t);
  return t += r.length, r === "" ? "" : e + r + ge(n, t);
}
function Yr(n, t) {
  const e = En(n, t);
  return t += e.length, e === "" ? "" : e + ge(n, t);
}
const Wr = we([qr, Gr, Yr]);
function Xr(n, t) {
  var e;
  const r = n.substr(t).match(/^[01]+/);
  return (e = r && r[0]) !== null && e !== void 0 ? e : "";
}
function Qr(n, t) {
  const e = n.substr(t, 2);
  if (t += e.length, e.toLowerCase() !== "0b") return "";
  const r = Xr(n, t);
  return r === "" ? "" : e + r;
}
function Zr(n, t) {
  var e;
  const r = n.substr(t).match(/^[0-7]+/);
  return (e = r && r[0]) !== null && e !== void 0 ? e : "";
}
function Jr(n, t) {
  const e = n.substr(t, 2);
  if (t += e.length, e.toLowerCase() !== "0o") return "";
  const r = Zr(n, t);
  return r === "" ? "" : e + r;
}
function ti(n, t) {
  var e;
  const r = n.substr(t).match(/^[0-9a-f]+/i);
  return (e = r && r[0]) !== null && e !== void 0 ? e : "";
}
function ei(n, t) {
  const e = n.substr(t, 2);
  if (t += e.length, e.toLowerCase() !== "0x") return "";
  const r = ti(n, t);
  return r === "" ? "" : e + r;
}
const ni = we([Qr, Jr, ei]), ri = we([ni, Wr]);
function ii(n, t) {
  const e = ri(n, t);
  return t += e.length, e === "" ? null : { evaluable: new Nr(e), cursor: t };
}
function si(n, t) {
  const e = n.substr(t, 1);
  if (t += e.length, e !== "(") return null;
  const r = Vn(n, t);
  if (!r) return null;
  t = r.cursor, t += Ct(n, t).length;
  const i = n.substr(t, 1);
  return t += i.length, i !== ")" ? null : { evaluable: r.evaluable, cursor: t };
}
function oi(n, t) {
  var e;
  return (e = ii(n, t)) !== null && e !== void 0 ? e : si(n, t);
}
function kn(n, t) {
  const e = oi(n, t);
  if (e) return e;
  const r = n.substr(t, 1);
  if (t += r.length, r !== "+" && r !== "-" && r !== "~") return null;
  const i = kn(n, t);
  return i ? (t = i.cursor, { cursor: t, evaluable: new $r(r, i.evaluable) }) : null;
}
function ai(n, t, e) {
  e += Ct(t, e).length;
  const r = n.filter((i) => t.startsWith(i, e))[0];
  return r ? (e += r.length, e += Ct(t, e).length, { cursor: e, operator: r }) : null;
}
function li(n, t) {
  return (e, r) => {
    const i = n(e, r);
    if (!i) return null;
    r = i.cursor;
    let s = i.evaluable;
    for (; ; ) {
      const o = ai(t, e, r);
      if (!o) break;
      r = o.cursor;
      const a = n(e, r);
      if (!a) return null;
      r = a.cursor, s = new Kr(o.operator, s, a.evaluable);
    }
    return s ? { cursor: r, evaluable: s } : null;
  };
}
const pi = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce((n, t) => li(n, t), kn);
function Vn(n, t) {
  return t += Ct(n, t).length, pi(n, t);
}
function ci(n) {
  const t = Vn(n, 0);
  return !t || t.cursor + Ct(n, t.cursor).length !== n.length ? null : t.evaluable;
}
function I(n) {
  var t;
  const e = ci(n);
  return (t = e == null ? void 0 : e.evaluate()) !== null && t !== void 0 ? t : null;
}
function Sn(n) {
  if (typeof n == "number") return n;
  if (typeof n == "string") {
    const t = I(n);
    if (!b(t)) return t;
  }
  return 0;
}
function di(n) {
  return String(n);
}
function E(n) {
  return (t) => t.toFixed(Math.max(Math.min(n, 20), 0));
}
function m(n, t, e, r, i) {
  const s = (n - t) / (e - t);
  return r + s * (i - r);
}
function Ue(n) {
  return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
}
function C(n, t, e) {
  return Math.min(Math.max(n, t), e);
}
function Ln(n, t) {
  return (n % t + t) % t;
}
function ui(n, t) {
  return b(n.step) ? Math.max(Ue(t), 2) : Ue(n.step);
}
function Mn(n) {
  var t;
  return (t = n.step) !== null && t !== void 0 ? t : 1;
}
function An(n, t) {
  var e;
  const r = Math.abs((e = n.step) !== null && e !== void 0 ? e : t);
  return r === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(r)) - 1);
}
function On(n, t) {
  return b(n.step) ? null : new Ir(n.step, t);
}
function Dn(n) {
  return !b(n.max) && !b(n.min) ? new St({ max: n.max, min: n.min }) : !b(n.max) || !b(n.min) ? new Br({ max: n.max, min: n.min }) : null;
}
function Tn(n, t) {
  var e, r, i;
  return { formatter: (e = n.format) !== null && e !== void 0 ? e : E(ui(n, t)), keyScale: (r = n.keyScale) !== null && r !== void 0 ? r : Mn(n), pointerScale: (i = n.pointerScale) !== null && i !== void 0 ? i : An(n, t) };
}
function jn(n) {
  return { format: n.optional.function, keyScale: n.optional.number, max: n.optional.number, min: n.optional.number, pointerScale: n.optional.number, step: n.optional.number };
}
function Ce(n) {
  return { constraint: n.constraint, textProps: u.fromObject(Tn(n.params, n.initialValue)) };
}
class nt {
  constructor(t) {
    this.controller = t;
  }
  get element() {
    return this.controller.view.element;
  }
  get disabled() {
    return this.controller.viewProps.get("disabled");
  }
  set disabled(t) {
    this.controller.viewProps.set("disabled", t);
  }
  get hidden() {
    return this.controller.viewProps.get("hidden");
  }
  set hidden(t) {
    this.controller.viewProps.set("hidden", t);
  }
  dispose() {
    this.controller.viewProps.set("disposed", true);
  }
  importState(t) {
    return this.controller.importState(t);
  }
  exportState() {
    return this.controller.exportState();
  }
}
class Xt {
  constructor(t) {
    this.target = t;
  }
}
class Lt extends Xt {
  constructor(t, e, r) {
    super(t), this.value = e, this.last = r ?? true;
  }
}
class hi extends Xt {
  constructor(t, e) {
    super(t), this.expanded = e;
  }
}
class vi extends Xt {
  constructor(t, e) {
    super(t), this.index = e;
  }
}
class mi extends Xt {
  constructor(t, e) {
    super(t), this.native = e;
  }
}
class yt extends nt {
  constructor(t) {
    super(t), this.onValueChange_ = this.onValueChange_.bind(this), this.emitter_ = new g(), this.controller.value.emitter.on("change", this.onValueChange_);
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(t) {
    this.controller.labelController.props.set("label", t);
  }
  get key() {
    return this.controller.value.binding.target.key;
  }
  get tag() {
    return this.controller.tag;
  }
  set tag(t) {
    this.controller.tag = t;
  }
  on(t, e) {
    const r = e.bind(this);
    return this.emitter_.on(t, (i) => {
      r(i);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  refresh() {
    this.controller.value.fetch();
  }
  onValueChange_(t) {
    const e = this.controller.value;
    this.emitter_.emit("change", new Lt(this, e.binding.target.read(), t.options.last));
  }
}
class bi {
  constructor(t, e) {
    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.binding = e, this.value_ = t, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_), this.emitter = new g();
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(t) {
    this.value_.rawValue = t;
  }
  setRawValue(t, e) {
    this.value_.setRawValue(t, e);
  }
  fetch() {
    this.value_.rawValue = this.binding.read();
  }
  push() {
    this.binding.write(this.value_.rawValue);
  }
  onValueBeforeChange_(t) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), { sender: this }));
  }
  onValueChange_(t) {
    this.push(), this.emitter.emit("change", Object.assign(Object.assign({}, t), { sender: this }));
  }
}
function fi(n) {
  if (!("binding" in n)) return false;
  const t = n.binding;
  return _e(t) && "read" in t && "write" in t;
}
function _i(n, t) {
  const r = Object.keys(t).reduce((i, s) => {
    if (i === void 0) return;
    const o = t[s], a = o(n[s]);
    return a.succeeded ? Object.assign(Object.assign({}, i), { [s]: a.value }) : void 0;
  }, {});
  return r;
}
function wi(n, t) {
  return n.reduce((e, r) => {
    if (e === void 0) return;
    const i = t(r);
    if (!(!i.succeeded || i.value === void 0)) return [...e, i.value];
  }, []);
}
function gi(n) {
  return n === null ? false : typeof n == "object";
}
function j(n) {
  return (t) => (e) => {
    if (!t && e === void 0) return { succeeded: false, value: void 0 };
    if (t && e === void 0) return { succeeded: true, value: void 0 };
    const r = n(e);
    return r !== void 0 ? { succeeded: true, value: r } : { succeeded: false, value: void 0 };
  };
}
function He(n) {
  return { custom: (t) => j(t)(n), boolean: j((t) => typeof t == "boolean" ? t : void 0)(n), number: j((t) => typeof t == "number" ? t : void 0)(n), string: j((t) => typeof t == "string" ? t : void 0)(n), function: j((t) => typeof t == "function" ? t : void 0)(n), constant: (t) => j((e) => e === t ? t : void 0)(n), raw: j((t) => t)(n), object: (t) => j((e) => {
    if (gi(e)) return _i(e, t);
  })(n), array: (t) => j((e) => {
    if (Array.isArray(e)) return wi(e, t);
  })(n) };
}
const ce = { optional: He(true), required: He(false) };
function _(n, t) {
  const e = t(ce), r = ce.required.object(e)(n);
  return r.succeeded ? r.value : void 0;
}
function V(n, t, e, r) {
  if (t && !t(n)) return false;
  const i = _(n, e);
  return i ? r(i) : false;
}
function S(n, t) {
  var e;
  return J((e = n == null ? void 0 : n()) !== null && e !== void 0 ? e : {}, t);
}
function Z(n) {
  return "value" in n;
}
function Rn(n) {
  if (!fe(n) || !("binding" in n)) return false;
  const t = n.binding;
  return _e(t);
}
const A = "http://www.w3.org/2000/svg";
function qt(n) {
  n.offsetHeight;
}
function Ci(n, t) {
  const e = n.style.transition;
  n.style.transition = "none", t(), n.style.transition = e;
}
function xe(n) {
  return n.ontouchstart !== void 0;
}
function xi() {
  return globalThis;
}
function yi() {
  return xi().document;
}
function Pi(n) {
  const t = n.ownerDocument.defaultView;
  return t && "document" in t ? n.getContext("2d", { willReadFrequently: true }) : null;
}
const Ei = { check: '<path d="M2 8l4 4l8 -8"/>', dropdown: '<path d="M5 7h6l-3 3 z"/>', p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>' };
function Qt(n, t) {
  const e = n.createElementNS(A, "svg");
  return e.innerHTML = Ei[t], e;
}
function Bn(n, t, e) {
  n.insertBefore(t, n.children[e]);
}
function ye(n) {
  n.parentElement && n.parentElement.removeChild(n);
}
function In(n) {
  for (; n.children.length > 0; ) n.removeChild(n.children[0]);
}
function ki(n) {
  for (; n.childNodes.length > 0; ) n.removeChild(n.childNodes[0]);
}
function Nn(n) {
  return n.relatedTarget ? n.relatedTarget : "explicitOriginalTarget" in n ? n.explicitOriginalTarget : null;
}
function B(n, t) {
  n.emitter.on("change", (e) => {
    t(e.rawValue);
  }), t(n.rawValue);
}
function O(n, t, e) {
  B(n.value(t), e);
}
const Vi = "tp";
function h(n) {
  return (e, r) => [Vi, "-", n, "v", e ? `_${e}` : "", r ? `-${r}` : ""].join("");
}
const vt = h("lbl");
function Si(n, t) {
  const e = n.createDocumentFragment();
  return t.split(`
`).map((i) => n.createTextNode(i)).forEach((i, s) => {
    s > 0 && e.appendChild(n.createElement("br")), e.appendChild(i);
  }), e;
}
class Fn {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(vt()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("div");
    r.classList.add(vt("l")), O(e.props, "label", (s) => {
      b(s) ? this.element.classList.add(vt(void 0, "nol")) : (this.element.classList.remove(vt(void 0, "nol")), ki(r), r.appendChild(Si(t, s)));
    }), this.element.appendChild(r), this.labelElement = r;
    const i = t.createElement("div");
    i.classList.add(vt("v")), this.element.appendChild(i), this.valueElement = i;
  }
}
class Kn {
  constructor(t, e) {
    this.props = e.props, this.valueController = e.valueController, this.viewProps = e.valueController.viewProps, this.view = new Fn(t, { props: e.props, viewProps: this.viewProps }), this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importProps(t) {
    return V(t, null, (e) => ({ label: e.optional.string }), (e) => (this.props.set("label", e.label), true));
  }
  exportProps() {
    return S(null, { label: this.props.get("label") });
  }
}
function Li() {
  return ["veryfirst", "first", "last", "verylast"];
}
const qe = h(""), Ge = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" };
class Zt {
  constructor(t) {
    this.parent_ = null, this.blade = t.blade, this.view = t.view, this.viewProps = t.viewProps;
    const e = this.view.element;
    this.blade.value("positions").emitter.on("change", () => {
      Li().forEach((r) => {
        e.classList.remove(qe(void 0, Ge[r]));
      }), this.blade.get("positions").forEach((r) => {
        e.classList.add(qe(void 0, Ge[r]));
      });
    }), this.viewProps.handleDispose(() => {
      ye(e);
    });
  }
  get parent() {
    return this.parent_;
  }
  set parent(t) {
    this.parent_ = t, this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
  }
  importState(t) {
    return V(t, null, (e) => ({ disabled: e.required.boolean, hidden: e.required.boolean }), (e) => (this.viewProps.importState(e), true));
  }
  exportState() {
    return S(null, Object.assign({}, this.viewProps.exportState()));
  }
}
class tt extends Zt {
  constructor(t, e) {
    if (e.value !== e.valueController.value) throw w.shouldNeverHappen();
    const r = e.valueController.viewProps, i = new Kn(t, { blade: e.blade, props: e.props, valueController: e.valueController });
    super(Object.assign(Object.assign({}, e), { view: new Fn(t, { props: e.props, viewProps: r }), viewProps: r })), this.labelController = i, this.value = e.value, this.valueController = e.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importState(t) {
    return V(t, (e) => {
      var r, i, s;
      return super.importState(e) && this.labelController.importProps(e) && ((s = (i = (r = this.valueController).importProps) === null || i === void 0 ? void 0 : i.call(r, t)) !== null && s !== void 0 ? s : true);
    }, (e) => ({ value: e.optional.raw }), (e) => (e.value && (this.value.rawValue = e.value), true));
  }
  exportState() {
    var t, e, r;
    return S(() => super.exportState(), Object.assign(Object.assign({ value: this.value.rawValue }, this.labelController.exportProps()), (r = (e = (t = this.valueController).exportProps) === null || e === void 0 ? void 0 : e.call(t)) !== null && r !== void 0 ? r : {}));
  }
}
function Ye(n) {
  const t = Object.assign({}, n);
  return delete t.value, t;
}
class zn extends tt {
  constructor(t, e) {
    super(t, e), this.tag = e.tag;
  }
  importState(t) {
    return V(t, (e) => super.importState(Ye(t)), (e) => ({ tag: e.optional.string }), (e) => (this.tag = e.tag, true));
  }
  exportState() {
    return S(() => Ye(super.exportState()), { binding: { key: this.value.binding.target.key, value: this.value.binding.target.read() }, tag: this.tag });
  }
}
function Mi(n) {
  return Z(n) && Rn(n.value);
}
class Ai extends zn {
  importState(t) {
    return V(t, (e) => super.importState(e), (e) => ({ binding: e.required.object({ value: e.required.raw }) }), (e) => (this.value.binding.inject(e.binding.value), this.value.fetch(), true));
  }
}
function Oi(n) {
  return Z(n) && fi(n.value);
}
function $n(n, t) {
  for (; n.length < t; ) n.push(void 0);
}
function Di(n) {
  const t = [];
  return $n(t, n), t;
}
function Ti(n) {
  const t = n.indexOf(void 0);
  return t < 0 ? n : n.slice(0, t);
}
function ji(n, t) {
  const e = [...Ti(n), t];
  return e.length > n.length ? e.splice(0, e.length - n.length) : $n(e, n.length), e;
}
class Ri {
  constructor(t) {
    this.emitter = new g(), this.onTick_ = this.onTick_.bind(this), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.binding = t.binding, this.value_ = f(Di(t.bufferSize)), this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_), this.ticker = t.ticker, this.ticker.emitter.on("tick", this.onTick_), this.fetch();
  }
  get rawValue() {
    return this.value_.rawValue;
  }
  set rawValue(t) {
    this.value_.rawValue = t;
  }
  setRawValue(t, e) {
    this.value_.setRawValue(t, e);
  }
  fetch() {
    this.value_.rawValue = ji(this.value_.rawValue, this.binding.read());
  }
  onTick_() {
    this.fetch();
  }
  onValueBeforeChange_(t) {
    this.emitter.emit("beforechange", Object.assign(Object.assign({}, t), { sender: this }));
  }
  onValueChange_(t) {
    this.emitter.emit("change", Object.assign(Object.assign({}, t), { sender: this }));
  }
}
function Bi(n) {
  if (!("binding" in n)) return false;
  const t = n.binding;
  return _e(t) && "read" in t && !("write" in t);
}
class Ii extends zn {
  exportState() {
    return S(() => super.exportState(), { binding: { readonly: true } });
  }
}
function Ni(n) {
  return Z(n) && Bi(n.value);
}
class Fi extends nt {
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(t) {
    this.controller.labelController.props.set("label", t);
  }
  get title() {
    var t;
    return (t = this.controller.buttonController.props.get("title")) !== null && t !== void 0 ? t : "";
  }
  set title(t) {
    this.controller.buttonController.props.set("title", t);
  }
  on(t, e) {
    const r = e.bind(this);
    return this.controller.buttonController.emitter.on(t, (s) => {
      r(new mi(this, s.nativeEvent));
    }), this;
  }
  off(t, e) {
    return this.controller.buttonController.emitter.off(t, e), this;
  }
}
function Ki(n, t, e) {
  e ? n.classList.add(t) : n.classList.remove(t);
}
function ct(n, t) {
  return (e) => {
    Ki(n, t, e);
  };
}
function Pe(n, t) {
  B(n, (e) => {
    t.textContent = e ?? "";
  });
}
const te = h("btn");
class zi {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(te()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("button");
    r.classList.add(te("b")), e.viewProps.bindDisabled(r), this.element.appendChild(r), this.buttonElement = r;
    const i = t.createElement("div");
    i.classList.add(te("t")), Pe(e.props.value("title"), i), this.buttonElement.appendChild(i);
  }
}
class $i {
  constructor(t, e) {
    this.emitter = new g(), this.onClick_ = this.onClick_.bind(this), this.props = e.props, this.viewProps = e.viewProps, this.view = new zi(t, { props: this.props, viewProps: this.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  importProps(t) {
    return V(t, null, (e) => ({ title: e.optional.string }), (e) => (this.props.set("title", e.title), true));
  }
  exportProps() {
    return S(null, { title: this.props.get("title") });
  }
  onClick_(t) {
    this.emitter.emit("click", { nativeEvent: t, sender: this });
  }
}
class We extends Zt {
  constructor(t, e) {
    const r = new $i(t, { props: e.buttonProps, viewProps: e.viewProps }), i = new Kn(t, { blade: e.blade, props: e.labelProps, valueController: r });
    super({ blade: e.blade, view: i.view, viewProps: e.viewProps }), this.buttonController = r, this.labelController = i;
  }
  importState(t) {
    return V(t, (e) => super.importState(e) && this.buttonController.importProps(e) && this.labelController.importProps(e), () => ({}), () => true);
  }
  exportState() {
    return S(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
  }
}
class Un {
  constructor(t) {
    const [e, r] = t.split("-"), i = e.split(".");
    this.major = parseInt(i[0], 10), this.minor = parseInt(i[1], 10), this.patch = parseInt(i[2], 10), this.prerelease = r ?? null;
  }
  toString() {
    const t = [this.major, this.minor, this.patch].join(".");
    return this.prerelease !== null ? [t, this.prerelease].join("-") : t;
  }
}
const dt = new Un("2.0.4");
function y(n) {
  return Object.assign({ core: dt }, n);
}
const Ui = y({ id: "button", type: "blade", accept(n) {
  const t = _(n, (e) => ({ title: e.required.string, view: e.required.constant("button"), label: e.optional.string }));
  return t ? { params: t } : null;
}, controller(n) {
  return new We(n.document, { blade: n.blade, buttonProps: u.fromObject({ title: n.params.title }), labelProps: u.fromObject({ label: n.params.label }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof We ? new Fi(n.controller) : null;
} });
function Hi(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: "button" }));
}
function qi(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: "folder" }));
}
function Gi(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: "tab" }));
}
function Yi(n) {
  return fe(n) ? "refresh" in n && typeof n.refresh == "function" : false;
}
function Wi(n, t) {
  if (!Ht.isBindable(n)) throw w.notBindable();
  return new Ht(n, t);
}
class Xi {
  constructor(t, e) {
    this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.controller_ = t, this.emitter_ = new g(), this.pool_ = e, this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_);
  }
  get children() {
    return this.controller_.rack.children.map((t) => this.pool_.createApi(t));
  }
  addBinding(t, e, r) {
    const i = r ?? {}, s = this.controller_.element.ownerDocument, o = this.pool_.createBinding(s, Wi(t, e), i), a = this.pool_.createBindingApi(o);
    return this.add(a, i.index);
  }
  addFolder(t) {
    return qi(this, t);
  }
  addButton(t) {
    return Hi(this, t);
  }
  addTab(t) {
    return Gi(this, t);
  }
  add(t, e) {
    const r = t.controller;
    return this.controller_.rack.add(r, e), t;
  }
  remove(t) {
    this.controller_.rack.remove(t.controller);
  }
  addBlade(t) {
    const e = this.controller_.element.ownerDocument, r = this.pool_.createBlade(e, t), i = this.pool_.createApi(r);
    return this.add(i, t.index);
  }
  on(t, e) {
    const r = e.bind(this);
    return this.emitter_.on(t, (i) => {
      r(i);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  refresh() {
    this.children.forEach((t) => {
      Yi(t) && t.refresh();
    });
  }
  onRackValueChange_(t) {
    const e = t.bladeController, r = this.pool_.createApi(e), i = Rn(e.value) ? e.value.binding : null;
    this.emitter_.emit("change", new Lt(r, i ? i.target.read() : e.value.rawValue, t.options.last));
  }
}
class Ee extends nt {
  constructor(t, e) {
    super(t), this.rackApi_ = new Xi(t.rackController, e);
  }
  refresh() {
    this.rackApi_.refresh();
  }
}
class ke extends Zt {
  constructor(t) {
    super({ blade: t.blade, view: t.view, viewProps: t.rackController.viewProps }), this.rackController = t.rackController;
  }
  importState(t) {
    return V(t, (e) => super.importState(e), (e) => ({ children: e.required.array(e.required.raw) }), (e) => this.rackController.rack.children.every((r, i) => r.importState(e.children[i])));
  }
  exportState() {
    return S(() => super.exportState(), { children: this.rackController.rack.children.map((t) => t.exportState()) });
  }
}
function de(n) {
  return "rackController" in n;
}
class Qi {
  constructor(t) {
    this.emitter = new g(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = t;
  }
  get items() {
    return this.items_;
  }
  allItems() {
    return Array.from(this.cache_);
  }
  find(t) {
    for (const e of this.allItems()) if (t(e)) return e;
    return null;
  }
  includes(t) {
    return this.cache_.has(t);
  }
  add(t, e) {
    if (this.includes(t)) throw w.shouldNeverHappen();
    const r = e !== void 0 ? e : this.items_.length;
    this.items_.splice(r, 0, t), this.cache_.add(t);
    const i = this.extract_(t);
    i && (i.emitter.on("add", this.onSubListAdd_), i.emitter.on("remove", this.onSubListRemove_), i.allItems().forEach((s) => {
      this.cache_.add(s);
    })), this.emitter.emit("add", { index: r, item: t, root: this, target: this });
  }
  remove(t) {
    const e = this.items_.indexOf(t);
    if (e < 0) return;
    this.items_.splice(e, 1), this.cache_.delete(t);
    const r = this.extract_(t);
    r && (r.allItems().forEach((i) => {
      this.cache_.delete(i);
    }), r.emitter.off("add", this.onSubListAdd_), r.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", { index: e, item: t, root: this, target: this });
  }
  onSubListAdd_(t) {
    this.cache_.add(t.item), this.emitter.emit("add", { index: t.index, item: t.item, root: this, target: t.target });
  }
  onSubListRemove_(t) {
    this.cache_.delete(t.item), this.emitter.emit("remove", { index: t.index, item: t.item, root: this, target: t.target });
  }
}
function Zi(n, t) {
  for (let e = 0; e < n.length; e++) {
    const r = n[e];
    if (Z(r) && r.value === t) return r;
  }
  return null;
}
function Ji(n) {
  return de(n) ? n.rackController.rack.bcSet_ : null;
}
class ts {
  constructor(t) {
    var e, r;
    this.emitter = new g(), this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onRackLayout_ = this.onRackLayout_.bind(this), this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.blade_ = (e = t.blade) !== null && e !== void 0 ? e : null, (r = this.blade_) === null || r === void 0 || r.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = t.viewProps, this.bcSet_ = new Qi(Ji), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
  }
  get children() {
    return this.bcSet_.items;
  }
  add(t, e) {
    var r;
    (r = t.parent) === null || r === void 0 || r.remove(t), t.parent = this, this.bcSet_.add(t, e);
  }
  remove(t) {
    t.parent = null, this.bcSet_.remove(t);
  }
  find(t) {
    return this.bcSet_.allItems().filter(t);
  }
  onSetAdd_(t) {
    this.updatePositions_();
    const e = t.target === t.root;
    if (this.emitter.emit("add", { bladeController: t.item, index: t.index, root: e, sender: this }), !e) return;
    const r = t.item;
    if (r.viewProps.emitter.on("change", this.onChildViewPropsChange_), r.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), r.viewProps.handleDispose(this.onChildDispose_), Z(r)) r.value.emitter.on("change", this.onChildValueChange_);
    else if (de(r)) {
      const i = r.rackController.rack;
      if (i) {
        const s = i.emitter;
        s.on("layout", this.onRackLayout_), s.on("valuechange", this.onRackValueChange_);
      }
    }
  }
  onSetRemove_(t) {
    this.updatePositions_();
    const e = t.target === t.root;
    if (this.emitter.emit("remove", { bladeController: t.item, root: e, sender: this }), !e) return;
    const r = t.item;
    if (Z(r)) r.value.emitter.off("change", this.onChildValueChange_);
    else if (de(r)) {
      const i = r.rackController.rack;
      if (i) {
        const s = i.emitter;
        s.off("layout", this.onRackLayout_), s.off("valuechange", this.onRackValueChange_);
      }
    }
  }
  updatePositions_() {
    const t = this.bcSet_.items.filter((i) => !i.viewProps.get("hidden")), e = t[0], r = t[t.length - 1];
    this.bcSet_.items.forEach((i) => {
      const s = [];
      i === e && (s.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && s.push("veryfirst")), i === r && (s.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && s.push("verylast")), i.blade.set("positions", s);
    });
  }
  onChildPositionsChange_() {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildViewPropsChange_(t) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onChildDispose_() {
    this.bcSet_.items.filter((e) => e.viewProps.get("disposed")).forEach((e) => {
      this.bcSet_.remove(e);
    });
  }
  onChildValueChange_(t) {
    const e = Zi(this.find(Z), t.sender);
    if (!e) throw w.alreadyDisposed();
    this.emitter.emit("valuechange", { bladeController: e, options: t.options, sender: this });
  }
  onRackLayout_(t) {
    this.updatePositions_(), this.emitter.emit("layout", { sender: this });
  }
  onRackValueChange_(t) {
    this.emitter.emit("valuechange", { bladeController: t.bladeController, options: t.options, sender: this });
  }
  onBladePositionsChange_() {
    this.updatePositions_();
  }
}
class Ve {
  constructor(t) {
    this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.element = t.element, this.viewProps = t.viewProps;
    const e = new ts({ blade: t.root ? void 0 : t.blade, viewProps: t.viewProps });
    e.emitter.on("add", this.onRackAdd_), e.emitter.on("remove", this.onRackRemove_), this.rack = e, this.viewProps.handleDispose(() => {
      for (let r = this.rack.children.length - 1; r >= 0; r--) this.rack.children[r].viewProps.set("disposed", true);
    });
  }
  onRackAdd_(t) {
    t.root && Bn(this.element, t.bladeController.view.element, t.index);
  }
  onRackRemove_(t) {
    t.root && ye(t.bladeController.view.element);
  }
}
function ut() {
  return new u({ positions: f([], { equals: Ar }) });
}
class Mt extends u {
  constructor(t) {
    super(t);
  }
  static create(t) {
    const e = { completed: true, expanded: t, expandedHeight: null, shouldFixHeight: false, temporaryExpanded: null }, r = u.createCore(e);
    return new Mt(r);
  }
  get styleExpanded() {
    var t;
    return (t = this.get("temporaryExpanded")) !== null && t !== void 0 ? t : this.get("expanded");
  }
  get styleHeight() {
    if (!this.styleExpanded) return "0";
    const t = this.get("expandedHeight");
    return this.get("shouldFixHeight") && !b(t) ? `${t}px` : "auto";
  }
  bindExpandedClass(t, e) {
    const r = () => {
      this.styleExpanded ? t.classList.add(e) : t.classList.remove(e);
    };
    O(this, "expanded", r), O(this, "temporaryExpanded", r);
  }
  cleanUpTransition() {
    this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
  }
}
function es(n, t) {
  let e = 0;
  return Ci(t, () => {
    n.set("expandedHeight", null), n.set("temporaryExpanded", true), qt(t), e = t.clientHeight, n.set("temporaryExpanded", null), qt(t);
  }), e;
}
function Xe(n, t) {
  t.style.height = n.styleHeight;
}
function Se(n, t) {
  n.value("expanded").emitter.on("beforechange", () => {
    if (n.set("completed", false), b(n.get("expandedHeight"))) {
      const e = es(n, t);
      e > 0 && n.set("expandedHeight", e);
    }
    n.set("shouldFixHeight", true), qt(t);
  }), n.emitter.on("change", () => {
    Xe(n, t);
  }), Xe(n, t), t.addEventListener("transitionend", (e) => {
    e.propertyName === "height" && n.cleanUpTransition();
  });
}
class Hn extends Ee {
  constructor(t, e) {
    super(t, e), this.emitter_ = new g(), this.controller.foldable.value("expanded").emitter.on("change", (r) => {
      this.emitter_.emit("fold", new hi(this, r.sender.rawValue));
    }), this.rackApi_.on("change", (r) => {
      this.emitter_.emit("change", r);
    });
  }
  get expanded() {
    return this.controller.foldable.get("expanded");
  }
  set expanded(t) {
    this.controller.foldable.set("expanded", t);
  }
  get title() {
    return this.controller.props.get("title");
  }
  set title(t) {
    this.controller.props.set("title", t);
  }
  get children() {
    return this.rackApi_.children;
  }
  addBinding(t, e, r) {
    return this.rackApi_.addBinding(t, e, r);
  }
  addFolder(t) {
    return this.rackApi_.addFolder(t);
  }
  addButton(t) {
    return this.rackApi_.addButton(t);
  }
  addTab(t) {
    return this.rackApi_.addTab(t);
  }
  add(t, e) {
    return this.rackApi_.add(t, e);
  }
  remove(t) {
    this.rackApi_.remove(t);
  }
  addBlade(t) {
    return this.rackApi_.addBlade(t);
  }
  on(t, e) {
    const r = e.bind(this);
    return this.emitter_.on(t, (i) => {
      r(i);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
const qn = h("cnt");
class ns {
  constructor(t, e) {
    var r;
    this.className_ = h((r = e.viewName) !== null && r !== void 0 ? r : "fld"), this.element = t.createElement("div"), this.element.classList.add(this.className_(), qn()), e.viewProps.bindClassModifiers(this.element), this.foldable_ = e.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), O(this.foldable_, "completed", ct(this.element, this.className_(void 0, "cpl")));
    const i = t.createElement("button");
    i.classList.add(this.className_("b")), O(e.props, "title", (p) => {
      b(p) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
    }), e.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const s = t.createElement("div");
    s.classList.add(this.className_("i")), this.element.appendChild(s);
    const o = t.createElement("div");
    o.classList.add(this.className_("t")), Pe(e.props.value("title"), o), this.buttonElement.appendChild(o), this.titleElement = o;
    const a = t.createElement("div");
    a.classList.add(this.className_("m")), this.buttonElement.appendChild(a);
    const l = t.createElement("div");
    l.classList.add(this.className_("c")), this.element.appendChild(l), this.containerElement = l;
  }
}
class ue extends ke {
  constructor(t, e) {
    var r;
    const i = Mt.create((r = e.expanded) !== null && r !== void 0 ? r : true), s = new ns(t, { foldable: i, props: e.props, viewName: e.root ? "rot" : void 0, viewProps: e.viewProps });
    super(Object.assign(Object.assign({}, e), { rackController: new Ve({ blade: e.blade, element: s.containerElement, root: e.root, viewProps: e.viewProps }), view: s })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = e.props, this.foldable = i, Se(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
      this.foldable.cleanUpTransition();
    }), this.rackController.rack.emitter.on("remove", () => {
      this.foldable.cleanUpTransition();
    }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
  }
  get document() {
    return this.view.element.ownerDocument;
  }
  importState(t) {
    return V(t, (e) => super.importState(e), (e) => ({ expanded: e.required.boolean, title: e.optional.string }), (e) => (this.foldable.set("expanded", e.expanded), this.props.set("title", e.title), true));
  }
  exportState() {
    return S(() => super.exportState(), { expanded: this.foldable.get("expanded"), title: this.props.get("title") });
  }
  onTitleClick_() {
    this.foldable.set("expanded", !this.foldable.get("expanded"));
  }
}
const rs = y({ id: "folder", type: "blade", accept(n) {
  const t = _(n, (e) => ({ title: e.required.string, view: e.required.constant("folder"), expanded: e.optional.boolean }));
  return t ? { params: t } : null;
}, controller(n) {
  return new ue(n.document, { blade: n.blade, expanded: n.params.expanded, props: u.fromObject({ title: n.params.title }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof ue ? new Hn(n.controller, n.pool) : null;
} }), is = h("");
function Qe(n, t) {
  return ct(n, is(void 0, t));
}
class F extends u {
  constructor(t) {
    var e;
    super(t), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = Rr(f(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
  }
  static create(t) {
    var e, r, i;
    const s = t ?? {};
    return new F(u.createCore({ disabled: (e = s.disabled) !== null && e !== void 0 ? e : false, disposed: false, hidden: (r = s.hidden) !== null && r !== void 0 ? r : false, parent: (i = s.parent) !== null && i !== void 0 ? i : null }));
  }
  get globalDisabled() {
    return this.globalDisabled_;
  }
  bindClassModifiers(t) {
    B(this.globalDisabled_, Qe(t, "disabled")), O(this, "hidden", Qe(t, "hidden"));
  }
  bindDisabled(t) {
    B(this.globalDisabled_, (e) => {
      t.disabled = e;
    });
  }
  bindTabIndex(t) {
    B(this.globalDisabled_, (e) => {
      t.tabIndex = e ? -1 : 0;
    });
  }
  handleDispose(t) {
    this.value("disposed").emitter.on("change", (e) => {
      e && t();
    });
  }
  importState(t) {
    this.set("disabled", t.disabled), this.set("hidden", t.hidden);
  }
  exportState() {
    return { disabled: this.get("disabled"), hidden: this.get("hidden") };
  }
  getGlobalDisabled_() {
    const t = this.get("parent");
    return (t ? t.globalDisabled.rawValue : false) || this.get("disabled");
  }
  updateGlobalDisabled_() {
    this.setGlobalDisabled_(this.getGlobalDisabled_());
  }
  onDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentGlobalDisabledChange_() {
    this.updateGlobalDisabled_();
  }
  onParentChange_(t) {
    var e;
    const r = t.previousRawValue;
    r == null ? void 0 : r.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
  }
}
const Ze = h("tbp");
class ss {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(Ze()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("div");
    r.classList.add(Ze("c")), this.element.appendChild(r), this.containerElement = r;
  }
}
const mt = h("tbi");
class os {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(mt()), e.viewProps.bindClassModifiers(this.element), O(e.props, "selected", (s) => {
      s ? this.element.classList.add(mt(void 0, "sel")) : this.element.classList.remove(mt(void 0, "sel"));
    });
    const r = t.createElement("button");
    r.classList.add(mt("b")), e.viewProps.bindDisabled(r), this.element.appendChild(r), this.buttonElement = r;
    const i = t.createElement("div");
    i.classList.add(mt("t")), Pe(e.props.value("title"), i), this.buttonElement.appendChild(i), this.titleElement = i;
  }
}
class as {
  constructor(t, e) {
    this.emitter = new g(), this.onClick_ = this.onClick_.bind(this), this.props = e.props, this.viewProps = e.viewProps, this.view = new os(t, { props: e.props, viewProps: e.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  onClick_() {
    this.emitter.emit("click", { sender: this });
  }
}
class he extends ke {
  constructor(t, e) {
    const r = new ss(t, { viewProps: e.viewProps });
    super(Object.assign(Object.assign({}, e), { rackController: new Ve({ blade: e.blade, element: r.containerElement, viewProps: e.viewProps }), view: r })), this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new as(t, { props: e.itemProps, viewProps: F.create() }), this.ic_.emitter.on("click", this.onItemClick_), this.props = e.props, O(this.props, "selected", (i) => {
      this.itemController.props.set("selected", i), this.viewProps.set("hidden", !i);
    });
  }
  get itemController() {
    return this.ic_;
  }
  importState(t) {
    return V(t, (e) => super.importState(e), (e) => ({ selected: e.required.boolean, title: e.required.string }), (e) => (this.ic_.props.set("selected", e.selected), this.ic_.props.set("title", e.title), true));
  }
  exportState() {
    return S(() => super.exportState(), { selected: this.ic_.props.get("selected"), title: this.ic_.props.get("title") });
  }
  onItemClick_() {
    this.props.set("selected", true);
  }
}
class ls extends Ee {
  constructor(t, e) {
    super(t, e), this.emitter_ = new g(), this.onSelect_ = this.onSelect_.bind(this), this.pool_ = e, this.rackApi_.on("change", (r) => {
      this.emitter_.emit("change", r);
    }), this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
  }
  get pages() {
    return this.rackApi_.children;
  }
  addPage(t) {
    const e = this.controller.view.element.ownerDocument, r = new he(e, { blade: ut(), itemProps: u.fromObject({ selected: false, title: t.title }), props: u.fromObject({ selected: false }), viewProps: F.create() }), i = this.pool_.createApi(r);
    return this.rackApi_.add(i, t.index);
  }
  removePage(t) {
    this.rackApi_.remove(this.rackApi_.children[t]);
  }
  on(t, e) {
    const r = e.bind(this);
    return this.emitter_.on(t, (i) => {
      r(i);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  onSelect_(t) {
    this.emitter_.emit("select", new vi(this, t.rawValue));
  }
}
class ps extends Ee {
  get title() {
    var t;
    return (t = this.controller.itemController.props.get("title")) !== null && t !== void 0 ? t : "";
  }
  set title(t) {
    this.controller.itemController.props.set("title", t);
  }
  get selected() {
    return this.controller.props.get("selected");
  }
  set selected(t) {
    this.controller.props.set("selected", t);
  }
  get children() {
    return this.rackApi_.children;
  }
  addButton(t) {
    return this.rackApi_.addButton(t);
  }
  addFolder(t) {
    return this.rackApi_.addFolder(t);
  }
  addTab(t) {
    return this.rackApi_.addTab(t);
  }
  add(t, e) {
    this.rackApi_.add(t, e);
  }
  remove(t) {
    this.rackApi_.remove(t);
  }
  addBinding(t, e, r) {
    return this.rackApi_.addBinding(t, e, r);
  }
  addBlade(t) {
    return this.rackApi_.addBlade(t);
  }
}
const Je = -1;
class cs {
  constructor() {
    this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = f(true), this.selectedIndex = f(Je), this.items_ = [];
  }
  add(t, e) {
    const r = e ?? this.items_.length;
    this.items_.splice(r, 0, t), t.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
  }
  remove(t) {
    const e = this.items_.indexOf(t);
    e < 0 || (this.items_.splice(e, 1), t.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
  }
  keepSelection_() {
    if (this.items_.length === 0) {
      this.selectedIndex.rawValue = Je, this.empty.rawValue = true;
      return;
    }
    const t = this.items_.findIndex((e) => e.rawValue);
    t < 0 ? (this.items_.forEach((e, r) => {
      e.rawValue = r === 0;
    }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((e, r) => {
      e.rawValue = r === t;
    }), this.selectedIndex.rawValue = t), this.empty.rawValue = false;
  }
  onItemSelectedChange_(t) {
    if (t.rawValue) {
      const e = this.items_.findIndex((r) => r === t.sender);
      this.items_.forEach((r, i) => {
        r.rawValue = i === e;
      }), this.selectedIndex.rawValue = e;
    } else this.keepSelection_();
  }
}
const bt = h("tab");
class ds {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(bt(), qn()), e.viewProps.bindClassModifiers(this.element), B(e.empty, ct(this.element, bt(void 0, "nop")));
    const r = t.createElement("div");
    r.classList.add(bt("t")), this.element.appendChild(r), this.itemsElement = r;
    const i = t.createElement("div");
    i.classList.add(bt("i")), this.element.appendChild(i);
    const s = t.createElement("div");
    s.classList.add(bt("c")), this.element.appendChild(s), this.contentsElement = s;
  }
}
class tn extends ke {
  constructor(t, e) {
    const r = new cs(), i = new ds(t, { empty: r.empty, viewProps: e.viewProps });
    super({ blade: e.blade, rackController: new Ve({ blade: e.blade, element: i.contentsElement, viewProps: e.viewProps }), view: i }), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
    const s = this.rackController.rack;
    s.emitter.on("add", this.onRackAdd_), s.emitter.on("remove", this.onRackRemove_), this.tab = r;
  }
  add(t, e) {
    this.rackController.rack.add(t, e);
  }
  remove(t) {
    this.rackController.rack.remove(this.rackController.rack.children[t]);
  }
  onRackAdd_(t) {
    if (!t.root) return;
    const e = t.bladeController;
    Bn(this.view.itemsElement, e.itemController.view.element, t.index), e.itemController.viewProps.set("parent", this.viewProps), this.tab.add(e.props.value("selected"));
  }
  onRackRemove_(t) {
    if (!t.root) return;
    const e = t.bladeController;
    ye(e.itemController.view.element), e.itemController.viewProps.set("parent", null), this.tab.remove(e.props.value("selected"));
  }
}
const Gn = y({ id: "tab", type: "blade", accept(n) {
  const t = _(n, (e) => ({ pages: e.required.array(e.required.object({ title: e.required.string })), view: e.required.constant("tab") }));
  return !t || t.pages.length === 0 ? null : { params: t };
}, controller(n) {
  const t = new tn(n.document, { blade: n.blade, viewProps: n.viewProps });
  return n.params.pages.forEach((e) => {
    const r = new he(n.document, { blade: ut(), itemProps: u.fromObject({ selected: false, title: e.title }), props: u.fromObject({ selected: false }), viewProps: F.create() });
    t.add(r);
  }), t;
}, api(n) {
  return n.controller instanceof tn ? new ls(n.controller, n.pool) : n.controller instanceof he ? new ps(n.controller, n.pool) : null;
} });
function us(n, t) {
  const e = n.accept(t.params);
  if (!e) return null;
  const r = _(t.params, (i) => ({ disabled: i.optional.boolean, hidden: i.optional.boolean }));
  return n.controller({ blade: ut(), document: t.document, params: Object.assign(Object.assign({}, e.params), { disabled: r == null ? void 0 : r.disabled, hidden: r == null ? void 0 : r.hidden }), viewProps: F.create({ disabled: r == null ? void 0 : r.disabled, hidden: r == null ? void 0 : r.hidden }) });
}
class Le extends yt {
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(t) {
    this.controller.valueController.props.set("options", t);
  }
}
class hs {
  constructor() {
    this.disabled = false, this.emitter = new g();
  }
  dispose() {
  }
  tick() {
    this.disabled || this.emitter.emit("tick", { sender: this });
  }
}
class vs {
  constructor(t, e) {
    this.disabled_ = false, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = t, this.emitter = new g(), this.interval_ = e, this.setTimer_();
  }
  get disabled() {
    return this.disabled_;
  }
  set disabled(t) {
    this.disabled_ = t, this.disabled_ ? this.clearTimer_() : this.setTimer_();
  }
  dispose() {
    this.clearTimer_();
  }
  clearTimer_() {
    if (this.timerId_ === null) return;
    const t = this.doc_.defaultView;
    t && t.clearInterval(this.timerId_), this.timerId_ = null;
  }
  setTimer_() {
    if (this.clearTimer_(), this.interval_ <= 0) return;
    const t = this.doc_.defaultView;
    t && (this.timerId_ = t.setInterval(this.onTick_, this.interval_));
  }
  onTick_() {
    this.disabled_ || this.emitter.emit("tick", { sender: this });
  }
}
class At {
  constructor(t) {
    this.constraints = t;
  }
  constrain(t) {
    return this.constraints.reduce((e, r) => r.constrain(e), t);
  }
}
function Gt(n, t) {
  if (n instanceof t) return n;
  if (n instanceof At) {
    const e = n.constraints.reduce((r, i) => r || (i instanceof t ? i : null), null);
    if (e) return e;
  }
  return null;
}
class Ot {
  constructor(t) {
    this.values = u.fromObject({ options: t });
  }
  constrain(t) {
    const e = this.values.get("options");
    return e.length === 0 || e.filter((i) => i.value === t).length > 0 ? t : e[0].value;
  }
}
function Dt(n) {
  var t;
  const e = ce;
  if (Array.isArray(n)) return (t = _({ items: n }, (r) => ({ items: r.required.array(r.required.object({ text: r.required.string, value: r.required.raw })) }))) === null || t === void 0 ? void 0 : t.items;
  if (typeof n == "object") return e.required.raw(n).value;
}
function Me(n) {
  if (Array.isArray(n)) return n;
  const t = [];
  return Object.keys(n).forEach((e) => {
    t.push({ text: e, value: n[e] });
  }), t;
}
function Ae(n) {
  return b(n) ? null : new Ot(Me(n));
}
const ee = h("lst");
class ms {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = e.props, this.element = t.createElement("div"), this.element.classList.add(ee()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("select");
    r.classList.add(ee("s")), e.viewProps.bindDisabled(r), this.element.appendChild(r), this.selectElement = r;
    const i = t.createElement("div");
    i.classList.add(ee("m")), i.appendChild(Qt(t, "dropdown")), this.element.appendChild(i), e.value.emitter.on("change", this.onValueChange_), this.value_ = e.value, O(this.props_, "options", (s) => {
      In(this.selectElement), s.forEach((o) => {
        const a = t.createElement("option");
        a.textContent = o.text, this.selectElement.appendChild(a);
      }), this.update_();
    });
  }
  update_() {
    const t = this.props_.get("options").map((e) => e.value);
    this.selectElement.selectedIndex = t.indexOf(this.value_.rawValue);
  }
  onValueChange_() {
    this.update_();
  }
}
class G {
  constructor(t, e) {
    this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.view = new ms(t, { props: this.props, value: this.value, viewProps: this.viewProps }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
  }
  onSelectChange_(t) {
    const e = t.currentTarget;
    this.value.rawValue = this.props.get("options")[e.selectedIndex].value;
  }
  importProps(t) {
    return V(t, null, (e) => ({ options: e.required.custom(Dt) }), (e) => (this.props.set("options", Me(e.options)), true));
  }
  exportProps() {
    return S(null, { options: this.props.get("options") });
  }
}
const en = h("pop");
class bs {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(en()), e.viewProps.bindClassModifiers(this.element), B(e.shows, ct(this.element, en(void 0, "v")));
  }
}
class Yn {
  constructor(t, e) {
    this.shows = f(false), this.viewProps = e.viewProps, this.view = new bs(t, { shows: this.shows, viewProps: this.viewProps });
  }
}
const nn = h("txt");
class fs {
  constructor(t, e) {
    this.onChange_ = this.onChange_.bind(this), this.element = t.createElement("div"), this.element.classList.add(nn()), e.viewProps.bindClassModifiers(this.element), this.props_ = e.props, this.props_.emitter.on("change", this.onChange_);
    const r = t.createElement("input");
    r.classList.add(nn("i")), r.type = "text", e.viewProps.bindDisabled(r), this.element.appendChild(r), this.inputElement = r, e.value.emitter.on("change", this.onChange_), this.value_ = e.value, this.refresh();
  }
  refresh() {
    const t = this.props_.get("formatter");
    this.inputElement.value = t(this.value_.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}
class Pt {
  constructor(t, e) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = e.parser, this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.view = new fs(t, { props: e.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(t) {
    const r = t.currentTarget.value, i = this.parser_(r);
    b(i) || (this.value.rawValue = i), this.view.refresh();
  }
}
function _s(n) {
  return String(n);
}
function Wn(n) {
  return n === "false" ? false : !!n;
}
function rn(n) {
  return _s(n);
}
function ws(n) {
  return (t) => n.reduce((e, r) => e !== null ? e : r(t), null);
}
const gs = E(0);
function Yt(n) {
  return gs(n) + "%";
}
function Xn(n) {
  return String(n);
}
function ve(n) {
  return n;
}
function ht({ primary: n, secondary: t, forward: e, backward: r }) {
  let i = false;
  function s(o) {
    i || (i = true, o(), i = false);
  }
  n.emitter.on("change", (o) => {
    s(() => {
      t.setRawValue(e(n.rawValue, t.rawValue), o.options);
    });
  }), t.emitter.on("change", (o) => {
    s(() => {
      n.setRawValue(r(n.rawValue, t.rawValue), o.options);
    }), s(() => {
      t.setRawValue(e(n.rawValue, t.rawValue), o.options);
    });
  }), s(() => {
    t.setRawValue(e(n.rawValue, t.rawValue), { forceEmit: false, last: true });
  });
}
function P(n, t) {
  const e = n * (t.altKey ? 0.1 : 1) * (t.shiftKey ? 10 : 1);
  return t.upKey ? +e : t.downKey ? -e : 0;
}
function Et(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowDown", shiftKey: n.shiftKey, upKey: n.key === "ArrowUp" };
}
function N(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowLeft", shiftKey: n.shiftKey, upKey: n.key === "ArrowRight" };
}
function Cs(n) {
  return n === "ArrowUp" || n === "ArrowDown";
}
function Qn(n) {
  return Cs(n) || n === "ArrowLeft" || n === "ArrowRight";
}
function ne(n, t) {
  var e, r;
  const i = t.ownerDocument.defaultView, s = t.getBoundingClientRect();
  return { x: n.pageX - (((e = i && i.scrollX) !== null && e !== void 0 ? e : 0) + s.left), y: n.pageY - (((r = i && i.scrollY) !== null && r !== void 0 ? r : 0) + s.top) };
}
class rt {
  constructor(t) {
    this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = t, this.emitter = new g(), t.addEventListener("touchstart", this.onTouchStart_, { passive: false }), t.addEventListener("touchmove", this.onTouchMove_, { passive: true }), t.addEventListener("touchend", this.onTouchEnd_), t.addEventListener("mousedown", this.onMouseDown_);
  }
  computePosition_(t) {
    const e = this.elem_.getBoundingClientRect();
    return { bounds: { width: e.width, height: e.height }, point: t ? { x: t.x, y: t.y } : null };
  }
  onMouseDown_(t) {
    var e;
    t.preventDefault(), (e = t.currentTarget) === null || e === void 0 || e.focus();
    const r = this.elem_.ownerDocument;
    r.addEventListener("mousemove", this.onDocumentMouseMove_), r.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", { altKey: t.altKey, data: this.computePosition_(ne(t, this.elem_)), sender: this, shiftKey: t.shiftKey });
  }
  onDocumentMouseMove_(t) {
    this.emitter.emit("move", { altKey: t.altKey, data: this.computePosition_(ne(t, this.elem_)), sender: this, shiftKey: t.shiftKey });
  }
  onDocumentMouseUp_(t) {
    const e = this.elem_.ownerDocument;
    e.removeEventListener("mousemove", this.onDocumentMouseMove_), e.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", { altKey: t.altKey, data: this.computePosition_(ne(t, this.elem_)), sender: this, shiftKey: t.shiftKey });
  }
  onTouchStart_(t) {
    t.preventDefault();
    const e = t.targetTouches.item(0), r = this.elem_.getBoundingClientRect();
    this.emitter.emit("down", { altKey: t.altKey, data: this.computePosition_(e ? { x: e.clientX - r.left, y: e.clientY - r.top } : void 0), sender: this, shiftKey: t.shiftKey }), this.lastTouch_ = e;
  }
  onTouchMove_(t) {
    const e = t.targetTouches.item(0), r = this.elem_.getBoundingClientRect();
    this.emitter.emit("move", { altKey: t.altKey, data: this.computePosition_(e ? { x: e.clientX - r.left, y: e.clientY - r.top } : void 0), sender: this, shiftKey: t.shiftKey }), this.lastTouch_ = e;
  }
  onTouchEnd_(t) {
    var e;
    const r = (e = t.targetTouches.item(0)) !== null && e !== void 0 ? e : this.lastTouch_, i = this.elem_.getBoundingClientRect();
    this.emitter.emit("up", { altKey: t.altKey, data: this.computePosition_(r ? { x: r.clientX - i.left, y: r.clientY - i.top } : void 0), sender: this, shiftKey: t.shiftKey });
  }
}
const L = h("txt");
class xs {
  constructor(t, e) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = e.props, this.props_.emitter.on("change", this.onChange_), this.element = t.createElement("div"), this.element.classList.add(L(), L(void 0, "num")), e.arrayPosition && this.element.classList.add(L(void 0, e.arrayPosition)), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("input");
    r.classList.add(L("i")), r.type = "text", e.viewProps.bindDisabled(r), this.element.appendChild(r), this.inputElement = r, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = e.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(L()), this.inputElement.classList.add(L("i"));
    const i = t.createElement("div");
    i.classList.add(L("k")), this.element.appendChild(i), this.knobElement = i;
    const s = t.createElementNS(A, "svg");
    s.classList.add(L("g")), this.knobElement.appendChild(s);
    const o = t.createElementNS(A, "path");
    o.classList.add(L("gb")), s.appendChild(o), this.guideBodyElem_ = o;
    const a = t.createElementNS(A, "path");
    a.classList.add(L("gh")), s.appendChild(a), this.guideHeadElem_ = a;
    const l = t.createElement("div");
    l.classList.add(h("tt")()), this.knobElement.appendChild(l), this.tooltipElem_ = l, e.value.emitter.on("change", this.onChange_), this.value = e.value, this.refresh();
  }
  onDraggingChange_(t) {
    if (t.rawValue === null) {
      this.element.classList.remove(L(void 0, "drg"));
      return;
    }
    this.element.classList.add(L(void 0, "drg"));
    const e = t.rawValue / this.props_.get("pointerScale"), r = e + (e > 0 ? -1 : e < 0 ? 1 : 0), i = C(-r, -4, 4);
    this.guideHeadElem_.setAttributeNS(null, "d", [`M ${r + i},0 L${r},4 L${r + i},8`, `M ${e},-1 L${e},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${e},4`);
    const s = this.props_.get("formatter");
    this.tooltipElem_.textContent = s(this.value.rawValue), this.tooltipElem_.style.left = `${e}px`;
  }
  refresh() {
    const t = this.props_.get("formatter");
    this.inputElement.value = t(this.value.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}
class Tt {
  constructor(t, e) {
    var r;
    this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.parser_ = e.parser, this.props = e.props, this.sliderProps_ = (r = e.sliderProps) !== null && r !== void 0 ? r : null, this.value = e.value, this.viewProps = e.viewProps, this.dragging_ = f(null), this.view = new xs(t, { arrayPosition: e.arrayPosition, dragging: this.dragging_, props: this.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
    const i = new rt(this.view.knobElement);
    i.emitter.on("down", this.onPointerDown_), i.emitter.on("move", this.onPointerMove_), i.emitter.on("up", this.onPointerUp_);
  }
  constrainValue_(t) {
    var e, r;
    const i = (e = this.sliderProps_) === null || e === void 0 ? void 0 : e.get("min"), s = (r = this.sliderProps_) === null || r === void 0 ? void 0 : r.get("max");
    let o = t;
    return i !== void 0 && (o = Math.max(o, i)), s !== void 0 && (o = Math.min(o, s)), o;
  }
  onInputChange_(t) {
    const r = t.currentTarget.value, i = this.parser_(r);
    b(i) || (this.value.rawValue = this.constrainValue_(i)), this.view.refresh();
  }
  onInputKeyDown_(t) {
    const e = P(this.props.get("keyScale"), Et(t));
    e !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + e), { forceEmit: false, last: false });
  }
  onInputKeyUp_(t) {
    P(this.props.get("keyScale"), Et(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
  onPointerDown_() {
    this.originRawValue_ = this.value.rawValue, this.dragging_.rawValue = 0;
  }
  computeDraggingValue_(t) {
    if (!t.point) return null;
    const e = t.point.x - t.bounds.width / 2;
    return this.constrainValue_(this.originRawValue_ + e * this.props.get("pointerScale"));
  }
  onPointerMove_(t) {
    const e = this.computeDraggingValue_(t.data);
    e !== null && (this.value.setRawValue(e, { forceEmit: false, last: false }), this.dragging_.rawValue = this.value.rawValue - this.originRawValue_);
  }
  onPointerUp_(t) {
    const e = this.computeDraggingValue_(t.data);
    e !== null && (this.value.setRawValue(e, { forceEmit: true, last: true }), this.dragging_.rawValue = null);
  }
}
const re = h("sld");
class ys {
  constructor(t, e) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = e.props, this.props_.emitter.on("change", this.onChange_), this.element = t.createElement("div"), this.element.classList.add(re()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("div");
    r.classList.add(re("t")), e.viewProps.bindTabIndex(r), this.element.appendChild(r), this.trackElement = r;
    const i = t.createElement("div");
    i.classList.add(re("k")), this.trackElement.appendChild(i), this.knobElement = i, e.value.emitter.on("change", this.onChange_), this.value = e.value, this.update_();
  }
  update_() {
    const t = C(m(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
    this.knobElement.style.width = `${t}%`;
  }
  onChange_() {
    this.update_();
  }
}
class Ps {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.props = e.props, this.view = new ys(t, { props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new rt(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    t.point && this.value.setRawValue(m(C(t.point.x, 0, t.bounds.width), 0, t.bounds.width, this.props.get("min"), this.props.get("max")), e);
  }
  onPointerDownOrMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: true, last: true });
  }
  onKeyDown_(t) {
    const e = P(this.props.get("keyScale"), N(t));
    e !== 0 && this.value.setRawValue(this.value.rawValue + e, { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    P(this.props.get("keyScale"), N(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const ie = h("sldtxt");
class Es {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(ie());
    const r = t.createElement("div");
    r.classList.add(ie("s")), this.sliderView_ = e.sliderView, r.appendChild(this.sliderView_.element), this.element.appendChild(r);
    const i = t.createElement("div");
    i.classList.add(ie("t")), this.textView_ = e.textView, i.appendChild(this.textView_.element), this.element.appendChild(i);
  }
}
class Wt {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.sliderC_ = new Ps(t, { props: e.sliderProps, value: e.value, viewProps: this.viewProps }), this.textC_ = new Tt(t, { parser: e.parser, props: e.textProps, sliderProps: e.sliderProps, value: e.value, viewProps: e.viewProps }), this.view = new Es(t, { sliderView: this.sliderC_.view, textView: this.textC_.view });
  }
  get sliderController() {
    return this.sliderC_;
  }
  get textController() {
    return this.textC_;
  }
  importProps(t) {
    return V(t, null, (e) => ({ max: e.required.number, min: e.required.number }), (e) => {
      const r = this.sliderC_.props;
      return r.set("max", e.max), r.set("min", e.min), true;
    });
  }
  exportProps() {
    const t = this.sliderC_.props;
    return S(null, { max: t.get("max"), min: t.get("min") });
  }
}
function Zn(n) {
  return { sliderProps: new u({ keyScale: n.keyScale, max: n.max, min: n.min }), textProps: new u({ formatter: f(n.formatter), keyScale: n.keyScale, pointerScale: f(n.pointerScale) }) };
}
const ks = { containerUnitSize: "cnt-usz" };
function Jn(n) {
  return `--${ks[n]}`;
}
function kt(n) {
  return jn(n);
}
function H(n) {
  if (pe(n)) return _(n, kt);
}
function R(n, t) {
  if (!n) return;
  const e = [], r = On(n, t);
  r && e.push(r);
  const i = Dn(n);
  return i && e.push(i), new At(e);
}
function Vs(n) {
  return n ? n.major === dt.major : false;
}
function tr(n) {
  if (n === "inline" || n === "popup") return n;
}
function jt(n, t) {
  n.write(t);
}
const Nt = h("ckb");
class Ss {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.element = t.createElement("div"), this.element.classList.add(Nt()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("label");
    r.classList.add(Nt("l")), this.element.appendChild(r), this.labelElement = r;
    const i = t.createElement("input");
    i.classList.add(Nt("i")), i.type = "checkbox", this.labelElement.appendChild(i), this.inputElement = i, e.viewProps.bindDisabled(this.inputElement);
    const s = t.createElement("div");
    s.classList.add(Nt("w")), this.labelElement.appendChild(s);
    const o = Qt(t, "check");
    s.appendChild(o), e.value.emitter.on("change", this.onValueChange_), this.value = e.value, this.update_();
  }
  update_() {
    this.inputElement.checked = this.value.rawValue;
  }
  onValueChange_() {
    this.update_();
  }
}
class Ls {
  constructor(t, e) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new Ss(t, { value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_);
  }
  onInputChange_(t) {
    const e = t.currentTarget;
    this.value.rawValue = e.checked, t.preventDefault(), t.stopPropagation();
  }
  onLabelMouseDown_(t) {
    t.preventDefault();
  }
}
function Ms(n) {
  const t = [], e = Ae(n.options);
  return e && t.push(e), new At(t);
}
const As = y({ id: "input-bool", type: "input", accept: (n, t) => {
  if (typeof n != "boolean") return null;
  const e = _(t, (r) => ({ options: r.optional.custom(Dt), readonly: r.optional.constant(false) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Wn, constraint: (n) => Ms(n.params), writer: (n) => jt }, controller: (n) => {
  const t = n.document, e = n.value, r = n.constraint, i = r && Gt(r, Ot);
  return i ? new G(t, { props: new u({ options: i.values.value("options") }), value: e, viewProps: n.viewProps }) : new Ls(t, { value: e, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "boolean" ? null : n.controller.valueController instanceof G ? new Le(n.controller) : null;
} }), X = h("col");
class Os {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(X()), e.foldable.bindExpandedClass(this.element, X(void 0, "expanded")), O(e.foldable, "completed", ct(this.element, X(void 0, "cpl")));
    const r = t.createElement("div");
    r.classList.add(X("h")), this.element.appendChild(r);
    const i = t.createElement("div");
    i.classList.add(X("s")), r.appendChild(i), this.swatchElement = i;
    const s = t.createElement("div");
    if (s.classList.add(X("t")), r.appendChild(s), this.textElement = s, e.pickerLayout === "inline") {
      const o = t.createElement("div");
      o.classList.add(X("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
}
function Ds(n, t, e) {
  const r = C(n / 255, 0, 1), i = C(t / 255, 0, 1), s = C(e / 255, 0, 1), o = Math.max(r, i, s), a = Math.min(r, i, s), l = o - a;
  let p = 0, c = 0;
  const d = (a + o) / 2;
  return l !== 0 && (c = l / (1 - Math.abs(o + a - 1)), r === o ? p = (i - s) / l : i === o ? p = 2 + (s - r) / l : p = 4 + (r - i) / l, p = p / 6 + (p < 0 ? 1 : 0)), [p * 360, c * 100, d * 100];
}
function Ts(n, t, e) {
  const r = (n % 360 + 360) % 360, i = C(t / 100, 0, 1), s = C(e / 100, 0, 1), o = (1 - Math.abs(2 * s - 1)) * i, a = o * (1 - Math.abs(r / 60 % 2 - 1)), l = s - o / 2;
  let p, c, d;
  return r >= 0 && r < 60 ? [p, c, d] = [o, a, 0] : r >= 60 && r < 120 ? [p, c, d] = [a, o, 0] : r >= 120 && r < 180 ? [p, c, d] = [0, o, a] : r >= 180 && r < 240 ? [p, c, d] = [0, a, o] : r >= 240 && r < 300 ? [p, c, d] = [a, 0, o] : [p, c, d] = [o, 0, a], [(p + l) * 255, (c + l) * 255, (d + l) * 255];
}
function js(n, t, e) {
  const r = C(n / 255, 0, 1), i = C(t / 255, 0, 1), s = C(e / 255, 0, 1), o = Math.max(r, i, s), a = Math.min(r, i, s), l = o - a;
  let p;
  l === 0 ? p = 0 : o === r ? p = 60 * (((i - s) / l % 6 + 6) % 6) : o === i ? p = 60 * ((s - r) / l + 2) : p = 60 * ((r - i) / l + 4);
  const c = o === 0 ? 0 : l / o, d = o;
  return [p, c * 100, d * 100];
}
function er(n, t, e) {
  const r = Ln(n, 360), i = C(t / 100, 0, 1), s = C(e / 100, 0, 1), o = s * i, a = o * (1 - Math.abs(r / 60 % 2 - 1)), l = s - o;
  let p, c, d;
  return r >= 0 && r < 60 ? [p, c, d] = [o, a, 0] : r >= 60 && r < 120 ? [p, c, d] = [a, o, 0] : r >= 120 && r < 180 ? [p, c, d] = [0, o, a] : r >= 180 && r < 240 ? [p, c, d] = [0, a, o] : r >= 240 && r < 300 ? [p, c, d] = [a, 0, o] : [p, c, d] = [o, 0, a], [(p + l) * 255, (c + l) * 255, (d + l) * 255];
}
function Rs(n, t, e) {
  const r = e + t * (100 - Math.abs(2 * e - 100)) / 200;
  return [n, r !== 0 ? t * (100 - Math.abs(2 * e - 100)) / r : 0, e + t * (100 - Math.abs(2 * e - 100)) / (2 * 100)];
}
function Bs(n, t, e) {
  const r = 100 - Math.abs(e * (200 - t) / 100 - 100);
  return [n, r !== 0 ? t * e / r : 0, e * (200 - t) / (2 * 100)];
}
function D(n) {
  return [n[0], n[1], n[2]];
}
function Jt(n, t) {
  return [n[0], n[1], n[2], t];
}
const Is = { hsl: { hsl: (n, t, e) => [n, t, e], hsv: Rs, rgb: Ts }, hsv: { hsl: Bs, hsv: (n, t, e) => [n, t, e], rgb: er }, rgb: { hsl: Ds, hsv: js, rgb: (n, t, e) => [n, t, e] } };
function pt(n, t) {
  return [t === "float" ? 1 : n === "rgb" ? 255 : 360, t === "float" ? 1 : n === "rgb" ? 255 : 100, t === "float" ? 1 : n === "rgb" ? 255 : 100];
}
function Ns(n, t) {
  return n === t ? t : Ln(n, t);
}
function nr(n, t, e) {
  var r;
  const i = pt(t, e);
  return [t === "rgb" ? C(n[0], 0, i[0]) : Ns(n[0], i[0]), C(n[1], 0, i[1]), C(n[2], 0, i[2]), C((r = n[3]) !== null && r !== void 0 ? r : 1, 0, 1)];
}
function sn(n, t, e, r) {
  const i = pt(t, e), s = pt(t, r);
  return n.map((o, a) => o / i[a] * s[a]);
}
function rr(n, t, e) {
  const r = sn(n, t.mode, t.type, "int"), i = Is[t.mode][e.mode](...r);
  return sn(i, e.mode, "int", e.type);
}
class v {
  static black() {
    return new v([0, 0, 0], "rgb");
  }
  constructor(t, e) {
    this.type = "int", this.mode = e, this.comps_ = nr(t, e, this.type);
  }
  getComponents(t) {
    return Jt(rr(D(this.comps_), { mode: this.mode, type: this.type }, { mode: t ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const t = this.getComponents("rgb");
    return { r: t[0], g: t[1], b: t[2], a: t[3] };
  }
}
const K = h("colp");
class Fs {
  constructor(t, e) {
    this.alphaViews_ = null, this.element = t.createElement("div"), this.element.classList.add(K()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("div");
    r.classList.add(K("hsv"));
    const i = t.createElement("div");
    i.classList.add(K("sv")), this.svPaletteView_ = e.svPaletteView, i.appendChild(this.svPaletteView_.element), r.appendChild(i);
    const s = t.createElement("div");
    s.classList.add(K("h")), this.hPaletteView_ = e.hPaletteView, s.appendChild(this.hPaletteView_.element), r.appendChild(s), this.element.appendChild(r);
    const o = t.createElement("div");
    if (o.classList.add(K("rgb")), this.textsView_ = e.textsView, o.appendChild(this.textsView_.element), this.element.appendChild(o), e.alphaViews) {
      this.alphaViews_ = { palette: e.alphaViews.palette, text: e.alphaViews.text };
      const a = t.createElement("div");
      a.classList.add(K("a"));
      const l = t.createElement("div");
      l.classList.add(K("ap")), l.appendChild(this.alphaViews_.palette.element), a.appendChild(l);
      const p = t.createElement("div");
      p.classList.add(K("at")), p.appendChild(this.alphaViews_.text.element), a.appendChild(p), this.element.appendChild(a);
    }
  }
  get allFocusableElements() {
    const t = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map((e) => e.inputElement)];
    return this.alphaViews_ && t.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), t;
  }
}
function Ks(n) {
  return n === "int" ? "int" : n === "float" ? "float" : void 0;
}
function Oe(n) {
  return _(n, (t) => ({ color: t.optional.object({ alpha: t.optional.boolean, type: t.optional.custom(Ks) }), expanded: t.optional.boolean, picker: t.optional.custom(tr), readonly: t.optional.constant(false) }));
}
function et(n) {
  return n ? 0.1 : 1;
}
function ir(n) {
  var t;
  return (t = n.color) === null || t === void 0 ? void 0 : t.type;
}
class De {
  constructor(t, e) {
    this.type = "float", this.mode = e, this.comps_ = nr(t, e, this.type);
  }
  getComponents(t) {
    return Jt(rr(D(this.comps_), { mode: this.mode, type: this.type }, { mode: t ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const t = this.getComponents("rgb");
    return { r: t[0], g: t[1], b: t[2], a: t[3] };
  }
}
const zs = { int: (n, t) => new v(n, t), float: (n, t) => new De(n, t) };
function Te(n, t, e) {
  return zs[e](n, t);
}
function $s(n) {
  return n.type === "float";
}
function Us(n) {
  return n.type === "int";
}
function Hs(n) {
  const t = n.getComponents(), e = pt(n.mode, "int");
  return new v([Math.round(m(t[0], 0, 1, 0, e[0])), Math.round(m(t[1], 0, 1, 0, e[1])), Math.round(m(t[2], 0, 1, 0, e[2])), t[3]], n.mode);
}
function qs(n) {
  const t = n.getComponents(), e = pt(n.mode, "int");
  return new De([m(t[0], 0, e[0], 0, 1), m(t[1], 0, e[1], 0, 1), m(t[2], 0, e[2], 0, 1), t[3]], n.mode);
}
function x(n, t) {
  if (n.type === t) return n;
  if (Us(n) && t === "float") return qs(n);
  if ($s(n) && t === "int") return Hs(n);
  throw w.shouldNeverHappen();
}
function Gs(n, t) {
  return n.alpha === t.alpha && n.mode === t.mode && n.notation === t.notation && n.type === t.type;
}
function M(n, t) {
  const e = n.match(/^(.+)%$/);
  return Math.min(e ? parseFloat(e[1]) * 0.01 * t : parseFloat(n), t);
}
const Ys = { deg: (n) => n, grad: (n) => n * 360 / 400, rad: (n) => n * 360 / (2 * Math.PI), turn: (n) => n * 360 };
function sr(n) {
  const t = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
  if (!t) return parseFloat(n);
  const e = parseFloat(t[1]), r = t[2];
  return Ys[r](e);
}
function or(n) {
  const t = n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [M(t[1], 255), M(t[2], 255), M(t[3], 255)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function Ws(n) {
  const t = or(n);
  return t ? new v(t, "rgb") : null;
}
function ar(n) {
  const t = n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [M(t[1], 255), M(t[2], 255), M(t[3], 255), M(t[4], 1)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function Xs(n) {
  const t = ar(n);
  return t ? new v(t, "rgb") : null;
}
function lr(n) {
  const t = n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [sr(t[1]), M(t[2], 100), M(t[3], 100)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function Qs(n) {
  const t = lr(n);
  return t ? new v(t, "hsl") : null;
}
function pr(n) {
  const t = n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [sr(t[1]), M(t[2], 100), M(t[3], 100), M(t[4], 1)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function Zs(n) {
  const t = pr(n);
  return t ? new v(t, "hsl") : null;
}
function cr(n) {
  const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (t) return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
  const e = n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : null;
}
function Js(n) {
  const t = cr(n);
  return t ? new v(t, "rgb") : null;
}
function dr(n) {
  const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (t) return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), m(parseInt(t[4] + t[4], 16), 0, 255, 0, 1)];
  const e = n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), m(parseInt(e[4], 16), 0, 255, 0, 1)] : null;
}
function to(n) {
  const t = dr(n);
  return t ? new v(t, "rgb") : null;
}
function ur(n) {
  const t = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!t) return null;
  const e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3])];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function eo(n) {
  return (t) => {
    const e = ur(t);
    return e ? Te(e, "rgb", n) : null;
  };
}
function hr(n) {
  const t = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!t) return null;
  const e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4])];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function no(n) {
  return (t) => {
    const e = hr(t);
    return e ? Te(e, "rgb", n) : null;
  };
}
const ro = [{ parser: cr, result: { alpha: false, mode: "rgb", notation: "hex" } }, { parser: dr, result: { alpha: true, mode: "rgb", notation: "hex" } }, { parser: or, result: { alpha: false, mode: "rgb", notation: "func" } }, { parser: ar, result: { alpha: true, mode: "rgb", notation: "func" } }, { parser: lr, result: { alpha: false, mode: "hsl", notation: "func" } }, { parser: pr, result: { alpha: true, mode: "hsl", notation: "func" } }, { parser: ur, result: { alpha: false, mode: "rgb", notation: "object" } }, { parser: hr, result: { alpha: true, mode: "rgb", notation: "object" } }];
function io(n) {
  return ro.reduce((t, { parser: e, result: r }) => t || (e(n) ? r : null), null);
}
function so(n, t = "int") {
  const e = io(n);
  return e ? e.notation === "hex" && t !== "float" ? Object.assign(Object.assign({}, e), { type: "int" }) : e.notation === "func" ? Object.assign(Object.assign({}, e), { type: t }) : null : null;
}
function Rt(n) {
  const t = [Js, to, Ws, Xs, Qs, Zs];
  t.push(eo("int"), no("int"));
  const e = ws(t);
  return (r) => {
    const i = e(r);
    return i ? x(i, n) : null;
  };
}
function oo(n) {
  const t = Rt("int");
  if (typeof n != "string") return v.black();
  const e = t(n);
  return e ?? v.black();
}
function vr(n) {
  const t = C(Math.floor(n), 0, 255).toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function je(n, t = "#") {
  const e = D(n.getComponents("rgb")).map(vr).join("");
  return `${t}${e}`;
}
function Re(n, t = "#") {
  const e = n.getComponents("rgb"), r = [e[0], e[1], e[2], e[3] * 255].map(vr).join("");
  return `${t}${r}`;
}
function mr(n) {
  const t = E(0), e = x(n, "int");
  return `rgb(${D(e.getComponents("rgb")).map((i) => t(i)).join(", ")})`;
}
function Ft(n) {
  const t = E(2), e = E(0);
  return `rgba(${x(n, "int").getComponents("rgb").map((s, o) => (o === 3 ? t : e)(s)).join(", ")})`;
}
function ao(n) {
  const t = [E(0), Yt, Yt], e = x(n, "int");
  return `hsl(${D(e.getComponents("hsl")).map((i, s) => t[s](i)).join(", ")})`;
}
function lo(n) {
  const t = [E(0), Yt, Yt, E(2)];
  return `hsla(${x(n, "int").getComponents("hsl").map((i, s) => t[s](i)).join(", ")})`;
}
function br(n, t) {
  const e = E(t === "float" ? 2 : 0), r = ["r", "g", "b"], i = x(n, t);
  return `{${D(i.getComponents("rgb")).map((o, a) => `${r[a]}: ${e(o)}`).join(", ")}}`;
}
function po(n) {
  return (t) => br(t, n);
}
function fr(n, t) {
  const e = E(2), r = E(t === "float" ? 2 : 0), i = ["r", "g", "b", "a"];
  return `{${x(n, t).getComponents("rgb").map((a, l) => {
    const p = l === 3 ? e : r;
    return `${i[l]}: ${p(a)}`;
  }).join(", ")}}`;
}
function co(n) {
  return (t) => fr(t, n);
}
const uo = [{ format: { alpha: false, mode: "rgb", notation: "hex", type: "int" }, stringifier: je }, { format: { alpha: true, mode: "rgb", notation: "hex", type: "int" }, stringifier: Re }, { format: { alpha: false, mode: "rgb", notation: "func", type: "int" }, stringifier: mr }, { format: { alpha: true, mode: "rgb", notation: "func", type: "int" }, stringifier: Ft }, { format: { alpha: false, mode: "hsl", notation: "func", type: "int" }, stringifier: ao }, { format: { alpha: true, mode: "hsl", notation: "func", type: "int" }, stringifier: lo }, ...["int", "float"].reduce((n, t) => [...n, { format: { alpha: false, mode: "rgb", notation: "object", type: t }, stringifier: po(t) }, { format: { alpha: true, mode: "rgb", notation: "object", type: t }, stringifier: co(t) }], [])];
function _r(n) {
  return uo.reduce((t, e) => t || (Gs(e.format, n) ? e.stringifier : null), null);
}
const ft = h("apl");
class ho {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.element = t.createElement("div"), this.element.classList.add(ft()), e.viewProps.bindClassModifiers(this.element), e.viewProps.bindTabIndex(this.element);
    const r = t.createElement("div");
    r.classList.add(ft("b")), this.element.appendChild(r);
    const i = t.createElement("div");
    i.classList.add(ft("c")), r.appendChild(i), this.colorElem_ = i;
    const s = t.createElement("div");
    s.classList.add(ft("m")), this.element.appendChild(s), this.markerElem_ = s;
    const o = t.createElement("div");
    o.classList.add(ft("p")), this.markerElem_.appendChild(o), this.previewElem_ = o, this.update_();
  }
  update_() {
    const t = this.value.rawValue, e = t.getComponents("rgb"), r = new v([e[0], e[1], e[2], 0], "rgb"), i = new v([e[0], e[1], e[2], 255], "rgb"), s = ["to right", Ft(r), Ft(i)];
    this.colorElem_.style.background = `linear-gradient(${s.join(",")})`, this.previewElem_.style.backgroundColor = Ft(t);
    const o = m(e[3], 0, 1, 0, 100);
    this.markerElem_.style.left = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class vo {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new ho(t, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new rt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const r = t.point.x / t.bounds.width, i = this.value.rawValue, [s, o, a] = i.getComponents("hsv");
    this.value.setRawValue(new v([s, o, a, r], "hsv"), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: true, last: true });
  }
  onKeyDown_(t) {
    const e = P(et(true), N(t));
    if (e === 0) return;
    const r = this.value.rawValue, [i, s, o, a] = r.getComponents("hsv");
    this.value.setRawValue(new v([i, s, o, a + e], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    P(et(true), N(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const it = h("coltxt");
function mo(n) {
  const t = n.createElement("select"), e = [{ text: "RGB", value: "rgb" }, { text: "HSL", value: "hsl" }, { text: "HSV", value: "hsv" }, { text: "HEX", value: "hex" }];
  return t.appendChild(e.reduce((r, i) => {
    const s = n.createElement("option");
    return s.textContent = i.text, s.value = i.value, r.appendChild(s), r;
  }, n.createDocumentFragment())), t;
}
class bo {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(it()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("div");
    r.classList.add(it("m")), this.modeElem_ = mo(t), this.modeElem_.classList.add(it("ms")), r.appendChild(this.modeSelectElement), e.viewProps.bindDisabled(this.modeElem_);
    const i = t.createElement("div");
    i.classList.add(it("mm")), i.appendChild(Qt(t, "dropdown")), r.appendChild(i), this.element.appendChild(r);
    const s = t.createElement("div");
    s.classList.add(it("w")), this.element.appendChild(s), this.inputsElem_ = s, this.inputViews_ = e.inputViews, this.applyInputViews_(), B(e.mode, (o) => {
      this.modeElem_.value = o;
    });
  }
  get modeSelectElement() {
    return this.modeElem_;
  }
  get inputViews() {
    return this.inputViews_;
  }
  set inputViews(t) {
    this.inputViews_ = t, this.applyInputViews_();
  }
  applyInputViews_() {
    In(this.inputsElem_);
    const t = this.element.ownerDocument;
    this.inputViews_.forEach((e) => {
      const r = t.createElement("div");
      r.classList.add(it("c")), r.appendChild(e.element), this.inputsElem_.appendChild(r);
    });
  }
}
function fo(n) {
  return E(n === "float" ? 2 : 0);
}
function _o(n, t, e) {
  const r = pt(n, t)[e];
  return new St({ min: 0, max: r });
}
function wo(n, t, e) {
  return new Tt(n, { arrayPosition: e === 0 ? "fst" : e === 2 ? "lst" : "mid", parser: t.parser, props: u.fromObject({ formatter: fo(t.colorType), keyScale: et(false), pointerScale: t.colorType === "float" ? 0.01 : 1 }), value: f(0, { constraint: _o(t.colorMode, t.colorType, e) }), viewProps: t.viewProps });
}
function go(n, t) {
  const e = { colorMode: t.colorMode, colorType: t.colorType, parser: I, viewProps: t.viewProps };
  return [0, 1, 2].map((r) => {
    const i = wo(n, e, r);
    return ht({ primary: t.value, secondary: i.value, forward(s) {
      return x(s, t.colorType).getComponents(t.colorMode)[r];
    }, backward(s, o) {
      const a = t.colorMode, p = x(s, t.colorType).getComponents(a);
      p[r] = o;
      const c = Te(Jt(D(p), p[3]), a, t.colorType);
      return x(c, "int");
    } }), i;
  });
}
function Co(n, t) {
  const e = new Pt(n, { parser: Rt("int"), props: u.fromObject({ formatter: je }), value: f(v.black()), viewProps: t.viewProps });
  return ht({ primary: t.value, secondary: e.value, forward: (r) => new v(D(r.getComponents()), r.mode), backward: (r, i) => new v(Jt(D(i.getComponents(r.mode)), r.getComponents()[3]), r.mode) }), [e];
}
function xo(n) {
  return n !== "hex";
}
class yo {
  constructor(t, e) {
    this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = e.colorType, this.value = e.value, this.viewProps = e.viewProps, this.colorMode = f(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(t), this.view = new bo(t, { mode: this.colorMode, inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view], viewProps: this.viewProps }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
  }
  createComponentControllers_(t) {
    const e = this.colorMode.rawValue;
    return xo(e) ? go(t, { colorMode: e, colorType: this.colorType_, value: this.value, viewProps: this.viewProps }) : Co(t, { value: this.value, viewProps: this.viewProps });
  }
  onModeSelectChange_(t) {
    const e = t.currentTarget;
    this.colorMode.rawValue = e.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.inputViews = this.ccs_.map((r) => r.view);
  }
}
const se = h("hpl");
class Po {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.element = t.createElement("div"), this.element.classList.add(se()), e.viewProps.bindClassModifiers(this.element), e.viewProps.bindTabIndex(this.element);
    const r = t.createElement("div");
    r.classList.add(se("c")), this.element.appendChild(r);
    const i = t.createElement("div");
    i.classList.add(se("m")), this.element.appendChild(i), this.markerElem_ = i, this.update_();
  }
  update_() {
    const t = this.value.rawValue, [e] = t.getComponents("hsv");
    this.markerElem_.style.backgroundColor = mr(new v([e, 100, 100], "hsv"));
    const r = m(e, 0, 360, 0, 100);
    this.markerElem_.style.left = `${r}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class Eo {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new Po(t, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new rt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const r = m(C(t.point.x, 0, t.bounds.width), 0, t.bounds.width, 0, 360), i = this.value.rawValue, [, s, o, a] = i.getComponents("hsv");
    this.value.setRawValue(new v([r, s, o, a], "hsv"), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: true, last: true });
  }
  onKeyDown_(t) {
    const e = P(et(false), N(t));
    if (e === 0) return;
    const r = this.value.rawValue, [i, s, o, a] = r.getComponents("hsv");
    this.value.setRawValue(new v([i + e, s, o, a], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    P(et(false), N(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const oe = h("svp"), on = 64;
class ko {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.element = t.createElement("div"), this.element.classList.add(oe()), e.viewProps.bindClassModifiers(this.element), e.viewProps.bindTabIndex(this.element);
    const r = t.createElement("canvas");
    r.height = on, r.width = on, r.classList.add(oe("c")), this.element.appendChild(r), this.canvasElement = r;
    const i = t.createElement("div");
    i.classList.add(oe("m")), this.element.appendChild(i), this.markerElem_ = i, this.update_();
  }
  update_() {
    const t = Pi(this.canvasElement);
    if (!t) return;
    const r = this.value.rawValue.getComponents("hsv"), i = this.canvasElement.width, s = this.canvasElement.height, o = t.getImageData(0, 0, i, s), a = o.data;
    for (let c = 0; c < s; c++) for (let d = 0; d < i; d++) {
      const k = m(d, 0, i, 0, 100), T = m(c, 0, s, 100, 0), Y = er(r[0], k, T), W = (c * i + d) * 4;
      a[W] = Y[0], a[W + 1] = Y[1], a[W + 2] = Y[2], a[W + 3] = 255;
    }
    t.putImageData(o, 0, 0);
    const l = m(r[1], 0, 100, 0, 100);
    this.markerElem_.style.left = `${l}%`;
    const p = m(r[2], 0, 100, 100, 0);
    this.markerElem_.style.top = `${p}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class Vo {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new ko(t, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new rt(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const r = m(t.point.x, 0, t.bounds.width, 0, 100), i = m(t.point.y, 0, t.bounds.height, 100, 0), [s, , , o] = this.value.rawValue.getComponents("hsv");
    this.value.setRawValue(new v([s, r, i, o], "hsv"), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: true, last: true });
  }
  onKeyDown_(t) {
    Qn(t.key) && t.preventDefault();
    const [e, r, i, s] = this.value.rawValue.getComponents("hsv"), o = et(false), a = P(o, N(t)), l = P(o, Et(t));
    a === 0 && l === 0 || this.value.setRawValue(new v([e, r + a, i + l, s], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    const e = et(false), r = P(e, N(t)), i = P(e, Et(t));
    r === 0 && i === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
class So {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.hPaletteC_ = new Eo(t, { value: this.value, viewProps: this.viewProps }), this.svPaletteC_ = new Vo(t, { value: this.value, viewProps: this.viewProps }), this.alphaIcs_ = e.supportsAlpha ? { palette: new vo(t, { value: this.value, viewProps: this.viewProps }), text: new Tt(t, { parser: I, props: u.fromObject({ pointerScale: 0.01, keyScale: 0.1, formatter: E(2) }), value: f(0, { constraint: new St({ min: 0, max: 1 }) }), viewProps: this.viewProps }) } : null, this.alphaIcs_ && ht({ primary: this.value, secondary: this.alphaIcs_.text.value, forward: (r) => r.getComponents()[3], backward: (r, i) => {
      const s = r.getComponents();
      return s[3] = i, new v(s, r.mode);
    } }), this.textsC_ = new yo(t, { colorType: e.colorType, value: this.value, viewProps: this.viewProps }), this.view = new Fs(t, { alphaViews: this.alphaIcs_ ? { palette: this.alphaIcs_.palette.view, text: this.alphaIcs_.text.view } : null, hPaletteView: this.hPaletteC_.view, supportsAlpha: e.supportsAlpha, svPaletteView: this.svPaletteC_.view, textsView: this.textsC_.view, viewProps: this.viewProps });
  }
  get textsController() {
    return this.textsC_;
  }
}
const ae = h("colsw");
class Lo {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), e.value.emitter.on("change", this.onValueChange_), this.value = e.value, this.element = t.createElement("div"), this.element.classList.add(ae()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("div");
    r.classList.add(ae("sw")), this.element.appendChild(r), this.swatchElem_ = r;
    const i = t.createElement("button");
    i.classList.add(ae("b")), e.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i, this.update_();
  }
  update_() {
    const t = this.value.rawValue;
    this.swatchElem_.style.backgroundColor = Re(t);
  }
  onValueChange_() {
    this.update_();
  }
}
class Mo {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.view = new Lo(t, { value: this.value, viewProps: this.viewProps });
  }
}
class Be {
  constructor(t, e) {
    this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.foldable_ = Mt.create(e.expanded), this.swatchC_ = new Mo(t, { value: this.value, viewProps: this.viewProps });
    const r = this.swatchC_.view.buttonElement;
    r.addEventListener("blur", this.onButtonBlur_), r.addEventListener("click", this.onButtonClick_), this.textC_ = new Pt(t, { parser: e.parser, props: u.fromObject({ formatter: e.formatter }), value: this.value, viewProps: this.viewProps }), this.view = new Os(t, { foldable: this.foldable_, pickerLayout: e.pickerLayout }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = e.pickerLayout === "popup" ? new Yn(t, { viewProps: this.viewProps }) : null;
    const i = new So(t, { colorType: e.colorType, supportsAlpha: e.supportsAlpha, value: this.value, viewProps: this.viewProps });
    i.view.allFocusableElements.forEach((s) => {
      s.addEventListener("blur", this.onPopupChildBlur_), s.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = i, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(i.view.element), ht({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (s) => s, backward: (s, o) => o })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Se(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onButtonBlur_(t) {
    if (!this.popC_) return;
    const e = this.view.element, r = t.relatedTarget;
    (!r || !e.contains(r)) && (this.popC_.shows.rawValue = false);
  }
  onButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(t) {
    if (!this.popC_) return;
    const e = this.popC_.view.element, r = Nn(t);
    r && e.contains(r) || r && r === this.swatchC_.view.buttonElement && !xe(e.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(t) {
    this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && t.key === "Escape" && this.swatchC_.view.buttonElement.focus();
  }
}
function Ao(n) {
  return D(n.getComponents("rgb")).reduce((t, e) => t << 8 | Math.floor(e) & 255, 0);
}
function Oo(n) {
  return n.getComponents("rgb").reduce((t, e, r) => {
    const i = Math.floor(r === 3 ? e * 255 : e) & 255;
    return t << 8 | i;
  }, 0) >>> 0;
}
function Do(n) {
  return new v([n >> 16 & 255, n >> 8 & 255, n & 255], "rgb");
}
function To(n) {
  return new v([n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, m(n & 255, 0, 255, 0, 1)], "rgb");
}
function jo(n) {
  return typeof n != "number" ? v.black() : Do(n);
}
function Ro(n) {
  return typeof n != "number" ? v.black() : To(n);
}
function Kt(n, t) {
  return typeof n != "object" || b(n) ? false : t in n && typeof n[t] == "number";
}
function wr(n) {
  return Kt(n, "r") && Kt(n, "g") && Kt(n, "b");
}
function gr(n) {
  return wr(n) && Kt(n, "a");
}
function Cr(n) {
  return wr(n);
}
function Ie(n, t) {
  if (n.mode !== t.mode || n.type !== t.type) return false;
  const e = n.getComponents(), r = t.getComponents();
  for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) return false;
  return true;
}
function an(n) {
  return "a" in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b];
}
function Bo(n) {
  const t = _r(n);
  return t ? (e, r) => {
    jt(e, t(r));
  } : null;
}
function Io(n) {
  const t = n ? Oo : Ao;
  return (e, r) => {
    jt(e, t(r));
  };
}
function No(n, t, e) {
  const i = x(t, e).toRgbaObject();
  n.writeProperty("r", i.r), n.writeProperty("g", i.g), n.writeProperty("b", i.b), n.writeProperty("a", i.a);
}
function Fo(n, t, e) {
  const i = x(t, e).toRgbaObject();
  n.writeProperty("r", i.r), n.writeProperty("g", i.g), n.writeProperty("b", i.b);
}
function Ko(n, t) {
  return (e, r) => {
    n ? No(e, r, t) : Fo(e, r, t);
  };
}
function zo(n) {
  var t;
  return !!(!((t = n == null ? void 0 : n.color) === null || t === void 0) && t.alpha);
}
function $o(n) {
  return n ? (t) => Re(t, "0x") : (t) => je(t, "0x");
}
function Uo(n) {
  return "color" in n || n.view === "color";
}
const Ho = y({ id: "input-color-number", type: "input", accept: (n, t) => {
  if (typeof n != "number" || !Uo(t)) return null;
  const e = Oe(t);
  return e ? { initialValue: n, params: Object.assign(Object.assign({}, e), { supportsAlpha: zo(t) }) } : null;
}, binding: { reader: (n) => n.params.supportsAlpha ? Ro : jo, equals: Ie, writer: (n) => Io(n.params.supportsAlpha) }, controller: (n) => {
  var t, e;
  return new Be(n.document, { colorType: "int", expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, formatter: $o(n.params.supportsAlpha), parser: Rt("int"), pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", supportsAlpha: n.params.supportsAlpha, value: n.value, viewProps: n.viewProps });
} });
function qo(n, t) {
  if (!Cr(n)) return x(v.black(), t);
  if (t === "int") {
    const e = an(n);
    return new v(e, "rgb");
  }
  if (t === "float") {
    const e = an(n);
    return new De(e, "rgb");
  }
  return x(v.black(), "int");
}
function Go(n) {
  return gr(n);
}
function Yo(n) {
  return (t) => {
    const e = qo(t, n);
    return x(e, "int");
  };
}
function Wo(n, t) {
  return (e) => n ? fr(e, t) : br(e, t);
}
const Xo = y({ id: "input-color-object", type: "input", accept: (n, t) => {
  var e;
  if (!Cr(n)) return null;
  const r = Oe(t);
  return r ? { initialValue: n, params: Object.assign(Object.assign({}, r), { colorType: (e = ir(t)) !== null && e !== void 0 ? e : "int" }) } : null;
}, binding: { reader: (n) => Yo(n.params.colorType), equals: Ie, writer: (n) => Ko(Go(n.initialValue), n.params.colorType) }, controller: (n) => {
  var t, e;
  const r = gr(n.initialValue);
  return new Be(n.document, { colorType: n.params.colorType, expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, formatter: Wo(r, n.params.colorType), parser: Rt("int"), pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", supportsAlpha: r, value: n.value, viewProps: n.viewProps });
} }), Qo = y({ id: "input-color-string", type: "input", accept: (n, t) => {
  if (typeof n != "string" || t.view === "text") return null;
  const e = so(n, ir(t));
  if (!e) return null;
  const r = _r(e);
  if (!r) return null;
  const i = Oe(t);
  return i ? { initialValue: n, params: Object.assign(Object.assign({}, i), { format: e, stringifier: r }) } : null;
}, binding: { reader: () => oo, equals: Ie, writer: (n) => {
  const t = Bo(n.params.format);
  if (!t) throw w.notBindable();
  return t;
} }, controller: (n) => {
  var t, e;
  return new Be(n.document, { colorType: n.params.format.type, expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, formatter: n.params.stringifier, parser: Rt("int"), pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", supportsAlpha: n.params.format.alpha, value: n.value, viewProps: n.viewProps });
} });
class Ne {
  constructor(t) {
    this.components = t.components, this.asm_ = t.assembly;
  }
  constrain(t) {
    const e = this.asm_.toComponents(t).map((r, i) => {
      var s, o;
      return (o = (s = this.components[i]) === null || s === void 0 ? void 0 : s.constrain(r)) !== null && o !== void 0 ? o : r;
    });
    return this.asm_.fromComponents(e);
  }
}
const ln = h("pndtxt");
class Zo {
  constructor(t, e) {
    this.textViews = e.textViews, this.element = t.createElement("div"), this.element.classList.add(ln()), this.textViews.forEach((r) => {
      const i = t.createElement("div");
      i.classList.add(ln("a")), i.appendChild(r.element), this.element.appendChild(i);
    });
  }
}
function Jo(n, t, e) {
  return new Tt(n, { arrayPosition: e === 0 ? "fst" : e === t.axes.length - 1 ? "lst" : "mid", parser: t.parser, props: t.axes[e].textProps, value: f(0, { constraint: t.axes[e].constraint }), viewProps: t.viewProps });
}
class Fe {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.acs_ = e.axes.map((r, i) => Jo(t, e, i)), this.acs_.forEach((r, i) => {
      ht({ primary: this.value, secondary: r.value, forward: (s) => e.assembly.toComponents(s)[i], backward: (s, o) => {
        const a = e.assembly.toComponents(s);
        return a[i] = o, e.assembly.fromComponents(a);
      } });
    }), this.view = new Zo(t, { textViews: this.acs_.map((r) => r.view) });
  }
  get textControllers() {
    return this.acs_;
  }
}
class ta extends yt {
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(t) {
    this.controller.valueController.sliderController.props.set("max", t);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(t) {
    this.controller.valueController.sliderController.props.set("min", t);
  }
}
function ea(n, t) {
  const e = [], r = On(n, t);
  r && e.push(r);
  const i = Dn(n);
  i && e.push(i);
  const s = Ae(n.options);
  return s && e.push(s), new At(e);
}
const na = y({ id: "input-number", type: "input", accept: (n, t) => {
  if (typeof n != "number") return null;
  const e = _(t, (r) => Object.assign(Object.assign({}, jn(r)), { options: r.optional.custom(Dt), readonly: r.optional.constant(false) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Sn, constraint: (n) => ea(n.params, n.initialValue), writer: (n) => jt }, controller: (n) => {
  const t = n.value, e = n.constraint, r = e && Gt(e, Ot);
  if (r) return new G(n.document, { props: new u({ options: r.values.value("options") }), value: t, viewProps: n.viewProps });
  const i = Tn(n.params, t.rawValue), s = e && Gt(e, St);
  return s ? new Wt(n.document, Object.assign(Object.assign({}, Zn(Object.assign(Object.assign({}, i), { keyScale: f(i.keyScale), max: s.values.value("max"), min: s.values.value("min") }))), { parser: I, value: t, viewProps: n.viewProps })) : new Tt(n.document, { parser: I, props: u.fromObject(i), value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "number" ? null : n.controller.valueController instanceof Wt ? new ta(n.controller) : n.controller.valueController instanceof G ? new Le(n.controller) : null;
} });
class q {
  constructor(t = 0, e = 0) {
    this.x = t, this.y = e;
  }
  getComponents() {
    return [this.x, this.y];
  }
  static isObject(t) {
    if (b(t)) return false;
    const e = t.x, r = t.y;
    return !(typeof e != "number" || typeof r != "number");
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
}
const xr = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new q(...n) }, st = h("p2d");
class ra {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(st()), e.viewProps.bindClassModifiers(this.element), B(e.expanded, ct(this.element, st(void 0, "expanded")));
    const r = t.createElement("div");
    r.classList.add(st("h")), this.element.appendChild(r);
    const i = t.createElement("button");
    i.classList.add(st("b")), i.appendChild(Qt(t, "p2dpad")), e.viewProps.bindDisabled(i), r.appendChild(i), this.buttonElement = i;
    const s = t.createElement("div");
    if (s.classList.add(st("t")), r.appendChild(s), this.textElement = s, e.pickerLayout === "inline") {
      const o = t.createElement("div");
      o.classList.add(st("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
}
const z = h("p2dp");
class ia {
  constructor(t, e) {
    this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onPropsChange_ = this.onPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = e.props, this.props_.emitter.on("change", this.onPropsChange_), this.element = t.createElement("div"), this.element.classList.add(z()), e.layout === "popup" && this.element.classList.add(z(void 0, "p")), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("div");
    r.classList.add(z("p")), e.viewProps.bindTabIndex(r), this.element.appendChild(r), this.padElement = r;
    const i = t.createElementNS(A, "svg");
    i.classList.add(z("g")), this.padElement.appendChild(i), this.svgElem_ = i;
    const s = t.createElementNS(A, "line");
    s.classList.add(z("ax")), s.setAttributeNS(null, "x1", "0"), s.setAttributeNS(null, "y1", "50%"), s.setAttributeNS(null, "x2", "100%"), s.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(s);
    const o = t.createElementNS(A, "line");
    o.classList.add(z("ax")), o.setAttributeNS(null, "x1", "50%"), o.setAttributeNS(null, "y1", "0"), o.setAttributeNS(null, "x2", "50%"), o.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(o);
    const a = t.createElementNS(A, "line");
    a.classList.add(z("l")), a.setAttributeNS(null, "x1", "50%"), a.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(a), this.lineElem_ = a;
    const l = t.createElement("div");
    l.classList.add(z("m")), this.padElement.appendChild(l), this.markerElem_ = l, e.value.emitter.on("change", this.onValueChange_), this.value = e.value, this.update_();
  }
  get allFocusableElements() {
    return [this.padElement];
  }
  update_() {
    const [t, e] = this.value.rawValue.getComponents(), r = this.props_.get("max"), i = m(t, -r, +r, 0, 100), s = m(e, -r, +r, 0, 100), o = this.props_.get("invertsY") ? 100 - s : s;
    this.lineElem_.setAttributeNS(null, "x2", `${i}%`), this.lineElem_.setAttributeNS(null, "y2", `${o}%`), this.markerElem_.style.left = `${i}%`, this.markerElem_.style.top = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
  onPropsChange_() {
    this.update_();
  }
  onFoldableChange_() {
    this.update_();
  }
}
function pn(n, t, e) {
  return [P(t[0], N(n)), P(t[1], Et(n)) * (e ? 1 : -1)];
}
class sa {
  constructor(t, e) {
    this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.view = new ia(t, { layout: e.layout, props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new rt(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const r = this.props.get("max"), i = m(t.point.x, 0, t.bounds.width, -r, +r), s = m(this.props.get("invertsY") ? t.bounds.height - t.point.y : t.point.y, 0, t.bounds.height, -r, +r);
    this.value.setRawValue(new q(i, s), e);
  }
  onPointerDown_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: true, last: true });
  }
  onPadKeyDown_(t) {
    Qn(t.key) && t.preventDefault();
    const [e, r] = pn(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    e === 0 && r === 0 || this.value.setRawValue(new q(this.value.rawValue.x + e, this.value.rawValue.y + r), { forceEmit: false, last: false });
  }
  onPadKeyUp_(t) {
    const [e, r] = pn(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    e === 0 && r === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
class oa {
  constructor(t, e) {
    var r, i;
    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.foldable_ = Mt.create(e.expanded), this.popC_ = e.pickerLayout === "popup" ? new Yn(t, { viewProps: this.viewProps }) : null;
    const s = new sa(t, { layout: e.pickerLayout, props: new u({ invertsY: f(e.invertsY), max: f(e.max), xKeyScale: e.axes[0].textProps.value("keyScale"), yKeyScale: e.axes[1].textProps.value("keyScale") }), value: this.value, viewProps: this.viewProps });
    s.view.allFocusableElements.forEach((o) => {
      o.addEventListener("blur", this.onPopupChildBlur_), o.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = s, this.textC_ = new Fe(t, { assembly: xr, axes: e.axes, parser: e.parser, value: this.value, viewProps: this.viewProps }), this.view = new ra(t, { expanded: this.foldable_.value("expanded"), pickerLayout: e.pickerLayout, viewProps: this.viewProps }), this.view.textElement.appendChild(this.textC_.view.element), (r = this.view.buttonElement) === null || r === void 0 || r.addEventListener("blur", this.onPadButtonBlur_), (i = this.view.buttonElement) === null || i === void 0 || i.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), ht({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (o) => o, backward: (o, a) => a })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), Se(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onPadButtonBlur_(t) {
    if (!this.popC_) return;
    const e = this.view.element, r = t.relatedTarget;
    (!r || !e.contains(r)) && (this.popC_.shows.rawValue = false);
  }
  onPadButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(t) {
    if (!this.popC_) return;
    const e = this.popC_.view.element, r = Nn(t);
    r && e.contains(r) || r && r === this.view.buttonElement && !xe(e.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(t) {
    this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && t.key === "Escape" && this.view.buttonElement.focus();
  }
}
function aa(n) {
  return q.isObject(n) ? new q(n.x, n.y) : new q();
}
function la(n, t) {
  n.writeProperty("x", t.x), n.writeProperty("y", t.y);
}
function pa(n, t) {
  return new Ne({ assembly: xr, components: [R(Object.assign(Object.assign({}, n), n.x), t.x), R(Object.assign(Object.assign({}, n), n.y), t.y)] });
}
function cn(n, t) {
  var e, r;
  if (!b(n.min) || !b(n.max)) return Math.max(Math.abs((e = n.min) !== null && e !== void 0 ? e : 0), Math.abs((r = n.max) !== null && r !== void 0 ? r : 0));
  const i = Mn(n);
  return Math.max(Math.abs(i) * 10, Math.abs(t) * 10);
}
function ca(n, t) {
  var e, r;
  const i = cn(J(n, (e = n.x) !== null && e !== void 0 ? e : {}), t.x), s = cn(J(n, (r = n.y) !== null && r !== void 0 ? r : {}), t.y);
  return Math.max(i, s);
}
function da(n) {
  if (!("y" in n)) return false;
  const t = n.y;
  return t && "inverted" in t ? !!t.inverted : false;
}
const ua = y({ id: "input-point2d", type: "input", accept: (n, t) => {
  if (!q.isObject(n)) return null;
  const e = _(t, (r) => Object.assign(Object.assign({}, kt(r)), { expanded: r.optional.boolean, picker: r.optional.custom(tr), readonly: r.optional.constant(false), x: r.optional.custom(H), y: r.optional.object(Object.assign(Object.assign({}, kt(r)), { inverted: r.optional.boolean })) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: () => aa, constraint: (n) => pa(n.params, n.initialValue), equals: q.equals, writer: () => la }, controller: (n) => {
  var t, e;
  const r = n.document, i = n.value, s = n.constraint, o = [n.params.x, n.params.y];
  return new oa(r, { axes: i.rawValue.getComponents().map((a, l) => {
    var p;
    return Ce({ constraint: s.components[l], initialValue: a, params: J(n.params, (p = o[l]) !== null && p !== void 0 ? p : {}) });
  }), expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, invertsY: da(n.params), max: ca(n.params, i.rawValue), parser: I, pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", value: i, viewProps: n.viewProps });
} });
class at {
  constructor(t = 0, e = 0, r = 0) {
    this.x = t, this.y = e, this.z = r;
  }
  getComponents() {
    return [this.x, this.y, this.z];
  }
  static isObject(t) {
    if (b(t)) return false;
    const e = t.x, r = t.y, i = t.z;
    return !(typeof e != "number" || typeof r != "number" || typeof i != "number");
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y && t.z === e.z;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
const yr = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new at(...n) };
function ha(n) {
  return at.isObject(n) ? new at(n.x, n.y, n.z) : new at();
}
function va(n, t) {
  n.writeProperty("x", t.x), n.writeProperty("y", t.y), n.writeProperty("z", t.z);
}
function ma(n, t) {
  return new Ne({ assembly: yr, components: [R(Object.assign(Object.assign({}, n), n.x), t.x), R(Object.assign(Object.assign({}, n), n.y), t.y), R(Object.assign(Object.assign({}, n), n.z), t.z)] });
}
const ba = y({ id: "input-point3d", type: "input", accept: (n, t) => {
  if (!at.isObject(n)) return null;
  const e = _(t, (r) => Object.assign(Object.assign({}, kt(r)), { readonly: r.optional.constant(false), x: r.optional.custom(H), y: r.optional.custom(H), z: r.optional.custom(H) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => ha, constraint: (n) => ma(n.params, n.initialValue), equals: at.equals, writer: (n) => va }, controller: (n) => {
  const t = n.value, e = n.constraint, r = [n.params.x, n.params.y, n.params.z];
  return new Fe(n.document, { assembly: yr, axes: t.rawValue.getComponents().map((i, s) => {
    var o;
    return Ce({ constraint: e.components[s], initialValue: i, params: J(n.params, (o = r[s]) !== null && o !== void 0 ? o : {}) });
  }), parser: I, value: t, viewProps: n.viewProps });
} });
class lt {
  constructor(t = 0, e = 0, r = 0, i = 0) {
    this.x = t, this.y = e, this.z = r, this.w = i;
  }
  getComponents() {
    return [this.x, this.y, this.z, this.w];
  }
  static isObject(t) {
    if (b(t)) return false;
    const e = t.x, r = t.y, i = t.z, s = t.w;
    return !(typeof e != "number" || typeof r != "number" || typeof i != "number" || typeof s != "number");
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z, w: this.w };
  }
}
const Pr = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new lt(...n) };
function fa(n) {
  return lt.isObject(n) ? new lt(n.x, n.y, n.z, n.w) : new lt();
}
function _a(n, t) {
  n.writeProperty("x", t.x), n.writeProperty("y", t.y), n.writeProperty("z", t.z), n.writeProperty("w", t.w);
}
function wa(n, t) {
  return new Ne({ assembly: Pr, components: [R(Object.assign(Object.assign({}, n), n.x), t.x), R(Object.assign(Object.assign({}, n), n.y), t.y), R(Object.assign(Object.assign({}, n), n.z), t.z), R(Object.assign(Object.assign({}, n), n.w), t.w)] });
}
const ga = y({ id: "input-point4d", type: "input", accept: (n, t) => {
  if (!lt.isObject(n)) return null;
  const e = _(t, (r) => Object.assign(Object.assign({}, kt(r)), { readonly: r.optional.constant(false), w: r.optional.custom(H), x: r.optional.custom(H), y: r.optional.custom(H), z: r.optional.custom(H) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => fa, constraint: (n) => wa(n.params, n.initialValue), equals: lt.equals, writer: (n) => _a }, controller: (n) => {
  const t = n.value, e = n.constraint, r = [n.params.x, n.params.y, n.params.z, n.params.w];
  return new Fe(n.document, { assembly: Pr, axes: t.rawValue.getComponents().map((i, s) => {
    var o;
    return Ce({ constraint: e.components[s], initialValue: i, params: J(n.params, (o = r[s]) !== null && o !== void 0 ? o : {}) });
  }), parser: I, value: t, viewProps: n.viewProps });
} });
function Ca(n) {
  const t = [], e = Ae(n.options);
  return e && t.push(e), new At(t);
}
const xa = y({ id: "input-string", type: "input", accept: (n, t) => {
  if (typeof n != "string") return null;
  const e = _(t, (r) => ({ readonly: r.optional.constant(false), options: r.optional.custom(Dt) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Xn, constraint: (n) => Ca(n.params), writer: (n) => jt }, controller: (n) => {
  const t = n.document, e = n.value, r = n.constraint, i = r && Gt(r, Ot);
  return i ? new G(t, { props: new u({ options: i.values.value("options") }), value: e, viewProps: n.viewProps }) : new Pt(t, { parser: (s) => s, props: u.fromObject({ formatter: ve }), value: e, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "string" ? null : n.controller.valueController instanceof G ? new Le(n.controller) : null;
} }), Bt = { monitor: { defaultInterval: 200, defaultRows: 3 } }, dn = h("mll");
class ya {
  constructor(t, e) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = e.formatter, this.element = t.createElement("div"), this.element.classList.add(dn()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("textarea");
    r.classList.add(dn("i")), r.style.height = `calc(var(${Jn("containerUnitSize")}) * ${e.rows})`, r.readOnly = true, e.viewProps.bindDisabled(r), this.element.appendChild(r), this.textareaElem_ = r, e.value.emitter.on("change", this.onValueUpdate_), this.value = e.value, this.update_();
  }
  update_() {
    const t = this.textareaElem_, e = t.scrollTop === t.scrollHeight - t.clientHeight, r = [];
    this.value.rawValue.forEach((i) => {
      i !== void 0 && r.push(this.formatter_(i));
    }), t.textContent = r.join(`
`), e && (t.scrollTop = t.scrollHeight);
  }
  onValueUpdate_() {
    this.update_();
  }
}
class Ke {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.view = new ya(t, { formatter: e.formatter, rows: e.rows, value: this.value, viewProps: this.viewProps });
  }
}
const un = h("sgl");
class Pa {
  constructor(t, e) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = e.formatter, this.element = t.createElement("div"), this.element.classList.add(un()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("input");
    r.classList.add(un("i")), r.readOnly = true, r.type = "text", e.viewProps.bindDisabled(r), this.element.appendChild(r), this.inputElement = r, e.value.emitter.on("change", this.onValueUpdate_), this.value = e.value, this.update_();
  }
  update_() {
    const t = this.value.rawValue, e = t[t.length - 1];
    this.inputElement.value = e !== void 0 ? this.formatter_(e) : "";
  }
  onValueUpdate_() {
    this.update_();
  }
}
class ze {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.view = new Pa(t, { formatter: e.formatter, value: this.value, viewProps: this.viewProps });
  }
}
const Ea = y({ id: "monitor-bool", type: "monitor", accept: (n, t) => {
  if (typeof n != "boolean") return null;
  const e = _(t, (r) => ({ readonly: r.required.constant(true), rows: r.optional.number }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Wn }, controller: (n) => {
  var t;
  return n.value.rawValue.length === 1 ? new ze(n.document, { formatter: rn, value: n.value, viewProps: n.viewProps }) : new Ke(n.document, { formatter: rn, rows: (t = n.params.rows) !== null && t !== void 0 ? t : Bt.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
} });
class ka extends yt {
  get max() {
    return this.controller.valueController.props.get("max");
  }
  set max(t) {
    this.controller.valueController.props.set("max", t);
  }
  get min() {
    return this.controller.valueController.props.get("min");
  }
  set min(t) {
    this.controller.valueController.props.set("min", t);
  }
}
const $ = h("grl");
class Va {
  constructor(t, e) {
    this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = t.createElement("div"), this.element.classList.add($()), e.viewProps.bindClassModifiers(this.element), this.formatter_ = e.formatter, this.props_ = e.props, this.cursor_ = e.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
    const r = t.createElementNS(A, "svg");
    r.classList.add($("g")), r.style.height = `calc(var(${Jn("containerUnitSize")}) * ${e.rows})`, this.element.appendChild(r), this.svgElem_ = r;
    const i = t.createElementNS(A, "polyline");
    this.svgElem_.appendChild(i), this.lineElem_ = i;
    const s = t.createElement("div");
    s.classList.add($("t"), h("tt")()), this.element.appendChild(s), this.tooltipElem_ = s, e.value.emitter.on("change", this.onValueUpdate_), this.value = e.value, this.update_();
  }
  get graphElement() {
    return this.svgElem_;
  }
  update_() {
    const { clientWidth: t, clientHeight: e } = this.element, r = this.value.rawValue.length - 1, i = this.props_.get("min"), s = this.props_.get("max"), o = [];
    this.value.rawValue.forEach((d, k) => {
      if (d === void 0) return;
      const T = m(k, 0, r, 0, t), Y = m(d, i, s, e, 0);
      o.push([T, Y].join(","));
    }), this.lineElem_.setAttributeNS(null, "points", o.join(" "));
    const a = this.tooltipElem_, l = this.value.rawValue[this.cursor_.rawValue];
    if (l === void 0) {
      a.classList.remove($("t", "a"));
      return;
    }
    const p = m(this.cursor_.rawValue, 0, r, 0, t), c = m(l, i, s, e, 0);
    a.style.left = `${p}px`, a.style.top = `${c}px`, a.textContent = `${this.formatter_(l)}`, a.classList.contains($("t", "a")) || (a.classList.add($("t", "a"), $("t", "in")), qt(a), a.classList.remove($("t", "in")));
  }
  onValueUpdate_() {
    this.update_();
  }
  onCursorChange_() {
    this.update_();
  }
}
class Er {
  constructor(t, e) {
    if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.cursor_ = f(-1), this.view = new Va(t, { cursor: this.cursor_, formatter: e.formatter, rows: e.rows, props: this.props, value: this.value, viewProps: this.viewProps }), !xe(t)) this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
    else {
      const r = new rt(this.view.element);
      r.emitter.on("down", this.onGraphPointerDown_), r.emitter.on("move", this.onGraphPointerMove_), r.emitter.on("up", this.onGraphPointerUp_);
    }
  }
  importProps(t) {
    return V(t, null, (e) => ({ max: e.required.number, min: e.required.number }), (e) => (this.props.set("max", e.max), this.props.set("min", e.min), true));
  }
  exportProps() {
    return S(null, { max: this.props.get("max"), min: this.props.get("min") });
  }
  onGraphMouseLeave_() {
    this.cursor_.rawValue = -1;
  }
  onGraphMouseMove_(t) {
    const { clientWidth: e } = this.view.element;
    this.cursor_.rawValue = Math.floor(m(t.offsetX, 0, e, 0, this.value.rawValue.length));
  }
  onGraphPointerDown_(t) {
    this.onGraphPointerMove_(t);
  }
  onGraphPointerMove_(t) {
    if (!t.data.point) {
      this.cursor_.rawValue = -1;
      return;
    }
    this.cursor_.rawValue = Math.floor(m(t.data.point.x, 0, t.data.bounds.width, 0, this.value.rawValue.length));
  }
  onGraphPointerUp_() {
    this.cursor_.rawValue = -1;
  }
}
function me(n) {
  return b(n.format) ? E(2) : n.format;
}
function Sa(n) {
  var t;
  return n.value.rawValue.length === 1 ? new ze(n.document, { formatter: me(n.params), value: n.value, viewProps: n.viewProps }) : new Ke(n.document, { formatter: me(n.params), rows: (t = n.params.rows) !== null && t !== void 0 ? t : Bt.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
}
function La(n) {
  var t, e, r;
  return new Er(n.document, { formatter: me(n.params), rows: (t = n.params.rows) !== null && t !== void 0 ? t : Bt.monitor.defaultRows, props: u.fromObject({ max: (e = n.params.max) !== null && e !== void 0 ? e : 100, min: (r = n.params.min) !== null && r !== void 0 ? r : 0 }), value: n.value, viewProps: n.viewProps });
}
function hn(n) {
  return n.view === "graph";
}
const Ma = y({ id: "monitor-number", type: "monitor", accept: (n, t) => {
  if (typeof n != "number") return null;
  const e = _(t, (r) => ({ format: r.optional.function, max: r.optional.number, min: r.optional.number, readonly: r.required.constant(true), rows: r.optional.number, view: r.optional.string }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { defaultBufferSize: (n) => hn(n) ? 64 : 1, reader: (n) => Sn }, controller: (n) => hn(n.params) ? La(n) : Sa(n), api: (n) => n.controller.valueController instanceof Er ? new ka(n.controller) : null }), Aa = y({ id: "monitor-string", type: "monitor", accept: (n, t) => {
  if (typeof n != "string") return null;
  const e = _(t, (r) => ({ multiline: r.optional.boolean, readonly: r.required.constant(true), rows: r.optional.number }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Xn }, controller: (n) => {
  var t;
  const e = n.value;
  return e.rawValue.length > 1 || n.params.multiline ? new Ke(n.document, { formatter: ve, rows: (t = n.params.rows) !== null && t !== void 0 ? t : Bt.monitor.defaultRows, value: e, viewProps: n.viewProps }) : new ze(n.document, { formatter: ve, value: e, viewProps: n.viewProps });
} });
class Oa {
  constructor() {
    this.map_ = /* @__PURE__ */ new Map();
  }
  get(t) {
    var e;
    return (e = this.map_.get(t)) !== null && e !== void 0 ? e : null;
  }
  has(t) {
    return this.map_.has(t);
  }
  add(t, e) {
    return this.map_.set(t, e), t.viewProps.handleDispose(() => {
      this.map_.delete(t);
    }), e;
  }
}
class Da {
  constructor(t) {
    this.target = t.target, this.reader_ = t.reader, this.writer_ = t.writer;
  }
  read() {
    return this.reader_(this.target.read());
  }
  write(t) {
    this.writer_(this.target, t);
  }
  inject(t) {
    this.write(this.reader_(t));
  }
}
function Ta(n, t) {
  var e;
  const r = n.accept(t.target.read(), t.params);
  if (b(r)) return null;
  const i = { target: t.target, initialValue: r.initialValue, params: r.params }, s = _(t.params, (d) => ({ disabled: d.optional.boolean, hidden: d.optional.boolean, label: d.optional.string, tag: d.optional.string })), o = n.binding.reader(i), a = n.binding.constraint ? n.binding.constraint(i) : void 0, l = new Da({ reader: o, target: t.target, writer: n.binding.writer(i) }), p = new bi(f(o(r.initialValue), { constraint: a, equals: n.binding.equals }), l), c = n.controller({ constraint: a, document: t.document, initialValue: r.initialValue, params: r.params, value: p, viewProps: F.create({ disabled: s == null ? void 0 : s.disabled, hidden: s == null ? void 0 : s.hidden }) });
  return new Ai(t.document, { blade: ut(), props: u.fromObject({ label: "label" in t.params ? (e = s == null ? void 0 : s.label) !== null && e !== void 0 ? e : null : t.target.key }), tag: s == null ? void 0 : s.tag, value: p, valueController: c });
}
class ja {
  constructor(t) {
    this.target = t.target, this.reader_ = t.reader;
  }
  read() {
    return this.reader_(this.target.read());
  }
}
function Ra(n, t) {
  return t === 0 ? new hs() : new vs(n, t ?? Bt.monitor.defaultInterval);
}
function Ba(n, t) {
  var e, r, i;
  const s = n.accept(t.target.read(), t.params);
  if (b(s)) return null;
  const o = { target: t.target, initialValue: s.initialValue, params: s.params }, a = _(t.params, (k) => ({ bufferSize: k.optional.number, disabled: k.optional.boolean, hidden: k.optional.boolean, interval: k.optional.number, label: k.optional.string })), l = n.binding.reader(o), p = (r = (e = a == null ? void 0 : a.bufferSize) !== null && e !== void 0 ? e : n.binding.defaultBufferSize && n.binding.defaultBufferSize(s.params)) !== null && r !== void 0 ? r : 1, c = new Ri({ binding: new ja({ reader: l, target: t.target }), bufferSize: p, ticker: Ra(t.document, a == null ? void 0 : a.interval) }), d = n.controller({ document: t.document, params: s.params, value: c, viewProps: F.create({ disabled: a == null ? void 0 : a.disabled, hidden: a == null ? void 0 : a.hidden }) });
  return d.viewProps.bindDisabled(c.ticker), d.viewProps.handleDispose(() => {
    c.ticker.dispose();
  }), new Ii(t.document, { blade: ut(), props: u.fromObject({ label: "label" in t.params ? (i = a == null ? void 0 : a.label) !== null && i !== void 0 ? i : null : t.target.key }), value: c, valueController: d });
}
class Ia {
  constructor(t) {
    this.pluginsMap_ = { blades: [], inputs: [], monitors: [] }, this.apiCache_ = t;
  }
  getAll() {
    return [...this.pluginsMap_.blades, ...this.pluginsMap_.inputs, ...this.pluginsMap_.monitors];
  }
  register(t, e) {
    if (!Vs(e.core)) throw w.notCompatible(t, e.id);
    e.type === "blade" ? this.pluginsMap_.blades.unshift(e) : e.type === "input" ? this.pluginsMap_.inputs.unshift(e) : e.type === "monitor" && this.pluginsMap_.monitors.unshift(e);
  }
  createInput_(t, e, r) {
    return this.pluginsMap_.inputs.reduce((i, s) => i ?? Ta(s, { document: t, target: e, params: r }), null);
  }
  createMonitor_(t, e, r) {
    return this.pluginsMap_.monitors.reduce((i, s) => i ?? Ba(s, { document: t, params: r, target: e }), null);
  }
  createBinding(t, e, r) {
    const i = e.read();
    if (b(i)) throw new w({ context: { key: e.key }, type: "nomatchingcontroller" });
    const s = this.createInput_(t, e, r);
    if (s) return s;
    const o = this.createMonitor_(t, e, r);
    if (o) return o;
    throw new w({ context: { key: e.key }, type: "nomatchingcontroller" });
  }
  createBlade(t, e) {
    const r = this.pluginsMap_.blades.reduce((i, s) => i ?? us(s, { document: t, params: e }), null);
    if (!r) throw new w({ type: "nomatchingview", context: { params: e } });
    return r;
  }
  createInputBindingApi_(t) {
    const e = this.pluginsMap_.inputs.reduce((r, i) => {
      var s, o;
      return r || ((o = (s = i.api) === null || s === void 0 ? void 0 : s.call(i, { controller: t })) !== null && o !== void 0 ? o : null);
    }, null);
    return this.apiCache_.add(t, e ?? new yt(t));
  }
  createMonitorBindingApi_(t) {
    const e = this.pluginsMap_.monitors.reduce((r, i) => {
      var s, o;
      return r || ((o = (s = i.api) === null || s === void 0 ? void 0 : s.call(i, { controller: t })) !== null && o !== void 0 ? o : null);
    }, null);
    return this.apiCache_.add(t, e ?? new yt(t));
  }
  createBindingApi(t) {
    if (this.apiCache_.has(t)) return this.apiCache_.get(t);
    if (Oi(t)) return this.createInputBindingApi_(t);
    if (Ni(t)) return this.createMonitorBindingApi_(t);
    throw w.shouldNeverHappen();
  }
  createApi(t) {
    if (this.apiCache_.has(t)) return this.apiCache_.get(t);
    if (Mi(t)) return this.createBindingApi(t);
    const e = this.pluginsMap_.blades.reduce((r, i) => r ?? i.api({ controller: t, pool: this }), null);
    if (!e) throw w.shouldNeverHappen();
    return this.apiCache_.add(t, e);
  }
}
const Na = new Oa();
function Fa() {
  const n = new Ia(Na);
  return [ua, ba, ga, xa, na, Qo, Xo, Ho, As, Ea, Aa, Ma, Ui, rs, Gn].forEach((t) => {
    n.register("core", t);
  }), n;
}
class Ka extends nt {
  constructor(t) {
    super(t), this.emitter_ = new g(), this.controller.value.emitter.on("change", (e) => {
      this.emitter_.emit("change", new Lt(this, e.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(t) {
    this.controller.labelController.props.set("label", t);
  }
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(t) {
    this.controller.valueController.props.set("options", t);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(t) {
    this.controller.value.rawValue = t;
  }
  on(t, e) {
    const r = e.bind(this);
    return this.emitter_.on(t, (i) => {
      r(i);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
class za extends nt {
}
class $a extends nt {
  constructor(t) {
    super(t), this.emitter_ = new g(), this.controller.value.emitter.on("change", (e) => {
      this.emitter_.emit("change", new Lt(this, e.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(t) {
    this.controller.labelController.props.set("label", t);
  }
  get max() {
    return this.controller.valueController.sliderController.props.get("max");
  }
  set max(t) {
    this.controller.valueController.sliderController.props.set("max", t);
  }
  get min() {
    return this.controller.valueController.sliderController.props.get("min");
  }
  set min(t) {
    this.controller.valueController.sliderController.props.set("min", t);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(t) {
    this.controller.value.rawValue = t;
  }
  on(t, e) {
    const r = e.bind(this);
    return this.emitter_.on(t, (i) => {
      r(i);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
class Ua extends nt {
  constructor(t) {
    super(t), this.emitter_ = new g(), this.controller.value.emitter.on("change", (e) => {
      this.emitter_.emit("change", new Lt(this, e.rawValue));
    });
  }
  get label() {
    return this.controller.labelController.props.get("label");
  }
  set label(t) {
    this.controller.labelController.props.set("label", t);
  }
  get formatter() {
    return this.controller.valueController.props.get("formatter");
  }
  set formatter(t) {
    this.controller.valueController.props.set("formatter", t);
  }
  get value() {
    return this.controller.value.rawValue;
  }
  set value(t) {
    this.controller.value.rawValue = t;
  }
  on(t, e) {
    const r = e.bind(this);
    return this.emitter_.on(t, (i) => {
      r(i);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
const Ha = /* @__PURE__ */ function() {
  return { id: "list", type: "blade", core: dt, accept(n) {
    const t = _(n, (e) => ({ options: e.required.custom(Dt), value: e.required.raw, view: e.required.constant("list"), label: e.optional.string }));
    return t ? { params: t } : null;
  }, controller(n) {
    const t = new Ot(Me(n.params.options)), e = f(n.params.value, { constraint: t }), r = new G(n.document, { props: new u({ options: t.values.value("options") }), value: e, viewProps: n.viewProps });
    return new tt(n.document, { blade: n.blade, props: u.fromObject({ label: n.params.label }), value: e, valueController: r });
  }, api(n) {
    return !(n.controller instanceof tt) || !(n.controller.valueController instanceof G) ? null : new Ka(n.controller);
  } };
}();
class qa extends Hn {
  constructor(t, e) {
    super(t, e);
  }
  get element() {
    return this.controller.view.element;
  }
}
class Ga extends ue {
  constructor(t, e) {
    super(t, { expanded: e.expanded, blade: e.blade, props: e.props, root: true, viewProps: e.viewProps });
  }
}
const vn = h("spr");
class Ya {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(vn()), e.viewProps.bindClassModifiers(this.element);
    const r = t.createElement("hr");
    r.classList.add(vn("r")), this.element.appendChild(r);
  }
}
class mn extends Zt {
  constructor(t, e) {
    super(Object.assign(Object.assign({}, e), { view: new Ya(t, { viewProps: e.viewProps }) }));
  }
}
const Wa = { id: "separator", type: "blade", core: dt, accept(n) {
  const t = _(n, (e) => ({ view: e.required.constant("separator") }));
  return t ? { params: t } : null;
}, controller(n) {
  return new mn(n.document, { blade: n.blade, viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof mn ? new za(n.controller) : null;
} }, Xa = { id: "slider", type: "blade", core: dt, accept(n) {
  const t = _(n, (e) => ({ max: e.required.number, min: e.required.number, view: e.required.constant("slider"), format: e.optional.function, label: e.optional.string, value: e.optional.number }));
  return t ? { params: t } : null;
}, controller(n) {
  var t, e;
  const r = (t = n.params.value) !== null && t !== void 0 ? t : 0, i = new St({ max: n.params.max, min: n.params.min }), s = f(r, { constraint: i }), o = new Wt(n.document, Object.assign(Object.assign({}, Zn({ formatter: (e = n.params.format) !== null && e !== void 0 ? e : di, keyScale: f(1), max: i.values.value("max"), min: i.values.value("min"), pointerScale: An(n.params, r) })), { parser: I, value: s, viewProps: n.viewProps }));
  return new tt(n.document, { blade: n.blade, props: u.fromObject({ label: n.params.label }), value: s, valueController: o });
}, api(n) {
  return !(n.controller instanceof tt) || !(n.controller.valueController instanceof Wt) ? null : new $a(n.controller);
} }, Qa = /* @__PURE__ */ function() {
  return { id: "text", type: "blade", core: dt, accept(n) {
    const t = _(n, (e) => ({ parse: e.required.function, value: e.required.raw, view: e.required.constant("text"), format: e.optional.function, label: e.optional.string }));
    return t ? { params: t } : null;
  }, controller(n) {
    var t;
    const e = f(n.params.value), r = new Pt(n.document, { parser: n.params.parse, props: u.fromObject({ formatter: (t = n.params.format) !== null && t !== void 0 ? t : (i) => String(i) }), value: e, viewProps: n.viewProps });
    return new tt(n.document, { blade: n.blade, props: u.fromObject({ label: n.params.label }), value: e, valueController: r });
  }, api(n) {
    return !(n.controller instanceof tt) || !(n.controller.valueController instanceof Pt) ? null : new Ua(n.controller);
  } };
}();
function Za(n) {
  const t = n.createElement("div");
  return t.classList.add(h("dfw")()), n.body && n.body.appendChild(t), t;
}
function Ja(n, t, e) {
  if (n.querySelector(`style[data-tp-style=${t}]`)) return;
  const r = n.createElement("style");
  r.dataset.tpStyle = t, r.textContent = e, n.head.appendChild(r);
}
class il extends qa {
  constructor(t) {
    var e, r;
    const i = t ?? {}, s = (e = i.document) !== null && e !== void 0 ? e : yi(), o = Fa(), a = new Ga(s, { expanded: i.expanded, blade: ut(), props: u.fromObject({ title: i.title }), viewProps: F.create() });
    super(a, o), this.pool_ = o, this.containerElem_ = (r = i.container) !== null && r !== void 0 ? r : Za(s), this.containerElem_.appendChild(this.element), this.doc_ = s, this.usesDefaultWrapper_ = !i.container, this.setUpDefaultPlugins_();
  }
  get document() {
    if (!this.doc_) throw w.alreadyDisposed();
    return this.doc_;
  }
  dispose() {
    const t = this.containerElem_;
    if (!t) throw w.alreadyDisposed();
    if (this.usesDefaultWrapper_) {
      const e = t.parentElement;
      e && e.removeChild(t);
    }
    this.containerElem_ = null, this.doc_ = null, super.dispose();
  }
  registerPlugin(t) {
    t.css && Ja(this.document, `plugin-${t.id}`, t.css), ("plugin" in t ? [t.plugin] : "plugins" in t ? t.plugins : []).forEach((r) => {
      this.pool_.register(t.id, r);
    });
  }
  setUpDefaultPlugins_() {
    this.registerPlugin({ id: "default", css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}', plugins: [Ha, Wa, Xa, Gn, Qa] });
  }
}
new Un("4.0.4");
const tl = { background: 1118488, grid: 5592405, axisArrow: 8947848, elementLine: 16777215, nodePoint: 16777215, resultOutline: "white", textColor: "#bbbcc4", textBackground: "#0d0d0d", legendMarker: "white" }, el = { background: 15790320, grid: 10066329, axisArrow: 4473924, elementLine: 1118481, nodePoint: 1118481, resultOutline: "#222", textColor: "#111111", textBackground: "#e8e8e8", legendMarker: "#222" }, kr = { dark: tl, light: el };
let Vt = "dark";
const zt = [];
function sl() {
  return Vt;
}
function ol() {
  return kr[Vt];
}
function nl(n) {
  if (n === Vt) return;
  Vt = n;
  const t = kr[n];
  for (const e of zt) e(n, t);
}
function al() {
  const n = Vt === "dark" ? "light" : "dark";
  return nl(n), n;
}
function ll(n) {
  return zt.push(n), () => {
    const t = zt.indexOf(n);
    t >= 0 && zt.splice(t, 1);
  };
}
export {
  il as P,
  sl as a,
  ol as g,
  ll as o,
  al as t,
  rl as v
};
