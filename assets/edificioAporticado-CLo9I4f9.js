import { a as Ht } from "./analyze-ClLKGn9k.js";
import { m as It, d as Nt, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { C as Xt, g as bt, h as Dt, i as Gt, L as Rt, B as Zt, V as Pt, a as Jt } from "./Text-B8K0MPNE.js";
let eo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function Z(t, e, x, l, g = "#00e5ff") {
    const c = document.createElement("canvas"), r = c.getContext("2d");
    r.font = "bold 96px system-ui, -apple-system, sans-serif";
    const V = Math.ceil(r.measureText(t).width);
    c.width = V + 32 * 2, c.height = 96 + 32 * 2, r.font = "bold 96px system-ui, -apple-system, sans-serif", r.fillStyle = "rgba(0,0,0,0.75)";
    const C = c.height / 2;
    r.beginPath(), r.moveTo(C, 0), r.arcTo(c.width, 0, c.width, C, C), r.arcTo(c.width, c.height, c.width - C, c.height, C), r.arcTo(0, c.height, 0, c.height - C, C), r.arcTo(0, 0, C, 0, C), r.closePath(), r.fill(), r.fillStyle = g, r.textBaseline = "middle", r.fillText(t, 32, c.height / 2);
    const L = new Xt(c);
    L.minFilter = bt, L.magFilter = bt, L.anisotropy = 16, L.needsUpdate = true;
    const X = new Dt({
      map: L,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), F = new Gt(X);
    F.position.set(e, x, l);
    const h = 0.45, f = c.width / c.height;
    return F.scale.set(h * f, h, 1), F.userData.isCota = true, F;
  }
  function N(t, e, x = 58879) {
    const l = new Rt({
      color: x,
      depthTest: false
    }), g = new Zt().setFromPoints([
      new Pt(...t),
      new Pt(...e)
    ]), a = new Jt(g, l);
    return a.renderOrder = 999, a.userData.isCota = true, a;
  }
  function Kt(t, e, x) {
    const l = [], g = e[e.length - 1] + 1, a = t[t.length - 1] + 1, v = x[0];
    for (let _ = 0; _ < t.length - 1; _++) {
      const c = t[_], r = t[_ + 1], V = r - c;
      l.push(N([
        c,
        g,
        v
      ], [
        r,
        g,
        v
      ])), l.push(N([
        c,
        g - 0.15,
        v
      ], [
        c,
        g + 0.15,
        v
      ])), l.push(N([
        r,
        g - 0.15,
        v
      ], [
        r,
        g + 0.15,
        v
      ])), l.push(Z(`${V.toFixed(2)} m`, (c + r) / 2, g + 0.35, v));
    }
    for (let _ = 0; _ < e.length - 1; _++) {
      const c = e[_], r = e[_ + 1], V = r - c;
      l.push(N([
        a,
        c,
        v
      ], [
        a,
        r,
        v
      ])), l.push(N([
        a - 0.15,
        c,
        v
      ], [
        a + 0.15,
        c,
        v
      ])), l.push(N([
        a - 0.15,
        r,
        v
      ], [
        a + 0.15,
        r,
        v
      ])), l.push(Z(`${V.toFixed(2)} m`, a + 0.35, (c + r) / 2, v));
    }
    const M = t[0] - 1, S = e[0];
    for (let _ = 0; _ < x.length - 1; _++) {
      const c = x[_], r = x[_ + 1], V = r - c;
      l.push(N([
        M,
        S,
        c
      ], [
        M,
        S,
        r
      ])), l.push(N([
        M - 0.15,
        S,
        c
      ], [
        M + 0.15,
        S,
        c
      ])), l.push(N([
        M - 0.15,
        S,
        r
      ], [
        M + 0.15,
        S,
        r
      ])), l.push(Z(`Piso ${_ + 1}: ${V.toFixed(2)} m`, M - 0.5, S, (c + r) / 2));
    }
    return l;
  }
  function zt(t, e = 0.5) {
    const x = jt(e), l = t / x;
    let g = Math.max(2, Math.round(l));
    return t / g > x * 1.25 && (g = Math.ceil(l)), {
      n: g,
      dx: t / g
    };
  }
  function jt(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const Ut = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function qt(t, e, x = {}) {
    const l = x.tol ?? 1e-5, g = 0, a = [], v = [], M = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, S = 1e8, _ = 1e4, c = 1e4, r = 2 * c, V = S / (2 * (1 + 0.3));
    for (const C of e) {
      const L = [];
      let X = 0, F = 0;
      for (let A = 0; A < t.length; A++) Math.abs(t[A][2] - C) < l && (L.push(A), X += t[A][0], F += t[A][1]);
      if (L.length < 2) continue;
      const h = X / L.length, f = F / L.length, p = t.length + a.length;
      a.push({
        idx: p,
        z: C,
        x: h,
        y: f
      });
      for (const A of L) {
        v.push([
          p,
          A
        ]);
        const B = g + v.length - 1;
        M.areas.set(B, _), M.momentsOfInertiaY.set(B, c), M.momentsOfInertiaZ.set(B, c), M.torsionalConstants.set(B, r), M.elasticities.set(B, S), M.shearModuli.set(B, V), M.densities.set(B, 0);
      }
    }
    return x.linkStiffness, {
      masterNodes: a,
      rigidLinks: v,
      linkProps: M
    };
  }
  function Wt(t, e, x) {
    const l = (g, a) => {
      g.forEach((v, M) => a.set(M + x, v));
    };
    e.areas = e.areas ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaY = e.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), e.momentsOfInertiaZ = e.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), e.torsionalConstants = e.torsionalConstants ?? /* @__PURE__ */ new Map(), e.elasticities = e.elasticities ?? /* @__PURE__ */ new Map(), e.shearModuli = e.shearModuli ?? /* @__PURE__ */ new Map(), e.densities = e.densities ?? /* @__PURE__ */ new Map(), l(t.linkProps.areas, e.areas), l(t.linkProps.momentsOfInertiaY, e.momentsOfInertiaY), l(t.linkProps.momentsOfInertiaZ, e.momentsOfInertiaZ), l(t.linkProps.torsionalConstants, e.torsionalConstants), l(t.linkProps.elasticities, e.elasticities), l(t.linkProps.shearModuli, e.shearModuli), l(t.linkProps.densities, e.densities);
  }
  let Qt, m, I;
  Qt = 24;
  m = (t, e, x, l, g, a) => ({
    default: x,
    min: l,
    max: g,
    step: a,
    label: e,
    folder: t
  });
  I = (t, e, x, l) => ({
    default: x,
    label: e,
    folder: t,
    options: l
  });
  eo = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
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
      fcConcr: m("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: m("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: m("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: m("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: m("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: I("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: m("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: m("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: m("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: m("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: m("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: m("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: I("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: m("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
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
      slabT: m("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabDisc: I("Avanzado", "Discretizaci\xF3n losa", 0.5, Ut),
      diafragmaRigido: I("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      })
    },
    dynamicParams(t) {
      const e = {}, x = Math.round(t.nPisos ?? 3), l = Math.round(t.nVanosX ?? 2), g = Math.round(t.nVanosY ?? 2);
      for (let a = 1; a <= x; a++) e[`hP_${a}`] = m("Alturas por piso", `h Piso ${a} (m)`, 0, 0, 6, 0.1), e[`colB_p${a}`] = m("Secciones por piso", `b col P${a} (m)`, 0, 0, 1, 0.05), e[`colH_p${a}`] = m("Secciones por piso", `h col P${a} (m)`, 0, 0, 1, 0.05), e[`vigaB_p${a}`] = m("Secciones por piso", `b viga P${a} (m)`, 0, 0, 0.8, 0.05), e[`vigaH_p${a}`] = m("Secciones por piso", `h viga P${a} (m)`, 0, 0, 1, 0.05);
      for (let a = 1; a <= l; a++) e[`svX_${a}`] = m("Luces por vano", `svX #${a} (m)`, 0, 0, 12, 0.5);
      for (let a = 1; a <= g; a++) e[`svY_${a}`] = m("Luces por vano", `svY #${a} (m)`, 0, 0, 12, 0.5);
      return e;
    },
    computedLabels(t, e) {
      var _a;
      const l = (_a = e.deformOutputs.rawVal) == null ? void 0 : _a.reactions, g = e.nodes.rawVal;
      if (!l || !(g == null ? void 0 : g.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let a = 0, v = 0, M = 0, S = -1, _ = 0, c = -1;
      l.forEach((h, f) => {
        const p = g[f];
        if (!p || Math.abs(p[2]) > 1e-6) return;
        const A = h[2], B = h[3], k = h[4];
        Math.abs(A) > Math.abs(a) && (a = A, S = f, p[0], p[1]), A > 0 && A > Math.abs(_) && (_ = A, c = f), Math.abs(B) > Math.abs(v) && (v = B), Math.abs(k) > Math.abs(M) && (M = k);
      });
      const r = Math.abs(a) / 9.80665, V = Math.abs(v) / 9.80665, C = Math.abs(M) / 9.80665, L = _ / 9.80665, X = Math.round(t.nPisos), F = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${r.toFixed(2)} tonf (nodo ${S})`,
        Mx: `${V.toFixed(2)} tonf\xB7m`,
        My: `${C.toFixed(2)} tonf\xB7m`
      };
      return L > 0.01 && (F["\u26A0 Uplift"] = `${L.toFixed(2)} tonf (nodo ${c})`), F.Pisos = `${X}`, F["Copiar a \u2192 zapata-aislada"] = `P=${r.toFixed(1)}, Mx=${V.toFixed(1)}, My=${C.toFixed(1)}`, F;
    },
    build(t, e) {
      const x = Math.round(t.nVanosX), l = Math.round(t.nVanosY), g = Math.round(t.nPisos), a = Math.max(1, Math.round(t.nSubViga)), v = Math.max(1, Math.round(t.nSubCol)), M = t.fcConcr * 0.0981, S = 4700 * Math.sqrt(M) * 1e3, _ = 2e8, c = 0.2, r = 0.3, V = S / (2 * (1 + c)), C = _ / (2 * (1 + r)), L = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, x).map((o) => o > 0 ? o : t.spanX), X = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, l).map((o) => o > 0 ? o : t.spanY), F = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, g).map((o) => o > 0 ? o : t.hPiso), h = [];
      t.Lvix > 0 && h.push(-t.Lvix), h.push(0);
      for (let o = 0; o < x; o++) h.push(h[h.length - 1] + L[o]);
      t.Lvdx > 0 && h.push(h[h.length - 1] + t.Lvdx);
      const f = [];
      t.Lviy > 0 && f.push(-t.Lviy), f.push(0);
      for (let o = 0; o < l; o++) f.push(f[f.length - 1] + X[o]);
      t.Lvdy > 0 && f.push(f[f.length - 1] + t.Lvdy);
      const p = [
        0
      ];
      for (let o = 0; o < g; o++) p.push(p[p.length - 1] + F[o]);
      const A = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === h.length - 1, B = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === f.length - 1, k = (o, n) => A(o) || B(n), z = [], O = {};
      for (let o = 0; o < p.length; o++) for (let n = 0; n < f.length; n++) for (let s = 0; s < h.length; s++) o === 0 && k(s, n) || (O[`${s},${n},${o}`] = z.length, z.push([
        h[s],
        f[n],
        p[o]
      ]));
      const P = [], ct = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), lt = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Map(), ot = (o, n, s, d, i) => {
        if (s <= 1) {
          d.add(P.length), K.set(P.length, i), P.push([
            o,
            n
          ]);
          return;
        }
        const b = z[o], u = z[n];
        let y = o;
        for (let E = 1; E < s; E++) {
          const w = E / s, $ = z.length;
          z.push([
            b[0] + (u[0] - b[0]) * w,
            b[1] + (u[1] - b[1]) * w,
            b[2] + (u[2] - b[2]) * w
          ]), d.add(P.length), K.set(P.length, i), P.push([
            y,
            $
          ]), y = $;
        }
        d.add(P.length), K.set(P.length, i), P.push([
          y,
          n
        ]);
      };
      for (let o = 0; o < p.length - 1; o++) for (let n = 0; n < f.length; n++) for (let s = 0; s < h.length; s++) k(s, n) || ot(O[`${s},${n},${o}`], O[`${s},${n},${o + 1}`], v, ct, o);
      for (let o = 1; o < p.length; o++) for (let n = 0; n < f.length; n++) for (let s = 0; s < h.length - 1; s++) ot(O[`${s},${n},${o}`], O[`${s + 1},${n},${o}`], a, J, o - 1);
      for (let o = 1; o < p.length; o++) for (let n = 0; n < h.length; n++) for (let s = 0; s < f.length - 1; s++) ot(O[`${n},${s},${o}`], O[`${n},${s + 1},${o}`], a, J, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), n = (d, i, b) => {
          for (let y = 0; y < z.length; y++) if (Math.abs(z[y][0] - d) < 1e-6 && Math.abs(z[y][1] - i) < 1e-6 && Math.abs(z[y][2] - b) < 1e-6) return y;
          const u = z.length;
          return z.push([
            d,
            i,
            b
          ]), u;
        }, s = t.vSecDir < 0.5 ? "x" : "y";
        for (let d = 1; d < p.length; d++) if (s === "x") for (let i = 0; i < f.length - 1; i++) {
          const b = f[i], u = f[i + 1];
          for (let y = 1; y <= o; y++) {
            const E = b + y / (o + 1) * (u - b), w = [];
            for (let $ = 0; $ < h.length; $++) w.push(n(h[$], E, p[d]));
            for (let $ = 0; $ < h.length - 1; $++) J.add(P.length), P.push([
              w[$],
              w[$ + 1]
            ]);
          }
        }
        else for (let i = 0; i < h.length - 1; i++) {
          const b = h[i], u = h[i + 1];
          for (let y = 1; y <= o; y++) {
            const E = b + y / (o + 1) * (u - b), w = [];
            for (let $ = 0; $ < f.length; $++) w.push(n(E, f[$], p[d]));
            for (let $ = 0; $ < f.length - 1; $++) J.add(P.length), P.push([
              w[$],
              w[$ + 1]
            ]);
          }
        }
      }
      const Y = Math.round(t.bracesMode);
      if (Y > 0) {
        const o = Y === 1 || Y === 2 || Y === 3, n = Y === 1 || Y === 2 || Y === 4, s = p.length - 1;
        for (let d = 0; d < s; d++) {
          if (o) for (let i = 0; i < f.length; i++) {
            if (Y === 1 && i !== 0 && i !== f.length - 1) continue;
            const b = Math.floor((h.length - 1) / 2);
            for (let u = 0; u < h.length - 1; u++) {
              if (Y === 1 && u !== b || k(u, i) || k(u + 1, i)) continue;
              const y = O[`${u},${i},${d}`], E = O[`${u + 1},${i},${d + 1}`], w = O[`${u + 1},${i},${d}`], $ = O[`${u},${i},${d + 1}`];
              y !== void 0 && E !== void 0 && P.push([
                y,
                E
              ]), w !== void 0 && $ !== void 0 && P.push([
                w,
                $
              ]);
            }
          }
          if (n) for (let i = 0; i < h.length; i++) {
            if (Y === 1 && i !== 0 && i !== h.length - 1) continue;
            const b = Math.floor((f.length - 1) / 2);
            for (let u = 0; u < f.length - 1; u++) {
              if (Y === 1 && u !== b || k(i, u) || k(i, u + 1)) continue;
              const y = O[`${i},${u},${d}`], E = O[`${i},${u + 1},${d + 1}`], w = O[`${i},${u + 1},${d}`], $ = O[`${i},${u},${d + 1}`];
              y !== void 0 && E !== void 0 && P.push([
                y,
                E
              ]), w !== void 0 && $ !== void 0 && P.push([
                w,
                $
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), n = (d, i, b) => `${Math.round(d * 1e4)},${Math.round(i * 1e4)},${Math.round(b * 1e4)}`;
        for (let d = 0; d < z.length; d++) o.set(n(z[d][0], z[d][1], z[d][2]), d);
        const s = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let d = 1; d < p.length; d++) {
          const i = p[d];
          for (let b = 0; b < h.length - 1; b++) for (let u = 0; u < f.length - 1; u++) {
            const y = h[b], E = h[b + 1], w = f[u], $ = f[u + 1], { n: st } = zt(Math.abs(E - y), s), { n: at } = zt(Math.abs($ - w), s), R = [];
            for (let T = 0; T <= at; T++) {
              const H = [];
              for (let it = 0; it <= st; it++) {
                const $t = y + it / st * (E - y), xt = w + T / at * ($ - w), _t = n($t, xt, i), pt = o.get(_t);
                if (pt !== void 0) H.push(pt);
                else {
                  const yt = z.length;
                  z.push([
                    $t,
                    xt,
                    i
                  ]), o.set(_t, yt), H.push(yt);
                }
              }
              R.push(H);
            }
            for (let T = 0; T < at; T++) for (let H = 0; H < st; H++) lt.add(P.length), P.push([
              R[T][H],
              R[T][H + 1],
              R[T + 1][H + 1],
              R[T + 1][H]
            ]);
          }
        }
      }
      const rt = Math.round(t.apoyo), St = rt === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : rt === 1 ? [
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
      ], ht = /* @__PURE__ */ new Map();
      for (let o = 0; o < f.length; o++) for (let n = 0; n < h.length; n++) k(n, o) || ht.set(O[`${n},${o},0`], [
        ...St
      ]);
      const j = /* @__PURE__ */ new Map(), ft = t.CM + t.CV;
      if (ft !== 0) for (let o = 1; o < p.length; o++) for (let n = 0; n < f.length; n++) for (let s = 0; s < h.length; s++) {
        const d = `${s},${n},${o}`;
        O[d] !== void 0 && j.set(O[d], [
          0,
          0,
          ft,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = O[`${h.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${g}`];
        if (o !== void 0) {
          const n = j.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          j.set(o, [
            n[0] + t.Ex,
            n[1] + t.Ey,
            n[2],
            n[3],
            n[4],
            n[5]
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
      ].map((o) => o > 0 ? o : t.colSize), gt = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), ut = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), mt = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), wt = (o) => {
        const n = dt[o] ?? t.colSize, s = gt[o] ?? t.colSize;
        return {
          A: n * s,
          Iz: n * s ** 3 / 12,
          Iy: s * n ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(n, s), 4)
        };
      }, Ot = (o) => {
        const n = ut[o] ?? t.vigaB, s = mt[o] ?? t.vigaH;
        return {
          A: n * s,
          Iz: n * s ** 3 / 12,
          Iy: s * n ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(n, s), 3) * Math.max(n, s)
        };
      }, Ct = t.matCol < 0.5 ? S : _, Vt = t.matCol < 0.5 ? V : C, Lt = t.matCol < 0.5 ? c : r, At = t.matViga < 0.5 ? S : _, Et = t.matViga < 0.5 ? V : C, Ft = t.matViga < 0.5 ? c : r, D = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map();
      for (let o = 0; o < P.length; o++) {
        nt.set(o, Qt);
        const n = K.get(o) ?? 0;
        if (lt.has(o)) D.set(o, S), G.set(o, V), tt.set(o, c), vt.set(o, t.slabT);
        else if (ct.has(o)) {
          const s = wt(Math.min(n, 7));
          D.set(o, Ct), G.set(o, Vt), tt.set(o, Lt), U.set(o, s.A), q.set(o, s.Iz), W.set(o, s.Iy), Q.set(o, s.J);
        } else {
          const s = Ot(Math.min(n, 7));
          D.set(o, At), G.set(o, Et), tt.set(o, Ft), U.set(o, s.A), q.set(o, s.Iz), W.set(o, s.Iy), Q.set(o, s.J);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let i = 1; i < p.length; i++) o.push(p[i]);
        const n = qt(z, o), s = P.length;
        for (const i of n.masterNodes) z.push([
          i.x,
          i.y,
          i.z
        ]);
        for (const i of n.rigidLinks) P.push(i);
        Wt(n, {
          elasticities: D,
          shearModuli: G,
          areas: U,
          momentsOfInertiaZ: q,
          momentsOfInertiaY: W,
          torsionalConstants: Q,
          densities: nt
        }, s);
      }
      e.nodes.val = z, e.elements.val = P, e.nodeInputs.val = {
        supports: ht,
        loads: j
      }, e.elementInputs.val = {
        elasticities: D,
        shearModuli: G,
        areas: U,
        momentsOfInertiaZ: q,
        momentsOfInertiaY: W,
        torsionalConstants: Q,
        densities: nt,
        poissonsRatios: tt,
        thicknesses: vt
      };
      const Mt = Nt(z, P, e.nodeInputs.val, e.elementInputs.val);
      e.deformOutputs.val = Mt, e.analyzeOutputs.val = Ht(z, P, e.elementInputs.val, Mt);
      const et = Kt(h, f, p), Bt = dt[0], Yt = gt[0], kt = ut[0], Tt = mt[0];
      et.push(Z(`Col ${(Bt * 100).toFixed(0)}\xD7${(Yt * 100).toFixed(0)} cm`, h[0] + 0.3, f[0] + 0.3, p[1] * 0.5, "#ffaa00")), et.push(Z(`Viga ${(kt * 100).toFixed(0)}\xD7${(Tt * 100).toFixed(0)} cm`, (h[0] + h[1]) / 2, f[0], p[1] + 0.2, "#ffaa00")), e.objects3D.val = et;
    },
    runModal(t, e, x) {
      var _a, _b;
      const l = e.nodes.val, g = e.elements.val, a = e.nodeInputs.val, v = e.elementInputs.val;
      if (!(!l.length || !g.length || !((_a = a.supports) == null ? void 0 : _a.size) || !((_b = v.densities) == null ? void 0 : _b.size))) try {
        const M = It(l, g, a, v, 12), S = Math.round(t.nVanosX), _ = Math.round(t.nVanosY), c = Math.round(t.nPisos);
        x.render(M, {
          title: `Edificio ${S}\xD7${_} vanos \xD7 ${c} pisos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}  ${t.slabOn >= 0.5 ? "+ Losa " : ""}${t.bracesMode > 0 ? "+ Diagonales" : ""}`
          ]
        });
        const r = M.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${r.toFixed(4)} Hz, T\u2081=${(1 / r).toFixed(4)} s`);
      } catch (M) {
        console.warn("Modal edificio error:", M.message);
      }
    }
  };
});
export {
  __tla,
  eo as e
};
