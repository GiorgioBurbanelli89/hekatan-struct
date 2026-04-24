import { a as Tt } from "./analyze-ClLKGn9k.js";
import { m as Nt, d as Dt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { l as Xt, m as bt, n as Rt, o as Gt, L as jt, B as Zt, V as Pt, a as Ut, p as qt, e as Jt, c as Kt } from "./Text-Dh9LKuSL.js";
let ho;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function U(t, n, v, f, u = "#00e5ff") {
    const c = document.createElement("canvas"), l = c.getContext("2d");
    l.font = "bold 96px system-ui, -apple-system, sans-serif";
    const L = Math.ceil(l.measureText(t).width);
    c.width = L + 32 * 2, c.height = 96 + 32 * 2, l.font = "bold 96px system-ui, -apple-system, sans-serif", l.fillStyle = "rgba(0,0,0,0.75)";
    const C = c.height / 2;
    l.beginPath(), l.moveTo(C, 0), l.arcTo(c.width, 0, c.width, C, C), l.arcTo(c.width, c.height, c.width - C, c.height, C), l.arcTo(0, c.height, 0, c.height - C, C), l.arcTo(0, 0, C, 0, C), l.closePath(), l.fill(), l.fillStyle = u, l.textBaseline = "middle", l.fillText(t, 32, c.height / 2);
    const E = new Xt(c);
    E.minFilter = bt, E.magFilter = bt, E.anisotropy = 16, E.needsUpdate = true;
    const H = new Rt({
      map: E,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), b = new Gt(H);
    b.position.set(n, v, f);
    const r = 0.45, h = c.width / c.height;
    return b.scale.set(r * h, r, 1), b.userData.isCota = true, b;
  }
  function D(t, n, v = 58879) {
    const f = new jt({
      color: v,
      depthTest: false
    }), u = new Zt().setFromPoints([
      new Pt(...t),
      new Pt(...n)
    ]), a = new Ut(u, f);
    return a.renderOrder = 999, a.userData.isCota = true, a;
  }
  function Wt(t, n, v) {
    const f = [], u = n[n.length - 1] + 1, a = t[t.length - 1] + 1, x = v[0];
    for (let M = 0; M < t.length - 1; M++) {
      const c = t[M], l = t[M + 1], L = l - c;
      f.push(D([
        c,
        u,
        x
      ], [
        l,
        u,
        x
      ])), f.push(D([
        c,
        u - 0.15,
        x
      ], [
        c,
        u + 0.15,
        x
      ])), f.push(D([
        l,
        u - 0.15,
        x
      ], [
        l,
        u + 0.15,
        x
      ])), f.push(U(`${L.toFixed(2)} m`, (c + l) / 2, u + 0.35, x));
    }
    for (let M = 0; M < n.length - 1; M++) {
      const c = n[M], l = n[M + 1], L = l - c;
      f.push(D([
        a,
        c,
        x
      ], [
        a,
        l,
        x
      ])), f.push(D([
        a - 0.15,
        c,
        x
      ], [
        a + 0.15,
        c,
        x
      ])), f.push(D([
        a - 0.15,
        l,
        x
      ], [
        a + 0.15,
        l,
        x
      ])), f.push(U(`${L.toFixed(2)} m`, a + 0.35, (c + l) / 2, x));
    }
    const m = t[0] - 1, $ = n[0];
    for (let M = 0; M < v.length - 1; M++) {
      const c = v[M], l = v[M + 1], L = l - c;
      f.push(D([
        m,
        $,
        c
      ], [
        m,
        $,
        l
      ])), f.push(D([
        m - 0.15,
        $,
        c
      ], [
        m + 0.15,
        $,
        c
      ])), f.push(D([
        m - 0.15,
        $,
        l
      ], [
        m + 0.15,
        $,
        l
      ])), f.push(U(`Piso ${M + 1}: ${L.toFixed(2)} m`, m - 0.5, $, (c + l) / 2));
    }
    return f;
  }
  function St(t, n = 0.5) {
    const v = Qt(n), f = t / v;
    let u = Math.max(2, Math.round(f));
    return t / u > v * 1.25 && (u = Math.ceil(f)), {
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
  function oo(t, n, v = {}) {
    const f = v.tol ?? 1e-5, u = 0, a = [], x = [], m = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, $ = 1e8, M = 1e4, c = 1e4, l = 2 * c, L = $ / (2 * (1 + 0.3));
    for (const C of n) {
      const E = [];
      let H = 0, b = 0;
      for (let F = 0; F < t.length; F++) Math.abs(t[F][2] - C) < f && (E.push(F), H += t[F][0], b += t[F][1]);
      if (E.length < 2) continue;
      const r = H / E.length, h = b / E.length, z = t.length + a.length;
      a.push({
        idx: z,
        z: C,
        x: r,
        y: h
      });
      for (const F of E) {
        x.push([
          z,
          F
        ]);
        const V = u + x.length - 1;
        m.areas.set(V, M), m.momentsOfInertiaY.set(V, c), m.momentsOfInertiaZ.set(V, c), m.torsionalConstants.set(V, l), m.elasticities.set(V, $), m.shearModuli.set(V, L), m.densities.set(V, 0);
      }
    }
    return v.linkStiffness, {
      masterNodes: a,
      rigidLinks: x,
      linkProps: m
    };
  }
  function no(t, n, v) {
    const f = (u, a) => {
      u.forEach((x, m) => a.set(m + v, x));
    };
    n.areas = n.areas ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaY = n.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaZ = n.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), n.torsionalConstants = n.torsionalConstants ?? /* @__PURE__ */ new Map(), n.elasticities = n.elasticities ?? /* @__PURE__ */ new Map(), n.shearModuli = n.shearModuli ?? /* @__PURE__ */ new Map(), n.densities = n.densities ?? /* @__PURE__ */ new Map(), f(t.linkProps.areas, n.areas), f(t.linkProps.momentsOfInertiaY, n.momentsOfInertiaY), f(t.linkProps.momentsOfInertiaZ, n.momentsOfInertiaZ), f(t.linkProps.torsionalConstants, n.torsionalConstants), f(t.linkProps.elasticities, n.elasticities), f(t.linkProps.shearModuli, n.shearModuli), f(t.linkProps.densities, n.densities);
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
    const u = Math.sqrt(12 * n / t) / 2;
    return n / u * v;
  }
  function so(t, n, v, f, u, a, x, m = {}) {
    var _a, _b;
    const $ = m.Fy_steel ?? 345e3;
    m.fc_concrete;
    const M = m.Fy_rebar ?? 42e4, c = m.omega ?? 0.15, l = m.phi ?? 0.9, L = u < 0.5 ? l * c * M * (1 - 0.59 * c) : l * $, C = a < 0.5 ? l * c * M * (1 - 0.59 * c) : l * $, E = v.frameBendingMoments, H = [];
    for (let b = 0; b < n.length; b++) {
      const r = n[b];
      if (r.length !== 2) continue;
      const [h, z] = r, F = x.has(b);
      let V = 0, A = 0;
      const p = E == null ? void 0 : E.get(b);
      p && (V = p.Mi, A = p.Mj);
      const I = ((_a = f.areas) == null ? void 0 : _a.get(b)) ?? 0.16, w = ((_b = f.momentsOfInertiaZ) == null ? void 0 : _b.get(b)) ?? 213e-5, X = eo(I, w, F ? L : C), J = V / X, R = A / X;
      H.push({
        nodeIdx: h,
        elementIdx: b,
        end: "i",
        classification: zt(J)
      }), H.push({
        nodeIdx: z,
        elementIdx: b,
        end: "j",
        classification: zt(R)
      });
    }
    return H;
  }
  function ao(t, n, v, f = {}) {
    const u = f.showElastic ?? false, a = (f.radiusFactor ?? 0.02) * v, x = [], m = new qt(a, 12, 8);
    for (const $ of t) {
      if (!u && $.classification.state === "Elastic") continue;
      const M = n[$.nodeIdx];
      if (!M) continue;
      const c = new Jt({
        color: $.classification.color,
        transparent: true,
        opacity: 0.85
      }), l = new Kt(m, c);
      l.position.set(M[0], M[1], M[2]), l.userData = {
        hingeState: $.classification.state,
        ratio: $.classification.ratio.toFixed(3),
        element: $.elementIdx,
        end: $.end
      }, x.push(l);
    }
    return x;
  }
  function io(t) {
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
  let co, y, N;
  co = 24;
  y = (t, n, v, f, u, a) => ({
    default: v,
    min: f,
    max: u,
    step: a,
    label: n,
    folder: t
  });
  N = (t, n, v, f) => ({
    default: v,
    label: n,
    folder: t,
    options: f
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
      const n = {}, v = Math.round(t.nPisos ?? 3), f = Math.round(t.nVanosX ?? 2), u = Math.round(t.nVanosY ?? 2);
      for (let a = 1; a <= v; a++) n[`hP_${a}`] = y("Alturas por piso", `h Piso ${a} (m)`, 0, 0, 6, 0.1), n[`colB_p${a}`] = y("Secciones por piso", `b col P${a} (m)`, 0, 0, 1, 0.05), n[`colH_p${a}`] = y("Secciones por piso", `h col P${a} (m)`, 0, 0, 1, 0.05), n[`vigaB_p${a}`] = y("Secciones por piso", `b viga P${a} (m)`, 0, 0, 0.8, 0.05), n[`vigaH_p${a}`] = y("Secciones por piso", `h viga P${a} (m)`, 0, 0, 1, 0.05);
      for (let a = 1; a <= f; a++) n[`svX_${a}`] = y("Luces por vano", `svX #${a} (m)`, 0, 0, 12, 0.5);
      for (let a = 1; a <= u; a++) n[`svY_${a}`] = y("Luces por vano", `svY #${a} (m)`, 0, 0, 12, 0.5);
      return n;
    },
    computedLabels(t, n) {
      var _a;
      const f = (_a = n.deformOutputs.rawVal) == null ? void 0 : _a.reactions, u = n.nodes.rawVal;
      if (!f || !(u == null ? void 0 : u.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let a = 0, x = 0, m = 0, $ = -1, M = 0, c = -1;
      f.forEach((h, z) => {
        const F = u[z];
        if (!F || Math.abs(F[2]) > 1e-6) return;
        const V = h[2], A = h[3], p = h[4];
        Math.abs(V) > Math.abs(a) && (a = V, $ = z, F[0], F[1]), V > 0 && V > Math.abs(M) && (M = V, c = z), Math.abs(A) > Math.abs(x) && (x = A), Math.abs(p) > Math.abs(m) && (m = p);
      });
      const l = Math.abs(a) / 9.80665, L = Math.abs(x) / 9.80665, C = Math.abs(m) / 9.80665, E = M / 9.80665, H = Math.round(t.nPisos), b = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${l.toFixed(2)} tonf (nodo ${$})`,
        Mx: `${L.toFixed(2)} tonf\xB7m`,
        My: `${C.toFixed(2)} tonf\xB7m`
      };
      E > 0.01 && (b["\u26A0 Uplift"] = `${E.toFixed(2)} tonf (nodo ${c})`), b.Pisos = `${H}`, b["Copiar a \u2192 zapata-aislada"] = `P=${l.toFixed(1)}, Mx=${L.toFixed(1)}, My=${C.toFixed(1)}`;
      const r = n.__plasticHinges;
      if (r) {
        const h = (r.B ?? 0) + (r.IO ?? 0) + (r.LS ?? 0) + (r.CP ?? 0);
        b["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", b["\u{1F7E2} El\xE1stico"] = `${r.Elastic ?? 0}`, b["\u{1F7E1} B \u2014 Yield"] = `${r.B ?? 0}`, b["\u{1F7E0} IO \u2014 Immed.Occ."] = `${r.IO ?? 0}`, b["\u{1F534} LS \u2014 Life Safety"] = `${r.LS ?? 0}`, b["\u26AB CP \u2014 Collapse Prev."] = `${r.CP ?? 0}`, b["Total r\xF3tulas formadas"] = `${h}`;
      }
      return b;
    },
    build(t, n) {
      const v = Math.round(t.nVanosX), f = Math.round(t.nVanosY), u = Math.round(t.nPisos), a = Math.max(1, Math.round(t.nSubViga)), x = Math.max(1, Math.round(t.nSubCol)), m = t.fcConcr * 0.0981, $ = 4700 * Math.sqrt(m) * 1e3, M = 2e8, c = 0.2, l = 0.3, L = $ / (2 * (1 + c)), C = M / (2 * (1 + l)), E = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, v).map((o) => o > 0 ? o : t.spanX), H = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, f).map((o) => o > 0 ? o : t.spanY), b = [
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
      for (let o = 0; o < v; o++) r.push(r[r.length - 1] + E[o]);
      t.Lvdx > 0 && r.push(r[r.length - 1] + t.Lvdx);
      const h = [];
      t.Lviy > 0 && h.push(-t.Lviy), h.push(0);
      for (let o = 0; o < f; o++) h.push(h[h.length - 1] + H[o]);
      t.Lvdy > 0 && h.push(h[h.length - 1] + t.Lvdy);
      const z = [
        0
      ];
      for (let o = 0; o < u; o++) z.push(z[z.length - 1] + b[o]);
      const F = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === r.length - 1, V = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === h.length - 1, A = (o, e) => F(o) || V(e), p = [], I = {};
      for (let o = 0; o < z.length; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < r.length; s++) o === 0 && A(s, e) || (I[`${s},${e},${o}`] = p.length, p.push([
        r[s],
        h[e],
        z[o]
      ]));
      const w = [], q = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Map(), st = (o, e, s, d, i) => {
        if (s <= 1) {
          d.add(w.length), R.set(w.length, i), w.push([
            o,
            e
          ]);
          return;
        }
        const P = p[o], g = p[e];
        let S = o;
        for (let B = 1; B < s; B++) {
          const _ = B / s, O = p.length;
          p.push([
            P[0] + (g[0] - P[0]) * _,
            P[1] + (g[1] - P[1]) * _,
            P[2] + (g[2] - P[2]) * _
          ]), d.add(w.length), R.set(w.length, i), w.push([
            S,
            O
          ]), S = O;
        }
        d.add(w.length), R.set(w.length, i), w.push([
          S,
          e
        ]);
      };
      for (let o = 0; o < z.length - 1; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < r.length; s++) A(s, e) || st(I[`${s},${e},${o}`], I[`${s},${e},${o + 1}`], x, q, o);
      for (let o = 1; o < z.length; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < r.length - 1; s++) st(I[`${s},${e},${o}`], I[`${s + 1},${e},${o}`], a, X, o - 1);
      for (let o = 1; o < z.length; o++) for (let e = 0; e < r.length; e++) for (let s = 0; s < h.length - 1; s++) st(I[`${e},${s},${o}`], I[`${e},${s + 1},${o}`], a, X, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), e = (d, i, P) => {
          for (let S = 0; S < p.length; S++) if (Math.abs(p[S][0] - d) < 1e-6 && Math.abs(p[S][1] - i) < 1e-6 && Math.abs(p[S][2] - P) < 1e-6) return S;
          const g = p.length;
          return p.push([
            d,
            i,
            P
          ]), g;
        }, s = t.vSecDir < 0.5 ? "x" : "y";
        for (let d = 1; d < z.length; d++) if (s === "x") for (let i = 0; i < h.length - 1; i++) {
          const P = h[i], g = h[i + 1];
          for (let S = 1; S <= o; S++) {
            const B = P + S / (o + 1) * (g - P), _ = [];
            for (let O = 0; O < r.length; O++) _.push(e(r[O], B, z[d]));
            for (let O = 0; O < r.length - 1; O++) X.add(w.length), w.push([
              _[O],
              _[O + 1]
            ]);
          }
        }
        else for (let i = 0; i < r.length - 1; i++) {
          const P = r[i], g = r[i + 1];
          for (let S = 1; S <= o; S++) {
            const B = P + S / (o + 1) * (g - P), _ = [];
            for (let O = 0; O < h.length; O++) _.push(e(B, h[O], z[d]));
            for (let O = 0; O < h.length - 1; O++) X.add(w.length), w.push([
              _[O],
              _[O + 1]
            ]);
          }
        }
      }
      const Y = Math.round(t.bracesMode);
      if (Y > 0) {
        const o = Y === 1 || Y === 2 || Y === 3, e = Y === 1 || Y === 2 || Y === 4, s = z.length - 1;
        for (let d = 0; d < s; d++) {
          if (o) for (let i = 0; i < h.length; i++) {
            if (Y === 1 && i !== 0 && i !== h.length - 1) continue;
            const P = Math.floor((r.length - 1) / 2);
            for (let g = 0; g < r.length - 1; g++) {
              if (Y === 1 && g !== P || A(g, i) || A(g + 1, i)) continue;
              const S = I[`${g},${i},${d}`], B = I[`${g + 1},${i},${d + 1}`], _ = I[`${g + 1},${i},${d}`], O = I[`${g},${i},${d + 1}`];
              S !== void 0 && B !== void 0 && w.push([
                S,
                B
              ]), _ !== void 0 && O !== void 0 && w.push([
                _,
                O
              ]);
            }
          }
          if (e) for (let i = 0; i < r.length; i++) {
            if (Y === 1 && i !== 0 && i !== r.length - 1) continue;
            const P = Math.floor((h.length - 1) / 2);
            for (let g = 0; g < h.length - 1; g++) {
              if (Y === 1 && g !== P || A(i, g) || A(i, g + 1)) continue;
              const S = I[`${i},${g},${d}`], B = I[`${i},${g + 1},${d + 1}`], _ = I[`${i},${g + 1},${d}`], O = I[`${i},${g},${d + 1}`];
              S !== void 0 && B !== void 0 && w.push([
                S,
                B
              ]), _ !== void 0 && O !== void 0 && w.push([
                _,
                O
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), e = (d, i, P) => `${Math.round(d * 1e4)},${Math.round(i * 1e4)},${Math.round(P * 1e4)}`;
        for (let d = 0; d < p.length; d++) o.set(e(p[d][0], p[d][1], p[d][2]), d);
        const s = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let d = 1; d < z.length; d++) {
          const i = z[d];
          for (let P = 0; P < r.length - 1; P++) for (let g = 0; g < h.length - 1; g++) {
            const S = r[P], B = r[P + 1], _ = h[g], O = h[g + 1], { n: it } = St(Math.abs(B - S), s), { n: ct } = St(Math.abs(O - _), s), Z = [];
            for (let k = 0; k <= ct; k++) {
              const T = [];
              for (let lt = 0; lt <= it; lt++) {
                const xt = S + lt / it * (B - S), $t = _ + k / ct * (O - _), _t = e(xt, $t, i), pt = o.get(_t);
                if (pt !== void 0) T.push(pt);
                else {
                  const yt = p.length;
                  p.push([
                    xt,
                    $t,
                    i
                  ]), o.set(_t, yt), T.push(yt);
                }
              }
              Z.push(T);
            }
            for (let k = 0; k < ct; k++) for (let T = 0; T < it; T++) J.add(w.length), w.push([
              Z[k][T],
              Z[k][T + 1],
              Z[k + 1][T + 1],
              Z[k + 1][T]
            ]);
          }
        }
      }
      const rt = Math.round(t.apoyo), Ot = rt === 0 ? [
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
      for (let o = 0; o < h.length; o++) for (let e = 0; e < r.length; e++) A(e, o) || ft.set(I[`${e},${o},0`], [
        ...Ot
      ]);
      const K = /* @__PURE__ */ new Map(), ht = t.CM + t.CV;
      if (ht !== 0) for (let o = 1; o < z.length; o++) for (let e = 0; e < h.length; e++) for (let s = 0; s < r.length; s++) {
        const d = `${s},${e},${o}`;
        I[d] !== void 0 && K.set(I[d], [
          0,
          0,
          ht,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = I[`${r.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${u}`];
        if (o !== void 0) {
          const e = K.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          K.set(o, [
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
      ].map((o) => o > 0 ? o : t.vigaH), wt = (o) => {
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
      }, It = t.matCol < 0.5 ? $ : M, Lt = t.matCol < 0.5 ? L : C, Et = t.matCol < 0.5 ? c : l, Vt = t.matViga < 0.5 ? $ : M, Bt = t.matViga < 0.5 ? L : C, Ft = t.matViga < 0.5 ? c : l, G = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map();
      for (let o = 0; o < w.length; o++) {
        at.set(o, co);
        const e = R.get(o) ?? 0;
        if (J.has(o)) G.set(o, $), j.set(o, L), nt.set(o, c), Mt.set(o, t.slabT);
        else if (q.has(o)) {
          const s = wt(Math.min(e, 7));
          G.set(o, It), j.set(o, Lt), nt.set(o, Et), W.set(o, s.A), Q.set(o, s.Iz), tt.set(o, s.Iy), ot.set(o, s.J);
        } else {
          const s = Ct(Math.min(e, 7));
          G.set(o, Vt), j.set(o, Bt), nt.set(o, Ft), W.set(o, s.A), Q.set(o, s.Iz), tt.set(o, s.Iy), ot.set(o, s.J);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let i = 1; i < z.length; i++) o.push(z[i]);
        const e = oo(p, o), s = w.length;
        for (const i of e.masterNodes) p.push([
          i.x,
          i.y,
          i.z
        ]);
        for (const i of e.rigidLinks) w.push(i);
        no(e, {
          elasticities: G,
          shearModuli: j,
          areas: W,
          momentsOfInertiaZ: Q,
          momentsOfInertiaY: tt,
          torsionalConstants: ot,
          densities: at
        }, s);
      }
      n.nodes.val = p, n.elements.val = w, n.nodeInputs.val = {
        supports: ft,
        loads: K
      }, n.elementInputs.val = {
        elasticities: G,
        shearModuli: j,
        areas: W,
        momentsOfInertiaZ: Q,
        momentsOfInertiaY: tt,
        torsionalConstants: ot,
        densities: at,
        poissonsRatios: nt,
        thicknesses: Mt
      };
      const vt = Dt(p, w, n.nodeInputs.val, n.elementInputs.val);
      n.deformOutputs.val = vt, n.analyzeOutputs.val = Tt(p, w, n.elementInputs.val, vt);
      const et = Wt(r, h, z), At = dt[0], Ht = ut[0], Yt = gt[0], kt = mt[0];
      et.push(U(`Col ${(At * 100).toFixed(0)}\xD7${(Ht * 100).toFixed(0)} cm`, r[0] + 0.3, h[0] + 0.3, z[1] * 0.5, "#ffaa00")), et.push(U(`Viga ${(Yt * 100).toFixed(0)}\xD7${(kt * 100).toFixed(0)} cm`, (r[0] + r[1]) / 2, h[0], z[1] + 0.2, "#ffaa00"));
      try {
        const o = so(p, w, n.analyzeOutputs.rawVal, n.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), q);
        let e = 1 / 0, s = 1 / 0, d = 1 / 0, i = -1 / 0, P = -1 / 0, g = -1 / 0;
        for (const _ of p) _[0] < e && (e = _[0]), _[0] > i && (i = _[0]), _[1] < s && (s = _[1]), _[1] > P && (P = _[1]), _[2] < d && (d = _[2]), _[2] > g && (g = _[2]);
        const S = Math.sqrt((i - e) ** 2 + (P - s) ** 2 + (g - d) ** 2) || 1, B = ao(o, p, S, {
          showElastic: false,
          radiusFactor: 0.015
        });
        et.push(...B), n.__plasticHinges = io(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      n.objects3D.val = et;
    },
    runModal(t, n, v) {
      var _a, _b;
      const f = n.nodes.val, u = n.elements.val, a = n.nodeInputs.val, x = n.elementInputs.val;
      if (!(!f.length || !u.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = x.densities) == null ? void 0 : _b.size))) try {
        const m = Math.round(t.nPisos), $ = Math.min(60, Math.max(15, 3 * m + 12)), M = Nt(f, u, a, x, $), c = Math.round(t.nVanosX), l = Math.round(t.nVanosY), L = Math.round(t.nPisos);
        v.render(M, {
          title: `Edificio ${c}\xD7${l} vanos \xD7 ${L} pisos \xB7 ${$} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}  ${t.slabOn >= 0.5 ? "+ Losa " : ""}${t.bracesMode > 0 ? "+ Diagonales" : ""}  ${t.diafragmaRigido >= 0.5 ? "+ Diafragma r\xEDgido" : "Diafragma flexible"}`,
            "Modos verticales (Uz) son f\xEDsicamente reales pero NO relevantes para dise\xF1o s\xEDsmico horizontal \u2014 el panel identifica autom\xE1ticamente los Ux/Uy/Rz dominantes"
          ]
        });
        const C = M.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${$} modos \xB7 f\u2081=${C.toFixed(4)} Hz`);
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
