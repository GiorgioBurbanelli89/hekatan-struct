import { a as Ve } from "./analyze-Baqb28rE.js";
import { m as Ie, d as de, __tla as __tla_0 } from "./didacticCpp-PqvqKlgs.js";
import { b as Ne, a as Xt } from "./cotas3D-BRJLBeVj.js";
import { S as Ae, f as Be, M as To, e as Xo, a as Dt, B as io, V as H, d as fe, b as Te, L as ho, E as Ye, I as De, D as qe } from "./theme-Co6w-pfC.js";
let es, os;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function me(t, e = 0.5) {
    const B = He(e), p = t / B;
    let $ = Math.max(2, Math.round(p));
    return t / $ > B * 1.25 && ($ = Math.ceil(p)), {
      n: $,
      dx: t / $
    };
  }
  function He(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const Re = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function Ze(t, e, B = {}) {
    const p = B.tol ?? 1e-5, $ = 0, f = [], y = [], E = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, D = 1e8, X = 1e4, R = 1e4, G = 2 * R, at = D / (2 * (1 + 0.3));
    for (const ut of e) {
      const tt = [];
      let ft = 0, K = 0;
      for (let V = 0; V < t.length; V++) Math.abs(t[V][2] - ut) < p && (tt.push(V), ft += t[V][0], K += t[V][1]);
      if (tt.length < 2) continue;
      const x = ft / tt.length, b = K / tt.length, g = t.length + f.length;
      f.push({
        idx: g,
        z: ut,
        x,
        y: b
      });
      for (const V of tt) {
        y.push([
          g,
          V
        ]);
        const J = $ + y.length - 1;
        E.areas.set(J, X), E.momentsOfInertiaY.set(J, R), E.momentsOfInertiaZ.set(J, R), E.torsionalConstants.set(J, G), E.elasticities.set(J, D), E.shearModuli.set(J, at), E.densities.set(J, 0);
      }
    }
    return B.linkStiffness, {
      masterNodes: f,
      rigidLinks: y,
      linkProps: E
    };
  }
  function je(t, e, B) {
    const p = ($, f) => {
      $.forEach((y, E) => f.set(E + B, y));
    };
    e.areas = e.areas ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaY = e.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaZ = e.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), e.torsionalConstants = e.torsionalConstants ?? /* @__PURE__ */ new Map(), e.elasticities = e.elasticities ?? /* @__PURE__ */ new Map(), e.shearModuli = e.shearModuli ?? /* @__PURE__ */ new Map(), e.densities = e.densities ?? /* @__PURE__ */ new Map(), p(t.linkProps.areas, e.areas), p(t.linkProps.momentsOfInertiaY, e.momentsOfInertiaY), p(t.linkProps.momentsOfInertiaZ, e.momentsOfInertiaZ), p(t.linkProps.torsionalConstants, e.torsionalConstants), p(t.linkProps.elasticities, e.elasticities), p(t.linkProps.shearModuli, e.shearModuli), p(t.linkProps.densities, e.densities);
  }
  function he(t) {
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
  function Xe(t, e, B) {
    if (t <= 0 || e <= 0) return 1e-12;
    const $ = Math.sqrt(12 * e / t) / 2;
    return e / $ * B;
  }
  function Ge(t, e, B, p, $, f, y, E = {}) {
    var _a, _b;
    const D = E.Fy_steel ?? 345e3;
    E.fc_concrete;
    const X = E.Fy_rebar ?? 42e4, R = E.omega ?? 0.15, G = E.phi ?? 0.9, at = $ < 0.5 ? G * R * X * (1 - 0.59 * R) : G * D, ut = f < 0.5 ? G * R * X * (1 - 0.59 * R) : G * D, tt = B.frameBendingMoments, ft = [];
    for (let K = 0; K < e.length; K++) {
      const x = e[K];
      if (x.length !== 2) continue;
      const [b, g] = x, V = y.has(K);
      let J = 0, it = 0;
      const h = tt == null ? void 0 : tt.get(K);
      h && (J = h.Mi, it = h.Mj);
      const I = ((_a = p.areas) == null ? void 0 : _a.get(K)) ?? 0.16, S = ((_b = p.momentsOfInertiaZ) == null ? void 0 : _b.get(K)) ?? 213e-5, mt = Xe(I, S, V ? at : ut), $t = J / mt, gt = it / mt;
      ft.push({
        nodeIdx: b,
        elementIdx: K,
        end: "i",
        classification: he($t)
      }), ft.push({
        nodeIdx: g,
        elementIdx: K,
        end: "j",
        classification: he(gt)
      });
    }
    return ft;
  }
  function Ke(t, e, B, p = {}) {
    const $ = p.showElastic ?? false, f = (p.radiusFactor ?? 0.02) * B, y = [], E = new Ae(f, 12, 8);
    for (const D of t) {
      if (!$ && D.classification.state === "Elastic") continue;
      const X = e[D.nodeIdx];
      if (!X) continue;
      const R = new Be({
        color: D.classification.color,
        transparent: true,
        opacity: 0.85
      }), G = new To(E, R);
      G.position.set(X[0], X[1], X[2]), G.userData = {
        hingeState: D.classification.state,
        ratio: D.classification.ratio.toFixed(3),
        element: D.elementIdx,
        end: D.end
      }, y.push(G);
    }
    return y;
  }
  function Je(t) {
    const e = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const B of t) e[B.classification.state]++;
    return e;
  }
  const Go = 9.80665;
  function ue(t, e, B, p, $ = 0.01) {
    const f = Math.abs(t) < $, y = Math.abs(t - B) < $, E = Math.abs(e) < $, D = Math.abs(e - p) < $, X = [
      f,
      y,
      E,
      D
    ].filter(Boolean).length;
    return X >= 2 ? "esquinera" : X === 1 ? "lindero" : "central";
  }
  function ge(t) {
    const { P_kN: e, Mx_kN: B, My_kN: p, tipo: $, q_adm_tonf: f, ks: y } = t, E = t.Lz_min ?? 1, D = t.Lz_max ?? 4, X = t.t_min ?? 0.3;
    if (e <= 0) return {
      tipo: $,
      Lz: E,
      Bz: E,
      t: X,
      A: E ** 2,
      ex: 0,
      ey: 0,
      sigmaMax_tonf: 0,
      sigmaMin_tonf: 0,
      ratio: 0,
      fueraKern: false,
      status: "UPLIFT"
    };
    const R = f * Go, G = Math.abs(p / e), at = Math.abs(B / e), ut = R * 0.95;
    let tt = Math.max(E, Math.sqrt(e / R)), ft = tt, K = 1 / 0, x = 0, b = false;
    for (let I = 0; I < 50 && tt <= D; I++) {
      const S = $ === "esquinera" ? 0.3 : $ === "lindero" ? 0.2 : 0, pt = tt + S, mt = ft + S, $t = pt * mt, gt = Math.max(G, at), k = gt === G ? pt : mt;
      if (b = gt > k / 6, !b) K = e / $t * (1 + 6 * gt / k), x = e / $t * (1 - 6 * gt / k);
      else {
        const A = 1.5 * k - 3 * gt, Lt = gt === G ? mt : pt;
        K = 2 * e / (Lt * Math.max(A, 0.01)), x = 0;
      }
      if (K <= ut) break;
      tt += 0.05, ft += 0.05;
    }
    const g = tt * ft, V = Math.max(X, tt / 6), J = K / R, it = J <= 1 ? "OK" : "OVERSTRESS";
    let h;
    return y && y > 0 && (h = K / y * 1e3), {
      tipo: $,
      Lz: tt,
      Bz: ft,
      t: V,
      A: g,
      ex: G,
      ey: at,
      sigmaMax_tonf: K / Go,
      sigmaMin_tonf: x / Go,
      ratio: J,
      delta_mm: h,
      fueraKern: b,
      status: it
    };
  }
  function Yo(t, e, B, p, $) {
    return t.map((f) => {
      const y = ue(f.x, f.y, e, B);
      return {
        ...ge({
          P_kN: f.P_kN,
          Mx_kN: f.Mx_kN,
          My_kN: f.My_kN,
          tipo: y,
          q_adm_tonf: p,
          ks: $
        }),
        idx: f.idx,
        x: f.x,
        y: f.y
      };
    });
  }
  let Me, uo, m, et;
  os = Object.freeze(Object.defineProperty({
    __proto__: null,
    classifyFootingType: ue,
    designAllFootings: Yo,
    designFooting: ge
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Me = 9.81;
  uo = 24 / Me;
  m = (t, e, B, p, $, f) => ({
    default: B,
    min: p,
    max: $,
    step: f,
    label: e,
    folder: t
  });
  et = (t, e, B, p) => ({
    default: B,
    label: e,
    folder: t,
    options: p
  });
  es = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "1\uFE0F\u20E3 Frames \xB7 \u{1F3AF} n GDL Sistemas",
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
        ...m("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...m("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...m("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: m("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: m("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: m("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: m("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: m("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: m("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: m("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: m("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: m("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: et("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: et("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: et("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: m("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: m("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: m("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: m("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: m("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      nDivBeam: m("Mesh", "Div. Vigas (segmentos)", 1, 1, 8, 1),
      nDivCol: m("Mesh", "Div. Columnas (segmentos)", 1, 1, 8, 1),
      vigSecActivar: {
        ...et("Vigas Secundarias", "Activar", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      vigSecDir: et("Vigas Secundarias", "Corren en", 0, {
        "X (entre ejes Y)": 0,
        "Y (entre ejes X)": 1
      }),
      vigSecCantidad: m("Vigas Secundarias", "Cantidad/vano", 2, 1, 5, 1),
      vigSecB: m("Vigas Secundarias", "b sec (m)", 0.2, 0.1, 0.4, 0.05),
      vigSecH: m("Vigas Secundarias", "h sec (m)", 0.3, 0.2, 0.6, 0.05),
      losaActivar: {
        ...et("Losas de Piso", "Activar losas", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      losaEspesor: m("Losas de Piso", "Espesor (m)", 0.15, 0.08, 0.4, 0.01),
      losaSubdivX: m("Losas de Piso", "Subdiv. X", 2, 1, 6, 1),
      losaSubdivY: m("Losas de Piso", "Subdiv. Y", 2, 1, 6, 1),
      muroActivar: {
        ...et("Muros de Corte", "Activar", 0, {
          No: 0,
          Perimetrales: 1,
          "Centro X": 2,
          "Centro Y": 3,
          "Doble central": 4
        }),
        regenOnChange: true
      },
      muroEspesor: m("Muros de Corte", "Espesor (m)", 0.2, 0.1, 0.4, 0.01),
      muroSubdivV: m("Muros de Corte", "Subdiv. V (vert)", 2, 1, 6, 1),
      muroSubdivH: m("Muros de Corte", "Subdiv. H (horiz)", 2, 1, 6, 1),
      apoyo: et("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: m("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: m("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: m("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: m("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      loadCase: et("Cargas", "Caso de carga", 0, {
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
      modoCimentacion: et("Cimentaci\xF3n", "\u{1F518} Vista (toggle)", 0, {
        "\u{1F3E2} Edificio completo (ver/editar)": 0,
        "\u{1FAA8} Solo cimentaci\xF3n (P,Mx,My)": 1
      }),
      q_adm_zapata: m("Cimentaci\xF3n", "q_adm (tonf/m\xB2)", 10, 1, 100, 1),
      ks_zapata: m("Cimentaci\xF3n", "ks (kN/m\xB3)", 1030, 100, 2e5, 10),
      Hf_pedestal: m("Cimentaci\xF3n", "Df col enterrada (m) (m)", 0.5, 0, 3, 0.05),
      t_zapata: m("Cimentaci\xF3n", "t zapata (m)", 0.3, 0.1, 1.5, 0.05),
      nSubZapata: m("Cimentaci\xF3n", "Subdiv. Q4 zapata", 4, 2, 12, 1),
      voladoExtra: m("Cimentaci\xF3n", "Volado extra esq./lin (m)", 0.3, 0, 1, 0.05),
      tipoZapataOverride: et("Cimentaci\xF3n", "Tipo (override)", 0, {
        "Auto (por posici\xF3n)": 0,
        "Todas central": 1,
        "Todas lindero": 2,
        "Todas esquinera": 3
      }),
      mostrarZapatas: et("Cimentaci\xF3n", "Mostrar zapatas 3D", 0, {
        On: 1,
        Off: 0
      }),
      mostrarLabelsZapatas: et("Cimentaci\xF3n", "Mostrar etiquetas zapatas", 1, {
        On: 1,
        Off: 0
      }),
      estiloZapata: et("Cimentaci\xF3n", "Estilo render", 1, {
        "S\xF3lido (caja transl\xFAcida)": 0,
        "Shellthick (Q4 + grilla)": 1
      }),
      sistemaCimentacion: et("Cimentaci\xF3n", "Sistema cim.", 0, {
        "Zapatas aisladas": 0,
        "Zapatas + vigas de amarre": 1,
        "Vigas T invertida (corrida)": 2,
        "Vigas rect. + zapata corrida": 3,
        "Losa de cimentaci\xF3n (raft)": 4
      }),
      vigaAmarre_pos: et("Cimentaci\xF3n", "Viga amarre \u2014 posici\xF3n", 0, {
        "Unida a zapatas (z=-Hf)": 0,
        "Conectada a pedestales (-Hf/2)": 1
      }),
      vigaAmarre_h: m("Cimentaci\xF3n", "Viga amarre h (m)", 0.4, 0.2, 1, 0.05),
      vigaAmarre_b: m("Cimentaci\xF3n", "Viga amarre b (m)", 0.25, 0.15, 0.6, 0.05),
      vigaCim_h: m("Cimentaci\xF3n", "Viga cim. h (m)", 0.8, 0.3, 2, 0.05),
      vigaCim_bw: m("Cimentaci\xF3n", "Viga cim. b alma (m)", 0.4, 0.2, 1, 0.05),
      vigaCim_bf: m("Cimentaci\xF3n", "Viga cim. b ala (m)", 1.2, 0.4, 3, 0.1),
      vigaCim_tf: m("Cimentaci\xF3n", "Viga cim. e ala (m)", 0.3, 0.1, 0.8, 0.05),
      nSubViga: m("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: m("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: et("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: m("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: et("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: et("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: et("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: m("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabType: et("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: et("Avanzado", "Discretizaci\xF3n losa", 0.5, Re),
      diafragmaRigido: et("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      }),
      massSource: et("Avanzado", "Mass Source", 0, {
        "Self-weight (peso propio)": 0,
        "From Loads (DEAD+0.25\xB7LIVE) ETABS": 1
      }),
      qDead: m("Avanzado", "qDead losa (kN/m\xB2)", 3.5, 0.5, 10, 0.5),
      qLive: m("Avanzado", "qLive losa (kN/m\xB2)", 1.5, 0, 6, 0.5),
      crackedSections: et("Avanzado", "Cracked Sections (ACI 318)", 0, {
        "Off (secci\xF3n bruta Ig)": 0,
        "On: 0.7\xB7Ig col / 0.35\xB7Ig viga / 0.25\xB7Ig losa": 1
      })
    },
    dynamicParams(t) {
      const e = {}, B = Math.round(t.nPisos ?? 3), p = Math.round(t.nVanosX ?? 2), $ = Math.round(t.nVanosY ?? 2);
      for (let f = 1; f <= B; f++) e[`hP_${f}`] = m("Alturas por piso", `h Piso ${f} (m)`, 0, 0, 6, 0.1), e[`colB_p${f}`] = m("Secciones por piso", `b col P${f} (m)`, 0, 0, 1, 0.05), e[`colH_p${f}`] = m("Secciones por piso", `h col P${f} (m)`, 0, 0, 1, 0.05), e[`vigaB_p${f}`] = m("Secciones por piso", `b viga P${f} (m)`, 0, 0, 0.8, 0.05), e[`vigaH_p${f}`] = m("Secciones por piso", `h viga P${f} (m)`, 0, 0, 1, 0.05);
      for (let f = 1; f <= p; f++) e[`svX_${f}`] = m("Luces por vano", `svX #${f} (m)`, 0, 0, 12, 0.5);
      for (let f = 1; f <= $; f++) e[`svY_${f}`] = m("Luces por vano", `svY #${f} (m)`, 0, 0, 12, 0.5);
      return e;
    },
    computedLabels(t, e) {
      var _a;
      const p = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions, $ = e.nodes.rawVal;
      if (!p || !($ == null ? void 0 : $.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let f = 0, y = 0, E = 0, D = -1, X = 0, R = -1;
      const G = [];
      let at = 0, ut = 0;
      p.forEach((J, it) => {
        const h = $[it];
        if (!h || Math.abs(h[2]) > 1e-6) return;
        const I = J[2], S = J[3], pt = J[4];
        Math.abs(I) > Math.abs(f) && (f = I, D = it, h[0], h[1]), I > 0 && I > Math.abs(X) && (X = I, R = it), Math.abs(S) > Math.abs(y) && (y = S), Math.abs(pt) > Math.abs(E) && (E = pt), G.push({
          idx: it,
          x: h[0],
          y: h[1],
          P_kN: Math.abs(I),
          Mx_kN: S,
          My_kN: pt
        }), h[0] > at && (at = h[0]), h[1] > ut && (ut = h[1]);
      });
      const tt = Math.abs(f) / 9.80665, ft = Math.abs(y) / 9.80665, K = Math.abs(E) / 9.80665, x = X / 9.80665, b = Math.round(t.nPisos), g = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${tt.toFixed(2)} tonf (nodo ${D})`,
        Mx: `${ft.toFixed(2)} tonf\xB7m`,
        My: `${K.toFixed(2)} tonf\xB7m`
      };
      if (x > 0.01 && (g["\u26A0 Uplift"] = `${x.toFixed(2)} tonf (nodo ${R})`), g.Pisos = `${b}`, g["Copiar a \u2192 zapata-aislada"] = `P=${tt.toFixed(1)}, Mx=${ft.toFixed(1)}, My=${K.toFixed(1)}`, G.length > 0 && at > 0 && ut > 0) {
        const J = t.q_adm_zapata ?? 10, it = t.ks_zapata ?? 1030;
        try {
          const h = Yo(G, at, ut, J, it);
          let I = 0, S = 0, pt = 0, mt = 0, $t = -1, gt = "", k = 0, A = 0;
          for (const U of h) U.tipo === "esquinera" ? I++ : U.tipo === "lindero" ? S++ : pt++, U.sigmaMax_tonf > mt && (mt = U.sigmaMax_tonf, $t = U.idx, gt = U.tipo), U.status === "OK" && k++, U.Lz > A && (A = U.Lz);
          g["\u2500\u2500 Cimentaci\xF3n (auto) \u2500\u2500"] = "", g["Tipos zapata"] = `${I} esquineras, ${S} linderas, ${pt} centrales`, g["\u03C3_max global"] = `${mt.toFixed(2)} tonf/m\xB2 (nodo ${$t}, ${gt})`, g["\u03C3/q_adm"] = `${(mt / J).toFixed(2)}` + (mt / J <= 1 ? " \u2713" : " \u26A0"), g["Lz m\xE1x zapata"] = `${A.toFixed(2)} m`, g.Cumplen = `${k}/${h.length}` + (k === h.length ? " \u2713" : " \u26A0");
          const Lt = t.Hf_pedestal ?? 0.5, co = t.t_zapata ?? 0.3, It = Math.round(t.nSubZapata ?? 4);
          g["Df col enterrada"] = `${Lt.toFixed(2)} m` + (Lt < 1e-3 ? " (sin pedestal)" : ""), g["t zapata"] = `${co.toFixed(2)} m`, g["Subdiv. Q4"] = `${It}\xD7${It}`, g["Volado extra"] = `${(t.voladoExtra ?? 0.3).toFixed(2)} m`;
        } catch {
          g["\u2500\u2500 Cimentaci\xF3n \u2500\u2500"] = "module load error";
        }
      }
      const V = e.__plasticHinges;
      if (V) {
        const J = (V.B ?? 0) + (V.IO ?? 0) + (V.LS ?? 0) + (V.CP ?? 0);
        g["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", g["\u{1F7E2} El\xE1stico"] = `${V.Elastic ?? 0}`, g["\u{1F7E1} B \u2014 Yield"] = `${V.B ?? 0}`, g["\u{1F7E0} IO \u2014 Immed.Occ."] = `${V.IO ?? 0}`, g["\u{1F534} LS \u2014 Life Safety"] = `${V.LS ?? 0}`, g["\u26AB CP \u2014 Collapse Prev."] = `${V.CP ?? 0}`, g["Total r\xF3tulas formadas"] = `${J}`;
      }
      return g;
    },
    build(t, e) {
      var _a, _b;
      const B = Math.round(t.nVanosX), p = Math.round(t.nVanosY), $ = Math.round(t.nPisos), f = Math.max(1, Math.round(t.nSubViga)), y = Math.max(1, Math.round(t.nSubCol)), E = t.fcConcr * 0.0981, D = 4700 * Math.sqrt(E) * 1e3, X = 2e8, R = 0.2, G = 0.3, at = D / (2 * (1 + R)), ut = X / (2 * (1 + G)), tt = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, B).map((o) => o > 0 ? o : t.spanX), ft = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, p).map((o) => o > 0 ? o : t.spanY), K = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, $).map((o) => o > 0 ? o : t.hPiso), x = [];
      t.Lvix > 0 && x.push(-t.Lvix), x.push(0);
      for (let o = 0; o < B; o++) x.push(x[x.length - 1] + tt[o]);
      t.Lvdx > 0 && x.push(x[x.length - 1] + t.Lvdx);
      const b = [];
      t.Lviy > 0 && b.push(-t.Lviy), b.push(0);
      for (let o = 0; o < p; o++) b.push(b[b.length - 1] + ft[o]);
      t.Lvdy > 0 && b.push(b[b.length - 1] + t.Lvdy);
      const g = [
        0
      ];
      for (let o = 0; o < $; o++) g.push(g[g.length - 1] + K[o]);
      const V = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === x.length - 1, J = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === b.length - 1, it = (o, n) => V(o) || J(n), h = [], I = {};
      for (let o = 0; o < g.length; o++) for (let n = 0; n < b.length; n++) for (let a = 0; a < x.length; a++) o === 0 && it(a, n) || (I[`${a},${n},${o}`] = h.length, h.push([
        x[a],
        b[n],
        g[o]
      ]));
      const S = [], pt = /* @__PURE__ */ new Set(), mt = /* @__PURE__ */ new Set(), $t = /* @__PURE__ */ new Set(), gt = /* @__PURE__ */ new Map(), k = (o, n, a, d, c) => {
        if (a <= 1) {
          d.add(S.length), gt.set(S.length, c), S.push([
            o,
            n
          ]);
          return;
        }
        const C = h[o], r = h[n];
        let l = o;
        for (let Q = 1; Q < a; Q++) {
          const i = Q / a, v = h.length;
          h.push([
            C[0] + (r[0] - C[0]) * i,
            C[1] + (r[1] - C[1]) * i,
            C[2] + (r[2] - C[2]) * i
          ]), d.add(S.length), gt.set(S.length, c), S.push([
            l,
            v
          ]), l = v;
        }
        d.add(S.length), gt.set(S.length, c), S.push([
          l,
          n
        ]);
      };
      for (let o = 0; o < g.length - 1; o++) for (let n = 0; n < b.length; n++) for (let a = 0; a < x.length; a++) it(a, n) || k(I[`${a},${n},${o}`], I[`${a},${n},${o + 1}`], y, pt, o);
      for (let o = 1; o < g.length; o++) for (let n = 0; n < b.length; n++) for (let a = 0; a < x.length - 1; a++) k(I[`${a},${n},${o}`], I[`${a + 1},${n},${o}`], f, mt, o - 1);
      for (let o = 1; o < g.length; o++) for (let n = 0; n < x.length; n++) for (let a = 0; a < b.length - 1; a++) k(I[`${n},${a},${o}`], I[`${n},${a + 1},${o}`], f, mt, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), n = (d, c, C) => {
          for (let l = 0; l < h.length; l++) if (Math.abs(h[l][0] - d) < 1e-6 && Math.abs(h[l][1] - c) < 1e-6 && Math.abs(h[l][2] - C) < 1e-6) return l;
          const r = h.length;
          return h.push([
            d,
            c,
            C
          ]), r;
        }, a = t.vSecDir < 0.5 ? "x" : "y";
        for (let d = 1; d < g.length; d++) if (a === "x") for (let c = 0; c < b.length - 1; c++) {
          const C = b[c], r = b[c + 1];
          for (let l = 1; l <= o; l++) {
            const Q = C + l / (o + 1) * (r - C), i = [];
            for (let v = 0; v < x.length; v++) i.push(n(x[v], Q, g[d]));
            for (let v = 0; v < x.length - 1; v++) mt.add(S.length), S.push([
              i[v],
              i[v + 1]
            ]);
          }
        }
        else for (let c = 0; c < x.length - 1; c++) {
          const C = x[c], r = x[c + 1];
          for (let l = 1; l <= o; l++) {
            const Q = C + l / (o + 1) * (r - C), i = [];
            for (let v = 0; v < b.length; v++) i.push(n(Q, b[v], g[d]));
            for (let v = 0; v < b.length - 1; v++) mt.add(S.length), S.push([
              i[v],
              i[v + 1]
            ]);
          }
        }
      }
      const A = Math.round(t.bracesMode);
      if (A > 0) {
        const o = A === 1 || A === 2 || A === 3, n = A === 1 || A === 2 || A === 4, a = g.length - 1;
        for (let d = 0; d < a; d++) {
          if (o) for (let c = 0; c < b.length; c++) {
            if (A === 1 && c !== 0 && c !== b.length - 1) continue;
            const C = Math.floor((x.length - 1) / 2);
            for (let r = 0; r < x.length - 1; r++) {
              if (A === 1 && r !== C || it(r, c) || it(r + 1, c)) continue;
              const l = I[`${r},${c},${d}`], Q = I[`${r + 1},${c},${d + 1}`], i = I[`${r + 1},${c},${d}`], v = I[`${r},${c},${d + 1}`];
              l !== void 0 && Q !== void 0 && S.push([
                l,
                Q
              ]), i !== void 0 && v !== void 0 && S.push([
                i,
                v
              ]);
            }
          }
          if (n) for (let c = 0; c < x.length; c++) {
            if (A === 1 && c !== 0 && c !== x.length - 1) continue;
            const C = Math.floor((b.length - 1) / 2);
            for (let r = 0; r < b.length - 1; r++) {
              if (A === 1 && r !== C || it(c, r) || it(c, r + 1)) continue;
              const l = I[`${c},${r},${d}`], Q = I[`${c},${r + 1},${d + 1}`], i = I[`${c},${r + 1},${d}`], v = I[`${c},${r},${d + 1}`];
              l !== void 0 && Q !== void 0 && S.push([
                l,
                Q
              ]), i !== void 0 && v !== void 0 && S.push([
                i,
                v
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), n = (d, c, C) => `${Math.round(d * 1e4)},${Math.round(c * 1e4)},${Math.round(C * 1e4)}`;
        for (let d = 0; d < h.length; d++) o.set(n(h[d][0], h[d][1], h[d][2]), d);
        const a = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let d = 1; d < g.length; d++) {
          const c = g[d];
          for (let C = 0; C < x.length - 1; C++) for (let r = 0; r < b.length - 1; r++) {
            const l = x[C], Q = x[C + 1], i = b[r], v = b[r + 1], { n: Gt } = me(Math.abs(Q - l), a), { n: Nt } = me(Math.abs(v - i), a), qt = [];
            for (let Z = 0; Z <= Nt; Z++) {
              const xt = [];
              for (let eo = 0; eo <= Gt; eo++) {
                const yo = l + eo / Gt * (Q - l), Vo = i + Z / Nt * (v - i), Io = n(yo, Vo, c), bo = o.get(Io);
                if (bo !== void 0) xt.push(bo);
                else {
                  const Co = h.length;
                  h.push([
                    yo,
                    Vo,
                    c
                  ]), o.set(Io, Co), xt.push(Co);
                }
              }
              qt.push(xt);
            }
            for (let Z = 0; Z < Nt; Z++) for (let xt = 0; xt < Gt; xt++) $t.add(S.length), S.push([
              qt[Z][xt],
              qt[Z][xt + 1],
              qt[Z + 1][xt + 1],
              qt[Z + 1][xt]
            ]);
          }
        }
      }
      const Lt = Math.round(t.apoyo), co = Lt === 0 ? [
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
      ], It = /* @__PURE__ */ new Map();
      for (let o = 0; o < b.length; o++) for (let n = 0; n < x.length; n++) it(n, o) || It.set(I[`${n},${o},0`], [
        ...co
      ]);
      const U = Math.round(t.loadCase ?? 0), oo = U === 1 ? [
        1,
        1,
        0,
        0
      ] : U === 2 ? [
        1,
        0,
        0,
        0
      ] : U === 3 ? [
        0,
        1,
        0,
        0
      ] : U === 4 ? [
        0,
        0,
        1,
        0
      ] : U === 5 ? [
        0,
        0,
        0,
        1
      ] : U === 6 ? [
        0,
        0,
        1,
        1
      ] : U === 7 ? [
        1.2,
        1.6,
        0,
        0
      ] : U === 8 ? [
        1.2,
        1,
        1,
        0
      ] : U === 9 ? [
        1.2,
        1,
        0,
        1
      ] : U === 10 ? [
        1.2,
        1,
        -1,
        0
      ] : U === 11 ? [
        1.2,
        1,
        0,
        -1
      ] : U === 12 ? [
        0.9,
        0,
        1,
        0
      ] : U === 13 ? [
        0.9,
        0,
        0,
        1
      ] : [
        1,
        1,
        1,
        1
      ], [go, Mo, po, Do] = oo, ro = /* @__PURE__ */ new Map(), So = go * t.CM + Mo * t.CV;
      if (So !== 0) for (let o = 1; o < g.length; o++) for (let n = 0; n < b.length; n++) for (let a = 0; a < x.length; a++) {
        const d = `${a},${n},${o}`;
        I[d] !== void 0 && ro.set(I[d], [
          0,
          0,
          So,
          0,
          0,
          0
        ]);
      }
      const Ko = po * t.Ex, Jo = Do * t.Ey;
      if (Ko !== 0 || Jo !== 0) {
        const o = I[`${x.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${$}`];
        if (o !== void 0) {
          const n = ro.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          ro.set(o, [
            n[0] + Ko,
            n[1] + Jo,
            n[2],
            n[3],
            n[4],
            n[5]
          ]);
        }
      }
      const qo = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), Ho = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), pe = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), xe = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), _e = (o) => {
        const n = qo[o] ?? t.colSize, a = Ho[o] ?? t.colSize;
        return {
          A: n * a,
          Iz: n * a ** 3 / 12,
          Iy: a * n ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(n, a), 4)
        };
      }, ve = (o) => {
        const n = pe[o] ?? t.vigaB, a = xe[o] ?? t.vigaH;
        return {
          A: n * a,
          Iy: n * a ** 3 / 12,
          Iz: a * n ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(n, a), 3) * Math.max(n, a)
        };
      }, ye = t.matCol < 0.5 ? D : X, be = t.matCol < 0.5 ? at : ut, Ce = t.matCol < 0.5 ? R : G, we = t.matViga < 0.5 ? D : X, ze = t.matViga < 0.5 ? at : ut, $e = t.matViga < 0.5 ? R : G, xo = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), ko = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), Uo = /* @__PURE__ */ new Map(), Qo = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Map(), te = Math.round(t.slabType), Se = te === 2 ? 0 : 1, ke = te === 1 ? 0 : 1, Eo = t.crackedSections > 0.5, oe = t.matCol < 0.5 && Eo ? 0.7 : 1, ee = t.matViga < 0.5 && Eo ? 0.35 : 1, Oe = Eo ? 0.25 : 1, Pe = 1, Ro = t.massSource > 0.5, Fe = t.qDead + 0.25 * t.qLive, Le = Ro ? Fe / Me / Math.max(t.slabT, 0.05) : uo;
      for (let o = 0; o < S.length; o++) {
        const n = gt.get(o) ?? 0;
        if ($t.has(o)) xo.set(o, D), _o.set(o, at), Lo.set(o, R), Uo.set(o, t.slabT), Qo.set(o, Se * Pe), Wo.set(o, ke * Oe), vo.set(o, Le);
        else if (pt.has(o)) {
          const a = _e(Math.min(n, 7));
          xo.set(o, ye), _o.set(o, be), Lo.set(o, Ce), ko.set(o, a.A), Oo.set(o, a.Iz * oe), Po.set(o, a.Iy * oe), Fo.set(o, a.J), vo.set(o, Ro ? 0 : uo);
        } else {
          const a = ve(Math.min(n, 7));
          xo.set(o, we), _o.set(o, ze), Lo.set(o, $e), ko.set(o, a.A), Oo.set(o, a.Iz * ee), Po.set(o, a.Iy * ee), Fo.set(o, a.J), vo.set(o, Ro ? 0 : uo);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let c = 1; c < g.length; c++) o.push(g[c]);
        const n = Ze(h, o), a = S.length;
        for (const c of n.masterNodes) h.push([
          c.x,
          c.y,
          c.z
        ]);
        for (const c of n.rigidLinks) S.push(c);
        je(n, {
          elasticities: xo,
          shearModuli: _o,
          areas: ko,
          momentsOfInertiaY: Oo,
          momentsOfInertiaZ: Po,
          torsionalConstants: Fo,
          densities: vo
        }, a);
      }
      e.nodes.val = h, e.elements.val = S, e.nodeInputs.val = {
        supports: It,
        loads: ro
      }, e.elementInputs.val = {
        elasticities: xo,
        shearModuli: _o,
        areas: ko,
        momentsOfInertiaY: Oo,
        momentsOfInertiaZ: Po,
        torsionalConstants: Fo,
        densities: vo,
        poissonsRatios: Lo,
        thicknesses: Uo,
        membraneModifiers: Qo,
        bendingModifiers: Wo
      };
      const se = de(h, S, e.nodeInputs.val, e.elementInputs.val);
      e.deformOutputs.val = se, e.analyzeOutputs.val = Ve(h, S, e.elementInputs.val, se);
      const Zo = Ne(x, b, g);
      try {
        const o = Ge(h, S, e.analyzeOutputs.rawVal, e.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), pt);
        let n = 1 / 0, a = 1 / 0, d = 1 / 0, c = -1 / 0, C = -1 / 0, r = -1 / 0;
        for (const i of h) i[0] < n && (n = i[0]), i[0] > c && (c = i[0]), i[1] < a && (a = i[1]), i[1] > C && (C = i[1]), i[2] < d && (d = i[2]), i[2] > r && (r = i[2]);
        const l = Math.sqrt((c - n) ** 2 + (C - a) ** 2 + (r - d) ** 2) || 1, Q = Ke(o, h, l, {
          showElastic: false,
          radiusFactor: 0.015
        });
        Zo.push(...Q), e.__plasticHinges = Je(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      if ((t.mostrarZapatas ?? 1) >= 0.5) try {
        const o = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions;
        if (o) {
          const n = [];
          let a = 0, d = 0;
          if (o.forEach((c, C) => {
            const r = h[C];
            !r || Math.abs(r[2]) > 1e-6 || (n.push({
              idx: C,
              x: r[0],
              y: r[1],
              P_kN: Math.abs(c[2]),
              Mx_kN: c[3],
              My_kN: c[4]
            }), r[0] > a && (a = r[0]), r[1] > d && (d = r[1]));
          }), n.length > 0) {
            const c = t.q_adm_zapata ?? 10, C = t.ks_zapata ?? 1030, r = Math.max(0, t.Hf_pedestal ?? 0.5), l = Math.max(0.1, t.t_zapata ?? 0.3), Q = Math.max(2, Math.round(t.nSubZapata ?? 4)), i = Math.max(0, t.voladoExtra ?? 0.3), v = Math.round(t.tipoZapataOverride ?? 0) | 0, Gt = Math.round(t.estiloZapata ?? 1), Nt = Yo(n, a, d, c, C), qt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const F of Nt) v > 0 && (F.tipo = qt[v - 1]), F.t = l;
            const Z = [], xt = (F) => new Xo({
              color: F,
              transparent: true,
              opacity: 0.55,
              roughness: 0.7
            }), eo = new Dt({
              color: 0,
              linewidth: 2
            }), yo = new Dt({
              color: 2236962,
              linewidth: 1,
              transparent: true,
              opacity: 0.5
            }), Vo = new Xo({
              color: 10265519,
              transparent: true,
              opacity: 0.75,
              roughness: 0.5
            }), Io = new Dt({
              color: 1118481,
              linewidth: 2
            }), bo = qo[0] ?? t.colSize, Co = Ho[0] ?? t.colSize;
            for (const F of Nt) {
              const q = F.Lz, st = F.Bz, Yt = F.t;
              let At = 0, Bt = 0;
              F.tipo === "esquinera" ? (At = F.x < a / 2 ? -(q / 2 - i) : q / 2 - i, Bt = F.y < d / 2 ? -(st / 2 - i) : st / 2 - i) : F.tipo === "lindero" && (Math.abs(F.x) < 1e-3 || Math.abs(F.x - a) < 1e-3 ? At = F.x < a / 2 ? -(q / 2 - i) : q / 2 - i : (Math.abs(F.y) < 1e-3 || Math.abs(F.y - d) < 1e-3) && (Bt = F.y < d / 2 ? -(st / 2 - i) : st / 2 - i));
              const j = F.x - At, O = F.y - Bt, N = -r, St = N - Yt / 2, Et = N - Yt, Kt = F.ratio;
              let Jt = 4906624;
              if (Kt > 1.5 ? Jt = 15680580 : Kt > 1 ? Jt = 16096779 : Kt > 0.8 && (Jt = 16498468), r > 1e-3) {
                const Mt = new io().setFromPoints([
                  new H(F.x, F.y, 0),
                  new H(F.x, F.y, -r)
                ]);
                Z.push(new fe(Mt, new Dt({
                  color: 6333946,
                  linewidth: 4
                }))), Z.push(Xt(`Df=${r.toFixed(2)}m`, F.x + 0.1, F.y + 0.1, -r / 2, "#60a5fa"));
              }
              if (Gt === 0) {
                const Mt = new Te(q, st, Yt), Ht = new To(Mt, xt(Jt));
                Ht.position.set(j, O, St), Z.push(Ht);
                const Rt = new ho(new Ye(Mt), eo);
                Rt.position.copy(Ht.position), Z.push(Rt);
              } else {
                const Mt = new De(q, st), Ht = new Xo({
                  color: Jt,
                  transparent: true,
                  opacity: 0.45,
                  roughness: 0.6,
                  side: qe
                }), Rt = new To(Mt, Ht);
                Rt.position.set(j, O, N), Z.push(Rt);
                const Ut = new To(Mt.clone(), Ht.clone());
                Ut.position.set(j, O, Et), Z.push(Ut);
                const ae = q / Q, ie = st / Q, Tt = [];
                for (let yt = 0; yt <= Q; yt++) {
                  const _t = -q / 2 + yt * ae;
                  Tt.push(new H(j + _t, O - st / 2, N), new H(j + _t, O + st / 2, N)), Tt.push(new H(j + _t, O - st / 2, Et), new H(j + _t, O + st / 2, Et));
                }
                for (let yt = 0; yt <= Q; yt++) {
                  const _t = -st / 2 + yt * ie;
                  Tt.push(new H(j - q / 2, O + _t, N), new H(j + q / 2, O + _t, N)), Tt.push(new H(j - q / 2, O + _t, Et), new H(j + q / 2, O + _t, Et));
                }
                const zo = new io().setFromPoints(Tt);
                Z.push(new ho(zo, yo));
                const lo = [
                  [
                    -q / 2,
                    -st / 2
                  ],
                  [
                    q / 2,
                    -st / 2
                  ],
                  [
                    q / 2,
                    st / 2
                  ],
                  [
                    -q / 2,
                    st / 2
                  ]
                ], so = [];
                for (let yt = 0; yt < 4; yt++) {
                  const [_t, s] = lo[yt], [w, u] = lo[(yt + 1) % 4];
                  so.push(new H(j + _t, O + s, N), new H(j + w, O + u, N)), so.push(new H(j + _t, O + s, Et), new H(j + w, O + u, Et)), so.push(new H(j + _t, O + s, N), new H(j + _t, O + s, Et));
                }
                const fo = new io().setFromPoints(so);
                Z.push(new ho(fo, eo));
              }
              (t.mostrarLabelsZapatas ?? 1) >= 0.5 && Z.push(Xt(`${F.tipo[0].toUpperCase()} ${q.toFixed(2)}\xD7${st.toFixed(2)}\xD7${Yt.toFixed(2)}m \u03C3/q=${F.ratio.toFixed(2)}`, j, O, Et - 0.2, Kt <= 1 ? "#4ade80" : Kt <= 1.5 ? "#f59e0b" : "#ef4444"));
            }
            if (Math.round(t.sistemaCimentacion ?? 0) === 1) {
              const F = Math.round(t.vigaAmarre_pos ?? 0), q = F === 0 ? -r : -r / 2, st = t.vigaAmarre_b ?? 0.25, Yt = t.vigaAmarre_h ?? 0.4, At = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map();
              for (const O of n) {
                const N = O.y.toFixed(4), St = O.x.toFixed(4);
                At.has(N) || At.set(N, []), Bt.has(St) || Bt.set(St, []), At.get(N).push(O), Bt.get(St).push(O);
              }
              const j = [];
              for (const O of At.values()) {
                O.sort((N, St) => N.x - St.x);
                for (let N = 0; N < O.length - 1; N++) j.push(new H(O[N].x, O[N].y, q)), j.push(new H(O[N + 1].x, O[N + 1].y, q));
              }
              for (const O of Bt.values()) {
                O.sort((N, St) => N.y - St.y);
                for (let N = 0; N < O.length - 1; N++) j.push(new H(O[N].x, O[N].y, q)), j.push(new H(O[N + 1].x, O[N + 1].y, q));
              }
              j.length > 0 && (Z.push(new ho(new io().setFromPoints(j), new Dt({
                color: 2282478,
                linewidth: 3
              }))), Z.push(Xt(`Vigas amarre ${(st * 100).toFixed(0)}\xD7${(Yt * 100).toFixed(0)} cm @ ${F === 0 ? "zapatas" : "pedestales"}`, a / 2, d / 2, q + 0.2, "#22d3ee")));
            }
            Zo.push(...Z);
          }
        }
      } catch (o) {
        console.warn("[Zapatas 3D]", o);
      }
      if ((t.modoCimentacion ?? 0) >= 0.5) try {
        const n = (_b = e.deformOutputs.rawVal) == null ? void 0 : _b.reactions;
        if (n && n.size > 0) {
          const a = [];
          let d = 0, c = 0;
          if (n.forEach((C, r) => {
            const l = h[r];
            !l || Math.abs(l[2]) > 1e-6 || (a.push({
              idx: r,
              x: l[0],
              y: l[1],
              P_kN: Math.abs(C[2]),
              Mx_kN: C[3],
              My_kN: C[4]
            }), l[0] > d && (d = l[0]), l[1] > c && (c = l[1]));
          }), a.length > 0) {
            const C = t.q_adm_zapata ?? 10, r = t.ks_zapata ?? 1030, l = Math.max(0, t.Hf_pedestal ?? 0.5), Q = Math.max(0.1, t.t_zapata ?? 0.3), i = Math.max(2, Math.round(t.nSubZapata ?? 4)), v = Math.max(0, t.voladoExtra ?? 0.3), Gt = Math.round(t.tipoZapataOverride ?? 0) | 0, Nt = Yo(a, d, c, C, r), qt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const s of Nt) Gt > 0 && (s.tipo = qt[Gt - 1]), s.t = Q;
            const Z = qo[0] ?? t.colSize, xt = Ho[0] ?? t.colSize, eo = Z * xt, yo = Z * xt ** 3 / 12, Vo = xt * Z ** 3 / 12, Io = 0.14 * Math.pow(Math.min(Z, xt), 4), bo = t.matCol < 0.5 ? D : X, Co = t.matCol < 0.5 ? at : ut, ne = t.matCol < 0.5 ? R : G, F = [], q = [], st = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map(), wo = [], Mt = [], Ht = (s, w, u) => `${Math.round(s * 1e4)},${Math.round(w * 1e4)},${Math.round(u * 1e4)}`, Rt = /* @__PURE__ */ new Map(), Ut = (s, w, u) => {
              const P = Ht(s, w, u), T = Rt.get(P);
              if (T !== void 0) return T;
              const nt = F.length;
              return F.push([
                s,
                w,
                u
              ]), Rt.set(P, nt), nt;
            }, ae = new Dt({
              color: 0,
              linewidth: 2
            }), ie = new Dt({
              color: 1118481,
              linewidth: 2
            });
            for (const s of Nt) {
              const w = s.Lz, u = s.Bz, P = s.t;
              let T = 0, nt = 0;
              s.tipo === "esquinera" ? (T = s.x < d / 2 ? -(w / 2 - v) : w / 2 - v, nt = s.y < c / 2 ? -(u / 2 - v) : u / 2 - v) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - d) < 1e-3 ? T = s.x < d / 2 ? -(w / 2 - v) : w / 2 - v : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - c) < 1e-3) && (nt = s.y < c / 2 ? -(u / 2 - v) : u / 2 - v));
              const kt = s.x - T, wt = s.y - nt, Zt = -l, Ot = w / i, jt = u / i, ct = [];
              for (let Y = 0; Y <= i; Y++) {
                const W = [];
                for (let lt = 0; lt <= i; lt++) {
                  const Ft = kt - w / 2 + lt * Ot, vt = wt - u / 2 + Y * jt;
                  W.push(Ut(Ft, vt, Zt));
                }
                ct.push(W);
              }
              for (let Y = 0; Y < i; Y++) for (let W = 0; W < i; W++) {
                const lt = q.length;
                q.push([
                  ct[Y][W],
                  ct[Y][W + 1],
                  ct[Y + 1][W + 1],
                  ct[Y + 1][W]
                ]), Et.set(lt, P), st.set(lt, D), St.set(lt, R), Yt.set(lt, at), N.set(lt, uo);
              }
              const Qt = 0.5;
              for (let Y = 0; Y <= i; Y++) for (let W = 0; W <= i; W++) {
                const lt = Ot * jt * (W === 0 || W === i ? 0.5 : 1) * (Y === 0 || Y === i ? 0.5 : 1), Ft = r * lt, vt = Ft * Qt, z = ct[Y][W];
                wo.push({
                  node: z,
                  dof: 0,
                  k: vt
                }), wo.push({
                  node: z,
                  dof: 1,
                  k: vt
                }), wo.push({
                  node: z,
                  dof: 2,
                  k: Ft
                }), wo.push({
                  node: z,
                  dof: 5,
                  k: Ft * 0.1
                });
              }
              const Pt = ct[0][0];
              Kt.set(Pt, [
                false,
                false,
                false,
                true,
                true,
                true
              ]);
              let _ = 0, L = 0, M = 1 / 0;
              for (let Y = 0; Y <= i; Y++) for (let W = 0; W <= i; W++) {
                const lt = ct[Y][W], Ft = F[lt][0], vt = F[lt][1], z = Math.sqrt((Ft - s.x) ** 2 + (vt - s.y) ** 2);
                z < M && (M = z, _ = Y, L = W);
              }
              const Vt = ct[_][L], bt = a.find((Y) => Y.idx === s.idx);
              Jt.set(Vt, [
                0,
                0,
                -bt.P_kN,
                bt.Mx_kN,
                bt.My_kN,
                0
              ]);
              const Wt = s.ratio;
              let mo = 4906624;
              if (Wt > 1.5 ? mo = 15680580 : Wt > 1 ? mo = 16096779 : Wt > 0.8 && (mo = 16498468), l > 1e-3) {
                const Y = new io().setFromPoints([
                  new H(s.x, s.y, 0),
                  new H(s.x, s.y, -l)
                ]);
                Mt.push(new fe(Y, new Dt({
                  color: 6333946,
                  linewidth: 4
                }))), Mt.push(Xt(`Df=${l.toFixed(2)}m`, s.x + 0.1, s.y + 0.1, -l / 2, "#60a5fa"));
              }
              {
                const Y = new Dt({
                  color: 11184810,
                  linewidth: 1,
                  transparent: true,
                  opacity: 0.6
                }), W = w / i, lt = u / i, Ft = [];
                for (let vt = 0; vt <= i; vt++) {
                  const z = -w / 2 + vt * W;
                  Ft.push(new H(kt + z, wt - u / 2, -l), new H(kt + z, wt + u / 2, -l));
                }
                for (let vt = 0; vt <= i; vt++) {
                  const z = -u / 2 + vt * lt;
                  Ft.push(new H(kt - w / 2, wt + z, -l), new H(kt + w / 2, wt + z, -l));
                }
                Mt.push(new ho(new io().setFromPoints(Ft), Y));
              }
              if ((t.mostrarLabelsZapatas ?? 1) >= 0.5) {
                const Y = bt.P_kN / 9.80665, W = bt.Mx_kN / 9.80665, lt = bt.My_kN / 9.80665;
                Mt.push(Xt(`P=${Y.toFixed(2)} tonf`, s.x, s.y, 0.3, "#fbbf24")), Mt.push(Xt(`Mx=${W.toFixed(2)}  My=${lt.toFixed(2)} tonf\xB7m`, s.x, s.y, 0.1, "#fbbf24")), Mt.push(Xt(`${s.tipo[0].toUpperCase()} ${w.toFixed(2)}\xD7${u.toFixed(2)}\xD7${P.toFixed(2)}m \u03C3/q=${Wt.toFixed(2)}`, kt, wt, -l - P - 0.2, Wt <= 1 ? "#4ade80" : Wt <= 1.5 ? "#f59e0b" : "#ef4444"));
              }
            }
            const Tt = Math.round(t.sistemaCimentacion ?? 0);
            if (Tt === 1) {
              const s = Math.round(t.vigaAmarre_pos ?? 0), w = t.vigaAmarre_h ?? 0.4, u = t.vigaAmarre_b ?? 0.25, P = u * w, T = u * w ** 3 / 12, nt = w * u ** 3 / 12, kt = 0.21 * Math.pow(Math.min(u, w), 3) * Math.max(u, w), wt = /* @__PURE__ */ new Map();
              for (const _ of Nt) {
                let L;
                s === 0 ? L = -l : L = -l / 2;
                const M = Ut(_.x, _.y, L);
                if (wt.set(_.idx, M), s === 1 && l > 1e-3) {
                  const rt = Ut(_.x, _.y, -l / 2), Vt = Ut(_.x, _.y, 0), bt = Ut(_.x, _.y, -l);
                }
              }
              const Zt = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map();
              for (const _ of a) {
                const L = _.y.toFixed(4), M = _.x.toFixed(4);
                Zt.has(L) || Zt.set(L, []), Ot.has(M) || Ot.set(M, []), Zt.get(L).push(_), Ot.get(M).push(_);
              }
              const jt = (_, L) => {
                const M = q.length;
                q.push([
                  _,
                  L
                ]), st.set(M, bo), Yt.set(M, Co), St.set(M, ne), At.set(M, P), Bt.set(M, nt), j.set(M, T), O.set(M, kt), N.set(M, uo);
              };
              let ct = 0;
              for (const _ of Zt.values()) {
                _.sort((L, M) => L.x - M.x);
                for (let L = 0; L < _.length - 1; L++) {
                  const M = wt.get(_[L].idx), rt = wt.get(_[L + 1].idx);
                  M !== void 0 && rt !== void 0 && (jt(M, rt), ct++);
                }
              }
              for (const _ of Ot.values()) {
                _.sort((L, M) => L.y - M.y);
                for (let L = 0; L < _.length - 1; L++) {
                  const M = wt.get(_[L].idx), rt = wt.get(_[L + 1].idx);
                  M !== void 0 && rt !== void 0 && (jt(M, rt), ct++);
                }
              }
              const Qt = new Dt({
                color: 2282478,
                linewidth: 3
              }), Pt = [];
              for (const _ of Zt.values()) {
                const L = [
                  ..._
                ].sort((M, rt) => M.x - rt.x);
                for (let M = 0; M < L.length - 1; M++) {
                  const rt = L[M], Vt = L[M + 1], bt = s === 0 ? -l : -l / 2;
                  Pt.push(new H(rt.x, rt.y, bt)), Pt.push(new H(Vt.x, Vt.y, bt));
                }
              }
              for (const _ of Ot.values()) {
                const L = [
                  ..._
                ].sort((M, rt) => M.y - rt.y);
                for (let M = 0; M < L.length - 1; M++) {
                  const rt = L[M], Vt = L[M + 1], bt = s === 0 ? -l : -l / 2;
                  Pt.push(new H(rt.x, rt.y, bt)), Pt.push(new H(Vt.x, Vt.y, bt));
                }
              }
              if (Pt.length > 0) {
                const _ = new io().setFromPoints(Pt);
                Mt.push(new ho(_, Qt));
              }
              Mt.push(Xt(`+${ct} vigas de amarre ${(u * 100).toFixed(0)}\xD7${(w * 100).toFixed(0)} cm @ ${s === 0 ? "zapatas" : "pedestales"}`, d / 2, c / 2, s === 1 ? -l / 2 + 0.3 : -l + 0.3, "#22d3ee")), console.log(`[Cimentaci\xF3n] Sistema 1 \u2014 ${ct} vigas de amarre ${(u * 100).toFixed(0)}\xD7${(w * 100).toFixed(0)} cm en posici\xF3n ${s === 0 ? "zapatas" : "pedestales"}`);
            } else Tt >= 2 && (console.warn(`[Cimentaci\xF3n] Sistema ${Tt} (${[
              "",
              "",
              "Vigas T invertida",
              "Vigas rect. + zapata corrida",
              "Losa de cimentaci\xF3n"
            ][Tt]}) a\xFAn no implementado completamente. Mostrando zapatas aisladas. Pr\xF3ximamente: malla shell continua + frames T-invertida.`), Mt.push(Xt(`Sistema ${Tt} (TODO) \u2014 usando zapatas aisladas`, d / 2, c / 2, 1.5, "#fbbf24")));
            const zo = Math.round(t.sistemaCimentacion ?? 0), lo = 0.3, so = Math.round(t.vigaAmarre_pos ?? 0), fo = /* @__PURE__ */ new Map();
            if (zo === 1) {
              const s = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
              for (const P of a) {
                const T = P.y.toFixed(4), nt = P.x.toFixed(4);
                s.has(T) || s.set(T, []), w.has(nt) || w.set(nt, []), s.get(T).push(P), w.get(nt).push(P);
              }
              const u = (P) => fo.set(P, (fo.get(P) ?? 0) + 1);
              for (const P of s.values()) {
                P.sort((T, nt) => T.x - nt.x);
                for (let T = 0; T < P.length - 1; T++) u(P[T].idx), u(P[T + 1].idx);
              }
              for (const P of w.values()) {
                P.sort((T, nt) => T.y - nt.y);
                for (let T = 0; T < P.length - 1; T++) u(P[T].idx), u(P[T + 1].idx);
              }
              console.log(`[Cimentaci\xF3n] Vigas de amarre activas \u2014 momentos en zapatas reducidos por factor (1 - ${lo} \xB7 n_vigas/4):`), fo.forEach((P, T) => {
                const nt = (lo * P / 4 * 100).toFixed(0);
                console.log(`   Zapata ${T}: ${P} vigas conectadas \u2192 momento reducido ${nt}%`);
              }), so === 0 && console.log("   \u21B3 vigaAmarre_pos=0 (mismo nivel zapata) \u2192 en F2K se exportar\xE1 como cimentaci\xF3n corrida con ks\xB7b\xB7dL distribuido por nodo");
            }
            const yt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map();
            for (const s of Nt) {
              const w = a.find((z) => z.idx === s.idx), u = s.Lz, P = s.Bz, T = s.t;
              let nt = 0, kt = 0;
              s.tipo === "esquinera" ? (nt = s.x < d / 2 ? -(u / 2 - v) : u / 2 - v, kt = s.y < c / 2 ? -(P / 2 - v) : P / 2 - v) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - d) < 1e-3 ? nt = s.x < d / 2 ? -(u / 2 - v) : u / 2 - v : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - c) < 1e-3) && (kt = s.y < c / 2 ? -(P / 2 - v) : P / 2 - v));
              const wt = s.x - nt, Zt = s.y - kt, Ot = [], jt = [], ct = {
                elasticities: /* @__PURE__ */ new Map(),
                shearModuli: /* @__PURE__ */ new Map(),
                poissonsRatios: /* @__PURE__ */ new Map(),
                thicknesses: /* @__PURE__ */ new Map(),
                densities: /* @__PURE__ */ new Map()
              }, Qt = u / i, Pt = P / i, _ = [], L = [];
              for (let z = 0; z <= i; z++) {
                const ot = [];
                for (let dt = 0; dt <= i; dt++) {
                  const zt = -u / 2 + dt * Qt, Ct = -P / 2 + z * Pt;
                  ot.push(Ot.length), Ot.push([
                    zt,
                    Ct,
                    0
                  ]);
                  const No = wt + zt, Ao = Zt + Ct, Bo = Ht(No, Ao, -l), no = Rt.get(Bo);
                  no !== void 0 ? L.push(no) : L.push(-1);
                }
                _.push(ot);
              }
              for (let z = 0; z < i; z++) for (let ot = 0; ot < i; ot++) {
                const dt = jt.length;
                jt.push([
                  _[z][ot],
                  _[z][ot + 1],
                  _[z + 1][ot + 1],
                  _[z + 1][ot]
                ]), ct.thicknesses.set(dt, T), ct.elasticities.set(dt, D), ct.poissonsRatios.set(dt, R), ct.shearModuli.set(dt, at), ct.densities.set(dt, uo);
              }
              const M = [], rt = 0.5;
              for (let z = 0; z <= i; z++) for (let ot = 0; ot <= i; ot++) {
                const dt = Qt * Pt * (ot === 0 || ot === i ? 0.5 : 1) * (z === 0 || z === i ? 0.5 : 1), zt = r * dt, Ct = _[z][ot];
                M.push({
                  node: Ct,
                  dof: 0,
                  k: zt * rt
                }), M.push({
                  node: Ct,
                  dof: 1,
                  k: zt * rt
                }), M.push({
                  node: Ct,
                  dof: 2,
                  k: zt
                });
              }
              if (zo === 1 && so === 0) {
                const z = t.vigaAmarre_b ?? 0.25, ot = s.idx, dt = a.filter((ht) => Math.abs(ht.y - s.y) < 1e-3 && ht.idx !== ot).sort((ht, $o) => ht.x - $o.x), zt = a.filter((ht) => Math.abs(ht.x - s.x) < 1e-3 && ht.idx !== ot).sort((ht, $o) => ht.y - $o.y), Ct = dt.find((ht) => ht.x > s.x), No = [
                  ...dt
                ].reverse().find((ht) => ht.x < s.x), Ao = zt.find((ht) => ht.y > s.y), Bo = [
                  ...zt
                ].reverse().find((ht) => ht.y < s.y), no = (ht, $o) => {
                  const ce = $o / 2;
                  for (let to = 0; to <= i; to++) {
                    const Ee = to === 0 || to === i ? ce / (2 * i) : ce / i, re = r * z * Ee, le = re * rt;
                    let ao;
                    switch (ht) {
                      case "x+":
                        ao = _[to][i];
                        break;
                      case "x-":
                        ao = _[to][0];
                        break;
                      case "y+":
                        ao = _[i][to];
                        break;
                      case "y-":
                        ao = _[0][to];
                        break;
                    }
                    M.push({
                      node: ao,
                      dof: 0,
                      k: le
                    }), M.push({
                      node: ao,
                      dof: 1,
                      k: le
                    }), M.push({
                      node: ao,
                      dof: 2,
                      k: re
                    });
                  }
                };
                Ct && no("x+", Ct.x - s.x), No && no("x-", s.x - No.x), Ao && no("y+", Ao.y - s.y), Bo && no("y-", s.y - Bo.y);
              }
              const Vt = r * Qt * Pt * 1e-4;
              M.push({
                node: _[0][0],
                dof: 3,
                k: Vt
              }), M.push({
                node: _[0][0],
                dof: 4,
                k: Vt
              }), M.push({
                node: _[0][0],
                dof: 5,
                k: Vt
              });
              const bt = -nt, Wt = -kt;
              let mo = 0, jo = 0, Y = 1 / 0;
              for (let z = 0; z <= i; z++) for (let ot = 0; ot <= i; ot++) {
                const dt = -u / 2 + ot * Qt, zt = -P / 2 + z * Pt, Ct = (dt - bt) ** 2 + (zt - Wt) ** 2;
                Ct < Y && (Y = Ct, mo = z, jo = ot);
              }
              const W = _[mo][jo], lt = /* @__PURE__ */ new Map(), Ft = fo.get(s.idx) ?? 0, vt = zo === 1 ? Math.max(0.4, 1 - lo * Ft / 4) : 1;
              lt.set(W, [
                0,
                0,
                -w.P_kN,
                w.Mx_kN * vt,
                w.My_kN * vt,
                0
              ]);
              try {
                const ot = de(Ot, jt, {
                  supports: /* @__PURE__ */ new Map(),
                  loads: lt
                }, ct, M).deformations;
                for (let dt = 0; dt < Ot.length; dt++) {
                  const zt = L[dt];
                  if (zt >= 0) {
                    const Ct = ot.get(dt);
                    Ct && yt.set(zt, [
                      ...Ct
                    ]);
                  }
                }
              } catch (z) {
                console.warn(`[Zapata ${s.idx}] solver fall\xF3:`, z);
              }
            }
            for (let s = 0; s < q.length; s++) {
              const w = q[s];
              if (w.length !== 4) continue;
              const u = [];
              for (const P of w) {
                const T = yt.get(P);
                u.push(r * (T ? T[2] : 0) / 9.80665);
              }
              _t.set(s, u);
            }
            e.nodes.val = F, e.elements.val = q, e.nodeInputs.val = {
              supports: Kt,
              loads: Jt
            }, e.elementInputs.val = {
              elasticities: st,
              shearModuli: Yt,
              areas: At,
              momentsOfInertiaY: Bt,
              momentsOfInertiaZ: j,
              torsionalConstants: O,
              densities: N,
              poissonsRatios: St,
              thicknesses: Et
            }, e.deformOutputs.val = {
              deformations: yt,
              reactions: /* @__PURE__ */ new Map()
            }, e.analyzeOutputs.val = {
              pressure: _t,
              colorMapRanges: {
                pressure: [
                  -C,
                  0
                ]
              }
            }, e.objects3D.val = Mt, console.log(`[Modo Cimentaci\xF3n] ${a.length} zapatas + pedestales (Hf=${l} m, t=${Q} m, q_adm=${C} tonf/m\xB2, ks=${r} kN/m\xB3) \u2014 reemplaza superestructura`);
            try {
              const s = () => {
                var _a2;
                const u = (_a2 = document.querySelector("#viewer")) == null ? void 0 : _a2.__settings;
                u && (u.shellResults && (u.shellResults.val = "pressure"), u.deformedShape && (u.deformedShape.val = false), u.deformScale && (u.deformScale.val = 5), u.frameResults && (u.frameResults.val = "none"), u.custom3D && (u.custom3D.val = true));
              };
              [
                0,
                100,
                300
              ].forEach((w) => setTimeout(s, w));
            } catch {
            }
            return;
          }
        }
      } catch (o) {
        console.warn("[Modo Cimentaci\xF3n] error:", o);
      }
      e.objects3D.val = Zo;
    },
    runModal(t, e, B) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const p = e.nodes.val, $ = e.elements.val, f = e.nodeInputs.val, y = e.elementInputs.val;
      if (!(!p.length || !$.length || !((_a = f.supports) == null ? void 0 : _a.size) || !((_b = y.densities) == null ? void 0 : _b.size))) try {
        const E = [], D = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
        let x = 0, b = 0;
        const g = [];
        let V = 0;
        for (let k = 0; k < $.length; k++) {
          const A = $[k];
          let Lt = false, co = false;
          if (A.length === 4) {
            const It = A.map((oo) => p[oo][2]);
            if (Math.max(...It) - Math.min(...It) < 0.02) {
              const oo = p[A[0]][0], go = p[A[0]][1], Mo = p[A[2]][0], po = p[A[2]][1], Do = Math.abs((Mo - oo) * (po - go)), ro = ((_c = y.thicknesses) == null ? void 0 : _c.get(k)) ?? 0.15, So = ((_d = y.densities) == null ? void 0 : _d.get(k)) ?? 24;
              x += So * Do * ro, Lt = true;
            }
          } else if (A.length === 2) {
            const It = p[A[0]][2], U = p[A[1]][2], oo = Math.sqrt((p[A[1]][0] - p[A[0]][0]) ** 2 + (p[A[1]][1] - p[A[0]][1]) ** 2);
            if (Math.abs(U - It) > oo) {
              co = true;
              const go = Math.abs(U - It), Mo = ((_e = y.areas) == null ? void 0 : _e.get(k)) ?? 0, po = ((_f = y.densities) == null ? void 0 : _f.get(k)) ?? 24;
              b += po * Mo * go;
            }
          }
          Lt || (E.push(A), ((_g = y.areas) == null ? void 0 : _g.has(k)) && D.set(V, y.areas.get(k)), ((_h = y.momentsOfInertiaY) == null ? void 0 : _h.has(k)) && X.set(V, y.momentsOfInertiaY.get(k)), ((_i = y.momentsOfInertiaZ) == null ? void 0 : _i.has(k)) && R.set(V, y.momentsOfInertiaZ.get(k)), ((_j = y.torsionalConstants) == null ? void 0 : _j.has(k)) && G.set(V, y.torsionalConstants.get(k)), ((_k = y.elasticities) == null ? void 0 : _k.has(k)) && at.set(V, y.elasticities.get(k)), ((_l = y.shearModuli) == null ? void 0 : _l.has(k)) && ut.set(V, y.shearModuli.get(k)), ((_m = y.densities) == null ? void 0 : _m.has(k)) && tt.set(V, y.densities.get(k)), ((_n = y.thicknesses) == null ? void 0 : _n.has(k)) && ft.set(V, y.thicknesses.get(k)), ((_o = y.poissonsRatios) == null ? void 0 : _o.has(k)) && K.set(V, y.poissonsRatios.get(k)), co && g.push(V), V++);
        }
        if (x > 0 && b > 0 && g.length > 0) {
          const k = 1 + x / b;
          for (const A of g) {
            const Lt = tt.get(A) ?? 24;
            tt.set(A, Lt * k);
          }
        }
        const J = {
          areas: D,
          momentsOfInertiaY: X,
          momentsOfInertiaZ: R,
          torsionalConstants: G,
          elasticities: at,
          shearModuli: ut,
          densities: tt,
          thicknesses: ft,
          poissonsRatios: K
        }, it = Math.round(t.nPisos), h = Math.min(60, Math.max(15, 3 * it + 6)), I = Ie(p, E, f, J, h), S = Math.round(t.nVanosX), pt = Math.round(t.nVanosY), mt = Math.round(t.nPisos), $t = b > 0 ? 1 + x / b : 1;
        B.render(I, {
          title: `Edificio ${S}\xD7${pt} vanos \xD7 ${mt} pisos \xB7 ${h} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${$t.toFixed(2)} dens cols, ${x.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const gt = I.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${h} modos \xB7 f\u2081=${gt.toFixed(4)} Hz \xB7 m_slab=${x.toFixed(0)} m_cols=${b.toFixed(0)} factor=${$t.toFixed(2)}`);
      } catch (E) {
        console.warn("Modal edificio error:", E.message);
      }
    }
  };
});
export {
  __tla,
  es as e,
  os as f
};
