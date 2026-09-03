import { c as Se, a as De } from "./cadSections-DVtTZU6U.js";
import { h as ze, __tla as __tla_0 } from "./h8-DExkVgoV.js";
import { a as Oe } from "./analyze-BFwM3Jvn.js";
import { d as Je, __tla as __tla_1 } from "./didacticCpp-BfFs_eNG.js";
let _e, je;
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
    const x = [
      false,
      false,
      false,
      false,
      false,
      false
    ], l = o.split(/[\s,]+/).filter(Boolean);
    if (l.length > 1 && l.length <= 6 && l.every((k) => k === "0" || k === "1")) return l.forEach((k, J) => {
      x[J] = k === "1";
    }), x;
    for (const k of l) ge[k] !== void 0 && (x[ge[k]] = true);
    if (/^[01]+$/.test(o) && o.length <= 6) for (let k = 0; k < o.length; k++) x[k] = o[k] === "1";
    return x;
  }
  je = function(Q) {
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
    let x = null, l = 0, k = 0, J = 0;
    const w = Q.split(/\r?\n/);
    for (let D = 0; D < w.length; D++) {
      let v = w[D].trim();
      if (!v || v.startsWith("#") || v.startsWith("//")) continue;
      v = v.replace(/[;]+$/, "");
      const s = v.split(/\s+/), E = s[0].toLowerCase();
      if (E === "nodes" && s.length === 1) {
        x = "nodes";
        continue;
      }
      if ((E === "elements" || E === "frames") && s.length === 1) {
        x = "elements";
        continue;
      }
      if (E === "areas" && s.length === 1) {
        x = "areas";
        continue;
      }
      if (E === "supports" && s.length === 1) {
        x = "supports";
        continue;
      }
      if (E === "loads" && s.length === 1) {
        x = "loads";
        continue;
      }
      if (E === "springs" && s.length === 1) {
        x = "springs";
        continue;
      }
      if (x && /^[\-\d]/.test(s[0])) {
        const t = s.map(parseFloat);
        if (x === "nodes" && t.length >= 3) {
          l++, o.nodes.set(l, [
            t[0],
            t[1],
            t[2]
          ]);
          continue;
        }
        if (x === "elements" && t.length >= 2) {
          k++, o.frames.push({
            id: k,
            nI: t[0] + 1,
            nJ: t[1] + 1,
            E: 25e6,
            A: 0.16,
            I: 21e-4
          });
          continue;
        }
        if (x === "areas" && t.length >= 4) {
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
        if (x === "loads" && t.length >= 4) {
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
        if (x === "springs" && t.length >= 3) {
          o.springs.push({
            node: t[0],
            dof: t[1],
            k: t[2]
          });
          continue;
        }
      }
      if (x === "supports" && /^\d/.test(s[0])) {
        const t = parseInt(s[0], 10), n = s.slice(1).join(" ");
        o.supports.set(t, Ee(n));
        continue;
      }
      x && !/^[\-\d]/.test(s[0]) && (x = null);
      try {
        switch (E) {
          case "node":
          case "n": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2]), d = parseFloat(s[3]), p = parseFloat(s[4]);
            !isFinite(t) || !isFinite(n) || !isFinite(d) || !isFinite(p) ? o.errors.push(`L${D + 1}: node mal formado: ${v}`) : o.nodes.set(t, [
              n,
              d,
              p
            ]);
            break;
          }
          case "frame":
          case "beam":
          case "column":
          case "f": {
            const t = parseInt(s[1], 10), n = parseInt(s[2], 10), d = parseInt(s[3], 10), p = parseFloat(s[4] ?? "25e6"), I = parseFloat(s[5] ?? "0.16"), C = parseFloat(s[6] ?? "0.001"), L = s[7] !== void 0 ? parseFloat(s[7]) : void 0, z = s[8] !== void 0 ? parseFloat(s[8]) : void 0, j = s[9] !== void 0 ? parseFloat(s[9]) : void 0, A = s[10] !== void 0 ? parseFloat(s[10]) : void 0, W = s[11] !== void 0 ? parseFloat(s[11]) : void 0, ee = s[12] !== void 0 ? parseFloat(s[12]) : void 0, R = s.indexOf("#"), B = R >= 0 && s[R + 1] ? s[R + 1] : void 0;
            o.frames.push({
              id: t,
              nI: n,
              nJ: d,
              E: p,
              A: I,
              I: C,
              Iy: L,
              J: z,
              nu: j,
              rho: A,
              D: W,
              B: ee,
              sec: B
            });
            break;
          }
          case "cftc": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? ""), d = parseFloat(s[3] ?? ""), p = parseFloat(s[4] ?? "25e6"), I = parseFloat(s[5] ?? "0.2");
            isFinite(t) && n > 0 && d > 0 && d < n / 2 && p > 0 ? o.frameCftc.set(t, {
              D: n,
              t: d,
              Ec: p,
              nuC: isFinite(I) ? I : 0.2
            }) : o.errors.push(`cftc ${s[1]}: hace falta D t (m) y Ec (kN/m2), con t < D/2`);
            break;
          }
          case "cft": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? ""), d = parseFloat(s[3] ?? ""), p = parseFloat(s[4] ?? ""), I = parseFloat(s[5] ?? "25e6"), C = parseFloat(s[6] ?? "0.2");
            isFinite(t) && n > 0 && d > 0 && p > 0 && p < Math.min(n, d) / 2 && I > 0 ? o.frameCft.set(t, {
              b: n,
              h: d,
              t: p,
              Ec: I,
              nuC: isFinite(C) ? C : 0.2
            }) : o.errors.push(`cft ${s[1]}: hace falta b h t (m) y Ec (kN/m2), con t < min(b,h)/2`);
            break;
          }
          case "as":
          case "shearareas": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), d = parseFloat(s[3] ?? "0");
            isFinite(t) && isFinite(n) && isFinite(d) && o.frameShearAreas.set(t, [
              n,
              d
            ]);
            break;
          }
          case "release":
          case "rel": {
            const t = parseInt(s[1], 10), n = s.slice(2).map((p) => p.toLowerCase());
            if (!isFinite(t) || n.length === 0) {
              o.errors.push('release: se esperaba "release frameID <12 bits> | pin fix"');
              break;
            }
            const d = new Array(12).fill(false);
            if (n.length === 2 && n.every((p) => /^(pin|fix|libre|rigido)$/.test(p))) n.forEach((p, I) => {
              (p === "pin" || p === "libre") && (d[I * 6 + 4] = true, d[I * 6 + 5] = true);
            });
            else {
              const p = n.filter((I) => I === "0" || I === "1");
              if (p.length !== 12) {
                o.errors.push(`release ${t}: hacen falta 12 banderas (U1 U2 U3 R1 R2 R3 en I y en J), llegaron ${p.length}`);
                break;
              }
              for (let I = 0; I < 12; I++) d[I] = p[I] === "1";
            }
            d.some(Boolean) && o.frameReleases.set(t, d);
            break;
          }
          case "hex":
          case "solid":
          case "h8": {
            const t = parseInt(s[1], 10), n = s.slice(2, 10).map((d) => parseInt(d, 10));
            if (!isFinite(t) || n.length !== 8 || n.some((d) => !isFinite(d))) {
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
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), d = parseFloat(s[3] ?? "0"), p = parseFloat(s[4] ?? "0");
            if (!isFinite(t) || !isFinite(n) || !isFinite(d)) {
              o.errors.push('endoffset: se esperaba "endoffset frameID offI offJ [rz]"');
              break;
            }
            o.frameEndOffsets.set(t, [
              n,
              d,
              isFinite(p) ? p : 0
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
            ], d = parseFloat(s[6] ?? "0.20"), p = parseFloat(s[7] ?? "25e6"), I = s[9] !== void 0 ? parseFloat(s[9]) : void 0, C = I !== void 0 && isFinite(I) ? I : void 0;
            if (o.shells.push({
              id: t,
              pts: n,
              t: d,
              E: p,
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
            let d;
            if (n === "thin" || n === "delgada" || n === "kirchhoff" || n === "1" ? d = 1 : (n === "thick" || n === "gruesa" || n === "mindlin" || n === "0") && (d = 0), d === void 0) {
              o.errors.push(`shelltype ${t}: se esperaba thin o thick`);
              break;
            }
            o.shellTypes.set(t, d);
            break;
          }
          case "shellmod": {
            const t = parseInt(s[1], 10);
            if (!isFinite(t)) break;
            const n = s.slice(2).map(parseFloat);
            if (n.length >= 8) o.shellModsDir.set(t, n.slice(0, 8).map((d) => isFinite(d) ? d : 1));
            else {
              const d = n[0], p = n[1];
              o.shellMods.set(t, [
                isFinite(d) ? d : 1,
                isFinite(p) ? p : 1
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
            const [n, d, p, I, C, L, z] = t, j = [];
            for (let A = L; A <= z; A++) j.push(A);
            o.areaObjs.push({
              id: n,
              pts: [
                d,
                p,
                I,
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
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), d = parseFloat(s[3] ?? "0"), p = parseFloat(s[4] ?? "0"), I = parseFloat(s[5] ?? "0"), C = parseFloat(s[6] ?? "0"), L = parseFloat(s[7] ?? "0");
            o.loads.set(t, [
              n,
              d,
              p,
              I,
              C,
              L
            ]);
            break;
          }
          case "frameload":
          case "fl": {
            const t = parseInt(s[1], 10), n = parseFloat(s[2] ?? "0"), d = parseFloat(s[3] ?? "0"), p = parseFloat(s[4] ?? "0"), I = o.frameLoads.get(t) ?? [
              0,
              0,
              0
            ];
            o.frameLoads.set(t, [
              I[0] + n,
              I[1] + d,
              I[2] + p
            ]);
            break;
          }
          case "spring": {
            const t = parseInt(s[1], 10), n = (s[2] ?? "uz").toLowerCase(), d = ge[n] ?? 2, p = parseFloat(s[3] ?? "1000");
            o.springs.push({
              node: t,
              dof: d,
              k: p
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
        o.errors.push(`L${D + 1}: error "${v}" \u2014 ${t.message}`);
      }
    }
    return o;
  };
  let We;
  We = `# CLI Modeler \u2014 escrib\xED comandos para construir un modelo
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
  _e = {
    id: "cli-modeler",
    name: "CLI Modeler (comandos)",
    category: "\u{1F9EA} Utilidades",
    defaultShellResult: "none",
    availableShellResults: [],
    params: {},
    build(Q, o) {
      var _a, _b;
      const x = window.__hekatanCliScript ?? We;
      window.__hekatanCliLastScript = x;
      const l = je(x), k = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), w = [], D = Array.from(l.nodes.keys()).sort((e, c) => e - c);
      for (const e of D) k.set(e, w.length), w.push(l.nodes.get(e));
      const v = [], s = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), j = /* @__PURE__ */ new Map(), A = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Z = /* @__PURE__ */ new Map(), T = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
      for (const e of l.frames) {
        const c = k.get(e.nI), a = k.get(e.nJ);
        if (c === void 0 || a === void 0) {
          const u = D.length ? `IDs disponibles: ${D.join(", ")}` : "ning\xFAn nodo definido", $ = [];
          c === void 0 && $.push(e.nI), a === void 0 && $.push(e.nJ), l.errors.push(`frame ${e.id}: nodo(s) inexistente(s) [${$.join(", ")}] \u2014 ${u}`);
          continue;
        }
        const i = v.length;
        v.push([
          c,
          a
        ]);
        const b = e.nu ?? 0.2;
        s.set(i, e.E), E.set(i, e.E / (2 * (1 + b))), t.set(i, e.A), n.set(i, e.I), d.set(i, e.Iy ?? e.I), p.set(i, e.J ?? 0.14 * Math.pow(Math.sqrt(e.A), 4)), I.set(i, e.rho ?? 2.45), T.set(i, b), e.D !== void 0 && isFinite(e.D) && C.set(i, e.D), e.B !== void 0 && isFinite(e.B) && L.set(i, e.B);
        const h = l.frameAngles.get(e.id);
        h !== void 0 && isFinite(h) && j.set(i, h);
        const r = l.frameReleases.get(e.id);
        r && A.set(i, r);
        const f = l.frameEndOffsets.get(e.id);
        f && W.set(i, f);
        const M = l.frameLoads.get(e.id);
        M && R.set(i, M);
        const g = l.frameShearAreas.get(e.id);
        if (g && (Z.set(i, g[0]), B.set(i, g[1])), e.sec || e.D !== void 0 && e.B !== void 0) {
          const u = {
            type: "general"
          };
          e.sec && (u.name = e.sec), e.D !== void 0 && isFinite(e.D) && (u.h = e.D), e.B !== void 0 && isFinite(e.B) && (u.b = e.B), z.set(i, u);
        }
        const F = l.frameCftc.get(e.id);
        if (F) {
          const u = Se(F.D, F.t, e.E, b, F.Ec, F.nuC);
          t.set(i, u.A), d.set(i, u.Iz), n.set(i, u.Iy), p.set(i, u.J), Z.set(i, u.As2), B.set(i, u.As3), C.set(i, F.D), L.set(i, F.D), z.set(i, {
            type: "CFT",
            d: F.D,
            tw: F.t,
            fillE: F.Ec,
            name: e.sec ?? `CFTC ${Math.round(F.D * 1e3)}X${Math.round(F.t * 1e3)}`
          });
        }
        const m = l.frameCft.get(e.id);
        if (m) {
          const u = De(m.b, m.h, m.t, e.E, b, m.Ec, m.nuC);
          t.set(i, u.A), d.set(i, u.Iz), n.set(i, u.Iy), p.set(i, u.J), Z.set(i, u.As2), B.set(i, u.As3), C.set(i, m.h), L.set(i, m.b), z.set(i, {
            type: "CFT",
            b: m.b,
            h: m.h,
            tw: m.t,
            fillE: m.Ec,
            name: e.sec ?? `CFT ${Math.round(m.h * 1e3)}X${Math.round(m.b * 1e3)}X${Math.round(m.t * 1e3)}`
          });
        }
      }
      if (l.meshCross) {
        const e = (r, f) => r[0] * f[0] + r[1] * f[1] + r[2] * f[2], c = [
          s,
          E,
          t,
          n,
          d,
          p,
          I,
          T,
          C,
          L,
          j,
          B,
          Z,
          z,
          R
        ], a = (r, f) => {
          for (const M of c) M.has(r) && M.set(f, M.get(r));
        }, i = (r) => {
          for (let f = 0; f < w.length; f++) if (Math.hypot(w[f][0] - r[0], w[f][1] - r[1], w[f][2] - r[2]) < 1e-6) return f;
          return w.push([
            r[0],
            r[1],
            r[2]
          ]), w.length - 1;
        }, b = (r) => {
          const f = w[r[0]], M = w[r[1]];
          return [
            Math.min(f[0], M[0]),
            Math.min(f[1], M[1]),
            Math.min(f[2], M[2]),
            Math.max(f[0], M[0]),
            Math.max(f[1], M[1]),
            Math.max(f[2], M[2])
          ];
        };
        let h = 0;
        for (let r = 0; r < v.length; r++) {
          if (v[r].length !== 2) continue;
          const f = b(v[r]);
          for (let M = r + 1; M < v.length; M++) {
            if (v[M].length !== 2) continue;
            const [g, F] = v[r], [m, u] = v[M];
            if (g === m || g === u || F === m || F === u) continue;
            const $ = b(v[M]);
            if (f[0] > $[3] + 1e-6 || $[0] > f[3] + 1e-6 || f[1] > $[4] + 1e-6 || $[1] > f[4] + 1e-6 || f[2] > $[5] + 1e-6 || $[2] > f[5] + 1e-6) continue;
            const y = w[g], _ = w[F], S = w[m], q = w[u], P = [
              _[0] - y[0],
              _[1] - y[1],
              _[2] - y[2]
            ], U = [
              q[0] - S[0],
              q[1] - S[1],
              q[2] - S[2]
            ], ke = [
              y[0] - S[0],
              y[1] - S[1],
              y[2] - S[2]
            ], de = e(P, P), te = e(P, U), fe = e(U, U), xe = e(P, ke), ye = e(U, ke), pe = de * fe - te * te;
            if (pe < 1e-10 * de * fe) continue;
            const V = (te * ye - fe * xe) / pe, K = (de * ye - te * xe) / pe;
            if (V < 1e-6 || V > 1 - 1e-6 || K < 1e-6 || K > 1 - 1e-6) continue;
            const oe = [
              y[0] + V * P[0],
              y[1] + V * P[1],
              y[2] + V * P[2]
            ], he = [
              S[0] + K * U[0],
              S[1] + K * U[1],
              S[2] + K * U[2]
            ];
            if (Math.hypot(oe[0] - he[0], oe[1] - he[1], oe[2] - he[2]) > 1e-6) continue;
            const Ce = i(oe);
            for (const X of [
              r,
              M
            ]) {
              const [Ae, $e] = v[X], me = v.length;
              v[X] = [
                Ae,
                Ce
              ], v.push([
                Ce,
                $e
              ]), a(X, me);
              const ue = A.get(X);
              ue && (A.set(X, [
                ...ue.slice(0, 6),
                ...Array(6).fill(false)
              ]), A.set(me, [
                ...Array(6).fill(false),
                ...ue.slice(6)
              ]));
              const H = W.get(X);
              H && (W.set(X, [
                H[0],
                0,
                H[2]
              ]), W.set(me, [
                0,
                H[1],
                H[2]
              ]));
            }
            h++;
          }
        }
        h > 0 && console.log(`[CLI Modeler] ${h} cruces de barras partidos con nudo (como ETABS; meshcross 0 lo apaga)`);
      }
      for (const e of l.shells) {
        const c = e.pts.map((b) => k.get(b));
        if (c.some((b) => b === void 0)) {
          l.errors.push(`shell ${e.id}: algun nodo inexistente`);
          continue;
        }
        const a = v.length;
        J.set(e.id, a), v.push(c), s.set(a, e.E), E.set(a, e.E / (2 * 1.2)), ne.set(a, e.t), I.set(a, e.rho ?? 2.45), T.set(a, 0.2);
        const i = l.shellTypes.get(e.id);
        i !== void 0 && ee.set(a, i);
      }
      const ae = /* @__PURE__ */ new Map();
      for (const [e, c] of l.supports.entries()) {
        const a = k.get(e);
        a !== void 0 && ae.set(a, c);
      }
      const O = /* @__PURE__ */ new Map();
      for (const [e, c] of l.loads.entries()) {
        const a = k.get(e);
        a !== void 0 && O.set(a, [
          ...c
        ]);
      }
      const Fe = /* @__PURE__ */ new Map();
      for (const [e, c] of l.diaphragms.entries()) {
        const a = k.get(e);
        a !== void 0 && Fe.set(a, c);
      }
      const Me = /* @__PURE__ */ new Map();
      for (const [e, c] of l.masses.entries()) {
        const a = k.get(e);
        a !== void 0 && Me.set(a, c);
      }
      if (l.frameLoads.size) {
        const e = (c, a) => {
          const i = O.get(c) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          O.set(c, [
            i[0] + a[0],
            i[1] + a[1],
            i[2] + a[2],
            i[3] + a[3],
            i[4] + a[4],
            i[5] + a[5]
          ]);
        };
        for (const [c, a] of l.frameLoads.entries()) {
          const i = l.frames.find(($) => $.id === c);
          if (!i) {
            l.errors.push(`frameload ${c}: no existe esa barra`);
            continue;
          }
          const b = k.get(i.nI), h = k.get(i.nJ);
          if (b === void 0 || h === void 0) continue;
          const r = w[b], f = w[h], M = [
            f[0] - r[0],
            f[1] - r[1],
            f[2] - r[2]
          ], g = Math.hypot(M[0], M[1], M[2]);
          if (g < 1e-9) continue;
          const F = [
            M[0] / g,
            M[1] / g,
            M[2] / g
          ], m = g * g / 12, u = [
            F[1] * a[2] - F[2] * a[1],
            F[2] * a[0] - F[0] * a[2],
            F[0] * a[1] - F[1] * a[0]
          ];
          e(b, [
            a[0] * g / 2,
            a[1] * g / 2,
            a[2] * g / 2,
            m * u[0],
            m * u[1],
            m * u[2]
          ]), e(h, [
            a[0] * g / 2,
            a[1] * g / 2,
            a[2] * g / 2,
            -m * u[0],
            -m * u[1],
            -m * u[2]
          ]);
        }
      }
      const ie = /* @__PURE__ */ new Map(), N = 1 / Math.sqrt(3), Le = [
        [
          -N,
          -N
        ],
        [
          N,
          -N
        ],
        [
          N,
          N
        ],
        [
          -N,
          N
        ]
      ];
      for (const e of l.shells) {
        const c = l.shellLoads.get(e.id);
        if (!c) continue;
        const a = e.pts.map((h) => k.get(h));
        if (a.some((h) => h === void 0)) {
          l.errors.push(`areaload ${e.id}: algun nodo inexistente`);
          continue;
        }
        const i = a.map((h) => w[h]), b = [
          0,
          0,
          0,
          0
        ];
        for (const [h, r] of Le) {
          const f = [
            0.25 * (1 - h) * (1 - r),
            0.25 * (1 + h) * (1 - r),
            0.25 * (1 + h) * (1 + r),
            0.25 * (1 - h) * (1 + r)
          ], M = [
            -0.25 * (1 - r),
            0.25 * (1 - r),
            0.25 * (1 + r),
            -0.25 * (1 + r)
          ], g = [
            -0.25 * (1 - h),
            -0.25 * (1 + h),
            0.25 * (1 + h),
            0.25 * (1 - h)
          ], F = [
            0,
            1,
            2
          ].map((y) => M.reduce((_, S, q) => _ + S * i[q][y], 0)), m = [
            0,
            1,
            2
          ].map((y) => g.reduce((_, S, q) => _ + S * i[q][y], 0)), u = [
            F[1] * m[2] - F[2] * m[1],
            F[2] * m[0] - F[0] * m[2],
            F[0] * m[1] - F[1] * m[0]
          ], $ = Math.hypot(u[0], u[1], u[2]);
          for (let y = 0; y < 4; y++) b[y] += f[y] * c * $;
        }
        for (let h = 0; h < 4; h++) {
          const r = a[h], f = O.get(r) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          f[2] += b[h], O.set(r, f), ie.set(r, (ie.get(r) ?? 0) + b[h]);
        }
      }
      if (l.selfWeight) {
        const c = (a, i) => {
          const b = O.get(a) ?? [
            0,
            0,
            0,
            0,
            0,
            0
          ];
          b[2] += i, O.set(a, b);
        };
        v.forEach((a, i) => {
          const b = I.get(i) ?? 0;
          if (b) {
            if (a.length === 2) {
              const h = t.get(i) ?? 0, r = w[a[0]], f = w[a[1]], M = [
                f[0] - r[0],
                f[1] - r[1],
                f[2] - r[2]
              ];
              let g = Math.hypot(M[0], M[1], M[2]);
              const F = W.get(i);
              if (F) {
                const u = Math.hypot(M[0], M[1]);
                u > 1e-9 && Math.abs(Math.atan2(Math.abs(M[2]), u)) * 180 / Math.PI < 20 && (g = Math.max(g - F[0] - F[1], 0));
              }
              const m = h * g * b * 9.80665 * l.selfWeight;
              c(a[0], -m / 2), c(a[1], -m / 2);
            } else if (a.length === 4) {
              const h = ne.get(i) ?? 0, r = a.map((g) => w[g]);
              let f = 0;
              for (let g = 1; g < 3; g++) {
                const F = [
                  r[g][0] - r[0][0],
                  r[g][1] - r[0][1],
                  r[g][2] - r[0][2]
                ], m = [
                  r[g + 1][0] - r[0][0],
                  r[g + 1][1] - r[0][1],
                  r[g + 1][2] - r[0][2]
                ], u = [
                  F[1] * m[2] - F[2] * m[1],
                  F[2] * m[0] - F[0] * m[2],
                  F[0] * m[1] - F[1] * m[0]
                ];
                f += Math.hypot(u[0], u[1], u[2]) / 2;
              }
              const M = f * h * b * 9.80665 * l.selfWeight;
              for (const g of a) c(g, -M / 4);
            }
          }
        });
      }
      const Y = [];
      for (const e of l.springs) {
        const c = k.get(e.node);
        c !== void 0 && Y.push({
          node: c,
          dof: e.dof,
          k: e.k
        });
      }
      const G = [];
      for (const e of l.solids) {
        const c = e.pts.map((i) => k.get(i));
        if (c.some((i) => i === void 0)) {
          l.errors.push(`hex ${e.id}: algun nodo inexistente`);
          continue;
        }
        const a = v.length;
        v.push(c), s.set(a, e.E), T.set(a, e.nu), E.set(a, e.E / (2 * (1 + e.nu))), I.set(a, e.rho), G.push(a);
      }
      o.nodes.val = w, o.elements.val = v, o.nodeInputs.val = {
        supports: ae,
        loads: O,
        masses: Me,
        diaphragms: Fe,
        springs: Y
      }, o.springs && (o.springs.val = Y);
      const re = /* @__PURE__ */ new Map(), le = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map();
      for (const e of l.shells) {
        const c = J.get(e.id);
        if (c === void 0) continue;
        const a = l.shellLoads.get(e.id);
        a !== void 0 && Ie.set(c, a);
        const i = l.shellAngles.get(e.id);
        i !== void 0 && ve.set(c, i);
        const b = l.shellModsDir.get(e.id);
        if (b) {
          be.set(c, b), re.set(c, (b[0] + b[1]) / 2), le.set(c, (b[3] + b[4]) / 2);
          continue;
        }
        const h = l.shellMods.get(e.id);
        h && (re.set(c, h[0]), le.set(c, h[1]));
      }
      if (o.elementInputs.val = {
        elasticities: s,
        shearModuli: E,
        areas: t,
        momentsOfInertiaY: n,
        momentsOfInertiaZ: d,
        torsionalConstants: p,
        densities: I,
        poissonsRatios: T,
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
        shearAreasY: B,
        shearAreasZ: Z,
        momentReleases: A,
        endOffsets: W,
        plateFormulations: ee,
        frameLoads: R,
        meshAtIntersections: l.meshCross,
        solidIncompatible: l.solidIncompatible,
        selfWeight: l.selfWeight,
        etabsWallJoint: l.etabsWallJoint,
        areaObjects: l.areaObjs.map((e) => ({
          nodes: e.pts.map((c) => k.get(c)).filter((c) => c !== void 0),
          cells: e.cells.map((c) => J.get(c)).filter((c) => c !== void 0),
          q: e.cells.map((c) => l.shellLoads.get(c)).find((c) => c !== void 0),
          ang: e.cells.map((c) => l.shellAngles.get(c)).find((c) => c !== void 0)
        })).filter((e) => e.nodes.length === 4 && e.cells.length > 0)
      }, l.doSolve && G.length > 0 && G.length === v.length) try {
        const e = s.get(G[0]) ?? 25e6, c = T.get(G[0]) ?? 0.2;
        G.some((r) => Math.abs((s.get(r) ?? e) - e) > 1e-9 * e || Math.abs((T.get(r) ?? c) - c) > 1e-12) && l.errors.push("hex: hex8Solve lleva UN material; los solidos tienen E o nu distintos y se usa el del primero");
        const a = /* @__PURE__ */ new Map();
        for (const [r, f] of o.nodeInputs.val.supports ?? []) a.set(r, [
          !!f[0],
          !!f[1],
          !!f[2]
        ]);
        const i = /* @__PURE__ */ new Map();
        for (const [r, f] of o.nodeInputs.val.loads ?? []) i.set(r, [
          f[0] ?? 0,
          f[1] ?? 0,
          f[2] ?? 0
        ]);
        const b = ze({
          nodes: w,
          elements: v,
          E: e,
          nu: c,
          supports: a,
          loads: i,
          incompatible: l.solidIncompatible
        }), h = /* @__PURE__ */ new Map();
        b.displacements.forEach(([r, f, M], g) => h.set(g, [
          r,
          f,
          M,
          0,
          0,
          0
        ])), o.deformOutputs.val = {
          deformations: h,
          reactions: /* @__PURE__ */ new Map()
        }, o.analyzeOutputs.val = {
          solidStress: b.stressPerElement,
          solidVonMises: b.vonMisesPerElement
        }, console.log(`[CLI Modeler] Solve OK \u2014 ${v.length} solidos H8, ${w.length} nodos (${b.elapsedMs.toFixed(0)} ms)`);
      } catch (e) {
        l.errors.push(`hex8Solve: ${(e == null ? void 0 : e.message) ?? e}`);
      }
      else if (l.doSolve && w.length && v.length) try {
        o.deformOutputs.val = Je(w, v, o.nodeInputs.val, o.elementInputs.val, Y.length ? Y : void 0);
        try {
          o.analyzeOutputs.val = Oe(w, v, o.elementInputs.val, o.deformOutputs.val);
        } catch (e) {
          console.warn("[CLI Modeler] analyze:", (e == null ? void 0 : e.message) ?? e);
        }
        console.log("[CLI Modeler] Solve OK \u2014", v.length, "elementos,", w.length, "nodos");
      } catch (e) {
        l.errors.push(`solve fall\xF3: ${e.message}`);
      }
      if (o.objects3D.val = [], l.errors.length) {
        console.warn("[CLI Modeler] Errores:");
        for (const e of l.errors) console.warn("  -", e);
      }
      window.__hekatanCliErrors = l.errors;
      let ce = 0, we = 0;
      const se = o.deformOutputs.val;
      if ((_a = se == null ? void 0 : se.deformations) == null ? void 0 : _a.size) for (const [, e] of se.deformations) Math.abs(e[2]) > Math.abs(ce) && (ce = e[2]);
      if ((_b = se == null ? void 0 : se.reactions) == null ? void 0 : _b.size) for (const [, e] of se.reactions) we += e[2] || 0;
      window.__hekatanCliStats = {
        nodes: w.length,
        frames: l.frames.length,
        shells: l.shells.length,
        supports: ae.size,
        loads: O.size,
        springs: Y.length,
        solved: l.doSolve,
        errors: l.errors.length,
        maxUzMm: +(ce * 1e3).toFixed(3),
        sumRz: +we.toFixed(1)
      };
    }
  };
});
export {
  __tla,
  _e as c,
  je as p
};
