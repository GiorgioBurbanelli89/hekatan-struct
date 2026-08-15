import { d as ce, __tla as __tla_0 } from "./didacticCpp-BeLq_Lcs.js";
let de;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let G, O, X, Y, j, K, q, Q, m, v;
  G = 25e6;
  O = 0.2;
  X = G / (2 * (1 + O));
  Y = 24;
  j = 2e8;
  K = 0.3;
  q = j / (2 * (1 + K));
  Q = 78;
  m = (l, t, c, h, w, g) => ({
    default: c,
    min: h,
    max: w,
    step: g,
    label: t,
    folder: l
  });
  v = (l, t, c, h) => ({
    default: c,
    label: t,
    folder: l,
    options: h
  });
  de = {
    id: "new-blank",
    name: "\u{1F4C4} Archivo nuevo (lienzo CAD 2D/3D)",
    category: "\u{1F9EA} Utilidades",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: false,
    params: {
      mode: v("Modo", "Espacio de trabajo", 1, {
        "2D (plano XZ \u2014 elevaci\xF3n)": 0,
        "3D (espacial)": 1
      }),
      mat: v("Secci\xF3n frames", "Material", 0, {
        Hormig\u00F3n: 0,
        Acero: 1
      }),
      bCol: m("Secci\xF3n frames", "b columna (m)", 0.4, 0.1, 1, 0.05),
      hCol: m("Secci\xF3n frames", "h columna (m)", 0.4, 0.1, 1, 0.05),
      bViga: m("Secci\xF3n frames", "b viga (m)", 0.3, 0.1, 0.8, 0.05),
      hViga: m("Secci\xF3n frames", "h viga (m)", 0.5, 0.1, 1, 0.05),
      tShell: m("Secci\xF3n shells", "Espesor shell (m)", 0.2, 0.05, 1, 0.01),
      matShell: v("Secci\xF3n shells", "Material shell", 0, {
        Hormig\u00F3n: 0,
        Acero: 1
      }),
      apoyo: v("Apoyos", "Tipo apoyo en Z m\xEDnimo", 3, {
        "Empotrado (6 DOFs)": 0,
        "Articulado (3 trans.)": 1,
        "R\xF3tula (Ux,Uz, libre Uy/R)": 2,
        "Sin apoyo autom\xE1tico": 3
      }),
      aplicarCargas: v("Cargas", "Aplicar cargas auto", 0, {
        S\u00ED: 1,
        No: 0
      }),
      Fz: m("Cargas", "Fz vertical/nodo (kN)", -10, -200, 0, 1),
      Fx: m("Cargas", "Fx lateral/nodo (kN)", 0, -100, 100, 1),
      autoSolve: v("Solver", "Auto-resolver", 1, {
        S\u00ED: 1,
        No: 0
      })
    },
    build(l, t) {
      var _a, _b, _c;
      const c = ((_a = window.__hekatanDrawingPoints) == null ? void 0 : _a.val) ?? window.__hekatanDrawingPoints ?? [], h = ((_b = window.__hekatanDrawingPolylines) == null ? void 0 : _b.val) ?? window.__hekatanDrawingPolylines ?? [], w = ((_c = window.__hekatanDrawingAreas) == null ? void 0 : _c.val) ?? window.__hekatanDrawingAreas ?? [], g = new Set(w);
      if (!c.length) {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs.val = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map()
        }, t.elementInputs.val = {}, t.objects3D.val = [], console.log("[NewBlank] Lienzo vac\xEDo \u2014 us\xE1 el folder \u{1F4D0} Herramientas CAD para dibujar.");
        return;
      }
      const y = Math.round(l.mode ?? 1) === 0, a = c.map((n) => y ? [
        n[0],
        0,
        n[2]
      ] : [
        n[0],
        n[1],
        n[2]
      ]), r = [], P = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map();
      for (let n = 0; n < h.length; n++) {
        const s = h[n];
        if (g.has(n)) {
          const e = s.length === 5 ? s.slice(0, 4) : s.slice(0, Math.min(4, s.length));
          if (e.length !== 4 || e.some((i) => a[i] === void 0)) continue;
          const o = r.length;
          r.push(e), p.add(o);
        } else for (let e = 0; e < s.length - 1; e++) {
          const o = s[e], i = s[e + 1];
          if (o === i || a[o] === void 0 || a[i] === void 0) continue;
          const d = r.length;
          r.push([
            o,
            i
          ]), x.set(`${n}:${e}`, d);
          const M = a[i][0] - a[o][0], V = a[i][1] - a[o][1], ie = a[i][2] - a[o][2];
          Math.abs(ie) > Math.max(Math.abs(M), Math.abs(V)) ? P.add(d) : H.add(d);
        }
      }
      const b = Math.round(l.mat ?? 0), W = b === 0 ? G : j, ee = b === 0 ? X : q, ne = b === 0 ? O : K, se = b === 0 ? Y : Q, D = Math.round(l.matShell ?? 0), oe = D === 0 ? G : j, ae = D === 0 ? X : q, te = D === 0 ? O : K, le = D === 0 ? Y : Q, A = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map();
      for (let n = 0; n < r.length; n++) if (p.has(n)) A.set(n, oe), $.set(n, ae), C.set(n, le), E.set(n, te), T.set(n, l.tShell ?? 0.2);
      else {
        const s = P.has(n), e = s ? l.bCol : l.bViga, o = s ? l.hCol : l.hViga, i = e * o, d = o * Math.pow(e, 3) / 12, M = e * Math.pow(o, 3) / 12, V = 0.14 * Math.pow(Math.min(e, o), 4);
        A.set(n, W), $.set(n, ee), _.set(n, i), I.set(n, d), S.set(n, M), z.set(n, V), C.set(n, se), E.set(n, ne);
      }
      const N = window.__hekatanManualSections;
      if (N && N.size > 0) for (const [n, s] of N.entries()) {
        const e = x.get(n);
        e === void 0 || p.has(e) || (s.A != null && _.set(e, s.A), s.Iz != null && I.set(e, s.Iz), s.Iy != null && S.set(e, s.Iy), s.J != null && z.set(e, s.J));
      }
      const Z = window.__hekatanMaterialDB, F = window.__hekatanManualMaterial;
      if (F && F.size > 0 && Z) for (const [n, s] of F.entries()) {
        const e = x.get(n);
        if (e === void 0 || p.has(e)) continue;
        const o = Z[s];
        if (!o) continue;
        A.set(e, o.E);
        const i = o.E / (2 * (1 + o.nu));
        $.set(e, i), C.set(e, o.rho), E.set(e, o.nu);
      }
      const L = window.__hekatanManualModifiers;
      if (L && L.size > 0) for (const [n, s] of L.entries()) {
        const e = x.get(n);
        if (e === void 0 || p.has(e)) continue;
        const o = _.get(e);
        o != null && _.set(e, o * s.A);
        const i = I.get(e);
        i != null && I.set(e, i * s.Iz);
        const d = S.get(e);
        d != null && S.set(e, d * s.Iy);
        const M = z.get(e);
        M != null && z.set(e, M * s.J);
      }
      const B = Math.round(l.apoyo ?? 0), u = /* @__PURE__ */ new Map();
      if (a.length > 0 && B !== 3) {
        const n = Math.min(...a.map((e) => e[2])), s = B === 0 ? [
          true,
          true,
          true,
          true,
          true,
          true
        ] : B === 1 ? [
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
        for (let e = 0; e < a.length; e++) Math.abs(a[e][2] - n) < 1e-6 && u.set(e, [
          ...s
        ]);
      }
      const R = window.__hekatanManualSupports;
      if (R && R.size > 0) for (const [n, s] of R.entries()) n >= 0 && n < a.length && u.set(n, [
        ...s
      ]);
      const f = /* @__PURE__ */ new Map();
      if (Math.round(l.aplicarCargas ?? 1) === 1 && a.length > 0) {
        const n = Math.max(...a.map((o) => o[2])), s = l.Fx ?? 0, e = l.Fz ?? -10;
        for (let o = 0; o < a.length; o++) Math.abs(a[o][2] - n) < 1e-6 && f.set(o, [
          s,
          0,
          e,
          0,
          0,
          0
        ]);
      }
      const J = window.__hekatanManualLoads;
      if (J && J.size > 0) for (const [n, s] of J.entries()) n >= 0 && n < a.length && f.set(n, [
        ...s
      ]);
      if (new URLSearchParams(window.location.search).get("heks") || new URLSearchParams(window.location.search).get("m")) {
        t.nodes.val = [], t.elements.val = [], t.nodeInputs.val = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map()
        };
        return;
      }
      t.nodes.val = a, t.elements.val = r, t.nodeInputs.val = {
        supports: u,
        loads: f
      }, t.elementInputs.val = {
        elasticities: A,
        shearModuli: $,
        areas: _,
        momentsOfInertiaY: I,
        momentsOfInertiaZ: S,
        torsionalConstants: z,
        densities: C,
        poissonsRatios: E,
        thicknesses: T
      }, t.objects3D.val = [];
      const k = [], U = window.__hekatanManualSprings;
      if (U && U.size > 0) {
        for (const [n, s] of U.entries()) if (!(n < 0 || n >= a.length)) for (let e = 0; e < 6; e++) s[e] !== 0 && k.push({
          node: n,
          dof: e,
          k: s[e]
        });
      }
      if (Math.round(l.autoSolve ?? 1) === 1 && a.length > 0 && r.length > 0 && u.size > 0 && f.size > 0) try {
        t.deformOutputs.val = ce(a, r, {
          supports: u,
          loads: f
        }, t.elementInputs.val, k.length > 0 ? k : void 0), console.log(`[NewBlank] Solve OK \u2014 ${a.length} nodos, ${r.length} elementos, ${u.size} apoyos, ${f.size} cargas, ${k.length} springs`);
      } catch (n) {
        console.warn(`[NewBlank] Solver fall\xF3: ${n.message}`);
      }
      else console.log(`[NewBlank] mode=${y ? "2D" : "3D"} | nodes=${a.length} elem=${r.length} cols=${P.size} vigas=${H.size} shells=${p.size} apoyos=${u.size} cargas=${f.size} springs=${k.length}`);
    },
    computedLabels(l, t) {
      const c = {}, h = t.nodes.val.length;
      t.elements.val.length;
      let w = 0, g = 0;
      for (const y of t.elements.val) y.length === 4 ? g++ : w++;
      return c.Stats = `${h} nodos \xB7 ${w} frames \xB7 ${g} shells`, h === 0 && (c["\u{1F4A1} Tip"] = "L\xEDnea = 2 clicks \xB7 Polil\xEDnea = N clicks + click derecho \xB7 \xC1rea = 4 clicks"), c;
    }
  };
});
export {
  __tla,
  de as n
};
