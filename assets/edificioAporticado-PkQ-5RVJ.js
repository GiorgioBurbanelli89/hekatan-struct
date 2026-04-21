import { a as wo } from "./analyze-ClLKGn9k.js";
import { m as Eo, d as Go, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
let Do;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let No, n, R;
  No = 24;
  n = (s, m, L, z, X, C) => ({
    default: L,
    min: z,
    max: X,
    step: C,
    label: m,
    folder: s
  });
  R = (s, m, L, z) => ({
    default: L,
    label: m,
    folder: s,
    options: z
  });
  Do = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "displacementZ",
    availableShellResults: [
      "displacementZ",
      "bendingXX",
      "vonMises"
    ],
    hasModal: true,
    params: {
      nVanosX: n("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
      nVanosY: n("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
      nPisos: n("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
      spanX: n("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: n("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: n("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: n("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: n("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: n("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: n("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      svX_1: n("Luces por vano", "svX #1 (m)", 0, 0, 12, 0.5),
      svX_2: n("Luces por vano", "svX #2 (m)", 0, 0, 12, 0.5),
      svX_3: n("Luces por vano", "svX #3 (m)", 0, 0, 12, 0.5),
      svX_4: n("Luces por vano", "svX #4 (m)", 0, 0, 12, 0.5),
      svX_5: n("Luces por vano", "svX #5 (m)", 0, 0, 12, 0.5),
      svX_6: n("Luces por vano", "svX #6 (m)", 0, 0, 12, 0.5),
      svY_1: n("Luces por vano", "svY #1 (m)", 0, 0, 12, 0.5),
      svY_2: n("Luces por vano", "svY #2 (m)", 0, 0, 12, 0.5),
      svY_3: n("Luces por vano", "svY #3 (m)", 0, 0, 12, 0.5),
      svY_4: n("Luces por vano", "svY #4 (m)", 0, 0, 12, 0.5),
      svY_5: n("Luces por vano", "svY #5 (m)", 0, 0, 12, 0.5),
      svY_6: n("Luces por vano", "svY #6 (m)", 0, 0, 12, 0.5),
      hP_1: n("Alturas por piso", "Piso 1 (m)", 0, 0, 6, 0.1),
      hP_2: n("Alturas por piso", "Piso 2 (m)", 0, 0, 6, 0.1),
      hP_3: n("Alturas por piso", "Piso 3 (m)", 0, 0, 6, 0.1),
      hP_4: n("Alturas por piso", "Piso 4 (m)", 0, 0, 6, 0.1),
      hP_5: n("Alturas por piso", "Piso 5 (m)", 0, 0, 6, 0.1),
      hP_6: n("Alturas por piso", "Piso 6 (m)", 0, 0, 6, 0.1),
      hP_7: n("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: n("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: R("Secciones", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: R("Secciones", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      fcConcr: n("Secciones", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: n("Secciones", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: n("Secciones", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: n("Secciones", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: n("Secciones", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: R("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: n("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: n("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: n("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: n("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: n("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: n("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: n("Avanzado", "Vigas secundarias (0/1)", 0, 0, 1, 1),
      nVSec: n("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: n("Avanzado", "Dir secundarias (0=X,1=Y)", 0, 0, 1, 1),
      bracesMode: R("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: n("Avanzado", "Losa (0/1)", 0, 0, 1, 1),
      slabT: n("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01)
    },
    build(s, m) {
      const L = Math.round(s.nVanosX), z = Math.round(s.nVanosY), X = Math.round(s.nPisos), C = Math.max(1, Math.round(s.nSubViga)), G = Math.max(1, Math.round(s.nSubCol)), Y = s.fcConcr * 0.0981, S = 4700 * Math.sqrt(Y) * 1e3, b = 2e8, V = 0.2, A = 0.3, q = S / (2 * (1 + V)), Q = b / (2 * (1 + A)), vo = [
        s.svX_1,
        s.svX_2,
        s.svX_3,
        s.svX_4,
        s.svX_5,
        s.svX_6
      ].slice(0, L).map((o) => o > 0 ? o : s.spanX), fo = [
        s.svY_1,
        s.svY_2,
        s.svY_3,
        s.svY_4,
        s.svY_5,
        s.svY_6
      ].slice(0, z).map((o) => o > 0 ? o : s.spanY), mo = [
        s.hP_1,
        s.hP_2,
        s.hP_3,
        s.hP_4,
        s.hP_5,
        s.hP_6,
        s.hP_7,
        s.hP_8
      ].slice(0, X).map((o) => o > 0 ? o : s.hPiso), l = [];
      s.Lvix > 0 && l.push(-s.Lvix), l.push(0);
      for (let o = 0; o < L; o++) l.push(l[l.length - 1] + vo[o]);
      s.Lvdx > 0 && l.push(l[l.length - 1] + s.Lvdx);
      const c = [];
      s.Lviy > 0 && c.push(-s.Lviy), c.push(0);
      for (let o = 0; o < z; o++) c.push(c[c.length - 1] + fo[o]);
      s.Lvdy > 0 && c.push(c[c.length - 1] + s.Lvdy);
      const M = [
        0
      ];
      for (let o = 0; o < X; o++) M.push(M[M.length - 1] + mo[o]);
      const go = (o) => s.Lvix > 0 && o === 0 || s.Lvdx > 0 && o === l.length - 1, $o = (o) => s.Lviy > 0 && o === 0 || s.Lvdy > 0 && o === c.length - 1, P = (o, e) => go(o) || $o(e), u = [], g = {};
      for (let o = 0; o < M.length; o++) for (let e = 0; e < c.length; e++) for (let a = 0; a < l.length; a++) o === 0 && P(a, e) || (g[`${a},${e},${o}`] = u.length, u.push([
        l[a],
        c[e],
        M[o]
      ]));
      const f = [], U = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set(), oo = /* @__PURE__ */ new Set(), j = (o, e, a, r) => {
        if (a <= 1) {
          r.add(f.length), f.push([
            o,
            e
          ]);
          return;
        }
        const t = u[o], v = u[e];
        let i = o;
        for (let h = 1; h < a; h++) {
          const p = h / a, $ = u.length;
          u.push([
            t[0] + (v[0] - t[0]) * p,
            t[1] + (v[1] - t[1]) * p,
            t[2] + (v[2] - t[2]) * p
          ]), r.add(f.length), f.push([
            i,
            $
          ]), i = $;
        }
        r.add(f.length), f.push([
          i,
          e
        ]);
      };
      for (let o = 0; o < M.length - 1; o++) for (let e = 0; e < c.length; e++) for (let a = 0; a < l.length; a++) P(a, e) || j(g[`${a},${e},${o}`], g[`${a},${e},${o + 1}`], G, U);
      for (let o = 1; o < M.length; o++) for (let e = 0; e < c.length; e++) for (let a = 0; a < l.length - 1; a++) j(g[`${a},${e},${o}`], g[`${a + 1},${e},${o}`], C, N);
      for (let o = 1; o < M.length; o++) for (let e = 0; e < l.length; e++) for (let a = 0; a < c.length - 1; a++) j(g[`${e},${a},${o}`], g[`${e},${a + 1},${o}`], C, N);
      if (s.vSecOn >= 0.5 && s.nVSec >= 1) {
        const o = Math.round(s.nVSec), e = (r, t, v) => {
          for (let h = 0; h < u.length; h++) if (Math.abs(u[h][0] - r) < 1e-6 && Math.abs(u[h][1] - t) < 1e-6 && Math.abs(u[h][2] - v) < 1e-6) return h;
          const i = u.length;
          return u.push([
            r,
            t,
            v
          ]), i;
        }, a = s.vSecDir < 0.5 ? "x" : "y";
        for (let r = 1; r < M.length; r++) if (a === "x") for (let t = 0; t < c.length - 1; t++) {
          const v = c[t], i = c[t + 1];
          for (let h = 1; h <= o; h++) {
            const p = v + h / (o + 1) * (i - v), $ = [];
            for (let d = 0; d < l.length; d++) $.push(e(l[d], p, M[r]));
            for (let d = 0; d < l.length - 1; d++) N.add(f.length), f.push([
              $[d],
              $[d + 1]
            ]);
          }
        }
        else for (let t = 0; t < l.length - 1; t++) {
          const v = l[t], i = l[t + 1];
          for (let h = 1; h <= o; h++) {
            const p = v + h / (o + 1) * (i - v), $ = [];
            for (let d = 0; d < c.length; d++) $.push(e(p, c[d], M[r]));
            for (let d = 0; d < c.length - 1; d++) N.add(f.length), f.push([
              $[d],
              $[d + 1]
            ]);
          }
        }
      }
      const y = Math.round(s.bracesMode);
      if (y > 0) {
        const o = y === 1 || y === 2 || y === 3, e = y === 1 || y === 2 || y === 4, a = M.length - 1;
        for (let r = 0; r < a; r++) {
          if (o) for (let t = 0; t < c.length; t++) {
            if (y === 1 && t !== 0 && t !== c.length - 1) continue;
            const v = Math.floor((l.length - 1) / 2);
            for (let i = 0; i < l.length - 1; i++) {
              if (y === 1 && i !== v || P(i, t) || P(i + 1, t)) continue;
              const h = g[`${i},${t},${r}`], p = g[`${i + 1},${t},${r + 1}`], $ = g[`${i + 1},${t},${r}`], d = g[`${i},${t},${r + 1}`];
              h !== void 0 && p !== void 0 && f.push([
                h,
                p
              ]), $ !== void 0 && d !== void 0 && f.push([
                $,
                d
              ]);
            }
          }
          if (e) for (let t = 0; t < l.length; t++) {
            if (y === 1 && t !== 0 && t !== l.length - 1) continue;
            const v = Math.floor((c.length - 1) / 2);
            for (let i = 0; i < c.length - 1; i++) {
              if (y === 1 && i !== v || P(t, i) || P(t, i + 1)) continue;
              const h = g[`${t},${i},${r}`], p = g[`${t},${i + 1},${r + 1}`], $ = g[`${t},${i + 1},${r}`], d = g[`${t},${i},${r + 1}`];
              h !== void 0 && p !== void 0 && f.push([
                h,
                p
              ]), $ !== void 0 && d !== void 0 && f.push([
                $,
                d
              ]);
            }
          }
        }
      }
      if (s.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), e = (t, v, i) => `${Math.round(t * 1e4)},${Math.round(v * 1e4)},${Math.round(i * 1e4)}`;
        for (let t = 0; t < u.length; t++) o.set(e(u[t][0], u[t][1], u[t][2]), t);
        const a = C, r = C;
        for (let t = 1; t < M.length; t++) {
          const v = M[t];
          for (let i = 0; i < l.length - 1; i++) for (let h = 0; h < c.length - 1; h++) {
            const p = l[i], $ = l[i + 1], d = c[h], Io = c[h + 1], E = [];
            for (let x = 0; x <= r; x++) {
              const _ = [];
              for (let K = 0; K <= a; K++) {
                const lo = p + K / a * ($ - p), co = d + x / r * (Io - d), ro = e(lo, co, v), ho = o.get(ro);
                if (ho !== void 0) _.push(ho);
                else {
                  const uo = u.length;
                  u.push([
                    lo,
                    co,
                    v
                  ]), o.set(ro, uo), _.push(uo);
                }
              }
              E.push(_);
            }
            for (let x = 0; x < r; x++) for (let _ = 0; _ < a; _++) oo.add(f.length), f.push([
              E[x][_],
              E[x][_ + 1],
              E[x + 1][_ + 1],
              E[x + 1][_]
            ]);
          }
        }
      }
      const so = Math.round(s.apoyo), po = so === 0 ? [
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
      ], to = /* @__PURE__ */ new Map();
      for (let o = 0; o < c.length; o++) for (let e = 0; e < l.length; e++) P(e, o) || to.set(g[`${e},${o},0`], [
        ...po
      ]);
      const O = /* @__PURE__ */ new Map(), eo = s.CM + s.CV;
      if (eo !== 0) for (let o = 1; o < M.length; o++) for (let e = 0; e < c.length; e++) for (let a = 0; a < l.length; a++) {
        const r = `${a},${e},${o}`;
        g[r] !== void 0 && O.set(g[r], [
          0,
          0,
          eo,
          0,
          0,
          0
        ]);
      }
      if (s.Ex !== 0 || s.Ey !== 0) {
        const o = g[`${l.length - 1 - (s.Lvdx > 0 ? 1 : 0)},${s.Lviy > 0 ? 1 : 0},${X}`];
        if (o !== void 0) {
          const e = O.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          O.set(o, [
            e[0] + s.Ex,
            e[1] + s.Ey,
            e[2],
            e[3],
            e[4],
            e[5]
          ]);
        }
      }
      const k = s.colSize, D = s.colSize, Mo = k * D, yo = k * D ** 3 / 12, xo = D * k ** 3 / 12, _o = 0.14 * Math.pow(Math.min(k, D), 4), I = s.vigaB, w = s.vigaH, zo = I * w, Co = I * w ** 3 / 12, Lo = w * I ** 3 / 12, Xo = 0.21 * Math.pow(Math.min(I, w), 3) * Math.max(I, w), Po = s.matCol < 0.5 ? S : b, Yo = s.matCol < 0.5 ? q : Q, So = s.matCol < 0.5 ? V : A, Vo = s.matViga < 0.5 ? S : b, Ao = s.matViga < 0.5 ? q : Q, bo = s.matViga < 0.5 ? V : A, B = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), ao = /* @__PURE__ */ new Map();
      for (let o = 0; o < f.length; o++) no.set(o, No), oo.has(o) ? (B.set(o, S), H.set(o, q), T.set(o, V), ao.set(o, s.slabT)) : U.has(o) ? (B.set(o, Po), H.set(o, Yo), T.set(o, So), F.set(o, Mo), J.set(o, yo), Z.set(o, xo), W.set(o, _o)) : (B.set(o, Vo), H.set(o, Ao), T.set(o, bo), F.set(o, zo), J.set(o, Co), Z.set(o, Lo), W.set(o, Xo));
      m.nodes.val = u, m.elements.val = f, m.nodeInputs.val = {
        supports: to,
        loads: O
      }, m.elementInputs.val = {
        elasticities: B,
        shearModuli: H,
        areas: F,
        momentsOfInertiaZ: J,
        momentsOfInertiaY: Z,
        torsionalConstants: W,
        densities: no,
        poissonsRatios: T,
        thicknesses: ao
      };
      const io = Go(u, f, m.nodeInputs.val, m.elementInputs.val);
      m.deformOutputs.val = io, m.analyzeOutputs.val = wo(u, f, m.elementInputs.val, io), m.objects3D.val = [];
    },
    runModal(s, m, L) {
      var _a, _b;
      const z = m.nodes.val, X = m.elements.val, C = m.nodeInputs.val, G = m.elementInputs.val;
      if (!(!z.length || !X.length || !((_a = C.supports) == null ? void 0 : _a.size) || !((_b = G.densities) == null ? void 0 : _b.size))) try {
        const Y = Eo(z, X, C, G, 12), S = Math.round(s.nVanosX), b = Math.round(s.nVanosY), V = Math.round(s.nPisos);
        L.render(Y, {
          title: `Edificio ${S}\xD7${b} vanos \xD7 ${V} pisos`,
          properties: [
            `Material cols=${s.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${s.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${s.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(s.apoyo)]}  ${s.slabOn >= 0.5 ? "+ Losa " : ""}${s.bracesMode > 0 ? "+ Diagonales" : ""}`
          ]
        });
        const A = Y.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${A.toFixed(4)} Hz, T\u2081=${(1 / A).toFixed(4)} s`);
      } catch (Y) {
        console.warn("Modal edificio error:", Y.message);
      }
    }
  };
});
export {
  __tla,
  Do as e
};
