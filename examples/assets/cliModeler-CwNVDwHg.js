import { d as S, __tla as __tla_0 } from "./didacticCpp-BaiPjJ4y.js";
let _;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const b = {
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
  function y(F) {
    const s = F.toLowerCase().trim();
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
    const r = [
      false,
      false,
      false,
      false,
      false,
      false
    ], n = s.split(/[\s,]+/);
    for (const a of n) b[a] !== void 0 && (r[b[a]] = true);
    if (/^[01]+$/.test(s) && s.length <= 6) for (let a = 0; a < s.length; a++) r[a] = s[a] === "1";
    return r;
  }
  function $(F) {
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
    let r = null, n = 0, a = 0, g = 0;
    const w = F.split(/\r?\n/);
    for (let i = 0; i < w.length; i++) {
      let u = w[i].trim();
      if (!u || u.startsWith("#") || u.startsWith("//")) continue;
      u = u.replace(/[;]+$/, "");
      const e = u.split(/\s+/), h = e[0].toLowerCase();
      if (h === "nodes" && e.length === 1) {
        r = "nodes";
        continue;
      }
      if ((h === "elements" || h === "frames") && e.length === 1) {
        r = "elements";
        continue;
      }
      if (h === "areas" && e.length === 1) {
        r = "areas";
        continue;
      }
      if (h === "supports" && e.length === 1) {
        r = "supports";
        continue;
      }
      if (h === "loads" && e.length === 1) {
        r = "loads";
        continue;
      }
      if (h === "springs" && e.length === 1) {
        r = "springs";
        continue;
      }
      if (r && /^[\-\d]/.test(e[0])) {
        const o = e.map(parseFloat);
        if (r === "nodes" && o.length >= 3) {
          n++, s.nodes.set(n, [
            o[0],
            o[1],
            o[2]
          ]);
          continue;
        }
        if (r === "elements" && o.length >= 2) {
          a++, s.frames.push({
            id: a,
            nI: o[0] + 1,
            nJ: o[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (r === "areas" && o.length >= 4) {
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
        if (r === "loads" && o.length >= 4) {
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
        if (r === "springs" && o.length >= 3) {
          s.springs.push({
            node: o[0],
            dof: o[1],
            k: o[2]
          });
          continue;
        }
      }
      if (r === "supports" && /^\d/.test(e[0])) {
        const o = parseInt(e[0], 10), l = e.slice(1).join(" ");
        s.supports.set(o, y(l));
        continue;
      }
      r && !/^[\-\d]/.test(e[0]) && (r = null);
      try {
        switch (h) {
          case "node":
          case "n": {
            const o = parseInt(e[1], 10), l = parseFloat(e[2]), f = parseFloat(e[3]), d = parseFloat(e[4]);
            !isFinite(o) || !isFinite(l) || !isFinite(f) || !isFinite(d) ? s.errors.push(`L${i + 1}: node mal formado: ${u}`) : s.nodes.set(o, [
              l,
              f,
              d
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const o = parseInt(e[1], 10), l = parseInt(e[2], 10), f = parseInt(e[3], 10), d = parseFloat(e[4] ?? "25e6"), I = parseFloat(e[5] ?? "0.16"), v = parseFloat(e[6] ?? "0.001");
            s.frames.push({
              id: o,
              nI: l,
              nJ: f,
              E: d,
              A: I,
              I: v
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
            ], f = parseFloat(e[6] ?? "0.20"), d = parseFloat(e[7] ?? "25e6");
            s.shells.push({
              id: o,
              pts: l,
              t: f,
              E: d
            });
            break;
          }
          case "support":
          case "fix": {
            const o = parseInt(e[1], 10), l = e.slice(2).join(" ");
            s.supports.set(o, y(l));
            break;
          }
          case "load":
          case "l": {
            const o = parseInt(e[1], 10), l = parseFloat(e[2] ?? "0"), f = parseFloat(e[3] ?? "0"), d = parseFloat(e[4] ?? "0"), I = parseFloat(e[5] ?? "0"), v = parseFloat(e[6] ?? "0"), M = parseFloat(e[7] ?? "0");
            s.loads.set(o, [
              l,
              f,
              d,
              I,
              v,
              M
            ]);
            break;
          }
          case "spring": {
            const o = parseInt(e[1], 10), l = (e[2] ?? "uz").toLowerCase(), f = b[l] ?? 2, d = parseFloat(e[3] ?? "1000");
            s.springs.push({
              node: o,
              dof: f,
              k: d
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
  }
  let L;
  L = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  _ = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "Modelar",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(F, s) {
      const r = window.__hekatanCliScript ?? L;
      window.__hekatanCliLastScript = r;
      const n = $(r), a = /* @__PURE__ */ new Map(), g = [], w = Array.from(n.nodes.keys()).sort((t, c) => t - c);
      for (const t of w) a.set(t, g.length), g.push(n.nodes.get(t));
      const i = [], u = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
      for (const t of n.frames) {
        const c = a.get(t.nI), p = a.get(t.nJ);
        if (c === void 0 || p === void 0) {
          const E = w.length ? `IDs disponibles: ${w.join(", ")}` : "ning\xFAn nodo definido", C = [];
          c === void 0 && C.push(t.nI), p === void 0 && C.push(t.nJ), n.errors.push(`frame ${t.id}: nodo(s) inexistente(s) [${C.join(", ")}] \u2014 ${E}`);
          continue;
        }
        const m = i.length;
        i.push([
          c,
          p
        ]), u.set(m, t.E), e.set(m, t.E / (2 * 1.2)), h.set(m, t.A), o.set(m, t.I), l.set(m, t.I), f.set(m, 0.14 * Math.pow(Math.sqrt(t.A), 4)), d.set(m, 2.45), I.set(m, 0.2);
      }
      for (const t of n.shells) {
        const c = t.pts.map((m) => a.get(m));
        if (c.some((m) => m === void 0)) {
          n.errors.push(`shell ${t.id}: algun nodo inexistente`);
          continue;
        }
        const p = i.length;
        i.push(c), u.set(p, t.E), e.set(p, t.E / (2 * 1.2)), v.set(p, t.t), d.set(p, 2.45), I.set(p, 0.2);
      }
      const M = /* @__PURE__ */ new Map();
      for (const [t, c] of n.supports.entries()) {
        const p = a.get(t);
        p !== void 0 && M.set(p, c);
      }
      const k = /* @__PURE__ */ new Map();
      for (const [t, c] of n.loads.entries()) {
        const p = a.get(t);
        p !== void 0 && k.set(p, c);
      }
      const x = [];
      for (const t of n.springs) {
        const c = a.get(t.node);
        c !== void 0 && x.push({
          node: c,
          dof: t.dof,
          k: t.k
        });
      }
      if (s.nodes.val = g, s.elements.val = i, s.nodeInputs.val = {
        supports: M,
        loads: k
      }, s.elementInputs.val = {
        elasticities: u,
        shearModuli: e,
        areas: h,
        momentsOfInertiaZ: o,
        momentsOfInertiaY: l,
        torsionalConstants: f,
        densities: d,
        poissonsRatios: I,
        thicknesses: v
      }, n.doSolve && g.length && i.length) try {
        s.deformOutputs.val = S(g, i, s.nodeInputs.val, s.elementInputs.val, x.length ? x : void 0), console.log("[CLI Modeler] Solve OK \u2014", i.length, "elementos,", g.length, "nodos");
      } catch (t) {
        n.errors.push(`solve fall\xF3: ${t.message}`);
      }
      if (s.objects3D.val = [], n.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const t of n.errors) console.warn("  -", t);
      }
      window.__hekatanCliErrors = n.errors, window.__hekatanCliStats = {
        nodes: g.length,
        frames: n.frames.length,
        shells: n.shells.length,
        supports: M.size,
        loads: k.size,
        springs: x.length,
        solved: n.doSolve,
        errors: n.errors.length
      };
    }
  };
});
export {
  __tla,
  _ as c
};
