import { d as E, __tla as __tla_0 } from "./didacticCpp-Ck1qafl6.js";
let L;
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
    for (const a of n) C[a] !== void 0 && (r[C[a]] = true);
    if (/^[01]+$/.test(s) && s.length <= 6) for (let a = 0; a < s.length; a++) r[a] = s[a] === "1";
    return r;
  }
  function S(F) {
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
    const v = F.split(/\r?\n/);
    for (let i = 0; i < v.length; i++) {
      let u = v[i].trim();
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
            const o = parseInt(e[1], 10), l = parseFloat(e[2]), f = parseFloat(e[3]), c = parseFloat(e[4]);
            !isFinite(o) || !isFinite(l) || !isFinite(f) || !isFinite(c) ? s.errors.push(`L${i + 1}: node mal formado: ${u}`) : s.nodes.set(o, [
              l,
              f,
              c
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const o = parseInt(e[1], 10), l = parseInt(e[2], 10), f = parseInt(e[3], 10), c = parseFloat(e[4] ?? "25e6"), I = parseFloat(e[5] ?? "0.16"), w = parseFloat(e[6] ?? "0.001");
            s.frames.push({
              id: o,
              nI: l,
              nJ: f,
              E: c,
              A: I,
              I: w
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
            ], f = parseFloat(e[6] ?? "0.20"), c = parseFloat(e[7] ?? "25e6");
            s.shells.push({
              id: o,
              pts: l,
              t: f,
              E: c
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
            const o = parseInt(e[1], 10), l = parseFloat(e[2] ?? "0"), f = parseFloat(e[3] ?? "0"), c = parseFloat(e[4] ?? "0"), I = parseFloat(e[5] ?? "0"), w = parseFloat(e[6] ?? "0"), M = parseFloat(e[7] ?? "0");
            s.loads.set(o, [
              l,
              f,
              c,
              I,
              w,
              M
            ]);
            break;
          }
          case "spring": {
            const o = parseInt(e[1], 10), l = (e[2] ?? "uz").toLowerCase(), f = C[l] ?? 2, c = parseFloat(e[3] ?? "1000");
            s.springs.push({
              node: o,
              dof: f,
              k: c
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
  let b;
  b = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  L = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "Modelar",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(F, s) {
      const r = window.__hekatanCliScript ?? b;
      window.__hekatanCliLastScript = r;
      const n = S(r), a = /* @__PURE__ */ new Map(), g = [], v = Array.from(n.nodes.keys()).sort((t, p) => t - p);
      for (const t of v) a.set(t, g.length), g.push(n.nodes.get(t));
      const i = [], u = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
      for (const t of n.frames) {
        const p = a.get(t.nI), d = a.get(t.nJ);
        if (p === void 0 || d === void 0) {
          n.errors.push(`frame ${t.id}: nodo inexistente (nI=${t.nI}, nJ=${t.nJ})`);
          continue;
        }
        const m = i.length;
        i.push([
          p,
          d
        ]), u.set(m, t.E), e.set(m, t.E / (2 * 1.2)), h.set(m, t.A), o.set(m, t.I), l.set(m, t.I), f.set(m, 0.14 * Math.pow(Math.sqrt(t.A), 4)), c.set(m, 2.45), I.set(m, 0.2);
      }
      for (const t of n.shells) {
        const p = t.pts.map((m) => a.get(m));
        if (p.some((m) => m === void 0)) {
          n.errors.push(`shell ${t.id}: algun nodo inexistente`);
          continue;
        }
        const d = i.length;
        i.push(p), u.set(d, t.E), e.set(d, t.E / (2 * 1.2)), w.set(d, t.t), c.set(d, 2.45), I.set(d, 0.2);
      }
      const M = /* @__PURE__ */ new Map();
      for (const [t, p] of n.supports.entries()) {
        const d = a.get(t);
        d !== void 0 && M.set(d, p);
      }
      const k = /* @__PURE__ */ new Map();
      for (const [t, p] of n.loads.entries()) {
        const d = a.get(t);
        d !== void 0 && k.set(d, p);
      }
      const x = [];
      for (const t of n.springs) {
        const p = a.get(t.node);
        p !== void 0 && x.push({
          node: p,
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
        densities: c,
        poissonsRatios: I,
        thicknesses: w
      }, n.doSolve && g.length && i.length) try {
        s.deformOutputs.val = E(g, i, s.nodeInputs.val, s.elementInputs.val, x.length ? x : void 0), console.log("[CLI Modeler] Solve OK \u2014", i.length, "elementos,", g.length, "nodos");
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
  L as c
};
