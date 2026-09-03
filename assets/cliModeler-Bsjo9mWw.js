import { c as fe, a as de } from "./cadSections-DVtTZU6U.js";
import { a as pe } from "./analyze-BFwM3Jvn.js";
import { d as he, __tla as __tla_0 } from "./didacticCpp-DF54q7po.js";
let Ie, me;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const se = {
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
  function le(_) {
    const o = _.toLowerCase().trim();
    if (o === "fixed" || o === "empotrado") return [
      true,
      true,
      true,
      true,
      true,
      true
    ];
    if (o === "pinned" || o === "articulado") return [
      true,
      true,
      true,
      false,
      false,
      false
    ];
    if (o === "roller" || o === "rodillo") return [
      false,
      false,
      true,
      false,
      false,
      false
    ];
    const b = [
      false,
      false,
      false,
      false,
      false,
      false
    ], r = o.split(/[\s,]+/).filter(Boolean);
    if (r.length > 1 && r.length <= 6 && r.every((I) => I === "0" || I === "1")) return r.forEach((I, $) => {
      b[$] = I === "1";
    }), b;
    for (const I of r) se[I] !== void 0 && (b[se[I]] = true);
    if (/^[01]+$/.test(o) && o.length <= 6) for (let I = 0; I < o.length; I++) b[I] = o[I] === "1";
    return b;
  }
  me = function(_) {
    const o = {
      nodes: /* @__PURE__ */ new Map(),
      frames: [],
      shells: [],
      shellLoads: /* @__PURE__ */ new Map(),
      shellTypes: /* @__PURE__ */ new Map(),
      shellMods: /* @__PURE__ */ new Map(),
      shellModsDir: /* @__PURE__ */ new Map(),
      shellAngles: /* @__PURE__ */ new Map(),
      frameAngles: /* @__PURE__ */ new Map(),
      frameShearAreas: /* @__PURE__ */ new Map(),
      frameCft: /* @__PURE__ */ new Map(),
      frameCftc: /* @__PURE__ */ new Map(),
      frameEndOffsets: /* @__PURE__ */ new Map(),
      selfWeight: 0,
      etabsWallJoint: true,
      frameReleases: /* @__PURE__ */ new Map(),
      areaObjs: [],
      supports: /* @__PURE__ */ new Map(),
      loads: /* @__PURE__ */ new Map(),
      frameLoads: /* @__PURE__ */ new Map(),
      springs: [],
      masses: /* @__PURE__ */ new Map(),
      diaphragms: /* @__PURE__ */ new Map(),
      doSolve: false,
      errors: []
    };
    let b = null, r = 0, I = 0, $ = 0;
    const x = _.split(/\r?\n/);
    for (let A = 0; A < x.length; A++) {
      let w = x[A].trim();
      if (!w || w.startsWith("#") || w.startsWith("//")) continue;
      w = w.replace(/[;]+$/, "");
      const e = w.split(/\s+/), E = e[0].toLowerCase();
      if (E === "nodes" && e.length === 1) {
        b = "nodes";
        continue;
      }
      if ((E === "elements" || E === "frames") && e.length === 1) {
        b = "elements";
        continue;
      }
      if (E === "areas" && e.length === 1) {
        b = "areas";
        continue;
      }
      if (E === "supports" && e.length === 1) {
        b = "supports";
        continue;
      }
      if (E === "loads" && e.length === 1) {
        b = "loads";
        continue;
      }
      if (E === "springs" && e.length === 1) {
        b = "springs";
        continue;
      }
      if (b && /^[\-\d]/.test(e[0])) {
        const s = e.map(parseFloat);
        if (b === "nodes" && s.length >= 3) {
          r++, o.nodes.set(r, [
            s[0],
            s[1],
            s[2]
          ]);
          continue;
        }
        if (b === "elements" && s.length >= 2) {
          I++, o.frames.push({
            id: I,
            nI: s[0] + 1,
            nJ: s[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (b === "areas" && s.length >= 4) {
          $++, o.shells.push({
            id: $,
            pts: [
              s[0] + 1,
              s[1] + 1,
              s[2] + 1,
              s[3] + 1
            ],
            t: 0.2,
            E: 25e6
          });
          continue;
        }
        if (b === "loads" && s.length >= 4) {
          o.loads.set(s[0], [
            s[1] ?? 0,
            s[2] ?? 0,
            s[3] ?? 0,
            s[4] ?? 0,
            s[5] ?? 0,
            s[6] ?? 0
          ]);
          continue;
        }
        if (b === "springs" && s.length >= 3) {
          o.springs.push({
            node: s[0],
            dof: s[1],
            k: s[2]
          });
          continue;
        }
      }
      if (b === "supports" && /^\d/.test(e[0])) {
        const s = parseInt(e[0], 10), n = e.slice(1).join(" ");
        o.supports.set(s, le(n));
        continue;
      }
      b && !/^[\-\d]/.test(e[0]) && (b = null);
      try {
        switch (E) {
          case "node":
          case "n": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2]), c = parseFloat(e[3]), f = parseFloat(e[4]);
            !isFinite(s) || !isFinite(n) || !isFinite(c) || !isFinite(f) ? o.errors.push(`L${A + 1}: node mal formado: ${w}`) : o.nodes.set(s, [
              n,
              c,
              f
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const s = parseInt(e[1], 10), n = parseInt(e[2], 10), c = parseInt(e[3], 10), f = parseFloat(e[4] ?? "25e6"), g = parseFloat(e[5] ?? "0.16"), y = parseFloat(e[6] ?? "0.001"), C = e[7] !== void 0 ? parseFloat(e[7]) : void 0, z = e[8] !== void 0 ? parseFloat(e[8]) : void 0, j = e[9] !== void 0 ? parseFloat(e[9]) : void 0, L = e[10] !== void 0 ? parseFloat(e[10]) : void 0, T = e[11] !== void 0 ? parseFloat(e[11]) : void 0, q = e[12] !== void 0 ? parseFloat(e[12]) : void 0, W = e.indexOf("#"), N = W >= 0 && e[W + 1] ? e[W + 1] : void 0;
            o.frames.push({
              id: s,
              nI: n,
              nJ: c,
              E: f,
              A: g,
              I: y,
              Iy: C,
              J: z,
              nu: j,
              rho: L,
              D: T,
              B: q,
              sec: N
            });
            break;
          }
          case "cftc": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? ""), c = parseFloat(e[3] ?? ""), f = parseFloat(e[4] ?? "25e6"), g = parseFloat(e[5] ?? "0.2");
            isFinite(s) && n > 0 && c > 0 && c < n / 2 && f > 0 ? o.frameCftc.set(s, {
              D: n,
              t: c,
              Ec: f,
              nuC: isFinite(g) ? g : 0.2
            }) : o.errors.push(`cftc ${e[1]}: hace falta D t (m) y Ec (kN/m2), con t < D/2`);
            break;
          }
          case "cft": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? ""), c = parseFloat(e[3] ?? ""), f = parseFloat(e[4] ?? ""), g = parseFloat(e[5] ?? "25e6"), y = parseFloat(e[6] ?? "0.2");
            isFinite(s) && n > 0 && c > 0 && f > 0 && f < Math.min(n, c) / 2 && g > 0 ? o.frameCft.set(s, {
              b: n,
              h: c,
              t: f,
              Ec: g,
              nuC: isFinite(y) ? y : 0.2
            }) : o.errors.push(`cft ${e[1]}: hace falta b h t (m) y Ec (kN/m2), con t < min(b,h)/2`);
            break;
          }
          case "as":
          case "shearareas": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0");
            isFinite(s) && isFinite(n) && isFinite(c) && o.frameShearAreas.set(s, [
              n,
              c
            ]);
            break;
          }
          case "release":
          case "rel": {
            const s = parseInt(e[1], 10), n = e.slice(2).map((f) => f.toLowerCase());
            if (!isFinite(s) || n.length === 0) {
              o.errors.push('release: se esperaba "release frameID <12 bits> | pin fix"');
              break;
            }
            const c = new Array(12).fill(false);
            if (n.length === 2 && n.every((f) => /^(pin|fix|libre|rigido)$/.test(f))) n.forEach((f, g) => {
              (f === "pin" || f === "libre") && (c[g * 6 + 4] = true, c[g * 6 + 5] = true);
            });
            else {
              const f = n.filter((g) => g === "0" || g === "1");
              if (f.length !== 12) {
                o.errors.push(`release ${s}: hacen falta 12 banderas (U1 U2 U3 R1 R2 R3 en I y en J), llegaron ${f.length}`);
                break;
              }
              for (let g = 0; g < 12; g++) c[g] = f[g] === "1";
            }
            c.some(Boolean) && o.frameReleases.set(s, c);
            break;
          }
          case "etabsjoint":
          case "etabswalljoint": {
            const s = (e[1] ?? "1").toLowerCase();
            o.etabsWallJoint = !(s === "0" || s === "no" || s === "off" || s === "false");
            break;
          }
          case "selfweight":
          case "peso":
          case "sw": {
            const s = parseFloat(e[1] ?? "1");
            o.selfWeight = isFinite(s) ? s : 1;
            break;
          }
          case "endoffset":
          case "offset":
          case "lengthoff": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0"), f = parseFloat(e[4] ?? "0");
            if (!isFinite(s) || !isFinite(n) || !isFinite(c)) {
              o.errors.push('endoffset: se esperaba "endoffset frameID offI offJ [rz]"');
              break;
            }
            o.frameEndOffsets.set(s, [
              n,
              c,
              isFinite(f) ? f : 0
            ]);
            break;
          }
          case "ang":
          case "localaxis": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0");
            isFinite(s) && isFinite(n) && o.frameAngles.set(s, n);
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const s = parseInt(e[1], 10), n = [
              parseInt(e[2], 10),
              parseInt(e[3], 10),
              parseInt(e[4], 10),
              parseInt(e[5], 10)
            ], c = parseFloat(e[6] ?? "0.20"), f = parseFloat(e[7] ?? "25e6"), g = e[9] !== void 0 ? parseFloat(e[9]) : void 0, y = g !== void 0 && isFinite(g) ? g : void 0;
            if (o.shells.push({
              id: s,
              pts: n,
              t: c,
              E: f,
              rho: y
            }), e[8] !== void 0) {
              const C = parseFloat(e[8]);
              isFinite(C) && C !== 0 && o.shellLoads.set(s, C);
            }
            break;
          }
          case "shelltype":
          case "plateform": {
            const s = parseInt(e[1], 10), n = (e[2] ?? "").toLowerCase();
            if (!isFinite(s)) break;
            let c;
            if (n === "thin" || n === "delgada" || n === "kirchhoff" || n === "1" ? c = 1 : (n === "thick" || n === "gruesa" || n === "mindlin" || n === "0") && (c = 0), c === void 0) {
              o.errors.push(`shelltype ${s}: se esperaba thin o thick`);
              break;
            }
            o.shellTypes.set(s, c);
            break;
          }
          case "shellmod": {
            const s = parseInt(e[1], 10);
            if (!isFinite(s)) break;
            const n = e.slice(2).map(parseFloat);
            if (n.length >= 8) o.shellModsDir.set(s, n.slice(0, 8).map((c) => isFinite(c) ? c : 1));
            else {
              const c = n[0], f = n[1];
              o.shellMods.set(s, [
                isFinite(c) ? c : 1,
                isFinite(f) ? f : 1
              ]);
            }
            break;
          }
          case "areaobj": {
            const s = e.slice(1).map((L) => parseInt(L, 10));
            if (s.length < 7 || s.some((L) => !isFinite(L))) {
              o.errors.push('areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"');
              break;
            }
            const [n, c, f, g, y, C, z] = s, j = [];
            for (let L = C; L <= z; L++) j.push(L);
            o.areaObjs.push({
              id: n,
              pts: [
                c,
                f,
                g,
                y
              ],
              cells: j
            });
            break;
          }
          case "shellang": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2]);
            if (!isFinite(s) || !isFinite(n)) {
              o.errors.push('shellang: se esperaba "shellang shellID grados"');
              break;
            }
            o.shellAngles.set(s, n);
            break;
          }
          case "areaload":
          case "qarea": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2]);
            if (!isFinite(s) || !isFinite(n)) {
              o.errors.push('areaload: se esperaba "areaload shellID q"');
              break;
            }
            o.shellLoads.set(s, n);
            break;
          }
          case "support":
          case "fix": {
            const s = parseInt(e[1], 10), n = e.slice(2).join(" ");
            o.supports.set(s, le(n));
            break;
          }
          case "load":
          case "l": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0"), f = parseFloat(e[4] ?? "0"), g = parseFloat(e[5] ?? "0"), y = parseFloat(e[6] ?? "0"), C = parseFloat(e[7] ?? "0");
            o.loads.set(s, [
              n,
              c,
              f,
              g,
              y,
              C
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0"), f = parseFloat(e[4] ?? "0"), g = o.frameLoads.get(s) ?? [
              0,
              0,
              0
            ];
            o.frameLoads.set(s, [
              g[0] + n,
              g[1] + c,
              g[2] + f
            ]);
            break;
          }
          case "spring": {
            const s = parseInt(e[1], 10), n = (e[2] ?? "uz").toLowerCase(), c = se[n] ?? 2, f = parseFloat(e[3] ?? "1000");
            o.springs.push({
              node: s,
              dof: c,
              k: f
            });
            break;
          }
          case "diaph":
          case "diaphragm": {
            const s = parseInt(e[1], 10), n = parseInt(e[2] ?? "1", 10);
            isFinite(s) && isFinite(n) && n > 0 && o.diaphragms.set(s, n);
            break;
          }
          case "mass": {
            const s = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0");
            Number.isFinite(s) && Number.isFinite(n) ? o.masses.set(s, (o.masses.get(s) ?? 0) + n) : o.errors.push(`L${A + 1}: mass necesita <nudo> <toneladas>`);
            break;
          }
          case "solve":
          case "run":
          case "analyze": {
            o.doSolve = true;
            break;
          }
          case "reset":
          case "clear":
            o.nodes.clear(), o.frames.length = 0, o.shells.length = 0, o.supports.clear(), o.loads.clear(), o.frameLoads.clear(), o.springs.length = 0, o.masses.clear(), o.diaphragms.clear();
            break;
          default:
            o.errors.push(`L${A + 1}: comando desconocido "${E}"`);
        }
      } catch (s) {
        o.errors.push(`L${A + 1}: error "${w}" \u2014 ${s.message}`);
      }
    }
    return o;
  };
  let ue;
  ue = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  Ie = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "\u{1F9EA} Utilidades",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(_, o) {
      var _a, _b;
      const b = window.__hekatanCliScript ?? ue;
      window.__hekatanCliLastScript = b;
      const r = me(b), I = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), x = [], A = Array.from(r.nodes.keys()).sort((t, l) => t - l);
      for (const t of A) I.set(t, x.length), x.push(r.nodes.get(t));
      const w = [], e = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
      for (const t of r.frames) {
        const l = I.get(t.nI), a = I.get(t.nJ);
        if (l === void 0 || a === void 0) {
          const p = A.length ? `IDs disponibles: ${A.join(", ")}` : "ning\xFAn nodo definido", J = [];
          l === void 0 && J.push(t.nI), a === void 0 && J.push(t.nJ), r.errors.push(`frame ${t.id}: nodo(s) inexistente(s) [${J.join(", ")}] \u2014 ${p}`);
          continue;
        }
        const i = w.length;
        w.push([
          l,
          a
        ]);
        const M = t.nu ?? 0.2;
        e.set(i, t.E), E.set(i, t.E / (2 * (1 + M))), s.set(i, t.A), n.set(i, t.I), c.set(i, t.Iy ?? t.I), f.set(i, t.J ?? 0.14 * Math.pow(Math.sqrt(t.A), 4)), g.set(i, t.rho ?? 2.45), X.set(i, M), t.D !== void 0 && isFinite(t.D) && y.set(i, t.D), t.B !== void 0 && isFinite(t.B) && C.set(i, t.B);
        const u = r.frameAngles.get(t.id);
        u !== void 0 && isFinite(u) && j.set(i, u);
        const h = r.frameReleases.get(t.id);
        h && L.set(i, h);
        const k = r.frameEndOffsets.get(t.id);
        k && T.set(i, k);
        const v = r.frameLoads.get(t.id);
        v && W.set(i, v);
        const F = r.frameShearAreas.get(t.id);
        if (F && (B.set(i, F[0]), N.set(i, F[1])), t.sec || t.D !== void 0 && t.B !== void 0) {
          const p = {
            type: "general"
          };
          t.sec && (p.name = t.sec), t.D !== void 0 && isFinite(t.D) && (p.h = t.D), t.B !== void 0 && isFinite(t.B) && (p.b = t.B), z.set(i, p);
        }
        const m = r.frameCftc.get(t.id);
        if (m) {
          const p = fe(m.D, m.t, t.E, M, m.Ec, m.nuC);
          s.set(i, p.A), c.set(i, p.Iz), n.set(i, p.Iy), f.set(i, p.J), B.set(i, p.As2), N.set(i, p.As3), y.set(i, m.D), C.set(i, m.D), z.set(i, {
            type: "CFT",
            d: m.D,
            tw: m.t,
            fillE: m.Ec,
            name: t.sec ?? `CFTC ${Math.round(m.D * 1e3)}X${Math.round(m.t * 1e3)}`
          });
        }
        const d = r.frameCft.get(t.id);
        if (d) {
          const p = de(d.b, d.h, d.t, t.E, M, d.Ec, d.nuC);
          s.set(i, p.A), c.set(i, p.Iz), n.set(i, p.Iy), f.set(i, p.J), B.set(i, p.As2), N.set(i, p.As3), y.set(i, d.h), C.set(i, d.b), z.set(i, {
            type: "CFT",
            b: d.b,
            h: d.h,
            tw: d.t,
            fillE: d.Ec,
            name: t.sec ?? `CFT ${Math.round(d.h * 1e3)}X${Math.round(d.b * 1e3)}X${Math.round(d.t * 1e3)}`
          });
        }
      }
      for (const t of r.shells) {
        const l = t.pts.map((M) => I.get(M));
        if (l.some((M) => M === void 0)) {
          r.errors.push(`shell ${t.id}: algun nodo inexistente`);
          continue;
        }
        const a = w.length;
        $.set(t.id, a), w.push(l), e.set(a, t.E), E.set(a, t.E / (2 * 1.2)), G.set(a, t.t), g.set(a, t.rho ?? 2.45), X.set(a, 0.2);
        const i = r.shellTypes.get(t.id);
        i !== void 0 && q.set(a, i);
      }
      const P = /* @__PURE__ */ new Map();
      for (const [t, l] of r.supports.entries()) {
        const a = I.get(t);
        a !== void 0 && P.set(a, l);
      }
      const D = /* @__PURE__ */ new Map();
      for (const [t, l] of r.loads.entries()) {
        const a = I.get(t);
        a !== void 0 && D.set(a, [
          ...l
        ]);
      }
      const te = /* @__PURE__ */ new Map();
      for (const [t, l] of r.diaphragms.entries()) {
        const a = I.get(t);
        a !== void 0 && te.set(a, l);
      }
      const oe = /* @__PURE__ */ new Map();
      for (const [t, l] of r.masses.entries()) {
        const a = I.get(t);
        a !== void 0 && oe.set(a, l);
      }
      if (r.frameLoads.size) {
        const t = (l, a) => {
          const i = D.get(l) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          D.set(l, [
            i[0] + a[0],
            i[1] + a[1],
            i[2] + a[2],
            i[3] + a[3],
            i[4] + a[4],
            i[5] + a[5]
          ]);
        };
        for (const [l, a] of r.frameLoads.entries()) {
          const i = r.frames.find((J) => J.id === l);
          if (!i) {
            r.errors.push(`frameload ${l}: no existe esa barra`);
            continue;
          }
          const M = I.get(i.nI), u = I.get(i.nJ);
          if (M === void 0 || u === void 0) continue;
          const h = x[M], k = x[u], v = [
            k[0] - h[0],
            k[1] - h[1],
            k[2] - h[2]
          ], F = Math.hypot(v[0], v[1], v[2]);
          if (F < 1e-9) continue;
          const m = [
            v[0] / F,
            v[1] / F,
            v[2] / F
          ], d = F * F / 12, p = [
            m[1] * a[2] - m[2] * a[1],
            m[2] * a[0] - m[0] * a[2],
            m[0] * a[1] - m[1] * a[0]
          ];
          t(M, [
            a[0] * F / 2,
            a[1] * F / 2,
            a[2] * F / 2,
            d * p[0],
            d * p[1],
            d * p[2]
          ]), t(u, [
            a[0] * F / 2,
            a[1] * F / 2,
            a[2] * F / 2,
            -d * p[0],
            -d * p[1],
            -d * p[2]
          ]);
        }
      }
      const Y = /* @__PURE__ */ new Map(), S = 1 / Math.sqrt(3), ce = [
        [
          -S,
          -S
        ],
        [
          S,
          -S
        ],
        [
          S,
          S
        ],
        [
          -S,
          S
        ]
      ];
      for (const t of r.shells) {
        const l = r.shellLoads.get(t.id);
        if (!l) continue;
        const a = t.pts.map((u) => I.get(u));
        if (a.some((u) => u === void 0)) {
          r.errors.push(`areaload ${t.id}: algun nodo inexistente`);
          continue;
        }
        const i = a.map((u) => x[u]), M = [
          0,
          0,
          0,
          0
        ];
        for (const [u, h] of ce) {
          const k = [
            0.25 * (1 - u) * (1 - h),
            0.25 * (1 + u) * (1 - h),
            0.25 * (1 + u) * (1 + h),
            0.25 * (1 - u) * (1 + h)
          ], v = [
            -0.25 * (1 - h),
            0.25 * (1 - h),
            0.25 * (1 + h),
            -0.25 * (1 + h)
          ], F = [
            -0.25 * (1 - u),
            -0.25 * (1 + u),
            0.25 * (1 + u),
            0.25 * (1 - u)
          ], m = [
            0,
            1,
            2
          ].map((O) => v.reduce((H, Q, ee) => H + Q * i[ee][O], 0)), d = [
            0,
            1,
            2
          ].map((O) => F.reduce((H, Q, ee) => H + Q * i[ee][O], 0)), p = [
            m[1] * d[2] - m[2] * d[1],
            m[2] * d[0] - m[0] * d[2],
            m[0] * d[1] - m[1] * d[0]
          ], J = Math.hypot(p[0], p[1], p[2]);
          for (let O = 0; O < 4; O++) M[O] += k[O] * l * J;
        }
        for (let u = 0; u < 4; u++) {
          const h = a[u], k = D.get(h) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          k[2] += M[u], D.set(h, k), Y.set(h, (Y.get(h) ?? 0) + M[u]);
        }
      }
      if (r.selfWeight) {
        const l = (a, i) => {
          const M = D.get(a) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          M[2] += i, D.set(a, M);
        };
        w.forEach((a, i) => {
          const M = g.get(i) ?? 0;
          if (M) {
            if (a.length === 2) {
              const u = s.get(i) ?? 0, h = x[a[0]], k = x[a[1]], v = [
                k[0] - h[0],
                k[1] - h[1],
                k[2] - h[2]
              ];
              let F = Math.hypot(v[0], v[1], v[2]);
              const m = T.get(i);
              if (m) {
                const p = Math.hypot(v[0], v[1]);
                p > 1e-9 && Math.abs(Math.atan2(Math.abs(v[2]), p)) * 180 / Math.PI < 20 && (F = Math.max(F - m[0] - m[1], 0));
              }
              const d = u * F * M * 9.80665 * r.selfWeight;
              l(a[0], -d / 2), l(a[1], -d / 2);
            } else if (a.length === 4) {
              const u = G.get(i) ?? 0, h = a.map((F) => x[F]);
              let k = 0;
              for (let F = 1; F < 3; F++) {
                const m = [
                  h[F][0] - h[0][0],
                  h[F][1] - h[0][1],
                  h[F][2] - h[0][2]
                ], d = [
                  h[F + 1][0] - h[0][0],
                  h[F + 1][1] - h[0][1],
                  h[F + 1][2] - h[0][2]
                ], p = [
                  m[1] * d[2] - m[2] * d[1],
                  m[2] * d[0] - m[0] * d[2],
                  m[0] * d[1] - m[1] * d[0]
                ];
                k += Math.hypot(p[0], p[1], p[2]) / 2;
              }
              const v = k * u * M * 9.80665 * r.selfWeight;
              for (const F of a) l(F, -v / 4);
            }
          }
        });
      }
      const R = [];
      for (const t of r.springs) {
        const l = I.get(t.node);
        l !== void 0 && R.push({
          node: l,
          dof: t.dof,
          k: t.k
        });
      }
      o.nodes.val = x, o.elements.val = w, o.nodeInputs.val = {
        supports: P,
        loads: D,
        masses: oe,
        diaphragms: te,
        springs: R
      }, o.springs && (o.springs.val = R);
      const Z = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
      for (const t of r.shells) {
        const l = $.get(t.id);
        if (l === void 0) continue;
        const a = r.shellLoads.get(t.id);
        a !== void 0 && ae.set(l, a);
        const i = r.shellAngles.get(t.id);
        i !== void 0 && ie.set(l, i);
        const M = r.shellModsDir.get(t.id);
        if (M) {
          ne.set(l, M), Z.set(l, (M[0] + M[1]) / 2), V.set(l, (M[3] + M[4]) / 2);
          continue;
        }
        const u = r.shellMods.get(t.id);
        u && (Z.set(l, u[0]), V.set(l, u[1]));
      }
      if (o.elementInputs.val = {
        elasticities: e,
        shearModuli: E,
        areas: s,
        momentsOfInertiaY: n,
        momentsOfInertiaZ: c,
        torsionalConstants: f,
        densities: g,
        poissonsRatios: X,
        thicknesses: G,
        membraneModifiers: Z,
        bendingModifiers: V,
        shellModifiers: ne,
        shellSurfaceLoads: ae,
        shellAngles: ie,
        cargaDeArea: Y,
        cantos: y,
        anchos: C,
        sectionShapes: z,
        localAngles: j,
        shearAreasY: N,
        shearAreasZ: B,
        momentReleases: L,
        endOffsets: T,
        plateFormulations: q,
        frameLoads: W,
        selfWeight: r.selfWeight,
        etabsWallJoint: r.etabsWallJoint,
        areaObjects: r.areaObjs.map((t) => ({
          nodes: t.pts.map((l) => I.get(l)).filter((l) => l !== void 0),
          cells: t.cells.map((l) => $.get(l)).filter((l) => l !== void 0),
          q: t.cells.map((l) => r.shellLoads.get(l)).find((l) => l !== void 0),
          ang: t.cells.map((l) => r.shellAngles.get(l)).find((l) => l !== void 0)
        })).filter((t) => t.nodes.length === 4 && t.cells.length > 0)
      }, r.doSolve && x.length && w.length) try {
        o.deformOutputs.val = he(x, w, o.nodeInputs.val, o.elementInputs.val, R.length ? R : void 0);
        try {
          o.analyzeOutputs.val = pe(x, w, o.elementInputs.val, o.deformOutputs.val);
        } catch (t) {
          console.warn("[CLI Modeler] analyze:", (t == null ? void 0 : t.message) ?? t);
        }
        console.log("[CLI Modeler] Solve OK \u2014", w.length, "elementos,", x.length, "nodos");
      } catch (t) {
        r.errors.push(`solve fall\xF3: ${t.message}`);
      }
      if (o.objects3D.val = [], r.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const t of r.errors) console.warn("  -", t);
      }
      window.__hekatanCliErrors = r.errors;
      let K = 0, re = 0;
      const U = o.deformOutputs.val;
      if ((_a = U == null ? void 0 : U.deformations) == null ? void 0 : _a.size) for (const [, t] of U.deformations) Math.abs(t[2]) > Math.abs(K) && (K = t[2]);
      if ((_b = U == null ? void 0 : U.reactions) == null ? void 0 : _b.size) for (const [, t] of U.reactions) re += t[2] || 0;
      window.__hekatanCliStats = {
        nodes: x.length,
        frames: r.frames.length,
        shells: r.shells.length,
        supports: P.size,
        loads: D.size,
        springs: R.length,
        solved: r.doSolve,
        errors: r.errors.length,
        maxUzMm: +(K * 1e3).toFixed(3),
        sumRz: +re.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  Ie as c,
  me as p
};
