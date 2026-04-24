import { a as Gt } from "./analyze-ClLKGn9k.js";
import { m as Zt, d as jt, __tla as __tla_0 } from "./didacticCpp-l2dJQgN-.js";
import { l as qt, m as Ct, n as Jt, o as Kt, L as Ut, B as Wt, V as It, a as Qt, p as to, e as oo, c as no } from "./Text-Dh9LKuSL.js";
let vo;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function st(t, n, x, s, m = "#00e5ff") {
    const h = document.createElement("canvas"), f = h.getContext("2d");
    f.font = "bold 96px system-ui, -apple-system, sans-serif";
    const B = Math.ceil(f.measureText(t).width);
    h.width = B + 32 * 2, h.height = 96 + 32 * 2, f.font = "bold 96px system-ui, -apple-system, sans-serif", f.fillStyle = "rgba(0,0,0,0.75)";
    const L = h.height / 2;
    f.beginPath(), f.moveTo(L, 0), f.arcTo(h.width, 0, h.width, L, L), f.arcTo(h.width, h.height, h.width - L, h.height, L), f.arcTo(0, h.height, 0, h.height - L, L), f.arcTo(0, 0, L, 0, L), f.closePath(), f.fill(), f.fillStyle = m, f.textBaseline = "middle", f.fillText(t, 32, h.height / 2);
    const A = new qt(h);
    A.minFilter = Ct, A.magFilter = Ct, A.anisotropy = 16, A.needsUpdate = true;
    const k = new Jt({
      map: A,
      depthTest: false,
      depthWrite: false,
      transparent: true
    }), $ = new Kt(k);
    $.position.set(n, x, s);
    const i = 0.45, d = h.width / h.height;
    return $.scale.set(i * d, i, 1), $.userData.isCota = true, $;
  }
  function X(t, n, x = 58879) {
    const s = new Ut({
      color: x,
      depthTest: false
    }), m = new Wt().setFromPoints([
      new It(...t),
      new It(...n)
    ]), c = new Qt(m, s);
    return c.renderOrder = 999, c.userData.isCota = true, c;
  }
  function eo(t, n, x) {
    const s = [], m = n[n.length - 1] + 1, c = t[t.length - 1] + 1, r = x[0];
    for (let v = 0; v < t.length - 1; v++) {
      const h = t[v], f = t[v + 1], B = f - h;
      s.push(X([
        h,
        m,
        r
      ], [
        f,
        m,
        r
      ])), s.push(X([
        h,
        m - 0.15,
        r
      ], [
        h,
        m + 0.15,
        r
      ])), s.push(X([
        f,
        m - 0.15,
        r
      ], [
        f,
        m + 0.15,
        r
      ])), s.push(st(`${B.toFixed(2)} m`, (h + f) / 2, m + 0.35, r));
    }
    for (let v = 0; v < n.length - 1; v++) {
      const h = n[v], f = n[v + 1], B = f - h;
      s.push(X([
        c,
        h,
        r
      ], [
        c,
        f,
        r
      ])), s.push(X([
        c - 0.15,
        h,
        r
      ], [
        c + 0.15,
        h,
        r
      ])), s.push(X([
        c - 0.15,
        f,
        r
      ], [
        c + 0.15,
        f,
        r
      ])), s.push(st(`${B.toFixed(2)} m`, c + 0.35, (h + f) / 2, r));
    }
    const u = t[0] - 1, y = n[0];
    for (let v = 0; v < x.length - 1; v++) {
      const h = x[v], f = x[v + 1], B = f - h;
      s.push(X([
        u,
        y,
        h
      ], [
        u,
        y,
        f
      ])), s.push(X([
        u - 0.15,
        y,
        h
      ], [
        u + 0.15,
        y,
        h
      ])), s.push(X([
        u - 0.15,
        y,
        f
      ], [
        u + 0.15,
        y,
        f
      ])), s.push(st(`Piso ${v + 1}: ${B.toFixed(2)} m`, u - 0.5, y, (h + f) / 2));
    }
    return s;
  }
  function Et(t, n = 0.5) {
    const x = so(n), s = t / x;
    let m = Math.max(2, Math.round(s));
    return t / m > x * 1.25 && (m = Math.ceil(s)), {
      n: m,
      dx: t / m
    };
  }
  function so(t) {
    return typeof t == "number" ? t : t === "fine" ? 0.25 : 0.5;
  }
  const ao = {
    "Grueso (50 cm)": 0.5,
    "Medio (30 cm)": 0.3,
    "Fino (25 cm)": 0.25,
    "Muy fino (15 cm)": 0.15
  };
  function io(t, n, x = {}) {
    const s = x.tol ?? 1e-5, m = 0, c = [], r = [], u = {
      areas: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      densities: /* @__PURE__ */ new Map()
    }, y = 1e8, v = 1e4, h = 1e4, f = 2 * h, B = y / (2 * (1 + 0.3));
    for (const L of n) {
      const A = [];
      let k = 0, $ = 0;
      for (let C = 0; C < t.length; C++) Math.abs(t[C][2] - L) < s && (A.push(C), k += t[C][0], $ += t[C][1]);
      if (A.length < 2) continue;
      const i = k / A.length, d = $ / A.length, b = t.length + c.length;
      c.push({
        idx: b,
        z: L,
        x: i,
        y: d
      });
      for (const C of A) {
        r.push([
          b,
          C
        ]);
        const V = m + r.length - 1;
        u.areas.set(V, v), u.momentsOfInertiaY.set(V, h), u.momentsOfInertiaZ.set(V, h), u.torsionalConstants.set(V, f), u.elasticities.set(V, y), u.shearModuli.set(V, B), u.densities.set(V, 0);
      }
    }
    return x.linkStiffness, {
      masterNodes: c,
      rigidLinks: r,
      linkProps: u
    };
  }
  function co(t, n, x) {
    const s = (m, c) => {
      m.forEach((r, u) => c.set(u + x, r));
    };
    n.areas = n.areas ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaY = n.momentsOfInertiaY ?? /* @__PURE__ */ new Map(), n.momentsOfInertiaZ = n.momentsOfInertiaZ ?? /* @__PURE__ */ new Map(), n.torsionalConstants = n.torsionalConstants ?? /* @__PURE__ */ new Map(), n.elasticities = n.elasticities ?? /* @__PURE__ */ new Map(), n.shearModuli = n.shearModuli ?? /* @__PURE__ */ new Map(), n.densities = n.densities ?? /* @__PURE__ */ new Map(), s(t.linkProps.areas, n.areas), s(t.linkProps.momentsOfInertiaY, n.momentsOfInertiaY), s(t.linkProps.momentsOfInertiaZ, n.momentsOfInertiaZ), s(t.linkProps.torsionalConstants, n.torsionalConstants), s(t.linkProps.elasticities, n.elasticities), s(t.linkProps.shearModuli, n.shearModuli), s(t.linkProps.densities, n.densities);
  }
  function Ft(t) {
    const n = Math.abs(t);
    return n < 0.8 ? {
      state: "Elastic",
      color: 2278750,
      ratio: t,
      description: "El\xE1stico (sin da\xF1o)"
    } : n < 1 ? {
      state: "B",
      color: 15381256,
      ratio: t,
      description: "B \u2014 Inicio fluencia"
    } : n < 1.5 ? {
      state: "IO",
      color: 16347926,
      ratio: t,
      description: "IO \u2014 Immediate Occupancy"
    } : n < 2.5 ? {
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
  function lo(t, n, x) {
    if (t <= 0 || n <= 0) return 1e-12;
    const m = Math.sqrt(12 * n / t) / 2;
    return n / m * x;
  }
  function ro(t, n, x, s, m, c, r, u = {}) {
    var _a, _b;
    const y = u.Fy_steel ?? 345e3;
    u.fc_concrete;
    const v = u.Fy_rebar ?? 42e4, h = u.omega ?? 0.15, f = u.phi ?? 0.9, B = m < 0.5 ? f * h * v * (1 - 0.59 * h) : f * y, L = c < 0.5 ? f * h * v * (1 - 0.59 * h) : f * y, A = x.frameBendingMoments, k = [];
    for (let $ = 0; $ < n.length; $++) {
      const i = n[$];
      if (i.length !== 2) continue;
      const [d, b] = i, C = r.has($);
      let V = 0, Y = 0;
      const p = A == null ? void 0 : A.get($);
      p && (V = p.Mi, Y = p.Mj);
      const F = ((_a = s.areas) == null ? void 0 : _a.get($)) ?? 0.16, S = ((_b = s.momentsOfInertiaZ) == null ? void 0 : _b.get($)) ?? 213e-5, R = lo(F, S, C ? B : L), J = V / R, G = Y / R;
      k.push({
        nodeIdx: d,
        elementIdx: $,
        end: "i",
        classification: Ft(J)
      }), k.push({
        nodeIdx: b,
        elementIdx: $,
        end: "j",
        classification: Ft(G)
      });
    }
    return k;
  }
  function ho(t, n, x, s = {}) {
    const m = s.showElastic ?? false, c = (s.radiusFactor ?? 0.02) * x, r = [], u = new to(c, 12, 8);
    for (const y of t) {
      if (!m && y.classification.state === "Elastic") continue;
      const v = n[y.nodeIdx];
      if (!v) continue;
      const h = new oo({
        color: y.classification.color,
        transparent: true,
        opacity: 0.85
      }), f = new no(u, h);
      f.position.set(v[0], v[1], v[2]), f.userData = {
        hingeState: y.classification.state,
        ratio: y.classification.ratio.toFixed(3),
        element: y.elementIdx,
        end: y.end
      }, r.push(f);
    }
    return r;
  }
  function fo(t) {
    const n = {
      Elastic: 0,
      B: 0,
      IO: 0,
      LS: 0,
      CP: 0
    };
    for (const x of t) n[x.classification.state]++;
    return n;
  }
  let go, w, H;
  go = 24;
  w = (t, n, x, s, m, c) => ({
    default: x,
    min: s,
    max: m,
    step: c,
    label: n,
    folder: t
  });
  H = (t, n, x, s) => ({
    default: x,
    label: n,
    folder: t,
    options: s
  });
  vo = {
    id: "edificio-aporticado",
    name: "Edificio Aporticado",
    category: "Edificios",
    defaultShellResult: "none",
    availableShellResults: [],
    hasModal: true,
    params: {
      nVanosX: {
        ...w("Geometr\xEDa", "Vanos X", 2, 1, 6, 1),
        regenOnChange: true
      },
      nVanosY: {
        ...w("Geometr\xEDa", "Vanos Y", 2, 1, 6, 1),
        regenOnChange: true
      },
      nPisos: {
        ...w("Geometr\xEDa", "N. Pisos", 3, 1, 8, 1),
        regenOnChange: true
      },
      spanX: w("Geometr\xEDa", "Luz X uniforme (m)", 5, 2, 12, 0.5),
      spanY: w("Geometr\xEDa", "Luz Y uniforme (m)", 5, 2, 12, 0.5),
      hPiso: w("Geometr\xEDa", "h piso uniforme (m)", 3, 2, 5, 0.1),
      Lvix: w("Geometr\xEDa", "Voladizo izq X (m)", 0, 0, 3, 0.25),
      Lvdx: w("Geometr\xEDa", "Voladizo der X (m)", 0, 0, 3, 0.25),
      Lviy: w("Geometr\xEDa", "Voladizo izq Y (m)", 0, 0, 3, 0.25),
      Lvdy: w("Geometr\xEDa", "Voladizo der Y (m)", 0, 0, 3, 0.25),
      hP_7: w("Alturas por piso", "Piso 7 (m)", 0, 0, 6, 0.1),
      hP_8: w("Alturas por piso", "Piso 8 (m)", 0, 0, 6, 0.1),
      matCol: H("Secciones (global)", "Material columna", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      matViga: H("Secciones (global)", "Material viga", 0, {
        Hormig\u00F3n: 0,
        "Acero W": 1
      }),
      colShape: H("Secciones (global)", "Forma columna", 0, {
        Rectangular: 0,
        Circular: 1
      }),
      fcConcr: w("Secciones (global)", "f'c hormig\xF3n (kg/cm\xB2)", 240, 140, 420, 10),
      fyAcero: w("Secciones (global)", "fy acero (kg/cm\xB2)", 2530, 1800, 4200, 100),
      colSize: w("Secciones (global)", "b\xD7h columna (m)", 0.4, 0.25, 0.8, 0.05),
      vigaB: w("Secciones (global)", "b viga (m)", 0.3, 0.2, 0.6, 0.05),
      vigaH: w("Secciones (global)", "h viga (m)", 0.5, 0.3, 0.9, 0.05),
      apoyo: H("Apoyo", "Tipo", 0, {
        Empotrado: 0,
        "Articulado (3 DOFs)": 1,
        "R\xF3tula completa": 2
      }),
      CM: w("Cargas", "CM (kN/nodo)", -5, -30, 0, 0.5),
      CV: w("Cargas", "CV (kN/nodo)", -2, -20, 0, 0.5),
      Ex: w("Cargas", "Ex sismo tope (kN)", 50, 0, 500, 10),
      Ey: w("Cargas", "Ey sismo tope (kN)", 0, 0, 500, 10),
      nSubViga: w("Avanzado", "Div. vigas", 1, 1, 6, 1),
      nSubCol: w("Avanzado", "Div. columnas", 1, 1, 4, 1),
      vSecOn: H("Avanzado", "Vigas secundarias", 0, {
        Off: 0,
        On: 1
      }),
      nVSec: w("Avanzado", "N\xB0 vigas sec. por vano", 2, 1, 5, 1),
      vSecDir: H("Avanzado", "Dir secundarias", 0, {
        X: 0,
        Y: 1
      }),
      bracesMode: H("Avanzado", "Diagonales", 0, {
        ninguna: 0,
        perimetrales: 1,
        todas: 2,
        "solo X": 3,
        "solo Y": 4
      }),
      slabOn: H("Avanzado", "Losa", 0, {
        Off: 0,
        On: 1
      }),
      slabT: w("Avanzado", "t losa (m)", 0.15, 0.08, 0.3, 0.01),
      slabType: H("Avanzado", "Tipo losa (ETABS)", 0, {
        "Shell (membrane+plate)": 0,
        "Membrane only": 1,
        "Plate only": 2
      }),
      slabDisc: H("Avanzado", "Discretizaci\xF3n losa", 0.5, ao),
      diafragmaRigido: H("Avanzado", "Diafragma r\xEDgido", 0, {
        Flexible: 0,
        "R\xEDgido (ASCE 7-22)": 1
      })
    },
    dynamicParams(t) {
      const n = {}, x = Math.round(t.nPisos ?? 3), s = Math.round(t.nVanosX ?? 2), m = Math.round(t.nVanosY ?? 2);
      for (let c = 1; c <= x; c++) n[`hP_${c}`] = w("Alturas por piso", `h Piso ${c} (m)`, 0, 0, 6, 0.1), n[`colB_p${c}`] = w("Secciones por piso", `b col P${c} (m)`, 0, 0, 1, 0.05), n[`colH_p${c}`] = w("Secciones por piso", `h col P${c} (m)`, 0, 0, 1, 0.05), n[`vigaB_p${c}`] = w("Secciones por piso", `b viga P${c} (m)`, 0, 0, 0.8, 0.05), n[`vigaH_p${c}`] = w("Secciones por piso", `h viga P${c} (m)`, 0, 0, 1, 0.05);
      for (let c = 1; c <= s; c++) n[`svX_${c}`] = w("Luces por vano", `svX #${c} (m)`, 0, 0, 12, 0.5);
      for (let c = 1; c <= m; c++) n[`svY_${c}`] = w("Luces por vano", `svY #${c} (m)`, 0, 0, 12, 0.5);
      return n;
    },
    computedLabels(t, n) {
      var _a;
      const s = (_a = n.deformOutputs.rawVal) == null ? void 0 : _a.reactions, m = n.nodes.rawVal;
      if (!s || !(m == null ? void 0 : m.length)) return {
        "Reacciones (\u2192 zapatas)": "\u2014"
      };
      let c = 0, r = 0, u = 0, y = -1, v = 0, h = -1;
      s.forEach((d, b) => {
        const C = m[b];
        if (!C || Math.abs(C[2]) > 1e-6) return;
        const V = d[2], Y = d[3], p = d[4];
        Math.abs(V) > Math.abs(c) && (c = V, y = b, C[0], C[1]), V > 0 && V > Math.abs(v) && (v = V, h = b), Math.abs(Y) > Math.abs(r) && (r = Y), Math.abs(p) > Math.abs(u) && (u = p);
      });
      const f = Math.abs(c) / 9.80665, B = Math.abs(r) / 9.80665, L = Math.abs(u) / 9.80665, A = v / 9.80665, k = Math.round(t.nPisos), $ = {
        "\u2500\u2500 Reacciones m\xE1x (\u2192 zapatas) \u2500\u2500": "",
        "P (compresi\xF3n)": `${f.toFixed(2)} tonf (nodo ${y})`,
        Mx: `${B.toFixed(2)} tonf\xB7m`,
        My: `${L.toFixed(2)} tonf\xB7m`
      };
      A > 0.01 && ($["\u26A0 Uplift"] = `${A.toFixed(2)} tonf (nodo ${h})`), $.Pisos = `${k}`, $["Copiar a \u2192 zapata-aislada"] = `P=${f.toFixed(1)}, Mx=${B.toFixed(1)}, My=${L.toFixed(1)}`;
      const i = n.__plasticHinges;
      if (i) {
        const d = (i.B ?? 0) + (i.IO ?? 0) + (i.LS ?? 0) + (i.CP ?? 0);
        $["\u2500\u2500 R\xF3tulas pl\xE1sticas (ASCE 41-17) \u2500\u2500"] = "", $["\u{1F7E2} El\xE1stico"] = `${i.Elastic ?? 0}`, $["\u{1F7E1} B \u2014 Yield"] = `${i.B ?? 0}`, $["\u{1F7E0} IO \u2014 Immed.Occ."] = `${i.IO ?? 0}`, $["\u{1F534} LS \u2014 Life Safety"] = `${i.LS ?? 0}`, $["\u26AB CP \u2014 Collapse Prev."] = `${i.CP ?? 0}`, $["Total r\xF3tulas formadas"] = `${d}`;
      }
      return $;
    },
    build(t, n) {
      const x = Math.round(t.nVanosX), s = Math.round(t.nVanosY), m = Math.round(t.nPisos), c = Math.max(1, Math.round(t.nSubViga)), r = Math.max(1, Math.round(t.nSubCol)), u = t.fcConcr * 0.0981, y = 4700 * Math.sqrt(u) * 1e3, v = 2e8, h = 0.2, f = 0.3, B = y / (2 * (1 + h)), L = v / (2 * (1 + f)), A = [
        t.svX_1,
        t.svX_2,
        t.svX_3,
        t.svX_4,
        t.svX_5,
        t.svX_6
      ].slice(0, x).map((o) => o > 0 ? o : t.spanX), k = [
        t.svY_1,
        t.svY_2,
        t.svY_3,
        t.svY_4,
        t.svY_5,
        t.svY_6
      ].slice(0, s).map((o) => o > 0 ? o : t.spanY), $ = [
        t.hP_1,
        t.hP_2,
        t.hP_3,
        t.hP_4,
        t.hP_5,
        t.hP_6,
        t.hP_7,
        t.hP_8
      ].slice(0, m).map((o) => o > 0 ? o : t.hPiso), i = [];
      t.Lvix > 0 && i.push(-t.Lvix), i.push(0);
      for (let o = 0; o < x; o++) i.push(i[i.length - 1] + A[o]);
      t.Lvdx > 0 && i.push(i[i.length - 1] + t.Lvdx);
      const d = [];
      t.Lviy > 0 && d.push(-t.Lviy), d.push(0);
      for (let o = 0; o < s; o++) d.push(d[d.length - 1] + k[o]);
      t.Lvdy > 0 && d.push(d[d.length - 1] + t.Lvdy);
      const b = [
        0
      ];
      for (let o = 0; o < m; o++) b.push(b[b.length - 1] + $[o]);
      const C = (o) => t.Lvix > 0 && o === 0 || t.Lvdx > 0 && o === i.length - 1, V = (o) => t.Lviy > 0 && o === 0 || t.Lvdy > 0 && o === d.length - 1, Y = (o, e) => C(o) || V(e), p = [], F = {};
      for (let o = 0; o < b.length; o++) for (let e = 0; e < d.length; e++) for (let a = 0; a < i.length; a++) o === 0 && Y(a, e) || (F[`${a},${e},${o}`] = p.length, p.push([
        i[a],
        d[e],
        b[o]
      ]));
      const S = [], U = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Map(), P = (o, e, a, g, l) => {
        if (a <= 1) {
          g.add(S.length), G.set(S.length, l), S.push([
            o,
            e
          ]);
          return;
        }
        const O = p[o], M = p[e];
        let z = o;
        for (let T = 1; T < a; T++) {
          const _ = T / a, E = p.length;
          p.push([
            O[0] + (M[0] - O[0]) * _,
            O[1] + (M[1] - O[1]) * _,
            O[2] + (M[2] - O[2]) * _
          ]), g.add(S.length), G.set(S.length, l), S.push([
            z,
            E
          ]), z = E;
        }
        g.add(S.length), G.set(S.length, l), S.push([
          z,
          e
        ]);
      };
      for (let o = 0; o < b.length - 1; o++) for (let e = 0; e < d.length; e++) for (let a = 0; a < i.length; a++) Y(a, e) || P(F[`${a},${e},${o}`], F[`${a},${e},${o + 1}`], r, U, o);
      for (let o = 1; o < b.length; o++) for (let e = 0; e < d.length; e++) for (let a = 0; a < i.length - 1; a++) P(F[`${a},${e},${o}`], F[`${a + 1},${e},${o}`], c, R, o - 1);
      for (let o = 1; o < b.length; o++) for (let e = 0; e < i.length; e++) for (let a = 0; a < d.length - 1; a++) P(F[`${e},${a},${o}`], F[`${e},${a + 1},${o}`], c, R, o - 1);
      if (t.vSecOn >= 0.5 && t.nVSec >= 1) {
        const o = Math.round(t.nVSec), e = (g, l, O) => {
          for (let z = 0; z < p.length; z++) if (Math.abs(p[z][0] - g) < 1e-6 && Math.abs(p[z][1] - l) < 1e-6 && Math.abs(p[z][2] - O) < 1e-6) return z;
          const M = p.length;
          return p.push([
            g,
            l,
            O
          ]), M;
        }, a = t.vSecDir < 0.5 ? "x" : "y";
        for (let g = 1; g < b.length; g++) if (a === "x") for (let l = 0; l < d.length - 1; l++) {
          const O = d[l], M = d[l + 1];
          for (let z = 1; z <= o; z++) {
            const T = O + z / (o + 1) * (M - O), _ = [];
            for (let E = 0; E < i.length; E++) _.push(e(i[E], T, b[g]));
            for (let E = 0; E < i.length - 1; E++) R.add(S.length), S.push([
              _[E],
              _[E + 1]
            ]);
          }
        }
        else for (let l = 0; l < i.length - 1; l++) {
          const O = i[l], M = i[l + 1];
          for (let z = 1; z <= o; z++) {
            const T = O + z / (o + 1) * (M - O), _ = [];
            for (let E = 0; E < d.length; E++) _.push(e(T, d[E], b[g]));
            for (let E = 0; E < d.length - 1; E++) R.add(S.length), S.push([
              _[E],
              _[E + 1]
            ]);
          }
        }
      }
      const I = Math.round(t.bracesMode);
      if (I > 0) {
        const o = I === 1 || I === 2 || I === 3, e = I === 1 || I === 2 || I === 4, a = b.length - 1;
        for (let g = 0; g < a; g++) {
          if (o) for (let l = 0; l < d.length; l++) {
            if (I === 1 && l !== 0 && l !== d.length - 1) continue;
            const O = Math.floor((i.length - 1) / 2);
            for (let M = 0; M < i.length - 1; M++) {
              if (I === 1 && M !== O || Y(M, l) || Y(M + 1, l)) continue;
              const z = F[`${M},${l},${g}`], T = F[`${M + 1},${l},${g + 1}`], _ = F[`${M + 1},${l},${g}`], E = F[`${M},${l},${g + 1}`];
              z !== void 0 && T !== void 0 && S.push([
                z,
                T
              ]), _ !== void 0 && E !== void 0 && S.push([
                _,
                E
              ]);
            }
          }
          if (e) for (let l = 0; l < i.length; l++) {
            if (I === 1 && l !== 0 && l !== i.length - 1) continue;
            const O = Math.floor((d.length - 1) / 2);
            for (let M = 0; M < d.length - 1; M++) {
              if (I === 1 && M !== O || Y(l, M) || Y(l, M + 1)) continue;
              const z = F[`${l},${M},${g}`], T = F[`${l},${M + 1},${g + 1}`], _ = F[`${l},${M + 1},${g}`], E = F[`${l},${M},${g + 1}`];
              z !== void 0 && T !== void 0 && S.push([
                z,
                T
              ]), _ !== void 0 && E !== void 0 && S.push([
                _,
                E
              ]);
            }
          }
        }
      }
      if (t.slabOn >= 0.5) {
        const o = /* @__PURE__ */ new Map(), e = (g, l, O) => `${Math.round(g * 1e4)},${Math.round(l * 1e4)},${Math.round(O * 1e4)}`;
        for (let g = 0; g < p.length; g++) o.set(e(p[g][0], p[g][1], p[g][2]), g);
        const a = t.slabDisc > 0 ? t.slabDisc : 0.5;
        for (let g = 1; g < b.length; g++) {
          const l = b[g];
          for (let O = 0; O < i.length - 1; O++) for (let M = 0; M < d.length - 1; M++) {
            const z = i[O], T = i[O + 1], _ = d[M], E = d[M + 1], { n: Mt } = Et(Math.abs(T - z), a), { n: vt } = Et(Math.abs(E - _), a), et = [];
            for (let N = 0; N <= vt; N++) {
              const D = [];
              for (let pt = 0; pt <= Mt; pt++) {
                const wt = z + pt / Mt * (T - z), Pt = _ + N / vt * (E - _), St = e(wt, Pt, l), Ot = o.get(St);
                if (Ot !== void 0) D.push(Ot);
                else {
                  const zt = p.length;
                  p.push([
                    wt,
                    Pt,
                    l
                  ]), o.set(St, zt), D.push(zt);
                }
              }
              et.push(D);
            }
            for (let N = 0; N < vt; N++) for (let D = 0; D < Mt; D++) J.add(S.length), S.push([
              et[N][D],
              et[N][D + 1],
              et[N + 1][D + 1],
              et[N + 1][D]
            ]);
          }
        }
      }
      const K = Math.round(t.apoyo), at = K === 0 ? [
        true,
        true,
        true,
        true,
        true,
        true
      ] : K === 1 ? [
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
      ], Z = /* @__PURE__ */ new Map();
      for (let o = 0; o < d.length; o++) for (let e = 0; e < i.length; e++) Y(e, o) || Z.set(F[`${e},${o},0`], [
        ...at
      ]);
      const j = /* @__PURE__ */ new Map(), q = t.CM + t.CV;
      if (q !== 0) for (let o = 1; o < b.length; o++) for (let e = 0; e < d.length; e++) for (let a = 0; a < i.length; a++) {
        const g = `${a},${e},${o}`;
        F[g] !== void 0 && j.set(F[g], [
          0,
          0,
          q,
          0,
          0,
          0
        ]);
      }
      if (t.Ex !== 0 || t.Ey !== 0) {
        const o = F[`${i.length - 1 - (t.Lvdx > 0 ? 1 : 0)},${t.Lviy > 0 ? 1 : 0},${m}`];
        if (o !== void 0) {
          const e = j.get(o) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          j.set(o, [
            e[0] + t.Ex,
            e[1] + t.Ey,
            e[2],
            e[3],
            e[4],
            e[5]
          ]);
        }
      }
      const W = [
        t.colB_1,
        t.colB_2,
        t.colB_3,
        t.colB_4,
        t.colB_5,
        t.colB_6,
        t.colB_7,
        t.colB_8
      ].map((o) => o > 0 ? o : t.colSize), Q = [
        t.colH_1,
        t.colH_2,
        t.colH_3,
        t.colH_4,
        t.colH_5,
        t.colH_6,
        t.colH_7,
        t.colH_8
      ].map((o) => o > 0 ? o : t.colSize), tt = [
        t.vigaB_1,
        t.vigaB_2,
        t.vigaB_3,
        t.vigaB_4,
        t.vigaB_5,
        t.vigaB_6,
        t.vigaB_7,
        t.vigaB_8
      ].map((o) => o > 0 ? o : t.vigaB), it = [
        t.vigaH_1,
        t.vigaH_2,
        t.vigaH_3,
        t.vigaH_4,
        t.vigaH_5,
        t.vigaH_6,
        t.vigaH_7,
        t.vigaH_8
      ].map((o) => o > 0 ? o : t.vigaH), gt = (o) => {
        const e = W[o] ?? t.colSize, a = Q[o] ?? t.colSize;
        return {
          A: e * a,
          Iz: e * a ** 3 / 12,
          Iy: a * e ** 3 / 12,
          J: 0.14 * Math.pow(Math.min(e, a), 4)
        };
      }, mt = (o) => {
        const e = tt[o] ?? t.vigaB, a = it[o] ?? t.vigaH;
        return {
          A: e * a,
          Iz: e * a ** 3 / 12,
          Iy: a * e ** 3 / 12,
          J: 0.21 * Math.pow(Math.min(e, a), 3) * Math.max(e, a)
        };
      }, Lt = t.matCol < 0.5 ? y : v, At = t.matCol < 0.5 ? B : L, Bt = t.matCol < 0.5 ? h : f, Vt = t.matViga < 0.5 ? y : v, Tt = t.matViga < 0.5 ? B : L, kt = t.matViga < 0.5 ? h : f, ot = /* @__PURE__ */ new Map(), nt = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), ft = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map(), $t = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new Map(), yt = Math.round(t.slabType), Yt = yt === 2 ? 0 : 1, Ht = yt === 1 ? 0 : 1;
      for (let o = 0; o < S.length; o++) {
        ut.set(o, go);
        const e = G.get(o) ?? 0;
        if (J.has(o)) ot.set(o, y), nt.set(o, B), ft.set(o, h), xt.set(o, t.slabT), $t.set(o, Yt), _t.set(o, Ht);
        else if (U.has(o)) {
          const a = gt(Math.min(e, 7));
          ot.set(o, Lt), nt.set(o, At), ft.set(o, Bt), ct.set(o, a.A), lt.set(o, a.Iz), rt.set(o, a.Iy), ht.set(o, a.J);
        } else {
          const a = mt(Math.min(e, 7));
          ot.set(o, Vt), nt.set(o, Tt), ft.set(o, kt), ct.set(o, a.A), lt.set(o, a.Iz), rt.set(o, a.Iy), ht.set(o, a.J);
        }
      }
      if (t.diafragmaRigido >= 0.5) {
        const o = [];
        for (let l = 1; l < b.length; l++) o.push(b[l]);
        const e = io(p, o), a = S.length;
        for (const l of e.masterNodes) p.push([
          l.x,
          l.y,
          l.z
        ]);
        for (const l of e.rigidLinks) S.push(l);
        co(e, {
          elasticities: ot,
          shearModuli: nt,
          areas: ct,
          momentsOfInertiaZ: lt,
          momentsOfInertiaY: rt,
          torsionalConstants: ht,
          densities: ut
        }, a);
      }
      n.nodes.val = p, n.elements.val = S, n.nodeInputs.val = {
        supports: Z,
        loads: j
      }, n.elementInputs.val = {
        elasticities: ot,
        shearModuli: nt,
        areas: ct,
        momentsOfInertiaZ: lt,
        momentsOfInertiaY: rt,
        torsionalConstants: ht,
        densities: ut,
        poissonsRatios: ft,
        thicknesses: xt,
        membraneModifiers: $t,
        bendingModifiers: _t
      };
      const bt = jt(p, S, n.nodeInputs.val, n.elementInputs.val);
      n.deformOutputs.val = bt, n.analyzeOutputs.val = Gt(p, S, n.elementInputs.val, bt);
      const dt = eo(i, d, b), Nt = W[0], Dt = Q[0], Rt = tt[0], Xt = it[0];
      dt.push(st(`Col ${(Nt * 100).toFixed(0)}\xD7${(Dt * 100).toFixed(0)} cm`, i[0] + 0.3, d[0] + 0.3, b[1] * 0.5, "#ffaa00")), dt.push(st(`Viga ${(Rt * 100).toFixed(0)}\xD7${(Xt * 100).toFixed(0)} cm`, (i[0] + i[1]) / 2, d[0], b[1] + 0.2, "#ffaa00"));
      try {
        const o = ro(p, S, n.analyzeOutputs.rawVal, n.elementInputs.rawVal, Math.round(t.matCol), Math.round(t.matViga), U);
        let e = 1 / 0, a = 1 / 0, g = 1 / 0, l = -1 / 0, O = -1 / 0, M = -1 / 0;
        for (const _ of p) _[0] < e && (e = _[0]), _[0] > l && (l = _[0]), _[1] < a && (a = _[1]), _[1] > O && (O = _[1]), _[2] < g && (g = _[2]), _[2] > M && (M = _[2]);
        const z = Math.sqrt((l - e) ** 2 + (O - a) ** 2 + (M - g) ** 2) || 1, T = ho(o, p, z, {
          showElastic: false,
          radiusFactor: 0.015
        });
        dt.push(...T), n.__plasticHinges = fo(o);
      } catch (o) {
        console.warn("[Plastic Hinges]", o);
      }
      n.objects3D.val = dt;
    },
    runModal(t, n, x) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      const s = n.nodes.val, m = n.elements.val, c = n.nodeInputs.val, r = n.elementInputs.val;
      if (!(!s.length || !m.length || !((_a = c.supports) == null ? void 0 : _a.size) || !((_b = r.densities) == null ? void 0 : _b.size))) try {
        const u = [], y = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map();
        let i = 0, d = 0;
        const b = [];
        let C = 0;
        for (let P = 0; P < m.length; P++) {
          const I = m[P];
          let K = false, at = false;
          if (I.length === 4) {
            const Z = I.map((q) => s[q][2]);
            if (Math.max(...Z) - Math.min(...Z) < 0.02) {
              const q = s[I[0]][0], W = s[I[0]][1], Q = s[I[2]][0], tt = s[I[2]][1], it = Math.abs((Q - q) * (tt - W)), gt = ((_c = r.thicknesses) == null ? void 0 : _c.get(P)) ?? 0.15, mt = ((_d = r.densities) == null ? void 0 : _d.get(P)) ?? 24;
              i += mt * it * gt, K = true;
            }
          } else if (I.length === 2) {
            const Z = s[I[0]][2], j = s[I[1]][2], q = Math.sqrt((s[I[1]][0] - s[I[0]][0]) ** 2 + (s[I[1]][1] - s[I[0]][1]) ** 2);
            if (Math.abs(j - Z) > q) {
              at = true;
              const W = Math.abs(j - Z), Q = ((_e = r.areas) == null ? void 0 : _e.get(P)) ?? 0, tt = ((_f = r.densities) == null ? void 0 : _f.get(P)) ?? 24;
              d += tt * Q * W;
            }
          }
          K || (u.push(I), ((_g = r.areas) == null ? void 0 : _g.has(P)) && y.set(C, r.areas.get(P)), ((_h = r.momentsOfInertiaY) == null ? void 0 : _h.has(P)) && v.set(C, r.momentsOfInertiaY.get(P)), ((_i = r.momentsOfInertiaZ) == null ? void 0 : _i.has(P)) && h.set(C, r.momentsOfInertiaZ.get(P)), ((_j = r.torsionalConstants) == null ? void 0 : _j.has(P)) && f.set(C, r.torsionalConstants.get(P)), ((_k = r.elasticities) == null ? void 0 : _k.has(P)) && B.set(C, r.elasticities.get(P)), ((_l = r.shearModuli) == null ? void 0 : _l.has(P)) && L.set(C, r.shearModuli.get(P)), ((_m = r.densities) == null ? void 0 : _m.has(P)) && A.set(C, r.densities.get(P)), ((_n = r.thicknesses) == null ? void 0 : _n.has(P)) && k.set(C, r.thicknesses.get(P)), ((_o = r.poissonsRatios) == null ? void 0 : _o.has(P)) && $.set(C, r.poissonsRatios.get(P)), at && b.push(C), C++);
        }
        if (i > 0 && d > 0 && b.length > 0) {
          const P = 1 + i / d;
          for (const I of b) {
            const K = A.get(I) ?? 24;
            A.set(I, K * P);
          }
        }
        const V = {
          areas: y,
          momentsOfInertiaY: v,
          momentsOfInertiaZ: h,
          torsionalConstants: f,
          elasticities: B,
          shearModuli: L,
          densities: A,
          thicknesses: k,
          poissonsRatios: $
        }, Y = Math.round(t.nPisos), p = Math.min(60, Math.max(15, 3 * Y + 6)), F = Zt(s, u, c, V, p), S = Math.round(t.nVanosX), U = Math.round(t.nVanosY), R = Math.round(t.nPisos), J = d > 0 ? 1 + i / d : 1;
        x.render(F, {
          title: `Edificio ${S}\xD7${U} vanos \xD7 ${R} pisos \xB7 ${p} modos`,
          properties: [
            `Material cols=${t.matCol < 0.5 ? "Hormig\xF3n" : "Acero"} vigas=${t.matViga < 0.5 ? "Hormig\xF3n" : "Acero"}  f'c=${t.fcConcr} kg/cm\xB2`,
            `Apoyo: ${[
              "Empotrado",
              "Articulado",
              "R\xF3tula"
            ][Math.round(t.apoyo)]}${t.slabOn >= 0.5 ? ` + Losa (lumped: \xD7${J.toFixed(2)} dens cols, ${i.toFixed(0)} kN/g)` : ""}${t.bracesMode > 0 ? " + Diagonales" : ""}`,
            "Estilo ETABS: losas filtradas del modal + masa transferida a columnas (igual que membrane diaphragm en ETABS/SAP)"
          ]
        });
        const G = F.frequencies[0] ?? 0;
        console.log(`[Edificio Modal] ${p} modos \xB7 f\u2081=${G.toFixed(4)} Hz \xB7 m_slab=${i.toFixed(0)} m_cols=${d.toFixed(0)} factor=${J.toFixed(2)}`);
      } catch (u) {
        console.warn("Modal edificio error:", u.message);
      }
    }
  };
});
export {
  __tla,
  vo as e
};
