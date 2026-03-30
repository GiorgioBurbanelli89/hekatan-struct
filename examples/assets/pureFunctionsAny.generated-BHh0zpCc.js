function Pe() {
  return Pe = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, Pe.apply(null, arguments);
}
var Fi = { relTol: 1e-12, absTol: 1e-15, matrix: "Matrix", number: "number", numberFallback: "number", precision: 64, predictable: false, randomSeed: null };
function Hu(r, e) {
  if (ot(r, e)) return r[e];
  throw typeof r[e] == "function" && ju(r, e) ? new Error('Cannot access method "' + e + '" as a property') : new Error('No access to property "' + e + '"');
}
function ku(r, e, t) {
  if (ot(r, e)) return r[e] = t, t;
  throw new Error('No access to property "' + e + '"');
}
function ot(r, e) {
  return !ra(r) && !Array.isArray(r) ? false : Qe(ea, e) ? true : !(e in Object.prototype || e in Function.prototype);
}
function ju(r, e) {
  return r == null || typeof r[e] != "function" || Qe(r, e) && Object.getPrototypeOf && e in Object.getPrototypeOf(r) ? false : Qe(ta, e) ? true : !(e in Object.prototype || e in Function.prototype);
}
function ra(r) {
  return typeof r == "object" && r && r.constructor === Object;
}
var ea = { length: true, name: true }, ta = { toString: true, valueOf: true, toLocaleString: true };
class na {
  constructor(e) {
    this.wrappedObject = e, this[Symbol.iterator] = this.entries;
  }
  keys() {
    return Object.keys(this.wrappedObject).filter((e) => this.has(e)).values();
  }
  get(e) {
    return Hu(this.wrappedObject, e);
  }
  set(e, t) {
    return ku(this.wrappedObject, e, t), this;
  }
  has(e) {
    return ot(this.wrappedObject, e) && e in this.wrappedObject;
  }
  entries() {
    return ia(this.keys(), (e) => [e, this.get(e)]);
  }
  forEach(e) {
    for (var t of this.keys()) e(this.get(t), t, this);
  }
  delete(e) {
    ot(this.wrappedObject, e) && delete this.wrappedObject[e];
  }
  clear() {
    for (var e of this.keys()) this.delete(e);
  }
  get size() {
    return Object.keys(this.wrappedObject).length;
  }
}
function ia(r, e) {
  return { next: () => {
    var t = r.next();
    return t.done ? t : { value: e(t.value), done: false };
  } };
}
function Nr(r) {
  return typeof r == "number";
}
function Rr(r) {
  return !r || typeof r != "object" || typeof r.constructor != "function" ? false : r.isBigNumber === true && typeof r.constructor.prototype == "object" && r.constructor.prototype.isBigNumber === true || typeof r.constructor.isDecimal == "function" && r.constructor.isDecimal(r) === true;
}
function ua(r) {
  return typeof r == "bigint";
}
function Gt(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isComplex === true || false;
}
function Kt(r) {
  return r && typeof r == "object" && Object.getPrototypeOf(r).isFraction === true || false;
}
function Ei(r) {
  return r && r.constructor.prototype.isUnit === true || false;
}
function fe(r) {
  return typeof r == "string";
}
var Pr = Array.isArray;
function Cr(r) {
  return r && r.constructor.prototype.isMatrix === true || false;
}
function Ye(r) {
  return Array.isArray(r) || Cr(r);
}
function Ci(r) {
  return r && r.isDenseMatrix && r.constructor.prototype.isMatrix === true || false;
}
function bi(r) {
  return r && r.isSparseMatrix && r.constructor.prototype.isMatrix === true || false;
}
function _i(r) {
  return r && r.constructor.prototype.isRange === true || false;
}
function Ht(r) {
  return r && r.constructor.prototype.isIndex === true || false;
}
function aa(r) {
  return typeof r == "boolean";
}
function oa(r) {
  return r && r.constructor.prototype.isResultSet === true || false;
}
function sa(r) {
  return r && r.constructor.prototype.isHelp === true || false;
}
function fa(r) {
  return typeof r == "function";
}
function ca(r) {
  return r instanceof Date;
}
function la(r) {
  return r instanceof RegExp;
}
function kt(r) {
  return !!(r && typeof r == "object" && r.constructor === Object && !Gt(r) && !Kt(r));
}
function ha(r) {
  return r ? r instanceof Map || r instanceof na || typeof r.set == "function" && typeof r.get == "function" && typeof r.keys == "function" && typeof r.has == "function" : false;
}
function va(r) {
  return r === null;
}
function pa(r) {
  return r === void 0;
}
function da(r) {
  return r && r.isAccessorNode === true && r.constructor.prototype.isNode === true || false;
}
function Da(r) {
  return r && r.isArrayNode === true && r.constructor.prototype.isNode === true || false;
}
function ma(r) {
  return r && r.isAssignmentNode === true && r.constructor.prototype.isNode === true || false;
}
function ga(r) {
  return r && r.isBlockNode === true && r.constructor.prototype.isNode === true || false;
}
function ya(r) {
  return r && r.isConditionalNode === true && r.constructor.prototype.isNode === true || false;
}
function wa(r) {
  return r && r.isConstantNode === true && r.constructor.prototype.isNode === true || false;
}
function Aa(r) {
  return r && r.isFunctionAssignmentNode === true && r.constructor.prototype.isNode === true || false;
}
function Fa(r) {
  return r && r.isFunctionNode === true && r.constructor.prototype.isNode === true || false;
}
function Ea(r) {
  return r && r.isIndexNode === true && r.constructor.prototype.isNode === true || false;
}
function Ca(r) {
  return r && r.isNode === true && r.constructor.prototype.isNode === true || false;
}
function ba(r) {
  return r && r.isObjectNode === true && r.constructor.prototype.isNode === true || false;
}
function _a(r) {
  return r && r.isOperatorNode === true && r.constructor.prototype.isNode === true || false;
}
function Ba(r) {
  return r && r.isParenthesisNode === true && r.constructor.prototype.isNode === true || false;
}
function Ma(r) {
  return r && r.isRangeNode === true && r.constructor.prototype.isNode === true || false;
}
function Sa(r) {
  return r && r.isRelationalNode === true && r.constructor.prototype.isNode === true || false;
}
function Na(r) {
  return r && r.isSymbolNode === true && r.constructor.prototype.isNode === true || false;
}
function xa(r) {
  return r && r.constructor.prototype.isChain === true || false;
}
function ee(r) {
  var e = typeof r;
  return e === "object" ? r === null ? "null" : Rr(r) ? "BigNumber" : r.constructor && r.constructor.name ? r.constructor.name : "Object" : e;
}
function Ar(r) {
  var e = typeof r;
  if (e === "number" || e === "bigint" || e === "string" || e === "boolean" || r === null || r === void 0) return r;
  if (typeof r.clone == "function") return r.clone();
  if (Array.isArray(r)) return r.map(function(t) {
    return Ar(t);
  });
  if (r instanceof Date) return new Date(r.valueOf());
  if (Rr(r)) return r;
  if (kt(r)) return Ta(r, Ar);
  if (e === "function") return r;
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(r, ")"));
}
function Ta(r, e) {
  var t = {};
  for (var n in r) Qe(r, n) && (t[n] = e(r[n]));
  return t;
}
function Bi(r, e) {
  for (var t in e) Qe(e, t) && (r[t] = e[t]);
  return r;
}
function Ae(r, e) {
  var t, n, i;
  if (Array.isArray(r)) {
    if (!Array.isArray(e) || r.length !== e.length) return false;
    for (n = 0, i = r.length; n < i; n++) if (!Ae(r[n], e[n])) return false;
    return true;
  } else {
    if (typeof r == "function") return r === e;
    if (r instanceof Object) {
      if (Array.isArray(e) || !(e instanceof Object)) return false;
      for (t in r) if (!(t in e) || !Ae(r[t], e[t])) return false;
      for (t in e) if (!(t in r)) return false;
      return true;
    } else return r === e;
  }
}
function Qe(r, e) {
  return r && Object.hasOwnProperty.call(r, e);
}
function Ia(r, e) {
  for (var t = {}, n = 0; n < e.length; n++) {
    var i = e[n], u = r[i];
    u !== void 0 && (t[i] = u);
  }
  return t;
}
var za = ["Matrix", "Array"], Oa = ["number", "BigNumber", "Fraction"], Gr = function(e) {
  if (e) throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);
  return Object.freeze(Fi);
};
Pe(Gr, Fi, { MATRIX_OPTIONS: za, NUMBER_OPTIONS: Oa });
function Dn() {
  return true;
}
function ne() {
  return false;
}
function Ie() {
}
const mn = "Argument is not a typed-function.";
function Mi() {
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
  } }], t = { name: "any", test: Dn, isAny: true };
  let n, i, u = 0, a = { createCount: 0 };
  function o(E) {
    const N = n.get(E);
    if (N) return N;
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
    let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "any";
    const I = N ? o(N).index : i.length, $ = [];
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
    const N = i.filter((I) => {
      const $ = n.get(I);
      return !$.isAny && $.test(E);
    });
    return N.length ? N : ["any"];
  }
  function p(E) {
    return E && typeof E == "function" && "_typedFunctionData" in E;
  }
  function v(E, N, I) {
    if (!p(E)) throw new TypeError(mn);
    const $ = I && I.exact, W = Array.isArray(N) ? N.join(",") : N, U = b(W), ur = D(U);
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
      const Tr = U[Sr], Ur = [];
      let Kr;
      for (Kr of nr) {
        const Xr = F(Kr.params, Sr);
        if (!(!Xr || Tr.restParam && !Xr.restParam)) {
          if (!Xr.hasAny) {
            const ae = g(Xr);
            if (Tr.types.some((oe) => !ae.has(oe.name))) continue;
          }
          Ur.push(Kr);
        }
      }
      if (nr = Ur, nr.length === 0) break;
    }
    let G;
    for (G of nr) if (G.params.length <= K) return G;
    throw new TypeError("Signature not found (signature: " + (E.name || "unnamed") + "(" + D(U, ", ") + "))");
  }
  function d(E, N, I) {
    return v(E, N, I).implementation;
  }
  function l(E, N) {
    const I = o(N);
    if (I.test(E)) return E;
    const $ = I.conversionsTo;
    if ($.length === 0) throw new Error("There are no conversions to " + N + " defined.");
    for (let W = 0; W < $.length; W++) if (o($[W].from).test(E)) return $[W].convert(E);
    throw new Error("Cannot convert " + E + " to " + N);
  }
  function D(E) {
    let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ",";
    return E.map((I) => I.name).join(N);
  }
  function m(E) {
    const N = E.indexOf("...") === 0, $ = (N ? E.length > 3 ? E.slice(3) : "any" : E).split("|").map((K) => o(K.trim()));
    let W = false, U = N ? "..." : "";
    return { types: $.map(function(K) {
      return W = K.isAny || W, U += K.name + "|", { name: K.name, typeIndex: K.index, test: K.test, isAny: K.isAny, conversion: null, conversionIndex: -1 };
    }), name: U.slice(0, -1), hasAny: W, hasConversion: false, restParam: N };
  }
  function C(E) {
    const N = E.types.map((ur) => ur.name), I = Y(N);
    let $ = E.hasAny, W = E.name;
    const U = I.map(function(ur) {
      const K = o(ur.from);
      return $ = K.isAny || $, W += "|" + ur.from, { name: ur.from, typeIndex: K.index, test: K.test, isAny: K.isAny, conversion: ur, conversionIndex: ur.index };
    });
    return { types: E.types.concat(U), name: W, hasAny: $, hasConversion: U.length > 0, restParam: E.restParam };
  }
  function g(E) {
    return E.typeSet || (E.typeSet = /* @__PURE__ */ new Set(), E.types.forEach((N) => E.typeSet.add(N.name))), E.typeSet;
  }
  function b(E) {
    const N = [];
    if (typeof E != "string") throw new TypeError("Signatures must be strings");
    const I = E.trim();
    if (I === "") return N;
    const $ = I.split(",");
    for (let W = 0; W < $.length; ++W) {
      const U = m($[W].trim());
      if (U.restParam && W !== $.length - 1) throw new SyntaxError('Unexpected rest parameter "' + $[W] + '": only allowed for the last parameter');
      if (U.types.length === 0) return null;
      N.push(U);
    }
    return N;
  }
  function A(E) {
    const N = Q(E);
    return N ? N.restParam : false;
  }
  function w(E) {
    if (!E || E.types.length === 0) return Dn;
    if (E.types.length === 1) return o(E.types[0].name).test;
    if (E.types.length === 2) {
      const N = o(E.types[0].name).test, I = o(E.types[1].name).test;
      return function(W) {
        return N(W) || I(W);
      };
    } else {
      const N = E.types.map(function(I) {
        return o(I.name).test;
      });
      return function($) {
        for (let W = 0; W < N.length; W++) if (N[W]($)) return true;
        return false;
      };
    }
  }
  function _(E) {
    let N, I, $;
    if (A(E)) {
      N = H(E).map(w);
      const W = N.length, U = w(Q(E)), ur = function(K) {
        for (let nr = W; nr < K.length; nr++) if (!U(K[nr])) return false;
        return true;
      };
      return function(nr) {
        for (let G = 0; G < N.length; G++) if (!N[G](nr[G])) return false;
        return ur(nr) && nr.length >= W + 1;
      };
    } else return E.length === 0 ? function(U) {
      return U.length === 0;
    } : E.length === 1 ? (I = w(E[0]), function(U) {
      return I(U[0]) && U.length === 1;
    }) : E.length === 2 ? (I = w(E[0]), $ = w(E[1]), function(U) {
      return I(U[0]) && $(U[1]) && U.length === 2;
    }) : (N = E.map(w), function(U) {
      for (let ur = 0; ur < N.length; ur++) if (!N[ur](U[ur])) return false;
      return U.length === N.length;
    });
  }
  function F(E, N) {
    return N < E.length ? E[N] : A(E) ? Q(E) : null;
  }
  function y(E, N) {
    const I = F(E, N);
    return I ? g(I) : /* @__PURE__ */ new Set();
  }
  function M(E) {
    return E.conversion === null || E.conversion === void 0;
  }
  function B(E, N) {
    const I = /* @__PURE__ */ new Set();
    return E.forEach(($) => {
      const W = y($.params, N);
      let U;
      for (U of W) I.add(U);
    }), I.has("any") ? ["any"] : Array.from(I);
  }
  function S(E, N, I) {
    let $, W;
    const U = E || "unnamed";
    let ur = I, K;
    for (K = 0; K < N.length; K++) {
      const Tr = [];
      if (ur.forEach((Ur) => {
        const Kr = F(Ur.params, K), Xr = w(Kr);
        (K < Ur.params.length || A(Ur.params)) && Xr(N[K]) && Tr.push(Ur);
      }), Tr.length === 0) {
        if (W = B(ur, K), W.length > 0) {
          const Ur = h(N[K]);
          return $ = new TypeError("Unexpected type of argument in function " + U + " (expected: " + W.join(" or ") + ", actual: " + Ur.join(" | ") + ", index: " + K + ")"), $.data = { category: "wrongType", fn: U, index: K, actual: Ur, expected: W }, $;
        }
      } else ur = Tr;
    }
    const nr = ur.map(function(Tr) {
      return A(Tr.params) ? 1 / 0 : Tr.params.length;
    });
    if (N.length < Math.min.apply(null, nr)) return W = B(ur, K), $ = new TypeError("Too few arguments in function " + U + " (expected: " + W.join(" or ") + ", index: " + N.length + ")"), $.data = { category: "tooFewArgs", fn: U, index: N.length, expected: W }, $;
    const G = Math.max.apply(null, nr);
    if (N.length > G) return $ = new TypeError("Too many arguments in function " + U + " (expected: " + G + ", actual: " + N.length + ")"), $.data = { category: "tooManyArgs", fn: U, index: N.length, expectedLength: G }, $;
    const Sr = [];
    for (let Tr = 0; Tr < N.length; ++Tr) Sr.push(h(N[Tr]).join("|"));
    return $ = new TypeError('Arguments of type "' + Sr.join(", ") + '" do not match any of the defined signatures of function ' + U + "."), $.data = { category: "mismatch", actual: Sr }, $;
  }
  function z(E) {
    let N = i.length + 1;
    for (let I = 0; I < E.types.length; I++) M(E.types[I]) && (N = Math.min(N, E.types[I].typeIndex));
    return N;
  }
  function x(E) {
    let N = u + 1;
    for (let I = 0; I < E.types.length; I++) M(E.types[I]) || (N = Math.min(N, E.types[I].conversionIndex));
    return N;
  }
  function O(E, N) {
    if (E.hasAny) {
      if (!N.hasAny) return 1;
    } else if (N.hasAny) return -1;
    if (E.restParam) {
      if (!N.restParam) return 1;
    } else if (N.restParam) return -1;
    if (E.hasConversion) {
      if (!N.hasConversion) return 1;
    } else if (N.hasConversion) return -1;
    const I = z(E) - z(N);
    if (I < 0) return -1;
    if (I > 0) return 1;
    const $ = x(E) - x(N);
    return $ < 0 ? -1 : $ > 0 ? 1 : 0;
  }
  function T(E, N) {
    const I = E.params, $ = N.params, W = Q(I), U = Q($), ur = A(I), K = A($);
    if (ur && W.hasAny) {
      if (!K || !U.hasAny) return 1;
    } else if (K && U.hasAny) return -1;
    let nr = 0, G = 0, Sr;
    for (Sr of I) Sr.hasAny && ++nr, Sr.hasConversion && ++G;
    let Tr = 0, Ur = 0;
    for (Sr of $) Sr.hasAny && ++Tr, Sr.hasConversion && ++Ur;
    if (nr !== Tr) return nr - Tr;
    if (ur && W.hasConversion) {
      if (!K || !U.hasConversion) return 1;
    } else if (K && U.hasConversion) return -1;
    if (G !== Ur) return G - Ur;
    if (ur) {
      if (!K) return 1;
    } else if (K) return -1;
    const Kr = (I.length - $.length) * (ur ? -1 : 1);
    if (Kr !== 0) return Kr;
    const Xr = [];
    let ae = 0;
    for (let Te = 0; Te < I.length; ++Te) {
      const et = O(I[Te], $[Te]);
      Xr.push(et), ae += et;
    }
    if (ae !== 0) return ae;
    let oe;
    for (oe of Xr) if (oe !== 0) return oe;
    return 0;
  }
  function Y(E) {
    if (E.length === 0) return [];
    const N = E.map(o);
    E.length > 1 && N.sort((W, U) => W.index - U.index);
    let I = N[0].conversionsTo;
    if (E.length === 1) return I;
    I = I.concat([]);
    const $ = new Set(E);
    for (let W = 1; W < N.length; ++W) {
      let U;
      for (U of N[W].conversionsTo) $.has(U.from) || (I.push(U), $.add(U.from));
    }
    return I;
  }
  function q(E, N) {
    let I = N;
    if (E.some((W) => W.hasConversion)) {
      const W = A(E), U = E.map(L);
      I = function() {
        const K = [], nr = W ? arguments.length - 1 : arguments.length;
        for (let G = 0; G < nr; G++) K[G] = U[G](arguments[G]);
        return W && (K[nr] = arguments[nr].map(U[nr])), N.apply(this, K);
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
    let N, I, $, W;
    const U = [], ur = [];
    switch (E.types.forEach(function(K) {
      K.conversion && (U.push(o(K.conversion.from).test), ur.push(K.conversion.convert));
    }), ur.length) {
      case 0:
        return function(nr) {
          return nr;
        };
      case 1:
        return N = U[0], $ = ur[0], function(nr) {
          return N(nr) ? $(nr) : nr;
        };
      case 2:
        return N = U[0], I = U[1], $ = ur[0], W = ur[1], function(nr) {
          return N(nr) ? $(nr) : I(nr) ? W(nr) : nr;
        };
      default:
        return function(nr) {
          for (let G = 0; G < ur.length; G++) if (U[G](nr)) return ur[G](nr);
          return nr;
        };
    }
  }
  function tr(E) {
    function N(I, $, W) {
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
          return N(I, $ + 1, W.concat([K]));
        });
      } else return [W];
    }
    return N(E, 0, []);
  }
  function or(E, N) {
    const I = Math.max(E.length, N.length);
    for (let K = 0; K < I; K++) {
      const nr = y(E, K), G = y(N, K);
      let Sr = false, Tr;
      for (Tr of G) if (nr.has(Tr)) {
        Sr = true;
        break;
      }
      if (!Sr) return false;
    }
    const $ = E.length, W = N.length, U = A(E), ur = A(N);
    return U ? ur ? $ === W : W >= $ : ur ? $ >= W : $ === W;
  }
  function R(E) {
    return E.map((N) => wr(N) ? Dr(N.referToSelf.callback) : gr(N) ? dr(N.referTo.references, N.referTo.callback) : N);
  }
  function Z(E, N, I) {
    const $ = [];
    let W;
    for (W of E) {
      let U = I[W];
      if (typeof U != "number") throw new TypeError('No definition for referenced signature "' + W + '"');
      if (U = N[U], typeof U != "function") return false;
      $.push(U);
    }
    return $;
  }
  function er(E, N, I) {
    const $ = R(E), W = new Array($.length).fill(false);
    let U = true;
    for (; U; ) {
      U = false;
      let ur = true;
      for (let K = 0; K < $.length; ++K) {
        if (W[K]) continue;
        const nr = $[K];
        if (wr(nr)) $[K] = nr.referToSelf.callback(I), $[K].referToSelf = nr.referToSelf, W[K] = true, ur = false;
        else if (gr(nr)) {
          const G = Z(nr.referTo.references, $, N);
          G ? ($[K] = nr.referTo.callback.apply(this, G), $[K].referTo = nr.referTo, W[K] = true, ur = false) : U = true;
        }
      }
      if (ur && U) throw new SyntaxError("Circular reference detected in resolving typed.referTo");
    }
    return $;
  }
  function ar(E) {
    const N = /\bthis(\(|\.signatures\b)/;
    Object.keys(E).forEach((I) => {
      const $ = E[I];
      if (N.test($.toString())) throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.");
    });
  }
  function j(E, N) {
    if (a.createCount++, Object.keys(N).length === 0) throw new SyntaxError("No signatures provided");
    a.warnAgainstDeprecatedThis && ar(N);
    const I = [], $ = [], W = {}, U = [];
    let ur;
    for (ur in N) {
      if (!Object.prototype.hasOwnProperty.call(N, ur)) continue;
      const _r = b(ur);
      if (!_r) continue;
      I.forEach(function(Je) {
        if (or(Je, _r)) throw new TypeError('Conflicting signatures "' + D(Je) + '" and "' + D(_r) + '".');
      }), I.push(_r);
      const Hr = $.length;
      $.push(N[ur]);
      const Gu = _r.map(C);
      let tt;
      for (tt of tr(Gu)) {
        const Je = D(tt);
        U.push({ params: tt, name: Je, fn: Hr }), tt.every((Ku) => !Ku.hasConversion) && (W[Je] = Hr);
      }
    }
    U.sort(T);
    const K = er($, W, We);
    let nr;
    for (nr in W) Object.prototype.hasOwnProperty.call(W, nr) && (W[nr] = K[W[nr]]);
    const G = [], Sr = /* @__PURE__ */ new Map();
    for (nr of U) Sr.has(nr.name) || (nr.fn = K[nr.fn], G.push(nr), Sr.set(nr.name, nr));
    const Tr = G[0] && G[0].params.length <= 2 && !A(G[0].params), Ur = G[1] && G[1].params.length <= 2 && !A(G[1].params), Kr = G[2] && G[2].params.length <= 2 && !A(G[2].params), Xr = G[3] && G[3].params.length <= 2 && !A(G[3].params), ae = G[4] && G[4].params.length <= 2 && !A(G[4].params), oe = G[5] && G[5].params.length <= 2 && !A(G[5].params), Te = Tr && Ur && Kr && Xr && ae && oe;
    for (let _r = 0; _r < G.length; ++_r) G[_r].test = _(G[_r].params);
    const et = Tr ? w(G[0].params[0]) : ne, Au = Ur ? w(G[1].params[0]) : ne, Fu = Kr ? w(G[2].params[0]) : ne, Eu = Xr ? w(G[3].params[0]) : ne, Cu = ae ? w(G[4].params[0]) : ne, bu = oe ? w(G[5].params[0]) : ne, _u = Tr ? w(G[0].params[1]) : ne, Bu = Ur ? w(G[1].params[1]) : ne, Mu = Kr ? w(G[2].params[1]) : ne, Su = Xr ? w(G[3].params[1]) : ne, Nu = ae ? w(G[4].params[1]) : ne, xu = oe ? w(G[5].params[1]) : ne;
    for (let _r = 0; _r < G.length; ++_r) G[_r].implementation = q(G[_r].params, G[_r].fn);
    const Tu = Tr ? G[0].implementation : Ie, Iu = Ur ? G[1].implementation : Ie, zu = Kr ? G[2].implementation : Ie, Ou = Xr ? G[3].implementation : Ie, $u = ae ? G[4].implementation : Ie, Pu = oe ? G[5].implementation : Ie, qu = Tr ? G[0].params.length : -1, Ru = Ur ? G[1].params.length : -1, Uu = Kr ? G[2].params.length : -1, Lu = Xr ? G[3].params.length : -1, Zu = ae ? G[4].params.length : -1, Vu = oe ? G[5].params.length : -1, Wu = Te ? 6 : 0, Ju = G.length, Yu = G.map((_r) => _r.test), Qu = G.map((_r) => _r.implementation), Xu = function() {
      for (let Hr = Wu; Hr < Ju; Hr++) if (Yu[Hr](arguments)) return Qu[Hr].apply(this, arguments);
      return a.onMismatch(E, arguments, G);
    };
    function We(_r, Hr) {
      return arguments.length === qu && et(_r) && _u(Hr) ? Tu.apply(this, arguments) : arguments.length === Ru && Au(_r) && Bu(Hr) ? Iu.apply(this, arguments) : arguments.length === Uu && Fu(_r) && Mu(Hr) ? zu.apply(this, arguments) : arguments.length === Lu && Eu(_r) && Su(Hr) ? Ou.apply(this, arguments) : arguments.length === Zu && Cu(_r) && Nu(Hr) ? $u.apply(this, arguments) : arguments.length === Vu && bu(_r) && xu(Hr) ? Pu.apply(this, arguments) : Xu.apply(this, arguments);
    }
    try {
      Object.defineProperty(We, "name", { value: E });
    } catch {
    }
    return We.signatures = W, We._typedFunctionData = { signatures: G, signatureMap: Sr }, We;
  }
  function J(E, N, I) {
    throw S(E, N, I);
  }
  function H(E) {
    return X(E, 0, E.length - 1);
  }
  function Q(E) {
    return E[E.length - 1];
  }
  function X(E, N, I) {
    return Array.prototype.slice.call(E, N, I);
  }
  function sr(E, N) {
    for (let I = 0; I < E.length; I++) if (N(E[I])) return E[I];
  }
  function k(E, N) {
    return Array.prototype.concat.apply([], E.map(N));
  }
  function hr() {
    const E = H(arguments).map((I) => D(b(I))), N = Q(arguments);
    if (typeof N != "function") throw new TypeError("Callback function expected as last argument");
    return dr(E, N);
  }
  function dr(E, N) {
    return { referTo: { references: E, callback: N } };
  }
  function Dr(E) {
    if (typeof E != "function") throw new TypeError("Callback function expected as first argument");
    return { referToSelf: { callback: E } };
  }
  function gr(E) {
    return E && typeof E.referTo == "object" && Array.isArray(E.referTo.references) && typeof E.referTo.callback == "function";
  }
  function wr(E) {
    return E && typeof E.referToSelf == "object" && typeof E.referToSelf.callback == "function";
  }
  function Fr(E, N) {
    if (!E) return N;
    if (N && N !== E) {
      const I = new Error("Function names do not match (expected: " + E + ", actual: " + N + ")");
      throw I.data = { actual: N, expected: E }, I;
    }
    return E;
  }
  function zr(E) {
    let N;
    for (const I in E) Object.prototype.hasOwnProperty.call(E, I) && (p(E[I]) || typeof E[I].signature == "string") && (N = Fr(N, E[I].name));
    return N;
  }
  function br(E, N) {
    let I;
    for (I in N) if (Object.prototype.hasOwnProperty.call(N, I)) {
      if (I in E && N[I] !== E[I]) {
        const $ = new Error('Signature "' + I + '" is defined twice');
        throw $.data = { signature: I, sourceFunction: N[I], destFunction: E[I] }, $;
      }
      E[I] = N[I];
    }
  }
  const Mr = a;
  a = function(E) {
    const N = typeof E == "string", I = N ? 1 : 0;
    let $ = N ? E : "";
    const W = {};
    for (let U = I; U < arguments.length; ++U) {
      const ur = arguments[U];
      let K = {}, nr;
      if (typeof ur == "function" ? (nr = ur.name, typeof ur.signature == "string" ? K[ur.signature] = ur : p(ur) && (K = ur.signatures)) : r(ur) && (K = ur, N || (nr = zr(ur))), Object.keys(K).length === 0) {
        const G = new TypeError("Argument to 'typed' at index " + U + " is not a (typed) function, nor an object with signatures as keys and functions as values.");
        throw G.data = { index: U, argument: ur }, G;
      }
      N || ($ = Fr($, nr)), br(W, K);
    }
    return j($ || "", W);
  }, a.create = Mi, a.createCount = Mr.createCount, a.onMismatch = J, a.throwMismatchError = J, a.createError = S, a.clear = c, a.clearConversions = s, a.addTypes = f, a._findType = o, a.referTo = hr, a.referToSelf = Dr, a.convert = l, a.findSignature = v, a.find = d, a.isTypedFunction = p, a.warnAgainstDeprecatedThis = true, a.addType = function(E, N) {
    let I = "any";
    N !== false && n.has("Object") && (I = "Object"), a.addTypes([E], I);
  };
  function Jr(E) {
    if (!E || typeof E.from != "string" || typeof E.to != "string" || typeof E.convert != "function") throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
    if (E.to === E.from) throw new SyntaxError('Illegal to define conversion from "' + E.from + '" to itself.');
  }
  return a.addConversion = function(E) {
    let N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { override: false };
    Jr(E);
    const I = o(E.to), $ = I.conversionsTo.find((W) => W.from === E.from);
    if ($) if (N && N.override) a.removeConversion({ from: $.from, to: E.to, convert: $.convert });
    else throw new Error('There is already a conversion from "' + E.from + '" to "' + I.name + '"');
    I.conversionsTo.push({ from: E.from, convert: E.convert, index: u++ });
  }, a.addConversions = function(E, N) {
    E.forEach((I) => a.addConversion(I, N));
  }, a.removeConversion = function(E) {
    Jr(E);
    const N = o(E.to), I = sr(N.conversionsTo, (W) => W.from === E.from);
    if (!I) throw new Error("Attempt to remove nonexistent conversion from " + E.from + " to " + E.to);
    if (I.convert !== E.convert) throw new Error("Conversion to remove does not match existing conversion");
    const $ = N.conversionsTo.indexOf(I);
    N.conversionsTo.splice($, 1);
  }, a.resolve = function(E, N) {
    if (!p(E)) throw new TypeError(mn);
    const I = E._typedFunctionData.signatures;
    for (let $ = 0; $ < I.length; ++$) if (I[$].test(N)) return I[$];
    return null;
  }, a;
}
const st = Mi();
function rr(r, e, t, n) {
  function i(u) {
    var a = Ia(u, e.map(qa));
    return $a(r, e, u), t(a);
  }
  return i.isFactory = true, i.fn = r, i.dependencies = e.slice().sort(), n && (i.meta = n), i;
}
function $a(r, e, t) {
  var n = e.filter((u) => !Pa(u)).every((u) => t[u] !== void 0);
  if (!n) {
    var i = e.filter((u) => t[u] === void 0);
    throw new Error('Cannot create function "'.concat(r, '", ') + "some dependencies are missing: ".concat(i.map((u) => '"'.concat(u, '"')).join(", "), "."));
  }
}
function Pa(r) {
  return r && r[0] === "?";
}
function qa(r) {
  return r && r[0] === "?" ? r.slice(1) : r;
}
function Ir(r) {
  return typeof r == "boolean" ? true : isFinite(r) ? r === Math.round(r) : false;
}
var Ra = Math.sign || function(r) {
  return r > 0 ? 1 : r < 0 ? -1 : 0;
};
function It(r, e, t) {
  var n = { 2: "0b", 8: "0o", 16: "0x" }, i = n[e], u = "";
  if (t) {
    if (t < 1) throw new Error("size must be in greater than 0");
    if (!Ir(t)) throw new Error("size must be an integer");
    if (r > 2 ** (t - 1) - 1 || r < -(2 ** (t - 1))) throw new Error("Value must be in range [-2^".concat(t - 1, ", 2^").concat(t - 1, "-1]"));
    if (!Ir(r)) throw new Error("Value must be an integer");
    r < 0 && (r = r + 2 ** t), u = "i".concat(t);
  }
  var a = "";
  return r < 0 && (r = -r, a = "-"), "".concat(a).concat(i).concat(r.toString(e)).concat(u);
}
function Pt(r, e) {
  if (typeof e == "function") return e(r);
  if (r === 1 / 0) return "Infinity";
  if (r === -1 / 0) return "-Infinity";
  if (isNaN(r)) return "NaN";
  var { notation: t, precision: n, wordSize: i } = Si(e);
  switch (t) {
    case "fixed":
      return La(r, n);
    case "exponential":
      return Ni(r, n);
    case "engineering":
      return Ua(r, n);
    case "bin":
      return It(r, 2, i);
    case "oct":
      return It(r, 8, i);
    case "hex":
      return It(r, 16, i);
    case "auto":
      return Za(r, n, e).replace(/((\.\d*?)(0+))($|e)/, function() {
        var u = arguments[2], a = arguments[4];
        return u !== "." ? u + a : a;
      });
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function Si(r) {
  var e = "auto", t, n;
  if (r !== void 0) if (Nr(r)) t = r;
  else if (Rr(r)) t = r.toNumber();
  else if (kt(r)) r.precision !== void 0 && (t = gn(r.precision, () => {
    throw new Error('Option "precision" must be a number or BigNumber');
  })), r.wordSize !== void 0 && (n = gn(r.wordSize, () => {
    throw new Error('Option "wordSize" must be a number or BigNumber');
  })), r.notation && (e = r.notation);
  else throw new Error("Unsupported type of options, number, BigNumber, or object expected");
  return { notation: e, precision: t, wordSize: n };
}
function At(r) {
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
function Ua(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var t = At(r), n = Ft(t, e), i = n.exponent, u = n.coefficients, a = i % 3 === 0 ? i : i < 0 ? i - 3 - i % 3 : i - i % 3;
  if (Nr(e)) for (; e > u.length || i - a + 1 > u.length; ) u.push(0);
  else for (var o = Math.abs(i - a) - (u.length - 1), f = 0; f < o; f++) u.push(0);
  for (var c = Math.abs(i - a), s = 1; c > 0; ) s++, c--;
  var h = u.slice(s).join(""), p = Nr(e) && h.length || h.match(/[1-9]/) ? "." + h : "", v = u.slice(0, s).join("") + p + "e" + (i >= 0 ? "+" : "") + a.toString();
  return n.sign + v;
}
function La(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var t = At(r), n = typeof e == "number" ? Ft(t, t.exponent + 1 + e) : t, i = n.coefficients, u = n.exponent + 1, a = u + (e || 0);
  return i.length < a && (i = i.concat($e(a - i.length))), u < 0 && (i = $e(-u + 1).concat(i), u = 1), u < i.length && i.splice(u, 0, u === 0 ? "0." : "."), n.sign + i.join("");
}
function Ni(r, e) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var t = At(r), n = e ? Ft(t, e) : t, i = n.coefficients, u = n.exponent;
  i.length < e && (i = i.concat($e(e - i.length)));
  var a = i.shift();
  return n.sign + a + (i.length > 0 ? "." + i.join("") : "") + "e" + (u >= 0 ? "+" : "") + u;
}
function Za(r, e, t) {
  if (isNaN(r) || !isFinite(r)) return String(r);
  var n = yn(t == null ? void 0 : t.lowerExp, -3), i = yn(t == null ? void 0 : t.upperExp, 5), u = At(r), a = e ? Ft(u, e) : u;
  if (a.exponent < n || a.exponent >= i) return Ni(r, e);
  var o = a.coefficients, f = a.exponent;
  o.length < e && (o = o.concat($e(e - o.length))), o = o.concat($e(f - o.length + 1 + (o.length < e ? e - o.length : 0))), o = $e(-f).concat(o);
  var c = f > 0 ? f : 0;
  return c < o.length - 1 && o.splice(c + 1, 0, "."), a.sign + o.join("");
}
function Ft(r, e) {
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
function $e(r) {
  for (var e = [], t = 0; t < r; t++) e.push(0);
  return e;
}
function Va(r) {
  return r.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length;
}
function De(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-8, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (t <= 0) throw new Error("Relative tolerance must be greater than 0");
  if (n < 0) throw new Error("Absolute tolerance must be at least 0");
  return isNaN(r) || isNaN(e) ? false : !isFinite(r) || !isFinite(e) ? r === e : r === e ? true : Math.abs(r - e) <= Math.max(t * Math.max(Math.abs(r), Math.abs(e)), n);
}
function gn(r, e) {
  if (Nr(r)) return r;
  if (Rr(r)) return r.toNumber();
  e();
}
function yn(r, e) {
  return Nr(r) ? r : Rr(r) ? r.toNumber() : e;
}
var xi = function() {
  return xi = st.create, st;
}, Wa = ["?BigNumber", "?Complex", "?DenseMatrix", "?Fraction"], Ja = rr("typed", Wa, function(e) {
  var { BigNumber: t, Complex: n, DenseMatrix: i, Fraction: u } = e, a = xi();
  return a.clear(), a.addTypes([{ name: "number", test: Nr }, { name: "Complex", test: Gt }, { name: "BigNumber", test: Rr }, { name: "bigint", test: ua }, { name: "Fraction", test: Kt }, { name: "Unit", test: Ei }, { name: "identifier", test: (o) => fe && /^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDDC0-\uDDF3\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDD4A-\uDD65\uDD6F-\uDD85\uDE80-\uDEA9\uDEB0\uDEB1\uDEC2-\uDEC4\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61\uDF80-\uDF89\uDF8B\uDF8E\uDF90-\uDFB5\uDFB7\uDFD1\uDFD3]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8\uDFC0-\uDFE0]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD80E\uD80F\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46\uDC60-\uDFFF]|\uD810[\uDC00-\uDFFA]|\uD811[\uDC00-\uDE46]|\uD818[\uDD00-\uDD1D]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDD40-\uDD6C\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDCFF-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDDD0-\uDDED\uDDF0\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0\uDFF0-\uDFFF]|\uD87B[\uDC00-\uDE5D]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(o) }, { name: "string", test: fe }, { name: "Chain", test: xa }, { name: "Array", test: Pr }, { name: "Matrix", test: Cr }, { name: "DenseMatrix", test: Ci }, { name: "SparseMatrix", test: bi }, { name: "Range", test: _i }, { name: "Index", test: Ht }, { name: "boolean", test: aa }, { name: "ResultSet", test: oa }, { name: "Help", test: sa }, { name: "function", test: fa }, { name: "Date", test: ca }, { name: "RegExp", test: la }, { name: "null", test: va }, { name: "undefined", test: pa }, { name: "AccessorNode", test: da }, { name: "ArrayNode", test: Da }, { name: "AssignmentNode", test: ma }, { name: "BlockNode", test: ga }, { name: "ConditionalNode", test: ya }, { name: "ConstantNode", test: wa }, { name: "FunctionNode", test: Fa }, { name: "FunctionAssignmentNode", test: Aa }, { name: "IndexNode", test: Ea }, { name: "Node", test: Ca }, { name: "ObjectNode", test: ba }, { name: "OperatorNode", test: _a }, { name: "ParenthesisNode", test: Ba }, { name: "RangeNode", test: Ma }, { name: "RelationalNode", test: Sa }, { name: "SymbolNode", test: Na }, { name: "Map", test: ha }, { name: "Object", test: kt }]), a.addConversions([{ from: "number", to: "BigNumber", convert: function(f) {
    if (t || nt(f), Va(f) > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + f + "). Use function bignumber(x) to convert to BigNumber.");
    return new t(f);
  } }, { from: "number", to: "Complex", convert: function(f) {
    return n || it(f), new n(f, 0);
  } }, { from: "BigNumber", to: "Complex", convert: function(f) {
    return n || it(f), new n(f.toNumber(), 0);
  } }, { from: "bigint", to: "number", convert: function(f) {
    if (f > Number.MAX_SAFE_INTEGER) throw new TypeError("Cannot implicitly convert bigint to number: value exceeds the max safe integer value (value: " + f + ")");
    return Number(f);
  } }, { from: "bigint", to: "BigNumber", convert: function(f) {
    return t || nt(f), new t(f.toString());
  } }, { from: "bigint", to: "Fraction", convert: function(f) {
    return u || ut(f), new u(f);
  } }, { from: "Fraction", to: "BigNumber", convert: function(f) {
    throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
  } }, { from: "Fraction", to: "Complex", convert: function(f) {
    return n || it(f), new n(f.valueOf(), 0);
  } }, { from: "number", to: "Fraction", convert: function(f) {
    u || ut(f);
    var c = new u(f);
    if (c.valueOf() !== f) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + f + "). Use function fraction(x) to convert to Fraction.");
    return c;
  } }, { from: "string", to: "number", convert: function(f) {
    var c = Number(f);
    if (isNaN(c)) throw new Error('Cannot convert "' + f + '" to a number');
    return c;
  } }, { from: "string", to: "BigNumber", convert: function(f) {
    t || nt(f);
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
    u || ut(f);
    try {
      return new u(f);
    } catch {
      throw new Error('Cannot convert "' + f + '" to Fraction');
    }
  } }, { from: "string", to: "Complex", convert: function(f) {
    n || it(f);
    try {
      return new n(f);
    } catch {
      throw new Error('Cannot convert "' + f + '" to Complex');
    }
  } }, { from: "boolean", to: "number", convert: function(f) {
    return +f;
  } }, { from: "boolean", to: "BigNumber", convert: function(f) {
    return t || nt(f), new t(+f);
  } }, { from: "boolean", to: "bigint", convert: function(f) {
    return BigInt(+f);
  } }, { from: "boolean", to: "Fraction", convert: function(f) {
    return u || ut(f), new u(+f);
  } }, { from: "boolean", to: "string", convert: function(f) {
    return String(f);
  } }, { from: "Array", to: "Matrix", convert: function(f) {
    return i || Ya(), new i(f);
  } }, { from: "Matrix", to: "Array", convert: function(f) {
    return f.valueOf();
  } }]), a.onMismatch = (o, f, c) => {
    var s = a.createError(o, f, c);
    if (["wrongType", "mismatch"].includes(s.data.category) && f.length === 1 && Ye(f[0]) && c.some((p) => !p.params.includes(","))) {
      var h = new TypeError("Function '".concat(o, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(o, ")'."));
      throw h.data = s.data, h;
    }
    throw s;
  }, a.onMismatch = (o, f, c) => {
    var s = a.createError(o, f, c);
    if (["wrongType", "mismatch"].includes(s.data.category) && f.length === 1 && Ye(f[0]) && c.some((p) => !p.params.includes(","))) {
      var h = new TypeError("Function '".concat(o, "' doesn't apply to matrices. To call it ") + "elementwise on a matrix 'M', try 'map(M, ".concat(o, ")'."));
      throw h.data = s.data, h;
    }
    throw s;
  }, a;
});
function nt(r) {
  throw new Error("Cannot convert value ".concat(r, " into a BigNumber: no class 'BigNumber' provided"));
}
function it(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Complex number: no class 'Complex' provided"));
}
function Ya() {
  throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
}
function ut(r) {
  throw new Error("Cannot convert value ".concat(r, " into a Fraction, no class 'Fraction' provided."));
}
/*!
*  decimal.js v10.4.3
*  An arbitrary-precision Decimal type for JavaScript.
*  https://github.com/MikeMcl/decimal.js
*  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
*  MIT Licence
*/
var qt = 9e15, Ee = 1e9, Rt = "0123456789abcdef", ft = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ct = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ut = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -9e15, maxE: qt, crypto: false }, Ti, de, pr = true, Et = "[DecimalError] ", Fe = Et + "Invalid argument: ", Ii = Et + "Precision limit exceeded", zi = Et + "crypto unavailable", Oi = "[object Decimal]", Qr = Math.floor, Lr = Math.pow, Qa = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Xa = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Ga = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, $i = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, le = 1e7, vr = 7, Ka = 9007199254740991, Ha = ft.length - 1, Lt = ct.length - 1, V = { toStringTag: Oi };
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
  if (r.gt(e)) throw Error(Fe + e);
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
  return t.d ? t.d[0] ? (r = n.precision, e = n.rounding, n.precision = r + Math.max(t.e, t.sd()) + vr, n.rounding = 1, t = ka(n, Li(n, t)), n.precision = r, n.rounding = e, lr(de == 2 || de == 3 ? t.neg() : t, r, e, true)) : new n(1) : new n(NaN);
};
V.cubeRoot = V.cbrt = function() {
  var r, e, t, n, i, u, a, o, f, c, s = this, h = s.constructor;
  if (!s.isFinite() || s.isZero()) return new h(s);
  for (pr = false, u = s.s * Lr(s.s * s, 1 / 3), !u || Math.abs(u) == 1 / 0 ? (t = Wr(s.d), r = s.e, (u = (r - t.length + 1) % 3) && (t += u == 1 || u == -2 ? "0" : "00"), u = Lr(t, 1 / 3), r = Qr((r + 1) / 3) - (r % 3 == (r < 0 ? -1 : 2)), u == 1 / 0 ? t = "5e" + r : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + r), n = new h(t), n.s = s.s) : n = new h(u.toString()), a = (r = h.precision) + 3; ; ) if (o = n, f = o.times(o).times(o), c = f.plus(s), n = xr(c.plus(s).times(o), c.plus(f), a + 2, 1), Wr(o.d).slice(0, a) === (t = Wr(n.d)).slice(0, a)) if (t = t.slice(a - 3, a + 1), t == "9999" || !i && t == "4999") {
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
  return xr(this, new this.constructor(r));
};
V.dividedToIntegerBy = V.divToInt = function(r) {
  var e = this, t = e.constructor;
  return lr(xr(e, new t(r), 0, 1, 1), t.precision, t.rounding);
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
  t = a.precision, n = a.rounding, a.precision = t + Math.max(u.e, u.sd()) + 4, a.rounding = 1, i = u.d.length, i < 32 ? (r = Math.ceil(i / 3), e = (1 / bt(4, r)).toString()) : (r = 16, e = "2.3283064365386962890625e-10"), u = qe(a, 1, u.times(e), new a(1), true);
  for (var f, c = r, s = new a(8); c--; ) f = u.times(u), u = o.minus(f.times(s.minus(f.times(s))));
  return lr(u, a.precision = t, a.rounding = n, true);
};
V.hyperbolicSine = V.sinh = function() {
  var r, e, t, n, i = this, u = i.constructor;
  if (!i.isFinite() || i.isZero()) return new u(i);
  if (e = u.precision, t = u.rounding, u.precision = e + Math.max(i.e, i.sd()) + 4, u.rounding = 1, n = i.d.length, n < 3) i = qe(u, 2, i, i, true);
  else {
    r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, i = i.times(1 / bt(5, r)), i = qe(u, 2, i, i, true);
    for (var a, o = new u(5), f = new u(16), c = new u(20); r--; ) a = i.times(i), i = i.times(o.plus(a.times(f.times(a).plus(c))));
  }
  return u.precision = e, u.rounding = t, lr(i, e, t, true);
};
V.hyperbolicTangent = V.tanh = function() {
  var r, e, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, e = n.rounding, n.precision = r + 7, n.rounding = 1, xr(t.sinh(), t.cosh(), n.precision = r, n.rounding = e)) : new n(t.s);
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
  return i.isFinite() ? i.e >= 0 ? new u(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (r = u.precision, e = u.rounding, n = i.sd(), Math.max(n, r) < 2 * -i.e - 1 ? lr(new u(i), r, e, true) : (u.precision = t = n - i.e, i = xr(i.plus(1), new u(1).minus(i), t + r, 1), u.precision = r + 4, u.rounding = 1, i = i.ln(), u.precision = r, u.rounding = e, i.times(0.5))) : new u(NaN);
};
V.inverseSine = V.asin = function() {
  var r, e, t, n, i = this, u = i.constructor;
  return i.isZero() ? new u(i) : (e = i.abs().cmp(1), t = u.precision, n = u.rounding, e !== -1 ? e === 0 ? (r = ce(u, t + 4, n).times(0.5), r.s = i.s, r) : new u(NaN) : (u.precision = t + 6, u.rounding = 1, i = i.div(new u(1).minus(i.times(i)).sqrt().plus(1)).atan(), u.precision = t, u.rounding = n, i.times(2)));
};
V.inverseTangent = V.atan = function() {
  var r, e, t, n, i, u, a, o, f, c = this, s = c.constructor, h = s.precision, p = s.rounding;
  if (c.isFinite()) {
    if (c.isZero()) return new s(c);
    if (c.abs().eq(1) && h + 4 <= Lt) return a = ce(s, h + 4, p).times(0.25), a.s = c.s, a;
  } else {
    if (!c.s) return new s(NaN);
    if (h + 4 <= Lt) return a = ce(s, h + 4, p).times(0.5), a.s = c.s, a;
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
  if (pr = false, o = h + v, a = we(c, o), n = e ? lt(s, o + 10) : we(r, o), f = xr(a, n, o, 1), Xe(f.d, i = h, p)) do
    if (o += 10, a = we(c, o), n = e ? lt(s, o + 10) : we(r, o), f = xr(a, n, o, 1), !u) {
      +Wr(f.d).slice(i + 1, i + 15) + 1 == 1e14 && (f = lr(f, h + 1, 0));
      break;
    }
  while (Xe(f.d, i += 10, p));
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
  return c[0] ? (r.d = c, r.e = Ct(c, t), pr ? lr(r, o, f) : r) : new d(f === 3 ? -0 : 0);
};
V.modulo = V.mod = function(r) {
  var e, t = this, n = t.constructor;
  return r = new n(r), !t.d || !r.s || r.d && !r.d[0] ? new n(NaN) : !r.d || t.d && !t.d[0] ? lr(new n(t), n.precision, n.rounding) : (pr = false, n.modulo == 9 ? (e = xr(t, r.abs(), 0, 3, 1), e.s *= r.s) : e = xr(t, r, 0, n.modulo, 1), e = e.times(r), pr = true, t.minus(e));
};
V.naturalExponential = V.exp = function() {
  return Zt(this);
};
V.naturalLogarithm = V.ln = function() {
  return we(this);
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
  return r.d = c, r.e = Ct(c, n), pr ? lr(r, o, f) : r;
};
V.precision = V.sd = function(r) {
  var e, t = this;
  if (r !== void 0 && r !== !!r && r !== 1 && r !== 0) throw Error(Fe + r);
  return t.d ? (e = Pi(t.d), r && t.e + 1 > e && (e = t.e + 1)) : e = NaN, e;
};
V.round = function() {
  var r = this, e = r.constructor;
  return lr(new e(r), r.e + 1, e.rounding);
};
V.sine = V.sin = function() {
  var r, e, t = this, n = t.constructor;
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, e = n.rounding, n.precision = r + Math.max(t.e, t.sd()) + vr, n.rounding = 1, t = ro(n, Li(n, t)), n.precision = r, n.rounding = e, lr(de > 2 ? t.neg() : t, r, e, true)) : new n(NaN);
};
V.squareRoot = V.sqrt = function() {
  var r, e, t, n, i, u, a = this, o = a.d, f = a.e, c = a.s, s = a.constructor;
  if (c !== 1 || !o || !o[0]) return new s(!c || c < 0 && (!o || o[0]) ? NaN : o ? a : 1 / 0);
  for (pr = false, c = Math.sqrt(+a), c == 0 || c == 1 / 0 ? (e = Wr(o), (e.length + f) % 2 == 0 && (e += "0"), c = Math.sqrt(e), f = Qr((f + 1) / 2) - (f < 0 || f % 2), c == 1 / 0 ? e = "5e" + f : (e = c.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + f), n = new s(e)) : n = new s(c.toString()), t = (f = s.precision) + 3; ; ) if (u = n, n = u.plus(xr(a, u, t + 2, 1)).times(0.5), Wr(u.d).slice(0, t) === (e = Wr(n.d)).slice(0, t)) if (e = e.slice(t - 3, t + 1), e == "9999" || !i && e == "4999") {
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
  return t.isFinite() ? t.isZero() ? new n(t) : (r = n.precision, e = n.rounding, n.precision = r + 10, n.rounding = 1, t = t.sin(), t.s = 1, t = xr(t, new n(1).minus(t.times(t)).sqrt(), r + 10, 0), n.precision = r, n.rounding = e, lr(de == 2 || de == 4 ? t.neg() : t, r, e, true)) : new n(NaN);
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
  return e ? ++t : u.shift(), r.d = u, r.e = Ct(u, t), pr ? lr(r, h.precision, h.rounding) : r;
};
V.toBinary = function(r, e) {
  return jt(this, 2, r, e);
};
V.toDecimalPlaces = V.toDP = function(r, e) {
  var t = this, n = t.constructor;
  return t = new n(t), r === void 0 ? t : (jr(r, 0, Ee), e === void 0 ? e = n.rounding : jr(e, 0, 8), lr(t, r + t.e + 1, e));
};
V.toExponential = function(r, e) {
  var t, n = this, i = n.constructor;
  return r === void 0 ? t = he(n, true) : (jr(r, 0, Ee), e === void 0 ? e = i.rounding : jr(e, 0, 8), n = lr(new i(n), r + 1, e), t = he(n, true, r + 1)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
V.toFixed = function(r, e) {
  var t, n, i = this, u = i.constructor;
  return r === void 0 ? t = he(i) : (jr(r, 0, Ee), e === void 0 ? e = u.rounding : jr(e, 0, 8), n = lr(new u(i), r + i.e + 1, e), t = he(n, false, r + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + t : t;
};
V.toFraction = function(r) {
  var e, t, n, i, u, a, o, f, c, s, h, p, v = this, d = v.d, l = v.constructor;
  if (!d) return new l(v);
  if (c = t = new l(1), n = f = new l(0), e = new l(n), u = e.e = Pi(d) - v.e - 1, a = u % vr, e.d[0] = Lr(10, a < 0 ? vr + a : a), r == null) r = u > 0 ? e : c;
  else {
    if (o = new l(r), !o.isInt() || o.lt(c)) throw Error(Fe + o);
    r = o.gt(e) ? u > 0 ? e : c : o;
  }
  for (pr = false, o = new l(Wr(d)), s = l.precision, l.precision = u = d.length * vr * 2; h = xr(o, e, 0, 1, 1), i = t.plus(h.times(n)), i.cmp(r) != 1; ) t = n, n = i, i = c, c = f.plus(h.times(i)), f = i, i = e, e = o.minus(h.times(i)), o = i;
  return i = xr(r.minus(t), n, 0, 1, 1), f = f.plus(i.times(c)), t = t.plus(i.times(n)), f.s = c.s = v.s, p = xr(c, n, u, 1).minus(v).abs().cmp(xr(f, t, u, 1).minus(v).abs()) < 1 ? [c, n] : [f, t], l.precision = s, pr = true, p;
};
V.toHexadecimal = V.toHex = function(r, e) {
  return jt(this, 16, r, e);
};
V.toNearest = function(r, e) {
  var t = this, n = t.constructor;
  if (t = new n(t), r == null) {
    if (!t.d) return t;
    r = new n(1), e = n.rounding;
  } else {
    if (r = new n(r), e === void 0 ? e = n.rounding : jr(e, 0, 8), !t.d) return r.s ? t : r;
    if (!r.d) return r.s && (r.s = t.s), r;
  }
  return r.d[0] ? (pr = false, t = xr(t, r, 0, e, 1).times(r), pr = true, lr(t)) : (r.s = t.s, t = r), t;
};
V.toNumber = function() {
  return +this;
};
V.toOctal = function(r, e) {
  return jt(this, 8, r, e);
};
V.toPower = V.pow = function(r) {
  var e, t, n, i, u, a, o = this, f = o.constructor, c = +(r = new f(r));
  if (!o.d || !r.d || !o.d[0] || !r.d[0]) return new f(Lr(+o, c));
  if (o = new f(o), o.eq(1)) return o;
  if (n = f.precision, u = f.rounding, r.eq(1)) return lr(o, n, u);
  if (e = Qr(r.e / vr), e >= r.d.length - 1 && (t = c < 0 ? -c : c) <= Ka) return i = qi(f, o, t, n), r.s < 0 ? new f(1).div(i) : lr(i, n, u);
  if (a = o.s, a < 0) {
    if (e < r.d.length - 1) return new f(NaN);
    if (r.d[e] & 1 || (a = 1), o.e == 0 && o.d[0] == 1 && o.d.length == 1) return o.s = a, o;
  }
  return t = Lr(+o, c), e = t == 0 || !isFinite(t) ? Qr(c * (Math.log("0." + Wr(o.d)) / Math.LN10 + o.e + 1)) : new f(t + "").e, e > f.maxE + 1 || e < f.minE - 1 ? new f(e > 0 ? a / 0 : 0) : (pr = false, f.rounding = o.s = 1, t = Math.min(12, (e + "").length), i = Zt(r.times(we(o, n + t)), n), i.d && (i = lr(i, n + 5, 1), Xe(i.d, n, u) && (e = n + 10, i = lr(Zt(r.times(we(o, e + t)), e), e + 5, 1), +Wr(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = lr(i, n + 1, 0)))), i.s = a, pr = true, f.rounding = u, lr(i, n, u));
};
V.toPrecision = function(r, e) {
  var t, n = this, i = n.constructor;
  return r === void 0 ? t = he(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (jr(r, 1, Ee), e === void 0 ? e = i.rounding : jr(e, 0, 8), n = lr(new i(n), r, e), t = he(n, r <= n.e || n.e <= i.toExpNeg, r)), n.isNeg() && !n.isZero() ? "-" + t : t;
};
V.toSignificantDigits = V.toSD = function(r, e) {
  var t = this, n = t.constructor;
  return r === void 0 ? (r = n.precision, e = n.rounding) : (jr(r, 1, Ee), e === void 0 ? e = n.rounding : jr(e, 0, 8)), lr(new n(t), r, e);
};
V.toString = function() {
  var r = this, e = r.constructor, t = he(r, r.e <= e.toExpNeg || r.e >= e.toExpPos);
  return r.isNeg() && !r.isZero() ? "-" + t : t;
};
V.truncated = V.trunc = function() {
  return lr(new this.constructor(this), this.e + 1, 1);
};
V.valueOf = V.toJSON = function() {
  var r = this, e = r.constructor, t = he(r, r.e <= e.toExpNeg || r.e >= e.toExpPos);
  return r.isNeg() ? "-" + t : t;
};
function Wr(r) {
  var e, t, n, i = r.length - 1, u = "", a = r[0];
  if (i > 0) {
    for (u += a, e = 1; e < i; e++) n = r[e] + "", t = vr - n.length, t && (u += ye(t)), u += n;
    a = r[e], n = a + "", t = vr - n.length, t && (u += ye(t));
  } else if (a === 0) return "0";
  for (; a % 10 === 0; ) a /= 10;
  return u + a;
}
function jr(r, e, t) {
  if (r !== ~~r || r < e || r > t) throw Error(Fe + r);
}
function Xe(r, e, t, n) {
  var i, u, a, o;
  for (u = r[0]; u >= 10; u /= 10) --e;
  return --e < 0 ? (e += vr, i = 0) : (i = Math.ceil((e + 1) / vr), e %= vr), u = Lr(10, vr - e), o = r[i] % u | 0, n == null ? e < 3 ? (e == 0 ? o = o / 100 | 0 : e == 1 && (o = o / 10 | 0), a = t < 4 && o == 99999 || t > 3 && o == 49999 || o == 5e4 || o == 0) : a = (t < 4 && o + 1 == u || t > 3 && o + 1 == u / 2) && (r[i + 1] / u / 100 | 0) == Lr(10, e - 2) - 1 || (o == u / 2 || o == 0) && (r[i + 1] / u / 100 | 0) == 0 : e < 4 ? (e == 0 ? o = o / 1e3 | 0 : e == 1 ? o = o / 100 | 0 : e == 2 && (o = o / 10 | 0), a = (n || t < 4) && o == 9999 || !n && t > 3 && o == 4999) : a = ((n || t < 4) && o + 1 == u || !n && t > 3 && o + 1 == u / 2) && (r[i + 1] / u / 1e3 | 0) == Lr(10, e - 3) - 1, a;
}
function at(r, e, t) {
  for (var n, i = [0], u, a = 0, o = r.length; a < o; ) {
    for (u = i.length; u--; ) i[u] *= e;
    for (i[0] += Rt.indexOf(r.charAt(a++)), n = 0; n < i.length; n++) i[n] > t - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / t | 0, i[n] %= t);
  }
  return i.reverse();
}
function ka(r, e) {
  var t, n, i;
  if (e.isZero()) return e;
  n = e.d.length, n < 32 ? (t = Math.ceil(n / 3), i = (1 / bt(4, t)).toString()) : (t = 16, i = "2.3283064365386962890625e-10"), r.precision += t, e = qe(r, 1, e.times(i), new r(1));
  for (var u = t; u--; ) {
    var a = e.times(e);
    e = a.times(a).minus(a).times(8).plus(1);
  }
  return r.precision -= t, e;
}
var xr = /* @__PURE__ */ function() {
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
    var c, s, h, p, v, d, l, D, m, C, g, b, A, w, _, F, y, M, B, S, z = n.constructor, x = n.s == i.s ? 1 : -1, O = n.d, T = i.d;
    if (!O || !O[0] || !T || !T[0]) return new z(!n.s || !i.s || (O ? T && O[0] == T[0] : !T) ? NaN : O && O[0] == 0 || !T ? x * 0 : x / 0);
    for (f ? (v = 1, s = n.e - i.e) : (f = le, v = vr, s = Qr(n.e / v) - Qr(i.e / v)), B = T.length, y = O.length, m = new z(x), C = m.d = [], h = 0; T[h] == (O[h] || 0); h++) ;
    if (T[h] > (O[h] || 0) && s--, u == null ? (w = u = z.precision, a = z.rounding) : o ? w = u + (n.e - i.e) + 1 : w = u, w < 0) C.push(1), d = true;
    else {
      if (w = w / v + 2 | 0, h = 0, B == 1) {
        for (p = 0, T = T[0], w++; (h < y || p) && w--; h++) _ = p * f + (O[h] || 0), C[h] = _ / T | 0, p = _ % T | 0;
        d = p || h < y;
      } else {
        for (p = f / (T[0] + 1) | 0, p > 1 && (T = r(T, p, f), O = r(O, p, f), B = T.length, y = O.length), F = B, g = O.slice(0, B), b = g.length; b < B; ) g[b++] = 0;
        S = T.slice(), S.unshift(0), M = T[0], T[1] >= f / 2 && ++M;
        do
          p = 0, c = e(T, g, B, b), c < 0 ? (A = g[0], B != b && (A = A * f + (g[1] || 0)), p = A / M | 0, p > 1 ? (p >= f && (p = f - 1), l = r(T, p, f), D = l.length, b = g.length, c = e(l, g, D, b), c == 1 && (p--, t(l, B < D ? S : T, D, f))) : (p == 0 && (c = p = 1), l = T.slice()), D = l.length, D < b && l.unshift(0), t(g, l, b, f), c == -1 && (b = g.length, c = e(T, g, B, b), c < 1 && (p++, t(g, B < b ? S : T, b, f))), b = g.length) : c === 0 && (p++, g = [0]), C[h++] = p, c && g[0] ? g[b++] = O[F] || 0 : (g = [O[F]], b = 1);
        while ((F++ < y || g[0] !== void 0) && w--);
        d = g[0] !== void 0;
      }
      C[0] || C.shift();
    }
    if (v == 1) m.e = s, Ti = d;
    else {
      for (h = 1, p = C[0]; p >= 10; p /= 10) h++;
      m.e = h + s * v - 1, lr(m, o ? u + m.e + 1 : u, a, d);
    }
    return m;
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
function he(r, e, t) {
  if (!r.isFinite()) return Ui(r);
  var n, i = r.e, u = Wr(r.d), a = u.length;
  return e ? (t && (n = t - a) > 0 ? u = u.charAt(0) + "." + u.slice(1) + ye(n) : a > 1 && (u = u.charAt(0) + "." + u.slice(1)), u = u + (r.e < 0 ? "e" : "e+") + r.e) : i < 0 ? (u = "0." + ye(-i - 1) + u, t && (n = t - a) > 0 && (u += ye(n))) : i >= a ? (u += ye(i + 1 - a), t && (n = t - i - 1) > 0 && (u = u + "." + ye(n))) : ((n = i + 1) < a && (u = u.slice(0, n) + "." + u.slice(n)), t && (n = t - a) > 0 && (i + 1 === a && (u += "."), u += ye(n))), u;
}
function Ct(r, e) {
  var t = r[0];
  for (e *= vr; t >= 10; t /= 10) e++;
  return e;
}
function lt(r, e, t) {
  if (e > Ha) throw pr = true, t && (r.precision = t), Error(Ii);
  return lr(new r(ft), e, 1, true);
}
function ce(r, e, t) {
  if (e > Lt) throw Error(Ii);
  return lr(new r(ct), e, t, true);
}
function Pi(r) {
  var e = r.length - 1, t = e * vr + 1;
  if (e = r[e], e) {
    for (; e % 10 == 0; e /= 10) t--;
    for (e = r[0]; e >= 10; e /= 10) t++;
  }
  return t;
}
function ye(r) {
  for (var e = ""; r--; ) e += "0";
  return e;
}
function qi(r, e, t, n) {
  var i, u = new r(1), a = Math.ceil(n / vr + 4);
  for (pr = false; ; ) {
    if (t % 2 && (u = u.times(e), An(u.d, a) && (i = true)), t = Qr(t / 2), t === 0) {
      t = u.d.length - 1, i && u.d[t] === 0 && ++u.d[t];
      break;
    }
    e = e.times(e), An(e.d, a);
  }
  return pr = true, u;
}
function wn(r) {
  return r.d[r.d.length - 1] & 1;
}
function Ri(r, e, t) {
  for (var n, i = new r(e[0]), u = 0; ++u < e.length; ) if (n = new r(e[u]), n.s) i[t](n) && (i = n);
  else {
    i = n;
    break;
  }
  return i;
}
function Zt(r, e) {
  var t, n, i, u, a, o, f, c = 0, s = 0, h = 0, p = r.constructor, v = p.rounding, d = p.precision;
  if (!r.d || !r.d[0] || r.e > 17) return new p(r.d ? r.d[0] ? r.s < 0 ? 0 : 1 / 0 : 1 : r.s ? r.s < 0 ? 0 : r : NaN);
  for (e == null ? (pr = false, f = d) : f = e, o = new p(0.03125); r.e > -2; ) r = r.times(o), h += 5;
  for (n = Math.log(Lr(2, h)) / Math.LN10 * 2 + 5 | 0, f += n, t = u = a = new p(1), p.precision = f; ; ) {
    if (u = lr(u.times(r), f, 1), t = t.times(++s), o = a.plus(xr(u, t, f, 1)), Wr(o.d).slice(0, f) === Wr(a.d).slice(0, f)) {
      for (i = h; i--; ) a = lr(a.times(a), f, 1);
      if (e == null) if (c < 3 && Xe(a.d, f - n, v, c)) p.precision = f += 10, t = u = o = new p(1), s = 0, c++;
      else return lr(a, p.precision = d, v, pr = true);
      else return p.precision = d, a;
    }
    a = o;
  }
}
function we(r, e) {
  var t, n, i, u, a, o, f, c, s, h, p, v = 1, d = 10, l = r, D = l.d, m = l.constructor, C = m.rounding, g = m.precision;
  if (l.s < 0 || !D || !D[0] || !l.e && D[0] == 1 && D.length == 1) return new m(D && !D[0] ? -1 / 0 : l.s != 1 ? NaN : D ? 0 : l);
  if (e == null ? (pr = false, s = g) : s = e, m.precision = s += d, t = Wr(D), n = t.charAt(0), Math.abs(u = l.e) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && t.charAt(1) > 3; ) l = l.times(r), t = Wr(l.d), n = t.charAt(0), v++;
    u = l.e, n > 1 ? (l = new m("0." + t), u++) : l = new m(n + "." + t.slice(1));
  } else return c = lt(m, s + 2, g).times(u + ""), l = we(new m(n + "." + t.slice(1)), s - d).plus(c), m.precision = g, e == null ? lr(l, g, C, pr = true) : l;
  for (h = l, f = a = l = xr(l.minus(1), l.plus(1), s, 1), p = lr(l.times(l), s, 1), i = 3; ; ) {
    if (a = lr(a.times(p), s, 1), c = f.plus(xr(a, new m(i), s, 1)), Wr(c.d).slice(0, s) === Wr(f.d).slice(0, s)) if (f = f.times(2), u !== 0 && (f = f.plus(lt(m, s + 2, g).times(u + ""))), f = xr(f, new m(v), s, 1), e == null) if (Xe(f.d, s - d, C, o)) m.precision = s += d, c = a = l = xr(h.minus(1), h.plus(1), s, 1), p = lr(l.times(l), s, 1), i = o = 1;
    else return lr(f, m.precision = g, C, pr = true);
    else return m.precision = g, f;
    f = c, i += 2;
  }
}
function Ui(r) {
  return String(r.s * r.s / 0);
}
function Vt(r, e) {
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
function ja(r, e) {
  var t, n, i, u, a, o, f, c, s;
  if (e.indexOf("_") > -1) {
    if (e = e.replace(/(\d)_(?=\d)/g, "$1"), $i.test(e)) return Vt(r, e);
  } else if (e === "Infinity" || e === "NaN") return +e || (r.s = NaN), r.e = NaN, r.d = null, r;
  if (Xa.test(e)) t = 16, e = e.toLowerCase();
  else if (Qa.test(e)) t = 2;
  else if (Ga.test(e)) t = 8;
  else throw Error(Fe + e);
  for (u = e.search(/p/i), u > 0 ? (f = +e.slice(u + 1), e = e.substring(2, u)) : e = e.slice(2), u = e.indexOf("."), a = u >= 0, n = r.constructor, a && (e = e.replace(".", ""), o = e.length, u = o - u, i = qi(n, new n(t), u, u * 2)), c = at(e, t, le), s = c.length - 1, u = s; c[u] === 0; --u) c.pop();
  return u < 0 ? new n(r.s * 0) : (r.e = Ct(c, s), r.d = c, pr = false, a && (r = xr(r, i, o * 4)), f && (r = r.times(Math.abs(f) < 54 ? Lr(2, f) : Re.pow(2, f))), pr = true, r);
}
function ro(r, e) {
  var t, n = e.d.length;
  if (n < 3) return e.isZero() ? e : qe(r, 2, e, e);
  t = 1.4 * Math.sqrt(n), t = t > 16 ? 16 : t | 0, e = e.times(1 / bt(5, t)), e = qe(r, 2, e, e);
  for (var i, u = new r(5), a = new r(16), o = new r(20); t--; ) i = e.times(e), e = e.times(u.plus(i.times(a.times(i).minus(o))));
  return e;
}
function qe(r, e, t, n, i) {
  var u, a, o, f, c = r.precision, s = Math.ceil(c / vr);
  for (pr = false, f = t.times(t), o = new r(n); ; ) {
    if (a = xr(o.times(f), new r(e++ * e++), c, 1), o = i ? n.plus(a) : n.minus(a), n = xr(a.times(f), new r(e++ * e++), c, 1), a = o.plus(n), a.d[s] !== void 0) {
      for (u = s; a.d[u] === o.d[u] && u--; ) ;
      if (u == -1) break;
    }
    u = o, o = n, n = a, a = u;
  }
  return pr = true, a.d.length = s + 1, a;
}
function bt(r, e) {
  for (var t = r; --e; ) t *= r;
  return t;
}
function Li(r, e) {
  var t, n = e.s < 0, i = ce(r, r.precision, 1), u = i.times(0.5);
  if (e = e.abs(), e.lte(u)) return de = n ? 4 : 1, e;
  if (t = e.divToInt(i), t.isZero()) de = n ? 3 : 2;
  else {
    if (e = e.minus(t.times(i)), e.lte(u)) return de = wn(t) ? n ? 2 : 3 : n ? 4 : 1, e;
    de = wn(t) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return e.minus(i).abs();
}
function jt(r, e, t, n) {
  var i, u, a, o, f, c, s, h, p, v = r.constructor, d = t !== void 0;
  if (d ? (jr(t, 1, Ee), n === void 0 ? n = v.rounding : jr(n, 0, 8)) : (t = v.precision, n = v.rounding), !r.isFinite()) s = Ui(r);
  else {
    for (s = he(r), a = s.indexOf("."), d ? (i = 2, e == 16 ? t = t * 4 - 3 : e == 8 && (t = t * 3 - 2)) : i = e, a >= 0 && (s = s.replace(".", ""), p = new v(1), p.e = s.length - a, p.d = at(he(p), 10, i), p.e = p.d.length), h = at(s, 10, i), u = f = h.length; h[--f] == 0; ) h.pop();
    if (!h[0]) s = d ? "0p+0" : "0";
    else {
      if (a < 0 ? u-- : (r = new v(r), r.d = h, r.e = u, r = xr(r, p, t, n, 0, i), h = r.d, u = r.e, c = Ti), a = h[t], o = i / 2, c = c || h[t + 1] !== void 0, c = n < 4 ? (a !== void 0 || c) && (n === 0 || n === (r.s < 0 ? 3 : 2)) : a > o || a === o && (n === 4 || c || n === 6 && h[t - 1] & 1 || n === (r.s < 0 ? 8 : 7)), h.length = t, c) for (; ++h[--t] > i - 1; ) h[t] = 0, t || (++u, h.unshift(1));
      for (f = h.length; !h[f - 1]; --f) ;
      for (a = 0, s = ""; a < f; a++) s += Rt.charAt(h[a]);
      if (d) {
        if (f > 1) if (e == 16 || e == 8) {
          for (a = e == 16 ? 4 : 3, --f; f % a; f++) s += "0";
          for (h = at(s, i, e), f = h.length; !h[f - 1]; --f) ;
          for (a = 1, s = "1."; a < f; a++) s += Rt.charAt(h[a]);
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
function An(r, e) {
  if (r.length > e) return r.length = e, true;
}
function eo(r) {
  return new this(r).abs();
}
function to(r) {
  return new this(r).acos();
}
function no(r) {
  return new this(r).acosh();
}
function io(r, e) {
  return new this(r).plus(e);
}
function uo(r) {
  return new this(r).asin();
}
function ao(r) {
  return new this(r).asinh();
}
function oo(r) {
  return new this(r).atan();
}
function so(r) {
  return new this(r).atanh();
}
function fo(r, e) {
  r = new this(r), e = new this(e);
  var t, n = this.precision, i = this.rounding, u = n + 4;
  return !r.s || !e.s ? t = new this(NaN) : !r.d && !e.d ? (t = ce(this, u, 1).times(e.s > 0 ? 0.25 : 0.75), t.s = r.s) : !e.d || r.isZero() ? (t = e.s < 0 ? ce(this, n, i) : new this(0), t.s = r.s) : !r.d || e.isZero() ? (t = ce(this, u, 1).times(0.5), t.s = r.s) : e.s < 0 ? (this.precision = u, this.rounding = 1, t = this.atan(xr(r, e, u, 1)), e = ce(this, u, 1), this.precision = n, this.rounding = i, t = r.s < 0 ? t.minus(e) : t.plus(e)) : t = this.atan(xr(r, e, u, 1)), t;
}
function co(r) {
  return new this(r).cbrt();
}
function lo(r) {
  return lr(r = new this(r), r.e + 1, 2);
}
function ho(r, e, t) {
  return new this(r).clamp(e, t);
}
function vo(r) {
  if (!r || typeof r != "object") throw Error(Et + "Object expected");
  var e, t, n, i = r.defaults === true, u = ["precision", 1, Ee, "rounding", 0, 8, "toExpNeg", -9e15, 0, "toExpPos", 0, qt, "maxE", 0, qt, "minE", -9e15, 0, "modulo", 0, 9];
  for (e = 0; e < u.length; e += 3) if (t = u[e], i && (this[t] = Ut[t]), (n = r[t]) !== void 0) if (Qr(n) === n && n >= u[e + 1] && n <= u[e + 2]) this[t] = n;
  else throw Error(Fe + t + ": " + n);
  if (t = "crypto", i && (this[t] = Ut[t]), (n = r[t]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[t] = true;
  else throw Error(zi);
  else this[t] = false;
  else throw Error(Fe + t + ": " + n);
  return this;
}
function po(r) {
  return new this(r).cos();
}
function Do(r) {
  return new this(r).cosh();
}
function Zi(r) {
  var e, t, n;
  function i(u) {
    var a, o, f, c = this;
    if (!(c instanceof i)) return new i(u);
    if (c.constructor = i, Fn(u)) {
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
      return Vt(c, u.toString());
    } else if (f !== "string") throw Error(Fe + u);
    return (o = u.charCodeAt(0)) === 45 ? (u = u.slice(1), c.s = -1) : (o === 43 && (u = u.slice(1)), c.s = 1), $i.test(u) ? Vt(c, u) : ja(c, u);
  }
  if (i.prototype = V, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = vo, i.clone = Zi, i.isDecimal = Fn, i.abs = eo, i.acos = to, i.acosh = no, i.add = io, i.asin = uo, i.asinh = ao, i.atan = oo, i.atanh = so, i.atan2 = fo, i.cbrt = co, i.ceil = lo, i.clamp = ho, i.cos = po, i.cosh = Do, i.div = mo, i.exp = go, i.floor = yo, i.hypot = wo, i.ln = Ao, i.log = Fo, i.log10 = Co, i.log2 = Eo, i.max = bo, i.min = _o, i.mod = Bo, i.mul = Mo, i.pow = So, i.random = No, i.round = xo, i.sign = To, i.sin = Io, i.sinh = zo, i.sqrt = Oo, i.sub = $o, i.sum = Po, i.tan = qo, i.tanh = Ro, i.trunc = Uo, r === void 0 && (r = {}), r && r.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], e = 0; e < n.length; ) r.hasOwnProperty(t = n[e++]) || (r[t] = this[t]);
  return i.config(r), i;
}
function mo(r, e) {
  return new this(r).div(e);
}
function go(r) {
  return new this(r).exp();
}
function yo(r) {
  return lr(r = new this(r), r.e + 1, 3);
}
function wo() {
  var r, e, t = new this(0);
  for (pr = false, r = 0; r < arguments.length; ) if (e = new this(arguments[r++]), e.d) t.d && (t = t.plus(e.times(e)));
  else {
    if (e.s) return pr = true, new this(1 / 0);
    t = e;
  }
  return pr = true, t.sqrt();
}
function Fn(r) {
  return r instanceof Re || r && r.toStringTag === Oi || false;
}
function Ao(r) {
  return new this(r).ln();
}
function Fo(r, e) {
  return new this(r).log(e);
}
function Eo(r) {
  return new this(r).log(2);
}
function Co(r) {
  return new this(r).log(10);
}
function bo() {
  return Ri(this, arguments, "lt");
}
function _o() {
  return Ri(this, arguments, "gt");
}
function Bo(r, e) {
  return new this(r).mod(e);
}
function Mo(r, e) {
  return new this(r).mul(e);
}
function So(r, e) {
  return new this(r).pow(e);
}
function No(r) {
  var e, t, n, i, u = 0, a = new this(1), o = [];
  if (r === void 0 ? r = this.precision : jr(r, 1, Ee), n = Math.ceil(r / vr), this.crypto) if (crypto.getRandomValues) for (e = crypto.getRandomValues(new Uint32Array(n)); u < n; ) i = e[u], i >= 429e7 ? e[u] = crypto.getRandomValues(new Uint32Array(1))[0] : o[u++] = i % 1e7;
  else if (crypto.randomBytes) {
    for (e = crypto.randomBytes(n *= 4); u < n; ) i = e[u] + (e[u + 1] << 8) + (e[u + 2] << 16) + ((e[u + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(e, u) : (o.push(i % 1e7), u += 4);
    u = n / 4;
  } else throw Error(zi);
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
function xo(r) {
  return lr(r = new this(r), r.e + 1, this.rounding);
}
function To(r) {
  return r = new this(r), r.d ? r.d[0] ? r.s : 0 * r.s : r.s || NaN;
}
function Io(r) {
  return new this(r).sin();
}
function zo(r) {
  return new this(r).sinh();
}
function Oo(r) {
  return new this(r).sqrt();
}
function $o(r, e) {
  return new this(r).sub(e);
}
function Po() {
  var r = 0, e = arguments, t = new this(e[r]);
  for (pr = false; t.s && ++r < e.length; ) t = t.plus(e[r]);
  return pr = true, lr(t, this.precision, this.rounding);
}
function qo(r) {
  return new this(r).tan();
}
function Ro(r) {
  return new this(r).tanh();
}
function Uo(r) {
  return lr(r = new this(r), r.e + 1, 1);
}
V[Symbol.for("nodejs.util.inspect.custom")] = V.toString;
V[Symbol.toStringTag] = "Decimal";
var Re = V.constructor = Zi(Ut);
ft = new Re(ft);
ct = new Re(ct);
var Lo = "BigNumber", Zo = ["?on", "config"], Vo = rr(Lo, Zo, (r) => {
  var { on: e, config: t } = r, n = Re.clone({ precision: t.precision, modulo: Re.EUCLID });
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
}, ie = Math.sinh || function(r) {
  return Math.abs(r) < 1e-9 ? r : (Math.exp(r) - Math.exp(-r)) * 0.5;
}, Wo = function(r) {
  const e = Math.PI / 4;
  if (-e > r || r > e) return Math.cos(r) - 1;
  const t = r * r;
  return t * (t * (t * (t * (t * (t * (t * (t / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - 1 / 2);
}, zt = function(r, e) {
  return r = Math.abs(r), e = Math.abs(e), r < e && ([r, e] = [e, r]), r < 1e8 ? Math.sqrt(r * r + e * e) : (e /= r, r * Math.sqrt(1 + e * e));
}, ze = function() {
  throw SyntaxError("Invalid Param");
};
function Ot(r, e) {
  const t = Math.abs(r), n = Math.abs(e);
  return r === 0 ? Math.log(n) : e === 0 ? Math.log(t) : t < 3e3 && n < 3e3 ? Math.log(r * r + e * e) * 0.5 : (r = r * 0.5, e = e * 0.5, 0.5 * Math.log(r * r + e * e) + Math.LN2);
}
const Jo = { re: 0, im: 0 }, be = function(r, e) {
  const t = Jo;
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
      } else r.length === 2 ? (t.re = r[0], t.im = r[1]) : ze();
      break;
    case "string":
      t.im = t.re = 0;
      const n = r.replace(/_/g, "").match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);
      let i = 1, u = 0;
      n === null && ze();
      for (let a = 0; a < n.length; a++) {
        const o = n[a];
        o === " " || o === "	" || o === `
` || (o === "+" ? i++ : o === "-" ? u++ : o === "i" || o === "I" ? (i + u === 0 && ze(), n[a + 1] !== " " && !isNaN(n[a + 1]) ? (t.im += parseFloat((u % 2 ? "-" : "") + n[a + 1]), a++) : t.im += parseFloat((u % 2 ? "-" : "") + "1"), i = u = 0) : ((i + u === 0 || isNaN(o)) && ze(), n[a + 1] === "i" || n[a + 1] === "I" ? (t.im += parseFloat((u % 2 ? "-" : "") + o), a++) : t.re += parseFloat((u % 2 ? "-" : "") + o), i = u = 0));
      }
      i + u > 0 && ze();
      break;
    case "number":
      t.im = 0, t.re = r;
      break;
    default:
      ze();
  }
  return isNaN(t.re) || isNaN(t.im), t;
};
function P(r, e) {
  if (!(this instanceof P)) return new P(r, e);
  const t = be(r, e);
  this.re = t.re, this.im = t.im;
}
P.prototype = { re: 0, im: 0, sign: function() {
  const r = zt(this.re, this.im);
  return new P(this.re / r, this.im / r);
}, add: function(r, e) {
  const t = be(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im));
  return n || i ? n && i ? P.NAN : P.INFINITY : new P(this.re + t.re, this.im + t.im);
}, sub: function(r, e) {
  const t = be(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im));
  return n || i ? n && i ? P.NAN : P.INFINITY : new P(this.re - t.re, this.im - t.im);
}, mul: function(r, e) {
  const t = be(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im)), u = this.re === 0 && this.im === 0, a = t.re === 0 && t.im === 0;
  return n && a || i && u ? P.NAN : n || i ? P.INFINITY : t.im === 0 && this.im === 0 ? new P(this.re * t.re, 0) : new P(this.re * t.re - this.im * t.im, this.re * t.im + this.im * t.re);
}, div: function(r, e) {
  const t = be(r, e), n = this.isInfinite(), i = !(isFinite(t.re) && isFinite(t.im)), u = this.re === 0 && this.im === 0, a = t.re === 0 && t.im === 0;
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
  const t = be(r, e), n = this.re === 0 && this.im === 0;
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
  const u = Math.atan2(this.im, this.re), a = Ot(this.re, this.im);
  let o = Math.exp(t.re * a - t.im * u), f = t.im * a + t.re * u;
  return new P(o * Math.cos(f), o * Math.sin(f));
}, sqrt: function() {
  const r = this.re, e = this.im;
  if (e === 0) return r >= 0 ? new P(Math.sqrt(r), 0) : new P(0, Math.sqrt(-r));
  const t = zt(r, e);
  let n = Math.sqrt(0.5 * (t + Math.abs(r))), i = Math.abs(e) / (2 * n);
  return r >= 0 ? new P(n, e < 0 ? -i : i) : new P(i, e < 0 ? -n : n);
}, exp: function() {
  const r = Math.exp(this.re);
  return this.im === 0 ? new P(r, 0) : new P(r * Math.cos(this.im), r * Math.sin(this.im));
}, expm1: function() {
  const r = this.re, e = this.im;
  return new P(Math.expm1(r) * Math.cos(e) + Wo(e), Math.exp(r) * Math.sin(e));
}, log: function() {
  const r = this.re, e = this.im;
  return e === 0 && r > 0 ? new P(Math.log(r), 0) : new P(Ot(r, e), Math.atan2(e, r));
}, abs: function() {
  return zt(this.re, this.im);
}, arg: function() {
  return Math.atan2(this.im, this.re);
}, sin: function() {
  const r = this.re, e = this.im;
  return new P(Math.sin(r) * Yr(e), Math.cos(r) * ie(e));
}, cos: function() {
  const r = this.re, e = this.im;
  return new P(Math.cos(r) * Yr(e), -Math.sin(r) * ie(e));
}, tan: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Math.cos(r) + Yr(e);
  return new P(Math.sin(r) / t, ie(e) / t);
}, cot: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Math.cos(r) - Yr(e);
  return new P(-Math.sin(r) / t, ie(e) / t);
}, sec: function() {
  const r = this.re, e = this.im, t = 0.5 * Yr(2 * e) + 0.5 * Math.cos(2 * r);
  return new P(Math.cos(r) * Yr(e) / t, Math.sin(r) * ie(e) / t);
}, csc: function() {
  const r = this.re, e = this.im, t = 0.5 * Yr(2 * e) - 0.5 * Math.cos(2 * r);
  return new P(Math.sin(r) * Yr(e) / t, -Math.cos(r) * ie(e) / t);
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
  return new P(ie(r) * Math.cos(e), Yr(r) * Math.sin(e));
}, cosh: function() {
  const r = this.re, e = this.im;
  return new P(Yr(r) * Math.cos(e), ie(r) * Math.sin(e));
}, tanh: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Yr(r) + Math.cos(e);
  return new P(ie(r) / t, Math.sin(e) / t);
}, coth: function() {
  const r = 2 * this.re, e = 2 * this.im, t = Yr(r) - Math.cos(e);
  return new P(ie(r) / t, -Math.sin(e) / t);
}, csch: function() {
  const r = this.re, e = this.im, t = Math.cos(2 * e) - Yr(2 * r);
  return new P(-2 * ie(r) * Math.cos(e) / t, 2 * Yr(r) * Math.sin(e) / t);
}, sech: function() {
  const r = this.re, e = this.im, t = Math.cos(2 * e) + Yr(2 * r);
  return new P(2 * Yr(r) * Math.cos(e) / t, -2 * ie(r) * Math.sin(e) / t);
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
  return a.re = Ot(a.re, a.im) / 2, a.im = Math.atan2(a.im, o) / 2, t && (a.im = -a.im), a;
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
  const t = be(r, e);
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
var Yo = "Complex", Qo = [], Xo = rr(Yo, Qo, () => (Object.defineProperty(P, "name", { value: "Complex" }), P.prototype.constructor = P, P.prototype.type = "Complex", P.prototype.isComplex = true, P.prototype.toJSON = function() {
  return { mathjs: "Complex", re: this.re, im: this.im };
}, P.prototype.toPolar = function() {
  return { r: this.abs(), phi: this.arg() };
}, P.prototype.format = function(r) {
  var e = "", t = this.im, n = this.re, i = Pt(this.re, r), u = Pt(this.im, r), a = Nr(r) ? r : r ? r.precision : null;
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
      if (Nr(t)) {
        if (Ei(n) && n.hasBase("ANGLE") && (n = n.toNumber("rad")), Nr(n)) return new P({ r: t, phi: n });
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
const cr = BigInt(0), mr = BigInt(1), Ge = BigInt(2), Wt = BigInt(5), kr = BigInt(10), Go = 2e3, ir = { s: mr, n: cr, d: mr };
function pe(r, e) {
  try {
    r = BigInt(r);
  } catch {
    throw ge();
  }
  return r * e;
}
function se(r) {
  return typeof r == "bigint" ? r : Math.floor(r);
}
function $r(r, e) {
  if (e === cr) throw rn();
  const t = Object.create(ue.prototype);
  t.s = r < cr ? -mr : mr, r = r < cr ? -r : r;
  const n = _e(r, e);
  return t.n = r / n, t.d = e / n, t;
}
function Oe(r) {
  const e = {};
  let t = r, n = Ge, i = Wt - mr;
  for (; i <= t; ) {
    for (; t % n === cr; ) t /= n, e[n] = (e[n] || cr) + mr;
    i += mr + Ge * n++;
  }
  return t !== r ? t > 1 && (e[t] = (e[t] || cr) + mr) : e[r] = (e[r] || cr) + mr, e;
}
const Vr = function(r, e) {
  let t = cr, n = mr, i = mr;
  if (r != null) if (e !== void 0) {
    if (typeof r == "bigint") t = r;
    else {
      if (isNaN(r)) throw ge();
      if (r % 1 !== 0) throw En();
      t = BigInt(r);
    }
    if (typeof e == "bigint") n = e;
    else {
      if (isNaN(e)) throw ge();
      if (e % 1 !== 0) throw En();
      n = BigInt(e);
    }
    i = t * n;
  } else if (typeof r == "object") {
    if ("d" in r && "n" in r) t = BigInt(r.n), n = BigInt(r.d), "s" in r && (t *= BigInt(r.s));
    else if (0 in r) t = BigInt(r[0]), 1 in r && (n = BigInt(r[1]));
    else if (typeof r == "bigint") t = r;
    else throw ge();
    i = t * n;
  } else if (typeof r == "number") {
    if (isNaN(r)) throw ge();
    if (r < 0 && (i = -mr, r = -r), r % 1 === 0) t = BigInt(r);
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
    let u = 0, a = cr, o = cr, f = cr, c = mr, s = mr, h = r.replace(/_/g, "").match(/\d+|./g);
    if (h === null) throw ge();
    if (h[u] === "-" ? (i = -mr, u++) : h[u] === "+" && u++, h.length === u + 1 ? o = pe(h[u++], i) : h[u + 1] === "." || h[u] === "." ? (h[u] !== "." && (a = pe(h[u++], i)), u++, (u + 1 === h.length || h[u + 1] === "(" && h[u + 3] === ")" || h[u + 1] === "'" && h[u + 3] === "'") && (o = pe(h[u], i), c = kr ** BigInt(h[u].length), u++), (h[u] === "(" && h[u + 2] === ")" || h[u] === "'" && h[u + 2] === "'") && (f = pe(h[u + 1], i), s = kr ** BigInt(h[u + 1].length) - mr, u += 3)) : h[u + 1] === "/" || h[u + 1] === ":" ? (o = pe(h[u], i), c = pe(h[u + 2], mr), u += 3) : h[u + 3] === "/" && h[u + 1] === " " && (a = pe(h[u], i), o = pe(h[u + 2], i), c = pe(h[u + 4], mr), u += 5), h.length <= u) n = c * s, i = t = f + n * a + s * o;
    else throw ge();
  } else if (typeof r == "bigint") t = r, i = r, n = mr;
  else throw ge();
  if (n === cr) throw rn();
  ir.s = i < cr ? -mr : mr, ir.n = t < cr ? -t : t, ir.d = n < cr ? -n : n;
};
function Ko(r, e, t) {
  let n = mr;
  for (; e > cr; r = r * r % t, e >>= mr) e & mr && (n = n * r % t);
  return n;
}
function Ho(r, e) {
  for (; e % Ge === cr; e /= Ge) ;
  for (; e % Wt === cr; e /= Wt) ;
  if (e === mr) return cr;
  let t = kr % e, n = 1;
  for (; t !== mr; n++) if (t = t * kr % e, n > Go) return cr;
  return BigInt(n);
}
function ko(r, e, t) {
  let n = mr, i = Ko(kr, t, e);
  for (let u = 0; u < 300; u++) {
    if (n === i) return BigInt(u);
    n = n * kr % e, i = i * kr % e;
  }
  return 0;
}
function _e(r, e) {
  if (!r) return e;
  if (!e) return r;
  for (; ; ) {
    if (r %= e, !r) return e;
    if (e %= r, !e) return r;
  }
}
function ue(r, e) {
  if (Vr(r, e), this instanceof ue) r = _e(ir.d, ir.n), this.s = ir.s, this.n = ir.n / r, this.d = ir.d / r;
  else return $r(ir.s * ir.n, ir.d);
}
var rn = function() {
  return new Error("Division by Zero");
}, ge = function() {
  return new Error("Invalid argument");
}, En = function() {
  return new Error("Parameters must be integer");
};
ue.prototype = { s: mr, n: cr, d: mr, abs: function() {
  return $r(this.n, this.d);
}, neg: function() {
  return $r(-this.s * this.n, this.d);
}, add: function(r, e) {
  return Vr(r, e), $r(this.s * this.n * ir.d + ir.s * this.d * ir.n, this.d * ir.d);
}, sub: function(r, e) {
  return Vr(r, e), $r(this.s * this.n * ir.d - ir.s * this.d * ir.n, this.d * ir.d);
}, mul: function(r, e) {
  return Vr(r, e), $r(this.s * ir.s * this.n * ir.n, this.d * ir.d);
}, div: function(r, e) {
  return Vr(r, e), $r(this.s * ir.s * this.n * ir.d, this.d * ir.n);
}, clone: function() {
  return $r(this.s * this.n, this.d);
}, mod: function(r, e) {
  if (r === void 0) return $r(this.s * this.n % this.d, mr);
  if (Vr(r, e), cr === ir.n * this.d) throw rn();
  return $r(this.s * (ir.d * this.n) % (ir.n * this.d), ir.d * this.d);
}, gcd: function(r, e) {
  return Vr(r, e), $r(_e(ir.n, this.n) * _e(ir.d, this.d), ir.d * this.d);
}, lcm: function(r, e) {
  return Vr(r, e), ir.n === cr && this.n === cr ? $r(cr, mr) : $r(ir.n * this.n, _e(ir.n, this.n) * _e(ir.d, this.d));
}, inverse: function() {
  return $r(this.s * this.d, this.n);
}, pow: function(r, e) {
  if (Vr(r, e), ir.d === mr) return ir.s < cr ? $r((this.s * this.d) ** ir.n, this.n ** ir.n) : $r((this.s * this.n) ** ir.n, this.d ** ir.n);
  if (this.s < cr) return null;
  let t = Oe(this.n), n = Oe(this.d), i = mr, u = mr;
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
  return ir.s < cr ? $r(u, i) : $r(i, u);
}, log: function(r, e) {
  if (Vr(r, e), this.s <= cr || ir.s <= cr) return null;
  const t = {}, n = Oe(ir.n), i = Oe(ir.d), u = Oe(this.n), a = Oe(this.d);
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
    const d = _e(p, v);
    if (p /= d, v /= d, o === null && f === null) o = p, f = v;
    else if (p * f !== o * v) return null;
  }
  return o !== null && f !== null ? $r(o, f) : null;
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
  return r = kr ** BigInt(r || 0), $r(se(this.s * r * this.n / this.d) + (r * this.n % this.d > cr && this.s >= cr ? mr : cr), r);
}, floor: function(r) {
  return r = kr ** BigInt(r || 0), $r(se(this.s * r * this.n / this.d) - (r * this.n % this.d > cr && this.s < cr ? mr : cr), r);
}, round: function(r) {
  return r = kr ** BigInt(r || 0), $r(se(this.s * r * this.n / this.d) + this.s * ((this.s >= cr ? mr : cr) + Ge * (r * this.n % this.d) > this.d ? mr : cr), r);
}, roundTo: function(r, e) {
  Vr(r, e);
  const t = this.n * ir.d, n = this.d * ir.n, i = t % n;
  let u = se(t / n);
  return i + i >= n && u++, $r(this.s * u * ir.n, ir.d);
}, divisible: function(r, e) {
  return Vr(r, e), !(!(ir.n * this.d) || this.n * ir.d % (ir.n * this.d));
}, valueOf: function() {
  return Number(this.s * this.n) / Number(this.d);
}, toString: function(r) {
  let e = this.n, t = this.d;
  r = r || 15;
  let n = Ho(e, t), i = ko(e, t, n), u = this.s < cr ? "-" : "";
  if (u += se(e / t), e %= t, e *= kr, e && (u += "."), n) {
    for (let a = i; a--; ) u += se(e / t), e %= t, e *= kr;
    u += "(";
    for (let a = n; a--; ) u += se(e / t), e %= t, e *= kr;
    u += ")";
  } else for (let a = r; e && a--; ) u += se(e / t), e %= t, e *= kr;
  return u;
}, toFraction: function(r) {
  let e = this.n, t = this.d, n = this.s < cr ? "-" : "";
  if (t === mr) n += e;
  else {
    let i = se(e / t);
    r && i > cr && (n += i, n += " ", e %= t), n += e, n += "/", n += t;
  }
  return n;
}, toLatex: function(r) {
  let e = this.n, t = this.d, n = this.s < cr ? "-" : "";
  if (t === mr) n += e;
  else {
    let i = se(e / t);
    r && i > cr && (n += i, e %= t), n += "\\frac{", n += e, n += "}{", n += t, n += "}";
  }
  return n;
}, toContinued: function() {
  let r = this.n, e = this.d, t = [];
  do {
    t.push(se(r / e));
    let n = r % e;
    r = e, e = n;
  } while (r !== mr);
  return t;
}, simplify: function(r) {
  const e = BigInt(1 / (r || 1e-3) | 0), t = this.abs(), n = t.toContinued();
  for (let i = 1; i < n.length; i++) {
    let u = $r(n[i - 1], mr);
    for (let o = i - 2; o >= 0; o--) u = u.inverse().add(n[o]);
    let a = u.sub(t);
    if (a.n * e < a.d) return u.mul(this.s);
  }
  return this;
} };
var jo = "Fraction", rs = [], es = rr(jo, rs, () => (Object.defineProperty(ue, "name", { value: "Fraction" }), ue.prototype.constructor = ue, ue.prototype.type = "Fraction", ue.prototype.isFraction = true, ue.prototype.toJSON = function() {
  return { mathjs: "Fraction", n: String(this.s * this.n), d: String(this.d) };
}, ue.fromJSON = function(r) {
  return new ue(r);
}, ue), { isClass: true }), ts = "Matrix", ns = [], is = rr(ts, ns, () => {
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
function $t(r, e, t) {
  var n = r.constructor, i = new n(2), u = "";
  if (t) {
    if (t < 1) throw new Error("size must be in greater than 0");
    if (!Ir(t)) throw new Error("size must be an integer");
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
function us(r, e) {
  if (typeof e == "function") return e(r);
  if (!r.isFinite()) return r.isNaN() ? "NaN" : r.gt(0) ? "Infinity" : "-Infinity";
  var { notation: t, precision: n, wordSize: i } = Si(e);
  switch (t) {
    case "fixed":
      return os(r, n);
    case "exponential":
      return Cn(r, n);
    case "engineering":
      return as(r, n);
    case "bin":
      return $t(r, 2, i);
    case "oct":
      return $t(r, 8, i);
    case "hex":
      return $t(r, 16, i);
    case "auto": {
      var u = bn(e == null ? void 0 : e.lowerExp, -3), a = bn(e == null ? void 0 : e.upperExp, 5);
      if (r.isZero()) return "0";
      var o, f = r.toSignificantDigits(n), c = f.e;
      return c >= u && c < a ? o = f.toFixed() : o = Cn(r, n), o.replace(/((\.\d*?)(0+))($|e)/, function() {
        var s = arguments[2], h = arguments[4];
        return s !== "." ? s + h : h;
      });
    }
    default:
      throw new Error('Unknown notation "' + t + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
  }
}
function as(r, e) {
  var t = r.e, n = t % 3 === 0 ? t : t < 0 ? t - 3 - t % 3 : t - t % 3, i = r.mul(Math.pow(10, -n)), u = i.toPrecision(e);
  if (u.includes("e")) {
    var a = r.constructor;
    u = new a(u).toFixed();
  }
  return u + "e" + (t >= 0 ? "+" : "") + n.toString();
}
function Cn(r, e) {
  return e !== void 0 ? r.toExponential(e - 1) : r.toExponential();
}
function os(r, e) {
  return r.toFixed(e);
}
function bn(r, e) {
  return Nr(r) ? r : Rr(r) ? r.toNumber() : e;
}
function Or(r, e) {
  var t = ss(r, e);
  return e && typeof e == "object" && "truncate" in e && t.length > e.truncate ? t.substring(0, e.truncate - 3) + "..." : t;
}
function ss(r, e) {
  if (typeof r == "number") return Pt(r, e);
  if (Rr(r)) return us(r, e);
  if (fs(r)) return !e || e.fraction !== "decimal" ? "".concat(r.s * r.n, "/").concat(r.d) : r.toString();
  if (Array.isArray(r)) return Vi(r, e);
  if (fe(r)) return _n(r);
  if (typeof r == "function") return r.syntax ? String(r.syntax) : "function";
  if (r && typeof r == "object") {
    if (typeof r.format == "function") return r.format(e);
    if (r && r.toString(e) !== {}.toString()) return r.toString(e);
    var t = Object.keys(r).map((n) => _n(n) + ": " + Or(r[n], e));
    return "{" + t.join(", ") + "}";
  }
  return String(r);
}
function _n(r) {
  for (var e = String(r), t = "", n = 0; n < e.length; ) {
    var i = e.charAt(n);
    t += i in Bn ? Bn[i] : i, n++;
  }
  return '"' + t + '"';
}
var Bn = { '"': '\\"', "\\": "\\\\", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t" };
function Vi(r, e) {
  if (Array.isArray(r)) {
    for (var t = "[", n = r.length, i = 0; i < n; i++) i !== 0 && (t += ", "), t += Vi(r[i], e);
    return t += "]", t;
  } else return Or(r, e);
}
function fs(r) {
  return r && typeof r == "object" && typeof r.s == "bigint" && typeof r.n == "bigint" && typeof r.d == "bigint" || false;
}
function Er(r, e, t) {
  if (!(this instanceof Er)) throw new SyntaxError("Constructor must be called with the new operator");
  this.actual = r, this.expected = e, this.relation = t, this.message = "Dimension mismatch (" + (Array.isArray(r) ? "[" + r.join(", ") + "]" : r) + " " + (this.relation || "!=") + " " + (Array.isArray(e) ? "[" + e.join(", ") + "]" : e) + ")", this.stack = new Error().stack;
}
Er.prototype = new RangeError();
Er.prototype.constructor = RangeError;
Er.prototype.name = "DimensionError";
Er.prototype.isDimensionError = true;
function Ce(r, e, t) {
  if (!(this instanceof Ce)) throw new SyntaxError("Constructor must be called with the new operator");
  this.index = r, arguments.length < 3 ? (this.min = 0, this.max = e) : (this.min = e, this.max = t), this.min !== void 0 && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : this.max !== void 0 && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = new Error().stack;
}
Ce.prototype = new RangeError();
Ce.prototype.constructor = RangeError;
Ce.prototype.name = "IndexError";
Ce.prototype.isIndexError = true;
function yr(r) {
  for (var e = []; Array.isArray(r); ) e.push(r.length), r = r[0];
  return e;
}
function Wi(r, e, t) {
  var n, i = r.length;
  if (i !== e[t]) throw new Er(i, e[t]);
  if (t < e.length - 1) {
    var u = t + 1;
    for (n = 0; n < i; n++) {
      var a = r[n];
      if (!Array.isArray(a)) throw new Er(e.length - 1, e.length, "<");
      Wi(r[n], e, u);
    }
  } else for (n = 0; n < i; n++) if (Array.isArray(r[n])) throw new Er(e.length + 1, e.length, ">");
}
function Mn(r, e) {
  var t = e.length === 0;
  if (t) {
    if (Array.isArray(r)) throw new Er(r.length, 0);
  } else Wi(r, e, 0);
}
function qr(r, e) {
  if (r !== void 0) {
    if (!Nr(r) || !Ir(r)) throw new TypeError("Index must be an integer (value: " + r + ")");
    if (r < 0 || typeof e == "number" && r >= e) throw new Ce(r, e);
  }
}
function ht(r, e, t) {
  if (!Array.isArray(e)) throw new TypeError("Array expected");
  if (e.length === 0) throw new Error("Resizing to scalar is not supported");
  e.forEach(function(i) {
    if (!Nr(i) || !Ir(i) || i < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + Or(e) + ")");
  }), (Nr(r) || Rr(r)) && (r = [r]);
  var n = t !== void 0 ? t : 0;
  return Jt(r, e, 0, n), r;
}
function Jt(r, e, t, n) {
  var i, u, a = r.length, o = e[t], f = Math.min(a, o);
  if (r.length = o, t < e.length - 1) {
    var c = t + 1;
    for (i = 0; i < f; i++) u = r[i], Array.isArray(u) || (u = [u], r[i] = u), Jt(u, e, c, n);
    for (i = f; i < o; i++) u = [], r[i] = u, Jt(u, e, c, n);
  } else {
    for (i = 0; i < f; i++) for (; Array.isArray(r[i]); ) r[i] = r[i][0];
    for (i = f; i < o; i++) r[i] = n;
  }
}
function en(r, e) {
  var t = Yt(r, true), n = t.length;
  if (!Array.isArray(r) || !Array.isArray(e)) throw new TypeError("Array expected");
  if (e.length === 0) throw new Er(0, n, "!=");
  e = tn(e, n);
  var i = Ji(e);
  if (n !== i) throw new Er(i, n, "!=");
  try {
    return cs(t, e);
  } catch (u) {
    throw u instanceof Er ? new Er(i, n, "!=") : u;
  }
}
function tn(r, e) {
  var t = Ji(r), n = r.slice(), i = -1, u = r.indexOf(i), a = r.indexOf(i, u + 1) >= 0;
  if (a) throw new Error("More than one wildcard in sizes");
  var o = u >= 0, f = e % t === 0;
  if (o) if (f) n[u] = -e / t;
  else throw new Error("Could not replace wildcard, since " + e + " is no multiple of " + -t);
  return n;
}
function Ji(r) {
  return r.reduce((e, t) => e * t, 1);
}
function cs(r, e) {
  for (var t = r, n, i = e.length - 1; i > 0; i--) {
    var u = e[i];
    n = [];
    for (var a = t.length / u, o = 0; o < a; o++) n.push(t.slice(o * u, (o + 1) * u));
    t = n;
  }
  return t;
}
function Sn(r, e) {
  for (var t = yr(r); Array.isArray(r) && r.length === 1; ) r = r[0], t.shift();
  for (var n = t.length; t[n - 1] === 1; ) n--;
  return n < t.length && (r = Yi(r, n, 0), t.length = n), r;
}
function Yi(r, e, t) {
  var n, i;
  if (t < e) {
    var u = t + 1;
    for (n = 0, i = r.length; n < i; n++) r[n] = Yi(r[n], e, u);
  } else for (; Array.isArray(r); ) r = r[0];
  return r;
}
function Qi(r, e, t, n) {
  var i = n || yr(r);
  if (t) for (var u = 0; u < t; u++) r = [r], i.unshift(1);
  for (r = Xi(r, e, 0); i.length < e; ) i.push(1);
  return r;
}
function Xi(r, e, t) {
  var n, i;
  if (Array.isArray(r)) {
    var u = t + 1;
    for (n = 0, i = r.length; n < i; n++) r[n] = Xi(r[n], e, u);
  } else for (var a = t; a < e; a++) r = [r];
  return r;
}
function Yt(r) {
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
function _t(r, e) {
  for (var t, n = 0, i = 0; i < r.length; i++) {
    var u = r[i], a = Array.isArray(u);
    if (i === 0 && a && (n = u.length), a && u.length !== n) return;
    var o = a ? _t(u, e) : e(u);
    if (t === void 0) t = o;
    else if (t !== o) return "mixed";
  }
  return t;
}
function Gi(r, e, t, n) {
  if (n < t) {
    if (r.length !== e.length) throw new Er(r.length, e.length);
    for (var i = [], u = 0; u < r.length; u++) i[u] = Gi(r[u], e[u], t, n + 1);
    return i;
  } else return r.concat(e);
}
function Ki() {
  var r = Array.prototype.slice.call(arguments, 0, -1), e = Array.prototype.slice.call(arguments, -1);
  if (r.length === 1) return r[0];
  if (r.length > 1) return r.slice(1).reduce(function(t, n) {
    return Gi(t, n, e, 0);
  }, r[0]);
  throw new Error("Wrong number of arguments in function concat");
}
function Hi() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++) e[t] = arguments[t];
  for (var n = e.map((p) => p.length), i = Math.max(...n), u = new Array(i).fill(null), a = 0; a < e.length; a++) for (var o = e[a], f = n[a], c = 0; c < f; c++) {
    var s = i - f + c;
    o[c] > u[s] && (u[s] = o[c]);
  }
  for (var h = 0; h < e.length; h++) ki(e[h], u);
  return u;
}
function ki(r, e) {
  for (var t = e.length, n = r.length, i = 0; i < n; i++) {
    var u = t - n + i;
    if (r[i] < e[u] && r[i] > 1 || r[i] > e[u]) throw new Error("shape mismatch: mismatch is found in arg with shape (".concat(r, ") not possible to broadcast dimension ").concat(n, " with size ").concat(r[i], " to size ").concat(e[u]));
  }
}
function Qt(r, e) {
  var t = yr(r);
  if (Ae(t, e)) return r;
  ki(t, e);
  var n = Hi(t, e), i = n.length, u = [...Array(i - t.length).fill(1), ...t], a = vs(r);
  t.length < i && (a = en(a, u), t = yr(a));
  for (var o = 0; o < i; o++) t[o] < n[o] && (a = ls(a, n[o], o), t = yr(a));
  return a;
}
function ls(r, e, t) {
  return Ki(...Array(e).fill(r), t);
}
function ji(r, e) {
  if (!Array.isArray(r)) throw new Error("Array expected");
  var t = yr(r);
  if (e.length !== t.length) throw new Er(e.length, t.length);
  for (var n = 0; n < e.length; n++) qr(e[n], t[n]);
  return e.reduce((i, u) => i[u], r);
}
function Nn(r, e) {
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
function hs(r, e) {
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
function vs(r) {
  return Pe([], r);
}
function vt(r, e, t) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (st.isTypedFunction(r)) {
    var i;
    if (n) i = 1;
    else {
      var u = (e.isMatrix ? e.size() : yr(e)).map(() => 0), a = e.isMatrix ? e.get(u) : ji(e, u);
      i = Ds(r, a, u, e);
    }
    var o;
    if (e.isMatrix && e.dataType !== "mixed" && e.dataType !== void 0) {
      var f = ps(r, i);
      o = f !== void 0 ? f : r;
    } else o = r;
    return i >= 1 && i <= 3 ? { isUnary: i === 1, fn: function() {
      for (var s = arguments.length, h = new Array(s), p = 0; p < s; p++) h[p] = arguments[p];
      return xn(o, h.slice(0, i), t, r.name);
    } } : { isUnary: false, fn: function() {
      for (var s = arguments.length, h = new Array(s), p = 0; p < s; p++) h[p] = arguments[p];
      return xn(o, h, t, r.name);
    } };
  }
  return n === void 0 ? { isUnary: ds(r), fn: r } : { isUnary: n, fn: r };
}
function ps(r, e) {
  var t = [];
  if (Object.entries(r.signatures).forEach((n) => {
    var [i, u] = n;
    i.split(",").length === e && t.push(u);
  }), t.length === 1) return t[0];
}
function ds(r) {
  if (r.length !== 1) return false;
  var e = r.toString();
  if (/arguments/.test(e)) return false;
  var t = e.match(/\(.*?\)/);
  return !/\.\.\./.test(t);
}
function Ds(r, e, t, n) {
  for (var i = [e, t, n], u = 3; u > 0; u--) {
    var a = i.slice(0, u);
    if (st.resolve(r, a) !== null) return u;
  }
}
function xn(r, e, t, n) {
  try {
    return r(...e);
  } catch (i) {
    ms(i, e, t, n);
  }
}
function ms(r, e, t, n) {
  var i;
  if (r instanceof TypeError && ((i = r.data) === null || i === void 0 ? void 0 : i.category) === "wrongType") {
    var u = [];
    throw u.push("value: ".concat(ee(e[0]))), e.length >= 2 && u.push("index: ".concat(ee(e[1]))), e.length >= 3 && u.push("array: ".concat(ee(e[2]))), new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "".concat(n, "(").concat(u.join(", "), ") at index ").concat(JSON.stringify(e[1])));
  } else throw new TypeError("Function ".concat(t, " cannot apply callback arguments ") + "to function ".concat(n, ": ").concat(r.message));
}
var gs = "DenseMatrix", ys = ["Matrix"], ws = rr(gs, ys, (r) => {
  var { Matrix: e } = r;
  function t(s, h) {
    if (!(this instanceof t)) throw new SyntaxError("Constructor must be called with the new operator");
    if (h && !fe(h)) throw new Error("Invalid datatype: " + h);
    if (Cr(s)) s.type === "DenseMatrix" ? (this._data = Ar(s._data), this._size = Ar(s._size), this._datatype = h || s._datatype) : (this._data = s.toArray(), this._size = s.size(), this._datatype = h || s._datatype);
    else if (s && Pr(s.data) && Pr(s.size)) this._data = s.data, this._size = s.size, Mn(this._data, this._size), this._datatype = h || s.datatype;
    else if (Pr(s)) this._data = c(s), this._size = yr(this._data), Mn(this._data, this._size), this._datatype = h;
    else {
      if (s) throw new TypeError("Unsupported type of data (" + ee(s) + ")");
      this._data = [], this._size = [0], this._datatype = h;
    }
  }
  t.prototype = new e(), t.prototype.createDenseMatrix = function(s, h) {
    return new t(s, h);
  }, Object.defineProperty(t, "name", { value: "DenseMatrix" }), t.prototype.constructor = t, t.prototype.type = "DenseMatrix", t.prototype.isDenseMatrix = true, t.prototype.getDataType = function() {
    return _t(this._data, ee);
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
    return ji(this._data, s);
  }, t.prototype.set = function(s, h, p) {
    if (!Pr(s)) throw new TypeError("Array expected");
    if (s.length < this._size.length) throw new Er(s.length, this._size.length, "<");
    var v, d, l, D = s.map(function(C) {
      return C + 1;
    });
    f(this, D, p);
    var m = this._data;
    for (v = 0, d = s.length - 1; v < d; v++) l = s[v], qr(l, m.length), m = m[l];
    return l = s[s.length - 1], qr(l, m.length), m[l] = h, this;
  };
  function n(s, h) {
    if (!Ht(h)) throw new TypeError("Invalid index");
    var p = h.isScalar();
    if (p) return s.get(h.min());
    var v = h.size();
    if (v.length !== s._size.length) throw new Er(v.length, s._size.length);
    for (var d = h.min(), l = h.max(), D = 0, m = s._size.length; D < m; D++) qr(d[D], s._size[D]), qr(l[D], s._size[D]);
    return new t(i(s._data, h, v.length, 0), s._datatype);
  }
  function i(s, h, p, v) {
    var d = v === p - 1, l = h.dimension(v);
    return d ? l.map(function(D) {
      return qr(D, s.length), s[D];
    }).valueOf() : l.map(function(D) {
      qr(D, s.length);
      var m = s[D];
      return i(m, h, p, v + 1);
    }).valueOf();
  }
  function u(s, h, p, v) {
    if (!h || h.isIndex !== true) throw new TypeError("Invalid index");
    var d = h.size(), l = h.isScalar(), D;
    if (Cr(p) ? (D = p.size(), p = p.valueOf()) : D = yr(p), l) {
      if (D.length !== 0) throw new TypeError("Scalar expected");
      s.set(h.min(), p, v);
    } else {
      if (!Ae(D, d)) try {
        D.length === 0 ? p = Qt([p], d) : p = Qt(p, d), D = yr(p);
      } catch {
      }
      if (d.length < s._size.length) throw new Er(d.length, s._size.length, "<");
      if (D.length < d.length) {
        for (var m = 0, C = 0; d[m] === 1 && D[m] === 1; ) m++;
        for (; d[m] === 1; ) C++, m++;
        p = Qi(p, d.length, C, D);
      }
      if (!Ae(d, D)) throw new Er(d, D, ">");
      var g = h.max().map(function(w) {
        return w + 1;
      });
      f(s, g, v);
      var b = d.length, A = 0;
      a(s._data, h, p, b, A);
    }
    return s;
  }
  function a(s, h, p, v, d) {
    var l = d === v - 1, D = h.dimension(d);
    l ? D.forEach(function(m, C) {
      qr(m), s[m] = p[C[0]];
    }) : D.forEach(function(m, C) {
      qr(m), a(s[m], h, p[C[0]], v, d + 1);
    });
  }
  t.prototype.resize = function(s, h, p) {
    if (!Ye(s)) throw new TypeError("Array or Matrix expected");
    var v = s.valueOf().map((l) => Array.isArray(l) && l.length === 1 ? l[0] : l), d = p ? this.clone() : this;
    return o(d, v, h);
  };
  function o(s, h, p) {
    if (h.length === 0) {
      for (var v = s._data; Pr(v); ) v = v[0];
      return v;
    }
    return s._size = h.slice(0), s._data = ht(s._data, s._size, p), s;
  }
  t.prototype.reshape = function(s, h) {
    var p = h ? this.clone() : this;
    p._data = en(p._data, s);
    var v = p._size.reduce((d, l) => d * l);
    return p._size = tn(s, v), p;
  };
  function f(s, h, p) {
    for (var v = s._size.slice(0), d = false; v.length < h.length; ) v.push(0), d = true;
    for (var l = 0, D = h.length; l < D; l++) h[l] > v[l] && (v[l] = h[l], d = true);
    d && o(s, v, p);
  }
  t.prototype.clone = function() {
    var s = new t({ data: Ar(this._data), size: Ar(this._size), datatype: this._datatype });
    return s;
  }, t.prototype.size = function() {
    return this._size.slice(0);
  }, t.prototype._forEach = function(s) {
    var h = s.length === 2, p = this._size.length - 1;
    if (p < 0) return;
    if (h) {
      D(this._data);
      return;
    }
    if (p === 0) {
      for (var v = 0; v < this._data.length; v++) s(this._data, v, [v]);
      return;
    }
    var d = new Array(p + 1);
    l(this._data);
    function l(m) {
      var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (C < p) for (var g = 0; g < m.length; g++) d[C] = g, l(m[g], C + 1);
      else for (var b = 0; b < m.length; b++) d[C] = b, s(m, b, d.slice());
    }
    function D(m) {
      var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      if (C < p) for (var g = 0; g < m.length; g++) D(m[g], C + 1);
      else for (var b = 0; b < m.length; b++) s(m, b);
    }
  }, t.prototype.map = function(s) {
    var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, p = this, v = new t(p), d = vt(s, p._data, "map", h), l = h || d.isUnary ? (D, m) => {
      D[m] = d.fn(D[m]);
    } : (D, m, C) => {
      D[m] = d.fn(D[m], C, p);
    };
    return v._forEach(l), v;
  }, t.prototype.forEach = function(s) {
    var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, p = this, v = vt(s, p._data, "map", h), d = h || v.isUnary ? (l, D) => {
      v.fn(l[D]);
    } : (l, D, m) => {
      v.fn(l[D], m, p);
    };
    p._forEach(d);
  }, t.prototype[Symbol.iterator] = function* () {
    var s = this._size.length - 1;
    if (!(s < 0)) {
      if (s === 0) {
        for (var h = 0; h < this._data.length; h++) yield { value: this._data[h], index: [h] };
        return;
      }
      var p = [], v = function* (l, D) {
        if (D < s) for (var m = 0; m < l.length; m++) p[D] = m, yield* v(l[m], D + 1);
        else for (var C = 0; C < l.length; C++) p[D] = C, yield { value: l[C], index: p.slice() };
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
    for (var v = this._data, d = function(m) {
      var C = v.map((g) => [g[m]]);
      h.push(new t(C, s._datatype));
    }, l = 0; l < p[1]; l++) d(l);
    return h;
  }, t.prototype.toArray = function() {
    return Ar(this._data);
  }, t.prototype.valueOf = function() {
    return this._data;
  }, t.prototype.format = function(s) {
    return Or(this._data, s);
  }, t.prototype.toString = function() {
    return Or(this._data);
  }, t.prototype.toJSON = function() {
    return { mathjs: "DenseMatrix", data: this._data, size: this._size, datatype: this._datatype };
  }, t.prototype.diagonal = function(s) {
    if (s) {
      if (Rr(s) && (s = s.toNumber()), !Nr(s) || !Ir(s)) throw new TypeError("The parameter k must be an integer number");
    } else s = 0;
    for (var h = s > 0 ? s : 0, p = s < 0 ? -s : 0, v = this._size[0], d = this._size[1], l = Math.min(v - p, d - h), D = [], m = 0; m < l; m++) D[m] = this._data[m + p][m + h];
    return new t({ data: D, size: [l], datatype: this._datatype });
  }, t.diagonal = function(s, h, p, v) {
    if (!Pr(s)) throw new TypeError("Array expected, size parameter");
    if (s.length !== 2) throw new Error("Only two dimensions matrix are supported");
    if (s = s.map(function(_) {
      if (Rr(_) && (_ = _.toNumber()), !Nr(_) || !Ir(_) || _ < 1) throw new Error("Size values must be positive integers");
      return _;
    }), p) {
      if (Rr(p) && (p = p.toNumber()), !Nr(p) || !Ir(p)) throw new TypeError("The parameter k must be an integer number");
    } else p = 0;
    var d = p > 0 ? p : 0, l = p < 0 ? -p : 0, D = s[0], m = s[1], C = Math.min(D - l, m - d), g;
    if (Pr(h)) {
      if (h.length !== C) throw new Error("Invalid value array length");
      g = function(F) {
        return h[F];
      };
    } else if (Cr(h)) {
      var b = h.size();
      if (b.length !== 1 || b[0] !== C) throw new Error("Invalid matrix length");
      g = function(F) {
        return h.get([F]);
      };
    } else g = function() {
      return h;
    };
    v || (v = Rr(g(0)) ? g(0).mul(0) : 0);
    var A = [];
    if (s.length > 0) {
      A = ht(A, s, v);
      for (var w = 0; w < C; w++) A[w + l][w + d] = g(w);
    }
    return new t({ data: A, size: [D, m] });
  }, t.fromJSON = function(s) {
    return new t(s);
  }, t.prototype.swapRows = function(s, h) {
    if (!Nr(s) || !Ir(s) || !Nr(h) || !Ir(h)) throw new Error("Row index must be positive integers");
    if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
    return qr(s, this._size[0]), qr(h, this._size[0]), t._swapRows(s, h, this._data), this;
  }, t._swapRows = function(s, h, p) {
    var v = p[s];
    p[s] = p[h], p[h] = v;
  };
  function c(s) {
    return Cr(s) ? c(s.valueOf()) : Pr(s) ? s.map(c) : s;
  }
  return t;
}, { isClass: true });
function As(r) {
  var e = r.length, t = r[0].length, n, i, u = [];
  for (i = 0; i < t; i++) {
    var a = [];
    for (n = 0; n < e; n++) a.push(r[n][i]);
    u.push(a);
  }
  return u;
}
function Fs(r) {
  for (var e = 0; e < r.length; e++) if (Ye(r[e])) return true;
  return false;
}
function Es(r, e) {
  Cr(r) ? r.forEach((t) => e(t), false, true) : hs(r, e, true);
}
function te(r, e, t) {
  if (!t) return Cr(r) ? r.map((i) => e(i), false, true) : Nn(r, e, true);
  var n = (i) => i === 0 ? i : e(i);
  return Cr(r) ? r.map((i) => n(i), false, true) : Nn(r, n, true);
}
function Cs(r, e, t) {
  var n = Array.isArray(r) ? yr(r) : r.size();
  if (e < 0 || e >= n.length) throw new Ce(e, n.length);
  return Cr(r) ? r.create(pt(r.valueOf(), e, t), r.datatype()) : pt(r, e, t);
}
function pt(r, e, t) {
  var n, i, u, a;
  if (e <= 0) if (Array.isArray(r[0])) {
    for (a = As(r), i = [], n = 0; n < a.length; n++) i[n] = pt(a[n], e - 1, t);
    return i;
  } else {
    for (u = r[0], n = 1; n < r.length; n++) u = t(u, r[n]);
    return u;
  }
  else {
    for (i = [], n = 0; n < r.length; n++) i[n] = pt(r[n], e - 1, t);
    return i;
  }
}
var Tn = "isInteger", bs = ["typed"], _s = rr(Tn, bs, (r) => {
  var { typed: e } = r;
  return e(Tn, { number: Ir, BigNumber: function(n) {
    return n.isInt();
  }, bigint: function(n) {
    return true;
  }, Fraction: function(n) {
    return n.d === 1n;
  }, "Array | Matrix": e.referToSelf((t) => (n) => te(n, t)) });
}), nn = "number", Bt = "number, number";
function ru(r) {
  return Math.abs(r);
}
ru.signature = nn;
function eu(r, e) {
  return r + e;
}
eu.signature = Bt;
function tu(r, e) {
  return r - e;
}
tu.signature = Bt;
function nu(r, e) {
  return r * e;
}
nu.signature = Bt;
function iu(r) {
  return -r;
}
iu.signature = nn;
function Xt(r) {
  return Ra(r);
}
Xt.signature = nn;
function uu(r, e) {
  return r * r < 1 && e === 1 / 0 || r * r > 1 && e === -1 / 0 ? 0 : Math.pow(r, e);
}
uu.signature = Bt;
var Bs = "number";
function au(r) {
  return r > 0;
}
au.signature = Bs;
function Ue(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1e-9, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  if (t <= 0) throw new Error("Relative tolerance must be greater than 0");
  if (n < 0) throw new Error("Absolute tolerance must be at least 0");
  return r.isNaN() || e.isNaN() ? false : !r.isFinite() || !e.isFinite() ? r.eq(e) : r.eq(e) ? true : r.minus(e).abs().lte(r.constructor.max(r.constructor.max(r.abs(), e.abs()).mul(t), n));
}
var In = "isPositive", Ms = ["typed", "config"], Ss = rr(In, Ms, (r) => {
  var { typed: e, config: t } = r;
  return e(In, { number: (n) => De(n, 0, t.relTol, t.absTol) ? false : au(n), BigNumber: (n) => Ue(n, new n.constructor(0), t.relTol, t.absTol) ? false : !n.isNeg() && !n.isZero() && !n.isNaN(), bigint: (n) => n > 0n, Fraction: (n) => n.s > 0n && n.n > 0n, Unit: e.referToSelf((n) => (i) => e.find(n, i.valueType())(i.value)), "Array | Matrix": e.referToSelf((n) => (i) => te(i, n)) });
}), zn = "isZero", Ns = ["typed", "equalScalar"], xs = rr(zn, Ns, (r) => {
  var { typed: e, equalScalar: t } = r;
  return e(zn, { "number | BigNumber | Complex | Fraction": (n) => t(n, 0), bigint: (n) => n === 0n, Unit: e.referToSelf((n) => (i) => e.find(n, i.valueType())(i.value)), "Array | Matrix": e.referToSelf((n) => (i) => te(i, n)) });
});
function Ts(r, e, t, n) {
  return De(r.re, e.re, t, n) && De(r.im, e.im, t, n);
}
var Ke = rr("compareUnits", ["typed"], (r) => {
  var { typed: e } = r;
  return { "Unit, Unit": e.referToSelf((t) => (n, i) => {
    if (!n.equalBase(i)) throw new Error("Cannot compare units with different base");
    return e.find(t, [n.valueType(), i.valueType()])(n.value, i.value);
  }) };
}), dt = "equalScalar", Is = ["typed", "config"], zs = rr(dt, Is, (r) => {
  var { typed: e, config: t } = r, n = Ke({ typed: e });
  return e(dt, { "boolean, boolean": function(u, a) {
    return u === a;
  }, "number, number": function(u, a) {
    return De(u, a, t.relTol, t.absTol);
  }, "BigNumber, BigNumber": function(u, a) {
    return u.eq(a) || Ue(u, a, t.relTol, t.absTol);
  }, "bigint, bigint": function(u, a) {
    return u === a;
  }, "Fraction, Fraction": function(u, a) {
    return u.equals(a);
  }, "Complex, Complex": function(u, a) {
    return Ts(u, a, t.relTol, t.absTol);
  } }, n);
});
rr(dt, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(dt, { "number, number": function(i, u) {
    return De(i, u, t.relTol, t.absTol);
  } });
});
var Os = "SparseMatrix", $s = ["typed", "equalScalar", "Matrix"], Ps = rr(Os, $s, (r) => {
  var { typed: e, equalScalar: t, Matrix: n } = r;
  function i(l, D) {
    if (!(this instanceof i)) throw new SyntaxError("Constructor must be called with the new operator");
    if (D && !fe(D)) throw new Error("Invalid datatype: " + D);
    if (Cr(l)) u(this, l, D);
    else if (l && Pr(l.index) && Pr(l.ptr) && Pr(l.size)) this._values = l.values, this._index = l.index, this._ptr = l.ptr, this._size = l.size, this._datatype = D || l.datatype;
    else if (Pr(l)) a(this, l, D);
    else {
      if (l) throw new TypeError("Unsupported type of data (" + ee(l) + ")");
      this._values = [], this._index = [], this._ptr = [0], this._size = [0, 0], this._datatype = D;
    }
  }
  function u(l, D, m) {
    D.type === "SparseMatrix" ? (l._values = D._values ? Ar(D._values) : void 0, l._index = Ar(D._index), l._ptr = Ar(D._ptr), l._size = Ar(D._size), l._datatype = m || D._datatype) : a(l, D.valueOf(), m || D._datatype);
  }
  function a(l, D, m) {
    l._values = [], l._index = [], l._ptr = [], l._datatype = m;
    var C = D.length, g = 0, b = t, A = 0;
    if (fe(m) && (b = e.find(t, [m, m]) || t, A = e.convert(0, m)), C > 0) {
      var w = 0;
      do {
        l._ptr.push(l._index.length);
        for (var _ = 0; _ < C; _++) {
          var F = D[_];
          if (Pr(F)) {
            if (w === 0 && g < F.length && (g = F.length), w < F.length) {
              var y = F[w];
              b(y, A) || (l._values.push(y), l._index.push(_));
            }
          } else w === 0 && g < 1 && (g = 1), b(F, A) || (l._values.push(F), l._index.push(_));
        }
        w++;
      } while (w < g);
    }
    l._ptr.push(l._index.length), l._size = [C, g];
  }
  i.prototype = new n(), i.prototype.createSparseMatrix = function(l, D) {
    return new i(l, D);
  }, Object.defineProperty(i, "name", { value: "SparseMatrix" }), i.prototype.constructor = i, i.prototype.type = "SparseMatrix", i.prototype.isSparseMatrix = true, i.prototype.getDataType = function() {
    return _t(this._values, ee);
  }, i.prototype.storage = function() {
    return "sparse";
  }, i.prototype.datatype = function() {
    return this._datatype;
  }, i.prototype.create = function(l, D) {
    return new i(l, D);
  }, i.prototype.density = function() {
    var l = this._size[0], D = this._size[1];
    return l !== 0 && D !== 0 ? this._index.length / (l * D) : 0;
  }, i.prototype.subset = function(l, D, m) {
    if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
    switch (arguments.length) {
      case 1:
        return o(this, l);
      case 2:
      case 3:
        return f(this, l, D, m);
      default:
        throw new SyntaxError("Wrong number of arguments");
    }
  };
  function o(l, D) {
    if (!Ht(D)) throw new TypeError("Invalid index");
    var m = D.isScalar();
    if (m) return l.get(D.min());
    var C = D.size();
    if (C.length !== l._size.length) throw new Er(C.length, l._size.length);
    var g, b, A, w, _ = D.min(), F = D.max();
    for (g = 0, b = l._size.length; g < b; g++) qr(_[g], l._size[g]), qr(F[g], l._size[g]);
    var y = l._values, M = l._index, B = l._ptr, S = D.dimension(0), z = D.dimension(1), x = [], O = [];
    S.forEach(function(L, tr) {
      O[L] = tr[0], x[L] = true;
    });
    var T = y ? [] : void 0, Y = [], q = [];
    return z.forEach(function(L) {
      for (q.push(Y.length), A = B[L], w = B[L + 1]; A < w; A++) g = M[A], x[g] === true && (Y.push(O[g]), T && T.push(y[A]));
    }), q.push(Y.length), new i({ values: T, index: Y, ptr: q, size: C, datatype: l._datatype });
  }
  function f(l, D, m, C) {
    if (!D || D.isIndex !== true) throw new TypeError("Invalid index");
    var g = D.size(), b = D.isScalar(), A;
    if (Cr(m) ? (A = m.size(), m = m.toArray()) : A = yr(m), b) {
      if (A.length !== 0) throw new TypeError("Scalar expected");
      l.set(D.min(), m, C);
    } else {
      if (g.length !== 1 && g.length !== 2) throw new Er(g.length, l._size.length, "<");
      if (A.length < g.length) {
        for (var w = 0, _ = 0; g[w] === 1 && A[w] === 1; ) w++;
        for (; g[w] === 1; ) _++, w++;
        m = Qi(m, g.length, _, A);
      }
      if (!Ae(g, A)) throw new Er(g, A, ">");
      if (g.length === 1) {
        var F = D.dimension(0);
        F.forEach(function(B, S) {
          qr(B), l.set([B, 0], m[S[0]], C);
        });
      } else {
        var y = D.dimension(0), M = D.dimension(1);
        y.forEach(function(B, S) {
          qr(B), M.forEach(function(z, x) {
            qr(z), l.set([B, z], m[S[0]][x[0]], C);
          });
        });
      }
    }
    return l;
  }
  i.prototype.get = function(l) {
    if (!Pr(l)) throw new TypeError("Array expected");
    if (l.length !== this._size.length) throw new Er(l.length, this._size.length);
    if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
    var D = l[0], m = l[1];
    qr(D, this._size[0]), qr(m, this._size[1]);
    var C = c(D, this._ptr[m], this._ptr[m + 1], this._index);
    return C < this._ptr[m + 1] && this._index[C] === D ? this._values[C] : 0;
  }, i.prototype.set = function(l, D, m) {
    if (!Pr(l)) throw new TypeError("Array expected");
    if (l.length !== this._size.length) throw new Er(l.length, this._size.length);
    if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
    var C = l[0], g = l[1], b = this._size[0], A = this._size[1], w = t, _ = 0;
    fe(this._datatype) && (w = e.find(t, [this._datatype, this._datatype]) || t, _ = e.convert(0, this._datatype)), (C > b - 1 || g > A - 1) && (p(this, Math.max(C + 1, b), Math.max(g + 1, A), m), b = this._size[0], A = this._size[1]), qr(C, b), qr(g, A);
    var F = c(C, this._ptr[g], this._ptr[g + 1], this._index);
    return F < this._ptr[g + 1] && this._index[F] === C ? w(D, _) ? s(F, g, this._values, this._index, this._ptr) : this._values[F] = D : w(D, _) || h(F, C, g, D, this._values, this._index, this._ptr), this;
  };
  function c(l, D, m, C) {
    if (m - D === 0) return m;
    for (var g = D; g < m; g++) if (C[g] === l) return g;
    return D;
  }
  function s(l, D, m, C, g) {
    m.splice(l, 1), C.splice(l, 1);
    for (var b = D + 1; b < g.length; b++) g[b]--;
  }
  function h(l, D, m, C, g, b, A) {
    g.splice(l, 0, C), b.splice(l, 0, D);
    for (var w = m + 1; w < A.length; w++) A[w]++;
  }
  i.prototype.resize = function(l, D, m) {
    if (!Ye(l)) throw new TypeError("Array or Matrix expected");
    var C = l.valueOf().map((b) => Array.isArray(b) && b.length === 1 ? b[0] : b);
    if (C.length !== 2) throw new Error("Only two dimensions matrix are supported");
    C.forEach(function(b) {
      if (!Nr(b) || !Ir(b) || b < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + Or(C) + ")");
    });
    var g = m ? this.clone() : this;
    return p(g, C[0], C[1], D);
  };
  function p(l, D, m, C) {
    var g = C || 0, b = t, A = 0;
    fe(l._datatype) && (b = e.find(t, [l._datatype, l._datatype]) || t, A = e.convert(0, l._datatype), g = e.convert(g, l._datatype));
    var w = !b(g, A), _ = l._size[0], F = l._size[1], y, M, B;
    if (m > F) {
      for (M = F; M < m; M++) if (l._ptr[M] = l._values.length, w) for (y = 0; y < _; y++) l._values.push(g), l._index.push(y);
      l._ptr[m] = l._values.length;
    } else m < F && (l._ptr.splice(m + 1, F - m), l._values.splice(l._ptr[m], l._values.length), l._index.splice(l._ptr[m], l._index.length));
    if (F = m, D > _) {
      if (w) {
        var S = 0;
        for (M = 0; M < F; M++) {
          l._ptr[M] = l._ptr[M] + S, B = l._ptr[M + 1] + S;
          var z = 0;
          for (y = _; y < D; y++, z++) l._values.splice(B + z, 0, g), l._index.splice(B + z, 0, y), S++;
        }
        l._ptr[F] = l._values.length;
      }
    } else if (D < _) {
      var x = 0;
      for (M = 0; M < F; M++) {
        l._ptr[M] = l._ptr[M] - x;
        var O = l._ptr[M], T = l._ptr[M + 1] - x;
        for (B = O; B < T; B++) y = l._index[B], y > D - 1 && (l._values.splice(B, 1), l._index.splice(B, 1), x++);
      }
      l._ptr[M] = l._values.length;
    }
    return l._size[0] = D, l._size[1] = m, l;
  }
  i.prototype.reshape = function(l, D) {
    if (!Pr(l)) throw new TypeError("Array expected");
    if (l.length !== 2) throw new Error("Sparse matrices can only be reshaped in two dimensions");
    l.forEach(function(L) {
      if (!Nr(L) || !Ir(L) || L <= -2 || L === 0) throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + Or(l) + ")");
    });
    var m = this._size[0] * this._size[1];
    l = tn(l, m);
    var C = l[0] * l[1];
    if (m !== C) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
    var g = D ? this.clone() : this;
    if (this._size[0] === l[0] && this._size[1] === l[1]) return g;
    for (var b = [], A = 0; A < g._ptr.length; A++) for (var w = 0; w < g._ptr[A + 1] - g._ptr[A]; w++) b.push(A);
    for (var _ = g._values.slice(), F = g._index.slice(), y = 0; y < g._index.length; y++) {
      var M = F[y], B = b[y], S = M * g._size[1] + B;
      b[y] = S % l[1], F[y] = Math.floor(S / l[1]);
    }
    g._values.length = 0, g._index.length = 0, g._ptr.length = l[1] + 1, g._size = l.slice();
    for (var z = 0; z < g._ptr.length; z++) g._ptr[z] = 0;
    for (var x = 0; x < _.length; x++) {
      var O = F[x], T = b[x], Y = _[x], q = c(O, g._ptr[T], g._ptr[T + 1], g._index);
      h(q, O, T, Y, g._values, g._index, g._ptr);
    }
    return g;
  }, i.prototype.clone = function() {
    var l = new i({ values: this._values ? Ar(this._values) : void 0, index: Ar(this._index), ptr: Ar(this._ptr), size: Ar(this._size), datatype: this._datatype });
    return l;
  }, i.prototype.size = function() {
    return this._size.slice(0);
  }, i.prototype.map = function(l, D) {
    if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
    var m = this, C = this._size[0], g = this._size[1], b = vt(l, m, "map"), A = function(_, F, y) {
      return b.fn(_, [F, y], m);
    };
    return v(this, 0, C - 1, 0, g - 1, A, D);
  };
  function v(l, D, m, C, g, b, A) {
    var w = [], _ = [], F = [], y = t, M = 0;
    fe(l._datatype) && (y = e.find(t, [l._datatype, l._datatype]) || t, M = e.convert(0, l._datatype));
    for (var B = function(Z, er, ar) {
      var j = b(Z, er, ar);
      y(j, M) || (w.push(j), _.push(er));
    }, S = C; S <= g; S++) {
      F.push(w.length);
      var z = l._ptr[S], x = l._ptr[S + 1];
      if (A) for (var O = z; O < x; O++) {
        var T = l._index[O];
        T >= D && T <= m && B(l._values[O], T - D, S - C);
      }
      else {
        for (var Y = {}, q = z; q < x; q++) {
          var L = l._index[q];
          Y[L] = l._values[q];
        }
        for (var tr = D; tr <= m; tr++) {
          var or = tr in Y ? Y[tr] : 0;
          B(or, tr - D, S - C);
        }
      }
    }
    return F.push(w.length), new i({ values: w, index: _, ptr: F, size: [m - D + 1, g - C + 1] });
  }
  i.prototype.forEach = function(l, D) {
    if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
    for (var m = this, C = this._size[0], g = this._size[1], b = vt(l, m, "forEach"), A = 0; A < g; A++) {
      var w = this._ptr[A], _ = this._ptr[A + 1];
      if (D) for (var F = w; F < _; F++) {
        var y = this._index[F];
        b.fn(this._values[F], [y, A], m);
      }
      else {
        for (var M = {}, B = w; B < _; B++) {
          var S = this._index[B];
          M[S] = this._values[B];
        }
        for (var z = 0; z < C; z++) {
          var x = z in M ? M[z] : 0;
          b.fn(x, [z, A], m);
        }
      }
    }
  }, i.prototype[Symbol.iterator] = function* () {
    if (!this._values) throw new Error("Cannot iterate a Pattern only matrix");
    for (var l = this._size[1], D = 0; D < l; D++) for (var m = this._ptr[D], C = this._ptr[D + 1], g = m; g < C; g++) {
      var b = this._index[g];
      yield { value: this._values[g], index: [b, D] };
    }
  }, i.prototype.toArray = function() {
    return d(this._values, this._index, this._ptr, this._size, true);
  }, i.prototype.valueOf = function() {
    return d(this._values, this._index, this._ptr, this._size, false);
  };
  function d(l, D, m, C, g) {
    var b = C[0], A = C[1], w = [], _, F;
    for (_ = 0; _ < b; _++) for (w[_] = [], F = 0; F < A; F++) w[_][F] = 0;
    for (F = 0; F < A; F++) for (var y = m[F], M = m[F + 1], B = y; B < M; B++) _ = D[B], w[_][F] = l ? g ? Ar(l[B]) : l[B] : 1;
    return w;
  }
  return i.prototype.format = function(l) {
    for (var D = this._size[0], m = this._size[1], C = this.density(), g = "Sparse Matrix [" + Or(D, l) + " x " + Or(m, l) + "] density: " + Or(C, l) + `
`, b = 0; b < m; b++) for (var A = this._ptr[b], w = this._ptr[b + 1], _ = A; _ < w; _++) {
      var F = this._index[_];
      g += `
    (` + Or(F, l) + ", " + Or(b, l) + ") ==> " + (this._values ? Or(this._values[_], l) : "X");
    }
    return g;
  }, i.prototype.toString = function() {
    return Or(this.toArray());
  }, i.prototype.toJSON = function() {
    return { mathjs: "SparseMatrix", values: this._values, index: this._index, ptr: this._ptr, size: this._size, datatype: this._datatype };
  }, i.prototype.diagonal = function(l) {
    if (l) {
      if (Rr(l) && (l = l.toNumber()), !Nr(l) || !Ir(l)) throw new TypeError("The parameter k must be an integer number");
    } else l = 0;
    var D = l > 0 ? l : 0, m = l < 0 ? -l : 0, C = this._size[0], g = this._size[1], b = Math.min(C - m, g - D), A = [], w = [], _ = [];
    _[0] = 0;
    for (var F = D; F < g && A.length < b; F++) for (var y = this._ptr[F], M = this._ptr[F + 1], B = y; B < M; B++) {
      var S = this._index[B];
      if (S === F - D + m) {
        A.push(this._values[B]), w[A.length - 1] = S - m;
        break;
      }
    }
    return _.push(A.length), new i({ values: A, index: w, ptr: _, size: [b, 1] });
  }, i.fromJSON = function(l) {
    return new i(l);
  }, i.diagonal = function(l, D, m, C, g) {
    if (!Pr(l)) throw new TypeError("Array expected, size parameter");
    if (l.length !== 2) throw new Error("Only two dimensions matrix are supported");
    if (l = l.map(function(L) {
      if (Rr(L) && (L = L.toNumber()), !Nr(L) || !Ir(L) || L < 1) throw new Error("Size values must be positive integers");
      return L;
    }), m) {
      if (Rr(m) && (m = m.toNumber()), !Nr(m) || !Ir(m)) throw new TypeError("The parameter k must be an integer number");
    } else m = 0;
    var b = t, A = 0;
    fe(g) && (b = e.find(t, [g, g]) || t, A = e.convert(0, g));
    var w = m > 0 ? m : 0, _ = m < 0 ? -m : 0, F = l[0], y = l[1], M = Math.min(F - _, y - w), B;
    if (Pr(D)) {
      if (D.length !== M) throw new Error("Invalid value array length");
      B = function(tr) {
        return D[tr];
      };
    } else if (Cr(D)) {
      var S = D.size();
      if (S.length !== 1 || S[0] !== M) throw new Error("Invalid matrix length");
      B = function(tr) {
        return D.get([tr]);
      };
    } else B = function() {
      return D;
    };
    for (var z = [], x = [], O = [], T = 0; T < y; T++) {
      O.push(z.length);
      var Y = T - w;
      if (Y >= 0 && Y < M) {
        var q = B(Y);
        b(q, A) || (x.push(Y + _), z.push(q));
      }
    }
    return O.push(z.length), new i({ values: z, index: x, ptr: O, size: [F, y] });
  }, i.prototype.swapRows = function(l, D) {
    if (!Nr(l) || !Ir(l) || !Nr(D) || !Ir(D)) throw new Error("Row index must be positive integers");
    if (this._size.length !== 2) throw new Error("Only two dimensional matrix is supported");
    return qr(l, this._size[0]), qr(D, this._size[0]), i._swapRows(l, D, this._size[1], this._values, this._index, this._ptr), this;
  }, i._forEachRow = function(l, D, m, C, g) {
    for (var b = C[l], A = C[l + 1], w = b; w < A; w++) g(m[w], D[w]);
  }, i._swapRows = function(l, D, m, C, g, b) {
    for (var A = 0; A < m; A++) {
      var w = b[A], _ = b[A + 1], F = c(l, w, _, g), y = c(D, w, _, g);
      if (F < _ && y < _ && g[F] === l && g[y] === D) {
        if (C) {
          var M = C[F];
          C[F] = C[y], C[y] = M;
        }
        continue;
      }
      if (F < _ && g[F] === l && (y >= _ || g[y] !== D)) {
        var B = C ? C[F] : void 0;
        g.splice(y, 0, D), C && C.splice(y, 0, B), g.splice(y <= F ? F + 1 : F, 1), C && C.splice(y <= F ? F + 1 : F, 1);
        continue;
      }
      if (y < _ && g[y] === D && (F >= _ || g[F] !== l)) {
        var S = C ? C[y] : void 0;
        g.splice(F, 0, l), C && C.splice(F, 0, S), g.splice(F <= y ? y + 1 : y, 1), C && C.splice(F <= y ? y + 1 : y, 1);
      }
    }
  }, i;
}, { isClass: true }), qs = "number", Rs = ["typed"];
function Us(r) {
  var e = r.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);
  if (e) {
    var t = { "0b": 2, "0o": 8, "0x": 16 }[e[1]], n = e[2], i = e[3];
    return { input: r, radix: t, integerPart: n, fractionalPart: i };
  } else return null;
}
function Ls(r) {
  for (var e = parseInt(r.integerPart, r.radix), t = 0, n = 0; n < r.fractionalPart.length; n++) {
    var i = parseInt(r.fractionalPart[n], r.radix);
    t += i / Math.pow(r.radix, n + 1);
  }
  var u = e + t;
  if (isNaN(u)) throw new SyntaxError('String "' + r.input + '" is not a valid number');
  return u;
}
var Zs = rr(qs, Rs, (r) => {
  var { typed: e } = r, t = e("number", { "": function() {
    return 0;
  }, number: function(i) {
    return i;
  }, string: function(i) {
    if (i === "NaN") return NaN;
    var u = Us(i);
    if (u) return Ls(u);
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
  }, "Array | Matrix": e.referToSelf((n) => (i) => te(i, n)) });
  return t.fromJSON = function(n) {
    return parseFloat(n.value);
  }, t;
}), Vs = "bignumber", Ws = ["typed", "BigNumber"], Js = rr(Vs, Ws, (r) => {
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
  }, "Array | Matrix": e.referToSelf((n) => (i) => te(i, n)) });
}), Ys = "complex", Qs = ["typed", "Complex"], Xs = rr(Ys, Qs, (r) => {
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
  }, "Array | Matrix": e.referToSelf((n) => (i) => te(i, n)) });
}), Gs = "fraction", Ks = ["typed", "Fraction"], Hs = rr(Gs, Ks, (r) => {
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
  }, "Array | Matrix": e.referToSelf((n) => (i) => te(i, n)) });
}), On = "matrix", ks = ["typed", "Matrix", "DenseMatrix", "SparseMatrix"], js = rr(On, ks, (r) => {
  var { typed: e, Matrix: t, DenseMatrix: n, SparseMatrix: i } = r;
  return e(On, { "": function() {
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
}), $n = "matrixFromColumns", rf = ["typed", "matrix", "flatten", "size"], ef = rr($n, rf, (r) => {
  var { typed: e, matrix: t, flatten: n, size: i } = r;
  return e($n, { "...Array": function(f) {
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
}), Pn = "unaryMinus", tf = ["typed"], nf = rr(Pn, tf, (r) => {
  var { typed: e } = r;
  return e(Pn, { number: iu, "Complex | BigNumber | Fraction": (t) => t.neg(), bigint: (t) => -t, Unit: e.referToSelf((t) => (n) => {
    var i = n.clone();
    return i.value = e.find(t, i.valueType())(n.value), i;
  }), "Array | Matrix": e.referToSelf((t) => (n) => te(n, t, true)) });
}), qn = "abs", uf = ["typed"], af = rr(qn, uf, (r) => {
  var { typed: e } = r;
  return e(qn, { number: ru, "Complex | BigNumber | Fraction | Unit": (t) => t.abs(), bigint: (t) => t < 0n ? -t : t, "Array | Matrix": e.referToSelf((t) => (n) => te(n, t, true)) });
}), Rn = "addScalar", of = ["typed"], sf = rr(Rn, of, (r) => {
  var { typed: e } = r;
  return e(Rn, { "number, number": eu, "Complex, Complex": function(n, i) {
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
}), Un = "subtractScalar", ff = ["typed"], cf = rr(Un, ff, (r) => {
  var { typed: e } = r;
  return e(Un, { "number, number": tu, "Complex, Complex": function(n, i) {
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
}), lf = "matAlgo11xS0s", hf = ["typed", "equalScalar"], ou = rr(lf, hf, (r) => {
  var { typed: e, equalScalar: t } = r;
  return function(i, u, a, o) {
    var f = i._values, c = i._index, s = i._ptr, h = i._size, p = i._datatype;
    if (!f) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = h[0], d = h[1], l, D = t, m = 0, C = a;
    typeof p == "string" && (l = p, D = e.find(t, [l, l]), m = e.convert(0, l), u = e.convert(u, l), C = e.find(a, [l, l]));
    for (var g = [], b = [], A = [], w = 0; w < d; w++) {
      A[w] = b.length;
      for (var _ = s[w], F = s[w + 1], y = _; y < F; y++) {
        var M = c[y], B = o ? C(u, f[y]) : C(f[y], u);
        D(B, m) || (b.push(M), g.push(B));
      }
    }
    return A[d] = b.length, i.createSparseMatrix({ values: g, index: b, ptr: A, size: [v, d], datatype: l });
  };
}), vf = "matAlgo12xSfs", pf = ["typed", "DenseMatrix"], Le = rr(vf, pf, (r) => {
  var { typed: e, DenseMatrix: t } = r;
  return function(i, u, a, o) {
    var f = i._values, c = i._index, s = i._ptr, h = i._size, p = i._datatype;
    if (!f) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = h[0], d = h[1], l, D = a;
    typeof p == "string" && (l = p, u = e.convert(u, l), D = e.find(a, [l, l]));
    for (var m = [], C = [], g = [], b = 0; b < d; b++) {
      for (var A = b + 1, w = s[b], _ = s[b + 1], F = w; F < _; F++) {
        var y = c[F];
        C[y] = f[F], g[y] = A;
      }
      for (var M = 0; M < v; M++) b === 0 && (m[M] = []), g[M] === A ? m[M][b] = o ? D(u, C[M]) : D(C[M], u) : m[M][b] = o ? D(u, 0) : D(0, u);
    }
    return new t({ data: m, size: [v, d], datatype: l });
  };
}), df = "matAlgo14xDs", Df = ["typed"], un = rr(df, Df, (r) => {
  var { typed: e } = r;
  return function(i, u, a, o) {
    var f = i._data, c = i._size, s = i._datatype, h, p = a;
    typeof s == "string" && (h = s, u = e.convert(u, h), p = e.find(a, [h, h]));
    var v = c.length > 0 ? t(p, 0, c, c[0], f, u, o) : [];
    return i.createDenseMatrix({ data: v, size: Ar(c), datatype: h });
  };
  function t(n, i, u, a, o, f, c) {
    var s = [];
    if (i === u.length - 1) for (var h = 0; h < a; h++) s[h] = c ? n(f, o[h]) : n(o[h], f);
    else for (var p = 0; p < a; p++) s[p] = t(n, i + 1, u, u[i + 1], o[p], f, c);
    return s;
  }
}), mf = "matAlgo03xDSf", gf = ["typed"], Ze = rr(mf, gf, (r) => {
  var { typed: e } = r;
  return function(n, i, u, a) {
    var o = n._data, f = n._size, c = n._datatype || n.getDataType(), s = i._values, h = i._index, p = i._ptr, v = i._size, d = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (f.length !== v.length) throw new Er(f.length, v.length);
    if (f[0] !== v[0] || f[1] !== v[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + v + ")");
    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var l = f[0], D = f[1], m, C = 0, g = u;
    typeof c == "string" && c === d && c !== "mixed" && (m = c, C = e.convert(0, m), g = e.find(u, [m, m]));
    for (var b = [], A = 0; A < l; A++) b[A] = [];
    for (var w = [], _ = [], F = 0; F < D; F++) {
      for (var y = F + 1, M = p[F], B = p[F + 1], S = M; S < B; S++) {
        var z = h[S];
        w[z] = a ? g(s[S], o[z][F]) : g(o[z][F], s[S]), _[z] = y;
      }
      for (var x = 0; x < l; x++) _[x] === y ? b[x][F] = w[x] : b[x][F] = a ? g(C, o[x][F]) : g(o[x][F], C);
    }
    return n.createDenseMatrix({ data: b, size: [l, D], datatype: c === n._datatype && d === i._datatype ? m : void 0 });
  };
}), yf = "matAlgo05xSfSf", wf = ["typed", "equalScalar"], Af = rr(yf, wf, (r) => {
  var { typed: e, equalScalar: t } = r;
  return function(i, u, a) {
    var o = i._values, f = i._index, c = i._ptr, s = i._size, h = i._datatype || i._data === void 0 ? i._datatype : i.getDataType(), p = u._values, v = u._index, d = u._ptr, l = u._size, D = u._datatype || u._data === void 0 ? u._datatype : u.getDataType();
    if (s.length !== l.length) throw new Er(s.length, l.length);
    if (s[0] !== l[0] || s[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + l + ")");
    var m = s[0], C = s[1], g, b = t, A = 0, w = a;
    typeof h == "string" && h === D && h !== "mixed" && (g = h, b = e.find(t, [g, g]), A = e.convert(0, g), w = e.find(a, [g, g]));
    var _ = o && p ? [] : void 0, F = [], y = [], M = _ ? [] : void 0, B = _ ? [] : void 0, S = [], z = [], x, O, T, Y;
    for (O = 0; O < C; O++) {
      y[O] = F.length;
      var q = O + 1;
      for (T = c[O], Y = c[O + 1]; T < Y; T++) x = f[T], F.push(x), S[x] = q, M && (M[x] = o[T]);
      for (T = d[O], Y = d[O + 1]; T < Y; T++) x = v[T], S[x] !== q && F.push(x), z[x] = q, B && (B[x] = p[T]);
      if (_) for (T = y[O]; T < F.length; ) {
        x = F[T];
        var L = S[x], tr = z[x];
        if (L === q || tr === q) {
          var or = L === q ? M[x] : A, R = tr === q ? B[x] : A, Z = w(or, R);
          b(Z, A) ? F.splice(T, 1) : (_.push(Z), T++);
        }
      }
    }
    return y[C] = F.length, i.createSparseMatrix({ values: _, index: F, ptr: y, size: [m, C], datatype: h === i._datatype && D === u._datatype ? g : void 0 });
  };
}), Ff = "matAlgo13xDD", Ef = ["typed"], Cf = rr(Ff, Ef, (r) => {
  var { typed: e } = r;
  return function(i, u, a) {
    var o = i._data, f = i._size, c = i._datatype, s = u._data, h = u._size, p = u._datatype, v = [];
    if (f.length !== h.length) throw new Er(f.length, h.length);
    for (var d = 0; d < f.length; d++) {
      if (f[d] !== h[d]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + h + ")");
      v[d] = f[d];
    }
    var l, D = a;
    typeof c == "string" && c === p && (l = c, D = e.find(a, [l, l]));
    var m = v.length > 0 ? t(D, 0, v, v[0], o, s) : [];
    return i.createDenseMatrix({ data: m, size: v, datatype: l });
  };
  function t(n, i, u, a, o, f) {
    var c = [];
    if (i === u.length - 1) for (var s = 0; s < a; s++) c[s] = n(o[s], f[s]);
    else for (var h = 0; h < a; h++) c[h] = t(n, i + 1, u, u[i + 1], o[h], f[h]);
    return c;
  }
});
function Zr(r, e) {
  if (Ae(r.size(), e.size())) return [r, e];
  var t = Hi(r.size(), e.size());
  return [r, e].map((n) => bf(n, t));
}
function bf(r, e) {
  return Ae(r.size(), e) ? r : r.create(Qt(r.valueOf(), e), r.datatype());
}
var _f = "matrixAlgorithmSuite", Bf = ["typed", "matrix"], Be = rr(_f, Bf, (r) => {
  var { typed: e, matrix: t } = r, n = Cf({ typed: e }), i = un({ typed: e });
  return function(a) {
    var o = a.elop, f = a.SD || a.DS, c;
    o ? (c = { "DenseMatrix, DenseMatrix": (v, d) => n(...Zr(v, d), o), "Array, Array": (v, d) => n(...Zr(t(v), t(d)), o).valueOf(), "Array, DenseMatrix": (v, d) => n(...Zr(t(v), d), o), "DenseMatrix, Array": (v, d) => n(...Zr(v, t(d)), o) }, a.SS && (c["SparseMatrix, SparseMatrix"] = (v, d) => a.SS(...Zr(v, d), o, false)), a.DS && (c["DenseMatrix, SparseMatrix"] = (v, d) => a.DS(...Zr(v, d), o, false), c["Array, SparseMatrix"] = (v, d) => a.DS(...Zr(t(v), d), o, false)), f && (c["SparseMatrix, DenseMatrix"] = (v, d) => f(...Zr(d, v), o, true), c["SparseMatrix, Array"] = (v, d) => f(...Zr(t(d), v), o, true))) : (c = { "DenseMatrix, DenseMatrix": e.referToSelf((v) => (d, l) => n(...Zr(d, l), v)), "Array, Array": e.referToSelf((v) => (d, l) => n(...Zr(t(d), t(l)), v).valueOf()), "Array, DenseMatrix": e.referToSelf((v) => (d, l) => n(...Zr(t(d), l), v)), "DenseMatrix, Array": e.referToSelf((v) => (d, l) => n(...Zr(d, t(l)), v)) }, a.SS && (c["SparseMatrix, SparseMatrix"] = e.referToSelf((v) => (d, l) => a.SS(...Zr(d, l), v, false))), a.DS && (c["DenseMatrix, SparseMatrix"] = e.referToSelf((v) => (d, l) => a.DS(...Zr(d, l), v, false)), c["Array, SparseMatrix"] = e.referToSelf((v) => (d, l) => a.DS(...Zr(t(d), l), v, false))), f && (c["SparseMatrix, DenseMatrix"] = e.referToSelf((v) => (d, l) => f(...Zr(l, d), v, true)), c["SparseMatrix, Array"] = e.referToSelf((v) => (d, l) => f(...Zr(t(l), d), v, true))));
    var s = a.scalar || "any", h = a.Ds || a.Ss;
    h && (o ? (c["DenseMatrix," + s] = (v, d) => i(v, d, o, false), c[s + ", DenseMatrix"] = (v, d) => i(d, v, o, true), c["Array," + s] = (v, d) => i(t(v), d, o, false).valueOf(), c[s + ", Array"] = (v, d) => i(t(d), v, o, true).valueOf()) : (c["DenseMatrix," + s] = e.referToSelf((v) => (d, l) => i(d, l, v, false)), c[s + ", DenseMatrix"] = e.referToSelf((v) => (d, l) => i(l, d, v, true)), c["Array," + s] = e.referToSelf((v) => (d, l) => i(t(d), l, v, false).valueOf()), c[s + ", Array"] = e.referToSelf((v) => (d, l) => i(t(l), d, v, true).valueOf())));
    var p = a.sS !== void 0 ? a.sS : a.Ss;
    return o ? (a.Ss && (c["SparseMatrix," + s] = (v, d) => a.Ss(v, d, o, false)), p && (c[s + ", SparseMatrix"] = (v, d) => p(d, v, o, true))) : (a.Ss && (c["SparseMatrix," + s] = e.referToSelf((v) => (d, l) => a.Ss(d, l, v, false))), p && (c[s + ", SparseMatrix"] = e.referToSelf((v) => (d, l) => p(l, d, v, true)))), o && o.signatures && Bi(c, o.signatures), c;
  };
}), Mf = "matAlgo01xDSid", Sf = ["typed"], su = rr(Mf, Sf, (r) => {
  var { typed: e } = r;
  return function(n, i, u, a) {
    var o = n._data, f = n._size, c = n._datatype || n.getDataType(), s = i._values, h = i._index, p = i._ptr, v = i._size, d = i._datatype || i._data === void 0 ? i._datatype : i.getDataType();
    if (f.length !== v.length) throw new Er(f.length, v.length);
    if (f[0] !== v[0] || f[1] !== v[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + v + ")");
    if (!s) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
    var l = f[0], D = f[1], m = typeof c == "string" && c !== "mixed" && c === d ? c : void 0, C = m ? e.find(u, [m, m]) : u, g, b, A = [];
    for (g = 0; g < l; g++) A[g] = [];
    var w = [], _ = [];
    for (b = 0; b < D; b++) {
      for (var F = b + 1, y = p[b], M = p[b + 1], B = y; B < M; B++) g = h[B], w[g] = a ? C(s[B], o[g][b]) : C(o[g][b], s[B]), _[g] = F;
      for (g = 0; g < l; g++) _[g] === F ? A[g][b] = w[g] : A[g][b] = o[g][b];
    }
    return n.createDenseMatrix({ data: A, size: [l, D], datatype: c === n._datatype && d === i._datatype ? m : void 0 });
  };
}), Nf = "matAlgo04xSidSid", xf = ["typed", "equalScalar"], Tf = rr(Nf, xf, (r) => {
  var { typed: e, equalScalar: t } = r;
  return function(i, u, a) {
    var o = i._values, f = i._index, c = i._ptr, s = i._size, h = i._datatype || i._data === void 0 ? i._datatype : i.getDataType(), p = u._values, v = u._index, d = u._ptr, l = u._size, D = u._datatype || u._data === void 0 ? u._datatype : u.getDataType();
    if (s.length !== l.length) throw new Er(s.length, l.length);
    if (s[0] !== l[0] || s[1] !== l[1]) throw new RangeError("Dimension mismatch. Matrix A (" + s + ") must match Matrix B (" + l + ")");
    var m = s[0], C = s[1], g, b = t, A = 0, w = a;
    typeof h == "string" && h === D && h !== "mixed" && (g = h, b = e.find(t, [g, g]), A = e.convert(0, g), w = e.find(a, [g, g]));
    var _ = o && p ? [] : void 0, F = [], y = [], M = o && p ? [] : void 0, B = o && p ? [] : void 0, S = [], z = [], x, O, T, Y, q;
    for (O = 0; O < C; O++) {
      y[O] = F.length;
      var L = O + 1;
      for (Y = c[O], q = c[O + 1], T = Y; T < q; T++) x = f[T], F.push(x), S[x] = L, M && (M[x] = o[T]);
      for (Y = d[O], q = d[O + 1], T = Y; T < q; T++) if (x = v[T], S[x] === L) {
        if (M) {
          var tr = w(M[x], p[T]);
          b(tr, A) ? S[x] = null : M[x] = tr;
        }
      } else F.push(x), z[x] = L, B && (B[x] = p[T]);
      if (M && B) for (T = y[O]; T < F.length; ) x = F[T], S[x] === L ? (_[T] = M[x], T++) : z[x] === L ? (_[T] = B[x], T++) : F.splice(T, 1);
    }
    return y[C] = F.length, i.createSparseMatrix({ values: _, index: F, ptr: y, size: [m, C], datatype: h === i._datatype && D === u._datatype ? g : void 0 });
  };
}), If = "matAlgo10xSids", zf = ["typed", "DenseMatrix"], fu = rr(If, zf, (r) => {
  var { typed: e, DenseMatrix: t } = r;
  return function(i, u, a, o) {
    var f = i._values, c = i._index, s = i._ptr, h = i._size, p = i._datatype;
    if (!f) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
    var v = h[0], d = h[1], l, D = a;
    typeof p == "string" && (l = p, u = e.convert(u, l), D = e.find(a, [l, l]));
    for (var m = [], C = [], g = [], b = 0; b < d; b++) {
      for (var A = b + 1, w = s[b], _ = s[b + 1], F = w; F < _; F++) {
        var y = c[F];
        C[y] = f[F], g[y] = A;
      }
      for (var M = 0; M < v; M++) b === 0 && (m[M] = []), g[M] === A ? m[M][b] = o ? D(u, C[M]) : D(C[M], u) : m[M][b] = u;
    }
    return new t({ data: m, size: [v, d], datatype: l });
  };
}), Of = "multiplyScalar", $f = ["typed"], Pf = rr(Of, $f, (r) => {
  var { typed: e } = r;
  return e("multiplyScalar", { "number, number": nu, "Complex, Complex": function(n, i) {
    return n.mul(i);
  }, "BigNumber, BigNumber": function(n, i) {
    return n.times(i);
  }, "bigint, bigint": function(n, i) {
    return n * i;
  }, "Fraction, Fraction": function(n, i) {
    return n.mul(i);
  }, "number | Fraction | BigNumber | Complex, Unit": (t, n) => n.multiply(t), "Unit, number | Fraction | BigNumber | Complex | Unit": (t, n) => t.multiply(n) });
}), Ln = "multiply", qf = ["typed", "matrix", "addScalar", "multiplyScalar", "equalScalar", "dot"], Rf = rr(Ln, qf, (r) => {
  var { typed: e, matrix: t, addScalar: n, multiplyScalar: i, equalScalar: u, dot: a } = r, o = ou({ typed: e, equalScalar: u }), f = un({ typed: e });
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
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._data, B = w._size, S = w._datatype || w.getDataType(), z = F[0], x = B[1], O, T = n, Y = i;
    y && S && y === S && typeof y == "string" && y !== "mixed" && (O = y, T = e.find(n, [O, O]), Y = e.find(i, [O, O]));
    for (var q = [], L = 0; L < x; L++) {
      for (var tr = Y(_[0], M[0][L]), or = 1; or < z; or++) tr = T(tr, Y(_[or], M[or][L]));
      q[L] = tr;
    }
    return A.createDenseMatrix({ data: q, size: [x], datatype: y === A._datatype && S === w._datatype ? O : void 0 });
  }
  var v = e("_multiplyMatrixVector", { "DenseMatrix, any": l, "SparseMatrix, any": C }), d = e("_multiplyMatrixMatrix", { "DenseMatrix, DenseMatrix": D, "DenseMatrix, SparseMatrix": m, "SparseMatrix, DenseMatrix": g, "SparseMatrix, SparseMatrix": b });
  function l(A, w) {
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._data, B = w._datatype || w.getDataType(), S = F[0], z = F[1], x, O = n, T = i;
    y && B && y === B && typeof y == "string" && y !== "mixed" && (x = y, O = e.find(n, [x, x]), T = e.find(i, [x, x]));
    for (var Y = [], q = 0; q < S; q++) {
      for (var L = _[q], tr = T(L[0], M[0]), or = 1; or < z; or++) tr = O(tr, T(L[or], M[or]));
      Y[q] = tr;
    }
    return A.createDenseMatrix({ data: Y, size: [S], datatype: y === A._datatype && B === w._datatype ? x : void 0 });
  }
  function D(A, w) {
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._data, B = w._size, S = w._datatype || w.getDataType(), z = F[0], x = F[1], O = B[1], T, Y = n, q = i;
    y && S && y === S && typeof y == "string" && y !== "mixed" && y !== "mixed" && (T = y, Y = e.find(n, [T, T]), q = e.find(i, [T, T]));
    for (var L = [], tr = 0; tr < z; tr++) {
      var or = _[tr];
      L[tr] = [];
      for (var R = 0; R < O; R++) {
        for (var Z = q(or[0], M[0][R]), er = 1; er < x; er++) Z = Y(Z, q(or[er], M[er][R]));
        L[tr][R] = Z;
      }
    }
    return A.createDenseMatrix({ data: L, size: [z, O], datatype: y === A._datatype && S === w._datatype ? T : void 0 });
  }
  function m(A, w) {
    var _ = A._data, F = A._size, y = A._datatype || A.getDataType(), M = w._values, B = w._index, S = w._ptr, z = w._size, x = w._datatype || w._data === void 0 ? w._datatype : w.getDataType();
    if (!M) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
    var O = F[0], T = z[1], Y, q = n, L = i, tr = u, or = 0;
    y && x && y === x && typeof y == "string" && y !== "mixed" && (Y = y, q = e.find(n, [Y, Y]), L = e.find(i, [Y, Y]), tr = e.find(u, [Y, Y]), or = e.convert(0, Y));
    for (var R = [], Z = [], er = [], ar = w.createSparseMatrix({ values: R, index: Z, ptr: er, size: [O, T], datatype: y === A._datatype && x === w._datatype ? Y : void 0 }), j = 0; j < T; j++) {
      er[j] = Z.length;
      var J = S[j], H = S[j + 1];
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
  function C(A, w) {
    var _ = A._values, F = A._index, y = A._ptr, M = A._datatype || A._data === void 0 ? A._datatype : A.getDataType();
    if (!_) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var B = w._data, S = w._datatype || w.getDataType(), z = A._size[0], x = w._size[0], O = [], T = [], Y = [], q, L = n, tr = i, or = u, R = 0;
    M && S && M === S && typeof M == "string" && M !== "mixed" && (q = M, L = e.find(n, [q, q]), tr = e.find(i, [q, q]), or = e.find(u, [q, q]), R = e.convert(0, q));
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
    return Y[1] = T.length, A.createSparseMatrix({ values: O, index: T, ptr: Y, size: [z, 1], datatype: M === A._datatype && S === w._datatype ? q : void 0 });
  }
  function g(A, w) {
    var _ = A._values, F = A._index, y = A._ptr, M = A._datatype || A._data === void 0 ? A._datatype : A.getDataType();
    if (!_) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
    var B = w._data, S = w._datatype || w.getDataType(), z = A._size[0], x = w._size[0], O = w._size[1], T, Y = n, q = i, L = u, tr = 0;
    M && S && M === S && typeof M == "string" && M !== "mixed" && (T = M, Y = e.find(n, [T, T]), q = e.find(i, [T, T]), L = e.find(u, [T, T]), tr = e.convert(0, T));
    for (var or = [], R = [], Z = [], er = A.createSparseMatrix({ values: or, index: R, ptr: Z, size: [z, O], datatype: M === A._datatype && S === w._datatype ? T : void 0 }), ar = [], j = [], J = 0; J < O; J++) {
      Z[J] = R.length;
      for (var H = J + 1, Q = 0; Q < x; Q++) {
        var X = B[Q][J];
        if (!L(X, tr)) for (var sr = y[Q], k = y[Q + 1], hr = sr; hr < k; hr++) {
          var dr = F[hr];
          j[dr] !== H ? (j[dr] = H, R.push(dr), ar[dr] = q(X, _[hr])) : ar[dr] = Y(ar[dr], q(X, _[hr]));
        }
      }
      for (var Dr = Z[J], gr = R.length, wr = Dr; wr < gr; wr++) {
        var Fr = R[wr];
        or[wr] = ar[Fr];
      }
    }
    return Z[O] = R.length, er;
  }
  function b(A, w) {
    var _ = A._values, F = A._index, y = A._ptr, M = A._datatype || A._data === void 0 ? A._datatype : A.getDataType(), B = w._values, S = w._index, z = w._ptr, x = w._datatype || w._data === void 0 ? w._datatype : w.getDataType(), O = A._size[0], T = w._size[1], Y = _ && B, q, L = n, tr = i;
    M && x && M === x && typeof M == "string" && M !== "mixed" && (q = M, L = e.find(n, [q, q]), tr = e.find(i, [q, q]));
    for (var or = Y ? [] : void 0, R = [], Z = [], er = A.createSparseMatrix({ values: or, index: R, ptr: Z, size: [O, T], datatype: M === A._datatype && x === w._datatype ? q : void 0 }), ar = Y ? [] : void 0, j = [], J, H, Q, X, sr, k, hr, dr, Dr = 0; Dr < T; Dr++) {
      Z[Dr] = R.length;
      var gr = Dr + 1;
      for (sr = z[Dr], k = z[Dr + 1], X = sr; X < k; X++) if (dr = S[X], Y) for (H = y[dr], Q = y[dr + 1], J = H; J < Q; J++) hr = F[J], j[hr] !== gr ? (j[hr] = gr, R.push(hr), ar[hr] = tr(B[X], _[J])) : ar[hr] = L(ar[hr], tr(B[X], _[J]));
      else for (H = y[dr], Q = y[dr + 1], J = H; J < Q; J++) hr = F[J], j[hr] !== gr && (j[hr] = gr, R.push(hr));
      if (Y) for (var wr = Z[Dr], Fr = R.length, zr = wr; zr < Fr; zr++) {
        var br = R[zr];
        or[zr] = ar[br];
      }
    }
    return Z[T] = R.length, er;
  }
  return e(Ln, i, { "Array, Array": e.referTo("Matrix, Matrix", (A) => (w, _) => {
    c(yr(w), yr(_));
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
}), Zn = "sign", Uf = ["typed", "BigNumber", "Fraction", "complex"], Lf = rr(Zn, Uf, (r) => {
  var { typed: e, BigNumber: t, complex: n, Fraction: i } = r;
  return e(Zn, { number: Xt, Complex: function(a) {
    return a.im === 0 ? n(Xt(a.re)) : a.sign();
  }, BigNumber: function(a) {
    return new t(a.cmp(0));
  }, bigint: function(a) {
    return a > 0n ? 1n : a < 0n ? -1n : 0n;
  }, Fraction: function(a) {
    return new i(a.s);
  }, "Array | Matrix": e.referToSelf((u) => (a) => te(a, u, true)), Unit: e.referToSelf((u) => (a) => {
    if (!a._isDerived() && a.units[0].unit.offset !== 0) throw new TypeError("sign is ambiguous for units with offset");
    return e.find(u, a.valueType())(a.value);
  }) });
}), Zf = "sqrt", Vf = ["config", "typed", "Complex"], Wf = rr(Zf, Vf, (r) => {
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
}), Vn = "subtract", Jf = ["typed", "matrix", "equalScalar", "subtractScalar", "unaryMinus", "DenseMatrix", "concat"], Yf = rr(Vn, Jf, (r) => {
  var { typed: e, matrix: t, equalScalar: n, subtractScalar: i, unaryMinus: u, DenseMatrix: a, concat: o } = r, f = su({ typed: e }), c = Ze({ typed: e }), s = Af({ typed: e, equalScalar: n }), h = fu({ typed: e, DenseMatrix: a }), p = Le({ typed: e, DenseMatrix: a }), v = Be({ typed: e, matrix: t, concat: o });
  return e(Vn, { "any, any": i }, v({ elop: i, SS: s, DS: f, SD: c, Ss: p, sS: h }));
}), Qf = "matAlgo07xSSf", Xf = ["typed", "SparseMatrix"], He = rr(Qf, Xf, (r) => {
  var { typed: e, SparseMatrix: t } = r;
  return function(u, a, o) {
    var f = u._size, c = u._datatype || u._data === void 0 ? u._datatype : u.getDataType(), s = a._size, h = a._datatype || a._data === void 0 ? a._datatype : a.getDataType();
    if (f.length !== s.length) throw new Er(f.length, s.length);
    if (f[0] !== s[0] || f[1] !== s[1]) throw new RangeError("Dimension mismatch. Matrix A (" + f + ") must match Matrix B (" + s + ")");
    var p = f[0], v = f[1], d, l = 0, D = o;
    typeof c == "string" && c === h && c !== "mixed" && (d = c, l = e.convert(0, d), D = e.find(o, [d, d]));
    for (var m = [], C = [], g = new Array(v + 1).fill(0), b = [], A = [], w = [], _ = [], F = 0; F < v; F++) {
      var y = F + 1, M = 0;
      n(u, F, w, b, y), n(a, F, _, A, y);
      for (var B = 0; B < p; B++) {
        var S = w[B] === y ? b[B] : l, z = _[B] === y ? A[B] : l, x = D(S, z);
        x !== 0 && x !== false && (C.push(B), m.push(x), M++);
      }
      g[F + 1] = g[F] + M;
    }
    return new t({ values: m, index: C, ptr: g, size: [p, v], datatype: c === u._datatype && h === a._datatype ? d : void 0 });
  };
  function n(i, u, a, o, f) {
    for (var c = i._values, s = i._index, h = i._ptr, p = h[u], v = h[u + 1]; p < v; p++) {
      var d = s[p];
      a[d] = f, o[d] = c[p];
    }
  }
}), Wn = "conj", Gf = ["typed"], Kf = rr(Wn, Gf, (r) => {
  var { typed: e } = r;
  return e(Wn, { "number | BigNumber | Fraction": (t) => t, Complex: (t) => t.conjugate(), "Array | Matrix": e.referToSelf((t) => (n) => te(n, t)) });
}), Jn = "im", Hf = ["typed"], kf = rr(Jn, Hf, (r) => {
  var { typed: e } = r;
  return e(Jn, { number: () => 0, "BigNumber | Fraction": (t) => t.mul(0), Complex: (t) => t.im, "Array | Matrix": e.referToSelf((t) => (n) => te(n, t)) });
}), Yn = "re", jf = ["typed"], rc = rr(Yn, jf, (r) => {
  var { typed: e } = r;
  return e(Yn, { "number | BigNumber | Fraction": (t) => t, Complex: (t) => t.re, "Array | Matrix": e.referToSelf((t) => (n) => te(n, t)) });
}), Qn = "concat", ec = ["typed", "matrix", "isInteger"], tc = rr(Qn, ec, (r) => {
  var { typed: e, matrix: t, isInteger: n } = r;
  return e(Qn, { "...Array | Matrix | number | BigNumber": function(u) {
    var a, o = u.length, f = -1, c, s = false, h = [];
    for (a = 0; a < o; a++) {
      var p = u[a];
      if (Cr(p) && (s = true), Nr(p) || Rr(p)) {
        if (a !== o - 1) throw new Error("Dimension must be specified as last argument");
        if (c = f, f = p.valueOf(), !n(f)) throw new TypeError("Integer number expected for dimension");
        if (f < 0 || a > 0 && f > c) throw new Ce(f, c + 1);
      } else {
        var v = Ar(p).valueOf(), d = yr(v);
        if (h[a] = v, c = f, f = d.length - 1, a > 0 && f !== c) throw new Er(c + 1, f + 1);
      }
    }
    if (h.length === 0) throw new SyntaxError("At least one matrix expected");
    for (var l = h.shift(); h.length; ) l = Ki(l, h.shift(), f);
    return s ? t(l) : l;
  }, "...string": function(u) {
    return u.join("");
  } });
}), Xn = "column", nc = ["typed", "Index", "matrix", "range"], ic = rr(Xn, nc, (r) => {
  var { typed: e, Index: t, matrix: n, range: i } = r;
  return e(Xn, { "Matrix, number": u, "Array, number": function(o, f) {
    return u(n(Ar(o)), f).valueOf();
  } });
  function u(a, o) {
    if (a.size().length !== 2) throw new Error("Only two dimensional matrix is supported");
    qr(o, a.size()[1]);
    var f = i(0, a.size()[0]), c = new t(f, o), s = a.subset(c);
    return Cr(s) ? s : n([[s]]);
  }
}), Gn = "cross", uc = ["typed", "matrix", "subtract", "multiply"], ac = rr(Gn, uc, (r) => {
  var { typed: e, matrix: t, subtract: n, multiply: i } = r;
  return e(Gn, { "Matrix, Matrix": function(o, f) {
    return t(u(o.toArray(), f.toArray()));
  }, "Matrix, Array": function(o, f) {
    return t(u(o.toArray(), f));
  }, "Array, Matrix": function(o, f) {
    return t(u(o, f.toArray()));
  }, "Array, Array": u });
  function u(a, o) {
    var f = Math.max(yr(a).length, yr(o).length);
    a = Sn(a), o = Sn(o);
    var c = yr(a), s = yr(o);
    if (c.length !== 1 || s.length !== 1 || c[0] !== 3 || s[0] !== 3) throw new RangeError("Vectors with length 3 expected (Size A = [" + c.join(", ") + "], B = [" + s.join(", ") + "])");
    var h = [n(i(a[1], o[2]), i(a[2], o[1])), n(i(a[2], o[0]), i(a[0], o[2])), n(i(a[0], o[1]), i(a[1], o[0]))];
    return f > 1 ? [h] : h;
  }
}), Kn = "diag", oc = ["typed", "matrix", "DenseMatrix", "SparseMatrix"], sc = rr(Kn, oc, (r) => {
  var { typed: e, matrix: t, DenseMatrix: n, SparseMatrix: i } = r;
  return e(Kn, { Array: function(c) {
    return u(c, 0, yr(c), null);
  }, "Array, number": function(c, s) {
    return u(c, s, yr(c), null);
  }, "Array, BigNumber": function(c, s) {
    return u(c, s.toNumber(), yr(c), null);
  }, "Array, string": function(c, s) {
    return u(c, 0, yr(c), s);
  }, "Array, number, string": function(c, s, h) {
    return u(c, s, yr(c), h);
  }, "Array, BigNumber, string": function(c, s, h) {
    return u(c, s.toNumber(), yr(c), h);
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
    if (!Ir(c)) throw new TypeError("Second parameter in function diag must be an integer");
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
    for (var l = Math.min(h[0] - p, h[1] - v), D = [], m = 0; m < l; m++) D[m] = f[m + p][m + v];
    return s !== null ? t(D) : D;
  }
}), Hn = "flatten", fc = ["typed"], cc = rr(Hn, fc, (r) => {
  var { typed: e } = r;
  return e(Hn, { Array: function(n) {
    return Yt(n);
  }, Matrix: function(n) {
    return n.create(Yt(n.valueOf(), true), n.datatype());
  } });
}), kn = "getMatrixDataType", lc = ["typed"], hc = rr(kn, lc, (r) => {
  var { typed: e } = r;
  return e(kn, { Array: function(n) {
    return _t(n, ee);
  }, Matrix: function(n) {
    return n.getDataType();
  } });
}), jn = "identity", vc = ["typed", "config", "matrix", "BigNumber", "DenseMatrix", "SparseMatrix"], pc = rr(jn, vc, (r) => {
  var { typed: e, config: t, matrix: n, BigNumber: i, DenseMatrix: u, SparseMatrix: a } = r;
  return e(jn, { "": function() {
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
    if (Rr(c) && (c = c.toNumber()), Rr(s) && (s = s.toNumber()), !Ir(c) || c < 1) throw new Error("Parameters in function identity must be positive integers");
    if (!Ir(s) || s < 1) throw new Error("Parameters in function identity must be positive integers");
    var v = p ? new i(1) : 1, d = p ? new p(0) : 0, l = [c, s];
    if (h) {
      if (h === "sparse") return a.diagonal(l, v, 0, d);
      if (h === "dense") return u.diagonal(l, v, 0, d);
      throw new TypeError('Unknown matrix type "'.concat(h, '"'));
    }
    for (var D = ht([], l, d), m = c < s ? c : s, C = 0; C < m; C++) D[C][C] = v;
    return D;
  }
}), ri = "kron", dc = ["typed", "matrix", "multiplyScalar"], Dc = rr(ri, dc, (r) => {
  var { typed: e, matrix: t, multiplyScalar: n } = r;
  return e(ri, { "Matrix, Matrix": function(a, o) {
    return t(i(a.toArray(), o.toArray()));
  }, "Matrix, Array": function(a, o) {
    return t(i(a.toArray(), o));
  }, "Array, Matrix": function(a, o) {
    return t(i(a, o.toArray()));
  }, "Array, Array": i });
  function i(u, a) {
    if (yr(u).length === 1 && (u = [u]), yr(a).length === 1 && (a = [a]), yr(u).length > 2 || yr(a).length > 2) throw new RangeError("Vectors with dimensions greater then 2 are not supported expected (Size x = " + JSON.stringify(u.length) + ", y = " + JSON.stringify(a.length) + ")");
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
function cu() {
  throw new Error('No "bignumber" implementation available');
}
function mc() {
  throw new Error('No "fraction" implementation available');
}
function lu() {
  throw new Error('No "matrix" implementation available');
}
var ei = "range", gc = ["typed", "config", "?matrix", "?bignumber", "smaller", "smallerEq", "larger", "largerEq", "add", "isPositive"], yc = rr(ei, gc, (r) => {
  var { typed: e, config: t, matrix: n, bignumber: i, smaller: u, smallerEq: a, larger: o, largerEq: f, add: c, isPositive: s } = r;
  return e(ei, { string: p, "string, boolean": p, number: function(D) {
    throw new TypeError("Too few arguments to function range(): ".concat(D));
  }, boolean: function(D) {
    throw new TypeError("Unexpected type of argument 1 to function range(): ".concat(D, ", number|bigint|BigNumber|Fraction"));
  }, "number, number": function(D, m) {
    return h(v(D, m, 1, false));
  }, "number, number, number": function(D, m, C) {
    return h(v(D, m, C, false));
  }, "number, number, boolean": function(D, m, C) {
    return h(v(D, m, 1, C));
  }, "number, number, number, boolean": function(D, m, C, g) {
    return h(v(D, m, C, g));
  }, "bigint, bigint|number": function(D, m) {
    return h(v(D, m, 1n, false));
  }, "number, bigint": function(D, m) {
    return h(v(BigInt(D), m, 1n, false));
  }, "bigint, bigint|number, bigint|number": function(D, m, C) {
    return h(v(D, m, BigInt(C), false));
  }, "number, bigint, bigint|number": function(D, m, C) {
    return h(v(BigInt(D), m, BigInt(C), false));
  }, "bigint, bigint|number, boolean": function(D, m, C) {
    return h(v(D, m, 1n, C));
  }, "number, bigint, boolean": function(D, m, C) {
    return h(v(BigInt(D), m, 1n, C));
  }, "bigint, bigint|number, bigint|number, boolean": function(D, m, C, g) {
    return h(v(D, m, BigInt(C), g));
  }, "number, bigint, bigint|number, boolean": function(D, m, C, g) {
    return h(v(BigInt(D), m, BigInt(C), g));
  }, "BigNumber, BigNumber": function(D, m) {
    var C = D.constructor;
    return h(v(D, m, new C(1), false));
  }, "BigNumber, BigNumber, BigNumber": function(D, m, C) {
    return h(v(D, m, C, false));
  }, "BigNumber, BigNumber, boolean": function(D, m, C) {
    var g = D.constructor;
    return h(v(D, m, new g(1), C));
  }, "BigNumber, BigNumber, BigNumber, boolean": function(D, m, C, g) {
    return h(v(D, m, C, g));
  }, "Fraction, Fraction": function(D, m) {
    return h(v(D, m, 1, false));
  }, "Fraction, Fraction, Fraction": function(D, m, C) {
    return h(v(D, m, C, false));
  }, "Fraction, Fraction, boolean": function(D, m, C) {
    return h(v(D, m, 1, C));
  }, "Fraction, Fraction, Fraction, boolean": function(D, m, C, g) {
    return h(v(D, m, C, g));
  }, "Unit, Unit, Unit": function(D, m, C) {
    return h(v(D, m, C, false));
  }, "Unit, Unit, Unit, boolean": function(D, m, C, g) {
    return h(v(D, m, C, g));
  } });
  function h(l) {
    return t.matrix === "Matrix" ? n ? n(l) : lu() : l;
  }
  function p(l, D) {
    var m = d(l);
    if (!m) throw new SyntaxError('String "' + l + '" is no valid range');
    return t.number === "BigNumber" ? (i === void 0 && cu(), h(v(i(m.start), i(m.end), i(m.step)))) : h(v(m.start, m.end, m.step, D));
  }
  function v(l, D, m, C) {
    for (var g = [], b = s(m) ? C ? a : u : C ? f : o, A = l; b(A, D); ) g.push(A), A = c(A, m);
    return g;
  }
  function d(l) {
    var D = l.split(":"), m = D.map(function(g) {
      return Number(g);
    }), C = m.some(function(g) {
      return isNaN(g);
    });
    if (C) return null;
    switch (m.length) {
      case 2:
        return { start: m[0], end: m[1], step: 1 };
      case 3:
        return { start: m[0], end: m[2], step: m[1] };
      default:
        return null;
    }
  }
}), ti = "reshape", wc = ["typed", "isInteger", "matrix"], Ac = rr(ti, wc, (r) => {
  var { typed: e, isInteger: t } = r;
  return e(ti, { "Matrix, Array": function(i, u) {
    return i.reshape(u, true);
  }, "Array, Array": function(i, u) {
    return u.forEach(function(a) {
      if (!t(a)) throw new TypeError("Invalid size for dimension: " + a);
    }), en(i, u);
  } });
}), ni = "size", Fc = ["typed", "config", "?matrix"], Ec = rr(ni, Fc, (r) => {
  var { typed: e, config: t, matrix: n } = r;
  return e(ni, { Matrix: function(u) {
    return u.create(u.size(), "number");
  }, Array: yr, string: function(u) {
    return t.matrix === "Array" ? [u.length] : n([u.length], "dense", "number");
  }, "number | Complex | BigNumber | Unit | boolean | null": function(u) {
    return t.matrix === "Array" ? [] : n ? n([], "dense", "number") : lu();
  } });
}), ii = "transpose", Cc = ["typed", "matrix"], bc = rr(ii, Cc, (r) => {
  var { typed: e, matrix: t } = r;
  return e(ii, { Array: (a) => n(t(a)).valueOf(), Matrix: n, any: Ar });
  function n(a) {
    var o = a.size(), f;
    switch (o.length) {
      case 1:
        f = a.clone();
        break;
      case 2:
        {
          var c = o[0], s = o[1];
          if (s === 0) throw new RangeError("Cannot transpose a 2D matrix with no columns (size: " + Or(o) + ")");
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
        throw new RangeError("Matrix must be a vector or two dimensional (size: " + Or(o) + ")");
    }
    return f;
  }
  function i(a, o, f) {
    for (var c = a._data, s = [], h, p = 0; p < f; p++) {
      h = s[p] = [];
      for (var v = 0; v < o; v++) h[v] = Ar(c[v][p]);
    }
    return a.createDenseMatrix({ data: s, size: [f, o], datatype: a._datatype });
  }
  function u(a, o, f) {
    for (var c = a._values, s = a._index, h = a._ptr, p = c ? [] : void 0, v = [], d = [], l = [], D = 0; D < o; D++) l[D] = 0;
    var m, C, g;
    for (m = 0, C = s.length; m < C; m++) l[s[m]]++;
    for (var b = 0, A = 0; A < o; A++) d.push(b), b += l[A], l[A] = d[A];
    for (d.push(b), g = 0; g < f; g++) for (var w = h[g], _ = h[g + 1], F = w; F < _; F++) {
      var y = l[s[F]]++;
      v[y] = g, c && (p[y] = Ar(c[F]));
    }
    return a.createSparseMatrix({ values: p, index: v, ptr: d, size: [f, o], datatype: a._datatype });
  }
}), ui = "ctranspose", _c = ["typed", "transpose", "conj"], Bc = rr(ui, _c, (r) => {
  var { typed: e, transpose: t, conj: n } = r;
  return e(ui, { any: function(u) {
    return n(t(u));
  } });
}), ai = "zeros", Mc = ["typed", "config", "matrix", "BigNumber"], Sc = rr(ai, Mc, (r) => {
  var { typed: e, config: t, matrix: n, BigNumber: i } = r;
  return e(ai, { "": function() {
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
      return f.length > 0 ? ht(v, f, h) : v;
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
      if (typeof c != "number" || !Ir(c) || c < 0) throw new Error("Parameters in function zeros must be positive integers");
    });
  }
});
function oi(r, e, t) {
  var n;
  return String(r).includes("Unexpected type") ? (n = arguments.length > 2 ? " (type: " + ee(t) + ", value: " + JSON.stringify(t) + ")" : " (type: " + r.data.actual + ")", new TypeError("Cannot calculate " + e + ", unexpected type of argument" + n)) : String(r).includes("complex numbers") ? (n = arguments.length > 2 ? " (type: " + ee(t) + ", value: " + JSON.stringify(t) + ")" : "", new TypeError("Cannot calculate " + e + ", no ordering relation is defined for complex numbers" + n)) : r;
}
var Nc = "numeric", xc = ["number", "?bignumber", "?fraction"], Tc = rr(Nc, xc, (r) => {
  var { number: e, bignumber: t, fraction: n } = r, i = { string: true, number: true, BigNumber: true, Fraction: true }, u = { number: (a) => e(a), BigNumber: t ? (a) => t(a) : cu, bigint: (a) => BigInt(a), Fraction: n ? (a) => n(a) : mc };
  return function(o) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "number", c = arguments.length > 2 ? arguments[2] : void 0;
    if (c !== void 0) throw new SyntaxError("numeric() takes one or two arguments");
    var s = ee(o);
    if (!(s in i)) throw new TypeError("Cannot convert " + o + ' of type "' + s + '"; valid input types are ' + Object.keys(i).join(", "));
    if (!(f in u)) throw new TypeError("Cannot convert " + o + ' to type "' + f + '"; valid output types are ' + Object.keys(u).join(", "));
    return f === s ? o : u[f](o);
  };
}), si = "divideScalar", Ic = ["typed", "numeric"], zc = rr(si, Ic, (r) => {
  var { typed: e, numeric: t } = r;
  return e(si, { "number, number": function(i, u) {
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
}), fi = "pow", Oc = ["typed", "config", "identity", "multiply", "matrix", "inv", "fraction", "number", "Complex"], $c = rr(fi, Oc, (r) => {
  var { typed: e, config: t, identity: n, multiply: i, matrix: u, inv: a, number: o, fraction: f, Complex: c } = r;
  return e(fi, { "number, number": s, "Complex, Complex": function(d, l) {
    return d.pow(l);
  }, "BigNumber, BigNumber": function(d, l) {
    return l.isInteger() || d >= 0 || t.predictable ? d.pow(l) : new c(d.toNumber(), 0).pow(l.toNumber(), 0);
  }, "bigint, bigint": (v, d) => v ** d, "Fraction, Fraction": function(d, l) {
    var D = d.pow(l);
    if (D != null) return D;
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
    if (t.predictable && !Ir(d) && v < 0) try {
      var l = f(d), D = o(l);
      if ((d === D || Math.abs((d - D) / d) < 1e-14) && l.d % 2n === 1n) return (l.n % 2n === 0n ? 1 : -1) * Math.pow(-v, d);
    } catch {
    }
    return t.predictable && (v < -1 && d === 1 / 0 || v > -1 && v < 0 && d === -1 / 0) ? NaN : Ir(d) || v >= 0 || t.predictable ? uu(v, d) : v * v < 1 && d === 1 / 0 || v * v > 1 && d === -1 / 0 ? 0 : new c(v, 0).pow(d, 0);
  }
  function h(v, d) {
    if (!Ir(d)) throw new TypeError("For A^b, b must be an integer (value is " + d + ")");
    var l = yr(v);
    if (l.length !== 2) throw new Error("For A^b, A must be 2 dimensional (A has " + l.length + " dimensions)");
    if (l[0] !== l[1]) throw new Error("For A^b, A must be square (size is " + l[0] + "x" + l[1] + ")");
    if (d < 0) try {
      return h(a(v), -d);
    } catch (C) {
      throw C.message === "Cannot calculate inverse, determinant is zero" ? new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is " + d + ")") : C;
    }
    for (var D = n(l[0]).valueOf(), m = v; d >= 1; ) (d & 1) === 1 && (D = i(m, D)), d >>= 1, m = i(m, m);
    return D;
  }
  function p(v, d) {
    return u(h(v.valueOf(), d));
  }
});
function hu(r) {
  var { DenseMatrix: e } = r;
  return function(n, i, u) {
    var a = n.size();
    if (a.length !== 2) throw new RangeError("Matrix must be two dimensional (size: " + Or(a) + ")");
    var o = a[0], f = a[1];
    if (o !== f) throw new RangeError("Matrix must be square (size: " + Or(a) + ")");
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
        if (Ci(i)) {
          if (u) {
            c = [];
            for (var v = 0; v < o; v++) c[v] = [h[v][0]];
            return new e({ data: c, size: [o, 1], datatype: i._datatype });
          }
          return i;
        }
        if (bi(i)) {
          for (var d = 0; d < o; d++) c[d] = [0];
          for (var l = i._values, D = i._index, m = i._ptr, C = m[1], g = m[0]; g < C; g++) {
            var b = D[g];
            c[b][0] = l[g];
          }
          return new e({ data: c, size: [o, 1], datatype: i._datatype });
        }
      }
      throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.");
    }
    if (Pr(i)) {
      var A = yr(i);
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
var ci = "usolve", Pc = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], qc = rr(ci, Pc, (r) => {
  var { typed: e, matrix: t, divideScalar: n, multiplyScalar: i, subtractScalar: u, equalScalar: a, DenseMatrix: o } = r, f = hu({ DenseMatrix: o });
  return e(ci, { "SparseMatrix, Array | Matrix": function(p, v) {
    return s(p, v);
  }, "DenseMatrix, Array | Matrix": function(p, v) {
    return c(p, v);
  }, "Array, Array | Matrix": function(p, v) {
    var d = t(p), l = c(d, v);
    return l.valueOf();
  } });
  function c(h, p) {
    p = f(h, p, true);
    for (var v = p._data, d = h._size[0], l = h._size[1], D = [], m = h._data, C = l - 1; C >= 0; C--) {
      var g = v[C][0] || 0, b = void 0;
      if (a(g, 0)) b = 0;
      else {
        var A = m[C][C];
        if (a(A, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
        b = n(g, A);
        for (var w = C - 1; w >= 0; w--) v[w] = [u(v[w][0] || 0, i(b, m[w][C]))];
      }
      D[C] = [b];
    }
    return new o({ data: D, size: [d, 1] });
  }
  function s(h, p) {
    p = f(h, p, true);
    for (var v = p._data, d = h._size[0], l = h._size[1], D = h._values, m = h._index, C = h._ptr, g = [], b = l - 1; b >= 0; b--) {
      var A = v[b][0] || 0;
      if (a(A, 0)) g[b] = [0];
      else {
        for (var w = 0, _ = [], F = [], y = C[b], M = C[b + 1], B = M - 1; B >= y; B--) {
          var S = m[B];
          S === b ? w = D[B] : S < b && (_.push(D[B]), F.push(S));
        }
        if (a(w, 0)) throw new Error("Linear system cannot be solved since matrix is singular");
        for (var z = n(A, w), x = 0, O = F.length; x < O; x++) {
          var T = F[x];
          v[T] = [u(v[T][0], i(z, _[x]))];
        }
        g[b] = [z];
      }
    }
    return new o({ data: g, size: [d, 1] });
  }
}), li = "usolveAll", Rc = ["typed", "matrix", "divideScalar", "multiplyScalar", "subtractScalar", "equalScalar", "DenseMatrix"], Uc = rr(li, Rc, (r) => {
  var { typed: e, matrix: t, divideScalar: n, multiplyScalar: i, subtractScalar: u, equalScalar: a, DenseMatrix: o } = r, f = hu({ DenseMatrix: o });
  return e(li, { "SparseMatrix, Array | Matrix": function(p, v) {
    return s(p, v);
  }, "DenseMatrix, Array | Matrix": function(p, v) {
    return c(p, v);
  }, "Array, Array | Matrix": function(p, v) {
    var d = t(p), l = c(d, v);
    return l.map((D) => D.valueOf());
  } });
  function c(h, p) {
    for (var v = [f(h, p, true)._data.map((F) => F[0])], d = h._data, l = h._size[0], D = h._size[1], m = D - 1; m >= 0; m--) for (var C = v.length, g = 0; g < C; g++) {
      var b = v[g];
      if (a(d[m][m], 0)) if (a(b[m], 0)) {
        if (g === 0) {
          var w = [...b];
          w[m] = 1;
          for (var _ = m - 1; _ >= 0; _--) w[_] = u(w[_], d[_][m]);
          v.push(w);
        }
      } else {
        if (g === 0) return [];
        v.splice(g, 1), g -= 1, C -= 1;
      }
      else {
        b[m] = n(b[m], d[m][m]);
        for (var A = m - 1; A >= 0; A--) b[A] = u(b[A], i(b[m], d[A][m]));
      }
    }
    return v.map((F) => new o({ data: F.map((y) => [y]), size: [l, 1] }));
  }
  function s(h, p) {
    for (var v = [f(h, p, true)._data.map((or) => or[0])], d = h._size[0], l = h._size[1], D = h._values, m = h._index, C = h._ptr, g = l - 1; g >= 0; g--) for (var b = v.length, A = 0; A < b; A++) {
      for (var w = v[A], _ = [], F = [], y = C[g], M = C[g + 1], B = 0, S = M - 1; S >= y; S--) {
        var z = m[S];
        z === g ? B = D[S] : z < g && (_.push(D[S]), F.push(z));
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
        v.splice(A, 1), A -= 1, b -= 1;
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
}), Dt = "equal", Lc = ["typed", "matrix", "equalScalar", "DenseMatrix", "concat", "SparseMatrix"], Zc = rr(Dt, Lc, (r) => {
  var { typed: e, matrix: t, equalScalar: n, DenseMatrix: i, concat: u, SparseMatrix: a } = r, o = Ze({ typed: e }), f = He({ typed: e, SparseMatrix: a }), c = Le({ typed: e, DenseMatrix: i }), s = Be({ typed: e, matrix: t, concat: u });
  return e(Dt, Vc({ typed: e, equalScalar: n }), s({ elop: n, SS: f, DS: o, Ss: c }));
}), Vc = rr(Dt, ["typed", "equalScalar"], (r) => {
  var { typed: e, equalScalar: t } = r;
  return e(Dt, { "any, any": function(i, u) {
    return i === null ? u === null : u === null ? i === null : i === void 0 ? u === void 0 : u === void 0 ? i === void 0 : t(i, u);
  } });
}), mt = "smaller", Wc = ["typed", "config", "bignumber", "matrix", "DenseMatrix", "concat", "SparseMatrix"], Jc = rr(mt, Wc, (r) => {
  var { typed: e, config: t, bignumber: n, matrix: i, DenseMatrix: u, concat: a, SparseMatrix: o } = r, f = Ze({ typed: e }), c = He({ typed: e, SparseMatrix: o }), s = Le({ typed: e, DenseMatrix: u }), h = Be({ typed: e, matrix: i, concat: a }), p = Ke({ typed: e });
  function v(d, l) {
    return d.lt(l) && !Ue(d, l, t.relTol, t.absTol);
  }
  return e(mt, Yc({ typed: e, config: t }), { "boolean, boolean": (d, l) => d < l, "BigNumber, BigNumber": v, "bigint, bigint": (d, l) => d < l, "Fraction, Fraction": (d, l) => d.compare(l) === -1, "Fraction, BigNumber": function(l, D) {
    return v(n(l), D);
  }, "BigNumber, Fraction": function(l, D) {
    return v(l, n(D));
  }, "Complex, Complex": function(l, D) {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, p, h({ SS: c, DS: f, Ss: s }));
}), Yc = rr(mt, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(mt, { "number, number": function(i, u) {
    return i < u && !De(i, u, t.relTol, t.absTol);
  } });
}), gt = "smallerEq", Qc = ["typed", "config", "matrix", "DenseMatrix", "concat", "SparseMatrix"], Xc = rr(gt, Qc, (r) => {
  var { typed: e, config: t, matrix: n, DenseMatrix: i, concat: u, SparseMatrix: a } = r, o = Ze({ typed: e }), f = He({ typed: e, SparseMatrix: a }), c = Le({ typed: e, DenseMatrix: i }), s = Be({ typed: e, matrix: n, concat: u }), h = Ke({ typed: e });
  return e(gt, Gc({ typed: e, config: t }), { "boolean, boolean": (p, v) => p <= v, "BigNumber, BigNumber": function(v, d) {
    return v.lte(d) || Ue(v, d, t.relTol, t.absTol);
  }, "bigint, bigint": (p, v) => p <= v, "Fraction, Fraction": (p, v) => p.compare(v) !== 1, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, h, s({ SS: f, DS: o, Ss: c }));
}), Gc = rr(gt, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(gt, { "number, number": function(i, u) {
    return i <= u || De(i, u, t.relTol, t.absTol);
  } });
}), yt = "larger", Kc = ["typed", "config", "bignumber", "matrix", "DenseMatrix", "concat", "SparseMatrix"], Hc = rr(yt, Kc, (r) => {
  var { typed: e, config: t, bignumber: n, matrix: i, DenseMatrix: u, concat: a, SparseMatrix: o } = r, f = Ze({ typed: e }), c = He({ typed: e, SparseMatrix: o }), s = Le({ typed: e, DenseMatrix: u }), h = Be({ typed: e, matrix: i, concat: a }), p = Ke({ typed: e });
  function v(d, l) {
    return d.gt(l) && !Ue(d, l, t.relTol, t.absTol);
  }
  return e(yt, kc({ typed: e, config: t }), { "boolean, boolean": (d, l) => d > l, "BigNumber, BigNumber": v, "bigint, bigint": (d, l) => d > l, "Fraction, Fraction": (d, l) => d.compare(l) === 1, "Fraction, BigNumber": function(l, D) {
    return v(n(l), D);
  }, "BigNumber, Fraction": function(l, D) {
    return v(l, n(D));
  }, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, p, h({ SS: c, DS: f, Ss: s }));
}), kc = rr(yt, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(yt, { "number, number": function(i, u) {
    return i > u && !De(i, u, t.relTol, t.absTol);
  } });
}), wt = "largerEq", jc = ["typed", "config", "matrix", "DenseMatrix", "concat", "SparseMatrix"], r0 = rr(wt, jc, (r) => {
  var { typed: e, config: t, matrix: n, DenseMatrix: i, concat: u, SparseMatrix: a } = r, o = Ze({ typed: e }), f = He({ typed: e, SparseMatrix: a }), c = Le({ typed: e, DenseMatrix: i }), s = Be({ typed: e, matrix: n, concat: u }), h = Ke({ typed: e });
  return e(wt, e0({ typed: e, config: t }), { "boolean, boolean": (p, v) => p >= v, "BigNumber, BigNumber": function(v, d) {
    return v.gte(d) || Ue(v, d, t.relTol, t.absTol);
  }, "bigint, bigint": function(v, d) {
    return v >= d;
  }, "Fraction, Fraction": (p, v) => p.compare(v) !== -1, "Complex, Complex": function() {
    throw new TypeError("No ordering relation is defined for complex numbers");
  } }, h, s({ SS: f, DS: o, Ss: c }));
}), e0 = rr(wt, ["typed", "config"], (r) => {
  var { typed: e, config: t } = r;
  return e(wt, { "number, number": function(i, u) {
    return i >= u || De(i, u, t.relTol, t.absTol);
  } });
}), t0 = "ImmutableDenseMatrix", n0 = ["smaller", "DenseMatrix"], i0 = rr(t0, n0, (r) => {
  var { smaller: e, DenseMatrix: t } = r;
  function n(i, u) {
    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
    if (u && !fe(u)) throw new Error("Invalid datatype: " + u);
    if (Cr(i) || Pr(i)) {
      var a = new t(i, u);
      this._data = a._data, this._size = a._size, this._datatype = a._datatype, this._min = null, this._max = null;
    } else if (i && Pr(i.data) && Pr(i.size)) this._data = i.data, this._size = i.size, this._datatype = i.datatype, this._min = typeof i.min < "u" ? i.min : null, this._max = typeof i.max < "u" ? i.max : null;
    else {
      if (i) throw new TypeError("Unsupported type of data (" + ee(i) + ")");
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
    return new n({ data: Ar(this._data), size: Ar(this._size), datatype: this._datatype });
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
}, { isClass: true }), u0 = "Index", a0 = ["ImmutableDenseMatrix", "getMatrixDataType"], o0 = rr(u0, a0, (r) => {
  var { ImmutableDenseMatrix: e, getMatrixDataType: t } = r;
  function n(u) {
    if (!(this instanceof n)) throw new SyntaxError("Constructor must be called with the new operator");
    this._dimensions = [], this._sourceSize = [], this._isScalar = true;
    for (var a = 0, o = arguments.length; a < o; a++) {
      var f = arguments[a], c = Pr(f), s = Cr(f), h = typeof f, p = null;
      if (_i(f)) this._dimensions.push(f), this._isScalar = false;
      else if (c || s) {
        var v = void 0;
        t(f) === "boolean" ? (c && (v = i(hi(f).valueOf())), s && (v = i(hi(f._data).valueOf())), p = f.valueOf().length) : v = i(f.valueOf()), this._dimensions.push(v);
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
    for (var a = 0, o = u.length; a < o; a++) if (typeof u[a] != "number" || !Ir(u[a])) throw new TypeError("Index parameters must be positive integer numbers");
    return new e(u);
  }
  return n.prototype.clone = function() {
    var u = new n();
    return u._dimensions = Ar(this._dimensions), u._isScalar = this._isScalar, u._sourceSize = this._sourceSize, u;
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
function hi(r) {
  var e = [];
  return r.forEach((t, n) => {
    t && e.push(n);
  }), e;
}
var s0 = "atan", f0 = ["typed"], c0 = rr(s0, f0, (r) => {
  var { typed: e } = r;
  return e("atan", { number: function(n) {
    return Math.atan(n);
  }, Complex: function(n) {
    return n.atan();
  }, BigNumber: function(n) {
    return n.atan();
  } });
}), vu = rr("trigUnit", ["typed"], (r) => {
  var { typed: e } = r;
  return { Unit: e.referToSelf((t) => (n) => {
    if (!n.hasBase(n.constructor.BASE_UNITS.ANGLE)) throw new TypeError("Unit in function cot is no angle");
    return e.find(t, n.valueType())(n.value);
  }) };
}), vi = "cos", l0 = ["typed"], h0 = rr(vi, l0, (r) => {
  var { typed: e } = r, t = vu({ typed: e });
  return e(vi, { number: Math.cos, "Complex | BigNumber": (n) => n.cos() }, t);
}), pi = "sin", v0 = ["typed"], p0 = rr(pi, v0, (r) => {
  var { typed: e } = r, t = vu({ typed: e });
  return e(pi, { number: Math.sin, "Complex | BigNumber": (n) => n.sin() }, t);
}), di = "add", d0 = ["typed", "matrix", "addScalar", "equalScalar", "DenseMatrix", "SparseMatrix", "concat"], D0 = rr(di, d0, (r) => {
  var { typed: e, matrix: t, addScalar: n, equalScalar: i, DenseMatrix: u, SparseMatrix: a, concat: o } = r, f = su({ typed: e }), c = Tf({ typed: e, equalScalar: i }), s = fu({ typed: e, DenseMatrix: u }), h = Be({ typed: e, matrix: t, concat: o });
  return e(di, { "any, any": n, "any, any, ...any": e.referToSelf((p) => (v, d, l) => {
    for (var D = p(v, d), m = 0; m < l.length; m++) D = p(D, l[m]);
    return D;
  }) }, h({ elop: n, DS: f, SS: c, Ss: s }));
}), Di = "norm", m0 = ["typed", "abs", "add", "pow", "conj", "sqrt", "multiply", "equalScalar", "larger", "smaller", "matrix", "ctranspose", "eigs"], g0 = rr(Di, m0, (r) => {
  var { typed: e, abs: t, add: n, pow: i, conj: u, sqrt: a, multiply: o, equalScalar: f, larger: c, smaller: s, matrix: h, ctranspose: p, eigs: v } = r;
  return e(Di, { number: Math.abs, Complex: function(F) {
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
  function D(_, F) {
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
  function m(_) {
    var F = 0;
    return _.forEach(function(y, M) {
      F = n(F, o(y, u(y)));
    }), t(a(F));
  }
  function C(_) {
    var F = [], y = 0;
    return _.forEach(function(M, B) {
      var S = B[1], z = n(F[S] || 0, t(M));
      c(z, y) && (y = z), F[S] = z;
    }, true), y;
  }
  function g(_) {
    var F = _.size();
    if (F[0] !== F[1]) throw new RangeError("Invalid matrix dimensions");
    var y = p(_), M = o(y, _), B = v(M).values.toArray(), S = B[B.length - 1];
    return t(a(S));
  }
  function b(_) {
    var F = [], y = 0;
    return _.forEach(function(M, B) {
      var S = B[0], z = n(F[S] || 0, t(M));
      c(z, y) && (y = z), F[S] = z;
    }, true), y;
  }
  function A(_, F) {
    if (F === 1) return C(_);
    if (F === Number.POSITIVE_INFINITY || F === "inf") return b(_);
    if (F === "fro") return m(_);
    if (F === 2) return g(_);
    throw new Error("Unsupported parameter value " + F);
  }
  function w(_, F) {
    var y = _.size();
    if (y.length === 1) return D(_, F);
    if (y.length === 2) {
      if (y[0] && y[1]) return A(_, F);
      throw new RangeError("Invalid matrix dimensions");
    }
  }
}), mi = "dot", y0 = ["typed", "addScalar", "multiplyScalar", "conj", "size"], w0 = rr(mi, y0, (r) => {
  var { typed: e, addScalar: t, multiplyScalar: n, conj: i, size: u } = r;
  return e(mi, { "Array | DenseMatrix, Array | DenseMatrix": o, "SparseMatrix, SparseMatrix": f });
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
    var p = a(s, h), v = Cr(s) ? s._data : s, d = Cr(s) ? s._datatype || s.getDataType() : void 0, l = Cr(h) ? h._data : h, D = Cr(h) ? h._datatype || h.getDataType() : void 0, m = c(s).length === 2, C = c(h).length === 2, g = t, b = n;
    if (d && D && d === D && typeof d == "string" && d !== "mixed") {
      var A = d;
      g = e.find(t, [A, A]), b = e.find(n, [A, A]);
    }
    if (!m && !C) {
      for (var w = b(i(v[0]), l[0]), _ = 1; _ < p; _++) w = g(w, b(i(v[_]), l[_]));
      return w;
    }
    if (!m && C) {
      for (var F = b(i(v[0]), l[0][0]), y = 1; y < p; y++) F = g(F, b(i(v[y]), l[y][0]));
      return F;
    }
    if (m && !C) {
      for (var M = b(i(v[0][0]), l[0]), B = 1; B < p; B++) M = g(M, b(i(v[B][0]), l[B]));
      return M;
    }
    if (m && C) {
      for (var S = b(i(v[0][0]), l[0][0]), z = 1; z < p; z++) S = g(S, b(i(v[z][0]), l[z][0]));
      return S;
    }
  }
  function f(s, h) {
    a(s, h);
    for (var p = s._index, v = s._values, d = h._index, l = h._values, D = 0, m = t, C = n, g = 0, b = 0; g < p.length && b < d.length; ) {
      var A = p[g], w = d[b];
      if (A < w) {
        g++;
        continue;
      }
      if (A > w) {
        b++;
        continue;
      }
      A === w && (D = m(D, C(v[g], l[b])), g++, b++);
    }
    return D;
  }
  function c(s) {
    return Cr(s) ? s.size() : u(s);
  }
}), gi = "qr", A0 = ["typed", "matrix", "zeros", "identity", "isZero", "equal", "sign", "sqrt", "conj", "unaryMinus", "addScalar", "divideScalar", "multiplyScalar", "subtractScalar", "complex"], F0 = rr(gi, A0, (r) => {
  var { typed: e, matrix: t, zeros: n, identity: i, isZero: u, equal: a, sign: o, sqrt: f, conj: c, unaryMinus: s, addScalar: h, divideScalar: p, multiplyScalar: v, subtractScalar: d, complex: l } = r;
  return Pe(e(gi, { DenseMatrix: function(b) {
    return m(b);
  }, SparseMatrix: function(b) {
    return C();
  }, Array: function(b) {
    var A = t(b), w = m(A);
    return { Q: w.Q.valueOf(), R: w.R.valueOf() };
  } }), { _denseQRimpl: D });
  function D(g) {
    var b = g._size[0], A = g._size[1], w = i([b], "dense"), _ = w._data, F = g.clone(), y = F._data, M, B, S, z = n([b], "");
    for (S = 0; S < Math.min(A, b); ++S) {
      var x = y[S][S], O = s(a(x, 0) ? 1 : o(x)), T = c(O), Y = 0;
      for (M = S; M < b; M++) Y = h(Y, v(y[M][S], c(y[M][S])));
      var q = v(O, f(Y));
      if (!u(q)) {
        var L = d(x, q);
        for (z[S] = 1, M = S + 1; M < b; M++) z[M] = p(y[M][S], L);
        var tr = s(c(p(L, q))), or = void 0;
        for (B = S; B < A; B++) {
          for (or = 0, M = S; M < b; M++) or = h(or, v(c(z[M]), y[M][B]));
          for (or = v(or, tr), M = S; M < b; M++) y[M][B] = v(d(y[M][B], v(z[M], or)), T);
        }
        for (M = 0; M < b; M++) {
          for (or = 0, B = S; B < b; B++) or = h(or, v(_[M][B], z[B]));
          for (or = v(or, tr), B = S; B < b; ++B) _[M][B] = p(d(_[M][B], v(or, c(z[B]))), T);
        }
      }
    }
    return { Q: w, R: F, toString: function() {
      return "Q: " + this.Q.toString() + `
R: ` + this.R.toString();
    } };
  }
  function m(g) {
    var b = D(g), A = b.R._data;
    if (g._data.length > 0) for (var w = A[0][0].type === "Complex" ? l(0) : 0, _ = 0; _ < A.length; ++_) for (var F = 0; F < _ && F < (A[0] || []).length; ++F) A[_][F] = w;
    return b;
  }
  function C(g) {
    throw new Error("qr not implemented for sparse matrices yet");
  }
}), yi = "det", E0 = ["typed", "matrix", "subtractScalar", "multiply", "divideScalar", "isZero", "unaryMinus"], C0 = rr(yi, E0, (r) => {
  var { typed: e, matrix: t, subtractScalar: n, multiply: i, divideScalar: u, isZero: a, unaryMinus: o } = r;
  return e(yi, { any: function(s) {
    return Ar(s);
  }, "Array | Matrix": function(s) {
    var h;
    switch (Cr(s) ? h = s.size() : Array.isArray(s) ? (s = t(s), h = s.size()) : h = [], h.length) {
      case 0:
        return Ar(s);
      case 1:
        if (h[0] === 1) return Ar(s.valueOf()[0]);
        if (h[0] === 0) return 1;
        throw new RangeError("Matrix must be square (size: " + Or(h) + ")");
      case 2: {
        var p = h[0], v = h[1];
        if (p === v) return f(s.clone().valueOf(), p);
        if (v === 0) return 1;
        throw new RangeError("Matrix must be square (size: " + Or(h) + ")");
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + Or(h) + ")");
    }
  } });
  function f(c, s, h) {
    if (s === 1) return Ar(c[0][0]);
    if (s === 2) return n(i(c[0][0], c[1][1]), i(c[1][0], c[0][1]));
    for (var p = false, v = new Array(s).fill(0).map((_, F) => F), d = 0; d < s; d++) {
      var l = v[d];
      if (a(c[l][d])) {
        var D = void 0;
        for (D = d + 1; D < s; D++) if (!a(c[v[D]][d])) {
          l = v[D], v[D] = v[d], v[d] = l, p = !p;
          break;
        }
        if (D === s) return c[l][d];
      }
      for (var m = c[l][d], C = d === 0 ? 1 : c[v[d - 1]][d - 1], g = d + 1; g < s; g++) for (var b = v[g], A = d + 1; A < s; A++) c[b][A] = u(n(i(c[b][A], m), i(c[b][d], c[l][A])), C);
    }
    var w = c[v[s - 1]][s - 1];
    return p ? o(w) : w;
  }
}), wi = "inv", b0 = ["typed", "matrix", "divideScalar", "addScalar", "multiply", "unaryMinus", "det", "identity", "abs"], _0 = rr(wi, b0, (r) => {
  var { typed: e, matrix: t, divideScalar: n, addScalar: i, multiply: u, unaryMinus: a, det: o, identity: f, abs: c } = r;
  return e(wi, { "Array | Matrix": function(p) {
    var v = Cr(p) ? p.size() : yr(p);
    switch (v.length) {
      case 1:
        if (v[0] === 1) return Cr(p) ? t([n(1, p.valueOf()[0])]) : [n(1, p[0])];
        throw new RangeError("Matrix must be square (size: " + Or(v) + ")");
      case 2: {
        var d = v[0], l = v[1];
        if (d === l) return Cr(p) ? t(s(p.valueOf(), d, l), p.storage()) : s(p, d, l);
        throw new RangeError("Matrix must be square (size: " + Or(v) + ")");
      }
      default:
        throw new RangeError("Matrix must be two dimensional (size: " + Or(v) + ")");
    }
  }, any: function(p) {
    return n(1, p);
  } });
  function s(h, p, v) {
    var d, l, D, m, C;
    if (p === 1) {
      if (m = h[0][0], m === 0) throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(1, m)]];
    } else if (p === 2) {
      var g = o(h);
      if (g === 0) throw Error("Cannot calculate inverse, determinant is zero");
      return [[n(h[1][1], g), n(a(h[0][1]), g)], [n(a(h[1][0]), g), n(h[0][0], g)]];
    } else {
      var b = h.concat();
      for (d = 0; d < p; d++) b[d] = b[d].concat();
      for (var A = f(p).valueOf(), w = 0; w < v; w++) {
        var _ = c(b[w][w]), F = w;
        for (d = w + 1; d < p; ) c(b[d][w]) > _ && (_ = c(b[d][w]), F = d), d++;
        if (_ === 0) throw Error("Cannot calculate inverse, determinant is zero");
        d = F, d !== w && (C = b[w], b[w] = b[d], b[d] = C, C = A[w], A[w] = A[d], A[d] = C);
        var y = b[w], M = A[w];
        for (d = 0; d < p; d++) {
          var B = b[d], S = A[d];
          if (d !== w) {
            if (B[w] !== 0) {
              for (D = n(a(B[w]), y[w]), l = w; l < v; l++) B[l] = i(B[l], u(D, y[l]));
              for (l = 0; l < v; l++) S[l] = i(S[l], u(D, M[l]));
            }
          } else {
            for (D = y[w], l = w; l < v; l++) B[l] = n(B[l], D);
            for (l = 0; l < v; l++) S[l] = n(S[l], D);
          }
        }
      }
      return A;
    }
  }
});
function B0(r) {
  var { addScalar: e, subtract: t, flatten: n, multiply: i, multiplyScalar: u, divideScalar: a, sqrt: o, abs: f, bignumber: c, diag: s, size: h, reshape: p, inv: v, qr: d, usolve: l, usolveAll: D, equal: m, complex: C, larger: g, smaller: b, matrixFromColumns: A, dot: w } = r;
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
    var J = ar === "BigNumber", H = ar === "Complex", Q = J ? c(0) : 0, X = J ? c(1) : H ? C(1) : 1, sr = J ? c(1) : 1, k = J ? c(10) : 2, hr = u(k, k), dr;
    j && (dr = Array(Z).fill(X));
    for (var Dr = false; !Dr; ) {
      Dr = true;
      for (var gr = 0; gr < Z; gr++) {
        for (var wr = Q, Fr = Q, zr = 0; zr < Z; zr++) gr !== zr && (wr = e(wr, f(R[zr][gr])), Fr = e(Fr, f(R[gr][zr])));
        if (!m(wr, 0) && !m(Fr, 0)) {
          for (var br = sr, Mr = wr, Jr = a(Fr, k), E = u(Fr, k); b(Mr, Jr); ) Mr = u(Mr, hr), br = u(br, k);
          for (; g(Mr, E); ) Mr = a(Mr, hr), br = a(br, k);
          var N = b(a(e(Mr, Fr), br), u(e(wr, Fr), 0.95));
          if (N) {
            Dr = false;
            for (var I = a(1, br), $ = 0; $ < Z; $++) gr !== $ && (R[gr][$] = u(R[gr][$], I), R[$][gr] = u(R[$][gr], br));
            j && (dr[gr] = u(dr[gr], I));
          }
        }
      }
    }
    return j ? s(dr) : null;
  }
  function y(R, Z, er, ar, j, J) {
    var H = ar === "BigNumber", Q = ar === "Complex", X = H ? c(0) : Q ? C(0) : 0;
    H && (er = c(er));
    for (var sr = 0; sr < Z - 2; sr++) {
      for (var k = 0, hr = X, dr = sr + 1; dr < Z; dr++) {
        var Dr = R[dr][sr];
        b(f(hr), f(Dr)) && (hr = Dr, k = dr);
      }
      if (!b(f(hr), er)) {
        if (k !== sr + 1) {
          var gr = R[k];
          R[k] = R[sr + 1], R[sr + 1] = gr;
          for (var wr = 0; wr < Z; wr++) {
            var Fr = R[wr][k];
            R[wr][k] = R[wr][sr + 1], R[wr][sr + 1] = Fr;
          }
          if (j) {
            var zr = J[k];
            J[k] = J[sr + 1], J[sr + 1] = zr;
          }
        }
        for (var br = sr + 2; br < Z; br++) {
          var Mr = a(R[br][sr], hr);
          if (Mr !== 0) {
            for (var Jr = 0; Jr < Z; Jr++) R[br][Jr] = t(R[br][Jr], u(Mr, R[sr + 1][Jr]));
            for (var E = 0; E < Z; E++) R[E][sr + 1] = e(R[E][sr + 1], u(Mr, R[E][br]));
            if (j) for (var N = 0; N < Z; N++) J[br][N] = t(J[br][N], u(Mr, J[sr + 1][N]));
          }
        }
      }
    }
    return J;
  }
  function M(R, Z, er, ar, j) {
    var J = ar === "BigNumber", H = ar === "Complex", Q = J ? c(1) : H ? C(1) : 1;
    J && (er = c(er));
    for (var X = Ar(R), sr = [], k = Z, hr = [], dr = j ? s(Array(Z).fill(Q)) : void 0, Dr = j ? s(Array(k).fill(Q)) : void 0, gr = 0; gr <= 100; ) {
      gr += 1;
      for (var wr = X[k - 1][k - 1], Fr = 0; Fr < k; Fr++) X[Fr][Fr] = t(X[Fr][Fr], wr);
      var { Q: zr, R: br } = d(X);
      X = i(br, zr);
      for (var Mr = 0; Mr < k; Mr++) X[Mr][Mr] = e(X[Mr][Mr], wr);
      if (j && (Dr = i(Dr, zr)), k === 1 || b(f(X[k - 1][k - 2]), er)) {
        gr = 0, sr.push(X[k - 1][k - 1]), j && (hr.unshift([[1]]), x(Dr, Z), dr = i(dr, Dr), k > 1 && (Dr = s(Array(k - 1).fill(Q)))), k -= 1, X.pop();
        for (var Jr = 0; Jr < k; Jr++) X[Jr].pop();
      } else if (k === 2 || b(f(X[k - 2][k - 3]), er)) {
        gr = 0;
        var E = S(X[k - 2][k - 2], X[k - 2][k - 1], X[k - 1][k - 2], X[k - 1][k - 1]);
        sr.push(...E), j && (hr.unshift(z(X[k - 2][k - 2], X[k - 2][k - 1], X[k - 1][k - 2], X[k - 1][k - 1], E[0], E[1], er, ar)), x(Dr, Z), dr = i(dr, Dr), k > 2 && (Dr = s(Array(k - 2).fill(Q)))), k -= 2, X.pop(), X.pop();
        for (var N = 0; N < k; N++) X[N].pop(), X[N].pop();
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
    var Q = v(er), X = i(Q, R, er), sr = H === "BigNumber", k = H === "Complex", hr = sr ? c(0) : k ? C(0) : 0, dr = sr ? c(1) : k ? C(1) : 1, Dr = [], gr = [];
    for (var wr of j) {
      var Fr = T(Dr, wr, m);
      Fr === -1 ? (Dr.push(wr), gr.push(1)) : gr[Fr] += 1;
    }
    for (var zr = [], br = Dr.length, Mr = Array(Z).fill(hr), Jr = s(Array(Z).fill(dr)), E = function() {
      var $ = Dr[N], W = t(X, i($, Jr)), U = D(W, Mr);
      for (U.shift(); U.length < gr[N]; ) {
        var ur = Y(W, Z, U, J, H);
        if (ur === null) break;
        U.push(ur);
      }
      var K = i(v(ar), er);
      U = U.map((nr) => i(K, nr)), zr.push(...U.map((nr) => ({ value: $, vector: n(nr) })));
    }, N = 0; N < br; N++) E();
    return zr;
  }
  function S(R, Z, er, ar) {
    var j = e(R, ar), J = t(u(R, ar), u(Z, er)), H = u(j, 0.5), Q = u(o(t(u(j, j), u(4, J))), 0.5);
    return [e(H, Q), t(H, Q)];
  }
  function z(R, Z, er, ar, j, J, H, Q) {
    var X = Q === "BigNumber", sr = Q === "Complex", k = X ? c(0) : sr ? C(0) : 0, hr = X ? c(1) : sr ? C(1) : 1;
    if (b(f(er), H)) return [[hr, k], [k, hr]];
    if (g(f(t(j, J)), H)) return [[t(j, ar), t(J, ar)], [er, er]];
    var dr = t(R, j), Dr = t(ar, j);
    return b(f(Z), H) && b(f(Dr), H) ? [[dr, hr], [er, k]] : [[Z, k], [Dr, hr]];
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
      if (b(tr(L(H, [X])), ar)) break;
      if (++Q >= 10) return null;
      H = or(X);
    }
    return H;
  }
  function q(R, Z, er) {
    var ar = er === "BigNumber", j = er === "Complex", J = Array(R).fill(0).map((H) => 2 * Math.random() - 1);
    return ar && (J = J.map((H) => c(H))), j && (J = J.map((H) => C(H))), J = L(J, Z), or(J, er);
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
    var er = Z === "BigNumber", ar = Z === "Complex", j = er ? c(1) : ar ? C(1) : 1;
    return i(a(j, tr(R)), R);
  }
  return _;
}
function M0(r) {
  var { config: e, addScalar: t, subtract: n, abs: i, atan: u, cos: a, sin: o, multiplyScalar: f, inv: c, bignumber: s, multiply: h, add: p } = r;
  function v(y, M) {
    var B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e.relTol, S = arguments.length > 3 ? arguments[3] : void 0, z = arguments.length > 4 ? arguments[4] : void 0;
    if (S === "number") return d(y, B, z);
    if (S === "BigNumber") return l(y, B, z);
    throw TypeError("Unsupported data type: " + S);
  }
  function d(y, M, B) {
    var S = y.length, z = Math.abs(M / S), x, O;
    if (B) {
      O = new Array(S);
      for (var T = 0; T < S; T++) O[T] = Array(S).fill(0), O[T][T] = 1;
    }
    for (var Y = w(y); Math.abs(Y[1]) >= Math.abs(z); ) {
      var q = Y[0][0], L = Y[0][1];
      x = D(y[q][q], y[L][L], y[q][L]), y = A(y, x, q, L), B && (O = C(O, x, q, L)), Y = w(y);
    }
    for (var tr = Array(S).fill(0), or = 0; or < S; or++) tr[or] = y[or][or];
    return F(Ar(tr), O, B);
  }
  function l(y, M, B) {
    var S = y.length, z = i(M / S), x, O;
    if (B) {
      O = new Array(S);
      for (var T = 0; T < S; T++) O[T] = Array(S).fill(0), O[T][T] = 1;
    }
    for (var Y = _(y); i(Y[1]) >= i(z); ) {
      var q = Y[0][0], L = Y[0][1];
      x = m(y[q][q], y[L][L], y[q][L]), y = b(y, x, q, L), B && (O = g(O, x, q, L)), Y = _(y);
    }
    for (var tr = Array(S).fill(0), or = 0; or < S; or++) tr[or] = y[or][or];
    return F(Ar(tr), O, B);
  }
  function D(y, M, B) {
    var S = M - y;
    return Math.abs(S) <= e.relTol ? Math.PI / 4 : 0.5 * Math.atan(2 * B / (M - y));
  }
  function m(y, M, B) {
    var S = n(M, y);
    return i(S) <= e.relTol ? s(-1).acos().div(4) : f(0.5, u(h(2, B, c(S))));
  }
  function C(y, M, B, S) {
    for (var z = y.length, x = Math.cos(M), O = Math.sin(M), T = Array(z).fill(0), Y = Array(z).fill(0), q = 0; q < z; q++) T[q] = x * y[q][B] - O * y[q][S], Y[q] = O * y[q][B] + x * y[q][S];
    for (var L = 0; L < z; L++) y[L][B] = T[L], y[L][S] = Y[L];
    return y;
  }
  function g(y, M, B, S) {
    for (var z = y.length, x = a(M), O = o(M), T = Array(z).fill(s(0)), Y = Array(z).fill(s(0)), q = 0; q < z; q++) T[q] = n(f(x, y[q][B]), f(O, y[q][S])), Y[q] = t(f(O, y[q][B]), f(x, y[q][S]));
    for (var L = 0; L < z; L++) y[L][B] = T[L], y[L][S] = Y[L];
    return y;
  }
  function b(y, M, B, S) {
    for (var z = y.length, x = s(a(M)), O = s(o(M)), T = f(x, x), Y = f(O, O), q = Array(z).fill(s(0)), L = Array(z).fill(s(0)), tr = h(s(2), x, O, y[B][S]), or = t(n(f(T, y[B][B]), tr), f(Y, y[S][S])), R = p(f(Y, y[B][B]), tr, f(T, y[S][S])), Z = 0; Z < z; Z++) q[Z] = n(f(x, y[B][Z]), f(O, y[S][Z])), L[Z] = t(f(O, y[B][Z]), f(x, y[S][Z]));
    y[B][B] = or, y[S][S] = R, y[B][S] = s(0), y[S][B] = s(0);
    for (var er = 0; er < z; er++) er !== B && er !== S && (y[B][er] = q[er], y[er][B] = q[er], y[S][er] = L[er], y[er][S] = L[er]);
    return y;
  }
  function A(y, M, B, S) {
    for (var z = y.length, x = Math.cos(M), O = Math.sin(M), T = x * x, Y = O * O, q = Array(z).fill(0), L = Array(z).fill(0), tr = T * y[B][B] - 2 * x * O * y[B][S] + Y * y[S][S], or = Y * y[B][B] + 2 * x * O * y[B][S] + T * y[S][S], R = 0; R < z; R++) q[R] = x * y[B][R] - O * y[S][R], L[R] = O * y[B][R] + x * y[S][R];
    y[B][B] = tr, y[S][S] = or, y[B][S] = 0, y[S][B] = 0;
    for (var Z = 0; Z < z; Z++) Z !== B && Z !== S && (y[B][Z] = q[Z], y[Z][B] = q[Z], y[S][Z] = L[Z], y[Z][S] = L[Z]);
    return y;
  }
  function w(y) {
    for (var M = y.length, B = 0, S = [0, 1], z = 0; z < M; z++) for (var x = z + 1; x < M; x++) Math.abs(B) < Math.abs(y[z][x]) && (B = Math.abs(y[z][x]), S = [z, x]);
    return [S, B];
  }
  function _(y) {
    for (var M = y.length, B = 0, S = [0, 1], z = 0; z < M; z++) for (var x = z + 1; x < M; x++) i(B) < i(y[z][x]) && (B = i(y[z][x]), S = [z, x]);
    return [S, B];
  }
  function F(y, M, B) {
    var S = y.length, z = Array(S), x;
    if (B) {
      x = Array(S);
      for (var O = 0; O < S; O++) x[O] = Array(S);
    }
    for (var T = 0; T < S; T++) {
      for (var Y = 0, q = y[0], L = 0; L < y.length; L++) i(y[L]) < i(q) && (Y = L, q = y[Y]);
      if (z[T] = y.splice(Y, 1)[0], B) for (var tr = 0; tr < S; tr++) x[T][tr] = M[tr][Y], M[tr].splice(Y, 1);
    }
    if (!B) return { values: z };
    var or = x.map((R, Z) => ({ value: z[Z], vector: R }));
    return { values: z, eigenvectors: or };
  }
  return v;
}
var S0 = "eigs", N0 = ["config", "typed", "matrix", "addScalar", "equal", "subtract", "abs", "atan", "cos", "sin", "multiplyScalar", "divideScalar", "inv", "bignumber", "multiply", "add", "larger", "column", "flatten", "number", "complex", "sqrt", "diag", "size", "reshape", "qr", "usolve", "usolveAll", "im", "re", "smaller", "matrixFromColumns", "dot"], x0 = rr(S0, N0, (r) => {
  var { config: e, typed: t, matrix: n, addScalar: i, subtract: u, equal: a, abs: o, atan: f, cos: c, sin: s, multiplyScalar: h, divideScalar: p, inv: v, bignumber: d, multiply: l, add: D, larger: m, column: C, flatten: g, number: b, complex: A, sqrt: w, diag: _, size: F, reshape: y, qr: M, usolve: B, usolveAll: S, im: z, re: x, smaller: O, matrixFromColumns: T, dot: Y } = r, q = M0({ config: e, addScalar: i, subtract: u, abs: o, atan: f, cos: c, sin: s, multiplyScalar: h, inv: v, bignumber: d, multiply: l, add: D }), L = B0({ addScalar: i, subtract: u, multiply: l, multiplyScalar: h, flatten: g, divideScalar: p, sqrt: w, abs: o, bignumber: d, diag: _, size: F, reshape: y, qr: M, inv: v, usolve: B, usolveAll: S, equal: a, complex: A, larger: m, smaller: O, matrixFromColumns: T, dot: Y });
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
    return Pe(Q, H), tr(J, Q);
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
    if (X.length !== 2 || X[0] !== X[1]) throw new RangeError("Matrix must be square (size: ".concat(Or(X), ")"));
    var sr = X[0];
    if (Z(Q, sr, J) && (er(Q, sr), R(Q, sr, J))) {
      var k = ar(j, Q, sr);
      return q(Q, sr, J, k, H);
    }
    var hr = ar(j, Q, sr);
    return L(Q, sr, J, hr, H);
  }
  function R(j, J, H) {
    for (var Q = 0; Q < J; Q++) for (var X = Q; X < J; X++) if (m(d(o(u(j[Q][X], j[X][Q]))), H)) return false;
    return true;
  }
  function Z(j, J, H) {
    for (var Q = 0; Q < J; Q++) for (var X = 0; X < J; X++) if (m(d(o(z(j[Q][X]))), H)) return false;
    return true;
  }
  function er(j, J) {
    for (var H = 0; H < J; H++) for (var Q = 0; Q < J; Q++) j[H][Q] = x(j[H][Q]);
  }
  function ar(j, J, H) {
    var Q = j.datatype();
    if (Q === "number" || Q === "BigNumber" || Q === "Complex") return Q;
    for (var X = false, sr = false, k = false, hr = 0; hr < H; hr++) for (var dr = 0; dr < H; dr++) {
      var Dr = J[hr][dr];
      if (Nr(Dr) || Kt(Dr)) X = true;
      else if (Rr(Dr)) sr = true;
      else if (Gt(Dr)) k = true;
      else throw TypeError("Unsupported type in Matrix: " + ee(Dr));
    }
    if (sr && k && console.warn("Complex BigNumbers not supported, this operation will lose precission."), k) {
      for (var gr = 0; gr < H; gr++) for (var wr = 0; wr < H; wr++) J[gr][wr] = A(J[gr][wr]);
      return "Complex";
    }
    if (sr) {
      for (var Fr = 0; Fr < H; Fr++) for (var zr = 0; zr < H; zr++) J[Fr][zr] = d(J[Fr][zr]);
      return "BigNumber";
    }
    if (X) {
      for (var br = 0; br < H; br++) for (var Mr = 0; Mr < H; Mr++) J[br][Mr] = b(J[br][Mr]);
      return "number";
    } else throw TypeError("Matrix contains unsupported types only.");
  }
}), T0 = "divide", I0 = ["typed", "matrix", "multiply", "equalScalar", "divideScalar", "inv"], z0 = rr(T0, I0, (r) => {
  var { typed: e, matrix: t, multiply: n, equalScalar: i, divideScalar: u, inv: a } = r, o = ou({ typed: e, equalScalar: i }), f = un({ typed: e });
  return e("divide", Bi({ "Array | Matrix, Array | Matrix": function(s, h) {
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
}), Ai = "mean", O0 = ["typed", "add", "divide"], $0 = rr(Ai, O0, (r) => {
  var { typed: e, add: t, divide: n } = r;
  return e(Ai, { "Array | Matrix": u, "Array | Matrix, number | BigNumber": i, "...": function(o) {
    if (Fs(o)) throw new TypeError("Scalar values expected in function mean");
    return u(o);
  } });
  function i(a, o) {
    try {
      var f = Cs(a, o, t), c = Array.isArray(a) ? yr(a) : a.size();
      return n(f, c[o]);
    } catch (s) {
      throw oi(s, "mean");
    }
  }
  function u(a) {
    var o, f = 0;
    if (Es(a, function(c) {
      try {
        o = o === void 0 ? c : t(o, c), f++;
      } catch (s) {
        throw oi(s, "mean", c);
      }
    }), f === 0) throw new Error("Cannot calculate the mean of an empty array");
    return n(o, f);
  }
}), ke = Vo({ config: Gr }), Mt = Xo({}), an = es({}), on = is({}), re = ws({ Matrix: on }), fr = Ja({ BigNumber: ke, Complex: Mt, DenseMatrix: re, Fraction: an }), sn = af({ typed: fr }), Ve = sf({ typed: fr }), P0 = c0({ typed: fr }), fn = Xs({ Complex: Mt, typed: fr }), St = Kf({ typed: fr }), q0 = h0({ typed: fr }), ve = zs({ config: Gr, typed: fr }), pu = cc({ typed: fr }), R0 = hc({ typed: fr }), U0 = kf({ typed: fr }), du = _s({ typed: fr }), L0 = Ss({ config: Gr, typed: fr }), Du = xs({ equalScalar: ve, typed: fr }), Me = Pf({ typed: fr }), cn = Zs({ typed: fr }), Z0 = rc({ typed: fr }), V0 = Lf({ BigNumber: ke, Fraction: an, complex: fn, typed: fr }), W0 = p0({ typed: fr }), me = Ps({ Matrix: on, equalScalar: ve, typed: fr }), je = cf({ typed: fr }), rt = Js({ BigNumber: ke, typed: fr }), Br = js({ DenseMatrix: re, Matrix: on, SparseMatrix: me, typed: fr }), J0 = Ac({ isInteger: du, matrix: Br, typed: fr }), ln = Wf({ Complex: Mt, config: Gr, typed: fr }), Y0 = bc({ matrix: Br, typed: fr }), Q0 = Sc({ BigNumber: ke, config: Gr, matrix: Br, typed: fr }), Se = tc({ isInteger: du, matrix: Br, typed: fr }), X0 = Bc({ conj: St, transpose: Y0, typed: fr }), G0 = sc({ DenseMatrix: re, SparseMatrix: me, matrix: Br, typed: fr }), mu = Zc({ DenseMatrix: re, SparseMatrix: me, concat: Se, equalScalar: ve, matrix: Br, typed: fr }), gu = Hs({ Fraction: an, typed: fr }), hn = pc({ BigNumber: ke, DenseMatrix: re, SparseMatrix: me, config: Gr, matrix: Br, typed: fr }), ll = Dc({ matrix: Br, multiplyScalar: Me, typed: fr }), K0 = r0({ DenseMatrix: re, SparseMatrix: me, concat: Se, config: Gr, matrix: Br, typed: fr }), H0 = Tc({ bignumber: rt, fraction: gu, number: cn }), vn = Ec({ matrix: Br, config: Gr, typed: fr }), Nt = Jc({ DenseMatrix: re, SparseMatrix: me, bignumber: rt, concat: Se, config: Gr, matrix: Br, typed: fr }), xt = nf({ typed: fr }), Tt = D0({ DenseMatrix: re, SparseMatrix: me, addScalar: Ve, concat: Se, equalScalar: ve, matrix: Br, typed: fr }), Ne = zc({ numeric: H0, typed: fr }), k0 = i0({ DenseMatrix: re, smaller: Nt }), j0 = o0({ ImmutableDenseMatrix: k0, getMatrixDataType: R0 }), pn = Hc({ DenseMatrix: re, SparseMatrix: me, bignumber: rt, concat: Se, config: Gr, matrix: Br, typed: fr }), rl = ef({ flatten: pu, matrix: Br, size: vn, typed: fr }), el = F0({ addScalar: Ve, complex: fn, conj: St, divideScalar: Ne, equal: mu, identity: hn, isZero: Du, matrix: Br, multiplyScalar: Me, sign: V0, sqrt: ln, subtractScalar: je, typed: fr, unaryMinus: xt, zeros: Q0 }), tl = Xc({ DenseMatrix: re, SparseMatrix: me, concat: Se, config: Gr, matrix: Br, typed: fr }), yu = Yf({ DenseMatrix: re, concat: Se, equalScalar: ve, matrix: Br, subtractScalar: je, typed: fr, unaryMinus: xt }), nl = qc({ DenseMatrix: re, divideScalar: Ne, equalScalar: ve, matrix: Br, multiplyScalar: Me, subtractScalar: je, typed: fr }), wu = w0({ addScalar: Ve, conj: St, multiplyScalar: Me, size: vn, typed: fr }), xe = Rf({ addScalar: Ve, dot: wu, equalScalar: ve, matrix: Br, multiplyScalar: Me, typed: fr }), il = yc({ bignumber: rt, matrix: Br, add: Tt, config: Gr, isPositive: L0, larger: pn, largerEq: K0, smaller: Nt, smallerEq: tl, typed: fr }), ul = Uc({ DenseMatrix: re, divideScalar: Ne, equalScalar: ve, matrix: Br, multiplyScalar: Me, subtractScalar: je, typed: fr }), al = ic({ Index: j0, matrix: Br, range: il, typed: fr }), hl = ac({ matrix: Br, multiply: xe, subtract: yu, typed: fr }), ol = C0({ divideScalar: Ne, isZero: Du, matrix: Br, multiply: xe, subtractScalar: je, typed: fr, unaryMinus: xt }), dn = _0({ abs: sn, addScalar: Ve, det: ol, divideScalar: Ne, identity: hn, matrix: Br, multiply: xe, typed: fr, unaryMinus: xt }), sl = $c({ Complex: Mt, config: Gr, fraction: gu, identity: hn, inv: dn, matrix: Br, multiply: xe, number: cn, typed: fr }), fl = z0({ divideScalar: Ne, equalScalar: ve, inv: dn, matrix: Br, multiply: xe, typed: fr }), cl = x0({ abs: sn, add: Tt, addScalar: Ve, atan: P0, bignumber: rt, column: al, complex: fn, config: Gr, cos: q0, diag: G0, divideScalar: Ne, dot: wu, equal: mu, flatten: pu, im: U0, inv: dn, larger: pn, matrix: Br, matrixFromColumns: rl, multiply: xe, multiplyScalar: Me, number: cn, qr: el, re: Z0, reshape: J0, sin: W0, size: vn, smaller: Nt, sqrt: ln, subtract: yu, typed: fr, usolve: nl, usolveAll: ul }), vl = $0({ add: Tt, divide: fl, typed: fr }), pl = g0({ abs: sn, add: Tt, conj: St, ctranspose: X0, eigs: cl, equalScalar: ve, larger: pn, matrix: Br, multiply: xe, pow: sl, smaller: Nt, sqrt: ln, typed: fr });
export {
  Tt as a,
  wu as b,
  hl as c,
  fl as d,
  Br as e,
  vl as f,
  hn as i,
  ll as k,
  xe as m,
  pl as n,
  yu as s,
  Y0 as t,
  Q0 as z
};
