import { _ as La } from "./preload-helper-DrUBW0xl.js";
import { L as qe, v as Ca, V as G, a as Re, B as Ze } from "./theme-Buj43zQ_.js";
import { a as ba } from "./analyze-DoaxThCI.js";
import { m as za, d as Pa, __tla as __tla_0 } from "./didacticCpp-q5lN0Q74.js";
import { a as He } from "./exampleVersion-D1A_5i59.js";
let Ga;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let ae, oe, Xe, ke, ya, ka, Ye, Ia, wa, Na;
  ae = 25e6;
  oe = 0.2;
  Xe = ae / (2 * (1 + oe));
  ke = 24;
  ya = 0.2;
  ka = 0.035;
  Ye = 8;
  Ia = 0.04;
  wa = new qe({
    color: 16711731,
    linewidth: 2
  });
  Na = new qe({
    color: 52224,
    linewidth: 2
  });
  Ga = {
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
      const r = e.Lz1, u = e.Bz1, f = e.Lv, h = e.Bv, x = e.Hv, _ = e.Lz2, b = e.Bz2, F = e.tz, z = e.bc;
      e.Hp;
      const P = 9.80665, y = (e.useDead ?? 1) >= 0.5 ? 1 : 0, B = (e.useLive ?? 1) >= 0.5 ? 1 : 0, ne = (y * (e.P1 ?? 0) + B * (e.P1_L ?? 0)) * P, te = (y * (e.P2 ?? 0) + B * (e.P2_L ?? 0)) * P, V = e.ks, se = (y * (e.M1x ?? 0) + B * (e.M1x_L ?? 0)) * P, re = (y * (e.M1y ?? 0) + B * (e.M1y_L ?? 0)) * P, de = (y * (e.M2x ?? 0) + B * (e.M2x_L ?? 0)) * P, ce = (y * (e.M2y ?? 0) + B * (e.M2y_L ?? 0)) * P, R = Math.round(e.nSubX), L = Math.round(e.nSubY), k = (u - b) / 2, K = z / 2, O = u / 2, I = r + f + _ / 2, Z = b / 2 + k, le = O;
      function H(a, o, n, t) {
        const l = [
          a,
          ...n.filter((d) => d > a && d < o),
          o
        ].sort((d, m) => d - m), c = [];
        for (let d = 0; d < l.length - 1; d++) {
          const m = l[d], v = l[d + 1], D = Math.max(1, Math.round((v - m) / ((o - a) / t)));
          for (let g = 0; g < D; g++) c.push(m + (v - m) * g / D);
        }
        return c.push(l[l.length - 1]), c;
      }
      const T = H(0, r, [
        K
      ], R), X = H(0, u, [
        O,
        le
      ], L), j = H(r + f, r + f + _, [
        I
      ], R), Y = H(k, k + b, [
        Z,
        le
      ], L), me = [], A = [], Ke = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), _e = /* @__PURE__ */ new Map(), q = (a, o, n) => {
        const t = `${a.toFixed(4)},${o.toFixed(4)},${n.toFixed(4)}`;
        if (_e.has(t)) return _e.get(t);
        const l = me.length;
        return me.push([
          a,
          o,
          n
        ]), _e.set(t, l), l;
      }, p = [];
      for (let a = 0; a < X.length; a++) {
        const o = [];
        for (let n = 0; n < T.length; n++) o.push(q(T[n], X[a], 0));
        p.push(o);
      }
      for (let a = 0; a < X.length - 1; a++) for (let o = 0; o < T.length - 1; o++) {
        const n = A.length;
        A.push([
          p[a][o],
          p[a][o + 1],
          p[a + 1][o + 1],
          p[a + 1][o]
        ]), pe.set(n, F), W.set(n, ae), J.set(n, oe), U.set(n, ke);
      }
      const w = [];
      for (let a = 0; a < Y.length; a++) {
        const o = [];
        for (let n = 0; n < j.length; n++) o.push(q(j[n], Y[a], 0));
        w.push(o);
      }
      for (let a = 0; a < Y.length - 1; a++) for (let o = 0; o < j.length - 1; o++) {
        const n = A.length;
        A.push([
          w[a][o],
          w[a][o + 1],
          w[a + 1][o + 1],
          w[a + 1][o]
        ]), pe.set(n, F), W.set(n, ae), J.set(n, oe), U.set(n, ke);
      }
      const Ie = q(K, O, 0), we = q(I, Z, 0), Q = [];
      for (const a of T) Q.push(q(a, O, 0));
      for (const a of j) Q.push(q(a, Z, 0));
      let Ne = 0;
      for (let a = 0; a < Q.length - 1; a++) {
        const o = Q[a], n = Q[a + 1];
        if (o === n) continue;
        const t = A.length;
        A.push([
          o,
          n
        ]), W.set(t, ae), J.set(t, oe), he.set(t, Xe), fe.set(t, h * x), ve.set(t, h * x ** 3 / 12), ge.set(t, x * h ** 3 / 12), Me.set(t, 0.28 * h * x ** 3), U.set(t, ke), xe.set(t, {
          type: "rect",
          b: h,
          h: x
        }), Ne++;
      }
      console.log(`[viga amarre] ${Ne} segmentos col-a-col compartiendo nodos con slab`);
      const De = 0.5, We = ae * 1e3, Je = Xe * 1e3, Ue = z * z * 100, Se = z ** 4 / 12 * 100, Qe = 0.14 * z ** 4 * 100;
      function Ee(a, o, n, t, l, c) {
        let d = 0;
        for (let m = 0; m < l.length; m++) for (let v = 0; v < t.length; v++) {
          const D = t[v], g = l[m];
          if (Math.abs(D - o) > De / 2 + 1e-6 || Math.abs(g - n) > De / 2 + 1e-6) continue;
          const $ = c[m][v];
          if ($ === a) continue;
          const i = A.length;
          A.push([
            a,
            $
          ]), W.set(i, We), J.set(i, oe), he.set(i, Je), fe.set(i, Ue), ve.set(i, Se), ge.set(i, Se), Me.set(i, Qe), U.set(i, 0), xe.set(i, {
            type: "rect",
            b: z,
            h: z
          }), d++;
        }
        return d;
      }
      const ea = Ee(Ie, K, O, T, X, p), aa = Ee(we, I, Z, j, Y, w);
      console.log(`[Rigid links] Col1:${ea} Col2:${aa}  (viga col-a-col directa nCol1Bot\u2194nCol2Bot)`), ue.set(Ie, [
        0,
        0,
        -ne,
        se,
        re,
        0
      ]), ue.set(we, [
        0,
        0,
        -te,
        de,
        ce,
        0
      ]);
      const Fe = r / R, Be = u / L, oa = _ / R, na = b / L, Ve = 0.5, N = [], ee = [];
      for (let a = 0; a < X.length; a++) for (let o = 0; o < T.length; o++) {
        const n = Fe * Be * (o === 0 || o === T.length - 1 ? 0.5 : 1) * (a === 0 || a === X.length - 1 ? 0.5 : 1), t = V * n, l = V * n * Ve;
        N.push({
          node: p[a][o],
          dof: 0,
          k: l
        }), N.push({
          node: p[a][o],
          dof: 1,
          k: l
        }), N.push({
          node: p[a][o],
          dof: 2,
          k: t
        }), ee.push(p[a][o]);
      }
      for (let a = 0; a < Y.length; a++) for (let o = 0; o < j.length; o++) {
        const n = oa * na * (o === 0 || o === j.length - 1 ? 0.5 : 1) * (a === 0 || a === Y.length - 1 ? 0.5 : 1), t = V * n, l = V * n * Ve;
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
        }), ee.push(w[a][o]);
      }
      const Le = V * Fe * Be * 1e-4;
      N.push({
        node: p[0][0],
        dof: 3,
        k: Le
      }), N.push({
        node: p[0][0],
        dof: 4,
        k: Le
      }), N.push({
        node: p[0][0],
        dof: 5,
        k: Le
      }), s.nodes.val = me.map((a) => [
        a[0],
        a[1],
        a[2]
      ]), s.elements.val = A, s.nodeInputs.val = {
        supports: Ke,
        loads: ue
      }, s.elementInputs.val = {
        elasticities: W,
        poissonsRatios: J,
        areas: fe,
        momentsOfInertiaZ: ve,
        momentsOfInertiaY: ge,
        torsionalConstants: Me,
        shearModuli: he,
        thicknesses: pe,
        densities: U,
        sectionShapes: xe
      };
      try {
        s.deformOutputs.val = Pa(s.nodes.val, s.elements.val, s.nodeInputs.val, s.elementInputs.val, N);
        const a = ba(s.nodes.val, s.elements.val, s.elementInputs.val, s.deformOutputs.val), o = s.deformOutputs.rawVal.deformations, n = /* @__PURE__ */ new Map();
        let t = 0, l = 0;
        s.elements.rawVal.forEach((v, D) => {
          if (v.length !== 4) return;
          const g = [];
          for (const $ of v) {
            const i = o == null ? void 0 : o.get($), S = i ? i[2] : 0, M = V * S;
            g.push(M), M < t && (t = M), M > l && (l = M);
          }
          n.set(D, g);
        }), a.pressure = n;
        const c = 9.80665, d = Math.min(-12 * c, l), m = Math.max(-26 * c, t);
        a.colorMapRanges = {
          pressure: [
            m,
            d
          ]
        }, s.analyzeOutputs.val = a;
      } catch (a) {
        console.error("Solver error:", a);
      }
      const Ae = s.deformOutputs.rawVal.deformations;
      let Ce = 1e-9;
      for (const a of ee) {
        const o = Ae == null ? void 0 : Ae.get(a);
        o && Number.isFinite(o[2]) && (Ce = Math.max(Ce, Math.abs(o[2])));
      }
      const ta = new Set(ee), be = Ye * 12, ie = (_a = document.querySelector("#viewer")) == null ? void 0 : _a.__settings, Ge = (a, o, n = 1) => {
        const t = a ? o : 0, c = -(Ce * Math.max(t, 1) + ya), d = n > 0 ? n : n < 0 ? -1 / n : 1, m = ka * d, v = Ia * d, D = [];
        for (const g of ee) {
          if (!ta.has(g)) continue;
          const $ = s.nodes.rawVal[g];
          if (!$) continue;
          const i = $[0], S = $[1], M = Ae == null ? void 0 : Ae.get(g), ze = (C) => Number.isFinite(C) ? C : 0, la = M ? ze(M[0]) : 0, ia = M ? ze(M[1]) : 0, ra = M ? ze(M[2]) : 0, $e = i + la * t, Oe = S + ia * t, Te = 0 + ra * t, da = Te - c, Pe = (C) => [
            i + ($e - i) * C,
            S + (Oe - S) * C,
            c + da * C
          ], [ca, ma, ua] = Pe(0), [fa, pa, va] = Pe(0.05), ye = [
            new G(ca, ma, ua),
            new G(fa, pa, va)
          ];
          for (let C = 0; C <= be; C++) {
            const Ma = 0.05 + 0.9 * (C / be), [ha, xa, _a2] = Pe(Ma), je = 2 * Math.PI * Ye * (C / be);
            ye.push(new G(ha + m * Math.cos(je), xa + m * Math.sin(je), _a2));
          }
          ye.push(new G($e, Oe, Te)), D.push(new Re(new Ze().setFromPoints(ye), wa));
          const E = v, ga = [
            new G(i - E, S - E, c),
            new G(i + E, S - E, c),
            new G(i + E, S + E, c),
            new G(i - E, S + E, c),
            new G(i - E, S - E, c)
          ];
          D.push(new Re(new Ze().setFromPoints(ga), Na));
        }
        return D;
      }, sa = He.v;
      ie ? Ca.derive(() => {
        if (He.v !== sa) return;
        const a = ie.deformedShape.val, o = ie.deformScale.val, n = ie.displayScale.val;
        s.objects3D.val = Ge(a, o, n);
      }) : s.objects3D.val = Ge(true, 1, 1);
    },
    runModal(e, s, r) {
      var _a, _b;
      const u = s.nodes.val, f = s.elements.val, h = s.nodeInputs.val, x = s.elementInputs.val;
      if (!(!u.length || !f.length || !((_a = x.densities) == null ? void 0 : _a.size))) try {
        const _ = za(u, f, h, x, 12);
        r.render(_, {
          title: `Zapata + Viga amarre Lv=${e.Lv}m`,
          properties: [
            `E=25 GPa  \u03BD=0.2  \u03C1=24 kN/m\xB3  Viga ${e.Bv}\xD7${e.Hv}m`
          ]
        }), console.log(`[Zapata+Viga Modal] f\u2081=${(_b = _.frequencies[0]) == null ? void 0 : _b.toFixed(4)} Hz`);
      } catch (_) {
        console.warn("Modal zapata-viga error:", _.message);
      }
    },
    async exportF2k(e) {
      const { downloadEdificioCimentacionF2k: s } = await La(async () => {
        const { downloadEdificioCimentacionF2k: I } = await import("./f2kCimentacionCompleta-DC7r5uTU.js");
        return {
          downloadEdificioCimentacionF2k: I
        };
      }, []), r = 9.80665, u = e.Lz1, f = e.Bz1, h = e.Lv, x = e.Bv, _ = e.Hv, b = e.Lz2, F = e.Bz2, z = e.tz, P = e.bc, y = e.ks, B = (f - F) / 2, ne = P / 2, te = f / 2, V = u + h + b / 2, se = F / 2 + B, re = u / 2, de = f / 2, ce = u + h + b / 2, R = B + F / 2, L = (e.useDead ?? 1) >= 0.5 ? 1 : 0, k = (e.useLive ?? 1) >= 0.5 ? 1 : 0, K = [
        {
          xC: re,
          yC: de,
          xCol: ne,
          yCol: te,
          Lz: u,
          Bz: f,
          tz: z,
          bc: P,
          P_dead_kN: L * (e.P1 ?? 0) * r,
          Mx_dead_kNm: L * (e.M1x ?? 0) * r,
          My_dead_kNm: L * (e.M1y ?? 0) * r,
          P_live_kN: k * (e.P1_L ?? 0) * r,
          Mx_live_kNm: k * (e.M1x_L ?? 0) * r,
          My_live_kNm: k * (e.M1y_L ?? 0) * r,
          label: 1
        },
        {
          xC: ce,
          yC: R,
          xCol: V,
          yCol: se,
          Lz: b,
          Bz: F,
          tz: z,
          bc: P,
          P_dead_kN: L * (e.P2 ?? 0) * r,
          Mx_dead_kNm: L * (e.M2x ?? 0) * r,
          My_dead_kNm: L * (e.M2y ?? 0) * r,
          P_live_kN: k * (e.P2_L ?? 0) * r,
          Mx_live_kNm: k * (e.M2x_L ?? 0) * r,
          My_live_kNm: k * (e.M2y_L ?? 0) * r,
          label: 2
        }
      ], O = [
        {
          x1: ne,
          y1: te,
          x2: V,
          y2: se,
          h: _,
          b: x,
          z: 0
        }
      ];
      try {
        s({
          zapatas: K,
          vigasAmarre: O,
          ks_kNm3: y,
          Z: 0
        }, `ZapataVigaAmarre_Hekatan_${Date.now()}.f2k`);
        const I = (e.P1 ?? 0) + (e.P1_L ?? 0), Z = (e.P2 ?? 0) + (e.P2_L ?? 0), le = 1.4 * (e.P1 ?? 0) + 1.7 * (e.P1_L ?? 0), H = 1.4 * (e.P2 ?? 0) + 1.7 * (e.P2_L ?? 0);
        alert(`\u2705 F2K exportado con 2 zapatas + viga de amarre:

\u2022 Z1 ${u}\xD7${f} m \u2014 PD=${e.P1} + PL=${e.P1_L ?? 0} = ${I} tonf | Pu=${le.toFixed(1)} tonf
\u2022 Z2 ${b}\xD7${F} m \u2014 PD=${e.P2} + PL=${e.P2_L ?? 0} = ${Z} tonf | Pu=${H.toFixed(1)} tonf
\u2022 Viga amarre ${x}\xD7${_} m, Lv=${h} m
\u2022 ks = ${y.toFixed(0)} kN/m\xB3

Patrones de carga incluidos: Dead (+peso propio), Live
Combinaci\xF3n: Pu = 1.4D + 1.7L (ACI 318 nominal Guerra MDI)

Abrilo en SAFE 20.x: File \u2192 Import \u2192 SAFE Text File (.f2k)`), console.log(`[F2K Zapata+Viga] exportado: Z1=${u}\xD7${f}, Z2=${b}\xD7${F}, ks=${y} kN/m\xB3`);
      } catch (I) {
        alert(`\u274C Error exportando F2K: ${I.message}`), console.error(I);
      }
    }
  };
});
export {
  __tla,
  Ga as z
};
