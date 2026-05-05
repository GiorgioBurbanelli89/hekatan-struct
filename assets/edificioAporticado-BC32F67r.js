import { a as Ne } from "./analyze-DNPn2SjO.js";
import { m as Ae, d as he, __tla as __tla_0 } from "./didacticCpp-Ck1qafl6.js";
import { m as Te, n as me, o as Be, p as qe, L as Yt, B as eo, V as j, a as Jo, S as Ye, e as De, b as qo, M as Xo, c as He, d as uo, E as Re, q as Ze, D as je } from "./Text-BE0JKoqd.js";
let is, as;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Vt(t, e, P, l, x = "#00e5ff") {
    const m = document.createElement("canvas"), g = m.getContext("2d");
    g.font = "bold 96px system-ui, -apple-system, sans-serif";
    const K = Math.ceil(g.measureText(t).width);
    m.width = K + 32 * 2, m.height = 96 + 32 * 2, g.font = "bold 96px system-ui, -apple-system, sans-serif", g.fillStyle = "rgba(0,0,0,0.75)";
    const J = m.height / 2;
    g.beginPath(), g.moveTo(J, 0), g.arcTo(m.width, 0, m.width, J, J), g.arcTo(m.width, m.height, m.width - J, m.height, J), g.arcTo(0, m.height, 0, m.height - J, J), g.arcTo(0, 0, J, 0, J), g.closePath(), g.fill(), g.fillStyle = x, g.textBaseline = "middle", g.fillText(t, 32, m.height / 2);
    const G = new Te(m);
    G.minFilter = me, G.magFilter = me, G.anisotropy = 16, G.needsUpdate = true;
    const it = new Be({
      map: G,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), R = new qe(it);
    R.position.set(e, P, l);
    const _ = 0.45, w = m.width / m.height;
    return R.scale.set(_ * w, _, 1), R.userData.isCota = true, R;
  }
  function Xt(t, e, P = 58879) {
    const l = new Yt({
      color: P,
      depthTest: false
    }), x = new eo().setFromPoints([
      new j(...t),
      new j(...e)
    ]), r = new Jo(x, l);
    return r.renderOrder = 999, r.userData.isCota = true, r;
  }
  function Ge(t, e, P) {
    const l = [], x = e[e.length - 1] + 1, r = t[t.length - 1] + 1, h = P[0];
    for (let S = 0; S < t.length - 1; S++) {
      const m = t[S], g = t[S + 1], K = g - m;
      l.push(Xt([
        m,
        x,
        h
      ], [
        g,
        x,
        h
      ])), l.push(Xt([
        m,
        x - 0.15,
        h
      ], [
        m,
        x + 0.15,
        h
      ])), l.push(Xt([
        g,
        x - 0.15,
        h
      ], [
        g,
        x + 0.15,
        h
      ])), l.push(Vt(`${K.toFixed(2)} m`, (m + g) / 2, x + 0.35, h));
    }
    for (let S = 0; S < e.length - 1; S++) {
      const m = e[S], g = e[S + 1], K = g - m;
      l.push(Xt([
        r,
        m,
        h
      ], [
        r,
        g,
        h
      ])), l.push(Xt([
        r - 0.15,
        m,
        h
      ], [
        r + 0.15,
        m,
        h
      ])), l.push(Xt([
        r - 0.15,
        g,
        h
      ], [
        r + 0.15,
        g,
        h
      ])), l.push(Vt(`${K.toFixed(2)} m`, r + 0.35, (m + g) / 2, h));
    }
    const z = t[0] - 1, L = e[0];
    for (let S = 0; S < P.length - 1; S++) {
      const m = P[S], g = P[S + 1], K = g - m;
      l.push(Xt([
        z,
        L,
        m
      ], [
        z,
        L,
        g
      ])), l.push(Xt([
        z - 0.15,
        L,
        m
      ], [
        z + 0.15,
        L,
        m
      ])), l.push(Xt([
        z - 0.15,
        L,
        g
      ], [
        z + 0.15,
        L,
        g
      ])), l.push(Vt(`Piso ${S + 1}: ${K.toFixed(2)} m`, z - 0.5, L, (m + g) / 2));
    }
    return l;
  }
  function ue(t, e = 0.5) {
    const P = Xe(e), l = t / P;
    let x = Math.max(2, Math.round(l));
    return t / x > P * 1.25 && (x = Math.ceil(l)), {
      n: x,
      dx: t / x
    };
  }
  function Xe(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const Ke = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function Je(t, e, P = {}) {
    const l = P.tol ?? 1e-5, x = 0, r = [], h = [], z = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, L = 1e8, S = 1e4, m = 1e4, g = 2 * m, K = L / (2 * (1 + 0.3));
    for (const J of e) {
      const G = [];
      let it = 0, R = 0;
      for (let B = 0; B < t.length; B++) Math.abs(t[B][2] - J) < l && (G.push(B), it += t[B][0], R += t[B][1]);
      if (G.length < 2) continue;
      const _ = it / G.length, w = R / G.length, y = t.length + r.length;
      r.push({
        idx: y,
        z: J,
        x: _,
        y: w
      });
      for (const B of G) {
        h.push([
          y,
          B
        ]);
        const Q = x + h.length - 1;
        z.areas.set(Q, S), z.momentsOfInertiaY.set(Q, m), z.momentsOfInertiaZ.set(Q, m), z.torsionalConstants.set(Q, g), z.elasticities.set(Q, L), z.shearModuli.set(Q, K), z.densities.set(Q, 0);
      }
    }
    return P.linkStiffness, {
      masterNodes: r,
      rigidLinks: h,
      linkProps: z
    };
  }
  function Ue(t, e, P) {
    const l = (x, r) => {
      x.forEach((h, z) => r.set(z + P, h));
    };
    e.areas = e.areas ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaY = e.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaZ = e.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), e.torsionalConstants = e.torsionalConstants ?? /* @__PURE__ */ new Map(), e.elasticities = e.elasticities ?? /* @__PURE__ */ new Map(), e.shearModuli = e.shearModuli ?? /* @__PURE__ */ new Map(), e.densities = e.densities ?? /* @__PURE__ */ new Map(), l(t.linkProps.areas, e.areas), l(t.linkProps.momentsOfInertiaY, e.momentsOfInertiaY), l(t.linkProps.momentsOfInertiaZ, e.momentsOfInertiaZ), l(t.linkProps.torsionalConstants, e.torsionalConstants), l(t.linkProps.elasticities, e.elasticities), l(t.linkProps.shearModuli, e.shearModuli), l(t.linkProps.densities, e.densities);
  }
  function ge(t) {
    const e = Math.abs(t);
    return e < 0.8 ? {
      state: "Elastic",
      color: 2278750,
      ratio: t,
      description: "El\xE1stico (sin da\xF1o)"
    } : e < 1 ? {
      state: "B",
      color: 15381256,
      ratio: t,
      description: "B \u2014 Inicio fluencia"
    } : e < 1.5 ? {
      state: "IO",
      color: 16347926,
      ratio: t,
      description: "IO \u2014 Immediate Occupancy"
    } : e < 2.5 ? {
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
  function We(t, e, P) {
    if (t <= 0 || e <= 0) return 1e-12;
    const x = Math.sqrt(12 * e / t) / 2;
    return e / x * P;
  }
  function Qe(t, e, P, l, x, r, h, z = {}) {
    var _a, _b;
    const L = z.Fy_steel ?? 345e3;
    z.fc_concrete;
    const S = z.Fy_rebar ?? 42e4, m = z.omega ?? 0.15, g = z.phi ?? 0.9, K = x < 0.5 ? g * m * S * (1 - 0.59 * m) : g * L, J = r < 0.5 ? g * m * S * (1 - 0.59 * m) : g * L, G = P.frameBendingMoments, it = [];
    for (let R = 0; R < e.length; R++) {
      const _ = e[R];
      if (_.length !== 2) continue;
      const [w, y] = _, B = h.has(R);
      let Q = 0, ct = 0;
      const p = G == null ? void 0 : G.get(R);
      p && (Q = p.Mi, ct = p.Mj);
      const q = ((_a = l.areas) == null ? void 0 : _a.get(R)) ?? 0.16, E = ((_b = l.momentsOfInertiaZ) == null ? void 0 : _b.get(R)) ?? 213e-5, mt = We(q, E, B ? K : J), $t = Q / mt, gt = ct / mt;
      it.push({
        nodeIdx: w,
        elementIdx: R,
        end: "i",
        classification: ge($t)
      }), it.push({
        nodeIdx: y,
        elementIdx: R,
        end: "j",
        classification: ge(gt)
      });
    }
    return it;
  }
  function ts(t, e, P, l = {}) {
    const x = l.showElastic ?? false, r = (l.radiusFactor ?? 0.02) * P, h = [], z = new Ye(r, 12, 8);
    for (const L of t) {
      if (!x && L.classification.state === "Elastic") continue;
      const S = e[L.nodeIdx];
      if (!S) continue;
      const m = new De({
        color: L.classification.color,
        transparent: true,
        opacity: 0.85
      }), g = new qo(z, m);
      g.position.set(S[0], S[1], S[2]), g.userData = {
        hingeState: L.classification.state,
        ratio: L.classification.ratio.toFixed(3),
        element: L.elementIdx,
        end: L.end
      }, h.push(g);
    }
    return h;
  }
  function os(t) {
    const e = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const P of t) e[P.classification.state]++;
    return e;
  }
  const Ko = 9.80665;
  function pe(t, e, P, l, x = 0.01) {
    const r = Math.abs(t) < x, h = Math.abs(t - P) < x, z = Math.abs(e) < x, L = Math.abs(e - l) < x, S = [
      r,
      h,
      z,
      L
    ].filter(Boolean).length;
    return S >= 2 ? "esquinera" : S === 1 ? "lindero" : "central";
  }
  function Me(t) {
    const { P_kN: e, Mx_kN: P, My_kN: l, tipo: x, q_adm_tonf: r, ks: h } = t, z = t.Lz_min ?? 1, L = t.Lz_max ?? 4, S = t.t_min ?? 0.3;
    if (e <= 0) return {
      tipo: x,
      Lz: z,
      Bz: z,
      t: S,
      A: z ** 2,
      ex: 0,
      ey: 0,
      sigmaMax_tonf: 0,
      sigmaMin_tonf: 0,
      ratio: 0,
      fueraKern: false,
      status: "UPLIFT"
    };
    const m = r * Ko, g = Math.abs(l / e), K = Math.abs(P / e), J = m * 0.95;
    let G = Math.max(z, Math.sqrt(e / m)), it = G, R = 1 / 0, _ = 0, w = false;
    for (let q = 0; q < 50 && G <= L; q++) {
      const E = x === "esquinera" ? 0.3 : x === "lindero" ? 0.2 : 0, Mt = G + E, mt = it + E, $t = Mt * mt, gt = Math.max(g, K), I = gt === g ? Mt : mt;
      if (w = gt > I / 6, !w) R = e / $t * (1 + 6 * gt / I), _ = e / $t * (1 - 6 * gt / I);
      else {
        const D = 1.5 * I - 3 * gt, Lt = gt === g ? mt : Mt;
        R = 2 * e / (Lt * Math.max(D, 0.01)), _ = 0;
      }
      if (R <= J) break;
      G += 0.05, it += 0.05;
    }
    const y = G * it, B = Math.max(S, G / 6), Q = R / m, ct = Q <= 1 ? "OK" : "OVERSTRESS";
    let p;
    return h && h > 0 && (p = R / h * 1e3), {
      tipo: x,
      Lz: G,
      Bz: it,
      t: B,
      A: y,
      ex: g,
      ey: K,
      sigmaMax_tonf: R / Ko,
      sigmaMin_tonf: _ / Ko,
      ratio: Q,
      delta_mm: p,
      fueraKern: w,
      status: ct
    };
  }
  function Yo(t, e, P, l, x) {
    return t.map((r) => {
      const h = pe(r.x, r.y, e, P);
      return {
        ...Me({
          P_kN: r.P_kN,
          Mx_kN: r.Mx_kN,
          My_kN: r.My_kN,
          tipo: h,
          q_adm_tonf: l,
          ks: x
        }),
        idx: r.idx,
        x: r.x,
        y: r.y
      };
    });
  }
  let xe, go, $, ht;
  as = Object.freeze(Object.defineProperty({
    __proto__: null,
    classifyFootingType: pe,
    designAllFootings: Yo,
    designFooting: Me
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  xe = 9.81;
  go = 24 / xe;
  $ = (t, e, P, l, x, r) => ({
    default: P,
    min: l,
    max: x,
    step: r,
    label: e,
    folder: t
  });
  ht = (t, e, P, l) => ({
    default: P,
    label: e,
    folder: t,
    options: l
  });
  is = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [
      "none",
      "pressure",
      "bendingXX",
      "bendingYY",
      "bendingXY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: {
      nVanosX: {
        ...$("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...$("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...$("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: $("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: $("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: $("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: $("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: $("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: $("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: $("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: $("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: $("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: ht("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: ht("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: ht("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: $("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: $("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: $("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: $("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: $("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: ht("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: $("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: $("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: $("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: $("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      loadCase: ht("Cargas", "Caso de carga", 0, {
        "Combinada (CM+CV+Ex+Ey)": 0,
        "Solo Vertical (CM+CV)": 1,
        "Solo Dead (CM)": 2,
        "Solo Live (CV)": 3,
        "Solo Sismo Ex": 4,
        "Solo Sismo Ey": 5,
        "Sismo XY (Ex+Ey)": 6,
        "1.2 CM + 1.6 CV (ASCE)": 7,
        "1.2 CM + 1.0 CV + 1.0 Ex": 8,
        "1.2 CM + 1.0 CV + 1.0 Ey": 9,
        "1.2 CM + 1.0 CV - 1.0 Ex": 10,
        "1.2 CM + 1.0 CV - 1.0 Ey": 11,
        "0.9 CM + 1.0 Ex": 12,
        "0.9 CM + 1.0 Ey": 13
      }),
      modoCimentacion: ht("Cimentaci\xF3n", "\u{1F518} Vista (toggle)", 0, {
        "\u{1F3E2} Edificio completo (ver/editar)": 0,
        "\u{1FAA8} Solo cimentaci\xF3n (P,Mx,My)": 1
      }),
      q_adm_zapata: $("Cimentaci\xF3n", "q_adm (tonf/m\xB2)", 10, 1, 100, 1),
      ks_zapata: $("Cimentaci\xF3n", "ks (kN/m\xB3)", 1030, 100, 2e5, 10),
      Hf_pedestal: $("Cimentaci\xF3n", "Df col enterrada (m) (m)", 0.5, 0, 3, 0.05),
      t_zapata: $("Cimentaci\xF3n", "t zapata (m)", 0.3, 0.1, 1.5, 0.05),
      nSubZapata: $("Cimentaci\xF3n", "Subdiv. Q4 zapata", 4, 2, 12, 1),
      voladoExtra: $("Cimentaci\xF3n", "Volado extra esq./lin (m)", 0.3, 0, 1, 0.05),
      tipoZapataOverride: ht("Cimentaci\xF3n", "Tipo (override)", 0, {
        "Auto (por posici\xF3n)": 0,
        "Todas central": 1,
        "Todas lindero": 2,
        "Todas esquinera": 3
      }),
      mostrarZapatas: ht("Cimentaci\xF3n", "Mostrar zapatas 3D", 0, {
        On: 1,
        Off: 0
      }),
      mostrarLabelsZapatas: ht("Cimentaci\xF3n", "Mostrar etiquetas zapatas", 1, {
        On: 1,
        Off: 0
      }),
      estiloZapata: ht("Cimentaci\xF3n", "Estilo render", 1, {
        "S\xF3lido (caja transl\xFAcida)": 0,
        "Shellthick (Q4 + grilla)": 1
      }),
      sistemaCimentacion: ht("Cimentaci\xF3n", "Sistema cim.", 0, {
        "Zapatas aisladas": 0,
        "Zapatas + vigas de amarre": 1,
        "Vigas T invertida (corrida)": 2,
        "Vigas rect. + zapata corrida": 3,
        "Losa de cimentaci\xF3n (raft)": 4
      }),
      vigaAmarre_pos: ht("Cimentaci\xF3n", "Viga amarre \u2014 posici\xF3n", 0, {
        "Unida a zapatas (z=-Hf)": 0,
        "Conectada a pedestales (-Hf/2)": 1
      }),
      vigaAmarre_h: $("Cimentaci\xF3n", "Viga amarre h (m)", 0.4, 0.2, 1, 0.05),
      vigaAmarre_b: $("Cimentaci\xF3n", "Viga amarre b (m)", 0.25, 0.15, 0.6, 0.05),
      vigaCim_h: $("Cimentaci\xF3n", "Viga cim. h (m)", 0.8, 0.3, 2, 0.05),
      vigaCim_bw: $("Cimentaci\xF3n", "Viga cim. b alma (m)", 0.4, 0.2, 1, 0.05),
      vigaCim_bf: $("Cimentaci\xF3n", "Viga cim. b ala (m)", 1.2, 0.4, 3, 0.1),
      vigaCim_tf: $("Cimentaci\xF3n", "Viga cim. e ala (m)", 0.3, 0.1, 0.8, 0.05),
      nSubViga: $("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: $("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: ht("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: $("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: ht("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: ht("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: ht("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: $("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabType: ht("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: ht("Avanzado", "Discretizaci\xF3n losa", 0.5, Ke),
      diafragmaRigido: ht("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      }),
      massSource: ht("Avanzado", "Mass Source", 0, {
        "Self-weight (peso propio)": 0,
        "From Loads (DEAD+0.25\xB7LIVE) ETABS": 1
      }),
      qDead: $("Avanzado", "qDead losa (kN/m\xB2)", 3.5, 0.5, 10, 0.5),
      qLive: $("Avanzado", "qLive losa (kN/m\xB2)", 1.5, 0, 6, 0.5),
      crackedSections: ht("Avanzado", "Cracked Sections (ACI 318)", 0, {
        "Off (secci\xF3n bruta Ig)": 0,
        "On: 0.7\xB7Ig col / 0.35\xB7Ig viga / 0.25\xB7Ig losa": 1
      })
    },
    dynamicParams(t) {
      const e = {}, P = Math.round(t.nPisos ?? 3), l = Math.round(t.nVanosX ?? 2), x = Math.round(t.nVanosY ?? 2);
      for (let r = 1; r <= P; r++) e[`hP_${r}`] = $("Alturas por piso", `h Piso ${r} (m)`, 0, 0, 6, 0.1), e[`colB_p${r}`] = $("Secciones por piso", `b col P${r} (m)`, 0, 0, 1, 0.05), e[`colH_p${r}`] = $("Secciones por piso", `h col P${r} (m)`, 0, 0, 1, 0.05), e[`vigaB_p${r}`] = $("Secciones por piso", `b viga P${r} (m)`, 0, 0, 0.8, 0.05), e[`vigaH_p${r}`] = $("Secciones por piso", `h viga P${r} (m)`, 0, 0, 1, 0.05);
      for (let r = 1; r <= l; r++) e[`svX_${r}`] = $("Luces por vano", `svX #${r} (m)`, 0, 0, 12, 0.5);
      for (let r = 1; r <= x; r++) e[`svY_${r}`] = $("Luces por vano", `svY #${r} (m)`, 0, 0, 12, 0.5);
      return e;
    },
    computedLabels(t, e) {
      var _a;
      const l = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions, x = e.nodes.rawVal;
      if (!l || !(x == null ? void 0 : x.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let r = 0, h = 0, z = 0, L = -1, S = 0, m = -1;
      const g = [];
      let K = 0, J = 0;
      l.forEach((Q, ct) => {
        const p = x[ct];
        if (!p || Math.abs(p[2]) > 1e-6) return;
        const q = Q[2], E = Q[3], Mt = Q[4];
        Math.abs(q) > Math.abs(r) && (r = q, L = ct, p[0], p[1]), q > 0 && q > Math.abs(S) && (S = q, m = ct), Math.abs(E) > Math.abs(h) && (h = E), Math.abs(Mt) > Math.abs(z) && (z = Mt), g.push({
          idx: ct,
          x: p[0],
          y: p[1],
          P_kN: Math.abs(q),
          Mx_kN: E,
          My_kN: Mt
        }), p[0] > K && (K = p[0]), p[1] > J && (J = p[1]);
      });
      const G = Math.abs(r) / 9.80665, it = Math.abs(h) / 9.80665, R = Math.abs(z) / 9.80665, _ = S / 9.80665, w = Math.round(t.nPisos), y = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${G.toFixed(2)} tonf (nodo ${L})`,
        Mx: `${it.toFixed(2)} tonf\xB7m`,
        My: `${R.toFixed(2)} tonf\xB7m`
      };
      if (_ > 0.01 && (y["\u26A0 Uplift"] = `${_.toFixed(2)} tonf (nodo ${m})`), y.Pisos = `${w}`, y["Copiar a \u2192 zapata-aislada"] = `P=${G.toFixed(1)}, Mx=${it.toFixed(1)}, My=${R.toFixed(1)}`, g.length > 0 && K > 0 && J > 0) {
        const Q = t.q_adm_zapata ?? 10, ct = t.ks_zapata ?? 1030;
        try {
          const p = Yo(g, K, J, Q, ct);
          let q = 0, E = 0, Mt = 0, mt = 0, $t = -1, gt = "", I = 0, D = 0;
          for (const tt of p) tt.tipo === "esquinera" ? q++ : tt.tipo === "lindero" ? E++ : Mt++, tt.sigmaMax_tonf > mt && (mt = tt.sigmaMax_tonf, $t = tt.idx, gt = tt.tipo), tt.status === "OK" && I++, tt.Lz > D && (D = tt.Lz);
          y["\u2500\u2500 Cimentaci\xF3n (auto) \u2500\u2500"] = "", y["Tipos zapata"] = `${q} esquineras, ${E} linderas, ${Mt} centrales`, y["\u03C3_max global"] = `${mt.toFixed(2)} tonf/m\xB2 (nodo ${$t}, ${gt})`, y["\u03C3/q_adm"] = `${(mt / Q).toFixed(2)}` + (mt / Q <= 1 ? " \u2713" : " \u26A0"), y["Lz m\xE1x zapata"] = `${D.toFixed(2)} m`, y.Cumplen = `${I}/${p.length}` + (I === p.length ? " \u2713" : " \u26A0");
          const Lt = t.Hf_pedestal ?? 0.5, ro = t.t_zapata ?? 0.3, Nt = Math.round(t.nSubZapata ?? 4);
          y["Df col enterrada"] = `${Lt.toFixed(2)} m` + (Lt < 1e-3 ? " (sin pedestal)" : ""), y["t zapata"] = `${ro.toFixed(2)} m`, y["Subdiv. Q4"] = `${Nt}\xD7${Nt}`, y["Volado extra"] = `${(t.voladoExtra ?? 0.3).toFixed(2)} m`;
        } catch {
          y["\u2500\u2500 Cimentaci\xF3n \u2500\u2500"] = "module load error";
        }
      }
      const B = e.__plasticHinges;
      if (B) {
        const Q = (B.B ?? 0) + (B.IO ?? 0) + (B.LS ?? 0) + (B.CP ?? 0);
        y["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", y["\u{1F7E2} El\xE1stico"] = `${B.Elastic ?? 0}`, y["\u{1F7E1} B \u2014 Yield"] = `${B.B ?? 0}`, y["\u{1F7E0} IO \u2014 Immed.Occ."] = `${B.IO ?? 0}`, y["\u{1F534} LS \u2014 Life Safety"] = `${B.LS ?? 0}`, y["\u26AB CP \u2014 Collapse Prev."] = `${B.CP ?? 0}`, y["Total r\xF3tulas formadas"] = `${Q}`;
      }
      return y;
    },
    build(t, e) {
      var _a, _b;
      const P = Math.round(t.nVanosX), l = Math.round(t.nVanosY), x = Math.round(t.nPisos), r = Math.max(1, Math.round(t.nSubViga)), h = Math.max(1, Math.round(t.nSubCol)), z = t.fcConcr * 0.0981, L = 4700 * Math.sqrt(z) * 1e3, S = 2e8, m = 0.2, g = 0.3, K = L / (2 * (1 + m)), J = S / (2 * (1 + g)), G = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, P).map((o) => o > 0 ? o : t.spanX), it = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, l).map((o) => o > 0 ? o : t.spanY), R = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, x).map((o) => o > 0 ? o : t.hPiso), _ = [];
      t.Lvix > 0 && _.push(-t.Lvix), _.push(0);
      for (let o = 0; o < P; o++) _.push(_[_.length - 1] + G[o]);
      t.Lvdx > 0 && _.push(_[_.length - 1] + t.Lvdx);
      const w = [];
      t.Lviy > 0 && w.push(-t.Lviy), w.push(0);
      for (let o = 0; o < l; o++) w.push(w[w.length - 1] + it[o]);
      t.Lvdy > 0 && w.push(w[w.length - 1] + t.Lvdy);
      const y = [
        0
      ];
      for (let o = 0; o < x; o++) y.push(y[y.length - 1] + R[o]);
      const B = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === _.length - 1, Q = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === w.length - 1, ct = (o, n) => B(o) || Q(n), p = [], q = {};
      for (let o = 0; o < y.length; o++) for (let n = 0; n < w.length; n++) for (let a = 0; a < _.length; a++) o === 0 && ct(a, n) || (q[`${a},${n},${o}`] = p.length, p.push([
        _[a],
        w[n],
        y[o]
      ]));
      const E = [], Mt = /* @__PURE__ */ new Set(), mt = /* @__PURE__ */ new Set(), $t = /* @__PURE__ */ new Set(), gt = /* @__PURE__ */ new Map(), I = (o, n, a, u, c) => {
        if (a <= 1) {
          u.add(E.length), gt.set(E.length, c), E.push([
            o,
            n
          ]);
          return;
        }
        const k = p[o], d = p[n];
        let f = o;
        for (let ot = 1; ot < a; ot++) {
          const i = ot / a, C = p.length;
          p.push([
            k[0] + (d[0] - k[0]) * i,
            k[1] + (d[1] - k[1]) * i,
            k[2] + (d[2] - k[2]) * i
          ]), u.add(E.length), gt.set(E.length, c), E.push([
            f,
            C
          ]), f = C;
        }
        u.add(E.length), gt.set(E.length, c), E.push([
          f,
          n
        ]);
      };
      for (let o = 0; o < y.length - 1; o++) for (let n = 0; n < w.length; n++) for (let a = 0; a < _.length; a++) ct(a, n) || I(q[`${a},${n},${o}`], q[`${a},${n},${o + 1}`], h, Mt, o);
      for (let o = 1; o < y.length; o++) for (let n = 0; n < w.length; n++) for (let a = 0; a < _.length - 1; a++) I(q[`${a},${n},${o}`], q[`${a + 1},${n},${o}`], r, mt, o - 1);
      for (let o = 1; o < y.length; o++) for (let n = 0; n < _.length; n++) for (let a = 0; a < w.length - 1; a++) I(q[`${n},${a},${o}`], q[`${n},${a + 1},${o}`], r, mt, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), n = (u, c, k) => {
          for (let f = 0; f < p.length; f++) if (Math.abs(p[f][0] - u) < 1e-6 && Math.abs(p[f][1] - c) < 1e-6 && Math.abs(p[f][2] - k) < 1e-6) return f;
          const d = p.length;
          return p.push([
            u,
            c,
            k
          ]), d;
        }, a = t.vSecDir < 0.5 ? "x" : "y";
        for (let u = 1; u < y.length; u++) if (a === "x") for (let c = 0; c < w.length - 1; c++) {
          const k = w[c], d = w[c + 1];
          for (let f = 1; f <= o; f++) {
            const ot = k + f / (o + 1) * (d - k), i = [];
            for (let C = 0; C < _.length; C++) i.push(n(_[C], ot, y[u]));
            for (let C = 0; C < _.length - 1; C++) mt.add(E.length), E.push([
              i[C],
              i[C + 1]
            ]);
          }
        }
        else for (let c = 0; c < _.length - 1; c++) {
          const k = _[c], d = _[c + 1];
          for (let f = 1; f <= o; f++) {
            const ot = k + f / (o + 1) * (d - k), i = [];
            for (let C = 0; C < w.length; C++) i.push(n(ot, w[C], y[u]));
            for (let C = 0; C < w.length - 1; C++) mt.add(E.length), E.push([
              i[C],
              i[C + 1]
            ]);
          }
        }
      }
      const D = Math.round(t.bracesMode);
      if (D > 0) {
        const o = D === 1 || D === 2 || D === 3, n = D === 1 || D === 2 || D === 4, a = y.length - 1;
        for (let u = 0; u < a; u++) {
          if (o) for (let c = 0; c < w.length; c++) {
            if (D === 1 && c !== 0 && c !== w.length - 1) continue;
            const k = Math.floor((_.length - 1) / 2);
            for (let d = 0; d < _.length - 1; d++) {
              if (D === 1 && d !== k || ct(d, c) || ct(d + 1, c)) continue;
              const f = q[`${d},${c},${u}`], ot = q[`${d + 1},${c},${u + 1}`], i = q[`${d + 1},${c},${u}`], C = q[`${d},${c},${u + 1}`];
              f !== void 0 && ot !== void 0 && E.push([
                f,
                ot
              ]), i !== void 0 && C !== void 0 && E.push([
                i,
                C
              ]);
            }
          }
          if (n) for (let c = 0; c < _.length; c++) {
            if (D === 1 && c !== 0 && c !== _.length - 1) continue;
            const k = Math.floor((w.length - 1) / 2);
            for (let d = 0; d < w.length - 1; d++) {
              if (D === 1 && d !== k || ct(c, d) || ct(c, d + 1)) continue;
              const f = q[`${c},${d},${u}`], ot = q[`${c},${d + 1},${u + 1}`], i = q[`${c},${d + 1},${u}`], C = q[`${c},${d},${u + 1}`];
              f !== void 0 && ot !== void 0 && E.push([
                f,
                ot
              ]), i !== void 0 && C !== void 0 && E.push([
                i,
                C
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), n = (u, c, k) => `${Math.round(u * 1e4)},${Math.round(c * 1e4)},${Math.round(k * 1e4)}`;
        for (let u = 0; u < p.length; u++) o.set(n(p[u][0], p[u][1], p[u][2]), u);
        const a = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let u = 1; u < y.length; u++) {
          const c = y[u];
          for (let k = 0; k < _.length - 1; k++) for (let d = 0; d < w.length - 1; d++) {
            const f = _[k], ot = _[k + 1], i = w[d], C = w[d + 1], { n: Kt } = ue(Math.abs(ot - f), a), { n: At } = ue(Math.abs(C - i), a), Ht = [];
            for (let U = 0; U <= At; U++) {
              const xt = [];
              for (let no = 0; no <= Kt; no++) {
                const bo = f + no / Kt * (ot - f), Vo = i + U / At * (C - i), No = n(bo, Vo, c), wo = o.get(No);
                if (wo !== void 0) xt.push(wo);
                else {
                  const Co = p.length;
                  p.push([
                    bo,
                    Vo,
                    c
                  ]), o.set(No, Co), xt.push(Co);
                }
              }
              Ht.push(xt);
            }
            for (let U = 0; U < At; U++) for (let xt = 0; xt < Kt; xt++) $t.add(E.length), E.push([
              Ht[U][xt],
              Ht[U][xt + 1],
              Ht[U + 1][xt + 1],
              Ht[U + 1][xt]
            ]);
          }
        }
      }
      const Lt = Math.round(t.apoyo), ro = Lt === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : Lt === 1 ? [
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
      ], Nt = /* @__PURE__ */ new Map();
      for (let o = 0; o < w.length; o++) for (let n = 0; n < _.length; n++) ct(n, o) || Nt.set(q[`${n},${o},0`], [
        ...ro
      ]);
      const tt = Math.round(t.loadCase ?? 0), so = tt === 1 ? [
        1,
        1,
        0,
        0
      ] : tt === 2 ? [
        1,
        0,
        0,
        0
      ] : tt === 3 ? [
        0,
        1,
        0,
        0
      ] : tt === 4 ? [
        0,
        0,
        1,
        0
      ] : tt === 5 ? [
        0,
        0,
        0,
        1
      ] : tt === 6 ? [
        0,
        0,
        1,
        1
      ] : tt === 7 ? [
        1.2,
        1.6,
        0,
        0
      ] : tt === 8 ? [
        1.2,
        1,
        1,
        0
      ] : tt === 9 ? [
        1.2,
        1,
        0,
        1
      ] : tt === 10 ? [
        1.2,
        1,
        -1,
        0
      ] : tt === 11 ? [
        1.2,
        1,
        0,
        -1
      ] : tt === 12 ? [
        0.9,
        0,
        1,
        0
      ] : tt === 13 ? [
        0.9,
        0,
        0,
        1
      ] : [
        1,
        1,
        1,
        1
      ], [po, Mo, xo, Do] = so, lo = /* @__PURE__ */ new Map(), ko = po * t.CM + Mo * t.CV;
      if (ko !== 0) for (let o = 1; o < y.length; o++) for (let n = 0; n < w.length; n++) for (let a = 0; a < _.length; a++) {
        const u = `${a},${n},${o}`;
        q[u] !== void 0 && lo.set(q[u], [
          0,
          0,
          ko,
          0,
          0,
          0
        ]);
      }
      const Uo = xo * t.Ex, Wo = Do * t.Ey;
      if (Uo !== 0 || Wo !== 0) {
        const o = q[`${_.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${x}`];
        if (o !== void 0) {
          const n = lo.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          lo.set(o, [
            n[0] + Uo,
            n[1] + Wo,
            n[2],
            n[3],
            n[4],
            n[5]
          ]);
        }
      }
      const Ho = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), Ro = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), _e = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), ye = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), ve = (o) => {
        const n = Ho[o] ?? t.colSize, a = Ro[o] ?? t.colSize;
        return {
          A: n * a,
          Iz: n * a ** 3 / 12,
          Iy: a * n ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(n, a), 4)
        };
      }, be = (o) => {
        const n = _e[o] ?? t.vigaB, a = ye[o] ?? t.vigaH;
        return {
          A: n * a,
          Iz: n * a ** 3 / 12,
          Iy: a * n ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(n, a), 3) * Math.max(n, a)
        };
      }, we = t.matCol < 0.5 ? L : S, Ce = t.matCol < 0.5 ? K : J, ze = t.matCol < 0.5 ? m : g, $e = t.matViga < 0.5 ? L : S, Se = t.matViga < 0.5 ? K : J, ke = t.matViga < 0.5 ? m : g, _o = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map(), Eo = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ee = Math.round(t.slabType), Pe = ee === 2 ? 0 : 1, Oe = ee === 1 ? 0 : 1, Io = t.crackedSections > 0.5, se = t.matCol < 0.5 && Io ? 0.7 : 1, ne = t.matViga < 0.5 && Io ? 0.35 : 1, Fe = Io ? 0.25 : 1, Le = 1, Zo = t.massSource > 0.5, Ee = t.qDead + 0.25 * t.qLive, Ie = Zo ? Ee / xe / Math.max(t.slabT, 0.05) : go;
      for (let o = 0; o < E.length; o++) {
        const n = gt.get(o) ?? 0;
        if ($t.has(o)) _o.set(o, L), yo.set(o, K), Eo.set(o, m), Qo.set(o, t.slabT), te.set(o, Pe * Le), oe.set(o, Oe * Fe), vo.set(o, Ie);
        else if (Mt.has(o)) {
          const a = ve(Math.min(n, 7));
          _o.set(o, we), yo.set(o, Ce), Eo.set(o, ze), Po.set(o, a.A), Oo.set(o, a.Iz * se), Fo.set(o, a.Iy * se), Lo.set(o, a.J), vo.set(o, Zo ? 0 : go);
        } else {
          const a = be(Math.min(n, 7));
          _o.set(o, $e), yo.set(o, Se), Eo.set(o, ke), Po.set(o, a.A), Oo.set(o, a.Iz * ne), Fo.set(o, a.Iy * ne), Lo.set(o, a.J), vo.set(o, Zo ? 0 : go);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let c = 1; c < y.length; c++) o.push(y[c]);
        const n = Je(p, o), a = E.length;
        for (const c of n.masterNodes) p.push([
          c.x,
          c.y,
          c.z
        ]);
        for (const c of n.rigidLinks) E.push(c);
        Ue(n, {
          elasticities: _o,
          shearModuli: yo,
          areas: Po,
          momentsOfInertiaZ: Oo,
          momentsOfInertiaY: Fo,
          torsionalConstants: Lo,
          densities: vo
        }, a);
      }
      e.nodes.val = p, e.elements.val = E, e.nodeInputs.val = {
        supports: Nt,
        loads: lo
      }, e.elementInputs.val = {
        elasticities: _o,
        shearModuli: yo,
        areas: Po,
        momentsOfInertiaZ: Oo,
        momentsOfInertiaY: Fo,
        torsionalConstants: Lo,
        densities: vo,
        poissonsRatios: Eo,
        thicknesses: Qo,
        membraneModifiers: te,
        bendingModifiers: oe
      };
      const ae = he(p, E, e.nodeInputs.val, e.elementInputs.val);
      e.deformOutputs.val = ae, e.analyzeOutputs.val = Ne(p, E, e.elementInputs.val, ae);
      const jo = Ge(_, w, y);
      try {
        const o = Qe(p, E, e.analyzeOutputs.rawVal, e.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), Mt);
        let n = 1 / 0, a = 1 / 0, u = 1 / 0, c = -1 / 0, k = -1 / 0, d = -1 / 0;
        for (const i of p) i[0] < n && (n = i[0]), i[0] > c && (c = i[0]), i[1] < a && (a = i[1]), i[1] > k && (k = i[1]), i[2] < u && (u = i[2]), i[2] > d && (d = i[2]);
        const f = Math.sqrt((c - n) ** 2 + (k - a) ** 2 + (d - u) ** 2) || 1, ot = ts(o, p, f, {
          showElastic: false,
          radiusFactor: 0.015
        });
        jo.push(...ot), e.__plasticHinges = os(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      if ((t.mostrarZapatas ?? 1) >= 0.5) try {
        const o = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions;
        if (o) {
          const n = [];
          let a = 0, u = 0;
          if (o.forEach((c, k) => {
            const d = p[k];
            !d || Math.abs(d[2]) > 1e-6 || (n.push({
              idx: k,
              x: d[0],
              y: d[1],
              P_kN: Math.abs(c[2]),
              Mx_kN: c[3],
              My_kN: c[4]
            }), d[0] > a && (a = d[0]), d[1] > u && (u = d[1]));
          }), n.length > 0) {
            const c = t.q_adm_zapata ?? 10, k = t.ks_zapata ?? 1030, d = Math.max(0, t.Hf_pedestal ?? 0.5), f = Math.max(0.1, t.t_zapata ?? 0.3), ot = Math.max(2, Math.round(t.nSubZapata ?? 4)), i = Math.max(0, t.voladoExtra ?? 0.3), C = Math.round(t.tipoZapataOverride ?? 0) | 0, Kt = Math.round(t.estiloZapata ?? 1), At = Yo(n, a, u, c, k), Ht = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const A of At) C > 0 && (A.tipo = Ht[C - 1]), A.t = f;
            const U = [], xt = (A) => new Xo({
              color: A,
              transparent: true,
              opacity: 0.55,
              roughness: 0.7
            }), no = new Yt({
              color: 0,
              linewidth: 2
            }), bo = new Yt({
              color: 2236962,
              linewidth: 1,
              transparent: true,
              opacity: 0.5
            }), Vo = new Xo({
              color: 10265519,
              transparent: true,
              opacity: 0.75,
              roughness: 0.5
            }), No = new Yt({
              color: 1118481,
              linewidth: 2
            }), wo = Ho[0] ?? t.colSize, Co = Ro[0] ?? t.colSize;
            for (const A of At) {
              const X = A.Lz, nt = A.Bz, Dt = A.t;
              let Tt = 0, Bt = 0;
              A.tipo === "esquinera" ? (Tt = A.x < a / 2 ? -(X / 2 - i) : X / 2 - i, Bt = A.y < u / 2 ? -(nt / 2 - i) : nt / 2 - i) : A.tipo === "lindero" && (Math.abs(A.x) < 1e-3 || Math.abs(A.x - a) < 1e-3 ? Tt = A.x < a / 2 ? -(X / 2 - i) : X / 2 - i : (Math.abs(A.y) < 1e-3 || Math.abs(A.y - u) < 1e-3) && (Bt = A.y < u / 2 ? -(nt / 2 - i) : nt / 2 - i));
              const W = A.x - Tt, V = A.y - Bt, Y = -d, St = Y - Dt / 2, Et = Y - Dt, Jt = A.ratio;
              let Ut = 4906624;
              if (Jt > 1.5 ? Ut = 15680580 : Jt > 1 ? Ut = 16096779 : Jt > 0.8 && (Ut = 16498468), d > 1e-3) {
                const pt = new eo().setFromPoints([
                  new j(A.x, A.y, 0),
                  new j(A.x, A.y, -d)
                ]);
                U.push(new Jo(pt, new Yt({
                  color: 6333946,
                  linewidth: 4
                }))), U.push(Vt(`Df=${d.toFixed(2)}m`, A.x + 0.1, A.y + 0.1, -d / 2, "#60a5fa"));
              }
              if (Kt === 0) {
                const pt = new He(X, nt, Dt), Rt = new qo(pt, xt(Ut));
                Rt.position.set(W, V, St), U.push(Rt);
                const Zt = new uo(new Re(pt), no);
                Zt.position.copy(Rt.position), U.push(Zt);
              } else {
                const pt = new Ze(X, nt), Rt = new Xo({
                  color: Ut,
                  transparent: true,
                  opacity: 0.45,
                  roughness: 0.6,
                  side: je
                }), Zt = new qo(pt, Rt);
                Zt.position.set(W, V, Y), U.push(Zt);
                const Wt = new qo(pt.clone(), Rt.clone());
                Wt.position.set(W, V, Et), U.push(Wt);
                const ce = X / ot, re = nt / ot, qt = [];
                for (let vt = 0; vt <= ot; vt++) {
                  const _t = -X / 2 + vt * ce;
                  qt.push(new j(W + _t, V - nt / 2, Y), new j(W + _t, V + nt / 2, Y)), qt.push(new j(W + _t, V - nt / 2, Et), new j(W + _t, V + nt / 2, Et));
                }
                for (let vt = 0; vt <= ot; vt++) {
                  const _t = -nt / 2 + vt * re;
                  qt.push(new j(W - X / 2, V + _t, Y), new j(W + X / 2, V + _t, Y)), qt.push(new j(W - X / 2, V + _t, Et), new j(W + X / 2, V + _t, Et));
                }
                const $o = new eo().setFromPoints(qt);
                U.push(new uo($o, bo));
                const fo = [
                  [
                    -X / 2,
                    -nt / 2
                  ],
                  [
                    X / 2,
                    -nt / 2
                  ],
                  [
                    X / 2,
                    nt / 2
                  ],
                  [
                    -X / 2,
                    nt / 2
                  ]
                ], ao = [];
                for (let vt = 0; vt < 4; vt++) {
                  const [_t, s] = fo[vt], [O, M] = fo[(vt + 1) % 4];
                  ao.push(new j(W + _t, V + s, Y), new j(W + O, V + M, Y)), ao.push(new j(W + _t, V + s, Et), new j(W + O, V + M, Et)), ao.push(new j(W + _t, V + s, Y), new j(W + _t, V + s, Et));
                }
                const ho = new eo().setFromPoints(ao);
                U.push(new uo(ho, no));
              }
              (t.mostrarLabelsZapatas ?? 1) >= 0.5 && U.push(Vt(`${A.tipo[0].toUpperCase()} ${X.toFixed(2)}\xD7${nt.toFixed(2)}\xD7${Dt.toFixed(2)}m \u03C3/q=${A.ratio.toFixed(2)}`, W, V, Et - 0.2, Jt <= 1 ? "#4ade80" : Jt <= 1.5 ? "#f59e0b" : "#ef4444"));
            }
            if (Math.round(t.sistemaCimentacion ?? 0) === 1) {
              const A = Math.round(t.vigaAmarre_pos ?? 0), X = A === 0 ? -d : -d / 2, nt = t.vigaAmarre_b ?? 0.25, Dt = t.vigaAmarre_h ?? 0.4, Tt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map();
              for (const V of n) {
                const Y = V.y.toFixed(4), St = V.x.toFixed(4);
                Tt.has(Y) || Tt.set(Y, []), Bt.has(St) || Bt.set(St, []), Tt.get(Y).push(V), Bt.get(St).push(V);
              }
              const W = [];
              for (const V of Tt.values()) {
                V.sort((Y, St) => Y.x - St.x);
                for (let Y = 0; Y < V.length - 1; Y++) W.push(new j(V[Y].x, V[Y].y, X)), W.push(new j(V[Y + 1].x, V[Y + 1].y, X));
              }
              for (const V of Bt.values()) {
                V.sort((Y, St) => Y.y - St.y);
                for (let Y = 0; Y < V.length - 1; Y++) W.push(new j(V[Y].x, V[Y].y, X)), W.push(new j(V[Y + 1].x, V[Y + 1].y, X));
              }
              W.length > 0 && (U.push(new uo(new eo().setFromPoints(W), new Yt({
                color: 2282478,
                linewidth: 3
              }))), U.push(Vt(`Vigas amarre ${(nt * 100).toFixed(0)}\xD7${(Dt * 100).toFixed(0)} cm @ ${A === 0 ? "zapatas" : "pedestales"}`, a / 2, u / 2, X + 0.2, "#22d3ee")));
            }
            jo.push(...U);
          }
        }
      } catch (o) {
        console.warn("[Zapatas 3D]", o);
      }
      if ((t.modoCimentacion ?? 0) >= 0.5) try {
        const n = (_b = e.deformOutputs.rawVal) == null ? void 0 : _b.reactions;
        if (n && n.size > 0) {
          const a = [];
          let u = 0, c = 0;
          if (n.forEach((k, d) => {
            const f = p[d];
            !f || Math.abs(f[2]) > 1e-6 || (a.push({
              idx: d,
              x: f[0],
              y: f[1],
              P_kN: Math.abs(k[2]),
              Mx_kN: k[3],
              My_kN: k[4]
            }), f[0] > u && (u = f[0]), f[1] > c && (c = f[1]));
          }), a.length > 0) {
            const k = t.q_adm_zapata ?? 10, d = t.ks_zapata ?? 1030, f = Math.max(0, t.Hf_pedestal ?? 0.5), ot = Math.max(0.1, t.t_zapata ?? 0.3), i = Math.max(2, Math.round(t.nSubZapata ?? 4)), C = Math.max(0, t.voladoExtra ?? 0.3), Kt = Math.round(t.tipoZapataOverride ?? 0) | 0, At = Yo(a, u, c, k, d), Ht = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const s of At) Kt > 0 && (s.tipo = Ht[Kt - 1]), s.t = ot;
            const U = Ho[0] ?? t.colSize, xt = Ro[0] ?? t.colSize, no = U * xt, bo = U * xt ** 3 / 12, Vo = xt * U ** 3 / 12, No = 0.14 * Math.pow(Math.min(U, xt), 4), wo = t.matCol < 0.5 ? L : S, Co = t.matCol < 0.5 ? K : J, ie = t.matCol < 0.5 ? m : g, A = [], X = [], nt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), zo = [], pt = [], Rt = (s, O, M) => `${Math.round(s * 1e4)},${Math.round(O * 1e4)},${Math.round(M * 1e4)}`, Zt = /* @__PURE__ */ new Map(), Wt = (s, O, M) => {
              const N = Rt(s, O, M), H = Zt.get(N);
              if (H !== void 0) return H;
              const at = A.length;
              return A.push([
                s,
                O,
                M
              ]), Zt.set(N, at), at;
            }, ce = new Yt({
              color: 0,
              linewidth: 2
            }), re = new Yt({
              color: 1118481,
              linewidth: 2
            });
            for (const s of At) {
              const O = s.Lz, M = s.Bz, N = s.t;
              let H = 0, at = 0;
              s.tipo === "esquinera" ? (H = s.x < u / 2 ? -(O / 2 - C) : O / 2 - C, at = s.y < c / 2 ? -(M / 2 - C) : M / 2 - C) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - u) < 1e-3 ? H = s.x < u / 2 ? -(O / 2 - C) : O / 2 - C : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - c) < 1e-3) && (at = s.y < c / 2 ? -(M / 2 - C) : M / 2 - C));
              const kt = s.x - H, Ct = s.y - at, jt = -f, Pt = O / i, Gt = M / i, rt = [];
              for (let Z = 0; Z <= i; Z++) {
                const et = [];
                for (let dt = 0; dt <= i; dt++) {
                  const Ft = kt - O / 2 + dt * Pt, yt = Ct - M / 2 + Z * Gt;
                  et.push(Wt(Ft, yt, jt));
                }
                rt.push(et);
              }
              for (let Z = 0; Z < i; Z++) for (let et = 0; et < i; et++) {
                const dt = X.length;
                X.push([
                  rt[Z][et],
                  rt[Z][et + 1],
                  rt[Z + 1][et + 1],
                  rt[Z + 1][et]
                ]), Et.set(dt, N), nt.set(dt, L), St.set(dt, m), Dt.set(dt, K), Y.set(dt, go);
              }
              const Qt = 0.5;
              for (let Z = 0; Z <= i; Z++) for (let et = 0; et <= i; et++) {
                const dt = Pt * Gt * (et === 0 || et === i ? 0.5 : 1) * (Z === 0 || Z === i ? 0.5 : 1), Ft = d * dt, yt = Ft * Qt, F = rt[Z][et];
                zo.push({
                  node: F,
                  dof: 0,
                  k: yt
                }), zo.push({
                  node: F,
                  dof: 1,
                  k: yt
                }), zo.push({
                  node: F,
                  dof: 2,
                  k: Ft
                }), zo.push({
                  node: F,
                  dof: 5,
                  k: Ft * 0.1
                });
              }
              const Ot = rt[0][0];
              Jt.set(Ot, [
                false,
                false,
                false,
                true,
                true,
                true
              ]);
              let b = 0, T = 0, v = 1 / 0;
              for (let Z = 0; Z <= i; Z++) for (let et = 0; et <= i; et++) {
                const dt = rt[Z][et], Ft = A[dt][0], yt = A[dt][1], F = Math.sqrt((Ft - s.x) ** 2 + (yt - s.y) ** 2);
                F < v && (v = F, b = Z, T = et);
              }
              const It = rt[b][T], bt = a.find((Z) => Z.idx === s.idx);
              Ut.set(It, [
                0,
                0,
                -bt.P_kN,
                bt.Mx_kN,
                bt.My_kN,
                0
              ]);
              const to = s.ratio;
              let mo = 4906624;
              if (to > 1.5 ? mo = 15680580 : to > 1 ? mo = 16096779 : to > 0.8 && (mo = 16498468), f > 1e-3) {
                const Z = new eo().setFromPoints([
                  new j(s.x, s.y, 0),
                  new j(s.x, s.y, -f)
                ]);
                pt.push(new Jo(Z, new Yt({
                  color: 6333946,
                  linewidth: 4
                }))), pt.push(Vt(`Df=${f.toFixed(2)}m`, s.x + 0.1, s.y + 0.1, -f / 2, "#60a5fa"));
              }
              {
                const Z = new Yt({
                  color: 11184810,
                  linewidth: 1,
                  transparent: true,
                  opacity: 0.6
                }), et = O / i, dt = M / i, Ft = [];
                for (let yt = 0; yt <= i; yt++) {
                  const F = -O / 2 + yt * et;
                  Ft.push(new j(kt + F, Ct - M / 2, -f), new j(kt + F, Ct + M / 2, -f));
                }
                for (let yt = 0; yt <= i; yt++) {
                  const F = -M / 2 + yt * dt;
                  Ft.push(new j(kt - O / 2, Ct + F, -f), new j(kt + O / 2, Ct + F, -f));
                }
                pt.push(new uo(new eo().setFromPoints(Ft), Z));
              }
              if ((t.mostrarLabelsZapatas ?? 1) >= 0.5) {
                const Z = bt.P_kN / 9.80665, et = bt.Mx_kN / 9.80665, dt = bt.My_kN / 9.80665;
                pt.push(Vt(`P=${Z.toFixed(2)} tonf`, s.x, s.y, 0.3, "#fbbf24")), pt.push(Vt(`Mx=${et.toFixed(2)}  My=${dt.toFixed(2)} tonf\xB7m`, s.x, s.y, 0.1, "#fbbf24")), pt.push(Vt(`${s.tipo[0].toUpperCase()} ${O.toFixed(2)}\xD7${M.toFixed(2)}\xD7${N.toFixed(2)}m \u03C3/q=${to.toFixed(2)}`, kt, Ct, -f - N - 0.2, to <= 1 ? "#4ade80" : to <= 1.5 ? "#f59e0b" : "#ef4444"));
              }
            }
            const qt = Math.round(t.sistemaCimentacion ?? 0);
            if (qt === 1) {
              const s = Math.round(t.vigaAmarre_pos ?? 0), O = t.vigaAmarre_h ?? 0.4, M = t.vigaAmarre_b ?? 0.25, N = M * O, H = M * O ** 3 / 12, at = O * M ** 3 / 12, kt = 0.21 * Math.pow(Math.min(M, O), 3) * Math.max(M, O), Ct = /* @__PURE__ */ new Map();
              for (const b of At) {
                let T;
                s === 0 ? T = -f : T = -f / 2;
                const v = Wt(b.x, b.y, T);
                if (Ct.set(b.idx, v), s === 1 && f > 1e-3) {
                  const lt = Wt(b.x, b.y, -f / 2), It = Wt(b.x, b.y, 0), bt = Wt(b.x, b.y, -f);
                }
              }
              const jt = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map();
              for (const b of a) {
                const T = b.y.toFixed(4), v = b.x.toFixed(4);
                jt.has(T) || jt.set(T, []), Pt.has(v) || Pt.set(v, []), jt.get(T).push(b), Pt.get(v).push(b);
              }
              const Gt = (b, T) => {
                const v = X.length;
                X.push([
                  b,
                  T
                ]), nt.set(v, wo), Dt.set(v, Co), St.set(v, ie), Tt.set(v, N), Bt.set(v, at), W.set(v, H), V.set(v, kt), Y.set(v, go);
              };
              let rt = 0;
              for (const b of jt.values()) {
                b.sort((T, v) => T.x - v.x);
                for (let T = 0; T < b.length - 1; T++) {
                  const v = Ct.get(b[T].idx), lt = Ct.get(b[T + 1].idx);
                  v !== void 0 && lt !== void 0 && (Gt(v, lt), rt++);
                }
              }
              for (const b of Pt.values()) {
                b.sort((T, v) => T.y - v.y);
                for (let T = 0; T < b.length - 1; T++) {
                  const v = Ct.get(b[T].idx), lt = Ct.get(b[T + 1].idx);
                  v !== void 0 && lt !== void 0 && (Gt(v, lt), rt++);
                }
              }
              const Qt = new Yt({
                color: 2282478,
                linewidth: 3
              }), Ot = [];
              for (const b of jt.values()) {
                const T = [
                  ...b
                ].sort((v, lt) => v.x - lt.x);
                for (let v = 0; v < T.length - 1; v++) {
                  const lt = T[v], It = T[v + 1], bt = s === 0 ? -f : -f / 2;
                  Ot.push(new j(lt.x, lt.y, bt)), Ot.push(new j(It.x, It.y, bt));
                }
              }
              for (const b of Pt.values()) {
                const T = [
                  ...b
                ].sort((v, lt) => v.y - lt.y);
                for (let v = 0; v < T.length - 1; v++) {
                  const lt = T[v], It = T[v + 1], bt = s === 0 ? -f : -f / 2;
                  Ot.push(new j(lt.x, lt.y, bt)), Ot.push(new j(It.x, It.y, bt));
                }
              }
              if (Ot.length > 0) {
                const b = new eo().setFromPoints(Ot);
                pt.push(new uo(b, Qt));
              }
              pt.push(Vt(`+${rt} vigas de amarre ${(M * 100).toFixed(0)}\xD7${(O * 100).toFixed(0)} cm @ ${s === 0 ? "zapatas" : "pedestales"}`, u / 2, c / 2, s === 1 ? -f / 2 + 0.3 : -f + 0.3, "#22d3ee")), console.log(`[Cimentaci\xF3n] Sistema 1 \u2014 ${rt} vigas de amarre ${(M * 100).toFixed(0)}\xD7${(O * 100).toFixed(0)} cm en posici\xF3n ${s === 0 ? "zapatas" : "pedestales"}`);
            } else qt >= 2 && (console.warn(`[Cimentaci\xF3n] Sistema ${qt} (${[
              "",
              "",
              "Vigas T invertida",
              "Vigas rect. + zapata corrida",
              "Losa de cimentaci\xF3n"
            ][qt]}) a\xFAn no implementado completamente. Mostrando zapatas aisladas. Pr\xF3ximamente: malla shell continua + frames T-invertida.`), pt.push(Vt(`Sistema ${qt} (TODO) \u2014 usando zapatas aisladas`, u / 2, c / 2, 1.5, "#fbbf24")));
            const $o = Math.round(t.sistemaCimentacion ?? 0), fo = 0.3, ao = Math.round(t.vigaAmarre_pos ?? 0), ho = /* @__PURE__ */ new Map();
            if ($o === 1) {
              const s = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
              for (const N of a) {
                const H = N.y.toFixed(4), at = N.x.toFixed(4);
                s.has(H) || s.set(H, []), O.has(at) || O.set(at, []), s.get(H).push(N), O.get(at).push(N);
              }
              const M = (N) => ho.set(N, (ho.get(N) ?? 0) + 1);
              for (const N of s.values()) {
                N.sort((H, at) => H.x - at.x);
                for (let H = 0; H < N.length - 1; H++) M(N[H].idx), M(N[H + 1].idx);
              }
              for (const N of O.values()) {
                N.sort((H, at) => H.y - at.y);
                for (let H = 0; H < N.length - 1; H++) M(N[H].idx), M(N[H + 1].idx);
              }
              console.log(`[Cimentaci\xF3n] Vigas de amarre activas \u2014 momentos en zapatas reducidos por factor (1 - ${fo} \xB7 n_vigas/4):`), ho.forEach((N, H) => {
                const at = (fo * N / 4 * 100).toFixed(0);
                console.log(`   Zapata ${H}: ${N} vigas conectadas \u2192 momento reducido ${at}%`);
              }), ao === 0 && console.log("   \u21B3 vigaAmarre_pos=0 (mismo nivel zapata) \u2192 en F2K se exportar\xE1 como cimentaci\xF3n corrida con ks\xB7b\xB7dL distribuido por nodo");
            }
            const vt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map();
            for (const s of At) {
              const O = a.find((F) => F.idx === s.idx), M = s.Lz, N = s.Bz, H = s.t;
              let at = 0, kt = 0;
              s.tipo === "esquinera" ? (at = s.x < u / 2 ? -(M / 2 - C) : M / 2 - C, kt = s.y < c / 2 ? -(N / 2 - C) : N / 2 - C) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - u) < 1e-3 ? at = s.x < u / 2 ? -(M / 2 - C) : M / 2 - C : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - c) < 1e-3) && (kt = s.y < c / 2 ? -(N / 2 - C) : N / 2 - C));
              const Ct = s.x - at, jt = s.y - kt, Pt = [], Gt = [], rt = {
                elasticities: /* @__PURE__ */ new Map(),
                shearModuli: /* @__PURE__ */ new Map(),
                poissonsRatios: /* @__PURE__ */ new Map(),
                thicknesses: /* @__PURE__ */ new Map(),
                densities: /* @__PURE__ */ new Map()
              }, Qt = M / i, Ot = N / i, b = [], T = [];
              for (let F = 0; F <= i; F++) {
                const st = [];
                for (let ft = 0; ft <= i; ft++) {
                  const zt = -M / 2 + ft * Qt, wt = -N / 2 + F * Ot;
                  st.push(Pt.length), Pt.push([
                    zt,
                    wt,
                    0
                  ]);
                  const Ao = Ct + zt, To = jt + wt, Bo = Rt(Ao, To, -f), io = Zt.get(Bo);
                  io !== void 0 ? T.push(io) : T.push(-1);
                }
                b.push(st);
              }
              for (let F = 0; F < i; F++) for (let st = 0; st < i; st++) {
                const ft = Gt.length;
                Gt.push([
                  b[F][st],
                  b[F][st + 1],
                  b[F + 1][st + 1],
                  b[F + 1][st]
                ]), rt.thicknesses.set(ft, H), rt.elasticities.set(ft, L), rt.poissonsRatios.set(ft, m), rt.shearModuli.set(ft, K), rt.densities.set(ft, go);
              }
              const v = [], lt = 0.5;
              for (let F = 0; F <= i; F++) for (let st = 0; st <= i; st++) {
                const ft = Qt * Ot * (st === 0 || st === i ? 0.5 : 1) * (F === 0 || F === i ? 0.5 : 1), zt = d * ft, wt = b[F][st];
                v.push({
                  node: wt,
                  dof: 0,
                  k: zt * lt
                }), v.push({
                  node: wt,
                  dof: 1,
                  k: zt * lt
                }), v.push({
                  node: wt,
                  dof: 2,
                  k: zt
                });
              }
              if ($o === 1 && ao === 0) {
                const F = t.vigaAmarre_b ?? 0.25, st = s.idx, ft = a.filter((ut) => Math.abs(ut.y - s.y) < 1e-3 && ut.idx !== st).sort((ut, So) => ut.x - So.x), zt = a.filter((ut) => Math.abs(ut.x - s.x) < 1e-3 && ut.idx !== st).sort((ut, So) => ut.y - So.y), wt = ft.find((ut) => ut.x > s.x), Ao = [
                  ...ft
                ].reverse().find((ut) => ut.x < s.x), To = zt.find((ut) => ut.y > s.y), Bo = [
                  ...zt
                ].reverse().find((ut) => ut.y < s.y), io = (ut, So) => {
                  const le = So / 2;
                  for (let oo = 0; oo <= i; oo++) {
                    const Ve = oo === 0 || oo === i ? le / (2 * i) : le / i, de = d * F * Ve, fe = de * lt;
                    let co;
                    switch (ut) {
                      case "x+":
                        co = b[oo][i];
                        break;
                      case "x-":
                        co = b[oo][0];
                        break;
                      case "y+":
                        co = b[i][oo];
                        break;
                      case "y-":
                        co = b[0][oo];
                        break;
                    }
                    v.push({
                      node: co,
                      dof: 0,
                      k: fe
                    }), v.push({
                      node: co,
                      dof: 1,
                      k: fe
                    }), v.push({
                      node: co,
                      dof: 2,
                      k: de
                    });
                  }
                };
                wt && io("x+", wt.x - s.x), Ao && io("x-", s.x - Ao.x), To && io("y+", To.y - s.y), Bo && io("y-", s.y - Bo.y);
              }
              const It = d * Qt * Ot * 1e-4;
              v.push({
                node: b[0][0],
                dof: 3,
                k: It
              }), v.push({
                node: b[0][0],
                dof: 4,
                k: It
              }), v.push({
                node: b[0][0],
                dof: 5,
                k: It
              });
              const bt = -at, to = -kt;
              let mo = 0, Go = 0, Z = 1 / 0;
              for (let F = 0; F <= i; F++) for (let st = 0; st <= i; st++) {
                const ft = -M / 2 + st * Qt, zt = -N / 2 + F * Ot, wt = (ft - bt) ** 2 + (zt - to) ** 2;
                wt < Z && (Z = wt, mo = F, Go = st);
              }
              const et = b[mo][Go], dt = /* @__PURE__ */ new Map(), Ft = ho.get(s.idx) ?? 0, yt = $o === 1 ? Math.max(0.4, 1 - fo * Ft / 4) : 1;
              dt.set(et, [
                0,
                0,
                -O.P_kN,
                O.Mx_kN * yt,
                O.My_kN * yt,
                0
              ]);
              try {
                const st = he(Pt, Gt, {
                  supports: /* @__PURE__ */ new Map(),
                  loads: dt
                }, rt, v).deformations;
                for (let ft = 0; ft < Pt.length; ft++) {
                  const zt = T[ft];
                  if (zt >= 0) {
                    const wt = st.get(ft);
                    wt && vt.set(zt, [
                      ...wt
                    ]);
                  }
                }
              } catch (F) {
                console.warn(`[Zapata ${s.idx}] solver fall\xF3:`, F);
              }
            }
            for (let s = 0; s < X.length; s++) {
              const O = X[s];
              if (O.length !== 4) continue;
              const M = [];
              for (const N of O) {
                const H = vt.get(N);
                M.push(d * (H ? H[2] : 0) / 9.80665);
              }
              _t.set(s, M);
            }
            e.nodes.val = A, e.elements.val = X, e.nodeInputs.val = {
              supports: Jt,
              loads: Ut
            }, e.elementInputs.val = {
              elasticities: nt,
              shearModuli: Dt,
              areas: Tt,
              momentsOfInertiaZ: Bt,
              momentsOfInertiaY: W,
              torsionalConstants: V,
              densities: Y,
              poissonsRatios: St,
              thicknesses: Et
            }, e.deformOutputs.val = {
              deformations: vt,
              reactions: /* @__PURE__ */ new Map()
            }, e.analyzeOutputs.val = {
              pressure: _t,
              colorMapRanges: {
                pressure: [
                  0,
                  -k
                ]
              }
            }, e.objects3D.val = pt, console.log(`[Modo Cimentaci\xF3n] ${a.length} zapatas + pedestales (Hf=${f} m, t=${ot} m, q_adm=${k} tonf/m\xB2, ks=${d} kN/m\xB3) \u2014 reemplaza superestructura`);
            try {
              const s = () => {
                var _a2;
                const M = (_a2 = document.querySelector("#viewer")) == null ? void 0 : _a2.__settings;
                M && (M.shellResults && (M.shellResults.val = "pressure"), M.deformedShape && (M.deformedShape.val = false), M.deformScale && (M.deformScale.val = 5), M.frameResults && (M.frameResults.val = "none"), M.custom3D && (M.custom3D.val = true));
              };
              [
                0,
                100,
                300
              ].forEach((O) => setTimeout(s, O));
            } catch {
            }
            return;
          }
        }
      } catch (o) {
        console.warn("[Modo Cimentaci\xF3n] error:", o);
      }
      e.objects3D.val = jo;
    },
    runModal(t, e, P) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const l = e.nodes.val, x = e.elements.val, r = e.nodeInputs.val, h = e.elementInputs.val;
      if (!(!l.length || !x.length || !((_a = r.supports) == null ? void 0 : _a.size) || !((_b = h.densities) == null ? void 0 : _b.size))) try {
        const z = [], L = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
        let _ = 0, w = 0;
        const y = [];
        let B = 0;
        for (let I = 0; I < x.length; I++) {
          const D = x[I];
          let Lt = false, ro = false;
          if (D.length === 4) {
            const Nt = D.map((so) => l[so][2]);
            if (Math.max(...Nt) - Math.min(...Nt) < 0.02) {
              const so = l[D[0]][0], po = l[D[0]][1], Mo = l[D[2]][0], xo = l[D[2]][1], Do = Math.abs((Mo - so) * (xo - po)), lo = ((_c = h.thicknesses) == null ? void 0 : _c.get(I)) ?? 0.15, ko = ((_d = h.densities) == null ? void 0 : _d.get(I)) ?? 24;
              _ += ko * Do * lo, Lt = true;
            }
          } else if (D.length === 2) {
            const Nt = l[D[0]][2], tt = l[D[1]][2], so = Math.sqrt((l[D[1]][0] - l[D[0]][0]) ** 2 + (l[D[1]][1] - l[D[0]][1]) ** 2);
            if (Math.abs(tt - Nt) > so) {
              ro = true;
              const po = Math.abs(tt - Nt), Mo = ((_e = h.areas) == null ? void 0 : _e.get(I)) ?? 0, xo = ((_f = h.densities) == null ? void 0 : _f.get(I)) ?? 24;
              w += xo * Mo * po;
            }
          }
          Lt || (z.push(D), ((_g = h.areas) == null ? void 0 : _g.has(I)) && L.set(B, h.areas.get(I)), ((_h = h.momentsOfInertiaY) == null ? void 0 : _h.has(I)) && S.set(B, h.momentsOfInertiaY.get(I)), ((_i = h.momentsOfInertiaZ) == null ? void 0 : _i.has(I)) && m.set(B, h.momentsOfInertiaZ.get(I)), ((_j = h.torsionalConstants) == null ? void 0 : _j.has(I)) && g.set(B, h.torsionalConstants.get(I)), ((_k = h.elasticities) == null ? void 0 : _k.has(I)) && K.set(B, h.elasticities.get(I)), ((_l = h.shearModuli) == null ? void 0 : _l.has(I)) && J.set(B, h.shearModuli.get(I)), ((_m = h.densities) == null ? void 0 : _m.has(I)) && G.set(B, h.densities.get(I)), ((_n = h.thicknesses) == null ? void 0 : _n.has(I)) && it.set(B, h.thicknesses.get(I)), ((_o = h.poissonsRatios) == null ? void 0 : _o.has(I)) && R.set(B, h.poissonsRatios.get(I)), ro && y.push(B), B++);
        }
        if (_ > 0 && w > 0 && y.length > 0) {
          const I = 1 + _ / w;
          for (const D of y) {
            const Lt = G.get(D) ?? 24;
            G.set(D, Lt * I);
          }
        }
        const Q = {
          areas: L,
          momentsOfInertiaY: S,
          momentsOfInertiaZ: m,
          torsionalConstants: g,
          elasticities: K,
          shearModuli: J,
          densities: G,
          thicknesses: it,
          poissonsRatios: R
        }, ct = Math.round(t.nPisos), p = Math.min(60, Math.max(15, 3 * ct + 6)), q = Ae(l, z, r, Q, p), E = Math.round(t.nVanosX), Mt = Math.round(t.nVanosY), mt = Math.round(t.nPisos), $t = w > 0 ? 1 + _ / w : 1;
        P.render(q, {
          title: `Edificio ${E}\xD7${Mt} vanos \xD7 ${mt} pisos \xB7 ${p} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${$t.toFixed(2)} dens cols, ${_.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const gt = q.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${p} modos \xB7 f\u2081=${gt.toFixed(4)} Hz \xB7 m_slab=${_.toFixed(0)} m_cols=${w.toFixed(0)} factor=${$t.toFixed(2)}`);
      } catch (z) {
        console.warn("Modal edificio error:", z.message);
      }
    }
  };
});
export {
  __tla,
  is as e,
  as as f
};
