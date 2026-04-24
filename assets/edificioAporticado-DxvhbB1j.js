import { a as Yt } from "./analyze-ClLKGn9k.js";
import { m as Xt, d as Nt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { C as Dt, b as bt, S as Gt, c as kt, L as Rt, B as Kt, V as Pt, a as Jt } from "./Text-BCbgLTjz.js";
let oo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function G(t, a, p, u, m = "#00e5ff") {
    const i = document.createElement("canvas"), c = i.getContext("2d");
    c.font = "bold 96px system-ui, -apple-system, sans-serif";
    const B = Math.ceil(c.measureText(t).width);
    i.width = B + 32 * 2, i.height = 96 + 32 * 2, c.font = "bold 96px system-ui, -apple-system, sans-serif", c.fillStyle = "rgba(0,0,0,0.75)";
    const C = i.height / 2;
    c.beginPath(), c.moveTo(C, 0), c.arcTo(i.width, 0, i.width, C, C), c.arcTo(i.width, i.height, i.width - C, i.height, C), c.arcTo(0, i.height, 0, i.height - C, C), c.arcTo(0, 0, C, 0, C), c.closePath(), c.fill(), c.fillStyle = m, c.textBaseline = "middle", c.fillText(t, 32, i.height / 2);
    const A = new Dt(i);
    A.minFilter = bt, A.magFilter = bt, A.anisotropy = 16, A.needsUpdate = true;
    const N = new Gt({
      map: A,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), F = new kt(N);
    F.position.set(a, p, u);
    const r = 0.45, h = i.width / i.height;
    return F.scale.set(r * h, r, 1), F.userData.isCota = true, F;
  }
  function I(t, a, p = 58879) {
    const u = new Rt({
      color: p,
      depthTest: false
    }), m = new Kt().setFromPoints([
      new Pt(...t),
      new Pt(...a)
    ]), s = new Jt(m, u);
    return s.renderOrder = 999, s.userData.isCota = true, s;
  }
  function Ut(t, a, p) {
    const u = [], m = a[a.length - 1] + 1, s = t[t.length - 1] + 1, x = p[0];
    for (let M = 0; M < t.length - 1; M++) {
      const i = t[M], c = t[M + 1], B = c - i;
      u.push(I([
        i,
        m,
        x
      ], [
        c,
        m,
        x
      ])), u.push(I([
        i,
        m - 0.15,
        x
      ], [
        i,
        m + 0.15,
        x
      ])), u.push(I([
        c,
        m - 0.15,
        x
      ], [
        c,
        m + 0.15,
        x
      ])), u.push(G(`${B.toFixed(2)} m`, (i + c) / 2, m + 0.35, x));
    }
    for (let M = 0; M < a.length - 1; M++) {
      const i = a[M], c = a[M + 1], B = c - i;
      u.push(I([
        s,
        i,
        x
      ], [
        s,
        c,
        x
      ])), u.push(I([
        s - 0.15,
        i,
        x
      ], [
        s + 0.15,
        i,
        x
      ])), u.push(I([
        s - 0.15,
        c,
        x
      ], [
        s + 0.15,
        c,
        x
      ])), u.push(G(`${B.toFixed(2)} m`, s + 0.35, (i + c) / 2, x));
    }
    const z = t[0] - 1, w = a[0];
    for (let M = 0; M < p.length - 1; M++) {
      const i = p[M], c = p[M + 1], B = c - i;
      u.push(I([
        z,
        w,
        i
      ], [
        z,
        w,
        c
      ])), u.push(I([
        z - 0.15,
        w,
        i
      ], [
        z + 0.15,
        w,
        i
      ])), u.push(I([
        z - 0.15,
        w,
        c
      ], [
        z + 0.15,
        w,
        c
      ])), u.push(G(`Piso ${M + 1}: ${B.toFixed(2)} m`, z - 0.5, w, (i + c) / 2));
    }
    return u;
  }
  function St(t, a = 0.5) {
    const p = qt(a), u = t / p;
    let m = Math.max(2, Math.round(u));
    return t / m > p * 1.25 && (m = Math.ceil(u)), {
      n: m,
      dx: t / m
    };
  }
  function qt(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  let Wt, jt, g, Y;
  Wt = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  jt = 24;
  g = (t, a, p, u, m, s) => ({
    default: p,
    min: u,
    max: m,
    step: s,
    label: a,
    folder: t
  });
  Y = (t, a, p, u) => ({
    default: p,
    label: a,
    folder: t,
    options: u
  });
  oo = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      nVanosX: {
        ...g("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...g("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...g("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: g("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: g("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: g("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: g("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: g("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: g("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: g("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: g("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: g("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: Y("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: Y("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: Y("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: g("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: g("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: g("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: g("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: g("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: Y("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: g("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: g("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: g("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: g("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: g("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: g("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: Y("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: g("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: Y("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: Y("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: Y("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: g("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabDisc: Y("Avanzado", "Discretizaci\xF3n losa", 0.5, Wt)
    },
    dynamicParams(t) {
      const a = {}, p = Math.round(t.nPisos ?? 3), u = Math.round(t.nVanosX ?? 2), m = Math.round(t.nVanosY ?? 2);
      for (let s = 1; s <= p; s++) a[`hP_${s}`] = g("Alturas por piso", `h Piso ${s} (m)`, 0, 0, 6, 0.1), a[`colB_p${s}`] = g("Secciones por piso", `b col P${s} (m)`, 0, 0, 1, 0.05), a[`colH_p${s}`] = g("Secciones por piso", `h col P${s} (m)`, 0, 0, 1, 0.05), a[`vigaB_p${s}`] = g("Secciones por piso", `b viga P${s} (m)`, 0, 0, 0.8, 0.05), a[`vigaH_p${s}`] = g("Secciones por piso", `h viga P${s} (m)`, 0, 0, 1, 0.05);
      for (let s = 1; s <= u; s++) a[`svX_${s}`] = g("Luces por vano", `svX #${s} (m)`, 0, 0, 12, 0.5);
      for (let s = 1; s <= m; s++) a[`svY_${s}`] = g("Luces por vano", `svY #${s} (m)`, 0, 0, 12, 0.5);
      return a;
    },
    computedLabels(t, a) {
      var _a;
      const u = (_a = a.deformOutputs.rawVal) == null ? void 0 : _a.reactions, m = a.nodes.rawVal;
      if (!u || !(m == null ? void 0 : m.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let s = 0, x = 0, z = 0, w = -1, M = 0, i = -1;
      u.forEach((r, h) => {
        const y = m[h];
        if (!y || Math.abs(y[2]) > 1e-6) return;
        const X = r[2], k = r[3], T = r[4];
        Math.abs(X) > Math.abs(s) && (s = X, w = h, y[0], y[1]), X > 0 && X > Math.abs(M) && (M = X, i = h), Math.abs(k) > Math.abs(x) && (x = k), Math.abs(T) > Math.abs(z) && (z = T);
      });
      const c = Math.abs(s) / 9.80665, B = Math.abs(x) / 9.80665, C = Math.abs(z) / 9.80665, A = M / 9.80665, N = Math.round(t.nPisos), F = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${c.toFixed(2)} tonf (nodo ${w})`,
        Mx: `${B.toFixed(2)} tonf\xB7m`,
        My: `${C.toFixed(2)} tonf\xB7m`
      };
      return A > 0.01 && (F["\u26A0 Uplift"] = `${A.toFixed(2)} tonf (nodo ${i})`), F.Pisos = `${N}`, F["Copiar a \u2192 zapata-aislada"] = `P=${c.toFixed(1)}, Mx=${B.toFixed(1)}, My=${C.toFixed(1)}`, F;
    },
    build(t, a) {
      const p = Math.round(t.nVanosX), u = Math.round(t.nVanosY), m = Math.round(t.nPisos), s = Math.max(1, Math.round(t.nSubViga)), x = Math.max(1, Math.round(t.nSubCol)), z = t.fcConcr * 0.0981, w = 4700 * Math.sqrt(z) * 1e3, M = 2e8, i = 0.2, c = 0.3, B = w / (2 * (1 + i)), C = M / (2 * (1 + c)), A = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, p).map((o) => o > 0 ? o : t.spanX), N = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, u).map((o) => o > 0 ? o : t.spanY), F = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, m).map((o) => o > 0 ? o : t.hPiso), r = [];
      t.Lvix > 0 && r.push(-t.Lvix), r.push(0);
      for (let o = 0; o < p; o++) r.push(r[r.length - 1] + A[o]);
      t.Lvdx > 0 && r.push(r[r.length - 1] + t.Lvdx);
      const h = [];
      t.Lviy > 0 && h.push(-t.Lviy), h.push(0);
      for (let o = 0; o < u; o++) h.push(h[h.length - 1] + N[o]);
      t.Lvdy > 0 && h.push(h[h.length - 1] + t.Lvdy);
      const y = [
        0
      ];
      for (let o = 0; o < m; o++) y.push(y[y.length - 1] + F[o]);
      const X = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === r.length - 1, k = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === h.length - 1, T = (o, e) => X(o) || k(e), P = [], V = {};
      for (let o = 0; o < y.length; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length; n++) o === 0 && T(n, e) || (V[`${n},${e},${o}`] = P.length, P.push([
        r[n],
        h[e],
        y[o]
      ]));
      const b = [], it = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), ct = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Map(), j = (o, e, n, d, l) => {
        if (n <= 1) {
          d.add(b.length), K.set(b.length, l), b.push([
            o,
            e
          ]);
          return;
        }
        const _ = P[o], f = P[e];
        let $ = o;
        for (let L = 1; L < n; L++) {
          const S = L / n, v = P.length;
          P.push([
            _[0] + (f[0] - _[0]) * S,
            _[1] + (f[1] - _[1]) * S,
            _[2] + (f[2] - _[2]) * S
          ]), d.add(b.length), K.set(b.length, l), b.push([
            $,
            v
          ]), $ = v;
        }
        d.add(b.length), K.set(b.length, l), b.push([
          $,
          e
        ]);
      };
      for (let o = 0; o < y.length - 1; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length; n++) T(n, e) || j(V[`${n},${e},${o}`], V[`${n},${e},${o + 1}`], x, it, o);
      for (let o = 1; o < y.length; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length - 1; n++) j(V[`${n},${e},${o}`], V[`${n + 1},${e},${o}`], s, R, o - 1);
      for (let o = 1; o < y.length; o++) for (let e = 0; e < r.length; e++) for (let n = 0; n < h.length - 1; n++) j(V[`${e},${n},${o}`], V[`${e},${n + 1},${o}`], s, R, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), e = (d, l, _) => {
          for (let $ = 0; $ < P.length; $++) if (Math.abs(P[$][0] - d) < 1e-6 && Math.abs(P[$][1] - l) < 1e-6 && Math.abs(P[$][2] - _) < 1e-6) return $;
          const f = P.length;
          return P.push([
            d,
            l,
            _
          ]), f;
        }, n = t.vSecDir < 0.5 ? "x" : "y";
        for (let d = 1; d < y.length; d++) if (n === "x") for (let l = 0; l < h.length - 1; l++) {
          const _ = h[l], f = h[l + 1];
          for (let $ = 1; $ <= o; $++) {
            const L = _ + $ / (o + 1) * (f - _), S = [];
            for (let v = 0; v < r.length; v++) S.push(e(r[v], L, y[d]));
            for (let v = 0; v < r.length - 1; v++) R.add(b.length), b.push([
              S[v],
              S[v + 1]
            ]);
          }
        }
        else for (let l = 0; l < r.length - 1; l++) {
          const _ = r[l], f = r[l + 1];
          for (let $ = 1; $ <= o; $++) {
            const L = _ + $ / (o + 1) * (f - _), S = [];
            for (let v = 0; v < h.length; v++) S.push(e(L, h[v], y[d]));
            for (let v = 0; v < h.length - 1; v++) R.add(b.length), b.push([
              S[v],
              S[v + 1]
            ]);
          }
        }
      }
      const O = Math.round(t.bracesMode);
      if (O > 0) {
        const o = O === 1 || O === 2 || O === 3, e = O === 1 || O === 2 || O === 4, n = y.length - 1;
        for (let d = 0; d < n; d++) {
          if (o) for (let l = 0; l < h.length; l++) {
            if (O === 1 && l !== 0 && l !== h.length - 1) continue;
            const _ = Math.floor((r.length - 1) / 2);
            for (let f = 0; f < r.length - 1; f++) {
              if (O === 1 && f !== _ || T(f, l) || T(f + 1, l)) continue;
              const $ = V[`${f},${l},${d}`], L = V[`${f + 1},${l},${d + 1}`], S = V[`${f + 1},${l},${d}`], v = V[`${f},${l},${d + 1}`];
              $ !== void 0 && L !== void 0 && b.push([
                $,
                L
              ]), S !== void 0 && v !== void 0 && b.push([
                S,
                v
              ]);
            }
          }
          if (e) for (let l = 0; l < r.length; l++) {
            if (O === 1 && l !== 0 && l !== r.length - 1) continue;
            const _ = Math.floor((h.length - 1) / 2);
            for (let f = 0; f < h.length - 1; f++) {
              if (O === 1 && f !== _ || T(l, f) || T(l, f + 1)) continue;
              const $ = V[`${l},${f},${d}`], L = V[`${l},${f + 1},${d + 1}`], S = V[`${l},${f + 1},${d}`], v = V[`${l},${f},${d + 1}`];
              $ !== void 0 && L !== void 0 && b.push([
                $,
                L
              ]), S !== void 0 && v !== void 0 && b.push([
                S,
                v
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), e = (d, l, _) => `${Math.round(d * 1e4)},${Math.round(l * 1e4)},${Math.round(_ * 1e4)}`;
        for (let d = 0; d < P.length; d++) o.set(e(P[d][0], P[d][1], P[d][2]), d);
        const n = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let d = 1; d < y.length; d++) {
          const l = y[d];
          for (let _ = 0; _ < r.length - 1; _++) for (let f = 0; f < h.length - 1; f++) {
            const $ = r[_], L = r[_ + 1], S = h[f], v = h[f + 1], { n: nt } = St(Math.abs(L - $), n), { n: st } = St(Math.abs(v - S), n), D = [];
            for (let E = 0; E <= st; E++) {
              const H = [];
              for (let at = 0; at <= nt; at++) {
                const Mt = $ + at / nt * (L - $), _t = S + E / st * (v - S), xt = e(Mt, _t, l), pt = o.get(xt);
                if (pt !== void 0) H.push(pt);
                else {
                  const yt = P.length;
                  P.push([
                    Mt,
                    _t,
                    l
                  ]), o.set(xt, yt), H.push(yt);
                }
              }
              D.push(H);
            }
            for (let E = 0; E < st; E++) for (let H = 0; H < nt; H++) ct.add(b.length), b.push([
              D[E][H],
              D[E][H + 1],
              D[E + 1][H + 1],
              D[E + 1][H]
            ]);
          }
        }
      }
      const lt = Math.round(t.apoyo), zt = lt === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : lt === 1 ? [
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
      ], rt = /* @__PURE__ */ new Map();
      for (let o = 0; o < h.length; o++) for (let e = 0; e < r.length; e++) T(e, o) || rt.set(V[`${e},${o},0`], [
        ...zt
      ]);
      const J = /* @__PURE__ */ new Map(), ht = t.CM + t.CV;
      if (ht !== 0) for (let o = 1; o < y.length; o++) for (let e = 0; e < h.length; e++) for (let n = 0; n < r.length; n++) {
        const d = `${n},${e},${o}`;
        V[d] !== void 0 && J.set(V[d], [
          0,
          0,
          ht,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = V[`${r.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${m}`];
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
      const dt = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), ut = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), ft = [
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
      ].map((o) => o > 0 ? o : t.vigaH), Vt = (o) => {
        const e = dt[o] ?? t.colSize, n = ut[o] ?? t.colSize;
        return {
          A: e * n,
          Iz: e * n ** 3 / 12,
          Iy: n * e ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(e, n), 4)
        };
      }, wt = (o) => {
        const e = ft[o] ?? t.vigaB, n = gt[o] ?? t.vigaH;
        return {
          A: e * n,
          Iz: e * n ** 3 / 12,
          Iy: n * e ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(e, n), 3) * Math.max(e, n)
        };
      }, Lt = t.matCol < 0.5 ? w : M, Ct = t.matCol < 0.5 ? B : C, Bt = t.matCol < 0.5 ? i : c, Ft = t.matViga < 0.5 ? w : M, Ot = t.matViga < 0.5 ? B : C, At = t.matViga < 0.5 ? i : c, U = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map();
      for (let o = 0; o < b.length; o++) {
        mt.set(o, jt);
        const e = K.get(o) ?? 0;
        if (ct.has(o)) U.set(o, w), q.set(o, B), W.set(o, i), vt.set(o, t.slabT);
        else if (it.has(o)) {
          const n = Vt(Math.min(e, 7));
          U.set(o, Lt), q.set(o, Ct), W.set(o, Bt), Z.set(o, n.A), Q.set(o, n.Iz), tt.set(o, n.Iy), ot.set(o, n.J);
        } else {
          const n = wt(Math.min(e, 7));
          U.set(o, Ft), q.set(o, Ot), W.set(o, At), Z.set(o, n.A), Q.set(o, n.Iz), tt.set(o, n.Iy), ot.set(o, n.J);
        }
      }
      a.nodes.val = P, a.elements.val = b, a.nodeInputs.val = {
        supports: rt,
        loads: J
      }, a.elementInputs.val = {
        elasticities: U,
        shearModuli: q,
        areas: Z,
        momentsOfInertiaZ: Q,
        momentsOfInertiaY: tt,
        torsionalConstants: ot,
        densities: mt,
        poissonsRatios: W,
        thicknesses: vt
      };
      const $t = Nt(P, b, a.nodeInputs.val, a.elementInputs.val);
      a.deformOutputs.val = $t, a.analyzeOutputs.val = Yt(P, b, a.elementInputs.val, $t);
      const et = Ut(r, h, y), Tt = dt[0], Et = ut[0], Ht = ft[0], It = gt[0];
      et.push(G(`Col ${(Tt * 100).toFixed(0)}\xD7${(Et * 100).toFixed(0)} cm`, r[0] + 0.3, h[0] + 0.3, y[1] * 0.5, "#ffaa00")), et.push(G(`Viga ${(Ht * 100).toFixed(0)}\xD7${(It * 100).toFixed(0)} cm`, (r[0] + r[1]) / 2, h[0], y[1] + 0.2, "#ffaa00")), a.objects3D.val = et;
    },
    runModal(t, a, p) {
      var _a, _b;
      const u = a.nodes.val, m = a.elements.val, s = a.nodeInputs.val, x = a.elementInputs.val;
      if (!(!u.length || !m.length || !((_a = s.supports) == null ? void 0 : _a.size) || !((_b = x.densities) == null ? void 0 : _b.size))) try {
        const z = Xt(u, m, s, x, 12), w = Math.round(t.nVanosX), M = Math.round(t.nVanosY), i = Math.round(t.nPisos);
        p.render(z, {
          title: `Edificio ${w}\xD7${M} vanos \xD7 ${i} pisos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}  ${t.slabOn >= 0.5 ? "+ Losa " : ""}${t.bracesMode > 0 ? "+ Diagonales" : ""}`
          ]
        });
        const c = z.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${c.toFixed(4)} Hz, T\u2081=${(1 / c).toFixed(4)} s`);
      } catch (z) {
        console.warn("Modal edificio error:", z.message);
      }
    }
  };
});
export {
  __tla,
  oo as e
};
