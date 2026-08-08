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
  const Y = {
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
  function W(E) {
    const t = E.toLowerCase().trim();
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
    const c = [
      false,
      false,
      false,
      false,
      false,
      false
    ], a = t.split(/[\s,]+/);
    for (const p of a) Y[p] !== void 0 && (c[Y[p]] = true);
    if (/^[01]+$/.test(t) && t.length <= 6) for (let p = 0; p < t.length; p++) c[p] = t[p] === "1";
    return c;
  }
  oe = function(E) {
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
      springs: [],
      doSolve: false,
      errors: []
    };
    let c = null, a = 0, p = 0, D = 0;
    const F = E.split(/\r?\n/);
    for (let b = 0; b < F.length; b++) {
      let h = F[b].trim();
      if (!h || h.startsWith("#") || h.startsWith("//")) continue;
      h = h.replace(/[;]+$/, "");
      const s = h.split(/\s+/), g = s[0].toLowerCase();
      if (g === "nodes" && s.length === 1) {
        c = "nodes";
        continue;
      }
      if ((g === "elements" || g === "frames") && s.length === 1) {
        c = "elements";
        continue;
      }
      if (g === "areas" && s.length === 1) {
        c = "areas";
        continue;
      }
      if (g === "supports" && s.length === 1) {
        c = "supports";
        continue;
      }
      if (g === "loads" && s.length === 1) {
        c = "loads";
        continue;
      }
      if (g === "springs" && s.length === 1) {
        c = "springs";
        continue;
      }
      if (c && /^[\-\d]/.test(s[0])) {
        const o = s.map(parseFloat);
        if (c === "nodes" && o.length >= 3) {
          a++, t.nodes.set(a, [
            o[0],
            o[1],
            o[2]
          ]);
          continue;
        }
        if (c === "elements" && o.length >= 2) {
          p++, t.frames.push({
            id: p,
            nI: o[0] + 1,
            nJ: o[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (c === "areas" && o.length >= 4) {
          D++, t.shells.push({
            id: D,
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
        if (c === "loads" && o.length >= 4) {
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
        if (c === "springs" && o.length >= 3) {
          t.springs.push({
            node: o[0],
            dof: o[1],
            k: o[2]
          });
          continue;
        }
      }
      if (c === "supports" && /^\d/.test(s[0])) {
        const o = parseInt(s[0], 10), r = s.slice(1).join(" ");
        t.supports.set(o, W(r));
        continue;
      }
      c && !/^[\-\d]/.test(s[0]) && (c = null);
      try {
        switch (g) {
          case "node":
          case "n": {
            const o = parseInt(s[1], 10), r = parseFloat(s[2]), d = parseFloat(s[3]), u = parseFloat(s[4]);
            !isFinite(o) || !isFinite(r) || !isFinite(d) || !isFinite(u) ? t.errors.push(`L${b + 1}: node mal formado: ${h}`) : t.nodes.set(o, [
              r,
              d,
              u
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const o = parseInt(s[1], 10), r = parseInt(s[2], 10), d = parseInt(s[3], 10), u = parseFloat(s[4] ?? "25e6"), I = parseFloat(s[5] ?? "0.16"), x = parseFloat(s[6] ?? "0.001"), w = s[7] !== void 0 ? parseFloat(s[7]) : void 0, L = s[8] !== void 0 ? parseFloat(s[8]) : void 0, z = s[9] !== void 0 ? parseFloat(s[9]) : void 0, v = s[10] !== void 0 ? parseFloat(s[10]) : void 0, S = s[11] !== void 0 ? parseFloat(s[11]) : void 0, $ = s[12] !== void 0 ? parseFloat(s[12]) : void 0;
            t.frames.push({
              id: o,
              nI: r,
              nJ: d,
              E: u,
              A: I,
              I: x,
              Iy: w,
              J: L,
              nu: z,
              rho: v,
              D: S,
              B: $
            });
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const o = parseInt(s[1], 10), r = [
              parseInt(s[2], 10),
              parseInt(s[3], 10),
              parseInt(s[4], 10),
              parseInt(s[5], 10)
            ], d = parseFloat(s[6] ?? "0.20"), u = parseFloat(s[7] ?? "25e6"), I = s[9] !== void 0 ? parseFloat(s[9]) : void 0, x = I !== void 0 && isFinite(I) ? I : void 0;
            if (t.shells.push({
              id: o,
              pts: r,
              t: d,
              E: u,
              rho: x
            }), s[8] !== void 0) {
              const w = parseFloat(s[8]);
              isFinite(w) && w !== 0 && t.shellLoads.set(o, w);
            }
            break;
          }
          case "shellmod": {
            const o = parseInt(s[1], 10);
            if (!isFinite(o)) break;
            const r = s.slice(2).map(parseFloat);
            if (r.length >= 8) t.shellModsDir.set(o, r.slice(0, 8).map((d) => isFinite(d) ? d : 1));
            else {
              const d = r[0], u = r[1];
              t.shellMods.set(o, [
                isFinite(d) ? d : 1,
                isFinite(u) ? u : 1
              ]);
            }
            break;
          }
          case "areaobj": {
            const o = s.slice(1).map((v) => parseInt(v, 10));
            if (o.length < 7 || o.some((v) => !isFinite(v))) {
              t.errors.push('areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"');
              break;
            }
            const [r, d, u, I, x, w, L] = o, z = [];
            for (let v = w; v <= L; v++) z.push(v);
            t.areaObjs.push({
              id: r,
              pts: [
                d,
                u,
                I,
                x
              ],
              cells: z
            });
            break;
          }
          case "shellang":
          case "ang": {
            const o = parseInt(s[1], 10), r = parseFloat(s[2]);
            if (!isFinite(o) || !isFinite(r)) {
              t.errors.push('shellang: se esperaba "shellang shellID grados"');
              break;
            }
            t.shellAngles.set(o, r);
            break;
          }
          case "areaload":
          case "qarea": {
            const o = parseInt(s[1], 10), r = parseFloat(s[2]);
            if (!isFinite(o) || !isFinite(r)) {
              t.errors.push('areaload: se esperaba "areaload shellID q"');
              break;
            }
            t.shellLoads.set(o, r);
            break;
          }
          case "support":
          case "fix": {
            const o = parseInt(s[1], 10), r = s.slice(2).join(" ");
            t.supports.set(o, W(r));
            break;
          }
          case "load":
          case "l": {
            const o = parseInt(s[1], 10), r = parseFloat(s[2] ?? "0"), d = parseFloat(s[3] ?? "0"), u = parseFloat(s[4] ?? "0"), I = parseFloat(s[5] ?? "0"), x = parseFloat(s[6] ?? "0"), w = parseFloat(s[7] ?? "0");
            t.loads.set(o, [
              r,
              d,
              u,
              I,
              x,
              w
            ]);
            break;
          }
          case "spring": {
            const o = parseInt(s[1], 10), r = (s[2] ?? "uz").toLowerCase(), d = Y[r] ?? 2, u = parseFloat(s[3] ?? "1000");
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
            t.nodes.clear(), t.frames.length = 0, t.shells.length = 0, t.supports.clear(), t.loads.clear(), t.springs.length = 0;
            break;
          default:
            t.errors.push(`L${b + 1}: comando desconocido "${g}"`);
        }
      } catch (o) {
        t.errors.push(`L${b + 1}: error "${h}" \u2014 ${o.message}`);
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
    build(E, t) {
      var _a, _b;
      const c = window.__hekatanCliScript ?? te;
      window.__hekatanCliLastScript = c;
      const a = oe(c), p = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), F = [], b = Array.from(a.nodes.keys()).sort((e, n) => e - n);
      for (const e of b) p.set(e, F.length), F.push(a.nodes.get(e));
      const h = [], s = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map();
      for (const e of a.frames) {
        const n = p.get(e.nI), i = p.get(e.nJ);
        if (n === void 0 || i === void 0) {
          const l = b.length ? `IDs disponibles: ${b.join(", ")}` : "ning\xFAn nodo definido", m = [];
          n === void 0 && m.push(e.nI), i === void 0 && m.push(e.nJ), a.errors.push(`frame ${e.id}: nodo(s) inexistente(s) [${m.join(", ")}] \u2014 ${l}`);
          continue;
        }
        const f = h.length;
        h.push([
          n,
          i
        ]);
        const M = e.nu ?? 0.2;
        s.set(f, e.E), g.set(f, e.E / (2 * (1 + M))), o.set(f, e.A), r.set(f, e.I), d.set(f, e.Iy ?? e.I), u.set(f, e.J ?? 0.14 * Math.pow(Math.sqrt(e.A), 4)), I.set(f, e.rho ?? 2.45), L.set(f, M), e.D !== void 0 && isFinite(e.D) && x.set(f, e.D), e.B !== void 0 && isFinite(e.B) && w.set(f, e.B);
      }
      for (const e of a.shells) {
        const n = e.pts.map((f) => p.get(f));
        if (n.some((f) => f === void 0)) {
          a.errors.push(`shell ${e.id}: algun nodo inexistente`);
          continue;
        }
        const i = h.length;
        D.set(e.id, i), h.push(n), s.set(i, e.E), g.set(i, e.E / (2 * 1.2)), z.set(i, e.t), I.set(i, e.rho ?? 2.45), L.set(i, 0.2);
      }
      const v = /* @__PURE__ */ new Map();
      for (const [e, n] of a.supports.entries()) {
        const i = p.get(e);
        i !== void 0 && v.set(i, n);
      }
      const S = /* @__PURE__ */ new Map();
      for (const [e, n] of a.loads.entries()) {
        const i = p.get(e);
        i !== void 0 && S.set(i, n);
      }
      const $ = /* @__PURE__ */ new Map(), k = 1 / Math.sqrt(3), K = [
        [
          -k,
          -k
        ],
        [
          k,
          -k
        ],
        [
          k,
          k
        ],
        [
          -k,
          k
        ]
      ];
      for (const e of a.shells) {
        const n = a.shellLoads.get(e.id);
        if (!n) continue;
        const i = e.pts.map((l) => p.get(l));
        if (i.some((l) => l === void 0)) {
          a.errors.push(`areaload ${e.id}: algun nodo inexistente`);
          continue;
        }
        const f = i.map((l) => F[l]), M = [
          0,
          0,
          0,
          0
        ];
        for (const [l, m] of K) {
          const _ = [
            0.25 * (1 - l) * (1 - m),
            0.25 * (1 + l) * (1 - m),
            0.25 * (1 + l) * (1 + m),
            0.25 * (1 - l) * (1 + m)
          ], H = [
            -0.25 * (1 - m),
            0.25 * (1 - m),
            0.25 * (1 + m),
            -0.25 * (1 + m)
          ], Q = [
            -0.25 * (1 - l),
            -0.25 * (1 + l),
            0.25 * (1 + l),
            0.25 * (1 - l)
          ], C = [
            0,
            1,
            2
          ].map((y) => H.reduce((B, T, U) => B + T * f[U][y], 0)), A = [
            0,
            1,
            2
          ].map((y) => Q.reduce((B, T, U) => B + T * f[U][y], 0)), R = [
            C[1] * A[2] - C[2] * A[1],
            C[2] * A[0] - C[0] * A[2],
            C[0] * A[1] - C[1] * A[0]
          ], V = Math.hypot(R[0], R[1], R[2]);
          for (let y = 0; y < 4; y++) M[y] += _[y] * n * V;
        }
        for (let l = 0; l < 4; l++) {
          const m = i[l], _ = S.get(m) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          _[2] += M[l], S.set(m, _), $.set(m, ($.get(m) ?? 0) + M[l]);
        }
      }
      const j = [];
      for (const e of a.springs) {
        const n = p.get(e.node);
        n !== void 0 && j.push({
          node: n,
          dof: e.dof,
          k: e.k
        });
      }
      t.nodes.val = F, t.elements.val = h, t.nodeInputs.val = {
        supports: v,
        loads: S
      };
      const q = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
      for (const e of a.shells) {
        const n = D.get(e.id);
        if (n === void 0) continue;
        const i = a.shellLoads.get(e.id);
        i !== void 0 && X.set(n, i);
        const f = a.shellAngles.get(e.id);
        f !== void 0 && G.set(n, f);
        const M = a.shellModsDir.get(e.id);
        if (M) {
          Z.set(n, M), q.set(n, (M[0] + M[1]) / 2), J.set(n, (M[3] + M[4]) / 2);
          continue;
        }
        const l = a.shellMods.get(e.id);
        l && (q.set(n, l[0]), J.set(n, l[1]));
      }
      if (t.elementInputs.val = {
        elasticities: s,
        shearModuli: g,
        areas: o,
        momentsOfInertiaY: r,
        momentsOfInertiaZ: d,
        torsionalConstants: u,
        densities: I,
        poissonsRatios: L,
        thicknesses: z,
        membraneModifiers: q,
        bendingModifiers: J,
        shellModifiers: Z,
        shellSurfaceLoads: X,
        shellAngles: G,
        cargaDeArea: $,
        cantos: x,
        anchos: w,
        areaObjects: a.areaObjs.map((e) => ({
          nodes: e.pts.map((n) => p.get(n)).filter((n) => n !== void 0),
          cells: e.cells.map((n) => D.get(n)).filter((n) => n !== void 0),
          q: e.cells.map((n) => a.shellLoads.get(n)).find((n) => n !== void 0),
          ang: e.cells.map((n) => a.shellAngles.get(n)).find((n) => n !== void 0)
        })).filter((e) => e.nodes.length === 4 && e.cells.length > 0)
      }, a.doSolve && F.length && h.length) try {
        t.deformOutputs.val = se(F, h, t.nodeInputs.val, t.elementInputs.val, j.length ? j : void 0);
        try {
          t.analyzeOutputs.val = ee(F, h, t.elementInputs.val, t.deformOutputs.val);
        } catch (e) {
          console.warn("[CLI Modeler] analyze:", (e == null ? void 0 : e.message) ?? e);
        }
        console.log("[CLI Modeler] Solve OK \u2014", h.length, "elementos,", F.length, "nodos");
      } catch (e) {
        a.errors.push(`solve fall\xF3: ${e.message}`);
      }
      if (t.objects3D.val = [], a.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const e of a.errors) console.warn("  -", e);
      }
      window.__hekatanCliErrors = a.errors;
      let N = 0, P = 0;
      const O = t.deformOutputs.val;
      if ((_a = O == null ? void 0 : O.deformations) == null ? void 0 : _a.size) for (const [, e] of O.deformations) Math.abs(e[2]) > Math.abs(N) && (N = e[2]);
      if ((_b = O == null ? void 0 : O.reactions) == null ? void 0 : _b.size) for (const [, e] of O.reactions) P += e[2] || 0;
      window.__hekatanCliStats = {
        nodes: F.length,
        frames: a.frames.length,
        shells: a.shells.length,
        supports: v.size,
        loads: S.size,
        springs: j.length,
        solved: a.doSolve,
        errors: a.errors.length,
        maxUzMm: +(N * 1e3).toFixed(3),
        sumRz: +P.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  re as c,
  oe as p
};
