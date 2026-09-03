import { c as de } from "./cadSections-et9anjWz.js";
import { a as fe } from "./analyze-BFwM3Jvn.js";
import { d as pe, __tla as __tla_0 } from "./didacticCpp-tPsbfU7x.js";
let Me, he;
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
    const I = [
      false,
      false,
      false,
      false,
      false,
      false
    ], r = o.split(/[\s,]+/).filter(Boolean);
    if (r.length > 1 && r.length <= 6 && r.every((F) => F === "0" || F === "1")) return r.forEach((F, $) => {
      I[$] = F === "1";
    }), I;
    for (const F of r) se[F] !== void 0 && (I[se[F]] = true);
    if (/^[01]+$/.test(o) && o.length <= 6) for (let F = 0; F < o.length; F++) I[F] = o[F] === "1";
    return I;
  }
  he = function(_) {
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
      frameEndOffsets: /* @__PURE__ */ new Map(),
      selfWeight: 0,
      etabsWallJoint: false,
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
    let I = null, r = 0, F = 0, $ = 0;
    const x = _.split(/\r?\n/);
    for (let E = 0; E < x.length; E++) {
      let w = x[E].trim();
      if (!w || w.startsWith("#") || w.startsWith("//")) continue;
      w = w.replace(/[;]+$/, "");
      const e = w.split(/\s+/), L = e[0].toLowerCase();
      if (L === "nodes" && e.length === 1) {
        I = "nodes";
        continue;
      }
      if ((L === "elements" || L === "frames") && e.length === 1) {
        I = "elements";
        continue;
      }
      if (L === "areas" && e.length === 1) {
        I = "areas";
        continue;
      }
      if (L === "supports" && e.length === 1) {
        I = "supports";
        continue;
      }
      if (L === "loads" && e.length === 1) {
        I = "loads";
        continue;
      }
      if (L === "springs" && e.length === 1) {
        I = "springs";
        continue;
      }
      if (I && /^[\-\d]/.test(e[0])) {
        const t = e.map(parseFloat);
        if (I === "nodes" && t.length >= 3) {
          r++, o.nodes.set(r, [
            t[0],
            t[1],
            t[2]
          ]);
          continue;
        }
        if (I === "elements" && t.length >= 2) {
          F++, o.frames.push({
            id: F,
            nI: t[0] + 1,
            nJ: t[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (I === "areas" && t.length >= 4) {
          $++, o.shells.push({
            id: $,
            pts: [
              t[0] + 1,
              t[1] + 1,
              t[2] + 1,
              t[3] + 1
            ],
            t: 0.2,
            E: 25e6
          });
          continue;
        }
        if (I === "loads" && t.length >= 4) {
          o.loads.set(t[0], [
            t[1] ?? 0,
            t[2] ?? 0,
            t[3] ?? 0,
            t[4] ?? 0,
            t[5] ?? 0,
            t[6] ?? 0
          ]);
          continue;
        }
        if (I === "springs" && t.length >= 3) {
          o.springs.push({
            node: t[0],
            dof: t[1],
            k: t[2]
          });
          continue;
        }
      }
      if (I === "supports" && /^\d/.test(e[0])) {
        const t = parseInt(e[0], 10), n = e.slice(1).join(" ");
        o.supports.set(t, le(n));
        continue;
      }
      I && !/^[\-\d]/.test(e[0]) && (I = null);
      try {
        switch (L) {
          case "node":
          case "n": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2]), c = parseFloat(e[3]), f = parseFloat(e[4]);
            !isFinite(t) || !isFinite(n) || !isFinite(c) || !isFinite(f) ? o.errors.push(`L${E + 1}: node mal formado: ${w}`) : o.nodes.set(t, [
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
            const t = parseInt(e[1], 10), n = parseInt(e[2], 10), c = parseInt(e[3], 10), f = parseFloat(e[4] ?? "25e6"), u = parseFloat(e[5] ?? "0.16"), y = parseFloat(e[6] ?? "0.001"), A = e[7] !== void 0 ? parseFloat(e[7]) : void 0, J = e[8] !== void 0 ? parseFloat(e[8]) : void 0, O = e[9] !== void 0 ? parseFloat(e[9]) : void 0, C = e[10] !== void 0 ? parseFloat(e[10]) : void 0, R = e[11] !== void 0 ? parseFloat(e[11]) : void 0, q = e[12] !== void 0 ? parseFloat(e[12]) : void 0, j = e.indexOf("#"), N = j >= 0 && e[j + 1] ? e[j + 1] : void 0;
            o.frames.push({
              id: t,
              nI: n,
              nJ: c,
              E: f,
              A: u,
              I: y,
              Iy: A,
              J,
              nu: O,
              rho: C,
              D: R,
              B: q,
              sec: N
            });
            break;
          }
          case "cft": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2] ?? ""), c = parseFloat(e[3] ?? ""), f = parseFloat(e[4] ?? ""), u = parseFloat(e[5] ?? "25e6"), y = parseFloat(e[6] ?? "0.2");
            isFinite(t) && n > 0 && c > 0 && f > 0 && f < Math.min(n, c) / 2 && u > 0 ? o.frameCft.set(t, {
              b: n,
              h: c,
              t: f,
              Ec: u,
              nuC: isFinite(y) ? y : 0.2
            }) : o.errors.push(`cft ${e[1]}: hace falta b h t (m) y Ec (kN/m2), con t < min(b,h)/2`);
            break;
          }
          case "as":
          case "shearareas": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0");
            isFinite(t) && isFinite(n) && isFinite(c) && o.frameShearAreas.set(t, [
              n,
              c
            ]);
            break;
          }
          case "release":
          case "rel": {
            const t = parseInt(e[1], 10), n = e.slice(2).map((f) => f.toLowerCase());
            if (!isFinite(t) || n.length === 0) {
              o.errors.push('release: se esperaba "release frameID <12 bits> | pin fix"');
              break;
            }
            const c = new Array(12).fill(false);
            if (n.length === 2 && n.every((f) => /^(pin|fix|libre|rigido)$/.test(f))) n.forEach((f, u) => {
              (f === "pin" || f === "libre") && (c[u * 6 + 4] = true, c[u * 6 + 5] = true);
            });
            else {
              const f = n.filter((u) => u === "0" || u === "1");
              if (f.length !== 12) {
                o.errors.push(`release ${t}: hacen falta 12 banderas (U1 U2 U3 R1 R2 R3 en I y en J), llegaron ${f.length}`);
                break;
              }
              for (let u = 0; u < 12; u++) c[u] = f[u] === "1";
            }
            c.some(Boolean) && o.frameReleases.set(t, c);
            break;
          }
          case "etabsjoint":
          case "etabswalljoint": {
            const t = (e[1] ?? "1").toLowerCase();
            o.etabsWallJoint = !(t === "0" || t === "no" || t === "off" || t === "false");
            break;
          }
          case "selfweight":
          case "peso":
          case "sw": {
            const t = parseFloat(e[1] ?? "1");
            o.selfWeight = isFinite(t) ? t : 1;
            break;
          }
          case "endoffset":
          case "offset":
          case "lengthoff": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0"), f = parseFloat(e[4] ?? "0");
            if (!isFinite(t) || !isFinite(n) || !isFinite(c)) {
              o.errors.push('endoffset: se esperaba "endoffset frameID offI offJ [rz]"');
              break;
            }
            o.frameEndOffsets.set(t, [
              n,
              c,
              isFinite(f) ? f : 0
            ]);
            break;
          }
          case "ang":
          case "localaxis": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0");
            isFinite(t) && isFinite(n) && o.frameAngles.set(t, n);
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const t = parseInt(e[1], 10), n = [
              parseInt(e[2], 10),
              parseInt(e[3], 10),
              parseInt(e[4], 10),
              parseInt(e[5], 10)
            ], c = parseFloat(e[6] ?? "0.20"), f = parseFloat(e[7] ?? "25e6"), u = e[9] !== void 0 ? parseFloat(e[9]) : void 0, y = u !== void 0 && isFinite(u) ? u : void 0;
            if (o.shells.push({
              id: t,
              pts: n,
              t: c,
              E: f,
              rho: y
            }), e[8] !== void 0) {
              const A = parseFloat(e[8]);
              isFinite(A) && A !== 0 && o.shellLoads.set(t, A);
            }
            break;
          }
          case "shelltype":
          case "plateform": {
            const t = parseInt(e[1], 10), n = (e[2] ?? "").toLowerCase();
            if (!isFinite(t)) break;
            let c;
            if (n === "thin" || n === "delgada" || n === "kirchhoff" || n === "1" ? c = 1 : (n === "thick" || n === "gruesa" || n === "mindlin" || n === "0") && (c = 0), c === void 0) {
              o.errors.push(`shelltype ${t}: se esperaba thin o thick`);
              break;
            }
            o.shellTypes.set(t, c);
            break;
          }
          case "shellmod": {
            const t = parseInt(e[1], 10);
            if (!isFinite(t)) break;
            const n = e.slice(2).map(parseFloat);
            if (n.length >= 8) o.shellModsDir.set(t, n.slice(0, 8).map((c) => isFinite(c) ? c : 1));
            else {
              const c = n[0], f = n[1];
              o.shellMods.set(t, [
                isFinite(c) ? c : 1,
                isFinite(f) ? f : 1
              ]);
            }
            break;
          }
          case "areaobj": {
            const t = e.slice(1).map((C) => parseInt(C, 10));
            if (t.length < 7 || t.some((C) => !isFinite(C))) {
              o.errors.push('areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"');
              break;
            }
            const [n, c, f, u, y, A, J] = t, O = [];
            for (let C = A; C <= J; C++) O.push(C);
            o.areaObjs.push({
              id: n,
              pts: [
                c,
                f,
                u,
                y
              ],
              cells: O
            });
            break;
          }
          case "shellang": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2]);
            if (!isFinite(t) || !isFinite(n)) {
              o.errors.push('shellang: se esperaba "shellang shellID grados"');
              break;
            }
            o.shellAngles.set(t, n);
            break;
          }
          case "areaload":
          case "qarea": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2]);
            if (!isFinite(t) || !isFinite(n)) {
              o.errors.push('areaload: se esperaba "areaload shellID q"');
              break;
            }
            o.shellLoads.set(t, n);
            break;
          }
          case "support":
          case "fix": {
            const t = parseInt(e[1], 10), n = e.slice(2).join(" ");
            o.supports.set(t, le(n));
            break;
          }
          case "load":
          case "l": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0"), f = parseFloat(e[4] ?? "0"), u = parseFloat(e[5] ?? "0"), y = parseFloat(e[6] ?? "0"), A = parseFloat(e[7] ?? "0");
            o.loads.set(t, [
              n,
              c,
              f,
              u,
              y,
              A
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0"), c = parseFloat(e[3] ?? "0"), f = parseFloat(e[4] ?? "0"), u = o.frameLoads.get(t) ?? [
              0,
              0,
              0
            ];
            o.frameLoads.set(t, [
              u[0] + n,
              u[1] + c,
              u[2] + f
            ]);
            break;
          }
          case "spring": {
            const t = parseInt(e[1], 10), n = (e[2] ?? "uz").toLowerCase(), c = se[n] ?? 2, f = parseFloat(e[3] ?? "1000");
            o.springs.push({
              node: t,
              dof: c,
              k: f
            });
            break;
          }
          case "diaph":
          case "diaphragm": {
            const t = parseInt(e[1], 10), n = parseInt(e[2] ?? "1", 10);
            isFinite(t) && isFinite(n) && n > 0 && o.diaphragms.set(t, n);
            break;
          }
          case "mass": {
            const t = parseInt(e[1], 10), n = parseFloat(e[2] ?? "0");
            Number.isFinite(t) && Number.isFinite(n) ? o.masses.set(t, (o.masses.get(t) ?? 0) + n) : o.errors.push(`L${E + 1}: mass necesita <nudo> <toneladas>`);
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
            o.errors.push(`L${E + 1}: comando desconocido "${L}"`);
        }
      } catch (t) {
        o.errors.push(`L${E + 1}: error "${w}" \u2014 ${t.message}`);
      }
    }
    return o;
  };
  let me;
  me = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  Me = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "\u{1F9EA} Utilidades",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(_, o) {
      var _a, _b;
      const I = window.__hekatanCliScript ?? me;
      window.__hekatanCliLastScript = I;
      const r = he(I), F = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), x = [], E = Array.from(r.nodes.keys()).sort((s, i) => s - i);
      for (const s of E) F.set(s, x.length), x.push(r.nodes.get(s));
      const w = [], e = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), U = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map();
      for (const s of r.frames) {
        const i = F.get(s.nI), a = F.get(s.nJ);
        if (i === void 0 || a === void 0) {
          const h = E.length ? `IDs disponibles: ${E.join(", ")}` : "ning\xFAn nodo definido", b = [];
          i === void 0 && b.push(s.nI), a === void 0 && b.push(s.nJ), r.errors.push(`frame ${s.id}: nodo(s) inexistente(s) [${b.join(", ")}] \u2014 ${h}`);
          continue;
        }
        const l = w.length;
        w.push([
          i,
          a
        ]);
        const M = s.nu ?? 0.2;
        e.set(l, s.E), L.set(l, s.E / (2 * (1 + M))), t.set(l, s.A), n.set(l, s.I), c.set(l, s.Iy ?? s.I), f.set(l, s.J ?? 0.14 * Math.pow(Math.sqrt(s.A), 4)), u.set(l, s.rho ?? 2.45), G.set(l, M), s.D !== void 0 && isFinite(s.D) && y.set(l, s.D), s.B !== void 0 && isFinite(s.B) && A.set(l, s.B);
        const m = r.frameAngles.get(s.id);
        m !== void 0 && isFinite(m) && O.set(l, m);
        const p = r.frameReleases.get(s.id);
        p && C.set(l, p);
        const k = r.frameEndOffsets.get(s.id);
        k && R.set(l, k);
        const v = r.frameLoads.get(s.id);
        v && j.set(l, v);
        const g = r.frameShearAreas.get(s.id);
        if (g && (U.set(l, g[0]), N.set(l, g[1])), s.sec || s.D !== void 0 && s.B !== void 0) {
          const h = {
            type: "general"
          };
          s.sec && (h.name = s.sec), s.D !== void 0 && isFinite(s.D) && (h.h = s.D), s.B !== void 0 && isFinite(s.B) && (h.b = s.B), J.set(l, h);
        }
        const d = r.frameCft.get(s.id);
        if (d) {
          const h = de(d.b, d.h, d.t, s.E, M, d.Ec, d.nuC);
          t.set(l, h.A), c.set(l, h.Iz), n.set(l, h.Iy), f.set(l, h.J), U.set(l, h.As2), N.set(l, h.As3), y.set(l, d.h), A.set(l, d.b), J.set(l, {
            type: "CFT",
            b: d.b,
            h: d.h,
            tw: d.t,
            fillE: d.Ec,
            name: s.sec ?? `CFT ${Math.round(d.h * 1e3)}X${Math.round(d.b * 1e3)}X${Math.round(d.t * 1e3)}`
          });
        }
      }
      for (const s of r.shells) {
        const i = s.pts.map((M) => F.get(M));
        if (i.some((M) => M === void 0)) {
          r.errors.push(`shell ${s.id}: algun nodo inexistente`);
          continue;
        }
        const a = w.length;
        $.set(s.id, a), w.push(i), e.set(a, s.E), L.set(a, s.E / (2 * 1.2)), X.set(a, s.t), u.set(a, s.rho ?? 2.45), G.set(a, 0.2);
        const l = r.shellTypes.get(s.id);
        l !== void 0 && q.set(a, l);
      }
      const Y = /* @__PURE__ */ new Map();
      for (const [s, i] of r.supports.entries()) {
        const a = F.get(s);
        a !== void 0 && Y.set(a, i);
      }
      const z = /* @__PURE__ */ new Map();
      for (const [s, i] of r.loads.entries()) {
        const a = F.get(s);
        a !== void 0 && z.set(a, [
          ...i
        ]);
      }
      const te = /* @__PURE__ */ new Map();
      for (const [s, i] of r.diaphragms.entries()) {
        const a = F.get(s);
        a !== void 0 && te.set(a, i);
      }
      const oe = /* @__PURE__ */ new Map();
      for (const [s, i] of r.masses.entries()) {
        const a = F.get(s);
        a !== void 0 && oe.set(a, i);
      }
      if (r.frameLoads.size) {
        const s = (i, a) => {
          const l = z.get(i) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          z.set(i, [
            l[0] + a[0],
            l[1] + a[1],
            l[2] + a[2],
            l[3] + a[3],
            l[4] + a[4],
            l[5] + a[5]
          ]);
        };
        for (const [i, a] of r.frameLoads.entries()) {
          const l = r.frames.find((T) => T.id === i);
          if (!l) {
            r.errors.push(`frameload ${i}: no existe esa barra`);
            continue;
          }
          const M = F.get(l.nI), m = F.get(l.nJ);
          if (M === void 0 || m === void 0) continue;
          const p = x[M], k = x[m], v = [
            k[0] - p[0],
            k[1] - p[1],
            k[2] - p[2]
          ], g = Math.hypot(v[0], v[1], v[2]);
          if (g < 1e-9) continue;
          const d = [
            v[0] / g,
            v[1] / g,
            v[2] / g
          ], h = g * g / 12, b = [
            d[1] * a[2] - d[2] * a[1],
            d[2] * a[0] - d[0] * a[2],
            d[0] * a[1] - d[1] * a[0]
          ];
          s(M, [
            a[0] * g / 2,
            a[1] * g / 2,
            a[2] * g / 2,
            h * b[0],
            h * b[1],
            h * b[2]
          ]), s(m, [
            a[0] * g / 2,
            a[1] * g / 2,
            a[2] * g / 2,
            -h * b[0],
            -h * b[1],
            -h * b[2]
          ]);
        }
      }
      const Z = /* @__PURE__ */ new Map(), D = 1 / Math.sqrt(3), ce = [
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
      for (const s of r.shells) {
        const i = r.shellLoads.get(s.id);
        if (!i) continue;
        const a = s.pts.map((m) => F.get(m));
        if (a.some((m) => m === void 0)) {
          r.errors.push(`areaload ${s.id}: algun nodo inexistente`);
          continue;
        }
        const l = a.map((m) => x[m]), M = [
          0,
          0,
          0,
          0
        ];
        for (const [m, p] of ce) {
          const k = [
            0.25 * (1 - m) * (1 - p),
            0.25 * (1 + m) * (1 - p),
            0.25 * (1 + m) * (1 + p),
            0.25 * (1 - m) * (1 + p)
          ], v = [
            -0.25 * (1 - p),
            0.25 * (1 - p),
            0.25 * (1 + p),
            -0.25 * (1 + p)
          ], g = [
            -0.25 * (1 - m),
            -0.25 * (1 + m),
            0.25 * (1 + m),
            0.25 * (1 - m)
          ], d = [
            0,
            1,
            2
          ].map((S) => v.reduce((H, Q, ee) => H + Q * l[ee][S], 0)), h = [
            0,
            1,
            2
          ].map((S) => g.reduce((H, Q, ee) => H + Q * l[ee][S], 0)), b = [
            d[1] * h[2] - d[2] * h[1],
            d[2] * h[0] - d[0] * h[2],
            d[0] * h[1] - d[1] * h[0]
          ], T = Math.hypot(b[0], b[1], b[2]);
          for (let S = 0; S < 4; S++) M[S] += k[S] * i * T;
        }
        for (let m = 0; m < 4; m++) {
          const p = a[m], k = z.get(p) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          k[2] += M[m], z.set(p, k), Z.set(p, (Z.get(p) ?? 0) + M[m]);
        }
      }
      if (r.selfWeight) {
        const i = (a, l) => {
          const M = z.get(a) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          M[2] += l, z.set(a, M);
        };
        w.forEach((a, l) => {
          const M = u.get(l) ?? 0;
          if (M) {
            if (a.length === 2) {
              const m = t.get(l) ?? 0, p = x[a[0]], k = x[a[1]], v = [
                k[0] - p[0],
                k[1] - p[1],
                k[2] - p[2]
              ];
              let g = Math.hypot(v[0], v[1], v[2]);
              const d = R.get(l);
              if (d) {
                const b = Math.hypot(v[0], v[1]);
                b > 1e-9 && Math.abs(Math.atan2(Math.abs(v[2]), b)) * 180 / Math.PI < 20 && (g = Math.max(g - d[0] - d[1], 0));
              }
              const h = m * g * M * 9.80665 * r.selfWeight;
              i(a[0], -h / 2), i(a[1], -h / 2);
            } else if (a.length === 4) {
              const m = X.get(l) ?? 0, p = a.map((g) => x[g]);
              let k = 0;
              for (let g = 1; g < 3; g++) {
                const d = [
                  p[g][0] - p[0][0],
                  p[g][1] - p[0][1],
                  p[g][2] - p[0][2]
                ], h = [
                  p[g + 1][0] - p[0][0],
                  p[g + 1][1] - p[0][1],
                  p[g + 1][2] - p[0][2]
                ], b = [
                  d[1] * h[2] - d[2] * h[1],
                  d[2] * h[0] - d[0] * h[2],
                  d[0] * h[1] - d[1] * h[0]
                ];
                k += Math.hypot(b[0], b[1], b[2]) / 2;
              }
              const v = k * m * M * 9.80665 * r.selfWeight;
              for (const g of a) i(g, -v / 4);
            }
          }
        });
      }
      const W = [];
      for (const s of r.springs) {
        const i = F.get(s.node);
        i !== void 0 && W.push({
          node: i,
          dof: s.dof,
          k: s.k
        });
      }
      o.nodes.val = x, o.elements.val = w, o.nodeInputs.val = {
        supports: Y,
        loads: z,
        masses: oe,
        diaphragms: te,
        springs: W
      }, o.springs && (o.springs.val = W);
      const P = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
      for (const s of r.shells) {
        const i = $.get(s.id);
        if (i === void 0) continue;
        const a = r.shellLoads.get(s.id);
        a !== void 0 && ae.set(i, a);
        const l = r.shellAngles.get(s.id);
        l !== void 0 && ie.set(i, l);
        const M = r.shellModsDir.get(s.id);
        if (M) {
          ne.set(i, M), P.set(i, (M[0] + M[1]) / 2), V.set(i, (M[3] + M[4]) / 2);
          continue;
        }
        const m = r.shellMods.get(s.id);
        m && (P.set(i, m[0]), V.set(i, m[1]));
      }
      if (o.elementInputs.val = {
        elasticities: e,
        shearModuli: L,
        areas: t,
        momentsOfInertiaY: n,
        momentsOfInertiaZ: c,
        torsionalConstants: f,
        densities: u,
        poissonsRatios: G,
        thicknesses: X,
        membraneModifiers: P,
        bendingModifiers: V,
        shellModifiers: ne,
        shellSurfaceLoads: ae,
        shellAngles: ie,
        cargaDeArea: Z,
        cantos: y,
        anchos: A,
        sectionShapes: J,
        localAngles: O,
        shearAreasY: N,
        shearAreasZ: U,
        momentReleases: C,
        endOffsets: R,
        plateFormulations: q,
        frameLoads: j,
        selfWeight: r.selfWeight,
        etabsWallJoint: r.etabsWallJoint,
        areaObjects: r.areaObjs.map((s) => ({
          nodes: s.pts.map((i) => F.get(i)).filter((i) => i !== void 0),
          cells: s.cells.map((i) => $.get(i)).filter((i) => i !== void 0),
          q: s.cells.map((i) => r.shellLoads.get(i)).find((i) => i !== void 0),
          ang: s.cells.map((i) => r.shellAngles.get(i)).find((i) => i !== void 0)
        })).filter((s) => s.nodes.length === 4 && s.cells.length > 0)
      }, r.doSolve && x.length && w.length) try {
        o.deformOutputs.val = pe(x, w, o.nodeInputs.val, o.elementInputs.val, W.length ? W : void 0);
        try {
          o.analyzeOutputs.val = fe(x, w, o.elementInputs.val, o.deformOutputs.val);
        } catch (s) {
          console.warn("[CLI Modeler] analyze:", (s == null ? void 0 : s.message) ?? s);
        }
        console.log("[CLI Modeler] Solve OK \u2014", w.length, "elementos,", x.length, "nodos");
      } catch (s) {
        r.errors.push(`solve fall\xF3: ${s.message}`);
      }
      if (o.objects3D.val = [], r.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const s of r.errors) console.warn("  -", s);
      }
      window.__hekatanCliErrors = r.errors;
      let K = 0, re = 0;
      const B = o.deformOutputs.val;
      if ((_a = B == null ? void 0 : B.deformations) == null ? void 0 : _a.size) for (const [, s] of B.deformations) Math.abs(s[2]) > Math.abs(K) && (K = s[2]);
      if ((_b = B == null ? void 0 : B.reactions) == null ? void 0 : _b.size) for (const [, s] of B.reactions) re += s[2] || 0;
      window.__hekatanCliStats = {
        nodes: x.length,
        frames: r.frames.length,
        shells: r.shells.length,
        supports: Y.size,
        loads: z.size,
        springs: W.length,
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
  Me as c,
  he as p
};
