import { a as Ae } from "./analyze-DNPn2SjO.js";
import { m as Ne, d as he, __tla as __tla_0 } from "./didacticCpp-CLixJGob.js";
import { o as Te, p as me, q as Be, r as De, L as Yt, B as eo, V as j, a as Jo, S as Ye, e as qe, d as Do, M as Go, b as He, c as uo, E as Re, s as Ze, D as je } from "./Text-BmY6zyQy.js";
let is, as;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function It(t, e, P, l, _ = "#00e5ff") {
    const m = document.createElement("canvas"), g = m.getContext("2d");
    g.font = "bold 96px system-ui, -apple-system, sans-serif";
    const K = Math.ceil(g.measureText(t).width);
    m.width = K + 32 * 2, m.height = 96 + 32 * 2, g.font = "bold 96px system-ui, -apple-system, sans-serif", g.fillStyle = "rgba(0,0,0,0.75)";
    const J = m.height / 2;
    g.beginPath(), g.moveTo(J, 0), g.arcTo(m.width, 0, m.width, J, J), g.arcTo(m.width, m.height, m.width - J, m.height, J), g.arcTo(0, m.height, 0, m.height - J, J), g.arcTo(0, 0, J, 0, J), g.closePath(), g.fill(), g.fillStyle = _, g.textBaseline = "middle", g.fillText(t, 32, m.height / 2);
    const X = new Te(m);
    X.minFilter = me, X.magFilter = me, X.anisotropy = 16, X.needsUpdate = true;
    const ct = new Be({
      map: X,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), R = new De(ct);
    R.position.set(e, P, l);
    const v = 0.45, C = m.width / m.height;
    return R.scale.set(v * C, v, 1), R.userData.isCota = true, R;
  }
  function Gt(t, e, P = 58879) {
    const l = new Yt({
      color: P,
      depthTest: false
    }), _ = new eo().setFromPoints([
      new j(...t),
      new j(...e)
    ]), r = new Jo(_, l);
    return r.renderOrder = 999, r.userData.isCota = true, r;
  }
  function Xe(t, e, P) {
    const l = [], _ = e[e.length - 1] + 1, r = t[t.length - 1] + 1, h = P[0];
    for (let S = 0; S < t.length - 1; S++) {
      const m = t[S], g = t[S + 1], K = g - m;
      l.push(Gt([
        m,
        _,
        h
      ], [
        g,
        _,
        h
      ])), l.push(Gt([
        m,
        _ - 0.15,
        h
      ], [
        m,
        _ + 0.15,
        h
      ])), l.push(Gt([
        g,
        _ - 0.15,
        h
      ], [
        g,
        _ + 0.15,
        h
      ])), l.push(It(`${K.toFixed(2)} m`, (m + g) / 2, _ + 0.35, h));
    }
    for (let S = 0; S < e.length - 1; S++) {
      const m = e[S], g = e[S + 1], K = g - m;
      l.push(Gt([
        r,
        m,
        h
      ], [
        r,
        g,
        h
      ])), l.push(Gt([
        r - 0.15,
        m,
        h
      ], [
        r + 0.15,
        m,
        h
      ])), l.push(Gt([
        r - 0.15,
        g,
        h
      ], [
        r + 0.15,
        g,
        h
      ])), l.push(It(`${K.toFixed(2)} m`, r + 0.35, (m + g) / 2, h));
    }
    const $ = t[0] - 1, F = e[0];
    for (let S = 0; S < P.length - 1; S++) {
      const m = P[S], g = P[S + 1], K = g - m;
      l.push(Gt([
        $,
        F,
        m
      ], [
        $,
        F,
        g
      ])), l.push(Gt([
        $ - 0.15,
        F,
        m
      ], [
        $ + 0.15,
        F,
        m
      ])), l.push(Gt([
        $ - 0.15,
        F,
        g
      ], [
        $ + 0.15,
        F,
        g
      ])), l.push(It(`Piso ${S + 1}: ${K.toFixed(2)} m`, $ - 0.5, F, (m + g) / 2));
    }
    return l;
  }
  function ue(t, e = 0.5) {
    const P = Ge(e), l = t / P;
    let _ = Math.max(2, Math.round(l));
    return t / _ > P * 1.25 && (_ = Math.ceil(l)), {
      n: _,
      dx: t / _
    };
  }
  function Ge(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const Ke = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function Je(t, e, P = {}) {
    const l = P.tol ?? 1e-5, _ = 0, r = [], h = [], $ = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, F = 1e8, S = 1e4, m = 1e4, g = 2 * m, K = F / (2 * (1 + 0.3));
    for (const J of e) {
      const X = [];
      let ct = 0, R = 0;
      for (let B = 0; B < t.length; B++) Math.abs(t[B][2] - J) < l && (X.push(B), ct += t[B][0], R += t[B][1]);
      if (X.length < 2) continue;
      const v = ct / X.length, C = R / X.length, y = t.length + r.length;
      r.push({
        idx: y,
        z: J,
        x: v,
        y: C
      });
      for (const B of X) {
        h.push([
          y,
          B
        ]);
        const Q = _ + h.length - 1;
        $.areas.set(Q, S), $.momentsOfInertiaY.set(Q, m), $.momentsOfInertiaZ.set(Q, m), $.torsionalConstants.set(Q, g), $.elasticities.set(Q, F), $.shearModuli.set(Q, K), $.densities.set(Q, 0);
      }
    }
    return P.linkStiffness, {
      masterNodes: r,
      rigidLinks: h,
      linkProps: $
    };
  }
  function Ue(t, e, P) {
    const l = (_, r) => {
      _.forEach((h, $) => r.set($ + P, h));
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
    const _ = Math.sqrt(12 * e / t) / 2;
    return e / _ * P;
  }
  function Qe(t, e, P, l, _, r, h, $ = {}) {
    var _a, _b;
    const F = $.Fy_steel ?? 345e3;
    $.fc_concrete;
    const S = $.Fy_rebar ?? 42e4, m = $.omega ?? 0.15, g = $.phi ?? 0.9, K = _ < 0.5 ? g * m * S * (1 - 0.59 * m) : g * F, J = r < 0.5 ? g * m * S * (1 - 0.59 * m) : g * F, X = P.frameBendingMoments, ct = [];
    for (let R = 0; R < e.length; R++) {
      const v = e[R];
      if (v.length !== 2) continue;
      const [C, y] = v, B = h.has(R);
      let Q = 0, rt = 0;
      const M = X == null ? void 0 : X.get(R);
      M && (Q = M.Mi, rt = M.Mj);
      const D = ((_a = l.areas) == null ? void 0 : _a.get(R)) ?? 0.16, E = ((_b = l.momentsOfInertiaZ) == null ? void 0 : _b.get(R)) ?? 213e-5, mt = We(D, E, B ? K : J), $t = Q / mt, gt = rt / mt;
      ct.push({
        nodeIdx: C,
        elementIdx: R,
        end: "i",
        classification: ge($t)
      }), ct.push({
        nodeIdx: y,
        elementIdx: R,
        end: "j",
        classification: ge(gt)
      });
    }
    return ct;
  }
  function ts(t, e, P, l = {}) {
    const _ = l.showElastic ?? false, r = (l.radiusFactor ?? 0.02) * P, h = [], $ = new Ye(r, 12, 8);
    for (const F of t) {
      if (!_ && F.classification.state === "Elastic") continue;
      const S = e[F.nodeIdx];
      if (!S) continue;
      const m = new qe({
        color: F.classification.color,
        transparent: true,
        opacity: 0.85
      }), g = new Do($, m);
      g.position.set(S[0], S[1], S[2]), g.userData = {
        hingeState: F.classification.state,
        ratio: F.classification.ratio.toFixed(3),
        element: F.elementIdx,
        end: F.end
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
  function pe(t, e, P, l, _ = 0.01) {
    const r = Math.abs(t) < _, h = Math.abs(t - P) < _, $ = Math.abs(e) < _, F = Math.abs(e - l) < _, S = [
      r,
      h,
      $,
      F
    ].filter(Boolean).length;
    return S >= 2 ? "esquinera" : S === 1 ? "lindero" : "central";
  }
  function Me(t) {
    const { P_kN: e, Mx_kN: P, My_kN: l, tipo: _, q_adm_tonf: r, ks: h } = t, $ = t.Lz_min ?? 1, F = t.Lz_max ?? 4, S = t.t_min ?? 0.3;
    if (e <= 0) return {
      tipo: _,
      Lz: $,
      Bz: $,
      t: S,
      A: $ ** 2,
      ex: 0,
      ey: 0,
      sigmaMax_tonf: 0,
      sigmaMin_tonf: 0,
      ratio: 0,
      fueraKern: false,
      status: "UPLIFT"
    };
    const m = r * Ko, g = Math.abs(l / e), K = Math.abs(P / e), J = m * 0.95;
    let X = Math.max($, Math.sqrt(e / m)), ct = X, R = 1 / 0, v = 0, C = false;
    for (let D = 0; D < 50 && X <= F; D++) {
      const E = _ === "esquinera" ? 0.3 : _ === "lindero" ? 0.2 : 0, Mt = X + E, mt = ct + E, $t = Mt * mt, gt = Math.max(g, K), V = gt === g ? Mt : mt;
      if (C = gt > V / 6, !C) R = e / $t * (1 + 6 * gt / V), v = e / $t * (1 - 6 * gt / V);
      else {
        const q = 1.5 * V - 3 * gt, Ft = gt === g ? mt : Mt;
        R = 2 * e / (Ft * Math.max(q, 0.01)), v = 0;
      }
      if (R <= J) break;
      X += 0.05, ct += 0.05;
    }
    const y = X * ct, B = Math.max(S, X / 6), Q = R / m, rt = Q <= 1 ? "OK" : "OVERSTRESS";
    let M;
    return h && h > 0 && (M = R / h * 1e3), {
      tipo: _,
      Lz: X,
      Bz: ct,
      t: B,
      A: y,
      ex: g,
      ey: K,
      sigmaMax_tonf: R / Ko,
      sigmaMin_tonf: v / Ko,
      ratio: Q,
      delta_mm: M,
      fueraKern: C,
      status: rt
    };
  }
  function Yo(t, e, P, l, _) {
    return t.map((r) => {
      const h = pe(r.x, r.y, e, P);
      return {
        ...Me({
          P_kN: r.P_kN,
          Mx_kN: r.Mx_kN,
          My_kN: r.My_kN,
          tipo: h,
          q_adm_tonf: l,
          ks: _
        }),
        idx: r.idx,
        x: r.x,
        y: r.y
      };
    });
  }
  let xe, go, p, nt;
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
  p = (t, e, P, l, _, r) => ({
    default: P,
    min: l,
    max: _,
    step: r,
    label: e,
    folder: t
  });
  nt = (t, e, P, l) => ({
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
        ...p("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...p("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...p("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: p("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: p("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: p("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: p("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: p("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: p("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: p("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: p("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: p("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: nt("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: nt("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: nt("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: p("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: p("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: p("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: p("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: p("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      nDivBeam: p("Mesh", "Div. Vigas (segmentos)", 1, 1, 8, 1),
      nDivCol: p("Mesh", "Div. Columnas (segmentos)", 1, 1, 8, 1),
      vigSecActivar: {
        ...nt("Vigas Secundarias", "Activar", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      vigSecDir: nt("Vigas Secundarias", "Corren en", 0, {
        "X (entre ejes Y)": 0,
        "Y (entre ejes X)": 1
      }),
      vigSecCantidad: p("Vigas Secundarias", "Cantidad/vano", 2, 1, 5, 1),
      vigSecB: p("Vigas Secundarias", "b sec (m)", 0.2, 0.1, 0.4, 0.05),
      vigSecH: p("Vigas Secundarias", "h sec (m)", 0.3, 0.2, 0.6, 0.05),
      losaActivar: {
        ...nt("Losas de Piso", "Activar losas", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      losaEspesor: p("Losas de Piso", "Espesor (m)", 0.15, 0.08, 0.4, 0.01),
      losaSubdivX: p("Losas de Piso", "Subdiv. X", 2, 1, 6, 1),
      losaSubdivY: p("Losas de Piso", "Subdiv. Y", 2, 1, 6, 1),
      muroActivar: {
        ...nt("Muros de Corte", "Activar", 0, {
          No: 0,
          Perimetrales: 1,
          "Centro X": 2,
          "Centro Y": 3,
          "Doble central": 4
        }),
        regenOnChange: true
      },
      muroEspesor: p("Muros de Corte", "Espesor (m)", 0.2, 0.1, 0.4, 0.01),
      muroSubdivV: p("Muros de Corte", "Subdiv. V (vert)", 2, 1, 6, 1),
      muroSubdivH: p("Muros de Corte", "Subdiv. H (horiz)", 2, 1, 6, 1),
      apoyo: nt("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: p("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: p("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: p("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: p("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      loadCase: nt("Cargas", "Caso de carga", 0, {
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
      modoCimentacion: nt("Cimentaci\xF3n", "\u{1F518} Vista (toggle)", 0, {
        "\u{1F3E2} Edificio completo (ver/editar)": 0,
        "\u{1FAA8} Solo cimentaci\xF3n (P,Mx,My)": 1
      }),
      q_adm_zapata: p("Cimentaci\xF3n", "q_adm (tonf/m\xB2)", 10, 1, 100, 1),
      ks_zapata: p("Cimentaci\xF3n", "ks (kN/m\xB3)", 1030, 100, 2e5, 10),
      Hf_pedestal: p("Cimentaci\xF3n", "Df col enterrada (m) (m)", 0.5, 0, 3, 0.05),
      t_zapata: p("Cimentaci\xF3n", "t zapata (m)", 0.3, 0.1, 1.5, 0.05),
      nSubZapata: p("Cimentaci\xF3n", "Subdiv. Q4 zapata", 4, 2, 12, 1),
      voladoExtra: p("Cimentaci\xF3n", "Volado extra esq./lin (m)", 0.3, 0, 1, 0.05),
      tipoZapataOverride: nt("Cimentaci\xF3n", "Tipo (override)", 0, {
        "Auto (por posici\xF3n)": 0,
        "Todas central": 1,
        "Todas lindero": 2,
        "Todas esquinera": 3
      }),
      mostrarZapatas: nt("Cimentaci\xF3n", "Mostrar zapatas 3D", 0, {
        On: 1,
        Off: 0
      }),
      mostrarLabelsZapatas: nt("Cimentaci\xF3n", "Mostrar etiquetas zapatas", 1, {
        On: 1,
        Off: 0
      }),
      estiloZapata: nt("Cimentaci\xF3n", "Estilo render", 1, {
        "S\xF3lido (caja transl\xFAcida)": 0,
        "Shellthick (Q4 + grilla)": 1
      }),
      sistemaCimentacion: nt("Cimentaci\xF3n", "Sistema cim.", 0, {
        "Zapatas aisladas": 0,
        "Zapatas + vigas de amarre": 1,
        "Vigas T invertida (corrida)": 2,
        "Vigas rect. + zapata corrida": 3,
        "Losa de cimentaci\xF3n (raft)": 4
      }),
      vigaAmarre_pos: nt("Cimentaci\xF3n", "Viga amarre \u2014 posici\xF3n", 0, {
        "Unida a zapatas (z=-Hf)": 0,
        "Conectada a pedestales (-Hf/2)": 1
      }),
      vigaAmarre_h: p("Cimentaci\xF3n", "Viga amarre h (m)", 0.4, 0.2, 1, 0.05),
      vigaAmarre_b: p("Cimentaci\xF3n", "Viga amarre b (m)", 0.25, 0.15, 0.6, 0.05),
      vigaCim_h: p("Cimentaci\xF3n", "Viga cim. h (m)", 0.8, 0.3, 2, 0.05),
      vigaCim_bw: p("Cimentaci\xF3n", "Viga cim. b alma (m)", 0.4, 0.2, 1, 0.05),
      vigaCim_bf: p("Cimentaci\xF3n", "Viga cim. b ala (m)", 1.2, 0.4, 3, 0.1),
      vigaCim_tf: p("Cimentaci\xF3n", "Viga cim. e ala (m)", 0.3, 0.1, 0.8, 0.05),
      nSubViga: p("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: p("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: nt("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: p("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: nt("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: nt("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: nt("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: p("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabType: nt("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: nt("Avanzado", "Discretizaci\xF3n losa", 0.5, Ke),
      diafragmaRigido: nt("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      }),
      massSource: nt("Avanzado", "Mass Source", 0, {
        "Self-weight (peso propio)": 0,
        "From Loads (DEAD+0.25\xB7LIVE) ETABS": 1
      }),
      qDead: p("Avanzado", "qDead losa (kN/m\xB2)", 3.5, 0.5, 10, 0.5),
      qLive: p("Avanzado", "qLive losa (kN/m\xB2)", 1.5, 0, 6, 0.5),
      crackedSections: nt("Avanzado", "Cracked Sections (ACI 318)", 0, {
        "Off (secci\xF3n bruta Ig)": 0,
        "On: 0.7\xB7Ig col / 0.35\xB7Ig viga / 0.25\xB7Ig losa": 1
      })
    },
    dynamicParams(t) {
      const e = {}, P = Math.round(t.nPisos ?? 3), l = Math.round(t.nVanosX ?? 2), _ = Math.round(t.nVanosY ?? 2);
      for (let r = 1; r <= P; r++) e[`hP_${r}`] = p("Alturas por piso", `h Piso ${r} (m)`, 0, 0, 6, 0.1), e[`colB_p${r}`] = p("Secciones por piso", `b col P${r} (m)`, 0, 0, 1, 0.05), e[`colH_p${r}`] = p("Secciones por piso", `h col P${r} (m)`, 0, 0, 1, 0.05), e[`vigaB_p${r}`] = p("Secciones por piso", `b viga P${r} (m)`, 0, 0, 0.8, 0.05), e[`vigaH_p${r}`] = p("Secciones por piso", `h viga P${r} (m)`, 0, 0, 1, 0.05);
      for (let r = 1; r <= l; r++) e[`svX_${r}`] = p("Luces por vano", `svX #${r} (m)`, 0, 0, 12, 0.5);
      for (let r = 1; r <= _; r++) e[`svY_${r}`] = p("Luces por vano", `svY #${r} (m)`, 0, 0, 12, 0.5);
      return e;
    },
    computedLabels(t, e) {
      var _a;
      const l = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions, _ = e.nodes.rawVal;
      if (!l || !(_ == null ? void 0 : _.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let r = 0, h = 0, $ = 0, F = -1, S = 0, m = -1;
      const g = [];
      let K = 0, J = 0;
      l.forEach((Q, rt) => {
        const M = _[rt];
        if (!M || Math.abs(M[2]) > 1e-6) return;
        const D = Q[2], E = Q[3], Mt = Q[4];
        Math.abs(D) > Math.abs(r) && (r = D, F = rt, M[0], M[1]), D > 0 && D > Math.abs(S) && (S = D, m = rt), Math.abs(E) > Math.abs(h) && (h = E), Math.abs(Mt) > Math.abs($) && ($ = Mt), g.push({
          idx: rt,
          x: M[0],
          y: M[1],
          P_kN: Math.abs(D),
          Mx_kN: E,
          My_kN: Mt
        }), M[0] > K && (K = M[0]), M[1] > J && (J = M[1]);
      });
      const X = Math.abs(r) / 9.80665, ct = Math.abs(h) / 9.80665, R = Math.abs($) / 9.80665, v = S / 9.80665, C = Math.round(t.nPisos), y = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${X.toFixed(2)} tonf (nodo ${F})`,
        Mx: `${ct.toFixed(2)} tonf\xB7m`,
        My: `${R.toFixed(2)} tonf\xB7m`
      };
      if (v > 0.01 && (y["\u26A0 Uplift"] = `${v.toFixed(2)} tonf (nodo ${m})`), y.Pisos = `${C}`, y["Copiar a \u2192 zapata-aislada"] = `P=${X.toFixed(1)}, Mx=${ct.toFixed(1)}, My=${R.toFixed(1)}`, g.length > 0 && K > 0 && J > 0) {
        const Q = t.q_adm_zapata ?? 10, rt = t.ks_zapata ?? 1030;
        try {
          const M = Yo(g, K, J, Q, rt);
          let D = 0, E = 0, Mt = 0, mt = 0, $t = -1, gt = "", V = 0, q = 0;
          for (const tt of M) tt.tipo === "esquinera" ? D++ : tt.tipo === "lindero" ? E++ : Mt++, tt.sigmaMax_tonf > mt && (mt = tt.sigmaMax_tonf, $t = tt.idx, gt = tt.tipo), tt.status === "OK" && V++, tt.Lz > q && (q = tt.Lz);
          y["\u2500\u2500 Cimentaci\xF3n (auto) \u2500\u2500"] = "", y["Tipos zapata"] = `${D} esquineras, ${E} linderas, ${Mt} centrales`, y["\u03C3_max global"] = `${mt.toFixed(2)} tonf/m\xB2 (nodo ${$t}, ${gt})`, y["\u03C3/q_adm"] = `${(mt / Q).toFixed(2)}` + (mt / Q <= 1 ? " \u2713" : " \u26A0"), y["Lz m\xE1x zapata"] = `${q.toFixed(2)} m`, y.Cumplen = `${V}/${M.length}` + (V === M.length ? " \u2713" : " \u26A0");
          const Ft = t.Hf_pedestal ?? 0.5, ro = t.t_zapata ?? 0.3, At = Math.round(t.nSubZapata ?? 4);
          y["Df col enterrada"] = `${Ft.toFixed(2)} m` + (Ft < 1e-3 ? " (sin pedestal)" : ""), y["t zapata"] = `${ro.toFixed(2)} m`, y["Subdiv. Q4"] = `${At}\xD7${At}`, y["Volado extra"] = `${(t.voladoExtra ?? 0.3).toFixed(2)} m`;
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
      const P = Math.round(t.nVanosX), l = Math.round(t.nVanosY), _ = Math.round(t.nPisos), r = Math.max(1, Math.round(t.nSubViga)), h = Math.max(1, Math.round(t.nSubCol)), $ = t.fcConcr * 0.0981, F = 4700 * Math.sqrt($) * 1e3, S = 2e8, m = 0.2, g = 0.3, K = F / (2 * (1 + m)), J = S / (2 * (1 + g)), X = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, P).map((o) => o > 0 ? o : t.spanX), ct = [
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
      ].slice(0, _).map((o) => o > 0 ? o : t.hPiso), v = [];
      t.Lvix > 0 && v.push(-t.Lvix), v.push(0);
      for (let o = 0; o < P; o++) v.push(v[v.length - 1] + X[o]);
      t.Lvdx > 0 && v.push(v[v.length - 1] + t.Lvdx);
      const C = [];
      t.Lviy > 0 && C.push(-t.Lviy), C.push(0);
      for (let o = 0; o < l; o++) C.push(C[C.length - 1] + ct[o]);
      t.Lvdy > 0 && C.push(C[C.length - 1] + t.Lvdy);
      const y = [
        0
      ];
      for (let o = 0; o < _; o++) y.push(y[y.length - 1] + R[o]);
      const B = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === v.length - 1, Q = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === C.length - 1, rt = (o, n) => B(o) || Q(n), M = [], D = {};
      for (let o = 0; o < y.length; o++) for (let n = 0; n < C.length; n++) for (let a = 0; a < v.length; a++) o === 0 && rt(a, n) || (D[`${a},${n},${o}`] = M.length, M.push([
        v[a],
        C[n],
        y[o]
      ]));
      const E = [], Mt = /* @__PURE__ */ new Set(), mt = /* @__PURE__ */ new Set(), $t = /* @__PURE__ */ new Set(), gt = /* @__PURE__ */ new Map(), V = (o, n, a, u, c) => {
        if (a <= 1) {
          u.add(E.length), gt.set(E.length, c), E.push([
            o,
            n
          ]);
          return;
        }
        const k = M[o], d = M[n];
        let f = o;
        for (let ot = 1; ot < a; ot++) {
          const i = ot / a, z = M.length;
          M.push([
            k[0] + (d[0] - k[0]) * i,
            k[1] + (d[1] - k[1]) * i,
            k[2] + (d[2] - k[2]) * i
          ]), u.add(E.length), gt.set(E.length, c), E.push([
            f,
            z
          ]), f = z;
        }
        u.add(E.length), gt.set(E.length, c), E.push([
          f,
          n
        ]);
      };
      for (let o = 0; o < y.length - 1; o++) for (let n = 0; n < C.length; n++) for (let a = 0; a < v.length; a++) rt(a, n) || V(D[`${a},${n},${o}`], D[`${a},${n},${o + 1}`], h, Mt, o);
      for (let o = 1; o < y.length; o++) for (let n = 0; n < C.length; n++) for (let a = 0; a < v.length - 1; a++) V(D[`${a},${n},${o}`], D[`${a + 1},${n},${o}`], r, mt, o - 1);
      for (let o = 1; o < y.length; o++) for (let n = 0; n < v.length; n++) for (let a = 0; a < C.length - 1; a++) V(D[`${n},${a},${o}`], D[`${n},${a + 1},${o}`], r, mt, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), n = (u, c, k) => {
          for (let f = 0; f < M.length; f++) if (Math.abs(M[f][0] - u) < 1e-6 && Math.abs(M[f][1] - c) < 1e-6 && Math.abs(M[f][2] - k) < 1e-6) return f;
          const d = M.length;
          return M.push([
            u,
            c,
            k
          ]), d;
        }, a = t.vSecDir < 0.5 ? "x" : "y";
        for (let u = 1; u < y.length; u++) if (a === "x") for (let c = 0; c < C.length - 1; c++) {
          const k = C[c], d = C[c + 1];
          for (let f = 1; f <= o; f++) {
            const ot = k + f / (o + 1) * (d - k), i = [];
            for (let z = 0; z < v.length; z++) i.push(n(v[z], ot, y[u]));
            for (let z = 0; z < v.length - 1; z++) mt.add(E.length), E.push([
              i[z],
              i[z + 1]
            ]);
          }
        }
        else for (let c = 0; c < v.length - 1; c++) {
          const k = v[c], d = v[c + 1];
          for (let f = 1; f <= o; f++) {
            const ot = k + f / (o + 1) * (d - k), i = [];
            for (let z = 0; z < C.length; z++) i.push(n(ot, C[z], y[u]));
            for (let z = 0; z < C.length - 1; z++) mt.add(E.length), E.push([
              i[z],
              i[z + 1]
            ]);
          }
        }
      }
      const q = Math.round(t.bracesMode);
      if (q > 0) {
        const o = q === 1 || q === 2 || q === 3, n = q === 1 || q === 2 || q === 4, a = y.length - 1;
        for (let u = 0; u < a; u++) {
          if (o) for (let c = 0; c < C.length; c++) {
            if (q === 1 && c !== 0 && c !== C.length - 1) continue;
            const k = Math.floor((v.length - 1) / 2);
            for (let d = 0; d < v.length - 1; d++) {
              if (q === 1 && d !== k || rt(d, c) || rt(d + 1, c)) continue;
              const f = D[`${d},${c},${u}`], ot = D[`${d + 1},${c},${u + 1}`], i = D[`${d + 1},${c},${u}`], z = D[`${d},${c},${u + 1}`];
              f !== void 0 && ot !== void 0 && E.push([
                f,
                ot
              ]), i !== void 0 && z !== void 0 && E.push([
                i,
                z
              ]);
            }
          }
          if (n) for (let c = 0; c < v.length; c++) {
            if (q === 1 && c !== 0 && c !== v.length - 1) continue;
            const k = Math.floor((C.length - 1) / 2);
            for (let d = 0; d < C.length - 1; d++) {
              if (q === 1 && d !== k || rt(c, d) || rt(c, d + 1)) continue;
              const f = D[`${c},${d},${u}`], ot = D[`${c},${d + 1},${u + 1}`], i = D[`${c},${d + 1},${u}`], z = D[`${c},${d},${u + 1}`];
              f !== void 0 && ot !== void 0 && E.push([
                f,
                ot
              ]), i !== void 0 && z !== void 0 && E.push([
                i,
                z
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), n = (u, c, k) => `${Math.round(u * 1e4)},${Math.round(c * 1e4)},${Math.round(k * 1e4)}`;
        for (let u = 0; u < M.length; u++) o.set(n(M[u][0], M[u][1], M[u][2]), u);
        const a = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let u = 1; u < y.length; u++) {
          const c = y[u];
          for (let k = 0; k < v.length - 1; k++) for (let d = 0; d < C.length - 1; d++) {
            const f = v[k], ot = v[k + 1], i = C[d], z = C[d + 1], { n: Kt } = ue(Math.abs(ot - f), a), { n: Nt } = ue(Math.abs(z - i), a), Ht = [];
            for (let U = 0; U <= Nt; U++) {
              const xt = [];
              for (let no = 0; no <= Kt; no++) {
                const bo = f + no / Kt * (ot - f), Io = i + U / Nt * (z - i), Ao = n(bo, Io, c), wo = o.get(Ao);
                if (wo !== void 0) xt.push(wo);
                else {
                  const Co = M.length;
                  M.push([
                    bo,
                    Io,
                    c
                  ]), o.set(Ao, Co), xt.push(Co);
                }
              }
              Ht.push(xt);
            }
            for (let U = 0; U < Nt; U++) for (let xt = 0; xt < Kt; xt++) $t.add(E.length), E.push([
              Ht[U][xt],
              Ht[U][xt + 1],
              Ht[U + 1][xt + 1],
              Ht[U + 1][xt]
            ]);
          }
        }
      }
      const Ft = Math.round(t.apoyo), ro = Ft === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : Ft === 1 ? [
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
      ], At = /* @__PURE__ */ new Map();
      for (let o = 0; o < C.length; o++) for (let n = 0; n < v.length; n++) rt(n, o) || At.set(D[`${n},${o},0`], [
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
      ], [po, Mo, xo, qo] = so, lo = /* @__PURE__ */ new Map(), ko = po * t.CM + Mo * t.CV;
      if (ko !== 0) for (let o = 1; o < y.length; o++) for (let n = 0; n < C.length; n++) for (let a = 0; a < v.length; a++) {
        const u = `${a},${n},${o}`;
        D[u] !== void 0 && lo.set(D[u], [
          0,
          0,
          ko,
          0,
          0,
          0
        ]);
      }
      const Uo = xo * t.Ex, Wo = qo * t.Ey;
      if (Uo !== 0 || Wo !== 0) {
        const o = D[`${v.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${_}`];
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
      ].map((o) => o > 0 ? o : t.vigaB), ve = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), ye = (o) => {
        const n = Ho[o] ?? t.colSize, a = Ro[o] ?? t.colSize;
        return {
          A: n * a,
          Iz: n * a ** 3 / 12,
          Iy: a * n ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(n, a), 4)
        };
      }, be = (o) => {
        const n = _e[o] ?? t.vigaB, a = ve[o] ?? t.vigaH;
        return {
          A: n * a,
          Iz: n * a ** 3 / 12,
          Iy: a * n ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(n, a), 3) * Math.max(n, a)
        };
      }, we = t.matCol < 0.5 ? F : S, Ce = t.matCol < 0.5 ? K : J, ze = t.matCol < 0.5 ? m : g, $e = t.matViga < 0.5 ? F : S, Se = t.matViga < 0.5 ? K : J, ke = t.matViga < 0.5 ? m : g, _o = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), Eo = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ee = Math.round(t.slabType), Pe = ee === 2 ? 0 : 1, Oe = ee === 1 ? 0 : 1, Vo = t.crackedSections > 0.5, se = t.matCol < 0.5 && Vo ? 0.7 : 1, ne = t.matViga < 0.5 && Vo ? 0.35 : 1, Le = Vo ? 0.25 : 1, Fe = 1, Zo = t.massSource > 0.5, Ee = t.qDead + 0.25 * t.qLive, Ve = Zo ? Ee / xe / Math.max(t.slabT, 0.05) : go;
      for (let o = 0; o < E.length; o++) {
        const n = gt.get(o) ?? 0;
        if ($t.has(o)) _o.set(o, F), vo.set(o, K), Eo.set(o, m), Qo.set(o, t.slabT), te.set(o, Pe * Fe), oe.set(o, Oe * Le), yo.set(o, Ve);
        else if (Mt.has(o)) {
          const a = ye(Math.min(n, 7));
          _o.set(o, we), vo.set(o, Ce), Eo.set(o, ze), Po.set(o, a.A), Oo.set(o, a.Iz * se), Lo.set(o, a.Iy * se), Fo.set(o, a.J), yo.set(o, Zo ? 0 : go);
        } else {
          const a = be(Math.min(n, 7));
          _o.set(o, $e), vo.set(o, Se), Eo.set(o, ke), Po.set(o, a.A), Oo.set(o, a.Iz * ne), Lo.set(o, a.Iy * ne), Fo.set(o, a.J), yo.set(o, Zo ? 0 : go);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let c = 1; c < y.length; c++) o.push(y[c]);
        const n = Je(M, o), a = E.length;
        for (const c of n.masterNodes) M.push([
          c.x,
          c.y,
          c.z
        ]);
        for (const c of n.rigidLinks) E.push(c);
        Ue(n, {
          elasticities: _o,
          shearModuli: vo,
          areas: Po,
          momentsOfInertiaZ: Oo,
          momentsOfInertiaY: Lo,
          torsionalConstants: Fo,
          densities: yo
        }, a);
      }
      e.nodes.val = M, e.elements.val = E, e.nodeInputs.val = {
        supports: At,
        loads: lo
      }, e.elementInputs.val = {
        elasticities: _o,
        shearModuli: vo,
        areas: Po,
        momentsOfInertiaZ: Oo,
        momentsOfInertiaY: Lo,
        torsionalConstants: Fo,
        densities: yo,
        poissonsRatios: Eo,
        thicknesses: Qo,
        membraneModifiers: te,
        bendingModifiers: oe
      };
      const ae = he(M, E, e.nodeInputs.val, e.elementInputs.val);
      e.deformOutputs.val = ae, e.analyzeOutputs.val = Ae(M, E, e.elementInputs.val, ae);
      const jo = Xe(v, C, y);
      try {
        const o = Qe(M, E, e.analyzeOutputs.rawVal, e.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), Mt);
        let n = 1 / 0, a = 1 / 0, u = 1 / 0, c = -1 / 0, k = -1 / 0, d = -1 / 0;
        for (const i of M) i[0] < n && (n = i[0]), i[0] > c && (c = i[0]), i[1] < a && (a = i[1]), i[1] > k && (k = i[1]), i[2] < u && (u = i[2]), i[2] > d && (d = i[2]);
        const f = Math.sqrt((c - n) ** 2 + (k - a) ** 2 + (d - u) ** 2) || 1, ot = ts(o, M, f, {
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
            const d = M[k];
            !d || Math.abs(d[2]) > 1e-6 || (n.push({
              idx: k,
              x: d[0],
              y: d[1],
              P_kN: Math.abs(c[2]),
              Mx_kN: c[3],
              My_kN: c[4]
            }), d[0] > a && (a = d[0]), d[1] > u && (u = d[1]));
          }), n.length > 0) {
            const c = t.q_adm_zapata ?? 10, k = t.ks_zapata ?? 1030, d = Math.max(0, t.Hf_pedestal ?? 0.5), f = Math.max(0.1, t.t_zapata ?? 0.3), ot = Math.max(2, Math.round(t.nSubZapata ?? 4)), i = Math.max(0, t.voladoExtra ?? 0.3), z = Math.round(t.tipoZapataOverride ?? 0) | 0, Kt = Math.round(t.estiloZapata ?? 1), Nt = Yo(n, a, u, c, k), Ht = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const N of Nt) z > 0 && (N.tipo = Ht[z - 1]), N.t = f;
            const U = [], xt = (N) => new Go({
              color: N,
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
            }), Io = new Go({
              color: 10265519,
              transparent: true,
              opacity: 0.75,
              roughness: 0.5
            }), Ao = new Yt({
              color: 1118481,
              linewidth: 2
            }), wo = Ho[0] ?? t.colSize, Co = Ro[0] ?? t.colSize;
            for (const N of Nt) {
              const G = N.Lz, at = N.Bz, qt = N.t;
              let Tt = 0, Bt = 0;
              N.tipo === "esquinera" ? (Tt = N.x < a / 2 ? -(G / 2 - i) : G / 2 - i, Bt = N.y < u / 2 ? -(at / 2 - i) : at / 2 - i) : N.tipo === "lindero" && (Math.abs(N.x) < 1e-3 || Math.abs(N.x - a) < 1e-3 ? Tt = N.x < a / 2 ? -(G / 2 - i) : G / 2 - i : (Math.abs(N.y) < 1e-3 || Math.abs(N.y - u) < 1e-3) && (Bt = N.y < u / 2 ? -(at / 2 - i) : at / 2 - i));
              const W = N.x - Tt, I = N.y - Bt, Y = -d, St = Y - qt / 2, Et = Y - qt, Jt = N.ratio;
              let Ut = 4906624;
              if (Jt > 1.5 ? Ut = 15680580 : Jt > 1 ? Ut = 16096779 : Jt > 0.8 && (Ut = 16498468), d > 1e-3) {
                const pt = new eo().setFromPoints([
                  new j(N.x, N.y, 0),
                  new j(N.x, N.y, -d)
                ]);
                U.push(new Jo(pt, new Yt({
                  color: 6333946,
                  linewidth: 4
                }))), U.push(It(`Df=${d.toFixed(2)}m`, N.x + 0.1, N.y + 0.1, -d / 2, "#60a5fa"));
              }
              if (Kt === 0) {
                const pt = new He(G, at, qt), Rt = new Do(pt, xt(Ut));
                Rt.position.set(W, I, St), U.push(Rt);
                const Zt = new uo(new Re(pt), no);
                Zt.position.copy(Rt.position), U.push(Zt);
              } else {
                const pt = new Ze(G, at), Rt = new Go({
                  color: Ut,
                  transparent: true,
                  opacity: 0.45,
                  roughness: 0.6,
                  side: je
                }), Zt = new Do(pt, Rt);
                Zt.position.set(W, I, Y), U.push(Zt);
                const Wt = new Do(pt.clone(), Rt.clone());
                Wt.position.set(W, I, Et), U.push(Wt);
                const ce = G / ot, re = at / ot, Dt = [];
                for (let yt = 0; yt <= ot; yt++) {
                  const _t = -G / 2 + yt * ce;
                  Dt.push(new j(W + _t, I - at / 2, Y), new j(W + _t, I + at / 2, Y)), Dt.push(new j(W + _t, I - at / 2, Et), new j(W + _t, I + at / 2, Et));
                }
                for (let yt = 0; yt <= ot; yt++) {
                  const _t = -at / 2 + yt * re;
                  Dt.push(new j(W - G / 2, I + _t, Y), new j(W + G / 2, I + _t, Y)), Dt.push(new j(W - G / 2, I + _t, Et), new j(W + G / 2, I + _t, Et));
                }
                const $o = new eo().setFromPoints(Dt);
                U.push(new uo($o, bo));
                const fo = [
                  [
                    -G / 2,
                    -at / 2
                  ],
                  [
                    G / 2,
                    -at / 2
                  ],
                  [
                    G / 2,
                    at / 2
                  ],
                  [
                    -G / 2,
                    at / 2
                  ]
                ], ao = [];
                for (let yt = 0; yt < 4; yt++) {
                  const [_t, s] = fo[yt], [O, x] = fo[(yt + 1) % 4];
                  ao.push(new j(W + _t, I + s, Y), new j(W + O, I + x, Y)), ao.push(new j(W + _t, I + s, Et), new j(W + O, I + x, Et)), ao.push(new j(W + _t, I + s, Y), new j(W + _t, I + s, Et));
                }
                const ho = new eo().setFromPoints(ao);
                U.push(new uo(ho, no));
              }
              (t.mostrarLabelsZapatas ?? 1) >= 0.5 && U.push(It(`${N.tipo[0].toUpperCase()} ${G.toFixed(2)}\xD7${at.toFixed(2)}\xD7${qt.toFixed(2)}m \u03C3/q=${N.ratio.toFixed(2)}`, W, I, Et - 0.2, Jt <= 1 ? "#4ade80" : Jt <= 1.5 ? "#f59e0b" : "#ef4444"));
            }
            if (Math.round(t.sistemaCimentacion ?? 0) === 1) {
              const N = Math.round(t.vigaAmarre_pos ?? 0), G = N === 0 ? -d : -d / 2, at = t.vigaAmarre_b ?? 0.25, qt = t.vigaAmarre_h ?? 0.4, Tt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map();
              for (const I of n) {
                const Y = I.y.toFixed(4), St = I.x.toFixed(4);
                Tt.has(Y) || Tt.set(Y, []), Bt.has(St) || Bt.set(St, []), Tt.get(Y).push(I), Bt.get(St).push(I);
              }
              const W = [];
              for (const I of Tt.values()) {
                I.sort((Y, St) => Y.x - St.x);
                for (let Y = 0; Y < I.length - 1; Y++) W.push(new j(I[Y].x, I[Y].y, G)), W.push(new j(I[Y + 1].x, I[Y + 1].y, G));
              }
              for (const I of Bt.values()) {
                I.sort((Y, St) => Y.y - St.y);
                for (let Y = 0; Y < I.length - 1; Y++) W.push(new j(I[Y].x, I[Y].y, G)), W.push(new j(I[Y + 1].x, I[Y + 1].y, G));
              }
              W.length > 0 && (U.push(new uo(new eo().setFromPoints(W), new Yt({
                color: 2282478,
                linewidth: 3
              }))), U.push(It(`Vigas amarre ${(at * 100).toFixed(0)}\xD7${(qt * 100).toFixed(0)} cm @ ${N === 0 ? "zapatas" : "pedestales"}`, a / 2, u / 2, G + 0.2, "#22d3ee")));
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
            const f = M[d];
            !f || Math.abs(f[2]) > 1e-6 || (a.push({
              idx: d,
              x: f[0],
              y: f[1],
              P_kN: Math.abs(k[2]),
              Mx_kN: k[3],
              My_kN: k[4]
            }), f[0] > u && (u = f[0]), f[1] > c && (c = f[1]));
          }), a.length > 0) {
            const k = t.q_adm_zapata ?? 10, d = t.ks_zapata ?? 1030, f = Math.max(0, t.Hf_pedestal ?? 0.5), ot = Math.max(0.1, t.t_zapata ?? 0.3), i = Math.max(2, Math.round(t.nSubZapata ?? 4)), z = Math.max(0, t.voladoExtra ?? 0.3), Kt = Math.round(t.tipoZapataOverride ?? 0) | 0, Nt = Yo(a, u, c, k, d), Ht = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const s of Nt) Kt > 0 && (s.tipo = Ht[Kt - 1]), s.t = ot;
            const U = Ho[0] ?? t.colSize, xt = Ro[0] ?? t.colSize, no = U * xt, bo = U * xt ** 3 / 12, Io = xt * U ** 3 / 12, Ao = 0.14 * Math.pow(Math.min(U, xt), 4), wo = t.matCol < 0.5 ? F : S, Co = t.matCol < 0.5 ? K : J, ie = t.matCol < 0.5 ? m : g, N = [], G = [], at = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), Y = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), zo = [], pt = [], Rt = (s, O, x) => `${Math.round(s * 1e4)},${Math.round(O * 1e4)},${Math.round(x * 1e4)}`, Zt = /* @__PURE__ */ new Map(), Wt = (s, O, x) => {
              const A = Rt(s, O, x), H = Zt.get(A);
              if (H !== void 0) return H;
              const it = N.length;
              return N.push([
                s,
                O,
                x
              ]), Zt.set(A, it), it;
            }, ce = new Yt({
              color: 0,
              linewidth: 2
            }), re = new Yt({
              color: 1118481,
              linewidth: 2
            });
            for (const s of Nt) {
              const O = s.Lz, x = s.Bz, A = s.t;
              let H = 0, it = 0;
              s.tipo === "esquinera" ? (H = s.x < u / 2 ? -(O / 2 - z) : O / 2 - z, it = s.y < c / 2 ? -(x / 2 - z) : x / 2 - z) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - u) < 1e-3 ? H = s.x < u / 2 ? -(O / 2 - z) : O / 2 - z : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - c) < 1e-3) && (it = s.y < c / 2 ? -(x / 2 - z) : x / 2 - z));
              const kt = s.x - H, Ct = s.y - it, jt = -f, Pt = O / i, Xt = x / i, lt = [];
              for (let Z = 0; Z <= i; Z++) {
                const et = [];
                for (let ft = 0; ft <= i; ft++) {
                  const Lt = kt - O / 2 + ft * Pt, vt = Ct - x / 2 + Z * Xt;
                  et.push(Wt(Lt, vt, jt));
                }
                lt.push(et);
              }
              for (let Z = 0; Z < i; Z++) for (let et = 0; et < i; et++) {
                const ft = G.length;
                G.push([
                  lt[Z][et],
                  lt[Z][et + 1],
                  lt[Z + 1][et + 1],
                  lt[Z + 1][et]
                ]), Et.set(ft, A), at.set(ft, F), St.set(ft, m), qt.set(ft, K), Y.set(ft, go);
              }
              const Qt = 0.5;
              for (let Z = 0; Z <= i; Z++) for (let et = 0; et <= i; et++) {
                const ft = Pt * Xt * (et === 0 || et === i ? 0.5 : 1) * (Z === 0 || Z === i ? 0.5 : 1), Lt = d * ft, vt = Lt * Qt, L = lt[Z][et];
                zo.push({
                  node: L,
                  dof: 0,
                  k: vt
                }), zo.push({
                  node: L,
                  dof: 1,
                  k: vt
                }), zo.push({
                  node: L,
                  dof: 2,
                  k: Lt
                }), zo.push({
                  node: L,
                  dof: 5,
                  k: Lt * 0.1
                });
              }
              const Ot = lt[0][0];
              Jt.set(Ot, [
                false,
                false,
                false,
                true,
                true,
                true
              ]);
              let w = 0, T = 0, b = 1 / 0;
              for (let Z = 0; Z <= i; Z++) for (let et = 0; et <= i; et++) {
                const ft = lt[Z][et], Lt = N[ft][0], vt = N[ft][1], L = Math.sqrt((Lt - s.x) ** 2 + (vt - s.y) ** 2);
                L < b && (b = L, w = Z, T = et);
              }
              const Vt = lt[w][T], bt = a.find((Z) => Z.idx === s.idx);
              Ut.set(Vt, [
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
                }))), pt.push(It(`Df=${f.toFixed(2)}m`, s.x + 0.1, s.y + 0.1, -f / 2, "#60a5fa"));
              }
              {
                const Z = new Yt({
                  color: 11184810,
                  linewidth: 1,
                  transparent: true,
                  opacity: 0.6
                }), et = O / i, ft = x / i, Lt = [];
                for (let vt = 0; vt <= i; vt++) {
                  const L = -O / 2 + vt * et;
                  Lt.push(new j(kt + L, Ct - x / 2, -f), new j(kt + L, Ct + x / 2, -f));
                }
                for (let vt = 0; vt <= i; vt++) {
                  const L = -x / 2 + vt * ft;
                  Lt.push(new j(kt - O / 2, Ct + L, -f), new j(kt + O / 2, Ct + L, -f));
                }
                pt.push(new uo(new eo().setFromPoints(Lt), Z));
              }
              if ((t.mostrarLabelsZapatas ?? 1) >= 0.5) {
                const Z = bt.P_kN / 9.80665, et = bt.Mx_kN / 9.80665, ft = bt.My_kN / 9.80665;
                pt.push(It(`P=${Z.toFixed(2)} tonf`, s.x, s.y, 0.3, "#fbbf24")), pt.push(It(`Mx=${et.toFixed(2)}  My=${ft.toFixed(2)} tonf\xB7m`, s.x, s.y, 0.1, "#fbbf24")), pt.push(It(`${s.tipo[0].toUpperCase()} ${O.toFixed(2)}\xD7${x.toFixed(2)}\xD7${A.toFixed(2)}m \u03C3/q=${to.toFixed(2)}`, kt, Ct, -f - A - 0.2, to <= 1 ? "#4ade80" : to <= 1.5 ? "#f59e0b" : "#ef4444"));
              }
            }
            const Dt = Math.round(t.sistemaCimentacion ?? 0);
            if (Dt === 1) {
              const s = Math.round(t.vigaAmarre_pos ?? 0), O = t.vigaAmarre_h ?? 0.4, x = t.vigaAmarre_b ?? 0.25, A = x * O, H = x * O ** 3 / 12, it = O * x ** 3 / 12, kt = 0.21 * Math.pow(Math.min(x, O), 3) * Math.max(x, O), Ct = /* @__PURE__ */ new Map();
              for (const w of Nt) {
                let T;
                s === 0 ? T = -f : T = -f / 2;
                const b = Wt(w.x, w.y, T);
                if (Ct.set(w.idx, b), s === 1 && f > 1e-3) {
                  const dt = Wt(w.x, w.y, -f / 2), Vt = Wt(w.x, w.y, 0), bt = Wt(w.x, w.y, -f);
                }
              }
              const jt = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map();
              for (const w of a) {
                const T = w.y.toFixed(4), b = w.x.toFixed(4);
                jt.has(T) || jt.set(T, []), Pt.has(b) || Pt.set(b, []), jt.get(T).push(w), Pt.get(b).push(w);
              }
              const Xt = (w, T) => {
                const b = G.length;
                G.push([
                  w,
                  T
                ]), at.set(b, wo), qt.set(b, Co), St.set(b, ie), Tt.set(b, A), Bt.set(b, it), W.set(b, H), I.set(b, kt), Y.set(b, go);
              };
              let lt = 0;
              for (const w of jt.values()) {
                w.sort((T, b) => T.x - b.x);
                for (let T = 0; T < w.length - 1; T++) {
                  const b = Ct.get(w[T].idx), dt = Ct.get(w[T + 1].idx);
                  b !== void 0 && dt !== void 0 && (Xt(b, dt), lt++);
                }
              }
              for (const w of Pt.values()) {
                w.sort((T, b) => T.y - b.y);
                for (let T = 0; T < w.length - 1; T++) {
                  const b = Ct.get(w[T].idx), dt = Ct.get(w[T + 1].idx);
                  b !== void 0 && dt !== void 0 && (Xt(b, dt), lt++);
                }
              }
              const Qt = new Yt({
                color: 2282478,
                linewidth: 3
              }), Ot = [];
              for (const w of jt.values()) {
                const T = [
                  ...w
                ].sort((b, dt) => b.x - dt.x);
                for (let b = 0; b < T.length - 1; b++) {
                  const dt = T[b], Vt = T[b + 1], bt = s === 0 ? -f : -f / 2;
                  Ot.push(new j(dt.x, dt.y, bt)), Ot.push(new j(Vt.x, Vt.y, bt));
                }
              }
              for (const w of Pt.values()) {
                const T = [
                  ...w
                ].sort((b, dt) => b.y - dt.y);
                for (let b = 0; b < T.length - 1; b++) {
                  const dt = T[b], Vt = T[b + 1], bt = s === 0 ? -f : -f / 2;
                  Ot.push(new j(dt.x, dt.y, bt)), Ot.push(new j(Vt.x, Vt.y, bt));
                }
              }
              if (Ot.length > 0) {
                const w = new eo().setFromPoints(Ot);
                pt.push(new uo(w, Qt));
              }
              pt.push(It(`+${lt} vigas de amarre ${(x * 100).toFixed(0)}\xD7${(O * 100).toFixed(0)} cm @ ${s === 0 ? "zapatas" : "pedestales"}`, u / 2, c / 2, s === 1 ? -f / 2 + 0.3 : -f + 0.3, "#22d3ee")), console.log(`[Cimentaci\xF3n] Sistema 1 \u2014 ${lt} vigas de amarre ${(x * 100).toFixed(0)}\xD7${(O * 100).toFixed(0)} cm en posici\xF3n ${s === 0 ? "zapatas" : "pedestales"}`);
            } else Dt >= 2 && (console.warn(`[Cimentaci\xF3n] Sistema ${Dt} (${[
              "",
              "",
              "Vigas T invertida",
              "Vigas rect. + zapata corrida",
              "Losa de cimentaci\xF3n"
            ][Dt]}) a\xFAn no implementado completamente. Mostrando zapatas aisladas. Pr\xF3ximamente: malla shell continua + frames T-invertida.`), pt.push(It(`Sistema ${Dt} (TODO) \u2014 usando zapatas aisladas`, u / 2, c / 2, 1.5, "#fbbf24")));
            const $o = Math.round(t.sistemaCimentacion ?? 0), fo = 0.3, ao = Math.round(t.vigaAmarre_pos ?? 0), ho = /* @__PURE__ */ new Map();
            if ($o === 1) {
              const s = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map();
              for (const A of a) {
                const H = A.y.toFixed(4), it = A.x.toFixed(4);
                s.has(H) || s.set(H, []), O.has(it) || O.set(it, []), s.get(H).push(A), O.get(it).push(A);
              }
              const x = (A) => ho.set(A, (ho.get(A) ?? 0) + 1);
              for (const A of s.values()) {
                A.sort((H, it) => H.x - it.x);
                for (let H = 0; H < A.length - 1; H++) x(A[H].idx), x(A[H + 1].idx);
              }
              for (const A of O.values()) {
                A.sort((H, it) => H.y - it.y);
                for (let H = 0; H < A.length - 1; H++) x(A[H].idx), x(A[H + 1].idx);
              }
              console.log(`[Cimentaci\xF3n] Vigas de amarre activas \u2014 momentos en zapatas reducidos por factor (1 - ${fo} \xB7 n_vigas/4):`), ho.forEach((A, H) => {
                const it = (fo * A / 4 * 100).toFixed(0);
                console.log(`   Zapata ${H}: ${A} vigas conectadas \u2192 momento reducido ${it}%`);
              }), ao === 0 && console.log("   \u21B3 vigaAmarre_pos=0 (mismo nivel zapata) \u2192 en F2K se exportar\xE1 como cimentaci\xF3n corrida con ks\xB7b\xB7dL distribuido por nodo");
            }
            const yt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map();
            for (const s of Nt) {
              const O = a.find((L) => L.idx === s.idx), x = s.Lz, A = s.Bz, H = s.t;
              let it = 0, kt = 0;
              s.tipo === "esquinera" ? (it = s.x < u / 2 ? -(x / 2 - z) : x / 2 - z, kt = s.y < c / 2 ? -(A / 2 - z) : A / 2 - z) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - u) < 1e-3 ? it = s.x < u / 2 ? -(x / 2 - z) : x / 2 - z : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - c) < 1e-3) && (kt = s.y < c / 2 ? -(A / 2 - z) : A / 2 - z));
              const Ct = s.x - it, jt = s.y - kt, Pt = [], Xt = [], lt = {
                elasticities: /* @__PURE__ */ new Map(),
                shearModuli: /* @__PURE__ */ new Map(),
                poissonsRatios: /* @__PURE__ */ new Map(),
                thicknesses: /* @__PURE__ */ new Map(),
                densities: /* @__PURE__ */ new Map()
              }, Qt = x / i, Ot = A / i, w = [], T = [];
              for (let L = 0; L <= i; L++) {
                const st = [];
                for (let ht = 0; ht <= i; ht++) {
                  const zt = -x / 2 + ht * Qt, wt = -A / 2 + L * Ot;
                  st.push(Pt.length), Pt.push([
                    zt,
                    wt,
                    0
                  ]);
                  const No = Ct + zt, To = jt + wt, Bo = Rt(No, To, -f), io = Zt.get(Bo);
                  io !== void 0 ? T.push(io) : T.push(-1);
                }
                w.push(st);
              }
              for (let L = 0; L < i; L++) for (let st = 0; st < i; st++) {
                const ht = Xt.length;
                Xt.push([
                  w[L][st],
                  w[L][st + 1],
                  w[L + 1][st + 1],
                  w[L + 1][st]
                ]), lt.thicknesses.set(ht, H), lt.elasticities.set(ht, F), lt.poissonsRatios.set(ht, m), lt.shearModuli.set(ht, K), lt.densities.set(ht, go);
              }
              const b = [], dt = 0.5;
              for (let L = 0; L <= i; L++) for (let st = 0; st <= i; st++) {
                const ht = Qt * Ot * (st === 0 || st === i ? 0.5 : 1) * (L === 0 || L === i ? 0.5 : 1), zt = d * ht, wt = w[L][st];
                b.push({
                  node: wt,
                  dof: 0,
                  k: zt * dt
                }), b.push({
                  node: wt,
                  dof: 1,
                  k: zt * dt
                }), b.push({
                  node: wt,
                  dof: 2,
                  k: zt
                });
              }
              if ($o === 1 && ao === 0) {
                const L = t.vigaAmarre_b ?? 0.25, st = s.idx, ht = a.filter((ut) => Math.abs(ut.y - s.y) < 1e-3 && ut.idx !== st).sort((ut, So) => ut.x - So.x), zt = a.filter((ut) => Math.abs(ut.x - s.x) < 1e-3 && ut.idx !== st).sort((ut, So) => ut.y - So.y), wt = ht.find((ut) => ut.x > s.x), No = [
                  ...ht
                ].reverse().find((ut) => ut.x < s.x), To = zt.find((ut) => ut.y > s.y), Bo = [
                  ...zt
                ].reverse().find((ut) => ut.y < s.y), io = (ut, So) => {
                  const le = So / 2;
                  for (let oo = 0; oo <= i; oo++) {
                    const Ie = oo === 0 || oo === i ? le / (2 * i) : le / i, de = d * L * Ie, fe = de * dt;
                    let co;
                    switch (ut) {
                      case "x+":
                        co = w[oo][i];
                        break;
                      case "x-":
                        co = w[oo][0];
                        break;
                      case "y+":
                        co = w[i][oo];
                        break;
                      case "y-":
                        co = w[0][oo];
                        break;
                    }
                    b.push({
                      node: co,
                      dof: 0,
                      k: fe
                    }), b.push({
                      node: co,
                      dof: 1,
                      k: fe
                    }), b.push({
                      node: co,
                      dof: 2,
                      k: de
                    });
                  }
                };
                wt && io("x+", wt.x - s.x), No && io("x-", s.x - No.x), To && io("y+", To.y - s.y), Bo && io("y-", s.y - Bo.y);
              }
              const Vt = d * Qt * Ot * 1e-4;
              b.push({
                node: w[0][0],
                dof: 3,
                k: Vt
              }), b.push({
                node: w[0][0],
                dof: 4,
                k: Vt
              }), b.push({
                node: w[0][0],
                dof: 5,
                k: Vt
              });
              const bt = -it, to = -kt;
              let mo = 0, Xo = 0, Z = 1 / 0;
              for (let L = 0; L <= i; L++) for (let st = 0; st <= i; st++) {
                const ht = -x / 2 + st * Qt, zt = -A / 2 + L * Ot, wt = (ht - bt) ** 2 + (zt - to) ** 2;
                wt < Z && (Z = wt, mo = L, Xo = st);
              }
              const et = w[mo][Xo], ft = /* @__PURE__ */ new Map(), Lt = ho.get(s.idx) ?? 0, vt = $o === 1 ? Math.max(0.4, 1 - fo * Lt / 4) : 1;
              ft.set(et, [
                0,
                0,
                -O.P_kN,
                O.Mx_kN * vt,
                O.My_kN * vt,
                0
              ]);
              try {
                const st = he(Pt, Xt, {
                  supports: /* @__PURE__ */ new Map(),
                  loads: ft
                }, lt, b).deformations;
                for (let ht = 0; ht < Pt.length; ht++) {
                  const zt = T[ht];
                  if (zt >= 0) {
                    const wt = st.get(ht);
                    wt && yt.set(zt, [
                      ...wt
                    ]);
                  }
                }
              } catch (L) {
                console.warn(`[Zapata ${s.idx}] solver fall\xF3:`, L);
              }
            }
            for (let s = 0; s < G.length; s++) {
              const O = G[s];
              if (O.length !== 4) continue;
              const x = [];
              for (const A of O) {
                const H = yt.get(A);
                x.push(d * (H ? H[2] : 0) / 9.80665);
              }
              _t.set(s, x);
            }
            e.nodes.val = N, e.elements.val = G, e.nodeInputs.val = {
              supports: Jt,
              loads: Ut
            }, e.elementInputs.val = {
              elasticities: at,
              shearModuli: qt,
              areas: Tt,
              momentsOfInertiaZ: Bt,
              momentsOfInertiaY: W,
              torsionalConstants: I,
              densities: Y,
              poissonsRatios: St,
              thicknesses: Et
            }, e.deformOutputs.val = {
              deformations: yt,
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
                const x = (_a2 = document.querySelector("#viewer")) == null ? void 0 : _a2.__settings;
                x && (x.shellResults && (x.shellResults.val = "pressure"), x.deformedShape && (x.deformedShape.val = false), x.deformScale && (x.deformScale.val = 5), x.frameResults && (x.frameResults.val = "none"), x.custom3D && (x.custom3D.val = true));
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
      const l = e.nodes.val, _ = e.elements.val, r = e.nodeInputs.val, h = e.elementInputs.val;
      if (!(!l.length || !_.length || !((_a = r.supports) == null ? void 0 : _a.size) || !((_b = h.densities) == null ? void 0 : _b.size))) try {
        const $ = [], F = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
        let v = 0, C = 0;
        const y = [];
        let B = 0;
        for (let V = 0; V < _.length; V++) {
          const q = _[V];
          let Ft = false, ro = false;
          if (q.length === 4) {
            const At = q.map((so) => l[so][2]);
            if (Math.max(...At) - Math.min(...At) < 0.02) {
              const so = l[q[0]][0], po = l[q[0]][1], Mo = l[q[2]][0], xo = l[q[2]][1], qo = Math.abs((Mo - so) * (xo - po)), lo = ((_c = h.thicknesses) == null ? void 0 : _c.get(V)) ?? 0.15, ko = ((_d = h.densities) == null ? void 0 : _d.get(V)) ?? 24;
              v += ko * qo * lo, Ft = true;
            }
          } else if (q.length === 2) {
            const At = l[q[0]][2], tt = l[q[1]][2], so = Math.sqrt((l[q[1]][0] - l[q[0]][0]) ** 2 + (l[q[1]][1] - l[q[0]][1]) ** 2);
            if (Math.abs(tt - At) > so) {
              ro = true;
              const po = Math.abs(tt - At), Mo = ((_e = h.areas) == null ? void 0 : _e.get(V)) ?? 0, xo = ((_f = h.densities) == null ? void 0 : _f.get(V)) ?? 24;
              C += xo * Mo * po;
            }
          }
          Ft || ($.push(q), ((_g = h.areas) == null ? void 0 : _g.has(V)) && F.set(B, h.areas.get(V)), ((_h = h.momentsOfInertiaY) == null ? void 0 : _h.has(V)) && S.set(B, h.momentsOfInertiaY.get(V)), ((_i = h.momentsOfInertiaZ) == null ? void 0 : _i.has(V)) && m.set(B, h.momentsOfInertiaZ.get(V)), ((_j = h.torsionalConstants) == null ? void 0 : _j.has(V)) && g.set(B, h.torsionalConstants.get(V)), ((_k = h.elasticities) == null ? void 0 : _k.has(V)) && K.set(B, h.elasticities.get(V)), ((_l = h.shearModuli) == null ? void 0 : _l.has(V)) && J.set(B, h.shearModuli.get(V)), ((_m = h.densities) == null ? void 0 : _m.has(V)) && X.set(B, h.densities.get(V)), ((_n = h.thicknesses) == null ? void 0 : _n.has(V)) && ct.set(B, h.thicknesses.get(V)), ((_o = h.poissonsRatios) == null ? void 0 : _o.has(V)) && R.set(B, h.poissonsRatios.get(V)), ro && y.push(B), B++);
        }
        if (v > 0 && C > 0 && y.length > 0) {
          const V = 1 + v / C;
          for (const q of y) {
            const Ft = X.get(q) ?? 24;
            X.set(q, Ft * V);
          }
        }
        const Q = {
          areas: F,
          momentsOfInertiaY: S,
          momentsOfInertiaZ: m,
          torsionalConstants: g,
          elasticities: K,
          shearModuli: J,
          densities: X,
          thicknesses: ct,
          poissonsRatios: R
        }, rt = Math.round(t.nPisos), M = Math.min(60, Math.max(15, 3 * rt + 6)), D = Ne(l, $, r, Q, M), E = Math.round(t.nVanosX), Mt = Math.round(t.nVanosY), mt = Math.round(t.nPisos), $t = C > 0 ? 1 + v / C : 1;
        P.render(D, {
          title: `Edificio ${E}\xD7${Mt} vanos \xD7 ${mt} pisos \xB7 ${M} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${$t.toFixed(2)} dens cols, ${v.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const gt = D.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${M} modos \xB7 f\u2081=${gt.toFixed(4)} Hz \xB7 m_slab=${v.toFixed(0)} m_cols=${C.toFixed(0)} factor=${$t.toFixed(2)}`);
      } catch ($) {
        console.warn("Modal edificio error:", $.message);
      }
    }
  };
});
export {
  __tla,
  is as e,
  as as f
};
