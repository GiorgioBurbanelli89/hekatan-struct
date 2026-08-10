import { a as ee } from "./analyze-CDRzE7vM.js";
import { d as se, __tla as __tla_0 } from "./didacticCpp-BTBicwl0.js";
let re, oe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const G = {
    ux: 0,
    uy: 1,
    uz: 2,
    rx: 3,
    ry: 4,
    rz: 5,
    fx: 0,
    fy: 1,
    fz: 2,
    mx: 3,
    my: 4,
    mz: 5
  };
  function Q(_) {
    const t = _.toLowerCase().trim();
    if (t === "fixed" || t === "empotrado") return [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    if (t === "pinned" || t === "articulado") return [
      true,
      true,
      true,
      false,
      false,
      false
    ];
    if (t === "roller" || t === "rodillo") return [
      false,
      false,
      true,
      false,
      false,
      false
    ];
    const p = [
      false,
      false,
      false,
      false,
      false,
      false
    ], r = t.split(/[\s,]+/);
    for (const f of r) G[f] !== void 0 && (p[G[f]] = true);
    if (/^[01]+$/.test(t) && t.length <= 6) for (let f = 0; f < t.length; f++) p[f] = t[f] === "1";
    return p;
  }
  oe = function(_) {
    const t = {
      nodes: /* @__PURE__ */ new Map(),
      frames: [],
      shells: [],
      shellLoads: /* @__PURE__ */ new Map(),
      shellMods: /* @__PURE__ */ new Map(),
      shellModsDir: /* @__PURE__ */ new Map(),
      shellAngles: /* @__PURE__ */ new Map(),
      areaObjs: [],
      supports: /* @__PURE__ */ new Map(),
      loads: /* @__PURE__ */ new Map(),
      frameLoads: /* @__PURE__ */ new Map(),
      springs: [],
      doSolve: false,
      errors: []
    };
    let p = null, r = 0, f = 0, O = 0;
    const v = _.split(/\r?\n/);
    for (let L = 0; L < v.length; L++) {
      let m = v[L].trim();
      if (!m || m.startsWith("#") || m.startsWith("//")) continue;
      m = m.replace(/[;]+$/, "");
      const s = m.split(/\s+/), F = s[0].toLowerCase();
      if (F === "nodes" && s.length === 1) {
        p = "nodes";
        continue;
      }
      if ((F === "elements" || F === "frames") && s.length === 1) {
        p = "elements";
        continue;
      }
      if (F === "areas" && s.length === 1) {
        p = "areas";
        continue;
      }
      if (F === "supports" && s.length === 1) {
        p = "supports";
        continue;
      }
      if (F === "loads" && s.length === 1) {
        p = "loads";
        continue;
      }
      if (F === "springs" && s.length === 1) {
        p = "springs";
        continue;
      }
      if (p && /^[\-\d]/.test(s[0])) {
        const o = s.map(parseFloat);
        if (p === "nodes" && o.length >= 3) {
          r++, t.nodes.set(r, [
            o[0],
            o[1],
            o[2]
          ]);
          continue;
        }
        if (p === "elements" && o.length >= 2) {
          f++, t.frames.push({
            id: f,
            nI: o[0] + 1,
            nJ: o[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (p === "areas" && o.length >= 4) {
          O++, t.shells.push({
            id: O,
            pts: [
              o[0] + 1,
              o[1] + 1,
              o[2] + 1,
              o[3] + 1
            ],
            t: 0.2,
            E: 25e6
          });
          continue;
        }
        if (p === "loads" && o.length >= 4) {
          t.loads.set(o[0], [
            o[1] ?? 0,
            o[2] ?? 0,
            o[3] ?? 0,
            o[4] ?? 0,
            o[5] ?? 0,
            o[6] ?? 0
          ]);
          continue;
        }
        if (p === "springs" && o.length >= 3) {
          t.springs.push({
            node: o[0],
            dof: o[1],
            k: o[2]
          });
          continue;
        }
      }
      if (p === "supports" && /^\d/.test(s[0])) {
        const o = parseInt(s[0], 10), l = s.slice(1).join(" ");
        t.supports.set(o, Q(l));
        continue;
      }
      p && !/^[\-\d]/.test(s[0]) && (p = null);
      try {
        switch (F) {
          case "node":
          case "n": {
            const o = parseInt(s[1], 10), l = parseFloat(s[2]), d = parseFloat(s[3]), u = parseFloat(s[4]);
            !isFinite(o) || !isFinite(l) || !isFinite(d) || !isFinite(u) ? t.errors.push(`L${L + 1}: node mal formado: ${m}`) : t.nodes.set(o, [
              l,
              d,
              u
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const o = parseInt(s[1], 10), l = parseInt(s[2], 10), d = parseInt(s[3], 10), u = parseFloat(s[4] ?? "25e6"), g = parseFloat(s[5] ?? "0.16"), y = parseFloat(s[6] ?? "0.001"), k = s[7] !== void 0 ? parseFloat(s[7]) : void 0, E = s[8] !== void 0 ? parseFloat(s[8]) : void 0, j = s[9] !== void 0 ? parseFloat(s[9]) : void 0, w = s[10] !== void 0 ? parseFloat(s[10]) : void 0, S = s[11] !== void 0 ? parseFloat(s[11]) : void 0, J = s[12] !== void 0 ? parseFloat(s[12]) : void 0;
            t.frames.push({
              id: o,
              nI: l,
              nJ: d,
              E: u,
              A: g,
              I: y,
              Iy: k,
              J: E,
              nu: j,
              rho: w,
              D: S,
              B: J
            });
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const o = parseInt(s[1], 10), l = [
              parseInt(s[2], 10),
              parseInt(s[3], 10),
              parseInt(s[4], 10),
              parseInt(s[5], 10)
            ], d = parseFloat(s[6] ?? "0.20"), u = parseFloat(s[7] ?? "25e6"), g = s[9] !== void 0 ? parseFloat(s[9]) : void 0, y = g !== void 0 && isFinite(g) ? g : void 0;
            if (t.shells.push({
              id: o,
              pts: l,
              t: d,
              E: u,
              rho: y
            }), s[8] !== void 0) {
              const k = parseFloat(s[8]);
              isFinite(k) && k !== 0 && t.shellLoads.set(o, k);
            }
            break;
          }
          case "shellmod": {
            const o = parseInt(s[1], 10);
            if (!isFinite(o)) break;
            const l = s.slice(2).map(parseFloat);
            if (l.length >= 8) t.shellModsDir.set(o, l.slice(0, 8).map((d) => isFinite(d) ? d : 1));
            else {
              const d = l[0], u = l[1];
              t.shellMods.set(o, [
                isFinite(d) ? d : 1,
                isFinite(u) ? u : 1
              ]);
            }
            break;
          }
          case "areaobj": {
            const o = s.slice(1).map((w) => parseInt(w, 10));
            if (o.length < 7 || o.some((w) => !isFinite(w))) {
              t.errors.push('areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"');
              break;
            }
            const [l, d, u, g, y, k, E] = o, j = [];
            for (let w = k; w <= E; w++) j.push(w);
            t.areaObjs.push({
              id: l,
              pts: [
                d,
                u,
                g,
                y
              ],
              cells: j
            });
            break;
          }
          case "shellang":
          case "ang": {
            const o = parseInt(s[1], 10), l = parseFloat(s[2]);
            if (!isFinite(o) || !isFinite(l)) {
              t.errors.push('shellang: se esperaba "shellang shellID grados"');
              break;
            }
            t.shellAngles.set(o, l);
            break;
          }
          case "areaload":
          case "qarea": {
            const o = parseInt(s[1], 10), l = parseFloat(s[2]);
            if (!isFinite(o) || !isFinite(l)) {
              t.errors.push('areaload: se esperaba "areaload shellID q"');
              break;
            }
            t.shellLoads.set(o, l);
            break;
          }
          case "support":
          case "fix": {
            const o = parseInt(s[1], 10), l = s.slice(2).join(" ");
            t.supports.set(o, Q(l));
            break;
          }
          case "load":
          case "l": {
            const o = parseInt(s[1], 10), l = parseFloat(s[2] ?? "0"), d = parseFloat(s[3] ?? "0"), u = parseFloat(s[4] ?? "0"), g = parseFloat(s[5] ?? "0"), y = parseFloat(s[6] ?? "0"), k = parseFloat(s[7] ?? "0");
            t.loads.set(o, [
              l,
              d,
              u,
              g,
              y,
              k
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const o = parseInt(s[1], 10), l = parseFloat(s[2] ?? "0"), d = parseFloat(s[3] ?? "0"), u = parseFloat(s[4] ?? "0"), g = t.frameLoads.get(o) ?? [
              0,
              0,
              0
            ];
            t.frameLoads.set(o, [
              g[0] + l,
              g[1] + d,
              g[2] + u
            ]);
            break;
          }
          case "spring": {
            const o = parseInt(s[1], 10), l = (s[2] ?? "uz").toLowerCase(), d = G[l] ?? 2, u = parseFloat(s[3] ?? "1000");
            t.springs.push({
              node: o,
              dof: d,
              k: u
            });
            break;
          }
          case "solve":
          case "run":
          case "analyze": {
            t.doSolve = true;
            break;
          }
          case "reset":
          case "clear":
            t.nodes.clear(), t.frames.length = 0, t.shells.length = 0, t.supports.clear(), t.loads.clear(), t.frameLoads.clear(), t.springs.length = 0;
            break;
          default:
            t.errors.push(`L${L + 1}: comando desconocido "${F}"`);
        }
      } catch (o) {
        t.errors.push(`L${L + 1}: error "${m}" \u2014 ${o.message}`);
      }
    }
    return t;
  };
  let te;
  te = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
# Ejemplo: p\xF3rtico 2D con carga lateral

# \u2500\u2500 Nodos (ID  X  Y  Z) \u2500\u2500
node 1   0   0   0
node 2   0   0   3
node 3   5   0   3
node 4   5   0   0

# \u2500\u2500 Apoyos \u2500\u2500
support 1 fixed
support 4 fixed

# \u2500\u2500 Frames (ID  nI  nJ  E  A  I) \u2500\u2500
# E=25e6 kN/m\xB2, A=0.16 m\xB2, I=0.0021 m\u2074 (col 0.40\xD70.40)
frame 1  1 2  25e6  0.16  0.0021
frame 2  2 3  25e6  0.15  0.0028
frame 3  3 4  25e6  0.16  0.0021

# \u2500\u2500 Cargas (ID  FX  FY  FZ  MX  MY  MZ) \u2500\u2500
load 2  10  0  -50  0  0  0
load 3  10  0  -50  0  0  0

solve
`;
  re = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "Modelar",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(_, t) {
      var _a, _b;
      const p = window.__hekatanCliScript ?? te;
      window.__hekatanCliLastScript = p;
      const r = oe(p), f = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), v = [], L = Array.from(r.nodes.keys()).sort((e, n) => e - n);
      for (const e of L) f.set(e, v.length), v.push(r.nodes.get(e));
      const m = [], s = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map();
      for (const e of r.frames) {
        const n = f.get(e.nI), a = f.get(e.nJ);
        if (n === void 0 || a === void 0) {
          const c = L.length ? `IDs disponibles: ${L.join(", ")}` : "ning\xFAn nodo definido", h = [];
          n === void 0 && h.push(e.nI), a === void 0 && h.push(e.nJ), r.errors.push(`frame ${e.id}: nodo(s) inexistente(s) [${h.join(", ")}] \u2014 ${c}`);
          continue;
        }
        const i = m.length;
        m.push([
          n,
          a
        ]);
        const I = e.nu ?? 0.2;
        s.set(i, e.E), F.set(i, e.E / (2 * (1 + I))), o.set(i, e.A), l.set(i, e.I), d.set(i, e.Iy ?? e.I), u.set(i, e.J ?? 0.14 * Math.pow(Math.sqrt(e.A), 4)), g.set(i, e.rho ?? 2.45), E.set(i, I), e.D !== void 0 && isFinite(e.D) && y.set(i, e.D), e.B !== void 0 && isFinite(e.B) && k.set(i, e.B);
      }
      for (const e of r.shells) {
        const n = e.pts.map((i) => f.get(i));
        if (n.some((i) => i === void 0)) {
          r.errors.push(`shell ${e.id}: algun nodo inexistente`);
          continue;
        }
        const a = m.length;
        O.set(e.id, a), m.push(n), s.set(a, e.E), F.set(a, e.E / (2 * 1.2)), j.set(a, e.t), g.set(a, e.rho ?? 2.45), E.set(a, 0.2);
      }
      const w = /* @__PURE__ */ new Map();
      for (const [e, n] of r.supports.entries()) {
        const a = f.get(e);
        a !== void 0 && w.set(a, n);
      }
      const S = /* @__PURE__ */ new Map();
      for (const [e, n] of r.loads.entries()) {
        const a = f.get(e);
        a !== void 0 && S.set(a, [
          ...n
        ]);
      }
      if (r.frameLoads.size) {
        const e = (n, a) => {
          const i = S.get(n) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          S.set(n, [
            i[0] + a[0],
            i[1] + a[1],
            i[2] + a[2],
            i[3] + a[3],
            i[4] + a[4],
            i[5] + a[5]
          ]);
        };
        for (const [n, a] of r.frameLoads.entries()) {
          const i = r.frames.find((U) => U.id === n);
          if (!i) {
            r.errors.push(`frameload ${n}: no existe esa barra`);
            continue;
          }
          const I = f.get(i.nI), c = f.get(i.nJ);
          if (I === void 0 || c === void 0) continue;
          const h = v[I], C = v[c], A = [
            C[0] - h[0],
            C[1] - h[1],
            C[2] - h[2]
          ], M = Math.hypot(A[0], A[1], A[2]);
          if (M < 1e-9) continue;
          const b = [
            A[0] / M,
            A[1] / M,
            A[2] / M
          ], x = M * M / 12, z = [
            b[1] * a[2] - b[2] * a[1],
            b[2] * a[0] - b[0] * a[2],
            b[0] * a[1] - b[1] * a[0]
          ];
          e(I, [
            a[0] * M / 2,
            a[1] * M / 2,
            a[2] * M / 2,
            x * z[0],
            x * z[1],
            x * z[2]
          ]), e(c, [
            a[0] * M / 2,
            a[1] * M / 2,
            a[2] * M / 2,
            -x * z[0],
            -x * z[1],
            -x * z[2]
          ]);
        }
      }
      const J = /* @__PURE__ */ new Map(), D = 1 / Math.sqrt(3), V = [
        [
          -D,
          -D
        ],
        [
          D,
          -D
        ],
        [
          D,
          D
        ],
        [
          -D,
          D
        ]
      ];
      for (const e of r.shells) {
        const n = r.shellLoads.get(e.id);
        if (!n) continue;
        const a = e.pts.map((c) => f.get(c));
        if (a.some((c) => c === void 0)) {
          r.errors.push(`areaload ${e.id}: algun nodo inexistente`);
          continue;
        }
        const i = a.map((c) => v[c]), I = [
          0,
          0,
          0,
          0
        ];
        for (const [c, h] of V) {
          const C = [
            0.25 * (1 - c) * (1 - h),
            0.25 * (1 + c) * (1 - h),
            0.25 * (1 + c) * (1 + h),
            0.25 * (1 - c) * (1 + h)
          ], A = [
            -0.25 * (1 - h),
            0.25 * (1 - h),
            0.25 * (1 + h),
            -0.25 * (1 + h)
          ], M = [
            -0.25 * (1 - c),
            -0.25 * (1 + c),
            0.25 * (1 + c),
            0.25 * (1 - c)
          ], b = [
            0,
            1,
            2
          ].map(($) => A.reduce((Y, Z, X) => Y + Z * i[X][$], 0)), x = [
            0,
            1,
            2
          ].map(($) => M.reduce((Y, Z, X) => Y + Z * i[X][$], 0)), z = [
            b[1] * x[2] - b[2] * x[1],
            b[2] * x[0] - b[0] * x[2],
            b[0] * x[1] - b[1] * x[0]
          ], U = Math.hypot(z[0], z[1], z[2]);
          for (let $ = 0; $ < 4; $++) I[$] += C[$] * n * U;
        }
        for (let c = 0; c < 4; c++) {
          const h = a[c], C = S.get(h) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          C[2] += I[c], S.set(h, C), J.set(h, (J.get(h) ?? 0) + I[c]);
        }
      }
      const q = [];
      for (const e of r.springs) {
        const n = f.get(e.node);
        n !== void 0 && q.push({
          node: n,
          dof: e.dof,
          k: e.k
        });
      }
      t.nodes.val = v, t.elements.val = m, t.nodeInputs.val = {
        supports: w,
        loads: S
      };
      const R = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map();
      for (const e of r.shells) {
        const n = O.get(e.id);
        if (n === void 0) continue;
        const a = r.shellLoads.get(e.id);
        a !== void 0 && W.set(n, a);
        const i = r.shellAngles.get(e.id);
        i !== void 0 && K.set(n, i);
        const I = r.shellModsDir.get(e.id);
        if (I) {
          P.set(n, I), R.set(n, (I[0] + I[1]) / 2), B.set(n, (I[3] + I[4]) / 2);
          continue;
        }
        const c = r.shellMods.get(e.id);
        c && (R.set(n, c[0]), B.set(n, c[1]));
      }
      if (t.elementInputs.val = {
        elasticities: s,
        shearModuli: F,
        areas: o,
        momentsOfInertiaY: l,
        momentsOfInertiaZ: d,
        torsionalConstants: u,
        densities: g,
        poissonsRatios: E,
        thicknesses: j,
        membraneModifiers: R,
        bendingModifiers: B,
        shellModifiers: P,
        shellSurfaceLoads: W,
        shellAngles: K,
        cargaDeArea: J,
        cantos: y,
        anchos: k,
        areaObjects: r.areaObjs.map((e) => ({
          nodes: e.pts.map((n) => f.get(n)).filter((n) => n !== void 0),
          cells: e.cells.map((n) => O.get(n)).filter((n) => n !== void 0),
          q: e.cells.map((n) => r.shellLoads.get(n)).find((n) => n !== void 0),
          ang: e.cells.map((n) => r.shellAngles.get(n)).find((n) => n !== void 0)
        })).filter((e) => e.nodes.length === 4 && e.cells.length > 0)
      }, r.doSolve && v.length && m.length) try {
        t.deformOutputs.val = se(v, m, t.nodeInputs.val, t.elementInputs.val, q.length ? q : void 0);
        try {
          t.analyzeOutputs.val = ee(v, m, t.elementInputs.val, t.deformOutputs.val);
        } catch (e) {
          console.warn("[CLI Modeler] analyze:", (e == null ? void 0 : e.message) ?? e);
        }
        console.log("[CLI Modeler] Solve OK \u2014", m.length, "elementos,", v.length, "nodos");
      } catch (e) {
        r.errors.push(`solve fall\xF3: ${e.message}`);
      }
      if (t.objects3D.val = [], r.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const e of r.errors) console.warn("  -", e);
      }
      window.__hekatanCliErrors = r.errors;
      let T = 0, H = 0;
      const N = t.deformOutputs.val;
      if ((_a = N == null ? void 0 : N.deformations) == null ? void 0 : _a.size) for (const [, e] of N.deformations) Math.abs(e[2]) > Math.abs(T) && (T = e[2]);
      if ((_b = N == null ? void 0 : N.reactions) == null ? void 0 : _b.size) for (const [, e] of N.reactions) H += e[2] || 0;
      window.__hekatanCliStats = {
        nodes: v.length,
        frames: r.frames.length,
        shells: r.shells.length,
        supports: w.size,
        loads: S.size,
        springs: q.length,
        solved: r.doSolve,
        errors: r.errors.length,
        maxUzMm: +(T * 1e3).toFixed(3),
        sumRz: +H.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  re as c,
  oe as p
};
