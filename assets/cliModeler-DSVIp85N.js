import { a as ce } from "./analyze-Dltu42RS.js";
import { d as de, __tla as __tla_0 } from "./didacticCpp-CO3UMe4K.js";
let ue, pe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const V = {
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
  function re(N) {
    const t = N.toLowerCase().trim();
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
    const m = [
      false,
      false,
      false,
      false,
      false,
      false
    ], r = t.split(/[\s,]+/).filter(Boolean);
    if (r.length > 1 && r.length <= 6 && r.every((f) => f === "0" || f === "1")) return r.forEach((f, z) => {
      m[z] = f === "1";
    }), m;
    for (const f of r) V[f] !== void 0 && (m[V[f]] = true);
    if (/^[01]+$/.test(t) && t.length <= 6) for (let f = 0; f < t.length; f++) m[f] = t[f] === "1";
    return m;
  }
  pe = function(N) {
    const t = {
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
    let m = null, r = 0, f = 0, z = 0;
    const M = N.split(/\r?\n/);
    for (let y = 0; y < M.length; y++) {
      let I = M[y].trim();
      if (!I || I.startsWith("#") || I.startsWith("//")) continue;
      I = I.replace(/[;]+$/, "");
      const s = I.split(/\s+/), w = s[0].toLowerCase();
      if (w === "nodes" && s.length === 1) {
        m = "nodes";
        continue;
      }
      if ((w === "elements" || w === "frames") && s.length === 1) {
        m = "elements";
        continue;
      }
      if (w === "areas" && s.length === 1) {
        m = "areas";
        continue;
      }
      if (w === "supports" && s.length === 1) {
        m = "supports";
        continue;
      }
      if (w === "loads" && s.length === 1) {
        m = "loads";
        continue;
      }
      if (w === "springs" && s.length === 1) {
        m = "springs";
        continue;
      }
      if (m && /^[\-\d]/.test(s[0])) {
        const o = s.map(parseFloat);
        if (m === "nodes" && o.length >= 3) {
          r++, t.nodes.set(r, [
            o[0],
            o[1],
            o[2]
          ]);
          continue;
        }
        if (m === "elements" && o.length >= 2) {
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
        if (m === "areas" && o.length >= 4) {
          z++, t.shells.push({
            id: z,
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
        if (m === "loads" && o.length >= 4) {
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
        if (m === "springs" && o.length >= 3) {
          t.springs.push({
            node: o[0],
            dof: o[1],
            k: o[2]
          });
          continue;
        }
      }
      if (m === "supports" && /^\d/.test(s[0])) {
        const o = parseInt(s[0], 10), n = s.slice(1).join(" ");
        t.supports.set(o, re(n));
        continue;
      }
      m && !/^[\-\d]/.test(s[0]) && (m = null);
      try {
        switch (w) {
          case "node":
          case "n": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2]), l = parseFloat(s[3]), p = parseFloat(s[4]);
            !isFinite(o) || !isFinite(n) || !isFinite(l) || !isFinite(p) ? t.errors.push(`L${y + 1}: node mal formado: ${I}`) : t.nodes.set(o, [
              n,
              l,
              p
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const o = parseInt(s[1], 10), n = parseInt(s[2], 10), l = parseInt(s[3], 10), p = parseFloat(s[4] ?? "25e6"), h = parseFloat(s[5] ?? "0.16"), D = parseFloat(s[6] ?? "0.001"), k = s[7] !== void 0 ? parseFloat(s[7]) : void 0, j = s[8] !== void 0 ? parseFloat(s[8]) : void 0, E = s[9] !== void 0 ? parseFloat(s[9]) : void 0, x = s[10] !== void 0 ? parseFloat(s[10]) : void 0, _ = s[11] !== void 0 ? parseFloat(s[11]) : void 0, q = s[12] !== void 0 ? parseFloat(s[12]) : void 0, R = s.indexOf("#"), B = R >= 0 && s[R + 1] ? s[R + 1] : void 0;
            t.frames.push({
              id: o,
              nI: n,
              nJ: l,
              E: p,
              A: h,
              I: D,
              Iy: k,
              J: j,
              nu: E,
              rho: x,
              D: _,
              B: q,
              sec: B
            });
            break;
          }
          case "as":
          case "shearareas": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), l = parseFloat(s[3] ?? "0");
            isFinite(o) && isFinite(n) && isFinite(l) && t.frameShearAreas.set(o, [
              n,
              l
            ]);
            break;
          }
          case "release":
          case "rel": {
            const o = parseInt(s[1], 10), n = s.slice(2).map((p) => p.toLowerCase());
            if (!isFinite(o) || n.length === 0) {
              t.errors.push('release: se esperaba "release frameID <12 bits> | pin fix"');
              break;
            }
            const l = new Array(12).fill(false);
            if (n.length === 2 && n.every((p) => /^(pin|fix|libre|rigido)$/.test(p))) n.forEach((p, h) => {
              (p === "pin" || p === "libre") && (l[h * 6 + 4] = true, l[h * 6 + 5] = true);
            });
            else {
              const p = n.filter((h) => h === "0" || h === "1");
              if (p.length !== 12) {
                t.errors.push(`release ${o}: hacen falta 12 banderas (U1 U2 U3 R1 R2 R3 en I y en J), llegaron ${p.length}`);
                break;
              }
              for (let h = 0; h < 12; h++) l[h] = p[h] === "1";
            }
            l.some(Boolean) && t.frameReleases.set(o, l);
            break;
          }
          case "ang":
          case "localaxis": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0");
            isFinite(o) && isFinite(n) && t.frameAngles.set(o, n);
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const o = parseInt(s[1], 10), n = [
              parseInt(s[2], 10),
              parseInt(s[3], 10),
              parseInt(s[4], 10),
              parseInt(s[5], 10)
            ], l = parseFloat(s[6] ?? "0.20"), p = parseFloat(s[7] ?? "25e6"), h = s[9] !== void 0 ? parseFloat(s[9]) : void 0, D = h !== void 0 && isFinite(h) ? h : void 0;
            if (t.shells.push({
              id: o,
              pts: n,
              t: l,
              E: p,
              rho: D
            }), s[8] !== void 0) {
              const k = parseFloat(s[8]);
              isFinite(k) && k !== 0 && t.shellLoads.set(o, k);
            }
            break;
          }
          case "shelltype":
          case "plateform": {
            const o = parseInt(s[1], 10), n = (s[2] ?? "").toLowerCase();
            if (!isFinite(o)) break;
            let l;
            if (n === "thin" || n === "delgada" || n === "kirchhoff" || n === "1" ? l = 1 : (n === "thick" || n === "gruesa" || n === "mindlin" || n === "0") && (l = 0), l === void 0) {
              t.errors.push(`shelltype ${o}: se esperaba thin o thick`);
              break;
            }
            t.shellTypes.set(o, l);
            break;
          }
          case "shellmod": {
            const o = parseInt(s[1], 10);
            if (!isFinite(o)) break;
            const n = s.slice(2).map(parseFloat);
            if (n.length >= 8) t.shellModsDir.set(o, n.slice(0, 8).map((l) => isFinite(l) ? l : 1));
            else {
              const l = n[0], p = n[1];
              t.shellMods.set(o, [
                isFinite(l) ? l : 1,
                isFinite(p) ? p : 1
              ]);
            }
            break;
          }
          case "areaobj": {
            const o = s.slice(1).map((x) => parseInt(x, 10));
            if (o.length < 7 || o.some((x) => !isFinite(x))) {
              t.errors.push('areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"');
              break;
            }
            const [n, l, p, h, D, k, j] = o, E = [];
            for (let x = k; x <= j; x++) E.push(x);
            t.areaObjs.push({
              id: n,
              pts: [
                l,
                p,
                h,
                D
              ],
              cells: E
            });
            break;
          }
          case "shellang": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2]);
            if (!isFinite(o) || !isFinite(n)) {
              t.errors.push('shellang: se esperaba "shellang shellID grados"');
              break;
            }
            t.shellAngles.set(o, n);
            break;
          }
          case "areaload":
          case "qarea": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2]);
            if (!isFinite(o) || !isFinite(n)) {
              t.errors.push('areaload: se esperaba "areaload shellID q"');
              break;
            }
            t.shellLoads.set(o, n);
            break;
          }
          case "support":
          case "fix": {
            const o = parseInt(s[1], 10), n = s.slice(2).join(" ");
            t.supports.set(o, re(n));
            break;
          }
          case "load":
          case "l": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), l = parseFloat(s[3] ?? "0"), p = parseFloat(s[4] ?? "0"), h = parseFloat(s[5] ?? "0"), D = parseFloat(s[6] ?? "0"), k = parseFloat(s[7] ?? "0");
            t.loads.set(o, [
              n,
              l,
              p,
              h,
              D,
              k
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), l = parseFloat(s[3] ?? "0"), p = parseFloat(s[4] ?? "0"), h = t.frameLoads.get(o) ?? [
              0,
              0,
              0
            ];
            t.frameLoads.set(o, [
              h[0] + n,
              h[1] + l,
              h[2] + p
            ]);
            break;
          }
          case "spring": {
            const o = parseInt(s[1], 10), n = (s[2] ?? "uz").toLowerCase(), l = V[n] ?? 2, p = parseFloat(s[3] ?? "1000");
            t.springs.push({
              node: o,
              dof: l,
              k: p
            });
            break;
          }
          case "diaph":
          case "diaphragm": {
            const o = parseInt(s[1], 10), n = parseInt(s[2] ?? "1", 10);
            isFinite(o) && isFinite(n) && n > 0 && t.diaphragms.set(o, n);
            break;
          }
          case "mass": {
            const o = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0");
            Number.isFinite(o) && Number.isFinite(n) ? t.masses.set(o, (t.masses.get(o) ?? 0) + n) : t.errors.push(`L${y + 1}: mass necesita <nudo> <toneladas>`);
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
            t.nodes.clear(), t.frames.length = 0, t.shells.length = 0, t.supports.clear(), t.loads.clear(), t.frameLoads.clear(), t.springs.length = 0, t.masses.clear(), t.diaphragms.clear();
            break;
          default:
            t.errors.push(`L${y + 1}: comando desconocido "${w}"`);
        }
      } catch (o) {
        t.errors.push(`L${y + 1}: error "${I}" \u2014 ${o.message}`);
      }
    }
    return t;
  };
  let fe;
  fe = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  ue = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "\u{1F9EA} Utilidades",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(N, t) {
      var _a, _b;
      const m = window.__hekatanCliScript ?? fe;
      window.__hekatanCliLastScript = m;
      const r = pe(m), f = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), M = [], y = Array.from(r.nodes.keys()).sort((e, a) => e - a);
      for (const e of y) f.set(e, M.length), M.push(r.nodes.get(e));
      const I = [], s = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map();
      for (const e of r.frames) {
        const a = f.get(e.nI), i = f.get(e.nJ);
        if (a === void 0 || i === void 0) {
          const g = y.length ? `IDs disponibles: ${y.join(", ")}` : "ning\xFAn nodo definido", v = [];
          a === void 0 && v.push(e.nI), i === void 0 && v.push(e.nJ), r.errors.push(`frame ${e.id}: nodo(s) inexistente(s) [${v.join(", ")}] \u2014 ${g}`);
          continue;
        }
        const c = I.length;
        I.push([
          a,
          i
        ]);
        const u = e.nu ?? 0.2;
        s.set(c, e.E), w.set(c, e.E / (2 * (1 + u))), o.set(c, e.A), n.set(c, e.I), l.set(c, e.Iy ?? e.I), p.set(c, e.J ?? 0.14 * Math.pow(Math.sqrt(e.A), 4)), h.set(c, e.rho ?? 2.45), T.set(c, u), e.D !== void 0 && isFinite(e.D) && D.set(c, e.D), e.B !== void 0 && isFinite(e.B) && k.set(c, e.B);
        const d = r.frameAngles.get(e.id);
        d !== void 0 && isFinite(d) && E.set(c, d);
        const F = r.frameReleases.get(e.id);
        F && x.set(c, F);
        const A = r.frameLoads.get(e.id);
        A && q.set(c, A);
        const L = r.frameShearAreas.get(e.id);
        if (L && (B.set(c, L[0]), R.set(c, L[1])), e.sec || e.D !== void 0 && e.B !== void 0) {
          const g = {
            type: "general"
          };
          e.sec && (g.name = e.sec), e.D !== void 0 && isFinite(e.D) && (g.h = e.D), e.B !== void 0 && isFinite(e.B) && (g.b = e.B), j.set(c, g);
        }
      }
      for (const e of r.shells) {
        const a = e.pts.map((u) => f.get(u));
        if (a.some((u) => u === void 0)) {
          r.errors.push(`shell ${e.id}: algun nodo inexistente`);
          continue;
        }
        const i = I.length;
        z.set(e.id, i), I.push(a), s.set(i, e.E), w.set(i, e.E / (2 * 1.2)), ee.set(i, e.t), h.set(i, e.rho ?? 2.45), T.set(i, 0.2);
        const c = r.shellTypes.get(e.id);
        c !== void 0 && _.set(i, c);
      }
      const Y = /* @__PURE__ */ new Map();
      for (const [e, a] of r.supports.entries()) {
        const i = f.get(e);
        i !== void 0 && Y.set(i, a);
      }
      const O = /* @__PURE__ */ new Map();
      for (const [e, a] of r.loads.entries()) {
        const i = f.get(e);
        i !== void 0 && O.set(i, [
          ...a
        ]);
      }
      const se = /* @__PURE__ */ new Map();
      for (const [e, a] of r.diaphragms.entries()) {
        const i = f.get(e);
        i !== void 0 && se.set(i, a);
      }
      const oe = /* @__PURE__ */ new Map();
      for (const [e, a] of r.masses.entries()) {
        const i = f.get(e);
        i !== void 0 && oe.set(i, a);
      }
      if (r.frameLoads.size) {
        const e = (a, i) => {
          const c = O.get(a) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          O.set(a, [
            c[0] + i[0],
            c[1] + i[1],
            c[2] + i[2],
            c[3] + i[3],
            c[4] + i[4],
            c[5] + i[5]
          ]);
        };
        for (const [a, i] of r.frameLoads.entries()) {
          const c = r.frames.find((W) => W.id === a);
          if (!c) {
            r.errors.push(`frameload ${a}: no existe esa barra`);
            continue;
          }
          const u = f.get(c.nI), d = f.get(c.nJ);
          if (u === void 0 || d === void 0) continue;
          const F = M[u], A = M[d], L = [
            A[0] - F[0],
            A[1] - F[1],
            A[2] - F[2]
          ], g = Math.hypot(L[0], L[1], L[2]);
          if (g < 1e-9) continue;
          const v = [
            L[0] / g,
            L[1] / g,
            L[2] / g
          ], b = g * g / 12, S = [
            v[1] * i[2] - v[2] * i[1],
            v[2] * i[0] - v[0] * i[2],
            v[0] * i[1] - v[1] * i[0]
          ];
          e(u, [
            i[0] * g / 2,
            i[1] * g / 2,
            i[2] * g / 2,
            b * S[0],
            b * S[1],
            b * S[2]
          ]), e(d, [
            i[0] * g / 2,
            i[1] * g / 2,
            i[2] * g / 2,
            -b * S[0],
            -b * S[1],
            -b * S[2]
          ]);
        }
      }
      const Z = /* @__PURE__ */ new Map(), $ = 1 / Math.sqrt(3), le = [
        [
          -$,
          -$
        ],
        [
          $,
          -$
        ],
        [
          $,
          $
        ],
        [
          -$,
          $
        ]
      ];
      for (const e of r.shells) {
        const a = r.shellLoads.get(e.id);
        if (!a) continue;
        const i = e.pts.map((d) => f.get(d));
        if (i.some((d) => d === void 0)) {
          r.errors.push(`areaload ${e.id}: algun nodo inexistente`);
          continue;
        }
        const c = i.map((d) => M[d]), u = [
          0,
          0,
          0,
          0
        ];
        for (const [d, F] of le) {
          const A = [
            0.25 * (1 - d) * (1 - F),
            0.25 * (1 + d) * (1 - F),
            0.25 * (1 + d) * (1 + F),
            0.25 * (1 - d) * (1 + F)
          ], L = [
            -0.25 * (1 - F),
            0.25 * (1 - F),
            0.25 * (1 + F),
            -0.25 * (1 + F)
          ], g = [
            -0.25 * (1 - d),
            -0.25 * (1 + d),
            0.25 * (1 + d),
            0.25 * (1 - d)
          ], v = [
            0,
            1,
            2
          ].map((C) => L.reduce((K, H, Q) => K + H * c[Q][C], 0)), b = [
            0,
            1,
            2
          ].map((C) => g.reduce((K, H, Q) => K + H * c[Q][C], 0)), S = [
            v[1] * b[2] - v[2] * b[1],
            v[2] * b[0] - v[0] * b[2],
            v[0] * b[1] - v[1] * b[0]
          ], W = Math.hypot(S[0], S[1], S[2]);
          for (let C = 0; C < 4; C++) u[C] += A[C] * a * W;
        }
        for (let d = 0; d < 4; d++) {
          const F = i[d], A = O.get(F) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          A[2] += u[d], O.set(F, A), Z.set(F, (Z.get(F) ?? 0) + u[d]);
        }
      }
      const J = [];
      for (const e of r.springs) {
        const a = f.get(e.node);
        a !== void 0 && J.push({
          node: a,
          dof: e.dof,
          k: e.k
        });
      }
      t.nodes.val = M, t.elements.val = I, t.nodeInputs.val = {
        supports: Y,
        loads: O,
        masses: oe,
        diaphragms: se,
        springs: J
      }, t.springs && (t.springs.val = J);
      const X = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map();
      for (const e of r.shells) {
        const a = z.get(e.id);
        if (a === void 0) continue;
        const i = r.shellLoads.get(e.id);
        i !== void 0 && ne.set(a, i);
        const c = r.shellAngles.get(e.id);
        c !== void 0 && ae.set(a, c);
        const u = r.shellModsDir.get(e.id);
        if (u) {
          te.set(a, u), X.set(a, (u[0] + u[1]) / 2), G.set(a, (u[3] + u[4]) / 2);
          continue;
        }
        const d = r.shellMods.get(e.id);
        d && (X.set(a, d[0]), G.set(a, d[1]));
      }
      if (t.elementInputs.val = {
        elasticities: s,
        shearModuli: w,
        areas: o,
        momentsOfInertiaY: n,
        momentsOfInertiaZ: l,
        torsionalConstants: p,
        densities: h,
        poissonsRatios: T,
        thicknesses: ee,
        membraneModifiers: X,
        bendingModifiers: G,
        shellModifiers: te,
        shellSurfaceLoads: ne,
        shellAngles: ae,
        cargaDeArea: Z,
        cantos: D,
        anchos: k,
        sectionShapes: j,
        localAngles: E,
        shearAreasY: R,
        shearAreasZ: B,
        momentReleases: x,
        plateFormulations: _,
        frameLoads: q,
        areaObjects: r.areaObjs.map((e) => ({
          nodes: e.pts.map((a) => f.get(a)).filter((a) => a !== void 0),
          cells: e.cells.map((a) => z.get(a)).filter((a) => a !== void 0),
          q: e.cells.map((a) => r.shellLoads.get(a)).find((a) => a !== void 0),
          ang: e.cells.map((a) => r.shellAngles.get(a)).find((a) => a !== void 0)
        })).filter((e) => e.nodes.length === 4 && e.cells.length > 0)
      }, r.doSolve && M.length && I.length) try {
        t.deformOutputs.val = de(M, I, t.nodeInputs.val, t.elementInputs.val, J.length ? J : void 0);
        try {
          t.analyzeOutputs.val = ce(M, I, t.elementInputs.val, t.deformOutputs.val);
        } catch (e) {
          console.warn("[CLI Modeler] analyze:", (e == null ? void 0 : e.message) ?? e);
        }
        console.log("[CLI Modeler] Solve OK \u2014", I.length, "elementos,", M.length, "nodos");
      } catch (e) {
        r.errors.push(`solve fall\xF3: ${e.message}`);
      }
      if (t.objects3D.val = [], r.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const e of r.errors) console.warn("  -", e);
      }
      window.__hekatanCliErrors = r.errors;
      let P = 0, ie = 0;
      const U = t.deformOutputs.val;
      if ((_a = U == null ? void 0 : U.deformations) == null ? void 0 : _a.size) for (const [, e] of U.deformations) Math.abs(e[2]) > Math.abs(P) && (P = e[2]);
      if ((_b = U == null ? void 0 : U.reactions) == null ? void 0 : _b.size) for (const [, e] of U.reactions) ie += e[2] || 0;
      window.__hekatanCliStats = {
        nodes: M.length,
        frames: r.frames.length,
        shells: r.shells.length,
        supports: Y.size,
        loads: O.size,
        springs: J.length,
        solved: r.doSolve,
        errors: r.errors.length,
        maxUzMm: +(P * 1e3).toFixed(3),
        sumRz: +ie.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  ue as c,
  pe as p
};
