import { a as kt } from "./analyze-ClLKGn9k.js";
import { m as Dt, d as Nt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { l as Rt, m as bt, n as Xt, o as Gt, L as jt, B as Zt, V as Pt, a as qt, p as Jt, e as Kt, c as Ut } from "./Text-Dh9LKuSL.js";
let ho;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function q(t, n, v, r, g = "#00e5ff") {
    const c = document.createElement("canvas"), f = c.getContext("2d");
    f.font = "bold 96px system-ui, -apple-system, sans-serif";
    const L = Math.ceil(f.measureText(t).width);
    c.width = L + 32 * 2, c.height = 96 + 32 * 2, f.font = "bold 96px system-ui, -apple-system, sans-serif", f.fillStyle = "rgba(0,0,0,0.75)";
    const I = c.height / 2;
    f.beginPath(), f.moveTo(I, 0), f.arcTo(c.width, 0, c.width, I, I), f.arcTo(c.width, c.height, c.width - I, c.height, I), f.arcTo(0, c.height, 0, c.height - I, I), f.arcTo(0, 0, I, 0, I), f.closePath(), f.fill(), f.fillStyle = g, f.textBaseline = "middle", f.fillText(t, 32, c.height / 2);
    const C = new Rt(c);
    C.minFilter = bt, C.magFilter = bt, C.anisotropy = 16, C.needsUpdate = true;
    const A = new Xt({
      map: C,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), $ = new Gt(A);
    $.position.set(n, v, r);
    const l = 0.45, h = c.width / c.height;
    return $.scale.set(l * h, l, 1), $.userData.isCota = true, $;
  }
  function N(t, n, v = 58879) {
    const r = new jt({
      color: v,
      depthTest: false
    }), g = new Zt().setFromPoints([
      new Pt(...t),
      new Pt(...n)
    ]), i = new qt(g, r);
    return i.renderOrder = 999, i.userData.isCota = true, i;
  }
  function Wt(t, n, v) {
    const r = [], g = n[n.length - 1] + 1, i = t[t.length - 1] + 1, u = v[0];
    for (let x = 0; x < t.length - 1; x++) {
      const c = t[x], f = t[x + 1], L = f - c;
      r.push(N([
        c,
        g,
        u
      ], [
        f,
        g,
        u
      ])), r.push(N([
        c,
        g - 0.15,
        u
      ], [
        c,
        g + 0.15,
        u
      ])), r.push(N([
        f,
        g - 0.15,
        u
      ], [
        f,
        g + 0.15,
        u
      ])), r.push(q(`${L.toFixed(2)} m`, (c + f) / 2, g + 0.35, u));
    }
    for (let x = 0; x < n.length - 1; x++) {
      const c = n[x], f = n[x + 1], L = f - c;
      r.push(N([
        i,
        c,
        u
      ], [
        i,
        f,
        u
      ])), r.push(N([
        i - 0.15,
        c,
        u
      ], [
        i + 0.15,
        c,
        u
      ])), r.push(N([
        i - 0.15,
        f,
        u
      ], [
        i + 0.15,
        f,
        u
      ])), r.push(q(`${L.toFixed(2)} m`, i + 0.35, (c + f) / 2, u));
    }
    const m = t[0] - 1, p = n[0];
    for (let x = 0; x < v.length - 1; x++) {
      const c = v[x], f = v[x + 1], L = f - c;
      r.push(N([
        m,
        p,
        c
      ], [
        m,
        p,
        f
      ])), r.push(N([
        m - 0.15,
        p,
        c
      ], [
        m + 0.15,
        p,
        c
      ])), r.push(N([
        m - 0.15,
        p,
        f
      ], [
        m + 0.15,
        p,
        f
      ])), r.push(q(`Piso ${x + 1}: ${L.toFixed(2)} m`, m - 0.5, p, (c + f) / 2));
    }
    return r;
  }
  function St(t, n = 0.5) {
    const v = Qt(n), r = t / v;
    let g = Math.max(2, Math.round(r));
    return t / g > v * 1.25 && (g = Math.ceil(r)), {
      n: g,
      dx: t / g
    };
  }
  function Qt(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const to = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function oo(t, n, v = {}) {
    const r = v.tol ?? 1e-5, g = 0, i = [], u = [], m = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, p = 1e8, x = 1e4, c = 1e4, f = 2 * c, L = p / (2 * (1 + 0.3));
    for (const I of n) {
      const C = [];
      let A = 0, $ = 0;
      for (let F = 0; F < t.length; F++) Math.abs(t[F][2] - I) < r && (C.push(F), A += t[F][0], $ += t[F][1]);
      if (C.length < 2) continue;
      const l = A / C.length, h = $ / C.length, z = t.length + i.length;
      i.push({
        idx: z,
        z: I,
        x: l,
        y: h
      });
      for (const F of C) {
        u.push([
          z,
          F
        ]);
        const V = g + u.length - 1;
        m.areas.set(V, x), m.momentsOfInertiaY.set(V, c), m.momentsOfInertiaZ.set(V, c), m.torsionalConstants.set(V, f), m.elasticities.set(V, p), m.shearModuli.set(V, L), m.densities.set(V, 0);
      }
    }
    return v.linkStiffness, {
      masterNodes: i,
      rigidLinks: u,
      linkProps: m
    };
  }
  function no(t, n, v) {
    const r = (g, i) => {
      g.forEach((u, m) => i.set(m + v, u));
    };
    n.areas = n.areas ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaY = n.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaZ = n.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), n.torsionalConstants = n.torsionalConstants ?? /* @__PURE__ */ new Map(), n.elasticities = n.elasticities ?? /* @__PURE__ */ new Map(), n.shearModuli = n.shearModuli ?? /* @__PURE__ */ new Map(), n.densities = n.densities ?? /* @__PURE__ */ new Map(), r(t.linkProps.areas, n.areas), r(t.linkProps.momentsOfInertiaY, n.momentsOfInertiaY), r(t.linkProps.momentsOfInertiaZ, n.momentsOfInertiaZ), r(t.linkProps.torsionalConstants, n.torsionalConstants), r(t.linkProps.elasticities, n.elasticities), r(t.linkProps.shearModuli, n.shearModuli), r(t.linkProps.densities, n.densities);
  }
  function zt(t) {
    const n = Math.abs(t);
    return n < 0.8 ? {
      state: "Elastic",
      color: 2278750,
      ratio: t,
      description: "El\xE1stico (sin da\xF1o)"
    } : n < 1 ? {
      state: "B",
      color: 15381256,
      ratio: t,
      description: "B \u2014 Inicio fluencia"
    } : n < 1.5 ? {
      state: "IO",
      color: 16347926,
      ratio: t,
      description: "IO \u2014 Immediate Occupancy"
    } : n < 2.5 ? {
      state: "LS",
      color: 15680580,
      ratio: t,
      description: "LS \u2014 Life Safety"
    } : {
      state: "CP",
      color: 10033947,
      ratio: t,
      description: "CP \u2014 Collapse Prevention"
    };
  }
  function eo(t, n, v) {
    if (t <= 0 || n <= 0) return 1e-12;
    const g = Math.sqrt(12 * n / t) / 2;
    return n / g * v;
  }
  function so(t, n, v, r, g, i, u, m = {}) {
    var _a, _b;
    const p = m.Fy_steel ?? 345e3;
    m.fc_concrete;
    const x = m.Fy_rebar ?? 42e4, c = m.omega ?? 0.15, f = m.phi ?? 0.9, L = g < 0.5 ? f * c * x * (1 - 0.59 * c) : f * p, I = i < 0.5 ? f * c * x * (1 - 0.59 * c) : f * p, C = v.frameBendingMoments, A = [];
    for (let $ = 0; $ < n.length; $++) {
      const l = n[$];
      if (l.length !== 2) continue;
      const [h, z] = l, F = u.has($);
      let V = 0, H = 0;
      const y = C == null ? void 0 : C.get($);
      y && (V = y.Mi, H = y.Mj);
      const E = ((_a = r.areas) == null ? void 0 : _a.get($)) ?? 0.16, O = ((_b = r.momentsOfInertiaZ) == null ? void 0 : _b.get($)) ?? 213e-5, R = eo(E, O, F ? L : I), K = V / R, X = H / R;
      A.push({
        nodeIdx: h,
        elementIdx: $,
        end: "i",
        classification: zt(K)
      }), A.push({
        nodeIdx: z,
        elementIdx: $,
        end: "j",
        classification: zt(X)
      });
    }
    return A;
  }
  function io(t, n, v, r = {}) {
    const g = r.showElastic ?? false, i = (r.radiusFactor ?? 0.02) * v, u = [], m = new Jt(i, 12, 8);
    for (const p of t) {
      if (!g && p.classification.state === "Elastic") continue;
      const x = n[p.nodeIdx];
      if (!x) continue;
      const c = new Kt({
        color: p.classification.color,
        transparent: true,
        opacity: 0.85
      }), f = new Ut(m, c);
      f.position.set(x[0], x[1], x[2]), f.userData = {
        hingeState: p.classification.state,
        ratio: p.classification.ratio.toFixed(3),
        element: p.elementIdx,
        end: p.end
      }, u.push(f);
    }
    return u;
  }
  function ao(t) {
    const n = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const v of t) n[v.classification.state]++;
    return n;
  }
  let co, b, D;
  co = 24;
  b = (t, n, v, r, g, i) => ({
    default: v,
    min: r,
    max: g,
    step: i,
    label: n,
    folder: t
  });
  D = (t, n, v, r) => ({
    default: v,
    label: n,
    folder: t,
    options: r
  });
  ho = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      nVanosX: {
        ...b("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...b("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...b("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: b("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: b("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: b("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: b("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: b("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: b("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: b("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: b("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: b("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: D("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: D("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: D("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: b("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: b("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: b("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: b("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: b("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: D("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: b("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: b("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: b("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: b("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: b("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: b("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: D("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: b("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: D("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: D("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: D("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: b("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabDisc: D("Avanzado", "Discretizaci\xF3n losa", 0.5, to),
      diafragmaRigido: D("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      })
    },
    dynamicParams(t) {
      const n = {}, v = Math.round(t.nPisos ?? 3), r = Math.round(t.nVanosX ?? 2), g = Math.round(t.nVanosY ?? 2);
      for (let i = 1; i <= v; i++) n[`hP_${i}`] = b("Alturas por piso", `h Piso ${i} (m)`, 0, 0, 6, 0.1), n[`colB_p${i}`] = b("Secciones por piso", `b col P${i} (m)`, 0, 0, 1, 0.05), n[`colH_p${i}`] = b("Secciones por piso", `h col P${i} (m)`, 0, 0, 1, 0.05), n[`vigaB_p${i}`] = b("Secciones por piso", `b viga P${i} (m)`, 0, 0, 0.8, 0.05), n[`vigaH_p${i}`] = b("Secciones por piso", `h viga P${i} (m)`, 0, 0, 1, 0.05);
      for (let i = 1; i <= r; i++) n[`svX_${i}`] = b("Luces por vano", `svX #${i} (m)`, 0, 0, 12, 0.5);
      for (let i = 1; i <= g; i++) n[`svY_${i}`] = b("Luces por vano", `svY #${i} (m)`, 0, 0, 12, 0.5);
      return n;
    },
    computedLabels(t, n) {
      var _a;
      const r = (_a = n.deformOutputs.rawVal) == null ? void 0 : _a.reactions, g = n.nodes.rawVal;
      if (!r || !(g == null ? void 0 : g.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let i = 0, u = 0, m = 0, p = -1, x = 0, c = -1;
      r.forEach((h, z) => {
        const F = g[z];
        if (!F || Math.abs(F[2]) > 1e-6) return;
        const V = h[2], H = h[3], y = h[4];
        Math.abs(V) > Math.abs(i) && (i = V, p = z, F[0], F[1]), V > 0 && V > Math.abs(x) && (x = V, c = z), Math.abs(H) > Math.abs(u) && (u = H), Math.abs(y) > Math.abs(m) && (m = y);
      });
      const f = Math.abs(i) / 9.80665, L = Math.abs(u) / 9.80665, I = Math.abs(m) / 9.80665, C = x / 9.80665, A = Math.round(t.nPisos), $ = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${f.toFixed(2)} tonf (nodo ${p})`,
        Mx: `${L.toFixed(2)} tonf\xB7m`,
        My: `${I.toFixed(2)} tonf\xB7m`
      };
      C > 0.01 && ($["\u26A0 Uplift"] = `${C.toFixed(2)} tonf (nodo ${c})`), $.Pisos = `${A}`, $["Copiar a \u2192 zapata-aislada"] = `P=${f.toFixed(1)}, Mx=${L.toFixed(1)}, My=${I.toFixed(1)}`;
      const l = n.__plasticHinges;
      if (l) {
        const h = (l.B ?? 0) + (l.IO ?? 0) + (l.LS ?? 0) + (l.CP ?? 0);
        $["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", $["\u{1F7E2} El\xE1stico"] = `${l.Elastic ?? 0}`, $["\u{1F7E1} B \u2014 Yield"] = `${l.B ?? 0}`, $["\u{1F7E0} IO \u2014 Immed.Occ."] = `${l.IO ?? 0}`, $["\u{1F534} LS \u2014 Life Safety"] = `${l.LS ?? 0}`, $["\u26AB CP \u2014 Collapse Prev."] = `${l.CP ?? 0}`, $["Total r\xF3tulas formadas"] = `${h}`;
      }
      return $;
    },
    build(t, n) {
      const v = Math.round(t.nVanosX), r = Math.round(t.nVanosY), g = Math.round(t.nPisos), i = Math.max(1, Math.round(t.nSubViga)), u = Math.max(1, Math.round(t.nSubCol)), m = t.fcConcr * 0.0981, p = 4700 * Math.sqrt(m) * 1e3, x = 2e8, c = 0.2, f = 0.3, L = p / (2 * (1 + c)), I = x / (2 * (1 + f)), C = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, v).map((o) => o > 0 ? o : t.spanX), A = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, r).map((o) => o > 0 ? o : t.spanY), $ = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, g).map((o) => o > 0 ? o : t.hPiso), l = [];
      t.Lvix > 0 && l.push(-t.Lvix), l.push(0);
      for (let o = 0; o < v; o++) l.push(l[l.length - 1] + C[o]);
      t.Lvdx > 0 && l.push(l[l.length - 1] + t.Lvdx);
      const h = [];
      t.Lviy > 0 && h.push(-t.Lviy), h.push(0);
      for (let o = 0; o < r; o++) h.push(h[h.length - 1] + A[o]);
      t.Lvdy > 0 && h.push(h[h.length - 1] + t.Lvdy);
      const z = [
        0
      ];
      for (let o = 0; o < g; o++) z.push(z[z.length - 1] + $[o]);
      const F = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === l.length - 1, V = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === h.length - 1, H = (o, e) => F(o) || V(e), y = [], E = {};
      for (let o = 0; o < z.length; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < l.length; s++) o === 0 && H(s, e) || (E[`${s},${e},${o}`] = y.length, y.push([
        l[s],
        h[e],
        z[o]
      ]));
      const O = [], J = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Map(), st = (o, e, s, d, a) => {
        if (s <= 1) {
          d.add(O.length), X.set(O.length, a), O.push([
            o,
            e
          ]);
          return;
        }
        const P = y[o], M = y[e];
        let S = o;
        for (let B = 1; B < s; B++) {
          const _ = B / s, w = y.length;
          y.push([
            P[0] + (M[0] - P[0]) * _,
            P[1] + (M[1] - P[1]) * _,
            P[2] + (M[2] - P[2]) * _
          ]), d.add(O.length), X.set(O.length, a), O.push([
            S,
            w
          ]), S = w;
        }
        d.add(O.length), X.set(O.length, a), O.push([
          S,
          e
        ]);
      };
      for (let o = 0; o < z.length - 1; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < l.length; s++) H(s, e) || st(E[`${s},${e},${o}`], E[`${s},${e},${o + 1}`], u, J, o);
      for (let o = 1; o < z.length; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < l.length - 1; s++) st(E[`${s},${e},${o}`], E[`${s + 1},${e},${o}`], i, R, o - 1);
      for (let o = 1; o < z.length; o++) for (let e = 0; e < l.length; e++) for (let s = 0; s < h.length - 1; s++) st(E[`${e},${s},${o}`], E[`${e},${s + 1},${o}`], i, R, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), e = (d, a, P) => {
          for (let S = 0; S < y.length; S++) if (Math.abs(y[S][0] - d) < 1e-6 && Math.abs(y[S][1] - a) < 1e-6 && Math.abs(y[S][2] - P) < 1e-6) return S;
          const M = y.length;
          return y.push([
            d,
            a,
            P
          ]), M;
        }, s = t.vSecDir < 0.5 ? "x" : "y";
        for (let d = 1; d < z.length; d++) if (s === "x") for (let a = 0; a < h.length - 1; a++) {
          const P = h[a], M = h[a + 1];
          for (let S = 1; S <= o; S++) {
            const B = P + S / (o + 1) * (M - P), _ = [];
            for (let w = 0; w < l.length; w++) _.push(e(l[w], B, z[d]));
            for (let w = 0; w < l.length - 1; w++) R.add(O.length), O.push([
              _[w],
              _[w + 1]
            ]);
          }
        }
        else for (let a = 0; a < l.length - 1; a++) {
          const P = l[a], M = l[a + 1];
          for (let S = 1; S <= o; S++) {
            const B = P + S / (o + 1) * (M - P), _ = [];
            for (let w = 0; w < h.length; w++) _.push(e(B, h[w], z[d]));
            for (let w = 0; w < h.length - 1; w++) R.add(O.length), O.push([
              _[w],
              _[w + 1]
            ]);
          }
        }
      }
      const Y = Math.round(t.bracesMode);
      if (Y > 0) {
        const o = Y === 1 || Y === 2 || Y === 3, e = Y === 1 || Y === 2 || Y === 4, s = z.length - 1;
        for (let d = 0; d < s; d++) {
          if (o) for (let a = 0; a < h.length; a++) {
            if (Y === 1 && a !== 0 && a !== h.length - 1) continue;
            const P = Math.floor((l.length - 1) / 2);
            for (let M = 0; M < l.length - 1; M++) {
              if (Y === 1 && M !== P || H(M, a) || H(M + 1, a)) continue;
              const S = E[`${M},${a},${d}`], B = E[`${M + 1},${a},${d + 1}`], _ = E[`${M + 1},${a},${d}`], w = E[`${M},${a},${d + 1}`];
              S !== void 0 && B !== void 0 && O.push([
                S,
                B
              ]), _ !== void 0 && w !== void 0 && O.push([
                _,
                w
              ]);
            }
          }
          if (e) for (let a = 0; a < l.length; a++) {
            if (Y === 1 && a !== 0 && a !== l.length - 1) continue;
            const P = Math.floor((h.length - 1) / 2);
            for (let M = 0; M < h.length - 1; M++) {
              if (Y === 1 && M !== P || H(a, M) || H(a, M + 1)) continue;
              const S = E[`${a},${M},${d}`], B = E[`${a},${M + 1},${d + 1}`], _ = E[`${a},${M + 1},${d}`], w = E[`${a},${M},${d + 1}`];
              S !== void 0 && B !== void 0 && O.push([
                S,
                B
              ]), _ !== void 0 && w !== void 0 && O.push([
                _,
                w
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), e = (d, a, P) => `${Math.round(d * 1e4)},${Math.round(a * 1e4)},${Math.round(P * 1e4)}`;
        for (let d = 0; d < y.length; d++) o.set(e(y[d][0], y[d][1], y[d][2]), d);
        const s = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let d = 1; d < z.length; d++) {
          const a = z[d];
          for (let P = 0; P < l.length - 1; P++) for (let M = 0; M < h.length - 1; M++) {
            const S = l[P], B = l[P + 1], _ = h[M], w = h[M + 1], { n: at } = St(Math.abs(B - S), s), { n: ct } = St(Math.abs(w - _), s), Z = [];
            for (let T = 0; T <= ct; T++) {
              const k = [];
              for (let lt = 0; lt <= at; lt++) {
                const xt = S + lt / at * (B - S), $t = _ + T / ct * (w - _), _t = e(xt, $t, a), pt = o.get(_t);
                if (pt !== void 0) k.push(pt);
                else {
                  const yt = y.length;
                  y.push([
                    xt,
                    $t,
                    a
                  ]), o.set(_t, yt), k.push(yt);
                }
              }
              Z.push(k);
            }
            for (let T = 0; T < ct; T++) for (let k = 0; k < at; k++) K.add(O.length), O.push([
              Z[T][k],
              Z[T][k + 1],
              Z[T + 1][k + 1],
              Z[T + 1][k]
            ]);
          }
        }
      }
      const rt = Math.round(t.apoyo), wt = rt === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : rt === 1 ? [
        true,
        true,
        true,
        false,
        false,
        false
      ] : [
        true,
        true,
        true,
        false,
        false,
        false
      ], ft = /* @__PURE__ */ new Map();
      for (let o = 0; o < h.length; o++) for (let e = 0; e < l.length; e++) H(e, o) || ft.set(E[`${e},${o},0`], [
        ...wt
      ]);
      const U = /* @__PURE__ */ new Map(), ht = t.CM + t.CV;
      if (ht !== 0) for (let o = 1; o < z.length; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < l.length; s++) {
        const d = `${s},${e},${o}`;
        E[d] !== void 0 && U.set(E[d], [
          0,
          0,
          ht,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = E[`${l.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${g}`];
        if (o !== void 0) {
          const e = U.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          U.set(o, [
            e[0] + t.Ex,
            e[1] + t.Ey,
            e[2],
            e[3],
            e[4],
            e[5]
          ]);
        }
      }
      const dt = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), gt = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), ut = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), mt = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), Ot = (o) => {
        const e = dt[o] ?? t.colSize, s = gt[o] ?? t.colSize;
        return {
          A: e * s,
          Iz: e * s ** 3 / 12,
          Iy: s * e ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(e, s), 4)
        };
      }, Ct = (o) => {
        const e = ut[o] ?? t.vigaB, s = mt[o] ?? t.vigaH;
        return {
          A: e * s,
          Iz: e * s ** 3 / 12,
          Iy: s * e ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(e, s), 3) * Math.max(e, s)
        };
      }, It = t.matCol < 0.5 ? p : x, Lt = t.matCol < 0.5 ? L : I, Et = t.matCol < 0.5 ? c : f, Vt = t.matViga < 0.5 ? p : x, Bt = t.matViga < 0.5 ? L : I, Ft = t.matViga < 0.5 ? c : f, G = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
      for (let o = 0; o < O.length; o++) {
        it.set(o, co);
        const e = X.get(o) ?? 0;
        if (K.has(o)) G.set(o, p), j.set(o, L), nt.set(o, c), Mt.set(o, t.slabT);
        else if (J.has(o)) {
          const s = Ot(Math.min(e, 7));
          G.set(o, It), j.set(o, Lt), nt.set(o, Et), W.set(o, s.A), Q.set(o, s.Iz), tt.set(o, s.Iy), ot.set(o, s.J);
        } else {
          const s = Ct(Math.min(e, 7));
          G.set(o, Vt), j.set(o, Bt), nt.set(o, Ft), W.set(o, s.A), Q.set(o, s.Iz), tt.set(o, s.Iy), ot.set(o, s.J);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let a = 1; a < z.length; a++) o.push(z[a]);
        const e = oo(y, o), s = O.length;
        for (const a of e.masterNodes) y.push([
          a.x,
          a.y,
          a.z
        ]);
        for (const a of e.rigidLinks) O.push(a);
        no(e, {
          elasticities: G,
          shearModuli: j,
          areas: W,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: tt,
          torsionalConstants: ot,
          densities: it
        }, s);
      }
      n.nodes.val = y, n.elements.val = O, n.nodeInputs.val = {
        supports: ft,
        loads: U
      }, n.elementInputs.val = {
        elasticities: G,
        shearModuli: j,
        areas: W,
        momentsOfInertiaZ: Q,
        momentsOfInertiaY: tt,
        torsionalConstants: ot,
        densities: it,
        poissonsRatios: nt,
        thicknesses: Mt
      };
      const vt = Nt(y, O, n.nodeInputs.val, n.elementInputs.val);
      n.deformOutputs.val = vt, n.analyzeOutputs.val = kt(y, O, n.elementInputs.val, vt);
      const et = Wt(l, h, z), At = dt[0], Ht = gt[0], Yt = ut[0], Tt = mt[0];
      et.push(q(`Col ${(At * 100).toFixed(0)}\xD7${(Ht * 100).toFixed(0)} cm`, l[0] + 0.3, h[0] + 0.3, z[1] * 0.5, "#ffaa00")), et.push(q(`Viga ${(Yt * 100).toFixed(0)}\xD7${(Tt * 100).toFixed(0)} cm`, (l[0] + l[1]) / 2, h[0], z[1] + 0.2, "#ffaa00"));
      try {
        const o = so(y, O, n.analyzeOutputs.rawVal, n.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), J);
        let e = 1 / 0, s = 1 / 0, d = 1 / 0, a = -1 / 0, P = -1 / 0, M = -1 / 0;
        for (const _ of y) _[0] < e && (e = _[0]), _[0] > a && (a = _[0]), _[1] < s && (s = _[1]), _[1] > P && (P = _[1]), _[2] < d && (d = _[2]), _[2] > M && (M = _[2]);
        const S = Math.sqrt((a - e) ** 2 + (P - s) ** 2 + (M - d) ** 2) || 1, B = io(o, y, S, {
          showElastic: false,
          radiusFactor: 0.015
        });
        et.push(...B), n.__plasticHinges = ao(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      n.objects3D.val = et;
    },
    runModal(t, n, v) {
      var _a, _b;
      const r = n.nodes.val, g = n.elements.val, i = n.nodeInputs.val, u = n.elementInputs.val;
      if (!(!r.length || !g.length || !((_a = i.supports) == null ? void 0 : _a.size) || !((_b = u.densities) == null ? void 0 : _b.size))) try {
        let m = u;
        if (t.diafragmaRigido >= 0.5) {
          const I = new Map(u.densities);
          for (let C = 0; C < g.length; C++) {
            const A = g[C];
            if (A.length !== 4) continue;
            const $ = A.map((h) => r[h][2]);
            if (Math.max(...$) - Math.min(...$) < 0.02) {
              const h = u.densities.get(C) ?? 24;
              I.set(C, h * 0.01);
            }
          }
          m = {
            ...u,
            densities: I
          };
        }
        const p = Dt(r, g, i, m, 12), x = Math.round(t.nVanosX), c = Math.round(t.nVanosY), f = Math.round(t.nPisos);
        v.render(p, {
          title: `Edificio ${x}\xD7${c} vanos \xD7 ${f} pisos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}  ${t.slabOn >= 0.5 ? "+ Losa " : ""}${t.bracesMode > 0 ? "+ Diagonales" : ""}  ${t.diafragmaRigido >= 0.5 ? "+ Diafragma r\xEDgido (lumped mass)" : "Diafragma flexible"}`
          ]
        });
        const L = p.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${L.toFixed(4)} Hz, T\u2081=${(1 / L).toFixed(4)} s \xB7 lumped=${t.diafragmaRigido >= 0.5}`);
      } catch (m) {
        console.warn("Modal edificio error:", m.message);
      }
    }
  };
});
export {
  __tla,
  ho as e
};
