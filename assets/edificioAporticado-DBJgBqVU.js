import { a as Tt } from "./analyze-ClLKGn9k.js";
import { m as Yt, d as It, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { C as Xt, b as pt, S as Nt, c as Gt, L as kt, B as Dt, V as yt, a as Rt } from "./Text-BCbgLTjz.js";
let jt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function k(t, l, P, g, M = "#00e5ff") {
    const i = document.createElement("canvas"), c = i.getContext("2d");
    c.font = "bold 96px system-ui, -apple-system, sans-serif";
    const C = Math.ceil(c.measureText(t).width);
    i.width = C + 32 * 2, i.height = 96 + 32 * 2, c.font = "bold 96px system-ui, -apple-system, sans-serif", c.fillStyle = "rgba(0,0,0,0.75)";
    const B = i.height / 2;
    c.beginPath(), c.moveTo(B, 0), c.arcTo(i.width, 0, i.width, B, B), c.arcTo(i.width, i.height, i.width - B, i.height, B), c.arcTo(0, i.height, 0, i.height - B, B), c.arcTo(0, 0, B, 0, B), c.closePath(), c.fill(), c.fillStyle = M, c.textBaseline = "middle", c.fillText(t, 32, i.height / 2);
    const O = new Xt(i);
    O.minFilter = pt, O.magFilter = pt, O.anisotropy = 16, O.needsUpdate = true;
    const N = new Nt({
      map: O,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), F = new Gt(N);
    F.position.set(l, P, g);
    const r = 0.45, h = i.width / i.height;
    return F.scale.set(r * h, r, 1), F.userData.isCota = true, F;
  }
  function Y(t, l, P = 58879) {
    const g = new kt({
      color: P,
      depthTest: false
    }), M = new Dt().setFromPoints([
      new yt(...t),
      new yt(...l)
    ]), a = new Rt(M, g);
    return a.renderOrder = 999, a.userData.isCota = true, a;
  }
  function Kt(t, l, P) {
    const g = [], M = l[l.length - 1] + 1, a = t[t.length - 1] + 1, _ = P[0];
    for (let $ = 0; $ < t.length - 1; $++) {
      const i = t[$], c = t[$ + 1], C = c - i;
      g.push(Y([
        i,
        M,
        _
      ], [
        c,
        M,
        _
      ])), g.push(Y([
        i,
        M - 0.15,
        _
      ], [
        i,
        M + 0.15,
        _
      ])), g.push(Y([
        c,
        M - 0.15,
        _
      ], [
        c,
        M + 0.15,
        _
      ])), g.push(k(`${C.toFixed(2)} m`, (i + c) / 2, M + 0.35, _));
    }
    for (let $ = 0; $ < l.length - 1; $++) {
      const i = l[$], c = l[$ + 1], C = c - i;
      g.push(Y([
        a,
        i,
        _
      ], [
        a,
        c,
        _
      ])), g.push(Y([
        a - 0.15,
        i,
        _
      ], [
        a + 0.15,
        i,
        _
      ])), g.push(Y([
        a - 0.15,
        c,
        _
      ], [
        a + 0.15,
        c,
        _
      ])), g.push(k(`${C.toFixed(2)} m`, a + 0.35, (i + c) / 2, _));
    }
    const S = t[0] - 1, w = l[0];
    for (let $ = 0; $ < P.length - 1; $++) {
      const i = P[$], c = P[$ + 1], C = c - i;
      g.push(Y([
        S,
        w,
        i
      ], [
        S,
        w,
        c
      ])), g.push(Y([
        S - 0.15,
        w,
        i
      ], [
        S + 0.15,
        w,
        i
      ])), g.push(Y([
        S - 0.15,
        w,
        c
      ], [
        S + 0.15,
        w,
        c
      ])), g.push(k(`Piso ${$ + 1}: ${C.toFixed(2)} m`, S - 0.5, w, (i + c) / 2));
    }
    return g;
  }
  let Jt, f, I;
  Jt = 24;
  f = (t, l, P, g, M, a) => ({
    default: P,
    min: g,
    max: M,
    step: a,
    label: l,
    folder: t
  });
  I = (t, l, P, g) => ({
    default: P,
    label: l,
    folder: t,
    options: g
  });
  jt = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      nVanosX: {
        ...f("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...f("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...f("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: f("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: f("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: f("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: f("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: f("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: f("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: f("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: f("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: f("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: I("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: I("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: I("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: f("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: f("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: f("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: f("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: f("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: I("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: f("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: f("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: f("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: f("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: f("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: f("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: I("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: f("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: I("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: I("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: I("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: f("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01)
    },
    dynamicParams(t) {
      const l = {}, P = Math.round(t.nPisos ?? 3), g = Math.round(t.nVanosX ?? 2), M = Math.round(t.nVanosY ?? 2);
      for (let a = 1; a <= P; a++) l[`hP_${a}`] = f("Alturas por piso", `h Piso ${a} (m)`, 0, 0, 6, 0.1), l[`colB_p${a}`] = f("Secciones por piso", `b col P${a} (m)`, 0, 0, 1, 0.05), l[`colH_p${a}`] = f("Secciones por piso", `h col P${a} (m)`, 0, 0, 1, 0.05), l[`vigaB_p${a}`] = f("Secciones por piso", `b viga P${a} (m)`, 0, 0, 0.8, 0.05), l[`vigaH_p${a}`] = f("Secciones por piso", `h viga P${a} (m)`, 0, 0, 1, 0.05);
      for (let a = 1; a <= g; a++) l[`svX_${a}`] = f("Luces por vano", `svX #${a} (m)`, 0, 0, 12, 0.5);
      for (let a = 1; a <= M; a++) l[`svY_${a}`] = f("Luces por vano", `svY #${a} (m)`, 0, 0, 12, 0.5);
      return l;
    },
    computedLabels(t, l) {
      var _a;
      const g = (_a = l.deformOutputs.rawVal) == null ? void 0 : _a.reactions, M = l.nodes.rawVal;
      if (!g || !(M == null ? void 0 : M.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let a = 0, _ = 0, S = 0, w = -1, $ = 0, i = -1;
      g.forEach((r, h) => {
        const p = M[h];
        if (!p || Math.abs(p[2]) > 1e-6) return;
        const X = r[2], D = r[3], H = r[4];
        Math.abs(X) > Math.abs(a) && (a = X, w = h, p[0], p[1]), X > 0 && X > Math.abs($) && ($ = X, i = h), Math.abs(D) > Math.abs(_) && (_ = D), Math.abs(H) > Math.abs(S) && (S = H);
      });
      const c = Math.abs(a) / 9.80665, C = Math.abs(_) / 9.80665, B = Math.abs(S) / 9.80665, O = $ / 9.80665, N = Math.round(t.nPisos), F = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${c.toFixed(2)} tonf (nodo ${w})`,
        Mx: `${C.toFixed(2)} tonf\xB7m`,
        My: `${B.toFixed(2)} tonf\xB7m`
      };
      return O > 0.01 && (F["\u26A0 Uplift"] = `${O.toFixed(2)} tonf (nodo ${i})`), F.Pisos = `${N}`, F["Copiar a \u2192 zapata-aislada"] = `P=${c.toFixed(1)}, Mx=${C.toFixed(1)}, My=${B.toFixed(1)}`, F;
    },
    build(t, l) {
      const P = Math.round(t.nVanosX), g = Math.round(t.nVanosY), M = Math.round(t.nPisos), a = Math.max(1, Math.round(t.nSubViga)), _ = Math.max(1, Math.round(t.nSubCol)), S = t.fcConcr * 0.0981, w = 4700 * Math.sqrt(S) * 1e3, $ = 2e8, i = 0.2, c = 0.3, C = w / (2 * (1 + i)), B = $ / (2 * (1 + c)), O = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, P).map((o) => o > 0 ? o : t.spanX), N = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, g).map((o) => o > 0 ? o : t.spanY), F = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, M).map((o) => o > 0 ? o : t.hPiso), r = [];
      t.Lvix > 0 && r.push(-t.Lvix), r.push(0);
      for (let o = 0; o < P; o++) r.push(r[r.length - 1] + O[o]);
      t.Lvdx > 0 && r.push(r[r.length - 1] + t.Lvdx);
      const h = [];
      t.Lviy > 0 && h.push(-t.Lviy), h.push(0);
      for (let o = 0; o < g; o++) h.push(h[h.length - 1] + N[o]);
      t.Lvdy > 0 && h.push(h[h.length - 1] + t.Lvdy);
      const p = [
        0
      ];
      for (let o = 0; o < M; o++) p.push(p[p.length - 1] + F[o]);
      const X = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === r.length - 1, D = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === h.length - 1, H = (o, e) => X(o) || D(e), b = [], z = {};
      for (let o = 0; o < p.length; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length; n++) o === 0 && H(n, e) || (z[`${n},${e},${o}`] = b.length, b.push([
        r[n],
        h[e],
        p[o]
      ]));
      const y = [], st = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), at = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Map(), j = (o, e, n, u, s) => {
        if (n <= 1) {
          u.add(y.length), K.set(y.length, s), y.push([
            o,
            e
          ]);
          return;
        }
        const x = b[o], d = b[e];
        let m = o;
        for (let L = 1; L < n; L++) {
          const V = L / n, v = b.length;
          b.push([
            x[0] + (d[0] - x[0]) * V,
            x[1] + (d[1] - x[1]) * V,
            x[2] + (d[2] - x[2]) * V
          ]), u.add(y.length), K.set(y.length, s), y.push([
            m,
            v
          ]), m = v;
        }
        u.add(y.length), K.set(y.length, s), y.push([
          m,
          e
        ]);
      };
      for (let o = 0; o < p.length - 1; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length; n++) H(n, e) || j(z[`${n},${e},${o}`], z[`${n},${e},${o + 1}`], _, st, o);
      for (let o = 1; o < p.length; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length - 1; n++) j(z[`${n},${e},${o}`], z[`${n + 1},${e},${o}`], a, R, o - 1);
      for (let o = 1; o < p.length; o++) for (let e = 0; e < r.length; e++) for (let n = 0; n < h.length - 1; n++) j(z[`${e},${n},${o}`], z[`${e},${n + 1},${o}`], a, R, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), e = (u, s, x) => {
          for (let m = 0; m < b.length; m++) if (Math.abs(b[m][0] - u) < 1e-6 && Math.abs(b[m][1] - s) < 1e-6 && Math.abs(b[m][2] - x) < 1e-6) return m;
          const d = b.length;
          return b.push([
            u,
            s,
            x
          ]), d;
        }, n = t.vSecDir < 0.5 ? "x" : "y";
        for (let u = 1; u < p.length; u++) if (n === "x") for (let s = 0; s < h.length - 1; s++) {
          const x = h[s], d = h[s + 1];
          for (let m = 1; m <= o; m++) {
            const L = x + m / (o + 1) * (d - x), V = [];
            for (let v = 0; v < r.length; v++) V.push(e(r[v], L, p[u]));
            for (let v = 0; v < r.length - 1; v++) R.add(y.length), y.push([
              V[v],
              V[v + 1]
            ]);
          }
        }
        else for (let s = 0; s < r.length - 1; s++) {
          const x = r[s], d = r[s + 1];
          for (let m = 1; m <= o; m++) {
            const L = x + m / (o + 1) * (d - x), V = [];
            for (let v = 0; v < h.length; v++) V.push(e(L, h[v], p[u]));
            for (let v = 0; v < h.length - 1; v++) R.add(y.length), y.push([
              V[v],
              V[v + 1]
            ]);
          }
        }
      }
      const A = Math.round(t.bracesMode);
      if (A > 0) {
        const o = A === 1 || A === 2 || A === 3, e = A === 1 || A === 2 || A === 4, n = p.length - 1;
        for (let u = 0; u < n; u++) {
          if (o) for (let s = 0; s < h.length; s++) {
            if (A === 1 && s !== 0 && s !== h.length - 1) continue;
            const x = Math.floor((r.length - 1) / 2);
            for (let d = 0; d < r.length - 1; d++) {
              if (A === 1 && d !== x || H(d, s) || H(d + 1, s)) continue;
              const m = z[`${d},${s},${u}`], L = z[`${d + 1},${s},${u + 1}`], V = z[`${d + 1},${s},${u}`], v = z[`${d},${s},${u + 1}`];
              m !== void 0 && L !== void 0 && y.push([
                m,
                L
              ]), V !== void 0 && v !== void 0 && y.push([
                V,
                v
              ]);
            }
          }
          if (e) for (let s = 0; s < r.length; s++) {
            if (A === 1 && s !== 0 && s !== r.length - 1) continue;
            const x = Math.floor((h.length - 1) / 2);
            for (let d = 0; d < h.length - 1; d++) {
              if (A === 1 && d !== x || H(s, d) || H(s, d + 1)) continue;
              const m = z[`${s},${d},${u}`], L = z[`${s},${d + 1},${u + 1}`], V = z[`${s},${d + 1},${u}`], v = z[`${s},${d},${u + 1}`];
              m !== void 0 && L !== void 0 && y.push([
                m,
                L
              ]), V !== void 0 && v !== void 0 && y.push([
                V,
                v
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), e = (s, x, d) => `${Math.round(s * 1e4)},${Math.round(x * 1e4)},${Math.round(d * 1e4)}`;
        for (let s = 0; s < b.length; s++) o.set(e(b[s][0], b[s][1], b[s][2]), s);
        const n = a, u = a;
        for (let s = 1; s < p.length; s++) {
          const x = p[s];
          for (let d = 0; d < r.length - 1; d++) for (let m = 0; m < h.length - 1; m++) {
            const L = r[d], V = r[d + 1], v = h[m], Et = h[m + 1], G = [];
            for (let E = 0; E <= u; E++) {
              const T = [];
              for (let nt = 0; nt <= n; nt++) {
                const vt = L + nt / n * (V - L), $t = v + E / u * (Et - v), Mt = e(vt, $t, x), _t = o.get(Mt);
                if (_t !== void 0) T.push(_t);
                else {
                  const xt = b.length;
                  b.push([
                    vt,
                    $t,
                    x
                  ]), o.set(Mt, xt), T.push(xt);
                }
              }
              G.push(T);
            }
            for (let E = 0; E < u; E++) for (let T = 0; T < n; T++) at.add(y.length), y.push([
              G[E][T],
              G[E][T + 1],
              G[E + 1][T + 1],
              G[E + 1][T]
            ]);
          }
        }
      }
      const it = Math.round(t.apoyo), bt = it === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : it === 1 ? [
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
      ], ct = /* @__PURE__ */ new Map();
      for (let o = 0; o < h.length; o++) for (let e = 0; e < r.length; e++) H(e, o) || ct.set(z[`${e},${o},0`], [
        ...bt
      ]);
      const J = /* @__PURE__ */ new Map(), lt = t.CM + t.CV;
      if (lt !== 0) for (let o = 1; o < p.length; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length; n++) {
        const u = `${n},${e},${o}`;
        z[u] !== void 0 && J.set(z[u], [
          0,
          0,
          lt,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = z[`${r.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${M}`];
        if (o !== void 0) {
          const e = J.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          J.set(o, [
            e[0] + t.Ex,
            e[1] + t.Ey,
            e[2],
            e[3],
            e[4],
            e[5]
          ]);
        }
      }
      const rt = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), ht = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), dt = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), gt = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), Pt = (o) => {
        const e = rt[o] ?? t.colSize, n = ht[o] ?? t.colSize;
        return {
          A: e * n,
          Iz: e * n ** 3 / 12,
          Iy: n * e ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(e, n), 4)
        };
      }, St = (o) => {
        const e = dt[o] ?? t.vigaB, n = gt[o] ?? t.vigaH;
        return {
          A: e * n,
          Iz: e * n ** 3 / 12,
          Iy: n * e ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(e, n), 3) * Math.max(e, n)
        };
      }, zt = t.matCol < 0.5 ? w : $, Vt = t.matCol < 0.5 ? C : B, wt = t.matCol < 0.5 ? i : c, Lt = t.matViga < 0.5 ? w : $, Bt = t.matViga < 0.5 ? C : B, Ct = t.matViga < 0.5 ? i : c, U = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map();
      for (let o = 0; o < y.length; o++) {
        ft.set(o, Jt);
        const e = K.get(o) ?? 0;
        if (at.has(o)) U.set(o, w), q.set(o, C), W.set(o, i), ut.set(o, t.slabT);
        else if (st.has(o)) {
          const n = Pt(Math.min(e, 7));
          U.set(o, zt), q.set(o, Vt), W.set(o, wt), Z.set(o, n.A), Q.set(o, n.Iz), tt.set(o, n.Iy), ot.set(o, n.J);
        } else {
          const n = St(Math.min(e, 7));
          U.set(o, Lt), q.set(o, Bt), W.set(o, Ct), Z.set(o, n.A), Q.set(o, n.Iz), tt.set(o, n.Iy), ot.set(o, n.J);
        }
      }
      l.nodes.val = b, l.elements.val = y, l.nodeInputs.val = {
        supports: ct,
        loads: J
      }, l.elementInputs.val = {
        elasticities: U,
        shearModuli: q,
        areas: Z,
        momentsOfInertiaZ: Q,
        momentsOfInertiaY: tt,
        torsionalConstants: ot,
        densities: ft,
        poissonsRatios: W,
        thicknesses: ut
      };
      const mt = It(b, y, l.nodeInputs.val, l.elementInputs.val);
      l.deformOutputs.val = mt, l.analyzeOutputs.val = Tt(b, y, l.elementInputs.val, mt);
      const et = Kt(r, h, p), Ft = rt[0], At = ht[0], Ot = dt[0], Ht = gt[0];
      et.push(k(`Col ${(Ft * 100).toFixed(0)}\xD7${(At * 100).toFixed(0)} cm`, r[0] + 0.3, h[0] + 0.3, p[1] * 0.5, "#ffaa00")), et.push(k(`Viga ${(Ot * 100).toFixed(0)}\xD7${(Ht * 100).toFixed(0)} cm`, (r[0] + r[1]) / 2, h[0], p[1] + 0.2, "#ffaa00")), l.objects3D.val = et;
    },
    runModal(t, l, P) {
      var _a, _b;
      const g = l.nodes.val, M = l.elements.val, a = l.nodeInputs.val, _ = l.elementInputs.val;
      if (!(!g.length || !M.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = _.densities) == null ? void 0 : _b.size))) try {
        const S = Yt(g, M, a, _, 12), w = Math.round(t.nVanosX), $ = Math.round(t.nVanosY), i = Math.round(t.nPisos);
        P.render(S, {
          title: `Edificio ${w}\xD7${$} vanos \xD7 ${i} pisos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}  ${t.slabOn >= 0.5 ? "+ Losa " : ""}${t.bracesMode > 0 ? "+ Diagonales" : ""}`
          ]
        });
        const c = S.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${c.toFixed(4)} Hz, T\u2081=${(1 / c).toFixed(4)} s`);
      } catch (S) {
        console.warn("Modal edificio error:", S.message);
      }
    }
  };
});
export {
  __tla,
  jt as e
};
