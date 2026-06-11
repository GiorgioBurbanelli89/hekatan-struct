import { d as ce, __tla as __tla_0 } from "./didacticCpp-C2di29sC.js";
let de;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let R, j, X, Y, K, H, q, Q, m, v;
  R = 25e6;
  j = 0.2;
  X = R / (2 * (1 + j));
  Y = 24;
  K = 2e8;
  H = 0.3;
  q = K / (2 * (1 + H));
  Q = 78;
  m = (l, a, c, h, g, w) => ({
    default: c,
    min: h,
    max: g,
    step: w,
    label: a,
    folder: l
  });
  v = (l, a, c, h) => ({
    default: c,
    label: a,
    folder: l,
    options: h
  });
  de = {
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
    build(l, a) {
      var _a, _b, _c;
      const c = ((_a = window.__hekatanDrawingPoints) == null ? void 0 : _a.val) ?? window.__hekatanDrawingPoints ?? [], h = ((_b = window.__hekatanDrawingPolylines) == null ? void 0 : _b.val) ?? window.__hekatanDrawingPolylines ?? [], g = ((_c = window.__hekatanDrawingAreas) == null ? void 0 : _c.val) ?? window.__hekatanDrawingAreas ?? [], w = new Set(g);
      if (!c.length) {
        a.nodes.val = [], a.elements.val = [], a.nodeInputs.val = {
          supports: /* @__PURE__ */ new Map(),
          loads: /* @__PURE__ */ new Map()
        }, a.elementInputs.val = {}, a.objects3D.val = [], console.log("[NewBlank] Lienzo vac\xEDo \u2014 us\xE1 el folder \u{1F4D0} Herramientas CAD para dibujar.");
        return;
      }
      const y = Math.round(l.mode ?? 1) === 0, t = c.map((n) => y ? [
        n[0],
        0,
        n[2]
      ] : [
        n[0],
        n[1],
        n[2]
      ]), r = [], N = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map();
      for (let n = 0; n < h.length; n++) {
        const s = h[n];
        if (w.has(n)) {
          const e = s.length === 5 ? s.slice(0, 4) : s.slice(0, Math.min(4, s.length));
          if (e.length !== 4 || e.some((i) => t[i] === void 0)) continue;
          const o = r.length;
          r.push(e), p.add(o);
        } else for (let e = 0; e < s.length - 1; e++) {
          const o = s[e], i = s[e + 1];
          if (o === i || t[o] === void 0 || t[i] === void 0) continue;
          const d = r.length;
          r.push([
            o,
            i
          ]), x.set(`${n}:${e}`, d);
          const M = t[i][0] - t[o][0], O = t[i][1] - t[o][1], ie = t[i][2] - t[o][2];
          Math.abs(ie) > Math.max(Math.abs(M), Math.abs(O)) ? N.add(d) : T.add(d);
        }
      }
      const b = Math.round(l.mat ?? 0), W = b === 0 ? R : K, ee = b === 0 ? X : q, ne = b === 0 ? j : H, se = b === 0 ? Y : Q, A = Math.round(l.matShell ?? 0), oe = A === 0 ? R : K, te = A === 0 ? X : q, ae = A === 0 ? j : H, le = A === 0 ? Y : Q, D = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
      for (let n = 0; n < r.length; n++) if (p.has(n)) D.set(n, oe), $.set(n, te), C.set(n, le), E.set(n, ae), U.set(n, l.tShell ?? 0.2);
      else {
        const s = N.has(n), e = s ? l.bCol : l.bViga, o = s ? l.hCol : l.hViga, i = e * o, d = o * Math.pow(e, 3) / 12, M = e * Math.pow(o, 3) / 12, O = 0.14 * Math.pow(Math.min(e, o), 4);
        D.set(n, W), $.set(n, ee), _.set(n, i), I.set(n, d), S.set(n, M), z.set(n, O), C.set(n, se), E.set(n, ne);
      }
      const F = window.__hekatanManualSections;
      if (F && F.size > 0) for (const [n, s] of F.entries()) {
        const e = x.get(n);
        e === void 0 || p.has(e) || (s.A != null && _.set(e, s.A), s.Iz != null && I.set(e, s.Iz), s.Iy != null && S.set(e, s.Iy), s.J != null && z.set(e, s.J));
      }
      const Z = window.__hekatanMaterialDB, P = window.__hekatanManualMaterial;
      if (P && P.size > 0 && Z) for (const [n, s] of P.entries()) {
        const e = x.get(n);
        if (e === void 0 || p.has(e)) continue;
        const o = Z[s];
        if (!o) continue;
        D.set(e, o.E);
        const i = o.E / (2 * (1 + o.nu));
        $.set(e, i), C.set(e, o.rho), E.set(e, o.nu);
      }
      const B = window.__hekatanManualModifiers;
      if (B && B.size > 0) for (const [n, s] of B.entries()) {
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
      const J = Math.round(l.apoyo ?? 0), f = /* @__PURE__ */ new Map();
      if (t.length > 0 && J !== 3) {
        const n = Math.min(...t.map((e) => e[2])), s = J === 0 ? [
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
        for (let e = 0; e < t.length; e++) Math.abs(t[e][2] - n) < 1e-6 && f.set(e, [
          ...s
        ]);
      }
      const L = window.__hekatanManualSupports;
      if (L && L.size > 0) for (const [n, s] of L.entries()) n >= 0 && n < t.length && f.set(n, [
        ...s
      ]);
      const u = /* @__PURE__ */ new Map();
      if (Math.round(l.aplicarCargas ?? 1) === 1 && t.length > 0) {
        const n = Math.max(...t.map((o) => o[2])), s = l.Fx ?? 0, e = l.Fz ?? -10;
        for (let o = 0; o < t.length; o++) Math.abs(t[o][2] - n) < 1e-6 && u.set(o, [
          s,
          0,
          e,
          0,
          0,
          0
        ]);
      }
      const V = window.__hekatanManualLoads;
      if (V && V.size > 0) for (const [n, s] of V.entries()) n >= 0 && n < t.length && u.set(n, [
        ...s
      ]);
      a.nodes.val = t, a.elements.val = r, a.nodeInputs.val = {
        supports: f,
        loads: u
      }, a.elementInputs.val = {
        elasticities: D,
        shearModuli: $,
        areas: _,
        momentsOfInertiaZ: I,
        momentsOfInertiaY: S,
        torsionalConstants: z,
        densities: C,
        poissonsRatios: E,
        thicknesses: U
      }, a.objects3D.val = [];
      const k = [], G = window.__hekatanManualSprings;
      if (G && G.size > 0) {
        for (const [n, s] of G.entries()) if (!(n < 0 || n >= t.length)) for (let e = 0; e < 6; e++) s[e] !== 0 && k.push({
          node: n,
          dof: e,
          k: s[e]
        });
      }
      if (Math.round(l.autoSolve ?? 1) === 1 && t.length > 0 && r.length > 0 && f.size > 0 && u.size > 0) try {
        a.deformOutputs.val = ce(t, r, {
          supports: f,
          loads: u
        }, a.elementInputs.val, k.length > 0 ? k : void 0), console.log(`[NewBlank] Solve OK \u2014 ${t.length} nodos, ${r.length} elementos, ${f.size} apoyos, ${u.size} cargas, ${k.length} springs`);
      } catch (n) {
        console.warn(`[NewBlank] Solver fall\xF3: ${n.message}`);
      }
      else console.log(`[NewBlank] mode=${y ? "2D" : "3D"} | nodes=${t.length} elem=${r.length} cols=${N.size} vigas=${T.size} shells=${p.size} apoyos=${f.size} cargas=${u.size} springs=${k.length}`);
    },
    computedLabels(l, a) {
      const c = {}, h = a.nodes.val.length;
      a.elements.val.length;
      let g = 0, w = 0;
      for (const y of a.elements.val) y.length === 4 ? w++ : g++;
      return c.Stats = `${h} nodos \xB7 ${g} frames \xB7 ${w} shells`, h === 0 && (c["\u{1F4A1} Tip"] = "L\xEDnea = 2 clicks \xB7 Polil\xEDnea = N clicks + click derecho \xB7 \xC1rea = 4 clicks"), c;
    }
  };
});
export {
  __tla,
  de as n
};
