import { d as O, __tla as __tla_0 } from "./didacticCpp-Ck1qafl6.js";
let L;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let A, F, R, H, N, P, U, G, d, p;
  A = 25e6;
  F = 0.2;
  R = A / (2 * (1 + F));
  H = 24;
  N = 2e8;
  P = 0.3;
  U = N / (2 * (1 + P));
  G = 78;
  d = (t, n, r, c, m, o) => ({
    default: r,
    min: c,
    max: m,
    step: o,
    label: n,
    folder: t
  });
  p = (t, n, r, c) => ({
    default: r,
    label: n,
    folder: t,
    options: c
  });
  L = {
    id: "new-blank",
    name: "\u{1F4D0} NewBlank \u2014 lienzo CAD 2D/3D",
    category: "Modelar",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: false,
    params: {
      mode: p("Modo", "Espacio de trabajo", 1, {
        "2D (plano XZ \u2014 elevaci\xF3n)": 0,
        "3D (espacial)": 1
      }),
      mat: p("Secci\xF3n frames", "Material", 0, {
        Hormig\u00F3n: 0,
        Acero: 1
      }),
      bCol: d("Secci\xF3n frames", "b columna (m)", 0.4, 0.1, 1, 0.05),
      hCol: d("Secci\xF3n frames", "h columna (m)", 0.4, 0.1, 1, 0.05),
      bViga: d("Secci\xF3n frames", "b viga (m)", 0.3, 0.1, 0.8, 0.05),
      hViga: d("Secci\xF3n frames", "h viga (m)", 0.5, 0.1, 1, 0.05),
      tShell: d("Secci\xF3n shells", "Espesor shell (m)", 0.2, 0.05, 1, 0.01),
      matShell: p("Secci\xF3n shells", "Material shell", 0, {
        Hormig\u00F3n: 0,
        Acero: 1
      }),
      apoyo: p("Apoyos", "Tipo apoyo en Z m\xEDnimo", 3, {
        "Empotrado (6 DOFs)": 0,
        "Articulado (3 trans.)": 1,
        "R\xF3tula (Ux,Uz, libre Uy/R)": 2,
        "Sin apoyo autom\xE1tico": 3
      }),
      aplicarCargas: p("Cargas", "Aplicar cargas auto", 0, {
        S\u00ED: 1,
        No: 0
      }),
      Fz: d("Cargas", "Fz vertical/nodo (kN)", -10, -200, 0, 1),
      Fx: d("Cargas", "Fx lateral/nodo (kN)", 0, -100, 100, 1),
      autoSolve: p("Solver", "Auto-resolver", 1, {
        S\u00ED: 1,
        No: 0
      })
    },
    build(t, n) {
      var _a, _b;
      const r = ((_a = window.__hekatanDrawingPoints) == null ? void 0 : _a.val) ?? window.__hekatanDrawingPoints ?? [], c = ((_b = window.__hekatanDrawingPolylines) == null ? void 0 : _b.val) ?? window.__hekatanDrawingPolylines ?? [];
      if (!r.length) {
        n.nodes.val = [], n.elements.val = [], n.nodeInputs.val = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map()
        }, n.elementInputs.val = {}, n.objects3D.val = [], console.log("[NewBlank] Lienzo vac\xEDo \u2014 us\xE1 el folder \u{1F4D0} Herramientas CAD para dibujar.");
        return;
      }
      const m = Math.round(t.mode ?? 1) === 0, o = r.map((e) => m ? [
        e[0],
        0,
        e[2]
      ] : [
        e[0],
        e[1],
        e[2]
      ]), i = [], w = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
      for (const e of c) for (let l = 0; l < e.length - 1; l++) {
        const a = e[l], s = e[l + 1];
        if (a === s || o[a] === void 0 || o[s] === void 0) continue;
        const g = i.length;
        i.push([
          a,
          s
        ]);
        const v = o[s][0] - o[a][0], b = o[s][1] - o[a][1], S = o[s][2] - o[a][2];
        Math.abs(S) > Math.max(Math.abs(v), Math.abs(b)) ? w.add(g) : z.add(g);
      }
      const f = Math.round(t.mat ?? 0), E = f === 0 ? A : N, B = f === 0 ? R : U, V = f === 0 ? F : P, j = f === 0 ? H : G, _ = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
      for (let e = 0; e < i.length; e++) {
        const l = w.has(e), a = l ? t.bCol : t.bViga, s = l ? t.hCol : t.hViga, g = a * s, v = s * Math.pow(a, 3) / 12, b = a * Math.pow(s, 3) / 12, S = 0.14 * Math.pow(Math.min(a, s), 4);
        _.set(e, E), y.set(e, B), D.set(e, g), C.set(e, v), I.set(e, b), x.set(e, S), $.set(e, j), k.set(e, V);
      }
      const M = Math.round(t.apoyo ?? 0), h = /* @__PURE__ */ new Map();
      if (o.length > 0 && M !== 3) {
        const e = Math.min(...o.map((a) => a[2])), l = M === 0 ? [
          true,
          true,
          true,
          true,
          true,
          true
        ] : M === 1 ? [
          true,
          true,
          true,
          false,
          false,
          false
        ] : [
          true,
          false,
          true,
          false,
          false,
          false
        ];
        for (let a = 0; a < o.length; a++) Math.abs(o[a][2] - e) < 1e-6 && h.set(a, [
          ...l
        ]);
      }
      const u = /* @__PURE__ */ new Map();
      if (Math.round(t.aplicarCargas ?? 1) === 1 && o.length > 0) {
        const e = Math.max(...o.map((s) => s[2])), l = t.Fx ?? 0, a = t.Fz ?? -10;
        for (let s = 0; s < o.length; s++) Math.abs(o[s][2] - e) < 1e-6 && u.set(s, [
          l,
          0,
          a,
          0,
          0,
          0
        ]);
      }
      if (n.nodes.val = o, n.elements.val = i, n.nodeInputs.val = {
        supports: h,
        loads: u
      }, n.elementInputs.val = {
        elasticities: _,
        shearModuli: y,
        areas: D,
        momentsOfInertiaZ: C,
        momentsOfInertiaY: I,
        torsionalConstants: x,
        densities: $,
        poissonsRatios: k
      }, n.objects3D.val = [], Math.round(t.autoSolve ?? 1) === 1 && o.length > 0 && i.length > 0 && h.size > 0 && u.size > 0) try {
        n.deformOutputs.val = O(o, i, {
          supports: h,
          loads: u
        }, n.elementInputs.val), console.log(`[NewBlank] Solve OK \u2014 ${o.length} nodos, ${i.length} elementos, ${h.size} apoyos, ${u.size} cargas`);
      } catch (e) {
        console.warn(`[NewBlank] Solver fall\xF3: ${e.message}`);
      }
      else console.log(`[NewBlank] mode=${m ? "2D" : "3D"} | nodes=${o.length} elem=${i.length} cols=${w.size} vigas=${z.size} apoyos=${h.size} cargas=${u.size}`);
    },
    computedLabels(t, n) {
      const r = {}, c = n.nodes.val.length, m = n.elements.val.length;
      return r.Stats = `${c} nodos, ${m} elementos`, c === 0 && (r["\u{1F4A1} Tip"] = "Us\xE1 el folder \u{1F4D0} Herramientas CAD para dibujar"), r;
    }
  };
});
export {
  __tla,
  L as n
};
