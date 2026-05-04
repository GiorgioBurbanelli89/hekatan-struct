import { d as W, __tla as __tla_0 } from "./didacticCpp-Ck1qafl6.js";
let oe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let $, C, j, G, F, N, H, L, d, w;
  $ = 25e6;
  C = 0.2;
  j = $ / (2 * (1 + C));
  G = 24;
  F = 2e8;
  N = 0.3;
  H = F / (2 * (1 + N));
  L = 78;
  d = (t, s, c, h, m, u) => ({
    default: c,
    min: h,
    max: m,
    step: u,
    label: s,
    folder: t
  });
  w = (t, s, c, h) => ({
    default: c,
    label: s,
    folder: t,
    options: h
  });
  oe = {
    id: "new-blank",
    name: "\u{1F4C4} Archivo nuevo (lienzo CAD 2D/3D)",
    category: "Archivo nuevo",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: false,
    params: {
      mode: w("Modo", "Espacio de trabajo", 1, {
        "2D (plano XZ \u2014 elevaci\xF3n)": 0,
        "3D (espacial)": 1
      }),
      mat: w("Secci\xF3n frames", "Material", 0, {
        Hormig\u00F3n: 0,
        Acero: 1
      }),
      bCol: d("Secci\xF3n frames", "b columna (m)", 0.4, 0.1, 1, 0.05),
      hCol: d("Secci\xF3n frames", "h columna (m)", 0.4, 0.1, 1, 0.05),
      bViga: d("Secci\xF3n frames", "b viga (m)", 0.3, 0.1, 0.8, 0.05),
      hViga: d("Secci\xF3n frames", "h viga (m)", 0.5, 0.1, 1, 0.05),
      tShell: d("Secci\xF3n shells", "Espesor shell (m)", 0.2, 0.05, 1, 0.01),
      matShell: w("Secci\xF3n shells", "Material shell", 0, {
        Hormig\u00F3n: 0,
        Acero: 1
      }),
      apoyo: w("Apoyos", "Tipo apoyo en Z m\xEDnimo", 3, {
        "Empotrado (6 DOFs)": 0,
        "Articulado (3 trans.)": 1,
        "R\xF3tula (Ux,Uz, libre Uy/R)": 2,
        "Sin apoyo autom\xE1tico": 3
      }),
      aplicarCargas: w("Cargas", "Aplicar cargas auto", 0, {
        S\u00ED: 1,
        No: 0
      }),
      Fz: d("Cargas", "Fz vertical/nodo (kN)", -10, -200, 0, 1),
      Fx: d("Cargas", "Fx lateral/nodo (kN)", 0, -100, 100, 1),
      autoSolve: w("Solver", "Auto-resolver", 1, {
        S\u00ED: 1,
        No: 0
      })
    },
    build(t, s) {
      var _a, _b, _c;
      const c = ((_a = window.__hekatanDrawingPoints) == null ? void 0 : _a.val) ?? window.__hekatanDrawingPoints ?? [], h = ((_b = window.__hekatanDrawingPolylines) == null ? void 0 : _b.val) ?? window.__hekatanDrawingPolylines ?? [], m = ((_c = window.__hekatanDrawingAreas) == null ? void 0 : _c.val) ?? window.__hekatanDrawingAreas ?? [], u = new Set(m);
      if (!c.length) {
        s.nodes.val = [], s.elements.val = [], s.nodeInputs.val = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map()
        }, s.elementInputs.val = {}, s.objects3D.val = [], console.log("[NewBlank] Lienzo vac\xEDo \u2014 us\xE1 el folder \u{1F4D0} Herramientas CAD para dibujar.");
        return;
      }
      const p = Math.round(t.mode ?? 1) === 0, n = c.map((e) => p ? [
        e[0],
        0,
        e[2]
      ] : [
        e[0],
        e[1],
        e[2]
      ]), i = [], _ = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
      for (let e = 0; e < h.length; e++) {
        const l = h[e];
        if (u.has(e)) {
          const o = l.length === 5 ? l.slice(0, 4) : l.slice(0, Math.min(4, l.length));
          if (o.length !== 4 || o.some((r) => n[r] === void 0)) continue;
          const a = i.length;
          i.push(o), b.add(a);
        } else for (let o = 0; o < l.length - 1; o++) {
          const a = l[o], r = l[o + 1];
          if (a === r || n[a] === void 0 || n[r] === void 0) continue;
          const S = i.length;
          i.push([
            a,
            r
          ]);
          const x = n[r][0] - n[a][0], A = n[r][1] - n[a][1], Q = n[r][2] - n[a][2];
          Math.abs(Q) > Math.max(Math.abs(x), Math.abs(A)) ? _.add(S) : P.add(S);
        }
      }
      const M = Math.round(t.mat ?? 0), U = M === 0 ? $ : F, Z = M === 0 ? j : H, J = M === 0 ? C : N, T = M === 0 ? G : L, v = Math.round(t.matShell ?? 0), K = v === 0 ? $ : F, X = v === 0 ? j : H, Y = v === 0 ? C : N, q = v === 0 ? G : L, z = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
      for (let e = 0; e < i.length; e++) if (b.has(e)) z.set(e, K), k.set(e, X), D.set(e, q), y.set(e, Y), R.set(e, t.tShell ?? 0.2);
      else {
        const l = _.has(e), o = l ? t.bCol : t.bViga, a = l ? t.hCol : t.hViga, r = o * a, S = a * Math.pow(o, 3) / 12, x = o * Math.pow(a, 3) / 12, A = 0.14 * Math.pow(Math.min(o, a), 4);
        z.set(e, U), k.set(e, Z), E.set(e, r), V.set(e, S), B.set(e, x), O.set(e, A), D.set(e, T), y.set(e, J);
      }
      const I = Math.round(t.apoyo ?? 0), f = /* @__PURE__ */ new Map();
      if (n.length > 0 && I !== 3) {
        const e = Math.min(...n.map((o) => o[2])), l = I === 0 ? [
          true,
          true,
          true,
          true,
          true,
          true
        ] : I === 1 ? [
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
        for (let o = 0; o < n.length; o++) Math.abs(n[o][2] - e) < 1e-6 && f.set(o, [
          ...l
        ]);
      }
      const g = /* @__PURE__ */ new Map();
      if (Math.round(t.aplicarCargas ?? 1) === 1 && n.length > 0) {
        const e = Math.max(...n.map((a) => a[2])), l = t.Fx ?? 0, o = t.Fz ?? -10;
        for (let a = 0; a < n.length; a++) Math.abs(n[a][2] - e) < 1e-6 && g.set(a, [
          l,
          0,
          o,
          0,
          0,
          0
        ]);
      }
      if (s.nodes.val = n, s.elements.val = i, s.nodeInputs.val = {
        supports: f,
        loads: g
      }, s.elementInputs.val = {
        elasticities: z,
        shearModuli: k,
        areas: E,
        momentsOfInertiaZ: V,
        momentsOfInertiaY: B,
        torsionalConstants: O,
        densities: D,
        poissonsRatios: y,
        thicknesses: R
      }, s.objects3D.val = [], Math.round(t.autoSolve ?? 1) === 1 && n.length > 0 && i.length > 0 && f.size > 0 && g.size > 0) try {
        s.deformOutputs.val = W(n, i, {
          supports: f,
          loads: g
        }, s.elementInputs.val), console.log(`[NewBlank] Solve OK \u2014 ${n.length} nodos, ${i.length} elementos, ${f.size} apoyos, ${g.size} cargas`);
      } catch (e) {
        console.warn(`[NewBlank] Solver fall\xF3: ${e.message}`);
      }
      else console.log(`[NewBlank] mode=${p ? "2D" : "3D"} | nodes=${n.length} elem=${i.length} cols=${_.size} vigas=${P.size} shells=${b.size} apoyos=${f.size} cargas=${g.size}`);
    },
    computedLabels(t, s) {
      const c = {}, h = s.nodes.val.length;
      s.elements.val.length;
      let m = 0, u = 0;
      for (const p of s.elements.val) p.length === 4 ? u++ : m++;
      return c.Stats = `${h} nodos \xB7 ${m} frames \xB7 ${u} shells`, h === 0 && (c["\u{1F4A1} Tip"] = "L\xEDnea = 2 clicks \xB7 Polil\xEDnea = N clicks + click derecho \xB7 \xC1rea = 4 clicks"), c;
    }
  };
});
export {
  __tla,
  oe as n
};
