import { a as Be } from "./analyze-BFwM3Jvn.js";
import { m as Te, d as he, __tla as __tla_0 } from "./didacticCpp-DG5VoQAQ.js";
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
    const N = Ge(e), M = t / N;
    let k = Math.max(2, Math.round(M));
    return t / k > N * 1.25 && (k = Math.ceil(M)), {
      n: k,
      dx: t / k
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
    const M = N.tol ?? 1e-5, k = 0, h = [], b = [], I = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, Y = 1e8, X = 1e4, j = 1e4, K = 2 * j, it = Y / (2 * (1 + 0.3));
    for (const gt of e) {
      const J = [];
      let pt = 0, U = 0;
      for (let m = 0; m < t.length; m++) Math.abs(t[m][2] - gt) < M && (J.push(m), pt += t[m][0], U += t[m][1]);
      if (J.length < 2) continue;
      const at = pt / J.length, _ = U / J.length, l = t.length + h.length;
      h.push({
        idx: l,
        z: gt,
        x: at,
        y: _
      });
      for (const m of J) {
        const ct = t[m][0] - at, vt = t[m][1] - _;
        if (Math.hypot(ct, vt) < M) {
          console.info(`[diafragma] z = ${gt}: el nudo ${m} cae sobre el master (${at.toFixed(3)}, ${_.toFixed(3)}): sin link, un elemento de longitud cero no ata nada.`);
          continue;
        }
        b.push([
          l,
          m
        ]);
        const z = k + b.length - 1;
        I.areas.set(z, X), I.momentsOfInertiaY.set(z, j), I.momentsOfInertiaZ.set(z, j), I.torsionalConstants.set(z, K), I.elasticities.set(z, Y), I.shearModuli.set(z, it), I.densities.set(z, 0);
      }
    }
    return N.linkStiffness, {
      masterNodes: h,
      rigidLinks: b,
      linkProps: I
    };
  }
  function Je(t, e, N) {
    const M = (k, h) => {
      k.forEach((b, I) => h.set(I + N, b));
    };
    e.areas = e.areas ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaY = e.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaZ = e.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), e.torsionalConstants = e.torsionalConstants ?? /* @__PURE__ */ new Map(), e.elasticities = e.elasticities ?? /* @__PURE__ */ new Map(), e.shearModuli = e.shearModuli ?? /* @__PURE__ */ new Map(), e.densities = e.densities ?? /* @__PURE__ */ new Map(), M(t.linkProps.areas, e.areas), M(t.linkProps.momentsOfInertiaY, e.momentsOfInertiaY), M(t.linkProps.momentsOfInertiaZ, e.momentsOfInertiaZ), M(t.linkProps.torsionalConstants, e.torsionalConstants), M(t.linkProps.elasticities, e.elasticities), M(t.linkProps.shearModuli, e.shearModuli), M(t.linkProps.densities, e.densities);
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
    const k = Math.sqrt(12 * e / t) / 2;
    return e / k * N;
  }
  function Qe(t, e, N, M, k, h, b, I = {}) {
    var _a, _b;
    const Y = I.Fy_steel ?? 345e3;
    I.fc_concrete;
    const X = I.Fy_rebar ?? 42e4, j = I.omega ?? 0.15, K = I.phi ?? 0.9, it = k < 0.5 ? K * j * X * (1 - 0.59 * j) : K * Y, gt = h < 0.5 ? K * j * X * (1 - 0.59 * j) : K * Y, J = N.frameBendingMoments, pt = [];
    for (let U = 0; U < e.length; U++) {
      const at = e[U];
      if (at.length !== 2) continue;
      const [_, l] = at, m = b.has(U);
      let ct = 0, vt = 0;
      const z = J == null ? void 0 : J.get(U);
      z && (ct = z.Mi, vt = z.Mj);
      const y = ((_a = M.areas) == null ? void 0 : _a.get(U)) ?? 0.16, B = ((_b = M.momentsOfInertiaZ) == null ? void 0 : _b.get(U)) ?? 213e-5, ut = Ue(y, B, m ? it : gt), yt = ct / ut, wt = vt / ut;
      pt.push({
        nodeIdx: _,
        elementIdx: U,
        end: "i",
        classification: ge(yt)
      }), pt.push({
        nodeIdx: l,
        elementIdx: U,
        end: "j",
        classification: ge(wt)
      });
    }
    return pt;
  }
  function We(t, e, N, M = {}) {
    const k = M.showElastic ?? false, h = (M.radiusFactor ?? 0.02) * N, b = [], I = new Ye(h, 12, 8);
    for (const Y of t) {
      if (!k && Y.classification.state === "Elastic") continue;
      const X = e[Y.nodeIdx];
      if (!X) continue;
      const j = new qe({
        color: Y.classification.color,
        transparent: true,
        opacity: 0.85
      }), K = new Bo(I, j);
      K.position.set(X[0], X[1], X[2]), K.userData = {
        hingeState: Y.classification.state,
        ratio: Y.classification.ratio.toFixed(3),
        element: Y.elementIdx,
        end: Y.end
      }, b.push(K);
    }
    return b;
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
  function Me(t, e, N, M, k = 0.01) {
    const h = Math.abs(t) < k, b = Math.abs(t - N) < k, I = Math.abs(e) < k, Y = Math.abs(e - M) < k, X = [
      h,
      b,
      I,
      Y
    ].filter(Boolean).length;
    return X >= 2 ? "esquinera" : X === 1 ? "lindero" : "central";
  }
  function xe(t) {
    const { P_kN: e, Mx_kN: N, My_kN: M, tipo: k, q_adm_tonf: h, ks: b } = t, I = t.Lz_min ?? 1, Y = t.Lz_max ?? 4, X = t.t_min ?? 0.3;
    if (e <= 0) return {
      tipo: k,
      Lz: I,
      Bz: I,
      t: X,
      A: I ** 2,
      ex: 0,
      ey: 0,
      sigmaMax_tonf: 0,
      sigmaMin_tonf: 0,
      ratio: 0,
      fueraKern: false,
      status: "UPLIFT"
    };
    const j = h * Xo, K = Math.abs(M / e), it = Math.abs(N / e), gt = j * 0.95;
    let J = Math.max(I, Math.sqrt(e / j)), pt = J, U = 1 / 0, at = 0, _ = false;
    for (let y = 0; y < 50 && J <= Y; y++) {
      const B = k === "esquinera" ? 0.3 : k === "lindero" ? 0.2 : 0, w = J + B, ut = pt + B, yt = w * ut, wt = Math.max(K, it), O = wt === K ? w : ut;
      if (_ = wt > O / 6, !_) U = e / yt * (1 + 6 * wt / O), at = e / yt * (1 - 6 * wt / O);
      else {
        const Q = 1.5 * O - 3 * wt, rt = wt === K ? ut : w;
        U = 2 * e / (rt * Math.max(Q, 0.01)), at = 0;
      }
      if (U <= gt) break;
      J += 0.05, pt += 0.05;
    }
    const l = J * pt, m = Math.max(X, J / 6), ct = U / j, vt = ct <= 1 ? "OK" : "OVERSTRESS";
    let z;
    return b && b > 0 && (z = U / b * 1e3), {
      tipo: k,
      Lz: J,
      Bz: pt,
      t: m,
      A: l,
      ex: K,
      ey: it,
      sigmaMax_tonf: U / Xo,
      sigmaMin_tonf: at / Xo,
      ratio: ct,
      delta_mm: z,
      fueraKern: _,
      status: vt
    };
  }
  function To(t, e, N, M, k) {
    return t.map((h) => {
      const b = Me(h.x, h.y, e, N);
      return {
        ...xe({
          P_kN: h.P_kN,
          Mx_kN: h.Mx_kN,
          My_kN: h.My_kN,
          tipo: b,
          q_adm_tonf: M,
          ks: k
        }),
        idx: h.idx,
        x: h.x,
        y: h.y
      };
    });
  }
  let Ko, uo, pe, u, ot;
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
  u = (t, e, N, M, k, h) => ({
    default: N,
    min: M,
    max: k,
    step: h,
    label: e,
    folder: t
  });
  ot = (t, e, N, M) => ({
    default: N,
    label: e,
    folder: t,
    options: M
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
      slabType: ot("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: ot("Avanzado", "Discretizaci\xF3n losa", 0.5, Xe),
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
      const e = {}, N = Math.round(t.nPisos ?? 3), M = Math.round(t.nVanosX ?? 2), k = Math.round(t.nVanosY ?? 2);
      for (let h = 1; h <= N; h++) e[`hP_${h}`] = u("Alturas por piso", `h Piso ${h} (m)`, 0, 0, 6, 0.1), e[`colB_p${h}`] = u("Secciones por piso", `b col P${h} (m)`, 0, 0, 1, 0.05), e[`colH_p${h}`] = u("Secciones por piso", `h col P${h} (m)`, 0, 0, 1, 0.05), e[`vigaB_p${h}`] = u("Secciones por piso", `b viga P${h} (m)`, 0, 0, 0.8, 0.05), e[`vigaH_p${h}`] = u("Secciones por piso", `h viga P${h} (m)`, 0, 0, 1, 0.05);
      for (let h = 1; h <= M; h++) e[`svX_${h}`] = u("Luces por vano", `svX #${h} (m)`, 0, 0, 12, 0.5);
      for (let h = 1; h <= k; h++) e[`svY_${h}`] = u("Luces por vano", `svY #${h} (m)`, 0, 0, 12, 0.5);
      return e;
    },
    computedLabels(t, e) {
      var _a;
      const M = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions, k = e.nodes.rawVal;
      if (!M || !(k == null ? void 0 : k.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let h = 0, b = 0, I = 0, Y = -1, X = 0, j = -1;
      const K = [];
      let it = 0, gt = 0;
      M.forEach((ct, vt) => {
        const z = k[vt];
        if (!z || Math.abs(z[2]) > 1e-6) return;
        const y = ct[2], B = ct[3], w = ct[4];
        Math.abs(y) > Math.abs(h) && (h = y, Y = vt, z[0], z[1]), y > 0 && y > Math.abs(X) && (X = y, j = vt), Math.abs(B) > Math.abs(b) && (b = B), Math.abs(w) > Math.abs(I) && (I = w), K.push({
          idx: vt,
          x: z[0],
          y: z[1],
          P_kN: Math.abs(y),
          Mx_kN: B,
          My_kN: w
        }), z[0] > it && (it = z[0]), z[1] > gt && (gt = z[1]);
      });
      const J = Math.abs(h) / 9.80665, pt = Math.abs(b) / 9.80665, U = Math.abs(I) / 9.80665, at = X / 9.80665, _ = Math.round(t.nPisos), l = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${J.toFixed(2)} tonf (nodo ${Y})`,
        Mx: `${pt.toFixed(2)} tonf\xB7m`,
        My: `${U.toFixed(2)} tonf\xB7m`
      };
      if (at > 0.01 && (l["\u26A0 Uplift"] = `${at.toFixed(2)} tonf (nodo ${j})`), l.Pisos = `${_}`, l["Copiar a \u2192 zapata-aislada"] = `P=${J.toFixed(1)}, Mx=${pt.toFixed(1)}, My=${U.toFixed(1)}`, K.length > 0 && it > 0 && gt > 0) {
        const ct = t.q_adm_zapata ?? 10, vt = t.ks_zapata ?? 1030;
        try {
          const z = To(K, it, gt, ct, vt);
          let y = 0, B = 0, w = 0, ut = 0, yt = -1, wt = "", O = 0, Q = 0;
          for (const zt of z) zt.tipo === "esquinera" ? y++ : zt.tipo === "lindero" ? B++ : w++, zt.sigmaMax_tonf > ut && (ut = zt.sigmaMax_tonf, yt = zt.idx, wt = zt.tipo), zt.status === "OK" && O++, zt.Lz > Q && (Q = zt.Lz);
          l["\u2500\u2500 Cimentaci\xF3n (auto) \u2500\u2500"] = "", l["Tipos zapata"] = `${y} esquineras, ${B} linderas, ${w} centrales`, l["\u03C3_max global"] = `${ut.toFixed(2)} tonf/m\xB2 (nodo ${yt}, ${wt})`, l["\u03C3/q_adm"] = `${(ut / ct).toFixed(2)}` + (ut / ct <= 1 ? " \u2713" : " \u26A0"), l["Lz m\xE1x zapata"] = `${Q.toFixed(2)} m`, l.Cumplen = `${O}/${z.length}` + (O === z.length ? " \u2713" : " \u26A0");
          const rt = t.Hf_pedestal ?? 0.5, so = t.t_zapata ?? 0.3, qt = Math.round(t.nSubZapata ?? 4);
          l["Df col enterrada"] = `${rt.toFixed(2)} m` + (rt < 1e-3 ? " (sin pedestal)" : ""), l["t zapata"] = `${so.toFixed(2)} m`, l["Subdiv. Q4"] = `${qt}\xD7${qt}`, l["Volado extra"] = `${(t.voladoExtra ?? 0.3).toFixed(2)} m`;
        } catch {
          l["\u2500\u2500 Cimentaci\xF3n \u2500\u2500"] = "module load error";
        }
      }
      const m = e.__plasticHinges;
      if (m) {
        const ct = (m.B ?? 0) + (m.IO ?? 0) + (m.LS ?? 0) + (m.CP ?? 0);
        l["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", l["\u{1F7E2} El\xE1stico"] = `${m.Elastic ?? 0}`, l["\u{1F7E1} B \u2014 Yield"] = `${m.B ?? 0}`, l["\u{1F7E0} IO \u2014 Immed.Occ."] = `${m.IO ?? 0}`, l["\u{1F534} LS \u2014 Life Safety"] = `${m.LS ?? 0}`, l["\u26AB CP \u2014 Collapse Prev."] = `${m.CP ?? 0}`, l["Total r\xF3tulas formadas"] = `${ct}`;
      }
      return l;
    },
    build(t, e) {
      var _a, _b;
      const N = Math.round(t.nVanosX), M = Math.round(t.nVanosY), k = Math.round(t.nPisos), h = Math.max(1, Math.round(t.nSubViga)), b = Math.max(1, Math.round(t.nSubCol)), I = t.fcConcr * 0.0981, Y = 4700 * Math.sqrt(I) * 1e3, X = 2e8, j = 0.2, K = 0.3, it = Y / (2 * (1 + j)), gt = X / (2 * (1 + K)), J = (o, a, n) => Array.from({
        length: a
      }, (f, i) => {
        const g = t[`${o}${i + 1}`];
        return typeof g == "number" && g > 0 ? g : n;
      }), pt = J("svX_", N, t.spanX), U = J("svY_", M, t.spanY), at = J("hP_", k, t.hPiso), _ = [];
      t.Lvix > 0 && _.push(-t.Lvix), _.push(0);
      for (let o = 0; o < N; o++) _.push(_[_.length - 1] + pt[o]);
      t.Lvdx > 0 && _.push(_[_.length - 1] + t.Lvdx);
      const l = [];
      t.Lviy > 0 && l.push(-t.Lviy), l.push(0);
      for (let o = 0; o < M; o++) l.push(l[l.length - 1] + U[o]);
      t.Lvdy > 0 && l.push(l[l.length - 1] + t.Lvdy);
      const m = [
        0
      ];
      for (let o = 0; o < k; o++) m.push(m[m.length - 1] + at[o]);
      const ct = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === _.length - 1, vt = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === l.length - 1, z = (o, a) => ct(o) || vt(a), y = [], B = {};
      for (let o = 0; o < m.length; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < _.length; n++) o === 0 && z(n, a) || (B[`${n},${a},${o}`] = y.length, y.push([
        _[n],
        l[a],
        m[o]
      ]));
      const w = [], ut = /* @__PURE__ */ new Set(), yt = /* @__PURE__ */ new Set(), wt = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Map(), Q = (o, a, n, f, i) => {
        if (n <= 1) {
          f.add(w.length), O.set(w.length, i), w.push([
            o,
            a
          ]);
          return;
        }
        const g = y[o], r = y[a];
        let d = o;
        for (let F = 1; F < n; F++) {
          const c = F / n, C = y.length;
          y.push([
            g[0] + (r[0] - g[0]) * c,
            g[1] + (r[1] - g[1]) * c,
            g[2] + (r[2] - g[2]) * c
          ]), f.add(w.length), O.set(w.length, i), w.push([
            d,
            C
          ]), d = C;
        }
        f.add(w.length), O.set(w.length, i), w.push([
          d,
          a
        ]);
      };
      for (let o = 0; o < m.length - 1; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < _.length; n++) z(n, a) || Q(B[`${n},${a},${o}`], B[`${n},${a},${o + 1}`], b, ut, o);
      for (let o = 1; o < m.length; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < _.length - 1; n++) Q(B[`${n},${a},${o}`], B[`${n + 1},${a},${o}`], h, yt, o - 1);
      for (let o = 1; o < m.length; o++) for (let a = 0; a < _.length; a++) for (let n = 0; n < l.length - 1; n++) Q(B[`${a},${n},${o}`], B[`${a},${n + 1},${o}`], h, yt, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), a = (i) => {
          const g = y[i];
          for (let r = w.length - 1; r >= 0; r--) {
            const d = w[r];
            if (d.length !== 2) continue;
            const [F, c] = d;
            if (F === i || c === i) continue;
            const C = y[F], R = y[c], lt = [
              R[0] - C[0],
              R[1] - C[1],
              R[2] - C[2]
            ], $t = [
              g[0] - C[0],
              g[1] - C[1],
              g[2] - C[2]
            ], q = lt[0] ** 2 + lt[1] ** 2 + lt[2] ** 2;
            if (q < 1e-12) continue;
            const et = ($t[0] * lt[0] + $t[1] * lt[1] + $t[2] * lt[2]) / q;
            if (et < 1e-6 || et > 1 - 1e-6 || Math.hypot($t[0] - et * lt[0], $t[1] - et * lt[1], $t[2] - et * lt[2]) > 1e-6) continue;
            w[r] = [
              F,
              i
            ];
            const Ht = w.length;
            w.push([
              i,
              c
            ]), yt.has(r) && yt.add(Ht), ut.has(r) && ut.add(Ht);
          }
        }, n = (i, g, r) => {
          for (let F = 0; F < y.length; F++) if (Math.abs(y[F][0] - i) < 1e-6 && Math.abs(y[F][1] - g) < 1e-6 && Math.abs(y[F][2] - r) < 1e-6) return F;
          const d = y.length;
          return y.push([
            i,
            g,
            r
          ]), a(d), d;
        }, f = t.vSecDir < 0.5 ? "x" : "y";
        for (let i = 1; i < m.length; i++) if (f === "x") for (let g = 0; g < l.length - 1; g++) {
          const r = l[g], d = l[g + 1];
          for (let F = 1; F <= o; F++) {
            const c = r + F / (o + 1) * (d - r), C = [];
            for (let R = 0; R < _.length; R++) C.push(n(_[R], c, m[i]));
            for (let R = 0; R < _.length - 1; R++) yt.add(w.length), w.push([
              C[R],
              C[R + 1]
            ]);
          }
        }
        else for (let g = 0; g < _.length - 1; g++) {
          const r = _[g], d = _[g + 1];
          for (let F = 1; F <= o; F++) {
            const c = r + F / (o + 1) * (d - r), C = [];
            for (let R = 0; R < l.length; R++) C.push(n(c, l[R], m[i]));
            for (let R = 0; R < l.length - 1; R++) yt.add(w.length), w.push([
              C[R],
              C[R + 1]
            ]);
          }
        }
      }
      const rt = Math.round(t.bracesMode);
      if (rt > 0) {
        const o = rt === 1 || rt === 2 || rt === 3, a = rt === 1 || rt === 2 || rt === 4, n = m.length - 1;
        for (let f = 0; f < n; f++) {
          if (o) for (let i = 0; i < l.length; i++) {
            if (rt === 1 && i !== 0 && i !== l.length - 1) continue;
            const g = Math.floor((_.length - 1) / 2);
            for (let r = 0; r < _.length - 1; r++) {
              if (rt === 1 && r !== g || z(r, i) || z(r + 1, i)) continue;
              const d = B[`${r},${i},${f}`], F = B[`${r + 1},${i},${f + 1}`], c = B[`${r + 1},${i},${f}`], C = B[`${r},${i},${f + 1}`];
              d !== void 0 && F !== void 0 && w.push([
                d,
                F
              ]), c !== void 0 && C !== void 0 && w.push([
                c,
                C
              ]);
            }
          }
          if (a) for (let i = 0; i < _.length; i++) {
            if (rt === 1 && i !== 0 && i !== _.length - 1) continue;
            const g = Math.floor((l.length - 1) / 2);
            for (let r = 0; r < l.length - 1; r++) {
              if (rt === 1 && r !== g || z(i, r) || z(i, r + 1)) continue;
              const d = B[`${i},${r},${f}`], F = B[`${i},${r + 1},${f + 1}`], c = B[`${i},${r + 1},${f}`], C = B[`${i},${r},${f + 1}`];
              d !== void 0 && F !== void 0 && w.push([
                d,
                F
              ]), c !== void 0 && C !== void 0 && w.push([
                c,
                C
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), a = (f, i, g) => `${Math.round(f * 1e4)},${Math.round(i * 1e4)},${Math.round(g * 1e4)}`;
        for (let f = 0; f < y.length; f++) o.set(a(y[f][0], y[f][1], y[f][2]), f);
        const n = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let f = 1; f < m.length; f++) {
          const i = m[f];
          for (let g = 0; g < _.length - 1; g++) for (let r = 0; r < l.length - 1; r++) {
            const d = _[g], F = _[g + 1], c = l[r], C = l[r + 1], { n: R } = ue(Math.abs(F - d), n), { n: lt } = ue(Math.abs(C - c), n), $t = [];
            for (let q = 0; q <= lt; q++) {
              const et = [];
              for (let Ht = 0; Ht <= R; Ht++) {
                const yo = d + Ht / R * (F - d), Vo = c + q / lt * (C - c), Eo = a(yo, Vo, i), bo = o.get(Eo);
                if (bo !== void 0) et.push(bo);
                else {
                  const Co = y.length;
                  y.push([
                    yo,
                    Vo,
                    i
                  ]), o.set(Eo, Co), et.push(Co);
                }
              }
              $t.push(et);
            }
            for (let q = 0; q < lt; q++) for (let et = 0; et < R; et++) wt.add(w.length), w.push([
              $t[q][et],
              $t[q][et + 1],
              $t[q + 1][et + 1],
              $t[q + 1][et]
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
      ], zt = /* @__PURE__ */ new Map();
      for (let o = 0; o < l.length; o++) for (let a = 0; a < _.length; a++) z(a, o) || zt.set(B[`${a},${o},0`], [
        ...qt
      ]);
      const Mt = Math.round(t.loadCase ?? 0), go = Mt === 1 ? [
        1,
        1,
        0,
        0
      ] : Mt === 2 ? [
        1,
        0,
        0,
        0
      ] : Mt === 3 ? [
        0,
        1,
        0,
        0
      ] : Mt === 4 ? [
        0,
        0,
        1,
        0
      ] : Mt === 5 ? [
        0,
        0,
        0,
        1
      ] : Mt === 6 ? [
        0,
        0,
        1,
        1
      ] : Mt === 7 ? [
        1.2,
        1.6,
        0,
        0
      ] : Mt === 8 ? [
        1.2,
        1,
        1,
        0
      ] : Mt === 9 ? [
        1.2,
        1,
        0,
        1
      ] : Mt === 10 ? [
        1.2,
        1,
        -1,
        0
      ] : Mt === 11 ? [
        1.2,
        1,
        0,
        -1
      ] : Mt === 12 ? [
        0.9,
        0,
        1,
        0
      ] : Mt === 13 ? [
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
      if (Jo !== 0) for (let o = 1; o < m.length; o++) for (let a = 0; a < l.length; a++) for (let n = 0; n < _.length; n++) {
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
        const o = B[`${_.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${k}`];
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
      }, Ce = t.matCol < 0.5 ? Y : X, we = t.matCol < 0.5 ? it : gt, ze = t.matCol < 0.5 ? j : K, $e = t.matCol < 0.5 ? uo : pe, Se = t.matViga < 0.5 ? Y : X, ke = t.matViga < 0.5 ? it : gt, Oe = t.matViga < 0.5 ? j : K, Fe = t.matViga < 0.5 ? uo : pe, xo = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), ko = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map(), Lo = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), ee = Math.round(t.slabType), Le = ee === 2 ? 0 : 1, Pe = ee === 1 ? 0 : 1, Po = t.crackedSections > 0.5, se = t.matCol < 0.5 && Po ? 0.7 : 1, ne = t.matViga < 0.5 && Po ? 0.35 : 1, Ve = Po ? 0.25 : 1, Ee = 1, Ro = t.massSource > 0.5, Ie = t.qDead + 0.25 * t.qLive, Ae = Ro ? Ie / Ko / Math.max(t.slabT, 0.05) : uo;
      for (let o = 0; o < w.length; o++) {
        const a = O.get(o) ?? 0;
        if (wt.has(o)) xo.set(o, Y), _o.set(o, it), Lo.set(o, j), Wo.set(o, t.slabT), te.set(o, Le * Ee), oe.set(o, Pe * Ve), vo.set(o, Ae);
        else if (ut.has(o)) {
          const n = ye(Math.min(a, 7));
          xo.set(o, Ce), _o.set(o, we), Lo.set(o, ze), So.set(o, n.A), ko.set(o, n.Iz * se), Oo.set(o, n.Iy * se), Fo.set(o, n.J), vo.set(o, Ro ? 0 : $e);
        } else {
          const n = be(Math.min(a, 7));
          xo.set(o, Se), _o.set(o, ke), Lo.set(o, Oe), So.set(o, n.A), ko.set(o, n.Iz * ne), Oo.set(o, n.Iy * ne), Fo.set(o, n.J), vo.set(o, Ro ? 0 : Fe);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let i = 1; i < m.length; i++) o.push(m[i]);
        const a = Ke(y, o), n = w.length;
        for (const i of a.masterNodes) y.push([
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
          torsionalConstants: Fo,
          densities: vo
        }, n);
      }
      e.nodes.val = y, e.elements.val = w, e.nodeInputs.val = {
        supports: zt,
        loads: ro
      }, e.elementInputs.val = {
        elasticities: xo,
        shearModuli: _o,
        areas: So,
        momentsOfInertiaY: ko,
        momentsOfInertiaZ: Oo,
        torsionalConstants: Fo,
        densities: vo,
        poissonsRatios: Lo,
        thicknesses: Wo,
        membraneModifiers: te,
        bendingModifiers: oe
      };
      const ae = he(y, w, e.nodeInputs.val, e.elementInputs.val);
      e.deformOutputs.val = ae, e.analyzeOutputs.val = Be(y, w, e.elementInputs.val, ae);
      const Zo = De(_, l, m);
      try {
        const o = Qe(y, w, e.analyzeOutputs.rawVal, e.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), ut);
        let a = 1 / 0, n = 1 / 0, f = 1 / 0, i = -1 / 0, g = -1 / 0, r = -1 / 0;
        for (const c of y) c[0] < a && (a = c[0]), c[0] > i && (i = c[0]), c[1] < n && (n = c[1]), c[1] > g && (g = c[1]), c[2] < f && (f = c[2]), c[2] > r && (r = c[2]);
        const d = Math.sqrt((i - a) ** 2 + (g - n) ** 2 + (r - f) ** 2) || 1, F = We(o, y, d, {
          showElastic: false,
          radiusFactor: 0.015
        });
        Zo.push(...F), e.__plasticHinges = ts(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      if ((t.mostrarZapatas ?? 1) >= 0.5) try {
        const o = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions;
        if (o) {
          const a = [];
          let n = 0, f = 0;
          if (o.forEach((i, g) => {
            const r = y[g];
            !r || Math.abs(r[2]) > 1e-6 || (a.push({
              idx: g,
              x: r[0],
              y: r[1],
              P_kN: Math.abs(i[2]),
              Mx_kN: i[3],
              My_kN: i[4]
            }), r[0] > n && (n = r[0]), r[1] > f && (f = r[1]));
          }), a.length > 0) {
            const i = t.q_adm_zapata ?? 10, g = t.ks_zapata ?? 1030, r = Math.max(0, t.Hf_pedestal ?? 0.5), d = Math.max(0.1, t.t_zapata ?? 0.3), F = Math.max(2, Math.round(t.nSubZapata ?? 4)), c = Math.max(0, t.voladoExtra ?? 0.3), C = Math.round(t.tipoZapataOverride ?? 0) | 0, R = Math.round(t.estiloZapata ?? 1), lt = To(a, n, f, i, g), $t = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const V of lt) C > 0 && (V.tipo = $t[C - 1]), V.t = d;
            const q = [], et = (V) => new Go({
              color: V,
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
            for (const V of lt) {
              const H = V.Lz, st = V.Bz, Rt = V.t;
              let Tt = 0, Dt = 0;
              V.tipo === "esquinera" ? (Tt = V.x < n / 2 ? -(H / 2 - c) : H / 2 - c, Dt = V.y < f / 2 ? -(st / 2 - c) : st / 2 - c) : V.tipo === "lindero" && (Math.abs(V.x) < 1e-3 || Math.abs(V.x - n) < 1e-3 ? Tt = V.x < n / 2 ? -(H / 2 - c) : H / 2 - c : (Math.abs(V.y) < 1e-3 || Math.abs(V.y - f) < 1e-3) && (Dt = V.y < f / 2 ? -(st / 2 - c) : st / 2 - c));
              const G = V.x - Tt, L = V.y - Dt, A = -r, Pt = A - Rt / 2, Nt = A - Rt, Ut = V.ratio;
              let Qt = 4906624;
              if (Ut > 1.5 ? Qt = 15680580 : Ut > 1 ? Qt = 16096779 : Ut > 0.8 && (Qt = 16498468), r > 1e-3) {
                const _t = new co().setFromPoints([
                  new Z(V.x, V.y, 0),
                  new Z(V.x, V.y, -r)
                ]);
                q.push(new me(_t, new Zt({
                  color: 6333946,
                  linewidth: 4
                }))), q.push(Jt(`Df=${r.toFixed(2)}m`, V.x + 0.1, V.y + 0.1, -r / 2, "#60a5fa"));
              }
              if (R === 0) {
                const _t = new He(H, st, Rt), jt = new Bo(_t, et(Qt));
                jt.position.set(G, L, Pt), q.push(jt);
                const Gt = new mo(new Re(_t), Ht);
                Gt.position.copy(jt.position), q.push(Gt);
              } else {
                const _t = new Ze(H, st), jt = new Go({
                  color: Qt,
                  transparent: true,
                  opacity: 0.45,
                  roughness: 0.6,
                  side: je
                }), Gt = new Bo(_t, jt);
                Gt.position.set(G, L, A), q.push(Gt);
                const Wt = new Bo(_t.clone(), jt.clone());
                Wt.position.set(G, L, Nt), q.push(Wt);
                const ce = H / F, re = st / F, Yt = [];
                for (let St = 0; St <= F; St++) {
                  const bt = -H / 2 + St * ce;
                  Yt.push(new Z(G + bt, L - st / 2, A), new Z(G + bt, L + st / 2, A)), Yt.push(new Z(G + bt, L - st / 2, Nt), new Z(G + bt, L + st / 2, Nt));
                }
                for (let St = 0; St <= F; St++) {
                  const bt = -st / 2 + St * re;
                  Yt.push(new Z(G - H / 2, L + bt, A), new Z(G + H / 2, L + bt, A)), Yt.push(new Z(G - H / 2, L + bt, Nt), new Z(G + H / 2, L + bt, Nt));
                }
                const zo = new co().setFromPoints(Yt);
                q.push(new mo(zo, yo));
                const lo = [
                  [
                    -H / 2,
                    -st / 2
                  ],
                  [
                    H / 2,
                    -st / 2
                  ],
                  [
                    H / 2,
                    st / 2
                  ],
                  [
                    -H / 2,
                    st / 2
                  ]
                ], no = [];
                for (let St = 0; St < 4; St++) {
                  const [bt, s] = lo[St], [$, p] = lo[(St + 1) % 4];
                  no.push(new Z(G + bt, L + s, A), new Z(G + $, L + p, A)), no.push(new Z(G + bt, L + s, Nt), new Z(G + $, L + p, Nt)), no.push(new Z(G + bt, L + s, A), new Z(G + bt, L + s, Nt));
                }
                const fo = new co().setFromPoints(no);
                q.push(new mo(fo, Ht));
              }
              (t.mostrarLabelsZapatas ?? 1) >= 0.5 && q.push(Jt(`${V.tipo[0].toUpperCase()} ${H.toFixed(2)}\xD7${st.toFixed(2)}\xD7${Rt.toFixed(2)}m \u03C3/q=${V.ratio.toFixed(2)}`, G, L, Nt - 0.2, Ut <= 1 ? "#4ade80" : Ut <= 1.5 ? "#f59e0b" : "#ef4444"));
            }
            if (Math.round(t.sistemaCimentacion ?? 0) === 1) {
              const V = Math.round(t.vigaAmarre_pos ?? 0), H = V === 0 ? -r : -r / 2, st = t.vigaAmarre_b ?? 0.25, Rt = t.vigaAmarre_h ?? 0.4, Tt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map();
              for (const L of a) {
                const A = L.y.toFixed(4), Pt = L.x.toFixed(4);
                Tt.has(A) || Tt.set(A, []), Dt.has(Pt) || Dt.set(Pt, []), Tt.get(A).push(L), Dt.get(Pt).push(L);
              }
              const G = [];
              for (const L of Tt.values()) {
                L.sort((A, Pt) => A.x - Pt.x);
                for (let A = 0; A < L.length - 1; A++) G.push(new Z(L[A].x, L[A].y, H)), G.push(new Z(L[A + 1].x, L[A + 1].y, H));
              }
              for (const L of Dt.values()) {
                L.sort((A, Pt) => A.y - Pt.y);
                for (let A = 0; A < L.length - 1; A++) G.push(new Z(L[A].x, L[A].y, H)), G.push(new Z(L[A + 1].x, L[A + 1].y, H));
              }
              G.length > 0 && (q.push(new mo(new co().setFromPoints(G), new Zt({
                color: 2282478,
                linewidth: 3
              }))), q.push(Jt(`Vigas amarre ${(st * 100).toFixed(0)}\xD7${(Rt * 100).toFixed(0)} cm @ ${V === 0 ? "zapatas" : "pedestales"}`, n / 2, f / 2, H + 0.2, "#22d3ee")));
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
          if (a.forEach((g, r) => {
            const d = y[r];
            !d || Math.abs(d[2]) > 1e-6 || (n.push({
              idx: r,
              x: d[0],
              y: d[1],
              P_kN: Math.abs(g[2]),
              Mx_kN: g[3],
              My_kN: g[4]
            }), d[0] > f && (f = d[0]), d[1] > i && (i = d[1]));
          }), n.length > 0) {
            const g = t.q_adm_zapata ?? 10, r = t.ks_zapata ?? 1030, d = Math.max(0, t.Hf_pedestal ?? 0.5), F = Math.max(0.1, t.t_zapata ?? 0.3), c = Math.max(2, Math.round(t.nSubZapata ?? 4)), C = Math.max(0, t.voladoExtra ?? 0.3), R = Math.round(t.tipoZapataOverride ?? 0) | 0, lt = To(n, f, i, g, r), $t = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const s of lt) R > 0 && (s.tipo = $t[R - 1]), s.t = F;
            const q = qo[0] ?? t.colSize, et = Ho[0] ?? t.colSize, Ht = q * et, yo = q * et ** 3 / 12, Vo = et * q ** 3 / 12, Eo = 0.14 * Math.pow(Math.min(q, et), 4), bo = t.matCol < 0.5 ? Y : X, Co = t.matCol < 0.5 ? it : gt, ie = t.matCol < 0.5 ? j : K, V = [], H = [], st = /* @__PURE__ */ new Map(), Rt = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), Dt = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), Pt = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), Qt = /* @__PURE__ */ new Map(), wo = [], _t = [], jt = (s, $, p) => `${Math.round(s * 1e4)},${Math.round($ * 1e4)},${Math.round(p * 1e4)}`, Gt = /* @__PURE__ */ new Map(), Wt = (s, $, p) => {
              const P = jt(s, $, p), T = Gt.get(P);
              if (T !== void 0) return T;
              const nt = V.length;
              return V.push([
                s,
                $,
                p
              ]), Gt.set(P, nt), nt;
            }, ce = new Zt({
              color: 0,
              linewidth: 2
            }), re = new Zt({
              color: 1118481,
              linewidth: 2
            });
            for (const s of lt) {
              const $ = s.Lz, p = s.Bz, P = s.t;
              let T = 0, nt = 0;
              s.tipo === "esquinera" ? (T = s.x < f / 2 ? -($ / 2 - C) : $ / 2 - C, nt = s.y < i / 2 ? -(p / 2 - C) : p / 2 - C) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - f) < 1e-3 ? T = s.x < f / 2 ? -($ / 2 - C) : $ / 2 - C : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - i) < 1e-3) && (nt = s.y < i / 2 ? -(p / 2 - C) : p / 2 - C));
              const Vt = s.x - T, Ft = s.y - nt, Xt = -d, Et = $ / c, Kt = p / c, dt = [];
              for (let D = 0; D <= c; D++) {
                const W = [];
                for (let ht = 0; ht <= c; ht++) {
                  const At = Vt - $ / 2 + ht * Et, Ct = Ft - p / 2 + D * Kt;
                  W.push(Wt(At, Ct, Xt));
                }
                dt.push(W);
              }
              for (let D = 0; D < c; D++) for (let W = 0; W < c; W++) {
                const ht = H.length;
                H.push([
                  dt[D][W],
                  dt[D][W + 1],
                  dt[D + 1][W + 1],
                  dt[D + 1][W]
                ]), Nt.set(ht, P), st.set(ht, Y), Pt.set(ht, j), Rt.set(ht, it), A.set(ht, uo);
              }
              const to = 0.5;
              for (let D = 0; D <= c; D++) for (let W = 0; W <= c; W++) {
                const ht = Et * Kt * (W === 0 || W === c ? 0.5 : 1) * (D === 0 || D === c ? 0.5 : 1), At = r * ht, Ct = At * to, S = dt[D][W];
                wo.push({
                  node: S,
                  dof: 0,
                  k: Ct
                }), wo.push({
                  node: S,
                  dof: 1,
                  k: Ct
                }), wo.push({
                  node: S,
                  dof: 2,
                  k: At
                }), wo.push({
                  node: S,
                  dof: 5,
                  k: At * 0.1
                });
              }
              const It = dt[0][0];
              Ut.set(It, [
                false,
                false,
                false,
                true,
                true,
                true
              ]);
              let v = 0, E = 0, x = 1 / 0;
              for (let D = 0; D <= c; D++) for (let W = 0; W <= c; W++) {
                const ht = dt[D][W], At = V[ht][0], Ct = V[ht][1], S = Math.sqrt((At - s.x) ** 2 + (Ct - s.y) ** 2);
                S < x && (x = S, v = D, E = W);
              }
              const Bt = dt[v][E], kt = n.find((D) => D.idx === s.idx);
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
                }), W = $ / c, ht = p / c, At = [];
                for (let Ct = 0; Ct <= c; Ct++) {
                  const S = -$ / 2 + Ct * W;
                  At.push(new Z(Vt + S, Ft - p / 2, -d), new Z(Vt + S, Ft + p / 2, -d));
                }
                for (let Ct = 0; Ct <= c; Ct++) {
                  const S = -p / 2 + Ct * ht;
                  At.push(new Z(Vt - $ / 2, Ft + S, -d), new Z(Vt + $ / 2, Ft + S, -d));
                }
                _t.push(new mo(new co().setFromPoints(At), D));
              }
              if ((t.mostrarLabelsZapatas ?? 1) >= 0.5) {
                const D = kt.P_kN / 9.80665, W = kt.Mx_kN / 9.80665, ht = kt.My_kN / 9.80665;
                _t.push(Jt(`P=${D.toFixed(2)} tonf`, s.x, s.y, 0.3, "#fbbf24")), _t.push(Jt(`Mx=${W.toFixed(2)}  My=${ht.toFixed(2)} tonf\xB7m`, s.x, s.y, 0.1, "#fbbf24")), _t.push(Jt(`${s.tipo[0].toUpperCase()} ${$.toFixed(2)}\xD7${p.toFixed(2)}\xD7${P.toFixed(2)}m \u03C3/q=${oo.toFixed(2)}`, Vt, Ft, -d - P - 0.2, oo <= 1 ? "#4ade80" : oo <= 1.5 ? "#f59e0b" : "#ef4444"));
              }
            }
            const Yt = Math.round(t.sistemaCimentacion ?? 0);
            if (Yt === 1) {
              const s = Math.round(t.vigaAmarre_pos ?? 0), $ = t.vigaAmarre_h ?? 0.4, p = t.vigaAmarre_b ?? 0.25, P = p * $, T = p * $ ** 3 / 12, nt = $ * p ** 3 / 12, Vt = 0.21 * Math.pow(Math.min(p, $), 3) * Math.max(p, $), Ft = /* @__PURE__ */ new Map();
              for (const v of lt) {
                let E;
                s === 0 ? E = -d : E = -d / 2;
                const x = Wt(v.x, v.y, E);
                if (Ft.set(v.idx, x), s === 1 && d > 1e-3) {
                  const ft = Wt(v.x, v.y, -d / 2), Bt = Wt(v.x, v.y, 0), kt = Wt(v.x, v.y, -d);
                }
              }
              const Xt = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map();
              for (const v of n) {
                const E = v.y.toFixed(4), x = v.x.toFixed(4);
                Xt.has(E) || Xt.set(E, []), Et.has(x) || Et.set(x, []), Xt.get(E).push(v), Et.get(x).push(v);
              }
              const Kt = (v, E) => {
                const x = H.length;
                H.push([
                  v,
                  E
                ]), st.set(x, bo), Rt.set(x, Co), Pt.set(x, ie), Tt.set(x, P), Dt.set(x, nt), G.set(x, T), L.set(x, Vt), A.set(x, uo);
              };
              let dt = 0;
              for (const v of Xt.values()) {
                v.sort((E, x) => E.x - x.x);
                for (let E = 0; E < v.length - 1; E++) {
                  const x = Ft.get(v[E].idx), ft = Ft.get(v[E + 1].idx);
                  x !== void 0 && ft !== void 0 && (Kt(x, ft), dt++);
                }
              }
              for (const v of Et.values()) {
                v.sort((E, x) => E.y - x.y);
                for (let E = 0; E < v.length - 1; E++) {
                  const x = Ft.get(v[E].idx), ft = Ft.get(v[E + 1].idx);
                  x !== void 0 && ft !== void 0 && (Kt(x, ft), dt++);
                }
              }
              const to = new Zt({
                color: 2282478,
                linewidth: 3
              }), It = [];
              for (const v of Xt.values()) {
                const E = [
                  ...v
                ].sort((x, ft) => x.x - ft.x);
                for (let x = 0; x < E.length - 1; x++) {
                  const ft = E[x], Bt = E[x + 1], kt = s === 0 ? -d : -d / 2;
                  It.push(new Z(ft.x, ft.y, kt)), It.push(new Z(Bt.x, Bt.y, kt));
                }
              }
              for (const v of Et.values()) {
                const E = [
                  ...v
                ].sort((x, ft) => x.y - ft.y);
                for (let x = 0; x < E.length - 1; x++) {
                  const ft = E[x], Bt = E[x + 1], kt = s === 0 ? -d : -d / 2;
                  It.push(new Z(ft.x, ft.y, kt)), It.push(new Z(Bt.x, Bt.y, kt));
                }
              }
              if (It.length > 0) {
                const v = new co().setFromPoints(It);
                _t.push(new mo(v, to));
              }
              _t.push(Jt(`+${dt} vigas de amarre ${(p * 100).toFixed(0)}\xD7${($ * 100).toFixed(0)} cm @ ${s === 0 ? "zapatas" : "pedestales"}`, f / 2, i / 2, s === 1 ? -d / 2 + 0.3 : -d + 0.3, "#22d3ee")), console.log(`[Cimentaci\xF3n] Sistema 1 \u2014 ${dt} vigas de amarre ${(p * 100).toFixed(0)}\xD7${($ * 100).toFixed(0)} cm en posici\xF3n ${s === 0 ? "zapatas" : "pedestales"}`);
            } else Yt >= 2 && (console.warn(`[Cimentaci\xF3n] Sistema ${Yt} (${[
              "",
              "",
              "Vigas T invertida",
              "Vigas rect. + zapata corrida",
              "Losa de cimentaci\xF3n"
            ][Yt]}) a\xFAn no implementado completamente. Mostrando zapatas aisladas. Pr\xF3ximamente: malla shell continua + frames T-invertida.`), _t.push(Jt(`Sistema ${Yt} (TODO) \u2014 usando zapatas aisladas`, f / 2, i / 2, 1.5, "#fbbf24")));
            const zo = Math.round(t.sistemaCimentacion ?? 0), lo = 0.3, no = Math.round(t.vigaAmarre_pos ?? 0), fo = /* @__PURE__ */ new Map();
            if (zo === 1) {
              const s = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
              for (const P of n) {
                const T = P.y.toFixed(4), nt = P.x.toFixed(4);
                s.has(T) || s.set(T, []), $.has(nt) || $.set(nt, []), s.get(T).push(P), $.get(nt).push(P);
              }
              const p = (P) => fo.set(P, (fo.get(P) ?? 0) + 1);
              for (const P of s.values()) {
                P.sort((T, nt) => T.x - nt.x);
                for (let T = 0; T < P.length - 1; T++) p(P[T].idx), p(P[T + 1].idx);
              }
              for (const P of $.values()) {
                P.sort((T, nt) => T.y - nt.y);
                for (let T = 0; T < P.length - 1; T++) p(P[T].idx), p(P[T + 1].idx);
              }
              console.log(`[Cimentaci\xF3n] Vigas de amarre activas \u2014 momentos en zapatas reducidos por factor (1 - ${lo} \xB7 n_vigas/4):`), fo.forEach((P, T) => {
                const nt = (lo * P / 4 * 100).toFixed(0);
                console.log(`   Zapata ${T}: ${P} vigas conectadas \u2192 momento reducido ${nt}%`);
              }), no === 0 && console.log("   \u21B3 vigaAmarre_pos=0 (mismo nivel zapata) \u2192 en F2K se exportar\xE1 como cimentaci\xF3n corrida con ks\xB7b\xB7dL distribuido por nodo");
            }
            const St = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map();
            for (const s of lt) {
              const $ = n.find((S) => S.idx === s.idx), p = s.Lz, P = s.Bz, T = s.t;
              let nt = 0, Vt = 0;
              s.tipo === "esquinera" ? (nt = s.x < f / 2 ? -(p / 2 - C) : p / 2 - C, Vt = s.y < i / 2 ? -(P / 2 - C) : P / 2 - C) : s.tipo === "lindero" && (Math.abs(s.x) < 1e-3 || Math.abs(s.x - f) < 1e-3 ? nt = s.x < f / 2 ? -(p / 2 - C) : p / 2 - C : (Math.abs(s.y) < 1e-3 || Math.abs(s.y - i) < 1e-3) && (Vt = s.y < i / 2 ? -(P / 2 - C) : P / 2 - C));
              const Ft = s.x - nt, Xt = s.y - Vt, Et = [], Kt = [], dt = {
                elasticities: /* @__PURE__ */ new Map(),
                shearModuli: /* @__PURE__ */ new Map(),
                poissonsRatios: /* @__PURE__ */ new Map(),
                thicknesses: /* @__PURE__ */ new Map(),
                densities: /* @__PURE__ */ new Map()
              }, to = p / c, It = P / c, v = [], E = [];
              for (let S = 0; S <= c; S++) {
                const tt = [];
                for (let mt = 0; mt <= c; mt++) {
                  const Lt = -p / 2 + mt * to, Ot = -P / 2 + S * It;
                  tt.push(Et.length), Et.push([
                    Lt,
                    Ot,
                    0
                  ]);
                  const Io = Ft + Lt, Ao = Xt + Ot, No = jt(Io, Ao, -d), ao = Gt.get(No);
                  ao !== void 0 ? E.push(ao) : E.push(-1);
                }
                v.push(tt);
              }
              for (let S = 0; S < c; S++) for (let tt = 0; tt < c; tt++) {
                const mt = Kt.length;
                Kt.push([
                  v[S][tt],
                  v[S][tt + 1],
                  v[S + 1][tt + 1],
                  v[S + 1][tt]
                ]), dt.thicknesses.set(mt, T), dt.elasticities.set(mt, Y), dt.poissonsRatios.set(mt, j), dt.shearModuli.set(mt, it), dt.densities.set(mt, uo);
              }
              const x = [], ft = 0.5;
              for (let S = 0; S <= c; S++) for (let tt = 0; tt <= c; tt++) {
                const mt = to * It * (tt === 0 || tt === c ? 0.5 : 1) * (S === 0 || S === c ? 0.5 : 1), Lt = r * mt, Ot = v[S][tt];
                x.push({
                  node: Ot,
                  dof: 0,
                  k: Lt * ft
                }), x.push({
                  node: Ot,
                  dof: 1,
                  k: Lt * ft
                }), x.push({
                  node: Ot,
                  dof: 2,
                  k: Lt
                });
              }
              if (zo === 1 && no === 0) {
                const S = t.vigaAmarre_b ?? 0.25, tt = s.idx, mt = n.filter((xt) => Math.abs(xt.y - s.y) < 1e-3 && xt.idx !== tt).sort((xt, $o) => xt.x - $o.x), Lt = n.filter((xt) => Math.abs(xt.x - s.x) < 1e-3 && xt.idx !== tt).sort((xt, $o) => xt.y - $o.y), Ot = mt.find((xt) => xt.x > s.x), Io = [
                  ...mt
                ].reverse().find((xt) => xt.x < s.x), Ao = Lt.find((xt) => xt.y > s.y), No = [
                  ...Lt
                ].reverse().find((xt) => xt.y < s.y), ao = (xt, $o) => {
                  const le = $o / 2;
                  for (let eo = 0; eo <= c; eo++) {
                    const Ne = eo === 0 || eo === c ? le / (2 * c) : le / c, de = r * S * Ne, fe = de * ft;
                    let io;
                    switch (xt) {
                      case "x+":
                        io = v[eo][c];
                        break;
                      case "x-":
                        io = v[eo][0];
                        break;
                      case "y+":
                        io = v[c][eo];
                        break;
                      case "y-":
                        io = v[0][eo];
                        break;
                    }
                    x.push({
                      node: io,
                      dof: 0,
                      k: fe
                    }), x.push({
                      node: io,
                      dof: 1,
                      k: fe
                    }), x.push({
                      node: io,
                      dof: 2,
                      k: de
                    });
                  }
                };
                Ot && ao("x+", Ot.x - s.x), Io && ao("x-", s.x - Io.x), Ao && ao("y+", Ao.y - s.y), No && ao("y-", s.y - No.y);
              }
              const Bt = r * to * It * 1e-4;
              x.push({
                node: v[0][0],
                dof: 3,
                k: Bt
              }), x.push({
                node: v[0][0],
                dof: 4,
                k: Bt
              }), x.push({
                node: v[0][0],
                dof: 5,
                k: Bt
              });
              const kt = -nt, oo = -Vt;
              let ho = 0, jo = 0, D = 1 / 0;
              for (let S = 0; S <= c; S++) for (let tt = 0; tt <= c; tt++) {
                const mt = -p / 2 + tt * to, Lt = -P / 2 + S * It, Ot = (mt - kt) ** 2 + (Lt - oo) ** 2;
                Ot < D && (D = Ot, ho = S, jo = tt);
              }
              const W = v[ho][jo], ht = /* @__PURE__ */ new Map(), At = fo.get(s.idx) ?? 0, Ct = zo === 1 ? Math.max(0.4, 1 - lo * At / 4) : 1;
              ht.set(W, [
                0,
                0,
                -$.P_kN,
                $.Mx_kN * Ct,
                $.My_kN * Ct,
                0
              ]);
              try {
                const tt = he(Et, Kt, {
                  supports: /* @__PURE__ */ new Map(),
                  loads: ht
                }, dt, x).deformations;
                for (let mt = 0; mt < Et.length; mt++) {
                  const Lt = E[mt];
                  if (Lt >= 0) {
                    const Ot = tt.get(mt);
                    Ot && St.set(Lt, [
                      ...Ot
                    ]);
                  }
                }
              } catch (S) {
                console.warn(`[Zapata ${s.idx}] solver fall\xF3:`, S);
              }
            }
            for (let s = 0; s < H.length; s++) {
              const $ = H[s];
              if ($.length !== 4) continue;
              const p = [];
              for (const P of $) {
                const T = St.get(P);
                p.push(r * (T ? T[2] : 0) / 9.80665);
              }
              bt.set(s, p);
            }
            e.nodes.val = V, e.elements.val = H, e.nodeInputs.val = {
              supports: Ut,
              loads: Qt
            }, e.elementInputs.val = {
              elasticities: st,
              shearModuli: Rt,
              areas: Tt,
              momentsOfInertiaY: Dt,
              momentsOfInertiaZ: G,
              torsionalConstants: L,
              densities: A,
              poissonsRatios: Pt,
              thicknesses: Nt
            }, e.deformOutputs.val = {
              deformations: St,
              reactions: /* @__PURE__ */ new Map()
            }, e.analyzeOutputs.val = {
              pressure: bt,
              colorMapRanges: {
                pressure: [
                  -g,
                  0
                ]
              }
            }, e.objects3D.val = _t, console.log(`[Modo Cimentaci\xF3n] ${n.length} zapatas + pedestales (Hf=${d} m, t=${F} m, q_adm=${g} tonf/m\xB2, ks=${r} kN/m\xB3) \u2014 reemplaza superestructura`);
            try {
              const s = () => {
                var _a2;
                const p = (_a2 = document.querySelector("#viewer")) == null ? void 0 : _a2.__settings;
                p && (p.shellResults && (p.shellResults.val = "pressure"), p.deformedShape && (p.deformedShape.val = false), p.deformScale && (p.deformScale.val = 5), p.frameResults && (p.frameResults.val = "none"), p.custom3D && (p.custom3D.val = true));
              };
              [
                0,
                100,
                300
              ].forEach(($) => setTimeout(s, $));
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
      const M = e.nodes.val, k = e.elements.val, h = e.nodeInputs.val, b = e.elementInputs.val;
      if (!(!M.length || !k.length || !((_a = h.supports) == null ? void 0 : _a.size) || !((_b = b.densities) == null ? void 0 : _b.size))) try {
        const I = [], Y = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map();
        let at = 0, _ = 0;
        const l = [];
        let m = 0;
        for (let O = 0; O < k.length; O++) {
          const Q = k[O];
          let rt = false, so = false;
          if (Q.length === 4) {
            const qt = Q.map((Mt) => M[Mt][2]);
            if (Math.max(...qt) - Math.min(...qt) < 0.02) {
              const Mt = M[Q[0]][0], go = M[Q[0]][1], po = M[Q[2]][0], Mo = M[Q[2]][1], Do = Math.abs((po - Mt) * (Mo - go)), Yo = ((_c = b.thicknesses) == null ? void 0 : _c.get(O)) ?? 0.15, ro = ((_d = b.densities) == null ? void 0 : _d.get(O)) ?? 24;
              at += ro * Do * Yo, rt = true;
            }
          } else if (Q.length === 2) {
            const qt = M[Q[0]][2], zt = M[Q[1]][2], Mt = Math.sqrt((M[Q[1]][0] - M[Q[0]][0]) ** 2 + (M[Q[1]][1] - M[Q[0]][1]) ** 2);
            if (Math.abs(zt - qt) > Mt) {
              so = true;
              const go = Math.abs(zt - qt), po = ((_e = b.areas) == null ? void 0 : _e.get(O)) ?? 0, Mo = ((_f = b.densities) == null ? void 0 : _f.get(O)) ?? 24;
              _ += Mo * po * go;
            }
          }
          rt || (I.push(Q), ((_g = b.areas) == null ? void 0 : _g.has(O)) && Y.set(m, b.areas.get(O)), ((_h = b.momentsOfInertiaY) == null ? void 0 : _h.has(O)) && X.set(m, b.momentsOfInertiaY.get(O)), ((_i = b.momentsOfInertiaZ) == null ? void 0 : _i.has(O)) && j.set(m, b.momentsOfInertiaZ.get(O)), ((_j = b.torsionalConstants) == null ? void 0 : _j.has(O)) && K.set(m, b.torsionalConstants.get(O)), ((_k = b.elasticities) == null ? void 0 : _k.has(O)) && it.set(m, b.elasticities.get(O)), ((_l = b.shearModuli) == null ? void 0 : _l.has(O)) && gt.set(m, b.shearModuli.get(O)), ((_m = b.densities) == null ? void 0 : _m.has(O)) && J.set(m, b.densities.get(O)), ((_n = b.thicknesses) == null ? void 0 : _n.has(O)) && pt.set(m, b.thicknesses.get(O)), ((_o = b.poissonsRatios) == null ? void 0 : _o.has(O)) && U.set(m, b.poissonsRatios.get(O)), so && l.push(m), m++);
        }
        if (at > 0 && _ > 0 && l.length > 0) {
          const O = 1 + at / _;
          for (const Q of l) {
            const rt = J.get(Q) ?? 24;
            J.set(Q, rt * O);
          }
        }
        const ct = {
          areas: Y,
          momentsOfInertiaY: X,
          momentsOfInertiaZ: j,
          torsionalConstants: K,
          elasticities: it,
          shearModuli: gt,
          densities: J,
          thicknesses: pt,
          poissonsRatios: U
        }, vt = Math.round(t.nPisos), z = Math.min(60, Math.max(15, 3 * vt + 6)), y = Te(M, I, h, ct, z), B = Math.round(t.nVanosX), w = Math.round(t.nVanosY), ut = Math.round(t.nPisos), yt = _ > 0 ? 1 + at / _ : 1;
        N.render(y, {
          title: `Edificio ${B}\xD7${w} vanos \xD7 ${ut} pisos \xB7 ${z} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${yt.toFixed(2)} dens cols, ${at.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const wt = y.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${z} modos \xB7 f\u2081=${wt.toFixed(4)} Hz \xB7 m_slab=${at.toFixed(0)} m_cols=${_.toFixed(0)} factor=${yt.toFixed(2)}`);
      } catch (I) {
        console.warn("Modal edificio error:", I.message);
      }
    }
  };
});
export {
  __tla,
  is as e,
  as as f
};
