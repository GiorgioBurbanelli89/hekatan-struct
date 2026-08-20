import { a as Be } from "./analyze-Dltu42RS.js";
import { m as Te, d as he, __tla as __tla_0 } from "./didacticCpp-CO3UMe4K.js";
import { b as De, a as Jt } from "./cotas3D-BRJLBeVj.js";
import { S as Ye, f as qe, M as Bo, e as Go, a as Zt, B as co, V as Z, d as me, b as He, L as mo, E as Re, I as Ze, D as je } from "./theme-Co6w-pfC.js";
let is, as;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function ue(t, e = 0.5) {
    const N = Ge(e), x = t / N;
    let S = Math.max(2, Math.round(x));
    return t / S > N * 1.25 && (S = Math.ceil(x)), {
      n: S,
      dx: t / S
    };
  }
  function Ge(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const Xe = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function Ke(t, e, N = {}) {
    const x = N.tol ?? 1e-5, S = 0, h = [], y = [], E = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, Y = 1e8, X = 1e4, j = 1e4, K = 2 * j, it = Y / (2 * (1 + 0.3));
    for (const xt of e) {
      const J = [];
      let gt = 0, U = 0;
      for (let p = 0; p < t.length; p++) Math.abs(t[p][2] - xt) < x && (J.push(p), gt += t[p][0], U += t[p][1]);
      if (J.length < 2) continue;
      const mt = gt / J.length, b = U / J.length, l = t.length + h.length;
      h.push({
        idx: l,
        z: xt,
        x: mt,
        y: b
      });
      for (const p of J) {
        y.push([
          l,
          p
        ]);
        const Q = S + y.length - 1;
        E.areas.set(Q, X), E.momentsOfInertiaY.set(Q, j), E.momentsOfInertiaZ.set(Q, j), E.torsionalConstants.set(Q, K), E.elasticities.set(Q, Y), E.shearModuli.set(Q, it), E.densities.set(Q, 0);
      }
    }
    return N.linkStiffness, {
      masterNodes: h,
      rigidLinks: y,
      linkProps: E
    };
  }
  function Je(t, e, N) {
    const x = (S, h) => {
      S.forEach((y, E) => h.set(E + N, y));
    };
    e.areas = e.areas ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaY = e.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaZ = e.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), e.torsionalConstants = e.torsionalConstants ?? /* @__PURE__ */ new Map(), e.elasticities = e.elasticities ?? /* @__PURE__ */ new Map(), e.shearModuli = e.shearModuli ?? /* @__PURE__ */ new Map(), e.densities = e.densities ?? /* @__PURE__ */ new Map(), x(t.linkProps.areas, e.areas), x(t.linkProps.momentsOfInertiaY, e.momentsOfInertiaY), x(t.linkProps.momentsOfInertiaZ, e.momentsOfInertiaZ), x(t.linkProps.torsionalConstants, e.torsionalConstants), x(t.linkProps.elasticities, e.elasticities), x(t.linkProps.shearModuli, e.shearModuli), x(t.linkProps.densities, e.densities);
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
  function Ue(t, e, N) {
    if (t <= 0 || e <= 0) return 1e-12;
    const S = Math.sqrt(12 * e / t) / 2;
    return e / S * N;
  }
  function Qe(t, e, N, x, S, h, y, E = {}) {
    var _a, _b;
    const Y = E.Fy_steel ?? 345e3;
    E.fc_concrete;
    const X = E.Fy_rebar ?? 42e4, j = E.omega ?? 0.15, K = E.phi ?? 0.9, it = S < 0.5 ? K * j * X * (1 - 0.59 * j) : K * Y, xt = h < 0.5 ? K * j * X * (1 - 0.59 * j) : K * Y, J = N.frameBendingMoments, gt = [];
    for (let U = 0; U < e.length; U++) {
      const mt = e[U];
      if (mt.length !== 2) continue;
      const [b, l] = mt, p = y.has(U);
      let Q = 0, St = 0;
      const A = J == null ? void 0 : J.get(U);
      A && (Q = A.Mi, St = A.Mj);
      const v = ((_a = x.areas) == null ? void 0 : _a.get(U)) ?? 0.16, B = ((_b = x.momentsOfInertiaZ) == null ? void 0 : _b.get(U)) ?? 213e-5, ut = Ue(v, B, p ? it : xt), vt = Q / ut, Ct = St / ut;
      gt.push({
        nodeIdx: b,
        elementIdx: U,
        end: "i",
        classification: ge(vt)
      }), gt.push({
        nodeIdx: l,
        elementIdx: U,
        end: "j",
        classification: ge(Ct)
      });
    }
    return gt;
  }
  function We(t, e, N, x = {}) {
    const S = x.showElastic ?? false, h = (x.radiusFactor ?? 0.02) * N, y = [], E = new Ye(h, 12, 8);
    for (const Y of t) {
      if (!S && Y.classification.state === "Elastic") continue;
      const X = e[Y.nodeIdx];
      if (!X) continue;
      const j = new qe({
        color: Y.classification.color,
        transparent: true,
        opacity: 0.85
      }), K = new Bo(E, j);
      K.position.set(X[0], X[1], X[2]), K.userData = {
        hingeState: Y.classification.state,
        ratio: Y.classification.ratio.toFixed(3),
        element: Y.elementIdx,
        end: Y.end
      }, y.push(K);
    }
    return y;
  }
  function ts(t) {
    const e = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const N of t) e[N.classification.state]++;
    return e;
  }
  const Xo = 9.80665;
  function Me(t, e, N, x, S = 0.01) {
    const h = Math.abs(t) < S, y = Math.abs(t - N) < S, E = Math.abs(e) < S, Y = Math.abs(e - x) < S, X = [
      h,
      y,
      E,
      Y
    ].filter(Boolean).length;
    return X >= 2 ? "esquinera" : X === 1 ? "lindero" : "central";
  }
  function xe(t) {
    const { P_kN: e, Mx_kN: N, My_kN: x, tipo: S, q_adm_tonf: h, ks: y } = t, E = t.Lz_min ?? 1, Y = t.Lz_max ?? 4, X = t.t_min ?? 0.3;
    if (e <= 0) return {
      tipo: S,
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
    const j = h * Xo, K = Math.abs(x / e), it = Math.abs(N / e), xt = j * 0.95;
    let J = Math.max(E, Math.sqrt(e / j)), gt = J, U = 1 / 0, mt = 0, b = false;
    for (let v = 0; v < 50 && J <= Y; v++) {
      const B = S === "esquinera" ? 0.3 : S === "lindero" ? 0.2 : 0, w = J + B, ut = gt + B, vt = w * ut, Ct = Math.max(K, it), k = Ct === K ? w : ut;
      if (b = Ct > k / 6, !b) U = e / vt * (1 + 6 * Ct / k), mt = e / vt * (1 - 6 * Ct / k);
      else {
        const W = 1.5 * k - 3 * Ct, ct = Ct === K ? ut : w;
        U = 2 * e / (ct * Math.max(W, 0.01)), mt = 0;
      }
      if (U <= xt) break;
      J += 0.05, gt += 0.05;
    }
    const l = J * gt, p = Math.max(X, J / 6), Q = U / j, St = Q <= 1 ? "OK" : "OVERSTRESS";
    let A;
    return y && y > 0 && (A = U / y * 1e3), {
      tipo: S,
      Lz: J,
      Bz: gt,
      t: p,
      A: l,
      ex: K,
      ey: it,
      sigmaMax_tonf: U / Xo,
      sigmaMin_tonf: mt / Xo,
      ratio: Q,
      delta_mm: A,
      fueraKern: b,
      status: St
    };
  }
  function To(t, e, N, x, S) {
    return t.map((h) => {
      const y = Me(h.x, h.y, e, N);
      return {
        ...xe({
          P_kN: h.P_kN,
          Mx_kN: h.Mx_kN,
          My_kN: h.My_kN,
          tipo: y,
          q_adm_tonf: x,
          ks: S
        }),
        idx: h.idx,
        x: h.x,
        y: h.y
      };
    });
  }
  let Ko, uo, pe, m, et;
  as = Object.freeze(Object.defineProperty({
    __proto__: null,
    classifyFootingType: Me,
    designAllFootings: To,
    designFooting: xe
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Ko = 9.81;
  uo = 24 / Ko;
  pe = 78 / Ko;
  m = (t, e, N, x, S, h) => ({
    default: N,
    min: x,
    max: S,
    step: h,
    label: e,
    folder: t
  });
  et = (t, e, N, x) => ({
    default: N,
    label: e,
    folder: t,
    options: x
  });
  is = {
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
      slabDisc: et("Avanzado", "Discretizaci\xF3n losa", 0.5, Xe),
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
      const e = {}, N = Math.round(t.nPisos ?? 3), x = Math.round(t.nVanosX ?? 2), S = Math.round(t.nVanosY ?? 2);
      for (let h = 1; h <= N; h++) e[`hP_${h}`] = m("Alturas por piso", `h Piso ${h} (m)`, 0, 0, 6, 0.1), e[`colB_p${h}`] = m("Secciones por piso", `b col P${h} (m)`, 0, 0, 1, 0.05), e[`colH_p${h}`] = m("Secciones por piso", `h col P${h} (m)`, 0, 0, 1, 0.05), e[`vigaB_p${h}`] = m("Secciones por piso", `b viga P${h} (m)`, 0, 0, 0.8, 0.05), e[`vigaH_p${h}`] = m("Secciones por piso", `h viga P${h} (m)`, 0, 0, 1, 0.05);
      for (let h = 1; h <= x; h++) e[`svX_${h}`] = m("Luces por vano", `svX #${h} (m)`, 0, 0, 12, 0.5);
      for (let h = 1; h <= S; h++) e[`svY_${h}`] = m("Luces por vano", `svY #${h} (m)`, 0, 0, 12, 0.5);
      return e;
    },
    computedLabels(t, e) {
      var _a;
      const x = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions, S = e.nodes.rawVal;
      if (!x || !(S == null ? void 0 : S.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let h = 0, y = 0, E = 0, Y = -1, X = 0, j = -1;
      const K = [];
      let it = 0, xt = 0;
      x.forEach((Q, St) => {
        const A = S[St];
        if (!A || Math.abs(A[2]) > 1e-6) return;
        const v = Q[2], B = Q[3], w = Q[4];
        Math.abs(v) > Math.abs(h) && (h = v, Y = St, A[0], A[1]), v > 0 && v > Math.abs(X) && (X = v, j = St), Math.abs(B) > Math.abs(y) && (y = B), Math.abs(w) > Math.abs(E) && (E = w), K.push({
          idx: St,
          x: A[0],
          y: A[1],
          P_kN: Math.abs(v),
          Mx_kN: B,
          My_kN: w
        }), A[0] > it && (it = A[0]), A[1] > xt && (xt = A[1]);
      });
      const J = Math.abs(h) / 9.80665, gt = Math.abs(y) / 9.80665, U = Math.abs(E) / 9.80665, mt = X / 9.80665, b = Math.round(t.nPisos), l = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${J.toFixed(2)} tonf (nodo ${Y})`,
        Mx: `${gt.toFixed(2)} tonf\xB7m`,
        My: `${U.toFixed(2)} tonf\xB7m`
      };
      if (mt > 0.01 && (l["\u26A0 Uplift"] = `${mt.toFixed(2)} tonf (nodo ${j})`), l.Pisos = `${b}`, l["Copiar a \u2192 zapata-aislada"] = `P=${J.toFixed(1)}, Mx=${gt.toFixed(1)}, My=${U.toFixed(1)}`, K.length > 0 && it > 0 && xt > 0) {
        const Q = t.q_adm_zapata ?? 10, St = t.ks_zapata ?? 1030;
        try {
          const A = To(K, it, xt, Q, St);
          let v = 0, B = 0, w = 0, ut = 0, vt = -1, Ct = "", k = 0, W = 0;
          for (const wt of A) wt.tipo === "esquinera" ? v++ : wt.tipo === "lindero" ? B++ : w++, wt.sigmaMax_tonf > ut && (ut = wt.sigmaMax_tonf, vt = wt.idx, Ct = wt.tipo), wt.status === "OK" && k++, wt.Lz > W && (W = wt.Lz);
          l["\u2500\u2500 Cimentaci\xF3n (auto) \u2500\u2500"] = "", l["Tipos zapata"] = `${v} esquineras, ${B} linderas, ${w} centrales`, l["\u03C3_max global"] = `${ut.toFixed(2)} tonf/m\xB2 (nodo ${vt}, ${Ct})`, l["\u03C3/q_adm"] = `${(ut / Q).toFixed(2)}` + (ut / Q <= 1 ? " \u2713" : " \u26A0"), l["Lz m\xE1x zapata"] = `${W.toFixed(2)} m`, l.Cumplen = `${k}/${A.length}` + (k === A.length ? " \u2713" : " \u26A0");
          const ct = t.Hf_pedestal ?? 0.5, so = t.t_zapata ?? 0.3, qt = Math.round(t.nSubZapata ?? 4);
          l["Df col enterrada"] = `${ct.toFixed(2)} m` + (ct < 1e-3 ? " (sin pedestal)" : ""), l["t zapata"] = `${so.toFixed(2)} m`, l["Subdiv. Q4"] = `${qt}\xD7${qt}`, l["Volado extra"] = `${(t.voladoExtra ?? 0.3).toFixed(2)} m`;
        } catch {
          l["\u2500\u2500 Cimentaci\xF3n \u2500\u2500"] = "module load error";
        }
      }
      const p = e.__plasticHinges;
      if (p) {
        const Q = (p.B ?? 0) + (p.IO ?? 0) + (p.LS ?? 0) + (p.CP ?? 0);
        l["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", l["\u{1F7E2} El\xE1stico"] = `${p.Elastic ?? 0}`, l["\u{1F7E1} B \u2014 Yield"] = `${p.B ?? 0}`, l["\u{1F7E0} IO \u2014 Immed.Occ."] = `${p.IO ?? 0}`, l["\u{1F534} LS \u2014 Life Safety"] = `${p.LS ?? 0}`, l["\u26AB CP \u2014 Collapse Prev."] = `${p.CP ?? 0}`, l["Total r\xF3tulas formadas"] = `${Q}`;
      }
      return l;
    },
    build(t, e) {
      var _a, _b;
      const N = Math.round(t.nVanosX), x = Math.round(t.nVanosY), S = Math.round(t.nPisos), h = Math.max(1, Math.round(t.nSubViga)), y = Math.max(1, Math.round(t.nSubCol)), E = t.fcConcr * 0.0981, Y = 4700 * Math.sqrt(E) * 1e3, X = 2e8, j = 0.2, K = 0.3, it = Y / (2 * (1 + j)), xt = X / (2 * (1 + K)), J = (o, a, n) => Array.from({
        length: a
      }, (f, i) => {
        const u = t[`${o}${i + 1}`];
        return typeof u == "number" && u > 0 ? u : n;
      }), gt = J("svX_", N, t.spanX), U = J("svY_", x, t.spanY), mt = J("hP_", S, t.hPiso), b = [];
      t.Lvix > 0 && b.push(-t.Lvix), b.push(0);
      for (let o = 0; o < N; o++) b.push(b[b.length - 1] + gt[o]);
      t.Lvdx > 0 && b.push(b[b.length - 1] + t.Lvdx);
      const l = [];
      t.Lviy > 0 && l.push(-t.Lviy), l.push(0);
      for (let o = 0; o < x; o++) l.push(l[l.length - 1] + U[o]);
      t.Lvdy > 0 && l.push(l[l.length - 1] + t.Lvdy);
      const p = [
        0
      ];
      for (let o = 0; o < S; o++) p.push(p[p.length - 1] + mt[o]);
      const Q = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === b.length - 1, St = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === l.length - 1, A = (o, a) => Q(o) || St(a), v = [], B = {};
      for (let o = 0; o < p.length; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < b.length; n++) o === 0 && A(n, a) || (B[`${n},${a},${o}`] = v.length, v.push([
        b[n],
        l[a],
        p[o]
      ]));
      const w = [], ut = /* @__PURE__ */ new Set(), vt = /* @__PURE__ */ new Set(), Ct = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), W = (o, a, n, f, i) => {
        if (n <= 1) {
          f.add(w.length), k.set(w.length, i), w.push([
            o,
            a
          ]);
          return;
        }
        const u = v[o], r = v[a];
        let d = o;
        for (let O = 1; O < n; O++) {
          const c = O / n, C = v.length;
          v.push([
            u[0] + (r[0] - u[0]) * c,
            u[1] + (r[1] - u[1]) * c,
            u[2] + (r[2] - u[2]) * c
          ]), f.add(w.length), k.set(w.length, i), w.push([
            d,
            C
          ]), d = C;
        }
        f.add(w.length), k.set(w.length, i), w.push([
          d,
          a
        ]);
      };
      for (let o = 0; o < p.length - 1; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < b.length; n++) A(n, a) || W(B[`${n},${a},${o}`], B[`${n},${a},${o + 1}`], y, ut, o);
      for (let o = 1; o < p.length; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < b.length - 1; n++) W(B[`${n},${a},${o}`], B[`${n + 1},${a},${o}`], h, vt, o - 1);
      for (let o = 1; o < p.length; o++) for (let a = 0; a < b.length; a++) for (let n = 0; n < l.length - 1; n++) W(B[`${a},${n},${o}`], B[`${a},${n + 1},${o}`], h, vt, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), a = (i) => {
          const u = v[i];
          for (let r = w.length - 1; r >= 0; r--) {
            const d = w[r];
            if (d.length !== 2) continue;
            const [O, c] = d;
            if (O === i || c === i) continue;
            const C = v[O], R = v[c], rt = [
              R[0] - C[0],
              R[1] - C[1],
              R[2] - C[2]
            ], zt = [
              u[0] - C[0],
              u[1] - C[1],
              u[2] - C[2]
            ], q = rt[0] ** 2 + rt[1] ** 2 + rt[2] ** 2;
            if (q < 1e-12) continue;
            const st = (zt[0] * rt[0] + zt[1] * rt[1] + zt[2] * rt[2]) / q;
            if (st < 1e-6 || st > 1 - 1e-6 || Math.hypot(zt[0] - st * rt[0], zt[1] - st * rt[1], zt[2] - st * rt[2]) > 1e-6) continue;
            w[r] = [
              O,
              i
            ];
            const Ht = w.length;
            w.push([
              i,
              c
            ]), vt.has(r) && vt.add(Ht), ut.has(r) && ut.add(Ht);
          }
        }, n = (i, u, r) => {
          for (let O = 0; O < v.length; O++) if (Math.abs(v[O][0] - i) < 1e-6 && Math.abs(v[O][1] - u) < 1e-6 && Math.abs(v[O][2] - r) < 1e-6) return O;
          const d = v.length;
          return v.push([
            i,
            u,
            r
          ]), a(d), d;
        }, f = t.vSecDir < 0.5 ? "x" : "y";
        for (let i = 1; i < p.length; i++) if (f === "x") for (let u = 0; u < l.length - 1; u++) {
          const r = l[u], d = l[u + 1];
          for (let O = 1; O <= o; O++) {
            const c = r + O / (o + 1) * (d - r), C = [];
            for (let R = 0; R < b.length; R++) C.push(n(b[R], c, p[i]));
            for (let R = 0; R < b.length - 1; R++) vt.add(w.length), w.push([
              C[R],
              C[R + 1]
            ]);
          }
        }
        else for (let u = 0; u < b.length - 1; u++) {
          const r = b[u], d = b[u + 1];
          for (let O = 1; O <= o; O++) {
            const c = r + O / (o + 1) * (d - r), C = [];
            for (let R = 0; R < l.length; R++) C.push(n(c, l[R], p[i]));
            for (let R = 0; R < l.length - 1; R++) vt.add(w.length), w.push([
              C[R],
              C[R + 1]
            ]);
          }
        }
      }
      const ct = Math.round(t.bracesMode);
      if (ct > 0) {
        const o = ct === 1 || ct === 2 || ct === 3, a = ct === 1 || ct === 2 || ct === 4, n = p.length - 1;
        for (let f = 0; f < n; f++) {
          if (o) for (let i = 0; i < l.length; i++) {
            if (ct === 1 && i !== 0 && i !== l.length - 1) continue;
            const u = Math.floor((b.length - 1) / 2);
            for (let r = 0; r < b.length - 1; r++) {
              if (ct === 1 && r !== u || A(r, i) || A(r + 1, i)) continue;
              const d = B[`${r},${i},${f}`], O = B[`${r + 1},${i},${f + 1}`], c = B[`${r + 1},${i},${f}`], C = B[`${r},${i},${f + 1}`];
              d !== void 0 && O !== void 0 && w.push([
                d,
                O
              ]), c !== void 0 && C !== void 0 && w.push([
                c,
                C
              ]);
            }
          }
          if (a) for (let i = 0; i < b.length; i++) {
            if (ct === 1 && i !== 0 && i !== b.length - 1) continue;
            const u = Math.floor((l.length - 1) / 2);
            for (let r = 0; r < l.length - 1; r++) {
              if (ct === 1 && r !== u || A(i, r) || A(i, r + 1)) continue;
              const d = B[`${i},${r},${f}`], O = B[`${i},${r + 1},${f + 1}`], c = B[`${i},${r + 1},${f}`], C = B[`${i},${r},${f + 1}`];
              d !== void 0 && O !== void 0 && w.push([
                d,
                O
              ]), c !== void 0 && C !== void 0 && w.push([
                c,
                C
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), a = (f, i, u) => `${Math.round(f * 1e4)},${Math.round(i * 1e4)},${Math.round(u * 1e4)}`;
        for (let f = 0; f < v.length; f++) o.set(a(v[f][0], v[f][1], v[f][2]), f);
        const n = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let f = 1; f < p.length; f++) {
          const i = p[f];
          for (let u = 0; u < b.length - 1; u++) for (let r = 0; r < l.length - 1; r++) {
            const d = b[u], O = b[u + 1], c = l[r], C = l[r + 1], { n: R } = ue(Math.abs(O - d), n), { n: rt } = ue(Math.abs(C - c), n), zt = [];
            for (let q = 0; q <= rt; q++) {
              const st = [];
              for (let Ht = 0; Ht <= R; Ht++) {
                const yo = d + Ht / R * (O - d), Vo = c + q / rt * (C - c), Eo = a(yo, Vo, i), bo = o.get(Eo);
                if (bo !== void 0) st.push(bo);
                else {
                  const Co = v.length;
                  v.push([
                    yo,
                    Vo,
                    i
                  ]), o.set(Eo, Co), st.push(Co);
                }
              }
              zt.push(st);
            }
            for (let q = 0; q < rt; q++) for (let st = 0; st < R; st++) Ct.add(w.length), w.push([
              zt[q][st],
              zt[q][st + 1],
              zt[q + 1][st + 1],
              zt[q + 1][st]
            ]);
          }
        }
      }
      const so = Math.round(t.apoyo), qt = so === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : so === 1 ? [
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
      ], wt = /* @__PURE__ */ new Map();
      for (let o = 0; o < l.length; o++) for (let a = 0; a < b.length; a++) A(a, o) || wt.set(B[`${a},${o},0`], [
        ...qt
      ]);
      const pt = Math.round(t.loadCase ?? 0), go = pt === 1 ? [
        1,
        1,
        0,
        0
      ] : pt === 2 ? [
        1,
        0,
        0,
        0
      ] : pt === 3 ? [
        0,
        1,
        0,
        0
      ] : pt === 4 ? [
        0,
        0,
        1,
        0
      ] : pt === 5 ? [
        0,
        0,
        0,
        1
      ] : pt === 6 ? [
        0,
        0,
        1,
        1
      ] : pt === 7 ? [
        1.2,
        1.6,
        0,
        0
      ] : pt === 8 ? [
        1.2,
        1,
        1,
        0
      ] : pt === 9 ? [
        1.2,
        1,
        0,
        1
      ] : pt === 10 ? [
        1.2,
        1,
        -1,
        0
      ] : pt === 11 ? [
        1.2,
        1,
        0,
        -1
      ] : pt === 12 ? [
        0.9,
        0,
        1,
        0
      ] : pt === 13 ? [
        0.9,
        0,
        0,
        1
      ] : [
        1,
        1,
        1,
        1
      ], [po, Mo, Do, Yo] = go, ro = /* @__PURE__ */ new Map(), Jo = po * t.CM + Mo * t.CV;
      if (Jo !== 0) for (let o = 1; o < p.length; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < b.length; n++) {
        const f = `${n},${a},${o}`;
        B[f] !== void 0 && ro.set(B[f], [
          0,
          0,
          Jo,
          0,
          0,
          0
        ]);
      }
      const Uo = Do * t.Ex, Qo = Yo * t.Ey;
      if (Uo !== 0 || Qo !== 0) {
        const o = B[`${b.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${S}`];
        if (o !== void 0) {
          const a = ro.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          ro.set(o, [
            a[0] + Uo,
            a[1] + Qo,
            a[2],
            a[3],
            a[4],
            a[5]
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
        const a = qo[o] ?? t.colSize, n = Ho[o] ?? t.colSize;
        return {
          A: a * n,
          Iz: a * n ** 3 / 12,
          Iy: n * a ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(a, n), 4)
        };
      }, be = (o) => {
        const a = _e[o] ?? t.vigaB, n = ve[o] ?? t.vigaH;
        return {
          A: a * n,
          Iy: a * n ** 3 / 12,
          Iz: n * a ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(a, n), 3) * Math.max(a, n)
        };
      }, Ce = t.matCol < 0.5 ? Y : X, we = t.matCol < 0.5 ? it : xt, ze = t.matCol < 0.5 ? j : K, $e = t.matCol < 0.5 ? uo : pe, Se = t.matViga < 0.5 ? Y : X, ke = t.matViga < 0.5 ? it : xt, Oe = t.matViga < 0.5 ? j : K, Le = t.matViga < 0.5 ? uo : pe, xo = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), ko = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ee = Math.round(t.slabType), Fe = ee === 2 ? 0 : 1, Pe = ee === 1 ? 0 : 1, Po = t.crackedSections > 0.5, se = t.matCol < 0.5 && Po ? 0.7 : 1, ne = t.matViga < 0.5 && Po ? 0.35 : 1, Ve = Po ? 0.25 : 1, Ee = 1, Ro = t.massSource > 0.5, Ie = t.qDead + 0.25 * t.qLive, Ae = Ro ? Ie / Ko / Math.max(t.slabT, 0.05) : uo;
      for (let o = 0; o < w.length; o++) {
        const a = k.get(o) ?? 0;
        if (Ct.has(o)) xo.set(o, Y), _o.set(o, it), Fo.set(o, j), Wo.set(o, t.slabT), te.set(o, Fe * Ee), oe.set(o, Pe * Ve), vo.set(o, Ae);
        else if (ut.has(o)) {
          const n = ye(Math.min(a, 7));
          xo.set(o, Ce), _o.set(o, we), Fo.set(o, ze), So.set(o, n.A), ko.set(o, n.Iz * se), Oo.set(o, n.Iy * se), Lo.set(o, n.J), vo.set(o, Ro ? 0 : $e);
        } else {
          const n = be(Math.min(a, 7));
          xo.set(o, Se), _o.set(o, ke), Fo.set(o, Oe), So.set(o, n.A), ko.set(o, n.Iz * ne), Oo.set(o, n.Iy * ne), Lo.set(o, n.J), vo.set(o, Ro ? 0 : Le);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let i = 1; i < p.length; i++) o.push(p[i]);
        const a = Ke(v, o), n = w.length;
        for (const i of a.masterNodes) v.push([
          i.x,
          i.y,
          i.z
        ]);
        for (const i of a.rigidLinks) w.push(i);
        Je(a, {
          elasticities: xo,
          shearModuli: _o,
          areas: So,
          momentsOfInertiaY: ko,
          momentsOfInertiaZ: Oo,
          torsionalConstants: Lo,
          densities: vo
        }, n);
      }
      e.nodes.val = v, e.elements.val = w, e.nodeInputs.val = {
        supports: wt,
        loads: ro
      }, e.elementInputs.val = {
        elasticities: xo,
        shearModuli: _o,
        areas: So,
        momentsOfInertiaY: ko,
        momentsOfInertiaZ: Oo,
        torsionalConstants: Lo,
        densities: vo,
        poissonsRatios: Fo,
        thicknesses: Wo,
        membraneModifiers: te,
        bendingModifiers: oe
      };
      const ae = he(v, w, e.nodeInputs.val, e.elementInputs.val);
      e.deformOutputs.val = ae, e.analyzeOutputs.val = Be(v, w, e.elementInputs.val, ae);
      const Zo = De(b, l, p);
      try {
        const o = Qe(v, w, e.analyzeOutputs.rawVal, e.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), ut);
        let a = 1 / 0, n = 1 / 0, f = 1 / 0, i = -1 / 0, u = -1 / 0, r = -1 / 0;
        for (const c of v) c[0] < a && (a = c[0]), c[0] > i && (i = c[0]), c[1] < n && (n = c[1]), c[1] > u && (u = c[1]), c[2] < f && (f = c[2]), c[2] > r && (r = c[2]);
        const d = Math.sqrt((i - a) ** 2 + (u - n) ** 2 + (r - f) ** 2) || 1, O = We(o, v, d, {
          showElastic: false,
          radiusFactor: 0.015
        });
        Zo.push(...O), e.__plasticHinges = ts(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      if ((t.mostrarZapatas ?? 1) >= 0.5) try {
        const o = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions;
        if (o) {
          const a = [];
          let n = 0, f = 0;
          if (o.forEach((i, u) => {
            const r = v[u];
            !r || Math.abs(r[2]) > 1e-6 || (a.push({
              idx: u,
              x: r[0],
              y: r[1],
              P_kN: Math.abs(i[2]),
              Mx_kN: i[3],
              My_kN: i[4]
            }), r[0] > n && (n = r[0]), r[1] > f && (f = r[1]));
          }), a.length > 0) {
            const i = t.q_adm_zapata ?? 10, u = t.ks_zapata ?? 1030, r = Math.max(0, t.Hf_pedestal ?? 0.5), d = Math.max(0.1, t.t_zapata ?? 0.3), O = Math.max(2, Math.round(t.nSubZapata ?? 4)), c = Math.max(0, t.voladoExtra ?? 0.3), C = Math.round(t.tipoZapataOverride ?? 0) | 0, R = Math.round(t.estiloZapata ?? 1), rt = To(a, n, f, i, u), zt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const P of rt) C > 0 && (P.tipo = zt[C - 1]), P.t = d;
            const q = [], st = (P) => new Go({
              color: P,
              transparent: true,
              opacity: 0.55,
              roughness: 0.7
            }), Ht = new Zt({
              color: 0,
              linewidth: 2
            }), yo = new Zt({
              color: 2236962,
              linewidth: 1,
              transparent: true,
              opacity: 0.5
            }), Vo = new Go({
              color: 10265519,
              transparent: true,
              opacity: 0.75,
              roughness: 0.5
            }), Eo = new Zt({
              color: 1118481,
              linewidth: 2
            }), bo = qo[0] ?? t.colSize, Co = Ho[0] ?? t.colSize;
            for (const P of rt) {
              const H = P.Lz, nt = P.Bz, Rt = P.t;
              let Tt = 0, Dt = 0;
              P.tipo === "esquinera" ? (Tt = P.x < n / 2 ? -(H / 2 - c) : H / 2 - c, Dt = P.y < f / 2 ? -(nt / 2 - c) : nt / 2 - c) : P.tipo === "lindero" && (Math.abs(P.x) < 1e-3 || Math.abs(P.x - n) < 1e-3 ? Tt = P.x < n / 2 ? -(H / 2 - c) : H / 2 - c : (Math.abs(P.y) < 1e-3 || Math.abs(P.y - f) < 1e-3) && (Dt = P.y < f / 2 ? -(nt / 2 - c) : nt / 2 - c));
              const G = P.x - Tt, L = P.y - Dt, I = -r, Pt = I - Rt / 2, Nt = I - Rt, Ut = P.ratio;
              let Qt = 4906624;
              if (Ut > 1.5 ? Qt = 15680580 : Ut > 1 ? Qt = 16096779 : Ut > 0.8 && (Qt = 16498468), r > 1e-3) {
                const _t = new co().setFromPoints([
                  new Z(P.x, P.y, 0),
                  new Z(P.x, P.y, -r)
                ]);
                q.push(new me(_t, new Zt({
                  color: 6333946,
                  linewidth: 4
                }))), q.push(Jt(`Df=${r.toFixed(2)}m`, P.x + 0.1, P.y + 0.1, -r / 2, "#60a5fa"));
              }
              if (R === 0) {
                const _t = new He(H, nt, Rt), jt = new Bo(_t, st(Qt));
                jt.position.set(G, L, Pt), q.push(jt);
                const Gt = new mo(new Re(_t), Ht);
                Gt.position.copy(jt.position), q.push(Gt);
              } else {
                const _t = new Ze(H, nt), jt = new Go({
                  color: Qt,
                  transparent: true,
                  opacity: 0.45,
                  roughness: 0.6,
                  side: je
                }), Gt = new Bo(_t, jt);
                Gt.position.set(G, L, I), q.push(Gt);
                const Wt = new Bo(_t.clone(), jt.clone());
                Wt.position.set(G, L, Nt), q.push(Wt);
                const ce = H / O, re = nt / O, Yt = [];
                for (let $t = 0; $t <= O; $t++) {
                  const yt = -H / 2 + $t * ce;
                  Yt.push(new Z(G + yt, L - nt / 2, I), new Z(G + yt, L + nt / 2, I)), Yt.push(new Z(G + yt, L - nt / 2, Nt), new Z(G + yt, L + nt / 2, Nt));
                }
                for (let $t = 0; $t <= O; $t++) {
                  const yt = -nt / 2 + $t * re;
                  Yt.push(new Z(G - H / 2, L + yt, I), new Z(G + H / 2, L + yt, I)), Yt.push(new Z(G - H / 2, L + yt, Nt), new Z(G + H / 2, L + yt, Nt));
                }
                const zo = new co().setFromPoints(Yt);
                q.push(new mo(zo, yo));
                const lo = [
                  [
                    -H / 2,
                    -nt / 2
                  ],
                  [
                    H / 2,
                    -nt / 2
                  ],
                  [
                    H / 2,
                    nt / 2
                  ],
                  [
                    -H / 2,
                    nt / 2
                  ]
                ], no = [];
                for (let $t = 0; $t < 4; $t++) {
                  const [yt, s] = lo[$t], [z, g] = lo[($t + 1) % 4];
                  no.push(new Z(G + yt, L + s, I), new Z(G + z, L + g, I)), no.push(new Z(G + yt, L + s, Nt), new Z(G + z, L + g, Nt)), no.push(new Z(G + yt, L + s, I), new Z(G + yt, L + s, Nt));
                }
                const fo = new co().setFromPoints(no);
                q.push(new mo(fo, Ht));
              }
              (t.mostrarLabelsZapatas ?? 1) >= 0.5 && q.push(Jt(`${P.tipo[0].toUpperCase()} ${H.toFixed(2)}\xD7${nt.toFixed(2)}\xD7${Rt.toFixed(2)}m \u03C3/q=${P.ratio.toFixed(2)}`, G, L, Nt - 0.2, Ut <= 1 ? "#4ade80" : Ut <= 1.5 ? "#f59e0b" : "#ef4444"));
            }
            if (Math.round(t.sistemaCimentacion ?? 0) === 1) {
              const P = Math.round(t.vigaAmarre_pos ?? 0), H = P === 0 ? -r : -r / 2, nt = t.vigaAmarre_b ?? 0.25, Rt = t.vigaAmarre_h ?? 0.4, Tt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map();
              for (const L of a) {
                const I = L.y.toFixed(4), Pt = L.x.toFixed(4);
                Tt.has(I) || Tt.set(I, []), Dt.has(Pt) || Dt.set(Pt, []), Tt.get(I).push(L), Dt.get(Pt).push(L);
              }
              const G = [];
              for (const L of Tt.values()) {
                L.sort((I, Pt) => I.x - Pt.x);
                for (let I = 0; I < L.length - 1; I++) G.push(new Z(L[I].x, L[I].y, H)), G.push(new Z(L[I + 1].x, L[I + 1].y, H));
              }
              for (const L of Dt.values()) {
                L.sort((I, Pt) => I.y - Pt.y);
                for (let I = 0; I < L.length - 1; I++) G.push(new Z(L[I].x, L[I].y, H)), G.push(new Z(L[I + 1].x, L[I + 1].y, H));
              }
              G.length > 0 && (q.push(new mo(new co().setFromPoints(G), new Zt({
                color: 2282478,
                linewidth: 3
              }))), q.push(Jt(`Vigas amarre ${(nt * 100).toFixed(0)}\xD7${(Rt * 100).toFixed(0)} cm @ ${P === 0 ? "zapatas" : "pedestales"}`, n / 2, f / 2, H + 0.2, "#22d3ee")));
            }
            Zo.push(...q);
          }
        }
      } catch (o) {
        console.warn("[Zapatas 3D]", o);
      }
      if ((t.modoCimentacion ?? 0) >= 0.5) try {
        const a = (_b = e.deformOutputs.rawVal) == null ? void 0 : _b.reactions;
        if (a && a.size > 0) {
          const n = [];
          let f = 0, i = 0;
          if (a.forEach((u, r) => {
            const d = v[r];
            !d || Math.abs(d[2]) > 1e-6 || (n.push({
              idx: r,
              x: d[0],
              y: d[1],
              P_kN: Math.abs(u[2]),
              Mx_kN: u[3],
              My_kN: u[4]
            }), d[0] > f && (f = d[0]), d[1] > i && (i = d[1]));
          }), n.length > 0) {
            const u = t.q_adm_zapata ?? 10, r = t.ks_zapata ?? 1030, d = Math.max(0, t.Hf_pedestal ?? 0.5), O = Math.max(0.1, t.t_zapata ?? 0.3), c = Math.max(2, Math.round(t.nSubZapata ?? 4)), C = Math.max(0, t.voladoExtra ?? 0.3), R = Math.round(t.tipoZapataOverride ?? 0) | 0, rt = To(n, f, i, u, r), zt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const s of rt) R > 0 && (s.tipo = zt[R - 1]), s.t = O;
            const q = qo[0] ?? t.colSize, st = Ho[0] ?? t.colSize, Ht = q * st, yo = q * st ** 3 / 12, Vo = st * q ** 3 / 12, Eo = 0.14 * Math.pow(Math.min(q, st), 4), bo = t.matCol < 0.5 ? Y : X, Co = t.matCol < 0.5 ? it : xt, ie = t.matCol < 0.5 ? j : K, P = [], H = [], nt = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), wo = [], _t = [], jt = (s, z, g) => `${Math.round(s * 1e4)},${Math.round(z * 1e4)},${Math.round(g * 1e4)}`, Gt = /* @__PURE__ */ new Map(), Wt = (s, z, g) => {
              const F = jt(s, z, g), T = Gt.get(F);
              if (T !== void 0) return T;
              const at = P.length;
              return P.push([
                s,
                z,
                g
              ]), Gt.set(F, at), at;
            }, ce = new Zt({
              color: 0,
              linewidth: 2
            }), re = new Zt({
              color: 1118481,
              linewidth: 2
            });
            for (const s of rt) {
              const z = s.Lz, g = s.Bz, F = s.t;
              let T = 0, at = 0;
              s.tipo === "esquinera" ? (T = s.x < f / 2 ? -(z / 2 - C) : z / 2 - C, at = s.y < i / 2 ? -(g / 2 - C) : g / 2 - C) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - f) < 1e-3 ? T = s.x < f / 2 ? -(z / 2 - C) : z / 2 - C : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - i) < 1e-3) && (at = s.y < i / 2 ? -(g / 2 - C) : g / 2 - C));
              const Vt = s.x - T, Lt = s.y - at, Xt = -d, Et = z / c, Kt = g / c, lt = [];
              for (let D = 0; D <= c; D++) {
                const tt = [];
                for (let ft = 0; ft <= c; ft++) {
                  const At = Vt - z / 2 + ft * Et, bt = Lt - g / 2 + D * Kt;
                  tt.push(Wt(At, bt, Xt));
                }
                lt.push(tt);
              }
              for (let D = 0; D < c; D++) for (let tt = 0; tt < c; tt++) {
                const ft = H.length;
                H.push([
                  lt[D][tt],
                  lt[D][tt + 1],
                  lt[D + 1][tt + 1],
                  lt[D + 1][tt]
                ]), Nt.set(ft, F), nt.set(ft, Y), Pt.set(ft, j), Rt.set(ft, it), I.set(ft, uo);
              }
              const to = 0.5;
              for (let D = 0; D <= c; D++) for (let tt = 0; tt <= c; tt++) {
                const ft = Et * Kt * (tt === 0 || tt === c ? 0.5 : 1) * (D === 0 || D === c ? 0.5 : 1), At = r * ft, bt = At * to, $ = lt[D][tt];
                wo.push({
                  node: $,
                  dof: 0,
                  k: bt
                }), wo.push({
                  node: $,
                  dof: 1,
                  k: bt
                }), wo.push({
                  node: $,
                  dof: 2,
                  k: At
                }), wo.push({
                  node: $,
                  dof: 5,
                  k: At * 0.1
                });
              }
              const It = lt[0][0];
              Ut.set(It, [
                false,
                false,
                false,
                true,
                true,
                true
              ]);
              let _ = 0, V = 0, M = 1 / 0;
              for (let D = 0; D <= c; D++) for (let tt = 0; tt <= c; tt++) {
                const ft = lt[D][tt], At = P[ft][0], bt = P[ft][1], $ = Math.sqrt((At - s.x) ** 2 + (bt - s.y) ** 2);
                $ < M && (M = $, _ = D, V = tt);
              }
              const Bt = lt[_][V], kt = n.find((D) => D.idx === s.idx);
              Qt.set(Bt, [
                0,
                0,
                -kt.P_kN,
                kt.Mx_kN,
                kt.My_kN,
                0
              ]);
              const oo = s.ratio;
              let ho = 4906624;
              if (oo > 1.5 ? ho = 15680580 : oo > 1 ? ho = 16096779 : oo > 0.8 && (ho = 16498468), d > 1e-3) {
                const D = new co().setFromPoints([
                  new Z(s.x, s.y, 0),
                  new Z(s.x, s.y, -d)
                ]);
                _t.push(new me(D, new Zt({
                  color: 6333946,
                  linewidth: 4
                }))), _t.push(Jt(`Df=${d.toFixed(2)}m`, s.x + 0.1, s.y + 0.1, -d / 2, "#60a5fa"));
              }
              {
                const D = new Zt({
                  color: 11184810,
                  linewidth: 1,
                  transparent: true,
                  opacity: 0.6
                }), tt = z / c, ft = g / c, At = [];
                for (let bt = 0; bt <= c; bt++) {
                  const $ = -z / 2 + bt * tt;
                  At.push(new Z(Vt + $, Lt - g / 2, -d), new Z(Vt + $, Lt + g / 2, -d));
                }
                for (let bt = 0; bt <= c; bt++) {
                  const $ = -g / 2 + bt * ft;
                  At.push(new Z(Vt - z / 2, Lt + $, -d), new Z(Vt + z / 2, Lt + $, -d));
                }
                _t.push(new mo(new co().setFromPoints(At), D));
              }
              if ((t.mostrarLabelsZapatas ?? 1) >= 0.5) {
                const D = kt.P_kN / 9.80665, tt = kt.Mx_kN / 9.80665, ft = kt.My_kN / 9.80665;
                _t.push(Jt(`P=${D.toFixed(2)} tonf`, s.x, s.y, 0.3, "#fbbf24")), _t.push(Jt(`Mx=${tt.toFixed(2)}  My=${ft.toFixed(2)} tonf\xB7m`, s.x, s.y, 0.1, "#fbbf24")), _t.push(Jt(`${s.tipo[0].toUpperCase()} ${z.toFixed(2)}\xD7${g.toFixed(2)}\xD7${F.toFixed(2)}m \u03C3/q=${oo.toFixed(2)}`, Vt, Lt, -d - F - 0.2, oo <= 1 ? "#4ade80" : oo <= 1.5 ? "#f59e0b" : "#ef4444"));
              }
            }
            const Yt = Math.round(t.sistemaCimentacion ?? 0);
            if (Yt === 1) {
              const s = Math.round(t.vigaAmarre_pos ?? 0), z = t.vigaAmarre_h ?? 0.4, g = t.vigaAmarre_b ?? 0.25, F = g * z, T = g * z ** 3 / 12, at = z * g ** 3 / 12, Vt = 0.21 * Math.pow(Math.min(g, z), 3) * Math.max(g, z), Lt = /* @__PURE__ */ new Map();
              for (const _ of rt) {
                let V;
                s === 0 ? V = -d : V = -d / 2;
                const M = Wt(_.x, _.y, V);
                if (Lt.set(_.idx, M), s === 1 && d > 1e-3) {
                  const dt = Wt(_.x, _.y, -d / 2), Bt = Wt(_.x, _.y, 0), kt = Wt(_.x, _.y, -d);
                }
              }
              const Xt = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
              for (const _ of n) {
                const V = _.y.toFixed(4), M = _.x.toFixed(4);
                Xt.has(V) || Xt.set(V, []), Et.has(M) || Et.set(M, []), Xt.get(V).push(_), Et.get(M).push(_);
              }
              const Kt = (_, V) => {
                const M = H.length;
                H.push([
                  _,
                  V
                ]), nt.set(M, bo), Rt.set(M, Co), Pt.set(M, ie), Tt.set(M, F), Dt.set(M, at), G.set(M, T), L.set(M, Vt), I.set(M, uo);
              };
              let lt = 0;
              for (const _ of Xt.values()) {
                _.sort((V, M) => V.x - M.x);
                for (let V = 0; V < _.length - 1; V++) {
                  const M = Lt.get(_[V].idx), dt = Lt.get(_[V + 1].idx);
                  M !== void 0 && dt !== void 0 && (Kt(M, dt), lt++);
                }
              }
              for (const _ of Et.values()) {
                _.sort((V, M) => V.y - M.y);
                for (let V = 0; V < _.length - 1; V++) {
                  const M = Lt.get(_[V].idx), dt = Lt.get(_[V + 1].idx);
                  M !== void 0 && dt !== void 0 && (Kt(M, dt), lt++);
                }
              }
              const to = new Zt({
                color: 2282478,
                linewidth: 3
              }), It = [];
              for (const _ of Xt.values()) {
                const V = [
                  ..._
                ].sort((M, dt) => M.x - dt.x);
                for (let M = 0; M < V.length - 1; M++) {
                  const dt = V[M], Bt = V[M + 1], kt = s === 0 ? -d : -d / 2;
                  It.push(new Z(dt.x, dt.y, kt)), It.push(new Z(Bt.x, Bt.y, kt));
                }
              }
              for (const _ of Et.values()) {
                const V = [
                  ..._
                ].sort((M, dt) => M.y - dt.y);
                for (let M = 0; M < V.length - 1; M++) {
                  const dt = V[M], Bt = V[M + 1], kt = s === 0 ? -d : -d / 2;
                  It.push(new Z(dt.x, dt.y, kt)), It.push(new Z(Bt.x, Bt.y, kt));
                }
              }
              if (It.length > 0) {
                const _ = new co().setFromPoints(It);
                _t.push(new mo(_, to));
              }
              _t.push(Jt(`+${lt} vigas de amarre ${(g * 100).toFixed(0)}\xD7${(z * 100).toFixed(0)} cm @ ${s === 0 ? "zapatas" : "pedestales"}`, f / 2, i / 2, s === 1 ? -d / 2 + 0.3 : -d + 0.3, "#22d3ee")), console.log(`[Cimentaci\xF3n] Sistema 1 \u2014 ${lt} vigas de amarre ${(g * 100).toFixed(0)}\xD7${(z * 100).toFixed(0)} cm en posici\xF3n ${s === 0 ? "zapatas" : "pedestales"}`);
            } else Yt >= 2 && (console.warn(`[Cimentaci\xF3n] Sistema ${Yt} (${[
              "",
              "",
              "Vigas T invertida",
              "Vigas rect. + zapata corrida",
              "Losa de cimentaci\xF3n"
            ][Yt]}) a\xFAn no implementado completamente. Mostrando zapatas aisladas. Pr\xF3ximamente: malla shell continua + frames T-invertida.`), _t.push(Jt(`Sistema ${Yt} (TODO) \u2014 usando zapatas aisladas`, f / 2, i / 2, 1.5, "#fbbf24")));
            const zo = Math.round(t.sistemaCimentacion ?? 0), lo = 0.3, no = Math.round(t.vigaAmarre_pos ?? 0), fo = /* @__PURE__ */ new Map();
            if (zo === 1) {
              const s = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
              for (const F of n) {
                const T = F.y.toFixed(4), at = F.x.toFixed(4);
                s.has(T) || s.set(T, []), z.has(at) || z.set(at, []), s.get(T).push(F), z.get(at).push(F);
              }
              const g = (F) => fo.set(F, (fo.get(F) ?? 0) + 1);
              for (const F of s.values()) {
                F.sort((T, at) => T.x - at.x);
                for (let T = 0; T < F.length - 1; T++) g(F[T].idx), g(F[T + 1].idx);
              }
              for (const F of z.values()) {
                F.sort((T, at) => T.y - at.y);
                for (let T = 0; T < F.length - 1; T++) g(F[T].idx), g(F[T + 1].idx);
              }
              console.log(`[Cimentaci\xF3n] Vigas de amarre activas \u2014 momentos en zapatas reducidos por factor (1 - ${lo} \xB7 n_vigas/4):`), fo.forEach((F, T) => {
                const at = (lo * F / 4 * 100).toFixed(0);
                console.log(`   Zapata ${T}: ${F} vigas conectadas \u2192 momento reducido ${at}%`);
              }), no === 0 && console.log("   \u21B3 vigaAmarre_pos=0 (mismo nivel zapata) \u2192 en F2K se exportar\xE1 como cimentaci\xF3n corrida con ks\xB7b\xB7dL distribuido por nodo");
            }
            const $t = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map();
            for (const s of rt) {
              const z = n.find(($) => $.idx === s.idx), g = s.Lz, F = s.Bz, T = s.t;
              let at = 0, Vt = 0;
              s.tipo === "esquinera" ? (at = s.x < f / 2 ? -(g / 2 - C) : g / 2 - C, Vt = s.y < i / 2 ? -(F / 2 - C) : F / 2 - C) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - f) < 1e-3 ? at = s.x < f / 2 ? -(g / 2 - C) : g / 2 - C : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - i) < 1e-3) && (Vt = s.y < i / 2 ? -(F / 2 - C) : F / 2 - C));
              const Lt = s.x - at, Xt = s.y - Vt, Et = [], Kt = [], lt = {
                elasticities: /* @__PURE__ */ new Map(),
                shearModuli: /* @__PURE__ */ new Map(),
                poissonsRatios: /* @__PURE__ */ new Map(),
                thicknesses: /* @__PURE__ */ new Map(),
                densities: /* @__PURE__ */ new Map()
              }, to = g / c, It = F / c, _ = [], V = [];
              for (let $ = 0; $ <= c; $++) {
                const ot = [];
                for (let ht = 0; ht <= c; ht++) {
                  const Ft = -g / 2 + ht * to, Ot = -F / 2 + $ * It;
                  ot.push(Et.length), Et.push([
                    Ft,
                    Ot,
                    0
                  ]);
                  const Io = Lt + Ft, Ao = Xt + Ot, No = jt(Io, Ao, -d), ao = Gt.get(No);
                  ao !== void 0 ? V.push(ao) : V.push(-1);
                }
                _.push(ot);
              }
              for (let $ = 0; $ < c; $++) for (let ot = 0; ot < c; ot++) {
                const ht = Kt.length;
                Kt.push([
                  _[$][ot],
                  _[$][ot + 1],
                  _[$ + 1][ot + 1],
                  _[$ + 1][ot]
                ]), lt.thicknesses.set(ht, T), lt.elasticities.set(ht, Y), lt.poissonsRatios.set(ht, j), lt.shearModuli.set(ht, it), lt.densities.set(ht, uo);
              }
              const M = [], dt = 0.5;
              for (let $ = 0; $ <= c; $++) for (let ot = 0; ot <= c; ot++) {
                const ht = to * It * (ot === 0 || ot === c ? 0.5 : 1) * ($ === 0 || $ === c ? 0.5 : 1), Ft = r * ht, Ot = _[$][ot];
                M.push({
                  node: Ot,
                  dof: 0,
                  k: Ft * dt
                }), M.push({
                  node: Ot,
                  dof: 1,
                  k: Ft * dt
                }), M.push({
                  node: Ot,
                  dof: 2,
                  k: Ft
                });
              }
              if (zo === 1 && no === 0) {
                const $ = t.vigaAmarre_b ?? 0.25, ot = s.idx, ht = n.filter((Mt) => Math.abs(Mt.y - s.y) < 1e-3 && Mt.idx !== ot).sort((Mt, $o) => Mt.x - $o.x), Ft = n.filter((Mt) => Math.abs(Mt.x - s.x) < 1e-3 && Mt.idx !== ot).sort((Mt, $o) => Mt.y - $o.y), Ot = ht.find((Mt) => Mt.x > s.x), Io = [
                  ...ht
                ].reverse().find((Mt) => Mt.x < s.x), Ao = Ft.find((Mt) => Mt.y > s.y), No = [
                  ...Ft
                ].reverse().find((Mt) => Mt.y < s.y), ao = (Mt, $o) => {
                  const le = $o / 2;
                  for (let eo = 0; eo <= c; eo++) {
                    const Ne = eo === 0 || eo === c ? le / (2 * c) : le / c, de = r * $ * Ne, fe = de * dt;
                    let io;
                    switch (Mt) {
                      case "x+":
                        io = _[eo][c];
                        break;
                      case "x-":
                        io = _[eo][0];
                        break;
                      case "y+":
                        io = _[c][eo];
                        break;
                      case "y-":
                        io = _[0][eo];
                        break;
                    }
                    M.push({
                      node: io,
                      dof: 0,
                      k: fe
                    }), M.push({
                      node: io,
                      dof: 1,
                      k: fe
                    }), M.push({
                      node: io,
                      dof: 2,
                      k: de
                    });
                  }
                };
                Ot && ao("x+", Ot.x - s.x), Io && ao("x-", s.x - Io.x), Ao && ao("y+", Ao.y - s.y), No && ao("y-", s.y - No.y);
              }
              const Bt = r * to * It * 1e-4;
              M.push({
                node: _[0][0],
                dof: 3,
                k: Bt
              }), M.push({
                node: _[0][0],
                dof: 4,
                k: Bt
              }), M.push({
                node: _[0][0],
                dof: 5,
                k: Bt
              });
              const kt = -at, oo = -Vt;
              let ho = 0, jo = 0, D = 1 / 0;
              for (let $ = 0; $ <= c; $++) for (let ot = 0; ot <= c; ot++) {
                const ht = -g / 2 + ot * to, Ft = -F / 2 + $ * It, Ot = (ht - kt) ** 2 + (Ft - oo) ** 2;
                Ot < D && (D = Ot, ho = $, jo = ot);
              }
              const tt = _[ho][jo], ft = /* @__PURE__ */ new Map(), At = fo.get(s.idx) ?? 0, bt = zo === 1 ? Math.max(0.4, 1 - lo * At / 4) : 1;
              ft.set(tt, [
                0,
                0,
                -z.P_kN,
                z.Mx_kN * bt,
                z.My_kN * bt,
                0
              ]);
              try {
                const ot = he(Et, Kt, {
                  supports: /* @__PURE__ */ new Map(),
                  loads: ft
                }, lt, M).deformations;
                for (let ht = 0; ht < Et.length; ht++) {
                  const Ft = V[ht];
                  if (Ft >= 0) {
                    const Ot = ot.get(ht);
                    Ot && $t.set(Ft, [
                      ...Ot
                    ]);
                  }
                }
              } catch ($) {
                console.warn(`[Zapata ${s.idx}] solver fall\xF3:`, $);
              }
            }
            for (let s = 0; s < H.length; s++) {
              const z = H[s];
              if (z.length !== 4) continue;
              const g = [];
              for (const F of z) {
                const T = $t.get(F);
                g.push(r * (T ? T[2] : 0) / 9.80665);
              }
              yt.set(s, g);
            }
            e.nodes.val = P, e.elements.val = H, e.nodeInputs.val = {
              supports: Ut,
              loads: Qt
            }, e.elementInputs.val = {
              elasticities: nt,
              shearModuli: Rt,
              areas: Tt,
              momentsOfInertiaY: Dt,
              momentsOfInertiaZ: G,
              torsionalConstants: L,
              densities: I,
              poissonsRatios: Pt,
              thicknesses: Nt
            }, e.deformOutputs.val = {
              deformations: $t,
              reactions: /* @__PURE__ */ new Map()
            }, e.analyzeOutputs.val = {
              pressure: yt,
              colorMapRanges: {
                pressure: [
                  -u,
                  0
                ]
              }
            }, e.objects3D.val = _t, console.log(`[Modo Cimentaci\xF3n] ${n.length} zapatas + pedestales (Hf=${d} m, t=${O} m, q_adm=${u} tonf/m\xB2, ks=${r} kN/m\xB3) \u2014 reemplaza superestructura`);
            try {
              const s = () => {
                var _a2;
                const g = (_a2 = document.querySelector("#viewer")) == null ? void 0 : _a2.__settings;
                g && (g.shellResults && (g.shellResults.val = "pressure"), g.deformedShape && (g.deformedShape.val = false), g.deformScale && (g.deformScale.val = 5), g.frameResults && (g.frameResults.val = "none"), g.custom3D && (g.custom3D.val = true));
              };
              [
                0,
                100,
                300
              ].forEach((z) => setTimeout(s, z));
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
    runModal(t, e, N) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const x = e.nodes.val, S = e.elements.val, h = e.nodeInputs.val, y = e.elementInputs.val;
      if (!(!x.length || !S.length || !((_a = h.supports) == null ? void 0 : _a.size) || !((_b = y.densities) == null ? void 0 : _b.size))) try {
        const E = [], Y = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
        let mt = 0, b = 0;
        const l = [];
        let p = 0;
        for (let k = 0; k < S.length; k++) {
          const W = S[k];
          let ct = false, so = false;
          if (W.length === 4) {
            const qt = W.map((pt) => x[pt][2]);
            if (Math.max(...qt) - Math.min(...qt) < 0.02) {
              const pt = x[W[0]][0], go = x[W[0]][1], po = x[W[2]][0], Mo = x[W[2]][1], Do = Math.abs((po - pt) * (Mo - go)), Yo = ((_c = y.thicknesses) == null ? void 0 : _c.get(k)) ?? 0.15, ro = ((_d = y.densities) == null ? void 0 : _d.get(k)) ?? 24;
              mt += ro * Do * Yo, ct = true;
            }
          } else if (W.length === 2) {
            const qt = x[W[0]][2], wt = x[W[1]][2], pt = Math.sqrt((x[W[1]][0] - x[W[0]][0]) ** 2 + (x[W[1]][1] - x[W[0]][1]) ** 2);
            if (Math.abs(wt - qt) > pt) {
              so = true;
              const go = Math.abs(wt - qt), po = ((_e = y.areas) == null ? void 0 : _e.get(k)) ?? 0, Mo = ((_f = y.densities) == null ? void 0 : _f.get(k)) ?? 24;
              b += Mo * po * go;
            }
          }
          ct || (E.push(W), ((_g = y.areas) == null ? void 0 : _g.has(k)) && Y.set(p, y.areas.get(k)), ((_h = y.momentsOfInertiaY) == null ? void 0 : _h.has(k)) && X.set(p, y.momentsOfInertiaY.get(k)), ((_i = y.momentsOfInertiaZ) == null ? void 0 : _i.has(k)) && j.set(p, y.momentsOfInertiaZ.get(k)), ((_j = y.torsionalConstants) == null ? void 0 : _j.has(k)) && K.set(p, y.torsionalConstants.get(k)), ((_k = y.elasticities) == null ? void 0 : _k.has(k)) && it.set(p, y.elasticities.get(k)), ((_l = y.shearModuli) == null ? void 0 : _l.has(k)) && xt.set(p, y.shearModuli.get(k)), ((_m = y.densities) == null ? void 0 : _m.has(k)) && J.set(p, y.densities.get(k)), ((_n = y.thicknesses) == null ? void 0 : _n.has(k)) && gt.set(p, y.thicknesses.get(k)), ((_o = y.poissonsRatios) == null ? void 0 : _o.has(k)) && U.set(p, y.poissonsRatios.get(k)), so && l.push(p), p++);
        }
        if (mt > 0 && b > 0 && l.length > 0) {
          const k = 1 + mt / b;
          for (const W of l) {
            const ct = J.get(W) ?? 24;
            J.set(W, ct * k);
          }
        }
        const Q = {
          areas: Y,
          momentsOfInertiaY: X,
          momentsOfInertiaZ: j,
          torsionalConstants: K,
          elasticities: it,
          shearModuli: xt,
          densities: J,
          thicknesses: gt,
          poissonsRatios: U
        }, St = Math.round(t.nPisos), A = Math.min(60, Math.max(15, 3 * St + 6)), v = Te(x, E, h, Q, A), B = Math.round(t.nVanosX), w = Math.round(t.nVanosY), ut = Math.round(t.nPisos), vt = b > 0 ? 1 + mt / b : 1;
        N.render(v, {
          title: `Edificio ${B}\xD7${w} vanos \xD7 ${ut} pisos \xB7 ${A} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${vt.toFixed(2)} dens cols, ${mt.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const Ct = v.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${A} modos \xB7 f\u2081=${Ct.toFixed(4)} Hz \xB7 m_slab=${mt.toFixed(0)} m_cols=${b.toFixed(0)} factor=${vt.toFixed(2)}`);
      } catch (E) {
        console.warn("Modal edificio error:", E.message);
      }
    }
  };
});
export {
  __tla,
  is as e,
  as as f
};
