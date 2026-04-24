import { a as Tt } from "./analyze-ClLKGn9k.js";
import { m as Nt, d as Dt, __tla as __tla_0 } from "./didacticCpp-RemoaQyH.js";
import { l as Rt, m as St, n as Xt, o as Gt, L as Zt, B as jt, V as Ot, a as qt, p as Jt, e as Kt, c as Ut } from "./Text-Dh9LKuSL.js";
let fo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function et(t, n, x, e, m = "#00e5ff") {
    const h = document.createElement("canvas"), f = h.getContext("2d");
    f.font = "bold 96px system-ui, -apple-system, sans-serif";
    const V = Math.ceil(f.measureText(t).width);
    h.width = V + 32 * 2, h.height = 96 + 32 * 2, f.font = "bold 96px system-ui, -apple-system, sans-serif", f.fillStyle = "rgba(0,0,0,0.75)";
    const L = h.height / 2;
    f.beginPath(), f.moveTo(L, 0), f.arcTo(h.width, 0, h.width, L, L), f.arcTo(h.width, h.height, h.width - L, h.height, L), f.arcTo(0, h.height, 0, h.height - L, L), f.arcTo(0, 0, L, 0, L), f.closePath(), f.fill(), f.fillStyle = m, f.textBaseline = "middle", f.fillText(t, 32, h.height / 2);
    const B = new Rt(h);
    B.minFilter = St, B.magFilter = St, B.anisotropy = 16, B.needsUpdate = true;
    const Y = new Xt({
      map: B,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), $ = new Gt(Y);
    $.position.set(n, x, e);
    const i = 0.45, d = h.width / h.height;
    return $.scale.set(i * d, i, 1), $.userData.isCota = true, $;
  }
  function X(t, n, x = 58879) {
    const e = new Zt({
      color: x,
      depthTest: false
    }), m = new jt().setFromPoints([
      new Ot(...t),
      new Ot(...n)
    ]), c = new qt(m, e);
    return c.renderOrder = 999, c.userData.isCota = true, c;
  }
  function Wt(t, n, x) {
    const e = [], m = n[n.length - 1] + 1, c = t[t.length - 1] + 1, r = x[0];
    for (let v = 0; v < t.length - 1; v++) {
      const h = t[v], f = t[v + 1], V = f - h;
      e.push(X([
        h,
        m,
        r
      ], [
        f,
        m,
        r
      ])), e.push(X([
        h,
        m - 0.15,
        r
      ], [
        h,
        m + 0.15,
        r
      ])), e.push(X([
        f,
        m - 0.15,
        r
      ], [
        f,
        m + 0.15,
        r
      ])), e.push(et(`${V.toFixed(2)} m`, (h + f) / 2, m + 0.35, r));
    }
    for (let v = 0; v < n.length - 1; v++) {
      const h = n[v], f = n[v + 1], V = f - h;
      e.push(X([
        c,
        h,
        r
      ], [
        c,
        f,
        r
      ])), e.push(X([
        c - 0.15,
        h,
        r
      ], [
        c + 0.15,
        h,
        r
      ])), e.push(X([
        c - 0.15,
        f,
        r
      ], [
        c + 0.15,
        f,
        r
      ])), e.push(et(`${V.toFixed(2)} m`, c + 0.35, (h + f) / 2, r));
    }
    const u = t[0] - 1, y = n[0];
    for (let v = 0; v < x.length - 1; v++) {
      const h = x[v], f = x[v + 1], V = f - h;
      e.push(X([
        u,
        y,
        h
      ], [
        u,
        y,
        f
      ])), e.push(X([
        u - 0.15,
        y,
        h
      ], [
        u + 0.15,
        y,
        h
      ])), e.push(X([
        u - 0.15,
        y,
        f
      ], [
        u + 0.15,
        y,
        f
      ])), e.push(et(`Piso ${v + 1}: ${V.toFixed(2)} m`, u - 0.5, y, (h + f) / 2));
    }
    return e;
  }
  function zt(t, n = 0.5) {
    const x = Qt(n), e = t / x;
    let m = Math.max(2, Math.round(e));
    return t / m > x * 1.25 && (m = Math.ceil(e)), {
      n: m,
      dx: t / m
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
  function oo(t, n, x = {}) {
    const e = x.tol ?? 1e-5, m = 0, c = [], r = [], u = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, y = 1e8, v = 1e4, h = 1e4, f = 2 * h, V = y / (2 * (1 + 0.3));
    for (const L of n) {
      const B = [];
      let Y = 0, $ = 0;
      for (let C = 0; C < t.length; C++) Math.abs(t[C][2] - L) < e && (B.push(C), Y += t[C][0], $ += t[C][1]);
      if (B.length < 2) continue;
      const i = Y / B.length, d = $ / B.length, b = t.length + c.length;
      c.push({
        idx: b,
        z: L,
        x: i,
        y: d
      });
      for (const C of B) {
        r.push([
          b,
          C
        ]);
        const A = m + r.length - 1;
        u.areas.set(A, v), u.momentsOfInertiaY.set(A, h), u.momentsOfInertiaZ.set(A, h), u.torsionalConstants.set(A, f), u.elasticities.set(A, y), u.shearModuli.set(A, V), u.densities.set(A, 0);
      }
    }
    return x.linkStiffness, {
      masterNodes: c,
      rigidLinks: r,
      linkProps: u
    };
  }
  function no(t, n, x) {
    const e = (m, c) => {
      m.forEach((r, u) => c.set(u + x, r));
    };
    n.areas = n.areas ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaY = n.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaZ = n.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), n.torsionalConstants = n.torsionalConstants ?? /* @__PURE__ */ new Map(), n.elasticities = n.elasticities ?? /* @__PURE__ */ new Map(), n.shearModuli = n.shearModuli ?? /* @__PURE__ */ new Map(), n.densities = n.densities ?? /* @__PURE__ */ new Map(), e(t.linkProps.areas, n.areas), e(t.linkProps.momentsOfInertiaY, n.momentsOfInertiaY), e(t.linkProps.momentsOfInertiaZ, n.momentsOfInertiaZ), e(t.linkProps.torsionalConstants, n.torsionalConstants), e(t.linkProps.elasticities, n.elasticities), e(t.linkProps.shearModuli, n.shearModuli), e(t.linkProps.densities, n.densities);
  }
  function Ct(t) {
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
  function so(t, n, x) {
    if (t <= 0 || n <= 0) return 1e-12;
    const m = Math.sqrt(12 * n / t) / 2;
    return n / m * x;
  }
  function eo(t, n, x, e, m, c, r, u = {}) {
    var _a, _b;
    const y = u.Fy_steel ?? 345e3;
    u.fc_concrete;
    const v = u.Fy_rebar ?? 42e4, h = u.omega ?? 0.15, f = u.phi ?? 0.9, V = m < 0.5 ? f * h * v * (1 - 0.59 * h) : f * y, L = c < 0.5 ? f * h * v * (1 - 0.59 * h) : f * y, B = x.frameBendingMoments, Y = [];
    for (let $ = 0; $ < n.length; $++) {
      const i = n[$];
      if (i.length !== 2) continue;
      const [d, b] = i, C = r.has($);
      let A = 0, H = 0;
      const p = B == null ? void 0 : B.get($);
      p && (A = p.Mi, H = p.Mj);
      const F = ((_a = e.areas) == null ? void 0 : _a.get($)) ?? 0.16, S = ((_b = e.momentsOfInertiaZ) == null ? void 0 : _b.get($)) ?? 213e-5, R = so(F, S, C ? V : L), J = A / R, G = H / R;
      Y.push({
        nodeIdx: d,
        elementIdx: $,
        end: "i",
        classification: Ct(J)
      }), Y.push({
        nodeIdx: b,
        elementIdx: $,
        end: "j",
        classification: Ct(G)
      });
    }
    return Y;
  }
  function ao(t, n, x, e = {}) {
    const m = e.showElastic ?? false, c = (e.radiusFactor ?? 0.02) * x, r = [], u = new Jt(c, 12, 8);
    for (const y of t) {
      if (!m && y.classification.state === "Elastic") continue;
      const v = n[y.nodeIdx];
      if (!v) continue;
      const h = new Kt({
        color: y.classification.color,
        transparent: true,
        opacity: 0.85
      }), f = new Ut(u, h);
      f.position.set(v[0], v[1], v[2]), f.userData = {
        hingeState: y.classification.state,
        ratio: y.classification.ratio.toFixed(3),
        element: y.elementIdx,
        end: y.end
      }, r.push(f);
    }
    return r;
  }
  function io(t) {
    const n = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const x of t) n[x.classification.state]++;
    return n;
  }
  let co, P, D;
  co = 24;
  P = (t, n, x, e, m, c) => ({
    default: x,
    min: e,
    max: m,
    step: c,
    label: n,
    folder: t
  });
  D = (t, n, x, e) => ({
    default: x,
    label: n,
    folder: t,
    options: e
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
        ...P("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...P("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...P("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: P("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: P("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: P("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: P("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: P("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: P("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: P("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: P("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: P("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
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
      fcConcr: P("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: P("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: P("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: P("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: P("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: D("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: P("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: P("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: P("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: P("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: P("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: P("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: D("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: P("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
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
      slabT: P("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabDisc: D("Avanzado", "Discretizaci\xF3n losa", 0.5, to),
      diafragmaRigido: D("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      })
    },
    dynamicParams(t) {
      const n = {}, x = Math.round(t.nPisos ?? 3), e = Math.round(t.nVanosX ?? 2), m = Math.round(t.nVanosY ?? 2);
      for (let c = 1; c <= x; c++) n[`hP_${c}`] = P("Alturas por piso", `h Piso ${c} (m)`, 0, 0, 6, 0.1), n[`colB_p${c}`] = P("Secciones por piso", `b col P${c} (m)`, 0, 0, 1, 0.05), n[`colH_p${c}`] = P("Secciones por piso", `h col P${c} (m)`, 0, 0, 1, 0.05), n[`vigaB_p${c}`] = P("Secciones por piso", `b viga P${c} (m)`, 0, 0, 0.8, 0.05), n[`vigaH_p${c}`] = P("Secciones por piso", `h viga P${c} (m)`, 0, 0, 1, 0.05);
      for (let c = 1; c <= e; c++) n[`svX_${c}`] = P("Luces por vano", `svX #${c} (m)`, 0, 0, 12, 0.5);
      for (let c = 1; c <= m; c++) n[`svY_${c}`] = P("Luces por vano", `svY #${c} (m)`, 0, 0, 12, 0.5);
      return n;
    },
    computedLabels(t, n) {
      var _a;
      const e = (_a = n.deformOutputs.rawVal) == null ? void 0 : _a.reactions, m = n.nodes.rawVal;
      if (!e || !(m == null ? void 0 : m.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let c = 0, r = 0, u = 0, y = -1, v = 0, h = -1;
      e.forEach((d, b) => {
        const C = m[b];
        if (!C || Math.abs(C[2]) > 1e-6) return;
        const A = d[2], H = d[3], p = d[4];
        Math.abs(A) > Math.abs(c) && (c = A, y = b, C[0], C[1]), A > 0 && A > Math.abs(v) && (v = A, h = b), Math.abs(H) > Math.abs(r) && (r = H), Math.abs(p) > Math.abs(u) && (u = p);
      });
      const f = Math.abs(c) / 9.80665, V = Math.abs(r) / 9.80665, L = Math.abs(u) / 9.80665, B = v / 9.80665, Y = Math.round(t.nPisos), $ = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${f.toFixed(2)} tonf (nodo ${y})`,
        Mx: `${V.toFixed(2)} tonf\xB7m`,
        My: `${L.toFixed(2)} tonf\xB7m`
      };
      B > 0.01 && ($["\u26A0 Uplift"] = `${B.toFixed(2)} tonf (nodo ${h})`), $.Pisos = `${Y}`, $["Copiar a \u2192 zapata-aislada"] = `P=${f.toFixed(1)}, Mx=${V.toFixed(1)}, My=${L.toFixed(1)}`;
      const i = n.__plasticHinges;
      if (i) {
        const d = (i.B ?? 0) + (i.IO ?? 0) + (i.LS ?? 0) + (i.CP ?? 0);
        $["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", $["\u{1F7E2} El\xE1stico"] = `${i.Elastic ?? 0}`, $["\u{1F7E1} B \u2014 Yield"] = `${i.B ?? 0}`, $["\u{1F7E0} IO \u2014 Immed.Occ."] = `${i.IO ?? 0}`, $["\u{1F534} LS \u2014 Life Safety"] = `${i.LS ?? 0}`, $["\u26AB CP \u2014 Collapse Prev."] = `${i.CP ?? 0}`, $["Total r\xF3tulas formadas"] = `${d}`;
      }
      return $;
    },
    build(t, n) {
      const x = Math.round(t.nVanosX), e = Math.round(t.nVanosY), m = Math.round(t.nPisos), c = Math.max(1, Math.round(t.nSubViga)), r = Math.max(1, Math.round(t.nSubCol)), u = t.fcConcr * 0.0981, y = 4700 * Math.sqrt(u) * 1e3, v = 2e8, h = 0.2, f = 0.3, V = y / (2 * (1 + h)), L = v / (2 * (1 + f)), B = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, x).map((o) => o > 0 ? o : t.spanX), Y = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, e).map((o) => o > 0 ? o : t.spanY), $ = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, m).map((o) => o > 0 ? o : t.hPiso), i = [];
      t.Lvix > 0 && i.push(-t.Lvix), i.push(0);
      for (let o = 0; o < x; o++) i.push(i[i.length - 1] + B[o]);
      t.Lvdx > 0 && i.push(i[i.length - 1] + t.Lvdx);
      const d = [];
      t.Lviy > 0 && d.push(-t.Lviy), d.push(0);
      for (let o = 0; o < e; o++) d.push(d[d.length - 1] + Y[o]);
      t.Lvdy > 0 && d.push(d[d.length - 1] + t.Lvdy);
      const b = [
        0
      ];
      for (let o = 0; o < m; o++) b.push(b[b.length - 1] + $[o]);
      const C = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === i.length - 1, A = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === d.length - 1, H = (o, s) => C(o) || A(s), p = [], F = {};
      for (let o = 0; o < b.length; o++) for (let s = 0; s < d.length; s++) for (let a = 0; a < i.length; a++) o === 0 && H(a, s) || (F[`${a},${s},${o}`] = p.length, p.push([
        i[a],
        d[s],
        b[o]
      ]));
      const S = [], U = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Map(), w = (o, s, a, g, l) => {
        if (a <= 1) {
          g.add(S.length), G.set(S.length, l), S.push([
            o,
            s
          ]);
          return;
        }
        const O = p[o], M = p[s];
        let z = o;
        for (let k = 1; k < a; k++) {
          const _ = k / a, E = p.length;
          p.push([
            O[0] + (M[0] - O[0]) * _,
            O[1] + (M[1] - O[1]) * _,
            O[2] + (M[2] - O[2]) * _
          ]), g.add(S.length), G.set(S.length, l), S.push([
            z,
            E
          ]), z = E;
        }
        g.add(S.length), G.set(S.length, l), S.push([
          z,
          s
        ]);
      };
      for (let o = 0; o < b.length - 1; o++) for (let s = 0; s < d.length; s++) for (let a = 0; a < i.length; a++) H(a, s) || w(F[`${a},${s},${o}`], F[`${a},${s},${o + 1}`], r, U, o);
      for (let o = 1; o < b.length; o++) for (let s = 0; s < d.length; s++) for (let a = 0; a < i.length - 1; a++) w(F[`${a},${s},${o}`], F[`${a + 1},${s},${o}`], c, R, o - 1);
      for (let o = 1; o < b.length; o++) for (let s = 0; s < i.length; s++) for (let a = 0; a < d.length - 1; a++) w(F[`${s},${a},${o}`], F[`${s},${a + 1},${o}`], c, R, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), s = (g, l, O) => {
          for (let z = 0; z < p.length; z++) if (Math.abs(p[z][0] - g) < 1e-6 && Math.abs(p[z][1] - l) < 1e-6 && Math.abs(p[z][2] - O) < 1e-6) return z;
          const M = p.length;
          return p.push([
            g,
            l,
            O
          ]), M;
        }, a = t.vSecDir < 0.5 ? "x" : "y";
        for (let g = 1; g < b.length; g++) if (a === "x") for (let l = 0; l < d.length - 1; l++) {
          const O = d[l], M = d[l + 1];
          for (let z = 1; z <= o; z++) {
            const k = O + z / (o + 1) * (M - O), _ = [];
            for (let E = 0; E < i.length; E++) _.push(s(i[E], k, b[g]));
            for (let E = 0; E < i.length - 1; E++) R.add(S.length), S.push([
              _[E],
              _[E + 1]
            ]);
          }
        }
        else for (let l = 0; l < i.length - 1; l++) {
          const O = i[l], M = i[l + 1];
          for (let z = 1; z <= o; z++) {
            const k = O + z / (o + 1) * (M - O), _ = [];
            for (let E = 0; E < d.length; E++) _.push(s(k, d[E], b[g]));
            for (let E = 0; E < d.length - 1; E++) R.add(S.length), S.push([
              _[E],
              _[E + 1]
            ]);
          }
        }
      }
      const I = Math.round(t.bracesMode);
      if (I > 0) {
        const o = I === 1 || I === 2 || I === 3, s = I === 1 || I === 2 || I === 4, a = b.length - 1;
        for (let g = 0; g < a; g++) {
          if (o) for (let l = 0; l < d.length; l++) {
            if (I === 1 && l !== 0 && l !== d.length - 1) continue;
            const O = Math.floor((i.length - 1) / 2);
            for (let M = 0; M < i.length - 1; M++) {
              if (I === 1 && M !== O || H(M, l) || H(M + 1, l)) continue;
              const z = F[`${M},${l},${g}`], k = F[`${M + 1},${l},${g + 1}`], _ = F[`${M + 1},${l},${g}`], E = F[`${M},${l},${g + 1}`];
              z !== void 0 && k !== void 0 && S.push([
                z,
                k
              ]), _ !== void 0 && E !== void 0 && S.push([
                _,
                E
              ]);
            }
          }
          if (s) for (let l = 0; l < i.length; l++) {
            if (I === 1 && l !== 0 && l !== i.length - 1) continue;
            const O = Math.floor((d.length - 1) / 2);
            for (let M = 0; M < d.length - 1; M++) {
              if (I === 1 && M !== O || H(l, M) || H(l, M + 1)) continue;
              const z = F[`${l},${M},${g}`], k = F[`${l},${M + 1},${g + 1}`], _ = F[`${l},${M + 1},${g}`], E = F[`${l},${M},${g + 1}`];
              z !== void 0 && k !== void 0 && S.push([
                z,
                k
              ]), _ !== void 0 && E !== void 0 && S.push([
                _,
                E
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), s = (g, l, O) => `${Math.round(g * 1e4)},${Math.round(l * 1e4)},${Math.round(O * 1e4)}`;
        for (let g = 0; g < p.length; g++) o.set(s(p[g][0], p[g][1], p[g][2]), g);
        const a = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let g = 1; g < b.length; g++) {
          const l = b[g];
          for (let O = 0; O < i.length - 1; O++) for (let M = 0; M < d.length - 1; M++) {
            const z = i[O], k = i[O + 1], _ = d[M], E = d[M + 1], { n: Mt } = zt(Math.abs(k - z), a), { n: vt } = zt(Math.abs(E - _), a), st = [];
            for (let T = 0; T <= vt; T++) {
              const N = [];
              for (let pt = 0; pt <= Mt; pt++) {
                const _t = z + pt / Mt * (k - z), yt = _ + T / vt * (E - _), bt = s(_t, yt, l), Pt = o.get(bt);
                if (Pt !== void 0) N.push(Pt);
                else {
                  const wt = p.length;
                  p.push([
                    _t,
                    yt,
                    l
                  ]), o.set(bt, wt), N.push(wt);
                }
              }
              st.push(N);
            }
            for (let T = 0; T < vt; T++) for (let N = 0; N < Mt; N++) J.add(S.length), S.push([
              st[T][N],
              st[T][N + 1],
              st[T + 1][N + 1],
              st[T + 1][N]
            ]);
          }
        }
      }
      const K = Math.round(t.apoyo), at = K === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : K === 1 ? [
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
      ], Z = /* @__PURE__ */ new Map();
      for (let o = 0; o < d.length; o++) for (let s = 0; s < i.length; s++) H(s, o) || Z.set(F[`${s},${o},0`], [
        ...at
      ]);
      const j = /* @__PURE__ */ new Map(), q = t.CM + t.CV;
      if (q !== 0) for (let o = 1; o < b.length; o++) for (let s = 0; s < d.length; s++) for (let a = 0; a < i.length; a++) {
        const g = `${a},${s},${o}`;
        F[g] !== void 0 && j.set(F[g], [
          0,
          0,
          q,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = F[`${i.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${m}`];
        if (o !== void 0) {
          const s = j.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          j.set(o, [
            s[0] + t.Ex,
            s[1] + t.Ey,
            s[2],
            s[3],
            s[4],
            s[5]
          ]);
        }
      }
      const W = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), Q = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), tt = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), it = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), gt = (o) => {
        const s = W[o] ?? t.colSize, a = Q[o] ?? t.colSize;
        return {
          A: s * a,
          Iz: s * a ** 3 / 12,
          Iy: a * s ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(s, a), 4)
        };
      }, mt = (o) => {
        const s = tt[o] ?? t.vigaB, a = it[o] ?? t.vigaH;
        return {
          A: s * a,
          Iz: s * a ** 3 / 12,
          Iy: a * s ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(s, a), 3) * Math.max(s, a)
        };
      }, It = t.matCol < 0.5 ? y : v, Et = t.matCol < 0.5 ? V : L, Ft = t.matCol < 0.5 ? h : f, Lt = t.matViga < 0.5 ? y : v, Bt = t.matViga < 0.5 ? V : L, Vt = t.matViga < 0.5 ? h : f, ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
      for (let o = 0; o < S.length; o++) {
        ut.set(o, co);
        const s = G.get(o) ?? 0;
        if (J.has(o)) ot.set(o, y), nt.set(o, V), ft.set(o, h), xt.set(o, t.slabT);
        else if (U.has(o)) {
          const a = gt(Math.min(s, 7));
          ot.set(o, It), nt.set(o, Et), ft.set(o, Ft), ct.set(o, a.A), lt.set(o, a.Iz), rt.set(o, a.Iy), ht.set(o, a.J);
        } else {
          const a = mt(Math.min(s, 7));
          ot.set(o, Lt), nt.set(o, Bt), ft.set(o, Vt), ct.set(o, a.A), lt.set(o, a.Iz), rt.set(o, a.Iy), ht.set(o, a.J);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let l = 1; l < b.length; l++) o.push(b[l]);
        const s = oo(p, o), a = S.length;
        for (const l of s.masterNodes) p.push([
          l.x,
          l.y,
          l.z
        ]);
        for (const l of s.rigidLinks) S.push(l);
        no(s, {
          elasticities: ot,
          shearModuli: nt,
          areas: ct,
          momentsOfInertiaZ: lt,
          momentsOfInertiaY: rt,
          torsionalConstants: ht,
          densities: ut
        }, a);
      }
      n.nodes.val = p, n.elements.val = S, n.nodeInputs.val = {
        supports: Z,
        loads: j
      }, n.elementInputs.val = {
        elasticities: ot,
        shearModuli: nt,
        areas: ct,
        momentsOfInertiaZ: lt,
        momentsOfInertiaY: rt,
        torsionalConstants: ht,
        densities: ut,
        poissonsRatios: ft,
        thicknesses: xt
      };
      const $t = Dt(p, S, n.nodeInputs.val, n.elementInputs.val);
      n.deformOutputs.val = $t, n.analyzeOutputs.val = Tt(p, S, n.elementInputs.val, $t);
      const dt = Wt(i, d, b), At = W[0], kt = Q[0], Yt = tt[0], Ht = it[0];
      dt.push(et(`Col ${(At * 100).toFixed(0)}\xD7${(kt * 100).toFixed(0)} cm`, i[0] + 0.3, d[0] + 0.3, b[1] * 0.5, "#ffaa00")), dt.push(et(`Viga ${(Yt * 100).toFixed(0)}\xD7${(Ht * 100).toFixed(0)} cm`, (i[0] + i[1]) / 2, d[0], b[1] + 0.2, "#ffaa00"));
      try {
        const o = eo(p, S, n.analyzeOutputs.rawVal, n.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), U);
        let s = 1 / 0, a = 1 / 0, g = 1 / 0, l = -1 / 0, O = -1 / 0, M = -1 / 0;
        for (const _ of p) _[0] < s && (s = _[0]), _[0] > l && (l = _[0]), _[1] < a && (a = _[1]), _[1] > O && (O = _[1]), _[2] < g && (g = _[2]), _[2] > M && (M = _[2]);
        const z = Math.sqrt((l - s) ** 2 + (O - a) ** 2 + (M - g) ** 2) || 1, k = ao(o, p, z, {
          showElastic: false,
          radiusFactor: 0.015
        });
        dt.push(...k), n.__plasticHinges = io(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      n.objects3D.val = dt;
    },
    runModal(t, n, x) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const e = n.nodes.val, m = n.elements.val, c = n.nodeInputs.val, r = n.elementInputs.val;
      if (!(!e.length || !m.length || !((_a = c.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const u = [], y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
        let i = 0, d = 0;
        const b = [];
        let C = 0;
        for (let w = 0; w < m.length; w++) {
          const I = m[w];
          let K = false, at = false;
          if (I.length === 4) {
            const Z = I.map((q) => e[q][2]);
            if (Math.max(...Z) - Math.min(...Z) < 0.02) {
              const q = e[I[0]][0], W = e[I[0]][1], Q = e[I[2]][0], tt = e[I[2]][1], it = Math.abs((Q - q) * (tt - W)), gt = ((_c = r.thicknesses) == null ? void 0 : _c.get(w)) ?? 0.15, mt = ((_d = r.densities) == null ? void 0 : _d.get(w)) ?? 24;
              i += mt * it * gt, K = true;
            }
          } else if (I.length === 2) {
            const Z = e[I[0]][2], j = e[I[1]][2], q = Math.sqrt((e[I[1]][0] - e[I[0]][0]) ** 2 + (e[I[1]][1] - e[I[0]][1]) ** 2);
            if (Math.abs(j - Z) > q) {
              at = true;
              const W = Math.abs(j - Z), Q = ((_e = r.areas) == null ? void 0 : _e.get(w)) ?? 0, tt = ((_f = r.densities) == null ? void 0 : _f.get(w)) ?? 24;
              d += tt * Q * W;
            }
          }
          K || (u.push(I), ((_g = r.areas) == null ? void 0 : _g.has(w)) && y.set(C, r.areas.get(w)), ((_h = r.momentsOfInertiaY) == null ? void 0 : _h.has(w)) && v.set(C, r.momentsOfInertiaY.get(w)), ((_i = r.momentsOfInertiaZ) == null ? void 0 : _i.has(w)) && h.set(C, r.momentsOfInertiaZ.get(w)), ((_j = r.torsionalConstants) == null ? void 0 : _j.has(w)) && f.set(C, r.torsionalConstants.get(w)), ((_k = r.elasticities) == null ? void 0 : _k.has(w)) && V.set(C, r.elasticities.get(w)), ((_l = r.shearModuli) == null ? void 0 : _l.has(w)) && L.set(C, r.shearModuli.get(w)), ((_m = r.densities) == null ? void 0 : _m.has(w)) && B.set(C, r.densities.get(w)), ((_n = r.thicknesses) == null ? void 0 : _n.has(w)) && Y.set(C, r.thicknesses.get(w)), ((_o = r.poissonsRatios) == null ? void 0 : _o.has(w)) && $.set(C, r.poissonsRatios.get(w)), at && b.push(C), C++);
        }
        if (i > 0 && d > 0 && b.length > 0) {
          const w = 1 + i / d;
          for (const I of b) {
            const K = B.get(I) ?? 24;
            B.set(I, K * w);
          }
        }
        const A = {
          areas: y,
          momentsOfInertiaY: v,
          momentsOfInertiaZ: h,
          torsionalConstants: f,
          elasticities: V,
          shearModuli: L,
          densities: B,
          thicknesses: Y,
          poissonsRatios: $
        }, H = Math.round(t.nPisos), p = Math.min(60, Math.max(15, 3 * H + 6)), F = Nt(e, u, c, A, p), S = Math.round(t.nVanosX), U = Math.round(t.nVanosY), R = Math.round(t.nPisos), J = d > 0 ? 1 + i / d : 1;
        x.render(F, {
          title: `Edificio ${S}\xD7${U} vanos \xD7 ${R} pisos \xB7 ${p} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${J.toFixed(2)} dens cols, ${i.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const G = F.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${p} modos \xB7 f\u2081=${G.toFixed(4)} Hz \xB7 m_slab=${i.toFixed(0)} m_cols=${d.toFixed(0)} factor=${J.toFixed(2)}`);
      } catch (u) {
        console.warn("Modal edificio error:", u.message);
      }
    }
  };
});
export {
  __tla,
  fo as e
};
