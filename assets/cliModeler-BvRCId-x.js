import { c as $e, a as De } from "./cadSections-DVtTZU6U.js";
import { h as ze, a as Oe, __tla as __tla_0 } from "./h8-B8y-PzF9.js";
import { a as Je } from "./analyze-BFwM3Jvn.js";
import { d as je, __tla as __tla_1 } from "./didacticCpp-DaEmtxPu.js";
let qe, We;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const ge = {
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
  function Ee(Q) {
    const o = Q.toLowerCase().trim();
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
    const k = [
      false,
      false,
      false,
      false,
      false,
      false
    ], c = o.split(/[\s,]+/).filter(Boolean);
    if (c.length > 1 && c.length <= 6 && c.every((x) => x === "0" || x === "1")) return c.forEach((x, J) => {
      k[J] = x === "1";
    }), k;
    for (const x of c) ge[x] !== void 0 && (k[ge[x]] = true);
    if (/^[01]+$/.test(o) && o.length <= 6) for (let x = 0; x < o.length; x++) k[x] = o[x] === "1";
    return k;
  }
  We = function(Q) {
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
      meshCross: true,
      solids: [],
      solidIncompatible: true,
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
    let k = null, c = 0, x = 0, J = 0;
    const w = Q.split(/\r?\n/);
    for (let D = 0; D < w.length; D++) {
      let I = w[D].trim();
      if (!I || I.startsWith("#") || I.startsWith("//")) continue;
      I = I.replace(/[;]+$/, "");
      const s = I.split(/\s+/), E = s[0].toLowerCase();
      if (E === "nodes" && s.length === 1) {
        k = "nodes";
        continue;
      }
      if ((E === "elements" || E === "frames") && s.length === 1) {
        k = "elements";
        continue;
      }
      if (E === "areas" && s.length === 1) {
        k = "areas";
        continue;
      }
      if (E === "supports" && s.length === 1) {
        k = "supports";
        continue;
      }
      if (E === "loads" && s.length === 1) {
        k = "loads";
        continue;
      }
      if (E === "springs" && s.length === 1) {
        k = "springs";
        continue;
      }
      if (k && /^[\-\d]/.test(s[0])) {
        const t = s.map(parseFloat);
        if (k === "nodes" && t.length >= 3) {
          c++, o.nodes.set(c, [
            t[0],
            t[1],
            t[2]
          ]);
          continue;
        }
        if (k === "elements" && t.length >= 2) {
          x++, o.frames.push({
            id: x,
            nI: t[0] + 1,
            nJ: t[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (k === "areas" && t.length >= 4) {
          J++, o.shells.push({
            id: J,
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
        if (k === "loads" && t.length >= 4) {
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
        if (k === "springs" && t.length >= 3) {
          o.springs.push({
            node: t[0],
            dof: t[1],
            k: t[2]
          });
          continue;
        }
      }
      if (k === "supports" && /^\d/.test(s[0])) {
        const t = parseInt(s[0], 10), n = s.slice(1).join(" ");
        o.supports.set(t, Ee(n));
        continue;
      }
      k && !/^[\-\d]/.test(s[0]) && (k = null);
      try {
        switch (E) {
          case "node":
          case "n": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2]), f = parseFloat(s[3]), m = parseFloat(s[4]);
            !isFinite(t) || !isFinite(n) || !isFinite(f) || !isFinite(m) ? o.errors.push(`L${D + 1}: node mal formado: ${I}`) : o.nodes.set(t, [
              n,
              f,
              m
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const t = parseInt(s[1], 10), n = parseInt(s[2], 10), f = parseInt(s[3], 10), m = parseFloat(s[4] ?? "25e6"), v = parseFloat(s[5] ?? "0.16"), C = parseFloat(s[6] ?? "0.001"), L = s[7] !== void 0 ? parseFloat(s[7]) : void 0, z = s[8] !== void 0 ? parseFloat(s[8]) : void 0, j = s[9] !== void 0 ? parseFloat(s[9]) : void 0, A = s[10] !== void 0 ? parseFloat(s[10]) : void 0, W = s[11] !== void 0 ? parseFloat(s[11]) : void 0, ee = s[12] !== void 0 ? parseFloat(s[12]) : void 0, T = s.indexOf("#"), _ = T >= 0 && s[T + 1] ? s[T + 1] : void 0;
            o.frames.push({
              id: t,
              nI: n,
              nJ: f,
              E: m,
              A: v,
              I: C,
              Iy: L,
              J: z,
              nu: j,
              rho: A,
              D: W,
              B: ee,
              sec: _
            });
            break;
          }
          case "cftc": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? ""), f = parseFloat(s[3] ?? ""), m = parseFloat(s[4] ?? "25e6"), v = parseFloat(s[5] ?? "0.2");
            isFinite(t) && n > 0 && f > 0 && f < n / 2 && m > 0 ? o.frameCftc.set(t, {
              D: n,
              t: f,
              Ec: m,
              nuC: isFinite(v) ? v : 0.2
            }) : o.errors.push(`cftc ${s[1]}: hace falta D t (m) y Ec (kN/m2), con t < D/2`);
            break;
          }
          case "cft": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? ""), f = parseFloat(s[3] ?? ""), m = parseFloat(s[4] ?? ""), v = parseFloat(s[5] ?? "25e6"), C = parseFloat(s[6] ?? "0.2");
            isFinite(t) && n > 0 && f > 0 && m > 0 && m < Math.min(n, f) / 2 && v > 0 ? o.frameCft.set(t, {
              b: n,
              h: f,
              t: m,
              Ec: v,
              nuC: isFinite(C) ? C : 0.2
            }) : o.errors.push(`cft ${s[1]}: hace falta b h t (m) y Ec (kN/m2), con t < min(b,h)/2`);
            break;
          }
          case "as":
          case "shearareas": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), f = parseFloat(s[3] ?? "0");
            isFinite(t) && isFinite(n) && isFinite(f) && o.frameShearAreas.set(t, [
              n,
              f
            ]);
            break;
          }
          case "release":
          case "rel": {
            const t = parseInt(s[1], 10), n = s.slice(2).map((m) => m.toLowerCase());
            if (!isFinite(t) || n.length === 0) {
              o.errors.push('release: se esperaba "release frameID <12 bits> | pin fix"');
              break;
            }
            const f = new Array(12).fill(false);
            if (n.length === 2 && n.every((m) => /^(pin|fix|libre|rigido)$/.test(m))) n.forEach((m, v) => {
              (m === "pin" || m === "libre") && (f[v * 6 + 4] = true, f[v * 6 + 5] = true);
            });
            else {
              const m = n.filter((v) => v === "0" || v === "1");
              if (m.length !== 12) {
                o.errors.push(`release ${t}: hacen falta 12 banderas (U1 U2 U3 R1 R2 R3 en I y en J), llegaron ${m.length}`);
                break;
              }
              for (let v = 0; v < 12; v++) f[v] = m[v] === "1";
            }
            f.some(Boolean) && o.frameReleases.set(t, f);
            break;
          }
          case "hex":
          case "solid":
          case "h8": {
            const t = parseInt(s[1], 10), n = s.slice(2, 10).map((f) => parseInt(f, 10));
            if (!isFinite(t) || n.length !== 8 || n.some((f) => !isFinite(f))) {
              o.errors.push(`hex ${s[1]}: hacen falta 8 nudos`);
              break;
            }
            o.solids.push({
              id: t,
              pts: n,
              E: parseFloat(s[10] ?? "25e6"),
              nu: parseFloat(s[11] ?? "0.2"),
              rho: parseFloat(s[12] ?? "2.45")
            });
            break;
          }
          case "incompatible": {
            const t = (s[1] ?? "1").toLowerCase();
            o.solidIncompatible = !(t === "0" || t === "no" || t === "off" || t === "false");
            break;
          }
          case "meshcross":
          case "meshatintersections": {
            const t = (s[1] ?? "1").toLowerCase();
            o.meshCross = !(t === "0" || t === "no" || t === "off" || t === "false");
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
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), f = parseFloat(s[3] ?? "0"), m = parseFloat(s[4] ?? "0");
            if (!isFinite(t) || !isFinite(n) || !isFinite(f)) {
              o.errors.push('endoffset: se esperaba "endoffset frameID offI offJ [rz]"');
              break;
            }
            o.frameEndOffsets.set(t, [
              n,
              f,
              isFinite(m) ? m : 0
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
            ], f = parseFloat(s[6] ?? "0.20"), m = parseFloat(s[7] ?? "25e6"), v = s[9] !== void 0 ? parseFloat(s[9]) : void 0, C = v !== void 0 && isFinite(v) ? v : void 0;
            if (o.shells.push({
              id: t,
              pts: n,
              t: f,
              E: m,
              rho: C
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
            let f;
            if (n === "thin" || n === "delgada" || n === "kirchhoff" || n === "1" ? f = 1 : (n === "thick" || n === "gruesa" || n === "mindlin" || n === "0") && (f = 0), f === void 0) {
              o.errors.push(`shelltype ${t}: se esperaba thin o thick`);
              break;
            }
            o.shellTypes.set(t, f);
            break;
          }
          case "shellmod": {
            const t = parseInt(s[1], 10);
            if (!isFinite(t)) break;
            const n = s.slice(2).map(parseFloat);
            if (n.length >= 8) o.shellModsDir.set(t, n.slice(0, 8).map((f) => isFinite(f) ? f : 1));
            else {
              const f = n[0], m = n[1];
              o.shellMods.set(t, [
                isFinite(f) ? f : 1,
                isFinite(m) ? m : 1
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
            const [n, f, m, v, C, L, z] = t, j = [];
            for (let A = L; A <= z; A++) j.push(A);
            o.areaObjs.push({
              id: n,
              pts: [
                f,
                m,
                v,
                C
              ],
              cells: j
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
            o.supports.set(t, Ee(n));
            break;
          }
          case "load":
          case "l": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), f = parseFloat(s[3] ?? "0"), m = parseFloat(s[4] ?? "0"), v = parseFloat(s[5] ?? "0"), C = parseFloat(s[6] ?? "0"), L = parseFloat(s[7] ?? "0");
            o.loads.set(t, [
              n,
              f,
              m,
              v,
              C,
              L
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), f = parseFloat(s[3] ?? "0"), m = parseFloat(s[4] ?? "0"), v = o.frameLoads.get(t) ?? [
              0,
              0,
              0
            ];
            o.frameLoads.set(t, [
              v[0] + n,
              v[1] + f,
              v[2] + m
            ]);
            break;
          }
          case "spring": {
            const t = parseInt(s[1], 10), n = (s[2] ?? "uz").toLowerCase(), f = ge[n] ?? 2, m = parseFloat(s[3] ?? "1000");
            o.springs.push({
              node: t,
              dof: f,
              k: m
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
            Number.isFinite(t) && Number.isFinite(n) ? o.masses.set(t, (o.masses.get(t) ?? 0) + n) : o.errors.push(`L${D + 1}: mass necesita <nudo> <toneladas>`);
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
            o.nodes.clear(), o.frames.length = 0, o.shells.length = 0, o.solids.length = 0, o.supports.clear(), o.loads.clear(), o.frameLoads.clear(), o.springs.length = 0, o.masses.clear(), o.diaphragms.clear();
            break;
          default:
            o.errors.push(`L${D + 1}: comando desconocido "${E}"`);
        }
      } catch (t) {
        o.errors.push(`L${D + 1}: error "${I}" \u2014 ${t.message}`);
      }
    }
    return o;
  };
  let Ne;
  Ne = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  qe = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "\u{1F9EA} Utilidades",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(Q, o) {
      var _a, _b;
      const k = window.__hekatanCliScript ?? Ne;
      window.__hekatanCliLastScript = k;
      const c = We(k), x = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), w = [], D = Array.from(c.nodes.keys()).sort((e, l) => e - l);
      for (const e of D) x.set(e, w.length), w.push(c.nodes.get(e));
      const I = [], s = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
      for (const e of c.frames) {
        const l = x.get(e.nI), i = x.get(e.nJ);
        if (l === void 0 || i === void 0) {
          const M = D.length ? `IDs disponibles: ${D.join(", ")}` : "ning\xFAn nodo definido", S = [];
          l === void 0 && S.push(e.nI), i === void 0 && S.push(e.nJ), c.errors.push(`frame ${e.id}: nodo(s) inexistente(s) [${S.join(", ")}] \u2014 ${M}`);
          continue;
        }
        const a = I.length;
        I.push([
          l,
          i
        ]);
        const F = e.nu ?? 0.2;
        s.set(a, e.E), E.set(a, e.E / (2 * (1 + F))), t.set(a, e.A), n.set(a, e.I), f.set(a, e.Iy ?? e.I), m.set(a, e.J ?? 0.14 * Math.pow(Math.sqrt(e.A), 4)), v.set(a, e.rho ?? 2.45), N.set(a, F), e.D !== void 0 && isFinite(e.D) && C.set(a, e.D), e.B !== void 0 && isFinite(e.B) && L.set(a, e.B);
        const p = c.frameAngles.get(e.id);
        p !== void 0 && isFinite(p) && j.set(a, p);
        const r = c.frameReleases.get(e.id);
        r && A.set(a, r);
        const d = c.frameEndOffsets.get(e.id);
        d && W.set(a, d);
        const u = c.frameLoads.get(e.id);
        u && T.set(a, u);
        const h = c.frameShearAreas.get(e.id);
        if (h && (Z.set(a, h[0]), _.set(a, h[1])), e.sec || e.D !== void 0 && e.B !== void 0) {
          const M = {
            type: "general"
          };
          e.sec && (M.name = e.sec), e.D !== void 0 && isFinite(e.D) && (M.h = e.D), e.B !== void 0 && isFinite(e.B) && (M.b = e.B), z.set(a, M);
        }
        const b = c.frameCftc.get(e.id);
        if (b) {
          const M = $e(b.D, b.t, e.E, F, b.Ec, b.nuC);
          t.set(a, M.A), f.set(a, M.Iz), n.set(a, M.Iy), m.set(a, M.J), Z.set(a, M.As2), _.set(a, M.As3), C.set(a, b.D), L.set(a, b.D), z.set(a, {
            type: "CFT",
            d: b.D,
            tw: b.t,
            fillE: b.Ec,
            name: e.sec ?? `CFTC ${Math.round(b.D * 1e3)}X${Math.round(b.t * 1e3)}`
          });
        }
        const g = c.frameCft.get(e.id);
        if (g) {
          const M = De(g.b, g.h, g.t, e.E, F, g.Ec, g.nuC);
          t.set(a, M.A), f.set(a, M.Iz), n.set(a, M.Iy), m.set(a, M.J), Z.set(a, M.As2), _.set(a, M.As3), C.set(a, g.h), L.set(a, g.b), z.set(a, {
            type: "CFT",
            b: g.b,
            h: g.h,
            tw: g.t,
            fillE: g.Ec,
            name: e.sec ?? `CFT ${Math.round(g.h * 1e3)}X${Math.round(g.b * 1e3)}X${Math.round(g.t * 1e3)}`
          });
        }
      }
      if (c.meshCross) {
        const e = (r, d) => r[0] * d[0] + r[1] * d[1] + r[2] * d[2], l = [
          s,
          E,
          t,
          n,
          f,
          m,
          v,
          N,
          C,
          L,
          j,
          _,
          Z,
          z,
          T
        ], i = (r, d) => {
          for (const u of l) u.has(r) && u.set(d, u.get(r));
        }, a = (r) => {
          for (let d = 0; d < w.length; d++) if (Math.hypot(w[d][0] - r[0], w[d][1] - r[1], w[d][2] - r[2]) < 1e-6) return d;
          return w.push([
            r[0],
            r[1],
            r[2]
          ]), w.length - 1;
        }, F = (r) => {
          const d = w[r[0]], u = w[r[1]];
          return [
            Math.min(d[0], u[0]),
            Math.min(d[1], u[1]),
            Math.min(d[2], u[2]),
            Math.max(d[0], u[0]),
            Math.max(d[1], u[1]),
            Math.max(d[2], u[2])
          ];
        };
        let p = 0;
        for (let r = 0; r < I.length; r++) {
          if (I[r].length !== 2) continue;
          const d = F(I[r]);
          for (let u = r + 1; u < I.length; u++) {
            if (I[u].length !== 2) continue;
            const [h, b] = I[r], [g, M] = I[u];
            if (h === g || h === M || b === g || b === M) continue;
            const S = F(I[u]);
            if (d[0] > S[3] + 1e-6 || S[0] > d[3] + 1e-6 || d[1] > S[4] + 1e-6 || S[1] > d[4] + 1e-6 || d[2] > S[5] + 1e-6 || S[2] > d[5] + 1e-6) continue;
            const y = w[h], q = w[b], $ = w[g], P = w[M], U = [
              q[0] - y[0],
              q[1] - y[1],
              q[2] - y[2]
            ], X = [
              P[0] - $[0],
              P[1] - $[1],
              P[2] - $[2]
            ], xe = [
              y[0] - $[0],
              y[1] - $[1],
              y[2] - $[2]
            ], de = e(U, U), te = e(U, X), fe = e(X, X), ke = e(U, xe), ye = e(X, xe), pe = de * fe - te * te;
            if (pe < 1e-10 * de * fe) continue;
            const V = (te * ye - fe * ke) / pe, K = (de * ye - te * ke) / pe;
            if (V < 1e-6 || V > 1 - 1e-6 || K < 1e-6 || K > 1 - 1e-6) continue;
            const oe = [
              y[0] + V * U[0],
              y[1] + V * U[1],
              y[2] + V * U[2]
            ], he = [
              $[0] + K * X[0],
              $[1] + K * X[1],
              $[2] + K * X[2]
            ];
            if (Math.hypot(oe[0] - he[0], oe[1] - he[1], oe[2] - he[2]) > 1e-6) continue;
            const Ce = a(oe);
            for (const Y of [
              r,
              u
            ]) {
              const [Ae, Se] = I[Y], me = I.length;
              I[Y] = [
                Ae,
                Ce
              ], I.push([
                Ce,
                Se
              ]), i(Y, me);
              const ue = A.get(Y);
              ue && (A.set(Y, [
                ...ue.slice(0, 6),
                ...Array(6).fill(false)
              ]), A.set(me, [
                ...Array(6).fill(false),
                ...ue.slice(6)
              ]));
              const H = W.get(Y);
              H && (W.set(Y, [
                H[0],
                0,
                H[2]
              ]), W.set(me, [
                0,
                H[1],
                H[2]
              ]));
            }
            p++;
          }
        }
        p > 0 && console.log(`[CLI Modeler] ${p} cruces de barras partidos con nudo (como ETABS; meshcross 0 lo apaga)`);
      }
      for (const e of c.shells) {
        const l = e.pts.map((F) => x.get(F));
        if (l.some((F) => F === void 0)) {
          c.errors.push(`shell ${e.id}: algun nodo inexistente`);
          continue;
        }
        const i = I.length;
        J.set(e.id, i), I.push(l), s.set(i, e.E), E.set(i, e.E / (2 * 1.2)), ne.set(i, e.t), v.set(i, e.rho ?? 2.45), N.set(i, 0.2);
        const a = c.shellTypes.get(e.id);
        a !== void 0 && ee.set(i, a);
      }
      const ae = /* @__PURE__ */ new Map();
      for (const [e, l] of c.supports.entries()) {
        const i = x.get(e);
        i !== void 0 && ae.set(i, l);
      }
      const O = /* @__PURE__ */ new Map();
      for (const [e, l] of c.loads.entries()) {
        const i = x.get(e);
        i !== void 0 && O.set(i, [
          ...l
        ]);
      }
      const Me = /* @__PURE__ */ new Map();
      for (const [e, l] of c.diaphragms.entries()) {
        const i = x.get(e);
        i !== void 0 && Me.set(i, l);
      }
      const Fe = /* @__PURE__ */ new Map();
      for (const [e, l] of c.masses.entries()) {
        const i = x.get(e);
        i !== void 0 && Fe.set(i, l);
      }
      if (c.frameLoads.size) {
        const e = (l, i) => {
          const a = O.get(l) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          O.set(l, [
            a[0] + i[0],
            a[1] + i[1],
            a[2] + i[2],
            a[3] + i[3],
            a[4] + i[4],
            a[5] + i[5]
          ]);
        };
        for (const [l, i] of c.frameLoads.entries()) {
          const a = c.frames.find((S) => S.id === l);
          if (!a) {
            c.errors.push(`frameload ${l}: no existe esa barra`);
            continue;
          }
          const F = x.get(a.nI), p = x.get(a.nJ);
          if (F === void 0 || p === void 0) continue;
          const r = w[F], d = w[p], u = [
            d[0] - r[0],
            d[1] - r[1],
            d[2] - r[2]
          ], h = Math.hypot(u[0], u[1], u[2]);
          if (h < 1e-9) continue;
          const b = [
            u[0] / h,
            u[1] / h,
            u[2] / h
          ], g = h * h / 12, M = [
            b[1] * i[2] - b[2] * i[1],
            b[2] * i[0] - b[0] * i[2],
            b[0] * i[1] - b[1] * i[0]
          ];
          e(F, [
            i[0] * h / 2,
            i[1] * h / 2,
            i[2] * h / 2,
            g * M[0],
            g * M[1],
            g * M[2]
          ]), e(p, [
            i[0] * h / 2,
            i[1] * h / 2,
            i[2] * h / 2,
            -g * M[0],
            -g * M[1],
            -g * M[2]
          ]);
        }
      }
      const ie = /* @__PURE__ */ new Map(), R = 1 / Math.sqrt(3), Le = [
        [
          -R,
          -R
        ],
        [
          R,
          -R
        ],
        [
          R,
          R
        ],
        [
          -R,
          R
        ]
      ];
      for (const e of c.shells) {
        const l = c.shellLoads.get(e.id);
        if (!l) continue;
        const i = e.pts.map((p) => x.get(p));
        if (i.some((p) => p === void 0)) {
          c.errors.push(`areaload ${e.id}: algun nodo inexistente`);
          continue;
        }
        const a = i.map((p) => w[p]), F = [
          0,
          0,
          0,
          0
        ];
        for (const [p, r] of Le) {
          const d = [
            0.25 * (1 - p) * (1 - r),
            0.25 * (1 + p) * (1 - r),
            0.25 * (1 + p) * (1 + r),
            0.25 * (1 - p) * (1 + r)
          ], u = [
            -0.25 * (1 - r),
            0.25 * (1 - r),
            0.25 * (1 + r),
            -0.25 * (1 + r)
          ], h = [
            -0.25 * (1 - p),
            -0.25 * (1 + p),
            0.25 * (1 + p),
            0.25 * (1 - p)
          ], b = [
            0,
            1,
            2
          ].map((y) => u.reduce((q, $, P) => q + $ * a[P][y], 0)), g = [
            0,
            1,
            2
          ].map((y) => h.reduce((q, $, P) => q + $ * a[P][y], 0)), M = [
            b[1] * g[2] - b[2] * g[1],
            b[2] * g[0] - b[0] * g[2],
            b[0] * g[1] - b[1] * g[0]
          ], S = Math.hypot(M[0], M[1], M[2]);
          for (let y = 0; y < 4; y++) F[y] += d[y] * l * S;
        }
        for (let p = 0; p < 4; p++) {
          const r = i[p], d = O.get(r) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          d[2] += F[p], O.set(r, d), ie.set(r, (ie.get(r) ?? 0) + F[p]);
        }
      }
      if (c.selfWeight) {
        const l = (i, a) => {
          const F = O.get(i) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          F[2] += a, O.set(i, F);
        };
        I.forEach((i, a) => {
          const F = v.get(a) ?? 0;
          if (F) {
            if (i.length === 2) {
              const p = t.get(a) ?? 0, r = w[i[0]], d = w[i[1]], u = [
                d[0] - r[0],
                d[1] - r[1],
                d[2] - r[2]
              ];
              let h = Math.hypot(u[0], u[1], u[2]);
              const b = W.get(a);
              if (b) {
                const M = Math.hypot(u[0], u[1]);
                M > 1e-9 && Math.abs(Math.atan2(Math.abs(u[2]), M)) * 180 / Math.PI < 20 && (h = Math.max(h - b[0] - b[1], 0));
              }
              const g = p * h * F * 9.80665 * c.selfWeight;
              l(i[0], -g / 2), l(i[1], -g / 2);
            } else if (i.length === 4) {
              const p = ne.get(a) ?? 0, r = i.map((h) => w[h]);
              let d = 0;
              for (let h = 1; h < 3; h++) {
                const b = [
                  r[h][0] - r[0][0],
                  r[h][1] - r[0][1],
                  r[h][2] - r[0][2]
                ], g = [
                  r[h + 1][0] - r[0][0],
                  r[h + 1][1] - r[0][1],
                  r[h + 1][2] - r[0][2]
                ], M = [
                  b[1] * g[2] - b[2] * g[1],
                  b[2] * g[0] - b[0] * g[2],
                  b[0] * g[1] - b[1] * g[0]
                ];
                d += Math.hypot(M[0], M[1], M[2]) / 2;
              }
              const u = d * p * F * 9.80665 * c.selfWeight;
              for (const h of i) l(h, -u / 4);
            }
          }
        });
      }
      const G = [];
      for (const e of c.springs) {
        const l = x.get(e.node);
        l !== void 0 && G.push({
          node: l,
          dof: e.dof,
          k: e.k
        });
      }
      const B = [];
      for (const e of c.solids) {
        const l = e.pts.map((a) => x.get(a));
        if (l.some((a) => a === void 0)) {
          c.errors.push(`hex ${e.id}: algun nodo inexistente`);
          continue;
        }
        const i = I.length;
        I.push(l), s.set(i, e.E), N.set(i, e.nu), E.set(i, e.E / (2 * (1 + e.nu))), v.set(i, e.rho), B.push(i);
      }
      o.nodes.val = w, o.elements.val = I, o.nodeInputs.val = {
        supports: ae,
        loads: O,
        masses: Fe,
        diaphragms: Me,
        springs: G
      }, o.springs && (o.springs.val = G);
      const re = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
      for (const e of c.shells) {
        const l = J.get(e.id);
        if (l === void 0) continue;
        const i = c.shellLoads.get(e.id);
        i !== void 0 && Ie.set(l, i);
        const a = c.shellAngles.get(e.id);
        a !== void 0 && ve.set(l, a);
        const F = c.shellModsDir.get(e.id);
        if (F) {
          be.set(l, F), re.set(l, (F[0] + F[1]) / 2), le.set(l, (F[3] + F[4]) / 2);
          continue;
        }
        const p = c.shellMods.get(e.id);
        p && (re.set(l, p[0]), le.set(l, p[1]));
      }
      if (o.elementInputs.val = {
        elasticities: s,
        shearModuli: E,
        areas: t,
        momentsOfInertiaY: n,
        momentsOfInertiaZ: f,
        torsionalConstants: m,
        densities: v,
        poissonsRatios: N,
        thicknesses: ne,
        membraneModifiers: re,
        bendingModifiers: le,
        shellModifiers: be,
        shellSurfaceLoads: Ie,
        shellAngles: ve,
        cargaDeArea: ie,
        cantos: C,
        anchos: L,
        sectionShapes: z,
        localAngles: j,
        shearAreasY: _,
        shearAreasZ: Z,
        momentReleases: A,
        endOffsets: W,
        plateFormulations: ee,
        frameLoads: T,
        meshAtIntersections: c.meshCross,
        solidIncompatible: c.solidIncompatible,
        selfWeight: c.selfWeight,
        etabsWallJoint: c.etabsWallJoint,
        areaObjects: c.areaObjs.map((e) => ({
          nodes: e.pts.map((l) => x.get(l)).filter((l) => l !== void 0),
          cells: e.cells.map((l) => J.get(l)).filter((l) => l !== void 0),
          q: e.cells.map((l) => c.shellLoads.get(l)).find((l) => l !== void 0),
          ang: e.cells.map((l) => c.shellAngles.get(l)).find((l) => l !== void 0)
        })).filter((e) => e.nodes.length === 4 && e.cells.length > 0)
      }, c.doSolve && B.length > 0 && B.length === I.length) try {
        const e = s.get(B[0]) ?? 25e6, l = N.get(B[0]) ?? 0.2;
        B.some((r) => Math.abs((s.get(r) ?? e) - e) > 1e-9 * e || Math.abs((N.get(r) ?? l) - l) > 1e-12) && c.errors.push("hex: hex8Solve lleva UN material; los solidos tienen E o nu distintos y se usa el del primero");
        const i = /* @__PURE__ */ new Map();
        for (const [r, d] of o.nodeInputs.val.supports ?? []) i.set(r, [
          !!d[0],
          !!d[1],
          !!d[2]
        ]);
        const a = /* @__PURE__ */ new Map();
        for (const [r, d] of o.nodeInputs.val.loads ?? []) a.set(r, [
          d[0] ?? 0,
          d[1] ?? 0,
          d[2] ?? 0
        ]);
        const F = ze({
          nodes: w,
          elements: I,
          E: e,
          nu: l,
          supports: i,
          loads: a,
          incompatible: c.solidIncompatible
        }), p = /* @__PURE__ */ new Map();
        F.displacements.forEach(([r, d, u], h) => p.set(h, [
          r,
          d,
          u,
          0,
          0,
          0
        ])), o.deformOutputs.val = {
          deformations: p,
          reactions: /* @__PURE__ */ new Map()
        }, o.analyzeOutputs.val = {
          solidStress: F.stressPerElement,
          solidVonMises: F.vonMisesPerElement
        }, console.log(`[CLI Modeler] Solve OK \u2014 ${I.length} solidos H8, ${w.length} nodos (${F.elapsedMs.toFixed(0)} ms)`);
      } catch (e) {
        c.errors.push(`hex8Solve: ${(e == null ? void 0 : e.message) ?? e}`);
      }
      else if (c.doSolve && w.length && I.length) try {
        o.deformOutputs.val = je(w, I, o.nodeInputs.val, o.elementInputs.val, G.length ? G : void 0);
        try {
          o.analyzeOutputs.val = Je(w, I, o.elementInputs.val, o.deformOutputs.val);
        } catch (e) {
          console.warn("[CLI Modeler] analyze:", (e == null ? void 0 : e.message) ?? e);
        }
        if (B.length > 0) try {
          const e = o.deformOutputs.val.deformations, l = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
          for (const a of B) {
            const F = I[a], p = F.map((u) => w[u]), r = F.flatMap((u) => {
              const h = e.get(u) ?? [
                0,
                0,
                0
              ];
              return [
                h[0],
                h[1],
                h[2]
              ];
            }), d = Oe(p, s.get(a) ?? 25e6, N.get(a) ?? 0.2, r, c.solidIncompatible);
            l.set(a, d.stress), i.set(a, d.vonMises);
          }
          o.analyzeOutputs.val = {
            ...o.analyzeOutputs.val ?? {},
            solidStress: l,
            solidVonMises: i
          };
        } catch (e) {
          console.warn("[CLI Modeler] tensiones de solidos:", (e == null ? void 0 : e.message) ?? e);
        }
        console.log("[CLI Modeler] Solve OK \u2014", I.length, "elementos,", w.length, "nodos");
      } catch (e) {
        c.errors.push(`solve fall\xF3: ${e.message}`);
      }
      if (o.objects3D.val = [], c.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const e of c.errors) console.warn("  -", e);
      }
      window.__hekatanCliErrors = c.errors;
      let ce = 0, we = 0;
      const se = o.deformOutputs.val;
      if ((_a = se == null ? void 0 : se.deformations) == null ? void 0 : _a.size) for (const [, e] of se.deformations) Math.abs(e[2]) > Math.abs(ce) && (ce = e[2]);
      if ((_b = se == null ? void 0 : se.reactions) == null ? void 0 : _b.size) for (const [, e] of se.reactions) we += e[2] || 0;
      window.__hekatanCliStats = {
        nodes: w.length,
        frames: c.frames.length,
        shells: c.shells.length,
        supports: ae.size,
        loads: O.size,
        springs: G.length,
        solved: c.doSolve,
        errors: c.errors.length,
        maxUzMm: +(ce * 1e3).toFixed(3),
        sumRz: +we.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  qe as c,
  We as p
};
