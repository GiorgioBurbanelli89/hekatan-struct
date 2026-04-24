import { a as Tt } from "./analyze-ClLKGn9k.js";
import { m as Nt, d as Xt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { C as Dt, g as bt, h as Gt, i as Rt, L as jt, B as Zt, V as Pt, a as qt, j as Jt, k as Kt, M as Ut } from "./Text-z8x6SwE-.js";
let fo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function q(t, n, M, h, u = "#00e5ff") {
    const c = document.createElement("canvas"), l = c.getContext("2d");
    l.font = "bold 96px system-ui, -apple-system, sans-serif";
    const L = Math.ceil(l.measureText(t).width);
    c.width = L + 32 * 2, c.height = 96 + 32 * 2, l.font = "bold 96px system-ui, -apple-system, sans-serif", l.fillStyle = "rgba(0,0,0,0.75)";
    const I = c.height / 2;
    l.beginPath(), l.moveTo(I, 0), l.arcTo(c.width, 0, c.width, I, I), l.arcTo(c.width, c.height, c.width - I, c.height, I), l.arcTo(0, c.height, 0, c.height - I, I), l.arcTo(0, 0, I, 0, I), l.closePath(), l.fill(), l.fillStyle = u, l.textBaseline = "middle", l.fillText(t, 32, c.height / 2);
    const E = new Dt(c);
    E.minFilter = bt, E.magFilter = bt, E.anisotropy = 16, E.needsUpdate = true;
    const H = new Gt({
      map: E,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), b = new Rt(H);
    b.position.set(n, M, h);
    const r = 0.45, f = c.width / c.height;
    return b.scale.set(r * f, r, 1), b.userData.isCota = true, b;
  }
  function X(t, n, M = 58879) {
    const h = new jt({
      color: M,
      depthTest: false
    }), u = new Zt().setFromPoints([
      new Pt(...t),
      new Pt(...n)
    ]), i = new qt(u, h);
    return i.renderOrder = 999, i.userData.isCota = true, i;
  }
  function Wt(t, n, M) {
    const h = [], u = n[n.length - 1] + 1, i = t[t.length - 1] + 1, x = M[0];
    for (let v = 0; v < t.length - 1; v++) {
      const c = t[v], l = t[v + 1], L = l - c;
      h.push(X([
        c,
        u,
        x
      ], [
        l,
        u,
        x
      ])), h.push(X([
        c,
        u - 0.15,
        x
      ], [
        c,
        u + 0.15,
        x
      ])), h.push(X([
        l,
        u - 0.15,
        x
      ], [
        l,
        u + 0.15,
        x
      ])), h.push(q(`${L.toFixed(2)} m`, (c + l) / 2, u + 0.35, x));
    }
    for (let v = 0; v < n.length - 1; v++) {
      const c = n[v], l = n[v + 1], L = l - c;
      h.push(X([
        i,
        c,
        x
      ], [
        i,
        l,
        x
      ])), h.push(X([
        i - 0.15,
        c,
        x
      ], [
        i + 0.15,
        c,
        x
      ])), h.push(X([
        i - 0.15,
        l,
        x
      ], [
        i + 0.15,
        l,
        x
      ])), h.push(q(`${L.toFixed(2)} m`, i + 0.35, (c + l) / 2, x));
    }
    const g = t[0] - 1, p = n[0];
    for (let v = 0; v < M.length - 1; v++) {
      const c = M[v], l = M[v + 1], L = l - c;
      h.push(X([
        g,
        p,
        c
      ], [
        g,
        p,
        l
      ])), h.push(X([
        g - 0.15,
        p,
        c
      ], [
        g + 0.15,
        p,
        c
      ])), h.push(X([
        g - 0.15,
        p,
        l
      ], [
        g + 0.15,
        p,
        l
      ])), h.push(q(`Piso ${v + 1}: ${L.toFixed(2)} m`, g - 0.5, p, (c + l) / 2));
    }
    return h;
  }
  function St(t, n = 0.5) {
    const M = Qt(n), h = t / M;
    let u = Math.max(2, Math.round(h));
    return t / u > M * 1.25 && (u = Math.ceil(h)), {
      n: u,
      dx: t / u
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
  function oo(t, n, M = {}) {
    const h = M.tol ?? 1e-5, u = 0, i = [], x = [], g = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, p = 1e8, v = 1e4, c = 1e4, l = 2 * c, L = p / (2 * (1 + 0.3));
    for (const I of n) {
      const E = [];
      let H = 0, b = 0;
      for (let F = 0; F < t.length; F++) Math.abs(t[F][2] - I) < h && (E.push(F), H += t[F][0], b += t[F][1]);
      if (E.length < 2) continue;
      const r = H / E.length, f = b / E.length, O = t.length + i.length;
      i.push({
        idx: O,
        z: I,
        x: r,
        y: f
      });
      for (const F of E) {
        x.push([
          O,
          F
        ]);
        const V = u + x.length - 1;
        g.areas.set(V, v), g.momentsOfInertiaY.set(V, c), g.momentsOfInertiaZ.set(V, c), g.torsionalConstants.set(V, l), g.elasticities.set(V, p), g.shearModuli.set(V, L), g.densities.set(V, 0);
      }
    }
    return M.linkStiffness, {
      masterNodes: i,
      rigidLinks: x,
      linkProps: g
    };
  }
  function no(t, n, M) {
    const h = (u, i) => {
      u.forEach((x, g) => i.set(g + M, x));
    };
    n.areas = n.areas ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaY = n.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaZ = n.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), n.torsionalConstants = n.torsionalConstants ?? /* @__PURE__ */ new Map(), n.elasticities = n.elasticities ?? /* @__PURE__ */ new Map(), n.shearModuli = n.shearModuli ?? /* @__PURE__ */ new Map(), n.densities = n.densities ?? /* @__PURE__ */ new Map(), h(t.linkProps.areas, n.areas), h(t.linkProps.momentsOfInertiaY, n.momentsOfInertiaY), h(t.linkProps.momentsOfInertiaZ, n.momentsOfInertiaZ), h(t.linkProps.torsionalConstants, n.torsionalConstants), h(t.linkProps.elasticities, n.elasticities), h(t.linkProps.shearModuli, n.shearModuli), h(t.linkProps.densities, n.densities);
  }
  function Ot(t) {
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
  function eo(t, n, M) {
    if (t <= 0 || n <= 0) return 1e-12;
    const u = Math.sqrt(12 * n / t) / 2;
    return n / u * M;
  }
  function so(t, n, M, h, u, i, x, g = {}) {
    var _a, _b;
    const p = g.Fy_steel ?? 345e3;
    g.fc_concrete;
    const v = g.Fy_rebar ?? 42e4, c = g.omega ?? 0.15, l = g.phi ?? 0.9, L = u < 0.5 ? l * c * v * (1 - 0.59 * c) : l * p, I = i < 0.5 ? l * c * v * (1 - 0.59 * c) : l * p, E = M.frameBendingMoments, H = [];
    for (let b = 0; b < n.length; b++) {
      const r = n[b];
      if (r.length !== 2) continue;
      const [f, O] = r, F = x.has(b);
      let V = 0, A = 0;
      const _ = E == null ? void 0 : E.get(b);
      _ && (V = _.Mi, A = _.Mj);
      const C = ((_a = h.areas) == null ? void 0 : _a.get(b)) ?? 0.16, z = ((_b = h.momentsOfInertiaZ) == null ? void 0 : _b.get(b)) ?? 213e-5, D = eo(C, z, F ? L : I), K = V / D, G = A / D;
      H.push({
        nodeIdx: f,
        elementIdx: b,
        end: "i",
        classification: Ot(K)
      }), H.push({
        nodeIdx: O,
        elementIdx: b,
        end: "j",
        classification: Ot(G)
      });
    }
    return H;
  }
  function io(t, n, M, h = {}) {
    const u = h.showElastic ?? false, i = (h.radiusFactor ?? 0.02) * M, x = [], g = new Jt(i, 12, 8);
    for (const p of t) {
      if (!u && p.classification.state === "Elastic") continue;
      const v = n[p.nodeIdx];
      if (!v) continue;
      const c = new Kt({
        color: p.classification.color,
        transparent: true,
        opacity: 0.85
      }), l = new Ut(g, c);
      l.position.set(v[0], v[1], v[2]), l.userData = {
        hingeState: p.classification.state,
        ratio: p.classification.ratio.toFixed(3),
        element: p.elementIdx,
        end: p.end
      }, x.push(l);
    }
    return x;
  }
  function ao(t) {
    const n = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const M of t) n[M.classification.state]++;
    return n;
  }
  let co, y, N;
  co = 24;
  y = (t, n, M, h, u, i) => ({
    default: M,
    min: h,
    max: u,
    step: i,
    label: n,
    folder: t
  });
  N = (t, n, M, h) => ({
    default: M,
    label: n,
    folder: t,
    options: h
  });
  fo = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      nVanosX: {
        ...y("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...y("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...y("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: y("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: y("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: y("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: y("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: y("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: y("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: y("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: y("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: y("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: N("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: N("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: N("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: y("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: y("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: y("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: y("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: y("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: N("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: y("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: y("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: y("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: y("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: y("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: y("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: N("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: y("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: N("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: N("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: N("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: y("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabDisc: N("Avanzado", "Discretizaci\xF3n losa", 0.5, to),
      diafragmaRigido: N("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      })
    },
    dynamicParams(t) {
      const n = {}, M = Math.round(t.nPisos ?? 3), h = Math.round(t.nVanosX ?? 2), u = Math.round(t.nVanosY ?? 2);
      for (let i = 1; i <= M; i++) n[`hP_${i}`] = y("Alturas por piso", `h Piso ${i} (m)`, 0, 0, 6, 0.1), n[`colB_p${i}`] = y("Secciones por piso", `b col P${i} (m)`, 0, 0, 1, 0.05), n[`colH_p${i}`] = y("Secciones por piso", `h col P${i} (m)`, 0, 0, 1, 0.05), n[`vigaB_p${i}`] = y("Secciones por piso", `b viga P${i} (m)`, 0, 0, 0.8, 0.05), n[`vigaH_p${i}`] = y("Secciones por piso", `h viga P${i} (m)`, 0, 0, 1, 0.05);
      for (let i = 1; i <= h; i++) n[`svX_${i}`] = y("Luces por vano", `svX #${i} (m)`, 0, 0, 12, 0.5);
      for (let i = 1; i <= u; i++) n[`svY_${i}`] = y("Luces por vano", `svY #${i} (m)`, 0, 0, 12, 0.5);
      return n;
    },
    computedLabels(t, n) {
      var _a;
      const h = (_a = n.deformOutputs.rawVal) == null ? void 0 : _a.reactions, u = n.nodes.rawVal;
      if (!h || !(u == null ? void 0 : u.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let i = 0, x = 0, g = 0, p = -1, v = 0, c = -1;
      h.forEach((f, O) => {
        const F = u[O];
        if (!F || Math.abs(F[2]) > 1e-6) return;
        const V = f[2], A = f[3], _ = f[4];
        Math.abs(V) > Math.abs(i) && (i = V, p = O, F[0], F[1]), V > 0 && V > Math.abs(v) && (v = V, c = O), Math.abs(A) > Math.abs(x) && (x = A), Math.abs(_) > Math.abs(g) && (g = _);
      });
      const l = Math.abs(i) / 9.80665, L = Math.abs(x) / 9.80665, I = Math.abs(g) / 9.80665, E = v / 9.80665, H = Math.round(t.nPisos), b = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${l.toFixed(2)} tonf (nodo ${p})`,
        Mx: `${L.toFixed(2)} tonf\xB7m`,
        My: `${I.toFixed(2)} tonf\xB7m`
      };
      E > 0.01 && (b["\u26A0 Uplift"] = `${E.toFixed(2)} tonf (nodo ${c})`), b.Pisos = `${H}`, b["Copiar a \u2192 zapata-aislada"] = `P=${l.toFixed(1)}, Mx=${L.toFixed(1)}, My=${I.toFixed(1)}`;
      const r = n.__plasticHinges;
      if (r) {
        const f = (r.B ?? 0) + (r.IO ?? 0) + (r.LS ?? 0) + (r.CP ?? 0);
        b["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", b["\u{1F7E2} El\xE1stico"] = `${r.Elastic ?? 0}`, b["\u{1F7E1} B \u2014 Yield"] = `${r.B ?? 0}`, b["\u{1F7E0} IO \u2014 Immed.Occ."] = `${r.IO ?? 0}`, b["\u{1F534} LS \u2014 Life Safety"] = `${r.LS ?? 0}`, b["\u26AB CP \u2014 Collapse Prev."] = `${r.CP ?? 0}`, b["Total r\xF3tulas formadas"] = `${f}`;
      }
      return b;
    },
    build(t, n) {
      const M = Math.round(t.nVanosX), h = Math.round(t.nVanosY), u = Math.round(t.nPisos), i = Math.max(1, Math.round(t.nSubViga)), x = Math.max(1, Math.round(t.nSubCol)), g = t.fcConcr * 0.0981, p = 4700 * Math.sqrt(g) * 1e3, v = 2e8, c = 0.2, l = 0.3, L = p / (2 * (1 + c)), I = v / (2 * (1 + l)), E = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, M).map((o) => o > 0 ? o : t.spanX), H = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, h).map((o) => o > 0 ? o : t.spanY), b = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, u).map((o) => o > 0 ? o : t.hPiso), r = [];
      t.Lvix > 0 && r.push(-t.Lvix), r.push(0);
      for (let o = 0; o < M; o++) r.push(r[r.length - 1] + E[o]);
      t.Lvdx > 0 && r.push(r[r.length - 1] + t.Lvdx);
      const f = [];
      t.Lviy > 0 && f.push(-t.Lviy), f.push(0);
      for (let o = 0; o < h; o++) f.push(f[f.length - 1] + H[o]);
      t.Lvdy > 0 && f.push(f[f.length - 1] + t.Lvdy);
      const O = [
        0
      ];
      for (let o = 0; o < u; o++) O.push(O[O.length - 1] + b[o]);
      const F = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === r.length - 1, V = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === f.length - 1, A = (o, e) => F(o) || V(e), _ = [], C = {};
      for (let o = 0; o < O.length; o++) for (let e = 0; e < f.length; e++) for (let s = 0; s < r.length; s++) o === 0 && A(s, e) || (C[`${s},${e},${o}`] = _.length, _.push([
        r[s],
        f[e],
        O[o]
      ]));
      const z = [], J = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Map(), st = (o, e, s, d, a) => {
        if (s <= 1) {
          d.add(z.length), G.set(z.length, a), z.push([
            o,
            e
          ]);
          return;
        }
        const P = _[o], m = _[e];
        let S = o;
        for (let B = 1; B < s; B++) {
          const $ = B / s, w = _.length;
          _.push([
            P[0] + (m[0] - P[0]) * $,
            P[1] + (m[1] - P[1]) * $,
            P[2] + (m[2] - P[2]) * $
          ]), d.add(z.length), G.set(z.length, a), z.push([
            S,
            w
          ]), S = w;
        }
        d.add(z.length), G.set(z.length, a), z.push([
          S,
          e
        ]);
      };
      for (let o = 0; o < O.length - 1; o++) for (let e = 0; e < f.length; e++) for (let s = 0; s < r.length; s++) A(s, e) || st(C[`${s},${e},${o}`], C[`${s},${e},${o + 1}`], x, J, o);
      for (let o = 1; o < O.length; o++) for (let e = 0; e < f.length; e++) for (let s = 0; s < r.length - 1; s++) st(C[`${s},${e},${o}`], C[`${s + 1},${e},${o}`], i, D, o - 1);
      for (let o = 1; o < O.length; o++) for (let e = 0; e < r.length; e++) for (let s = 0; s < f.length - 1; s++) st(C[`${e},${s},${o}`], C[`${e},${s + 1},${o}`], i, D, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), e = (d, a, P) => {
          for (let S = 0; S < _.length; S++) if (Math.abs(_[S][0] - d) < 1e-6 && Math.abs(_[S][1] - a) < 1e-6 && Math.abs(_[S][2] - P) < 1e-6) return S;
          const m = _.length;
          return _.push([
            d,
            a,
            P
          ]), m;
        }, s = t.vSecDir < 0.5 ? "x" : "y";
        for (let d = 1; d < O.length; d++) if (s === "x") for (let a = 0; a < f.length - 1; a++) {
          const P = f[a], m = f[a + 1];
          for (let S = 1; S <= o; S++) {
            const B = P + S / (o + 1) * (m - P), $ = [];
            for (let w = 0; w < r.length; w++) $.push(e(r[w], B, O[d]));
            for (let w = 0; w < r.length - 1; w++) D.add(z.length), z.push([
              $[w],
              $[w + 1]
            ]);
          }
        }
        else for (let a = 0; a < r.length - 1; a++) {
          const P = r[a], m = r[a + 1];
          for (let S = 1; S <= o; S++) {
            const B = P + S / (o + 1) * (m - P), $ = [];
            for (let w = 0; w < f.length; w++) $.push(e(B, f[w], O[d]));
            for (let w = 0; w < f.length - 1; w++) D.add(z.length), z.push([
              $[w],
              $[w + 1]
            ]);
          }
        }
      }
      const Y = Math.round(t.bracesMode);
      if (Y > 0) {
        const o = Y === 1 || Y === 2 || Y === 3, e = Y === 1 || Y === 2 || Y === 4, s = O.length - 1;
        for (let d = 0; d < s; d++) {
          if (o) for (let a = 0; a < f.length; a++) {
            if (Y === 1 && a !== 0 && a !== f.length - 1) continue;
            const P = Math.floor((r.length - 1) / 2);
            for (let m = 0; m < r.length - 1; m++) {
              if (Y === 1 && m !== P || A(m, a) || A(m + 1, a)) continue;
              const S = C[`${m},${a},${d}`], B = C[`${m + 1},${a},${d + 1}`], $ = C[`${m + 1},${a},${d}`], w = C[`${m},${a},${d + 1}`];
              S !== void 0 && B !== void 0 && z.push([
                S,
                B
              ]), $ !== void 0 && w !== void 0 && z.push([
                $,
                w
              ]);
            }
          }
          if (e) for (let a = 0; a < r.length; a++) {
            if (Y === 1 && a !== 0 && a !== r.length - 1) continue;
            const P = Math.floor((f.length - 1) / 2);
            for (let m = 0; m < f.length - 1; m++) {
              if (Y === 1 && m !== P || A(a, m) || A(a, m + 1)) continue;
              const S = C[`${a},${m},${d}`], B = C[`${a},${m + 1},${d + 1}`], $ = C[`${a},${m + 1},${d}`], w = C[`${a},${m},${d + 1}`];
              S !== void 0 && B !== void 0 && z.push([
                S,
                B
              ]), $ !== void 0 && w !== void 0 && z.push([
                $,
                w
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), e = (d, a, P) => `${Math.round(d * 1e4)},${Math.round(a * 1e4)},${Math.round(P * 1e4)}`;
        for (let d = 0; d < _.length; d++) o.set(e(_[d][0], _[d][1], _[d][2]), d);
        const s = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let d = 1; d < O.length; d++) {
          const a = O[d];
          for (let P = 0; P < r.length - 1; P++) for (let m = 0; m < f.length - 1; m++) {
            const S = r[P], B = r[P + 1], $ = f[m], w = f[m + 1], { n: at } = St(Math.abs(B - S), s), { n: ct } = St(Math.abs(w - $), s), Z = [];
            for (let k = 0; k <= ct; k++) {
              const T = [];
              for (let lt = 0; lt <= at; lt++) {
                const xt = S + lt / at * (B - S), $t = $ + k / ct * (w - $), _t = e(xt, $t, a), pt = o.get(_t);
                if (pt !== void 0) T.push(pt);
                else {
                  const yt = _.length;
                  _.push([
                    xt,
                    $t,
                    a
                  ]), o.set(_t, yt), T.push(yt);
                }
              }
              Z.push(T);
            }
            for (let k = 0; k < ct; k++) for (let T = 0; T < at; T++) K.add(z.length), z.push([
              Z[k][T],
              Z[k][T + 1],
              Z[k + 1][T + 1],
              Z[k + 1][T]
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
      ], ht = /* @__PURE__ */ new Map();
      for (let o = 0; o < f.length; o++) for (let e = 0; e < r.length; e++) A(e, o) || ht.set(C[`${e},${o},0`], [
        ...wt
      ]);
      const U = /* @__PURE__ */ new Map(), ft = t.CM + t.CV;
      if (ft !== 0) for (let o = 1; o < O.length; o++) for (let e = 0; e < f.length; e++) for (let s = 0; s < r.length; s++) {
        const d = `${s},${e},${o}`;
        C[d] !== void 0 && U.set(C[d], [
          0,
          0,
          ft,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = C[`${r.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${u}`];
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
      ].map((o) => o > 0 ? o : t.colSize), ut = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), gt = [
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
      ].map((o) => o > 0 ? o : t.vigaH), zt = (o) => {
        const e = dt[o] ?? t.colSize, s = ut[o] ?? t.colSize;
        return {
          A: e * s,
          Iz: e * s ** 3 / 12,
          Iy: s * e ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(e, s), 4)
        };
      }, Ct = (o) => {
        const e = gt[o] ?? t.vigaB, s = mt[o] ?? t.vigaH;
        return {
          A: e * s,
          Iz: e * s ** 3 / 12,
          Iy: s * e ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(e, s), 3) * Math.max(e, s)
        };
      }, It = t.matCol < 0.5 ? p : v, Lt = t.matCol < 0.5 ? L : I, Et = t.matCol < 0.5 ? c : l, Vt = t.matViga < 0.5 ? p : v, Bt = t.matViga < 0.5 ? L : I, Ft = t.matViga < 0.5 ? c : l, R = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
      for (let o = 0; o < z.length; o++) {
        it.set(o, co);
        const e = G.get(o) ?? 0;
        if (K.has(o)) R.set(o, p), j.set(o, L), nt.set(o, c), Mt.set(o, t.slabT);
        else if (J.has(o)) {
          const s = zt(Math.min(e, 7));
          R.set(o, It), j.set(o, Lt), nt.set(o, Et), W.set(o, s.A), Q.set(o, s.Iz), tt.set(o, s.Iy), ot.set(o, s.J);
        } else {
          const s = Ct(Math.min(e, 7));
          R.set(o, Vt), j.set(o, Bt), nt.set(o, Ft), W.set(o, s.A), Q.set(o, s.Iz), tt.set(o, s.Iy), ot.set(o, s.J);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let a = 1; a < O.length; a++) o.push(O[a]);
        const e = oo(_, o), s = z.length;
        for (const a of e.masterNodes) _.push([
          a.x,
          a.y,
          a.z
        ]);
        for (const a of e.rigidLinks) z.push(a);
        no(e, {
          elasticities: R,
          shearModuli: j,
          areas: W,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: tt,
          torsionalConstants: ot,
          densities: it
        }, s);
      }
      n.nodes.val = _, n.elements.val = z, n.nodeInputs.val = {
        supports: ht,
        loads: U
      }, n.elementInputs.val = {
        elasticities: R,
        shearModuli: j,
        areas: W,
        momentsOfInertiaZ: Q,
        momentsOfInertiaY: tt,
        torsionalConstants: ot,
        densities: it,
        poissonsRatios: nt,
        thicknesses: Mt
      };
      const vt = Xt(_, z, n.nodeInputs.val, n.elementInputs.val);
      n.deformOutputs.val = vt, n.analyzeOutputs.val = Tt(_, z, n.elementInputs.val, vt);
      const et = Wt(r, f, O), At = dt[0], Ht = ut[0], Yt = gt[0], kt = mt[0];
      et.push(q(`Col ${(At * 100).toFixed(0)}\xD7${(Ht * 100).toFixed(0)} cm`, r[0] + 0.3, f[0] + 0.3, O[1] * 0.5, "#ffaa00")), et.push(q(`Viga ${(Yt * 100).toFixed(0)}\xD7${(kt * 100).toFixed(0)} cm`, (r[0] + r[1]) / 2, f[0], O[1] + 0.2, "#ffaa00"));
      try {
        const o = so(_, z, n.analyzeOutputs.rawVal, n.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), J);
        let e = 1 / 0, s = 1 / 0, d = 1 / 0, a = -1 / 0, P = -1 / 0, m = -1 / 0;
        for (const $ of _) $[0] < e && (e = $[0]), $[0] > a && (a = $[0]), $[1] < s && (s = $[1]), $[1] > P && (P = $[1]), $[2] < d && (d = $[2]), $[2] > m && (m = $[2]);
        const S = Math.sqrt((a - e) ** 2 + (P - s) ** 2 + (m - d) ** 2) || 1, B = io(o, _, S, {
          showElastic: false,
          radiusFactor: 0.015
        });
        et.push(...B), n.__plasticHinges = ao(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      n.objects3D.val = et;
    },
    runModal(t, n, M) {
      var _a, _b;
      const h = n.nodes.val, u = n.elements.val, i = n.nodeInputs.val, x = n.elementInputs.val;
      if (!(!h.length || !u.length || !((_a = i.supports) == null ? void 0 : _a.size) || !((_b = x.densities) == null ? void 0 : _b.size))) try {
        const g = Nt(h, u, i, x, 12), p = Math.round(t.nVanosX), v = Math.round(t.nVanosY), c = Math.round(t.nPisos);
        M.render(g, {
          title: `Edificio ${p}\xD7${v} vanos \xD7 ${c} pisos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}  ${t.slabOn >= 0.5 ? "+ Losa " : ""}${t.bracesMode > 0 ? "+ Diagonales" : ""}`
          ]
        });
        const l = g.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${l.toFixed(4)} Hz, T\u2081=${(1 / l).toFixed(4)} s`);
      } catch (g) {
        console.warn("Modal edificio error:", g.message);
      }
    }
  };
});
export {
  __tla,
  fo as e
};
