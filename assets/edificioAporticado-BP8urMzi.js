import { a as Ue } from "./analyze-BFwM3Jvn.js";
import { m as Qe, d as ve, __tla as __tla_0 } from "./didacticCpp-DaEmtxPu.js";
import { a as We } from "./cadSections-DVtTZU6U.js";
import { b as ts, a as oo } from "./cotas3D-BRJLBeVj.js";
import { S as os, f as es, M as qo, e as Uo, a as Kt, B as ho, V as X, d as be, b as ss, L as Co, E as ns, I as as, D as is } from "./theme-Co6w-pfC.js";
let vs, ys;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Oo(t, s = 0.5) {
    const B = cs(s), x = t / B;
    let F = Math.max(2, Math.round(x));
    return t / F > B * 1.25 && (F = Math.ceil(x)), {
      n: F,
      dx: t / F
    };
  }
  function cs(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const rs = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function ls(t, s, B = {}) {
    const x = B.tol ?? 1e-5, F = 0, g = [], b = [], I = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, N = 1e8, G = 1e4, Z = 1e4, K = 2 * Z, at = N / (2 * (1 + 0.3));
    for (const ut of s) {
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
        const S = F + b.length - 1;
        I.areas.set(S, G), I.momentsOfInertiaY.set(S, Z), I.momentsOfInertiaZ.set(S, Z), I.torsionalConstants.set(S, K), I.elasticities.set(S, N), I.shearModuli.set(S, at), I.densities.set(S, 0);
      }
    }
    return B.linkStiffness, {
      masterNodes: g,
      rigidLinks: b,
      linkProps: I
    };
  }
  function ds(t, s, B) {
    const x = (F, g) => {
      F.forEach((b, I) => g.set(I + B, b));
    };
    s.areas = s.areas ?? /* @__PURE__ */ new Map(), s.momentsOfInertiaY = s.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), s.momentsOfInertiaZ = s.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), s.torsionalConstants = s.torsionalConstants ?? /* @__PURE__ */ new Map(), s.elasticities = s.elasticities ?? /* @__PURE__ */ new Map(), s.shearModuli = s.shearModuli ?? /* @__PURE__ */ new Map(), s.densities = s.densities ?? /* @__PURE__ */ new Map(), x(t.linkProps.areas, s.areas), x(t.linkProps.momentsOfInertiaY, s.momentsOfInertiaY), x(t.linkProps.momentsOfInertiaZ, s.momentsOfInertiaZ), x(t.linkProps.torsionalConstants, s.torsionalConstants), x(t.linkProps.elasticities, s.elasticities), x(t.linkProps.shearModuli, s.shearModuli), x(t.linkProps.densities, s.densities);
  }
  function Ce(t) {
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
  function fs(t, s, B) {
    if (t <= 0 || s <= 0) return 1e-12;
    const F = Math.sqrt(12 * s / t) / 2;
    return s / F * B;
  }
  function hs(t, s, B, x, F, g, b, I = {}) {
    var _a, _b;
    const N = I.Fy_steel ?? 345e3;
    I.fc_concrete;
    const G = I.Fy_rebar ?? 42e4, Z = I.omega ?? 0.15, K = I.phi ?? 0.9, at = F < 0.5 ? K * Z * G * (1 - 0.59 * Z) : K * N, ut = g < 0.5 ? K * Z * G * (1 - 0.59 * Z) : K * N, U = B.frameBendingMoments, gt = [];
    for (let Q = 0; Q < s.length; Q++) {
      const it = s[Q];
      if (it.length !== 2) continue;
      const [M, d] = it, m = b.has(Q);
      let ct = 0, _t = 0;
      const S = U == null ? void 0 : U.get(Q);
      S && (ct = S.Mi, _t = S.Mj);
      const v = ((_a = x.areas) == null ? void 0 : _a.get(Q)) ?? 0.16, T = ((_b = x.momentsOfInertiaZ) == null ? void 0 : _b.get(Q)) ?? 213e-5, mt = fs(v, T, m ? at : ut), yt = ct / mt, zt = _t / mt;
      gt.push({
        nodeIdx: M,
        elementIdx: Q,
        end: "i",
        classification: Ce(yt)
      }), gt.push({
        nodeIdx: d,
        elementIdx: Q,
        end: "j",
        classification: Ce(zt)
      });
    }
    return gt;
  }
  function ms(t, s, B, x = {}) {
    const F = x.showElastic ?? false, g = (x.radiusFactor ?? 0.02) * B, b = [], I = new os(g, 12, 8);
    for (const N of t) {
      if (!F && N.classification.state === "Elastic") continue;
      const G = s[N.nodeIdx];
      if (!G) continue;
      const Z = new es({
        color: N.classification.color,
        transparent: true,
        opacity: 0.85
      }), K = new qo(I, Z);
      K.position.set(G[0], G[1], G[2]), K.userData = {
        hingeState: N.classification.state,
        ratio: N.classification.ratio.toFixed(3),
        element: N.elementIdx,
        end: N.end
      }, b.push(K);
    }
    return b;
  }
  function us(t) {
    const s = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const B of t) s[B.classification.state]++;
    return s;
  }
  const Qo = 9.80665;
  function ze(t, s, B, x, F = 0.01) {
    const g = Math.abs(t) < F, b = Math.abs(t - B) < F, I = Math.abs(s) < F, N = Math.abs(s - x) < F, G = [
      g,
      b,
      I,
      N
    ].filter(Boolean).length;
    return G >= 2 ? "esquinera" : G === 1 ? "lindero" : "central";
  }
  function $e(t) {
    const { P_kN: s, Mx_kN: B, My_kN: x, tipo: F, q_adm_tonf: g, ks: b } = t, I = t.Lz_min ?? 1, N = t.Lz_max ?? 4, G = t.t_min ?? 0.3;
    if (s <= 0) return {
      tipo: F,
      Lz: I,
      Bz: I,
      t: G,
      A: I ** 2,
      ex: 0,
      ey: 0,
      sigmaMax_tonf: 0,
      sigmaMin_tonf: 0,
      ratio: 0,
      fueraKern: false,
      status: "UPLIFT"
    };
    const Z = g * Qo, K = Math.abs(x / s), at = Math.abs(B / s), ut = Z * 0.95;
    let U = Math.max(I, Math.sqrt(s / Z)), gt = U, Q = 1 / 0, it = 0, M = false;
    for (let v = 0; v < 50 && U <= N; v++) {
      const T = F === "esquinera" ? 0.3 : F === "lindero" ? 0.2 : 0, z = U + T, mt = gt + T, yt = z * mt, zt = Math.max(K, at), $ = zt === K ? z : mt;
      if (M = zt > $ / 6, !M) Q = s / yt * (1 + 6 * zt / $), it = s / yt * (1 - 6 * zt / $);
      else {
        const W = 1.5 * $ - 3 * zt, It = zt === K ? mt : z;
        Q = 2 * s / (It * Math.max(W, 0.01)), it = 0;
      }
      if (Q <= ut) break;
      U += 0.05, gt += 0.05;
    }
    const d = U * gt, m = Math.max(G, U / 6), ct = Q / Z, _t = ct <= 1 ? "OK" : "OVERSTRESS";
    let S;
    return b && b > 0 && (S = Q / b * 1e3), {
      tipo: F,
      Lz: U,
      Bz: gt,
      t: m,
      A: d,
      ex: K,
      ey: at,
      sigmaMax_tonf: Q / Qo,
      sigmaMin_tonf: it / Qo,
      ratio: ct,
      delta_mm: S,
      fueraKern: M,
      status: _t
    };
  }
  function Ho(t, s, B, x, F) {
    return t.map((g) => {
      const b = ze(g.x, g.y, s, B);
      return {
        ...$e({
          P_kN: g.P_kN,
          Mx_kN: g.Mx_kN,
          My_kN: g.My_kN,
          tipo: b,
          q_adm_tonf: x,
          ks: F
        }),
        idx: g.idx,
        x: g.x,
        y: g.y
      };
    });
  }
  let Wo, mo, we, u, tt;
  ys = Object.freeze(Object.defineProperty({
    __proto__: null,
    classifyFootingType: ze,
    designAllFootings: Ho,
    designFooting: $e
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Wo = 9.81;
  mo = 24 / Wo;
  we = 78 / Wo;
  u = (t, s, B, x, F, g) => ({
    default: B,
    min: x,
    max: F,
    step: g,
    label: s,
    folder: t
  });
  tt = (t, s, B, x) => ({
    default: B,
    label: s,
    folder: t,
    options: x
  });
  vs = {
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
      matCol: tt("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1,
        "CFT (tubo relleno)": 2
      }),
      tCft: u("Secciones (global)", "t pared CFT (m)", 0.01, 4e-3, 0.03, 1e-3),
      matViga: tt("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: tt("Secciones (global)", "Forma columna", 0, {
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
        ...tt("Vigas Secundarias", "Activar", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      vigSecDir: tt("Vigas Secundarias", "Corren en", 0, {
        "X (entre ejes Y)": 0,
        "Y (entre ejes X)": 1
      }),
      vigSecCantidad: u("Vigas Secundarias", "Cantidad/vano", 2, 1, 5, 1),
      vigSecB: u("Vigas Secundarias", "b sec (m)", 0.2, 0.1, 0.4, 0.05),
      vigSecH: u("Vigas Secundarias", "h sec (m)", 0.3, 0.2, 0.6, 0.05),
      losaActivar: {
        ...tt("Losas de Piso", "Activar losas", 0, {
          No: 0,
          S\u00ED: 1
        }),
        regenOnChange: true
      },
      losaEspesor: u("Losas de Piso", "Espesor (m)", 0.15, 0.08, 0.4, 0.01),
      losaSubdivX: u("Losas de Piso", "Subdiv. X", 2, 1, 6, 1),
      losaSubdivY: u("Losas de Piso", "Subdiv. Y", 2, 1, 6, 1),
      muroActivar: {
        ...tt("Muros de Corte", "Activar", 0, {
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
      apoyo: tt("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: u("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: u("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: u("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: u("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      loadCase: tt("Cargas", "Caso de carga", 0, {
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
      modoCimentacion: tt("Cimentaci\xF3n", "\u{1F518} Vista (toggle)", 0, {
        "\u{1F3E2} Edificio completo (ver/editar)": 0,
        "\u{1FAA8} Solo cimentaci\xF3n (P,Mx,My)": 1
      }),
      q_adm_zapata: u("Cimentaci\xF3n", "q_adm (tonf/m\xB2)", 10, 1, 100, 1),
      ks_zapata: u("Cimentaci\xF3n", "ks (kN/m\xB3)", 1030, 100, 2e5, 10),
      Hf_pedestal: u("Cimentaci\xF3n", "Df col enterrada (m) (m)", 0.5, 0, 3, 0.05),
      t_zapata: u("Cimentaci\xF3n", "t zapata (m)", 0.3, 0.1, 1.5, 0.05),
      nSubZapata: u("Cimentaci\xF3n", "Subdiv. Q4 zapata", 4, 2, 12, 1),
      voladoExtra: u("Cimentaci\xF3n", "Volado extra esq./lin (m)", 0.3, 0, 1, 0.05),
      tipoZapataOverride: tt("Cimentaci\xF3n", "Tipo (override)", 0, {
        "Auto (por posici\xF3n)": 0,
        "Todas central": 1,
        "Todas lindero": 2,
        "Todas esquinera": 3
      }),
      mostrarZapatas: tt("Cimentaci\xF3n", "Mostrar zapatas 3D", 0, {
        On: 1,
        Off: 0
      }),
      mostrarLabelsZapatas: tt("Cimentaci\xF3n", "Mostrar etiquetas zapatas", 1, {
        On: 1,
        Off: 0
      }),
      estiloZapata: tt("Cimentaci\xF3n", "Estilo render", 1, {
        "S\xF3lido (caja transl\xFAcida)": 0,
        "Shellthick (Q4 + grilla)": 1
      }),
      sistemaCimentacion: tt("Cimentaci\xF3n", "Sistema cim.", 0, {
        "Zapatas aisladas": 0,
        "Zapatas + vigas de amarre": 1,
        "Vigas T invertida (corrida)": 2,
        "Vigas rect. + zapata corrida": 3,
        "Losa de cimentaci\xF3n (raft)": 4
      }),
      vigaAmarre_pos: tt("Cimentaci\xF3n", "Viga amarre \u2014 posici\xF3n", 0, {
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
      vSecOn: tt("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: u("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: tt("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: tt("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: tt("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabForm: tt("Avanzado", "Formulaci\xF3n losa", 1, {
        "Thin (ETABS)": 1,
        Thick: 0
      }),
      slabT: u("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      murosMode: tt("Avanzado", "Muros de corte (c\xE1scara)", 0, {
        ninguno: 0,
        "en X (fachadas Y)": 1,
        "en Y (fachadas X)": 2,
        "en X e Y": 3
      }),
      tMuro: u("Avanzado", "t muro (m)", 0.25, 0.15, 0.6, 0.05),
      slabType: tt("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: tt("Avanzado", "Discretizaci\xF3n losa", 0.5, rs),
      diafragmaRigido: tt("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      }),
      massSource: tt("Avanzado", "Mass Source", 0, {
        "Self-weight (peso propio)": 0,
        "From Loads (DEAD+0.25\xB7LIVE) ETABS": 1
      }),
      qDead: u("Avanzado", "qDead losa (kN/m\xB2)", 3.5, 0.5, 10, 0.5),
      qLive: u("Avanzado", "qLive losa (kN/m\xB2)", 1.5, 0, 6, 0.5),
      crackedSections: tt("Avanzado", "Cracked Sections (ACI 318)", 0, {
        "Off (secci\xF3n bruta Ig)": 0,
        "On: 0.7\xB7Ig col / 0.35\xB7Ig viga / 0.25\xB7Ig losa": 1
      })
    },
    dynamicParams(t) {
      const s = {}, B = Math.round(t.nPisos ?? 3), x = Math.round(t.nVanosX ?? 2), F = Math.round(t.nVanosY ?? 2);
      for (let g = 1; g <= B; g++) s[`hP_${g}`] = u("Alturas por piso", `h Piso ${g} (m)`, 0, 0, 6, 0.1), s[`colB_p${g}`] = u("Secciones por piso", `b col P${g} (m)`, 0, 0, 1, 0.05), s[`colH_p${g}`] = u("Secciones por piso", `h col P${g} (m)`, 0, 0, 1, 0.05), s[`vigaB_p${g}`] = u("Secciones por piso", `b viga P${g} (m)`, 0, 0, 0.8, 0.05), s[`vigaH_p${g}`] = u("Secciones por piso", `h viga P${g} (m)`, 0, 0, 1, 0.05);
      for (let g = 1; g <= x; g++) s[`svX_${g}`] = u("Luces por vano", `svX #${g} (m)`, 0, 0, 12, 0.5);
      for (let g = 1; g <= F; g++) s[`svY_${g}`] = u("Luces por vano", `svY #${g} (m)`, 0, 0, 12, 0.5);
      return s;
    },
    computedLabels(t, s) {
      var _a;
      const x = (_a = s.deformOutputs.rawVal) == null ? void 0 : _a.reactions, F = s.nodes.rawVal;
      if (!x || !(F == null ? void 0 : F.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let g = 0, b = 0, I = 0, N = -1, G = 0, Z = -1;
      const K = [];
      let at = 0, ut = 0;
      x.forEach((ct, _t) => {
        const S = F[_t];
        if (!S || Math.abs(S[2]) > 1e-6) return;
        const v = ct[2], T = ct[3], z = ct[4];
        Math.abs(v) > Math.abs(g) && (g = v, N = _t, S[0], S[1]), v > 0 && v > Math.abs(G) && (G = v, Z = _t), Math.abs(T) > Math.abs(b) && (b = T), Math.abs(z) > Math.abs(I) && (I = z), K.push({
          idx: _t,
          x: S[0],
          y: S[1],
          P_kN: Math.abs(v),
          Mx_kN: T,
          My_kN: z
        }), S[0] > at && (at = S[0]), S[1] > ut && (ut = S[1]);
      });
      const U = Math.abs(g) / 9.80665, gt = Math.abs(b) / 9.80665, Q = Math.abs(I) / 9.80665, it = G / 9.80665, M = Math.round(t.nPisos), d = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${U.toFixed(2)} tonf (nodo ${N})`,
        Mx: `${gt.toFixed(2)} tonf\xB7m`,
        My: `${Q.toFixed(2)} tonf\xB7m`
      };
      if (it > 0.01 && (d["\u26A0 Uplift"] = `${it.toFixed(2)} tonf (nodo ${Z})`), d.Pisos = `${M}`, d["Copiar a \u2192 zapata-aislada"] = `P=${U.toFixed(1)}, Mx=${gt.toFixed(1)}, My=${Q.toFixed(1)}`, K.length > 0 && at > 0 && ut > 0) {
        const ct = t.q_adm_zapata ?? 10, _t = t.ks_zapata ?? 1030;
        try {
          const S = Ho(K, at, ut, ct, _t);
          let v = 0, T = 0, z = 0, mt = 0, yt = -1, zt = "", $ = 0, W = 0;
          for (const vt of S) vt.tipo === "esquinera" ? v++ : vt.tipo === "lindero" ? T++ : z++, vt.sigmaMax_tonf > mt && (mt = vt.sigmaMax_tonf, yt = vt.idx, zt = vt.tipo), vt.status === "OK" && $++, vt.Lz > W && (W = vt.Lz);
          d["\u2500\u2500 Cimentaci\xF3n (auto) \u2500\u2500"] = "", d["Tipos zapata"] = `${v} esquineras, ${T} linderas, ${z} centrales`, d["\u03C3_max global"] = `${mt.toFixed(2)} tonf/m\xB2 (nodo ${yt}, ${zt})`, d["\u03C3/q_adm"] = `${(mt / ct).toFixed(2)}` + (mt / ct <= 1 ? " \u2713" : " \u26A0"), d["Lz m\xE1x zapata"] = `${W.toFixed(2)} m`, d.Cumplen = `${$}/${S.length}` + ($ === S.length ? " \u2713" : " \u26A0");
          const It = t.Hf_pedestal ?? 0.5, $t = t.t_zapata ?? 0.3, Et = Math.round(t.nSubZapata ?? 4);
          d["Df col enterrada"] = `${It.toFixed(2)} m` + (It < 1e-3 ? " (sin pedestal)" : ""), d["t zapata"] = `${$t.toFixed(2)} m`, d["Subdiv. Q4"] = `${Et}\xD7${Et}`, d["Volado extra"] = `${(t.voladoExtra ?? 0.3).toFixed(2)} m`;
        } catch {
          d["\u2500\u2500 Cimentaci\xF3n \u2500\u2500"] = "module load error";
        }
      }
      const m = s.__plasticHinges;
      if (m) {
        const ct = (m.B ?? 0) + (m.IO ?? 0) + (m.LS ?? 0) + (m.CP ?? 0);
        d["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", d["\u{1F7E2} El\xE1stico"] = `${m.Elastic ?? 0}`, d["\u{1F7E1} B \u2014 Yield"] = `${m.B ?? 0}`, d["\u{1F7E0} IO \u2014 Immed.Occ."] = `${m.IO ?? 0}`, d["\u{1F534} LS \u2014 Life Safety"] = `${m.LS ?? 0}`, d["\u26AB CP \u2014 Collapse Prev."] = `${m.CP ?? 0}`, d["Total r\xF3tulas formadas"] = `${ct}`;
      }
      return d;
    },
    build(t, s) {
      var _a, _b;
      const B = Math.round(t.nVanosX), x = Math.round(t.nVanosY), F = Math.round(t.nPisos), g = Math.max(1, Math.round(t.nSubViga)), b = Math.max(1, Math.round(t.nSubCol)), I = t.fcConcr * 0.0981, N = 4700 * Math.sqrt(I) * 1e3, G = 2e8, Z = 0.2, K = 0.3, at = N / (2 * (1 + Z)), ut = G / (2 * (1 + K)), U = (o, n, e) => Array.from({
        length: n
      }, (f, c) => {
        const _ = t[`${o}${c + 1}`];
        return typeof _ == "number" && _ > 0 ? _ : e;
      }), gt = U("svX_", B, t.spanX), Q = U("svY_", x, t.spanY), it = U("hP_", F, t.hPiso), M = [];
      t.Lvix > 0 && M.push(-t.Lvix), M.push(0);
      for (let o = 0; o < B; o++) M.push(M[M.length - 1] + gt[o]);
      t.Lvdx > 0 && M.push(M[M.length - 1] + t.Lvdx);
      const d = [];
      t.Lviy > 0 && d.push(-t.Lviy), d.push(0);
      for (let o = 0; o < x; o++) d.push(d[d.length - 1] + Q[o]);
      t.Lvdy > 0 && d.push(d[d.length - 1] + t.Lvdy);
      const m = [
        0
      ];
      for (let o = 0; o < F; o++) m.push(m[m.length - 1] + it[o]);
      const ct = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === M.length - 1, _t = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === d.length - 1, S = (o, n) => ct(o) || _t(n), v = [], T = {};
      for (let o = 0; o < m.length; o++) for (let n = 0; n < d.length; n++) for (let e = 0; e < M.length; e++) o === 0 && S(e, n) || (T[`${e},${n},${o}`] = v.length, v.push([
        M[e],
        d[n],
        m[o]
      ]));
      const z = [], mt = /* @__PURE__ */ new Set(), yt = /* @__PURE__ */ new Set(), zt = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Map(), W = (o, n, e, f, c) => {
        if (e <= 1) {
          f.add(z.length), $.set(z.length, c), z.push([
            o,
            n
          ]);
          return;
        }
        const _ = v[o], r = v[n];
        let l = o;
        for (let w = 1; w < e; w++) {
          const a = w / e, h = v.length;
          v.push([
            _[0] + (r[0] - _[0]) * a,
            _[1] + (r[1] - _[1]) * a,
            _[2] + (r[2] - _[2]) * a
          ]), f.add(z.length), $.set(z.length, c), z.push([
            l,
            h
          ]), l = h;
        }
        f.add(z.length), $.set(z.length, c), z.push([
          l,
          n
        ]);
      }, It = (o) => {
        const n = v[o];
        for (let e = z.length - 1; e >= 0; e--) {
          const f = z[e];
          if (f.length !== 2) continue;
          const [c, _] = f;
          if (c === o || _ === o) continue;
          const r = v[c], l = v[_], w = [
            l[0] - r[0],
            l[1] - r[1],
            l[2] - r[2]
          ], a = [
            n[0] - r[0],
            n[1] - r[1],
            n[2] - r[2]
          ], h = w[0] ** 2 + w[1] ** 2 + w[2] ** 2;
          if (h < 1e-12) continue;
          const j = (a[0] * w[0] + a[1] * w[1] + a[2] * w[2]) / h;
          if (j < 1e-6 || j > 1 - 1e-6 || Math.hypot(a[0] - j * w[0], a[1] - j * w[1], a[2] - j * w[2]) > 1e-6) continue;
          z[e] = [
            c,
            o
          ];
          const D = z.length;
          z.push([
            o,
            _
          ]), yt.has(e) && yt.add(D), mt.has(e) && mt.add(D), $.has(e) && $.set(D, $.get(e));
        }
      };
      for (let o = 0; o < m.length - 1; o++) for (let n = 0; n < d.length; n++) for (let e = 0; e < M.length; e++) S(e, n) || W(T[`${e},${n},${o}`], T[`${e},${n},${o + 1}`], b, mt, o);
      for (let o = 1; o < m.length; o++) for (let n = 0; n < d.length; n++) for (let e = 0; e < M.length - 1; e++) W(T[`${e},${n},${o}`], T[`${e + 1},${n},${o}`], g, yt, o - 1);
      for (let o = 1; o < m.length; o++) for (let n = 0; n < M.length; n++) for (let e = 0; e < d.length - 1; e++) W(T[`${n},${e},${o}`], T[`${n},${e + 1},${o}`], g, yt, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), n = (f, c, _) => {
          for (let l = 0; l < v.length; l++) if (Math.abs(v[l][0] - f) < 1e-6 && Math.abs(v[l][1] - c) < 1e-6 && Math.abs(v[l][2] - _) < 1e-6) return l;
          const r = v.length;
          return v.push([
            f,
            c,
            _
          ]), It(r), r;
        }, e = t.vSecDir < 0.5 ? "x" : "y";
        for (let f = 1; f < m.length; f++) if (e === "x") for (let c = 0; c < d.length - 1; c++) {
          const _ = d[c], r = d[c + 1];
          for (let l = 1; l <= o; l++) {
            const w = _ + l / (o + 1) * (r - _), a = [];
            for (let h = 0; h < M.length; h++) a.push(n(M[h], w, m[f]));
            for (let h = 0; h < M.length - 1; h++) yt.add(z.length), z.push([
              a[h],
              a[h + 1]
            ]);
          }
        }
        else for (let c = 0; c < M.length - 1; c++) {
          const _ = M[c], r = M[c + 1];
          for (let l = 1; l <= o; l++) {
            const w = _ + l / (o + 1) * (r - _), a = [];
            for (let h = 0; h < d.length; h++) a.push(n(w, d[h], m[f]));
            for (let h = 0; h < d.length - 1; h++) yt.add(z.length), z.push([
              a[h],
              a[h + 1]
            ]);
          }
        }
      }
      const $t = Math.round(t.bracesMode);
      if ($t > 0) {
        const o = $t === 1 || $t === 2 || $t === 3, n = $t === 1 || $t === 2 || $t === 4, e = m.length - 1;
        for (let f = 0; f < e; f++) {
          if (o) for (let c = 0; c < d.length; c++) {
            if ($t === 1 && c !== 0 && c !== d.length - 1) continue;
            const _ = Math.floor((M.length - 1) / 2);
            for (let r = 0; r < M.length - 1; r++) {
              if ($t === 1 && r !== _ || S(r, c) || S(r + 1, c)) continue;
              const l = T[`${r},${c},${f}`], w = T[`${r + 1},${c},${f + 1}`], a = T[`${r + 1},${c},${f}`], h = T[`${r},${c},${f + 1}`];
              l !== void 0 && w !== void 0 && z.push([
                l,
                w
              ]), a !== void 0 && h !== void 0 && z.push([
                a,
                h
              ]);
            }
          }
          if (n) for (let c = 0; c < M.length; c++) {
            if ($t === 1 && c !== 0 && c !== M.length - 1) continue;
            const _ = Math.floor((d.length - 1) / 2);
            for (let r = 0; r < d.length - 1; r++) {
              if ($t === 1 && r !== _ || S(c, r) || S(c, r + 1)) continue;
              const l = T[`${c},${r},${f}`], w = T[`${c},${r + 1},${f + 1}`], a = T[`${c},${r + 1},${f}`], h = T[`${c},${r},${f + 1}`];
              l !== void 0 && w !== void 0 && z.push([
                l,
                w
              ]), a !== void 0 && h !== void 0 && z.push([
                a,
                h
              ]);
            }
          }
        }
      }
      const Et = /* @__PURE__ */ new Map(), vt = (o, n, e) => `${Math.round(o * 1e4)},${Math.round(n * 1e4)},${Math.round(e * 1e4)}`;
      for (let o = 0; o < v.length; o++) Et.set(vt(v[o][0], v[o][1], v[o][2]), o);
      const Rt = t.slabDisc > 0 ? t.slabDisc : 0.5;
      if (t.slabOn >= 0.5) for (let o = 1; o < m.length; o++) {
        const n = m[o];
        for (let e = 0; e < M.length - 1; e++) for (let f = 0; f < d.length - 1; f++) {
          const c = M[e], _ = M[e + 1], r = d[f], l = d[f + 1], { n: w } = Oo(Math.abs(_ - c), Rt), { n: a } = Oo(Math.abs(l - r), Rt), h = [];
          for (let j = 0; j <= a; j++) {
            const D = [];
            for (let rt = 0; rt <= w; rt++) {
              const H = c + rt / w * (_ - c), bt = r + j / a * (l - r), Mt = vt(H, bt, n), St = Et.get(Mt);
              if (St !== void 0) D.push(St);
              else {
                const Ot = v.length;
                v.push([
                  H,
                  bt,
                  n
                ]), Et.set(Mt, Ot), D.push(Ot), (rt === 0 || rt === w || j === 0 || j === a) && It(Ot);
              }
            }
            h.push(D);
          }
          for (let j = 0; j < a; j++) for (let D = 0; D < w; D++) zt.add(z.length), z.push([
            h[j][D],
            h[j][D + 1],
            h[j + 1][D + 1],
            h[j + 1][D]
          ]);
        }
      }
      const uo = /* @__PURE__ */ new Set(), go = [], Jt = Math.round(t.murosMode ?? 0);
      if (Jt > 0) {
        const o = Jt === 1 || Jt === 3, n = Jt === 2 || Jt === 3, e = (w, a, h) => {
          const j = vt(w, a, h), D = Et.get(j);
          if (D !== void 0) return D;
          const rt = v.length;
          return v.push([
            w,
            a,
            h
          ]), Et.set(j, rt), It(rt), rt;
        }, f = (w, a, h, j, D, rt, H, bt) => {
          const Mt = [];
          for (let St = 0; St <= bt; St++) {
            const Ot = [];
            for (let _o = 0; _o <= H; _o++) Ot.push(e(w + _o / H * (h - w), a + _o / H * (j - a), D + St / bt * (rt - D)));
            Mt.push(Ot);
          }
          for (let St = 0; St < bt; St++) for (let Ot = 0; Ot < H; Ot++) uo.add(z.length), z.push([
            Mt[St][Ot],
            Mt[St][Ot + 1],
            Mt[St + 1][Ot + 1],
            Mt[St + 1][Ot]
          ]);
          Math.abs(D) < 1e-9 && go.push(...Mt[0]);
        }, c = t.Lvix > 0 ? 1 : 0, _ = t.Lviy > 0 ? 1 : 0, r = M.length - 1 - (t.Lvdx > 0 ? 1 : 0), l = d.length - 1 - (t.Lvdy > 0 ? 1 : 0);
        for (let w = 0; w < m.length - 1; w++) {
          const a = m[w], h = m[w + 1], j = Oo(h - a, Rt).n, D = Math.ceil(j / b) * b;
          if (o && r > c) {
            const rt = M[c], H = M[c + 1], bt = Oo(H - rt, Rt).n;
            for (const Mt of /* @__PURE__ */ new Set([
              _,
              l
            ])) f(rt, d[Mt], H, d[Mt], a, h, bt, D);
          }
          if (n && l > _) {
            const rt = d[_], H = d[_ + 1], bt = Oo(H - rt, Rt).n;
            for (const Mt of /* @__PURE__ */ new Set([
              c,
              r
            ])) f(M[Mt], rt, M[Mt], H, a, h, bt, D);
          }
        }
      }
      const Fo = Math.round(t.apoyo), Lo = Fo === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : Fo === 1 ? [
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
      for (let o = 0; o < d.length; o++) for (let n = 0; n < M.length; n++) S(n, o) || wo.set(T[`${n},${o},0`], [
        ...Lo
      ]);
      for (const o of go) wo.set(o, [
        ...Lo
      ]);
      const Vt = Math.round(t.loadCase ?? 0), Se = Vt === 1 ? [
        1,
        1,
        0,
        0
      ] : Vt === 2 ? [
        1,
        0,
        0,
        0
      ] : Vt === 3 ? [
        0,
        1,
        0,
        0
      ] : Vt === 4 ? [
        0,
        0,
        1,
        0
      ] : Vt === 5 ? [
        0,
        0,
        0,
        1
      ] : Vt === 6 ? [
        0,
        0,
        1,
        1
      ] : Vt === 7 ? [
        1.2,
        1.6,
        0,
        0
      ] : Vt === 8 ? [
        1.2,
        1,
        1,
        0
      ] : Vt === 9 ? [
        1.2,
        1,
        0,
        1
      ] : Vt === 10 ? [
        1.2,
        1,
        -1,
        0
      ] : Vt === 11 ? [
        1.2,
        1,
        0,
        -1
      ] : Vt === 12 ? [
        0.9,
        0,
        1,
        0
      ] : Vt === 13 ? [
        0.9,
        0,
        0,
        1
      ] : [
        1,
        1,
        1,
        1
      ], [ke, Oe, Fe, Le] = Se, Eo = /* @__PURE__ */ new Map(), te = ke * t.CM + Oe * t.CV;
      if (te !== 0) for (let o = 1; o < m.length; o++) for (let n = 0; n < d.length; n++) for (let e = 0; e < M.length; e++) {
        const f = `${e},${n},${o}`;
        T[f] !== void 0 && Eo.set(T[f], [
          0,
          0,
          te,
          0,
          0,
          0
        ]);
      }
      const oe = Fe * t.Ex, ee = Le * t.Ey;
      if (oe !== 0 || ee !== 0) {
        const o = T[`${M.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${F}`];
        if (o !== void 0) {
          const n = Eo.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          Eo.set(o, [
            n[0] + oe,
            n[1] + ee,
            n[2],
            n[3],
            n[4],
            n[5]
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
      ].map((o) => o > 0 ? o : t.colSize), Ee = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), Ae = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), jo = Math.round(t.matCol) === 2, Pe = (o) => {
        const n = Ro[o] ?? t.colSize, e = Zo[o] ?? t.colSize;
        if (jo) {
          const f = Math.min(t.tCft, Math.min(n, e) / 2 - 1e-3), c = We(n, e, f, G, K, N, Z);
          return {
            A: c.A,
            Iz: c.Iz,
            Iy: c.Iy,
            J: c.J,
            As2: c.As2,
            As3: c.As3,
            b: n,
            h: e,
            t: f
          };
        }
        return {
          A: n * e,
          Iz: n * e ** 3 / 12,
          Iy: e * n ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(n, e), 4)
        };
      }, Ie = (o) => {
        const n = Ee[o] ?? t.vigaB, e = Ae[o] ?? t.vigaH;
        return {
          A: n * e,
          Iy: n * e ** 3 / 12,
          Iz: e * n ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(n, e), 3) * Math.max(n, e)
        };
      }, Ve = t.matCol < 0.5 ? N : G, Ne = t.matCol < 0.5 ? at : ut, Te = t.matCol < 0.5 ? Z : K, Be = t.matCol < 0.5 ? mo : we, Ye = t.matViga < 0.5 ? N : G, De = t.matViga < 0.5 ? at : ut, qe = t.matViga < 0.5 ? Z : K, He = t.matViga < 0.5 ? mo : we, Mo = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new Map(), Ao = /* @__PURE__ */ new Map(), Po = /* @__PURE__ */ new Map(), Io = /* @__PURE__ */ new Map(), Vo = /* @__PURE__ */ new Map(), xo = /* @__PURE__ */ new Map(), zo = /* @__PURE__ */ new Map(), Xo = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), le = Math.round(t.slabType), Re = le === 2 ? 0 : 1, Ze = le === 1 ? 0 : 1, No = t.crackedSections > 0.5, de = t.matCol < 0.5 && No ? 0.7 : 1, fe = t.matViga < 0.5 && No ? 0.35 : 1, je = No ? 0.25 : 1, Xe = 1, To = t.massSource > 0.5, Ge = t.qDead + 0.25 * t.qLive, Ke = To ? Ge / Wo / Math.max(t.slabT, 0.05) : mo;
      for (let o = 0; o < z.length; o++) {
        const n = $.get(o) ?? 0;
        if (zt.has(o)) Mo.set(o, N), po.set(o, at), zo.set(o, Z), Xo.set(o, t.slabT), ce.set(o, Re * Xe), re.set(o, Ze * je), ie.set(o, Math.round(t.slabForm ?? 1)), xo.set(o, Ke);
        else if (uo.has(o)) Mo.set(o, N), po.set(o, at), zo.set(o, Z), Xo.set(o, t.tMuro ?? 0.25), xo.set(o, To ? 0 : mo);
        else if (mt.has(o)) {
          const e = Pe(Math.min(n, 7));
          Mo.set(o, Ve), po.set(o, Ne), zo.set(o, Te), Ao.set(o, e.A), Po.set(o, e.Iz * de), Io.set(o, e.Iy * de), Vo.set(o, e.J), jo && (ne.set(o, e.As2), se.set(o, e.As3), ae.set(o, {
            type: "CFT",
            b: e.b,
            h: e.h,
            tw: e.t,
            tf: e.t,
            fillE: N,
            d: 0
          })), xo.set(o, To ? 0 : Be);
        } else {
          const e = Ie(Math.min(n, 7));
          Mo.set(o, Ye), po.set(o, De), zo.set(o, qe), Ao.set(o, e.A), Po.set(o, e.Iz * fe), Io.set(o, e.Iy * fe), Vo.set(o, e.J), xo.set(o, To ? 0 : He);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let c = 1; c < m.length; c++) o.push(m[c]);
        const n = ls(v, o), e = z.length;
        for (const c of n.masterNodes) v.push([
          c.x,
          c.y,
          c.z
        ]);
        for (const c of n.rigidLinks) z.push(c);
        ds(n, {
          elasticities: Mo,
          shearModuli: po,
          areas: Ao,
          momentsOfInertiaY: Po,
          momentsOfInertiaZ: Io,
          torsionalConstants: Vo,
          densities: xo
        }, e);
      }
      s.nodes.val = v, s.elements.val = z;
      const Go = /* @__PURE__ */ new Map();
      if (t.slabOn >= 0.5) for (let o = 1; o < m.length; o++) for (let n = 0; n < d.length; n++) for (let e = 0; e < M.length; e++) {
        const f = T[`${e},${n},${o}`];
        f !== void 0 && Go.set(f, o);
      }
      s.nodeInputs.val = {
        supports: wo,
        loads: Eo,
        ...Go.size ? {
          diaphragms: Go
        } : {}
      }, s.elementInputs.val = {
        elasticities: Mo,
        shearModuli: po,
        areas: Ao,
        momentsOfInertiaY: Po,
        momentsOfInertiaZ: Io,
        torsionalConstants: Vo,
        densities: xo,
        poissonsRatios: zo,
        thicknesses: Xo,
        membraneModifiers: ce,
        bendingModifiers: re,
        plateFormulations: ie,
        ...jo ? {
          shearAreasY: se,
          shearAreasZ: ne,
          sectionShapes: ae
        } : {}
      };
      const he = ve(v, z, s.nodeInputs.val, s.elementInputs.val);
      s.deformOutputs.val = he, s.analyzeOutputs.val = Ue(v, z, s.elementInputs.val, he);
      const Ko = ts(M, d, m);
      try {
        const o = hs(v, z, s.analyzeOutputs.rawVal, s.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), mt);
        let n = 1 / 0, e = 1 / 0, f = 1 / 0, c = -1 / 0, _ = -1 / 0, r = -1 / 0;
        for (const a of v) a[0] < n && (n = a[0]), a[0] > c && (c = a[0]), a[1] < e && (e = a[1]), a[1] > _ && (_ = a[1]), a[2] < f && (f = a[2]), a[2] > r && (r = a[2]);
        const l = Math.sqrt((c - n) ** 2 + (_ - e) ** 2 + (r - f) ** 2) || 1, w = ms(o, v, l, {
          showElastic: false,
          radiusFactor: 0.015
        });
        Ko.push(...w), s.__plasticHinges = us(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      if ((t.mostrarZapatas ?? 1) >= 0.5) try {
        const o = (_a = s.deformOutputs.rawVal) == null ? void 0 : _a.reactions;
        if (o) {
          const n = [];
          let e = 0, f = 0;
          if (o.forEach((c, _) => {
            const r = v[_];
            !r || Math.abs(r[2]) > 1e-6 || (n.push({
              idx: _,
              x: r[0],
              y: r[1],
              P_kN: Math.abs(c[2]),
              Mx_kN: c[3],
              My_kN: c[4]
            }), r[0] > e && (e = r[0]), r[1] > f && (f = r[1]));
          }), n.length > 0) {
            const c = t.q_adm_zapata ?? 10, _ = t.ks_zapata ?? 1030, r = Math.max(0, t.Hf_pedestal ?? 0.5), l = Math.max(0.1, t.t_zapata ?? 0.3), w = Math.max(2, Math.round(t.nSubZapata ?? 4)), a = Math.max(0, t.voladoExtra ?? 0.3), h = Math.round(t.tipoZapataOverride ?? 0) | 0, j = Math.round(t.estiloZapata ?? 1), D = Ho(n, e, f, c, _), rt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const A of D) h > 0 && (A.tipo = rt[h - 1]), A.t = l;
            const H = [], bt = (A) => new Uo({
              color: A,
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
            }), Ot = new Uo({
              color: 10265519,
              transparent: true,
              opacity: 0.75,
              roughness: 0.5
            }), _o = new Kt({
              color: 1118481,
              linewidth: 2
            }), me = Ro[0] ?? t.colSize, ue = Zo[0] ?? t.colSize;
            for (const A of D) {
              const R = A.Lz, st = A.Bz, Gt = A.t;
              let Zt = 0, jt = 0;
              A.tipo === "esquinera" ? (Zt = A.x < e / 2 ? -(R / 2 - a) : R / 2 - a, jt = A.y < f / 2 ? -(st / 2 - a) : st / 2 - a) : A.tipo === "lindero" && (Math.abs(A.x) < 1e-3 || Math.abs(A.x - e) < 1e-3 ? Zt = A.x < e / 2 ? -(R / 2 - a) : R / 2 - a : (Math.abs(A.y) < 1e-3 || Math.abs(A.y - f) < 1e-3) && (jt = A.y < f / 2 ? -(st / 2 - a) : st / 2 - a));
              const J = A.x - Zt, L = A.y - jt, V = -r, Nt = V - Gt / 2, qt = V - Gt, eo = A.ratio;
              let so = 4906624;
              if (eo > 1.5 ? so = 15680580 : eo > 1 ? so = 16096779 : eo > 0.8 && (so = 16498468), r > 1e-3) {
                const xt = new ho().setFromPoints([
                  new X(A.x, A.y, 0),
                  new X(A.x, A.y, -r)
                ]);
                H.push(new be(xt, new Kt({
                  color: 6333946,
                  linewidth: 4
                }))), H.push(oo(`Df=${r.toFixed(2)}m`, A.x + 0.1, A.y + 0.1, -r / 2, "#60a5fa"));
              }
              if (j === 0) {
                const xt = new ss(R, st, Gt), Ut = new qo(xt, bt(so));
                Ut.position.set(J, L, Nt), H.push(Ut);
                const Qt = new Co(new ns(xt), Mt);
                Qt.position.copy(Ut.position), H.push(Qt);
              } else {
                const xt = new as(R, st), Ut = new Uo({
                  color: so,
                  transparent: true,
                  opacity: 0.45,
                  roughness: 0.6,
                  side: is
                }), Qt = new qo(xt, Ut);
                Qt.position.set(J, L, V), H.push(Qt);
                const no = new qo(xt.clone(), Ut.clone());
                no.position.set(J, L, qt), H.push(no);
                const Me = R / w, pe = st / w, Xt = [];
                for (let kt = 0; kt <= w; kt++) {
                  const Ct = -R / 2 + kt * Me;
                  Xt.push(new X(J + Ct, L - st / 2, V), new X(J + Ct, L + st / 2, V)), Xt.push(new X(J + Ct, L - st / 2, qt), new X(J + Ct, L + st / 2, qt));
                }
                for (let kt = 0; kt <= w; kt++) {
                  const Ct = -st / 2 + kt * pe;
                  Xt.push(new X(J - R / 2, L + Ct, V), new X(J + R / 2, L + Ct, V)), Xt.push(new X(J - R / 2, L + Ct, qt), new X(J + R / 2, L + Ct, qt));
                }
                const So = new ho().setFromPoints(Xt);
                H.push(new Co(So, St));
                const yo = [
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
                  const [Ct, i] = yo[kt], [k, p] = yo[(kt + 1) % 4];
                  ro.push(new X(J + Ct, L + i, V), new X(J + k, L + p, V)), ro.push(new X(J + Ct, L + i, qt), new X(J + k, L + p, qt)), ro.push(new X(J + Ct, L + i, V), new X(J + Ct, L + i, qt));
                }
                const vo = new ho().setFromPoints(ro);
                H.push(new Co(vo, Mt));
              }
              (t.mostrarLabelsZapatas ?? 1) >= 0.5 && H.push(oo(`${A.tipo[0].toUpperCase()} ${R.toFixed(2)}\xD7${st.toFixed(2)}\xD7${Gt.toFixed(2)}m \u03C3/q=${A.ratio.toFixed(2)}`, J, L, qt - 0.2, eo <= 1 ? "#4ade80" : eo <= 1.5 ? "#f59e0b" : "#ef4444"));
            }
            if (Math.round(t.sistemaCimentacion ?? 0) === 1) {
              const A = Math.round(t.vigaAmarre_pos ?? 0), R = A === 0 ? -r : -r / 2, st = t.vigaAmarre_b ?? 0.25, Gt = t.vigaAmarre_h ?? 0.4, Zt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map();
              for (const L of n) {
                const V = L.y.toFixed(4), Nt = L.x.toFixed(4);
                Zt.has(V) || Zt.set(V, []), jt.has(Nt) || jt.set(Nt, []), Zt.get(V).push(L), jt.get(Nt).push(L);
              }
              const J = [];
              for (const L of Zt.values()) {
                L.sort((V, Nt) => V.x - Nt.x);
                for (let V = 0; V < L.length - 1; V++) J.push(new X(L[V].x, L[V].y, R)), J.push(new X(L[V + 1].x, L[V + 1].y, R));
              }
              for (const L of jt.values()) {
                L.sort((V, Nt) => V.y - Nt.y);
                for (let V = 0; V < L.length - 1; V++) J.push(new X(L[V].x, L[V].y, R)), J.push(new X(L[V + 1].x, L[V + 1].y, R));
              }
              J.length > 0 && (H.push(new Co(new ho().setFromPoints(J), new Kt({
                color: 2282478,
                linewidth: 3
              }))), H.push(oo(`Vigas amarre ${(st * 100).toFixed(0)}\xD7${(Gt * 100).toFixed(0)} cm @ ${A === 0 ? "zapatas" : "pedestales"}`, e / 2, f / 2, R + 0.2, "#22d3ee")));
            }
            Ko.push(...H);
          }
        }
      } catch (o) {
        console.warn("[Zapatas 3D]", o);
      }
      if ((t.modoCimentacion ?? 0) >= 0.5) try {
        const n = (_b = s.deformOutputs.rawVal) == null ? void 0 : _b.reactions;
        if (n && n.size > 0) {
          const e = [];
          let f = 0, c = 0;
          if (n.forEach((_, r) => {
            const l = v[r];
            !l || Math.abs(l[2]) > 1e-6 || (e.push({
              idx: r,
              x: l[0],
              y: l[1],
              P_kN: Math.abs(_[2]),
              Mx_kN: _[3],
              My_kN: _[4]
            }), l[0] > f && (f = l[0]), l[1] > c && (c = l[1]));
          }), e.length > 0) {
            const _ = t.q_adm_zapata ?? 10, r = t.ks_zapata ?? 1030, l = Math.max(0, t.Hf_pedestal ?? 0.5), w = Math.max(0.1, t.t_zapata ?? 0.3), a = Math.max(2, Math.round(t.nSubZapata ?? 4)), h = Math.max(0, t.voladoExtra ?? 0.3), j = Math.round(t.tipoZapataOverride ?? 0) | 0, D = Ho(e, f, c, _, r), rt = [
              "central",
              "lindero",
              "esquinera"
            ];
            for (const i of D) j > 0 && (i.tipo = rt[j - 1]), i.t = w;
            const H = Ro[0] ?? t.colSize, bt = Zo[0] ?? t.colSize, Mt = H * bt, St = H * bt ** 3 / 12, Ot = bt * H ** 3 / 12, _o = 0.14 * Math.pow(Math.min(H, bt), 4), me = t.matCol < 0.5 ? N : G, ue = t.matCol < 0.5 ? at : ut, ge = t.matCol < 0.5 ? Z : K, A = [], R = [], st = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map(), jt = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), Nt = /* @__PURE__ */ new Map(), qt = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), $o = [], xt = [], Ut = (i, k, p) => `${Math.round(i * 1e4)},${Math.round(k * 1e4)},${Math.round(p * 1e4)}`, Qt = /* @__PURE__ */ new Map(), no = (i, k, p) => {
              const E = Ut(i, k, p), Y = Qt.get(E);
              if (Y !== void 0) return Y;
              const nt = A.length;
              return A.push([
                i,
                k,
                p
              ]), Qt.set(E, nt), nt;
            }, Me = new Kt({
              color: 0,
              linewidth: 2
            }), pe = new Kt({
              color: 1118481,
              linewidth: 2
            });
            for (const i of D) {
              const k = i.Lz, p = i.Bz, E = i.t;
              let Y = 0, nt = 0;
              i.tipo === "esquinera" ? (Y = i.x < f / 2 ? -(k / 2 - h) : k / 2 - h, nt = i.y < c / 2 ? -(p / 2 - h) : p / 2 - h) : i.tipo === "lindero" && (Math.abs(i.x) < 1e-3 || Math.abs(i.x - f) < 1e-3 ? Y = i.x < f / 2 ? -(k / 2 - h) : k / 2 - h : (Math.abs(i.y) < 1e-3 || Math.abs(i.y - c) < 1e-3) && (nt = i.y < c / 2 ? -(p / 2 - h) : p / 2 - h));
              const Tt = i.x - Y, At = i.y - nt, Wt = -l, Bt = k / a, to = p / a, lt = [];
              for (let q = 0; q <= a; q++) {
                const ot = [];
                for (let ft = 0; ft <= a; ft++) {
                  const Dt = Tt - k / 2 + ft * Bt, wt = At - p / 2 + q * to;
                  ot.push(no(Dt, wt, Wt));
                }
                lt.push(ot);
              }
              for (let q = 0; q < a; q++) for (let ot = 0; ot < a; ot++) {
                const ft = R.length;
                R.push([
                  lt[q][ot],
                  lt[q][ot + 1],
                  lt[q + 1][ot + 1],
                  lt[q + 1][ot]
                ]), qt.set(ft, E), st.set(ft, N), Nt.set(ft, Z), Gt.set(ft, at), V.set(ft, mo);
              }
              const ao = 0.5;
              for (let q = 0; q <= a; q++) for (let ot = 0; ot <= a; ot++) {
                const ft = Bt * to * (ot === 0 || ot === a ? 0.5 : 1) * (q === 0 || q === a ? 0.5 : 1), Dt = r * ft, wt = Dt * ao, O = lt[q][ot];
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
                  k: Dt
                }), $o.push({
                  node: O,
                  dof: 5,
                  k: Dt * 0.1
                });
              }
              const Yt = lt[0][0];
              eo.set(Yt, [
                false,
                false,
                false,
                true,
                true,
                true
              ]);
              let C = 0, P = 0, y = 1 / 0;
              for (let q = 0; q <= a; q++) for (let ot = 0; ot <= a; ot++) {
                const ft = lt[q][ot], Dt = A[ft][0], wt = A[ft][1], O = Math.sqrt((Dt - i.x) ** 2 + (wt - i.y) ** 2);
                O < y && (y = O, C = q, P = ot);
              }
              const Ht = lt[C][P], Ft = e.find((q) => q.idx === i.idx);
              so.set(Ht, [
                0,
                0,
                -Ft.P_kN,
                Ft.Mx_kN,
                Ft.My_kN,
                0
              ]);
              const io = i.ratio;
              let bo = 4906624;
              if (io > 1.5 ? bo = 15680580 : io > 1 ? bo = 16096779 : io > 0.8 && (bo = 16498468), l > 1e-3) {
                const q = new ho().setFromPoints([
                  new X(i.x, i.y, 0),
                  new X(i.x, i.y, -l)
                ]);
                xt.push(new be(q, new Kt({
                  color: 6333946,
                  linewidth: 4
                }))), xt.push(oo(`Df=${l.toFixed(2)}m`, i.x + 0.1, i.y + 0.1, -l / 2, "#60a5fa"));
              }
              {
                const q = new Kt({
                  color: 11184810,
                  linewidth: 1,
                  transparent: true,
                  opacity: 0.6
                }), ot = k / a, ft = p / a, Dt = [];
                for (let wt = 0; wt <= a; wt++) {
                  const O = -k / 2 + wt * ot;
                  Dt.push(new X(Tt + O, At - p / 2, -l), new X(Tt + O, At + p / 2, -l));
                }
                for (let wt = 0; wt <= a; wt++) {
                  const O = -p / 2 + wt * ft;
                  Dt.push(new X(Tt - k / 2, At + O, -l), new X(Tt + k / 2, At + O, -l));
                }
                xt.push(new Co(new ho().setFromPoints(Dt), q));
              }
              if ((t.mostrarLabelsZapatas ?? 1) >= 0.5) {
                const q = Ft.P_kN / 9.80665, ot = Ft.Mx_kN / 9.80665, ft = Ft.My_kN / 9.80665;
                xt.push(oo(`P=${q.toFixed(2)} tonf`, i.x, i.y, 0.3, "#fbbf24")), xt.push(oo(`Mx=${ot.toFixed(2)}  My=${ft.toFixed(2)} tonf\xB7m`, i.x, i.y, 0.1, "#fbbf24")), xt.push(oo(`${i.tipo[0].toUpperCase()} ${k.toFixed(2)}\xD7${p.toFixed(2)}\xD7${E.toFixed(2)}m \u03C3/q=${io.toFixed(2)}`, Tt, At, -l - E - 0.2, io <= 1 ? "#4ade80" : io <= 1.5 ? "#f59e0b" : "#ef4444"));
              }
            }
            const Xt = Math.round(t.sistemaCimentacion ?? 0);
            if (Xt === 1) {
              const i = Math.round(t.vigaAmarre_pos ?? 0), k = t.vigaAmarre_h ?? 0.4, p = t.vigaAmarre_b ?? 0.25, E = p * k, Y = p * k ** 3 / 12, nt = k * p ** 3 / 12, Tt = 0.21 * Math.pow(Math.min(p, k), 3) * Math.max(p, k), At = /* @__PURE__ */ new Map();
              for (const C of D) {
                let P;
                i === 0 ? P = -l : P = -l / 2;
                const y = no(C.x, C.y, P);
                if (At.set(C.idx, y), i === 1 && l > 1e-3) {
                  const dt = no(C.x, C.y, -l / 2), Ht = no(C.x, C.y, 0), Ft = no(C.x, C.y, -l);
                }
              }
              const Wt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map();
              for (const C of e) {
                const P = C.y.toFixed(4), y = C.x.toFixed(4);
                Wt.has(P) || Wt.set(P, []), Bt.has(y) || Bt.set(y, []), Wt.get(P).push(C), Bt.get(y).push(C);
              }
              const to = (C, P) => {
                const y = R.length;
                R.push([
                  C,
                  P
                ]), st.set(y, me), Gt.set(y, ue), Nt.set(y, ge), Zt.set(y, E), jt.set(y, nt), J.set(y, Y), L.set(y, Tt), V.set(y, mo);
              };
              let lt = 0;
              for (const C of Wt.values()) {
                C.sort((P, y) => P.x - y.x);
                for (let P = 0; P < C.length - 1; P++) {
                  const y = At.get(C[P].idx), dt = At.get(C[P + 1].idx);
                  y !== void 0 && dt !== void 0 && (to(y, dt), lt++);
                }
              }
              for (const C of Bt.values()) {
                C.sort((P, y) => P.y - y.y);
                for (let P = 0; P < C.length - 1; P++) {
                  const y = At.get(C[P].idx), dt = At.get(C[P + 1].idx);
                  y !== void 0 && dt !== void 0 && (to(y, dt), lt++);
                }
              }
              const ao = new Kt({
                color: 2282478,
                linewidth: 3
              }), Yt = [];
              for (const C of Wt.values()) {
                const P = [
                  ...C
                ].sort((y, dt) => y.x - dt.x);
                for (let y = 0; y < P.length - 1; y++) {
                  const dt = P[y], Ht = P[y + 1], Ft = i === 0 ? -l : -l / 2;
                  Yt.push(new X(dt.x, dt.y, Ft)), Yt.push(new X(Ht.x, Ht.y, Ft));
                }
              }
              for (const C of Bt.values()) {
                const P = [
                  ...C
                ].sort((y, dt) => y.y - dt.y);
                for (let y = 0; y < P.length - 1; y++) {
                  const dt = P[y], Ht = P[y + 1], Ft = i === 0 ? -l : -l / 2;
                  Yt.push(new X(dt.x, dt.y, Ft)), Yt.push(new X(Ht.x, Ht.y, Ft));
                }
              }
              if (Yt.length > 0) {
                const C = new ho().setFromPoints(Yt);
                xt.push(new Co(C, ao));
              }
              xt.push(oo(`+${lt} vigas de amarre ${(p * 100).toFixed(0)}\xD7${(k * 100).toFixed(0)} cm @ ${i === 0 ? "zapatas" : "pedestales"}`, f / 2, c / 2, i === 1 ? -l / 2 + 0.3 : -l + 0.3, "#22d3ee")), console.log(`[Cimentaci\xF3n] Sistema 1 \u2014 ${lt} vigas de amarre ${(p * 100).toFixed(0)}\xD7${(k * 100).toFixed(0)} cm en posici\xF3n ${i === 0 ? "zapatas" : "pedestales"}`);
            } else Xt >= 2 && (console.warn(`[Cimentaci\xF3n] Sistema ${Xt} (${[
              "",
              "",
              "Vigas T invertida",
              "Vigas rect. + zapata corrida",
              "Losa de cimentaci\xF3n"
            ][Xt]}) a\xFAn no implementado completamente. Mostrando zapatas aisladas. Pr\xF3ximamente: malla shell continua + frames T-invertida.`), xt.push(oo(`Sistema ${Xt} (TODO) \u2014 usando zapatas aisladas`, f / 2, c / 2, 1.5, "#fbbf24")));
            const So = Math.round(t.sistemaCimentacion ?? 0), yo = 0.3, ro = Math.round(t.vigaAmarre_pos ?? 0), vo = /* @__PURE__ */ new Map();
            if (So === 1) {
              const i = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
              for (const E of e) {
                const Y = E.y.toFixed(4), nt = E.x.toFixed(4);
                i.has(Y) || i.set(Y, []), k.has(nt) || k.set(nt, []), i.get(Y).push(E), k.get(nt).push(E);
              }
              const p = (E) => vo.set(E, (vo.get(E) ?? 0) + 1);
              for (const E of i.values()) {
                E.sort((Y, nt) => Y.x - nt.x);
                for (let Y = 0; Y < E.length - 1; Y++) p(E[Y].idx), p(E[Y + 1].idx);
              }
              for (const E of k.values()) {
                E.sort((Y, nt) => Y.y - nt.y);
                for (let Y = 0; Y < E.length - 1; Y++) p(E[Y].idx), p(E[Y + 1].idx);
              }
              console.log(`[Cimentaci\xF3n] Vigas de amarre activas \u2014 momentos en zapatas reducidos por factor (1 - ${yo} \xB7 n_vigas/4):`), vo.forEach((E, Y) => {
                const nt = (yo * E / 4 * 100).toFixed(0);
                console.log(`   Zapata ${Y}: ${E} vigas conectadas \u2192 momento reducido ${nt}%`);
              }), ro === 0 && console.log("   \u21B3 vigaAmarre_pos=0 (mismo nivel zapata) \u2192 en F2K se exportar\xE1 como cimentaci\xF3n corrida con ks\xB7b\xB7dL distribuido por nodo");
            }
            const kt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
            for (const i of D) {
              const k = e.find((O) => O.idx === i.idx), p = i.Lz, E = i.Bz, Y = i.t;
              let nt = 0, Tt = 0;
              i.tipo === "esquinera" ? (nt = i.x < f / 2 ? -(p / 2 - h) : p / 2 - h, Tt = i.y < c / 2 ? -(E / 2 - h) : E / 2 - h) : i.tipo === "lindero" && (Math.abs(i.x) < 1e-3 || Math.abs(i.x - f) < 1e-3 ? nt = i.x < f / 2 ? -(p / 2 - h) : p / 2 - h : (Math.abs(i.y) < 1e-3 || Math.abs(i.y - c) < 1e-3) && (Tt = i.y < c / 2 ? -(E / 2 - h) : E / 2 - h));
              const At = i.x - nt, Wt = i.y - Tt, Bt = [], to = [], lt = {
                elasticities: /* @__PURE__ */ new Map(),
                shearModuli: /* @__PURE__ */ new Map(),
                poissonsRatios: /* @__PURE__ */ new Map(),
                thicknesses: /* @__PURE__ */ new Map(),
                densities: /* @__PURE__ */ new Map()
              }, ao = p / a, Yt = E / a, C = [], P = [];
              for (let O = 0; O <= a; O++) {
                const et = [];
                for (let ht = 0; ht <= a; ht++) {
                  const Pt = -p / 2 + ht * ao, Lt = -E / 2 + O * Yt;
                  et.push(Bt.length), Bt.push([
                    Pt,
                    Lt,
                    0
                  ]);
                  const Bo = At + Pt, Yo = Wt + Lt, Do = Ut(Bo, Yo, -l), lo = Qt.get(Do);
                  lo !== void 0 ? P.push(lo) : P.push(-1);
                }
                C.push(et);
              }
              for (let O = 0; O < a; O++) for (let et = 0; et < a; et++) {
                const ht = to.length;
                to.push([
                  C[O][et],
                  C[O][et + 1],
                  C[O + 1][et + 1],
                  C[O + 1][et]
                ]), lt.thicknesses.set(ht, Y), lt.elasticities.set(ht, N), lt.poissonsRatios.set(ht, Z), lt.shearModuli.set(ht, at), lt.densities.set(ht, mo);
              }
              const y = [], dt = 0.5;
              for (let O = 0; O <= a; O++) for (let et = 0; et <= a; et++) {
                const ht = ao * Yt * (et === 0 || et === a ? 0.5 : 1) * (O === 0 || O === a ? 0.5 : 1), Pt = r * ht, Lt = C[O][et];
                y.push({
                  node: Lt,
                  dof: 0,
                  k: Pt * dt
                }), y.push({
                  node: Lt,
                  dof: 1,
                  k: Pt * dt
                }), y.push({
                  node: Lt,
                  dof: 2,
                  k: Pt
                });
              }
              if (So === 1 && ro === 0) {
                const O = t.vigaAmarre_b ?? 0.25, et = i.idx, ht = e.filter((pt) => Math.abs(pt.y - i.y) < 1e-3 && pt.idx !== et).sort((pt, ko) => pt.x - ko.x), Pt = e.filter((pt) => Math.abs(pt.x - i.x) < 1e-3 && pt.idx !== et).sort((pt, ko) => pt.y - ko.y), Lt = ht.find((pt) => pt.x > i.x), Bo = [
                  ...ht
                ].reverse().find((pt) => pt.x < i.x), Yo = Pt.find((pt) => pt.y > i.y), Do = [
                  ...Pt
                ].reverse().find((pt) => pt.y < i.y), lo = (pt, ko) => {
                  const xe = ko / 2;
                  for (let co = 0; co <= a; co++) {
                    const Je = co === 0 || co === a ? xe / (2 * a) : xe / a, _e = r * O * Je, ye = _e * dt;
                    let fo;
                    switch (pt) {
                      case "x+":
                        fo = C[co][a];
                        break;
                      case "x-":
                        fo = C[co][0];
                        break;
                      case "y+":
                        fo = C[a][co];
                        break;
                      case "y-":
                        fo = C[0][co];
                        break;
                    }
                    y.push({
                      node: fo,
                      dof: 0,
                      k: ye
                    }), y.push({
                      node: fo,
                      dof: 1,
                      k: ye
                    }), y.push({
                      node: fo,
                      dof: 2,
                      k: _e
                    });
                  }
                };
                Lt && lo("x+", Lt.x - i.x), Bo && lo("x-", i.x - Bo.x), Yo && lo("y+", Yo.y - i.y), Do && lo("y-", i.y - Do.y);
              }
              const Ht = r * ao * Yt * 1e-4;
              y.push({
                node: C[0][0],
                dof: 3,
                k: Ht
              }), y.push({
                node: C[0][0],
                dof: 4,
                k: Ht
              }), y.push({
                node: C[0][0],
                dof: 5,
                k: Ht
              });
              const Ft = -nt, io = -Tt;
              let bo = 0, Jo = 0, q = 1 / 0;
              for (let O = 0; O <= a; O++) for (let et = 0; et <= a; et++) {
                const ht = -p / 2 + et * ao, Pt = -E / 2 + O * Yt, Lt = (ht - Ft) ** 2 + (Pt - io) ** 2;
                Lt < q && (q = Lt, bo = O, Jo = et);
              }
              const ot = C[bo][Jo], ft = /* @__PURE__ */ new Map(), Dt = vo.get(i.idx) ?? 0, wt = So === 1 ? Math.max(0.4, 1 - yo * Dt / 4) : 1;
              ft.set(ot, [
                0,
                0,
                -k.P_kN,
                k.Mx_kN * wt,
                k.My_kN * wt,
                0
              ]);
              try {
                const et = ve(Bt, to, {
                  supports: /* @__PURE__ */ new Map(),
                  loads: ft
                }, lt, y).deformations;
                for (let ht = 0; ht < Bt.length; ht++) {
                  const Pt = P[ht];
                  if (Pt >= 0) {
                    const Lt = et.get(ht);
                    Lt && kt.set(Pt, [
                      ...Lt
                    ]);
                  }
                }
              } catch (O) {
                console.warn(`[Zapata ${i.idx}] solver fall\xF3:`, O);
              }
            }
            for (let i = 0; i < R.length; i++) {
              const k = R[i];
              if (k.length !== 4) continue;
              const p = [];
              for (const E of k) {
                const Y = kt.get(E);
                p.push(r * (Y ? Y[2] : 0) / 9.80665);
              }
              Ct.set(i, p);
            }
            s.nodes.val = A, s.elements.val = R, s.nodeInputs.val = {
              supports: eo,
              loads: so
            }, s.elementInputs.val = {
              elasticities: st,
              shearModuli: Gt,
              areas: Zt,
              momentsOfInertiaY: jt,
              momentsOfInertiaZ: J,
              torsionalConstants: L,
              densities: V,
              poissonsRatios: Nt,
              thicknesses: qt
            }, s.deformOutputs.val = {
              deformations: kt,
              reactions: /* @__PURE__ */ new Map()
            }, s.analyzeOutputs.val = {
              pressure: Ct,
              colorMapRanges: {
                pressure: [
                  -_,
                  0
                ]
              }
            }, s.objects3D.val = xt, console.log(`[Modo Cimentaci\xF3n] ${e.length} zapatas + pedestales (Hf=${l} m, t=${w} m, q_adm=${_} tonf/m\xB2, ks=${r} kN/m\xB3) \u2014 reemplaza superestructura`);
            try {
              const i = () => {
                var _a2;
                const p = (_a2 = document.querySelector("#viewer")) == null ? void 0 : _a2.__settings;
                p && (p.shellResults && (p.shellResults.val = "pressure"), p.deformedShape && (p.deformedShape.val = false), p.deformScale && (p.deformScale.val = 5), p.frameResults && (p.frameResults.val = "none"), p.custom3D && (p.custom3D.val = true));
              };
              [
                0,
                100,
                300
              ].forEach((k) => setTimeout(i, k));
            } catch {
            }
            return;
          }
        }
      } catch (o) {
        console.warn("[Modo Cimentaci\xF3n] error:", o);
      }
      s.objects3D.val = Ko;
    },
    runModal(t, s, B) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const x = s.nodes.val, F = s.elements.val, g = s.nodeInputs.val, b = s.elementInputs.val;
      if (!(!x.length || !F.length || !((_a = g.supports) == null ? void 0 : _a.size) || !((_b = b.densities) == null ? void 0 : _b.size))) try {
        const I = [], N = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), at = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map();
        let it = 0, M = 0;
        const d = [];
        let m = 0;
        for (let $ = 0; $ < F.length; $++) {
          const W = F[$];
          let It = false, $t = false;
          if (W.length === 4) {
            const Et = W.map((Rt) => x[Rt][2]);
            if (Math.max(...Et) - Math.min(...Et) < 0.02) {
              const Rt = x[W[0]][0], uo = x[W[0]][1], go = x[W[2]][0], Jt = x[W[2]][1], Fo = Math.abs((go - Rt) * (Jt - uo)), Lo = ((_c = b.thicknesses) == null ? void 0 : _c.get($)) ?? 0.15, wo = ((_d = b.densities) == null ? void 0 : _d.get($)) ?? 24;
              it += wo * Fo * Lo, It = true;
            }
          } else if (W.length === 2) {
            const Et = x[W[0]][2], vt = x[W[1]][2], Rt = Math.sqrt((x[W[1]][0] - x[W[0]][0]) ** 2 + (x[W[1]][1] - x[W[0]][1]) ** 2);
            if (Math.abs(vt - Et) > Rt) {
              $t = true;
              const uo = Math.abs(vt - Et), go = ((_e = b.areas) == null ? void 0 : _e.get($)) ?? 0, Jt = ((_f = b.densities) == null ? void 0 : _f.get($)) ?? 24;
              M += Jt * go * uo;
            }
          }
          It || (I.push(W), ((_g = b.areas) == null ? void 0 : _g.has($)) && N.set(m, b.areas.get($)), ((_h = b.momentsOfInertiaY) == null ? void 0 : _h.has($)) && G.set(m, b.momentsOfInertiaY.get($)), ((_i = b.momentsOfInertiaZ) == null ? void 0 : _i.has($)) && Z.set(m, b.momentsOfInertiaZ.get($)), ((_j = b.torsionalConstants) == null ? void 0 : _j.has($)) && K.set(m, b.torsionalConstants.get($)), ((_k = b.elasticities) == null ? void 0 : _k.has($)) && at.set(m, b.elasticities.get($)), ((_l = b.shearModuli) == null ? void 0 : _l.has($)) && ut.set(m, b.shearModuli.get($)), ((_m = b.densities) == null ? void 0 : _m.has($)) && U.set(m, b.densities.get($)), ((_n = b.thicknesses) == null ? void 0 : _n.has($)) && gt.set(m, b.thicknesses.get($)), ((_o = b.poissonsRatios) == null ? void 0 : _o.has($)) && Q.set(m, b.poissonsRatios.get($)), $t && d.push(m), m++);
        }
        if (it > 0 && M > 0 && d.length > 0) {
          const $ = 1 + it / M;
          for (const W of d) {
            const It = U.get(W) ?? 24;
            U.set(W, It * $);
          }
        }
        const ct = {
          areas: N,
          momentsOfInertiaY: G,
          momentsOfInertiaZ: Z,
          torsionalConstants: K,
          elasticities: at,
          shearModuli: ut,
          densities: U,
          thicknesses: gt,
          poissonsRatios: Q
        }, _t = Math.round(t.nPisos), S = Math.min(60, Math.max(15, 3 * _t + 6)), v = Qe(x, I, g, ct, S), T = Math.round(t.nVanosX), z = Math.round(t.nVanosY), mt = Math.round(t.nPisos), yt = M > 0 ? 1 + it / M : 1;
        B.render(v, {
          title: `Edificio ${T}\xD7${z} vanos \xD7 ${mt} pisos \xB7 ${S} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${yt.toFixed(2)} dens cols, ${it.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}${(t.murosMode ?? 0) > 0 ? " + Muros Q4" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const zt = v.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${S} modos \xB7 f\u2081=${zt.toFixed(4)} Hz \xB7 m_slab=${it.toFixed(0)} m_cols=${M.toFixed(0)} factor=${yt.toFixed(2)}`);
      } catch (I) {
        console.warn("Modal edificio error:", I.message);
      }
    }
  };
});
export {
  __tla,
  vs as e,
  ys as f
};
