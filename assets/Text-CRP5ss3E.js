import { g as _c } from "./theme-2eEBQPmF.js";
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const Pa = "169", li = { ROTATE: 0, DOLLY: 1, PAN: 2 }, ri = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, gc = 0, io = 1, vc = 2, Ml = 1, xc = 2, en = 3, Mn = 0, be = 1, nn = 2, gn = 0, ci = 1, so = 2, ro = 3, ao = 4, Mc = 5, Ln = 100, Sc = 101, yc = 102, Ec = 103, Tc = 104, Ac = 200, bc = 201, wc = 202, Rc = 203, Br = 204, zr = 205, Cc = 206, Pc = 207, Lc = 208, Dc = 209, Uc = 210, Ic = 211, Nc = 212, Oc = 213, Fc = 214, Hr = 0, Gr = 1, Vr = 2, di = 3, kr = 4, Wr = 5, Xr = 6, Yr = 7, La = 0, Bc = 1, zc = 2, vn = 0, Hc = 1, Gc = 2, Vc = 3, kc = 4, Wc = 5, Xc = 6, Yc = 7, Sl = 300, pi = 301, mi = 302, qr = 303, Zr = 304, Ws = 306, Kr = 1e3, Un = 1001, jr = 1002, Ae = 1003, qc = 1004, Xi = 1005, ze = 1006, tr = 1007, In = 1008, an = 1009, yl = 1010, El = 1011, Ui = 1012, Da = 1013, Nn = 1014, sn = 1015, Bi = 1016, Ua = 1017, Ia = 1018, _i = 1020, Tl = 35902, Al = 1021, bl = 1022, Ge = 1023, wl = 1024, Rl = 1025, hi = 1026, gi = 1027, Cl = 1028, Na = 1029, Pl = 1030, Oa = 1031, Fa = 1033, Cs = 33776, Ps = 33777, Ls = 33778, Ds = 33779, Jr = 35840, $r = 35841, Qr = 35842, ta = 35843, ea = 36196, na = 37492, ia = 37496, sa = 37808, ra = 37809, aa = 37810, oa = 37811, la = 37812, ca = 37813, ha = 37814, ua = 37815, fa = 37816, da = 37817, pa = 37818, ma = 37819, _a = 37820, ga = 37821, Us = 36492, va = 36494, xa = 36495, Ll = 36283, Ma = 36284, Sa = 36285, ya = 36286, Zc = 3200, Kc = 3201, Ba = 0, jc = 1, _n = "", We = "srgb", yn = "srgb-linear", za = "display-p3", Xs = "display-p3-linear", Os = "linear", ne = "srgb", Fs = "rec709", Bs = "p3", Gn = 7680, oo = 519, Jc = 512, $c = 513, Qc = 514, Dl = 515, th = 516, eh = 517, nh = 518, ih = 519, Ea = 35044, lo = "300 es", rn = 2e3, zs = 2001;
class zn {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e);
  }
  hasEventListener(t, e) {
    if (this._listeners === void 0) return false;
    const n = this._listeners;
    return n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    if (this._listeners === void 0) return;
    const s = this._listeners[t];
    if (s !== void 0) {
      const r = s.indexOf(e);
      r !== -1 && s.splice(r, 1);
    }
  }
  dispatchEvent(t) {
    if (this._listeners === void 0) return;
    const n = this._listeners[t.type];
    if (n !== void 0) {
      t.target = this;
      const s = n.slice(0);
      for (let r = 0, a = s.length; r < a; r++) s[r].call(this, t);
      t.target = null;
    }
  }
}
const ve = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let co = 1234567;
const ui = Math.PI / 180, Ii = 180 / Math.PI;
function qe() {
  const i = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ve[i & 255] + ve[i >> 8 & 255] + ve[i >> 16 & 255] + ve[i >> 24 & 255] + "-" + ve[t & 255] + ve[t >> 8 & 255] + "-" + ve[t >> 16 & 15 | 64] + ve[t >> 24 & 255] + "-" + ve[e & 63 | 128] + ve[e >> 8 & 255] + "-" + ve[e >> 16 & 255] + ve[e >> 24 & 255] + ve[n & 255] + ve[n >> 8 & 255] + ve[n >> 16 & 255] + ve[n >> 24 & 255]).toLowerCase();
}
function ue(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Ha(i, t) {
  return (i % t + t) % t;
}
function sh(i, t, e, n, s) {
  return n + (i - t) * (s - n) / (e - t);
}
function rh(i, t, e) {
  return i !== t ? (e - i) / (t - i) : 0;
}
function Pi(i, t, e) {
  return (1 - e) * i + e * t;
}
function ah(i, t, e, n) {
  return Pi(i, t, 1 - Math.exp(-e * n));
}
function oh(i, t = 1) {
  return t - Math.abs(Ha(i, t * 2) - t);
}
function lh(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * (3 - 2 * i));
}
function ch(i, t, e) {
  return i <= t ? 0 : i >= e ? 1 : (i = (i - t) / (e - t), i * i * i * (i * (i * 6 - 15) + 10));
}
function hh(i, t) {
  return i + Math.floor(Math.random() * (t - i + 1));
}
function uh(i, t) {
  return i + Math.random() * (t - i);
}
function fh(i) {
  return i * (0.5 - Math.random());
}
function dh(i) {
  i !== void 0 && (co = i);
  let t = co += 1831565813;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function ph(i) {
  return i * ui;
}
function mh(i) {
  return i * Ii;
}
function _h(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function gh(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function vh(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function xh(i, t, e, n, s) {
  const r = Math.cos, a = Math.sin, o = r(e / 2), l = a(e / 2), c = r((t + n) / 2), h = a((t + n) / 2), u = r((t - n) / 2), f = a((t - n) / 2), m = r((n - t) / 2), _ = a((n - t) / 2);
  switch (s) {
    case "XYX":
      i.set(o * h, l * u, l * f, o * c);
      break;
    case "YZY":
      i.set(l * f, o * h, l * u, o * c);
      break;
    case "ZXZ":
      i.set(l * u, l * f, o * h, o * c);
      break;
    case "XZX":
      i.set(o * h, l * _, l * m, o * c);
      break;
    case "YXY":
      i.set(l * m, o * h, l * _, o * c);
      break;
    case "ZYZ":
      i.set(l * _, l * m, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + s);
  }
}
function He(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Jt(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Mh = { DEG2RAD: ui, RAD2DEG: Ii, generateUUID: qe, clamp: ue, euclideanModulo: Ha, mapLinear: sh, inverseLerp: rh, lerp: Pi, damp: ah, pingpong: oh, smoothstep: lh, smootherstep: ch, randInt: hh, randFloat: uh, randFloatSpread: fh, seededRandom: dh, degToRad: ph, radToDeg: mh, isPowerOfTwo: _h, ceilPowerOfTwo: gh, floorPowerOfTwo: vh, setQuaternionFromProperEuler: xh, normalize: Jt, denormalize: He };
class $ {
  constructor(t = 0, e = 0) {
    $.prototype.isVector2 = true, this.x = t, this.y = e;
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
    const e = this.x, n = this.y, s = t.elements;
    return this.x = s[0] * e + s[3] * n + s[6], this.y = s[1] * e + s[4] * n + s[7], this;
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
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
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
    const n = this.dot(t) / e;
    return Math.acos(ue(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y;
    return e * e + n * n;
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
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this;
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
    const n = Math.cos(e), s = Math.sin(e), r = this.x - t.x, a = this.y - t.y;
    return this.x = r * n - a * s + t.x, this.y = r * s + a * n + t.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ft {
  constructor(t, e, n, s, r, a, o, l, c) {
    Ft.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c);
  }
  set(t, e, n, s, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = t, h[1] = s, h[2] = o, h[3] = e, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
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
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], f = n[2], m = n[5], _ = n[8], x = s[0], d = s[3], p = s[6], A = s[1], S = s[4], E = s[7], I = s[2], R = s[5], w = s[8];
    return r[0] = a * x + o * A + l * I, r[3] = a * d + o * S + l * R, r[6] = a * p + o * E + l * w, r[1] = c * x + h * A + u * I, r[4] = c * d + h * S + u * R, r[7] = c * p + h * E + u * w, r[2] = f * x + m * A + _ * I, r[5] = f * d + m * S + _ * R, r[8] = f * p + m * E + _ * w, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8];
    return e * a * h - e * o * c - n * r * h + n * o * l + s * r * c - s * a * l;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = h * a - o * c, f = o * l - h * r, m = c * r - a * l, _ = e * u + n * f + s * m;
    if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / _;
    return t[0] = u * x, t[1] = (s * c - h * n) * x, t[2] = (o * n - s * a) * x, t[3] = f * x, t[4] = (h * e - s * l) * x, t[5] = (s * r - o * e) * x, t[6] = m * x, t[7] = (n * l - c * e) * x, t[8] = (a * e - n * r) * x, this;
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
  setUvTransform(t, e, n, s, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + t, -s * c, s * l, -s * (-c * a + l * o) + o + e, 0, 0, 1), this;
  }
  scale(t, e) {
    return this.premultiply(er.makeScale(t, e)), this;
  }
  rotate(t) {
    return this.premultiply(er.makeRotation(-t)), this;
  }
  translate(t, e) {
    return this.premultiply(er.makeTranslation(t, e)), this;
  }
  makeTranslation(t, e) {
    return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
  }
  makeRotation(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
  }
  makeScale(t, e) {
    return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 9; s++) if (e[s] !== n[s]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const er = new Ft();
function Ul(i) {
  for (let t = i.length - 1; t >= 0; --t) if (i[t] >= 65535) return true;
  return false;
}
function Hs(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Sh() {
  const i = Hs("canvas");
  return i.style.display = "block", i;
}
const ho = {};
function Is(i) {
  i in ho || (ho[i] = true, console.warn(i));
}
function yh(i, t, e) {
  return new Promise(function(n, s) {
    function r() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
function Eh(i) {
  const t = i.elements;
  t[2] = 0.5 * t[2] + 0.5 * t[3], t[6] = 0.5 * t[6] + 0.5 * t[7], t[10] = 0.5 * t[10] + 0.5 * t[11], t[14] = 0.5 * t[14] + 0.5 * t[15];
}
function Th(i) {
  const t = i.elements;
  t[11] === -1 ? (t[10] = -t[10] - 1, t[14] = -t[14]) : (t[10] = -t[10], t[14] = -t[14] + 1);
}
const uo = new Ft().set(0.8224621, 0.177538, 0, 0.0331941, 0.9668058, 0, 0.0170827, 0.0723974, 0.9105199), fo = new Ft().set(1.2249401, -0.2249404, 0, -0.0420569, 1.0420571, 0, -0.0196376, -0.0786361, 1.0982735), Mi = { [yn]: { transfer: Os, primaries: Fs, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (i) => i, fromReference: (i) => i }, [We]: { transfer: ne, primaries: Fs, luminanceCoefficients: [0.2126, 0.7152, 0.0722], toReference: (i) => i.convertSRGBToLinear(), fromReference: (i) => i.convertLinearToSRGB() }, [Xs]: { transfer: Os, primaries: Bs, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (i) => i.applyMatrix3(fo), fromReference: (i) => i.applyMatrix3(uo) }, [za]: { transfer: ne, primaries: Bs, luminanceCoefficients: [0.2289, 0.6917, 0.0793], toReference: (i) => i.convertSRGBToLinear().applyMatrix3(fo), fromReference: (i) => i.applyMatrix3(uo).convertLinearToSRGB() } }, Ah = /* @__PURE__ */ new Set([yn, Xs]), Zt = { enabled: true, _workingColorSpace: yn, get workingColorSpace() {
  return this._workingColorSpace;
}, set workingColorSpace(i) {
  if (!Ah.has(i)) throw new Error(`Unsupported working color space, "${i}".`);
  this._workingColorSpace = i;
}, convert: function(i, t, e) {
  if (this.enabled === false || t === e || !t || !e) return i;
  const n = Mi[t].toReference, s = Mi[e].fromReference;
  return s(n(i));
}, fromWorkingColorSpace: function(i, t) {
  return this.convert(i, this._workingColorSpace, t);
}, toWorkingColorSpace: function(i, t) {
  return this.convert(i, t, this._workingColorSpace);
}, getPrimaries: function(i) {
  return Mi[i].primaries;
}, getTransfer: function(i) {
  return i === _n ? Os : Mi[i].transfer;
}, getLuminanceCoefficients: function(i, t = this._workingColorSpace) {
  return i.fromArray(Mi[t].luminanceCoefficients);
} };
function fi(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function nr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Vn;
class bh {
  static getDataURL(t) {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let e;
    if (t instanceof HTMLCanvasElement) e = t;
    else {
      Vn === void 0 && (Vn = Hs("canvas")), Vn.width = t.width, Vn.height = t.height;
      const n = Vn.getContext("2d");
      t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height), e = Vn;
    }
    return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
  }
  static sRGBToLinear(t) {
    if (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && t instanceof ImageBitmap) {
      const e = Hs("canvas");
      e.width = t.width, e.height = t.height;
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const s = n.getImageData(0, 0, t.width, t.height), r = s.data;
      for (let a = 0; a < r.length; a++) r[a] = fi(r[a] / 255) * 255;
      return n.putImageData(s, 0, 0), e;
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[n] = Math.floor(fi(e[n] / 255) * 255) : e[n] = fi(e[n]);
      return { data: e, width: t.width, height: t.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
  }
}
let wh = 0;
class Il {
  constructor(t = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: wh++ }), this.uuid = qe(), this.data = t, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(t) {
    t === true && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, s = this.data;
    if (s !== null) {
      let r;
      if (Array.isArray(s)) {
        r = [];
        for (let a = 0, o = s.length; a < o; a++) s[a].isDataTexture ? r.push(ir(s[a].image)) : r.push(ir(s[a]));
      } else r = ir(s);
      n.url = r;
    }
    return e || (t.images[this.uuid] = n), n;
  }
}
function ir(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? bh.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Rh = 0;
class ge extends zn {
  constructor(t = ge.DEFAULT_IMAGE, e = ge.DEFAULT_MAPPING, n = Un, s = Un, r = ze, a = In, o = Ge, l = an, c = ge.DEFAULT_ANISOTROPY, h = _n) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Rh++ }), this.uuid = qe(), this.name = "", this.source = new Il(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = s, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new $(0, 0), this.repeat = new $(1, 1), this.center = new $(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ft(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
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
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== Sl) return t;
    if (t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1) switch (this.wrapS) {
      case Kr:
        t.x = t.x - Math.floor(t.x);
        break;
      case Un:
        t.x = t.x < 0 ? 0 : 1;
        break;
      case jr:
        Math.abs(Math.floor(t.x) % 2) === 1 ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x);
        break;
    }
    if (t.y < 0 || t.y > 1) switch (this.wrapT) {
      case Kr:
        t.y = t.y - Math.floor(t.y);
        break;
      case Un:
        t.y = t.y < 0 ? 0 : 1;
        break;
      case jr:
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
ge.DEFAULT_IMAGE = null;
ge.DEFAULT_MAPPING = Sl;
ge.DEFAULT_ANISOTROPY = 1;
class re {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    re.prototype.isVector4 = true, this.x = t, this.y = e, this.z = n, this.w = s;
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
  set(t, e, n, s) {
    return this.x = t, this.y = e, this.z = n, this.w = s, this;
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
    const e = this.x, n = this.y, s = this.z, r = this.w, a = t.elements;
    return this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r, this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r, this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r, this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r, this;
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
    let e, n, s, r;
    const l = t.elements, c = l[0], h = l[4], u = l[8], f = l[1], m = l[5], _ = l[9], x = l[2], d = l[6], p = l[10];
    if (Math.abs(h - f) < 0.01 && Math.abs(u - x) < 0.01 && Math.abs(_ - d) < 0.01) {
      if (Math.abs(h + f) < 0.1 && Math.abs(u + x) < 0.1 && Math.abs(_ + d) < 0.1 && Math.abs(c + m + p - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      e = Math.PI;
      const S = (c + 1) / 2, E = (m + 1) / 2, I = (p + 1) / 2, R = (h + f) / 4, w = (u + x) / 4, U = (_ + d) / 4;
      return S > E && S > I ? S < 0.01 ? (n = 0, s = 0.707106781, r = 0.707106781) : (n = Math.sqrt(S), s = R / n, r = w / n) : E > I ? E < 0.01 ? (n = 0.707106781, s = 0, r = 0.707106781) : (s = Math.sqrt(E), n = R / s, r = U / s) : I < 0.01 ? (n = 0.707106781, s = 0.707106781, r = 0) : (r = Math.sqrt(I), n = w / r, s = U / r), this.set(n, s, r, e), this;
    }
    let A = Math.sqrt((d - _) * (d - _) + (u - x) * (u - x) + (f - h) * (f - h));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (d - _) / A, this.y = (u - x) / A, this.z = (f - h) / A, this.w = Math.acos((c + m + p - 1) / 2), this;
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
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
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
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this.w = t.w + (e.w - t.w) * n, this;
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
class Ch extends zn {
  constructor(t = 1, e = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = t, this.height = e, this.depth = 1, this.scissor = new re(0, 0, t, e), this.scissorTest = false, this.viewport = new re(0, 0, t, e);
    const s = { width: t, height: e, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: ze, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const r = new ge(s, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      this.width = t, this.height = e, this.depth = n;
      for (let s = 0, r = this.textures.length; s < r; s++) this.textures[s].image.width = t, this.textures[s].image.height = e, this.textures[s].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.width = t.width, this.height = t.height, this.depth = t.depth, this.scissor.copy(t.scissor), this.scissorTest = t.scissorTest, this.viewport.copy(t.viewport), this.textures.length = 0;
    for (let n = 0, s = t.textures.length; n < s; n++) this.textures[n] = t.textures[n].clone(), this.textures[n].isRenderTargetTexture = true;
    const e = Object.assign({}, t.texture.image);
    return this.texture.source = new Il(e), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.resolveDepthBuffer = t.resolveDepthBuffer, this.resolveStencilBuffer = t.resolveStencilBuffer, t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()), this.samples = t.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class On extends Ch {
  constructor(t = 1, e = 1, n = {}) {
    super(t, e, n), this.isWebGLRenderTarget = true;
  }
}
class Nl extends ge {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ae, this.minFilter = Ae, this.wrapR = Un, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Ph extends ge {
  constructor(t = null, e = 1, n = 1, s = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: t, width: e, height: n, depth: s }, this.magFilter = Ae, this.minFilter = Ae, this.wrapR = Un, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Fn {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    this.isQuaternion = true, this._x = t, this._y = e, this._z = n, this._w = s;
  }
  static slerpFlat(t, e, n, s, r, a, o) {
    let l = n[s + 0], c = n[s + 1], h = n[s + 2], u = n[s + 3];
    const f = r[a + 0], m = r[a + 1], _ = r[a + 2], x = r[a + 3];
    if (o === 0) {
      t[e + 0] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
      return;
    }
    if (o === 1) {
      t[e + 0] = f, t[e + 1] = m, t[e + 2] = _, t[e + 3] = x;
      return;
    }
    if (u !== x || l !== f || c !== m || h !== _) {
      let d = 1 - o;
      const p = l * f + c * m + h * _ + u * x, A = p >= 0 ? 1 : -1, S = 1 - p * p;
      if (S > Number.EPSILON) {
        const I = Math.sqrt(S), R = Math.atan2(I, p * A);
        d = Math.sin(d * R) / I, o = Math.sin(o * R) / I;
      }
      const E = o * A;
      if (l = l * d + f * E, c = c * d + m * E, h = h * d + _ * E, u = u * d + x * E, d === 1 - o) {
        const I = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= I, c *= I, h *= I, u *= I;
      }
    }
    t[e] = l, t[e + 1] = c, t[e + 2] = h, t[e + 3] = u;
  }
  static multiplyQuaternionsFlat(t, e, n, s, r, a) {
    const o = n[s], l = n[s + 1], c = n[s + 2], h = n[s + 3], u = r[a], f = r[a + 1], m = r[a + 2], _ = r[a + 3];
    return t[e] = o * _ + h * u + l * m - c * f, t[e + 1] = l * _ + h * f + c * u - o * m, t[e + 2] = c * _ + h * m + o * f - l * u, t[e + 3] = h * _ - o * u - l * f - c * m, t;
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
  set(t, e, n, s) {
    return this._x = t, this._y = e, this._z = n, this._w = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
  }
  setFromEuler(t, e = true) {
    const n = t._x, s = t._y, r = t._z, a = t._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(s / 2), u = o(r / 2), f = l(n / 2), m = l(s / 2), _ = l(r / 2);
    switch (a) {
      case "XYZ":
        this._x = f * h * u + c * m * _, this._y = c * m * u - f * h * _, this._z = c * h * _ + f * m * u, this._w = c * h * u - f * m * _;
        break;
      case "YXZ":
        this._x = f * h * u + c * m * _, this._y = c * m * u - f * h * _, this._z = c * h * _ - f * m * u, this._w = c * h * u + f * m * _;
        break;
      case "ZXY":
        this._x = f * h * u - c * m * _, this._y = c * m * u + f * h * _, this._z = c * h * _ + f * m * u, this._w = c * h * u - f * m * _;
        break;
      case "ZYX":
        this._x = f * h * u - c * m * _, this._y = c * m * u + f * h * _, this._z = c * h * _ - f * m * u, this._w = c * h * u + f * m * _;
        break;
      case "YZX":
        this._x = f * h * u + c * m * _, this._y = c * m * u + f * h * _, this._z = c * h * _ - f * m * u, this._w = c * h * u - f * m * _;
        break;
      case "XZY":
        this._x = f * h * u - c * m * _, this._y = c * m * u - f * h * _, this._z = c * h * _ + f * m * u, this._w = c * h * u + f * m * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return e === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(t, e) {
    const n = e / 2, s = Math.sin(n);
    return this._x = t.x * s, this._y = t.y * s, this._z = t.z * s, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t) {
    const e = t.elements, n = e[0], s = e[4], r = e[8], a = e[1], o = e[5], l = e[9], c = e[2], h = e[6], u = e[10], f = n + o + u;
    if (f > 0) {
      const m = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / m, this._x = (h - l) * m, this._y = (r - c) * m, this._z = (a - s) * m;
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / m, this._x = 0.25 * m, this._y = (s + a) / m, this._z = (r + c) / m;
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / m, this._x = (s + a) / m, this._y = 0.25 * m, this._z = (l + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - s) / m, this._x = (r + c) / m, this._y = (l + h) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = n)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = n), this.normalize();
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(ue(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const s = Math.min(1, e / n);
    return this.slerp(t, s), this;
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
    const n = t._x, s = t._y, r = t._z, a = t._w, o = e._x, l = e._y, c = e._z, h = e._w;
    return this._x = n * h + a * o + s * c - r * l, this._y = s * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - s * o, this._w = a * h - n * o - s * l - r * c, this._onChangeCallback(), this;
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x, s = this._y, r = this._z, a = this._w;
    let o = a * t._w + n * t._x + s * t._y + r * t._z;
    if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) return this._w = a, this._x = n, this._y = s, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - e;
      return this._w = m * a + e * this._w, this._x = m * n + e * this._x, this._y = m * s + e * this._y, this._z = m * r + e * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - e) * h) / c, f = Math.sin(e * h) / c;
    return this._w = a * u + this._w * f, this._x = n * u + this._x * f, this._y = s * u + this._y * f, this._z = r * u + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), s = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(s * Math.sin(t), s * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
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
class C {
  constructor(t = 0, e = 0, n = 0) {
    C.prototype.isVector3 = true, this.x = t, this.y = e, this.z = n;
  }
  set(t, e, n) {
    return n === void 0 && (n = this.z), this.x = t, this.y = e, this.z = n, this;
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
    return this.applyQuaternion(po.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(po.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[3] * n + r[6] * s, this.y = r[1] * e + r[4] * n + r[7] * s, this.z = r[2] * e + r[5] * n + r[8] * s, this;
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements, a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
    return this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a, this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a, this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a, this;
  }
  applyQuaternion(t) {
    const e = this.x, n = this.y, s = this.z, r = t.x, a = t.y, o = t.z, l = t.w, c = 2 * (a * s - o * n), h = 2 * (o * e - r * s), u = 2 * (r * n - a * e);
    return this.x = e + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = s + l * u + r * h - a * c, this;
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
  }
  transformDirection(t) {
    const e = this.x, n = this.y, s = this.z, r = t.elements;
    return this.x = r[0] * e + r[4] * n + r[8] * s, this.y = r[1] * e + r[5] * n + r[9] * s, this.z = r[2] * e + r[6] * n + r[10] * s, this.normalize();
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
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)));
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
  lerpVectors(t, e, n) {
    return this.x = t.x + (e.x - t.x) * n, this.y = t.y + (e.y - t.y) * n, this.z = t.z + (e.z - t.z) * n, this;
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x, s = t.y, r = t.z, a = e.x, o = e.y, l = e.z;
    return this.x = s * l - r * o, this.y = r * a - n * l, this.z = n * o - s * a, this;
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return sr.copy(this).projectOnVector(t), this.sub(sr);
  }
  reflect(t) {
    return this.sub(sr.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(ue(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x, n = this.y - t.y, s = this.z - t.z;
    return e * e + n * n + s * s;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const s = Math.sin(e) * t;
    return this.x = s * Math.sin(n), this.y = Math.cos(e) * t, this.z = s * Math.cos(n), this;
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return this.x = t * Math.sin(e), this.y = n, this.z = t * Math.cos(e), this;
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return this.x = e[12], this.y = e[13], this.z = e[14], this;
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(), n = this.setFromMatrixColumn(t, 1).length(), s = this.setFromMatrixColumn(t, 2).length();
    return this.x = e, this.y = n, this.z = s, this;
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
    const t = Math.random() * Math.PI * 2, e = Math.random() * 2 - 1, n = Math.sqrt(1 - e * e);
    return this.x = n * Math.cos(t), this.y = e, this.z = n * Math.sin(t), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const sr = new C(), po = new Fn();
class zi {
  constructor(t = new C(1 / 0, 1 / 0, 1 / 0), e = new C(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = t, this.max = e;
  }
  set(t, e) {
    return this.min.copy(t), this.max.copy(e), this;
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3) this.expandByPoint(Ne.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++) this.expandByPoint(Ne.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = Ne.copy(e).multiplyScalar(0.5);
    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this;
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
    const n = t.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (e === true && r !== void 0 && t.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) t.isMesh === true ? t.getVertexPosition(a, Ne) : Ne.fromBufferAttribute(r, a), Ne.applyMatrix4(t.matrixWorld), this.expandByPoint(Ne);
      else t.boundingBox !== void 0 ? (t.boundingBox === null && t.computeBoundingBox(), Yi.copy(t.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Yi.copy(n.boundingBox)), Yi.applyMatrix4(t.matrixWorld), this.union(Yi);
    }
    const s = t.children;
    for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], e);
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
    return this.clampPoint(t.center, Ne), Ne.distanceToSquared(t.center) <= t.radius * t.radius;
  }
  intersectsPlane(t) {
    let e, n;
    return t.normal.x > 0 ? (e = t.normal.x * this.min.x, n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, n = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, n += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, n += t.normal.z * this.min.z), e <= -t.constant && n >= -t.constant;
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return false;
    this.getCenter(Si), qi.subVectors(this.max, Si), kn.subVectors(t.a, Si), Wn.subVectors(t.b, Si), Xn.subVectors(t.c, Si), cn.subVectors(Wn, kn), hn.subVectors(Xn, Wn), Tn.subVectors(kn, Xn);
    let e = [0, -cn.z, cn.y, 0, -hn.z, hn.y, 0, -Tn.z, Tn.y, cn.z, 0, -cn.x, hn.z, 0, -hn.x, Tn.z, 0, -Tn.x, -cn.y, cn.x, 0, -hn.y, hn.x, 0, -Tn.y, Tn.x, 0];
    return !rr(e, kn, Wn, Xn, qi) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !rr(e, kn, Wn, Xn, qi)) ? false : (Zi.crossVectors(cn, hn), e = [Zi.x, Zi.y, Zi.z], rr(e, kn, Wn, Xn, qi));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, Ne).distanceTo(t);
  }
  getBoundingSphere(t) {
    return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = this.getSize(Ne).length() * 0.5), t;
  }
  intersect(t) {
    return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(t) {
    return this.min.min(t.min), this.max.max(t.max), this;
  }
  applyMatrix4(t) {
    return this.isEmpty() ? this : (je[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), je[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), je[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), je[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), je[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), je[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), je[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), je[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(je), this);
  }
  translate(t) {
    return this.min.add(t), this.max.add(t), this;
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
}
const je = [new C(), new C(), new C(), new C(), new C(), new C(), new C(), new C()], Ne = new C(), Yi = new zi(), kn = new C(), Wn = new C(), Xn = new C(), cn = new C(), hn = new C(), Tn = new C(), Si = new C(), qi = new C(), Zi = new C(), An = new C();
function rr(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    An.fromArray(i, r);
    const o = s.x * Math.abs(An.x) + s.y * Math.abs(An.y) + s.z * Math.abs(An.z), l = t.dot(An), c = e.dot(An), h = n.dot(An);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const Lh = new zi(), yi = new C(), ar = new C();
class Hi {
  constructor(t = new C(), e = -1) {
    this.isSphere = true, this.center = t, this.radius = e;
  }
  set(t, e) {
    return this.center.copy(t), this.radius = e, this;
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : Lh.setFromPoints(t).getCenter(n);
    let s = 0;
    for (let r = 0, a = t.length; r < a; r++) s = Math.max(s, n.distanceToSquared(t[r]));
    return this.radius = Math.sqrt(s), this;
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
    const n = this.center.distanceToSquared(t);
    return e.copy(t), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
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
    yi.subVectors(t, this.center);
    const e = yi.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e), s = (n - this.radius) * 0.5;
      this.center.addScaledVector(yi, s / n), this.radius += s;
    }
    return this;
  }
  union(t) {
    return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (this.center.equals(t.center) === true ? this.radius = Math.max(this.radius, t.radius) : (ar.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(yi.copy(t.center).add(ar)), this.expandByPoint(yi.copy(t.center).sub(ar))), this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Je = new C(), or = new C(), Ki = new C(), un = new C(), lr = new C(), ji = new C(), cr = new C();
class Gi {
  constructor(t = new C(), e = new C(0, 0, -1)) {
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
    return this.origin.copy(this.at(t, Je)), this;
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Je.subVectors(t, this.origin).dot(this.direction);
    return e < 0 ? this.origin.distanceToSquared(t) : (Je.copy(this.origin).addScaledVector(this.direction, e), Je.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, s) {
    or.copy(t).add(e).multiplyScalar(0.5), Ki.copy(e).sub(t).normalize(), un.copy(this.origin).sub(or);
    const r = t.distanceTo(e) * 0.5, a = -this.direction.dot(Ki), o = un.dot(this.direction), l = -un.dot(Ki), c = un.lengthSq(), h = Math.abs(1 - a * a);
    let u, f, m, _;
    if (h > 0) if (u = a * l - o, f = a * o - l, _ = r * h, u >= 0) if (f >= -_) if (f <= _) {
      const x = 1 / h;
      u *= x, f *= x, m = u * (u + a * f + 2 * o) + f * (a * u + f + 2 * l) + c;
    } else f = r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    else f = -r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    else f <= -_ ? (u = Math.max(0, -(-a * r + o)), f = u > 0 ? -r : Math.min(Math.max(-r, -l), r), m = -u * u + f * (f + 2 * l) + c) : f <= _ ? (u = 0, f = Math.min(Math.max(-r, -l), r), m = f * (f + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), f = u > 0 ? r : Math.min(Math.max(-r, -l), r), m = -u * u + f * (f + 2 * l) + c);
    else f = a > 0 ? -r : r, u = Math.max(0, -(a * f + o)), m = -u * u + f * (f + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), s && s.copy(or).addScaledVector(Ki, f), m;
  }
  intersectSphere(t, e) {
    Je.subVectors(t.center, this.origin);
    const n = Je.dot(this.direction), s = Je.dot(Je) - n * n, r = t.radius * t.radius;
    if (s > r) return null;
    const a = Math.sqrt(r - s), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, s, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, f = this.origin;
    return c >= 0 ? (n = (t.min.x - f.x) * c, s = (t.max.x - f.x) * c) : (n = (t.max.x - f.x) * c, s = (t.min.x - f.x) * c), h >= 0 ? (r = (t.min.y - f.y) * h, a = (t.max.y - f.y) * h) : (r = (t.max.y - f.y) * h, a = (t.min.y - f.y) * h), n > a || r > s || ((r > n || isNaN(n)) && (n = r), (a < s || isNaN(s)) && (s = a), u >= 0 ? (o = (t.min.z - f.z) * u, l = (t.max.z - f.z) * u) : (o = (t.max.z - f.z) * u, l = (t.min.z - f.z) * u), n > l || o > s) || ((o > n || n !== n) && (n = o), (l < s || s !== s) && (s = l), s < 0) ? null : this.at(n >= 0 ? n : s, e);
  }
  intersectsBox(t) {
    return this.intersectBox(t, Je) !== null;
  }
  intersectTriangle(t, e, n, s, r) {
    lr.subVectors(e, t), ji.subVectors(n, t), cr.crossVectors(lr, ji);
    let a = this.direction.dot(cr), o;
    if (a > 0) {
      if (s) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    un.subVectors(this.origin, t);
    const l = o * this.direction.dot(ji.crossVectors(un, ji));
    if (l < 0) return null;
    const c = o * this.direction.dot(lr.cross(un));
    if (c < 0 || l + c > a) return null;
    const h = -o * un.dot(cr);
    return h < 0 ? null : this.at(h / a, r);
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
class Qt {
  constructor(t, e, n, s, r, a, o, l, c, h, u, f, m, _, x, d) {
    Qt.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t !== void 0 && this.set(t, e, n, s, r, a, o, l, c, h, u, f, m, _, x, d);
  }
  set(t, e, n, s, r, a, o, l, c, h, u, f, m, _, x, d) {
    const p = this.elements;
    return p[0] = t, p[4] = e, p[8] = n, p[12] = s, p[1] = r, p[5] = a, p[9] = o, p[13] = l, p[2] = c, p[6] = h, p[10] = u, p[14] = f, p[3] = m, p[7] = _, p[11] = x, p[15] = d, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Qt().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements, n = t.elements;
    return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
  }
  copyPosition(t) {
    const e = this.elements, n = t.elements;
    return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(t, e, n) {
    return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(t, e, n) {
    return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(t) {
    const e = this.elements, n = t.elements, s = 1 / Yn.setFromMatrixColumn(t, 0).length(), r = 1 / Yn.setFromMatrixColumn(t, 1).length(), a = 1 / Yn.setFromMatrixColumn(t, 2).length();
    return e[0] = n[0] * s, e[1] = n[1] * s, e[2] = n[2] * s, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * a, e[9] = n[9] * a, e[10] = n[10] * a, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromEuler(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(s), c = Math.sin(s), h = Math.cos(r), u = Math.sin(r);
    if (t.order === "XYZ") {
      const f = a * h, m = a * u, _ = o * h, x = o * u;
      e[0] = l * h, e[4] = -l * u, e[8] = c, e[1] = m + _ * c, e[5] = f - x * c, e[9] = -o * l, e[2] = x - f * c, e[6] = _ + m * c, e[10] = a * l;
    } else if (t.order === "YXZ") {
      const f = l * h, m = l * u, _ = c * h, x = c * u;
      e[0] = f + x * o, e[4] = _ * o - m, e[8] = a * c, e[1] = a * u, e[5] = a * h, e[9] = -o, e[2] = m * o - _, e[6] = x + f * o, e[10] = a * l;
    } else if (t.order === "ZXY") {
      const f = l * h, m = l * u, _ = c * h, x = c * u;
      e[0] = f - x * o, e[4] = -a * u, e[8] = _ + m * o, e[1] = m + _ * o, e[5] = a * h, e[9] = x - f * o, e[2] = -a * c, e[6] = o, e[10] = a * l;
    } else if (t.order === "ZYX") {
      const f = a * h, m = a * u, _ = o * h, x = o * u;
      e[0] = l * h, e[4] = _ * c - m, e[8] = f * c + x, e[1] = l * u, e[5] = x * c + f, e[9] = m * c - _, e[2] = -c, e[6] = o * l, e[10] = a * l;
    } else if (t.order === "YZX") {
      const f = a * l, m = a * c, _ = o * l, x = o * c;
      e[0] = l * h, e[4] = x - f * u, e[8] = _ * u + m, e[1] = u, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = m * u + _, e[10] = f - x * u;
    } else if (t.order === "XZY") {
      const f = a * l, m = a * c, _ = o * l, x = o * c;
      e[0] = l * h, e[4] = -u, e[8] = c * h, e[1] = f * u + x, e[5] = a * h, e[9] = m * u - _, e[2] = _ * u - m, e[6] = o * h, e[10] = x * u + f;
    }
    return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Dh, t, Uh);
  }
  lookAt(t, e, n) {
    const s = this.elements;
    return Ce.subVectors(t, e), Ce.lengthSq() === 0 && (Ce.z = 1), Ce.normalize(), fn.crossVectors(n, Ce), fn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ce.x += 1e-4 : Ce.z += 1e-4, Ce.normalize(), fn.crossVectors(n, Ce)), fn.normalize(), Ji.crossVectors(Ce, fn), s[0] = fn.x, s[4] = Ji.x, s[8] = Ce.x, s[1] = fn.y, s[5] = Ji.y, s[9] = Ce.y, s[2] = fn.z, s[6] = Ji.z, s[10] = Ce.z, this;
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements, s = e.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], f = n[9], m = n[13], _ = n[2], x = n[6], d = n[10], p = n[14], A = n[3], S = n[7], E = n[11], I = n[15], R = s[0], w = s[4], U = s[8], J = s[12], g = s[1], y = s[5], G = s[9], B = s[13], H = s[2], j = s[6], F = s[10], tt = s[14], k = s[3], ht = s[7], dt = s[11], pt = s[15];
    return r[0] = a * R + o * g + l * H + c * k, r[4] = a * w + o * y + l * j + c * ht, r[8] = a * U + o * G + l * F + c * dt, r[12] = a * J + o * B + l * tt + c * pt, r[1] = h * R + u * g + f * H + m * k, r[5] = h * w + u * y + f * j + m * ht, r[9] = h * U + u * G + f * F + m * dt, r[13] = h * J + u * B + f * tt + m * pt, r[2] = _ * R + x * g + d * H + p * k, r[6] = _ * w + x * y + d * j + p * ht, r[10] = _ * U + x * G + d * F + p * dt, r[14] = _ * J + x * B + d * tt + p * pt, r[3] = A * R + S * g + E * H + I * k, r[7] = A * w + S * y + E * j + I * ht, r[11] = A * U + S * G + E * F + I * dt, r[15] = A * J + S * B + E * tt + I * pt, this;
  }
  multiplyScalar(t) {
    const e = this.elements;
    return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
  }
  determinant() {
    const t = this.elements, e = t[0], n = t[4], s = t[8], r = t[12], a = t[1], o = t[5], l = t[9], c = t[13], h = t[2], u = t[6], f = t[10], m = t[14], _ = t[3], x = t[7], d = t[11], p = t[15];
    return _ * (+r * l * u - s * c * u - r * o * f + n * c * f + s * o * m - n * l * m) + x * (+e * l * m - e * c * f + r * a * f - s * a * m + s * c * h - r * l * h) + d * (+e * c * u - e * o * m - r * a * u + n * a * m + r * o * h - n * c * h) + p * (-s * o * h - e * l * u + e * o * f + s * a * u - n * a * f + n * l * h);
  }
  transpose() {
    const t = this.elements;
    let e;
    return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
  }
  setPosition(t, e, n) {
    const s = this.elements;
    return t.isVector3 ? (s[12] = t.x, s[13] = t.y, s[14] = t.z) : (s[12] = t, s[13] = e, s[14] = n), this;
  }
  invert() {
    const t = this.elements, e = t[0], n = t[1], s = t[2], r = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], f = t[10], m = t[11], _ = t[12], x = t[13], d = t[14], p = t[15], A = u * d * c - x * f * c + x * l * m - o * d * m - u * l * p + o * f * p, S = _ * f * c - h * d * c - _ * l * m + a * d * m + h * l * p - a * f * p, E = h * x * c - _ * u * c + _ * o * m - a * x * m - h * o * p + a * u * p, I = _ * u * l - h * x * l - _ * o * f + a * x * f + h * o * d - a * u * d, R = e * A + n * S + s * E + r * I;
    if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / R;
    return t[0] = A * w, t[1] = (x * f * r - u * d * r - x * s * m + n * d * m + u * s * p - n * f * p) * w, t[2] = (o * d * r - x * l * r + x * s * c - n * d * c - o * s * p + n * l * p) * w, t[3] = (u * l * r - o * f * r - u * s * c + n * f * c + o * s * m - n * l * m) * w, t[4] = S * w, t[5] = (h * d * r - _ * f * r + _ * s * m - e * d * m - h * s * p + e * f * p) * w, t[6] = (_ * l * r - a * d * r - _ * s * c + e * d * c + a * s * p - e * l * p) * w, t[7] = (a * f * r - h * l * r + h * s * c - e * f * c - a * s * m + e * l * m) * w, t[8] = E * w, t[9] = (_ * u * r - h * x * r - _ * n * m + e * x * m + h * n * p - e * u * p) * w, t[10] = (a * x * r - _ * o * r + _ * n * c - e * x * c - a * n * p + e * o * p) * w, t[11] = (h * o * r - a * u * r - h * n * c + e * u * c + a * n * m - e * o * m) * w, t[12] = I * w, t[13] = (h * x * s - _ * u * s + _ * n * f - e * x * f - h * n * d + e * u * d) * w, t[14] = (_ * o * s - a * x * s - _ * n * l + e * x * l + a * n * d - e * o * d) * w, t[15] = (a * u * s - h * o * s + h * n * l - e * u * l - a * n * f + e * o * f) * w, this;
  }
  scale(t) {
    const e = this.elements, n = t.x, s = t.y, r = t.z;
    return e[0] *= n, e[4] *= s, e[8] *= r, e[1] *= n, e[5] *= s, e[9] *= r, e[2] *= n, e[6] *= s, e[10] *= r, e[3] *= n, e[7] *= s, e[11] *= r, this;
  }
  getMaxScaleOnAxis() {
    const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, s));
  }
  makeTranslation(t, e, n) {
    return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(t) {
    const e = Math.cos(t), n = Math.sin(t);
    return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e), s = Math.sin(e), r = 1 - n, a = t.x, o = t.y, l = t.z, c = r * a, h = r * o;
    return this.set(c * a + n, c * o - s * l, c * l + s * o, 0, c * o + s * l, h * o + n, h * l - s * a, 0, c * l - s * o, h * l + s * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(t, e, n) {
    return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(t, e, n, s, r, a) {
    return this.set(1, n, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1), this;
  }
  compose(t, e, n) {
    const s = this.elements, r = e._x, a = e._y, o = e._z, l = e._w, c = r + r, h = a + a, u = o + o, f = r * c, m = r * h, _ = r * u, x = a * h, d = a * u, p = o * u, A = l * c, S = l * h, E = l * u, I = n.x, R = n.y, w = n.z;
    return s[0] = (1 - (x + p)) * I, s[1] = (m + E) * I, s[2] = (_ - S) * I, s[3] = 0, s[4] = (m - E) * R, s[5] = (1 - (f + p)) * R, s[6] = (d + A) * R, s[7] = 0, s[8] = (_ + S) * w, s[9] = (d - A) * w, s[10] = (1 - (f + x)) * w, s[11] = 0, s[12] = t.x, s[13] = t.y, s[14] = t.z, s[15] = 1, this;
  }
  decompose(t, e, n) {
    const s = this.elements;
    let r = Yn.set(s[0], s[1], s[2]).length();
    const a = Yn.set(s[4], s[5], s[6]).length(), o = Yn.set(s[8], s[9], s[10]).length();
    this.determinant() < 0 && (r = -r), t.x = s[12], t.y = s[13], t.z = s[14], Oe.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return Oe.elements[0] *= c, Oe.elements[1] *= c, Oe.elements[2] *= c, Oe.elements[4] *= h, Oe.elements[5] *= h, Oe.elements[6] *= h, Oe.elements[8] *= u, Oe.elements[9] *= u, Oe.elements[10] *= u, e.setFromRotationMatrix(Oe), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(t, e, n, s, r, a, o = rn) {
    const l = this.elements, c = 2 * r / (e - t), h = 2 * r / (n - s), u = (e + t) / (e - t), f = (n + s) / (n - s);
    let m, _;
    if (o === rn) m = -(a + r) / (a - r), _ = -2 * a * r / (a - r);
    else if (o === zs) m = -a / (a - r), _ = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = f, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = _, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(t, e, n, s, r, a, o = rn) {
    const l = this.elements, c = 1 / (e - t), h = 1 / (n - s), u = 1 / (a - r), f = (e + t) * c, m = (n + s) * h;
    let _, x;
    if (o === rn) _ = (a + r) * u, x = -2 * u;
    else if (o === zs) _ = r * u, x = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -f, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -_, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(t) {
    const e = this.elements, n = t.elements;
    for (let s = 0; s < 16; s++) if (e[s] !== n[s]) return false;
    return true;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return t[e] = n[0], t[e + 1] = n[1], t[e + 2] = n[2], t[e + 3] = n[3], t[e + 4] = n[4], t[e + 5] = n[5], t[e + 6] = n[6], t[e + 7] = n[7], t[e + 8] = n[8], t[e + 9] = n[9], t[e + 10] = n[10], t[e + 11] = n[11], t[e + 12] = n[12], t[e + 13] = n[13], t[e + 14] = n[14], t[e + 15] = n[15], t;
  }
}
const Yn = new C(), Oe = new Qt(), Dh = new C(0, 0, 0), Uh = new C(1, 1, 1), fn = new C(), Ji = new C(), Ce = new C(), mo = new Qt(), _o = new Fn();
class ke {
  constructor(t = 0, e = 0, n = 0, s = ke.DEFAULT_ORDER) {
    this.isEuler = true, this._x = t, this._y = e, this._z = n, this._order = s;
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
  set(t, e, n, s = this._order) {
    return this._x = t, this._y = e, this._z = n, this._order = s, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(t, e = this._order, n = true) {
    const s = t.elements, r = s[0], a = s[4], o = s[8], l = s[1], c = s[5], h = s[9], u = s[2], f = s[6], m = s[10];
    switch (e) {
      case "XYZ":
        this._y = Math.asin(ue(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(f, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-ue(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(ue(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-ue(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(f, m), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(ue(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-ue(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(f, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
    }
    return this._order = e, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(t, e, n) {
    return mo.makeRotationFromQuaternion(t), this.setFromRotationMatrix(mo, e, n);
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return _o.setFromEuler(this), this.setFromQuaternion(_o, t);
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
ke.DEFAULT_ORDER = "XYZ";
class Ga {
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
let Ih = 0;
const go = new C(), qn = new Fn(), $e = new Qt(), $i = new C(), Ei = new C(), Nh = new C(), Oh = new Fn(), vo = new C(1, 0, 0), xo = new C(0, 1, 0), Mo = new C(0, 0, 1), So = { type: "added" }, Fh = { type: "removed" }, Zn = { type: "childadded", child: null }, hr = { type: "childremoved", child: null };
class ce extends zn {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Ih++ }), this.uuid = qe(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ce.DEFAULT_UP.clone();
    const t = new C(), e = new ke(), n = new Fn(), s = new C(1, 1, 1);
    function r() {
      n.setFromEuler(e, false);
    }
    function a() {
      e.setFromQuaternion(n, void 0, false);
    }
    e._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: s }, modelViewMatrix: { value: new Qt() }, normalMatrix: { value: new Ft() } }), this.matrix = new Qt(), this.matrixWorld = new Qt(), this.matrixAutoUpdate = ce.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Ga(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return qn.setFromAxisAngle(t, e), this.quaternion.multiply(qn), this;
  }
  rotateOnWorldAxis(t, e) {
    return qn.setFromAxisAngle(t, e), this.quaternion.premultiply(qn), this;
  }
  rotateX(t) {
    return this.rotateOnAxis(vo, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(xo, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis(Mo, t);
  }
  translateOnAxis(t, e) {
    return go.copy(t).applyQuaternion(this.quaternion), this.position.add(go.multiplyScalar(e)), this;
  }
  translateX(t) {
    return this.translateOnAxis(vo, t);
  }
  translateY(t) {
    return this.translateOnAxis(xo, t);
  }
  translateZ(t) {
    return this.translateOnAxis(Mo, t);
  }
  localToWorld(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(t) {
    return this.updateWorldMatrix(true, false), t.applyMatrix4($e.copy(this.matrixWorld).invert());
  }
  lookAt(t, e, n) {
    t.isVector3 ? $i.copy(t) : $i.set(t, e, n);
    const s = this.parent;
    this.updateWorldMatrix(true, false), Ei.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? $e.lookAt(Ei, $i, this.up) : $e.lookAt($i, Ei, this.up), this.quaternion.setFromRotationMatrix($e), s && ($e.extractRotation(s.matrixWorld), qn.setFromRotationMatrix($e), this.quaternion.premultiply(qn.invert()));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(So), Zn.child = t, this.dispatchEvent(Zn), Zn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return e !== -1 && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(Fh), hr.child = t, this.dispatchEvent(hr), hr.child = null), this;
  }
  removeFromParent() {
    const t = this.parent;
    return t !== null && t.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return this.updateWorldMatrix(true, false), $e.copy(this.matrixWorld).invert(), t.parent !== null && (t.parent.updateWorldMatrix(true, false), $e.multiply(t.parent.matrixWorld)), t.applyMatrix4($e), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(false, true), t.dispatchEvent(So), Zn.child = t, this.dispatchEvent(Zn), Zn.child = null, this;
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, s = this.children.length; n < s; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const s = this.children;
    for (let r = 0, a = s.length; r < a; r++) s[r].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return this.updateWorldMatrix(true, false), t.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ei, t, Nh), t;
  }
  getWorldScale(t) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Ei, Oh, t), t;
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
    for (let n = 0, s = e.length; n < s; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === false) return;
    t(this);
    const e = this.children;
    for (let n = 0, s = e.length; n < s; n++) e[n].traverseVisible(t);
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
    for (let n = 0, s = e.length; n < s; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (t === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), e === true) {
      const s = this.children;
      for (let r = 0, a = s.length; r < a; r++) s[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string", n = {};
    e && (t = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const s = {};
    s.uuid = this.uuid, s.type = this.type, this.name !== "" && (s.name = this.name), this.castShadow === true && (s.castShadow = true), this.receiveShadow === true && (s.receiveShadow = true), this.visible === false && (s.visible = false), this.frustumCulled === false && (s.frustumCulled = false), this.renderOrder !== 0 && (s.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (s.userData = this.userData), s.layers = this.layers.mask, s.matrix = this.matrix.toArray(), s.up = this.up.toArray(), this.matrixAutoUpdate === false && (s.matrixAutoUpdate = false), this.isInstancedMesh && (s.type = "InstancedMesh", s.count = this.count, s.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (s.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (s.type = "BatchedMesh", s.perObjectFrustumCulled = this.perObjectFrustumCulled, s.sortObjects = this.sortObjects, s.drawRanges = this._drawRanges, s.reservedRanges = this._reservedRanges, s.visibility = this._visibility, s.active = this._active, s.bounds = this._bounds.map((o) => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), s.maxInstanceCount = this._maxInstanceCount, s.maxVertexCount = this._maxVertexCount, s.maxIndexCount = this._maxIndexCount, s.geometryInitialized = this._geometryInitialized, s.geometryCount = this._geometryCount, s.matricesTexture = this._matricesTexture.toJSON(t), this._colorsTexture !== null && (s.colorsTexture = this._colorsTexture.toJSON(t)), this.boundingSphere !== null && (s.boundingSphere = { center: s.boundingSphere.center.toArray(), radius: s.boundingSphere.radius }), this.boundingBox !== null && (s.boundingBox = { min: s.boundingBox.min.toArray(), max: s.boundingBox.max.toArray() }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? s.background = this.background.toJSON() : this.background.isTexture && (s.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (s.environment = this.environment.toJSON(t).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      s.geometry = r(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(t.shapes, u);
        }
        else r(t.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (s.bindMode = this.bindMode, s.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(t.skeletons, this.skeleton), s.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(t.materials, this.material[l]));
      s.material = o;
    } else s.material = r(t.materials, this.material);
    if (this.children.length > 0) {
      s.children = [];
      for (let o = 0; o < this.children.length; o++) s.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      s.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        s.animations.push(r(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries), l = a(t.materials), c = a(t.textures), h = a(t.images), u = a(t.shapes), f = a(t.skeletons), m = a(t.animations), _ = a(t.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), f.length > 0 && (n.skeletons = f), m.length > 0 && (n.animations = m), _.length > 0 && (n.nodes = _);
    }
    return n.object = s, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = true) {
    if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), e === true) for (let n = 0; n < t.children.length; n++) {
      const s = t.children[n];
      this.add(s.clone());
    }
    return this;
  }
}
ce.DEFAULT_UP = new C(0, 1, 0);
ce.DEFAULT_MATRIX_AUTO_UPDATE = true;
ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Fe = new C(), Qe = new C(), ur = new C(), tn = new C(), Kn = new C(), jn = new C(), yo = new C(), fr = new C(), dr = new C(), pr = new C(), mr = new re(), _r = new re(), gr = new re();
class Le {
  constructor(t = new C(), e = new C(), n = new C()) {
    this.a = t, this.b = e, this.c = n;
  }
  static getNormal(t, e, n, s) {
    s.subVectors(n, e), Fe.subVectors(t, e), s.cross(Fe);
    const r = s.lengthSq();
    return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, s, r) {
    Fe.subVectors(s, e), Qe.subVectors(n, e), ur.subVectors(t, e);
    const a = Fe.dot(Fe), o = Fe.dot(Qe), l = Fe.dot(ur), c = Qe.dot(Qe), h = Qe.dot(ur), u = a * c - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const f = 1 / u, m = (c * l - o * h) * f, _ = (a * h - o * l) * f;
    return r.set(1 - m - _, _, m);
  }
  static containsPoint(t, e, n, s) {
    return this.getBarycoord(t, e, n, s, tn) === null ? false : tn.x >= 0 && tn.y >= 0 && tn.x + tn.y <= 1;
  }
  static getInterpolation(t, e, n, s, r, a, o, l) {
    return this.getBarycoord(t, e, n, s, tn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, tn.x), l.addScaledVector(a, tn.y), l.addScaledVector(o, tn.z), l);
  }
  static getInterpolatedAttribute(t, e, n, s, r, a) {
    return mr.setScalar(0), _r.setScalar(0), gr.setScalar(0), mr.fromBufferAttribute(t, e), _r.fromBufferAttribute(t, n), gr.fromBufferAttribute(t, s), a.setScalar(0), a.addScaledVector(mr, r.x), a.addScaledVector(_r, r.y), a.addScaledVector(gr, r.z), a;
  }
  static isFrontFacing(t, e, n, s) {
    return Fe.subVectors(n, e), Qe.subVectors(t, e), Fe.cross(Qe).dot(s) < 0;
  }
  set(t, e, n) {
    return this.a.copy(t), this.b.copy(e), this.c.copy(n), this;
  }
  setFromPointsAndIndices(t, e, n, s) {
    return this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this;
  }
  setFromAttributeAndIndices(t, e, n, s) {
    return this.a.fromBufferAttribute(t, e), this.b.fromBufferAttribute(t, n), this.c.fromBufferAttribute(t, s), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this;
  }
  getArea() {
    return Fe.subVectors(this.c, this.b), Qe.subVectors(this.a, this.b), Fe.cross(Qe).length() * 0.5;
  }
  getMidpoint(t) {
    return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Le.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Le.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, s, r) {
    return Le.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
  }
  containsPoint(t) {
    return Le.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Le.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a, s = this.b, r = this.c;
    let a, o;
    Kn.subVectors(s, n), jn.subVectors(r, n), fr.subVectors(t, n);
    const l = Kn.dot(fr), c = jn.dot(fr);
    if (l <= 0 && c <= 0) return e.copy(n);
    dr.subVectors(t, s);
    const h = Kn.dot(dr), u = jn.dot(dr);
    if (h >= 0 && u <= h) return e.copy(s);
    const f = l * u - h * c;
    if (f <= 0 && l >= 0 && h <= 0) return a = l / (l - h), e.copy(n).addScaledVector(Kn, a);
    pr.subVectors(t, r);
    const m = Kn.dot(pr), _ = jn.dot(pr);
    if (_ >= 0 && m <= _) return e.copy(r);
    const x = m * c - l * _;
    if (x <= 0 && c >= 0 && _ <= 0) return o = c / (c - _), e.copy(n).addScaledVector(jn, o);
    const d = h * _ - m * u;
    if (d <= 0 && u - h >= 0 && m - _ >= 0) return yo.subVectors(r, s), o = (u - h) / (u - h + (m - _)), e.copy(s).addScaledVector(yo, o);
    const p = 1 / (d + x + f);
    return a = x * p, o = f * p, e.copy(n).addScaledVector(Kn, a).addScaledVector(jn, o);
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Ol = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, dn = { h: 0, s: 0, l: 0 }, Qi = { h: 0, s: 0, l: 0 };
function vr(i, t, e) {
  return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? i + (t - i) * 6 * e : e < 1 / 2 ? t : e < 2 / 3 ? i + (t - i) * 6 * (2 / 3 - e) : i;
}
class Bt {
  constructor(t, e, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, n);
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const s = t;
      s && s.isColor ? this.copy(s) : typeof s == "number" ? this.setHex(s) : typeof s == "string" && this.setStyle(s);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return this.r = t, this.g = t, this.b = t, this;
  }
  setHex(t, e = We) {
    return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (t & 255) / 255, Zt.toWorkingColorSpace(this, e), this;
  }
  setRGB(t, e, n, s = Zt.workingColorSpace) {
    return this.r = t, this.g = e, this.b = n, Zt.toWorkingColorSpace(this, s), this;
  }
  setHSL(t, e, n, s = Zt.workingColorSpace) {
    if (t = Ha(t, 1), e = ue(e, 0, 1), n = ue(n, 0, 1), e === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + e) : n + e - n * e, a = 2 * n - r;
      this.r = vr(a, r, t + 1 / 3), this.g = vr(a, r, t), this.b = vr(a, r, t - 1 / 3);
    }
    return Zt.toWorkingColorSpace(this, s), this;
  }
  setStyle(t, e = We) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.");
    }
    let s;
    if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
      let r;
      const a = s[1], o = s[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
      const r = s[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, e);
      if (a === 6) return this.setHex(parseInt(r, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = We) {
    const n = Ol[t.toLowerCase()];
    return n !== void 0 ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return this.r = t.r, this.g = t.g, this.b = t.b, this;
  }
  copySRGBToLinear(t) {
    return this.r = fi(t.r), this.g = fi(t.g), this.b = fi(t.b), this;
  }
  copyLinearToSRGB(t) {
    return this.r = nr(t.r), this.g = nr(t.g), this.b = nr(t.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(t = We) {
    return Zt.fromWorkingColorSpace(xe.copy(this), t), Math.round(ue(xe.r * 255, 0, 255)) * 65536 + Math.round(ue(xe.g * 255, 0, 255)) * 256 + Math.round(ue(xe.b * 255, 0, 255));
  }
  getHexString(t = We) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = Zt.workingColorSpace) {
    Zt.fromWorkingColorSpace(xe.copy(this), e);
    const n = xe.r, s = xe.g, r = xe.b, a = Math.max(n, s, r), o = Math.min(n, s, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (s - r) / u + (s < r ? 6 : 0);
          break;
        case s:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - s) / u + 4;
          break;
      }
      l /= 6;
    }
    return t.h = l, t.s = c, t.l = h, t;
  }
  getRGB(t, e = Zt.workingColorSpace) {
    return Zt.fromWorkingColorSpace(xe.copy(this), e), t.r = xe.r, t.g = xe.g, t.b = xe.b, t;
  }
  getStyle(t = We) {
    Zt.fromWorkingColorSpace(xe.copy(this), t);
    const e = xe.r, n = xe.g, s = xe.b;
    return t !== We ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})` : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
  }
  offsetHSL(t, e, n) {
    return this.getHSL(dn), this.setHSL(dn.h + t, dn.s + e, dn.l + n);
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
  lerpColors(t, e, n) {
    return this.r = t.r + (e.r - t.r) * n, this.g = t.g + (e.g - t.g) * n, this.b = t.b + (e.b - t.b) * n, this;
  }
  lerpHSL(t, e) {
    this.getHSL(dn), t.getHSL(Qi);
    const n = Pi(dn.h, Qi.h, e), s = Pi(dn.s, Qi.s, e), r = Pi(dn.l, Qi.l, e);
    return this.setHSL(n, s, r), this;
  }
  setFromVector3(t) {
    return this.r = t.x, this.g = t.y, this.b = t.z, this;
  }
  applyMatrix3(t) {
    const e = this.r, n = this.g, s = this.b, r = t.elements;
    return this.r = r[0] * e + r[3] * n + r[6] * s, this.g = r[1] * e + r[4] * n + r[7] * s, this.b = r[2] * e + r[5] * n + r[8] * s, this;
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
const xe = new Bt();
Bt.NAMES = Ol;
let Bh = 0;
class on extends zn {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Bh++ }), this.uuid = qe(), this.name = "", this.type = "Material", this.blending = ci, this.side = Mn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Br, this.blendDst = zr, this.blendEquation = Ln, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Bt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = di, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = oo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Gn, this.stencilZFail = Gn, this.stencilZPass = Gn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
      const n = t[e];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
        continue;
      }
      const s = this[e];
      if (s === void 0) {
        console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
        continue;
      }
      s && s.isColor ? s.set(n) : s && s.isVector3 && n && n.isVector3 ? s.copy(n) : this[e] = n;
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== ci && (n.blending = this.blending), this.side !== Mn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Br && (n.blendSrc = this.blendSrc), this.blendDst !== zr && (n.blendDst = this.blendDst), this.blendEquation !== Ln && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== di && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== oo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Gn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Gn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Gn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function s(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (e) {
      const r = s(t.textures), a = s(t.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.name = t.name, this.blending = t.blending, this.side = t.side, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.blendColor.copy(t.blendColor), this.blendAlpha = t.blendAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.stencilWriteMask = t.stencilWriteMask, this.stencilFunc = t.stencilFunc, this.stencilRef = t.stencilRef, this.stencilFuncMask = t.stencilFuncMask, this.stencilFail = t.stencilFail, this.stencilZFail = t.stencilZFail, this.stencilZPass = t.stencilZPass, this.stencilWrite = t.stencilWrite;
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const s = e.length;
      n = new Array(s);
      for (let r = 0; r !== s; ++r) n[r] = e[r].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = t.clipIntersection, this.clipShadows = t.clipShadows, this.shadowSide = t.shadowSide, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.alphaHash = t.alphaHash, this.alphaToCoverage = t.alphaToCoverage, this.premultipliedAlpha = t.premultipliedAlpha, this.forceSinglePass = t.forceSinglePass, this.visible = t.visible, this.toneMapped = t.toneMapped, this.userData = JSON.parse(JSON.stringify(t.userData)), this;
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
class Va extends on {
  constructor(t) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Bt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ke(), this.combine = La, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.fog = t.fog, this;
  }
}
const le = new C(), ts = new $();
class Ve {
  constructor(t, e, n = false) {
    if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = t, this.itemSize = e, this.count = t !== void 0 ? t.length / e : 0, this.normalized = n, this.usage = Ea, this.updateRanges = [], this.gpuType = sn, this.version = 0;
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
  copyAt(t, e, n) {
    t *= this.itemSize, n *= e.itemSize;
    for (let s = 0, r = this.itemSize; s < r; s++) this.array[t + s] = e.array[n + s];
    return this;
  }
  copyArray(t) {
    return this.array.set(t), this;
  }
  applyMatrix3(t) {
    if (this.itemSize === 2) for (let e = 0, n = this.count; e < n; e++) ts.fromBufferAttribute(this, e), ts.applyMatrix3(t), this.setXY(e, ts.x, ts.y);
    else if (this.itemSize === 3) for (let e = 0, n = this.count; e < n; e++) le.fromBufferAttribute(this, e), le.applyMatrix3(t), this.setXYZ(e, le.x, le.y, le.z);
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++) le.fromBufferAttribute(this, e), le.applyMatrix4(t), this.setXYZ(e, le.x, le.y, le.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) le.fromBufferAttribute(this, e), le.applyNormalMatrix(t), this.setXYZ(e, le.x, le.y, le.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) le.fromBufferAttribute(this, e), le.transformDirection(t), this.setXYZ(e, le.x, le.y, le.z);
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return this.normalized && (n = He(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Jt(n, this.array)), this.array[t * this.itemSize + e] = n, this;
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return this.normalized && (e = He(e, this.array)), e;
  }
  setX(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize] = e, this;
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return this.normalized && (e = He(e, this.array)), e;
  }
  setY(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 1] = e, this;
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return this.normalized && (e = He(e, this.array)), e;
  }
  setZ(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 2] = e, this;
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return this.normalized && (e = He(e, this.array)), e;
  }
  setW(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.array[t * this.itemSize + 3] = e, this;
  }
  setXY(t, e, n) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, s) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this;
  }
  setXYZW(t, e, n, s, r) {
    return t *= this.itemSize, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array), r = Jt(r, this.array)), this.array[t + 0] = e, this.array[t + 1] = n, this.array[t + 2] = s, this.array[t + 3] = r, this;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (t.name = this.name), this.usage !== Ea && (t.usage = this.usage), t;
  }
}
class Fl extends Ve {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Bl extends Ve {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Kt extends Ve {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let zh = 0;
const Ue = new Qt(), xr = new ce(), Jn = new C(), Pe = new zi(), Ti = new zi(), me = new C();
class pe extends zn {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: zh++ }), this.uuid = qe(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return Array.isArray(t) ? this.index = new (Ul(t) ? Bl : Fl)(t, 1) : this.index = t, this;
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
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
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
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Ft().getNormalMatrix(t);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const s = this.attributes.tangent;
    return s !== void 0 && (s.transformDirection(t), s.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(t) {
    return Ue.makeRotationFromQuaternion(t), this.applyMatrix4(Ue), this;
  }
  rotateX(t) {
    return Ue.makeRotationX(t), this.applyMatrix4(Ue), this;
  }
  rotateY(t) {
    return Ue.makeRotationY(t), this.applyMatrix4(Ue), this;
  }
  rotateZ(t) {
    return Ue.makeRotationZ(t), this.applyMatrix4(Ue), this;
  }
  translate(t, e, n) {
    return Ue.makeTranslation(t, e, n), this.applyMatrix4(Ue), this;
  }
  scale(t, e, n) {
    return Ue.makeScale(t, e, n), this.applyMatrix4(Ue), this;
  }
  lookAt(t) {
    return xr.lookAt(t), xr.updateMatrix(), this.applyMatrix4(xr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Jn).negate(), this.translate(Jn.x, Jn.y, Jn.z), this;
  }
  setFromPoints(t) {
    const e = [];
    for (let n = 0, s = t.length; n < s; n++) {
      const r = t[n];
      e.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Kt(e, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new zi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (t !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(t), e) for (let n = 0, s = e.length; n < s; n++) {
        const r = e[n];
        Pe.setFromBufferAttribute(r), this.morphTargetsRelative ? (me.addVectors(this.boundingBox.min, Pe.min), this.boundingBox.expandByPoint(me), me.addVectors(this.boundingBox.max, Pe.max), this.boundingBox.expandByPoint(me)) : (this.boundingBox.expandByPoint(Pe.min), this.boundingBox.expandByPoint(Pe.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Hi());
    const t = this.attributes.position, e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C(), 1 / 0);
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if (Pe.setFromBufferAttribute(t), e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r];
        Ti.setFromBufferAttribute(o), this.morphTargetsRelative ? (me.addVectors(Pe.min, Ti.min), Pe.expandByPoint(me), me.addVectors(Pe.max, Ti.max), Pe.expandByPoint(me)) : (Pe.expandByPoint(Ti.min), Pe.expandByPoint(Ti.max));
      }
      Pe.getCenter(n);
      let s = 0;
      for (let r = 0, a = t.count; r < a; r++) me.fromBufferAttribute(t, r), s = Math.max(s, n.distanceToSquared(me));
      if (e) for (let r = 0, a = e.length; r < a; r++) {
        const o = e[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) me.fromBufferAttribute(o, c), l && (Jn.fromBufferAttribute(t, c), me.add(Jn)), s = Math.max(s, n.distanceToSquared(me));
      }
      this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const t = this.index, e = this.attributes;
    if (t === null || e.position === void 0 || e.normal === void 0 || e.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.position, s = e.normal, r = e.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Ve(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let U = 0; U < n.count; U++) o[U] = new C(), l[U] = new C();
    const c = new C(), h = new C(), u = new C(), f = new $(), m = new $(), _ = new $(), x = new C(), d = new C();
    function p(U, J, g) {
      c.fromBufferAttribute(n, U), h.fromBufferAttribute(n, J), u.fromBufferAttribute(n, g), f.fromBufferAttribute(r, U), m.fromBufferAttribute(r, J), _.fromBufferAttribute(r, g), h.sub(c), u.sub(c), m.sub(f), _.sub(f);
      const y = 1 / (m.x * _.y - _.x * m.y);
      isFinite(y) && (x.copy(h).multiplyScalar(_.y).addScaledVector(u, -m.y).multiplyScalar(y), d.copy(u).multiplyScalar(m.x).addScaledVector(h, -_.x).multiplyScalar(y), o[U].add(x), o[J].add(x), o[g].add(x), l[U].add(d), l[J].add(d), l[g].add(d));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: t.count }]);
    for (let U = 0, J = A.length; U < J; ++U) {
      const g = A[U], y = g.start, G = g.count;
      for (let B = y, H = y + G; B < H; B += 3) p(t.getX(B + 0), t.getX(B + 1), t.getX(B + 2));
    }
    const S = new C(), E = new C(), I = new C(), R = new C();
    function w(U) {
      I.fromBufferAttribute(s, U), R.copy(I);
      const J = o[U];
      S.copy(J), S.sub(I.multiplyScalar(I.dot(J))).normalize(), E.crossVectors(R, J);
      const y = E.dot(l[U]) < 0 ? -1 : 1;
      a.setXYZW(U, S.x, S.y, S.z, y);
    }
    for (let U = 0, J = A.length; U < J; ++U) {
      const g = A[U], y = g.start, G = g.count;
      for (let B = y, H = y + G; B < H; B += 3) w(t.getX(B + 0)), w(t.getX(B + 1)), w(t.getX(B + 2));
    }
  }
  computeVertexNormals() {
    const t = this.index, e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Ve(new Float32Array(e.count * 3), 3), this.setAttribute("normal", n);
      else for (let f = 0, m = n.count; f < m; f++) n.setXYZ(f, 0, 0, 0);
      const s = new C(), r = new C(), a = new C(), o = new C(), l = new C(), c = new C(), h = new C(), u = new C();
      if (t) for (let f = 0, m = t.count; f < m; f += 3) {
        const _ = t.getX(f + 0), x = t.getX(f + 1), d = t.getX(f + 2);
        s.fromBufferAttribute(e, _), r.fromBufferAttribute(e, x), a.fromBufferAttribute(e, d), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), o.fromBufferAttribute(n, _), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, d), o.add(h), l.add(h), c.add(h), n.setXYZ(_, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(d, c.x, c.y, c.z);
      }
      else for (let f = 0, m = e.count; f < m; f += 3) s.fromBufferAttribute(e, f + 0), r.fromBufferAttribute(e, f + 1), a.fromBufferAttribute(e, f + 2), h.subVectors(a, r), u.subVectors(s, r), h.cross(u), n.setXYZ(f + 0, h.x, h.y, h.z), n.setXYZ(f + 1, h.x, h.y, h.z), n.setXYZ(f + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++) me.fromBufferAttribute(t, e), me.normalize(), t.setXYZ(e, me.x, me.y, me.z);
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, f = new c.constructor(l.length * h);
      let m = 0, _ = 0;
      for (let x = 0, d = l.length; x < d; x++) {
        o.isInterleavedBufferAttribute ? m = l[x] * o.data.stride + o.offset : m = l[x] * h;
        for (let p = 0; p < h; p++) f[_++] = c[m++];
      }
      return new Ve(f, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const e = new pe(), n = this.index.array, s = this.attributes;
    for (const o in s) {
      const l = s[o], c = t(l, n);
      e.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const f = c[h], m = t(f, n);
        l.push(m);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
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
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const s = {};
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, f = c.length; u < f; u++) {
        const m = c[u];
        h.push(m.toJSON(t.data));
      }
      h.length > 0 && (s[l] = h, r = true);
    }
    r && (t.data.morphAttributes = s, t.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (t.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), t;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone(e));
    const s = t.attributes;
    for (const c in s) {
      const h = s[c];
      this.setAttribute(c, h.clone(e));
    }
    const r = t.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
      for (let f = 0, m = u.length; f < m; f++) h.push(u[f].clone(e));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Eo = new Qt(), bn = new Gi(), es = new Hi(), To = new C(), ns = new C(), is = new C(), ss = new C(), Mr = new C(), rs = new C(), Ao = new C(), as = new C();
class Ye extends ce {
  constructor(t = new pe(), e = new Va()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), t.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = t.morphTargetInfluences.slice()), t.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry, s = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    e.fromBufferAttribute(s, t);
    const o = this.morphTargetInfluences;
    if (r && o) {
      rs.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && (Mr.fromBufferAttribute(u, t), a ? rs.addScaledVector(Mr, h) : rs.addScaledVector(Mr.sub(e), h));
      }
      e.add(rs);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.material, r = this.matrixWorld;
    s !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), es.copy(n.boundingSphere), es.applyMatrix4(r), bn.copy(t.ray).recast(t.near), !(es.containsPoint(bn.origin) === false && (bn.intersectSphere(es, To) === null || bn.origin.distanceToSquared(To) > (t.far - t.near) ** 2)) && (Eo.copy(r).invert(), bn.copy(t.ray).applyMatrix4(Eo), !(n.boundingBox !== null && bn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(t, e, bn)));
  }
  _computeIntersections(t, e, n) {
    let s;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, f = r.groups, m = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let _ = 0, x = f.length; _ < x; _++) {
      const d = f[_], p = a[d.materialIndex], A = Math.max(d.start, m.start), S = Math.min(o.count, Math.min(d.start + d.count, m.start + m.count));
      for (let E = A, I = S; E < I; E += 3) {
        const R = o.getX(E), w = o.getX(E + 1), U = o.getX(E + 2);
        s = os(this, p, t, n, c, h, u, R, w, U), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = d.materialIndex, e.push(s));
      }
    }
    else {
      const _ = Math.max(0, m.start), x = Math.min(o.count, m.start + m.count);
      for (let d = _, p = x; d < p; d += 3) {
        const A = o.getX(d), S = o.getX(d + 1), E = o.getX(d + 2);
        s = os(this, a, t, n, c, h, u, A, S, E), s && (s.faceIndex = Math.floor(d / 3), e.push(s));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let _ = 0, x = f.length; _ < x; _++) {
      const d = f[_], p = a[d.materialIndex], A = Math.max(d.start, m.start), S = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count));
      for (let E = A, I = S; E < I; E += 3) {
        const R = E, w = E + 1, U = E + 2;
        s = os(this, p, t, n, c, h, u, R, w, U), s && (s.faceIndex = Math.floor(E / 3), s.face.materialIndex = d.materialIndex, e.push(s));
      }
    }
    else {
      const _ = Math.max(0, m.start), x = Math.min(l.count, m.start + m.count);
      for (let d = _, p = x; d < p; d += 3) {
        const A = d, S = d + 1, E = d + 2;
        s = os(this, a, t, n, c, h, u, A, S, E), s && (s.faceIndex = Math.floor(d / 3), e.push(s));
      }
    }
  }
}
function Hh(i, t, e, n, s, r, a, o) {
  let l;
  if (t.side === be ? l = n.intersectTriangle(a, r, s, true, o) : l = n.intersectTriangle(s, r, a, t.side === Mn, o), l === null) return null;
  as.copy(o), as.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(as);
  return c < e.near || c > e.far ? null : { distance: c, point: as.clone(), object: i };
}
function os(i, t, e, n, s, r, a, o, l, c) {
  i.getVertexPosition(o, ns), i.getVertexPosition(l, is), i.getVertexPosition(c, ss);
  const h = Hh(i, t, e, n, ns, is, ss, Ao);
  if (h) {
    const u = new C();
    Le.getBarycoord(Ao, ns, is, ss, u), s && (h.uv = Le.getInterpolatedAttribute(s, o, l, c, u, new $())), r && (h.uv1 = Le.getInterpolatedAttribute(r, o, l, c, u, new $())), a && (h.normal = Le.getInterpolatedAttribute(a, o, l, c, u, new C()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new C(), materialIndex: 0 };
    Le.getNormal(ns, is, ss, f.normal), h.face = f, h.barycoord = u;
  }
  return h;
}
class Vi extends pe {
  constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: t, height: e, depth: n, widthSegments: s, heightSegments: r, depthSegments: a };
    const o = this;
    s = Math.floor(s), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let f = 0, m = 0;
    _("z", "y", "x", -1, -1, n, e, t, a, r, 0), _("z", "y", "x", 1, -1, n, e, -t, a, r, 1), _("x", "z", "y", 1, 1, t, n, e, s, a, 2), _("x", "z", "y", 1, -1, t, n, -e, s, a, 3), _("x", "y", "z", 1, -1, t, e, n, s, r, 4), _("x", "y", "z", -1, -1, t, e, -n, s, r, 5), this.setIndex(l), this.setAttribute("position", new Kt(c, 3)), this.setAttribute("normal", new Kt(h, 3)), this.setAttribute("uv", new Kt(u, 2));
    function _(x, d, p, A, S, E, I, R, w, U, J) {
      const g = E / w, y = I / U, G = E / 2, B = I / 2, H = R / 2, j = w + 1, F = U + 1;
      let tt = 0, k = 0;
      const ht = new C();
      for (let dt = 0; dt < F; dt++) {
        const pt = dt * y - B;
        for (let Ht = 0; Ht < j; Ht++) {
          const Wt = Ht * g - G;
          ht[x] = Wt * A, ht[d] = pt * S, ht[p] = H, c.push(ht.x, ht.y, ht.z), ht[x] = 0, ht[d] = 0, ht[p] = R > 0 ? 1 : -1, h.push(ht.x, ht.y, ht.z), u.push(Ht / w), u.push(1 - dt / U), tt += 1;
        }
      }
      for (let dt = 0; dt < U; dt++) for (let pt = 0; pt < w; pt++) {
        const Ht = f + pt + j * dt, Wt = f + pt + j * (dt + 1), W = f + (pt + 1) + j * (dt + 1), et = f + (pt + 1) + j * dt;
        l.push(Ht, Wt, et), l.push(Wt, W, et), k += 6;
      }
      o.addGroup(m, k, J), m += k, f += tt;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Vi(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
  }
}
function vi(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const s = i[e][n];
      s && (s.isColor || s.isMatrix3 || s.isMatrix4 || s.isVector2 || s.isVector3 || s.isVector4 || s.isTexture || s.isQuaternion) ? s.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[e][n] = null) : t[e][n] = s.clone() : Array.isArray(s) ? t[e][n] = s.slice() : t[e][n] = s;
    }
  }
  return t;
}
function Se(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = vi(i[e]);
    for (const s in n) t[s] = n[s];
  }
  return t;
}
function Gh(i) {
  const t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e].clone());
  return t;
}
function zl(i) {
  const t = i.getRenderTarget();
  return t === null ? i.outputColorSpace : t.isXRRenderTarget === true ? t.texture.colorSpace : Zt.workingColorSpace;
}
const Vh = { clone: vi, merge: Se };
var kh = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Wh = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Sn extends on {
  constructor(t) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = kh, this.fragmentShader = Wh, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, t !== void 0 && this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = vi(t.uniforms), this.uniformsGroups = Gh(t.uniformsGroups), this.defines = Object.assign({}, t.defines), this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.fog = t.fog, this.lights = t.lights, this.clipping = t.clipping, this.extensions = Object.assign({}, t.extensions), this.glslVersion = t.glslVersion, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    e.glslVersion = this.glslVersion, e.uniforms = {};
    for (const s in this.uniforms) {
      const a = this.uniforms[s].value;
      a && a.isTexture ? e.uniforms[s] = { type: "t", value: a.toJSON(t).uuid } : a && a.isColor ? e.uniforms[s] = { type: "c", value: a.getHex() } : a && a.isVector2 ? e.uniforms[s] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? e.uniforms[s] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? e.uniforms[s] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? e.uniforms[s] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? e.uniforms[s] = { type: "m4", value: a.toArray() } : e.uniforms[s] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
    const n = {};
    for (const s in this.extensions) this.extensions[s] === true && (n[s] = true);
    return Object.keys(n).length > 0 && (e.extensions = n), e;
  }
}
class Hl extends ce {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Qt(), this.projectionMatrix = new Qt(), this.projectionMatrixInverse = new Qt(), this.coordinateSystem = rn;
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
const pn = new C(), bo = new $(), wo = new $();
class Be extends Hl {
  constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t, this.zoom = 1, this.near = n, this.far = s, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = t.view === null ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this;
  }
  setFocalLength(t) {
    const e = 0.5 * this.getFilmHeight() / t;
    this.fov = Ii * 2 * Math.atan(e), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const t = Math.tan(ui * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / t;
  }
  getEffectiveFOV() {
    return Ii * 2 * Math.atan(Math.tan(ui * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    pn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(pn.x, pn.y).multiplyScalar(-t / pn.z), pn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(pn.x, pn.y).multiplyScalar(-t / pn.z);
  }
  getViewSize(t, e) {
    return this.getViewBounds(t, bo, wo), e.subVectors(wo, bo);
  }
  setViewOffset(t, e, n, s, r, a) {
    this.aspect = t / e, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = t * Math.tan(ui * 0.5 * this.fov) / this.zoom, n = 2 * e, s = this.aspect * n, r = -0.5 * s;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * s / l, e -= a.offsetY * n / c, s *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += t * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + s, e, e - n, t, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, this.view !== null && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
  }
}
const $n = -90, Qn = 1;
class Xh extends ce {
  constructor(t, e, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const s = new Be($n, Qn, t, e);
    s.layers = this.layers, this.add(s);
    const r = new Be($n, Qn, t, e);
    r.layers = this.layers, this.add(r);
    const a = new Be($n, Qn, t, e);
    a.layers = this.layers, this.add(a);
    const o = new Be($n, Qn, t, e);
    o.layers = this.layers, this.add(o);
    const l = new Be($n, Qn, t, e);
    l.layers = this.layers, this.add(l);
    const c = new Be($n, Qn, t, e);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem, e = this.children.concat(), [n, s, r, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === rn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (t === zs) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), s.up.set(0, -1, 0), s.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t);
    for (const c of e) this.add(c), c.updateMatrixWorld();
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: s } = this;
    this.coordinateSystem !== t.coordinateSystem && (this.coordinateSystem = t.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = t.getRenderTarget(), f = t.getActiveCubeFace(), m = t.getActiveMipmapLevel(), _ = t.xr.enabled;
    t.xr.enabled = false;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, t.setRenderTarget(n, 0, s), t.render(e, r), t.setRenderTarget(n, 1, s), t.render(e, a), t.setRenderTarget(n, 2, s), t.render(e, o), t.setRenderTarget(n, 3, s), t.render(e, l), t.setRenderTarget(n, 4, s), t.render(e, c), n.texture.generateMipmaps = x, t.setRenderTarget(n, 5, s), t.render(e, h), t.setRenderTarget(u, f, m), t.xr.enabled = _, n.texture.needsPMREMUpdate = true;
  }
}
class Gl extends ge {
  constructor(t, e, n, s, r, a, o, l, c, h) {
    t = t !== void 0 ? t : [], e = e !== void 0 ? e : pi, super(t, e, n, s, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Yh extends On {
  constructor(t = 1, e = {}) {
    super(t, t, e), this.isWebGLCubeRenderTarget = true;
    const n = { width: t, height: t, depth: 1 }, s = [n, n, n, n, n, n];
    this.texture = new Gl(s, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = e.generateMipmaps !== void 0 ? e.generateMipmaps : false, this.texture.minFilter = e.minFilter !== void 0 ? e.minFilter : ze;
  }
  fromEquirectangularTexture(t, e) {
    this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

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
			` }, s = new Vi(5, 5, 5), r = new Sn({ name: "CubemapFromEquirect", uniforms: vi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: be, blending: gn });
    r.uniforms.tEquirect.value = e;
    const a = new Ye(s, r), o = e.minFilter;
    return e.minFilter === In && (e.minFilter = ze), new Xh(1, 10, this).update(t, a), e.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(t, e, n, s) {
    const r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) t.setRenderTarget(this, a), t.clear(e, n, s);
    t.setRenderTarget(r);
  }
}
const Sr = new C(), qh = new C(), Zh = new Ft();
class mn {
  constructor(t = new C(1, 0, 0), e = 0) {
    this.isPlane = true, this.normal = t, this.constant = e;
  }
  set(t, e) {
    return this.normal.copy(t), this.constant = e, this;
  }
  setComponents(t, e, n, s) {
    return this.normal.set(t, e, n), this.constant = s, this;
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return this.normal.copy(t), this.constant = -e.dot(this.normal), this;
  }
  setFromCoplanarPoints(t, e, n) {
    const s = Sr.subVectors(n, e).cross(qh.subVectors(t, e)).normalize();
    return this.setFromNormalAndCoplanarPoint(s, t), this;
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
    const n = t.delta(Sr), s = this.normal.dot(n);
    if (s === 0) return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const r = -(t.start.dot(this.normal) + this.constant) / s;
    return r < 0 || r > 1 ? null : e.copy(t.start).addScaledVector(n, r);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start), n = this.distanceToPoint(t.end);
    return e < 0 && n > 0 || n < 0 && e > 0;
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
    const n = e || Zh.getNormalMatrix(t), s = this.coplanarPoint(Sr).applyMatrix4(t), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -s.dot(r), this;
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
const wn = new Hi(), ls = new C();
class ka {
  constructor(t = new mn(), e = new mn(), n = new mn(), s = new mn(), r = new mn(), a = new mn()) {
    this.planes = [t, e, n, s, r, a];
  }
  set(t, e, n, s, r, a) {
    const o = this.planes;
    return o[0].copy(t), o[1].copy(e), o[2].copy(n), o[3].copy(s), o[4].copy(r), o[5].copy(a), this;
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = rn) {
    const n = this.planes, s = t.elements, r = s[0], a = s[1], o = s[2], l = s[3], c = s[4], h = s[5], u = s[6], f = s[7], m = s[8], _ = s[9], x = s[10], d = s[11], p = s[12], A = s[13], S = s[14], E = s[15];
    if (n[0].setComponents(l - r, f - c, d - m, E - p).normalize(), n[1].setComponents(l + r, f + c, d + m, E + p).normalize(), n[2].setComponents(l + a, f + h, d + _, E + A).normalize(), n[3].setComponents(l - a, f - h, d - _, E - A).normalize(), n[4].setComponents(l - o, f - u, d - x, E - S).normalize(), e === rn) n[5].setComponents(l + o, f + u, d + x, E + S).normalize();
    else if (e === zs) n[5].setComponents(o, u, x, S).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0) t.boundingSphere === null && t.computeBoundingSphere(), wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);
    else {
      const e = t.geometry;
      e.boundingSphere === null && e.computeBoundingSphere(), wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld);
    }
    return this.intersectsSphere(wn);
  }
  intersectsSprite(t) {
    return wn.center.set(0, 0, 0), wn.radius = 0.7071067811865476, wn.applyMatrix4(t.matrixWorld), this.intersectsSphere(wn);
  }
  intersectsSphere(t) {
    const e = this.planes, n = t.center, s = -t.radius;
    for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < s) return false;
    return true;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const s = e[n];
      if (ls.x = s.normal.x > 0 ? t.max.x : t.min.x, ls.y = s.normal.y > 0 ? t.max.y : t.min.y, ls.z = s.normal.z > 0 ? t.max.z : t.min.z, s.distanceToPoint(ls) < 0) return false;
    }
    return true;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Vl() {
  let i = null, t = false, e = null, n = null;
  function s(r, a) {
    e(r, a), n = i.requestAnimationFrame(s);
  }
  return { start: function() {
    t !== true && e !== null && (n = i.requestAnimationFrame(s), t = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), t = false;
  }, setAnimationLoop: function(r) {
    e = r;
  }, setContext: function(r) {
    i = r;
  } };
}
function Kh(i) {
  const t = /* @__PURE__ */ new WeakMap();
  function e(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, f = i.createBuffer();
    i.bindBuffer(l, f), i.bufferData(l, c, h), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = i.SHORT;
    else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i.INT;
    else if (c instanceof Int8Array) m = i.BYTE;
    else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: f, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (i.bindBuffer(c, o), u.length === 0) i.bufferSubData(c, 0, h);
    else {
      u.sort((m, _) => m.start - _.start);
      let f = 0;
      for (let m = 1; m < u.length; m++) {
        const _ = u[f], x = u[m];
        x.start <= _.start + _.count + 1 ? _.count = Math.max(_.count, x.start + x.count - _.start) : (++f, u[f] = x);
      }
      u.length = f + 1;
      for (let m = 0, _ = u.length; m < _; m++) {
        const x = u[m];
        i.bufferSubData(c, x.start * h.BYTES_PER_ELEMENT, h, x.start, x.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function s(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), t.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (i.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = t.get(o);
      (!h || h.version < o.version) && t.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = t.get(o);
    if (c === void 0) t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: s, remove: r, update: a };
}
class Ys extends pe {
  constructor(t = 1, e = 1, n = 1, s = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: t, height: e, widthSegments: n, heightSegments: s };
    const r = t / 2, a = e / 2, o = Math.floor(n), l = Math.floor(s), c = o + 1, h = l + 1, u = t / o, f = e / l, m = [], _ = [], x = [], d = [];
    for (let p = 0; p < h; p++) {
      const A = p * f - a;
      for (let S = 0; S < c; S++) {
        const E = S * u - r;
        _.push(E, -A, 0), x.push(0, 0, 1), d.push(S / o), d.push(1 - p / l);
      }
    }
    for (let p = 0; p < l; p++) for (let A = 0; A < o; A++) {
      const S = A + c * p, E = A + c * (p + 1), I = A + 1 + c * (p + 1), R = A + 1 + c * p;
      m.push(S, E, R), m.push(E, I, R);
    }
    this.setIndex(m), this.setAttribute("position", new Kt(_, 3)), this.setAttribute("normal", new Kt(x, 3)), this.setAttribute("uv", new Kt(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new Ys(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
var jh = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Jh = `#ifdef USE_ALPHAHASH
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
#endif`, $h = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Qh = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, tu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, eu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, nu = `#ifdef USE_AOMAP
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
#endif`, iu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, su = `#ifdef USE_BATCHING
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
#endif`, ru = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, au = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, ou = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, lu = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, cu = `#ifdef USE_IRIDESCENCE
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
#endif`, hu = `#ifdef USE_BUMPMAP
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
#endif`, uu = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, fu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, du = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, pu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, mu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, _u = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, gu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, vu = `#if defined( USE_COLOR_ALPHA )
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
#endif`, xu = `#define PI 3.141592653589793
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
} // validated`, Mu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Su = `vec3 transformedNormal = objectNormal;
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
#endif`, yu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Eu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Tu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Au = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, bu = "gl_FragColor = linearToOutputTexel( gl_FragColor );", wu = `
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
}`, Ru = `#ifdef USE_ENVMAP
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
#endif`, Cu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Pu = `#ifdef USE_ENVMAP
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
#endif`, Lu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Du = `#ifdef USE_ENVMAP
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
#endif`, Uu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Iu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Nu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Ou = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Fu = `#ifdef USE_GRADIENTMAP
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
}`, Bu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, zu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Hu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Gu = `uniform bool receiveShadow;
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
#endif`, Vu = `#ifdef USE_ENVMAP
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
#endif`, ku = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Wu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Xu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Yu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, qu = `PhysicalMaterial material;
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
#endif`, Zu = `struct PhysicalMaterial {
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
}`, Ku = `
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
#endif`, ju = `#if defined( RE_IndirectDiffuse )
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
#endif`, Ju = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, $u = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Qu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, tf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, ef = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, nf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, sf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, rf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, af = `#if defined( USE_POINTS_UV )
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
#endif`, of = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, lf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, cf = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, hf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, uf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, ff = `#ifdef USE_MORPHTARGETS
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
#endif`, df = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, pf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, mf = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, _f = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, gf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, vf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, xf = `#ifdef USE_NORMALMAP
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
#endif`, Mf = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Sf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, yf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Ef = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Tf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Af = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, bf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, wf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Rf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Cf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Pf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Lf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Df = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Uf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, If = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Nf = `float getShadowMask() {
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
}`, Of = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Ff = `#ifdef USE_SKINNING
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
#endif`, Bf = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, zf = `#ifdef USE_SKINNING
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
#endif`, Hf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Gf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Vf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, kf = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Wf = `#ifdef USE_TRANSMISSION
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
#endif`, Xf = `#ifdef USE_TRANSMISSION
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
#endif`, Yf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, qf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Zf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, Kf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const jf = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Jf = `uniform sampler2D t2D;
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
}`, $f = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Qf = `#ifdef ENVMAP_TYPE_CUBE
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
}`, td = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ed = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, nd = `#include <common>
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
}`, id = `#if DEPTH_PACKING == 3200
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
}`, sd = `#define DISTANCE
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
}`, rd = `#define DISTANCE
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
}`, ad = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, od = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, ld = `uniform float scale;
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
}`, cd = `uniform vec3 diffuse;
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
}`, hd = `#include <common>
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
}`, ud = `uniform vec3 diffuse;
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
}`, fd = `#define LAMBERT
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
}`, dd = `#define LAMBERT
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
}`, pd = `#define MATCAP
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
}`, md = `#define MATCAP
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
}`, _d = `#define NORMAL
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
}`, gd = `#define NORMAL
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
}`, vd = `#define PHONG
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
}`, xd = `#define PHONG
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
}`, Md = `#define STANDARD
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
}`, Sd = `#define STANDARD
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
}`, yd = `#define TOON
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
}`, Ed = `#define TOON
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
}`, Td = `uniform float size;
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
}`, Ad = `uniform vec3 diffuse;
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
}`, bd = `#include <common>
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
}`, wd = `uniform vec3 color;
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
}`, Rd = `uniform float rotation;
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
}`, Cd = `uniform vec3 diffuse;
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
}`, Ot = { alphahash_fragment: jh, alphahash_pars_fragment: Jh, alphamap_fragment: $h, alphamap_pars_fragment: Qh, alphatest_fragment: tu, alphatest_pars_fragment: eu, aomap_fragment: nu, aomap_pars_fragment: iu, batching_pars_vertex: su, batching_vertex: ru, begin_vertex: au, beginnormal_vertex: ou, bsdfs: lu, iridescence_fragment: cu, bumpmap_pars_fragment: hu, clipping_planes_fragment: uu, clipping_planes_pars_fragment: fu, clipping_planes_pars_vertex: du, clipping_planes_vertex: pu, color_fragment: mu, color_pars_fragment: _u, color_pars_vertex: gu, color_vertex: vu, common: xu, cube_uv_reflection_fragment: Mu, defaultnormal_vertex: Su, displacementmap_pars_vertex: yu, displacementmap_vertex: Eu, emissivemap_fragment: Tu, emissivemap_pars_fragment: Au, colorspace_fragment: bu, colorspace_pars_fragment: wu, envmap_fragment: Ru, envmap_common_pars_fragment: Cu, envmap_pars_fragment: Pu, envmap_pars_vertex: Lu, envmap_physical_pars_fragment: Vu, envmap_vertex: Du, fog_vertex: Uu, fog_pars_vertex: Iu, fog_fragment: Nu, fog_pars_fragment: Ou, gradientmap_pars_fragment: Fu, lightmap_pars_fragment: Bu, lights_lambert_fragment: zu, lights_lambert_pars_fragment: Hu, lights_pars_begin: Gu, lights_toon_fragment: ku, lights_toon_pars_fragment: Wu, lights_phong_fragment: Xu, lights_phong_pars_fragment: Yu, lights_physical_fragment: qu, lights_physical_pars_fragment: Zu, lights_fragment_begin: Ku, lights_fragment_maps: ju, lights_fragment_end: Ju, logdepthbuf_fragment: $u, logdepthbuf_pars_fragment: Qu, logdepthbuf_pars_vertex: tf, logdepthbuf_vertex: ef, map_fragment: nf, map_pars_fragment: sf, map_particle_fragment: rf, map_particle_pars_fragment: af, metalnessmap_fragment: of, metalnessmap_pars_fragment: lf, morphinstance_vertex: cf, morphcolor_vertex: hf, morphnormal_vertex: uf, morphtarget_pars_vertex: ff, morphtarget_vertex: df, normal_fragment_begin: pf, normal_fragment_maps: mf, normal_pars_fragment: _f, normal_pars_vertex: gf, normal_vertex: vf, normalmap_pars_fragment: xf, clearcoat_normal_fragment_begin: Mf, clearcoat_normal_fragment_maps: Sf, clearcoat_pars_fragment: yf, iridescence_pars_fragment: Ef, opaque_fragment: Tf, packing: Af, premultiplied_alpha_fragment: bf, project_vertex: wf, dithering_fragment: Rf, dithering_pars_fragment: Cf, roughnessmap_fragment: Pf, roughnessmap_pars_fragment: Lf, shadowmap_pars_fragment: Df, shadowmap_pars_vertex: Uf, shadowmap_vertex: If, shadowmask_pars_fragment: Nf, skinbase_vertex: Of, skinning_pars_vertex: Ff, skinning_vertex: Bf, skinnormal_vertex: zf, specularmap_fragment: Hf, specularmap_pars_fragment: Gf, tonemapping_fragment: Vf, tonemapping_pars_fragment: kf, transmission_fragment: Wf, transmission_pars_fragment: Xf, uv_pars_fragment: Yf, uv_pars_vertex: qf, uv_vertex: Zf, worldpos_vertex: Kf, background_vert: jf, background_frag: Jf, backgroundCube_vert: $f, backgroundCube_frag: Qf, cube_vert: td, cube_frag: ed, depth_vert: nd, depth_frag: id, distanceRGBA_vert: sd, distanceRGBA_frag: rd, equirect_vert: ad, equirect_frag: od, linedashed_vert: ld, linedashed_frag: cd, meshbasic_vert: hd, meshbasic_frag: ud, meshlambert_vert: fd, meshlambert_frag: dd, meshmatcap_vert: pd, meshmatcap_frag: md, meshnormal_vert: _d, meshnormal_frag: gd, meshphong_vert: vd, meshphong_frag: xd, meshphysical_vert: Md, meshphysical_frag: Sd, meshtoon_vert: yd, meshtoon_frag: Ed, points_vert: Td, points_frag: Ad, shadow_vert: bd, shadow_frag: wd, sprite_vert: Rd, sprite_frag: Cd }, lt = { common: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ft() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ft() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ft() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ft() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ft() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ft() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ft() }, normalScale: { value: new $(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ft() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ft() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ft() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ft() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Bt(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 }, uvTransform: { value: new Ft() } }, sprite: { diffuse: { value: new Bt(16777215) }, opacity: { value: 1 }, center: { value: new $(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ft() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ft() }, alphaTest: { value: 0 } } }, Xe = { basic: { uniforms: Se([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.fog]), vertexShader: Ot.meshbasic_vert, fragmentShader: Ot.meshbasic_frag }, lambert: { uniforms: Se([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) } }]), vertexShader: Ot.meshlambert_vert, fragmentShader: Ot.meshlambert_frag }, phong: { uniforms: Se([lt.common, lt.specularmap, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) }, specular: { value: new Bt(1118481) }, shininess: { value: 30 } }]), vertexShader: Ot.meshphong_vert, fragmentShader: Ot.meshphong_frag }, standard: { uniforms: Se([lt.common, lt.envmap, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.roughnessmap, lt.metalnessmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ot.meshphysical_vert, fragmentShader: Ot.meshphysical_frag }, toon: { uniforms: Se([lt.common, lt.aomap, lt.lightmap, lt.emissivemap, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.gradientmap, lt.fog, lt.lights, { emissive: { value: new Bt(0) } }]), vertexShader: Ot.meshtoon_vert, fragmentShader: Ot.meshtoon_frag }, matcap: { uniforms: Se([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, lt.fog, { matcap: { value: null } }]), vertexShader: Ot.meshmatcap_vert, fragmentShader: Ot.meshmatcap_frag }, points: { uniforms: Se([lt.points, lt.fog]), vertexShader: Ot.points_vert, fragmentShader: Ot.points_frag }, dashed: { uniforms: Se([lt.common, lt.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ot.linedashed_vert, fragmentShader: Ot.linedashed_frag }, depth: { uniforms: Se([lt.common, lt.displacementmap]), vertexShader: Ot.depth_vert, fragmentShader: Ot.depth_frag }, normal: { uniforms: Se([lt.common, lt.bumpmap, lt.normalmap, lt.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ot.meshnormal_vert, fragmentShader: Ot.meshnormal_frag }, sprite: { uniforms: Se([lt.sprite, lt.fog]), vertexShader: Ot.sprite_vert, fragmentShader: Ot.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ft() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ot.background_vert, fragmentShader: Ot.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ft() } }, vertexShader: Ot.backgroundCube_vert, fragmentShader: Ot.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ot.cube_vert, fragmentShader: Ot.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ot.equirect_vert, fragmentShader: Ot.equirect_frag }, distanceRGBA: { uniforms: Se([lt.common, lt.displacementmap, { referencePosition: { value: new C() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ot.distanceRGBA_vert, fragmentShader: Ot.distanceRGBA_frag }, shadow: { uniforms: Se([lt.lights, lt.fog, { color: { value: new Bt(0) }, opacity: { value: 1 } }]), vertexShader: Ot.shadow_vert, fragmentShader: Ot.shadow_frag } };
Xe.physical = { uniforms: Se([Xe.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ft() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ft() }, clearcoatNormalScale: { value: new $(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ft() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ft() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ft() }, sheen: { value: 0 }, sheenColor: { value: new Bt(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ft() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ft() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ft() }, transmissionSamplerSize: { value: new $() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ft() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Bt(0) }, specularColor: { value: new Bt(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ft() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ft() }, anisotropyVector: { value: new $() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ft() } }]), vertexShader: Ot.meshphysical_vert, fragmentShader: Ot.meshphysical_frag };
const cs = { r: 0, b: 0, g: 0 }, Rn = new ke(), Pd = new Qt();
function Ld(i, t, e, n, s, r, a) {
  const o = new Bt(0);
  let l = r === true ? 0 : 1, c, h, u = null, f = 0, m = null;
  function _(A) {
    let S = A.isScene === true ? A.background : null;
    return S && S.isTexture && (S = (A.backgroundBlurriness > 0 ? e : t).get(S)), S;
  }
  function x(A) {
    let S = false;
    const E = _(A);
    E === null ? p(o, l) : E && E.isColor && (p(E, 1), S = true);
    const I = i.xr.getEnvironmentBlendMode();
    I === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : I === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || S) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function d(A, S) {
    const E = _(S);
    E && (E.isCubeTexture || E.mapping === Ws) ? (h === void 0 && (h = new Ye(new Vi(1, 1, 1), new Sn({ name: "BackgroundCubeMaterial", uniforms: vi(Xe.backgroundCube.uniforms), vertexShader: Xe.backgroundCube.vertexShader, fragmentShader: Xe.backgroundCube.fragmentShader, side: be, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(I, R, w) {
      this.matrixWorld.copyPosition(w.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), s.update(h)), Rn.copy(S.backgroundRotation), Rn.x *= -1, Rn.y *= -1, Rn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (Rn.y *= -1, Rn.z *= -1), h.material.uniforms.envMap.value = E, h.material.uniforms.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pd.makeRotationFromEuler(Rn)), h.material.toneMapped = Zt.getTransfer(E.colorSpace) !== ne, (u !== E || f !== E.version || m !== i.toneMapping) && (h.material.needsUpdate = true, u = E, f = E.version, m = i.toneMapping), h.layers.enableAll(), A.unshift(h, h.geometry, h.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c = new Ye(new Ys(2, 2), new Sn({ name: "BackgroundMaterial", uniforms: vi(Xe.background.uniforms), vertexShader: Xe.background.vertexShader, fragmentShader: Xe.background.fragmentShader, side: Mn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), s.update(c)), c.material.uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = Zt.getTransfer(E.colorSpace) !== ne, E.matrixAutoUpdate === true && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E.matrix), (u !== E || f !== E.version || m !== i.toneMapping) && (c.material.needsUpdate = true, u = E, f = E.version, m = i.toneMapping), c.layers.enableAll(), A.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(A, S) {
    A.getRGB(cs, zl(i)), n.buffers.color.setClear(cs.r, cs.g, cs.b, S, a);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(A, S = 1) {
    o.set(A), l = S, p(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(A) {
    l = A, p(o, l);
  }, render: x, addToRenderList: d };
}
function Dd(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, s = f(null);
  let r = s, a = false;
  function o(g, y, G, B, H) {
    let j = false;
    const F = u(B, G, y);
    r !== F && (r = F, c(r.object)), j = m(g, B, G, H), j && _(g, B, G, H), H !== null && t.update(H, i.ELEMENT_ARRAY_BUFFER), (j || a) && (a = false, E(g, y, G, B), H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(H).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function h(g) {
    return i.deleteVertexArray(g);
  }
  function u(g, y, G) {
    const B = G.wireframe === true;
    let H = n[g.id];
    H === void 0 && (H = {}, n[g.id] = H);
    let j = H[y.id];
    j === void 0 && (j = {}, H[y.id] = j);
    let F = j[B];
    return F === void 0 && (F = f(l()), j[B] = F), F;
  }
  function f(g) {
    const y = [], G = [], B = [];
    for (let H = 0; H < e; H++) y[H] = 0, G[H] = 0, B[H] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: y, enabledAttributes: G, attributeDivisors: B, object: g, attributes: {}, index: null };
  }
  function m(g, y, G, B) {
    const H = r.attributes, j = y.attributes;
    let F = 0;
    const tt = G.getAttributes();
    for (const k in tt) if (tt[k].location >= 0) {
      const dt = H[k];
      let pt = j[k];
      if (pt === void 0 && (k === "instanceMatrix" && g.instanceMatrix && (pt = g.instanceMatrix), k === "instanceColor" && g.instanceColor && (pt = g.instanceColor)), dt === void 0 || dt.attribute !== pt || pt && dt.data !== pt.data) return true;
      F++;
    }
    return r.attributesNum !== F || r.index !== B;
  }
  function _(g, y, G, B) {
    const H = {}, j = y.attributes;
    let F = 0;
    const tt = G.getAttributes();
    for (const k in tt) if (tt[k].location >= 0) {
      let dt = j[k];
      dt === void 0 && (k === "instanceMatrix" && g.instanceMatrix && (dt = g.instanceMatrix), k === "instanceColor" && g.instanceColor && (dt = g.instanceColor));
      const pt = {};
      pt.attribute = dt, dt && dt.data && (pt.data = dt.data), H[k] = pt, F++;
    }
    r.attributes = H, r.attributesNum = F, r.index = B;
  }
  function x() {
    const g = r.newAttributes;
    for (let y = 0, G = g.length; y < G; y++) g[y] = 0;
  }
  function d(g) {
    p(g, 0);
  }
  function p(g, y) {
    const G = r.newAttributes, B = r.enabledAttributes, H = r.attributeDivisors;
    G[g] = 1, B[g] === 0 && (i.enableVertexAttribArray(g), B[g] = 1), H[g] !== y && (i.vertexAttribDivisor(g, y), H[g] = y);
  }
  function A() {
    const g = r.newAttributes, y = r.enabledAttributes;
    for (let G = 0, B = y.length; G < B; G++) y[G] !== g[G] && (i.disableVertexAttribArray(G), y[G] = 0);
  }
  function S(g, y, G, B, H, j, F) {
    F === true ? i.vertexAttribIPointer(g, y, G, H, j) : i.vertexAttribPointer(g, y, G, B, H, j);
  }
  function E(g, y, G, B) {
    x();
    const H = B.attributes, j = G.getAttributes(), F = y.defaultAttributeValues;
    for (const tt in j) {
      const k = j[tt];
      if (k.location >= 0) {
        let ht = H[tt];
        if (ht === void 0 && (tt === "instanceMatrix" && g.instanceMatrix && (ht = g.instanceMatrix), tt === "instanceColor" && g.instanceColor && (ht = g.instanceColor)), ht !== void 0) {
          const dt = ht.normalized, pt = ht.itemSize, Ht = t.get(ht);
          if (Ht === void 0) continue;
          const Wt = Ht.buffer, W = Ht.type, et = Ht.bytesPerElement, Mt = W === i.INT || W === i.UNSIGNED_INT || ht.gpuType === Da;
          if (ht.isInterleavedBufferAttribute) {
            const ct = ht.data, Ct = ct.stride, Rt = ht.offset;
            if (ct.isInstancedInterleavedBuffer) {
              for (let It = 0; It < k.locationSize; It++) p(k.location + It, ct.meshPerAttribute);
              g.isInstancedMesh !== true && B._maxInstanceCount === void 0 && (B._maxInstanceCount = ct.meshPerAttribute * ct.count);
            } else for (let It = 0; It < k.locationSize; It++) d(k.location + It);
            i.bindBuffer(i.ARRAY_BUFFER, Wt);
            for (let It = 0; It < k.locationSize; It++) S(k.location + It, pt / k.locationSize, W, dt, Ct * et, (Rt + pt / k.locationSize * It) * et, Mt);
          } else {
            if (ht.isInstancedBufferAttribute) {
              for (let ct = 0; ct < k.locationSize; ct++) p(k.location + ct, ht.meshPerAttribute);
              g.isInstancedMesh !== true && B._maxInstanceCount === void 0 && (B._maxInstanceCount = ht.meshPerAttribute * ht.count);
            } else for (let ct = 0; ct < k.locationSize; ct++) d(k.location + ct);
            i.bindBuffer(i.ARRAY_BUFFER, Wt);
            for (let ct = 0; ct < k.locationSize; ct++) S(k.location + ct, pt / k.locationSize, W, dt, pt * et, pt / k.locationSize * ct * et, Mt);
          }
        } else if (F !== void 0) {
          const dt = F[tt];
          if (dt !== void 0) switch (dt.length) {
            case 2:
              i.vertexAttrib2fv(k.location, dt);
              break;
            case 3:
              i.vertexAttrib3fv(k.location, dt);
              break;
            case 4:
              i.vertexAttrib4fv(k.location, dt);
              break;
            default:
              i.vertexAttrib1fv(k.location, dt);
          }
        }
      }
    }
    A();
  }
  function I() {
    U();
    for (const g in n) {
      const y = n[g];
      for (const G in y) {
        const B = y[G];
        for (const H in B) h(B[H].object), delete B[H];
        delete y[G];
      }
      delete n[g];
    }
  }
  function R(g) {
    if (n[g.id] === void 0) return;
    const y = n[g.id];
    for (const G in y) {
      const B = y[G];
      for (const H in B) h(B[H].object), delete B[H];
      delete y[G];
    }
    delete n[g.id];
  }
  function w(g) {
    for (const y in n) {
      const G = n[y];
      if (G[g.id] === void 0) continue;
      const B = G[g.id];
      for (const H in B) h(B[H].object), delete B[H];
      delete G[g.id];
    }
  }
  function U() {
    J(), a = true, r !== s && (r = s, c(r.object));
  }
  function J() {
    s.geometry = null, s.program = null, s.wireframe = false;
  }
  return { setup: o, reset: U, resetDefaultState: J, dispose: I, releaseStatesOfGeometry: R, releaseStatesOfProgram: w, initAttributes: x, enableAttribute: d, disableUnusedAttributes: A };
}
function Ud(i, t, e) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, h) {
    i.drawArrays(n, c, h), e.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (i.drawArraysInstanced(n, c, h, u), e.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let m = 0;
    for (let _ = 0; _ < u; _++) m += h[_];
    e.update(m, n, 1);
  }
  function l(c, h, u, f) {
    if (u === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let _ = 0; _ < c.length; _++) a(c[_], h[_], f[_]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, f, 0, u);
      let _ = 0;
      for (let x = 0; x < u; x++) _ += h[x];
      for (let x = 0; x < f.length; x++) e.update(_, n, f[x]);
    }
  }
  this.setMode = s, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Id(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === true) {
      const w = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(w) {
    return !(w !== Ge && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const U = w === Bi && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(w !== an && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && w !== sn && !U);
  }
  function l(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = e.logarithmicDepthBuffer === true, f = e.reverseDepthBuffer === true && t.has("EXT_clip_control");
  if (f === true) {
    const w = t.get("EXT_clip_control");
    w.clipControlEXT(w.LOWER_LEFT_EXT, w.ZERO_TO_ONE_EXT);
  }
  const m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), _ = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), d = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), p = i.getParameter(i.MAX_VERTEX_ATTRIBS), A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), S = i.getParameter(i.MAX_VARYING_VECTORS), E = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), I = _ > 0, R = i.getParameter(i.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: f, maxTextures: m, maxVertexTextures: _, maxTextureSize: x, maxCubemapSize: d, maxAttributes: p, maxVertexUniforms: A, maxVaryings: S, maxFragmentUniforms: E, vertexTextures: I, maxSamples: R };
}
function Nd(i) {
  const t = this;
  let e = null, n = 0, s = false, r = false;
  const a = new mn(), o = new Ft(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, f) {
    const m = u.length !== 0 || f || n !== 0 || s;
    return s = f, n = u.length, m;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, f) {
    e = h(u, f, 0);
  }, this.setState = function(u, f, m) {
    const _ = u.clippingPlanes, x = u.clipIntersection, d = u.clipShadows, p = i.get(u);
    if (!s || _ === null || _.length === 0 || r && !d) r ? h(null) : c();
    else {
      const A = r ? 0 : n, S = A * 4;
      let E = p.clippingState || null;
      l.value = E, E = h(_, f, S, m);
      for (let I = 0; I !== S; ++I) E[I] = e[I];
      p.clippingState = E, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== e && (l.value = e, l.needsUpdate = n > 0), t.numPlanes = n, t.numIntersection = 0;
  }
  function h(u, f, m, _) {
    const x = u !== null ? u.length : 0;
    let d = null;
    if (x !== 0) {
      if (d = l.value, _ !== true || d === null) {
        const p = m + x * 4, A = f.matrixWorldInverse;
        o.getNormalMatrix(A), (d === null || d.length < p) && (d = new Float32Array(p));
        for (let S = 0, E = m; S !== x; ++S, E += 4) a.copy(u[S]).applyMatrix4(A, o), a.normal.toArray(d, E), d[E + 3] = a.constant;
      }
      l.value = d, l.needsUpdate = true;
    }
    return t.numPlanes = x, t.numIntersection = 0, d;
  }
}
function Od(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(a, o) {
    return o === qr ? a.mapping = pi : o === Zr && (a.mapping = mi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === qr || o === Zr) if (t.has(a)) {
        const l = t.get(a).texture;
        return e(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new Yh(l.height);
          return c.fromEquirectangularTexture(i, a), t.set(a, c), a.addEventListener("dispose", s), e(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function s(a) {
    const o = a.target;
    o.removeEventListener("dispose", s);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
class kl extends Hl {
  constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = n, this.bottom = s, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(t, e) {
    return super.copy(t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = t.view === null ? null : Object.assign({}, t.view), this;
  }
  setViewOffset(t, e, n, s, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = s, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, s = (this.top + this.bottom) / 2;
    let r = n - t, a = n + t, o = s + e, l = s - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, this.view !== null && (e.object.view = Object.assign({}, this.view)), e;
  }
}
const ai = 4, Ro = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Dn = 20, yr = new kl(), Co = new Bt();
let Er = null, Tr = 0, Ar = 0, br = false;
const Pn = (1 + Math.sqrt(5)) / 2, ti = 1 / Pn, Po = [new C(-Pn, ti, 0), new C(Pn, ti, 0), new C(-ti, 0, Pn), new C(ti, 0, Pn), new C(0, Pn, -ti), new C(0, Pn, ti), new C(-1, 1, -1), new C(1, 1, -1), new C(-1, 1, 1), new C(1, 1, 1)];
class Lo {
  constructor(t) {
    this._renderer = t, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(t, e = 0, n = 0.1, s = 100) {
    Er = this._renderer.getRenderTarget(), Tr = this._renderer.getActiveCubeFace(), Ar = this._renderer.getActiveMipmapLevel(), br = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = true, this._sceneToCubeUV(t, n, s, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Io(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Uo(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Er, Tr, Ar), this._renderer.xr.enabled = br, t.scissorTest = false, hs(t, 0, 0, t.width, t.height);
  }
  _fromTexture(t, e) {
    t.mapping === pi || t.mapping === mi ? this._setSize(t.image.length === 0 ? 16 : t.image[0].width || t.image[0].image.width) : this._setSize(t.image.width / 4), Er = this._renderer.getRenderTarget(), Tr = this._renderer.getActiveCubeFace(), Ar = this._renderer.getActiveMipmapLevel(), br = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = e || this._allocateTargets();
    return this._textureToCubeUV(t, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: ze, minFilter: ze, generateMipmaps: false, type: Bi, format: Ge, colorSpace: yn, depthBuffer: false }, s = Do(t, e, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== t || this._pingPongRenderTarget.height !== e) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Do(t, e, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Fd(r)), this._blurMaterial = Bd(r, t, e);
    }
    return s;
  }
  _compileMaterial(t) {
    const e = new Ye(this._lodPlanes[0], t);
    this._renderer.compile(e, yr);
  }
  _sceneToCubeUV(t, e, n, s) {
    const o = new Be(90, 1, e, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, f = h.toneMapping;
    h.getClearColor(Co), h.toneMapping = vn, h.autoClear = false;
    const m = new Va({ name: "PMREM.Background", side: be, depthWrite: false, depthTest: false }), _ = new Ye(new Vi(), m);
    let x = false;
    const d = t.background;
    d ? d.isColor && (m.color.copy(d), t.background = null, x = true) : (m.color.copy(Co), x = true);
    for (let p = 0; p < 6; p++) {
      const A = p % 3;
      A === 0 ? (o.up.set(0, l[p], 0), o.lookAt(c[p], 0, 0)) : A === 1 ? (o.up.set(0, 0, l[p]), o.lookAt(0, c[p], 0)) : (o.up.set(0, l[p], 0), o.lookAt(0, 0, c[p]));
      const S = this._cubeSize;
      hs(s, A * S, p > 2 ? S : 0, S, S), h.setRenderTarget(s), x && h.render(_, o), h.render(t, o);
    }
    _.geometry.dispose(), _.material.dispose(), h.toneMapping = f, h.autoClear = u, t.background = d;
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer, s = t.mapping === pi || t.mapping === mi;
    s ? (this._cubemapMaterial === null && (this._cubemapMaterial = Io()), this._cubemapMaterial.uniforms.flipEnvMap.value = t.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Uo());
    const r = s ? this._cubemapMaterial : this._equirectMaterial, a = new Ye(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    hs(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, yr);
  }
  _applyPMREM(t) {
    const e = this._renderer, n = e.autoClear;
    e.autoClear = false;
    const s = this._lodPlanes.length;
    for (let r = 1; r < s; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Po[(s - r - 1) % Po.length];
      this._blur(t, r - 1, r, a, o);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, s, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(t, a, e, n, s, "latitudinal", r), this._halfBlur(a, t, n, n, s, "longitudinal", r);
  }
  _halfBlur(t, e, n, s, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new Ye(this._lodPlanes[s], c), f = c.uniforms, m = this._sizeLods[n] - 1, _ = isFinite(r) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Dn - 1), x = r / _, d = isFinite(r) ? 1 + Math.floor(h * x) : Dn;
    d > Dn && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Dn}`);
    const p = [];
    let A = 0;
    for (let w = 0; w < Dn; ++w) {
      const U = w / x, J = Math.exp(-U * U / 2);
      p.push(J), w === 0 ? A += J : w < d && (A += 2 * J);
    }
    for (let w = 0; w < p.length; w++) p[w] = p[w] / A;
    f.envMap.value = t.texture, f.samples.value = d, f.weights.value = p, f.latitudinal.value = a === "latitudinal", o && (f.poleAxis.value = o);
    const { _lodMax: S } = this;
    f.dTheta.value = _, f.mipInt.value = S - n;
    const E = this._sizeLods[s], I = 3 * E * (s > S - ai ? s - S + ai : 0), R = 4 * (this._cubeSize - E);
    hs(e, I, R, 3 * E, 2 * E), l.setRenderTarget(e), l.render(u, yr);
  }
}
function Fd(i) {
  const t = [], e = [], n = [];
  let s = i;
  const r = i - ai + 1 + Ro.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, s);
    e.push(o);
    let l = 1 / o;
    a > i - ai ? l = Ro[a - i + ai - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, f = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, _ = 6, x = 3, d = 2, p = 1, A = new Float32Array(x * _ * m), S = new Float32Array(d * _ * m), E = new Float32Array(p * _ * m);
    for (let R = 0; R < m; R++) {
      const w = R % 3 * 2 / 3 - 1, U = R > 2 ? 0 : -1, J = [w, U, 0, w + 2 / 3, U, 0, w + 2 / 3, U + 1, 0, w, U, 0, w + 2 / 3, U + 1, 0, w, U + 1, 0];
      A.set(J, x * _ * R), S.set(f, d * _ * R);
      const g = [R, R, R, R, R, R];
      E.set(g, p * _ * R);
    }
    const I = new pe();
    I.setAttribute("position", new Ve(A, x)), I.setAttribute("uv", new Ve(S, d)), I.setAttribute("faceIndex", new Ve(E, p)), t.push(I), s > ai && s--;
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function Do(i, t, e) {
  const n = new On(i, t, e);
  return n.texture.mapping = Ws, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function hs(i, t, e, n, s) {
  i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s);
}
function Bd(i, t, e) {
  const n = new Float32Array(Dn), s = new C(0, 1, 0);
  return new Sn({ name: "SphericalGaussianBlur", defines: { n: Dn, CUBEUV_TEXEL_WIDTH: 1 / t, CUBEUV_TEXEL_HEIGHT: 1 / e, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: s } }, vertexShader: Wa(), fragmentShader: `

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
		`, blending: gn, depthTest: false, depthWrite: false });
}
function Uo() {
  return new Sn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Wa(), fragmentShader: `

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
		`, blending: gn, depthTest: false, depthWrite: false });
}
function Io() {
  return new Sn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Wa(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: gn, depthTest: false, depthWrite: false });
}
function Wa() {
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
function zd(i) {
  let t = /* @__PURE__ */ new WeakMap(), e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === qr || l === Zr, h = l === pi || l === mi;
      if (c || h) {
        let u = t.get(o);
        const f = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== f) return e === null && (e = new Lo(i)), u = c ? e.fromEquirectangular(o, u) : e.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || h && m && s(m) ? (e === null && (e = new Lo(i)), u = c ? e.fromEquirectangular(o) : e.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, t.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
        }
      }
    }
    return o;
  }
  function s(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    t = /* @__PURE__ */ new WeakMap(), e !== null && (e.dispose(), e = null);
  }
  return { get: n, dispose: a };
}
function Hd(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let s;
    switch (n) {
      case "WEBGL_depth_texture":
        s = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        s = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        s = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        s = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        s = i.getExtension(n);
    }
    return t[n] = s, s;
  }
  return { has: function(n) {
    return e(n) !== null;
  }, init: function() {
    e("EXT_color_buffer_float"), e("WEBGL_clip_cull_distance"), e("OES_texture_float_linear"), e("EXT_color_buffer_half_float"), e("WEBGL_multisampled_render_to_texture"), e("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const s = e(n);
    return s === null && Is("THREE.WebGLRenderer: " + n + " extension not supported."), s;
  } };
}
function Gd(i, t, e, n) {
  const s = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const f = u.target;
    f.index !== null && t.remove(f.index);
    for (const _ in f.attributes) t.remove(f.attributes[_]);
    for (const _ in f.morphAttributes) {
      const x = f.morphAttributes[_];
      for (let d = 0, p = x.length; d < p; d++) t.remove(x[d]);
    }
    f.removeEventListener("dispose", a), delete s[f.id];
    const m = r.get(f);
    m && (t.remove(m), r.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === true && delete f._maxInstanceCount, e.memory.geometries--;
  }
  function o(u, f) {
    return s[f.id] === true || (f.addEventListener("dispose", a), s[f.id] = true, e.memory.geometries++), f;
  }
  function l(u) {
    const f = u.attributes;
    for (const _ in f) t.update(f[_], i.ARRAY_BUFFER);
    const m = u.morphAttributes;
    for (const _ in m) {
      const x = m[_];
      for (let d = 0, p = x.length; d < p; d++) t.update(x[d], i.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const f = [], m = u.index, _ = u.attributes.position;
    let x = 0;
    if (m !== null) {
      const A = m.array;
      x = m.version;
      for (let S = 0, E = A.length; S < E; S += 3) {
        const I = A[S + 0], R = A[S + 1], w = A[S + 2];
        f.push(I, R, R, w, w, I);
      }
    } else if (_ !== void 0) {
      const A = _.array;
      x = _.version;
      for (let S = 0, E = A.length / 3 - 1; S < E; S += 3) {
        const I = S + 0, R = S + 1, w = S + 2;
        f.push(I, R, R, w, w, I);
      }
    } else return;
    const d = new (Ul(f) ? Bl : Fl)(f, 1);
    d.version = x;
    const p = r.get(u);
    p && t.remove(p), r.set(u, d);
  }
  function h(u) {
    const f = r.get(u);
    if (f) {
      const m = u.index;
      m !== null && f.version < m.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function Vd(i, t, e) {
  let n;
  function s(f) {
    n = f;
  }
  let r, a;
  function o(f) {
    r = f.type, a = f.bytesPerElement;
  }
  function l(f, m) {
    i.drawElements(n, m, r, f * a), e.update(m, n, 1);
  }
  function c(f, m, _) {
    _ !== 0 && (i.drawElementsInstanced(n, m, r, f * a, _), e.update(m, n, _));
  }
  function h(f, m, _) {
    if (_ === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, r, f, 0, _);
    let d = 0;
    for (let p = 0; p < _; p++) d += m[p];
    e.update(d, n, 1);
  }
  function u(f, m, _, x) {
    if (_ === 0) return;
    const d = t.get("WEBGL_multi_draw");
    if (d === null) for (let p = 0; p < f.length; p++) c(f[p] / a, m[p], x[p]);
    else {
      d.multiDrawElementsInstancedWEBGL(n, m, 0, r, f, 0, x, 0, _);
      let p = 0;
      for (let A = 0; A < _; A++) p += m[A];
      for (let A = 0; A < x.length; A++) e.update(p, n, x[A]);
    }
  }
  this.setMode = s, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function kd(i) {
  const t = { geometries: 0, textures: 0 }, e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (e.calls++, a) {
      case i.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case i.LINES:
        e.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * r;
        break;
      case i.POINTS:
        e.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
  }
  return { memory: t, render: e, programs: null, autoReset: true, reset: s, update: n };
}
function Wd(i, t, e) {
  const n = /* @__PURE__ */ new WeakMap(), s = new re();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let f = n.get(o);
    if (f === void 0 || f.count !== u) {
      let J = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", J);
      };
      f !== void 0 && f.texture.dispose();
      const m = o.morphAttributes.position !== void 0, _ = o.morphAttributes.normal !== void 0, x = o.morphAttributes.color !== void 0, d = o.morphAttributes.position || [], p = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let S = 0;
      m === true && (S = 1), _ === true && (S = 2), x === true && (S = 3);
      let E = o.attributes.position.count * S, I = 1;
      E > t.maxTextureSize && (I = Math.ceil(E / t.maxTextureSize), E = t.maxTextureSize);
      const R = new Float32Array(E * I * 4 * u), w = new Nl(R, E, I, u);
      w.type = sn, w.needsUpdate = true;
      const U = S * 4;
      for (let g = 0; g < u; g++) {
        const y = d[g], G = p[g], B = A[g], H = E * I * 4 * g;
        for (let j = 0; j < y.count; j++) {
          const F = j * U;
          m === true && (s.fromBufferAttribute(y, j), R[H + F + 0] = s.x, R[H + F + 1] = s.y, R[H + F + 2] = s.z, R[H + F + 3] = 0), _ === true && (s.fromBufferAttribute(G, j), R[H + F + 4] = s.x, R[H + F + 5] = s.y, R[H + F + 6] = s.z, R[H + F + 7] = 0), x === true && (s.fromBufferAttribute(B, j), R[H + F + 8] = s.x, R[H + F + 9] = s.y, R[H + F + 10] = s.z, R[H + F + 11] = B.itemSize === 4 ? s.w : 1);
        }
      }
      f = { count: u, texture: w, size: new $(E, I) }, n.set(o, f), o.addEventListener("dispose", J);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let m = 0;
      for (let x = 0; x < c.length; x++) m += c[x];
      const _ = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", _), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", f.texture, e), l.getUniforms().setValue(i, "morphTargetsTextureSize", f.size);
  }
  return { update: r };
}
function Xd(i, t, e, n) {
  let s = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = t.get(l, h);
    if (s.get(u) !== c && (t.update(u), s.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), s.get(l) !== c && (e.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER), s.set(l, c))), l.isSkinnedMesh) {
      const f = l.skeleton;
      s.get(f) !== c && (f.update(), s.set(f, c));
    }
    return u;
  }
  function a() {
    s = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), e.remove(c.instanceMatrix), c.instanceColor !== null && e.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
class Wl extends ge {
  constructor(t, e, n, s, r, a, o, l, c, h = hi) {
    if (h !== hi && h !== gi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === hi && (n = Nn), n === void 0 && h === gi && (n = _i), super(null, s, r, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: t, height: e }, this.magFilter = o !== void 0 ? o : Ae, this.minFilter = l !== void 0 ? l : Ae, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(t) {
    return super.copy(t), this.compareFunction = t.compareFunction, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.compareFunction !== null && (e.compareFunction = this.compareFunction), e;
  }
}
const Xl = new ge(), No = new Wl(1, 1), Yl = new Nl(), ql = new Ph(), Zl = new Gl(), Oo = [], Fo = [], Bo = new Float32Array(16), zo = new Float32Array(9), Ho = new Float32Array(4);
function xi(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const s = t * e;
  let r = Oo[s];
  if (r === void 0 && (r = new Float32Array(s), Oo[s] = r), t !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a) o += e, i[a].toArray(r, o);
  }
  return r;
}
function fe(i, t) {
  if (i.length !== t.length) return false;
  for (let e = 0, n = i.length; e < n; e++) if (i[e] !== t[e]) return false;
  return true;
}
function de(i, t) {
  for (let e = 0, n = t.length; e < n; e++) i[e] = t[e];
}
function qs(i, t) {
  let e = Fo[t];
  e === void 0 && (e = new Int32Array(t), Fo[t] = e);
  for (let n = 0; n !== t; ++n) e[n] = i.allocateTextureUnit();
  return e;
}
function Yd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), e[0] = t);
}
function qd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2f(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (fe(e, t)) return;
    i.uniform2fv(this.addr, t), de(e, t);
  }
}
function Zd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3f(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else if (t.r !== void 0) (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) && (i.uniform3f(this.addr, t.r, t.g, t.b), e[0] = t.r, e[1] = t.g, e[2] = t.b);
  else {
    if (fe(e, t)) return;
    i.uniform3fv(this.addr, t), de(e, t);
  }
}
function Kd(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4f(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (fe(e, t)) return;
    i.uniform4fv(this.addr, t), de(e, t);
  }
}
function jd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (fe(e, t)) return;
    i.uniformMatrix2fv(this.addr, false, t), de(e, t);
  } else {
    if (fe(e, n)) return;
    Ho.set(n), i.uniformMatrix2fv(this.addr, false, Ho), de(e, n);
  }
}
function Jd(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (fe(e, t)) return;
    i.uniformMatrix3fv(this.addr, false, t), de(e, t);
  } else {
    if (fe(e, n)) return;
    zo.set(n), i.uniformMatrix3fv(this.addr, false, zo), de(e, n);
  }
}
function $d(i, t) {
  const e = this.cache, n = t.elements;
  if (n === void 0) {
    if (fe(e, t)) return;
    i.uniformMatrix4fv(this.addr, false, t), de(e, t);
  } else {
    if (fe(e, n)) return;
    Bo.set(n), i.uniformMatrix4fv(this.addr, false, Bo), de(e, n);
  }
}
function Qd(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), e[0] = t);
}
function tp(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2i(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (fe(e, t)) return;
    i.uniform2iv(this.addr, t), de(e, t);
  }
}
function ep(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3i(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (fe(e, t)) return;
    i.uniform3iv(this.addr, t), de(e, t);
  }
}
function np(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4i(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (fe(e, t)) return;
    i.uniform4iv(this.addr, t), de(e, t);
  }
}
function ip(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), e[0] = t);
}
function sp(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y) && (i.uniform2ui(this.addr, t.x, t.y), e[0] = t.x, e[1] = t.y);
  else {
    if (fe(e, t)) return;
    i.uniform2uiv(this.addr, t), de(e, t);
  }
}
function rp(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) && (i.uniform3ui(this.addr, t.x, t.y, t.z), e[0] = t.x, e[1] = t.y, e[2] = t.z);
  else {
    if (fe(e, t)) return;
    i.uniform3uiv(this.addr, t), de(e, t);
  }
}
function ap(i, t) {
  const e = this.cache;
  if (t.x !== void 0) (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) && (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w), e[0] = t.x, e[1] = t.y, e[2] = t.z, e[3] = t.w);
  else {
    if (fe(e, t)) return;
    i.uniform4uiv(this.addr, t), de(e, t);
  }
}
function op(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s);
  let r;
  this.type === i.SAMPLER_2D_SHADOW ? (No.compareFunction = Dl, r = No) : r = Xl, e.setTexture2D(t || r, s);
}
function lp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture3D(t || ql, s);
}
function cp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTextureCube(t || Zl, s);
}
function hp(i, t, e) {
  const n = this.cache, s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), n[0] = s), e.setTexture2DArray(t || Yl, s);
}
function up(i) {
  switch (i) {
    case 5126:
      return Yd;
    case 35664:
      return qd;
    case 35665:
      return Zd;
    case 35666:
      return Kd;
    case 35674:
      return jd;
    case 35675:
      return Jd;
    case 35676:
      return $d;
    case 5124:
    case 35670:
      return Qd;
    case 35667:
    case 35671:
      return tp;
    case 35668:
    case 35672:
      return ep;
    case 35669:
    case 35673:
      return np;
    case 5125:
      return ip;
    case 36294:
      return sp;
    case 36295:
      return rp;
    case 36296:
      return ap;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return op;
    case 35679:
    case 36299:
    case 36307:
      return lp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return cp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return hp;
  }
}
function fp(i, t) {
  i.uniform1fv(this.addr, t);
}
function dp(i, t) {
  const e = xi(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function pp(i, t) {
  const e = xi(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function mp(i, t) {
  const e = xi(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function _p(i, t) {
  const e = xi(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, e);
}
function gp(i, t) {
  const e = xi(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, e);
}
function vp(i, t) {
  const e = xi(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, e);
}
function xp(i, t) {
  i.uniform1iv(this.addr, t);
}
function Mp(i, t) {
  i.uniform2iv(this.addr, t);
}
function Sp(i, t) {
  i.uniform3iv(this.addr, t);
}
function yp(i, t) {
  i.uniform4iv(this.addr, t);
}
function Ep(i, t) {
  i.uniform1uiv(this.addr, t);
}
function Tp(i, t) {
  i.uniform2uiv(this.addr, t);
}
function Ap(i, t) {
  i.uniform3uiv(this.addr, t);
}
function bp(i, t) {
  i.uniform4uiv(this.addr, t);
}
function wp(i, t, e) {
  const n = this.cache, s = t.length, r = qs(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), de(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2D(t[a] || Xl, r[a]);
}
function Rp(i, t, e) {
  const n = this.cache, s = t.length, r = qs(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), de(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture3D(t[a] || ql, r[a]);
}
function Cp(i, t, e) {
  const n = this.cache, s = t.length, r = qs(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), de(n, r));
  for (let a = 0; a !== s; ++a) e.setTextureCube(t[a] || Zl, r[a]);
}
function Pp(i, t, e) {
  const n = this.cache, s = t.length, r = qs(e, s);
  fe(n, r) || (i.uniform1iv(this.addr, r), de(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2DArray(t[a] || Yl, r[a]);
}
function Lp(i) {
  switch (i) {
    case 5126:
      return fp;
    case 35664:
      return dp;
    case 35665:
      return pp;
    case 35666:
      return mp;
    case 35674:
      return _p;
    case 35675:
      return gp;
    case 35676:
      return vp;
    case 5124:
    case 35670:
      return xp;
    case 35667:
    case 35671:
      return Mp;
    case 35668:
    case 35672:
      return Sp;
    case 35669:
    case 35673:
      return yp;
    case 5125:
      return Ep;
    case 36294:
      return Tp;
    case 36295:
      return Ap;
    case 36296:
      return bp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return wp;
    case 35679:
    case 36299:
    case 36307:
      return Rp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Cp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Pp;
  }
}
class Dp {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.setValue = up(e.type);
  }
}
class Up {
  constructor(t, e, n) {
    this.id = t, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = Lp(e.type);
  }
}
class Ip {
  constructor(t) {
    this.id = t, this.seq = [], this.map = {};
  }
  setValue(t, e, n) {
    const s = this.seq;
    for (let r = 0, a = s.length; r !== a; ++r) {
      const o = s[r];
      o.setValue(t, e[o.id], n);
    }
  }
}
const wr = /(\w+)(\])?(\[|\.)?/g;
function Go(i, t) {
  i.seq.push(t), i.map[t.id] = t;
}
function Np(i, t, e) {
  const n = i.name, s = n.length;
  for (wr.lastIndex = 0; ; ) {
    const r = wr.exec(n), a = wr.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === s) {
      Go(e, c === void 0 ? new Dp(o, i, t) : new Up(o, i, t));
      break;
    } else {
      let u = e.map[o];
      u === void 0 && (u = new Ip(o), Go(e, u)), e = u;
    }
  }
}
class Ns {
  constructor(t, e) {
    this.seq = [], this.map = {};
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < n; ++s) {
      const r = t.getActiveUniform(e, s), a = t.getUniformLocation(e, r.name);
      Np(r, a, this);
    }
  }
  setValue(t, e, n, s) {
    const r = this.map[e];
    r !== void 0 && r.setValue(t, n, s);
  }
  setOptional(t, e, n) {
    const s = e[n];
    s !== void 0 && this.setValue(t, n, s);
  }
  static upload(t, e, n, s) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      const o = e[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(t, l.value, s);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      const a = t[s];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Vo(i, t, e) {
  const n = i.createShader(t);
  return i.shaderSource(n, e), i.compileShader(n), n;
}
const Op = 37297;
let Fp = 0;
function Bp(i, t) {
  const e = i.split(`
`), n = [], s = Math.max(t - 6, 0), r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
function zp(i) {
  const t = Zt.getPrimaries(Zt.workingColorSpace), e = Zt.getPrimaries(i);
  let n;
  switch (t === e ? n = "" : t === Bs && e === Fs ? n = "LinearDisplayP3ToLinearSRGB" : t === Fs && e === Bs && (n = "LinearSRGBToLinearDisplayP3"), i) {
    case yn:
    case Xs:
      return [n, "LinearTransferOETF"];
    case We:
    case za:
      return [n, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n, "LinearTransferOETF"];
  }
}
function ko(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS), s = i.getShaderInfoLog(t).trim();
  if (n && s === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(s);
  if (r) {
    const a = parseInt(r[1]);
    return e.toUpperCase() + `

` + s + `

` + Bp(i.getShaderSource(t), a);
  } else return s;
}
function Hp(i, t) {
  const e = zp(t);
  return `vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`;
}
function Gp(i, t) {
  let e;
  switch (t) {
    case Hc:
      e = "Linear";
      break;
    case Gc:
      e = "Reinhard";
      break;
    case Vc:
      e = "Cineon";
      break;
    case kc:
      e = "ACESFilmic";
      break;
    case Xc:
      e = "AgX";
      break;
    case Yc:
      e = "Neutral";
      break;
    case Wc:
      e = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), e = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
const us = new C();
function Vp() {
  Zt.getLuminanceCoefficients(us);
  const i = us.x.toFixed(4), t = us.y.toFixed(4), e = us.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function kp(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ci).join(`
`);
}
function Wp(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== false && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Xp(i, t) {
  const e = {}, n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    const r = i.getActiveAttrib(t, s), a = r.name;
    let o = 1;
    r.type === i.FLOAT_MAT2 && (o = 2), r.type === i.FLOAT_MAT3 && (o = 3), r.type === i.FLOAT_MAT4 && (o = 4), e[a] = { type: r.type, location: i.getAttribLocation(t, a), locationSize: o };
  }
  return e;
}
function Ci(i) {
  return i !== "";
}
function Wo(i, t) {
  const e = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, e).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Xo(i, t) {
  return i.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
const Yp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ta(i) {
  return i.replace(Yp, Zp);
}
const qp = /* @__PURE__ */ new Map();
function Zp(i, t) {
  let e = Ot[t];
  if (e === void 0) {
    const n = qp.get(t);
    if (n !== void 0) e = Ot[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, n);
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return Ta(e);
}
const Kp = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Yo(i) {
  return i.replace(Kp, jp);
}
function jp(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++) s += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function qo(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? t += `
#define HIGH_PRECISION` : i.precision === "mediump" ? t += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (t += `
#define LOW_PRECISION`), t;
}
function Jp(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Ml ? t = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === xc ? t = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === en && (t = "SHADOWMAP_TYPE_VSM"), t;
}
function $p(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case pi:
    case mi:
      t = "ENVMAP_TYPE_CUBE";
      break;
    case Ws:
      t = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return t;
}
function Qp(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case mi:
      t = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return t;
}
function tm(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case La:
      t = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case Bc:
      t = "ENVMAP_BLENDING_MIX";
      break;
    case zc:
      t = "ENVMAP_BLENDING_ADD";
      break;
  }
  return t;
}
function em(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2, n = 1 / t;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)), texelHeight: n, maxMip: e };
}
function nm(i, t, e, n) {
  const s = i.getContext(), r = e.defines;
  let a = e.vertexShader, o = e.fragmentShader;
  const l = Jp(e), c = $p(e), h = Qp(e), u = tm(e), f = em(e), m = kp(e), _ = Wp(r), x = s.createProgram();
  let d, p, A = e.glslVersion ? "#version " + e.glslVersion + `
` : "";
  e.isRawShaderMaterial ? (d = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(Ci).join(`
`), d.length > 0 && (d += `
`), p = ["#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _].filter(Ci).join(`
`), p.length > 0 && (p += `
`)) : (d = [qo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", e.batching ? "#define USE_BATCHING" : "", e.batchingColor ? "#define USE_BATCHING_COLOR" : "", e.instancing ? "#define USE_INSTANCING" : "", e.instancingColor ? "#define USE_INSTANCING_COLOR" : "", e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.map ? "#define USE_MAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + h : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.mapUv ? "#define MAP_UV " + e.mapUv : "", e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "", e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "", e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "", e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "", e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "", e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "", e.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv : "", e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "", e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "", e.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv : "", e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "", e.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv : "", e.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv : "", e.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv : "", e.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv : "", e.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv : "", e.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv : "", e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "", e.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv : "", e.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv : "", e.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv : "", e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.skinning ? "#define USE_SKINNING" : "", e.morphTargets ? "#define USE_MORPHTARGETS" : "", e.morphNormals && e.flatShading === false ? "#define USE_MORPHNORMALS" : "", e.morphColors ? "#define USE_MORPHCOLORS" : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride : "", e.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ci).join(`
`), p = [qo(e), "#define SHADER_TYPE " + e.shaderType, "#define SHADER_NAME " + e.shaderName, _, e.useFog && e.fog ? "#define USE_FOG" : "", e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "", e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", e.map ? "#define USE_MAP" : "", e.matcap ? "#define USE_MATCAP" : "", e.envMap ? "#define USE_ENVMAP" : "", e.envMap ? "#define " + c : "", e.envMap ? "#define " + h : "", e.envMap ? "#define " + u : "", f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "", f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "", f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "", e.lightMap ? "#define USE_LIGHTMAP" : "", e.aoMap ? "#define USE_AOMAP" : "", e.bumpMap ? "#define USE_BUMPMAP" : "", e.normalMap ? "#define USE_NORMALMAP" : "", e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", e.emissiveMap ? "#define USE_EMISSIVEMAP" : "", e.anisotropy ? "#define USE_ANISOTROPY" : "", e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", e.clearcoat ? "#define USE_CLEARCOAT" : "", e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", e.dispersion ? "#define USE_DISPERSION" : "", e.iridescence ? "#define USE_IRIDESCENCE" : "", e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", e.specularMap ? "#define USE_SPECULARMAP" : "", e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", e.metalnessMap ? "#define USE_METALNESSMAP" : "", e.alphaMap ? "#define USE_ALPHAMAP" : "", e.alphaTest ? "#define USE_ALPHATEST" : "", e.alphaHash ? "#define USE_ALPHAHASH" : "", e.sheen ? "#define USE_SHEEN" : "", e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", e.transmission ? "#define USE_TRANSMISSION" : "", e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", e.thicknessMap ? "#define USE_THICKNESSMAP" : "", e.vertexTangents && e.flatShading === false ? "#define USE_TANGENT" : "", e.vertexColors || e.instancingColor || e.batchingColor ? "#define USE_COLOR" : "", e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", e.vertexUv1s ? "#define USE_UV1" : "", e.vertexUv2s ? "#define USE_UV2" : "", e.vertexUv3s ? "#define USE_UV3" : "", e.pointsUvs ? "#define USE_POINTS_UV" : "", e.gradientMap ? "#define USE_GRADIENTMAP" : "", e.flatShading ? "#define FLAT_SHADED" : "", e.doubleSided ? "#define DOUBLE_SIDED" : "", e.flipSided ? "#define FLIP_SIDED" : "", e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", e.shadowMapEnabled ? "#define " + l : "", e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", e.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", e.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", e.toneMapping !== vn ? "#define TONE_MAPPING" : "", e.toneMapping !== vn ? Ot.tonemapping_pars_fragment : "", e.toneMapping !== vn ? Gp("toneMapping", e.toneMapping) : "", e.dithering ? "#define DITHERING" : "", e.opaque ? "#define OPAQUE" : "", Ot.colorspace_pars_fragment, Hp("linearToOutputTexel", e.outputColorSpace), Vp(), e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "", `
`].filter(Ci).join(`
`)), a = Ta(a), a = Wo(a, e), a = Xo(a, e), o = Ta(o), o = Wo(o, e), o = Xo(o, e), a = Yo(a), o = Yo(o), e.isRawShaderMaterial !== true && (A = `#version 300 es
`, d = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + d, p = ["#define varying in", e.glslVersion === lo ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", e.glslVersion === lo ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + p);
  const S = A + d + a, E = A + p + o, I = Vo(s, s.VERTEX_SHADER, S), R = Vo(s, s.FRAGMENT_SHADER, E);
  s.attachShader(x, I), s.attachShader(x, R), e.index0AttributeName !== void 0 ? s.bindAttribLocation(x, 0, e.index0AttributeName) : e.morphTargets === true && s.bindAttribLocation(x, 0, "position"), s.linkProgram(x);
  function w(y) {
    if (i.debug.checkShaderErrors) {
      const G = s.getProgramInfoLog(x).trim(), B = s.getShaderInfoLog(I).trim(), H = s.getShaderInfoLog(R).trim();
      let j = true, F = true;
      if (s.getProgramParameter(x, s.LINK_STATUS) === false) if (j = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(s, x, I, R);
      else {
        const tt = ko(s, I, "vertex"), k = ko(s, R, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + s.getError() + " - VALIDATE_STATUS " + s.getProgramParameter(x, s.VALIDATE_STATUS) + `

Material Name: ` + y.name + `
Material Type: ` + y.type + `

Program Info Log: ` + G + `
` + tt + `
` + k);
      }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (B === "" || H === "") && (F = false);
      F && (y.diagnostics = { runnable: j, programLog: G, vertexShader: { log: B, prefix: d }, fragmentShader: { log: H, prefix: p } });
    }
    s.deleteShader(I), s.deleteShader(R), U = new Ns(s, x), J = Xp(s, x);
  }
  let U;
  this.getUniforms = function() {
    return U === void 0 && w(this), U;
  };
  let J;
  this.getAttributes = function() {
    return J === void 0 && w(this), J;
  };
  let g = e.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return g === false && (g = s.getProgramParameter(x, Op)), g;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), s.deleteProgram(x), this.program = void 0;
  }, this.type = e.shaderType, this.name = e.shaderName, this.id = Fp++, this.cacheKey = t, this.usedTimes = 1, this.program = x, this.vertexShader = I, this.fragmentShader = R, this;
}
let im = 0;
class sm {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(t) {
    const e = t.vertexShader, n = t.fragmentShader, s = this._getShaderStage(e), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(t);
    return a.has(s) === false && (a.add(s), s.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
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
    let n = e.get(t);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(t, n)), n;
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return n === void 0 && (n = new rm(t), e.set(t, n)), n;
  }
}
class rm {
  constructor(t) {
    this.id = im++, this.code = t, this.usedTimes = 0;
  }
}
function am(i, t, e, n, s, r, a) {
  const o = new Ga(), l = new sm(), c = /* @__PURE__ */ new Set(), h = [], u = s.logarithmicDepthBuffer, f = s.reverseDepthBuffer, m = s.vertexTextures;
  let _ = s.precision;
  const x = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function d(g) {
    return c.add(g), g === 0 ? "uv" : `uv${g}`;
  }
  function p(g, y, G, B, H) {
    const j = B.fog, F = H.geometry, tt = g.isMeshStandardMaterial ? B.environment : null, k = (g.isMeshStandardMaterial ? e : t).get(g.envMap || tt), ht = k && k.mapping === Ws ? k.image.height : null, dt = x[g.type];
    g.precision !== null && (_ = s.getMaxPrecision(g.precision), _ !== g.precision && console.warn("THREE.WebGLProgram.getParameters:", g.precision, "not supported, using", _, "instead."));
    const pt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, Ht = pt !== void 0 ? pt.length : 0;
    let Wt = 0;
    F.morphAttributes.position !== void 0 && (Wt = 1), F.morphAttributes.normal !== void 0 && (Wt = 2), F.morphAttributes.color !== void 0 && (Wt = 3);
    let W, et, Mt, ct;
    if (dt) {
      const Ee = Xe[dt];
      W = Ee.vertexShader, et = Ee.fragmentShader;
    } else W = g.vertexShader, et = g.fragmentShader, l.update(g), Mt = l.getVertexShaderID(g), ct = l.getFragmentShaderID(g);
    const Ct = i.getRenderTarget(), Rt = H.isInstancedMesh === true, It = H.isBatchedMesh === true, zt = !!g.map, q = !!g.matcap, b = !!k, rt = !!g.aoMap, st = !!g.lightMap, Q = !!g.bumpMap, at = !!g.normalMap, bt = !!g.displacementMap, mt = !!g.emissiveMap, T = !!g.metalnessMap, v = !!g.roughnessMap, N = g.anisotropy > 0, X = g.clearcoat > 0, Z = g.dispersion > 0, Y = g.iridescence > 0, Et = g.sheen > 0, ot = g.transmission > 0, vt = N && !!g.anisotropyMap, Gt = X && !!g.clearcoatMap, nt = X && !!g.clearcoatNormalMap, xt = X && !!g.clearcoatRoughnessMap, Dt = Y && !!g.iridescenceMap, Ut = Y && !!g.iridescenceThicknessMap, St = Et && !!g.sheenColorMap, Vt = Et && !!g.sheenRoughnessMap, Nt = !!g.specularMap, te = !!g.specularColorMap, P = !!g.specularIntensityMap, _t = ot && !!g.transmissionMap, V = ot && !!g.thicknessMap, K = !!g.gradientMap, ut = !!g.alphaMap, gt = g.alphaTest > 0, kt = !!g.alphaHash, oe = !!g.extensions;
    let ye = vn;
    g.toneMapped && (Ct === null || Ct.isXRRenderTarget === true) && (ye = i.toneMapping);
    const Xt = { shaderID: dt, shaderType: g.type, shaderName: g.name, vertexShader: W, fragmentShader: et, defines: g.defines, customVertexShaderID: Mt, customFragmentShaderID: ct, isRawShaderMaterial: g.isRawShaderMaterial === true, glslVersion: g.glslVersion, precision: _, batching: It, batchingColor: It && H._colorsTexture !== null, instancing: Rt, instancingColor: Rt && H.instanceColor !== null, instancingMorph: Rt && H.morphTexture !== null, supportsVertexTextures: m, outputColorSpace: Ct === null ? i.outputColorSpace : Ct.isXRRenderTarget === true ? Ct.texture.colorSpace : yn, alphaToCoverage: !!g.alphaToCoverage, map: zt, matcap: q, envMap: b, envMapMode: b && k.mapping, envMapCubeUVHeight: ht, aoMap: rt, lightMap: st, bumpMap: Q, normalMap: at, displacementMap: m && bt, emissiveMap: mt, normalMapObjectSpace: at && g.normalMapType === jc, normalMapTangentSpace: at && g.normalMapType === Ba, metalnessMap: T, roughnessMap: v, anisotropy: N, anisotropyMap: vt, clearcoat: X, clearcoatMap: Gt, clearcoatNormalMap: nt, clearcoatRoughnessMap: xt, dispersion: Z, iridescence: Y, iridescenceMap: Dt, iridescenceThicknessMap: Ut, sheen: Et, sheenColorMap: St, sheenRoughnessMap: Vt, specularMap: Nt, specularColorMap: te, specularIntensityMap: P, transmission: ot, transmissionMap: _t, thicknessMap: V, gradientMap: K, opaque: g.transparent === false && g.blending === ci && g.alphaToCoverage === false, alphaMap: ut, alphaTest: gt, alphaHash: kt, combine: g.combine, mapUv: zt && d(g.map.channel), aoMapUv: rt && d(g.aoMap.channel), lightMapUv: st && d(g.lightMap.channel), bumpMapUv: Q && d(g.bumpMap.channel), normalMapUv: at && d(g.normalMap.channel), displacementMapUv: bt && d(g.displacementMap.channel), emissiveMapUv: mt && d(g.emissiveMap.channel), metalnessMapUv: T && d(g.metalnessMap.channel), roughnessMapUv: v && d(g.roughnessMap.channel), anisotropyMapUv: vt && d(g.anisotropyMap.channel), clearcoatMapUv: Gt && d(g.clearcoatMap.channel), clearcoatNormalMapUv: nt && d(g.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: xt && d(g.clearcoatRoughnessMap.channel), iridescenceMapUv: Dt && d(g.iridescenceMap.channel), iridescenceThicknessMapUv: Ut && d(g.iridescenceThicknessMap.channel), sheenColorMapUv: St && d(g.sheenColorMap.channel), sheenRoughnessMapUv: Vt && d(g.sheenRoughnessMap.channel), specularMapUv: Nt && d(g.specularMap.channel), specularColorMapUv: te && d(g.specularColorMap.channel), specularIntensityMapUv: P && d(g.specularIntensityMap.channel), transmissionMapUv: _t && d(g.transmissionMap.channel), thicknessMapUv: V && d(g.thicknessMap.channel), alphaMapUv: ut && d(g.alphaMap.channel), vertexTangents: !!F.attributes.tangent && (at || N), vertexColors: g.vertexColors, vertexAlphas: g.vertexColors === true && !!F.attributes.color && F.attributes.color.itemSize === 4, pointsUvs: H.isPoints === true && !!F.attributes.uv && (zt || ut), fog: !!j, useFog: g.fog === true, fogExp2: !!j && j.isFogExp2, flatShading: g.flatShading === true, sizeAttenuation: g.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: f, skinning: H.isSkinnedMesh === true, morphTargets: F.morphAttributes.position !== void 0, morphNormals: F.morphAttributes.normal !== void 0, morphColors: F.morphAttributes.color !== void 0, morphTargetsCount: Ht, morphTextureStride: Wt, numDirLights: y.directional.length, numPointLights: y.point.length, numSpotLights: y.spot.length, numSpotLightMaps: y.spotLightMap.length, numRectAreaLights: y.rectArea.length, numHemiLights: y.hemi.length, numDirLightShadows: y.directionalShadowMap.length, numPointLightShadows: y.pointShadowMap.length, numSpotLightShadows: y.spotShadowMap.length, numSpotLightShadowsWithMaps: y.numSpotLightShadowsWithMaps, numLightProbes: y.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: g.dithering, shadowMapEnabled: i.shadowMap.enabled && G.length > 0, shadowMapType: i.shadowMap.type, toneMapping: ye, decodeVideoTexture: zt && g.map.isVideoTexture === true && Zt.getTransfer(g.map.colorSpace) === ne, premultipliedAlpha: g.premultipliedAlpha, doubleSided: g.side === nn, flipSided: g.side === be, useDepthPacking: g.depthPacking >= 0, depthPacking: g.depthPacking || 0, index0AttributeName: g.index0AttributeName, extensionClipCullDistance: oe && g.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (oe && g.extensions.multiDraw === true || It) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: g.customProgramCacheKey() };
    return Xt.vertexUv1s = c.has(1), Xt.vertexUv2s = c.has(2), Xt.vertexUv3s = c.has(3), c.clear(), Xt;
  }
  function A(g) {
    const y = [];
    if (g.shaderID ? y.push(g.shaderID) : (y.push(g.customVertexShaderID), y.push(g.customFragmentShaderID)), g.defines !== void 0) for (const G in g.defines) y.push(G), y.push(g.defines[G]);
    return g.isRawShaderMaterial === false && (S(y, g), E(y, g), y.push(i.outputColorSpace)), y.push(g.customProgramCacheKey), y.join();
  }
  function S(g, y) {
    g.push(y.precision), g.push(y.outputColorSpace), g.push(y.envMapMode), g.push(y.envMapCubeUVHeight), g.push(y.mapUv), g.push(y.alphaMapUv), g.push(y.lightMapUv), g.push(y.aoMapUv), g.push(y.bumpMapUv), g.push(y.normalMapUv), g.push(y.displacementMapUv), g.push(y.emissiveMapUv), g.push(y.metalnessMapUv), g.push(y.roughnessMapUv), g.push(y.anisotropyMapUv), g.push(y.clearcoatMapUv), g.push(y.clearcoatNormalMapUv), g.push(y.clearcoatRoughnessMapUv), g.push(y.iridescenceMapUv), g.push(y.iridescenceThicknessMapUv), g.push(y.sheenColorMapUv), g.push(y.sheenRoughnessMapUv), g.push(y.specularMapUv), g.push(y.specularColorMapUv), g.push(y.specularIntensityMapUv), g.push(y.transmissionMapUv), g.push(y.thicknessMapUv), g.push(y.combine), g.push(y.fogExp2), g.push(y.sizeAttenuation), g.push(y.morphTargetsCount), g.push(y.morphAttributeCount), g.push(y.numDirLights), g.push(y.numPointLights), g.push(y.numSpotLights), g.push(y.numSpotLightMaps), g.push(y.numHemiLights), g.push(y.numRectAreaLights), g.push(y.numDirLightShadows), g.push(y.numPointLightShadows), g.push(y.numSpotLightShadows), g.push(y.numSpotLightShadowsWithMaps), g.push(y.numLightProbes), g.push(y.shadowMapType), g.push(y.toneMapping), g.push(y.numClippingPlanes), g.push(y.numClipIntersection), g.push(y.depthPacking);
  }
  function E(g, y) {
    o.disableAll(), y.supportsVertexTextures && o.enable(0), y.instancing && o.enable(1), y.instancingColor && o.enable(2), y.instancingMorph && o.enable(3), y.matcap && o.enable(4), y.envMap && o.enable(5), y.normalMapObjectSpace && o.enable(6), y.normalMapTangentSpace && o.enable(7), y.clearcoat && o.enable(8), y.iridescence && o.enable(9), y.alphaTest && o.enable(10), y.vertexColors && o.enable(11), y.vertexAlphas && o.enable(12), y.vertexUv1s && o.enable(13), y.vertexUv2s && o.enable(14), y.vertexUv3s && o.enable(15), y.vertexTangents && o.enable(16), y.anisotropy && o.enable(17), y.alphaHash && o.enable(18), y.batching && o.enable(19), y.dispersion && o.enable(20), y.batchingColor && o.enable(21), g.push(o.mask), o.disableAll(), y.fog && o.enable(0), y.useFog && o.enable(1), y.flatShading && o.enable(2), y.logarithmicDepthBuffer && o.enable(3), y.reverseDepthBuffer && o.enable(4), y.skinning && o.enable(5), y.morphTargets && o.enable(6), y.morphNormals && o.enable(7), y.morphColors && o.enable(8), y.premultipliedAlpha && o.enable(9), y.shadowMapEnabled && o.enable(10), y.doubleSided && o.enable(11), y.flipSided && o.enable(12), y.useDepthPacking && o.enable(13), y.dithering && o.enable(14), y.transmission && o.enable(15), y.sheen && o.enable(16), y.opaque && o.enable(17), y.pointsUvs && o.enable(18), y.decodeVideoTexture && o.enable(19), y.alphaToCoverage && o.enable(20), g.push(o.mask);
  }
  function I(g) {
    const y = x[g.type];
    let G;
    if (y) {
      const B = Xe[y];
      G = Vh.clone(B.uniforms);
    } else G = g.uniforms;
    return G;
  }
  function R(g, y) {
    let G;
    for (let B = 0, H = h.length; B < H; B++) {
      const j = h[B];
      if (j.cacheKey === y) {
        G = j, ++G.usedTimes;
        break;
      }
    }
    return G === void 0 && (G = new nm(i, y, g, r), h.push(G)), G;
  }
  function w(g) {
    if (--g.usedTimes === 0) {
      const y = h.indexOf(g);
      h[y] = h[h.length - 1], h.pop(), g.destroy();
    }
  }
  function U(g) {
    l.remove(g);
  }
  function J() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: A, getUniforms: I, acquireProgram: R, releaseProgram: w, releaseShaderCache: U, programs: h, dispose: J };
}
function om() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, l) {
    i.get(a)[o] = l;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: t, get: e, remove: n, update: s, dispose: r };
}
function lm(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.material.id !== t.material.id ? i.material.id - t.material.id : i.z !== t.z ? i.z - t.z : i.id - t.id;
}
function Zo(i, t) {
  return i.groupOrder !== t.groupOrder ? i.groupOrder - t.groupOrder : i.renderOrder !== t.renderOrder ? i.renderOrder - t.renderOrder : i.z !== t.z ? t.z - i.z : i.id - t.id;
}
function Ko() {
  const i = [];
  let t = 0;
  const e = [], n = [], s = [];
  function r() {
    t = 0, e.length = 0, n.length = 0, s.length = 0;
  }
  function a(u, f, m, _, x, d) {
    let p = i[t];
    return p === void 0 ? (p = { id: u.id, object: u, geometry: f, material: m, groupOrder: _, renderOrder: u.renderOrder, z: x, group: d }, i[t] = p) : (p.id = u.id, p.object = u, p.geometry = f, p.material = m, p.groupOrder = _, p.renderOrder = u.renderOrder, p.z = x, p.group = d), t++, p;
  }
  function o(u, f, m, _, x, d) {
    const p = a(u, f, m, _, x, d);
    m.transmission > 0 ? n.push(p) : m.transparent === true ? s.push(p) : e.push(p);
  }
  function l(u, f, m, _, x, d) {
    const p = a(u, f, m, _, x, d);
    m.transmission > 0 ? n.unshift(p) : m.transparent === true ? s.unshift(p) : e.unshift(p);
  }
  function c(u, f) {
    e.length > 1 && e.sort(u || lm), n.length > 1 && n.sort(f || Zo), s.length > 1 && s.sort(f || Zo);
  }
  function h() {
    for (let u = t, f = i.length; u < f; u++) {
      const m = i[u];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: e, transmissive: n, transparent: s, init: r, push: o, unshift: l, finish: h, sort: c };
}
function cm() {
  let i = /* @__PURE__ */ new WeakMap();
  function t(n, s) {
    const r = i.get(n);
    let a;
    return r === void 0 ? (a = new Ko(), i.set(n, [a])) : s >= r.length ? (a = new Ko(), r.push(a)) : a = r[s], a;
  }
  function e() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: e };
}
function hm() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { direction: new C(), color: new Bt() };
        break;
      case "SpotLight":
        e = { position: new C(), direction: new C(), color: new Bt(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        e = { position: new C(), color: new Bt(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        e = { direction: new C(), skyColor: new Bt(), groundColor: new Bt() };
        break;
      case "RectAreaLight":
        e = { color: new Bt(), position: new C(), halfWidth: new C(), halfHeight: new C() };
        break;
    }
    return i[t.id] = e, e;
  } };
}
function um() {
  const i = {};
  return { get: function(t) {
    if (i[t.id] !== void 0) return i[t.id];
    let e;
    switch (t.type) {
      case "DirectionalLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $() };
        break;
      case "SpotLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $() };
        break;
      case "PointLight":
        e = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new $(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[t.id] = e, e;
  } };
}
let fm = 0;
function dm(i, t) {
  return (t.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (i.map ? 1 : 0);
}
function pm(i) {
  const t = new hm(), e = um(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new C());
  const s = new C(), r = new Qt(), a = new Qt();
  function o(c) {
    let h = 0, u = 0, f = 0;
    for (let J = 0; J < 9; J++) n.probe[J].set(0, 0, 0);
    let m = 0, _ = 0, x = 0, d = 0, p = 0, A = 0, S = 0, E = 0, I = 0, R = 0, w = 0;
    c.sort(dm);
    for (let J = 0, g = c.length; J < g; J++) {
      const y = c[J], G = y.color, B = y.intensity, H = y.distance, j = y.shadow && y.shadow.map ? y.shadow.map.texture : null;
      if (y.isAmbientLight) h += G.r * B, u += G.g * B, f += G.b * B;
      else if (y.isLightProbe) {
        for (let F = 0; F < 9; F++) n.probe[F].addScaledVector(y.sh.coefficients[F], B);
        w++;
      } else if (y.isDirectionalLight) {
        const F = t.get(y);
        if (F.color.copy(y.color).multiplyScalar(y.intensity), y.castShadow) {
          const tt = y.shadow, k = e.get(y);
          k.shadowIntensity = tt.intensity, k.shadowBias = tt.bias, k.shadowNormalBias = tt.normalBias, k.shadowRadius = tt.radius, k.shadowMapSize = tt.mapSize, n.directionalShadow[m] = k, n.directionalShadowMap[m] = j, n.directionalShadowMatrix[m] = y.shadow.matrix, A++;
        }
        n.directional[m] = F, m++;
      } else if (y.isSpotLight) {
        const F = t.get(y);
        F.position.setFromMatrixPosition(y.matrixWorld), F.color.copy(G).multiplyScalar(B), F.distance = H, F.coneCos = Math.cos(y.angle), F.penumbraCos = Math.cos(y.angle * (1 - y.penumbra)), F.decay = y.decay, n.spot[x] = F;
        const tt = y.shadow;
        if (y.map && (n.spotLightMap[I] = y.map, I++, tt.updateMatrices(y), y.castShadow && R++), n.spotLightMatrix[x] = tt.matrix, y.castShadow) {
          const k = e.get(y);
          k.shadowIntensity = tt.intensity, k.shadowBias = tt.bias, k.shadowNormalBias = tt.normalBias, k.shadowRadius = tt.radius, k.shadowMapSize = tt.mapSize, n.spotShadow[x] = k, n.spotShadowMap[x] = j, E++;
        }
        x++;
      } else if (y.isRectAreaLight) {
        const F = t.get(y);
        F.color.copy(G).multiplyScalar(B), F.halfWidth.set(y.width * 0.5, 0, 0), F.halfHeight.set(0, y.height * 0.5, 0), n.rectArea[d] = F, d++;
      } else if (y.isPointLight) {
        const F = t.get(y);
        if (F.color.copy(y.color).multiplyScalar(y.intensity), F.distance = y.distance, F.decay = y.decay, y.castShadow) {
          const tt = y.shadow, k = e.get(y);
          k.shadowIntensity = tt.intensity, k.shadowBias = tt.bias, k.shadowNormalBias = tt.normalBias, k.shadowRadius = tt.radius, k.shadowMapSize = tt.mapSize, k.shadowCameraNear = tt.camera.near, k.shadowCameraFar = tt.camera.far, n.pointShadow[_] = k, n.pointShadowMap[_] = j, n.pointShadowMatrix[_] = y.shadow.matrix, S++;
        }
        n.point[_] = F, _++;
      } else if (y.isHemisphereLight) {
        const F = t.get(y);
        F.skyColor.copy(y.color).multiplyScalar(B), F.groundColor.copy(y.groundColor).multiplyScalar(B), n.hemi[p] = F, p++;
      }
    }
    d > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = lt.LTC_FLOAT_1, n.rectAreaLTC2 = lt.LTC_FLOAT_2) : (n.rectAreaLTC1 = lt.LTC_HALF_1, n.rectAreaLTC2 = lt.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = f;
    const U = n.hash;
    (U.directionalLength !== m || U.pointLength !== _ || U.spotLength !== x || U.rectAreaLength !== d || U.hemiLength !== p || U.numDirectionalShadows !== A || U.numPointShadows !== S || U.numSpotShadows !== E || U.numSpotMaps !== I || U.numLightProbes !== w) && (n.directional.length = m, n.spot.length = x, n.rectArea.length = d, n.point.length = _, n.hemi.length = p, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = S, n.pointShadowMap.length = S, n.spotShadow.length = E, n.spotShadowMap.length = E, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = S, n.spotLightMatrix.length = E + I - R, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = w, U.directionalLength = m, U.pointLength = _, U.spotLength = x, U.rectAreaLength = d, U.hemiLength = p, U.numDirectionalShadows = A, U.numPointShadows = S, U.numSpotShadows = E, U.numSpotMaps = I, U.numLightProbes = w, n.version = fm++);
  }
  function l(c, h) {
    let u = 0, f = 0, m = 0, _ = 0, x = 0;
    const d = h.matrixWorldInverse;
    for (let p = 0, A = c.length; p < A; p++) {
      const S = c[p];
      if (S.isDirectionalLight) {
        const E = n.directional[u];
        E.direction.setFromMatrixPosition(S.matrixWorld), s.setFromMatrixPosition(S.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(d), u++;
      } else if (S.isSpotLight) {
        const E = n.spot[m];
        E.position.setFromMatrixPosition(S.matrixWorld), E.position.applyMatrix4(d), E.direction.setFromMatrixPosition(S.matrixWorld), s.setFromMatrixPosition(S.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(d), m++;
      } else if (S.isRectAreaLight) {
        const E = n.rectArea[_];
        E.position.setFromMatrixPosition(S.matrixWorld), E.position.applyMatrix4(d), a.identity(), r.copy(S.matrixWorld), r.premultiply(d), a.extractRotation(r), E.halfWidth.set(S.width * 0.5, 0, 0), E.halfHeight.set(0, S.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), _++;
      } else if (S.isPointLight) {
        const E = n.point[f];
        E.position.setFromMatrixPosition(S.matrixWorld), E.position.applyMatrix4(d), f++;
      } else if (S.isHemisphereLight) {
        const E = n.hemi[x];
        E.direction.setFromMatrixPosition(S.matrixWorld), E.direction.transformDirection(d), x++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function jo(i) {
  const t = new pm(i), e = [], n = [];
  function s(h) {
    c.camera = h, e.length = 0, n.length = 0;
  }
  function r(h) {
    e.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    t.setup(e);
  }
  function l(h) {
    t.setupView(e, h);
  }
  const c = { lightsArray: e, shadowsArray: n, camera: null, lights: t, transmissionRenderTarget: {} };
  return { init: s, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function mm(i) {
  let t = /* @__PURE__ */ new WeakMap();
  function e(s, r = 0) {
    const a = t.get(s);
    let o;
    return a === void 0 ? (o = new jo(i), t.set(s, [o])) : r >= a.length ? (o = new jo(i), a.push(o)) : o = a[r], o;
  }
  function n() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: n };
}
class _m extends on {
  constructor(t) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Zc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.depthPacking = t.depthPacking, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this;
  }
}
class gm extends on {
  constructor(t) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this;
  }
}
const vm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, xm = `uniform sampler2D shadow_pass;
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
function Mm(i, t, e) {
  let n = new ka();
  const s = new $(), r = new $(), a = new re(), o = new _m({ depthPacking: Kc }), l = new gm(), c = {}, h = e.maxTextureSize, u = { [Mn]: be, [be]: Mn, [nn]: nn }, f = new Sn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new $() }, radius: { value: 4 } }, vertexShader: vm, fragmentShader: xm }), m = f.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const _ = new pe();
  _.setAttribute("position", new Ve(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const x = new Ye(_, f), d = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Ml;
  let p = this.type;
  this.render = function(R, w, U) {
    if (d.enabled === false || d.autoUpdate === false && d.needsUpdate === false || R.length === 0) return;
    const J = i.getRenderTarget(), g = i.getActiveCubeFace(), y = i.getActiveMipmapLevel(), G = i.state;
    G.setBlending(gn), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
    const B = p !== en && this.type === en, H = p === en && this.type !== en;
    for (let j = 0, F = R.length; j < F; j++) {
      const tt = R[j], k = tt.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", tt, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === false && k.needsUpdate === false) continue;
      s.copy(k.mapSize);
      const ht = k.getFrameExtents();
      if (s.multiply(ht), r.copy(k.mapSize), (s.x > h || s.y > h) && (s.x > h && (r.x = Math.floor(h / ht.x), s.x = r.x * ht.x, k.mapSize.x = r.x), s.y > h && (r.y = Math.floor(h / ht.y), s.y = r.y * ht.y, k.mapSize.y = r.y)), k.map === null || B === true || H === true) {
        const pt = this.type !== en ? { minFilter: Ae, magFilter: Ae } : {};
        k.map !== null && k.map.dispose(), k.map = new On(s.x, s.y, pt), k.map.texture.name = tt.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(k.map), i.clear();
      const dt = k.getViewportCount();
      for (let pt = 0; pt < dt; pt++) {
        const Ht = k.getViewport(pt);
        a.set(r.x * Ht.x, r.y * Ht.y, r.x * Ht.z, r.y * Ht.w), G.viewport(a), k.updateMatrices(tt, pt), n = k.getFrustum(), E(w, U, k.camera, tt, this.type);
      }
      k.isPointLightShadow !== true && this.type === en && A(k, U), k.needsUpdate = false;
    }
    p = this.type, d.needsUpdate = false, i.setRenderTarget(J, g, y);
  };
  function A(R, w) {
    const U = t.update(x);
    f.defines.VSM_SAMPLES !== R.blurSamples && (f.defines.VSM_SAMPLES = R.blurSamples, m.defines.VSM_SAMPLES = R.blurSamples, f.needsUpdate = true, m.needsUpdate = true), R.mapPass === null && (R.mapPass = new On(s.x, s.y)), f.uniforms.shadow_pass.value = R.map.texture, f.uniforms.resolution.value = R.mapSize, f.uniforms.radius.value = R.radius, i.setRenderTarget(R.mapPass), i.clear(), i.renderBufferDirect(w, null, U, f, x, null), m.uniforms.shadow_pass.value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value = R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(w, null, U, m, x, null);
  }
  function S(R, w, U, J) {
    let g = null;
    const y = U.isPointLight === true ? R.customDistanceMaterial : R.customDepthMaterial;
    if (y !== void 0) g = y;
    else if (g = U.isPointLight === true ? l : o, i.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const G = g.uuid, B = w.uuid;
      let H = c[G];
      H === void 0 && (H = {}, c[G] = H);
      let j = H[B];
      j === void 0 && (j = g.clone(), H[B] = j, w.addEventListener("dispose", I)), g = j;
    }
    if (g.visible = w.visible, g.wireframe = w.wireframe, J === en ? g.side = w.shadowSide !== null ? w.shadowSide : w.side : g.side = w.shadowSide !== null ? w.shadowSide : u[w.side], g.alphaMap = w.alphaMap, g.alphaTest = w.alphaTest, g.map = w.map, g.clipShadows = w.clipShadows, g.clippingPlanes = w.clippingPlanes, g.clipIntersection = w.clipIntersection, g.displacementMap = w.displacementMap, g.displacementScale = w.displacementScale, g.displacementBias = w.displacementBias, g.wireframeLinewidth = w.wireframeLinewidth, g.linewidth = w.linewidth, U.isPointLight === true && g.isMeshDistanceMaterial === true) {
      const G = i.properties.get(g);
      G.light = U;
    }
    return g;
  }
  function E(R, w, U, J, g) {
    if (R.visible === false) return;
    if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && g === en) && (!R.frustumCulled || n.intersectsObject(R))) {
      R.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, R.matrixWorld);
      const B = t.update(R), H = R.material;
      if (Array.isArray(H)) {
        const j = B.groups;
        for (let F = 0, tt = j.length; F < tt; F++) {
          const k = j[F], ht = H[k.materialIndex];
          if (ht && ht.visible) {
            const dt = S(R, ht, J, g);
            R.onBeforeShadow(i, R, w, U, B, dt, k), i.renderBufferDirect(U, null, B, dt, R, k), R.onAfterShadow(i, R, w, U, B, dt, k);
          }
        }
      } else if (H.visible) {
        const j = S(R, H, J, g);
        R.onBeforeShadow(i, R, w, U, B, j, null), i.renderBufferDirect(U, null, B, j, R, null), R.onAfterShadow(i, R, w, U, B, j, null);
      }
    }
    const G = R.children;
    for (let B = 0, H = G.length; B < H; B++) E(G[B], w, U, J, g);
  }
  function I(R) {
    R.target.removeEventListener("dispose", I);
    for (const U in c) {
      const J = c[U], g = R.target.uuid;
      g in J && (J[g].dispose(), delete J[g]);
    }
  }
}
const Sm = { [Hr]: Gr, [Vr]: Xr, [kr]: Yr, [di]: Wr, [Gr]: Hr, [Xr]: Vr, [Yr]: kr, [Wr]: di };
function ym(i) {
  function t() {
    let P = false;
    const _t = new re();
    let V = null;
    const K = new re(0, 0, 0, 0);
    return { setMask: function(ut) {
      V !== ut && !P && (i.colorMask(ut, ut, ut, ut), V = ut);
    }, setLocked: function(ut) {
      P = ut;
    }, setClear: function(ut, gt, kt, oe, ye) {
      ye === true && (ut *= oe, gt *= oe, kt *= oe), _t.set(ut, gt, kt, oe), K.equals(_t) === false && (i.clearColor(ut, gt, kt, oe), K.copy(_t));
    }, reset: function() {
      P = false, V = null, K.set(-1, 0, 0, 0);
    } };
  }
  function e() {
    let P = false, _t = false, V = null, K = null, ut = null;
    return { setReversed: function(gt) {
      _t = gt;
    }, setTest: function(gt) {
      gt ? Mt(i.DEPTH_TEST) : ct(i.DEPTH_TEST);
    }, setMask: function(gt) {
      V !== gt && !P && (i.depthMask(gt), V = gt);
    }, setFunc: function(gt) {
      if (_t && (gt = Sm[gt]), K !== gt) {
        switch (gt) {
          case Hr:
            i.depthFunc(i.NEVER);
            break;
          case Gr:
            i.depthFunc(i.ALWAYS);
            break;
          case Vr:
            i.depthFunc(i.LESS);
            break;
          case di:
            i.depthFunc(i.LEQUAL);
            break;
          case kr:
            i.depthFunc(i.EQUAL);
            break;
          case Wr:
            i.depthFunc(i.GEQUAL);
            break;
          case Xr:
            i.depthFunc(i.GREATER);
            break;
          case Yr:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        K = gt;
      }
    }, setLocked: function(gt) {
      P = gt;
    }, setClear: function(gt) {
      ut !== gt && (i.clearDepth(gt), ut = gt);
    }, reset: function() {
      P = false, V = null, K = null, ut = null;
    } };
  }
  function n() {
    let P = false, _t = null, V = null, K = null, ut = null, gt = null, kt = null, oe = null, ye = null;
    return { setTest: function(Xt) {
      P || (Xt ? Mt(i.STENCIL_TEST) : ct(i.STENCIL_TEST));
    }, setMask: function(Xt) {
      _t !== Xt && !P && (i.stencilMask(Xt), _t = Xt);
    }, setFunc: function(Xt, Ee, Ke) {
      (V !== Xt || K !== Ee || ut !== Ke) && (i.stencilFunc(Xt, Ee, Ke), V = Xt, K = Ee, ut = Ke);
    }, setOp: function(Xt, Ee, Ke) {
      (gt !== Xt || kt !== Ee || oe !== Ke) && (i.stencilOp(Xt, Ee, Ke), gt = Xt, kt = Ee, oe = Ke);
    }, setLocked: function(Xt) {
      P = Xt;
    }, setClear: function(Xt) {
      ye !== Xt && (i.clearStencil(Xt), ye = Xt);
    }, reset: function() {
      P = false, _t = null, V = null, K = null, ut = null, gt = null, kt = null, oe = null, ye = null;
    } };
  }
  const s = new t(), r = new e(), a = new n(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap();
  let c = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = false, x = null, d = null, p = null, A = null, S = null, E = null, I = null, R = new Bt(0, 0, 0), w = 0, U = false, J = null, g = null, y = null, G = null, B = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let j = false, F = 0;
  const tt = i.getParameter(i.VERSION);
  tt.indexOf("WebGL") !== -1 ? (F = parseFloat(/^WebGL (\d)/.exec(tt)[1]), j = F >= 1) : tt.indexOf("OpenGL ES") !== -1 && (F = parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]), j = F >= 2);
  let k = null, ht = {};
  const dt = i.getParameter(i.SCISSOR_BOX), pt = i.getParameter(i.VIEWPORT), Ht = new re().fromArray(dt), Wt = new re().fromArray(pt);
  function W(P, _t, V, K) {
    const ut = new Uint8Array(4), gt = i.createTexture();
    i.bindTexture(P, gt), i.texParameteri(P, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(P, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let kt = 0; kt < V; kt++) P === i.TEXTURE_3D || P === i.TEXTURE_2D_ARRAY ? i.texImage3D(_t, 0, i.RGBA, 1, 1, K, 0, i.RGBA, i.UNSIGNED_BYTE, ut) : i.texImage2D(_t + kt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, ut);
    return gt;
  }
  const et = {};
  et[i.TEXTURE_2D] = W(i.TEXTURE_2D, i.TEXTURE_2D, 1), et[i.TEXTURE_CUBE_MAP] = W(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), et[i.TEXTURE_2D_ARRAY] = W(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), et[i.TEXTURE_3D] = W(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), r.setClear(1), a.setClear(0), Mt(i.DEPTH_TEST), r.setFunc(di), st(false), Q(io), Mt(i.CULL_FACE), b(gn);
  function Mt(P) {
    c[P] !== true && (i.enable(P), c[P] = true);
  }
  function ct(P) {
    c[P] !== false && (i.disable(P), c[P] = false);
  }
  function Ct(P, _t) {
    return h[P] !== _t ? (i.bindFramebuffer(P, _t), h[P] = _t, P === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = _t), P === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = _t), true) : false;
  }
  function Rt(P, _t) {
    let V = f, K = false;
    if (P) {
      V = u.get(_t), V === void 0 && (V = [], u.set(_t, V));
      const ut = P.textures;
      if (V.length !== ut.length || V[0] !== i.COLOR_ATTACHMENT0) {
        for (let gt = 0, kt = ut.length; gt < kt; gt++) V[gt] = i.COLOR_ATTACHMENT0 + gt;
        V.length = ut.length, K = true;
      }
    } else V[0] !== i.BACK && (V[0] = i.BACK, K = true);
    K && i.drawBuffers(V);
  }
  function It(P) {
    return m !== P ? (i.useProgram(P), m = P, true) : false;
  }
  const zt = { [Ln]: i.FUNC_ADD, [Sc]: i.FUNC_SUBTRACT, [yc]: i.FUNC_REVERSE_SUBTRACT };
  zt[Ec] = i.MIN, zt[Tc] = i.MAX;
  const q = { [Ac]: i.ZERO, [bc]: i.ONE, [wc]: i.SRC_COLOR, [Br]: i.SRC_ALPHA, [Uc]: i.SRC_ALPHA_SATURATE, [Lc]: i.DST_COLOR, [Cc]: i.DST_ALPHA, [Rc]: i.ONE_MINUS_SRC_COLOR, [zr]: i.ONE_MINUS_SRC_ALPHA, [Dc]: i.ONE_MINUS_DST_COLOR, [Pc]: i.ONE_MINUS_DST_ALPHA, [Ic]: i.CONSTANT_COLOR, [Nc]: i.ONE_MINUS_CONSTANT_COLOR, [Oc]: i.CONSTANT_ALPHA, [Fc]: i.ONE_MINUS_CONSTANT_ALPHA };
  function b(P, _t, V, K, ut, gt, kt, oe, ye, Xt) {
    if (P === gn) {
      _ === true && (ct(i.BLEND), _ = false);
      return;
    }
    if (_ === false && (Mt(i.BLEND), _ = true), P !== Mc) {
      if (P !== x || Xt !== U) {
        if ((d !== Ln || S !== Ln) && (i.blendEquation(i.FUNC_ADD), d = Ln, S = Ln), Xt) switch (P) {
          case ci:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case so:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case ro:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case ao:
            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        else switch (P) {
          case ci:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case so:
            i.blendFunc(i.SRC_ALPHA, i.ONE);
            break;
          case ro:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case ao:
            i.blendFunc(i.ZERO, i.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        p = null, A = null, E = null, I = null, R.set(0, 0, 0), w = 0, x = P, U = Xt;
      }
      return;
    }
    ut = ut || _t, gt = gt || V, kt = kt || K, (_t !== d || ut !== S) && (i.blendEquationSeparate(zt[_t], zt[ut]), d = _t, S = ut), (V !== p || K !== A || gt !== E || kt !== I) && (i.blendFuncSeparate(q[V], q[K], q[gt], q[kt]), p = V, A = K, E = gt, I = kt), (oe.equals(R) === false || ye !== w) && (i.blendColor(oe.r, oe.g, oe.b, ye), R.copy(oe), w = ye), x = P, U = false;
  }
  function rt(P, _t) {
    P.side === nn ? ct(i.CULL_FACE) : Mt(i.CULL_FACE);
    let V = P.side === be;
    _t && (V = !V), st(V), P.blending === ci && P.transparent === false ? b(gn) : b(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), r.setFunc(P.depthFunc), r.setTest(P.depthTest), r.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const K = P.stencilWrite;
    a.setTest(K), K && (a.setMask(P.stencilWriteMask), a.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), a.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), bt(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === true ? Mt(i.SAMPLE_ALPHA_TO_COVERAGE) : ct(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function st(P) {
    J !== P && (P ? i.frontFace(i.CW) : i.frontFace(i.CCW), J = P);
  }
  function Q(P) {
    P !== gc ? (Mt(i.CULL_FACE), P !== g && (P === io ? i.cullFace(i.BACK) : P === vc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ct(i.CULL_FACE), g = P;
  }
  function at(P) {
    P !== y && (j && i.lineWidth(P), y = P);
  }
  function bt(P, _t, V) {
    P ? (Mt(i.POLYGON_OFFSET_FILL), (G !== _t || B !== V) && (i.polygonOffset(_t, V), G = _t, B = V)) : ct(i.POLYGON_OFFSET_FILL);
  }
  function mt(P) {
    P ? Mt(i.SCISSOR_TEST) : ct(i.SCISSOR_TEST);
  }
  function T(P) {
    P === void 0 && (P = i.TEXTURE0 + H - 1), k !== P && (i.activeTexture(P), k = P);
  }
  function v(P, _t, V) {
    V === void 0 && (k === null ? V = i.TEXTURE0 + H - 1 : V = k);
    let K = ht[V];
    K === void 0 && (K = { type: void 0, texture: void 0 }, ht[V] = K), (K.type !== P || K.texture !== _t) && (k !== V && (i.activeTexture(V), k = V), i.bindTexture(P, _t || et[P]), K.type = P, K.texture = _t);
  }
  function N() {
    const P = ht[k];
    P !== void 0 && P.type !== void 0 && (i.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function X() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Y() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Et() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ot() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function vt() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Gt() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function nt() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function xt() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Dt() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Ut(P) {
    Ht.equals(P) === false && (i.scissor(P.x, P.y, P.z, P.w), Ht.copy(P));
  }
  function St(P) {
    Wt.equals(P) === false && (i.viewport(P.x, P.y, P.z, P.w), Wt.copy(P));
  }
  function Vt(P, _t) {
    let V = l.get(_t);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), l.set(_t, V));
    let K = V.get(P);
    K === void 0 && (K = i.getUniformBlockIndex(_t, P.name), V.set(P, K));
  }
  function Nt(P, _t) {
    const K = l.get(_t).get(P);
    o.get(_t) !== K && (i.uniformBlockBinding(_t, K, P.__bindingPointIndex), o.set(_t, K));
  }
  function te() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), c = {}, k = null, ht = {}, h = {}, u = /* @__PURE__ */ new WeakMap(), f = [], m = null, _ = false, x = null, d = null, p = null, A = null, S = null, E = null, I = null, R = new Bt(0, 0, 0), w = 0, U = false, J = null, g = null, y = null, G = null, B = null, Ht.set(0, 0, i.canvas.width, i.canvas.height), Wt.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), r.reset(), a.reset();
  }
  return { buffers: { color: s, depth: r, stencil: a }, enable: Mt, disable: ct, bindFramebuffer: Ct, drawBuffers: Rt, useProgram: It, setBlending: b, setMaterial: rt, setFlipSided: st, setCullFace: Q, setLineWidth: at, setPolygonOffset: bt, setScissorTest: mt, activeTexture: T, bindTexture: v, unbindTexture: N, compressedTexImage2D: X, compressedTexImage3D: Z, texImage2D: xt, texImage3D: Dt, updateUBOMapping: Vt, uniformBlockBinding: Nt, texStorage2D: Gt, texStorage3D: nt, texSubImage2D: Y, texSubImage3D: Et, compressedTexSubImage2D: ot, compressedTexSubImage3D: vt, scissor: Ut, viewport: St, reset: te };
}
function Jo(i, t, e, n) {
  const s = Em(n);
  switch (e) {
    case Al:
      return i * t;
    case wl:
      return i * t;
    case Rl:
      return i * t * 2;
    case Cl:
      return i * t / s.components * s.byteLength;
    case Na:
      return i * t / s.components * s.byteLength;
    case Pl:
      return i * t * 2 / s.components * s.byteLength;
    case Oa:
      return i * t * 2 / s.components * s.byteLength;
    case bl:
      return i * t * 3 / s.components * s.byteLength;
    case Ge:
      return i * t * 4 / s.components * s.byteLength;
    case Fa:
      return i * t * 4 / s.components * s.byteLength;
    case Cs:
    case Ps:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ls:
    case Ds:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case $r:
    case ta:
      return Math.max(i, 16) * Math.max(t, 8) / 4;
    case Jr:
    case Qr:
      return Math.max(i, 8) * Math.max(t, 8) / 2;
    case ea:
    case na:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case ia:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case sa:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ra:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case aa:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case oa:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case la:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case ca:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case ha:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case ua:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case fa:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case da:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case pa:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ma:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case _a:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case ga:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case Us:
    case va:
    case xa:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case Ll:
    case Ma:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case Sa:
    case ya:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Em(i) {
  switch (i) {
    case an:
    case yl:
      return { byteLength: 1, components: 1 };
    case Ui:
    case El:
    case Bi:
      return { byteLength: 2, components: 1 };
    case Ua:
    case Ia:
      return { byteLength: 2, components: 4 };
    case Nn:
    case Da:
    case sn:
      return { byteLength: 4, components: 1 };
    case Tl:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
function Tm(i, t, e, n, s, r, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new $(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const f = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function _(T, v) {
    return m ? new OffscreenCanvas(T, v) : Hs("canvas");
  }
  function x(T, v, N) {
    let X = 1;
    const Z = mt(T);
    if ((Z.width > N || Z.height > N) && (X = N / Math.max(Z.width, Z.height)), X < 1) if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
      const Y = Math.floor(X * Z.width), Et = Math.floor(X * Z.height);
      u === void 0 && (u = _(Y, Et));
      const ot = v ? _(Y, Et) : u;
      return ot.width = Y, ot.height = Et, ot.getContext("2d").drawImage(T, 0, 0, Y, Et), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + Y + "x" + Et + ")."), ot;
    } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), T;
    return T;
  }
  function d(T) {
    return T.generateMipmaps && T.minFilter !== Ae && T.minFilter !== ze;
  }
  function p(T) {
    i.generateMipmap(T);
  }
  function A(T, v, N, X, Z = false) {
    if (T !== null) {
      if (i[T] !== void 0) return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let Y = v;
    if (v === i.RED && (N === i.FLOAT && (Y = i.R32F), N === i.HALF_FLOAT && (Y = i.R16F), N === i.UNSIGNED_BYTE && (Y = i.R8)), v === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (Y = i.R8UI), N === i.UNSIGNED_SHORT && (Y = i.R16UI), N === i.UNSIGNED_INT && (Y = i.R32UI), N === i.BYTE && (Y = i.R8I), N === i.SHORT && (Y = i.R16I), N === i.INT && (Y = i.R32I)), v === i.RG && (N === i.FLOAT && (Y = i.RG32F), N === i.HALF_FLOAT && (Y = i.RG16F), N === i.UNSIGNED_BYTE && (Y = i.RG8)), v === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (Y = i.RG8UI), N === i.UNSIGNED_SHORT && (Y = i.RG16UI), N === i.UNSIGNED_INT && (Y = i.RG32UI), N === i.BYTE && (Y = i.RG8I), N === i.SHORT && (Y = i.RG16I), N === i.INT && (Y = i.RG32I)), v === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (Y = i.RGB8UI), N === i.UNSIGNED_SHORT && (Y = i.RGB16UI), N === i.UNSIGNED_INT && (Y = i.RGB32UI), N === i.BYTE && (Y = i.RGB8I), N === i.SHORT && (Y = i.RGB16I), N === i.INT && (Y = i.RGB32I)), v === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (Y = i.RGBA8UI), N === i.UNSIGNED_SHORT && (Y = i.RGBA16UI), N === i.UNSIGNED_INT && (Y = i.RGBA32UI), N === i.BYTE && (Y = i.RGBA8I), N === i.SHORT && (Y = i.RGBA16I), N === i.INT && (Y = i.RGBA32I)), v === i.RGB && N === i.UNSIGNED_INT_5_9_9_9_REV && (Y = i.RGB9_E5), v === i.RGBA) {
      const Et = Z ? Os : Zt.getTransfer(X);
      N === i.FLOAT && (Y = i.RGBA32F), N === i.HALF_FLOAT && (Y = i.RGBA16F), N === i.UNSIGNED_BYTE && (Y = Et === ne ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (Y = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (Y = i.RGB5_A1);
    }
    return (Y === i.R16F || Y === i.R32F || Y === i.RG16F || Y === i.RG32F || Y === i.RGBA16F || Y === i.RGBA32F) && t.get("EXT_color_buffer_float"), Y;
  }
  function S(T, v) {
    let N;
    return T ? v === null || v === Nn || v === _i ? N = i.DEPTH24_STENCIL8 : v === sn ? N = i.DEPTH32F_STENCIL8 : v === Ui && (N = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : v === null || v === Nn || v === _i ? N = i.DEPTH_COMPONENT24 : v === sn ? N = i.DEPTH_COMPONENT32F : v === Ui && (N = i.DEPTH_COMPONENT16), N;
  }
  function E(T, v) {
    return d(T) === true || T.isFramebufferTexture && T.minFilter !== Ae && T.minFilter !== ze ? Math.log2(Math.max(v.width, v.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? v.mipmaps.length : 1;
  }
  function I(T) {
    const v = T.target;
    v.removeEventListener("dispose", I), w(v), v.isVideoTexture && h.delete(v);
  }
  function R(T) {
    const v = T.target;
    v.removeEventListener("dispose", R), J(v);
  }
  function w(T) {
    const v = n.get(T);
    if (v.__webglInit === void 0) return;
    const N = T.source, X = f.get(N);
    if (X) {
      const Z = X[v.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && U(T), Object.keys(X).length === 0 && f.delete(N);
    }
    n.remove(T);
  }
  function U(T) {
    const v = n.get(T);
    i.deleteTexture(v.__webglTexture);
    const N = T.source, X = f.get(N);
    delete X[v.__cacheKey], a.memory.textures--;
  }
  function J(T) {
    const v = n.get(T);
    if (T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget) for (let X = 0; X < 6; X++) {
      if (Array.isArray(v.__webglFramebuffer[X])) for (let Z = 0; Z < v.__webglFramebuffer[X].length; Z++) i.deleteFramebuffer(v.__webglFramebuffer[X][Z]);
      else i.deleteFramebuffer(v.__webglFramebuffer[X]);
      v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer[X]);
    }
    else {
      if (Array.isArray(v.__webglFramebuffer)) for (let X = 0; X < v.__webglFramebuffer.length; X++) i.deleteFramebuffer(v.__webglFramebuffer[X]);
      else i.deleteFramebuffer(v.__webglFramebuffer);
      if (v.__webglDepthbuffer && i.deleteRenderbuffer(v.__webglDepthbuffer), v.__webglMultisampledFramebuffer && i.deleteFramebuffer(v.__webglMultisampledFramebuffer), v.__webglColorRenderbuffer) for (let X = 0; X < v.__webglColorRenderbuffer.length; X++) v.__webglColorRenderbuffer[X] && i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);
      v.__webglDepthRenderbuffer && i.deleteRenderbuffer(v.__webglDepthRenderbuffer);
    }
    const N = T.textures;
    for (let X = 0, Z = N.length; X < Z; X++) {
      const Y = n.get(N[X]);
      Y.__webglTexture && (i.deleteTexture(Y.__webglTexture), a.memory.textures--), n.remove(N[X]);
    }
    n.remove(T);
  }
  let g = 0;
  function y() {
    g = 0;
  }
  function G() {
    const T = g;
    return T >= s.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + s.maxTextures), g += 1, T;
  }
  function B(T) {
    const v = [];
    return v.push(T.wrapS), v.push(T.wrapT), v.push(T.wrapR || 0), v.push(T.magFilter), v.push(T.minFilter), v.push(T.anisotropy), v.push(T.internalFormat), v.push(T.format), v.push(T.type), v.push(T.generateMipmaps), v.push(T.premultiplyAlpha), v.push(T.flipY), v.push(T.unpackAlignment), v.push(T.colorSpace), v.join();
  }
  function H(T, v) {
    const N = n.get(T);
    if (T.isVideoTexture && at(T), T.isRenderTargetTexture === false && T.version > 0 && N.__version !== T.version) {
      const X = T.image;
      if (X === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (X.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Wt(N, T, v);
        return;
      }
    }
    e.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + v);
  }
  function j(T, v) {
    const N = n.get(T);
    if (T.version > 0 && N.__version !== T.version) {
      Wt(N, T, v);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + v);
  }
  function F(T, v) {
    const N = n.get(T);
    if (T.version > 0 && N.__version !== T.version) {
      Wt(N, T, v);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + v);
  }
  function tt(T, v) {
    const N = n.get(T);
    if (T.version > 0 && N.__version !== T.version) {
      W(N, T, v);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + v);
  }
  const k = { [Kr]: i.REPEAT, [Un]: i.CLAMP_TO_EDGE, [jr]: i.MIRRORED_REPEAT }, ht = { [Ae]: i.NEAREST, [qc]: i.NEAREST_MIPMAP_NEAREST, [Xi]: i.NEAREST_MIPMAP_LINEAR, [ze]: i.LINEAR, [tr]: i.LINEAR_MIPMAP_NEAREST, [In]: i.LINEAR_MIPMAP_LINEAR }, dt = { [Jc]: i.NEVER, [ih]: i.ALWAYS, [$c]: i.LESS, [Dl]: i.LEQUAL, [Qc]: i.EQUAL, [nh]: i.GEQUAL, [th]: i.GREATER, [eh]: i.NOTEQUAL };
  function pt(T, v) {
    if (v.type === sn && t.has("OES_texture_float_linear") === false && (v.magFilter === ze || v.magFilter === tr || v.magFilter === Xi || v.magFilter === In || v.minFilter === ze || v.minFilter === tr || v.minFilter === Xi || v.minFilter === In) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(T, i.TEXTURE_WRAP_S, k[v.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, k[v.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, k[v.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, ht[v.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, ht[v.minFilter]), v.compareFunction && (i.texParameteri(T, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(T, i.TEXTURE_COMPARE_FUNC, dt[v.compareFunction])), t.has("EXT_texture_filter_anisotropic") === true) {
      if (v.magFilter === Ae || v.minFilter !== Xi && v.minFilter !== In || v.type === sn && t.has("OES_texture_float_linear") === false) return;
      if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
        const N = t.get("EXT_texture_filter_anisotropic");
        i.texParameterf(T, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, s.getMaxAnisotropy())), n.get(v).__currentAnisotropy = v.anisotropy;
      }
    }
  }
  function Ht(T, v) {
    let N = false;
    T.__webglInit === void 0 && (T.__webglInit = true, v.addEventListener("dispose", I));
    const X = v.source;
    let Z = f.get(X);
    Z === void 0 && (Z = {}, f.set(X, Z));
    const Y = B(v);
    if (Y !== T.__cacheKey) {
      Z[Y] === void 0 && (Z[Y] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, N = true), Z[Y].usedTimes++;
      const Et = Z[T.__cacheKey];
      Et !== void 0 && (Z[T.__cacheKey].usedTimes--, Et.usedTimes === 0 && U(v)), T.__cacheKey = Y, T.__webglTexture = Z[Y].texture;
    }
    return N;
  }
  function Wt(T, v, N) {
    let X = i.TEXTURE_2D;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (X = i.TEXTURE_2D_ARRAY), v.isData3DTexture && (X = i.TEXTURE_3D);
    const Z = Ht(T, v), Y = v.source;
    e.bindTexture(X, T.__webglTexture, i.TEXTURE0 + N);
    const Et = n.get(Y);
    if (Y.version !== Et.__version || Z === true) {
      e.activeTexture(i.TEXTURE0 + N);
      const ot = Zt.getPrimaries(Zt.workingColorSpace), vt = v.colorSpace === _n ? null : Zt.getPrimaries(v.colorSpace), Gt = v.colorSpace === _n || ot === vt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Gt);
      let nt = x(v.image, false, s.maxTextureSize);
      nt = bt(v, nt);
      const xt = r.convert(v.format, v.colorSpace), Dt = r.convert(v.type);
      let Ut = A(v.internalFormat, xt, Dt, v.colorSpace, v.isVideoTexture);
      pt(X, v);
      let St;
      const Vt = v.mipmaps, Nt = v.isVideoTexture !== true, te = Et.__version === void 0 || Z === true, P = Y.dataReady, _t = E(v, nt);
      if (v.isDepthTexture) Ut = S(v.format === gi, v.type), te && (Nt ? e.texStorage2D(i.TEXTURE_2D, 1, Ut, nt.width, nt.height) : e.texImage2D(i.TEXTURE_2D, 0, Ut, nt.width, nt.height, 0, xt, Dt, null));
      else if (v.isDataTexture) if (Vt.length > 0) {
        Nt && te && e.texStorage2D(i.TEXTURE_2D, _t, Ut, Vt[0].width, Vt[0].height);
        for (let V = 0, K = Vt.length; V < K; V++) St = Vt[V], Nt ? P && e.texSubImage2D(i.TEXTURE_2D, V, 0, 0, St.width, St.height, xt, Dt, St.data) : e.texImage2D(i.TEXTURE_2D, V, Ut, St.width, St.height, 0, xt, Dt, St.data);
        v.generateMipmaps = false;
      } else Nt ? (te && e.texStorage2D(i.TEXTURE_2D, _t, Ut, nt.width, nt.height), P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, nt.width, nt.height, xt, Dt, nt.data)) : e.texImage2D(i.TEXTURE_2D, 0, Ut, nt.width, nt.height, 0, xt, Dt, nt.data);
      else if (v.isCompressedTexture) if (v.isCompressedArrayTexture) {
        Nt && te && e.texStorage3D(i.TEXTURE_2D_ARRAY, _t, Ut, Vt[0].width, Vt[0].height, nt.depth);
        for (let V = 0, K = Vt.length; V < K; V++) if (St = Vt[V], v.format !== Ge) if (xt !== null) if (Nt) {
          if (P) if (v.layerUpdates.size > 0) {
            const ut = Jo(St.width, St.height, v.format, v.type);
            for (const gt of v.layerUpdates) {
              const kt = St.data.subarray(gt * ut / St.data.BYTES_PER_ELEMENT, (gt + 1) * ut / St.data.BYTES_PER_ELEMENT);
              e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, gt, St.width, St.height, 1, xt, kt, 0, 0);
            }
            v.clearLayerUpdates();
          } else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, St.width, St.height, nt.depth, xt, St.data, 0, 0);
        } else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY, V, Ut, St.width, St.height, nt.depth, 0, St.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Nt ? P && e.texSubImage3D(i.TEXTURE_2D_ARRAY, V, 0, 0, 0, St.width, St.height, nt.depth, xt, Dt, St.data) : e.texImage3D(i.TEXTURE_2D_ARRAY, V, Ut, St.width, St.height, nt.depth, 0, xt, Dt, St.data);
      } else {
        Nt && te && e.texStorage2D(i.TEXTURE_2D, _t, Ut, Vt[0].width, Vt[0].height);
        for (let V = 0, K = Vt.length; V < K; V++) St = Vt[V], v.format !== Ge ? xt !== null ? Nt ? P && e.compressedTexSubImage2D(i.TEXTURE_2D, V, 0, 0, St.width, St.height, xt, St.data) : e.compressedTexImage2D(i.TEXTURE_2D, V, Ut, St.width, St.height, 0, St.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Nt ? P && e.texSubImage2D(i.TEXTURE_2D, V, 0, 0, St.width, St.height, xt, Dt, St.data) : e.texImage2D(i.TEXTURE_2D, V, Ut, St.width, St.height, 0, xt, Dt, St.data);
      }
      else if (v.isDataArrayTexture) if (Nt) {
        if (te && e.texStorage3D(i.TEXTURE_2D_ARRAY, _t, Ut, nt.width, nt.height, nt.depth), P) if (v.layerUpdates.size > 0) {
          const V = Jo(nt.width, nt.height, v.format, v.type);
          for (const K of v.layerUpdates) {
            const ut = nt.data.subarray(K * V / nt.data.BYTES_PER_ELEMENT, (K + 1) * V / nt.data.BYTES_PER_ELEMENT);
            e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, K, nt.width, nt.height, 1, xt, Dt, ut);
          }
          v.clearLayerUpdates();
        } else e.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, nt.width, nt.height, nt.depth, xt, Dt, nt.data);
      } else e.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ut, nt.width, nt.height, nt.depth, 0, xt, Dt, nt.data);
      else if (v.isData3DTexture) Nt ? (te && e.texStorage3D(i.TEXTURE_3D, _t, Ut, nt.width, nt.height, nt.depth), P && e.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, nt.width, nt.height, nt.depth, xt, Dt, nt.data)) : e.texImage3D(i.TEXTURE_3D, 0, Ut, nt.width, nt.height, nt.depth, 0, xt, Dt, nt.data);
      else if (v.isFramebufferTexture) {
        if (te) if (Nt) e.texStorage2D(i.TEXTURE_2D, _t, Ut, nt.width, nt.height);
        else {
          let V = nt.width, K = nt.height;
          for (let ut = 0; ut < _t; ut++) e.texImage2D(i.TEXTURE_2D, ut, Ut, V, K, 0, xt, Dt, null), V >>= 1, K >>= 1;
        }
      } else if (Vt.length > 0) {
        if (Nt && te) {
          const V = mt(Vt[0]);
          e.texStorage2D(i.TEXTURE_2D, _t, Ut, V.width, V.height);
        }
        for (let V = 0, K = Vt.length; V < K; V++) St = Vt[V], Nt ? P && e.texSubImage2D(i.TEXTURE_2D, V, 0, 0, xt, Dt, St) : e.texImage2D(i.TEXTURE_2D, V, Ut, xt, Dt, St);
        v.generateMipmaps = false;
      } else if (Nt) {
        if (te) {
          const V = mt(nt);
          e.texStorage2D(i.TEXTURE_2D, _t, Ut, V.width, V.height);
        }
        P && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, xt, Dt, nt);
      } else e.texImage2D(i.TEXTURE_2D, 0, Ut, xt, Dt, nt);
      d(v) && p(X), Et.__version = Y.version, v.onUpdate && v.onUpdate(v);
    }
    T.__version = v.version;
  }
  function W(T, v, N) {
    if (v.image.length !== 6) return;
    const X = Ht(T, v), Z = v.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + N);
    const Y = n.get(Z);
    if (Z.version !== Y.__version || X === true) {
      e.activeTexture(i.TEXTURE0 + N);
      const Et = Zt.getPrimaries(Zt.workingColorSpace), ot = v.colorSpace === _n ? null : Zt.getPrimaries(v.colorSpace), vt = v.colorSpace === _n || Et === ot ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, v.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, v.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt);
      const Gt = v.isCompressedTexture || v.image[0].isCompressedTexture, nt = v.image[0] && v.image[0].isDataTexture, xt = [];
      for (let K = 0; K < 6; K++) !Gt && !nt ? xt[K] = x(v.image[K], true, s.maxCubemapSize) : xt[K] = nt ? v.image[K].image : v.image[K], xt[K] = bt(v, xt[K]);
      const Dt = xt[0], Ut = r.convert(v.format, v.colorSpace), St = r.convert(v.type), Vt = A(v.internalFormat, Ut, St, v.colorSpace), Nt = v.isVideoTexture !== true, te = Y.__version === void 0 || X === true, P = Z.dataReady;
      let _t = E(v, Dt);
      pt(i.TEXTURE_CUBE_MAP, v);
      let V;
      if (Gt) {
        Nt && te && e.texStorage2D(i.TEXTURE_CUBE_MAP, _t, Vt, Dt.width, Dt.height);
        for (let K = 0; K < 6; K++) {
          V = xt[K].mipmaps;
          for (let ut = 0; ut < V.length; ut++) {
            const gt = V[ut];
            v.format !== Ge ? Ut !== null ? Nt ? P && e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, 0, 0, gt.width, gt.height, Ut, gt.data) : e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, Vt, gt.width, gt.height, 0, gt.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Nt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, 0, 0, gt.width, gt.height, Ut, St, gt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut, Vt, gt.width, gt.height, 0, Ut, St, gt.data);
          }
        }
      } else {
        if (V = v.mipmaps, Nt && te) {
          V.length > 0 && _t++;
          const K = mt(xt[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, _t, Vt, K.width, K.height);
        }
        for (let K = 0; K < 6; K++) if (nt) {
          Nt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, xt[K].width, xt[K].height, Ut, St, xt[K].data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Vt, xt[K].width, xt[K].height, 0, Ut, St, xt[K].data);
          for (let ut = 0; ut < V.length; ut++) {
            const kt = V[ut].image[K].image;
            Nt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, 0, 0, kt.width, kt.height, Ut, St, kt.data) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, Vt, kt.width, kt.height, 0, Ut, St, kt.data);
          }
        } else {
          Nt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Ut, St, xt[K]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, Vt, Ut, St, xt[K]);
          for (let ut = 0; ut < V.length; ut++) {
            const gt = V[ut];
            Nt ? P && e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, 0, 0, Ut, St, gt.image[K]) : e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + K, ut + 1, Vt, Ut, St, gt.image[K]);
          }
        }
      }
      d(v) && p(i.TEXTURE_CUBE_MAP), Y.__version = Z.version, v.onUpdate && v.onUpdate(v);
    }
    T.__version = v.version;
  }
  function et(T, v, N, X, Z, Y) {
    const Et = r.convert(N.format, N.colorSpace), ot = r.convert(N.type), vt = A(N.internalFormat, Et, ot, N.colorSpace);
    if (!n.get(v).__hasExternalTextures) {
      const nt = Math.max(1, v.width >> Y), xt = Math.max(1, v.height >> Y);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? e.texImage3D(Z, Y, vt, nt, xt, v.depth, 0, Et, ot, null) : e.texImage2D(Z, Y, vt, nt, xt, 0, Et, ot, null);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, T), Q(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, X, Z, n.get(N).__webglTexture, 0, st(v)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, X, Z, n.get(N).__webglTexture, Y), e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Mt(T, v, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), v.depthBuffer) {
      const X = v.depthTexture, Z = X && X.isDepthTexture ? X.type : null, Y = S(v.stencilBuffer, Z), Et = v.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ot = st(v);
      Q(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ot, Y, v.width, v.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ot, Y, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, Y, v.width, v.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, Et, i.RENDERBUFFER, T);
    } else {
      const X = v.textures;
      for (let Z = 0; Z < X.length; Z++) {
        const Y = X[Z], Et = r.convert(Y.format, Y.colorSpace), ot = r.convert(Y.type), vt = A(Y.internalFormat, Et, ot, Y.colorSpace), Gt = st(v);
        N && Q(v) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Gt, vt, v.width, v.height) : Q(v) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Gt, vt, v.width, v.height) : i.renderbufferStorage(i.RENDERBUFFER, vt, v.width, v.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ct(T, v) {
    if (v && v.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (e.bindFramebuffer(i.FRAMEBUFFER, T), !(v.depthTexture && v.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width, v.depthTexture.image.height = v.height, v.depthTexture.needsUpdate = true), H(v.depthTexture, 0);
    const X = n.get(v.depthTexture).__webglTexture, Z = st(v);
    if (v.depthTexture.format === hi) Q(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, X, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, X, 0);
    else if (v.depthTexture.format === gi) Q(v) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, X, 0, Z) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, X, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ct(T) {
    const v = n.get(T), N = T.isWebGLCubeRenderTarget === true;
    if (v.__boundDepthTexture !== T.depthTexture) {
      const X = T.depthTexture;
      if (v.__depthDisposeCallback && v.__depthDisposeCallback(), X) {
        const Z = () => {
          delete v.__boundDepthTexture, delete v.__depthDisposeCallback, X.removeEventListener("dispose", Z);
        };
        X.addEventListener("dispose", Z), v.__depthDisposeCallback = Z;
      }
      v.__boundDepthTexture = X;
    }
    if (T.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      ct(v.__webglFramebuffer, T);
    } else if (N) {
      v.__webglDepthbuffer = [];
      for (let X = 0; X < 6; X++) if (e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer[X]), v.__webglDepthbuffer[X] === void 0) v.__webglDepthbuffer[X] = i.createRenderbuffer(), Mt(v.__webglDepthbuffer[X], T, false);
      else {
        const Z = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Y = v.__webglDepthbuffer[X];
        i.bindRenderbuffer(i.RENDERBUFFER, Y), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, Y);
      }
    } else if (e.bindFramebuffer(i.FRAMEBUFFER, v.__webglFramebuffer), v.__webglDepthbuffer === void 0) v.__webglDepthbuffer = i.createRenderbuffer(), Mt(v.__webglDepthbuffer, T, false);
    else {
      const X = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Z = v.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, Z), i.framebufferRenderbuffer(i.FRAMEBUFFER, X, i.RENDERBUFFER, Z);
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Rt(T, v, N) {
    const X = n.get(T);
    v !== void 0 && et(X.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Ct(T);
  }
  function It(T) {
    const v = T.texture, N = n.get(T), X = n.get(v);
    T.addEventListener("dispose", R);
    const Z = T.textures, Y = T.isWebGLCubeRenderTarget === true, Et = Z.length > 1;
    if (Et || (X.__webglTexture === void 0 && (X.__webglTexture = i.createTexture()), X.__version = v.version, a.memory.textures++), Y) {
      N.__webglFramebuffer = [];
      for (let ot = 0; ot < 6; ot++) if (v.mipmaps && v.mipmaps.length > 0) {
        N.__webglFramebuffer[ot] = [];
        for (let vt = 0; vt < v.mipmaps.length; vt++) N.__webglFramebuffer[ot][vt] = i.createFramebuffer();
      } else N.__webglFramebuffer[ot] = i.createFramebuffer();
    } else {
      if (v.mipmaps && v.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let ot = 0; ot < v.mipmaps.length; ot++) N.__webglFramebuffer[ot] = i.createFramebuffer();
      } else N.__webglFramebuffer = i.createFramebuffer();
      if (Et) for (let ot = 0, vt = Z.length; ot < vt; ot++) {
        const Gt = n.get(Z[ot]);
        Gt.__webglTexture === void 0 && (Gt.__webglTexture = i.createTexture(), a.memory.textures++);
      }
      if (T.samples > 0 && Q(T) === false) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], e.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ot = 0; ot < Z.length; ot++) {
          const vt = Z[ot];
          N.__webglColorRenderbuffer[ot] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ot]);
          const Gt = r.convert(vt.format, vt.colorSpace), nt = r.convert(vt.type), xt = A(vt.internalFormat, Gt, nt, vt.colorSpace, T.isXRRenderTarget === true), Dt = st(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Dt, xt, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ot, i.RENDERBUFFER, N.__webglColorRenderbuffer[ot]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), Mt(N.__webglDepthRenderbuffer, T, true)), e.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      e.bindTexture(i.TEXTURE_CUBE_MAP, X.__webglTexture), pt(i.TEXTURE_CUBE_MAP, v);
      for (let ot = 0; ot < 6; ot++) if (v.mipmaps && v.mipmaps.length > 0) for (let vt = 0; vt < v.mipmaps.length; vt++) et(N.__webglFramebuffer[ot][vt], T, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, vt);
      else et(N.__webglFramebuffer[ot], T, v, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ot, 0);
      d(v) && p(i.TEXTURE_CUBE_MAP), e.unbindTexture();
    } else if (Et) {
      for (let ot = 0, vt = Z.length; ot < vt; ot++) {
        const Gt = Z[ot], nt = n.get(Gt);
        e.bindTexture(i.TEXTURE_2D, nt.__webglTexture), pt(i.TEXTURE_2D, Gt), et(N.__webglFramebuffer, T, Gt, i.COLOR_ATTACHMENT0 + ot, i.TEXTURE_2D, 0), d(Gt) && p(i.TEXTURE_2D);
      }
      e.unbindTexture();
    } else {
      let ot = i.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ot = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), e.bindTexture(ot, X.__webglTexture), pt(ot, v), v.mipmaps && v.mipmaps.length > 0) for (let vt = 0; vt < v.mipmaps.length; vt++) et(N.__webglFramebuffer[vt], T, v, i.COLOR_ATTACHMENT0, ot, vt);
      else et(N.__webglFramebuffer, T, v, i.COLOR_ATTACHMENT0, ot, 0);
      d(v) && p(ot), e.unbindTexture();
    }
    T.depthBuffer && Ct(T);
  }
  function zt(T) {
    const v = T.textures;
    for (let N = 0, X = v.length; N < X; N++) {
      const Z = v[N];
      if (d(Z)) {
        const Y = T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, Et = n.get(Z).__webglTexture;
        e.bindTexture(Y, Et), p(Y), e.unbindTexture();
      }
    }
  }
  const q = [], b = [];
  function rt(T) {
    if (T.samples > 0) {
      if (Q(T) === false) {
        const v = T.textures, N = T.width, X = T.height;
        let Z = i.COLOR_BUFFER_BIT;
        const Y = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Et = n.get(T), ot = v.length > 1;
        if (ot) for (let vt = 0; vt < v.length; vt++) e.bindFramebuffer(i.FRAMEBUFFER, Et.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.RENDERBUFFER, null), e.bindFramebuffer(i.FRAMEBUFFER, Et.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.TEXTURE_2D, null, 0);
        e.bindFramebuffer(i.READ_FRAMEBUFFER, Et.__webglMultisampledFramebuffer), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Et.__webglFramebuffer);
        for (let vt = 0; vt < v.length; vt++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), ot) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Et.__webglColorRenderbuffer[vt]);
            const Gt = n.get(v[vt]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Gt, 0);
          }
          i.blitFramebuffer(0, 0, N, X, 0, 0, N, X, Z, i.NEAREST), l === true && (q.length = 0, b.length = 0, q.push(i.COLOR_ATTACHMENT0 + vt), T.depthBuffer && T.resolveDepthBuffer === false && (q.push(Y), b.push(Y), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, b)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, q));
        }
        if (e.bindFramebuffer(i.READ_FRAMEBUFFER, null), e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ot) for (let vt = 0; vt < v.length; vt++) {
          e.bindFramebuffer(i.FRAMEBUFFER, Et.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.RENDERBUFFER, Et.__webglColorRenderbuffer[vt]);
          const Gt = n.get(v[vt]).__webglTexture;
          e.bindFramebuffer(i.FRAMEBUFFER, Et.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + vt, i.TEXTURE_2D, Gt, 0);
        }
        e.bindFramebuffer(i.DRAW_FRAMEBUFFER, Et.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === false && l) {
        const v = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [v]);
      }
    }
  }
  function st(T) {
    return Math.min(s.maxSamples, T.samples);
  }
  function Q(T) {
    const v = n.get(T);
    return T.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === true && v.__useRenderToTexture !== false;
  }
  function at(T) {
    const v = a.render.frame;
    h.get(T) !== v && (h.set(T, v), T.update());
  }
  function bt(T, v) {
    const N = T.colorSpace, X = T.format, Z = T.type;
    return T.isCompressedTexture === true || T.isVideoTexture === true || N !== yn && N !== _n && (Zt.getTransfer(N) === ne ? (X !== Ge || Z !== an) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), v;
  }
  function mt(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = y, this.setTexture2D = H, this.setTexture2DArray = j, this.setTexture3D = F, this.setTextureCube = tt, this.rebindTextures = Rt, this.setupRenderTarget = It, this.updateRenderTargetMipmap = zt, this.updateMultisampleRenderTarget = rt, this.setupDepthRenderbuffer = Ct, this.setupFrameBufferTexture = et, this.useMultisampledRTT = Q;
}
function Am(i, t) {
  function e(n, s = _n) {
    let r;
    const a = Zt.getTransfer(s);
    if (n === an) return i.UNSIGNED_BYTE;
    if (n === Ua) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ia) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Tl) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === yl) return i.BYTE;
    if (n === El) return i.SHORT;
    if (n === Ui) return i.UNSIGNED_SHORT;
    if (n === Da) return i.INT;
    if (n === Nn) return i.UNSIGNED_INT;
    if (n === sn) return i.FLOAT;
    if (n === Bi) return i.HALF_FLOAT;
    if (n === Al) return i.ALPHA;
    if (n === bl) return i.RGB;
    if (n === Ge) return i.RGBA;
    if (n === wl) return i.LUMINANCE;
    if (n === Rl) return i.LUMINANCE_ALPHA;
    if (n === hi) return i.DEPTH_COMPONENT;
    if (n === gi) return i.DEPTH_STENCIL;
    if (n === Cl) return i.RED;
    if (n === Na) return i.RED_INTEGER;
    if (n === Pl) return i.RG;
    if (n === Oa) return i.RG_INTEGER;
    if (n === Fa) return i.RGBA_INTEGER;
    if (n === Cs || n === Ps || n === Ls || n === Ds) if (a === ne) if (r = t.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === Cs) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Ps) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Ls) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === Ds) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = t.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === Cs) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Ps) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Ls) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === Ds) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === Jr || n === $r || n === Qr || n === ta) if (r = t.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === Jr) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === $r) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === Qr) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === ta) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === ea || n === na || n === ia) if (r = t.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === ea || n === na) return a === ne ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === ia) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === sa || n === ra || n === aa || n === oa || n === la || n === ca || n === ha || n === ua || n === fa || n === da || n === pa || n === ma || n === _a || n === ga) if (r = t.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === sa) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === ra) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === aa) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === oa) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === la) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === ca) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === ha) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === ua) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === fa) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === da) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === pa) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === ma) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === _a) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === ga) return a === ne ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Us || n === va || n === xa) if (r = t.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === Us) return a === ne ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === va) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === xa) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === Ll || n === Ma || n === Sa || n === ya) if (r = t.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === Us) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Ma) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Sa) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === ya) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === _i ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
class bm extends Be {
  constructor(t = []) {
    super(), this.isArrayCamera = true, this.cameras = t;
  }
}
class fs extends ce {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const wm = { type: "move" };
class Rr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new fs(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new fs(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new C(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new C()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new fs(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new C(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new C()), this._grip;
  }
  dispatchEvent(t) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(t), this._grip !== null && this._grip.dispatchEvent(t), this._hand !== null && this._hand.dispatchEvent(t), this;
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return this.dispatchEvent({ type: "connected", data: t }), this;
  }
  disconnect(t) {
    return this.dispatchEvent({ type: "disconnected", data: t }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(t, e, n) {
    let s = null, r = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = true;
        for (const x of t.hand.values()) {
          const d = e.getJointPose(x, n), p = this._getHandJoint(c, x);
          d !== null && (p.matrix.fromArray(d.transform.matrix), p.matrix.decompose(p.position, p.rotation, p.scale), p.matrixWorldNeedsUpdate = true, p.jointRadius = d.radius), p.visible = d !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], f = h.position.distanceTo(u.position), m = 0.02, _ = 5e-3;
        c.inputState.pinching && f > m + _ ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t.handedness, target: this })) : !c.inputState.pinching && f <= m - _ && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t.handedness, target: this }));
      } else l !== null && t.gripSpace && (r = e.getPose(t.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (s = e.getPose(t.targetRaySpace, n), s === null && r !== null && (s = r), s !== null && (o.matrix.fromArray(s.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, s.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(s.linearVelocity)) : o.hasLinearVelocity = false, s.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(s.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(wm)));
    }
    return o !== null && (o.visible = s !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new fs();
      n.matrixAutoUpdate = false, n.visible = false, t.joints[e.jointName] = n, t.add(n);
    }
    return t.joints[e.jointName];
  }
}
const Rm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Cm = `
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
class Pm {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(t, e, n) {
    if (this.texture === null) {
      const s = new ge(), r = t.properties.get(s);
      r.__webglTexture = e.texture, (e.depthNear != n.depthNear || e.depthFar != n.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = s;
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport, n = new Sn({ vertexShader: Rm, fragmentShader: Cm, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
      this.mesh = new Ye(new Ys(20, 20), n);
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
class Lm extends zn {
  constructor(t, e) {
    super();
    const n = this;
    let s = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, f = null, m = null, _ = null;
    const x = new Pm(), d = e.getContextAttributes();
    let p = null, A = null;
    const S = [], E = [], I = new $();
    let R = null;
    const w = new Be();
    w.layers.enable(1), w.viewport = new re();
    const U = new Be();
    U.layers.enable(2), U.viewport = new re();
    const J = [w, U], g = new bm();
    g.layers.enable(1), g.layers.enable(2);
    let y = null, G = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(W) {
      let et = S[W];
      return et === void 0 && (et = new Rr(), S[W] = et), et.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let et = S[W];
      return et === void 0 && (et = new Rr(), S[W] = et), et.getGripSpace();
    }, this.getHand = function(W) {
      let et = S[W];
      return et === void 0 && (et = new Rr(), S[W] = et), et.getHandSpace();
    };
    function B(W) {
      const et = E.indexOf(W.inputSource);
      if (et === -1) return;
      const Mt = S[et];
      Mt !== void 0 && (Mt.update(W.inputSource, W.frame, c || a), Mt.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function H() {
      s.removeEventListener("select", B), s.removeEventListener("selectstart", B), s.removeEventListener("selectend", B), s.removeEventListener("squeeze", B), s.removeEventListener("squeezestart", B), s.removeEventListener("squeezeend", B), s.removeEventListener("end", H), s.removeEventListener("inputsourceschange", j);
      for (let W = 0; W < S.length; W++) {
        const et = E[W];
        et !== null && (E[W] = null, S[W].disconnect(et));
      }
      y = null, G = null, x.reset(), t.setRenderTarget(p), m = null, f = null, u = null, s = null, A = null, Wt.stop(), n.isPresenting = false, t.setPixelRatio(R), t.setSize(I.width, I.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      r = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return f !== null ? f : m;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return s;
    }, this.setSession = async function(W) {
      if (s = W, s !== null) {
        if (p = t.getRenderTarget(), s.addEventListener("select", B), s.addEventListener("selectstart", B), s.addEventListener("selectend", B), s.addEventListener("squeeze", B), s.addEventListener("squeezestart", B), s.addEventListener("squeezeend", B), s.addEventListener("end", H), s.addEventListener("inputsourceschange", j), d.xrCompatible !== true && await e.makeXRCompatible(), R = t.getPixelRatio(), t.getSize(I), s.renderState.layers === void 0) {
          const et = { antialias: d.antialias, alpha: true, depth: d.depth, stencil: d.stencil, framebufferScaleFactor: r };
          m = new XRWebGLLayer(s, e, et), s.updateRenderState({ baseLayer: m }), t.setPixelRatio(1), t.setSize(m.framebufferWidth, m.framebufferHeight, false), A = new On(m.framebufferWidth, m.framebufferHeight, { format: Ge, type: an, colorSpace: t.outputColorSpace, stencilBuffer: d.stencil });
        } else {
          let et = null, Mt = null, ct = null;
          d.depth && (ct = d.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, et = d.stencil ? gi : hi, Mt = d.stencil ? _i : Nn);
          const Ct = { colorFormat: e.RGBA8, depthFormat: ct, scaleFactor: r };
          u = new XRWebGLBinding(s, e), f = u.createProjectionLayer(Ct), s.updateRenderState({ layers: [f] }), t.setPixelRatio(1), t.setSize(f.textureWidth, f.textureHeight, false), A = new On(f.textureWidth, f.textureHeight, { format: Ge, type: an, depthTexture: new Wl(f.textureWidth, f.textureHeight, Mt, void 0, void 0, void 0, void 0, void 0, void 0, et), stencilBuffer: d.stencil, colorSpace: t.outputColorSpace, samples: d.antialias ? 4 : 0, resolveDepthBuffer: f.ignoreDepthValues === false });
        }
        A.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await s.requestReferenceSpace(o), Wt.setContext(s), Wt.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (s !== null) return s.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return x.getDepthTexture();
    };
    function j(W) {
      for (let et = 0; et < W.removed.length; et++) {
        const Mt = W.removed[et], ct = E.indexOf(Mt);
        ct >= 0 && (E[ct] = null, S[ct].disconnect(Mt));
      }
      for (let et = 0; et < W.added.length; et++) {
        const Mt = W.added[et];
        let ct = E.indexOf(Mt);
        if (ct === -1) {
          for (let Rt = 0; Rt < S.length; Rt++) if (Rt >= E.length) {
            E.push(Mt), ct = Rt;
            break;
          } else if (E[Rt] === null) {
            E[Rt] = Mt, ct = Rt;
            break;
          }
          if (ct === -1) break;
        }
        const Ct = S[ct];
        Ct && Ct.connect(Mt);
      }
    }
    const F = new C(), tt = new C();
    function k(W, et, Mt) {
      F.setFromMatrixPosition(et.matrixWorld), tt.setFromMatrixPosition(Mt.matrixWorld);
      const ct = F.distanceTo(tt), Ct = et.projectionMatrix.elements, Rt = Mt.projectionMatrix.elements, It = Ct[14] / (Ct[10] - 1), zt = Ct[14] / (Ct[10] + 1), q = (Ct[9] + 1) / Ct[5], b = (Ct[9] - 1) / Ct[5], rt = (Ct[8] - 1) / Ct[0], st = (Rt[8] + 1) / Rt[0], Q = It * rt, at = It * st, bt = ct / (-rt + st), mt = bt * -rt;
      if (et.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(mt), W.translateZ(bt), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), Ct[10] === -1) W.projectionMatrix.copy(et.projectionMatrix), W.projectionMatrixInverse.copy(et.projectionMatrixInverse);
      else {
        const T = It + bt, v = zt + bt, N = Q - mt, X = at + (ct - mt), Z = q * zt / v * T, Y = b * zt / v * T;
        W.projectionMatrix.makePerspective(N, X, Z, Y, T, v), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
      }
    }
    function ht(W, et) {
      et === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(et.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (s === null) return;
      let et = W.near, Mt = W.far;
      x.texture !== null && (x.depthNear > 0 && (et = x.depthNear), x.depthFar > 0 && (Mt = x.depthFar)), g.near = U.near = w.near = et, g.far = U.far = w.far = Mt, (y !== g.near || G !== g.far) && (s.updateRenderState({ depthNear: g.near, depthFar: g.far }), y = g.near, G = g.far);
      const ct = W.parent, Ct = g.cameras;
      ht(g, ct);
      for (let Rt = 0; Rt < Ct.length; Rt++) ht(Ct[Rt], ct);
      Ct.length === 2 ? k(g, w, U) : g.projectionMatrix.copy(w.projectionMatrix), dt(W, g, ct);
    };
    function dt(W, et, Mt) {
      Mt === null ? W.matrix.copy(et.matrixWorld) : (W.matrix.copy(Mt.matrixWorld), W.matrix.invert(), W.matrix.multiply(et.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(true), W.projectionMatrix.copy(et.projectionMatrix), W.projectionMatrixInverse.copy(et.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = Ii * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return g;
    }, this.getFoveation = function() {
      if (!(f === null && m === null)) return l;
    }, this.setFoveation = function(W) {
      l = W, f !== null && (f.fixedFoveation = W), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return x.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return x.getMesh(g);
    };
    let pt = null;
    function Ht(W, et) {
      if (h = et.getViewerPose(c || a), _ = et, h !== null) {
        const Mt = h.views;
        m !== null && (t.setRenderTargetFramebuffer(A, m.framebuffer), t.setRenderTarget(A));
        let ct = false;
        Mt.length !== g.cameras.length && (g.cameras.length = 0, ct = true);
        for (let Rt = 0; Rt < Mt.length; Rt++) {
          const It = Mt[Rt];
          let zt = null;
          if (m !== null) zt = m.getViewport(It);
          else {
            const b = u.getViewSubImage(f, It);
            zt = b.viewport, Rt === 0 && (t.setRenderTargetTextures(A, b.colorTexture, f.ignoreDepthValues ? void 0 : b.depthStencilTexture), t.setRenderTarget(A));
          }
          let q = J[Rt];
          q === void 0 && (q = new Be(), q.layers.enable(Rt), q.viewport = new re(), J[Rt] = q), q.matrix.fromArray(It.transform.matrix), q.matrix.decompose(q.position, q.quaternion, q.scale), q.projectionMatrix.fromArray(It.projectionMatrix), q.projectionMatrixInverse.copy(q.projectionMatrix).invert(), q.viewport.set(zt.x, zt.y, zt.width, zt.height), Rt === 0 && (g.matrix.copy(q.matrix), g.matrix.decompose(g.position, g.quaternion, g.scale)), ct === true && g.cameras.push(q);
        }
        const Ct = s.enabledFeatures;
        if (Ct && Ct.includes("depth-sensing")) {
          const Rt = u.getDepthInformation(Mt[0]);
          Rt && Rt.isValid && Rt.texture && x.init(t, Rt, s.renderState);
        }
      }
      for (let Mt = 0; Mt < S.length; Mt++) {
        const ct = E[Mt], Ct = S[Mt];
        ct !== null && Ct !== void 0 && Ct.update(ct, et, c || a);
      }
      pt && pt(W, et), et.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: et }), _ = null;
    }
    const Wt = new Vl();
    Wt.setAnimationLoop(Ht), this.setAnimationLoop = function(W) {
      pt = W;
    }, this.dispose = function() {
    };
  }
}
const Cn = new ke(), Dm = new Qt();
function Um(i, t) {
  function e(d, p) {
    d.matrixAutoUpdate === true && d.updateMatrix(), p.value.copy(d.matrix);
  }
  function n(d, p) {
    p.color.getRGB(d.fogColor.value, zl(i)), p.isFog ? (d.fogNear.value = p.near, d.fogFar.value = p.far) : p.isFogExp2 && (d.fogDensity.value = p.density);
  }
  function s(d, p, A, S, E) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial ? r(d, p) : p.isMeshToonMaterial ? (r(d, p), u(d, p)) : p.isMeshPhongMaterial ? (r(d, p), h(d, p)) : p.isMeshStandardMaterial ? (r(d, p), f(d, p), p.isMeshPhysicalMaterial && m(d, p, E)) : p.isMeshMatcapMaterial ? (r(d, p), _(d, p)) : p.isMeshDepthMaterial ? r(d, p) : p.isMeshDistanceMaterial ? (r(d, p), x(d, p)) : p.isMeshNormalMaterial ? r(d, p) : p.isLineBasicMaterial ? (a(d, p), p.isLineDashedMaterial && o(d, p)) : p.isPointsMaterial ? l(d, p, A, S) : p.isSpriteMaterial ? c(d, p) : p.isShadowMaterial ? (d.color.value.copy(p.color), d.opacity.value = p.opacity) : p.isShaderMaterial && (p.uniformsNeedUpdate = false);
  }
  function r(d, p) {
    d.opacity.value = p.opacity, p.color && d.diffuse.value.copy(p.color), p.emissive && d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity), p.map && (d.map.value = p.map, e(p.map, d.mapTransform)), p.alphaMap && (d.alphaMap.value = p.alphaMap, e(p.alphaMap, d.alphaMapTransform)), p.bumpMap && (d.bumpMap.value = p.bumpMap, e(p.bumpMap, d.bumpMapTransform), d.bumpScale.value = p.bumpScale, p.side === be && (d.bumpScale.value *= -1)), p.normalMap && (d.normalMap.value = p.normalMap, e(p.normalMap, d.normalMapTransform), d.normalScale.value.copy(p.normalScale), p.side === be && d.normalScale.value.negate()), p.displacementMap && (d.displacementMap.value = p.displacementMap, e(p.displacementMap, d.displacementMapTransform), d.displacementScale.value = p.displacementScale, d.displacementBias.value = p.displacementBias), p.emissiveMap && (d.emissiveMap.value = p.emissiveMap, e(p.emissiveMap, d.emissiveMapTransform)), p.specularMap && (d.specularMap.value = p.specularMap, e(p.specularMap, d.specularMapTransform)), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    const A = t.get(p), S = A.envMap, E = A.envMapRotation;
    S && (d.envMap.value = S, Cn.copy(E), Cn.x *= -1, Cn.y *= -1, Cn.z *= -1, S.isCubeTexture && S.isRenderTargetTexture === false && (Cn.y *= -1, Cn.z *= -1), d.envMapRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Cn)), d.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === false ? -1 : 1, d.reflectivity.value = p.reflectivity, d.ior.value = p.ior, d.refractionRatio.value = p.refractionRatio), p.lightMap && (d.lightMap.value = p.lightMap, d.lightMapIntensity.value = p.lightMapIntensity, e(p.lightMap, d.lightMapTransform)), p.aoMap && (d.aoMap.value = p.aoMap, d.aoMapIntensity.value = p.aoMapIntensity, e(p.aoMap, d.aoMapTransform));
  }
  function a(d, p) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, p.map && (d.map.value = p.map, e(p.map, d.mapTransform));
  }
  function o(d, p) {
    d.dashSize.value = p.dashSize, d.totalSize.value = p.dashSize + p.gapSize, d.scale.value = p.scale;
  }
  function l(d, p, A, S) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, d.size.value = p.size * A, d.scale.value = S * 0.5, p.map && (d.map.value = p.map, e(p.map, d.uvTransform)), p.alphaMap && (d.alphaMap.value = p.alphaMap, e(p.alphaMap, d.alphaMapTransform)), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
  }
  function c(d, p) {
    d.diffuse.value.copy(p.color), d.opacity.value = p.opacity, d.rotation.value = p.rotation, p.map && (d.map.value = p.map, e(p.map, d.mapTransform)), p.alphaMap && (d.alphaMap.value = p.alphaMap, e(p.alphaMap, d.alphaMapTransform)), p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
  }
  function h(d, p) {
    d.specular.value.copy(p.specular), d.shininess.value = Math.max(p.shininess, 1e-4);
  }
  function u(d, p) {
    p.gradientMap && (d.gradientMap.value = p.gradientMap);
  }
  function f(d, p) {
    d.metalness.value = p.metalness, p.metalnessMap && (d.metalnessMap.value = p.metalnessMap, e(p.metalnessMap, d.metalnessMapTransform)), d.roughness.value = p.roughness, p.roughnessMap && (d.roughnessMap.value = p.roughnessMap, e(p.roughnessMap, d.roughnessMapTransform)), p.envMap && (d.envMapIntensity.value = p.envMapIntensity);
  }
  function m(d, p, A) {
    d.ior.value = p.ior, p.sheen > 0 && (d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen), d.sheenRoughness.value = p.sheenRoughness, p.sheenColorMap && (d.sheenColorMap.value = p.sheenColorMap, e(p.sheenColorMap, d.sheenColorMapTransform)), p.sheenRoughnessMap && (d.sheenRoughnessMap.value = p.sheenRoughnessMap, e(p.sheenRoughnessMap, d.sheenRoughnessMapTransform))), p.clearcoat > 0 && (d.clearcoat.value = p.clearcoat, d.clearcoatRoughness.value = p.clearcoatRoughness, p.clearcoatMap && (d.clearcoatMap.value = p.clearcoatMap, e(p.clearcoatMap, d.clearcoatMapTransform)), p.clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap, e(p.clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), p.clearcoatNormalMap && (d.clearcoatNormalMap.value = p.clearcoatNormalMap, e(p.clearcoatNormalMap, d.clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale), p.side === be && d.clearcoatNormalScale.value.negate())), p.dispersion > 0 && (d.dispersion.value = p.dispersion), p.iridescence > 0 && (d.iridescence.value = p.iridescence, d.iridescenceIOR.value = p.iridescenceIOR, d.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0], d.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1], p.iridescenceMap && (d.iridescenceMap.value = p.iridescenceMap, e(p.iridescenceMap, d.iridescenceMapTransform)), p.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = p.iridescenceThicknessMap, e(p.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), p.transmission > 0 && (d.transmission.value = p.transmission, d.transmissionSamplerMap.value = A.texture, d.transmissionSamplerSize.value.set(A.width, A.height), p.transmissionMap && (d.transmissionMap.value = p.transmissionMap, e(p.transmissionMap, d.transmissionMapTransform)), d.thickness.value = p.thickness, p.thicknessMap && (d.thicknessMap.value = p.thicknessMap, e(p.thicknessMap, d.thicknessMapTransform)), d.attenuationDistance.value = p.attenuationDistance, d.attenuationColor.value.copy(p.attenuationColor)), p.anisotropy > 0 && (d.anisotropyVector.value.set(p.anisotropy * Math.cos(p.anisotropyRotation), p.anisotropy * Math.sin(p.anisotropyRotation)), p.anisotropyMap && (d.anisotropyMap.value = p.anisotropyMap, e(p.anisotropyMap, d.anisotropyMapTransform))), d.specularIntensity.value = p.specularIntensity, d.specularColor.value.copy(p.specularColor), p.specularColorMap && (d.specularColorMap.value = p.specularColorMap, e(p.specularColorMap, d.specularColorMapTransform)), p.specularIntensityMap && (d.specularIntensityMap.value = p.specularIntensityMap, e(p.specularIntensityMap, d.specularIntensityMapTransform));
  }
  function _(d, p) {
    p.matcap && (d.matcap.value = p.matcap);
  }
  function x(d, p) {
    const A = t.get(p).light;
    d.referencePosition.value.setFromMatrixPosition(A.matrixWorld), d.nearDistance.value = A.shadow.camera.near, d.farDistance.value = A.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function Im(i, t, e, n) {
  let s = {}, r = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, S) {
    const E = S.program;
    n.uniformBlockBinding(A, E);
  }
  function c(A, S) {
    let E = s[A.id];
    E === void 0 && (_(A), E = h(A), s[A.id] = E, A.addEventListener("dispose", d));
    const I = S.program;
    n.updateUBOMapping(A, I);
    const R = t.render.frame;
    r[A.id] !== R && (f(A), r[A.id] = R);
  }
  function h(A) {
    const S = u();
    A.__bindingPointIndex = S;
    const E = i.createBuffer(), I = A.__size, R = A.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, E), i.bufferData(i.UNIFORM_BUFFER, I, R), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, S, E), E;
  }
  function u() {
    for (let A = 0; A < o; A++) if (a.indexOf(A) === -1) return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(A) {
    const S = s[A.id], E = A.uniforms, I = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, S);
    for (let R = 0, w = E.length; R < w; R++) {
      const U = Array.isArray(E[R]) ? E[R] : [E[R]];
      for (let J = 0, g = U.length; J < g; J++) {
        const y = U[J];
        if (m(y, R, J, I) === true) {
          const G = y.__offset, B = Array.isArray(y.value) ? y.value : [y.value];
          let H = 0;
          for (let j = 0; j < B.length; j++) {
            const F = B[j], tt = x(F);
            typeof F == "number" || typeof F == "boolean" ? (y.__data[0] = F, i.bufferSubData(i.UNIFORM_BUFFER, G + H, y.__data)) : F.isMatrix3 ? (y.__data[0] = F.elements[0], y.__data[1] = F.elements[1], y.__data[2] = F.elements[2], y.__data[3] = 0, y.__data[4] = F.elements[3], y.__data[5] = F.elements[4], y.__data[6] = F.elements[5], y.__data[7] = 0, y.__data[8] = F.elements[6], y.__data[9] = F.elements[7], y.__data[10] = F.elements[8], y.__data[11] = 0) : (F.toArray(y.__data, H), H += tt.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, G, y.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(A, S, E, I) {
    const R = A.value, w = S + "_" + E;
    if (I[w] === void 0) return typeof R == "number" || typeof R == "boolean" ? I[w] = R : I[w] = R.clone(), true;
    {
      const U = I[w];
      if (typeof R == "number" || typeof R == "boolean") {
        if (U !== R) return I[w] = R, true;
      } else if (U.equals(R) === false) return U.copy(R), true;
    }
    return false;
  }
  function _(A) {
    const S = A.uniforms;
    let E = 0;
    const I = 16;
    for (let w = 0, U = S.length; w < U; w++) {
      const J = Array.isArray(S[w]) ? S[w] : [S[w]];
      for (let g = 0, y = J.length; g < y; g++) {
        const G = J[g], B = Array.isArray(G.value) ? G.value : [G.value];
        for (let H = 0, j = B.length; H < j; H++) {
          const F = B[H], tt = x(F), k = E % I, ht = k % tt.boundary, dt = k + ht;
          E += ht, dt !== 0 && I - dt < tt.storage && (E += I - dt), G.__data = new Float32Array(tt.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = E, E += tt.storage;
        }
      }
    }
    const R = E % I;
    return R > 0 && (E += I - R), A.__size = E, A.__cache = {}, this;
  }
  function x(A) {
    const S = { boundary: 0, storage: 0 };
    return typeof A == "number" || typeof A == "boolean" ? (S.boundary = 4, S.storage = 4) : A.isVector2 ? (S.boundary = 8, S.storage = 8) : A.isVector3 || A.isColor ? (S.boundary = 16, S.storage = 12) : A.isVector4 ? (S.boundary = 16, S.storage = 16) : A.isMatrix3 ? (S.boundary = 48, S.storage = 48) : A.isMatrix4 ? (S.boundary = 64, S.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), S;
  }
  function d(A) {
    const S = A.target;
    S.removeEventListener("dispose", d);
    const E = a.indexOf(S.__bindingPointIndex);
    a.splice(E, 1), i.deleteBuffer(s[S.id]), delete s[S.id], delete r[S.id];
  }
  function p() {
    for (const A in s) i.deleteBuffer(s[A]);
    a = [], s = {}, r = {};
  }
  return { bind: l, update: c, dispose: p };
}
class F_ {
  constructor(t = {}) {
    const { canvas: e = Sh(), context: n = null, depth: s = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false } = t;
    this.isWebGLRenderer = true;
    let f;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      f = n.getContextAttributes().alpha;
    } else f = a;
    const m = new Uint32Array(4), _ = new Int32Array(4);
    let x = null, d = null;
    const p = [], A = [];
    this.domElement = e, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = We, this.toneMapping = vn, this.toneMappingExposure = 1;
    const S = this;
    let E = false, I = 0, R = 0, w = null, U = -1, J = null;
    const g = new re(), y = new re();
    let G = null;
    const B = new Bt(0);
    let H = 0, j = e.width, F = e.height, tt = 1, k = null, ht = null;
    const dt = new re(0, 0, j, F), pt = new re(0, 0, j, F);
    let Ht = false;
    const Wt = new ka();
    let W = false, et = false;
    const Mt = new Qt(), ct = new Qt(), Ct = new C(), Rt = new re(), It = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let zt = false;
    function q() {
      return w === null ? tt : 1;
    }
    let b = n;
    function rt(M, L) {
      return e.getContext(M, L);
    }
    try {
      const M = { alpha: true, depth: s, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Pa}`), e.addEventListener("webglcontextlost", K, false), e.addEventListener("webglcontextrestored", ut, false), e.addEventListener("webglcontextcreationerror", gt, false), b === null) {
        const L = "webgl2";
        if (b = rt(L, M), b === null) throw rt(L) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (M) {
      throw console.error("THREE.WebGLRenderer: " + M.message), M;
    }
    let st, Q, at, bt, mt, T, v, N, X, Z, Y, Et, ot, vt, Gt, nt, xt, Dt, Ut, St, Vt, Nt, te, P;
    function _t() {
      st = new Hd(b), st.init(), Nt = new Am(b, st), Q = new Id(b, st, t, Nt), at = new ym(b), Q.reverseDepthBuffer && at.buffers.depth.setReversed(true), bt = new kd(b), mt = new om(), T = new Tm(b, st, at, mt, Q, Nt, bt), v = new Od(S), N = new zd(S), X = new Kh(b), te = new Dd(b, X), Z = new Gd(b, X, bt, te), Y = new Xd(b, Z, X, bt), Ut = new Wd(b, Q, T), nt = new Nd(mt), Et = new am(S, v, N, st, Q, te, nt), ot = new Um(S, mt), vt = new cm(), Gt = new mm(st), Dt = new Ld(S, v, N, at, Y, f, l), xt = new Mm(S, Y, Q), P = new Im(b, bt, Q, at), St = new Ud(b, st, bt), Vt = new Vd(b, st, bt), bt.programs = Et.programs, S.capabilities = Q, S.extensions = st, S.properties = mt, S.renderLists = vt, S.shadowMap = xt, S.state = at, S.info = bt;
    }
    _t();
    const V = new Lm(S, b);
    this.xr = V, this.getContext = function() {
      return b;
    }, this.getContextAttributes = function() {
      return b.getContextAttributes();
    }, this.forceContextLoss = function() {
      const M = st.get("WEBGL_lose_context");
      M && M.loseContext();
    }, this.forceContextRestore = function() {
      const M = st.get("WEBGL_lose_context");
      M && M.restoreContext();
    }, this.getPixelRatio = function() {
      return tt;
    }, this.setPixelRatio = function(M) {
      M !== void 0 && (tt = M, this.setSize(j, F, false));
    }, this.getSize = function(M) {
      return M.set(j, F);
    }, this.setSize = function(M, L, O = true) {
      if (V.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      j = M, F = L, e.width = Math.floor(M * tt), e.height = Math.floor(L * tt), O === true && (e.style.width = M + "px", e.style.height = L + "px"), this.setViewport(0, 0, M, L);
    }, this.getDrawingBufferSize = function(M) {
      return M.set(j * tt, F * tt).floor();
    }, this.setDrawingBufferSize = function(M, L, O) {
      j = M, F = L, tt = O, e.width = Math.floor(M * O), e.height = Math.floor(L * O), this.setViewport(0, 0, M, L);
    }, this.getCurrentViewport = function(M) {
      return M.copy(g);
    }, this.getViewport = function(M) {
      return M.copy(dt);
    }, this.setViewport = function(M, L, O, z) {
      M.isVector4 ? dt.set(M.x, M.y, M.z, M.w) : dt.set(M, L, O, z), at.viewport(g.copy(dt).multiplyScalar(tt).round());
    }, this.getScissor = function(M) {
      return M.copy(pt);
    }, this.setScissor = function(M, L, O, z) {
      M.isVector4 ? pt.set(M.x, M.y, M.z, M.w) : pt.set(M, L, O, z), at.scissor(y.copy(pt).multiplyScalar(tt).round());
    }, this.getScissorTest = function() {
      return Ht;
    }, this.setScissorTest = function(M) {
      at.setScissorTest(Ht = M);
    }, this.setOpaqueSort = function(M) {
      k = M;
    }, this.setTransparentSort = function(M) {
      ht = M;
    }, this.getClearColor = function(M) {
      return M.copy(Dt.getClearColor());
    }, this.setClearColor = function() {
      Dt.setClearColor.apply(Dt, arguments);
    }, this.getClearAlpha = function() {
      return Dt.getClearAlpha();
    }, this.setClearAlpha = function() {
      Dt.setClearAlpha.apply(Dt, arguments);
    }, this.clear = function(M = true, L = true, O = true) {
      let z = 0;
      if (M) {
        let D = false;
        if (w !== null) {
          const it = w.texture.format;
          D = it === Fa || it === Oa || it === Na;
        }
        if (D) {
          const it = w.texture.type, ft = it === an || it === Nn || it === Ui || it === _i || it === Ua || it === Ia, yt = Dt.getClearColor(), Tt = Dt.getClearAlpha(), Pt = yt.r, Lt = yt.g, At = yt.b;
          ft ? (m[0] = Pt, m[1] = Lt, m[2] = At, m[3] = Tt, b.clearBufferuiv(b.COLOR, 0, m)) : (_[0] = Pt, _[1] = Lt, _[2] = At, _[3] = Tt, b.clearBufferiv(b.COLOR, 0, _));
        } else z |= b.COLOR_BUFFER_BIT;
      }
      L && (z |= b.DEPTH_BUFFER_BIT, b.clearDepth(this.capabilities.reverseDepthBuffer ? 0 : 1)), O && (z |= b.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), b.clear(z);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      e.removeEventListener("webglcontextlost", K, false), e.removeEventListener("webglcontextrestored", ut, false), e.removeEventListener("webglcontextcreationerror", gt, false), vt.dispose(), Gt.dispose(), mt.dispose(), v.dispose(), N.dispose(), Y.dispose(), te.dispose(), P.dispose(), Et.dispose(), V.dispose(), V.removeEventListener("sessionstart", Ka), V.removeEventListener("sessionend", ja), En.stop();
    };
    function K(M) {
      M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), E = true;
    }
    function ut() {
      console.log("THREE.WebGLRenderer: Context Restored."), E = false;
      const M = bt.autoReset, L = xt.enabled, O = xt.autoUpdate, z = xt.needsUpdate, D = xt.type;
      _t(), bt.autoReset = M, xt.enabled = L, xt.autoUpdate = O, xt.needsUpdate = z, xt.type = D;
    }
    function gt(M) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage);
    }
    function kt(M) {
      const L = M.target;
      L.removeEventListener("dispose", kt), oe(L);
    }
    function oe(M) {
      ye(M), mt.remove(M);
    }
    function ye(M) {
      const L = mt.get(M).programs;
      L !== void 0 && (L.forEach(function(O) {
        Et.releaseProgram(O);
      }), M.isShaderMaterial && Et.releaseShaderCache(M));
    }
    this.renderBufferDirect = function(M, L, O, z, D, it) {
      L === null && (L = It);
      const ft = D.isMesh && D.matrixWorld.determinant() < 0, yt = fc(M, L, O, z, D);
      at.setMaterial(z, ft);
      let Tt = O.index, Pt = 1;
      if (z.wireframe === true) {
        if (Tt = Z.getWireframeAttribute(O), Tt === void 0) return;
        Pt = 2;
      }
      const Lt = O.drawRange, At = O.attributes.position;
      let jt = Lt.start * Pt, ee = (Lt.start + Lt.count) * Pt;
      it !== null && (jt = Math.max(jt, it.start * Pt), ee = Math.min(ee, (it.start + it.count) * Pt)), Tt !== null ? (jt = Math.max(jt, 0), ee = Math.min(ee, Tt.count)) : At != null && (jt = Math.max(jt, 0), ee = Math.min(ee, At.count));
      const se = ee - jt;
      if (se < 0 || se === 1 / 0) return;
      te.setup(D, z, yt, O, Tt);
      let we, Yt = St;
      if (Tt !== null && (we = X.get(Tt), Yt = Vt, Yt.setIndex(we)), D.isMesh) z.wireframe === true ? (at.setLineWidth(z.wireframeLinewidth * q()), Yt.setMode(b.LINES)) : Yt.setMode(b.TRIANGLES);
      else if (D.isLine) {
        let wt = z.linewidth;
        wt === void 0 && (wt = 1), at.setLineWidth(wt * q()), D.isLineSegments ? Yt.setMode(b.LINES) : D.isLineLoop ? Yt.setMode(b.LINE_LOOP) : Yt.setMode(b.LINE_STRIP);
      } else D.isPoints ? Yt.setMode(b.POINTS) : D.isSprite && Yt.setMode(b.TRIANGLES);
      if (D.isBatchedMesh) if (D._multiDrawInstances !== null) Yt.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
      else if (st.get("WEBGL_multi_draw")) Yt.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
      else {
        const wt = D._multiDrawStarts, _e = D._multiDrawCounts, qt = D._multiDrawCount, Ie = Tt ? X.get(Tt).bytesPerElement : 1, Hn = mt.get(z).currentProgram.getUniforms();
        for (let Re = 0; Re < qt; Re++) Hn.setValue(b, "_gl_DrawID", Re), Yt.render(wt[Re] / Ie, _e[Re]);
      }
      else if (D.isInstancedMesh) Yt.renderInstances(jt, se, D.count);
      else if (O.isInstancedBufferGeometry) {
        const wt = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, _e = Math.min(O.instanceCount, wt);
        Yt.renderInstances(jt, se, _e);
      } else Yt.render(jt, se);
    };
    function Xt(M, L, O) {
      M.transparent === true && M.side === nn && M.forceSinglePass === false ? (M.side = be, M.needsUpdate = true, Wi(M, L, O), M.side = Mn, M.needsUpdate = true, Wi(M, L, O), M.side = nn) : Wi(M, L, O);
    }
    this.compile = function(M, L, O = null) {
      O === null && (O = M), d = Gt.get(O), d.init(L), A.push(d), O.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), M !== O && M.traverseVisible(function(D) {
        D.isLight && D.layers.test(L.layers) && (d.pushLight(D), D.castShadow && d.pushShadow(D));
      }), d.setupLights();
      const z = /* @__PURE__ */ new Set();
      return M.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite)) return;
        const it = D.material;
        if (it) if (Array.isArray(it)) for (let ft = 0; ft < it.length; ft++) {
          const yt = it[ft];
          Xt(yt, O, D), z.add(yt);
        }
        else Xt(it, O, D), z.add(it);
      }), A.pop(), d = null, z;
    }, this.compileAsync = function(M, L, O = null) {
      const z = this.compile(M, L, O);
      return new Promise((D) => {
        function it() {
          if (z.forEach(function(ft) {
            mt.get(ft).currentProgram.isReady() && z.delete(ft);
          }), z.size === 0) {
            D(M);
            return;
          }
          setTimeout(it, 10);
        }
        st.get("KHR_parallel_shader_compile") !== null ? it() : setTimeout(it, 10);
      });
    };
    let Ee = null;
    function Ke(M) {
      Ee && Ee(M);
    }
    function Ka() {
      En.stop();
    }
    function ja() {
      En.start();
    }
    const En = new Vl();
    En.setAnimationLoop(Ke), typeof self < "u" && En.setContext(self), this.setAnimationLoop = function(M) {
      Ee = M, V.setAnimationLoop(M), M === null ? En.stop() : En.start();
    }, V.addEventListener("sessionstart", Ka), V.addEventListener("sessionend", ja), this.render = function(M, L) {
      if (L !== void 0 && L.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (E === true) return;
      if (M.matrixWorldAutoUpdate === true && M.updateMatrixWorld(), L.parent === null && L.matrixWorldAutoUpdate === true && L.updateMatrixWorld(), V.enabled === true && V.isPresenting === true && (V.cameraAutoUpdate === true && V.updateCamera(L), L = V.getCamera()), M.isScene === true && M.onBeforeRender(S, M, L, w), d = Gt.get(M, A.length), d.init(L), A.push(d), ct.multiplyMatrices(L.projectionMatrix, L.matrixWorldInverse), Wt.setFromProjectionMatrix(ct), et = this.localClippingEnabled, W = nt.init(this.clippingPlanes, et), x = vt.get(M, p.length), x.init(), p.push(x), V.enabled === true && V.isPresenting === true) {
        const it = S.xr.getDepthSensingMesh();
        it !== null && js(it, L, -1 / 0, S.sortObjects);
      }
      js(M, L, 0, S.sortObjects), x.finish(), S.sortObjects === true && x.sort(k, ht), zt = V.enabled === false || V.isPresenting === false || V.hasDepthSensing() === false, zt && Dt.addToRenderList(x, M), this.info.render.frame++, W === true && nt.beginShadows();
      const O = d.state.shadowsArray;
      xt.render(O, M, L), W === true && nt.endShadows(), this.info.autoReset === true && this.info.reset();
      const z = x.opaque, D = x.transmissive;
      if (d.setupLights(), L.isArrayCamera) {
        const it = L.cameras;
        if (D.length > 0) for (let ft = 0, yt = it.length; ft < yt; ft++) {
          const Tt = it[ft];
          $a(z, D, M, Tt);
        }
        zt && Dt.render(M);
        for (let ft = 0, yt = it.length; ft < yt; ft++) {
          const Tt = it[ft];
          Ja(x, M, Tt, Tt.viewport);
        }
      } else D.length > 0 && $a(z, D, M, L), zt && Dt.render(M), Ja(x, M, L);
      w !== null && (T.updateMultisampleRenderTarget(w), T.updateRenderTargetMipmap(w)), M.isScene === true && M.onAfterRender(S, M, L), te.resetDefaultState(), U = -1, J = null, A.pop(), A.length > 0 ? (d = A[A.length - 1], W === true && nt.setGlobalState(S.clippingPlanes, d.state.camera)) : d = null, p.pop(), p.length > 0 ? x = p[p.length - 1] : x = null;
    };
    function js(M, L, O, z) {
      if (M.visible === false) return;
      if (M.layers.test(L.layers)) {
        if (M.isGroup) O = M.renderOrder;
        else if (M.isLOD) M.autoUpdate === true && M.update(L);
        else if (M.isLight) d.pushLight(M), M.castShadow && d.pushShadow(M);
        else if (M.isSprite) {
          if (!M.frustumCulled || Wt.intersectsSprite(M)) {
            z && Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ct);
            const ft = Y.update(M), yt = M.material;
            yt.visible && x.push(M, ft, yt, O, Rt.z, null);
          }
        } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || Wt.intersectsObject(M))) {
          const ft = Y.update(M), yt = M.material;
          if (z && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), Rt.copy(M.boundingSphere.center)) : (ft.boundingSphere === null && ft.computeBoundingSphere(), Rt.copy(ft.boundingSphere.center)), Rt.applyMatrix4(M.matrixWorld).applyMatrix4(ct)), Array.isArray(yt)) {
            const Tt = ft.groups;
            for (let Pt = 0, Lt = Tt.length; Pt < Lt; Pt++) {
              const At = Tt[Pt], jt = yt[At.materialIndex];
              jt && jt.visible && x.push(M, ft, jt, O, Rt.z, At);
            }
          } else yt.visible && x.push(M, ft, yt, O, Rt.z, null);
        }
      }
      const it = M.children;
      for (let ft = 0, yt = it.length; ft < yt; ft++) js(it[ft], L, O, z);
    }
    function Ja(M, L, O, z) {
      const D = M.opaque, it = M.transmissive, ft = M.transparent;
      d.setupLightsView(O), W === true && nt.setGlobalState(S.clippingPlanes, O), z && at.viewport(g.copy(z)), D.length > 0 && ki(D, L, O), it.length > 0 && ki(it, L, O), ft.length > 0 && ki(ft, L, O), at.buffers.depth.setTest(true), at.buffers.depth.setMask(true), at.buffers.color.setMask(true), at.setPolygonOffset(false);
    }
    function $a(M, L, O, z) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      d.state.transmissionRenderTarget[z.id] === void 0 && (d.state.transmissionRenderTarget[z.id] = new On(1, 1, { generateMipmaps: true, type: st.has("EXT_color_buffer_half_float") || st.has("EXT_color_buffer_float") ? Bi : an, minFilter: In, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Zt.workingColorSpace }));
      const it = d.state.transmissionRenderTarget[z.id], ft = z.viewport || g;
      it.setSize(ft.z, ft.w);
      const yt = S.getRenderTarget();
      S.setRenderTarget(it), S.getClearColor(B), H = S.getClearAlpha(), H < 1 && S.setClearColor(16777215, 0.5), S.clear(), zt && Dt.render(O);
      const Tt = S.toneMapping;
      S.toneMapping = vn;
      const Pt = z.viewport;
      if (z.viewport !== void 0 && (z.viewport = void 0), d.setupLightsView(z), W === true && nt.setGlobalState(S.clippingPlanes, z), ki(M, O, z), T.updateMultisampleRenderTarget(it), T.updateRenderTargetMipmap(it), st.has("WEBGL_multisampled_render_to_texture") === false) {
        let Lt = false;
        for (let At = 0, jt = L.length; At < jt; At++) {
          const ee = L[At], se = ee.object, we = ee.geometry, Yt = ee.material, wt = ee.group;
          if (Yt.side === nn && se.layers.test(z.layers)) {
            const _e = Yt.side;
            Yt.side = be, Yt.needsUpdate = true, Qa(se, O, z, we, Yt, wt), Yt.side = _e, Yt.needsUpdate = true, Lt = true;
          }
        }
        Lt === true && (T.updateMultisampleRenderTarget(it), T.updateRenderTargetMipmap(it));
      }
      S.setRenderTarget(yt), S.setClearColor(B, H), Pt !== void 0 && (z.viewport = Pt), S.toneMapping = Tt;
    }
    function ki(M, L, O) {
      const z = L.isScene === true ? L.overrideMaterial : null;
      for (let D = 0, it = M.length; D < it; D++) {
        const ft = M[D], yt = ft.object, Tt = ft.geometry, Pt = z === null ? ft.material : z, Lt = ft.group;
        yt.layers.test(O.layers) && Qa(yt, L, O, Tt, Pt, Lt);
      }
    }
    function Qa(M, L, O, z, D, it) {
      M.onBeforeRender(S, L, O, z, D, it), M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), D.onBeforeRender(S, L, O, z, M, it), D.transparent === true && D.side === nn && D.forceSinglePass === false ? (D.side = be, D.needsUpdate = true, S.renderBufferDirect(O, L, z, D, M, it), D.side = Mn, D.needsUpdate = true, S.renderBufferDirect(O, L, z, D, M, it), D.side = nn) : S.renderBufferDirect(O, L, z, D, M, it), M.onAfterRender(S, L, O, z, D, it);
    }
    function Wi(M, L, O) {
      L.isScene !== true && (L = It);
      const z = mt.get(M), D = d.state.lights, it = d.state.shadowsArray, ft = D.state.version, yt = Et.getParameters(M, D.state, it, L, O), Tt = Et.getProgramCacheKey(yt);
      let Pt = z.programs;
      z.environment = M.isMeshStandardMaterial ? L.environment : null, z.fog = L.fog, z.envMap = (M.isMeshStandardMaterial ? N : v).get(M.envMap || z.environment), z.envMapRotation = z.environment !== null && M.envMap === null ? L.environmentRotation : M.envMapRotation, Pt === void 0 && (M.addEventListener("dispose", kt), Pt = /* @__PURE__ */ new Map(), z.programs = Pt);
      let Lt = Pt.get(Tt);
      if (Lt !== void 0) {
        if (z.currentProgram === Lt && z.lightsStateVersion === ft) return eo(M, yt), Lt;
      } else yt.uniforms = Et.getUniforms(M), M.onBeforeCompile(yt, S), Lt = Et.acquireProgram(yt, Tt), Pt.set(Tt, Lt), z.uniforms = yt.uniforms;
      const At = z.uniforms;
      return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === true) && (At.clippingPlanes = nt.uniform), eo(M, yt), z.needsLights = pc(M), z.lightsStateVersion = ft, z.needsLights && (At.ambientLightColor.value = D.state.ambient, At.lightProbe.value = D.state.probe, At.directionalLights.value = D.state.directional, At.directionalLightShadows.value = D.state.directionalShadow, At.spotLights.value = D.state.spot, At.spotLightShadows.value = D.state.spotShadow, At.rectAreaLights.value = D.state.rectArea, At.ltc_1.value = D.state.rectAreaLTC1, At.ltc_2.value = D.state.rectAreaLTC2, At.pointLights.value = D.state.point, At.pointLightShadows.value = D.state.pointShadow, At.hemisphereLights.value = D.state.hemi, At.directionalShadowMap.value = D.state.directionalShadowMap, At.directionalShadowMatrix.value = D.state.directionalShadowMatrix, At.spotShadowMap.value = D.state.spotShadowMap, At.spotLightMatrix.value = D.state.spotLightMatrix, At.spotLightMap.value = D.state.spotLightMap, At.pointShadowMap.value = D.state.pointShadowMap, At.pointShadowMatrix.value = D.state.pointShadowMatrix), z.currentProgram = Lt, z.uniformsList = null, Lt;
    }
    function to(M) {
      if (M.uniformsList === null) {
        const L = M.currentProgram.getUniforms();
        M.uniformsList = Ns.seqWithValue(L.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function eo(M, L) {
      const O = mt.get(M);
      O.outputColorSpace = L.outputColorSpace, O.batching = L.batching, O.batchingColor = L.batchingColor, O.instancing = L.instancing, O.instancingColor = L.instancingColor, O.instancingMorph = L.instancingMorph, O.skinning = L.skinning, O.morphTargets = L.morphTargets, O.morphNormals = L.morphNormals, O.morphColors = L.morphColors, O.morphTargetsCount = L.morphTargetsCount, O.numClippingPlanes = L.numClippingPlanes, O.numIntersection = L.numClipIntersection, O.vertexAlphas = L.vertexAlphas, O.vertexTangents = L.vertexTangents, O.toneMapping = L.toneMapping;
    }
    function fc(M, L, O, z, D) {
      L.isScene !== true && (L = It), T.resetTextureUnits();
      const it = L.fog, ft = z.isMeshStandardMaterial ? L.environment : null, yt = w === null ? S.outputColorSpace : w.isXRRenderTarget === true ? w.texture.colorSpace : yn, Tt = (z.isMeshStandardMaterial ? N : v).get(z.envMap || ft), Pt = z.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Lt = !!O.attributes.tangent && (!!z.normalMap || z.anisotropy > 0), At = !!O.morphAttributes.position, jt = !!O.morphAttributes.normal, ee = !!O.morphAttributes.color;
      let se = vn;
      z.toneMapped && (w === null || w.isXRRenderTarget === true) && (se = S.toneMapping);
      const we = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, Yt = we !== void 0 ? we.length : 0, wt = mt.get(z), _e = d.state.lights;
      if (W === true && (et === true || M !== J)) {
        const De = M === J && z.id === U;
        nt.setState(z, M, De);
      }
      let qt = false;
      z.version === wt.__version ? (wt.needsLights && wt.lightsStateVersion !== _e.state.version || wt.outputColorSpace !== yt || D.isBatchedMesh && wt.batching === false || !D.isBatchedMesh && wt.batching === true || D.isBatchedMesh && wt.batchingColor === true && D.colorTexture === null || D.isBatchedMesh && wt.batchingColor === false && D.colorTexture !== null || D.isInstancedMesh && wt.instancing === false || !D.isInstancedMesh && wt.instancing === true || D.isSkinnedMesh && wt.skinning === false || !D.isSkinnedMesh && wt.skinning === true || D.isInstancedMesh && wt.instancingColor === true && D.instanceColor === null || D.isInstancedMesh && wt.instancingColor === false && D.instanceColor !== null || D.isInstancedMesh && wt.instancingMorph === true && D.morphTexture === null || D.isInstancedMesh && wt.instancingMorph === false && D.morphTexture !== null || wt.envMap !== Tt || z.fog === true && wt.fog !== it || wt.numClippingPlanes !== void 0 && (wt.numClippingPlanes !== nt.numPlanes || wt.numIntersection !== nt.numIntersection) || wt.vertexAlphas !== Pt || wt.vertexTangents !== Lt || wt.morphTargets !== At || wt.morphNormals !== jt || wt.morphColors !== ee || wt.toneMapping !== se || wt.morphTargetsCount !== Yt) && (qt = true) : (qt = true, wt.__version = z.version);
      let Ie = wt.currentProgram;
      qt === true && (Ie = Wi(z, L, D));
      let Hn = false, Re = false, Js = false;
      const ae = Ie.getUniforms(), ln = wt.uniforms;
      if (at.useProgram(Ie.program) && (Hn = true, Re = true, Js = true), z.id !== U && (U = z.id, Re = true), Hn || J !== M) {
        Q.reverseDepthBuffer ? (Mt.copy(M.projectionMatrix), Eh(Mt), Th(Mt), ae.setValue(b, "projectionMatrix", Mt)) : ae.setValue(b, "projectionMatrix", M.projectionMatrix), ae.setValue(b, "viewMatrix", M.matrixWorldInverse);
        const De = ae.map.cameraPosition;
        De !== void 0 && De.setValue(b, Ct.setFromMatrixPosition(M.matrixWorld)), Q.logarithmicDepthBuffer && ae.setValue(b, "logDepthBufFC", 2 / (Math.log(M.far + 1) / Math.LN2)), (z.isMeshPhongMaterial || z.isMeshToonMaterial || z.isMeshLambertMaterial || z.isMeshBasicMaterial || z.isMeshStandardMaterial || z.isShaderMaterial) && ae.setValue(b, "isOrthographic", M.isOrthographicCamera === true), J !== M && (J = M, Re = true, Js = true);
      }
      if (D.isSkinnedMesh) {
        ae.setOptional(b, D, "bindMatrix"), ae.setOptional(b, D, "bindMatrixInverse");
        const De = D.skeleton;
        De && (De.boneTexture === null && De.computeBoneTexture(), ae.setValue(b, "boneTexture", De.boneTexture, T));
      }
      D.isBatchedMesh && (ae.setOptional(b, D, "batchingTexture"), ae.setValue(b, "batchingTexture", D._matricesTexture, T), ae.setOptional(b, D, "batchingIdTexture"), ae.setValue(b, "batchingIdTexture", D._indirectTexture, T), ae.setOptional(b, D, "batchingColorTexture"), D._colorsTexture !== null && ae.setValue(b, "batchingColorTexture", D._colorsTexture, T));
      const $s = O.morphAttributes;
      if (($s.position !== void 0 || $s.normal !== void 0 || $s.color !== void 0) && Ut.update(D, O, Ie), (Re || wt.receiveShadow !== D.receiveShadow) && (wt.receiveShadow = D.receiveShadow, ae.setValue(b, "receiveShadow", D.receiveShadow)), z.isMeshGouraudMaterial && z.envMap !== null && (ln.envMap.value = Tt, ln.flipEnvMap.value = Tt.isCubeTexture && Tt.isRenderTargetTexture === false ? -1 : 1), z.isMeshStandardMaterial && z.envMap === null && L.environment !== null && (ln.envMapIntensity.value = L.environmentIntensity), Re && (ae.setValue(b, "toneMappingExposure", S.toneMappingExposure), wt.needsLights && dc(ln, Js), it && z.fog === true && ot.refreshFogUniforms(ln, it), ot.refreshMaterialUniforms(ln, z, tt, F, d.state.transmissionRenderTarget[M.id]), Ns.upload(b, to(wt), ln, T)), z.isShaderMaterial && z.uniformsNeedUpdate === true && (Ns.upload(b, to(wt), ln, T), z.uniformsNeedUpdate = false), z.isSpriteMaterial && ae.setValue(b, "center", D.center), ae.setValue(b, "modelViewMatrix", D.modelViewMatrix), ae.setValue(b, "normalMatrix", D.normalMatrix), ae.setValue(b, "modelMatrix", D.matrixWorld), z.isShaderMaterial || z.isRawShaderMaterial) {
        const De = z.uniformsGroups;
        for (let Qs = 0, mc = De.length; Qs < mc; Qs++) {
          const no = De[Qs];
          P.update(no, Ie), P.bind(no, Ie);
        }
      }
      return Ie;
    }
    function dc(M, L) {
      M.ambientLightColor.needsUpdate = L, M.lightProbe.needsUpdate = L, M.directionalLights.needsUpdate = L, M.directionalLightShadows.needsUpdate = L, M.pointLights.needsUpdate = L, M.pointLightShadows.needsUpdate = L, M.spotLights.needsUpdate = L, M.spotLightShadows.needsUpdate = L, M.rectAreaLights.needsUpdate = L, M.hemisphereLights.needsUpdate = L;
    }
    function pc(M) {
      return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === true;
    }
    this.getActiveCubeFace = function() {
      return I;
    }, this.getActiveMipmapLevel = function() {
      return R;
    }, this.getRenderTarget = function() {
      return w;
    }, this.setRenderTargetTextures = function(M, L, O) {
      mt.get(M.texture).__webglTexture = L, mt.get(M.depthTexture).__webglTexture = O;
      const z = mt.get(M);
      z.__hasExternalTextures = true, z.__autoAllocateDepthBuffer = O === void 0, z.__autoAllocateDepthBuffer || st.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), z.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(M, L) {
      const O = mt.get(M);
      O.__webglFramebuffer = L, O.__useDefaultFramebuffer = L === void 0;
    }, this.setRenderTarget = function(M, L = 0, O = 0) {
      w = M, I = L, R = O;
      let z = true, D = null, it = false, ft = false;
      if (M) {
        const Tt = mt.get(M);
        if (Tt.__useDefaultFramebuffer !== void 0) at.bindFramebuffer(b.FRAMEBUFFER, null), z = false;
        else if (Tt.__webglFramebuffer === void 0) T.setupRenderTarget(M);
        else if (Tt.__hasExternalTextures) T.rebindTextures(M, mt.get(M.texture).__webglTexture, mt.get(M.depthTexture).__webglTexture);
        else if (M.depthBuffer) {
          const At = M.depthTexture;
          if (Tt.__boundDepthTexture !== At) {
            if (At !== null && mt.has(At) && (M.width !== At.image.width || M.height !== At.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            T.setupDepthRenderbuffer(M);
          }
        }
        const Pt = M.texture;
        (Pt.isData3DTexture || Pt.isDataArrayTexture || Pt.isCompressedArrayTexture) && (ft = true);
        const Lt = mt.get(M).__webglFramebuffer;
        M.isWebGLCubeRenderTarget ? (Array.isArray(Lt[L]) ? D = Lt[L][O] : D = Lt[L], it = true) : M.samples > 0 && T.useMultisampledRTT(M) === false ? D = mt.get(M).__webglMultisampledFramebuffer : Array.isArray(Lt) ? D = Lt[O] : D = Lt, g.copy(M.viewport), y.copy(M.scissor), G = M.scissorTest;
      } else g.copy(dt).multiplyScalar(tt).floor(), y.copy(pt).multiplyScalar(tt).floor(), G = Ht;
      if (at.bindFramebuffer(b.FRAMEBUFFER, D) && z && at.drawBuffers(M, D), at.viewport(g), at.scissor(y), at.setScissorTest(G), it) {
        const Tt = mt.get(M.texture);
        b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_CUBE_MAP_POSITIVE_X + L, Tt.__webglTexture, O);
      } else if (ft) {
        const Tt = mt.get(M.texture), Pt = L || 0;
        b.framebufferTextureLayer(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, Tt.__webglTexture, O || 0, Pt);
      }
      U = -1;
    }, this.readRenderTargetPixels = function(M, L, O, z, D, it, ft) {
      if (!(M && M.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let yt = mt.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ft !== void 0 && (yt = yt[ft]), yt) {
        at.bindFramebuffer(b.FRAMEBUFFER, yt);
        try {
          const Tt = M.texture, Pt = Tt.format, Lt = Tt.type;
          if (!Q.textureFormatReadable(Pt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Q.textureTypeReadable(Lt)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          L >= 0 && L <= M.width - z && O >= 0 && O <= M.height - D && b.readPixels(L, O, z, D, Nt.convert(Pt), Nt.convert(Lt), it);
        } finally {
          const Tt = w !== null ? mt.get(w).__webglFramebuffer : null;
          at.bindFramebuffer(b.FRAMEBUFFER, Tt);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(M, L, O, z, D, it, ft) {
      if (!(M && M.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let yt = mt.get(M).__webglFramebuffer;
      if (M.isWebGLCubeRenderTarget && ft !== void 0 && (yt = yt[ft]), yt) {
        const Tt = M.texture, Pt = Tt.format, Lt = Tt.type;
        if (!Q.textureFormatReadable(Pt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Q.textureTypeReadable(Lt)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (L >= 0 && L <= M.width - z && O >= 0 && O <= M.height - D) {
          at.bindFramebuffer(b.FRAMEBUFFER, yt);
          const At = b.createBuffer();
          b.bindBuffer(b.PIXEL_PACK_BUFFER, At), b.bufferData(b.PIXEL_PACK_BUFFER, it.byteLength, b.STREAM_READ), b.readPixels(L, O, z, D, Nt.convert(Pt), Nt.convert(Lt), 0);
          const jt = w !== null ? mt.get(w).__webglFramebuffer : null;
          at.bindFramebuffer(b.FRAMEBUFFER, jt);
          const ee = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return b.flush(), await yh(b, ee, 4), b.bindBuffer(b.PIXEL_PACK_BUFFER, At), b.getBufferSubData(b.PIXEL_PACK_BUFFER, 0, it), b.deleteBuffer(At), b.deleteSync(ee), it;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(M, L = null, O = 0) {
      M.isTexture !== true && (Is("WebGLRenderer: copyFramebufferToTexture function signature has changed."), L = arguments[0] || null, M = arguments[1]);
      const z = Math.pow(2, -O), D = Math.floor(M.image.width * z), it = Math.floor(M.image.height * z), ft = L !== null ? L.x : 0, yt = L !== null ? L.y : 0;
      T.setTexture2D(M, 0), b.copyTexSubImage2D(b.TEXTURE_2D, O, 0, 0, ft, yt, D, it), at.unbindTexture();
    }, this.copyTextureToTexture = function(M, L, O = null, z = null, D = 0) {
      M.isTexture !== true && (Is("WebGLRenderer: copyTextureToTexture function signature has changed."), z = arguments[0] || null, M = arguments[1], L = arguments[2], D = arguments[3] || 0, O = null);
      let it, ft, yt, Tt, Pt, Lt;
      O !== null ? (it = O.max.x - O.min.x, ft = O.max.y - O.min.y, yt = O.min.x, Tt = O.min.y) : (it = M.image.width, ft = M.image.height, yt = 0, Tt = 0), z !== null ? (Pt = z.x, Lt = z.y) : (Pt = 0, Lt = 0);
      const At = Nt.convert(L.format), jt = Nt.convert(L.type);
      T.setTexture2D(L, 0), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, L.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, L.unpackAlignment);
      const ee = b.getParameter(b.UNPACK_ROW_LENGTH), se = b.getParameter(b.UNPACK_IMAGE_HEIGHT), we = b.getParameter(b.UNPACK_SKIP_PIXELS), Yt = b.getParameter(b.UNPACK_SKIP_ROWS), wt = b.getParameter(b.UNPACK_SKIP_IMAGES), _e = M.isCompressedTexture ? M.mipmaps[D] : M.image;
      b.pixelStorei(b.UNPACK_ROW_LENGTH, _e.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, _e.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, yt), b.pixelStorei(b.UNPACK_SKIP_ROWS, Tt), M.isDataTexture ? b.texSubImage2D(b.TEXTURE_2D, D, Pt, Lt, it, ft, At, jt, _e.data) : M.isCompressedTexture ? b.compressedTexSubImage2D(b.TEXTURE_2D, D, Pt, Lt, _e.width, _e.height, At, _e.data) : b.texSubImage2D(b.TEXTURE_2D, D, Pt, Lt, it, ft, At, jt, _e), b.pixelStorei(b.UNPACK_ROW_LENGTH, ee), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, se), b.pixelStorei(b.UNPACK_SKIP_PIXELS, we), b.pixelStorei(b.UNPACK_SKIP_ROWS, Yt), b.pixelStorei(b.UNPACK_SKIP_IMAGES, wt), D === 0 && L.generateMipmaps && b.generateMipmap(b.TEXTURE_2D), at.unbindTexture();
    }, this.copyTextureToTexture3D = function(M, L, O = null, z = null, D = 0) {
      M.isTexture !== true && (Is("WebGLRenderer: copyTextureToTexture3D function signature has changed."), O = arguments[0] || null, z = arguments[1] || null, M = arguments[2], L = arguments[3], D = arguments[4] || 0);
      let it, ft, yt, Tt, Pt, Lt, At, jt, ee;
      const se = M.isCompressedTexture ? M.mipmaps[D] : M.image;
      O !== null ? (it = O.max.x - O.min.x, ft = O.max.y - O.min.y, yt = O.max.z - O.min.z, Tt = O.min.x, Pt = O.min.y, Lt = O.min.z) : (it = se.width, ft = se.height, yt = se.depth, Tt = 0, Pt = 0, Lt = 0), z !== null ? (At = z.x, jt = z.y, ee = z.z) : (At = 0, jt = 0, ee = 0);
      const we = Nt.convert(L.format), Yt = Nt.convert(L.type);
      let wt;
      if (L.isData3DTexture) T.setTexture3D(L, 0), wt = b.TEXTURE_3D;
      else if (L.isDataArrayTexture || L.isCompressedArrayTexture) T.setTexture2DArray(L, 0), wt = b.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, L.flipY), b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL, L.premultiplyAlpha), b.pixelStorei(b.UNPACK_ALIGNMENT, L.unpackAlignment);
      const _e = b.getParameter(b.UNPACK_ROW_LENGTH), qt = b.getParameter(b.UNPACK_IMAGE_HEIGHT), Ie = b.getParameter(b.UNPACK_SKIP_PIXELS), Hn = b.getParameter(b.UNPACK_SKIP_ROWS), Re = b.getParameter(b.UNPACK_SKIP_IMAGES);
      b.pixelStorei(b.UNPACK_ROW_LENGTH, se.width), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, se.height), b.pixelStorei(b.UNPACK_SKIP_PIXELS, Tt), b.pixelStorei(b.UNPACK_SKIP_ROWS, Pt), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Lt), M.isDataTexture || M.isData3DTexture ? b.texSubImage3D(wt, D, At, jt, ee, it, ft, yt, we, Yt, se.data) : L.isCompressedArrayTexture ? b.compressedTexSubImage3D(wt, D, At, jt, ee, it, ft, yt, we, se.data) : b.texSubImage3D(wt, D, At, jt, ee, it, ft, yt, we, Yt, se), b.pixelStorei(b.UNPACK_ROW_LENGTH, _e), b.pixelStorei(b.UNPACK_IMAGE_HEIGHT, qt), b.pixelStorei(b.UNPACK_SKIP_PIXELS, Ie), b.pixelStorei(b.UNPACK_SKIP_ROWS, Hn), b.pixelStorei(b.UNPACK_SKIP_IMAGES, Re), D === 0 && L.generateMipmaps && b.generateMipmap(wt), at.unbindTexture();
    }, this.initRenderTarget = function(M) {
      mt.get(M).__webglFramebuffer === void 0 && T.setupRenderTarget(M);
    }, this.initTexture = function(M) {
      M.isCubeTexture ? T.setTextureCube(M, 0) : M.isData3DTexture ? T.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? T.setTexture2DArray(M, 0) : T.setTexture2D(M, 0), at.unbindTexture();
    }, this.resetState = function() {
      I = 0, R = 0, w = null, at.reset(), te.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return rn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    e.drawingBufferColorSpace = t === za ? "display-p3" : "srgb", e.unpackColorSpace = Zt.workingColorSpace === Xs ? "display-p3" : "srgb";
  }
}
class B_ extends ce {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new ke(), this.environmentIntensity = 1, this.environmentRotation = new ke(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(t, e) {
    return super.copy(t, e), t.background !== null && (this.background = t.background.clone()), t.environment !== null && (this.environment = t.environment.clone()), t.fog !== null && (this.fog = t.fog.clone()), this.backgroundBlurriness = t.backgroundBlurriness, this.backgroundIntensity = t.backgroundIntensity, this.backgroundRotation.copy(t.backgroundRotation), this.environmentIntensity = t.environmentIntensity, this.environmentRotation.copy(t.environmentRotation), t.overrideMaterial !== null && (this.overrideMaterial = t.overrideMaterial.clone()), this.matrixAutoUpdate = t.matrixAutoUpdate, this;
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return this.fog !== null && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
  }
}
class Nm {
  constructor(t, e) {
    this.isInterleavedBuffer = true, this.array = t, this.stride = e, this.count = t !== void 0 ? t.length / e : 0, this.usage = Ea, this.updateRanges = [], this.version = 0, this.uuid = qe();
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
  copyAt(t, e, n) {
    t *= this.stride, n *= e.stride;
    for (let s = 0, r = this.stride; s < r; s++) this.array[t + s] = e.array[n + s];
    return this;
  }
  set(t, e = 0) {
    return this.array.set(t, e), this;
  }
  clone(t) {
    t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = qe()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const e = new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(e, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(t) {
    return this.onUploadCallback = t, this;
  }
  toJSON(t) {
    return t.arrayBuffers === void 0 && (t.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = qe()), t.arrayBuffers[this.array.buffer._uuid] === void 0 && (t.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Me = new C();
class Gs {
  constructor(t, e, n, s = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = t, this.itemSize = e, this.offset = n, this.normalized = s;
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
    for (let e = 0, n = this.data.count; e < n; e++) Me.fromBufferAttribute(this, e), Me.applyMatrix4(t), this.setXYZ(e, Me.x, Me.y, Me.z);
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++) Me.fromBufferAttribute(this, e), Me.applyNormalMatrix(t), this.setXYZ(e, Me.x, Me.y, Me.z);
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++) Me.fromBufferAttribute(this, e), Me.transformDirection(t), this.setXYZ(e, Me.x, Me.y, Me.z);
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return this.normalized && (n = He(n, this.array)), n;
  }
  setComponent(t, e, n) {
    return this.normalized && (n = Jt(n, this.array)), this.data.array[t * this.data.stride + this.offset + e] = n, this;
  }
  setX(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset] = e, this;
  }
  setY(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 1] = e, this;
  }
  setZ(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 2] = e, this;
  }
  setW(t, e) {
    return this.normalized && (e = Jt(e, this.array)), this.data.array[t * this.data.stride + this.offset + 3] = e, this;
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return this.normalized && (e = He(e, this.array)), e;
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return this.normalized && (e = He(e, this.array)), e;
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return this.normalized && (e = He(e, this.array)), e;
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return this.normalized && (e = He(e, this.array)), e;
  }
  setXY(t, e, n) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this;
  }
  setXYZ(t, e, n, s) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this;
  }
  setXYZW(t, e, n, s, r) {
    return t = t * this.data.stride + this.offset, this.normalized && (e = Jt(e, this.array), n = Jt(n, this.array), s = Jt(s, this.array), r = Jt(r, this.array)), this.data.array[t + 0] = e, this.data.array[t + 1] = n, this.data.array[t + 2] = s, this.data.array[t + 3] = r, this;
  }
  clone(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) e.push(this.data.array[s + r]);
      }
      return new Ve(new this.array.constructor(e), this.itemSize, this.normalized);
    } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new Gs(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(t) {
    if (t === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const s = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) e.push(this.data.array[s + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: e, normalized: this.normalized };
    } else return t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}), t.interleavedBuffers[this.data.uuid] === void 0 && (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
class Om extends on {
  constructor(t) {
    super(), this.isSpriteMaterial = true, this.type = "SpriteMaterial", this.color = new Bt(16777215), this.map = null, this.alphaMap = null, this.rotation = 0, this.sizeAttenuation = true, this.transparent = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.rotation = t.rotation, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
let ei;
const Ai = new C(), ni = new C(), ii = new C(), si = new $(), bi = new $(), Kl = new Qt(), ds = new C(), wi = new C(), ps = new C(), $o = new $(), Cr = new $(), Qo = new $();
class Fm extends ce {
  constructor(t = new Om()) {
    if (super(), this.isSprite = true, this.type = "Sprite", ei === void 0) {
      ei = new pe();
      const e = new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), n = new Nm(e, 5);
      ei.setIndex([0, 1, 2, 0, 2, 3]), ei.setAttribute("position", new Gs(n, 3, 0, false)), ei.setAttribute("uv", new Gs(n, 2, 3, false));
    }
    this.geometry = ei, this.material = t, this.center = new $(0.5, 0.5);
  }
  raycast(t, e) {
    t.camera === null && console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'), ni.setFromMatrixScale(this.matrixWorld), Kl.copy(t.camera.matrixWorld), this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse, this.matrixWorld), ii.setFromMatrixPosition(this.modelViewMatrix), t.camera.isPerspectiveCamera && this.material.sizeAttenuation === false && ni.multiplyScalar(-ii.z);
    const n = this.material.rotation;
    let s, r;
    n !== 0 && (r = Math.cos(n), s = Math.sin(n));
    const a = this.center;
    ms(ds.set(-0.5, -0.5, 0), ii, a, ni, s, r), ms(wi.set(0.5, -0.5, 0), ii, a, ni, s, r), ms(ps.set(0.5, 0.5, 0), ii, a, ni, s, r), $o.set(0, 0), Cr.set(1, 0), Qo.set(1, 1);
    let o = t.ray.intersectTriangle(ds, wi, ps, false, Ai);
    if (o === null && (ms(wi.set(-0.5, 0.5, 0), ii, a, ni, s, r), Cr.set(0, 1), o = t.ray.intersectTriangle(ds, ps, wi, false, Ai), o === null)) return;
    const l = t.ray.origin.distanceTo(Ai);
    l < t.near || l > t.far || e.push({ distance: l, point: Ai.clone(), uv: Le.getInterpolation(Ai, ds, wi, ps, $o, Cr, Qo, new $()), face: null, object: this });
  }
  copy(t, e) {
    return super.copy(t, e), t.center !== void 0 && this.center.copy(t.center), this.material = t.material, this;
  }
}
function ms(i, t, e, n, s, r) {
  si.subVectors(i, e).addScalar(0.5).multiply(n), s !== void 0 ? (bi.x = r * si.x - s * si.y, bi.y = s * si.x + r * si.y) : bi.copy(si), i.copy(t), i.x += bi.x, i.y += bi.y, i.applyMatrix4(Kl);
}
class z_ extends ge {
  constructor(t = null, e = 1, n = 1, s, r, a, o, l, c = Ae, h = Ae, u, f) {
    super(null, a, o, l, c, h, s, r, u, f), this.isDataTexture = true, this.image = { data: t, width: e, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Zs extends on {
  constructor(t) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Bt(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this.fog = t.fog, this;
  }
}
const Vs = new C(), ks = new C(), tl = new Qt(), Ri = new Gi(), _s = new Hi(), Pr = new C(), el = new C();
class jl extends ce {
  constructor(t = new pe(), e = new Zs()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [0];
      for (let s = 1, r = e.count; s < r; s++) Vs.fromBufferAttribute(e, s - 1), ks.fromBufferAttribute(e, s), n[s] = n[s - 1], n[s] += Vs.distanceTo(ks);
      t.setAttribute("lineDistance", new Kt(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), _s.copy(n.boundingSphere), _s.applyMatrix4(s), _s.radius += r, t.ray.intersectsSphere(_s) === false) return;
    tl.copy(s).invert(), Ri.copy(t.ray).applyMatrix4(tl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, f = n.attributes.position;
    if (h !== null) {
      const m = Math.max(0, a.start), _ = Math.min(h.count, a.start + a.count);
      for (let x = m, d = _ - 1; x < d; x += c) {
        const p = h.getX(x), A = h.getX(x + 1), S = gs(this, t, Ri, l, p, A);
        S && e.push(S);
      }
      if (this.isLineLoop) {
        const x = h.getX(_ - 1), d = h.getX(m), p = gs(this, t, Ri, l, x, d);
        p && e.push(p);
      }
    } else {
      const m = Math.max(0, a.start), _ = Math.min(f.count, a.start + a.count);
      for (let x = m, d = _ - 1; x < d; x += c) {
        const p = gs(this, t, Ri, l, x, x + 1);
        p && e.push(p);
      }
      if (this.isLineLoop) {
        const x = gs(this, t, Ri, l, _ - 1, m);
        x && e.push(x);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function gs(i, t, e, n, s, r) {
  const a = i.geometry.attributes.position;
  if (Vs.fromBufferAttribute(a, s), ks.fromBufferAttribute(a, r), e.distanceSqToSegment(Vs, ks, Pr, el) > n) return;
  Pr.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Pr);
  if (!(l < t.near || l > t.far)) return { distance: l, point: el.clone().applyMatrix4(i.matrixWorld), index: s, face: null, faceIndex: null, barycoord: null, object: i };
}
const nl = new C(), il = new C();
class Bm extends jl {
  constructor(t, e) {
    super(t, e), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position, n = [];
      for (let s = 0, r = e.count; s < r; s += 2) nl.fromBufferAttribute(e, s), il.fromBufferAttribute(e, s + 1), n[s] = s === 0 ? 0 : n[s - 1], n[s + 1] = n[s] + nl.distanceTo(il);
      t.setAttribute("lineDistance", new Kt(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class zm extends on {
  constructor(t) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Bt(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.map = t.map, this.alphaMap = t.alphaMap, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this.fog = t.fog, this;
  }
}
const sl = new Qt(), Aa = new Gi(), vs = new Hi(), xs = new C();
class H_ extends ce {
  constructor(t = new pe(), e = new zm()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = t, this.material = e, this.updateMorphTargets();
  }
  copy(t, e) {
    return super.copy(t, e), this.material = Array.isArray(t.material) ? t.material.slice() : t.material, this.geometry = t.geometry, this;
  }
  raycast(t, e) {
    const n = this.geometry, s = this.matrixWorld, r = t.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), vs.copy(n.boundingSphere), vs.applyMatrix4(s), vs.radius += r, t.ray.intersectsSphere(vs) === false) return;
    sl.copy(s).invert(), Aa.copy(t.ray).applyMatrix4(sl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const f = Math.max(0, a.start), m = Math.min(c.count, a.start + a.count);
      for (let _ = f, x = m; _ < x; _++) {
        const d = c.getX(_);
        xs.fromBufferAttribute(u, d), rl(xs, d, l, s, t, e, this);
      }
    } else {
      const f = Math.max(0, a.start), m = Math.min(u.count, a.start + a.count);
      for (let _ = f, x = m; _ < x; _++) xs.fromBufferAttribute(u, _), rl(xs, _, l, s, t, e, this);
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes, n = Object.keys(e);
    if (n.length > 0) {
      const s = e[n[0]];
      if (s !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = s.length; r < a; r++) {
          const o = s[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function rl(i, t, e, n, s, r, a) {
  const o = Aa.distanceSqToPoint(i);
  if (o < e) {
    const l = new C();
    Aa.closestPointToPoint(i, l), l.applyMatrix4(n);
    const c = s.ray.origin.distanceTo(l);
    if (c < s.near || c > s.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: t, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class G_ extends ge {
  constructor(t, e, n, s, r, a, o, l, c) {
    super(t, e, n, s, r, a, o, l, c), this.isCanvasTexture = true, this.needsUpdate = true;
  }
}
class Ze {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
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
    let n, s = this.getPoint(0), r = 0;
    e.push(0);
    for (let a = 1; a <= t; a++) n = this.getPoint(a / t), r += n.distanceTo(s), e.push(r), s = n;
    return this.cacheArcLengths = e, e;
  }
  updateArcLengths() {
    this.needsUpdate = true, this.getLengths();
  }
  getUtoTmapping(t, e) {
    const n = this.getLengths();
    let s = 0;
    const r = n.length;
    let a;
    e ? a = e : a = t * n[r - 1];
    let o = 0, l = r - 1, c;
    for (; o <= l; ) if (s = Math.floor(o + (l - o) / 2), c = n[s] - a, c < 0) o = s + 1;
    else if (c > 0) l = s - 1;
    else {
      l = s;
      break;
    }
    if (s = l, n[s] === a) return s / (r - 1);
    const h = n[s], f = n[s + 1] - h, m = (a - h) / f;
    return (s + m) / (r - 1);
  }
  getTangent(t, e) {
    let s = t - 1e-4, r = t + 1e-4;
    s < 0 && (s = 0), r > 1 && (r = 1);
    const a = this.getPoint(s), o = this.getPoint(r), l = e || (a.isVector2 ? new $() : new C());
    return l.copy(o).sub(a).normalize(), l;
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e) {
    const n = new C(), s = [], r = [], a = [], o = new C(), l = new Qt();
    for (let m = 0; m <= t; m++) {
      const _ = m / t;
      s[m] = this.getTangentAt(_, new C());
    }
    r[0] = new C(), a[0] = new C();
    let c = Number.MAX_VALUE;
    const h = Math.abs(s[0].x), u = Math.abs(s[0].y), f = Math.abs(s[0].z);
    h <= c && (c = h, n.set(1, 0, 0)), u <= c && (c = u, n.set(0, 1, 0)), f <= c && n.set(0, 0, 1), o.crossVectors(s[0], n).normalize(), r[0].crossVectors(s[0], o), a[0].crossVectors(s[0], r[0]);
    for (let m = 1; m <= t; m++) {
      if (r[m] = r[m - 1].clone(), a[m] = a[m - 1].clone(), o.crossVectors(s[m - 1], s[m]), o.length() > Number.EPSILON) {
        o.normalize();
        const _ = Math.acos(ue(s[m - 1].dot(s[m]), -1, 1));
        r[m].applyMatrix4(l.makeRotationAxis(o, _));
      }
      a[m].crossVectors(s[m], r[m]);
    }
    if (e === true) {
      let m = Math.acos(ue(r[0].dot(r[t]), -1, 1));
      m /= t, s[0].dot(o.crossVectors(r[0], r[t])) > 0 && (m = -m);
      for (let _ = 1; _ <= t; _++) r[_].applyMatrix4(l.makeRotationAxis(s[_], m * _)), a[_].crossVectors(s[_], r[_]);
    }
    return { tangents: s, normals: r, binormals: a };
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
class Xa extends Ze {
  constructor(t = 0, e = 0, n = 1, s = 1, r = 0, a = Math.PI * 2, o = false, l = 0) {
    super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t, this.aY = e, this.xRadius = n, this.yRadius = s, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = l;
  }
  getPoint(t, e = new $()) {
    const n = e, s = Math.PI * 2;
    let r = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(r) < Number.EPSILON;
    for (; r < 0; ) r += s;
    for (; r > s; ) r -= s;
    r < Number.EPSILON && (a ? r = 0 : r = s), this.aClockwise === true && !a && (r === s ? r = -s : r = r - s);
    const o = this.aStartAngle + t * r;
    let l = this.aX + this.xRadius * Math.cos(o), c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), f = l - this.aX, m = c - this.aY;
      l = f * h - m * u + this.aX, c = f * u + m * h + this.aY;
    }
    return n.set(l, c);
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
class Hm extends Xa {
  constructor(t, e, n, s, r, a) {
    super(t, e, n, n, s, r, a), this.isArcCurve = true, this.type = "ArcCurve";
  }
}
function Ya() {
  let i = 0, t = 0, e = 0, n = 0;
  function s(r, a, o, l) {
    i = r, t = o, e = -3 * r + 3 * a - 2 * o - l, n = 2 * r - 2 * a + o + l;
  }
  return { initCatmullRom: function(r, a, o, l, c) {
    s(a, o, c * (o - r), c * (l - a));
  }, initNonuniformCatmullRom: function(r, a, o, l, c, h, u) {
    let f = (a - r) / c - (o - r) / (c + h) + (o - a) / h, m = (o - a) / h - (l - a) / (h + u) + (l - o) / u;
    f *= h, m *= h, s(a, o, f, m);
  }, calc: function(r) {
    const a = r * r, o = a * r;
    return i + t * r + e * a + n * o;
  } };
}
const Ms = new C(), Lr = new Ya(), Dr = new Ya(), Ur = new Ya();
class Gm extends Ze {
  constructor(t = [], e = false, n = "centripetal", s = 0.5) {
    super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t, this.closed = e, this.curveType = n, this.tension = s;
  }
  getPoint(t, e = new C()) {
    const n = e, s = this.points, r = s.length, a = (r - (this.closed ? 0 : 1)) * t;
    let o = Math.floor(a), l = a - o;
    this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r : l === 0 && o === r - 1 && (o = r - 2, l = 1);
    let c, h;
    this.closed || o > 0 ? c = s[(o - 1) % r] : (Ms.subVectors(s[0], s[1]).add(s[0]), c = Ms);
    const u = s[o % r], f = s[(o + 1) % r];
    if (this.closed || o + 2 < r ? h = s[(o + 2) % r] : (Ms.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), h = Ms), this.curveType === "centripetal" || this.curveType === "chordal") {
      const m = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(c.distanceToSquared(u), m), x = Math.pow(u.distanceToSquared(f), m), d = Math.pow(f.distanceToSquared(h), m);
      x < 1e-4 && (x = 1), _ < 1e-4 && (_ = x), d < 1e-4 && (d = x), Lr.initNonuniformCatmullRom(c.x, u.x, f.x, h.x, _, x, d), Dr.initNonuniformCatmullRom(c.y, u.y, f.y, h.y, _, x, d), Ur.initNonuniformCatmullRom(c.z, u.z, f.z, h.z, _, x, d);
    } else this.curveType === "catmullrom" && (Lr.initCatmullRom(c.x, u.x, f.x, h.x, this.tension), Dr.initCatmullRom(c.y, u.y, f.y, h.y, this.tension), Ur.initCatmullRom(c.z, u.z, f.z, h.z, this.tension));
    return n.set(Lr.calc(l), Dr.calc(l), Ur.calc(l)), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(s.clone());
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const s = this.points[e];
      t.points.push(s.toArray());
    }
    return t.closed = this.closed, t.curveType = this.curveType, t.tension = this.tension, t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(new C().fromArray(s));
    }
    return this.closed = t.closed, this.curveType = t.curveType, this.tension = t.tension, this;
  }
}
function al(i, t, e, n, s) {
  const r = (n - t) * 0.5, a = (s - e) * 0.5, o = i * i, l = i * o;
  return (2 * e - 2 * n + r + a) * l + (-3 * e + 3 * n - 2 * r - a) * o + r * i + e;
}
function Vm(i, t) {
  const e = 1 - i;
  return e * e * t;
}
function km(i, t) {
  return 2 * (1 - i) * i * t;
}
function Wm(i, t) {
  return i * i * t;
}
function Li(i, t, e, n) {
  return Vm(i, t) + km(i, e) + Wm(i, n);
}
function Xm(i, t) {
  const e = 1 - i;
  return e * e * e * t;
}
function Ym(i, t) {
  const e = 1 - i;
  return 3 * e * e * i * t;
}
function qm(i, t) {
  return 3 * (1 - i) * i * i * t;
}
function Zm(i, t) {
  return i * i * i * t;
}
function Di(i, t, e, n, s) {
  return Xm(i, t) + Ym(i, e) + qm(i, n) + Zm(i, s);
}
class Jl extends Ze {
  constructor(t = new $(), e = new $(), n = new $(), s = new $()) {
    super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = s;
  }
  getPoint(t, e = new $()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(Di(t, s.x, r.x, a.x, o.x), Di(t, s.y, r.y, a.y, o.y)), n;
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
class Km extends Ze {
  constructor(t = new C(), e = new C(), n = new C(), s = new C()) {
    super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n, this.v3 = s;
  }
  getPoint(t, e = new C()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2, o = this.v3;
    return n.set(Di(t, s.x, r.x, a.x, o.x), Di(t, s.y, r.y, a.y, o.y), Di(t, s.z, r.z, a.z, o.z)), n;
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
class $l extends Ze {
  constructor(t = new $(), e = new $()) {
    super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new $()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new $()) {
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
class jm extends Ze {
  constructor(t = new C(), e = new C()) {
    super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t, this.v2 = e;
  }
  getPoint(t, e = new C()) {
    const n = e;
    return t === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)), n;
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new C()) {
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
class Ql extends Ze {
  constructor(t = new $(), e = new $(), n = new $()) {
    super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new $()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2;
    return n.set(Li(t, s.x, r.x, a.x), Li(t, s.y, r.y, a.y)), n;
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
class Jm extends Ze {
  constructor(t = new C(), e = new C(), n = new C()) {
    super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t, this.v1 = e, this.v2 = n;
  }
  getPoint(t, e = new C()) {
    const n = e, s = this.v0, r = this.v1, a = this.v2;
    return n.set(Li(t, s.x, r.x, a.x), Li(t, s.y, r.y, a.y), Li(t, s.z, r.z, a.z)), n;
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
class tc extends Ze {
  constructor(t = []) {
    super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t;
  }
  getPoint(t, e = new $()) {
    const n = e, s = this.points, r = (s.length - 1) * t, a = Math.floor(r), o = r - a, l = s[a === 0 ? a : a - 1], c = s[a], h = s[a > s.length - 2 ? s.length - 1 : a + 1], u = s[a > s.length - 3 ? s.length - 1 : a + 2];
    return n.set(al(o, l.x, c.x, h.x, u.x), al(o, l.y, c.y, h.y, u.y)), n;
  }
  copy(t) {
    super.copy(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const s = this.points[e];
      t.points.push(s.toArray());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.points = [];
    for (let e = 0, n = t.points.length; e < n; e++) {
      const s = t.points[e];
      this.points.push(new $().fromArray(s));
    }
    return this;
  }
}
var ba = Object.freeze({ __proto__: null, ArcCurve: Hm, CatmullRomCurve3: Gm, CubicBezierCurve: Jl, CubicBezierCurve3: Km, EllipseCurve: Xa, LineCurve: $l, LineCurve3: jm, QuadraticBezierCurve: Ql, QuadraticBezierCurve3: Jm, SplineCurve: tc });
class $m extends Ze {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === true ? "LineCurve" : "LineCurve3";
      this.curves.push(new ba[n](e, t));
    }
    return this;
  }
  getPoint(t, e) {
    const n = t * this.getLength(), s = this.getCurveLengths();
    let r = 0;
    for (; r < s.length; ) {
      if (s[r] >= n) {
        const a = s[r] - n, o = this.curves[r], l = o.getLength(), c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, e);
      }
      r++;
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
    for (let n = 0, s = this.curves.length; n < s; n++) e += this.curves[n].getLength(), t.push(e);
    return this.cacheLengths = t, t;
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return this.autoClose && e.push(e[0]), e;
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let s = 0, r = this.curves; s < r.length; s++) {
      const a = r[s], o = a.isEllipseCurve ? t * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? t * a.points.length : t, l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const h = l[c];
        n && n.equals(h) || (e.push(h), n = h);
      }
    }
    return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
  }
  copy(t) {
    super.copy(t), this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const s = t.curves[e];
      this.curves.push(s.clone());
    }
    return this.autoClose = t.autoClose, this;
  }
  toJSON() {
    const t = super.toJSON();
    t.autoClose = this.autoClose, t.curves = [];
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const s = this.curves[e];
      t.curves.push(s.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.autoClose = t.autoClose, this.curves = [];
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const s = t.curves[e];
      this.curves.push(new ba[s.type]().fromJSON(s));
    }
    return this;
  }
}
class ol extends $m {
  constructor(t) {
    super(), this.type = "Path", this.currentPoint = new $(), t && this.setFromPoints(t);
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return this.currentPoint.set(t, e), this;
  }
  lineTo(t, e) {
    const n = new $l(this.currentPoint.clone(), new $(t, e));
    return this.curves.push(n), this.currentPoint.set(t, e), this;
  }
  quadraticCurveTo(t, e, n, s) {
    const r = new Ql(this.currentPoint.clone(), new $(t, e), new $(n, s));
    return this.curves.push(r), this.currentPoint.set(n, s), this;
  }
  bezierCurveTo(t, e, n, s, r, a) {
    const o = new Jl(this.currentPoint.clone(), new $(t, e), new $(n, s), new $(r, a));
    return this.curves.push(o), this.currentPoint.set(r, a), this;
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t), n = new tc(e);
    return this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this;
  }
  arc(t, e, n, s, r, a) {
    const o = this.currentPoint.x, l = this.currentPoint.y;
    return this.absarc(t + o, e + l, n, s, r, a), this;
  }
  absarc(t, e, n, s, r, a) {
    return this.absellipse(t, e, n, n, s, r, a), this;
  }
  ellipse(t, e, n, s, r, a, o, l) {
    const c = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(t + c, e + h, n, s, r, a, o, l), this;
  }
  absellipse(t, e, n, s, r, a, o, l) {
    const c = new Xa(t, e, n, s, r, a, o, l);
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
class qa extends pe {
  constructor(t = 1, e = 1, n = 1, s = 32, r = 1, a = false, o = 0, l = Math.PI * 2) {
    super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t, radiusBottom: e, height: n, radialSegments: s, heightSegments: r, openEnded: a, thetaStart: o, thetaLength: l };
    const c = this;
    s = Math.floor(s), r = Math.floor(r);
    const h = [], u = [], f = [], m = [];
    let _ = 0;
    const x = [], d = n / 2;
    let p = 0;
    A(), a === false && (t > 0 && S(true), e > 0 && S(false)), this.setIndex(h), this.setAttribute("position", new Kt(u, 3)), this.setAttribute("normal", new Kt(f, 3)), this.setAttribute("uv", new Kt(m, 2));
    function A() {
      const E = new C(), I = new C();
      let R = 0;
      const w = (e - t) / n;
      for (let U = 0; U <= r; U++) {
        const J = [], g = U / r, y = g * (e - t) + t;
        for (let G = 0; G <= s; G++) {
          const B = G / s, H = B * l + o, j = Math.sin(H), F = Math.cos(H);
          I.x = y * j, I.y = -g * n + d, I.z = y * F, u.push(I.x, I.y, I.z), E.set(j, w, F).normalize(), f.push(E.x, E.y, E.z), m.push(B, 1 - g), J.push(_++);
        }
        x.push(J);
      }
      for (let U = 0; U < s; U++) for (let J = 0; J < r; J++) {
        const g = x[J][U], y = x[J + 1][U], G = x[J + 1][U + 1], B = x[J][U + 1];
        t > 0 && (h.push(g, y, B), R += 3), e > 0 && (h.push(y, G, B), R += 3);
      }
      c.addGroup(p, R, 0), p += R;
    }
    function S(E) {
      const I = _, R = new $(), w = new C();
      let U = 0;
      const J = E === true ? t : e, g = E === true ? 1 : -1;
      for (let G = 1; G <= s; G++) u.push(0, d * g, 0), f.push(0, g, 0), m.push(0.5, 0.5), _++;
      const y = _;
      for (let G = 0; G <= s; G++) {
        const H = G / s * l + o, j = Math.cos(H), F = Math.sin(H);
        w.x = J * F, w.y = d * g, w.z = J * j, u.push(w.x, w.y, w.z), f.push(0, g, 0), R.x = j * 0.5 + 0.5, R.y = F * 0.5 * g + 0.5, m.push(R.x, R.y), _++;
      }
      for (let G = 0; G < s; G++) {
        const B = I + G, H = y + G;
        E === true ? h.push(H, H + 1, B) : h.push(H + 1, H, B), U += 3;
      }
      c.addGroup(p, U, E === true ? 1 : 2), p += U;
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new qa(t.radiusTop, t.radiusBottom, t.height, t.radialSegments, t.heightSegments, t.openEnded, t.thetaStart, t.thetaLength);
  }
}
const Ss = new C(), ys = new C(), Ir = new C(), Es = new Le();
class V_ extends pe {
  constructor(t = null, e = 1) {
    if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t, thresholdAngle: e }, t !== null) {
      const s = Math.pow(10, 4), r = Math.cos(ui * e), a = t.getIndex(), o = t.getAttribute("position"), l = a ? a.count : o.count, c = [0, 0, 0], h = ["a", "b", "c"], u = new Array(3), f = {}, m = [];
      for (let _ = 0; _ < l; _ += 3) {
        a ? (c[0] = a.getX(_), c[1] = a.getX(_ + 1), c[2] = a.getX(_ + 2)) : (c[0] = _, c[1] = _ + 1, c[2] = _ + 2);
        const { a: x, b: d, c: p } = Es;
        if (x.fromBufferAttribute(o, c[0]), d.fromBufferAttribute(o, c[1]), p.fromBufferAttribute(o, c[2]), Es.getNormal(Ir), u[0] = `${Math.round(x.x * s)},${Math.round(x.y * s)},${Math.round(x.z * s)}`, u[1] = `${Math.round(d.x * s)},${Math.round(d.y * s)},${Math.round(d.z * s)}`, u[2] = `${Math.round(p.x * s)},${Math.round(p.y * s)},${Math.round(p.z * s)}`, !(u[0] === u[1] || u[1] === u[2] || u[2] === u[0])) for (let A = 0; A < 3; A++) {
          const S = (A + 1) % 3, E = u[A], I = u[S], R = Es[h[A]], w = Es[h[S]], U = `${E}_${I}`, J = `${I}_${E}`;
          J in f && f[J] ? (Ir.dot(f[J].normal) <= r && (m.push(R.x, R.y, R.z), m.push(w.x, w.y, w.z)), f[J] = null) : U in f || (f[U] = { index0: c[A], index1: c[S], normal: Ir.clone() });
        }
      }
      for (const _ in f) if (f[_]) {
        const { index0: x, index1: d } = f[_];
        Ss.fromBufferAttribute(o, x), ys.fromBufferAttribute(o, d), m.push(Ss.x, Ss.y, Ss.z), m.push(ys.x, ys.y, ys.z);
      }
      this.setAttribute("position", new Kt(m, 3));
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
}
class ec extends ol {
  constructor(t) {
    super(t), this.uuid = qe(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, s = this.holes.length; n < s; n++) e[n] = this.holes[n].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    super.copy(t), this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const s = t.holes[e];
      this.holes.push(s.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.uuid = this.uuid, t.holes = [];
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const s = this.holes[e];
      t.holes.push(s.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    super.fromJSON(t), this.uuid = t.uuid, this.holes = [];
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const s = t.holes[e];
      this.holes.push(new ol().fromJSON(s));
    }
    return this;
  }
}
const Qm = { triangulate: function(i, t, e = 2) {
  const n = t && t.length, s = n ? t[0] * e : i.length;
  let r = nc(i, 0, s, e, true);
  const a = [];
  if (!r || r.next === r.prev) return a;
  let o, l, c, h, u, f, m;
  if (n && (r = s_(i, t, r, e)), i.length > 80 * e) {
    o = c = i[0], l = h = i[1];
    for (let _ = e; _ < s; _ += e) u = i[_], f = i[_ + 1], u < o && (o = u), f < l && (l = f), u > c && (c = u), f > h && (h = f);
    m = Math.max(c - o, h - l), m = m !== 0 ? 32767 / m : 0;
  }
  return Ni(r, a, e, o, l, m, 0), a;
} };
function nc(i, t, e, n, s) {
  let r, a;
  if (s === m_(i, t, e, n) > 0) for (r = t; r < e; r += n) a = ll(r, i[r], i[r + 1], a);
  else for (r = e - n; r >= t; r -= n) a = ll(r, i[r], i[r + 1], a);
  return a && Ks(a, a.next) && (Fi(a), a = a.next), a;
}
function Bn(i, t) {
  if (!i) return i;
  t || (t = i);
  let e = i, n;
  do
    if (n = false, !e.steiner && (Ks(e, e.next) || ie(e.prev, e, e.next) === 0)) {
      if (Fi(e), e = t = e.prev, e === e.next) break;
      n = true;
    } else e = e.next;
  while (n || e !== t);
  return t;
}
function Ni(i, t, e, n, s, r, a) {
  if (!i) return;
  !a && r && c_(i, n, s, r);
  let o = i, l, c;
  for (; i.prev !== i.next; ) {
    if (l = i.prev, c = i.next, r ? e_(i, n, s, r) : t_(i)) {
      t.push(l.i / e | 0), t.push(i.i / e | 0), t.push(c.i / e | 0), Fi(i), i = c.next, o = c.next;
      continue;
    }
    if (i = c, i === o) {
      a ? a === 1 ? (i = n_(Bn(i), t, e), Ni(i, t, e, n, s, r, 2)) : a === 2 && i_(i, t, e, n, s, r) : Ni(Bn(i), t, e, n, s, r, 1);
      break;
    }
  }
}
function t_(i) {
  const t = i.prev, e = i, n = i.next;
  if (ie(t, e, n) >= 0) return false;
  const s = t.x, r = e.x, a = n.x, o = t.y, l = e.y, c = n.y, h = s < r ? s < a ? s : a : r < a ? r : a, u = o < l ? o < c ? o : c : l < c ? l : c, f = s > r ? s > a ? s : a : r > a ? r : a, m = o > l ? o > c ? o : c : l > c ? l : c;
  let _ = n.next;
  for (; _ !== t; ) {
    if (_.x >= h && _.x <= f && _.y >= u && _.y <= m && oi(s, o, r, l, a, c, _.x, _.y) && ie(_.prev, _, _.next) >= 0) return false;
    _ = _.next;
  }
  return true;
}
function e_(i, t, e, n) {
  const s = i.prev, r = i, a = i.next;
  if (ie(s, r, a) >= 0) return false;
  const o = s.x, l = r.x, c = a.x, h = s.y, u = r.y, f = a.y, m = o < l ? o < c ? o : c : l < c ? l : c, _ = h < u ? h < f ? h : f : u < f ? u : f, x = o > l ? o > c ? o : c : l > c ? l : c, d = h > u ? h > f ? h : f : u > f ? u : f, p = wa(m, _, t, e, n), A = wa(x, d, t, e, n);
  let S = i.prevZ, E = i.nextZ;
  for (; S && S.z >= p && E && E.z <= A; ) {
    if (S.x >= m && S.x <= x && S.y >= _ && S.y <= d && S !== s && S !== a && oi(o, h, l, u, c, f, S.x, S.y) && ie(S.prev, S, S.next) >= 0 || (S = S.prevZ, E.x >= m && E.x <= x && E.y >= _ && E.y <= d && E !== s && E !== a && oi(o, h, l, u, c, f, E.x, E.y) && ie(E.prev, E, E.next) >= 0)) return false;
    E = E.nextZ;
  }
  for (; S && S.z >= p; ) {
    if (S.x >= m && S.x <= x && S.y >= _ && S.y <= d && S !== s && S !== a && oi(o, h, l, u, c, f, S.x, S.y) && ie(S.prev, S, S.next) >= 0) return false;
    S = S.prevZ;
  }
  for (; E && E.z <= A; ) {
    if (E.x >= m && E.x <= x && E.y >= _ && E.y <= d && E !== s && E !== a && oi(o, h, l, u, c, f, E.x, E.y) && ie(E.prev, E, E.next) >= 0) return false;
    E = E.nextZ;
  }
  return true;
}
function n_(i, t, e) {
  let n = i;
  do {
    const s = n.prev, r = n.next.next;
    !Ks(s, r) && ic(s, n, n.next, r) && Oi(s, r) && Oi(r, s) && (t.push(s.i / e | 0), t.push(n.i / e | 0), t.push(r.i / e | 0), Fi(n), Fi(n.next), n = i = r), n = n.next;
  } while (n !== i);
  return Bn(n);
}
function i_(i, t, e, n, s, r) {
  let a = i;
  do {
    let o = a.next.next;
    for (; o !== a.prev; ) {
      if (a.i !== o.i && f_(a, o)) {
        let l = sc(a, o);
        a = Bn(a, a.next), l = Bn(l, l.next), Ni(a, t, e, n, s, r, 0), Ni(l, t, e, n, s, r, 0);
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== i);
}
function s_(i, t, e, n) {
  const s = [];
  let r, a, o, l, c;
  for (r = 0, a = t.length; r < a; r++) o = t[r] * n, l = r < a - 1 ? t[r + 1] * n : i.length, c = nc(i, o, l, n, false), c === c.next && (c.steiner = true), s.push(u_(c));
  for (s.sort(r_), r = 0; r < s.length; r++) e = a_(s[r], e);
  return e;
}
function r_(i, t) {
  return i.x - t.x;
}
function a_(i, t) {
  const e = o_(i, t);
  if (!e) return t;
  const n = sc(e, i);
  return Bn(n, n.next), Bn(e, e.next);
}
function o_(i, t) {
  let e = t, n = -1 / 0, s;
  const r = i.x, a = i.y;
  do {
    if (a <= e.y && a >= e.next.y && e.next.y !== e.y) {
      const f = e.x + (a - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
      if (f <= r && f > n && (n = f, s = e.x < e.next.x ? e : e.next, f === r)) return s;
    }
    e = e.next;
  } while (e !== t);
  if (!s) return null;
  const o = s, l = s.x, c = s.y;
  let h = 1 / 0, u;
  e = s;
  do
    r >= e.x && e.x >= l && r !== e.x && oi(a < c ? r : n, a, l, c, a < c ? n : r, a, e.x, e.y) && (u = Math.abs(a - e.y) / (r - e.x), Oi(e, i) && (u < h || u === h && (e.x > s.x || e.x === s.x && l_(s, e))) && (s = e, h = u)), e = e.next;
  while (e !== o);
  return s;
}
function l_(i, t) {
  return ie(i.prev, i, t.prev) < 0 && ie(t.next, i, i.next) < 0;
}
function c_(i, t, e, n) {
  let s = i;
  do
    s.z === 0 && (s.z = wa(s.x, s.y, t, e, n)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next;
  while (s !== i);
  s.prevZ.nextZ = null, s.prevZ = null, h_(s);
}
function h_(i) {
  let t, e, n, s, r, a, o, l, c = 1;
  do {
    for (e = i, i = null, r = null, a = 0; e; ) {
      for (a++, n = e, o = 0, t = 0; t < c && (o++, n = n.nextZ, !!n); t++) ;
      for (l = c; o > 0 || l > 0 && n; ) o !== 0 && (l === 0 || !n || e.z <= n.z) ? (s = e, e = e.nextZ, o--) : (s = n, n = n.nextZ, l--), r ? r.nextZ = s : i = s, s.prevZ = r, r = s;
      e = n;
    }
    r.nextZ = null, c *= 2;
  } while (a > 1);
  return i;
}
function wa(i, t, e, n, s) {
  return i = (i - e) * s | 0, t = (t - n) * s | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, i | t << 1;
}
function u_(i) {
  let t = i, e = i;
  do
    (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next;
  while (t !== i);
  return e;
}
function oi(i, t, e, n, s, r, a, o) {
  return (s - a) * (t - o) >= (i - a) * (r - o) && (i - a) * (n - o) >= (e - a) * (t - o) && (e - a) * (r - o) >= (s - a) * (n - o);
}
function f_(i, t) {
  return i.next.i !== t.i && i.prev.i !== t.i && !d_(i, t) && (Oi(i, t) && Oi(t, i) && p_(i, t) && (ie(i.prev, i, t.prev) || ie(i, t.prev, t)) || Ks(i, t) && ie(i.prev, i, i.next) > 0 && ie(t.prev, t, t.next) > 0);
}
function ie(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function Ks(i, t) {
  return i.x === t.x && i.y === t.y;
}
function ic(i, t, e, n) {
  const s = As(ie(i, t, e)), r = As(ie(i, t, n)), a = As(ie(e, n, i)), o = As(ie(e, n, t));
  return !!(s !== r && a !== o || s === 0 && Ts(i, e, t) || r === 0 && Ts(i, n, t) || a === 0 && Ts(e, i, n) || o === 0 && Ts(e, t, n));
}
function Ts(i, t, e) {
  return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y);
}
function As(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function d_(i, t) {
  let e = i;
  do {
    if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && ic(e, e.next, i, t)) return true;
    e = e.next;
  } while (e !== i);
  return false;
}
function Oi(i, t) {
  return ie(i.prev, i, i.next) < 0 ? ie(i, t, i.next) >= 0 && ie(i, i.prev, t) >= 0 : ie(i, t, i.prev) < 0 || ie(i, i.next, t) < 0;
}
function p_(i, t) {
  let e = i, n = false;
  const s = (i.x + t.x) / 2, r = (i.y + t.y) / 2;
  do
    e.y > r != e.next.y > r && e.next.y !== e.y && s < (e.next.x - e.x) * (r - e.y) / (e.next.y - e.y) + e.x && (n = !n), e = e.next;
  while (e !== i);
  return n;
}
function sc(i, t) {
  const e = new Ra(i.i, i.x, i.y), n = new Ra(t.i, t.x, t.y), s = i.next, r = t.prev;
  return i.next = t, t.prev = i, e.next = s, s.prev = e, n.next = e, e.prev = n, r.next = n, n.prev = r, n;
}
function ll(i, t, e, n) {
  const s = new Ra(i, t, e);
  return n ? (s.next = n.next, s.prev = n, n.next.prev = s, n.next = s) : (s.prev = s, s.next = s), s;
}
function Fi(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function Ra(i, t, e) {
  this.i = i, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
function m_(i, t, e, n) {
  let s = 0;
  for (let r = t, a = e - n; r < e; r += n) s += (i[a] - i[r]) * (i[r + 1] + i[a + 1]), a = r;
  return s;
}
class xn {
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let s = e - 1, r = 0; r < e; s = r++) n += t[s].x * t[r].y - t[r].x * t[s].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return xn.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [], s = [], r = [];
    cl(t), hl(n, t);
    let a = t.length;
    e.forEach(cl);
    for (let l = 0; l < e.length; l++) s.push(a), a += e[l].length, hl(n, e[l]);
    const o = Qm.triangulate(n, s);
    for (let l = 0; l < o.length; l += 3) r.push(o.slice(l, l + 3));
    return r;
  }
}
function cl(i) {
  const t = i.length;
  t > 2 && i[t - 1].equals(i[0]) && i.pop();
}
function hl(i, t) {
  for (let e = 0; e < t.length; e++) i.push(t[e].x), i.push(t[e].y);
}
class rc extends pe {
  constructor(t = new ec([new $(0.5, 0.5), new $(-0.5, 0.5), new $(-0.5, -0.5), new $(0.5, -0.5)]), e = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t, options: e }, t = Array.isArray(t) ? t : [t];
    const n = this, s = [], r = [];
    for (let o = 0, l = t.length; o < l; o++) {
      const c = t[o];
      a(c);
    }
    this.setAttribute("position", new Kt(s, 3)), this.setAttribute("uv", new Kt(r, 2)), this.computeVertexNormals();
    function a(o) {
      const l = [], c = e.curveSegments !== void 0 ? e.curveSegments : 12, h = e.steps !== void 0 ? e.steps : 1, u = e.depth !== void 0 ? e.depth : 1;
      let f = e.bevelEnabled !== void 0 ? e.bevelEnabled : true, m = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2, _ = e.bevelSize !== void 0 ? e.bevelSize : m - 0.1, x = e.bevelOffset !== void 0 ? e.bevelOffset : 0, d = e.bevelSegments !== void 0 ? e.bevelSegments : 3;
      const p = e.extrudePath, A = e.UVGenerator !== void 0 ? e.UVGenerator : __;
      let S, E = false, I, R, w, U;
      p && (S = p.getSpacedPoints(h), E = true, f = false, I = p.computeFrenetFrames(h, false), R = new C(), w = new C(), U = new C()), f || (d = 0, m = 0, _ = 0, x = 0);
      const J = o.extractPoints(c);
      let g = J.shape;
      const y = J.holes;
      if (!xn.isClockWise(g)) {
        g = g.reverse();
        for (let q = 0, b = y.length; q < b; q++) {
          const rt = y[q];
          xn.isClockWise(rt) && (y[q] = rt.reverse());
        }
      }
      const B = xn.triangulateShape(g, y), H = g;
      for (let q = 0, b = y.length; q < b; q++) {
        const rt = y[q];
        g = g.concat(rt);
      }
      function j(q, b, rt) {
        return b || console.error("THREE.ExtrudeGeometry: vec does not exist"), q.clone().addScaledVector(b, rt);
      }
      const F = g.length, tt = B.length;
      function k(q, b, rt) {
        let st, Q, at;
        const bt = q.x - b.x, mt = q.y - b.y, T = rt.x - q.x, v = rt.y - q.y, N = bt * bt + mt * mt, X = bt * v - mt * T;
        if (Math.abs(X) > Number.EPSILON) {
          const Z = Math.sqrt(N), Y = Math.sqrt(T * T + v * v), Et = b.x - mt / Z, ot = b.y + bt / Z, vt = rt.x - v / Y, Gt = rt.y + T / Y, nt = ((vt - Et) * v - (Gt - ot) * T) / (bt * v - mt * T);
          st = Et + bt * nt - q.x, Q = ot + mt * nt - q.y;
          const xt = st * st + Q * Q;
          if (xt <= 2) return new $(st, Q);
          at = Math.sqrt(xt / 2);
        } else {
          let Z = false;
          bt > Number.EPSILON ? T > Number.EPSILON && (Z = true) : bt < -Number.EPSILON ? T < -Number.EPSILON && (Z = true) : Math.sign(mt) === Math.sign(v) && (Z = true), Z ? (st = -mt, Q = bt, at = Math.sqrt(N)) : (st = bt, Q = mt, at = Math.sqrt(N / 2));
        }
        return new $(st / at, Q / at);
      }
      const ht = [];
      for (let q = 0, b = H.length, rt = b - 1, st = q + 1; q < b; q++, rt++, st++) rt === b && (rt = 0), st === b && (st = 0), ht[q] = k(H[q], H[rt], H[st]);
      const dt = [];
      let pt, Ht = ht.concat();
      for (let q = 0, b = y.length; q < b; q++) {
        const rt = y[q];
        pt = [];
        for (let st = 0, Q = rt.length, at = Q - 1, bt = st + 1; st < Q; st++, at++, bt++) at === Q && (at = 0), bt === Q && (bt = 0), pt[st] = k(rt[st], rt[at], rt[bt]);
        dt.push(pt), Ht = Ht.concat(pt);
      }
      for (let q = 0; q < d; q++) {
        const b = q / d, rt = m * Math.cos(b * Math.PI / 2), st = _ * Math.sin(b * Math.PI / 2) + x;
        for (let Q = 0, at = H.length; Q < at; Q++) {
          const bt = j(H[Q], ht[Q], st);
          ct(bt.x, bt.y, -rt);
        }
        for (let Q = 0, at = y.length; Q < at; Q++) {
          const bt = y[Q];
          pt = dt[Q];
          for (let mt = 0, T = bt.length; mt < T; mt++) {
            const v = j(bt[mt], pt[mt], st);
            ct(v.x, v.y, -rt);
          }
        }
      }
      const Wt = _ + x;
      for (let q = 0; q < F; q++) {
        const b = f ? j(g[q], Ht[q], Wt) : g[q];
        E ? (w.copy(I.normals[0]).multiplyScalar(b.x), R.copy(I.binormals[0]).multiplyScalar(b.y), U.copy(S[0]).add(w).add(R), ct(U.x, U.y, U.z)) : ct(b.x, b.y, 0);
      }
      for (let q = 1; q <= h; q++) for (let b = 0; b < F; b++) {
        const rt = f ? j(g[b], Ht[b], Wt) : g[b];
        E ? (w.copy(I.normals[q]).multiplyScalar(rt.x), R.copy(I.binormals[q]).multiplyScalar(rt.y), U.copy(S[q]).add(w).add(R), ct(U.x, U.y, U.z)) : ct(rt.x, rt.y, u / h * q);
      }
      for (let q = d - 1; q >= 0; q--) {
        const b = q / d, rt = m * Math.cos(b * Math.PI / 2), st = _ * Math.sin(b * Math.PI / 2) + x;
        for (let Q = 0, at = H.length; Q < at; Q++) {
          const bt = j(H[Q], ht[Q], st);
          ct(bt.x, bt.y, u + rt);
        }
        for (let Q = 0, at = y.length; Q < at; Q++) {
          const bt = y[Q];
          pt = dt[Q];
          for (let mt = 0, T = bt.length; mt < T; mt++) {
            const v = j(bt[mt], pt[mt], st);
            E ? ct(v.x, v.y + S[h - 1].y, S[h - 1].x + rt) : ct(v.x, v.y, u + rt);
          }
        }
      }
      W(), et();
      function W() {
        const q = s.length / 3;
        if (f) {
          let b = 0, rt = F * b;
          for (let st = 0; st < tt; st++) {
            const Q = B[st];
            Ct(Q[2] + rt, Q[1] + rt, Q[0] + rt);
          }
          b = h + d * 2, rt = F * b;
          for (let st = 0; st < tt; st++) {
            const Q = B[st];
            Ct(Q[0] + rt, Q[1] + rt, Q[2] + rt);
          }
        } else {
          for (let b = 0; b < tt; b++) {
            const rt = B[b];
            Ct(rt[2], rt[1], rt[0]);
          }
          for (let b = 0; b < tt; b++) {
            const rt = B[b];
            Ct(rt[0] + F * h, rt[1] + F * h, rt[2] + F * h);
          }
        }
        n.addGroup(q, s.length / 3 - q, 0);
      }
      function et() {
        const q = s.length / 3;
        let b = 0;
        Mt(H, b), b += H.length;
        for (let rt = 0, st = y.length; rt < st; rt++) {
          const Q = y[rt];
          Mt(Q, b), b += Q.length;
        }
        n.addGroup(q, s.length / 3 - q, 1);
      }
      function Mt(q, b) {
        let rt = q.length;
        for (; --rt >= 0; ) {
          const st = rt;
          let Q = rt - 1;
          Q < 0 && (Q = q.length - 1);
          for (let at = 0, bt = h + d * 2; at < bt; at++) {
            const mt = F * at, T = F * (at + 1), v = b + st + mt, N = b + Q + mt, X = b + Q + T, Z = b + st + T;
            Rt(v, N, X, Z);
          }
        }
      }
      function ct(q, b, rt) {
        l.push(q), l.push(b), l.push(rt);
      }
      function Ct(q, b, rt) {
        It(q), It(b), It(rt);
        const st = s.length / 3, Q = A.generateTopUV(n, s, st - 3, st - 2, st - 1);
        zt(Q[0]), zt(Q[1]), zt(Q[2]);
      }
      function Rt(q, b, rt, st) {
        It(q), It(b), It(st), It(b), It(rt), It(st);
        const Q = s.length / 3, at = A.generateSideWallUV(n, s, Q - 6, Q - 3, Q - 2, Q - 1);
        zt(at[0]), zt(at[1]), zt(at[3]), zt(at[1]), zt(at[2]), zt(at[3]);
      }
      function It(q) {
        s.push(l[q * 3 + 0]), s.push(l[q * 3 + 1]), s.push(l[q * 3 + 2]);
      }
      function zt(q) {
        r.push(q.x), r.push(q.y);
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes, n = this.parameters.options;
    return g_(e, n, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let r = 0, a = t.shapes.length; r < a; r++) {
      const o = e[t.shapes[r]];
      n.push(o);
    }
    const s = t.options.extrudePath;
    return s !== void 0 && (t.options.extrudePath = new ba[s.type]().fromJSON(s)), new rc(n, t.options);
  }
}
const __ = { generateTopUV: function(i, t, e, n, s) {
  const r = t[e * 3], a = t[e * 3 + 1], o = t[n * 3], l = t[n * 3 + 1], c = t[s * 3], h = t[s * 3 + 1];
  return [new $(r, a), new $(o, l), new $(c, h)];
}, generateSideWallUV: function(i, t, e, n, s, r) {
  const a = t[e * 3], o = t[e * 3 + 1], l = t[e * 3 + 2], c = t[n * 3], h = t[n * 3 + 1], u = t[n * 3 + 2], f = t[s * 3], m = t[s * 3 + 1], _ = t[s * 3 + 2], x = t[r * 3], d = t[r * 3 + 1], p = t[r * 3 + 2];
  return Math.abs(o - h) < Math.abs(a - c) ? [new $(a, 1 - l), new $(c, 1 - u), new $(f, 1 - _), new $(x, 1 - p)] : [new $(o, 1 - l), new $(h, 1 - u), new $(m, 1 - _), new $(d, 1 - p)];
} };
function g_(i, t, e) {
  if (e.shapes = [], Array.isArray(i)) for (let n = 0, s = i.length; n < s; n++) {
    const r = i[n];
    e.shapes.push(r.uuid);
  }
  else e.shapes.push(i.uuid);
  return e.options = Object.assign({}, t), t.extrudePath !== void 0 && (e.options.extrudePath = t.extrudePath.toJSON()), e;
}
class ac extends pe {
  constructor(t = 0.5, e = 1, n = 32, s = 1, r = 0, a = Math.PI * 2) {
    super(), this.type = "RingGeometry", this.parameters = { innerRadius: t, outerRadius: e, thetaSegments: n, phiSegments: s, thetaStart: r, thetaLength: a }, n = Math.max(3, n), s = Math.max(1, s);
    const o = [], l = [], c = [], h = [];
    let u = t;
    const f = (e - t) / s, m = new C(), _ = new $();
    for (let x = 0; x <= s; x++) {
      for (let d = 0; d <= n; d++) {
        const p = r + d / n * a;
        m.x = u * Math.cos(p), m.y = u * Math.sin(p), l.push(m.x, m.y, m.z), c.push(0, 0, 1), _.x = (m.x / e + 1) / 2, _.y = (m.y / e + 1) / 2, h.push(_.x, _.y);
      }
      u += f;
    }
    for (let x = 0; x < s; x++) {
      const d = x * (n + 1);
      for (let p = 0; p < n; p++) {
        const A = p + d, S = A, E = A + n + 1, I = A + n + 2, R = A + 1;
        o.push(S, E, R), o.push(E, I, R);
      }
    }
    this.setIndex(o), this.setAttribute("position", new Kt(l, 3)), this.setAttribute("normal", new Kt(c, 3)), this.setAttribute("uv", new Kt(h, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new ac(t.innerRadius, t.outerRadius, t.thetaSegments, t.phiSegments, t.thetaStart, t.thetaLength);
  }
}
class oc extends pe {
  constructor(t = new ec([new $(0, 0.5), new $(-0.5, -0.5), new $(0.5, -0.5)]), e = 12) {
    super(), this.type = "ShapeGeometry", this.parameters = { shapes: t, curveSegments: e };
    const n = [], s = [], r = [], a = [];
    let o = 0, l = 0;
    if (Array.isArray(t) === false) c(t);
    else for (let h = 0; h < t.length; h++) c(t[h]), this.addGroup(o, l, h), o += l, l = 0;
    this.setIndex(n), this.setAttribute("position", new Kt(s, 3)), this.setAttribute("normal", new Kt(r, 3)), this.setAttribute("uv", new Kt(a, 2));
    function c(h) {
      const u = s.length / 3, f = h.extractPoints(e);
      let m = f.shape;
      const _ = f.holes;
      xn.isClockWise(m) === false && (m = m.reverse());
      for (let d = 0, p = _.length; d < p; d++) {
        const A = _[d];
        xn.isClockWise(A) === true && (_[d] = A.reverse());
      }
      const x = xn.triangulateShape(m, _);
      for (let d = 0, p = _.length; d < p; d++) {
        const A = _[d];
        m = m.concat(A);
      }
      for (let d = 0, p = m.length; d < p; d++) {
        const A = m[d];
        s.push(A.x, A.y, 0), r.push(0, 0, 1), a.push(A.x, A.y);
      }
      for (let d = 0, p = x.length; d < p; d++) {
        const A = x[d], S = A[0] + u, E = A[1] + u, I = A[2] + u;
        n.push(S, E, I), l += 3;
      }
    }
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  toJSON() {
    const t = super.toJSON(), e = this.parameters.shapes;
    return v_(e, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let s = 0, r = t.shapes.length; s < r; s++) {
      const a = e[t.shapes[s]];
      n.push(a);
    }
    return new oc(n, t.curveSegments);
  }
}
function v_(i, t) {
  if (t.shapes = [], Array.isArray(i)) for (let e = 0, n = i.length; e < n; e++) {
    const s = i[e];
    t.shapes.push(s.uuid);
  }
  else t.shapes.push(i.uuid);
  return t;
}
class lc extends pe {
  constructor(t = 1, e = 32, n = 16, s = 0, r = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = { radius: t, widthSegments: e, heightSegments: n, phiStart: s, phiLength: r, thetaStart: a, thetaLength: o }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const h = [], u = new C(), f = new C(), m = [], _ = [], x = [], d = [];
    for (let p = 0; p <= n; p++) {
      const A = [], S = p / n;
      let E = 0;
      p === 0 && a === 0 ? E = 0.5 / e : p === n && l === Math.PI && (E = -0.5 / e);
      for (let I = 0; I <= e; I++) {
        const R = I / e;
        u.x = -t * Math.cos(s + R * r) * Math.sin(a + S * o), u.y = t * Math.cos(a + S * o), u.z = t * Math.sin(s + R * r) * Math.sin(a + S * o), _.push(u.x, u.y, u.z), f.copy(u).normalize(), x.push(f.x, f.y, f.z), d.push(R + E, 1 - S), A.push(c++);
      }
      h.push(A);
    }
    for (let p = 0; p < n; p++) for (let A = 0; A < e; A++) {
      const S = h[p][A + 1], E = h[p][A], I = h[p + 1][A], R = h[p + 1][A + 1];
      (p !== 0 || a > 0) && m.push(S, E, R), (p !== n - 1 || l < Math.PI) && m.push(E, I, R);
    }
    this.setIndex(m), this.setAttribute("position", new Kt(_, 3)), this.setAttribute("normal", new Kt(x, 3)), this.setAttribute("uv", new Kt(d, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new lc(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
  }
}
class cc extends pe {
  constructor(t = 1, e = 0.4, n = 12, s = 48, r = Math.PI * 2) {
    super(), this.type = "TorusGeometry", this.parameters = { radius: t, tube: e, radialSegments: n, tubularSegments: s, arc: r }, n = Math.floor(n), s = Math.floor(s);
    const a = [], o = [], l = [], c = [], h = new C(), u = new C(), f = new C();
    for (let m = 0; m <= n; m++) for (let _ = 0; _ <= s; _++) {
      const x = _ / s * r, d = m / n * Math.PI * 2;
      u.x = (t + e * Math.cos(d)) * Math.cos(x), u.y = (t + e * Math.cos(d)) * Math.sin(x), u.z = e * Math.sin(d), o.push(u.x, u.y, u.z), h.x = t * Math.cos(x), h.y = t * Math.sin(x), f.subVectors(u, h).normalize(), l.push(f.x, f.y, f.z), c.push(_ / s), c.push(m / n);
    }
    for (let m = 1; m <= n; m++) for (let _ = 1; _ <= s; _++) {
      const x = (s + 1) * m + _ - 1, d = (s + 1) * (m - 1) + _ - 1, p = (s + 1) * (m - 1) + _, A = (s + 1) * m + _;
      a.push(x, d, A), a.push(d, p, A);
    }
    this.setIndex(a), this.setAttribute("position", new Kt(o, 3)), this.setAttribute("normal", new Kt(l, 3)), this.setAttribute("uv", new Kt(c, 2));
  }
  copy(t) {
    return super.copy(t), this.parameters = Object.assign({}, t.parameters), this;
  }
  static fromJSON(t) {
    return new cc(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class k_ extends on {
  constructor(t) {
    super(), this.isMeshStandardMaterial = true, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Bt(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Bt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ba, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ke(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.defines = { STANDARD: "" }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.envMapIntensity = t.envMapIntensity, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class W_ extends on {
  constructor(t) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Bt(16777215), this.specular = new Bt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Bt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ba, this.normalScale = new $(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new ke(), this.combine = La, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalMapType = t.normalMapType, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapRotation.copy(t.envMapRotation), this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.flatShading = t.flatShading, this.fog = t.fog, this;
  }
}
class X_ extends Zs {
  constructor(t) {
    super(), this.isLineDashedMaterial = true, this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t);
  }
  copy(t) {
    return super.copy(t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this;
  }
}
class hc extends ce {
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
const Nr = new Qt(), ul = new C(), fl = new C();
class x_ {
  constructor(t) {
    this.camera = t, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new $(512, 512), this.map = null, this.mapPass = null, this.matrix = new Qt(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new ka(), this._frameExtents = new $(1, 1), this._viewportCount = 1, this._viewports = [new re(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera, n = this.matrix;
    ul.setFromMatrixPosition(t.matrixWorld), e.position.copy(ul), fl.setFromMatrixPosition(t.target.matrixWorld), e.lookAt(fl), e.updateMatrixWorld(), Nr.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nr), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Nr);
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
class M_ extends x_ {
  constructor() {
    super(new kl(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Y_ extends hc {
  constructor(t, e) {
    super(t, e), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(ce.DEFAULT_UP), this.updateMatrix(), this.target = new ce(), this.shadow = new M_();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return super.copy(t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this;
  }
}
class q_ extends hc {
  constructor(t, e) {
    super(t, e), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
const dl = new Qt();
class Z_ {
  constructor(t, e, n = 0, s = 1 / 0) {
    this.ray = new Gi(t, e), this.near = n, this.far = s, this.camera = null, this.layers = new Ga(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(t, e) {
    this.ray.set(t, e);
  }
  setFromCamera(t, e) {
    e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize(), this.camera = e) : e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld), this.camera = e) : console.error("THREE.Raycaster: Unsupported camera type: " + e.type);
  }
  setFromXRController(t) {
    return dl.identity().extractRotation(t.matrixWorld), this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(dl), this;
  }
  intersectObject(t, e = true, n = []) {
    return Ca(t, this, n, e), n.sort(pl), n;
  }
  intersectObjects(t, e = true, n = []) {
    for (let s = 0, r = t.length; s < r; s++) Ca(t[s], this, n, e);
    return n.sort(pl), n;
  }
}
function pl(i, t) {
  return i.distance - t.distance;
}
function Ca(i, t, e, n) {
  let s = true;
  if (i.layers.test(t.layers) && i.raycast(t, e) === false && (s = false), s === true && n === true) {
    const r = i.children;
    for (let a = 0, o = r.length; a < o; a++) Ca(r[a], t, e, true);
  }
}
class ml {
  constructor(t = 1, e = 0, n = 0) {
    return this.radius = t, this.phi = e, this.theta = n, this;
  }
  set(t, e, n) {
    return this.radius = t, this.phi = e, this.theta = n, this;
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
  setFromCartesianCoords(t, e, n) {
    return this.radius = Math.sqrt(t * t + e * e + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t, n), this.phi = Math.acos(ue(e / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const _l = new C(), bs = new C();
class K_ {
  constructor(t = new C(), e = new C()) {
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
    _l.subVectors(t, this.start), bs.subVectors(this.end, this.start);
    const n = bs.dot(bs);
    let r = bs.dot(_l) / n;
    return e && (r = ue(r, 0, 1)), r;
  }
  closestPointToPoint(t, e, n) {
    const s = this.closestPointToPointParameter(t, e);
    return this.delta(n).multiplyScalar(s).add(this.start);
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
class j_ extends Bm {
  constructor(t = 10, e = 10, n = 4473924, s = 8947848) {
    n = new Bt(n), s = new Bt(s);
    const r = e / 2, a = t / e, o = t / 2, l = [], c = [];
    for (let f = 0, m = 0, _ = -o; f <= e; f++, _ += a) {
      l.push(-o, 0, _, o, 0, _), l.push(_, 0, -o, _, 0, o);
      const x = f === r ? n : s;
      x.toArray(c, m), m += 3, x.toArray(c, m), m += 3, x.toArray(c, m), m += 3, x.toArray(c, m), m += 3;
    }
    const h = new pe();
    h.setAttribute("position", new Kt(l, 3)), h.setAttribute("color", new Kt(c, 3));
    const u = new Zs({ vertexColors: true, toneMapped: false });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
const gl = new C();
let ws, Or;
class J_ extends ce {
  constructor(t = new C(0, 0, 1), e = new C(0, 0, 0), n = 1, s = 16776960, r = n * 0.2, a = r * 0.2) {
    super(), this.type = "ArrowHelper", ws === void 0 && (ws = new pe(), ws.setAttribute("position", new Kt([0, 0, 0, 0, 1, 0], 3)), Or = new qa(0, 0.5, 1, 5, 1), Or.translate(0, -0.5, 0)), this.position.copy(e), this.line = new jl(ws, new Zs({ color: s, toneMapped: false })), this.line.matrixAutoUpdate = false, this.add(this.line), this.cone = new Ye(Or, new Va({ color: s, toneMapped: false })), this.cone.matrixAutoUpdate = false, this.add(this.cone), this.setDirection(t), this.setLength(n, r, a);
  }
  setDirection(t) {
    if (t.y > 0.99999) this.quaternion.set(0, 0, 0, 1);
    else if (t.y < -0.99999) this.quaternion.set(1, 0, 0, 0);
    else {
      gl.set(t.z, 0, -t.x).normalize();
      const e = Math.acos(t.y);
      this.quaternion.setFromAxisAngle(gl, e);
    }
  }
  setLength(t, e = t * 0.2, n = e * 0.2) {
    this.line.scale.set(1, Math.max(1e-4, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(n, e, n), this.cone.position.y = t, this.cone.updateMatrix();
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
class S_ extends zn {
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
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Pa } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Pa);
const vl = { type: "change" }, Za = { type: "start" }, uc = { type: "end" }, Rs = new Gi(), xl = new mn(), y_ = Math.cos(70 * Mh.DEG2RAD), he = new C(), Te = 2 * Math.PI, $t = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, Fr = 1e-6;
class $_ extends S_ {
  constructor(t, e = null) {
    super(t, e), this.state = $t.NONE, this.enabled = true, this.target = new C(), this.cursor = new C(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: li.ROTATE, MIDDLE: li.DOLLY, RIGHT: li.PAN }, this.touches = { ONE: ri.ROTATE, TWO: ri.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new C(), this._lastQuaternion = new Fn(), this._lastTargetPosition = new C(), this._quat = new Fn().setFromUnitVectors(t.up, new C(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new ml(), this._sphericalDelta = new ml(), this._scale = 1, this._panOffset = new C(), this._rotateStart = new $(), this._rotateEnd = new $(), this._rotateDelta = new $(), this._panStart = new $(), this._panEnd = new $(), this._panDelta = new $(), this._dollyStart = new $(), this._dollyEnd = new $(), this._dollyDelta = new $(), this._dollyDirection = new C(), this._mouse = new $(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = T_.bind(this), this._onPointerDown = E_.bind(this), this._onPointerUp = A_.bind(this), this._onContextMenu = D_.bind(this), this._onMouseWheel = R_.bind(this), this._onKeyDown = C_.bind(this), this._onTouchStart = P_.bind(this), this._onTouchMove = L_.bind(this), this._onMouseDown = b_.bind(this), this._onMouseMove = w_.bind(this), this._interceptControlDown = U_.bind(this), this._interceptControlUp = I_.bind(this), this.domElement !== null && this.connect(), this.update();
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
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(vl), this.update(), this.state = $t.NONE;
  }
  update(t = null) {
    const e = this.object.position;
    he.copy(e).sub(this.target), he.applyQuaternion(this._quat), this._spherical.setFromVector3(he), this.autoRotate && this.state === $t.NONE && this._rotateLeft(this._getAutoRotationAngle(t)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, s = this.maxAzimuthAngle;
    isFinite(n) && isFinite(s) && (n < -Math.PI ? n += Te : n > Math.PI && (n -= Te), s < -Math.PI ? s += Te : s > Math.PI && (s -= Te), n <= s ? this._spherical.theta = Math.max(n, Math.min(s, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + s) / 2 ? Math.max(n, this._spherical.theta) : Math.min(s, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (he.setFromSpherical(this._spherical), he.applyQuaternion(this._quatInverse), e.copy(this.target).add(he), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = he.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new C(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new C(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = he.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (Rs.origin.copy(this.object.position), Rs.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Rs.direction)) < y_ ? this.object.lookAt(this.target) : (xl.setFromNormalAndCoplanarPoint(this.object.up, this.target), Rs.intersectPlane(xl, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > Fr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Fr || this._lastTargetPosition.distanceToSquared(this.target) > Fr ? (this.dispatchEvent(vl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(t) {
    return t !== null ? Te / 60 * this.autoRotateSpeed * t : Te / 60 / 60 * this.autoRotateSpeed;
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
    he.setFromMatrixColumn(e, 0), he.multiplyScalar(-t), this._panOffset.add(he);
  }
  _panUp(t, e) {
    this.screenSpacePanning === true ? he.setFromMatrixColumn(e, 1) : (he.setFromMatrixColumn(e, 0), he.crossVectors(this.object.up, he)), he.multiplyScalar(t), this._panOffset.add(he);
  }
  _pan(t, e) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const s = this.object.position;
      he.copy(s).sub(this.target);
      let r = he.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * t * r / n.clientHeight, this.object.matrix), this._panUp(2 * e * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(t * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(e * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
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
    const n = this.domElement.getBoundingClientRect(), s = t - n.left, r = e - n.top, a = n.width, o = n.height;
    this._mouse.x = s / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
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
    this._rotateLeft(Te * this._rotateDelta.x / e.clientHeight), this._rotateUp(Te * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
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
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(Te * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), e = true;
        break;
      case this.keys.BOTTOM:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateUp(-Te * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), e = true;
        break;
      case this.keys.LEFT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(Te * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), e = true;
        break;
      case this.keys.RIGHT:
        t.ctrlKey || t.metaKey || t.shiftKey ? this._rotateLeft(-Te * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), e = true;
        break;
    }
    e && (t.preventDefault(), this.update());
  }
  _handleTouchStartRotate(t) {
    if (this._pointers.length === 1) this._rotateStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._rotateStart.set(n, s);
    }
  }
  _handleTouchStartPan(t) {
    if (this._pointers.length === 1) this._panStart.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panStart.set(n, s);
    }
  }
  _handleTouchStartDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyStart.set(0, r);
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
      const n = this._getSecondPointerPosition(t), s = 0.5 * (t.pageX + n.x), r = 0.5 * (t.pageY + n.y);
      this._rotateEnd.set(s, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const e = this.domElement;
    this._rotateLeft(Te * this._rotateDelta.x / e.clientHeight), this._rotateUp(Te * this._rotateDelta.y / e.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(t) {
    if (this._pointers.length === 1) this._panEnd.set(t.pageX, t.pageY);
    else {
      const e = this._getSecondPointerPosition(t), n = 0.5 * (t.pageX + e.x), s = 0.5 * (t.pageY + e.y);
      this._panEnd.set(n, s);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(t) {
    const e = this._getSecondPointerPosition(t), n = t.pageX - e.x, s = t.pageY - e.y, r = Math.sqrt(n * n + s * s);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (t.pageX + e.x) * 0.5, o = (t.pageY + e.y) * 0.5;
    this._updateZoomParameters(a, o);
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
    e === void 0 && (e = new $(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e];
  }
  _customWheelEvent(t) {
    const e = t.deltaMode, n = { clientX: t.clientX, clientY: t.clientY, deltaY: t.deltaY };
    switch (e) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return t.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function E_(i) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(i.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(i) && (this._addPointer(i), i.pointerType === "touch" ? this._onTouchStart(i) : this._onMouseDown(i)));
}
function T_(i) {
  this.enabled !== false && (i.pointerType === "touch" ? this._onTouchMove(i) : this._onMouseMove(i));
}
function A_(i) {
  switch (this._removePointer(i), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(i.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(uc), this.state = $t.NONE;
      break;
    case 1:
      const t = this._pointers[0], e = this._pointerPositions[t];
      this._onTouchStart({ pointerId: t, pageX: e.x, pageY: e.y });
      break;
  }
}
function b_(i) {
  let t;
  switch (i.button) {
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
    case li.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(i), this.state = $t.DOLLY;
      break;
    case li.ROTATE:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = $t.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = $t.ROTATE;
      }
      break;
    case li.PAN:
      if (i.ctrlKey || i.metaKey || i.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(i), this.state = $t.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(i), this.state = $t.PAN;
      }
      break;
    default:
      this.state = $t.NONE;
  }
  this.state !== $t.NONE && this.dispatchEvent(Za);
}
function w_(i) {
  switch (this.state) {
    case $t.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(i);
      break;
    case $t.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(i);
      break;
    case $t.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(i);
      break;
  }
}
function R_(i) {
  this.enabled === false || this.enableZoom === false || this.state !== $t.NONE || (i.preventDefault(), this.dispatchEvent(Za), this._handleMouseWheel(this._customWheelEvent(i)), this.dispatchEvent(uc));
}
function C_(i) {
  this.enabled === false || this.enablePan === false || this._handleKeyDown(i);
}
function P_(i) {
  switch (this._trackPointer(i), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case ri.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(i), this.state = $t.TOUCH_ROTATE;
          break;
        case ri.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(i), this.state = $t.TOUCH_PAN;
          break;
        default:
          this.state = $t.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case ri.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(i), this.state = $t.TOUCH_DOLLY_PAN;
          break;
        case ri.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(i), this.state = $t.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = $t.NONE;
      }
      break;
    default:
      this.state = $t.NONE;
  }
  this.state !== $t.NONE && this.dispatchEvent(Za);
}
function L_(i) {
  switch (this._trackPointer(i), this.state) {
    case $t.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(i), this.update();
      break;
    case $t.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(i), this.update();
      break;
    case $t.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(i), this.update();
      break;
    case $t.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(i), this.update();
      break;
    default:
      this.state = $t.NONE;
  }
}
function D_(i) {
  this.enabled !== false && i.preventDefault();
}
function U_(i) {
  i.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function I_(i) {
  i.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
class Q_ extends Fm {
  constructor(t, e, n) {
    super();
    const s = 30;
    this.fontHeightPx = s * devicePixelRatio, this.material.map = N_(t, this.fontHeightPx, e, n), this.material.depthTest = false, this.renderOrder = 99, this.scale.set(this.material.map.image.width / this.fontHeightPx, 1, 1);
  }
  updateScale(t) {
    var _a2, _b;
    this.scale.set(((_b = (_a2 = this.material) == null ? void 0 : _a2.map) == null ? void 0 : _b.image.width) / this.fontHeightPx * t, t, 1);
  }
  dispose() {
    var _a2;
    this.geometry.dispose(), (_a2 = this.material.map) == null ? void 0 : _a2.dispose(), this.material.dispose();
  }
}
function N_(i, t, e, n) {
  const s = _c(), r = document.createElement("canvas"), a = r.getContext("2d");
  if (a) {
    a.font = `${t}px Arial`, r.width = a.measureText(i).width, r.height = t, n != "transparent" && (a.fillStyle = n ?? s.textBackground), a.fillRect(0, 0, r.width, r.height), a.textAlign = "center", a.textBaseline = "middle", a.fillStyle = e ?? s.textColor;
    const l = 0.9;
    a.font = `${t * l}px Arial`;
    const c = 0.08 * r.height;
    a.fillText(i, r.width / 2, r.height / 2 + c);
  }
  const o = new ge(r);
  return o.needsUpdate = true, o;
}
export {
  ke as $,
  q_ as A,
  pe as B,
  qa as C,
  nn as D,
  V_ as E,
  Kt as F,
  fs as G,
  zi as H,
  X_ as I,
  K_ as J,
  ge as K,
  Zs as L,
  k_ as M,
  H_ as N,
  ce as O,
  ol as P,
  Jm as Q,
  ac as R,
  lc as S,
  cc as T,
  zm as U,
  C as V,
  F_ as W,
  Ft as X,
  oc as Y,
  Ys as Z,
  Fn as _,
  jl as a,
  yn as a0,
  Mh as a1,
  Sn as a2,
  Bl as a3,
  z_ as a4,
  Ge as a5,
  Un as a6,
  Ye as b,
  Vi as c,
  Bm as d,
  Va as e,
  Ve as f,
  W_ as g,
  ec as h,
  rc as i,
  $ as j,
  Qt as k,
  Z_ as l,
  G_ as m,
  ze as n,
  Om as o,
  Fm as p,
  B_ as q,
  Bt as r,
  Be as s,
  kl as t,
  $_ as u,
  Y_ as v,
  J_ as w,
  Q_ as x,
  j_ as y,
  mn as z
};
