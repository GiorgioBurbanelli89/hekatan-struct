function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Ue.apply(null, arguments);
}
var en = { relTol: 1e-12, absTol: 1e-15, matrix: "Matrix", number: "number", numberFallback: "number", precision: 64, predictable: false, randomSeed: null };
function la(r, e) {
  if (lt(r, e)) return r[e];
  throw typeof r[e] == "function" && xi(r, e) ? new Error('Cannot access method "' + e + '" as a property') : new Error('No access to property "' + e + '"');
}
function Si(r, e, t) {
  if (lt(r, e)) return r[e] = t, t;
  throw new Error('No access to property "' + e + '"');
}
function lt(r, e) {
  return !ha(r) && !Array.isArray(r) ? false : Me(va, e) ? true : !(e in Object.prototype || e in Function.prototype);
}
function x0(r, e) {
  if (!xi(r, e)) throw new Error('No access to method "' + e + '"');
  return r[e];
}
function xi(r, e) {
  return r == null || typeof r[e] != "function" || Me(r, e) && Object.getPrototypeOf && e in Object.getPrototypeOf(r) ? false : Me(pa, e) ? true : !(e in Object.prototype || e in Function.prototype);
}
function ha(r) {
  return typeof r == "object" && r && r.constructor === Object;
}
var va = { length: true, name: true }, pa = { toString: true, valueOf: true, toLocaleString: true };
class tn {
  constructor(e) {
    this.wrappedObject = e, this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).filter((e) => this.has(e)).values();
  }
  get(e) {
    return la(this.wrappedObject, e);
  }
  set(e, t) {
    return Si(this.wrappedObject, e, t), this;
  }
  has(e) {
    return lt(this.wrappedObject, e) && e in this.wrappedObject;
  }
  entries() {
    return Ti(this.keys(), (e) => [e, this.get(e)]);
  }
  forEach(e) {
    for (var t of this.keys()) e(this.get(t), t, this);
  }
  delete(e) {
    lt(this.wrappedObject, e) && delete this.wrappedObject[e];
  }
  clear() {
    for (var e of this.keys()) this.delete(e);
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}
class T0 {
  constructor(e, t, n) {
    this.a = e, this.b = t, this.bKeys = n, this[Symbol.iterator] = this.entries;
  }
  get(e) {
    return this.bKeys.has(e) ? this.b.get(e) : this.a.get(e);
  }
  set(e, t) {
    return this.bKeys.has(e) ? this.b.set(e, t) : this.a.set(e, t), this;
  }
  has(e) {
    return this.b.has(e) || this.a.has(e);
  }
  keys() {
    return (/* @__PURE__ */ new Set([...this.a.keys(), ...this.b.keys()]))[Symbol.iterator]();
  }
  entries() {
    return Ti(this.keys(), (e) => [e, this.get(e)]);
  }
  forEach(e) {
    for (var t of this.keys()) e(this.get(t), t, this);
  }
  delete(e) {
    return this.bKeys.has(e) ? this.b.delete(e) : this.a.delete(e);
  }
  clear() {
    this.a.clear(), this.b.clear();
  }
  get size() {
    return [...this.keys()].length;
  }
}
function Ti(r, e) {
  return { next: () => {
    var t = r.next();
    return t.done ? t : { value: e(t.value), done: false };
  } };
}
function da() {
  return /* @__PURE__ */ new Map();
}
function I0(r) {
  if (!r) return da();
  if (qe(r)) return r;
  if (je(r)) return new tn(r);
  throw new Error("createMap can create maps from objects or Maps");
}
function z0(r) {
  if (r instanceof tn) return r.wrappedObject;
  var e = {};
  for (var t of r.keys()) {
    var n = r.get(t);
    Si(e, t, n);
  }
  return e;
}
function xr(r) {
  return typeof r == "number";
}
function Rr(r) {
  return !r || typeof r != "object" || typeof r.constructor != "function" ? false : r.isBigNumber === true && typeof r.constructor.prototype == "object" && r.constructor.prototype.isBigNumber === true || typeof r.constructor.isDecimal == "function" && r.constructor.isDecimal(r) === true;
}
function ma(r) {
  return typeof r == "bigint";
}
function nn(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isComplex === true || false;
}
function un(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isFraction === true || false;
}
function Ii(r) {
  return r && r.constructor.prototype.isUnit === true || false;
}
function re(r) {
  return typeof r == "string";
}
var Or = Array.isArray;
function Cr(r) {
  return r && r.constructor.prototype.isMatrix === true || false;
}
function Ke(r) {
  return Array.isArray(r) || Cr(r);
}
function zi(r) {
  return r && r.isDenseMatrix && r.constructor.prototype.isMatrix === true || false;
}
function Oi(r) {
  return r && r.isSparseMatrix && r.constructor.prototype.isMatrix === true || false;
}
function $i(r) {
  return r && r.constructor.prototype.isRange === true || false;
}
function an(r) {
  return r && r.constructor.prototype.isIndex === true || false;
}
function Da(r) {
  return typeof r == "boolean";
}
function ga(r) {
  return r && r.constructor.prototype.isResultSet === true || false;
}
function ya(r) {
  return r && r.constructor.prototype.isHelp === true || false;
}
function wa(r) {
  return typeof r == "function";
}
function Aa(r) {
  return r instanceof Date;
}
function Fa(r) {
  return r instanceof RegExp;
}
function je(r) {
  return !!(r && typeof r == "object" && r.constructor === Object && !nn(r) && !un(r));
}
function qe(r) {
  return r ? r instanceof Map || r instanceof tn || typeof r.set == "function" && typeof r.get == "function" && typeof r.keys == "function" && typeof r.has == "function" : false;
}
function O0(r) {
  return qe(r) && qe(r.a) && qe(r.b);
}
function $0(r) {
  return qe(r) && je(r.wrappedObject);
}
function Ea(r) {
  return r === null;
}
function ba(r) {
  return r === void 0;
}
function Ca(r) {
  return r && r.isAccessorNode === true && r.constructor.prototype.isNode === true || false;
}
function _a(r) {
  return r && r.isArrayNode === true && r.constructor.prototype.isNode === true || false;
}
function Ba(r) {
  return r && r.isAssignmentNode === true && r.constructor.prototype.isNode === true || false;
}
function Ma(r) {
  return r && r.isBlockNode === true && r.constructor.prototype.isNode === true || false;
}
function Na(r) {
  return r && r.isConditionalNode === true && r.constructor.prototype.isNode === true || false;
}
function Ut(r) {
  return r && r.isConstantNode === true && r.constructor.prototype.isNode === true || false;
}
function P0(r) {
  return Ut(r) || Pi(r) && r.args.length === 1 && Ut(r.args[0]) && "-+~".includes(r.op);
}
function Sa(r) {
  return r && r.isFunctionAssignmentNode === true && r.constructor.prototype.isNode === true || false;
}
function xa(r) {
  return r && r.isFunctionNode === true && r.constructor.prototype.isNode === true || false;
}
function Ta(r) {
  return r && r.isIndexNode === true && r.constructor.prototype.isNode === true || false;
}
function Ia(r) {
  return r && r.isNode === true && r.constructor.prototype.isNode === true || false;
}
function za(r) {
  return r && r.isObjectNode === true && r.constructor.prototype.isNode === true || false;
}
function Pi(r) {
  return r && r.isOperatorNode === true && r.constructor.prototype.isNode === true || false;
}
function Oa(r) {
  return r && r.isParenthesisNode === true && r.constructor.prototype.isNode === true || false;
}
function $a(r) {
  return r && r.isRangeNode === true && r.constructor.prototype.isNode === true || false;
}
function Pa(r) {
  return r && r.isRelationalNode === true && r.constructor.prototype.isNode === true || false;
}
function qa(r) {
  return r && r.isSymbolNode === true && r.constructor.prototype.isNode === true || false;
}
function Ra(r) {
  return r && r.constructor.prototype.isChain === true || false;
}
function Gr(r) {
  var e = typeof r;
  return e === "object" ? r === null ? "null" : Rr(r) ? "BigNumber" : r.constructor && r.constructor.name ? r.constructor.name : "Object" : e;
}
function yr(r) {
  var e = typeof r;
  if (e === "number" || e === "bigint" || e === "string" || e === "boolean" || r === null || r === void 0) return r;
  if (typeof r.clone == "function") return r.clone();
  if (Array.isArray(r)) return r.map(function(t) {
    return yr(t);
  });
  if (r instanceof Date) return new Date(r.valueOf());
  if (Rr(r)) return r;
  if (je(r)) return Ua(r, yr);
  if (e === "function") return r;
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(r, ")"));
}
function Ua(r, e) {
  var t = {};
  for (var n in r) Me(r, n) && (t[n] = e(r[n]));
  return t;
}
function qi(r, e) {
  for (var t in e) Me(e, t) && (r[t] = e[t]);
  return r;
}
function Ri(r, e) {
  if (Array.isArray(e)) throw new TypeError("Arrays are not supported by deepExtend");
  for (var t in e) if (Me(e, t) && !(t in Object.prototype) && !(t in Function.prototype)) if (e[t] && e[t].constructor === Object) r[t] === void 0 && (r[t] = {}), r[t] && r[t].constructor === Object ? Ri(r[t], e[t]) : r[t] = e[t];
  else {
    if (Array.isArray(e[t])) throw new TypeError("Arrays are not supported by deepExtend");
    r[t] = e[t];
  }
  return r;
}
function Fe(r, e) {
  var t, n, i;
  if (Array.isArray(r)) {
    if (!Array.isArray(e) || r.length !== e.length) return false;
    for (n = 0, i = r.length; n < i; n++) if (!Fe(r[n], e[n])) return false;
    return true;
  } else {
    if (typeof r == "function") return r === e;
    if (r instanceof Object) {
      if (Array.isArray(e) || !(e instanceof Object)) return false;
      for (t in r) if (!(t in e) || !Fe(r[t], e[t])) return false;
      for (t in e) if (!(t in r)) return false;
      return true;
    } else return r === e;
  }
}
function q0(r) {
  var e = {};
  return Ui(r, e), e;
}
function Ui(r, e) {
  for (var t in r) if (Me(r, t)) {
    var n = r[t];
    typeof n == "object" && n !== null ? Ui(n, e) : e[t] = n;
  }
}
function R0(r, e, t) {
  var n = true, i;
  Object.defineProperty(r, e, { get: function() {
    return n && (i = t(), n = false), i;
  }, set: function(a) {
    i = a, n = false;
  }, configurable: true, enumerable: true });
}
function Me(r, e) {
  return r && Object.hasOwnProperty.call(r, e);
}
function U0(r) {
  return r && typeof r.factory == "function";
}
function La(r, e) {
  for (var t = {}, n = 0; n < e.length; n++) {
    var i = e[n], u = r[i];
    u !== void 0 && (t[i] = u);
  }
  return t;
}
var Lt = ["Matrix", "Array"], Zt = ["number", "BigNumber", "Fraction"];
function L0(r, e) {
  function t(n) {
    if (n) {
      if (n.epsilon !== void 0) {
        console.warn('Warning: The configuration option "epsilon" is deprecated. Use "relTol" and "absTol" instead.');
        var i = yr(n);
        return i.relTol = n.epsilon, i.absTol = n.epsilon * 1e-3, delete i.epsilon, t(i);
      }
      var u = yr(r);
      En(n, "matrix", Lt), En(n, "number", Zt), Ri(r, n);
      var a = yr(r), o = yr(n);
      return e("config", a, u, o), a;
    } else return yr(r);
  }
  return t.MATRIX_OPTIONS = Lt, t.NUMBER_OPTIONS = Zt, Object.keys(en).forEach((n) => {
    Object.defineProperty(t, n, { get: () => r[n], enumerable: true, configurable: true });
  }), t;
}
function En(r, e, t) {
  r[e] !== void 0 && !t.includes(r[e]) && console.warn('Warning: Unknown value "' + r[e] + '" for configuration option "' + e + '". Available options: ' + t.map((n) => JSON.stringify(n)).join(", ") + ".");
}
var Kr = function(e) {
  if (e) throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(en);
};
Ue(Kr, en, { MATRIX_OPTIONS: Lt, NUMBER_OPTIONS: Zt });
function bn() {
  return true;
}
function ie() {
  return false;
}
function Oe() {
}
const Cn = "Argument is not a typed-function.";
function Li() {
  function r(E) {
    return typeof E == "object" && E !== null && E.constructor === Object;
  }
  const e = [{ name: "number", test: function(E) {
    return typeof E == "number";
  } }, { name: "string", test: function(E) {
    return typeof E == "string";
  } }, { name: "boolean", test: function(E) {
    return typeof E == "boolean";
  } }, { name: "Function", test: function(E) {
    return typeof E == "function";
  } }, { name: "Array", test: Array.isArray }, { name: "Date", test: function(E) {
    return E instanceof Date;
  } }, { name: "RegExp", test: function(E) {
    return E instanceof RegExp;
  } }, { name: "Object", test: r }, { name: "null", test: function(E) {
    return E === null;
  } }, { name: "undefined", test: function(E) {
    return E === void 0;
  } }], t = { name: "any", test: bn, isAny: true };
  let n, i, u = 0, a = { createCount: 0 };
  function o(E) {
    const S = n.get(E);
    if (S) return S;
    let I = 'Unknown type "' + E + '"';
    const $ = E.toLowerCase();
    let W;
    for (W of i) if (W.toLowerCase() === $) {
      I += '. Did you mean "' + W + '" ?';
      break;
    }
    throw new TypeError(I);
  }
  function f(E) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const I = S ? o(S).index : i.length, $ = [];
    for (let U = 0; U < E.length; ++U) {
      if (!E[U] || typeof E[U].name != "string" || typeof E[U].test != "function") throw new TypeError("Object with properties {name: string, test: function} expected");
      const ur = E[U].name;
      if (n.has(ur)) throw new TypeError('Duplicate type name "' + ur + '"');
      $.push(ur), n.set(ur, { name: ur, test: E[U].test, isAny: E[U].isAny, index: I + U, conversionsTo: [] });
    }
    const W = i.slice(I);
    i = i.slice(0, I).concat($).concat(W);
    for (let U = I + $.length; U < i.length; ++U) n.get(i[U]).index = U;
  }
  function c() {
    n = /* @__PURE__ */ new Map(), i = [], u = 0, f([t], false);
  }
  c(), f(e);
  function s() {
    let E;
    for (E of i) n.get(E).conversionsTo = [];
    u = 0;
  }
  function h(E) {
    const S = i.filter((I) => {
      const $ = n.get(I);
      return !$.isAny && $.test(E);
    });
    return S.length ? S : ["any"];
  }
  function p(E) {
    return E && typeof E == "function" && "_typedFunctionData" in E;
  }
  function v(E, S, I) {
    if (!p(E)) throw new TypeError(Cn);
    const $ = I && I.exact, W = Array.isArray(S) ? S.join(",") : S, U = C(W), ur = m(U);
    if (!$ || ur in E.signatures) {
      const Sr = E._typedFunctionData.signatureMap.get(ur);
      if (Sr) return Sr;
    }
    const K = U.length;
    let nr;
    if ($) {
      nr = [];
      let Sr;
      for (Sr in E.signatures) nr.push(E._typedFunctionData.signatureMap.get(Sr));
    } else nr = E._typedFunctionData.signatures;
    for (let Sr = 0; Sr < K; ++Sr) {
      const Ir = U[Sr], Ur = [];
      let Hr;
      for (Hr of nr) {
        const Xr = F(Hr.params, Sr);
        if (!(!Xr || Ir.restParam && !Xr.restParam)) {
          if (!Xr.hasAny) {
            const oe = g(Xr);
            if (Ir.types.some((se) => !oe.has(se.name))) continue;
          }
          Ur.push(Hr);
        }
      }
      if (nr = Ur, nr.length === 0) break;
    }
    let G;
    for (G of nr) if (G.params.length <= K) return G;
    throw new TypeError("Signature not found (signature: " + (E.name || "unnamed") + "(" + m(U, ", ") + "))");
  }
  function d(E, S, I) {
    return v(E, S, I).implementation;
  }
  function l(E, S) {
    const I = o(S);
    if (I.test(E)) return E;
    const $ = I.conversionsTo;
    if ($.length === 0) throw new Error("There are no conversions to " + S + " defined.");
    for (let W = 0; W < $.length; W++) if (o($[W].from).test(E)) return $[W].convert(E);
    throw new Error("Cannot convert " + E + " to " + S);
  }
  function m(E) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return E.map((I) => I.name).join(S);
  }
  function D(E) {
    const S = E.indexOf("...") === 0, $ = (S ? E.length > 3 ? E.slice(3) : "any" : E).split("|").map((K) => o(K.trim()));
    let W = false, U = S ? "..." : "";
    return { types: $.map(function(K) {
      return W = K.isAny || W, U += K.name + "|", { name: K.name, typeIndex: K.index, test: K.test, isAny: K.isAny, conversion: null, conversionIndex: -1 };
    }), name: U.slice(0, -1), hasAny: W, hasConversion: false, restParam: S };
  }
  function b(E) {
    const S = E.types.map((ur) => ur.name), I = Y(S);
    let $ = E.hasAny, W = E.name;
    const U = I.map(function(ur) {
      const K = o(ur.from);
      return $ = K.isAny || $, W += "|" + ur.from, { name: ur.from, typeIndex: K.index, test: K.test, isAny: K.isAny, conversion: ur, conversionIndex: ur.index };
    });
    return { types: E.types.concat(U), name: W, hasAny: $, hasConversion: U.length > 0, restParam: E.restParam };
  }
  function g(E) {
    return E.typeSet || (E.typeSet = /* @__PURE__ */ new Set(), E.types.forEach((S) => E.typeSet.add(S.name))), E.typeSet;
  }
  function C(E) {
    const S = [];
    if (typeof E != "string") throw new TypeError("Signatures must be strings");
    const I = E.trim();
    if (I === "") return S;
    const $ = I.split(",");
    for (let W = 0; W < $.length; ++W) {
      const U = D($[W].trim());
      if (U.restParam && W !== $.length - 1) throw new SyntaxError('Unexpected rest parameter "' + $[W] + '": only allowed for the last parameter');
      if (U.types.length === 0) return null;
      S.push(U);
    }
    return S;
  }
  function A(E) {
    const S = Q(E);
    return S ? S.restParam : false;
  }
  function w(E) {
    if (!E || E.types.length === 0) return bn;
    if (E.types.length === 1) return o(E.types[0].name).test;
    if (E.types.length === 2) {
      const S = o(E.types[0].name).test, I = o(E.types[1].name).test;
      return function(W) {
        return S(W) || I(W);
      };
    } else {
      const S = E.types.map(function(I) {
        return o(I.name).test;
      });
      return function($) {
        for (let W = 0; W < S.length; W++) if (S[W]($)) return true;
        return false;
      };
    }
  }
  function _(E) {
    let S, I, $;
    if (A(E)) {
      S = H(E).map(w);
      const W = S.length, U = w(Q(E)), ur = function(K) {
        for (let nr = W; nr < K.length; nr++) if (!U(K[nr])) return false;
        return true;
      };
      return function(nr) {
        for (let G = 0; G < S.length; G++) if (!S[G](nr[G])) return false;
        return ur(nr) && nr.length >= W + 1;
      };
    } else return E.length === 0 ? function(U) {
      return U.length === 0;
    } : E.length === 1 ? (I = w(E[0]), function(U) {
      return I(U[0]) && U.length === 1;
    }) : E.length === 2 ? (I = w(E[0]), $ = w(E[1]), function(U) {
      return I(U[0]) && $(U[1]) && U.length === 2;
    }) : (S = E.map(w), function(U) {
      for (let ur = 0; ur < S.length; ur++) if (!S[ur](U[ur])) return false;
      return U.length === S.length;
    });
  }
  function F(E, S) {
    return S < E.length ? E[S] : A(E) ? Q(E) : null;
  }
  function y(E, S) {
    const I = F(E, S);
    return I ? g(I) : /* @__PURE__ */ new Set();
  }
  function M(E) {
    return E.conversion === null || E.conversion === void 0;
  }
  function B(E, S) {
    const I = /* @__PURE__ */ new Set();
    return E.forEach(($) => {
      const W = y($.params, S);
      let U;
      for (U of W) I.add(U);
    }), I.has("any") ? ["any"] : Array.from(I);
  }
  function N(E, S, I) {
    let $, W;
    const U = E || "unnamed";
    let ur = I, K;
    for (K = 0; K < S.length; K++) {
      const Ir = [];
      if (ur.forEach((Ur) => {
        const Hr = F(Ur.params, K), Xr = w(Hr);
        (K < Ur.params.length || A(Ur.params)) && Xr(S[K]) && Ir.push(Ur);
      }), Ir.length === 0) {
        if (W = B(ur, K), W.length > 0) {
          const Ur = h(S[K]);
          return $ = new TypeError("Unexpected type of argument in function " + U + " (expected: " + W.join(" or ") + ", actual: " + Ur.join(" | ") + ", index: " + K + ")"), $.data = { category: "wrongType", fn: U, index: K, actual: Ur, expected: W }, $;
        }
      } else ur = Ir;
    }
    const nr = ur.map(function(Ir) {
      return A(Ir.params) ? 1 / 0 : Ir.params.length;
    });
    if (S.length < Math.min.apply(null, nr)) return W = B(ur, K), $ = new TypeError("Too few arguments in function " + U + " (expected: " + W.join(" or ") + ", index: " + S.length + ")"), $.data = { category: "tooFewArgs", fn: U, index: S.length, expected: W }, $;
    const G = Math.max.apply(null, nr);
    if (S.length > G) return $ = new TypeError("Too many arguments in function " + U + " (expected: " + G + ", actual: " + S.length + ")"), $.data = { category: "tooManyArgs", fn: U, index: S.length, expectedLength: G }, $;
    const Sr = [];
    for (let Ir = 0; Ir < S.length; ++Ir) Sr.push(h(S[Ir]).join("|"));
    return $ = new TypeError('Arguments of type "' + Sr.join(", ") + '" do not match any of the defined signatures of function ' + U + "."), $.data = { category: "mismatch", actual: Sr }, $;
  }
  function z(E) {
    let S = i.length + 1;
    for (let I = 0; I < E.types.length; I++) M(E.types[I]) && (S = Math.min(S, E.types[I].typeIndex));
    return S;
  }
  function x(E) {
    let S = u + 1;
    for (let I = 0; I < E.types.length; I++) M(E.types[I]) || (S = Math.min(S, E.types[I].conversionIndex));
    return S;
  }
  function O(E, S) {
    if (E.hasAny) {
      if (!S.hasAny) return 1;
    } else if (S.hasAny) return -1;
    if (E.restParam) {
      if (!S.restParam) return 1;
    } else if (S.restParam) return -1;
    if (E.hasConversion) {
      if (!S.hasConversion) return 1;
    } else if (S.hasConversion) return -1;
    const I = z(E) - z(S);
    if (I < 0) return -1;
    if (I > 0) return 1;
    const $ = x(E) - x(S);
    return $ < 0 ? -1 : $ > 0 ? 1 : 0;
  }
  function T(E, S) {
    const I = E.params, $ = S.params, W = Q(I), U = Q($), ur = A(I), K = A($);
    if (ur && W.hasAny) {
      if (!K || !U.hasAny) return 1;
    } else if (K && U.hasAny) return -1;
    let nr = 0, G = 0, Sr;
    for (Sr of I) Sr.hasAny && ++nr, Sr.hasConversion && ++G;
    let Ir = 0, Ur = 0;
    for (Sr of $) Sr.hasAny && ++Ir, Sr.hasConversion && ++Ur;
    if (nr !== Ir) return nr - Ir;
    if (ur && W.hasConversion) {
      if (!K || !U.hasConversion) return 1;
    } else if (K && U.hasConversion) return -1;
    if (G !== Ur) return G - Ur;
    if (ur) {
      if (!K) return 1;
    } else if (K) return -1;
    const Hr = (I.length - $.length) * (ur ? -1 : 1);
    if (Hr !== 0) return Hr;
    const Xr = [];
    let oe = 0;
    for (let ze = 0; ze < I.length; ++ze) {
      const ut = O(I[ze], $[ze]);
      Xr.push(ut), oe += ut;
    }
    if (oe !== 0) return oe;
    let se;
    for (se of Xr) if (se !== 0) return se;
    return 0;
  }
  function Y(E) {
    if (E.length === 0) return [];
    const S = E.map(o);
    E.length > 1 && S.sort((W, U) => W.index - U.index);
    let I = S[0].conversionsTo;
    if (E.length === 1) return I;
    I = I.concat([]);
    const $ = new Set(E);
    for (let W = 1; W < S.length; ++W) {
      let U;
      for (U of S[W].conversionsTo) $.has(U.from) || (I.push(U), $.add(U.from));
    }
    return I;
  }
  function q(E, S) {
    let I = S;
    if (E.some((W) => W.hasConversion)) {
      const W = A(E), U = E.map(L);
      I = function() {
        const K = [], nr = W ? arguments.length - 1 : arguments.length;
        for (let G = 0; G < nr; G++) K[G] = U[G](arguments[G]);
        return W && (K[nr] = arguments[nr].map(U[nr])), S.apply(this, K);
      };
    }
    let $ = I;
    if (A(E)) {
      const W = E.length - 1;
      $ = function() {
        return I.apply(this, X(arguments, 0, W).concat([X(arguments, W)]));
      };
    }
    return $;
  }
  function L(E) {
    let S, I, $, W;
    const U = [], ur = [];
    switch (E.types.forEach(function(K) {
      K.conversion && (U.push(o(K.conversion.from).test), ur.push(K.conversion.convert));
    }), ur.length) {
      case 0:
        return function(nr) {
          return nr;
        };
      case 1:
        return S = U[0], $ = ur[0], function(nr) {
          return S(nr) ? $(nr) : nr;
        };
      case 2:
        return S = U[0], I = U[1], $ = ur[0], W = ur[1], function(nr) {
          return S(nr) ? $(nr) : I(nr) ? W(nr) : nr;
        };
      default:
        return function(nr) {
          for (let G = 0; G < ur.length; G++) if (U[G](nr)) return ur[G](nr);
          return nr;
        };
    }
  }
  function tr(E) {
    function S(I, $, W) {
      if ($ < I.length) {
        const U = I[$];
        let ur = [];
        if (U.restParam) {
          const K = U.types.filter(M);
          K.length < U.types.length && ur.push({ types: K, name: "..." + K.map((nr) => nr.name).join("|"), hasAny: K.some((nr) => nr.isAny), hasConversion: false, restParam: true }), ur.push(U);
        } else ur = U.types.map(function(K) {
          return { types: [K], name: K.name, hasAny: K.isAny, hasConversion: K.conversion, restParam: false };
        });
        return k(ur, function(K) {
          return S(I, $ + 1, W.concat([K]));
        });
      } else return [W];
    }
    return S(E, 0, []);
  }
  function or(E, S) {
    const I = Math.max(E.length, S.length);
    for (let K = 0; K < I; K++) {
      const nr = y(E, K), G = y(S, K);
      let Sr = false, Ir;
      for (Ir of G) if (nr.has(Ir)) {
        Sr = true;
        break;
      }
      if (!Sr) return false;
    }
    const $ = E.length, W = S.length, U = A(E), ur = A(S);
    return U ? ur ? $ === W : W >= $ : ur ? $ >= W : $ === W;
  }
  function R(E) {
    return E.map((S) => Ar(S) ? mr(S.referToSelf.callback) : gr(S) ? dr(S.referTo.references, S.referTo.callback) : S);
  }
  function Z(E, S, I) {
    const $ = [];
    let W;
    for (W of E) {
      let U = I[W];
      if (typeof U != "number") throw new TypeError('No definition for referenced signature "' + W + '"');
      if (U = S[U], typeof U != "function") return false;
      $.push(U);
    }
    return $;
  }
  function er(E, S, I) {
    const $ = R(E), W = new Array($.length).fill(false);
    let U = true;
    for (; U; ) {
      U = false;
      let ur = true;
      for (let K = 0; K < $.length; ++K) {
        if (W[K]) continue;
        const nr = $[K];
        if (Ar(nr)) $[K] = nr.referToSelf.callback(I), $[K].referToSelf = nr.referToSelf, W[K] = true, ur = false;
        else if (gr(nr)) {
          const G = Z(nr.referTo.references, $, S);
          G ? ($[K] = nr.referTo.callback.apply(this, G), $[K].referTo = nr.referTo, W[K] = true, ur = false) : U = true;
        }
      }
      if (ur && U) throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return $;
  }
  function ar(E) {
    const S = /\bthis(\(|\.signatures\b)/;
    Object.keys(E).forEach((I) => {
      const $ = E[I];
      if (S.test($.toString())) throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function j(E, S) {
    if (a.createCount++, Object.keys(S).length === 0) throw new SyntaxError("No signatures provided");
    a.warnAgainstDeprecatedThis && ar(S);
    const I = [], $ = [], W = {}, U = [];
    let ur;
    for (ur in S) {
      if (!Object.prototype.hasOwnProperty.call(S, ur)) continue;
      const Br = C(ur);
      if (!Br) continue;
      I.forEach(function(Ge) {
        if (or(Ge, Br)) throw new TypeError('Conflicting signatures "' + m(Ge) + '" and "' + m(Br) + '".');
      }), I.push(Br);
      const kr = $.length;
      $.push(S[ur]);
      const fa = Br.map(b);
      let at;
      for (at of tr(fa)) {
        const Ge = m(at);
        U.push({ params: at, name: Ge, fn: kr }), at.every((ca) => !ca.hasConversion) && (W[Ge] = kr);
      }
    }
    U.sort(T);
    const K = er($, W, Xe);
    let nr;
    for (nr in W) Object.prototype.hasOwnProperty.call(W, nr) && (W[nr] = K[W[nr]]);
    const G = [], Sr = /* @__PURE__ */ new Map();
    for (nr of U) Sr.has(nr.name) || (nr.fn = K[nr.fn], G.push(nr), Sr.set(nr.name, nr));
    const Ir = G[0] && G[0].params.length <= 2 && !A(G[0].params), Ur = G[1] && G[1].params.length <= 2 && !A(G[1].params), Hr = G[2] && G[2].params.length <= 2 && !A(G[2].params), Xr = G[3] && G[3].params.length <= 2 && !A(G[3].params), oe = G[4] && G[4].params.length <= 2 && !A(G[4].params), se = G[5] && G[5].params.length <= 2 && !A(G[5].params), ze = Ir && Ur && Hr && Xr && oe && se;
    for (let Br = 0; Br < G.length; ++Br) G[Br].test = _(G[Br].params);
    const ut = Ir ? w(G[0].params[0]) : ie, Ou = Ur ? w(G[1].params[0]) : ie, $u = Hr ? w(G[2].params[0]) : ie, Pu = Xr ? w(G[3].params[0]) : ie, qu = oe ? w(G[4].params[0]) : ie, Ru = se ? w(G[5].params[0]) : ie, Uu = Ir ? w(G[0].params[1]) : ie, Lu = Ur ? w(G[1].params[1]) : ie, Zu = Hr ? w(G[2].params[1]) : ie, Vu = Xr ? w(G[3].params[1]) : ie, Wu = oe ? w(G[4].params[1]) : ie, Ju = se ? w(G[5].params[1]) : ie;
    for (let Br = 0; Br < G.length; ++Br) G[Br].implementation = q(G[Br].params, G[Br].fn);
    const Yu = Ir ? G[0].implementation : Oe, Qu = Ur ? G[1].implementation : Oe, Xu = Hr ? G[2].implementation : Oe, Gu = Xr ? G[3].implementation : Oe, Ku = oe ? G[4].implementation : Oe, Hu = se ? G[5].implementation : Oe, ku = Ir ? G[0].params.length : -1, ju = Ur ? G[1].params.length : -1, ra = Hr ? G[2].params.length : -1, ea = Xr ? G[3].params.length : -1, ta = oe ? G[4].params.length : -1, na = se ? G[5].params.length : -1, ia = ze ? 6 : 0, ua = G.length, aa = G.map((Br) => Br.test), oa = G.map((Br) => Br.implementation), sa = function() {
      for (let kr = ia; kr < ua; kr++) if (aa[kr](arguments)) return oa[kr].apply(this, arguments);
      return a.onMismatch(E, arguments, G);
    };
    function Xe(Br, kr) {
      return arguments.length === ku && ut(Br) && Uu(kr) ? Yu.apply(this, arguments) : arguments.length === ju && Ou(Br) && Lu(kr) ? Qu.apply(this, arguments) : arguments.length === ra && $u(Br) && Zu(kr) ? Xu.apply(this, arguments) : arguments.length === ea && Pu(Br) && Vu(kr) ? Gu.apply(this, arguments) : arguments.length === ta && qu(Br) && Wu(kr) ? Ku.apply(this, arguments) : arguments.length === na && Ru(Br) && Ju(kr) ? Hu.apply(this, arguments) : sa.apply(this, arguments);
    }
    try {
      Object.defineProperty(Xe, "name", { value: E });
    } catch {
    }
    return Xe.signatures = W, Xe._typedFunctionData = { signatures: G, signatureMap: Sr }, Xe;
  }
  function J(E, S, I) {
    throw N(E, S, I);
  }
  function H(E) {
    return X(E, 0, E.length - 1);
  }
  function Q(E) {
    return E[E.length - 1];
  }
  function X(E, S, I) {
    return Array.prototype.slice.call(E, S, I);
  }
  function sr(E, S) {
    for (let I = 0; I < E.length; I++) if (S(E[I])) return E[I];
  }
  function k(E, S) {
    return Array.prototype.concat.apply([], E.map(S));
  }
  function hr() {
    const E = H(arguments).map((I) => m(C(I))), S = Q(arguments);
    if (typeof S != "function") throw new TypeError("Callback function expected as last argument");
    return dr(E, S);
  }
  function dr(E, S) {
    return { referTo: { references: E, callback: S } };
  }
  function mr(E) {
    if (typeof E != "function") throw new TypeError("Callback function expected as first argument");
    return { referToSelf: { callback: E } };
  }
  function gr(E) {
    return E && typeof E.referTo == "object" && Array.isArray(E.referTo.references) && typeof E.referTo.callback == "function";
  }
  function Ar(E) {
    return E && typeof E.referToSelf == "object" && typeof E.referToSelf.callback == "function";
  }
  function Er(E, S) {
    if (!E) return S;
    if (S && S !== E) {
      const I = new Error("Function names do not match (expected: " + E + ", actual: " + S + ")");
      throw I.data = { actual: S, expected: E }, I;
    }
    return E;
  }
  function zr(E) {
    let S;
    for (const I in E) Object.prototype.hasOwnProperty.call(E, I) && (p(E[I]) || typeof E[I].signature == "string") && (S = Er(S, E[I].name));
    return S;
  }
  function _r(E, S) {
    let I;
    for (I in S) if (Object.prototype.hasOwnProperty.call(S, I)) {
      if (I in E && S[I] !== E[I]) {
        const $ = new Error('Signature "' + I + '" is defined twice');
        throw $.data = { signature: I, sourceFunction: S[I], destFunction: E[I] }, $;
      }
      E[I] = S[I];
    }
  }
  const Nr = a;
  a = function(E) {
    const S = typeof E == "string", I = S ? 1 : 0;
    let $ = S ? E : "";
    const W = {};
    for (let U = I; U < arguments.length; ++U) {
      const ur = arguments[U];
      let K = {}, nr;
      if (typeof ur == "function" ? (nr = ur.name, typeof ur.signature == "string" ? K[ur.signature] = ur : p(ur) && (K = ur.signatures)) : r(ur) && (K = ur, S || (nr = zr(ur))), Object.keys(K).length === 0) {
        const G = new TypeError("Argument to 'typed' at index " + U + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw G.data = { index: U, argument: ur }, G;
      }
      S || ($ = Er($, nr)), _r(W, K);
    }
    return j($ || "", W);
  }, a.create = Li, a.createCount = Nr.createCount, a.onMismatch = J, a.throwMismatchError = J, a.createError = N, a.clear = c, a.clearConversions = s, a.addTypes = f, a._findType = o, a.referTo = hr, a.referToSelf = mr, a.convert = l, a.findSignature = v, a.find = d, a.isTypedFunction = p, a.warnAgainstDeprecatedThis = true, a.addType = function(E, S) {
    let I = "any";
    S !== false && n.has("Object") && (I = "Object"), a.addTypes([E], I);
  };
  function Jr(E) {
    if (!E || typeof E.from != "string" || typeof E.to != "string" || typeof E.convert != "function") throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (E.to === E.from) throw new SyntaxError('Illegal to define conversion from "' + E.from + '" to itself.');
  }
  return a.addConversion = function(E) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { override: false };
    Jr(E);
    const I = o(E.to), $ = I.conversionsTo.find((W) => W.from === E.from);
    if ($) if (S && S.override) a.removeConversion({ from: $.from, to: E.to, convert: $.convert });
    else throw new Error('There is already a conversion from "' + E.from + '" to "' + I.name + '"');
    I.conversionsTo.push({ from: E.from, convert: E.convert, index: u++ });
  }, a.addConversions = function(E, S) {
    E.forEach((I) => a.addConversion(I, S));
  }, a.removeConversion = function(E) {
    Jr(E);
    const S = o(E.to), I = sr(S.conversionsTo, (W) => W.from === E.from);
    if (!I) throw new Error("Attempt to remove nonexistent conversion from " + E.from + " to " + E.to);
    if (I.convert !== E.convert) throw new Error("Conversion to remove does not match existing conversion");
    const $ = S.conversionsTo.indexOf(I);
    S.conversionsTo.splice($, 1);
  }, a.resolve = function(E, S) {
    if (!p(E)) throw new TypeError(Cn);
    const I = E._typedFunctionData.signatures;
    for (let $ = 0; $ < I.length; ++$) if (I[$].test(S)) return I[$];
    return null;
  }, a;
}
const ht = Li();
function rr(r, e, t, n) {
  function i(u) {
    var a = La(u, e.map(Wa));
    return Za(r, e, u), t(a);
  }
  return i.isFactory = true, i.fn = r, i.dependencies = e.slice().sort(), n && (i.meta = n), i;
}
function Z0(r) {
  return typeof r == "function" && typeof r.fn == "string" && Array.isArray(r.dependencies);
}
function Za(r, e, t) {
  var n = e.filter((u) => !Va(u)).every((u) => t[u] !== void 0);
  if (!n) {
    var i = e.filter((u) => t[u] === void 0);
    throw new Error('Cannot create function "'.concat(r, '", ') + "some dependencies are missing: ".concat(i.map((u) => '"'.concat(u, '"')).join(", "), "."));
  }
}
function Va(r) {
  return r && r[0] === "?";
}
function Wa(r) {
  return r && r[0] === "?" ? r.slice(1) : r;
}
function br(r) {
  return typeof r == "boolean" ? true : isFinite(r) ? r === Math.round(r) : false;
}
function V0(r, e) {
  if (e.number === "bigint") try {
    BigInt(r);
  } catch {
    return e.numberFallback;
  }
  return e.number;
}
var Ja = Math.sign || function(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
}, Ya = Math.log2 || function(e) {
  return Math.log(e) / Math.LN2;
}, Qa = Math.log10 || function(e) {
  return Math.log(e) / Math.LN10;
}, W0 = Math.log1p || function(r) {
  return Math.log(r + 1);
}, Xa = Math.cbrt || function(e) {
  if (e === 0) return e;
  var t = e < 0, n;
  return t && (e = -e), isFinite(e) ? (n = Math.exp(Math.log(e) / 3), n = (e / (n * n) + 2 * n) / 3) : n = e, t ? -n : n;
}, Ga = Math.expm1 || function(e) {
  return e >= 2e-4 || e <= -2e-4 ? Math.exp(e) - 1 : e + e * e / 2 + e * e * e / 6;
};
function $t(r, e, t) {
  var n = { 2: "0b", 8: "0o", 16: "0x" }, i = n[e], u = "";
  if (t) {
    if (t < 1) throw new Error("size must be in greater than 0");
    if (!br(t)) throw new Error("size must be an integer");
    if (r > 2 ** (t - 1) - 1 || r < -(2 ** (t - 1))) throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
    if (!br(r)) throw new Error("Value must be an integer");
    r < 0 && (r = r + 2 ** t), u = "i".concat(t);
  }
  var a = "";
  return r < 0 && (r = -r, a = "-"), "".concat(a).concat(i).concat(r.toString(e)).concat(u);
}
function Vt(r, e) {
  if (typeof e == "function") return e(r);
  if (r === 1 / 0) return "Infinity";
  if (r === -1 / 0) return "-Infinity";
  if (isNaN(r)) return "NaN";
  var { notation: t, precision: n, wordSize: i } = Zi(e);
  switch (t) {
    case "fixed":
      return Vi(r, n);
    case "exponential":
      return Wi(r, n);
    case "engineering":
      return Ka(r, n);
    case "bin":
      return $t(r, 2, i);
    case "oct":
      return $t(r, 8, i);
    case "hex":
      return $t(r, 16, i);
    case "auto":
      return Ha(r, n, e).replace(/((\.\d*?)(0+))($|e)/, function() {
        var u = arguments[2], a = arguments[4];
        return u !== "." ? u + a : a;
      });
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Zi(r) {
  var e = "auto", t, n;
  if (r !== void 0) if (xr(r)) t = r;
  else if (Rr(r)) t = r.toNumber();
  else if (je(r)) r.precision !== void 0 && (t = _n(r.precision, () => {
    throw new Error('Option "precision" must be a number or BigNumber');
  })), r.wordSize !== void 0 && (n = _n(r.wordSize, () => {
    throw new Error('Option "wordSize" must be a number or BigNumber');
  })), r.notation && (e = r.notation);
  else throw new Error("Unsupported type of options, number, BigNumber, or object expected");
  return { notation: e, precision: t, wordSize: n };
}
function Ct(r) {
  var e = String(r).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
  if (!e) throw new SyntaxError("Invalid number " + r);
  var t = e[1], n = e[2], i = parseFloat(e[4] || "0"), u = n.indexOf(".");
  i += u !== -1 ? u - 1 : n.length - 1;
  var a = n.replace(".", "").replace(/^0*/, function(o) {
    return i -= o.length, "";
  }).replace(/0*$/, "").split("").map(function(o) {
    return parseInt(o);
  });
  return a.length === 0 && (a.push(0), i++), { sign: t, coefficients: a, exponent: i };
}
function Ka(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var t = Ct(r), n = _t(t, e), i = n.exponent, u = n.coefficients, a = i % 3 === 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3;
  if (xr(e)) for (; e > u.length || i - a + 1 > u.length; ) u.push(0);
  else for (var o = Math.abs(i - a) - (u.length - 1), f = 0; f < o; f++) u.push(0);
  for (var c = Math.abs(i - a), s = 1; c > 0; ) s++, c--;
  var h = u.slice(s).join(""), p = xr(e) && h.length || h.match(/[1-9]/) ? "." + h : "", v = u.slice(0, s).join("") + p + "e" + (i >= 0 ? "+" : "") + a.toString();
  return n.sign + v;
}
function Vi(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var t = Ct(r), n = typeof e == "number" ? _t(t, t.exponent + 1 + e) : t, i = n.coefficients, u = n.exponent + 1, a = u + (e || 0);
  return i.length < a && (i = i.concat(Re(a - i.length))), u < 0 && (i = Re(-u + 1).concat(i), u = 1), u < i.length && i.splice(u, 0, u === 0 ? "0." : "."), n.sign + i.join("");
}
function Wi(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var t = Ct(r), n = e ? _t(t, e) : t, i = n.coefficients, u = n.exponent;
  i.length < e && (i = i.concat(Re(e - i.length)));
  var a = i.shift();
  return n.sign + a + (i.length > 0 ? "." + i.join("") : "") + "e" + (u >= 0 ? "+" : "") + u;
}
function Ha(r, e, t) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var n = Bn(t == null ? void 0 : t.lowerExp, -3), i = Bn(t == null ? void 0 : t.upperExp, 5), u = Ct(r), a = e ? _t(u, e) : u;
  if (a.exponent < n || a.exponent >= i) return Wi(r, e);
  var o = a.coefficients, f = a.exponent;
  o.length < e && (o = o.concat(Re(e - o.length))), o = o.concat(Re(f - o.length + 1 + (o.length < e ? e - o.length : 0))), o = Re(-f).concat(o);
  var c = f > 0 ? f : 0;
  return c < o.length - 1 && o.splice(c + 1, 0, "."), a.sign + o.join("");
}
function _t(r, e) {
  for (var t = { sign: r.sign, coefficients: r.coefficients, exponent: r.exponent }, n = t.coefficients; e <= 0; ) n.unshift(0), t.exponent++, e++;
  if (n.length > e) {
    var i = n.splice(e, n.length - e);
    if (i[0] >= 5) {
      var u = e - 1;
      for (n[u]++; n[u] === 10; ) n.pop(), u === 0 && (n.unshift(0), t.exponent++, u++), u--, n[u]++;
    }
  }
  return t;
}
function Re(r) {
  for (var e = [], t = 0; t < r; t++) e.push(0);
  return e;
}
function ka(r) {
  return r.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
function De(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-8, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (t <= 0) throw new Error("Relative tolerance must be greater than 0");
  if (n < 0) throw new Error("Absolute tolerance must be at least 0");
  return isNaN(r) || isNaN(e) ? false : !isFinite(r) || !isFinite(e) ? r === e : r === e ? true : Math.abs(r - e) <= Math.max(t * Math.max(Math.abs(r), Math.abs(e)), n);
}
var J0 = Math.acosh || function(r) {
  return Math.log(Math.sqrt(r * r - 1) + r);
}, Y0 = Math.asinh || function(r) {
  return Math.log(Math.sqrt(r * r + 1) + r);
}, Q0 = Math.atanh || function(r) {
  return Math.log((1 + r) / (1 - r)) / 2;
}, X0 = Math.cosh || function(r) {
  return (Math.exp(r) + Math.exp(-r)) / 2;
}, G0 = Math.sinh || function(r) {
  return (Math.exp(r) - Math.exp(-r)) / 2;
}, K0 = Math.tanh || function(r) {
  var e = Math.exp(2 * r);
  return (e - 1) / (e + 1);
};
function H0(r, e) {
  var t = true, n = e > 0 ? true : e < 0 ? false : 1 / e === 1 / 0;
  return t ^ n ? -6.283185307179586 : r;
}
function _n(r, e) {
  if (xr(r)) return r;
  if (Rr(r)) return r.toNumber();
  e();
}
function Bn(r, e) {
  return xr(r) ? r : Rr(r) ? r.toNumber() : e;
}
var Ji = function() {
  return Ji = ht.create, ht;
}, ja = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], ro = rr("typed", ja, function(e) {
  var { BigNumber: t, Complex: n, DenseMatrix: i, Fraction: u } = e, a = Ji();
  return a.clear(), a.addTypes([{ name: "number", test: xr }, { name: "Complex", test: nn }, { name: "BigNumber", test: Rr }, { name: "bigint", test: ma }, { name: "Fraction", test: un }, { name: "Unit", test: Ii }, { name: "identifier", test: (o) => re && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(o) }, { name: "string", test: re }, { name: "Chain", test: Ra }, { name: "Array", test: Or }, { name: "Matrix", test: Cr }, { name: "DenseMatrix", test: zi }, { name: "SparseMatrix", test: Oi }, { name: "Range", test: $i }, { name: "Index", test: an }, { name: "boolean", test: Da }, { name: "ResultSet", test: ga }, { name: "Help", test: ya }, { name: "function", test: wa }, { name: "Date", test: Aa }, { name: "RegExp", test: Fa }, { name: "null", test: Ea }, { name: "undefined", test: ba }, { name: "AccessorNode", test: Ca }, { name: "ArrayNode", test: _a }, { name: "AssignmentNode", test: Ba }, { name: "BlockNode", test: Ma }, { name: "ConditionalNode", test: Na }, { name: "ConstantNode", test: Ut }, { name: "FunctionNode", test: xa }, { name: "FunctionAssignmentNode", test: Sa }, { name: "IndexNode", test: Ta }, { name: "Node", test: Ia }, { name: "ObjectNode", test: za }, { name: "OperatorNode", test: Pi }, { name: "ParenthesisNode", test: Oa }, { name: "RangeNode", test: $a }, { name: "RelationalNode", test: Pa }, { name: "SymbolNode", test: qa }, { name: "Map", test: qe }, { name: "Object", test: je }]), a.addConversions([{ from: "number", to: "BigNumber", convert: function(f) {
    if (t || ot(f), ka(f) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + f + "). Use function bignumber(x) to convert to BigNumber.");
    return new t(f);
  } }, { from: "number", to: "Complex", convert: function(f) {
    return n || st(f), new n(f, 0);
  } }, { from: "BigNumber", to: "Complex", convert: function(f) {
    return n || st(f), new n(f.toNumber(), 0);
  } }, { from: "bigint", to: "number", convert: function(f) {
    if (f > Number.MAX_SAFE_INTEGER) throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: " + f + ")");
    return Number(f);
  } }, { from: "bigint", to: "BigNumber", convert: function(f) {
    return t || ot(f), new t(f.toString());
  } }, { from: "bigint", to: "Fraction", convert: function(f) {
    return u || ft(f), new u(f);
  } }, { from: "Fraction", to: "BigNumber", convert: function(f) {
    throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
  } }, { from: "Fraction", to: "Complex", convert: function(f) {
    return n || st(f), new n(f.valueOf(), 0);
  } }, { from: "number", to: "Fraction", convert: function(f) {
    u || ft(f);
    var c = new u(f);
    if (c.valueOf() !== f) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + f + "). Use function fraction(x) to convert to Fraction.");
    return c;
  } }, { from: "string", to: "number", convert: function(f) {
    var c = Number(f);
    if (isNaN(c)) throw new Error('Cannot convert "' + f + '" to a number');
    return c;
  } }, { from: "string", to: "BigNumber", convert: function(f) {
    t || ot(f);
    try {
      return new t(f);
    } catch {
      throw new Error('Cannot convert "' + f + '" to BigNumber');
    }
  } }, { from: "string", to: "bigint", convert: function(f) {
    try {
      return BigInt(f);
    } catch {
      throw new Error('Cannot convert "' + f + '" to BigInt');
    }
  } }, { from: "string", to: "Fraction", convert: function(f) {
    u || ft(f);
    try {
      return new u(f);
    } catch {
      throw new Error('Cannot convert "' + f + '" to Fraction');
    }
  } }, { from: "string", to: "Complex", convert: function(f) {
    n || st(f);
    try {
      return new n(f);
    } catch {
      throw new Error('Cannot convert "' + f + '" to Complex');
    }
  } }, { from: "boolean", to: "number", convert: function(f) {
    return +f;
  } }, { from: "boolean", to: "BigNumber", convert: function(f) {
    return t || ot(f), new t(+f);
  } }, { from: "boolean", to: "bigint", convert: function(f) {
    return BigInt(+f);
  } }, { from: "boolean", to: "Fraction", convert: function(f) {
    return u || ft(f), new u(+f);
  } }, { from: "boolean", to: "string", convert: function(f) {
    return String(f);
  } }, { from: "Array", to: "Matrix", convert: function(f) {
    return i || eo(), new i(f);
  } }, { from: "Matrix", to: "Array", convert: function(f) {
    return f.valueOf();
  } }]), a.onMismatch = (o, f, c) => {
    var s = a.createError(o, f, c);
    if (["wrongType", "mismatch"].includes(s.data.category) && f.length === 1 && Ke(f[0]) && c.some((p) => !p.params.includes(","))) {
      var h = new TypeError("Function '".concat(o, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(o, ")'."));
      throw h.data = s.data, h;
    }
    throw s;
  }, a.onMismatch = (o, f, c) => {
    var s = a.createError(o, f, c);
    if (["wrongType", "mismatch"].includes(s.data.category) && f.length === 1 && Ke(f[0]) && c.some((p) => !p.params.includes(","))) {
      var h = new TypeError("Function '".concat(o, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(o, ")'."));
      throw h.data = s.data, h;
    }
    throw s;
  }, a;
});
function ot(r) {
  throw new Error("Cannot convert value ".concat(r, " into a BigNumber: no class 'BigNumber' provided"));
}
function st(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Complex number: no class 'Complex' provided"));
}
function eo() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function ft(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Fraction, no class 'Fraction' provided."));
}
/*!
*  decimal.js v10.4.3
*  An arbitrary-precision Decimal type for JavaScript.
*  https://github.com/MikeMcl/decimal.js
*  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
*  MIT Licence
*/
var Wt = 9e15, be = 1e9, Jt = "0123456789abcdef", vt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", pt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Yt = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: Wt, crypto: false }, Yi, me, pr = true, Bt = "[DecimalError] ", Ee = Bt + "Invalid argument: ", Qi = Bt + "Precision limit exceeded", Xi = Bt + "crypto unavailable", Gi = "[object Decimal]", Qr = Math.floor, Lr = Math.pow, to = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, no = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, io = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ki = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, le = 1e7, vr = 7, uo = 9007199254740991, ao = vt.length - 1, Qt = pt.length - 1, V = { toStringTag: Gi };
V.absoluteValue = V.abs = function() {
  var r = new this.constructor(this);
  return r.s < 0 && (r.s = 1), lr(r);
};
V.ceil = function() {
  return lr(new this.constructor(this), this.e + 1, 2);
};
V.clampedTo = V.clamp = function(r, e) {
  var t, n = this, i = n.constructor;
  if (r = new i(r), e = new i(e), !r.s || !e.s) return new i(NaN);
  if (r.gt(e)) throw Error(Ee + e);
  return t = n.cmp(r), t < 0 ? r : n.cmp(e) > 0 ? e : new i(n);
};
V.comparedTo = V.cmp = function(r) {
  var e, t, n, i, u = this, a = u.d, o = (r = new u.constructor(r)).d, f = u.s, c = r.s;
  if (!a || !o) return !f || !c ? NaN : f !== c ? f : a === o ? 0 : !a ^ f < 0 ? 1 : -1;
  if (!a[0] || !o[0]) return a[0] ? f : o[0] ? -c : 0;
  if (f !== c) return f;
  if (u.e !== r.e) return u.e > r.e ^ f < 0 ? 1 : -1;
  for (n = a.length, i = o.length, e = 0, t = n < i ? n : i; e < t; ++e) if (a[e] !== o[e]) return a[e] > o[e] ^ f < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ f < 0 ? 1 : -1;
};
V.cosine = V.cos = function() {
  var r, e, t = this, n = t.constructor;
  return t.d ? t.d[0] ? (r = n.precision, e = n.rounding, n.precision = r + Math.max(t.e, t.sd()) + vr, n.rounding = 1, t = oo(n, eu(n, t)), n.precision = r, n.rounding = e, lr(me == 2 || me == 3 ? t.neg() : t, r, e, true)) : new n(1) : new n(NaN);
};
V.cubeRoot = V.cbrt = function() {
  var r, e, t, n, i, u, a, o, f, c, s = this, h = s.constructor;
  if (!s.isFinite() || s.isZero()) return new h(s);
  for (pr = false, u = s.s * Lr(s.s * s, 1 / 3), !u || Math.abs(u) == 1 / 0 ? (t = Wr(s.d), r = s.e, (u = (r - t.length + 1) % 3) && (t += u == 1 || u == -2 ? "0" : "00"), u = Lr(t, 1 / 3), r = Qr((r + 1) / 3) - (r % 3 == (r < 0 ? -1 : 2)), u == 1 / 0 ? t = "5e" + r : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + r), n = new h(t), n.s = s.s) : n = new h(u.toString()), a = (r = h.precision) + 3; ; ) if (o = n, f = o.times(o).times(o), c = f.plus(s), n = Tr(c.plus(s).times(o), c.plus(f), a + 2, 1), Wr(o.d).slice(0, a) === (t = Wr(n.d)).slice(0, a)) if (t = t.slice(a - 3, a + 1), t == "9999" || !i && t == "4999") {
    if (!i && (lr(o, r + 1, 0), o.times(o).times(o).eq(s))) {
      n = o;
      break;
    }
    a += 4, i = 1;
  } else {
    (!+t || !+t.slice(1) && t.charAt(0) == "5") && (lr(n, r + 1, 1), e = !n.times(n).times(n).eq(s));
    break;
  }
  return pr = true, lr(n, r, h.rounding, e);
};
V.decimalPlaces = V.dp = function() {
  var r, e = this.d, t = NaN;
  if (e) {
    if (r = e.length - 1, t = (r - Qr(this.e / vr)) * vr, r = e[r], r) for (; r % 10 == 0; r /= 10) t--;
    t < 0 && (t = 0);
  }
  return t;
};
V.dividedBy = V.div = function(r) {
  return Tr(this, new this.constructor(r));
};
V.dividedToIntegerBy = V.divToInt = function(r) {
  var e = this, t = e.constructor;
  return lr(Tr(e, new t(r), 0, 1, 1), t.precision, t.rounding);
};
V.equals = V.eq = function(r) {
  return this.cmp(r) === 0;
};
V.floor = function() {
  return lr(new this.constructor(this), this.e + 1, 3);
};
V.greaterThan = V.gt = function(r) {
  return this.cmp(r) > 0;
};
V.greaterThanOrEqualTo = V.gte = function(r) {
  var e = this.cmp(r);
  return e == 1 || e === 0;
};
V.hyperbolicCosine = V.cosh = function() {
  var r, e, t, n, i, u = this, a = u.constructor, o = new a(1);
  if (!u.isFinite()) return new a(u.s ? 1 / 0 : NaN);
  if (u.isZero()) return o;
  t = a.precision, n = a.rounding, a.precision = t + Math.max(u.e, u.sd()) + 4, a.rounding = 1, i = u.d.length, i < 32 ? (r = Math.ceil(i / 3), e = (1 / Nt(4, r)).toString()) : (r = 16, e = "2.3283064365386962890625e-10"), u = Le(a, 1, u.times(e), new a(1), true);
  for (var f, c = r, s = new a(8); c--; ) f = u.times(u), u = o.minus(f.times(s.minus(f.times(s))));
  return lr(u, a.precision = t, a.rounding = n, true);
};
V.hyperbolicSine = V.sinh = function() {
  var r, e, t, n, i = this, u = i.constructor;
  if (!i.isFinite() || i.isZero()) return new u(i);
  if (e = u.precision, t = u.rounding, u.precision = e + Math.max(i.e, i.sd()) + 4, u.rounding = 1, n = i.d.length, n < 3) i = Le(u, 2, i, i, true);
  else {
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, i = i.times(1 / Nt(5, r)), i = Le(u, 2, i, i, true);
    for (var a, o = new u(5), f = new u(16), c = new u(20); r--; ) a = i.times(i), i = i.times(o.plus(a.times(f.times(a).plus(c))));
  }
  return u.precision = e, u.rounding = t, lr(i, e, t, true);
};
V.hyperbolicTangent = V.tanh = function() {
  var r, e, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, e = n.rounding, n.precision = r + 7, n.rounding = 1, Tr(t.sinh(), t.cosh(), n.precision = r, n.rounding = e)) : new n(t.s);
};
V.inverseCosine = V.acos = function() {
  var r, e = this, t = e.constructor, n = e.abs().cmp(1), i = t.precision, u = t.rounding;
  return n !== -1 ? n === 0 ? e.isNeg() ? ce(t, i, u) : new t(0) : new t(NaN) : e.isZero() ? ce(t, i + 4, u).times(0.5) : (t.precision = i + 6, t.rounding = 1, e = e.asin(), r = ce(t, i + 4, u).times(0.5), t.precision = i, t.rounding = u, r.minus(e));
};
V.inverseHyperbolicCosine = V.acosh = function() {
  var r, e, t = this, n = t.constructor;
  return t.lte(1) ? new n(t.eq(1) ? 0 : NaN) : t.isFinite() ? (r = n.precision, e = n.rounding, n.precision = r + Math.max(Math.abs(t.e), t.sd()) + 4, n.rounding = 1, pr = false, t = t.times(t).minus(1).sqrt().plus(t), pr = true, n.precision = r, n.rounding = e, t.ln()) : new n(t);
};
V.inverseHyperbolicSine = V.asinh = function() {
  var r, e, t = this, n = t.constructor;
  return !t.isFinite() || t.isZero() ? new n(t) : (r = n.precision, e = n.rounding, n.precision = r + 2 * Math.max(Math.abs(t.e), t.sd()) + 6, n.rounding = 1, pr = false, t = t.times(t).plus(1).sqrt().plus(t), pr = true, n.precision = r, n.rounding = e, t.ln());
};
V.inverseHyperbolicTangent = V.atanh = function() {
  var r, e, t, n, i = this, u = i.constructor;
  return i.isFinite() ? i.e >= 0 ? new u(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (r = u.precision, e = u.rounding, n = i.sd(), Math.max(n, r) < 2 * -i.e - 1 ? lr(new u(i), r, e, true) : (u.precision = t = n - i.e, i = Tr(i.plus(1), new u(1).minus(i), t + r, 1), u.precision = r + 4, u.rounding = 1, i = i.ln(), u.precision = r, u.rounding = e, i.times(0.5))) : new u(NaN);
};
V.inverseSine = V.asin = function() {
  var r, e, t, n, i = this, u = i.constructor;
  return i.isZero() ? new u(i) : (e = i.abs().cmp(1), t = u.precision, n = u.rounding, e !== -1 ? e === 0 ? (r = ce(u, t + 4, n).times(0.5), r.s = i.s, r) : new u(NaN) : (u.precision = t + 6, u.rounding = 1, i = i.div(new u(1).minus(i.times(i)).sqrt().plus(1)).atan(), u.precision = t, u.rounding = n, i.times(2)));
};
V.inverseTangent = V.atan = function() {
  var r, e, t, n, i, u, a, o, f, c = this, s = c.constructor, h = s.precision, p = s.rounding;
  if (c.isFinite()) {
    if (c.isZero()) return new s(c);
    if (c.abs().eq(1) && h + 4 <= Qt) return a = ce(s, h + 4, p).times(0.25), a.s = c.s, a;
  } else {
    if (!c.s) return new s(NaN);
    if (h + 4 <= Qt) return a = ce(s, h + 4, p).times(0.5), a.s = c.s, a;
  }
  for (s.precision = o = h + 10, s.rounding = 1, t = Math.min(28, o / vr + 2 | 0), r = t; r; --r) c = c.div(c.times(c).plus(1).sqrt().plus(1));
  for (pr = false, e = Math.ceil(o / vr), n = 1, f = c.times(c), a = new s(c), i = c; r !== -1; ) if (i = i.times(f), u = a.minus(i.div(n += 2)), i = i.times(f), a = u.plus(i.div(n += 2)), a.d[e] !== void 0) for (r = e; a.d[r] === u.d[r] && r--; ) ;
  return t && (a = a.times(2 << t - 1)), pr = true, lr(a, s.precision = h, s.rounding = p, true);
};
V.isFinite = function() {
  return !!this.d;
};
V.isInteger = V.isInt = function() {
  return !!this.d && Qr(this.e / vr) > this.d.length - 2;
};
V.isNaN = function() {
  return !this.s;
};
V.isNegative = V.isNeg = function() {
  return this.s < 0;
};
V.isPositive = V.isPos = function() {
  return this.s > 0;
};
V.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
V.lessThan = V.lt = function(r) {
  return this.cmp(r) < 0;
};
V.lessThanOrEqualTo = V.lte = function(r) {
  return this.cmp(r) < 1;
};
V.logarithm = V.log = function(r) {
  var e, t, n, i, u, a, o, f, c = this, s = c.constructor, h = s.precision, p = s.rounding, v = 5;
  if (r == null) r = new s(10), e = true;
  else {
    if (r = new s(r), t = r.d, r.s < 0 || !t || !t[0] || r.eq(1)) return new s(NaN);
    e = r.eq(10);
  }
  if (t = c.d, c.s < 0 || !t || !t[0] || c.eq(1)) return new s(t && !t[0] ? -1 / 0 : c.s != 1 ? NaN : t ? 0 : 1 / 0);
  if (e) if (t.length > 1) u = true;
  else {
    for (i = t[0]; i % 10 === 0; ) i /= 10;
    u = i !== 1;
  }
  if (pr = false, o = h + v, a = Ae(c, o), n = e ? dt(s, o + 10) : Ae(r, o), f = Tr(a, n, o, 1), He(f.d, i = h, p)) do
    if (o += 10, a = Ae(c, o), n = e ? dt(s, o + 10) : Ae(r, o), f = Tr(a, n, o, 1), !u) {
      +Wr(f.d).slice(i + 1, i + 15) + 1 == 1e14 && (f = lr(f, h + 1, 0));
      break;
    }
  while (He(f.d, i += 10, p));
  return pr = true, lr(f, h, p);
};
V.minus = V.sub = function(r) {
  var e, t, n, i, u, a, o, f, c, s, h, p, v = this, d = v.constructor;
  if (r = new d(r), !v.d || !r.d) return !v.s || !r.s ? r = new d(NaN) : v.d ? r.s = -r.s : r = new d(r.d || v.s !== r.s ? v : NaN), r;
  if (v.s != r.s) return r.s = -r.s, v.plus(r);
  if (c = v.d, p = r.d, o = d.precision, f = d.rounding, !c[0] || !p[0]) {
    if (p[0]) r.s = -r.s;
    else if (c[0]) r = new d(v);
    else return new d(f === 3 ? -0 : 0);
    return pr ? lr(r, o, f) : r;
  }
  if (t = Qr(r.e / vr), s = Qr(v.e / vr), c = c.slice(), u = s - t, u) {
    for (h = u < 0, h ? (e = c, u = -u, a = p.length) : (e = p, t = s, a = c.length), n = Math.max(Math.ceil(o / vr), a) + 2, u > n && (u = n, e.length = 1), e.reverse(), n = u; n--; ) e.push(0);
    e.reverse();
  } else {
    for (n = c.length, a = p.length, h = n < a, h && (a = n), n = 0; n < a; n++) if (c[n] != p[n]) {
      h = c[n] < p[n];
      break;
    }
    u = 0;
  }
  for (h && (e = c, c = p, p = e, r.s = -r.s), a = c.length, n = p.length - a; n > 0; --n) c[a++] = 0;
  for (n = p.length; n > u; ) {
    if (c[--n] < p[n]) {
      for (i = n; i && c[--i] === 0; ) c[i] = le - 1;
      --c[i], c[n] += le;
    }
    c[n] -= p[n];
  }
  for (; c[--a] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --t;
  return c[0] ? (r.d = c, r.e = Mt(c, t), pr ? lr(r, o, f) : r) : new d(f === 3 ? -0 : 0);
};
V.modulo = V.mod = function(r) {
  var e, t = this, n = t.constructor;
  return r = new n(r), !t.d || !r.s || r.d && !r.d[0] ? new n(NaN) : !r.d || t.d && !t.d[0] ? lr(new n(t), n.precision, n.rounding) : (pr = false, n.modulo == 9 ? (e = Tr(t, r.abs(), 0, 3, 1), e.s *= r.s) : e = Tr(t, r, 0, n.modulo, 1), e = e.times(r), pr = true, t.minus(e));
};
V.naturalExponential = V.exp = function() {
  return Xt(this);
};
V.naturalLogarithm = V.ln = function() {
  return Ae(this);
};
V.negated = V.neg = function() {
  var r = new this.constructor(this);
  return r.s = -r.s, lr(r);
};
V.plus = V.add = function(r) {
  var e, t, n, i, u, a, o, f, c, s, h = this, p = h.constructor;
  if (r = new p(r), !h.d || !r.d) return !h.s || !r.s ? r = new p(NaN) : h.d || (r = new p(r.d || h.s === r.s ? h : NaN)), r;
  if (h.s != r.s) return r.s = -r.s, h.minus(r);
  if (c = h.d, s = r.d, o = p.precision, f = p.rounding, !c[0] || !s[0]) return s[0] || (r = new p(h)), pr ? lr(r, o, f) : r;
  if (u = Qr(h.e / vr), n = Qr(r.e / vr), c = c.slice(), i = u - n, i) {
    for (i < 0 ? (t = c, i = -i, a = s.length) : (t = s, n = u, a = c.length), u = Math.ceil(o / vr), a = u > a ? u + 1 : a + 1, i > a && (i = a, t.length = 1), t.reverse(); i--; ) t.push(0);
    t.reverse();
  }
  for (a = c.length, i = s.length, a - i < 0 && (i = a, t = s, s = c, c = t), e = 0; i; ) e = (c[--i] = c[i] + s[i] + e) / le | 0, c[i] %= le;
  for (e && (c.unshift(e), ++n), a = c.length; c[--a] == 0; ) c.pop();
  return r.d = c, r.e = Mt(c, n), pr ? lr(r, o, f) : r;
};
V.precision = V.sd = function(r) {
  var e, t = this;
  if (r !== void 0 && r !== !!r && r !== 1 && r !== 0) throw Error(Ee + r);
  return t.d ? (e = Hi(t.d), r && t.e + 1 > e && (e = t.e + 1)) : e = NaN, e;
};
V.round = function() {
  var r = this, e = r.constructor;
  return lr(new e(r), r.e + 1, e.rounding);
};
V.sine = V.sin = function() {
  var r, e, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, e = n.rounding, n.precision = r + Math.max(t.e, t.sd()) + vr, n.rounding = 1, t = fo(n, eu(n, t)), n.precision = r, n.rounding = e, lr(me > 2 ? t.neg() : t, r, e, true)) : new n(NaN);
};
V.squareRoot = V.sqrt = function() {
  var r, e, t, n, i, u, a = this, o = a.d, f = a.e, c = a.s, s = a.constructor;
  if (c !== 1 || !o || !o[0]) return new s(!c || c < 0 && (!o || o[0]) ? NaN : o ? a : 1 / 0);
  for (pr = false, c = Math.sqrt(+a), c == 0 || c == 1 / 0 ? (e = Wr(o), (e.length + f) % 2 == 0 && (e += "0"), c = Math.sqrt(e), f = Qr((f + 1) / 2) - (f < 0 || f % 2), c == 1 / 0 ? e = "5e" + f : (e = c.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + f), n = new s(e)) : n = new s(c.toString()), t = (f = s.precision) + 3; ; ) if (u = n, n = u.plus(Tr(a, u, t + 2, 1)).times(0.5), Wr(u.d).slice(0, t) === (e = Wr(n.d)).slice(0, t)) if (e = e.slice(t - 3, t + 1), e == "9999" || !i && e == "4999") {
    if (!i && (lr(u, f + 1, 0), u.times(u).eq(a))) {
      n = u;
      break;
    }
    t += 4, i = 1;
  } else {
    (!+e || !+e.slice(1) && e.charAt(0) == "5") && (lr(n, f + 1, 1), r = !n.times(n).eq(a));
    break;
  }
  return pr = true, lr(n, f, s.rounding, r);
};
V.tangent = V.tan = function() {
  var r, e, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, e = n.rounding, n.precision = r + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = Tr(t, new n(1).minus(t.times(t)).sqrt(), r + 10, 0), n.precision = r, n.rounding = e, lr(me == 2 || me == 4 ? t.neg() : t, r, e, true)) : new n(NaN);
};
V.times = V.mul = function(r) {
  var e, t, n, i, u, a, o, f, c, s = this, h = s.constructor, p = s.d, v = (r = new h(r)).d;
  if (r.s *= s.s, !p || !p[0] || !v || !v[0]) return new h(!r.s || p && !p[0] && !v || v && !v[0] && !p ? NaN : !p || !v ? r.s / 0 : r.s * 0);
  for (t = Qr(s.e / vr) + Qr(r.e / vr), f = p.length, c = v.length, f < c && (u = p, p = v, v = u, a = f, f = c, c = a), u = [], a = f + c, n = a; n--; ) u.push(0);
  for (n = c; --n >= 0; ) {
    for (e = 0, i = f + n; i > n; ) o = u[i] + v[n] * p[i - n - 1] + e, u[i--] = o % le | 0, e = o / le | 0;
    u[i] = (u[i] + e) % le | 0;
  }
  for (; !u[--a]; ) u.pop();
  return e ? ++t : u.shift(), r.d = u, r.e = Mt(u, t), pr ? lr(r, h.precision, h.rounding) : r;
};
V.toBinary = function(r, e) {
  return on(this, 2, r, e);
};
V.toDecimalPlaces = V.toDP = function(r, e) {
  var t = this, n = t.constructor;
  return t = new n(t), r === void 0 ? t : (ee(r, 0, be), e === void 0 ? e = n.rounding : ee(e, 0, 8), lr(t, r + t.e + 1, e));
};
V.toExponential = function(r, e) {
  var t, n = this, i = n.constructor;
  return r === void 0 ? t = ve(n, true) : (ee(r, 0, be), e === void 0 ? e = i.rounding : ee(e, 0, 8), n = lr(new i(n), r + 1, e), t = ve(n, true, r + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
V.toFixed = function(r, e) {
  var t, n, i = this, u = i.constructor;
  return r === void 0 ? t = ve(i) : (ee(r, 0, be), e === void 0 ? e = u.rounding : ee(e, 0, 8), n = lr(new u(i), r + i.e + 1, e), t = ve(n, false, r + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
V.toFraction = function(r) {
  var e, t, n, i, u, a, o, f, c, s, h, p, v = this, d = v.d, l = v.constructor;
  if (!d) return new l(v);
  if (c = t = new l(1), n = f = new l(0), e = new l(n), u = e.e = Hi(d) - v.e - 1, a = u % vr, e.d[0] = Lr(10, a < 0 ? vr + a : a), r == null) r = u > 0 ? e : c;
  else {
    if (o = new l(r), !o.isInt() || o.lt(c)) throw Error(Ee + o);
    r = o.gt(e) ? u > 0 ? e : c : o;
  }
  for (pr = false, o = new l(Wr(d)), s = l.precision, l.precision = u = d.length * vr * 2; h = Tr(o, e, 0, 1, 1), i = t.plus(h.times(n)), i.cmp(r) != 1; ) t = n, n = i, i = c, c = f.plus(h.times(i)), f = i, i = e, e = o.minus(h.times(i)), o = i;
  return i = Tr(r.minus(t), n, 0, 1, 1), f = f.plus(i.times(c)), t = t.plus(i.times(n)), f.s = c.s = v.s, p = Tr(c, n, u, 1).minus(v).abs().cmp(Tr(f, t, u, 1).minus(v).abs()) < 1 ? [c, n] : [f, t], l.precision = s, pr = true, p;
};
V.toHexadecimal = V.toHex = function(r, e) {
  return on(this, 16, r, e);
};
V.toNearest = function(r, e) {
  var t = this, n = t.constructor;
  if (t = new n(t), r == null) {
    if (!t.d) return t;
    r = new n(1), e = n.rounding;
  } else {
    if (r = new n(r), e === void 0 ? e = n.rounding : ee(e, 0, 8), !t.d) return r.s ? t : r;
    if (!r.d) return r.s && (r.s = t.s), r;
  }
  return r.d[0] ? (pr = false, t = Tr(t, r, 0, e, 1).times(r), pr = true, lr(t)) : (r.s = t.s, t = r), t;
};
V.toNumber = function() {
  return +this;
};
V.toOctal = function(r, e) {
  return on(this, 8, r, e);
};
V.toPower = V.pow = function(r) {
  var e, t, n, i, u, a, o = this, f = o.constructor, c = +(r = new f(r));
  if (!o.d || !r.d || !o.d[0] || !r.d[0]) return new f(Lr(+o, c));
  if (o = new f(o), o.eq(1)) return o;
  if (n = f.precision, u = f.rounding, r.eq(1)) return lr(o, n, u);
  if (e = Qr(r.e / vr), e >= r.d.length - 1 && (t = c < 0 ? -c : c) <= uo) return i = ki(f, o, t, n), r.s < 0 ? new f(1).div(i) : lr(i, n, u);
  if (a = o.s, a < 0) {
    if (e < r.d.length - 1) return new f(NaN);
    if (r.d[e] & 1 || (a = 1), o.e == 0 && o.d[0] == 1 && o.d.length == 1) return o.s = a, o;
  }
  return t = Lr(+o, c), e = t == 0 || !isFinite(t) ? Qr(c * (Math.log("0." + Wr(o.d)) / Math.LN10 + o.e + 1)) : new f(t + "").e, e > f.maxE + 1 || e < f.minE - 1 ? new f(e > 0 ? a / 0 : 0) : (pr = false, f.rounding = o.s = 1, t = Math.min(12, (e + "").length), i = Xt(r.times(Ae(o, n + t)), n), i.d && (i = lr(i, n + 5, 1), He(i.d, n, u) && (e = n + 10, i = lr(Xt(r.times(Ae(o, e + t)), e), e + 5, 1), +Wr(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = lr(i, n + 1, 0)))), i.s = a, pr = true, f.rounding = u, lr(i, n, u));
};
V.toPrecision = function(r, e) {
  var t, n = this, i = n.constructor;
  return r === void 0 ? t = ve(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ee(r, 1, be), e === void 0 ? e = i.rounding : ee(e, 0, 8), n = lr(new i(n), r, e), t = ve(n, r <= n.e || n.e <= i.toExpNeg, r)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
V.toSignificantDigits = V.toSD = function(r, e) {
  var t = this, n = t.constructor;
  return r === void 0 ? (r = n.precision, e = n.rounding) : (ee(r, 1, be), e === void 0 ? e = n.rounding : ee(e, 0, 8)), lr(new n(t), r, e);
};
V.toString = function() {
  var r = this, e = r.constructor, t = ve(r, r.e <= e.toExpNeg || r.e >= e.toExpPos);
  return r.isNeg() && !r.isZero() ? "-" + t : t;
};
V.truncated = V.trunc = function() {
  return lr(new this.constructor(this), this.e + 1, 1);
};
V.valueOf = V.toJSON = function() {
  var r = this, e = r.constructor, t = ve(r, r.e <= e.toExpNeg || r.e >= e.toExpPos);
  return r.isNeg() ? "-" + t : t;
};
function Wr(r) {
  var e, t, n, i = r.length - 1, u = "", a = r[0];
  if (i > 0) {
    for (u += a, e = 1; e < i; e++) n = r[e] + "", t = vr - n.length, t && (u += we(t)), u += n;
    a = r[e], n = a + "", t = vr - n.length, t && (u += we(t));
  } else if (a === 0) return "0";
  for (; a % 10 === 0; ) a /= 10;
  return u + a;
}
function ee(r, e, t) {
  if (r !== ~~r || r < e || r > t) throw Error(Ee + r);
}
function He(r, e, t, n) {
  var i, u, a, o;
  for (u = r[0]; u >= 10; u /= 10) --e;
  return --e < 0 ? (e += vr, i = 0) : (i = Math.ceil((e + 1) / vr), e %= vr), u = Lr(10, vr - e), o = r[i] % u | 0, n == null ? e < 3 ? (e == 0 ? o = o / 100 | 0 : e == 1 && (o = o / 10 | 0), a = t < 4 && o == 99999 || t > 3 && o == 49999 || o == 5e4 || o == 0) : a = (t < 4 && o + 1 == u || t > 3 && o + 1 == u / 2) && (r[i + 1] / u / 100 | 0) == Lr(10, e - 2) - 1 || (o == u / 2 || o == 0) && (r[i + 1] / u / 100 | 0) == 0 : e < 4 ? (e == 0 ? o = o / 1e3 | 0 : e == 1 ? o = o / 100 | 0 : e == 2 && (o = o / 10 | 0), a = (n || t < 4) && o == 9999 || !n && t > 3 && o == 4999) : a = ((n || t < 4) && o + 1 == u || !n && t > 3 && o + 1 == u / 2) && (r[i + 1] / u / 1e3 | 0) == Lr(10, e - 3) - 1, a;
}
function ct(r, e, t) {
  for (var n, i = [0], u, a = 0, o = r.length; a < o; ) {
    for (u = i.length; u--; ) i[u] *= e;
    for (i[0] += Jt.indexOf(r.charAt(a++)), n = 0; n < i.length; n++) i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function oo(r, e) {
  var t, n, i;
  if (e.isZero()) return e;
  n = e.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / Nt(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), r.precision += t, e = Le(r, 1, e.times(i), new r(1));
  for (var u = t; u--; ) {
    var a = e.times(e);
    e = a.times(a).minus(a).times(8).plus(1);
  }
  return r.precision -= t, e;
}
var Tr = /* @__PURE__ */ function() {
  function r(n, i, u) {
    var a, o = 0, f = n.length;
    for (n = n.slice(); f--; ) a = n[f] * i + o, n[f] = a % u | 0, o = a / u | 0;
    return o && n.unshift(o), n;
  }
  function e(n, i, u, a) {
    var o, f;
    if (u != a) f = u > a ? 1 : -1;
    else for (o = f = 0; o < u; o++) if (n[o] != i[o]) {
      f = n[o] > i[o] ? 1 : -1;
      break;
    }
    return f;
  }
  function t(n, i, u, a) {
    for (var o = 0; u--; ) n[u] -= o, o = n[u] < i[u] ? 1 : 0, n[u] = o * a + n[u] - i[u];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, u, a, o, f) {
    var c, s, h, p, v, d, l, m, D, b, g, C, A, w, _, F, y, M, B, N, z = n.constructor, x = n.s == i.s ? 1 : -1, O = n.d, T = i.d;
    if (!O || !O[0] || !T || !T[0]) return new z(!n.s || !i.s || (O ? T && O[0] == T[0] : !T) ? NaN : O && O[0] == 0 || !T ? x * 0 : x / 0);
    for (f ? (v = 1, s = n.e - i.e) : (f = le, v = vr, s = Qr(n.e / v) - Qr(i.e / v)), B = T.length, y = O.length, D = new z(x), b = D.d = [], h = 0; T[h] == (O[h] || 0); h++) ;
    if (T[h] > (O[h] || 0) && s--, u == null ? (w = u = z.precision, a = z.rounding) : o ? w = u + (n.e - i.e) + 1 : w = u, w < 0) b.push(1), d = true;
    else {
      if (w = w / v + 2 | 0, h = 0, B == 1) {
        for (p = 0, T = T[0], w++; (h < y || p) && w--; h++) _ = p * f + (O[h] || 0), b[h] = _ / T | 0, p = _ % T | 0;
        d = p || h < y;
      } else {
        for (p = f / (T[0] + 1) | 0, p > 1 && (T = r(T, p, f), O = r(O, p, f), B = T.length, y = O.length), F = B, g = O.slice(0, B), C = g.length; C < B; ) g[C++] = 0;
        N = T.slice(), N.unshift(0), M = T[0], T[1] >= f / 2 && ++M;
        do
          p = 0, c = e(T, g, B, C), c < 0 ? (A = g[0], B != C && (A = A * f + (g[1] || 0)), p = A / M | 0, p > 1 ? (p >= f && (p = f - 1), l = r(T, p, f), m = l.length, C = g.length, c = e(l, g, m, C), c == 1 && (p--, t(l, B < m ? N : T, m, f))) : (p == 0 && (c = p = 1), l = T.slice()), m = l.length, m < C && l.unshift(0), t(g, l, C, f), c == -1 && (C = g.length, c = e(T, g, B, C), c < 1 && (p++, t(g, B < C ? N : T, C, f))), C = g.length) : c === 0 && (p++, g = [0]), b[h++] = p, c && g[0] ? g[C++] = O[F] || 0 : (g = [O[F]], C = 1);
        while ((F++ < y || g[0] !== void 0) && w--);
        d = g[0] !== void 0;
      }
      b[0] || b.shift();
    }
    if (v == 1) D.e = s, Yi = d;
    else {
      for (h = 1, p = b[0]; p >= 10; p /= 10) h++;
      D.e = h + s * v - 1, lr(D, o ? u + D.e + 1 : u, a, d);
    }
    return D;
  };
}();
function lr(r, e, t, n) {
  var i, u, a, o, f, c, s, h, p, v = r.constructor;
  r: if (e != null) {
    if (h = r.d, !h) return r;
    for (i = 1, o = h[0]; o >= 10; o /= 10) i++;
    if (u = e - i, u < 0) u += vr, a = e, s = h[p = 0], f = s / Lr(10, i - a - 1) % 10 | 0;
    else if (p = Math.ceil((u + 1) / vr), o = h.length, p >= o) if (n) {
      for (; o++ <= p; ) h.push(0);
      s = f = 0, i = 1, u %= vr, a = u - vr + 1;
    } else break r;
    else {
      for (s = o = h[p], i = 1; o >= 10; o /= 10) i++;
      u %= vr, a = u - vr + i, f = a < 0 ? 0 : s / Lr(10, i - a - 1) % 10 | 0;
    }
    if (n = n || e < 0 || h[p + 1] !== void 0 || (a < 0 ? s : s % Lr(10, i - a - 1)), c = t < 4 ? (f || n) && (t == 0 || t == (r.s < 0 ? 3 : 2)) : f > 5 || f == 5 && (t == 4 || n || t == 6 && (u > 0 ? a > 0 ? s / Lr(10, i - a) : 0 : h[p - 1]) % 10 & 1 || t == (r.s < 0 ? 8 : 7)), e < 1 || !h[0]) return h.length = 0, c ? (e -= r.e + 1, h[0] = Lr(10, (vr - e % vr) % vr), r.e = -e || 0) : h[0] = r.e = 0, r;
    if (u == 0 ? (h.length = p, o = 1, p--) : (h.length = p + 1, o = Lr(10, vr - u), h[p] = a > 0 ? (s / Lr(10, i - a) % Lr(10, a) | 0) * o : 0), c) for (; ; ) if (p == 0) {
      for (u = 1, a = h[0]; a >= 10; a /= 10) u++;
      for (a = h[0] += o, o = 1; a >= 10; a /= 10) o++;
      u != o && (r.e++, h[0] == le && (h[0] = 1));
      break;
    } else {
      if (h[p] += o, h[p] != le) break;
      h[p--] = 0, o = 1;
    }
    for (u = h.length; h[--u] === 0; ) h.pop();
  }
  return pr && (r.e > v.maxE ? (r.d = null, r.e = NaN) : r.e < v.minE && (r.e = 0, r.d = [0])), r;
}
function ve(r, e, t) {
  if (!r.isFinite()) return ru(r);
  var n, i = r.e, u = Wr(r.d), a = u.length;
  return e ? (t && (n = t - a) > 0 ? u = u.charAt(0) + "." + u.slice(1) + we(n) : a > 1 && (u = u.charAt(0) + "." + u.slice(1)), u = u + (r.e < 0 ? "e" : "e+") + r.e) : i < 0 ? (u = "0." + we(-i - 1) + u, t && (n = t - a) > 0 && (u += we(n))) : i >= a ? (u += we(i + 1 - a), t && (n = t - i - 1) > 0 && (u = u + "." + we(n))) : ((n = i + 1) < a && (u = u.slice(0, n) + "." + u.slice(n)), t && (n = t - a) > 0 && (i + 1 === a && (u += "."), u += we(n))), u;
}
function Mt(r, e) {
  var t = r[0];
  for (e *= vr; t >= 10; t /= 10) e++;
  return e;
}
function dt(r, e, t) {
  if (e > ao) throw pr = true, t && (r.precision = t), Error(Qi);
  return lr(new r(vt), e, 1, true);
}
function ce(r, e, t) {
  if (e > Qt) throw Error(Qi);
  return lr(new r(pt), e, t, true);
}
function Hi(r) {
  var e = r.length - 1, t = e * vr + 1;
  if (e = r[e], e) {
    for (; e % 10 == 0; e /= 10) t--;
    for (e = r[0]; e >= 10; e /= 10) t++;
  }
  return t;
}
function we(r) {
  for (var e = ""; r--; ) e += "0";
  return e;
}
function ki(r, e, t, n) {
  var i, u = new r(1), a = Math.ceil(n / vr + 4);
  for (pr = false; ; ) {
    if (t % 2 && (u = u.times(e), Nn(u.d, a) && (i = true)), t = Qr(t / 2), t === 0) {
      t = u.d.length - 1, i && u.d[t] === 0 && ++u.d[t];
      break;
    }
    e = e.times(e), Nn(e.d, a);
  }
  return pr = true, u;
}
function Mn(r) {
  return r.d[r.d.length - 1] & 1;
}
function ji(r, e, t) {
  for (var n, i = new r(e[0]), u = 0; ++u < e.length; ) if (n = new r(e[u]), n.s) i[t](n) && (i = n);
  else {
    i = n;
    break;
  }
  return i;
}
function Xt(r, e) {
  var t, n, i, u, a, o, f, c = 0, s = 0, h = 0, p = r.constructor, v = p.rounding, d = p.precision;
  if (!r.d || !r.d[0] || r.e > 17) return new p(r.d ? r.d[0] ? r.s < 0 ? 0 : 1 / 0 : 1 : r.s ? r.s < 0 ? 0 : r : NaN);
  for (e == null ? (pr = false, f = d) : f = e, o = new p(0.03125); r.e > -2; ) r = r.times(o), h += 5;
  for (n = Math.log(Lr(2, h)) / Math.LN10 * 2 + 5 | 0, f += n, t = u = a = new p(1), p.precision = f; ; ) {
    if (u = lr(u.times(r), f, 1), t = t.times(++s), o = a.plus(Tr(u, t, f, 1)), Wr(o.d).slice(0, f) === Wr(a.d).slice(0, f)) {
      for (i = h; i--; ) a = lr(a.times(a), f, 1);
      if (e == null) if (c < 3 && He(a.d, f - n, v, c)) p.precision = f += 10, t = u = o = new p(1), s = 0, c++;
      else return lr(a, p.precision = d, v, pr = true);
      else return p.precision = d, a;
    }
    a = o;
  }
}
function Ae(r, e) {
  var t, n, i, u, a, o, f, c, s, h, p, v = 1, d = 10, l = r, m = l.d, D = l.constructor, b = D.rounding, g = D.precision;
  if (l.s < 0 || !m || !m[0] || !l.e && m[0] == 1 && m.length == 1) return new D(m && !m[0] ? -1 / 0 : l.s != 1 ? NaN : m ? 0 : l);
  if (e == null ? (pr = false, s = g) : s = e, D.precision = s += d, t = Wr(m), n = t.charAt(0), Math.abs(u = l.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; ) l = l.times(r), t = Wr(l.d), n = t.charAt(0), v++;
    u = l.e, n > 1 ? (l = new D("0." + t), u++) : l = new D(n + "." + t.slice(1));
  } else return c = dt(D, s + 2, g).times(u + ""), l = Ae(new D(n + "." + t.slice(1)), s - d).plus(c), D.precision = g, e == null ? lr(l, g, b, pr = true) : l;
  for (h = l, f = a = l = Tr(l.minus(1), l.plus(1), s, 1), p = lr(l.times(l), s, 1), i = 3; ; ) {
    if (a = lr(a.times(p), s, 1), c = f.plus(Tr(a, new D(i), s, 1)), Wr(c.d).slice(0, s) === Wr(f.d).slice(0, s)) if (f = f.times(2), u !== 0 && (f = f.plus(dt(D, s + 2, g).times(u + ""))), f = Tr(f, new D(v), s, 1), e == null) if (He(f.d, s - d, b, o)) D.precision = s += d, c = a = l = Tr(h.minus(1), h.plus(1), s, 1), p = lr(l.times(l), s, 1), i = o = 1;
    else return lr(f, D.precision = g, b, pr = true);
    else return D.precision = g, f;
    f = c, i += 2;
  }
}
function ru(r) {
  return String(r.s * r.s / 0);
}
function Gt(r, e) {
  var t, n, i;
  for ((t = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (t < 0 && (t = n), t += +e.slice(n + 1), e = e.substring(0, n)) : t < 0 && (t = e.length), n = 0; e.charCodeAt(n) === 48; n++) ;
  for (i = e.length; e.charCodeAt(i - 1) === 48; --i) ;
  if (e = e.slice(n, i), e) {
    if (i -= n, r.e = t = t - n - 1, r.d = [], n = (t + 1) % vr, t < 0 && (n += vr), n < i) {
      for (n && r.d.push(+e.slice(0, n)), i -= vr; n < i; ) r.d.push(+e.slice(n, n += vr));
      e = e.slice(n), n = vr - e.length;
    } else n -= i;
    for (; n--; ) e += "0";
    r.d.push(+e), pr && (r.e > r.constructor.maxE ? (r.d = null, r.e = NaN) : r.e < r.constructor.minE && (r.e = 0, r.d = [0]));
  } else r.e = 0, r.d = [0];
  return r;
}
function so(r, e) {
  var t, n, i, u, a, o, f, c, s;
  if (e.indexOf("_") > -1) {
    if (e = e.replace(/(\d)_(?=\d)/g, "$1"), Ki.test(e)) return Gt(r, e);
  } else if (e === "Infinity" || e === "NaN") return +e || (r.s = NaN), r.e = NaN, r.d = null, r;
  if (no.test(e)) t = 16, e = e.toLowerCase();
  else if (to.test(e)) t = 2;
  else if (io.test(e)) t = 8;
  else throw Error(Ee + e);
  for (u = e.search(/p/i), u > 0 ? (f = +e.slice(u + 1), e = e.substring(2, u)) : e = e.slice(2), u = e.indexOf("."), a = u >= 0, n = r.constructor, a && (e = e.replace(".", ""), o = e.length, u = o - u, i = ki(n, new n(t), u, u * 2)), c = ct(e, t, le), s = c.length - 1, u = s; c[u] === 0; --u) c.pop();
  return u < 0 ? new n(r.s * 0) : (r.e = Mt(c, s), r.d = c, pr = false, a && (r = Tr(r, i, o * 4)), f && (r = r.times(Math.abs(f) < 54 ? Lr(2, f) : Ze.pow(2, f))), pr = true, r);
}
function fo(r, e) {
  var t, n = e.d.length;
  if (n < 3) return e.isZero() ? e : Le(r, 2, e, e);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, e = e.times(1 / Nt(5, t)), e = Le(r, 2, e, e);
  for (var i, u = new r(5), a = new r(16), o = new r(20); t--; ) i = e.times(e), e = e.times(u.plus(i.times(a.times(i).minus(o))));
  return e;
}
function Le(r, e, t, n, i) {
  var u, a, o, f, c = r.precision, s = Math.ceil(c / vr);
  for (pr = false, f = t.times(t), o = new r(n); ; ) {
    if (a = Tr(o.times(f), new r(e++ * e++), c, 1), o = i ? n.plus(a) : n.minus(a), n = Tr(a.times(f), new r(e++ * e++), c, 1), a = o.plus(n), a.d[s] !== void 0) {
      for (u = s; a.d[u] === o.d[u] && u--; ) ;
      if (u == -1) break;
    }
    u = o, o = n, n = a, a = u;
  }
  return pr = true, a.d.length = s + 1, a;
}
function Nt(r, e) {
  for (var t = r; --e; ) t *= r;
  return t;
}
function eu(r, e) {
  var t, n = e.s < 0, i = ce(r, r.precision, 1), u = i.times(0.5);
  if (e = e.abs(), e.lte(u)) return me = n ? 4 : 1, e;
  if (t = e.divToInt(i), t.isZero()) me = n ? 3 : 2;
  else {
    if (e = e.minus(t.times(i)), e.lte(u)) return me = Mn(t) ? n ? 2 : 3 : n ? 4 : 1, e;
    me = Mn(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return e.minus(i).abs();
}
function on(r, e, t, n) {
  var i, u, a, o, f, c, s, h, p, v = r.constructor, d = t !== void 0;
  if (d ? (ee(t, 1, be), n === void 0 ? n = v.rounding : ee(n, 0, 8)) : (t = v.precision, n = v.rounding), !r.isFinite()) s = ru(r);
  else {
    for (s = ve(r), a = s.indexOf("."), d ? (i = 2, e == 16 ? t = t * 4 - 3 : e == 8 && (t = t * 3 - 2)) : i = e, a >= 0 && (s = s.replace(".", ""), p = new v(1), p.e = s.length - a, p.d = ct(ve(p), 10, i), p.e = p.d.length), h = ct(s, 10, i), u = f = h.length; h[--f] == 0; ) h.pop();
    if (!h[0]) s = d ? "0p+0" : "0";
    else {
      if (a < 0 ? u-- : (r = new v(r), r.d = h, r.e = u, r = Tr(r, p, t, n, 0, i), h = r.d, u = r.e, c = Yi), a = h[t], o = i / 2, c = c || h[t + 1] !== void 0, c = n < 4 ? (a !== void 0 || c) && (n === 0 || n === (r.s < 0 ? 3 : 2)) : a > o || a === o && (n === 4 || c || n === 6 && h[t - 1] & 1 || n === (r.s < 0 ? 8 : 7)), h.length = t, c) for (; ++h[--t] > i - 1; ) h[t] = 0, t || (++u, h.unshift(1));
      for (f = h.length; !h[f - 1]; --f) ;
      for (a = 0, s = ""; a < f; a++) s += Jt.charAt(h[a]);
      if (d) {
        if (f > 1) if (e == 16 || e == 8) {
          for (a = e == 16 ? 4 : 3, --f; f % a; f++) s += "0";
          for (h = ct(s, i, e), f = h.length; !h[f - 1]; --f) ;
          for (a = 1, s = "1."; a < f; a++) s += Jt.charAt(h[a]);
        } else s = s.charAt(0) + "." + s.slice(1);
        s = s + (u < 0 ? "p" : "p+") + u;
      } else if (u < 0) {
        for (; ++u; ) s = "0" + s;
        s = "0." + s;
      } else if (++u > f) for (u -= f; u--; ) s += "0";
      else u < f && (s = s.slice(0, u) + "." + s.slice(u));
    }
    s = (e == 16 ? "0x" : e == 2 ? "0b" : e == 8 ? "0o" : "") + s;
  }
  return r.s < 0 ? "-" + s : s;
}
function Nn(r, e) {
  if (r.length > e) return r.length = e, true;
}
function co(r) {
  return new this(r).abs();
}
function lo(r) {
  return new this(r).acos();
}
function ho(r) {
  return new this(r).acosh();
}
function vo(r, e) {
  return new this(r).plus(e);
}
function po(r) {
  return new this(r).asin();
}
function mo(r) {
  return new this(r).asinh();
}
function Do(r) {
  return new this(r).atan();
}
function go(r) {
  return new this(r).atanh();
}
function yo(r, e) {
  r = new this(r), e = new this(e);
  var t, n = this.precision, i = this.rounding, u = n + 4;
  return !r.s || !e.s ? t = new this(NaN) : !r.d && !e.d ? (t = ce(this, u, 1).times(e.s > 0 ? 0.25 : 0.75), t.s = r.s) : !e.d || r.isZero() ? (t = e.s < 0 ? ce(this, n, i) : new this(0), t.s = r.s) : !r.d || e.isZero() ? (t = ce(this, u, 1).times(0.5), t.s = r.s) : e.s < 0 ? (this.precision = u, this.rounding = 1, t = this.atan(Tr(r, e, u, 1)), e = ce(this, u, 1), this.precision = n, this.rounding = i, t = r.s < 0 ? t.minus(e) : t.plus(e)) : t = this.atan(Tr(r, e, u, 1)), t;
}
function wo(r) {
  return new this(r).cbrt();
}
function Ao(r) {
  return lr(r = new this(r), r.e + 1, 2);
}
function Fo(r, e, t) {
  return new this(r).clamp(e, t);
}
function Eo(r) {
  if (!r || typeof r != "object") throw Error(Bt + "Object expected");
  var e, t, n, i = r.defaults === true, u = ["precision", 1, be, "rounding", 0, 8, "toExpNeg", -9e15, 0, "toExpPos", 0, Wt, "maxE", 0, Wt, "minE", -9e15, 0, "modulo", 0, 9];
  for (e = 0; e < u.length; e += 3) if (t = u[e], i && (this[t] = Yt[t]), (n = r[t]) !== void 0) if (Qr(n) === n && n >= u[e + 1] && n <= u[e + 2]) this[t] = n;
  else throw Error(Ee + t + ": " + n);
  if (t = "crypto", i && (this[t] = Yt[t]), (n = r[t]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = true;
  else throw Error(Xi);
  else this[t] = false;
  else throw Error(Ee + t + ": " + n);
  return this;
}
function bo(r) {
  return new this(r).cos();
}
function Co(r) {
  return new this(r).cosh();
}
function tu(r) {
  var e, t, n;
  function i(u) {
    var a, o, f, c = this;
    if (!(c instanceof i)) return new i(u);
    if (c.constructor = i, Sn(u)) {
      c.s = u.s, pr ? !u.d || u.e > i.maxE ? (c.e = NaN, c.d = null) : u.e < i.minE ? (c.e = 0, c.d = [0]) : (c.e = u.e, c.d = u.d.slice()) : (c.e = u.e, c.d = u.d ? u.d.slice() : u.d);
      return;
    }
    if (f = typeof u, f === "number") {
      if (u === 0) {
        c.s = 1 / u < 0 ? -1 : 1, c.e = 0, c.d = [0];
        return;
      }
      if (u < 0 ? (u = -u, c.s = -1) : c.s = 1, u === ~~u && u < 1e7) {
        for (a = 0, o = u; o >= 10; o /= 10) a++;
        pr ? a > i.maxE ? (c.e = NaN, c.d = null) : a < i.minE ? (c.e = 0, c.d = [0]) : (c.e = a, c.d = [u]) : (c.e = a, c.d = [u]);
        return;
      } else if (u * 0 !== 0) {
        u || (c.s = NaN), c.e = NaN, c.d = null;
        return;
      }
      return Gt(c, u.toString());
    } else if (f !== "string") throw Error(Ee + u);
    return (o = u.charCodeAt(0)) === 45 ? (u = u.slice(1), c.s = -1) : (o === 43 && (u = u.slice(1)), c.s = 1), Ki.test(u) ? Gt(c, u) : so(c, u);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Eo, i.clone = tu, i.isDecimal = Sn, i.abs = co, i.acos = lo, i.acosh = ho, i.add = vo, i.asin = po, i.asinh = mo, i.atan = Do, i.atanh = go, i.atan2 = yo, i.cbrt = wo, i.ceil = Ao, i.clamp = Fo, i.cos = bo, i.cosh = Co, i.div = _o, i.exp = Bo, i.floor = Mo, i.hypot = No, i.ln = So, i.log = xo, i.log10 = Io, i.log2 = To, i.max = zo, i.min = Oo, i.mod = $o, i.mul = Po, i.pow = qo, i.random = Ro, i.round = Uo, i.sign = Lo, i.sin = Zo, i.sinh = Vo, i.sqrt = Wo, i.sub = Jo, i.sum = Yo, i.tan = Qo, i.tanh = Xo, i.trunc = Go, r === void 0 && (r = {}), r && r.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < n.length; ) r.hasOwnProperty(t = n[e++]) || (r[t] = this[t]);
  return i.config(r), i;
}
function _o(r, e) {
  return new this(r).div(e);
}
function Bo(r) {
  return new this(r).exp();
}
function Mo(r) {
  return lr(r = new this(r), r.e + 1, 3);
}
function No() {
  var r, e, t = new this(0);
  for (pr = false, r = 0; r < arguments.length; ) if (e = new this(arguments[r++]), e.d) t.d && (t = t.plus(e.times(e)));
  else {
    if (e.s) return pr = true, new this(1 / 0);
    t = e;
  }
  return pr = true, t.sqrt();
}
function Sn(r) {
  return r instanceof Ze || r && r.toStringTag === Gi || false;
}
function So(r) {
  return new this(r).ln();
}
function xo(r, e) {
  return new this(r).log(e);
}
function To(r) {
  return new this(r).log(2);
}
function Io(r) {
  return new this(r).log(10);
}
function zo() {
  return ji(this, arguments, "lt");
}
function Oo() {
  return ji(this, arguments, "gt");
}
function $o(r, e) {
  return new this(r).mod(e);
}
function Po(r, e) {
  return new this(r).mul(e);
}
function qo(r, e) {
  return new this(r).pow(e);
}
function Ro(r) {
  var e, t, n, i, u = 0, a = new this(1), o = [];
  if (r === void 0 ? r = this.precision : ee(r, 1, be), n = Math.ceil(r / vr), this.crypto) if (crypto.getRandomValues) for (e = crypto.getRandomValues(new Uint32Array(n)); u < n; ) i = e[u], i >= 429e7 ? e[u] = crypto.getRandomValues(new Uint32Array(1))[0] : o[u++] = i % 1e7;
  else if (crypto.randomBytes) {
    for (e = crypto.randomBytes(n *= 4); u < n; ) i = e[u] + (e[u + 1] << 8) + (e[u + 2] << 16) + ((e[u + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(e, u) : (o.push(i % 1e7), u += 4);
    u = n / 4;
  } else throw Error(Xi);
  else for (; u < n; ) o[u++] = Math.random() * 1e7 | 0;
  for (n = o[--u], r %= vr, n && r && (i = Lr(10, vr - r), o[u] = (n / i | 0) * i); o[u] === 0; u--) o.pop();
  if (u < 0) t = 0, o = [0];
  else {
    for (t = -1; o[0] === 0; t -= vr) o.shift();
    for (n = 1, i = o[0]; i >= 10; i /= 10) n++;
    n < vr && (t -= vr - n);
  }
  return a.e = t, a.d = o, a;
}
function Uo(r) {
  return lr(r = new this(r), r.e + 1, this.rounding);
}
function Lo(r) {
  return r = new this(r), r.d ? r.d[0] ? r.s : 0 * r.s : r.s || NaN;
}
function Zo(r) {
  return new this(r).sin();
}
function Vo(r) {
  return new this(r).sinh();
}
function Wo(r) {
  return new this(r).sqrt();
}
function Jo(r, e) {
  return new this(r).sub(e);
}
function Yo() {
  var r = 0, e = arguments, t = new this(e[r]);
  for (pr = false; t.s && ++r < e.length; ) t = t.plus(e[r]);
  return pr = true, lr(t, this.precision, this.rounding);
}
function Qo(r) {
  return new this(r).tan();
}
function Xo(r) {
  return new this(r).tanh();
}
function Go(r) {
  return lr(r = new this(r), r.e + 1, 1);
}
V[Symbol.for("nodejs.util.inspect.custom")] = V.toString;
V[Symbol.toStringTag] = "Decimal";
var Ze = V.constructor = tu(Yt);
vt = new Ze(vt);
pt = new Ze(pt);
var Ko = "BigNumber", Ho = ["?on", "config"], ko = rr(Ko, Ho, (r) => {
  var { on: e, config: t } = r, n = Ze.clone({ precision: t.precision, modulo: Ze.EUCLID });
  return n.prototype = Object.create(n.prototype), n.prototype.type = "BigNumber", n.prototype.isBigNumber = true, n.prototype.toJSON = function() {
    return { mathjs: "BigNumber", value: this.toString() };
  }, n.fromJSON = function(i) {
    return new n(i.value);
  }, e && e("config", function(i, u) {
    i.precision !== u.precision && n.config({ precision: i.precision });
  }), n;
}, { isClass: true });
const Yr = Math.cosh || function(r) {
  return Math.abs(r) < 1e-9 ? 1 - r : (Math.exp(r) + Math.exp(-r)) * 0.5;
}, ue = Math.sinh || function(r) {
  return Math.abs(r) < 1e-9 ? r : (Math.exp(r) - Math.exp(-r)) * 0.5;
}, jo = function(r) {
  const e = Math.PI / 4;
  if (-e > r || r > e) return Math.cos(r) - 1;
  const t = r * r;
  return t * (t * (t * (t * (t * (t * (t * (t / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
}, Pt = function(r, e) {
  return r = Math.abs(r), e = Math.abs(e), r < e && ([r, e] = [e, r]), r < 1e8 ? Math.sqrt(r * r + e * e) : (e /= r, r * Math.sqrt(1 + e * e));
}, $e = function() {
  throw SyntaxError("Invalid Param");
};
function qt(r, e) {
  const t = Math.abs(r), n = Math.abs(e);
  return r === 0 ? Math.log(n) : e === 0 ? Math.log(t) : t < 3e3 && n < 3e3 ? Math.log(r * r + e * e) * 0.5 : (r = r * 0.5, e = e * 0.5, 0.5 * Math.log(r * r + e * e) + Math.LN2);
}
const rs = { re: 0, im: 0 }, _e = function(r, e) {
  const t = rs;
  if (r == null) t.re = t.im = 0;
  else if (e !== void 0) t.re = r, t.im = e;
  else switch (typeof r) {
    case "object":
      if ("im" in r && "re" in r) t.re = r.re, t.im = r.im;
      else if ("abs" in r && "arg" in r) {
        if (!isFinite(r.abs) && isFinite(r.arg)) return P.INFINITY;
        t.re = r.abs * Math.cos(r.arg), t.im = r.abs * Math.sin(r.arg);
      } else if ("r" in r && "phi" in r) {
        if (!isFinite(r.r) && isFinite(r.phi)) return P.INFINITY;
        t.re = r.r * Math.cos(r.phi), t.im = r.r * Math.sin(r.phi);
      } else r.length === 2 ? (t.re = r[0], t.im = r[1]) : $e();
      break;
    case "string":
      t.im = t.re = 0;
      const n = r.replace(/_/g, "").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
      let i = 1, u = 0;
      n === null && $e();
      for (let a = 0; a < n.length; a++) {
        const o = n[a];
        o === " " || o === "	" || o === `
` || (o === "+" ? i++ : o === "-" ? u++ : o === "i" || o === "I" ? (i + u === 0 && $e(), n[a + 1] !== " " && !isNaN(n[a + 1]) ? (t.im += parseFloat((u % 2 ? "-" : "") + n[a + 1]), a++) : t.im += parseFloat((u % 2 ? "-" : "") + "1"), i = u = 0) : ((i + u === 0 || isNaN(o)) && $e(), n[a + 1] === "i" || n[a + 1] === "I" ? (t.im += parseFloat((u % 2 ? "-" : "") + o), a++) : t.re += parseFloat((u % 2 ? "-" : "") + o), i = u = 0));
      }
      i + u > 0 && $e();
      break;
    case "number":
      t.im = 0, t.re = r;
      break;
    default:
      $e();
  }
  return isNaN(t.re) || isNaN(t.im), t;
};
function P(r, e) {
  if (!(this instanceof P)) return new P(r, e);
  const t = _e(r, e);
  this.re = t.re, this.im = t.im;
}
P.prototype = { re: 0, im: 0, sign: function() {
  const r = Pt(this.re, this.im);
  return new P(this.re / r, this.im / r);
}, add: function(r, e) {
  const t = _e(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im));
  return n || i ? n && i ? P.NAN : P.INFINITY : new P(this.re + t.re, this.im + t.im);
}, sub: function(r, e) {
  const t = _e(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im));
  return n || i ? n && i ? P.NAN : P.INFINITY : new P(this.re - t.re, this.im - t.im);
}, mul: function(r, e) {
  const t = _e(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im)), u = this.re === 0 && this.im === 0, a = t.re === 0 && t.im === 0;
  return n && a || i && u ? P.NAN : n || i ? P.INFINITY : t.im === 0 && this.im === 0 ? new P(this.re * t.re, 0) : new P(this.re * t.re - this.im * t.im, this.re * t.im + this.im * t.re);
}, div: function(r, e) {
  const t = _e(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im)), u = this.re === 0 && this.im === 0, a = t.re === 0 && t.im === 0;
  if (u && a || n && i) return P.NAN;
  if (a || n) return P.INFINITY;
  if (u || i) return P.ZERO;
  if (t.im === 0) return new P(this.re / t.re, this.im / t.re);
  if (Math.abs(t.re) < Math.abs(t.im)) {
    const o = t.re / t.im, f = t.re * o + t.im;
    return new P((this.re * o + this.im) / f, (this.im * o - this.re) / f);
  } else {
    const o = t.im / t.re, f = t.im * o + t.re;
    return new P((this.re + this.im * o) / f, (this.im - this.re * o) / f);
  }
}, pow: function(r, e) {
  const t = _e(r, e), n = this.re === 0 && this.im === 0;
  if (t.re === 0 && t.im === 0) return P.ONE;
  if (t.im === 0) {
    if (this.im === 0 && this.re > 0) return new P(Math.pow(this.re, t.re), 0);
    if (this.re === 0) switch ((t.re % 4 + 4) % 4) {
      case 0:
        return new P(Math.pow(this.im, t.re), 0);
      case 1:
        return new P(0, Math.pow(this.im, t.re));
      case 2:
        return new P(-Math.pow(this.im, t.re), 0);
      case 3:
        return new P(0, -Math.pow(this.im, t.re));
    }
  }
  if (n && t.re > 0) return P.ZERO;
  const u = Math.atan2(this.im, this.re), a = qt(this.re, this.im);
  let o = Math.exp(t.re * a - t.im * u), f = t.im * a + t.re * u;
  return new P(o * Math.cos(f), o * Math.sin(f));
}, sqrt: function() {
  const r = this.re, e = this.im;
  if (e === 0) return r >= 0 ? new P(Math.sqrt(r), 0) : new P(0, Math.sqrt(-r));
  const t = Pt(r, e);
  let n = Math.sqrt(0.5 * (t + Math.abs(r))), i = Math.abs(e) / (2 * n);
  return r >= 0 ? new P(n, e < 0 ? -i : i) : new P(i, e < 0 ? -n : n);
}, exp: function() {
  const r = Math.exp(this.re);
  return this.im === 0 ? new P(r, 0) : new P(r * Math.cos(this.im), r * Math.sin(this.im));
}, expm1: function() {
  const r = this.re, e = this.im;
  return new P(Math.expm1(r) * Math.cos(e) + jo(e), Math.exp(r) * Math.sin(e));
}, log: function() {
  const r = this.re, e = this.im;
  return e === 0 && r > 0 ? new P(Math.log(r), 0) : new P(qt(r, e), Math.atan2(e, r));
}, abs: function() {
  return Pt(this.re, this.im);
}, arg: function() {
  return Math.atan2(this.im, this.re);
}, sin: function() {
  const r = this.re, e = this.im;
  return new P(Math.sin(r) * Yr(e), Math.cos(r) * ue(e));
}, cos: function() {
  const r = this.re, e = this.im;
  return new P(Math.cos(r) * Yr(e), -Math.sin(r) * ue(e));
}, tan: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Math.cos(r) + Yr(e);
  return new P(Math.sin(r) / t, ue(e) / t);
}, cot: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Math.cos(r) - Yr(e);
  return new P(-Math.sin(r) / t, ue(e) / t);
}, sec: function() {
  const r = this.re, e = this.im, t = 0.5 * Yr(2 * e) + 0.5 * Math.cos(2 * r);
  return new P(Math.cos(r) * Yr(e) / t, Math.sin(r) * ue(e) / t);
}, csc: function() {
  const r = this.re, e = this.im, t = 0.5 * Yr(2 * e) - 0.5 * Math.cos(2 * r);
  return new P(Math.sin(r) * Yr(e) / t, -Math.cos(r) * ue(e) / t);
}, asin: function() {
  const r = this.re, e = this.im, t = new P(e * e - r * r + 1, -2 * r * e).sqrt(), n = new P(t.re - e, t.im + r).log();
  return new P(n.im, -n.re);
}, acos: function() {
  const r = this.re, e = this.im, t = new P(e * e - r * r + 1, -2 * r * e).sqrt(), n = new P(t.re - e, t.im + r).log();
  return new P(Math.PI / 2 - n.im, n.re);
}, atan: function() {
  const r = this.re, e = this.im;
  if (r === 0) {
    if (e === 1) return new P(0, 1 / 0);
    if (e === -1) return new P(0, -1 / 0);
  }
  const t = r * r + (1 - e) * (1 - e), n = new P((1 - e * e - r * r) / t, -2 * r / t).log();
  return new P(-0.5 * n.im, 0.5 * n.re);
}, acot: function() {
  const r = this.re, e = this.im;
  if (e === 0) return new P(Math.atan2(1, r), 0);
  const t = r * r + e * e;
  return t !== 0 ? new P(r / t, -e / t).atan() : new P(r !== 0 ? r / 0 : 0, e !== 0 ? -e / 0 : 0).atan();
}, asec: function() {
  const r = this.re, e = this.im;
  if (r === 0 && e === 0) return new P(0, 1 / 0);
  const t = r * r + e * e;
  return t !== 0 ? new P(r / t, -e / t).acos() : new P(r !== 0 ? r / 0 : 0, e !== 0 ? -e / 0 : 0).acos();
}, acsc: function() {
  const r = this.re, e = this.im;
  if (r === 0 && e === 0) return new P(Math.PI / 2, 1 / 0);
  const t = r * r + e * e;
  return t !== 0 ? new P(r / t, -e / t).asin() : new P(r !== 0 ? r / 0 : 0, e !== 0 ? -e / 0 : 0).asin();
}, sinh: function() {
  const r = this.re, e = this.im;
  return new P(ue(r) * Math.cos(e), Yr(r) * Math.sin(e));
}, cosh: function() {
  const r = this.re, e = this.im;
  return new P(Yr(r) * Math.cos(e), ue(r) * Math.sin(e));
}, tanh: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Yr(r) + Math.cos(e);
  return new P(ue(r) / t, Math.sin(e) / t);
}, coth: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Yr(r) - Math.cos(e);
  return new P(ue(r) / t, -Math.sin(e) / t);
}, csch: function() {
  const r = this.re, e = this.im, t = Math.cos(2 * e) - Yr(2 * r);
  return new P(-2 * ue(r) * Math.cos(e) / t, 2 * Yr(r) * Math.sin(e) / t);
}, sech: function() {
  const r = this.re, e = this.im, t = Math.cos(2 * e) + Yr(2 * r);
  return new P(2 * Yr(r) * Math.cos(e) / t, -2 * ue(r) * Math.sin(e) / t);
}, asinh: function() {
  let r = this.im;
  this.im = -this.re, this.re = r;
  const e = this.asin();
  return this.re = -this.im, this.im = r, r = e.re, e.re = -e.im, e.im = r, e;
}, acosh: function() {
  const r = this.acos();
  if (r.im <= 0) {
    const e = r.re;
    r.re = -r.im, r.im = e;
  } else {
    const e = r.im;
    r.im = -r.re, r.re = e;
  }
  return r;
}, atanh: function() {
  const r = this.re, e = this.im, t = r > 1 && e === 0, n = 1 - r, i = 1 + r, u = n * n + e * e, a = u !== 0 ? new P((i * n - e * e) / u, (e * n + i * e) / u) : new P(r !== -1 ? r / 0 : 0, e !== 0 ? e / 0 : 0), o = a.re;
  return a.re = qt(a.re, a.im) / 2, a.im = Math.atan2(a.im, o) / 2, t && (a.im = -a.im), a;
}, acoth: function() {
  const r = this.re, e = this.im;
  if (r === 0 && e === 0) return new P(0, Math.PI / 2);
  const t = r * r + e * e;
  return t !== 0 ? new P(r / t, -e / t).atanh() : new P(r !== 0 ? r / 0 : 0, e !== 0 ? -e / 0 : 0).atanh();
}, acsch: function() {
  const r = this.re, e = this.im;
  if (e === 0) return new P(r !== 0 ? Math.log(r + Math.sqrt(r * r + 1)) : 1 / 0, 0);
  const t = r * r + e * e;
  return t !== 0 ? new P(r / t, -e / t).asinh() : new P(r !== 0 ? r / 0 : 0, e !== 0 ? -e / 0 : 0).asinh();
}, asech: function() {
  const r = this.re, e = this.im;
  if (this.isZero()) return P.INFINITY;
  const t = r * r + e * e;
  return t !== 0 ? new P(r / t, -e / t).acosh() : new P(r !== 0 ? r / 0 : 0, e !== 0 ? -e / 0 : 0).acosh();
}, inverse: function() {
  if (this.isZero()) return P.INFINITY;
  if (this.isInfinite()) return P.ZERO;
  const r = this.re, e = this.im, t = r * r + e * e;
  return new P(r / t, -e / t);
}, conjugate: function() {
  return new P(this.re, -this.im);
}, neg: function() {
  return new P(-this.re, -this.im);
}, ceil: function(r) {
  return r = Math.pow(10, r || 0), new P(Math.ceil(this.re * r) / r, Math.ceil(this.im * r) / r);
}, floor: function(r) {
  return r = Math.pow(10, r || 0), new P(Math.floor(this.re * r) / r, Math.floor(this.im * r) / r);
}, round: function(r) {
  return r = Math.pow(10, r || 0), new P(Math.round(this.re * r) / r, Math.round(this.im * r) / r);
}, equals: function(r, e) {
  const t = _e(r, e);
  return Math.abs(t.re - this.re) <= P.EPSILON && Math.abs(t.im - this.im) <= P.EPSILON;
}, clone: function() {
  return new P(this.re, this.im);
}, toString: function() {
  let r = this.re, e = this.im, t = "";
  return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(r) < P.EPSILON && (r = 0), Math.abs(e) < P.EPSILON && (e = 0), e === 0 ? t + r : (r !== 0 ? (t += r, t += " ", e < 0 ? (e = -e, t += "-") : t += "+", t += " ") : e < 0 && (e = -e, t += "-"), e !== 1 && (t += e), t + "i"));
}, toVector: function() {
  return [this.re, this.im];
}, valueOf: function() {
  return this.im === 0 ? this.re : null;
}, isNaN: function() {
  return isNaN(this.re) || isNaN(this.im);
}, isZero: function() {
  return this.im === 0 && this.re === 0;
}, isFinite: function() {
  return isFinite(this.re) && isFinite(this.im);
}, isInfinite: function() {
  return !this.isFinite();
} };
P.ZERO = new P(0, 0);
P.ONE = new P(1, 0);
P.I = new P(0, 1);
P.PI = new P(Math.PI, 0);
P.E = new P(Math.E, 0);
P.INFINITY = new P(1 / 0, 1 / 0);
P.NAN = new P(NaN, NaN);
P.EPSILON = 1e-15;
var es = "Complex", ts = [], ns = rr(es, ts, () => (Object.defineProperty(P, "name", { value: "Complex" }), P.prototype.constructor = P, P.prototype.type = "Complex", P.prototype.isComplex = true, P.prototype.toJSON = function() {
  return { mathjs: "Complex", re: this.re, im: this.im };
}, P.prototype.toPolar = function() {
  return { r: this.abs(), phi: this.arg() };
}, P.prototype.format = function(r) {
  var e = "", t = this.im, n = this.re, i = Vt(this.re, r), u = Vt(this.im, r), a = xr(r) ? r : r ? r.precision : null;
  if (a !== null) {
    var o = Math.pow(10, -a);
    Math.abs(n / t) < o && (n = 0), Math.abs(t / n) < o && (t = 0);
  }
  return t === 0 ? e = i : n === 0 ? t === 1 ? e = "i" : t === -1 ? e = "-i" : e = u + "i" : t < 0 ? t === -1 ? e = i + " - i" : e = i + " - " + u.substring(1) + "i" : t === 1 ? e = i + " + i" : e = i + " + " + u + "i", e;
}, P.fromPolar = function(r) {
  switch (arguments.length) {
    case 1: {
      var e = arguments[0];
      if (typeof e == "object") return P(e);
      throw new TypeError("Input has to be an object with r and phi keys.");
    }
    case 2: {
      var t = arguments[0], n = arguments[1];
      if (xr(t)) {
        if (Ii(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), xr(n)) return new P({ r: t, phi: n });
        throw new TypeError("Phi is not a number nor an angle unit.");
      } else throw new TypeError("Radius r is not a number.");
    }
    default:
      throw new SyntaxError("Wrong number of arguments in function fromPolar");
  }
}, P.prototype.valueOf = P.prototype.toString, P.fromJSON = function(r) {
  return new P(r);
}, P.compare = function(r, e) {
  return r.re > e.re ? 1 : r.re < e.re ? -1 : r.im > e.im ? 1 : r.im < e.im ? -1 : 0;
}, P), { isClass: true });
typeof BigInt > "u" && (BigInt = function(r) {
  if (isNaN(r)) throw new Error("");
  return r;
});
const cr = BigInt(0), Dr = BigInt(1), ke = BigInt(2), Kt = BigInt(5), jr = BigInt(10), is = 2e3, ir = { s: Dr, n: cr, d: Dr };
function de(r, e) {
  try {
    r = BigInt(r);
  } catch {
    throw ye();
  }
  return r * e;
}
function fe(r) {
  return typeof r == "bigint" ? r : Math.floor(r);
}
function Pr(r, e) {
  if (e === cr) throw sn();
  const t = Object.create(ae.prototype);
  t.s = r < cr ? -Dr : Dr, r = r < cr ? -r : r;
  const n = Be(r, e);
  return t.n = r / n, t.d = e / n, t;
}
function Pe(r) {
  const e = {};
  let t = r, n = ke, i = Kt - Dr;
  for (; i <= t; ) {
    for (; t % n === cr; ) t /= n, e[n] = (e[n] || cr) + Dr;
    i += Dr + ke * n++;
  }
  return t !== r ? t > 1 && (e[t] = (e[t] || cr) + Dr) : e[r] = (e[r] || cr) + Dr, e;
}
const Vr = function(r, e) {
  let t = cr, n = Dr, i = Dr;
  if (r != null) if (e !== void 0) {
    if (typeof r == "bigint") t = r;
    else {
      if (isNaN(r)) throw ye();
      if (r % 1 !== 0) throw xn();
      t = BigInt(r);
    }
    if (typeof e == "bigint") n = e;
    else {
      if (isNaN(e)) throw ye();
      if (e % 1 !== 0) throw xn();
      n = BigInt(e);
    }
    i = t * n;
  } else if (typeof r == "object") {
    if ("d" in r && "n" in r) t = BigInt(r.n), n = BigInt(r.d), "s" in r && (t *= BigInt(r.s));
    else if (0 in r) t = BigInt(r[0]), 1 in r && (n = BigInt(r[1]));
    else if (typeof r == "bigint") t = r;
    else throw ye();
    i = t * n;
  } else if (typeof r == "number") {
    if (isNaN(r)) throw ye();
    if (r < 0 && (i = -Dr, r = -r), r % 1 === 0) t = BigInt(r);
    else {
      let u = 1, a = 0, o = 1, f = 1, c = 1, s = 1e7;
      for (r >= 1 && (u = 10 ** Math.floor(1 + Math.log10(r)), r /= u); o <= s && c <= s; ) {
        let h = (a + f) / (o + c);
        if (r === h) {
          o + c <= s ? (t = a + f, n = o + c) : c > o ? (t = f, n = c) : (t = a, n = o);
          break;
        } else r > h ? (a += f, o += c) : (f += a, c += o), o > s ? (t = f, n = c) : (t = a, n = o);
      }
      t = BigInt(t) * BigInt(u), n = BigInt(n);
    }
  } else if (typeof r == "string") {
    let u = 0, a = cr, o = cr, f = cr, c = Dr, s = Dr, h = r.replace(/_/g, "").match(/\d+|./g);
    if (h === null) throw ye();
    if (h[u] === "-" ? (i = -Dr, u++) : h[u] === "+" && u++, h.length === u + 1 ? o = de(h[u++], i) : h[u + 1] === "." || h[u] === "." ? (h[u] !== "." && (a = de(h[u++], i)), u++, (u + 1 === h.length || h[u + 1] === "(" && h[u + 3] === ")" || h[u + 1] === "'" && h[u + 3] === "'") && (o = de(h[u], i), c = jr ** BigInt(h[u].length), u++), (h[u] === "(" && h[u + 2] === ")" || h[u] === "'" && h[u + 2] === "'") && (f = de(h[u + 1], i), s = jr ** BigInt(h[u + 1].length) - Dr, u += 3)) : h[u + 1] === "/" || h[u + 1] === ":" ? (o = de(h[u], i), c = de(h[u + 2], Dr), u += 3) : h[u + 3] === "/" && h[u + 1] === " " && (a = de(h[u], i), o = de(h[u + 2], i), c = de(h[u + 4], Dr), u += 5), h.length <= u) n = c * s, i = t = f + n * a + s * o;
    else throw ye();
  } else if (typeof r == "bigint") t = r, i = r, n = Dr;
  else throw ye();
  if (n === cr) throw sn();
  ir.s = i < cr ? -Dr : Dr, ir.n = t < cr ? -t : t, ir.d = n < cr ? -n : n;
};
function us(r, e, t) {
  let n = Dr;
  for (; e > cr; r = r * r % t, e >>= Dr) e & Dr && (n = n * r % t);
  return n;
}
function as(r, e) {
  for (; e % ke === cr; e /= ke) ;
  for (; e % Kt === cr; e /= Kt) ;
  if (e === Dr) return cr;
  let t = jr % e, n = 1;
  for (; t !== Dr; n++) if (t = t * jr % e, n > is) return cr;
  return BigInt(n);
}
function os(r, e, t) {
  let n = Dr, i = us(jr, t, e);
  for (let u = 0; u < 300; u++) {
    if (n === i) return BigInt(u);
    n = n * jr % e, i = i * jr % e;
  }
  return 0;
}
function Be(r, e) {
  if (!r) return e;
  if (!e) return r;
  for (; ; ) {
    if (r %= e, !r) return e;
    if (e %= r, !e) return r;
  }
}
function ae(r, e) {
  if (Vr(r, e), this instanceof ae) r = Be(ir.d, ir.n), this.s = ir.s, this.n = ir.n / r, this.d = ir.d / r;
  else return Pr(ir.s * ir.n, ir.d);
}
var sn = function() {
  return new Error("Division by Zero");
}, ye = function() {
  return new Error("Invalid argument");
}, xn = function() {
  return new Error("Parameters must be integer");
};
ae.prototype = { s: Dr, n: cr, d: Dr, abs: function() {
  return Pr(this.n, this.d);
}, neg: function() {
  return Pr(-this.s * this.n, this.d);
}, add: function(r, e) {
  return Vr(r, e), Pr(this.s * this.n * ir.d + ir.s * this.d * ir.n, this.d * ir.d);
}, sub: function(r, e) {
  return Vr(r, e), Pr(this.s * this.n * ir.d - ir.s * this.d * ir.n, this.d * ir.d);
}, mul: function(r, e) {
  return Vr(r, e), Pr(this.s * ir.s * this.n * ir.n, this.d * ir.d);
}, div: function(r, e) {
  return Vr(r, e), Pr(this.s * ir.s * this.n * ir.d, this.d * ir.n);
}, clone: function() {
  return Pr(this.s * this.n, this.d);
}, mod: function(r, e) {
  if (r === void 0) return Pr(this.s * this.n % this.d, Dr);
  if (Vr(r, e), cr === ir.n * this.d) throw sn();
  return Pr(this.s * (ir.d * this.n) % (ir.n * this.d), ir.d * this.d);
}, gcd: function(r, e) {
  return Vr(r, e), Pr(Be(ir.n, this.n) * Be(ir.d, this.d), ir.d * this.d);
}, lcm: function(r, e) {
  return Vr(r, e), ir.n === cr && this.n === cr ? Pr(cr, Dr) : Pr(ir.n * this.n, Be(ir.n, this.n) * Be(ir.d, this.d));
}, inverse: function() {
  return Pr(this.s * this.d, this.n);
}, pow: function(r, e) {
  if (Vr(r, e), ir.d === Dr) return ir.s < cr ? Pr((this.s * this.d) ** ir.n, this.n ** ir.n) : Pr((this.s * this.n) ** ir.n, this.d ** ir.n);
  if (this.s < cr) return null;
  let t = Pe(this.n), n = Pe(this.d), i = Dr, u = Dr;
  for (let a in t) if (a !== "1") {
    if (a === "0") {
      i = cr;
      break;
    }
    if (t[a] *= ir.n, t[a] % ir.d === cr) t[a] /= ir.d;
    else return null;
    i *= BigInt(a) ** t[a];
  }
  for (let a in n) if (a !== "1") {
    if (n[a] *= ir.n, n[a] % ir.d === cr) n[a] /= ir.d;
    else return null;
    u *= BigInt(a) ** n[a];
  }
  return ir.s < cr ? Pr(u, i) : Pr(i, u);
}, log: function(r, e) {
  if (Vr(r, e), this.s <= cr || ir.s <= cr) return null;
  const t = {}, n = Pe(ir.n), i = Pe(ir.d), u = Pe(this.n), a = Pe(this.d);
  for (const c in i) n[c] = (n[c] || cr) - i[c];
  for (const c in a) u[c] = (u[c] || cr) - a[c];
  for (const c in n) c !== "1" && (t[c] = true);
  for (const c in u) c !== "1" && (t[c] = true);
  let o = null, f = null;
  for (const c in t) {
    const s = n[c] || cr, h = u[c] || cr;
    if (s === cr) {
      if (h !== cr) return null;
      continue;
    }
    let p = h, v = s;
    const d = Be(p, v);
    if (p /= d, v /= d, o === null && f === null) o = p, f = v;
    else if (p * f !== o * v) return null;
  }
  return o !== null && f !== null ? Pr(o, f) : null;
}, equals: function(r, e) {
  return Vr(r, e), this.s * this.n * ir.d === ir.s * ir.n * this.d;
}, lt: function(r, e) {
  return Vr(r, e), this.s * this.n * ir.d < ir.s * ir.n * this.d;
}, lte: function(r, e) {
  return Vr(r, e), this.s * this.n * ir.d <= ir.s * ir.n * this.d;
}, gt: function(r, e) {
  return Vr(r, e), this.s * this.n * ir.d > ir.s * ir.n * this.d;
}, gte: function(r, e) {
  return Vr(r, e), this.s * this.n * ir.d >= ir.s * ir.n * this.d;
}, compare: function(r, e) {
  Vr(r, e);
  let t = this.s * this.n * ir.d - ir.s * ir.n * this.d;
  return (cr < t) - (t < cr);
}, ceil: function(r) {
  return r = jr ** BigInt(r || 0), Pr(fe(this.s * r * this.n / this.d) + (r * this.n % this.d > cr && this.s >= cr ? Dr : cr), r);
}, floor: function(r) {
  return r = jr ** BigInt(r || 0), Pr(fe(this.s * r * this.n / this.d) - (r * this.n % this.d > cr && this.s < cr ? Dr : cr), r);
}, round: function(r) {
  return r = jr ** BigInt(r || 0), Pr(fe(this.s * r * this.n / this.d) + this.s * ((this.s >= cr ? Dr : cr) + ke * (r * this.n % this.d) > this.d ? Dr : cr), r);
}, roundTo: function(r, e) {
  Vr(r, e);
  const t = this.n * ir.d, n = this.d * ir.n, i = t % n;
  let u = fe(t / n);
  return i + i >= n && u++, Pr(this.s * u * ir.n, ir.d);
}, divisible: function(r, e) {
  return Vr(r, e), !(!(ir.n * this.d) || this.n * ir.d % (ir.n * this.d));
}, valueOf: function() {
  return Number(this.s * this.n) / Number(this.d);
}, toString: function(r) {
  let e = this.n, t = this.d;
  r = r || 15;
  let n = as(e, t), i = os(e, t, n), u = this.s < cr ? "-" : "";
  if (u += fe(e / t), e %= t, e *= jr, e && (u += "."), n) {
    for (let a = i; a--; ) u += fe(e / t), e %= t, e *= jr;
    u += "(";
    for (let a = n; a--; ) u += fe(e / t), e %= t, e *= jr;
    u += ")";
  } else for (let a = r; e && a--; ) u += fe(e / t), e %= t, e *= jr;
  return u;
}, toFraction: function(r) {
  let e = this.n, t = this.d, n = this.s < cr ? "-" : "";
  if (t === Dr) n += e;
  else {
    let i = fe(e / t);
    r && i > cr && (n += i, n += " ", e %= t), n += e, n += "/", n += t;
  }
  return n;
}, toLatex: function(r) {
  let e = this.n, t = this.d, n = this.s < cr ? "-" : "";
  if (t === Dr) n += e;
  else {
    let i = fe(e / t);
    r && i > cr && (n += i, e %= t), n += "\\frac{", n += e, n += "}{", n += t, n += "}";
  }
  return n;
}, toContinued: function() {
  let r = this.n, e = this.d, t = [];
  do {
    t.push(fe(r / e));
    let n = r % e;
    r = e, e = n;
  } while (r !== Dr);
  return t;
}, simplify: function(r) {
  const e = BigInt(1 / (r || 1e-3) | 0), t = this.abs(), n = t.toContinued();
  for (let i = 1; i < n.length; i++) {
    let u = Pr(n[i - 1], Dr);
    for (let o = i - 2; o >= 0; o--) u = u.inverse().add(n[o]);
    let a = u.sub(t);
    if (a.n * e < a.d) return u.mul(this.s);
  }
  return this;
} };
var ss = "Fraction", fs = [], cs = rr(ss, fs, () => (Object.defineProperty(ae, "name", { value: "Fraction" }), ae.prototype.constructor = ae, ae.prototype.type = "Fraction", ae.prototype.isFraction = true, ae.prototype.toJSON = function() {
  return { mathjs: "Fraction", n: String(this.s * this.n), d: String(this.d) };
}, ae.fromJSON = function(r) {
  return new ae(r);
}, ae), { isClass: true }), ls = "Matrix", hs = [], vs = rr(ls, hs, () => {
  function r() {
    if (!(this instanceof r)) throw new SyntaxError("Constructor must be called with the new operator");
  }
  return r.prototype.type = "Matrix", r.prototype.isMatrix = true, r.prototype.storage = function() {
    throw new Error("Cannot invoke storage on a Matrix interface");
  }, r.prototype.datatype = function() {
    throw new Error("Cannot invoke datatype on a Matrix interface");
  }, r.prototype.create = function(e, t) {
    throw new Error("Cannot invoke create on a Matrix interface");
  }, r.prototype.subset = function(e, t, n) {
    throw new Error("Cannot invoke subset on a Matrix interface");
  }, r.prototype.get = function(e) {
    throw new Error("Cannot invoke get on a Matrix interface");
  }, r.prototype.set = function(e, t, n) {
    throw new Error("Cannot invoke set on a Matrix interface");
  }, r.prototype.resize = function(e, t) {
    throw new Error("Cannot invoke resize on a Matrix interface");
  }, r.prototype.reshape = function(e, t) {
    throw new Error("Cannot invoke reshape on a Matrix interface");
  }, r.prototype.clone = function() {
    throw new Error("Cannot invoke clone on a Matrix interface");
  }, r.prototype.size = function() {
    throw new Error("Cannot invoke size on a Matrix interface");
  }, r.prototype.map = function(e, t) {
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
function Rt(r, e, t) {
  var n = r.constructor, i = new n(2), u = "";
  if (t) {
    if (t < 1) throw new Error("size must be in greater than 0");
    if (!br(t)) throw new Error("size must be an integer");
    if (r.greaterThan(i.pow(t - 1).sub(1)) || r.lessThan(i.pow(t - 1).mul(-1))) throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
    if (!r.isInteger()) throw new Error("Value must be an integer");
    r.lessThan(0) && (r = r.add(i.pow(t))), u = "i".concat(t);
  }
  switch (e) {
    case 2:
      return "".concat(r.toBinary()).concat(u);
    case 8:
      return "".concat(r.toOctal()).concat(u);
    case 16:
      return "".concat(r.toHexadecimal()).concat(u);
    default:
      throw new Error("Base ".concat(e, " not supported "));
  }
}
function ps(r, e) {
  if (typeof e == "function") return e(r);
  if (!r.isFinite()) return r.isNaN() ? "NaN" : r.gt(0) ? "Infinity" : "-Infinity";
  var { notation: t, precision: n, wordSize: i } = Zi(e);
  switch (t) {
    case "fixed":
      return ms(r, n);
    case "exponential":
      return Tn(r, n);
    case "engineering":
      return ds(r, n);
    case "bin":
      return Rt(r, 2, i);
    case "oct":
      return Rt(r, 8, i);
    case "hex":
      return Rt(r, 16, i);
    case "auto": {
      var u = In(e == null ? void 0 : e.lowerExp, -3), a = In(e == null ? void 0 : e.upperExp, 5);
      if (r.isZero()) return "0";
      var o, f = r.toSignificantDigits(n), c = f.e;
      return c >= u && c < a ? o = f.toFixed() : o = Tn(r, n), o.replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2], h = arguments[4];
        return s !== "." ? s + h : h;
      });
    }
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function ds(r, e) {
  var t = r.e, n = t % 3 === 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3, i = r.mul(Math.pow(10, -n)), u = i.toPrecision(e);
  if (u.includes("e")) {
    var a = r.constructor;
    u = new a(u).toFixed();
  }
  return u + "e" + (t >= 0 ? "+" : "") + n.toString();
}
function Tn(r, e) {
  return e !== void 0 ? r.toExponential(e - 1) : r.toExponential();
}
function ms(r, e) {
  return r.toFixed(e);
}
function In(r, e) {
  return xr(r) ? r : Rr(r) ? r.toNumber() : e;
}
function k0(r, e) {
  var t = r.length - e.length, n = r.length;
  return r.substring(t, n) === e;
}
function $r(r, e) {
  var t = Ds(r, e);
  return e && typeof e == "object" && "truncate" in e && t.length > e.truncate ? t.substring(0, e.truncate - 3) + "..." : t;
}
function Ds(r, e) {
  if (typeof r == "number") return Vt(r, e);
  if (Rr(r)) return ps(r, e);
  if (gs(r)) return !e || e.fraction !== "decimal" ? "".concat(r.s * r.n, "/").concat(r.d) : r.toString();
  if (Array.isArray(r)) return nu(r, e);
  if (re(r)) return zn(r);
  if (typeof r == "function") return r.syntax ? String(r.syntax) : "function";
  if (r && typeof r == "object") {
    if (typeof r.format == "function") return r.format(e);
    if (r && r.toString(e) !== {}.toString()) return r.toString(e);
    var t = Object.keys(r).map((n) => zn(n) + ": " + $r(r[n], e));
    return "{" + t.join(", ") + "}";
  }
  return String(r);
}
function zn(r) {
  for (var e = String(r), t = "", n = 0; n < e.length; ) {
    var i = e.charAt(n);
    t += i in On ? On[i] : i, n++;
  }
  return '"' + t + '"';
}
var On = { '"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" };
function j0(r) {
  var e = String(r);
  return e = e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), e;
}
function nu(r, e) {
  if (Array.isArray(r)) {
    for (var t = "[", n = r.length, i = 0; i < n; i++) i !== 0 && (t += ", "), t += nu(r[i], e);
    return t += "]", t;
  } else return $r(r, e);
}
function gs(r) {
  return r && typeof r == "object" && typeof r.s == "bigint" && typeof r.n == "bigint" && typeof r.d == "bigint" || false;
}
function rh(r, e) {
  if (!re(r)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Gr(r) + ", index: 0)");
  if (!re(e)) throw new TypeError("Unexpected type of argument in function compareText (expected: string or Array or Matrix, actual: " + Gr(e) + ", index: 1)");
  return r === e ? 0 : r > e ? 1 : -1;
}
function Fr(r, e, t) {
  if (!(this instanceof Fr)) throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = r, this.expected = e, this.relation = t, this.message = "Dimension mismatch (" + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + " " + (this.relation || "!=") + " " + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + ")", this.stack = new Error().stack;
}
Fr.prototype = new RangeError();
Fr.prototype.constructor = RangeError;
Fr.prototype.name = "DimensionError";
Fr.prototype.isDimensionError = true;
function Ce(r, e, t) {
  if (!(this instanceof Ce)) throw new SyntaxError("Constructor must be called with the new operator");
  this.index = r, arguments.length < 3 ? (this.min = 0, this.max = e) : (this.min = e, this.max = t), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
Ce.prototype = new RangeError();
Ce.prototype.constructor = RangeError;
Ce.prototype.name = "IndexError";
Ce.prototype.isIndexError = true;
function wr(r) {
  for (var e = []; Array.isArray(r); ) e.push(r.length), r = r[0];
  return e;
}
function iu(r, e, t) {
  var n, i = r.length;
  if (i !== e[t]) throw new Fr(i, e[t]);
  if (t < e.length - 1) {
    var u = t + 1;
    for (n = 0; n < i; n++) {
      var a = r[n];
      if (!Array.isArray(a)) throw new Fr(e.length - 1, e.length, "<");
      iu(r[n], e, u);
    }
  } else for (n = 0; n < i; n++) if (Array.isArray(r[n])) throw new Fr(e.length + 1, e.length, ">");
}
function $n(r, e) {
  var t = e.length === 0;
  if (t) {
    if (Array.isArray(r)) throw new Fr(r.length, 0);
  } else iu(r, e, 0);
}
function eh(r, e) {
  var t = r.isMatrix ? r._size : wr(r), n = e._sourceSize;
  n.forEach((i, u) => {
    if (i !== null && i !== t[u]) throw new Fr(i, t[u]);
  });
}
function qr(r, e) {
  if (r !== void 0) {
    if (!xr(r) || !br(r)) throw new TypeError("Index must be an integer (value: " + r + ")");
    if (r < 0 || typeof e == "number" && r >= e) throw new Ce(r, e);
  }
}
function th(r) {
  for (var e = 0; e < r._dimensions.length; ++e) {
    var t = r._dimensions[e];
    if (t._data && Or(t._data)) {
      if (t._size[0] === 0) return true;
    } else if (t.isRange) {
      if (t.start === t.end) return true;
    } else if (re(t) && t.length === 0) return true;
  }
  return false;
}
function mt(r, e, t) {
  if (!Array.isArray(e)) throw new TypeError("Array expected");
  if (e.length === 0) throw new Error("Resizing to scalar is not supported");
  e.forEach(function(i) {
    if (!xr(i) || !br(i) || i < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + $r(e) + ")");
  }), (xr(r) || Rr(r)) && (r = [r]);
  var n = t !== void 0 ? t : 0;
  return Ht(r, e, 0, n), r;
}
function Ht(r, e, t, n) {
  var i, u, a = r.length, o = e[t], f = Math.min(a, o);
  if (r.length = o, t < e.length - 1) {
    var c = t + 1;
    for (i = 0; i < f; i++) u = r[i], Array.isArray(u) || (u = [u], r[i] = u), Ht(u, e, c, n);
    for (i = f; i < o; i++) u = [], r[i] = u, Ht(u, e, c, n);
  } else {
    for (i = 0; i < f; i++) for (; Array.isArray(r[i]); ) r[i] = r[i][0];
    for (i = f; i < o; i++) r[i] = n;
  }
}
function fn(r, e) {
  var t = kt(r, true), n = t.length;
  if (!Array.isArray(r) || !Array.isArray(e)) throw new TypeError("Array expected");
  if (e.length === 0) throw new Fr(0, n, "!=");
  e = cn(e, n);
  var i = uu(e);
  if (n !== i) throw new Fr(i, n, "!=");
  try {
    return ys(t, e);
  } catch (u) {
    throw u instanceof Fr ? new Fr(i, n, "!=") : u;
  }
}
function cn(r, e) {
  var t = uu(r), n = r.slice(), i = -1, u = r.indexOf(i), a = r.indexOf(i, u + 1) >= 0;
  if (a) throw new Error("More than one wildcard in sizes");
  var o = u >= 0, f = e % t === 0;
  if (o) if (f) n[u] = -e / t;
  else throw new Error("Could not replace wildcard, since " + e + " is no multiple of " + -t);
  return n;
}
function uu(r) {
  return r.reduce((e, t) => e * t, 1);
}
function ys(r, e) {
  for (var t = r, n, i = e.length - 1; i > 0; i--) {
    var u = e[i];
    n = [];
    for (var a = t.length / u, o = 0; o < a; o++) n.push(t.slice(o * u, (o + 1) * u));
    t = n;
  }
  return t;
}
function Pn(r, e) {
  for (var t = wr(r); Array.isArray(r) && r.length === 1; ) r = r[0], t.shift();
  for (var n = t.length; t[n - 1] === 1; ) n--;
  return n < t.length && (r = au(r, n, 0), t.length = n), r;
}
function au(r, e, t) {
  var n, i;
  if (t < e) {
    var u = t + 1;
    for (n = 0, i = r.length; n < i; n++) r[n] = au(r[n], e, u);
  } else for (; Array.isArray(r); ) r = r[0];
  return r;
}
function ou(r, e, t, n) {
  var i = n || wr(r);
  if (t) for (var u = 0; u < t; u++) r = [r], i.unshift(1);
  for (r = su(r, e, 0); i.length < e; ) i.push(1);
  return r;
}
function su(r, e, t) {
  var n, i;
  if (Array.isArray(r)) {
    var u = t + 1;
    for (n = 0, i = r.length; n < i; n++) r[n] = su(r[n], e, u);
  } else for (var a = t; a < e; a++) r = [r];
  return r;
}
function kt(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (!Array.isArray(r)) return r;
  if (typeof e != "boolean") throw new TypeError("Boolean expected for second argument of flatten");
  var t = [];
  return e ? i(r) : n(r), t;
  function n(u) {
    for (var a = 0; a < u.length; a++) {
      var o = u[a];
      Array.isArray(o) ? n(o) : t.push(o);
    }
  }
  function i(u) {
    if (Array.isArray(u[0])) for (var a = 0; a < u.length; a++) i(u[a]);
    else for (var o = 0; o < u.length; o++) t.push(u[o]);
  }
}
function nh(r, e) {
  return Array.prototype.map.call(r, e);
}
function ih(r, e) {
  Array.prototype.forEach.call(r, e);
}
function uh(r, e) {
  if (wr(r).length !== 1) throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(r, e);
}
function ah(r, e) {
  if (wr(r).length !== 1) throw new Error("Only one dimensional matrices supported");
  return Array.prototype.filter.call(r, (t) => e.test(t));
}
function oh(r, e) {
  return Array.prototype.join.call(r, e);
}
function sh(r) {
  if (!Array.isArray(r)) throw new TypeError("Array input expected");
  if (r.length === 0) return r;
  var e = [], t = 0;
  e[0] = { value: r[0], identifier: 0 };
  for (var n = 1; n < r.length; n++) r[n] === r[n - 1] ? t++ : t = 0, e.push({ value: r[n], identifier: t });
  return e;
}
function fh(r) {
  if (!Array.isArray(r)) throw new TypeError("Array input expected");
  if (r.length === 0) return r;
  for (var e = [], t = 0; t < r.length; t++) e.push(r[t].value);
  return e;
}
function St(r, e) {
  for (var t, n = 0, i = 0; i < r.length; i++) {
    var u = r[i], a = Array.isArray(u);
    if (i === 0 && a && (n = u.length), a && u.length !== n) return;
    var o = a ? St(u, e) : e(u);
    if (t === void 0) t = o;
    else if (t !== o) return "mixed";
  }
  return t;
}
function fu(r, e, t, n) {
  if (n < t) {
    if (r.length !== e.length) throw new Fr(r.length, e.length);
    for (var i = [], u = 0; u < r.length; u++) i[u] = fu(r[u], e[u], t, n + 1);
    return i;
  } else return r.concat(e);
}
function cu() {
  var r = Array.prototype.slice.call(arguments, 0, -1), e = Array.prototype.slice.call(arguments, -1);
  if (r.length === 1) return r[0];
  if (r.length > 1) return r.slice(1).reduce(function(t, n) {
    return fu(t, n, e, 0);
  }, r[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function lu() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
  for (var n = e.map((p) => p.length), i = Math.max(...n), u = new Array(i).fill(null), a = 0; a < e.length; a++) for (var o = e[a], f = n[a], c = 0; c < f; c++) {
    var s = i - f + c;
    o[c] > u[s] && (u[s] = o[c]);
  }
  for (var h = 0; h < e.length; h++) hu(e[h], u);
  return u;
}
function hu(r, e) {
  for (var t = e.length, n = r.length, i = 0; i < n; i++) {
    var u = t - n + i;
    if (r[i] < e[u] && r[i] > 1 || r[i] > e[u]) throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(r, ") not possible to broadcast dimension ").concat(n, " with size ").concat(r[i], " to size ").concat(e[u]));
  }
}
function jt(r, e) {
  var t = wr(r);
  if (Fe(t, e)) return r;
  hu(t, e);
  var n = lu(t, e), i = n.length, u = [...Array(i - t.length).fill(1), ...t], a = Fs(r);
  t.length < i && (a = fn(a, u), t = wr(a));
  for (var o = 0; o < i; o++) t[o] < n[o] && (a = ws(a, n[o], o), t = wr(a));
  return a;
}
function ws(r, e, t) {
  return cu(...Array(e).fill(r), t);
}
function vu(r, e) {
  if (!Array.isArray(r)) throw new Error("Array expected");
  var t = wr(r);
  if (e.length !== t.length) throw new Fr(e.length, t.length);
  for (var n = 0; n < e.length; n++) qr(e[n], t[n]);
  return e.reduce((i, u) => i[u], r);
}
function qn(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (r.length === 0) return [];
  if (t) return u(r);
  var n = [];
  return i(r, 0);
  function i(a, o) {
    if (Array.isArray(a)) {
      for (var f = a.length, c = Array(f), s = 0; s < f; s++) n[o] = s, c[s] = i(a[s], o + 1);
      return c;
    } else return e(a, n.slice(0, o), r);
  }
  function u(a) {
    if (Array.isArray(a)) {
      for (var o = a.length, f = Array(o), c = 0; c < o; c++) f[c] = u(a[c]);
      return f;
    } else return e(a);
  }
}
function As(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  if (r.length === 0) return;
  if (t) {
    u(r);
    return;
  }
  var n = [];
  i(r, 0);
  function i(a, o) {
    if (Array.isArray(a)) for (var f = a.length, c = 0; c < f; c++) n[o] = c, i(a[c], o + 1);
    else e(a, n.slice(0, o), r);
  }
  function u(a) {
    if (Array.isArray(a)) for (var o = a.length, f = 0; f < o; f++) u(a[f]);
    else e(a);
  }
}
function Fs(r) {
  return Ue([], r);
}
function Dt(r, e, t) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (ht.isTypedFunction(r)) {
    var i;
    if (n) i = 1;
    else {
      var u = (e.isMatrix ? e.size() : wr(e)).map(() => 0), a = e.isMatrix ? e.get(u) : vu(e, u);
      i = Cs(r, a, u, e);
    }
    var o;
    if (e.isMatrix && e.dataType !== "mixed" && e.dataType !== void 0) {
      var f = Es(r, i);
      o = f !== void 0 ? f : r;
    } else o = r;
    return i >= 1 && i <= 3 ? { isUnary: i === 1, fn: function() {
      for (var s = arguments.length, h = new Array(s), p = 0; p < s; p++) h[p] = arguments[p];
      return Rn(o, h.slice(0, i), t, r.name);
    } } : { isUnary: false, fn: function() {
      for (var s = arguments.length, h = new Array(s), p = 0; p < s; p++) h[p] = arguments[p];
      return Rn(o, h, t, r.name);
    } };
  }
  return n === void 0 ? { isUnary: bs(r), fn: r } : { isUnary: n, fn: r };
}
function Es(r, e) {
  var t = [];
  if (Object.entries(r.signatures).forEach((n) => {
    var [i, u] = n;
    i.split(",").length === e && t.push(u);
  }), t.length === 1) return t[0];
}
function bs(r) {
  if (r.length !== 1) return false;
  var e = r.toString();
  if (/arguments/.test(e)) return false;
  var t = e.match(/\(.*?\)/);
  return !/\.\.\./.test(t);
}
function Cs(r, e, t, n) {
  for (var i = [e, t, n], u = 3; u > 0; u--) {
    var a = i.slice(0, u);
    if (ht.resolve(r, a) !== null) return u;
  }
}
function Rn(r, e, t, n) {
  try {
    return r(...e);
  } catch (i) {
    _s(i, e, t, n);
  }
}
function _s(r, e, t, n) {
  var i;
  if (r instanceof TypeError && ((i = r.data) === null || i === void 0 ? void 0 : i.category) === "wrongType") {
    var u = [];
    throw u.push("value: ".concat(Gr(e[0]))), e.length >= 2 && u.push("index: ".concat(Gr(e[1]))), e.length >= 3 && u.push("array: ".concat(Gr(e[2]))), new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "".concat(n, "(").concat(u.join(", "), ") at index ").concat(JSON.stringify(e[1])));
  } else throw new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "to function ".concat(n, ": ").concat(r.message));
}
var Bs = "DenseMatrix", Ms = ["Matrix"], Ns = rr(Bs, Ms, (r) => {
  var { Matrix: e } = r;
  function t(s, h) {
    if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
    if (h && !re(h)) throw new Error("Invalid datatype: " + h);
    if (Cr(s)) s.type === "DenseMatrix" ? (this._data = yr(s._data), this._size = yr(s._size), this._datatype = h || s._datatype) : (this._data = s.toArray(), this._size = s.size(), this._datatype = h || s._datatype);
    else if (s && Or(s.data) && Or(s.size)) this._data = s.data, this._size = s.size, $n(this._data, this._size), this._datatype = h || s.datatype;
    else if (Or(s)) this._data = c(s), this._size = wr(this._data), $n(this._data, this._size), this._datatype = h;
    else {
      if (s) throw new TypeError("Unsupported type of data (" + Gr(s) + ")");
      this._data = [], this._size = [0], this._datatype = h;
    }
  }
  t.prototype = new e(), t.prototype.createDenseMatrix = function(s, h) {
    return new t(s, h);
  }, Object.defineProperty(t, "name", { value: "DenseMatrix" }), t.prototype.constructor = t, t.prototype.type = "DenseMatrix", t.prototype.isDenseMatrix = true, t.prototype.getDataType = function() {
    return St(this._data, Gr);
  }, t.prototype.storage = function() {
    return "dense";
  }, t.prototype.datatype = function() {
    return this._datatype;
  }, t.prototype.create = function(s, h) {
    return new t(s, h);
  }, t.prototype.subset = function(s, h, p) {
    switch (arguments.length) {
      case 1:
        return n(this, s);
      case 2:
      case 3:
        return u(this, s, h, p);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, t.prototype.get = function(s) {
    return vu(this._data, s);
  }, t.prototype.set = function(s, h, p) {
    if (!Or(s)) throw new TypeError("Array expected");
    if (s.length < this._size.length) throw new Fr(s.length, this._size.length, "<");
    var v, d, l, m = s.map(function(b) {
      return b + 1;
    });
    f(this, m, p);
    var D = this._data;
    for (v = 0, d = s.length - 1; v < d; v++) l = s[v], qr(l, D.length), D = D[l];
    return l = s[s.length - 1], qr(l, D.length), D[l] = h, this;
  };
  function n(s, h) {
    if (!an(h)) throw new TypeError("Invalid index");
    var p = h.isScalar();
    if (p) return s.get(h.min());
    var v = h.size();
    if (v.length !== s._size.length) throw new Fr(v.length, s._size.length);
    for (var d = h.min(), l = h.max(), m = 0, D = s._size.length; m < D; m++) qr(d[m], s._size[m]), qr(l[m], s._size[m]);
    return new t(i(s._data, h, v.length, 0), s._datatype);
  }
  function i(s, h, p, v) {
    var d = v === p - 1, l = h.dimension(v);
    return d ? l.map(function(m) {
      return qr(m, s.length), s[m];
    }).valueOf() : l.map(function(m) {
      qr(m, s.length);
      var D = s[m];
      return i(D, h, p, v + 1);
    }).valueOf();
  }
  function u(s, h, p, v) {
    if (!h || h.isIndex !== true) throw new TypeError("Invalid index");
    var d = h.size(), l = h.isScalar(), m;
    if (Cr(p) ? (m = p.size(), p = p.valueOf()) : m = wr(p), l) {
      if (m.length !== 0) throw new TypeError("Scalar expected");
      s.set(h.min(), p, v);
    } else {
      if (!Fe(m, d)) try {
        m.length === 0 ? p = jt([p], d) : p = jt(p, d), m = wr(p);
      } catch {
      }
      if (d.length < s._size.length) throw new Fr(d.length, s._size.length, "<");
      if (m.length < d.length) {
        for (var D = 0, b = 0; d[D] === 1 && m[D] === 1; ) D++;
        for (; d[D] === 1; ) b++, D++;
        p = ou(p, d.length, b, m);
      }
      if (!Fe(d, m)) throw new Fr(d, m, ">");
      var g = h.max().map(function(w) {
        return w + 1;
      });
      f(s, g, v);
      var C = d.length, A = 0;
      a(s._data, h, p, C, A);
    }
    return s;
  }
  function a(s, h, p, v, d) {
    var l = d === v - 1, m = h.dimension(d);
    l ? m.forEach(function(D, b) {
      qr(D), s[D] = p[b[0]];
    }) : m.forEach(function(D, b) {
      qr(D), a(s[D], h, p[b[0]], v, d + 1);
    });
  }
  t.prototype.resize = function(s, h, p) {
    if (!Ke(s)) throw new TypeError("Array or Matrix expected");
    var v = s.valueOf().map((l) => Array.isArray(l) && l.length === 1 ? l[0] : l), d = p ? this.clone() : this;
    return o(d, v, h);
  };
  function o(s, h, p) {
    if (h.length === 0) {
      for (var v = s._data; Or(v); ) v = v[0];
      return v;
    }
    return s._size = h.slice(0), s._data = mt(s._data, s._size, p), s;
  }
  t.prototype.reshape = function(s, h) {
    var p = h ? this.clone() : this;
    p._data = fn(p._data, s);
    var v = p._size.reduce((d, l) => d * l);
    return p._size = cn(s, v), p;
  };
  function f(s, h, p) {
    for (var v = s._size.slice(0), d = false; v.length < h.length; ) v.push(0), d = true;
    for (var l = 0, m = h.length; l < m; l++) h[l] > v[l] && (v[l] = h[l], d = true);
    d && o(s, v, p);
  }
  t.prototype.clone = function() {
    var s = new t({ data: yr(this._data), size: yr(this._size), datatype: this._datatype });
    return s;
  }, t.prototype.size = function() {
    return this._size.slice(0);
  }, t.prototype._forEach = function(s) {
    var h = s.length === 2, p = this._size.length - 1;
    if (p < 0) return;
    if (h) {
      m(this._data);
      return;
    }
    if (p === 0) {
      for (var v = 0; v < this._data.length; v++) s(this._data, v, [v]);
      return;
    }
    var d = new Array(p + 1);
    l(this._data);
    function l(D) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (b < p) for (var g = 0; g < D.length; g++) d[b] = g, l(D[g], b + 1);
      else for (var C = 0; C < D.length; C++) d[b] = C, s(D, C, d.slice());
    }
    function m(D) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (b < p) for (var g = 0; g < D.length; g++) m(D[g], b + 1);
      else for (var C = 0; C < D.length; C++) s(D, C);
    }
  }, t.prototype.map = function(s) {
    var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, p = this, v = new t(p), d = Dt(s, p._data, "map", h), l = h || d.isUnary ? (m, D) => {
      m[D] = d.fn(m[D]);
    } : (m, D, b) => {
      m[D] = d.fn(m[D], b, p);
    };
    return v._forEach(l), v;
  }, t.prototype.forEach = function(s) {
    var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, p = this, v = Dt(s, p._data, "map", h), d = h || v.isUnary ? (l, m) => {
      v.fn(l[m]);
    } : (l, m, D) => {
      v.fn(l[m], D, p);
    };
    p._forEach(d);
  }, t.prototype[Symbol.iterator] = function* () {
    var s = this._size.length - 1;
    if (!(s < 0)) {
      if (s === 0) {
        for (var h = 0; h < this._data.length; h++) yield { value: this._data[h], index: [h] };
        return;
      }
      var p = [], v = function* (l, m) {
        if (m < s) for (var D = 0; D < l.length; D++) p[m] = D, yield* v(l[D], m + 1);
        else for (var b = 0; b < l.length; b++) p[m] = b, yield { value: l[b], index: p.slice() };
      };
      yield* v(this._data, 0);
    }
  }, t.prototype.rows = function() {
    var s = [], h = this.size();
    if (h.length !== 2) throw new TypeError("Rows can only be returned for a 2D matrix.");
    var p = this._data;
    for (var v of p) s.push(new t([v], this._datatype));
    return s;
  }, t.prototype.columns = function() {
    var s = this, h = [], p = this.size();
    if (p.length !== 2) throw new TypeError("Rows can only be returned for a 2D matrix.");
    for (var v = this._data, d = function(D) {
      var b = v.map((g) => [g[D]]);
      h.push(new t(b, s._datatype));
    }, l = 0; l < p[1]; l++) d(l);
    return h;
  }, t.prototype.toArray = function() {
    return yr(this._data);
  }, t.prototype.valueOf = function() {
    return this._data;
  }, t.prototype.format = function(s) {
    return $r(this._data, s);
  }, t.prototype.toString = function() {
    return $r(this._data);
  }, t.prototype.toJSON = function() {
    return { mathjs: "DenseMatrix", data: this._data, size: this._size, datatype: this._datatype };
  }, t.prototype.diagonal = function(s) {
    if (s) {
      if (Rr(s) && (s = s.toNumber()), !xr(s) || !br(s)) throw new TypeError("The parameter k must be an integer number");
    } else s = 0;
    for (var h = s > 0 ? s : 0, p = s < 0 ? -s : 0, v = this._size[0], d = this._size[1], l = Math.min(v - p, d - h), m = [], D = 0; D < l; D++) m[D] = this._data[D + p][D + h];
    return new t({ data: m, size: [l], datatype: this._datatype });
  }, t.diagonal = function(s, h, p, v) {
    if (!Or(s)) throw new TypeError("Array expected, size parameter");
    if (s.length !== 2) throw new Error("Only two dimensions matrix are supported");
    if (s = s.map(function(_) {
      if (Rr(_) && (_ = _.toNumber()), !xr(_) || !br(_) || _ < 1) throw new Error("Size values must be positive integers");
      return _;
    }), p) {
      if (Rr(p) && (p = p.toNumber()), !xr(p) || !br(p)) throw new TypeError("The parameter k must be an integer number");
    } else p = 0;
    var d = p > 0 ? p : 0, l = p < 0 ? -p : 0, m = s[0], D = s[1], b = Math.min(m - l, D - d), g;
    if (Or(h)) {
      if (h.length !== b) throw new Error("Invalid value array length");
      g = function(F) {
        return h[F];
      };
    } else if (Cr(h)) {
      var C = h.size();
      if (C.length !== 1 || C[0] !== b) throw new Error("Invalid matrix length");
      g = function(F) {
        return h.get([F]);
      };
    } else g = function() {
      return h;
    };
    v || (v = Rr(g(0)) ? g(0).mul(0) : 0);
    var A = [];
    if (s.length > 0) {
      A = mt(A, s, v);
      for (var w = 0; w < b; w++) A[w + l][w + d] = g(w);
    }
    return new t({ data: A, size: [m, D] });
  }, t.fromJSON = function(s) {
    return new t(s);
  }, t.prototype.swapRows = function(s, h) {
    if (!xr(s) || !br(s) || !xr(h) || !br(h)) throw new Error("Row index must be positive integers");
    if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
    return qr(s, this._size[0]), qr(h, this._size[0]), t._swapRows(s, h, this._data), this;
  }, t._swapRows = function(s, h, p) {
    var v = p[s];
    p[s] = p[h], p[h] = v;
  };
  function c(s) {
    return Cr(s) ? c(s.valueOf()) : Or(s) ? s.map(c) : s;
  }
  return t;
}, { isClass: true });
function Ss(r) {
  var e = r.length, t = r[0].length, n, i, u = [];
  for (i = 0; i < t; i++) {
    var a = [];
    for (n = 0; n < e; n++) a.push(r[n][i]);
    u.push(a);
  }
  return u;
}
function xs(r) {
  for (var e = 0; e < r.length; e++) if (Ke(r[e])) return true;
  return false;
}
function Ts(r, e) {
  Cr(r) ? r.forEach((t) => e(t), false, true) : As(r, e, true);
}
function ne(r, e, t) {
  if (!t) return Cr(r) ? r.map((i) => e(i), false, true) : qn(r, e, true);
  var n = (i) => i === 0 ? i : e(i);
  return Cr(r) ? r.map((i) => n(i), false, true) : qn(r, n, true);
}
function Is(r, e, t) {
  var n = Array.isArray(r) ? wr(r) : r.size();
  if (e < 0 || e >= n.length) throw new Ce(e, n.length);
  return Cr(r) ? r.create(gt(r.valueOf(), e, t), r.datatype()) : gt(r, e, t);
}
function gt(r, e, t) {
  var n, i, u, a;
  if (e <= 0) if (Array.isArray(r[0])) {
    for (a = Ss(r), i = [], n = 0; n < a.length; n++) i[n] = gt(a[n], e - 1, t);
    return i;
  } else {
    for (u = r[0], n = 1; n < r.length; n++) u = t(u, r[n]);
    return u;
  }
  else {
    for (i = [], n = 0; n < r.length; n++) i[n] = gt(r[n], e - 1, t);
    return i;
  }
}
function ch(r, e, t, n, i, u, a, o, f, c, s) {
  var h = r._values, p = r._index, v = r._ptr, d, l, m, D;
  if (n) for (l = v[e], m = v[e + 1], d = l; d < m; d++) D = p[d], t[D] !== u ? (t[D] = u, a.push(D), n[D] = h[d]) : (n[D] = o(n[D], h[d]), i[D] = u);
  else for (l = v[e], m = v[e + 1], d = l; d < m; d++) D = p[d], t[D] !== u ? (t[D] = u, a.push(D)) : i[D] = u;
}
var Un = "isInteger", zs = ["typed"], Os = rr(Un, zs, (r) => {
  var { typed: e } = r;
  return e(Un, { number: br, BigNumber: function(n) {
    return n.isInt();
  }, bigint: function(n) {
    return true;
  }, Fraction: function(n) {
    return n.d === 1n;
  }, "Array | Matrix": e.referToSelf((t) => (n) => ne(n, t)) });
}), he = "number", Ve = "number, number";
function pu(r) {
  return Math.abs(r);
}
pu.signature = he;
function du(r, e) {
  return r + e;
}
du.signature = Ve;
function mu(r, e) {
  return r - e;
}
mu.signature = Ve;
function Du(r, e) {
  return r * e;
}
Du.signature = Ve;
function gu(r) {
  return -r;
}
gu.signature = he;
function $s(r) {
  return r;
}
$s.signature = he;
function Ps(r) {
  return Xa(r);
}
Ps.signature = he;
function qs(r) {
  return r * r * r;
}
qs.signature = he;
function Rs(r) {
  return Math.exp(r);
}
Rs.signature = he;
function Us(r) {
  return Ga(r);
}
Us.signature = he;
function Ls(r, e) {
  if (!br(r) || !br(e)) throw new Error("Parameters in function lcm must be integer numbers");
  if (r === 0 || e === 0) return 0;
  for (var t, n = r * e; e !== 0; ) t = e, e = r % t, r = t;
  return Math.abs(n / r);
}
Ls.signature = Ve;
function lh(r, e) {
  return e ? Math.log(r) / Math.log(e) : Math.log(r);
}
function Zs(r) {
  return Qa(r);
}
Zs.signature = he;
function Vs(r) {
  return Ya(r);
}
Vs.signature = he;
function hh(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2, t = e < 0;
  if (t && (e = -e), e === 0) throw new Error("Root must be non-zero");
  if (r < 0 && Math.abs(e) % 2 !== 1) throw new Error("Root must be odd when a is negative.");
  if (r === 0) return t ? 1 / 0 : 0;
  if (!isFinite(r)) return t ? 0 : r;
  var n = Math.pow(Math.abs(r), 1 / e);
  return n = r < 0 ? -n : n, t ? 1 / n : n;
}
function rn(r) {
  return Ja(r);
}
rn.signature = he;
function Ws(r) {
  return r * r;
}
Ws.signature = he;
function Js(r, e) {
  var t, n, i, u = 0, a = 1, o = 1, f = 0;
  if (!br(r) || !br(e)) throw new Error("Parameters in function xgcd must be integer numbers");
  for (; e; ) n = Math.floor(r / e), i = r - n * e, t = u, u = a - n * u, a = t, t = o, o = f - n * o, f = t, r = e, e = i;
  var c;
  return r < 0 ? c = [-r, -a, -f] : c = [r, r ? a : 0, f], c;
}
Js.signature = Ve;
function yu(r, e) {
  return r * r < 1 && e === 1 / 0 || r * r > 1 && e === -1 / 0 ? 0 : Math.pow(r, e);
}
yu.signature = Ve;
function vh(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  if (!br(e) || e < 0 || e > 15) throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");
  return parseFloat(Vi(r, e));
}
var ln = "number";
function Ys(r) {
  return r < 0;
}
Ys.signature = ln;
function wu(r) {
  return r > 0;
}
wu.signature = ln;
function Qs(r) {
  return Number.isNaN(r);
}
Qs.signature = ln;
function We(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-9, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (t <= 0) throw new Error("Relative tolerance must be greater than 0");
  if (n < 0) throw new Error("Absolute tolerance must be at least 0");
  return r.isNaN() || e.isNaN() ? false : !r.isFinite() || !e.isFinite() ? r.eq(e) : r.eq(e) ? true : r.minus(e).abs().lte(r.constructor.max(r.constructor.max(r.abs(), e.abs()).mul(t), n));
}
var Ln = "isPositive", Xs = ["typed", "config"], Gs = rr(Ln, Xs, (r) => {
  var { typed: e, config: t } = r;
  return e(Ln, { number: (n) => De(n, 0, t.relTol, t.absTol) ? false : wu(n), BigNumber: (n) => We(n, new n.constructor(0), t.relTol, t.absTol) ? false : !n.isNeg() && !n.isZero() && !n.isNaN(), bigint: (n) => n > 0n, Fraction: (n) => n.s > 0n && n.n > 0n, Unit: e.referToSelf((n) => (i) => e.find(n, i.valueType())(i.value)), "Array | Matrix": e.referToSelf((n) => (i) => ne(i, n)) });
}), Zn = "isZero", Ks = ["typed", "equalScalar"], Hs = rr(Zn, Ks, (r) => {
  var { typed: e, equalScalar: t } = r;
  return e(Zn, { "number | BigNumber | Complex | Fraction": (n) => t(n, 0), bigint: (n) => n === 0n, Unit: e.referToSelf((n) => (i) => e.find(n, i.valueType())(i.value)), "Array | Matrix": e.referToSelf((n) => (i) => ne(i, n)) });
});
function ks(r, e, t, n) {
  return De(r.re, e.re, t, n) && De(r.im, e.im, t, n);
}
var rt = rr("compareUnits", ["typed"], (r) => {
  var { typed: e } = r;
  return { "Unit, Unit": e.referToSelf((t) => (n, i) => {
    if (!n.equalBase(i)) throw new Error("Cannot compare units with different base");
    return e.find(t, [n.valueType(), i.valueType()])(n.value, i.value);
  }) };
}), yt = "equalScalar", js = ["typed", "config"], rf = rr(yt, js, (r) => {
  var { typed: e, config: t } = r, n = rt({ typed: e });
  return e(yt, { "boolean, boolean": function(u, a) {
    return u === a;
  }, "number, number": function(u, a) {
    return De(u, a, t.relTol, t.absTol);
  }, "BigNumber, BigNumber": function(u, a) {
    return u.eq(a) || We(u, a, t.relTol, t.absTol);
  }, "bigint, bigint": function(u, a) {
    return u === a;
  }, "Fraction, Fraction": function(u, a) {
    return u.equals(a);
  }, "Complex, Complex": function(u, a) {
    return ks(u, a, t.relTol, t.absTol);
  } }, n);
});
rr(yt, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(yt, { "number, number": function(i, u) {
    return De(i, u, t.relTol, t.absTol);
  } });
});
var ef = "SparseMatrix", tf = ["typed", "equalScalar", "Matrix"], nf = rr(ef, tf, (r) => {
  var { typed: e, equalScalar: t, Matrix: n } = r;
  function i(l, m) {
    if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
    if (m && !re(m)) throw new Error("Invalid datatype: " + m);
    if (Cr(l)) u(this, l, m);
    else if (l && Or(l.index) && Or(l.ptr) && Or(l.size)) this._values = l.values, this._index = l.index, this._ptr = l.ptr, this._size = l.size, this._datatype = m || l.datatype;
    else if (Or(l)) a(this, l, m);
    else {
      if (l) throw new TypeError("Unsupported type of data (" + Gr(l) + ")");
      this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = m;
    }
  }
  function u(l, m, D) {
    m.type === "SparseMatrix" ? (l._values = m._values ? yr(m._values) : void 0, l._index = yr(m._index), l._ptr = yr(m._ptr), l._size = yr(m._size), l._datatype = D || m._datatype) : a(l, m.valueOf(), D || m._datatype);
  }
  function a(l, m, D) {
    l._values = [], l._index = [], l._ptr = [], l._datatype = D;
    var b = m.length, g = 0, C = t, A = 0;
    if (re(D) && (C = e.find(t, [D, D]) || t, A = e.convert(0, D)), b > 0) {
      var w = 0;
      do {
        l._ptr.push(l._index.length);
        for (var _ = 0; _ < b; _++) {
          var F = m[_];
          if (Or(F)) {
            if (w === 0 && g < F.length && (g = F.length), w < F.length) {
              var y = F[w];
              C(y, A) || (l._values.push(y), l._index.push(_));
            }
          } else w === 0 && g < 1 && (g = 1), C(F, A) || (l._values.push(F), l._index.push(_));
        }
        w++;
      } while (w < g);
    }
    l._ptr.push(l._index.length), l._size = [b, g];
  }
  i.prototype = new n(), i.prototype.createSparseMatrix = function(l, m) {
    return new i(l, m);
  }, Object.defineProperty(i, "name", { value: "SparseMatrix" }), i.prototype.constructor = i, i.prototype.type = "SparseMatrix", i.prototype.isSparseMatrix = true, i.prototype.getDataType = function() {
    return St(this._values, Gr);
  }, i.prototype.storage = function() {
    return "sparse";
  }, i.prototype.datatype = function() {
    return this._datatype;
  }, i.prototype.create = function(l, m) {
    return new i(l, m);
  }, i.prototype.density = function() {
    var l = this._size[0], m = this._size[1];
    return l !== 0 && m !== 0 ? this._index.length / (l * m) : 0;
  }, i.prototype.subset = function(l, m, D) {
    if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return o(this, l);
      case 2:
      case 3:
        return f(this, l, m, D);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function o(l, m) {
    if (!an(m)) throw new TypeError("Invalid index");
    var D = m.isScalar();
    if (D) return l.get(m.min());
    var b = m.size();
    if (b.length !== l._size.length) throw new Fr(b.length, l._size.length);
    var g, C, A, w, _ = m.min(), F = m.max();
    for (g = 0, C = l._size.length; g < C; g++) qr(_[g], l._size[g]), qr(F[g], l._size[g]);
    var y = l._values, M = l._index, B = l._ptr, N = m.dimension(0), z = m.dimension(1), x = [], O = [];
    N.forEach(function(L, tr) {
      O[L] = tr[0], x[L] = true;
    });
    var T = y ? [] : void 0, Y = [], q = [];
    return z.forEach(function(L) {
      for (q.push(Y.length), A = B[L], w = B[L + 1]; A < w; A++) g = M[A], x[g] === true && (Y.push(O[g]), T && T.push(y[A]));
    }), q.push(Y.length), new i({ values: T, index: Y, ptr: q, size: b, datatype: l._datatype });
  }
  function f(l, m, D, b) {
    if (!m || m.isIndex !== true) throw new TypeError("Invalid index");
    var g = m.size(), C = m.isScalar(), A;
    if (Cr(D) ? (A = D.size(), D = D.toArray()) : A = wr(D), C) {
      if (A.length !== 0) throw new TypeError("Scalar expected");
      l.set(m.min(), D, b);
    } else {
      if (g.length !== 1 && g.length !== 2) throw new Fr(g.length, l._size.length, "<");
      if (A.length < g.length) {
        for (var w = 0, _ = 0; g[w] === 1 && A[w] === 1; ) w++;
        for (; g[w] === 1; ) _++, w++;
        D = ou(D, g.length, _, A);
      }
      if (!Fe(g, A)) throw new Fr(g, A, ">");
      if (g.length === 1) {
        var F = m.dimension(0);
        F.forEach(function(B, N) {
          qr(B), l.set([B, 0], D[N[0]], b);
        });
      } else {
        var y = m.dimension(0), M = m.dimension(1);
        y.forEach(function(B, N) {
          qr(B), M.forEach(function(z, x) {
            qr(z), l.set([B, z], D[N[0]][x[0]], b);
          });
        });
      }
    }
    return l;
  }
  i.prototype.get = function(l) {
    if (!Or(l)) throw new TypeError("Array expected");
    if (l.length !== this._size.length) throw new Fr(l.length, this._size.length);
    if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
    var m = l[0], D = l[1];
    qr(m, this._size[0]), qr(D, this._size[1]);
    var b = c(m, this._ptr[D], this._ptr[D + 1], this._index);
    return b < this._ptr[D + 1] && this._index[b] === m ? this._values[b] : 0;
  }, i.prototype.set = function(l, m, D) {
    if (!Or(l)) throw new TypeError("Array expected");
    if (l.length !== this._size.length) throw new Fr(l.length, this._size.length);
    if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
    var b = l[0], g = l[1], C = this._size[0], A = this._size[1], w = t, _ = 0;
    re(this._datatype) && (w = e.find(t, [this._datatype, this._datatype]) || t, _ = e.convert(0, this._datatype)), (b > C - 1 || g > A - 1) && (p(this, Math.max(b + 1, C), Math.max(g + 1, A), D), C = this._size[0], A = this._size[1]), qr(b, C), qr(g, A);
    var F = c(b, this._ptr[g], this._ptr[g + 1], this._index);
    return F < this._ptr[g + 1] && this._index[F] === b ? w(m, _) ? s(F, g, this._values, this._index, this._ptr) : this._values[F] = m : w(m, _) || h(F, b, g, m, this._values, this._index, this._ptr), this;
  };
  function c(l, m, D, b) {
    if (D - m === 0) return D;
    for (var g = m; g < D; g++) if (b[g] === l) return g;
    return m;
  }
  function s(l, m, D, b, g) {
    D.splice(l, 1), b.splice(l, 1);
    for (var C = m + 1; C < g.length; C++) g[C]--;
  }
  function h(l, m, D, b, g, C, A) {
    g.splice(l, 0, b), C.splice(l, 0, m);
    for (var w = D + 1; w < A.length; w++) A[w]++;
  }
  i.prototype.resize = function(l, m, D) {
    if (!Ke(l)) throw new TypeError("Array or Matrix expected");
    var b = l.valueOf().map((C) => Array.isArray(C) && C.length === 1 ? C[0] : C);
    if (b.length !== 2) throw new Error("Only two dimensions matrix are supported");
    b.forEach(function(C) {
      if (!xr(C) || !br(C) || C < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + $r(b) + ")");
    });
    var g = D ? this.clone() : this;
    return p(g, b[0], b[1], m);
  };
  function p(l, m, D, b) {
    var g = b || 0, C = t, A = 0;
    re(l._datatype) && (C = e.find(t, [l._datatype, l._datatype]) || t, A = e.convert(0, l._datatype), g = e.convert(g, l._datatype));
    var w = !C(g, A), _ = l._size[0], F = l._size[1], y, M, B;
    if (D > F) {
      for (M = F; M < D; M++) if (l._ptr[M] = l._values.length, w) for (y = 0; y < _; y++) l._values.push(g), l._index.push(y);
      l._ptr[D] = l._values.length;
    } else D < F && (l._ptr.splice(D + 1, F - D), l._values.splice(l._ptr[D], l._values.length), l._index.splice(l._ptr[D], l._index.length));
    if (F = D, m > _) {
      if (w) {
        var N = 0;
        for (M = 0; M < F; M++) {
          l._ptr[M] = l._ptr[M] + N, B = l._ptr[M + 1] + N;
          var z = 0;
          for (y = _; y < m; y++, z++) l._values.splice(B + z, 0, g), l._index.splice(B + z, 0, y), N++;
        }
        l._ptr[F] = l._values.length;
      }
    } else if (m < _) {
      var x = 0;
      for (M = 0; M < F; M++) {
        l._ptr[M] = l._ptr[M] - x;
        var O = l._ptr[M], T = l._ptr[M + 1] - x;
        for (B = O; B < T; B++) y = l._index[B], y > m - 1 && (l._values.splice(B, 1), l._index.splice(B, 1), x++);
      }
      l._ptr[M] = l._values.length;
    }
    return l._size[0] = m, l._size[1] = D, l;
  }
  i.prototype.reshape = function(l, m) {
    if (!Or(l)) throw new TypeError("Array expected");
    if (l.length !== 2) throw new Error("Sparse matrices can only be reshaped in two dimensions");
    l.forEach(function(L) {
      if (!xr(L) || !br(L) || L <= -2 || L === 0) throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + $r(l) + ")");
    });
    var D = this._size[0] * this._size[1];
    l = cn(l, D);
    var b = l[0] * l[1];
    if (D !== b) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var g = m ? this.clone() : this;
    if (this._size[0] === l[0] && this._size[1] === l[1]) return g;
    for (var C = [], A = 0; A < g._ptr.length; A++) for (var w = 0; w < g._ptr[A + 1] - g._ptr[A]; w++) C.push(A);
    for (var _ = g._values.slice(), F = g._index.slice(), y = 0; y < g._index.length; y++) {
      var M = F[y], B = C[y], N = M * g._size[1] + B;
      C[y] = N % l[1], F[y] = Math.floor(N / l[1]);
    }
    g._values.length = 0, g._index.length = 0, g._ptr.length = l[1] + 1, g._size = l.slice();
    for (var z = 0; z < g._ptr.length; z++) g._ptr[z] = 0;
    for (var x = 0; x < _.length; x++) {
      var O = F[x], T = C[x], Y = _[x], q = c(O, g._ptr[T], g._ptr[T + 1], g._index);
      h(q, O, T, Y, g._values, g._index, g._ptr);
    }
    return g;
  }, i.prototype.clone = function() {
    var l = new i({ values: this._values ? yr(this._values) : void 0, index: yr(this._index), ptr: yr(this._ptr), size: yr(this._size), datatype: this._datatype });
    return l;
  }, i.prototype.size = function() {
    return this._size.slice(0);
  }, i.prototype.map = function(l, m) {
    if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
    var D = this, b = this._size[0], g = this._size[1], C = Dt(l, D, "map"), A = function(_, F, y) {
      return C.fn(_, [F, y], D);
    };
    return v(this, 0, b - 1, 0, g - 1, A, m);
  };
  function v(l, m, D, b, g, C, A) {
    var w = [], _ = [], F = [], y = t, M = 0;
    re(l._datatype) && (y = e.find(t, [l._datatype, l._datatype]) || t, M = e.convert(0, l._datatype));
    for (var B = function(Z, er, ar) {
      var j = C(Z, er, ar);
      y(j, M) || (w.push(j), _.push(er));
    }, N = b; N <= g; N++) {
      F.push(w.length);
      var z = l._ptr[N], x = l._ptr[N + 1];
      if (A) for (var O = z; O < x; O++) {
        var T = l._index[O];
        T >= m && T <= D && B(l._values[O], T - m, N - b);
      }
      else {
        for (var Y = {}, q = z; q < x; q++) {
          var L = l._index[q];
          Y[L] = l._values[q];
        }
        for (var tr = m; tr <= D; tr++) {
          var or = tr in Y ? Y[tr] : 0;
          B(or, tr - m, N - b);
        }
      }
    }
    return F.push(w.length), new i({ values: w, index: _, ptr: F, size: [D - m + 1, g - b + 1] });
  }
  i.prototype.forEach = function(l, m) {
    if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var D = this, b = this._size[0], g = this._size[1], C = Dt(l, D, "forEach"), A = 0; A < g; A++) {
      var w = this._ptr[A], _ = this._ptr[A + 1];
      if (m) for (var F = w; F < _; F++) {
        var y = this._index[F];
        C.fn(this._values[F], [y, A], D);
      }
      else {
        for (var M = {}, B = w; B < _; B++) {
          var N = this._index[B];
          M[N] = this._values[B];
        }
        for (var z = 0; z < b; z++) {
          var x = z in M ? M[z] : 0;
          C.fn(x, [z, A], D);
        }
      }
    }
  }, i.prototype[Symbol.iterator] = function* () {
    if (!this._values) throw new Error("Cannot iterate a Pattern only matrix");
    for (var l = this._size[1], m = 0; m < l; m++) for (var D = this._ptr[m], b = this._ptr[m + 1], g = D; g < b; g++) {
      var C = this._index[g];
      yield { value: this._values[g], index: [C, m] };
    }
  }, i.prototype.toArray = function() {
    return d(this._values, this._index, this._ptr, this._size, true);
  }, i.prototype.valueOf = function() {
    return d(this._values, this._index, this._ptr, this._size, false);
  };
  function d(l, m, D, b, g) {
    var C = b[0], A = b[1], w = [], _, F;
    for (_ = 0; _ < C; _++) for (w[_] = [], F = 0; F < A; F++) w[_][F] = 0;
    for (F = 0; F < A; F++) for (var y = D[F], M = D[F + 1], B = y; B < M; B++) _ = m[B], w[_][F] = l ? g ? yr(l[B]) : l[B] : 1;
    return w;
  }
  return i.prototype.format = function(l) {
    for (var m = this._size[0], D = this._size[1], b = this.density(), g = "Sparse Matrix [" + $r(m, l) + " x " + $r(D, l) + "] density: " + $r(b, l) + `
`, C = 0; C < D; C++) for (var A = this._ptr[C], w = this._ptr[C + 1], _ = A; _ < w; _++) {
      var F = this._index[_];
      g += `
    (` + $r(F, l) + ", " + $r(C, l) + ") ==> " + (this._values ? $r(this._values[_], l) : "X");
    }
    return g;
  }, i.prototype.toString = function() {
    return $r(this.toArray());
  }, i.prototype.toJSON = function() {
    return { mathjs: "SparseMatrix", values: this._values, index: this._index, ptr: this._ptr, size: this._size, datatype: this._datatype };
  }, i.prototype.diagonal = function(l) {
    if (l) {
      if (Rr(l) && (l = l.toNumber()), !xr(l) || !br(l)) throw new TypeError("The parameter k must be an integer number");
    } else l = 0;
    var m = l > 0 ? l : 0, D = l < 0 ? -l : 0, b = this._size[0], g = this._size[1], C = Math.min(b - D, g - m), A = [], w = [], _ = [];
    _[0] = 0;
    for (var F = m; F < g && A.length < C; F++) for (var y = this._ptr[F], M = this._ptr[F + 1], B = y; B < M; B++) {
      var N = this._index[B];
      if (N === F - m + D) {
        A.push(this._values[B]), w[A.length - 1] = N - D;
        break;
      }
    }
    return _.push(A.length), new i({ values: A, index: w, ptr: _, size: [C, 1] });
  }, i.fromJSON = function(l) {
    return new i(l);
  }, i.diagonal = function(l, m, D, b, g) {
    if (!Or(l)) throw new TypeError("Array expected, size parameter");
    if (l.length !== 2) throw new Error("Only two dimensions matrix are supported");
    if (l = l.map(function(L) {
      if (Rr(L) && (L = L.toNumber()), !xr(L) || !br(L) || L < 1) throw new Error("Size values must be positive integers");
      return L;
    }), D) {
      if (Rr(D) && (D = D.toNumber()), !xr(D) || !br(D)) throw new TypeError("The parameter k must be an integer number");
    } else D = 0;
    var C = t, A = 0;
    re(g) && (C = e.find(t, [g, g]) || t, A = e.convert(0, g));
    var w = D > 0 ? D : 0, _ = D < 0 ? -D : 0, F = l[0], y = l[1], M = Math.min(F - _, y - w), B;
    if (Or(m)) {
      if (m.length !== M) throw new Error("Invalid value array length");
      B = function(tr) {
        return m[tr];
      };
    } else if (Cr(m)) {
      var N = m.size();
      if (N.length !== 1 || N[0] !== M) throw new Error("Invalid matrix length");
      B = function(tr) {
        return m.get([tr]);
      };
    } else B = function() {
      return m;
    };
    for (var z = [], x = [], O = [], T = 0; T < y; T++) {
      O.push(z.length);
      var Y = T - w;
      if (Y >= 0 && Y < M) {
        var q = B(Y);
        C(q, A) || (x.push(Y + _), z.push(q));
      }
    }
    return O.push(z.length), new i({ values: z, index: x, ptr: O, size: [F, y] });
  }, i.prototype.swapRows = function(l, m) {
    if (!xr(l) || !br(l) || !xr(m) || !br(m)) throw new Error("Row index must be positive integers");
    if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
    return qr(l, this._size[0]), qr(m, this._size[0]), i._swapRows(l, m, this._size[1], this._values, this._index, this._ptr), this;
  }, i._forEachRow = function(l, m, D, b, g) {
    for (var C = b[l], A = b[l + 1], w = C; w < A; w++) g(D[w], m[w]);
  }, i._swapRows = function(l, m, D, b, g, C) {
    for (var A = 0; A < D; A++) {
      var w = C[A], _ = C[A + 1], F = c(l, w, _, g), y = c(m, w, _, g);
      if (F < _ && y < _ && g[F] === l && g[y] === m) {
        if (b) {
          var M = b[F];
          b[F] = b[y], b[y] = M;
        }
        continue;
      }
      if (F < _ && g[F] === l && (y >= _ || g[y] !== m)) {
        var B = b ? b[F] : void 0;
        g.splice(y, 0, m), b && b.splice(y, 0, B), g.splice(y <= F ? F + 1 : F, 1), b && b.splice(y <= F ? F + 1 : F, 1);
        continue;
      }
      if (y < _ && g[y] === m && (F >= _ || g[F] !== l)) {
        var N = b ? b[y] : void 0;
        g.splice(F, 0, l), b && b.splice(F, 0, N), g.splice(F <= y ? y + 1 : y, 1), b && b.splice(F <= y ? y + 1 : y, 1);
      }
    }
  }, i;
}, { isClass: true }), uf = "number", af = ["typed"];
function of(r) {
  var e = r.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (e) {
    var t = { "0b": 2, "0o": 8, "0x": 16 }[e[1]], n = e[2], i = e[3];
    return { input: r, radix: t, integerPart: n, fractionalPart: i };
  } else return null;
}
function sf(r) {
  for (var e = parseInt(r.integerPart, r.radix), t = 0, n = 0; n < r.fractionalPart.length; n++) {
    var i = parseInt(r.fractionalPart[n], r.radix);
    t += i / Math.pow(r.radix, n + 1);
  }
  var u = e + t;
  if (isNaN(u)) throw new SyntaxError('String "' + r.input + '" is not a valid number');
  return u;
}
var ff = rr(uf, af, (r) => {
  var { typed: e } = r, t = e("number", { "": function() {
    return 0;
  }, number: function(i) {
    return i;
  }, string: function(i) {
    if (i === "NaN") return NaN;
    var u = of(i);
    if (u) return sf(u);
    var a = 0, o = i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
    o && (a = Number(o[2]), i = o[1]);
    var f = Number(i);
    if (isNaN(f)) throw new SyntaxError('String "' + i + '" is not a valid number');
    if (o) {
      if (f > 2 ** a - 1) throw new SyntaxError('String "'.concat(i, '" is out of range'));
      f >= 2 ** (a - 1) && (f = f - 2 ** a);
    }
    return f;
  }, BigNumber: function(i) {
    return i.toNumber();
  }, bigint: function(i) {
    return Number(i);
  }, Fraction: function(i) {
    return i.valueOf();
  }, Unit: e.referToSelf((n) => (i) => {
    var u = i.clone();
    return u.value = n(i.value), u;
  }), null: function(i) {
    return 0;
  }, "Unit, string | Unit": function(i, u) {
    return i.toNumber(u);
  }, "Array | Matrix": e.referToSelf((n) => (i) => ne(i, n)) });
  return t.fromJSON = function(n) {
    return parseFloat(n.value);
  }, t;
}), cf = "bignumber", lf = ["typed", "BigNumber"], hf = rr(cf, lf, (r) => {
  var { typed: e, BigNumber: t } = r;
  return e("bignumber", { "": function() {
    return new t(0);
  }, number: function(i) {
    return new t(i + "");
  }, string: function(i) {
    var u = i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
    if (u) {
      var a = u[2], o = t(u[1]), f = new t(2).pow(Number(a));
      if (o.gt(f.sub(1))) throw new SyntaxError('String "'.concat(i, '" is out of range'));
      var c = new t(2).pow(Number(a) - 1);
      return o.gte(c) ? o.sub(f) : o;
    }
    return new t(i);
  }, BigNumber: function(i) {
    return i;
  }, bigint: function(i) {
    return new t(i.toString());
  }, Unit: e.referToSelf((n) => (i) => {
    var u = i.clone();
    return u.value = n(i.value), u;
  }), Fraction: function(i) {
    return new t(String(i.n)).div(String(i.d)).times(String(i.s));
  }, null: function(i) {
    return new t(0);
  }, "Array | Matrix": e.referToSelf((n) => (i) => ne(i, n)) });
}), vf = "complex", pf = ["typed", "Complex"], df = rr(vf, pf, (r) => {
  var { typed: e, Complex: t } = r;
  return e("complex", { "": function() {
    return t.ZERO;
  }, number: function(i) {
    return new t(i, 0);
  }, "number, number": function(i, u) {
    return new t(i, u);
  }, "BigNumber, BigNumber": function(i, u) {
    return new t(i.toNumber(), u.toNumber());
  }, Fraction: function(i) {
    return new t(i.valueOf(), 0);
  }, Complex: function(i) {
    return i.clone();
  }, string: function(i) {
    return t(i);
  }, null: function(i) {
    return t(0);
  }, Object: function(i) {
    if ("re" in i && "im" in i) return new t(i.re, i.im);
    if ("r" in i && "phi" in i || "abs" in i && "arg" in i) return new t(i);
    throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)");
  }, "Array | Matrix": e.referToSelf((n) => (i) => ne(i, n)) });
}), mf = "fraction", Df = ["typed", "Fraction"], gf = rr(mf, Df, (r) => {
  var { typed: e, Fraction: t } = r;
  return e("fraction", { number: function(i) {
    if (!isFinite(i) || isNaN(i)) throw new Error(i + " cannot be represented as a fraction");
    return new t(i);
  }, string: function(i) {
    return new t(i);
  }, "number, number": function(i, u) {
    return new t(i, u);
  }, "bigint, bigint": function(i, u) {
    return new t(i, u);
  }, null: function(i) {
    return new t(0);
  }, BigNumber: function(i) {
    return new t(i.toString());
  }, bigint: function(i) {
    return new t(i.toString());
  }, Fraction: function(i) {
    return i;
  }, Unit: e.referToSelf((n) => (i) => {
    var u = i.clone();
    return u.value = n(i.value), u;
  }), Object: function(i) {
    return new t(i);
  }, "Array | Matrix": e.referToSelf((n) => (i) => ne(i, n)) });
}), Vn = "matrix", yf = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], wf = rr(Vn, yf, (r) => {
  var { typed: e, Matrix: t, DenseMatrix: n, SparseMatrix: i } = r;
  return e(Vn, { "": function() {
    return u([]);
  }, string: function(o) {
    return u([], o);
  }, "string, string": function(o, f) {
    return u([], o, f);
  }, Array: function(o) {
    return u(o);
  }, Matrix: function(o) {
    return u(o, o.storage());
  }, "Array | Matrix, string": u, "Array | Matrix, string, string": u });
  function u(a, o, f) {
    if (o === "dense" || o === "default" || o === void 0) return new n(a, f);
    if (o === "sparse") return new i(a, f);
    throw new TypeError("Unknown matrix type " + JSON.stringify(o) + ".");
  }
}), Wn = "matrixFromColumns", Af = ["typed", "matrix", "flatten", "size"], Ff = rr(Wn, Af, (r) => {
  var { typed: e, matrix: t, flatten: n, size: i } = r;
  return e(Wn, { "...Array": function(f) {
    return u(f);
  }, "...Matrix": function(f) {
    return t(u(f.map((c) => c.toArray())));
  } });
  function u(o) {
    if (o.length === 0) throw new TypeError("At least one column is needed to construct a matrix.");
    for (var f = a(o[0]), c = [], s = 0; s < f; s++) c[s] = [];
    for (var h of o) {
      var p = a(h);
      if (p !== f) throw new TypeError("The vectors had different length: " + (f | 0) + " \u2260 " + (p | 0));
      for (var v = n(h), d = 0; d < f; d++) c[d].push(v[d]);
    }
    return c;
  }
  function a(o) {
    var f = i(o);
    if (f.length === 1) return f[0];
    if (f.length === 2) {
      if (f[0] === 1) return f[1];
      if (f[1] === 1) return f[0];
      throw new TypeError("At least one of the arguments is not a vector.");
    } else throw new TypeError("Only one- or two-dimensional vectors are supported.");
  }
}), Jn = "unaryMinus", Ef = ["typed"], bf = rr(Jn, Ef, (r) => {
  var { typed: e } = r;
  return e(Jn, { number: gu, "Complex | BigNumber | Fraction": (t) => t.neg(), bigint: (t) => -t, Unit: e.referToSelf((t) => (n) => {
    var i = n.clone();
    return i.value = e.find(t, i.valueType())(n.value), i;
  }), "Array | Matrix": e.referToSelf((t) => (n) => ne(n, t, true)) });
}), Yn = "abs", Cf = ["typed"], _f = rr(Yn, Cf, (r) => {
  var { typed: e } = r;
  return e(Yn, { number: pu, "Complex | BigNumber | Fraction | Unit": (t) => t.abs(), bigint: (t) => t < 0n ? -t : t, "Array | Matrix": e.referToSelf((t) => (n) => ne(n, t, true)) });
}), Qn = "addScalar", Bf = ["typed"], Mf = rr(Qn, Bf, (r) => {
  var { typed: e } = r;
  return e(Qn, { "number, number": du, "Complex, Complex": function(n, i) {
    return n.add(i);
  }, "BigNumber, BigNumber": function(n, i) {
    return n.plus(i);
  }, "bigint, bigint": function(n, i) {
    return n + i;
  }, "Fraction, Fraction": function(n, i) {
    return n.add(i);
  }, "Unit, Unit": e.referToSelf((t) => (n, i) => {
    if (n.value === null || n.value === void 0) throw new Error("Parameter x contains a unit with undefined value");
    if (i.value === null || i.value === void 0) throw new Error("Parameter y contains a unit with undefined value");
    if (!n.equalBase(i)) throw new Error("Units do not match");
    var u = n.clone();
    return u.value = e.find(t, [u.valueType(), i.valueType()])(u.value, i.value), u.fixPrefix = false, u;
  }) });
}), Xn = "subtractScalar", Nf = ["typed"], Sf = rr(Xn, Nf, (r) => {
  var { typed: e } = r;
  return e(Xn, { "number, number": mu, "Complex, Complex": function(n, i) {
    return n.sub(i);
  }, "BigNumber, BigNumber": function(n, i) {
    return n.minus(i);
  }, "bigint, bigint": function(n, i) {
    return n - i;
  }, "Fraction, Fraction": function(n, i) {
    return n.sub(i);
  }, "Unit, Unit": e.referToSelf((t) => (n, i) => {
    if (n.value === null || n.value === void 0) throw new Error("Parameter x contains a unit with undefined value");
    if (i.value === null || i.value === void 0) throw new Error("Parameter y contains a unit with undefined value");
    if (!n.equalBase(i)) throw new Error("Units do not match");
    var u = n.clone();
    return u.value = e.find(t, [u.valueType(), i.valueType()])(u.value, i.value), u.fixPrefix = false, u;
  }) });
}), xf = "matAlgo11xS0s", Tf = ["typed", "equalScalar"], Au = rr(xf, Tf, (r) => {
  var { typed: e, equalScalar: t } = r;
  return function(i, u, a, o) {
    var f = i._values, c = i._index, s = i._ptr, h = i._size, p = i._datatype;
    if (!f) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = h[0], d = h[1], l, m = t, D = 0, b = a;
    typeof p == "string" && (l = p, m = e.find(t, [l, l]), D = e.convert(0, l), u = e.convert(u, l), b = e.find(a, [l, l]));
    for (var g = [], C = [], A = [], w = 0; w < d; w++) {
      A[w] = C.length;
      for (var _ = s[w], F = s[w + 1], y = _; y < F; y++) {
        var M = c[y], B = o ? b(u, f[y]) : b(f[y], u);
        m(B, D) || (C.push(M), g.push(B));
      }
    }
    return A[d] = C.length, i.createSparseMatrix({ values: g, index: C, ptr: A, size: [v, d], datatype: l });
  };
}), If = "matAlgo12xSfs", zf = ["typed", "DenseMatrix"], Je = rr(If, zf, (r) => {
  var { typed: e, DenseMatrix: t } = r;
  return function(i, u, a, o) {
    var f = i._values, c = i._index, s = i._ptr, h = i._size, p = i._datatype;
    if (!f) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = h[0], d = h[1], l, m = a;
    typeof p == "string" && (l = p, u = e.convert(u, l), m = e.find(a, [l, l]));
    for (var D = [], b = [], g = [], C = 0; C < d; C++) {
      for (var A = C + 1, w = s[C], _ = s[C + 1], F = w; F < _; F++) {
        var y = c[F];
        b[y] = f[F], g[y] = A;
      }
      for (var M = 0; M < v; M++) C === 0 && (D[M] = []), g[M] === A ? D[M][C] = o ? m(u, b[M]) : m(b[M], u) : D[M][C] = o ? m(u, 0) : m(0, u);
    }
    return new t({ data: D, size: [v, d], datatype: l });
  };
}), Of = "matAlgo14xDs", $f = ["typed"], hn = rr(Of, $f, (r) => {
  var { typed: e } = r;
  return function(i, u, a, o) {
    var f = i._data, c = i._size, s = i._datatype, h, p = a;
    typeof s == "string" && (h = s, u = e.convert(u, h), p = e.find(a, [h, h]));
    var v = c.length > 0 ? t(p, 0, c, c[0], f, u, o) : [];
    return i.createDenseMatrix({ data: v, size: yr(c), datatype: h });
  };
  function t(n, i, u, a, o, f, c) {
    var s = [];
    if (i === u.length - 1) for (var h = 0; h < a; h++) s[h] = c ? n(f, o[h]) : n(o[h], f);
    else for (var p = 0; p < a; p++) s[p] = t(n, i + 1, u, u[i + 1], o[p], f, c);
    return s;
  }
}), Pf = "matAlgo03xDSf", qf = ["typed"], Ye = rr(Pf, qf, (r) => {
  var { typed: e } = r;
  return function(n, i, u, a) {
    var o = n._data, f = n._size, c = n._datatype || n.getDataType(), s = i._values, h = i._index, p = i._ptr, v = i._size, d = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (f.length !== v.length) throw new Fr(f.length, v.length);
    if (f[0] !== v[0] || f[1] !== v[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + v + ")");
    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var l = f[0], m = f[1], D, b = 0, g = u;
    typeof c == "string" && c === d && c !== "mixed" && (D = c, b = e.convert(0, D), g = e.find(u, [D, D]));
    for (var C = [], A = 0; A < l; A++) C[A] = [];
    for (var w = [], _ = [], F = 0; F < m; F++) {
      for (var y = F + 1, M = p[F], B = p[F + 1], N = M; N < B; N++) {
        var z = h[N];
        w[z] = a ? g(s[N], o[z][F]) : g(o[z][F], s[N]), _[z] = y;
      }
      for (var x = 0; x < l; x++) _[x] === y ? C[x][F] = w[x] : C[x][F] = a ? g(b, o[x][F]) : g(o[x][F], b);
    }
    return n.createDenseMatrix({ data: C, size: [l, m], datatype: c === n._datatype && d === i._datatype ? D : void 0 });
  };
}), Rf = "matAlgo05xSfSf", Uf = ["typed", "equalScalar"], Lf = rr(Rf, Uf, (r) => {
  var { typed: e, equalScalar: t } = r;
  return function(i, u, a) {
    var o = i._values, f = i._index, c = i._ptr, s = i._size, h = i._datatype || i._data === void 0 ? i._datatype : i.getDataType(), p = u._values, v = u._index, d = u._ptr, l = u._size, m = u._datatype || u._data === void 0 ? u._datatype : u.getDataType();
    if (s.length !== l.length) throw new Fr(s.length, l.length);
    if (s[0] !== l[0] || s[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + l + ")");
    var D = s[0], b = s[1], g, C = t, A = 0, w = a;
    typeof h == "string" && h === m && h !== "mixed" && (g = h, C = e.find(t, [g, g]), A = e.convert(0, g), w = e.find(a, [g, g]));
    var _ = o && p ? [] : void 0, F = [], y = [], M = _ ? [] : void 0, B = _ ? [] : void 0, N = [], z = [], x, O, T, Y;
    for (O = 0; O < b; O++) {
      y[O] = F.length;
      var q = O + 1;
      for (T = c[O], Y = c[O + 1]; T < Y; T++) x = f[T], F.push(x), N[x] = q, M && (M[x] = o[T]);
      for (T = d[O], Y = d[O + 1]; T < Y; T++) x = v[T], N[x] !== q && F.push(x), z[x] = q, B && (B[x] = p[T]);
      if (_) for (T = y[O]; T < F.length; ) {
        x = F[T];
        var L = N[x], tr = z[x];
        if (L === q || tr === q) {
          var or = L === q ? M[x] : A, R = tr === q ? B[x] : A, Z = w(or, R);
          C(Z, A) ? F.splice(T, 1) : (_.push(Z), T++);
        }
      }
    }
    return y[b] = F.length, i.createSparseMatrix({ values: _, index: F, ptr: y, size: [D, b], datatype: h === i._datatype && m === u._datatype ? g : void 0 });
  };
}), Zf = "matAlgo13xDD", Vf = ["typed"], Wf = rr(Zf, Vf, (r) => {
  var { typed: e } = r;
  return function(i, u, a) {
    var o = i._data, f = i._size, c = i._datatype, s = u._data, h = u._size, p = u._datatype, v = [];
    if (f.length !== h.length) throw new Fr(f.length, h.length);
    for (var d = 0; d < f.length; d++) {
      if (f[d] !== h[d]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + h + ")");
      v[d] = f[d];
    }
    var l, m = a;
    typeof c == "string" && c === p && (l = c, m = e.find(a, [l, l]));
    var D = v.length > 0 ? t(m, 0, v, v[0], o, s) : [];
    return i.createDenseMatrix({ data: D, size: v, datatype: l });
  };
  function t(n, i, u, a, o, f) {
    var c = [];
    if (i === u.length - 1) for (var s = 0; s < a; s++) c[s] = n(o[s], f[s]);
    else for (var h = 0; h < a; h++) c[h] = t(n, i + 1, u, u[i + 1], o[h], f[h]);
    return c;
  }
});
function Zr(r, e) {
  if (Fe(r.size(), e.size())) return [r, e];
  var t = lu(r.size(), e.size());
  return [r, e].map((n) => Jf(n, t));
}
function Jf(r, e) {
  return Fe(r.size(), e) ? r : r.create(jt(r.valueOf(), e), r.datatype());
}
var Yf = "matrixAlgorithmSuite", Qf = ["typed", "matrix"], Ne = rr(Yf, Qf, (r) => {
  var { typed: e, matrix: t } = r, n = Wf({ typed: e }), i = hn({ typed: e });
  return function(a) {
    var o = a.elop, f = a.SD || a.DS, c;
    o ? (c = { "DenseMatrix, DenseMatrix": (v, d) => n(...Zr(v, d), o), "Array, Array": (v, d) => n(...Zr(t(v), t(d)), o).valueOf(), "Array, DenseMatrix": (v, d) => n(...Zr(t(v), d), o), "DenseMatrix, Array": (v, d) => n(...Zr(v, t(d)), o) }, a.SS && (c["SparseMatrix, SparseMatrix"] = (v, d) => a.SS(...Zr(v, d), o, false)), a.DS && (c["DenseMatrix, SparseMatrix"] = (v, d) => a.DS(...Zr(v, d), o, false), c["Array, SparseMatrix"] = (v, d) => a.DS(...Zr(t(v), d), o, false)), f && (c["SparseMatrix, DenseMatrix"] = (v, d) => f(...Zr(d, v), o, true), c["SparseMatrix, Array"] = (v, d) => f(...Zr(t(d), v), o, true))) : (c = { "DenseMatrix, DenseMatrix": e.referToSelf((v) => (d, l) => n(...Zr(d, l), v)), "Array, Array": e.referToSelf((v) => (d, l) => n(...Zr(t(d), t(l)), v).valueOf()), "Array, DenseMatrix": e.referToSelf((v) => (d, l) => n(...Zr(t(d), l), v)), "DenseMatrix, Array": e.referToSelf((v) => (d, l) => n(...Zr(d, t(l)), v)) }, a.SS && (c["SparseMatrix, SparseMatrix"] = e.referToSelf((v) => (d, l) => a.SS(...Zr(d, l), v, false))), a.DS && (c["DenseMatrix, SparseMatrix"] = e.referToSelf((v) => (d, l) => a.DS(...Zr(d, l), v, false)), c["Array, SparseMatrix"] = e.referToSelf((v) => (d, l) => a.DS(...Zr(t(d), l), v, false))), f && (c["SparseMatrix, DenseMatrix"] = e.referToSelf((v) => (d, l) => f(...Zr(l, d), v, true)), c["SparseMatrix, Array"] = e.referToSelf((v) => (d, l) => f(...Zr(t(l), d), v, true))));
    var s = a.scalar || "any", h = a.Ds || a.Ss;
    h && (o ? (c["DenseMatrix," + s] = (v, d) => i(v, d, o, false), c[s + ", DenseMatrix"] = (v, d) => i(d, v, o, true), c["Array," + s] = (v, d) => i(t(v), d, o, false).valueOf(), c[s + ", Array"] = (v, d) => i(t(d), v, o, true).valueOf()) : (c["DenseMatrix," + s] = e.referToSelf((v) => (d, l) => i(d, l, v, false)), c[s + ", DenseMatrix"] = e.referToSelf((v) => (d, l) => i(l, d, v, true)), c["Array," + s] = e.referToSelf((v) => (d, l) => i(t(d), l, v, false).valueOf()), c[s + ", Array"] = e.referToSelf((v) => (d, l) => i(t(l), d, v, true).valueOf())));
    var p = a.sS !== void 0 ? a.sS : a.Ss;
    return o ? (a.Ss && (c["SparseMatrix," + s] = (v, d) => a.Ss(v, d, o, false)), p && (c[s + ", SparseMatrix"] = (v, d) => p(d, v, o, true))) : (a.Ss && (c["SparseMatrix," + s] = e.referToSelf((v) => (d, l) => a.Ss(d, l, v, false))), p && (c[s + ", SparseMatrix"] = e.referToSelf((v) => (d, l) => p(l, d, v, true)))), o && o.signatures && qi(c, o.signatures), c;
  };
}), Xf = "matAlgo01xDSid", Gf = ["typed"], Fu = rr(Xf, Gf, (r) => {
  var { typed: e } = r;
  return function(n, i, u, a) {
    var o = n._data, f = n._size, c = n._datatype || n.getDataType(), s = i._values, h = i._index, p = i._ptr, v = i._size, d = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (f.length !== v.length) throw new Fr(f.length, v.length);
    if (f[0] !== v[0] || f[1] !== v[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + v + ")");
    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var l = f[0], m = f[1], D = typeof c == "string" && c !== "mixed" && c === d ? c : void 0, b = D ? e.find(u, [D, D]) : u, g, C, A = [];
    for (g = 0; g < l; g++) A[g] = [];
    var w = [], _ = [];
    for (C = 0; C < m; C++) {
      for (var F = C + 1, y = p[C], M = p[C + 1], B = y; B < M; B++) g = h[B], w[g] = a ? b(s[B], o[g][C]) : b(o[g][C], s[B]), _[g] = F;
      for (g = 0; g < l; g++) _[g] === F ? A[g][C] = w[g] : A[g][C] = o[g][C];
    }
    return n.createDenseMatrix({ data: A, size: [l, m], datatype: c === n._datatype && d === i._datatype ? D : void 0 });
  };
}), Kf = "matAlgo04xSidSid", Hf = ["typed", "equalScalar"], kf = rr(Kf, Hf, (r) => {
  var { typed: e, equalScalar: t } = r;
  return function(i, u, a) {
    var o = i._values, f = i._index, c = i._ptr, s = i._size, h = i._datatype || i._data === void 0 ? i._datatype : i.getDataType(), p = u._values, v = u._index, d = u._ptr, l = u._size, m = u._datatype || u._data === void 0 ? u._datatype : u.getDataType();
    if (s.length !== l.length) throw new Fr(s.length, l.length);
    if (s[0] !== l[0] || s[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + l + ")");
    var D = s[0], b = s[1], g, C = t, A = 0, w = a;
    typeof h == "string" && h === m && h !== "mixed" && (g = h, C = e.find(t, [g, g]), A = e.convert(0, g), w = e.find(a, [g, g]));
    var _ = o && p ? [] : void 0, F = [], y = [], M = o && p ? [] : void 0, B = o && p ? [] : void 0, N = [], z = [], x, O, T, Y, q;
    for (O = 0; O < b; O++) {
      y[O] = F.length;
      var L = O + 1;
      for (Y = c[O], q = c[O + 1], T = Y; T < q; T++) x = f[T], F.push(x), N[x] = L, M && (M[x] = o[T]);
      for (Y = d[O], q = d[O + 1], T = Y; T < q; T++) if (x = v[T], N[x] === L) {
        if (M) {
          var tr = w(M[x], p[T]);
          C(tr, A) ? N[x] = null : M[x] = tr;
        }
      } else F.push(x), z[x] = L, B && (B[x] = p[T]);
      if (M && B) for (T = y[O]; T < F.length; ) x = F[T], N[x] === L ? (_[T] = M[x], T++) : z[x] === L ? (_[T] = B[x], T++) : F.splice(T, 1);
    }
    return y[b] = F.length, i.createSparseMatrix({ values: _, index: F, ptr: y, size: [D, b], datatype: h === i._datatype && m === u._datatype ? g : void 0 });
  };
}), jf = "matAlgo10xSids", rc = ["typed", "DenseMatrix"], Eu = rr(jf, rc, (r) => {
  var { typed: e, DenseMatrix: t } = r;
  return function(i, u, a, o) {
    var f = i._values, c = i._index, s = i._ptr, h = i._size, p = i._datatype;
    if (!f) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = h[0], d = h[1], l, m = a;
    typeof p == "string" && (l = p, u = e.convert(u, l), m = e.find(a, [l, l]));
    for (var D = [], b = [], g = [], C = 0; C < d; C++) {
      for (var A = C + 1, w = s[C], _ = s[C + 1], F = w; F < _; F++) {
        var y = c[F];
        b[y] = f[F], g[y] = A;
      }
      for (var M = 0; M < v; M++) C === 0 && (D[M] = []), g[M] === A ? D[M][C] = o ? m(u, b[M]) : m(b[M], u) : D[M][C] = u;
    }
    return new t({ data: D, size: [v, d], datatype: l });
  };
}), ec = "multiplyScalar", tc = ["typed"], nc = rr(ec, tc, (r) => {
  var { typed: e } = r;
  return e("multiplyScalar", { "number, number": Du, "Complex, Complex": function(n, i) {
    return n.mul(i);
  }, "BigNumber, BigNumber": function(n, i) {
    return n.times(i);
  }, "bigint, bigint": function(n, i) {
    return n * i;
  }, "Fraction, Fraction": function(n, i) {
    return n.mul(i);
  }, "number | Fraction | BigNumber | Complex, Unit": (t, n) => n.multiply(t), "Unit, number | Fraction | BigNumber | Complex | Unit": (t, n) => t.multiply(n) });
}), Gn = "multiply", ic = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], uc = rr(Gn, ic, (r) => {
  var { typed: e, matrix: t, addScalar: n, multiplyScalar: i, equalScalar: u, dot: a } = r, o = Au({ typed: e, equalScalar: u }), f = hn({ typed: e });
  function c(A, w) {
    switch (A.length) {
      case 1:
        switch (w.length) {
          case 1:
            if (A[0] !== w[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
            break;
          case 2:
            if (A[0] !== w[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + A[0] + ") must match Matrix rows (" + w[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + w.length + " dimensions)");
        }
        break;
      case 2:
        switch (w.length) {
          case 1:
            if (A[1] !== w[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + A[1] + ") must match Vector length (" + w[0] + ")");
            break;
          case 2:
            if (A[1] !== w[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + A[1] + ") must match Matrix B rows (" + w[0] + ")");
            break;
          default:
            throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + w.length + " dimensions)");
        }
        break;
      default:
        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + A.length + " dimensions)");
    }
  }
  function s(A, w, _) {
    if (_ === 0) throw new Error("Cannot multiply two empty vectors");
    return a(A, w);
  }
  function h(A, w) {
    if (w.storage() !== "dense") throw new Error("Support for SparseMatrix not implemented");
    return p(A, w);
  }
  function p(A, w) {
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._data, B = w._size, N = w._datatype || w.getDataType(), z = F[0], x = B[1], O, T = n, Y = i;
    y && N && y === N && typeof y == "string" && y !== "mixed" && (O = y, T = e.find(n, [O, O]), Y = e.find(i, [O, O]));
    for (var q = [], L = 0; L < x; L++) {
      for (var tr = Y(_[0], M[0][L]), or = 1; or < z; or++) tr = T(tr, Y(_[or], M[or][L]));
      q[L] = tr;
    }
    return A.createDenseMatrix({ data: q, size: [x], datatype: y === A._datatype && N === w._datatype ? O : void 0 });
  }
  var v = e("_multiplyMatrixVector", { "DenseMatrix, any": l, "SparseMatrix, any": b }), d = e("_multiplyMatrixMatrix", { "DenseMatrix, DenseMatrix": m, "DenseMatrix, SparseMatrix": D, "SparseMatrix, DenseMatrix": g, "SparseMatrix, SparseMatrix": C });
  function l(A, w) {
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._data, B = w._datatype || w.getDataType(), N = F[0], z = F[1], x, O = n, T = i;
    y && B && y === B && typeof y == "string" && y !== "mixed" && (x = y, O = e.find(n, [x, x]), T = e.find(i, [x, x]));
    for (var Y = [], q = 0; q < N; q++) {
      for (var L = _[q], tr = T(L[0], M[0]), or = 1; or < z; or++) tr = O(tr, T(L[or], M[or]));
      Y[q] = tr;
    }
    return A.createDenseMatrix({ data: Y, size: [N], datatype: y === A._datatype && B === w._datatype ? x : void 0 });
  }
  function m(A, w) {
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._data, B = w._size, N = w._datatype || w.getDataType(), z = F[0], x = F[1], O = B[1], T, Y = n, q = i;
    y && N && y === N && typeof y == "string" && y !== "mixed" && y !== "mixed" && (T = y, Y = e.find(n, [T, T]), q = e.find(i, [T, T]));
    for (var L = [], tr = 0; tr < z; tr++) {
      var or = _[tr];
      L[tr] = [];
      for (var R = 0; R < O; R++) {
        for (var Z = q(or[0], M[0][R]), er = 1; er < x; er++) Z = Y(Z, q(or[er], M[er][R]));
        L[tr][R] = Z;
      }
    }
    return A.createDenseMatrix({ data: L, size: [z, O], datatype: y === A._datatype && N === w._datatype ? T : void 0 });
  }
  function D(A, w) {
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._values, B = w._index, N = w._ptr, z = w._size, x = w._datatype || w._data === void 0 ? w._datatype : w.getDataType();
    if (!M) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var O = F[0], T = z[1], Y, q = n, L = i, tr = u, or = 0;
    y && x && y === x && typeof y == "string" && y !== "mixed" && (Y = y, q = e.find(n, [Y, Y]), L = e.find(i, [Y, Y]), tr = e.find(u, [Y, Y]), or = e.convert(0, Y));
    for (var R = [], Z = [], er = [], ar = w.createSparseMatrix({ values: R, index: Z, ptr: er, size: [O, T], datatype: y === A._datatype && x === w._datatype ? Y : void 0 }), j = 0; j < T; j++) {
      er[j] = Z.length;
      var J = N[j], H = N[j + 1];
      if (H > J) for (var Q = 0, X = 0; X < O; X++) {
        for (var sr = X + 1, k = void 0, hr = J; hr < H; hr++) {
          var dr = B[hr];
          Q !== sr ? (k = L(_[X][dr], M[hr]), Q = sr) : k = q(k, L(_[X][dr], M[hr]));
        }
        Q === sr && !tr(k, or) && (Z.push(X), R.push(k));
      }
    }
    return er[T] = Z.length, ar;
  }
  function b(A, w) {
    var _ = A._values, F = A._index, y = A._ptr, M = A._datatype || A._data === void 0 ? A._datatype : A.getDataType();
    if (!_) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var B = w._data, N = w._datatype || w.getDataType(), z = A._size[0], x = w._size[0], O = [], T = [], Y = [], q, L = n, tr = i, or = u, R = 0;
    M && N && M === N && typeof M == "string" && M !== "mixed" && (q = M, L = e.find(n, [q, q]), tr = e.find(i, [q, q]), or = e.find(u, [q, q]), R = e.convert(0, q));
    var Z = [], er = [];
    Y[0] = 0;
    for (var ar = 0; ar < x; ar++) {
      var j = B[ar];
      if (!or(j, R)) for (var J = y[ar], H = y[ar + 1], Q = J; Q < H; Q++) {
        var X = F[Q];
        er[X] ? Z[X] = L(Z[X], tr(j, _[Q])) : (er[X] = true, T.push(X), Z[X] = tr(j, _[Q]));
      }
    }
    for (var sr = T.length, k = 0; k < sr; k++) {
      var hr = T[k];
      O[k] = Z[hr];
    }
    return Y[1] = T.length, A.createSparseMatrix({ values: O, index: T, ptr: Y, size: [z, 1], datatype: M === A._datatype && N === w._datatype ? q : void 0 });
  }
  function g(A, w) {
    var _ = A._values, F = A._index, y = A._ptr, M = A._datatype || A._data === void 0 ? A._datatype : A.getDataType();
    if (!_) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var B = w._data, N = w._datatype || w.getDataType(), z = A._size[0], x = w._size[0], O = w._size[1], T, Y = n, q = i, L = u, tr = 0;
    M && N && M === N && typeof M == "string" && M !== "mixed" && (T = M, Y = e.find(n, [T, T]), q = e.find(i, [T, T]), L = e.find(u, [T, T]), tr = e.convert(0, T));
    for (var or = [], R = [], Z = [], er = A.createSparseMatrix({ values: or, index: R, ptr: Z, size: [z, O], datatype: M === A._datatype && N === w._datatype ? T : void 0 }), ar = [], j = [], J = 0; J < O; J++) {
      Z[J] = R.length;
      for (var H = J + 1, Q = 0; Q < x; Q++) {
        var X = B[Q][J];
        if (!L(X, tr)) for (var sr = y[Q], k = y[Q + 1], hr = sr; hr < k; hr++) {
          var dr = F[hr];
          j[dr] !== H ? (j[dr] = H, R.push(dr), ar[dr] = q(X, _[hr])) : ar[dr] = Y(ar[dr], q(X, _[hr]));
        }
      }
      for (var mr = Z[J], gr = R.length, Ar = mr; Ar < gr; Ar++) {
        var Er = R[Ar];
        or[Ar] = ar[Er];
      }
    }
    return Z[O] = R.length, er;
  }
  function C(A, w) {
    var _ = A._values, F = A._index, y = A._ptr, M = A._datatype || A._data === void 0 ? A._datatype : A.getDataType(), B = w._values, N = w._index, z = w._ptr, x = w._datatype || w._data === void 0 ? w._datatype : w.getDataType(), O = A._size[0], T = w._size[1], Y = _ && B, q, L = n, tr = i;
    M && x && M === x && typeof M == "string" && M !== "mixed" && (q = M, L = e.find(n, [q, q]), tr = e.find(i, [q, q]));
    for (var or = Y ? [] : void 0, R = [], Z = [], er = A.createSparseMatrix({ values: or, index: R, ptr: Z, size: [O, T], datatype: M === A._datatype && x === w._datatype ? q : void 0 }), ar = Y ? [] : void 0, j = [], J, H, Q, X, sr, k, hr, dr, mr = 0; mr < T; mr++) {
      Z[mr] = R.length;
      var gr = mr + 1;
      for (sr = z[mr], k = z[mr + 1], X = sr; X < k; X++) if (dr = N[X], Y) for (H = y[dr], Q = y[dr + 1], J = H; J < Q; J++) hr = F[J], j[hr] !== gr ? (j[hr] = gr, R.push(hr), ar[hr] = tr(B[X], _[J])) : ar[hr] = L(ar[hr], tr(B[X], _[J]));
      else for (H = y[dr], Q = y[dr + 1], J = H; J < Q; J++) hr = F[J], j[hr] !== gr && (j[hr] = gr, R.push(hr));
      if (Y) for (var Ar = Z[mr], Er = R.length, zr = Ar; zr < Er; zr++) {
        var _r = R[zr];
        or[zr] = ar[_r];
      }
    }
    return Z[T] = R.length, er;
  }
  return e(Gn, i, { "Array, Array": e.referTo("Matrix, Matrix", (A) => (w, _) => {
    c(wr(w), wr(_));
    var F = A(t(w), t(_));
    return Cr(F) ? F.valueOf() : F;
  }), "Matrix, Matrix": function(w, _) {
    var F = w.size(), y = _.size();
    return c(F, y), F.length === 1 ? y.length === 1 ? s(w, _, F[0]) : h(w, _) : y.length === 1 ? v(w, _) : d(w, _);
  }, "Matrix, Array": e.referTo("Matrix,Matrix", (A) => (w, _) => A(w, t(_))), "Array, Matrix": e.referToSelf((A) => (w, _) => A(t(w, _.storage()), _)), "SparseMatrix, any": function(w, _) {
    return o(w, _, i, false);
  }, "DenseMatrix, any": function(w, _) {
    return f(w, _, i, false);
  }, "any, SparseMatrix": function(w, _) {
    return o(_, w, i, true);
  }, "any, DenseMatrix": function(w, _) {
    return f(_, w, i, true);
  }, "Array, any": function(w, _) {
    return f(t(w), _, i, false).valueOf();
  }, "any, Array": function(w, _) {
    return f(t(_), w, i, true).valueOf();
  }, "any, any": i, "any, any, ...any": e.referToSelf((A) => (w, _, F) => {
    for (var y = A(w, _), M = 0; M < F.length; M++) y = A(y, F[M]);
    return y;
  }) });
}), Kn = "sign", ac = ["typed", "BigNumber", "Fraction", "complex"], oc = rr(Kn, ac, (r) => {
  var { typed: e, BigNumber: t, complex: n, Fraction: i } = r;
  return e(Kn, { number: rn, Complex: function(a) {
    return a.im === 0 ? n(rn(a.re)) : a.sign();
  }, BigNumber: function(a) {
    return new t(a.cmp(0));
  }, bigint: function(a) {
    return a > 0n ? 1n : a < 0n ? -1n : 0n;
  }, Fraction: function(a) {
    return new i(a.s);
  }, "Array | Matrix": e.referToSelf((u) => (a) => ne(a, u, true)), Unit: e.referToSelf((u) => (a) => {
    if (!a._isDerived() && a.units[0].unit.offset !== 0) throw new TypeError("sign is ambiguous for units with offset");
    return e.find(u, a.valueType())(a.value);
  }) });
}), sc = "sqrt", fc = ["config", "typed", "Complex"], cc = rr(sc, fc, (r) => {
  var { config: e, typed: t, Complex: n } = r;
  return t("sqrt", { number: i, Complex: function(a) {
    return a.sqrt();
  }, BigNumber: function(a) {
    return !a.isNegative() || e.predictable ? a.sqrt() : i(a.toNumber());
  }, Unit: function(a) {
    return a.pow(0.5);
  } });
  function i(u) {
    return isNaN(u) ? NaN : u >= 0 || e.predictable ? Math.sqrt(u) : new n(u, 0).sqrt();
  }
}), Hn = "subtract", lc = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], hc = rr(Hn, lc, (r) => {
  var { typed: e, matrix: t, equalScalar: n, subtractScalar: i, unaryMinus: u, DenseMatrix: a, concat: o } = r, f = Fu({ typed: e }), c = Ye({ typed: e }), s = Lf({ typed: e, equalScalar: n }), h = Eu({ typed: e, DenseMatrix: a }), p = Je({ typed: e, DenseMatrix: a }), v = Ne({ typed: e, matrix: t, concat: o });
  return e(Hn, { "any, any": i }, v({ elop: i, SS: s, DS: f, SD: c, Ss: p, sS: h }));
}), vc = "matAlgo07xSSf", pc = ["typed", "SparseMatrix"], et = rr(vc, pc, (r) => {
  var { typed: e, SparseMatrix: t } = r;
  return function(u, a, o) {
    var f = u._size, c = u._datatype || u._data === void 0 ? u._datatype : u.getDataType(), s = a._size, h = a._datatype || a._data === void 0 ? a._datatype : a.getDataType();
    if (f.length !== s.length) throw new Fr(f.length, s.length);
    if (f[0] !== s[0] || f[1] !== s[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + s + ")");
    var p = f[0], v = f[1], d, l = 0, m = o;
    typeof c == "string" && c === h && c !== "mixed" && (d = c, l = e.convert(0, d), m = e.find(o, [d, d]));
    for (var D = [], b = [], g = new Array(v + 1).fill(0), C = [], A = [], w = [], _ = [], F = 0; F < v; F++) {
      var y = F + 1, M = 0;
      n(u, F, w, C, y), n(a, F, _, A, y);
      for (var B = 0; B < p; B++) {
        var N = w[B] === y ? C[B] : l, z = _[B] === y ? A[B] : l, x = m(N, z);
        x !== 0 && x !== false && (b.push(B), D.push(x), M++);
      }
      g[F + 1] = g[F] + M;
    }
    return new t({ values: D, index: b, ptr: g, size: [p, v], datatype: c === u._datatype && h === a._datatype ? d : void 0 });
  };
  function n(i, u, a, o, f) {
    for (var c = i._values, s = i._index, h = i._ptr, p = h[u], v = h[u + 1]; p < v; p++) {
      var d = s[p];
      a[d] = f, o[d] = c[p];
    }
  }
}), kn = "conj", dc = ["typed"], mc = rr(kn, dc, (r) => {
  var { typed: e } = r;
  return e(kn, { "number | BigNumber | Fraction": (t) => t, Complex: (t) => t.conjugate(), "Array | Matrix": e.referToSelf((t) => (n) => ne(n, t)) });
}), jn = "im", Dc = ["typed"], gc = rr(jn, Dc, (r) => {
  var { typed: e } = r;
  return e(jn, { number: () => 0, "BigNumber | Fraction": (t) => t.mul(0), Complex: (t) => t.im, "Array | Matrix": e.referToSelf((t) => (n) => ne(n, t)) });
}), ri = "re", yc = ["typed"], wc = rr(ri, yc, (r) => {
  var { typed: e } = r;
  return e(ri, { "number | BigNumber | Fraction": (t) => t, Complex: (t) => t.re, "Array | Matrix": e.referToSelf((t) => (n) => ne(n, t)) });
}), ei = "concat", Ac = ["typed", "matrix", "isInteger"], Fc = rr(ei, Ac, (r) => {
  var { typed: e, matrix: t, isInteger: n } = r;
  return e(ei, { "...Array | Matrix | number | BigNumber": function(u) {
    var a, o = u.length, f = -1, c, s = false, h = [];
    for (a = 0; a < o; a++) {
      var p = u[a];
      if (Cr(p) && (s = true), xr(p) || Rr(p)) {
        if (a !== o - 1) throw new Error("Dimension must be specified as last argument");
        if (c = f, f = p.valueOf(), !n(f)) throw new TypeError("Integer number expected for dimension");
        if (f < 0 || a > 0 && f > c) throw new Ce(f, c + 1);
      } else {
        var v = yr(p).valueOf(), d = wr(v);
        if (h[a] = v, c = f, f = d.length - 1, a > 0 && f !== c) throw new Fr(c + 1, f + 1);
      }
    }
    if (h.length === 0) throw new SyntaxError("At least one matrix expected");
    for (var l = h.shift(); h.length; ) l = cu(l, h.shift(), f);
    return s ? t(l) : l;
  }, "...string": function(u) {
    return u.join("");
  } });
}), ti = "column", Ec = ["typed", "Index", "matrix", "range"], bc = rr(ti, Ec, (r) => {
  var { typed: e, Index: t, matrix: n, range: i } = r;
  return e(ti, { "Matrix, number": u, "Array, number": function(o, f) {
    return u(n(yr(o)), f).valueOf();
  } });
  function u(a, o) {
    if (a.size().length !== 2) throw new Error("Only two dimensional matrix is supported");
    qr(o, a.size()[1]);
    var f = i(0, a.size()[0]), c = new t(f, o), s = a.subset(c);
    return Cr(s) ? s : n([[s]]);
  }
}), ni = "cross", Cc = ["typed", "matrix", "subtract", "multiply"], _c = rr(ni, Cc, (r) => {
  var { typed: e, matrix: t, subtract: n, multiply: i } = r;
  return e(ni, { "Matrix, Matrix": function(o, f) {
    return t(u(o.toArray(), f.toArray()));
  }, "Matrix, Array": function(o, f) {
    return t(u(o.toArray(), f));
  }, "Array, Matrix": function(o, f) {
    return t(u(o, f.toArray()));
  }, "Array, Array": u });
  function u(a, o) {
    var f = Math.max(wr(a).length, wr(o).length);
    a = Pn(a), o = Pn(o);
    var c = wr(a), s = wr(o);
    if (c.length !== 1 || s.length !== 1 || c[0] !== 3 || s[0] !== 3) throw new RangeError("Vectors with length 3 expected (Size A = [" + c.join(", ") + "], B = [" + s.join(", ") + "])");
    var h = [n(i(a[1], o[2]), i(a[2], o[1])), n(i(a[2], o[0]), i(a[0], o[2])), n(i(a[0], o[1]), i(a[1], o[0]))];
    return f > 1 ? [h] : h;
  }
}), ii = "diag", Bc = ["typed", "matrix", "DenseMatrix", "SparseMatrix"], Mc = rr(ii, Bc, (r) => {
  var { typed: e, matrix: t, DenseMatrix: n, SparseMatrix: i } = r;
  return e(ii, { Array: function(c) {
    return u(c, 0, wr(c), null);
  }, "Array, number": function(c, s) {
    return u(c, s, wr(c), null);
  }, "Array, BigNumber": function(c, s) {
    return u(c, s.toNumber(), wr(c), null);
  }, "Array, string": function(c, s) {
    return u(c, 0, wr(c), s);
  }, "Array, number, string": function(c, s, h) {
    return u(c, s, wr(c), h);
  }, "Array, BigNumber, string": function(c, s, h) {
    return u(c, s.toNumber(), wr(c), h);
  }, Matrix: function(c) {
    return u(c, 0, c.size(), c.storage());
  }, "Matrix, number": function(c, s) {
    return u(c, s, c.size(), c.storage());
  }, "Matrix, BigNumber": function(c, s) {
    return u(c, s.toNumber(), c.size(), c.storage());
  }, "Matrix, string": function(c, s) {
    return u(c, 0, c.size(), s);
  }, "Matrix, number, string": function(c, s, h) {
    return u(c, s, c.size(), h);
  }, "Matrix, BigNumber, string": function(c, s, h) {
    return u(c, s.toNumber(), c.size(), h);
  } });
  function u(f, c, s, h) {
    if (!br(c)) throw new TypeError("Second parameter in function diag must be an integer");
    var p = c > 0 ? c : 0, v = c < 0 ? -c : 0;
    switch (s.length) {
      case 1:
        return a(f, c, h, s[0], v, p);
      case 2:
        return o(f, c, h, s, v, p);
    }
    throw new RangeError("Matrix for function diag must be 2 dimensional");
  }
  function a(f, c, s, h, p, v) {
    var d = [h + p, h + v];
    if (s && s !== "sparse" && s !== "dense") throw new TypeError("Unknown matrix type ".concat(s, '"'));
    var l = s === "sparse" ? i.diagonal(d, f, c) : n.diagonal(d, f, c);
    return s !== null ? l : l.valueOf();
  }
  function o(f, c, s, h, p, v) {
    if (Cr(f)) {
      var d = f.diagonal(c);
      return s !== null ? s !== d.storage() ? t(d, s) : d : d.valueOf();
    }
    for (var l = Math.min(h[0] - p, h[1] - v), m = [], D = 0; D < l; D++) m[D] = f[D + p][D + v];
    return s !== null ? t(m) : m;
  }
}), ui = "flatten", Nc = ["typed"], Sc = rr(ui, Nc, (r) => {
  var { typed: e } = r;
  return e(ui, { Array: function(n) {
    return kt(n);
  }, Matrix: function(n) {
    return n.create(kt(n.valueOf(), true), n.datatype());
  } });
}), ai = "getMatrixDataType", xc = ["typed"], Tc = rr(ai, xc, (r) => {
  var { typed: e } = r;
  return e(ai, { Array: function(n) {
    return St(n, Gr);
  }, Matrix: function(n) {
    return n.getDataType();
  } });
}), oi = "identity", Ic = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], zc = rr(oi, Ic, (r) => {
  var { typed: e, config: t, matrix: n, BigNumber: i, DenseMatrix: u, SparseMatrix: a } = r;
  return e(oi, { "": function() {
    return t.matrix === "Matrix" ? n([]) : [];
  }, string: function(s) {
    return n(s);
  }, "number | BigNumber": function(s) {
    return f(s, s, t.matrix === "Matrix" ? "dense" : void 0);
  }, "number | BigNumber, string": function(s, h) {
    return f(s, s, h);
  }, "number | BigNumber, number | BigNumber": function(s, h) {
    return f(s, h, t.matrix === "Matrix" ? "dense" : void 0);
  }, "number | BigNumber, number | BigNumber, string": function(s, h, p) {
    return f(s, h, p);
  }, Array: function(s) {
    return o(s);
  }, "Array, string": function(s, h) {
    return o(s, h);
  }, Matrix: function(s) {
    return o(s.valueOf(), s.storage());
  }, "Matrix, string": function(s, h) {
    return o(s.valueOf(), h);
  } });
  function o(c, s) {
    switch (c.length) {
      case 0:
        return s ? n(s) : [];
      case 1:
        return f(c[0], c[0], s);
      case 2:
        return f(c[0], c[1], s);
      default:
        throw new Error("Vector containing two values expected");
    }
  }
  function f(c, s, h) {
    var p = Rr(c) || Rr(s) ? i : null;
    if (Rr(c) && (c = c.toNumber()), Rr(s) && (s = s.toNumber()), !br(c) || c < 1) throw new Error("Parameters in function identity must be positive integers");
    if (!br(s) || s < 1) throw new Error("Parameters in function identity must be positive integers");
    var v = p ? new i(1) : 1, d = p ? new p(0) : 0, l = [c, s];
    if (h) {
      if (h === "sparse") return a.diagonal(l, v, 0, d);
      if (h === "dense") return u.diagonal(l, v, 0, d);
      throw new TypeError('Unknown matrix type "'.concat(h, '"'));
    }
    for (var m = mt([], l, d), D = c < s ? c : s, b = 0; b < D; b++) m[b][b] = v;
    return m;
  }
}), si = "kron", Oc = ["typed", "matrix", "multiplyScalar"], $c = rr(si, Oc, (r) => {
  var { typed: e, matrix: t, multiplyScalar: n } = r;
  return e(si, { "Matrix, Matrix": function(a, o) {
    return t(i(a.toArray(), o.toArray()));
  }, "Matrix, Array": function(a, o) {
    return t(i(a.toArray(), o));
  }, "Array, Matrix": function(a, o) {
    return t(i(a, o.toArray()));
  }, "Array, Array": i });
  function i(u, a) {
    if (wr(u).length === 1 && (u = [u]), wr(a).length === 1 && (a = [a]), wr(u).length > 2 || wr(a).length > 2) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(u.length) + ", y = " + JSON.stringify(a.length) + ")");
    var o = [], f = [];
    return u.map(function(c) {
      return a.map(function(s) {
        return f = [], o.push(f), c.map(function(h) {
          return s.map(function(p) {
            return f.push(n(h, p));
          });
        });
      });
    }) && o;
  }
});
function bu() {
  throw new Error('No "bignumber" implementation available');
}
function Pc() {
  throw new Error('No "fraction" implementation available');
}
function Cu() {
  throw new Error('No "matrix" implementation available');
}
var fi = "range", qc = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], Rc = rr(fi, qc, (r) => {
  var { typed: e, config: t, matrix: n, bignumber: i, smaller: u, smallerEq: a, larger: o, largerEq: f, add: c, isPositive: s } = r;
  return e(fi, { string: p, "string, boolean": p, number: function(m) {
    throw new TypeError("Too few arguments to function range(): ".concat(m));
  }, boolean: function(m) {
    throw new TypeError("Unexpected type of argument 1 to function range(): ".concat(m, ", number|bigint|BigNumber|Fraction"));
  }, "number, number": function(m, D) {
    return h(v(m, D, 1, false));
  }, "number, number, number": function(m, D, b) {
    return h(v(m, D, b, false));
  }, "number, number, boolean": function(m, D, b) {
    return h(v(m, D, 1, b));
  }, "number, number, number, boolean": function(m, D, b, g) {
    return h(v(m, D, b, g));
  }, "bigint, bigint|number": function(m, D) {
    return h(v(m, D, 1n, false));
  }, "number, bigint": function(m, D) {
    return h(v(BigInt(m), D, 1n, false));
  }, "bigint, bigint|number, bigint|number": function(m, D, b) {
    return h(v(m, D, BigInt(b), false));
  }, "number, bigint, bigint|number": function(m, D, b) {
    return h(v(BigInt(m), D, BigInt(b), false));
  }, "bigint, bigint|number, boolean": function(m, D, b) {
    return h(v(m, D, 1n, b));
  }, "number, bigint, boolean": function(m, D, b) {
    return h(v(BigInt(m), D, 1n, b));
  }, "bigint, bigint|number, bigint|number, boolean": function(m, D, b, g) {
    return h(v(m, D, BigInt(b), g));
  }, "number, bigint, bigint|number, boolean": function(m, D, b, g) {
    return h(v(BigInt(m), D, BigInt(b), g));
  }, "BigNumber, BigNumber": function(m, D) {
    var b = m.constructor;
    return h(v(m, D, new b(1), false));
  }, "BigNumber, BigNumber, BigNumber": function(m, D, b) {
    return h(v(m, D, b, false));
  }, "BigNumber, BigNumber, boolean": function(m, D, b) {
    var g = m.constructor;
    return h(v(m, D, new g(1), b));
  }, "BigNumber, BigNumber, BigNumber, boolean": function(m, D, b, g) {
    return h(v(m, D, b, g));
  }, "Fraction, Fraction": function(m, D) {
    return h(v(m, D, 1, false));
  }, "Fraction, Fraction, Fraction": function(m, D, b) {
    return h(v(m, D, b, false));
  }, "Fraction, Fraction, boolean": function(m, D, b) {
    return h(v(m, D, 1, b));
  }, "Fraction, Fraction, Fraction, boolean": function(m, D, b, g) {
    return h(v(m, D, b, g));
  }, "Unit, Unit, Unit": function(m, D, b) {
    return h(v(m, D, b, false));
  }, "Unit, Unit, Unit, boolean": function(m, D, b, g) {
    return h(v(m, D, b, g));
  } });
  function h(l) {
    return t.matrix === "Matrix" ? n ? n(l) : Cu() : l;
  }
  function p(l, m) {
    var D = d(l);
    if (!D) throw new SyntaxError('String "' + l + '" is no valid range');
    return t.number === "BigNumber" ? (i === void 0 && bu(), h(v(i(D.start), i(D.end), i(D.step)))) : h(v(D.start, D.end, D.step, m));
  }
  function v(l, m, D, b) {
    for (var g = [], C = s(D) ? b ? a : u : b ? f : o, A = l; C(A, m); ) g.push(A), A = c(A, D);
    return g;
  }
  function d(l) {
    var m = l.split(":"), D = m.map(function(g) {
      return Number(g);
    }), b = D.some(function(g) {
      return isNaN(g);
    });
    if (b) return null;
    switch (D.length) {
      case 2:
        return { start: D[0], end: D[1], step: 1 };
      case 3:
        return { start: D[0], end: D[2], step: D[1] };
      default:
        return null;
    }
  }
}), ci = "reshape", Uc = ["typed", "isInteger", "matrix"], Lc = rr(ci, Uc, (r) => {
  var { typed: e, isInteger: t } = r;
  return e(ci, { "Matrix, Array": function(i, u) {
    return i.reshape(u, true);
  }, "Array, Array": function(i, u) {
    return u.forEach(function(a) {
      if (!t(a)) throw new TypeError("Invalid size for dimension: " + a);
    }), fn(i, u);
  } });
}), li = "size", Zc = ["typed", "config", "?matrix"], Vc = rr(li, Zc, (r) => {
  var { typed: e, config: t, matrix: n } = r;
  return e(li, { Matrix: function(u) {
    return u.create(u.size(), "number");
  }, Array: wr, string: function(u) {
    return t.matrix === "Array" ? [u.length] : n([u.length], "dense", "number");
  }, "number | Complex | BigNumber | Unit | boolean | null": function(u) {
    return t.matrix === "Array" ? [] : n ? n([], "dense", "number") : Cu();
  } });
}), hi = "transpose", Wc = ["typed", "matrix"], Jc = rr(hi, Wc, (r) => {
  var { typed: e, matrix: t } = r;
  return e(hi, { Array: (a) => n(t(a)).valueOf(), Matrix: n, any: yr });
  function n(a) {
    var o = a.size(), f;
    switch (o.length) {
      case 1:
        f = a.clone();
        break;
      case 2:
        {
          var c = o[0], s = o[1];
          if (s === 0) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + $r(o) + ")");
          switch (a.storage()) {
            case "dense":
              f = i(a, c, s);
              break;
            case "sparse":
              f = u(a, c, s);
              break;
          }
        }
        break;
      default:
        throw new RangeError("Matrix must be a vector or two dimensional (size: " + $r(o) + ")");
    }
    return f;
  }
  function i(a, o, f) {
    for (var c = a._data, s = [], h, p = 0; p < f; p++) {
      h = s[p] = [];
      for (var v = 0; v < o; v++) h[v] = yr(c[v][p]);
    }
    return a.createDenseMatrix({ data: s, size: [f, o], datatype: a._datatype });
  }
  function u(a, o, f) {
    for (var c = a._values, s = a._index, h = a._ptr, p = c ? [] : void 0, v = [], d = [], l = [], m = 0; m < o; m++) l[m] = 0;
    var D, b, g;
    for (D = 0, b = s.length; D < b; D++) l[s[D]]++;
    for (var C = 0, A = 0; A < o; A++) d.push(C), C += l[A], l[A] = d[A];
    for (d.push(C), g = 0; g < f; g++) for (var w = h[g], _ = h[g + 1], F = w; F < _; F++) {
      var y = l[s[F]]++;
      v[y] = g, c && (p[y] = yr(c[F]));
    }
    return a.createSparseMatrix({ values: p, index: v, ptr: d, size: [f, o], datatype: a._datatype });
  }
}), vi = "ctranspose", Yc = ["typed", "transpose", "conj"], Qc = rr(vi, Yc, (r) => {
  var { typed: e, transpose: t, conj: n } = r;
  return e(vi, { any: function(u) {
    return n(t(u));
  } });
}), pi = "zeros", Xc = ["typed", "config", "matrix", "BigNumber"], Gc = rr(pi, Xc, (r) => {
  var { typed: e, config: t, matrix: n, BigNumber: i } = r;
  return e(pi, { "": function() {
    return t.matrix === "Array" ? u([]) : u([], "default");
  }, "...number | BigNumber | string": function(c) {
    var s = c[c.length - 1];
    if (typeof s == "string") {
      var h = c.pop();
      return u(c, h);
    } else return t.matrix === "Array" ? u(c) : u(c, "default");
  }, Array: u, Matrix: function(c) {
    var s = c.storage();
    return u(c.valueOf(), s);
  }, "Array | Matrix, string": function(c, s) {
    return u(c.valueOf(), s);
  } });
  function u(f, c) {
    var s = a(f), h = s ? new i(0) : 0;
    if (o(f), c) {
      var p = n(c);
      return f.length > 0 ? p.resize(f, h) : p;
    } else {
      var v = [];
      return f.length > 0 ? mt(v, f, h) : v;
    }
  }
  function a(f) {
    var c = false;
    return f.forEach(function(s, h, p) {
      Rr(s) && (c = true, p[h] = s.toNumber());
    }), c;
  }
  function o(f) {
    f.forEach(function(c) {
      if (typeof c != "number" || !br(c) || c < 0) throw new Error("Parameters in function zeros must be positive integers");
    });
  }
});
function di(r, e, t) {
  var n;
  return String(r).includes("Unexpected type") ? (n = arguments.length > 2 ? " (type: " + Gr(t) + ", value: " + JSON.stringify(t) + ")" : " (type: " + r.data.actual + ")", new TypeError("Cannot calculate " + e + ", unexpected type of argument" + n)) : String(r).includes("complex numbers") ? (n = arguments.length > 2 ? " (type: " + Gr(t) + ", value: " + JSON.stringify(t) + ")" : "", new TypeError("Cannot calculate " + e + ", no ordering relation is defined for complex numbers" + n)) : r;
}
var Kc = "numeric", Hc = ["number", "?bignumber", "?fraction"], kc = rr(Kc, Hc, (r) => {
  var { number: e, bignumber: t, fraction: n } = r, i = { string: true, number: true, BigNumber: true, Fraction: true }, u = { number: (a) => e(a), BigNumber: t ? (a) => t(a) : bu, bigint: (a) => BigInt(a), Fraction: n ? (a) => n(a) : Pc };
  return function(o) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number", c = arguments.length > 2 ? arguments[2] : void 0;
    if (c !== void 0) throw new SyntaxError("numeric() takes one or two arguments");
    var s = Gr(o);
    if (!(s in i)) throw new TypeError("Cannot convert " + o + ' of type "' + s + '"; valid input types are ' + Object.keys(i).join(", "));
    if (!(f in u)) throw new TypeError("Cannot convert " + o + ' to type "' + f + '"; valid output types are ' + Object.keys(u).join(", "));
    return f === s ? o : u[f](o);
  };
}), mi = "divideScalar", jc = ["typed", "numeric"], rl = rr(mi, jc, (r) => {
  var { typed: e, numeric: t } = r;
  return e(mi, { "number, number": function(i, u) {
    return i / u;
  }, "Complex, Complex": function(i, u) {
    return i.div(u);
  }, "BigNumber, BigNumber": function(i, u) {
    return i.div(u);
  }, "bigint, bigint": function(i, u) {
    return i / u;
  }, "Fraction, Fraction": function(i, u) {
    return i.div(u);
  }, "Unit, number | Complex | Fraction | BigNumber | Unit": (n, i) => n.divide(i), "number | Fraction | Complex | BigNumber, Unit": (n, i) => i.divideInto(n) });
}), Di = "pow", el = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], tl = rr(Di, el, (r) => {
  var { typed: e, config: t, identity: n, multiply: i, matrix: u, inv: a, number: o, fraction: f, Complex: c } = r;
  return e(Di, { "number, number": s, "Complex, Complex": function(d, l) {
    return d.pow(l);
  }, "BigNumber, BigNumber": function(d, l) {
    return l.isInteger() || d >= 0 || t.predictable ? d.pow(l) : new c(d.toNumber(), 0).pow(l.toNumber(), 0);
  }, "bigint, bigint": (v, d) => v ** d, "Fraction, Fraction": function(d, l) {
    var m = d.pow(l);
    if (m != null) return m;
    if (t.predictable) throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");
    return s(d.valueOf(), l.valueOf());
  }, "Array, number": h, "Array, BigNumber": function(d, l) {
    return h(d, l.toNumber());
  }, "Matrix, number": p, "Matrix, BigNumber": function(d, l) {
    return p(d, l.toNumber());
  }, "Unit, number | BigNumber": function(d, l) {
    return d.pow(l);
  } });
  function s(v, d) {
    if (t.predictable && !br(d) && v < 0) try {
      var l = f(d), m = o(l);
      if ((d === m || Math.abs((d - m) / d) < 1e-14) && l.d % 2n === 1n) return (l.n % 2n === 0n ? 1 : -1) * Math.pow(-v, d);
    } catch {
    }
    return t.predictable && (v < -1 && d === 1 / 0 || v > -1 && v < 0 && d === -1 / 0) ? NaN : br(d) || v >= 0 || t.predictable ? yu(v, d) : v * v < 1 && d === 1 / 0 || v * v > 1 && d === -1 / 0 ? 0 : new c(v, 0).pow(d, 0);
  }
  function h(v, d) {
    if (!br(d)) throw new TypeError("For A^b, b must be an integer (value is " + d + ")");
    var l = wr(v);
    if (l.length !== 2) throw new Error("For A^b, A must be 2 dimensional (A has " + l.length + " dimensions)");
    if (l[0] !== l[1]) throw new Error("For A^b, A must be square (size is " + l[0] + "x" + l[1] + ")");
    if (d < 0) try {
      return h(a(v), -d);
    } catch (b) {
      throw b.message === "Cannot calculate inverse, determinant is zero" ? new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + d + ")") : b;
    }
    for (var m = n(l[0]).valueOf(), D = v; d >= 1; ) (d & 1) === 1 && (m = i(D, m)), d >>= 1, D = i(D, D);
    return m;
  }
  function p(v, d) {
    return u(h(v.valueOf(), d));
  }
});
function _u(r) {
  var { DenseMatrix: e } = r;
  return function(n, i, u) {
    var a = n.size();
    if (a.length !== 2) throw new RangeError("Matrix must be two dimensional (size: " + $r(a) + ")");
    var o = a[0], f = a[1];
    if (o !== f) throw new RangeError("Matrix must be square (size: " + $r(a) + ")");
    var c = [];
    if (Cr(i)) {
      var s = i.size(), h = i._data;
      if (s.length === 1) {
        if (s[0] !== o) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var p = 0; p < o; p++) c[p] = [h[p]];
        return new e({ data: c, size: [o, 1], datatype: i._datatype });
      }
      if (s.length === 2) {
        if (s[0] !== o || s[1] !== 1) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        if (zi(i)) {
          if (u) {
            c = [];
            for (var v = 0; v < o; v++) c[v] = [h[v][0]];
            return new e({ data: c, size: [o, 1], datatype: i._datatype });
          }
          return i;
        }
        if (Oi(i)) {
          for (var d = 0; d < o; d++) c[d] = [0];
          for (var l = i._values, m = i._index, D = i._ptr, b = D[1], g = D[0]; g < b; g++) {
            var C = m[g];
            c[C][0] = l[g];
          }
          return new e({ data: c, size: [o, 1], datatype: i._datatype });
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
    if (Or(i)) {
      var A = wr(i);
      if (A.length === 1) {
        if (A[0] !== o) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var w = 0; w < o; w++) c[w] = [i[w]];
        return new e({ data: c, size: [o, 1] });
      }
      if (A.length === 2) {
        if (A[0] !== o || A[1] !== 1) throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");
        for (var _ = 0; _ < o; _++) c[_] = [i[_][0]];
        return new e({ data: c, size: [o, 1] });
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
  };
}
var gi = "usolve", nl = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], il = rr(gi, nl, (r) => {
  var { typed: e, matrix: t, divideScalar: n, multiplyScalar: i, subtractScalar: u, equalScalar: a, DenseMatrix: o } = r, f = _u({ DenseMatrix: o });
  return e(gi, { "SparseMatrix, Array | Matrix": function(p, v) {
    return s(p, v);
  }, "DenseMatrix, Array | Matrix": function(p, v) {
    return c(p, v);
  }, "Array, Array | Matrix": function(p, v) {
    var d = t(p), l = c(d, v);
    return l.valueOf();
  } });
  function c(h, p) {
    p = f(h, p, true);
    for (var v = p._data, d = h._size[0], l = h._size[1], m = [], D = h._data, b = l - 1; b >= 0; b--) {
      var g = v[b][0] || 0, C = void 0;
      if (a(g, 0)) C = 0;
      else {
        var A = D[b][b];
        if (a(A, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
        C = n(g, A);
        for (var w = b - 1; w >= 0; w--) v[w] = [u(v[w][0] || 0, i(C, D[w][b]))];
      }
      m[b] = [C];
    }
    return new o({ data: m, size: [d, 1] });
  }
  function s(h, p) {
    p = f(h, p, true);
    for (var v = p._data, d = h._size[0], l = h._size[1], m = h._values, D = h._index, b = h._ptr, g = [], C = l - 1; C >= 0; C--) {
      var A = v[C][0] || 0;
      if (a(A, 0)) g[C] = [0];
      else {
        for (var w = 0, _ = [], F = [], y = b[C], M = b[C + 1], B = M - 1; B >= y; B--) {
          var N = D[B];
          N === C ? w = m[B] : N < C && (_.push(m[B]), F.push(N));
        }
        if (a(w, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
        for (var z = n(A, w), x = 0, O = F.length; x < O; x++) {
          var T = F[x];
          v[T] = [u(v[T][0], i(z, _[x]))];
        }
        g[C] = [z];
      }
    }
    return new o({ data: g, size: [d, 1] });
  }
}), yi = "usolveAll", ul = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], al = rr(yi, ul, (r) => {
  var { typed: e, matrix: t, divideScalar: n, multiplyScalar: i, subtractScalar: u, equalScalar: a, DenseMatrix: o } = r, f = _u({ DenseMatrix: o });
  return e(yi, { "SparseMatrix, Array | Matrix": function(p, v) {
    return s(p, v);
  }, "DenseMatrix, Array | Matrix": function(p, v) {
    return c(p, v);
  }, "Array, Array | Matrix": function(p, v) {
    var d = t(p), l = c(d, v);
    return l.map((m) => m.valueOf());
  } });
  function c(h, p) {
    for (var v = [f(h, p, true)._data.map((F) => F[0])], d = h._data, l = h._size[0], m = h._size[1], D = m - 1; D >= 0; D--) for (var b = v.length, g = 0; g < b; g++) {
      var C = v[g];
      if (a(d[D][D], 0)) if (a(C[D], 0)) {
        if (g === 0) {
          var w = [...C];
          w[D] = 1;
          for (var _ = D - 1; _ >= 0; _--) w[_] = u(w[_], d[_][D]);
          v.push(w);
        }
      } else {
        if (g === 0) return [];
        v.splice(g, 1), g -= 1, b -= 1;
      }
      else {
        C[D] = n(C[D], d[D][D]);
        for (var A = D - 1; A >= 0; A--) C[A] = u(C[A], i(C[D], d[A][D]));
      }
    }
    return v.map((F) => new o({ data: F.map((y) => [y]), size: [l, 1] }));
  }
  function s(h, p) {
    for (var v = [f(h, p, true)._data.map((or) => or[0])], d = h._size[0], l = h._size[1], m = h._values, D = h._index, b = h._ptr, g = l - 1; g >= 0; g--) for (var C = v.length, A = 0; A < C; A++) {
      for (var w = v[A], _ = [], F = [], y = b[g], M = b[g + 1], B = 0, N = M - 1; N >= y; N--) {
        var z = D[N];
        z === g ? B = m[N] : z < g && (_.push(m[N]), F.push(z));
      }
      if (a(B, 0)) if (a(w[g], 0)) {
        if (A === 0) {
          var Y = [...w];
          Y[g] = 1;
          for (var q = 0, L = F.length; q < L; q++) {
            var tr = F[q];
            Y[tr] = u(Y[tr], _[q]);
          }
          v.push(Y);
        }
      } else {
        if (A === 0) return [];
        v.splice(A, 1), A -= 1, C -= 1;
      }
      else {
        w[g] = n(w[g], B);
        for (var x = 0, O = F.length; x < O; x++) {
          var T = F[x];
          w[T] = u(w[T], i(w[g], _[x]));
        }
      }
    }
    return v.map((or) => new o({ data: or.map((R) => [R]), size: [d, 1] }));
  }
}), wt = "equal", ol = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat", "SparseMatrix"], sl = rr(wt, ol, (r) => {
  var { typed: e, matrix: t, equalScalar: n, DenseMatrix: i, concat: u, SparseMatrix: a } = r, o = Ye({ typed: e }), f = et({ typed: e, SparseMatrix: a }), c = Je({ typed: e, DenseMatrix: i }), s = Ne({ typed: e, matrix: t, concat: u });
  return e(wt, fl({ typed: e, equalScalar: n }), s({ elop: n, SS: f, DS: o, Ss: c }));
}), fl = rr(wt, ["typed", "equalScalar"], (r) => {
  var { typed: e, equalScalar: t } = r;
  return e(wt, { "any, any": function(i, u) {
    return i === null ? u === null : u === null ? i === null : i === void 0 ? u === void 0 : u === void 0 ? i === void 0 : t(i, u);
  } });
}), At = "smaller", cl = ["typed", "config", "bignumber", "matrix", "DenseMatrix", "concat", "SparseMatrix"], ll = rr(At, cl, (r) => {
  var { typed: e, config: t, bignumber: n, matrix: i, DenseMatrix: u, concat: a, SparseMatrix: o } = r, f = Ye({ typed: e }), c = et({ typed: e, SparseMatrix: o }), s = Je({ typed: e, DenseMatrix: u }), h = Ne({ typed: e, matrix: i, concat: a }), p = rt({ typed: e });
  function v(d, l) {
    return d.lt(l) && !We(d, l, t.relTol, t.absTol);
  }
  return e(At, hl({ typed: e, config: t }), { "boolean, boolean": (d, l) => d < l, "BigNumber, BigNumber": v, "bigint, bigint": (d, l) => d < l, "Fraction, Fraction": (d, l) => d.compare(l) === -1, "Fraction, BigNumber": function(l, m) {
    return v(n(l), m);
  }, "BigNumber, Fraction": function(l, m) {
    return v(l, n(m));
  }, "Complex, Complex": function(l, m) {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, p, h({ SS: c, DS: f, Ss: s }));
}), hl = rr(At, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(At, { "number, number": function(i, u) {
    return i < u && !De(i, u, t.relTol, t.absTol);
  } });
}), Ft = "smallerEq", vl = ["typed", "config", "matrix", "DenseMatrix", "concat", "SparseMatrix"], pl = rr(Ft, vl, (r) => {
  var { typed: e, config: t, matrix: n, DenseMatrix: i, concat: u, SparseMatrix: a } = r, o = Ye({ typed: e }), f = et({ typed: e, SparseMatrix: a }), c = Je({ typed: e, DenseMatrix: i }), s = Ne({ typed: e, matrix: n, concat: u }), h = rt({ typed: e });
  return e(Ft, dl({ typed: e, config: t }), { "boolean, boolean": (p, v) => p <= v, "BigNumber, BigNumber": function(v, d) {
    return v.lte(d) || We(v, d, t.relTol, t.absTol);
  }, "bigint, bigint": (p, v) => p <= v, "Fraction, Fraction": (p, v) => p.compare(v) !== 1, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, h, s({ SS: f, DS: o, Ss: c }));
}), dl = rr(Ft, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(Ft, { "number, number": function(i, u) {
    return i <= u || De(i, u, t.relTol, t.absTol);
  } });
}), Et = "larger", ml = ["typed", "config", "bignumber", "matrix", "DenseMatrix", "concat", "SparseMatrix"], Dl = rr(Et, ml, (r) => {
  var { typed: e, config: t, bignumber: n, matrix: i, DenseMatrix: u, concat: a, SparseMatrix: o } = r, f = Ye({ typed: e }), c = et({ typed: e, SparseMatrix: o }), s = Je({ typed: e, DenseMatrix: u }), h = Ne({ typed: e, matrix: i, concat: a }), p = rt({ typed: e });
  function v(d, l) {
    return d.gt(l) && !We(d, l, t.relTol, t.absTol);
  }
  return e(Et, gl({ typed: e, config: t }), { "boolean, boolean": (d, l) => d > l, "BigNumber, BigNumber": v, "bigint, bigint": (d, l) => d > l, "Fraction, Fraction": (d, l) => d.compare(l) === 1, "Fraction, BigNumber": function(l, m) {
    return v(n(l), m);
  }, "BigNumber, Fraction": function(l, m) {
    return v(l, n(m));
  }, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, p, h({ SS: c, DS: f, Ss: s }));
}), gl = rr(Et, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(Et, { "number, number": function(i, u) {
    return i > u && !De(i, u, t.relTol, t.absTol);
  } });
}), bt = "largerEq", yl = ["typed", "config", "matrix", "DenseMatrix", "concat", "SparseMatrix"], wl = rr(bt, yl, (r) => {
  var { typed: e, config: t, matrix: n, DenseMatrix: i, concat: u, SparseMatrix: a } = r, o = Ye({ typed: e }), f = et({ typed: e, SparseMatrix: a }), c = Je({ typed: e, DenseMatrix: i }), s = Ne({ typed: e, matrix: n, concat: u }), h = rt({ typed: e });
  return e(bt, Al({ typed: e, config: t }), { "boolean, boolean": (p, v) => p >= v, "BigNumber, BigNumber": function(v, d) {
    return v.gte(d) || We(v, d, t.relTol, t.absTol);
  }, "bigint, bigint": function(v, d) {
    return v >= d;
  }, "Fraction, Fraction": (p, v) => p.compare(v) !== -1, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, h, s({ SS: f, DS: o, Ss: c }));
}), Al = rr(bt, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(bt, { "number, number": function(i, u) {
    return i >= u || De(i, u, t.relTol, t.absTol);
  } });
}), Fl = "ImmutableDenseMatrix", El = ["smaller", "DenseMatrix"], bl = rr(Fl, El, (r) => {
  var { smaller: e, DenseMatrix: t } = r;
  function n(i, u) {
    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
    if (u && !re(u)) throw new Error("Invalid datatype: " + u);
    if (Cr(i) || Or(i)) {
      var a = new t(i, u);
      this._data = a._data, this._size = a._size, this._datatype = a._datatype, this._min = null, this._max = null;
    } else if (i && Or(i.data) && Or(i.size)) this._data = i.data, this._size = i.size, this._datatype = i.datatype, this._min = typeof i.min < "u" ? i.min : null, this._max = typeof i.max < "u" ? i.max : null;
    else {
      if (i) throw new TypeError("Unsupported type of data (" + Gr(i) + ")");
      this._data = [], this._size = [0], this._datatype = u, this._min = null, this._max = null;
    }
  }
  return n.prototype = new t(), n.prototype.type = "ImmutableDenseMatrix", n.prototype.isImmutableDenseMatrix = true, n.prototype.subset = function(i) {
    switch (arguments.length) {
      case 1: {
        var u = t.prototype.subset.call(this, i);
        return Cr(u) ? new n({ data: u._data, size: u._size, datatype: u._datatype }) : u;
      }
      case 2:
      case 3:
        throw new Error("Cannot invoke set subset on an Immutable Matrix instance");
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  }, n.prototype.set = function() {
    throw new Error("Cannot invoke set on an Immutable Matrix instance");
  }, n.prototype.resize = function() {
    throw new Error("Cannot invoke resize on an Immutable Matrix instance");
  }, n.prototype.reshape = function() {
    throw new Error("Cannot invoke reshape on an Immutable Matrix instance");
  }, n.prototype.clone = function() {
    return new n({ data: yr(this._data), size: yr(this._size), datatype: this._datatype });
  }, n.prototype.toJSON = function() {
    return { mathjs: "ImmutableDenseMatrix", data: this._data, size: this._size, datatype: this._datatype };
  }, n.fromJSON = function(i) {
    return new n(i);
  }, n.prototype.swapRows = function() {
    throw new Error("Cannot invoke swapRows on an Immutable Matrix instance");
  }, n.prototype.min = function() {
    if (this._min === null) {
      var i = null;
      this.forEach(function(u) {
        (i === null || e(u, i)) && (i = u);
      }), this._min = i !== null ? i : void 0;
    }
    return this._min;
  }, n.prototype.max = function() {
    if (this._max === null) {
      var i = null;
      this.forEach(function(u) {
        (i === null || e(i, u)) && (i = u);
      }), this._max = i !== null ? i : void 0;
    }
    return this._max;
  }, n;
}, { isClass: true }), Cl = "Index", _l = ["ImmutableDenseMatrix", "getMatrixDataType"], Bl = rr(Cl, _l, (r) => {
  var { ImmutableDenseMatrix: e, getMatrixDataType: t } = r;
  function n(u) {
    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
    this._dimensions = [], this._sourceSize = [], this._isScalar = true;
    for (var a = 0, o = arguments.length; a < o; a++) {
      var f = arguments[a], c = Or(f), s = Cr(f), h = typeof f, p = null;
      if ($i(f)) this._dimensions.push(f), this._isScalar = false;
      else if (c || s) {
        var v = void 0;
        t(f) === "boolean" ? (c && (v = i(wi(f).valueOf())), s && (v = i(wi(f._data).valueOf())), p = f.valueOf().length) : v = i(f.valueOf()), this._dimensions.push(v);
        var d = v.size();
        (d.length !== 1 || d[0] !== 1 || p !== null) && (this._isScalar = false);
      } else if (h === "number") this._dimensions.push(i([f]));
      else if (h === "bigint") this._dimensions.push(i([Number(f)]));
      else if (h === "string") this._dimensions.push(f);
      else throw new TypeError("Dimension must be an Array, Matrix, number, bigint, string, or Range");
      this._sourceSize.push(p);
    }
  }
  n.prototype.type = "Index", n.prototype.isIndex = true;
  function i(u) {
    for (var a = 0, o = u.length; a < o; a++) if (typeof u[a] != "number" || !br(u[a])) throw new TypeError("Index parameters must be positive integer numbers");
    return new e(u);
  }
  return n.prototype.clone = function() {
    var u = new n();
    return u._dimensions = yr(this._dimensions), u._isScalar = this._isScalar, u._sourceSize = this._sourceSize, u;
  }, n.create = function(u) {
    var a = new n();
    return n.apply(a, u), a;
  }, n.prototype.size = function() {
    for (var u = [], a = 0, o = this._dimensions.length; a < o; a++) {
      var f = this._dimensions[a];
      u[a] = typeof f == "string" ? 1 : f.size()[0];
    }
    return u;
  }, n.prototype.max = function() {
    for (var u = [], a = 0, o = this._dimensions.length; a < o; a++) {
      var f = this._dimensions[a];
      u[a] = typeof f == "string" ? f : f.max();
    }
    return u;
  }, n.prototype.min = function() {
    for (var u = [], a = 0, o = this._dimensions.length; a < o; a++) {
      var f = this._dimensions[a];
      u[a] = typeof f == "string" ? f : f.min();
    }
    return u;
  }, n.prototype.forEach = function(u) {
    for (var a = 0, o = this._dimensions.length; a < o; a++) u(this._dimensions[a], a, this);
  }, n.prototype.dimension = function(u) {
    return typeof u != "number" ? null : this._dimensions[u] || null;
  }, n.prototype.isObjectProperty = function() {
    return this._dimensions.length === 1 && typeof this._dimensions[0] == "string";
  }, n.prototype.getObjectProperty = function() {
    return this.isObjectProperty() ? this._dimensions[0] : null;
  }, n.prototype.isScalar = function() {
    return this._isScalar;
  }, n.prototype.toArray = function() {
    for (var u = [], a = 0, o = this._dimensions.length; a < o; a++) {
      var f = this._dimensions[a];
      u.push(typeof f == "string" ? f : f.toArray());
    }
    return u;
  }, n.prototype.valueOf = n.prototype.toArray, n.prototype.toString = function() {
    for (var u = [], a = 0, o = this._dimensions.length; a < o; a++) {
      var f = this._dimensions[a];
      typeof f == "string" ? u.push(JSON.stringify(f)) : u.push(f.toString());
    }
    return "[" + u.join(", ") + "]";
  }, n.prototype.toJSON = function() {
    return { mathjs: "Index", dimensions: this._dimensions };
  }, n.fromJSON = function(u) {
    return n.create(u.dimensions);
  }, n;
}, { isClass: true });
function wi(r) {
  var e = [];
  return r.forEach((t, n) => {
    t && e.push(n);
  }), e;
}
var Ml = "atan", Nl = ["typed"], Sl = rr(Ml, Nl, (r) => {
  var { typed: e } = r;
  return e("atan", { number: function(n) {
    return Math.atan(n);
  }, Complex: function(n) {
    return n.atan();
  }, BigNumber: function(n) {
    return n.atan();
  } });
}), Bu = rr("trigUnit", ["typed"], (r) => {
  var { typed: e } = r;
  return { Unit: e.referToSelf((t) => (n) => {
    if (!n.hasBase(n.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
    return e.find(t, n.valueType())(n.value);
  }) };
}), Ai = "cos", xl = ["typed"], Tl = rr(Ai, xl, (r) => {
  var { typed: e } = r, t = Bu({ typed: e });
  return e(Ai, { number: Math.cos, "Complex | BigNumber": (n) => n.cos() }, t);
}), Fi = "sin", Il = ["typed"], zl = rr(Fi, Il, (r) => {
  var { typed: e } = r, t = Bu({ typed: e });
  return e(Fi, { number: Math.sin, "Complex | BigNumber": (n) => n.sin() }, t);
}), Ei = "add", Ol = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"], $l = rr(Ei, Ol, (r) => {
  var { typed: e, matrix: t, addScalar: n, equalScalar: i, DenseMatrix: u, SparseMatrix: a, concat: o } = r, f = Fu({ typed: e }), c = kf({ typed: e, equalScalar: i }), s = Eu({ typed: e, DenseMatrix: u }), h = Ne({ typed: e, matrix: t, concat: o });
  return e(Ei, { "any, any": n, "any, any, ...any": e.referToSelf((p) => (v, d, l) => {
    for (var m = p(v, d), D = 0; D < l.length; D++) m = p(m, l[D]);
    return m;
  }) }, h({ elop: n, DS: f, SS: c, Ss: s }));
}), bi = "norm", Pl = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], ql = rr(bi, Pl, (r) => {
  var { typed: e, abs: t, add: n, pow: i, conj: u, sqrt: a, multiply: o, equalScalar: f, larger: c, smaller: s, matrix: h, ctranspose: p, eigs: v } = r;
  return e(bi, { number: Math.abs, Complex: function(F) {
    return F.abs();
  }, BigNumber: function(F) {
    return F.abs();
  }, boolean: function(F) {
    return Math.abs(F);
  }, Array: function(F) {
    return w(h(F), 2);
  }, Matrix: function(F) {
    return w(F, 2);
  }, "Array, number | BigNumber | string": function(F, y) {
    return w(h(F), y);
  }, "Matrix, number | BigNumber | string": function(F, y) {
    return w(F, y);
  } });
  function d(_) {
    var F = 0;
    return _.forEach(function(y) {
      var M = t(y);
      c(M, F) && (F = M);
    }, true), F;
  }
  function l(_) {
    var F;
    return _.forEach(function(y) {
      var M = t(y);
      (!F || s(M, F)) && (F = M);
    }, true), F || 0;
  }
  function m(_, F) {
    if (F === Number.POSITIVE_INFINITY || F === "inf") return d(_);
    if (F === Number.NEGATIVE_INFINITY || F === "-inf") return l(_);
    if (F === "fro") return w(_, 2);
    if (typeof F == "number" && !isNaN(F)) {
      if (!f(F, 0)) {
        var y = 0;
        return _.forEach(function(M) {
          y = n(i(t(M), F), y);
        }, true), i(y, 1 / F);
      }
      return Number.POSITIVE_INFINITY;
    }
    throw new Error("Unsupported parameter value");
  }
  function D(_) {
    var F = 0;
    return _.forEach(function(y, M) {
      F = n(F, o(y, u(y)));
    }), t(a(F));
  }
  function b(_) {
    var F = [], y = 0;
    return _.forEach(function(M, B) {
      var N = B[1], z = n(F[N] || 0, t(M));
      c(z, y) && (y = z), F[N] = z;
    }, true), y;
  }
  function g(_) {
    var F = _.size();
    if (F[0] !== F[1]) throw new RangeError("Invalid matrix dimensions");
    var y = p(_), M = o(y, _), B = v(M).values.toArray(), N = B[B.length - 1];
    return t(a(N));
  }
  function C(_) {
    var F = [], y = 0;
    return _.forEach(function(M, B) {
      var N = B[0], z = n(F[N] || 0, t(M));
      c(z, y) && (y = z), F[N] = z;
    }, true), y;
  }
  function A(_, F) {
    if (F === 1) return b(_);
    if (F === Number.POSITIVE_INFINITY || F === "inf") return C(_);
    if (F === "fro") return D(_);
    if (F === 2) return g(_);
    throw new Error("Unsupported parameter value " + F);
  }
  function w(_, F) {
    var y = _.size();
    if (y.length === 1) return m(_, F);
    if (y.length === 2) {
      if (y[0] && y[1]) return A(_, F);
      throw new RangeError("Invalid matrix dimensions");
    }
  }
}), Ci = "dot", Rl = ["typed", "addScalar", "multiplyScalar", "conj", "size"], Ul = rr(Ci, Rl, (r) => {
  var { typed: e, addScalar: t, multiplyScalar: n, conj: i, size: u } = r;
  return e(Ci, { "Array | DenseMatrix, Array | DenseMatrix": o, "SparseMatrix, SparseMatrix": f });
  function a(s, h) {
    var p = c(s), v = c(h), d, l;
    if (p.length === 1) d = p[0];
    else if (p.length === 2 && p[1] === 1) d = p[0];
    else throw new RangeError("Expected a column vector, instead got a matrix of size (" + p.join(", ") + ")");
    if (v.length === 1) l = v[0];
    else if (v.length === 2 && v[1] === 1) l = v[0];
    else throw new RangeError("Expected a column vector, instead got a matrix of size (" + v.join(", ") + ")");
    if (d !== l) throw new RangeError("Vectors must have equal length (" + d + " != " + l + ")");
    if (d === 0) throw new RangeError("Cannot calculate the dot product of empty vectors");
    return d;
  }
  function o(s, h) {
    var p = a(s, h), v = Cr(s) ? s._data : s, d = Cr(s) ? s._datatype || s.getDataType() : void 0, l = Cr(h) ? h._data : h, m = Cr(h) ? h._datatype || h.getDataType() : void 0, D = c(s).length === 2, b = c(h).length === 2, g = t, C = n;
    if (d && m && d === m && typeof d == "string" && d !== "mixed") {
      var A = d;
      g = e.find(t, [A, A]), C = e.find(n, [A, A]);
    }
    if (!D && !b) {
      for (var w = C(i(v[0]), l[0]), _ = 1; _ < p; _++) w = g(w, C(i(v[_]), l[_]));
      return w;
    }
    if (!D && b) {
      for (var F = C(i(v[0]), l[0][0]), y = 1; y < p; y++) F = g(F, C(i(v[y]), l[y][0]));
      return F;
    }
    if (D && !b) {
      for (var M = C(i(v[0][0]), l[0]), B = 1; B < p; B++) M = g(M, C(i(v[B][0]), l[B]));
      return M;
    }
    if (D && b) {
      for (var N = C(i(v[0][0]), l[0][0]), z = 1; z < p; z++) N = g(N, C(i(v[z][0]), l[z][0]));
      return N;
    }
  }
  function f(s, h) {
    a(s, h);
    for (var p = s._index, v = s._values, d = h._index, l = h._values, m = 0, D = t, b = n, g = 0, C = 0; g < p.length && C < d.length; ) {
      var A = p[g], w = d[C];
      if (A < w) {
        g++;
        continue;
      }
      if (A > w) {
        C++;
        continue;
      }
      A === w && (m = D(m, b(v[g], l[C])), g++, C++);
    }
    return m;
  }
  function c(s) {
    return Cr(s) ? s.size() : u(s);
  }
}), _i = "qr", Ll = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"], Zl = rr(_i, Ll, (r) => {
  var { typed: e, matrix: t, zeros: n, identity: i, isZero: u, equal: a, sign: o, sqrt: f, conj: c, unaryMinus: s, addScalar: h, divideScalar: p, multiplyScalar: v, subtractScalar: d, complex: l } = r;
  return Ue(e(_i, { DenseMatrix: function(C) {
    return D(C);
  }, SparseMatrix: function(C) {
    return b();
  }, Array: function(C) {
    var A = t(C), w = D(A);
    return { Q: w.Q.valueOf(), R: w.R.valueOf() };
  } }), { _denseQRimpl: m });
  function m(g) {
    var C = g._size[0], A = g._size[1], w = i([C], "dense"), _ = w._data, F = g.clone(), y = F._data, M, B, N, z = n([C], "");
    for (N = 0; N < Math.min(A, C); ++N) {
      var x = y[N][N], O = s(a(x, 0) ? 1 : o(x)), T = c(O), Y = 0;
      for (M = N; M < C; M++) Y = h(Y, v(y[M][N], c(y[M][N])));
      var q = v(O, f(Y));
      if (!u(q)) {
        var L = d(x, q);
        for (z[N] = 1, M = N + 1; M < C; M++) z[M] = p(y[M][N], L);
        var tr = s(c(p(L, q))), or = void 0;
        for (B = N; B < A; B++) {
          for (or = 0, M = N; M < C; M++) or = h(or, v(c(z[M]), y[M][B]));
          for (or = v(or, tr), M = N; M < C; M++) y[M][B] = v(d(y[M][B], v(z[M], or)), T);
        }
        for (M = 0; M < C; M++) {
          for (or = 0, B = N; B < C; B++) or = h(or, v(_[M][B], z[B]));
          for (or = v(or, tr), B = N; B < C; ++B) _[M][B] = p(d(_[M][B], v(or, c(z[B]))), T);
        }
      }
    }
    return { Q: w, R: F, toString: function() {
      return "Q: " + this.Q.toString() + `
R: ` + this.R.toString();
    } };
  }
  function D(g) {
    var C = m(g), A = C.R._data;
    if (g._data.length > 0) for (var w = A[0][0].type === "Complex" ? l(0) : 0, _ = 0; _ < A.length; ++_) for (var F = 0; F < _ && F < (A[0] || []).length; ++F) A[_][F] = w;
    return C;
  }
  function b(g) {
    throw new Error("qr not implemented for sparse matrices yet");
  }
}), Bi = "det", Vl = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"], Wl = rr(Bi, Vl, (r) => {
  var { typed: e, matrix: t, subtractScalar: n, multiply: i, divideScalar: u, isZero: a, unaryMinus: o } = r;
  return e(Bi, { any: function(s) {
    return yr(s);
  }, "Array | Matrix": function(s) {
    var h;
    switch (Cr(s) ? h = s.size() : Array.isArray(s) ? (s = t(s), h = s.size()) : h = [], h.length) {
      case 0:
        return yr(s);
      case 1:
        if (h[0] === 1) return yr(s.valueOf()[0]);
        if (h[0] === 0) return 1;
        throw new RangeError("Matrix must be square (size: " + $r(h) + ")");
      case 2: {
        var p = h[0], v = h[1];
        if (p === v) return f(s.clone().valueOf(), p);
        if (v === 0) return 1;
        throw new RangeError("Matrix must be square (size: " + $r(h) + ")");
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + $r(h) + ")");
    }
  } });
  function f(c, s, h) {
    if (s === 1) return yr(c[0][0]);
    if (s === 2) return n(i(c[0][0], c[1][1]), i(c[1][0], c[0][1]));
    for (var p = false, v = new Array(s).fill(0).map((_, F) => F), d = 0; d < s; d++) {
      var l = v[d];
      if (a(c[l][d])) {
        var m = void 0;
        for (m = d + 1; m < s; m++) if (!a(c[v[m]][d])) {
          l = v[m], v[m] = v[d], v[d] = l, p = !p;
          break;
        }
        if (m === s) return c[l][d];
      }
      for (var D = c[l][d], b = d === 0 ? 1 : c[v[d - 1]][d - 1], g = d + 1; g < s; g++) for (var C = v[g], A = d + 1; A < s; A++) c[C][A] = u(n(i(c[C][A], D), i(c[C][d], c[l][A])), b);
    }
    var w = c[v[s - 1]][s - 1];
    return p ? o(w) : w;
  }
}), Mi = "inv", Jl = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], Yl = rr(Mi, Jl, (r) => {
  var { typed: e, matrix: t, divideScalar: n, addScalar: i, multiply: u, unaryMinus: a, det: o, identity: f, abs: c } = r;
  return e(Mi, { "Array | Matrix": function(p) {
    var v = Cr(p) ? p.size() : wr(p);
    switch (v.length) {
      case 1:
        if (v[0] === 1) return Cr(p) ? t([n(1, p.valueOf()[0])]) : [n(1, p[0])];
        throw new RangeError("Matrix must be square (size: " + $r(v) + ")");
      case 2: {
        var d = v[0], l = v[1];
        if (d === l) return Cr(p) ? t(s(p.valueOf(), d, l), p.storage()) : s(p, d, l);
        throw new RangeError("Matrix must be square (size: " + $r(v) + ")");
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + $r(v) + ")");
    }
  }, any: function(p) {
    return n(1, p);
  } });
  function s(h, p, v) {
    var d, l, m, D, b;
    if (p === 1) {
      if (D = h[0][0], D === 0) throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(1, D)]];
    } else if (p === 2) {
      var g = o(h);
      if (g === 0) throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(h[1][1], g), n(a(h[0][1]), g)], [n(a(h[1][0]), g), n(h[0][0], g)]];
    } else {
      var C = h.concat();
      for (d = 0; d < p; d++) C[d] = C[d].concat();
      for (var A = f(p).valueOf(), w = 0; w < v; w++) {
        var _ = c(C[w][w]), F = w;
        for (d = w + 1; d < p; ) c(C[d][w]) > _ && (_ = c(C[d][w]), F = d), d++;
        if (_ === 0) throw Error("Cannot calculate inverse, determinant is zero");
        d = F, d !== w && (b = C[w], C[w] = C[d], C[d] = b, b = A[w], A[w] = A[d], A[d] = b);
        var y = C[w], M = A[w];
        for (d = 0; d < p; d++) {
          var B = C[d], N = A[d];
          if (d !== w) {
            if (B[w] !== 0) {
              for (m = n(a(B[w]), y[w]), l = w; l < v; l++) B[l] = i(B[l], u(m, y[l]));
              for (l = 0; l < v; l++) N[l] = i(N[l], u(m, M[l]));
            }
          } else {
            for (m = y[w], l = w; l < v; l++) B[l] = n(B[l], m);
            for (l = 0; l < v; l++) N[l] = n(N[l], m);
          }
        }
      }
      return A;
    }
  }
});
function Ql(r) {
  var { addScalar: e, subtract: t, flatten: n, multiply: i, multiplyScalar: u, divideScalar: a, sqrt: o, abs: f, bignumber: c, diag: s, size: h, reshape: p, inv: v, qr: d, usolve: l, usolveAll: m, equal: D, complex: b, larger: g, smaller: C, matrixFromColumns: A, dot: w } = r;
  function _(R, Z, er, ar) {
    var j = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : true, J = F(R, Z, er, ar, j);
    y(R, Z, er, ar, j, J);
    var { values: H, C: Q } = M(R, Z, er, ar, j);
    if (j) {
      var X = B(R, Z, Q, J, H, er, ar);
      return { values: H, eigenvectors: X };
    }
    return { values: H };
  }
  function F(R, Z, er, ar, j) {
    var J = ar === "BigNumber", H = ar === "Complex", Q = J ? c(0) : 0, X = J ? c(1) : H ? b(1) : 1, sr = J ? c(1) : 1, k = J ? c(10) : 2, hr = u(k, k), dr;
    j && (dr = Array(Z).fill(X));
    for (var mr = false; !mr; ) {
      mr = true;
      for (var gr = 0; gr < Z; gr++) {
        for (var Ar = Q, Er = Q, zr = 0; zr < Z; zr++) gr !== zr && (Ar = e(Ar, f(R[zr][gr])), Er = e(Er, f(R[gr][zr])));
        if (!D(Ar, 0) && !D(Er, 0)) {
          for (var _r = sr, Nr = Ar, Jr = a(Er, k), E = u(Er, k); C(Nr, Jr); ) Nr = u(Nr, hr), _r = u(_r, k);
          for (; g(Nr, E); ) Nr = a(Nr, hr), _r = a(_r, k);
          var S = C(a(e(Nr, Er), _r), u(e(Ar, Er), 0.95));
          if (S) {
            mr = false;
            for (var I = a(1, _r), $ = 0; $ < Z; $++) gr !== $ && (R[gr][$] = u(R[gr][$], I), R[$][gr] = u(R[$][gr], _r));
            j && (dr[gr] = u(dr[gr], I));
          }
        }
      }
    }
    return j ? s(dr) : null;
  }
  function y(R, Z, er, ar, j, J) {
    var H = ar === "BigNumber", Q = ar === "Complex", X = H ? c(0) : Q ? b(0) : 0;
    H && (er = c(er));
    for (var sr = 0; sr < Z - 2; sr++) {
      for (var k = 0, hr = X, dr = sr + 1; dr < Z; dr++) {
        var mr = R[dr][sr];
        C(f(hr), f(mr)) && (hr = mr, k = dr);
      }
      if (!C(f(hr), er)) {
        if (k !== sr + 1) {
          var gr = R[k];
          R[k] = R[sr + 1], R[sr + 1] = gr;
          for (var Ar = 0; Ar < Z; Ar++) {
            var Er = R[Ar][k];
            R[Ar][k] = R[Ar][sr + 1], R[Ar][sr + 1] = Er;
          }
          if (j) {
            var zr = J[k];
            J[k] = J[sr + 1], J[sr + 1] = zr;
          }
        }
        for (var _r = sr + 2; _r < Z; _r++) {
          var Nr = a(R[_r][sr], hr);
          if (Nr !== 0) {
            for (var Jr = 0; Jr < Z; Jr++) R[_r][Jr] = t(R[_r][Jr], u(Nr, R[sr + 1][Jr]));
            for (var E = 0; E < Z; E++) R[E][sr + 1] = e(R[E][sr + 1], u(Nr, R[E][_r]));
            if (j) for (var S = 0; S < Z; S++) J[_r][S] = t(J[_r][S], u(Nr, J[sr + 1][S]));
          }
        }
      }
    }
    return J;
  }
  function M(R, Z, er, ar, j) {
    var J = ar === "BigNumber", H = ar === "Complex", Q = J ? c(1) : H ? b(1) : 1;
    J && (er = c(er));
    for (var X = yr(R), sr = [], k = Z, hr = [], dr = j ? s(Array(Z).fill(Q)) : void 0, mr = j ? s(Array(k).fill(Q)) : void 0, gr = 0; gr <= 100; ) {
      gr += 1;
      for (var Ar = X[k - 1][k - 1], Er = 0; Er < k; Er++) X[Er][Er] = t(X[Er][Er], Ar);
      var { Q: zr, R: _r } = d(X);
      X = i(_r, zr);
      for (var Nr = 0; Nr < k; Nr++) X[Nr][Nr] = e(X[Nr][Nr], Ar);
      if (j && (mr = i(mr, zr)), k === 1 || C(f(X[k - 1][k - 2]), er)) {
        gr = 0, sr.push(X[k - 1][k - 1]), j && (hr.unshift([[1]]), x(mr, Z), dr = i(dr, mr), k > 1 && (mr = s(Array(k - 1).fill(Q)))), k -= 1, X.pop();
        for (var Jr = 0; Jr < k; Jr++) X[Jr].pop();
      } else if (k === 2 || C(f(X[k - 2][k - 3]), er)) {
        gr = 0;
        var E = N(X[k - 2][k - 2], X[k - 2][k - 1], X[k - 1][k - 2], X[k - 1][k - 1]);
        sr.push(...E), j && (hr.unshift(z(X[k - 2][k - 2], X[k - 2][k - 1], X[k - 1][k - 2], X[k - 1][k - 1], E[0], E[1], er, ar)), x(mr, Z), dr = i(dr, mr), k > 2 && (mr = s(Array(k - 2).fill(Q)))), k -= 2, X.pop(), X.pop();
        for (var S = 0; S < k; S++) X[S].pop(), X[S].pop();
      }
      if (k === 0) break;
    }
    if (sr.sort((W, U) => +t(f(W), f(U))), gr > 100) {
      var I = Error("The eigenvalues failed to converge. Only found these eigenvalues: " + sr.join(", "));
      throw I.values = sr, I.vectors = [], I;
    }
    var $ = j ? i(dr, O(hr, Z)) : void 0;
    return { values: sr, C: $ };
  }
  function B(R, Z, er, ar, j, J, H) {
    var Q = v(er), X = i(Q, R, er), sr = H === "BigNumber", k = H === "Complex", hr = sr ? c(0) : k ? b(0) : 0, dr = sr ? c(1) : k ? b(1) : 1, mr = [], gr = [];
    for (var Ar of j) {
      var Er = T(mr, Ar, D);
      Er === -1 ? (mr.push(Ar), gr.push(1)) : gr[Er] += 1;
    }
    for (var zr = [], _r = mr.length, Nr = Array(Z).fill(hr), Jr = s(Array(Z).fill(dr)), E = function() {
      var $ = mr[S], W = t(X, i($, Jr)), U = m(W, Nr);
      for (U.shift(); U.length < gr[S]; ) {
        var ur = Y(W, Z, U, J, H);
        if (ur === null) break;
        U.push(ur);
      }
      var K = i(v(ar), er);
      U = U.map((nr) => i(K, nr)), zr.push(...U.map((nr) => ({ value: $, vector: n(nr) })));
    }, S = 0; S < _r; S++) E();
    return zr;
  }
  function N(R, Z, er, ar) {
    var j = e(R, ar), J = t(u(R, ar), u(Z, er)), H = u(j, 0.5), Q = u(o(t(u(j, j), u(4, J))), 0.5);
    return [e(H, Q), t(H, Q)];
  }
  function z(R, Z, er, ar, j, J, H, Q) {
    var X = Q === "BigNumber", sr = Q === "Complex", k = X ? c(0) : sr ? b(0) : 0, hr = X ? c(1) : sr ? b(1) : 1;
    if (C(f(er), H)) return [[hr, k], [k, hr]];
    if (g(f(t(j, J)), H)) return [[t(j, ar), t(J, ar)], [er, er]];
    var dr = t(R, j), mr = t(ar, j);
    return C(f(Z), H) && C(f(mr), H) ? [[dr, hr], [er, k]] : [[Z, k], [mr, hr]];
  }
  function x(R, Z) {
    for (var er = 0; er < R.length; er++) R[er].push(...Array(Z - R[er].length).fill(0));
    for (var ar = R.length; ar < Z; ar++) R.push(Array(Z).fill(0)), R[ar][ar] = 1;
    return R;
  }
  function O(R, Z) {
    for (var er = [], ar = 0; ar < Z; ar++) er[ar] = Array(Z).fill(0);
    var j = 0;
    for (var J of R) {
      for (var H = J.length, Q = 0; Q < H; Q++) for (var X = 0; X < H; X++) er[j + Q][j + X] = J[Q][X];
      j += H;
    }
    return er;
  }
  function T(R, Z, er) {
    for (var ar = 0; ar < R.length; ar++) if (er(R[ar], Z)) return ar;
    return -1;
  }
  function Y(R, Z, er, ar, j) {
    for (var J = j === "BigNumber" ? c(1e3) : 1e3, H, Q = 0; Q < 5; ++Q) {
      H = q(Z, er, j);
      try {
        H = l(R, H);
      } catch {
        continue;
      }
      if (g(tr(H), J)) break;
    }
    if (Q >= 5) return null;
    for (Q = 0; ; ) {
      var X = l(R, H);
      if (C(tr(L(H, [X])), ar)) break;
      if (++Q >= 10) return null;
      H = or(X);
    }
    return H;
  }
  function q(R, Z, er) {
    var ar = er === "BigNumber", j = er === "Complex", J = Array(R).fill(0).map((H) => 2 * Math.random() - 1);
    return ar && (J = J.map((H) => c(H))), j && (J = J.map((H) => b(H))), J = L(J, Z), or(J, er);
  }
  function L(R, Z) {
    var er = h(R);
    for (var ar of Z) ar = p(ar, er), R = t(R, i(a(w(ar, R), w(ar, ar)), ar));
    return R;
  }
  function tr(R) {
    return f(o(w(R, R)));
  }
  function or(R, Z) {
    var er = Z === "BigNumber", ar = Z === "Complex", j = er ? c(1) : ar ? b(1) : 1;
    return i(a(j, tr(R)), R);
  }
  return _;
}
function Xl(r) {
  var { config: e, addScalar: t, subtract: n, abs: i, atan: u, cos: a, sin: o, multiplyScalar: f, inv: c, bignumber: s, multiply: h, add: p } = r;
  function v(y, M) {
    var B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.relTol, N = arguments.length > 3 ? arguments[3] : void 0, z = arguments.length > 4 ? arguments[4] : void 0;
    if (N === "number") return d(y, B, z);
    if (N === "BigNumber") return l(y, B, z);
    throw TypeError("Unsupported data type: " + N);
  }
  function d(y, M, B) {
    var N = y.length, z = Math.abs(M / N), x, O;
    if (B) {
      O = new Array(N);
      for (var T = 0; T < N; T++) O[T] = Array(N).fill(0), O[T][T] = 1;
    }
    for (var Y = w(y); Math.abs(Y[1]) >= Math.abs(z); ) {
      var q = Y[0][0], L = Y[0][1];
      x = m(y[q][q], y[L][L], y[q][L]), y = A(y, x, q, L), B && (O = b(O, x, q, L)), Y = w(y);
    }
    for (var tr = Array(N).fill(0), or = 0; or < N; or++) tr[or] = y[or][or];
    return F(yr(tr), O, B);
  }
  function l(y, M, B) {
    var N = y.length, z = i(M / N), x, O;
    if (B) {
      O = new Array(N);
      for (var T = 0; T < N; T++) O[T] = Array(N).fill(0), O[T][T] = 1;
    }
    for (var Y = _(y); i(Y[1]) >= i(z); ) {
      var q = Y[0][0], L = Y[0][1];
      x = D(y[q][q], y[L][L], y[q][L]), y = C(y, x, q, L), B && (O = g(O, x, q, L)), Y = _(y);
    }
    for (var tr = Array(N).fill(0), or = 0; or < N; or++) tr[or] = y[or][or];
    return F(yr(tr), O, B);
  }
  function m(y, M, B) {
    var N = M - y;
    return Math.abs(N) <= e.relTol ? Math.PI / 4 : 0.5 * Math.atan(2 * B / (M - y));
  }
  function D(y, M, B) {
    var N = n(M, y);
    return i(N) <= e.relTol ? s(-1).acos().div(4) : f(0.5, u(h(2, B, c(N))));
  }
  function b(y, M, B, N) {
    for (var z = y.length, x = Math.cos(M), O = Math.sin(M), T = Array(z).fill(0), Y = Array(z).fill(0), q = 0; q < z; q++) T[q] = x * y[q][B] - O * y[q][N], Y[q] = O * y[q][B] + x * y[q][N];
    for (var L = 0; L < z; L++) y[L][B] = T[L], y[L][N] = Y[L];
    return y;
  }
  function g(y, M, B, N) {
    for (var z = y.length, x = a(M), O = o(M), T = Array(z).fill(s(0)), Y = Array(z).fill(s(0)), q = 0; q < z; q++) T[q] = n(f(x, y[q][B]), f(O, y[q][N])), Y[q] = t(f(O, y[q][B]), f(x, y[q][N]));
    for (var L = 0; L < z; L++) y[L][B] = T[L], y[L][N] = Y[L];
    return y;
  }
  function C(y, M, B, N) {
    for (var z = y.length, x = s(a(M)), O = s(o(M)), T = f(x, x), Y = f(O, O), q = Array(z).fill(s(0)), L = Array(z).fill(s(0)), tr = h(s(2), x, O, y[B][N]), or = t(n(f(T, y[B][B]), tr), f(Y, y[N][N])), R = p(f(Y, y[B][B]), tr, f(T, y[N][N])), Z = 0; Z < z; Z++) q[Z] = n(f(x, y[B][Z]), f(O, y[N][Z])), L[Z] = t(f(O, y[B][Z]), f(x, y[N][Z]));
    y[B][B] = or, y[N][N] = R, y[B][N] = s(0), y[N][B] = s(0);
    for (var er = 0; er < z; er++) er !== B && er !== N && (y[B][er] = q[er], y[er][B] = q[er], y[N][er] = L[er], y[er][N] = L[er]);
    return y;
  }
  function A(y, M, B, N) {
    for (var z = y.length, x = Math.cos(M), O = Math.sin(M), T = x * x, Y = O * O, q = Array(z).fill(0), L = Array(z).fill(0), tr = T * y[B][B] - 2 * x * O * y[B][N] + Y * y[N][N], or = Y * y[B][B] + 2 * x * O * y[B][N] + T * y[N][N], R = 0; R < z; R++) q[R] = x * y[B][R] - O * y[N][R], L[R] = O * y[B][R] + x * y[N][R];
    y[B][B] = tr, y[N][N] = or, y[B][N] = 0, y[N][B] = 0;
    for (var Z = 0; Z < z; Z++) Z !== B && Z !== N && (y[B][Z] = q[Z], y[Z][B] = q[Z], y[N][Z] = L[Z], y[Z][N] = L[Z]);
    return y;
  }
  function w(y) {
    for (var M = y.length, B = 0, N = [0, 1], z = 0; z < M; z++) for (var x = z + 1; x < M; x++) Math.abs(B) < Math.abs(y[z][x]) && (B = Math.abs(y[z][x]), N = [z, x]);
    return [N, B];
  }
  function _(y) {
    for (var M = y.length, B = 0, N = [0, 1], z = 0; z < M; z++) for (var x = z + 1; x < M; x++) i(B) < i(y[z][x]) && (B = i(y[z][x]), N = [z, x]);
    return [N, B];
  }
  function F(y, M, B) {
    var N = y.length, z = Array(N), x;
    if (B) {
      x = Array(N);
      for (var O = 0; O < N; O++) x[O] = Array(N);
    }
    for (var T = 0; T < N; T++) {
      for (var Y = 0, q = y[0], L = 0; L < y.length; L++) i(y[L]) < i(q) && (Y = L, q = y[Y]);
      if (z[T] = y.splice(Y, 1)[0], B) for (var tr = 0; tr < N; tr++) x[T][tr] = M[tr][Y], M[tr].splice(Y, 1);
    }
    if (!B) return { values: z };
    var or = x.map((R, Z) => ({ value: z[Z], vector: R }));
    return { values: z, eigenvectors: or };
  }
  return v;
}
var Gl = "eigs", Kl = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], Hl = rr(Gl, Kl, (r) => {
  var { config: e, typed: t, matrix: n, addScalar: i, subtract: u, equal: a, abs: o, atan: f, cos: c, sin: s, multiplyScalar: h, divideScalar: p, inv: v, bignumber: d, multiply: l, add: m, larger: D, column: b, flatten: g, number: C, complex: A, sqrt: w, diag: _, size: F, reshape: y, qr: M, usolve: B, usolveAll: N, im: z, re: x, smaller: O, matrixFromColumns: T, dot: Y } = r, q = Xl({ config: e, addScalar: i, subtract: u, abs: o, atan: f, cos: c, sin: s, multiplyScalar: h, inv: v, bignumber: d, multiply: l, add: m }), L = Ql({ addScalar: i, subtract: u, multiply: l, multiplyScalar: h, flatten: g, divideScalar: p, sqrt: w, abs: o, bignumber: d, diag: _, size: F, reshape: y, qr: M, inv: v, usolve: B, usolveAll: N, equal: a, complex: A, larger: D, smaller: O, matrixFromColumns: T, dot: Y });
  return t("eigs", { Array: function(J) {
    return tr(n(J));
  }, "Array, number|BigNumber": function(J, H) {
    return tr(n(J), { precision: H });
  }, "Array, Object"(j, J) {
    return tr(n(j), J);
  }, Matrix: function(J) {
    return tr(J, { matricize: true });
  }, "Matrix, number|BigNumber": function(J, H) {
    return tr(J, { precision: H, matricize: true });
  }, "Matrix, Object": function(J, H) {
    var Q = { matricize: true };
    return Ue(Q, H), tr(J, Q);
  } });
  function tr(j) {
    var J, H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, Q = "eigenvectors" in H ? H.eigenvectors : true, X = (J = H.precision) !== null && J !== void 0 ? J : e.relTol, sr = or(j, X, Q);
    return H.matricize && (sr.values = n(sr.values), Q && (sr.eigenvectors = sr.eigenvectors.map((k) => {
      var { value: hr, vector: dr } = k;
      return { value: hr, vector: n(dr) };
    }))), Q && Object.defineProperty(sr, "vectors", { enumerable: false, get: () => {
      throw new Error("eigs(M).vectors replaced with eigs(M).eigenvectors");
    } }), sr;
  }
  function or(j, J, H) {
    var Q = j.toArray(), X = j.size();
    if (X.length !== 2 || X[0] !== X[1]) throw new RangeError("Matrix must be square (size: ".concat($r(X), ")"));
    var sr = X[0];
    if (Z(Q, sr, J) && (er(Q, sr), R(Q, sr, J))) {
      var k = ar(j, Q, sr);
      return q(Q, sr, J, k, H);
    }
    var hr = ar(j, Q, sr);
    return L(Q, sr, J, hr, H);
  }
  function R(j, J, H) {
    for (var Q = 0; Q < J; Q++) for (var X = Q; X < J; X++) if (D(d(o(u(j[Q][X], j[X][Q]))), H)) return false;
    return true;
  }
  function Z(j, J, H) {
    for (var Q = 0; Q < J; Q++) for (var X = 0; X < J; X++) if (D(d(o(z(j[Q][X]))), H)) return false;
    return true;
  }
  function er(j, J) {
    for (var H = 0; H < J; H++) for (var Q = 0; Q < J; Q++) j[H][Q] = x(j[H][Q]);
  }
  function ar(j, J, H) {
    var Q = j.datatype();
    if (Q === "number" || Q === "BigNumber" || Q === "Complex") return Q;
    for (var X = false, sr = false, k = false, hr = 0; hr < H; hr++) for (var dr = 0; dr < H; dr++) {
      var mr = J[hr][dr];
      if (xr(mr) || un(mr)) X = true;
      else if (Rr(mr)) sr = true;
      else if (nn(mr)) k = true;
      else throw TypeError("Unsupported type in Matrix: " + Gr(mr));
    }
    if (sr && k && console.warn("Complex BigNumbers not supported, this operation will lose precission."), k) {
      for (var gr = 0; gr < H; gr++) for (var Ar = 0; Ar < H; Ar++) J[gr][Ar] = A(J[gr][Ar]);
      return "Complex";
    }
    if (sr) {
      for (var Er = 0; Er < H; Er++) for (var zr = 0; zr < H; zr++) J[Er][zr] = d(J[Er][zr]);
      return "BigNumber";
    }
    if (X) {
      for (var _r = 0; _r < H; _r++) for (var Nr = 0; Nr < H; Nr++) J[_r][Nr] = C(J[_r][Nr]);
      return "number";
    } else throw TypeError("Matrix contains unsupported types only.");
  }
}), kl = "divide", jl = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], r0 = rr(kl, jl, (r) => {
  var { typed: e, matrix: t, multiply: n, equalScalar: i, divideScalar: u, inv: a } = r, o = Au({ typed: e, equalScalar: i }), f = hn({ typed: e });
  return e("divide", qi({ "Array | Matrix, Array | Matrix": function(s, h) {
    return n(s, a(h));
  }, "DenseMatrix, any": function(s, h) {
    return f(s, h, u, false);
  }, "SparseMatrix, any": function(s, h) {
    return o(s, h, u, false);
  }, "Array, any": function(s, h) {
    return f(t(s), h, u, false).valueOf();
  }, "any, Array | Matrix": function(s, h) {
    return n(s, a(h));
  } }, u.signatures));
}), Ni = "mean", e0 = ["typed", "add", "divide"], t0 = rr(Ni, e0, (r) => {
  var { typed: e, add: t, divide: n } = r;
  return e(Ni, { "Array | Matrix": u, "Array | Matrix, number | BigNumber": i, "...": function(o) {
    if (xs(o)) throw new TypeError("Scalar values expected in function mean");
    return u(o);
  } });
  function i(a, o) {
    try {
      var f = Is(a, o, t), c = Array.isArray(a) ? wr(a) : a.size();
      return n(f, c[o]);
    } catch (s) {
      throw di(s, "mean");
    }
  }
  function u(a) {
    var o, f = 0;
    if (Ts(a, function(c) {
      try {
        o = o === void 0 ? c : t(o, c), f++;
      } catch (s) {
        throw di(s, "mean", c);
      }
    }), f === 0) throw new Error("Cannot calculate the mean of an empty array");
    return n(o, f);
  }
}), tt = ko({ config: Kr }), xt = ns({}), vn = cs({}), pn = vs({}), te = Ns({ Matrix: pn }), fr = ro({ BigNumber: tt, Complex: xt, DenseMatrix: te, Fraction: vn }), dn = _f({ typed: fr }), Qe = Mf({ typed: fr }), n0 = Sl({ typed: fr }), mn = df({ Complex: xt, typed: fr }), Tt = mc({ typed: fr }), i0 = Tl({ typed: fr }), pe = rf({ config: Kr, typed: fr }), Mu = Sc({ typed: fr }), u0 = Tc({ typed: fr }), a0 = gc({ typed: fr }), Nu = Os({ typed: fr }), o0 = Gs({ config: Kr, typed: fr }), Su = Hs({ equalScalar: pe, typed: fr }), Se = nc({ typed: fr }), Dn = ff({ typed: fr }), s0 = wc({ typed: fr }), f0 = oc({ BigNumber: tt, Fraction: vn, complex: mn, typed: fr }), c0 = zl({ typed: fr }), ge = nf({ Matrix: pn, equalScalar: pe, typed: fr }), nt = Sf({ typed: fr }), it = hf({ BigNumber: tt, typed: fr }), Mr = wf({ DenseMatrix: te, Matrix: pn, SparseMatrix: ge, typed: fr }), l0 = Lc({ isInteger: Nu, matrix: Mr, typed: fr }), gn = cc({ Complex: xt, config: Kr, typed: fr }), h0 = Jc({ matrix: Mr, typed: fr }), v0 = Gc({ BigNumber: tt, config: Kr, matrix: Mr, typed: fr }), xe = Fc({ isInteger: Nu, matrix: Mr, typed: fr }), p0 = Qc({ conj: Tt, transpose: h0, typed: fr }), d0 = Mc({ DenseMatrix: te, SparseMatrix: ge, matrix: Mr, typed: fr }), xu = sl({ DenseMatrix: te, SparseMatrix: ge, concat: xe, equalScalar: pe, matrix: Mr, typed: fr }), Tu = gf({ Fraction: vn, typed: fr }), yn = zc({ BigNumber: tt, DenseMatrix: te, SparseMatrix: ge, config: Kr, matrix: Mr, typed: fr }), ph = $c({ matrix: Mr, multiplyScalar: Se, typed: fr }), m0 = wl({ DenseMatrix: te, SparseMatrix: ge, concat: xe, config: Kr, matrix: Mr, typed: fr }), D0 = kc({ bignumber: it, fraction: Tu, number: Dn }), wn = Vc({ matrix: Mr, config: Kr, typed: fr }), It = ll({ DenseMatrix: te, SparseMatrix: ge, bignumber: it, concat: xe, config: Kr, matrix: Mr, typed: fr }), zt = bf({ typed: fr }), Ot = $l({ DenseMatrix: te, SparseMatrix: ge, addScalar: Qe, concat: xe, equalScalar: pe, matrix: Mr, typed: fr }), Te = rl({ numeric: D0, typed: fr }), g0 = bl({ DenseMatrix: te, smaller: It }), y0 = Bl({ ImmutableDenseMatrix: g0, getMatrixDataType: u0 }), An = Dl({ DenseMatrix: te, SparseMatrix: ge, bignumber: it, concat: xe, config: Kr, matrix: Mr, typed: fr }), w0 = Ff({ flatten: Mu, matrix: Mr, size: wn, typed: fr }), A0 = Zl({ addScalar: Qe, complex: mn, conj: Tt, divideScalar: Te, equal: xu, identity: yn, isZero: Su, matrix: Mr, multiplyScalar: Se, sign: f0, sqrt: gn, subtractScalar: nt, typed: fr, unaryMinus: zt, zeros: v0 }), F0 = pl({ DenseMatrix: te, SparseMatrix: ge, concat: xe, config: Kr, matrix: Mr, typed: fr }), Iu = hc({ DenseMatrix: te, concat: xe, equalScalar: pe, matrix: Mr, subtractScalar: nt, typed: fr, unaryMinus: zt }), E0 = il({ DenseMatrix: te, divideScalar: Te, equalScalar: pe, matrix: Mr, multiplyScalar: Se, subtractScalar: nt, typed: fr }), zu = Ul({ addScalar: Qe, conj: Tt, multiplyScalar: Se, size: wn, typed: fr }), Ie = uc({ addScalar: Qe, dot: zu, equalScalar: pe, matrix: Mr, multiplyScalar: Se, typed: fr }), b0 = Rc({ bignumber: it, matrix: Mr, add: Ot, config: Kr, isPositive: o0, larger: An, largerEq: m0, smaller: It, smallerEq: F0, typed: fr }), C0 = al({ DenseMatrix: te, divideScalar: Te, equalScalar: pe, matrix: Mr, multiplyScalar: Se, subtractScalar: nt, typed: fr }), _0 = bc({ Index: y0, matrix: Mr, range: b0, typed: fr }), dh = _c({ matrix: Mr, multiply: Ie, subtract: Iu, typed: fr }), B0 = Wl({ divideScalar: Te, isZero: Su, matrix: Mr, multiply: Ie, subtractScalar: nt, typed: fr, unaryMinus: zt }), Fn = Yl({ abs: dn, addScalar: Qe, det: B0, divideScalar: Te, identity: yn, matrix: Mr, multiply: Ie, typed: fr, unaryMinus: zt }), M0 = tl({ Complex: xt, config: Kr, fraction: Tu, identity: yn, inv: Fn, matrix: Mr, multiply: Ie, number: Dn, typed: fr }), N0 = r0({ divideScalar: Te, equalScalar: pe, inv: Fn, matrix: Mr, multiply: Ie, typed: fr }), S0 = Hl({ abs: dn, add: Ot, addScalar: Qe, atan: n0, bignumber: it, column: _0, complex: mn, config: Kr, cos: i0, diag: d0, divideScalar: Te, dot: zu, equal: xu, flatten: Mu, im: a0, inv: Fn, larger: An, matrix: Mr, matrixFromColumns: w0, multiply: Ie, multiplyScalar: Se, number: Dn, qr: A0, re: s0, reshape: l0, sin: c0, size: wn, smaller: It, sqrt: gn, subtract: Iu, typed: fr, usolve: E0, usolveAll: C0 }), mh = t0({ add: Ot, divide: N0, typed: fr }), Dh = ql({ abs: dn, add: Ot, conj: Tt, ctranspose: p0, eigs: S0, equalScalar: pe, larger: An, matrix: Mr, multiply: Ie, pow: M0, smaller: It, sqrt: gn, typed: fr });
export {
  Ls as $,
  We as A,
  De as B,
  Qs as C,
  Gr as D,
  $s as E,
  V0 as F,
  wr as G,
  Cr as H,
  Ce as I,
  Ps as J,
  nn as K,
  un as L,
  Au as M,
  Je as N,
  hn as O,
  Ze as P,
  qs as Q,
  Rs as R,
  Us as S,
  Fr as T,
  Ye as U,
  Lf as V,
  Ne as W,
  Fu as X,
  kf as Y,
  Eu as Z,
  ch as _,
  Ot as a,
  oh as a$,
  Zs as a0,
  Vs as a1,
  hh as a2,
  Ws as a3,
  Js as a4,
  et as a5,
  ah as a6,
  Dt as a7,
  uh as a8,
  As as a9,
  zi as aA,
  rh as aB,
  xs as aC,
  Is as aD,
  Me as aE,
  Ue as aF,
  k0 as aG,
  X0 as aH,
  Bu as aI,
  K0 as aJ,
  sh as aK,
  fh as aL,
  Or as aM,
  Ia as aN,
  Fe as aO,
  I0 as aP,
  Ta as aQ,
  Ca as aR,
  _a as aS,
  Ut as aT,
  xa as aU,
  za as aV,
  Oa as aW,
  qa as aX,
  nh as aY,
  P0 as aZ,
  ih as a_,
  lu as aa,
  jt as ab,
  vu as ac,
  qn as ad,
  mt as ae,
  $r as af,
  qr as ag,
  Pn as ah,
  th as ai,
  eh as aj,
  Si as ak,
  an as al,
  la as am,
  Ii as an,
  xr as ao,
  kt as ap,
  Ts as aq,
  di as ar,
  re as as,
  vh as at,
  Ct as au,
  lh as av,
  W0 as aw,
  _u as ax,
  rt as ay,
  Oi as az,
  zu as b,
  nc as b$,
  j0 as b0,
  zn as b1,
  T0 as b2,
  tn as b3,
  xi as b4,
  Pi as b5,
  x0 as b6,
  Sa as b7,
  da as b8,
  z0 as b9,
  Wl as bA,
  Mc as bB,
  r0 as bC,
  rl as bD,
  Ul as bE,
  Hl as bF,
  sl as bG,
  rf as bH,
  Sc as bI,
  gf as bJ,
  cs as bK,
  Tc as bL,
  zc as bM,
  gc as bN,
  bl as bO,
  Bl as bP,
  Yl as bQ,
  Os as bR,
  Gs as bS,
  Hs as bT,
  $c as bU,
  Dl as bV,
  wl as bW,
  wf as bX,
  vs as bY,
  Ff as bZ,
  uc as b_,
  ya as ba,
  Ra as bb,
  R0 as bc,
  Ss as bd,
  Ke as be,
  H0 as bf,
  bu as bg,
  Pc as bh,
  bc as bi,
  $i as bj,
  t0 as bk,
  Rc as bl,
  Fc as bm,
  _f as bn,
  $l as bo,
  Mf as bp,
  Sl as bq,
  ko as br,
  hf as bs,
  df as bt,
  ns as bu,
  mc as bv,
  Tl as bw,
  _c as bx,
  Qc as by,
  Ns as bz,
  dh as c,
  ql as c0,
  ff as c1,
  kc as c2,
  tl as c3,
  Zl as c4,
  wc as c5,
  Lc as c6,
  oc as c7,
  zl as c8,
  Vc as c9,
  $0 as cA,
  O0 as cB,
  qe as cC,
  Fa as cD,
  Aa as cE,
  wa as cF,
  ga as cG,
  Da as cH,
  U0 as cI,
  ll as ca,
  pl as cb,
  nf as cc,
  cc as cd,
  hc as ce,
  Sf as cf,
  Jc as cg,
  ro as ch,
  bf as ci,
  il as cj,
  al as ck,
  Gc as cl,
  Z0 as cm,
  je as cn,
  Wa as co,
  en as cp,
  L0 as cq,
  ht as cr,
  q0 as cs,
  Pa as ct,
  $a as cu,
  Na as cv,
  Ma as cw,
  Ba as cx,
  ba as cy,
  Ea as cz,
  N0 as d,
  Mr as e,
  mh as f,
  rr as g,
  Vt as h,
  yn as i,
  Rr as j,
  ph as k,
  ma as l,
  Ie as m,
  Dh as n,
  Ja as o,
  yr as p,
  br as q,
  J0 as r,
  Iu as s,
  h0 as t,
  Y0 as u,
  Q0 as v,
  G0 as w,
  Ys as x,
  ne as y,
  v0 as z
};
