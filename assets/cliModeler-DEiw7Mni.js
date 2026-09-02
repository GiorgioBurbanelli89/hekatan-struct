import { a as de } from "./analyze-BFwM3Jvn.js";
import { d as fe, __tla as __tla_0 } from "./didacticCpp-tPsbfU7x.js";
let ue, pe;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ee = {
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
  function le(N) {
    const o = N.toLowerCase().trim();
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
    const M = [
      false,
      false,
      false,
      false,
      false,
      false
    ], r = o.split(/[\s,]+/).filter(Boolean);
    if (r.length > 1 && r.length <= 6 && r.every((g) => g === "0" || g === "1")) return r.forEach((g, C) => {
      M[C] = g === "1";
    }), M;
    for (const g of r) ee[g] !== void 0 && (M[ee[g]] = true);
    if (/^[01]+$/.test(o) && o.length <= 6) for (let g = 0; g < o.length; g++) M[g] = o[g] === "1";
    return M;
  }
  pe = function(N) {
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
    let M = null, r = 0, g = 0, C = 0;
    const k = N.split(/\r?\n/);
    for (let z = 0; z < k.length; z++) {
      let b = k[z].trim();
      if (!b || b.startsWith("#") || b.startsWith("//")) continue;
      b = b.replace(/[;]+$/, "");
      const s = b.split(/\s+/), y = s[0].toLowerCase();
      if (y === "nodes" && s.length === 1) {
        M = "nodes";
        continue;
      }
      if ((y === "elements" || y === "frames") && s.length === 1) {
        M = "elements";
        continue;
      }
      if (y === "areas" && s.length === 1) {
        M = "areas";
        continue;
      }
      if (y === "supports" && s.length === 1) {
        M = "supports";
        continue;
      }
      if (y === "loads" && s.length === 1) {
        M = "loads";
        continue;
      }
      if (y === "springs" && s.length === 1) {
        M = "springs";
        continue;
      }
      if (M && /^[\-\d]/.test(s[0])) {
        const t = s.map(parseFloat);
        if (M === "nodes" && t.length >= 3) {
          r++, o.nodes.set(r, [
            t[0],
            t[1],
            t[2]
          ]);
          continue;
        }
        if (M === "elements" && t.length >= 2) {
          g++, o.frames.push({
            id: g,
            nI: t[0] + 1,
            nJ: t[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (M === "areas" && t.length >= 4) {
          C++, o.shells.push({
            id: C,
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
        if (M === "loads" && t.length >= 4) {
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
        if (M === "springs" && t.length >= 3) {
          o.springs.push({
            node: t[0],
            dof: t[1],
            k: t[2]
          });
          continue;
        }
      }
      if (M === "supports" && /^\d/.test(s[0])) {
        const t = parseInt(s[0], 10), n = s.slice(1).join(" ");
        o.supports.set(t, le(n));
        continue;
      }
      M && !/^[\-\d]/.test(s[0]) && (M = null);
      try {
        switch (y) {
          case "node":
          case "n": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2]), c = parseFloat(s[3]), h = parseFloat(s[4]);
            !isFinite(t) || !isFinite(n) || !isFinite(c) || !isFinite(h) ? o.errors.push(`L${z + 1}: node mal formado: ${b}`) : o.nodes.set(t, [
              n,
              c,
              h
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const t = parseInt(s[1], 10), n = parseInt(s[2], 10), c = parseInt(s[3], 10), h = parseFloat(s[4] ?? "25e6"), u = parseFloat(s[5] ?? "0.16"), D = parseFloat(s[6] ?? "0.001"), L = s[7] !== void 0 ? parseFloat(s[7]) : void 0, J = s[8] !== void 0 ? parseFloat(s[8]) : void 0, O = s[9] !== void 0 ? parseFloat(s[9]) : void 0, A = s[10] !== void 0 ? parseFloat(s[10]) : void 0, R = s[11] !== void 0 ? parseFloat(s[11]) : void 0, _ = s[12] !== void 0 ? parseFloat(s[12]) : void 0, j = s.indexOf("#"), q = j >= 0 && s[j + 1] ? s[j + 1] : void 0;
            o.frames.push({
              id: t,
              nI: n,
              nJ: c,
              E: h,
              A: u,
              I: D,
              Iy: L,
              J,
              nu: O,
              rho: A,
              D: R,
              B: _,
              sec: q
            });
            break;
          }
          case "as":
          case "shearareas": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), c = parseFloat(s[3] ?? "0");
            isFinite(t) && isFinite(n) && isFinite(c) && o.frameShearAreas.set(t, [
              n,
              c
            ]);
            break;
          }
          case "release":
          case "rel": {
            const t = parseInt(s[1], 10), n = s.slice(2).map((h) => h.toLowerCase());
            if (!isFinite(t) || n.length === 0) {
              o.errors.push('release: se esperaba "release frameID <12 bits> | pin fix"');
              break;
            }
            const c = new Array(12).fill(false);
            if (n.length === 2 && n.every((h) => /^(pin|fix|libre|rigido)$/.test(h))) n.forEach((h, u) => {
              (h === "pin" || h === "libre") && (c[u * 6 + 4] = true, c[u * 6 + 5] = true);
            });
            else {
              const h = n.filter((u) => u === "0" || u === "1");
              if (h.length !== 12) {
                o.errors.push(`release ${t}: hacen falta 12 banderas (U1 U2 U3 R1 R2 R3 en I y en J), llegaron ${h.length}`);
                break;
              }
              for (let u = 0; u < 12; u++) c[u] = h[u] === "1";
            }
            c.some(Boolean) && o.frameReleases.set(t, c);
            break;
          }
          case "etabsjoint":
          case "etabswalljoint": {
            const t = (s[1] ?? "1").toLowerCase();
            o.etabsWallJoint = !(t === "0" || t === "no" || t === "off" || t === "false");
            break;
          }
          case "selfweight":
          case "peso":
          case "sw": {
            const t = parseFloat(s[1] ?? "1");
            o.selfWeight = isFinite(t) ? t : 1;
            break;
          }
          case "endoffset":
          case "offset":
          case "lengthoff": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), c = parseFloat(s[3] ?? "0"), h = parseFloat(s[4] ?? "0");
            if (!isFinite(t) || !isFinite(n) || !isFinite(c)) {
              o.errors.push('endoffset: se esperaba "endoffset frameID offI offJ [rz]"');
              break;
            }
            o.frameEndOffsets.set(t, [
              n,
              c,
              isFinite(h) ? h : 0
            ]);
            break;
          }
          case "ang":
          case "localaxis": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0");
            isFinite(t) && isFinite(n) && o.frameAngles.set(t, n);
            break;
          }
          case "shell":
          case "plate":
          case "s": {
            const t = parseInt(s[1], 10), n = [
              parseInt(s[2], 10),
              parseInt(s[3], 10),
              parseInt(s[4], 10),
              parseInt(s[5], 10)
            ], c = parseFloat(s[6] ?? "0.20"), h = parseFloat(s[7] ?? "25e6"), u = s[9] !== void 0 ? parseFloat(s[9]) : void 0, D = u !== void 0 && isFinite(u) ? u : void 0;
            if (o.shells.push({
              id: t,
              pts: n,
              t: c,
              E: h,
              rho: D
            }), s[8] !== void 0) {
              const L = parseFloat(s[8]);
              isFinite(L) && L !== 0 && o.shellLoads.set(t, L);
            }
            break;
          }
          case "shelltype":
          case "plateform": {
            const t = parseInt(s[1], 10), n = (s[2] ?? "").toLowerCase();
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
            const t = parseInt(s[1], 10);
            if (!isFinite(t)) break;
            const n = s.slice(2).map(parseFloat);
            if (n.length >= 8) o.shellModsDir.set(t, n.slice(0, 8).map((c) => isFinite(c) ? c : 1));
            else {
              const c = n[0], h = n[1];
              o.shellMods.set(t, [
                isFinite(c) ? c : 1,
                isFinite(h) ? h : 1
              ]);
            }
            break;
          }
          case "areaobj": {
            const t = s.slice(1).map((A) => parseInt(A, 10));
            if (t.length < 7 || t.some((A) => !isFinite(A))) {
              o.errors.push('areaobj: se esperaba "areaobj ID n1 n2 n3 n4 desdeShell hastaShell"');
              break;
            }
            const [n, c, h, u, D, L, J] = t, O = [];
            for (let A = L; A <= J; A++) O.push(A);
            o.areaObjs.push({
              id: n,
              pts: [
                c,
                h,
                u,
                D
              ],
              cells: O
            });
            break;
          }
          case "shellang": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2]);
            if (!isFinite(t) || !isFinite(n)) {
              o.errors.push('shellang: se esperaba "shellang shellID grados"');
              break;
            }
            o.shellAngles.set(t, n);
            break;
          }
          case "areaload":
          case "qarea": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2]);
            if (!isFinite(t) || !isFinite(n)) {
              o.errors.push('areaload: se esperaba "areaload shellID q"');
              break;
            }
            o.shellLoads.set(t, n);
            break;
          }
          case "support":
          case "fix": {
            const t = parseInt(s[1], 10), n = s.slice(2).join(" ");
            o.supports.set(t, le(n));
            break;
          }
          case "load":
          case "l": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), c = parseFloat(s[3] ?? "0"), h = parseFloat(s[4] ?? "0"), u = parseFloat(s[5] ?? "0"), D = parseFloat(s[6] ?? "0"), L = parseFloat(s[7] ?? "0");
            o.loads.set(t, [
              n,
              c,
              h,
              u,
              D,
              L
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), c = parseFloat(s[3] ?? "0"), h = parseFloat(s[4] ?? "0"), u = o.frameLoads.get(t) ?? [
              0,
              0,
              0
            ];
            o.frameLoads.set(t, [
              u[0] + n,
              u[1] + c,
              u[2] + h
            ]);
            break;
          }
          case "spring": {
            const t = parseInt(s[1], 10), n = (s[2] ?? "uz").toLowerCase(), c = ee[n] ?? 2, h = parseFloat(s[3] ?? "1000");
            o.springs.push({
              node: t,
              dof: c,
              k: h
            });
            break;
          }
          case "diaph":
          case "diaphragm": {
            const t = parseInt(s[1], 10), n = parseInt(s[2] ?? "1", 10);
            isFinite(t) && isFinite(n) && n > 0 && o.diaphragms.set(t, n);
            break;
          }
          case "mass": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0");
            Number.isFinite(t) && Number.isFinite(n) ? o.masses.set(t, (o.masses.get(t) ?? 0) + n) : o.errors.push(`L${z + 1}: mass necesita <nudo> <toneladas>`);
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
            o.errors.push(`L${z + 1}: comando desconocido "${y}"`);
        }
      } catch (t) {
        o.errors.push(`L${z + 1}: error "${b}" \u2014 ${t.message}`);
      }
    }
    return o;
  };
  let he;
  he = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
    build(N, o) {
      var _a, _b;
      const M = window.__hekatanCliScript ?? he;
      window.__hekatanCliLastScript = M;
      const r = pe(M), g = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), k = [], z = Array.from(r.nodes.keys()).sort((e, i) => e - i);
      for (const e of z) g.set(e, k.length), k.push(r.nodes.get(e));
      const b = [], s = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), q = /* @__PURE__ */ new Map(), se = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
      for (const e of r.frames) {
        const i = g.get(e.nI), a = g.get(e.nJ);
        if (i === void 0 || a === void 0) {
          const m = z.length ? `IDs disponibles: ${z.join(", ")}` : "ning\xFAn nodo definido", I = [];
          i === void 0 && I.push(e.nI), a === void 0 && I.push(e.nJ), r.errors.push(`frame ${e.id}: nodo(s) inexistente(s) [${I.join(", ")}] \u2014 ${m}`);
          continue;
        }
        const l = b.length;
        b.push([
          i,
          a
        ]);
        const F = e.nu ?? 0.2;
        s.set(l, e.E), y.set(l, e.E / (2 * (1 + F))), t.set(l, e.A), n.set(l, e.I), c.set(l, e.Iy ?? e.I), h.set(l, e.J ?? 0.14 * Math.pow(Math.sqrt(e.A), 4)), u.set(l, e.rho ?? 2.45), T.set(l, F), e.D !== void 0 && isFinite(e.D) && D.set(l, e.D), e.B !== void 0 && isFinite(e.B) && L.set(l, e.B);
        const f = r.frameAngles.get(e.id);
        f !== void 0 && isFinite(f) && O.set(l, f);
        const d = r.frameReleases.get(e.id);
        d && A.set(l, d);
        const w = r.frameEndOffsets.get(e.id);
        w && R.set(l, w);
        const v = r.frameLoads.get(e.id);
        v && j.set(l, v);
        const p = r.frameShearAreas.get(e.id);
        if (p && (se.set(l, p[0]), q.set(l, p[1])), e.sec || e.D !== void 0 && e.B !== void 0) {
          const m = {
            type: "general"
          };
          e.sec && (m.name = e.sec), e.D !== void 0 && isFinite(e.D) && (m.h = e.D), e.B !== void 0 && isFinite(e.B) && (m.b = e.B), J.set(l, m);
        }
      }
      for (const e of r.shells) {
        const i = e.pts.map((F) => g.get(F));
        if (i.some((F) => F === void 0)) {
          r.errors.push(`shell ${e.id}: algun nodo inexistente`);
          continue;
        }
        const a = b.length;
        C.set(e.id, a), b.push(i), s.set(a, e.E), y.set(a, e.E / (2 * 1.2)), G.set(a, e.t), u.set(a, e.rho ?? 2.45), T.set(a, 0.2);
        const l = r.shellTypes.get(e.id);
        l !== void 0 && _.set(a, l);
      }
      const Y = /* @__PURE__ */ new Map();
      for (const [e, i] of r.supports.entries()) {
        const a = g.get(e);
        a !== void 0 && Y.set(a, i);
      }
      const S = /* @__PURE__ */ new Map();
      for (const [e, i] of r.loads.entries()) {
        const a = g.get(e);
        a !== void 0 && S.set(a, [
          ...i
        ]);
      }
      const te = /* @__PURE__ */ new Map();
      for (const [e, i] of r.diaphragms.entries()) {
        const a = g.get(e);
        a !== void 0 && te.set(a, i);
      }
      const oe = /* @__PURE__ */ new Map();
      for (const [e, i] of r.masses.entries()) {
        const a = g.get(e);
        a !== void 0 && oe.set(a, i);
      }
      if (r.frameLoads.size) {
        const e = (i, a) => {
          const l = S.get(i) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          S.set(i, [
            l[0] + a[0],
            l[1] + a[1],
            l[2] + a[2],
            l[3] + a[3],
            l[4] + a[4],
            l[5] + a[5]
          ]);
        };
        for (const [i, a] of r.frameLoads.entries()) {
          const l = r.frames.find((U) => U.id === i);
          if (!l) {
            r.errors.push(`frameload ${i}: no existe esa barra`);
            continue;
          }
          const F = g.get(l.nI), f = g.get(l.nJ);
          if (F === void 0 || f === void 0) continue;
          const d = k[F], w = k[f], v = [
            w[0] - d[0],
            w[1] - d[1],
            w[2] - d[2]
          ], p = Math.hypot(v[0], v[1], v[2]);
          if (p < 1e-9) continue;
          const m = [
            v[0] / p,
            v[1] / p,
            v[2] / p
          ], I = p * p / 12, x = [
            m[1] * a[2] - m[2] * a[1],
            m[2] * a[0] - m[0] * a[2],
            m[0] * a[1] - m[1] * a[0]
          ];
          e(F, [
            a[0] * p / 2,
            a[1] * p / 2,
            a[2] * p / 2,
            I * x[0],
            I * x[1],
            I * x[2]
          ]), e(f, [
            a[0] * p / 2,
            a[1] * p / 2,
            a[2] * p / 2,
            -I * x[0],
            -I * x[1],
            -I * x[2]
          ]);
        }
      }
      const Z = /* @__PURE__ */ new Map(), E = 1 / Math.sqrt(3), ce = [
        [
          -E,
          -E
        ],
        [
          E,
          -E
        ],
        [
          E,
          E
        ],
        [
          -E,
          E
        ]
      ];
      for (const e of r.shells) {
        const i = r.shellLoads.get(e.id);
        if (!i) continue;
        const a = e.pts.map((f) => g.get(f));
        if (a.some((f) => f === void 0)) {
          r.errors.push(`areaload ${e.id}: algun nodo inexistente`);
          continue;
        }
        const l = a.map((f) => k[f]), F = [
          0,
          0,
          0,
          0
        ];
        for (const [f, d] of ce) {
          const w = [
            0.25 * (1 - f) * (1 - d),
            0.25 * (1 + f) * (1 - d),
            0.25 * (1 + f) * (1 + d),
            0.25 * (1 - f) * (1 + d)
          ], v = [
            -0.25 * (1 - d),
            0.25 * (1 - d),
            0.25 * (1 + d),
            -0.25 * (1 + d)
          ], p = [
            -0.25 * (1 - f),
            -0.25 * (1 + f),
            0.25 * (1 + f),
            0.25 * (1 - f)
          ], m = [
            0,
            1,
            2
          ].map(($) => v.reduce((K, H, Q) => K + H * l[Q][$], 0)), I = [
            0,
            1,
            2
          ].map(($) => p.reduce((K, H, Q) => K + H * l[Q][$], 0)), x = [
            m[1] * I[2] - m[2] * I[1],
            m[2] * I[0] - m[0] * I[2],
            m[0] * I[1] - m[1] * I[0]
          ], U = Math.hypot(x[0], x[1], x[2]);
          for (let $ = 0; $ < 4; $++) F[$] += w[$] * i * U;
        }
        for (let f = 0; f < 4; f++) {
          const d = a[f], w = S.get(d) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          w[2] += F[f], S.set(d, w), Z.set(d, (Z.get(d) ?? 0) + F[f]);
        }
      }
      if (r.selfWeight) {
        const i = (a, l) => {
          const F = S.get(a) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += l, S.set(a, F);
        };
        b.forEach((a, l) => {
          const F = u.get(l) ?? 0;
          if (F) {
            if (a.length === 2) {
              const f = t.get(l) ?? 0, d = k[a[0]], w = k[a[1]], v = [
                w[0] - d[0],
                w[1] - d[1],
                w[2] - d[2]
              ];
              let p = Math.hypot(v[0], v[1], v[2]);
              const m = R.get(l);
              if (m) {
                const x = Math.hypot(v[0], v[1]);
                x > 1e-9 && Math.abs(Math.atan2(Math.abs(v[2]), x)) * 180 / Math.PI < 20 && (p = Math.max(p - m[0] - m[1], 0));
              }
              const I = f * p * F * 9.80665 * r.selfWeight;
              i(a[0], -I / 2), i(a[1], -I / 2);
            } else if (a.length === 4) {
              const f = G.get(l) ?? 0, d = a.map((p) => k[p]);
              let w = 0;
              for (let p = 1; p < 3; p++) {
                const m = [
                  d[p][0] - d[0][0],
                  d[p][1] - d[0][1],
                  d[p][2] - d[0][2]
                ], I = [
                  d[p + 1][0] - d[0][0],
                  d[p + 1][1] - d[0][1],
                  d[p + 1][2] - d[0][2]
                ], x = [
                  m[1] * I[2] - m[2] * I[1],
                  m[2] * I[0] - m[0] * I[2],
                  m[0] * I[1] - m[1] * I[0]
                ];
                w += Math.hypot(x[0], x[1], x[2]) / 2;
              }
              const v = w * f * F * 9.80665 * r.selfWeight;
              for (const p of a) i(p, -v / 4);
            }
          }
        });
      }
      const W = [];
      for (const e of r.springs) {
        const i = g.get(e.node);
        i !== void 0 && W.push({
          node: i,
          dof: e.dof,
          k: e.k
        });
      }
      o.nodes.val = k, o.elements.val = b, o.nodeInputs.val = {
        supports: Y,
        loads: S,
        masses: oe,
        diaphragms: te,
        springs: W
      }, o.springs && (o.springs.val = W);
      const P = /* @__PURE__ */ new Map(), X = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ie = /* @__PURE__ */ new Map();
      for (const e of r.shells) {
        const i = C.get(e.id);
        if (i === void 0) continue;
        const a = r.shellLoads.get(e.id);
        a !== void 0 && ae.set(i, a);
        const l = r.shellAngles.get(e.id);
        l !== void 0 && ie.set(i, l);
        const F = r.shellModsDir.get(e.id);
        if (F) {
          ne.set(i, F), P.set(i, (F[0] + F[1]) / 2), X.set(i, (F[3] + F[4]) / 2);
          continue;
        }
        const f = r.shellMods.get(e.id);
        f && (P.set(i, f[0]), X.set(i, f[1]));
      }
      if (o.elementInputs.val = {
        elasticities: s,
        shearModuli: y,
        areas: t,
        momentsOfInertiaY: n,
        momentsOfInertiaZ: c,
        torsionalConstants: h,
        densities: u,
        poissonsRatios: T,
        thicknesses: G,
        membraneModifiers: P,
        bendingModifiers: X,
        shellModifiers: ne,
        shellSurfaceLoads: ae,
        shellAngles: ie,
        cargaDeArea: Z,
        cantos: D,
        anchos: L,
        sectionShapes: J,
        localAngles: O,
        shearAreasY: q,
        shearAreasZ: se,
        momentReleases: A,
        endOffsets: R,
        plateFormulations: _,
        frameLoads: j,
        selfWeight: r.selfWeight,
        etabsWallJoint: r.etabsWallJoint,
        areaObjects: r.areaObjs.map((e) => ({
          nodes: e.pts.map((i) => g.get(i)).filter((i) => i !== void 0),
          cells: e.cells.map((i) => C.get(i)).filter((i) => i !== void 0),
          q: e.cells.map((i) => r.shellLoads.get(i)).find((i) => i !== void 0),
          ang: e.cells.map((i) => r.shellAngles.get(i)).find((i) => i !== void 0)
        })).filter((e) => e.nodes.length === 4 && e.cells.length > 0)
      }, r.doSolve && k.length && b.length) try {
        o.deformOutputs.val = fe(k, b, o.nodeInputs.val, o.elementInputs.val, W.length ? W : void 0);
        try {
          o.analyzeOutputs.val = de(k, b, o.elementInputs.val, o.deformOutputs.val);
        } catch (e) {
          console.warn("[CLI Modeler] analyze:", (e == null ? void 0 : e.message) ?? e);
        }
        console.log("[CLI Modeler] Solve OK \u2014", b.length, "elementos,", k.length, "nodos");
      } catch (e) {
        r.errors.push(`solve fall\xF3: ${e.message}`);
      }
      if (o.objects3D.val = [], r.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const e of r.errors) console.warn("  -", e);
      }
      window.__hekatanCliErrors = r.errors;
      let V = 0, re = 0;
      const B = o.deformOutputs.val;
      if ((_a = B == null ? void 0 : B.deformations) == null ? void 0 : _a.size) for (const [, e] of B.deformations) Math.abs(e[2]) > Math.abs(V) && (V = e[2]);
      if ((_b = B == null ? void 0 : B.reactions) == null ? void 0 : _b.size) for (const [, e] of B.reactions) re += e[2] || 0;
      window.__hekatanCliStats = {
        nodes: k.length,
        frames: r.frames.length,
        shells: r.shells.length,
        supports: Y.size,
        loads: S.size,
        springs: W.length,
        solved: r.doSolve,
        errors: r.errors.length,
        maxUzMm: +(V * 1e3).toFixed(3),
        sumRz: +re.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  ue as c,
  pe as p
};
