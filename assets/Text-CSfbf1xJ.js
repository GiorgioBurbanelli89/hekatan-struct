let jn = Object.getPrototypeOf, Ir, La, Ji, Lr, xu = { isConnected: 1 }, Cp = 1e3, ps, Tp = {}, Ap = jn(xu), bu = jn(jn), _i, yu = (n, t, e, i) => (n ?? (i ? setTimeout(e, i) : queueMicrotask(e), /* @__PURE__ */ new Set())).add(t), wu = (n, t, e) => {
  let i = Ji;
  Ji = t;
  try {
    return n(e);
  } catch (r) {
    return console.error(r), e;
  } finally {
    Ji = i;
  }
}, co = (n) => n.filter((t) => {
  var _a2;
  return (_a2 = t._dom) == null ? void 0 : _a2.isConnected;
}), Mu = (n) => ps = yu(ps, n, () => {
  for (let t of ps) t._bindings = co(t._bindings), t._listeners = co(t._listeners);
  ps = _i;
}, Cp), ho = { get val() {
  var _a2;
  return (_a2 = Ji == null ? void 0 : Ji._getters) == null ? void 0 : _a2.add(this), this.rawVal;
}, get oldVal() {
  var _a2;
  return (_a2 = Ji == null ? void 0 : Ji._getters) == null ? void 0 : _a2.add(this), this._oldVal;
}, set val(n) {
  var _a2;
  (_a2 = Ji == null ? void 0 : Ji._setters) == null ? void 0 : _a2.add(this), n !== this.rawVal && (this.rawVal = n, this._bindings.length + this._listeners.length ? (La == null ? void 0 : La.add(this), Ir = yu(Ir, this, Pp)) : this._oldVal = n);
} }, Su = (n) => ({ __proto__: ho, rawVal: n, _oldVal: n, _bindings: [], _listeners: [] }), Fr = (n, t) => {
  let e = { _getters: /* @__PURE__ */ new Set(), _setters: /* @__PURE__ */ new Set() }, i = { f: n }, r = Lr;
  Lr = [];
  let s = wu(n, e, t);
  s = (s ?? document).nodeType ? s : new Text(s);
  for (let o of e._getters) e._setters.has(o) || (Mu(o), o._bindings.push(i));
  for (let o of Lr) o._dom = s;
  return Lr = r, i._dom = s;
}, Ll = (n, t = Su(), e) => {
  let i = { _getters: /* @__PURE__ */ new Set(), _setters: /* @__PURE__ */ new Set() }, r = { f: n, s: t };
  r._dom = e ?? (Lr == null ? void 0 : Lr.push(r)) ?? xu, t.val = wu(n, i, t.rawVal);
  for (let s of i._getters) i._setters.has(s) || (Mu(s), s._listeners.push(r));
  return t;
}, Eu = (n, ...t) => {
  for (let e of t.flat(1 / 0)) {
    let i = jn(e ?? 0), r = i === ho ? Fr(() => e.val) : i === bu ? Fr(e) : e;
    r != _i && n.append(r);
  }
  return n;
}, Cu = (n, t, ...e) => {
  var _a2;
  let [{ is: i, ...r }, ...s] = jn(e[0] ?? 0) === Ap ? e : [{}, ...e], o = n ? document.createElementNS(n, t, { is: i }) : document.createElement(t, { is: i });
  for (let [a, l] of Object.entries(r)) {
    let c = (_) => _ ? Object.getOwnPropertyDescriptor(_, a) ?? c(jn(_)) : _i, h = t + "," + a, u = Tp[h] ?? (Tp[h] = ((_a2 = c(jn(o))) == null ? void 0 : _a2.set) ?? 0), d = a.startsWith("on") ? (_, x) => {
      let p = a.slice(2);
      o.removeEventListener(p, x), o.addEventListener(p, _);
    } : u ? u.bind(o) : o.setAttribute.bind(o, a), f = jn(l ?? 0);
    a.startsWith("on") || f === bu && (l = Ll(l), f = ho), f === ho ? Fr(() => (d(l.val, l._oldVal), o)) : d(l);
  }
  return Eu(o, s);
}, Lc = (n) => ({ get: (t, e) => Cu.bind(_i, n, e) }), Tu = (n, t) => t ? t !== n && n.replaceWith(t) : n.remove(), Pp = () => {
  let n = 0, t = [...Ir].filter((i) => i.rawVal !== i._oldVal);
  do {
    La = /* @__PURE__ */ new Set();
    for (let i of new Set(t.flatMap((r) => r._listeners = co(r._listeners)))) Ll(i.f, i.s, i._dom), i._dom = _i;
  } while (++n < 100 && (t = [...La]).length);
  let e = [...Ir].filter((i) => i.rawVal !== i._oldVal);
  Ir = _i;
  for (let i of new Set(e.flatMap((r) => r._bindings = co(r._bindings)))) Tu(i._dom, Fr(i.f, i._dom)), i._dom = _i;
  for (let i of e) i._oldVal = i.rawVal;
};
const yS = { tags: new Proxy((n) => new Proxy(Cu, Lc(n)), Lc()), hydrate: (n, t) => Tu(n, Fr(t, n)), add: Eu, state: Su, derive: Ll };
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const Dl = "169", Qi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ki = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, Rp = 0, Dc = 1, Lp = 2, Au = 1, Dp = 2, Sn = 3, Qn = 0, Be = 1, En = 2, Kn = 0, tr = 1, Ic = 2, Uc = 3, Nc = 4, Ip = 5, di = 100, Up = 101, Np = 102, Op = 103, Fp = 104, Bp = 200, kp = 201, Vp = 202, zp = 203, Da = 204, Ia = 205, Hp = 206, Gp = 207, Wp = 208, Xp = 209, qp = 210, jp = 211, Yp = 212, Kp = 213, $p = 214, Ua = 0, Na = 1, Oa = 2, or = 3, Fa = 4, Ba = 5, ka = 6, Va = 7, Il = 0, Zp = 1, Jp = 2, $n = 0, Qp = 1, tf = 2, ef = 3, nf = 4, rf = 5, sf = 6, of = 7, Pu = 300, ar = 301, lr = 302, za = 303, Ha = 304, Eo = 306, Ga = 1e3, fi = 1001, Wa = 1002, $e = 1003, af = 1004, fs = 1005, rn = 1006, ko = 1007, mi = 1008, Rn = 1009, Ru = 1010, Lu = 1011, Br = 1012, Ul = 1013, gi = 1014, Cn = 1015, $r = 1016, Nl = 1017, Ol = 1018, cr = 1020, Du = 35902, Iu = 1021, Uu = 1022, on = 1023, Nu = 1024, Ou = 1025, er = 1026, hr = 1027, Fu = 1028, Fl = 1029, Bu = 1030, Bl = 1031, kl = 1033, Qs = 33776, to = 33777, eo = 33778, no = 33779, Xa = 35840, qa = 35841, ja = 35842, Ya = 35843, Ka = 36196, $a = 37492, Za = 37496, Ja = 37808, Qa = 37809, tl = 37810, el = 37811, nl = 37812, il = 37813, rl = 37814, sl = 37815, ol = 37816, al = 37817, ll = 37818, cl = 37819, hl = 37820, ul = 37821, io = 36492, dl = 36494, pl = 36495, ku = 36283, fl = 36284, ml = 36285, _l = 36286, lf = 3200, cf = 3201, Vl = 0, hf = 1, qn = "", cn = "srgb", ni = "srgb-linear", zl = "display-p3", Co = "display-p3-linear", uo = "linear", ae = "srgb", po = "rec709", fo = "p3", Pi = 7680, Oc = 519, uf = 512, df = 513, pf = 514, Vu = 515, ff = 516, mf = 517, _f = 518, vf = 519, vl = 35044, Fc = "300 es", Tn = 2e3, mo = 2001;
class Ei {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[t] === void 0 && (i[t] = []), i[t].indexOf(e) === -1 && i[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return false;
    const i = this._listeners;
    return i[t] !== void 0 && i[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const r = this._listeners[t];
    if (r !== void 0) {
      const s = r.indexOf(e);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[t.type];
    if (i !== void 0) {
      t.target = this;
      const r = i.slice(0);
      for (let s = 0, o = r.length; s < o; s++) r[s].call(this, t);
      t.target = null;
    }
  }
}
const Te = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let Bc = 1234567;
const nr = Math.PI / 180, kr = 180 / Math.PI;
function pn() {
  const n = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (Te[n & 255] + Te[n >> 8 & 255] + Te[n >> 16 & 255] + Te[n >> 24 & 255] + "-" + Te[t & 255] + Te[t >> 8 & 255] + "-" + Te[t >> 16 & 15 | 64] + Te[t >> 24 & 255] + "-" + Te[e & 63 | 128] + Te[e >> 8 & 255] + "-" + Te[e >> 16 & 255] + Te[e >> 24 & 255] + Te[i & 255] + Te[i >> 8 & 255] + Te[i >> 16 & 255] + Te[i >> 24 & 255]).toLowerCase();
}
function be(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function Hl(n, t) {
  return (n % t + t) % t;
}
function gf(n, t, e, i, r) {
  return i + (n - t) * (r - i) / (e - t);
}
function xf(n, t, e) {
  return n !== t ? (e - n) / (t - n) : 0;
}
function Ur(n, t, e) {
  return (1 - e) * n + e * t;
}
function bf(n, t, e, i) {
  return Ur(n, t, 1 - Math.exp(-e * i));
}
function yf(n, t = 1) {
  return t - Math.abs(Hl(n, t * 2) - t);
}
function wf(n, t, e) {
  return n <= t ? 0 : n >= e ? 1 : (n = (n - t) / (e - t), n * n * (3 - 2 * n));
}
function Mf(n, t, e) {
  return n <= t ? 0 : n >= e ? 1 : (n = (n - t) / (e - t), n * n * n * (n * (n * 6 - 15) + 10));
}
function Sf(n, t) {
  return n + Math.floor(Math.random() * (t - n + 1));
}
function Ef(n, t) {
  return n + Math.random() * (t - n);
}
function Cf(n) {
  return n * (0.5 - Math.random());
}
function Tf(n) {
  n !== void 0 && (Bc = n);
  let t = Bc += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Af(n) {
  return n * nr;
}
function Pf(n) {
  return n * kr;
}
function Rf(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function Lf(n) {
  return Math.pow(2, Math.ceil(Math.log(n) / Math.LN2));
}
function Df(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function If(n, t, e, i, r) {
  const s = Math.cos, o = Math.sin, a = s(e / 2), l = o(e / 2), c = s((t + i) / 2), h = o((t + i) / 2), u = s((t - i) / 2), d = o((t - i) / 2), f = s((i - t) / 2), _ = o((i - t) / 2);
  switch (r) {
    case "XYX":
      n.set(a * h, l * u, l * d, a * c);
      break;
    case "YZY":
      n.set(l * d, a * h, l * u, a * c);
      break;
    case "ZXZ":
      n.set(l * u, l * d, a * h, a * c);
      break;
    case "XZX":
      n.set(a * h, l * _, l * f, a * c);
      break;
    case "YXY":
      n.set(l * f, a * h, l * _, a * c);
      break;
    case "ZYZ":
      n.set(l * _, l * f, a * h, a * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
  }
}
function sn(n, t) {
  switch (t.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function ee(n, t) {
  switch (t.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Uf = { DEG2RAD: nr, RAD2DEG: kr, generateUUID: pn, clamp: be, euclideanModulo: Hl, mapLinear: gf, inverseLerp: xf, lerp: Ur, damp: bf, pingpong: yf, smoothstep: wf, smootherstep: Mf, randInt: Sf, randFloat: Ef, randFloatSpread: Cf, seededRandom: Tf, degToRad: Af, radToDeg: Pf, isPowerOfTwo: Rf, ceilPowerOfTwo: Lf, floorPowerOfTwo: Df, setQuaternionFromProperEuler: If, normalize: ee, denormalize: sn };
class J {
  constructor(t = 0, e = 0) {
    J.prototype.isVector2 = true, this.x = t, this.y = e;
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return this.x = t, this.y = e, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this;
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x, i = this.y, r = t.elements;
    return this.x = r[0] * e + r[3] * i + r[6], this.y = r[1] * e + r[4] * i + r[7], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(be(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, i = this.y - t.y;
    return e * e + i * i;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this;
  }
  rotateAround(t, e) {
    const i = Math.cos(e), r = Math.sin(e), s = this.x - t.x, o = this.y - t.y;
    return this.x = s * i - o * r + t.x, this.y = s * r + o * i + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ft {
  constructor(t, e, i, r, s, o, a, l, c) {
    Ft.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, i, r, s, o, a, l, c);
  }
  set(t, e, i, r, s, o, a, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = r, h[2] = a, h[3] = e, h[4] = s, h[5] = l, h[6] = i, h[7] = o, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, i = t.elements;
    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this;
  }
  extractBasis(t, e, i) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements, r = e.elements, s = this.elements, o = i[0], a = i[3], l = i[6], c = i[1], h = i[4], u = i[7], d = i[2], f = i[5], _ = i[8], x = r[0], p = r[3], m = r[6], E = r[1], y = r[4], M = r[7], U = r[2], A = r[5], T = r[8];
    return s[0] = o * x + a * E + l * U, s[3] = o * p + a * y + l * A, s[6] = o * m + a * M + l * T, s[1] = c * x + h * E + u * U, s[4] = c * p + h * y + u * A, s[7] = c * m + h * M + u * T, s[2] = d * x + f * E + _ * U, s[5] = d * p + f * y + _ * A, s[8] = d * m + f * M + _ * T, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[1], r = t[2], s = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8];
    return e * o * h - e * a * c - i * s * h + i * a * l + r * s * c - r * o * l;
  }
  invert() {
    const t = this.elements, e = t[0], i = t[1], r = t[2], s = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = h * o - a * c, d = a * l - h * s, f = c * s - o * l, _ = e * u + i * d + r * f;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / _;
    return t[0] = u * x, t[1] = (r * c - h * i) * x, t[2] = (a * i - r * o) * x, t[3] = d * x, t[4] = (h * e - r * l) * x, t[5] = (r * s - a * e) * x, t[6] = f * x, t[7] = (i * l - c * e) * x, t[8] = (o * e - i * s) * x, this;
  }
  transpose() {
    let t;
    const e = this.elements;
    return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
  }
  setUvTransform(t, e, i, r, s, o, a) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(i * l, i * c, -i * (l * o + c * a) + o + t, -r * c, r * l, -r * (-c * o + l * a) + a + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(Vo.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(Vo.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(Vo.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(e, -i, 0, i, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, i = t.elements;
    for (let r = 0; r < 9; r++) if (e[r] !== i[r]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Vo = new Ft();
function zu(n) {
  for (let t = n.length - 1; t >= 0; --t) if (n[t] >= 65535) return true;
  return false;
}
function _o(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function Nf() {
  const n = _o("canvas");
  return n.style.display = "block", n;
}
const kc = {};
function ro(n) {
  n in kc || (kc[n] = true, console.warn(n));
}
function Of(n, t, e) {
  return new Promise(function(i, r) {
    function s() {
      switch (n.clientWaitSync(t, n.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case n.WAIT_FAILED:
          r();
          break;
        case n.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          i();
      }
    }
    setTimeout(s, e);
  });
}
function Ff(n) {
  const t = n.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Bf(n) {
  const t = n.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const Vc = new Ft().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199), zc = new Ft().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735), gr = { [ni]: { transfer: uo, primaries: po, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (n) => n, fromReference: (n) => n }, [cn]: { transfer: ae, primaries: po, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (n) => n.convertSRGBToLinear(), fromReference: (n) => n.convertLinearToSRGB() }, [Co]: { transfer: uo, primaries: fo, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (n) => n.applyMatrix3(zc), fromReference: (n) => n.applyMatrix3(Vc) }, [zl]: { transfer: ae, primaries: fo, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (n) => n.convertSRGBToLinear().applyMatrix3(zc), fromReference: (n) => n.applyMatrix3(Vc).convertLinearToSRGB() } }, kf = /* @__PURE__ */ new Set([ni, Co]), Zt = { enabled: true, _workingColorSpace: ni, get workingColorSpace() {
  return this._workingColorSpace;
}, set workingColorSpace(n) {
  if (!kf.has(n)) throw new Error(`Unsupported working color space, "${n}".`);
  this._workingColorSpace = n;
}, convert: function(n, t, e) {
  if (this.enabled === false || t === e || !t || !e) return n;
  const i = gr[t].toReference, r = gr[e].fromReference;
  return r(i(n));
}, fromWorkingColorSpace: function(n, t) {
  return this.convert(n, this._workingColorSpace, t);
}, toWorkingColorSpace: function(n, t) {
  return this.convert(n, t, this._workingColorSpace);
}, getPrimaries: function(n) {
  return gr[n].primaries;
}, getTransfer: function(n) {
  return n === qn ? uo : gr[n].transfer;
}, getLuminanceCoefficients: function(n, t = this._workingColorSpace) {
  return n.fromArray(gr[t].luminanceCoefficients);
} };
function ir(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function zo(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let Ri;
class Vf {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      Ri === void 0 && (Ri = _o("canvas")), Ri.width = t.width, Ri.height = t.height;
      const i = Ri.getContext("2d");
      t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), e = Ri;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = _o("canvas");
      e.width = t.width, e.height = t.height;
      const i = e.getContext("2d");
      i.drawImage(t, 0, 0, t.width, t.height);
      const r = i.getImageData(0, 0, t.width, t.height), s = r.data;
      for (let o = 0; o < s.length; o++) s[o] = ir(s[o] / 255) * 255;
      return i.putImageData(r, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let i = 0; i < e.length; i++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[i] = Math.floor(ir(e[i] / 255) * 255) : e[i] = ir(e[i]);
      return { data: e, width: t.width, height: t.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let zf = 0;
class Hu {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: zf++ }), this.uuid = pn(), this.data = t, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const i = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++) r[o].isDataTexture ? s.push(Ho(r[o].image)) : s.push(Ho(r[o]));
      } else s = Ho(r);
      i.url = s;
    }
    return e || (t.images[this.uuid] = i), i;
  }
}
function Ho(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Vf.getDataURL(n) : n.data ? { data: Array.from(n.data), width: n.width, height: n.height, type: n.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Hf = 0;
class Pe extends Ei {
  constructor(t = Pe.DEFAULT_IMAGE, e = Pe.DEFAULT_MAPPING, i = fi, r = fi, s = rn, o = mi, a = on, l = Rn, c = Pe.DEFAULT_ANISOTROPY, h = qn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Hf++ }), this.uuid = pn(), this.name = "", this.source = new Hu(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new J(0, 0), this.repeat = new J(1, 1), this.center = new J(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ft(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = true, this;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const i = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Pu) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case Ga:
        t.x = t.x - Math.floor(t.x);
        break;
      case fi:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case Wa:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Ga:
        t.y = t.y - Math.floor(t.y);
        break;
      case fi:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case Wa:
        Math.abs(Math.floor(t.y) % 2) === 1 ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y);
        break;
    }
    return this.flipY && (t.y = 1 - t.y), t;
  }
  set needsUpdate(t) {
    t === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(t) {
    t === true && this.pmremVersion++;
  }
}
Pe.DEFAULT_IMAGE = null;
Pe.DEFAULT_MAPPING = Pu;
Pe.DEFAULT_ANISOTROPY = 1;
class pe {
  constructor(t = 0, e = 0, i = 0, r = 1) {
    pe.prototype.isVector4 = true, this.x = t, this.y = e, this.z = i, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, i, r) {
    return this.x = t, this.y = e, this.z = i, this.w = r, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this.w = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setW(t) {
    return this.w = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this.w = t.w !== void 0 ? t.w : 1, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this.w += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
  }
  applyMatrix4(t) {
    const e = this.x, i = this.y, r = this.z, s = this.w, o = t.elements;
    return this.x = o[0] * e + o[4] * i + o[8] * r + o[12] * s, this.y = o[1] * e + o[5] * i + o[9] * r + o[13] * s, this.z = o[2] * e + o[6] * i + o[10] * r + o[14] * s, this.w = o[3] * e + o[7] * i + o[11] * r + o[15] * s, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, i, r, s;
    const l = t.elements, c = l[0], h = l[4], u = l[8], d = l[1], f = l[5], _ = l[9], x = l[2], p = l[6], m = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - x) < 0.01 && Math.abs(_ - p) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + x) < 0.1 && Math.abs(_ + p) < 0.1 && Math.abs(c + f + m - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const y = (c + 1) / 2, M = (f + 1) / 2, U = (m + 1) / 2, A = (h + d) / 4, T = (u + x) / 4, I = (_ + p) / 4;
      return y > M && y > U ? y < 0.01 ? (i = 0, r = 0.707106781, s = 0.707106781) : (i = Math.sqrt(y), r = A / i, s = T / i) : M > U ? M < 0.01 ? (i = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(M), i = A / r, s = I / r) : U < 0.01 ? (i = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(U), i = T / s, r = I / s), this.set(i, r, s, e), this;
    }
    let E = Math.sqrt((p - _) * (p - _) + (u - x) * (u - x) + (d - h) * (d - h));
    return Math.abs(E) < 1e-3 && (E = 1), this.x = (p - _) / E, this.y = (u - x) / E, this.z = (d - h) / E, this.w = Math.acos((c + f + m - 1) / 2), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this.w = Math.max(t, Math.min(e, this.w)), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this.w = t.w + (e.w - t.w) * i, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Gf extends Ei {
  constructor(t = 1, e = 1, i = {}) {
    super(), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = 1, this.scissor = new pe(0, 0, t, e), this.scissorTest = false, this.viewport = new pe(0, 0, t, e);
    const r = { width: t, height: e, depth: 1 };
    i = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: rn, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, i);
    const s = new Pe(r, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace);
    s.flipY = false, s.generateMipmaps = i.generateMipmaps, s.internalFormat = i.internalFormat, this.textures = [];
    const o = i.count;
    for (let a = 0; a < o; a++) this.textures[a] = s.clone(), this.textures[a].isRenderTargetTexture = true;
    this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.resolveDepthBuffer = i.resolveDepthBuffer, this.resolveStencilBuffer = i.resolveStencilBuffer, this.depthTexture = i.depthTexture, this.samples = i.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, i = 1) {
    if (this.width !== t || this.height !== e || this.depth !== i) {
      this.width = t, this.height = e, this.depth = i;
      for (let r = 0, s = this.textures.length; r < s; r++) this.textures[r].image.width = t, this.textures[r].image.height = e, this.textures[r].image.depth = i;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let i = 0, r = t.textures.length; i < r; i++) this.textures[i] = t.textures[i].clone(), this.textures[i].isRenderTargetTexture = true;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new Hu(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class xi extends Gf {
  constructor(t = 1, e = 1, i = {}) {
    super(t, e, i), this.isWebGLRenderTarget = true;
  }
}
class Gu extends Pe {
  constructor(t = null, e = 1, i = 1, r = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: i, depth: r }, this.magFilter = $e, this.minFilter = $e, this.wrapR = fi, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Wf extends Pe {
  constructor(t = null, e = 1, i = 1, r = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: i, depth: r }, this.magFilter = $e, this.minFilter = $e, this.wrapR = fi, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class bi {
  constructor(t = 0, e = 0, i = 0, r = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = i, this._w = r;
  }
  static slerpFlat(t, e, i, r, s, o, a) {
    let l = i[r + 0], c = i[r + 1], h = i[r + 2], u = i[r + 3];
    const d = s[o + 0], f = s[o + 1], _ = s[o + 2], x = s[o + 3];
    if (a === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (a === 1) {
      t[e + 0] = d, t[e + 1] = f, t[e + 2] = _, t[e + 3] = x;
      return;
    }
    if (u !== x || l !== d || c !== f || h !== _) {
      let p = 1 - a;
      const m = l * d + c * f + h * _ + u * x, E = m >= 0 ? 1 : -1, y = 1 - m * m;
      if (y > Number.EPSILON) {
        const U = Math.sqrt(y), A = Math.atan2(U, m * E);
        p = Math.sin(p * A) / U, a = Math.sin(a * A) / U;
      }
      const M = a * E;
      if (l = l * p + d * M, c = c * p + f * M, h = h * p + _ * M, u = u * p + x * M, p === 1 - a) {
        const U = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= U, c *= U, h *= U, u *= U;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, i, r, s, o) {
    const a = i[r], l = i[r + 1], c = i[r + 2], h = i[r + 3], u = s[o], d = s[o + 1], f = s[o + 2], _ = s[o + 3];
    return t[e] = a * _ + h * u + l * f - c * d, t[e + 1] = l * _ + h * d + c * u - a * f, t[e + 2] = c * _ + h * f + a * d - l * u, t[e + 3] = h * _ - a * u - l * d - c * f, t;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(t) {
    this._w = t, this._onChangeCallback();
  }
  set(t, e, i, r) {
    return this._x = t, this._y = e, this._z = i, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const i = t._x, r = t._y, s = t._z, o = t._order, a = Math.cos, l = Math.sin, c = a(i / 2), h = a(r / 2), u = a(s / 2), d = l(i / 2), f = l(r / 2), _ = l(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + c * f * _, this._y = c * f * u - d * h * _, this._z = c * h * _ + d * f * u, this._w = c * h * u - d * f * _;
        break;
      case "YXZ":
        this._x = d * h * u + c * f * _, this._y = c * f * u - d * h * _, this._z = c * h * _ - d * f * u, this._w = c * h * u + d * f * _;
        break;
      case "ZXY":
        this._x = d * h * u - c * f * _, this._y = c * f * u + d * h * _, this._z = c * h * _ + d * f * u, this._w = c * h * u - d * f * _;
        break;
      case "ZYX":
        this._x = d * h * u - c * f * _, this._y = c * f * u + d * h * _, this._z = c * h * _ - d * f * u, this._w = c * h * u + d * f * _;
        break;
      case "YZX":
        this._x = d * h * u + c * f * _, this._y = c * f * u + d * h * _, this._z = c * h * _ - d * f * u, this._w = c * h * u - d * f * _;
        break;
      case "XZY":
        this._x = d * h * u - c * f * _, this._y = c * f * u - d * h * _, this._z = c * h * _ + d * f * u, this._w = c * h * u + d * f * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const i = e / 2, r = Math.sin(i);
    return this._x = t.x * r, this._y = t.y * r, this._z = t.z * r, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, i = e[0], r = e[4], s = e[8], o = e[1], a = e[5], l = e[9], c = e[2], h = e[6], u = e[10], d = i + a + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / f, this._x = (h - l) * f, this._y = (s - c) * f, this._z = (o - r) * f;
    } else if (i > a && i > u) {
      const f = 2 * Math.sqrt(1 + i - a - u);
      this._w = (h - l) / f, this._x = 0.25 * f, this._y = (r + o) / f, this._z = (s + c) / f;
    } else if (a > u) {
      const f = 2 * Math.sqrt(1 + a - i - u);
      this._w = (s - c) / f, this._x = (r + o) / f, this._y = 0.25 * f, this._z = (l + h) / f;
    } else {
      const f = 2 * Math.sqrt(1 + u - i - a);
      this._w = (o - r) / f, this._x = (s + c) / f, this._y = (l + h) / f, this._z = 0.25 * f;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let i = t.dot(e) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = i)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = i), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(be(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const i = this.angleTo(t);
    if (i === 0) return this;
    const r = Math.min(1, e / i);
    return this.slerp(t, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let t = this.length();
    return t === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const i = t._x, r = t._y, s = t._z, o = t._w, a = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = i * h + o * a + r * c - s * l, this._y = r * h + o * l + s * a - i * c, this._z = s * h + o * c + i * l - r * a, this._w = o * h - i * a - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const i = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * t._w + i * t._x + r * t._y + s * t._z;
    if (a < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, a = -a) : this.copy(t), a >= 1) return this._w = o, this._x = i, this._y = r, this._z = s, this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const f = 1 - e;
      return this._w = f * o + e * this._w, this._x = f * i + e * this._x, this._y = f * r + e * this._y, this._z = f * s + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - e) * h) / c, d = Math.sin(e * h) / c;
    return this._w = o * u + this._w * d, this._x = i * u + this._x * d, this._y = r * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, i) {
    return this.copy(t).slerp(e, i);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), i = Math.random(), r = Math.sqrt(1 - i), s = Math.sqrt(i);
    return this.set(r * Math.sin(t), r * Math.cos(t), s * Math.sin(e), s * Math.cos(e));
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
  }
  fromArray(t, e = 0) {
    return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
  }
  fromBufferAttribute(t, e) {
    return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class P {
  constructor(t = 0, e = 0, i = 0) {
    P.prototype.isVector3 = true, this.x = t, this.y = e, this.z = i;
  }
  set(t, e, i) {
    return i === void 0 && (i = this.z), this.x = t, this.y = e, this.z = i, this;
  }
  setScalar(t) {
    return this.x = t, this.y = t, this.z = t, this;
  }
  setX(t) {
    return this.x = t, this;
  }
  setY(t) {
    return this.y = t, this;
  }
  setZ(t) {
    return this.z = t, this;
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return this.x = t.x, this.y = t.y, this.z = t.z, this;
  }
  add(t) {
    return this.x += t.x, this.y += t.y, this.z += t.z, this;
  }
  addScalar(t) {
    return this.x += t, this.y += t, this.z += t, this;
  }
  addVectors(t, e) {
    return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
  }
  addScaledVector(t, e) {
    return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
  }
  sub(t) {
    return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
  }
  subScalar(t) {
    return this.x -= t, this.y -= t, this.z -= t, this;
  }
  subVectors(t, e) {
    return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
  }
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
  }
  multiplyScalar(t) {
    return this.x *= t, this.y *= t, this.z *= t, this;
  }
  multiplyVectors(t, e) {
    return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
  }
  applyEuler(t) {
    return this.applyQuaternion(Hc.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Hc.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, i = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[3] * i + s[6] * r, this.y = s[1] * e + s[4] * i + s[7] * r, this.z = s[2] * e + s[5] * i + s[8] * r, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, i = this.y, r = this.z, s = t.elements, o = 1 / (s[3] * e + s[7] * i + s[11] * r + s[15]);
    return this.x = (s[0] * e + s[4] * i + s[8] * r + s[12]) * o, this.y = (s[1] * e + s[5] * i + s[9] * r + s[13]) * o, this.z = (s[2] * e + s[6] * i + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(t) {
    const e = this.x, i = this.y, r = this.z, s = t.x, o = t.y, a = t.z, l = t.w, c = 2 * (o * r - a * i), h = 2 * (a * e - s * r), u = 2 * (s * i - o * e);
    return this.x = e + l * c + o * u - a * h, this.y = i + l * h + a * c - s * u, this.z = r + l * u + s * h - o * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, i = this.y, r = this.z, s = t.elements;
    return this.x = s[0] * e + s[4] * i + s[8] * r, this.y = s[1] * e + s[5] * i + s[9] * r, this.z = s[2] * e + s[6] * i + s[10] * r, this.normalize();
  }
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
  }
  max(t) {
    return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
  }
  clamp(t, e) {
    return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this;
  }
  clampScalar(t, e) {
    return this.x = Math.max(t, Math.min(e, this.x)), this.y = Math.max(t, Math.min(e, this.y)), this.z = Math.max(t, Math.min(e, this.z)), this;
  }
  clampLength(t, e) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
  }
  lerpVectors(t, e, i) {
    return this.x = t.x + (e.x - t.x) * i, this.y = t.y + (e.y - t.y) * i, this.z = t.z + (e.z - t.z) * i, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const i = t.x, r = t.y, s = t.z, o = e.x, a = e.y, l = e.z;
    return this.x = r * l - s * a, this.y = s * o - i * l, this.z = i * a - r * o, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const i = t.dot(this) / e;
    return this.copy(t).multiplyScalar(i);
  }
  projectOnPlane(t) {
    return Go.copy(this).projectOnVector(t), this.sub(Go);
  }
  reflect(t) {
    return this.sub(Go.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const i = this.dot(t) / e;
    return Math.acos(be(i, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, i = this.y - t.y, r = this.z - t.z;
    return e * e + i * i + r * r;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, i) {
    const r = Math.sin(e) * t;
    return this.x = r * Math.sin(i), this.y = Math.cos(e) * t, this.z = r * Math.cos(i), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, i) {
    return this.x = t * Math.sin(e), this.y = i, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), i = this.setFromMatrixColumn(t, 1).length(), r = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = i, this.z = r, this;
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return this.x = t._x, this.y = t._y, this.z = t._z, this;
  }
  setFromColor(t) {
    return this.x = t.r, this.y = t.g, this.z = t.b, this;
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
  }
  fromBufferAttribute(t, e) {
    return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, i = Math.sqrt(1 - e * e);
    return this.x = i * Math.cos(t), this.y = e, this.z = i * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Go = new P(), Hc = new bi();
class Zr {
  constructor(t = new P(1 / 0, 1 / 0, 1 / 0), e = new P(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e += 3) this.expandByPoint(Qe.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, i = t.count; e < i; e++) this.expandByPoint(Qe.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const i = Qe.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(i), this.max.copy(t).add(i), this;
  }
  setFromObject(t, e = false) {
    return this.makeEmpty(), this.expandByObject(t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.min.copy(t.min), this.max.copy(t.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return this.min.min(t), this.max.max(t), this;
  }
  expandByVector(t) {
    return this.min.sub(t), this.max.add(t), this;
  }
  expandByScalar(t) {
    return this.min.addScalar(-t), this.max.addScalar(t), this;
  }
  expandByObject(t, e = false) {
    t.updateWorldMatrix(false, false);
    const i = t.geometry;
    if (i !== void 0) {
      const s = i.getAttribute("position");
      if (e === true && s !== void 0 && t.isInstancedMesh !== true) for (let o = 0, a = s.count; o < a; o++) t.isMesh === true ? t.getVertexPosition(o, Qe) : Qe.fromBufferAttribute(s, o), Qe.applyMatrix4(t.matrixWorld), this.expandByPoint(Qe);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), ms.copy(t.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), ms.copy(i.boundingBox)), ms.applyMatrix4(t.matrixWorld), this.union(ms);
    }
    const r = t.children;
    for (let s = 0, o = r.length; s < o; s++) this.expandByObject(r[s], e);
    return this;
  }
  containsPoint(t) {
    return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
  }
  containsBox(t) {
    return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
  }
  getParameter(t, e) {
    return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(t) {
    return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
  }
  intersectsSphere(t) {
    return this.clampPoint(t.center, Qe), Qe.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, i;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= -t.constant && i >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(xr), _s.subVectors(this.max, xr), Li.subVectors(t.a, xr), Di.subVectors(t.b, xr), Ii.subVectors(t.c, xr), On.subVectors(Di, Li), Fn.subVectors(Ii, Di), ri.subVectors(Li, Ii);
    let e = [0, -On.z, On.y, 0, -Fn.z, Fn.y, 0, -ri.z, ri.y, On.z, 0, -On.x, Fn.z, 0, -Fn.x, ri.z, 0, -ri.x, -On.y, On.x, 0, -Fn.y, Fn.x, 0, -ri.y, ri.x, 0];
    return !Wo(e, Li, Di, Ii, _s) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Wo(e, Li, Di, Ii, _s)) ? false : (vs.crossVectors(On, Fn), e = [vs.x, vs.y, vs.z], Wo(e, Li, Di, Ii, _s));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Qe).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Qe).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (gn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), gn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), gn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), gn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), gn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), gn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), gn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), gn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(gn), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const gn = [new P(), new P(), new P(), new P(), new P(), new P(), new P(), new P()], Qe = new P(), ms = new Zr(), Li = new P(), Di = new P(), Ii = new P(), On = new P(), Fn = new P(), ri = new P(), xr = new P(), _s = new P(), vs = new P(), si = new P();
function Wo(n, t, e, i, r) {
  for (let s = 0, o = n.length - 3; s <= o; s += 3) {
    si.fromArray(n, s);
    const a = r.x * Math.abs(si.x) + r.y * Math.abs(si.y) + r.z * Math.abs(si.z), l = t.dot(si), c = e.dot(si), h = i.dot(si);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return false;
  }
  return true;
}
const Xf = new Zr(), br = new P(), Xo = new P();
class Jr {
  constructor(t = new P(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const i = this.center;
    e !== void 0 ? i.copy(e) : Xf.setFromPoints(t).getCenter(i);
    let r = 0;
    for (let s = 0, o = t.length; s < o; s++) r = Math.max(r, i.distanceToSquared(t[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(t) {
    return this.center.copy(t.center), this.radius = t.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const i = this.center.distanceToSquared(t);
    return e.copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
  }
  getBoundingBox(t) {
    return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
  }
  translate(t) {
    return this.center.add(t), this;
  }
  expandByPoint(t) {
    if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
    br.subVectors(t, this.center);
    const e = br.lengthSq();
    if (e > this.radius * this.radius) {
      const i = Math.sqrt(e), r = (i - this.radius) * 0.5;
      this.center.addScaledVector(br, r / i), this.radius += r;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (Xo.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(br.copy(t.center).add(Xo)), this.expandByPoint(br.copy(t.center).sub(Xo))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const xn = new P(), qo = new P(), gs = new P(), Bn = new P(), jo = new P(), xs = new P(), Yo = new P();
class Qr {
  constructor(t = new P(), e = new P(0, 0, -1)) {
    this.origin = t, this.direction = e;
  }
  set(t, e) {
    return this.origin.copy(t), this.direction.copy(e), this;
  }
  copy(t) {
    return this.origin.copy(t.origin), this.direction.copy(t.direction), this;
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return this.direction.copy(t).sub(this.origin).normalize(), this;
  }
  recast(t) {
    return this.origin.copy(this.at(t, xn)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const i = e.dot(this.direction);
    return i < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = xn.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (xn.copy(this.origin).addScaledVector(this.direction, e), xn.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, i, r) {
    qo.copy(t).add(e).multiplyScalar(0.5), gs.copy(e).sub(t).normalize(), Bn.copy(this.origin).sub(qo);
    const s = t.distanceTo(e) * 0.5, o = -this.direction.dot(gs), a = Bn.dot(this.direction), l = -Bn.dot(gs), c = Bn.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, f, _;
    if (h > 0) if (u = o * l - a, d = o * a - l, _ = s * h, u >= 0) if (d >= -_) if (d <= _) {
      const x = 1 / h;
      u *= x, d *= x, f = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c;
    } else d = s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    else d = -s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    else d <= -_ ? (u = Math.max(0, -(-o * s + a)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c) : d <= _ ? (u = 0, d = Math.min(Math.max(-s, -l), s), f = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * s + a)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), f = -u * u + d * (d + 2 * l) + c);
    else d = o > 0 ? -s : s, u = Math.max(0, -(o * d + a)), f = -u * u + d * (d + 2 * l) + c;
    return i && i.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(qo).addScaledVector(gs, d), f;
  }
  intersectSphere(t, e) {
    xn.subVectors(t.center, this.origin);
    const i = xn.dot(this.direction), r = xn.dot(xn) - i * i, s = t.radius * t.radius;
    if (r > s) return null;
    const o = Math.sqrt(s - r), a = i - o, l = i + o;
    return l < 0 ? null : a < 0 ? this.at(l, e) : this.at(a, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(t.normal) + t.constant) / e;
    return i >= 0 ? i : null;
  }
  intersectPlane(t, e) {
    const i = this.distanceToPlane(t);
    return i === null ? null : this.at(i, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let i, r, s, o, a, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (i = (t.min.x - d.x) * c, r = (t.max.x - d.x) * c) : (i = (t.max.x - d.x) * c, r = (t.min.x - d.x) * c), h >= 0 ? (s = (t.min.y - d.y) * h, o = (t.max.y - d.y) * h) : (s = (t.max.y - d.y) * h, o = (t.min.y - d.y) * h), i > o || s > r || ((s > i || isNaN(i)) && (i = s), (o < r || isNaN(r)) && (r = o), u >= 0 ? (a = (t.min.z - d.z) * u, l = (t.max.z - d.z) * u) : (a = (t.max.z - d.z) * u, l = (t.min.z - d.z) * u), i > l || a > r) || ((a > i || i !== i) && (i = a), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(i >= 0 ? i : r, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, xn) !== null;
  }
  intersectTriangle(t, e, i, r, s) {
    jo.subVectors(e, t), xs.subVectors(i, t), Yo.crossVectors(jo, xs);
    let o = this.direction.dot(Yo), a;
    if (o > 0) {
      if (r) return null;
      a = 1;
    } else if (o < 0) a = -1, o = -o;
    else return null;
    Bn.subVectors(this.origin, t);
    const l = a * this.direction.dot(xs.crossVectors(Bn, xs));
    if (l < 0) return null;
    const c = a * this.direction.dot(jo.cross(Bn));
    if (c < 0 || l + c > o) return null;
    const h = -a * Bn.dot(Yo);
    return h < 0 ? null : this.at(h / o, s);
  }
  applyMatrix4(t) {
    return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this;
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ie {
  constructor(t, e, i, r, s, o, a, l, c, h, u, d, f, _, x, p) {
    ie.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, i, r, s, o, a, l, c, h, u, d, f, _, x, p);
  }
  set(t, e, i, r, s, o, a, l, c, h, u, d, f, _, x, p) {
    const m = this.elements;
    return m[0] = t, m[4] = e, m[8] = i, m[12] = r, m[1] = s, m[5] = o, m[9] = a, m[13] = l, m[2] = c, m[6] = h, m[10] = u, m[14] = d, m[3] = f, m[7] = _, m[11] = x, m[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ie().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, i = t.elements;
    return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this;
  }
  copyPosition(t) {
    const e = this.elements, i = t.elements;
    return e[12] = i[12], e[13] = i[13], e[14] = i[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, i) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, i) {
    return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    const e = this.elements, i = t.elements, r = 1 / Ui.setFromMatrixColumn(t, 0).length(), s = 1 / Ui.setFromMatrixColumn(t, 1).length(), o = 1 / Ui.setFromMatrixColumn(t, 2).length();
    return e[0] = i[0] * r, e[1] = i[1] * r, e[2] = i[2] * r, e[3] = 0, e[4] = i[4] * s, e[5] = i[5] * s, e[6] = i[6] * s, e[7] = 0, e[8] = i[8] * o, e[9] = i[9] * o, e[10] = i[10] * o, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, i = t.x, r = t.y, s = t.z, o = Math.cos(i), a = Math.sin(i), l = Math.cos(r), c = Math.sin(r), h = Math.cos(s), u = Math.sin(s);
    if (t.order === "XYZ") {
      const d = o * h, f = o * u, _ = a * h, x = a * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = f + _ * c, e[5] = d - x * c, e[9] = -a * l, e[2] = x - d * c, e[6] = _ + f * c, e[10] = o * l;
    } else if (t.order === "YXZ") {
      const d = l * h, f = l * u, _ = c * h, x = c * u;
      e[0] = d + x * a, e[4] = _ * a - f, e[8] = o * c, e[1] = o * u, e[5] = o * h, e[9] = -a, e[2] = f * a - _, e[6] = x + d * a, e[10] = o * l;
    } else if (t.order === "ZXY") {
      const d = l * h, f = l * u, _ = c * h, x = c * u;
      e[0] = d - x * a, e[4] = -o * u, e[8] = _ + f * a, e[1] = f + _ * a, e[5] = o * h, e[9] = x - d * a, e[2] = -o * c, e[6] = a, e[10] = o * l;
    } else if (t.order === "ZYX") {
      const d = o * h, f = o * u, _ = a * h, x = a * u;
      e[0] = l * h, e[4] = _ * c - f, e[8] = d * c + x, e[1] = l * u, e[5] = x * c + d, e[9] = f * c - _, e[2] = -c, e[6] = a * l, e[10] = o * l;
    } else if (t.order === "YZX") {
      const d = o * l, f = o * c, _ = a * l, x = a * c;
      e[0] = l * h, e[4] = x - d * u, e[8] = _ * u + f, e[1] = u, e[5] = o * h, e[9] = -a * h, e[2] = -c * h, e[6] = f * u + _, e[10] = d - x * u;
    } else if (t.order === "XZY") {
      const d = o * l, f = o * c, _ = a * l, x = a * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = d * u + x, e[5] = o * h, e[9] = f * u - _, e[2] = _ * u - f, e[6] = a * h, e[10] = x * u + d;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(qf, t, jf);
  }
  lookAt(t, e, i) {
    const r = this.elements;
    return He.subVectors(t, e), He.lengthSq() === 0 && (He.z = 1), He.normalize(), kn.crossVectors(i, He), kn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? He.x += 1e-4 : He.z += 1e-4, He.normalize(), kn.crossVectors(i, He)), kn.normalize(), bs.crossVectors(He, kn), r[0] = kn.x, r[4] = bs.x, r[8] = He.x, r[1] = kn.y, r[5] = bs.y, r[9] = He.y, r[2] = kn.z, r[6] = bs.z, r[10] = He.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const i = t.elements, r = e.elements, s = this.elements, o = i[0], a = i[4], l = i[8], c = i[12], h = i[1], u = i[5], d = i[9], f = i[13], _ = i[2], x = i[6], p = i[10], m = i[14], E = i[3], y = i[7], M = i[11], U = i[15], A = r[0], T = r[4], I = r[8], Z = r[12], v = r[1], w = r[5], z = r[9], B = r[13], V = r[2], $ = r[6], F = r[10], tt = r[14], G = r[3], ht = r[7], pt = r[11], ft = r[15];
    return s[0] = o * A + a * v + l * V + c * G, s[4] = o * T + a * w + l * $ + c * ht, s[8] = o * I + a * z + l * F + c * pt, s[12] = o * Z + a * B + l * tt + c * ft, s[1] = h * A + u * v + d * V + f * G, s[5] = h * T + u * w + d * $ + f * ht, s[9] = h * I + u * z + d * F + f * pt, s[13] = h * Z + u * B + d * tt + f * ft, s[2] = _ * A + x * v + p * V + m * G, s[6] = _ * T + x * w + p * $ + m * ht, s[10] = _ * I + x * z + p * F + m * pt, s[14] = _ * Z + x * B + p * tt + m * ft, s[3] = E * A + y * v + M * V + U * G, s[7] = E * T + y * w + M * $ + U * ht, s[11] = E * I + y * z + M * F + U * pt, s[15] = E * Z + y * B + M * tt + U * ft, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], i = t[4], r = t[8], s = t[12], o = t[1], a = t[5], l = t[9], c = t[13], h = t[2], u = t[6], d = t[10], f = t[14], _ = t[3], x = t[7], p = t[11], m = t[15];
    return _ * (+s * l * u - r * c * u - s * a * d + i * c * d + r * a * f - i * l * f) + x * (+e * l * f - e * c * d + s * o * d - r * o * f + r * c * h - s * l * h) + p * (+e * c * u - e * a * f - s * o * u + i * o * f + s * a * h - i * c * h) + m * (-r * a * h - e * l * u + e * a * d + r * o * u - i * o * d + i * l * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, i) {
    const r = this.elements;
    return t.isVector3 ? (r[12] = t.x, r[13] = t.y, r[14] = t.z) : (r[12] = t, r[13] = e, r[14] = i), this;
  }
  invert() {
    const t = this.elements, e = t[0], i = t[1], r = t[2], s = t[3], o = t[4], a = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], _ = t[12], x = t[13], p = t[14], m = t[15], E = u * p * c - x * d * c + x * l * f - a * p * f - u * l * m + a * d * m, y = _ * d * c - h * p * c - _ * l * f + o * p * f + h * l * m - o * d * m, M = h * x * c - _ * u * c + _ * a * f - o * x * f - h * a * m + o * u * m, U = _ * u * l - h * x * l - _ * a * d + o * x * d + h * a * p - o * u * p, A = e * E + i * y + r * M + s * U;
    if (A === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / A;
    return t[0] = E * T, t[1] = (x * d * s - u * p * s - x * r * f + i * p * f + u * r * m - i * d * m) * T, t[2] = (a * p * s - x * l * s + x * r * c - i * p * c - a * r * m + i * l * m) * T, t[3] = (u * l * s - a * d * s - u * r * c + i * d * c + a * r * f - i * l * f) * T, t[4] = y * T, t[5] = (h * p * s - _ * d * s + _ * r * f - e * p * f - h * r * m + e * d * m) * T, t[6] = (_ * l * s - o * p * s - _ * r * c + e * p * c + o * r * m - e * l * m) * T, t[7] = (o * d * s - h * l * s + h * r * c - e * d * c - o * r * f + e * l * f) * T, t[8] = M * T, t[9] = (_ * u * s - h * x * s - _ * i * f + e * x * f + h * i * m - e * u * m) * T, t[10] = (o * x * s - _ * a * s + _ * i * c - e * x * c - o * i * m + e * a * m) * T, t[11] = (h * a * s - o * u * s - h * i * c + e * u * c + o * i * f - e * a * f) * T, t[12] = U * T, t[13] = (h * x * r - _ * u * r + _ * i * d - e * x * d - h * i * p + e * u * p) * T, t[14] = (_ * a * r - o * x * r - _ * i * l + e * x * l + o * i * p - e * a * p) * T, t[15] = (o * u * r - h * a * r + h * i * l - e * u * l - o * i * d + e * a * d) * T, this;
  }
  scale(t) {
    const e = this.elements, i = t.x, r = t.y, s = t.z;
    return e[0] *= i, e[4] *= r, e[8] *= s, e[1] *= i, e[5] *= r, e[9] *= s, e[2] *= i, e[6] *= r, e[10] *= s, e[3] *= i, e[7] *= r, e[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, i, r));
  }
  makeTranslation(t, e, i) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), i = Math.sin(t);
    return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const i = Math.cos(e), r = Math.sin(e), s = 1 - i, o = t.x, a = t.y, l = t.z, c = s * o, h = s * a;
    return this.set(c * o + i, c * a - r * l, c * l + r * a, 0, c * a + r * l, h * a + i, h * l - r * o, 0, c * l - r * a, h * l + r * o, s * l * l + i, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, i) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, i, r, s, o) {
    return this.set(1, i, s, 0, t, 1, o, 0, e, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, i) {
    const r = this.elements, s = e._x, o = e._y, a = e._z, l = e._w, c = s + s, h = o + o, u = a + a, d = s * c, f = s * h, _ = s * u, x = o * h, p = o * u, m = a * u, E = l * c, y = l * h, M = l * u, U = i.x, A = i.y, T = i.z;
    return r[0] = (1 - (x + m)) * U, r[1] = (f + M) * U, r[2] = (_ - y) * U, r[3] = 0, r[4] = (f - M) * A, r[5] = (1 - (d + m)) * A, r[6] = (p + E) * A, r[7] = 0, r[8] = (_ + y) * T, r[9] = (p - E) * T, r[10] = (1 - (d + x)) * T, r[11] = 0, r[12] = t.x, r[13] = t.y, r[14] = t.z, r[15] = 1, this;
  }
  decompose(t, e, i) {
    const r = this.elements;
    let s = Ui.set(r[0], r[1], r[2]).length();
    const o = Ui.set(r[4], r[5], r[6]).length(), a = Ui.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), t.x = r[12], t.y = r[13], t.z = r[14], tn.copy(this);
    const c = 1 / s, h = 1 / o, u = 1 / a;
    return tn.elements[0] *= c, tn.elements[1] *= c, tn.elements[2] *= c, tn.elements[4] *= h, tn.elements[5] *= h, tn.elements[6] *= h, tn.elements[8] *= u, tn.elements[9] *= u, tn.elements[10] *= u, e.setFromRotationMatrix(tn), i.x = s, i.y = o, i.z = a, this;
  }
  makePerspective(t, e, i, r, s, o, a = Tn) {
    const l = this.elements, c = 2 * s / (e - t), h = 2 * s / (i - r), u = (e + t) / (e - t), d = (i + r) / (i - r);
    let f, _;
    if (a === Tn) f = -(o + s) / (o - s), _ = -2 * o * s / (o - s);
    else if (a === mo) f = -o / (o - s), _ = -o * s / (o - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = f, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, i, r, s, o, a = Tn) {
    const l = this.elements, c = 1 / (e - t), h = 1 / (i - r), u = 1 / (o - s), d = (e + t) * c, f = (i + r) * h;
    let _, x;
    if (a === Tn) _ = (o + s) * u, x = -2 * u;
    else if (a === mo) _ = s * u, x = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -f, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, i = t.elements;
    for (let r = 0; r < 16; r++) if (e[r] !== i[r]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = t[i + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const i = this.elements;
    return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t;
  }
}
const Ui = new P(), tn = new ie(), qf = new P(0, 0, 0), jf = new P(1, 1, 1), kn = new P(), bs = new P(), He = new P(), Gc = new ie(), Wc = new bi();
class ln {
  constructor(t = 0, e = 0, i = 0, r = ln.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = i, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(t) {
    this._x = t, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(t) {
    this._y = t, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(t) {
    this._z = t, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(t) {
    this._order = t, this._onChangeCallback();
  }
  set(t, e, i, r = this._order) {
    return this._x = t, this._y = e, this._z = i, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, i = true) {
    const r = t.elements, s = r[0], o = r[4], a = r[8], l = r[1], c = r[5], h = r[9], u = r[2], d = r[6], f = r[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(be(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, f), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-be(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, f), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(be(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, f), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-be(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c));
        break;
      case "YZX":
        this._z = Math.asin(be(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, f));
        break;
      case "XZY":
        this._z = Math.asin(-be(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, f), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, i === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, i) {
    return Gc.makeRotationFromQuaternion(t), this.setFromRotationMatrix(Gc, e, i);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return Wc.setFromEuler(this), this.setFromQuaternion(Wc, t);
  }
  equals(t) {
    return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
  }
  fromArray(t) {
    return this._x = t[0], this._y = t[1], this._z = t[2], t[3] !== void 0 && (this._order = t[3]), this._onChangeCallback(), this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
  }
  _onChange(t) {
    return this._onChangeCallback = t, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
ln.DEFAULT_ORDER = "XYZ";
class Gl {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = (1 << t | 0) >>> 0;
  }
  enable(t) {
    this.mask |= 1 << t | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= 1 << t | 0;
  }
  disable(t) {
    this.mask &= ~(1 << t | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & (1 << t | 0)) !== 0;
  }
}
let Yf = 0;
const Xc = new P(), Ni = new bi(), bn = new ie(), ys = new P(), yr = new P(), Kf = new P(), $f = new bi(), qc = new P(1, 0, 0), jc = new P(0, 1, 0), Yc = new P(0, 0, 1), Kc = { type: "added" }, Zf = { type: "removed" }, Oi = { type: "childadded", child: null }, Ko = { type: "childremoved", child: null };
class ve extends Ei {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Yf++ }), this.uuid = pn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ve.DEFAULT_UP.clone();
    const t = new P(), e = new ln(), i = new bi(), r = new P(1, 1, 1);
    function s() {
      i.setFromEuler(e, false);
    }
    function o() {
      e.setFromQuaternion(i, void 0, false);
    }
    e._onChange(s), i._onChange(o), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: i }, scale: { configurable: true, enumerable: true, value: r }, modelViewMatrix: { value: new ie() }, normalMatrix: { value: new Ft() } }), this.matrix = new ie(), this.matrixWorld = new ie(), this.matrixAutoUpdate = ve.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Gl(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(t) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(t) {
    return this.quaternion.premultiply(t), this;
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, true);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return Ni.setFromAxisAngle(t, e), this.quaternion.multiply(Ni), this;
  }
  rotateOnWorldAxis(t, e) {
    return Ni.setFromAxisAngle(t, e), this.quaternion.premultiply(Ni), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(qc, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(jc, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Yc, t);
  }
  translateOnAxis(t, e) {
    return Xc.copy(t).applyQuaternion(this.quaternion), this.position.add(Xc.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(qc, t);
  }
  translateY(t) {
    return this.translateOnAxis(jc, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Yc, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(bn.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, i) {
    t.isVector3 ? ys.copy(t) : ys.set(t, e, i);
    const r = this.parent;
    this.updateWorldMatrix(true, false), yr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? bn.lookAt(yr, ys, this.up) : bn.lookAt(ys, yr, this.up), this.quaternion.setFromRotationMatrix(bn), r && (bn.extractRotation(r.matrixWorld), Ni.setFromRotationMatrix(bn), this.quaternion.premultiply(Ni.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(Kc), Oi.child = t, this.dispatchEvent(Oi), Oi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Zf), Ko.child = t, this.dispatchEvent(Ko), Ko.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), bn.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), bn.multiply(t.parent.matrixWorld)), t.applyMatrix4(bn), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(Kc), Oi.child = t, this.dispatchEvent(Oi), Oi.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const o = this.children[i].getObjectByProperty(t, e);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(t, e, i = []) {
    this[t] === e && i.push(this);
    const r = this.children;
    for (let s = 0, o = r.length; s < o; s++) r[s].getObjectsByProperty(t, e, i);
    return i;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(yr, t, Kf), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(yr, $f, t), t;
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(true, false);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {
  }
  traverse(t) {
    t(this);
    const e = this.children;
    for (let i = 0, r = e.length; i < r; i++) e[i].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const e = this.children;
    for (let i = 0, r = e.length; i < r; i++) e[i].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(t) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t = true);
    const e = this.children;
    for (let i = 0, r = e.length; i < r; i++) e[i].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const i = this.parent;
    if (t === true && i !== null && i.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) r[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", i = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, i.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === true && (r.castShadow = true), this.receiveShadow === true && (r.receiveShadow = true), this.visible === false && (r.visible = false), this.frustumCulled === false && (r.frustumCulled = false), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === false && (r.matrixAutoUpdate = false), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((a) => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (r.boundingSphere = { center: r.boundingSphere.center.toArray(), radius: r.boundingSphere.radius }), this.boundingBox !== null && (r.boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() }));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (r.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          s(t.shapes, u);
        }
        else s(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(t.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const a = [];
      for (let l = 0, c = this.material.length; l < c; l++) a.push(s(t.materials, this.material[l]));
      r.material = a;
    } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++) r.children.push(this.children[a].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        r.animations.push(s(t.animations, l));
      }
    }
    if (e) {
      const a = o(t.geometries), l = o(t.materials), c = o(t.textures), h = o(t.images), u = o(t.shapes), d = o(t.skeletons), f = o(t.animations), _ = o(t.nodes);
      a.length > 0 && (i.geometries = a), l.length > 0 && (i.materials = l), c.length > 0 && (i.textures = c), h.length > 0 && (i.images = h), u.length > 0 && (i.shapes = u), d.length > 0 && (i.skeletons = d), f.length > 0 && (i.animations = f), _.length > 0 && (i.nodes = _);
    }
    return i.object = r, i;
    function o(a) {
      const l = [];
      for (const c in a) {
        const h = a[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let i = 0; i < t.children.length; i++) {
      const r = t.children[i];
      this.add(r.clone());
    }
    return this;
  }
}
ve.DEFAULT_UP = new P(0, 1, 0);
ve.DEFAULT_MATRIX_AUTO_UPDATE = true;
ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const en = new P(), yn = new P(), $o = new P(), wn = new P(), Fi = new P(), Bi = new P(), $c = new P(), Zo = new P(), Jo = new P(), Qo = new P(), ta = new pe(), ea = new pe(), na = new pe();
class We {
  constructor(t = new P(), e = new P(), i = new P()) {
    this.a = t, this.b = e, this.c = i;
  }
  static getNormal(t, e, i, r) {
    r.subVectors(i, e), en.subVectors(t, e), r.cross(en);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, e, i, r, s) {
    en.subVectors(r, e), yn.subVectors(i, e), $o.subVectors(t, e);
    const o = en.dot(en), a = en.dot(yn), l = en.dot($o), c = yn.dot(yn), h = yn.dot($o), u = o * c - a * a;
    if (u === 0) return s.set(0, 0, 0), null;
    const d = 1 / u, f = (c * l - a * h) * d, _ = (o * h - a * l) * d;
    return s.set(1 - f - _, _, f);
  }
  static containsPoint(t, e, i, r) {
    return this.getBarycoord(t, e, i, r, wn) === null ? false : wn.x >= 0 && wn.y >= 0 && wn.x + wn.y <= 1;
  }
  static getInterpolation(t, e, i, r, s, o, a, l) {
    return this.getBarycoord(t, e, i, r, wn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, wn.x), l.addScaledVector(o, wn.y), l.addScaledVector(a, wn.z), l);
  }
  static getInterpolatedAttribute(t, e, i, r, s, o) {
    return ta.setScalar(0), ea.setScalar(0), na.setScalar(0), ta.fromBufferAttribute(t, e), ea.fromBufferAttribute(t, i), na.fromBufferAttribute(t, r), o.setScalar(0), o.addScaledVector(ta, s.x), o.addScaledVector(ea, s.y), o.addScaledVector(na, s.z), o;
  }
  static isFrontFacing(t, e, i, r) {
    return en.subVectors(i, e), yn.subVectors(t, e), en.cross(yn).dot(r) < 0;
  }
  set(t, e, i) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(i), this;
  }
  setFromPointsAndIndices(t, e, i, r) {
    return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[r]), this;
  }
  setFromAttributeAndIndices(t, e, i, r) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, i), this.c.fromBufferAttribute(t, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return en.subVectors(this.c, this.b), yn.subVectors(this.a, this.b), en.cross(yn).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return We.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return We.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, i, r, s) {
    return We.getInterpolation(t, this.a, this.b, this.c, e, i, r, s);
  }
  containsPoint(t) {
    return We.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return We.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const i = this.a, r = this.b, s = this.c;
    let o, a;
    Fi.subVectors(r, i), Bi.subVectors(s, i), Zo.subVectors(t, i);
    const l = Fi.dot(Zo), c = Bi.dot(Zo);
    if (l <= 0 && c <= 0) return e.copy(i);
    Jo.subVectors(t, r);
    const h = Fi.dot(Jo), u = Bi.dot(Jo);
    if (h >= 0 && u <= h) return e.copy(r);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), e.copy(i).addScaledVector(Fi, o);
    Qo.subVectors(t, s);
    const f = Fi.dot(Qo), _ = Bi.dot(Qo);
    if (_ >= 0 && f <= _) return e.copy(s);
    const x = f * c - l * _;
    if (x <= 0 && c >= 0 && _ <= 0) return a = c / (c - _), e.copy(i).addScaledVector(Bi, a);
    const p = h * _ - f * u;
    if (p <= 0 && u - h >= 0 && f - _ >= 0) return $c.subVectors(s, r), a = (u - h) / (u - h + (f - _)), e.copy(r).addScaledVector($c, a);
    const m = 1 / (p + x + d);
    return o = x * m, a = d * m, e.copy(i).addScaledVector(Fi, o).addScaledVector(Bi, a);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Wu = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Vn = { h: 0, s: 0, l: 0 }, ws = { h: 0, s: 0, l: 0 };
function ia(n, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? n + (t - n) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? n + (t - n) * 6 * (2 / 3 - e) : n;
}
class Bt {
  constructor(t, e, i) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, i);
  }
  set(t, e, i) {
    if (e === void 0 && i === void 0) {
      const r = t;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(t, e, i);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = cn) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Zt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, i, r = Zt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = i, Zt.toWorkingColorSpace(this, r), this;
  }
  setHSL(t, e, i, r = Zt.workingColorSpace) {
    if (t = Hl(t, 1), e = be(e, 0, 1), i = be(i, 0, 1), e === 0) this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - s;
      this.r = ia(o, s, t + 1 / 3), this.g = ia(o, s, t), this.b = ia(o, s, t - 1 / 3);
    }
    return Zt.toWorkingColorSpace(this, r), this;
  }
  setStyle(t, e = cn) {
    function i(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, e);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return i(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, e);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const s = r[1], o = s.length;
      if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, e);
      if (o === 6) return this.setHex(parseInt(s, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = cn) {
    const i = Wu[t.toLowerCase()];
    return i !== void 0 ? this.setHex(i, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = ir(t.r), this.g = ir(t.g), this.b = ir(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = zo(t.r), this.g = zo(t.g), this.b = zo(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = cn) {
    return Zt.fromWorkingColorSpace(Ae.copy(this), t), Math.round(be(Ae.r * 255, 0, 255)) * 65536 + Math.round(be(Ae.g * 255, 0, 255)) * 256 + Math.round(be(Ae.b * 255, 0, 255));
  }
  getHexString(t = cn) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Zt.workingColorSpace) {
    Zt.fromWorkingColorSpace(Ae.copy(this), e);
    const i = Ae.r, r = Ae.g, s = Ae.b, o = Math.max(i, r, s), a = Math.min(i, r, s);
    let l, c;
    const h = (a + o) / 2;
    if (a === o) l = 0, c = 0;
    else {
      const u = o - a;
      switch (c = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case i:
          l = (r - s) / u + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / u + 2;
          break;
        case s:
          l = (i - r) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Zt.workingColorSpace) {
    return Zt.fromWorkingColorSpace(Ae.copy(this), e), t.r = Ae.r, t.g = Ae.g, t.b = Ae.b, t;
  }
  getStyle(t = cn) {
    Zt.fromWorkingColorSpace(Ae.copy(this), t);
    const e = Ae.r, i = Ae.g, r = Ae.b;
    return t !== cn ? `color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(t, e, i) {
    return this.getHSL(Vn), this.setHSL(Vn.h + t, Vn.s + e, Vn.l + i);
  }
  add(t) {
    return this.r += t.r, this.g += t.g, this.b += t.b, this;
  }
  addColors(t, e) {
    return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
  }
  addScalar(t) {
    return this.r += t, this.g += t, this.b += t, this;
  }
  sub(t) {
    return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
  }
  multiply(t) {
    return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
  }
  multiplyScalar(t) {
    return this.r *= t, this.g *= t, this.b *= t, this;
  }
  lerp(t, e) {
    return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
  }
  lerpColors(t, e, i) {
    return this.r = t.r + (e.r - t.r) * i, this.g = t.g + (e.g - t.g) * i, this.b = t.b + (e.b - t.b) * i, this;
  }
  lerpHSL(t, e) {
    this.getHSL(Vn), t.getHSL(ws);
    const i = Ur(Vn.h, ws.h, e), r = Ur(Vn.s, ws.s, e), s = Ur(Vn.l, ws.l, e);
    return this.setHSL(i, r, s), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, i = this.g, r = this.b, s = t.elements;
    return this.r = s[0] * e + s[3] * i + s[6] * r, this.g = s[1] * e + s[4] * i + s[7] * r, this.b = s[2] * e + s[5] * i + s[8] * r, this;
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
  }
  toArray(t = [], e = 0) {
    return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
  }
  fromBufferAttribute(t, e) {
    return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ae = new Bt();
Bt.NAMES = Wu;
let Jf = 0;
class In extends Ei {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Jf++ }), this.uuid = pn(), this.name = "", this.type = "Material", this.blending = tr, this.side = Qn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Da, this.blendDst = Ia, this.blendEquation = di, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Bt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = or, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = Oc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Pi, this.stencilZFail = Pi, this.stencilZPass = Pi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    this._alphaTest > 0 != t > 0 && this.version++, this._alphaTest = t;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0) for (const e in t) {
      const i = t[e];
      if (i === void 0) {
        console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      const r = this[e];
      if (r === void 0) {
        console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[e] = i;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const i = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (i.dispersion = this.dispersion), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(t).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(t).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(t).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(t).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(t).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== tr && (i.blending = this.blending), this.side !== Qn && (i.side = this.side), this.vertexColors === true && (i.vertexColors = true), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === true && (i.transparent = true), this.blendSrc !== Da && (i.blendSrc = this.blendSrc), this.blendDst !== Ia && (i.blendDst = this.blendDst), this.blendEquation !== di && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== or && (i.depthFunc = this.depthFunc), this.depthTest === false && (i.depthTest = this.depthTest), this.depthWrite === false && (i.depthWrite = this.depthWrite), this.colorWrite === false && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== Oc && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Pi && (i.stencilFail = this.stencilFail), this.stencilZFail !== Pi && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== Pi && (i.stencilZPass = this.stencilZPass), this.stencilWrite === true && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === true && (i.polygonOffset = true), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === true && (i.dithering = true), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === true && (i.alphaHash = true), this.alphaToCoverage === true && (i.alphaToCoverage = true), this.premultipliedAlpha === true && (i.premultipliedAlpha = true), this.forceSinglePass === true && (i.forceSinglePass = true), this.wireframe === true && (i.wireframe = true), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (i.flatShading = true), this.visible === false && (i.visible = false), this.toneMapped === false && (i.toneMapped = false), this.fog === false && (i.fog = false), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (e) {
      const s = r(t.textures), o = r(t.images);
      s.length > 0 && (i.textures = s), o.length > 0 && (i.images = o);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let i = null;
    if (e !== null) {
      const r = e.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s) i[s] = e[s].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Wl extends In {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Bt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ln(), this.combine = Il, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const _e = new P(), Ms = new J();
class an {
  constructor(t, e, i = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = i, this.usage = vl, this.updateRanges = [], this.gpuType = Cn, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this;
  }
  copyAt(t, e, i) {
    t *= this.itemSize, i *= e.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++) this.array[t + r] = e.array[i + r];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, i = this.count; e < i; e++) Ms.fromBufferAttribute(this, e), Ms.applyMatrix3(t), this.setXY(e, Ms.x, Ms.y);
    else if (this.itemSize === 3) for (let e = 0, i = this.count; e < i; e++) _e.fromBufferAttribute(this, e), _e.applyMatrix3(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, i = this.count; e < i; e++) _e.fromBufferAttribute(this, e), _e.applyMatrix4(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, i = this.count; e < i; e++) _e.fromBufferAttribute(this, e), _e.applyNormalMatrix(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, i = this.count; e < i; e++) _e.fromBufferAttribute(this, e), _e.transformDirection(t), this.setXYZ(e, _e.x, _e.y, _e.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let i = this.array[t * this.itemSize + e];
    return this.normalized && (i = sn(i, this.array)), i;
  }
  setComponent(t, e, i) {
    return this.normalized && (i = ee(i, this.array)), this.array[t * this.itemSize + e] = i, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, i) {
    return t *= this.itemSize, this.normalized && (e = ee(e, this.array), i = ee(i, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this;
  }
  setXYZ(t, e, i, r) {
    return t *= this.itemSize, this.normalized && (e = ee(e, this.array), i = ee(i, this.array), r = ee(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = r, this;
  }
  setXYZW(t, e, i, r, s) {
    return t *= this.itemSize, this.normalized && (e = ee(e, this.array), i = ee(i, this.array), r = ee(r, this.array), s = ee(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = r, this.array[t + 3] = s, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== vl && (t.usage = this.usage), t;
  }
}
class Xu extends an {
  constructor(t, e, i) {
    super(new Uint16Array(t), e, i);
  }
}
class qu extends an {
  constructor(t, e, i) {
    super(new Uint32Array(t), e, i);
  }
}
class Qt extends an {
  constructor(t, e, i) {
    super(new Float32Array(t), e, i);
  }
}
let Qf = 0;
const Ye = new ie(), ra = new ve(), ki = new P(), Ge = new Zr(), wr = new Zr(), Ee = new P();
class Se extends Ei {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: Qf++ }), this.uuid = pn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (zu(t) ? qu : Xu)(t, 1) : this.index = t, this;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return this.attributes[t] = e, this;
  }
  deleteAttribute(t) {
    return delete this.attributes[t], this;
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, i = 0) {
    this.groups.push({ start: t, count: e, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    this.drawRange.start = t, this.drawRange.count = e;
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), e.needsUpdate = true);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Ft().getNormalMatrix(t);
      i.applyNormalMatrix(s), i.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(t), r.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Ye.makeRotationFromQuaternion(t), this.applyMatrix4(Ye), this;
  }
  rotateX(t) {
    return Ye.makeRotationX(t), this.applyMatrix4(Ye), this;
  }
  rotateY(t) {
    return Ye.makeRotationY(t), this.applyMatrix4(Ye), this;
  }
  rotateZ(t) {
    return Ye.makeRotationZ(t), this.applyMatrix4(Ye), this;
  }
  translate(t, e, i) {
    return Ye.makeTranslation(t, e, i), this.applyMatrix4(Ye), this;
  }
  scale(t, e, i) {
    return Ye.makeScale(t, e, i), this.applyMatrix4(Ye), this;
  }
  lookAt(t) {
    return ra.lookAt(t), ra.updateMatrix(), this.applyMatrix4(ra.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(ki).negate(), this.translate(ki.x, ki.y, ki.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      e.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Qt(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Zr());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new P(-1 / 0, -1 / 0, -1 / 0), new P(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let i = 0, r = e.length; i < r; i++) {
        const s = e[i];
        Ge.setFromBufferAttribute(s), this.morphTargetsRelative ? (Ee.addVectors(this.boundingBox.min, Ge.min), this.boundingBox.expandByPoint(Ee), Ee.addVectors(this.boundingBox.max, Ge.max), this.boundingBox.expandByPoint(Ee)) : (this.boundingBox.expandByPoint(Ge.min), this.boundingBox.expandByPoint(Ge.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Jr());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new P(), 1 / 0);
      return;
    }
    if (t) {
      const i = this.boundingSphere.center;
      if (Ge.setFromBufferAttribute(t), e) for (let s = 0, o = e.length; s < o; s++) {
        const a = e[s];
        wr.setFromBufferAttribute(a), this.morphTargetsRelative ? (Ee.addVectors(Ge.min, wr.min), Ge.expandByPoint(Ee), Ee.addVectors(Ge.max, wr.max), Ge.expandByPoint(Ee)) : (Ge.expandByPoint(wr.min), Ge.expandByPoint(wr.max));
      }
      Ge.getCenter(i);
      let r = 0;
      for (let s = 0, o = t.count; s < o; s++) Ee.fromBufferAttribute(t, s), r = Math.max(r, i.distanceToSquared(Ee));
      if (e) for (let s = 0, o = e.length; s < o; s++) {
        const a = e[s], l = this.morphTargetsRelative;
        for (let c = 0, h = a.count; c < h; c++) Ee.fromBufferAttribute(a, c), l && (ki.fromBufferAttribute(t, c), Ee.add(ki)), r = Math.max(r, i.distanceToSquared(Ee));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = e.position, r = e.normal, s = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new an(new Float32Array(4 * i.count), 4));
    const o = this.getAttribute("tangent"), a = [], l = [];
    for (let I = 0; I < i.count; I++) a[I] = new P(), l[I] = new P();
    const c = new P(), h = new P(), u = new P(), d = new J(), f = new J(), _ = new J(), x = new P(), p = new P();
    function m(I, Z, v) {
      c.fromBufferAttribute(i, I), h.fromBufferAttribute(i, Z), u.fromBufferAttribute(i, v), d.fromBufferAttribute(s, I), f.fromBufferAttribute(s, Z), _.fromBufferAttribute(s, v), h.sub(c), u.sub(c), f.sub(d), _.sub(d);
      const w = 1 / (f.x * _.y - _.x * f.y);
      isFinite(w) && (x.copy(h).multiplyScalar(_.y).addScaledVector(u, -f.y).multiplyScalar(w), p.copy(u).multiplyScalar(f.x).addScaledVector(h, -_.x).multiplyScalar(w), a[I].add(x), a[Z].add(x), a[v].add(x), l[I].add(p), l[Z].add(p), l[v].add(p));
    }
    let E = this.groups;
    E.length === 0 && (E = [{ start: 0, count: t.count }]);
    for (let I = 0, Z = E.length; I < Z; ++I) {
      const v = E[I], w = v.start, z = v.count;
      for (let B = w, V = w + z; B < V; B += 3) m(t.getX(B + 0), t.getX(B + 1), t.getX(B + 2));
    }
    const y = new P(), M = new P(), U = new P(), A = new P();
    function T(I) {
      U.fromBufferAttribute(r, I), A.copy(U);
      const Z = a[I];
      y.copy(Z), y.sub(U.multiplyScalar(U.dot(Z))).normalize(), M.crossVectors(A, Z);
      const w = M.dot(l[I]) < 0 ? -1 : 1;
      o.setXYZW(I, y.x, y.y, y.z, w);
    }
    for (let I = 0, Z = E.length; I < Z; ++I) {
      const v = E[I], w = v.start, z = v.count;
      for (let B = w, V = w + z; B < V; B += 3) T(t.getX(B + 0)), T(t.getX(B + 1)), T(t.getX(B + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0) i = new an(new Float32Array(e.count * 3), 3), this.setAttribute("normal", i);
      else for (let d = 0, f = i.count; d < f; d++) i.setXYZ(d, 0, 0, 0);
      const r = new P(), s = new P(), o = new P(), a = new P(), l = new P(), c = new P(), h = new P(), u = new P();
      if (t) for (let d = 0, f = t.count; d < f; d += 3) {
        const _ = t.getX(d + 0), x = t.getX(d + 1), p = t.getX(d + 2);
        r.fromBufferAttribute(e, _), s.fromBufferAttribute(e, x), o.fromBufferAttribute(e, p), h.subVectors(o, s), u.subVectors(r, s), h.cross(u), a.fromBufferAttribute(i, _), l.fromBufferAttribute(i, x), c.fromBufferAttribute(i, p), a.add(h), l.add(h), c.add(h), i.setXYZ(_, a.x, a.y, a.z), i.setXYZ(x, l.x, l.y, l.z), i.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let d = 0, f = e.count; d < f; d += 3) r.fromBufferAttribute(e, d + 0), s.fromBufferAttribute(e, d + 1), o.fromBufferAttribute(e, d + 2), h.subVectors(o, s), u.subVectors(r, s), h.cross(u), i.setXYZ(d + 0, h.x, h.y, h.z), i.setXYZ(d + 1, h.x, h.y, h.z), i.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), i.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, i = t.count; e < i; e++) Ee.fromBufferAttribute(t, e), Ee.normalize(), t.setXYZ(e, Ee.x, Ee.y, Ee.z);
  }
  toNonIndexed() {
    function t(a, l) {
      const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h);
      let f = 0, _ = 0;
      for (let x = 0, p = l.length; x < p; x++) {
        a.isInterleavedBufferAttribute ? f = l[x] * a.data.stride + a.offset : f = l[x] * h;
        for (let m = 0; m < h; m++) d[_++] = c[f++];
      }
      return new an(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new Se(), i = this.index.array, r = this.attributes;
    for (const a in r) {
      const l = r[a], c = t(l, i);
      e.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [], c = s[a];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], f = t(d, i);
        l.push(f);
      }
      e.morphAttributes[a] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (t.uuid = this.uuid, t.type = this.type, this.name !== "" && (t.name = this.name), Object.keys(this.userData).length > 0 && (t.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null && (t.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(t.data));
      }
      h.length > 0 && (r[l] = h, s = true);
    }
    s && (t.data.morphAttributes = r, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (t.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const i = t.index;
    i !== null && this.setIndex(i.clone(e));
    const r = t.attributes;
    for (const c in r) {
      const h = r[c];
      this.setAttribute(c, h.clone(e));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const o = t.groups;
    for (let c = 0, h = o.length; c < h; c++) {
      const u = o[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const a = t.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Zc = new ie(), oi = new Qr(), Ss = new Jr(), Jc = new P(), Es = new P(), Cs = new P(), Ts = new P(), sa = new P(), As = new P(), Qc = new P(), Ps = new P();
class un extends ve {
  constructor(t = new Se(), e = new Wl()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const r = e[i[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const i = this.geometry, r = i.attributes.position, s = i.morphAttributes.position, o = i.morphTargetsRelative;
    e.fromBufferAttribute(r, t);
    const a = this.morphTargetInfluences;
    if (s && a) {
      As.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = a[l], u = s[l];
        h !== 0 && (sa.fromBufferAttribute(u, t), o ? As.addScaledVector(sa, h) : As.addScaledVector(sa.sub(e), h));
      }
      e.add(As);
    }
    return e;
  }
  raycast(t, e) {
    const i = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Ss.copy(i.boundingSphere), Ss.applyMatrix4(s), oi.copy(t.ray).recast(t.near), !(Ss.containsPoint(oi.origin) === false && (oi.intersectSphere(Ss, Jc) === null || oi.origin.distanceToSquared(Jc) > (t.far - t.near) ** 2)) && (Zc.copy(s).invert(), oi.copy(t.ray).applyMatrix4(Zc), !(i.boundingBox !== null && oi.intersectsBox(i.boundingBox) === false) && this._computeIntersections(t, e, oi)));
  }
  _computeIntersections(t, e, i) {
    let r;
    const s = this.geometry, o = this.material, a = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, f = s.drawRange;
    if (a !== null) if (Array.isArray(o)) for (let _ = 0, x = d.length; _ < x; _++) {
      const p = d[_], m = o[p.materialIndex], E = Math.max(p.start, f.start), y = Math.min(a.count, Math.min(p.start + p.count, f.start + f.count));
      for (let M = E, U = y; M < U; M += 3) {
        const A = a.getX(M), T = a.getX(M + 1), I = a.getX(M + 2);
        r = Rs(this, m, t, i, c, h, u, A, T, I), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, e.push(r));
      }
    }
    else {
      const _ = Math.max(0, f.start), x = Math.min(a.count, f.start + f.count);
      for (let p = _, m = x; p < m; p += 3) {
        const E = a.getX(p), y = a.getX(p + 1), M = a.getX(p + 2);
        r = Rs(this, o, t, i, c, h, u, E, y, M), r && (r.faceIndex = Math.floor(p / 3), e.push(r));
      }
    }
    else if (l !== void 0) if (Array.isArray(o)) for (let _ = 0, x = d.length; _ < x; _++) {
      const p = d[_], m = o[p.materialIndex], E = Math.max(p.start, f.start), y = Math.min(l.count, Math.min(p.start + p.count, f.start + f.count));
      for (let M = E, U = y; M < U; M += 3) {
        const A = M, T = M + 1, I = M + 2;
        r = Rs(this, m, t, i, c, h, u, A, T, I), r && (r.faceIndex = Math.floor(M / 3), r.face.materialIndex = p.materialIndex, e.push(r));
      }
    }
    else {
      const _ = Math.max(0, f.start), x = Math.min(l.count, f.start + f.count);
      for (let p = _, m = x; p < m; p += 3) {
        const E = p, y = p + 1, M = p + 2;
        r = Rs(this, o, t, i, c, h, u, E, y, M), r && (r.faceIndex = Math.floor(p / 3), e.push(r));
      }
    }
  }
}
function tm(n, t, e, i, r, s, o, a) {
  let l;
  if (t.side === Be ? l = i.intersectTriangle(o, s, r, true, a) : l = i.intersectTriangle(r, s, o, t.side === Qn, a), l === null) return null;
  Ps.copy(a), Ps.applyMatrix4(n.matrixWorld);
  const c = e.ray.origin.distanceTo(Ps);
  return c < e.near || c > e.far ? null : { distance: c, point: Ps.clone(), object: n };
}
function Rs(n, t, e, i, r, s, o, a, l, c) {
  n.getVertexPosition(a, Es), n.getVertexPosition(l, Cs), n.getVertexPosition(c, Ts);
  const h = tm(n, t, e, i, Es, Cs, Ts, Qc);
  if (h) {
    const u = new P();
    We.getBarycoord(Qc, Es, Cs, Ts, u), r && (h.uv = We.getInterpolatedAttribute(r, a, l, c, u, new J())), s && (h.uv1 = We.getInterpolatedAttribute(s, a, l, c, u, new J())), o && (h.normal = We.getInterpolatedAttribute(o, a, l, c, u, new P()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a, b: l, c, normal: new P(), materialIndex: 0 };
    We.getNormal(Es, Cs, Ts, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class ts extends Se {
  constructor(t = 1, e = 1, i = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: i, widthSegments: r, heightSegments: s, depthSegments: o };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const l = [], c = [], h = [], u = [];
    let d = 0, f = 0;
    _("z", "y", "x", -1, -1, i, e, t, o, s, 0), _("z", "y", "x", 1, -1, i, e, -t, o, s, 1), _("x", "z", "y", 1, 1, t, i, e, r, o, 2), _("x", "z", "y", 1, -1, t, i, -e, r, o, 3), _("x", "y", "z", 1, -1, t, e, i, r, s, 4), _("x", "y", "z", -1, -1, t, e, -i, r, s, 5), this.setIndex(l), this.setAttribute("position", new Qt(c, 3)), this.setAttribute("normal", new Qt(h, 3)), this.setAttribute("uv", new Qt(u, 2));
    function _(x, p, m, E, y, M, U, A, T, I, Z) {
      const v = M / T, w = U / I, z = M / 2, B = U / 2, V = A / 2, $ = T + 1, F = I + 1;
      let tt = 0, G = 0;
      const ht = new P();
      for (let pt = 0; pt < F; pt++) {
        const ft = pt * w - B;
        for (let zt = 0; zt < $; zt++) {
          const qt = zt * v - z;
          ht[x] = qt * E, ht[p] = ft * y, ht[m] = V, c.push(ht.x, ht.y, ht.z), ht[x] = 0, ht[p] = 0, ht[m] = A > 0 ? 1 : -1, h.push(ht.x, ht.y, ht.z), u.push(zt / T), u.push(1 - pt / I), tt += 1;
        }
      }
      for (let pt = 0; pt < I; pt++) for (let ft = 0; ft < T; ft++) {
        const zt = d + ft + $ * pt, qt = d + ft + $ * (pt + 1), W = d + (ft + 1) + $ * (pt + 1), et = d + (ft + 1) + $ * pt;
        l.push(zt, qt, et), l.push(qt, W, et), G += 6;
      }
      a.addGroup(f, G, Z), f += G, d += tt;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ts(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function ur(n) {
  const t = {};
  for (const e in n) {
    t[e] = {};
    for (const i in n[e]) {
      const r = n[e][i];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][i] = null) : t[e][i] = r.clone() : Array.isArray(r) ? t[e][i] = r.slice() : t[e][i] = r;
    }
  }
  return t;
}
function Le(n) {
  const t = {};
  for (let e = 0; e < n.length; e++) {
    const i = ur(n[e]);
    for (const r in i) t[r] = i[r];
  }
  return t;
}
function em(n) {
  const t = [];
  for (let e = 0; e < n.length; e++) t.push(n[e].clone());
  return t;
}
function ju(n) {
  const t = n.getRenderTarget();
  return t === null ? n.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Zt.workingColorSpace;
}
const nm = { clone: ur, merge: Le };
var im = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, rm = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ti extends In {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = im, this.fragmentShader = rm, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = ur(t.uniforms), this.uniformsGroups = em(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? e.uniforms[r] = { type: "t", value: o.toJSON(t).uuid } : o && o.isColor ? e.uniforms[r] = { type: "c", value: o.getHex() } : o && o.isVector2 ? e.uniforms[r] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? e.uniforms[r] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? e.uniforms[r] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? e.uniforms[r] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? e.uniforms[r] = { type: "m4", value: o.toArray() } : e.uniforms[r] = { value: o };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const i = {};
    for (const r in this.extensions) this.extensions[r] === true && (i[r] = true);
    return Object.keys(i).length > 0 && (e.extensions = i), e;
  }
}
class Yu extends ve {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new ie(), this.projectionMatrix = new ie(), this.projectionMatrixInverse = new ie(), this.coordinateSystem = Tn;
  }
  copy(t, e) {
    return super.copy(t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this.projectionMatrixInverse.copy(t.projectionMatrixInverse), this.coordinateSystem = t.coordinateSystem, this;
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    super.updateMatrixWorld(t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(t, e) {
    super.updateWorldMatrix(t, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const zn = new P(), th = new J(), eh = new J();
class nn extends Yu {
  constructor(t = 50, e = 1, i = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = i, this.far = r, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = kr * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(nr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return kr * 2 * Math.atan(Math.tan(nr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, i) {
    zn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(zn.x, zn.y).multiplyScalar(-t / zn.z), zn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(zn.x, zn.y).multiplyScalar(-t / zn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, th, eh), e.subVectors(eh, th);
  }
  setViewOffset(t, e, i, r, s, o) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(nr * 0.5 * this.fov) / this.zoom, i = 2 * e, r = this.aspect * i, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth, c = o.fullHeight;
      s += o.offsetX * r / l, e -= o.offsetY * i / c, r *= o.width / l, i *= o.height / c;
    }
    const a = this.filmOffset;
    a !== 0 && (s += t * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, e, e - i, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const Vi = -90, zi = 1;
class sm extends ve {
  constructor(t, e, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new nn(Vi, zi, t, e);
    r.layers = this.layers, this.add(r);
    const s = new nn(Vi, zi, t, e);
    s.layers = this.layers, this.add(s);
    const o = new nn(Vi, zi, t, e);
    o.layers = this.layers, this.add(o);
    const a = new nn(Vi, zi, t, e);
    a.layers = this.layers, this.add(a);
    const l = new nn(Vi, zi, t, e);
    l.layers = this.layers, this.add(l);
    const c = new nn(Vi, zi, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [i, r, s, o, a, l] = e;
    for (const c of e) this.remove(c);
    if (t === Tn) i.up.set(0, 1, 0), i.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === mo) i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e) this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [s, o, a, l, c, h] = this.children, u = t.getRenderTarget(), d = t.getActiveCubeFace(), f = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = false;
    const x = i.texture.generateMipmaps;
    i.texture.generateMipmaps = false, t.setRenderTarget(i, 0, r), t.render(e, s), t.setRenderTarget(i, 1, r), t.render(e, o), t.setRenderTarget(i, 2, r), t.render(e, a), t.setRenderTarget(i, 3, r), t.render(e, l), t.setRenderTarget(i, 4, r), t.render(e, c), i.texture.generateMipmaps = x, t.setRenderTarget(i, 5, r), t.render(e, h), t.setRenderTarget(u, d, f), t.xr.enabled = _, i.texture.needsPMREMUpdate = true;
  }
}
class Ku extends Pe {
  constructor(t, e, i, r, s, o, a, l, c, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : ar, super(t, e, i, r, s, o, a, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class om extends xi {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const i = { width: t, height: t, depth: 1 }, r = [i, i, i, i, i, i];
    this.texture = new Ku(r, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : false, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : rn;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const i = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new ts(5, 5, 5), s = new ti({ name: "CubemapFromEquirect", uniforms: ur(i.uniforms), vertexShader: i.vertexShader, fragmentShader: i.fragmentShader, side: Be, blending: Kn });
    s.uniforms.tEquirect.value = e;
    const o = new un(r, s), a = e.minFilter;
    return e.minFilter === mi && (e.minFilter = rn), new sm(1, 10, this).update(t, o), e.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(t, e, i, r) {
    const s = t.getRenderTarget();
    for (let o = 0; o < 6; o++) t.setRenderTarget(this, o), t.clear(e, i, r);
    t.setRenderTarget(s);
  }
}
const oa = new P(), am = new P(), lm = new Ft();
class Xn {
  constructor(t = new P(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, i, r) {
    return this.normal.set(t, e, i), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, i) {
    const r = oa.subVectors(i, e).cross(am.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, t), this;
  }
  copy(t) {
    return this.normal.copy(t.normal), this.constant = t.constant, this;
  }
  normalize() {
    const t = 1 / this.normal.length();
    return this.normal.multiplyScalar(t), this.constant *= t, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const i = t.delta(oa), r = this.normal.dot(i);
    if (r === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(i, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), i = this.distanceToPoint(t.end);
    return e < 0 && i > 0 || i < 0 && e > 0;
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const i = e || lm.getNormalMatrix(t), r = this.coplanarPoint(oa).applyMatrix4(t), s = this.normal.applyMatrix3(i).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(t) {
    return this.constant -= t.dot(this.normal), this;
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ai = new Jr(), Ls = new P();
class Xl {
  constructor(t = new Xn(), e = new Xn(), i = new Xn(), r = new Xn(), s = new Xn(), o = new Xn()) {
    this.planes = [t, e, i, r, s, o];
  }
  set(t, e, i, r, s, o) {
    const a = this.planes;
    return a[0].copy(t), a[1].copy(e), a[2].copy(i), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) e[i].copy(t.planes[i]);
    return this;
  }
  setFromProjectionMatrix(t, e = Tn) {
    const i = this.planes, r = t.elements, s = r[0], o = r[1], a = r[2], l = r[3], c = r[4], h = r[5], u = r[6], d = r[7], f = r[8], _ = r[9], x = r[10], p = r[11], m = r[12], E = r[13], y = r[14], M = r[15];
    if (i[0].setComponents(l - s, d - c, p - f, M - m).normalize(), i[1].setComponents(l + s, d + c, p + f, M + m).normalize(), i[2].setComponents(l + o, d + h, p + _, M + E).normalize(), i[3].setComponents(l - o, d - h, p - _, M - E).normalize(), i[4].setComponents(l - a, d - u, p - x, M - y).normalize(), e === Tn) i[5].setComponents(l + a, d + u, p + x, M + y).normalize();
    else if (e === mo) i[5].setComponents(a, u, x, y).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(ai);
  }
  intersectsSprite(t) {
    return ai.center.set(0, 0, 0), ai.radius = 0.7071067811865476, ai.applyMatrix4(t.matrixWorld), this.intersectsSphere(ai);
  }
  intersectsSphere(t) {
    const e = this.planes, i = t.center, r = -t.radius;
    for (let s = 0; s < 6; s++) if (e[s].distanceToPoint(i) < r) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = e[i];
      if (Ls.x = r.normal.x > 0 ? t.max.x : t.min.x, Ls.y = r.normal.y > 0 ? t.max.y : t.min.y, Ls.z = r.normal.z > 0 ? t.max.z : t.min.z, r.distanceToPoint(Ls) < 0) return false;
    }
    return true;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let i = 0; i < 6; i++) if (e[i].distanceToPoint(t) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function $u() {
  let n = null, t = false, e = null, i = null;
  function r(s, o) {
    e(s, o), i = n.requestAnimationFrame(r);
  }
  return { start: function() {
    t !== true && e !== null && (i = n.requestAnimationFrame(r), t = true);
  }, stop: function() {
    n.cancelAnimationFrame(i), t = false;
  }, setAnimationLoop: function(s) {
    e = s;
  }, setContext: function(s) {
    n = s;
  } };
}
function cm(n) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(a, l) {
    const c = a.array, h = a.usage, u = c.byteLength, d = n.createBuffer();
    n.bindBuffer(l, d), n.bufferData(l, c, h), a.onUploadCallback();
    let f;
    if (c instanceof Float32Array) f = n.FLOAT;
    else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? f = n.HALF_FLOAT : f = n.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) f = n.SHORT;
    else if (c instanceof Uint32Array) f = n.UNSIGNED_INT;
    else if (c instanceof Int32Array) f = n.INT;
    else if (c instanceof Int8Array) f = n.BYTE;
    else if (c instanceof Uint8Array) f = n.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) f = n.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: f, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: u };
  }
  function i(a, l, c) {
    const h = l.array, u = l.updateRanges;
    if (n.bindBuffer(c, a), u.length === 0) n.bufferSubData(c, 0, h);
    else {
      u.sort((f, _) => f.start - _.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const _ = u[d], x = u[f];
        x.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, x.start + x.count - _.start) : (++d, u[d] = x);
      }
      u.length = d + 1;
      for (let f = 0, _ = u.length; f < _; f++) {
        const x = u[f];
        n.bufferSubData(c, x.start * h.BYTES_PER_ELEMENT, h, x.start, x.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(a) {
    return a.isInterleavedBufferAttribute && (a = a.data), t.get(a);
  }
  function s(a) {
    a.isInterleavedBufferAttribute && (a = a.data);
    const l = t.get(a);
    l && (n.deleteBuffer(l.buffer), t.delete(a));
  }
  function o(a, l) {
    if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) {
      const h = t.get(a);
      (!h || h.version < a.version) && t.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version });
      return;
    }
    const c = t.get(a);
    if (c === void 0) t.set(a, e(a, l));
    else if (c.version < a.version) {
      if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      i(c.buffer, a, l), c.version = a.version;
    }
  }
  return { get: r, remove: s, update: o };
}
class To extends Se {
  constructor(t = 1, e = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: i, heightSegments: r };
    const s = t / 2, o = e / 2, a = Math.floor(i), l = Math.floor(r), c = a + 1, h = l + 1, u = t / a, d = e / l, f = [], _ = [], x = [], p = [];
    for (let m = 0; m < h; m++) {
      const E = m * d - o;
      for (let y = 0; y < c; y++) {
        const M = y * u - s;
        _.push(M, -E, 0), x.push(0, 0, 1), p.push(y / a), p.push(1 - m / l);
      }
    }
    for (let m = 0; m < l; m++) for (let E = 0; E < a; E++) {
      const y = E + c * m, M = E + c * (m + 1), U = E + 1 + c * (m + 1), A = E + 1 + c * m;
      f.push(y, M, A), f.push(M, U, A);
    }
    this.setIndex(f), this.setAttribute("position", new Qt(_, 3)), this.setAttribute("normal", new Qt(x, 3)), this.setAttribute("uv", new Qt(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new To(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var hm = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, um = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, dm = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, pm = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, fm = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, mm = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, _m = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, vm = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, gm = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, xm = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, bm = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, ym = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, wm = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Mm = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Sm = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Em = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Cm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Tm = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Am = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Pm = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Rm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Lm = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Dm = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Im = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Um = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Nm = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Om = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Fm = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Bm = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, km = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Vm = "gl_FragColor = linearToOutputTexel( gl_FragColor );", zm = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Hm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Gm = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Wm = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Xm = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, qm = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, jm = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ym = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Km = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, $m = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Zm = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Jm = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Qm = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, t_ = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, e_ = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, n_ = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, i_ = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, r_ = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, s_ = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, o_ = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, a_ = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, l_ = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, c_ = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, h_ = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, u_ = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, d_ = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, p_ = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, f_ = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, m_ = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, __ = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, v_ = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, g_ = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, x_ = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, b_ = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, y_ = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, w_ = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, M_ = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, S_ = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, E_ = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, C_ = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, T_ = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, A_ = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, P_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, R_ = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, L_ = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, D_ = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, I_ = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, U_ = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, N_ = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, O_ = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, F_ = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, B_ = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, k_ = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, V_ = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, z_ = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, H_ = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, G_ = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, W_ = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, X_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, q_ = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, j_ = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Y_ = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, K_ = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, $_ = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Z_ = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, J_ = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Q_ = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, tv = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, ev = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, nv = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, iv = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, rv = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, sv = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ov = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, av = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, lv = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const cv = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, hv = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, uv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, dv = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, pv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, fv = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, mv = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, _v = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, vv = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, gv = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, xv = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, bv = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yv = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, wv = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Mv = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Sv = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ev = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Cv = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tv = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Av = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Pv = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Rv = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Lv = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Dv = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Iv = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Uv = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nv = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Ov = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fv = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Bv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, kv = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Vv = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, zv = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Hv = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ot = { alphahash_fragment: hm, alphahash_pars_fragment: um, alphamap_fragment: dm, alphamap_pars_fragment: pm, alphatest_fragment: fm, alphatest_pars_fragment: mm, aomap_fragment: _m, aomap_pars_fragment: vm, batching_pars_vertex: gm, batching_vertex: xm, begin_vertex: bm, beginnormal_vertex: ym, bsdfs: wm, iridescence_fragment: Mm, bumpmap_pars_fragment: Sm, clipping_planes_fragment: Em, clipping_planes_pars_fragment: Cm, clipping_planes_pars_vertex: Tm, clipping_planes_vertex: Am, color_fragment: Pm, color_pars_fragment: Rm, color_pars_vertex: Lm, color_vertex: Dm, common: Im, cube_uv_reflection_fragment: Um, defaultnormal_vertex: Nm, displacementmap_pars_vertex: Om, displacementmap_vertex: Fm, emissivemap_fragment: Bm, emissivemap_pars_fragment: km, colorspace_fragment: Vm, colorspace_pars_fragment: zm, envmap_fragment: Hm, envmap_common_pars_fragment: Gm, envmap_pars_fragment: Wm, envmap_pars_vertex: Xm, envmap_physical_pars_fragment: n_, envmap_vertex: qm, fog_vertex: jm, fog_pars_vertex: Ym, fog_fragment: Km, fog_pars_fragment: $m, gradientmap_pars_fragment: Zm, lightmap_pars_fragment: Jm, lights_lambert_fragment: Qm, lights_lambert_pars_fragment: t_, lights_pars_begin: e_, lights_toon_fragment: i_, lights_toon_pars_fragment: r_, lights_phong_fragment: s_, lights_phong_pars_fragment: o_, lights_physical_fragment: a_, lights_physical_pars_fragment: l_, lights_fragment_begin: c_, lights_fragment_maps: h_, lights_fragment_end: u_, logdepthbuf_fragment: d_, logdepthbuf_pars_fragment: p_, logdepthbuf_pars_vertex: f_, logdepthbuf_vertex: m_, map_fragment: __, map_pars_fragment: v_, map_particle_fragment: g_, map_particle_pars_fragment: x_, metalnessmap_fragment: b_, metalnessmap_pars_fragment: y_, morphinstance_vertex: w_, morphcolor_vertex: M_, morphnormal_vertex: S_, morphtarget_pars_vertex: E_, morphtarget_vertex: C_, normal_fragment_begin: T_, normal_fragment_maps: A_, normal_pars_fragment: P_, normal_pars_vertex: R_, normal_vertex: L_, normalmap_pars_fragment: D_, clearcoat_normal_fragment_begin: I_, clearcoat_normal_fragment_maps: U_, clearcoat_pars_fragment: N_, iridescence_pars_fragment: O_, opaque_fragment: F_, packing: B_, premultiplied_alpha_fragment: k_, project_vertex: V_, dithering_fragment: z_, dithering_pars_fragment: H_, roughnessmap_fragment: G_, roughnessmap_pars_fragment: W_, shadowmap_pars_fragment: X_, shadowmap_pars_vertex: q_, shadowmap_vertex: j_, shadowmask_pars_fragment: Y_, skinbase_vertex: K_, skinning_pars_vertex: $_, skinning_vertex: Z_, skinnormal_vertex: J_, specularmap_fragment: Q_, specularmap_pars_fragment: tv, tonemapping_fragment: ev, tonemapping_pars_fragment: nv, transmission_fragment: iv, transmission_pars_fragment: rv, uv_pars_fragment: sv, uv_pars_vertex: ov, uv_vertex: av, worldpos_vertex: lv, background_vert: cv, background_frag: hv, backgroundCube_vert: uv, backgroundCube_frag: dv, cube_vert: pv, cube_frag: fv, depth_vert: mv, depth_frag: _v, distanceRGBA_vert: vv, distanceRGBA_frag: gv, equirect_vert: xv, equirect_frag: bv, linedashed_vert: yv, linedashed_frag: wv, meshbasic_vert: Mv, meshbasic_frag: Sv, meshlambert_vert: Ev, meshlambert_frag: Cv, meshmatcap_vert: Tv, meshmatcap_frag: Av, meshnormal_vert: Pv, meshnormal_frag: Rv, meshphong_vert: Lv, meshphong_frag: Dv, meshphysical_vert: Iv, meshphysical_frag: Uv, meshtoon_vert: Nv, meshtoon_frag: Ov, points_vert: Fv, points_frag: Bv, shadow_vert: kv, shadow_frag: Vv, sprite_vert: zv, sprite_frag: Hv }, lt = { common: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ft() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ft() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ft() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ft() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ft() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ft() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ft() }, normalScale: { value: new J(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ft() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ft() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ft() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ft() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Bt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 }, uvTransform: { value: new Ft() } }, sprite: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, center: { value: new J(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ft() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 } } }, hn = { basic: { uniforms: Le([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.fog]), vertexShader: Ot.meshbasic_vert, fragmentShader: Ot.meshbasic_frag }, lambert: { uniforms: Le([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) } }]), vertexShader: Ot.meshlambert_vert, fragmentShader: Ot.meshlambert_frag }, phong: { uniforms: Le([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) }, specular: { value: new Bt(1118481) }, shininess: { value: 30 } }]), vertexShader: Ot.meshphong_vert, fragmentShader: Ot.meshphong_frag }, standard: { uniforms: Le([lt.common, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.roughnessmap, lt.metalnessmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ot.meshphysical_vert, fragmentShader: Ot.meshphysical_frag }, toon: { uniforms: Le([lt.common, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.gradientmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) } }]), vertexShader: Ot.meshtoon_vert, fragmentShader: Ot.meshtoon_frag }, matcap: { uniforms: Le([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, { matcap: { value: null } }]), vertexShader: Ot.meshmatcap_vert, fragmentShader: Ot.meshmatcap_frag }, points: { uniforms: Le([lt.points, lt.fog]), vertexShader: Ot.points_vert, fragmentShader: Ot.points_frag }, dashed: { uniforms: Le([lt.common, lt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ot.linedashed_vert, fragmentShader: Ot.linedashed_frag }, depth: { uniforms: Le([lt.common, lt.displacementmap]), vertexShader: Ot.depth_vert, fragmentShader: Ot.depth_frag }, normal: { uniforms: Le([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ot.meshnormal_vert, fragmentShader: Ot.meshnormal_frag }, sprite: { uniforms: Le([lt.sprite, lt.fog]), vertexShader: Ot.sprite_vert, fragmentShader: Ot.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ft() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ot.background_vert, fragmentShader: Ot.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ft() } }, vertexShader: Ot.backgroundCube_vert, fragmentShader: Ot.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ot.cube_vert, fragmentShader: Ot.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ot.equirect_vert, fragmentShader: Ot.equirect_frag }, distanceRGBA: { uniforms: Le([lt.common, lt.displacementmap, { referencePosition: { value: new P() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ot.distanceRGBA_vert, fragmentShader: Ot.distanceRGBA_frag }, shadow: { uniforms: Le([lt.lights, lt.fog, { color: { value: new Bt(0) }, opacity: { value: 1 } }]), vertexShader: Ot.shadow_vert, fragmentShader: Ot.shadow_frag } };
hn.physical = { uniforms: Le([hn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ft() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ft() }, clearcoatNormalScale: { value: new J(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ft() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ft() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ft() }, sheen: { value: 0 }, sheenColor: { value: new Bt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ft() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ft() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ft() }, transmissionSamplerSize: { value: new J() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ft() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Bt(0) }, specularColor: { value: new Bt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ft() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ft() }, anisotropyVector: { value: new J() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ft() } }]), vertexShader: Ot.meshphysical_vert, fragmentShader: Ot.meshphysical_frag };
const Ds = { r: 0, b: 0, g: 0 }, li = new ln(), Gv = new ie();
function Wv(n, t, e, i, r, s, o) {
  const a = new Bt(0);
  let l = s === true ? 0 : 1, c, h, u = null, d = 0, f = null;
  function _(E) {
    let y = E.isScene === true ? E.background : null;
    return y && y.isTexture && (y = (E.backgroundBlurriness > 0 ? e : t).get(y)), y;
  }
  function x(E) {
    let y = false;
    const M = _(E);
    M === null ? m(a, l) : M && M.isColor && (m(M, 1), y = true);
    const U = n.xr.getEnvironmentBlendMode();
    U === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, o) : U === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, o), (n.autoClear || y) && (i.buffers.depth.setTest(true), i.buffers.depth.setMask(true), i.buffers.color.setMask(true), n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil));
  }
  function p(E, y) {
    const M = _(y);
    M && (M.isCubeTexture || M.mapping === Eo) ? (h === void 0 && (h = new un(new ts(1, 1, 1), new ti({ name: "BackgroundCubeMaterial", uniforms: ur(hn.backgroundCube.uniforms), vertexShader: hn.backgroundCube.vertexShader, fragmentShader: hn.backgroundCube.fragmentShader, side: Be, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(U, A, T) {
      this.matrixWorld.copyPosition(T.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), r.update(h)), li.copy(y.backgroundRotation), li.x *= -1, li.y *= -1, li.z *= -1, M.isCubeTexture && M.isRenderTargetTexture === false && (li.y *= -1, li.z *= -1), h.material.uniforms.envMap.value = M, h.material.uniforms.flipEnvMap.value = M.isCubeTexture && M.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gv.makeRotationFromEuler(li)), h.material.toneMapped = Zt.getTransfer(M.colorSpace) !== ae, (u !== M || d !== M.version || f !== n.toneMapping) && (h.material.needsUpdate = true, u = M, d = M.version, f = n.toneMapping), h.layers.enableAll(), E.unshift(h, h.geometry, h.material, 0, 0, null)) : M && M.isTexture && (c === void 0 && (c = new un(new To(2, 2), new ti({ name: "BackgroundMaterial", uniforms: ur(hn.background.uniforms), vertexShader: hn.background.vertexShader, fragmentShader: hn.background.fragmentShader, side: Qn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), r.update(c)), c.material.uniforms.t2D.value = M, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Zt.getTransfer(M.colorSpace) !== ae, M.matrixAutoUpdate === true && M.updateMatrix(), c.material.uniforms.uvTransform.value.copy(M.matrix), (u !== M || d !== M.version || f !== n.toneMapping) && (c.material.needsUpdate = true, u = M, d = M.version, f = n.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(E, y) {
    E.getRGB(Ds, ju(n)), i.buffers.color.setClear(Ds.r, Ds.g, Ds.b, y, o);
  }
  return { getClearColor: function() {
    return a;
  }, setClearColor: function(E, y = 1) {
    a.set(E), l = y, m(a, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(E) {
    l = E, m(a, l);
  }, render: x, addToRenderList: p };
}
function Xv(n, t) {
  const e = n.getParameter(n.MAX_VERTEX_ATTRIBS), i = {}, r = d(null);
  let s = r, o = false;
  function a(v, w, z, B, V) {
    let $ = false;
    const F = u(B, z, w);
    s !== F && (s = F, c(s.object)), $ = f(v, B, z, V), $ && _(v, B, z, V), V !== null && t.update(V, n.ELEMENT_ARRAY_BUFFER), ($ || o) && (o = false, M(v, w, z, B), V !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function l() {
    return n.createVertexArray();
  }
  function c(v) {
    return n.bindVertexArray(v);
  }
  function h(v) {
    return n.deleteVertexArray(v);
  }
  function u(v, w, z) {
    const B = z.wireframe === true;
    let V = i[v.id];
    V === void 0 && (V = {}, i[v.id] = V);
    let $ = V[w.id];
    $ === void 0 && ($ = {}, V[w.id] = $);
    let F = $[B];
    return F === void 0 && (F = d(l()), $[B] = F), F;
  }
  function d(v) {
    const w = [], z = [], B = [];
    for (let V = 0; V < e; V++) w[V] = 0, z[V] = 0, B[V] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: w, enabledAttributes: z, attributeDivisors: B, object: v, attributes: {}, index: null };
  }
  function f(v, w, z, B) {
    const V = s.attributes, $ = w.attributes;
    let F = 0;
    const tt = z.getAttributes();
    for (const G in tt) if (tt[G].location >= 0) {
      const pt = V[G];
      let ft = $[G];
      if (ft === void 0 && (G === "instanceMatrix" && v.instanceMatrix && (ft = v.instanceMatrix), G === "instanceColor" && v.instanceColor && (ft = v.instanceColor)), pt === void 0 || pt.attribute !== ft || ft && pt.data !== ft.data) return true;
      F++;
    }
    return s.attributesNum !== F || s.index !== B;
  }
  function _(v, w, z, B) {
    const V = {}, $ = w.attributes;
    let F = 0;
    const tt = z.getAttributes();
    for (const G in tt) if (tt[G].location >= 0) {
      let pt = $[G];
      pt === void 0 && (G === "instanceMatrix" && v.instanceMatrix && (pt = v.instanceMatrix), G === "instanceColor" && v.instanceColor && (pt = v.instanceColor));
      const ft = {};
      ft.attribute = pt, pt && pt.data && (ft.data = pt.data), V[G] = ft, F++;
    }
    s.attributes = V, s.attributesNum = F, s.index = B;
  }
  function x() {
    const v = s.newAttributes;
    for (let w = 0, z = v.length; w < z; w++) v[w] = 0;
  }
  function p(v) {
    m(v, 0);
  }
  function m(v, w) {
    const z = s.newAttributes, B = s.enabledAttributes, V = s.attributeDivisors;
    z[v] = 1, B[v] === 0 && (n.enableVertexAttribArray(v), B[v] = 1), V[v] !== w && (n.vertexAttribDivisor(v, w), V[v] = w);
  }
  function E() {
    const v = s.newAttributes, w = s.enabledAttributes;
    for (let z = 0, B = w.length; z < B; z++) w[z] !== v[z] && (n.disableVertexAttribArray(z), w[z] = 0);
  }
  function y(v, w, z, B, V, $, F) {
    F === true ? n.vertexAttribIPointer(v, w, z, V, $) : n.vertexAttribPointer(v, w, z, B, V, $);
  }
  function M(v, w, z, B) {
    x();
    const V = B.attributes, $ = z.getAttributes(), F = w.defaultAttributeValues;
    for (const tt in $) {
      const G = $[tt];
      if (G.location >= 0) {
        let ht = V[tt];
        if (ht === void 0 && (tt === "instanceMatrix" && v.instanceMatrix && (ht = v.instanceMatrix), tt === "instanceColor" && v.instanceColor && (ht = v.instanceColor)), ht !== void 0) {
          const pt = ht.normalized, ft = ht.itemSize, zt = t.get(ht);
          if (zt === void 0) continue;
          const qt = zt.buffer, W = zt.type, et = zt.bytesPerElement, bt = W === n.INT || W === n.UNSIGNED_INT || ht.gpuType === Ul;
          if (ht.isInterleavedBufferAttribute) {
            const ct = ht.data, Pt = ct.stride, At = ht.offset;
            if (ct.isInstancedInterleavedBuffer) {
              for (let Ut = 0; Ut < G.locationSize; Ut++) m(G.location + Ut, ct.meshPerAttribute);
              v.isInstancedMesh !== true && B._maxInstanceCount === void 0 && (B._maxInstanceCount = ct.meshPerAttribute * ct.count);
            } else for (let Ut = 0; Ut < G.locationSize; Ut++) p(G.location + Ut);
            n.bindBuffer(n.ARRAY_BUFFER, qt);
            for (let Ut = 0; Ut < G.locationSize; Ut++) y(G.location + Ut, ft / G.locationSize, W, pt, Pt * et, (At + ft / G.locationSize * Ut) * et, bt);
          } else {
            if (ht.isInstancedBufferAttribute) {
              for (let ct = 0; ct < G.locationSize; ct++) m(G.location + ct, ht.meshPerAttribute);
              v.isInstancedMesh !== true && B._maxInstanceCount === void 0 && (B._maxInstanceCount = ht.meshPerAttribute * ht.count);
            } else for (let ct = 0; ct < G.locationSize; ct++) p(G.location + ct);
            n.bindBuffer(n.ARRAY_BUFFER, qt);
            for (let ct = 0; ct < G.locationSize; ct++) y(G.location + ct, ft / G.locationSize, W, pt, ft * et, ft / G.locationSize * ct * et, bt);
          }
        } else if (F !== void 0) {
          const pt = F[tt];
          if (pt !== void 0) switch (pt.length) {
            case 2:
              n.vertexAttrib2fv(G.location, pt);
              break;
            case 3:
              n.vertexAttrib3fv(G.location, pt);
              break;
            case 4:
              n.vertexAttrib4fv(G.location, pt);
              break;
            default:
              n.vertexAttrib1fv(G.location, pt);
          }
        }
      }
    }
    E();
  }
  function U() {
    I();
    for (const v in i) {
      const w = i[v];
      for (const z in w) {
        const B = w[z];
        for (const V in B) h(B[V].object), delete B[V];
        delete w[z];
      }
      delete i[v];
    }
  }
  function A(v) {
    if (i[v.id] === void 0) return;
    const w = i[v.id];
    for (const z in w) {
      const B = w[z];
      for (const V in B) h(B[V].object), delete B[V];
      delete w[z];
    }
    delete i[v.id];
  }
  function T(v) {
    for (const w in i) {
      const z = i[w];
      if (z[v.id] === void 0) continue;
      const B = z[v.id];
      for (const V in B) h(B[V].object), delete B[V];
      delete z[v.id];
    }
  }
  function I() {
    Z(), o = true, s !== r && (s = r, c(s.object));
  }
  function Z() {
    r.geometry = null, r.program = null, r.wireframe = false;
  }
  return { setup: a, reset: I, resetDefaultState: Z, dispose: U, releaseStatesOfGeometry: A, releaseStatesOfProgram: T, initAttributes: x, enableAttribute: p, disableUnusedAttributes: E };
}
function qv(n, t, e) {
  let i;
  function r(c) {
    i = c;
  }
  function s(c, h) {
    n.drawArrays(i, c, h), e.update(h, i, 1);
  }
  function o(c, h, u) {
    u !== 0 && (n.drawArraysInstanced(i, c, h, u), e.update(h, i, u));
  }
  function a(c, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, c, 0, h, 0, u);
    let f = 0;
    for (let _ = 0; _ < u; _++) f += h[_];
    e.update(f, i, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null) for (let _ = 0; _ < c.length; _++) o(c[_], h[_], d[_]);
    else {
      f.multiDrawArraysInstancedWEBGL(i, c, 0, h, 0, d, 0, u);
      let _ = 0;
      for (let x = 0; x < u; x++) _ += h[x];
      for (let x = 0; x < d.length; x++) e.update(_, i, d[x]);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l;
}
function jv(n, t, e, i) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const T = t.get("EXT_texture_filter_anisotropic");
      r = n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function o(T) {
    return !(T !== on && i.convert(T) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function a(T) {
    const I = T === $r && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(T !== Rn && i.convert(T) !== n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE) && T !== Cn && !I);
  }
  function l(T) {
    if (T === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0) return "highp";
      T = "mediump";
    }
    return T === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = e.logarithmicDepthBuffer === true, d = e.reverseDepthBuffer === true && t.has("EXT_clip_control");
  if (d === true) {
    const T = t.get("EXT_clip_control");
    T.clipControlEXT(T.LOWER_LEFT_EXT, T.ZERO_TO_ONE_EXT);
  }
  const f = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), _ = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = n.getParameter(n.MAX_TEXTURE_SIZE), p = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), m = n.getParameter(n.MAX_VERTEX_ATTRIBS), E = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), y = n.getParameter(n.MAX_VARYING_VECTORS), M = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), U = _ > 0, A = n.getParameter(n.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: f, maxVertexTextures: _, maxTextureSize: x, maxCubemapSize: p, maxAttributes: m, maxVertexUniforms: E, maxVaryings: y, maxFragmentUniforms: M, vertexTextures: U, maxSamples: A };
}
function Yv(n) {
  const t = this;
  let e = null, i = 0, r = false, s = false;
  const o = new Xn(), a = new Ft(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const f = u.length !== 0 || d || i !== 0 || r;
    return r = d, i = u.length, f;
  }, this.beginShadows = function() {
    s = true, h(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(u, d) {
    e = h(u, d, 0);
  }, this.setState = function(u, d, f) {
    const _ = u.clippingPlanes, x = u.clipIntersection, p = u.clipShadows, m = n.get(u);
    if (!r || _ === null || _.length === 0 || s && !p) s ? h(null) : c();
    else {
      const E = s ? 0 : i, y = E * 4;
      let M = m.clippingState || null;
      l.value = M, M = h(_, d, y, f);
      for (let U = 0; U !== y; ++U) M[U] = e[U];
      m.clippingState = M, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += E;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0;
  }
  function h(u, d, f, _) {
    const x = u !== null ? u.length : 0;
    let p = null;
    if (x !== 0) {
      if (p = l.value, _ !== true || p === null) {
        const m = f + x * 4, E = d.matrixWorldInverse;
        a.getNormalMatrix(E), (p === null || p.length < m) && (p = new Float32Array(m));
        for (let y = 0, M = f; y !== x; ++y, M += 4) o.copy(u[y]).applyMatrix4(E, a), o.normal.toArray(p, M), p[M + 3] = o.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return t.numPlanes = x, t.numIntersection = 0, p;
  }
}
function Kv(n) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(o, a) {
    return a === za ? o.mapping = ar : a === Ha && (o.mapping = lr), o;
  }
  function i(o) {
    if (o && o.isTexture) {
      const a = o.mapping;
      if (a === za || a === Ha) if (t.has(o)) {
        const l = t.get(o).texture;
        return e(l, o.mapping);
      } else {
        const l = o.image;
        if (l && l.height > 0) {
          const c = new om(l.height);
          return c.fromEquirectangularTexture(n, o), t.set(o, c), o.addEventListener("dispose", r), e(c.texture, o.mapping);
        } else return null;
      }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const l = t.get(a);
    l !== void 0 && (t.delete(a), l.dispose());
  }
  function s() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: i, dispose: s };
}
class Zu extends Yu {
  constructor(t = -1, e = 1, i = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, i, r, s, o) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = i - t, o = i + t, a = r + e, l = r - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const $i = 4, nh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], pi = 20, aa = new Zu(), ih = new Bt();
let la = null, ca = 0, ha = 0, ua = false;
const ui = (1 + Math.sqrt(5)) / 2, Hi = 1 / ui, rh = [new P(-ui, Hi, 0), new P(ui, Hi, 0), new P(-Hi, 0, ui), new P(Hi, 0, ui), new P(0, ui, -Hi), new P(0, ui, Hi), new P(-1, 1, -1), new P(1, 1, -1), new P(-1, 1, 1), new P(1, 1, 1)];
class sh {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, i = 0.1, r = 100) {
    la = this._renderer.getRenderTarget(), ca = this._renderer.getActiveCubeFace(), ha = this._renderer.getActiveMipmapLevel(), ua = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = true, this._sceneToCubeUV(t, i, r, s), e > 0 && this._blur(s, 0, 0, e), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = lh(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ah(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(t) {
    this._lodMax = Math.floor(Math.log2(t)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let t = 0; t < this._lodPlanes.length; t++) this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    this._renderer.setRenderTarget(la, ca, ha), this._renderer.xr.enabled = ua, t.scissorTest = false, Is(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === ar || t.mapping === lr ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), la = this._renderer.getRenderTarget(), ca = this._renderer.getActiveCubeFace(), ha = this._renderer.getActiveMipmapLevel(), ua = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const i = e || this._allocateTargets();
    return this._textureToCubeUV(t, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, i = { magFilter: rn, minFilter: rn, generateMipmaps: false, type: $r, format: on, colorSpace: ni, depthBuffer: false }, r = oh(t, e, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = oh(t, e, i);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = $v(s)), this._blurMaterial = Zv(s, t, e);
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new un(this._lodPlanes[0], t);
    this._renderer.compile(e, aa);
  }
  _sceneToCubeUV(t, e, i, r) {
    const a = new nn(90, 1, e, i), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(ih), h.toneMapping = $n, h.autoClear = false;
    const f = new Wl({ name: "PMREM.Background", side: Be, depthWrite: false, depthTest: false }), _ = new un(new ts(), f);
    let x = false;
    const p = t.background;
    p ? p.isColor && (f.color.copy(p), t.background = null, x = true) : (f.color.copy(ih), x = true);
    for (let m = 0; m < 6; m++) {
      const E = m % 3;
      E === 0 ? (a.up.set(0, l[m], 0), a.lookAt(c[m], 0, 0)) : E === 1 ? (a.up.set(0, 0, l[m]), a.lookAt(0, c[m], 0)) : (a.up.set(0, l[m], 0), a.lookAt(0, 0, c[m]));
      const y = this._cubeSize;
      Is(r, E * y, m > 2 ? y : 0, y, y), h.setRenderTarget(r), x && h.render(_, a), h.render(t, a);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = d, h.autoClear = u, t.background = p;
  }
  _textureToCubeUV(t, e) {
    const i = this._renderer, r = t.mapping === ar || t.mapping === lr;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = lh()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ah());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new un(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = t;
    const l = this._cubeSize;
    Is(e, 0, 0, 3 * l, 2 * l), i.setRenderTarget(e), i.render(o, aa);
  }
  _applyPMREM(t) {
    const e = this._renderer, i = e.autoClear;
    e.autoClear = false;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const o = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), a = rh[(r - s - 1) % rh.length];
      this._blur(t, s - 1, s, o, a);
    }
    e.autoClear = i;
  }
  _blur(t, e, i, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(t, o, e, i, r, "latitudinal", s), this._halfBlur(o, t, i, i, r, "longitudinal", s);
  }
  _halfBlur(t, e, i, r, s, o, a) {
    const l = this._renderer, c = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new un(this._lodPlanes[r], c), d = c.uniforms, f = this._sizeLods[i] - 1, _ = isFinite(s) ? Math.PI / (2 * f) : 2 * Math.PI / (2 * pi - 1), x = s / _, p = isFinite(s) ? 1 + Math.floor(h * x) : pi;
    p > pi && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${pi}`);
    const m = [];
    let E = 0;
    for (let T = 0; T < pi; ++T) {
      const I = T / x, Z = Math.exp(-I * I / 2);
      m.push(Z), T === 0 ? E += Z : T < p && (E += 2 * Z);
    }
    for (let T = 0; T < m.length; T++) m[T] = m[T] / E;
    d.envMap.value = t.texture, d.samples.value = p, d.weights.value = m, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: y } = this;
    d.dTheta.value = _, d.mipInt.value = y - i;
    const M = this._sizeLods[r], U = 3 * M * (r > y - $i ? r - y + $i : 0), A = 4 * (this._cubeSize - M);
    Is(e, U, A, 3 * M, 2 * M), l.setRenderTarget(e), l.render(u, aa);
  }
}
function $v(n) {
  const t = [], e = [], i = [];
  let r = n;
  const s = n - $i + 1 + nh.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    e.push(a);
    let l = 1 / a;
    o > n - $i ? l = nh[o - n + $i - 1] : o === 0 && (l = 0), i.push(l);
    const c = 1 / (a - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], f = 6, _ = 6, x = 3, p = 2, m = 1, E = new Float32Array(x * _ * f), y = new Float32Array(p * _ * f), M = new Float32Array(m * _ * f);
    for (let A = 0; A < f; A++) {
      const T = A % 3 * 2 / 3 - 1, I = A > 2 ? 0 : -1, Z = [T, I, 0, T + 2 / 3, I, 0, T + 2 / 3, I + 1, 0, T, I, 0, T + 2 / 3, I + 1, 0, T, I + 1, 0];
      E.set(Z, x * _ * A), y.set(d, p * _ * A);
      const v = [A, A, A, A, A, A];
      M.set(v, m * _ * A);
    }
    const U = new Se();
    U.setAttribute("position", new an(E, x)), U.setAttribute("uv", new an(y, p)), U.setAttribute("faceIndex", new an(M, m)), t.push(U), r > $i && r--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: i };
}
function oh(n, t, e) {
  const i = new xi(n, t, e);
  return i.texture.mapping = Eo, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
}
function Is(n, t, e, i, r) {
  n.viewport.set(t, e, i, r), n.scissor.set(t, e, i, r);
}
function Zv(n, t, e) {
  const i = new Float32Array(pi), r = new P(0, 1, 0);
  return new ti({ name: "SphericalGaussianBlur", defines: { n: pi, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${n}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ql(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Kn, depthTest: false, depthWrite: false });
}
function ah() {
  return new ti({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ql(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Kn, depthTest: false, depthWrite: false });
}
function lh() {
  return new ti({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ql(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Kn, depthTest: false, depthWrite: false });
}
function ql() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Jv(n) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function i(a) {
    if (a && a.isTexture) {
      const l = a.mapping, c = l === za || l === Ha, h = l === ar || l === lr;
      if (c || h) {
        let u = t.get(a);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (a.isRenderTargetTexture && a.pmremVersion !== d) return e === null && (e = new sh(n)), u = c ? e.fromEquirectangular(a, u) : e.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const f = a.image;
          return c && f && f.height > 0 || h && f && r(f) ? (e === null && (e = new sh(n)), u = c ? e.fromEquirectangular(a) : e.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, t.set(a, u), a.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return a;
  }
  function r(a) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) a[h] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function o() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: i, dispose: o };
}
function Qv(n) {
  const t = {};
  function e(i) {
    if (t[i] !== void 0) return t[i];
    let r;
    switch (i) {
      case "WEBGL_depth_texture":
        r = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = n.getExtension(i);
    }
    return t[i] = r, r;
  }
  return { has: function(i) {
    return e(i) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(i) {
    const r = e(i);
    return r === null && ro("THREE.WebGLRenderer: " + i + " extension not supported."), r;
  } };
}
function tg(n, t, e, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && t.remove(d.index);
    for (const _ in d.attributes) t.remove(d.attributes[_]);
    for (const _ in d.morphAttributes) {
      const x = d.morphAttributes[_];
      for (let p = 0, m = x.length; p < m; p++) t.remove(x[p]);
    }
    d.removeEventListener("dispose", o), delete r[d.id];
    const f = s.get(d);
    f && (t.remove(f), s.delete(d)), i.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, e.memory.geometries--;
  }
  function a(u, d) {
    return r[d.id] === true || (d.addEventListener("dispose", o), r[d.id] = true, e.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const _ in d) t.update(d[_], n.ARRAY_BUFFER);
    const f = u.morphAttributes;
    for (const _ in f) {
      const x = f[_];
      for (let p = 0, m = x.length; p < m; p++) t.update(x[p], n.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const d = [], f = u.index, _ = u.attributes.position;
    let x = 0;
    if (f !== null) {
      const E = f.array;
      x = f.version;
      for (let y = 0, M = E.length; y < M; y += 3) {
        const U = E[y + 0], A = E[y + 1], T = E[y + 2];
        d.push(U, A, A, T, T, U);
      }
    } else if (_ !== void 0) {
      const E = _.array;
      x = _.version;
      for (let y = 0, M = E.length / 3 - 1; y < M; y += 3) {
        const U = y + 0, A = y + 1, T = y + 2;
        d.push(U, A, A, T, T, U);
      }
    } else return;
    const p = new (zu(d) ? qu : Xu)(d, 1);
    p.version = x;
    const m = s.get(u);
    m && t.remove(m), s.set(u, p);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && c(u);
    } else c(u);
    return s.get(u);
  }
  return { get: a, update: l, getWireframeAttribute: h };
}
function eg(n, t, e) {
  let i;
  function r(d) {
    i = d;
  }
  let s, o;
  function a(d) {
    s = d.type, o = d.bytesPerElement;
  }
  function l(d, f) {
    n.drawElements(i, f, s, d * o), e.update(f, i, 1);
  }
  function c(d, f, _) {
    _ !== 0 && (n.drawElementsInstanced(i, f, s, d * o, _), e.update(f, i, _));
  }
  function h(d, f, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, f, 0, s, d, 0, _);
    let p = 0;
    for (let m = 0; m < _; m++) p += f[m];
    e.update(p, i, 1);
  }
  function u(d, f, _, x) {
    if (_ === 0) return;
    const p = t.get("WEBGL_multi_draw");
    if (p === null) for (let m = 0; m < d.length; m++) c(d[m] / o, f[m], x[m]);
    else {
      p.multiDrawElementsInstancedWEBGL(i, f, 0, s, d, 0, x, 0, _);
      let m = 0;
      for (let E = 0; E < _; E++) m += f[E];
      for (let E = 0; E < x.length; E++) e.update(m, i, x[E]);
    }
  }
  this.setMode = r, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function ng(n) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, o, a) {
    switch (e.calls++, o) {
      case n.TRIANGLES:
        e.triangles += a * (s / 3);
        break;
      case n.LINES:
        e.lines += a * (s / 2);
        break;
      case n.LINE_STRIP:
        e.lines += a * (s - 1);
        break;
      case n.LINE_LOOP:
        e.lines += a * s;
        break;
      case n.POINTS:
        e.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: r, update: i };
}
function ig(n, t, e) {
  const i = /* @__PURE__ */ new WeakMap(), r = new pe();
  function s(o, a, l) {
    const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = i.get(a);
    if (d === void 0 || d.count !== u) {
      let Z = function() {
        T.dispose(), i.delete(a), a.removeEventListener("dispose", Z);
      };
      d !== void 0 && d.texture.dispose();
      const f = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, x = a.morphAttributes.color !== void 0, p = a.morphAttributes.position || [], m = a.morphAttributes.normal || [], E = a.morphAttributes.color || [];
      let y = 0;
      f === true && (y = 1), _ === true && (y = 2), x === true && (y = 3);
      let M = a.attributes.position.count * y, U = 1;
      M > t.maxTextureSize && (U = Math.ceil(M / t.maxTextureSize), M = t.maxTextureSize);
      const A = new Float32Array(M * U * 4 * u), T = new Gu(A, M, U, u);
      T.type = Cn, T.needsUpdate = true;
      const I = y * 4;
      for (let v = 0; v < u; v++) {
        const w = p[v], z = m[v], B = E[v], V = M * U * 4 * v;
        for (let $ = 0; $ < w.count; $++) {
          const F = $ * I;
          f === true && (r.fromBufferAttribute(w, $), A[V + F + 0] = r.x, A[V + F + 1] = r.y, A[V + F + 2] = r.z, A[V + F + 3] = 0), _ === true && (r.fromBufferAttribute(z, $), A[V + F + 4] = r.x, A[V + F + 5] = r.y, A[V + F + 6] = r.z, A[V + F + 7] = 0), x === true && (r.fromBufferAttribute(B, $), A[V + F + 8] = r.x, A[V + F + 9] = r.y, A[V + F + 10] = r.z, A[V + F + 11] = B.itemSize === 4 ? r.w : 1);
        }
      }
      d = { count: u, texture: T, size: new J(M, U) }, i.set(a, d), a.addEventListener("dispose", Z);
    }
    if (o.isInstancedMesh === true && o.morphTexture !== null) l.getUniforms().setValue(n, "morphTexture", o.morphTexture, e);
    else {
      let f = 0;
      for (let x = 0; x < c.length; x++) f += c[x];
      const _ = a.morphTargetsRelative ? 1 : 1 - f;
      l.getUniforms().setValue(n, "morphTargetBaseInfluence", _), l.getUniforms().setValue(n, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(n, "morphTargetsTexture", d.texture, e), l.getUniforms().setValue(n, "morphTargetsTextureSize", d.size);
  }
  return { update: s };
}
function rg(n, t, e, i) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = i.render.frame, h = l.geometry, u = t.get(l, h);
    if (r.get(u) !== c && (t.update(u), r.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === false && l.addEventListener("dispose", a), r.get(l) !== c && (e.update(l.instanceMatrix, n.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, n.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return u;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
class Ju extends Pe {
  constructor(t, e, i, r, s, o, a, l, c, h = er) {
    if (h !== er && h !== hr) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    i === void 0 && h === er && (i = gi), i === void 0 && h === hr && (i = cr), super(null, r, s, o, a, l, h, i, c), this.isDepthTexture = true, this.image = { width: t, height: e }, this.magFilter = a !== void 0 ? a : $e, this.minFilter = l !== void 0 ? l : $e, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const Qu = new Pe(), ch = new Ju(1, 1), td = new Gu(), ed = new Wf(), nd = new Ku(), hh = [], uh = [], dh = new Float32Array(16), ph = new Float32Array(9), fh = new Float32Array(4);
function pr(n, t, e) {
  const i = n[0];
  if (i <= 0 || i > 0) return n;
  const r = t * e;
  let s = hh[r];
  if (s === void 0 && (s = new Float32Array(r), hh[r] = s), t !== 0) {
    i.toArray(s, 0);
    for (let o = 1, a = 0; o !== t; ++o) a += e, n[o].toArray(s, a);
  }
  return s;
}
function we(n, t) {
  if (n.length !== t.length) return false;
  for (let e = 0, i = n.length; e < i; e++) if (n[e] !== t[e]) return false;
  return true;
}
function Me(n, t) {
  for (let e = 0, i = t.length; e < i; e++) n[e] = t[e];
}
function Ao(n, t) {
  let e = uh[t];
  e === void 0 && (e = new Int32Array(t), uh[t] = e);
  for (let i = 0; i !== t; ++i) e[i] = n.allocateTextureUnit();
  return e;
}
function sg(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1f(this.addr, t), e[0] = t);
}
function og(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (n.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (we(e, t)) return;
    n.uniform2fv(this.addr, t), Me(e, t);
  }
}
function ag(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (n.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (we(e, t)) return;
    n.uniform3fv(this.addr, t), Me(e, t);
  }
}
function lg(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (we(e, t)) return;
    n.uniform4fv(this.addr, t), Me(e, t);
  }
}
function cg(n, t) {
  const e = this.cache, i = t.elements;
  if (i === void 0) {
    if (we(e, t)) return;
    n.uniformMatrix2fv(this.addr, false, t), Me(e, t);
  } else {
    if (we(e, i)) return;
    fh.set(i), n.uniformMatrix2fv(this.addr, false, fh), Me(e, i);
  }
}
function hg(n, t) {
  const e = this.cache, i = t.elements;
  if (i === void 0) {
    if (we(e, t)) return;
    n.uniformMatrix3fv(this.addr, false, t), Me(e, t);
  } else {
    if (we(e, i)) return;
    ph.set(i), n.uniformMatrix3fv(this.addr, false, ph), Me(e, i);
  }
}
function ug(n, t) {
  const e = this.cache, i = t.elements;
  if (i === void 0) {
    if (we(e, t)) return;
    n.uniformMatrix4fv(this.addr, false, t), Me(e, t);
  } else {
    if (we(e, i)) return;
    dh.set(i), n.uniformMatrix4fv(this.addr, false, dh), Me(e, i);
  }
}
function dg(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1i(this.addr, t), e[0] = t);
}
function pg(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (n.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (we(e, t)) return;
    n.uniform2iv(this.addr, t), Me(e, t);
  }
}
function fg(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (we(e, t)) return;
    n.uniform3iv(this.addr, t), Me(e, t);
  }
}
function mg(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (we(e, t)) return;
    n.uniform4iv(this.addr, t), Me(e, t);
  }
}
function _g(n, t) {
  const e = this.cache;
  e[0] !== t && (n.uniform1ui(this.addr, t), e[0] = t);
}
function vg(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (n.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (we(e, t)) return;
    n.uniform2uiv(this.addr, t), Me(e, t);
  }
}
function gg(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (n.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (we(e, t)) return;
    n.uniform3uiv(this.addr, t), Me(e, t);
  }
}
function xg(n, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (n.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (we(e, t)) return;
    n.uniform4uiv(this.addr, t), Me(e, t);
  }
}
function bg(n, t, e) {
  const i = this.cache, r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r);
  let s;
  this.type === n.SAMPLER_2D_SHADOW ? (ch.compareFunction = Vu, s = ch) : s = Qu, e.setTexture2D(t || s, r);
}
function yg(n, t, e) {
  const i = this.cache, r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), e.setTexture3D(t || ed, r);
}
function wg(n, t, e) {
  const i = this.cache, r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), e.setTextureCube(t || nd, r);
}
function Mg(n, t, e) {
  const i = this.cache, r = e.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), e.setTexture2DArray(t || td, r);
}
function Sg(n) {
  switch (n) {
    case 5126:
      return sg;
    case 35664:
      return og;
    case 35665:
      return ag;
    case 35666:
      return lg;
    case 35674:
      return cg;
    case 35675:
      return hg;
    case 35676:
      return ug;
    case 5124:
    case 35670:
      return dg;
    case 35667:
    case 35671:
      return pg;
    case 35668:
    case 35672:
      return fg;
    case 35669:
    case 35673:
      return mg;
    case 5125:
      return _g;
    case 36294:
      return vg;
    case 36295:
      return gg;
    case 36296:
      return xg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return bg;
    case 35679:
    case 36299:
    case 36307:
      return yg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return wg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Mg;
  }
}
function Eg(n, t) {
  n.uniform1fv(this.addr, t);
}
function Cg(n, t) {
  const e = pr(t, this.size, 2);
  n.uniform2fv(this.addr, e);
}
function Tg(n, t) {
  const e = pr(t, this.size, 3);
  n.uniform3fv(this.addr, e);
}
function Ag(n, t) {
  const e = pr(t, this.size, 4);
  n.uniform4fv(this.addr, e);
}
function Pg(n, t) {
  const e = pr(t, this.size, 4);
  n.uniformMatrix2fv(this.addr, false, e);
}
function Rg(n, t) {
  const e = pr(t, this.size, 9);
  n.uniformMatrix3fv(this.addr, false, e);
}
function Lg(n, t) {
  const e = pr(t, this.size, 16);
  n.uniformMatrix4fv(this.addr, false, e);
}
function Dg(n, t) {
  n.uniform1iv(this.addr, t);
}
function Ig(n, t) {
  n.uniform2iv(this.addr, t);
}
function Ug(n, t) {
  n.uniform3iv(this.addr, t);
}
function Ng(n, t) {
  n.uniform4iv(this.addr, t);
}
function Og(n, t) {
  n.uniform1uiv(this.addr, t);
}
function Fg(n, t) {
  n.uniform2uiv(this.addr, t);
}
function Bg(n, t) {
  n.uniform3uiv(this.addr, t);
}
function kg(n, t) {
  n.uniform4uiv(this.addr, t);
}
function Vg(n, t, e) {
  const i = this.cache, r = t.length, s = Ao(e, r);
  we(i, s) || (n.uniform1iv(this.addr, s), Me(i, s));
  for (let o = 0; o !== r; ++o) e.setTexture2D(t[o] || Qu, s[o]);
}
function zg(n, t, e) {
  const i = this.cache, r = t.length, s = Ao(e, r);
  we(i, s) || (n.uniform1iv(this.addr, s), Me(i, s));
  for (let o = 0; o !== r; ++o) e.setTexture3D(t[o] || ed, s[o]);
}
function Hg(n, t, e) {
  const i = this.cache, r = t.length, s = Ao(e, r);
  we(i, s) || (n.uniform1iv(this.addr, s), Me(i, s));
  for (let o = 0; o !== r; ++o) e.setTextureCube(t[o] || nd, s[o]);
}
function Gg(n, t, e) {
  const i = this.cache, r = t.length, s = Ao(e, r);
  we(i, s) || (n.uniform1iv(this.addr, s), Me(i, s));
  for (let o = 0; o !== r; ++o) e.setTexture2DArray(t[o] || td, s[o]);
}
function Wg(n) {
  switch (n) {
    case 5126:
      return Eg;
    case 35664:
      return Cg;
    case 35665:
      return Tg;
    case 35666:
      return Ag;
    case 35674:
      return Pg;
    case 35675:
      return Rg;
    case 35676:
      return Lg;
    case 5124:
    case 35670:
      return Dg;
    case 35667:
    case 35671:
      return Ig;
    case 35668:
    case 35672:
      return Ug;
    case 35669:
    case 35673:
      return Ng;
    case 5125:
      return Og;
    case 36294:
      return Fg;
    case 36295:
      return Bg;
    case 36296:
      return kg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Vg;
    case 35679:
    case 36299:
    case 36307:
      return zg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Hg;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Gg;
  }
}
class Xg {
  constructor(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.type = e.type, this.setValue = Sg(e.type);
  }
}
class qg {
  constructor(t, e, i) {
    this.id = t, this.addr = i, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Wg(e.type);
  }
}
class jg {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, i) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(t, e[a.id], i);
    }
  }
}
const da = /(\w+)(\])?(\[|\.)?/g;
function mh(n, t) {
  n.seq.push(t), n.map[t.id] = t;
}
function Yg(n, t, e) {
  const i = n.name, r = i.length;
  for (da.lastIndex = 0; ; ) {
    const s = da.exec(i), o = da.lastIndex;
    let a = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) {
      mh(e, c === void 0 ? new Xg(a, n, t) : new qg(a, n, t));
      break;
    } else {
      let u = e.map[a];
      u === void 0 && (u = new jg(a), mh(e, u)), e = u;
    }
  }
}
class so {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = t.getActiveUniform(e, r), o = t.getUniformLocation(e, s.name);
      Yg(s, o, this);
    }
  }
  setValue(t, e, i, r) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, i, r);
  }
  setOptional(t, e, i) {
    const r = e[i];
    r !== void 0 && this.setValue(t, i, r);
  }
  static upload(t, e, i, r) {
    for (let s = 0, o = e.length; s !== o; ++s) {
      const a = e[s], l = i[a.id];
      l.needsUpdate !== false && a.setValue(t, l.value, r);
    }
  }
  static seqWithValue(t, e) {
    const i = [];
    for (let r = 0, s = t.length; r !== s; ++r) {
      const o = t[r];
      o.id in e && i.push(o);
    }
    return i;
  }
}
function _h(n, t, e) {
  const i = n.createShader(t);
  return n.shaderSource(i, e), n.compileShader(i), i;
}
const Kg = 37297;
let $g = 0;
function Zg(n, t) {
  const e = n.split(`
`), i = [], r = Math.max(t - 6, 0), s = Math.min(t + 6, e.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    i.push(`${a === t ? ">" : " "} ${a}: ${e[o]}`);
  }
  return i.join(`
`);
}
function Jg(n) {
  const t = Zt.getPrimaries(Zt.workingColorSpace), e = Zt.getPrimaries(n);
  let i;
  switch (t === e ? i = "" : t === fo && e === po ? i = "LinearDisplayP3ToLinearSRGB" : t === po && e === fo && (i = "LinearSRGBToLinearDisplayP3"), n) {
    case ni:
    case Co:
      return [i, "LinearTransferOETF"];
    case cn:
    case zl:
      return [i, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", n), [i, "LinearTransferOETF"];
  }
}
function vh(n, t, e) {
  const i = n.getShaderParameter(t, n.COMPILE_STATUS), r = n.getShaderInfoLog(t).trim();
  if (i && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return e.toUpperCase() + `

` + r + `

` + Zg(n.getShaderSource(t), o);
  } else return r;
}
function Qg(n, t) {
  const e = Jg(t);
  return `vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function t0(n, t) {
  let e;
  switch (t) {
    case Qp:
      e = "Linear";
      break;
    case tf:
      e = "Reinhard";
      break;
    case ef:
      e = "Cineon";
      break;
    case nf:
      e = "ACESFilmic";
      break;
    case sf:
      e = "AgX";
      break;
    case of:
      e = "Neutral";
      break;
    case rf:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const Us = new P();
function e0() {
  Zt.getLuminanceCoefficients(Us);
  const n = Us.x.toFixed(4), t = Us.y.toFixed(4), e = Us.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${n}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function n0(n) {
  return [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Dr).join(`
`);
}
function i0(n) {
  const t = [];
  for (const e in n) {
    const i = n[e];
    i !== false && t.push("#define " + e + " " + i);
  }
  return t.join(`
`);
}
function r0(n, t) {
  const e = {}, i = n.getProgramParameter(t, n.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(t, r), o = s.name;
    let a = 1;
    s.type === n.FLOAT_MAT2 && (a = 2), s.type === n.FLOAT_MAT3 && (a = 3), s.type === n.FLOAT_MAT4 && (a = 4), e[o] = { type: s.type, location: n.getAttribLocation(t, o), locationSize: a };
  }
  return e;
}
function Dr(n) {
  return n !== "";
}
function gh(n, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function xh(n, t) {
  return n.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const s0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function gl(n) {
  return n.replace(s0, a0);
}
const o0 = /* @__PURE__ */ new Map();
function a0(n, t) {
  let e = Ot[t];
  if (e === void 0) {
    const i = o0.get(t);
    if (i !== void 0) e = Ot[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, i);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return gl(e);
}
const l0 = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function bh(n) {
  return n.replace(l0, c0);
}
function c0(n, t, e, i) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(e); s++) r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function yh(n) {
  let t = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;
  return n.precision === "highp" ? t += `
#define HIGH_PRECISION` : n.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function h0(n) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === Au ? t = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Dp ? t = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === Sn && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function u0(n) {
  let t = "ENVMAP_TYPE_CUBE";
  if (n.envMap) switch (n.envMapMode) {
    case ar:
    case lr:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case Eo:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function d0(n) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (n.envMap) switch (n.envMapMode) {
    case lr:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function p0(n) {
  let t = "ENVMAP_BLENDING_NONE";
  if (n.envMap) switch (n.combine) {
    case Il:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case Zp:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case Jp:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function f0(n) {
  const t = n.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, i = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: i, maxMip: e };
}
function m0(n, t, e, i) {
  const r = n.getContext(), s = e.defines;
  let o = e.vertexShader, a = e.fragmentShader;
  const l = h0(e), c = u0(e), h = d0(e), u = p0(e), d = f0(e), f = n0(e), _ = i0(s), x = r.createProgram();
  let p, m, E = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(Dr).join(`
`), p.length > 0 && (p += `
`), m = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(Dr).join(`
`), m.length > 0 && (m += `
`)) : (p = [yh(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Dr).join(`
`), m = [yh(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== $n ? "#define TONE_MAPPING" : "", e.toneMapping !== $n ? Ot.tonemapping_pars_fragment : "", e.toneMapping !== $n ? t0("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Ot.colorspace_pars_fragment, Qg("linearToOutputTexel", e.outputColorSpace), e0(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Dr).join(`
`)), o = gl(o), o = gh(o, e), o = xh(o, e), a = gl(a), a = gh(a, e), a = xh(a, e), o = bh(o), a = bh(a), e.isRawShaderMaterial !== true && (E = `#version 300 es
`, p = [f, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, m = ["#define varying in", e.glslVersion === Fc ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === Fc ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + m);
  const y = E + p + o, M = E + m + a, U = _h(r, r.VERTEX_SHADER, y), A = _h(r, r.FRAGMENT_SHADER, M);
  r.attachShader(x, U), r.attachShader(x, A), e.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === true && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function T(w) {
    if (n.debug.checkShaderErrors) {
      const z = r.getProgramInfoLog(x).trim(), B = r.getShaderInfoLog(U).trim(), V = r.getShaderInfoLog(A).trim();
      let $ = true, F = true;
      if (r.getProgramParameter(x, r.LINK_STATUS) === false) if ($ = false, typeof n.debug.onShaderError == "function") n.debug.onShaderError(r, x, U, A);
      else {
        const tt = vh(r, U, "vertex"), G = vh(r, A, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + w.name + `
Material Type: ` + w.type + `

Program Info Log: ` + z + `
` + tt + `
` + G);
      }
      else z !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", z) : (B === "" || V === "") && (F = false);
      F && (w.diagnostics = { runnable: $, programLog: z, vertexShader: { log: B, prefix: p }, fragmentShader: { log: V, prefix: m } });
    }
    r.deleteShader(U), r.deleteShader(A), I = new so(r, x), Z = r0(r, x);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && T(this), I;
  };
  let Z;
  this.getAttributes = function() {
    return Z === void 0 && T(this), Z;
  };
  let v = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return v === false && (v = r.getProgramParameter(x, Kg)), v;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = $g++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = U, this.fragmentShader = A, this;
}
let _0 = 0;
class v0 {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, i = t.fragmentShader, r = this._getShaderStage(e), s = this._getShaderStage(i), o = this._getShaderCacheForMaterial(t);
    return o.has(r) === false && (o.add(r), r.usedTimes++), o.has(s) === false && (o.add(s), s.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const i of e) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(t), this;
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let i = e.get(t);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), e.set(t, i)), i;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let i = e.get(t);
    return i === void 0 && (i = new g0(t), e.set(t, i)), i;
  }
}
class g0 {
  constructor(t) {
    this.id = _0++, this.code = t, this.usedTimes = 0;
  }
}
function x0(n, t, e, i, r, s, o) {
  const a = new Gl(), l = new v0(), c = /* @__PURE__ */ new Set(), h = [], u = r.logarithmicDepthBuffer, d = r.reverseDepthBuffer, f = r.vertexTextures;
  let _ = r.precision;
  const x = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function p(v) {
    return c.add(v), v === 0 ? "uv" : `uv${v}`;
  }
  function m(v, w, z, B, V) {
    const $ = B.fog, F = V.geometry, tt = v.isMeshStandardMaterial ? B.environment : null, G = (v.isMeshStandardMaterial ? e : t).get(v.envMap || tt), ht = G && G.mapping === Eo ? G.image.height : null, pt = x[v.type];
    v.precision !== null && (_ = r.getMaxPrecision(v.precision), _ !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", _, "instead."));
    const ft = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, zt = ft !== void 0 ? ft.length : 0;
    let qt = 0;
    F.morphAttributes.position !== void 0 && (qt = 1), F.morphAttributes.normal !== void 0 && (qt = 2), F.morphAttributes.color !== void 0 && (qt = 3);
    let W, et, bt, ct;
    if (pt) {
      const Ne = hn[pt];
      W = Ne.vertexShader, et = Ne.fragmentShader;
    } else W = v.vertexShader, et = v.fragmentShader, l.update(v), bt = l.getVertexShaderID(v), ct = l.getFragmentShaderID(v);
    const Pt = n.getRenderTarget(), At = V.isInstancedMesh === true, Ut = V.isBatchedMesh === true, Vt = !!v.map, j = !!v.matcap, C = !!G, st = !!v.aoMap, rt = !!v.lightMap, Q = !!v.bumpMap, ot = !!v.normalMap, Ct = !!v.displacementMap, mt = !!v.emissiveMap, S = !!v.metalnessMap, g = !!v.roughnessMap, N = v.anisotropy > 0, X = v.clearcoat > 0, Y = v.dispersion > 0, q = v.iridescence > 0, Mt = v.sheen > 0, at = v.transmission > 0, gt = N && !!v.anisotropyMap, Ht = X && !!v.clearcoatMap, nt = X && !!v.clearcoatNormalMap, xt = X && !!v.clearcoatRoughnessMap, Dt = q && !!v.iridescenceMap, It = q && !!v.iridescenceThicknessMap, yt = Mt && !!v.sheenColorMap, Gt = Mt && !!v.sheenRoughnessMap, Nt = !!v.specularMap, re = !!v.specularColorMap, R = !!v.specularIntensityMap, _t = at && !!v.transmissionMap, H = at && !!v.thicknessMap, K = !!v.gradientMap, ut = !!v.alphaMap, vt = v.alphaTest > 0, Wt = !!v.alphaHash, me = !!v.extensions;
    let Ue = $n;
    v.toneMapped && (Pt === null || Pt.isXRRenderTarget === true) && (Ue = n.toneMapping);
    const Yt = { shaderID: pt, shaderType: v.type, shaderName: v.name, vertexShader: W, fragmentShader: et, defines: v.defines, customVertexShaderID: bt, customFragmentShaderID: ct, isRawShaderMaterial: v.isRawShaderMaterial === true, glslVersion: v.glslVersion, precision: _, batching: Ut, batchingColor: Ut && V._colorsTexture !== null, instancing: At, instancingColor: At && V.instanceColor !== null, instancingMorph: At && V.morphTexture !== null, supportsVertexTextures: f, outputColorSpace: Pt === null ? n.outputColorSpace : Pt.isXRRenderTarget === true ? Pt.texture.colorSpace : ni, alphaToCoverage: !!v.alphaToCoverage, map: Vt, matcap: j, envMap: C, envMapMode: C && G.mapping, envMapCubeUVHeight: ht, aoMap: st, lightMap: rt, bumpMap: Q, normalMap: ot, displacementMap: f && Ct, emissiveMap: mt, normalMapObjectSpace: ot && v.normalMapType === hf, normalMapTangentSpace: ot && v.normalMapType === Vl, metalnessMap: S, roughnessMap: g, anisotropy: N, anisotropyMap: gt, clearcoat: X, clearcoatMap: Ht, clearcoatNormalMap: nt, clearcoatRoughnessMap: xt, dispersion: Y, iridescence: q, iridescenceMap: Dt, iridescenceThicknessMap: It, sheen: Mt, sheenColorMap: yt, sheenRoughnessMap: Gt, specularMap: Nt, specularColorMap: re, specularIntensityMap: R, transmission: at, transmissionMap: _t, thicknessMap: H, gradientMap: K, opaque: v.transparent === false && v.blending === tr && v.alphaToCoverage === false, alphaMap: ut, alphaTest: vt, alphaHash: Wt, combine: v.combine, mapUv: Vt && p(v.map.channel), aoMapUv: st && p(v.aoMap.channel), lightMapUv: rt && p(v.lightMap.channel), bumpMapUv: Q && p(v.bumpMap.channel), normalMapUv: ot && p(v.normalMap.channel), displacementMapUv: Ct && p(v.displacementMap.channel), emissiveMapUv: mt && p(v.emissiveMap.channel), metalnessMapUv: S && p(v.metalnessMap.channel), roughnessMapUv: g && p(v.roughnessMap.channel), anisotropyMapUv: gt && p(v.anisotropyMap.channel), clearcoatMapUv: Ht && p(v.clearcoatMap.channel), clearcoatNormalMapUv: nt && p(v.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: xt && p(v.clearcoatRoughnessMap.channel), iridescenceMapUv: Dt && p(v.iridescenceMap.channel), iridescenceThicknessMapUv: It && p(v.iridescenceThicknessMap.channel), sheenColorMapUv: yt && p(v.sheenColorMap.channel), sheenRoughnessMapUv: Gt && p(v.sheenRoughnessMap.channel), specularMapUv: Nt && p(v.specularMap.channel), specularColorMapUv: re && p(v.specularColorMap.channel), specularIntensityMapUv: R && p(v.specularIntensityMap.channel), transmissionMapUv: _t && p(v.transmissionMap.channel), thicknessMapUv: H && p(v.thicknessMap.channel), alphaMapUv: ut && p(v.alphaMap.channel), vertexTangents: !!F.attributes.tangent && (ot || N), vertexColors: v.vertexColors, vertexAlphas: v.vertexColors === true && !!F.attributes.color && F.attributes.color.itemSize === 4, pointsUvs: V.isPoints === true && !!F.attributes.uv && (Vt || ut), fog: !!$, useFog: v.fog === true, fogExp2: !!$ && $.isFogExp2, flatShading: v.flatShading === true, sizeAttenuation: v.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: d, skinning: V.isSkinnedMesh === true, morphTargets: F.morphAttributes.position !== void 0, morphNormals: F.morphAttributes.normal !== void 0, morphColors: F.morphAttributes.color !== void 0, morphTargetsCount: zt, morphTextureStride: qt, numDirLights: w.directional.length, numPointLights: w.point.length, numSpotLights: w.spot.length, numSpotLightMaps: w.spotLightMap.length, numRectAreaLights: w.rectArea.length, numHemiLights: w.hemi.length, numDirLightShadows: w.directionalShadowMap.length, numPointLightShadows: w.pointShadowMap.length, numSpotLightShadows: w.spotShadowMap.length, numSpotLightShadowsWithMaps: w.numSpotLightShadowsWithMaps, numLightProbes: w.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: v.dithering, shadowMapEnabled: n.shadowMap.enabled && z.length > 0, shadowMapType: n.shadowMap.type, toneMapping: Ue, decodeVideoTexture: Vt && v.map.isVideoTexture === true && Zt.getTransfer(v.map.colorSpace) === ae, premultipliedAlpha: v.premultipliedAlpha, doubleSided: v.side === En, flipSided: v.side === Be, useDepthPacking: v.depthPacking >= 0, depthPacking: v.depthPacking || 0, index0AttributeName: v.index0AttributeName, extensionClipCullDistance: me && v.extensions.clipCullDistance === true && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (me && v.extensions.multiDraw === true || Ut) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: v.customProgramCacheKey() };
    return Yt.vertexUv1s = c.has(1), Yt.vertexUv2s = c.has(2), Yt.vertexUv3s = c.has(3), c.clear(), Yt;
  }
  function E(v) {
    const w = [];
    if (v.shaderID ? w.push(v.shaderID) : (w.push(v.customVertexShaderID), w.push(v.customFragmentShaderID)), v.defines !== void 0) for (const z in v.defines) w.push(z), w.push(v.defines[z]);
    return v.isRawShaderMaterial === false && (y(w, v), M(w, v), w.push(n.outputColorSpace)), w.push(v.customProgramCacheKey), w.join();
  }
  function y(v, w) {
    v.push(w.precision), v.push(w.outputColorSpace), v.push(w.envMapMode), v.push(w.envMapCubeUVHeight), v.push(w.mapUv), v.push(w.alphaMapUv), v.push(w.lightMapUv), v.push(w.aoMapUv), v.push(w.bumpMapUv), v.push(w.normalMapUv), v.push(w.displacementMapUv), v.push(w.emissiveMapUv), v.push(w.metalnessMapUv), v.push(w.roughnessMapUv), v.push(w.anisotropyMapUv), v.push(w.clearcoatMapUv), v.push(w.clearcoatNormalMapUv), v.push(w.clearcoatRoughnessMapUv), v.push(w.iridescenceMapUv), v.push(w.iridescenceThicknessMapUv), v.push(w.sheenColorMapUv), v.push(w.sheenRoughnessMapUv), v.push(w.specularMapUv), v.push(w.specularColorMapUv), v.push(w.specularIntensityMapUv), v.push(w.transmissionMapUv), v.push(w.thicknessMapUv), v.push(w.combine), v.push(w.fogExp2), v.push(w.sizeAttenuation), v.push(w.morphTargetsCount), v.push(w.morphAttributeCount), v.push(w.numDirLights), v.push(w.numPointLights), v.push(w.numSpotLights), v.push(w.numSpotLightMaps), v.push(w.numHemiLights), v.push(w.numRectAreaLights), v.push(w.numDirLightShadows), v.push(w.numPointLightShadows), v.push(w.numSpotLightShadows), v.push(w.numSpotLightShadowsWithMaps), v.push(w.numLightProbes), v.push(w.shadowMapType), v.push(w.toneMapping), v.push(w.numClippingPlanes), v.push(w.numClipIntersection), v.push(w.depthPacking);
  }
  function M(v, w) {
    a.disableAll(), w.supportsVertexTextures && a.enable(0), w.instancing && a.enable(1), w.instancingColor && a.enable(2), w.instancingMorph && a.enable(3), w.matcap && a.enable(4), w.envMap && a.enable(5), w.normalMapObjectSpace && a.enable(6), w.normalMapTangentSpace && a.enable(7), w.clearcoat && a.enable(8), w.iridescence && a.enable(9), w.alphaTest && a.enable(10), w.vertexColors && a.enable(11), w.vertexAlphas && a.enable(12), w.vertexUv1s && a.enable(13), w.vertexUv2s && a.enable(14), w.vertexUv3s && a.enable(15), w.vertexTangents && a.enable(16), w.anisotropy && a.enable(17), w.alphaHash && a.enable(18), w.batching && a.enable(19), w.dispersion && a.enable(20), w.batchingColor && a.enable(21), v.push(a.mask), a.disableAll(), w.fog && a.enable(0), w.useFog && a.enable(1), w.flatShading && a.enable(2), w.logarithmicDepthBuffer && a.enable(3), w.reverseDepthBuffer && a.enable(4), w.skinning && a.enable(5), w.morphTargets && a.enable(6), w.morphNormals && a.enable(7), w.morphColors && a.enable(8), w.premultipliedAlpha && a.enable(9), w.shadowMapEnabled && a.enable(10), w.doubleSided && a.enable(11), w.flipSided && a.enable(12), w.useDepthPacking && a.enable(13), w.dithering && a.enable(14), w.transmission && a.enable(15), w.sheen && a.enable(16), w.opaque && a.enable(17), w.pointsUvs && a.enable(18), w.decodeVideoTexture && a.enable(19), w.alphaToCoverage && a.enable(20), v.push(a.mask);
  }
  function U(v) {
    const w = x[v.type];
    let z;
    if (w) {
      const B = hn[w];
      z = nm.clone(B.uniforms);
    } else z = v.uniforms;
    return z;
  }
  function A(v, w) {
    let z;
    for (let B = 0, V = h.length; B < V; B++) {
      const $ = h[B];
      if ($.cacheKey === w) {
        z = $, ++z.usedTimes;
        break;
      }
    }
    return z === void 0 && (z = new m0(n, w, v, s), h.push(z)), z;
  }
  function T(v) {
    if (--v.usedTimes === 0) {
      const w = h.indexOf(v);
      h[w] = h[h.length - 1], h.pop(), v.destroy();
    }
  }
  function I(v) {
    l.remove(v);
  }
  function Z() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: E, getUniforms: U, acquireProgram: A, releaseProgram: T, releaseShaderCache: I, programs: h, dispose: Z };
}
function b0() {
  let n = /* @__PURE__ */ new WeakMap();
  function t(o) {
    return n.has(o);
  }
  function e(o) {
    let a = n.get(o);
    return a === void 0 && (a = {}, n.set(o, a)), a;
  }
  function i(o) {
    n.delete(o);
  }
  function r(o, a, l) {
    n.get(o)[a] = l;
  }
  function s() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: i, update: r, dispose: s };
}
function y0(n, t) {
  return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.material.id !== t.material.id ? n.material.id - t.material.id : n.z !== t.z ? n.z - t.z : n.id - t.id;
}
function wh(n, t) {
  return n.groupOrder !== t.groupOrder ? n.groupOrder - t.groupOrder : n.renderOrder !== t.renderOrder ? n.renderOrder - t.renderOrder : n.z !== t.z ? t.z - n.z : n.id - t.id;
}
function Mh() {
  const n = [];
  let t = 0;
  const e = [], i = [], r = [];
  function s() {
    t = 0, e.length = 0, i.length = 0, r.length = 0;
  }
  function o(u, d, f, _, x, p) {
    let m = n[t];
    return m === void 0 ? (m = { id: u.id, object: u, geometry: d, material: f, groupOrder: _, renderOrder: u.renderOrder, z: x, group: p }, n[t] = m) : (m.id = u.id, m.object = u, m.geometry = d, m.material = f, m.groupOrder = _, m.renderOrder = u.renderOrder, m.z = x, m.group = p), t++, m;
  }
  function a(u, d, f, _, x, p) {
    const m = o(u, d, f, _, x, p);
    f.transmission > 0 ? i.push(m) : f.transparent === true ? r.push(m) : e.push(m);
  }
  function l(u, d, f, _, x, p) {
    const m = o(u, d, f, _, x, p);
    f.transmission > 0 ? i.unshift(m) : f.transparent === true ? r.unshift(m) : e.unshift(m);
  }
  function c(u, d) {
    e.length > 1 && e.sort(u || y0), i.length > 1 && i.sort(d || wh), r.length > 1 && r.sort(d || wh);
  }
  function h() {
    for (let u = t, d = n.length; u < d; u++) {
      const f = n[u];
      if (f.id === null) break;
      f.id = null, f.object = null, f.geometry = null, f.material = null, f.group = null;
    }
  }
  return { opaque: e, transmissive: i, transparent: r, init: s, push: a, unshift: l, finish: h, sort: c };
}
function w0() {
  let n = /* @__PURE__ */ new WeakMap();
  function t(i, r) {
    const s = n.get(i);
    let o;
    return s === void 0 ? (o = new Mh(), n.set(i, [o])) : r >= s.length ? (o = new Mh(), s.push(o)) : o = s[r], o;
  }
  function e() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function M0() {
  const n = {};
  return { get: function(t) {
    if (n[t.id] !== void 0) return n[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new P(), color: new Bt() };
        break;
      case "SpotLight":
        e = { position: new P(), direction: new P(), color: new Bt(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new P(), color: new Bt(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new P(), skyColor: new Bt(), groundColor: new Bt() };
        break;
      case "RectAreaLight":
        e = { color: new Bt(), position: new P(), halfWidth: new P(), halfHeight: new P() };
        break;
    }
    return n[t.id] = e, e;
  } };
}
function S0() {
  const n = {};
  return { get: function(t) {
    if (n[t.id] !== void 0) return n[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new J() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new J() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new J(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return n[t.id] = e, e;
  } };
}
let E0 = 0;
function C0(n, t) {
  return (t.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (n.map ? 1 : 0);
}
function T0(n) {
  const t = new M0(), e = S0(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) i.probe.push(new P());
  const r = new P(), s = new ie(), o = new ie();
  function a(c) {
    let h = 0, u = 0, d = 0;
    for (let Z = 0; Z < 9; Z++) i.probe[Z].set(0, 0, 0);
    let f = 0, _ = 0, x = 0, p = 0, m = 0, E = 0, y = 0, M = 0, U = 0, A = 0, T = 0;
    c.sort(C0);
    for (let Z = 0, v = c.length; Z < v; Z++) {
      const w = c[Z], z = w.color, B = w.intensity, V = w.distance, $ = w.shadow && w.shadow.map ? w.shadow.map.texture : null;
      if (w.isAmbientLight) h += z.r * B, u += z.g * B, d += z.b * B;
      else if (w.isLightProbe) {
        for (let F = 0; F < 9; F++) i.probe[F].addScaledVector(w.sh.coefficients[F], B);
        T++;
      } else if (w.isDirectionalLight) {
        const F = t.get(w);
        if (F.color.copy(w.color).multiplyScalar(w.intensity), w.castShadow) {
          const tt = w.shadow, G = e.get(w);
          G.shadowIntensity = tt.intensity, G.shadowBias = tt.bias, G.shadowNormalBias = tt.normalBias, G.shadowRadius = tt.radius, G.shadowMapSize = tt.mapSize, i.directionalShadow[f] = G, i.directionalShadowMap[f] = $, i.directionalShadowMatrix[f] = w.shadow.matrix, E++;
        }
        i.directional[f] = F, f++;
      } else if (w.isSpotLight) {
        const F = t.get(w);
        F.position.setFromMatrixPosition(w.matrixWorld), F.color.copy(z).multiplyScalar(B), F.distance = V, F.coneCos = Math.cos(w.angle), F.penumbraCos = Math.cos(w.angle * (1 - w.penumbra)), F.decay = w.decay, i.spot[x] = F;
        const tt = w.shadow;
        if (w.map && (i.spotLightMap[U] = w.map, U++, tt.updateMatrices(w), w.castShadow && A++), i.spotLightMatrix[x] = tt.matrix, w.castShadow) {
          const G = e.get(w);
          G.shadowIntensity = tt.intensity, G.shadowBias = tt.bias, G.shadowNormalBias = tt.normalBias, G.shadowRadius = tt.radius, G.shadowMapSize = tt.mapSize, i.spotShadow[x] = G, i.spotShadowMap[x] = $, M++;
        }
        x++;
      } else if (w.isRectAreaLight) {
        const F = t.get(w);
        F.color.copy(z).multiplyScalar(B), F.halfWidth.set(w.width * 0.5, 0, 0), F.halfHeight.set(0, w.height * 0.5, 0), i.rectArea[p] = F, p++;
      } else if (w.isPointLight) {
        const F = t.get(w);
        if (F.color.copy(w.color).multiplyScalar(w.intensity), F.distance = w.distance, F.decay = w.decay, w.castShadow) {
          const tt = w.shadow, G = e.get(w);
          G.shadowIntensity = tt.intensity, G.shadowBias = tt.bias, G.shadowNormalBias = tt.normalBias, G.shadowRadius = tt.radius, G.shadowMapSize = tt.mapSize, G.shadowCameraNear = tt.camera.near, G.shadowCameraFar = tt.camera.far, i.pointShadow[_] = G, i.pointShadowMap[_] = $, i.pointShadowMatrix[_] = w.shadow.matrix, y++;
        }
        i.point[_] = F, _++;
      } else if (w.isHemisphereLight) {
        const F = t.get(w);
        F.skyColor.copy(w.color).multiplyScalar(B), F.groundColor.copy(w.groundColor).multiplyScalar(B), i.hemi[m] = F, m++;
      }
    }
    p > 0 && (n.has("OES_texture_float_linear") === true ? (i.rectAreaLTC1 = lt.LTC_FLOAT_1, i.rectAreaLTC2 = lt.LTC_FLOAT_2) : (i.rectAreaLTC1 = lt.LTC_HALF_1, i.rectAreaLTC2 = lt.LTC_HALF_2)), i.ambient[0] = h, i.ambient[1] = u, i.ambient[2] = d;
    const I = i.hash;
    (I.directionalLength !== f || I.pointLength !== _ || I.spotLength !== x || I.rectAreaLength !== p || I.hemiLength !== m || I.numDirectionalShadows !== E || I.numPointShadows !== y || I.numSpotShadows !== M || I.numSpotMaps !== U || I.numLightProbes !== T) && (i.directional.length = f, i.spot.length = x, i.rectArea.length = p, i.point.length = _, i.hemi.length = m, i.directionalShadow.length = E, i.directionalShadowMap.length = E, i.pointShadow.length = y, i.pointShadowMap.length = y, i.spotShadow.length = M, i.spotShadowMap.length = M, i.directionalShadowMatrix.length = E, i.pointShadowMatrix.length = y, i.spotLightMatrix.length = M + U - A, i.spotLightMap.length = U, i.numSpotLightShadowsWithMaps = A, i.numLightProbes = T, I.directionalLength = f, I.pointLength = _, I.spotLength = x, I.rectAreaLength = p, I.hemiLength = m, I.numDirectionalShadows = E, I.numPointShadows = y, I.numSpotShadows = M, I.numSpotMaps = U, I.numLightProbes = T, i.version = E0++);
  }
  function l(c, h) {
    let u = 0, d = 0, f = 0, _ = 0, x = 0;
    const p = h.matrixWorldInverse;
    for (let m = 0, E = c.length; m < E; m++) {
      const y = c[m];
      if (y.isDirectionalLight) {
        const M = i.directional[u];
        M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), u++;
      } else if (y.isSpotLight) {
        const M = i.spot[f];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), M.direction.setFromMatrixPosition(y.matrixWorld), r.setFromMatrixPosition(y.target.matrixWorld), M.direction.sub(r), M.direction.transformDirection(p), f++;
      } else if (y.isRectAreaLight) {
        const M = i.rectArea[_];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), o.identity(), s.copy(y.matrixWorld), s.premultiply(p), o.extractRotation(s), M.halfWidth.set(y.width * 0.5, 0, 0), M.halfHeight.set(0, y.height * 0.5, 0), M.halfWidth.applyMatrix4(o), M.halfHeight.applyMatrix4(o), _++;
      } else if (y.isPointLight) {
        const M = i.point[d];
        M.position.setFromMatrixPosition(y.matrixWorld), M.position.applyMatrix4(p), d++;
      } else if (y.isHemisphereLight) {
        const M = i.hemi[x];
        M.direction.setFromMatrixPosition(y.matrixWorld), M.direction.transformDirection(p), x++;
      }
    }
  }
  return { setup: a, setupView: l, state: i };
}
function Sh(n) {
  const t = new T0(n), e = [], i = [];
  function r(h) {
    c.camera = h, e.length = 0, i.length = 0;
  }
  function s(h) {
    e.push(h);
  }
  function o(h) {
    i.push(h);
  }
  function a() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = { lightsArray: e, shadowsArray: i, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: r, state: c, setupLights: a, setupLightsView: l, pushLight: s, pushShadow: o };
}
function A0(n) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(r, s = 0) {
    const o = t.get(r);
    let a;
    return o === void 0 ? (a = new Sh(n), t.set(r, [a])) : s >= o.length ? (a = new Sh(n), o.push(a)) : a = o[s], a;
  }
  function i() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: i };
}
class P0 extends In {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = lf, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class R0 extends In {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const L0 = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, D0 = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function I0(n, t, e) {
  let i = new Xl();
  const r = new J(), s = new J(), o = new pe(), a = new P0({ depthPacking: cf }), l = new R0(), c = {}, h = e.maxTextureSize, u = { [Qn]: Be, [Be]: Qn, [En]: En }, d = new ti({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new J() }, radius: { value: 4 } }, vertexShader: L0, fragmentShader: D0 }), f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const _ = new Se();
  _.setAttribute("position", new an(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const x = new un(_, d), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Au;
  let m = this.type;
  this.render = function(A, T, I) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || A.length === 0) return;
    const Z = n.getRenderTarget(), v = n.getActiveCubeFace(), w = n.getActiveMipmapLevel(), z = n.state;
    z.setBlending(Kn), z.buffers.color.setClear(1, 1, 1, 1), z.buffers.depth.setTest(true), z.setScissorTest(false);
    const B = m !== Sn && this.type === Sn, V = m === Sn && this.type !== Sn;
    for (let $ = 0, F = A.length; $ < F; $++) {
      const tt = A[$], G = tt.shadow;
      if (G === void 0) {
        console.warn("THREE.WebGLShadowMap:", tt, "has no shadow.");
        continue;
      }
      if (G.autoUpdate === false && G.needsUpdate === false) continue;
      r.copy(G.mapSize);
      const ht = G.getFrameExtents();
      if (r.multiply(ht), s.copy(G.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / ht.x), r.x = s.x * ht.x, G.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / ht.y), r.y = s.y * ht.y, G.mapSize.y = s.y)), G.map === null || B === true || V === true) {
        const ft = this.type !== Sn ? { minFilter: $e, magFilter: $e } : {};
        G.map !== null && G.map.dispose(), G.map = new xi(r.x, r.y, ft), G.map.texture.name = tt.name + ".shadowMap", G.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(G.map), n.clear();
      const pt = G.getViewportCount();
      for (let ft = 0; ft < pt; ft++) {
        const zt = G.getViewport(ft);
        o.set(s.x * zt.x, s.y * zt.y, s.x * zt.z, s.y * zt.w), z.viewport(o), G.updateMatrices(tt, ft), i = G.getFrustum(), M(T, I, G.camera, tt, this.type);
      }
      G.isPointLightShadow !== true && this.type === Sn && E(G, I), G.needsUpdate = false;
    }
    m = this.type, p.needsUpdate = false, n.setRenderTarget(Z, v, w);
  };
  function E(A, T) {
    const I = t.update(x);
    d.defines.VSM_SAMPLES !== A.blurSamples && (d.defines.VSM_SAMPLES = A.blurSamples, f.defines.VSM_SAMPLES = A.blurSamples, d.needsUpdate = true, f.needsUpdate = true), A.mapPass === null && (A.mapPass = new xi(r.x, r.y)), d.uniforms.shadow_pass.value = A.map.texture, d.uniforms.resolution.value = A.mapSize, d.uniforms.radius.value = A.radius, n.setRenderTarget(A.mapPass), n.clear(), n.renderBufferDirect(T, null, I, d, x, null), f.uniforms.shadow_pass.value = A.mapPass.texture, f.uniforms.resolution.value = A.mapSize, f.uniforms.radius.value = A.radius, n.setRenderTarget(A.map), n.clear(), n.renderBufferDirect(T, null, I, f, x, null);
  }
  function y(A, T, I, Z) {
    let v = null;
    const w = I.isPointLight === true ? A.customDistanceMaterial : A.customDepthMaterial;
    if (w !== void 0) v = w;
    else if (v = I.isPointLight === true ? l : a, n.localClippingEnabled && T.clipShadows === true && Array.isArray(T.clippingPlanes) && T.clippingPlanes.length !== 0 || T.displacementMap && T.displacementScale !== 0 || T.alphaMap && T.alphaTest > 0 || T.map && T.alphaTest > 0) {
      const z = v.uuid, B = T.uuid;
      let V = c[z];
      V === void 0 && (V = {}, c[z] = V);
      let $ = V[B];
      $ === void 0 && ($ = v.clone(), V[B] = $, T.addEventListener("dispose", U)), v = $;
    }
    if (v.visible = T.visible, v.wireframe = T.wireframe, Z === Sn ? v.side = T.shadowSide !== null ? T.shadowSide : T.side : v.side = T.shadowSide !== null ? T.shadowSide : u[T.side], v.alphaMap = T.alphaMap, v.alphaTest = T.alphaTest, v.map = T.map, v.clipShadows = T.clipShadows, v.clippingPlanes = T.clippingPlanes, v.clipIntersection = T.clipIntersection, v.displacementMap = T.displacementMap, v.displacementScale = T.displacementScale, v.displacementBias = T.displacementBias, v.wireframeLinewidth = T.wireframeLinewidth, v.linewidth = T.linewidth, I.isPointLight === true && v.isMeshDistanceMaterial === true) {
      const z = n.properties.get(v);
      z.light = I;
    }
    return v;
  }
  function M(A, T, I, Z, v) {
    if (A.visible === false) return;
    if (A.layers.test(T.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && v === Sn) && (!A.frustumCulled || i.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, A.matrixWorld);
      const B = t.update(A), V = A.material;
      if (Array.isArray(V)) {
        const $ = B.groups;
        for (let F = 0, tt = $.length; F < tt; F++) {
          const G = $[F], ht = V[G.materialIndex];
          if (ht && ht.visible) {
            const pt = y(A, ht, Z, v);
            A.onBeforeShadow(n, A, T, I, B, pt, G), n.renderBufferDirect(I, null, B, pt, A, G), A.onAfterShadow(n, A, T, I, B, pt, G);
          }
        }
      } else if (V.visible) {
        const $ = y(A, V, Z, v);
        A.onBeforeShadow(n, A, T, I, B, $, null), n.renderBufferDirect(I, null, B, $, A, null), A.onAfterShadow(n, A, T, I, B, $, null);
      }
    }
    const z = A.children;
    for (let B = 0, V = z.length; B < V; B++) M(z[B], T, I, Z, v);
  }
  function U(A) {
    A.target.removeEventListener("dispose", U);
    for (const I in c) {
      const Z = c[I], v = A.target.uuid;
      v in Z && (Z[v].dispose(), delete Z[v]);
    }
  }
}
const U0 = { [Ua]: Na, [Oa]: ka, [Fa]: Va, [or]: Ba, [Na]: Ua, [ka]: Oa, [Va]: Fa, [Ba]: or };
function N0(n) {
  function t() {
    let R = false;
    const _t = new pe();
    let H = null;
    const K = new pe(0, 0, 0, 0);
    return { setMask: function(ut) {
      H !== ut && !R && (n.colorMask(ut, ut, ut, ut), H = ut);
    }, setLocked: function(ut) {
      R = ut;
    }, setClear: function(ut, vt, Wt, me, Ue) {
      Ue === true && (ut *= me, vt *= me, Wt *= me), _t.set(ut, vt, Wt, me), K.equals(_t) === false && (n.clearColor(ut, vt, Wt, me), K.copy(_t));
    }, reset: function() {
      R = false, H = null, K.set(-1, 0, 0, 0);
    } };
  }
  function e() {
    let R = false, _t = false, H = null, K = null, ut = null;
    return { setReversed: function(vt) {
      _t = vt;
    }, setTest: function(vt) {
      vt ? bt(n.DEPTH_TEST) : ct(n.DEPTH_TEST);
    }, setMask: function(vt) {
      H !== vt && !R && (n.depthMask(vt), H = vt);
    }, setFunc: function(vt) {
      if (_t && (vt = U0[vt]), K !== vt) {
        switch (vt) {
          case Ua:
            n.depthFunc(n.NEVER);
            break;
          case Na:
            n.depthFunc(n.ALWAYS);
            break;
          case Oa:
            n.depthFunc(n.LESS);
            break;
          case or:
            n.depthFunc(n.LEQUAL);
            break;
          case Fa:
            n.depthFunc(n.EQUAL);
            break;
          case Ba:
            n.depthFunc(n.GEQUAL);
            break;
          case ka:
            n.depthFunc(n.GREATER);
            break;
          case Va:
            n.depthFunc(n.NOTEQUAL);
            break;
          default:
            n.depthFunc(n.LEQUAL);
        }
        K = vt;
      }
    }, setLocked: function(vt) {
      R = vt;
    }, setClear: function(vt) {
      ut !== vt && (n.clearDepth(vt), ut = vt);
    }, reset: function() {
      R = false, H = null, K = null, ut = null;
    } };
  }
  function i() {
    let R = false, _t = null, H = null, K = null, ut = null, vt = null, Wt = null, me = null, Ue = null;
    return { setTest: function(Yt) {
      R || (Yt ? bt(n.STENCIL_TEST) : ct(n.STENCIL_TEST));
    }, setMask: function(Yt) {
      _t !== Yt && !R && (n.stencilMask(Yt), _t = Yt);
    }, setFunc: function(Yt, Ne, vn) {
      (H !== Yt || K !== Ne || ut !== vn) && (n.stencilFunc(Yt, Ne, vn), H = Yt, K = Ne, ut = vn);
    }, setOp: function(Yt, Ne, vn) {
      (vt !== Yt || Wt !== Ne || me !== vn) && (n.stencilOp(Yt, Ne, vn), vt = Yt, Wt = Ne, me = vn);
    }, setLocked: function(Yt) {
      R = Yt;
    }, setClear: function(Yt) {
      Ue !== Yt && (n.clearStencil(Yt), Ue = Yt);
    }, reset: function() {
      R = false, _t = null, H = null, K = null, ut = null, vt = null, Wt = null, me = null, Ue = null;
    } };
  }
  const r = new t(), s = new e(), o = new i(), a = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, _ = false, x = null, p = null, m = null, E = null, y = null, M = null, U = null, A = new Bt(0, 0, 0), T = 0, I = false, Z = null, v = null, w = null, z = null, B = null;
  const V = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let $ = false, F = 0;
  const tt = n.getParameter(n.VERSION);
  tt.indexOf("WebGL") !== -1 ? (F = parseFloat(/^WebGL (\d)/.exec(tt)[1]), $ = F >= 1) : tt.indexOf("OpenGL ES") !== -1 && (F = parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]), $ = F >= 2);
  let G = null, ht = {};
  const pt = n.getParameter(n.SCISSOR_BOX), ft = n.getParameter(n.VIEWPORT), zt = new pe().fromArray(pt), qt = new pe().fromArray(ft);
  function W(R, _t, H, K) {
    const ut = new Uint8Array(4), vt = n.createTexture();
    n.bindTexture(R, vt), n.texParameteri(R, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(R, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let Wt = 0; Wt < H; Wt++) R === n.TEXTURE_3D || R === n.TEXTURE_2D_ARRAY ? n.texImage3D(_t, 0, n.RGBA, 1, 1, K, 0, n.RGBA, n.UNSIGNED_BYTE, ut) : n.texImage2D(_t + Wt, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, ut);
    return vt;
  }
  const et = {};
  et[n.TEXTURE_2D] = W(n.TEXTURE_2D, n.TEXTURE_2D, 1), et[n.TEXTURE_CUBE_MAP] = W(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), et[n.TEXTURE_2D_ARRAY] = W(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), et[n.TEXTURE_3D] = W(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), s.setClear(1), o.setClear(0), bt(n.DEPTH_TEST), s.setFunc(or), rt(false), Q(Dc), bt(n.CULL_FACE), C(Kn);
  function bt(R) {
    c[R] !== true && (n.enable(R), c[R] = true);
  }
  function ct(R) {
    c[R] !== false && (n.disable(R), c[R] = false);
  }
  function Pt(R, _t) {
    return h[R] !== _t ? (n.bindFramebuffer(R, _t), h[R] = _t, R === n.DRAW_FRAMEBUFFER && (h[n.FRAMEBUFFER] = _t), R === n.FRAMEBUFFER && (h[n.DRAW_FRAMEBUFFER] = _t), true) : false;
  }
  function At(R, _t) {
    let H = d, K = false;
    if (R) {
      H = u.get(_t), H === void 0 && (H = [], u.set(_t, H));
      const ut = R.textures;
      if (H.length !== ut.length || H[0] !== n.COLOR_ATTACHMENT0) {
        for (let vt = 0, Wt = ut.length; vt < Wt; vt++) H[vt] = n.COLOR_ATTACHMENT0 + vt;
        H.length = ut.length, K = true;
      }
    } else H[0] !== n.BACK && (H[0] = n.BACK, K = true);
    K && n.drawBuffers(H);
  }
  function Ut(R) {
    return f !== R ? (n.useProgram(R), f = R, true) : false;
  }
  const Vt = { [di]: n.FUNC_ADD, [Up]: n.FUNC_SUBTRACT, [Np]: n.FUNC_REVERSE_SUBTRACT };
  Vt[Op] = n.MIN, Vt[Fp] = n.MAX;
  const j = { [Bp]: n.ZERO, [kp]: n.ONE, [Vp]: n.SRC_COLOR, [Da]: n.SRC_ALPHA, [qp]: n.SRC_ALPHA_SATURATE, [Wp]: n.DST_COLOR, [Hp]: n.DST_ALPHA, [zp]: n.ONE_MINUS_SRC_COLOR, [Ia]: n.ONE_MINUS_SRC_ALPHA, [Xp]: n.ONE_MINUS_DST_COLOR, [Gp]: n.ONE_MINUS_DST_ALPHA, [jp]: n.CONSTANT_COLOR, [Yp]: n.ONE_MINUS_CONSTANT_COLOR, [Kp]: n.CONSTANT_ALPHA, [$p]: n.ONE_MINUS_CONSTANT_ALPHA };
  function C(R, _t, H, K, ut, vt, Wt, me, Ue, Yt) {
    if (R === Kn) {
      _ === true && (ct(n.BLEND), _ = false);
      return;
    }
    if (_ === false && (bt(n.BLEND), _ = true), R !== Ip) {
      if (R !== x || Yt !== I) {
        if ((p !== di || y !== di) && (n.blendEquation(n.FUNC_ADD), p = di, y = di), Yt) switch (R) {
          case tr:
            n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Ic:
            n.blendFunc(n.ONE, n.ONE);
            break;
          case Uc:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Nc:
            n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", R);
            break;
        }
        else switch (R) {
          case tr:
            n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
            break;
          case Ic:
            n.blendFunc(n.SRC_ALPHA, n.ONE);
            break;
          case Uc:
            n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
            break;
          case Nc:
            n.blendFunc(n.ZERO, n.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", R);
            break;
        }
        m = null, E = null, M = null, U = null, A.set(0, 0, 0), T = 0, x = R, I = Yt;
      }
      return;
    }
    ut = ut || _t, vt = vt || H, Wt = Wt || K, (_t !== p || ut !== y) && (n.blendEquationSeparate(Vt[_t], Vt[ut]), p = _t, y = ut), (H !== m || K !== E || vt !== M || Wt !== U) && (n.blendFuncSeparate(j[H], j[K], j[vt], j[Wt]), m = H, E = K, M = vt, U = Wt), (me.equals(A) === false || Ue !== T) && (n.blendColor(me.r, me.g, me.b, Ue), A.copy(me), T = Ue), x = R, I = false;
  }
  function st(R, _t) {
    R.side === En ? ct(n.CULL_FACE) : bt(n.CULL_FACE);
    let H = R.side === Be;
    _t && (H = !H), rt(H), R.blending === tr && R.transparent === false ? C(Kn) : C(R.blending, R.blendEquation, R.blendSrc, R.blendDst, R.blendEquationAlpha, R.blendSrcAlpha, R.blendDstAlpha, R.blendColor, R.blendAlpha, R.premultipliedAlpha), s.setFunc(R.depthFunc), s.setTest(R.depthTest), s.setMask(R.depthWrite), r.setMask(R.colorWrite);
    const K = R.stencilWrite;
    o.setTest(K), K && (o.setMask(R.stencilWriteMask), o.setFunc(R.stencilFunc, R.stencilRef, R.stencilFuncMask), o.setOp(R.stencilFail, R.stencilZFail, R.stencilZPass)), Ct(R.polygonOffset, R.polygonOffsetFactor, R.polygonOffsetUnits), R.alphaToCoverage === true ? bt(n.SAMPLE_ALPHA_TO_COVERAGE) : ct(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function rt(R) {
    Z !== R && (R ? n.frontFace(n.CW) : n.frontFace(n.CCW), Z = R);
  }
  function Q(R) {
    R !== Rp ? (bt(n.CULL_FACE), R !== v && (R === Dc ? n.cullFace(n.BACK) : R === Lp ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : ct(n.CULL_FACE), v = R;
  }
  function ot(R) {
    R !== w && ($ && n.lineWidth(R), w = R);
  }
  function Ct(R, _t, H) {
    R ? (bt(n.POLYGON_OFFSET_FILL), (z !== _t || B !== H) && (n.polygonOffset(_t, H), z = _t, B = H)) : ct(n.POLYGON_OFFSET_FILL);
  }
  function mt(R) {
    R ? bt(n.SCISSOR_TEST) : ct(n.SCISSOR_TEST);
  }
  function S(R) {
    R === void 0 && (R = n.TEXTURE0 + V - 1), G !== R && (n.activeTexture(R), G = R);
  }
  function g(R, _t, H) {
    H === void 0 && (G === null ? H = n.TEXTURE0 + V - 1 : H = G);
    let K = ht[H];
    K === void 0 && (K = { type: void 0, texture: void 0 }, ht[H] = K), (K.type !== R || K.texture !== _t) && (G !== H && (n.activeTexture(H), G = H), n.bindTexture(R, _t || et[R]), K.type = R, K.texture = _t);
  }
  function N() {
    const R = ht[G];
    R !== void 0 && R.type !== void 0 && (n.bindTexture(R.type, null), R.type = void 0, R.texture = void 0);
  }
  function X() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Y() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function q() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Mt() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function at() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function gt() {
    try {
      n.compressedTexSubImage3D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Ht() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function nt() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function xt() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function Dt() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (R) {
      console.error("THREE.WebGLState:", R);
    }
  }
  function It(R) {
    zt.equals(R) === false && (n.scissor(R.x, R.y, R.z, R.w), zt.copy(R));
  }
  function yt(R) {
    qt.equals(R) === false && (n.viewport(R.x, R.y, R.z, R.w), qt.copy(R));
  }
  function Gt(R, _t) {
    let H = l.get(_t);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), l.set(_t, H));
    let K = H.get(R);
    K === void 0 && (K = n.getUniformBlockIndex(_t, R.name), H.set(R, K));
  }
  function Nt(R, _t) {
    const K = l.get(_t).get(R);
    a.get(_t) !== K && (n.uniformBlockBinding(_t, K, R.__bindingPointIndex), a.set(_t, K));
  }
  function re() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(true, true, true, true), n.clearColor(0, 0, 0, 0), n.depthMask(true), n.depthFunc(n.LESS), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), c = {}, G = null, ht = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), d = [], f = null, _ = false, x = null, p = null, m = null, E = null, y = null, M = null, U = null, A = new Bt(0, 0, 0), T = 0, I = false, Z = null, v = null, w = null, z = null, B = null, zt.set(0, 0, n.canvas.width, n.canvas.height), qt.set(0, 0, n.canvas.width, n.canvas.height), r.reset(), s.reset(), o.reset();
  }
  return { buffers: { color: r, depth: s, stencil: o }, enable: bt, disable: ct, bindFramebuffer: Pt, drawBuffers: At, useProgram: Ut, setBlending: C, setMaterial: st, setFlipSided: rt, setCullFace: Q, setLineWidth: ot, setPolygonOffset: Ct, setScissorTest: mt, activeTexture: S, bindTexture: g, unbindTexture: N, compressedTexImage2D: X, compressedTexImage3D: Y, texImage2D: xt, texImage3D: Dt, updateUBOMapping: Gt, uniformBlockBinding: Nt, texStorage2D: Ht, texStorage3D: nt, texSubImage2D: q, texSubImage3D: Mt, compressedTexSubImage2D: at, compressedTexSubImage3D: gt, scissor: It, viewport: yt, reset: re };
}
function Eh(n, t, e, i) {
  const r = O0(i);
  switch (e) {
    case Iu:
      return n * t;
    case Nu:
      return n * t;
    case Ou:
      return n * t * 2;
    case Fu:
      return n * t / r.components * r.byteLength;
    case Fl:
      return n * t / r.components * r.byteLength;
    case Bu:
      return n * t * 2 / r.components * r.byteLength;
    case Bl:
      return n * t * 2 / r.components * r.byteLength;
    case Uu:
      return n * t * 3 / r.components * r.byteLength;
    case on:
      return n * t * 4 / r.components * r.byteLength;
    case kl:
      return n * t * 4 / r.components * r.byteLength;
    case Qs:
    case to:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case eo:
    case no:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case qa:
    case Ya:
      return Math.max(n, 16) * Math.max(t, 8) / 4;
    case Xa:
    case ja:
      return Math.max(n, 8) * Math.max(t, 8) / 2;
    case Ka:
    case $a:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Za:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ja:
      return Math.floor((n + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Qa:
      return Math.floor((n + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case tl:
      return Math.floor((n + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case el:
      return Math.floor((n + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case nl:
      return Math.floor((n + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case il:
      return Math.floor((n + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case rl:
      return Math.floor((n + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case sl:
      return Math.floor((n + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case ol:
      return Math.floor((n + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case al:
      return Math.floor((n + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case ll:
      return Math.floor((n + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case cl:
      return Math.floor((n + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case hl:
      return Math.floor((n + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case ul:
      return Math.floor((n + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case io:
    case dl:
    case pl:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
    case ku:
    case fl:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 8;
    case ml:
    case _l:
      return Math.ceil(n / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function O0(n) {
  switch (n) {
    case Rn:
    case Ru:
      return { byteLength: 1, components: 1 };
    case Br:
    case Lu:
    case $r:
      return { byteLength: 2, components: 1 };
    case Nl:
    case Ol:
      return { byteLength: 2, components: 4 };
    case gi:
    case Ul:
    case Cn:
      return { byteLength: 4, components: 1 };
    case Du:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${n}.`);
}
function F0(n, t, e, i, r, s, o) {
  const a = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new J(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let f = false;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(S, g) {
    return f ? new OffscreenCanvas(S, g) : _o("canvas");
  }
  function x(S, g, N) {
    let X = 1;
    const Y = mt(S);
    if ((Y.width > N || Y.height > N) && (X = N / Math.max(Y.width, Y.height)), X < 1) if (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && S instanceof ImageBitmap || typeof VideoFrame < "u" && S instanceof VideoFrame) {
      const q = Math.floor(X * Y.width), Mt = Math.floor(X * Y.height);
      u === void 0 && (u = _(q, Mt));
      const at = g ? _(q, Mt) : u;
      return at.width = q, at.height = Mt, at.getContext("2d").drawImage(S, 0, 0, q, Mt), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Y.width + "x" + Y.height + ") to (" + q + "x" + Mt + ")."), at;
    } else return "data" in S && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Y.width + "x" + Y.height + ")."), S;
    return S;
  }
  function p(S) {
    return S.generateMipmaps && S.minFilter !== $e && S.minFilter !== rn;
  }
  function m(S) {
    n.generateMipmap(S);
  }
  function E(S, g, N, X, Y = false) {
    if (S !== null) {
      if (n[S] !== void 0) return n[S];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + S + "'");
    }
    let q = g;
    if (g === n.RED && (N === n.FLOAT && (q = n.R32F), N === n.HALF_FLOAT && (q = n.R16F), N === n.UNSIGNED_BYTE && (q = n.R8)), g === n.RED_INTEGER && (N === n.UNSIGNED_BYTE && (q = n.R8UI), N === n.UNSIGNED_SHORT && (q = n.R16UI), N === n.UNSIGNED_INT && (q = n.R32UI), N === n.BYTE && (q = n.R8I), N === n.SHORT && (q = n.R16I), N === n.INT && (q = n.R32I)), g === n.RG && (N === n.FLOAT && (q = n.RG32F), N === n.HALF_FLOAT && (q = n.RG16F), N === n.UNSIGNED_BYTE && (q = n.RG8)), g === n.RG_INTEGER && (N === n.UNSIGNED_BYTE && (q = n.RG8UI), N === n.UNSIGNED_SHORT && (q = n.RG16UI), N === n.UNSIGNED_INT && (q = n.RG32UI), N === n.BYTE && (q = n.RG8I), N === n.SHORT && (q = n.RG16I), N === n.INT && (q = n.RG32I)), g === n.RGB_INTEGER && (N === n.UNSIGNED_BYTE && (q = n.RGB8UI), N === n.UNSIGNED_SHORT && (q = n.RGB16UI), N === n.UNSIGNED_INT && (q = n.RGB32UI), N === n.BYTE && (q = n.RGB8I), N === n.SHORT && (q = n.RGB16I), N === n.INT && (q = n.RGB32I)), g === n.RGBA_INTEGER && (N === n.UNSIGNED_BYTE && (q = n.RGBA8UI), N === n.UNSIGNED_SHORT && (q = n.RGBA16UI), N === n.UNSIGNED_INT && (q = n.RGBA32UI), N === n.BYTE && (q = n.RGBA8I), N === n.SHORT && (q = n.RGBA16I), N === n.INT && (q = n.RGBA32I)), g === n.RGB && N === n.UNSIGNED_INT_5_9_9_9_REV && (q = n.RGB9_E5), g === n.RGBA) {
      const Mt = Y ? uo : Zt.getTransfer(X);
      N === n.FLOAT && (q = n.RGBA32F), N === n.HALF_FLOAT && (q = n.RGBA16F), N === n.UNSIGNED_BYTE && (q = Mt === ae ? n.SRGB8_ALPHA8 : n.RGBA8), N === n.UNSIGNED_SHORT_4_4_4_4 && (q = n.RGBA4), N === n.UNSIGNED_SHORT_5_5_5_1 && (q = n.RGB5_A1);
    }
    return (q === n.R16F || q === n.R32F || q === n.RG16F || q === n.RG32F || q === n.RGBA16F || q === n.RGBA32F) && t.get("EXT_color_buffer_float"), q;
  }
  function y(S, g) {
    let N;
    return S ? g === null || g === gi || g === cr ? N = n.DEPTH24_STENCIL8 : g === Cn ? N = n.DEPTH32F_STENCIL8 : g === Br && (N = n.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === gi || g === cr ? N = n.DEPTH_COMPONENT24 : g === Cn ? N = n.DEPTH_COMPONENT32F : g === Br && (N = n.DEPTH_COMPONENT16), N;
  }
  function M(S, g) {
    return p(S) === true || S.isFramebufferTexture && S.minFilter !== $e && S.minFilter !== rn ? Math.log2(Math.max(g.width, g.height)) + 1 : S.mipmaps !== void 0 && S.mipmaps.length > 0 ? S.mipmaps.length : S.isCompressedTexture && Array.isArray(S.image) ? g.mipmaps.length : 1;
  }
  function U(S) {
    const g = S.target;
    g.removeEventListener("dispose", U), T(g), g.isVideoTexture && h.delete(g);
  }
  function A(S) {
    const g = S.target;
    g.removeEventListener("dispose", A), Z(g);
  }
  function T(S) {
    const g = i.get(S);
    if (g.__webglInit === void 0) return;
    const N = S.source, X = d.get(N);
    if (X) {
      const Y = X[g.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && I(S), Object.keys(X).length === 0 && d.delete(N);
    }
    i.remove(S);
  }
  function I(S) {
    const g = i.get(S);
    n.deleteTexture(g.__webglTexture);
    const N = S.source, X = d.get(N);
    delete X[g.__cacheKey], o.memory.textures--;
  }
  function Z(S) {
    const g = i.get(S);
    if (S.depthTexture && S.depthTexture.dispose(), S.isWebGLCubeRenderTarget) for (let X = 0; X < 6; X++) {
      if (Array.isArray(g.__webglFramebuffer[X])) for (let Y = 0; Y < g.__webglFramebuffer[X].length; Y++) n.deleteFramebuffer(g.__webglFramebuffer[X][Y]);
      else n.deleteFramebuffer(g.__webglFramebuffer[X]);
      g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer[X]);
    }
    else {
      if (Array.isArray(g.__webglFramebuffer)) for (let X = 0; X < g.__webglFramebuffer.length; X++) n.deleteFramebuffer(g.__webglFramebuffer[X]);
      else n.deleteFramebuffer(g.__webglFramebuffer);
      if (g.__webglDepthbuffer && n.deleteRenderbuffer(g.__webglDepthbuffer), g.__webglMultisampledFramebuffer && n.deleteFramebuffer(g.__webglMultisampledFramebuffer), g.__webglColorRenderbuffer) for (let X = 0; X < g.__webglColorRenderbuffer.length; X++) g.__webglColorRenderbuffer[X] && n.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);
      g.__webglDepthRenderbuffer && n.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const N = S.textures;
    for (let X = 0, Y = N.length; X < Y; X++) {
      const q = i.get(N[X]);
      q.__webglTexture && (n.deleteTexture(q.__webglTexture), o.memory.textures--), i.remove(N[X]);
    }
    i.remove(S);
  }
  let v = 0;
  function w() {
    v = 0;
  }
  function z() {
    const S = v;
    return S >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + S + " texture units while this GPU supports only " + r.maxTextures), v += 1, S;
  }
  function B(S) {
    const g = [];
    return g.push(S.wrapS), g.push(S.wrapT), g.push(S.wrapR || 0), g.push(S.magFilter), g.push(S.minFilter), g.push(S.anisotropy), g.push(S.internalFormat), g.push(S.format), g.push(S.type), g.push(S.generateMipmaps), g.push(S.premultiplyAlpha), g.push(S.flipY), g.push(S.unpackAlignment), g.push(S.colorSpace), g.join();
  }
  function V(S, g) {
    const N = i.get(S);
    if (S.isVideoTexture && ot(S), S.isRenderTargetTexture === false && S.version > 0 && N.__version !== S.version) {
      const X = S.image;
      if (X === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        qt(N, S, g);
        return;
      }
    }
    e.bindTexture(n.TEXTURE_2D, N.__webglTexture, n.TEXTURE0 + g);
  }
  function $(S, g) {
    const N = i.get(S);
    if (S.version > 0 && N.__version !== S.version) {
      qt(N, S, g);
      return;
    }
    e.bindTexture(n.TEXTURE_2D_ARRAY, N.__webglTexture, n.TEXTURE0 + g);
  }
  function F(S, g) {
    const N = i.get(S);
    if (S.version > 0 && N.__version !== S.version) {
      qt(N, S, g);
      return;
    }
    e.bindTexture(n.TEXTURE_3D, N.__webglTexture, n.TEXTURE0 + g);
  }
  function tt(S, g) {
    const N = i.get(S);
    if (S.version > 0 && N.__version !== S.version) {
      W(N, S, g);
      return;
    }
    e.bindTexture(n.TEXTURE_CUBE_MAP, N.__webglTexture, n.TEXTURE0 + g);
  }
  const G = { [Ga]: n.REPEAT, [fi]: n.CLAMP_TO_EDGE, [Wa]: n.MIRRORED_REPEAT }, ht = { [$e]: n.NEAREST, [af]: n.NEAREST_MIPMAP_NEAREST, [fs]: n.NEAREST_MIPMAP_LINEAR, [rn]: n.LINEAR, [ko]: n.LINEAR_MIPMAP_NEAREST, [mi]: n.LINEAR_MIPMAP_LINEAR }, pt = { [uf]: n.NEVER, [vf]: n.ALWAYS, [df]: n.LESS, [Vu]: n.LEQUAL, [pf]: n.EQUAL, [_f]: n.GEQUAL, [ff]: n.GREATER, [mf]: n.NOTEQUAL };
  function ft(S, g) {
    if (g.type === Cn && t.has("OES_texture_float_linear") === false && (g.magFilter === rn || g.magFilter === ko || g.magFilter === fs || g.magFilter === mi || g.minFilter === rn || g.minFilter === ko || g.minFilter === fs || g.minFilter === mi) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), n.texParameteri(S, n.TEXTURE_WRAP_S, G[g.wrapS]), n.texParameteri(S, n.TEXTURE_WRAP_T, G[g.wrapT]), (S === n.TEXTURE_3D || S === n.TEXTURE_2D_ARRAY) && n.texParameteri(S, n.TEXTURE_WRAP_R, G[g.wrapR]), n.texParameteri(S, n.TEXTURE_MAG_FILTER, ht[g.magFilter]), n.texParameteri(S, n.TEXTURE_MIN_FILTER, ht[g.minFilter]), g.compareFunction && (n.texParameteri(S, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(S, n.TEXTURE_COMPARE_FUNC, pt[g.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (g.magFilter === $e || g.minFilter !== fs && g.minFilter !== mi || g.type === Cn && t.has("OES_texture_float_linear") === false) return;
      if (g.anisotropy > 1 || i.get(g).__currentAnisotropy) {
        const N = t.get("EXT_texture_filter_anisotropic");
        n.texParameterf(S, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy())), i.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function zt(S, g) {
    let N = false;
    S.__webglInit === void 0 && (S.__webglInit = true, g.addEventListener("dispose", U));
    const X = g.source;
    let Y = d.get(X);
    Y === void 0 && (Y = {}, d.set(X, Y));
    const q = B(g);
    if (q !== S.__cacheKey) {
      Y[q] === void 0 && (Y[q] = { texture: n.createTexture(), usedTimes: 0 }, o.memory.textures++, N = true), Y[q].usedTimes++;
      const Mt = Y[S.__cacheKey];
      Mt !== void 0 && (Y[S.__cacheKey].usedTimes--, Mt.usedTimes === 0 && I(g)), S.__cacheKey = q, S.__webglTexture = Y[q].texture;
    }
    return N;
  }
  function qt(S, g, N) {
    let X = n.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && (X = n.TEXTURE_2D_ARRAY), g.isData3DTexture && (X = n.TEXTURE_3D);
    const Y = zt(S, g), q = g.source;
    e.bindTexture(X, S.__webglTexture, n.TEXTURE0 + N);
    const Mt = i.get(q);
    if (q.version !== Mt.__version || Y === true) {
      e.activeTexture(n.TEXTURE0 + N);
      const at = Zt.getPrimaries(Zt.workingColorSpace), gt = g.colorSpace === qn ? null : Zt.getPrimaries(g.colorSpace), Ht = g.colorSpace === qn || at === gt ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ht);
      let nt = x(g.image, false, r.maxTextureSize);
      nt = Ct(g, nt);
      const xt = s.convert(g.format, g.colorSpace), Dt = s.convert(g.type);
      let It = E(g.internalFormat, xt, Dt, g.colorSpace, g.isVideoTexture);
      ft(X, g);
      let yt;
      const Gt = g.mipmaps, Nt = g.isVideoTexture !== true, re = Mt.__version === void 0 || Y === true, R = q.dataReady, _t = M(g, nt);
      if (g.isDepthTexture) It = y(g.format === hr, g.type), re && (Nt ? e.texStorage2D(n.TEXTURE_2D, 1, It, nt.width, nt.height) : e.texImage2D(n.TEXTURE_2D, 0, It, nt.width, nt.height, 0, xt, Dt, null));
      else if (g.isDataTexture) if (Gt.length > 0) {
        Nt && re && e.texStorage2D(n.TEXTURE_2D, _t, It, Gt[0].width, Gt[0].height);
        for (let H = 0, K = Gt.length; H < K; H++) yt = Gt[H], Nt ? R && e.texSubImage2D(n.TEXTURE_2D, H, 0, 0, yt.width, yt.height, xt, Dt, yt.data) : e.texImage2D(n.TEXTURE_2D, H, It, yt.width, yt.height, 0, xt, Dt, yt.data);
        g.generateMipmaps = false;
      } else Nt ? (re && e.texStorage2D(n.TEXTURE_2D, _t, It, nt.width, nt.height), R && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, nt.width, nt.height, xt, Dt, nt.data)) : e.texImage2D(n.TEXTURE_2D, 0, It, nt.width, nt.height, 0, xt, Dt, nt.data);
      else if (g.isCompressedTexture) if (g.isCompressedArrayTexture) {
        Nt && re && e.texStorage3D(n.TEXTURE_2D_ARRAY, _t, It, Gt[0].width, Gt[0].height, nt.depth);
        for (let H = 0, K = Gt.length; H < K; H++) if (yt = Gt[H], g.format !== on) if (xt !== null) if (Nt) {
          if (R) if (g.layerUpdates.size > 0) {
            const ut = Eh(yt.width, yt.height, g.format, g.type);
            for (const vt of g.layerUpdates) {
              const Wt = yt.data.subarray(vt * ut / yt.data.BYTES_PER_ELEMENT, (vt + 1) * ut / yt.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, H, 0, 0, vt, yt.width, yt.height, 1, xt, Wt, 0, 0);
            }
            g.clearLayerUpdates();
          } else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, H, 0, 0, 0, yt.width, yt.height, nt.depth, xt, yt.data, 0, 0);
        } else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY, H, It, yt.width, yt.height, nt.depth, 0, yt.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Nt ? R && e.texSubImage3D(n.TEXTURE_2D_ARRAY, H, 0, 0, 0, yt.width, yt.height, nt.depth, xt, Dt, yt.data) : e.texImage3D(n.TEXTURE_2D_ARRAY, H, It, yt.width, yt.height, nt.depth, 0, xt, Dt, yt.data);
      } else {
        Nt && re && e.texStorage2D(n.TEXTURE_2D, _t, It, Gt[0].width, Gt[0].height);
        for (let H = 0, K = Gt.length; H < K; H++) yt = Gt[H], g.format !== on ? xt !== null ? Nt ? R && e.compressedTexSubImage2D(n.TEXTURE_2D, H, 0, 0, yt.width, yt.height, xt, yt.data) : e.compressedTexImage2D(n.TEXTURE_2D, H, It, yt.width, yt.height, 0, yt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Nt ? R && e.texSubImage2D(n.TEXTURE_2D, H, 0, 0, yt.width, yt.height, xt, Dt, yt.data) : e.texImage2D(n.TEXTURE_2D, H, It, yt.width, yt.height, 0, xt, Dt, yt.data);
      }
      else if (g.isDataArrayTexture) if (Nt) {
        if (re && e.texStorage3D(n.TEXTURE_2D_ARRAY, _t, It, nt.width, nt.height, nt.depth), R) if (g.layerUpdates.size > 0) {
          const H = Eh(nt.width, nt.height, g.format, g.type);
          for (const K of g.layerUpdates) {
            const ut = nt.data.subarray(K * H / nt.data.BYTES_PER_ELEMENT, (K + 1) * H / nt.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, K, nt.width, nt.height, 1, xt, Dt, ut);
          }
          g.clearLayerUpdates();
        } else e.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, nt.width, nt.height, nt.depth, xt, Dt, nt.data);
      } else e.texImage3D(n.TEXTURE_2D_ARRAY, 0, It, nt.width, nt.height, nt.depth, 0, xt, Dt, nt.data);
      else if (g.isData3DTexture) Nt ? (re && e.texStorage3D(n.TEXTURE_3D, _t, It, nt.width, nt.height, nt.depth), R && e.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, nt.width, nt.height, nt.depth, xt, Dt, nt.data)) : e.texImage3D(n.TEXTURE_3D, 0, It, nt.width, nt.height, nt.depth, 0, xt, Dt, nt.data);
      else if (g.isFramebufferTexture) {
        if (re) if (Nt) e.texStorage2D(n.TEXTURE_2D, _t, It, nt.width, nt.height);
        else {
          let H = nt.width, K = nt.height;
          for (let ut = 0; ut < _t; ut++) e.texImage2D(n.TEXTURE_2D, ut, It, H, K, 0, xt, Dt, null), H >>= 1, K >>= 1;
        }
      } else if (Gt.length > 0) {
        if (Nt && re) {
          const H = mt(Gt[0]);
          e.texStorage2D(n.TEXTURE_2D, _t, It, H.width, H.height);
        }
        for (let H = 0, K = Gt.length; H < K; H++) yt = Gt[H], Nt ? R && e.texSubImage2D(n.TEXTURE_2D, H, 0, 0, xt, Dt, yt) : e.texImage2D(n.TEXTURE_2D, H, It, xt, Dt, yt);
        g.generateMipmaps = false;
      } else if (Nt) {
        if (re) {
          const H = mt(nt);
          e.texStorage2D(n.TEXTURE_2D, _t, It, H.width, H.height);
        }
        R && e.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, xt, Dt, nt);
      } else e.texImage2D(n.TEXTURE_2D, 0, It, xt, Dt, nt);
      p(g) && m(X), Mt.__version = q.version, g.onUpdate && g.onUpdate(g);
    }
    S.__version = g.version;
  }
  function W(S, g, N) {
    if (g.image.length !== 6) return;
    const X = zt(S, g), Y = g.source;
    e.bindTexture(n.TEXTURE_CUBE_MAP, S.__webglTexture, n.TEXTURE0 + N);
    const q = i.get(Y);
    if (Y.version !== q.__version || X === true) {
      e.activeTexture(n.TEXTURE0 + N);
      const Mt = Zt.getPrimaries(Zt.workingColorSpace), at = g.colorSpace === qn ? null : Zt.getPrimaries(g.colorSpace), gt = g.colorSpace === qn || Mt === at ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, g.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, g.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, gt);
      const Ht = g.isCompressedTexture || g.image[0].isCompressedTexture, nt = g.image[0] && g.image[0].isDataTexture, xt = [];
      for (let K = 0; K < 6; K++) !Ht && !nt ? xt[K] = x(g.image[K], true, r.maxCubemapSize) : xt[K] = nt ? g.image[K].image : g.image[K], xt[K] = Ct(g, xt[K]);
      const Dt = xt[0], It = s.convert(g.format, g.colorSpace), yt = s.convert(g.type), Gt = E(g.internalFormat, It, yt, g.colorSpace), Nt = g.isVideoTexture !== true, re = q.__version === void 0 || X === true, R = Y.dataReady;
      let _t = M(g, Dt);
      ft(n.TEXTURE_CUBE_MAP, g);
      let H;
      if (Ht) {
        Nt && re && e.texStorage2D(n.TEXTURE_CUBE_MAP, _t, Gt, Dt.width, Dt.height);
        for (let K = 0; K < 6; K++) {
          H = xt[K].mipmaps;
          for (let ut = 0; ut < H.length; ut++) {
            const vt = H[ut];
            g.format !== on ? It !== null ? Nt ? R && e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, 0, 0, vt.width, vt.height, It, vt.data) : e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, Gt, vt.width, vt.height, 0, vt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Nt ? R && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, 0, 0, vt.width, vt.height, It, yt, vt.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, Gt, vt.width, vt.height, 0, It, yt, vt.data);
          }
        }
      } else {
        if (H = g.mipmaps, Nt && re) {
          H.length > 0 && _t++;
          const K = mt(xt[0]);
          e.texStorage2D(n.TEXTURE_CUBE_MAP, _t, Gt, K.width, K.height);
        }
        for (let K = 0; K < 6; K++) if (nt) {
          Nt ? R && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, xt[K].width, xt[K].height, It, yt, xt[K].data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Gt, xt[K].width, xt[K].height, 0, It, yt, xt[K].data);
          for (let ut = 0; ut < H.length; ut++) {
            const Wt = H[ut].image[K].image;
            Nt ? R && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, 0, 0, Wt.width, Wt.height, It, yt, Wt.data) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, Gt, Wt.width, Wt.height, 0, It, yt, Wt.data);
          }
        } else {
          Nt ? R && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, It, yt, xt[K]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Gt, It, yt, xt[K]);
          for (let ut = 0; ut < H.length; ut++) {
            const vt = H[ut];
            Nt ? R && e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, 0, 0, It, yt, vt.image[K]) : e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, Gt, It, yt, vt.image[K]);
          }
        }
      }
      p(g) && m(n.TEXTURE_CUBE_MAP), q.__version = Y.version, g.onUpdate && g.onUpdate(g);
    }
    S.__version = g.version;
  }
  function et(S, g, N, X, Y, q) {
    const Mt = s.convert(N.format, N.colorSpace), at = s.convert(N.type), gt = E(N.internalFormat, Mt, at, N.colorSpace);
    if (!i.get(g).__hasExternalTextures) {
      const nt = Math.max(1, g.width >> q), xt = Math.max(1, g.height >> q);
      Y === n.TEXTURE_3D || Y === n.TEXTURE_2D_ARRAY ? e.texImage3D(Y, q, gt, nt, xt, g.depth, 0, Mt, at, null) : e.texImage2D(Y, q, gt, nt, xt, 0, Mt, at, null);
    }
    e.bindFramebuffer(n.FRAMEBUFFER, S), Q(g) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, X, Y, i.get(N).__webglTexture, 0, rt(g)) : (Y === n.TEXTURE_2D || Y >= n.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, X, Y, i.get(N).__webglTexture, q), e.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function bt(S, g, N) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, S), g.depthBuffer) {
      const X = g.depthTexture, Y = X && X.isDepthTexture ? X.type : null, q = y(g.stencilBuffer, Y), Mt = g.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, at = rt(g);
      Q(g) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, at, q, g.width, g.height) : N ? n.renderbufferStorageMultisample(n.RENDERBUFFER, at, q, g.width, g.height) : n.renderbufferStorage(n.RENDERBUFFER, q, g.width, g.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, Mt, n.RENDERBUFFER, S);
    } else {
      const X = g.textures;
      for (let Y = 0; Y < X.length; Y++) {
        const q = X[Y], Mt = s.convert(q.format, q.colorSpace), at = s.convert(q.type), gt = E(q.internalFormat, Mt, at, q.colorSpace), Ht = rt(g);
        N && Q(g) === false ? n.renderbufferStorageMultisample(n.RENDERBUFFER, Ht, gt, g.width, g.height) : Q(g) ? a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, Ht, gt, g.width, g.height) : n.renderbufferStorage(n.RENDERBUFFER, gt, g.width, g.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function ct(S, g) {
    if (g && g.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(n.FRAMEBUFFER, S), !(g.depthTexture && g.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!i.get(g.depthTexture).__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = true), V(g.depthTexture, 0);
    const X = i.get(g.depthTexture).__webglTexture, Y = rt(g);
    if (g.depthTexture.format === er) Q(g) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, X, 0, Y) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, X, 0);
    else if (g.depthTexture.format === hr) Q(g) ? a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, X, 0, Y) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, X, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Pt(S) {
    const g = i.get(S), N = S.isWebGLCubeRenderTarget === true;
    if (g.__boundDepthTexture !== S.depthTexture) {
      const X = S.depthTexture;
      if (g.__depthDisposeCallback && g.__depthDisposeCallback(), X) {
        const Y = () => {
          delete g.__boundDepthTexture, delete g.__depthDisposeCallback, X.removeEventListener("dispose", Y);
        };
        X.addEventListener("dispose", Y), g.__depthDisposeCallback = Y;
      }
      g.__boundDepthTexture = X;
    }
    if (S.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      ct(g.__webglFramebuffer, S);
    } else if (N) {
      g.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++) if (e.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer[X]), g.__webglDepthbuffer[X] === void 0) g.__webglDepthbuffer[X] = n.createRenderbuffer(), bt(g.__webglDepthbuffer[X], S, false);
      else {
        const Y = S.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, q = g.__webglDepthbuffer[X];
        n.bindRenderbuffer(n.RENDERBUFFER, q), n.framebufferRenderbuffer(n.FRAMEBUFFER, Y, n.RENDERBUFFER, q);
      }
    } else if (e.bindFramebuffer(n.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0) g.__webglDepthbuffer = n.createRenderbuffer(), bt(g.__webglDepthbuffer, S, false);
    else {
      const X = S.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, Y = g.__webglDepthbuffer;
      n.bindRenderbuffer(n.RENDERBUFFER, Y), n.framebufferRenderbuffer(n.FRAMEBUFFER, X, n.RENDERBUFFER, Y);
    }
    e.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function At(S, g, N) {
    const X = i.get(S);
    g !== void 0 && et(X.__webglFramebuffer, S, S.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), N !== void 0 && Pt(S);
  }
  function Ut(S) {
    const g = S.texture, N = i.get(S), X = i.get(g);
    S.addEventListener("dispose", A);
    const Y = S.textures, q = S.isWebGLCubeRenderTarget === true, Mt = Y.length > 1;
    if (Mt || (X.__webglTexture === void 0 && (X.__webglTexture = n.createTexture()), X.__version = g.version, o.memory.textures++), q) {
      N.__webglFramebuffer = [];
      for (let at = 0; at < 6; at++) if (g.mipmaps && g.mipmaps.length > 0) {
        N.__webglFramebuffer[at] = [];
        for (let gt = 0; gt < g.mipmaps.length; gt++) N.__webglFramebuffer[at][gt] = n.createFramebuffer();
      } else N.__webglFramebuffer[at] = n.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let at = 0; at < g.mipmaps.length; at++) N.__webglFramebuffer[at] = n.createFramebuffer();
      } else N.__webglFramebuffer = n.createFramebuffer();
      if (Mt) for (let at = 0, gt = Y.length; at < gt; at++) {
        const Ht = i.get(Y[at]);
        Ht.__webglTexture === void 0 && (Ht.__webglTexture = n.createTexture(), o.memory.textures++);
      }
      if (S.samples > 0 && Q(S) === false) {
        N.__webglMultisampledFramebuffer = n.createFramebuffer(), N.__webglColorRenderbuffer = [], e.bindFramebuffer(n.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let at = 0; at < Y.length; at++) {
          const gt = Y[at];
          N.__webglColorRenderbuffer[at] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, N.__webglColorRenderbuffer[at]);
          const Ht = s.convert(gt.format, gt.colorSpace), nt = s.convert(gt.type), xt = E(gt.internalFormat, Ht, nt, gt.colorSpace, S.isXRRenderTarget === true), Dt = rt(S);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, Dt, xt, S.width, S.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + at, n.RENDERBUFFER, N.__webglColorRenderbuffer[at]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), S.depthBuffer && (N.__webglDepthRenderbuffer = n.createRenderbuffer(), bt(N.__webglDepthRenderbuffer, S, true)), e.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (q) {
      e.bindTexture(n.TEXTURE_CUBE_MAP, X.__webglTexture), ft(n.TEXTURE_CUBE_MAP, g);
      for (let at = 0; at < 6; at++) if (g.mipmaps && g.mipmaps.length > 0) for (let gt = 0; gt < g.mipmaps.length; gt++) et(N.__webglFramebuffer[at][gt], S, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + at, gt);
      else et(N.__webglFramebuffer[at], S, g, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + at, 0);
      p(g) && m(n.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (Mt) {
      for (let at = 0, gt = Y.length; at < gt; at++) {
        const Ht = Y[at], nt = i.get(Ht);
        e.bindTexture(n.TEXTURE_2D, nt.__webglTexture), ft(n.TEXTURE_2D, Ht), et(N.__webglFramebuffer, S, Ht, n.COLOR_ATTACHMENT0 + at, n.TEXTURE_2D, 0), p(Ht) && m(n.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let at = n.TEXTURE_2D;
      if ((S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) && (at = S.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY), e.bindTexture(at, X.__webglTexture), ft(at, g), g.mipmaps && g.mipmaps.length > 0) for (let gt = 0; gt < g.mipmaps.length; gt++) et(N.__webglFramebuffer[gt], S, g, n.COLOR_ATTACHMENT0, at, gt);
      else et(N.__webglFramebuffer, S, g, n.COLOR_ATTACHMENT0, at, 0);
      p(g) && m(at), e.unbindTexture();
    }
    S.depthBuffer && Pt(S);
  }
  function Vt(S) {
    const g = S.textures;
    for (let N = 0, X = g.length; N < X; N++) {
      const Y = g[N];
      if (p(Y)) {
        const q = S.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : n.TEXTURE_2D, Mt = i.get(Y).__webglTexture;
        e.bindTexture(q, Mt), m(q), e.unbindTexture();
      }
    }
  }
  const j = [], C = [];
  function st(S) {
    if (S.samples > 0) {
      if (Q(S) === false) {
        const g = S.textures, N = S.width, X = S.height;
        let Y = n.COLOR_BUFFER_BIT;
        const q = S.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, Mt = i.get(S), at = g.length > 1;
        if (at) for (let gt = 0; gt < g.length; gt++) e.bindFramebuffer(n.FRAMEBUFFER, Mt.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + gt, n.RENDERBUFFER, null), e.bindFramebuffer(n.FRAMEBUFFER, Mt.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + gt, n.TEXTURE_2D, null, 0);
        e.bindFramebuffer(n.READ_FRAMEBUFFER, Mt.__webglMultisampledFramebuffer), e.bindFramebuffer(n.DRAW_FRAMEBUFFER, Mt.__webglFramebuffer);
        for (let gt = 0; gt < g.length; gt++) {
          if (S.resolveDepthBuffer && (S.depthBuffer && (Y |= n.DEPTH_BUFFER_BIT), S.stencilBuffer && S.resolveStencilBuffer && (Y |= n.STENCIL_BUFFER_BIT)), at) {
            n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, Mt.__webglColorRenderbuffer[gt]);
            const Ht = i.get(g[gt]).__webglTexture;
            n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, Ht, 0);
          }
          n.blitFramebuffer(0, 0, N, X, 0, 0, N, X, Y, n.NEAREST), l === true && (j.length = 0, C.length = 0, j.push(n.COLOR_ATTACHMENT0 + gt), S.depthBuffer && S.resolveDepthBuffer === false && (j.push(q), C.push(q), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, C)), n.invalidateFramebuffer(n.READ_FRAMEBUFFER, j));
        }
        if (e.bindFramebuffer(n.READ_FRAMEBUFFER, null), e.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), at) for (let gt = 0; gt < g.length; gt++) {
          e.bindFramebuffer(n.FRAMEBUFFER, Mt.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + gt, n.RENDERBUFFER, Mt.__webglColorRenderbuffer[gt]);
          const Ht = i.get(g[gt]).__webglTexture;
          e.bindFramebuffer(n.FRAMEBUFFER, Mt.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + gt, n.TEXTURE_2D, Ht, 0);
        }
        e.bindFramebuffer(n.DRAW_FRAMEBUFFER, Mt.__webglMultisampledFramebuffer);
      } else if (S.depthBuffer && S.resolveDepthBuffer === false && l) {
        const g = S.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT;
        n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function rt(S) {
    return Math.min(r.maxSamples, S.samples);
  }
  function Q(S) {
    const g = i.get(S);
    return S.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && g.__useRenderToTexture !== false;
  }
  function ot(S) {
    const g = o.render.frame;
    h.get(S) !== g && (h.set(S, g), S.update());
  }
  function Ct(S, g) {
    const N = S.colorSpace, X = S.format, Y = S.type;
    return S.isCompressedTexture === true || S.isVideoTexture === true || N !== ni && N !== qn && (Zt.getTransfer(N) === ae ? (X !== on || Y !== Rn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), g;
  }
  function mt(S) {
    return typeof HTMLImageElement < "u" && S instanceof HTMLImageElement ? (c.width = S.naturalWidth || S.width, c.height = S.naturalHeight || S.height) : typeof VideoFrame < "u" && S instanceof VideoFrame ? (c.width = S.displayWidth, c.height = S.displayHeight) : (c.width = S.width, c.height = S.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = w, this.setTexture2D = V, this.setTexture2DArray = $, this.setTexture3D = F, this.setTextureCube = tt, this.rebindTextures = At, this.setupRenderTarget = Ut, this.updateRenderTargetMipmap = Vt, this.updateMultisampleRenderTarget = st, this.setupDepthRenderbuffer = Pt, this.setupFrameBufferTexture = et, this.useMultisampledRTT = Q;
}
function B0(n, t) {
  function e(i, r = qn) {
    let s;
    const o = Zt.getTransfer(r);
    if (i === Rn) return n.UNSIGNED_BYTE;
    if (i === Nl) return n.UNSIGNED_SHORT_4_4_4_4;
    if (i === Ol) return n.UNSIGNED_SHORT_5_5_5_1;
    if (i === Du) return n.UNSIGNED_INT_5_9_9_9_REV;
    if (i === Ru) return n.BYTE;
    if (i === Lu) return n.SHORT;
    if (i === Br) return n.UNSIGNED_SHORT;
    if (i === Ul) return n.INT;
    if (i === gi) return n.UNSIGNED_INT;
    if (i === Cn) return n.FLOAT;
    if (i === $r) return n.HALF_FLOAT;
    if (i === Iu) return n.ALPHA;
    if (i === Uu) return n.RGB;
    if (i === on) return n.RGBA;
    if (i === Nu) return n.LUMINANCE;
    if (i === Ou) return n.LUMINANCE_ALPHA;
    if (i === er) return n.DEPTH_COMPONENT;
    if (i === hr) return n.DEPTH_STENCIL;
    if (i === Fu) return n.RED;
    if (i === Fl) return n.RED_INTEGER;
    if (i === Bu) return n.RG;
    if (i === Bl) return n.RG_INTEGER;
    if (i === kl) return n.RGBA_INTEGER;
    if (i === Qs || i === to || i === eo || i === no) if (o === ae) if (s = t.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (i === Qs) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (i === to) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (i === eo) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (i === no) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = t.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (i === Qs) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (i === to) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (i === eo) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (i === no) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (i === Xa || i === qa || i === ja || i === Ya) if (s = t.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (i === Xa) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (i === qa) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (i === ja) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (i === Ya) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (i === Ka || i === $a || i === Za) if (s = t.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (i === Ka || i === $a) return o === ae ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (i === Za) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (i === Ja || i === Qa || i === tl || i === el || i === nl || i === il || i === rl || i === sl || i === ol || i === al || i === ll || i === cl || i === hl || i === ul) if (s = t.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (i === Ja) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (i === Qa) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (i === tl) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (i === el) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (i === nl) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (i === il) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (i === rl) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (i === sl) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (i === ol) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (i === al) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (i === ll) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (i === cl) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (i === hl) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (i === ul) return o === ae ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (i === io || i === dl || i === pl) if (s = t.get("EXT_texture_compression_bptc"), s !== null) {
      if (i === io) return o === ae ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (i === dl) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (i === pl) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (i === ku || i === fl || i === ml || i === _l) if (s = t.get("EXT_texture_compression_rgtc"), s !== null) {
      if (i === io) return s.COMPRESSED_RED_RGTC1_EXT;
      if (i === fl) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (i === ml) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (i === _l) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return i === cr ? n.UNSIGNED_INT_24_8 : n[i] !== void 0 ? n[i] : null;
  }
  return { convert: e };
}
class k0 extends nn {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.cameras = t;
  }
}
class Ns extends ve {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const V0 = { type: "move" };
class pa {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Ns(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Ns(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new P(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new P()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Ns(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new P(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new P()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const i of t.hand.values()) this._getHandJoint(e, i);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, i) {
    let r = null, s = null, o = null;
    const a = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        o = true;
        for (const x of t.hand.values()) {
          const p = e.getJointPose(x, i), m = this._getHandJoint(c, x);
          p !== null && (m.matrix.fromArray(p.transform.matrix), m.matrix.decompose(m.position, m.rotation, m.scale), m.matrixWorldNeedsUpdate = true, m.jointRadius = p.radius), m.visible = p !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), f = 0.02, _ = 5e-3;
        c.inputState.pinching && d > f + _ ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && d <= f - _ && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else l !== null && t.gripSpace && (s = e.getPose(t.gripSpace, i), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      a !== null && (r = e.getPose(t.targetRaySpace, i), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, r.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = false, r.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(V0)));
    }
    return a !== null && (a.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = o !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const i = new Ns();
      i.matrixAutoUpdate = false, i.visible = false, t.joints[e.jointName] = i, t.add(i);
    }
    return t.joints[e.jointName];
  }
}
const z0 = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, H0 = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class G0 {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, i) {
    if (this.texture === null) {
      const r = new Pe(), s = t.properties.get(r);
      s.__webglTexture = e.texture, (e.depthNear != i.depthNear || e.depthFar != i.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = r;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, i = new ti({ vertexShader: z0, fragmentShader: H0, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new un(new To(20, 20), i);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class W0 extends Ei {
  constructor(t, e) {
    super();
    const i = this;
    let r = null, s = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, f = null, _ = null;
    const x = new G0(), p = e.getContextAttributes();
    let m = null, E = null;
    const y = [], M = [], U = new J();
    let A = null;
    const T = new nn();
    T.layers.enable(1), T.viewport = new pe();
    const I = new nn();
    I.layers.enable(2), I.viewport = new pe();
    const Z = [T, I], v = new k0();
    v.layers.enable(1), v.layers.enable(2);
    let w = null, z = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(W) {
      let et = y[W];
      return et === void 0 && (et = new pa(), y[W] = et), et.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let et = y[W];
      return et === void 0 && (et = new pa(), y[W] = et), et.getGripSpace();
    }, this.getHand = function(W) {
      let et = y[W];
      return et === void 0 && (et = new pa(), y[W] = et), et.getHandSpace();
    };
    function B(W) {
      const et = M.indexOf(W.inputSource);
      if (et === -1) return;
      const bt = y[et];
      bt !== void 0 && (bt.update(W.inputSource, W.frame, c || o), bt.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function V() {
      r.removeEventListener("select", B), r.removeEventListener("selectstart", B), r.removeEventListener("selectend", B), r.removeEventListener("squeeze", B), r.removeEventListener("squeezestart", B), r.removeEventListener("squeezeend", B), r.removeEventListener("end", V), r.removeEventListener("inputsourceschange", $);
      for (let W = 0; W < y.length; W++) {
        const et = M[W];
        et !== null && (M[W] = null, y[W].disconnect(et));
      }
      w = null, z = null, x.reset(), t.setRenderTarget(m), f = null, d = null, u = null, r = null, E = null, qt.stop(), i.isPresenting = false, t.setPixelRatio(A), t.setSize(U.width, U.height, false), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      s = W, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      a = W, i.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || o;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return d !== null ? d : f;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(W) {
      if (r = W, r !== null) {
        if (m = t.getRenderTarget(), r.addEventListener("select", B), r.addEventListener("selectstart", B), r.addEventListener("selectend", B), r.addEventListener("squeeze", B), r.addEventListener("squeezestart", B), r.addEventListener("squeezeend", B), r.addEventListener("end", V), r.addEventListener("inputsourceschange", $), p.xrCompatible !== true && await e.makeXRCompatible(), A = t.getPixelRatio(), t.getSize(U), r.renderState.layers === void 0) {
          const et = { antialias: p.antialias, alpha: true, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: s };
          f = new XRWebGLLayer(r, e, et), r.updateRenderState({ baseLayer: f }), t.setPixelRatio(1), t.setSize(f.framebufferWidth, f.framebufferHeight, false), E = new xi(f.framebufferWidth, f.framebufferHeight, { format: on, type: Rn, colorSpace: t.outputColorSpace, stencilBuffer: p.stencil });
        } else {
          let et = null, bt = null, ct = null;
          p.depth && (ct = p.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, et = p.stencil ? hr : er, bt = p.stencil ? cr : gi);
          const Pt = { colorFormat: e.RGBA8, depthFormat: ct, scaleFactor: s };
          u = new XRWebGLBinding(r, e), d = u.createProjectionLayer(Pt), r.updateRenderState({ layers: [d] }), t.setPixelRatio(1), t.setSize(d.textureWidth, d.textureHeight, false), E = new xi(d.textureWidth, d.textureHeight, { format: on, type: Rn, depthTexture: new Ju(d.textureWidth, d.textureHeight, bt, void 0, void 0, void 0, void 0, void 0, void 0, et), stencilBuffer: p.stencil, colorSpace: t.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        }
        E.isXRRenderTarget = true, this.setFoveation(l), c = null, o = await r.requestReferenceSpace(a), qt.setContext(r), qt.start(), i.isPresenting = true, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return x.getDepthTexture();
    };
    function $(W) {
      for (let et = 0; et < W.removed.length; et++) {
        const bt = W.removed[et], ct = M.indexOf(bt);
        ct >= 0 && (M[ct] = null, y[ct].disconnect(bt));
      }
      for (let et = 0; et < W.added.length; et++) {
        const bt = W.added[et];
        let ct = M.indexOf(bt);
        if (ct === -1) {
          for (let At = 0; At < y.length; At++) if (At >= M.length) {
            M.push(bt), ct = At;
            break;
          } else if (M[At] === null) {
            M[At] = bt, ct = At;
            break;
          }
          if (ct === -1) break;
        }
        const Pt = y[ct];
        Pt && Pt.connect(bt);
      }
    }
    const F = new P(), tt = new P();
    function G(W, et, bt) {
      F.setFromMatrixPosition(et.matrixWorld), tt.setFromMatrixPosition(bt.matrixWorld);
      const ct = F.distanceTo(tt), Pt = et.projectionMatrix.elements, At = bt.projectionMatrix.elements, Ut = Pt[14] / (Pt[10] - 1), Vt = Pt[14] / (Pt[10] + 1), j = (Pt[9] + 1) / Pt[5], C = (Pt[9] - 1) / Pt[5], st = (Pt[8] - 1) / Pt[0], rt = (At[8] + 1) / At[0], Q = Ut * st, ot = Ut * rt, Ct = ct / (-st + rt), mt = Ct * -st;
      if (et.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(mt), W.translateZ(Ct), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), Pt[10] === -1) W.projectionMatrix.copy(et.projectionMatrix), W.projectionMatrixInverse.copy(et.projectionMatrixInverse);
      else {
        const S = Ut + Ct, g = Vt + Ct, N = Q - mt, X = ot + (ct - mt), Y = j * Vt / g * S, q = C * Vt / g * S;
        W.projectionMatrix.makePerspective(N, X, Y, q, S, g), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
      }
    }
    function ht(W, et) {
      et === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(et.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (r === null) return;
      let et = W.near, bt = W.far;
      x.texture !== null && (x.depthNear > 0 && (et = x.depthNear), x.depthFar > 0 && (bt = x.depthFar)), v.near = I.near = T.near = et, v.far = I.far = T.far = bt, (w !== v.near || z !== v.far) && (r.updateRenderState({ depthNear: v.near, depthFar: v.far }), w = v.near, z = v.far);
      const ct = W.parent, Pt = v.cameras;
      ht(v, ct);
      for (let At = 0; At < Pt.length; At++) ht(Pt[At], ct);
      Pt.length === 2 ? G(v, T, I) : v.projectionMatrix.copy(T.projectionMatrix), pt(W, v, ct);
    };
    function pt(W, et, bt) {
      bt === null ? W.matrix.copy(et.matrixWorld) : (W.matrix.copy(bt.matrixWorld), W.matrix.invert(), W.matrix.multiply(et.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(true), W.projectionMatrix.copy(et.projectionMatrix), W.projectionMatrixInverse.copy(et.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = kr * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (!(d === null && f === null)) return l;
    }, this.setFoveation = function(W) {
      l = W, d !== null && (d.fixedFoveation = W), f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return x.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return x.getMesh(v);
    };
    let ft = null;
    function zt(W, et) {
      if (h = et.getViewerPose(c || o), _ = et, h !== null) {
        const bt = h.views;
        f !== null && (t.setRenderTargetFramebuffer(E, f.framebuffer), t.setRenderTarget(E));
        let ct = false;
        bt.length !== v.cameras.length && (v.cameras.length = 0, ct = true);
        for (let At = 0; At < bt.length; At++) {
          const Ut = bt[At];
          let Vt = null;
          if (f !== null) Vt = f.getViewport(Ut);
          else {
            const C = u.getViewSubImage(d, Ut);
            Vt = C.viewport, At === 0 && (t.setRenderTargetTextures(E, C.colorTexture, d.ignoreDepthValues ? void 0 : C.depthStencilTexture), t.setRenderTarget(E));
          }
          let j = Z[At];
          j === void 0 && (j = new nn(), j.layers.enable(At), j.viewport = new pe(), Z[At] = j), j.matrix.fromArray(Ut.transform.matrix), j.matrix.decompose(j.position, j.quaternion, j.scale), j.projectionMatrix.fromArray(Ut.projectionMatrix), j.projectionMatrixInverse.copy(j.projectionMatrix).invert(), j.viewport.set(Vt.x, Vt.y, Vt.width, Vt.height), At === 0 && (v.matrix.copy(j.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), ct === true && v.cameras.push(j);
        }
        const Pt = r.enabledFeatures;
        if (Pt && Pt.includes("depth-sensing")) {
          const At = u.getDepthInformation(bt[0]);
          At && At.isValid && At.texture && x.init(t, At, r.renderState);
        }
      }
      for (let bt = 0; bt < y.length; bt++) {
        const ct = M[bt], Pt = y[bt];
        ct !== null && Pt !== void 0 && Pt.update(ct, et, c || o);
      }
      ft && ft(W, et), et.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: et }), _ = null;
    }
    const qt = new $u();
    qt.setAnimationLoop(zt), this.setAnimationLoop = function(W) {
      ft = W;
    }, this.dispose = function() {
    };
  }
}
const ci = new ln(), X0 = new ie();
function q0(n, t) {
  function e(p, m) {
    p.matrixAutoUpdate === true && p.updateMatrix(), m.value.copy(p.matrix);
  }
  function i(p, m) {
    m.color.getRGB(p.fogColor.value, ju(n)), m.isFog ? (p.fogNear.value = m.near, p.fogFar.value = m.far) : m.isFogExp2 && (p.fogDensity.value = m.density);
  }
  function r(p, m, E, y, M) {
    m.isMeshBasicMaterial || m.isMeshLambertMaterial ? s(p, m) : m.isMeshToonMaterial ? (s(p, m), u(p, m)) : m.isMeshPhongMaterial ? (s(p, m), h(p, m)) : m.isMeshStandardMaterial ? (s(p, m), d(p, m), m.isMeshPhysicalMaterial && f(p, m, M)) : m.isMeshMatcapMaterial ? (s(p, m), _(p, m)) : m.isMeshDepthMaterial ? s(p, m) : m.isMeshDistanceMaterial ? (s(p, m), x(p, m)) : m.isMeshNormalMaterial ? s(p, m) : m.isLineBasicMaterial ? (o(p, m), m.isLineDashedMaterial && a(p, m)) : m.isPointsMaterial ? l(p, m, E, y) : m.isSpriteMaterial ? c(p, m) : m.isShadowMaterial ? (p.color.value.copy(m.color), p.opacity.value = m.opacity) : m.isShaderMaterial && (m.uniformsNeedUpdate = false);
  }
  function s(p, m) {
    p.opacity.value = m.opacity, m.color && p.diffuse.value.copy(m.color), m.emissive && p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity), m.map && (p.map.value = m.map, e(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, e(m.alphaMap, p.alphaMapTransform)), m.bumpMap && (p.bumpMap.value = m.bumpMap, e(m.bumpMap, p.bumpMapTransform), p.bumpScale.value = m.bumpScale, m.side === Be && (p.bumpScale.value *= -1)), m.normalMap && (p.normalMap.value = m.normalMap, e(m.normalMap, p.normalMapTransform), p.normalScale.value.copy(m.normalScale), m.side === Be && p.normalScale.value.negate()), m.displacementMap && (p.displacementMap.value = m.displacementMap, e(m.displacementMap, p.displacementMapTransform), p.displacementScale.value = m.displacementScale, p.displacementBias.value = m.displacementBias), m.emissiveMap && (p.emissiveMap.value = m.emissiveMap, e(m.emissiveMap, p.emissiveMapTransform)), m.specularMap && (p.specularMap.value = m.specularMap, e(m.specularMap, p.specularMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
    const E = t.get(m), y = E.envMap, M = E.envMapRotation;
    y && (p.envMap.value = y, ci.copy(M), ci.x *= -1, ci.y *= -1, ci.z *= -1, y.isCubeTexture && y.isRenderTargetTexture === false && (ci.y *= -1, ci.z *= -1), p.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(ci)), p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = m.reflectivity, p.ior.value = m.ior, p.refractionRatio.value = m.refractionRatio), m.lightMap && (p.lightMap.value = m.lightMap, p.lightMapIntensity.value = m.lightMapIntensity, e(m.lightMap, p.lightMapTransform)), m.aoMap && (p.aoMap.value = m.aoMap, p.aoMapIntensity.value = m.aoMapIntensity, e(m.aoMap, p.aoMapTransform));
  }
  function o(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, m.map && (p.map.value = m.map, e(m.map, p.mapTransform));
  }
  function a(p, m) {
    p.dashSize.value = m.dashSize, p.totalSize.value = m.dashSize + m.gapSize, p.scale.value = m.scale;
  }
  function l(p, m, E, y) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.size.value = m.size * E, p.scale.value = y * 0.5, m.map && (p.map.value = m.map, e(m.map, p.uvTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, e(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function c(p, m) {
    p.diffuse.value.copy(m.color), p.opacity.value = m.opacity, p.rotation.value = m.rotation, m.map && (p.map.value = m.map, e(m.map, p.mapTransform)), m.alphaMap && (p.alphaMap.value = m.alphaMap, e(m.alphaMap, p.alphaMapTransform)), m.alphaTest > 0 && (p.alphaTest.value = m.alphaTest);
  }
  function h(p, m) {
    p.specular.value.copy(m.specular), p.shininess.value = Math.max(m.shininess, 1e-4);
  }
  function u(p, m) {
    m.gradientMap && (p.gradientMap.value = m.gradientMap);
  }
  function d(p, m) {
    p.metalness.value = m.metalness, m.metalnessMap && (p.metalnessMap.value = m.metalnessMap, e(m.metalnessMap, p.metalnessMapTransform)), p.roughness.value = m.roughness, m.roughnessMap && (p.roughnessMap.value = m.roughnessMap, e(m.roughnessMap, p.roughnessMapTransform)), m.envMap && (p.envMapIntensity.value = m.envMapIntensity);
  }
  function f(p, m, E) {
    p.ior.value = m.ior, m.sheen > 0 && (p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen), p.sheenRoughness.value = m.sheenRoughness, m.sheenColorMap && (p.sheenColorMap.value = m.sheenColorMap, e(m.sheenColorMap, p.sheenColorMapTransform)), m.sheenRoughnessMap && (p.sheenRoughnessMap.value = m.sheenRoughnessMap, e(m.sheenRoughnessMap, p.sheenRoughnessMapTransform))), m.clearcoat > 0 && (p.clearcoat.value = m.clearcoat, p.clearcoatRoughness.value = m.clearcoatRoughness, m.clearcoatMap && (p.clearcoatMap.value = m.clearcoatMap, e(m.clearcoatMap, p.clearcoatMapTransform)), m.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = m.clearcoatRoughnessMap, e(m.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), m.clearcoatNormalMap && (p.clearcoatNormalMap.value = m.clearcoatNormalMap, e(m.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale), m.side === Be && p.clearcoatNormalScale.value.negate())), m.dispersion > 0 && (p.dispersion.value = m.dispersion), m.iridescence > 0 && (p.iridescence.value = m.iridescence, p.iridescenceIOR.value = m.iridescenceIOR, p.iridescenceThicknessMinimum.value = m.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = m.iridescenceThicknessRange[1], m.iridescenceMap && (p.iridescenceMap.value = m.iridescenceMap, e(m.iridescenceMap, p.iridescenceMapTransform)), m.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = m.iridescenceThicknessMap, e(m.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), m.transmission > 0 && (p.transmission.value = m.transmission, p.transmissionSamplerMap.value = E.texture, p.transmissionSamplerSize.value.set(E.width, E.height), m.transmissionMap && (p.transmissionMap.value = m.transmissionMap, e(m.transmissionMap, p.transmissionMapTransform)), p.thickness.value = m.thickness, m.thicknessMap && (p.thicknessMap.value = m.thicknessMap, e(m.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = m.attenuationDistance, p.attenuationColor.value.copy(m.attenuationColor)), m.anisotropy > 0 && (p.anisotropyVector.value.set(m.anisotropy * Math.cos(m.anisotropyRotation), m.anisotropy * Math.sin(m.anisotropyRotation)), m.anisotropyMap && (p.anisotropyMap.value = m.anisotropyMap, e(m.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = m.specularIntensity, p.specularColor.value.copy(m.specularColor), m.specularColorMap && (p.specularColorMap.value = m.specularColorMap, e(m.specularColorMap, p.specularColorMapTransform)), m.specularIntensityMap && (p.specularIntensityMap.value = m.specularIntensityMap, e(m.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function _(p, m) {
    m.matcap && (p.matcap.value = m.matcap);
  }
  function x(p, m) {
    const E = t.get(m).light;
    p.referencePosition.value.setFromMatrixPosition(E.matrixWorld), p.nearDistance.value = E.shadow.camera.near, p.farDistance.value = E.shadow.camera.far;
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: r };
}
function j0(n, t, e, i) {
  let r = {}, s = {}, o = [];
  const a = n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(E, y) {
    const M = y.program;
    i.uniformBlockBinding(E, M);
  }
  function c(E, y) {
    let M = r[E.id];
    M === void 0 && (_(E), M = h(E), r[E.id] = M, E.addEventListener("dispose", p));
    const U = y.program;
    i.updateUBOMapping(E, U);
    const A = t.render.frame;
    s[E.id] !== A && (d(E), s[E.id] = A);
  }
  function h(E) {
    const y = u();
    E.__bindingPointIndex = y;
    const M = n.createBuffer(), U = E.__size, A = E.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, M), n.bufferData(n.UNIFORM_BUFFER, U, A), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, y, M), M;
  }
  function u() {
    for (let E = 0; E < a; E++) if (o.indexOf(E) === -1) return o.push(E), E;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(E) {
    const y = r[E.id], M = E.uniforms, U = E.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, y);
    for (let A = 0, T = M.length; A < T; A++) {
      const I = Array.isArray(M[A]) ? M[A] : [M[A]];
      for (let Z = 0, v = I.length; Z < v; Z++) {
        const w = I[Z];
        if (f(w, A, Z, U) === true) {
          const z = w.__offset, B = Array.isArray(w.value) ? w.value : [w.value];
          let V = 0;
          for (let $ = 0; $ < B.length; $++) {
            const F = B[$], tt = x(F);
            typeof F == "number" || typeof F == "boolean" ? (w.__data[0] = F, n.bufferSubData(n.UNIFORM_BUFFER, z + V, w.__data)) : F.isMatrix3 ? (w.__data[0] = F.elements[0], w.__data[1] = F.elements[1], w.__data[2] = F.elements[2], w.__data[3] = 0, w.__data[4] = F.elements[3], w.__data[5] = F.elements[4], w.__data[6] = F.elements[5], w.__data[7] = 0, w.__data[8] = F.elements[6], w.__data[9] = F.elements[7], w.__data[10] = F.elements[8], w.__data[11] = 0) : (F.toArray(w.__data, V), V += tt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, z, w.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function f(E, y, M, U) {
    const A = E.value, T = y + "_" + M;
    if (U[T] === void 0) return typeof A == "number" || typeof A == "boolean" ? U[T] = A : U[T] = A.clone(), true;
    {
      const I = U[T];
      if (typeof A == "number" || typeof A == "boolean") {
        if (I !== A) return U[T] = A, true;
      } else if (I.equals(A) === false) return I.copy(A), true;
    }
    return false;
  }
  function _(E) {
    const y = E.uniforms;
    let M = 0;
    const U = 16;
    for (let T = 0, I = y.length; T < I; T++) {
      const Z = Array.isArray(y[T]) ? y[T] : [y[T]];
      for (let v = 0, w = Z.length; v < w; v++) {
        const z = Z[v], B = Array.isArray(z.value) ? z.value : [z.value];
        for (let V = 0, $ = B.length; V < $; V++) {
          const F = B[V], tt = x(F), G = M % U, ht = G % tt.boundary, pt = G + ht;
          M += ht, pt !== 0 && U - pt < tt.storage && (M += U - pt), z.__data = new Float32Array(tt.storage / Float32Array.BYTES_PER_ELEMENT), z.__offset = M, M += tt.storage;
        }
      }
    }
    const A = M % U;
    return A > 0 && (M += U - A), E.__size = M, E.__cache = {}, this;
  }
  function x(E) {
    const y = { boundary: 0, storage: 0 };
    return typeof E == "number" || typeof E == "boolean" ? (y.boundary = 4, y.storage = 4) : E.isVector2 ? (y.boundary = 8, y.storage = 8) : E.isVector3 || E.isColor ? (y.boundary = 16, y.storage = 12) : E.isVector4 ? (y.boundary = 16, y.storage = 16) : E.isMatrix3 ? (y.boundary = 48, y.storage = 48) : E.isMatrix4 ? (y.boundary = 64, y.storage = 64) : E.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", E), y;
  }
  function p(E) {
    const y = E.target;
    y.removeEventListener("dispose", p);
    const M = o.indexOf(y.__bindingPointIndex);
    o.splice(M, 1), n.deleteBuffer(r[y.id]), delete r[y.id], delete s[y.id];
  }
  function m() {
    for (const E in r) n.deleteBuffer(r[E]);
    o = [], r = {}, s = {};
  }
  return { bind: l, update: c, dispose: m };
}
class wS {
  constructor(t = {}) {
    const { canvas: e = Nf(), context: i = null, depth: r = true, stencil: s = false, alpha: o = false, antialias: a = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false } = t;
    this.isWebGLRenderer = true;
    let d;
    if (i !== null) {
      if (typeof WebGLRenderingContext < "u" && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      d = i.getContextAttributes().alpha;
    } else d = o;
    const f = new Uint32Array(4), _ = new Int32Array(4);
    let x = null, p = null;
    const m = [], E = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = cn, this.toneMapping = $n, this.toneMappingExposure = 1;
    const y = this;
    let M = false, U = 0, A = 0, T = null, I = -1, Z = null;
    const v = new pe(), w = new pe();
    let z = null;
    const B = new Bt(0);
    let V = 0, $ = e.width, F = e.height, tt = 1, G = null, ht = null;
    const pt = new pe(0, 0, $, F), ft = new pe(0, 0, $, F);
    let zt = false;
    const qt = new Xl();
    let W = false, et = false;
    const bt = new ie(), ct = new ie(), Pt = new P(), At = new pe(), Ut = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Vt = false;
    function j() {
      return T === null ? tt : 1;
    }
    let C = i;
    function st(b, L) {
      return e.getContext(b, L);
    }
    try {
      const b = { alpha: true, depth: r, stencil: s, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Dl}`), e.addEventListener("webglcontextlost", K, false), e.addEventListener("webglcontextrestored", ut, false), e.addEventListener("webglcontextcreationerror", vt, false), C === null) {
        const L = "webgl2";
        if (C = st(L, b), C === null) throw st(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (b) {
      throw console.error("THREE.WebGLRenderer: " + b.message), b;
    }
    let rt, Q, ot, Ct, mt, S, g, N, X, Y, q, Mt, at, gt, Ht, nt, xt, Dt, It, yt, Gt, Nt, re, R;
    function _t() {
      rt = new Qv(C), rt.init(), Nt = new B0(C, rt), Q = new jv(C, rt, t, Nt), ot = new N0(C), Q.reverseDepthBuffer && ot.buffers.depth.setReversed(true), Ct = new ng(C), mt = new b0(), S = new F0(C, rt, ot, mt, Q, Nt, Ct), g = new Kv(y), N = new Jv(y), X = new cm(C), re = new Xv(C, X), Y = new tg(C, X, Ct, re), q = new rg(C, Y, X, Ct), It = new ig(C, Q, S), nt = new Yv(mt), Mt = new x0(y, g, N, rt, Q, re, nt), at = new q0(y, mt), gt = new w0(), Ht = new A0(rt), Dt = new Wv(y, g, N, ot, q, d, l), xt = new I0(y, q, Q), R = new j0(C, Ct, Q, ot), yt = new qv(C, rt, Ct), Gt = new eg(C, rt, Ct), Ct.programs = Mt.programs, y.capabilities = Q, y.extensions = rt, y.properties = mt, y.renderLists = gt, y.shadowMap = xt, y.state = ot, y.info = Ct;
    }
    _t();
    const H = new W0(y, C);
    this.xr = H, this.getContext = function() {
      return C;
    }, this.getContextAttributes = function() {
      return C.getContextAttributes();
    }, this.forceContextLoss = function() {
      const b = rt.get("WEBGL_lose_context");
      b && b.loseContext();
    }, this.forceContextRestore = function() {
      const b = rt.get("WEBGL_lose_context");
      b && b.restoreContext();
    }, this.getPixelRatio = function() {
      return tt;
    }, this.setPixelRatio = function(b) {
      b !== void 0 && (tt = b, this.setSize($, F, false));
    }, this.getSize = function(b) {
      return b.set($, F);
    }, this.setSize = function(b, L, O = true) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      $ = b, F = L, e.width = Math.floor(b * tt), e.height = Math.floor(L * tt), O === true && (e.style.width = b + "px", e.style.height = L + "px"), this.setViewport(0, 0, b, L);
    }, this.getDrawingBufferSize = function(b) {
      return b.set($ * tt, F * tt).floor();
    }, this.setDrawingBufferSize = function(b, L, O) {
      $ = b, F = L, tt = O, e.width = Math.floor(b * O), e.height = Math.floor(L * O), this.setViewport(0, 0, b, L);
    }, this.getCurrentViewport = function(b) {
      return b.copy(v);
    }, this.getViewport = function(b) {
      return b.copy(pt);
    }, this.setViewport = function(b, L, O, k) {
      b.isVector4 ? pt.set(b.x, b.y, b.z, b.w) : pt.set(b, L, O, k), ot.viewport(v.copy(pt).multiplyScalar(tt).round());
    }, this.getScissor = function(b) {
      return b.copy(ft);
    }, this.setScissor = function(b, L, O, k) {
      b.isVector4 ? ft.set(b.x, b.y, b.z, b.w) : ft.set(b, L, O, k), ot.scissor(w.copy(ft).multiplyScalar(tt).round());
    }, this.getScissorTest = function() {
      return zt;
    }, this.setScissorTest = function(b) {
      ot.setScissorTest(zt = b);
    }, this.setOpaqueSort = function(b) {
      G = b;
    }, this.setTransparentSort = function(b) {
      ht = b;
    }, this.getClearColor = function(b) {
      return b.copy(Dt.getClearColor());
    }, this.setClearColor = function() {
      Dt.setClearColor.apply(Dt, arguments);
    }, this.getClearAlpha = function() {
      return Dt.getClearAlpha();
    }, this.setClearAlpha = function() {
      Dt.setClearAlpha.apply(Dt, arguments);
    }, this.clear = function(b = true, L = true, O = true) {
      let k = 0;
      if (b) {
        let D = false;
        if (T !== null) {
          const it = T.texture.format;
          D = it === kl || it === Bl || it === Fl;
        }
        if (D) {
          const it = T.texture.type, dt = it === Rn || it === gi || it === Br || it === cr || it === Nl || it === Ol, wt = Dt.getClearColor(), St = Dt.getClearAlpha(), Rt = wt.r, Lt = wt.g, Et = wt.b;
          dt ? (f[0] = Rt, f[1] = Lt, f[2] = Et, f[3] = St, C.clearBufferuiv(C.COLOR, 0, f)) : (_[0] = Rt, _[1] = Lt, _[2] = Et, _[3] = St, C.clearBufferiv(C.COLOR, 0, _));
        } else k |= C.COLOR_BUFFER_BIT;
      }
      L && (k |= C.DEPTH_BUFFER_BIT, C.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), O && (k |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), C.clear(k);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", K, false), e.removeEventListener("webglcontextrestored", ut, false), e.removeEventListener("webglcontextcreationerror", vt, false), gt.dispose(), Ht.dispose(), mt.dispose(), g.dispose(), N.dispose(), q.dispose(), re.dispose(), R.dispose(), Mt.dispose(), H.dispose(), H.removeEventListener("sessionstart", Mc), H.removeEventListener("sessionend", Sc), ii.stop();
    };
    function K(b) {
      b.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), M = true;
    }
    function ut() {
      console.log("THREE.WebGLRenderer: Context Restored."), M = false;
      const b = Ct.autoReset, L = xt.enabled, O = xt.autoUpdate, k = xt.needsUpdate, D = xt.type;
      _t(), Ct.autoReset = b, xt.enabled = L, xt.autoUpdate = O, xt.needsUpdate = k, xt.type = D;
    }
    function vt(b) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", b.statusMessage);
    }
    function Wt(b) {
      const L = b.target;
      L.removeEventListener("dispose", Wt), me(L);
    }
    function me(b) {
      Ue(b), mt.remove(b);
    }
    function Ue(b) {
      const L = mt.get(b).programs;
      L !== void 0 && (L.forEach(function(O) {
        Mt.releaseProgram(O);
      }), b.isShaderMaterial && Mt.releaseShaderCache(b));
    }
    this.renderBufferDirect = function(b, L, O, k, D, it) {
      L === null && (L = Ut);
      const dt = D.isMesh && D.matrixWorld.determinant() < 0, wt = wp(b, L, O, k, D);
      ot.setMaterial(k, dt);
      let St = O.index, Rt = 1;
      if (k.wireframe === true) {
        if (St = Y.getWireframeAttribute(O), St === void 0) return;
        Rt = 2;
      }
      const Lt = O.drawRange, Et = O.attributes.position;
      let te = Lt.start * Rt, oe = (Lt.start + Lt.count) * Rt;
      it !== null && (te = Math.max(te, it.start * Rt), oe = Math.min(oe, (it.start + it.count) * Rt)), St !== null ? (te = Math.max(te, 0), oe = Math.min(oe, St.count)) : Et != null && (te = Math.max(te, 0), oe = Math.min(oe, Et.count));
      const ue = oe - te;
      if (ue < 0 || ue === 1 / 0) return;
      re.setup(D, k, wt, O, St);
      let Ve, Kt = yt;
      if (St !== null && (Ve = X.get(St), Kt = Gt, Kt.setIndex(Ve)), D.isMesh) k.wireframe === true ? (ot.setLineWidth(k.wireframeLinewidth * j()), Kt.setMode(C.LINES)) : Kt.setMode(C.TRIANGLES);
      else if (D.isLine) {
        let Tt = k.linewidth;
        Tt === void 0 && (Tt = 1), ot.setLineWidth(Tt * j()), D.isLineSegments ? Kt.setMode(C.LINES) : D.isLineLoop ? Kt.setMode(C.LINE_LOOP) : Kt.setMode(C.LINE_STRIP);
      } else D.isPoints ? Kt.setMode(C.POINTS) : D.isSprite && Kt.setMode(C.TRIANGLES);
      if (D.isBatchedMesh) if (D._multiDrawInstances !== null) Kt.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
      else if (rt.get("WEBGL_multi_draw")) Kt.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
      else {
        const Tt = D._multiDrawStarts, Ce = D._multiDrawCounts, $t = D._multiDrawCount, Je = St ? X.get(St).bytesPerElement : 1, Ai = mt.get(k).currentProgram.getUniforms();
        for (let ze = 0; ze < $t; ze++) Ai.setValue(C, "_gl_DrawID", ze), Kt.render(Tt[ze] / Je, Ce[ze]);
      }
      else if (D.isInstancedMesh) Kt.renderInstances(te, ue, D.count);
      else if (O.isInstancedBufferGeometry) {
        const Tt = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, Ce = Math.min(O.instanceCount, Tt);
        Kt.renderInstances(te, ue, Ce);
      } else Kt.render(te, ue);
    };
    function Yt(b, L, O) {
      b.transparent === true && b.side === En && b.forceSinglePass === false ? (b.side = Be, b.needsUpdate = true, ds(b, L, O), b.side = Qn, b.needsUpdate = true, ds(b, L, O), b.side = En) : ds(b, L, O);
    }
    this.compile = function(b, L, O = null) {
      O === null && (O = b), p = Ht.get(O), p.init(L), E.push(p), O.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (p.pushLight(D), D.castShadow && p.pushShadow(D));
      }), b !== O && b.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (p.pushLight(D), D.castShadow && p.pushShadow(D));
      }), p.setupLights();
      const k = /* @__PURE__ */ new Set();
      return b.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite)) return;
        const it = D.material;
        if (it) if (Array.isArray(it)) for (let dt = 0; dt < it.length; dt++) {
          const wt = it[dt];
          Yt(wt, O, D), k.add(wt);
        }
        else Yt(it, O, D), k.add(it);
      }), E.pop(), p = null, k;
    }, this.compileAsync = function(b, L, O = null) {
      const k = this.compile(b, L, O);
      return new Promise((D) => {
        function it() {
          if (k.forEach(function(dt) {
            mt.get(dt).currentProgram.isReady() && k.delete(dt);
          }), k.size === 0) {
            D(b);
            return;
          }
          setTimeout(it, 10);
        }
        rt.get("KHR_parallel_shader_compile") !== null ? it() : setTimeout(it, 10);
      });
    };
    let Ne = null;
    function vn(b) {
      Ne && Ne(b);
    }
    function Mc() {
      ii.stop();
    }
    function Sc() {
      ii.start();
    }
    const ii = new $u();
    ii.setAnimationLoop(vn), typeof self < "u" && ii.setContext(self), this.setAnimationLoop = function(b) {
      Ne = b, H.setAnimationLoop(b), b === null ? ii.stop() : ii.start();
    }, H.addEventListener("sessionstart", Mc), H.addEventListener("sessionend", Sc), this.render = function(b, L) {
      if (L !== void 0 && L.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (M === true) return;
      if (b.matrixWorldAutoUpdate === true && b.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), H.enabled === true && H.isPresenting === true && (H.cameraAutoUpdate === true && H.updateCamera(L), L = H.getCamera()), b.isScene === true && b.onBeforeRender(y, b, L, T), p = Ht.get(b, E.length), p.init(L), E.push(p), ct.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), qt.setFromProjectionMatrix(ct), et = this.localClippingEnabled, W = nt.init(this.clippingPlanes, et), x = gt.get(b, m.length), x.init(), m.push(x), H.enabled === true && H.isPresenting === true) {
        const it = y.xr.getDepthSensingMesh();
        it !== null && No(it, L, -1 / 0, y.sortObjects);
      }
      No(b, L, 0, y.sortObjects), x.finish(), y.sortObjects === true && x.sort(G, ht), Vt = H.enabled === false || H.isPresenting === false || H.hasDepthSensing() === false, Vt && Dt.addToRenderList(x, b), this.info.render.frame++, W === true && nt.beginShadows();
      const O = p.state.shadowsArray;
      xt.render(O, b, L), W === true && nt.endShadows(), this.info.autoReset === true && this.info.reset();
      const k = x.opaque, D = x.transmissive;
      if (p.setupLights(), L.isArrayCamera) {
        const it = L.cameras;
        if (D.length > 0) for (let dt = 0, wt = it.length; dt < wt; dt++) {
          const St = it[dt];
          Cc(k, D, b, St);
        }
        Vt && Dt.render(b);
        for (let dt = 0, wt = it.length; dt < wt; dt++) {
          const St = it[dt];
          Ec(x, b, St, St.viewport);
        }
      } else D.length > 0 && Cc(k, D, b, L), Vt && Dt.render(b), Ec(x, b, L);
      T !== null && (S.updateMultisampleRenderTarget(T), S.updateRenderTargetMipmap(T)), b.isScene === true && b.onAfterRender(y, b, L), re.resetDefaultState(), I = -1, Z = null, E.pop(), E.length > 0 ? (p = E[E.length - 1], W === true && nt.setGlobalState(y.clippingPlanes, p.state.camera)) : p = null, m.pop(), m.length > 0 ? x = m[m.length - 1] : x = null;
    };
    function No(b, L, O, k) {
      if (b.visible === false) return;
      if (b.layers.test(L.layers)) {
        if (b.isGroup) O = b.renderOrder;
        else if (b.isLOD) b.autoUpdate === true && b.update(L);
        else if (b.isLight) p.pushLight(b), b.castShadow && p.pushShadow(b);
        else if (b.isSprite) {
          if (!b.frustumCulled || qt.intersectsSprite(b)) {
            k && At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ct);
            const dt = q.update(b), wt = b.material;
            wt.visible && x.push(b, dt, wt, O, At.z, null);
          }
        } else if ((b.isMesh || b.isLine || b.isPoints) && (!b.frustumCulled || qt.intersectsObject(b))) {
          const dt = q.update(b), wt = b.material;
          if (k && (b.boundingSphere !== void 0 ? (b.boundingSphere === null && b.computeBoundingSphere(), At.copy(b.boundingSphere.center)) : (dt.boundingSphere === null && dt.computeBoundingSphere(), At.copy(dt.boundingSphere.center)), At.applyMatrix4(b.matrixWorld).applyMatrix4(ct)), Array.isArray(wt)) {
            const St = dt.groups;
            for (let Rt = 0, Lt = St.length; Rt < Lt; Rt++) {
              const Et = St[Rt], te = wt[Et.materialIndex];
              te && te.visible && x.push(b, dt, te, O, At.z, Et);
            }
          } else wt.visible && x.push(b, dt, wt, O, At.z, null);
        }
      }
      const it = b.children;
      for (let dt = 0, wt = it.length; dt < wt; dt++) No(it[dt], L, O, k);
    }
    function Ec(b, L, O, k) {
      const D = b.opaque, it = b.transmissive, dt = b.transparent;
      p.setupLightsView(O), W === true && nt.setGlobalState(y.clippingPlanes, O), k && ot.viewport(v.copy(k)), D.length > 0 && us(D, L, O), it.length > 0 && us(it, L, O), dt.length > 0 && us(dt, L, O), ot.buffers.depth.setTest(true), ot.buffers.depth.setMask(true), ot.buffers.color.setMask(true), ot.setPolygonOffset(false);
    }
    function Cc(b, L, O, k) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[k.id] === void 0 && (p.state.transmissionRenderTarget[k.id] = new xi(1, 1, { generateMipmaps: true, type: rt.has("EXT_color_buffer_half_float") || rt.has("EXT_color_buffer_float") ? $r : Rn, minFilter: mi, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Zt.workingColorSpace }));
      const it = p.state.transmissionRenderTarget[k.id], dt = k.viewport || v;
      it.setSize(dt.z, dt.w);
      const wt = y.getRenderTarget();
      y.setRenderTarget(it), y.getClearColor(B), V = y.getClearAlpha(), V < 1 && y.setClearColor(16777215, 0.5), y.clear(), Vt && Dt.render(O);
      const St = y.toneMapping;
      y.toneMapping = $n;
      const Rt = k.viewport;
      if (k.viewport !== void 0 && (k.viewport = void 0), p.setupLightsView(k), W === true && nt.setGlobalState(y.clippingPlanes, k), us(b, O, k), S.updateMultisampleRenderTarget(it), S.updateRenderTargetMipmap(it), rt.has("WEBGL_multisampled_render_to_texture") === false) {
        let Lt = false;
        for (let Et = 0, te = L.length; Et < te; Et++) {
          const oe = L[Et], ue = oe.object, Ve = oe.geometry, Kt = oe.material, Tt = oe.group;
          if (Kt.side === En && ue.layers.test(k.layers)) {
            const Ce = Kt.side;
            Kt.side = Be, Kt.needsUpdate = true, Tc(ue, O, k, Ve, Kt, Tt), Kt.side = Ce, Kt.needsUpdate = true, Lt = true;
          }
        }
        Lt === true && (S.updateMultisampleRenderTarget(it), S.updateRenderTargetMipmap(it));
      }
      y.setRenderTarget(wt), y.setClearColor(B, V), Rt !== void 0 && (k.viewport = Rt), y.toneMapping = St;
    }
    function us(b, L, O) {
      const k = L.isScene === true ? L.overrideMaterial : null;
      for (let D = 0, it = b.length; D < it; D++) {
        const dt = b[D], wt = dt.object, St = dt.geometry, Rt = k === null ? dt.material : k, Lt = dt.group;
        wt.layers.test(O.layers) && Tc(wt, L, O, St, Rt, Lt);
      }
    }
    function Tc(b, L, O, k, D, it) {
      b.onBeforeRender(y, L, O, k, D, it), b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, b.matrixWorld), b.normalMatrix.getNormalMatrix(b.modelViewMatrix), D.onBeforeRender(y, L, O, k, b, it), D.transparent === true && D.side === En && D.forceSinglePass === false ? (D.side = Be, D.needsUpdate = true, y.renderBufferDirect(O, L, k, D, b, it), D.side = Qn, D.needsUpdate = true, y.renderBufferDirect(O, L, k, D, b, it), D.side = En) : y.renderBufferDirect(O, L, k, D, b, it), b.onAfterRender(y, L, O, k, D, it);
    }
    function ds(b, L, O) {
      L.isScene !== true && (L = Ut);
      const k = mt.get(b), D = p.state.lights, it = p.state.shadowsArray, dt = D.state.version, wt = Mt.getParameters(b, D.state, it, L, O), St = Mt.getProgramCacheKey(wt);
      let Rt = k.programs;
      k.environment = b.isMeshStandardMaterial ? L.environment : null, k.fog = L.fog, k.envMap = (b.isMeshStandardMaterial ? N : g).get(b.envMap || k.environment), k.envMapRotation = k.environment !== null && b.envMap === null ? L.environmentRotation : b.envMapRotation, Rt === void 0 && (b.addEventListener("dispose", Wt), Rt = /* @__PURE__ */ new Map(), k.programs = Rt);
      let Lt = Rt.get(St);
      if (Lt !== void 0) {
        if (k.currentProgram === Lt && k.lightsStateVersion === dt) return Pc(b, wt), Lt;
      } else wt.uniforms = Mt.getUniforms(b), b.onBeforeCompile(wt, y), Lt = Mt.acquireProgram(wt, St), Rt.set(St, Lt), k.uniforms = wt.uniforms;
      const Et = k.uniforms;
      return (!b.isShaderMaterial && !b.isRawShaderMaterial || b.clipping === true) && (Et.clippingPlanes = nt.uniform), Pc(b, wt), k.needsLights = Sp(b), k.lightsStateVersion = dt, k.needsLights && (Et.ambientLightColor.value = D.state.ambient, Et.lightProbe.value = D.state.probe, Et.directionalLights.value = D.state.directional, Et.directionalLightShadows.value = D.state.directionalShadow, Et.spotLights.value = D.state.spot, Et.spotLightShadows.value = D.state.spotShadow, Et.rectAreaLights.value = D.state.rectArea, Et.ltc_1.value = D.state.rectAreaLTC1, Et.ltc_2.value = D.state.rectAreaLTC2, Et.pointLights.value = D.state.point, Et.pointLightShadows.value = D.state.pointShadow, Et.hemisphereLights.value = D.state.hemi, Et.directionalShadowMap.value = D.state.directionalShadowMap, Et.directionalShadowMatrix.value = D.state.directionalShadowMatrix, Et.spotShadowMap.value = D.state.spotShadowMap, Et.spotLightMatrix.value = D.state.spotLightMatrix, Et.spotLightMap.value = D.state.spotLightMap, Et.pointShadowMap.value = D.state.pointShadowMap, Et.pointShadowMatrix.value = D.state.pointShadowMatrix), k.currentProgram = Lt, k.uniformsList = null, Lt;
    }
    function Ac(b) {
      if (b.uniformsList === null) {
        const L = b.currentProgram.getUniforms();
        b.uniformsList = so.seqWithValue(L.seq, b.uniforms);
      }
      return b.uniformsList;
    }
    function Pc(b, L) {
      const O = mt.get(b);
      O.outputColorSpace = L.outputColorSpace, O.batching = L.batching, O.batchingColor = L.batchingColor, O.instancing = L.instancing, O.instancingColor = L.instancingColor, O.instancingMorph = L.instancingMorph, O.skinning = L.skinning, O.morphTargets = L.morphTargets, O.morphNormals = L.morphNormals, O.morphColors = L.morphColors, O.morphTargetsCount = L.morphTargetsCount, O.numClippingPlanes = L.numClippingPlanes, O.numIntersection = L.numClipIntersection, O.vertexAlphas = L.vertexAlphas, O.vertexTangents = L.vertexTangents, O.toneMapping = L.toneMapping;
    }
    function wp(b, L, O, k, D) {
      L.isScene !== true && (L = Ut), S.resetTextureUnits();
      const it = L.fog, dt = k.isMeshStandardMaterial ? L.environment : null, wt = T === null ? y.outputColorSpace : T.isXRRenderTarget === true ? T.texture.colorSpace : ni, St = (k.isMeshStandardMaterial ? N : g).get(k.envMap || dt), Rt = k.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Lt = !!O.attributes.tangent && (!!k.normalMap || k.anisotropy > 0), Et = !!O.morphAttributes.position, te = !!O.morphAttributes.normal, oe = !!O.morphAttributes.color;
      let ue = $n;
      k.toneMapped && (T === null || T.isXRRenderTarget === true) && (ue = y.toneMapping);
      const Ve = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Kt = Ve !== void 0 ? Ve.length : 0, Tt = mt.get(k), Ce = p.state.lights;
      if (W === true && (et === true || b !== Z)) {
        const je = b === Z && k.id === I;
        nt.setState(k, b, je);
      }
      let $t = false;
      k.version === Tt.__version ? (Tt.needsLights && Tt.lightsStateVersion !== Ce.state.version || Tt.outputColorSpace !== wt || D.isBatchedMesh && Tt.batching === false || !D.isBatchedMesh && Tt.batching === true || D.isBatchedMesh && Tt.batchingColor === true && D.colorTexture === null || D.isBatchedMesh && Tt.batchingColor === false && D.colorTexture !== null || D.isInstancedMesh && Tt.instancing === false || !D.isInstancedMesh && Tt.instancing === true || D.isSkinnedMesh && Tt.skinning === false || !D.isSkinnedMesh && Tt.skinning === true || D.isInstancedMesh && Tt.instancingColor === true && D.instanceColor === null || D.isInstancedMesh && Tt.instancingColor === false && D.instanceColor !== null || D.isInstancedMesh && Tt.instancingMorph === true && D.morphTexture === null || D.isInstancedMesh && Tt.instancingMorph === false && D.morphTexture !== null || Tt.envMap !== St || k.fog === true && Tt.fog !== it || Tt.numClippingPlanes !== void 0 && (Tt.numClippingPlanes !== nt.numPlanes || Tt.numIntersection !== nt.numIntersection) || Tt.vertexAlphas !== Rt || Tt.vertexTangents !== Lt || Tt.morphTargets !== Et || Tt.morphNormals !== te || Tt.morphColors !== oe || Tt.toneMapping !== ue || Tt.morphTargetsCount !== Kt) && ($t = true) : ($t = true, Tt.__version = k.version);
      let Je = Tt.currentProgram;
      $t === true && (Je = ds(k, L, D));
      let Ai = false, ze = false, Oo = false;
      const fe = Je.getUniforms(), Nn = Tt.uniforms;
      if (ot.useProgram(Je.program) && (Ai = true, ze = true, Oo = true), k.id !== I && (I = k.id, ze = true), Ai || Z !== b) {
        Q.reverseDepthBuffer ? (bt.copy(b.projectionMatrix), Ff(bt), Bf(bt), fe.setValue(C, "projectionMatrix", bt)) : fe.setValue(C, "projectionMatrix", b.projectionMatrix), fe.setValue(C, "viewMatrix", b.matrixWorldInverse);
        const je = fe.map.cameraPosition;
        je !== void 0 && je.setValue(C, Pt.setFromMatrixPosition(b.matrixWorld)), Q.logarithmicDepthBuffer && fe.setValue(C, "logDepthBufFC", 2 / (Math.log(b.far + 1) / Math.LN2)), (k.isMeshPhongMaterial || k.isMeshToonMaterial || k.isMeshLambertMaterial || k.isMeshBasicMaterial || k.isMeshStandardMaterial || k.isShaderMaterial) && fe.setValue(C, "isOrthographic", b.isOrthographicCamera === true), Z !== b && (Z = b, ze = true, Oo = true);
      }
      if (D.isSkinnedMesh) {
        fe.setOptional(C, D, "bindMatrix"), fe.setOptional(C, D, "bindMatrixInverse");
        const je = D.skeleton;
        je && (je.boneTexture === null && je.computeBoneTexture(), fe.setValue(C, "boneTexture", je.boneTexture, S));
      }
      D.isBatchedMesh && (fe.setOptional(C, D, "batchingTexture"), fe.setValue(C, "batchingTexture", D._matricesTexture, S), fe.setOptional(C, D, "batchingIdTexture"), fe.setValue(C, "batchingIdTexture", D._indirectTexture, S), fe.setOptional(C, D, "batchingColorTexture"), D._colorsTexture !== null && fe.setValue(C, "batchingColorTexture", D._colorsTexture, S));
      const Fo = O.morphAttributes;
      if ((Fo.position !== void 0 || Fo.normal !== void 0 || Fo.color !== void 0) && It.update(D, O, Je), (ze || Tt.receiveShadow !== D.receiveShadow) && (Tt.receiveShadow = D.receiveShadow, fe.setValue(C, "receiveShadow", D.receiveShadow)), k.isMeshGouraudMaterial && k.envMap !== null && (Nn.envMap.value = St, Nn.flipEnvMap.value = St.isCubeTexture && St.isRenderTargetTexture === false ? -1 : 1), k.isMeshStandardMaterial && k.envMap === null && L.environment !== null && (Nn.envMapIntensity.value = L.environmentIntensity), ze && (fe.setValue(C, "toneMappingExposure", y.toneMappingExposure), Tt.needsLights && Mp(Nn, Oo), it && k.fog === true && at.refreshFogUniforms(Nn, it), at.refreshMaterialUniforms(Nn, k, tt, F, p.state.transmissionRenderTarget[b.id]), so.upload(C, Ac(Tt), Nn, S)), k.isShaderMaterial && k.uniformsNeedUpdate === true && (so.upload(C, Ac(Tt), Nn, S), k.uniformsNeedUpdate = false), k.isSpriteMaterial && fe.setValue(C, "center", D.center), fe.setValue(C, "modelViewMatrix", D.modelViewMatrix), fe.setValue(C, "normalMatrix", D.normalMatrix), fe.setValue(C, "modelMatrix", D.matrixWorld), k.isShaderMaterial || k.isRawShaderMaterial) {
        const je = k.uniformsGroups;
        for (let Bo = 0, Ep = je.length; Bo < Ep; Bo++) {
          const Rc = je[Bo];
          R.update(Rc, Je), R.bind(Rc, Je);
        }
      }
      return Je;
    }
    function Mp(b, L) {
      b.ambientLightColor.needsUpdate = L, b.lightProbe.needsUpdate = L, b.directionalLights.needsUpdate = L, b.directionalLightShadows.needsUpdate = L, b.pointLights.needsUpdate = L, b.pointLightShadows.needsUpdate = L, b.spotLights.needsUpdate = L, b.spotLightShadows.needsUpdate = L, b.rectAreaLights.needsUpdate = L, b.hemisphereLights.needsUpdate = L;
    }
    function Sp(b) {
      return b.isMeshLambertMaterial || b.isMeshToonMaterial || b.isMeshPhongMaterial || b.isMeshStandardMaterial || b.isShadowMaterial || b.isShaderMaterial && b.lights === true;
    }
    this.getActiveCubeFace = function() {
      return U;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return T;
    }, this.setRenderTargetTextures = function(b, L, O) {
      mt.get(b.texture).__webglTexture = L, mt.get(b.depthTexture).__webglTexture = O;
      const k = mt.get(b);
      k.__hasExternalTextures = true, k.__autoAllocateDepthBuffer = O === void 0, k.__autoAllocateDepthBuffer || rt.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), k.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(b, L) {
      const O = mt.get(b);
      O.__webglFramebuffer = L, O.__useDefaultFramebuffer = L === void 0;
    }, this.setRenderTarget = function(b, L = 0, O = 0) {
      T = b, U = L, A = O;
      let k = true, D = null, it = false, dt = false;
      if (b) {
        const St = mt.get(b);
        if (St.__useDefaultFramebuffer !== void 0) ot.bindFramebuffer(C.FRAMEBUFFER, null), k = false;
        else if (St.__webglFramebuffer === void 0) S.setupRenderTarget(b);
        else if (St.__hasExternalTextures) S.rebindTextures(b, mt.get(b.texture).__webglTexture, mt.get(b.depthTexture).__webglTexture);
        else if (b.depthBuffer) {
          const Et = b.depthTexture;
          if (St.__boundDepthTexture !== Et) {
            if (Et !== null && mt.has(Et) && (b.width !== Et.image.width || b.height !== Et.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            S.setupDepthRenderbuffer(b);
          }
        }
        const Rt = b.texture;
        (Rt.isData3DTexture || Rt.isDataArrayTexture || Rt.isCompressedArrayTexture) && (dt = true);
        const Lt = mt.get(b).__webglFramebuffer;
        b.isWebGLCubeRenderTarget ? (Array.isArray(Lt[L]) ? D = Lt[L][O] : D = Lt[L], it = true) : b.samples > 0 && S.useMultisampledRTT(b) === false ? D = mt.get(b).__webglMultisampledFramebuffer : Array.isArray(Lt) ? D = Lt[O] : D = Lt, v.copy(b.viewport), w.copy(b.scissor), z = b.scissorTest;
      } else v.copy(pt).multiplyScalar(tt).floor(), w.copy(ft).multiplyScalar(tt).floor(), z = zt;
      if (ot.bindFramebuffer(C.FRAMEBUFFER, D) && k && ot.drawBuffers(b, D), ot.viewport(v), ot.scissor(w), ot.setScissorTest(z), it) {
        const St = mt.get(b.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + L, St.__webglTexture, O);
      } else if (dt) {
        const St = mt.get(b.texture), Rt = L || 0;
        C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, St.__webglTexture, O || 0, Rt);
      }
      I = -1;
    }, this.readRenderTargetPixels = function(b, L, O, k, D, it, dt) {
      if (!(b && b.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let wt = mt.get(b).__webglFramebuffer;
      if (b.isWebGLCubeRenderTarget && dt !== void 0 && (wt = wt[dt]), wt) {
        ot.bindFramebuffer(C.FRAMEBUFFER, wt);
        try {
          const St = b.texture, Rt = St.format, Lt = St.type;
          if (!Q.textureFormatReadable(Rt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Q.textureTypeReadable(Lt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= b.width - k && O >= 0 && O <= b.height - D && C.readPixels(L, O, k, D, Nt.convert(Rt), Nt.convert(Lt), it);
        } finally {
          const St = T !== null ? mt.get(T).__webglFramebuffer : null;
          ot.bindFramebuffer(C.FRAMEBUFFER, St);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(b, L, O, k, D, it, dt) {
      if (!(b && b.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let wt = mt.get(b).__webglFramebuffer;
      if (b.isWebGLCubeRenderTarget && dt !== void 0 && (wt = wt[dt]), wt) {
        const St = b.texture, Rt = St.format, Lt = St.type;
        if (!Q.textureFormatReadable(Rt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Q.textureTypeReadable(Lt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (L >= 0 && L <= b.width - k && O >= 0 && O <= b.height - D) {
          ot.bindFramebuffer(C.FRAMEBUFFER, wt);
          const Et = C.createBuffer();
          C.bindBuffer(C.PIXEL_PACK_BUFFER, Et), C.bufferData(C.PIXEL_PACK_BUFFER, it.byteLength, C.STREAM_READ), C.readPixels(L, O, k, D, Nt.convert(Rt), Nt.convert(Lt), 0);
          const te = T !== null ? mt.get(T).__webglFramebuffer : null;
          ot.bindFramebuffer(C.FRAMEBUFFER, te);
          const oe = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return C.flush(), await Of(C, oe, 4), C.bindBuffer(C.PIXEL_PACK_BUFFER, Et), C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, it), C.deleteBuffer(Et), C.deleteSync(oe), it;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(b, L = null, O = 0) {
      b.isTexture !== true && (ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."), L = arguments[0] || null, b = arguments[1]);
      const k = Math.pow(2, -O), D = Math.floor(b.image.width * k), it = Math.floor(b.image.height * k), dt = L !== null ? L.x : 0, wt = L !== null ? L.y : 0;
      S.setTexture2D(b, 0), C.copyTexSubImage2D(C.TEXTURE_2D, O, 0, 0, dt, wt, D, it), ot.unbindTexture();
    }, this.copyTextureToTexture = function(b, L, O = null, k = null, D = 0) {
      b.isTexture !== true && (ro("WebGLRenderer: copyTextureToTexture function signature has changed."), k = arguments[0] || null, b = arguments[1], L = arguments[2], D = arguments[3] || 0, O = null);
      let it, dt, wt, St, Rt, Lt;
      O !== null ? (it = O.max.x - O.min.x, dt = O.max.y - O.min.y, wt = O.min.x, St = O.min.y) : (it = b.image.width, dt = b.image.height, wt = 0, St = 0), k !== null ? (Rt = k.x, Lt = k.y) : (Rt = 0, Lt = 0);
      const Et = Nt.convert(L.format), te = Nt.convert(L.type);
      S.setTexture2D(L, 0), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, L.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, L.unpackAlignment);
      const oe = C.getParameter(C.UNPACK_ROW_LENGTH), ue = C.getParameter(C.UNPACK_IMAGE_HEIGHT), Ve = C.getParameter(C.UNPACK_SKIP_PIXELS), Kt = C.getParameter(C.UNPACK_SKIP_ROWS), Tt = C.getParameter(C.UNPACK_SKIP_IMAGES), Ce = b.isCompressedTexture ? b.mipmaps[D] : b.image;
      C.pixelStorei(C.UNPACK_ROW_LENGTH, Ce.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Ce.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, wt), C.pixelStorei(C.UNPACK_SKIP_ROWS, St), b.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, D, Rt, Lt, it, dt, Et, te, Ce.data) : b.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, D, Rt, Lt, Ce.width, Ce.height, Et, Ce.data) : C.texSubImage2D(C.TEXTURE_2D, D, Rt, Lt, it, dt, Et, te, Ce), C.pixelStorei(C.UNPACK_ROW_LENGTH, oe), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ue), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Ve), C.pixelStorei(C.UNPACK_SKIP_ROWS, Kt), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Tt), D === 0 && L.generateMipmaps && C.generateMipmap(C.TEXTURE_2D), ot.unbindTexture();
    }, this.copyTextureToTexture3D = function(b, L, O = null, k = null, D = 0) {
      b.isTexture !== true && (ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."), O = arguments[0] || null, k = arguments[1] || null, b = arguments[2], L = arguments[3], D = arguments[4] || 0);
      let it, dt, wt, St, Rt, Lt, Et, te, oe;
      const ue = b.isCompressedTexture ? b.mipmaps[D] : b.image;
      O !== null ? (it = O.max.x - O.min.x, dt = O.max.y - O.min.y, wt = O.max.z - O.min.z, St = O.min.x, Rt = O.min.y, Lt = O.min.z) : (it = ue.width, dt = ue.height, wt = ue.depth, St = 0, Rt = 0, Lt = 0), k !== null ? (Et = k.x, te = k.y, oe = k.z) : (Et = 0, te = 0, oe = 0);
      const Ve = Nt.convert(L.format), Kt = Nt.convert(L.type);
      let Tt;
      if (L.isData3DTexture) S.setTexture3D(L, 0), Tt = C.TEXTURE_3D;
      else if (L.isDataArrayTexture || L.isCompressedArrayTexture) S.setTexture2DArray(L, 0), Tt = C.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, L.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, L.unpackAlignment);
      const Ce = C.getParameter(C.UNPACK_ROW_LENGTH), $t = C.getParameter(C.UNPACK_IMAGE_HEIGHT), Je = C.getParameter(C.UNPACK_SKIP_PIXELS), Ai = C.getParameter(C.UNPACK_SKIP_ROWS), ze = C.getParameter(C.UNPACK_SKIP_IMAGES);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, ue.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, ue.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, St), C.pixelStorei(C.UNPACK_SKIP_ROWS, Rt), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Lt), b.isDataTexture || b.isData3DTexture ? C.texSubImage3D(Tt, D, Et, te, oe, it, dt, wt, Ve, Kt, ue.data) : L.isCompressedArrayTexture ? C.compressedTexSubImage3D(Tt, D, Et, te, oe, it, dt, wt, Ve, ue.data) : C.texSubImage3D(Tt, D, Et, te, oe, it, dt, wt, Ve, Kt, ue), C.pixelStorei(C.UNPACK_ROW_LENGTH, Ce), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, $t), C.pixelStorei(C.UNPACK_SKIP_PIXELS, Je), C.pixelStorei(C.UNPACK_SKIP_ROWS, Ai), C.pixelStorei(C.UNPACK_SKIP_IMAGES, ze), D === 0 && L.generateMipmaps && C.generateMipmap(Tt), ot.unbindTexture();
    }, this.initRenderTarget = function(b) {
      mt.get(b).__webglFramebuffer === void 0 && S.setupRenderTarget(b);
    }, this.initTexture = function(b) {
      b.isCubeTexture ? S.setTextureCube(b, 0) : b.isData3DTexture ? S.setTexture3D(b, 0) : b.isDataArrayTexture || b.isCompressedArrayTexture ? S.setTexture2DArray(b, 0) : S.setTexture2D(b, 0), ot.unbindTexture();
    }, this.resetState = function() {
      U = 0, A = 0, T = null, ot.reset(), re.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return Tn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = t === zl ? "display-p3" : "srgb", e.unpackColorSpace = Zt.workingColorSpace === Co ? "display-p3" : "srgb";
  }
}
class MS extends ve {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ln(), this.environmentIntensity = 1, this.environmentRotation = new ln(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Y0 {
  constructor(t, e) {
    this.isInterleavedBuffer = true, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = vl, this.updateRanges = [], this.version = 0, this.uuid = pn();
  }
  onUploadCallback() {
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  setUsage(t) {
    return this.usage = t, this;
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.usage = t.usage, this;
  }
  copyAt(t, e, i) {
    t *= this.stride, i *= e.stride;
    for (let r = 0, s = this.stride; r < s; r++) this.array[t + r] = e.array[i + r];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = pn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), i = new this.constructor(e, this.stride);
    return i.setUsage(this.usage), i;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = pn()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Re = new P();
class vo {
  constructor(t, e, i, r = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = t, this.itemSize = e, this.offset = i, this.normalized = r;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, i = this.data.count; e < i; e++) Re.fromBufferAttribute(this, e), Re.applyMatrix4(t), this.setXYZ(e, Re.x, Re.y, Re.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, i = this.count; e < i; e++) Re.fromBufferAttribute(this, e), Re.applyNormalMatrix(t), this.setXYZ(e, Re.x, Re.y, Re.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, i = this.count; e < i; e++) Re.fromBufferAttribute(this, e), Re.transformDirection(t), this.setXYZ(e, Re.x, Re.y, Re.z);
    return this;
  }
  getComponent(t, e) {
    let i = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (i = sn(i, this.array)), i;
  }
  setComponent(t, e, i) {
    return this.normalized && (i = ee(i, this.array)), this.data.array[t * this.data.stride + this.offset + e] = i, this;
  }
  setX(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = ee(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = sn(e, this.array)), e;
  }
  setXY(t, e, i) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = ee(e, this.array), i = ee(i, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this;
  }
  setXYZ(t, e, i, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = ee(e, this.array), i = ee(i, this.array), r = ee(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this;
  }
  setXYZW(t, e, i, r, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = ee(e, this.array), i = ee(i, this.array), r = ee(r, this.array), s = ee(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = r, this.data.array[t + 3] = s, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let i = 0; i < this.count; i++) {
        const r = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) e.push(this.data.array[r + s]);
      }
      return new an(new this.array.constructor(e), this.itemSize, this.normalized);
    } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new vo(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let i = 0; i < this.count; i++) {
        const r = i * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) e.push(this.data.array[r + s]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: e, normalized: this.normalized };
    } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class K0 extends In {
  constructor(t) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Bt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let Gi;
const Mr = new P(), Wi = new P(), Xi = new P(), qi = new J(), Sr = new J(), id = new ie(), Os = new P(), Er = new P(), Fs = new P(), Ch = new J(), fa = new J(), Th = new J();
class $0 extends ve {
  constructor(t = new K0()) {
    if (super(), this.isSprite = true, this.type = "Sprite", Gi === void 0) {
      Gi = new Se();
      const e = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), i = new Y0(e, 5);
      Gi.setIndex([0, 1, 2, 0, 2, 3]), Gi.setAttribute("position", new vo(i, 3, 0, false)), Gi.setAttribute("uv", new vo(i, 2, 3, false));
    }
    this.geometry = Gi, this.material = t, this.center = new J(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), Wi.setFromMatrixScale(this.matrixWorld), id.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), Xi.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && Wi.multiplyScalar(-Xi.z);
    const i = this.material.rotation;
    let r, s;
    i !== 0 && (s = Math.cos(i), r = Math.sin(i));
    const o = this.center;
    Bs(Os.set(-0.5, -0.5, 0), Xi, o, Wi, r, s), Bs(Er.set(0.5, -0.5, 0), Xi, o, Wi, r, s), Bs(Fs.set(0.5, 0.5, 0), Xi, o, Wi, r, s), Ch.set(0, 0), fa.set(1, 0), Th.set(1, 1);
    let a = t.ray.intersectTriangle(Os, Er, Fs, false, Mr);
    if (a === null && (Bs(Er.set(-0.5, 0.5, 0), Xi, o, Wi, r, s), fa.set(0, 1), a = t.ray.intersectTriangle(Os, Fs, Er, false, Mr), a === null)) return;
    const l = t.ray.origin.distanceTo(Mr);
    l < t.near || l > t.far || e.push({ distance: l, point: Mr.clone(), uv: We.getInterpolation(Mr, Os, Er, Fs, Ch, fa, Th, new J()), face: null, object: this });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function Bs(n, t, e, i, r, s) {
  qi.subVectors(n, e).addScalar(0.5).multiply(i), r !== void 0 ? (Sr.x = s * qi.x - r * qi.y, Sr.y = r * qi.x + s * qi.y) : Sr.copy(qi), n.copy(t), n.x += Sr.x, n.y += Sr.y, n.applyMatrix4(id);
}
class Po extends In {
  constructor(t) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Bt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const go = new P(), xo = new P(), Ah = new ie(), Cr = new Qr(), ks = new Jr(), ma = new P(), Ph = new P();
class rd extends ve {
  constructor(t = new Se(), e = new Po()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, i = [0];
      for (let r = 1, s = e.count; r < s; r++) go.fromBufferAttribute(e, r - 1), xo.fromBufferAttribute(e, r), i[r] = i[r - 1], i[r] += go.distanceTo(xo);
      t.setAttribute("lineDistance", new Qt(i, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const i = this.geometry, r = this.matrixWorld, s = t.params.Line.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), ks.copy(i.boundingSphere), ks.applyMatrix4(r), ks.radius += s, t.ray.intersectsSphere(ks) === false) return;
    Ah.copy(r).invert(), Cr.copy(t.ray).applyMatrix4(Ah);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = i.index, d = i.attributes.position;
    if (h !== null) {
      const f = Math.max(0, o.start), _ = Math.min(h.count, o.start + o.count);
      for (let x = f, p = _ - 1; x < p; x += c) {
        const m = h.getX(x), E = h.getX(x + 1), y = Vs(this, t, Cr, l, m, E);
        y && e.push(y);
      }
      if (this.isLineLoop) {
        const x = h.getX(_ - 1), p = h.getX(f), m = Vs(this, t, Cr, l, x, p);
        m && e.push(m);
      }
    } else {
      const f = Math.max(0, o.start), _ = Math.min(d.count, o.start + o.count);
      for (let x = f, p = _ - 1; x < p; x += c) {
        const m = Vs(this, t, Cr, l, x, x + 1);
        m && e.push(m);
      }
      if (this.isLineLoop) {
        const x = Vs(this, t, Cr, l, _ - 1, f);
        x && e.push(x);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const r = e[i[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Vs(n, t, e, i, r, s) {
  const o = n.geometry.attributes.position;
  if (go.fromBufferAttribute(o, r), xo.fromBufferAttribute(o, s), e.distanceSqToSegment(go, xo, ma, Ph) > i) return;
  ma.applyMatrix4(n.matrixWorld);
  const l = t.ray.origin.distanceTo(ma);
  if (!(l < t.near || l > t.far)) return { distance: l, point: Ph.clone().applyMatrix4(n.matrixWorld), index: r, face: null, faceIndex: null, barycoord: null, object: n };
}
const Rh = new P(), Lh = new P();
class Z0 extends rd {
  constructor(t, e) {
    super(t, e), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, i = [];
      for (let r = 0, s = e.count; r < s; r += 2) Rh.fromBufferAttribute(e, r), Lh.fromBufferAttribute(e, r + 1), i[r] = r === 0 ? 0 : i[r - 1], i[r + 1] = i[r] + Rh.distanceTo(Lh);
      t.setAttribute("lineDistance", new Qt(i, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class J0 extends In {
  constructor(t) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Bt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const Dh = new ie(), xl = new Qr(), zs = new Jr(), Hs = new P();
class SS extends ve {
  constructor(t = new Se(), e = new J0()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const i = this.geometry, r = this.matrixWorld, s = t.params.Points.threshold, o = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), zs.copy(i.boundingSphere), zs.applyMatrix4(r), zs.radius += s, t.ray.intersectsSphere(zs) === false) return;
    Dh.copy(r).invert(), xl.copy(t.ray).applyMatrix4(Dh);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = i.index, u = i.attributes.position;
    if (c !== null) {
      const d = Math.max(0, o.start), f = Math.min(c.count, o.start + o.count);
      for (let _ = d, x = f; _ < x; _++) {
        const p = c.getX(_);
        Hs.fromBufferAttribute(u, p), Ih(Hs, p, l, r, t, e, this);
      }
    } else {
      const d = Math.max(0, o.start), f = Math.min(u.count, o.start + o.count);
      for (let _ = d, x = f; _ < x; _++) Hs.fromBufferAttribute(u, _), Ih(Hs, _, l, r, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, i = Object.keys(e);
    if (i.length > 0) {
      const r = e[i[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
function Ih(n, t, e, i, r, s, o) {
  const a = xl.distanceSqToPoint(n);
  if (a < e) {
    const l = new P();
    xl.closestPointToPoint(n, l), l.applyMatrix4(i);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: t, face: null, faceIndex: null, barycoord: null, object: o });
  }
}
class ES extends Pe {
  constructor(t, e, i, r, s, o, a, l, c) {
    super(t, e, i, r, s, o, a, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class _n {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(t, e) {
    const i = this.getUtoTmapping(t);
    return this.getPoint(i, e);
  }
  getPoints(t = 5) {
    const e = [];
    for (let i = 0; i <= t; i++) e.push(this.getPoint(i / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    const e = [];
    for (let i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
    return e;
  }
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  getLengths(t = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
    this.needsUpdate = false;
    const e = [];
    let i, r = this.getPoint(0), s = 0;
    e.push(0);
    for (let o = 1; o <= t; o++) i = this.getPoint(o / t), s += i.distanceTo(r), e.push(s), r = i;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(t, e) {
    const i = this.getLengths();
    let r = 0;
    const s = i.length;
    let o;
    e ? o = e : o = t * i[s - 1];
    let a = 0, l = s - 1, c;
    for (; a <= l; ) if (r = Math.floor(a + (l - a) / 2), c = i[r] - o, c < 0) a = r + 1;
    else if (c > 0) l = r - 1;
    else {
      l = r;
      break;
    }
    if (r = l, i[r] === o) return r / (s - 1);
    const h = i[r], d = i[r + 1] - h, f = (o - h) / d;
    return (r + f) / (s - 1);
  }
  getTangent(t, e) {
    let r = t - 1e-4, s = t + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const o = this.getPoint(r), a = this.getPoint(s), l = e || (o.isVector2 ? new J() : new P());
    return l.copy(a).sub(o).normalize(), l;
  }
  getTangentAt(t, e) {
    const i = this.getUtoTmapping(t);
    return this.getTangent(i, e);
  }
  computeFrenetFrames(t, e) {
    const i = new P(), r = [], s = [], o = [], a = new P(), l = new ie();
    for (let f = 0; f <= t; f++) {
      const _ = f / t;
      r[f] = this.getTangentAt(_, new P());
    }
    s[0] = new P(), o[0] = new P();
    let c = Number.MAX_VALUE;
    const h = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
    h <= c && (c = h, i.set(1, 0, 0)), u <= c && (c = u, i.set(0, 1, 0)), d <= c && i.set(0, 0, 1), a.crossVectors(r[0], i).normalize(), s[0].crossVectors(r[0], a), o[0].crossVectors(r[0], s[0]);
    for (let f = 1; f <= t; f++) {
      if (s[f] = s[f - 1].clone(), o[f] = o[f - 1].clone(), a.crossVectors(r[f - 1], r[f]), a.length() > Number.EPSILON) {
        a.normalize();
        const _ = Math.acos(be(r[f - 1].dot(r[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(a, _));
      }
      o[f].crossVectors(r[f], s[f]);
    }
    if (e === true) {
      let f = Math.acos(be(s[0].dot(s[t]), -1, 1));
      f /= t, r[0].dot(a.crossVectors(s[0], s[t])) > 0 && (f = -f);
      for (let _ = 1; _ <= t; _++) s[_].applyMatrix4(l.makeRotationAxis(r[_], f * _)), o[_].crossVectors(r[_], s[_]);
    }
    return { tangents: r, normals: s, binormals: o };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
  toJSON() {
    const t = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
    return t.arcLengthDivisions = this.arcLengthDivisions, t.type = this.type, t;
  }
  fromJSON(t) {
    return this.arcLengthDivisions = t.arcLengthDivisions, this;
  }
}
class jl extends _n {
  constructor(t = 0, e = 0, i = 1, r = 1, s = 0, o = Math.PI * 2, a = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = l;
  }
  getPoint(t, e = new J()) {
    const i = e, r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; ) s += r;
    for (; s > r; ) s -= r;
    s < Number.EPSILON && (o ? s = 0 : s = r), this.aClockwise === true && !o && (s === r ? s = -r : s = s - r);
    const a = this.aStartAngle + t * s;
    let l = this.aX + this.xRadius * Math.cos(a), c = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = l - this.aX, f = c - this.aY;
      l = d * h - f * u + this.aX, c = d * u + f * h + this.aY;
    }
    return i.set(l, c);
  }
  copy(t) {
    return super.copy(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.aX = this.aX, t.aY = this.aY, t.xRadius = this.xRadius, t.yRadius = this.yRadius, t.aStartAngle = this.aStartAngle, t.aEndAngle = this.aEndAngle, t.aClockwise = this.aClockwise, t.aRotation = this.aRotation, t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.aX = t.aX, this.aY = t.aY, this.xRadius = t.xRadius, this.yRadius = t.yRadius, this.aStartAngle = t.aStartAngle, this.aEndAngle = t.aEndAngle, this.aClockwise = t.aClockwise, this.aRotation = t.aRotation, this;
  }
}
class Q0 extends jl {
  constructor(t, e, i, r, s, o) {
    super(t, e, i, i, r, s, o), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Yl() {
  let n = 0, t = 0, e = 0, i = 0;
  function r(s, o, a, l) {
    n = s, t = a, e = -3 * s + 3 * o - 2 * a - l, i = 2 * s - 2 * o + a + l;
  }
  return { initCatmullRom: function(s, o, a, l, c) {
    r(o, a, c * (a - s), c * (l - o));
  }, initNonuniformCatmullRom: function(s, o, a, l, c, h, u) {
    let d = (o - s) / c - (a - s) / (c + h) + (a - o) / h, f = (a - o) / h - (l - o) / (h + u) + (l - a) / u;
    d *= h, f *= h, r(o, a, d, f);
  }, calc: function(s) {
    const o = s * s, a = o * s;
    return n + t * s + e * o + i * a;
  } };
}
const Gs = new P(), _a = new Yl(), va = new Yl(), ga = new Yl();
class tx extends _n {
  constructor(t = [], e = false, i = "centripetal", r = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = i, this.tension = r;
  }
  getPoint(t, e = new P()) {
    const i = e, r = this.points, s = r.length, o = (s - (this.closed ? 0 : 1)) * t;
    let a = Math.floor(o), l = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : l === 0 && a === s - 1 && (a = s - 2, l = 1);
    let c, h;
    this.closed || a > 0 ? c = r[(a - 1) % s] : (Gs.subVectors(r[0], r[1]).add(r[0]), c = Gs);
    const u = r[a % s], d = r[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = r[(a + 2) % s] : (Gs.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), h = Gs), this.curveType === "centripetal" || this.curveType === "chordal") {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(c.distanceToSquared(u), f), x = Math.pow(u.distanceToSquared(d), f), p = Math.pow(d.distanceToSquared(h), f);
      x < 1e-4 && (x = 1), _ < 1e-4 && (_ = x), p < 1e-4 && (p = x), _a.initNonuniformCatmullRom(c.x, u.x, d.x, h.x, _, x, p), va.initNonuniformCatmullRom(c.y, u.y, d.y, h.y, _, x, p), ga.initNonuniformCatmullRom(c.z, u.z, d.z, h.z, _, x, p);
    } else this.curveType === "catmullrom" && (_a.initCatmullRom(c.x, u.x, d.x, h.x, this.tension), va.initCatmullRom(c.y, u.y, d.y, h.y, this.tension), ga.initCatmullRom(c.z, u.z, d.z, h.z, this.tension));
    return i.set(_a.calc(l), va.calc(l), ga.calc(l)), i;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const r = t.points[e];
      this.points.push(r.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, i = this.points.length; e < i; e++) {
      const r = this.points[e];
      t.points.push(r.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const r = t.points[e];
      this.points.push(new P().fromArray(r));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function Uh(n, t, e, i, r) {
  const s = (i - t) * 0.5, o = (r - e) * 0.5, a = n * n, l = n * a;
  return (2 * e - 2 * i + s + o) * l + (-3 * e + 3 * i - 2 * s - o) * a + s * n + e;
}
function ex(n, t) {
  const e = 1 - n;
  return e * e * t;
}
function nx(n, t) {
  return 2 * (1 - n) * n * t;
}
function ix(n, t) {
  return n * n * t;
}
function Nr(n, t, e, i) {
  return ex(n, t) + nx(n, e) + ix(n, i);
}
function rx(n, t) {
  const e = 1 - n;
  return e * e * e * t;
}
function sx(n, t) {
  const e = 1 - n;
  return 3 * e * e * n * t;
}
function ox(n, t) {
  return 3 * (1 - n) * n * n * t;
}
function ax(n, t) {
  return n * n * n * t;
}
function Or(n, t, e, i, r) {
  return rx(n, t) + sx(n, e) + ox(n, i) + ax(n, r);
}
class sd extends _n {
  constructor(t = new J(), e = new J(), i = new J(), r = new J()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = r;
  }
  getPoint(t, e = new J()) {
    const i = e, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return i.set(Or(t, r.x, s.x, o.x, a.x), Or(t, r.y, s.y, o.y, a.y)), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class lx extends _n {
  constructor(t = new P(), e = new P(), i = new P(), r = new P()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = r;
  }
  getPoint(t, e = new P()) {
    const i = e, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return i.set(Or(t, r.x, s.x, o.x, a.x), Or(t, r.y, s.y, o.y, a.y), Or(t, r.z, s.z, o.z, a.z)), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this.v3.copy(t.v3), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t.v3 = this.v3.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this.v3.fromArray(t.v3), this;
  }
}
class od extends _n {
  constructor(t = new J(), e = new J()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new J()) {
    const i = e;
    return t === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new J()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class cx extends _n {
  constructor(t = new P(), e = new P()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new P()) {
    const i = e;
    return t === 1 ? i.copy(this.v2) : (i.copy(this.v2).sub(this.v1), i.multiplyScalar(t).add(this.v1)), i;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new P()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class ad extends _n {
  constructor(t = new J(), e = new J(), i = new J()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = i;
  }
  getPoint(t, e = new J()) {
    const i = e, r = this.v0, s = this.v1, o = this.v2;
    return i.set(Nr(t, r.x, s.x, o.x), Nr(t, r.y, s.y, o.y)), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class hx extends _n {
  constructor(t = new P(), e = new P(), i = new P()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = i;
  }
  getPoint(t, e = new P()) {
    const i = e, r = this.v0, s = this.v1, o = this.v2;
    return i.set(Nr(t, r.x, s.x, o.x), Nr(t, r.y, s.y, o.y), Nr(t, r.z, s.z, o.z)), i;
  }
  copy(t) {
    return super.copy(t), this.v0.copy(t.v0), this.v1.copy(t.v1), this.v2.copy(t.v2), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.v0 = this.v0.toArray(), t.v1 = this.v1.toArray(), t.v2 = this.v2.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.v0.fromArray(t.v0), this.v1.fromArray(t.v1), this.v2.fromArray(t.v2), this;
  }
}
class ld extends _n {
  constructor(t = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new J()) {
    const i = e, r = this.points, s = (r.length - 1) * t, o = Math.floor(s), a = s - o, l = r[o === 0 ? o : o - 1], c = r[o], h = r[o > r.length - 2 ? r.length - 1 : o + 1], u = r[o > r.length - 3 ? r.length - 1 : o + 2];
    return i.set(Uh(a, l.x, c.x, h.x, u.x), Uh(a, l.y, c.y, h.y, u.y)), i;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const r = t.points[e];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, i = this.points.length; e < i; e++) {
      const r = this.points[e];
      t.points.push(r.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, i = t.points.length; e < i; e++) {
      const r = t.points[e];
      this.points.push(new J().fromArray(r));
    }
    return this;
  }
}
var bl = Object.freeze({ __proto__: null, ArcCurve: Q0, CatmullRomCurve3: tx, CubicBezierCurve: sd, CubicBezierCurve3: lx, EllipseCurve: jl, LineCurve: od, LineCurve3: cx, QuadraticBezierCurve: ad, QuadraticBezierCurve3: hx, SplineCurve: ld });
class ux extends _n {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const i = t.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new bl[i](e, t));
    }
    return this;
  }
  getPoint(t, e) {
    const i = t * this.getLength(), r = this.getCurveLengths();
    let s = 0;
    for (; s < r.length; ) {
      if (r[s] >= i) {
        const o = r[s] - i, a = this.curves[s], l = a.getLength(), c = l === 0 ? 0 : 1 - o / l;
        return a.getPointAt(c, e);
      }
      s++;
    }
    return null;
  }
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let i = 0, r = this.curves.length; i < r; i++) e += this.curves[i].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let i = 0; i <= t; i++) e.push(this.getPoint(i / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let i;
    for (let r = 0, s = this.curves; r < s.length; r++) {
      const o = s[r], a = o.isEllipseCurve ? t * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? t * o.points.length : t, l = o.getPoints(a);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        i && i.equals(h) || (e.push(h), i = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, i = t.curves.length; e < i; e++) {
      const r = t.curves[e];
      this.curves.push(r.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, i = this.curves.length; e < i; e++) {
      const r = this.curves[e];
      t.curves.push(r.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, i = t.curves.length; e < i; e++) {
      const r = t.curves[e];
      this.curves.push(new bl[r.type]().fromJSON(r));
    }
    return this;
  }
}
class Nh extends ux {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new J(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const i = new od(this.currentPoint.clone(), new J(t, e));
    return this.curves.push(i), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, i, r) {
    const s = new ad(this.currentPoint.clone(), new J(t, e), new J(i, r));
    return this.curves.push(s), this.currentPoint.set(i, r), this;
  }
  bezierCurveTo(t, e, i, r, s, o) {
    const a = new sd(this.currentPoint.clone(), new J(t, e), new J(i, r), new J(s, o));
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), i = new ld(e);
    return this.curves.push(i), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, i, r, s, o) {
    const a = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(t + a, e + l, i, r, s, o), this;
  }
  absarc(t, e, i, r, s, o) {
    return this.absellipse(t, e, i, i, r, s, o), this;
  }
  ellipse(t, e, i, r, s, o, a, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + c, e + h, i, r, s, o, a, l), this;
  }
  absellipse(t, e, i, r, s, o, a, l) {
    const c = new jl(t, e, i, r, s, o, a, l);
    if (this.curves.length > 0) {
      const u = c.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(c);
    const h = c.getPoint(1);
    return this.currentPoint.copy(h), this;
  }
  copy(t) {
    return super.copy(t), this.currentPoint.copy(t.currentPoint), this;
  }
  toJSON() {
    const t = super.toJSON();
    return t.currentPoint = this.currentPoint.toArray(), t;
  }
  fromJSON(t) {
    return super.fromJSON(t), this.currentPoint.fromArray(t.currentPoint), this;
  }
}
class Kl extends Se {
  constructor(t = 1, e = 1, i = 1, r = 32, s = 1, o = false, a = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: i, radialSegments: r, heightSegments: s, openEnded: o, thetaStart: a, thetaLength: l };
    const c = this;
    r = Math.floor(r), s = Math.floor(s);
    const h = [], u = [], d = [], f = [];
    let _ = 0;
    const x = [], p = i / 2;
    let m = 0;
    E(), o === false && (t > 0 && y(true), e > 0 && y(false)), this.setIndex(h), this.setAttribute("position", new Qt(u, 3)), this.setAttribute("normal", new Qt(d, 3)), this.setAttribute("uv", new Qt(f, 2));
    function E() {
      const M = new P(), U = new P();
      let A = 0;
      const T = (e - t) / i;
      for (let I = 0; I <= s; I++) {
        const Z = [], v = I / s, w = v * (e - t) + t;
        for (let z = 0; z <= r; z++) {
          const B = z / r, V = B * l + a, $ = Math.sin(V), F = Math.cos(V);
          U.x = w * $, U.y = -v * i + p, U.z = w * F, u.push(U.x, U.y, U.z), M.set($, T, F).normalize(), d.push(M.x, M.y, M.z), f.push(B, 1 - v), Z.push(_++);
        }
        x.push(Z);
      }
      for (let I = 0; I < r; I++) for (let Z = 0; Z < s; Z++) {
        const v = x[Z][I], w = x[Z + 1][I], z = x[Z + 1][I + 1], B = x[Z][I + 1];
        t > 0 && (h.push(v, w, B), A += 3), e > 0 && (h.push(w, z, B), A += 3);
      }
      c.addGroup(m, A, 0), m += A;
    }
    function y(M) {
      const U = _, A = new J(), T = new P();
      let I = 0;
      const Z = M === true ? t : e, v = M === true ? 1 : -1;
      for (let z = 1; z <= r; z++) u.push(0, p * v, 0), d.push(0, v, 0), f.push(0.5, 0.5), _++;
      const w = _;
      for (let z = 0; z <= r; z++) {
        const V = z / r * l + a, $ = Math.cos(V), F = Math.sin(V);
        T.x = Z * F, T.y = p * v, T.z = Z * $, u.push(T.x, T.y, T.z), d.push(0, v, 0), A.x = $ * 0.5 + 0.5, A.y = F * 0.5 * v + 0.5, f.push(A.x, A.y), _++;
      }
      for (let z = 0; z < r; z++) {
        const B = U + z, V = w + z;
        M === true ? h.push(V, V + 1, B) : h.push(V + 1, V, B), I += 3;
      }
      c.addGroup(m, I, M === true ? 1 : 2), m += I;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Kl(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
const Ws = new P(), Xs = new P(), xa = new P(), qs = new We();
class CS extends Se {
  constructor(t = null, e = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t, thresholdAngle: e }, t !== null) {
      const r = Math.pow(10, 4), s = Math.cos(nr * e), o = t.getIndex(), a = t.getAttribute("position"), l = o ? o.count : a.count, c = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), d = {}, f = [];
      for (let _ = 0; _ < l; _ += 3) {
        o ? (c[0] = o.getX(_), c[1] = o.getX(_ + 1), c[2] = o.getX(_ + 2)) : (c[0] = _, c[1] = _ + 1, c[2] = _ + 2);
        const { a: x, b: p, c: m } = qs;
        if (x.fromBufferAttribute(a, c[0]), p.fromBufferAttribute(a, c[1]), m.fromBufferAttribute(a, c[2]), qs.getNormal(xa), u[0] = `${Math.round(x.x * r)},${Math.round(x.y * r)},${Math.round(x.z * r)}`, u[1] = `${Math.round(p.x * r)},${Math.round(p.y * r)},${Math.round(p.z * r)}`, u[2] = `${Math.round(m.x * r)},${Math.round(m.y * r)},${Math.round(m.z * r)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0])) for (let E = 0; E < 3; E++) {
          const y = (E + 1) % 3, M = u[E], U = u[y], A = qs[h[E]], T = qs[h[y]], I = `${M}_${U}`, Z = `${U}_${M}`;
          Z in d && d[Z] ? (xa.dot(d[Z].normal) <= s && (f.push(A.x, A.y, A.z), f.push(T.x, T.y, T.z)), d[Z] = null) : I in d || (d[I] = { index0: c[E], index1: c[y], normal: xa.clone() });
        }
      }
      for (const _ in d) if (d[_]) {
        const { index0: x, index1: p } = d[_];
        Ws.fromBufferAttribute(a, x), Xs.fromBufferAttribute(a, p), f.push(Ws.x, Ws.y, Ws.z), f.push(Xs.x, Xs.y, Xs.z);
      }
      this.setAttribute("position", new Qt(f, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
class cd extends Nh {
  constructor(t) {
    super(t), this.uuid = pn(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    const e = [];
    for (let i = 0, r = this.holes.length; i < r; i++) e[i] = this.holes[i].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, i = t.holes.length; e < i; e++) {
      const r = t.holes[e];
      this.holes.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, i = this.holes.length; e < i; e++) {
      const r = this.holes[e];
      t.holes.push(r.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, i = t.holes.length; e < i; e++) {
      const r = t.holes[e];
      this.holes.push(new Nh().fromJSON(r));
    }
    return this;
  }
}
const dx = { triangulate: function(n, t, e = 2) {
  const i = t && t.length, r = i ? t[0] * e : n.length;
  let s = hd(n, 0, r, e, true);
  const o = [];
  if (!s || s.next === s.prev) return o;
  let a, l, c, h, u, d, f;
  if (i && (s = vx(n, t, s, e)), n.length > 80 * e) {
    a = c = n[0], l = h = n[1];
    for (let _ = e; _ < r; _ += e) u = n[_], d = n[_ + 1], u < a && (a = u), d < l && (l = d), u > c && (c = u), d > h && (h = d);
    f = Math.max(c - a, h - l), f = f !== 0 ? 32767 / f : 0;
  }
  return Vr(s, o, e, a, l, f, 0), o;
} };
function hd(n, t, e, i, r) {
  let s, o;
  if (r === Ax(n, t, e, i) > 0) for (s = t; s < e; s += i) o = Oh(s, n[s], n[s + 1], o);
  else for (s = e - i; s >= t; s -= i) o = Oh(s, n[s], n[s + 1], o);
  return o && Ro(o, o.next) && (Hr(o), o = o.next), o;
}
function yi(n, t) {
  if (!n) return n;
  t || (t = n);
  let e = n, i;
  do
    if (i = false, !e.steiner && (Ro(e, e.next) || ce(e.prev, e, e.next) === 0)) {
      if (Hr(e), e = t = e.prev, e === e.next) break;
      i = true;
    } else e = e.next;
  while (i || e !== t);
  return t;
}
function Vr(n, t, e, i, r, s, o) {
  if (!n) return;
  !o && s && wx(n, i, r, s);
  let a = n, l, c;
  for (; n.prev !== n.next; ) {
    if (l = n.prev, c = n.next, s ? fx(n, i, r, s) : px(n)) {
      t.push(l.i / e | 0), t.push(n.i / e | 0), t.push(c.i / e | 0), Hr(n), n = c.next, a = c.next;
      continue;
    }
    if (n = c, n === a) {
      o ? o === 1 ? (n = mx(yi(n), t, e), Vr(n, t, e, i, r, s, 2)) : o === 2 && _x(n, t, e, i, r, s) : Vr(yi(n), t, e, i, r, s, 1);
      break;
    }
  }
}
function px(n) {
  const t = n.prev, e = n, i = n.next;
  if (ce(t, e, i) >= 0) return false;
  const r = t.x, s = e.x, o = i.x, a = t.y, l = e.y, c = i.y, h = r < s ? r < o ? r : o : s < o ? s : o, u = a < l ? a < c ? a : c : l < c ? l : c, d = r > s ? r > o ? r : o : s > o ? s : o, f = a > l ? a > c ? a : c : l > c ? l : c;
  let _ = i.next;
  for (; _ !== t; ) {
    if (_.x >= h && _.x <= d && _.y >= u && _.y <= f && Zi(r, a, s, l, o, c, _.x, _.y) && ce(_.prev, _, _.next) >= 0) return false;
    _ = _.next;
  }
  return true;
}
function fx(n, t, e, i) {
  const r = n.prev, s = n, o = n.next;
  if (ce(r, s, o) >= 0) return false;
  const a = r.x, l = s.x, c = o.x, h = r.y, u = s.y, d = o.y, f = a < l ? a < c ? a : c : l < c ? l : c, _ = h < u ? h < d ? h : d : u < d ? u : d, x = a > l ? a > c ? a : c : l > c ? l : c, p = h > u ? h > d ? h : d : u > d ? u : d, m = yl(f, _, t, e, i), E = yl(x, p, t, e, i);
  let y = n.prevZ, M = n.nextZ;
  for (; y && y.z >= m && M && M.z <= E; ) {
    if (y.x >= f && y.x <= x && y.y >= _ && y.y <= p && y !== r && y !== o && Zi(a, h, l, u, c, d, y.x, y.y) && ce(y.prev, y, y.next) >= 0 || (y = y.prevZ, M.x >= f && M.x <= x && M.y >= _ && M.y <= p && M !== r && M !== o && Zi(a, h, l, u, c, d, M.x, M.y) && ce(M.prev, M, M.next) >= 0)) return false;
    M = M.nextZ;
  }
  for (; y && y.z >= m; ) {
    if (y.x >= f && y.x <= x && y.y >= _ && y.y <= p && y !== r && y !== o && Zi(a, h, l, u, c, d, y.x, y.y) && ce(y.prev, y, y.next) >= 0) return false;
    y = y.prevZ;
  }
  for (; M && M.z <= E; ) {
    if (M.x >= f && M.x <= x && M.y >= _ && M.y <= p && M !== r && M !== o && Zi(a, h, l, u, c, d, M.x, M.y) && ce(M.prev, M, M.next) >= 0) return false;
    M = M.nextZ;
  }
  return true;
}
function mx(n, t, e) {
  let i = n;
  do {
    const r = i.prev, s = i.next.next;
    !Ro(r, s) && ud(r, i, i.next, s) && zr(r, s) && zr(s, r) && (t.push(r.i / e | 0), t.push(i.i / e | 0), t.push(s.i / e | 0), Hr(i), Hr(i.next), i = n = s), i = i.next;
  } while (i !== n);
  return yi(i);
}
function _x(n, t, e, i, r, s) {
  let o = n;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Ex(o, a)) {
        let l = dd(o, a);
        o = yi(o, o.next), l = yi(l, l.next), Vr(o, t, e, i, r, s, 0), Vr(l, t, e, i, r, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== n);
}
function vx(n, t, e, i) {
  const r = [];
  let s, o, a, l, c;
  for (s = 0, o = t.length; s < o; s++) a = t[s] * i, l = s < o - 1 ? t[s + 1] * i : n.length, c = hd(n, a, l, i, false), c === c.next && (c.steiner = true), r.push(Sx(c));
  for (r.sort(gx), s = 0; s < r.length; s++) e = xx(r[s], e);
  return e;
}
function gx(n, t) {
  return n.x - t.x;
}
function xx(n, t) {
  const e = bx(n, t);
  if (!e) return t;
  const i = dd(e, n);
  return yi(i, i.next), yi(e, e.next);
}
function bx(n, t) {
  let e = t, i = -1 / 0, r;
  const s = n.x, o = n.y;
  do {
    if (o <= e.y && o >= e.next.y && e.next.y !== e.y) {
      const d = e.x + (o - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (d <= s && d > i && (i = d, r = e.x < e.next.x ? e : e.next, d === s)) return r;
    }
    e = e.next;
  } while (e !== t);
  if (!r) return null;
  const a = r, l = r.x, c = r.y;
  let h = 1 / 0, u;
  e = r;
  do
    s >= e.x && e.x >= l && s !== e.x && Zi(o < c ? s : i, o, l, c, o < c ? i : s, o, e.x, e.y) && (u = Math.abs(o - e.y) / (s - e.x), zr(e, n) && (u < h || u === h && (e.x > r.x || e.x === r.x && yx(r, e))) && (r = e, h = u)), e = e.next;
  while (e !== a);
  return r;
}
function yx(n, t) {
  return ce(n.prev, n, t.prev) < 0 && ce(t.next, n, n.next) < 0;
}
function wx(n, t, e, i) {
  let r = n;
  do
    r.z === 0 && (r.z = yl(r.x, r.y, t, e, i)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== n);
  r.prevZ.nextZ = null, r.prevZ = null, Mx(r);
}
function Mx(n) {
  let t, e, i, r, s, o, a, l, c = 1;
  do {
    for (e = n, n = null, s = null, o = 0; e; ) {
      for (o++, i = e, a = 0, t = 0; t < c && (a++, i = i.nextZ, !!i); t++) ;
      for (l = c; a > 0 || l > 0 && i; ) a !== 0 && (l === 0 || !i || e.z <= i.z) ? (r = e, e = e.nextZ, a--) : (r = i, i = i.nextZ, l--), s ? s.nextZ = r : n = r, r.prevZ = s, s = r;
      e = i;
    }
    s.nextZ = null, c *= 2;
  } while (o > 1);
  return n;
}
function yl(n, t, e, i, r) {
  return n = (n - e) * r | 0, t = (t - i) * r | 0, n = (n | n << 8) & 16711935, n = (n | n << 4) & 252645135, n = (n | n << 2) & 858993459, n = (n | n << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, n | t << 1;
}
function Sx(n) {
  let t = n, e = n;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== n);
  return e;
}
function Zi(n, t, e, i, r, s, o, a) {
  return (r - o) * (t - a) >= (n - o) * (s - a) && (n - o) * (i - a) >= (e - o) * (t - a) && (e - o) * (s - a) >= (r - o) * (i - a);
}
function Ex(n, t) {
  return n.next.i !== t.i && n.prev.i !== t.i && !Cx(n, t) && (zr(n, t) && zr(t, n) && Tx(n, t) && (ce(n.prev, n, t.prev) || ce(n, t.prev, t)) || Ro(n, t) && ce(n.prev, n, n.next) > 0 && ce(t.prev, t, t.next) > 0);
}
function ce(n, t, e) {
  return (t.y - n.y) * (e.x - t.x) - (t.x - n.x) * (e.y - t.y);
}
function Ro(n, t) {
  return n.x === t.x && n.y === t.y;
}
function ud(n, t, e, i) {
  const r = Ys(ce(n, t, e)), s = Ys(ce(n, t, i)), o = Ys(ce(e, i, n)), a = Ys(ce(e, i, t));
  return !!(r !== s && o !== a || r === 0 && js(n, e, t) || s === 0 && js(n, i, t) || o === 0 && js(e, n, i) || a === 0 && js(e, t, i));
}
function js(n, t, e) {
  return t.x <= Math.max(n.x, e.x) && t.x >= Math.min(n.x, e.x) && t.y <= Math.max(n.y, e.y) && t.y >= Math.min(n.y, e.y);
}
function Ys(n) {
  return n > 0 ? 1 : n < 0 ? -1 : 0;
}
function Cx(n, t) {
  let e = n;
  do {
    if (e.i !== n.i && e.next.i !== n.i && e.i !== t.i && e.next.i !== t.i && ud(e, e.next, n, t)) return true;
    e = e.next;
  } while (e !== n);
  return false;
}
function zr(n, t) {
  return ce(n.prev, n, n.next) < 0 ? ce(n, t, n.next) >= 0 && ce(n, n.prev, t) >= 0 : ce(n, t, n.prev) < 0 || ce(n, n.next, t) < 0;
}
function Tx(n, t) {
  let e = n, i = false;
  const r = (n.x + t.x) / 2, s = (n.y + t.y) / 2;
  do
    e.y > s != e.next.y > s && e.next.y !== e.y && r < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x && (i = !i), e = e.next;
  while (e !== n);
  return i;
}
function dd(n, t) {
  const e = new wl(n.i, n.x, n.y), i = new wl(t.i, t.x, t.y), r = n.next, s = t.prev;
  return n.next = t, t.prev = n, e.next = r, r.prev = e, i.next = e, e.prev = i, s.next = i, i.prev = s, i;
}
function Oh(n, t, e, i) {
  const r = new wl(n, t, e);
  return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
}
function Hr(n) {
  n.next.prev = n.prev, n.prev.next = n.next, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ);
}
function wl(n, t, e) {
  this.i = n, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
function Ax(n, t, e, i) {
  let r = 0;
  for (let s = t, o = e - i; s < e; s += i) r += (n[o] - n[s]) * (n[s + 1] + n[o + 1]), o = s;
  return r;
}
class Zn {
  static area(t) {
    const e = t.length;
    let i = 0;
    for (let r = e - 1, s = 0; s < e; r = s++) i += t[r].x * t[s].y - t[s].x * t[r].y;
    return i * 0.5;
  }
  static isClockWise(t) {
    return Zn.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const i = [], r = [], s = [];
    Fh(t), Bh(i, t);
    let o = t.length;
    e.forEach(Fh);
    for (let l = 0; l < e.length; l++) r.push(o), o += e[l].length, Bh(i, e[l]);
    const a = dx.triangulate(i, r);
    for (let l = 0; l < a.length; l += 3) s.push(a.slice(l, l + 3));
    return s;
  }
}
function Fh(n) {
  const t = n.length;
  t > 2 && n[t - 1].equals(n[0]) && n.pop();
}
function Bh(n, t) {
  for (let e = 0; e < t.length; e++) n.push(t[e].x), n.push(t[e].y);
}
class pd extends Se {
  constructor(t = new cd([new J(0.5, 0.5), new J(-0.5, 0.5), new J(-0.5, -0.5), new J(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t];
    const i = this, r = [], s = [];
    for (let a = 0, l = t.length; a < l; a++) {
      const c = t[a];
      o(c);
    }
    this.setAttribute("position", new Qt(r, 3)), this.setAttribute("uv", new Qt(s, 2)), this.computeVertexNormals();
    function o(a) {
      const l = [], c = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1;
      let d = e.bevelEnabled !== void 0 ? e.bevelEnabled : true, f = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, _ = e.bevelSize !== void 0 ? e.bevelSize : f - 0.1, x = e.bevelOffset !== void 0 ? e.bevelOffset : 0, p = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const m = e.extrudePath, E = e.UVGenerator !== void 0 ? e.UVGenerator : Px;
      let y, M = false, U, A, T, I;
      m && (y = m.getSpacedPoints(h), M = true, d = false, U = m.computeFrenetFrames(h, false), A = new P(), T = new P(), I = new P()), d || (p = 0, f = 0, _ = 0, x = 0);
      const Z = a.extractPoints(c);
      let v = Z.shape;
      const w = Z.holes;
      if (!Zn.isClockWise(v)) {
        v = v.reverse();
        for (let j = 0, C = w.length; j < C; j++) {
          const st = w[j];
          Zn.isClockWise(st) && (w[j] = st.reverse());
        }
      }
      const B = Zn.triangulateShape(v, w), V = v;
      for (let j = 0, C = w.length; j < C; j++) {
        const st = w[j];
        v = v.concat(st);
      }
      function $(j, C, st) {
        return C || console.error("THREE.ExtrudeGeometry: vec does not exist"), j.clone().addScaledVector(C, st);
      }
      const F = v.length, tt = B.length;
      function G(j, C, st) {
        let rt, Q, ot;
        const Ct = j.x - C.x, mt = j.y - C.y, S = st.x - j.x, g = st.y - j.y, N = Ct * Ct + mt * mt, X = Ct * g - mt * S;
        if (Math.abs(X) > Number.EPSILON) {
          const Y = Math.sqrt(N), q = Math.sqrt(S * S + g * g), Mt = C.x - mt / Y, at = C.y + Ct / Y, gt = st.x - g / q, Ht = st.y + S / q, nt = ((gt - Mt) * g - (Ht - at) * S) / (Ct * g - mt * S);
          rt = Mt + Ct * nt - j.x, Q = at + mt * nt - j.y;
          const xt = rt * rt + Q * Q;
          if (xt <= 2) return new J(rt, Q);
          ot = Math.sqrt(xt / 2);
        } else {
          let Y = false;
          Ct > Number.EPSILON ? S > Number.EPSILON && (Y = true) : Ct < -Number.EPSILON ? S < -Number.EPSILON && (Y = true) : Math.sign(mt) === Math.sign(g) && (Y = true), Y ? (rt = -mt, Q = Ct, ot = Math.sqrt(N)) : (rt = Ct, Q = mt, ot = Math.sqrt(N / 2));
        }
        return new J(rt / ot, Q / ot);
      }
      const ht = [];
      for (let j = 0, C = V.length, st = C - 1, rt = j + 1; j < C; j++, st++, rt++) st === C && (st = 0), rt === C && (rt = 0), ht[j] = G(V[j], V[st], V[rt]);
      const pt = [];
      let ft, zt = ht.concat();
      for (let j = 0, C = w.length; j < C; j++) {
        const st = w[j];
        ft = [];
        for (let rt = 0, Q = st.length, ot = Q - 1, Ct = rt + 1; rt < Q; rt++, ot++, Ct++) ot === Q && (ot = 0), Ct === Q && (Ct = 0), ft[rt] = G(st[rt], st[ot], st[Ct]);
        pt.push(ft), zt = zt.concat(ft);
      }
      for (let j = 0; j < p; j++) {
        const C = j / p, st = f * Math.cos(C * Math.PI / 2), rt = _ * Math.sin(C * Math.PI / 2) + x;
        for (let Q = 0, ot = V.length; Q < ot; Q++) {
          const Ct = $(V[Q], ht[Q], rt);
          ct(Ct.x, Ct.y, -st);
        }
        for (let Q = 0, ot = w.length; Q < ot; Q++) {
          const Ct = w[Q];
          ft = pt[Q];
          for (let mt = 0, S = Ct.length; mt < S; mt++) {
            const g = $(Ct[mt], ft[mt], rt);
            ct(g.x, g.y, -st);
          }
        }
      }
      const qt = _ + x;
      for (let j = 0; j < F; j++) {
        const C = d ? $(v[j], zt[j], qt) : v[j];
        M ? (T.copy(U.normals[0]).multiplyScalar(C.x), A.copy(U.binormals[0]).multiplyScalar(C.y), I.copy(y[0]).add(T).add(A), ct(I.x, I.y, I.z)) : ct(C.x, C.y, 0);
      }
      for (let j = 1; j <= h; j++) for (let C = 0; C < F; C++) {
        const st = d ? $(v[C], zt[C], qt) : v[C];
        M ? (T.copy(U.normals[j]).multiplyScalar(st.x), A.copy(U.binormals[j]).multiplyScalar(st.y), I.copy(y[j]).add(T).add(A), ct(I.x, I.y, I.z)) : ct(st.x, st.y, u / h * j);
      }
      for (let j = p - 1; j >= 0; j--) {
        const C = j / p, st = f * Math.cos(C * Math.PI / 2), rt = _ * Math.sin(C * Math.PI / 2) + x;
        for (let Q = 0, ot = V.length; Q < ot; Q++) {
          const Ct = $(V[Q], ht[Q], rt);
          ct(Ct.x, Ct.y, u + st);
        }
        for (let Q = 0, ot = w.length; Q < ot; Q++) {
          const Ct = w[Q];
          ft = pt[Q];
          for (let mt = 0, S = Ct.length; mt < S; mt++) {
            const g = $(Ct[mt], ft[mt], rt);
            M ? ct(g.x, g.y + y[h - 1].y, y[h - 1].x + st) : ct(g.x, g.y, u + st);
          }
        }
      }
      W(), et();
      function W() {
        const j = r.length / 3;
        if (d) {
          let C = 0, st = F * C;
          for (let rt = 0; rt < tt; rt++) {
            const Q = B[rt];
            Pt(Q[2] + st, Q[1] + st, Q[0] + st);
          }
          C = h + p * 2, st = F * C;
          for (let rt = 0; rt < tt; rt++) {
            const Q = B[rt];
            Pt(Q[0] + st, Q[1] + st, Q[2] + st);
          }
        } else {
          for (let C = 0; C < tt; C++) {
            const st = B[C];
            Pt(st[2], st[1], st[0]);
          }
          for (let C = 0; C < tt; C++) {
            const st = B[C];
            Pt(st[0] + F * h, st[1] + F * h, st[2] + F * h);
          }
        }
        i.addGroup(j, r.length / 3 - j, 0);
      }
      function et() {
        const j = r.length / 3;
        let C = 0;
        bt(V, C), C += V.length;
        for (let st = 0, rt = w.length; st < rt; st++) {
          const Q = w[st];
          bt(Q, C), C += Q.length;
        }
        i.addGroup(j, r.length / 3 - j, 1);
      }
      function bt(j, C) {
        let st = j.length;
        for (; --st >= 0; ) {
          const rt = st;
          let Q = st - 1;
          Q < 0 && (Q = j.length - 1);
          for (let ot = 0, Ct = h + p * 2; ot < Ct; ot++) {
            const mt = F * ot, S = F * (ot + 1), g = C + rt + mt, N = C + Q + mt, X = C + Q + S, Y = C + rt + S;
            At(g, N, X, Y);
          }
        }
      }
      function ct(j, C, st) {
        l.push(j), l.push(C), l.push(st);
      }
      function Pt(j, C, st) {
        Ut(j), Ut(C), Ut(st);
        const rt = r.length / 3, Q = E.generateTopUV(i, r, rt - 3, rt - 2, rt - 1);
        Vt(Q[0]), Vt(Q[1]), Vt(Q[2]);
      }
      function At(j, C, st, rt) {
        Ut(j), Ut(C), Ut(rt), Ut(C), Ut(st), Ut(rt);
        const Q = r.length / 3, ot = E.generateSideWallUV(i, r, Q - 6, Q - 3, Q - 2, Q - 1);
        Vt(ot[0]), Vt(ot[1]), Vt(ot[3]), Vt(ot[1]), Vt(ot[2]), Vt(ot[3]);
      }
      function Ut(j) {
        r.push(l[j * 3 + 0]), r.push(l[j * 3 + 1]), r.push(l[j * 3 + 2]);
      }
      function Vt(j) {
        s.push(j.x), s.push(j.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes, i = this.parameters.options;
    return Rx(e, i, t);
  }
  static fromJSON(t, e) {
    const i = [];
    for (let s = 0, o = t.shapes.length; s < o; s++) {
      const a = e[t.shapes[s]];
      i.push(a);
    }
    const r = t.options.extrudePath;
    return r !== void 0 && (t.options.extrudePath = new bl[r.type]().fromJSON(r)), new pd(i, t.options);
  }
}
const Px = { generateTopUV: function(n, t, e, i, r) {
  const s = t[e * 3], o = t[e * 3 + 1], a = t[i * 3], l = t[i * 3 + 1], c = t[r * 3], h = t[r * 3 + 1];
  return [new J(s, o), new J(a, l), new J(c, h)];
}, generateSideWallUV: function(n, t, e, i, r, s) {
  const o = t[e * 3], a = t[e * 3 + 1], l = t[e * 3 + 2], c = t[i * 3], h = t[i * 3 + 1], u = t[i * 3 + 2], d = t[r * 3], f = t[r * 3 + 1], _ = t[r * 3 + 2], x = t[s * 3], p = t[s * 3 + 1], m = t[s * 3 + 2];
  return Math.abs(a - h) < Math.abs(o - c) ? [new J(o, 1 - l), new J(c, 1 - u), new J(d, 1 - _), new J(x, 1 - m)] : [new J(a, 1 - l), new J(h, 1 - u), new J(f, 1 - _), new J(p, 1 - m)];
} };
function Rx(n, t, e) {
  if (e.shapes = [], Array.isArray(n)) for (let i = 0, r = n.length; i < r; i++) {
    const s = n[i];
    e.shapes.push(s.uuid);
  }
  else e.shapes.push(n.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class fd extends Se {
  constructor(t = 0.5, e = 1, i = 32, r = 1, s = 0, o = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: i, phiSegments: r, thetaStart: s, thetaLength: o }, i = Math.max(3, i), r = Math.max(1, r);
    const a = [], l = [], c = [], h = [];
    let u = t;
    const d = (e - t) / r, f = new P(), _ = new J();
    for (let x = 0; x <= r; x++) {
      for (let p = 0; p <= i; p++) {
        const m = s + p / i * o;
        f.x = u * Math.cos(m), f.y = u * Math.sin(m), l.push(f.x, f.y, f.z), c.push(0, 0, 1), _.x = (f.x / e + 1) / 2, _.y = (f.y / e + 1) / 2, h.push(_.x, _.y);
      }
      u += d;
    }
    for (let x = 0; x < r; x++) {
      const p = x * (i + 1);
      for (let m = 0; m < i; m++) {
        const E = m + p, y = E, M = E + i + 1, U = E + i + 2, A = E + 1;
        a.push(y, M, A), a.push(M, U, A);
      }
    }
    this.setIndex(a), this.setAttribute("position", new Qt(l, 3)), this.setAttribute("normal", new Qt(c, 3)), this.setAttribute("uv", new Qt(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new fd(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}
class md extends Se {
  constructor(t = new cd([new J(0, 0.5), new J(-0.5, -0.5), new J(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: t, curveSegments: e };
    const i = [], r = [], s = [], o = [];
    let a = 0, l = 0;
    if (Array.isArray(t) === false) c(t);
    else for (let h = 0; h < t.length; h++) c(t[h]), this.addGroup(a, l, h), a += l, l = 0;
    this.setIndex(i), this.setAttribute("position", new Qt(r, 3)), this.setAttribute("normal", new Qt(s, 3)), this.setAttribute("uv", new Qt(o, 2));
    function c(h) {
      const u = r.length / 3, d = h.extractPoints(e);
      let f = d.shape;
      const _ = d.holes;
      Zn.isClockWise(f) === false && (f = f.reverse());
      for (let p = 0, m = _.length; p < m; p++) {
        const E = _[p];
        Zn.isClockWise(E) === true && (_[p] = E.reverse());
      }
      const x = Zn.triangulateShape(f, _);
      for (let p = 0, m = _.length; p < m; p++) {
        const E = _[p];
        f = f.concat(E);
      }
      for (let p = 0, m = f.length; p < m; p++) {
        const E = f[p];
        r.push(E.x, E.y, 0), s.push(0, 0, 1), o.push(E.x, E.y);
      }
      for (let p = 0, m = x.length; p < m; p++) {
        const E = x[p], y = E[0] + u, M = E[1] + u, U = E[2] + u;
        i.push(y, M, U), l += 3;
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes;
    return Lx(e, t);
  }
  static fromJSON(t, e) {
    const i = [];
    for (let r = 0, s = t.shapes.length; r < s; r++) {
      const o = e[t.shapes[r]];
      i.push(o);
    }
    return new md(i, t.curveSegments);
  }
}
function Lx(n, t) {
  if (t.shapes = [], Array.isArray(n)) for (let e = 0, i = n.length; e < i; e++) {
    const r = n[e];
    t.shapes.push(r.uuid);
  }
  else t.shapes.push(n.uuid);
  return t;
}
class _d extends Se {
  constructor(t = 1, e = 32, i = 16, r = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: i, phiStart: r, phiLength: s, thetaStart: o, thetaLength: a }, e = Math.max(3, Math.floor(e)), i = Math.max(2, Math.floor(i));
    const l = Math.min(o + a, Math.PI);
    let c = 0;
    const h = [], u = new P(), d = new P(), f = [], _ = [], x = [], p = [];
    for (let m = 0; m <= i; m++) {
      const E = [], y = m / i;
      let M = 0;
      m === 0 && o === 0 ? M = 0.5 / e : m === i && l === Math.PI && (M = -0.5 / e);
      for (let U = 0; U <= e; U++) {
        const A = U / e;
        u.x = -t * Math.cos(r + A * s) * Math.sin(o + y * a), u.y = t * Math.cos(o + y * a), u.z = t * Math.sin(r + A * s) * Math.sin(o + y * a), _.push(u.x, u.y, u.z), d.copy(u).normalize(), x.push(d.x, d.y, d.z), p.push(A + M, 1 - y), E.push(c++);
      }
      h.push(E);
    }
    for (let m = 0; m < i; m++) for (let E = 0; E < e; E++) {
      const y = h[m][E + 1], M = h[m][E], U = h[m + 1][E], A = h[m + 1][E + 1];
      (m !== 0 || o > 0) && f.push(y, M, A), (m !== i - 1 || l < Math.PI) && f.push(M, U, A);
    }
    this.setIndex(f), this.setAttribute("position", new Qt(_, 3)), this.setAttribute("normal", new Qt(x, 3)), this.setAttribute("uv", new Qt(p, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new _d(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class vd extends Se {
  constructor(t = 1, e = 0.4, i = 12, r = 48, s = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: i, tubularSegments: r, arc: s }, i = Math.floor(i), r = Math.floor(r);
    const o = [], a = [], l = [], c = [], h = new P(), u = new P(), d = new P();
    for (let f = 0; f <= i; f++) for (let _ = 0; _ <= r; _++) {
      const x = _ / r * s, p = f / i * Math.PI * 2;
      u.x = (t + e * Math.cos(p)) * Math.cos(x), u.y = (t + e * Math.cos(p)) * Math.sin(x), u.z = e * Math.sin(p), a.push(u.x, u.y, u.z), h.x = t * Math.cos(x), h.y = t * Math.sin(x), d.subVectors(u, h).normalize(), l.push(d.x, d.y, d.z), c.push(_ / r), c.push(f / i);
    }
    for (let f = 1; f <= i; f++) for (let _ = 1; _ <= r; _++) {
      const x = (r + 1) * f + _ - 1, p = (r + 1) * (f - 1) + _ - 1, m = (r + 1) * (f - 1) + _, E = (r + 1) * f + _;
      o.push(x, p, E), o.push(p, m, E);
    }
    this.setIndex(o), this.setAttribute("position", new Qt(a, 3)), this.setAttribute("normal", new Qt(l, 3)), this.setAttribute("uv", new Qt(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new vd(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class TS extends In {
  constructor(t) {
    super(), this.isMeshStandardMaterial = true, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Bt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Bt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Vl, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ln(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class AS extends In {
  constructor(t) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Bt(16777215), this.specular = new Bt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Bt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Vl, this.normalScale = new J(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ln(), this.combine = Il, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class PS extends Po {
  constructor(t) {
    super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
  }
}
class gd extends ve {
  constructor(t, e = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Bt(t), this.intensity = e;
  }
  dispose() {
  }
  copy(t, e) {
    return super.copy(t, e), this.color.copy(t.color), this.intensity = t.intensity, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, this.groundColor !== void 0 && (e.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (e.object.distance = this.distance), this.angle !== void 0 && (e.object.angle = this.angle), this.decay !== void 0 && (e.object.decay = this.decay), this.penumbra !== void 0 && (e.object.penumbra = this.penumbra), this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (e.object.target = this.target.uuid), e;
  }
}
const ba = new ie(), kh = new P(), Vh = new P();
class Dx {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new J(512, 512), this.map = null, this.mapPass = null, this.matrix = new ie(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Xl(), this._frameExtents = new J(1, 1), this._viewportCount = 1, this._viewports = [new pe(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, i = this.matrix;
    kh.setFromMatrixPosition(t.matrixWorld), e.position.copy(kh), Vh.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(Vh), e.updateMatrixWorld(), ba.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ba), i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), i.multiply(ba);
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(t) {
    return this.camera = t.camera.clone(), this.intensity = t.intensity, this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return this.intensity !== 1 && (t.intensity = this.intensity), this.bias !== 0 && (t.bias = this.bias), this.normalBias !== 0 && (t.normalBias = this.normalBias), this.radius !== 1 && (t.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(false).object, delete t.camera.matrix, t;
  }
}
class Ix extends Dx {
  constructor() {
    super(new Zu(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class RS extends gd {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ve.DEFAULT_UP), this.updateMatrix(), this.target = new ve(), this.shadow = new Ix();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class LS extends gd {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
const zh = new ie();
class DS {
  constructor(t, e, i = 0, r = 1 / 0) {
    this.ray = new Qr(t, e), this.near = i, this.far = r, this.camera = null, this.layers = new Gl(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return zh.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(zh), this;
  }
  intersectObject(t, e = true, i = []) {
    return Ml(t, this, i, e), i.sort(Hh), i;
  }
  intersectObjects(t, e = true, i = []) {
    for (let r = 0, s = t.length; r < s; r++) Ml(t[r], this, i, e);
    return i.sort(Hh), i;
  }
}
function Hh(n, t) {
  return n.distance - t.distance;
}
function Ml(n, t, e, i) {
  let r = true;
  if (n.layers.test(t.layers) && n.raycast(t, e) === false && (r = false), r === true && i === true) {
    const s = n.children;
    for (let o = 0, a = s.length; o < a; o++) Ml(s[o], t, e, true);
  }
}
class Gh {
  constructor(t = 1, e = 0, i = 0) {
    return this.radius = t, this.phi = e, this.theta = i, this;
  }
  set(t, e, i) {
    return this.radius = t, this.phi = e, this.theta = i, this;
  }
  copy(t) {
    return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this;
  }
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(t) {
    return this.setFromCartesianCoords(t.x, t.y, t.z);
  }
  setFromCartesianCoords(t, e, i) {
    return this.radius = Math.sqrt(t * t + e * e + i * i), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, i), this.phi = Math.acos(be(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Wh = new P(), Ks = new P();
class IS {
  constructor(t = new P(), e = new P()) {
    this.start = t, this.end = e;
  }
  set(t, e) {
    return this.start.copy(t), this.end.copy(e), this;
  }
  copy(t) {
    return this.start.copy(t.start), this.end.copy(t.end), this;
  }
  getCenter(t) {
    return t.addVectors(this.start, this.end).multiplyScalar(0.5);
  }
  delta(t) {
    return t.subVectors(this.end, this.start);
  }
  distanceSq() {
    return this.start.distanceToSquared(this.end);
  }
  distance() {
    return this.start.distanceTo(this.end);
  }
  at(t, e) {
    return this.delta(e).multiplyScalar(t).add(this.start);
  }
  closestPointToPointParameter(t, e) {
    Wh.subVectors(t, this.start), Ks.subVectors(this.end, this.start);
    const i = Ks.dot(Ks);
    let s = Ks.dot(Wh) / i;
    return e && (s = be(s, 0, 1)), s;
  }
  closestPointToPoint(t, e, i) {
    const r = this.closestPointToPointParameter(t, e);
    return this.delta(i).multiplyScalar(r).add(this.start);
  }
  applyMatrix4(t) {
    return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this;
  }
  equals(t) {
    return t.start.equals(this.start) && t.end.equals(this.end);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class US extends Z0 {
  constructor(t = 10, e = 10, i = 4473924, r = 8947848) {
    i = new Bt(i), r = new Bt(r);
    const s = e / 2, o = t / e, a = t / 2, l = [], c = [];
    for (let d = 0, f = 0, _ = -a; d <= e; d++, _ += o) {
      l.push(-a, 0, _, a, 0, _), l.push(_, 0, -a, _, 0, a);
      const x = d === s ? i : r;
      x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3, x.toArray(c, f), f += 3;
    }
    const h = new Se();
    h.setAttribute("position", new Qt(l, 3)), h.setAttribute("color", new Qt(c, 3));
    const u = new Po({ vertexColors: true, toneMapped: false });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const Xh = new P();
let $s, ya;
class NS extends ve {
  constructor(t = new P(0, 0, 1), e = new P(0, 0, 0), i = 1, r = 16776960, s = i * 0.2, o = s * 0.2) {
    super(), this.type = "ArrowHelper", $s === void 0 && ($s = new Se(), $s.setAttribute("position", new Qt([0, 0, 0, 0, 1, 0], 3)), ya = new Kl(0, 0.5, 1, 5, 1), ya.translate(0, -0.5, 0)), this.position.copy(e), this.line = new rd($s, new Po({ color: r, toneMapped: false })), this.line.matrixAutoUpdate = false, this.add(this.line), this.cone = new un(ya, new Wl({ color: r, toneMapped: false })), this.cone.matrixAutoUpdate = false, this.add(this.cone), this.setDirection(t), this.setLength(i, s, o);
  }
  setDirection(t) {
    if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      Xh.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(Xh, e);
    }
  }
  setLength(t, e = t * 0.2, i = e * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix();
  }
  setColor(t) {
    this.line.material.color.set(t), this.cone.material.color.set(t);
  }
  copy(t) {
    return super.copy(t, false), this.line.copy(t.line), this.cone.copy(t.cone), this;
  }
  dispose() {
    this.line.geometry.dispose(), this.line.material.dispose(), this.cone.geometry.dispose(), this.cone.material.dispose();
  }
}
class Ux extends Ei {
  constructor(t, e = null) {
    super(), this.object = t, this.domElement = e, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Dl } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Dl);
const qh = { type: "change" }, $l = { type: "start" }, xd = { type: "end" }, Zs = new Qr(), jh = new Xn(), Nx = Math.cos(70 * Uf.DEG2RAD), xe = new P(), Oe = 2 * Math.PI, ne = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, wa = 1e-6;
class OS extends Ux {
  constructor(t, e = null) {
    super(t, e), this.state = ne.NONE, this.enabled = true, this.target = new P(), this.cursor = new P(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Qi.ROTATE, MIDDLE: Qi.DOLLY, RIGHT: Qi.PAN }, this.touches = { ONE: Ki.ROTATE, TWO: Ki.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new P(), this._lastQuaternion = new bi(), this._lastTargetPosition = new P(), this._quat = new bi().setFromUnitVectors(t.up, new P(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Gh(), this._sphericalDelta = new Gh(), this._scale = 1, this._panOffset = new P(), this._rotateStart = new J(), this._rotateEnd = new J(), this._rotateDelta = new J(), this._panStart = new J(), this._panEnd = new J(), this._panDelta = new J(), this._dollyStart = new J(), this._dollyEnd = new J(), this._dollyDelta = new J(), this._dollyDirection = new P(), this._mouse = new J(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Fx.bind(this), this._onPointerDown = Ox.bind(this), this._onPointerUp = Bx.bind(this), this._onContextMenu = Xx.bind(this), this._onMouseWheel = zx.bind(this), this._onKeyDown = Hx.bind(this), this._onTouchStart = Gx.bind(this), this._onTouchMove = Wx.bind(this), this._onMouseDown = kx.bind(this), this._onMouseMove = Vx.bind(this), this._interceptControlDown = qx.bind(this), this._interceptControlUp = jx.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(t) {
    t.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = t;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(qh), this.update(), this.state = ne.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    xe.copy(e).sub(this.target), xe.applyQuaternion(this._quat), this._spherical.setFromVector3(xe), this.autoRotate && this.state === ne.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let i = this.minAzimuthAngle, r = this.maxAzimuthAngle;
    isFinite(i) && isFinite(r) && (i < -Math.PI ? i += Oe : i > Math.PI && (i -= Oe), r < -Math.PI ? r += Oe : r > Math.PI && (r -= Oe), i <= r ? this._spherical.theta = Math.max(i, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (i + r) / 2 ? Math.max(i, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let s = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const o = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), s = o != this._spherical.radius;
    }
    if (xe.setFromSpherical(this._spherical), xe.applyQuaternion(this._quatInverse), e.copy(this.target).add(xe), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let o = null;
      if (this.object.isPerspectiveCamera) {
        const a = xe.length();
        o = this._clampDistance(a * this._scale);
        const l = a - o;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), s = !!l;
      } else if (this.object.isOrthographicCamera) {
        const a = new P(this._mouse.x, this._mouse.y, 0);
        a.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), s = l !== this.object.zoom;
        const c = new P(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = xe.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (Zs.origin.copy(this.object.position), Zs.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Zs.direction)) < Nx ? this.object.lookAt(this.target) : (jh.setFromNormalAndCoplanarPoint(this.object.up, this.target), Zs.intersectPlane(jh, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const o = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), s = true);
    }
    return this._scale = 1, this._performCursorZoom = false, s || this._lastPosition.distanceToSquared(this.object.position) > wa || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > wa || this._lastTargetPosition.distanceToSquared(this.target) > wa ? (this.dispatchEvent(qh), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Oe / 60 * this.autoRotateSpeed * t : Oe / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(t) {
    const e = Math.abs(t * 0.01);
    return Math.pow(0.95, this.zoomSpeed * e);
  }
  _rotateLeft(t) {
    this._sphericalDelta.theta -= t;
  }
  _rotateUp(t) {
    this._sphericalDelta.phi -= t;
  }
  _panLeft(t, e) {
    xe.setFromMatrixColumn(e, 0), xe.multiplyScalar(-t), this._panOffset.add(xe);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? xe.setFromMatrixColumn(e, 1) : (xe.setFromMatrixColumn(e, 0), xe.crossVectors(this.object.up, xe)), xe.multiplyScalar(t), this._panOffset.add(xe);
  }
  _pan(t, e) {
    const i = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const r = this.object.position;
      xe.copy(r).sub(this.target);
      let s = xe.length();
      s *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * s / i.clientHeight, this.object.matrix), this._panUp(2 * e * s / i.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / i.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / i.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(t) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= t : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(t, e) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const i = this.domElement.getBoundingClientRect(), r = t - i.left, s = e - i.top, o = i.width, a = i.height;
    this._mouse.x = r / o * 2 - 1, this._mouse.y = -(s / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(t) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, t));
  }
  _handleMouseDownRotate(t) {
    this._rotateStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownDolly(t) {
    this._updateZoomParameters(t.clientX, t.clientX), this._dollyStart.set(t.clientX, t.clientY);
  }
  _handleMouseDownPan(t) {
    this._panStart.set(t.clientX, t.clientY);
  }
  _handleMouseMoveRotate(t) {
    this._rotateEnd.set(t.clientX, t.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Oe * this._rotateDelta.x / e.clientHeight), this._rotateUp(Oe * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(t) {
    this._dollyEnd.set(t.clientX, t.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(t) {
    this._panEnd.set(t.clientX, t.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(t) {
    this._updateZoomParameters(t.clientX, t.clientY), t.deltaY < 0 ? this._dollyIn(this._getZoomScale(t.deltaY)) : t.deltaY > 0 && this._dollyOut(this._getZoomScale(t.deltaY)), this.update();
  }
  _handleKeyDown(t) {
    let e = false;
    switch (t.code) {
      case this.keys.UP:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(Oe * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(-Oe * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(Oe * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(-Oe * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(i, r);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._panStart.set(i, r);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), i = t.pageX - e.x, r = t.pageY - e.y, s = Math.sqrt(i * i + r * r);
    this._dollyStart.set(0, s);
  }
  _handleTouchStartDollyPan(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enablePan && this._handleTouchStartPan(t);
  }
  _handleTouchStartDollyRotate(t) {
    this.enableZoom && this._handleTouchStartDolly(t), this.enableRotate && this._handleTouchStartRotate(t);
  }
  _handleTouchMoveRotate(t) {
    if (this._pointers.length == 1) this._rotateEnd.set(t.pageX, t.pageY);
    else {
      const i = this._getSecondPointerPosition(t), r = 0.5 * (t.pageX + i.x), s = 0.5 * (t.pageY + i.y);
      this._rotateEnd.set(r, s);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Oe * this._rotateDelta.x / e.clientHeight), this._rotateUp(Oe * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), i = 0.5 * (t.pageX + e.x), r = 0.5 * (t.pageY + e.y);
      this._panEnd.set(i, r);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), i = t.pageX - e.x, r = t.pageY - e.y, s = Math.sqrt(i * i + r * r);
    this._dollyEnd.set(0, s), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const o = (t.pageX + e.x) * 0.5, a = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(o, a);
  }
  _handleTouchMoveDollyPan(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enablePan && this._handleTouchMovePan(t);
  }
  _handleTouchMoveDollyRotate(t) {
    this.enableZoom && this._handleTouchMoveDolly(t), this.enableRotate && this._handleTouchMoveRotate(t);
  }
  _addPointer(t) {
    this._pointers.push(t.pointerId);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) {
      this._pointers.splice(e, 1);
      return;
    }
  }
  _isTrackingPointer(t) {
    for (let e = 0; e < this._pointers.length; e++) if (this._pointers[e] == t.pointerId) return true;
    return false;
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new J(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, i = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        i.deltaY *= 16;
        break;
      case 2:
        i.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (i.deltaY *= 10), i;
  }
}
function Ox(n) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(n.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(n) && (this._addPointer(n), n.pointerType === "touch" ? this._onTouchStart(n) : this._onMouseDown(n)));
}
function Fx(n) {
  this.enabled !== false && (n.pointerType === "touch" ? this._onTouchMove(n) : this._onMouseMove(n));
}
function Bx(n) {
  switch (this._removePointer(n), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(n.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(xd), this.state = ne.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function kx(n) {
  let t;
  switch (n.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case Qi.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(n), this.state = ne.DOLLY;
      break;
    case Qi.ROTATE:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = ne.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = ne.ROTATE;
      }
      break;
    case Qi.PAN:
      if (n.ctrlKey || n.metaKey || n.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(n), this.state = ne.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(n), this.state = ne.PAN;
      }
      break;
    default:
      this.state = ne.NONE;
  }
  this.state !== ne.NONE && this.dispatchEvent($l);
}
function Vx(n) {
  switch (this.state) {
    case ne.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(n);
      break;
    case ne.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(n);
      break;
    case ne.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(n);
      break;
  }
}
function zx(n) {
  this.enabled === false || this.enableZoom === false || this.state !== ne.NONE || (n.preventDefault(), this.dispatchEvent($l), this._handleMouseWheel(this._customWheelEvent(n)), this.dispatchEvent(xd));
}
function Hx(n) {
  this.enabled === false || this.enablePan === false || this._handleKeyDown(n);
}
function Gx(n) {
  switch (this._trackPointer(n), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ki.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(n), this.state = ne.TOUCH_ROTATE;
          break;
        case Ki.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(n), this.state = ne.TOUCH_PAN;
          break;
        default:
          this.state = ne.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ki.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(n), this.state = ne.TOUCH_DOLLY_PAN;
          break;
        case Ki.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(n), this.state = ne.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = ne.NONE;
      }
      break;
    default:
      this.state = ne.NONE;
  }
  this.state !== ne.NONE && this.dispatchEvent($l);
}
function Wx(n) {
  switch (this._trackPointer(n), this.state) {
    case ne.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(n), this.update();
      break;
    case ne.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(n), this.update();
      break;
    case ne.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(n), this.update();
      break;
    case ne.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(n), this.update();
      break;
    default:
      this.state = ne.NONE;
  }
}
function Xx(n) {
  this.enabled !== false && n.preventDefault();
}
function qx(n) {
  n.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function jx(n) {
  n.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */
function se(n) {
  return n == null;
}
function Zl(n) {
  return n !== null && typeof n == "object";
}
function Sl(n) {
  return n !== null && typeof n == "object";
}
function Yx(n, t) {
  if (n.length !== t.length) return false;
  for (let e = 0; e < n.length; e++) if (n[e] !== t[e]) return false;
  return true;
}
function wi(n, t) {
  return Array.from(/* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(t)])).reduce((i, r) => {
    const s = n[r], o = t[r];
    return Sl(s) && Sl(o) ? Object.assign(Object.assign({}, i), { [r]: wi(s, o) }) : Object.assign(Object.assign({}, i), { [r]: r in t ? o : s });
  }, {});
}
function Jl(n) {
  return Zl(n) ? "target" in n : false;
}
const Kx = { alreadydisposed: () => "View has been already disposed", invalidparams: (n) => `Invalid parameters for '${n.name}'`, nomatchingcontroller: (n) => `No matching controller for '${n.key}'`, nomatchingview: (n) => `No matching view for '${JSON.stringify(n.params)}'`, notbindable: () => "Value is not bindable", notcompatible: (n) => `Not compatible with  plugin '${n.id}'`, propertynotfound: (n) => `Property '${n.name}' not found`, shouldneverhappen: () => "This error should never happen" };
class de {
  static alreadyDisposed() {
    return new de({ type: "alreadydisposed" });
  }
  static notBindable() {
    return new de({ type: "notbindable" });
  }
  static notCompatible(t, e) {
    return new de({ type: "notcompatible", context: { id: `${t}.${e}` } });
  }
  static propertyNotFound(t) {
    return new de({ type: "propertynotfound", context: { name: t } });
  }
  static shouldNeverHappen() {
    return new de({ type: "shouldneverhappen" });
  }
  constructor(t) {
    var e;
    this.message = (e = Kx[t.type](t.context)) !== null && e !== void 0 ? e : "Unexpected error", this.name = this.constructor.name, this.stack = new Error(this.message).stack, this.type = t.type;
  }
  toString() {
    return this.message;
  }
}
class bo {
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
    const i = this.read();
    if (!bo.isBindable(i)) throw de.notBindable();
    if (!(t in i)) throw de.propertyNotFound(t);
    i[t] = e;
  }
}
class ge {
  constructor() {
    this.observers_ = {};
  }
  on(t, e, i) {
    var r;
    let s = this.observers_[t];
    return s || (s = this.observers_[t] = []), s.push({ handler: e, key: (r = i == null ? void 0 : i.key) !== null && r !== void 0 ? r : e }), this;
  }
  off(t, e) {
    const i = this.observers_[t];
    return i && (this.observers_[t] = i.filter((r) => r.key !== e)), this;
  }
  emit(t, e) {
    const i = this.observers_[t];
    i && i.forEach((r) => {
      r.handler(e);
    });
  }
}
class $x {
  constructor(t, e) {
    var i;
    this.constraint_ = e == null ? void 0 : e.constraint, this.equals_ = (i = e == null ? void 0 : e.equals) !== null && i !== void 0 ? i : (r, s) => r === s, this.emitter = new ge(), this.rawValue_ = t;
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
    const i = e ?? { forceEmit: false, last: true }, r = this.constraint_ ? this.constraint_.constrain(t) : t, s = this.rawValue_;
    this.equals_(s, r) && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.rawValue_ = r, this.emitter.emit("change", { options: i, previousRawValue: s, rawValue: r, sender: this }));
  }
}
class Zx {
  constructor(t) {
    this.emitter = new ge(), this.value_ = t;
  }
  get rawValue() {
    return this.value_;
  }
  set rawValue(t) {
    this.setRawValue(t, { forceEmit: false, last: true });
  }
  setRawValue(t, e) {
    const i = e ?? { forceEmit: false, last: true }, r = this.value_;
    r === t && !i.forceEmit || (this.emitter.emit("beforechange", { sender: this }), this.value_ = t, this.emitter.emit("change", { options: i, previousRawValue: r, rawValue: this.value_, sender: this }));
  }
}
class Jx {
  constructor(t) {
    this.emitter = new ge(), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.value_ = t, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_);
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
function le(n, t) {
  const e = t == null ? void 0 : t.constraint, i = t == null ? void 0 : t.equals;
  return !e && !i ? new Zx(n) : new $x(n, t);
}
function Qx(n) {
  return [new Jx(n), (t, e) => {
    n.setRawValue(t, e);
  }];
}
class kt {
  constructor(t) {
    this.emitter = new ge(), this.valMap_ = t;
    for (const e in this.valMap_) this.valMap_[e].emitter.on("change", () => {
      this.emitter.emit("change", { key: e, sender: this });
    });
  }
  static createCore(t) {
    return Object.keys(t).reduce((i, r) => Object.assign(i, { [r]: le(t[r]) }), {});
  }
  static fromObject(t) {
    const e = this.createCore(t);
    return new kt(e);
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
class es {
  constructor(t) {
    this.values = kt.fromObject({ max: t.max, min: t.min });
  }
  constrain(t) {
    const e = this.values.get("max"), i = this.values.get("min");
    return Math.min(Math.max(t, i), e);
  }
}
class tb {
  constructor(t) {
    this.values = kt.fromObject({ max: t.max, min: t.min });
  }
  constrain(t) {
    const e = this.values.get("max"), i = this.values.get("min");
    let r = t;
    return se(i) || (r = Math.max(r, i)), se(e) || (r = Math.min(r, e)), r;
  }
}
class eb {
  constructor(t, e = 0) {
    this.step = t, this.origin = e;
  }
  constrain(t) {
    const e = this.origin % this.step, i = Math.round((t - e) / this.step);
    return e + i * this.step;
  }
}
class nb {
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
const ib = { "**": (n, t) => Math.pow(n, t), "*": (n, t) => n * t, "/": (n, t) => n / t, "%": (n, t) => n % t, "+": (n, t) => n + t, "-": (n, t) => n - t, "<<": (n, t) => n << t, ">>": (n, t) => n >> t, ">>>": (n, t) => n >>> t, "&": (n, t) => n & t, "^": (n, t) => n ^ t, "|": (n, t) => n | t };
class rb {
  constructor(t, e, i) {
    this.left = e, this.operator = t, this.right = i;
  }
  evaluate() {
    const t = ib[this.operator];
    if (!t) throw new Error(`unexpected binary operator: '${this.operator}`);
    return t(this.left.evaluate(), this.right.evaluate());
  }
  toString() {
    return ["b(", this.left.toString(), this.operator, this.right.toString(), ")"].join(" ");
  }
}
const sb = { "+": (n) => n, "-": (n) => -n, "~": (n) => ~n };
class ob {
  constructor(t, e) {
    this.operator = t, this.expression = e;
  }
  evaluate() {
    const t = sb[this.operator];
    if (!t) throw new Error(`unexpected unary operator: '${this.operator}`);
    return t(this.expression.evaluate());
  }
  toString() {
    return ["u(", this.operator, this.expression.toString(), ")"].join(" ");
  }
}
function Ql(n) {
  return (t, e) => {
    for (let i = 0; i < n.length; i++) {
      const r = n[i](t, e);
      if (r !== "") return r;
    }
    return "";
  };
}
function Gr(n, t) {
  var e;
  const i = n.substr(t).match(/^\s+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : "";
}
function ab(n, t) {
  const e = n.substr(t, 1);
  return e.match(/^[1-9]$/) ? e : "";
}
function Wr(n, t) {
  var e;
  const i = n.substr(t).match(/^[0-9]+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : "";
}
function lb(n, t) {
  const e = Wr(n, t);
  if (e !== "") return e;
  const i = n.substr(t, 1);
  if (t += 1, i !== "-" && i !== "+") return "";
  const r = Wr(n, t);
  return r === "" ? "" : i + r;
}
function tc(n, t) {
  const e = n.substr(t, 1);
  if (t += 1, e.toLowerCase() !== "e") return "";
  const i = lb(n, t);
  return i === "" ? "" : e + i;
}
function bd(n, t) {
  const e = n.substr(t, 1);
  if (e === "0") return e;
  const i = ab(n, t);
  return t += i.length, i === "" ? "" : i + Wr(n, t);
}
function cb(n, t) {
  const e = bd(n, t);
  if (t += e.length, e === "") return "";
  const i = n.substr(t, 1);
  if (t += i.length, i !== ".") return "";
  const r = Wr(n, t);
  return t += r.length, e + i + r + tc(n, t);
}
function hb(n, t) {
  const e = n.substr(t, 1);
  if (t += e.length, e !== ".") return "";
  const i = Wr(n, t);
  return t += i.length, i === "" ? "" : e + i + tc(n, t);
}
function ub(n, t) {
  const e = bd(n, t);
  return t += e.length, e === "" ? "" : e + tc(n, t);
}
const db = Ql([cb, hb, ub]);
function pb(n, t) {
  var e;
  const i = n.substr(t).match(/^[01]+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : "";
}
function fb(n, t) {
  const e = n.substr(t, 2);
  if (t += e.length, e.toLowerCase() !== "0b") return "";
  const i = pb(n, t);
  return i === "" ? "" : e + i;
}
function mb(n, t) {
  var e;
  const i = n.substr(t).match(/^[0-7]+/);
  return (e = i && i[0]) !== null && e !== void 0 ? e : "";
}
function _b(n, t) {
  const e = n.substr(t, 2);
  if (t += e.length, e.toLowerCase() !== "0o") return "";
  const i = mb(n, t);
  return i === "" ? "" : e + i;
}
function vb(n, t) {
  var e;
  const i = n.substr(t).match(/^[0-9a-f]+/i);
  return (e = i && i[0]) !== null && e !== void 0 ? e : "";
}
function gb(n, t) {
  const e = n.substr(t, 2);
  if (t += e.length, e.toLowerCase() !== "0x") return "";
  const i = vb(n, t);
  return i === "" ? "" : e + i;
}
const xb = Ql([fb, _b, gb]), bb = Ql([xb, db]);
function yb(n, t) {
  const e = bb(n, t);
  return t += e.length, e === "" ? null : { evaluable: new nb(e), cursor: t };
}
function wb(n, t) {
  const e = n.substr(t, 1);
  if (t += e.length, e !== "(") return null;
  const i = wd(n, t);
  if (!i) return null;
  t = i.cursor, t += Gr(n, t).length;
  const r = n.substr(t, 1);
  return t += r.length, r !== ")" ? null : { evaluable: i.evaluable, cursor: t };
}
function Mb(n, t) {
  var e;
  return (e = yb(n, t)) !== null && e !== void 0 ? e : wb(n, t);
}
function yd(n, t) {
  const e = Mb(n, t);
  if (e) return e;
  const i = n.substr(t, 1);
  if (t += i.length, i !== "+" && i !== "-" && i !== "~") return null;
  const r = yd(n, t);
  return r ? (t = r.cursor, { cursor: t, evaluable: new ob(i, r.evaluable) }) : null;
}
function Sb(n, t, e) {
  e += Gr(t, e).length;
  const i = n.filter((r) => t.startsWith(r, e))[0];
  return i ? (e += i.length, e += Gr(t, e).length, { cursor: e, operator: i }) : null;
}
function Eb(n, t) {
  return (e, i) => {
    const r = n(e, i);
    if (!r) return null;
    i = r.cursor;
    let s = r.evaluable;
    for (; ; ) {
      const o = Sb(t, e, i);
      if (!o) break;
      i = o.cursor;
      const a = n(e, i);
      if (!a) return null;
      i = a.cursor, s = new rb(o.operator, s, a.evaluable);
    }
    return s ? { cursor: i, evaluable: s } : null;
  };
}
const Cb = [["**"], ["*", "/", "%"], ["+", "-"], ["<<", ">>>", ">>"], ["&"], ["^"], ["|"]].reduce((n, t) => Eb(n, t), yd);
function wd(n, t) {
  return t += Gr(n, t).length, Cb(n, t);
}
function Tb(n) {
  const t = wd(n, 0);
  return !t || t.cursor + Gr(n, t.cursor).length !== n.length ? null : t.evaluable;
}
function Ln(n) {
  var t;
  const e = Tb(n);
  return (t = e == null ? void 0 : e.evaluate()) !== null && t !== void 0 ? t : null;
}
function Md(n) {
  if (typeof n == "number") return n;
  if (typeof n == "string") {
    const t = Ln(n);
    if (!se(t)) return t;
  }
  return 0;
}
function Ab(n) {
  return String(n);
}
function ke(n) {
  return (t) => t.toFixed(Math.max(Math.min(n, 20), 0));
}
function Jt(n, t, e, i, r) {
  const s = (n - t) / (e - t);
  return i + s * (r - i);
}
function Yh(n) {
  return String(n.toFixed(10)).split(".")[1].replace(/0+$/, "").length;
}
function ye(n, t, e) {
  return Math.min(Math.max(n, t), e);
}
function Sd(n, t) {
  return (n % t + t) % t;
}
function Pb(n, t) {
  return se(n.step) ? Math.max(Yh(t), 2) : Yh(n.step);
}
function Ed(n) {
  var t;
  return (t = n.step) !== null && t !== void 0 ? t : 1;
}
function Cd(n, t) {
  var e;
  const i = Math.abs((e = n.step) !== null && e !== void 0 ? e : t);
  return i === 0 ? 0.1 : Math.pow(10, Math.floor(Math.log10(i)) - 1);
}
function Td(n, t) {
  return se(n.step) ? null : new eb(n.step, t);
}
function Ad(n) {
  return !se(n.max) && !se(n.min) ? new es({ max: n.max, min: n.min }) : !se(n.max) || !se(n.min) ? new tb({ max: n.max, min: n.min }) : null;
}
function Pd(n, t) {
  var e, i, r;
  return { formatter: (e = n.format) !== null && e !== void 0 ? e : ke(Pb(n, t)), keyScale: (i = n.keyScale) !== null && i !== void 0 ? i : Ed(n), pointerScale: (r = n.pointerScale) !== null && r !== void 0 ? r : Cd(n, t) };
}
function Rd(n) {
  return { format: n.optional.function, keyScale: n.optional.number, max: n.optional.number, min: n.optional.number, pointerScale: n.optional.number, step: n.optional.number };
}
function ec(n) {
  return { constraint: n.constraint, textProps: kt.fromObject(Pd(n.params, n.initialValue)) };
}
class Ci {
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
class Lo {
  constructor(t) {
    this.target = t;
  }
}
class ns extends Lo {
  constructor(t, e, i) {
    super(t), this.value = e, this.last = i ?? true;
  }
}
class Rb extends Lo {
  constructor(t, e) {
    super(t), this.expanded = e;
  }
}
class Lb extends Lo {
  constructor(t, e) {
    super(t), this.index = e;
  }
}
class Db extends Lo {
  constructor(t, e) {
    super(t), this.native = e;
  }
}
class Xr extends Ci {
  constructor(t) {
    super(t), this.onValueChange_ = this.onValueChange_.bind(this), this.emitter_ = new ge(), this.controller.value.emitter.on("change", this.onValueChange_);
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
    const i = e.bind(this);
    return this.emitter_.on(t, (r) => {
      i(r);
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
    this.emitter_.emit("change", new ns(this, e.binding.target.read(), t.options.last));
  }
}
class Ib {
  constructor(t, e) {
    this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.binding = e, this.value_ = t, this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_), this.emitter = new ge();
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
function Ub(n) {
  if (!("binding" in n)) return false;
  const t = n.binding;
  return Jl(t) && "read" in t && "write" in t;
}
function Nb(n, t) {
  const i = Object.keys(t).reduce((r, s) => {
    if (r === void 0) return;
    const o = t[s], a = o(n[s]);
    return a.succeeded ? Object.assign(Object.assign({}, r), { [s]: a.value }) : void 0;
  }, {});
  return i;
}
function Ob(n, t) {
  return n.reduce((e, i) => {
    if (e === void 0) return;
    const r = t(i);
    if (!(!r.succeeded || r.value === void 0)) return [...e, r.value];
  }, []);
}
function Fb(n) {
  return n === null ? false : typeof n == "object";
}
function Mn(n) {
  return (t) => (e) => {
    if (!t && e === void 0) return { succeeded: false, value: void 0 };
    if (t && e === void 0) return { succeeded: true, value: void 0 };
    const i = n(e);
    return i !== void 0 ? { succeeded: true, value: i } : { succeeded: false, value: void 0 };
  };
}
function Kh(n) {
  return { custom: (t) => Mn(t)(n), boolean: Mn((t) => typeof t == "boolean" ? t : void 0)(n), number: Mn((t) => typeof t == "number" ? t : void 0)(n), string: Mn((t) => typeof t == "string" ? t : void 0)(n), function: Mn((t) => typeof t == "function" ? t : void 0)(n), constant: (t) => Mn((e) => e === t ? t : void 0)(n), raw: Mn((t) => t)(n), object: (t) => Mn((e) => {
    if (Fb(e)) return Nb(e, t);
  })(n), array: (t) => Mn((e) => {
    if (Array.isArray(e)) return Ob(e, t);
  })(n) };
}
const El = { optional: Kh(true), required: Kh(false) };
function he(n, t) {
  const e = t(El), i = El.required.object(e)(n);
  return i.succeeded ? i.value : void 0;
}
function Xe(n, t, e, i) {
  if (t && !t(n)) return false;
  const r = he(n, e);
  return r ? i(r) : false;
}
function qe(n, t) {
  var e;
  return wi((e = n == null ? void 0 : n()) !== null && e !== void 0 ? e : {}, t);
}
function vi(n) {
  return "value" in n;
}
function Ld(n) {
  if (!Zl(n) || !("binding" in n)) return false;
  const t = n.binding;
  return Jl(t);
}
const dn = "http://www.w3.org/2000/svg";
function yo(n) {
  n.offsetHeight;
}
function Bb(n, t) {
  const e = n.style.transition;
  n.style.transition = "none", t(), n.style.transition = e;
}
function nc(n) {
  return n.ontouchstart !== void 0;
}
function kb() {
  return globalThis;
}
function Vb() {
  return kb().document;
}
function zb(n) {
  const t = n.ownerDocument.defaultView;
  return t && "document" in t ? n.getContext("2d", { willReadFrequently: true }) : null;
}
const Hb = { check: '<path d="M2 8l4 4l8 -8"/>', dropdown: '<path d="M5 7h6l-3 3 z"/>', p2dpad: '<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>' };
function Do(n, t) {
  const e = n.createElementNS(dn, "svg");
  return e.innerHTML = Hb[t], e;
}
function Dd(n, t, e) {
  n.insertBefore(t, n.children[e]);
}
function ic(n) {
  n.parentElement && n.parentElement.removeChild(n);
}
function Id(n) {
  for (; n.children.length > 0; ) n.removeChild(n.children[0]);
}
function Gb(n) {
  for (; n.childNodes.length > 0; ) n.removeChild(n.childNodes[0]);
}
function Ud(n) {
  return n.relatedTarget ? n.relatedTarget : "explicitOriginalTarget" in n ? n.explicitOriginalTarget : null;
}
function Pn(n, t) {
  n.emitter.on("change", (e) => {
    t(e.rawValue);
  }), t(n.rawValue);
}
function fn(n, t, e) {
  Pn(n.value(t), e);
}
const Wb = "tp";
function Xt(n) {
  return (e, i) => [Wb, "-", n, "v", e ? `_${e}` : "", i ? `-${i}` : ""].join("");
}
const Tr = Xt("lbl");
function Xb(n, t) {
  const e = n.createDocumentFragment();
  return t.split(`
`).map((r) => n.createTextNode(r)).forEach((r, s) => {
    s > 0 && e.appendChild(n.createElement("br")), e.appendChild(r);
  }), e;
}
class Nd {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(Tr()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("div");
    i.classList.add(Tr("l")), fn(e.props, "label", (s) => {
      se(s) ? this.element.classList.add(Tr(void 0, "nol")) : (this.element.classList.remove(Tr(void 0, "nol")), Gb(i), i.appendChild(Xb(t, s)));
    }), this.element.appendChild(i), this.labelElement = i;
    const r = t.createElement("div");
    r.classList.add(Tr("v")), this.element.appendChild(r), this.valueElement = r;
  }
}
class Od {
  constructor(t, e) {
    this.props = e.props, this.valueController = e.valueController, this.viewProps = e.valueController.viewProps, this.view = new Nd(t, { props: e.props, viewProps: this.viewProps }), this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importProps(t) {
    return Xe(t, null, (e) => ({ label: e.optional.string }), (e) => (this.props.set("label", e.label), true));
  }
  exportProps() {
    return qe(null, { label: this.props.get("label") });
  }
}
function qb() {
  return ["veryfirst", "first", "last", "verylast"];
}
const $h = Xt(""), Zh = { veryfirst: "vfst", first: "fst", last: "lst", verylast: "vlst" };
class Io {
  constructor(t) {
    this.parent_ = null, this.blade = t.blade, this.view = t.view, this.viewProps = t.viewProps;
    const e = this.view.element;
    this.blade.value("positions").emitter.on("change", () => {
      qb().forEach((i) => {
        e.classList.remove($h(void 0, Zh[i]));
      }), this.blade.get("positions").forEach((i) => {
        e.classList.add($h(void 0, Zh[i]));
      });
    }), this.viewProps.handleDispose(() => {
      ic(e);
    });
  }
  get parent() {
    return this.parent_;
  }
  set parent(t) {
    this.parent_ = t, this.viewProps.set("parent", this.parent_ ? this.parent_.viewProps : null);
  }
  importState(t) {
    return Xe(t, null, (e) => ({ disabled: e.required.boolean, hidden: e.required.boolean }), (e) => (this.viewProps.importState(e), true));
  }
  exportState() {
    return qe(null, Object.assign({}, this.viewProps.exportState()));
  }
}
class Mi extends Io {
  constructor(t, e) {
    if (e.value !== e.valueController.value) throw de.shouldNeverHappen();
    const i = e.valueController.viewProps, r = new Od(t, { blade: e.blade, props: e.props, valueController: e.valueController });
    super(Object.assign(Object.assign({}, e), { view: new Nd(t, { props: e.props, viewProps: i }), viewProps: i })), this.labelController = r, this.value = e.value, this.valueController = e.valueController, this.view.valueElement.appendChild(this.valueController.view.element);
  }
  importState(t) {
    return Xe(t, (e) => {
      var i, r, s;
      return super.importState(e) && this.labelController.importProps(e) && ((s = (r = (i = this.valueController).importProps) === null || r === void 0 ? void 0 : r.call(i, t)) !== null && s !== void 0 ? s : true);
    }, (e) => ({ value: e.optional.raw }), (e) => (e.value && (this.value.rawValue = e.value), true));
  }
  exportState() {
    var t, e, i;
    return qe(() => super.exportState(), Object.assign(Object.assign({ value: this.value.rawValue }, this.labelController.exportProps()), (i = (e = (t = this.valueController).exportProps) === null || e === void 0 ? void 0 : e.call(t)) !== null && i !== void 0 ? i : {}));
  }
}
function Jh(n) {
  const t = Object.assign({}, n);
  return delete t.value, t;
}
class Fd extends Mi {
  constructor(t, e) {
    super(t, e), this.tag = e.tag;
  }
  importState(t) {
    return Xe(t, (e) => super.importState(Jh(t)), (e) => ({ tag: e.optional.string }), (e) => (this.tag = e.tag, true));
  }
  exportState() {
    return qe(() => Jh(super.exportState()), { binding: { key: this.value.binding.target.key, value: this.value.binding.target.read() }, tag: this.tag });
  }
}
function jb(n) {
  return vi(n) && Ld(n.value);
}
class Yb extends Fd {
  importState(t) {
    return Xe(t, (e) => super.importState(e), (e) => ({ binding: e.required.object({ value: e.required.raw }) }), (e) => (this.value.binding.inject(e.binding.value), this.value.fetch(), true));
  }
}
function Kb(n) {
  return vi(n) && Ub(n.value);
}
function Bd(n, t) {
  for (; n.length < t; ) n.push(void 0);
}
function $b(n) {
  const t = [];
  return Bd(t, n), t;
}
function Zb(n) {
  const t = n.indexOf(void 0);
  return t < 0 ? n : n.slice(0, t);
}
function Jb(n, t) {
  const e = [...Zb(n), t];
  return e.length > n.length ? e.splice(0, e.length - n.length) : Bd(e, n.length), e;
}
class Qb {
  constructor(t) {
    this.emitter = new ge(), this.onTick_ = this.onTick_.bind(this), this.onValueBeforeChange_ = this.onValueBeforeChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.binding = t.binding, this.value_ = le($b(t.bufferSize)), this.value_.emitter.on("beforechange", this.onValueBeforeChange_), this.value_.emitter.on("change", this.onValueChange_), this.ticker = t.ticker, this.ticker.emitter.on("tick", this.onTick_), this.fetch();
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
    this.value_.rawValue = Jb(this.value_.rawValue, this.binding.read());
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
function ty(n) {
  if (!("binding" in n)) return false;
  const t = n.binding;
  return Jl(t) && "read" in t && !("write" in t);
}
class ey extends Fd {
  exportState() {
    return qe(() => super.exportState(), { binding: { readonly: true } });
  }
}
function ny(n) {
  return vi(n) && ty(n.value);
}
class iy extends Ci {
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
    const i = e.bind(this);
    return this.controller.buttonController.emitter.on(t, (s) => {
      i(new Db(this, s.nativeEvent));
    }), this;
  }
  off(t, e) {
    return this.controller.buttonController.emitter.off(t, e), this;
  }
}
function ry(n, t, e) {
  e ? n.classList.add(t) : n.classList.remove(t);
}
function fr(n, t) {
  return (e) => {
    ry(n, t, e);
  };
}
function rc(n, t) {
  Pn(n, (e) => {
    t.textContent = e ?? "";
  });
}
const Ma = Xt("btn");
class sy {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(Ma()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("button");
    i.classList.add(Ma("b")), e.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const r = t.createElement("div");
    r.classList.add(Ma("t")), rc(e.props.value("title"), r), this.buttonElement.appendChild(r);
  }
}
class oy {
  constructor(t, e) {
    this.emitter = new ge(), this.onClick_ = this.onClick_.bind(this), this.props = e.props, this.viewProps = e.viewProps, this.view = new sy(t, { props: this.props, viewProps: this.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  importProps(t) {
    return Xe(t, null, (e) => ({ title: e.optional.string }), (e) => (this.props.set("title", e.title), true));
  }
  exportProps() {
    return qe(null, { title: this.props.get("title") });
  }
  onClick_(t) {
    this.emitter.emit("click", { nativeEvent: t, sender: this });
  }
}
class Qh extends Io {
  constructor(t, e) {
    const i = new oy(t, { props: e.buttonProps, viewProps: e.viewProps }), r = new Od(t, { blade: e.blade, props: e.labelProps, valueController: i });
    super({ blade: e.blade, view: r.view, viewProps: e.viewProps }), this.buttonController = i, this.labelController = r;
  }
  importState(t) {
    return Xe(t, (e) => super.importState(e) && this.buttonController.importProps(e) && this.labelController.importProps(e), () => ({}), () => true);
  }
  exportState() {
    return qe(() => super.exportState(), Object.assign(Object.assign({}, this.buttonController.exportProps()), this.labelController.exportProps()));
  }
}
class kd {
  constructor(t) {
    const [e, i] = t.split("-"), r = e.split(".");
    this.major = parseInt(r[0], 10), this.minor = parseInt(r[1], 10), this.patch = parseInt(r[2], 10), this.prerelease = i ?? null;
  }
  toString() {
    const t = [this.major, this.minor, this.patch].join(".");
    return this.prerelease !== null ? [t, this.prerelease].join("-") : t;
  }
}
const mr = new kd("2.0.5");
function Ie(n) {
  return Object.assign({ core: mr }, n);
}
const ay = Ie({ id: "button", type: "blade", accept(n) {
  const t = he(n, (e) => ({ title: e.required.string, view: e.required.constant("button"), label: e.optional.string }));
  return t ? { params: t } : null;
}, controller(n) {
  return new Qh(n.document, { blade: n.blade, buttonProps: kt.fromObject({ title: n.params.title }), labelProps: kt.fromObject({ label: n.params.label }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof Qh ? new iy(n.controller) : null;
} });
function ly(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: "button" }));
}
function cy(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: "folder" }));
}
function hy(n, t) {
  return n.addBlade(Object.assign(Object.assign({}, t), { view: "tab" }));
}
function uy(n) {
  return Zl(n) ? "refresh" in n && typeof n.refresh == "function" : false;
}
function dy(n, t) {
  if (!bo.isBindable(n)) throw de.notBindable();
  return new bo(n, t);
}
class py {
  constructor(t, e) {
    this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.controller_ = t, this.emitter_ = new ge(), this.pool_ = e, this.controller_.rack.emitter.on("valuechange", this.onRackValueChange_);
  }
  get children() {
    return this.controller_.rack.children.map((t) => this.pool_.createApi(t));
  }
  addBinding(t, e, i) {
    const r = i ?? {}, s = this.controller_.element.ownerDocument, o = this.pool_.createBinding(s, dy(t, e), r), a = this.pool_.createBindingApi(o);
    return this.add(a, r.index);
  }
  addFolder(t) {
    return cy(this, t);
  }
  addButton(t) {
    return ly(this, t);
  }
  addTab(t) {
    return hy(this, t);
  }
  add(t, e) {
    const i = t.controller;
    return this.controller_.rack.add(i, e), t;
  }
  remove(t) {
    this.controller_.rack.remove(t.controller);
  }
  addBlade(t) {
    const e = this.controller_.element.ownerDocument, i = this.pool_.createBlade(e, t), r = this.pool_.createApi(i);
    return this.add(r, t.index);
  }
  on(t, e) {
    const i = e.bind(this);
    return this.emitter_.on(t, (r) => {
      i(r);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  refresh() {
    this.children.forEach((t) => {
      uy(t) && t.refresh();
    });
  }
  onRackValueChange_(t) {
    const e = t.bladeController, i = this.pool_.createApi(e), r = Ld(e.value) ? e.value.binding : null;
    this.emitter_.emit("change", new ns(i, r ? r.target.read() : e.value.rawValue, t.options.last));
  }
}
class sc extends Ci {
  constructor(t, e) {
    super(t), this.rackApi_ = new py(t.rackController, e);
  }
  refresh() {
    this.rackApi_.refresh();
  }
}
class oc extends Io {
  constructor(t) {
    super({ blade: t.blade, view: t.view, viewProps: t.rackController.viewProps }), this.rackController = t.rackController;
  }
  importState(t) {
    return Xe(t, (e) => super.importState(e), (e) => ({ children: e.required.array(e.required.raw) }), (e) => this.rackController.rack.children.every((i, r) => i.importState(e.children[r])));
  }
  exportState() {
    return qe(() => super.exportState(), { children: this.rackController.rack.children.map((t) => t.exportState()) });
  }
}
function Cl(n) {
  return "rackController" in n;
}
class fy {
  constructor(t) {
    this.emitter = new ge(), this.items_ = [], this.cache_ = /* @__PURE__ */ new Set(), this.onSubListAdd_ = this.onSubListAdd_.bind(this), this.onSubListRemove_ = this.onSubListRemove_.bind(this), this.extract_ = t;
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
    if (this.includes(t)) throw de.shouldNeverHappen();
    const i = e !== void 0 ? e : this.items_.length;
    this.items_.splice(i, 0, t), this.cache_.add(t);
    const r = this.extract_(t);
    r && (r.emitter.on("add", this.onSubListAdd_), r.emitter.on("remove", this.onSubListRemove_), r.allItems().forEach((s) => {
      this.cache_.add(s);
    })), this.emitter.emit("add", { index: i, item: t, root: this, target: this });
  }
  remove(t) {
    const e = this.items_.indexOf(t);
    if (e < 0) return;
    this.items_.splice(e, 1), this.cache_.delete(t);
    const i = this.extract_(t);
    i && (i.allItems().forEach((r) => {
      this.cache_.delete(r);
    }), i.emitter.off("add", this.onSubListAdd_), i.emitter.off("remove", this.onSubListRemove_)), this.emitter.emit("remove", { index: e, item: t, root: this, target: this });
  }
  onSubListAdd_(t) {
    this.cache_.add(t.item), this.emitter.emit("add", { index: t.index, item: t.item, root: this, target: t.target });
  }
  onSubListRemove_(t) {
    this.cache_.delete(t.item), this.emitter.emit("remove", { index: t.index, item: t.item, root: this, target: t.target });
  }
}
function my(n, t) {
  for (let e = 0; e < n.length; e++) {
    const i = n[e];
    if (vi(i) && i.value === t) return i;
  }
  return null;
}
function _y(n) {
  return Cl(n) ? n.rackController.rack.bcSet_ : null;
}
class vy {
  constructor(t) {
    var e, i;
    this.emitter = new ge(), this.onBladePositionsChange_ = this.onBladePositionsChange_.bind(this), this.onSetAdd_ = this.onSetAdd_.bind(this), this.onSetRemove_ = this.onSetRemove_.bind(this), this.onChildDispose_ = this.onChildDispose_.bind(this), this.onChildPositionsChange_ = this.onChildPositionsChange_.bind(this), this.onChildValueChange_ = this.onChildValueChange_.bind(this), this.onChildViewPropsChange_ = this.onChildViewPropsChange_.bind(this), this.onRackLayout_ = this.onRackLayout_.bind(this), this.onRackValueChange_ = this.onRackValueChange_.bind(this), this.blade_ = (e = t.blade) !== null && e !== void 0 ? e : null, (i = this.blade_) === null || i === void 0 || i.value("positions").emitter.on("change", this.onBladePositionsChange_), this.viewProps = t.viewProps, this.bcSet_ = new fy(_y), this.bcSet_.emitter.on("add", this.onSetAdd_), this.bcSet_.emitter.on("remove", this.onSetRemove_);
  }
  get children() {
    return this.bcSet_.items;
  }
  add(t, e) {
    var i;
    (i = t.parent) === null || i === void 0 || i.remove(t), t.parent = this, this.bcSet_.add(t, e);
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
    const i = t.item;
    if (i.viewProps.emitter.on("change", this.onChildViewPropsChange_), i.blade.value("positions").emitter.on("change", this.onChildPositionsChange_), i.viewProps.handleDispose(this.onChildDispose_), vi(i)) i.value.emitter.on("change", this.onChildValueChange_);
    else if (Cl(i)) {
      const r = i.rackController.rack;
      if (r) {
        const s = r.emitter;
        s.on("layout", this.onRackLayout_), s.on("valuechange", this.onRackValueChange_);
      }
    }
  }
  onSetRemove_(t) {
    this.updatePositions_();
    const e = t.target === t.root;
    if (this.emitter.emit("remove", { bladeController: t.item, root: e, sender: this }), !e) return;
    const i = t.item;
    if (vi(i)) i.value.emitter.off("change", this.onChildValueChange_);
    else if (Cl(i)) {
      const r = i.rackController.rack;
      if (r) {
        const s = r.emitter;
        s.off("layout", this.onRackLayout_), s.off("valuechange", this.onRackValueChange_);
      }
    }
  }
  updatePositions_() {
    const t = this.bcSet_.items.filter((r) => !r.viewProps.get("hidden")), e = t[0], i = t[t.length - 1];
    this.bcSet_.items.forEach((r) => {
      const s = [];
      r === e && (s.push("first"), (!this.blade_ || this.blade_.get("positions").includes("veryfirst")) && s.push("veryfirst")), r === i && (s.push("last"), (!this.blade_ || this.blade_.get("positions").includes("verylast")) && s.push("verylast")), r.blade.set("positions", s);
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
    const e = my(this.find(vi), t.sender);
    if (!e) throw de.alreadyDisposed();
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
class ac {
  constructor(t) {
    this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this), this.element = t.element, this.viewProps = t.viewProps;
    const e = new vy({ blade: t.root ? void 0 : t.blade, viewProps: t.viewProps });
    e.emitter.on("add", this.onRackAdd_), e.emitter.on("remove", this.onRackRemove_), this.rack = e, this.viewProps.handleDispose(() => {
      for (let i = this.rack.children.length - 1; i >= 0; i--) this.rack.children[i].viewProps.set("disposed", true);
    });
  }
  onRackAdd_(t) {
    t.root && Dd(this.element, t.bladeController.view.element, t.index);
  }
  onRackRemove_(t) {
    t.root && ic(t.bladeController.view.element);
  }
}
function _r() {
  return new kt({ positions: le([], { equals: Yx }) });
}
class is extends kt {
  constructor(t) {
    super(t);
  }
  static create(t) {
    const e = { completed: true, expanded: t, expandedHeight: null, shouldFixHeight: false, temporaryExpanded: null }, i = kt.createCore(e);
    return new is(i);
  }
  get styleExpanded() {
    var t;
    return (t = this.get("temporaryExpanded")) !== null && t !== void 0 ? t : this.get("expanded");
  }
  get styleHeight() {
    if (!this.styleExpanded) return "0";
    const t = this.get("expandedHeight");
    return this.get("shouldFixHeight") && !se(t) ? `${t}px` : "auto";
  }
  bindExpandedClass(t, e) {
    const i = () => {
      this.styleExpanded ? t.classList.add(e) : t.classList.remove(e);
    };
    fn(this, "expanded", i), fn(this, "temporaryExpanded", i);
  }
  cleanUpTransition() {
    this.set("shouldFixHeight", false), this.set("expandedHeight", null), this.set("completed", true);
  }
}
function gy(n, t) {
  let e = 0;
  return Bb(t, () => {
    n.set("expandedHeight", null), n.set("temporaryExpanded", true), yo(t), e = t.clientHeight, n.set("temporaryExpanded", null), yo(t);
  }), e;
}
function tu(n, t) {
  t.style.height = n.styleHeight;
}
function lc(n, t) {
  n.value("expanded").emitter.on("beforechange", () => {
    if (n.set("completed", false), se(n.get("expandedHeight"))) {
      const e = gy(n, t);
      e > 0 && n.set("expandedHeight", e);
    }
    n.set("shouldFixHeight", true), yo(t);
  }), n.emitter.on("change", () => {
    tu(n, t);
  }), tu(n, t), t.addEventListener("transitionend", (e) => {
    e.propertyName === "height" && n.cleanUpTransition();
  });
}
class Vd extends sc {
  constructor(t, e) {
    super(t, e), this.emitter_ = new ge(), this.controller.foldable.value("expanded").emitter.on("change", (i) => {
      this.emitter_.emit("fold", new Rb(this, i.sender.rawValue));
    }), this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
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
  addBinding(t, e, i) {
    return this.rackApi_.addBinding(t, e, i);
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
    const i = e.bind(this);
    return this.emitter_.on(t, (r) => {
      i(r);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
const zd = Xt("cnt");
class xy {
  constructor(t, e) {
    var i;
    this.className_ = Xt((i = e.viewName) !== null && i !== void 0 ? i : "fld"), this.element = t.createElement("div"), this.element.classList.add(this.className_(), zd()), e.viewProps.bindClassModifiers(this.element), this.foldable_ = e.foldable, this.foldable_.bindExpandedClass(this.element, this.className_(void 0, "expanded")), fn(this.foldable_, "completed", fr(this.element, this.className_(void 0, "cpl")));
    const r = t.createElement("button");
    r.classList.add(this.className_("b")), fn(e.props, "title", (c) => {
      se(c) ? this.element.classList.add(this.className_(void 0, "not")) : this.element.classList.remove(this.className_(void 0, "not"));
    }), e.viewProps.bindDisabled(r), this.element.appendChild(r), this.buttonElement = r;
    const s = t.createElement("div");
    s.classList.add(this.className_("i")), this.element.appendChild(s);
    const o = t.createElement("div");
    o.classList.add(this.className_("t")), rc(e.props.value("title"), o), this.buttonElement.appendChild(o), this.titleElement = o;
    const a = t.createElement("div");
    a.classList.add(this.className_("m")), this.buttonElement.appendChild(a);
    const l = t.createElement("div");
    l.classList.add(this.className_("c")), this.element.appendChild(l), this.containerElement = l;
  }
}
class Tl extends oc {
  constructor(t, e) {
    var i;
    const r = is.create((i = e.expanded) !== null && i !== void 0 ? i : true), s = new xy(t, { foldable: r, props: e.props, viewName: e.root ? "rot" : void 0, viewProps: e.viewProps });
    super(Object.assign(Object.assign({}, e), { rackController: new ac({ blade: e.blade, element: s.containerElement, root: e.root, viewProps: e.viewProps }), view: s })), this.onTitleClick_ = this.onTitleClick_.bind(this), this.props = e.props, this.foldable = r, lc(this.foldable, this.view.containerElement), this.rackController.rack.emitter.on("add", () => {
      this.foldable.cleanUpTransition();
    }), this.rackController.rack.emitter.on("remove", () => {
      this.foldable.cleanUpTransition();
    }), this.view.buttonElement.addEventListener("click", this.onTitleClick_);
  }
  get document() {
    return this.view.element.ownerDocument;
  }
  importState(t) {
    return Xe(t, (e) => super.importState(e), (e) => ({ expanded: e.required.boolean, title: e.optional.string }), (e) => (this.foldable.set("expanded", e.expanded), this.props.set("title", e.title), true));
  }
  exportState() {
    return qe(() => super.exportState(), { expanded: this.foldable.get("expanded"), title: this.props.get("title") });
  }
  onTitleClick_() {
    this.foldable.set("expanded", !this.foldable.get("expanded"));
  }
}
const by = Ie({ id: "folder", type: "blade", accept(n) {
  const t = he(n, (e) => ({ title: e.required.string, view: e.required.constant("folder"), expanded: e.optional.boolean }));
  return t ? { params: t } : null;
}, controller(n) {
  return new Tl(n.document, { blade: n.blade, expanded: n.params.expanded, props: kt.fromObject({ title: n.params.title }), viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof Tl ? new Vd(n.controller, n.pool) : null;
} }), yy = Xt("");
function eu(n, t) {
  return fr(n, yy(void 0, t));
}
class Un extends kt {
  constructor(t) {
    var e;
    super(t), this.onDisabledChange_ = this.onDisabledChange_.bind(this), this.onParentChange_ = this.onParentChange_.bind(this), this.onParentGlobalDisabledChange_ = this.onParentGlobalDisabledChange_.bind(this), [this.globalDisabled_, this.setGlobalDisabled_] = Qx(le(this.getGlobalDisabled_())), this.value("disabled").emitter.on("change", this.onDisabledChange_), this.value("parent").emitter.on("change", this.onParentChange_), (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_);
  }
  static create(t) {
    var e, i, r;
    const s = t ?? {};
    return new Un(kt.createCore({ disabled: (e = s.disabled) !== null && e !== void 0 ? e : false, disposed: false, hidden: (i = s.hidden) !== null && i !== void 0 ? i : false, parent: (r = s.parent) !== null && r !== void 0 ? r : null }));
  }
  get globalDisabled() {
    return this.globalDisabled_;
  }
  bindClassModifiers(t) {
    Pn(this.globalDisabled_, eu(t, "disabled")), fn(this, "hidden", eu(t, "hidden"));
  }
  bindDisabled(t) {
    Pn(this.globalDisabled_, (e) => {
      t.disabled = e;
    });
  }
  bindTabIndex(t) {
    Pn(this.globalDisabled_, (e) => {
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
    const i = t.previousRawValue;
    i == null ? void 0 : i.globalDisabled.emitter.off("change", this.onParentGlobalDisabledChange_), (e = this.get("parent")) === null || e === void 0 || e.globalDisabled.emitter.on("change", this.onParentGlobalDisabledChange_), this.updateGlobalDisabled_();
  }
}
const nu = Xt("tbp");
class wy {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(nu()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("div");
    i.classList.add(nu("c")), this.element.appendChild(i), this.containerElement = i;
  }
}
const Ar = Xt("tbi");
class My {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(Ar()), e.viewProps.bindClassModifiers(this.element), fn(e.props, "selected", (s) => {
      s ? this.element.classList.add(Ar(void 0, "sel")) : this.element.classList.remove(Ar(void 0, "sel"));
    });
    const i = t.createElement("button");
    i.classList.add(Ar("b")), e.viewProps.bindDisabled(i), this.element.appendChild(i), this.buttonElement = i;
    const r = t.createElement("div");
    r.classList.add(Ar("t")), rc(e.props.value("title"), r), this.buttonElement.appendChild(r), this.titleElement = r;
  }
}
class Sy {
  constructor(t, e) {
    this.emitter = new ge(), this.onClick_ = this.onClick_.bind(this), this.props = e.props, this.viewProps = e.viewProps, this.view = new My(t, { props: e.props, viewProps: e.viewProps }), this.view.buttonElement.addEventListener("click", this.onClick_);
  }
  onClick_() {
    this.emitter.emit("click", { sender: this });
  }
}
class Al extends oc {
  constructor(t, e) {
    const i = new wy(t, { viewProps: e.viewProps });
    super(Object.assign(Object.assign({}, e), { rackController: new ac({ blade: e.blade, element: i.containerElement, viewProps: e.viewProps }), view: i })), this.onItemClick_ = this.onItemClick_.bind(this), this.ic_ = new Sy(t, { props: e.itemProps, viewProps: Un.create() }), this.ic_.emitter.on("click", this.onItemClick_), this.props = e.props, fn(this.props, "selected", (r) => {
      this.itemController.props.set("selected", r), this.viewProps.set("hidden", !r);
    });
  }
  get itemController() {
    return this.ic_;
  }
  importState(t) {
    return Xe(t, (e) => super.importState(e), (e) => ({ selected: e.required.boolean, title: e.required.string }), (e) => (this.ic_.props.set("selected", e.selected), this.ic_.props.set("title", e.title), true));
  }
  exportState() {
    return qe(() => super.exportState(), { selected: this.ic_.props.get("selected"), title: this.ic_.props.get("title") });
  }
  onItemClick_() {
    this.props.set("selected", true);
  }
}
class Ey extends sc {
  constructor(t, e) {
    super(t, e), this.emitter_ = new ge(), this.onSelect_ = this.onSelect_.bind(this), this.pool_ = e, this.rackApi_.on("change", (i) => {
      this.emitter_.emit("change", i);
    }), this.controller.tab.selectedIndex.emitter.on("change", this.onSelect_);
  }
  get pages() {
    return this.rackApi_.children;
  }
  addPage(t) {
    const e = this.controller.view.element.ownerDocument, i = new Al(e, { blade: _r(), itemProps: kt.fromObject({ selected: false, title: t.title }), props: kt.fromObject({ selected: false }), viewProps: Un.create() }), r = this.pool_.createApi(i);
    return this.rackApi_.add(r, t.index);
  }
  removePage(t) {
    this.rackApi_.remove(this.rackApi_.children[t]);
  }
  on(t, e) {
    const i = e.bind(this);
    return this.emitter_.on(t, (r) => {
      i(r);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
  onSelect_(t) {
    this.emitter_.emit("select", new Lb(this, t.rawValue));
  }
}
class Cy extends sc {
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
  addBinding(t, e, i) {
    return this.rackApi_.addBinding(t, e, i);
  }
  addBlade(t) {
    return this.rackApi_.addBlade(t);
  }
}
const iu = -1;
class Ty {
  constructor() {
    this.onItemSelectedChange_ = this.onItemSelectedChange_.bind(this), this.empty = le(true), this.selectedIndex = le(iu), this.items_ = [];
  }
  add(t, e) {
    const i = e ?? this.items_.length;
    this.items_.splice(i, 0, t), t.emitter.on("change", this.onItemSelectedChange_), this.keepSelection_();
  }
  remove(t) {
    const e = this.items_.indexOf(t);
    e < 0 || (this.items_.splice(e, 1), t.emitter.off("change", this.onItemSelectedChange_), this.keepSelection_());
  }
  keepSelection_() {
    if (this.items_.length === 0) {
      this.selectedIndex.rawValue = iu, this.empty.rawValue = true;
      return;
    }
    const t = this.items_.findIndex((e) => e.rawValue);
    t < 0 ? (this.items_.forEach((e, i) => {
      e.rawValue = i === 0;
    }), this.selectedIndex.rawValue = 0) : (this.items_.forEach((e, i) => {
      e.rawValue = i === t;
    }), this.selectedIndex.rawValue = t), this.empty.rawValue = false;
  }
  onItemSelectedChange_(t) {
    if (t.rawValue) {
      const e = this.items_.findIndex((i) => i === t.sender);
      this.items_.forEach((i, r) => {
        i.rawValue = r === e;
      }), this.selectedIndex.rawValue = e;
    } else this.keepSelection_();
  }
}
const Pr = Xt("tab");
class Ay {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(Pr(), zd()), e.viewProps.bindClassModifiers(this.element), Pn(e.empty, fr(this.element, Pr(void 0, "nop")));
    const i = t.createElement("div");
    i.classList.add(Pr("t")), this.element.appendChild(i), this.itemsElement = i;
    const r = t.createElement("div");
    r.classList.add(Pr("i")), this.element.appendChild(r);
    const s = t.createElement("div");
    s.classList.add(Pr("c")), this.element.appendChild(s), this.contentsElement = s;
  }
}
class ru extends oc {
  constructor(t, e) {
    const i = new Ty(), r = new Ay(t, { empty: i.empty, viewProps: e.viewProps });
    super({ blade: e.blade, rackController: new ac({ blade: e.blade, element: r.contentsElement, viewProps: e.viewProps }), view: r }), this.onRackAdd_ = this.onRackAdd_.bind(this), this.onRackRemove_ = this.onRackRemove_.bind(this);
    const s = this.rackController.rack;
    s.emitter.on("add", this.onRackAdd_), s.emitter.on("remove", this.onRackRemove_), this.tab = i;
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
    Dd(this.view.itemsElement, e.itemController.view.element, t.index), e.itemController.viewProps.set("parent", this.viewProps), this.tab.add(e.props.value("selected"));
  }
  onRackRemove_(t) {
    if (!t.root) return;
    const e = t.bladeController;
    ic(e.itemController.view.element), e.itemController.viewProps.set("parent", null), this.tab.remove(e.props.value("selected"));
  }
}
const Hd = Ie({ id: "tab", type: "blade", accept(n) {
  const t = he(n, (e) => ({ pages: e.required.array(e.required.object({ title: e.required.string })), view: e.required.constant("tab") }));
  return !t || t.pages.length === 0 ? null : { params: t };
}, controller(n) {
  const t = new ru(n.document, { blade: n.blade, viewProps: n.viewProps });
  return n.params.pages.forEach((e) => {
    const i = new Al(n.document, { blade: _r(), itemProps: kt.fromObject({ selected: false, title: e.title }), props: kt.fromObject({ selected: false }), viewProps: Un.create() });
    t.add(i);
  }), t;
}, api(n) {
  return n.controller instanceof ru ? new Ey(n.controller, n.pool) : n.controller instanceof Al ? new Cy(n.controller, n.pool) : null;
} });
function Py(n, t) {
  const e = n.accept(t.params);
  if (!e) return null;
  const i = he(t.params, (r) => ({ disabled: r.optional.boolean, hidden: r.optional.boolean }));
  return n.controller({ blade: _r(), document: t.document, params: Object.assign(Object.assign({}, e.params), { disabled: i == null ? void 0 : i.disabled, hidden: i == null ? void 0 : i.hidden }), viewProps: Un.create({ disabled: i == null ? void 0 : i.disabled, hidden: i == null ? void 0 : i.hidden }) });
}
class cc extends Xr {
  get options() {
    return this.controller.valueController.props.get("options");
  }
  set options(t) {
    this.controller.valueController.props.set("options", t);
  }
}
class Ry {
  constructor() {
    this.disabled = false, this.emitter = new ge();
  }
  dispose() {
  }
  tick() {
    this.disabled || this.emitter.emit("tick", { sender: this });
  }
}
class Ly {
  constructor(t, e) {
    this.disabled_ = false, this.timerId_ = null, this.onTick_ = this.onTick_.bind(this), this.doc_ = t, this.emitter = new ge(), this.interval_ = e, this.setTimer_();
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
class rs {
  constructor(t) {
    this.constraints = t;
  }
  constrain(t) {
    return this.constraints.reduce((e, i) => i.constrain(e), t);
  }
}
function wo(n, t) {
  if (n instanceof t) return n;
  if (n instanceof rs) {
    const e = n.constraints.reduce((i, r) => i || (r instanceof t ? r : null), null);
    if (e) return e;
  }
  return null;
}
class ss {
  constructor(t) {
    this.values = kt.fromObject({ options: t });
  }
  constrain(t) {
    const e = this.values.get("options");
    return e.length === 0 || e.filter((r) => r.value === t).length > 0 ? t : e[0].value;
  }
}
function os(n) {
  var t;
  const e = El;
  if (Array.isArray(n)) return (t = he({ items: n }, (i) => ({ items: i.required.array(i.required.object({ text: i.required.string, value: i.required.raw })) }))) === null || t === void 0 ? void 0 : t.items;
  if (typeof n == "object") return e.required.raw(n).value;
}
function hc(n) {
  if (Array.isArray(n)) return n;
  const t = [];
  return Object.keys(n).forEach((e) => {
    t.push({ text: e, value: n[e] });
  }), t;
}
function uc(n) {
  return se(n) ? null : new ss(hc(n));
}
const Sa = Xt("lst");
class Dy {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = e.props, this.element = t.createElement("div"), this.element.classList.add(Sa()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("select");
    i.classList.add(Sa("s")), e.viewProps.bindDisabled(i), this.element.appendChild(i), this.selectElement = i;
    const r = t.createElement("div");
    r.classList.add(Sa("m")), r.appendChild(Do(t, "dropdown")), this.element.appendChild(r), e.value.emitter.on("change", this.onValueChange_), this.value_ = e.value, fn(this.props_, "options", (s) => {
      Id(this.selectElement), s.forEach((o) => {
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
class ei {
  constructor(t, e) {
    this.onSelectChange_ = this.onSelectChange_.bind(this), this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.view = new Dy(t, { props: this.props, value: this.value, viewProps: this.viewProps }), this.view.selectElement.addEventListener("change", this.onSelectChange_);
  }
  onSelectChange_(t) {
    const e = t.currentTarget;
    this.value.rawValue = this.props.get("options")[e.selectedIndex].value;
  }
  importProps(t) {
    return Xe(t, null, (e) => ({ options: e.required.custom(os) }), (e) => (this.props.set("options", hc(e.options)), true));
  }
  exportProps() {
    return qe(null, { options: this.props.get("options") });
  }
}
const su = Xt("pop");
class Iy {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(su()), e.viewProps.bindClassModifiers(this.element), Pn(e.shows, fr(this.element, su(void 0, "v")));
  }
}
class Gd {
  constructor(t, e) {
    this.shows = le(false), this.viewProps = e.viewProps, this.view = new Iy(t, { shows: this.shows, viewProps: this.viewProps });
  }
}
const ou = Xt("txt");
class Uy {
  constructor(t, e) {
    this.onChange_ = this.onChange_.bind(this), this.element = t.createElement("div"), this.element.classList.add(ou()), e.viewProps.bindClassModifiers(this.element), this.props_ = e.props, this.props_.emitter.on("change", this.onChange_);
    const i = t.createElement("input");
    i.classList.add(ou("i")), i.type = "text", e.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, e.value.emitter.on("change", this.onChange_), this.value_ = e.value, this.refresh();
  }
  refresh() {
    const t = this.props_.get("formatter");
    this.inputElement.value = t(this.value_.rawValue);
  }
  onChange_() {
    this.refresh();
  }
}
class qr {
  constructor(t, e) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.parser_ = e.parser, this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.view = new Uy(t, { props: e.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_);
  }
  onInputChange_(t) {
    const i = t.currentTarget.value, r = this.parser_(i);
    se(r) || (this.value.rawValue = r), this.view.refresh();
  }
}
function Ny(n) {
  return String(n);
}
function Wd(n) {
  return n === "false" ? false : !!n;
}
function au(n) {
  return Ny(n);
}
function Oy(n) {
  return (t) => n.reduce((e, i) => e !== null ? e : i(t), null);
}
const Fy = ke(0);
function Mo(n) {
  return Fy(n) + "%";
}
function Xd(n) {
  return String(n);
}
function Pl(n) {
  return n;
}
function vr({ primary: n, secondary: t, forward: e, backward: i }) {
  let r = false;
  function s(o) {
    r || (r = true, o(), r = false);
  }
  n.emitter.on("change", (o) => {
    s(() => {
      t.setRawValue(e(n.rawValue, t.rawValue), o.options);
    });
  }), t.emitter.on("change", (o) => {
    s(() => {
      n.setRawValue(i(n.rawValue, t.rawValue), o.options);
    }), s(() => {
      t.setRawValue(e(n.rawValue, t.rawValue), o.options);
    });
  }), s(() => {
    t.setRawValue(e(n.rawValue, t.rawValue), { forceEmit: false, last: true });
  });
}
function Fe(n, t) {
  const e = n * (t.altKey ? 0.1 : 1) * (t.shiftKey ? 10 : 1);
  return t.upKey ? +e : t.downKey ? -e : 0;
}
function jr(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowDown", shiftKey: n.shiftKey, upKey: n.key === "ArrowUp" };
}
function Dn(n) {
  return { altKey: n.altKey, downKey: n.key === "ArrowLeft", shiftKey: n.shiftKey, upKey: n.key === "ArrowRight" };
}
function By(n) {
  return n === "ArrowUp" || n === "ArrowDown";
}
function qd(n) {
  return By(n) || n === "ArrowLeft" || n === "ArrowRight";
}
function Ea(n, t) {
  var e, i;
  const r = t.ownerDocument.defaultView, s = t.getBoundingClientRect();
  return { x: n.pageX - (((e = r && r.scrollX) !== null && e !== void 0 ? e : 0) + s.left), y: n.pageY - (((i = r && r.scrollY) !== null && i !== void 0 ? i : 0) + s.top) };
}
class Ti {
  constructor(t) {
    this.lastTouch_ = null, this.onDocumentMouseMove_ = this.onDocumentMouseMove_.bind(this), this.onDocumentMouseUp_ = this.onDocumentMouseUp_.bind(this), this.onMouseDown_ = this.onMouseDown_.bind(this), this.onTouchEnd_ = this.onTouchEnd_.bind(this), this.onTouchMove_ = this.onTouchMove_.bind(this), this.onTouchStart_ = this.onTouchStart_.bind(this), this.elem_ = t, this.emitter = new ge(), t.addEventListener("touchstart", this.onTouchStart_, { passive: false }), t.addEventListener("touchmove", this.onTouchMove_, { passive: true }), t.addEventListener("touchend", this.onTouchEnd_), t.addEventListener("mousedown", this.onMouseDown_);
  }
  computePosition_(t) {
    const e = this.elem_.getBoundingClientRect();
    return { bounds: { width: e.width, height: e.height }, point: t ? { x: t.x, y: t.y } : null };
  }
  onMouseDown_(t) {
    var e;
    t.preventDefault(), (e = t.currentTarget) === null || e === void 0 || e.focus();
    const i = this.elem_.ownerDocument;
    i.addEventListener("mousemove", this.onDocumentMouseMove_), i.addEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("down", { altKey: t.altKey, data: this.computePosition_(Ea(t, this.elem_)), sender: this, shiftKey: t.shiftKey });
  }
  onDocumentMouseMove_(t) {
    this.emitter.emit("move", { altKey: t.altKey, data: this.computePosition_(Ea(t, this.elem_)), sender: this, shiftKey: t.shiftKey });
  }
  onDocumentMouseUp_(t) {
    const e = this.elem_.ownerDocument;
    e.removeEventListener("mousemove", this.onDocumentMouseMove_), e.removeEventListener("mouseup", this.onDocumentMouseUp_), this.emitter.emit("up", { altKey: t.altKey, data: this.computePosition_(Ea(t, this.elem_)), sender: this, shiftKey: t.shiftKey });
  }
  onTouchStart_(t) {
    t.preventDefault();
    const e = t.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("down", { altKey: t.altKey, data: this.computePosition_(e ? { x: e.clientX - i.left, y: e.clientY - i.top } : void 0), sender: this, shiftKey: t.shiftKey }), this.lastTouch_ = e;
  }
  onTouchMove_(t) {
    const e = t.targetTouches.item(0), i = this.elem_.getBoundingClientRect();
    this.emitter.emit("move", { altKey: t.altKey, data: this.computePosition_(e ? { x: e.clientX - i.left, y: e.clientY - i.top } : void 0), sender: this, shiftKey: t.shiftKey }), this.lastTouch_ = e;
  }
  onTouchEnd_(t) {
    var e;
    const i = (e = t.targetTouches.item(0)) !== null && e !== void 0 ? e : this.lastTouch_, r = this.elem_.getBoundingClientRect();
    this.emitter.emit("up", { altKey: t.altKey, data: this.computePosition_(i ? { x: i.clientX - r.left, y: i.clientY - r.top } : void 0), sender: this, shiftKey: t.shiftKey });
  }
}
const Ke = Xt("txt");
class ky {
  constructor(t, e) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = e.props, this.props_.emitter.on("change", this.onChange_), this.element = t.createElement("div"), this.element.classList.add(Ke(), Ke(void 0, "num")), e.arrayPosition && this.element.classList.add(Ke(void 0, e.arrayPosition)), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("input");
    i.classList.add(Ke("i")), i.type = "text", e.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, this.onDraggingChange_ = this.onDraggingChange_.bind(this), this.dragging_ = e.dragging, this.dragging_.emitter.on("change", this.onDraggingChange_), this.element.classList.add(Ke()), this.inputElement.classList.add(Ke("i"));
    const r = t.createElement("div");
    r.classList.add(Ke("k")), this.element.appendChild(r), this.knobElement = r;
    const s = t.createElementNS(dn, "svg");
    s.classList.add(Ke("g")), this.knobElement.appendChild(s);
    const o = t.createElementNS(dn, "path");
    o.classList.add(Ke("gb")), s.appendChild(o), this.guideBodyElem_ = o;
    const a = t.createElementNS(dn, "path");
    a.classList.add(Ke("gh")), s.appendChild(a), this.guideHeadElem_ = a;
    const l = t.createElement("div");
    l.classList.add(Xt("tt")()), this.knobElement.appendChild(l), this.tooltipElem_ = l, e.value.emitter.on("change", this.onChange_), this.value = e.value, this.refresh();
  }
  onDraggingChange_(t) {
    if (t.rawValue === null) {
      this.element.classList.remove(Ke(void 0, "drg"));
      return;
    }
    this.element.classList.add(Ke(void 0, "drg"));
    const e = t.rawValue / this.props_.get("pointerScale"), i = e + (e > 0 ? -1 : e < 0 ? 1 : 0), r = ye(-i, -4, 4);
    this.guideHeadElem_.setAttributeNS(null, "d", [`M ${i + r},0 L${i},4 L${i + r},8`, `M ${e},-1 L${e},9`].join(" ")), this.guideBodyElem_.setAttributeNS(null, "d", `M 0,4 L${e},4`);
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
class as {
  constructor(t, e) {
    var i;
    this.originRawValue_ = 0, this.onInputChange_ = this.onInputChange_.bind(this), this.onInputKeyDown_ = this.onInputKeyDown_.bind(this), this.onInputKeyUp_ = this.onInputKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.parser_ = e.parser, this.props = e.props, this.sliderProps_ = (i = e.sliderProps) !== null && i !== void 0 ? i : null, this.value = e.value, this.viewProps = e.viewProps, this.dragging_ = le(null), this.view = new ky(t, { arrayPosition: e.arrayPosition, dragging: this.dragging_, props: this.props, value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.inputElement.addEventListener("keydown", this.onInputKeyDown_), this.view.inputElement.addEventListener("keyup", this.onInputKeyUp_);
    const r = new Ti(this.view.knobElement);
    r.emitter.on("down", this.onPointerDown_), r.emitter.on("move", this.onPointerMove_), r.emitter.on("up", this.onPointerUp_);
  }
  constrainValue_(t) {
    var e, i;
    const r = (e = this.sliderProps_) === null || e === void 0 ? void 0 : e.get("min"), s = (i = this.sliderProps_) === null || i === void 0 ? void 0 : i.get("max");
    let o = t;
    return r !== void 0 && (o = Math.max(o, r)), s !== void 0 && (o = Math.min(o, s)), o;
  }
  onInputChange_(t) {
    const i = t.currentTarget.value, r = this.parser_(i);
    se(r) || (this.value.rawValue = this.constrainValue_(r)), this.view.refresh();
  }
  onInputKeyDown_(t) {
    const e = Fe(this.props.get("keyScale"), jr(t));
    e !== 0 && this.value.setRawValue(this.constrainValue_(this.value.rawValue + e), { forceEmit: false, last: false });
  }
  onInputKeyUp_(t) {
    Fe(this.props.get("keyScale"), jr(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
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
const Ca = Xt("sld");
class Vy {
  constructor(t, e) {
    this.onChange_ = this.onChange_.bind(this), this.props_ = e.props, this.props_.emitter.on("change", this.onChange_), this.element = t.createElement("div"), this.element.classList.add(Ca()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("div");
    i.classList.add(Ca("t")), e.viewProps.bindTabIndex(i), this.element.appendChild(i), this.trackElement = i;
    const r = t.createElement("div");
    r.classList.add(Ca("k")), this.trackElement.appendChild(r), this.knobElement = r, e.value.emitter.on("change", this.onChange_), this.value = e.value, this.update_();
  }
  update_() {
    const t = ye(Jt(this.value.rawValue, this.props_.get("min"), this.props_.get("max"), 0, 100), 0, 100);
    this.knobElement.style.width = `${t}%`;
  }
  onChange_() {
    this.update_();
  }
}
class zy {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDownOrMove_ = this.onPointerDownOrMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.props = e.props, this.view = new Vy(t, { props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ti(this.view.trackElement), this.ptHandler_.emitter.on("down", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("move", this.onPointerDownOrMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.trackElement.addEventListener("keydown", this.onKeyDown_), this.view.trackElement.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    t.point && this.value.setRawValue(Jt(ye(t.point.x, 0, t.bounds.width), 0, t.bounds.width, this.props.get("min"), this.props.get("max")), e);
  }
  onPointerDownOrMove_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: false, last: false });
  }
  onPointerUp_(t) {
    this.handlePointerEvent_(t.data, { forceEmit: true, last: true });
  }
  onKeyDown_(t) {
    const e = Fe(this.props.get("keyScale"), Dn(t));
    e !== 0 && this.value.setRawValue(this.value.rawValue + e, { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    Fe(this.props.get("keyScale"), Dn(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const Ta = Xt("sldtxt");
class Hy {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(Ta());
    const i = t.createElement("div");
    i.classList.add(Ta("s")), this.sliderView_ = e.sliderView, i.appendChild(this.sliderView_.element), this.element.appendChild(i);
    const r = t.createElement("div");
    r.classList.add(Ta("t")), this.textView_ = e.textView, r.appendChild(this.textView_.element), this.element.appendChild(r);
  }
}
class So {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.sliderC_ = new zy(t, { props: e.sliderProps, value: e.value, viewProps: this.viewProps }), this.textC_ = new as(t, { parser: e.parser, props: e.textProps, sliderProps: e.sliderProps, value: e.value, viewProps: e.viewProps }), this.view = new Hy(t, { sliderView: this.sliderC_.view, textView: this.textC_.view });
  }
  get sliderController() {
    return this.sliderC_;
  }
  get textController() {
    return this.textC_;
  }
  importProps(t) {
    return Xe(t, null, (e) => ({ max: e.required.number, min: e.required.number }), (e) => {
      const i = this.sliderC_.props;
      return i.set("max", e.max), i.set("min", e.min), true;
    });
  }
  exportProps() {
    const t = this.sliderC_.props;
    return qe(null, { max: t.get("max"), min: t.get("min") });
  }
}
function jd(n) {
  return { sliderProps: new kt({ keyScale: n.keyScale, max: n.max, min: n.min }), textProps: new kt({ formatter: le(n.formatter), keyScale: n.keyScale, pointerScale: le(n.pointerScale) }) };
}
const Gy = { containerUnitSize: "cnt-usz" };
function Yd(n) {
  return `--${Gy[n]}`;
}
function Yr(n) {
  return Rd(n);
}
function Yn(n) {
  if (Sl(n)) return he(n, Yr);
}
function An(n, t) {
  if (!n) return;
  const e = [], i = Td(n, t);
  i && e.push(i);
  const r = Ad(n);
  return r && e.push(r), new rs(e);
}
function Wy(n) {
  return n ? n.major === mr.major : false;
}
function Kd(n) {
  if (n === "inline" || n === "popup") return n;
}
function ls(n, t) {
  n.write(t);
}
const Js = Xt("ckb");
class Xy {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.element = t.createElement("div"), this.element.classList.add(Js()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("label");
    i.classList.add(Js("l")), this.element.appendChild(i), this.labelElement = i;
    const r = t.createElement("input");
    r.classList.add(Js("i")), r.type = "checkbox", this.labelElement.appendChild(r), this.inputElement = r, e.viewProps.bindDisabled(this.inputElement);
    const s = t.createElement("div");
    s.classList.add(Js("w")), this.labelElement.appendChild(s);
    const o = Do(t, "check");
    s.appendChild(o), e.value.emitter.on("change", this.onValueChange_), this.value = e.value, this.update_();
  }
  update_() {
    this.inputElement.checked = this.value.rawValue;
  }
  onValueChange_() {
    this.update_();
  }
}
class qy {
  constructor(t, e) {
    this.onInputChange_ = this.onInputChange_.bind(this), this.onLabelMouseDown_ = this.onLabelMouseDown_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new Xy(t, { value: this.value, viewProps: this.viewProps }), this.view.inputElement.addEventListener("change", this.onInputChange_), this.view.labelElement.addEventListener("mousedown", this.onLabelMouseDown_);
  }
  onInputChange_(t) {
    const e = t.currentTarget;
    this.value.rawValue = e.checked, t.preventDefault(), t.stopPropagation();
  }
  onLabelMouseDown_(t) {
    t.preventDefault();
  }
}
function jy(n) {
  const t = [], e = uc(n.options);
  return e && t.push(e), new rs(t);
}
const Yy = Ie({ id: "input-bool", type: "input", accept: (n, t) => {
  if (typeof n != "boolean") return null;
  const e = he(t, (i) => ({ options: i.optional.custom(os), readonly: i.optional.constant(false) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Wd, constraint: (n) => jy(n.params), writer: (n) => ls }, controller: (n) => {
  const t = n.document, e = n.value, i = n.constraint, r = i && wo(i, ss);
  return r ? new ei(t, { props: new kt({ options: r.values.value("options") }), value: e, viewProps: n.viewProps }) : new qy(t, { value: e, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "boolean" ? null : n.controller.valueController instanceof ei ? new cc(n.controller) : null;
} }), hi = Xt("col");
class Ky {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(hi()), e.foldable.bindExpandedClass(this.element, hi(void 0, "expanded")), fn(e.foldable, "completed", fr(this.element, hi(void 0, "cpl")));
    const i = t.createElement("div");
    i.classList.add(hi("h")), this.element.appendChild(i);
    const r = t.createElement("div");
    r.classList.add(hi("s")), i.appendChild(r), this.swatchElement = r;
    const s = t.createElement("div");
    if (s.classList.add(hi("t")), i.appendChild(s), this.textElement = s, e.pickerLayout === "inline") {
      const o = t.createElement("div");
      o.classList.add(hi("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
}
function $y(n, t, e) {
  const i = ye(n / 255, 0, 1), r = ye(t / 255, 0, 1), s = ye(e / 255, 0, 1), o = Math.max(i, r, s), a = Math.min(i, r, s), l = o - a;
  let c = 0, h = 0;
  const u = (a + o) / 2;
  return l !== 0 && (h = l / (1 - Math.abs(o + a - 1)), i === o ? c = (r - s) / l : r === o ? c = 2 + (s - i) / l : c = 4 + (i - r) / l, c = c / 6 + (c < 0 ? 1 : 0)), [c * 360, h * 100, u * 100];
}
function Zy(n, t, e) {
  const i = (n % 360 + 360) % 360, r = ye(t / 100, 0, 1), s = ye(e / 100, 0, 1), o = (1 - Math.abs(2 * s - 1)) * r, a = o * (1 - Math.abs(i / 60 % 2 - 1)), l = s - o / 2;
  let c, h, u;
  return i >= 0 && i < 60 ? [c, h, u] = [o, a, 0] : i >= 60 && i < 120 ? [c, h, u] = [a, o, 0] : i >= 120 && i < 180 ? [c, h, u] = [0, o, a] : i >= 180 && i < 240 ? [c, h, u] = [0, a, o] : i >= 240 && i < 300 ? [c, h, u] = [a, 0, o] : [c, h, u] = [o, 0, a], [(c + l) * 255, (h + l) * 255, (u + l) * 255];
}
function Jy(n, t, e) {
  const i = ye(n / 255, 0, 1), r = ye(t / 255, 0, 1), s = ye(e / 255, 0, 1), o = Math.max(i, r, s), a = Math.min(i, r, s), l = o - a;
  let c;
  l === 0 ? c = 0 : o === i ? c = 60 * (((r - s) / l % 6 + 6) % 6) : o === r ? c = 60 * ((s - i) / l + 2) : c = 60 * ((i - r) / l + 4);
  const h = o === 0 ? 0 : l / o, u = o;
  return [c, h * 100, u * 100];
}
function $d(n, t, e) {
  const i = Sd(n, 360), r = ye(t / 100, 0, 1), s = ye(e / 100, 0, 1), o = s * r, a = o * (1 - Math.abs(i / 60 % 2 - 1)), l = s - o;
  let c, h, u;
  return i >= 0 && i < 60 ? [c, h, u] = [o, a, 0] : i >= 60 && i < 120 ? [c, h, u] = [a, o, 0] : i >= 120 && i < 180 ? [c, h, u] = [0, o, a] : i >= 180 && i < 240 ? [c, h, u] = [0, a, o] : i >= 240 && i < 300 ? [c, h, u] = [a, 0, o] : [c, h, u] = [o, 0, a], [(c + l) * 255, (h + l) * 255, (u + l) * 255];
}
function Qy(n, t, e) {
  const i = e + t * (100 - Math.abs(2 * e - 100)) / 200;
  return [n, i !== 0 ? t * (100 - Math.abs(2 * e - 100)) / i : 0, e + t * (100 - Math.abs(2 * e - 100)) / (2 * 100)];
}
function tw(n, t, e) {
  const i = 100 - Math.abs(e * (200 - t) / 100 - 100);
  return [n, i !== 0 ? t * e / i : 0, e * (200 - t) / (2 * 100)];
}
function mn(n) {
  return [n[0], n[1], n[2]];
}
function Uo(n, t) {
  return [n[0], n[1], n[2], t];
}
const ew = { hsl: { hsl: (n, t, e) => [n, t, e], hsv: Qy, rgb: Zy }, hsv: { hsl: tw, hsv: (n, t, e) => [n, t, e], rgb: $d }, rgb: { hsl: $y, hsv: Jy, rgb: (n, t, e) => [n, t, e] } };
function dr(n, t) {
  return [t === "float" ? 1 : n === "rgb" ? 255 : 360, t === "float" ? 1 : n === "rgb" ? 255 : 100, t === "float" ? 1 : n === "rgb" ? 255 : 100];
}
function nw(n, t) {
  return n === t ? t : Sd(n, t);
}
function Zd(n, t, e) {
  var i;
  const r = dr(t, e);
  return [t === "rgb" ? ye(n[0], 0, r[0]) : nw(n[0], r[0]), ye(n[1], 0, r[1]), ye(n[2], 0, r[2]), ye((i = n[3]) !== null && i !== void 0 ? i : 1, 0, 1)];
}
function lu(n, t, e, i) {
  const r = dr(t, e), s = dr(t, i);
  return n.map((o, a) => o / r[a] * s[a]);
}
function Jd(n, t, e) {
  const i = lu(n, t.mode, t.type, "int"), r = ew[t.mode][e.mode](...i);
  return lu(r, e.mode, "int", e.type);
}
class jt {
  static black() {
    return new jt([0, 0, 0], "rgb");
  }
  constructor(t, e) {
    this.type = "int", this.mode = e, this.comps_ = Zd(t, e, this.type);
  }
  getComponents(t) {
    return Uo(Jd(mn(this.comps_), { mode: this.mode, type: this.type }, { mode: t ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const t = this.getComponents("rgb");
    return { r: t[0], g: t[1], b: t[2], a: t[3] };
  }
}
const Hn = Xt("colp");
class iw {
  constructor(t, e) {
    this.alphaViews_ = null, this.element = t.createElement("div"), this.element.classList.add(Hn()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("div");
    i.classList.add(Hn("hsv"));
    const r = t.createElement("div");
    r.classList.add(Hn("sv")), this.svPaletteView_ = e.svPaletteView, r.appendChild(this.svPaletteView_.element), i.appendChild(r);
    const s = t.createElement("div");
    s.classList.add(Hn("h")), this.hPaletteView_ = e.hPaletteView, s.appendChild(this.hPaletteView_.element), i.appendChild(s), this.element.appendChild(i);
    const o = t.createElement("div");
    if (o.classList.add(Hn("rgb")), this.textsView_ = e.textsView, o.appendChild(this.textsView_.element), this.element.appendChild(o), e.alphaViews) {
      this.alphaViews_ = { palette: e.alphaViews.palette, text: e.alphaViews.text };
      const a = t.createElement("div");
      a.classList.add(Hn("a"));
      const l = t.createElement("div");
      l.classList.add(Hn("ap")), l.appendChild(this.alphaViews_.palette.element), a.appendChild(l);
      const c = t.createElement("div");
      c.classList.add(Hn("at")), c.appendChild(this.alphaViews_.text.element), a.appendChild(c), this.element.appendChild(a);
    }
  }
  get allFocusableElements() {
    const t = [this.svPaletteView_.element, this.hPaletteView_.element, this.textsView_.modeSelectElement, ...this.textsView_.inputViews.map((e) => e.inputElement)];
    return this.alphaViews_ && t.push(this.alphaViews_.palette.element, this.alphaViews_.text.inputElement), t;
  }
}
function rw(n) {
  return n === "int" ? "int" : n === "float" ? "float" : void 0;
}
function dc(n) {
  return he(n, (t) => ({ color: t.optional.object({ alpha: t.optional.boolean, type: t.optional.custom(rw) }), expanded: t.optional.boolean, picker: t.optional.custom(Kd), readonly: t.optional.constant(false) }));
}
function Si(n) {
  return n ? 0.1 : 1;
}
function Qd(n) {
  var t;
  return (t = n.color) === null || t === void 0 ? void 0 : t.type;
}
class pc {
  constructor(t, e) {
    this.type = "float", this.mode = e, this.comps_ = Zd(t, e, this.type);
  }
  getComponents(t) {
    return Uo(Jd(mn(this.comps_), { mode: this.mode, type: this.type }, { mode: t ?? this.mode, type: this.type }), this.comps_[3]);
  }
  toRgbaObject() {
    const t = this.getComponents("rgb");
    return { r: t[0], g: t[1], b: t[2], a: t[3] };
  }
}
const sw = { int: (n, t) => new jt(n, t), float: (n, t) => new pc(n, t) };
function fc(n, t, e) {
  return sw[e](n, t);
}
function ow(n) {
  return n.type === "float";
}
function aw(n) {
  return n.type === "int";
}
function lw(n) {
  const t = n.getComponents(), e = dr(n.mode, "int");
  return new jt([Math.round(Jt(t[0], 0, 1, 0, e[0])), Math.round(Jt(t[1], 0, 1, 0, e[1])), Math.round(Jt(t[2], 0, 1, 0, e[2])), t[3]], n.mode);
}
function cw(n) {
  const t = n.getComponents(), e = dr(n.mode, "int");
  return new pc([Jt(t[0], 0, e[0], 0, 1), Jt(t[1], 0, e[1], 0, 1), Jt(t[2], 0, e[2], 0, 1), t[3]], n.mode);
}
function De(n, t) {
  if (n.type === t) return n;
  if (aw(n) && t === "float") return cw(n);
  if (ow(n) && t === "int") return lw(n);
  throw de.shouldNeverHappen();
}
function hw(n, t) {
  return n.alpha === t.alpha && n.mode === t.mode && n.notation === t.notation && n.type === t.type;
}
function Ze(n, t) {
  const e = n.match(/^(.+)%$/);
  return Math.min(e ? parseFloat(e[1]) * 0.01 * t : parseFloat(n), t);
}
const uw = { deg: (n) => n, grad: (n) => n * 360 / 400, rad: (n) => n * 360 / (2 * Math.PI), turn: (n) => n * 360 };
function tp(n) {
  const t = n.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);
  if (!t) return parseFloat(n);
  const e = parseFloat(t[1]), i = t[2];
  return uw[i](e);
}
function ep(n) {
  const t = n.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [Ze(t[1], 255), Ze(t[2], 255), Ze(t[3], 255)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function dw(n) {
  const t = ep(n);
  return t ? new jt(t, "rgb") : null;
}
function np(n) {
  const t = n.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [Ze(t[1], 255), Ze(t[2], 255), Ze(t[3], 255), Ze(t[4], 1)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function pw(n) {
  const t = np(n);
  return t ? new jt(t, "rgb") : null;
}
function ip(n) {
  const t = n.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [tp(t[1]), Ze(t[2], 100), Ze(t[3], 100)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function fw(n) {
  const t = ip(n);
  return t ? new jt(t, "hsl") : null;
}
function rp(n) {
  const t = n.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);
  if (!t) return null;
  const e = [tp(t[1]), Ze(t[2], 100), Ze(t[3], 100), Ze(t[4], 1)];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function mw(n) {
  const t = rp(n);
  return t ? new jt(t, "hsl") : null;
}
function sp(n) {
  const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (t) return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
  const e = n.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] : null;
}
function _w(n) {
  const t = sp(n);
  return t ? new jt(t, "rgb") : null;
}
function op(n) {
  const t = n.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);
  if (t) return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), Jt(parseInt(t[4] + t[4], 16), 0, 255, 0, 1)];
  const e = n.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);
  return e ? [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), Jt(parseInt(e[4], 16), 0, 255, 0, 1)] : null;
}
function vw(n) {
  const t = op(n);
  return t ? new jt(t, "rgb") : null;
}
function ap(n) {
  const t = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!t) return null;
  const e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3])];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) ? null : e;
}
function gw(n) {
  return (t) => {
    const e = ap(t);
    return e ? fc(e, "rgb", n) : null;
  };
}
function lp(n) {
  const t = n.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);
  if (!t) return null;
  const e = [parseFloat(t[1]), parseFloat(t[2]), parseFloat(t[3]), parseFloat(t[4])];
  return isNaN(e[0]) || isNaN(e[1]) || isNaN(e[2]) || isNaN(e[3]) ? null : e;
}
function xw(n) {
  return (t) => {
    const e = lp(t);
    return e ? fc(e, "rgb", n) : null;
  };
}
const bw = [{ parser: sp, result: { alpha: false, mode: "rgb", notation: "hex" } }, { parser: op, result: { alpha: true, mode: "rgb", notation: "hex" } }, { parser: ep, result: { alpha: false, mode: "rgb", notation: "func" } }, { parser: np, result: { alpha: true, mode: "rgb", notation: "func" } }, { parser: ip, result: { alpha: false, mode: "hsl", notation: "func" } }, { parser: rp, result: { alpha: true, mode: "hsl", notation: "func" } }, { parser: ap, result: { alpha: false, mode: "rgb", notation: "object" } }, { parser: lp, result: { alpha: true, mode: "rgb", notation: "object" } }];
function yw(n) {
  return bw.reduce((t, { parser: e, result: i }) => t || (e(n) ? i : null), null);
}
function ww(n, t = "int") {
  const e = yw(n);
  return e ? e.notation === "hex" && t !== "float" ? Object.assign(Object.assign({}, e), { type: "int" }) : e.notation === "func" ? Object.assign(Object.assign({}, e), { type: t }) : null : null;
}
function cs(n) {
  const t = [_w, vw, dw, pw, fw, mw];
  t.push(gw("int"), xw("int"));
  const e = Oy(t);
  return (i) => {
    const r = e(i);
    return r ? De(r, n) : null;
  };
}
function Mw(n) {
  const t = cs("int");
  if (typeof n != "string") return jt.black();
  const e = t(n);
  return e ?? jt.black();
}
function cp(n) {
  const t = ye(Math.floor(n), 0, 255).toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function mc(n, t = "#") {
  const e = mn(n.getComponents("rgb")).map(cp).join("");
  return `${t}${e}`;
}
function _c(n, t = "#") {
  const e = n.getComponents("rgb"), i = [e[0], e[1], e[2], e[3] * 255].map(cp).join("");
  return `${t}${i}`;
}
function hp(n) {
  const t = ke(0), e = De(n, "int");
  return `rgb(${mn(e.getComponents("rgb")).map((r) => t(r)).join(", ")})`;
}
function oo(n) {
  const t = ke(2), e = ke(0);
  return `rgba(${De(n, "int").getComponents("rgb").map((s, o) => (o === 3 ? t : e)(s)).join(", ")})`;
}
function Sw(n) {
  const t = [ke(0), Mo, Mo], e = De(n, "int");
  return `hsl(${mn(e.getComponents("hsl")).map((r, s) => t[s](r)).join(", ")})`;
}
function Ew(n) {
  const t = [ke(0), Mo, Mo, ke(2)];
  return `hsla(${De(n, "int").getComponents("hsl").map((r, s) => t[s](r)).join(", ")})`;
}
function up(n, t) {
  const e = ke(t === "float" ? 2 : 0), i = ["r", "g", "b"], r = De(n, t);
  return `{${mn(r.getComponents("rgb")).map((o, a) => `${i[a]}: ${e(o)}`).join(", ")}}`;
}
function Cw(n) {
  return (t) => up(t, n);
}
function dp(n, t) {
  const e = ke(2), i = ke(t === "float" ? 2 : 0), r = ["r", "g", "b", "a"];
  return `{${De(n, t).getComponents("rgb").map((a, l) => {
    const c = l === 3 ? e : i;
    return `${r[l]}: ${c(a)}`;
  }).join(", ")}}`;
}
function Tw(n) {
  return (t) => dp(t, n);
}
const Aw = [{ format: { alpha: false, mode: "rgb", notation: "hex", type: "int" }, stringifier: mc }, { format: { alpha: true, mode: "rgb", notation: "hex", type: "int" }, stringifier: _c }, { format: { alpha: false, mode: "rgb", notation: "func", type: "int" }, stringifier: hp }, { format: { alpha: true, mode: "rgb", notation: "func", type: "int" }, stringifier: oo }, { format: { alpha: false, mode: "hsl", notation: "func", type: "int" }, stringifier: Sw }, { format: { alpha: true, mode: "hsl", notation: "func", type: "int" }, stringifier: Ew }, ...["int", "float"].reduce((n, t) => [...n, { format: { alpha: false, mode: "rgb", notation: "object", type: t }, stringifier: Cw(t) }, { format: { alpha: true, mode: "rgb", notation: "object", type: t }, stringifier: Tw(t) }], [])];
function pp(n) {
  return Aw.reduce((t, e) => t || (hw(e.format, n) ? e.stringifier : null), null);
}
const Rr = Xt("apl");
class Pw {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.element = t.createElement("div"), this.element.classList.add(Rr()), e.viewProps.bindClassModifiers(this.element), e.viewProps.bindTabIndex(this.element);
    const i = t.createElement("div");
    i.classList.add(Rr("b")), this.element.appendChild(i);
    const r = t.createElement("div");
    r.classList.add(Rr("c")), i.appendChild(r), this.colorElem_ = r;
    const s = t.createElement("div");
    s.classList.add(Rr("m")), this.element.appendChild(s), this.markerElem_ = s;
    const o = t.createElement("div");
    o.classList.add(Rr("p")), this.markerElem_.appendChild(o), this.previewElem_ = o, this.update_();
  }
  update_() {
    const t = this.value.rawValue, e = t.getComponents("rgb"), i = new jt([e[0], e[1], e[2], 0], "rgb"), r = new jt([e[0], e[1], e[2], 255], "rgb"), s = ["to right", oo(i), oo(r)];
    this.colorElem_.style.background = `linear-gradient(${s.join(",")})`, this.previewElem_.style.backgroundColor = oo(t);
    const o = Jt(e[3], 0, 1, 0, 100);
    this.markerElem_.style.left = `${o}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class Rw {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new Pw(t, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ti(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = t.point.x / t.bounds.width, r = this.value.rawValue, [s, o, a] = r.getComponents("hsv");
    this.value.setRawValue(new jt([s, o, a, i], "hsv"), e);
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
    const e = Fe(Si(true), Dn(t));
    if (e === 0) return;
    const i = this.value.rawValue, [r, s, o, a] = i.getComponents("hsv");
    this.value.setRawValue(new jt([r, s, o, a + e], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    Fe(Si(true), Dn(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const ji = Xt("coltxt");
function Lw(n) {
  const t = n.createElement("select"), e = [{ text: "RGB", value: "rgb" }, { text: "HSL", value: "hsl" }, { text: "HSV", value: "hsv" }, { text: "HEX", value: "hex" }];
  return t.appendChild(e.reduce((i, r) => {
    const s = n.createElement("option");
    return s.textContent = r.text, s.value = r.value, i.appendChild(s), i;
  }, n.createDocumentFragment())), t;
}
class Dw {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(ji()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("div");
    i.classList.add(ji("m")), this.modeElem_ = Lw(t), this.modeElem_.classList.add(ji("ms")), i.appendChild(this.modeSelectElement), e.viewProps.bindDisabled(this.modeElem_);
    const r = t.createElement("div");
    r.classList.add(ji("mm")), r.appendChild(Do(t, "dropdown")), i.appendChild(r), this.element.appendChild(i);
    const s = t.createElement("div");
    s.classList.add(ji("w")), this.element.appendChild(s), this.inputsElem_ = s, this.inputViews_ = e.inputViews, this.applyInputViews_(), Pn(e.mode, (o) => {
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
    Id(this.inputsElem_);
    const t = this.element.ownerDocument;
    this.inputViews_.forEach((e) => {
      const i = t.createElement("div");
      i.classList.add(ji("c")), i.appendChild(e.element), this.inputsElem_.appendChild(i);
    });
  }
}
function Iw(n) {
  return ke(n === "float" ? 2 : 0);
}
function Uw(n, t, e) {
  const i = dr(n, t)[e];
  return new es({ min: 0, max: i });
}
function Nw(n, t, e) {
  return new as(n, { arrayPosition: e === 0 ? "fst" : e === 2 ? "lst" : "mid", parser: t.parser, props: kt.fromObject({ formatter: Iw(t.colorType), keyScale: Si(false), pointerScale: t.colorType === "float" ? 0.01 : 1 }), value: le(0, { constraint: Uw(t.colorMode, t.colorType, e) }), viewProps: t.viewProps });
}
function Ow(n, t) {
  const e = { colorMode: t.colorMode, colorType: t.colorType, parser: Ln, viewProps: t.viewProps };
  return [0, 1, 2].map((i) => {
    const r = Nw(n, e, i);
    return vr({ primary: t.value, secondary: r.value, forward(s) {
      return De(s, t.colorType).getComponents(t.colorMode)[i];
    }, backward(s, o) {
      const a = t.colorMode, c = De(s, t.colorType).getComponents(a);
      c[i] = o;
      const h = fc(Uo(mn(c), c[3]), a, t.colorType);
      return De(h, "int");
    } }), r;
  });
}
function Fw(n, t) {
  const e = new qr(n, { parser: cs("int"), props: kt.fromObject({ formatter: mc }), value: le(jt.black()), viewProps: t.viewProps });
  return vr({ primary: t.value, secondary: e.value, forward: (i) => new jt(mn(i.getComponents()), i.mode), backward: (i, r) => new jt(Uo(mn(r.getComponents(i.mode)), i.getComponents()[3]), i.mode) }), [e];
}
function Bw(n) {
  return n !== "hex";
}
class kw {
  constructor(t, e) {
    this.onModeSelectChange_ = this.onModeSelectChange_.bind(this), this.colorType_ = e.colorType, this.value = e.value, this.viewProps = e.viewProps, this.colorMode = le(this.value.rawValue.mode), this.ccs_ = this.createComponentControllers_(t), this.view = new Dw(t, { mode: this.colorMode, inputViews: [this.ccs_[0].view, this.ccs_[1].view, this.ccs_[2].view], viewProps: this.viewProps }), this.view.modeSelectElement.addEventListener("change", this.onModeSelectChange_);
  }
  createComponentControllers_(t) {
    const e = this.colorMode.rawValue;
    return Bw(e) ? Ow(t, { colorMode: e, colorType: this.colorType_, value: this.value, viewProps: this.viewProps }) : Fw(t, { value: this.value, viewProps: this.viewProps });
  }
  onModeSelectChange_(t) {
    const e = t.currentTarget;
    this.colorMode.rawValue = e.value, this.ccs_ = this.createComponentControllers_(this.view.element.ownerDocument), this.view.inputViews = this.ccs_.map((i) => i.view);
  }
}
const Aa = Xt("hpl");
class Vw {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.element = t.createElement("div"), this.element.classList.add(Aa()), e.viewProps.bindClassModifiers(this.element), e.viewProps.bindTabIndex(this.element);
    const i = t.createElement("div");
    i.classList.add(Aa("c")), this.element.appendChild(i);
    const r = t.createElement("div");
    r.classList.add(Aa("m")), this.element.appendChild(r), this.markerElem_ = r, this.update_();
  }
  update_() {
    const t = this.value.rawValue, [e] = t.getComponents("hsv");
    this.markerElem_.style.backgroundColor = hp(new jt([e, 100, 100], "hsv"));
    const i = Jt(e, 0, 360, 0, 100);
    this.markerElem_.style.left = `${i}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class zw {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new Vw(t, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ti(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = Jt(ye(t.point.x, 0, t.bounds.width), 0, t.bounds.width, 0, 360), r = this.value.rawValue, [, s, o, a] = r.getComponents("hsv");
    this.value.setRawValue(new jt([i, s, o, a], "hsv"), e);
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
    const e = Fe(Si(false), Dn(t));
    if (e === 0) return;
    const i = this.value.rawValue, [r, s, o, a] = i.getComponents("hsv");
    this.value.setRawValue(new jt([r + e, s, o, a], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    Fe(Si(false), Dn(t)) !== 0 && this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
const Pa = Xt("svp"), cu = 64;
class Hw {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), this.value = e.value, this.value.emitter.on("change", this.onValueChange_), this.element = t.createElement("div"), this.element.classList.add(Pa()), e.viewProps.bindClassModifiers(this.element), e.viewProps.bindTabIndex(this.element);
    const i = t.createElement("canvas");
    i.height = cu, i.width = cu, i.classList.add(Pa("c")), this.element.appendChild(i), this.canvasElement = i;
    const r = t.createElement("div");
    r.classList.add(Pa("m")), this.element.appendChild(r), this.markerElem_ = r, this.update_();
  }
  update_() {
    const t = zb(this.canvasElement);
    if (!t) return;
    const i = this.value.rawValue.getComponents("hsv"), r = this.canvasElement.width, s = this.canvasElement.height, o = t.getImageData(0, 0, r, s), a = o.data;
    for (let h = 0; h < s; h++) for (let u = 0; u < r; u++) {
      const d = Jt(u, 0, r, 0, 100), f = Jt(h, 0, s, 100, 0), _ = $d(i[0], d, f), x = (h * r + u) * 4;
      a[x] = _[0], a[x + 1] = _[1], a[x + 2] = _[2], a[x + 3] = 255;
    }
    t.putImageData(o, 0, 0);
    const l = Jt(i[1], 0, 100, 0, 100);
    this.markerElem_.style.left = `${l}%`;
    const c = Jt(i[2], 0, 100, 100, 0);
    this.markerElem_.style.top = `${c}%`;
  }
  onValueChange_() {
    this.update_();
  }
}
class Gw {
  constructor(t, e) {
    this.onKeyDown_ = this.onKeyDown_.bind(this), this.onKeyUp_ = this.onKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.view = new Hw(t, { value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ti(this.view.element), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.element.addEventListener("keydown", this.onKeyDown_), this.view.element.addEventListener("keyup", this.onKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = Jt(t.point.x, 0, t.bounds.width, 0, 100), r = Jt(t.point.y, 0, t.bounds.height, 100, 0), [s, , , o] = this.value.rawValue.getComponents("hsv");
    this.value.setRawValue(new jt([s, i, r, o], "hsv"), e);
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
    qd(t.key) && t.preventDefault();
    const [e, i, r, s] = this.value.rawValue.getComponents("hsv"), o = Si(false), a = Fe(o, Dn(t)), l = Fe(o, jr(t));
    a === 0 && l === 0 || this.value.setRawValue(new jt([e, i + a, r + l, s], "hsv"), { forceEmit: false, last: false });
  }
  onKeyUp_(t) {
    const e = Si(false), i = Fe(e, Dn(t)), r = Fe(e, jr(t));
    i === 0 && r === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
class Ww {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.hPaletteC_ = new zw(t, { value: this.value, viewProps: this.viewProps }), this.svPaletteC_ = new Gw(t, { value: this.value, viewProps: this.viewProps }), this.alphaIcs_ = e.supportsAlpha ? { palette: new Rw(t, { value: this.value, viewProps: this.viewProps }), text: new as(t, { parser: Ln, props: kt.fromObject({ pointerScale: 0.01, keyScale: 0.1, formatter: ke(2) }), value: le(0, { constraint: new es({ min: 0, max: 1 }) }), viewProps: this.viewProps }) } : null, this.alphaIcs_ && vr({ primary: this.value, secondary: this.alphaIcs_.text.value, forward: (i) => i.getComponents()[3], backward: (i, r) => {
      const s = i.getComponents();
      return s[3] = r, new jt(s, i.mode);
    } }), this.textsC_ = new kw(t, { colorType: e.colorType, value: this.value, viewProps: this.viewProps }), this.view = new iw(t, { alphaViews: this.alphaIcs_ ? { palette: this.alphaIcs_.palette.view, text: this.alphaIcs_.text.view } : null, hPaletteView: this.hPaletteC_.view, supportsAlpha: e.supportsAlpha, svPaletteView: this.svPaletteC_.view, textsView: this.textsC_.view, viewProps: this.viewProps });
  }
  get textsController() {
    return this.textsC_;
  }
}
const Ra = Xt("colsw");
class Xw {
  constructor(t, e) {
    this.onValueChange_ = this.onValueChange_.bind(this), e.value.emitter.on("change", this.onValueChange_), this.value = e.value, this.element = t.createElement("div"), this.element.classList.add(Ra()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("div");
    i.classList.add(Ra("sw")), this.element.appendChild(i), this.swatchElem_ = i;
    const r = t.createElement("button");
    r.classList.add(Ra("b")), e.viewProps.bindDisabled(r), this.element.appendChild(r), this.buttonElement = r, this.update_();
  }
  update_() {
    const t = this.value.rawValue;
    this.swatchElem_.style.backgroundColor = _c(t);
  }
  onValueChange_() {
    this.update_();
  }
}
class qw {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.view = new Xw(t, { value: this.value, viewProps: this.viewProps });
  }
}
class vc {
  constructor(t, e) {
    this.onButtonBlur_ = this.onButtonBlur_.bind(this), this.onButtonClick_ = this.onButtonClick_.bind(this), this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.foldable_ = is.create(e.expanded), this.swatchC_ = new qw(t, { value: this.value, viewProps: this.viewProps });
    const i = this.swatchC_.view.buttonElement;
    i.addEventListener("blur", this.onButtonBlur_), i.addEventListener("click", this.onButtonClick_), this.textC_ = new qr(t, { parser: e.parser, props: kt.fromObject({ formatter: e.formatter }), value: this.value, viewProps: this.viewProps }), this.view = new Ky(t, { foldable: this.foldable_, pickerLayout: e.pickerLayout }), this.view.swatchElement.appendChild(this.swatchC_.view.element), this.view.textElement.appendChild(this.textC_.view.element), this.popC_ = e.pickerLayout === "popup" ? new Gd(t, { viewProps: this.viewProps }) : null;
    const r = new Ww(t, { colorType: e.colorType, supportsAlpha: e.supportsAlpha, value: this.value, viewProps: this.viewProps });
    r.view.allFocusableElements.forEach((s) => {
      s.addEventListener("blur", this.onPopupChildBlur_), s.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = r, this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(r.view.element), vr({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (s) => s, backward: (s, o) => o })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), lc(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onButtonBlur_(t) {
    if (!this.popC_) return;
    const e = this.view.element, i = t.relatedTarget;
    (!i || !e.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(t) {
    if (!this.popC_) return;
    const e = this.popC_.view.element, i = Ud(t);
    i && e.contains(i) || i && i === this.swatchC_.view.buttonElement && !nc(e.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(t) {
    this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && t.key === "Escape" && this.swatchC_.view.buttonElement.focus();
  }
}
function jw(n) {
  return mn(n.getComponents("rgb")).reduce((t, e) => t << 8 | Math.floor(e) & 255, 0);
}
function Yw(n) {
  return n.getComponents("rgb").reduce((t, e, i) => {
    const r = Math.floor(i === 3 ? e * 255 : e) & 255;
    return t << 8 | r;
  }, 0) >>> 0;
}
function Kw(n) {
  return new jt([n >> 16 & 255, n >> 8 & 255, n & 255], "rgb");
}
function $w(n) {
  return new jt([n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Jt(n & 255, 0, 255, 0, 1)], "rgb");
}
function Zw(n) {
  return typeof n != "number" ? jt.black() : Kw(n);
}
function Jw(n) {
  return typeof n != "number" ? jt.black() : $w(n);
}
function ao(n, t) {
  return typeof n != "object" || se(n) ? false : t in n && typeof n[t] == "number";
}
function fp(n) {
  return ao(n, "r") && ao(n, "g") && ao(n, "b");
}
function mp(n) {
  return fp(n) && ao(n, "a");
}
function _p(n) {
  return fp(n);
}
function gc(n, t) {
  if (n.mode !== t.mode || n.type !== t.type) return false;
  const e = n.getComponents(), i = t.getComponents();
  for (let r = 0; r < e.length; r++) if (e[r] !== i[r]) return false;
  return true;
}
function hu(n) {
  return "a" in n ? [n.r, n.g, n.b, n.a] : [n.r, n.g, n.b];
}
function Qw(n) {
  const t = pp(n);
  return t ? (e, i) => {
    ls(e, t(i));
  } : null;
}
function tM(n) {
  const t = n ? Yw : jw;
  return (e, i) => {
    ls(e, t(i));
  };
}
function eM(n, t, e) {
  const r = De(t, e).toRgbaObject();
  n.writeProperty("r", r.r), n.writeProperty("g", r.g), n.writeProperty("b", r.b), n.writeProperty("a", r.a);
}
function nM(n, t, e) {
  const r = De(t, e).toRgbaObject();
  n.writeProperty("r", r.r), n.writeProperty("g", r.g), n.writeProperty("b", r.b);
}
function iM(n, t) {
  return (e, i) => {
    n ? eM(e, i, t) : nM(e, i, t);
  };
}
function rM(n) {
  var t;
  return !!(!((t = n == null ? void 0 : n.color) === null || t === void 0) && t.alpha);
}
function sM(n) {
  return n ? (t) => _c(t, "0x") : (t) => mc(t, "0x");
}
function oM(n) {
  return "color" in n || n.view === "color";
}
const aM = Ie({ id: "input-color-number", type: "input", accept: (n, t) => {
  if (typeof n != "number" || !oM(t)) return null;
  const e = dc(t);
  return e ? { initialValue: n, params: Object.assign(Object.assign({}, e), { supportsAlpha: rM(t) }) } : null;
}, binding: { reader: (n) => n.params.supportsAlpha ? Jw : Zw, equals: gc, writer: (n) => tM(n.params.supportsAlpha) }, controller: (n) => {
  var t, e;
  return new vc(n.document, { colorType: "int", expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, formatter: sM(n.params.supportsAlpha), parser: cs("int"), pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", supportsAlpha: n.params.supportsAlpha, value: n.value, viewProps: n.viewProps });
} });
function lM(n, t) {
  if (!_p(n)) return De(jt.black(), t);
  if (t === "int") {
    const e = hu(n);
    return new jt(e, "rgb");
  }
  if (t === "float") {
    const e = hu(n);
    return new pc(e, "rgb");
  }
  return De(jt.black(), "int");
}
function cM(n) {
  return mp(n);
}
function hM(n) {
  return (t) => {
    const e = lM(t, n);
    return De(e, "int");
  };
}
function uM(n, t) {
  return (e) => n ? dp(e, t) : up(e, t);
}
const dM = Ie({ id: "input-color-object", type: "input", accept: (n, t) => {
  var e;
  if (!_p(n)) return null;
  const i = dc(t);
  return i ? { initialValue: n, params: Object.assign(Object.assign({}, i), { colorType: (e = Qd(t)) !== null && e !== void 0 ? e : "int" }) } : null;
}, binding: { reader: (n) => hM(n.params.colorType), equals: gc, writer: (n) => iM(cM(n.initialValue), n.params.colorType) }, controller: (n) => {
  var t, e;
  const i = mp(n.initialValue);
  return new vc(n.document, { colorType: n.params.colorType, expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, formatter: uM(i, n.params.colorType), parser: cs("int"), pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", supportsAlpha: i, value: n.value, viewProps: n.viewProps });
} }), pM = Ie({ id: "input-color-string", type: "input", accept: (n, t) => {
  if (typeof n != "string" || t.view === "text") return null;
  const e = ww(n, Qd(t));
  if (!e) return null;
  const i = pp(e);
  if (!i) return null;
  const r = dc(t);
  return r ? { initialValue: n, params: Object.assign(Object.assign({}, r), { format: e, stringifier: i }) } : null;
}, binding: { reader: () => Mw, equals: gc, writer: (n) => {
  const t = Qw(n.params.format);
  if (!t) throw de.notBindable();
  return t;
} }, controller: (n) => {
  var t, e;
  return new vc(n.document, { colorType: n.params.format.type, expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, formatter: n.params.stringifier, parser: cs("int"), pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", supportsAlpha: n.params.format.alpha, value: n.value, viewProps: n.viewProps });
} });
class xc {
  constructor(t) {
    this.components = t.components, this.asm_ = t.assembly;
  }
  constrain(t) {
    const e = this.asm_.toComponents(t).map((i, r) => {
      var s, o;
      return (o = (s = this.components[r]) === null || s === void 0 ? void 0 : s.constrain(i)) !== null && o !== void 0 ? o : i;
    });
    return this.asm_.fromComponents(e);
  }
}
const uu = Xt("pndtxt");
class fM {
  constructor(t, e) {
    this.textViews = e.textViews, this.element = t.createElement("div"), this.element.classList.add(uu()), this.textViews.forEach((i) => {
      const r = t.createElement("div");
      r.classList.add(uu("a")), r.appendChild(i.element), this.element.appendChild(r);
    });
  }
}
function mM(n, t, e) {
  return new as(n, { arrayPosition: e === 0 ? "fst" : e === t.axes.length - 1 ? "lst" : "mid", parser: t.parser, props: t.axes[e].textProps, value: le(0, { constraint: t.axes[e].constraint }), viewProps: t.viewProps });
}
class bc {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.acs_ = e.axes.map((i, r) => mM(t, e, r)), this.acs_.forEach((i, r) => {
      vr({ primary: this.value, secondary: i.value, forward: (s) => e.assembly.toComponents(s)[r], backward: (s, o) => {
        const a = e.assembly.toComponents(s);
        return a[r] = o, e.assembly.fromComponents(a);
      } });
    }), this.view = new fM(t, { textViews: this.acs_.map((i) => i.view) });
  }
  get textControllers() {
    return this.acs_;
  }
}
class _M extends Xr {
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
function vM(n, t) {
  const e = [], i = Td(n, t);
  i && e.push(i);
  const r = Ad(n);
  r && e.push(r);
  const s = uc(n.options);
  return s && e.push(s), new rs(e);
}
const gM = Ie({ id: "input-number", type: "input", accept: (n, t) => {
  if (typeof n != "number") return null;
  const e = he(t, (i) => Object.assign(Object.assign({}, Rd(i)), { options: i.optional.custom(os), readonly: i.optional.constant(false) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Md, constraint: (n) => vM(n.params, n.initialValue), writer: (n) => ls }, controller: (n) => {
  const t = n.value, e = n.constraint, i = e && wo(e, ss);
  if (i) return new ei(n.document, { props: new kt({ options: i.values.value("options") }), value: t, viewProps: n.viewProps });
  const r = Pd(n.params, t.rawValue), s = e && wo(e, es);
  return s ? new So(n.document, Object.assign(Object.assign({}, jd(Object.assign(Object.assign({}, r), { keyScale: le(r.keyScale), max: s.values.value("max"), min: s.values.value("min") }))), { parser: Ln, value: t, viewProps: n.viewProps })) : new as(n.document, { parser: Ln, props: kt.fromObject(r), value: t, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "number" ? null : n.controller.valueController instanceof So ? new _M(n.controller) : n.controller.valueController instanceof ei ? new cc(n.controller) : null;
} });
class Jn {
  constructor(t = 0, e = 0) {
    this.x = t, this.y = e;
  }
  getComponents() {
    return [this.x, this.y];
  }
  static isObject(t) {
    if (se(t)) return false;
    const e = t.x, i = t.y;
    return !(typeof e != "number" || typeof i != "number");
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y;
  }
  toObject() {
    return { x: this.x, y: this.y };
  }
}
const vp = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new Jn(...n) }, Yi = Xt("p2d");
class xM {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(Yi()), e.viewProps.bindClassModifiers(this.element), Pn(e.expanded, fr(this.element, Yi(void 0, "expanded")));
    const i = t.createElement("div");
    i.classList.add(Yi("h")), this.element.appendChild(i);
    const r = t.createElement("button");
    r.classList.add(Yi("b")), r.appendChild(Do(t, "p2dpad")), e.viewProps.bindDisabled(r), i.appendChild(r), this.buttonElement = r;
    const s = t.createElement("div");
    if (s.classList.add(Yi("t")), i.appendChild(s), this.textElement = s, e.pickerLayout === "inline") {
      const o = t.createElement("div");
      o.classList.add(Yi("p")), this.element.appendChild(o), this.pickerElement = o;
    } else this.pickerElement = null;
  }
}
const Gn = Xt("p2dp");
class bM {
  constructor(t, e) {
    this.onFoldableChange_ = this.onFoldableChange_.bind(this), this.onPropsChange_ = this.onPropsChange_.bind(this), this.onValueChange_ = this.onValueChange_.bind(this), this.props_ = e.props, this.props_.emitter.on("change", this.onPropsChange_), this.element = t.createElement("div"), this.element.classList.add(Gn()), e.layout === "popup" && this.element.classList.add(Gn(void 0, "p")), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("div");
    i.classList.add(Gn("p")), e.viewProps.bindTabIndex(i), this.element.appendChild(i), this.padElement = i;
    const r = t.createElementNS(dn, "svg");
    r.classList.add(Gn("g")), this.padElement.appendChild(r), this.svgElem_ = r;
    const s = t.createElementNS(dn, "line");
    s.classList.add(Gn("ax")), s.setAttributeNS(null, "x1", "0"), s.setAttributeNS(null, "y1", "50%"), s.setAttributeNS(null, "x2", "100%"), s.setAttributeNS(null, "y2", "50%"), this.svgElem_.appendChild(s);
    const o = t.createElementNS(dn, "line");
    o.classList.add(Gn("ax")), o.setAttributeNS(null, "x1", "50%"), o.setAttributeNS(null, "y1", "0"), o.setAttributeNS(null, "x2", "50%"), o.setAttributeNS(null, "y2", "100%"), this.svgElem_.appendChild(o);
    const a = t.createElementNS(dn, "line");
    a.classList.add(Gn("l")), a.setAttributeNS(null, "x1", "50%"), a.setAttributeNS(null, "y1", "50%"), this.svgElem_.appendChild(a), this.lineElem_ = a;
    const l = t.createElement("div");
    l.classList.add(Gn("m")), this.padElement.appendChild(l), this.markerElem_ = l, e.value.emitter.on("change", this.onValueChange_), this.value = e.value, this.update_();
  }
  get allFocusableElements() {
    return [this.padElement];
  }
  update_() {
    const [t, e] = this.value.rawValue.getComponents(), i = this.props_.get("max"), r = Jt(t, -i, +i, 0, 100), s = Jt(e, -i, +i, 0, 100), o = this.props_.get("invertsY") ? 100 - s : s;
    this.lineElem_.setAttributeNS(null, "x2", `${r}%`), this.lineElem_.setAttributeNS(null, "y2", `${o}%`), this.markerElem_.style.left = `${r}%`, this.markerElem_.style.top = `${o}%`;
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
function du(n, t, e) {
  return [Fe(t[0], Dn(n)), Fe(t[1], jr(n)) * (e ? 1 : -1)];
}
class yM {
  constructor(t, e) {
    this.onPadKeyDown_ = this.onPadKeyDown_.bind(this), this.onPadKeyUp_ = this.onPadKeyUp_.bind(this), this.onPointerDown_ = this.onPointerDown_.bind(this), this.onPointerMove_ = this.onPointerMove_.bind(this), this.onPointerUp_ = this.onPointerUp_.bind(this), this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.view = new bM(t, { layout: e.layout, props: this.props, value: this.value, viewProps: this.viewProps }), this.ptHandler_ = new Ti(this.view.padElement), this.ptHandler_.emitter.on("down", this.onPointerDown_), this.ptHandler_.emitter.on("move", this.onPointerMove_), this.ptHandler_.emitter.on("up", this.onPointerUp_), this.view.padElement.addEventListener("keydown", this.onPadKeyDown_), this.view.padElement.addEventListener("keyup", this.onPadKeyUp_);
  }
  handlePointerEvent_(t, e) {
    if (!t.point) return;
    const i = this.props.get("max"), r = Jt(t.point.x, 0, t.bounds.width, -i, +i), s = Jt(this.props.get("invertsY") ? t.bounds.height - t.point.y : t.point.y, 0, t.bounds.height, -i, +i);
    this.value.setRawValue(new Jn(r, s), e);
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
    qd(t.key) && t.preventDefault();
    const [e, i] = du(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    e === 0 && i === 0 || this.value.setRawValue(new Jn(this.value.rawValue.x + e, this.value.rawValue.y + i), { forceEmit: false, last: false });
  }
  onPadKeyUp_(t) {
    const [e, i] = du(t, [this.props.get("xKeyScale"), this.props.get("yKeyScale")], this.props.get("invertsY"));
    e === 0 && i === 0 || this.value.setRawValue(this.value.rawValue, { forceEmit: true, last: true });
  }
}
class wM {
  constructor(t, e) {
    var i, r;
    this.onPopupChildBlur_ = this.onPopupChildBlur_.bind(this), this.onPopupChildKeydown_ = this.onPopupChildKeydown_.bind(this), this.onPadButtonBlur_ = this.onPadButtonBlur_.bind(this), this.onPadButtonClick_ = this.onPadButtonClick_.bind(this), this.value = e.value, this.viewProps = e.viewProps, this.foldable_ = is.create(e.expanded), this.popC_ = e.pickerLayout === "popup" ? new Gd(t, { viewProps: this.viewProps }) : null;
    const s = new yM(t, { layout: e.pickerLayout, props: new kt({ invertsY: le(e.invertsY), max: le(e.max), xKeyScale: e.axes[0].textProps.value("keyScale"), yKeyScale: e.axes[1].textProps.value("keyScale") }), value: this.value, viewProps: this.viewProps });
    s.view.allFocusableElements.forEach((o) => {
      o.addEventListener("blur", this.onPopupChildBlur_), o.addEventListener("keydown", this.onPopupChildKeydown_);
    }), this.pickerC_ = s, this.textC_ = new bc(t, { assembly: vp, axes: e.axes, parser: e.parser, value: this.value, viewProps: this.viewProps }), this.view = new xM(t, { expanded: this.foldable_.value("expanded"), pickerLayout: e.pickerLayout, viewProps: this.viewProps }), this.view.textElement.appendChild(this.textC_.view.element), (i = this.view.buttonElement) === null || i === void 0 || i.addEventListener("blur", this.onPadButtonBlur_), (r = this.view.buttonElement) === null || r === void 0 || r.addEventListener("click", this.onPadButtonClick_), this.popC_ ? (this.view.element.appendChild(this.popC_.view.element), this.popC_.view.element.appendChild(this.pickerC_.view.element), vr({ primary: this.foldable_.value("expanded"), secondary: this.popC_.shows, forward: (o) => o, backward: (o, a) => a })) : this.view.pickerElement && (this.view.pickerElement.appendChild(this.pickerC_.view.element), lc(this.foldable_, this.view.pickerElement));
  }
  get textController() {
    return this.textC_;
  }
  onPadButtonBlur_(t) {
    if (!this.popC_) return;
    const e = this.view.element, i = t.relatedTarget;
    (!i || !e.contains(i)) && (this.popC_.shows.rawValue = false);
  }
  onPadButtonClick_() {
    this.foldable_.set("expanded", !this.foldable_.get("expanded")), this.foldable_.get("expanded") && this.pickerC_.view.allFocusableElements[0].focus();
  }
  onPopupChildBlur_(t) {
    if (!this.popC_) return;
    const e = this.popC_.view.element, i = Ud(t);
    i && e.contains(i) || i && i === this.view.buttonElement && !nc(e.ownerDocument) || (this.popC_.shows.rawValue = false);
  }
  onPopupChildKeydown_(t) {
    this.popC_ ? t.key === "Escape" && (this.popC_.shows.rawValue = false) : this.view.pickerElement && t.key === "Escape" && this.view.buttonElement.focus();
  }
}
function MM(n) {
  return Jn.isObject(n) ? new Jn(n.x, n.y) : new Jn();
}
function SM(n, t) {
  n.writeProperty("x", t.x), n.writeProperty("y", t.y);
}
function EM(n, t) {
  return new xc({ assembly: vp, components: [An(Object.assign(Object.assign({}, n), n.x), t.x), An(Object.assign(Object.assign({}, n), n.y), t.y)] });
}
function pu(n, t) {
  var e, i;
  if (!se(n.min) || !se(n.max)) return Math.max(Math.abs((e = n.min) !== null && e !== void 0 ? e : 0), Math.abs((i = n.max) !== null && i !== void 0 ? i : 0));
  const r = Ed(n);
  return Math.max(Math.abs(r) * 10, Math.abs(t) * 10);
}
function CM(n, t) {
  var e, i;
  const r = pu(wi(n, (e = n.x) !== null && e !== void 0 ? e : {}), t.x), s = pu(wi(n, (i = n.y) !== null && i !== void 0 ? i : {}), t.y);
  return Math.max(r, s);
}
function TM(n) {
  if (!("y" in n)) return false;
  const t = n.y;
  return t && "inverted" in t ? !!t.inverted : false;
}
const AM = Ie({ id: "input-point2d", type: "input", accept: (n, t) => {
  if (!Jn.isObject(n)) return null;
  const e = he(t, (i) => Object.assign(Object.assign({}, Yr(i)), { expanded: i.optional.boolean, picker: i.optional.custom(Kd), readonly: i.optional.constant(false), x: i.optional.custom(Yn), y: i.optional.object(Object.assign(Object.assign({}, Yr(i)), { inverted: i.optional.boolean })) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: () => MM, constraint: (n) => EM(n.params, n.initialValue), equals: Jn.equals, writer: () => SM }, controller: (n) => {
  var t, e;
  const i = n.document, r = n.value, s = n.constraint, o = [n.params.x, n.params.y];
  return new wM(i, { axes: r.rawValue.getComponents().map((a, l) => {
    var c;
    return ec({ constraint: s.components[l], initialValue: a, params: wi(n.params, (c = o[l]) !== null && c !== void 0 ? c : {}) });
  }), expanded: (t = n.params.expanded) !== null && t !== void 0 ? t : false, invertsY: TM(n.params), max: CM(n.params, r.rawValue), parser: Ln, pickerLayout: (e = n.params.picker) !== null && e !== void 0 ? e : "popup", value: r, viewProps: n.viewProps });
} });
class rr {
  constructor(t = 0, e = 0, i = 0) {
    this.x = t, this.y = e, this.z = i;
  }
  getComponents() {
    return [this.x, this.y, this.z];
  }
  static isObject(t) {
    if (se(t)) return false;
    const e = t.x, i = t.y, r = t.z;
    return !(typeof e != "number" || typeof i != "number" || typeof r != "number");
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y && t.z === e.z;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z };
  }
}
const gp = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new rr(...n) };
function PM(n) {
  return rr.isObject(n) ? new rr(n.x, n.y, n.z) : new rr();
}
function RM(n, t) {
  n.writeProperty("x", t.x), n.writeProperty("y", t.y), n.writeProperty("z", t.z);
}
function LM(n, t) {
  return new xc({ assembly: gp, components: [An(Object.assign(Object.assign({}, n), n.x), t.x), An(Object.assign(Object.assign({}, n), n.y), t.y), An(Object.assign(Object.assign({}, n), n.z), t.z)] });
}
const DM = Ie({ id: "input-point3d", type: "input", accept: (n, t) => {
  if (!rr.isObject(n)) return null;
  const e = he(t, (i) => Object.assign(Object.assign({}, Yr(i)), { readonly: i.optional.constant(false), x: i.optional.custom(Yn), y: i.optional.custom(Yn), z: i.optional.custom(Yn) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => PM, constraint: (n) => LM(n.params, n.initialValue), equals: rr.equals, writer: (n) => RM }, controller: (n) => {
  const t = n.value, e = n.constraint, i = [n.params.x, n.params.y, n.params.z];
  return new bc(n.document, { assembly: gp, axes: t.rawValue.getComponents().map((r, s) => {
    var o;
    return ec({ constraint: e.components[s], initialValue: r, params: wi(n.params, (o = i[s]) !== null && o !== void 0 ? o : {}) });
  }), parser: Ln, value: t, viewProps: n.viewProps });
} });
class sr {
  constructor(t = 0, e = 0, i = 0, r = 0) {
    this.x = t, this.y = e, this.z = i, this.w = r;
  }
  getComponents() {
    return [this.x, this.y, this.z, this.w];
  }
  static isObject(t) {
    if (se(t)) return false;
    const e = t.x, i = t.y, r = t.z, s = t.w;
    return !(typeof e != "number" || typeof i != "number" || typeof r != "number" || typeof s != "number");
  }
  static equals(t, e) {
    return t.x === e.x && t.y === e.y && t.z === e.z && t.w === e.w;
  }
  toObject() {
    return { x: this.x, y: this.y, z: this.z, w: this.w };
  }
}
const xp = { toComponents: (n) => n.getComponents(), fromComponents: (n) => new sr(...n) };
function IM(n) {
  return sr.isObject(n) ? new sr(n.x, n.y, n.z, n.w) : new sr();
}
function UM(n, t) {
  n.writeProperty("x", t.x), n.writeProperty("y", t.y), n.writeProperty("z", t.z), n.writeProperty("w", t.w);
}
function NM(n, t) {
  return new xc({ assembly: xp, components: [An(Object.assign(Object.assign({}, n), n.x), t.x), An(Object.assign(Object.assign({}, n), n.y), t.y), An(Object.assign(Object.assign({}, n), n.z), t.z), An(Object.assign(Object.assign({}, n), n.w), t.w)] });
}
const OM = Ie({ id: "input-point4d", type: "input", accept: (n, t) => {
  if (!sr.isObject(n)) return null;
  const e = he(t, (i) => Object.assign(Object.assign({}, Yr(i)), { readonly: i.optional.constant(false), w: i.optional.custom(Yn), x: i.optional.custom(Yn), y: i.optional.custom(Yn), z: i.optional.custom(Yn) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => IM, constraint: (n) => NM(n.params, n.initialValue), equals: sr.equals, writer: (n) => UM }, controller: (n) => {
  const t = n.value, e = n.constraint, i = [n.params.x, n.params.y, n.params.z, n.params.w];
  return new bc(n.document, { assembly: xp, axes: t.rawValue.getComponents().map((r, s) => {
    var o;
    return ec({ constraint: e.components[s], initialValue: r, params: wi(n.params, (o = i[s]) !== null && o !== void 0 ? o : {}) });
  }), parser: Ln, value: t, viewProps: n.viewProps });
} });
function FM(n) {
  const t = [], e = uc(n.options);
  return e && t.push(e), new rs(t);
}
const BM = Ie({ id: "input-string", type: "input", accept: (n, t) => {
  if (typeof n != "string") return null;
  const e = he(t, (i) => ({ readonly: i.optional.constant(false), options: i.optional.custom(os) }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Xd, constraint: (n) => FM(n.params), writer: (n) => ls }, controller: (n) => {
  const t = n.document, e = n.value, i = n.constraint, r = i && wo(i, ss);
  return r ? new ei(t, { props: new kt({ options: r.values.value("options") }), value: e, viewProps: n.viewProps }) : new qr(t, { parser: (s) => s, props: kt.fromObject({ formatter: Pl }), value: e, viewProps: n.viewProps });
}, api(n) {
  return typeof n.controller.value.rawValue != "string" ? null : n.controller.valueController instanceof ei ? new cc(n.controller) : null;
} }), hs = { monitor: { defaultInterval: 200, defaultRows: 3 } }, fu = Xt("mll");
class kM {
  constructor(t, e) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = e.formatter, this.element = t.createElement("div"), this.element.classList.add(fu()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("textarea");
    i.classList.add(fu("i")), i.style.height = `calc(var(${Yd("containerUnitSize")}) * ${e.rows})`, i.readOnly = true, e.viewProps.bindDisabled(i), this.element.appendChild(i), this.textareaElem_ = i, e.value.emitter.on("change", this.onValueUpdate_), this.value = e.value, this.update_();
  }
  update_() {
    const t = this.textareaElem_, e = t.scrollTop === t.scrollHeight - t.clientHeight, i = [];
    this.value.rawValue.forEach((r) => {
      r !== void 0 && i.push(this.formatter_(r));
    }), t.textContent = i.join(`
`), e && (t.scrollTop = t.scrollHeight);
  }
  onValueUpdate_() {
    this.update_();
  }
}
class yc {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.view = new kM(t, { formatter: e.formatter, rows: e.rows, value: this.value, viewProps: this.viewProps });
  }
}
const mu = Xt("sgl");
class VM {
  constructor(t, e) {
    this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.formatter_ = e.formatter, this.element = t.createElement("div"), this.element.classList.add(mu()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("input");
    i.classList.add(mu("i")), i.readOnly = true, i.type = "text", e.viewProps.bindDisabled(i), this.element.appendChild(i), this.inputElement = i, e.value.emitter.on("change", this.onValueUpdate_), this.value = e.value, this.update_();
  }
  update_() {
    const t = this.value.rawValue, e = t[t.length - 1];
    this.inputElement.value = e !== void 0 ? this.formatter_(e) : "";
  }
  onValueUpdate_() {
    this.update_();
  }
}
class wc {
  constructor(t, e) {
    this.value = e.value, this.viewProps = e.viewProps, this.view = new VM(t, { formatter: e.formatter, value: this.value, viewProps: this.viewProps });
  }
}
const zM = Ie({ id: "monitor-bool", type: "monitor", accept: (n, t) => {
  if (typeof n != "boolean") return null;
  const e = he(t, (i) => ({ readonly: i.required.constant(true), rows: i.optional.number }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Wd }, controller: (n) => {
  var t;
  return n.value.rawValue.length === 1 ? new wc(n.document, { formatter: au, value: n.value, viewProps: n.viewProps }) : new yc(n.document, { formatter: au, rows: (t = n.params.rows) !== null && t !== void 0 ? t : hs.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
} });
class HM extends Xr {
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
const Wn = Xt("grl");
class GM {
  constructor(t, e) {
    this.onCursorChange_ = this.onCursorChange_.bind(this), this.onValueUpdate_ = this.onValueUpdate_.bind(this), this.element = t.createElement("div"), this.element.classList.add(Wn()), e.viewProps.bindClassModifiers(this.element), this.formatter_ = e.formatter, this.props_ = e.props, this.cursor_ = e.cursor, this.cursor_.emitter.on("change", this.onCursorChange_);
    const i = t.createElementNS(dn, "svg");
    i.classList.add(Wn("g")), i.style.height = `calc(var(${Yd("containerUnitSize")}) * ${e.rows})`, this.element.appendChild(i), this.svgElem_ = i;
    const r = t.createElementNS(dn, "polyline");
    this.svgElem_.appendChild(r), this.lineElem_ = r;
    const s = t.createElement("div");
    s.classList.add(Wn("t"), Xt("tt")()), this.element.appendChild(s), this.tooltipElem_ = s, e.value.emitter.on("change", this.onValueUpdate_), this.value = e.value, this.update_();
  }
  get graphElement() {
    return this.svgElem_;
  }
  update_() {
    const { clientWidth: t, clientHeight: e } = this.element, i = this.value.rawValue.length - 1, r = this.props_.get("min"), s = this.props_.get("max"), o = [];
    this.value.rawValue.forEach((u, d) => {
      if (u === void 0) return;
      const f = Jt(d, 0, i, 0, t), _ = Jt(u, r, s, e, 0);
      o.push([f, _].join(","));
    }), this.lineElem_.setAttributeNS(null, "points", o.join(" "));
    const a = this.tooltipElem_, l = this.value.rawValue[this.cursor_.rawValue];
    if (l === void 0) {
      a.classList.remove(Wn("t", "a"));
      return;
    }
    const c = Jt(this.cursor_.rawValue, 0, i, 0, t), h = Jt(l, r, s, e, 0);
    a.style.left = `${c}px`, a.style.top = `${h}px`, a.textContent = `${this.formatter_(l)}`, a.classList.contains(Wn("t", "a")) || (a.classList.add(Wn("t", "a"), Wn("t", "in")), yo(a), a.classList.remove(Wn("t", "in")));
  }
  onValueUpdate_() {
    this.update_();
  }
  onCursorChange_() {
    this.update_();
  }
}
class bp {
  constructor(t, e) {
    if (this.onGraphMouseMove_ = this.onGraphMouseMove_.bind(this), this.onGraphMouseLeave_ = this.onGraphMouseLeave_.bind(this), this.onGraphPointerDown_ = this.onGraphPointerDown_.bind(this), this.onGraphPointerMove_ = this.onGraphPointerMove_.bind(this), this.onGraphPointerUp_ = this.onGraphPointerUp_.bind(this), this.props = e.props, this.value = e.value, this.viewProps = e.viewProps, this.cursor_ = le(-1), this.view = new GM(t, { cursor: this.cursor_, formatter: e.formatter, rows: e.rows, props: this.props, value: this.value, viewProps: this.viewProps }), !nc(t)) this.view.element.addEventListener("mousemove", this.onGraphMouseMove_), this.view.element.addEventListener("mouseleave", this.onGraphMouseLeave_);
    else {
      const i = new Ti(this.view.element);
      i.emitter.on("down", this.onGraphPointerDown_), i.emitter.on("move", this.onGraphPointerMove_), i.emitter.on("up", this.onGraphPointerUp_);
    }
  }
  importProps(t) {
    return Xe(t, null, (e) => ({ max: e.required.number, min: e.required.number }), (e) => (this.props.set("max", e.max), this.props.set("min", e.min), true));
  }
  exportProps() {
    return qe(null, { max: this.props.get("max"), min: this.props.get("min") });
  }
  onGraphMouseLeave_() {
    this.cursor_.rawValue = -1;
  }
  onGraphMouseMove_(t) {
    const { clientWidth: e } = this.view.element;
    this.cursor_.rawValue = Math.floor(Jt(t.offsetX, 0, e, 0, this.value.rawValue.length));
  }
  onGraphPointerDown_(t) {
    this.onGraphPointerMove_(t);
  }
  onGraphPointerMove_(t) {
    if (!t.data.point) {
      this.cursor_.rawValue = -1;
      return;
    }
    this.cursor_.rawValue = Math.floor(Jt(t.data.point.x, 0, t.data.bounds.width, 0, this.value.rawValue.length));
  }
  onGraphPointerUp_() {
    this.cursor_.rawValue = -1;
  }
}
function Rl(n) {
  return se(n.format) ? ke(2) : n.format;
}
function WM(n) {
  var t;
  return n.value.rawValue.length === 1 ? new wc(n.document, { formatter: Rl(n.params), value: n.value, viewProps: n.viewProps }) : new yc(n.document, { formatter: Rl(n.params), rows: (t = n.params.rows) !== null && t !== void 0 ? t : hs.monitor.defaultRows, value: n.value, viewProps: n.viewProps });
}
function XM(n) {
  var t, e, i;
  return new bp(n.document, { formatter: Rl(n.params), rows: (t = n.params.rows) !== null && t !== void 0 ? t : hs.monitor.defaultRows, props: kt.fromObject({ max: (e = n.params.max) !== null && e !== void 0 ? e : 100, min: (i = n.params.min) !== null && i !== void 0 ? i : 0 }), value: n.value, viewProps: n.viewProps });
}
function _u(n) {
  return n.view === "graph";
}
const qM = Ie({ id: "monitor-number", type: "monitor", accept: (n, t) => {
  if (typeof n != "number") return null;
  const e = he(t, (i) => ({ format: i.optional.function, max: i.optional.number, min: i.optional.number, readonly: i.required.constant(true), rows: i.optional.number, view: i.optional.string }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { defaultBufferSize: (n) => _u(n) ? 64 : 1, reader: (n) => Md }, controller: (n) => _u(n.params) ? XM(n) : WM(n), api: (n) => n.controller.valueController instanceof bp ? new HM(n.controller) : null }), jM = Ie({ id: "monitor-string", type: "monitor", accept: (n, t) => {
  if (typeof n != "string") return null;
  const e = he(t, (i) => ({ multiline: i.optional.boolean, readonly: i.required.constant(true), rows: i.optional.number }));
  return e ? { initialValue: n, params: e } : null;
}, binding: { reader: (n) => Xd }, controller: (n) => {
  var t;
  const e = n.value;
  return e.rawValue.length > 1 || n.params.multiline ? new yc(n.document, { formatter: Pl, rows: (t = n.params.rows) !== null && t !== void 0 ? t : hs.monitor.defaultRows, value: e, viewProps: n.viewProps }) : new wc(n.document, { formatter: Pl, value: e, viewProps: n.viewProps });
} });
class YM {
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
class KM {
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
function $M(n, t) {
  var e;
  const i = n.accept(t.target.read(), t.params);
  if (se(i)) return null;
  const r = { target: t.target, initialValue: i.initialValue, params: i.params }, s = he(t.params, (u) => ({ disabled: u.optional.boolean, hidden: u.optional.boolean, label: u.optional.string, tag: u.optional.string })), o = n.binding.reader(r), a = n.binding.constraint ? n.binding.constraint(r) : void 0, l = new KM({ reader: o, target: t.target, writer: n.binding.writer(r) }), c = new Ib(le(o(i.initialValue), { constraint: a, equals: n.binding.equals }), l), h = n.controller({ constraint: a, document: t.document, initialValue: i.initialValue, params: i.params, value: c, viewProps: Un.create({ disabled: s == null ? void 0 : s.disabled, hidden: s == null ? void 0 : s.hidden }) });
  return new Yb(t.document, { blade: _r(), props: kt.fromObject({ label: "label" in t.params ? (e = s == null ? void 0 : s.label) !== null && e !== void 0 ? e : null : t.target.key }), tag: s == null ? void 0 : s.tag, value: c, valueController: h });
}
class ZM {
  constructor(t) {
    this.target = t.target, this.reader_ = t.reader;
  }
  read() {
    return this.reader_(this.target.read());
  }
}
function JM(n, t) {
  return t === 0 ? new Ry() : new Ly(n, t ?? hs.monitor.defaultInterval);
}
function QM(n, t) {
  var e, i, r;
  const s = n.accept(t.target.read(), t.params);
  if (se(s)) return null;
  const o = { target: t.target, initialValue: s.initialValue, params: s.params }, a = he(t.params, (d) => ({ bufferSize: d.optional.number, disabled: d.optional.boolean, hidden: d.optional.boolean, interval: d.optional.number, label: d.optional.string })), l = n.binding.reader(o), c = (i = (e = a == null ? void 0 : a.bufferSize) !== null && e !== void 0 ? e : n.binding.defaultBufferSize && n.binding.defaultBufferSize(s.params)) !== null && i !== void 0 ? i : 1, h = new Qb({ binding: new ZM({ reader: l, target: t.target }), bufferSize: c, ticker: JM(t.document, a == null ? void 0 : a.interval) }), u = n.controller({ document: t.document, params: s.params, value: h, viewProps: Un.create({ disabled: a == null ? void 0 : a.disabled, hidden: a == null ? void 0 : a.hidden }) });
  return u.viewProps.bindDisabled(h.ticker), u.viewProps.handleDispose(() => {
    h.ticker.dispose();
  }), new ey(t.document, { blade: _r(), props: kt.fromObject({ label: "label" in t.params ? (r = a == null ? void 0 : a.label) !== null && r !== void 0 ? r : null : t.target.key }), value: h, valueController: u });
}
class tS {
  constructor(t) {
    this.pluginsMap_ = { blades: [], inputs: [], monitors: [] }, this.apiCache_ = t;
  }
  getAll() {
    return [...this.pluginsMap_.blades, ...this.pluginsMap_.inputs, ...this.pluginsMap_.monitors];
  }
  register(t, e) {
    if (!Wy(e.core)) throw de.notCompatible(t, e.id);
    e.type === "blade" ? this.pluginsMap_.blades.unshift(e) : e.type === "input" ? this.pluginsMap_.inputs.unshift(e) : e.type === "monitor" && this.pluginsMap_.monitors.unshift(e);
  }
  createInput_(t, e, i) {
    return this.pluginsMap_.inputs.reduce((r, s) => r ?? $M(s, { document: t, target: e, params: i }), null);
  }
  createMonitor_(t, e, i) {
    return this.pluginsMap_.monitors.reduce((r, s) => r ?? QM(s, { document: t, params: i, target: e }), null);
  }
  createBinding(t, e, i) {
    const r = e.read();
    if (se(r)) throw new de({ context: { key: e.key }, type: "nomatchingcontroller" });
    const s = this.createInput_(t, e, i);
    if (s) return s;
    const o = this.createMonitor_(t, e, i);
    if (o) return o;
    throw new de({ context: { key: e.key }, type: "nomatchingcontroller" });
  }
  createBlade(t, e) {
    const i = this.pluginsMap_.blades.reduce((r, s) => r ?? Py(s, { document: t, params: e }), null);
    if (!i) throw new de({ type: "nomatchingview", context: { params: e } });
    return i;
  }
  createInputBindingApi_(t) {
    const e = this.pluginsMap_.inputs.reduce((i, r) => {
      var s, o;
      return i || ((o = (s = r.api) === null || s === void 0 ? void 0 : s.call(r, { controller: t })) !== null && o !== void 0 ? o : null);
    }, null);
    return this.apiCache_.add(t, e ?? new Xr(t));
  }
  createMonitorBindingApi_(t) {
    const e = this.pluginsMap_.monitors.reduce((i, r) => {
      var s, o;
      return i || ((o = (s = r.api) === null || s === void 0 ? void 0 : s.call(r, { controller: t })) !== null && o !== void 0 ? o : null);
    }, null);
    return this.apiCache_.add(t, e ?? new Xr(t));
  }
  createBindingApi(t) {
    if (this.apiCache_.has(t)) return this.apiCache_.get(t);
    if (Kb(t)) return this.createInputBindingApi_(t);
    if (ny(t)) return this.createMonitorBindingApi_(t);
    throw de.shouldNeverHappen();
  }
  createApi(t) {
    if (this.apiCache_.has(t)) return this.apiCache_.get(t);
    if (jb(t)) return this.createBindingApi(t);
    const e = this.pluginsMap_.blades.reduce((i, r) => i ?? r.api({ controller: t, pool: this }), null);
    if (!e) throw de.shouldNeverHappen();
    return this.apiCache_.add(t, e);
  }
}
const eS = new YM();
function nS() {
  const n = new tS(eS);
  return [AM, DM, OM, BM, gM, pM, dM, aM, Yy, zM, jM, qM, ay, by, Hd].forEach((t) => {
    n.register("core", t);
  }), n;
}
class iS extends Ci {
  constructor(t) {
    super(t), this.emitter_ = new ge(), this.controller.value.emitter.on("change", (e) => {
      this.emitter_.emit("change", new ns(this, e.rawValue));
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
    const i = e.bind(this);
    return this.emitter_.on(t, (r) => {
      i(r);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
class rS extends Ci {
}
class sS extends Ci {
  constructor(t) {
    super(t), this.emitter_ = new ge(), this.controller.value.emitter.on("change", (e) => {
      this.emitter_.emit("change", new ns(this, e.rawValue));
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
    const i = e.bind(this);
    return this.emitter_.on(t, (r) => {
      i(r);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
class oS extends Ci {
  constructor(t) {
    super(t), this.emitter_ = new ge(), this.controller.value.emitter.on("change", (e) => {
      this.emitter_.emit("change", new ns(this, e.rawValue));
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
    const i = e.bind(this);
    return this.emitter_.on(t, (r) => {
      i(r);
    }, { key: e }), this;
  }
  off(t, e) {
    return this.emitter_.off(t, e), this;
  }
}
const aS = /* @__PURE__ */ function() {
  return { id: "list", type: "blade", core: mr, accept(n) {
    const t = he(n, (e) => ({ options: e.required.custom(os), value: e.required.raw, view: e.required.constant("list"), label: e.optional.string }));
    return t ? { params: t } : null;
  }, controller(n) {
    const t = new ss(hc(n.params.options)), e = le(n.params.value, { constraint: t }), i = new ei(n.document, { props: new kt({ options: t.values.value("options") }), value: e, viewProps: n.viewProps });
    return new Mi(n.document, { blade: n.blade, props: kt.fromObject({ label: n.params.label }), value: e, valueController: i });
  }, api(n) {
    return !(n.controller instanceof Mi) || !(n.controller.valueController instanceof ei) ? null : new iS(n.controller);
  } };
}();
class lS extends Vd {
  constructor(t, e) {
    super(t, e);
  }
  get element() {
    return this.controller.view.element;
  }
}
class cS extends Tl {
  constructor(t, e) {
    super(t, { expanded: e.expanded, blade: e.blade, props: e.props, root: true, viewProps: e.viewProps });
  }
}
const vu = Xt("spr");
class hS {
  constructor(t, e) {
    this.element = t.createElement("div"), this.element.classList.add(vu()), e.viewProps.bindClassModifiers(this.element);
    const i = t.createElement("hr");
    i.classList.add(vu("r")), this.element.appendChild(i);
  }
}
class gu extends Io {
  constructor(t, e) {
    super(Object.assign(Object.assign({}, e), { view: new hS(t, { viewProps: e.viewProps }) }));
  }
}
const uS = { id: "separator", type: "blade", core: mr, accept(n) {
  const t = he(n, (e) => ({ view: e.required.constant("separator") }));
  return t ? { params: t } : null;
}, controller(n) {
  return new gu(n.document, { blade: n.blade, viewProps: n.viewProps });
}, api(n) {
  return n.controller instanceof gu ? new rS(n.controller) : null;
} }, dS = { id: "slider", type: "blade", core: mr, accept(n) {
  const t = he(n, (e) => ({ max: e.required.number, min: e.required.number, view: e.required.constant("slider"), format: e.optional.function, label: e.optional.string, value: e.optional.number }));
  return t ? { params: t } : null;
}, controller(n) {
  var t, e;
  const i = (t = n.params.value) !== null && t !== void 0 ? t : 0, r = new es({ max: n.params.max, min: n.params.min }), s = le(i, { constraint: r }), o = new So(n.document, Object.assign(Object.assign({}, jd({ formatter: (e = n.params.format) !== null && e !== void 0 ? e : Ab, keyScale: le(1), max: r.values.value("max"), min: r.values.value("min"), pointerScale: Cd(n.params, i) })), { parser: Ln, value: s, viewProps: n.viewProps }));
  return new Mi(n.document, { blade: n.blade, props: kt.fromObject({ label: n.params.label }), value: s, valueController: o });
}, api(n) {
  return !(n.controller instanceof Mi) || !(n.controller.valueController instanceof So) ? null : new sS(n.controller);
} }, pS = /* @__PURE__ */ function() {
  return { id: "text", type: "blade", core: mr, accept(n) {
    const t = he(n, (e) => ({ parse: e.required.function, value: e.required.raw, view: e.required.constant("text"), format: e.optional.function, label: e.optional.string }));
    return t ? { params: t } : null;
  }, controller(n) {
    var t;
    const e = le(n.params.value), i = new qr(n.document, { parser: n.params.parse, props: kt.fromObject({ formatter: (t = n.params.format) !== null && t !== void 0 ? t : (r) => String(r) }), value: e, viewProps: n.viewProps });
    return new Mi(n.document, { blade: n.blade, props: kt.fromObject({ label: n.params.label }), value: e, valueController: i });
  }, api(n) {
    return !(n.controller instanceof Mi) || !(n.controller.valueController instanceof qr) ? null : new oS(n.controller);
  } };
}();
function fS(n) {
  const t = n.createElement("div");
  return t.classList.add(Xt("dfw")()), n.body && n.body.appendChild(t), t;
}
function mS(n, t, e) {
  if (n.querySelector(`style[data-tp-style=${t}]`)) return;
  const i = n.createElement("style");
  i.dataset.tpStyle = t, i.textContent = e, n.head.appendChild(i);
}
class FS extends lS {
  constructor(t) {
    var e, i;
    const r = t ?? {}, s = (e = r.document) !== null && e !== void 0 ? e : Vb(), o = nS(), a = new cS(s, { expanded: r.expanded, blade: _r(), props: kt.fromObject({ title: r.title }), viewProps: Un.create() });
    super(a, o), this.pool_ = o, this.containerElem_ = (i = r.container) !== null && i !== void 0 ? i : fS(s), this.containerElem_.appendChild(this.element), this.doc_ = s, this.usesDefaultWrapper_ = !r.container, this.setUpDefaultPlugins_();
  }
  get document() {
    if (!this.doc_) throw de.alreadyDisposed();
    return this.doc_;
  }
  dispose() {
    const t = this.containerElem_;
    if (!t) throw de.alreadyDisposed();
    if (this.usesDefaultWrapper_) {
      const e = t.parentElement;
      e && e.removeChild(t);
    }
    this.containerElem_ = null, this.doc_ = null, super.dispose();
  }
  registerPlugin(t) {
    t.css && mS(this.document, `plugin-${t.id}`, t.css), ("plugin" in t ? [t.plugin] : "plugins" in t ? t.plugins : []).forEach((i) => {
      this.pool_.register(t.id, i);
    });
  }
  setUpDefaultPlugins_() {
    this.registerPlugin({ id: "default", css: '.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}', plugins: [aS, uS, dS, Hd, pS] });
  }
}
new kd("4.0.5");
const _S = { background: 1118488, grid: 5592405, axisArrow: 8947848, elementLine: 16777215, nodePoint: 16777215, resultOutline: "white", shellWall: 13395490, shellSlab: 4491468, shellTri: 6728294, shellOpacity: 0.35, textColor: "#bbbcc4", textBackground: "#0d0d0d", legendMarker: "white" }, vS = { background: 15790320, grid: 10066329, axisArrow: 4473924, elementLine: 1118481, nodePoint: 1118481, resultOutline: "#222", shellWall: 10044433, shellSlab: 2254506, shellTri: 4491332, shellOpacity: 0.3, textColor: "#111111", textBackground: "#e8e8e8", legendMarker: "#222" }, yp = { dark: _S, light: vS };
let Kr = "dark";
const lo = [];
function BS() {
  return Kr;
}
function gS() {
  return yp[Kr];
}
function xS(n) {
  if (n === Kr) return;
  Kr = n;
  const t = yp[n];
  for (const e of lo) e(n, t);
}
function kS() {
  const n = Kr === "dark" ? "light" : "dark";
  return xS(n), n;
}
function VS(n) {
  return lo.push(n), () => {
    const t = lo.indexOf(n);
    t >= 0 && lo.splice(t, 1);
  };
}
let zS = class extends $0 {
  constructor(t, e, i) {
    super();
    const r = 30;
    this.fontHeightPx = r * devicePixelRatio, this.material.map = bS(t, this.fontHeightPx, e, i), this.material.depthTest = false, this.renderOrder = 99, this.scale.set(this.material.map.image.width / this.fontHeightPx, 1, 1);
  }
  updateScale(t) {
    var _a2, _b2;
    this.scale.set(((_b2 = (_a2 = this.material) == null ? void 0 : _a2.map) == null ? void 0 : _b2.image.width) / this.fontHeightPx * t, t, 1);
  }
  dispose() {
    var _a2;
    this.geometry.dispose(), (_a2 = this.material.map) == null ? void 0 : _a2.dispose(), this.material.dispose();
  }
};
function bS(n, t, e, i) {
  const r = gS(), s = document.createElement("canvas"), o = s.getContext("2d");
  if (o) {
    o.font = `${t}px Arial`, s.width = o.measureText(n).width, s.height = t, i != "transparent" && (o.fillStyle = i ?? r.textBackground), o.fillRect(0, 0, s.width, s.height), o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = e ?? r.textColor;
    const l = 0.9;
    o.font = `${t * l}px Arial`;
    const c = 0.08 * s.height;
    o.fillText(n, s.width / 2, s.height / 2 + c);
  }
  const a = new Pe(s);
  return a.needsUpdate = true, a;
}
export {
  J0 as $,
  LS as A,
  Se as B,
  Kl as C,
  En as D,
  CS as E,
  Qt as F,
  Ns as G,
  US as H,
  Xn as I,
  Zr as J,
  PS as K,
  Po as L,
  TS as M,
  IS as N,
  ve as O,
  FS as P,
  hx as Q,
  fd as R,
  _d as S,
  vd as T,
  gS as U,
  P as V,
  wS as W,
  Pe as X,
  BS as Y,
  VS as Z,
  SS as _,
  rd as a,
  Ft as a0,
  md as a1,
  To as a2,
  bi as a3,
  ln as a4,
  ni as a5,
  Uf as a6,
  qu as a7,
  kS as a8,
  un as b,
  ts as c,
  Z0 as d,
  Wl as e,
  an as f,
  AS as g,
  cd as h,
  Nh as i,
  pd as j,
  J as k,
  ie as l,
  DS as m,
  ES as n,
  rn as o,
  K0 as p,
  $0 as q,
  MS as r,
  Bt as s,
  nn as t,
  Zu as u,
  yS as v,
  OS as w,
  RS as x,
  NS as y,
  zS as z
};
