import { _ as tt, t as Ve, D as Pt, C as $r } from "./complex-i8qiIvCl.js";
var Qn = { relTol: 1e-12, absTol: 1e-15, matrix: "Matrix", number: "number", numberFallback: "number", precision: 64, predictable: false, randomSeed: null };
function Tu(r, e) {
  if (Ze(r, e)) return r[e];
  throw typeof r[e] == "function" && Ou(r, e) ? new Error('Cannot access method "' + e + '" as a property') : new Error('No access to property "' + e + '"');
}
function zu(r, e, n) {
  if (Ze(r, e)) return r[e] = n, n;
  throw new Error('No access to property "' + e + '"');
}
function Ze(r, e) {
  return !$u(r) && !Array.isArray(r) ? false : ze(Iu, e) ? true : !(e in Object.prototype || e in Function.prototype);
}
function Ou(r, e) {
  return r == null || typeof r[e] != "function" || ze(r, e) && Object.getPrototypeOf && e in Object.getPrototypeOf(r) ? false : ze(qu, e) ? true : !(e in Object.prototype || e in Function.prototype);
}
function $u(r) {
  return typeof r == "object" && r && r.constructor === Object;
}
var Iu = { length: true, name: true }, qu = { toString: true, valueOf: true, toLocaleString: true };
class Ru {
  constructor(e) {
    this.wrappedObject = e, this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).filter((e) => this.has(e)).values();
  }
  get(e) {
    return Tu(this.wrappedObject, e);
  }
  set(e, n) {
    return zu(this.wrappedObject, e, n), this;
  }
  has(e) {
    return Ze(this.wrappedObject, e) && e in this.wrappedObject;
  }
  entries() {
    return Uu(this.keys(), (e) => [e, this.get(e)]);
  }
  forEach(e) {
    for (var n of this.keys()) e(this.get(n), n, this);
  }
  delete(e) {
    Ze(this.wrappedObject, e) && delete this.wrappedObject[e];
  }
  clear() {
    for (var e of this.keys()) this.delete(e);
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}
function Uu(r, e) {
  return { next: () => {
    var n = r.next();
    return n.done ? n : { value: e(n.value), done: false };
  } };
}
function yr(r) {
  return typeof r == "number";
}
function _r(r) {
  return !r || typeof r != "object" || typeof r.constructor != "function" ? false : r.isBigNumber === true && typeof r.constructor.prototype == "object" && r.constructor.prototype.isBigNumber === true || typeof r.constructor.isDecimal == "function" && r.constructor.isDecimal(r) === true;
}
function Pu(r) {
  return typeof r == "bigint";
}
function Ft(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isComplex === true || false;
}
function Et(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isFraction === true || false;
}
function Vn(r) {
  return r && r.constructor.prototype.isUnit === true || false;
}
function Gr(r) {
  return typeof r == "string";
}
var wr = Array.isArray;
function dr(r) {
  return r && r.constructor.prototype.isMatrix === true || false;
}
function Te(r) {
  return Array.isArray(r) || dr(r);
}
function Zn(r) {
  return r && r.isDenseMatrix && r.constructor.prototype.isMatrix === true || false;
}
function Jn(r) {
  return r && r.isSparseMatrix && r.constructor.prototype.isMatrix === true || false;
}
function Wn(r) {
  return r && r.constructor.prototype.isRange === true || false;
}
function bt(r) {
  return r && r.constructor.prototype.isIndex === true || false;
}
function Xu(r) {
  return typeof r == "boolean";
}
function Yu(r) {
  return r && r.constructor.prototype.isResultSet === true || false;
}
function Lu(r) {
  return r && r.constructor.prototype.isHelp === true || false;
}
function Qu(r) {
  return typeof r == "function";
}
function Vu(r) {
  return r instanceof Date;
}
function Zu(r) {
  return r instanceof RegExp;
}
function wt(r) {
  return !!(r && typeof r == "object" && r.constructor === Object && !Ft(r) && !Et(r));
}
function Ju(r) {
  return r ? r instanceof Map || r instanceof Ru || typeof r.set == "function" && typeof r.get == "function" && typeof r.keys == "function" && typeof r.has == "function" : false;
}
function Wu(r) {
  return r === null;
}
function Gu(r) {
  return r === void 0;
}
function Ku(r) {
  return r && r.isAccessorNode === true && r.constructor.prototype.isNode === true || false;
}
function Hu(r) {
  return r && r.isArrayNode === true && r.constructor.prototype.isNode === true || false;
}
function ku(r) {
  return r && r.isAssignmentNode === true && r.constructor.prototype.isNode === true || false;
}
function ju(r) {
  return r && r.isBlockNode === true && r.constructor.prototype.isNode === true || false;
}
function ra(r) {
  return r && r.isConditionalNode === true && r.constructor.prototype.isNode === true || false;
}
function ea(r) {
  return r && r.isConstantNode === true && r.constructor.prototype.isNode === true || false;
}
function ta(r) {
  return r && r.isFunctionAssignmentNode === true && r.constructor.prototype.isNode === true || false;
}
function na(r) {
  return r && r.isFunctionNode === true && r.constructor.prototype.isNode === true || false;
}
function ua(r) {
  return r && r.isIndexNode === true && r.constructor.prototype.isNode === true || false;
}
function aa(r) {
  return r && r.isNode === true && r.constructor.prototype.isNode === true || false;
}
function ia(r) {
  return r && r.isObjectNode === true && r.constructor.prototype.isNode === true || false;
}
function oa(r) {
  return r && r.isOperatorNode === true && r.constructor.prototype.isNode === true || false;
}
function sa(r) {
  return r && r.isParenthesisNode === true && r.constructor.prototype.isNode === true || false;
}
function fa(r) {
  return r && r.isRangeNode === true && r.constructor.prototype.isNode === true || false;
}
function ca(r) {
  return r && r.isRelationalNode === true && r.constructor.prototype.isNode === true || false;
}
function la(r) {
  return r && r.isSymbolNode === true && r.constructor.prototype.isNode === true || false;
}
function va(r) {
  return r && r.constructor.prototype.isChain === true || false;
}
function Pr(r) {
  var e = typeof r;
  return e === "object" ? r === null ? "null" : _r(r) ? "BigNumber" : r.constructor && r.constructor.name ? r.constructor.name : "Object" : e;
}
function Dr(r) {
  var e = typeof r;
  if (e === "number" || e === "bigint" || e === "string" || e === "boolean" || r === null || r === void 0) return r;
  if (typeof r.clone == "function") return r.clone();
  if (Array.isArray(r)) return r.map(function(n) {
    return Dr(n);
  });
  if (r instanceof Date) return new Date(r.valueOf());
  if (_r(r)) return r;
  if (wt(r)) return Da(r, Dr);
  if (e === "function") return r;
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(r, ")"));
}
function Da(r, e) {
  var n = {};
  for (var u in r) ze(r, u) && (n[u] = e(r[u]));
  return n;
}
function Gn(r, e) {
  for (var n in e) ze(e, n) && (r[n] = e[n]);
  return r;
}
function ve(r, e) {
  var n, u, t;
  if (Array.isArray(r)) {
    if (!Array.isArray(e) || r.length !== e.length) return false;
    for (u = 0, t = r.length; u < t; u++) if (!ve(r[u], e[u])) return false;
    return true;
  } else {
    if (typeof r == "function") return r === e;
    if (r instanceof Object) {
      if (Array.isArray(e) || !(e instanceof Object)) return false;
      for (n in r) if (!(n in e) || !ve(r[n], e[n])) return false;
      for (n in e) if (!(n in r)) return false;
      return true;
    } else return r === e;
  }
}
function ze(r, e) {
  return r && Object.hasOwnProperty.call(r, e);
}
function pa(r, e) {
  for (var n = {}, u = 0; u < e.length; u++) {
    var t = e[u], a = r[t];
    a !== void 0 && (n[t] = a);
  }
  return n;
}
var da = ["Matrix", "Array"], ha = ["number", "BigNumber", "Fraction"], Ir = function(e) {
  if (e) throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(Qn);
};
tt(Ir, Qn, { MATRIX_OPTIONS: da, NUMBER_OPTIONS: ha });
function W(r, e, n, u) {
  function t(a) {
    var o = pa(a, e.map(ya));
    return ma(r, e, a), n(o);
  }
  return t.isFactory = true, t.fn = r, t.dependencies = e.slice().sort(), u && (t.meta = u), t;
}
function ma(r, e, n) {
  var u = e.filter((a) => !ga(a)).every((a) => n[a] !== void 0);
  if (!u) {
    var t = e.filter((a) => n[a] === void 0);
    throw new Error('Cannot create function "'.concat(r, '", ') + "some dependencies are missing: ".concat(t.map((a) => '"'.concat(a, '"')).join(", "), "."));
  }
}
function ga(r) {
  return r && r[0] === "?";
}
function ya(r) {
  return r && r[0] === "?" ? r.slice(1) : r;
}
function Ar(r) {
  return typeof r == "boolean" ? true : isFinite(r) ? r === Math.round(r) : false;
}
var Aa = Math.sign || function(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
};
function Dt(r, e, n) {
  var u = { 2: "0b", 8: "0o", 16: "0x" }, t = u[e], a = "";
  if (n) {
    if (n < 1) throw new Error("size must be in greater than 0");
    if (!Ar(n)) throw new Error("size must be an integer");
    if (r > 2 ** (n - 1) - 1 || r < -(2 ** (n - 1))) throw new Error("Value must be in range [-2^".concat(n - 1, ", 2^").concat(n - 1, "-1]"));
    if (!Ar(r)) throw new Error("Value must be an integer");
    r < 0 && (r = r + 2 ** n), a = "i".concat(n);
  }
  var o = "";
  return r < 0 && (r = -r, o = "-"), "".concat(o).concat(t).concat(r.toString(e)).concat(a);
}
function dt(r, e) {
  if (typeof e == "function") return e(r);
  if (r === 1 / 0) return "Infinity";
  if (r === -1 / 0) return "-Infinity";
  if (isNaN(r)) return "NaN";
  var { notation: n, precision: u, wordSize: t } = Kn(e);
  switch (n) {
    case "fixed":
      return Ea(r, u);
    case "exponential":
      return Hn(r, u);
    case "engineering":
      return Fa(r, u);
    case "bin":
      return Dt(r, 2, t);
    case "oct":
      return Dt(r, 8, t);
    case "hex":
      return Dt(r, 16, t);
    case "auto":
      return ba(r, u, e).replace(/((\.\d*?)(0+))($|e)/, function() {
        var a = arguments[2], o = arguments[4];
        return a !== "." ? a + o : o;
      });
    default:
      throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Kn(r) {
  var e = "auto", n, u;
  if (r !== void 0) if (yr(r)) n = r;
  else if (_r(r)) n = r.toNumber();
  else if (wt(r)) r.precision !== void 0 && (n = Xt(r.precision, () => {
    throw new Error('Option "precision" must be a number or BigNumber');
  })), r.wordSize !== void 0 && (u = Xt(r.wordSize, () => {
    throw new Error('Option "wordSize" must be a number or BigNumber');
  })), r.notation && (e = r.notation);
  else throw new Error("Unsupported type of options, number, BigNumber, or object expected");
  return { notation: e, precision: n, wordSize: u };
}
function nt(r) {
  var e = String(r).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!e) throw new SyntaxError("Invalid number " + r);
  var n = e[1], u = e[2], t = parseFloat(e[4] || "0"), a = u.indexOf(".");
  t += a !== -1 ? a - 1 : u.length - 1;
  var o = u.replace(".", "").replace(/^0*/, function(v) {
    return t -= v.length, "";
  }).replace(/0*$/, "").split("").map(function(v) {
    return parseInt(v);
  });
  return o.length === 0 && (o.push(0), t++), { sign: n, coefficients: o, exponent: t };
}
function Fa(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var n = nt(r), u = ut(n, e), t = u.exponent, a = u.coefficients, o = t % 3 === 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3;
  if (yr(e)) for (; e > a.length || t - o + 1 > a.length; ) a.push(0);
  else for (var v = Math.abs(t - o) - (a.length - 1), c = 0; c < v; c++) a.push(0);
  for (var f = Math.abs(t - o), s = 1; f > 0; ) s++, f--;
  var l = a.slice(s).join(""), d = yr(e) && l.length || l.match(/[1-9]/) ? "." + l : "", D = a.slice(0, s).join("") + d + "e" + (t >= 0 ? "+" : "") + o.toString();
  return u.sign + D;
}
function Ea(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var n = nt(r), u = typeof e == "number" ? ut(n, n.exponent + 1 + e) : n, t = u.coefficients, a = u.exponent + 1, o = a + (e || 0);
  return t.length < o && (t = t.concat(Ce(o - t.length))), a < 0 && (t = Ce(-a + 1).concat(t), a = 1), a < t.length && t.splice(a, 0, a === 0 ? "0." : "."), u.sign + t.join("");
}
function Hn(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var n = nt(r), u = e ? ut(n, e) : n, t = u.coefficients, a = u.exponent;
  t.length < e && (t = t.concat(Ce(e - t.length)));
  var o = t.shift();
  return u.sign + o + (t.length > 0 ? "." + t.join("") : "") + "e" + (a >= 0 ? "+" : "") + a;
}
function ba(r, e, n) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var u = Yt(n == null ? void 0 : n.lowerExp, -3), t = Yt(n == null ? void 0 : n.upperExp, 5), a = nt(r), o = e ? ut(a, e) : a;
  if (o.exponent < u || o.exponent >= t) return Hn(r, e);
  var v = o.coefficients, c = o.exponent;
  v.length < e && (v = v.concat(Ce(e - v.length))), v = v.concat(Ce(c - v.length + 1 + (v.length < e ? e - v.length : 0))), v = Ce(-c).concat(v);
  var f = c > 0 ? c : 0;
  return f < v.length - 1 && v.splice(f + 1, 0, "."), o.sign + v.join("");
}
function ut(r, e) {
  for (var n = { sign: r.sign, coefficients: r.coefficients, exponent: r.exponent }, u = n.coefficients; e <= 0; ) u.unshift(0), n.exponent++, e++;
  if (u.length > e) {
    var t = u.splice(e, u.length - e);
    if (t[0] >= 5) {
      var a = e - 1;
      for (u[a]++; u[a] === 10; ) u.pop(), a === 0 && (u.unshift(0), n.exponent++, a++), a--, u[a]++;
    }
  }
  return n;
}
function Ce(r) {
  for (var e = [], n = 0; n < r; n++) e.push(0);
  return e;
}
function wa(r) {
  return r.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
function se(r, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-8, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (n <= 0) throw new Error("Relative tolerance must be greater than 0");
  if (u < 0) throw new Error("Absolute tolerance must be at least 0");
  return isNaN(r) || isNaN(e) ? false : !isFinite(r) || !isFinite(e) ? r === e : r === e ? true : Math.abs(r - e) <= Math.max(n * Math.max(Math.abs(r), Math.abs(e)), u);
}
function Xt(r, e) {
  if (yr(r)) return r;
  if (_r(r)) return r.toNumber();
  e();
}
function Yt(r, e) {
  return yr(r) ? r : _r(r) ? r.toNumber() : e;
}
var kn = function() {
  return kn = Ve.create, Ve;
}, Ca = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], _a = W("typed", Ca, function(e) {
  var { BigNumber: n, Complex: u, DenseMatrix: t, Fraction: a } = e, o = kn();
  return o.clear(), o.addTypes([{ name: "number", test: yr }, { name: "Complex", test: Ft }, { name: "BigNumber", test: _r }, { name: "bigint", test: Pu }, { name: "Fraction", test: Et }, { name: "Unit", test: Vn }, { name: "identifier", test: (v) => Gr && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(v) }, { name: "string", test: Gr }, { name: "Chain", test: va }, { name: "Array", test: wr }, { name: "Matrix", test: dr }, { name: "DenseMatrix", test: Zn }, { name: "SparseMatrix", test: Jn }, { name: "Range", test: Wn }, { name: "Index", test: bt }, { name: "boolean", test: Xu }, { name: "ResultSet", test: Yu }, { name: "Help", test: Lu }, { name: "function", test: Qu }, { name: "Date", test: Vu }, { name: "RegExp", test: Zu }, { name: "null", test: Wu }, { name: "undefined", test: Gu }, { name: "AccessorNode", test: Ku }, { name: "ArrayNode", test: Hu }, { name: "AssignmentNode", test: ku }, { name: "BlockNode", test: ju }, { name: "ConditionalNode", test: ra }, { name: "ConstantNode", test: ea }, { name: "FunctionNode", test: na }, { name: "FunctionAssignmentNode", test: ta }, { name: "IndexNode", test: ua }, { name: "Node", test: aa }, { name: "ObjectNode", test: ia }, { name: "OperatorNode", test: oa }, { name: "ParenthesisNode", test: sa }, { name: "RangeNode", test: fa }, { name: "RelationalNode", test: ca }, { name: "SymbolNode", test: la }, { name: "Map", test: Ju }, { name: "Object", test: wt }]), o.addConversions([{ from: "number", to: "BigNumber", convert: function(c) {
    if (n || Ye(c), wa(c) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + c + "). Use function bignumber(x) to convert to BigNumber.");
    return new n(c);
  } }, { from: "number", to: "Complex", convert: function(c) {
    return u || Le(c), new u(c, 0);
  } }, { from: "BigNumber", to: "Complex", convert: function(c) {
    return u || Le(c), new u(c.toNumber(), 0);
  } }, { from: "bigint", to: "number", convert: function(c) {
    if (c > Number.MAX_SAFE_INTEGER) throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: " + c + ")");
    return Number(c);
  } }, { from: "bigint", to: "BigNumber", convert: function(c) {
    return n || Ye(c), new n(c.toString());
  } }, { from: "bigint", to: "Fraction", convert: function(c) {
    return a || Qe(c), new a(c);
  } }, { from: "Fraction", to: "BigNumber", convert: function(c) {
    throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
  } }, { from: "Fraction", to: "Complex", convert: function(c) {
    return u || Le(c), new u(c.valueOf(), 0);
  } }, { from: "number", to: "Fraction", convert: function(c) {
    a || Qe(c);
    var f = new a(c);
    if (f.valueOf() !== c) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + c + "). Use function fraction(x) to convert to Fraction.");
    return f;
  } }, { from: "string", to: "number", convert: function(c) {
    var f = Number(c);
    if (isNaN(f)) throw new Error('Cannot convert "' + c + '" to a number');
    return f;
  } }, { from: "string", to: "BigNumber", convert: function(c) {
    n || Ye(c);
    try {
      return new n(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to BigNumber');
    }
  } }, { from: "string", to: "bigint", convert: function(c) {
    try {
      return BigInt(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to BigInt');
    }
  } }, { from: "string", to: "Fraction", convert: function(c) {
    a || Qe(c);
    try {
      return new a(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to Fraction');
    }
  } }, { from: "string", to: "Complex", convert: function(c) {
    u || Le(c);
    try {
      return new u(c);
    } catch {
      throw new Error('Cannot convert "' + c + '" to Complex');
    }
  } }, { from: "boolean", to: "number", convert: function(c) {
    return +c;
  } }, { from: "boolean", to: "BigNumber", convert: function(c) {
    return n || Ye(c), new n(+c);
  } }, { from: "boolean", to: "bigint", convert: function(c) {
    return BigInt(+c);
  } }, { from: "boolean", to: "Fraction", convert: function(c) {
    return a || Qe(c), new a(+c);
  } }, { from: "boolean", to: "string", convert: function(c) {
    return String(c);
  } }, { from: "Array", to: "Matrix", convert: function(c) {
    return t || Ba(), new t(c);
  } }, { from: "Matrix", to: "Array", convert: function(c) {
    return c.valueOf();
  } }]), o.onMismatch = (v, c, f) => {
    var s = o.createError(v, c, f);
    if (["wrongType", "mismatch"].includes(s.data.category) && c.length === 1 && Te(c[0]) && f.some((d) => !d.params.includes(","))) {
      var l = new TypeError("Function '".concat(v, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(v, ")'."));
      throw l.data = s.data, l;
    }
    throw s;
  }, o.onMismatch = (v, c, f) => {
    var s = o.createError(v, c, f);
    if (["wrongType", "mismatch"].includes(s.data.category) && c.length === 1 && Te(c[0]) && f.some((d) => !d.params.includes(","))) {
      var l = new TypeError("Function '".concat(v, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(v, ")'."));
      throw l.data = s.data, l;
    }
    throw s;
  }, o;
});
function Ye(r) {
  throw new Error("Cannot convert value ".concat(r, " into a BigNumber: no class 'BigNumber' provided"));
}
function Le(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Complex number: no class 'Complex' provided"));
}
function Ba() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function Qe(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Fraction, no class 'Fraction' provided."));
}
var xa = "BigNumber", Ma = ["?on", "config"], Sa = W(xa, Ma, (r) => {
  var { on: e, config: n } = r, u = Pt.clone({ precision: n.precision, modulo: Pt.EUCLID });
  return u.prototype = Object.create(u.prototype), u.prototype.type = "BigNumber", u.prototype.isBigNumber = true, u.prototype.toJSON = function() {
    return { mathjs: "BigNumber", value: this.toString() };
  }, u.fromJSON = function(t) {
    return new u(t.value);
  }, e && e("config", function(t, a) {
    t.precision !== a.precision && u.config({ precision: t.precision });
  }), u;
}, { isClass: true }), Na = "Complex", Ta = [], za = W(Na, Ta, () => (Object.defineProperty($r, "name", { value: "Complex" }), $r.prototype.constructor = $r, $r.prototype.type = "Complex", $r.prototype.isComplex = true, $r.prototype.toJSON = function() {
  return { mathjs: "Complex", re: this.re, im: this.im };
}, $r.prototype.toPolar = function() {
  return { r: this.abs(), phi: this.arg() };
}, $r.prototype.format = function(r) {
  var e = "", n = this.im, u = this.re, t = dt(this.re, r), a = dt(this.im, r), o = yr(r) ? r : r ? r.precision : null;
  if (o !== null) {
    var v = Math.pow(10, -o);
    Math.abs(u / n) < v && (u = 0), Math.abs(n / u) < v && (n = 0);
  }
  return n === 0 ? e = t : u === 0 ? n === 1 ? e = "i" : n === -1 ? e = "-i" : e = a + "i" : n < 0 ? n === -1 ? e = t + " - i" : e = t + " - " + a.substring(1) + "i" : n === 1 ? e = t + " + i" : e = t + " + " + a + "i", e;
}, $r.fromPolar = function(r) {
  switch (arguments.length) {
    case 1: {
      var e = arguments[0];
      if (typeof e == "object") return $r(e);
      throw new TypeError("Input has to be an object with r and phi keys.");
    }
    case 2: {
      var n = arguments[0], u = arguments[1];
      if (yr(n)) {
        if (Vn(u) && u.hasBase("ANGLE") && (u = u.toNumber("rad")), yr(u)) return new $r({ r: n, phi: u });
        throw new TypeError("Phi is not a number nor an angle unit.");
      } else throw new TypeError("Radius r is not a number.");
    }
    default:
      throw new SyntaxError("Wrong number of arguments in function fromPolar");
  }
}, $r.prototype.valueOf = $r.prototype.toString, $r.fromJSON = function(r) {
  return new $r(r);
}, $r.compare = function(r, e) {
  return r.re > e.re ? 1 : r.re < e.re ? -1 : r.im > e.im ? 1 : r.im < e.im ? -1 : 0;
}, $r), { isClass: true });
typeof BigInt > "u" && (BigInt = function(r) {
  if (isNaN(r)) throw new Error("");
  return r;
});
const er = BigInt(0), ir = BigInt(1), Oe = BigInt(2), ht = BigInt(5), qr = BigInt(10), Oa = 2e3, G = { s: ir, n: er, d: ir };
function ie(r, e) {
  try {
    r = BigInt(r);
  } catch {
    throw le();
  }
  return r * e;
}
function Jr(r) {
  return typeof r == "bigint" ? r : Math.floor(r);
}
function br(r, e) {
  if (e === er) throw Ct();
  const n = Object.create(Vr.prototype);
  n.s = r < er ? -ir : ir, r = r < er ? -r : r;
  const u = me(r, e);
  return n.n = r / u, n.d = e / u, n;
}
function be(r) {
  const e = {};
  let n = r, u = Oe, t = ht - ir;
  for (; t <= n; ) {
    for (; n % u === er; ) n /= u, e[u] = (e[u] || er) + ir;
    t += ir + Oe * u++;
  }
  return n !== r ? n > 1 && (e[n] = (e[n] || er) + ir) : e[r] = (e[r] || er) + ir, e;
}
const zr = function(r, e) {
  let n = er, u = ir, t = ir;
  if (r != null) if (e !== void 0) {
    if (typeof r == "bigint") n = r;
    else {
      if (isNaN(r)) throw le();
      if (r % 1 !== 0) throw Lt();
      n = BigInt(r);
    }
    if (typeof e == "bigint") u = e;
    else {
      if (isNaN(e)) throw le();
      if (e % 1 !== 0) throw Lt();
      u = BigInt(e);
    }
    t = n * u;
  } else if (typeof r == "object") {
    if ("d" in r && "n" in r) n = BigInt(r.n), u = BigInt(r.d), "s" in r && (n *= BigInt(r.s));
    else if (0 in r) n = BigInt(r[0]), 1 in r && (u = BigInt(r[1]));
    else if (typeof r == "bigint") n = r;
    else throw le();
    t = n * u;
  } else if (typeof r == "number") {
    if (isNaN(r)) throw le();
    if (r < 0 && (t = -ir, r = -r), r % 1 === 0) n = BigInt(r);
    else {
      let a = 1, o = 0, v = 1, c = 1, f = 1, s = 1e7;
      for (r >= 1 && (a = 10 ** Math.floor(1 + Math.log10(r)), r /= a); v <= s && f <= s; ) {
        let l = (o + c) / (v + f);
        if (r === l) {
          v + f <= s ? (n = o + c, u = v + f) : f > v ? (n = c, u = f) : (n = o, u = v);
          break;
        } else r > l ? (o += c, v += f) : (c += o, f += v), v > s ? (n = c, u = f) : (n = o, u = v);
      }
      n = BigInt(n) * BigInt(a), u = BigInt(u);
    }
  } else if (typeof r == "string") {
    let a = 0, o = er, v = er, c = er, f = ir, s = ir, l = r.replace(/_/g, "").match(/\d+|./g);
    if (l === null) throw le();
    if (l[a] === "-" ? (t = -ir, a++) : l[a] === "+" && a++, l.length === a + 1 ? v = ie(l[a++], t) : l[a + 1] === "." || l[a] === "." ? (l[a] !== "." && (o = ie(l[a++], t)), a++, (a + 1 === l.length || l[a + 1] === "(" && l[a + 3] === ")" || l[a + 1] === "'" && l[a + 3] === "'") && (v = ie(l[a], t), f = qr ** BigInt(l[a].length), a++), (l[a] === "(" && l[a + 2] === ")" || l[a] === "'" && l[a + 2] === "'") && (c = ie(l[a + 1], t), s = qr ** BigInt(l[a + 1].length) - ir, a += 3)) : l[a + 1] === "/" || l[a + 1] === ":" ? (v = ie(l[a], t), f = ie(l[a + 2], ir), a += 3) : l[a + 3] === "/" && l[a + 1] === " " && (o = ie(l[a], t), v = ie(l[a + 2], t), f = ie(l[a + 4], ir), a += 5), l.length <= a) u = f * s, t = n = c + u * o + s * v;
    else throw le();
  } else if (typeof r == "bigint") n = r, t = r, u = ir;
  else throw le();
  if (u === er) throw Ct();
  G.s = t < er ? -ir : ir, G.n = n < er ? -n : n, G.d = u < er ? -u : u;
};
function $a(r, e, n) {
  let u = ir;
  for (; e > er; r = r * r % n, e >>= ir) e & ir && (u = u * r % n);
  return u;
}
function Ia(r, e) {
  for (; e % Oe === er; e /= Oe) ;
  for (; e % ht === er; e /= ht) ;
  if (e === ir) return er;
  let n = qr % e, u = 1;
  for (; n !== ir; u++) if (n = n * qr % e, u > Oa) return er;
  return BigInt(u);
}
function qa(r, e, n) {
  let u = ir, t = $a(qr, n, e);
  for (let a = 0; a < 300; a++) {
    if (u === t) return BigInt(a);
    u = u * qr % e, t = t * qr % e;
  }
  return 0;
}
function me(r, e) {
  if (!r) return e;
  if (!e) return r;
  for (; ; ) {
    if (r %= e, !r) return e;
    if (e %= r, !e) return r;
  }
}
function Vr(r, e) {
  if (zr(r, e), this instanceof Vr) r = me(G.d, G.n), this.s = G.s, this.n = G.n / r, this.d = G.d / r;
  else return br(G.s * G.n, G.d);
}
var Ct = function() {
  return new Error("Division by Zero");
}, le = function() {
  return new Error("Invalid argument");
}, Lt = function() {
  return new Error("Parameters must be integer");
};
Vr.prototype = { s: ir, n: er, d: ir, abs: function() {
  return br(this.n, this.d);
}, neg: function() {
  return br(-this.s * this.n, this.d);
}, add: function(r, e) {
  return zr(r, e), br(this.s * this.n * G.d + G.s * this.d * G.n, this.d * G.d);
}, sub: function(r, e) {
  return zr(r, e), br(this.s * this.n * G.d - G.s * this.d * G.n, this.d * G.d);
}, mul: function(r, e) {
  return zr(r, e), br(this.s * G.s * this.n * G.n, this.d * G.d);
}, div: function(r, e) {
  return zr(r, e), br(this.s * G.s * this.n * G.d, this.d * G.n);
}, clone: function() {
  return br(this.s * this.n, this.d);
}, mod: function(r, e) {
  if (r === void 0) return br(this.s * this.n % this.d, ir);
  if (zr(r, e), er === G.n * this.d) throw Ct();
  return br(this.s * (G.d * this.n) % (G.n * this.d), G.d * this.d);
}, gcd: function(r, e) {
  return zr(r, e), br(me(G.n, this.n) * me(G.d, this.d), G.d * this.d);
}, lcm: function(r, e) {
  return zr(r, e), G.n === er && this.n === er ? br(er, ir) : br(G.n * this.n, me(G.n, this.n) * me(G.d, this.d));
}, inverse: function() {
  return br(this.s * this.d, this.n);
}, pow: function(r, e) {
  if (zr(r, e), G.d === ir) return G.s < er ? br((this.s * this.d) ** G.n, this.n ** G.n) : br((this.s * this.n) ** G.n, this.d ** G.n);
  if (this.s < er) return null;
  let n = be(this.n), u = be(this.d), t = ir, a = ir;
  for (let o in n) if (o !== "1") {
    if (o === "0") {
      t = er;
      break;
    }
    if (n[o] *= G.n, n[o] % G.d === er) n[o] /= G.d;
    else return null;
    t *= BigInt(o) ** n[o];
  }
  for (let o in u) if (o !== "1") {
    if (u[o] *= G.n, u[o] % G.d === er) u[o] /= G.d;
    else return null;
    a *= BigInt(o) ** u[o];
  }
  return G.s < er ? br(a, t) : br(t, a);
}, log: function(r, e) {
  if (zr(r, e), this.s <= er || G.s <= er) return null;
  const n = {}, u = be(G.n), t = be(G.d), a = be(this.n), o = be(this.d);
  for (const f in t) u[f] = (u[f] || er) - t[f];
  for (const f in o) a[f] = (a[f] || er) - o[f];
  for (const f in u) f !== "1" && (n[f] = true);
  for (const f in a) f !== "1" && (n[f] = true);
  let v = null, c = null;
  for (const f in n) {
    const s = u[f] || er, l = a[f] || er;
    if (s === er) {
      if (l !== er) return null;
      continue;
    }
    let d = l, D = s;
    const p = me(d, D);
    if (d /= p, D /= p, v === null && c === null) v = d, c = D;
    else if (d * c !== v * D) return null;
  }
  return v !== null && c !== null ? br(v, c) : null;
}, equals: function(r, e) {
  return zr(r, e), this.s * this.n * G.d === G.s * G.n * this.d;
}, lt: function(r, e) {
  return zr(r, e), this.s * this.n * G.d < G.s * G.n * this.d;
}, lte: function(r, e) {
  return zr(r, e), this.s * this.n * G.d <= G.s * G.n * this.d;
}, gt: function(r, e) {
  return zr(r, e), this.s * this.n * G.d > G.s * G.n * this.d;
}, gte: function(r, e) {
  return zr(r, e), this.s * this.n * G.d >= G.s * G.n * this.d;
}, compare: function(r, e) {
  zr(r, e);
  let n = this.s * this.n * G.d - G.s * G.n * this.d;
  return (er < n) - (n < er);
}, ceil: function(r) {
  return r = qr ** BigInt(r || 0), br(Jr(this.s * r * this.n / this.d) + (r * this.n % this.d > er && this.s >= er ? ir : er), r);
}, floor: function(r) {
  return r = qr ** BigInt(r || 0), br(Jr(this.s * r * this.n / this.d) - (r * this.n % this.d > er && this.s < er ? ir : er), r);
}, round: function(r) {
  return r = qr ** BigInt(r || 0), br(Jr(this.s * r * this.n / this.d) + this.s * ((this.s >= er ? ir : er) + Oe * (r * this.n % this.d) > this.d ? ir : er), r);
}, roundTo: function(r, e) {
  zr(r, e);
  const n = this.n * G.d, u = this.d * G.n, t = n % u;
  let a = Jr(n / u);
  return t + t >= u && a++, br(this.s * a * G.n, G.d);
}, divisible: function(r, e) {
  return zr(r, e), !(!(G.n * this.d) || this.n * G.d % (G.n * this.d));
}, valueOf: function() {
  return Number(this.s * this.n) / Number(this.d);
}, toString: function(r) {
  let e = this.n, n = this.d;
  r = r || 15;
  let u = Ia(e, n), t = qa(e, n, u), a = this.s < er ? "-" : "";
  if (a += Jr(e / n), e %= n, e *= qr, e && (a += "."), u) {
    for (let o = t; o--; ) a += Jr(e / n), e %= n, e *= qr;
    a += "(";
    for (let o = u; o--; ) a += Jr(e / n), e %= n, e *= qr;
    a += ")";
  } else for (let o = r; e && o--; ) a += Jr(e / n), e %= n, e *= qr;
  return a;
}, toFraction: function(r) {
  let e = this.n, n = this.d, u = this.s < er ? "-" : "";
  if (n === ir) u += e;
  else {
    let t = Jr(e / n);
    r && t > er && (u += t, u += " ", e %= n), u += e, u += "/", u += n;
  }
  return u;
}, toLatex: function(r) {
  let e = this.n, n = this.d, u = this.s < er ? "-" : "";
  if (n === ir) u += e;
  else {
    let t = Jr(e / n);
    r && t > er && (u += t, e %= n), u += "\\frac{", u += e, u += "}{", u += n, u += "}";
  }
  return u;
}, toContinued: function() {
  let r = this.n, e = this.d, n = [];
  do {
    n.push(Jr(r / e));
    let u = r % e;
    r = e, e = u;
  } while (r !== ir);
  return n;
}, simplify: function(r) {
  const e = BigInt(1 / (r || 1e-3) | 0), n = this.abs(), u = n.toContinued();
  for (let t = 1; t < u.length; t++) {
    let a = br(u[t - 1], ir);
    for (let v = t - 2; v >= 0; v--) a = a.inverse().add(u[v]);
    let o = a.sub(n);
    if (o.n * e < o.d) return a.mul(this.s);
  }
  return this;
} };
var Ra = "Fraction", Ua = [], Pa = W(Ra, Ua, () => (Object.defineProperty(Vr, "name", { value: "Fraction" }), Vr.prototype.constructor = Vr, Vr.prototype.type = "Fraction", Vr.prototype.isFraction = true, Vr.prototype.toJSON = function() {
  return { mathjs: "Fraction", n: String(this.s * this.n), d: String(this.d) };
}, Vr.fromJSON = function(r) {
  return new Vr(r);
}, Vr), { isClass: true }), Xa = "Matrix", Ya = [], La = W(Xa, Ya, () => {
  function r() {
    if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
  }
  return r.prototype.type = "Matrix", r.prototype.isMatrix = true, r.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  }, r.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  }, r.prototype.create = function(e, n) {
    throw new Error("Cannot invoke create on a Matrix interface");
  }, r.prototype.subset = function(e, n, u) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  }, r.prototype.get = function(e) {
    throw new Error("Cannot invoke get on a Matrix interface");
  }, r.prototype.set = function(e, n, u) {
    throw new Error("Cannot invoke set on a Matrix interface");
  }, r.prototype.resize = function(e, n) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  }, r.prototype.reshape = function(e, n) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  }, r.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  }, r.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  }, r.prototype.map = function(e, n) {
    throw new Error("Cannot invoke map on a Matrix interface");
  }, r.prototype.forEach = function(e) {
    throw new Error("Cannot invoke forEach on a Matrix interface");
  }, r.prototype[Symbol.iterator] = function() {
    throw new Error("Cannot iterate a Matrix interface");
  }, r.prototype.toArray = function() {
    throw new Error("Cannot invoke toArray on a Matrix interface");
  }, r.prototype.valueOf = function() {
    throw new Error("Cannot invoke valueOf on a Matrix interface");
  }, r.prototype.format = function(e) {
    throw new Error("Cannot invoke format on a Matrix interface");
  }, r.prototype.toString = function() {
    throw new Error("Cannot invoke toString on a Matrix interface");
  }, r;
}, { isClass: true });
function pt(r, e, n) {
  var u = r.constructor, t = new u(2), a = "";
  if (n) {
    if (n < 1) throw new Error("size must be in greater than 0");
    if (!Ar(n)) throw new Error("size must be an integer");
    if (r.greaterThan(t.pow(n - 1).sub(1)) || r.lessThan(t.pow(n - 1).mul(-1))) throw new Error("Value must be in range [-2^".concat(n - 1, ", 2^").concat(n - 1, "-1]"));
    if (!r.isInteger()) throw new Error("Value must be an integer");
    r.lessThan(0) && (r = r.add(t.pow(n))), a = "i".concat(n);
  }
  switch (e) {
    case 2:
      return "".concat(r.toBinary()).concat(a);
    case 8:
      return "".concat(r.toOctal()).concat(a);
    case 16:
      return "".concat(r.toHexadecimal()).concat(a);
    default:
      throw new Error("Base ".concat(e, " not supported "));
  }
}
function Qa(r, e) {
  if (typeof e == "function") return e(r);
  if (!r.isFinite()) return r.isNaN() ? "NaN" : r.gt(0) ? "Infinity" : "-Infinity";
  var { notation: n, precision: u, wordSize: t } = Kn(e);
  switch (n) {
    case "fixed":
      return Za(r, u);
    case "exponential":
      return Qt(r, u);
    case "engineering":
      return Va(r, u);
    case "bin":
      return pt(r, 2, t);
    case "oct":
      return pt(r, 8, t);
    case "hex":
      return pt(r, 16, t);
    case "auto": {
      var a = Vt(e == null ? void 0 : e.lowerExp, -3), o = Vt(e == null ? void 0 : e.upperExp, 5);
      if (r.isZero()) return "0";
      var v, c = r.toSignificantDigits(u), f = c.e;
      return f >= a && f < o ? v = c.toFixed() : v = Qt(r, u), v.replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2], l = arguments[4];
        return s !== "." ? s + l : l;
      });
    }
    default:
      throw new Error('Unknown notation "' + n + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Va(r, e) {
  var n = r.e, u = n % 3 === 0 ? n : n < 0 ? n - 3 - n % 3 : n - n % 3, t = r.mul(Math.pow(10, -u)), a = t.toPrecision(e);
  if (a.includes("e")) {
    var o = r.constructor;
    a = new o(a).toFixed();
  }
  return a + "e" + (n >= 0 ? "+" : "") + u.toString();
}
function Qt(r, e) {
  return e !== void 0 ? r.toExponential(e - 1) : r.toExponential();
}
function Za(r, e) {
  return r.toFixed(e);
}
function Vt(r, e) {
  return yr(r) ? r : _r(r) ? r.toNumber() : e;
}
function Er(r, e) {
  var n = Ja(r, e);
  return e && typeof e == "object" && "truncate" in e && n.length > e.truncate ? n.substring(0, e.truncate - 3) + "..." : n;
}
function Ja(r, e) {
  if (typeof r == "number") return dt(r, e);
  if (_r(r)) return Qa(r, e);
  if (Wa(r)) return !e || e.fraction !== "decimal" ? "".concat(r.s * r.n, "/").concat(r.d) : r.toString();
  if (Array.isArray(r)) return jn(r, e);
  if (Gr(r)) return Zt(r);
  if (typeof r == "function") return r.syntax ? String(r.syntax) : "function";
  if (r && typeof r == "object") {
    if (typeof r.format == "function") return r.format(e);
    if (r && r.toString(e) !== {}.toString()) return r.toString(e);
    var n = Object.keys(r).map((u) => Zt(u) + ": " + Er(r[u], e));
    return "{" + n.join(", ") + "}";
  }
  return String(r);
}
function Zt(r) {
  for (var e = String(r), n = "", u = 0; u < e.length; ) {
    var t = e.charAt(u);
    n += t in Jt ? Jt[t] : t, u++;
  }
  return '"' + n + '"';
}
var Jt = { '"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" };
function jn(r, e) {
  if (Array.isArray(r)) {
    for (var n = "[", u = r.length, t = 0; t < u; t++) t !== 0 && (n += ", "), n += jn(r[t], e);
    return n += "]", n;
  } else return Er(r, e);
}
function Wa(r) {
  return r && typeof r == "object" && typeof r.s == "bigint" && typeof r.n == "bigint" && typeof r.d == "bigint" || false;
}
function pr(r, e, n) {
  if (!(this instanceof pr)) throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = r, this.expected = e, this.relation = n, this.message = "Dimension mismatch (" + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + " " + (this.relation || "!=") + " " + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + ")", this.stack = new Error().stack;
}
pr.prototype = new RangeError();
pr.prototype.constructor = RangeError;
pr.prototype.name = "DimensionError";
pr.prototype.isDimensionError = true;
function De(r, e, n) {
  if (!(this instanceof De)) throw new SyntaxError("Constructor must be called with the new operator");
  this.index = r, arguments.length < 3 ? (this.min = 0, this.max = e) : (this.min = e, this.max = n), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
De.prototype = new RangeError();
De.prototype.constructor = RangeError;
De.prototype.name = "IndexError";
De.prototype.isIndexError = true;
function lr(r) {
  for (var e = []; Array.isArray(r); ) e.push(r.length), r = r[0];
  return e;
}
function ru(r, e, n) {
  var u, t = r.length;
  if (t !== e[n]) throw new pr(t, e[n]);
  if (n < e.length - 1) {
    var a = n + 1;
    for (u = 0; u < t; u++) {
      var o = r[u];
      if (!Array.isArray(o)) throw new pr(e.length - 1, e.length, "<");
      ru(r[u], e, a);
    }
  } else for (u = 0; u < t; u++) if (Array.isArray(r[u])) throw new pr(e.length + 1, e.length, ">");
}
function Wt(r, e) {
  var n = e.length === 0;
  if (n) {
    if (Array.isArray(r)) throw new pr(r.length, 0);
  } else ru(r, e, 0);
}
function Cr(r, e) {
  if (r !== void 0) {
    if (!yr(r) || !Ar(r)) throw new TypeError("Index must be an integer (value: " + r + ")");
    if (r < 0 || typeof e == "number" && r >= e) throw new De(r, e);
  }
}
function Je(r, e, n) {
  if (!Array.isArray(e)) throw new TypeError("Array expected");
  if (e.length === 0) throw new Error("Resizing to scalar is not supported");
  e.forEach(function(t) {
    if (!yr(t) || !Ar(t) || t < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + Er(e) + ")");
  }), (yr(r) || _r(r)) && (r = [r]);
  var u = n !== void 0 ? n : 0;
  return mt(r, e, 0, u), r;
}
function mt(r, e, n, u) {
  var t, a, o = r.length, v = e[n], c = Math.min(o, v);
  if (r.length = v, n < e.length - 1) {
    var f = n + 1;
    for (t = 0; t < c; t++) a = r[t], Array.isArray(a) || (a = [a], r[t] = a), mt(a, e, f, u);
    for (t = c; t < v; t++) a = [], r[t] = a, mt(a, e, f, u);
  } else {
    for (t = 0; t < c; t++) for (; Array.isArray(r[t]); ) r[t] = r[t][0];
    for (t = c; t < v; t++) r[t] = u;
  }
}
function _t(r, e) {
  var n = gt(r, true), u = n.length;
  if (!Array.isArray(r) || !Array.isArray(e)) throw new TypeError("Array expected");
  if (e.length === 0) throw new pr(0, u, "!=");
  e = Bt(e, u);
  var t = eu(e);
  if (u !== t) throw new pr(t, u, "!=");
  try {
    return Ga(n, e);
  } catch (a) {
    throw a instanceof pr ? new pr(t, u, "!=") : a;
  }
}
function Bt(r, e) {
  var n = eu(r), u = r.slice(), t = -1, a = r.indexOf(t), o = r.indexOf(t, a + 1) >= 0;
  if (o) throw new Error("More than one wildcard in sizes");
  var v = a >= 0, c = e % n === 0;
  if (v) if (c) u[a] = -e / n;
  else throw new Error("Could not replace wildcard, since " + e + " is no multiple of " + -n);
  return u;
}
function eu(r) {
  return r.reduce((e, n) => e * n, 1);
}
function Ga(r, e) {
  for (var n = r, u, t = e.length - 1; t > 0; t--) {
    var a = e[t];
    u = [];
    for (var o = n.length / a, v = 0; v < o; v++) u.push(n.slice(v * a, (v + 1) * a));
    n = u;
  }
  return n;
}
function Gt(r, e) {
  for (var n = lr(r); Array.isArray(r) && r.length === 1; ) r = r[0], n.shift();
  for (var u = n.length; n[u - 1] === 1; ) u--;
  return u < n.length && (r = tu(r, u, 0), n.length = u), r;
}
function tu(r, e, n) {
  var u, t;
  if (n < e) {
    var a = n + 1;
    for (u = 0, t = r.length; u < t; u++) r[u] = tu(r[u], e, a);
  } else for (; Array.isArray(r); ) r = r[0];
  return r;
}
function nu(r, e, n, u) {
  var t = u || lr(r);
  if (n) for (var a = 0; a < n; a++) r = [r], t.unshift(1);
  for (r = uu(r, e, 0); t.length < e; ) t.push(1);
  return r;
}
function uu(r, e, n) {
  var u, t;
  if (Array.isArray(r)) {
    var a = n + 1;
    for (u = 0, t = r.length; u < t; u++) r[u] = uu(r[u], e, a);
  } else for (var o = n; o < e; o++) r = [r];
  return r;
}
function gt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (!Array.isArray(r)) return r;
  if (typeof e != "boolean") throw new TypeError("Boolean expected for second argument of flatten");
  var n = [];
  return e ? t(r) : u(r), n;
  function u(a) {
    for (var o = 0; o < a.length; o++) {
      var v = a[o];
      Array.isArray(v) ? u(v) : n.push(v);
    }
  }
  function t(a) {
    if (Array.isArray(a[0])) for (var o = 0; o < a.length; o++) t(a[o]);
    else for (var v = 0; v < a.length; v++) n.push(a[v]);
  }
}
function at(r, e) {
  for (var n, u = 0, t = 0; t < r.length; t++) {
    var a = r[t], o = Array.isArray(a);
    if (t === 0 && o && (u = a.length), o && a.length !== u) return;
    var v = o ? at(a, e) : e(a);
    if (n === void 0) n = v;
    else if (n !== v) return "mixed";
  }
  return n;
}
function au(r, e, n, u) {
  if (u < n) {
    if (r.length !== e.length) throw new pr(r.length, e.length);
    for (var t = [], a = 0; a < r.length; a++) t[a] = au(r[a], e[a], n, u + 1);
    return t;
  } else return r.concat(e);
}
function iu() {
  var r = Array.prototype.slice.call(arguments, 0, -1), e = Array.prototype.slice.call(arguments, -1);
  if (r.length === 1) return r[0];
  if (r.length > 1) return r.slice(1).reduce(function(n, u) {
    return au(n, u, e, 0);
  }, r[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function ou() {
  for (var r = arguments.length, e = new Array(r), n = 0; n < r; n++) e[n] = arguments[n];
  for (var u = e.map((d) => d.length), t = Math.max(...u), a = new Array(t).fill(null), o = 0; o < e.length; o++) for (var v = e[o], c = u[o], f = 0; f < c; f++) {
    var s = t - c + f;
    v[f] > a[s] && (a[s] = v[f]);
  }
  for (var l = 0; l < e.length; l++) su(e[l], a);
  return a;
}
function su(r, e) {
  for (var n = e.length, u = r.length, t = 0; t < u; t++) {
    var a = n - u + t;
    if (r[t] < e[a] && r[t] > 1 || r[t] > e[a]) throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(r, ") not possible to broadcast dimension ").concat(u, " with size ").concat(r[t], " to size ").concat(e[a]));
  }
}
function yt(r, e) {
  var n = lr(r);
  if (ve(n, e)) return r;
  su(n, e);
  var u = ou(n, e), t = u.length, a = [...Array(t - n.length).fill(1), ...n], o = ka(r);
  n.length < t && (o = _t(o, a), n = lr(o));
  for (var v = 0; v < t; v++) n[v] < u[v] && (o = Ka(o, u[v], v), n = lr(o));
  return o;
}
function Ka(r, e, n) {
  return iu(...Array(e).fill(r), n);
}
function fu(r, e) {
  if (!Array.isArray(r)) throw new Error("Array expected");
  var n = lr(r);
  if (e.length !== n.length) throw new pr(e.length, n.length);
  for (var u = 0; u < e.length; u++) Cr(e[u], n[u]);
  return e.reduce((t, a) => t[a], r);
}
function Kt(r, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (r.length === 0) return [];
  if (n) return a(r);
  var u = [];
  return t(r, 0);
  function t(o, v) {
    if (Array.isArray(o)) {
      for (var c = o.length, f = Array(c), s = 0; s < c; s++) u[v] = s, f[s] = t(o[s], v + 1);
      return f;
    } else return e(o, u.slice(0, v), r);
  }
  function a(o) {
    if (Array.isArray(o)) {
      for (var v = o.length, c = Array(v), f = 0; f < v; f++) c[f] = a(o[f]);
      return c;
    } else return e(o);
  }
}
function Ha(r, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (r.length === 0) return;
  if (n) {
    a(r);
    return;
  }
  var u = [];
  t(r, 0);
  function t(o, v) {
    if (Array.isArray(o)) for (var c = o.length, f = 0; f < c; f++) u[v] = f, t(o[f], v + 1);
    else e(o, u.slice(0, v), r);
  }
  function a(o) {
    if (Array.isArray(o)) for (var v = o.length, c = 0; c < v; c++) a(o[c]);
    else e(o);
  }
}
function ka(r) {
  return tt([], r);
}
function We(r, e, n) {
  var u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (Ve.isTypedFunction(r)) {
    var t;
    if (u) t = 1;
    else {
      var a = (e.isMatrix ? e.size() : lr(e)).map(() => 0), o = e.isMatrix ? e.get(a) : fu(e, a);
      t = ei(r, o, a, e);
    }
    var v;
    if (e.isMatrix && e.dataType !== "mixed" && e.dataType !== void 0) {
      var c = ja(r, t);
      v = c !== void 0 ? c : r;
    } else v = r;
    return t >= 1 && t <= 3 ? { isUnary: t === 1, fn: function() {
      for (var s = arguments.length, l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d];
      return Ht(v, l.slice(0, t), n, r.name);
    } } : { isUnary: false, fn: function() {
      for (var s = arguments.length, l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d];
      return Ht(v, l, n, r.name);
    } };
  }
  return u === void 0 ? { isUnary: ri(r), fn: r } : { isUnary: u, fn: r };
}
function ja(r, e) {
  var n = [];
  if (Object.entries(r.signatures).forEach((u) => {
    var [t, a] = u;
    t.split(",").length === e && n.push(a);
  }), n.length === 1) return n[0];
}
function ri(r) {
  if (r.length !== 1) return false;
  var e = r.toString();
  if (/arguments/.test(e)) return false;
  var n = e.match(/\(.*?\)/);
  return !/\.\.\./.test(n);
}
function ei(r, e, n, u) {
  for (var t = [e, n, u], a = 3; a > 0; a--) {
    var o = t.slice(0, a);
    if (Ve.resolve(r, o) !== null) return a;
  }
}
function Ht(r, e, n, u) {
  try {
    return r(...e);
  } catch (t) {
    ti(t, e, n, u);
  }
}
function ti(r, e, n, u) {
  var t;
  if (r instanceof TypeError && ((t = r.data) === null || t === void 0 ? void 0 : t.category) === "wrongType") {
    var a = [];
    throw a.push("value: ".concat(Pr(e[0]))), e.length >= 2 && a.push("index: ".concat(Pr(e[1]))), e.length >= 3 && a.push("array: ".concat(Pr(e[2]))), new TypeError("Function ".concat(n, " cannot apply callback arguments ") + "".concat(u, "(").concat(a.join(", "), ") at index ").concat(JSON.stringify(e[1])));
  } else throw new TypeError("Function ".concat(n, " cannot apply callback arguments ") + "to function ".concat(u, ": ").concat(r.message));
}
var ni = "DenseMatrix", ui = ["Matrix"], ai = W(ni, ui, (r) => {
  var { Matrix: e } = r;
  function n(s, l) {
    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
    if (l && !Gr(l)) throw new Error("Invalid datatype: " + l);
    if (dr(s)) s.type === "DenseMatrix" ? (this._data = Dr(s._data), this._size = Dr(s._size), this._datatype = l || s._datatype) : (this._data = s.toArray(), this._size = s.size(), this._datatype = l || s._datatype);
    else if (s && wr(s.data) && wr(s.size)) this._data = s.data, this._size = s.size, Wt(this._data, this._size), this._datatype = l || s.datatype;
    else if (wr(s)) this._data = f(s), this._size = lr(this._data), Wt(this._data, this._size), this._datatype = l;
    else {
      if (s) throw new TypeError("Unsupported type of data (" + Pr(s) + ")");
      this._data = [], this._size = [0], this._datatype = l;
    }
  }
  n.prototype = new e(), n.prototype.createDenseMatrix = function(s, l) {
    return new n(s, l);
  }, Object.defineProperty(n, "name", { value: "DenseMatrix" }), n.prototype.constructor = n, n.prototype.type = "DenseMatrix", n.prototype.isDenseMatrix = true, n.prototype.getDataType = function() {
    return at(this._data, Pr);
  }, n.prototype.storage = function() {
    return "dense";
  }, n.prototype.datatype = function() {
    return this._datatype;
  }, n.prototype.create = function(s, l) {
    return new n(s, l);
  }, n.prototype.subset = function(s, l, d) {
    switch (arguments.length) {
      case 1:
        return u(this, s);
      case 2:
      case 3:
        return a(this, s, l, d);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, n.prototype.get = function(s) {
    return fu(this._data, s);
  }, n.prototype.set = function(s, l, d) {
    if (!wr(s)) throw new TypeError("Array expected");
    if (s.length < this._size.length) throw new pr(s.length, this._size.length, "<");
    var D, p, i, h = s.map(function(b) {
      return b + 1;
    });
    c(this, h, d);
    var m = this._data;
    for (D = 0, p = s.length - 1; D < p; D++) i = s[D], Cr(i, m.length), m = m[i];
    return i = s[s.length - 1], Cr(i, m.length), m[i] = l, this;
  };
  function u(s, l) {
    if (!bt(l)) throw new TypeError("Invalid index");
    var d = l.isScalar();
    if (d) return s.get(l.min());
    var D = l.size();
    if (D.length !== s._size.length) throw new pr(D.length, s._size.length);
    for (var p = l.min(), i = l.max(), h = 0, m = s._size.length; h < m; h++) Cr(p[h], s._size[h]), Cr(i[h], s._size[h]);
    return new n(t(s._data, l, D.length, 0), s._datatype);
  }
  function t(s, l, d, D) {
    var p = D === d - 1, i = l.dimension(D);
    return p ? i.map(function(h) {
      return Cr(h, s.length), s[h];
    }).valueOf() : i.map(function(h) {
      Cr(h, s.length);
      var m = s[h];
      return t(m, l, d, D + 1);
    }).valueOf();
  }
  function a(s, l, d, D) {
    if (!l || l.isIndex !== true) throw new TypeError("Invalid index");
    var p = l.size(), i = l.isScalar(), h;
    if (dr(d) ? (h = d.size(), d = d.valueOf()) : h = lr(d), i) {
      if (h.length !== 0) throw new TypeError("Scalar expected");
      s.set(l.min(), d, D);
    } else {
      if (!ve(h, p)) try {
        h.length === 0 ? d = yt([d], p) : d = yt(d, p), h = lr(d);
      } catch {
      }
      if (p.length < s._size.length) throw new pr(p.length, s._size.length, "<");
      if (h.length < p.length) {
        for (var m = 0, b = 0; p[m] === 1 && h[m] === 1; ) m++;
        for (; p[m] === 1; ) b++, m++;
        d = nu(d, p.length, b, h);
      }
      if (!ve(p, h)) throw new pr(p, h, ">");
      var g = l.max().map(function(F) {
        return F + 1;
      });
      c(s, g, D);
      var w = p.length, A = 0;
      o(s._data, l, d, w, A);
    }
    return s;
  }
  function o(s, l, d, D, p) {
    var i = p === D - 1, h = l.dimension(p);
    i ? h.forEach(function(m, b) {
      Cr(m), s[m] = d[b[0]];
    }) : h.forEach(function(m, b) {
      Cr(m), o(s[m], l, d[b[0]], D, p + 1);
    });
  }
  n.prototype.resize = function(s, l, d) {
    if (!Te(s)) throw new TypeError("Array or Matrix expected");
    var D = s.valueOf().map((i) => Array.isArray(i) && i.length === 1 ? i[0] : i), p = d ? this.clone() : this;
    return v(p, D, l);
  };
  function v(s, l, d) {
    if (l.length === 0) {
      for (var D = s._data; wr(D); ) D = D[0];
      return D;
    }
    return s._size = l.slice(0), s._data = Je(s._data, s._size, d), s;
  }
  n.prototype.reshape = function(s, l) {
    var d = l ? this.clone() : this;
    d._data = _t(d._data, s);
    var D = d._size.reduce((p, i) => p * i);
    return d._size = Bt(s, D), d;
  };
  function c(s, l, d) {
    for (var D = s._size.slice(0), p = false; D.length < l.length; ) D.push(0), p = true;
    for (var i = 0, h = l.length; i < h; i++) l[i] > D[i] && (D[i] = l[i], p = true);
    p && v(s, D, d);
  }
  n.prototype.clone = function() {
    var s = new n({ data: Dr(this._data), size: Dr(this._size), datatype: this._datatype });
    return s;
  }, n.prototype.size = function() {
    return this._size.slice(0);
  }, n.prototype._forEach = function(s) {
    var l = s.length === 2, d = this._size.length - 1;
    if (d < 0) return;
    if (l) {
      h(this._data);
      return;
    }
    if (d === 0) {
      for (var D = 0; D < this._data.length; D++) s(this._data, D, [D]);
      return;
    }
    var p = new Array(d + 1);
    i(this._data);
    function i(m) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (b < d) for (var g = 0; g < m.length; g++) p[b] = g, i(m[g], b + 1);
      else for (var w = 0; w < m.length; w++) p[b] = w, s(m, w, p.slice());
    }
    function h(m) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (b < d) for (var g = 0; g < m.length; g++) h(m[g], b + 1);
      else for (var w = 0; w < m.length; w++) s(m, w);
    }
  }, n.prototype.map = function(s) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, d = this, D = new n(d), p = We(s, d._data, "map", l), i = l || p.isUnary ? (h, m) => {
      h[m] = p.fn(h[m]);
    } : (h, m, b) => {
      h[m] = p.fn(h[m], b, d);
    };
    return D._forEach(i), D;
  }, n.prototype.forEach = function(s) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, d = this, D = We(s, d._data, "map", l), p = l || D.isUnary ? (i, h) => {
      D.fn(i[h]);
    } : (i, h, m) => {
      D.fn(i[h], m, d);
    };
    d._forEach(p);
  }, n.prototype[Symbol.iterator] = function* () {
    var s = this._size.length - 1;
    if (!(s < 0)) {
      if (s === 0) {
        for (var l = 0; l < this._data.length; l++) yield { value: this._data[l], index: [l] };
        return;
      }
      var d = [], D = function* (i, h) {
        if (h < s) for (var m = 0; m < i.length; m++) d[h] = m, yield* D(i[m], h + 1);
        else for (var b = 0; b < i.length; b++) d[h] = b, yield { value: i[b], index: d.slice() };
      };
      yield* D(this._data, 0);
    }
  }, n.prototype.rows = function() {
    var s = [], l = this.size();
    if (l.length !== 2) throw new TypeError("Rows can only be returned for a 2D matrix.");
    var d = this._data;
    for (var D of d) s.push(new n([D], this._datatype));
    return s;
  }, n.prototype.columns = function() {
    var s = this, l = [], d = this.size();
    if (d.length !== 2) throw new TypeError("Rows can only be returned for a 2D matrix.");
    for (var D = this._data, p = function(m) {
      var b = D.map((g) => [g[m]]);
      l.push(new n(b, s._datatype));
    }, i = 0; i < d[1]; i++) p(i);
    return l;
  }, n.prototype.toArray = function() {
    return Dr(this._data);
  }, n.prototype.valueOf = function() {
    return this._data;
  }, n.prototype.format = function(s) {
    return Er(this._data, s);
  }, n.prototype.toString = function() {
    return Er(this._data);
  }, n.prototype.toJSON = function() {
    return { mathjs: "DenseMatrix", data: this._data, size: this._size, datatype: this._datatype };
  }, n.prototype.diagonal = function(s) {
    if (s) {
      if (_r(s) && (s = s.toNumber()), !yr(s) || !Ar(s)) throw new TypeError("The parameter k must be an integer number");
    } else s = 0;
    for (var l = s > 0 ? s : 0, d = s < 0 ? -s : 0, D = this._size[0], p = this._size[1], i = Math.min(D - d, p - l), h = [], m = 0; m < i; m++) h[m] = this._data[m + d][m + l];
    return new n({ data: h, size: [i], datatype: this._datatype });
  }, n.diagonal = function(s, l, d, D) {
    if (!wr(s)) throw new TypeError("Array expected, size parameter");
    if (s.length !== 2) throw new Error("Only two dimensions matrix are supported");
    if (s = s.map(function(C) {
      if (_r(C) && (C = C.toNumber()), !yr(C) || !Ar(C) || C < 1) throw new Error("Size values must be positive integers");
      return C;
    }), d) {
      if (_r(d) && (d = d.toNumber()), !yr(d) || !Ar(d)) throw new TypeError("The parameter k must be an integer number");
    } else d = 0;
    var p = d > 0 ? d : 0, i = d < 0 ? -d : 0, h = s[0], m = s[1], b = Math.min(h - i, m - p), g;
    if (wr(l)) {
      if (l.length !== b) throw new Error("Invalid value array length");
      g = function(E) {
        return l[E];
      };
    } else if (dr(l)) {
      var w = l.size();
      if (w.length !== 1 || w[0] !== b) throw new Error("Invalid matrix length");
      g = function(E) {
        return l.get([E]);
      };
    } else g = function() {
      return l;
    };
    D || (D = _r(g(0)) ? g(0).mul(0) : 0);
    var A = [];
    if (s.length > 0) {
      A = Je(A, s, D);
      for (var F = 0; F < b; F++) A[F + i][F + p] = g(F);
    }
    return new n({ data: A, size: [h, m] });
  }, n.fromJSON = function(s) {
    return new n(s);
  }, n.prototype.swapRows = function(s, l) {
    if (!yr(s) || !Ar(s) || !yr(l) || !Ar(l)) throw new Error("Row index must be positive integers");
    if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
    return Cr(s, this._size[0]), Cr(l, this._size[0]), n._swapRows(s, l, this._data), this;
  }, n._swapRows = function(s, l, d) {
    var D = d[s];
    d[s] = d[l], d[l] = D;
  };
  function f(s) {
    return dr(s) ? f(s.valueOf()) : wr(s) ? s.map(f) : s;
  }
  return n;
}, { isClass: true });
function ii(r) {
  var e = r.length, n = r[0].length, u, t, a = [];
  for (t = 0; t < n; t++) {
    var o = [];
    for (u = 0; u < e; u++) o.push(r[u][t]);
    a.push(o);
  }
  return a;
}
function oi(r) {
  for (var e = 0; e < r.length; e++) if (Te(r[e])) return true;
  return false;
}
function si(r, e) {
  dr(r) ? r.forEach((n) => e(n), false, true) : Ha(r, e, true);
}
function Xr(r, e, n) {
  if (!n) return dr(r) ? r.map((t) => e(t), false, true) : Kt(r, e, true);
  var u = (t) => t === 0 ? t : e(t);
  return dr(r) ? r.map((t) => u(t), false, true) : Kt(r, u, true);
}
function fi(r, e, n) {
  var u = Array.isArray(r) ? lr(r) : r.size();
  if (e < 0 || e >= u.length) throw new De(e, u.length);
  return dr(r) ? r.create(Ge(r.valueOf(), e, n), r.datatype()) : Ge(r, e, n);
}
function Ge(r, e, n) {
  var u, t, a, o;
  if (e <= 0) if (Array.isArray(r[0])) {
    for (o = ii(r), t = [], u = 0; u < o.length; u++) t[u] = Ge(o[u], e - 1, n);
    return t;
  } else {
    for (a = r[0], u = 1; u < r.length; u++) a = n(a, r[u]);
    return a;
  }
  else {
    for (t = [], u = 0; u < r.length; u++) t[u] = Ge(r[u], e - 1, n);
    return t;
  }
}
var kt = "isInteger", ci = ["typed"], li = W(kt, ci, (r) => {
  var { typed: e } = r;
  return e(kt, { number: Ar, BigNumber: function(u) {
    return u.isInt();
  }, bigint: function(u) {
    return true;
  }, Fraction: function(u) {
    return u.d === 1n;
  }, "Array | Matrix": e.referToSelf((n) => (u) => Xr(u, n)) });
}), xt = "number", it = "number, number";
function cu(r) {
  return Math.abs(r);
}
cu.signature = xt;
function lu(r, e) {
  return r + e;
}
lu.signature = it;
function vu(r, e) {
  return r - e;
}
vu.signature = it;
function Du(r, e) {
  return r * e;
}
Du.signature = it;
function pu(r) {
  return -r;
}
pu.signature = xt;
function At(r) {
  return Aa(r);
}
At.signature = xt;
function du(r, e) {
  return r * r < 1 && e === 1 / 0 || r * r > 1 && e === -1 / 0 ? 0 : Math.pow(r, e);
}
du.signature = it;
var vi = "number";
function hu(r) {
  return r > 0;
}
hu.signature = vi;
function _e(r, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-9, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (n <= 0) throw new Error("Relative tolerance must be greater than 0");
  if (u < 0) throw new Error("Absolute tolerance must be at least 0");
  return r.isNaN() || e.isNaN() ? false : !r.isFinite() || !e.isFinite() ? r.eq(e) : r.eq(e) ? true : r.minus(e).abs().lte(r.constructor.max(r.constructor.max(r.abs(), e.abs()).mul(n), u));
}
var jt = "isPositive", Di = ["typed", "config"], pi = W(jt, Di, (r) => {
  var { typed: e, config: n } = r;
  return e(jt, { number: (u) => se(u, 0, n.relTol, n.absTol) ? false : hu(u), BigNumber: (u) => _e(u, new u.constructor(0), n.relTol, n.absTol) ? false : !u.isNeg() && !u.isZero() && !u.isNaN(), bigint: (u) => u > 0n, Fraction: (u) => u.s > 0n && u.n > 0n, Unit: e.referToSelf((u) => (t) => e.find(u, t.valueType())(t.value)), "Array | Matrix": e.referToSelf((u) => (t) => Xr(t, u)) });
}), rn = "isZero", di = ["typed", "equalScalar"], hi = W(rn, di, (r) => {
  var { typed: e, equalScalar: n } = r;
  return e(rn, { "number | BigNumber | Complex | Fraction": (u) => n(u, 0), bigint: (u) => u === 0n, Unit: e.referToSelf((u) => (t) => e.find(u, t.valueType())(t.value)), "Array | Matrix": e.referToSelf((u) => (t) => Xr(t, u)) });
});
function mi(r, e, n, u) {
  return se(r.re, e.re, n, u) && se(r.im, e.im, n, u);
}
var $e = W("compareUnits", ["typed"], (r) => {
  var { typed: e } = r;
  return { "Unit, Unit": e.referToSelf((n) => (u, t) => {
    if (!u.equalBase(t)) throw new Error("Cannot compare units with different base");
    return e.find(n, [u.valueType(), t.valueType()])(u.value, t.value);
  }) };
}), Ke = "equalScalar", gi = ["typed", "config"], yi = W(Ke, gi, (r) => {
  var { typed: e, config: n } = r, u = $e({ typed: e });
  return e(Ke, { "boolean, boolean": function(a, o) {
    return a === o;
  }, "number, number": function(a, o) {
    return se(a, o, n.relTol, n.absTol);
  }, "BigNumber, BigNumber": function(a, o) {
    return a.eq(o) || _e(a, o, n.relTol, n.absTol);
  }, "bigint, bigint": function(a, o) {
    return a === o;
  }, "Fraction, Fraction": function(a, o) {
    return a.equals(o);
  }, "Complex, Complex": function(a, o) {
    return mi(a, o, n.relTol, n.absTol);
  } }, u);
});
W(Ke, ["typed", "config"], (r) => {
  var { typed: e, config: n } = r;
  return e(Ke, { "number, number": function(t, a) {
    return se(t, a, n.relTol, n.absTol);
  } });
});
var Ai = "SparseMatrix", Fi = ["typed", "equalScalar", "Matrix"], Ei = W(Ai, Fi, (r) => {
  var { typed: e, equalScalar: n, Matrix: u } = r;
  function t(i, h) {
    if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
    if (h && !Gr(h)) throw new Error("Invalid datatype: " + h);
    if (dr(i)) a(this, i, h);
    else if (i && wr(i.index) && wr(i.ptr) && wr(i.size)) this._values = i.values, this._index = i.index, this._ptr = i.ptr, this._size = i.size, this._datatype = h || i.datatype;
    else if (wr(i)) o(this, i, h);
    else {
      if (i) throw new TypeError("Unsupported type of data (" + Pr(i) + ")");
      this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = h;
    }
  }
  function a(i, h, m) {
    h.type === "SparseMatrix" ? (i._values = h._values ? Dr(h._values) : void 0, i._index = Dr(h._index), i._ptr = Dr(h._ptr), i._size = Dr(h._size), i._datatype = m || h._datatype) : o(i, h.valueOf(), m || h._datatype);
  }
  function o(i, h, m) {
    i._values = [], i._index = [], i._ptr = [], i._datatype = m;
    var b = h.length, g = 0, w = n, A = 0;
    if (Gr(m) && (w = e.find(n, [m, m]) || n, A = e.convert(0, m)), b > 0) {
      var F = 0;
      do {
        i._ptr.push(i._index.length);
        for (var C = 0; C < b; C++) {
          var E = h[C];
          if (wr(E)) {
            if (F === 0 && g < E.length && (g = E.length), F < E.length) {
              var y = E[F];
              w(y, A) || (i._values.push(y), i._index.push(C));
            }
          } else F === 0 && g < 1 && (g = 1), w(E, A) || (i._values.push(E), i._index.push(C));
        }
        F++;
      } while (F < g);
    }
    i._ptr.push(i._index.length), i._size = [b, g];
  }
  t.prototype = new u(), t.prototype.createSparseMatrix = function(i, h) {
    return new t(i, h);
  }, Object.defineProperty(t, "name", { value: "SparseMatrix" }), t.prototype.constructor = t, t.prototype.type = "SparseMatrix", t.prototype.isSparseMatrix = true, t.prototype.getDataType = function() {
    return at(this._values, Pr);
  }, t.prototype.storage = function() {
    return "sparse";
  }, t.prototype.datatype = function() {
    return this._datatype;
  }, t.prototype.create = function(i, h) {
    return new t(i, h);
  }, t.prototype.density = function() {
    var i = this._size[0], h = this._size[1];
    return i !== 0 && h !== 0 ? this._index.length / (i * h) : 0;
  }, t.prototype.subset = function(i, h, m) {
    if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return v(this, i);
      case 2:
      case 3:
        return c(this, i, h, m);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function v(i, h) {
    if (!bt(h)) throw new TypeError("Invalid index");
    var m = h.isScalar();
    if (m) return i.get(h.min());
    var b = h.size();
    if (b.length !== i._size.length) throw new pr(b.length, i._size.length);
    var g, w, A, F, C = h.min(), E = h.max();
    for (g = 0, w = i._size.length; g < w; g++) Cr(C[g], i._size[g]), Cr(E[g], i._size[g]);
    var y = i._values, B = i._index, _ = i._ptr, x = h.dimension(0), O = h.dimension(1), N = [], U = [];
    x.forEach(function(M, X) {
      U[M] = X[0], N[M] = true;
    });
    var z = y ? [] : void 0, Z = [], S = [];
    return O.forEach(function(M) {
      for (S.push(Z.length), A = _[M], F = _[M + 1]; A < F; A++) g = B[A], N[g] === true && (Z.push(U[g]), z && z.push(y[A]));
    }), S.push(Z.length), new t({ values: z, index: Z, ptr: S, size: b, datatype: i._datatype });
  }
  function c(i, h, m, b) {
    if (!h || h.isIndex !== true) throw new TypeError("Invalid index");
    var g = h.size(), w = h.isScalar(), A;
    if (dr(m) ? (A = m.size(), m = m.toArray()) : A = lr(m), w) {
      if (A.length !== 0) throw new TypeError("Scalar expected");
      i.set(h.min(), m, b);
    } else {
      if (g.length !== 1 && g.length !== 2) throw new pr(g.length, i._size.length, "<");
      if (A.length < g.length) {
        for (var F = 0, C = 0; g[F] === 1 && A[F] === 1; ) F++;
        for (; g[F] === 1; ) C++, F++;
        m = nu(m, g.length, C, A);
      }
      if (!ve(g, A)) throw new pr(g, A, ">");
      if (g.length === 1) {
        var E = h.dimension(0);
        E.forEach(function(_, x) {
          Cr(_), i.set([_, 0], m[x[0]], b);
        });
      } else {
        var y = h.dimension(0), B = h.dimension(1);
        y.forEach(function(_, x) {
          Cr(_), B.forEach(function(O, N) {
            Cr(O), i.set([_, O], m[x[0]][N[0]], b);
          });
        });
      }
    }
    return i;
  }
  t.prototype.get = function(i) {
    if (!wr(i)) throw new TypeError("Array expected");
    if (i.length !== this._size.length) throw new pr(i.length, this._size.length);
    if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
    var h = i[0], m = i[1];
    Cr(h, this._size[0]), Cr(m, this._size[1]);
    var b = f(h, this._ptr[m], this._ptr[m + 1], this._index);
    return b < this._ptr[m + 1] && this._index[b] === h ? this._values[b] : 0;
  }, t.prototype.set = function(i, h, m) {
    if (!wr(i)) throw new TypeError("Array expected");
    if (i.length !== this._size.length) throw new pr(i.length, this._size.length);
    if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
    var b = i[0], g = i[1], w = this._size[0], A = this._size[1], F = n, C = 0;
    Gr(this._datatype) && (F = e.find(n, [this._datatype, this._datatype]) || n, C = e.convert(0, this._datatype)), (b > w - 1 || g > A - 1) && (d(this, Math.max(b + 1, w), Math.max(g + 1, A), m), w = this._size[0], A = this._size[1]), Cr(b, w), Cr(g, A);
    var E = f(b, this._ptr[g], this._ptr[g + 1], this._index);
    return E < this._ptr[g + 1] && this._index[E] === b ? F(h, C) ? s(E, g, this._values, this._index, this._ptr) : this._values[E] = h : F(h, C) || l(E, b, g, h, this._values, this._index, this._ptr), this;
  };
  function f(i, h, m, b) {
    if (m - h === 0) return m;
    for (var g = h; g < m; g++) if (b[g] === i) return g;
    return h;
  }
  function s(i, h, m, b, g) {
    m.splice(i, 1), b.splice(i, 1);
    for (var w = h + 1; w < g.length; w++) g[w]--;
  }
  function l(i, h, m, b, g, w, A) {
    g.splice(i, 0, b), w.splice(i, 0, h);
    for (var F = m + 1; F < A.length; F++) A[F]++;
  }
  t.prototype.resize = function(i, h, m) {
    if (!Te(i)) throw new TypeError("Array or Matrix expected");
    var b = i.valueOf().map((w) => Array.isArray(w) && w.length === 1 ? w[0] : w);
    if (b.length !== 2) throw new Error("Only two dimensions matrix are supported");
    b.forEach(function(w) {
      if (!yr(w) || !Ar(w) || w < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + Er(b) + ")");
    });
    var g = m ? this.clone() : this;
    return d(g, b[0], b[1], h);
  };
  function d(i, h, m, b) {
    var g = b || 0, w = n, A = 0;
    Gr(i._datatype) && (w = e.find(n, [i._datatype, i._datatype]) || n, A = e.convert(0, i._datatype), g = e.convert(g, i._datatype));
    var F = !w(g, A), C = i._size[0], E = i._size[1], y, B, _;
    if (m > E) {
      for (B = E; B < m; B++) if (i._ptr[B] = i._values.length, F) for (y = 0; y < C; y++) i._values.push(g), i._index.push(y);
      i._ptr[m] = i._values.length;
    } else m < E && (i._ptr.splice(m + 1, E - m), i._values.splice(i._ptr[m], i._values.length), i._index.splice(i._ptr[m], i._index.length));
    if (E = m, h > C) {
      if (F) {
        var x = 0;
        for (B = 0; B < E; B++) {
          i._ptr[B] = i._ptr[B] + x, _ = i._ptr[B + 1] + x;
          var O = 0;
          for (y = C; y < h; y++, O++) i._values.splice(_ + O, 0, g), i._index.splice(_ + O, 0, y), x++;
        }
        i._ptr[E] = i._values.length;
      }
    } else if (h < C) {
      var N = 0;
      for (B = 0; B < E; B++) {
        i._ptr[B] = i._ptr[B] - N;
        var U = i._ptr[B], z = i._ptr[B + 1] - N;
        for (_ = U; _ < z; _++) y = i._index[_], y > h - 1 && (i._values.splice(_, 1), i._index.splice(_, 1), N++);
      }
      i._ptr[B] = i._values.length;
    }
    return i._size[0] = h, i._size[1] = m, i;
  }
  t.prototype.reshape = function(i, h) {
    if (!wr(i)) throw new TypeError("Array expected");
    if (i.length !== 2) throw new Error("Sparse matrices can only be reshaped in two dimensions");
    i.forEach(function(M) {
      if (!yr(M) || !Ar(M) || M <= -2 || M === 0) throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Er(i) + ")");
    });
    var m = this._size[0] * this._size[1];
    i = Bt(i, m);
    var b = i[0] * i[1];
    if (m !== b) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var g = h ? this.clone() : this;
    if (this._size[0] === i[0] && this._size[1] === i[1]) return g;
    for (var w = [], A = 0; A < g._ptr.length; A++) for (var F = 0; F < g._ptr[A + 1] - g._ptr[A]; F++) w.push(A);
    for (var C = g._values.slice(), E = g._index.slice(), y = 0; y < g._index.length; y++) {
      var B = E[y], _ = w[y], x = B * g._size[1] + _;
      w[y] = x % i[1], E[y] = Math.floor(x / i[1]);
    }
    g._values.length = 0, g._index.length = 0, g._ptr.length = i[1] + 1, g._size = i.slice();
    for (var O = 0; O < g._ptr.length; O++) g._ptr[O] = 0;
    for (var N = 0; N < C.length; N++) {
      var U = E[N], z = w[N], Z = C[N], S = f(U, g._ptr[z], g._ptr[z + 1], g._index);
      l(S, U, z, Z, g._values, g._index, g._ptr);
    }
    return g;
  }, t.prototype.clone = function() {
    var i = new t({ values: this._values ? Dr(this._values) : void 0, index: Dr(this._index), ptr: Dr(this._ptr), size: Dr(this._size), datatype: this._datatype });
    return i;
  }, t.prototype.size = function() {
    return this._size.slice(0);
  }, t.prototype.map = function(i, h) {
    if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
    var m = this, b = this._size[0], g = this._size[1], w = We(i, m, "map"), A = function(C, E, y) {
      return w.fn(C, [E, y], m);
    };
    return D(this, 0, b - 1, 0, g - 1, A, h);
  };
  function D(i, h, m, b, g, w, A) {
    var F = [], C = [], E = [], y = n, B = 0;
    Gr(i._datatype) && (y = e.find(n, [i._datatype, i._datatype]) || n, B = e.convert(0, i._datatype));
    for (var _ = function($, q, P) {
      var Y = w($, q, P);
      y(Y, B) || (F.push(Y), C.push(q));
    }, x = b; x <= g; x++) {
      E.push(F.length);
      var O = i._ptr[x], N = i._ptr[x + 1];
      if (A) for (var U = O; U < N; U++) {
        var z = i._index[U];
        z >= h && z <= m && _(i._values[U], z - h, x - b);
      }
      else {
        for (var Z = {}, S = O; S < N; S++) {
          var M = i._index[S];
          Z[M] = i._values[S];
        }
        for (var X = h; X <= m; X++) {
          var Q = X in Z ? Z[X] : 0;
          _(Q, X - h, x - b);
        }
      }
    }
    return E.push(F.length), new t({ values: F, index: C, ptr: E, size: [m - h + 1, g - b + 1] });
  }
  t.prototype.forEach = function(i, h) {
    if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var m = this, b = this._size[0], g = this._size[1], w = We(i, m, "forEach"), A = 0; A < g; A++) {
      var F = this._ptr[A], C = this._ptr[A + 1];
      if (h) for (var E = F; E < C; E++) {
        var y = this._index[E];
        w.fn(this._values[E], [y, A], m);
      }
      else {
        for (var B = {}, _ = F; _ < C; _++) {
          var x = this._index[_];
          B[x] = this._values[_];
        }
        for (var O = 0; O < b; O++) {
          var N = O in B ? B[O] : 0;
          w.fn(N, [O, A], m);
        }
      }
    }
  }, t.prototype[Symbol.iterator] = function* () {
    if (!this._values) throw new Error("Cannot iterate a Pattern only matrix");
    for (var i = this._size[1], h = 0; h < i; h++) for (var m = this._ptr[h], b = this._ptr[h + 1], g = m; g < b; g++) {
      var w = this._index[g];
      yield { value: this._values[g], index: [w, h] };
    }
  }, t.prototype.toArray = function() {
    return p(this._values, this._index, this._ptr, this._size, true);
  }, t.prototype.valueOf = function() {
    return p(this._values, this._index, this._ptr, this._size, false);
  };
  function p(i, h, m, b, g) {
    var w = b[0], A = b[1], F = [], C, E;
    for (C = 0; C < w; C++) for (F[C] = [], E = 0; E < A; E++) F[C][E] = 0;
    for (E = 0; E < A; E++) for (var y = m[E], B = m[E + 1], _ = y; _ < B; _++) C = h[_], F[C][E] = i ? g ? Dr(i[_]) : i[_] : 1;
    return F;
  }
  return t.prototype.format = function(i) {
    for (var h = this._size[0], m = this._size[1], b = this.density(), g = "Sparse Matrix [" + Er(h, i) + " x " + Er(m, i) + "] density: " + Er(b, i) + `
`, w = 0; w < m; w++) for (var A = this._ptr[w], F = this._ptr[w + 1], C = A; C < F; C++) {
      var E = this._index[C];
      g += `
    (` + Er(E, i) + ", " + Er(w, i) + ") ==> " + (this._values ? Er(this._values[C], i) : "X");
    }
    return g;
  }, t.prototype.toString = function() {
    return Er(this.toArray());
  }, t.prototype.toJSON = function() {
    return { mathjs: "SparseMatrix", values: this._values, index: this._index, ptr: this._ptr, size: this._size, datatype: this._datatype };
  }, t.prototype.diagonal = function(i) {
    if (i) {
      if (_r(i) && (i = i.toNumber()), !yr(i) || !Ar(i)) throw new TypeError("The parameter k must be an integer number");
    } else i = 0;
    var h = i > 0 ? i : 0, m = i < 0 ? -i : 0, b = this._size[0], g = this._size[1], w = Math.min(b - m, g - h), A = [], F = [], C = [];
    C[0] = 0;
    for (var E = h; E < g && A.length < w; E++) for (var y = this._ptr[E], B = this._ptr[E + 1], _ = y; _ < B; _++) {
      var x = this._index[_];
      if (x === E - h + m) {
        A.push(this._values[_]), F[A.length - 1] = x - m;
        break;
      }
    }
    return C.push(A.length), new t({ values: A, index: F, ptr: C, size: [w, 1] });
  }, t.fromJSON = function(i) {
    return new t(i);
  }, t.diagonal = function(i, h, m, b, g) {
    if (!wr(i)) throw new TypeError("Array expected, size parameter");
    if (i.length !== 2) throw new Error("Only two dimensions matrix are supported");
    if (i = i.map(function(M) {
      if (_r(M) && (M = M.toNumber()), !yr(M) || !Ar(M) || M < 1) throw new Error("Size values must be positive integers");
      return M;
    }), m) {
      if (_r(m) && (m = m.toNumber()), !yr(m) || !Ar(m)) throw new TypeError("The parameter k must be an integer number");
    } else m = 0;
    var w = n, A = 0;
    Gr(g) && (w = e.find(n, [g, g]) || n, A = e.convert(0, g));
    var F = m > 0 ? m : 0, C = m < 0 ? -m : 0, E = i[0], y = i[1], B = Math.min(E - C, y - F), _;
    if (wr(h)) {
      if (h.length !== B) throw new Error("Invalid value array length");
      _ = function(X) {
        return h[X];
      };
    } else if (dr(h)) {
      var x = h.size();
      if (x.length !== 1 || x[0] !== B) throw new Error("Invalid matrix length");
      _ = function(X) {
        return h.get([X]);
      };
    } else _ = function() {
      return h;
    };
    for (var O = [], N = [], U = [], z = 0; z < y; z++) {
      U.push(O.length);
      var Z = z - F;
      if (Z >= 0 && Z < B) {
        var S = _(Z);
        w(S, A) || (N.push(Z + C), O.push(S));
      }
    }
    return U.push(O.length), new t({ values: O, index: N, ptr: U, size: [E, y] });
  }, t.prototype.swapRows = function(i, h) {
    if (!yr(i) || !Ar(i) || !yr(h) || !Ar(h)) throw new Error("Row index must be positive integers");
    if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
    return Cr(i, this._size[0]), Cr(h, this._size[0]), t._swapRows(i, h, this._size[1], this._values, this._index, this._ptr), this;
  }, t._forEachRow = function(i, h, m, b, g) {
    for (var w = b[i], A = b[i + 1], F = w; F < A; F++) g(m[F], h[F]);
  }, t._swapRows = function(i, h, m, b, g, w) {
    for (var A = 0; A < m; A++) {
      var F = w[A], C = w[A + 1], E = f(i, F, C, g), y = f(h, F, C, g);
      if (E < C && y < C && g[E] === i && g[y] === h) {
        if (b) {
          var B = b[E];
          b[E] = b[y], b[y] = B;
        }
        continue;
      }
      if (E < C && g[E] === i && (y >= C || g[y] !== h)) {
        var _ = b ? b[E] : void 0;
        g.splice(y, 0, h), b && b.splice(y, 0, _), g.splice(y <= E ? E + 1 : E, 1), b && b.splice(y <= E ? E + 1 : E, 1);
        continue;
      }
      if (y < C && g[y] === h && (E >= C || g[E] !== i)) {
        var x = b ? b[y] : void 0;
        g.splice(E, 0, i), b && b.splice(E, 0, x), g.splice(E <= y ? y + 1 : y, 1), b && b.splice(E <= y ? y + 1 : y, 1);
      }
    }
  }, t;
}, { isClass: true }), bi = "number", wi = ["typed"];
function Ci(r) {
  var e = r.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (e) {
    var n = { "0b": 2, "0o": 8, "0x": 16 }[e[1]], u = e[2], t = e[3];
    return { input: r, radix: n, integerPart: u, fractionalPart: t };
  } else return null;
}
function _i(r) {
  for (var e = parseInt(r.integerPart, r.radix), n = 0, u = 0; u < r.fractionalPart.length; u++) {
    var t = parseInt(r.fractionalPart[u], r.radix);
    n += t / Math.pow(r.radix, u + 1);
  }
  var a = e + n;
  if (isNaN(a)) throw new SyntaxError('String "' + r.input + '" is not a valid number');
  return a;
}
var Bi = W(bi, wi, (r) => {
  var { typed: e } = r, n = e("number", { "": function() {
    return 0;
  }, number: function(t) {
    return t;
  }, string: function(t) {
    if (t === "NaN") return NaN;
    var a = Ci(t);
    if (a) return _i(a);
    var o = 0, v = t.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
    v && (o = Number(v[2]), t = v[1]);
    var c = Number(t);
    if (isNaN(c)) throw new SyntaxError('String "' + t + '" is not a valid number');
    if (v) {
      if (c > 2 ** o - 1) throw new SyntaxError('String "'.concat(t, '" is out of range'));
      c >= 2 ** (o - 1) && (c = c - 2 ** o);
    }
    return c;
  }, BigNumber: function(t) {
    return t.toNumber();
  }, bigint: function(t) {
    return Number(t);
  }, Fraction: function(t) {
    return t.valueOf();
  }, Unit: e.referToSelf((u) => (t) => {
    var a = t.clone();
    return a.value = u(t.value), a;
  }), null: function(t) {
    return 0;
  }, "Unit, string | Unit": function(t, a) {
    return t.toNumber(a);
  }, "Array | Matrix": e.referToSelf((u) => (t) => Xr(t, u)) });
  return n.fromJSON = function(u) {
    return parseFloat(u.value);
  }, n;
}), xi = "bignumber", Mi = ["typed", "BigNumber"], Si = W(xi, Mi, (r) => {
  var { typed: e, BigNumber: n } = r;
  return e("bignumber", { "": function() {
    return new n(0);
  }, number: function(t) {
    return new n(t + "");
  }, string: function(t) {
    var a = t.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
    if (a) {
      var o = a[2], v = n(a[1]), c = new n(2).pow(Number(o));
      if (v.gt(c.sub(1))) throw new SyntaxError('String "'.concat(t, '" is out of range'));
      var f = new n(2).pow(Number(o) - 1);
      return v.gte(f) ? v.sub(c) : v;
    }
    return new n(t);
  }, BigNumber: function(t) {
    return t;
  }, bigint: function(t) {
    return new n(t.toString());
  }, Unit: e.referToSelf((u) => (t) => {
    var a = t.clone();
    return a.value = u(t.value), a;
  }), Fraction: function(t) {
    return new n(String(t.n)).div(String(t.d)).times(String(t.s));
  }, null: function(t) {
    return new n(0);
  }, "Array | Matrix": e.referToSelf((u) => (t) => Xr(t, u)) });
}), Ni = "complex", Ti = ["typed", "Complex"], zi = W(Ni, Ti, (r) => {
  var { typed: e, Complex: n } = r;
  return e("complex", { "": function() {
    return n.ZERO;
  }, number: function(t) {
    return new n(t, 0);
  }, "number, number": function(t, a) {
    return new n(t, a);
  }, "BigNumber, BigNumber": function(t, a) {
    return new n(t.toNumber(), a.toNumber());
  }, Fraction: function(t) {
    return new n(t.valueOf(), 0);
  }, Complex: function(t) {
    return t.clone();
  }, string: function(t) {
    return n(t);
  }, null: function(t) {
    return n(0);
  }, Object: function(t) {
    if ("re" in t && "im" in t) return new n(t.re, t.im);
    if ("r" in t && "phi" in t || "abs" in t && "arg" in t) return new n(t);
    throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)");
  }, "Array | Matrix": e.referToSelf((u) => (t) => Xr(t, u)) });
}), Oi = "fraction", $i = ["typed", "Fraction"], Ii = W(Oi, $i, (r) => {
  var { typed: e, Fraction: n } = r;
  return e("fraction", { number: function(t) {
    if (!isFinite(t) || isNaN(t)) throw new Error(t + " cannot be represented as a fraction");
    return new n(t);
  }, string: function(t) {
    return new n(t);
  }, "number, number": function(t, a) {
    return new n(t, a);
  }, "bigint, bigint": function(t, a) {
    return new n(t, a);
  }, null: function(t) {
    return new n(0);
  }, BigNumber: function(t) {
    return new n(t.toString());
  }, bigint: function(t) {
    return new n(t.toString());
  }, Fraction: function(t) {
    return t;
  }, Unit: e.referToSelf((u) => (t) => {
    var a = t.clone();
    return a.value = u(t.value), a;
  }), Object: function(t) {
    return new n(t);
  }, "Array | Matrix": e.referToSelf((u) => (t) => Xr(t, u)) });
}), en = "matrix", qi = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], Ri = W(en, qi, (r) => {
  var { typed: e, Matrix: n, DenseMatrix: u, SparseMatrix: t } = r;
  return e(en, { "": function() {
    return a([]);
  }, string: function(v) {
    return a([], v);
  }, "string, string": function(v, c) {
    return a([], v, c);
  }, Array: function(v) {
    return a(v);
  }, Matrix: function(v) {
    return a(v, v.storage());
  }, "Array | Matrix, string": a, "Array | Matrix, string, string": a });
  function a(o, v, c) {
    if (v === "dense" || v === "default" || v === void 0) return new u(o, c);
    if (v === "sparse") return new t(o, c);
    throw new TypeError("Unknown matrix type " + JSON.stringify(v) + ".");
  }
}), tn = "matrixFromColumns", Ui = ["typed", "matrix", "flatten", "size"], Pi = W(tn, Ui, (r) => {
  var { typed: e, matrix: n, flatten: u, size: t } = r;
  return e(tn, { "...Array": function(c) {
    return a(c);
  }, "...Matrix": function(c) {
    return n(a(c.map((f) => f.toArray())));
  } });
  function a(v) {
    if (v.length === 0) throw new TypeError("At least one column is needed to construct a matrix.");
    for (var c = o(v[0]), f = [], s = 0; s < c; s++) f[s] = [];
    for (var l of v) {
      var d = o(l);
      if (d !== c) throw new TypeError("The vectors had different length: " + (c | 0) + " \u2260 " + (d | 0));
      for (var D = u(l), p = 0; p < c; p++) f[p].push(D[p]);
    }
    return f;
  }
  function o(v) {
    var c = t(v);
    if (c.length === 1) return c[0];
    if (c.length === 2) {
      if (c[0] === 1) return c[1];
      if (c[1] === 1) return c[0];
      throw new TypeError("At least one of the arguments is not a vector.");
    } else throw new TypeError("Only one- or two-dimensional vectors are supported.");
  }
}), nn = "unaryMinus", Xi = ["typed"], Yi = W(nn, Xi, (r) => {
  var { typed: e } = r;
  return e(nn, { number: pu, "Complex | BigNumber | Fraction": (n) => n.neg(), bigint: (n) => -n, Unit: e.referToSelf((n) => (u) => {
    var t = u.clone();
    return t.value = e.find(n, t.valueType())(u.value), t;
  }), "Array | Matrix": e.referToSelf((n) => (u) => Xr(u, n, true)) });
}), un = "abs", Li = ["typed"], Qi = W(un, Li, (r) => {
  var { typed: e } = r;
  return e(un, { number: cu, "Complex | BigNumber | Fraction | Unit": (n) => n.abs(), bigint: (n) => n < 0n ? -n : n, "Array | Matrix": e.referToSelf((n) => (u) => Xr(u, n, true)) });
}), an = "addScalar", Vi = ["typed"], Zi = W(an, Vi, (r) => {
  var { typed: e } = r;
  return e(an, { "number, number": lu, "Complex, Complex": function(u, t) {
    return u.add(t);
  }, "BigNumber, BigNumber": function(u, t) {
    return u.plus(t);
  }, "bigint, bigint": function(u, t) {
    return u + t;
  }, "Fraction, Fraction": function(u, t) {
    return u.add(t);
  }, "Unit, Unit": e.referToSelf((n) => (u, t) => {
    if (u.value === null || u.value === void 0) throw new Error("Parameter x contains a unit with undefined value");
    if (t.value === null || t.value === void 0) throw new Error("Parameter y contains a unit with undefined value");
    if (!u.equalBase(t)) throw new Error("Units do not match");
    var a = u.clone();
    return a.value = e.find(n, [a.valueType(), t.valueType()])(a.value, t.value), a.fixPrefix = false, a;
  }) });
}), on = "subtractScalar", Ji = ["typed"], Wi = W(on, Ji, (r) => {
  var { typed: e } = r;
  return e(on, { "number, number": vu, "Complex, Complex": function(u, t) {
    return u.sub(t);
  }, "BigNumber, BigNumber": function(u, t) {
    return u.minus(t);
  }, "bigint, bigint": function(u, t) {
    return u - t;
  }, "Fraction, Fraction": function(u, t) {
    return u.sub(t);
  }, "Unit, Unit": e.referToSelf((n) => (u, t) => {
    if (u.value === null || u.value === void 0) throw new Error("Parameter x contains a unit with undefined value");
    if (t.value === null || t.value === void 0) throw new Error("Parameter y contains a unit with undefined value");
    if (!u.equalBase(t)) throw new Error("Units do not match");
    var a = u.clone();
    return a.value = e.find(n, [a.valueType(), t.valueType()])(a.value, t.value), a.fixPrefix = false, a;
  }) });
}), Gi = "matAlgo11xS0s", Ki = ["typed", "equalScalar"], mu = W(Gi, Ki, (r) => {
  var { typed: e, equalScalar: n } = r;
  return function(t, a, o, v) {
    var c = t._values, f = t._index, s = t._ptr, l = t._size, d = t._datatype;
    if (!c) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var D = l[0], p = l[1], i, h = n, m = 0, b = o;
    typeof d == "string" && (i = d, h = e.find(n, [i, i]), m = e.convert(0, i), a = e.convert(a, i), b = e.find(o, [i, i]));
    for (var g = [], w = [], A = [], F = 0; F < p; F++) {
      A[F] = w.length;
      for (var C = s[F], E = s[F + 1], y = C; y < E; y++) {
        var B = f[y], _ = v ? b(a, c[y]) : b(c[y], a);
        h(_, m) || (w.push(B), g.push(_));
      }
    }
    return A[p] = w.length, t.createSparseMatrix({ values: g, index: w, ptr: A, size: [D, p], datatype: i });
  };
}), Hi = "matAlgo12xSfs", ki = ["typed", "DenseMatrix"], Be = W(Hi, ki, (r) => {
  var { typed: e, DenseMatrix: n } = r;
  return function(t, a, o, v) {
    var c = t._values, f = t._index, s = t._ptr, l = t._size, d = t._datatype;
    if (!c) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var D = l[0], p = l[1], i, h = o;
    typeof d == "string" && (i = d, a = e.convert(a, i), h = e.find(o, [i, i]));
    for (var m = [], b = [], g = [], w = 0; w < p; w++) {
      for (var A = w + 1, F = s[w], C = s[w + 1], E = F; E < C; E++) {
        var y = f[E];
        b[y] = c[E], g[y] = A;
      }
      for (var B = 0; B < D; B++) w === 0 && (m[B] = []), g[B] === A ? m[B][w] = v ? h(a, b[B]) : h(b[B], a) : m[B][w] = v ? h(a, 0) : h(0, a);
    }
    return new n({ data: m, size: [D, p], datatype: i });
  };
}), ji = "matAlgo14xDs", ro = ["typed"], Mt = W(ji, ro, (r) => {
  var { typed: e } = r;
  return function(t, a, o, v) {
    var c = t._data, f = t._size, s = t._datatype, l, d = o;
    typeof s == "string" && (l = s, a = e.convert(a, l), d = e.find(o, [l, l]));
    var D = f.length > 0 ? n(d, 0, f, f[0], c, a, v) : [];
    return t.createDenseMatrix({ data: D, size: Dr(f), datatype: l });
  };
  function n(u, t, a, o, v, c, f) {
    var s = [];
    if (t === a.length - 1) for (var l = 0; l < o; l++) s[l] = f ? u(c, v[l]) : u(v[l], c);
    else for (var d = 0; d < o; d++) s[d] = n(u, t + 1, a, a[t + 1], v[d], c, f);
    return s;
  }
}), eo = "matAlgo03xDSf", to = ["typed"], xe = W(eo, to, (r) => {
  var { typed: e } = r;
  return function(u, t, a, o) {
    var v = u._data, c = u._size, f = u._datatype || u.getDataType(), s = t._values, l = t._index, d = t._ptr, D = t._size, p = t._datatype || t._data === void 0 ? t._datatype : t.getDataType();
    if (c.length !== D.length) throw new pr(c.length, D.length);
    if (c[0] !== D[0] || c[1] !== D[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + D + ")");
    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var i = c[0], h = c[1], m, b = 0, g = a;
    typeof f == "string" && f === p && f !== "mixed" && (m = f, b = e.convert(0, m), g = e.find(a, [m, m]));
    for (var w = [], A = 0; A < i; A++) w[A] = [];
    for (var F = [], C = [], E = 0; E < h; E++) {
      for (var y = E + 1, B = d[E], _ = d[E + 1], x = B; x < _; x++) {
        var O = l[x];
        F[O] = o ? g(s[x], v[O][E]) : g(v[O][E], s[x]), C[O] = y;
      }
      for (var N = 0; N < i; N++) C[N] === y ? w[N][E] = F[N] : w[N][E] = o ? g(b, v[N][E]) : g(v[N][E], b);
    }
    return u.createDenseMatrix({ data: w, size: [i, h], datatype: f === u._datatype && p === t._datatype ? m : void 0 });
  };
}), no = "matAlgo05xSfSf", uo = ["typed", "equalScalar"], ao = W(no, uo, (r) => {
  var { typed: e, equalScalar: n } = r;
  return function(t, a, o) {
    var v = t._values, c = t._index, f = t._ptr, s = t._size, l = t._datatype || t._data === void 0 ? t._datatype : t.getDataType(), d = a._values, D = a._index, p = a._ptr, i = a._size, h = a._datatype || a._data === void 0 ? a._datatype : a.getDataType();
    if (s.length !== i.length) throw new pr(s.length, i.length);
    if (s[0] !== i[0] || s[1] !== i[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + i + ")");
    var m = s[0], b = s[1], g, w = n, A = 0, F = o;
    typeof l == "string" && l === h && l !== "mixed" && (g = l, w = e.find(n, [g, g]), A = e.convert(0, g), F = e.find(o, [g, g]));
    var C = v && d ? [] : void 0, E = [], y = [], B = C ? [] : void 0, _ = C ? [] : void 0, x = [], O = [], N, U, z, Z;
    for (U = 0; U < b; U++) {
      y[U] = E.length;
      var S = U + 1;
      for (z = f[U], Z = f[U + 1]; z < Z; z++) N = c[z], E.push(N), x[N] = S, B && (B[N] = v[z]);
      for (z = p[U], Z = p[U + 1]; z < Z; z++) N = D[z], x[N] !== S && E.push(N), O[N] = S, _ && (_[N] = d[z]);
      if (C) for (z = y[U]; z < E.length; ) {
        N = E[z];
        var M = x[N], X = O[N];
        if (M === S || X === S) {
          var Q = M === S ? B[N] : A, T = X === S ? _[N] : A, $ = F(Q, T);
          w($, A) ? E.splice(z, 1) : (C.push($), z++);
        }
      }
    }
    return y[b] = E.length, t.createSparseMatrix({ values: C, index: E, ptr: y, size: [m, b], datatype: l === t._datatype && h === a._datatype ? g : void 0 });
  };
}), io = "matAlgo13xDD", oo = ["typed"], so = W(io, oo, (r) => {
  var { typed: e } = r;
  return function(t, a, o) {
    var v = t._data, c = t._size, f = t._datatype, s = a._data, l = a._size, d = a._datatype, D = [];
    if (c.length !== l.length) throw new pr(c.length, l.length);
    for (var p = 0; p < c.length; p++) {
      if (c[p] !== l[p]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + l + ")");
      D[p] = c[p];
    }
    var i, h = o;
    typeof f == "string" && f === d && (i = f, h = e.find(o, [i, i]));
    var m = D.length > 0 ? n(h, 0, D, D[0], v, s) : [];
    return t.createDenseMatrix({ data: m, size: D, datatype: i });
  };
  function n(u, t, a, o, v, c) {
    var f = [];
    if (t === a.length - 1) for (var s = 0; s < o; s++) f[s] = u(v[s], c[s]);
    else for (var l = 0; l < o; l++) f[l] = n(u, t + 1, a, a[t + 1], v[l], c[l]);
    return f;
  }
});
function Tr(r, e) {
  if (ve(r.size(), e.size())) return [r, e];
  var n = ou(r.size(), e.size());
  return [r, e].map((u) => fo(u, n));
}
function fo(r, e) {
  return ve(r.size(), e) ? r : r.create(yt(r.valueOf(), e), r.datatype());
}
var co = "matrixAlgorithmSuite", lo = ["typed", "matrix"], ge = W(co, lo, (r) => {
  var { typed: e, matrix: n } = r, u = so({ typed: e }), t = Mt({ typed: e });
  return function(o) {
    var v = o.elop, c = o.SD || o.DS, f;
    v ? (f = { "DenseMatrix, DenseMatrix": (D, p) => u(...Tr(D, p), v), "Array, Array": (D, p) => u(...Tr(n(D), n(p)), v).valueOf(), "Array, DenseMatrix": (D, p) => u(...Tr(n(D), p), v), "DenseMatrix, Array": (D, p) => u(...Tr(D, n(p)), v) }, o.SS && (f["SparseMatrix, SparseMatrix"] = (D, p) => o.SS(...Tr(D, p), v, false)), o.DS && (f["DenseMatrix, SparseMatrix"] = (D, p) => o.DS(...Tr(D, p), v, false), f["Array, SparseMatrix"] = (D, p) => o.DS(...Tr(n(D), p), v, false)), c && (f["SparseMatrix, DenseMatrix"] = (D, p) => c(...Tr(p, D), v, true), f["SparseMatrix, Array"] = (D, p) => c(...Tr(n(p), D), v, true))) : (f = { "DenseMatrix, DenseMatrix": e.referToSelf((D) => (p, i) => u(...Tr(p, i), D)), "Array, Array": e.referToSelf((D) => (p, i) => u(...Tr(n(p), n(i)), D).valueOf()), "Array, DenseMatrix": e.referToSelf((D) => (p, i) => u(...Tr(n(p), i), D)), "DenseMatrix, Array": e.referToSelf((D) => (p, i) => u(...Tr(p, n(i)), D)) }, o.SS && (f["SparseMatrix, SparseMatrix"] = e.referToSelf((D) => (p, i) => o.SS(...Tr(p, i), D, false))), o.DS && (f["DenseMatrix, SparseMatrix"] = e.referToSelf((D) => (p, i) => o.DS(...Tr(p, i), D, false)), f["Array, SparseMatrix"] = e.referToSelf((D) => (p, i) => o.DS(...Tr(n(p), i), D, false))), c && (f["SparseMatrix, DenseMatrix"] = e.referToSelf((D) => (p, i) => c(...Tr(i, p), D, true)), f["SparseMatrix, Array"] = e.referToSelf((D) => (p, i) => c(...Tr(n(i), p), D, true))));
    var s = o.scalar || "any", l = o.Ds || o.Ss;
    l && (v ? (f["DenseMatrix," + s] = (D, p) => t(D, p, v, false), f[s + ", DenseMatrix"] = (D, p) => t(p, D, v, true), f["Array," + s] = (D, p) => t(n(D), p, v, false).valueOf(), f[s + ", Array"] = (D, p) => t(n(p), D, v, true).valueOf()) : (f["DenseMatrix," + s] = e.referToSelf((D) => (p, i) => t(p, i, D, false)), f[s + ", DenseMatrix"] = e.referToSelf((D) => (p, i) => t(i, p, D, true)), f["Array," + s] = e.referToSelf((D) => (p, i) => t(n(p), i, D, false).valueOf()), f[s + ", Array"] = e.referToSelf((D) => (p, i) => t(n(i), p, D, true).valueOf())));
    var d = o.sS !== void 0 ? o.sS : o.Ss;
    return v ? (o.Ss && (f["SparseMatrix," + s] = (D, p) => o.Ss(D, p, v, false)), d && (f[s + ", SparseMatrix"] = (D, p) => d(p, D, v, true))) : (o.Ss && (f["SparseMatrix," + s] = e.referToSelf((D) => (p, i) => o.Ss(p, i, D, false))), d && (f[s + ", SparseMatrix"] = e.referToSelf((D) => (p, i) => d(i, p, D, true)))), v && v.signatures && Gn(f, v.signatures), f;
  };
}), vo = "matAlgo01xDSid", Do = ["typed"], gu = W(vo, Do, (r) => {
  var { typed: e } = r;
  return function(u, t, a, o) {
    var v = u._data, c = u._size, f = u._datatype || u.getDataType(), s = t._values, l = t._index, d = t._ptr, D = t._size, p = t._datatype || t._data === void 0 ? t._datatype : t.getDataType();
    if (c.length !== D.length) throw new pr(c.length, D.length);
    if (c[0] !== D[0] || c[1] !== D[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + D + ")");
    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var i = c[0], h = c[1], m = typeof f == "string" && f !== "mixed" && f === p ? f : void 0, b = m ? e.find(a, [m, m]) : a, g, w, A = [];
    for (g = 0; g < i; g++) A[g] = [];
    var F = [], C = [];
    for (w = 0; w < h; w++) {
      for (var E = w + 1, y = d[w], B = d[w + 1], _ = y; _ < B; _++) g = l[_], F[g] = o ? b(s[_], v[g][w]) : b(v[g][w], s[_]), C[g] = E;
      for (g = 0; g < i; g++) C[g] === E ? A[g][w] = F[g] : A[g][w] = v[g][w];
    }
    return u.createDenseMatrix({ data: A, size: [i, h], datatype: f === u._datatype && p === t._datatype ? m : void 0 });
  };
}), po = "matAlgo04xSidSid", ho = ["typed", "equalScalar"], mo = W(po, ho, (r) => {
  var { typed: e, equalScalar: n } = r;
  return function(t, a, o) {
    var v = t._values, c = t._index, f = t._ptr, s = t._size, l = t._datatype || t._data === void 0 ? t._datatype : t.getDataType(), d = a._values, D = a._index, p = a._ptr, i = a._size, h = a._datatype || a._data === void 0 ? a._datatype : a.getDataType();
    if (s.length !== i.length) throw new pr(s.length, i.length);
    if (s[0] !== i[0] || s[1] !== i[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + i + ")");
    var m = s[0], b = s[1], g, w = n, A = 0, F = o;
    typeof l == "string" && l === h && l !== "mixed" && (g = l, w = e.find(n, [g, g]), A = e.convert(0, g), F = e.find(o, [g, g]));
    var C = v && d ? [] : void 0, E = [], y = [], B = v && d ? [] : void 0, _ = v && d ? [] : void 0, x = [], O = [], N, U, z, Z, S;
    for (U = 0; U < b; U++) {
      y[U] = E.length;
      var M = U + 1;
      for (Z = f[U], S = f[U + 1], z = Z; z < S; z++) N = c[z], E.push(N), x[N] = M, B && (B[N] = v[z]);
      for (Z = p[U], S = p[U + 1], z = Z; z < S; z++) if (N = D[z], x[N] === M) {
        if (B) {
          var X = F(B[N], d[z]);
          w(X, A) ? x[N] = null : B[N] = X;
        }
      } else E.push(N), O[N] = M, _ && (_[N] = d[z]);
      if (B && _) for (z = y[U]; z < E.length; ) N = E[z], x[N] === M ? (C[z] = B[N], z++) : O[N] === M ? (C[z] = _[N], z++) : E.splice(z, 1);
    }
    return y[b] = E.length, t.createSparseMatrix({ values: C, index: E, ptr: y, size: [m, b], datatype: l === t._datatype && h === a._datatype ? g : void 0 });
  };
}), go = "matAlgo10xSids", yo = ["typed", "DenseMatrix"], yu = W(go, yo, (r) => {
  var { typed: e, DenseMatrix: n } = r;
  return function(t, a, o, v) {
    var c = t._values, f = t._index, s = t._ptr, l = t._size, d = t._datatype;
    if (!c) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var D = l[0], p = l[1], i, h = o;
    typeof d == "string" && (i = d, a = e.convert(a, i), h = e.find(o, [i, i]));
    for (var m = [], b = [], g = [], w = 0; w < p; w++) {
      for (var A = w + 1, F = s[w], C = s[w + 1], E = F; E < C; E++) {
        var y = f[E];
        b[y] = c[E], g[y] = A;
      }
      for (var B = 0; B < D; B++) w === 0 && (m[B] = []), g[B] === A ? m[B][w] = v ? h(a, b[B]) : h(b[B], a) : m[B][w] = a;
    }
    return new n({ data: m, size: [D, p], datatype: i });
  };
}), Ao = "multiplyScalar", Fo = ["typed"], Eo = W(Ao, Fo, (r) => {
  var { typed: e } = r;
  return e("multiplyScalar", { "number, number": Du, "Complex, Complex": function(u, t) {
    return u.mul(t);
  }, "BigNumber, BigNumber": function(u, t) {
    return u.times(t);
  }, "bigint, bigint": function(u, t) {
    return u * t;
  }, "Fraction, Fraction": function(u, t) {
    return u.mul(t);
  }, "number | Fraction | BigNumber | Complex, Unit": (n, u) => u.multiply(n), "Unit, number | Fraction | BigNumber | Complex | Unit": (n, u) => n.multiply(u) });
}), sn = "multiply", bo = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], wo = W(sn, bo, (r) => {
  var { typed: e, matrix: n, addScalar: u, multiplyScalar: t, equalScalar: a, dot: o } = r, v = mu({ typed: e, equalScalar: a }), c = Mt({ typed: e });
  function f(A, F) {
    switch (A.length) {
      case 1:
        switch (F.length) {
          case 1:
            if (A[0] !== F[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            break;
          case 2:
            if (A[0] !== F[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + A[0] + ") must match Matrix rows (" + F[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + F.length + " dimensions)");
        }
        break;
      case 2:
        switch (F.length) {
          case 1:
            if (A[1] !== F[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + A[1] + ") must match Vector length (" + F[0] + ")");
            break;
          case 2:
            if (A[1] !== F[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + A[1] + ") must match Matrix B rows (" + F[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + F.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + A.length + " dimensions)");
    }
  }
  function s(A, F, C) {
    if (C === 0) throw new Error("Cannot multiply two empty vectors");
    return o(A, F);
  }
  function l(A, F) {
    if (F.storage() !== "dense") throw new Error("Support for SparseMatrix not implemented");
    return d(A, F);
  }
  function d(A, F) {
    var C = A._data, E = A._size, y = A._datatype || A.getDataType(), B = F._data, _ = F._size, x = F._datatype || F.getDataType(), O = E[0], N = _[1], U, z = u, Z = t;
    y && x && y === x && typeof y == "string" && y !== "mixed" && (U = y, z = e.find(u, [U, U]), Z = e.find(t, [U, U]));
    for (var S = [], M = 0; M < N; M++) {
      for (var X = Z(C[0], B[0][M]), Q = 1; Q < O; Q++) X = z(X, Z(C[Q], B[Q][M]));
      S[M] = X;
    }
    return A.createDenseMatrix({ data: S, size: [N], datatype: y === A._datatype && x === F._datatype ? U : void 0 });
  }
  var D = e("_multiplyMatrixVector", { "DenseMatrix, any": i, "SparseMatrix, any": b }), p = e("_multiplyMatrixMatrix", { "DenseMatrix, DenseMatrix": h, "DenseMatrix, SparseMatrix": m, "SparseMatrix, DenseMatrix": g, "SparseMatrix, SparseMatrix": w });
  function i(A, F) {
    var C = A._data, E = A._size, y = A._datatype || A.getDataType(), B = F._data, _ = F._datatype || F.getDataType(), x = E[0], O = E[1], N, U = u, z = t;
    y && _ && y === _ && typeof y == "string" && y !== "mixed" && (N = y, U = e.find(u, [N, N]), z = e.find(t, [N, N]));
    for (var Z = [], S = 0; S < x; S++) {
      for (var M = C[S], X = z(M[0], B[0]), Q = 1; Q < O; Q++) X = U(X, z(M[Q], B[Q]));
      Z[S] = X;
    }
    return A.createDenseMatrix({ data: Z, size: [x], datatype: y === A._datatype && _ === F._datatype ? N : void 0 });
  }
  function h(A, F) {
    var C = A._data, E = A._size, y = A._datatype || A.getDataType(), B = F._data, _ = F._size, x = F._datatype || F.getDataType(), O = E[0], N = E[1], U = _[1], z, Z = u, S = t;
    y && x && y === x && typeof y == "string" && y !== "mixed" && y !== "mixed" && (z = y, Z = e.find(u, [z, z]), S = e.find(t, [z, z]));
    for (var M = [], X = 0; X < O; X++) {
      var Q = C[X];
      M[X] = [];
      for (var T = 0; T < U; T++) {
        for (var $ = S(Q[0], B[0][T]), q = 1; q < N; q++) $ = Z($, S(Q[q], B[q][T]));
        M[X][T] = $;
      }
    }
    return A.createDenseMatrix({ data: M, size: [O, U], datatype: y === A._datatype && x === F._datatype ? z : void 0 });
  }
  function m(A, F) {
    var C = A._data, E = A._size, y = A._datatype || A.getDataType(), B = F._values, _ = F._index, x = F._ptr, O = F._size, N = F._datatype || F._data === void 0 ? F._datatype : F.getDataType();
    if (!B) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var U = E[0], z = O[1], Z, S = u, M = t, X = a, Q = 0;
    y && N && y === N && typeof y == "string" && y !== "mixed" && (Z = y, S = e.find(u, [Z, Z]), M = e.find(t, [Z, Z]), X = e.find(a, [Z, Z]), Q = e.convert(0, Z));
    for (var T = [], $ = [], q = [], P = F.createSparseMatrix({ values: T, index: $, ptr: q, size: [U, z], datatype: y === A._datatype && N === F._datatype ? Z : void 0 }), Y = 0; Y < z; Y++) {
      q[Y] = $.length;
      var I = x[Y], L = x[Y + 1];
      if (L > I) for (var R = 0, J = 0; J < U; J++) {
        for (var K = J + 1, V = void 0, H = I; H < L; H++) {
          var tr = _[H];
          R !== K ? (V = M(C[J][tr], B[H]), R = K) : V = S(V, M(C[J][tr], B[H]));
        }
        R === K && !X(V, Q) && ($.push(J), T.push(V));
      }
    }
    return q[z] = $.length, P;
  }
  function b(A, F) {
    var C = A._values, E = A._index, y = A._ptr, B = A._datatype || A._data === void 0 ? A._datatype : A.getDataType();
    if (!C) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var _ = F._data, x = F._datatype || F.getDataType(), O = A._size[0], N = F._size[0], U = [], z = [], Z = [], S, M = u, X = t, Q = a, T = 0;
    B && x && B === x && typeof B == "string" && B !== "mixed" && (S = B, M = e.find(u, [S, S]), X = e.find(t, [S, S]), Q = e.find(a, [S, S]), T = e.convert(0, S));
    var $ = [], q = [];
    Z[0] = 0;
    for (var P = 0; P < N; P++) {
      var Y = _[P];
      if (!Q(Y, T)) for (var I = y[P], L = y[P + 1], R = I; R < L; R++) {
        var J = E[R];
        q[J] ? $[J] = M($[J], X(Y, C[R])) : (q[J] = true, z.push(J), $[J] = X(Y, C[R]));
      }
    }
    for (var K = z.length, V = 0; V < K; V++) {
      var H = z[V];
      U[V] = $[H];
    }
    return Z[1] = z.length, A.createSparseMatrix({ values: U, index: z, ptr: Z, size: [O, 1], datatype: B === A._datatype && x === F._datatype ? S : void 0 });
  }
  function g(A, F) {
    var C = A._values, E = A._index, y = A._ptr, B = A._datatype || A._data === void 0 ? A._datatype : A.getDataType();
    if (!C) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var _ = F._data, x = F._datatype || F.getDataType(), O = A._size[0], N = F._size[0], U = F._size[1], z, Z = u, S = t, M = a, X = 0;
    B && x && B === x && typeof B == "string" && B !== "mixed" && (z = B, Z = e.find(u, [z, z]), S = e.find(t, [z, z]), M = e.find(a, [z, z]), X = e.convert(0, z));
    for (var Q = [], T = [], $ = [], q = A.createSparseMatrix({ values: Q, index: T, ptr: $, size: [O, U], datatype: B === A._datatype && x === F._datatype ? z : void 0 }), P = [], Y = [], I = 0; I < U; I++) {
      $[I] = T.length;
      for (var L = I + 1, R = 0; R < N; R++) {
        var J = _[R][I];
        if (!M(J, X)) for (var K = y[R], V = y[R + 1], H = K; H < V; H++) {
          var tr = E[H];
          Y[tr] !== L ? (Y[tr] = L, T.push(tr), P[tr] = S(J, C[H])) : P[tr] = Z(P[tr], S(J, C[H]));
        }
      }
      for (var k = $[I], nr = T.length, or = k; or < nr; or++) {
        var sr = T[or];
        Q[or] = P[sr];
      }
    }
    return $[U] = T.length, q;
  }
  function w(A, F) {
    var C = A._values, E = A._index, y = A._ptr, B = A._datatype || A._data === void 0 ? A._datatype : A.getDataType(), _ = F._values, x = F._index, O = F._ptr, N = F._datatype || F._data === void 0 ? F._datatype : F.getDataType(), U = A._size[0], z = F._size[1], Z = C && _, S, M = u, X = t;
    B && N && B === N && typeof B == "string" && B !== "mixed" && (S = B, M = e.find(u, [S, S]), X = e.find(t, [S, S]));
    for (var Q = Z ? [] : void 0, T = [], $ = [], q = A.createSparseMatrix({ values: Q, index: T, ptr: $, size: [U, z], datatype: B === A._datatype && N === F._datatype ? S : void 0 }), P = Z ? [] : void 0, Y = [], I, L, R, J, K, V, H, tr, k = 0; k < z; k++) {
      $[k] = T.length;
      var nr = k + 1;
      for (K = O[k], V = O[k + 1], J = K; J < V; J++) if (tr = x[J], Z) for (L = y[tr], R = y[tr + 1], I = L; I < R; I++) H = E[I], Y[H] !== nr ? (Y[H] = nr, T.push(H), P[H] = X(_[J], C[I])) : P[H] = M(P[H], X(_[J], C[I]));
      else for (L = y[tr], R = y[tr + 1], I = L; I < R; I++) H = E[I], Y[H] !== nr && (Y[H] = nr, T.push(H));
      if (Z) for (var or = $[k], sr = T.length, hr = or; hr < sr; hr++) {
        var cr = T[hr];
        Q[hr] = P[cr];
      }
    }
    return $[z] = T.length, q;
  }
  return e(sn, t, { "Array, Array": e.referTo("Matrix, Matrix", (A) => (F, C) => {
    f(lr(F), lr(C));
    var E = A(n(F), n(C));
    return dr(E) ? E.valueOf() : E;
  }), "Matrix, Matrix": function(F, C) {
    var E = F.size(), y = C.size();
    return f(E, y), E.length === 1 ? y.length === 1 ? s(F, C, E[0]) : l(F, C) : y.length === 1 ? D(F, C) : p(F, C);
  }, "Matrix, Array": e.referTo("Matrix,Matrix", (A) => (F, C) => A(F, n(C))), "Array, Matrix": e.referToSelf((A) => (F, C) => A(n(F, C.storage()), C)), "SparseMatrix, any": function(F, C) {
    return v(F, C, t, false);
  }, "DenseMatrix, any": function(F, C) {
    return c(F, C, t, false);
  }, "any, SparseMatrix": function(F, C) {
    return v(C, F, t, true);
  }, "any, DenseMatrix": function(F, C) {
    return c(C, F, t, true);
  }, "Array, any": function(F, C) {
    return c(n(F), C, t, false).valueOf();
  }, "any, Array": function(F, C) {
    return c(n(C), F, t, true).valueOf();
  }, "any, any": t, "any, any, ...any": e.referToSelf((A) => (F, C, E) => {
    for (var y = A(F, C), B = 0; B < E.length; B++) y = A(y, E[B]);
    return y;
  }) });
}), fn = "sign", Co = ["typed", "BigNumber", "Fraction", "complex"], _o = W(fn, Co, (r) => {
  var { typed: e, BigNumber: n, complex: u, Fraction: t } = r;
  return e(fn, { number: At, Complex: function(o) {
    return o.im === 0 ? u(At(o.re)) : o.sign();
  }, BigNumber: function(o) {
    return new n(o.cmp(0));
  }, bigint: function(o) {
    return o > 0n ? 1n : o < 0n ? -1n : 0n;
  }, Fraction: function(o) {
    return new t(o.s);
  }, "Array | Matrix": e.referToSelf((a) => (o) => Xr(o, a, true)), Unit: e.referToSelf((a) => (o) => {
    if (!o._isDerived() && o.units[0].unit.offset !== 0) throw new TypeError("sign is ambiguous for units with offset");
    return e.find(a, o.valueType())(o.value);
  }) });
}), Bo = "sqrt", xo = ["config", "typed", "Complex"], Mo = W(Bo, xo, (r) => {
  var { config: e, typed: n, Complex: u } = r;
  return n("sqrt", { number: t, Complex: function(o) {
    return o.sqrt();
  }, BigNumber: function(o) {
    return !o.isNegative() || e.predictable ? o.sqrt() : t(o.toNumber());
  }, Unit: function(o) {
    return o.pow(0.5);
  } });
  function t(a) {
    return isNaN(a) ? NaN : a >= 0 || e.predictable ? Math.sqrt(a) : new u(a, 0).sqrt();
  }
}), cn = "subtract", So = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], No = W(cn, So, (r) => {
  var { typed: e, matrix: n, equalScalar: u, subtractScalar: t, unaryMinus: a, DenseMatrix: o, concat: v } = r, c = gu({ typed: e }), f = xe({ typed: e }), s = ao({ typed: e, equalScalar: u }), l = yu({ typed: e, DenseMatrix: o }), d = Be({ typed: e, DenseMatrix: o }), D = ge({ typed: e, matrix: n, concat: v });
  return e(cn, { "any, any": t }, D({ elop: t, SS: s, DS: c, SD: f, Ss: d, sS: l }));
}), To = "matAlgo07xSSf", zo = ["typed", "SparseMatrix"], Ie = W(To, zo, (r) => {
  var { typed: e, SparseMatrix: n } = r;
  return function(a, o, v) {
    var c = a._size, f = a._datatype || a._data === void 0 ? a._datatype : a.getDataType(), s = o._size, l = o._datatype || o._data === void 0 ? o._datatype : o.getDataType();
    if (c.length !== s.length) throw new pr(c.length, s.length);
    if (c[0] !== s[0] || c[1] !== s[1]) throw new RangeError("Dimension mismatch. Matrix A (" + c + ") must match Matrix B (" + s + ")");
    var d = c[0], D = c[1], p, i = 0, h = v;
    typeof f == "string" && f === l && f !== "mixed" && (p = f, i = e.convert(0, p), h = e.find(v, [p, p]));
    for (var m = [], b = [], g = new Array(D + 1).fill(0), w = [], A = [], F = [], C = [], E = 0; E < D; E++) {
      var y = E + 1, B = 0;
      u(a, E, F, w, y), u(o, E, C, A, y);
      for (var _ = 0; _ < d; _++) {
        var x = F[_] === y ? w[_] : i, O = C[_] === y ? A[_] : i, N = h(x, O);
        N !== 0 && N !== false && (b.push(_), m.push(N), B++);
      }
      g[E + 1] = g[E] + B;
    }
    return new n({ values: m, index: b, ptr: g, size: [d, D], datatype: f === a._datatype && l === o._datatype ? p : void 0 });
  };
  function u(t, a, o, v, c) {
    for (var f = t._values, s = t._index, l = t._ptr, d = l[a], D = l[a + 1]; d < D; d++) {
      var p = s[d];
      o[p] = c, v[p] = f[d];
    }
  }
}), ln = "conj", Oo = ["typed"], $o = W(ln, Oo, (r) => {
  var { typed: e } = r;
  return e(ln, { "number | BigNumber | Fraction": (n) => n, Complex: (n) => n.conjugate(), "Array | Matrix": e.referToSelf((n) => (u) => Xr(u, n)) });
}), vn = "im", Io = ["typed"], qo = W(vn, Io, (r) => {
  var { typed: e } = r;
  return e(vn, { number: () => 0, "BigNumber | Fraction": (n) => n.mul(0), Complex: (n) => n.im, "Array | Matrix": e.referToSelf((n) => (u) => Xr(u, n)) });
}), Dn = "re", Ro = ["typed"], Uo = W(Dn, Ro, (r) => {
  var { typed: e } = r;
  return e(Dn, { "number | BigNumber | Fraction": (n) => n, Complex: (n) => n.re, "Array | Matrix": e.referToSelf((n) => (u) => Xr(u, n)) });
}), pn = "concat", Po = ["typed", "matrix", "isInteger"], Xo = W(pn, Po, (r) => {
  var { typed: e, matrix: n, isInteger: u } = r;
  return e(pn, { "...Array | Matrix | number | BigNumber": function(a) {
    var o, v = a.length, c = -1, f, s = false, l = [];
    for (o = 0; o < v; o++) {
      var d = a[o];
      if (dr(d) && (s = true), yr(d) || _r(d)) {
        if (o !== v - 1) throw new Error("Dimension must be specified as last argument");
        if (f = c, c = d.valueOf(), !u(c)) throw new TypeError("Integer number expected for dimension");
        if (c < 0 || o > 0 && c > f) throw new De(c, f + 1);
      } else {
        var D = Dr(d).valueOf(), p = lr(D);
        if (l[o] = D, f = c, c = p.length - 1, o > 0 && c !== f) throw new pr(f + 1, c + 1);
      }
    }
    if (l.length === 0) throw new SyntaxError("At least one matrix expected");
    for (var i = l.shift(); l.length; ) i = iu(i, l.shift(), c);
    return s ? n(i) : i;
  }, "...string": function(a) {
    return a.join("");
  } });
}), dn = "column", Yo = ["typed", "Index", "matrix", "range"], Lo = W(dn, Yo, (r) => {
  var { typed: e, Index: n, matrix: u, range: t } = r;
  return e(dn, { "Matrix, number": a, "Array, number": function(v, c) {
    return a(u(Dr(v)), c).valueOf();
  } });
  function a(o, v) {
    if (o.size().length !== 2) throw new Error("Only two dimensional matrix is supported");
    Cr(v, o.size()[1]);
    var c = t(0, o.size()[0]), f = new n(c, v), s = o.subset(f);
    return dr(s) ? s : u([[s]]);
  }
}), hn = "cross", Qo = ["typed", "matrix", "subtract", "multiply"], Vo = W(hn, Qo, (r) => {
  var { typed: e, matrix: n, subtract: u, multiply: t } = r;
  return e(hn, { "Matrix, Matrix": function(v, c) {
    return n(a(v.toArray(), c.toArray()));
  }, "Matrix, Array": function(v, c) {
    return n(a(v.toArray(), c));
  }, "Array, Matrix": function(v, c) {
    return n(a(v, c.toArray()));
  }, "Array, Array": a });
  function a(o, v) {
    var c = Math.max(lr(o).length, lr(v).length);
    o = Gt(o), v = Gt(v);
    var f = lr(o), s = lr(v);
    if (f.length !== 1 || s.length !== 1 || f[0] !== 3 || s[0] !== 3) throw new RangeError("Vectors with length 3 expected (Size A = [" + f.join(", ") + "], B = [" + s.join(", ") + "])");
    var l = [u(t(o[1], v[2]), t(o[2], v[1])), u(t(o[2], v[0]), t(o[0], v[2])), u(t(o[0], v[1]), t(o[1], v[0]))];
    return c > 1 ? [l] : l;
  }
}), mn = "diag", Zo = ["typed", "matrix", "DenseMatrix", "SparseMatrix"], Jo = W(mn, Zo, (r) => {
  var { typed: e, matrix: n, DenseMatrix: u, SparseMatrix: t } = r;
  return e(mn, { Array: function(f) {
    return a(f, 0, lr(f), null);
  }, "Array, number": function(f, s) {
    return a(f, s, lr(f), null);
  }, "Array, BigNumber": function(f, s) {
    return a(f, s.toNumber(), lr(f), null);
  }, "Array, string": function(f, s) {
    return a(f, 0, lr(f), s);
  }, "Array, number, string": function(f, s, l) {
    return a(f, s, lr(f), l);
  }, "Array, BigNumber, string": function(f, s, l) {
    return a(f, s.toNumber(), lr(f), l);
  }, Matrix: function(f) {
    return a(f, 0, f.size(), f.storage());
  }, "Matrix, number": function(f, s) {
    return a(f, s, f.size(), f.storage());
  }, "Matrix, BigNumber": function(f, s) {
    return a(f, s.toNumber(), f.size(), f.storage());
  }, "Matrix, string": function(f, s) {
    return a(f, 0, f.size(), s);
  }, "Matrix, number, string": function(f, s, l) {
    return a(f, s, f.size(), l);
  }, "Matrix, BigNumber, string": function(f, s, l) {
    return a(f, s.toNumber(), f.size(), l);
  } });
  function a(c, f, s, l) {
    if (!Ar(f)) throw new TypeError("Second parameter in function diag must be an integer");
    var d = f > 0 ? f : 0, D = f < 0 ? -f : 0;
    switch (s.length) {
      case 1:
        return o(c, f, l, s[0], D, d);
      case 2:
        return v(c, f, l, s, D, d);
    }
    throw new RangeError("Matrix for function diag must be 2 dimensional");
  }
  function o(c, f, s, l, d, D) {
    var p = [l + d, l + D];
    if (s && s !== "sparse" && s !== "dense") throw new TypeError("Unknown matrix type ".concat(s, '"'));
    var i = s === "sparse" ? t.diagonal(p, c, f) : u.diagonal(p, c, f);
    return s !== null ? i : i.valueOf();
  }
  function v(c, f, s, l, d, D) {
    if (dr(c)) {
      var p = c.diagonal(f);
      return s !== null ? s !== p.storage() ? n(p, s) : p : p.valueOf();
    }
    for (var i = Math.min(l[0] - d, l[1] - D), h = [], m = 0; m < i; m++) h[m] = c[m + d][m + D];
    return s !== null ? n(h) : h;
  }
}), gn = "flatten", Wo = ["typed"], Go = W(gn, Wo, (r) => {
  var { typed: e } = r;
  return e(gn, { Array: function(u) {
    return gt(u);
  }, Matrix: function(u) {
    return u.create(gt(u.valueOf(), true), u.datatype());
  } });
}), yn = "getMatrixDataType", Ko = ["typed"], Ho = W(yn, Ko, (r) => {
  var { typed: e } = r;
  return e(yn, { Array: function(u) {
    return at(u, Pr);
  }, Matrix: function(u) {
    return u.getDataType();
  } });
}), An = "identity", ko = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], jo = W(An, ko, (r) => {
  var { typed: e, config: n, matrix: u, BigNumber: t, DenseMatrix: a, SparseMatrix: o } = r;
  return e(An, { "": function() {
    return n.matrix === "Matrix" ? u([]) : [];
  }, string: function(s) {
    return u(s);
  }, "number | BigNumber": function(s) {
    return c(s, s, n.matrix === "Matrix" ? "dense" : void 0);
  }, "number | BigNumber, string": function(s, l) {
    return c(s, s, l);
  }, "number | BigNumber, number | BigNumber": function(s, l) {
    return c(s, l, n.matrix === "Matrix" ? "dense" : void 0);
  }, "number | BigNumber, number | BigNumber, string": function(s, l, d) {
    return c(s, l, d);
  }, Array: function(s) {
    return v(s);
  }, "Array, string": function(s, l) {
    return v(s, l);
  }, Matrix: function(s) {
    return v(s.valueOf(), s.storage());
  }, "Matrix, string": function(s, l) {
    return v(s.valueOf(), l);
  } });
  function v(f, s) {
    switch (f.length) {
      case 0:
        return s ? u(s) : [];
      case 1:
        return c(f[0], f[0], s);
      case 2:
        return c(f[0], f[1], s);
      default:
        throw new Error("Vector containing two values expected");
    }
  }
  function c(f, s, l) {
    var d = _r(f) || _r(s) ? t : null;
    if (_r(f) && (f = f.toNumber()), _r(s) && (s = s.toNumber()), !Ar(f) || f < 1) throw new Error("Parameters in function identity must be positive integers");
    if (!Ar(s) || s < 1) throw new Error("Parameters in function identity must be positive integers");
    var D = d ? new t(1) : 1, p = d ? new d(0) : 0, i = [f, s];
    if (l) {
      if (l === "sparse") return o.diagonal(i, D, 0, p);
      if (l === "dense") return a.diagonal(i, D, 0, p);
      throw new TypeError('Unknown matrix type "'.concat(l, '"'));
    }
    for (var h = Je([], i, p), m = f < s ? f : s, b = 0; b < m; b++) h[b][b] = D;
    return h;
  }
}), Fn = "kron", rs = ["typed", "matrix", "multiplyScalar"], es = W(Fn, rs, (r) => {
  var { typed: e, matrix: n, multiplyScalar: u } = r;
  return e(Fn, { "Matrix, Matrix": function(o, v) {
    return n(t(o.toArray(), v.toArray()));
  }, "Matrix, Array": function(o, v) {
    return n(t(o.toArray(), v));
  }, "Array, Matrix": function(o, v) {
    return n(t(o, v.toArray()));
  }, "Array, Array": t });
  function t(a, o) {
    if (lr(a).length === 1 && (a = [a]), lr(o).length === 1 && (o = [o]), lr(a).length > 2 || lr(o).length > 2) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(a.length) + ", y = " + JSON.stringify(o.length) + ")");
    var v = [], c = [];
    return a.map(function(f) {
      return o.map(function(s) {
        return c = [], v.push(c), f.map(function(l) {
          return s.map(function(d) {
            return c.push(u(l, d));
          });
        });
      });
    }) && v;
  }
});
function Au() {
  throw new Error('No "bignumber" implementation available');
}
function ts() {
  throw new Error('No "fraction" implementation available');
}
function Fu() {
  throw new Error('No "matrix" implementation available');
}
var En = "range", ns = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], us = W(En, ns, (r) => {
  var { typed: e, config: n, matrix: u, bignumber: t, smaller: a, smallerEq: o, larger: v, largerEq: c, add: f, isPositive: s } = r;
  return e(En, { string: d, "string, boolean": d, number: function(h) {
    throw new TypeError("Too few arguments to function range(): ".concat(h));
  }, boolean: function(h) {
    throw new TypeError("Unexpected type of argument 1 to function range(): ".concat(h, ", number|bigint|BigNumber|Fraction"));
  }, "number, number": function(h, m) {
    return l(D(h, m, 1, false));
  }, "number, number, number": function(h, m, b) {
    return l(D(h, m, b, false));
  }, "number, number, boolean": function(h, m, b) {
    return l(D(h, m, 1, b));
  }, "number, number, number, boolean": function(h, m, b, g) {
    return l(D(h, m, b, g));
  }, "bigint, bigint|number": function(h, m) {
    return l(D(h, m, 1n, false));
  }, "number, bigint": function(h, m) {
    return l(D(BigInt(h), m, 1n, false));
  }, "bigint, bigint|number, bigint|number": function(h, m, b) {
    return l(D(h, m, BigInt(b), false));
  }, "number, bigint, bigint|number": function(h, m, b) {
    return l(D(BigInt(h), m, BigInt(b), false));
  }, "bigint, bigint|number, boolean": function(h, m, b) {
    return l(D(h, m, 1n, b));
  }, "number, bigint, boolean": function(h, m, b) {
    return l(D(BigInt(h), m, 1n, b));
  }, "bigint, bigint|number, bigint|number, boolean": function(h, m, b, g) {
    return l(D(h, m, BigInt(b), g));
  }, "number, bigint, bigint|number, boolean": function(h, m, b, g) {
    return l(D(BigInt(h), m, BigInt(b), g));
  }, "BigNumber, BigNumber": function(h, m) {
    var b = h.constructor;
    return l(D(h, m, new b(1), false));
  }, "BigNumber, BigNumber, BigNumber": function(h, m, b) {
    return l(D(h, m, b, false));
  }, "BigNumber, BigNumber, boolean": function(h, m, b) {
    var g = h.constructor;
    return l(D(h, m, new g(1), b));
  }, "BigNumber, BigNumber, BigNumber, boolean": function(h, m, b, g) {
    return l(D(h, m, b, g));
  }, "Fraction, Fraction": function(h, m) {
    return l(D(h, m, 1, false));
  }, "Fraction, Fraction, Fraction": function(h, m, b) {
    return l(D(h, m, b, false));
  }, "Fraction, Fraction, boolean": function(h, m, b) {
    return l(D(h, m, 1, b));
  }, "Fraction, Fraction, Fraction, boolean": function(h, m, b, g) {
    return l(D(h, m, b, g));
  }, "Unit, Unit, Unit": function(h, m, b) {
    return l(D(h, m, b, false));
  }, "Unit, Unit, Unit, boolean": function(h, m, b, g) {
    return l(D(h, m, b, g));
  } });
  function l(i) {
    return n.matrix === "Matrix" ? u ? u(i) : Fu() : i;
  }
  function d(i, h) {
    var m = p(i);
    if (!m) throw new SyntaxError('String "' + i + '" is no valid range');
    return n.number === "BigNumber" ? (t === void 0 && Au(), l(D(t(m.start), t(m.end), t(m.step)))) : l(D(m.start, m.end, m.step, h));
  }
  function D(i, h, m, b) {
    for (var g = [], w = s(m) ? b ? o : a : b ? c : v, A = i; w(A, h); ) g.push(A), A = f(A, m);
    return g;
  }
  function p(i) {
    var h = i.split(":"), m = h.map(function(g) {
      return Number(g);
    }), b = m.some(function(g) {
      return isNaN(g);
    });
    if (b) return null;
    switch (m.length) {
      case 2:
        return { start: m[0], end: m[1], step: 1 };
      case 3:
        return { start: m[0], end: m[2], step: m[1] };
      default:
        return null;
    }
  }
}), bn = "reshape", as = ["typed", "isInteger", "matrix"], is = W(bn, as, (r) => {
  var { typed: e, isInteger: n } = r;
  return e(bn, { "Matrix, Array": function(t, a) {
    return t.reshape(a, true);
  }, "Array, Array": function(t, a) {
    return a.forEach(function(o) {
      if (!n(o)) throw new TypeError("Invalid size for dimension: " + o);
    }), _t(t, a);
  } });
}), wn = "size", os = ["typed", "config", "?matrix"], ss = W(wn, os, (r) => {
  var { typed: e, config: n, matrix: u } = r;
  return e(wn, { Matrix: function(a) {
    return a.create(a.size(), "number");
  }, Array: lr, string: function(a) {
    return n.matrix === "Array" ? [a.length] : u([a.length], "dense", "number");
  }, "number | Complex | BigNumber | Unit | boolean | null": function(a) {
    return n.matrix === "Array" ? [] : u ? u([], "dense", "number") : Fu();
  } });
}), Cn = "transpose", fs = ["typed", "matrix"], cs = W(Cn, fs, (r) => {
  var { typed: e, matrix: n } = r;
  return e(Cn, { Array: (o) => u(n(o)).valueOf(), Matrix: u, any: Dr });
  function u(o) {
    var v = o.size(), c;
    switch (v.length) {
      case 1:
        c = o.clone();
        break;
      case 2:
        {
          var f = v[0], s = v[1];
          if (s === 0) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Er(v) + ")");
          switch (o.storage()) {
            case "dense":
              c = t(o, f, s);
              break;
            case "sparse":
              c = a(o, f, s);
              break;
          }
        }
        break;
      default:
        throw new RangeError("Matrix must be a vector or two dimensional (size: " + Er(v) + ")");
    }
    return c;
  }
  function t(o, v, c) {
    for (var f = o._data, s = [], l, d = 0; d < c; d++) {
      l = s[d] = [];
      for (var D = 0; D < v; D++) l[D] = Dr(f[D][d]);
    }
    return o.createDenseMatrix({ data: s, size: [c, v], datatype: o._datatype });
  }
  function a(o, v, c) {
    for (var f = o._values, s = o._index, l = o._ptr, d = f ? [] : void 0, D = [], p = [], i = [], h = 0; h < v; h++) i[h] = 0;
    var m, b, g;
    for (m = 0, b = s.length; m < b; m++) i[s[m]]++;
    for (var w = 0, A = 0; A < v; A++) p.push(w), w += i[A], i[A] = p[A];
    for (p.push(w), g = 0; g < c; g++) for (var F = l[g], C = l[g + 1], E = F; E < C; E++) {
      var y = i[s[E]]++;
      D[y] = g, f && (d[y] = Dr(f[E]));
    }
    return o.createSparseMatrix({ values: d, index: D, ptr: p, size: [c, v], datatype: o._datatype });
  }
}), _n = "ctranspose", ls = ["typed", "transpose", "conj"], vs = W(_n, ls, (r) => {
  var { typed: e, transpose: n, conj: u } = r;
  return e(_n, { any: function(a) {
    return u(n(a));
  } });
}), Bn = "zeros", Ds = ["typed", "config", "matrix", "BigNumber"], ps = W(Bn, Ds, (r) => {
  var { typed: e, config: n, matrix: u, BigNumber: t } = r;
  return e(Bn, { "": function() {
    return n.matrix === "Array" ? a([]) : a([], "default");
  }, "...number | BigNumber | string": function(f) {
    var s = f[f.length - 1];
    if (typeof s == "string") {
      var l = f.pop();
      return a(f, l);
    } else return n.matrix === "Array" ? a(f) : a(f, "default");
  }, Array: a, Matrix: function(f) {
    var s = f.storage();
    return a(f.valueOf(), s);
  }, "Array | Matrix, string": function(f, s) {
    return a(f.valueOf(), s);
  } });
  function a(c, f) {
    var s = o(c), l = s ? new t(0) : 0;
    if (v(c), f) {
      var d = u(f);
      return c.length > 0 ? d.resize(c, l) : d;
    } else {
      var D = [];
      return c.length > 0 ? Je(D, c, l) : D;
    }
  }
  function o(c) {
    var f = false;
    return c.forEach(function(s, l, d) {
      _r(s) && (f = true, d[l] = s.toNumber());
    }), f;
  }
  function v(c) {
    c.forEach(function(f) {
      if (typeof f != "number" || !Ar(f) || f < 0) throw new Error("Parameters in function zeros must be positive integers");
    });
  }
});
function xn(r, e, n) {
  var u;
  return String(r).includes("Unexpected type") ? (u = arguments.length > 2 ? " (type: " + Pr(n) + ", value: " + JSON.stringify(n) + ")" : " (type: " + r.data.actual + ")", new TypeError("Cannot calculate " + e + ", unexpected type of argument" + u)) : String(r).includes("complex numbers") ? (u = arguments.length > 2 ? " (type: " + Pr(n) + ", value: " + JSON.stringify(n) + ")" : "", new TypeError("Cannot calculate " + e + ", no ordering relation is defined for complex numbers" + u)) : r;
}
var ds = "numeric", hs = ["number", "?bignumber", "?fraction"], ms = W(ds, hs, (r) => {
  var { number: e, bignumber: n, fraction: u } = r, t = { string: true, number: true, BigNumber: true, Fraction: true }, a = { number: (o) => e(o), BigNumber: n ? (o) => n(o) : Au, bigint: (o) => BigInt(o), Fraction: u ? (o) => u(o) : ts };
  return function(v) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number", f = arguments.length > 2 ? arguments[2] : void 0;
    if (f !== void 0) throw new SyntaxError("numeric() takes one or two arguments");
    var s = Pr(v);
    if (!(s in t)) throw new TypeError("Cannot convert " + v + ' of type "' + s + '"; valid input types are ' + Object.keys(t).join(", "));
    if (!(c in a)) throw new TypeError("Cannot convert " + v + ' to type "' + c + '"; valid output types are ' + Object.keys(a).join(", "));
    return c === s ? v : a[c](v);
  };
}), Mn = "divideScalar", gs = ["typed", "numeric"], ys = W(Mn, gs, (r) => {
  var { typed: e, numeric: n } = r;
  return e(Mn, { "number, number": function(t, a) {
    return t / a;
  }, "Complex, Complex": function(t, a) {
    return t.div(a);
  }, "BigNumber, BigNumber": function(t, a) {
    return t.div(a);
  }, "bigint, bigint": function(t, a) {
    return t / a;
  }, "Fraction, Fraction": function(t, a) {
    return t.div(a);
  }, "Unit, number | Complex | Fraction | BigNumber | Unit": (u, t) => u.divide(t), "number | Fraction | Complex | BigNumber, Unit": (u, t) => t.divideInto(u) });
}), Sn = "pow", As = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], Fs = W(Sn, As, (r) => {
  var { typed: e, config: n, identity: u, multiply: t, matrix: a, inv: o, number: v, fraction: c, Complex: f } = r;
  return e(Sn, { "number, number": s, "Complex, Complex": function(p, i) {
    return p.pow(i);
  }, "BigNumber, BigNumber": function(p, i) {
    return i.isInteger() || p >= 0 || n.predictable ? p.pow(i) : new f(p.toNumber(), 0).pow(i.toNumber(), 0);
  }, "bigint, bigint": (D, p) => D ** p, "Fraction, Fraction": function(p, i) {
    var h = p.pow(i);
    if (h != null) return h;
    if (n.predictable) throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");
    return s(p.valueOf(), i.valueOf());
  }, "Array, number": l, "Array, BigNumber": function(p, i) {
    return l(p, i.toNumber());
  }, "Matrix, number": d, "Matrix, BigNumber": function(p, i) {
    return d(p, i.toNumber());
  }, "Unit, number | BigNumber": function(p, i) {
    return p.pow(i);
  } });
  function s(D, p) {
    if (n.predictable && !Ar(p) && D < 0) try {
      var i = c(p), h = v(i);
      if ((p === h || Math.abs((p - h) / p) < 1e-14) && i.d % 2n === 1n) return (i.n % 2n === 0n ? 1 : -1) * Math.pow(-D, p);
    } catch {
    }
    return n.predictable && (D < -1 && p === 1 / 0 || D > -1 && D < 0 && p === -1 / 0) ? NaN : Ar(p) || D >= 0 || n.predictable ? du(D, p) : D * D < 1 && p === 1 / 0 || D * D > 1 && p === -1 / 0 ? 0 : new f(D, 0).pow(p, 0);
  }
  function l(D, p) {
    if (!Ar(p)) throw new TypeError("For A^b, b must be an integer (value is " + p + ")");
    var i = lr(D);
    if (i.length !== 2) throw new Error("For A^b, A must be 2 dimensional (A has " + i.length + " dimensions)");
    if (i[0] !== i[1]) throw new Error("For A^b, A must be square (size is " + i[0] + "x" + i[1] + ")");
    if (p < 0) try {
      return l(o(D), -p);
    } catch (b) {
      throw b.message === "Cannot calculate inverse, determinant is zero" ? new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + p + ")") : b;
    }
    for (var h = u(i[0]).valueOf(), m = D; p >= 1; ) (p & 1) === 1 && (h = t(m, h)), p >>= 1, m = t(m, m);
    return h;
  }
  function d(D, p) {
    return a(l(D.valueOf(), p));
  }
});
function Eu(r) {
  var { DenseMatrix: e } = r;
  return function(u, t, a) {
    var o = u.size();
    if (o.length !== 2) throw new RangeError("Matrix must be two dimensional (size: " + Er(o) + ")");
    var v = o[0], c = o[1];
    if (v !== c) throw new RangeError("Matrix must be square (size: " + Er(o) + ")");
    var f = [];
    if (dr(t)) {
      var s = t.size(), l = t._data;
      if (s.length === 1) {
        if (s[0] !== v) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var d = 0; d < v; d++) f[d] = [l[d]];
        return new e({ data: f, size: [v, 1], datatype: t._datatype });
      }
      if (s.length === 2) {
        if (s[0] !== v || s[1] !== 1) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        if (Zn(t)) {
          if (a) {
            f = [];
            for (var D = 0; D < v; D++) f[D] = [l[D][0]];
            return new e({ data: f, size: [v, 1], datatype: t._datatype });
          }
          return t;
        }
        if (Jn(t)) {
          for (var p = 0; p < v; p++) f[p] = [0];
          for (var i = t._values, h = t._index, m = t._ptr, b = m[1], g = m[0]; g < b; g++) {
            var w = h[g];
            f[w][0] = i[g];
          }
          return new e({ data: f, size: [v, 1], datatype: t._datatype });
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
    if (wr(t)) {
      var A = lr(t);
      if (A.length === 1) {
        if (A[0] !== v) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var F = 0; F < v; F++) f[F] = [t[F]];
        return new e({ data: f, size: [v, 1] });
      }
      if (A.length === 2) {
        if (A[0] !== v || A[1] !== 1) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var C = 0; C < v; C++) f[C] = [t[C][0]];
        return new e({ data: f, size: [v, 1] });
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
  };
}
var Nn = "usolve", Es = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], bs = W(Nn, Es, (r) => {
  var { typed: e, matrix: n, divideScalar: u, multiplyScalar: t, subtractScalar: a, equalScalar: o, DenseMatrix: v } = r, c = Eu({ DenseMatrix: v });
  return e(Nn, { "SparseMatrix, Array | Matrix": function(d, D) {
    return s(d, D);
  }, "DenseMatrix, Array | Matrix": function(d, D) {
    return f(d, D);
  }, "Array, Array | Matrix": function(d, D) {
    var p = n(d), i = f(p, D);
    return i.valueOf();
  } });
  function f(l, d) {
    d = c(l, d, true);
    for (var D = d._data, p = l._size[0], i = l._size[1], h = [], m = l._data, b = i - 1; b >= 0; b--) {
      var g = D[b][0] || 0, w = void 0;
      if (o(g, 0)) w = 0;
      else {
        var A = m[b][b];
        if (o(A, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
        w = u(g, A);
        for (var F = b - 1; F >= 0; F--) D[F] = [a(D[F][0] || 0, t(w, m[F][b]))];
      }
      h[b] = [w];
    }
    return new v({ data: h, size: [p, 1] });
  }
  function s(l, d) {
    d = c(l, d, true);
    for (var D = d._data, p = l._size[0], i = l._size[1], h = l._values, m = l._index, b = l._ptr, g = [], w = i - 1; w >= 0; w--) {
      var A = D[w][0] || 0;
      if (o(A, 0)) g[w] = [0];
      else {
        for (var F = 0, C = [], E = [], y = b[w], B = b[w + 1], _ = B - 1; _ >= y; _--) {
          var x = m[_];
          x === w ? F = h[_] : x < w && (C.push(h[_]), E.push(x));
        }
        if (o(F, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
        for (var O = u(A, F), N = 0, U = E.length; N < U; N++) {
          var z = E[N];
          D[z] = [a(D[z][0], t(O, C[N]))];
        }
        g[w] = [O];
      }
    }
    return new v({ data: g, size: [p, 1] });
  }
}), Tn = "usolveAll", ws = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Cs = W(Tn, ws, (r) => {
  var { typed: e, matrix: n, divideScalar: u, multiplyScalar: t, subtractScalar: a, equalScalar: o, DenseMatrix: v } = r, c = Eu({ DenseMatrix: v });
  return e(Tn, { "SparseMatrix, Array | Matrix": function(d, D) {
    return s(d, D);
  }, "DenseMatrix, Array | Matrix": function(d, D) {
    return f(d, D);
  }, "Array, Array | Matrix": function(d, D) {
    var p = n(d), i = f(p, D);
    return i.map((h) => h.valueOf());
  } });
  function f(l, d) {
    for (var D = [c(l, d, true)._data.map((E) => E[0])], p = l._data, i = l._size[0], h = l._size[1], m = h - 1; m >= 0; m--) for (var b = D.length, g = 0; g < b; g++) {
      var w = D[g];
      if (o(p[m][m], 0)) if (o(w[m], 0)) {
        if (g === 0) {
          var F = [...w];
          F[m] = 1;
          for (var C = m - 1; C >= 0; C--) F[C] = a(F[C], p[C][m]);
          D.push(F);
        }
      } else {
        if (g === 0) return [];
        D.splice(g, 1), g -= 1, b -= 1;
      }
      else {
        w[m] = u(w[m], p[m][m]);
        for (var A = m - 1; A >= 0; A--) w[A] = a(w[A], t(w[m], p[A][m]));
      }
    }
    return D.map((E) => new v({ data: E.map((y) => [y]), size: [i, 1] }));
  }
  function s(l, d) {
    for (var D = [c(l, d, true)._data.map((Q) => Q[0])], p = l._size[0], i = l._size[1], h = l._values, m = l._index, b = l._ptr, g = i - 1; g >= 0; g--) for (var w = D.length, A = 0; A < w; A++) {
      for (var F = D[A], C = [], E = [], y = b[g], B = b[g + 1], _ = 0, x = B - 1; x >= y; x--) {
        var O = m[x];
        O === g ? _ = h[x] : O < g && (C.push(h[x]), E.push(O));
      }
      if (o(_, 0)) if (o(F[g], 0)) {
        if (A === 0) {
          var Z = [...F];
          Z[g] = 1;
          for (var S = 0, M = E.length; S < M; S++) {
            var X = E[S];
            Z[X] = a(Z[X], C[S]);
          }
          D.push(Z);
        }
      } else {
        if (A === 0) return [];
        D.splice(A, 1), A -= 1, w -= 1;
      }
      else {
        F[g] = u(F[g], _);
        for (var N = 0, U = E.length; N < U; N++) {
          var z = E[N];
          F[z] = a(F[z], t(F[g], C[N]));
        }
      }
    }
    return D.map((Q) => new v({ data: Q.map((T) => [T]), size: [p, 1] }));
  }
}), He = "equal", _s = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat", "SparseMatrix"], Bs = W(He, _s, (r) => {
  var { typed: e, matrix: n, equalScalar: u, DenseMatrix: t, concat: a, SparseMatrix: o } = r, v = xe({ typed: e }), c = Ie({ typed: e, SparseMatrix: o }), f = Be({ typed: e, DenseMatrix: t }), s = ge({ typed: e, matrix: n, concat: a });
  return e(He, xs({ typed: e, equalScalar: u }), s({ elop: u, SS: c, DS: v, Ss: f }));
}), xs = W(He, ["typed", "equalScalar"], (r) => {
  var { typed: e, equalScalar: n } = r;
  return e(He, { "any, any": function(t, a) {
    return t === null ? a === null : a === null ? t === null : t === void 0 ? a === void 0 : a === void 0 ? t === void 0 : n(t, a);
  } });
}), ke = "smaller", Ms = ["typed", "config", "bignumber", "matrix", "DenseMatrix", "concat", "SparseMatrix"], Ss = W(ke, Ms, (r) => {
  var { typed: e, config: n, bignumber: u, matrix: t, DenseMatrix: a, concat: o, SparseMatrix: v } = r, c = xe({ typed: e }), f = Ie({ typed: e, SparseMatrix: v }), s = Be({ typed: e, DenseMatrix: a }), l = ge({ typed: e, matrix: t, concat: o }), d = $e({ typed: e });
  function D(p, i) {
    return p.lt(i) && !_e(p, i, n.relTol, n.absTol);
  }
  return e(ke, Ns({ typed: e, config: n }), { "boolean, boolean": (p, i) => p < i, "BigNumber, BigNumber": D, "bigint, bigint": (p, i) => p < i, "Fraction, Fraction": (p, i) => p.compare(i) === -1, "Fraction, BigNumber": function(i, h) {
    return D(u(i), h);
  }, "BigNumber, Fraction": function(i, h) {
    return D(i, u(h));
  }, "Complex, Complex": function(i, h) {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, d, l({ SS: f, DS: c, Ss: s }));
}), Ns = W(ke, ["typed", "config"], (r) => {
  var { typed: e, config: n } = r;
  return e(ke, { "number, number": function(t, a) {
    return t < a && !se(t, a, n.relTol, n.absTol);
  } });
}), je = "smallerEq", Ts = ["typed", "config", "matrix", "DenseMatrix", "concat", "SparseMatrix"], zs = W(je, Ts, (r) => {
  var { typed: e, config: n, matrix: u, DenseMatrix: t, concat: a, SparseMatrix: o } = r, v = xe({ typed: e }), c = Ie({ typed: e, SparseMatrix: o }), f = Be({ typed: e, DenseMatrix: t }), s = ge({ typed: e, matrix: u, concat: a }), l = $e({ typed: e });
  return e(je, Os({ typed: e, config: n }), { "boolean, boolean": (d, D) => d <= D, "BigNumber, BigNumber": function(D, p) {
    return D.lte(p) || _e(D, p, n.relTol, n.absTol);
  }, "bigint, bigint": (d, D) => d <= D, "Fraction, Fraction": (d, D) => d.compare(D) !== 1, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, l, s({ SS: c, DS: v, Ss: f }));
}), Os = W(je, ["typed", "config"], (r) => {
  var { typed: e, config: n } = r;
  return e(je, { "number, number": function(t, a) {
    return t <= a || se(t, a, n.relTol, n.absTol);
  } });
}), rt = "larger", $s = ["typed", "config", "bignumber", "matrix", "DenseMatrix", "concat", "SparseMatrix"], Is = W(rt, $s, (r) => {
  var { typed: e, config: n, bignumber: u, matrix: t, DenseMatrix: a, concat: o, SparseMatrix: v } = r, c = xe({ typed: e }), f = Ie({ typed: e, SparseMatrix: v }), s = Be({ typed: e, DenseMatrix: a }), l = ge({ typed: e, matrix: t, concat: o }), d = $e({ typed: e });
  function D(p, i) {
    return p.gt(i) && !_e(p, i, n.relTol, n.absTol);
  }
  return e(rt, qs({ typed: e, config: n }), { "boolean, boolean": (p, i) => p > i, "BigNumber, BigNumber": D, "bigint, bigint": (p, i) => p > i, "Fraction, Fraction": (p, i) => p.compare(i) === 1, "Fraction, BigNumber": function(i, h) {
    return D(u(i), h);
  }, "BigNumber, Fraction": function(i, h) {
    return D(i, u(h));
  }, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, d, l({ SS: f, DS: c, Ss: s }));
}), qs = W(rt, ["typed", "config"], (r) => {
  var { typed: e, config: n } = r;
  return e(rt, { "number, number": function(t, a) {
    return t > a && !se(t, a, n.relTol, n.absTol);
  } });
}), et = "largerEq", Rs = ["typed", "config", "matrix", "DenseMatrix", "concat", "SparseMatrix"], Us = W(et, Rs, (r) => {
  var { typed: e, config: n, matrix: u, DenseMatrix: t, concat: a, SparseMatrix: o } = r, v = xe({ typed: e }), c = Ie({ typed: e, SparseMatrix: o }), f = Be({ typed: e, DenseMatrix: t }), s = ge({ typed: e, matrix: u, concat: a }), l = $e({ typed: e });
  return e(et, Ps({ typed: e, config: n }), { "boolean, boolean": (d, D) => d >= D, "BigNumber, BigNumber": function(D, p) {
    return D.gte(p) || _e(D, p, n.relTol, n.absTol);
  }, "bigint, bigint": function(D, p) {
    return D >= p;
  }, "Fraction, Fraction": (d, D) => d.compare(D) !== -1, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, l, s({ SS: c, DS: v, Ss: f }));
}), Ps = W(et, ["typed", "config"], (r) => {
  var { typed: e, config: n } = r;
  return e(et, { "number, number": function(t, a) {
    return t >= a || se(t, a, n.relTol, n.absTol);
  } });
}), Xs = "ImmutableDenseMatrix", Ys = ["smaller", "DenseMatrix"], Ls = W(Xs, Ys, (r) => {
  var { smaller: e, DenseMatrix: n } = r;
  function u(t, a) {
    if (!(this instanceof u)) throw new SyntaxError("Constructor must be called with the new operator");
    if (a && !Gr(a)) throw new Error("Invalid datatype: " + a);
    if (dr(t) || wr(t)) {
      var o = new n(t, a);
      this._data = o._data, this._size = o._size, this._datatype = o._datatype, this._min = null, this._max = null;
    } else if (t && wr(t.data) && wr(t.size)) this._data = t.data, this._size = t.size, this._datatype = t.datatype, this._min = typeof t.min < "u" ? t.min : null, this._max = typeof t.max < "u" ? t.max : null;
    else {
      if (t) throw new TypeError("Unsupported type of data (" + Pr(t) + ")");
      this._data = [], this._size = [0], this._datatype = a, this._min = null, this._max = null;
    }
  }
  return u.prototype = new n(), u.prototype.type = "ImmutableDenseMatrix", u.prototype.isImmutableDenseMatrix = true, u.prototype.subset = function(t) {
    switch (arguments.length) {
      case 1: {
        var a = n.prototype.subset.call(this, t);
        return dr(a) ? new u({ data: a._data, size: a._size, datatype: a._datatype }) : a;
      }
      case 2:
      case 3:
        throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, u.prototype.set = function() {
    throw new Error("Cannot invoke set on an Immutable Matrix instance");
  }, u.prototype.resize = function() {
    throw new Error("Cannot invoke resize on an Immutable Matrix instance");
  }, u.prototype.reshape = function() {
    throw new Error("Cannot invoke reshape on an Immutable Matrix instance");
  }, u.prototype.clone = function() {
    return new u({ data: Dr(this._data), size: Dr(this._size), datatype: this._datatype });
  }, u.prototype.toJSON = function() {
    return { mathjs: "ImmutableDenseMatrix", data: this._data, size: this._size, datatype: this._datatype };
  }, u.fromJSON = function(t) {
    return new u(t);
  }, u.prototype.swapRows = function() {
    throw new Error("Cannot invoke swapRows on an Immutable Matrix instance");
  }, u.prototype.min = function() {
    if (this._min === null) {
      var t = null;
      this.forEach(function(a) {
        (t === null || e(a, t)) && (t = a);
      }), this._min = t !== null ? t : void 0;
    }
    return this._min;
  }, u.prototype.max = function() {
    if (this._max === null) {
      var t = null;
      this.forEach(function(a) {
        (t === null || e(t, a)) && (t = a);
      }), this._max = t !== null ? t : void 0;
    }
    return this._max;
  }, u;
}, { isClass: true }), Qs = "Index", Vs = ["ImmutableDenseMatrix", "getMatrixDataType"], Zs = W(Qs, Vs, (r) => {
  var { ImmutableDenseMatrix: e, getMatrixDataType: n } = r;
  function u(a) {
    if (!(this instanceof u)) throw new SyntaxError("Constructor must be called with the new operator");
    this._dimensions = [], this._sourceSize = [], this._isScalar = true;
    for (var o = 0, v = arguments.length; o < v; o++) {
      var c = arguments[o], f = wr(c), s = dr(c), l = typeof c, d = null;
      if (Wn(c)) this._dimensions.push(c), this._isScalar = false;
      else if (f || s) {
        var D = void 0;
        n(c) === "boolean" ? (f && (D = t(zn(c).valueOf())), s && (D = t(zn(c._data).valueOf())), d = c.valueOf().length) : D = t(c.valueOf()), this._dimensions.push(D);
        var p = D.size();
        (p.length !== 1 || p[0] !== 1 || d !== null) && (this._isScalar = false);
      } else if (l === "number") this._dimensions.push(t([c]));
      else if (l === "bigint") this._dimensions.push(t([Number(c)]));
      else if (l === "string") this._dimensions.push(c);
      else throw new TypeError("Dimension must be an Array, Matrix, number, bigint, string, or Range");
      this._sourceSize.push(d);
    }
  }
  u.prototype.type = "Index", u.prototype.isIndex = true;
  function t(a) {
    for (var o = 0, v = a.length; o < v; o++) if (typeof a[o] != "number" || !Ar(a[o])) throw new TypeError("Index parameters must be positive integer numbers");
    return new e(a);
  }
  return u.prototype.clone = function() {
    var a = new u();
    return a._dimensions = Dr(this._dimensions), a._isScalar = this._isScalar, a._sourceSize = this._sourceSize, a;
  }, u.create = function(a) {
    var o = new u();
    return u.apply(o, a), o;
  }, u.prototype.size = function() {
    for (var a = [], o = 0, v = this._dimensions.length; o < v; o++) {
      var c = this._dimensions[o];
      a[o] = typeof c == "string" ? 1 : c.size()[0];
    }
    return a;
  }, u.prototype.max = function() {
    for (var a = [], o = 0, v = this._dimensions.length; o < v; o++) {
      var c = this._dimensions[o];
      a[o] = typeof c == "string" ? c : c.max();
    }
    return a;
  }, u.prototype.min = function() {
    for (var a = [], o = 0, v = this._dimensions.length; o < v; o++) {
      var c = this._dimensions[o];
      a[o] = typeof c == "string" ? c : c.min();
    }
    return a;
  }, u.prototype.forEach = function(a) {
    for (var o = 0, v = this._dimensions.length; o < v; o++) a(this._dimensions[o], o, this);
  }, u.prototype.dimension = function(a) {
    return typeof a != "number" ? null : this._dimensions[a] || null;
  }, u.prototype.isObjectProperty = function() {
    return this._dimensions.length === 1 && typeof this._dimensions[0] == "string";
  }, u.prototype.getObjectProperty = function() {
    return this.isObjectProperty() ? this._dimensions[0] : null;
  }, u.prototype.isScalar = function() {
    return this._isScalar;
  }, u.prototype.toArray = function() {
    for (var a = [], o = 0, v = this._dimensions.length; o < v; o++) {
      var c = this._dimensions[o];
      a.push(typeof c == "string" ? c : c.toArray());
    }
    return a;
  }, u.prototype.valueOf = u.prototype.toArray, u.prototype.toString = function() {
    for (var a = [], o = 0, v = this._dimensions.length; o < v; o++) {
      var c = this._dimensions[o];
      typeof c == "string" ? a.push(JSON.stringify(c)) : a.push(c.toString());
    }
    return "[" + a.join(", ") + "]";
  }, u.prototype.toJSON = function() {
    return { mathjs: "Index", dimensions: this._dimensions };
  }, u.fromJSON = function(a) {
    return u.create(a.dimensions);
  }, u;
}, { isClass: true });
function zn(r) {
  var e = [];
  return r.forEach((n, u) => {
    n && e.push(u);
  }), e;
}
var Js = "atan", Ws = ["typed"], Gs = W(Js, Ws, (r) => {
  var { typed: e } = r;
  return e("atan", { number: function(u) {
    return Math.atan(u);
  }, Complex: function(u) {
    return u.atan();
  }, BigNumber: function(u) {
    return u.atan();
  } });
}), bu = W("trigUnit", ["typed"], (r) => {
  var { typed: e } = r;
  return { Unit: e.referToSelf((n) => (u) => {
    if (!u.hasBase(u.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
    return e.find(n, u.valueType())(u.value);
  }) };
}), On = "cos", Ks = ["typed"], Hs = W(On, Ks, (r) => {
  var { typed: e } = r, n = bu({ typed: e });
  return e(On, { number: Math.cos, "Complex | BigNumber": (u) => u.cos() }, n);
}), $n = "sin", ks = ["typed"], js = W($n, ks, (r) => {
  var { typed: e } = r, n = bu({ typed: e });
  return e($n, { number: Math.sin, "Complex | BigNumber": (u) => u.sin() }, n);
}), In = "add", rf = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"], ef = W(In, rf, (r) => {
  var { typed: e, matrix: n, addScalar: u, equalScalar: t, DenseMatrix: a, SparseMatrix: o, concat: v } = r, c = gu({ typed: e }), f = mo({ typed: e, equalScalar: t }), s = yu({ typed: e, DenseMatrix: a }), l = ge({ typed: e, matrix: n, concat: v });
  return e(In, { "any, any": u, "any, any, ...any": e.referToSelf((d) => (D, p, i) => {
    for (var h = d(D, p), m = 0; m < i.length; m++) h = d(h, i[m]);
    return h;
  }) }, l({ elop: u, DS: c, SS: f, Ss: s }));
}), qn = "norm", tf = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], nf = W(qn, tf, (r) => {
  var { typed: e, abs: n, add: u, pow: t, conj: a, sqrt: o, multiply: v, equalScalar: c, larger: f, smaller: s, matrix: l, ctranspose: d, eigs: D } = r;
  return e(qn, { number: Math.abs, Complex: function(E) {
    return E.abs();
  }, BigNumber: function(E) {
    return E.abs();
  }, boolean: function(E) {
    return Math.abs(E);
  }, Array: function(E) {
    return F(l(E), 2);
  }, Matrix: function(E) {
    return F(E, 2);
  }, "Array, number | BigNumber | string": function(E, y) {
    return F(l(E), y);
  }, "Matrix, number | BigNumber | string": function(E, y) {
    return F(E, y);
  } });
  function p(C) {
    var E = 0;
    return C.forEach(function(y) {
      var B = n(y);
      f(B, E) && (E = B);
    }, true), E;
  }
  function i(C) {
    var E;
    return C.forEach(function(y) {
      var B = n(y);
      (!E || s(B, E)) && (E = B);
    }, true), E || 0;
  }
  function h(C, E) {
    if (E === Number.POSITIVE_INFINITY || E === "inf") return p(C);
    if (E === Number.NEGATIVE_INFINITY || E === "-inf") return i(C);
    if (E === "fro") return F(C, 2);
    if (typeof E == "number" && !isNaN(E)) {
      if (!c(E, 0)) {
        var y = 0;
        return C.forEach(function(B) {
          y = u(t(n(B), E), y);
        }, true), t(y, 1 / E);
      }
      return Number.POSITIVE_INFINITY;
    }
    throw new Error("Unsupported parameter value");
  }
  function m(C) {
    var E = 0;
    return C.forEach(function(y, B) {
      E = u(E, v(y, a(y)));
    }), n(o(E));
  }
  function b(C) {
    var E = [], y = 0;
    return C.forEach(function(B, _) {
      var x = _[1], O = u(E[x] || 0, n(B));
      f(O, y) && (y = O), E[x] = O;
    }, true), y;
  }
  function g(C) {
    var E = C.size();
    if (E[0] !== E[1]) throw new RangeError("Invalid matrix dimensions");
    var y = d(C), B = v(y, C), _ = D(B).values.toArray(), x = _[_.length - 1];
    return n(o(x));
  }
  function w(C) {
    var E = [], y = 0;
    return C.forEach(function(B, _) {
      var x = _[0], O = u(E[x] || 0, n(B));
      f(O, y) && (y = O), E[x] = O;
    }, true), y;
  }
  function A(C, E) {
    if (E === 1) return b(C);
    if (E === Number.POSITIVE_INFINITY || E === "inf") return w(C);
    if (E === "fro") return m(C);
    if (E === 2) return g(C);
    throw new Error("Unsupported parameter value " + E);
  }
  function F(C, E) {
    var y = C.size();
    if (y.length === 1) return h(C, E);
    if (y.length === 2) {
      if (y[0] && y[1]) return A(C, E);
      throw new RangeError("Invalid matrix dimensions");
    }
  }
}), Rn = "dot", uf = ["typed", "addScalar", "multiplyScalar", "conj", "size"], af = W(Rn, uf, (r) => {
  var { typed: e, addScalar: n, multiplyScalar: u, conj: t, size: a } = r;
  return e(Rn, { "Array | DenseMatrix, Array | DenseMatrix": v, "SparseMatrix, SparseMatrix": c });
  function o(s, l) {
    var d = f(s), D = f(l), p, i;
    if (d.length === 1) p = d[0];
    else if (d.length === 2 && d[1] === 1) p = d[0];
    else throw new RangeError("Expected a column vector, instead got a matrix of size (" + d.join(", ") + ")");
    if (D.length === 1) i = D[0];
    else if (D.length === 2 && D[1] === 1) i = D[0];
    else throw new RangeError("Expected a column vector, instead got a matrix of size (" + D.join(", ") + ")");
    if (p !== i) throw new RangeError("Vectors must have equal length (" + p + " != " + i + ")");
    if (p === 0) throw new RangeError("Cannot calculate the dot product of empty vectors");
    return p;
  }
  function v(s, l) {
    var d = o(s, l), D = dr(s) ? s._data : s, p = dr(s) ? s._datatype || s.getDataType() : void 0, i = dr(l) ? l._data : l, h = dr(l) ? l._datatype || l.getDataType() : void 0, m = f(s).length === 2, b = f(l).length === 2, g = n, w = u;
    if (p && h && p === h && typeof p == "string" && p !== "mixed") {
      var A = p;
      g = e.find(n, [A, A]), w = e.find(u, [A, A]);
    }
    if (!m && !b) {
      for (var F = w(t(D[0]), i[0]), C = 1; C < d; C++) F = g(F, w(t(D[C]), i[C]));
      return F;
    }
    if (!m && b) {
      for (var E = w(t(D[0]), i[0][0]), y = 1; y < d; y++) E = g(E, w(t(D[y]), i[y][0]));
      return E;
    }
    if (m && !b) {
      for (var B = w(t(D[0][0]), i[0]), _ = 1; _ < d; _++) B = g(B, w(t(D[_][0]), i[_]));
      return B;
    }
    if (m && b) {
      for (var x = w(t(D[0][0]), i[0][0]), O = 1; O < d; O++) x = g(x, w(t(D[O][0]), i[O][0]));
      return x;
    }
  }
  function c(s, l) {
    o(s, l);
    for (var d = s._index, D = s._values, p = l._index, i = l._values, h = 0, m = n, b = u, g = 0, w = 0; g < d.length && w < p.length; ) {
      var A = d[g], F = p[w];
      if (A < F) {
        g++;
        continue;
      }
      if (A > F) {
        w++;
        continue;
      }
      A === F && (h = m(h, b(D[g], i[w])), g++, w++);
    }
    return h;
  }
  function f(s) {
    return dr(s) ? s.size() : a(s);
  }
}), Un = "qr", of = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"], sf = W(Un, of, (r) => {
  var { typed: e, matrix: n, zeros: u, identity: t, isZero: a, equal: o, sign: v, sqrt: c, conj: f, unaryMinus: s, addScalar: l, divideScalar: d, multiplyScalar: D, subtractScalar: p, complex: i } = r;
  return tt(e(Un, { DenseMatrix: function(w) {
    return m(w);
  }, SparseMatrix: function(w) {
    return b();
  }, Array: function(w) {
    var A = n(w), F = m(A);
    return { Q: F.Q.valueOf(), R: F.R.valueOf() };
  } }), { _denseQRimpl: h });
  function h(g) {
    var w = g._size[0], A = g._size[1], F = t([w], "dense"), C = F._data, E = g.clone(), y = E._data, B, _, x, O = u([w], "");
    for (x = 0; x < Math.min(A, w); ++x) {
      var N = y[x][x], U = s(o(N, 0) ? 1 : v(N)), z = f(U), Z = 0;
      for (B = x; B < w; B++) Z = l(Z, D(y[B][x], f(y[B][x])));
      var S = D(U, c(Z));
      if (!a(S)) {
        var M = p(N, S);
        for (O[x] = 1, B = x + 1; B < w; B++) O[B] = d(y[B][x], M);
        var X = s(f(d(M, S))), Q = void 0;
        for (_ = x; _ < A; _++) {
          for (Q = 0, B = x; B < w; B++) Q = l(Q, D(f(O[B]), y[B][_]));
          for (Q = D(Q, X), B = x; B < w; B++) y[B][_] = D(p(y[B][_], D(O[B], Q)), z);
        }
        for (B = 0; B < w; B++) {
          for (Q = 0, _ = x; _ < w; _++) Q = l(Q, D(C[B][_], O[_]));
          for (Q = D(Q, X), _ = x; _ < w; ++_) C[B][_] = d(p(C[B][_], D(Q, f(O[_]))), z);
        }
      }
    }
    return { Q: F, R: E, toString: function() {
      return "Q: " + this.Q.toString() + `
R: ` + this.R.toString();
    } };
  }
  function m(g) {
    var w = h(g), A = w.R._data;
    if (g._data.length > 0) for (var F = A[0][0].type === "Complex" ? i(0) : 0, C = 0; C < A.length; ++C) for (var E = 0; E < C && E < (A[0] || []).length; ++E) A[C][E] = F;
    return w;
  }
  function b(g) {
    throw new Error("qr not implemented for sparse matrices yet");
  }
}), Pn = "det", ff = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"], cf = W(Pn, ff, (r) => {
  var { typed: e, matrix: n, subtractScalar: u, multiply: t, divideScalar: a, isZero: o, unaryMinus: v } = r;
  return e(Pn, { any: function(s) {
    return Dr(s);
  }, "Array | Matrix": function(s) {
    var l;
    switch (dr(s) ? l = s.size() : Array.isArray(s) ? (s = n(s), l = s.size()) : l = [], l.length) {
      case 0:
        return Dr(s);
      case 1:
        if (l[0] === 1) return Dr(s.valueOf()[0]);
        if (l[0] === 0) return 1;
        throw new RangeError("Matrix must be square (size: " + Er(l) + ")");
      case 2: {
        var d = l[0], D = l[1];
        if (d === D) return c(s.clone().valueOf(), d);
        if (D === 0) return 1;
        throw new RangeError("Matrix must be square (size: " + Er(l) + ")");
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + Er(l) + ")");
    }
  } });
  function c(f, s, l) {
    if (s === 1) return Dr(f[0][0]);
    if (s === 2) return u(t(f[0][0], f[1][1]), t(f[1][0], f[0][1]));
    for (var d = false, D = new Array(s).fill(0).map((C, E) => E), p = 0; p < s; p++) {
      var i = D[p];
      if (o(f[i][p])) {
        var h = void 0;
        for (h = p + 1; h < s; h++) if (!o(f[D[h]][p])) {
          i = D[h], D[h] = D[p], D[p] = i, d = !d;
          break;
        }
        if (h === s) return f[i][p];
      }
      for (var m = f[i][p], b = p === 0 ? 1 : f[D[p - 1]][p - 1], g = p + 1; g < s; g++) for (var w = D[g], A = p + 1; A < s; A++) f[w][A] = a(u(t(f[w][A], m), t(f[w][p], f[i][A])), b);
    }
    var F = f[D[s - 1]][s - 1];
    return d ? v(F) : F;
  }
}), Xn = "inv", lf = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], vf = W(Xn, lf, (r) => {
  var { typed: e, matrix: n, divideScalar: u, addScalar: t, multiply: a, unaryMinus: o, det: v, identity: c, abs: f } = r;
  return e(Xn, { "Array | Matrix": function(d) {
    var D = dr(d) ? d.size() : lr(d);
    switch (D.length) {
      case 1:
        if (D[0] === 1) return dr(d) ? n([u(1, d.valueOf()[0])]) : [u(1, d[0])];
        throw new RangeError("Matrix must be square (size: " + Er(D) + ")");
      case 2: {
        var p = D[0], i = D[1];
        if (p === i) return dr(d) ? n(s(d.valueOf(), p, i), d.storage()) : s(d, p, i);
        throw new RangeError("Matrix must be square (size: " + Er(D) + ")");
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + Er(D) + ")");
    }
  }, any: function(d) {
    return u(1, d);
  } });
  function s(l, d, D) {
    var p, i, h, m, b;
    if (d === 1) {
      if (m = l[0][0], m === 0) throw Error("Cannot calculate inverse, determinant is zero");
      return [[u(1, m)]];
    } else if (d === 2) {
      var g = v(l);
      if (g === 0) throw Error("Cannot calculate inverse, determinant is zero");
      return [[u(l[1][1], g), u(o(l[0][1]), g)], [u(o(l[1][0]), g), u(l[0][0], g)]];
    } else {
      var w = l.concat();
      for (p = 0; p < d; p++) w[p] = w[p].concat();
      for (var A = c(d).valueOf(), F = 0; F < D; F++) {
        var C = f(w[F][F]), E = F;
        for (p = F + 1; p < d; ) f(w[p][F]) > C && (C = f(w[p][F]), E = p), p++;
        if (C === 0) throw Error("Cannot calculate inverse, determinant is zero");
        p = E, p !== F && (b = w[F], w[F] = w[p], w[p] = b, b = A[F], A[F] = A[p], A[p] = b);
        var y = w[F], B = A[F];
        for (p = 0; p < d; p++) {
          var _ = w[p], x = A[p];
          if (p !== F) {
            if (_[F] !== 0) {
              for (h = u(o(_[F]), y[F]), i = F; i < D; i++) _[i] = t(_[i], a(h, y[i]));
              for (i = 0; i < D; i++) x[i] = t(x[i], a(h, B[i]));
            }
          } else {
            for (h = y[F], i = F; i < D; i++) _[i] = u(_[i], h);
            for (i = 0; i < D; i++) x[i] = u(x[i], h);
          }
        }
      }
      return A;
    }
  }
});
function Df(r) {
  var { addScalar: e, subtract: n, flatten: u, multiply: t, multiplyScalar: a, divideScalar: o, sqrt: v, abs: c, bignumber: f, diag: s, size: l, reshape: d, inv: D, qr: p, usolve: i, usolveAll: h, equal: m, complex: b, larger: g, smaller: w, matrixFromColumns: A, dot: F } = r;
  function C(T, $, q, P) {
    var Y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, I = E(T, $, q, P, Y);
    y(T, $, q, P, Y, I);
    var { values: L, C: R } = B(T, $, q, P, Y);
    if (Y) {
      var J = _(T, $, R, I, L, q, P);
      return { values: L, eigenvectors: J };
    }
    return { values: L };
  }
  function E(T, $, q, P, Y) {
    var I = P === "BigNumber", L = P === "Complex", R = I ? f(0) : 0, J = I ? f(1) : L ? b(1) : 1, K = I ? f(1) : 1, V = I ? f(10) : 2, H = a(V, V), tr;
    Y && (tr = Array($).fill(J));
    for (var k = false; !k; ) {
      k = true;
      for (var nr = 0; nr < $; nr++) {
        for (var or = R, sr = R, hr = 0; hr < $; hr++) nr !== hr && (or = e(or, c(T[hr][nr])), sr = e(sr, c(T[nr][hr])));
        if (!m(or, 0) && !m(sr, 0)) {
          for (var cr = K, vr = or, xr = o(sr, V), Mr = a(sr, V); w(vr, xr); ) vr = a(vr, H), cr = a(cr, V);
          for (; g(vr, Mr); ) vr = o(vr, H), cr = o(cr, V);
          var Fr = w(o(e(vr, sr), cr), a(e(or, sr), 0.95));
          if (Fr) {
            k = false;
            for (var Ur = o(1, cr), Or = 0; Or < $; Or++) nr !== Or && (T[nr][Or] = a(T[nr][Or], Ur), T[Or][nr] = a(T[Or][nr], cr));
            Y && (tr[nr] = a(tr[nr], Ur));
          }
        }
      }
    }
    return Y ? s(tr) : null;
  }
  function y(T, $, q, P, Y, I) {
    var L = P === "BigNumber", R = P === "Complex", J = L ? f(0) : R ? b(0) : 0;
    L && (q = f(q));
    for (var K = 0; K < $ - 2; K++) {
      for (var V = 0, H = J, tr = K + 1; tr < $; tr++) {
        var k = T[tr][K];
        w(c(H), c(k)) && (H = k, V = tr);
      }
      if (!w(c(H), q)) {
        if (V !== K + 1) {
          var nr = T[V];
          T[V] = T[K + 1], T[K + 1] = nr;
          for (var or = 0; or < $; or++) {
            var sr = T[or][V];
            T[or][V] = T[or][K + 1], T[or][K + 1] = sr;
          }
          if (Y) {
            var hr = I[V];
            I[V] = I[K + 1], I[K + 1] = hr;
          }
        }
        for (var cr = K + 2; cr < $; cr++) {
          var vr = o(T[cr][K], H);
          if (vr !== 0) {
            for (var xr = 0; xr < $; xr++) T[cr][xr] = n(T[cr][xr], a(vr, T[K + 1][xr]));
            for (var Mr = 0; Mr < $; Mr++) T[Mr][K + 1] = e(T[Mr][K + 1], a(vr, T[Mr][cr]));
            if (Y) for (var Fr = 0; Fr < $; Fr++) I[cr][Fr] = n(I[cr][Fr], a(vr, I[K + 1][Fr]));
          }
        }
      }
    }
    return I;
  }
  function B(T, $, q, P, Y) {
    var I = P === "BigNumber", L = P === "Complex", R = I ? f(1) : L ? b(1) : 1;
    I && (q = f(q));
    for (var J = Dr(T), K = [], V = $, H = [], tr = Y ? s(Array($).fill(R)) : void 0, k = Y ? s(Array(V).fill(R)) : void 0, nr = 0; nr <= 100; ) {
      nr += 1;
      for (var or = J[V - 1][V - 1], sr = 0; sr < V; sr++) J[sr][sr] = n(J[sr][sr], or);
      var { Q: hr, R: cr } = p(J);
      J = t(cr, hr);
      for (var vr = 0; vr < V; vr++) J[vr][vr] = e(J[vr][vr], or);
      if (Y && (k = t(k, hr)), V === 1 || w(c(J[V - 1][V - 2]), q)) {
        nr = 0, K.push(J[V - 1][V - 1]), Y && (H.unshift([[1]]), N(k, $), tr = t(tr, k), V > 1 && (k = s(Array(V - 1).fill(R)))), V -= 1, J.pop();
        for (var xr = 0; xr < V; xr++) J[xr].pop();
      } else if (V === 2 || w(c(J[V - 2][V - 3]), q)) {
        nr = 0;
        var Mr = x(J[V - 2][V - 2], J[V - 2][V - 1], J[V - 1][V - 2], J[V - 1][V - 1]);
        K.push(...Mr), Y && (H.unshift(O(J[V - 2][V - 2], J[V - 2][V - 1], J[V - 1][V - 2], J[V - 1][V - 1], Mr[0], Mr[1], q, P)), N(k, $), tr = t(tr, k), V > 2 && (k = s(Array(V - 2).fill(R)))), V -= 2, J.pop(), J.pop();
        for (var Fr = 0; Fr < V; Fr++) J[Fr].pop(), J[Fr].pop();
      }
      if (V === 0) break;
    }
    if (K.sort((te, Nr) => +n(c(te), c(Nr))), nr > 100) {
      var Ur = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + K.join(", "));
      throw Ur.values = K, Ur.vectors = [], Ur;
    }
    var Or = Y ? t(tr, U(H, $)) : void 0;
    return { values: K, C: Or };
  }
  function _(T, $, q, P, Y, I, L) {
    var R = D(q), J = t(R, T, q), K = L === "BigNumber", V = L === "Complex", H = K ? f(0) : V ? b(0) : 0, tr = K ? f(1) : V ? b(1) : 1, k = [], nr = [];
    for (var or of Y) {
      var sr = z(k, or, m);
      sr === -1 ? (k.push(or), nr.push(1)) : nr[sr] += 1;
    }
    for (var hr = [], cr = k.length, vr = Array($).fill(H), xr = s(Array($).fill(tr)), Mr = function() {
      var Or = k[Fr], te = n(J, t(Or, xr)), Nr = h(te, vr);
      for (Nr.shift(); Nr.length < nr[Fr]; ) {
        var Zr = Z(te, $, Nr, I, L);
        if (Zr === null) break;
        Nr.push(Zr);
      }
      var Kr = t(D(P), q);
      Nr = Nr.map((ar) => t(Kr, ar)), hr.push(...Nr.map((ar) => ({ value: Or, vector: u(ar) })));
    }, Fr = 0; Fr < cr; Fr++) Mr();
    return hr;
  }
  function x(T, $, q, P) {
    var Y = e(T, P), I = n(a(T, P), a($, q)), L = a(Y, 0.5), R = a(v(n(a(Y, Y), a(4, I))), 0.5);
    return [e(L, R), n(L, R)];
  }
  function O(T, $, q, P, Y, I, L, R) {
    var J = R === "BigNumber", K = R === "Complex", V = J ? f(0) : K ? b(0) : 0, H = J ? f(1) : K ? b(1) : 1;
    if (w(c(q), L)) return [[H, V], [V, H]];
    if (g(c(n(Y, I)), L)) return [[n(Y, P), n(I, P)], [q, q]];
    var tr = n(T, Y), k = n(P, Y);
    return w(c($), L) && w(c(k), L) ? [[tr, H], [q, V]] : [[$, V], [k, H]];
  }
  function N(T, $) {
    for (var q = 0; q < T.length; q++) T[q].push(...Array($ - T[q].length).fill(0));
    for (var P = T.length; P < $; P++) T.push(Array($).fill(0)), T[P][P] = 1;
    return T;
  }
  function U(T, $) {
    for (var q = [], P = 0; P < $; P++) q[P] = Array($).fill(0);
    var Y = 0;
    for (var I of T) {
      for (var L = I.length, R = 0; R < L; R++) for (var J = 0; J < L; J++) q[Y + R][Y + J] = I[R][J];
      Y += L;
    }
    return q;
  }
  function z(T, $, q) {
    for (var P = 0; P < T.length; P++) if (q(T[P], $)) return P;
    return -1;
  }
  function Z(T, $, q, P, Y) {
    for (var I = Y === "BigNumber" ? f(1e3) : 1e3, L, R = 0; R < 5; ++R) {
      L = S($, q, Y);
      try {
        L = i(T, L);
      } catch {
        continue;
      }
      if (g(X(L), I)) break;
    }
    if (R >= 5) return null;
    for (R = 0; ; ) {
      var J = i(T, L);
      if (w(X(M(L, [J])), P)) break;
      if (++R >= 10) return null;
      L = Q(J);
    }
    return L;
  }
  function S(T, $, q) {
    var P = q === "BigNumber", Y = q === "Complex", I = Array(T).fill(0).map((L) => 2 * Math.random() - 1);
    return P && (I = I.map((L) => f(L))), Y && (I = I.map((L) => b(L))), I = M(I, $), Q(I, q);
  }
  function M(T, $) {
    var q = l(T);
    for (var P of $) P = d(P, q), T = n(T, t(o(F(P, T), F(P, P)), P));
    return T;
  }
  function X(T) {
    return c(v(F(T, T)));
  }
  function Q(T, $) {
    var q = $ === "BigNumber", P = $ === "Complex", Y = q ? f(1) : P ? b(1) : 1;
    return t(o(Y, X(T)), T);
  }
  return C;
}
function pf(r) {
  var { config: e, addScalar: n, subtract: u, abs: t, atan: a, cos: o, sin: v, multiplyScalar: c, inv: f, bignumber: s, multiply: l, add: d } = r;
  function D(y, B) {
    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.relTol, x = arguments.length > 3 ? arguments[3] : void 0, O = arguments.length > 4 ? arguments[4] : void 0;
    if (x === "number") return p(y, _, O);
    if (x === "BigNumber") return i(y, _, O);
    throw TypeError("Unsupported data type: " + x);
  }
  function p(y, B, _) {
    var x = y.length, O = Math.abs(B / x), N, U;
    if (_) {
      U = new Array(x);
      for (var z = 0; z < x; z++) U[z] = Array(x).fill(0), U[z][z] = 1;
    }
    for (var Z = F(y); Math.abs(Z[1]) >= Math.abs(O); ) {
      var S = Z[0][0], M = Z[0][1];
      N = h(y[S][S], y[M][M], y[S][M]), y = A(y, N, S, M), _ && (U = b(U, N, S, M)), Z = F(y);
    }
    for (var X = Array(x).fill(0), Q = 0; Q < x; Q++) X[Q] = y[Q][Q];
    return E(Dr(X), U, _);
  }
  function i(y, B, _) {
    var x = y.length, O = t(B / x), N, U;
    if (_) {
      U = new Array(x);
      for (var z = 0; z < x; z++) U[z] = Array(x).fill(0), U[z][z] = 1;
    }
    for (var Z = C(y); t(Z[1]) >= t(O); ) {
      var S = Z[0][0], M = Z[0][1];
      N = m(y[S][S], y[M][M], y[S][M]), y = w(y, N, S, M), _ && (U = g(U, N, S, M)), Z = C(y);
    }
    for (var X = Array(x).fill(0), Q = 0; Q < x; Q++) X[Q] = y[Q][Q];
    return E(Dr(X), U, _);
  }
  function h(y, B, _) {
    var x = B - y;
    return Math.abs(x) <= e.relTol ? Math.PI / 4 : 0.5 * Math.atan(2 * _ / (B - y));
  }
  function m(y, B, _) {
    var x = u(B, y);
    return t(x) <= e.relTol ? s(-1).acos().div(4) : c(0.5, a(l(2, _, f(x))));
  }
  function b(y, B, _, x) {
    for (var O = y.length, N = Math.cos(B), U = Math.sin(B), z = Array(O).fill(0), Z = Array(O).fill(0), S = 0; S < O; S++) z[S] = N * y[S][_] - U * y[S][x], Z[S] = U * y[S][_] + N * y[S][x];
    for (var M = 0; M < O; M++) y[M][_] = z[M], y[M][x] = Z[M];
    return y;
  }
  function g(y, B, _, x) {
    for (var O = y.length, N = o(B), U = v(B), z = Array(O).fill(s(0)), Z = Array(O).fill(s(0)), S = 0; S < O; S++) z[S] = u(c(N, y[S][_]), c(U, y[S][x])), Z[S] = n(c(U, y[S][_]), c(N, y[S][x]));
    for (var M = 0; M < O; M++) y[M][_] = z[M], y[M][x] = Z[M];
    return y;
  }
  function w(y, B, _, x) {
    for (var O = y.length, N = s(o(B)), U = s(v(B)), z = c(N, N), Z = c(U, U), S = Array(O).fill(s(0)), M = Array(O).fill(s(0)), X = l(s(2), N, U, y[_][x]), Q = n(u(c(z, y[_][_]), X), c(Z, y[x][x])), T = d(c(Z, y[_][_]), X, c(z, y[x][x])), $ = 0; $ < O; $++) S[$] = u(c(N, y[_][$]), c(U, y[x][$])), M[$] = n(c(U, y[_][$]), c(N, y[x][$]));
    y[_][_] = Q, y[x][x] = T, y[_][x] = s(0), y[x][_] = s(0);
    for (var q = 0; q < O; q++) q !== _ && q !== x && (y[_][q] = S[q], y[q][_] = S[q], y[x][q] = M[q], y[q][x] = M[q]);
    return y;
  }
  function A(y, B, _, x) {
    for (var O = y.length, N = Math.cos(B), U = Math.sin(B), z = N * N, Z = U * U, S = Array(O).fill(0), M = Array(O).fill(0), X = z * y[_][_] - 2 * N * U * y[_][x] + Z * y[x][x], Q = Z * y[_][_] + 2 * N * U * y[_][x] + z * y[x][x], T = 0; T < O; T++) S[T] = N * y[_][T] - U * y[x][T], M[T] = U * y[_][T] + N * y[x][T];
    y[_][_] = X, y[x][x] = Q, y[_][x] = 0, y[x][_] = 0;
    for (var $ = 0; $ < O; $++) $ !== _ && $ !== x && (y[_][$] = S[$], y[$][_] = S[$], y[x][$] = M[$], y[$][x] = M[$]);
    return y;
  }
  function F(y) {
    for (var B = y.length, _ = 0, x = [0, 1], O = 0; O < B; O++) for (var N = O + 1; N < B; N++) Math.abs(_) < Math.abs(y[O][N]) && (_ = Math.abs(y[O][N]), x = [O, N]);
    return [x, _];
  }
  function C(y) {
    for (var B = y.length, _ = 0, x = [0, 1], O = 0; O < B; O++) for (var N = O + 1; N < B; N++) t(_) < t(y[O][N]) && (_ = t(y[O][N]), x = [O, N]);
    return [x, _];
  }
  function E(y, B, _) {
    var x = y.length, O = Array(x), N;
    if (_) {
      N = Array(x);
      for (var U = 0; U < x; U++) N[U] = Array(x);
    }
    for (var z = 0; z < x; z++) {
      for (var Z = 0, S = y[0], M = 0; M < y.length; M++) t(y[M]) < t(S) && (Z = M, S = y[Z]);
      if (O[z] = y.splice(Z, 1)[0], _) for (var X = 0; X < x; X++) N[z][X] = B[X][Z], B[X].splice(Z, 1);
    }
    if (!_) return { values: O };
    var Q = N.map((T, $) => ({ value: O[$], vector: T }));
    return { values: O, eigenvectors: Q };
  }
  return D;
}
var df = "eigs", hf = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], mf = W(df, hf, (r) => {
  var { config: e, typed: n, matrix: u, addScalar: t, subtract: a, equal: o, abs: v, atan: c, cos: f, sin: s, multiplyScalar: l, divideScalar: d, inv: D, bignumber: p, multiply: i, add: h, larger: m, column: b, flatten: g, number: w, complex: A, sqrt: F, diag: C, size: E, reshape: y, qr: B, usolve: _, usolveAll: x, im: O, re: N, smaller: U, matrixFromColumns: z, dot: Z } = r, S = pf({ config: e, addScalar: t, subtract: a, abs: v, atan: c, cos: f, sin: s, multiplyScalar: l, inv: D, bignumber: p, multiply: i, add: h }), M = Df({ addScalar: t, subtract: a, multiply: i, multiplyScalar: l, flatten: g, divideScalar: d, sqrt: F, abs: v, bignumber: p, diag: C, size: E, reshape: y, qr: B, inv: D, usolve: _, usolveAll: x, equal: o, complex: A, larger: m, smaller: U, matrixFromColumns: z, dot: Z });
  return n("eigs", { Array: function(I) {
    return X(u(I));
  }, "Array, number|BigNumber": function(I, L) {
    return X(u(I), { precision: L });
  }, "Array, Object"(Y, I) {
    return X(u(Y), I);
  }, Matrix: function(I) {
    return X(I, { matricize: true });
  }, "Matrix, number|BigNumber": function(I, L) {
    return X(I, { precision: L, matricize: true });
  }, "Matrix, Object": function(I, L) {
    var R = { matricize: true };
    return tt(R, L), X(I, R);
  } });
  function X(Y) {
    var I, L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, R = "eigenvectors" in L ? L.eigenvectors : true, J = (I = L.precision) !== null && I !== void 0 ? I : e.relTol, K = Q(Y, J, R);
    return L.matricize && (K.values = u(K.values), R && (K.eigenvectors = K.eigenvectors.map((V) => {
      var { value: H, vector: tr } = V;
      return { value: H, vector: u(tr) };
    }))), R && Object.defineProperty(K, "vectors", { enumerable: false, get: () => {
      throw new Error("eigs(M).vectors replaced with eigs(M).eigenvectors");
    } }), K;
  }
  function Q(Y, I, L) {
    var R = Y.toArray(), J = Y.size();
    if (J.length !== 2 || J[0] !== J[1]) throw new RangeError("Matrix must be square (size: ".concat(Er(J), ")"));
    var K = J[0];
    if ($(R, K, I) && (q(R, K), T(R, K, I))) {
      var V = P(Y, R, K);
      return S(R, K, I, V, L);
    }
    var H = P(Y, R, K);
    return M(R, K, I, H, L);
  }
  function T(Y, I, L) {
    for (var R = 0; R < I; R++) for (var J = R; J < I; J++) if (m(p(v(a(Y[R][J], Y[J][R]))), L)) return false;
    return true;
  }
  function $(Y, I, L) {
    for (var R = 0; R < I; R++) for (var J = 0; J < I; J++) if (m(p(v(O(Y[R][J]))), L)) return false;
    return true;
  }
  function q(Y, I) {
    for (var L = 0; L < I; L++) for (var R = 0; R < I; R++) Y[L][R] = N(Y[L][R]);
  }
  function P(Y, I, L) {
    var R = Y.datatype();
    if (R === "number" || R === "BigNumber" || R === "Complex") return R;
    for (var J = false, K = false, V = false, H = 0; H < L; H++) for (var tr = 0; tr < L; tr++) {
      var k = I[H][tr];
      if (yr(k) || Et(k)) J = true;
      else if (_r(k)) K = true;
      else if (Ft(k)) V = true;
      else throw TypeError("Unsupported type in Matrix: " + Pr(k));
    }
    if (K && V && console.warn("Complex BigNumbers not supported, this operation will lose precission."), V) {
      for (var nr = 0; nr < L; nr++) for (var or = 0; or < L; or++) I[nr][or] = A(I[nr][or]);
      return "Complex";
    }
    if (K) {
      for (var sr = 0; sr < L; sr++) for (var hr = 0; hr < L; hr++) I[sr][hr] = p(I[sr][hr]);
      return "BigNumber";
    }
    if (J) {
      for (var cr = 0; cr < L; cr++) for (var vr = 0; vr < L; vr++) I[cr][vr] = w(I[cr][vr]);
      return "number";
    } else throw TypeError("Matrix contains unsupported types only.");
  }
}), gf = "divide", yf = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], Af = W(gf, yf, (r) => {
  var { typed: e, matrix: n, multiply: u, equalScalar: t, divideScalar: a, inv: o } = r, v = mu({ typed: e, equalScalar: t }), c = Mt({ typed: e });
  return e("divide", Gn({ "Array | Matrix, Array | Matrix": function(s, l) {
    return u(s, o(l));
  }, "DenseMatrix, any": function(s, l) {
    return c(s, l, a, false);
  }, "SparseMatrix, any": function(s, l) {
    return v(s, l, a, false);
  }, "Array, any": function(s, l) {
    return c(n(s), l, a, false).valueOf();
  }, "any, Array | Matrix": function(s, l) {
    return u(s, o(l));
  } }, a.signatures));
}), Yn = "mean", Ff = ["typed", "add", "divide"], Ef = W(Yn, Ff, (r) => {
  var { typed: e, add: n, divide: u } = r;
  return e(Yn, { "Array | Matrix": a, "Array | Matrix, number | BigNumber": t, "...": function(v) {
    if (oi(v)) throw new TypeError("Scalar values expected in function mean");
    return a(v);
  } });
  function t(o, v) {
    try {
      var c = fi(o, v, n), f = Array.isArray(o) ? lr(o) : o.size();
      return u(c, f[v]);
    } catch (s) {
      throw xn(s, "mean");
    }
  }
  function a(o) {
    var v, c = 0;
    if (si(o, function(f) {
      try {
        v = v === void 0 ? f : n(v, f), c++;
      } catch (s) {
        throw xn(s, "mean", f);
      }
    }), c === 0) throw new Error("Cannot calculate the mean of an empty array");
    return u(v, c);
  }
}), qe = Sa({ config: Ir }), ot = za({}), St = Pa({}), Nt = La({}), Rr = ai({ Matrix: Nt }), rr = _a({ BigNumber: qe, Complex: ot, DenseMatrix: Rr, Fraction: St }), Tt = Qi({ typed: rr }), Me = Zi({ typed: rr }), bf = Gs({ typed: rr }), zt = zi({ Complex: ot, typed: rr }), st = $o({ typed: rr }), wf = Hs({ typed: rr }), ee = yi({ config: Ir, typed: rr }), wu = Go({ typed: rr }), Cf = Ho({ typed: rr }), _f = qo({ typed: rr }), Cu = li({ typed: rr }), Bf = pi({ config: Ir, typed: rr }), _u = hi({ equalScalar: ee, typed: rr }), ye = Eo({ typed: rr }), Ot = Bi({ typed: rr }), xf = Uo({ typed: rr }), Mf = _o({ BigNumber: qe, Fraction: St, complex: zt, typed: rr }), Sf = js({ typed: rr }), fe = Ei({ Matrix: Nt, equalScalar: ee, typed: rr }), Re = Wi({ typed: rr }), Ue = Si({ BigNumber: qe, typed: rr }), j = Ri({ DenseMatrix: Rr, Matrix: Nt, SparseMatrix: fe, typed: rr }), Nf = is({ isInteger: Cu, matrix: j, typed: rr }), $t = Mo({ Complex: ot, config: Ir, typed: rr }), oe = cs({ matrix: j, typed: rr }), mr = ps({ BigNumber: qe, config: Ir, matrix: j, typed: rr }), Ae = Xo({ isInteger: Cu, matrix: j, typed: rr }), Tf = vs({ conj: st, transpose: oe, typed: rr }), zf = Jo({ DenseMatrix: Rr, SparseMatrix: fe, matrix: j, typed: rr }), Bu = Bs({ DenseMatrix: Rr, SparseMatrix: fe, concat: Ae, equalScalar: ee, matrix: j, typed: rr }), xu = Ii({ Fraction: St, typed: rr }), Pe = jo({ BigNumber: qe, DenseMatrix: Rr, SparseMatrix: fe, config: Ir, matrix: j, typed: rr }), Of = es({ matrix: j, multiplyScalar: ye, typed: rr }), $f = Us({ DenseMatrix: Rr, SparseMatrix: fe, concat: Ae, config: Ir, matrix: j, typed: rr }), If = ms({ bignumber: Ue, fraction: xu, number: Ot }), It = ss({ matrix: j, config: Ir, typed: rr }), ft = Ss({ DenseMatrix: Rr, SparseMatrix: fe, bignumber: Ue, concat: Ae, config: Ir, matrix: j, typed: rr }), ct = Yi({ typed: rr }), Wr = ef({ DenseMatrix: Rr, SparseMatrix: fe, addScalar: Me, concat: Ae, equalScalar: ee, matrix: j, typed: rr }), Fe = ys({ numeric: If, typed: rr }), qf = Ls({ DenseMatrix: Rr, smaller: ft }), Rf = Zs({ ImmutableDenseMatrix: qf, getMatrixDataType: Cf }), qt = Is({ DenseMatrix: Rr, SparseMatrix: fe, bignumber: Ue, concat: Ae, config: Ir, matrix: j, typed: rr }), Uf = Pi({ flatten: wu, matrix: j, size: It, typed: rr }), Pf = sf({ addScalar: Me, complex: zt, conj: st, divideScalar: Fe, equal: Bu, identity: Pe, isZero: _u, matrix: j, multiplyScalar: ye, sign: Mf, sqrt: $t, subtractScalar: Re, typed: rr, unaryMinus: ct, zeros: mr }), Xf = zs({ DenseMatrix: Rr, SparseMatrix: fe, concat: Ae, config: Ir, matrix: j, typed: rr }), lt = No({ DenseMatrix: Rr, concat: Ae, equalScalar: ee, matrix: j, subtractScalar: Re, typed: rr, unaryMinus: ct }), Yf = bs({ DenseMatrix: Rr, divideScalar: Fe, equalScalar: ee, matrix: j, multiplyScalar: ye, subtractScalar: Re, typed: rr }), Se = af({ addScalar: Me, conj: st, multiplyScalar: ye, size: It, typed: rr }), fr = wo({ addScalar: Me, dot: Se, equalScalar: ee, matrix: j, multiplyScalar: ye, typed: rr }), Lf = us({ bignumber: Ue, matrix: j, add: Wr, config: Ir, isPositive: Bf, larger: qt, largerEq: $f, smaller: ft, smallerEq: Xf, typed: rr }), Qf = Cs({ DenseMatrix: Rr, divideScalar: Fe, equalScalar: ee, matrix: j, multiplyScalar: ye, subtractScalar: Re, typed: rr }), Vf = Lo({ Index: Rf, matrix: j, range: Lf, typed: rr }), Ln = Vo({ matrix: j, multiply: fr, subtract: lt, typed: rr }), Zf = cf({ divideScalar: Fe, isZero: _u, matrix: j, multiply: fr, subtractScalar: Re, typed: rr, unaryMinus: ct }), Rt = vf({ abs: Tt, addScalar: Me, det: Zf, divideScalar: Fe, identity: Pe, matrix: j, multiply: fr, typed: rr, unaryMinus: ct }), Jf = Fs({ Complex: ot, config: Ir, fraction: xu, identity: Pe, inv: Rt, matrix: j, multiply: fr, number: Ot, typed: rr }), Wf = Af({ divideScalar: Fe, equalScalar: ee, inv: Rt, matrix: j, multiply: fr, typed: rr }), Gf = mf({ abs: Tt, add: Wr, addScalar: Me, atan: bf, bignumber: Ue, column: Vf, complex: zt, config: Ir, cos: wf, diag: zf, divideScalar: Fe, dot: Se, equal: Bu, flatten: wu, im: _f, inv: Rt, larger: qt, matrix: j, matrixFromColumns: Uf, multiply: fr, multiplyScalar: ye, number: Ot, qr: Pf, re: xf, reshape: Nf, sin: Sf, size: It, smaller: ft, sqrt: $t, subtract: lt, typed: rr, usolve: Yf, usolveAll: Qf }), we = Ef({ add: Wr, divide: Wf, typed: rr }), Ne = nf({ abs: Tt, add: Wr, conj: st, ctranspose: Tf, eigs: Gf, equalScalar: ee, larger: qt, matrix: j, multiply: fr, pow: Jf, smaller: ft, sqrt: $t, typed: rr });
function Kf(r) {
  if (r.length === 2) return Hf(r);
  if (r.length === 3) return kf(r);
}
function Hf(r) {
  const e = lt(r[1], r[0]), n = Ne(e), u = Se(e, [1, 0, 0]) / n, t = Se(e, [0, 1, 0]) / n, a = Se(e, [0, 0, 1]) / n, o = Math.sqrt(u ** 2 + t ** 2);
  let v = [[u, t, a], [-t / o, u / o, 0], [-u * a / o, -t * a / o, o]];
  return a === 1 && (v = [[0, 0, 1], [0, 1, 0], [-1, 0, 0]]), a === -1 && (v = [[0, 0, -1], [0, 1, 0], [1, 0, 0]]), Of(Pe(4), v).toArray();
}
function kf(r) {
  const a = [r[0], r[1], r[2]], o = mr(3, 3).toArray();
  for (let A = 0; A < 3; A++) for (let F = 0; F < 3; F++) o[A][F] = a[F][A];
  const v = [-1, 1, 0], c = [-1, 0, 1], f = mr(3, 2).toArray();
  for (let A = 0; A < 3; A++) for (let F = 0; F < 3; F++) f[A][0] += o[A][F] * v[F], f[A][1] += o[A][F] * c[F];
  const s = f.map((A) => A[0]), l = f.map((A) => A[1]);
  let d = Ln(s, l), D = Ne(d);
  if (D === 0) return console.warn("Degenerate triangle: nodes are collinear or coincident."), mr(18, 18).toArray();
  d = d.map((A) => A / D);
  const p = [...d], i = Pe(3).toArray(), h = d[0];
  let m;
  if (Math.abs(h) > 1 - 1e-10) {
    const A = d[2];
    m = i.map((F, C) => F[2] - A * d[C]);
  } else m = i.map((A, F) => A[0] - h * d[F]);
  if (D = Ne(m), D === 0) return console.warn("Degenerate local X-axis detected."), mr(18, 18).toArray();
  m = m.map((A) => A / D);
  let b = Ln(p, m);
  if (D = Ne(b), D === 0) return console.warn("Degenerate local Y-axis detected."), mr(18, 18).toArray();
  b = b.map((A) => A / D);
  const g = [m, b, p], w = mr(18, 18).toArray();
  for (let A = 0; A < 3; A++) {
    const F = A * 6, C = F + 3;
    for (let E = 0; E < 3; E++) for (let y = 0; y < 3; y++) w[F + E][F + y] = g[E][y], w[C + E][C + y] = g[E][y];
  }
  return w;
}
function jf(r, e, n) {
  if (r.length === 2) return r0(r, e, n);
  if (r.length === 3) return e0(r, e, n);
}
function r0(r, e, n) {
  var _a2, _b, _c, _d, _e2, _f2;
  const u = ((_a2 = e == null ? void 0 : e.momentsOfInertiaZ) == null ? void 0 : _a2.get(n)) ?? 0, t = ((_b = e == null ? void 0 : e.momentsOfInertiaY) == null ? void 0 : _b.get(n)) ?? 0, a = ((_c = e == null ? void 0 : e.elasticities) == null ? void 0 : _c.get(n)) ?? 0, o = ((_d = e == null ? void 0 : e.areas) == null ? void 0 : _d.get(n)) ?? 0, v = ((_e2 = e == null ? void 0 : e.shearModuli) == null ? void 0 : _e2.get(n)) ?? 0, c = ((_f2 = e == null ? void 0 : e.torsionalConstants) == null ? void 0 : _f2.get(n)) ?? 0, f = Ne(lt(r[0], r[1])), s = a * o / f, l = a * u / f ** 3, d = a * t / f ** 3, D = v * c / f;
  return [[s, 0, 0, 0, 0, 0, -s, 0, 0, 0, 0, 0], [0, 12 * l, 0, 0, 0, 6 * f * l, 0, -12 * l, 0, 0, 0, 6 * f * l], [0, 0, 12 * d, 0, -6 * f * d, 0, 0, 0, -12 * d, 0, -6 * f * d, 0], [0, 0, 0, D, 0, 0, 0, 0, 0, -D, 0, 0], [0, 0, -6 * f * d, 0, 4 * d * f ** 2, 0, 0, 0, 6 * f * d, 0, 2 * d * f ** 2, 0], [0, 6 * f * l, 0, 0, 0, 4 * l * f ** 2, 0, -6 * f * l, 0, 0, 0, 2 * l * f ** 2], [-s, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0], [0, -12 * l, 0, 0, 0, -6 * l * f, 0, 12 * l, 0, 0, 0, -6 * l * f], [0, 0, -12 * d, 0, 6 * f * d, 0, 0, 0, 12 * d, 0, 6 * f * d, 0], [0, 0, 0, -D, 0, 0, 0, 0, 0, D, 0, 0], [0, 0, -6 * f * d, 0, 2 * d * f ** 2, 0, 0, 0, 6 * f * d, 0, 4 * d * f ** 2, 0], [0, 6 * f * l, 0, 0, 0, 2 * l * f ** 2, 0, -6 * f * l, 0, 0, 0, 4 * l * f ** 2]];
}
function e0(r, e, n) {
  var _a2, _b, _c, _d, _e2;
  const u = ((_a2 = e.elasticities) == null ? void 0 : _a2.get(n)) ?? 0, t = ((_b = e.elasticitiesOrthogonal) == null ? void 0 : _b.get(n)) ?? 0, a = ((_c = e.poissonsRatios) == null ? void 0 : _c.get(n)) ?? 0, o = ((_d = e.shearModuli) == null ? void 0 : _d.get(n)) ?? 0, v = ((_e2 = e.thicknesses) == null ? void 0 : _e2.get(n)) ?? 0, c = t > 0, f = c ? x(u, t, o, a, v) : B(u, a, v), s = c ? O(o, v) : _(u, a, v), l = c ? Su(u, t, o, a) : Mu(u, a), d = r.map(([S, M]) => [S, M]), D = d[1][0] - d[0][0], p = d[2][0] - d[0][0], i = d[0][1] - d[1][1], h = d[2][1] - d[0][1], m = 0.5 * (D * h - p * -i), b = N(d), g = z(d), w = Z(d, l, v), A = fr(fr(oe(b), s), b), F = fr(fr(oe(g), f), g), C = mr(18, 18).toArray(), E = fr(Wr(A, F), m), y = [[0, 1, 5], [6, 7, 11], [12, 13, 17]];
  for (let S = 0; S < 3; S++) for (let M = 0; M < 3; M++) for (let X = 0; X < 3; X++) {
    const Q = y[S][M], T = y[X][M];
    C[Q][T] = w[S * 3 + M][X * 3 + M];
  }
  for (let S = 0; S < 18; S++) for (let M = 0; M < 18; M++) C[S][M] = (C[S][M] ?? 0) + E.get([S, M]);
  return C;
  function B(S, M, X) {
    const Q = S / (1 - M * M), T = j([[Q, Q * M, 0], [Q * M, Q, 0], [0, 0, Q * (1 - M) / 2]]);
    return fr(X ** 3 / 12, T);
  }
  function _(S, M, X) {
    const Q = 0.8333333333333334, T = S / (2 * (1 + M)), $ = Q * T * X;
    return j([[$, 0], [0, $]]);
  }
  function x(S, M, X, Q, T) {
    const $ = M * Q / S, q = 1 - Q * $, P = S / q, Y = M / q, I = Q * M / q, R = j([[P, I, 0], [I, Y, 0], [0, 0, X]]);
    return fr(T ** 3 / 12, R);
  }
  function O(S, M) {
    const Q = 0.8333333333333334 * S * M;
    return j([[Q, 0], [0, Q]]);
  }
  function N(S) {
    const M = mr(2, 18).toArray(), [X, Q] = S[0], [T, $] = S[1], [q, P] = S[2], Y = 0.5 * ((T - X) * (P - Q) - (q - X) * -(Q - $)), I = (X + T + q) / 3, L = (Q + $ + P) / 3, R = [I, X, T], J = [L, Q, $], K = [I, T, q], V = [L, $, P], H = [I, q, X], tr = [L, P, Q], k = 1 / 3, [nr, or, sr, hr] = U(R, J), [cr, vr, xr, Mr] = U(K, V), [Fr, Ur, Or, te] = U(H, tr), Nr = mr(2, 18).toArray(), Zr = mr(2, 18).toArray(), Kr = mr(2, 18).toArray();
    for (let ar = 0; ar < 2; ar++) for (let ur = 0; ur < 6; ur++) Nr[ar][ur] = k * nr[ar][ur] + or[ar][ur], Nr[ar][ur + 6] = k * nr[ar][ur] + sr[ar][ur], Nr[ar][ur + 12] = k * nr[ar][ur], Zr[ar][ur] = k * cr[ar][ur], Zr[ar][ur + 6] = k * cr[ar][ur] + vr[ar][ur], Zr[ar][ur + 12] = k * cr[ar][ur] + xr[ar][ur], Kr[ar][ur] = k * Fr[ar][ur] + Or[ar][ur], Kr[ar][ur + 6] = k * Fr[ar][ur], Kr[ar][ur + 12] = k * Fr[ar][ur] + Ur[ar][ur];
    for (let ar = 0; ar < 2; ar++) for (let ur = 0; ur < 18; ur++) Nr[ar][ur] *= hr, Zr[ar][ur] *= Mr, Kr[ar][ur] *= te, M[ar][ur] = (Nr[ar][ur] + Zr[ar][ur] + Kr[ar][ur]) / Y;
    return M;
  }
  function U(S, M) {
    const X = mr(2, 6).toArray(), Q = mr(2, 6).toArray(), T = mr(2, 6).toArray(), $ = S[1] - S[0], q = S[0] - S[2], P = M[2] - M[0], Y = M[0] - M[1], I = S[2] - S[1], L = M[1] - M[2], R = 0.5 * ($ * P - q * Y), J = 0.5 * Y * q, K = 0.5 * P * $, V = 0.5 * $ * q, H = 0.5 * Y * P;
    return X[0][2] = 0.5 * I / R, X[0][3] = -0.5, X[1][2] = 0.5 * L / R, X[1][4] = 0.5, Q[0][2] = 0.5 * q / R, Q[0][3] = 0.5 * J / R, Q[0][4] = 0.5 * V / R, Q[1][2] = 0.5 * P / R, Q[1][3] = 0.5 * H / R, Q[1][4] = 0.5 * K / R, T[0][2] = 0.5 * $ / R, T[0][3] = -0.5 * K / R, T[0][4] = -0.5 * V / R, T[1][2] = 0.5 * Y / R, T[1][3] = -0.5 * H / R, T[1][4] = -0.5 * J / R, [X, Q, T, R];
  }
  function z(S) {
    const M = mr(3, 18).toArray(), [X, Q] = S[0], [T, $] = S[1], [q, P] = S[2], Y = T - X, I = q - X, L = q - T, R = $ - P, J = P - Q, K = Q - $, V = 0.5 * (Y * J - I * -K), H = R / (2 * V), tr = L / (2 * V), k = J / (2 * V), nr = -I / (2 * V), or = K / (2 * V), sr = Y / (2 * V);
    return M[0][4] = H, M[0][10] = k, M[0][16] = or, M[1][3] = -tr, M[1][9] = -nr, M[1][15] = -sr, M[2][3] = -H, M[2][4] = tr, M[2][9] = -k, M[2][10] = nr, M[2][15] = -or, M[2][16] = sr, M;
  }
  function Z(S, M, X) {
    let Q = mr(9, 9).toArray(), T = mr(9, 9).toArray(), $ = mr(9, 9).toArray(), q = mr(9, 3).toArray(), P = mr(3, 9).toArray(), Y = mr(3, 3).toArray(), I = mr(3, 3).toArray(), L = mr(3, 3).toArray(), R = mr(3, 3).toArray(), J = mr(3, 3).toArray(), K = mr(3, 3).toArray(), V = mr(3, 3).toArray(), H = mr(3, 3).toArray();
    const tr = 1 / 8, k = tr / 6, nr = tr ** 2 / 4, or = 1, sr = 2, hr = 1, cr = 0, vr = 1, xr = -1, Mr = -1, Fr = -1, Ur = -2, Or = S[0][0], te = S[0][1], Nr = S[1][0], Zr = S[1][1], Kr = S[2][0], ar = S[2][1], ur = Or - Nr, pe = Nr - Kr, ce = Kr - Or, de = te - Zr, Ee = Zr - ar, he = ar - te, Hr = -ur, ne = -pe, ue = -ce, kr = -de, jr = -Ee, re = -he, Xe = 0.5 * (Hr * he - ce * -de), Nu = 2 * Xe, Sr = 4 * Xe, Br = 0.5 * X, Ut = Xe * X, Yr = Hr ** 2 + kr ** 2, Lr = ne ** 2 + jr ** 2, Qr = ue ** 2 + re ** 2;
    q[0][0] = Br * Ee, q[0][2] = Br * ne, q[1][1] = Br * ne, q[1][2] = Br * Ee, q[2][0] = Br * Ee * (re - kr) * k, q[2][1] = Br * ne * (ce - ur) * k, q[2][2] = Br * (ce * re - ur * kr) * 2 * k, q[3][0] = Br * he, q[3][2] = Br * ue, q[4][1] = Br * ue, q[4][2] = Br * he, q[5][0] = Br * he * (kr - jr) * k, q[5][1] = Br * ue * (ur - pe) * k, q[5][2] = Br * (ur * kr - pe * jr) * 2 * k, q[6][0] = Br * de, q[6][2] = Br * Hr, q[7][1] = Br * Hr, q[7][2] = Br * de, q[8][0] = Br * de * (jr - re) * k, q[8][1] = Br * Hr * (pe - ce) * k, q[8][2] = Br * (pe * jr - ce * re) * 2 * k, $ = fr(fr(j(q), M), oe(j(q))).toArray(), $ = fr(j($), 1 / Ut).toArray(), P[0][0] = ne / Sr, P[0][1] = jr / Sr, P[0][2] = 1, P[0][3] = ue / Sr, P[0][4] = re / Sr, P[0][6] = Hr / Sr, P[0][7] = kr / Sr, P[1][0] = ne / Sr, P[1][1] = jr / Sr, P[1][3] = ue / Sr, P[1][4] = re / Sr, P[1][5] = 1, P[1][6] = Hr / Sr, P[1][7] = kr / Sr, P[2][0] = ne / Sr, P[2][1] = jr / Sr, P[2][3] = ue / Sr, P[2][4] = re / Sr, P[2][6] = Hr / Sr, P[2][7] = kr / Sr, P[2][8] = 1;
    const ae = 1 / (Xe * Sr);
    Y[0][0] = ae * Ee * re * Yr, Y[0][1] = ae * he * kr * Lr, Y[0][2] = ae * de * jr * Qr, Y[1][0] = ae * pe * ue * Yr, Y[1][1] = ae * ce * Hr * Lr, Y[1][2] = ae * ur * ne * Qr, Y[2][0] = ae * (Ee * ce + ne * re) * Yr, Y[2][1] = ae * (he * ur + ue * kr) * Lr, Y[2][2] = ae * (de * pe + Hr * jr) * Qr;
    const gr = Nu / 3;
    I[0][0] = gr * or / Yr, I[0][1] = gr * sr / Yr, I[0][2] = gr * hr / Yr, I[1][0] = gr * cr / Lr, I[1][1] = gr * vr / Lr, I[1][2] = gr * xr / Lr, I[2][0] = gr * Mr / Qr, I[2][1] = gr * Fr / Qr, I[2][2] = gr * Ur / Qr, L[0][0] = gr * Ur / Yr, L[0][1] = gr * Mr / Yr, L[0][2] = gr * Fr / Yr, L[1][0] = gr * hr / Lr, L[1][1] = gr * or / Lr, L[1][2] = gr * sr / Lr, L[2][0] = gr * xr / Qr, L[2][1] = gr * cr / Qr, L[2][2] = gr * vr / Qr, R[0][0] = gr * vr / Yr, R[0][1] = gr * xr / Yr, R[0][2] = gr * cr / Yr, R[1][0] = gr * Fr / Lr, R[1][1] = gr * Ur / Lr, R[1][2] = gr * Mr / Lr, R[2][0] = gr * sr / Qr, R[2][1] = gr * hr / Qr, R[2][2] = gr * or / Qr, J = fr(Wr(j(I), j(L)), 0.5).toArray(), K = fr(Wr(j(L), j(R)), 0.5).toArray(), V = fr(Wr(j(R), j(I)), 0.5).toArray();
    const vt = fr(fr(oe(j(Y)), M), j(Y));
    return H = Wr(Wr(fr(fr(oe(j(J)), vt), j(J)), fr(fr(oe(j(K)), vt), j(K))), fr(fr(oe(j(V)), vt), j(V))).toArray(), H = fr(j(H), 3 / 4 * nr * Ut).toArray(), T = fr(fr(oe(j(P)), j(H)), j(P)).toArray(), Q = Wr(j($), j(T)).toArray(), Q;
  }
}
function Mu(r, e) {
  const n = r / (1 - e * e);
  return j([[n, n * e, 0], [n * e, n, 0], [0, 0, n * (1 - e) / 2]]);
}
function Su(r, e, n, u) {
  const t = e * u / r, a = 1 - u * t, o = r / a, v = e / a, c = u * e / a;
  return j([[o, c, 0], [c, v, 0], [0, 0, n]]);
}
function f0(r, e, n, u) {
  const t = { normals: /* @__PURE__ */ new Map(), shearsY: /* @__PURE__ */ new Map(), shearsZ: /* @__PURE__ */ new Map(), torsions: /* @__PURE__ */ new Map(), bendingsY: /* @__PURE__ */ new Map(), bendingsZ: /* @__PURE__ */ new Map(), bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map(), tranverseShearX: /* @__PURE__ */ new Map(), tranverseShearY: /* @__PURE__ */ new Map() }, a = { bendingXX: /* @__PURE__ */ new Map(), bendingYY: /* @__PURE__ */ new Map(), bendingXY: /* @__PURE__ */ new Map(), membraneXX: /* @__PURE__ */ new Map(), membraneYY: /* @__PURE__ */ new Map(), membraneXY: /* @__PURE__ */ new Map() };
  e.forEach((c, f) => {
    var _a2;
    if (c.length === 4) return;
    const s = c.map((p) => r[p]), l = c.reduce((p, i) => {
      var _a3;
      const h = (_a3 = u.deformations) == null ? void 0 : _a3.get(i);
      return p.concat(h ?? [0, 0, 0, 0, 0, 0]);
    }, []), d = Kf(s), D = fr(d, l);
    if (c.length === 2) {
      const p = jf(s, n, f);
      let i = fr(p, D);
      t.normals.set(f, [i[0], i[6]]), t.shearsY.set(f, [i[1], i[7]]), t.shearsZ.set(f, [i[2], i[8]]), t.torsions.set(f, [i[3], i[9]]), t.bendingsY.set(f, [i[4], i[10]]), t.bendingsZ.set(f, [i[5], i[11]]);
    } else {
      const p = t0(n, f), i = n0(s), h = u0(l), m = a0(s), g = fr(1 / (2 * m), fr(fr(p, i), h)).toArray(), w = ((_a2 = n.thicknesses) == null ? void 0 : _a2.get(f)) ?? 1, A = g[0][0] * w, F = g[1][0] * w, C = g[2][0] * w, E = g[0][1] * (w ** 3 / 12), y = g[1][1] * (w ** 3 / 12), B = g[2][1] * (w ** 3 / 12);
      a.membraneXX.set(f, A), a.membraneYY.set(f, F), a.membraneXY.set(f, C), a.bendingXX.set(f, E), a.bendingYY.set(f, y), a.bendingXY.set(f, B);
    }
  });
  const { nodeToCentroidNodesMap: o, nodeToCentroidElementIndiciesMap: v } = i0(r, e);
  return e.forEach((c, f) => {
    if (c.length !== 3) return;
    let s = [0, 0, 0], l = [0, 0, 0], d = [0, 0, 0], D = [0, 0, 0], p = [0, 0, 0], i = [0, 0, 0];
    c.forEach((h, m) => {
      o.get(h);
      const b = v.get(h) || [];
      s[m] = we(b.map((g) => a.membraneXX.get(g) ?? 0)), l[m] = we(b.map((g) => a.membraneYY.get(g) ?? 0)), d[m] = we(b.map((g) => a.membraneXY.get(g) ?? 0)), D[m] = we(b.map((g) => a.bendingXX.get(g) ?? 0)), p[m] = we(b.map((g) => a.bendingYY.get(g) ?? 0)), i[m] = we(b.map((g) => a.bendingXY.get(g) ?? 0));
    }), t.membraneXX.set(f, s), t.membraneYY.set(f, l), t.membraneXY.set(f, d), t.bendingXX.set(f, D), t.bendingYY.set(f, p), t.bendingXY.set(f, i);
  }), t;
}
function t0(r, e) {
  var _a2, _b, _c, _d, _e2;
  const n = ((_a2 = r.elasticities) == null ? void 0 : _a2.get(e)) ?? 0, u = ((_b = r.elasticitiesOrthogonal) == null ? void 0 : _b.get(e)) ?? 0, t = ((_c = r.poissonsRatios) == null ? void 0 : _c.get(e)) ?? 0, a = ((_d = r.shearModuli) == null ? void 0 : _d.get(e)) ?? 0;
  return (_e2 = r.thicknesses) == null ? void 0 : _e2.get(e), u > 0 ? Su(n, u, a, t) : Mu(n, t);
}
function n0(r) {
  const [e, n] = r[0], [u, t] = r[1], [a, o] = r[2], v = t - o, c = o - n, f = n - t, s = a - u, l = e - a, d = u - e;
  return j([[v, c, f, 0, 0, 0], [0, 0, 0, s, l, d], [s, l, d, v, c, f]]);
}
function u0(r) {
  const [e, n, u] = [r[0], r[6], r[12]], [t, a, o] = [r[1], r[7], r[13]], [v, c, f] = [r[4], r[10], r[16]], [s, l, d] = [r[3], r[9], r[15]];
  return j([[e, -v], [n, -c], [u, -f], [t, s], [a, l], [o, d]]);
}
function a0(r) {
  const [e, n] = r[0], [u, t] = r[1], [a, o] = r[2], v = u - e, c = a - e, f = o - n, s = n - t;
  return 0.5 * (v * f - c * -s);
}
function i0(r, e) {
  const n = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  return e.forEach((t, a) => {
    const o = t.map((c) => r[c]), v = o0(o);
    t.forEach((c) => {
      var _a2, _b;
      n.has(c) || n.set(c, []), (_a2 = n.get(c)) == null ? void 0 : _a2.push(v), u.has(c) || u.set(c, []), (_b = u.get(c)) == null ? void 0 : _b.push(a);
    });
  }), { nodeToCentroidNodesMap: n, nodeToCentroidElementIndiciesMap: u };
}
function o0(r) {
  const e = r.reduce((t, a) => t + a[0], 0) / r.length, n = r.reduce((t, a) => t + a[1], 0) / r.length, u = r.reduce((t, a) => t + a[2], 0) / r.length;
  return [e, n, u];
}
export {
  f0 as a,
  Kf as b,
  jf as g
};
