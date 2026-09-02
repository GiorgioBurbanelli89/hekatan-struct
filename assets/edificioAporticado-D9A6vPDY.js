import { a as Ze } from "./analyze-BFwM3Jvn.js";
import { m as je, d as ge, __tla as __tla_0 } from "./didacticCpp-tPsbfU7x.js";
import { b as Xe, a as oo } from "./cotas3D-BRJLBeVj.js";
import { S as Ge, f as Ke, M as qo, e as Ko, a as Kt, B as ho, V as j, d as Me, b as Je, L as Co, E as Ue, I as Qe, D as We } from "./theme-Co6w-pfC.js";
let ms, hs;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Oo(t, e = 0.5) {
    const N = ts(e), x = t / N;
    let L = Math.max(2, Math.round(x));
    return t / L > N * 1.25 && (L = Math.ceil(x)), {
      n: L,
      dx: t / L
    };
  }
  function ts(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const os = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function es(t, e, N = {}) {
    const x = N.tol ?? 1e-5, L = 0, g = [], b = [], I = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, D = 1e8, K = 1e4, X = 1e4, J = 2 * X, at = D / (2 * (1 + 0.3));
    for (const ut of e) {
      const U = [];
      let gt = 0, Q = 0;
      for (let m = 0; m < t.length; m++) Math.abs(t[m][2] - ut) < x && (U.push(m), gt += t[m][0], Q += t[m][1]);
      if (U.length < 2) continue;
      const it = gt / U.length, M = Q / U.length, d = t.length + g.length;
      g.push({
        idx: d,
        z: ut,
        x: it,
        y: M
      });
      for (const m of U) {
        const ct = t[m][0] - it, _t = t[m][1] - M;
        if (Math.hypot(ct, _t) < x) {
          console.info(`[diafragma] z = ${ut}: el nudo ${m} cae sobre el master (${it.toFixed(3)}, ${M.toFixed(3)}): sin link, un elemento de longitud cero no ata nada.`);
          continue;
        }
        b.push([
          d,
          m
        ]);
        const S = L + b.length - 1;
        I.areas.set(S, K), I.momentsOfInertiaY.set(S, X), I.momentsOfInertiaZ.set(S, X), I.torsionalConstants.set(S, J), I.elasticities.set(S, D), I.shearModuli.set(S, at), I.densities.set(S, 0);
      }
    }
    return N.linkStiffness, {
      masterNodes: g,
      rigidLinks: b,
      linkProps: I
    };
  }
  function ss(t, e, N) {
    const x = (L, g) => {
      L.forEach((b, I) => g.set(I + N, b));
    };
    e.areas = e.areas ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaY = e.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaZ = e.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), e.torsionalConstants = e.torsionalConstants ?? /* @__PURE__ */ new Map(), e.elasticities = e.elasticities ?? /* @__PURE__ */ new Map(), e.shearModuli = e.shearModuli ?? /* @__PURE__ */ new Map(), e.densities = e.densities ?? /* @__PURE__ */ new Map(), x(t.linkProps.areas, e.areas), x(t.linkProps.momentsOfInertiaY, e.momentsOfInertiaY), x(t.linkProps.momentsOfInertiaZ, e.momentsOfInertiaZ), x(t.linkProps.torsionalConstants, e.torsionalConstants), x(t.linkProps.elasticities, e.elasticities), x(t.linkProps.shearModuli, e.shearModuli), x(t.linkProps.densities, e.densities);
  }
  function pe(t) {
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
  function ns(t, e, N) {
    if (t <= 0 || e <= 0) return 1e-12;
    const L = Math.sqrt(12 * e / t) / 2;
    return e / L * N;
  }
  function as(t, e, N, x, L, g, b, I = {}) {
    var _a, _b;
    const D = I.Fy_steel ?? 345e3;
    I.fc_concrete;
    const K = I.Fy_rebar ?? 42e4, X = I.omega ?? 0.15, J = I.phi ?? 0.9, at = L < 0.5 ? J * X * K * (1 - 0.59 * X) : J * D, ut = g < 0.5 ? J * X * K * (1 - 0.59 * X) : J * D, U = N.frameBendingMoments, gt = [];
    for (let Q = 0; Q < e.length; Q++) {
      const it = e[Q];
      if (it.length !== 2) continue;
      const [M, d] = it, m = b.has(Q);
      let ct = 0, _t = 0;
      const S = U == null ? void 0 : U.get(Q);
      S && (ct = S.Mi, _t = S.Mj);
      const y = ((_a = x.areas) == null ? void 0 : _a.get(Q)) ?? 0.16, B = ((_b = x.momentsOfInertiaZ) == null ? void 0 : _b.get(Q)) ?? 213e-5, mt = ns(y, B, m ? at : ut), vt = ct / mt, zt = _t / mt;
      gt.push({
        nodeIdx: M,
        elementIdx: Q,
        end: "i",
        classification: pe(vt)
      }), gt.push({
        nodeIdx: d,
        elementIdx: Q,
        end: "j",
        classification: pe(zt)
      });
    }
    return gt;
  }
  function is(t, e, N, x = {}) {
    const L = x.showElastic ?? false, g = (x.radiusFactor ?? 0.02) * N, b = [], I = new Ge(g, 12, 8);
    for (const D of t) {
      if (!L && D.classification.state === "Elastic") continue;
      const K = e[D.nodeIdx];
      if (!K) continue;
      const X = new Ke({
        color: D.classification.color,
        transparent: true,
        opacity: 0.85
      }), J = new qo(I, X);
      J.position.set(K[0], K[1], K[2]), J.userData = {
        hingeState: D.classification.state,
        ratio: D.classification.ratio.toFixed(3),
        element: D.elementIdx,
        end: D.end
      }, b.push(J);
    }
    return b;
  }
  function cs(t) {
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
  const Jo = 9.80665;
  function _e(t, e, N, x, L = 0.01) {
    const g = Math.abs(t) < L, b = Math.abs(t - N) < L, I = Math.abs(e) < L, D = Math.abs(e - x) < L, K = [
      g,
      b,
      I,
      D
    ].filter(Boolean).length;
    return K >= 2 ? "esquinera" : K === 1 ? "lindero" : "central";
  }
  function ve(t) {
    const { P_kN: e, Mx_kN: N, My_kN: x, tipo: L, q_adm_tonf: g, ks: b } = t, I = t.Lz_min ?? 1, D = t.Lz_max ?? 4, K = t.t_min ?? 0.3;
    if (e <= 0) return {
      tipo: L,
      Lz: I,
      Bz: I,
      t: K,
      A: I ** 2,
      ex: 0,
      ey: 0,
      sigmaMax_tonf: 0,
      sigmaMin_tonf: 0,
      ratio: 0,
      fueraKern: false,
      status: "UPLIFT"
    };
    const X = g * Jo, J = Math.abs(x / e), at = Math.abs(N / e), ut = X * 0.95;
    let U = Math.max(I, Math.sqrt(e / X)), gt = U, Q = 1 / 0, it = 0, M = false;
    for (let y = 0; y < 50 && U <= D; y++) {
      const B = L === "esquinera" ? 0.3 : L === "lindero" ? 0.2 : 0, z = U + B, mt = gt + B, vt = z * mt, zt = Math.max(J, at), $ = zt === J ? z : mt;
      if (M = zt > $ / 6, !M) Q = e / vt * (1 + 6 * zt / $), it = e / vt * (1 - 6 * zt / $);
      else {
        const W = 1.5 * $ - 3 * zt, It = zt === J ? mt : z;
        Q = 2 * e / (It * Math.max(W, 0.01)), it = 0;
      }
      if (Q <= ut) break;
      U += 0.05, gt += 0.05;
    }
    const d = U * gt, m = Math.max(K, U / 6), ct = Q / X, _t = ct <= 1 ? "OK" : "OVERSTRESS";
    let S;
    return b && b > 0 && (S = Q / b * 1e3), {
      tipo: L,
      Lz: U,
      Bz: gt,
      t: m,
      A: d,
      ex: J,
      ey: at,
      sigmaMax_tonf: Q / Jo,
      sigmaMin_tonf: it / Jo,
      ratio: ct,
      delta_mm: S,
      fueraKern: M,
      status: _t
    };
  }
  function Ho(t, e, N, x, L) {
    return t.map((g) => {
      const b = _e(g.x, g.y, e, N);
      return {
        ...ve({
          P_kN: g.P_kN,
          Mx_kN: g.Mx_kN,
          My_kN: g.My_kN,
          tipo: b,
          q_adm_tonf: x,
          ks: L
        }),
        idx: g.idx,
        x: g.x,
        y: g.y
      };
    });
  }
  let Uo, mo, xe, u, ot;
  hs = Object.freeze(Object.defineProperty({
    __proto__: null,
    classifyFootingType: _e,
    designAllFootings: Ho,
    designFooting: ve
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Uo = 9.81;
  mo = 24 / Uo;
  xe = 78 / Uo;
  u = (t, e, N, x, L, g) => ({
    default: N,
    min: x,
    max: L,
    step: g,
    label: e,
    folder: t
  });
  ot = (t, e, N, x) => ({
    default: N,
    label: e,
    folder: t,
    options: x
  });
  ms = {
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
        ...u("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...u("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...u("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: u("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: u("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: u("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: u("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: u("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: u("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: u("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: u("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: u("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: ot("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: ot("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: ot("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: u("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: u("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: u("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: u("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: u("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      nDivBeam: u("Mesh", "Div. Vigas (segmentos)", 1, 1, 8, 1),
      nDivCol: u("Mesh", "Div. Columnas (segmentos)", 1, 1, 8, 1),
      vigSecActivar: {
        ...ot("Vigas Secundarias", "Activar", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      vigSecDir: ot("Vigas Secundarias", "Corren en", 0, {
        "X (entre ejes Y)": 0,
        "Y (entre ejes X)": 1
      }),
      vigSecCantidad: u("Vigas Secundarias", "Cantidad/vano", 2, 1, 5, 1),
      vigSecB: u("Vigas Secundarias", "b sec (m)", 0.2, 0.1, 0.4, 0.05),
      vigSecH: u("Vigas Secundarias", "h sec (m)", 0.3, 0.2, 0.6, 0.05),
      losaActivar: {
        ...ot("Losas de Piso", "Activar losas", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      losaEspesor: u("Losas de Piso", "Espesor (m)", 0.15, 0.08, 0.4, 0.01),
      losaSubdivX: u("Losas de Piso", "Subdiv. X", 2, 1, 6, 1),
      losaSubdivY: u("Losas de Piso", "Subdiv. Y", 2, 1, 6, 1),
      muroActivar: {
        ...ot("Muros de Corte", "Activar", 0, {
          No: 0,
          Perimetrales: 1,
          "Centro X": 2,
          "Centro Y": 3,
          "Doble central": 4
        }),
        regenOnChange: true
      },
      muroEspesor: u("Muros de Corte", "Espesor (m)", 0.2, 0.1, 0.4, 0.01),
      muroSubdivV: u("Muros de Corte", "Subdiv. V (vert)", 2, 1, 6, 1),
      muroSubdivH: u("Muros de Corte", "Subdiv. H (horiz)", 2, 1, 6, 1),
      apoyo: ot("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: u("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: u("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: u("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: u("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      loadCase: ot("Cargas", "Caso de carga", 0, {
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
      modoCimentacion: ot("Cimentaci\xF3n", "\u{1F518} Vista (toggle)", 0, {
        "\u{1F3E2} Edificio completo (ver/editar)": 0,
        "\u{1FAA8} Solo cimentaci\xF3n (P,Mx,My)": 1
      }),
      q_adm_zapata: u("Cimentaci\xF3n", "q_adm (tonf/m\xB2)", 10, 1, 100, 1),
      ks_zapata: u("Cimentaci\xF3n", "ks (kN/m\xB3)", 1030, 100, 2e5, 10),
      Hf_pedestal: u("Cimentaci\xF3n", "Df col enterrada (m) (m)", 0.5, 0, 3, 0.05),
      t_zapata: u("Cimentaci\xF3n", "t zapata (m)", 0.3, 0.1, 1.5, 0.05),
      nSubZapata: u("Cimentaci\xF3n", "Subdiv. Q4 zapata", 4, 2, 12, 1),
      voladoExtra: u("Cimentaci\xF3n", "Volado extra esq./lin (m)", 0.3, 0, 1, 0.05),
      tipoZapataOverride: ot("Cimentaci\xF3n", "Tipo (override)", 0, {
        "Auto (por posici\xF3n)": 0,
        "Todas central": 1,
        "Todas lindero": 2,
        "Todas esquinera": 3
      }),
      mostrarZapatas: ot("Cimentaci\xF3n", "Mostrar zapatas 3D", 0, {
        On: 1,
        Off: 0
      }),
      mostrarLabelsZapatas: ot("Cimentaci\xF3n", "Mostrar etiquetas zapatas", 1, {
        On: 1,
        Off: 0
      }),
      estiloZapata: ot("Cimentaci\xF3n", "Estilo render", 1, {
        "S\xF3lido (caja transl\xFAcida)": 0,
        "Shellthick (Q4 + grilla)": 1
      }),
      sistemaCimentacion: ot("Cimentaci\xF3n", "Sistema cim.", 0, {
        "Zapatas aisladas": 0,
        "Zapatas + vigas de amarre": 1,
        "Vigas T invertida (corrida)": 2,
        "Vigas rect. + zapata corrida": 3,
        "Losa de cimentaci\xF3n (raft)": 4
      }),
      vigaAmarre_pos: ot("Cimentaci\xF3n", "Viga amarre \u2014 posici\xF3n", 0, {
        "Unida a zapatas (z=-Hf)": 0,
        "Conectada a pedestales (-Hf/2)": 1
      }),
      vigaAmarre_h: u("Cimentaci\xF3n", "Viga amarre h (m)", 0.4, 0.2, 1, 0.05),
      vigaAmarre_b: u("Cimentaci\xF3n", "Viga amarre b (m)", 0.25, 0.15, 0.6, 0.05),
      vigaCim_h: u("Cimentaci\xF3n", "Viga cim. h (m)", 0.8, 0.3, 2, 0.05),
      vigaCim_bw: u("Cimentaci\xF3n", "Viga cim. b alma (m)", 0.4, 0.2, 1, 0.05),
      vigaCim_bf: u("Cimentaci\xF3n", "Viga cim. b ala (m)", 1.2, 0.4, 3, 0.1),
      vigaCim_tf: u("Cimentaci\xF3n", "Viga cim. e ala (m)", 0.3, 0.1, 0.8, 0.05),
      nSubViga: u("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: u("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: ot("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: u("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: ot("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: ot("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: ot("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: u("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      murosMode: ot("Avanzado", "Muros de corte (c\xE1scara)", 0, {
        ninguno: 0,
        "en X (fachadas Y)": 1,
        "en Y (fachadas X)": 2,
        "en X e Y": 3
      }),
      tMuro: u("Avanzado", "t muro (m)", 0.25, 0.15, 0.6, 0.05),
      slabType: ot("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: ot("Avanzado", "Discretizaci\xF3n losa", 0.5, os),
      diafragmaRigido: ot("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      }),
      massSource: ot("Avanzado", "Mass Source", 0, {
        "Self-weight (peso propio)": 0,
        "From Loads (DEAD+0.25\xB7LIVE) ETABS": 1
      }),
      qDead: u("Avanzado", "qDead losa (kN/m\xB2)", 3.5, 0.5, 10, 0.5),
      qLive: u("Avanzado", "qLive losa (kN/m\xB2)", 1.5, 0, 6, 0.5),
      crackedSections: ot("Avanzado", "Cracked Sections (ACI 318)", 0, {
        "Off (secci\xF3n bruta Ig)": 0,
        "On: 0.7\xB7Ig col / 0.35\xB7Ig viga / 0.25\xB7Ig losa": 1
      })
    },
    dynamicParams(t) {
      const e = {}, N = Math.round(t.nPisos ?? 3), x = Math.round(t.nVanosX ?? 2), L = Math.round(t.nVanosY ?? 2);
      for (let g = 1; g <= N; g++) e[`hP_${g}`] = u("Alturas por piso", `h Piso ${g} (m)`, 0, 0, 6, 0.1), e[`colB_p${g}`] = u("Secciones por piso", `b col P${g} (m)`, 0, 0, 1, 0.05), e[`colH_p${g}`] = u("Secciones por piso", `h col P${g} (m)`, 0, 0, 1, 0.05), e[`vigaB_p${g}`] = u("Secciones por piso", `b viga P${g} (m)`, 0, 0, 0.8, 0.05), e[`vigaH_p${g}`] = u("Secciones por piso", `h viga P${g} (m)`, 0, 0, 1, 0.05);
      for (let g = 1; g <= x; g++) e[`svX_${g}`] = u("Luces por vano", `svX #${g} (m)`, 0, 0, 12, 0.5);
      for (let g = 1; g <= L; g++) e[`svY_${g}`] = u("Luces por vano", `svY #${g} (m)`, 0, 0, 12, 0.5);
      return e;
    },
    computedLabels(t, e) {
      var _a;
      const x = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions, L = e.nodes.rawVal;
      if (!x || !(L == null ? void 0 : L.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let g = 0, b = 0, I = 0, D = -1, K = 0, X = -1;
      const J = [];
      let at = 0, ut = 0;
      x.forEach((ct, _t) => {
        const S = L[_t];
        if (!S || Math.abs(S[2]) > 1e-6) return;
        const y = ct[2], B = ct[3], z = ct[4];
        Math.abs(y) > Math.abs(g) && (g = y, D = _t, S[0], S[1]), y > 0 && y > Math.abs(K) && (K = y, X = _t), Math.abs(B) > Math.abs(b) && (b = B), Math.abs(z) > Math.abs(I) && (I = z), J.push({
          idx: _t,
          x: S[0],
          y: S[1],
          P_kN: Math.abs(y),
          Mx_kN: B,
          My_kN: z
        }), S[0] > at && (at = S[0]), S[1] > ut && (ut = S[1]);
      });
      const U = Math.abs(g) / 9.80665, gt = Math.abs(b) / 9.80665, Q = Math.abs(I) / 9.80665, it = K / 9.80665, M = Math.round(t.nPisos), d = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${U.toFixed(2)} tonf (nodo ${D})`,
        Mx: `${gt.toFixed(2)} tonf\xB7m`,
        My: `${Q.toFixed(2)} tonf\xB7m`
      };
      if (it > 0.01 && (d["\u26A0 Uplift"] = `${it.toFixed(2)} tonf (nodo ${X})`), d.Pisos = `${M}`, d["Copiar a \u2192 zapata-aislada"] = `P=${U.toFixed(1)}, Mx=${gt.toFixed(1)}, My=${Q.toFixed(1)}`, J.length > 0 && at > 0 && ut > 0) {
        const ct = t.q_adm_zapata ?? 10, _t = t.ks_zapata ?? 1030;
        try {
          const S = Ho(J, at, ut, ct, _t);
          let y = 0, B = 0, z = 0, mt = 0, vt = -1, zt = "", $ = 0, W = 0;
          for (const yt of S) yt.tipo === "esquinera" ? y++ : yt.tipo === "lindero" ? B++ : z++, yt.sigmaMax_tonf > mt && (mt = yt.sigmaMax_tonf, vt = yt.idx, zt = yt.tipo), yt.status === "OK" && $++, yt.Lz > W && (W = yt.Lz);
          d["\u2500\u2500 Cimentaci\xF3n (auto) \u2500\u2500"] = "", d["Tipos zapata"] = `${y} esquineras, ${B} linderas, ${z} centrales`, d["\u03C3_max global"] = `${mt.toFixed(2)} tonf/m\xB2 (nodo ${vt}, ${zt})`, d["\u03C3/q_adm"] = `${(mt / ct).toFixed(2)}` + (mt / ct <= 1 ? " \u2713" : " \u26A0"), d["Lz m\xE1x zapata"] = `${W.toFixed(2)} m`, d.Cumplen = `${$}/${S.length}` + ($ === S.length ? " \u2713" : " \u26A0");
          const It = t.Hf_pedestal ?? 0.5, $t = t.t_zapata ?? 0.3, Pt = Math.round(t.nSubZapata ?? 4);
          d["Df col enterrada"] = `${It.toFixed(2)} m` + (It < 1e-3 ? " (sin pedestal)" : ""), d["t zapata"] = `${$t.toFixed(2)} m`, d["Subdiv. Q4"] = `${Pt}\xD7${Pt}`, d["Volado extra"] = `${(t.voladoExtra ?? 0.3).toFixed(2)} m`;
        } catch {
          d["\u2500\u2500 Cimentaci\xF3n \u2500\u2500"] = "module load error";
        }
      }
      const m = e.__plasticHinges;
      if (m) {
        const ct = (m.B ?? 0) + (m.IO ?? 0) + (m.LS ?? 0) + (m.CP ?? 0);
        d["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", d["\u{1F7E2} El\xE1stico"] = `${m.Elastic ?? 0}`, d["\u{1F7E1} B \u2014 Yield"] = `${m.B ?? 0}`, d["\u{1F7E0} IO \u2014 Immed.Occ."] = `${m.IO ?? 0}`, d["\u{1F534} LS \u2014 Life Safety"] = `${m.LS ?? 0}`, d["\u26AB CP \u2014 Collapse Prev."] = `${m.CP ?? 0}`, d["Total r\xF3tulas formadas"] = `${ct}`;
      }
      return d;
    },
    build(t, e) {
      var _a, _b;
      const N = Math.round(t.nVanosX), x = Math.round(t.nVanosY), L = Math.round(t.nPisos), g = Math.max(1, Math.round(t.nSubViga)), b = Math.max(1, Math.round(t.nSubCol)), I = t.fcConcr * 0.0981, D = 4700 * Math.sqrt(I) * 1e3, K = 2e8, X = 0.2, J = 0.3, at = D / (2 * (1 + X)), ut = K / (2 * (1 + J)), U = (o, i, s) => Array.from({
        length: i
      }, (h, c) => {
        const _ = t[`${o}${c + 1}`];
        return typeof _ == "number" && _ > 0 ? _ : s;
      }), gt = U("svX_", N, t.spanX), Q = U("svY_", x, t.spanY), it = U("hP_", L, t.hPiso), M = [];
      t.Lvix > 0 && M.push(-t.Lvix), M.push(0);
      for (let o = 0; o < N; o++) M.push(M[M.length - 1] + gt[o]);
      t.Lvdx > 0 && M.push(M[M.length - 1] + t.Lvdx);
      const d = [];
      t.Lviy > 0 && d.push(-t.Lviy), d.push(0);
      for (let o = 0; o < x; o++) d.push(d[d.length - 1] + Q[o]);
      t.Lvdy > 0 && d.push(d[d.length - 1] + t.Lvdy);
      const m = [
        0
      ];
      for (let o = 0; o < L; o++) m.push(m[m.length - 1] + it[o]);
      const ct = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === M.length - 1, _t = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === d.length - 1, S = (o, i) => ct(o) || _t(i), y = [], B = {};
      for (let o = 0; o < m.length; o++) for (let i = 0; i < d.length; i++) for (let s = 0; s < M.length; s++) o === 0 && S(s, i) || (B[`${s},${i},${o}`] = y.length, y.push([
        M[s],
        d[i],
        m[o]
      ]));
      const z = [], mt = /* @__PURE__ */ new Set(), vt = /* @__PURE__ */ new Set(), zt = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Map(), W = (o, i, s, h, c) => {
        if (s <= 1) {
          h.add(z.length), $.set(z.length, c), z.push([
            o,
            i
          ]);
          return;
        }
        const _ = y[o], r = y[i];
        let l = o;
        for (let w = 1; w < s; w++) {
          const n = w / s, f = y.length;
          y.push([
            _[0] + (r[0] - _[0]) * n,
            _[1] + (r[1] - _[1]) * n,
            _[2] + (r[2] - _[2]) * n
          ]), h.add(z.length), $.set(z.length, c), z.push([
            l,
            f
          ]), l = f;
        }
        h.add(z.length), $.set(z.length, c), z.push([
          l,
          i
        ]);
      }, It = (o) => {
        const i = y[o];
        for (let s = z.length - 1; s >= 0; s--) {
          const h = z[s];
          if (h.length !== 2) continue;
          const [c, _] = h;
          if (c === o || _ === o) continue;
          const r = y[c], l = y[_], w = [
            l[0] - r[0],
            l[1] - r[1],
            l[2] - r[2]
          ], n = [
            i[0] - r[0],
            i[1] - r[1],
            i[2] - r[2]
          ], f = w[0] ** 2 + w[1] ** 2 + w[2] ** 2;
          if (f < 1e-12) continue;
          const Z = (n[0] * w[0] + n[1] * w[1] + n[2] * w[2]) / f;
          if (Z < 1e-6 || Z > 1 - 1e-6 || Math.hypot(n[0] - Z * w[0], n[1] - Z * w[1], n[2] - Z * w[2]) > 1e-6) continue;
          z[s] = [
            c,
            o
          ];
          const Y = z.length;
          z.push([
            o,
            _
          ]), vt.has(s) && vt.add(Y), mt.has(s) && mt.add(Y), $.has(s) && $.set(Y, $.get(s));
        }
      };
      for (let o = 0; o < m.length - 1; o++) for (let i = 0; i < d.length; i++) for (let s = 0; s < M.length; s++) S(s, i) || W(B[`${s},${i},${o}`], B[`${s},${i},${o + 1}`], b, mt, o);
      for (let o = 1; o < m.length; o++) for (let i = 0; i < d.length; i++) for (let s = 0; s < M.length - 1; s++) W(B[`${s},${i},${o}`], B[`${s + 1},${i},${o}`], g, vt, o - 1);
      for (let o = 1; o < m.length; o++) for (let i = 0; i < M.length; i++) for (let s = 0; s < d.length - 1; s++) W(B[`${i},${s},${o}`], B[`${i},${s + 1},${o}`], g, vt, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), i = (h, c, _) => {
          for (let l = 0; l < y.length; l++) if (Math.abs(y[l][0] - h) < 1e-6 && Math.abs(y[l][1] - c) < 1e-6 && Math.abs(y[l][2] - _) < 1e-6) return l;
          const r = y.length;
          return y.push([
            h,
            c,
            _
          ]), It(r), r;
        }, s = t.vSecDir < 0.5 ? "x" : "y";
        for (let h = 1; h < m.length; h++) if (s === "x") for (let c = 0; c < d.length - 1; c++) {
          const _ = d[c], r = d[c + 1];
          for (let l = 1; l <= o; l++) {
            const w = _ + l / (o + 1) * (r - _), n = [];
            for (let f = 0; f < M.length; f++) n.push(i(M[f], w, m[h]));
            for (let f = 0; f < M.length - 1; f++) vt.add(z.length), z.push([
              n[f],
              n[f + 1]
            ]);
          }
        }
        else for (let c = 0; c < M.length - 1; c++) {
          const _ = M[c], r = M[c + 1];
          for (let l = 1; l <= o; l++) {
            const w = _ + l / (o + 1) * (r - _), n = [];
            for (let f = 0; f < d.length; f++) n.push(i(w, d[f], m[h]));
            for (let f = 0; f < d.length - 1; f++) vt.add(z.length), z.push([
              n[f],
              n[f + 1]
            ]);
          }
        }
      }
      const $t = Math.round(t.bracesMode);
      if ($t > 0) {
        const o = $t === 1 || $t === 2 || $t === 3, i = $t === 1 || $t === 2 || $t === 4, s = m.length - 1;
        for (let h = 0; h < s; h++) {
          if (o) for (let c = 0; c < d.length; c++) {
            if ($t === 1 && c !== 0 && c !== d.length - 1) continue;
            const _ = Math.floor((M.length - 1) / 2);
            for (let r = 0; r < M.length - 1; r++) {
              if ($t === 1 && r !== _ || S(r, c) || S(r + 1, c)) continue;
              const l = B[`${r},${c},${h}`], w = B[`${r + 1},${c},${h + 1}`], n = B[`${r + 1},${c},${h}`], f = B[`${r},${c},${h + 1}`];
              l !== void 0 && w !== void 0 && z.push([
                l,
                w
              ]), n !== void 0 && f !== void 0 && z.push([
                n,
                f
              ]);
            }
          }
          if (i) for (let c = 0; c < M.length; c++) {
            if ($t === 1 && c !== 0 && c !== M.length - 1) continue;
            const _ = Math.floor((d.length - 1) / 2);
            for (let r = 0; r < d.length - 1; r++) {
              if ($t === 1 && r !== _ || S(c, r) || S(c, r + 1)) continue;
              const l = B[`${c},${r},${h}`], w = B[`${c},${r + 1},${h + 1}`], n = B[`${c},${r + 1},${h}`], f = B[`${c},${r},${h + 1}`];
              l !== void 0 && w !== void 0 && z.push([
                l,
                w
              ]), n !== void 0 && f !== void 0 && z.push([
                n,
                f
              ]);
            }
          }
        }
      }
      const Pt = /* @__PURE__ */ new Map(), yt = (o, i, s) => `${Math.round(o * 1e4)},${Math.round(i * 1e4)},${Math.round(s * 1e4)}`;
      for (let o = 0; o < y.length; o++) Pt.set(yt(y[o][0], y[o][1], y[o][2]), o);
      const Rt = t.slabDisc > 0 ? t.slabDisc : 0.5;
      if (t.slabOn >= 0.5) for (let o = 1; o < m.length; o++) {
        const i = m[o];
        for (let s = 0; s < M.length - 1; s++) for (let h = 0; h < d.length - 1; h++) {
          const c = M[s], _ = M[s + 1], r = d[h], l = d[h + 1], { n: w } = Oo(Math.abs(_ - c), Rt), { n } = Oo(Math.abs(l - r), Rt), f = [];
          for (let Z = 0; Z <= n; Z++) {
            const Y = [];
            for (let rt = 0; rt <= w; rt++) {
              const H = c + rt / w * (_ - c), bt = r + Z / n * (l - r), Mt = yt(H, bt, i), St = Pt.get(Mt);
              if (St !== void 0) Y.push(St);
              else {
                const Ot = y.length;
                y.push([
                  H,
                  bt,
                  i
                ]), Pt.set(Mt, Ot), Y.push(Ot), (rt === 0 || rt === w || Z === 0 || Z === n) && It(Ot);
              }
            }
            f.push(Y);
          }
          for (let Z = 0; Z < n; Z++) for (let Y = 0; Y < w; Y++) zt.add(z.length), z.push([
            f[Z][Y],
            f[Z][Y + 1],
            f[Z + 1][Y + 1],
            f[Z + 1][Y]
          ]);
        }
      }
      const uo = /* @__PURE__ */ new Set(), go = [], Jt = Math.round(t.murosMode ?? 0);
      if (Jt > 0) {
        const o = Jt === 1 || Jt === 3, i = Jt === 2 || Jt === 3, s = (w, n, f) => {
          const Z = yt(w, n, f), Y = Pt.get(Z);
          if (Y !== void 0) return Y;
          const rt = y.length;
          return y.push([
            w,
            n,
            f
          ]), Pt.set(Z, rt), It(rt), rt;
        }, h = (w, n, f, Z, Y, rt, H, bt) => {
          const Mt = [];
          for (let St = 0; St <= bt; St++) {
            const Ot = [];
            for (let _o = 0; _o <= H; _o++) Ot.push(s(w + _o / H * (f - w), n + _o / H * (Z - n), Y + St / bt * (rt - Y)));
            Mt.push(Ot);
          }
          for (let St = 0; St < bt; St++) for (let Ot = 0; Ot < H; Ot++) uo.add(z.length), z.push([
            Mt[St][Ot],
            Mt[St][Ot + 1],
            Mt[St + 1][Ot + 1],
            Mt[St + 1][Ot]
          ]);
          Math.abs(Y) < 1e-9 && go.push(...Mt[0]);
        }, c = t.Lvix > 0 ? 1 : 0, _ = t.Lviy > 0 ? 1 : 0, r = M.length - 1 - (t.Lvdx > 0 ? 1 : 0), l = d.length - 1 - (t.Lvdy > 0 ? 1 : 0);
        for (let w = 0; w < m.length - 1; w++) {
          const n = m[w], f = m[w + 1], Z = Oo(f - n, Rt).n, Y = Math.ceil(Z / b) * b;
          if (o && r > c) {
            const rt = M[c], H = M[c + 1], bt = Oo(H - rt, Rt).n;
            for (const Mt of /* @__PURE__ */ new Set([
              _,
              l
            ])) h(rt, d[Mt], H, d[Mt], n, f, bt, Y);
          }
          if (i && l > _) {
            const rt = d[_], H = d[_ + 1], bt = Oo(H - rt, Rt).n;
            for (const Mt of /* @__PURE__ */ new Set([
              c,
              r
            ])) h(M[Mt], rt, M[Mt], H, n, f, bt, Y);
          }
        }
      }
      const Lo = Math.round(t.apoyo), Fo = Lo === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : Lo === 1 ? [
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
      ], wo = /* @__PURE__ */ new Map();
      for (let o = 0; o < d.length; o++) for (let i = 0; i < M.length; i++) S(i, o) || wo.set(B[`${i},${o},0`], [
        ...Fo
      ]);
      for (const o of go) wo.set(o, [
        ...Fo
      ]);
      const At = Math.round(t.loadCase ?? 0), ye = At === 1 ? [
        1,
        1,
        0,
        0
      ] : At === 2 ? [
        1,
        0,
        0,
        0
      ] : At === 3 ? [
        0,
        1,
        0,
        0
      ] : At === 4 ? [
        0,
        0,
        1,
        0
      ] : At === 5 ? [
        0,
        0,
        0,
        1
      ] : At === 6 ? [
        0,
        0,
        1,
        1
      ] : At === 7 ? [
        1.2,
        1.6,
        0,
        0
      ] : At === 8 ? [
        1.2,
        1,
        1,
        0
      ] : At === 9 ? [
        1.2,
        1,
        0,
        1
      ] : At === 10 ? [
        1.2,
        1,
        -1,
        0
      ] : At === 11 ? [
        1.2,
        1,
        0,
        -1
      ] : At === 12 ? [
        0.9,
        0,
        1,
        0
      ] : At === 13 ? [
        0.9,
        0,
        0,
        1
      ] : [
        1,
        1,
        1,
        1
      ], [be, Ce, we, ze] = ye, Po = /* @__PURE__ */ new Map(), Qo = be * t.CM + Ce * t.CV;
      if (Qo !== 0) for (let o = 1; o < m.length; o++) for (let i = 0; i < d.length; i++) for (let s = 0; s < M.length; s++) {
        const h = `${s},${i},${o}`;
        B[h] !== void 0 && Po.set(B[h], [
          0,
          0,
          Qo,
          0,
          0,
          0
        ]);
      }
      const Wo = we * t.Ex, te = ze * t.Ey;
      if (Wo !== 0 || te !== 0) {
        const o = B[`${M.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${L}`];
        if (o !== void 0) {
          const i = Po.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          Po.set(o, [
            i[0] + Wo,
            i[1] + te,
            i[2],
            i[3],
            i[4],
            i[5]
          ]);
        }
      }
      const Ro = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), Zo = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), $e = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), Se = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), ke = (o) => {
        const i = Ro[o] ?? t.colSize, s = Zo[o] ?? t.colSize;
        return {
          A: i * s,
          Iz: i * s ** 3 / 12,
          Iy: s * i ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(i, s), 4)
        };
      }, Oe = (o) => {
        const i = $e[o] ?? t.vigaB, s = Se[o] ?? t.vigaH;
        return {
          A: i * s,
          Iy: i * s ** 3 / 12,
          Iz: s * i ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(i, s), 3) * Math.max(i, s)
        };
      }, Le = t.matCol < 0.5 ? D : K, Fe = t.matCol < 0.5 ? at : ut, Pe = t.matCol < 0.5 ? X : J, Ee = t.matCol < 0.5 ? mo : xe, Ve = t.matViga < 0.5 ? D : K, Ie = t.matViga < 0.5 ? at : ut, Ae = t.matViga < 0.5 ? X : J, Ne = t.matViga < 0.5 ? mo : xe, Mo = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), Eo = /* @__PURE__ */ new Map(), Vo = /* @__PURE__ */ new Map(), Io = /* @__PURE__ */ new Map(), Ao = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), se = Math.round(t.slabType), Be = se === 2 ? 0 : 1, Te = se === 1 ? 0 : 1, No = t.crackedSections > 0.5, ne = t.matCol < 0.5 && No ? 0.7 : 1, ae = t.matViga < 0.5 && No ? 0.35 : 1, De = No ? 0.25 : 1, Ye = 1, Bo = t.massSource > 0.5, qe = t.qDead + 0.25 * t.qLive, He = Bo ? qe / Uo / Math.max(t.slabT, 0.05) : mo;
      for (let o = 0; o < z.length; o++) {
        const i = $.get(o) ?? 0;
        if (zt.has(o)) Mo.set(o, D), po.set(o, at), zo.set(o, X), jo.set(o, t.slabT), oe.set(o, Be * Ye), ee.set(o, Te * De), xo.set(o, He);
        else if (uo.has(o)) Mo.set(o, D), po.set(o, at), zo.set(o, X), jo.set(o, t.tMuro ?? 0.25), xo.set(o, Bo ? 0 : mo);
        else if (mt.has(o)) {
          const s = ke(Math.min(i, 7));
          Mo.set(o, Le), po.set(o, Fe), zo.set(o, Pe), Eo.set(o, s.A), Vo.set(o, s.Iz * ne), Io.set(o, s.Iy * ne), Ao.set(o, s.J), xo.set(o, Bo ? 0 : Ee);
        } else {
          const s = Oe(Math.min(i, 7));
          Mo.set(o, Ve), po.set(o, Ie), zo.set(o, Ae), Eo.set(o, s.A), Vo.set(o, s.Iz * ae), Io.set(o, s.Iy * ae), Ao.set(o, s.J), xo.set(o, Bo ? 0 : Ne);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let c = 1; c < m.length; c++) o.push(m[c]);
        const i = es(y, o), s = z.length;
        for (const c of i.masterNodes) y.push([
          c.x,
          c.y,
          c.z
        ]);
        for (const c of i.rigidLinks) z.push(c);
        ss(i, {
          elasticities: Mo,
          shearModuli: po,
          areas: Eo,
          momentsOfInertiaY: Vo,
          momentsOfInertiaZ: Io,
          torsionalConstants: Ao,
          densities: xo
        }, s);
      }
      e.nodes.val = y, e.elements.val = z, e.nodeInputs.val = {
        supports: wo,
        loads: Po
      }, e.elementInputs.val = {
        elasticities: Mo,
        shearModuli: po,
        areas: Eo,
        momentsOfInertiaY: Vo,
        momentsOfInertiaZ: Io,
        torsionalConstants: Ao,
        densities: xo,
        poissonsRatios: zo,
        thicknesses: jo,
        membraneModifiers: oe,
        bendingModifiers: ee
      };
      const ie = ge(y, z, e.nodeInputs.val, e.elementInputs.val);
      e.deformOutputs.val = ie, e.analyzeOutputs.val = Ze(y, z, e.elementInputs.val, ie);
      const Xo = Xe(M, d, m);
      try {
        const o = as(y, z, e.analyzeOutputs.rawVal, e.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), mt);
        let i = 1 / 0, s = 1 / 0, h = 1 / 0, c = -1 / 0, _ = -1 / 0, r = -1 / 0;
        for (const n of y) n[0] < i && (i = n[0]), n[0] > c && (c = n[0]), n[1] < s && (s = n[1]), n[1] > _ && (_ = n[1]), n[2] < h && (h = n[2]), n[2] > r && (r = n[2]);
        const l = Math.sqrt((c - i) ** 2 + (_ - s) ** 2 + (r - h) ** 2) || 1, w = is(o, y, l, {
          showElastic: false,
          radiusFactor: 0.015
        });
        Xo.push(...w), e.__plasticHinges = cs(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      if ((t.mostrarZapatas ?? 1) >= 0.5) try {
        const o = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions;
        if (o) {
          const i = [];
          let s = 0, h = 0;
          if (o.forEach((c, _) => {
            const r = y[_];
            !r || Math.abs(r[2]) > 1e-6 || (i.push({
              idx: _,
              x: r[0],
              y: r[1],
              P_kN: Math.abs(c[2]),
              Mx_kN: c[3],
              My_kN: c[4]
            }), r[0] > s && (s = r[0]), r[1] > h && (h = r[1]));
          }), i.length > 0) {
            const c = t.q_adm_zapata ?? 10, _ = t.ks_zapata ?? 1030, r = Math.max(0, t.Hf_pedestal ?? 0.5), l = Math.max(0.1, t.t_zapata ?? 0.3), w = Math.max(2, Math.round(t.nSubZapata ?? 4)), n = Math.max(0, t.voladoExtra ?? 0.3), f = Math.round(t.tipoZapataOverride ?? 0) | 0, Z = Math.round(t.estiloZapata ?? 1), Y = Ho(i, s, h, c, _), rt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const E of Y) f > 0 && (E.tipo = rt[f - 1]), E.t = l;
            const H = [], bt = (E) => new Ko({
              color: E,
              transparent: true,
              opacity: 0.55,
              roughness: 0.7
            }), Mt = new Kt({
              color: 0,
              linewidth: 2
            }), St = new Kt({
              color: 2236962,
              linewidth: 1,
              transparent: true,
              opacity: 0.5
            }), Ot = new Ko({
              color: 10265519,
              transparent: true,
              opacity: 0.75,
              roughness: 0.5
            }), _o = new Kt({
              color: 1118481,
              linewidth: 2
            }), ce = Ro[0] ?? t.colSize, re = Zo[0] ?? t.colSize;
            for (const E of Y) {
              const R = E.Lz, st = E.Bz, Gt = E.t;
              let Zt = 0, jt = 0;
              E.tipo === "esquinera" ? (Zt = E.x < s / 2 ? -(R / 2 - n) : R / 2 - n, jt = E.y < h / 2 ? -(st / 2 - n) : st / 2 - n) : E.tipo === "lindero" && (Math.abs(E.x) < 1e-3 || Math.abs(E.x - s) < 1e-3 ? Zt = E.x < s / 2 ? -(R / 2 - n) : R / 2 - n : (Math.abs(E.y) < 1e-3 || Math.abs(E.y - h) < 1e-3) && (jt = E.y < h / 2 ? -(st / 2 - n) : st / 2 - n));
              const G = E.x - Zt, F = E.y - jt, A = -r, Nt = A - Gt / 2, qt = A - Gt, eo = E.ratio;
              let so = 4906624;
              if (eo > 1.5 ? so = 15680580 : eo > 1 ? so = 16096779 : eo > 0.8 && (so = 16498468), r > 1e-3) {
                const xt = new ho().setFromPoints([
                  new j(E.x, E.y, 0),
                  new j(E.x, E.y, -r)
                ]);
                H.push(new Me(xt, new Kt({
                  color: 6333946,
                  linewidth: 4
                }))), H.push(oo(`Df=${r.toFixed(2)}m`, E.x + 0.1, E.y + 0.1, -r / 2, "#60a5fa"));
              }
              if (Z === 0) {
                const xt = new Je(R, st, Gt), Ut = new qo(xt, bt(so));
                Ut.position.set(G, F, Nt), H.push(Ut);
                const Qt = new Co(new Ue(xt), Mt);
                Qt.position.copy(Ut.position), H.push(Qt);
              } else {
                const xt = new Qe(R, st), Ut = new Ko({
                  color: so,
                  transparent: true,
                  opacity: 0.45,
                  roughness: 0.6,
                  side: We
                }), Qt = new qo(xt, Ut);
                Qt.position.set(G, F, A), H.push(Qt);
                const no = new qo(xt.clone(), Ut.clone());
                no.position.set(G, F, qt), H.push(no);
                const de = R / w, fe = st / w, Xt = [];
                for (let kt = 0; kt <= w; kt++) {
                  const Ct = -R / 2 + kt * de;
                  Xt.push(new j(G + Ct, F - st / 2, A), new j(G + Ct, F + st / 2, A)), Xt.push(new j(G + Ct, F - st / 2, qt), new j(G + Ct, F + st / 2, qt));
                }
                for (let kt = 0; kt <= w; kt++) {
                  const Ct = -st / 2 + kt * fe;
                  Xt.push(new j(G - R / 2, F + Ct, A), new j(G + R / 2, F + Ct, A)), Xt.push(new j(G - R / 2, F + Ct, qt), new j(G + R / 2, F + Ct, qt));
                }
                const So = new ho().setFromPoints(Xt);
                H.push(new Co(So, St));
                const vo = [
                  [
                    -R / 2,
                    -st / 2
                  ],
                  [
                    R / 2,
                    -st / 2
                  ],
                  [
                    R / 2,
                    st / 2
                  ],
                  [
                    -R / 2,
                    st / 2
                  ]
                ], ro = [];
                for (let kt = 0; kt < 4; kt++) {
                  const [Ct, a] = vo[kt], [k, p] = vo[(kt + 1) % 4];
                  ro.push(new j(G + Ct, F + a, A), new j(G + k, F + p, A)), ro.push(new j(G + Ct, F + a, qt), new j(G + k, F + p, qt)), ro.push(new j(G + Ct, F + a, A), new j(G + Ct, F + a, qt));
                }
                const yo = new ho().setFromPoints(ro);
                H.push(new Co(yo, Mt));
              }
              (t.mostrarLabelsZapatas ?? 1) >= 0.5 && H.push(oo(`${E.tipo[0].toUpperCase()} ${R.toFixed(2)}\xD7${st.toFixed(2)}\xD7${Gt.toFixed(2)}m \u03C3/q=${E.ratio.toFixed(2)}`, G, F, qt - 0.2, eo <= 1 ? "#4ade80" : eo <= 1.5 ? "#f59e0b" : "#ef4444"));
            }
            if (Math.round(t.sistemaCimentacion ?? 0) === 1) {
              const E = Math.round(t.vigaAmarre_pos ?? 0), R = E === 0 ? -r : -r / 2, st = t.vigaAmarre_b ?? 0.25, Gt = t.vigaAmarre_h ?? 0.4, Zt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map();
              for (const F of i) {
                const A = F.y.toFixed(4), Nt = F.x.toFixed(4);
                Zt.has(A) || Zt.set(A, []), jt.has(Nt) || jt.set(Nt, []), Zt.get(A).push(F), jt.get(Nt).push(F);
              }
              const G = [];
              for (const F of Zt.values()) {
                F.sort((A, Nt) => A.x - Nt.x);
                for (let A = 0; A < F.length - 1; A++) G.push(new j(F[A].x, F[A].y, R)), G.push(new j(F[A + 1].x, F[A + 1].y, R));
              }
              for (const F of jt.values()) {
                F.sort((A, Nt) => A.y - Nt.y);
                for (let A = 0; A < F.length - 1; A++) G.push(new j(F[A].x, F[A].y, R)), G.push(new j(F[A + 1].x, F[A + 1].y, R));
              }
              G.length > 0 && (H.push(new Co(new ho().setFromPoints(G), new Kt({
                color: 2282478,
                linewidth: 3
              }))), H.push(oo(`Vigas amarre ${(st * 100).toFixed(0)}\xD7${(Gt * 100).toFixed(0)} cm @ ${E === 0 ? "zapatas" : "pedestales"}`, s / 2, h / 2, R + 0.2, "#22d3ee")));
            }
            Xo.push(...H);
          }
        }
      } catch (o) {
        console.warn("[Zapatas 3D]", o);
      }
      if ((t.modoCimentacion ?? 0) >= 0.5) try {
        const i = (_b = e.deformOutputs.rawVal) == null ? void 0 : _b.reactions;
        if (i && i.size > 0) {
          const s = [];
          let h = 0, c = 0;
          if (i.forEach((_, r) => {
            const l = y[r];
            !l || Math.abs(l[2]) > 1e-6 || (s.push({
              idx: r,
              x: l[0],
              y: l[1],
              P_kN: Math.abs(_[2]),
              Mx_kN: _[3],
              My_kN: _[4]
            }), l[0] > h && (h = l[0]), l[1] > c && (c = l[1]));
          }), s.length > 0) {
            const _ = t.q_adm_zapata ?? 10, r = t.ks_zapata ?? 1030, l = Math.max(0, t.Hf_pedestal ?? 0.5), w = Math.max(0.1, t.t_zapata ?? 0.3), n = Math.max(2, Math.round(t.nSubZapata ?? 4)), f = Math.max(0, t.voladoExtra ?? 0.3), Z = Math.round(t.tipoZapataOverride ?? 0) | 0, Y = Ho(s, h, c, _, r), rt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const a of Y) Z > 0 && (a.tipo = rt[Z - 1]), a.t = w;
            const H = Ro[0] ?? t.colSize, bt = Zo[0] ?? t.colSize, Mt = H * bt, St = H * bt ** 3 / 12, Ot = bt * H ** 3 / 12, _o = 0.14 * Math.pow(Math.min(H, bt), 4), ce = t.matCol < 0.5 ? D : K, re = t.matCol < 0.5 ? at : ut, le = t.matCol < 0.5 ? X : J, E = [], R = [], st = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), $o = [], xt = [], Ut = (a, k, p) => `${Math.round(a * 1e4)},${Math.round(k * 1e4)},${Math.round(p * 1e4)}`, Qt = /* @__PURE__ */ new Map(), no = (a, k, p) => {
              const P = Ut(a, k, p), T = Qt.get(P);
              if (T !== void 0) return T;
              const nt = E.length;
              return E.push([
                a,
                k,
                p
              ]), Qt.set(P, nt), nt;
            }, de = new Kt({
              color: 0,
              linewidth: 2
            }), fe = new Kt({
              color: 1118481,
              linewidth: 2
            });
            for (const a of Y) {
              const k = a.Lz, p = a.Bz, P = a.t;
              let T = 0, nt = 0;
              a.tipo === "esquinera" ? (T = a.x < h / 2 ? -(k / 2 - f) : k / 2 - f, nt = a.y < c / 2 ? -(p / 2 - f) : p / 2 - f) : a.tipo === "lindero" && (Math.abs(a.x) < 1e-3 || Math.abs(a.x - h) < 1e-3 ? T = a.x < h / 2 ? -(k / 2 - f) : k / 2 - f : (Math.abs(a.y) < 1e-3 || Math.abs(a.y - c) < 1e-3) && (nt = a.y < c / 2 ? -(p / 2 - f) : p / 2 - f));
              const Bt = a.x - T, Et = a.y - nt, Wt = -l, Tt = k / n, to = p / n, lt = [];
              for (let q = 0; q <= n; q++) {
                const tt = [];
                for (let ft = 0; ft <= n; ft++) {
                  const Yt = Bt - k / 2 + ft * Tt, wt = Et - p / 2 + q * to;
                  tt.push(no(Yt, wt, Wt));
                }
                lt.push(tt);
              }
              for (let q = 0; q < n; q++) for (let tt = 0; tt < n; tt++) {
                const ft = R.length;
                R.push([
                  lt[q][tt],
                  lt[q][tt + 1],
                  lt[q + 1][tt + 1],
                  lt[q + 1][tt]
                ]), qt.set(ft, P), st.set(ft, D), Nt.set(ft, X), Gt.set(ft, at), A.set(ft, mo);
              }
              const ao = 0.5;
              for (let q = 0; q <= n; q++) for (let tt = 0; tt <= n; tt++) {
                const ft = Tt * to * (tt === 0 || tt === n ? 0.5 : 1) * (q === 0 || q === n ? 0.5 : 1), Yt = r * ft, wt = Yt * ao, O = lt[q][tt];
                $o.push({
                  node: O,
                  dof: 0,
                  k: wt
                }), $o.push({
                  node: O,
                  dof: 1,
                  k: wt
                }), $o.push({
                  node: O,
                  dof: 2,
                  k: Yt
                }), $o.push({
                  node: O,
                  dof: 5,
                  k: Yt * 0.1
                });
              }
              const Dt = lt[0][0];
              eo.set(Dt, [
                false,
                false,
                false,
                true,
                true,
                true
              ]);
              let C = 0, V = 0, v = 1 / 0;
              for (let q = 0; q <= n; q++) for (let tt = 0; tt <= n; tt++) {
                const ft = lt[q][tt], Yt = E[ft][0], wt = E[ft][1], O = Math.sqrt((Yt - a.x) ** 2 + (wt - a.y) ** 2);
                O < v && (v = O, C = q, V = tt);
              }
              const Ht = lt[C][V], Lt = s.find((q) => q.idx === a.idx);
              so.set(Ht, [
                0,
                0,
                -Lt.P_kN,
                Lt.Mx_kN,
                Lt.My_kN,
                0
              ]);
              const io = a.ratio;
              let bo = 4906624;
              if (io > 1.5 ? bo = 15680580 : io > 1 ? bo = 16096779 : io > 0.8 && (bo = 16498468), l > 1e-3) {
                const q = new ho().setFromPoints([
                  new j(a.x, a.y, 0),
                  new j(a.x, a.y, -l)
                ]);
                xt.push(new Me(q, new Kt({
                  color: 6333946,
                  linewidth: 4
                }))), xt.push(oo(`Df=${l.toFixed(2)}m`, a.x + 0.1, a.y + 0.1, -l / 2, "#60a5fa"));
              }
              {
                const q = new Kt({
                  color: 11184810,
                  linewidth: 1,
                  transparent: true,
                  opacity: 0.6
                }), tt = k / n, ft = p / n, Yt = [];
                for (let wt = 0; wt <= n; wt++) {
                  const O = -k / 2 + wt * tt;
                  Yt.push(new j(Bt + O, Et - p / 2, -l), new j(Bt + O, Et + p / 2, -l));
                }
                for (let wt = 0; wt <= n; wt++) {
                  const O = -p / 2 + wt * ft;
                  Yt.push(new j(Bt - k / 2, Et + O, -l), new j(Bt + k / 2, Et + O, -l));
                }
                xt.push(new Co(new ho().setFromPoints(Yt), q));
              }
              if ((t.mostrarLabelsZapatas ?? 1) >= 0.5) {
                const q = Lt.P_kN / 9.80665, tt = Lt.Mx_kN / 9.80665, ft = Lt.My_kN / 9.80665;
                xt.push(oo(`P=${q.toFixed(2)} tonf`, a.x, a.y, 0.3, "#fbbf24")), xt.push(oo(`Mx=${tt.toFixed(2)}  My=${ft.toFixed(2)} tonf\xB7m`, a.x, a.y, 0.1, "#fbbf24")), xt.push(oo(`${a.tipo[0].toUpperCase()} ${k.toFixed(2)}\xD7${p.toFixed(2)}\xD7${P.toFixed(2)}m \u03C3/q=${io.toFixed(2)}`, Bt, Et, -l - P - 0.2, io <= 1 ? "#4ade80" : io <= 1.5 ? "#f59e0b" : "#ef4444"));
              }
            }
            const Xt = Math.round(t.sistemaCimentacion ?? 0);
            if (Xt === 1) {
              const a = Math.round(t.vigaAmarre_pos ?? 0), k = t.vigaAmarre_h ?? 0.4, p = t.vigaAmarre_b ?? 0.25, P = p * k, T = p * k ** 3 / 12, nt = k * p ** 3 / 12, Bt = 0.21 * Math.pow(Math.min(p, k), 3) * Math.max(p, k), Et = /* @__PURE__ */ new Map();
              for (const C of Y) {
                let V;
                a === 0 ? V = -l : V = -l / 2;
                const v = no(C.x, C.y, V);
                if (Et.set(C.idx, v), a === 1 && l > 1e-3) {
                  const dt = no(C.x, C.y, -l / 2), Ht = no(C.x, C.y, 0), Lt = no(C.x, C.y, -l);
                }
              }
              const Wt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map();
              for (const C of s) {
                const V = C.y.toFixed(4), v = C.x.toFixed(4);
                Wt.has(V) || Wt.set(V, []), Tt.has(v) || Tt.set(v, []), Wt.get(V).push(C), Tt.get(v).push(C);
              }
              const to = (C, V) => {
                const v = R.length;
                R.push([
                  C,
                  V
                ]), st.set(v, ce), Gt.set(v, re), Nt.set(v, le), Zt.set(v, P), jt.set(v, nt), G.set(v, T), F.set(v, Bt), A.set(v, mo);
              };
              let lt = 0;
              for (const C of Wt.values()) {
                C.sort((V, v) => V.x - v.x);
                for (let V = 0; V < C.length - 1; V++) {
                  const v = Et.get(C[V].idx), dt = Et.get(C[V + 1].idx);
                  v !== void 0 && dt !== void 0 && (to(v, dt), lt++);
                }
              }
              for (const C of Tt.values()) {
                C.sort((V, v) => V.y - v.y);
                for (let V = 0; V < C.length - 1; V++) {
                  const v = Et.get(C[V].idx), dt = Et.get(C[V + 1].idx);
                  v !== void 0 && dt !== void 0 && (to(v, dt), lt++);
                }
              }
              const ao = new Kt({
                color: 2282478,
                linewidth: 3
              }), Dt = [];
              for (const C of Wt.values()) {
                const V = [
                  ...C
                ].sort((v, dt) => v.x - dt.x);
                for (let v = 0; v < V.length - 1; v++) {
                  const dt = V[v], Ht = V[v + 1], Lt = a === 0 ? -l : -l / 2;
                  Dt.push(new j(dt.x, dt.y, Lt)), Dt.push(new j(Ht.x, Ht.y, Lt));
                }
              }
              for (const C of Tt.values()) {
                const V = [
                  ...C
                ].sort((v, dt) => v.y - dt.y);
                for (let v = 0; v < V.length - 1; v++) {
                  const dt = V[v], Ht = V[v + 1], Lt = a === 0 ? -l : -l / 2;
                  Dt.push(new j(dt.x, dt.y, Lt)), Dt.push(new j(Ht.x, Ht.y, Lt));
                }
              }
              if (Dt.length > 0) {
                const C = new ho().setFromPoints(Dt);
                xt.push(new Co(C, ao));
              }
              xt.push(oo(`+${lt} vigas de amarre ${(p * 100).toFixed(0)}\xD7${(k * 100).toFixed(0)} cm @ ${a === 0 ? "zapatas" : "pedestales"}`, h / 2, c / 2, a === 1 ? -l / 2 + 0.3 : -l + 0.3, "#22d3ee")), console.log(`[Cimentaci\xF3n] Sistema 1 \u2014 ${lt} vigas de amarre ${(p * 100).toFixed(0)}\xD7${(k * 100).toFixed(0)} cm en posici\xF3n ${a === 0 ? "zapatas" : "pedestales"}`);
            } else Xt >= 2 && (console.warn(`[Cimentaci\xF3n] Sistema ${Xt} (${[
              "",
              "",
              "Vigas T invertida",
              "Vigas rect. + zapata corrida",
              "Losa de cimentaci\xF3n"
            ][Xt]}) a\xFAn no implementado completamente. Mostrando zapatas aisladas. Pr\xF3ximamente: malla shell continua + frames T-invertida.`), xt.push(oo(`Sistema ${Xt} (TODO) \u2014 usando zapatas aisladas`, h / 2, c / 2, 1.5, "#fbbf24")));
            const So = Math.round(t.sistemaCimentacion ?? 0), vo = 0.3, ro = Math.round(t.vigaAmarre_pos ?? 0), yo = /* @__PURE__ */ new Map();
            if (So === 1) {
              const a = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
              for (const P of s) {
                const T = P.y.toFixed(4), nt = P.x.toFixed(4);
                a.has(T) || a.set(T, []), k.has(nt) || k.set(nt, []), a.get(T).push(P), k.get(nt).push(P);
              }
              const p = (P) => yo.set(P, (yo.get(P) ?? 0) + 1);
              for (const P of a.values()) {
                P.sort((T, nt) => T.x - nt.x);
                for (let T = 0; T < P.length - 1; T++) p(P[T].idx), p(P[T + 1].idx);
              }
              for (const P of k.values()) {
                P.sort((T, nt) => T.y - nt.y);
                for (let T = 0; T < P.length - 1; T++) p(P[T].idx), p(P[T + 1].idx);
              }
              console.log(`[Cimentaci\xF3n] Vigas de amarre activas \u2014 momentos en zapatas reducidos por factor (1 - ${vo} \xB7 n_vigas/4):`), yo.forEach((P, T) => {
                const nt = (vo * P / 4 * 100).toFixed(0);
                console.log(`   Zapata ${T}: ${P} vigas conectadas \u2192 momento reducido ${nt}%`);
              }), ro === 0 && console.log("   \u21B3 vigaAmarre_pos=0 (mismo nivel zapata) \u2192 en F2K se exportar\xE1 como cimentaci\xF3n corrida con ks\xB7b\xB7dL distribuido por nodo");
            }
            const kt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
            for (const a of Y) {
              const k = s.find((O) => O.idx === a.idx), p = a.Lz, P = a.Bz, T = a.t;
              let nt = 0, Bt = 0;
              a.tipo === "esquinera" ? (nt = a.x < h / 2 ? -(p / 2 - f) : p / 2 - f, Bt = a.y < c / 2 ? -(P / 2 - f) : P / 2 - f) : a.tipo === "lindero" && (Math.abs(a.x) < 1e-3 || Math.abs(a.x - h) < 1e-3 ? nt = a.x < h / 2 ? -(p / 2 - f) : p / 2 - f : (Math.abs(a.y) < 1e-3 || Math.abs(a.y - c) < 1e-3) && (Bt = a.y < c / 2 ? -(P / 2 - f) : P / 2 - f));
              const Et = a.x - nt, Wt = a.y - Bt, Tt = [], to = [], lt = {
                elasticities: /* @__PURE__ */ new Map(),
                shearModuli: /* @__PURE__ */ new Map(),
                poissonsRatios: /* @__PURE__ */ new Map(),
                thicknesses: /* @__PURE__ */ new Map(),
                densities: /* @__PURE__ */ new Map()
              }, ao = p / n, Dt = P / n, C = [], V = [];
              for (let O = 0; O <= n; O++) {
                const et = [];
                for (let ht = 0; ht <= n; ht++) {
                  const Vt = -p / 2 + ht * ao, Ft = -P / 2 + O * Dt;
                  et.push(Tt.length), Tt.push([
                    Vt,
                    Ft,
                    0
                  ]);
                  const To = Et + Vt, Do = Wt + Ft, Yo = Ut(To, Do, -l), lo = Qt.get(Yo);
                  lo !== void 0 ? V.push(lo) : V.push(-1);
                }
                C.push(et);
              }
              for (let O = 0; O < n; O++) for (let et = 0; et < n; et++) {
                const ht = to.length;
                to.push([
                  C[O][et],
                  C[O][et + 1],
                  C[O + 1][et + 1],
                  C[O + 1][et]
                ]), lt.thicknesses.set(ht, T), lt.elasticities.set(ht, D), lt.poissonsRatios.set(ht, X), lt.shearModuli.set(ht, at), lt.densities.set(ht, mo);
              }
              const v = [], dt = 0.5;
              for (let O = 0; O <= n; O++) for (let et = 0; et <= n; et++) {
                const ht = ao * Dt * (et === 0 || et === n ? 0.5 : 1) * (O === 0 || O === n ? 0.5 : 1), Vt = r * ht, Ft = C[O][et];
                v.push({
                  node: Ft,
                  dof: 0,
                  k: Vt * dt
                }), v.push({
                  node: Ft,
                  dof: 1,
                  k: Vt * dt
                }), v.push({
                  node: Ft,
                  dof: 2,
                  k: Vt
                });
              }
              if (So === 1 && ro === 0) {
                const O = t.vigaAmarre_b ?? 0.25, et = a.idx, ht = s.filter((pt) => Math.abs(pt.y - a.y) < 1e-3 && pt.idx !== et).sort((pt, ko) => pt.x - ko.x), Vt = s.filter((pt) => Math.abs(pt.x - a.x) < 1e-3 && pt.idx !== et).sort((pt, ko) => pt.y - ko.y), Ft = ht.find((pt) => pt.x > a.x), To = [
                  ...ht
                ].reverse().find((pt) => pt.x < a.x), Do = Vt.find((pt) => pt.y > a.y), Yo = [
                  ...Vt
                ].reverse().find((pt) => pt.y < a.y), lo = (pt, ko) => {
                  const he = ko / 2;
                  for (let co = 0; co <= n; co++) {
                    const Re = co === 0 || co === n ? he / (2 * n) : he / n, me = r * O * Re, ue = me * dt;
                    let fo;
                    switch (pt) {
                      case "x+":
                        fo = C[co][n];
                        break;
                      case "x-":
                        fo = C[co][0];
                        break;
                      case "y+":
                        fo = C[n][co];
                        break;
                      case "y-":
                        fo = C[0][co];
                        break;
                    }
                    v.push({
                      node: fo,
                      dof: 0,
                      k: ue
                    }), v.push({
                      node: fo,
                      dof: 1,
                      k: ue
                    }), v.push({
                      node: fo,
                      dof: 2,
                      k: me
                    });
                  }
                };
                Ft && lo("x+", Ft.x - a.x), To && lo("x-", a.x - To.x), Do && lo("y+", Do.y - a.y), Yo && lo("y-", a.y - Yo.y);
              }
              const Ht = r * ao * Dt * 1e-4;
              v.push({
                node: C[0][0],
                dof: 3,
                k: Ht
              }), v.push({
                node: C[0][0],
                dof: 4,
                k: Ht
              }), v.push({
                node: C[0][0],
                dof: 5,
                k: Ht
              });
              const Lt = -nt, io = -Bt;
              let bo = 0, Go = 0, q = 1 / 0;
              for (let O = 0; O <= n; O++) for (let et = 0; et <= n; et++) {
                const ht = -p / 2 + et * ao, Vt = -P / 2 + O * Dt, Ft = (ht - Lt) ** 2 + (Vt - io) ** 2;
                Ft < q && (q = Ft, bo = O, Go = et);
              }
              const tt = C[bo][Go], ft = /* @__PURE__ */ new Map(), Yt = yo.get(a.idx) ?? 0, wt = So === 1 ? Math.max(0.4, 1 - vo * Yt / 4) : 1;
              ft.set(tt, [
                0,
                0,
                -k.P_kN,
                k.Mx_kN * wt,
                k.My_kN * wt,
                0
              ]);
              try {
                const et = ge(Tt, to, {
                  supports: /* @__PURE__ */ new Map(),
                  loads: ft
                }, lt, v).deformations;
                for (let ht = 0; ht < Tt.length; ht++) {
                  const Vt = V[ht];
                  if (Vt >= 0) {
                    const Ft = et.get(ht);
                    Ft && kt.set(Vt, [
                      ...Ft
                    ]);
                  }
                }
              } catch (O) {
                console.warn(`[Zapata ${a.idx}] solver fall\xF3:`, O);
              }
            }
            for (let a = 0; a < R.length; a++) {
              const k = R[a];
              if (k.length !== 4) continue;
              const p = [];
              for (const P of k) {
                const T = kt.get(P);
                p.push(r * (T ? T[2] : 0) / 9.80665);
              }
              Ct.set(a, p);
            }
            e.nodes.val = E, e.elements.val = R, e.nodeInputs.val = {
              supports: eo,
              loads: so
            }, e.elementInputs.val = {
              elasticities: st,
              shearModuli: Gt,
              areas: Zt,
              momentsOfInertiaY: jt,
              momentsOfInertiaZ: G,
              torsionalConstants: F,
              densities: A,
              poissonsRatios: Nt,
              thicknesses: qt
            }, e.deformOutputs.val = {
              deformations: kt,
              reactions: /* @__PURE__ */ new Map()
            }, e.analyzeOutputs.val = {
              pressure: Ct,
              colorMapRanges: {
                pressure: [
                  -_,
                  0
                ]
              }
            }, e.objects3D.val = xt, console.log(`[Modo Cimentaci\xF3n] ${s.length} zapatas + pedestales (Hf=${l} m, t=${w} m, q_adm=${_} tonf/m\xB2, ks=${r} kN/m\xB3) \u2014 reemplaza superestructura`);
            try {
              const a = () => {
                var _a2;
                const p = (_a2 = document.querySelector("#viewer")) == null ? void 0 : _a2.__settings;
                p && (p.shellResults && (p.shellResults.val = "pressure"), p.deformedShape && (p.deformedShape.val = false), p.deformScale && (p.deformScale.val = 5), p.frameResults && (p.frameResults.val = "none"), p.custom3D && (p.custom3D.val = true));
              };
              [
                0,
                100,
                300
              ].forEach((k) => setTimeout(a, k));
            } catch {
            }
            return;
          }
        }
      } catch (o) {
        console.warn("[Modo Cimentaci\xF3n] error:", o);
      }
      e.objects3D.val = Xo;
    },
    runModal(t, e, N) {
      var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const x = e.nodes.val, L = e.elements.val, g = e.nodeInputs.val, b = e.elementInputs.val;
      if (!(!x.length || !L.length || !((_a = g.supports) == null ? void 0 : _a.size) || !((_b = b.densities) == null ? void 0 : _b.size))) try {
        const I = [], D = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
        let it = 0, M = 0;
        const d = [];
        let m = 0;
        for (let $ = 0; $ < L.length; $++) {
          const W = L[$];
          let It = false, $t = false;
          if (W.length === 4) {
            const Pt = W.map((Rt) => x[Rt][2]);
            if (Math.max(...Pt) - Math.min(...Pt) < 0.02) {
              const Rt = x[W[0]][0], uo = x[W[0]][1], go = x[W[2]][0], Jt = x[W[2]][1], Lo = Math.abs((go - Rt) * (Jt - uo)), Fo = ((_c = b.thicknesses) == null ? void 0 : _c.get($)) ?? 0.15, wo = ((_d = b.densities) == null ? void 0 : _d.get($)) ?? 24;
              it += wo * Lo * Fo, It = true;
            }
          } else if (W.length === 2) {
            const Pt = x[W[0]][2], yt = x[W[1]][2], Rt = Math.sqrt((x[W[1]][0] - x[W[0]][0]) ** 2 + (x[W[1]][1] - x[W[0]][1]) ** 2);
            if (Math.abs(yt - Pt) > Rt) {
              $t = true;
              const uo = Math.abs(yt - Pt), go = ((_e2 = b.areas) == null ? void 0 : _e2.get($)) ?? 0, Jt = ((_f = b.densities) == null ? void 0 : _f.get($)) ?? 24;
              M += Jt * go * uo;
            }
          }
          It || (I.push(W), ((_g = b.areas) == null ? void 0 : _g.has($)) && D.set(m, b.areas.get($)), ((_h = b.momentsOfInertiaY) == null ? void 0 : _h.has($)) && K.set(m, b.momentsOfInertiaY.get($)), ((_i = b.momentsOfInertiaZ) == null ? void 0 : _i.has($)) && X.set(m, b.momentsOfInertiaZ.get($)), ((_j = b.torsionalConstants) == null ? void 0 : _j.has($)) && J.set(m, b.torsionalConstants.get($)), ((_k = b.elasticities) == null ? void 0 : _k.has($)) && at.set(m, b.elasticities.get($)), ((_l = b.shearModuli) == null ? void 0 : _l.has($)) && ut.set(m, b.shearModuli.get($)), ((_m = b.densities) == null ? void 0 : _m.has($)) && U.set(m, b.densities.get($)), ((_n = b.thicknesses) == null ? void 0 : _n.has($)) && gt.set(m, b.thicknesses.get($)), ((_o = b.poissonsRatios) == null ? void 0 : _o.has($)) && Q.set(m, b.poissonsRatios.get($)), $t && d.push(m), m++);
        }
        if (it > 0 && M > 0 && d.length > 0) {
          const $ = 1 + it / M;
          for (const W of d) {
            const It = U.get(W) ?? 24;
            U.set(W, It * $);
          }
        }
        const ct = {
          areas: D,
          momentsOfInertiaY: K,
          momentsOfInertiaZ: X,
          torsionalConstants: J,
          elasticities: at,
          shearModuli: ut,
          densities: U,
          thicknesses: gt,
          poissonsRatios: Q
        }, _t = Math.round(t.nPisos), S = Math.min(60, Math.max(15, 3 * _t + 6)), y = je(x, I, g, ct, S), B = Math.round(t.nVanosX), z = Math.round(t.nVanosY), mt = Math.round(t.nPisos), vt = M > 0 ? 1 + it / M : 1;
        N.render(y, {
          title: `Edificio ${B}\xD7${z} vanos \xD7 ${mt} pisos \xB7 ${S} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${vt.toFixed(2)} dens cols, ${it.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}${(t.murosMode ?? 0) > 0 ? " + Muros Q4" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const zt = y.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${S} modos \xB7 f\u2081=${zt.toFixed(4)} Hz \xB7 m_slab=${it.toFixed(0)} m_cols=${M.toFixed(0)} factor=${vt.toFixed(2)}`);
      } catch (I) {
        console.warn("Modal edificio error:", I.message);
      }
    }
  };
});
export {
  __tla,
  ms as e,
  hs as f
};
