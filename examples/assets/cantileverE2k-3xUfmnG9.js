import { a as J } from "./analyze-DNPn2SjO.js";
import { d as j, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let V, k;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function H(t, a) {
    const s = t.D_out, n = t.t_HSS;
    if (a === 0) {
      const c = s - 2 * n, I = s * s - c * c, u = (s ** 4 - c ** 4) / 12, r = 2 * u, l = I, e = u, A = r, M = t.E_s, h = M / 2.6, E = t.gamma_s * I, T = `HSS${(s * 1e3).toFixed(0)}x${(s * 1e3).toFixed(0)}x${(n * 1e3).toFixed(0)}`;
      return {
        matKey: a,
        A_eq: l,
        I_eq: e,
        J_eq: A,
        E_col: M,
        G_col: h,
        q: E,
        sectionLabel: `HSS ${(s * 1e3).toFixed(0)}\xD7${(s * 1e3).toFixed(0)}\xD7${(n * 1e3).toFixed(0)}mm`,
        materialType: "Acero",
        sectionInfoObj: {
          name: T,
          shape: "Steel Tube",
          D: s,
          B: s,
          TF: n,
          TW: n,
          material: "A572Gr50"
        }
      };
    } else if (a === 1) {
      const c = s * s, I = s * s * s * s / 12, u = 0.141 * s * s * s * s, r = t.E_c, l = r / 2.4, e = t.gamma_c * c, A = `C${(s * 1e3).toFixed(0)}x${(s * 1e3).toFixed(0)}`;
      return {
        matKey: a,
        A_eq: c,
        I_eq: I,
        J_eq: u,
        E_col: r,
        G_col: l,
        q: e,
        sectionLabel: `Concrete Rectangular ${(s * 1e3).toFixed(0)}\xD7${(s * 1e3).toFixed(0)}mm`,
        materialType: "Hormig\xF3n",
        sectionInfoObj: {
          name: A,
          shape: "Concrete Rectangular",
          D: s,
          B: s,
          material: "concrete"
        }
      };
    } else {
      const c = s - 2 * n, I = s * s - c * c, u = c * c, r = (s ** 4 - c ** 4) / 12, l = c ** 4 / 12, e = 2 * r, A = t.E_s / t.E_c, M = I + u / A, h = r + l / A, E = e, T = t.E_s, _ = T / 2.6, m = t.gamma_s * I + t.gamma_c * u, O = `CR${(s * 1e3).toFixed(0)}X${(s * 1e3).toFixed(0)}X${(n * 1e3).toFixed(0)}1mm`;
      return {
        matKey: a,
        A_eq: M,
        I_eq: h,
        J_eq: E,
        E_col: T,
        G_col: _,
        q: m,
        sectionLabel: `CFT ${(s * 1e3).toFixed(0)}\xD7${(s * 1e3).toFixed(0)}\xD7${(n * 1e3).toFixed(0)}mm + concrete fill`,
        materialType: "Mixta (Filled Steel Tube)",
        sectionInfoObj: {
          name: O,
          shape: "Filled Steel Tube",
          D: s,
          B: s,
          TF: n,
          TW: n,
          material: "A572Gr50",
          fillMaterial: "4000Psi"
        }
      };
    }
  }
  V = function(t, a, s) {
    const n = H(t, s), c = t.L, I = Math.max(1, Math.round(t.nSegments)), u = c / I, r = [];
    for (let o = 0; o <= I; o++) r.push([
      0,
      0,
      o * u
    ]);
    const l = [];
    for (let o = 0; o < I; o++) l.push([
      o,
      o + 1
    ]);
    const e = /* @__PURE__ */ new Map();
    e.set(0, [
      true,
      true,
      true,
      true,
      true,
      true
    ]);
    const A = /* @__PURE__ */ new Map();
    for (let o = 0; o <= I; o++) {
      const w = o === 0 || o === I, B = -n.q * u * (w ? 0.5 : 1);
      A.set(o, [
        0,
        0,
        B,
        0,
        0,
        0
      ]);
    }
    const M = t.P_lat_y ?? 0, h = t.M_top_x ?? 0, E = t.M_top_y ?? 0, T = t.M_top_z ?? 0;
    if (Math.abs(t.P_lat) > 1e-9 || Math.abs(M) > 1e-9 || Math.abs(h) > 1e-9 || Math.abs(E) > 1e-9 || Math.abs(T) > 1e-9) {
      const o = A.get(I) ?? [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      o[0] += t.P_lat, o[1] += M, o[3] += h, o[4] += E, o[5] += T, A.set(I, o);
    }
    const _ = t.A_mod ?? 1, m = t.As2_mod ?? 1, O = t.As3_mod ?? 1, N = t.J_mod ?? 1, f = t.I22_mod ?? 1, R = t.I33_mod ?? 1, $ = n.q / (n.A_eq * 9.80665), p = 5 / 6 * n.A_eq, d = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
    for (let o = 0; o < l.length; o++) d.set(o, n.E_col), L.set(o, n.G_col), D.set(o, n.A_eq * _), Y.set(o, n.I_eq * R), P.set(o, n.I_eq * f), G.set(o, n.J_eq * N), x.set(o, $), m < 1e-3 ? C.set(o, -1) : C.set(o, p * m), O < 1e-3 ? b.set(o, -1) : b.set(o, p * O), U.set(o, n.sectionLabel), g.set(o, n.materialType), v.set(o, n.sectionInfoObj);
    a.nodes.val = r, a.elements.val = l, a.nodeInputs.val = {
      supports: e,
      loads: A
    }, a.elementInputs.val = {
      elasticities: d,
      shearModuli: L,
      areas: D,
      momentsOfInertiaY: Y,
      momentsOfInertiaZ: P,
      torsionalConstants: G,
      shearAreasY: C,
      shearAreasZ: b,
      densities: x,
      sectionLabels: U,
      materialTypes: g,
      sectionInfo: v
    };
    try {
      a.deformOutputs.val = j(r, l, {
        supports: e,
        loads: A
      }, a.elementInputs.val), a.analyzeOutputs.val = J(r, l, a.elementInputs.val, a.deformOutputs.val);
    } catch (o) {
      console.error(`[Cantilever ${n.materialType}] solver error:`, o.message);
    }
    return a.objects3D.val = [], {
      sec: n
    };
  };
  const S = 1 / 9.80665, y = S, q = S;
  function i(t, a = 6) {
    if (Math.abs(t) < 1e-12) return "0";
    const s = Math.abs(t);
    return s >= 1e6 || s < 1e-3 ? t.toExponential(6).replace(/e\+?/, "E+").replace(/E\+?-/, "E-") : parseFloat(t.toFixed(a)).toString();
  }
  function W(t, a) {
    const s = H(t, a), n = t.L;
    t.D_out, t.t_HSS;
    const c = t.E_s * q, I = t.E_c * q, u = t.gamma_s * y, r = t.gamma_c * y, l = t.P_lat * S, e = [], A = /* @__PURE__ */ new Date(), M = `${A.getMonth() + 1}/${A.getDate()}/${A.getFullYear()}`, h = `${A.getHours()}:${String(A.getMinutes()).padStart(2, "0")}:${String(A.getSeconds()).padStart(2, "0")}`;
    e.push(`$ File Cantilever_${s.sectionInfoObj.name}.e2k saved ${M} ${h}`), e.push(""), e.push("$ PROGRAM INFORMATION"), e.push('  PROGRAM  "ETABS"  VERSION "19.1.0"  '), e.push(""), e.push("$ CONTROLS"), e.push('  UNITS  "TONF"  "M"  "C"  '), e.push(`  TITLE1  "Hekatan Struct \u2014 Cantilever ${s.materialType}"  `), e.push('  TITLE2  "Validacion vs ETABS"  '), e.push(""), e.push("$ STORIES - IN SEQUENCE FROM TOP"), e.push(`  STORY "Story1"  HEIGHT ${i(n)} MASTERSTORY "Yes"  `), e.push('  STORY "Base"  ELEV 0 '), e.push(""), e.push("$ GRIDS"), e.push('  GRIDSYSTEM "G1"  TYPE "CARTESIAN"  BUBBLESIZE 1.25 '), e.push(""), e.push("$ DIAPHRAGM NAMES"), e.push('  DIAPHRAGM "D1"    TYPE RIGID'), e.push(""), e.push("$ MATERIAL PROPERTIES"), (a === 0 || a === 2) && (e.push(`  MATERIAL  "A572Gr50"    TYPE "Steel"    GRADE "Grade 50"    WEIGHTPERVOLUME ${i(u)}`), e.push(`  MATERIAL  "A572Gr50"    SYMTYPE "Isotropic"  E ${i(c)}  U 0.3  A 1.16999999590917E-05`), e.push('  MATERIAL  "A572Gr50"  FY 35153.48  FU 45699.53 FYE 38668.83  FUE 50269.48')), a === 1 && (e.push(`  MATERIAL  "concrete"    TYPE "Concrete"    WEIGHTPERVOLUME ${i(r)}`), e.push(`  MATERIAL  "concrete"    SYMTYPE "Isotropic"  E ${i(I)}  U 0.2  A 9.99999974737875E-06`), e.push('  MATERIAL  "concrete"    FC 2855.205')), a === 2 && (e.push(`  MATERIAL  "4000Psi"    TYPE "Concrete"    GRADE "f'c 4000 psi"    WEIGHTPERVOLUME ${i(r)}`), e.push(`  MATERIAL  "4000Psi"    SYMTYPE "Isotropic"  E ${i(I)}  U 0.2  A 9.89999989542412E-06`), e.push('  MATERIAL  "4000Psi"    FC 2812.279')), e.push(""), e.push("$ FRAME SECTIONS");
    const E = s.sectionInfoObj;
    let T = `  FRAMESECTION  "${E.name}"  MATERIAL "${E.material}"  SHAPE "${E.shape}"`;
    E.D !== void 0 && (T += `  D ${i(E.D)}`), E.B !== void 0 && (T += ` B ${i(E.B)}`), E.TF !== void 0 && (T += ` TF ${i(E.TF)}`), E.TW !== void 0 && (T += ` TW ${i(E.TW)}`), E.fillMaterial && (T += ` FILLMATERIAL "${E.fillMaterial}"  `), e.push(T);
    const _ = [];
    Math.abs(t.A_mod - 1) > 1e-6 && _.push(`AREAMODIFIER ${i(t.A_mod)}`), Math.abs(t.As2_mod - 1) > 1e-6 && _.push(`AS2MODIFIER ${i(t.As2_mod)}`), Math.abs(t.As3_mod - 1) > 1e-6 && _.push(`AS3MODIFIER ${i(t.As3_mod)}`), Math.abs(t.J_mod - 1) > 1e-6 && _.push(`JMODIFIER ${i(t.J_mod)}`), Math.abs(t.I22_mod - 1) > 1e-6 && _.push(`I22MODIFIER ${i(t.I22_mod)}`), Math.abs(t.I33_mod - 1) > 1e-6 && _.push(`I33MODIFIER ${i(t.I33_mod)}`), _.length > 0 && e.push(`  FRAMESECTION  "${E.name}"  ${_.join("  ")}  `), e.push(""), e.push("$ POINT COORDINATES"), e.push('  POINT "1"  0 0 '), e.push(""), e.push("$ LINE CONNECTIVITIES"), e.push('  LINE  "C1"  COLUMN  "1"  "1"  1'), e.push(""), e.push("$ POINT ASSIGNS"), e.push('  POINTASSIGN  "1"  "Story1"  DIAPH "D1"  '), e.push('  POINTASSIGN  "1"  "Base"  RESTRAINT "UX UY UZ RX RY RZ"  DIAPH "DISCONNECTED"  '), e.push(""), e.push("$ LINE ASSIGNS"), e.push(`  LINEASSIGN  "C1"  "Story1"  SECTION "${E.name}"  RIGIDZONE 0.5 MINNUMSTA ${Math.max(2, t.nSegments)} AUTOMESH "YES"  MESHATINTERSECTIONS "YES"  `), e.push("");
    const m = (t.P_lat_y ?? 0) * S, O = (t.M_top_x ?? 0) * S, N = (t.M_top_y ?? 0) * S, f = (t.M_top_z ?? 0) * S, R = Math.abs(t.P_lat) > 1e-9, F = Math.abs(t.P_lat_y ?? 0) > 1e-9, $ = Math.abs(t.M_top_x ?? 0) > 1e-9, p = Math.abs(t.M_top_y ?? 0) > 1e-9, d = Math.abs(t.M_top_z ?? 0) > 1e-9, L = R || F || $ || p || d;
    e.push("$ LOAD PATTERNS"), e.push('  LOADPATTERN "DEAD"  TYPE  "Dead"  SELFWEIGHT  1'), L && e.push('  LOADPATTERN "LATERAL"  TYPE  "Other"  SELFWEIGHT  0'), e.push(""), L && (e.push("$ POINT OBJECT LOADS"), (R || F) && e.push(`  POINTLOAD  "1"  "Story1"  TYPE "FORCE"  LC "LATERAL"  FX ${i(l)} FY ${i(m)} FZ 0`), ($ || p || d) && e.push(`  POINTLOAD  "1"  "Story1"  TYPE "MOMENT"  LC "LATERAL"  MX ${i(O)} MY ${i(N)} MZ ${i(f)}`), e.push("")), e.push("$ ANALYSIS OPTIONS"), e.push('  ACTIVEDOF  "UX UY UZ RX RY RZ"  '), e.push(""), e.push("$ MASS SOURCE"), e.push('  MASSSOURCE  "MsSrc1"    INCLUDEELEMENTS "No"    INCLUDEADDEDMASS "No"    INCLUDELOADS "Yes"    LUMPATSTORIES "Yes"    ISDEFAULT "Yes"  '), e.push('  MASSSOURCELOAD  "MsSrc1"  "DEAD"  1 '), e.push(""), e.push("$ LOAD CASES"), e.push('  LOADCASE "Modal"  TYPE  "Modal - Eigen"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Modal"  MAXMODES  3 MINMODES  1 EIGENSHIFTFREQ  0 EIGENCUTOFF  0 EIGENTOL  1E-09 '), e.push('  LOADCASE "Dead"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Dead"  LOADPAT  "DEAD"  SF  1 '), Math.abs(t.P_lat) > 1e-9 && (e.push('  LOADCASE "Lateral"  TYPE  "Linear Static"  INITCOND  "PRESET"  '), e.push('  LOADCASE "Lateral"  LOADPAT  "LATERAL"  SF  1 ')), e.push(""), e.push("  END"), e.push("$ END OF MODEL FILE");
    const D = e.join(`\r
`);
    return {
      filename: `Cantilever_${s.sectionInfoObj.name}.e2k`,
      content: D
    };
  }
  function X(t, a) {
    const s = new Blob([
      a
    ], {
      type: "text/plain;charset=utf-8"
    }), n = URL.createObjectURL(s), c = document.createElement("a");
    c.href = n, c.download = t, document.body.appendChild(c), c.click(), document.body.removeChild(c), setTimeout(() => URL.revokeObjectURL(n), 1e3);
  }
  k = function(t, a) {
    const { filename: s, content: n } = W(t, a);
    X(s, n), console.log(`[E2K Export] ${s} (${n.length} bytes) \u2014 abrir en ETABS para validar`);
  };
});
export {
  __tla,
  V as b,
  k as e
};
