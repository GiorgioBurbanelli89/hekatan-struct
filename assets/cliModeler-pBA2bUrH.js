import { d as _, __tla as __tla_0 } from "./didacticCpp-jx4SQtmt.js";
let j, A;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const C = {
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
  function $(z) {
    const s = z.toLowerCase().trim();
    if (s === "fixed" || s === "empotrado") return [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    if (s === "pinned" || s === "articulado") return [
      true,
      true,
      true,
      false,
      false,
      false
    ];
    if (s === "roller" || s === "rodillo") return [
      false,
      false,
      true,
      false,
      false,
      false
    ];
    const a = [
      false,
      false,
      false,
      false,
      false,
      false
    ], n = s.split(/[\s,]+/);
    for (const r of n) C[r] !== void 0 && (a[C[r]] = true);
    if (/^[01]+$/.test(s) && s.length <= 6) for (let r = 0; r < s.length; r++) a[r] = s[r] === "1";
    return a;
  }
  A = function(z) {
    const s = {
      nodes: /* @__PURE__ */ new Map(),
      frames: [],
      shells: [],
      supports: /* @__PURE__ */ new Map(),
      loads: /* @__PURE__ */ new Map(),
      springs: [],
      doSolve: false,
      errors: []
    };
    let a = null, n = 0, r = 0, g = 0;
    const F = z.split(/\r?\n/);
    for (let i = 0; i < F.length; i++) {
      let u = F[i].trim();
      if (!u || u.startsWith("#") || u.startsWith("//")) continue;
      u = u.replace(/[;]+$/, "");
      const e = u.split(/\s+/), h = e[0].toLowerCase();
      if (h === "nodes" && e.length === 1) {
        a = "nodes";
        continue;
      }
      if ((h === "elements" || h === "frames") && e.length === 1) {
        a = "elements";
        continue;
      }
      if (h === "areas" && e.length === 1) {
        a = "areas";
        continue;
      }
      if (h === "supports" && e.length === 1) {
        a = "supports";
        continue;
      }
      if (h === "loads" && e.length === 1) {
        a = "loads";
        continue;
      }
      if (h === "springs" && e.length === 1) {
        a = "springs";
        continue;
      }
      if (a && /^[\-\d]/.test(e[0])) {
        const o = e.map(parseFloat);
        if (a === "nodes" && o.length >= 3) {
          n++, s.nodes.set(n, [
            o[0],
            o[1],
            o[2]
          ]);
          continue;
        }
        if (a === "elements" && o.length >= 2) {
          r++, s.frames.push({
            id: r,
            nI: o[0] + 1,
            nJ: o[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (a === "areas" && o.length >= 4) {
          g++, s.shells.push({
            id: g,
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
        if (a === "loads" && o.length >= 4) {
          s.loads.set(o[0], [
            o[1] ?? 0,
            o[2] ?? 0,
            o[3] ?? 0,
            o[4] ?? 0,
            o[5] ?? 0,
            o[6] ?? 0
          ]);
          continue;
        }
        if (a === "springs" && o.length >= 3) {
          s.springs.push({
            node: o[0],
            dof: o[1],
            k: o[2]
          });
          continue;
        }
      }
      if (a === "supports" && /^\d/.test(e[0])) {
        const o = parseInt(e[0], 10), l = e.slice(1).join(" ");
        s.supports.set(o, $(l));
        continue;
      }
      a && !/^[\-\d]/.test(e[0]) && (a = null);
      try {
        switch (h) {
          case "node":
          case "n": {
            const o = parseInt(e[1], 10), l = parseFloat(e[2]), f = parseFloat(e[3]), p = parseFloat(e[4]);
            !isFinite(o) || !isFinite(l) || !isFinite(f) || !isFinite(p) ? s.errors.push(`L${i + 1}: node mal formado: ${u}`) : s.nodes.set(o, [
              l,
              f,
              p
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const o = parseInt(e[1], 10), l = parseInt(e[2], 10), f = parseInt(e[3], 10), p = parseFloat(e[4] ?? "25e6"), I = parseFloat(e[5] ?? "0.16"), M = parseFloat(e[6] ?? "0.001"), v = e[7] !== void 0 ? parseFloat(e[7]) : void 0, x = e[8] !== void 0 ? parseFloat(e[8]) : void 0, w = e[9] !== void 0 ? parseFloat(e[9]) : void 0, k = e[10] !== void 0 ? parseFloat(e[10]) : void 0;
            s.frames.push({
              id: o,
              nI: l,
              nJ: f,
              E: p,
              A: I,
              I: M,
              Iy: v,
              J: x,
              nu: w,
              rho: k
            });
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const o = parseInt(e[1], 10), l = [
              parseInt(e[2], 10),
              parseInt(e[3], 10),
              parseInt(e[4], 10),
              parseInt(e[5], 10)
            ], f = parseFloat(e[6] ?? "0.20"), p = parseFloat(e[7] ?? "25e6");
            s.shells.push({
              id: o,
              pts: l,
              t: f,
              E: p
            });
            break;
          }
          case "support":
          case "fix": {
            const o = parseInt(e[1], 10), l = e.slice(2).join(" ");
            s.supports.set(o, $(l));
            break;
          }
          case "load":
          case "l": {
            const o = parseInt(e[1], 10), l = parseFloat(e[2] ?? "0"), f = parseFloat(e[3] ?? "0"), p = parseFloat(e[4] ?? "0"), I = parseFloat(e[5] ?? "0"), M = parseFloat(e[6] ?? "0"), v = parseFloat(e[7] ?? "0");
            s.loads.set(o, [
              l,
              f,
              p,
              I,
              M,
              v
            ]);
            break;
          }
          case "spring": {
            const o = parseInt(e[1], 10), l = (e[2] ?? "uz").toLowerCase(), f = C[l] ?? 2, p = parseFloat(e[3] ?? "1000");
            s.springs.push({
              node: o,
              dof: f,
              k: p
            });
            break;
          }
          case "solve":
          case "run":
          case "analyze": {
            s.doSolve = true;
            break;
          }
          case "reset":
          case "clear":
            s.nodes.clear(), s.frames.length = 0, s.shells.length = 0, s.supports.clear(), s.loads.clear(), s.springs.length = 0;
            break;
          default:
            s.errors.push(`L${i + 1}: comando desconocido "${h}"`);
        }
      } catch (o) {
        s.errors.push(`L${i + 1}: error "${u}" \u2014 ${o.message}`);
      }
    }
    return s;
  };
  let D;
  D = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  j = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "Modelar",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(z, s) {
      var _a, _b;
      const a = window.__hekatanCliScript ?? D;
      window.__hekatanCliLastScript = a;
      const n = A(a), r = /* @__PURE__ */ new Map(), g = [], F = Array.from(n.nodes.keys()).sort((t, c) => t - c);
      for (const t of F) r.set(t, g.length), g.push(n.nodes.get(t));
      const i = [], u = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
      for (const t of n.frames) {
        const c = r.get(t.nI), d = r.get(t.nJ);
        if (c === void 0 || d === void 0) {
          const L = F.length ? `IDs disponibles: ${F.join(", ")}` : "ning\xFAn nodo definido", y = [];
          c === void 0 && y.push(t.nI), d === void 0 && y.push(t.nJ), n.errors.push(`frame ${t.id}: nodo(s) inexistente(s) [${y.join(", ")}] \u2014 ${L}`);
          continue;
        }
        const m = i.length;
        i.push([
          c,
          d
        ]);
        const S = t.nu ?? 0.2;
        u.set(m, t.E), e.set(m, t.E / (2 * (1 + S))), h.set(m, t.A), o.set(m, t.I), l.set(m, t.Iy ?? t.I), f.set(m, t.J ?? 0.14 * Math.pow(Math.sqrt(t.A), 4)), p.set(m, t.rho ?? 2.45), I.set(m, S);
      }
      for (const t of n.shells) {
        const c = t.pts.map((m) => r.get(m));
        if (c.some((m) => m === void 0)) {
          n.errors.push(`shell ${t.id}: algun nodo inexistente`);
          continue;
        }
        const d = i.length;
        i.push(c), u.set(d, t.E), e.set(d, t.E / (2 * 1.2)), M.set(d, t.t), p.set(d, 2.45), I.set(d, 0.2);
      }
      const v = /* @__PURE__ */ new Map();
      for (const [t, c] of n.supports.entries()) {
        const d = r.get(t);
        d !== void 0 && v.set(d, c);
      }
      const x = /* @__PURE__ */ new Map();
      for (const [t, c] of n.loads.entries()) {
        const d = r.get(t);
        d !== void 0 && x.set(d, c);
      }
      const w = [];
      for (const t of n.springs) {
        const c = r.get(t.node);
        c !== void 0 && w.push({
          node: c,
          dof: t.dof,
          k: t.k
        });
      }
      if (s.nodes.val = g, s.elements.val = i, s.nodeInputs.val = {
        supports: v,
        loads: x
      }, s.elementInputs.val = {
        elasticities: u,
        shearModuli: e,
        areas: h,
        momentsOfInertiaZ: o,
        momentsOfInertiaY: l,
        torsionalConstants: f,
        densities: p,
        poissonsRatios: I,
        thicknesses: M
      }, n.doSolve && g.length && i.length) try {
        s.deformOutputs.val = _(g, i, s.nodeInputs.val, s.elementInputs.val, w.length ? w : void 0), console.log("[CLI Modeler] Solve OK \u2014", i.length, "elementos,", g.length, "nodos");
      } catch (t) {
        n.errors.push(`solve fall\xF3: ${t.message}`);
      }
      if (s.objects3D.val = [], n.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const t of n.errors) console.warn("  -", t);
      }
      window.__hekatanCliErrors = n.errors;
      let k = 0, E = 0;
      const b = s.deformOutputs.val;
      if ((_a = b == null ? void 0 : b.deformations) == null ? void 0 : _a.size) for (const [, t] of b.deformations) Math.abs(t[2]) > Math.abs(k) && (k = t[2]);
      if ((_b = b == null ? void 0 : b.reactions) == null ? void 0 : _b.size) for (const [, t] of b.reactions) E += t[2] || 0;
      window.__hekatanCliStats = {
        nodes: g.length,
        frames: n.frames.length,
        shells: n.shells.length,
        supports: v.size,
        loads: x.size,
        springs: w.length,
        solved: n.doSolve,
        errors: n.errors.length,
        maxUzMm: +(k * 1e3).toFixed(3),
        sumRz: +E.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  j as c,
  A as p
};
