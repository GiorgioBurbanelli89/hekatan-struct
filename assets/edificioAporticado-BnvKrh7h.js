import { a as Oo } from "./analyze-ClLKGn9k.js";
import { m as To, d as Io, __tla as __tla_0 } from "./didacticCpp-Bnj9OwqQ.js";
import { C as No, b as xo, S as Go, c as ko, L as Do, B as Ro, V as So, a as Ko } from "./Text-BCbgLTjz.js";
let Zo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function k(o, g, B, m, $ = "#00e5ff") {
    const a = document.createElement("canvas"), c = a.getContext("2d");
    c.font = "bold 96px system-ui, -apple-system, sans-serif";
    const A = Math.ceil(c.measureText(o).width);
    a.width = A + 32 * 2, a.height = 96 + 32 * 2, c.font = "bold 96px system-ui, -apple-system, sans-serif", c.fillStyle = "rgba(0,0,0,0.75)";
    const w = a.height / 2;
    c.beginPath(), c.moveTo(w, 0), c.arcTo(a.width, 0, a.width, w, w), c.arcTo(a.width, a.height, a.width - w, a.height, w), c.arcTo(0, a.height, 0, a.height - w, w), c.arcTo(0, 0, w, 0, w), c.closePath(), c.fill(), c.fillStyle = $, c.textBaseline = "middle", c.fillText(o, 32, a.height / 2);
    const Y = new No(a);
    Y.minFilter = xo, Y.magFilter = xo, Y.anisotropy = 16, Y.needsUpdate = true;
    const N = new Go({
      map: Y,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), V = new ko(N);
    V.position.set(g, B, m);
    const l = 0.45, r = a.width / a.height;
    return V.scale.set(l * r, l, 1), V.userData.isCota = true, V;
  }
  function O(o, g, B = 58879) {
    const m = new Do({
      color: B,
      depthTest: false
    }), $ = new Ro().setFromPoints([
      new So(...o),
      new So(...g)
    ]), f = new Ko($, m);
    return f.renderOrder = 999, f.userData.isCota = true, f;
  }
  function Jo(o, g, B) {
    const m = [], $ = g[g.length - 1] + 1, f = o[o.length - 1] + 1, _ = B[0];
    for (let p = 0; p < o.length - 1; p++) {
      const a = o[p], c = o[p + 1], A = c - a;
      m.push(O([
        a,
        $,
        _
      ], [
        c,
        $,
        _
      ])), m.push(O([
        a,
        $ - 0.15,
        _
      ], [
        a,
        $ + 0.15,
        _
      ])), m.push(O([
        c,
        $ - 0.15,
        _
      ], [
        c,
        $ + 0.15,
        _
      ])), m.push(k(`${A.toFixed(2)} m`, (a + c) / 2, $ + 0.35, _));
    }
    for (let p = 0; p < g.length - 1; p++) {
      const a = g[p], c = g[p + 1], A = c - a;
      m.push(O([
        f,
        a,
        _
      ], [
        f,
        c,
        _
      ])), m.push(O([
        f - 0.15,
        a,
        _
      ], [
        f + 0.15,
        a,
        _
      ])), m.push(O([
        f - 0.15,
        c,
        _
      ], [
        f + 0.15,
        c,
        _
      ])), m.push(k(`${A.toFixed(2)} m`, f + 0.35, (a + c) / 2, _));
    }
    const b = o[0] - 1, L = g[0];
    for (let p = 0; p < B.length - 1; p++) {
      const a = B[p], c = B[p + 1], A = c - a;
      m.push(O([
        b,
        L,
        a
      ], [
        b,
        L,
        c
      ])), m.push(O([
        b - 0.15,
        L,
        a
      ], [
        b + 0.15,
        L,
        a
      ])), m.push(O([
        b - 0.15,
        L,
        c
      ], [
        b + 0.15,
        L,
        c
      ])), m.push(k(`Piso ${p + 1}: ${A.toFixed(2)} m`, b - 0.5, L, (a + c) / 2));
    }
    return m;
  }
  let Uo, t, T;
  Uo = 24;
  t = (o, g, B, m, $, f) => ({
    default: B,
    min: m,
    max: $,
    step: f,
    label: g,
    folder: o
  });
  T = (o, g, B, m) => ({
    default: B,
    label: g,
    folder: o,
    options: m
  });
  Zo = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      nVanosX: t("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
      nVanosY: t("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
      nPisos: t("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
      spanX: t("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: t("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: t("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: t("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: t("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: t("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: t("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      svX_1: t("Luces por vano", "svX #1 (m)", 0, 0, 12, 0.5),
      svX_2: t("Luces por vano", "svX #2 (m)", 0, 0, 12, 0.5),
      svX_3: t("Luces por vano", "svX #3 (m)", 0, 0, 12, 0.5),
      svX_4: t("Luces por vano", "svX #4 (m)", 0, 0, 12, 0.5),
      svX_5: t("Luces por vano", "svX #5 (m)", 0, 0, 12, 0.5),
      svX_6: t("Luces por vano", "svX #6 (m)", 0, 0, 12, 0.5),
      svY_1: t("Luces por vano", "svY #1 (m)", 0, 0, 12, 0.5),
      svY_2: t("Luces por vano", "svY #2 (m)", 0, 0, 12, 0.5),
      svY_3: t("Luces por vano", "svY #3 (m)", 0, 0, 12, 0.5),
      svY_4: t("Luces por vano", "svY #4 (m)", 0, 0, 12, 0.5),
      svY_5: t("Luces por vano", "svY #5 (m)", 0, 0, 12, 0.5),
      svY_6: t("Luces por vano", "svY #6 (m)", 0, 0, 12, 0.5),
      hP_1: t("Alturas por piso", "Piso 1 (m)", 0, 0, 6, 0.1),
      hP_2: t("Alturas por piso", "Piso 2 (m)", 0, 0, 6, 0.1),
      hP_3: t("Alturas por piso", "Piso 3 (m)", 0, 0, 6, 0.1),
      hP_4: t("Alturas por piso", "Piso 4 (m)", 0, 0, 6, 0.1),
      hP_5: t("Alturas por piso", "Piso 5 (m)", 0, 0, 6, 0.1),
      hP_6: t("Alturas por piso", "Piso 6 (m)", 0, 0, 6, 0.1),
      hP_7: t("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: t("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: T("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: T("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: T("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: t("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: t("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: t("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: t("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: t("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      colB_1: t("Secciones por piso", "b col P1 (m)", 0, 0, 1, 0.05),
      colH_1: t("Secciones por piso", "h col P1 (m)", 0, 0, 1, 0.05),
      vigaB_1: t("Secciones por piso", "b viga P1 (m)", 0, 0, 0.8, 0.05),
      vigaH_1: t("Secciones por piso", "h viga P1 (m)", 0, 0, 1, 0.05),
      colB_2: t("Secciones por piso", "b col P2 (m)", 0, 0, 1, 0.05),
      colH_2: t("Secciones por piso", "h col P2 (m)", 0, 0, 1, 0.05),
      vigaB_2: t("Secciones por piso", "b viga P2 (m)", 0, 0, 0.8, 0.05),
      vigaH_2: t("Secciones por piso", "h viga P2 (m)", 0, 0, 1, 0.05),
      colB_3: t("Secciones por piso", "b col P3 (m)", 0, 0, 1, 0.05),
      colH_3: t("Secciones por piso", "h col P3 (m)", 0, 0, 1, 0.05),
      vigaB_3: t("Secciones por piso", "b viga P3 (m)", 0, 0, 0.8, 0.05),
      vigaH_3: t("Secciones por piso", "h viga P3 (m)", 0, 0, 1, 0.05),
      colB_4: t("Secciones por piso", "b col P4 (m)", 0, 0, 1, 0.05),
      colH_4: t("Secciones por piso", "h col P4 (m)", 0, 0, 1, 0.05),
      vigaB_4: t("Secciones por piso", "b viga P4 (m)", 0, 0, 0.8, 0.05),
      vigaH_4: t("Secciones por piso", "h viga P4 (m)", 0, 0, 1, 0.05),
      colB_5: t("Secciones por piso", "b col P5 (m)", 0, 0, 1, 0.05),
      colH_5: t("Secciones por piso", "h col P5 (m)", 0, 0, 1, 0.05),
      vigaB_5: t("Secciones por piso", "b viga P5 (m)", 0, 0, 0.8, 0.05),
      vigaH_5: t("Secciones por piso", "h viga P5 (m)", 0, 0, 1, 0.05),
      colB_6: t("Secciones por piso", "b col P6 (m)", 0, 0, 1, 0.05),
      colH_6: t("Secciones por piso", "h col P6 (m)", 0, 0, 1, 0.05),
      vigaB_6: t("Secciones por piso", "b viga P6 (m)", 0, 0, 0.8, 0.05),
      vigaH_6: t("Secciones por piso", "h viga P6 (m)", 0, 0, 1, 0.05),
      colB_7: t("Secciones por piso", "b col P7 (m)", 0, 0, 1, 0.05),
      colH_7: t("Secciones por piso", "h col P7 (m)", 0, 0, 1, 0.05),
      vigaB_7: t("Secciones por piso", "b viga P7 (m)", 0, 0, 0.8, 0.05),
      vigaH_7: t("Secciones por piso", "h viga P7 (m)", 0, 0, 1, 0.05),
      colB_8: t("Secciones por piso", "b col P8 (m)", 0, 0, 1, 0.05),
      colH_8: t("Secciones por piso", "h col P8 (m)", 0, 0, 1, 0.05),
      vigaB_8: t("Secciones por piso", "b viga P8 (m)", 0, 0, 0.8, 0.05),
      vigaH_8: t("Secciones por piso", "h viga P8 (m)", 0, 0, 1, 0.05),
      apoyo: T("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: t("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: t("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: t("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: t("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: t("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: t("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: T("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: t("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: T("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: T("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: T("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: t("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01)
    },
    computedLabels(o, g) {
      var _a;
      const m = (_a = g.deformOutputs.rawVal) == null ? void 0 : _a.reactions, $ = g.nodes.rawVal;
      if (!m || !($ == null ? void 0 : $.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let f = 0, _ = 0, b = 0, L = -1, p = 0, a = -1;
      m.forEach((l, r) => {
        const M = $[r];
        if (!M || Math.abs(M[2]) > 1e-6) return;
        const I = l[2], D = l[3], X = l[4];
        Math.abs(I) > Math.abs(f) && (f = I, L = r, M[0], M[1]), I > 0 && I > Math.abs(p) && (p = I, a = r), Math.abs(D) > Math.abs(_) && (_ = D), Math.abs(X) > Math.abs(b) && (b = X);
      });
      const c = Math.abs(f) / 9.80665, A = Math.abs(_) / 9.80665, w = Math.abs(b) / 9.80665, Y = p / 9.80665, N = Math.round(o.nPisos), V = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${c.toFixed(2)} tonf (nodo ${L})`,
        Mx: `${A.toFixed(2)} tonf\xB7m`,
        My: `${w.toFixed(2)} tonf\xB7m`
      };
      return Y > 0.01 && (V["\u26A0 Uplift"] = `${Y.toFixed(2)} tonf (nodo ${a})`), V.Pisos = `${N}`, V["Copiar a \u2192 zapata-aislada"] = `P=${c.toFixed(1)}, Mx=${A.toFixed(1)}, My=${w.toFixed(1)}`, V;
    },
    build(o, g) {
      const B = Math.round(o.nVanosX), m = Math.round(o.nVanosY), $ = Math.round(o.nPisos), f = Math.max(1, Math.round(o.nSubViga)), _ = Math.max(1, Math.round(o.nSubCol)), b = o.fcConcr * 0.0981, L = 4700 * Math.sqrt(b) * 1e3, p = 2e8, a = 0.2, c = 0.3, A = L / (2 * (1 + a)), w = p / (2 * (1 + c)), Y = [
        o.svX_1,
        o.svX_2,
        o.svX_3,
        o.svX_4,
        o.svX_5,
        o.svX_6
      ].slice(0, B).map((e) => e > 0 ? e : o.spanX), N = [
        o.svY_1,
        o.svY_2,
        o.svY_3,
        o.svY_4,
        o.svY_5,
        o.svY_6
      ].slice(0, m).map((e) => e > 0 ? e : o.spanY), V = [
        o.hP_1,
        o.hP_2,
        o.hP_3,
        o.hP_4,
        o.hP_5,
        o.hP_6,
        o.hP_7,
        o.hP_8
      ].slice(0, $).map((e) => e > 0 ? e : o.hPiso), l = [];
      o.Lvix > 0 && l.push(-o.Lvix), l.push(0);
      for (let e = 0; e < B; e++) l.push(l[l.length - 1] + Y[e]);
      o.Lvdx > 0 && l.push(l[l.length - 1] + o.Lvdx);
      const r = [];
      o.Lviy > 0 && r.push(-o.Lviy), r.push(0);
      for (let e = 0; e < m; e++) r.push(r[r.length - 1] + N[e]);
      o.Lvdy > 0 && r.push(r[r.length - 1] + o.Lvdy);
      const M = [
        0
      ];
      for (let e = 0; e < $; e++) M.push(M[M.length - 1] + V[e]);
      const I = (e) => o.Lvix > 0 && e === 0 || o.Lvdx > 0 && e === l.length - 1, D = (e) => o.Lviy > 0 && e === 0 || o.Lvdy > 0 && e === r.length - 1, X = (e, s) => I(e) || D(s), S = [], y = {};
      for (let e = 0; e < M.length; e++) for (let s = 0; s < r.length; s++) for (let n = 0; n < l.length; n++) e === 0 && X(n, s) || (y[`${n},${s},${e}`] = S.length, S.push([
        l[n],
        r[s],
        M[e]
      ]));
      const x = [], no = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), io = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Map(), j = (e, s, n, d, i) => {
        if (n <= 1) {
          d.add(x.length), K.set(x.length, i), x.push([
            e,
            s
          ]);
          return;
        }
        const P = S[e], h = S[s];
        let u = e;
        for (let H = 1; H < n; H++) {
          const z = H / n, v = S.length;
          S.push([
            P[0] + (h[0] - P[0]) * z,
            P[1] + (h[1] - P[1]) * z,
            P[2] + (h[2] - P[2]) * z
          ]), d.add(x.length), K.set(x.length, i), x.push([
            u,
            v
          ]), u = v;
        }
        d.add(x.length), K.set(x.length, i), x.push([
          u,
          s
        ]);
      };
      for (let e = 0; e < M.length - 1; e++) for (let s = 0; s < r.length; s++) for (let n = 0; n < l.length; n++) X(n, s) || j(y[`${n},${s},${e}`], y[`${n},${s},${e + 1}`], _, no, e);
      for (let e = 1; e < M.length; e++) for (let s = 0; s < r.length; s++) for (let n = 0; n < l.length - 1; n++) j(y[`${n},${s},${e}`], y[`${n + 1},${s},${e}`], f, R, e - 1);
      for (let e = 1; e < M.length; e++) for (let s = 0; s < l.length; s++) for (let n = 0; n < r.length - 1; n++) j(y[`${s},${n},${e}`], y[`${s},${n + 1},${e}`], f, R, e - 1);
      if (o.vSecOn >= 0.5 && o.nVSec >= 1) {
        const e = Math.round(o.nVSec), s = (d, i, P) => {
          for (let u = 0; u < S.length; u++) if (Math.abs(S[u][0] - d) < 1e-6 && Math.abs(S[u][1] - i) < 1e-6 && Math.abs(S[u][2] - P) < 1e-6) return u;
          const h = S.length;
          return S.push([
            d,
            i,
            P
          ]), h;
        }, n = o.vSecDir < 0.5 ? "x" : "y";
        for (let d = 1; d < M.length; d++) if (n === "x") for (let i = 0; i < r.length - 1; i++) {
          const P = r[i], h = r[i + 1];
          for (let u = 1; u <= e; u++) {
            const H = P + u / (e + 1) * (h - P), z = [];
            for (let v = 0; v < l.length; v++) z.push(s(l[v], H, M[d]));
            for (let v = 0; v < l.length - 1; v++) R.add(x.length), x.push([
              z[v],
              z[v + 1]
            ]);
          }
        }
        else for (let i = 0; i < l.length - 1; i++) {
          const P = l[i], h = l[i + 1];
          for (let u = 1; u <= e; u++) {
            const H = P + u / (e + 1) * (h - P), z = [];
            for (let v = 0; v < r.length; v++) z.push(s(H, r[v], M[d]));
            for (let v = 0; v < r.length - 1; v++) R.add(x.length), x.push([
              z[v],
              z[v + 1]
            ]);
          }
        }
      }
      const F = Math.round(o.bracesMode);
      if (F > 0) {
        const e = F === 1 || F === 2 || F === 3, s = F === 1 || F === 2 || F === 4, n = M.length - 1;
        for (let d = 0; d < n; d++) {
          if (e) for (let i = 0; i < r.length; i++) {
            if (F === 1 && i !== 0 && i !== r.length - 1) continue;
            const P = Math.floor((l.length - 1) / 2);
            for (let h = 0; h < l.length - 1; h++) {
              if (F === 1 && h !== P || X(h, i) || X(h + 1, i)) continue;
              const u = y[`${h},${i},${d}`], H = y[`${h + 1},${i},${d + 1}`], z = y[`${h + 1},${i},${d}`], v = y[`${h},${i},${d + 1}`];
              u !== void 0 && H !== void 0 && x.push([
                u,
                H
              ]), z !== void 0 && v !== void 0 && x.push([
                z,
                v
              ]);
            }
          }
          if (s) for (let i = 0; i < l.length; i++) {
            if (F === 1 && i !== 0 && i !== l.length - 1) continue;
            const P = Math.floor((r.length - 1) / 2);
            for (let h = 0; h < r.length - 1; h++) {
              if (F === 1 && h !== P || X(i, h) || X(i, h + 1)) continue;
              const u = y[`${i},${h},${d}`], H = y[`${i},${h + 1},${d + 1}`], z = y[`${i},${h + 1},${d}`], v = y[`${i},${h},${d + 1}`];
              u !== void 0 && H !== void 0 && x.push([
                u,
                H
              ]), z !== void 0 && v !== void 0 && x.push([
                z,
                v
              ]);
            }
          }
        }
      }
      if (o.slabOn >= 0.5) {
        const e = /* @__PURE__ */ new Map(), s = (i, P, h) => `${Math.round(i * 1e4)},${Math.round(P * 1e4)},${Math.round(h * 1e4)}`;
        for (let i = 0; i < S.length; i++) e.set(s(S[i][0], S[i][1], S[i][2]), i);
        const n = f, d = f;
        for (let i = 1; i < M.length; i++) {
          const P = M[i];
          for (let h = 0; h < l.length - 1; h++) for (let u = 0; u < r.length - 1; u++) {
            const H = l[h], z = l[h + 1], v = r[u], Eo = r[u + 1], G = [];
            for (let C = 0; C <= d; C++) {
              const E = [];
              for (let so = 0; so <= n; so++) {
                const po = H + so / n * (z - H), _o = v + C / d * (Eo - v), Po = s(po, _o, P), $o = e.get(Po);
                if ($o !== void 0) E.push($o);
                else {
                  const Mo = S.length;
                  S.push([
                    po,
                    _o,
                    P
                  ]), e.set(Po, Mo), E.push(Mo);
                }
              }
              G.push(E);
            }
            for (let C = 0; C < d; C++) for (let E = 0; E < n; E++) io.add(x.length), x.push([
              G[C][E],
              G[C][E + 1],
              G[C + 1][E + 1],
              G[C + 1][E]
            ]);
          }
        }
      }
      const ao = Math.round(o.apoyo), bo = ao === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : ao === 1 ? [
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
      ], co = /* @__PURE__ */ new Map();
      for (let e = 0; e < r.length; e++) for (let s = 0; s < l.length; s++) X(s, e) || co.set(y[`${s},${e},0`], [
        ...bo
      ]);
      const J = /* @__PURE__ */ new Map(), lo = o.CM + o.CV;
      if (lo !== 0) for (let e = 1; e < M.length; e++) for (let s = 0; s < r.length; s++) for (let n = 0; n < l.length; n++) {
        const d = `${n},${s},${e}`;
        y[d] !== void 0 && J.set(y[d], [
          0,
          0,
          lo,
          0,
          0,
          0
        ]);
      }
      if (o.Ex !== 0 || o.Ey !== 0) {
        const e = y[`${l.length - 1 - (o.Lvdx > 0 ? 1 : 0)},${o.Lviy > 0 ? 1 : 0},${$}`];
        if (e !== void 0) {
          const s = J.get(e) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          J.set(e, [
            s[0] + o.Ex,
            s[1] + o.Ey,
            s[2],
            s[3],
            s[4],
            s[5]
          ]);
        }
      }
      const ro = [
        o.colB_1,
        o.colB_2,
        o.colB_3,
        o.colB_4,
        o.colB_5,
        o.colB_6,
        o.colB_7,
        o.colB_8
      ].map((e) => e > 0 ? e : o.colSize), ho = [
        o.colH_1,
        o.colH_2,
        o.colH_3,
        o.colH_4,
        o.colH_5,
        o.colH_6,
        o.colH_7,
        o.colH_8
      ].map((e) => e > 0 ? e : o.colSize), go = [
        o.vigaB_1,
        o.vigaB_2,
        o.vigaB_3,
        o.vigaB_4,
        o.vigaB_5,
        o.vigaB_6,
        o.vigaB_7,
        o.vigaB_8
      ].map((e) => e > 0 ? e : o.vigaB), mo = [
        o.vigaH_1,
        o.vigaH_2,
        o.vigaH_3,
        o.vigaH_4,
        o.vigaH_5,
        o.vigaH_6,
        o.vigaH_7,
        o.vigaH_8
      ].map((e) => e > 0 ? e : o.vigaH), yo = (e) => {
        const s = ro[e] ?? o.colSize, n = ho[e] ?? o.colSize;
        return {
          A: s * n,
          Iz: s * n ** 3 / 12,
          Iy: n * s ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(s, n), 4)
        };
      }, zo = (e) => {
        const s = go[e] ?? o.vigaB, n = mo[e] ?? o.vigaH;
        return {
          A: s * n,
          Iz: s * n ** 3 / 12,
          Iy: n * s ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(s, n), 3) * Math.max(s, n)
        };
      }, Bo = o.matCol < 0.5 ? L : p, Lo = o.matCol < 0.5 ? A : w, Ho = o.matCol < 0.5 ? a : c, wo = o.matViga < 0.5 ? L : p, Ao = o.matViga < 0.5 ? A : w, Vo = o.matViga < 0.5 ? a : c, U = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), oo = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map(), uo = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), vo = /* @__PURE__ */ new Map();
      for (let e = 0; e < x.length; e++) {
        uo.set(e, Uo);
        const s = K.get(e) ?? 0;
        if (io.has(e)) U.set(e, L), q.set(e, A), W.set(e, a), vo.set(e, o.slabT);
        else if (no.has(e)) {
          const n = yo(Math.min(s, 7));
          U.set(e, Bo), q.set(e, Lo), W.set(e, Ho), Z.set(e, n.A), Q.set(e, n.Iz), oo.set(e, n.Iy), eo.set(e, n.J);
        } else {
          const n = zo(Math.min(s, 7));
          U.set(e, wo), q.set(e, Ao), W.set(e, Vo), Z.set(e, n.A), Q.set(e, n.Iz), oo.set(e, n.Iy), eo.set(e, n.J);
        }
      }
      g.nodes.val = S, g.elements.val = x, g.nodeInputs.val = {
        supports: co,
        loads: J
      }, g.elementInputs.val = {
        elasticities: U,
        shearModuli: q,
        areas: Z,
        momentsOfInertiaZ: Q,
        momentsOfInertiaY: oo,
        torsionalConstants: eo,
        densities: uo,
        poissonsRatios: W,
        thicknesses: vo
      };
      const fo = Io(S, x, g.nodeInputs.val, g.elementInputs.val);
      g.deformOutputs.val = fo, g.analyzeOutputs.val = Oo(S, x, g.elementInputs.val, fo);
      const to = Jo(l, r, M), Fo = ro[0], Yo = ho[0], Xo = go[0], Co = mo[0];
      to.push(k(`Col ${(Fo * 100).toFixed(0)}\xD7${(Yo * 100).toFixed(0)} cm`, l[0] + 0.3, r[0] + 0.3, M[1] * 0.5, "#ffaa00")), to.push(k(`Viga ${(Xo * 100).toFixed(0)}\xD7${(Co * 100).toFixed(0)} cm`, (l[0] + l[1]) / 2, r[0], M[1] + 0.2, "#ffaa00")), g.objects3D.val = to;
    },
    runModal(o, g, B) {
      var _a, _b;
      const m = g.nodes.val, $ = g.elements.val, f = g.nodeInputs.val, _ = g.elementInputs.val;
      if (!(!m.length || !$.length || !((_a = f.supports) == null ? void 0 : _a.size) || !((_b = _.densities) == null ? void 0 : _b.size))) try {
        const b = To(m, $, f, _, 12), L = Math.round(o.nVanosX), p = Math.round(o.nVanosY), a = Math.round(o.nPisos);
        B.render(b, {
          title: `Edificio ${L}\xD7${p} vanos \xD7 ${a} pisos`,
          properties: [
            `Material cols=${o.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${o.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${o.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(o.apoyo)]}  ${o.slabOn >= 0.5 ? "+ Losa " : ""}${o.bracesMode > 0 ? "+ Diagonales" : ""}`
          ]
        });
        const c = b.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${c.toFixed(4)} Hz, T\u2081=${(1 / c).toFixed(4)} s`);
      } catch (b) {
        console.warn("Modal edificio error:", b.message);
      }
    }
  };
});
export {
  __tla,
  Zo as e
};
