import { d as re, __tla as __tla_0 } from "./didacticCpp-CT_TM4EM.js";
let fe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let j, K, Y, q, H, T, Q, W, g, v;
  j = 25e6;
  K = 0.2;
  Y = j / (2 * (1 + K));
  q = 24;
  H = 2e8;
  T = 0.3;
  Q = H / (2 * (1 + T));
  W = 78;
  g = (c, i, h, f, w, p) => ({
    default: h,
    min: f,
    max: w,
    step: p,
    label: i,
    folder: c
  });
  v = (c, i, h, f) => ({
    default: h,
    label: i,
    folder: c,
    options: f
  });
  fe = {
    id: "new-blank",
    name: "\u{1F4C4} Archivo nuevo (lienzo CAD 2D/3D)",
    category: "Archivo nuevo",
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
      bCol: g("Secci\xF3n frames", "b columna (m)", 0.4, 0.1, 1, 0.05),
      hCol: g("Secci\xF3n frames", "h columna (m)", 0.4, 0.1, 1, 0.05),
      bViga: g("Secci\xF3n frames", "b viga (m)", 0.3, 0.1, 0.8, 0.05),
      hViga: g("Secci\xF3n frames", "h viga (m)", 0.5, 0.1, 1, 0.05),
      tShell: g("Secci\xF3n shells", "Espesor shell (m)", 0.2, 0.05, 1, 0.01),
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
      Fz: g("Cargas", "Fz vertical/nodo (kN)", -10, -200, 0, 1),
      Fx: g("Cargas", "Fx lateral/nodo (kN)", 0, -100, 100, 1),
      autoSolve: v("Solver", "Auto-resolver", 1, {
        S\u00ED: 1,
        No: 0
      })
    },
    build(c, i) {
      var _a, _b, _c, _d;
      const h = ((_a = window.__hekatanDrawingPoints) == null ? void 0 : _a.val) ?? window.__hekatanDrawingPoints ?? [], f = ((_b = window.__hekatanDrawingPolylines) == null ? void 0 : _b.val) ?? window.__hekatanDrawingPolylines ?? [], w = ((_c = window.__hekatanDrawingAreas) == null ? void 0 : _c.val) ?? window.__hekatanDrawingAreas ?? [], p = new Set(w);
      if (!h.length) {
        i.nodes.val = [], i.elements.val = [], i.nodeInputs.val = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map()
        }, i.elementInputs.val = {}, i.objects3D.val = [], console.log("[NewBlank] Lienzo vac\xEDo \u2014 us\xE1 el folder \u{1F4D0} Herramientas CAD para dibujar.");
        return;
      }
      const y = Math.round(c.mode ?? 1) === 0, a = h.map((n) => y ? [
        n[0],
        0,
        n[2]
      ] : [
        n[0],
        n[1],
        n[2]
      ]), d = [], N = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map();
      for (let n = 0; n < f.length; n++) {
        const o = f[n];
        if (p.has(n)) {
          const e = o.length === 5 ? o.slice(0, 4) : o.slice(0, Math.min(4, o.length));
          if (e.length !== 4 || e.some((l) => a[l] === void 0)) continue;
          const s = d.length;
          d.push(e), M.add(s);
        } else for (let e = 0; e < o.length - 1; e++) {
          const s = o[e], l = o[e + 1];
          if (s === l || a[s] === void 0 || a[l] === void 0) continue;
          const t = d.length;
          d.push([
            s,
            l
          ]), x.set(`${n}:${e}`, t);
          const r = a[l][0] - a[s][0], R = a[l][1] - a[s][1], ce = a[l][2] - a[s][2];
          Math.abs(ce) > Math.max(Math.abs(r), Math.abs(R)) ? N.add(t) : U.add(t);
        }
      }
      const D = Math.round(c.mat ?? 0), ee = D === 0 ? j : H, ne = D === 0 ? Y : Q, se = D === 0 ? K : T, oe = D === 0 ? q : W, A = Math.round(c.matShell ?? 0), te = A === 0 ? j : H, ae = A === 0 ? Y : Q, le = A === 0 ? K : T, ie = A === 0 ? q : W, $ = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map();
      for (let n = 0; n < d.length; n++) if (M.has(n)) $.set(n, te), C.set(n, ae), E.set(n, ie), P.set(n, le), Z.set(n, c.tShell ?? 0.2);
      else {
        const o = N.has(n), e = o ? c.bCol : c.bViga, s = o ? c.hCol : c.hViga, l = e * s, t = s * Math.pow(e, 3) / 12, r = e * Math.pow(s, 3) / 12, R = 0.14 * Math.pow(Math.min(e, s), 4);
        $.set(n, ee), C.set(n, ne), I.set(n, l), S.set(n, t), z.set(n, r), b.set(n, R), E.set(n, oe), P.set(n, se);
      }
      const F = window.__hekatanManualSections;
      if (F && F.size > 0) for (const [n, o] of F.entries()) {
        const e = x.get(n);
        e === void 0 || M.has(e) || (o.A != null && I.set(e, o.A), o.Iz != null && S.set(e, o.Iz), o.Iy != null && z.set(e, o.Iy), o.J != null && b.set(e, o.J));
      }
      const X = window.__hekatanMaterialDB, B = window.__hekatanManualMaterial;
      if (B && B.size > 0 && X) for (const [n, o] of B.entries()) {
        const e = x.get(n);
        if (e === void 0 || M.has(e)) continue;
        const s = X[o];
        if (!s) continue;
        $.set(e, s.E);
        const l = s.E / (2 * (1 + s.nu));
        C.set(e, l), E.set(e, s.rho), P.set(e, s.nu);
      }
      const V = window.__hekatanManualModifiers;
      if (V && V.size > 0) for (const [n, o] of V.entries()) {
        const e = x.get(n);
        if (e === void 0 || M.has(e)) continue;
        const s = I.get(e);
        s != null && I.set(e, s * o.A);
        const l = S.get(e);
        l != null && S.set(e, l * o.Iz);
        const t = z.get(e);
        t != null && z.set(e, t * o.Iy);
        const r = b.get(e);
        r != null && b.set(e, r * o.J);
      }
      const J = Math.round(c.apoyo ?? 0), u = /* @__PURE__ */ new Map();
      if (a.length > 0 && J !== 3) {
        const n = Math.min(...a.map((e) => e[2])), o = J === 0 ? [
          true,
          true,
          true,
          true,
          true,
          true
        ] : J === 1 ? [
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
          ...o
        ]);
      }
      const L = window.__hekatanManualSupports, _ = (_d = window.__hekatanDrawingPoints) == null ? void 0 : _d.rawVal;
      if (L && L.size > 0 && _) for (const [n, o] of L.entries()) {
        const e = _[n];
        if (!e) continue;
        let s = -1, l = 1e-3;
        for (let t = 0; t < a.length; t++) {
          const r = Math.hypot(a[t][0] - e[0], a[t][1] - e[1], a[t][2] - e[2]);
          r < l && (l = r, s = t);
        }
        s >= 0 && u.set(s, [
          ...o
        ]);
      }
      const m = /* @__PURE__ */ new Map();
      if (Math.round(c.aplicarCargas ?? 1) === 1 && a.length > 0) {
        const n = Math.max(...a.map((s) => s[2])), o = c.Fx ?? 0, e = c.Fz ?? -10;
        for (let s = 0; s < a.length; s++) Math.abs(a[s][2] - n) < 1e-6 && m.set(s, [
          o,
          0,
          e,
          0,
          0,
          0
        ]);
      }
      const G = window.__hekatanManualLoads;
      if (G && G.size > 0 && _) for (const [n, o] of G.entries()) {
        const e = _[n];
        if (!e) continue;
        let s = -1, l = 1e-3;
        for (let t = 0; t < a.length; t++) {
          const r = Math.hypot(a[t][0] - e[0], a[t][1] - e[1], a[t][2] - e[2]);
          r < l && (l = r, s = t);
        }
        s >= 0 && m.set(s, [
          ...o
        ]);
      }
      i.nodes.val = a, i.elements.val = d, i.nodeInputs.val = {
        supports: u,
        loads: m
      }, i.elementInputs.val = {
        elasticities: $,
        shearModuli: C,
        areas: I,
        momentsOfInertiaZ: S,
        momentsOfInertiaY: z,
        torsionalConstants: b,
        densities: E,
        poissonsRatios: P,
        thicknesses: Z
      }, i.objects3D.val = [];
      const k = [], O = window.__hekatanManualSprings;
      if (O && O.size > 0 && _) for (const [n, o] of O.entries()) {
        const e = _[n];
        if (!e) continue;
        let s = -1, l = 1e-3;
        for (let t = 0; t < a.length; t++) {
          const r = Math.hypot(a[t][0] - e[0], a[t][1] - e[1], a[t][2] - e[2]);
          r < l && (l = r, s = t);
        }
        if (!(s < 0)) for (let t = 0; t < 6; t++) o[t] !== 0 && k.push({
          node: s,
          dof: t,
          k: o[t]
        });
      }
      if (Math.round(c.autoSolve ?? 1) === 1 && a.length > 0 && d.length > 0 && u.size > 0 && m.size > 0) try {
        i.deformOutputs.val = re(a, d, {
          supports: u,
          loads: m
        }, i.elementInputs.val, k.length > 0 ? k : void 0), console.log(`[NewBlank] Solve OK \u2014 ${a.length} nodos, ${d.length} elementos, ${u.size} apoyos, ${m.size} cargas, ${k.length} springs`);
      } catch (n) {
        console.warn(`[NewBlank] Solver fall\xF3: ${n.message}`);
      }
      else console.log(`[NewBlank] mode=${y ? "2D" : "3D"} | nodes=${a.length} elem=${d.length} cols=${N.size} vigas=${U.size} shells=${M.size} apoyos=${u.size} cargas=${m.size} springs=${k.length}`);
    },
    computedLabels(c, i) {
      const h = {}, f = i.nodes.val.length;
      i.elements.val.length;
      let w = 0, p = 0;
      for (const y of i.elements.val) y.length === 4 ? p++ : w++;
      return h.Stats = `${f} nodos \xB7 ${w} frames \xB7 ${p} shells`, f === 0 && (h["\u{1F4A1} Tip"] = "L\xEDnea = 2 clicks \xB7 Polil\xEDnea = N clicks + click derecho \xB7 \xC1rea = 4 clicks"), h;
    }
  };
});
export {
  __tla,
  fe as n
};
