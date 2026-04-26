import { a as oo } from "./analyze-BydHtRcI.js";
import { m as so, d as no, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { m as eo, n as Ft, o as ao, p as io, L as co, B as lo, V as Vt, a as ro, S as fo, e as ho, b as mo } from "./Text-DyNVkyur.js";
let Po;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function at(t, s, x, e, g = "#00e5ff") {
    const f = document.createElement("canvas"), h = f.getContext("2d");
    h.font = "bold 96px system-ui, -apple-system, sans-serif";
    const V = Math.ceil(h.measureText(t).width);
    f.width = V + 32 * 2, f.height = 96 + 32 * 2, h.font = "bold 96px system-ui, -apple-system, sans-serif", h.fillStyle = "rgba(0,0,0,0.75)";
    const L = f.height / 2;
    h.beginPath(), h.moveTo(L, 0), h.arcTo(f.width, 0, f.width, L, L), h.arcTo(f.width, f.height, f.width - L, f.height, L), h.arcTo(0, f.height, 0, f.height - L, L), h.arcTo(0, 0, L, 0, L), h.closePath(), h.fill(), h.fillStyle = g, h.textBaseline = "middle", h.fillText(t, 32, f.height / 2);
    const F = new eo(f);
    F.minFilter = Ft, F.magFilter = Ft, F.anisotropy = 16, F.needsUpdate = true;
    const T = new ao({
      map: F,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), _ = new io(T);
    _.position.set(s, x, e);
    const i = 0.45, d = f.width / f.height;
    return _.scale.set(i * d, i, 1), _.userData.isCota = true, _;
  }
  function X(t, s, x = 58879) {
    const e = new co({
      color: x,
      depthTest: false
    }), g = new lo().setFromPoints([
      new Vt(...t),
      new Vt(...s)
    ]), c = new ro(g, e);
    return c.renderOrder = 999, c.userData.isCota = true, c;
  }
  function go(t, s, x) {
    const e = [], g = s[s.length - 1] + 1, c = t[t.length - 1] + 1, r = x[0];
    for (let v = 0; v < t.length - 1; v++) {
      const f = t[v], h = t[v + 1], V = h - f;
      e.push(X([
        f,
        g,
        r
      ], [
        h,
        g,
        r
      ])), e.push(X([
        f,
        g - 0.15,
        r
      ], [
        f,
        g + 0.15,
        r
      ])), e.push(X([
        h,
        g - 0.15,
        r
      ], [
        h,
        g + 0.15,
        r
      ])), e.push(at(`${V.toFixed(2)} m`, (f + h) / 2, g + 0.35, r));
    }
    for (let v = 0; v < s.length - 1; v++) {
      const f = s[v], h = s[v + 1], V = h - f;
      e.push(X([
        c,
        f,
        r
      ], [
        c,
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
      ])), e.push(X([
        c - 0.15,
        h,
        r
      ], [
        c + 0.15,
        h,
        r
      ])), e.push(at(`${V.toFixed(2)} m`, c + 0.35, (f + h) / 2, r));
    }
    const u = t[0] - 1, b = s[0];
    for (let v = 0; v < x.length - 1; v++) {
      const f = x[v], h = x[v + 1], V = h - f;
      e.push(X([
        u,
        b,
        f
      ], [
        u,
        b,
        h
      ])), e.push(X([
        u - 0.15,
        b,
        f
      ], [
        u + 0.15,
        b,
        f
      ])), e.push(X([
        u - 0.15,
        b,
        h
      ], [
        u + 0.15,
        b,
        h
      ])), e.push(at(`Piso ${v + 1}: ${V.toFixed(2)} m`, u - 0.5, b, (f + h) / 2));
    }
    return e;
  }
  function Bt(t, s = 0.5) {
    const x = uo(s), e = t / x;
    let g = Math.max(2, Math.round(e));
    return t / g > x * 1.25 && (g = Math.ceil(e)), {
      n: g,
      dx: t / g
    };
  }
  function uo(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const Mo = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function vo(t, s, x = {}) {
    const e = x.tol ?? 1e-5, g = 0, c = [], r = [], u = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, b = 1e8, v = 1e4, f = 1e4, h = 2 * f, V = b / (2 * (1 + 0.3));
    for (const L of s) {
      const F = [];
      let T = 0, _ = 0;
      for (let C = 0; C < t.length; C++) Math.abs(t[C][2] - L) < e && (F.push(C), T += t[C][0], _ += t[C][1]);
      if (F.length < 2) continue;
      const i = T / F.length, d = _ / F.length, S = t.length + c.length;
      c.push({
        idx: S,
        z: L,
        x: i,
        y: d
      });
      for (const C of F) {
        r.push([
          S,
          C
        ]);
        const B = g + r.length - 1;
        u.areas.set(B, v), u.momentsOfInertiaY.set(B, f), u.momentsOfInertiaZ.set(B, f), u.torsionalConstants.set(B, h), u.elasticities.set(B, b), u.shearModuli.set(B, V), u.densities.set(B, 0);
      }
    }
    return x.linkStiffness, {
      masterNodes: c,
      rigidLinks: r,
      linkProps: u
    };
  }
  function po(t, s, x) {
    const e = (g, c) => {
      g.forEach((r, u) => c.set(u + x, r));
    };
    s.areas = s.areas ?? /* @__PURE__ */ new Map(), s.momentsOfInertiaY = s.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), s.momentsOfInertiaZ = s.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), s.torsionalConstants = s.torsionalConstants ?? /* @__PURE__ */ new Map(), s.elasticities = s.elasticities ?? /* @__PURE__ */ new Map(), s.shearModuli = s.shearModuli ?? /* @__PURE__ */ new Map(), s.densities = s.densities ?? /* @__PURE__ */ new Map(), e(t.linkProps.areas, s.areas), e(t.linkProps.momentsOfInertiaY, s.momentsOfInertiaY), e(t.linkProps.momentsOfInertiaZ, s.momentsOfInertiaZ), e(t.linkProps.torsionalConstants, s.torsionalConstants), e(t.linkProps.elasticities, s.elasticities), e(t.linkProps.shearModuli, s.shearModuli), e(t.linkProps.densities, s.densities);
  }
  function kt(t) {
    const s = Math.abs(t);
    return s < 0.8 ? {
      state: "Elastic",
      color: 2278750,
      ratio: t,
      description: "El\xE1stico (sin da\xF1o)"
    } : s < 1 ? {
      state: "B",
      color: 15381256,
      ratio: t,
      description: "B \u2014 Inicio fluencia"
    } : s < 1.5 ? {
      state: "IO",
      color: 16347926,
      ratio: t,
      description: "IO \u2014 Immediate Occupancy"
    } : s < 2.5 ? {
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
  function xo(t, s, x) {
    if (t <= 0 || s <= 0) return 1e-12;
    const g = Math.sqrt(12 * s / t) / 2;
    return s / g * x;
  }
  function _o(t, s, x, e, g, c, r, u = {}) {
    var _a, _b;
    const b = u.Fy_steel ?? 345e3;
    u.fc_concrete;
    const v = u.Fy_rebar ?? 42e4, f = u.omega ?? 0.15, h = u.phi ?? 0.9, V = g < 0.5 ? h * f * v * (1 - 0.59 * f) : h * b, L = c < 0.5 ? h * f * v * (1 - 0.59 * f) : h * b, F = x.frameBendingMoments, T = [];
    for (let _ = 0; _ < s.length; _++) {
      const i = s[_];
      if (i.length !== 2) continue;
      const [d, S] = i, C = r.has(_);
      let B = 0, Y = 0;
      const p = F == null ? void 0 : F.get(_);
      p && (B = p.Mi, Y = p.Mj);
      const A = ((_a = e.areas) == null ? void 0 : _a.get(_)) ?? 0.16, P = ((_b = e.momentsOfInertiaZ) == null ? void 0 : _b.get(_)) ?? 213e-5, R = xo(A, P, C ? V : L), J = B / R, G = Y / R;
      T.push({
        nodeIdx: d,
        elementIdx: _,
        end: "i",
        classification: kt(J)
      }), T.push({
        nodeIdx: S,
        elementIdx: _,
        end: "j",
        classification: kt(G)
      });
    }
    return T;
  }
  function $o(t, s, x, e = {}) {
    const g = e.showElastic ?? false, c = (e.radiusFactor ?? 0.02) * x, r = [], u = new fo(c, 12, 8);
    for (const b of t) {
      if (!g && b.classification.state === "Elastic") continue;
      const v = s[b.nodeIdx];
      if (!v) continue;
      const f = new ho({
        color: b.classification.color,
        transparent: true,
        opacity: 0.85
      }), h = new mo(u, f);
      h.position.set(v[0], v[1], v[2]), h.userData = {
        hingeState: b.classification.state,
        ratio: b.classification.ratio.toFixed(3),
        element: b.elementIdx,
        end: b.end
      }, r.push(h);
    }
    return r;
  }
  function yo(t) {
    const s = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const x of t) s[x.classification.state]++;
    return s;
  }
  let Tt, $t, y, H;
  Tt = 9.81;
  $t = 24 / Tt;
  y = (t, s, x, e, g, c) => ({
    default: x,
    min: e,
    max: g,
    step: c,
    label: s,
    folder: t
  });
  H = (t, s, x, e) => ({
    default: x,
    label: s,
    folder: t,
    options: e
  });
  Po = {
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
      matCol: H("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: H("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: H("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: y("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: y("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: y("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: y("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: y("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: H("Apoyo", "Tipo", 0, {
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
      vSecOn: H("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: y("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: H("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: H("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: H("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: y("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabType: H("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: H("Avanzado", "Discretizaci\xF3n losa", 0.5, Mo),
      diafragmaRigido: H("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      }),
      massSource: H("Avanzado", "Mass Source", 0, {
        "Self-weight (peso propio)": 0,
        "From Loads (DEAD+0.25\xB7LIVE) ETABS": 1
      }),
      qDead: y("Avanzado", "qDead losa (kN/m\xB2)", 3.5, 0.5, 10, 0.5),
      qLive: y("Avanzado", "qLive losa (kN/m\xB2)", 1.5, 0, 6, 0.5),
      crackedSections: H("Avanzado", "Cracked Sections (ACI 318)", 0, {
        "Off (secci\xF3n bruta Ig)": 0,
        "On: 0.7\xB7Ig col / 0.35\xB7Ig viga / 0.25\xB7Ig losa": 1
      })
    },
    dynamicParams(t) {
      const s = {}, x = Math.round(t.nPisos ?? 3), e = Math.round(t.nVanosX ?? 2), g = Math.round(t.nVanosY ?? 2);
      for (let c = 1; c <= x; c++) s[`hP_${c}`] = y("Alturas por piso", `h Piso ${c} (m)`, 0, 0, 6, 0.1), s[`colB_p${c}`] = y("Secciones por piso", `b col P${c} (m)`, 0, 0, 1, 0.05), s[`colH_p${c}`] = y("Secciones por piso", `h col P${c} (m)`, 0, 0, 1, 0.05), s[`vigaB_p${c}`] = y("Secciones por piso", `b viga P${c} (m)`, 0, 0, 0.8, 0.05), s[`vigaH_p${c}`] = y("Secciones por piso", `h viga P${c} (m)`, 0, 0, 1, 0.05);
      for (let c = 1; c <= e; c++) s[`svX_${c}`] = y("Luces por vano", `svX #${c} (m)`, 0, 0, 12, 0.5);
      for (let c = 1; c <= g; c++) s[`svY_${c}`] = y("Luces por vano", `svY #${c} (m)`, 0, 0, 12, 0.5);
      return s;
    },
    computedLabels(t, s) {
      var _a;
      const e = (_a = s.deformOutputs.rawVal) == null ? void 0 : _a.reactions, g = s.nodes.rawVal;
      if (!e || !(g == null ? void 0 : g.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let c = 0, r = 0, u = 0, b = -1, v = 0, f = -1;
      e.forEach((d, S) => {
        const C = g[S];
        if (!C || Math.abs(C[2]) > 1e-6) return;
        const B = d[2], Y = d[3], p = d[4];
        Math.abs(B) > Math.abs(c) && (c = B, b = S, C[0], C[1]), B > 0 && B > Math.abs(v) && (v = B, f = S), Math.abs(Y) > Math.abs(r) && (r = Y), Math.abs(p) > Math.abs(u) && (u = p);
      });
      const h = Math.abs(c) / 9.80665, V = Math.abs(r) / 9.80665, L = Math.abs(u) / 9.80665, F = v / 9.80665, T = Math.round(t.nPisos), _ = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${h.toFixed(2)} tonf (nodo ${b})`,
        Mx: `${V.toFixed(2)} tonf\xB7m`,
        My: `${L.toFixed(2)} tonf\xB7m`
      };
      F > 0.01 && (_["\u26A0 Uplift"] = `${F.toFixed(2)} tonf (nodo ${f})`), _.Pisos = `${T}`, _["Copiar a \u2192 zapata-aislada"] = `P=${h.toFixed(1)}, Mx=${V.toFixed(1)}, My=${L.toFixed(1)}`;
      const i = s.__plasticHinges;
      if (i) {
        const d = (i.B ?? 0) + (i.IO ?? 0) + (i.LS ?? 0) + (i.CP ?? 0);
        _["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", _["\u{1F7E2} El\xE1stico"] = `${i.Elastic ?? 0}`, _["\u{1F7E1} B \u2014 Yield"] = `${i.B ?? 0}`, _["\u{1F7E0} IO \u2014 Immed.Occ."] = `${i.IO ?? 0}`, _["\u{1F534} LS \u2014 Life Safety"] = `${i.LS ?? 0}`, _["\u26AB CP \u2014 Collapse Prev."] = `${i.CP ?? 0}`, _["Total r\xF3tulas formadas"] = `${d}`;
      }
      return _;
    },
    build(t, s) {
      const x = Math.round(t.nVanosX), e = Math.round(t.nVanosY), g = Math.round(t.nPisos), c = Math.max(1, Math.round(t.nSubViga)), r = Math.max(1, Math.round(t.nSubCol)), u = t.fcConcr * 0.0981, b = 4700 * Math.sqrt(u) * 1e3, v = 2e8, f = 0.2, h = 0.3, V = b / (2 * (1 + f)), L = v / (2 * (1 + h)), F = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, x).map((o) => o > 0 ? o : t.spanX), T = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, e).map((o) => o > 0 ? o : t.spanY), _ = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, g).map((o) => o > 0 ? o : t.hPiso), i = [];
      t.Lvix > 0 && i.push(-t.Lvix), i.push(0);
      for (let o = 0; o < x; o++) i.push(i[i.length - 1] + F[o]);
      t.Lvdx > 0 && i.push(i[i.length - 1] + t.Lvdx);
      const d = [];
      t.Lviy > 0 && d.push(-t.Lviy), d.push(0);
      for (let o = 0; o < e; o++) d.push(d[d.length - 1] + T[o]);
      t.Lvdy > 0 && d.push(d[d.length - 1] + t.Lvdy);
      const S = [
        0
      ];
      for (let o = 0; o < g; o++) S.push(S[S.length - 1] + _[o]);
      const C = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === i.length - 1, B = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === d.length - 1, Y = (o, n) => C(o) || B(n), p = [], A = {};
      for (let o = 0; o < S.length; o++) for (let n = 0; n < d.length; n++) for (let a = 0; a < i.length; a++) o === 0 && Y(a, n) || (A[`${a},${n},${o}`] = p.length, p.push([
        i[a],
        d[n],
        S[o]
      ]));
      const P = [], U = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Map(), w = (o, n, a, m, l) => {
        if (a <= 1) {
          m.add(P.length), G.set(P.length, l), P.push([
            o,
            n
          ]);
          return;
        }
        const z = p[o], M = p[n];
        let O = o;
        for (let k = 1; k < a; k++) {
          const $ = k / a, E = p.length;
          p.push([
            z[0] + (M[0] - z[0]) * $,
            z[1] + (M[1] - z[1]) * $,
            z[2] + (M[2] - z[2]) * $
          ]), m.add(P.length), G.set(P.length, l), P.push([
            O,
            E
          ]), O = E;
        }
        m.add(P.length), G.set(P.length, l), P.push([
          O,
          n
        ]);
      };
      for (let o = 0; o < S.length - 1; o++) for (let n = 0; n < d.length; n++) for (let a = 0; a < i.length; a++) Y(a, n) || w(A[`${a},${n},${o}`], A[`${a},${n},${o + 1}`], r, U, o);
      for (let o = 1; o < S.length; o++) for (let n = 0; n < d.length; n++) for (let a = 0; a < i.length - 1; a++) w(A[`${a},${n},${o}`], A[`${a + 1},${n},${o}`], c, R, o - 1);
      for (let o = 1; o < S.length; o++) for (let n = 0; n < i.length; n++) for (let a = 0; a < d.length - 1; a++) w(A[`${n},${a},${o}`], A[`${n},${a + 1},${o}`], c, R, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), n = (m, l, z) => {
          for (let O = 0; O < p.length; O++) if (Math.abs(p[O][0] - m) < 1e-6 && Math.abs(p[O][1] - l) < 1e-6 && Math.abs(p[O][2] - z) < 1e-6) return O;
          const M = p.length;
          return p.push([
            m,
            l,
            z
          ]), M;
        }, a = t.vSecDir < 0.5 ? "x" : "y";
        for (let m = 1; m < S.length; m++) if (a === "x") for (let l = 0; l < d.length - 1; l++) {
          const z = d[l], M = d[l + 1];
          for (let O = 1; O <= o; O++) {
            const k = z + O / (o + 1) * (M - z), $ = [];
            for (let E = 0; E < i.length; E++) $.push(n(i[E], k, S[m]));
            for (let E = 0; E < i.length - 1; E++) R.add(P.length), P.push([
              $[E],
              $[E + 1]
            ]);
          }
        }
        else for (let l = 0; l < i.length - 1; l++) {
          const z = i[l], M = i[l + 1];
          for (let O = 1; O <= o; O++) {
            const k = z + O / (o + 1) * (M - z), $ = [];
            for (let E = 0; E < d.length; E++) $.push(n(k, d[E], S[m]));
            for (let E = 0; E < d.length - 1; E++) R.add(P.length), P.push([
              $[E],
              $[E + 1]
            ]);
          }
        }
      }
      const I = Math.round(t.bracesMode);
      if (I > 0) {
        const o = I === 1 || I === 2 || I === 3, n = I === 1 || I === 2 || I === 4, a = S.length - 1;
        for (let m = 0; m < a; m++) {
          if (o) for (let l = 0; l < d.length; l++) {
            if (I === 1 && l !== 0 && l !== d.length - 1) continue;
            const z = Math.floor((i.length - 1) / 2);
            for (let M = 0; M < i.length - 1; M++) {
              if (I === 1 && M !== z || Y(M, l) || Y(M + 1, l)) continue;
              const O = A[`${M},${l},${m}`], k = A[`${M + 1},${l},${m + 1}`], $ = A[`${M + 1},${l},${m}`], E = A[`${M},${l},${m + 1}`];
              O !== void 0 && k !== void 0 && P.push([
                O,
                k
              ]), $ !== void 0 && E !== void 0 && P.push([
                $,
                E
              ]);
            }
          }
          if (n) for (let l = 0; l < i.length; l++) {
            if (I === 1 && l !== 0 && l !== i.length - 1) continue;
            const z = Math.floor((d.length - 1) / 2);
            for (let M = 0; M < d.length - 1; M++) {
              if (I === 1 && M !== z || Y(l, M) || Y(l, M + 1)) continue;
              const O = A[`${l},${M},${m}`], k = A[`${l},${M + 1},${m + 1}`], $ = A[`${l},${M + 1},${m}`], E = A[`${l},${M},${m + 1}`];
              O !== void 0 && k !== void 0 && P.push([
                O,
                k
              ]), $ !== void 0 && E !== void 0 && P.push([
                $,
                E
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), n = (m, l, z) => `${Math.round(m * 1e4)},${Math.round(l * 1e4)},${Math.round(z * 1e4)}`;
        for (let m = 0; m < p.length; m++) o.set(n(p[m][0], p[m][1], p[m][2]), m);
        const a = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let m = 1; m < S.length; m++) {
          const l = S[m];
          for (let z = 0; z < i.length - 1; z++) for (let M = 0; M < d.length - 1; M++) {
            const O = i[z], k = i[z + 1], $ = d[M], E = d[M + 1], { n: pt } = Bt(Math.abs(k - O), a), { n: xt } = Bt(Math.abs(E - $), a), et = [];
            for (let D = 0; D <= xt; D++) {
              const N = [];
              for (let _t = 0; _t <= pt; _t++) {
                const Ct = O + _t / pt * (k - O), It = $ + D / xt * (E - $), Et = n(Ct, It, l), At = o.get(Et);
                if (At !== void 0) N.push(At);
                else {
                  const Lt = p.length;
                  p.push([
                    Ct,
                    It,
                    l
                  ]), o.set(Et, Lt), N.push(Lt);
                }
              }
              et.push(N);
            }
            for (let D = 0; D < xt; D++) for (let N = 0; N < pt; N++) J.add(P.length), P.push([
              et[D][N],
              et[D][N + 1],
              et[D + 1][N + 1],
              et[D + 1][N]
            ]);
          }
        }
      }
      const K = Math.round(t.apoyo), it = K === 0 ? [
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
      ], q = /* @__PURE__ */ new Map();
      for (let o = 0; o < d.length; o++) for (let n = 0; n < i.length; n++) Y(n, o) || q.set(A[`${n},${o},0`], [
        ...it
      ]);
      const Z = /* @__PURE__ */ new Map(), j = t.CM + t.CV;
      if (j !== 0) for (let o = 1; o < S.length; o++) for (let n = 0; n < d.length; n++) for (let a = 0; a < i.length; a++) {
        const m = `${a},${n},${o}`;
        A[m] !== void 0 && Z.set(A[m], [
          0,
          0,
          j,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = A[`${i.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${g}`];
        if (o !== void 0) {
          const n = Z.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          Z.set(o, [
            n[0] + t.Ex,
            n[1] + t.Ey,
            n[2],
            n[3],
            n[4],
            n[5]
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
      ].map((o) => o > 0 ? o : t.vigaB), ct = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), ut = (o) => {
        const n = W[o] ?? t.colSize, a = Q[o] ?? t.colSize;
        return {
          A: n * a,
          Iz: n * a ** 3 / 12,
          Iy: a * n ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(n, a), 4)
        };
      }, Mt = (o) => {
        const n = tt[o] ?? t.vigaB, a = ct[o] ?? t.vigaH;
        return {
          A: n * a,
          Iz: n * a ** 3 / 12,
          Iy: a * n ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(n, a), 3) * Math.max(n, a)
        };
      }, Yt = t.matCol < 0.5 ? b : v, Ht = t.matCol < 0.5 ? V : L, Dt = t.matCol < 0.5 ? f : h, Nt = t.matViga < 0.5 ? b : v, Rt = t.matViga < 0.5 ? V : L, Xt = t.matViga < 0.5 ? f : h, ot = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), dt = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), wt = Math.round(t.slabType), Gt = wt === 2 ? 0 : 1, qt = wt === 1 ? 0 : 1, mt = t.crackedSections > 0.5, Pt = t.matCol < 0.5 && mt ? 0.7 : 1, zt = t.matViga < 0.5 && mt ? 0.35 : 1, Zt = mt ? 0.25 : 1, jt = 1, vt = t.massSource > 0.5, Jt = t.qDead + 0.25 * t.qLive, Kt = vt ? Jt / Tt / Math.max(t.slabT, 0.05) : $t;
      for (let o = 0; o < P.length; o++) {
        const n = G.get(o) ?? 0;
        if (J.has(o)) ot.set(o, b), st.set(o, V), dt.set(o, f), yt.set(o, t.slabT), bt.set(o, Gt * jt), St.set(o, qt * Zt), nt.set(o, Kt);
        else if (U.has(o)) {
          const a = ut(Math.min(n, 7));
          ot.set(o, Yt), st.set(o, Ht), dt.set(o, Dt), lt.set(o, a.A), rt.set(o, a.Iz * Pt), ft.set(o, a.Iy * Pt), ht.set(o, a.J), nt.set(o, vt ? 0 : $t);
        } else {
          const a = Mt(Math.min(n, 7));
          ot.set(o, Nt), st.set(o, Rt), dt.set(o, Xt), lt.set(o, a.A), rt.set(o, a.Iz * zt), ft.set(o, a.Iy * zt), ht.set(o, a.J), nt.set(o, vt ? 0 : $t);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let l = 1; l < S.length; l++) o.push(S[l]);
        const n = vo(p, o), a = P.length;
        for (const l of n.masterNodes) p.push([
          l.x,
          l.y,
          l.z
        ]);
        for (const l of n.rigidLinks) P.push(l);
        po(n, {
          elasticities: ot,
          shearModuli: st,
          areas: lt,
          momentsOfInertiaZ: rt,
          momentsOfInertiaY: ft,
          torsionalConstants: ht,
          densities: nt
        }, a);
      }
      s.nodes.val = p, s.elements.val = P, s.nodeInputs.val = {
        supports: q,
        loads: Z
      }, s.elementInputs.val = {
        elasticities: ot,
        shearModuli: st,
        areas: lt,
        momentsOfInertiaZ: rt,
        momentsOfInertiaY: ft,
        torsionalConstants: ht,
        densities: nt,
        poissonsRatios: dt,
        thicknesses: yt,
        membraneModifiers: bt,
        bendingModifiers: St
      };
      const Ot = no(p, P, s.nodeInputs.val, s.elementInputs.val);
      s.deformOutputs.val = Ot, s.analyzeOutputs.val = oo(p, P, s.elementInputs.val, Ot);
      const gt = go(i, d, S), Ut = W[0], Wt = Q[0], Qt = tt[0], to = ct[0];
      gt.push(at(`Col ${(Ut * 100).toFixed(0)}\xD7${(Wt * 100).toFixed(0)} cm`, i[0] + 0.3, d[0] + 0.3, S[1] * 0.5, "#ffaa00")), gt.push(at(`Viga ${(Qt * 100).toFixed(0)}\xD7${(to * 100).toFixed(0)} cm`, (i[0] + i[1]) / 2, d[0], S[1] + 0.2, "#ffaa00"));
      try {
        const o = _o(p, P, s.analyzeOutputs.rawVal, s.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), U);
        let n = 1 / 0, a = 1 / 0, m = 1 / 0, l = -1 / 0, z = -1 / 0, M = -1 / 0;
        for (const $ of p) $[0] < n && (n = $[0]), $[0] > l && (l = $[0]), $[1] < a && (a = $[1]), $[1] > z && (z = $[1]), $[2] < m && (m = $[2]), $[2] > M && (M = $[2]);
        const O = Math.sqrt((l - n) ** 2 + (z - a) ** 2 + (M - m) ** 2) || 1, k = $o(o, p, O, {
          showElastic: false,
          radiusFactor: 0.015
        });
        gt.push(...k), s.__plasticHinges = yo(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      s.objects3D.val = gt;
    },
    runModal(t, s, x) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o2;
      const e = s.nodes.val, g = s.elements.val, c = s.nodeInputs.val, r = s.elementInputs.val;
      if (!(!e.length || !g.length || !((_a = c.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const u = [], b = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map();
        let i = 0, d = 0;
        const S = [];
        let C = 0;
        for (let w = 0; w < g.length; w++) {
          const I = g[w];
          let K = false, it = false;
          if (I.length === 4) {
            const q = I.map((j) => e[j][2]);
            if (Math.max(...q) - Math.min(...q) < 0.02) {
              const j = e[I[0]][0], W = e[I[0]][1], Q = e[I[2]][0], tt = e[I[2]][1], ct = Math.abs((Q - j) * (tt - W)), ut = ((_c = r.thicknesses) == null ? void 0 : _c.get(w)) ?? 0.15, Mt = ((_d = r.densities) == null ? void 0 : _d.get(w)) ?? 24;
              i += Mt * ct * ut, K = true;
            }
          } else if (I.length === 2) {
            const q = e[I[0]][2], Z = e[I[1]][2], j = Math.sqrt((e[I[1]][0] - e[I[0]][0]) ** 2 + (e[I[1]][1] - e[I[0]][1]) ** 2);
            if (Math.abs(Z - q) > j) {
              it = true;
              const W = Math.abs(Z - q), Q = ((_e = r.areas) == null ? void 0 : _e.get(w)) ?? 0, tt = ((_f = r.densities) == null ? void 0 : _f.get(w)) ?? 24;
              d += tt * Q * W;
            }
          }
          K || (u.push(I), ((_g = r.areas) == null ? void 0 : _g.has(w)) && b.set(C, r.areas.get(w)), ((_h = r.momentsOfInertiaY) == null ? void 0 : _h.has(w)) && v.set(C, r.momentsOfInertiaY.get(w)), ((_i = r.momentsOfInertiaZ) == null ? void 0 : _i.has(w)) && f.set(C, r.momentsOfInertiaZ.get(w)), ((_j = r.torsionalConstants) == null ? void 0 : _j.has(w)) && h.set(C, r.torsionalConstants.get(w)), ((_k = r.elasticities) == null ? void 0 : _k.has(w)) && V.set(C, r.elasticities.get(w)), ((_l = r.shearModuli) == null ? void 0 : _l.has(w)) && L.set(C, r.shearModuli.get(w)), ((_m = r.densities) == null ? void 0 : _m.has(w)) && F.set(C, r.densities.get(w)), ((_n = r.thicknesses) == null ? void 0 : _n.has(w)) && T.set(C, r.thicknesses.get(w)), ((_o2 = r.poissonsRatios) == null ? void 0 : _o2.has(w)) && _.set(C, r.poissonsRatios.get(w)), it && S.push(C), C++);
        }
        if (i > 0 && d > 0 && S.length > 0) {
          const w = 1 + i / d;
          for (const I of S) {
            const K = F.get(I) ?? 24;
            F.set(I, K * w);
          }
        }
        const B = {
          areas: b,
          momentsOfInertiaY: v,
          momentsOfInertiaZ: f,
          torsionalConstants: h,
          elasticities: V,
          shearModuli: L,
          densities: F,
          thicknesses: T,
          poissonsRatios: _
        }, Y = Math.round(t.nPisos), p = Math.min(60, Math.max(15, 3 * Y + 6)), A = so(e, u, c, B, p), P = Math.round(t.nVanosX), U = Math.round(t.nVanosY), R = Math.round(t.nPisos), J = d > 0 ? 1 + i / d : 1;
        x.render(A, {
          title: `Edificio ${P}\xD7${U} vanos \xD7 ${R} pisos \xB7 ${p} modos`,
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
        const G = A.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${p} modos \xB7 f\u2081=${G.toFixed(4)} Hz \xB7 m_slab=${i.toFixed(0)} m_cols=${d.toFixed(0)} factor=${J.toFixed(2)}`);
      } catch (u) {
        console.warn("Modal edificio error:", u.message);
      }
    }
  };
});
export {
  __tla,
  Po as e
};
