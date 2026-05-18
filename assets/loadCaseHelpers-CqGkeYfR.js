import { a as J } from "./analyze-DNPn2SjO.js";
import { d as j, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let k, Q, K;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function w(t, a) {
    const s = t.D_out, c = t.t_HSS;
    if (a === 0) {
      const o = s - 2 * c, A = s * s - o * o, r = (s ** 4 - o ** 4) / 12, I = 2 * r, M = A, e = r, l = I, h = t.E_s, _ = h / 2.6, E = t.gamma_s * A, u = `HSS${(s * 1e3).toFixed(0)}x${(s * 1e3).toFixed(0)}x${(c * 1e3).toFixed(0)}`;
      return {
        matKey: a,
        A_eq: M,
        I_eq: e,
        J_eq: l,
        E_col: h,
        G_col: _,
        q: E,
        sectionLabel: `HSS ${(s * 1e3).toFixed(0)}\xD7${(s * 1e3).toFixed(0)}\xD7${(c * 1e3).toFixed(0)}mm`,
        materialType: "Acero",
        sectionInfoObj: {
          name: u,
          shape: "Steel Tube",
          D: s,
          B: s,
          TF: c,
          TW: c,
          material: "A572Gr50"
        }
      };
    } else if (a === 1) {
      const o = s * s, A = s * s * s * s / 12, r = 0.141 * s * s * s * s, I = t.E_c, M = I / 2.4, e = t.gamma_c * o, l = `C${(s * 1e3).toFixed(0)}x${(s * 1e3).toFixed(0)}`;
      return {
        matKey: a,
        A_eq: o,
        I_eq: A,
        J_eq: r,
        E_col: I,
        G_col: M,
        q: e,
        sectionLabel: `Concrete Rectangular ${(s * 1e3).toFixed(0)}\xD7${(s * 1e3).toFixed(0)}mm`,
        materialType: "Hormig\xF3n",
        sectionInfoObj: {
          name: l,
          shape: "Concrete Rectangular",
          D: s,
          B: s,
          material: "concrete"
        }
      };
    } else {
      const o = s - 2 * c, A = s * s - o * o, r = o * o, I = (s ** 4 - o ** 4) / 12, M = o ** 4 / 12, e = 2 * I, l = t.E_s / t.E_c, h = A + r / l, _ = I + M / l, E = e, u = t.E_s, T = u / 2.6, p = t.gamma_s * A + t.gamma_c * r, m = `CR${(s * 1e3).toFixed(0)}X${(s * 1e3).toFixed(0)}X${(c * 1e3).toFixed(0)}1mm`;
      return {
        matKey: a,
        A_eq: h,
        I_eq: _,
        J_eq: E,
        E_col: u,
        G_col: T,
        q: p,
        sectionLabel: `CFT ${(s * 1e3).toFixed(0)}\xD7${(s * 1e3).toFixed(0)}\xD7${(c * 1e3).toFixed(0)}mm + concrete fill`,
        materialType: "Mixta (Filled Steel Tube)",
        sectionInfoObj: {
          name: m,
          shape: "Filled Steel Tube",
          D: s,
          B: s,
          TF: c,
          TW: c,
          material: "A572Gr50",
          fillMaterial: "4000Psi"
        }
      };
    }
  }
  k = function(t, a, s, c = 1) {
    const o = w(t, s), A = t.L, r = Math.max(1, Math.round(t.nSegments)), I = A / r, M = [];
    for (let n = 0; n <= r; n++) M.push([
      0,
      0,
      n * I
    ]);
    const e = [];
    for (let n = 0; n < r; n++) e.push([
      n,
      n + 1
    ]);
    const l = /* @__PURE__ */ new Map();
    l.set(0, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const h = /* @__PURE__ */ new Map();
    for (let n = 0; n <= r; n++) {
      const B = n === 0 || n === r, W = -o.q * I * (B ? 0.5 : 1) * c;
      h.set(n, [
        0,
        0,
        W,
        0,
        0,
        0
      ]);
    }
    const _ = t.P_lat_y ?? 0, E = t.M_top_x ?? 0, u = t.M_top_y ?? 0, T = t.M_top_z ?? 0;
    if (Math.abs(t.P_lat) > 1e-9 || Math.abs(_) > 1e-9 || Math.abs(E) > 1e-9 || Math.abs(u) > 1e-9 || Math.abs(T) > 1e-9) {
      const n = h.get(r) ?? [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      n[0] += t.P_lat, n[1] += _, n[3] += E, n[4] += u, n[5] += T, h.set(r, n);
    }
    const p = t.A_mod ?? 1, m = t.As2_mod ?? 1, L = t.As3_mod ?? 1, D = t.J_mod ?? 1, f = t.I22_mod ?? 1, R = t.I33_mod ?? 1, $ = o.q / (o.A_eq * 9.80665), O = 5 / 6 * o.A_eq, d = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
    for (let n = 0; n < e.length; n++) d.set(n, o.E_col), N.set(n, o.G_col), C.set(n, o.A_eq * p), g.set(n, o.I_eq * R), Y.set(n, o.I_eq * f), G.set(n, o.J_eq * D), x.set(n, $), m < 1e-3 ? P.set(n, -1) : P.set(n, O * m), L < 1e-3 ? b.set(n, -1) : b.set(n, O * L), U.set(n, o.sectionLabel), v.set(n, o.materialType), y.set(n, o.sectionInfoObj);
    a.nodes.val = M, a.elements.val = e, a.nodeInputs.val = {
      supports: l,
      loads: h
    }, a.elementInputs.val = {
      elasticities: d,
      shearModuli: N,
      areas: C,
      momentsOfInertiaY: g,
      momentsOfInertiaZ: Y,
      torsionalConstants: G,
      shearAreasY: P,
      shearAreasZ: b,
      densities: x,
      sectionLabels: U,
      materialTypes: v,
      sectionInfo: y
    };
    try {
      a.deformOutputs.val = j(M, e, {
        supports: l,
        loads: h
      }, a.elementInputs.val), a.analyzeOutputs.val = J(M, e, a.elementInputs.val, a.deformOutputs.val);
    } catch (n) {
      console.error(`[Cantilever ${o.materialType}] solver error:`, n.message);
    }
    return a.objects3D.val = [], {
      sec: o
    };
  };
  const S = 1 / 9.80665, q = S, H = S;
  function i(t, a = 6) {
    if (Math.abs(t) < 1e-12) return "0";
    const s = Math.abs(t);
    return s >= 1e6 || s < 1e-3 ? t.toExponential(6).replace(/e\+?/, "E+").replace(/E\+?-/, "E-") : parseFloat(t.toFixed(a)).toString();
  }
  function X(t, a) {
    const s = w(t, a), c = t.L;
    t.D_out, t.t_HSS;
    const o = t.E_s * H, A = t.E_c * H, r = t.gamma_s * q, I = t.gamma_c * q, M = t.P_lat * S, e = [], l = /* @__PURE__ */ new Date(), h = `${l.getMonth() + 1}/${l.getDate()}/${l.getFullYear()}`, _ = `${l.getHours()}:${String(l.getMinutes()).padStart(2, "0")}:${String(l.getSeconds()).padStart(2, "0")}`;
    e.push(`$ File Cantilever_${s.sectionInfoObj.name}.e2k saved ${h} ${_}`), e.push(""), e.push("$ PROGRAM INFORMATION"), e.push('  PROGRAM  "ETABS"  VERSION "19.1.0"  '), e.push(""), e.push("$ CONTROLS"), e.push('  UNITS  "TONF"  "M"  "C"  '), e.push(`  TITLE1  "Hekatan Struct \u2014 Cantilever ${s.materialType}"  `), e.push('  TITLE2  "Validacion vs ETABS"  '), e.push(""), e.push("$ STORIES - IN SEQUENCE FROM TOP"), e.push(`  STORY "Story1"  HEIGHT ${i(c)} MASTERSTORY "Yes"  `), e.push('  STORY "Base"  ELEV 0 '), e.push(""), e.push("$ GRIDS"), e.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), e.push(""), e.push("$ DIAPHRAGM NAMES"), e.push('  DIAPHRAGM "D1"    TYPE RIGID'), e.push(""), e.push("$ MATERIAL PROPERTIES"), (a === 0 || a === 2) && (e.push(`  MATERIAL  "A572Gr50"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${i(r)}`), e.push(`  MATERIAL  "A572Gr50"    SYMTYPE "Isotropic"  E ${i(o)}  U 0.3  A 1.16999999590917E-05`), e.push('  MATERIAL  "A572Gr50"  FY 35153.48  FU 45699.53 FYE 38668.83  FUE 50269.48')), a === 1 && (e.push(`  MATERIAL  "concrete"    TYPE "Concrete"    WEIGHTPERVOLUME ${i(I)}`), e.push(`  MATERIAL  "concrete"    SYMTYPE "Isotropic"  E ${i(A)}  U 0.2  A 9.99999974737875E-06`), e.push('  MATERIAL  "concrete"    FC 2855.205')), a === 2 && (e.push(`  MATERIAL  "4000Psi"    TYPE "Concrete"    GRADE "f'c 4000 psi"    WEIGHTPERVOLUME ${i(I)}`), e.push(`  MATERIAL  "4000Psi"    SYMTYPE "Isotropic"  E ${i(A)}  U 0.2  A 9.89999989542412E-06`), e.push('  MATERIAL  "4000Psi"    FC 2812.279')), e.push(""), e.push("$ FRAME SECTIONS");
    const E = s.sectionInfoObj;
    let u = `  FRAMESECTION  "${E.name}"  MATERIAL "${E.material}"  SHAPE "${E.shape}"`;
    E.D !== void 0 && (u += `  D ${i(E.D)}`), E.B !== void 0 && (u += ` B ${i(E.B)}`), E.TF !== void 0 && (u += ` TF ${i(E.TF)}`), E.TW !== void 0 && (u += ` TW ${i(E.TW)}`), E.fillMaterial && (u += ` FILLMATERIAL "${E.fillMaterial}"  `), e.push(u);
    const T = [];
    Math.abs(t.A_mod - 1) > 1e-6 && T.push(`AREAMODIFIER ${i(t.A_mod)}`), Math.abs(t.As2_mod - 1) > 1e-6 && T.push(`AS2MODIFIER ${i(t.As2_mod)}`), Math.abs(t.As3_mod - 1) > 1e-6 && T.push(`AS3MODIFIER ${i(t.As3_mod)}`), Math.abs(t.J_mod - 1) > 1e-6 && T.push(`JMODIFIER ${i(t.J_mod)}`), Math.abs(t.I22_mod - 1) > 1e-6 && T.push(`I22MODIFIER ${i(t.I22_mod)}`), Math.abs(t.I33_mod - 1) > 1e-6 && T.push(`I33MODIFIER ${i(t.I33_mod)}`), T.length > 0 && e.push(`  FRAMESECTION  "${E.name}"  ${T.join("  ")}  `), e.push(""), e.push("$ POINT COORDINATES"), e.push('  POINT "1"  0 0 '), e.push(""), e.push("$ LINE CONNECTIVITIES"), e.push('  LINE  "C1"  COLUMN  "1"  "1"  1'), e.push(""), e.push("$ POINT ASSIGNS"), e.push('  POINTASSIGN  "1"  "Story1"  DIAPH "D1"  '), e.push('  POINTASSIGN  "1"  "Base"  RESTRAINT "UX UY UZ RX RY RZ"  DIAPH "DISCONNECTED"  '), e.push(""), e.push("$ LINE ASSIGNS"), e.push(`  LINEASSIGN  "C1"  "Story1"  SECTION "${E.name}"  RIGIDZONE 0.5 MINNUMSTA ${Math.max(2, t.nSegments)} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `), e.push("");
    const p = (t.P_lat_y ?? 0) * S, m = (t.M_top_x ?? 0) * S, L = (t.M_top_y ?? 0) * S, D = (t.M_top_z ?? 0) * S, f = Math.abs(t.P_lat) > 1e-9, R = Math.abs(t.P_lat_y ?? 0) > 1e-9, F = Math.abs(t.M_top_x ?? 0) > 1e-9, $ = Math.abs(t.M_top_y ?? 0) > 1e-9, O = Math.abs(t.M_top_z ?? 0) > 1e-9, d = f || R || F || $ || O;
    e.push("$ LOAD PATTERNS"), e.push('  LOADPATTERN "DEAD"  TYPE  "Dead"  SELFWEIGHT  1'), d && e.push('  LOADPATTERN "LATERAL"  TYPE  "Other"  SELFWEIGHT  0'), e.push(""), d && (e.push("$ POINT OBJECT LOADS"), (f || R) && e.push(`  POINTLOAD  "1"  "Story1"  TYPE "FORCE"  LC "LATERAL"  FX ${i(M)} FY ${i(p)} FZ 0`), (F || $ || O) && e.push(`  POINTLOAD  "1"  "Story1"  TYPE "MOMENT"  LC "LATERAL"  MX ${i(m)} MY ${i(L)} MZ ${i(D)}`), e.push("")), e.push("$ ANALYSIS OPTIONS"), e.push('  ACTIVEDOF  "UX UY UZ RX RY RZ"  '), e.push(""), e.push("$ MASS SOURCE"), e.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), e.push('  MASSSOURCELOAD  "MsSrc1"  "DEAD"  1 '), e.push(""), e.push("$ LOAD CASES"), e.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Modal"  MAXMODES  3 MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 '), e.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Dead"  LOADPAT  "DEAD"  SF  1 '), Math.abs(t.P_lat) > 1e-9 && (e.push('  LOADCASE "Lateral"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Lateral"  LOADPAT  "LATERAL"  SF  1 ')), e.push(""), e.push("  END"), e.push("$ END OF MODEL FILE");
    const N = e.join(`\r
`);
    return {
      filename: `Cantilever_${s.sectionInfoObj.name}.e2k`,
      content: N
    };
  }
  function Z(t, a) {
    const s = new Blob([
      a
    ], {
      type: "text/plain;charset=utf-8"
    }), c = URL.createObjectURL(s), o = document.createElement("a");
    o.href = c, o.download = t, document.body.appendChild(o), o.click(), document.body.removeChild(o), setTimeout(() => URL.revokeObjectURL(c), 1e3);
  }
  Q = function(t, a) {
    const { filename: s, content: c } = X(t, a);
    Z(s, c), console.log(`[E2K Export] ${s} (${c.length} bytes) \u2014 abrir en ETABS para validar`);
  };
  K = function(t) {
    var _a, _b, _c;
    const a = (_a = t.activeLoadCase) == null ? void 0 : _a.val;
    if (!a) return 1;
    const s = (_b = t.loadCases) == null ? void 0 : _b.val.find((o) => o.name === a);
    if (!s) return 1;
    if (!s.patterns || s.patterns.length === 0) return 0;
    let c = 0;
    for (const o of s.patterns) {
      const A = (_c = t.loadPatterns) == null ? void 0 : _c.val.find((r) => r.name === o.pattern);
      A && (c += (A.selfWeightMultiplier ?? 0) * (o.scaleFactor ?? 1));
    }
    return c;
  };
});
export {
  __tla,
  k as b,
  Q as e,
  K as g
};
