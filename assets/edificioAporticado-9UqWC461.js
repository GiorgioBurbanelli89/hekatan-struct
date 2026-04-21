import { a as Oo } from "./analyze-ClLKGn9k.js";
import { m as To, d as Fo, __tla as __tla_0 } from "./didacticCpp-CZmuvtpn.js";
import { o as Go, p as So, n as ko, m as Do, a as No, B as Ro, V as $o, L as Jo } from "./Text-CBH-tcJP.js";
let Zo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function G(o, g, B, d, $ = "#00e5ff") {
    const a = document.createElement("canvas"), c = a.getContext("2d");
    c.font = "bold 96px system-ui, -apple-system, sans-serif";
    const A = Math.ceil(c.measureText(o).width);
    a.width = A + 32 * 2, a.height = 96 + 32 * 2, c.font = "bold 96px system-ui, -apple-system, sans-serif", c.fillStyle = "rgba(0,0,0,0.75)";
    const w = a.height / 2;
    c.beginPath(), c.moveTo(w, 0), c.arcTo(a.width, 0, a.width, w, w), c.arcTo(a.width, a.height, a.width - w, a.height, w), c.arcTo(0, a.height, 0, a.height - w, w), c.arcTo(0, 0, w, 0, w), c.closePath(), c.fill(), c.fillStyle = $, c.textBaseline = "middle", c.fillText(o, 32, a.height / 2);
    const I = new Go(a);
    I.minFilter = So, I.magFilter = So, I.anisotropy = 16, I.needsUpdate = true;
    const U = new ko({
      map: I,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), T = new Do(U);
    T.position.set(g, B, d);
    const l = 0.45, h = a.width / a.height;
    return T.scale.set(l * h, l, 1), T.userData.isCota = true, T;
  }
  function C(o, g, B = 58879) {
    const d = new No({
      color: B,
      depthTest: false
    }), $ = new Ro().setFromPoints([
      new $o(...o),
      new $o(...g)
    ]), _ = new Jo($, d);
    return _.renderOrder = 999, _.userData.isCota = true, _;
  }
  function qo(o, g, B) {
    const d = [], $ = g[g.length - 1] + 1, _ = o[o.length - 1] + 1, x = B[0];
    for (let P = 0; P < o.length - 1; P++) {
      const a = o[P], c = o[P + 1], A = c - a;
      d.push(C([
        a,
        $,
        x
      ], [
        c,
        $,
        x
      ])), d.push(C([
        a,
        $ - 0.15,
        x
      ], [
        a,
        $ + 0.15,
        x
      ])), d.push(C([
        c,
        $ - 0.15,
        x
      ], [
        c,
        $ + 0.15,
        x
      ])), d.push(G(`${A.toFixed(2)} m`, (a + c) / 2, $ + 0.35, x));
    }
    for (let P = 0; P < g.length - 1; P++) {
      const a = g[P], c = g[P + 1], A = c - a;
      d.push(C([
        _,
        a,
        x
      ], [
        _,
        c,
        x
      ])), d.push(C([
        _ - 0.15,
        a,
        x
      ], [
        _ + 0.15,
        a,
        x
      ])), d.push(C([
        _ - 0.15,
        c,
        x
      ], [
        _ + 0.15,
        c,
        x
      ])), d.push(G(`${A.toFixed(2)} m`, _ + 0.35, (a + c) / 2, x));
    }
    const H = o[0] - 1, z = g[0];
    for (let P = 0; P < B.length - 1; P++) {
      const a = B[P], c = B[P + 1], A = c - a;
      d.push(C([
        H,
        z,
        a
      ], [
        H,
        z,
        c
      ])), d.push(C([
        H - 0.15,
        z,
        a
      ], [
        H + 0.15,
        z,
        a
      ])), d.push(C([
        H - 0.15,
        z,
        c
      ], [
        H + 0.15,
        z,
        c
      ])), d.push(G(`Piso ${P + 1}: ${A.toFixed(2)} m`, H - 0.5, z, (a + c) / 2));
    }
    return d;
  }
  let Uo, s, E;
  Uo = 24;
  s = (o, g, B, d, $, _) => ({
    default: B,
    min: d,
    max: $,
    step: _,
    label: g,
    folder: o
  });
  E = (o, g, B, d) => ({
    default: B,
    label: g,
    folder: o,
    options: d
  });
  Zo = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      nVanosX: s("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
      nVanosY: s("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
      nPisos: s("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
      spanX: s("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: s("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: s("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: s("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: s("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: s("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: s("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      svX_1: s("Luces por vano", "svX #1 (m)", 0, 0, 12, 0.5),
      svX_2: s("Luces por vano", "svX #2 (m)", 0, 0, 12, 0.5),
      svX_3: s("Luces por vano", "svX #3 (m)", 0, 0, 12, 0.5),
      svX_4: s("Luces por vano", "svX #4 (m)", 0, 0, 12, 0.5),
      svX_5: s("Luces por vano", "svX #5 (m)", 0, 0, 12, 0.5),
      svX_6: s("Luces por vano", "svX #6 (m)", 0, 0, 12, 0.5),
      svY_1: s("Luces por vano", "svY #1 (m)", 0, 0, 12, 0.5),
      svY_2: s("Luces por vano", "svY #2 (m)", 0, 0, 12, 0.5),
      svY_3: s("Luces por vano", "svY #3 (m)", 0, 0, 12, 0.5),
      svY_4: s("Luces por vano", "svY #4 (m)", 0, 0, 12, 0.5),
      svY_5: s("Luces por vano", "svY #5 (m)", 0, 0, 12, 0.5),
      svY_6: s("Luces por vano", "svY #6 (m)", 0, 0, 12, 0.5),
      hP_1: s("Alturas por piso", "Piso 1 (m)", 0, 0, 6, 0.1),
      hP_2: s("Alturas por piso", "Piso 2 (m)", 0, 0, 6, 0.1),
      hP_3: s("Alturas por piso", "Piso 3 (m)", 0, 0, 6, 0.1),
      hP_4: s("Alturas por piso", "Piso 4 (m)", 0, 0, 6, 0.1),
      hP_5: s("Alturas por piso", "Piso 5 (m)", 0, 0, 6, 0.1),
      hP_6: s("Alturas por piso", "Piso 6 (m)", 0, 0, 6, 0.1),
      hP_7: s("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: s("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: E("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: E("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: E("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: s("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: s("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: s("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: s("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: s("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      colB_1: s("Secciones por piso", "b col P1 (m)", 0, 0, 1, 0.05),
      colH_1: s("Secciones por piso", "h col P1 (m)", 0, 0, 1, 0.05),
      vigaB_1: s("Secciones por piso", "b viga P1 (m)", 0, 0, 0.8, 0.05),
      vigaH_1: s("Secciones por piso", "h viga P1 (m)", 0, 0, 1, 0.05),
      colB_2: s("Secciones por piso", "b col P2 (m)", 0, 0, 1, 0.05),
      colH_2: s("Secciones por piso", "h col P2 (m)", 0, 0, 1, 0.05),
      vigaB_2: s("Secciones por piso", "b viga P2 (m)", 0, 0, 0.8, 0.05),
      vigaH_2: s("Secciones por piso", "h viga P2 (m)", 0, 0, 1, 0.05),
      colB_3: s("Secciones por piso", "b col P3 (m)", 0, 0, 1, 0.05),
      colH_3: s("Secciones por piso", "h col P3 (m)", 0, 0, 1, 0.05),
      vigaB_3: s("Secciones por piso", "b viga P3 (m)", 0, 0, 0.8, 0.05),
      vigaH_3: s("Secciones por piso", "h viga P3 (m)", 0, 0, 1, 0.05),
      colB_4: s("Secciones por piso", "b col P4 (m)", 0, 0, 1, 0.05),
      colH_4: s("Secciones por piso", "h col P4 (m)", 0, 0, 1, 0.05),
      vigaB_4: s("Secciones por piso", "b viga P4 (m)", 0, 0, 0.8, 0.05),
      vigaH_4: s("Secciones por piso", "h viga P4 (m)", 0, 0, 1, 0.05),
      colB_5: s("Secciones por piso", "b col P5 (m)", 0, 0, 1, 0.05),
      colH_5: s("Secciones por piso", "h col P5 (m)", 0, 0, 1, 0.05),
      vigaB_5: s("Secciones por piso", "b viga P5 (m)", 0, 0, 0.8, 0.05),
      vigaH_5: s("Secciones por piso", "h viga P5 (m)", 0, 0, 1, 0.05),
      colB_6: s("Secciones por piso", "b col P6 (m)", 0, 0, 1, 0.05),
      colH_6: s("Secciones por piso", "h col P6 (m)", 0, 0, 1, 0.05),
      vigaB_6: s("Secciones por piso", "b viga P6 (m)", 0, 0, 0.8, 0.05),
      vigaH_6: s("Secciones por piso", "h viga P6 (m)", 0, 0, 1, 0.05),
      colB_7: s("Secciones por piso", "b col P7 (m)", 0, 0, 1, 0.05),
      colH_7: s("Secciones por piso", "h col P7 (m)", 0, 0, 1, 0.05),
      vigaB_7: s("Secciones por piso", "b viga P7 (m)", 0, 0, 0.8, 0.05),
      vigaH_7: s("Secciones por piso", "h viga P7 (m)", 0, 0, 1, 0.05),
      colB_8: s("Secciones por piso", "b col P8 (m)", 0, 0, 1, 0.05),
      colH_8: s("Secciones por piso", "h col P8 (m)", 0, 0, 1, 0.05),
      vigaB_8: s("Secciones por piso", "b viga P8 (m)", 0, 0, 0.8, 0.05),
      vigaH_8: s("Secciones por piso", "h viga P8 (m)", 0, 0, 1, 0.05),
      apoyo: E("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: s("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: s("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: s("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: s("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: s("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: s("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: E("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: s("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: E("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: E("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: E("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: s("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01)
    },
    build(o, g) {
      const B = Math.round(o.nVanosX), d = Math.round(o.nVanosY), $ = Math.round(o.nPisos), _ = Math.max(1, Math.round(o.nSubViga)), x = Math.max(1, Math.round(o.nSubCol)), H = o.fcConcr * 0.0981, z = 4700 * Math.sqrt(H) * 1e3, P = 2e8, a = 0.2, c = 0.3, A = z / (2 * (1 + a)), w = P / (2 * (1 + c)), I = [
        o.svX_1,
        o.svX_2,
        o.svX_3,
        o.svX_4,
        o.svX_5,
        o.svX_6
      ].slice(0, B).map((e) => e > 0 ? e : o.spanX), U = [
        o.svY_1,
        o.svY_2,
        o.svY_3,
        o.svY_4,
        o.svY_5,
        o.svY_6
      ].slice(0, d).map((e) => e > 0 ? e : o.spanY), T = [
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
      for (let e = 0; e < B; e++) l.push(l[l.length - 1] + I[e]);
      o.Lvdx > 0 && l.push(l[l.length - 1] + o.Lvdx);
      const h = [];
      o.Lviy > 0 && h.push(-o.Lviy), h.push(0);
      for (let e = 0; e < d; e++) h.push(h[h.length - 1] + U[e]);
      o.Lvdy > 0 && h.push(h[h.length - 1] + o.Lvdy);
      const b = [
        0
      ];
      for (let e = 0; e < $; e++) b.push(b[b.length - 1] + T[e]);
      const xo = (e) => o.Lvix > 0 && e === 0 || o.Lvdx > 0 && e === l.length - 1, Mo = (e) => o.Lviy > 0 && e === 0 || o.Lvdy > 0 && e === h.length - 1, O = (e, t) => xo(e) || Mo(t), S = [], M = {};
      for (let e = 0; e < b.length; e++) for (let t = 0; t < h.length; t++) for (let n = 0; n < l.length; n++) e === 0 && O(n, t) || (M[`${n},${t},${e}`] = S.length, S.push([
        l[n],
        h[t],
        b[e]
      ]));
      const p = [], so = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), to = /* @__PURE__ */ new Set(), D = /* @__PURE__ */ new Map(), W = (e, t, n, m, i) => {
        if (n <= 1) {
          m.add(p.length), D.set(p.length, i), p.push([
            e,
            t
          ]);
          return;
        }
        const f = S[e], r = S[t];
        let v = e;
        for (let L = 1; L < n; L++) {
          const y = L / n, u = S.length;
          S.push([
            f[0] + (r[0] - f[0]) * y,
            f[1] + (r[1] - f[1]) * y,
            f[2] + (r[2] - f[2]) * y
          ]), m.add(p.length), D.set(p.length, i), p.push([
            v,
            u
          ]), v = u;
        }
        m.add(p.length), D.set(p.length, i), p.push([
          v,
          t
        ]);
      };
      for (let e = 0; e < b.length - 1; e++) for (let t = 0; t < h.length; t++) for (let n = 0; n < l.length; n++) O(n, t) || W(M[`${n},${t},${e}`], M[`${n},${t},${e + 1}`], x, so, e);
      for (let e = 1; e < b.length; e++) for (let t = 0; t < h.length; t++) for (let n = 0; n < l.length - 1; n++) W(M[`${n},${t},${e}`], M[`${n + 1},${t},${e}`], _, k, e - 1);
      for (let e = 1; e < b.length; e++) for (let t = 0; t < l.length; t++) for (let n = 0; n < h.length - 1; n++) W(M[`${t},${n},${e}`], M[`${t},${n + 1},${e}`], _, k, e - 1);
      if (o.vSecOn >= 0.5 && o.nVSec >= 1) {
        const e = Math.round(o.nVSec), t = (m, i, f) => {
          for (let v = 0; v < S.length; v++) if (Math.abs(S[v][0] - m) < 1e-6 && Math.abs(S[v][1] - i) < 1e-6 && Math.abs(S[v][2] - f) < 1e-6) return v;
          const r = S.length;
          return S.push([
            m,
            i,
            f
          ]), r;
        }, n = o.vSecDir < 0.5 ? "x" : "y";
        for (let m = 1; m < b.length; m++) if (n === "x") for (let i = 0; i < h.length - 1; i++) {
          const f = h[i], r = h[i + 1];
          for (let v = 1; v <= e; v++) {
            const L = f + v / (e + 1) * (r - f), y = [];
            for (let u = 0; u < l.length; u++) y.push(t(l[u], L, b[m]));
            for (let u = 0; u < l.length - 1; u++) k.add(p.length), p.push([
              y[u],
              y[u + 1]
            ]);
          }
        }
        else for (let i = 0; i < l.length - 1; i++) {
          const f = l[i], r = l[i + 1];
          for (let v = 1; v <= e; v++) {
            const L = f + v / (e + 1) * (r - f), y = [];
            for (let u = 0; u < h.length; u++) y.push(t(L, h[u], b[m]));
            for (let u = 0; u < h.length - 1; u++) k.add(p.length), p.push([
              y[u],
              y[u + 1]
            ]);
          }
        }
      }
      const V = Math.round(o.bracesMode);
      if (V > 0) {
        const e = V === 1 || V === 2 || V === 3, t = V === 1 || V === 2 || V === 4, n = b.length - 1;
        for (let m = 0; m < n; m++) {
          if (e) for (let i = 0; i < h.length; i++) {
            if (V === 1 && i !== 0 && i !== h.length - 1) continue;
            const f = Math.floor((l.length - 1) / 2);
            for (let r = 0; r < l.length - 1; r++) {
              if (V === 1 && r !== f || O(r, i) || O(r + 1, i)) continue;
              const v = M[`${r},${i},${m}`], L = M[`${r + 1},${i},${m + 1}`], y = M[`${r + 1},${i},${m}`], u = M[`${r},${i},${m + 1}`];
              v !== void 0 && L !== void 0 && p.push([
                v,
                L
              ]), y !== void 0 && u !== void 0 && p.push([
                y,
                u
              ]);
            }
          }
          if (t) for (let i = 0; i < l.length; i++) {
            if (V === 1 && i !== 0 && i !== l.length - 1) continue;
            const f = Math.floor((h.length - 1) / 2);
            for (let r = 0; r < h.length - 1; r++) {
              if (V === 1 && r !== f || O(i, r) || O(i, r + 1)) continue;
              const v = M[`${i},${r},${m}`], L = M[`${i},${r + 1},${m + 1}`], y = M[`${i},${r + 1},${m}`], u = M[`${i},${r},${m + 1}`];
              v !== void 0 && L !== void 0 && p.push([
                v,
                L
              ]), y !== void 0 && u !== void 0 && p.push([
                y,
                u
              ]);
            }
          }
        }
      }
      if (o.slabOn >= 0.5) {
        const e = /* @__PURE__ */ new Map(), t = (i, f, r) => `${Math.round(i * 1e4)},${Math.round(f * 1e4)},${Math.round(r * 1e4)}`;
        for (let i = 0; i < S.length; i++) e.set(t(S[i][0], S[i][1], S[i][2]), i);
        const n = _, m = _;
        for (let i = 1; i < b.length; i++) {
          const f = b[i];
          for (let r = 0; r < l.length - 1; r++) for (let v = 0; v < h.length - 1; v++) {
            const L = l[r], y = l[r + 1], u = h[v], Io = h[v + 1], F = [];
            for (let Y = 0; Y <= m; Y++) {
              const X = [];
              for (let eo = 0; eo <= n; eo++) {
                const uo = L + eo / n * (y - L), fo = u + Y / m * (Io - u), po = t(uo, fo, f), _o = e.get(po);
                if (_o !== void 0) X.push(_o);
                else {
                  const Po = S.length;
                  S.push([
                    uo,
                    fo,
                    f
                  ]), e.set(po, Po), X.push(Po);
                }
              }
              F.push(X);
            }
            for (let Y = 0; Y < m; Y++) for (let X = 0; X < n; X++) to.add(p.length), p.push([
              F[Y][X],
              F[Y][X + 1],
              F[Y + 1][X + 1],
              F[Y + 1][X]
            ]);
          }
        }
      }
      const no = Math.round(o.apoyo), yo = no === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : no === 1 ? [
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
      ], io = /* @__PURE__ */ new Map();
      for (let e = 0; e < h.length; e++) for (let t = 0; t < l.length; t++) O(t, e) || io.set(M[`${t},${e},0`], [
        ...yo
      ]);
      const N = /* @__PURE__ */ new Map(), ao = o.CM + o.CV;
      if (ao !== 0) for (let e = 1; e < b.length; e++) for (let t = 0; t < h.length; t++) for (let n = 0; n < l.length; n++) {
        const m = `${n},${t},${e}`;
        M[m] !== void 0 && N.set(M[m], [
          0,
          0,
          ao,
          0,
          0,
          0
        ]);
      }
      if (o.Ex !== 0 || o.Ey !== 0) {
        const e = M[`${l.length - 1 - (o.Lvdx > 0 ? 1 : 0)},${o.Lviy > 0 ? 1 : 0},${$}`];
        if (e !== void 0) {
          const t = N.get(e) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          N.set(e, [
            t[0] + o.Ex,
            t[1] + o.Ey,
            t[2],
            t[3],
            t[4],
            t[5]
          ]);
        }
      }
      const co = [
        o.colB_1,
        o.colB_2,
        o.colB_3,
        o.colB_4,
        o.colB_5,
        o.colB_6,
        o.colB_7,
        o.colB_8
      ].map((e) => e > 0 ? e : o.colSize), lo = [
        o.colH_1,
        o.colH_2,
        o.colH_3,
        o.colH_4,
        o.colH_5,
        o.colH_6,
        o.colH_7,
        o.colH_8
      ].map((e) => e > 0 ? e : o.colSize), ro = [
        o.vigaB_1,
        o.vigaB_2,
        o.vigaB_3,
        o.vigaB_4,
        o.vigaB_5,
        o.vigaB_6,
        o.vigaB_7,
        o.vigaB_8
      ].map((e) => e > 0 ? e : o.vigaB), ho = [
        o.vigaH_1,
        o.vigaH_2,
        o.vigaH_3,
        o.vigaH_4,
        o.vigaH_5,
        o.vigaH_6,
        o.vigaH_7,
        o.vigaH_8
      ].map((e) => e > 0 ? e : o.vigaH), bo = (e) => {
        const t = co[e] ?? o.colSize, n = lo[e] ?? o.colSize;
        return {
          A: t * n,
          Iz: t * n ** 3 / 12,
          Iy: n * t ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(t, n), 4)
        };
      }, Bo = (e) => {
        const t = ro[e] ?? o.vigaB, n = ho[e] ?? o.vigaH;
        return {
          A: t * n,
          Iz: t * n ** 3 / 12,
          Iy: n * t ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(t, n), 3) * Math.max(t, n)
        };
      }, Lo = o.matCol < 0.5 ? z : P, Ho = o.matCol < 0.5 ? A : w, zo = o.matCol < 0.5 ? a : c, wo = o.matViga < 0.5 ? z : P, Ao = o.matViga < 0.5 ? A : w, Vo = o.matViga < 0.5 ? a : c, R = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), mo = /* @__PURE__ */ new Map();
      for (let e = 0; e < p.length; e++) {
        go.set(e, Uo);
        const t = D.get(e) ?? 0;
        if (to.has(e)) R.set(e, z), J.set(e, A), q.set(e, a), mo.set(e, o.slabT);
        else if (so.has(e)) {
          const n = bo(Math.min(t, 7));
          R.set(e, Lo), J.set(e, Ho), q.set(e, zo), j.set(e, n.A), K.set(e, n.Iz), Z.set(e, n.Iy), Q.set(e, n.J);
        } else {
          const n = Bo(Math.min(t, 7));
          R.set(e, wo), J.set(e, Ao), q.set(e, Vo), j.set(e, n.A), K.set(e, n.Iz), Z.set(e, n.Iy), Q.set(e, n.J);
        }
      }
      g.nodes.val = S, g.elements.val = p, g.nodeInputs.val = {
        supports: io,
        loads: N
      }, g.elementInputs.val = {
        elasticities: R,
        shearModuli: J,
        areas: j,
        momentsOfInertiaZ: K,
        momentsOfInertiaY: Z,
        torsionalConstants: Q,
        densities: go,
        poissonsRatios: q,
        thicknesses: mo
      };
      const vo = Fo(S, p, g.nodeInputs.val, g.elementInputs.val);
      g.deformOutputs.val = vo, g.analyzeOutputs.val = Oo(S, p, g.elementInputs.val, vo);
      const oo = qo(l, h, b), Yo = co[0], Xo = lo[0], Co = ro[0], Eo = ho[0];
      oo.push(G(`Col ${(Yo * 100).toFixed(0)}\xD7${(Xo * 100).toFixed(0)} cm`, l[0] + 0.3, h[0] + 0.3, b[1] * 0.5, "#ffaa00")), oo.push(G(`Viga ${(Co * 100).toFixed(0)}\xD7${(Eo * 100).toFixed(0)} cm`, (l[0] + l[1]) / 2, h[0], b[1] + 0.2, "#ffaa00")), g.objects3D.val = oo;
    },
    runModal(o, g, B) {
      var _a, _b;
      const d = g.nodes.val, $ = g.elements.val, _ = g.nodeInputs.val, x = g.elementInputs.val;
      if (!(!d.length || !$.length || !((_a = _.supports) == null ? void 0 : _a.size) || !((_b = x.densities) == null ? void 0 : _b.size))) try {
        const H = To(d, $, _, x, 12), z = Math.round(o.nVanosX), P = Math.round(o.nVanosY), a = Math.round(o.nPisos);
        B.render(H, {
          title: `Edificio ${z}\xD7${P} vanos \xD7 ${a} pisos`,
          properties: [
            `Material cols=${o.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${o.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${o.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(o.apoyo)]}  ${o.slabOn >= 0.5 ? "+ Losa " : ""}${o.bracesMode > 0 ? "+ Diagonales" : ""}`
          ]
        });
        const c = H.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] f\u2081=${c.toFixed(4)} Hz, T\u2081=${(1 / c).toFixed(4)} s`);
      } catch (H) {
        console.warn("Modal edificio error:", H.message);
      }
    }
  };
});
export {
  __tla,
  Zo as e
};
