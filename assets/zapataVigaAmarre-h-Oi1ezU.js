import { _ as ya } from "./preload-helper-DrUBW0xl.js";
import { L as Je, v as za, V as G, a as Ye, B as qe } from "./theme-Cr2LU0HL.js";
import { a as Pa } from "./analyze-DoaxThCI.js";
import { m as ka, d as Ia, __tla as __tla_0 } from "./didacticCpp-DDG05360.js";
import { a as Ke } from "./exampleVersion-D1A_5i59.js";
let Oa;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let U, Q, we, pe, wa, Na, We, Da, Sa, Ea;
  U = 25e6;
  Q = 0.2;
  we = U / (2 * (1 + Q));
  pe = 24;
  wa = 0.2;
  Na = 0.035;
  We = 8;
  Da = 0.04;
  Sa = new Je({
    color: 16711731,
    linewidth: 2
  });
  Ea = new Je({
    color: 52224,
    linewidth: 2
  });
  Oa = {
    id: "zapata-viga-amarre",
    name: "Zapata + Viga de Amarre + Pedestal",
    category: "Cimentaciones",
    defaultShellResult: "pressure",
    availableShellResults: [
      "pressure",
      "bendingXX",
      "bendingYY",
      "displacementZ",
      "vonMises"
    ],
    hasModal: true,
    params: {
      Lz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz1 (m)",
        folder: "\u{1F4D0} Geometr\xEDa zapatas",
        description: "Lado X de la Zapata 1 (medianera). Dimensi\xF3n paralela al eje viga amarre. T\xEDpico 2-4 m."
      },
      Bz1: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz1 (m)",
        folder: "\u{1F4D0} Geometr\xEDa zapatas",
        description: "Lado Y de la Zapata 1. Dimensi\xF3n perpendicular al eje viga amarre. T\xEDpico 2-4 m."
      },
      Lz2: {
        default: 2.5,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Lz2 (m)",
        folder: "\u{1F4D0} Geometr\xEDa zapatas",
        description: "Lado X de la Zapata 2 (interna). Dimensi\xF3n paralela al eje viga amarre."
      },
      Bz2: {
        default: 2,
        min: 1,
        max: 4,
        step: 0.1,
        label: "Bz2 (m)",
        folder: "\u{1F4D0} Geometr\xEDa zapatas",
        description: "Lado Y de la Zapata 2. Dimensi\xF3n perpendicular al eje viga amarre."
      },
      tz: {
        default: 0.5,
        min: 0.2,
        max: 1,
        step: 0.05,
        label: "tz espesor (m)",
        folder: "\u{1F4D0} Geometr\xEDa zapatas",
        description: "Espesor (canto) com\xFAn de ambas zapatas, en metros. T\xEDpico 0.30-0.80 m. Afecta rigidez flexural y peso propio del slab."
      },
      Lv: {
        default: 3,
        min: 1,
        max: 6,
        step: 0.1,
        label: "Lv claro (m)",
        folder: "\u{1F3D7} Viga de amarre",
        description: "Distancia LIBRE entre borde derecho de Z1 y borde izquierdo de Z2 (el gap). NO es la longitud total de la viga (que va col-a-col, atravesando ambas zapatas)."
      },
      Bv: {
        default: 0.25,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Bv ancho (m)",
        folder: "\u{1F3D7} Viga de amarre",
        description: "Ancho (dimensi\xF3n horizontal) de la secci\xF3n rectangular de la viga de amarre. T\xEDpico 0.25-0.45 m."
      },
      Hv: {
        default: 0.3,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "Hv canto (m)",
        folder: "\u{1F3D7} Viga de amarre",
        description: "Canto (dimensi\xF3n vertical) de la secci\xF3n rectangular de la viga. Mayor canto = m\xE1s rigidez flexural. T\xEDpico 0.40-0.95 m."
      },
      vigaLevel: {
        default: 0,
        min: 0,
        max: 1,
        step: 1,
        label: "Viga: 0=baja 1=alta",
        folder: "\u{1F3D7} Viga de amarre",
        description: "0 = viga al nivel del slab (z=0). 1 = viga elevada al nivel del pedestal. La convenci\xF3n SAFE es 0 (mismo plano que la zapata)."
      },
      bc: {
        default: 0.4,
        min: 0.2,
        max: 0.8,
        step: 0.05,
        label: "bc columna (m)",
        folder: "\u{1F3DB} Columna + pedestal",
        description: "Lado de la secci\xF3n CUADRADA de la columna. La columna NO va como frame: se modela como un Stiff patch en el slab (\xE1rea r\xEDgida que distribuye la carga axial)."
      },
      Hp: {
        default: 0.8,
        min: 0.3,
        max: 2,
        step: 0.1,
        label: "Hp pedestal (m)",
        folder: "\u{1F3DB} Columna + pedestal",
        description: "Altura del pedestal (frame vertical) sobre la zapata, en metros. Las cargas P/M se aplican en el TOPE del pedestal a z=Hp."
      },
      ks: {
        default: 2e3,
        min: 500,
        max: 3e4,
        step: 500,
        label: "ks Winkler (kN/m\xB3)",
        folder: "\u{1F30D} Suelo",
        description: "M\xF3dulo de balasto vertical kv del suelo (modelo Winkler). T\xEDpico: 10000 (suelo blando) - 50000 kN/m\xB3 (suelo denso). Para Guerra Ej6 = 37461 kN/m\xB3."
      },
      useDead: {
        default: 1,
        boolean: true,
        label: "Activar Dead (CM)",
        folder: "\u{1F534} Cargas Dead (CM)",
        description: "Activa/desactiva el patr\xF3n Dead. Si OFF las cargas P_dead/M_dead se ignoran en el an\xE1lisis Y en el F2K. Default ON."
      },
      P1: {
        default: 25,
        min: 1,
        max: 200,
        step: 1,
        label: "P1 Dead (tonf)",
        folder: "\u{1F534} Cargas Dead (CM)",
        hiddenIf: (e) => (e.useDead ?? 1) < 0.5,
        description: "Carga axial muerta (peso propio + CM) sobre Columna 1, en tonf. +compresi\xF3n. Para Guerra Ej6 Col1 = 70 t."
      },
      M1x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1x Dead (tonf\xB7m)",
        folder: "\u{1F534} Cargas Dead (CM)",
        hiddenIf: (e) => (e.useDead ?? 1) < 0.5,
        description: "Momento muerto en eje X de Columna 1, tonf\xB7m. Genera flexi\xF3n My en la zapata."
      },
      M1y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1y Dead (tonf\xB7m)",
        folder: "\u{1F534} Cargas Dead (CM)",
        hiddenIf: (e) => (e.useDead ?? 1) < 0.5,
        description: "Momento muerto en eje Y de Columna 1, tonf\xB7m. Genera flexi\xF3n Mx en la zapata."
      },
      P2: {
        default: 40,
        min: 1,
        max: 200,
        step: 1,
        label: "P2 Dead (tonf)",
        folder: "\u{1F534} Cargas Dead (CM)",
        hiddenIf: (e) => (e.useDead ?? 1) < 0.5,
        description: "Carga axial muerta sobre Columna 2. Para Guerra Ej6 Col2 = 89 t."
      },
      M2x: {
        default: 1,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2x Dead (tonf\xB7m)",
        folder: "\u{1F534} Cargas Dead (CM)",
        hiddenIf: (e) => (e.useDead ?? 1) < 0.5,
        description: "Momento muerto en eje X de Columna 2."
      },
      M2y: {
        default: 2.5,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2y Dead (tonf\xB7m)",
        folder: "\u{1F534} Cargas Dead (CM)",
        hiddenIf: (e) => (e.useDead ?? 1) < 0.5,
        description: "Momento muerto en eje Y de Columna 2."
      },
      useLive: {
        default: 1,
        boolean: true,
        label: "Activar Live (CV)",
        folder: "\u{1F535} Cargas Live (CV)",
        description: "Activa/desactiva el patr\xF3n Live. Si OFF las cargas P_live/M_live se ignoran en an\xE1lisis Y en F2K. La combinaci\xF3n Pu=1.4D+1.7L solo aplica si ambos est\xE1n activos."
      },
      P1_L: {
        default: 0,
        min: 0,
        max: 200,
        step: 1,
        label: "P1 Live (tonf)",
        folder: "\u{1F535} Cargas Live (CV)",
        hiddenIf: (e) => (e.useLive ?? 1) < 0.5,
        description: "Carga axial viva (CV) sobre Columna 1. Para Guerra Ej6 Col1 = 40 t."
      },
      M1x_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1x Live (tonf\xB7m)",
        folder: "\u{1F535} Cargas Live (CV)",
        hiddenIf: (e) => (e.useLive ?? 1) < 0.5,
        description: "Momento vivo en eje X de Columna 1."
      },
      M1y_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M1y Live (tonf\xB7m)",
        folder: "\u{1F535} Cargas Live (CV)",
        hiddenIf: (e) => (e.useLive ?? 1) < 0.5,
        description: "Momento vivo en eje Y de Columna 1."
      },
      P2_L: {
        default: 0,
        min: 0,
        max: 200,
        step: 1,
        label: "P2 Live (tonf)",
        folder: "\u{1F535} Cargas Live (CV)",
        hiddenIf: (e) => (e.useLive ?? 1) < 0.5,
        description: "Carga axial viva sobre Columna 2. Para Guerra Ej6 Col2 = 51 t."
      },
      M2x_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2x Live (tonf\xB7m)",
        folder: "\u{1F535} Cargas Live (CV)",
        hiddenIf: (e) => (e.useLive ?? 1) < 0.5,
        description: "Momento vivo en eje X de Columna 2."
      },
      M2y_L: {
        default: 0,
        min: -5,
        max: 5,
        step: 0.1,
        label: "M2y Live (tonf\xB7m)",
        folder: "\u{1F535} Cargas Live (CV)",
        hiddenIf: (e) => (e.useLive ?? 1) < 0.5,
        description: "Momento vivo en eje Y de Columna 2."
      },
      nSubX: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "nx subdivisiones",
        folder: "\u{1F527} Mallado FEM",
        description: "N\xFAmero de subdivisiones del mesh shell Q4 en direcci\xF3n X. M\xE1s subdivisiones = m\xE1s precisi\xF3n pero mayor c\xF3mputo. T\xEDpico 4-8."
      },
      nSubY: {
        default: 4,
        min: 2,
        max: 8,
        step: 1,
        label: "ny subdivisiones",
        folder: "\u{1F527} Mallado FEM",
        description: "Subdivisiones en direcci\xF3n Y. T\xEDpico 4-8."
      }
    },
    build(e, s) {
      var _a;
      const r = e.Lz1, f = e.Bz1, p = e.Lv, _ = e.Bv, L = e.Hv, C = e.Lz2, k = e.Bz2, F = e.tz, d = e.bc, Z = e.Hp, I = 9.80665, B = (e.useDead ?? 1) >= 0.5 ? 1 : 0, V = (e.useLive ?? 1) >= 0.5 ? 1 : 0, ne = (B * (e.P1 ?? 0) + V * (e.P1_L ?? 0)) * I, te = (B * (e.P2 ?? 0) + V * (e.P2_L ?? 0)) * I, A = e.ks, ve = (B * (e.M1x ?? 0) + V * (e.M1x_L ?? 0)) * I, ge = (B * (e.M1y ?? 0) + V * (e.M1y_L ?? 0)) * I, he = (B * (e.M2x ?? 0) + V * (e.M2x_L ?? 0)) * I, Me = (B * (e.M2y ?? 0) + V * (e.M2y_L ?? 0)) * I, b = Math.round(e.nSubX), y = Math.round(e.nSubY), ee = (f - k) / 2, H = d / 2, v = f / 2, X = r + p + C / 2, O = k / 2 + ee, se = v;
      function le(a, o, n, t) {
        const l = [
          a,
          ...n.filter((c) => c > a && c < o),
          o
        ].sort((c, u) => c - u), m = [];
        for (let c = 0; c < l.length - 1; c++) {
          const u = l[c], h = l[c + 1], D = Math.max(1, Math.round((h - u) / ((o - a) / t)));
          for (let M = 0; M < D; M++) m.push(u + (h - u) * M / D);
        }
        return m.push(l[l.length - 1]), m;
      }
      const j = le(0, r, [
        H
      ], b), Y = le(0, f, [
        v,
        se
      ], y), R = le(r + p, r + p + C, [
        X
      ], b), q = le(ee, ee + k, [
        O,
        se
      ], y), xe = [], z = [], Ue = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map(), Le = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), $ = (a, o, n) => {
        const t = `${a.toFixed(4)},${o.toFixed(4)},${n.toFixed(4)}`;
        if (Ce.has(t)) return Ce.get(t);
        const l = xe.length;
        return xe.push([
          a,
          o,
          n
        ]), Ce.set(t, l), l;
      }, g = [];
      for (let a = 0; a < Y.length; a++) {
        const o = [];
        for (let n = 0; n < j.length; n++) o.push($(j[n], Y[a], 0));
        g.push(o);
      }
      for (let a = 0; a < Y.length - 1; a++) for (let o = 0; o < j.length - 1; o++) {
        const n = z.length;
        z.push([
          g[a][o],
          g[a][o + 1],
          g[a + 1][o + 1],
          g[a + 1][o]
        ]), Le.set(n, F), K.set(n, U), W.set(n, Q), J.set(n, pe);
      }
      const w = [];
      for (let a = 0; a < q.length; a++) {
        const o = [];
        for (let n = 0; n < R.length; n++) o.push($(R[n], q[a], 0));
        w.push(o);
      }
      for (let a = 0; a < q.length - 1; a++) for (let o = 0; o < R.length - 1; o++) {
        const n = z.length;
        z.push([
          w[a][o],
          w[a][o + 1],
          w[a + 1][o + 1],
          w[a + 1][o]
        ]), Le.set(n, F), K.set(n, U), W.set(n, Q), J.set(n, pe);
      }
      const Ne = $(H, v, 0), De = $(H, v, Z), Se = $(X, O, 0), Ee = $(X, O, Z);
      for (const [a, o] of [
        [
          Ne,
          De
        ],
        [
          Se,
          Ee
        ]
      ]) {
        const n = z.length;
        z.push([
          a,
          o
        ]), K.set(n, U), W.set(n, Q), me.set(n, we), ie.set(n, d * d), re.set(n, d ** 4 / 12), de.set(n, d ** 4 / 12), ce.set(n, 0.14 * d ** 4), J.set(n, pe), ue.set(n, {
          type: "rect",
          b: d,
          h: d
        });
      }
      const ae = [];
      for (const a of j) ae.push($(a, v, 0));
      for (const a of R) ae.push($(a, O, 0));
      let Fe = 0;
      for (let a = 0; a < ae.length - 1; a++) {
        const o = ae[a], n = ae[a + 1];
        if (o === n) continue;
        const t = z.length;
        z.push([
          o,
          n
        ]), K.set(t, U), W.set(t, Q), me.set(t, we), ie.set(t, _ * L), re.set(t, _ * L ** 3 / 12), de.set(t, L * _ ** 3 / 12), ce.set(t, 0.28 * _ * L ** 3), J.set(t, pe), ue.set(t, {
          type: "rect",
          b: _,
          h: L
        }), Fe++;
      }
      console.log(`[viga amarre] ${Fe} segmentos col-a-col compartiendo nodos con slab`);
      const Be = 0.5, Qe = U * 1e3, ea = we * 1e3, aa = d * d * 100, Ve = d ** 4 / 12 * 100, oa = 0.14 * d ** 4 * 100;
      function Ae(a, o, n, t, l, m) {
        let c = 0;
        for (let u = 0; u < l.length; u++) for (let h = 0; h < t.length; h++) {
          const D = t[h], M = l[u];
          if (Math.abs(D - o) > Be / 2 + 1e-6 || Math.abs(M - n) > Be / 2 + 1e-6) continue;
          const T = m[u][h];
          if (T === a) continue;
          const i = z.length;
          z.push([
            a,
            T
          ]), K.set(i, Qe), W.set(i, Q), me.set(i, ea), ie.set(i, aa), re.set(i, Ve), de.set(i, Ve), ce.set(i, oa), J.set(i, 0), ue.set(i, {
            type: "rect",
            b: d,
            h: d
          }), c++;
        }
        return c;
      }
      const na = Ae(Ne, H, v, j, Y, g), ta = Ae(Se, X, O, R, q, w);
      console.log(`[Rigid links] Col1:${na} Col2:${ta}  (viga col-a-col directa nCol1Bot\u2194nCol2Bot)`), _e.set(De, [
        0,
        0,
        -ne,
        ve,
        ge,
        0
      ]), _e.set(Ee, [
        0,
        0,
        -te,
        he,
        Me,
        0
      ]);
      const Ge = r / b, $e = f / y, sa = C / b, la = k / y, Te = 0.5, N = [], oe = [];
      for (let a = 0; a < Y.length; a++) for (let o = 0; o < j.length; o++) {
        const n = Ge * $e * (o === 0 || o === j.length - 1 ? 0.5 : 1) * (a === 0 || a === Y.length - 1 ? 0.5 : 1), t = A * n, l = A * n * Te;
        N.push({
          node: g[a][o],
          dof: 0,
          k: l
        }), N.push({
          node: g[a][o],
          dof: 1,
          k: l
        }), N.push({
          node: g[a][o],
          dof: 2,
          k: t
        }), oe.push(g[a][o]);
      }
      for (let a = 0; a < q.length; a++) for (let o = 0; o < R.length; o++) {
        const n = sa * la * (o === 0 || o === R.length - 1 ? 0.5 : 1) * (a === 0 || a === q.length - 1 ? 0.5 : 1), t = A * n, l = A * n * Te;
        N.push({
          node: w[a][o],
          dof: 0,
          k: l
        }), N.push({
          node: w[a][o],
          dof: 1,
          k: l
        }), N.push({
          node: w[a][o],
          dof: 2,
          k: t
        }), oe.push(w[a][o]);
      }
      const be = A * Ge * $e * 1e-4;
      N.push({
        node: g[0][0],
        dof: 3,
        k: be
      }), N.push({
        node: g[0][0],
        dof: 4,
        k: be
      }), N.push({
        node: g[0][0],
        dof: 5,
        k: be
      }), s.nodes.val = xe.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), s.elements.val = z, s.nodeInputs.val = {
        supports: Ue,
        loads: _e
      }, s.elementInputs.val = {
        elasticities: K,
        poissonsRatios: W,
        areas: ie,
        momentsOfInertiaZ: re,
        momentsOfInertiaY: de,
        torsionalConstants: ce,
        shearModuli: me,
        thicknesses: Le,
        densities: J,
        sectionShapes: ue
      };
      try {
        s.deformOutputs.val = Ia(s.nodes.val, s.elements.val, s.nodeInputs.val, s.elementInputs.val, N);
        const a = Pa(s.nodes.val, s.elements.val, s.elementInputs.val, s.deformOutputs.val), o = s.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let t = 0, l = 0;
        s.elements.rawVal.forEach((h, D) => {
          if (h.length !== 4) return;
          const M = [];
          for (const T of h) {
            const i = o == null ? void 0 : o.get(T), S = i ? i[2] : 0, x = A * S;
            M.push(x), x < t && (t = x), x > l && (l = x);
          }
          n.set(D, M);
        }), a.pressure = n;
        const m = 9.80665, c = Math.min(-12 * m, l), u = Math.max(-26 * m, t);
        a.colorMapRanges = {
          pressure: [
            c,
            u
          ]
        }, s.analyzeOutputs.val = a;
      } catch (a) {
        console.error("Solver error:", a);
      }
      const Oe = s.deformOutputs.rawVal.deformations;
      let ye = 1e-9;
      for (const a of oe) {
        const o = Oe == null ? void 0 : Oe.get(a);
        o && Number.isFinite(o[2]) && (ye = Math.max(ye, Math.abs(o[2])));
      }
      const ia = new Set(oe), ze = We * 12, fe = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, je = (a, o, n = 1) => {
        const t = a ? o : 0, m = -(ye * Math.max(t, 1) + wa), c = n > 0 ? n : n < 0 ? -1 / n : 1, u = Na * c, h = Da * c, D = [];
        for (const M of oe) {
          if (!ia.has(M)) continue;
          const T = s.nodes.rawVal[M];
          if (!T) continue;
          const i = T[0], S = T[1], x = Oe == null ? void 0 : Oe.get(M), Pe = (P) => Number.isFinite(P) ? P : 0, da = x ? Pe(x[0]) : 0, ca = x ? Pe(x[1]) : 0, ma = x ? Pe(x[2]) : 0, Re = i + da * t, Ze = S + ca * t, He = 0 + ma * t, ua = He - m, ke = (P) => [
            i + (Re - i) * P,
            S + (Ze - S) * P,
            m + ua * P
          ], [fa, pa, va] = ke(0), [ga, ha, Ma] = ke(0.05), Ie = [
            new G(fa, pa, va),
            new G(ga, ha, Ma)
          ];
          for (let P = 0; P <= ze; P++) {
            const _a2 = 0.05 + 0.9 * (P / ze), [La, Ca, ba] = ke(_a2), Xe = 2 * Math.PI * We * (P / ze);
            Ie.push(new G(La + u * Math.cos(Xe), Ca + u * Math.sin(Xe), ba));
          }
          Ie.push(new G(Re, Ze, He)), D.push(new Ye(new qe().setFromPoints(Ie), Sa));
          const E = h, xa = [
            new G(i - E, S - E, m),
            new G(i + E, S - E, m),
            new G(i + E, S + E, m),
            new G(i - E, S + E, m),
            new G(i - E, S - E, m)
          ];
          D.push(new Ye(new qe().setFromPoints(xa), Ea));
        }
        return D;
      }, ra = Ke.v;
      fe ? za.derive(() => {
        if (Ke.v !== ra) return;
        const a = fe.deformedShape.val, o = fe.deformScale.val, n = fe.displayScale.val;
        s.objects3D.val = je(a, o, n);
      }) : s.objects3D.val = je(true, 1, 1);
    },
    runModal(e, s, r) {
      var _a, _b;
      const f = s.nodes.val, p = s.elements.val, _ = s.nodeInputs.val, L = s.elementInputs.val;
      if (!(!f.length || !p.length || !((_a = L.densities) == null ? void 0 : _a.size))) try {
        const C = ka(f, p, _, L, 12);
        r.render(C, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = C.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (C) {
        console.warn("Modal zapata-viga error:", C.message);
      }
    },
    async exportF2k(e) {
      const { downloadEdificioCimentacionF2k: s } = await ya(async () => {
        const { downloadEdificioCimentacionF2k: v } = await import("./f2kCimentacionCompleta-DC7r5uTU.js");
        return {
          downloadEdificioCimentacionF2k: v
        };
      }, []), r = 9.80665, f = e.Lz1, p = e.Bz1, _ = e.Lv, L = e.Bv, C = e.Hv, k = e.Lz2, F = e.Bz2, d = e.tz, Z = e.bc, I = e.ks, B = (p - F) / 2, V = Z / 2, ne = p / 2, te = f + _ + k / 2, A = F / 2 + B, ve = f / 2, ge = p / 2, he = f + _ + k / 2, Me = B + F / 2, b = (e.useDead ?? 1) >= 0.5 ? 1 : 0, y = (e.useLive ?? 1) >= 0.5 ? 1 : 0, ee = [
        {
          xC: ve,
          yC: ge,
          xCol: V,
          yCol: ne,
          Lz: f,
          Bz: p,
          tz: d,
          bc: Z,
          P_dead_kN: b * (e.P1 ?? 0) * r,
          Mx_dead_kNm: b * (e.M1x ?? 0) * r,
          My_dead_kNm: b * (e.M1y ?? 0) * r,
          P_live_kN: y * (e.P1_L ?? 0) * r,
          Mx_live_kNm: y * (e.M1x_L ?? 0) * r,
          My_live_kNm: y * (e.M1y_L ?? 0) * r,
          label: 1
        },
        {
          xC: he,
          yC: Me,
          xCol: te,
          yCol: A,
          Lz: k,
          Bz: F,
          tz: d,
          bc: Z,
          P_dead_kN: b * (e.P2 ?? 0) * r,
          Mx_dead_kNm: b * (e.M2x ?? 0) * r,
          My_dead_kNm: b * (e.M2y ?? 0) * r,
          P_live_kN: y * (e.P2_L ?? 0) * r,
          Mx_live_kNm: y * (e.M2x_L ?? 0) * r,
          My_live_kNm: y * (e.M2y_L ?? 0) * r,
          label: 2
        }
      ], H = [
        {
          x1: V,
          y1: ne,
          x2: te,
          y2: A,
          h: C,
          b: L,
          z: 0
        }
      ];
      try {
        s({
          zapatas: ee,
          vigasAmarre: H,
          ks_kNm3: I,
          Z: 0
        }, `ZapataVigaAmarre_Hekatan_${Date.now()}.f2k`);
        const v = (e.P1 ?? 0) + (e.P1_L ?? 0), X = (e.P2 ?? 0) + (e.P2_L ?? 0), O = 1.4 * (e.P1 ?? 0) + 1.7 * (e.P1_L ?? 0), se = 1.4 * (e.P2 ?? 0) + 1.7 * (e.P2_L ?? 0);
        alert(`\u2705 F2K exportado con 2 zapatas + viga de amarre:

\u2022 Z1 ${f}\xD7${p} m \u2014 PD=${e.P1} + PL=${e.P1_L ?? 0} = ${v} tonf | Pu=${O.toFixed(1)} tonf
\u2022 Z2 ${k}\xD7${F} m \u2014 PD=${e.P2} + PL=${e.P2_L ?? 0} = ${X} tonf | Pu=${se.toFixed(1)} tonf
\u2022 Viga amarre ${L}\xD7${C} m, Lv=${_} m
\u2022 ks = ${I.toFixed(0)} kN/m\xB3

Patrones de carga incluidos: Dead (+peso propio), Live
Combinaci\xF3n: Pu = 1.4D + 1.7L (ACI 318 nominal Guerra MDI)

Abrilo en SAFE 20.x: File \u2192 Import \u2192 SAFE Text File (.f2k)`), console.log(`[F2K Zapata+Viga] exportado: Z1=${f}\xD7${p}, Z2=${k}\xD7${F}, ks=${I} kN/m\xB3`);
      } catch (v) {
        alert(`\u274C Error exportando F2K: ${v.message}`), console.error(v);
      }
    }
  };
});
export {
  __tla,
  Oa as z
};
